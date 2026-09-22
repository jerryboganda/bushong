import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ALL_QUESTIONS, ALL_CHAPTERS } from '../data/allChapters';
import { MockExamQuestion, MockExamAttempt } from '../types/features';
import { 
  Award, 
  Clock, 
  Flag, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  AlertTriangle, 
  Layers, 
  FileText, 
  Check, 
  X, 
  Sparkles,
  BarChart3,
  Strikethrough
} from 'lucide-react';

const EXAM_STORAGE_KEY = 'rad_mock_exam_history_v1';

export function getMockExamHistory(): MockExamAttempt[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(EXAM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveMockExamAttempt(attempt: MockExamAttempt): void {
  if (typeof window === 'undefined') return;
  try {
    const list = getMockExamHistory();
    localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify([attempt, ...list]));
  } catch {}
}

export const MockExamSimulator: React.FC<{ onNavigateToChapter?: (ch: number) => void }> = ({ onNavigateToChapter }) => {
  // Exam phases: 'config' | 'exam' | 'results'
  const [phase, setPhase] = useState<'config' | 'exam' | 'results'>('config');
  
  // Config
  const [examSize, setExamSize] = useState<number>(50); // 20, 50, 100, 200
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'Safety' | 'Image Production' | 'Patient Care' | 'Procedures'>('all');
  
  // Active Exam State
  const [activeQuestions, setActiveQuestions] = useState<MockExamQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [eliminatedOptions, setEliminatedOptions] = useState<Record<string, Record<number, boolean>>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(0);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState<boolean>(false);
  
  // Results State
  const [lastAttempt, setLastAttempt] = useState<MockExamAttempt | null>(null);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect' | 'flagged'>('all');

  // Generate Multiple Choice Options for each question
  const generateExamQuestions = (count: number, catFilter: string): MockExamQuestion[] => {
    // Collect questions that have answers
    const validRaw = ALL_QUESTIONS.filter(q => q.answer && q.answer.trim().length > 3);
    
    // Categorize by ARRT sections based on chapter
    const categorized = validRaw.map((q): MockExamQuestion => {
      let category: 'Safety' | 'Image Production' | 'Patient Care' | 'Procedures' = 'Image Production';
      if (q.chapterNumber >= 30) {
        category = 'Safety';
      } else if (q.chapterNumber >= 20 && q.chapterNumber <= 29) {
        category = 'Procedures';
      } else if (q.chapterNumber === 1 || q.chapterNumber === 10) {
        category = 'Patient Care';
      } else {
        category = 'Image Production';
      }

      // Generate 4 options: correct answer + 3 plausible distractors from other questions
      const correctAnswer = q.answer || '';
      
      // Pick 3 distractors from questions in neighboring or same chapters
      const otherAnswers = validRaw
        .filter(oq => oq.id !== q.id && oq.answer && oq.answer !== correctAnswer && Math.abs(oq.chapterNumber - q.chapterNumber) <= 5)
        .map(oq => oq.answer as string);
      
      // Fallback distractors if needed
      const standardDistractors = [
        "Inversely proportional to the cube of atomic number (1/Z³)",
        "Increases patient radiation dose without affecting receptor exposure",
        "Requires a minimum tube voltage of 69.5 kVp for activation",
        "Controlled strictly by filtration and collimation parameters",
        "Decreases subject contrast by generating forward scatter",
        "Directly proportional to the square of tube voltage (kVp²)",
        "Absorbed entirely by the photoelectric effect in high-Z tissues"
      ];

      // Build distinct pool of candidate distractors
      const pool = Array.from(new Set([...otherAnswers, ...standardDistractors]))
        .filter(d => d.trim() !== correctAnswer.trim());

      const chosenDistractors: string[] = [];
      let offset = 0;
      while (chosenDistractors.length < 3 && offset < pool.length * 2) {
        const candidate = pool[(q.questionNumber * 7 + offset * 11) % pool.length];
        if (candidate && !chosenDistractors.includes(candidate) && candidate !== correctAnswer) {
          chosenDistractors.push(candidate);
        }
        offset++;
      }
      while (chosenDistractors.length < 3) {
        for (const sd of standardDistractors) {
          if (!chosenDistractors.includes(sd) && sd !== correctAnswer) {
            chosenDistractors.push(sd);
            if (chosenDistractors.length === 3) break;
          }
        }
      }

      // Determine correct option position (0, 1, 2, or 3)
      const correctIdx = (q.questionNumber * 13) % 4;
      const opts: string[] = [];
      let distPointer = 0;
      for (let i = 0; i < 4; i++) {
        if (i === correctIdx) {
          opts.push(correctAnswer);
        } else {
          opts.push(chosenDistractors[distPointer++] || standardDistractors[0]);
        }
      }

      const chapter = ALL_CHAPTERS.find(c => c.number === q.chapterNumber);

      return {
        id: q.id,
        questionNumber: q.questionNumber,
        chapterNumber: q.chapterNumber,
        partId: chapter ? chapter.partId : 'part1',
        question: q.question,
        options: opts,
        correctOptionIndex: correctIdx,
        explanation: q.explanation || q.answer || 'Consult the corresponding chapter text in Bushong 11th Edition.',
        category
      };
    });

    const filtered = catFilter === 'all' 
      ? categorized 
      : categorized.filter(q => q.category === catFilter);

    // Shuffle randomly
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  };

  const handleStartExam = () => {
    const qList = generateExamQuestions(examSize, categoryFilter);
    setActiveQuestions(qList);
    setUserAnswers({});
    setFlaggedQuestions({});
    setEliminatedOptions({});
    setCurrentIdx(0);
    // 75 seconds per question standard ARRT time
    setTimeRemainingSeconds(qList.length * 75);
    setIsTimerPaused(false);
    setPhase('exam');
  };

  // Timer Countdown Effect (stable 1-second interval without re-creation drift)
  useEffect(() => {
    if (phase !== 'exam' || isTimerPaused) return;

    const timer = setInterval(() => {
      setTimeRemainingSeconds(prev => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase, isTimerPaused]);

  // Handle exam completion when timer reaches zero
  useEffect(() => {
    if (phase === 'exam' && timeRemainingSeconds === 0 && activeQuestions.length > 0) {
      handleFinishExam();
    }
  }, [phase, timeRemainingSeconds, activeQuestions.length]);

  const handleSelectOption = (qId: string, optIdx: number) => {
    setUserAnswers(prev => ({
      ...prev,
      [qId]: optIdx
    }));
  };

  const handleToggleFlag = (qId: string) => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const handleToggleEliminate = (qId: string, optIdx: number) => {
    setEliminatedOptions(prev => {
      const qElim = prev[qId] || {};
      return {
        ...prev,
        [qId]: {
          ...qElim,
          [optIdx]: !qElim[optIdx]
        }
      };
    });
  };

  const handleFinishExam = () => {
    if (activeQuestions.length === 0) return;

    let correct = 0;
    const catStats: Record<string, { total: number; correct: number; percentage: number }> = {
      'Safety': { total: 0, correct: 0, percentage: 0 },
      'Image Production': { total: 0, correct: 0, percentage: 0 },
      'Patient Care': { total: 0, correct: 0, percentage: 0 },
      'Procedures': { total: 0, correct: 0, percentage: 0 }
    };

    activeQuestions.forEach(q => {
      const userChoice = userAnswers[q.id];
      const isRight = userChoice === q.correctOptionIndex;
      if (isRight) correct++;

      if (!catStats[q.category]) {
        catStats[q.category] = { total: 0, correct: 0, percentage: 0 };
      }
      catStats[q.category].total++;
      if (isRight) catStats[q.category].correct++;
    });

    Object.keys(catStats).forEach(cat => {
      const s = catStats[cat];
      s.percentage = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
    });

    const rawPercentage = (correct / activeQuestions.length) * 100;
    // ARRT scaled score: calibrated to standard 1–99 scale, 75 passing
    let scaledScore = Math.round(50 + (rawPercentage - 50) * 1.0);
    scaledScore = Math.max(1, Math.min(99, Math.round(rawPercentage)));
    const passed = scaledScore >= 75;

    const totalTimeAllocated = activeQuestions.length * 75;
    const timeSpent = Math.max(1, totalTimeAllocated - timeRemainingSeconds);

    const attempt: MockExamAttempt = {
      id: `attempt-${Date.now()}`,
      date: new Date().toISOString(),
      totalQuestions: activeQuestions.length,
      correctAnswers: correct,
      scaledScore,
      passed,
      timeSpentSeconds: timeSpent,
      categoryBreakdown: catStats
    };

    saveMockExamAttempt(attempt);
    setLastAttempt(attempt);
    setPhase('results');
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQ = activeQuestions[currentIdx];

  const reviewedQuestions = useMemo(() => {
    if (!lastAttempt) return [];
    return activeQuestions.filter(q => {
      const userChoice = userAnswers[q.id];
      const isIncorrect = userChoice !== q.correctOptionIndex;
      const isFlagged = !!flaggedQuestions[q.id];
      if (reviewFilter === 'incorrect') return isIncorrect;
      if (reviewFilter === 'flagged') return isFlagged;
      return true;
    });
  }, [activeQuestions, userAnswers, flaggedQuestions, reviewFilter, lastAttempt]);

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* 1. CONFIGURATION VIEW */}
      {phase === 'config' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 xs:p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                ARRT Radiography Mock Exam Simulator
              </h1>
              <p className="text-xs sm:text-sm text-slate-400">
                Timed, high-yield full-length practice tests replicating the official Pearson VUE board exam interface.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Exam Length */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Select Exam Format & Length
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { count: 20, time: '25 min', label: 'Quick Sprint' },
                  { count: 50, time: '62 min', label: 'Standard Practice' },
                  { count: 100, time: '125 min', label: 'Half-Mock' },
                  { count: 200, time: '250 min', label: 'Full ARRT Simulation' }
                ].map(item => (
                  <button
                    key={item.count}
                    onClick={() => setExamSize(item.count)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      examSize === item.count
                        ? 'bg-cyan-500/20 border-cyan-400 text-white font-bold shadow-lg shadow-cyan-500/10'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold">{item.count} Questions</span>
                      <span className="text-[10px] font-mono text-cyan-400">{item.time}</span>
                    </div>
                    <span className="text-xs text-slate-400 block mt-1">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Category Focus */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                ARRT Content Specification Focus
              </label>
              <div className="space-y-2">
                {[
                  { id: 'all', title: 'Comprehensive Exam (All 4 ARRT Sections)', desc: 'Balanced distribution across physics, safety, imaging, and procedures' },
                  { id: 'Safety', title: 'Radiation Safety & Protection', desc: 'Biological effects, dose limits, ALARA, shielding, and patient protection' },
                  { id: 'Image Production', title: 'Image Production & Physics', desc: 'X-ray tube, generator, technique factors, scatter control, and digital DR/CR' },
                  { id: 'Procedures', title: 'Specialized Modalities & Procedures', desc: 'Fluoroscopy, computed tomography, interventional, and quality control' }
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setCategoryFilter(cat.id as any)}
                    className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-start justify-between ${
                      categoryFilter === cat.id
                        ? 'bg-cyan-500/20 border-cyan-400 text-white font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold">{cat.title}</div>
                      <div className="text-[11px] text-slate-400 font-normal">{cat.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Test Features Checklist */}
          <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4 text-xs text-slate-300 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Realistic Scaled Scoring (Pass ≥ 75)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Strike-Through Option Elimination</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Full Textbook Rationales & Review</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <span className="text-xs text-slate-500 font-mono text-center sm:text-left">
              Question bank: {ALL_QUESTIONS.length} authoritative Bushong items
            </span>
            <button
              onClick={handleStartExam}
              className="w-full sm:w-auto min-h-[44px] justify-center px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-sm shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2"
            >
              Start Practice Exam <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 2. ACTIVE EXAM VIEW */}
      {phase === 'exam' && currentQ && (
        <div className="space-y-4">
          {/* Top Exam Toolbar */}
          <div className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl p-2.5 xs:px-4 xs:py-3 flex flex-wrap items-center justify-between gap-2 shadow-lg">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-white">
                Q {currentIdx + 1}/{activeQuestions.length}
              </span>
              <span className="text-slate-600">|</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono text-[10px] xs:text-[11px] truncate max-w-[130px] xs:max-w-none">
                {currentQ.category}
              </span>
            </div>

            {/* Timer & Controls */}
            <div className="flex items-center gap-1.5 xs:gap-2 flex-wrap sm:flex-nowrap">
              <div className={`flex items-center gap-1 px-2 xs:px-3 py-1 rounded-lg font-mono text-xs xs:text-sm font-bold border ${
                timeRemainingSeconds < 300
                  ? 'bg-rose-950/60 border-rose-500 text-rose-300 animate-pulse'
                  : 'bg-slate-950 border-slate-800 text-cyan-400'
              }`}>
                <Clock className="w-3.5 h-3.5" />
                {formatTimer(timeRemainingSeconds)}
              </div>

              <button
                onClick={() => setIsTimerPaused(!isTimerPaused)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 min-w-[32px] min-h-[32px] flex items-center justify-center"
                title={isTimerPaused ? 'Resume exam timer' : 'Pause exam timer'}
              >
                {isTimerPaused ? <Play className="w-4 h-4 text-emerald-400" /> : <Pause className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setNavDrawerOpen(!navDrawerOpen)}
                className="px-2 xs:px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1 min-h-[36px]"
              >
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden xs:inline">Grid</span>
                <span className="font-mono text-[11px]">({Object.keys(userAnswers).length}/{activeQuestions.length})</span>
              </button>

              <button
                onClick={() => {
                  if (window.confirm('Are you sure you want to end and submit your exam?')) {
                    handleFinishExam();
                  }
                }}
                className="px-2.5 xs:px-3 py-1 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow transition-colors min-h-[32px]"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Question Navigator Drawer */}
          {navDrawerOpen && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 xs:p-4 space-y-3 animate-fadeIn">
              <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 text-xs font-bold text-slate-300">
                <span>Question Navigator Grid</span>
                <div className="flex items-center gap-3 text-[11px] font-normal text-slate-400 flex-wrap">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400" /> Answered</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400" /> Flagged</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-700" /> Unanswered</span>
                </div>
              </div>

              <div className="grid grid-cols-5 xs:grid-cols-8 sm:grid-cols-10 md:grid-cols-15 lg:grid-cols-20 gap-1.5 max-h-48 overflow-y-auto pr-1 no-scrollbar touch-scroll">
                {activeQuestions.map((q, idx) => {
                  const isAnswered = userAnswers[q.id] !== undefined;
                  const isFlagged = !!flaggedQuestions[q.id];
                  const isCurrent = idx === currentIdx;
                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setCurrentIdx(idx);
                        setNavDrawerOpen(false);
                      }}
                      className={`h-8 rounded text-xs font-mono font-bold border transition-all flex items-center justify-center ${
                        isCurrent
                          ? 'ring-2 ring-white scale-105'
                          : ''
                      } ${
                        isFlagged
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500'
                          : isAnswered
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Question Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 xs:p-6 sm:p-8 space-y-5 xs:space-y-6 shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2.5 xs:gap-3">
                <span className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 text-cyan-400 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  {currentIdx + 1}
                </span>
                <p className="text-sm xs:text-base sm:text-lg font-semibold text-white leading-relaxed">
                  {currentQ.question}
                </p>
              </div>

              <button
                onClick={() => handleToggleFlag(currentQ.id)}
                className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 flex-shrink-0 min-h-[38px] transition-all ${
                  flaggedQuestions[currentQ.id]
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                }`}
                title="Flag question to review before submitting"
              >
                <Flag className={`w-4 h-4 ${flaggedQuestions[currentQ.id] ? 'fill-amber-400 text-amber-400' : ''}`} />
                <span className="hidden sm:inline">Flag for Review</span>
              </button>
            </div>

            {/* Multiple Choice Options */}
            <div className="space-y-2.5 xs:space-y-3 pt-1">
              {currentQ.options.map((option, optIdx) => {
                const isSelected = userAnswers[currentQ.id] === optIdx;
                const isEliminated = !!eliminatedOptions[currentQ.id]?.[optIdx];
                const letter = String.fromCharCode(65 + optIdx); // A, B, C, D

                return (
                  <div
                    key={optIdx}
                    className={`flex items-start gap-2.5 xs:gap-3 p-3 xs:p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer select-none ${
                      isSelected
                        ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-md'
                        : isEliminated
                        ? 'bg-slate-950/40 border-slate-800/40 text-slate-600 opacity-60'
                        : 'bg-slate-950 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                    onClick={() => handleSelectOption(currentQ.id, optIdx)}
                  >
                    {/* Option Letter Badge */}
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs font-mono flex-shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950'
                        : isEliminated
                        ? 'bg-slate-900 text-slate-600 line-through'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      {letter}
                    </div>

                    {/* Option Text */}
                    <span className={`flex-1 text-xs sm:text-sm leading-relaxed ${
                      isEliminated ? 'line-through text-slate-500' : ''
                    }`}>
                      {option}
                    </span>

                    {/* Strike-through Eliminator Icon */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleEliminate(currentQ.id, optIdx);
                      }}
                      className={`p-1.5 rounded-lg transition-colors flex-shrink-0 min-w-[32px] min-h-[32px] flex items-center justify-center ${
                        isEliminated
                          ? 'text-rose-400 hover:text-white bg-rose-950/40'
                          : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
                      }`}
                      title={isEliminated ? "Undo option elimination" : "Strike-through eliminated option (cross out)"}
                    >
                      <Strikethrough className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Bottom Nav Buttons */}
            <div className="flex flex-col xs:flex-row items-center justify-between gap-3 pt-4 sm:pt-6 border-t border-slate-800">
              <button
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
                className="w-full xs:w-auto min-h-[44px] justify-center px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-800 text-xs sm:text-sm text-slate-300 font-semibold disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>

              <span className="text-xs font-mono text-slate-500 order-first xs:order-none">
                {Object.keys(userAnswers).length} of {activeQuestions.length} answered
              </span>

              {currentIdx < activeQuestions.length - 1 ? (
                <button
                  onClick={() => setCurrentIdx(prev => Math.min(activeQuestions.length - 1, prev + 1))}
                  className="w-full xs:w-auto min-h-[44px] justify-center px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleFinishExam}
                  className="w-full xs:w-auto min-h-[44px] justify-center px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition-all flex items-center gap-1.5"
                >
                  Submit & Score <Award className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 3. EXAM RESULTS & REVIEW VIEW */}
      {phase === 'results' && lastAttempt && (
        <div className="space-y-6">
          {/* Result Banner */}
          <div className={`rounded-2xl border p-4 xs:p-6 sm:p-8 shadow-2xl relative overflow-hidden ${
            lastAttempt.passed
              ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border-emerald-500/40'
              : 'bg-gradient-to-br from-slate-900 via-slate-900 to-rose-950/40 border-rose-500/40'
          }`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                    lastAttempt.passed
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                  }`}>
                    {lastAttempt.passed ? 'ARRT Pass Standard Met' : 'Did Not Meet Passing Scaled Score'}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Completed in {Math.floor(lastAttempt.timeSpentSeconds / 60)}m {lastAttempt.timeSpentSeconds % 60}s
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Scaled Score: <span className={lastAttempt.passed ? 'text-emerald-400' : 'text-rose-400'}>{lastAttempt.scaledScore}</span> / 99
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  {lastAttempt.passed
                    ? `Outstanding! You answered ${lastAttempt.correctAnswers} of ${lastAttempt.totalQuestions} questions correctly (${Math.round((lastAttempt.correctAnswers / lastAttempt.totalQuestions) * 100)}%), comfortably surpassing the ARRT minimum passing scaled score of 75.`
                    : `You answered ${lastAttempt.correctAnswers} of ${lastAttempt.totalQuestions} questions correctly (${Math.round((lastAttempt.correctAnswers / lastAttempt.totalQuestions) * 100)}%). Review your weak domain areas below before attempting another practice run.`}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setPhase('config')}
                  className="w-full sm:w-auto min-h-[44px] justify-center px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" /> Retake / New Exam
                </button>
              </div>
            </div>

            {/* Category Breakdown Bars */}
            <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(lastAttempt.categoryBreakdown).map(([cat, stats]) => (
                <div key={cat} className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-300">{cat}</span>
                    <span className="font-mono text-cyan-400 font-semibold">{stats.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        stats.percentage >= 75 ? 'bg-emerald-400' : stats.percentage >= 60 ? 'bg-amber-400' : 'bg-rose-400'
                      }`}
                      style={{ width: `${stats.percentage}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {stats.correct} / {stats.total} correct
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Question Review Toolbar */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 xs:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              Detailed Problem Review ({reviewedQuestions.length})
            </h3>

            <div className="flex flex-wrap items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold w-full sm:w-auto">
              <button
                onClick={() => setReviewFilter('all')}
                className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg transition-all min-h-[32px] text-center ${
                  reviewFilter === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                All ({activeQuestions.length})
              </button>
              <button
                onClick={() => setReviewFilter('incorrect')}
                className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg transition-all min-h-[32px] text-center ${
                  reviewFilter === 'incorrect' ? 'bg-rose-500/20 text-rose-300 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Incorrect ({lastAttempt.totalQuestions - lastAttempt.correctAnswers})
              </button>
              <button
                onClick={() => setReviewFilter('flagged')}
                className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg transition-all min-h-[32px] text-center ${
                  reviewFilter === 'flagged' ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Flagged ({Object.values(flaggedQuestions).filter(Boolean).length})
              </button>
            </div>
          </div>

          {/* Question Review Items */}
          <div className="space-y-4">
            {reviewedQuestions.map((q, idx) => {
              const userChoice = userAnswers[q.id];
              const isCorrect = userChoice === q.correctOptionIndex;
              const isUnanswered = userChoice === undefined;

              return (
                <div
                  key={q.id}
                  className={`bg-slate-900 border rounded-xl p-5 sm:p-6 space-y-4 shadow-md ${
                    isCorrect
                      ? 'border-slate-800'
                      : 'border-rose-500/40 bg-rose-950/10'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5 ${
                        isCorrect
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                      }`}>
                        {idx + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white leading-snug">{q.question}</p>
                        <span className="text-[11px] font-mono text-slate-500">
                          Ch.{q.chapterNumber} • {q.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {isCorrect ? (
                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                          <CheckCircle className="w-3.5 h-3.5" /> Correct
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/20">
                          <XCircle className="w-3.5 h-3.5" /> {isUnanswered ? 'Unanswered' : 'Incorrect'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Options Display */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt, optIdx) => {
                      const letter = String.fromCharCode(65 + optIdx);
                      const isUserPick = userChoice === optIdx;
                      const isRealAnswer = optIdx === q.correctOptionIndex;

                      return (
                        <div
                          key={optIdx}
                          className={`p-2.5 rounded-lg border flex items-start gap-2 ${
                            isRealAnswer
                              ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-100 font-semibold'
                              : isUserPick
                              ? 'bg-rose-950/40 border-rose-500/50 text-rose-200'
                              : 'bg-slate-950 border-slate-800 text-slate-400'
                          }`}
                        >
                          <span className="font-mono font-bold text-[11px]">{letter}.</span>
                          <span className="flex-1">{opt}</span>
                          {isRealAnswer && <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />}
                          {isUserPick && !isRealAnswer && <X className="w-4 h-4 text-rose-400 flex-shrink-0" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Textbook Rationale Box */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1.5">
                    <strong className="text-cyan-400 block text-xs font-bold uppercase tracking-wider">
                      Authoritative Bushong 11th Edition Rationale:
                    </strong>
                    <p>{q.explanation}</p>
                    {onNavigateToChapter && (
                      <button
                        onClick={() => onNavigateToChapter(q.chapterNumber)}
                        className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 font-semibold pt-1 text-xs"
                      >
                        Read Chapter {q.chapterNumber} <ChevronRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

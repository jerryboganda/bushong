import React, { useState, useMemo, useEffect } from 'react';
import { ALL_PENGUINS, ALL_QUESTIONS, ALL_FORMULAS, ALL_CHAPTERS } from '../data/allChapters';
import { Penguin, ChallengeQuestion, Formula } from '../types/book';
import { SrsRating, SrsCardState } from '../types/features';
import { getAllSrsCards, processSrsReview, isCardDue, getDueStats } from '../utils/srsEngine';
import { 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Bookmark, 
  RotateCcw, 
  Lightbulb, 
  Search, 
  Shuffle, 
  Filter, 
  Check,
  Clock,
  Flame,
  Award
} from 'lucide-react';

export const StudyDeck: React.FC<{ 
  onNavigateToChapter: (ch: number) => void;
  initialMode?: 'penguins' | 'questions' | 'formulas';
}> = ({ onNavigateToChapter, initialMode = 'penguins' }) => {
  const [mode, setMode] = useState<'penguins' | 'questions' | 'formulas'>(initialMode);

  useEffect(() => {
    if (initialMode) {
      setMode(initialMode);
    }
  }, [initialMode]);

  // SRS State
  const [srsMap, setSrsMap] = useState<Record<string, SrsCardState>>(() => getAllSrsCards());
  const [filterDueOnly, setFilterDueOnly] = useState<boolean>(false);
  const dueStats = useMemo(() => getDueStats(), [srsMap]);

  // Penguin Flashcards State
  const [penguinIdx, setPenguinIdx] = useState(0);
  const [penguinChapterFilter, setPenguinChapterFilter] = useState<number | 'all'>('all');
  const [penguinSearch, setPenguinSearch] = useState<string>('');
  const [filterBookmarksOnly, setFilterBookmarksOnly] = useState(false);
  const [bookmarkedPenguins, setBookmarkedPenguins] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('rad_bookmarked_penguins');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Questions State
  const [qIdx, setQIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [questionChapterFilter, setQuestionChapterFilter] = useState<number | 'all'>('all');
  const [questionSearch, setQuestionSearch] = useState<string>('');
  const [filterQuestionBookmarksOnly, setFilterQuestionBookmarksOnly] = useState(false);
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('rad_bookmarked_questions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Formula State
  const [formulaIdx, setFormulaIdx] = useState(0);
  const [showFormulaEquation, setShowFormulaEquation] = useState(false);
  const [formulaViewMode, setFormulaViewMode] = useState<'drill' | 'grid'>('drill');
  const [formulaChapterFilter, setFormulaChapterFilter] = useState<number | 'all'>('all');
  const [formulaSearch, setFormulaSearch] = useState<string>('');
  const [filterFormulaBookmarksOnly, setFilterFormulaBookmarksOnly] = useState(false);
  const [bookmarkedFormulas, setBookmarkedFormulas] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('rad_bookmarked_formulas');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Handle SRS Rating Action
  const handleRateCard = (id: string, type: 'penguin' | 'question' | 'formula', rating: SrsRating) => {
    processSrsReview(id, type, rating);
    setSrsMap(getAllSrsCards());
    if (mode === 'penguins') {
      nextPenguin();
    } else if (mode === 'questions') {
      nextQuestion();
    } else if (mode === 'formulas') {
      nextFormula();
    }
  };

  // Filtered Penguins
  const filteredPenguins = useMemo(() => {
    return ALL_PENGUINS.filter(p => {
      if (filterBookmarksOnly && !bookmarkedPenguins.includes(p.id)) return false;
      if (filterDueOnly && !isCardDue(srsMap[p.id])) return false;
      if (penguinChapterFilter !== 'all' && p.chapterNumber !== penguinChapterFilter) return false;
      if (penguinSearch.trim()) {
        const s = penguinSearch.toLowerCase();
        return p.title.toLowerCase().includes(s) || p.content.toLowerCase().includes(s);
      }
      return true;
    });
  }, [filterBookmarksOnly, bookmarkedPenguins, filterDueOnly, srsMap, penguinChapterFilter, penguinSearch]);

  const safePenguinIdx = Math.min(penguinIdx, Math.max(0, filteredPenguins.length - 1));
  const currentPenguin: Penguin | undefined = filteredPenguins[safePenguinIdx];

  const togglePenguinBookmark = (id: string) => {
    const updated = bookmarkedPenguins.includes(id)
      ? bookmarkedPenguins.filter(x => x !== id)
      : [...bookmarkedPenguins, id];
    setBookmarkedPenguins(updated);
    try {
      localStorage.setItem('rad_bookmarked_penguins', JSON.stringify(updated));
    } catch {}
  };

  const nextPenguin = () => {
    if (safePenguinIdx < filteredPenguins.length - 1) {
      setPenguinIdx(safePenguinIdx + 1);
    } else {
      setPenguinIdx(0);
    }
  };

  const prevPenguin = () => {
    if (safePenguinIdx > 0) {
      setPenguinIdx(safePenguinIdx - 1);
    } else {
      setPenguinIdx(filteredPenguins.length - 1);
    }
  };

  const shufflePenguins = () => {
    if (filteredPenguins.length > 1) {
      let randomIdx = safePenguinIdx;
      while (randomIdx === safePenguinIdx) {
        randomIdx = Math.floor(Math.random() * filteredPenguins.length);
      }
      setPenguinIdx(randomIdx);
    }
  };

  const handleToggleFilterPenguinBookmarks = () => {
    setFilterBookmarksOnly(prev => !prev);
    setPenguinIdx(0);
  };

  // Filtered Questions
  const filteredQuestions = useMemo(() => {
    return ALL_QUESTIONS.filter(q => {
      if (filterQuestionBookmarksOnly && !bookmarkedQuestions.includes(q.id)) return false;
      if (filterDueOnly && !isCardDue(srsMap[q.id])) return false;
      if (questionChapterFilter !== 'all' && q.chapterNumber !== questionChapterFilter) return false;
      if (questionSearch.trim()) {
        const s = questionSearch.toLowerCase();
        const matchQ = q.question.toLowerCase().includes(s);
        const matchA = q.answer ? q.answer.toLowerCase().includes(s) : false;
        const matchE = q.explanation ? q.explanation.toLowerCase().includes(s) : false;
        if (!matchQ && !matchA && !matchE) return false;
      }
      return true;
    });
  }, [filterQuestionBookmarksOnly, bookmarkedQuestions, filterDueOnly, srsMap, questionChapterFilter, questionSearch]);

  const safeQIdx = Math.min(qIdx, Math.max(0, filteredQuestions.length - 1));
  const currentQuestion: ChallengeQuestion | undefined = filteredQuestions[safeQIdx];

  const toggleQuestionBookmark = (id: string) => {
    const updated = bookmarkedQuestions.includes(id)
      ? bookmarkedQuestions.filter(x => x !== id)
      : [...bookmarkedQuestions, id];
    setBookmarkedQuestions(updated);
    try {
      localStorage.setItem('rad_bookmarked_questions', JSON.stringify(updated));
    } catch {}
  };

  const nextQuestion = () => {
    setShowAnswer(false);
    if (safeQIdx < filteredQuestions.length - 1) setQIdx(safeQIdx + 1);
    else setQIdx(0);
  };

  const prevQuestion = () => {
    setShowAnswer(false);
    if (safeQIdx > 0) setQIdx(safeQIdx - 1);
    else setQIdx(filteredQuestions.length - 1);
  };

  const shuffleQuestions = () => {
    if (filteredQuestions.length > 1) {
      let randomIdx = safeQIdx;
      while (randomIdx === safeQIdx) {
        randomIdx = Math.floor(Math.random() * filteredQuestions.length);
      }
      setQIdx(randomIdx);
      setShowAnswer(false);
    }
  };

  const handleToggleFilterQuestionBookmarks = () => {
    setFilterQuestionBookmarksOnly(prev => !prev);
    setQIdx(0);
    setShowAnswer(false);
  };

  const toggleFormulaBookmark = (id: string) => {
    const updated = bookmarkedFormulas.includes(id)
      ? bookmarkedFormulas.filter(x => x !== id)
      : [...bookmarkedFormulas, id];
    setBookmarkedFormulas(updated);
    try {
      localStorage.setItem('rad_bookmarked_formulas', JSON.stringify(updated));
    } catch {}
  };

  const handleToggleFilterFormulaBookmarks = () => {
    setFilterFormulaBookmarksOnly(prev => !prev);
    setFormulaIdx(0);
    setShowFormulaEquation(false);
  };

  // Filtered Formulas
  const filteredFormulas = useMemo(() => {
    return ALL_FORMULAS.filter(f => {
      if (filterFormulaBookmarksOnly && !bookmarkedFormulas.includes(f.id)) return false;
      if (filterDueOnly && !isCardDue(srsMap[f.id])) return false;
      if (formulaChapterFilter !== 'all' && f.chapterNumber !== formulaChapterFilter) return false;
      if (formulaSearch.trim()) {
        const s = formulaSearch.toLowerCase();
        return f.name.toLowerCase().includes(s) || f.formula.toLowerCase().includes(s) || f.description.toLowerCase().includes(s);
      }
      return true;
    });
  }, [filterFormulaBookmarksOnly, bookmarkedFormulas, filterDueOnly, srsMap, formulaChapterFilter, formulaSearch]);

  const safeFormulaIdx = Math.min(formulaIdx, Math.max(0, filteredFormulas.length - 1));
  const currentFormula: Formula | undefined = filteredFormulas[safeFormulaIdx];

  const nextFormula = () => {
    setShowFormulaEquation(false);
    if (safeFormulaIdx < filteredFormulas.length - 1) setFormulaIdx(safeFormulaIdx + 1);
    else setFormulaIdx(0);
  };

  const prevFormula = () => {
    setShowFormulaEquation(false);
    if (safeFormulaIdx > 0) setFormulaIdx(safeFormulaIdx - 1);
    else setFormulaIdx(filteredFormulas.length - 1);
  };

  const shuffleFormulas = () => {
    if (filteredFormulas.length > 1) {
      let randomIdx = safeFormulaIdx;
      while (randomIdx === safeFormulaIdx) {
        randomIdx = Math.floor(Math.random() * filteredFormulas.length);
      }
      setFormulaIdx(randomIdx);
      setShowFormulaEquation(false);
    }
  };

  // Keyboard navigation & SRS ratings
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (mode === 'penguins' && currentPenguin) {
        if (e.key === 'ArrowRight' || e.key === 'j') nextPenguin();
        else if (e.key === 'ArrowLeft' || e.key === 'k') prevPenguin();
        else if (e.key === 's' || e.key === 'S') togglePenguinBookmark(currentPenguin.id);
        else if (e.key === 'r' || e.key === 'R') shufflePenguins();
        else if (e.key === '1') handleRateCard(currentPenguin.id, 'penguin', 1);
        else if (e.key === '2') handleRateCard(currentPenguin.id, 'penguin', 2);
        else if (e.key === '3') handleRateCard(currentPenguin.id, 'penguin', 3);
        else if (e.key === '4') handleRateCard(currentPenguin.id, 'penguin', 4);
      } else if (mode === 'questions' && currentQuestion) {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          setShowAnswer(prev => !prev);
        } else if (e.key === 'ArrowRight' || e.key === 'j') nextQuestion();
        else if (e.key === 'ArrowLeft' || e.key === 'k') prevQuestion();
        else if (e.key === 's' || e.key === 'S') toggleQuestionBookmark(currentQuestion.id);
        else if (e.key === 'r' || e.key === 'R') shuffleQuestions();
        else if (e.key === '1') handleRateCard(currentQuestion.id, 'question', 1);
        else if (e.key === '2') handleRateCard(currentQuestion.id, 'question', 2);
        else if (e.key === '3') handleRateCard(currentQuestion.id, 'question', 3);
        else if (e.key === '4') handleRateCard(currentQuestion.id, 'question', 4);
      } else if (mode === 'formulas' && currentFormula) {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          setShowFormulaEquation(prev => !prev);
        } else if (e.key === 'ArrowRight' || e.key === 'j') nextFormula();
        else if (e.key === 'ArrowLeft' || e.key === 'k') prevFormula();
        else if (e.key === 's' || e.key === 'S') toggleFormulaBookmark(currentFormula.id);
        else if (e.key === 'r' || e.key === 'R') shuffleFormulas();
        else if (e.key === '1') handleRateCard(currentFormula.id, 'formula', 1);
        else if (e.key === '2') handleRateCard(currentFormula.id, 'formula', 2);
        else if (e.key === '3') handleRateCard(currentFormula.id, 'formula', 3);
        else if (e.key === '4') handleRateCard(currentFormula.id, 'formula', 4);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode, safePenguinIdx, safeQIdx, safeFormulaIdx, currentPenguin, currentQuestion, currentFormula, showAnswer, showFormulaEquation]);

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Top Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 xs:p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Spaced Repetition Flashcard Deck
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Scientifically optimized SM-2 spaced repetition engine covering 226 Penguins, 795 Questions, and 88 Formulas.
          </p>
        </div>

        {/* Due Today Filter Button */}
        <div className="flex items-center gap-2 self-start md:self-auto w-full md:w-auto">
          <button
            onClick={() => setFilterDueOnly(!filterDueOnly)}
            className={`w-full md:w-auto min-h-[44px] justify-center flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
              filterDueOnly
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Due for Review Today</span>
            <span className={`px-2 py-0.5 rounded-full font-mono text-[10px] ${
              filterDueOnly ? 'bg-slate-900 text-amber-300' : 'bg-amber-500/20 text-amber-400'
            }`}>
              {dueStats.dueCount}
            </span>
          </button>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar touch-scroll">
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 min-w-max">
          <button
            onClick={() => setMode('penguins')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all min-h-[36px] ${
              mode === 'penguins' ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Penguins ({ALL_PENGUINS.length})
          </button>
          <button
            onClick={() => setMode('questions')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all min-h-[36px] ${
              mode === 'questions' ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Questions ({ALL_QUESTIONS.length})
          </button>
          <button
            onClick={() => setMode('formulas')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all min-h-[36px] ${
              mode === 'formulas' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Formulas ({ALL_FORMULAS.length})
          </button>
        </div>
      </div>

      {/* Mode 1: Penguins */}
      {mode === 'penguins' && (
        <div className="space-y-4">
          {/* Controls Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
            <div className="sm:col-span-6 flex items-center gap-2">
              <select
                value={penguinChapterFilter}
                onChange={(e) => {
                  setPenguinChapterFilter(e.target.value === 'all' ? 'all' : Number(e.target.value));
                  setPenguinIdx(0);
                }}
                className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
              >
                <option value="all">All 40 Chapters ({ALL_PENGUINS.length} Penguins)</option>
                {ALL_CHAPTERS.map(ch => (
                  <option key={ch.number} value={ch.number}>
                    Ch. {ch.number}: {ch.title} ({ch.penguins.length})
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-4 relative">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search penguins..."
                value={penguinSearch}
                onChange={(e) => {
                  setPenguinSearch(e.target.value);
                  setPenguinIdx(0);
                }}
                className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-lg pl-8 pr-3 py-2 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="sm:col-span-2 flex items-center gap-1.5 justify-end">
              <button
                onClick={handleToggleFilterPenguinBookmarks}
                className={`p-2 rounded-lg border text-xs flex items-center justify-center gap-1 transition-all ${
                  filterBookmarksOnly
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                }`}
                title="Filter Bookmarked Penguins"
              >
                <Bookmark className="w-4 h-4" />
                {bookmarkedPenguins.length > 0 && (
                  <span className="text-[10px] font-mono font-bold text-amber-400">{bookmarkedPenguins.length}</span>
                )}
              </button>
              <button
                onClick={shufflePenguins}
                className="p-2 rounded-lg bg-slate-950 text-slate-400 border border-slate-800 hover:text-amber-400 transition-all"
                title="Shuffle Flashcards (R key)"
              >
                <Shuffle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {currentPenguin ? (
            <div>
              <div className="flex items-center justify-between mb-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold uppercase tracking-wider bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                    Card {safePenguinIdx + 1} of {filteredPenguins.length}
                  </span>
                  <button
                    onClick={() => onNavigateToChapter(currentPenguin.chapterNumber)}
                    className="text-slate-400 hover:text-amber-400 underline font-medium"
                  >
                    Chapter {currentPenguin.chapterNumber}
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {/* SRS interval badge */}
                  {srsMap[currentPenguin.id] && srsMap[currentPenguin.id].lastReviewDate && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      Interval: {srsMap[currentPenguin.id].interval}d (Rep: {srsMap[currentPenguin.id].repetition})
                    </span>
                  )}
                  <button
                    onClick={() => togglePenguinBookmark(currentPenguin.id)}
                    className={`px-2.5 py-1 rounded-lg border flex items-center gap-1 transition-all ${
                      bookmarkedPenguins.includes(currentPenguin.id)
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-semibold'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    {bookmarkedPenguins.includes(currentPenguin.id) ? 'Saved' : 'Save'}
                  </button>
                </div>
              </div>

              <div className="min-h-[220px] bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 border border-amber-500/30 rounded-2xl p-4 xs:p-6 flex flex-col justify-between shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex items-center gap-2 text-amber-400 mb-2">
                    <Lightbulb className="w-5 h-5 flex-shrink-0" />
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{currentPenguin.title}</h3>
                  </div>
                  <p className="text-sm xs:text-base text-slate-200 leading-relaxed font-serif mt-3 pl-2 sm:pl-7">
                    "{currentPenguin.content}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col xs:flex-row xs:items-center justify-between gap-2 text-xs">
                  <span className="text-slate-400">
                    Bushong Key Concept • ARRT Physics
                  </span>
                  <button
                    onClick={() => onNavigateToChapter(currentPenguin.chapterNumber)}
                    className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium self-start xs:self-auto py-1"
                  >
                    Open Full Chapter <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* SM-2 Spaced Repetition Rating Bar */}
              <div className="mt-4 p-3 xs:p-3.5 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300 px-1">
                  <span>How well did you know this concept?</span>
                  <span className="text-slate-500 text-[10px] hidden sm:inline">Keys 1, 2, 3, 4</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-bold">
                  <button
                    onClick={() => handleRateCard(currentPenguin.id, 'penguin', 1)}
                    className="min-h-[44px] py-2 px-2 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 border border-rose-500/40 text-rose-300 transition-all flex flex-col xs:flex-row items-center justify-center gap-0.5 xs:gap-1.5"
                  >
                    <span>Again</span> <span className="text-[10px] opacity-75 font-mono">(1d)</span>
                  </button>
                  <button
                    onClick={() => handleRateCard(currentPenguin.id, 'penguin', 2)}
                    className="min-h-[44px] py-2 px-2 rounded-lg bg-amber-950/40 hover:bg-amber-900/60 border border-amber-500/40 text-amber-300 transition-all flex flex-col xs:flex-row items-center justify-center gap-0.5 xs:gap-1.5"
                  >
                    <span>Hard</span> <span className="text-[10px] opacity-75 font-mono">(2d)</span>
                  </button>
                  <button
                    onClick={() => handleRateCard(currentPenguin.id, 'penguin', 3)}
                    className="min-h-[44px] py-2 px-2 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 transition-all flex flex-col xs:flex-row items-center justify-center gap-0.5 xs:gap-1.5"
                  >
                    <span>Good</span> <span className="text-[10px] opacity-75 font-mono">(4d)</span>
                  </button>
                  <button
                    onClick={() => handleRateCard(currentPenguin.id, 'penguin', 4)}
                    className="min-h-[44px] py-2 px-2 rounded-lg bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/40 text-cyan-300 transition-all flex flex-col xs:flex-row items-center justify-center gap-0.5 xs:gap-1.5"
                  >
                    <span>Easy</span> <span className="text-[10px] opacity-75 font-mono">(7d)</span>
                  </button>
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center justify-between gap-2 mt-3">
                <button
                  onClick={prevPenguin}
                  className="min-h-[44px] flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <span className="text-xs text-slate-500 font-mono">
                  {safePenguinIdx + 1} / {filteredPenguins.length}
                </span>
                <button
                  onClick={nextPenguin}
                  className="min-h-[44px] flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-amber-500/20"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400 bg-slate-950/50 rounded-2xl border border-slate-800">
              <Lightbulb className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <p className="text-sm">No penguins match your current filter or due date.</p>
            </div>
          )}
        </div>
      )}

      {/* Mode 2: Questions */}
      {mode === 'questions' && (
        <div className="space-y-4">
          {/* Controls Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
            <div className="sm:col-span-6 flex items-center gap-2">
              <select
                value={questionChapterFilter}
                onChange={(e) => {
                  setQuestionChapterFilter(e.target.value === 'all' ? 'all' : Number(e.target.value));
                  setQIdx(0);
                  setShowAnswer(false);
                }}
                className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-cyan-500"
              >
                <option value="all">All 40 Chapters ({ALL_QUESTIONS.length} Questions)</option>
                {ALL_CHAPTERS.map(ch => (
                  <option key={ch.number} value={ch.number}>
                    Ch. {ch.number}: {ch.title} ({ch.challengeQuestions.length} Qs)
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-4 relative">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search questions or answers..."
                value={questionSearch}
                onChange={(e) => {
                  setQuestionSearch(e.target.value);
                  setQIdx(0);
                  setShowAnswer(false);
                }}
                className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-lg pl-8 pr-3 py-2 text-xs focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="sm:col-span-2 flex items-center gap-1.5 justify-end">
              <button
                onClick={handleToggleFilterQuestionBookmarks}
                className={`p-2 rounded-lg border text-xs flex items-center justify-center gap-1 transition-all ${
                  filterQuestionBookmarksOnly
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                }`}
                title="Filter Bookmarked Questions"
              >
                <Bookmark className="w-4 h-4" />
                {bookmarkedQuestions.length > 0 && (
                  <span className="text-[10px] font-mono font-bold text-cyan-400">{bookmarkedQuestions.length}</span>
                )}
              </button>
              <button
                onClick={shuffleQuestions}
                className="p-2 rounded-lg bg-slate-950 text-slate-400 border border-slate-800 hover:text-cyan-400 transition-all"
                title="Random Question Drill (R key)"
              >
                <Shuffle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {currentQuestion ? (
            <div>
              <div className="flex items-center justify-between mb-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20">
                    Question {safeQIdx + 1} of {filteredQuestions.length}
                  </span>
                  <button
                    onClick={() => onNavigateToChapter(currentQuestion.chapterNumber)}
                    className="text-slate-400 hover:text-cyan-400 underline font-medium"
                  >
                    Chapter {currentQuestion.chapterNumber}
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {srsMap[currentQuestion.id] && srsMap[currentQuestion.id].lastReviewDate && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      Interval: {srsMap[currentQuestion.id].interval}d (Rep: {srsMap[currentQuestion.id].repetition})
                    </span>
                  )}
                  <button
                    onClick={() => toggleQuestionBookmark(currentQuestion.id)}
                    className={`px-2.5 py-1 rounded-lg border flex items-center gap-1 transition-all ${
                      bookmarkedQuestions.includes(currentQuestion.id)
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-semibold'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    {bookmarkedQuestions.includes(currentQuestion.id) ? 'Saved' : 'Save'}
                  </button>
                </div>
              </div>

              <div className="min-h-[220px] bg-slate-950 border border-slate-800 rounded-2xl p-4 xs:p-6 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-start gap-2.5 xs:gap-3 mb-4">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-mono flex-shrink-0 mt-0.5 border border-slate-700">
                      Q{currentQuestion.questionNumber}
                    </span>
                    <h3 className="text-sm xs:text-base font-semibold text-white leading-relaxed">{currentQuestion.question}</h3>
                  </div>

                  {showAnswer ? (
                    <div className="mt-4 p-3.5 xs:p-4 rounded-xl bg-slate-900 border border-cyan-500/30 text-slate-200 text-sm leading-relaxed space-y-3 animate-fadeIn">
                      {currentQuestion.answer && (
                        <div className="p-3 xs:p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30">
                          <strong className="text-emerald-400 block mb-1 text-xs uppercase tracking-wider flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> High-Yield Board Answer:
                          </strong>
                          <p className="text-emerald-100 font-semibold text-sm leading-snug">{currentQuestion.answer}</p>
                        </div>
                      )}
                      {currentQuestion.explanation && (
                        <div>
                          <strong className="text-cyan-400 block mb-1 text-xs uppercase tracking-wider">
                            Detailed Explanation & Clinical Rationale:
                          </strong>
                          <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">{currentQuestion.explanation}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="mt-8 flex justify-center">
                      <button
                        onClick={() => setShowAnswer(true)}
                        className="w-full sm:w-auto min-h-[44px] justify-center px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-cyan-200 text-xs font-bold border border-slate-700 flex items-center gap-2 transition-all shadow-md"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Reveal Solution & Detailed Rationale
                      </button>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col xs:flex-row xs:items-center justify-between gap-2 text-xs">
                  <span className="text-slate-400">
                    Chapter {currentQuestion.chapterNumber} Challenge Problem {currentQuestion.questionNumber}
                  </span>
                  {showAnswer && (
                    <button
                      onClick={() => setShowAnswer(false)}
                      className="text-slate-400 hover:text-white flex items-center gap-1 self-start xs:self-auto py-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Hide Solution
                    </button>
                  )}
                </div>
              </div>

              {/* SM-2 Rating for Questions */}
              {showAnswer && (
                <div className="mt-4 p-3 xs:p-3.5 bg-slate-900 border border-slate-800 rounded-xl space-y-2 animate-fadeIn">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-300 px-1">
                    <span>Rate your recall quality:</span>
                    <span className="text-slate-500 text-[10px] hidden sm:inline">Keys 1, 2, 3, 4</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-bold">
                    <button
                      onClick={() => handleRateCard(currentQuestion.id, 'question', 1)}
                      className="min-h-[44px] py-2 px-2 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 border border-rose-500/40 text-rose-300 transition-all flex flex-col xs:flex-row items-center justify-center gap-0.5 xs:gap-1.5"
                    >
                      <span>Again</span> <span className="text-[10px] opacity-75 font-mono">(1d)</span>
                    </button>
                    <button
                      onClick={() => handleRateCard(currentQuestion.id, 'question', 2)}
                      className="min-h-[44px] py-2 px-2 rounded-lg bg-amber-950/40 hover:bg-amber-900/60 border border-amber-500/40 text-amber-300 transition-all flex flex-col xs:flex-row items-center justify-center gap-0.5 xs:gap-1.5"
                    >
                      <span>Hard</span> <span className="text-[10px] opacity-75 font-mono">(2d)</span>
                    </button>
                    <button
                      onClick={() => handleRateCard(currentQuestion.id, 'question', 3)}
                      className="min-h-[44px] py-2 px-2 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 transition-all flex flex-col xs:flex-row items-center justify-center gap-0.5 xs:gap-1.5"
                    >
                      <span>Good</span> <span className="text-[10px] opacity-75 font-mono">(4d)</span>
                    </button>
                    <button
                      onClick={() => handleRateCard(currentQuestion.id, 'question', 4)}
                      className="min-h-[44px] py-2 px-2 rounded-lg bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/40 text-cyan-300 transition-all flex flex-col xs:flex-row items-center justify-center gap-0.5 xs:gap-1.5"
                    >
                      <span>Easy</span> <span className="text-[10px] opacity-75 font-mono">(7d)</span>
                    </button>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between gap-2 mt-4">
                <button
                  onClick={prevQuestion}
                  className="min-h-[44px] flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <span className="text-xs text-slate-500 font-mono">
                  {safeQIdx + 1} / {filteredQuestions.length}
                </span>
                <button
                  onClick={nextQuestion}
                  className="min-h-[44px] flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-cyan-500/20"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400 bg-slate-950/50 rounded-2xl border border-slate-800">
              <HelpCircle className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <p className="text-sm">No challenge questions match your current filter or due date.</p>
            </div>
          )}
        </div>
      )}

      {/* Mode 3: Formulas */}
      {mode === 'formulas' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
            <div className="sm:col-span-5">
              <select
                value={formulaChapterFilter}
                onChange={(e) => {
                  setFormulaChapterFilter(e.target.value === 'all' ? 'all' : Number(e.target.value));
                  setFormulaIdx(0);
                  setShowFormulaEquation(false);
                }}
                className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-emerald-500"
              >
                <option value="all">All Chapters ({ALL_FORMULAS.length} Formulas)</option>
                {ALL_CHAPTERS.filter(ch => ch.formulas.length > 0).map(ch => (
                  <option key={ch.number} value={ch.number}>
                    Ch. {ch.number}: {ch.title} ({ch.formulas.length})
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-4 relative">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search formulas by name or symbol..."
                value={formulaSearch}
                onChange={(e) => {
                  setFormulaSearch(e.target.value);
                  setFormulaIdx(0);
                  setShowFormulaEquation(false);
                }}
                className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-lg pl-8 pr-3 py-2 text-xs focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div className="sm:col-span-3 flex items-center gap-1.5 justify-end">
              <div className="flex rounded-lg bg-slate-950 p-0.5 border border-slate-800 text-[11px]">
                <button
                  onClick={() => setFormulaViewMode('drill')}
                  className={`px-2 py-1 rounded font-semibold transition-all ${
                    formulaViewMode === 'drill'
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Flashcard Active Recall Drill"
                >
                  SRS Drill
                </button>
                <button
                  onClick={() => setFormulaViewMode('grid')}
                  className={`px-2 py-1 rounded font-semibold transition-all ${
                    formulaViewMode === 'grid'
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Formula Grid View"
                >
                  Grid
                </button>
              </div>

              <button
                onClick={handleToggleFilterFormulaBookmarks}
                className={`p-2 rounded-lg border text-xs flex items-center justify-center gap-1 transition-all ${
                  filterFormulaBookmarksOnly
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                }`}
                title="Filter Bookmarked Formulas"
              >
                <Bookmark className="w-4 h-4" />
                {bookmarkedFormulas.length > 0 && (
                  <span className="text-[10px] font-mono font-bold text-emerald-400">{bookmarkedFormulas.length}</span>
                )}
              </button>
              <button
                onClick={shuffleFormulas}
                className="p-2 rounded-lg bg-slate-950 text-slate-400 border border-slate-800 hover:text-emerald-400 transition-all"
                title="Random Formula Drill (R key)"
              >
                <Shuffle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* View 1: Active Recall Flashcard Drill */}
          {formulaViewMode === 'drill' && (
            <div>
              {currentFormula ? (
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                        Formula {safeFormulaIdx + 1} of {filteredFormulas.length}
                      </span>
                      <button
                        onClick={() => onNavigateToChapter(currentFormula.chapterNumber)}
                        className="text-slate-400 hover:text-emerald-400 underline font-medium"
                      >
                        Chapter {currentFormula.chapterNumber}
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      {srsMap[currentFormula.id] && srsMap[currentFormula.id].lastReviewDate && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          Interval: {srsMap[currentFormula.id].interval}d (Rep: {srsMap[currentFormula.id].repetition})
                        </span>
                      )}
                      <button
                        onClick={() => toggleFormulaBookmark(currentFormula.id)}
                        className={`px-2.5 py-1 rounded-lg border flex items-center gap-1 transition-all ${
                          bookmarkedFormulas.includes(currentFormula.id)
                            ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-semibold'
                            : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                        {bookmarkedFormulas.includes(currentFormula.id) ? 'Saved' : 'Save'}
                      </button>
                    </div>
                  </div>

                  <div className="min-h-[220px] bg-slate-950 border border-slate-800 rounded-2xl p-4 xs:p-6 flex flex-col justify-between shadow-lg">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="text-base sm:text-lg font-bold text-emerald-400">{currentFormula.name}</h3>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                          Eq. {currentFormula.id}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">{currentFormula.description}</p>

                      {showFormulaEquation ? (
                        <div className="space-y-4 animate-fadeIn">
                          <div className="bg-slate-900 border border-emerald-500/40 rounded-xl p-3.5 xs:p-4 font-mono text-base sm:text-lg text-emerald-300 font-bold tracking-wider shadow-inner text-center overflow-x-auto no-scrollbar touch-scroll">
                            {currentFormula.formula}
                          </div>

                          <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                              Variable Definitions & Physical Units:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                              {currentFormula.variables.map((v, i) => (
                                <div key={i} className="flex items-baseline justify-between bg-slate-950/80 p-2 rounded border border-slate-800/80">
                                  <span className="font-mono text-cyan-300 font-bold">{v.symbol}</span>
                                  <span className="text-slate-300 text-[11px]">{v.meaning} {v.unit ? `(${v.unit})` : ''}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="mt-8 flex justify-center">
                          <button
                            onClick={() => setShowFormulaEquation(true)}
                            className="w-full sm:w-auto min-h-[44px] justify-center px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 hover:text-emerald-200 text-xs font-bold border border-slate-700 flex items-center gap-2 transition-all shadow-md"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Reveal Formula Equation & Variables
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col xs:flex-row xs:items-center justify-between gap-2 text-xs">
                      <span className="text-slate-500">
                        Chapter {currentFormula.chapterNumber} • Physics Formula
                      </span>
                      {showFormulaEquation && (
                        <button
                          onClick={() => setShowFormulaEquation(false)}
                          className="text-slate-400 hover:text-white flex items-center gap-1 self-start xs:self-auto py-1"
                        >
                          <RotateCcw className="w-3.5 h-3.5" /> Hide Equation
                        </button>
                      )}
                    </div>
                  </div>

                  {/* SM-2 Rating for Formulas */}
                  {showFormulaEquation && (
                    <div className="mt-4 p-3 xs:p-3.5 bg-slate-900 border border-slate-800 rounded-xl space-y-2 animate-fadeIn">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-300 px-1">
                        <span>Rate formula recall:</span>
                        <span className="text-slate-500 text-[10px] hidden sm:inline">Keys 1, 2, 3, 4</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-bold">
                        <button
                          onClick={() => handleRateCard(currentFormula.id, 'formula', 1)}
                          className="min-h-[44px] py-2 px-2 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 border border-rose-500/40 text-rose-300 transition-all flex flex-col xs:flex-row items-center justify-center gap-0.5 xs:gap-1.5"
                        >
                          <span>Again</span> <span className="text-[10px] opacity-75 font-mono">(1d)</span>
                        </button>
                        <button
                          onClick={() => handleRateCard(currentFormula.id, 'formula', 2)}
                          className="min-h-[44px] py-2 px-2 rounded-lg bg-amber-950/40 hover:bg-amber-900/60 border border-amber-500/40 text-amber-300 transition-all flex flex-col xs:flex-row items-center justify-center gap-0.5 xs:gap-1.5"
                        >
                          <span>Hard</span> <span className="text-[10px] opacity-75 font-mono">(2d)</span>
                        </button>
                        <button
                          onClick={() => handleRateCard(currentFormula.id, 'formula', 3)}
                          className="min-h-[44px] py-2 px-2 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 transition-all flex flex-col xs:flex-row items-center justify-center gap-0.5 xs:gap-1.5"
                        >
                          <span>Good</span> <span className="text-[10px] opacity-75 font-mono">(4d)</span>
                        </button>
                        <button
                          onClick={() => handleRateCard(currentFormula.id, 'formula', 4)}
                          className="min-h-[44px] py-2 px-2 rounded-lg bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/40 text-cyan-300 transition-all flex flex-col xs:flex-row items-center justify-center gap-0.5 xs:gap-1.5"
                        >
                          <span>Easy</span> <span className="text-[10px] opacity-75 font-mono">(7d)</span>
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2 mt-4">
                    <button
                      onClick={prevFormula}
                      className="min-h-[44px] flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" /> Previous
                    </button>
                    <span className="text-xs text-slate-500 font-mono">
                      {safeFormulaIdx + 1} / {filteredFormulas.length}
                    </span>
                    <button
                      onClick={nextFormula}
                      className="min-h-[44px] flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20"
                    >
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-slate-400 bg-slate-950/50 rounded-2xl border border-slate-800">
                  <HelpCircle className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                  <p className="text-sm">No formulas match your current filter or due date.</p>
                </div>
              )}
            </div>
          )}

          {/* View 2: Formula Grid Reference with SRS Badges */}
          {formulaViewMode === 'grid' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredFormulas.map(formula => (
                  <div
                    key={formula.id}
                    className="bg-slate-950 border border-slate-800/90 rounded-xl p-4 hover:border-emerald-500/30 transition-all flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-emerald-400">{formula.name}</span>
                          {srsMap[formula.id]?.lastReviewDate && (
                            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 border border-slate-700">
                              {srsMap[formula.id].interval}d
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => toggleFormulaBookmark(formula.id)}
                            className={`p-1 rounded ${bookmarkedFormulas.includes(formula.id) ? 'text-emerald-400' : 'text-slate-600 hover:text-slate-300'}`}
                            title="Bookmark"
                          >
                            <Bookmark className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => onNavigateToChapter(formula.chapterNumber)}
                            className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 hover:text-white"
                          >
                            Ch. {formula.chapterNumber}
                          </button>
                        </div>
                      </div>
                      <div className="bg-slate-900/90 px-3 py-2.5 rounded-lg font-mono text-xs xs:text-sm text-amber-300 mb-2 border border-slate-800 shadow-inner overflow-x-auto no-scrollbar touch-scroll break-words">
                        {formula.formula}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed mb-3">{formula.description}</p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-900">
                      <div className="space-y-1 text-[11px] text-slate-400">
                        {formula.variables.map((v, i) => (
                          <div key={i} className="flex items-baseline justify-between">
                            <span className="font-mono text-cyan-300">{v.symbol}</span>
                            <span className="text-slate-300">{v.meaning} {v.unit ? `(${v.unit})` : ''}</span>
                          </div>
                        ))}
                      </div>

                      {/* Quick SM-2 rating bar on card */}
                      <div className="pt-2.5 border-t border-slate-900/80 flex flex-col xs:flex-row xs:items-center justify-between gap-2">
                        <span className="text-[11px] text-slate-400 font-semibold flex items-center gap-1">
                          <Clock className="w-3 h-3 text-cyan-400" /> SM-2 Recall:
                        </span>
                        <div className="grid grid-cols-4 gap-1.5 w-full xs:w-auto">
                          <button
                            onClick={() => handleRateCard(formula.id, 'formula', 1)}
                            className="min-h-[36px] px-2 py-1.5 rounded-lg text-[11px] font-bold bg-rose-950/40 text-rose-300 border border-rose-500/30 hover:bg-rose-900/60 transition-colors flex items-center justify-center"
                            title="Again (1d)"
                          >
                            Again
                          </button>
                          <button
                            onClick={() => handleRateCard(formula.id, 'formula', 2)}
                            className="min-h-[36px] px-2 py-1.5 rounded-lg text-[11px] font-bold bg-amber-950/40 text-amber-300 border border-amber-500/30 hover:bg-amber-900/60 transition-colors flex items-center justify-center"
                            title="Hard (2d)"
                          >
                            Hard
                          </button>
                          <button
                            onClick={() => handleRateCard(formula.id, 'formula', 3)}
                            className="min-h-[36px] px-2 py-1.5 rounded-lg text-[11px] font-bold bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-900/60 transition-colors flex items-center justify-center"
                            title="Good (4d)"
                          >
                            Good
                          </button>
                          <button
                            onClick={() => handleRateCard(formula.id, 'formula', 4)}
                            className="min-h-[36px] px-2 py-1.5 rounded-lg text-[11px] font-bold bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-900/60 transition-colors flex items-center justify-center"
                            title="Easy (7d)"
                          >
                            Easy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredFormulas.length === 0 && (
                <div className="text-center py-12 text-slate-400 bg-slate-950/50 rounded-2xl border border-slate-800">
                  <p className="text-sm">No formulas match your search or due filter.</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

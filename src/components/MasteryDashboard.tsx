import React, { useMemo } from 'react';
import { ALL_CHAPTERS, ALL_PENGUINS, ALL_QUESTIONS, ALL_FORMULAS } from '../data/allChapters';
import { BOOK_PARTS } from '../data/bookMeta';
import { getMockExamHistory } from './MockExamSimulator';
import { getDueStats, getAllSrsCards } from '../utils/srsEngine';
import { getStoredHighlights } from '../data/highYieldVaultData';
import { 
  Award, 
  CheckCircle2, 
  Flame, 
  Sparkles, 
  BookOpen, 
  BarChart3, 
  Clock, 
  ChevronRight, 
  AlertCircle,
  HelpCircle,
  TrendingUp,
  RotateCcw
} from 'lucide-react';

interface MasteryDashboardProps {
  onNavigateToChapter: (chapterNumber: number) => void;
  onOpenMockExam: () => void;
  onOpenStudyDeck: () => void;
  onOpenVault: () => void;
}

export const MasteryDashboard: React.FC<MasteryDashboardProps> = ({
  onNavigateToChapter,
  onOpenMockExam,
  onOpenStudyDeck,
  onOpenVault
}) => {
  // 1. Objectives Completed
  const completedObjectivesCount = useMemo(() => {
    let count = 0;
    ALL_CHAPTERS.forEach(ch => {
      try {
        const saved = localStorage.getItem(`rad_obj_${ch.number}`);
        if (saved) {
          const list = JSON.parse(saved);
          count += Array.isArray(list) ? list.length : 0;
        }
      } catch {}
    });
    return count;
  }, []);

  const totalObjectivesCount = useMemo(() => {
    return ALL_CHAPTERS.reduce((acc, ch) => acc + ch.objectives.length, 0);
  }, []);

  // 2. Mock Exam Stats
  const examHistory = useMemo(() => getMockExamHistory(), []);
  const latestExam = examHistory[0];
  const averageScaledScore = useMemo(() => {
    if (examHistory.length === 0) return 0;
    const sum = examHistory.reduce((acc, e) => acc + e.scaledScore, 0);
    return Math.round(sum / examHistory.length);
  }, [examHistory]);

  // 3. SRS Stats
  const srsStats = useMemo(() => getDueStats(), []);

  // 4. High-Yield Points Count
  const savedVaultPoints = useMemo(() => getStoredHighlights().length, []);

  // 5. Part-by-part Completion
  const partBreakdown = useMemo(() => {
    return BOOK_PARTS.map(part => {
      const partChapters = ALL_CHAPTERS.filter(ch => ch.partId === part.id);
      let partObjTotal = 0;
      let partObjDone = 0;
      partChapters.forEach(ch => {
        partObjTotal += ch.objectives.length;
        try {
          const saved = localStorage.getItem(`rad_obj_${ch.number}`);
          if (saved) {
            const list = JSON.parse(saved);
            partObjDone += Array.isArray(list) ? list.length : 0;
          }
        } catch {}
      });

      const percentage = partObjTotal > 0 ? Math.round((partObjDone / partObjTotal) * 100) : 0;
      return {
        part,
        chaptersCount: partChapters.length,
        totalObj: partObjTotal,
        doneObj: partObjDone,
        percentage
      };
    });
  }, [completedObjectivesCount]);

  // 6. Overall Syllabus Completion %
  const syllabusProgress = Math.round((completedObjectivesCount / Math.max(1, totalObjectivesCount)) * 100);

  // 7. Study Streak (stored in localStorage)
  const streakDays = useMemo(() => {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const lastVisit = localStorage.getItem('rad_last_visit_date');
      let currentStreak = parseInt(localStorage.getItem('rad_study_streak') || '1', 10);

      if (lastVisit) {
        const lastDate = new Date(lastVisit);
        const nowDate = new Date(today);
        const diffDays = Math.round((nowDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
        if (diffDays === 1) {
          currentStreak += 1;
          localStorage.setItem('rad_study_streak', currentStreak.toString());
        } else if (diffDays > 1) {
          currentStreak = 1;
          localStorage.setItem('rad_study_streak', '1');
        }
      }
      localStorage.setItem('rad_last_visit_date', today);
      return currentStreak;
    } catch {
      return 1;
    }
  }, []);

  // Weakest part recommendation
  const weakestPart = useMemo(() => {
    return [...partBreakdown].sort((a, b) => a.percentage - b.percentage)[0];
  }, [partBreakdown]);

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-16">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                ARRT Readiness & Mastery Dashboard
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              Comprehensive syllabus coverage tracking, active recall metrics, spaced repetition retention, and mock exam diagnostics.
            </p>
          </div>

          {/* Study Streak Badge */}
          <div className="flex items-center gap-3 bg-slate-950/80 border border-amber-500/30 rounded-2xl p-4 self-start md:self-auto shadow-inner">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider block">Daily Study Streak</span>
              <span className="text-xl font-black text-white font-mono">{streakDays} Days</span>
            </div>
          </div>
        </div>

        {/* 4 Metric Quick-Stat Cards */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-1">
            <span className="text-[11px] font-semibold text-slate-400">Syllabus Completion</span>
            <div className="text-2xl font-black text-cyan-400 font-mono">{syllabusProgress}%</div>
            <span className="text-[10px] text-slate-500">{completedObjectivesCount} / {totalObjectivesCount} Objectives</span>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-1">
            <span className="text-[11px] font-semibold text-slate-400">ARRT Mock Score</span>
            <div className="text-2xl font-black text-white font-mono">
              {latestExam ? latestExam.scaledScore : '—'} <span className="text-xs text-slate-400 font-normal">/ 99</span>
            </div>
            <span className="text-[10px] text-slate-500">
              {latestExam ? (latestExam.passed ? '✓ Passing Standard' : 'Need Practice') : '0 Attempts Logged'}
            </span>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-1">
            <span className="text-[11px] font-semibold text-slate-400">SRS Spaced Retention</span>
            <div className="text-2xl font-black text-amber-400 font-mono">{srsStats.learnedCount}</div>
            <span className="text-[10px] text-slate-500">{srsStats.dueCount} Cards Due Today</span>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-1">
            <span className="text-[11px] font-semibold text-slate-400">High-Yield Vault</span>
            <div className="text-2xl font-black text-purple-400 font-mono">{savedVaultPoints}</div>
            <span className="text-[10px] text-slate-500">One-Liner MCQ Pearls</span>
          </div>
        </div>
      </div>

      {/* Recommended Next Action Card */}
      {weakestPart && (
        <div className="bg-gradient-to-r from-amber-950/20 via-slate-900 to-slate-900 border border-amber-500/30 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                Personalized ARRT Recommendation
              </span>
              <h3 className="text-base font-bold text-white mt-0.5">
                Target Weak Area: {weakestPart.part.title} ({weakestPart.percentage}% mastered)
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {weakestPart.part.description} • Contains {weakestPart.chaptersCount} chapters with board-critical questions.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              const firstCh = ALL_CHAPTERS.find(c => c.partId === weakestPart.part.id);
              if (firstCh) onNavigateToChapter(firstCh.number);
            }}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow transition-all flex items-center gap-1.5 self-start sm:self-auto flex-shrink-0"
          >
            Study {weakestPart.part.partNumber} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Part-by-Part Mastery Progress */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-cyan-400" />
              Bushong 11th Edition Curriculum Breakdown (8 Parts)
            </h2>
            <p className="text-xs text-slate-400">Track mastered learning objectives and clinical competencies across every textbook section</p>
          </div>
          <span className="text-xs font-mono text-cyan-400 font-semibold">{ALL_CHAPTERS.length} Chapters</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {partBreakdown.map((item) => (
            <div
              key={item.part.id}
              className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-xl p-4 space-y-3 transition-colors shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                    {item.part.partNumber} • {item.part.chapterRange}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-0.5">{item.part.title}</h4>
                </div>
                <span className="text-sm font-black font-mono text-cyan-300">
                  {item.percentage}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    item.percentage >= 80 ? 'bg-emerald-400' : item.percentage >= 40 ? 'bg-cyan-400' : 'bg-amber-400'
                  }`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span>{item.doneObj} of {item.totalObj} Objectives Mastered</span>
                <button
                  onClick={() => {
                    const firstCh = ALL_CHAPTERS.find(c => c.partId === item.part.id);
                    if (firstCh) onNavigateToChapter(firstCh.number);
                  }}
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-0.5 font-semibold"
                >
                  Review <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Launch Hub */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          onClick={onOpenMockExam}
          className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-5 cursor-pointer transition-all shadow-md group"
        >
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Award className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">ARRT Mock Simulator</h4>
          <p className="text-xs text-slate-400 mt-1">Simulate 20, 50, 100, or 200 question timed board tests with scaled scoring.</p>
        </div>

        <div
          onClick={onOpenStudyDeck}
          className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-xl p-5 cursor-pointer transition-all shadow-md group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">Spaced Repetition Deck</h4>
          <p className="text-xs text-slate-400 mt-1">Review 226 Penguins, 795 Questions, and 88 Formulas scheduled by SM-2 algorithm.</p>
        </div>

        <div
          onClick={onOpenVault}
          className="bg-slate-900 border border-slate-800 hover:border-purple-500/50 rounded-xl p-5 cursor-pointer transition-all shadow-md group"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">High-Yield Revision Vault</h4>
          <p className="text-xs text-slate-400 mt-1">Flip through high-yield one-liners in Cram Mode or practice with Cloze deletions.</p>
        </div>
      </div>
    </div>
  );
};

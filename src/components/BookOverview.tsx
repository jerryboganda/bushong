import React from 'react';
import { BOOK_METADATA, BOOK_PARTS } from '../data/bookMeta';
import { ALL_CHAPTERS, ALL_QUESTIONS, ALL_PENGUINS, ALL_FORMULAS } from '../data/allChapters';
import { BUSHONG_GLOSSARY } from '../data/glossaryData';
import { Book, Award, CheckCircle, ArrowRight, Shield, Zap, Database, Download } from 'lucide-react';

interface BookOverviewProps {
  onSelectChapter: (num: number) => void;
  onOpenStudyDeck: () => void;
  onOpenCalculators: () => void;
  onOpenGlossary?: () => void;
  onOpenReference?: () => void;
}

export const BookOverview: React.FC<BookOverviewProps> = ({
  onSelectChapter,
  onOpenStudyDeck,
  onOpenCalculators,
  onOpenGlossary,
  onOpenReference
}) => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16">
      {/* Book Hero Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
              <Award className="w-3.5 h-3.5" /> 11th Edition • Standard Radiologic Physics Reference
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {BOOK_METADATA.title}
            </h1>
            <p className="text-sm text-cyan-200 font-medium">
              {BOOK_METADATA.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
              Authored by <strong className="text-white">{BOOK_METADATA.author}</strong>. 
              The quintessential curriculum guide for radiologic technology students preparing for the ARRT certification examination and practicing radiographers.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-mono">
                {BOOK_PARTS.length} Parts • {ALL_CHAPTERS.length} Chapters
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono font-bold">
                {ALL_QUESTIONS.length} Challenge Qs
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300 font-mono font-bold">
                {BUSHONG_GLOSSARY.length} Glossary Terms
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-300 font-mono font-bold">
                {ALL_PENGUINS.length} Penguin Insights
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-semibold flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> 100% Offline PWA
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 w-full md:w-auto flex-shrink-0">
            <button
              onClick={() => onSelectChapter(1)}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
            >
              <Book className="w-4 h-4" /> Start Reading Ch. 1
            </button>
            <button
              onClick={onOpenStudyDeck}
              className="px-5 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-amber-500/40 transition-all"
            >
              <Award className="w-4 h-4 text-amber-400" /> ARRT Study Deck ({ALL_QUESTIONS.length} Qs)
            </button>
            {onOpenGlossary && (
              <button
                onClick={onOpenGlossary}
                className="px-5 py-2.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-purple-500/40 transition-all"
              >
                <Database className="w-4 h-4 text-purple-400" /> Complete Glossary ({BUSHONG_GLOSSARY.length})
              </button>
            )}
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenCalculators}
                className="flex-1 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 border border-slate-700 transition-all"
              >
                <Zap className="w-3.5 h-3.5 text-cyan-400" /> Calculators
              </button>
              {onOpenReference && (
                <button
                  onClick={onOpenReference}
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 border border-slate-700 transition-all"
                >
                  <Shield className="w-3.5 h-3.5 text-indigo-400" /> Reference
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Parts & Chapters Table of Contents */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight">Table of Contents by Parts</h2>
          <span className="text-xs text-slate-400">Select any chapter to read</span>
        </div>

        <div className="space-y-4">
          {BOOK_PARTS.map((part) => {
            const partChapters = ALL_CHAPTERS.filter(ch => ch.partId === part.id);
            return (
              <div
                key={part.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="text-base font-bold text-cyan-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {part.title}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">{part.chapterRange}</span>
                </div>
                <p className="text-xs text-slate-400 mb-4">{part.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {partChapters.map((ch) => (
                    <button
                      key={ch.number}
                      onClick={() => onSelectChapter(ch.number)}
                      className="group flex items-center justify-between p-3 rounded-xl bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 text-left transition-all"
                    >
                      <div className="pr-3">
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-cyan-300 transition-colors">
                          <span className="font-mono font-bold text-cyan-400">Ch. {ch.number}</span>
                          <span>•</span>
                          <span className="truncate">{ch.pages}</span>
                        </div>
                        <h4 className="text-sm font-semibold text-white group-hover:text-cyan-200 line-clamp-1 transition-colors">
                          {ch.title}
                        </h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5 flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, Lightbulb, Calculator, HelpCircle, ArrowRight, X, BookA } from 'lucide-react';
import { searchBook, SearchResult, ALL_CHAPTERS } from '../data/allChapters';

interface SearchInterfaceProps {
  onSelectChapter: (chapterNumber: number) => void;
  onOpenGlossary?: (term?: string) => void;
  initialQuery?: string;
}

export const SearchInterface: React.FC<SearchInterfaceProps> = ({ 
  onSelectChapter, 
  onOpenGlossary,
  initialQuery = '' 
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [typeFilter, setTypeFilter] = useState<'all' | 'chapter' | 'penguin' | 'formula' | 'question' | 'section' | 'glossary'>('all');

  const rawResults = useMemo(() => {
    return searchBook(query);
  }, [query]);

  const filteredResults = useMemo(() => {
    if (typeFilter === 'all') return rawResults;
    return rawResults.filter(r => r.type === typeFilter);
  }, [rawResults, typeFilter]);

  const counts = useMemo(() => {
    const map = {
      all: rawResults.length,
      chapter: 0,
      penguin: 0,
      formula: 0,
      question: 0,
      section: 0,
      glossary: 0
    };
    for (const r of rawResults) {
      map[r.type] = (map[r.type] || 0) + 1;
    }
    return map;
  }, [rawResults]);

  const getIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'chapter':
        return <BookOpen className="w-4 h-4 text-cyan-400" />;
      case 'penguin':
        return <Lightbulb className="w-4 h-4 text-amber-400" />;
      case 'formula':
        return <Calculator className="w-4 h-4 text-emerald-400" />;
      case 'question':
        return <HelpCircle className="w-4 h-4 text-purple-400" />;
      case 'glossary':
        return <BookA className="w-4 h-4 text-pink-400" />;
      case 'section':
      default:
        return <BookOpen className="w-4 h-4 text-blue-400" />;
    }
  };

  const getBadgeColor = (type: SearchResult['type']) => {
    switch (type) {
      case 'chapter':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
      case 'penguin':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
      case 'formula':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'question':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
      case 'glossary':
        return 'bg-pink-500/10 text-pink-300 border-pink-500/30';
      case 'section':
      default:
        return 'bg-blue-500/10 text-blue-300 border-blue-500/30';
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      {/* Search Bar Input */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3.5 xs:p-4 sm:p-6 shadow-xl">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search all ${ALL_CHAPTERS.length} chapters (e.g. 'inverse square', 'ALARA')...`}
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-11 pr-10 py-3 min-h-[44px] text-xs sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex overflow-x-auto no-scrollbar touch-scroll sm:flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-800/80 text-xs pb-1 sm:pb-0">
          <span className="text-slate-400 flex items-center gap-1 mr-1 shrink-0">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          <button
            onClick={() => setTypeFilter('all')}
            className={`whitespace-nowrap px-3 py-1.5 min-h-[36px] rounded-lg transition-all shrink-0 ${
              typeFilter === 'all'
                ? 'bg-cyan-500 text-slate-950 font-bold'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            All Results ({counts.all})
          </button>
          <button
            onClick={() => setTypeFilter('penguin')}
            className={`whitespace-nowrap px-3 py-1.5 min-h-[36px] rounded-lg transition-all shrink-0 ${
              typeFilter === 'penguin'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            Penguins ({counts.penguin})
          </button>
          <button
            onClick={() => setTypeFilter('formula')}
            className={`whitespace-nowrap px-3 py-1.5 min-h-[36px] rounded-lg transition-all shrink-0 ${
              typeFilter === 'formula'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            Formulas ({counts.formula})
          </button>
          <button
            onClick={() => setTypeFilter('question')}
            className={`whitespace-nowrap px-3 py-1.5 min-h-[36px] rounded-lg transition-all shrink-0 ${
              typeFilter === 'question'
                ? 'bg-purple-500 text-slate-950 font-bold'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            Questions ({counts.question})
          </button>
          <button
            onClick={() => setTypeFilter('glossary')}
            className={`whitespace-nowrap px-3 py-1.5 min-h-[36px] rounded-lg transition-all shrink-0 ${
              typeFilter === 'glossary'
                ? 'bg-pink-500 text-slate-950 font-bold'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            Glossary ({counts.glossary})
          </button>
          <button
            onClick={() => setTypeFilter('chapter')}
            className={`whitespace-nowrap px-3 py-1.5 min-h-[36px] rounded-lg transition-all shrink-0 ${
              typeFilter === 'chapter'
                ? 'bg-cyan-600 text-white font-bold'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            Chapters ({counts.chapter})
          </button>
        </div>
      </div>

      {/* Results List */}
      <div className="space-y-3">
        {query.trim().length === 0 ? (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center text-slate-400">
            <Search className="w-8 h-8 mx-auto text-slate-600 mb-3" />
            <h3 className="text-base font-medium text-slate-300 mb-1">Search the complete 11th Edition textbook</h3>
            <p className="text-xs max-w-md mx-auto">
              Find concepts across all {ALL_CHAPTERS.length} chapters including radiation physics, x-ray tube construction, digital radiography, CT, fluoroscopy, radiobiology, radiation safety, and 926 textbook glossary definitions.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs">
              {['15% rule', 'anode heel effect', 'bremsstrahlung', 'photoelectric', 'compton scatter', 'Hounsfield unit', 'ALARA', 'deterministic effect'].map((s, i) => (
                <button
                  key={i}
                  onClick={() => setQuery(s)}
                  className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : filteredResults.length === 0 ? (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center text-slate-400">
            <p className="text-sm">No results matching <span className="text-white font-semibold">"{query}"</span></p>
            <p className="text-xs text-slate-500 mt-1">Try searching for broader keywords or checking different filters.</p>
          </div>
        ) : (
          filteredResults.map((result, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (result.type === 'glossary') {
                  onOpenGlossary?.(result.title);
                } else if (result.chapterNumber) {
                  onSelectChapter(result.chapterNumber);
                }
              }}
              className="group bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/40 rounded-xl p-4 sm:p-5 transition-all cursor-pointer shadow-sm"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] px-2 py-0.5 rounded border uppercase font-bold tracking-wider ${getBadgeColor(result.type)}`}>
                    {result.type}
                  </span>
                  {result.type === 'glossary' ? (
                    <span className="text-xs text-slate-400">
                      Authoritative Glossary Definition {result.category ? `• ${result.category}` : ''}
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400">
                      Chapter {result.chapterNumber}: {result.chapterTitle}
                    </span>
                  )}
                </div>
                {result.partTitle && (
                  <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
                    {result.partTitle}
                  </span>
                )}
              </div>

              <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                {getIcon(result.type)}
                {result.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 line-clamp-2 leading-relaxed font-sans">
                {result.snippet}
              </p>

              <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-end text-xs text-cyan-400 group-hover:text-cyan-300 font-medium">
                {result.type === 'glossary' ? (
                  <>
                    View in Complete Glossary <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </>
                ) : (
                  <>
                    Jump to Chapter {result.chapterNumber} <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

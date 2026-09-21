import React, { useState, useMemo, useEffect } from 'react';
import { BUSHONG_GLOSSARY, GlossaryItem } from '../data/glossaryData';
import { BookA, Search, Filter, X, Tag } from 'lucide-react';

interface GlossaryViewProps {
  initialQuery?: string;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ initialQuery = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  useEffect(() => {
    if (initialQuery) {
      setSearchTerm(initialQuery);
    }
  }, [initialQuery]);

  const alphabet = ['ALL', '#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const categories = [
    'ALL',
    'Physics',
    'Equipment',
    'Image Quality',
    'Digital Imaging',
    'Radiobiology',
    'Radiation Protection',
    'General'
  ];

  const filteredGlossary = useMemo(() => {
    return BUSHONG_GLOSSARY.filter((item) => {
      // Letter filter
      if (selectedLetter !== 'ALL') {
        if (selectedLetter === '#') {
          if (!item.letter.includes('#') && !/^\d/.test(item.term)) return false;
        } else if (item.letter !== selectedLetter) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'ALL' && item.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        return item.term.toLowerCase().includes(q) || item.definition.toLowerCase().includes(q);
      }

      return true;
    });
  }, [searchTerm, selectedLetter, selectedCategory]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-950/60 via-slate-900 to-teal-950/60 border border-cyan-500/30 rounded-2xl p-6 mb-8 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-2">
              <BookA className="w-3.5 h-3.5" /> Complete Textbook Glossary
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Glossary of Radiologic Science Terms
            </h1>
            <p className="text-sm text-slate-300 mt-1">
              Verbatim authoritative definitions, units, and mathematical expressions from Bushong 11th Edition (pp. 615–634).
            </p>
          </div>
          <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-mono text-cyan-300 border border-slate-700 whitespace-nowrap">
            {BUSHONG_GLOSSARY.length} Terms
          </span>
        </div>

        {/* Search Input */}
        <div className="relative mt-6">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search terms, physical quantities, definitions, or units..."
            className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-3 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-800/80">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* A-Z Letter Navigation Bar */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6 p-2 bg-slate-900 border border-slate-800 rounded-xl">
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => setSelectedLetter(letter)}
            className={`w-8 h-8 rounded-lg text-xs font-bold font-mono transition-all flex items-center justify-center ${
              selectedLetter === letter
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Terms List */}
      <div className="space-y-4">
        {filteredGlossary.length === 0 ? (
          <div className="text-center py-12 bg-slate-900 border border-slate-800 rounded-xl">
            <BookA className="w-10 h-10 text-slate-600 mx-auto mb-2" />
            <p className="text-sm text-slate-400">No glossary terms found matching your query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGlossary.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {item.term}
                    </h3>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-cyan-400 whitespace-nowrap">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.definition}
                  </p>
                </div>
                {item.units && (
                  <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-amber-300 font-mono">
                    <span>Units: {item.units}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { EXAM_TRAP_MATRICES } from '../data/examTrapsData';
import { ComparisonMatrix } from '../types/features';
import { 
  AlertTriangle, 
  Lightbulb, 
  Search, 
  Check, 
  Sparkles, 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Zap,
  Bookmark
} from 'lucide-react';

export const ExamTrapsCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string>(EXAM_TRAP_MATRICES[0].id);

  const categories = useMemo(() => {
    const set = new Set<string>();
    EXAM_TRAP_MATRICES.forEach(m => set.add(m.category));
    return ['all', ...Array.from(set)];
  }, []);

  const filteredMatrices = useMemo(() => {
    return EXAM_TRAP_MATRICES.filter(m => {
      if (selectedCategory !== 'all' && m.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const titleMatch = m.title.toLowerCase().includes(q);
        const subMatch = m.subtitle.toLowerCase().includes(q);
        const trapMatch = m.examTrapWarning.toLowerCase().includes(q);
        const pearlMatch = m.clinicalPearls.some(p => p.toLowerCase().includes(q));
        const paramMatch = m.parameters.some(p => p.parameter.toLowerCase().includes(q) || p.values.some(v => v.toLowerCase().includes(q)));
        return titleMatch || subMatch || trapMatch || pearlMatch || paramMatch;
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-16">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-rose-950/20 to-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Bushong "Exam Traps & Common Confusions" Center
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-3xl">
              High-yield comparative matrices addressing the most frequently confused physics concepts on the ARRT radiography exam.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-xl border border-cyan-500/20 self-start md:self-auto">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>{EXAM_TRAP_MATRICES.length} Core Comparative Guides</span>
          </div>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shadow-md">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search concepts (e.g. Compton vs Photoelectric, LNT, Line-focus, Grid cutoff)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 text-xs">
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-400 cursor-pointer"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Matrices Accordion / Cards */}
      <div className="space-y-4">
        {filteredMatrices.map((matrix) => {
          const isExpanded = expandedId === matrix.id;
          return (
            <div
              key={matrix.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl transition-all"
            >
              {/* Card Header / Click to Toggle */}
              <div
                onClick={() => setExpandedId(isExpanded ? '' : matrix.id)}
                className="p-5 sm:p-6 cursor-pointer hover:bg-slate-800/40 transition-colors flex items-start justify-between gap-4 select-none"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-400 border border-slate-700">
                      {matrix.category}
                    </span>
                    {matrix.mnemonic && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        Mnemonic Included
                      </span>
                    )}
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {matrix.title}
                  </h2>
                  <p className="text-xs text-slate-400">{matrix.subtitle}</p>
                </div>

                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-xs hidden sm:inline">{isExpanded ? 'Collapse' : 'Expand Matrix'}</span>
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Expanded Comparative Table & Insights */}
              {isExpanded && (
                <div className="p-5 sm:p-6 pt-0 border-t border-slate-800 space-y-6 animate-fadeIn">
                  {/* ARRT Exam Trap Alert Box */}
                  <div className="bg-rose-950/20 border border-rose-500/30 rounded-xl p-4 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <strong className="text-xs font-bold text-rose-300 uppercase tracking-wide block">
                        Watch Out For This ARRT Board Trap:
                      </strong>
                      <p className="text-xs sm:text-sm text-rose-100 leading-relaxed">
                        {matrix.examTrapWarning}
                      </p>
                    </div>
                  </div>

                  {/* Comparative Matrix Table */}
                  <div className="overflow-x-auto border border-slate-800 rounded-xl shadow-inner">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-slate-950 text-slate-200 font-bold border-b border-slate-800">
                        <tr>
                          {matrix.columns.map((col, idx) => (
                            <th key={idx} className="p-3 border-r border-slate-800 last:border-0 bg-slate-950/90">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/80 bg-slate-900/60">
                        {matrix.parameters.map((param, pIdx) => (
                          <tr
                            key={pIdx}
                            className={`hover:bg-slate-800/50 transition-colors ${
                              param.isKeyDifferentiator ? 'bg-cyan-950/15' : ''
                            }`}
                          >
                            <td className="p-3 font-semibold text-white border-r border-slate-800/80 align-top flex items-center gap-1.5">
                              {param.isKeyDifferentiator && (
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block flex-shrink-0" />
                              )}
                              <span>{param.parameter}</span>
                            </td>
                            {param.values.map((val, vIdx) => (
                              <td
                                key={vIdx}
                                className={`p-3 text-slate-300 border-r border-slate-800/80 last:border-0 leading-relaxed align-top ${
                                  param.isKeyDifferentiator ? 'text-slate-100' : ''
                                }`}
                              >
                                {val}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Clinical Pearls & Mnemonic Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Clinical Pearls */}
                    <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                        <Lightbulb className="w-4 h-4" /> Clinical Physics Pearls
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {matrix.clinicalPearls.map((pearl, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-amber-400 font-bold">•</span>
                            <span>{pearl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mnemonic Memory Aid */}
                    {matrix.mnemonic && (
                      <div className="bg-gradient-to-br from-indigo-950/30 to-slate-950 border border-indigo-500/30 rounded-xl p-4 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 uppercase tracking-wider">
                          <Zap className="w-4 h-4 text-indigo-400" /> High-Yield Board Mnemonic
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-indigo-100 italic bg-indigo-950/40 p-3 rounded-lg border border-indigo-500/20">
                          "{matrix.mnemonic}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

import React, { useState, useMemo, useEffect } from 'react';
import { HighYieldPoint, HighlightColor } from '../types/features';
import { 
  getStoredHighlights, 
  saveStoredHighlights, 
  deleteHighlight, 
  toggleStarHighlight, 
  updateHighlightNote,
  addHighlight,
  HIGHLIGHT_TAG_CONFIG 
} from '../data/highYieldVaultData';
import { BOOK_PARTS } from '../data/bookMeta';
import { 
  Sparkles, 
  Star, 
  Trash2, 
  Edit3, 
  Search, 
  Download, 
  Plus, 
  Layers, 
  Eye, 
  EyeOff, 
  ChevronLeft, 
  ChevronRight, 
  RotateCw, 
  Check, 
  Filter, 
  FileSpreadsheet, 
  BookOpen,
  ArrowRight,
  HelpCircle,
  Zap,
  Tag
} from 'lucide-react';

interface HighYieldVaultProps {
  onNavigateToChapter?: (chapterNumber: number) => void;
}

export const HighYieldVault: React.FC<HighYieldVaultProps> = ({ onNavigateToChapter }) => {
  const [points, setPoints] = useState<HighYieldPoint[]>(() => getStoredHighlights());
  const [viewMode, setViewMode] = useState<'browse' | 'cram' | 'cloze'>('browse');
  
  // Filters & Search
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<HighlightColor | 'all'>('all');
  const [selectedPart, setSelectedPart] = useState<string>('all');
  const [onlyStarred, setOnlyStarred] = useState<boolean>(false);
  
  // Cram Mode State
  const [cramIdx, setCramIdx] = useState<number>(0);
  const [cramFlipped, setCramFlipped] = useState<boolean>(false);
  
  // Cloze Mode State
  const [revealedClozes, setRevealedClozes] = useState<Record<string, boolean>>({});
  
  // Modal / Add / Edit state
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [editingPoint, setEditingPoint] = useState<HighYieldPoint | null>(null);
  const [newText, setNewText] = useState<string>('');
  const [newPrompt, setNewPrompt] = useState<string>('');
  const [newChapter, setNewChapter] = useState<number>(1);
  const [newTag, setNewTag] = useState<HighlightColor>('yellow');

  // Refresh points on update
  const refresh = () => {
    setPoints(getStoredHighlights());
  };

  useEffect(() => {
    refresh();
    const handleUpdate = () => refresh();
    window.addEventListener('rad_highlights_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('rad_highlights_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const filteredPoints = useMemo(() => {
    return points.filter(p => {
      if (onlyStarred && !p.starred) return false;
      if (selectedTag !== 'all' && p.tagColor !== selectedTag) return false;
      if (selectedPart !== 'all') {
        const matchingPart = BOOK_PARTS.find(part => part.id === selectedPart);
        if (matchingPart) {
          // Check if chapter falls in part
          if (p.partId && p.partId !== selectedPart) return false;
        }
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const textMatch = p.text.toLowerCase().includes(q);
        const promptMatch = p.prompt ? p.prompt.toLowerCase().includes(q) : false;
        const catMatch = p.category.toLowerCase().includes(q);
        return textMatch || promptMatch || catMatch;
      }
      return true;
    });
  }, [points, onlyStarred, selectedTag, selectedPart, searchQuery]);

  // Cram keyboard navigation
  useEffect(() => {
    if (viewMode !== 'cram') return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setCramFlipped(prev => !prev);
      } else if (e.key === 'ArrowRight' || e.key === 'j') {
        e.preventDefault();
        nextCram();
      } else if (e.key === 'ArrowLeft' || e.key === 'k') {
        e.preventDefault();
        prevCram();
      } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        if (filteredPoints[cramIdx]) {
          handleToggleStar(filteredPoints[cramIdx].id);
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [viewMode, cramIdx, filteredPoints]);

  const nextCram = () => {
    setCramFlipped(false);
    setCramIdx(prev => (prev < filteredPoints.length - 1 ? prev + 1 : 0));
  };

  const prevCram = () => {
    setCramFlipped(false);
    setCramIdx(prev => (prev > 0 ? prev - 1 : filteredPoints.length - 1));
  };

  const handleToggleStar = (id: string) => {
    toggleStarHighlight(id);
    refresh();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this high-yield point from your vault?')) {
      deleteHighlight(id);
      refresh();
    }
  };

  const handleSaveEdit = () => {
    if (!editingPoint) return;
    updateHighlightNote(editingPoint.id, newPrompt, HIGHLIGHT_TAG_CONFIG[newTag].label, newTag);
    setEditingPoint(null);
    refresh();
  };

  const handleCreateNew = () => {
    if (!newText.trim()) return;
    addHighlight({
      chapterNumber: newChapter,
      text: newText.trim(),
      prompt: newPrompt.trim() || undefined,
      category: HIGHLIGHT_TAG_CONFIG[newTag].label,
      tagColor: newTag,
      starred: false
    });
    setNewText('');
    setNewPrompt('');
    setShowAddModal(false);
    refresh();
  };

  // Export handlers
  const exportJSON = () => {
    const jsonStr = JSON.stringify(points, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `bushong_high_yield_vault_${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const exportCSV = () => {
    const headers = ["ID", "Chapter", "Category", "Tag", "Starred", "Prompt", "Text", "CreatedAt"];
    const rows = points.map(p => [
      p.id,
      p.chapterNumber,
      `"${(p.category || '').replace(/"/g, '""')}"`,
      p.tagColor,
      p.starred ? "YES" : "NO",
      `"${(p.prompt || '').replace(/"/g, '""')}"`,
      `"${(p.text || '').replace(/"/g, '""')}"`,
      p.createdAt
    ]);
    const csvContent = [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `bushong_high_yield_vault_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const exportAnki = () => {
    // Anki Tab-delimited text format: Front [TAB] Back [TAB] Tags
    const lines = points.map(p => {
      const front = p.prompt ? `${p.prompt}<br><br><i>[Bushong Ch. ${p.chapterNumber} - ${p.category}]</i>` : `Key Concept: Bushong Ch. ${p.chapterNumber} (${p.category})`;
      const back = `${p.text}`;
      const tag = `Bushong11th::Ch${p.chapterNumber}::${p.tagColor}`;
      return `${front}\t${back}\t${tag}`;
    });
    const content = "#separator:tab\n#html:true\n#tags column:3\n" + lines.join('\n');
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = `bushong_anki_deck_${new Date().toISOString().slice(0, 10)}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Helper for Cloze deletion mode: blanks out key numbers, formulas, terms
  const renderClozeText = (pointId: string, text: string) => {
    // Matches numbers with units (e.g. 3.2 mSv, 15%, 2n^2, 69.5 keV, 1.6 mm, 50 mSv/yr, E = mc^2) or capitalized proper terms
    const clozeRegex = /(\b\d+(?:\.\d+)?\s*(?:mSv(?:\/yr)?|keV|kVp|mAs|Gy[at]?|rad|rem|Ci|Bq|mm|cm|m|s|N|J|W|%|°)?\b|\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)?\b|E\s*=\s*mc²)/g;

    const parts: (string | { cloze: string; idx: number })[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    let matchIdx = 0;

    // Only blank out a maximum of 3-4 key tokens per card for clean readability
    let clozeCount = 0;
    while ((match = clozeRegex.exec(text)) !== null && clozeCount < 4) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const token = match[0];
      // Filter out trivial common English words that happen to be capitalized at start of sentence
      const trivial = ['The', 'And', 'This', 'That', 'With', 'From', 'State', 'Like', 'Always', 'Matter', 'Energy'];
      if (!trivial.includes(token) || /\d/.test(token)) {
        parts.push({ cloze: token, idx: matchIdx });
        clozeCount++;
      } else {
        parts.push(token);
      }
      lastIndex = match.index + token.length;
      matchIdx++;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return (
      <span className="leading-relaxed">
        {parts.map((p, i) => {
          if (typeof p === 'string') return <span key={i}>{p}</span>;
          const key = `${pointId}-${p.idx}`;
          const isRevealed = !!revealedClozes[key];
          return (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setRevealedClozes(prev => ({ ...prev, [key]: !prev[key] }));
              }}
              className={`inline-block mx-1 px-2 py-0.5 rounded text-xs font-mono font-bold transition-all ${
                isRevealed
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-cyan-950 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-900/60 shadow-inner'
              }`}
              title="Click to reveal cloze blank"
            >
              {isRevealed ? p.cloze : '[ ... ]'}
            </button>
          );
        })}
      </span>
    );
  };

  const currentCramPoint = filteredPoints[cramIdx];

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-16">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                High-Yield One-Liner MCQ Vault
              </h1>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-mono font-bold border border-cyan-500/20">
                {filteredPoints.length} Points
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              Rapid-fire board revision pearls, high-yield exam traps, and custom text highlights captured during reading.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all"
            >
              <Plus className="w-4 h-4" /> Add One-Liner
            </button>

            {/* Export Menu */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={exportAnki}
                className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1"
                title="Export formatted for Anki desktop & mobile"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" /> Anki Deck
              </button>
              <button
                onClick={exportCSV}
                className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1"
                title="Export as CSV spreadsheet"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" /> CSV
              </button>
              <button
                onClick={exportJSON}
                className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1"
                title="Export as JSON backup"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" /> JSON
              </button>
            </div>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
            <button
              onClick={() => setViewMode('browse')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all ${
                viewMode === 'browse'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" /> Vault Browser
            </button>
            <button
              onClick={() => {
                setViewMode('cram');
                setCramIdx(0);
                setCramFlipped(false);
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all ${
                viewMode === 'cram'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5" /> Rapid-Fire Cram
            </button>
            <button
              onClick={() => {
                setViewMode('cloze');
                setRevealedClozes({});
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all ${
                viewMode === 'cloze'
                  ? 'bg-purple-500 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" /> Fill-in-Blank Cloze Test
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={() => setOnlyStarred(prev => !prev)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                onlyStarred
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${onlyStarred ? 'fill-amber-400 text-amber-400' : ''}`} />
              Starred Only
            </button>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shadow-md">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search key concepts, formulas, numbers, or prompt keywords..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* Tag Filter */}
          <select
            value={selectedTag}
            onChange={e => setSelectedTag(e.target.value as any)}
            className="bg-slate-950 border border-slate-800 text-slate-300 rounded-lg px-2.5 py-2 focus:outline-none focus:border-cyan-400 cursor-pointer"
          >
            <option value="all">All Category Tags</option>
            <option value="yellow">Yellow: Core Concepts</option>
            <option value="red">Red: Exam Traps</option>
            <option value="green">Green: Formulas / Laws</option>
            <option value="purple">Purple: Radiation Protection</option>
            <option value="blue">Blue: Technique / Equipment</option>
          </select>

          {/* Part Filter */}
          <select
            value={selectedPart}
            onChange={e => setSelectedPart(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-slate-300 rounded-lg px-2.5 py-2 focus:outline-none focus:border-cyan-400 cursor-pointer"
          >
            <option value="all">All Textbook Parts (1–8)</option>
            {BOOK_PARTS.map(part => (
              <option key={part.id} value={part.id}>{part.title}</option>
            ))}
          </select>
        </div>
      </div>

      {/* MODE 1: RAPID-FIRE CRAM MODE */}
      {viewMode === 'cram' && (
        <div className="space-y-4">
          {filteredPoints.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
              <Sparkles className="w-8 h-8 text-slate-600 mx-auto mb-3" />
              <p>No high-yield points match your active filters.</p>
            </div>
          ) : currentCramPoint ? (
            <div className="max-w-2xl mx-auto space-y-4">
              {/* Progress & Quick Controls */}
              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                <span className="font-mono">
                  Card {cramIdx + 1} of {filteredPoints.length}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-500 hidden sm:inline">
                    Keys: <kbd className="px-1 bg-slate-800 rounded text-[10px]">Space</kbd> Flip, <kbd className="px-1 bg-slate-800 rounded text-[10px]">←</kbd> <kbd className="px-1 bg-slate-800 rounded text-[10px]">→</kbd> Next, <kbd className="px-1 bg-slate-800 rounded text-[10px]">S</kbd> Star
                  </span>
                  <button
                    onClick={() => handleToggleStar(currentCramPoint.id)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                  >
                    <Star className={`w-4 h-4 ${currentCramPoint.starred ? 'fill-amber-400 text-amber-400' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Flip Card Container */}
              <div
                onClick={() => setCramFlipped(!cramFlipped)}
                className="cursor-pointer min-h-[300px] sm:min-h-[340px] bg-slate-900/90 hover:border-slate-700 transition-all border border-slate-800 rounded-2xl p-8 flex flex-col justify-between shadow-2xl relative select-none"
              >
                {/* Top Card Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${HIGHLIGHT_TAG_CONFIG[currentCramPoint.tagColor].bg} ${HIGHLIGHT_TAG_CONFIG[currentCramPoint.tagColor].text} ${HIGHLIGHT_TAG_CONFIG[currentCramPoint.tagColor].border}`}>
                      {currentCramPoint.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Ch.{currentCramPoint.chapterNumber}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-cyan-400 flex items-center gap-1">
                    <RotateCw className="w-3.5 h-3.5" />
                    {cramFlipped ? 'Answer Revealed' : 'Click to Flip'}
                  </span>
                </div>

                {/* Card Body */}
                <div className="my-auto py-4">
                  {!cramFlipped ? (
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-amber-400/80 uppercase tracking-widest block">
                        Question / Recall Prompt:
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                        {currentCramPoint.prompt || `What is the key Bushong principle regarding ${currentCramPoint.category}?`}
                      </h3>
                      <p className="text-xs text-slate-500 italic mt-4">
                        (Tap card or press Space to reveal the high-yield answer)
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3 animate-fadeIn">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
                        Bushong 11th Ed. Key Answer:
                      </span>
                      <p className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed">
                        {currentCramPoint.text}
                      </p>
                      {currentCramPoint.prompt && (
                        <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                          Prompt: {currentCramPoint.prompt}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  {onNavigateToChapter && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigateToChapter(currentCramPoint.chapterNumber);
                      }}
                      className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                    >
                      <BookOpen className="w-3.5 h-3.5" /> Open Chapter {currentCramPoint.chapterNumber}
                    </button>
                  )}
                  <span>Tap anywhere to toggle</span>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={prevCram}
                  className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-colors shadow"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <button
                  onClick={nextCram}
                  className="flex-1 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-cyan-500/20"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      )}

      {/* MODE 2: FILL-IN-THE-BLANK CLOZE DELETION TEST MODE */}
      {viewMode === 'cloze' && (
        <div className="space-y-4">
          <div className="bg-purple-950/20 border border-purple-500/30 rounded-xl p-4 text-xs text-purple-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <span>
                <strong>Cloze Recall Active:</strong> Numbers, doses, formulas, and key radiologic entities have been blanked out. Click any <span className="font-mono px-1.5 py-0.5 rounded bg-cyan-900/60 border border-cyan-500/40 text-cyan-300">[ ... ]</span> to verify your recall!
              </span>
            </div>
            <button
              onClick={() => {
                // Reveal all clozes for currently shown cards
                const updated: Record<string, boolean> = {};
                filteredPoints.forEach(p => {
                  for (let i = 0; i < 6; i++) {
                    updated[`${p.id}-${i}`] = true;
                  }
                });
                setRevealedClozes(updated);
              }}
              className="px-2.5 py-1 rounded-lg bg-purple-900/60 hover:bg-purple-800 border border-purple-400/40 text-white font-semibold transition-colors flex-shrink-0"
            >
              Reveal All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPoints.map((point) => (
              <div
                key={point.id}
                className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-3 shadow-md hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${HIGHLIGHT_TAG_CONFIG[point.tagColor].bg} ${HIGHLIGHT_TAG_CONFIG[point.tagColor].text} ${HIGHLIGHT_TAG_CONFIG[point.tagColor].border}`}>
                      {point.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Ch.{point.chapterNumber}
                    </span>
                  </div>

                  {point.prompt && (
                    <div className="text-xs font-bold text-slate-300 mb-2 pb-1.5 border-b border-slate-800 flex items-start gap-1.5">
                      <span className="text-cyan-400">Q:</span>
                      <span>{point.prompt}</span>
                    </div>
                  )}

                  <div className="text-xs sm:text-sm text-slate-200">
                    {renderClozeText(point.id, point.text)}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                  {onNavigateToChapter && (
                    <button
                      onClick={() => onNavigateToChapter(point.chapterNumber)}
                      className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium"
                    >
                      <BookOpen className="w-3 h-3" /> Read Context
                    </button>
                  )}
                  <button
                    onClick={() => handleToggleStar(point.id)}
                    className="text-slate-400 hover:text-amber-400"
                  >
                    <Star className={`w-3.5 h-3.5 ${point.starred ? 'fill-amber-400 text-amber-400' : ''}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODE 3: BROWSE VAULT LIST */}
      {viewMode === 'browse' && (
        <div className="space-y-3">
          {filteredPoints.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
              <Sparkles className="w-8 h-8 text-slate-600 mx-auto mb-3" />
              <p>No one-liner points match your query.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {filteredPoints.map((point) => {
                const tagCfg = HIGHLIGHT_TAG_CONFIG[point.tagColor];
                return (
                  <div
                    key={point.id}
                    className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-xl p-4 sm:p-5 flex flex-col justify-between space-y-3 shadow-md transition-all group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${tagCfg.bg} ${tagCfg.text} ${tagCfg.border}`}>
                            {point.category}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">
                            Ch.{point.chapterNumber}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleToggleStar(point.id)}
                            className="p-1 text-slate-400 hover:text-amber-400 transition-colors"
                            title={point.starred ? 'Remove Star' : 'Star point'}
                          >
                            <Star className={`w-3.5 h-3.5 ${point.starred ? 'fill-amber-400 text-amber-400' : ''}`} />
                          </button>
                          <button
                            onClick={() => {
                              setEditingPoint(point);
                              setNewPrompt(point.prompt || '');
                              setNewTag(point.tagColor);
                            }}
                            className="p-1 text-slate-400 hover:text-cyan-400 transition-colors"
                            title="Edit prompt / tag"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          {point.isUserCreated && (
                            <button
                              onClick={() => handleDelete(point.id)}
                              className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                              title="Delete point"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>

                      {point.prompt && (
                        <div className="bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800/80 text-xs font-semibold text-cyan-300 flex items-start gap-1.5">
                          <span className="text-slate-500 font-mono">Q:</span>
                          <span>{point.prompt}</span>
                        </div>
                      )}

                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {point.text}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                      {onNavigateToChapter && (
                        <button
                          onClick={() => onNavigateToChapter(point.chapterNumber)}
                          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                        >
                          <BookOpen className="w-3 h-3" /> Ch. {point.chapterNumber}
                        </button>
                      )}
                      <span className="font-mono text-[10px]">
                        {new Date(point.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Add New One-Liner Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Plus className="w-4 h-4 text-cyan-400" /> Add High-Yield One-Liner
              </h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-white">
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Key Revision Point / One-Liner Fact *</label>
                <textarea
                  rows={3}
                  placeholder="Enter the core factual statement (e.g. Compton scatter is independent of atomic number Z)..."
                  value={newText}
                  onChange={e => setNewText(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Question Prompt or Recall Stem (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. How does atomic number Z influence Compton scatter?"
                  value={newPrompt}
                  onChange={e => setNewPrompt(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Bushong Chapter (1–40)</label>
                  <input
                    type="number"
                    min={1}
                    max={40}
                    value={newChapter}
                    onChange={e => setNewChapter(parseInt(e.target.value) || 1)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-2 text-white focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Category & Color Tag</label>
                  <select
                    value={newTag}
                    onChange={e => setNewTag(e.target.value as HighlightColor)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-2 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="yellow">Yellow: Core Concept</option>
                    <option value="red">Red: Exam Trap</option>
                    <option value="green">Green: Formula / Law</option>
                    <option value="purple">Purple: Radiation Protection</option>
                    <option value="blue">Blue: Technique / Equipment</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateNew}
                disabled={!newText.trim()}
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-xs disabled:opacity-50"
              >
                Save One-Liner
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Point Modal */}
      {editingPoint && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-cyan-400" /> Edit Point Details
              </h3>
              <button onClick={() => setEditingPoint(null)} className="text-slate-400 hover:text-white">
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-slate-300 italic">
                "{editingPoint.text}"
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Question Prompt / Stem</label>
                <input
                  type="text"
                  value={newPrompt}
                  onChange={e => setNewPrompt(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-2 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Color Tag</label>
                <select
                  value={newTag}
                  onChange={e => setNewTag(e.target.value as HighlightColor)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-2 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="yellow">Yellow: Core Concept</option>
                  <option value="red">Red: Exam Trap</option>
                  <option value="green">Green: Formula / Law</option>
                  <option value="purple">Purple: Radiation Protection</option>
                  <option value="blue">Blue: Technique / Equipment</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
              <button
                onClick={() => setEditingPoint(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-xs"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

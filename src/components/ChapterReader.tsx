import React, { useState, useEffect } from 'react';
import { Chapter } from '../types/book';
import { ReaderPreferences, HighYieldPoint } from '../types/features';
import { HighlightToolbar } from './HighlightToolbar';
import { TextWithGlossary } from './GlossaryTooltip';
import { ReaderSettingsModal } from './ReaderSettingsModal';
import { tts, TtsState } from '../utils/textToSpeech';
import { 
  getStoredHighlights, 
  deleteHighlight, 
  updateHighlightNote, 
  toggleStarHighlight, 
  HIGHLIGHT_TAG_CONFIG 
} from '../data/highYieldVaultData';
import { HighlightColor } from '../types/features';
import { 
  BookOpen, 
  CheckCircle, 
  Lightbulb, 
  HelpCircle, 
  ChevronRight, 
  ChevronLeft, 
  Bookmark, 
  BookmarkCheck,
  Calculator,
  Layers,
  Sparkles,
  Info,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  Settings,
  Highlighter,
  Trash2,
  Star,
  Edit3,
  X,
  Check
} from 'lucide-react';

interface ChapterReaderProps {
  chapter: Chapter;
  onSelectChapter: (num: number) => void;
  allChaptersCount: number;
  onOpenCalculators: () => void;
  onOpenGlossary?: (term?: string) => void;
  onOpenVault?: () => void;
}

export const ChapterReader: React.FC<ChapterReaderProps> = ({
  chapter,
  onSelectChapter,
  allChaptersCount,
  onOpenCalculators,
  onOpenGlossary,
  onOpenVault
}) => {
  // Learning objectives completion state
  const [completedObjectives, setCompletedObjectives] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(`rad_obj_${chapter.number}`);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Chapter bookmark state
  const [bookmarked, setBookmarked] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('rad_bookmarked_chapters');
      const list = saved ? JSON.parse(saved) : [];
      return list.includes(chapter.number);
    } catch {
      return false;
    }
  });

  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({});

  // Reader Preferences state
  const [readerPrefs, setReaderPrefs] = useState<ReaderPreferences>(() => {
    try {
      const saved = localStorage.getItem('rad_reader_prefs');
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      theme: 'slate',
      font: 'sans',
      size: 'md',
      spacing: 'relaxed',
      bionicReading: false,
      glossaryTooltips: true
    };
  });
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);

  // Text-to-Speech State
  const [ttsState, setTtsState] = useState<TtsState>(() => tts.getState());
  useEffect(() => {
    return tts.subscribe(setTtsState);
  }, []);

  // Highlights state for this chapter
  const [chapterHighlights, setChapterHighlights] = useState<HighYieldPoint[]>([]);

  const refreshHighlights = () => {
    const all = getStoredHighlights();
    setChapterHighlights(all.filter(h => h.chapterNumber === chapter.number));
  };

  // Highlight edit modal state
  const [editingHighlight, setEditingHighlight] = useState<HighYieldPoint | null>(null);
  const [editPrompt, setEditPrompt] = useState<string>('');
  const [editTag, setEditTag] = useState<HighlightColor>('yellow');

  const handleOpenEditHighlight = (hl: HighYieldPoint) => {
    setEditingHighlight(hl);
    setEditPrompt(hl.prompt || '');
    setEditTag(hl.tagColor);
  };

  const handleSaveHighlightEdit = () => {
    if (!editingHighlight) return;
    updateHighlightNote(editingHighlight.id, editPrompt.trim(), HIGHLIGHT_TAG_CONFIG[editTag].label, editTag);
    setEditingHighlight(null);
    refreshHighlights();
  };

  const handleDeleteFromEdit = () => {
    if (!editingHighlight) return;
    deleteHighlight(editingHighlight.id);
    setEditingHighlight(null);
    refreshHighlights();
  };

  const handleToggleStarFromEdit = () => {
    if (!editingHighlight) return;
    toggleStarHighlight(editingHighlight.id);
    setEditingHighlight(prev => prev ? { ...prev, starred: !prev.starred } : null);
    refreshHighlights();
  };

  useEffect(() => {
    refreshHighlights();
    // Reset revealed questions on chapter change
    setRevealedQuestions({});
    // Load objectives for this chapter
    try {
      const saved = localStorage.getItem(`rad_obj_${chapter.number}`);
      setCompletedObjectives(saved ? JSON.parse(saved) : []);
    } catch {
      setCompletedObjectives([]);
    }
    // Load bookmark
    try {
      const saved = localStorage.getItem('rad_bookmarked_chapters');
      const list = saved ? JSON.parse(saved) : [];
      setBookmarked(list.includes(chapter.number));
    } catch {
      setBookmarked(false);
    }
  }, [chapter.number]);

  const toggleObjective = (idx: number) => {
    const next = completedObjectives.includes(idx)
      ? completedObjectives.filter(i => i !== idx)
      : [...completedObjectives, idx];
    setCompletedObjectives(next);
    try {
      localStorage.setItem(`rad_obj_${chapter.number}`, JSON.stringify(next));
    } catch {}
  };

  const toggleBookmark = () => {
    try {
      const saved = localStorage.getItem('rad_bookmarked_chapters');
      const list: number[] = saved ? JSON.parse(saved) : [];
      const updated = list.includes(chapter.number)
        ? list.filter(n => n !== chapter.number)
        : [...list, chapter.number];
      localStorage.setItem('rad_bookmarked_chapters', JSON.stringify(updated));
      setBookmarked(!bookmarked);
    } catch {}
  };

  const toggleQuestion = (id: string) => {
    setRevealedQuestions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const allQuestionsRevealed = chapter.challengeQuestions.length > 0 && chapter.challengeQuestions.every(q => revealedQuestions[q.id]);
  const toggleAllQuestions = () => {
    if (allQuestionsRevealed) {
      setRevealedQuestions({});
    } else {
      const updated: Record<string, boolean> = {};
      chapter.challengeQuestions.forEach(q => { updated[q.id] = true; });
      setRevealedQuestions(updated);
    }
  };

  const updatePreferences = (updated: Partial<ReaderPreferences>) => {
    setReaderPrefs(prev => {
      const next = { ...prev, ...updated };
      try {
        localStorage.setItem('rad_reader_prefs', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // TTS Read-Aloud for Chapter
  const handleReadChapterSummary = () => {
    const textToRead = `Chapter ${chapter.number}: ${chapter.title}. ` +
      `Summary: ` + chapter.summary.join('. ');
    tts.toggle(textToRead, `Chapter ${chapter.number} Summary`);
  };

  // Theme container classes
  const themeClasses = {
    slate: 'bg-slate-900/90 border-slate-800 text-slate-100',
    oled: 'bg-black border-neutral-800 text-neutral-100',
    sepia: 'bg-[#28221a] border-amber-900/40 text-[#f5ebd7]',
    paper: 'bg-white border-neutral-200 text-slate-900 shadow-2xl'
  }[readerPrefs.theme];

  const fontClasses = {
    sans: 'font-sans',
    serif: 'font-serif',
    opendyslexic: 'font-sans tracking-wide'
  }[readerPrefs.font];

  const sizeClasses = {
    sm: 'text-xs sm:text-sm',
    md: 'text-sm sm:text-base',
    lg: 'text-base sm:text-lg',
    xl: 'text-lg sm:text-xl'
  }[readerPrefs.size];

  const spacingClasses = {
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose'
  }[readerPrefs.spacing];

  return (
    <article className={`space-y-8 max-w-4xl mx-auto pb-20 transition-all ${fontClasses}`}>
      {/* Floating Highlight Toolbar */}
      <HighlightToolbar
        chapterNumber={chapter.number}
        chapterTitle={chapter.title}
        onHighlightSaved={refreshHighlights}
      />

      {/* Reader Appearance Settings Modal */}
      {showSettingsModal && (
        <ReaderSettingsModal
          preferences={readerPrefs}
          onUpdatePreferences={updatePreferences}
          onClose={() => setShowSettingsModal(false)}
        />
      )}

      {/* Edit Highlight / One-Liner Modal */}
      {editingHighlight && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Highlighter className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold text-white">Edit High-Yield One-Liner</h3>
              </div>
              <button
                onClick={() => setEditingHighlight(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Selected Text Preview */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 italic leading-relaxed max-h-32 overflow-y-auto">
              "{editingHighlight.text}"
            </div>

            {/* Prompt / Mnemonic Input */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">
                Question Stem / Mnemonic / Prompt:
              </label>
              <input
                type="text"
                value={editPrompt}
                onChange={e => setEditPrompt(e.target.value)}
                placeholder="e.g. What is the formula or key board rule?"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Color / Category Tag */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Category / Tag Color:</label>
              <div className="grid grid-cols-5 gap-1.5">
                {(['yellow', 'red', 'green', 'purple', 'blue'] as HighlightColor[]).map(c => {
                  const cfg = HIGHLIGHT_TAG_CONFIG[c];
                  const isSelected = editTag === c;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setEditTag(c)}
                      className={`p-1.5 rounded-lg border text-[10px] font-bold flex flex-col items-center gap-1 transition-all ${
                        isSelected ? `${cfg.bg} ${cfg.text} ${cfg.border} ring-2 ring-cyan-400` : 'bg-slate-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      <span className={`w-3 h-3 rounded-full ${c === 'yellow' ? 'bg-amber-400' : c === 'red' ? 'bg-rose-500' : c === 'green' ? 'bg-emerald-400' : c === 'purple' ? 'bg-purple-400' : 'bg-cyan-400'}`} />
                      <span className="truncate max-w-full">{cfg.label.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDeleteFromEdit}
                  className="px-3 py-1.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-500/30 text-xs font-bold flex items-center gap-1 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Delete
                </button>
                <button
                  type="button"
                  onClick={handleToggleStarFromEdit}
                  className={`p-1.5 rounded-lg border text-xs transition-colors ${
                    editingHighlight.starred
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                  title={editingHighlight.starred ? 'Starred' : 'Star this item'}
                >
                  <Star className={`w-4 h-4 ${editingHighlight.starred ? 'fill-amber-400 text-amber-400' : ''}`} />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setEditingHighlight(null)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveHighlightEdit}
                  className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold shadow flex items-center gap-1"
                >
                  <Check className="w-3.5 h-3.5" /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Audio TTS Control Bar */}
      {(ttsState.isPlaying || ttsState.isPaused) && (
        <div className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border border-cyan-500/40 rounded-2xl p-3 shadow-xl flex items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
              <Volume2 className="w-4 h-4 animate-pulse" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block">
                Audio Read-Aloud
              </span>
              <p className="text-xs text-slate-200 truncate font-medium">
                {ttsState.currentText}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Speed selector */}
            <select
              value={ttsState.rate}
              onChange={e => tts.setRate(parseFloat(e.target.value))}
              className="bg-slate-950 border border-slate-700 text-slate-300 text-xs rounded-lg px-2 py-1 focus:outline-none"
            >
              <option value={0.8}>0.8x</option>
              <option value={1.0}>1.0x</option>
              <option value={1.25}>1.25x</option>
              <option value={1.5}>1.5x</option>
              <option value={2.0}>2.0x</option>
            </select>

            <button
              onClick={() => (ttsState.isPaused ? tts.resume() : tts.pause())}
              className="p-1.5 rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors font-bold"
              title={ttsState.isPaused ? "Resume" : "Pause"}
            >
              {ttsState.isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>

            <button
              onClick={() => tts.stop()}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="Stop audio playback"
            >
              <Square className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Chapter Header Banner */}
      <div className={`border rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden backdrop-blur-sm ${themeClasses}`}>
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-3 mb-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20">
              {chapter.partTitle}
            </span>
            <span className="text-slate-400 font-mono">{chapter.pages}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio TTS button */}
            <button
              onClick={handleReadChapterSummary}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
                ttsState.isPlaying
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow'
                  : 'bg-slate-800 text-cyan-300 border-slate-700 hover:bg-slate-700'
              }`}
              title="Read Chapter Summary Aloud (Web Speech API)"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{ttsState.isPlaying ? 'Reading...' : 'Listen'}</span>
            </button>

            {/* Reader appearance button */}
            <button
              onClick={() => setShowSettingsModal(true)}
              className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="Customize reading theme, font & bionic mode"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Bookmark button */}
            <button
              onClick={toggleBookmark}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                bookmarked
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
              }`}
            >
              {bookmarked ? (
                <>
                  <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" /> Bookmarked
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5" /> Bookmark
                </>
              )}
            </button>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
          Chapter {chapter.number}: {chapter.title}
        </h1>

        {/* Outline chips */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
          {chapter.outline.map((topic, i) => (
            <span
              key={i}
              className="text-[11px] px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* User's Saved High-Yield Highlights in this Chapter */}
      {chapterHighlights.length > 0 && (
        <div className="bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900 border border-amber-500/30 rounded-xl p-5 space-y-3 shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-2">
              <Highlighter className="w-4 h-4 text-amber-400" />
              Saved High-Yield One-Liners in Chapter {chapter.number} ({chapterHighlights.length})
            </h3>
            {onOpenVault && (
              <button
                onClick={onOpenVault}
                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
              >
                Open Vault <ChevronRight className="w-3 h-3" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {chapterHighlights.map(h => {
              const tagCfg = HIGHLIGHT_TAG_CONFIG[h.tagColor];
              return (
                <div
                  key={h.id}
                  className="bg-slate-950/90 border border-slate-800 rounded-lg p-3 space-y-1.5 text-xs shadow-sm relative group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.2 rounded-full border ${tagCfg.bg} ${tagCfg.text} ${tagCfg.border}`}>
                      {h.category}
                    </span>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleOpenEditHighlight(h)}
                        className="p-1 text-slate-400 hover:text-cyan-300 rounded transition-colors"
                        title="Edit highlight note or tag"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          deleteHighlight(h.id);
                          refreshHighlights();
                        }}
                        className="p-1 text-slate-400 hover:text-rose-400 rounded transition-colors"
                        title="Delete highlight"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {h.prompt && (
                    <div className="font-semibold text-cyan-300 text-[11px]">
                      Q: {h.prompt}
                    </div>
                  )}

                  <p className="text-slate-200 leading-relaxed italic">
                    "{h.text}"
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Learning Objectives */}
      <section className={`border rounded-xl p-6 shadow-md ${themeClasses}`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-cyan-400" />
            Learning Objectives & Clinical Competencies
          </h2>
          <span className="text-xs text-slate-400 font-mono">
            {completedObjectives.length} / {chapter.objectives.length} Mastered
          </span>
        </div>

        <div className="space-y-2.5">
          {chapter.objectives.map((obj, idx) => {
            const isDone = completedObjectives.includes(idx);
            return (
              <label
                key={idx}
                onClick={() => toggleObjective(idx)}
                className={`flex items-start gap-3 p-3 rounded-lg border text-xs sm:text-sm cursor-pointer transition-all ${
                  isDone
                    ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200'
                    : 'bg-slate-950/60 border-slate-800/60 text-slate-300 hover:border-slate-700'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isDone}
                  onChange={() => {}}
                  className="mt-0.5 rounded border-slate-700 text-cyan-500 focus:ring-0 focus:ring-offset-0 bg-slate-800 cursor-pointer"
                />
                <span className={`leading-relaxed ${isDone ? 'line-through opacity-80' : ''}`}>
                  <TextWithGlossary
                    text={obj}
                    enabled={readerPrefs.glossaryTooltips}
                    bionicEnabled={readerPrefs.bionicReading}
                    onOpenGlossary={onOpenGlossary}
                    highlights={chapterHighlights}
                    onHighlightClick={handleOpenEditHighlight}
                  />
                </span>
              </label>
            );
          })}
        </div>
      </section>

      {/* Penguins / Golden Key Concepts */}
      {chapter.penguins.length > 0 && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Bushong "Penguin" Key Points ({chapter.penguins.length})
            </h2>
            <span className="text-[11px] text-slate-400">High-Yield Board Concepts</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {chapter.penguins.map(p => (
              <div
                key={p.id}
                className="bg-gradient-to-br from-amber-950/30 to-slate-900 border border-amber-500/30 rounded-xl p-4 shadow-sm relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <h3 className="text-xs font-bold text-amber-200 uppercase tracking-wide">{p.title}</h3>
                  </div>
                  <button
                    onClick={() => tts.toggle(p.content, p.title)}
                    className="p-1 rounded text-amber-400/80 hover:text-amber-200 hover:bg-amber-950/40"
                    title="Read Penguin key point aloud"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-xs text-slate-200 leading-relaxed pl-6">
                  <TextWithGlossary
                    text={p.content}
                    enabled={readerPrefs.glossaryTooltips}
                    bionicEnabled={readerPrefs.bionicReading}
                    onOpenGlossary={onOpenGlossary}
                    highlights={chapterHighlights}
                    onHighlightClick={handleOpenEditHighlight}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Essential Formulas */}
      {chapter.formulas.length > 0 && (
        <section className={`border rounded-xl p-6 shadow-md ${themeClasses}`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Calculator className="w-4 h-4 text-cyan-400" />
              Formulas & Mathematical Relationships
            </h2>
            <button
              onClick={onOpenCalculators}
              className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
            >
              Open Interactive Tools <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-4">
            {chapter.formulas.map(f => (
              <div
                key={f.id}
                className="bg-slate-950 border border-slate-800 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-white">{f.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    Equation
                  </span>
                </div>
                <div className="bg-slate-900 px-4 py-2.5 rounded-lg font-mono text-sm sm:text-base text-cyan-300 font-bold border border-slate-800 mb-2">
                  {f.formula}
                </div>
                <p className="text-xs text-slate-400 mb-3">{f.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-400 pt-2 border-t border-slate-900">
                  {f.variables.map((v, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="font-mono text-amber-300 font-semibold">{v.symbol}:</span>
                      <span className="text-slate-300">{v.meaning}</span>
                      {v.unit && <span className="text-slate-500">({v.unit})</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Structured Sections & Clinical Content */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <h2 className="text-base font-bold text-white">Detailed Core Concepts & Clinical Physics</h2>
          </div>
          <span className="text-xs text-slate-400">
            Tip: Highlight any text to save as a High-Yield One-Liner
          </span>
        </div>

        {chapter.sections.map(section => (
          <div
            key={section.id}
            className={`border rounded-xl p-6 space-y-4 ${themeClasses}`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
                {section.title}
              </h3>
              <button
                onClick={() => {
                  const sectionText = `${section.title}. ` + section.paragraphs.join('. ');
                  tts.toggle(sectionText, section.title);
                }}
                className="text-slate-400 hover:text-cyan-300 p-1 rounded hover:bg-slate-800 transition-colors"
                title="Read section aloud"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className={`space-y-3.5 ${sizeClasses} ${spacingClasses}`}>
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx}>
                  <TextWithGlossary
                    text={para}
                    enabled={readerPrefs.glossaryTooltips}
                    bionicEnabled={readerPrefs.bionicReading}
                    onOpenGlossary={onOpenGlossary}
                    highlights={chapterHighlights}
                    onHighlightClick={handleOpenEditHighlight}
                  />
                </p>
              ))}
            </div>

            {/* Subsections if present */}
            {section.subsections && section.subsections.map((sub, sIdx) => (
              <div key={sIdx} className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                <h4 className="text-sm font-bold text-cyan-300">{sub.subtitle}</h4>
                <div className={`space-y-2 ${sizeClasses} ${spacingClasses}`}>
                  {sub.text.map((st, i) => (
                    <p key={i}>
                      <TextWithGlossary
                        text={st}
                        enabled={readerPrefs.glossaryTooltips}
                        bionicEnabled={readerPrefs.bionicReading}
                        onOpenGlossary={onOpenGlossary}
                        highlights={chapterHighlights}
                        onHighlightClick={handleOpenEditHighlight}
                      />
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Optional Table */}
            {section.tableData && (
              <div className="mt-4 pt-4 border-t border-slate-800 overflow-x-auto">
                <span className="text-xs font-bold text-slate-200 block mb-2">
                  {section.tableData.title}
                </span>
                <table className="w-full text-left text-xs border border-slate-800 rounded-lg overflow-hidden">
                  <thead className="bg-slate-950 text-slate-300 font-semibold border-b border-slate-800">
                    <tr>
                      {section.tableData.headers.map((h, i) => (
                        <th key={i} className="px-3 py-2.5 border-r border-slate-800 last:border-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                    {section.tableData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-800/40 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-3 py-2 text-slate-300 border-r border-slate-800/60 last:border-0 font-mono text-[11px]">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Chapter Summary */}
      <section className={`border rounded-xl p-6 shadow-md ${themeClasses}`}>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Info className="w-4 h-4 text-cyan-400" />
            Chapter Takeaways & Summary
          </h2>
          <button
            onClick={handleReadChapterSummary}
            className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
          >
            <Volume2 className="w-3.5 h-3.5" /> Read Takeaways
          </button>
        </div>
        <ul className="space-y-2">
          {chapter.summary.map((pt, i) => (
            <li key={i} className={`flex items-start gap-2 ${sizeClasses} ${spacingClasses}`}>
              <span className="text-cyan-400 font-bold mt-0.5">•</span>
              <span>
                <TextWithGlossary
                  text={pt}
                  enabled={readerPrefs.glossaryTooltips}
                  bionicEnabled={readerPrefs.bionicReading}
                  onOpenGlossary={onOpenGlossary}
                  highlights={chapterHighlights}
                  onHighlightClick={handleOpenEditHighlight}
                />
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Challenge Questions */}
      {chapter.challengeQuestions.length > 0 && (
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800/80">
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                Chapter Challenge Questions & Review Problems ({chapter.challengeQuestions.length})
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">Authoritative Bushong 11th Edition end-of-chapter problems & board-exam review</p>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">ARRT Practice</span>
              <button
                onClick={toggleAllQuestions}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white border border-slate-700 font-medium transition-colors"
              >
                {allQuestionsRevealed ? 'Hide All Solutions' : 'Reveal All Solutions'}
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {chapter.challengeQuestions.map(q => {
              const isOpen = !!revealedQuestions[q.id];
              return (
                <div
                  key={q.id}
                  className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3 hover:border-slate-700 transition-colors shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-slate-800 text-cyan-400 font-mono flex-shrink-0 mt-0.5 border border-slate-700">
                        Q{q.questionNumber}
                      </span>
                      <p className="text-sm font-medium text-slate-100 leading-snug">{q.question}</p>
                    </div>
                    <button
                      onClick={() => toggleQuestion(q.id)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium flex-shrink-0 transition-colors border ${
                        isOpen
                          ? 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                          : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/20'
                      }`}
                    >
                      {isOpen ? 'Hide Solution' : 'Show Solution'}
                    </button>
                  </div>

                  {isOpen && (
                    <div className="p-4 rounded-xl bg-slate-950/70 border border-cyan-500/20 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 animate-fadeIn">
                      {q.answer && (
                        <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30">
                          <strong className="text-emerald-400 block mb-1 text-[11px] font-bold uppercase tracking-wider">High-Yield Answer:</strong>
                          <p className="text-emerald-100 font-semibold text-sm leading-relaxed">{q.answer}</p>
                        </div>
                      )}
                      {q.explanation && (
                        <div>
                          <strong className="text-cyan-400 block mb-1.5 text-xs font-bold uppercase tracking-wider">Detailed Explanation & Clinical Rationale:</strong>
                          <p className="text-slate-200 leading-relaxed">{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Prev / Next Chapter Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-800">
        <button
          disabled={chapter.number <= 1}
          onClick={() => onSelectChapter(chapter.number - 1)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-xs sm:text-sm text-slate-200 disabled:opacity-40 disabled:pointer-events-none transition-all"
        >
          <ChevronLeft className="w-4 h-4" /> Previous Chapter
        </button>

        <span className="text-xs text-slate-500 font-mono">
          Chapter {chapter.number} of {allChaptersCount}
        </span>

        <button
          disabled={chapter.number >= allChaptersCount}
          onClick={() => onSelectChapter(chapter.number + 1)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs sm:text-sm font-bold disabled:opacity-40 disabled:pointer-events-none transition-all shadow-md shadow-cyan-500/20"
        >
          Next Chapter <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};

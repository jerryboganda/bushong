import React, { useState, useEffect, useRef } from 'react';
import { HighlightColor } from '../types/features';
import { HIGHLIGHT_TAG_CONFIG, addHighlight } from '../data/highYieldVaultData';
import { Highlighter, Plus, X, Tag, Sparkles, Check } from 'lucide-react';

interface HighlightToolbarProps {
  chapterNumber: number;
  chapterTitle: string;
  onHighlightSaved?: () => void;
  isAuthenticated?: boolean;
  onRequireAuth?: (featureTitle: string) => void;
}

export const HighlightToolbar: React.FC<HighlightToolbarProps> = ({
  chapterNumber,
  chapterTitle,
  onHighlightSaved,
  isAuthenticated = true,
  onRequireAuth
}) => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [selectedText, setSelectedText] = useState<string>('');
  const [showPromptInput, setShowPromptInput] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<HighlightColor>('yellow');
  const [successNotice, setSuccessNotice] = useState<boolean>(false);

  const toolbarRef = useRef<HTMLDivElement>(null);
  const selectedTextRef = useRef<string>('');

  useEffect(() => {
    const handleSelection = (e?: Event) => {
      // If user interacted inside the toolbar, do not close or clear text
      if (e && toolbarRef.current && toolbarRef.current.contains(e.target as Node)) {
        return;
      }

      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) {
        if (!showPromptInput) {
          setPosition(null);
          setSelectedText('');
          selectedTextRef.current = '';
        }
        return;
      }

      const text = selection.toString().trim();
      if (text.length < 2) {
        if (!showPromptInput) {
          setPosition(null);
          setSelectedText('');
          selectedTextRef.current = '';
        }
        return;
      }

      // Check if selection has a bounding rect
      try {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) return;

        setSelectedText(text);
        selectedTextRef.current = text;
        const screenW = typeof window !== 'undefined' ? window.innerWidth : 360;
        const effectiveWidth = Math.min(290, Math.max(260, screenW - 24));
        const toolbarHeight = 56;
        const x = Math.max(12, Math.min(screenW - effectiveWidth - 12, rect.left + rect.width / 2 - effectiveWidth / 2));
        const rawY = rect.top >= toolbarHeight + 16 ? rect.top - toolbarHeight - 10 : rect.bottom + 10;
        const y = Math.max(10, Math.min(window.innerHeight - toolbarHeight - 10, rawY));
        setPosition({ x, y });
      } catch {
        // Selection range may be invalidated
      }
    };

    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('touchend', handleSelection);
    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('touchend', handleSelection);
    };
  }, [showPromptInput]);

  const handleSave = (color: HighlightColor) => {
    const textToSave = selectedText || selectedTextRef.current;
    if (!textToSave) return;

    if (!isAuthenticated && onRequireAuth) {
      onRequireAuth('Personal High-Yield Highlights');
      return;
    }

    addHighlight({
      chapterNumber,
      chapterTitle,
      text: textToSave,
      prompt: prompt.trim() || undefined,
      category: HIGHLIGHT_TAG_CONFIG[color].label,
      tagColor: color,
      starred: color === 'red' // auto-star high-yield exam traps
    });

    // Notify listeners immediately so highlight appears in-text without delay!
    onHighlightSaved?.();

    setSuccessNotice(true);
    setTimeout(() => {
      setSuccessNotice(false);
      setShowPromptInput(false);
      setPosition(null);
      setSelectedText('');
      selectedTextRef.current = '';
      setPrompt('');
      window.getSelection()?.removeAllRanges();
    }, 750);
  };

  if (!position || !selectedText) return null;

  return (
    <div
      ref={toolbarRef}
      onMouseDown={(e) => {
        // CRITICAL: Prevent mousedown from blurring text and collapsing window.getSelection()
        e.preventDefault();
        e.stopPropagation();
      }}
      onTouchStart={(e) => {
        e.stopPropagation();
      }}
      className="fixed z-50 transition-all duration-150 animate-fadeIn select-none max-w-[calc(100vw-24px)]"
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      <div className="bg-slate-900 text-slate-100 border border-slate-700/80 rounded-xl shadow-2xl p-2 flex flex-col gap-2 backdrop-blur-md w-auto max-w-[calc(100vw-24px)] min-w-[260px] xs:min-w-[280px]">
        {successNotice ? (
          <div className="flex items-center justify-center gap-2 py-2 text-xs text-emerald-400 font-semibold">
            <Check className="w-4 h-4" /> Saved to High-Yield Vault!
          </div>
        ) : !showPromptInput ? (
          <div className="flex items-center gap-1.5 justify-between">
            <div className="flex items-center gap-1.5">
              {(['yellow', 'red', 'green', 'purple', 'blue'] as HighlightColor[]).map(color => (
                <button
                  key={color}
                  onClick={() => handleSave(color)}
                  className={`w-7 h-7 min-w-[28px] min-h-[28px] rounded-full border transition-transform hover:scale-110 active:scale-95 ${
                    color === 'yellow'
                      ? 'bg-amber-400 border-amber-300'
                      : color === 'red'
                      ? 'bg-rose-500 border-rose-400'
                      : color === 'green'
                      ? 'bg-emerald-400 border-emerald-300'
                      : color === 'purple'
                      ? 'bg-purple-400 border-purple-300'
                      : 'bg-cyan-400 border-cyan-300'
                  }`}
                  title={`Save as ${HIGHLIGHT_TAG_CONFIG[color].label}`}
                />
              ))}
            </div>

            <div className="h-4 w-px bg-slate-700 mx-0.5" />

            <button
              onClick={() => {
                if (!isAuthenticated && onRequireAuth) {
                  onRequireAuth('Personal High-Yield Highlights');
                  return;
                }
                setShowPromptInput(true);
              }}
              className="text-[11px] font-semibold text-cyan-300 hover:text-white px-2 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center gap-1 transition-colors min-h-[32px]"
              title="Add a question prompt or note"
            >
              <Tag className="w-3 h-3" /> +Prompt
            </button>

            <button
              onClick={() => {
                setPosition(null);
                setSelectedText('');
                window.getSelection()?.removeAllRanges();
              }}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 min-w-[32px] min-h-[32px] flex items-center justify-center"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="space-y-2 p-1 text-xs">
            <div className="flex items-center justify-between text-slate-300 font-semibold">
              <span className="flex items-center gap-1 text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" /> Save High-Yield One-Liner
              </span>
              <button
                onClick={() => setShowPromptInput(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-slate-400 line-clamp-2 italic bg-slate-950 p-1.5 rounded border border-slate-800">
              "{selectedText}"
            </p>

            <input
              type="text"
              placeholder="Question prompt or recall hint (optional)..."
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              autoFocus
            />

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1.5">
                {(['yellow', 'red', 'green', 'purple', 'blue'] as HighlightColor[]).map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-5 h-5 rounded-full border transition-all ${
                      selectedColor === color ? 'ring-2 ring-white scale-110' : 'opacity-70 hover:opacity-100'
                    } ${
                      color === 'yellow'
                        ? 'bg-amber-400 border-amber-300'
                        : color === 'red'
                        ? 'bg-rose-500 border-rose-400'
                        : color === 'green'
                        ? 'bg-emerald-400 border-emerald-300'
                        : color === 'purple'
                        ? 'bg-purple-400 border-purple-300'
                        : 'bg-cyan-400 border-cyan-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => handleSave(selectedColor)}
                className="px-3 py-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded text-xs transition-colors flex items-center gap-1 shadow"
              >
                <Plus className="w-3.5 h-3.5" /> Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

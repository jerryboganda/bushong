import React, { useState, useMemo, useRef, useEffect } from 'react';
import { BUSHONG_GLOSSARY } from '../data/glossaryData';
import { GlossaryTerm } from '../types/book';
import { BookA, ExternalLink, X } from 'lucide-react';

// Create a fast map of normalized terms
const glossaryMap = new Map<string, GlossaryTerm>();
BUSHONG_GLOSSARY.forEach(item => {
  glossaryMap.set(item.term.toLowerCase(), item);
});

// Select top 300 distinctive multi-word or radiologic physics terms for efficient regex matching
const sortedKeys = Array.from(glossaryMap.keys())
  .filter(term => term.length >= 4 && !['time', 'mass', 'work', 'heat', 'rate', 'beam', 'volt', 'cell', 'unit', 'dose', 'gray', 'life'].includes(term))
  .sort((a, b) => b.length - a.length); // longest first to match compounds like "Compton scatter" before "Compton"

// Construct regex pattern
const escapedKeys = sortedKeys.slice(0, 350).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
const glossaryRegex = new RegExp(`\\b(${escapedKeys.join('|')})\\b`, 'gi');

import { HighYieldPoint } from '../types/features';
import { HIGHLIGHT_TAG_CONFIG } from '../data/highYieldVaultData';
import { findHighlightMatches } from '../utils/textHighlighting';

interface TextWithGlossaryProps {
  text: string;
  enabled: boolean;
  bionicEnabled?: boolean;
  onOpenGlossary?: (term: string) => void;
  highlights?: HighYieldPoint[];
  onHighlightClick?: (highlight: HighYieldPoint) => void;
}

// Bionic reading helper: bold the first 2-3 characters of words
export const renderBionicWord = (word: string, key: number | string) => {
  if (word.length <= 1) return <span key={key}>{word}</span>;
  const boldLen = word.length <= 3 ? 1 : word.length <= 5 ? 2 : 3;
  const boldPart = word.substring(0, boldLen);
  const restPart = word.substring(boldLen);
  return (
    <span key={key}>
      <strong className="font-extrabold text-white">{boldPart}</strong>
      {restPart}
    </span>
  );
};

export const TextWithGlossary: React.FC<TextWithGlossaryProps> = ({
  text,
  enabled,
  bionicEnabled = false,
  onOpenGlossary,
  highlights = [],
  onHighlightClick
}) => {
  const [activeTerm, setActiveTerm] = useState<{ term: GlossaryTerm; rect: DOMRect } | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!activeTerm) return;
    const handleClick = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setActiveTerm(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [activeTerm]);

  // Helper to parse glossary terms and bionic words for a chunk of plain text
  const parseGlossaryAndBionic = (plainChunk: string, chunkKey: string): React.ReactNode[] => {
    if (!enabled) {
      if (!bionicEnabled) return [plainChunk];
      const words = plainChunk.split(/(\s+)/);
      return words.map((w, idx) => {
        if (/^\s+$/.test(w)) return w;
        return renderBionicWord(w, `${chunkKey}-b-${idx}`);
      });
    }

    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    glossaryRegex.lastIndex = 0;
    let matchCount = 0;

    while ((match = glossaryRegex.exec(plainChunk)) !== null && matchCount < 10) {
      const matchIndex = match.index;
      const matchWord = match[0];

      if (matchIndex > lastIndex) {
        const between = plainChunk.substring(lastIndex, matchIndex);
        if (bionicEnabled) {
          const words = between.split(/(\s+)/);
          elements.push(...words.map((w, i) => (/^\s+$/.test(w) ? w : renderBionicWord(w, `${chunkKey}-bw-${lastIndex}-${i}`))));
        } else {
          elements.push(between);
        }
      }

      const termData = glossaryMap.get(matchWord.toLowerCase());
      if (termData) {
        elements.push(
          <span
            key={`${chunkKey}-g-${matchIndex}`}
            onClick={(e) => {
              e.stopPropagation();
              const rect = e.currentTarget.getBoundingClientRect();
              setActiveTerm({ term: termData, rect });
            }}
            className="cursor-pointer border-b border-dashed border-cyan-400 text-cyan-200 hover:text-cyan-100 hover:bg-cyan-500/10 rounded px-0.5 transition-colors font-medium"
            title={`Glossary definition: ${termData.term}`}
          >
            {matchWord}
          </span>
        );
        matchCount++;
      } else {
        elements.push(matchWord);
      }

      lastIndex = matchIndex + matchWord.length;
    }

    if (lastIndex < plainChunk.length) {
      const remaining = plainChunk.substring(lastIndex);
      if (bionicEnabled) {
        const words = remaining.split(/(\s+)/);
        elements.push(...words.map((w, i) => (/^\s+$/.test(w) ? w : renderBionicWord(w, `${chunkKey}-end-${i}`))));
      } else {
        elements.push(remaining);
      }
    }

    return elements;
  };

  const parsedContent = useMemo(() => {
    // 1. If no highlights provided or none match text, parse directly
    if (!highlights || highlights.length === 0) {
      return parseGlossaryAndBionic(text, 'root');
    }

    const nonOverlapping = findHighlightMatches(text, highlights);

    if (nonOverlapping.length === 0) {
      return parseGlossaryAndBionic(text, 'root');
    }

    // Assemble interleaved nodes
    const nodes: React.ReactNode[] = [];
    let cursor = 0;

    nonOverlapping.forEach((range, i) => {
      if (range.start > cursor) {
        const plainText = text.substring(cursor, range.start);
        nodes.push(...parseGlossaryAndBionic(plainText, `plain-${i}`));
      }

      const hlText = text.substring(range.start, range.end);
      const hlCfg = HIGHLIGHT_TAG_CONFIG[range.highlight.tagColor] || HIGHLIGHT_TAG_CONFIG.yellow;

      nodes.push(
        <span
          key={`hl-${range.start}-${range.highlight.id}-${i}`}
          onClick={(e) => {
            e.stopPropagation();
            onHighlightClick?.(range.highlight);
          }}
          className={`cursor-pointer transition-all hover:brightness-125 select-text inline rounded px-1 py-0.5 border-b-2 ${hlCfg.highlightClass}`}
          title={range.highlight.prompt ? `${range.highlight.category}: "${range.highlight.prompt}" (Click to edit or delete)` : `${range.highlight.category} (Click to edit or delete)`}
        >
          {parseGlossaryAndBionic(hlText, `hl-inner-${i}`)}
        </span>
      );

      cursor = range.end;
    });

    if (cursor < text.length) {
      const remainder = text.substring(cursor);
      nodes.push(...parseGlossaryAndBionic(remainder, 'remainder'));
    }

    return nodes;
  }, [text, enabled, bionicEnabled, highlights, onHighlightClick]);

  return (
    <>
      <span>{parsedContent}</span>

      {/* Floating Glossary Tooltip Popover */}
      {activeTerm && (
        <div
          ref={popoverRef}
          className="fixed z-50 animate-fadeIn"
          style={{
            top: `${Math.min(window.innerHeight - 200, Math.max(10, activeTerm.rect.bottom + 8))}px`,
            left: `${Math.min(window.innerWidth - 320, Math.max(10, activeTerm.rect.left - 40))}px`
          }}
        >
          <div className="bg-slate-900 text-slate-100 border border-cyan-500/40 rounded-xl p-4 shadow-2xl max-w-sm w-[300px] sm:w-[320px] space-y-2 backdrop-blur-md">
            <div className="flex items-start justify-between gap-2 border-b border-slate-800 pb-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {activeTerm.term.category}
                </span>
                <h4 className="text-sm font-bold text-white mt-1">
                  {activeTerm.term.term}
                </h4>
              </div>
              <button
                onClick={() => setActiveTerm(null)}
                className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-h-36 overflow-y-auto">
              {activeTerm.term.definition}
            </p>

            {activeTerm.term.units && (
              <div className="text-[11px] font-mono text-amber-300 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                Units: {activeTerm.term.units}
              </div>
            )}

            {onOpenGlossary && (
              <div className="pt-2 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => {
                    const t = activeTerm.term.term;
                    setActiveTerm(null);
                    onOpenGlossary(t);
                  }}
                  className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                >
                  <BookA className="w-3.5 h-3.5" /> View in Glossary <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

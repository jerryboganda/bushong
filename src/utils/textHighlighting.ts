import { HighYieldPoint } from '../types/features';

export interface HighlightMatch {
  start: number;
  end: number;
  highlight: HighYieldPoint;
}

export interface NormalizedMapping {
  normalized: string;
  normToOrig: number[];
  original: string;
}

/**
 * Normalizes quotes, dashes, and unicode whitespace while tracking
 * the original index for every normalized character.
 */
export function buildNormalizedMapping(raw: string): NormalizedMapping {
  let normalized = '';
  const normToOrig: number[] = [];
  let inWhitespace = false;

  for (let i = 0; i < raw.length; i++) {
    const char = raw[i];

    // Ignore zero-width characters and soft hyphens
    if (/[\u200B\u200C\u200D\uFEFF\u00AD]/.test(char)) {
      continue;
    }

    // Check for whitespace
    if (/[\s\u00A0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/.test(char)) {
      if (!inWhitespace) {
        normalized += ' ';
        normToOrig.push(i);
        inWhitespace = true;
      }
      continue;
    }

    inWhitespace = false;

    // Normalize quotes & prime marks
    if (/['`\u2018\u2019\u201A\u201B\u2032]/.test(char)) {
      normalized += "'";
      normToOrig.push(i);
    } else if (/["\u201C\u201D\u201E\u201F\u00AB\u00BB\u2033]/.test(char)) {
      normalized += '"';
      normToOrig.push(i);
    }
    // Normalize dashes & hyphens
    else if (/[\u2013\u2014\u2212\u2010\u2011\uFE58\uFE63\uFF0D]/.test(char)) {
      normalized += '-';
      normToOrig.push(i);
    }
    // Normalize ellipses
    else if (char === '\u2026') {
      normalized += '...';
      normToOrig.push(i);
      normToOrig.push(i);
      normToOrig.push(i);
    } else {
      normalized += char;
      normToOrig.push(i);
    }
  }

  // Sentinel for boundary mapping
  normToOrig.push(raw.length);

  return { normalized, normToOrig, original: raw };
}

/**
 * Strips leading/trailing punctuation and whitespace for fuzzy fallback matching.
 * Uses Unicode property escapes \p{L} and \p{N} so Greek letters and numbers are preserved.
 */
function stripPunctuation(str: string): string {
  return str.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '').trim();
}

/**
 * Finds all occurrences of needle in haystack, returning ranges [start, end].
 */
function findAllIndices(haystack: string, needle: string, caseSensitive: boolean = true): Array<{ start: number; end: number }> {
  const results: Array<{ start: number; end: number }> = [];
  if (!needle || needle.length < 2) return results;

  const searchHaystack = caseSensitive ? haystack : haystack.toLowerCase();
  const searchNeedle = caseSensitive ? needle : needle.toLowerCase();

  let pos = searchHaystack.indexOf(searchNeedle);
  while (pos !== -1) {
    results.push({ start: pos, end: pos + needle.length });
    pos = searchHaystack.indexOf(searchNeedle, pos + 1);
  }

  return results;
}

/**
 * Robustly matches highlights against target text, supporting:
 * - Smart quotes, dashes, non-breaking spaces
 * - Collapsed whitespace
 * - Multi-paragraph selections (chunks separated by newlines)
 * - Partial cross-boundary selections (prefix / suffix overlaps)
 * - Multiple occurrences
 * - Case-insensitive fallbacks
 */
export function findHighlightMatches(
  targetText: string,
  highlights: HighYieldPoint[]
): HighlightMatch[] {
  if (!targetText || !highlights || highlights.length === 0) return [];

  const textMap = buildNormalizedMapping(targetText);
  const rawMatches: HighlightMatch[] = [];

  for (const hl of highlights) {
    if (!hl.text || hl.text.trim().length < 2) continue;

    // 1. Check if the target text is entirely contained within a long highlight
    // (e.g. user selected multiple paragraphs, and targetText is one of them)
    const hlNormMap = buildNormalizedMapping(hl.text.trim());
    if (
      textMap.normalized.trim().length >= 3 &&
      hlNormMap.normalized.includes(textMap.normalized.trim())
    ) {
      rawMatches.push({
        start: 0,
        end: targetText.length,
        highlight: hl
      });
      continue;
    }

    // 2. Prepare candidate needles from hl.text:
    // Split on newlines to support multi-paragraph selections
    const candidateStrings: string[] = [];
    if (hl.text.includes('\n')) {
      const parts = hl.text.split(/\r?\n+/).map(p => p.trim()).filter(p => p.length >= 2);
      candidateStrings.push(...parts);
    } else {
      candidateStrings.push(hl.text.trim());
    }

    let foundForThisHl = false;

    for (const rawNeedle of candidateStrings) {
      const needleMap = buildNormalizedMapping(rawNeedle);
      const needle = needleMap.normalized.trim();
      if (needle.length < 2) continue;

      // Try exact case first
      let normOccurrences = findAllIndices(textMap.normalized, needle, true);

      // Fallback to case-insensitive if not found
      if (normOccurrences.length === 0) {
        normOccurrences = findAllIndices(textMap.normalized, needle, false);
      }

      // Fallback to punctuation-stripped needle if still not found
      if (normOccurrences.length === 0) {
        const strippedNeedle = stripPunctuation(needle);
        if (strippedNeedle.length >= 2) {
          normOccurrences = findAllIndices(textMap.normalized, strippedNeedle, false);
        }
      }

      if (normOccurrences.length > 0) {
        foundForThisHl = true;
        for (const occ of normOccurrences) {
          const origStart = textMap.normToOrig[occ.start];
          const origEnd = textMap.normToOrig[occ.end] !== undefined
            ? textMap.normToOrig[occ.end]
            : targetText.length;

          rawMatches.push({
            start: Math.max(0, origStart),
            end: Math.min(targetText.length, origEnd),
            highlight: hl
          });
        }
      }
    }

    // 3. If no match yet, check for boundary overlaps:
    // E.g. user selected text starting in this paragraph and continuing into the next,
    // or starting in the previous paragraph and ending in this one.
    if (!foundForThisHl && hlNormMap.normalized.length >= 6) {
      const hlNorm = hlNormMap.normalized;
      const textNorm = textMap.normalized;

      // Check if suffix of text matches prefix of hl (user started in this paragraph)
      const minOverlap = 4;
      let matchedOverlap = false;

      for (let len = Math.min(hlNorm.length, textNorm.length); len >= minOverlap; len--) {
        const textSuffix = textNorm.slice(-len);
        const hlPrefix = hlNorm.slice(0, len);
        if (textSuffix.toLowerCase() === hlPrefix.toLowerCase()) {
          const normStart = textNorm.length - len;
          const origStart = textMap.normToOrig[normStart];
          rawMatches.push({
            start: origStart,
            end: targetText.length,
            highlight: hl
          });
          matchedOverlap = true;
          break;
        }
      }

      // Check if prefix of text matches suffix of hl (user ended in this paragraph)
      if (!matchedOverlap) {
        for (let len = Math.min(hlNorm.length, textNorm.length); len >= minOverlap; len--) {
          const textPrefix = textNorm.slice(0, len);
          const hlSuffix = hlNorm.slice(-len);
          if (textPrefix.toLowerCase() === hlSuffix.toLowerCase()) {
            const origEnd = textMap.normToOrig[len] !== undefined ? textMap.normToOrig[len] : len;
            rawMatches.push({
              start: 0,
              end: Math.min(targetText.length, origEnd),
              highlight: hl
            });
            break;
          }
        }
      }
    }
  }

  if (rawMatches.length === 0) return [];

  // Sort matches by start position, then by length descending
  rawMatches.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));

  // Merge overlapping ranges: if an overlap occurs, prefer the earlier/longer match
  const nonOverlapping: HighlightMatch[] = [];
  let currentEnd = 0;

  for (const match of rawMatches) {
    if (match.start >= currentEnd) {
      nonOverlapping.push(match);
      currentEnd = match.end;
    } else if (match.end > currentEnd && match.start < currentEnd) {
      // Partial overlap: truncate start to currentEnd if there is remaining text
      if (match.end - currentEnd >= 3) {
        nonOverlapping.push({
          start: currentEnd,
          end: match.end,
          highlight: match.highlight
        });
        currentEnd = match.end;
      }
    }
  }

  return nonOverlapping;
}

import { Chapter, Formula, Penguin, ChallengeQuestion } from '../types/book';
import { BUSHONG_GLOSSARY, GlossaryItem } from './glossaryData';
import { CHAPTERS_PART1 } from './chaptersPart1';
import { CHAPTERS_PART2 } from './chaptersPart2';
import { CHAPTERS_PART3 } from './chaptersPart3';
import { CHAPTERS_PART4 } from './chaptersPart4';
import { CHAPTERS_PART5 } from './chaptersPart5';
import { CHAPTERS_PART6 } from './chaptersPart6';
import { CHAPTERS_PART7 } from './chaptersPart7';
import { CHAPTERS_PART8 } from './chaptersPart8';

export const ALL_CHAPTERS: Chapter[] = [
  ...CHAPTERS_PART1,
  ...CHAPTERS_PART2,
  ...CHAPTERS_PART3,
  ...CHAPTERS_PART4,
  ...CHAPTERS_PART5,
  ...CHAPTERS_PART6,
  ...CHAPTERS_PART7,
  ...CHAPTERS_PART8
];

// Aggregated lists
export const ALL_PENGUINS: Penguin[] = ALL_CHAPTERS.flatMap(ch => ch.penguins);

export const ALL_FORMULAS: Formula[] = ALL_CHAPTERS.flatMap(ch => ch.formulas);

export const ALL_QUESTIONS: ChallengeQuestion[] = ALL_CHAPTERS.flatMap(ch => ch.challengeQuestions);

// Search function across all content
export interface SearchResult {
  type: 'chapter' | 'penguin' | 'formula' | 'question' | 'section' | 'glossary';
  chapterNumber?: number;
  chapterTitle?: string;
  partTitle?: string;
  title: string;
  snippet: string;
  category?: string;
  item: Chapter | Penguin | Formula | ChallengeQuestion | GlossaryItem | { id: string; title: string; text: string };
}

export function searchBook(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchResult[] = [];

  for (const chapter of ALL_CHAPTERS) {
    // 1. Match chapter title or objectives
    if (
      chapter.title.toLowerCase().includes(q) ||
      chapter.outline.some(item => item.toLowerCase().includes(q)) ||
      chapter.objectives.some(obj => obj.toLowerCase().includes(q))
    ) {
      results.push({
        type: 'chapter',
        chapterNumber: chapter.number,
        chapterTitle: chapter.title,
        partTitle: chapter.partTitle,
        title: `Chapter ${chapter.number}: ${chapter.title}`,
        snippet: chapter.objectives[0] || chapter.outline[0],
        item: chapter
      });
    }

    // 2. Match sections
    for (const section of chapter.sections) {
      if (
        section.title.toLowerCase().includes(q) ||
        section.paragraphs.some(p => p.toLowerCase().includes(q))
      ) {
        const matchedPara = section.paragraphs.find(p => p.toLowerCase().includes(q)) || section.paragraphs[0];
        results.push({
          type: 'section',
          chapterNumber: chapter.number,
          chapterTitle: chapter.title,
          partTitle: chapter.partTitle,
          title: section.title,
          snippet: matchedPara.slice(0, 180) + '...',
          item: { id: section.id, title: section.title, text: matchedPara }
        });
      }
    }

    // 3. Match Penguins (Important Key Concepts)
    for (const penguin of chapter.penguins) {
      if (
        penguin.title.toLowerCase().includes(q) ||
        penguin.content.toLowerCase().includes(q)
      ) {
        results.push({
          type: 'penguin',
          chapterNumber: chapter.number,
          chapterTitle: chapter.title,
          partTitle: chapter.partTitle,
          title: `Penguin: ${penguin.title}`,
          snippet: penguin.content,
          item: penguin
        });
      }
    }

    // 4. Match Formulas
    for (const formula of chapter.formulas) {
      if (
        formula.name.toLowerCase().includes(q) ||
        formula.formula.toLowerCase().includes(q) ||
        formula.description.toLowerCase().includes(q) ||
        formula.variables.some(v => v.meaning.toLowerCase().includes(q) || v.symbol.toLowerCase().includes(q))
      ) {
        results.push({
          type: 'formula',
          chapterNumber: chapter.number,
          chapterTitle: chapter.title,
          partTitle: chapter.partTitle,
          title: `Formula: ${formula.name}`,
          snippet: `${formula.formula} — ${formula.description}`,
          item: formula
        });
      }
    }

    // 5. Match Challenge Questions
    for (const question of chapter.challengeQuestions) {
      if (
        question.question.toLowerCase().includes(q) ||
        (question.answer && question.answer.toLowerCase().includes(q)) ||
        (question.explanation && question.explanation.toLowerCase().includes(q))
      ) {
        results.push({
          type: 'question',
          chapterNumber: chapter.number,
          chapterTitle: chapter.title,
          partTitle: chapter.partTitle,
          title: `Challenge Question ${question.questionNumber} (Ch. ${chapter.number})`,
          snippet: question.answer ? `${question.question} — Answer: ${question.answer}` : question.question,
          item: question
        });
      }
    }
  }

  // 6. Match Glossary Terms
  for (const item of BUSHONG_GLOSSARY) {
    if (
      item.term.toLowerCase().includes(q) ||
      item.definition.toLowerCase().includes(q)
    ) {
      results.push({
        type: 'glossary',
        title: item.term,
        snippet: item.definition + (item.units ? ` [Units: ${item.units}]` : ''),
        category: item.category,
        item
      });
    }
  }

  return results.slice(0, 80); // Cap at top 80 results
}

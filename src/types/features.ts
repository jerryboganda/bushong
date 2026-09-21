import { PartId } from './book';

export type HighlightColor = 'yellow' | 'red' | 'green' | 'purple' | 'blue';

export interface HighYieldPoint {
  id: string;
  chapterNumber: number;
  chapterTitle?: string;
  partId?: PartId;
  text: string;
  prompt?: string; // Optional question stem or recall prompt
  category: string;
  tagColor: HighlightColor;
  starred?: boolean;
  createdAt: string;
  isUserCreated?: boolean;
}

export type SrsRating = 1 | 2 | 3 | 4; // 1: Again, 2: Hard, 3: Good, 4: Easy

export interface SrsCardState {
  id: string;
  itemType: 'penguin' | 'question' | 'formula';
  repetition: number;
  interval: number; // in days
  easeFactor: number;
  nextReviewDate: string; // ISO date string
  lastReviewDate?: string;
}

export interface MockExamQuestion {
  id: string;
  questionNumber: number;
  chapterNumber: number;
  partId: PartId;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  category: 'Safety' | 'Image Production' | 'Patient Care' | 'Procedures';
}

export interface MockExamAttempt {
  id: string;
  date: string;
  totalQuestions: number;
  correctAnswers: number;
  scaledScore: number; // 1 to 99, passing >= 75
  passed: boolean;
  timeSpentSeconds: number;
  categoryBreakdown: Record<string, { total: number; correct: number; percentage: number }>;
}

export interface ComparisonMatrix {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  columns: string[];
  parameters: {
    parameter: string;
    description?: string;
    values: string[];
    isKeyDifferentiator?: boolean;
  }[];
  clinicalPearls: string[];
  examTrapWarning: string;
  mnemonic?: string;
}

export type ReadingTheme = 'oled' | 'slate' | 'sepia' | 'paper';
export type ReadingFont = 'sans' | 'serif' | 'opendyslexic';
export type ReadingSize = 'sm' | 'md' | 'lg' | 'xl';
export type ReadingSpacing = 'normal' | 'relaxed' | 'loose';

export interface ReaderPreferences {
  theme: ReadingTheme;
  font: ReadingFont;
  size: ReadingSize;
  spacing: ReadingSpacing;
  bionicReading: boolean;
  glossaryTooltips: boolean;
}

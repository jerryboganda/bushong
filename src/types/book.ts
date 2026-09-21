export type PartId = 'part1' | 'part2' | 'part3' | 'part4' | 'part5' | 'part6' | 'part7' | 'part8' | 'part9';

export interface BookPart {
  id: PartId;
  partNumber: string;
  title: string;
  description: string;
  chapterRange: string;
  color: string;
  accent: string;
}

export interface PenguinBox {
  id: string;
  title: string;
  content: string;
  chapterNumber: number;
}

export type Penguin = PenguinBox;

export interface Formula {
  id: string;
  name: string;
  formula: string;
  variables: { symbol: string; meaning: string; unit?: string }[];
  description: string;
  chapterNumber: number;
  calculatorId?: string;
}

export interface ChallengeQuestion {
  id: string;
  questionNumber: number;
  chapterNumber: number;
  question: string;
  answer?: string;
  options?: string[];
  correctOptionIndex?: number;
  explanation?: string;
}

export interface SectionContent {
  id: string;
  title: string;
  paragraphs: string[];
  subsections?: {
    subtitle: string;
    text: string[];
    callout?: string;
  }[];
  tableData?: {
    title: string;
    headers: string[];
    rows: string[][];
  };
  formulas?: Formula[];
  penguins?: PenguinBox[];
}

export interface Chapter {
  number: number;
  title: string;
  partId: PartId;
  partTitle: string;
  pages: string;
  objectives: string[];
  outline: string[];
  sections: SectionContent[];
  summary: string[];
  challengeQuestions: ChallengeQuestion[];
  penguins: PenguinBox[];
  formulas: Formula[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  units?: string;
}

export interface ConversionItem {
  category: string;
  fromUnit: string;
  toUnit: string;
  multiplier: string;
  formula?: string;
  notes?: string;
}

export interface UniversalConstant {
  name: string;
  symbol: string;
  value: string;
  unit: string;
}

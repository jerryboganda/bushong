import { SrsCardState, SrsRating } from '../types/features';

const SRS_STORAGE_KEY = 'rad_srs_state_v1';

export function getAllSrsCards(): Record<string, SrsCardState> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(SRS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    console.error('Failed to load SRS cards', err);
    return {};
  }
}

export function saveAllSrsCards(cards: Record<string, SrsCardState>): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(cards));
  } catch (err) {
    console.error('Failed to save SRS cards', err);
  }
}

export function getSrsCard(id: string, itemType: 'penguin' | 'question' | 'formula'): SrsCardState {
  const cards = getAllSrsCards();
  if (cards[id]) {
    return cards[id];
  }
  const initial: SrsCardState = {
    id,
    itemType,
    repetition: 0,
    interval: 0,
    easeFactor: 2.5,
    nextReviewDate: new Date().toISOString()
  };
  return initial;
}

export function processSrsReview(
  id: string,
  itemType: 'penguin' | 'question' | 'formula',
  rating: SrsRating
): SrsCardState {
  const cards = getAllSrsCards();
  const current = cards[id] || {
    id,
    itemType,
    repetition: 0,
    interval: 0,
    easeFactor: 2.5,
    nextReviewDate: new Date().toISOString()
  };

  let { repetition, interval, easeFactor } = current;

  // Calculate new Ease Factor using SM-2
  // rating 1: Again (q=1), 2: Hard (q=2), 3: Good (q=4), 4: Easy (q=5)
  const qMap: Record<SrsRating, number> = { 1: 1, 2: 2, 3: 4, 4: 5 };
  const q = qMap[rating];

  easeFactor = easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;

  if (rating === 1) {
    // Again
    repetition = 0;
    interval = 1;
  } else if (rating === 2) {
    // Hard
    repetition = Math.max(1, repetition);
    interval = interval <= 1 ? 2 : Math.max(1, Math.round(interval * 1.2));
  } else if (rating === 3) {
    // Good
    if (repetition === 0) {
      interval = 1;
    } else if (repetition === 1) {
      interval = 4;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetition += 1;
  } else if (rating === 4) {
    // Easy
    if (repetition === 0) {
      interval = 3;
    } else if (repetition === 1) {
      interval = 7;
    } else {
      interval = Math.round(interval * easeFactor * 1.3);
    }
    repetition += 1;
  }

  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + interval);

  const updated: SrsCardState = {
    id,
    itemType,
    repetition,
    interval,
    easeFactor: parseFloat(easeFactor.toFixed(2)),
    nextReviewDate: nextDate.toISOString(),
    lastReviewDate: new Date().toISOString()
  };

  cards[id] = updated;
  saveAllSrsCards(cards);
  return updated;
}

export function isCardDue(card: SrsCardState | undefined): boolean {
  if (!card || !card.lastReviewDate) return true;
  const nextDate = new Date(card.nextReviewDate).getTime();
  const now = Date.now();
  return now >= nextDate;
}

export function getDueStats(): { dueCount: number; totalTracked: number; learnedCount: number } {
  const cards = getAllSrsCards();
  const values = Object.values(cards);
  const totalTracked = values.length;
  let dueCount = 0;
  let learnedCount = 0;

  for (const card of values) {
    if (isCardDue(card)) dueCount++;
    if (card.repetition >= 2 && card.interval >= 5) learnedCount++;
  }

  return { dueCount, totalTracked, learnedCount };
}

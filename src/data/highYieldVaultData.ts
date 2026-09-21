import { HighYieldPoint, HighlightColor } from '../types/features';

export const INITIAL_CURATED_POINTS: HighYieldPoint[] = [
  // Part I: Radiologic Physics
  {
    id: 'hyp-1',
    chapterNumber: 1,
    chapterTitle: 'Essential Concepts of Radiologic Science',
    partId: 'part1',
    text: 'Matter is anything that occupies space and has mass; energy is the ability to do work, governed by Einstein’s mass-energy equivalence E = mc².',
    prompt: 'What defines matter and energy according to the law of conservation?',
    category: 'Core Concept',
    tagColor: 'yellow',
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-2',
    chapterNumber: 1,
    chapterTitle: 'Essential Concepts of Radiologic Science',
    partId: 'part1',
    text: 'Radon gas is an alpha emitter that contributes approximately 2.0 to 2.3 mSv/yr, representing the single largest source of natural environmental radiation.',
    prompt: 'What is the largest contributor to natural background radiation in humans?',
    category: 'Radiation Protection / Dose Limits',
    tagColor: 'purple',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-3',
    chapterNumber: 1,
    chapterTitle: 'Essential Concepts of Radiologic Science',
    partId: 'part1',
    text: 'Roentgen discovered x-rays on November 8, 1895, using a Crookes tube and barium platinocyanide phosphor plate.',
    prompt: 'Identify the date, tube type, and phosphor involved in the discovery of x-rays.',
    category: 'Exam Trap / High-Yield',
    tagColor: 'red',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-4',
    chapterNumber: 2,
    chapterTitle: 'The Structure of Matter',
    partId: 'part1',
    text: 'The maximum number of electrons that can exist in any shell is given by 2n², where n is the principal quantum shell number (K=1, L=2, M=3, N=4).',
    prompt: 'State the formula for maximum electron shell capacity.',
    category: 'Formula / Law',
    tagColor: 'green',
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-5',
    chapterNumber: 2,
    chapterTitle: 'The Structure of Matter',
    partId: 'part1',
    text: 'Isotopes have identical atomic numbers (Z, same protons) but different mass numbers (A, different neutrons).',
    prompt: 'Distinguish isotopes from isobars and isotones.',
    category: 'Core Concept',
    tagColor: 'yellow',
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-6',
    chapterNumber: 3,
    chapterTitle: 'Electromagnetic Energy',
    partId: 'part1',
    text: 'Electromagnetic wave equation: c = f × λ (velocity = frequency × wavelength). Velocity of all electromagnetic radiation in vacuum is 3 × 10⁸ m/s.',
    prompt: 'What is the relationship between frequency, wavelength, and speed of light?',
    category: 'Formula / Law',
    tagColor: 'green',
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-7',
    chapterNumber: 3,
    chapterTitle: 'Electromagnetic Energy',
    partId: 'part1',
    text: 'Inverse Square Law: Radiation intensity is inversely proportional to the square of the distance from the source: I₁/I₂ = (d₂/d₁)²',
    prompt: 'How does radiation intensity change when distance is doubled or tripled?',
    category: 'Formula / Law',
    tagColor: 'green',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-8',
    chapterNumber: 4,
    chapterTitle: 'Electricity, Magnetism, and Electromagnetism',
    partId: 'part1',
    text: 'Ohm’s Law expresses the fundamental electric circuit relationship: V = I × R (Voltage = Current × Resistance).',
    prompt: 'State Ohm’s law and its corresponding units.',
    category: 'Formula / Law',
    tagColor: 'green',
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-9',
    chapterNumber: 4,
    chapterTitle: 'Electricity, Magnetism, and Electromagnetism',
    partId: 'part1',
    text: 'Transformer Law: Vs/Vp = Ns/Np and Is/Ip = Np/Ns. Step-up transformer increases voltage while decreasing current proportionally.',
    prompt: 'What happens to voltage and current across a step-up transformer?',
    category: 'Technique / Equipment',
    tagColor: 'blue',
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },

  // Part II: The X-Ray Beam
  {
    id: 'hyp-10',
    chapterNumber: 5,
    chapterTitle: 'The X-Ray Imaging System',
    partId: 'part2',
    text: 'High-frequency generators produce nearly constant potential with < 1% voltage ripple, providing maximum beam quantity and penetrability.',
    prompt: 'Compare voltage ripple between single-phase (100%), 3-phase 12-pulse (4%), and high-frequency (<1%) generators.',
    category: 'Technique / Equipment',
    tagColor: 'blue',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-11',
    chapterNumber: 6,
    chapterTitle: 'The X-Ray Tube',
    partId: 'part2',
    text: 'Line-focus principle: Angling the anode target (typically 7° to 17°) produces an effective focal spot much smaller than the actual electron bombardment area.',
    prompt: 'How does target angle affect effective focal spot size and spatial resolution?',
    category: 'Core Concept',
    tagColor: 'yellow',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-12',
    chapterNumber: 6,
    chapterTitle: 'The X-Ray Tube',
    partId: 'part2',
    text: 'Anode Heel Effect: Beam intensity is higher on the cathode side because x-rays emitted toward the anode must traverse thicker target material. Always position thicker patient anatomy toward the cathode (FAT CAT).',
    prompt: 'Which side of the x-ray tube emits greater intensity, and how should patients be positioned?',
    category: 'Exam Trap / High-Yield',
    tagColor: 'red',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-13',
    chapterNumber: 7,
    chapterTitle: 'X-Ray Production',
    partId: 'part2',
    text: 'Characteristic x-rays are produced when a projectile electron ejects an inner K-shell electron; for tungsten, K-shell characteristic x-rays require a minimum tube potential of 69.5 kVp.',
    prompt: 'What minimum kVp is required to produce characteristic x-rays in a tungsten target?',
    category: 'Exam Trap / High-Yield',
    tagColor: 'red',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-14',
    chapterNumber: 7,
    chapterTitle: 'X-Ray Production',
    partId: 'part2',
    text: 'Bremsstrahlung radiation produces a continuous spectrum where maximum photon energy equals the peak kVp, and average photon energy is approximately 1/3 to 1/2 of kVp.',
    prompt: 'What constitutes the majority of the diagnostic x-ray beam?',
    category: 'Core Concept',
    tagColor: 'yellow',
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-15',
    chapterNumber: 8,
    chapterTitle: 'X-Ray Emission',
    partId: 'part2',
    text: 'Half-Value Layer (HVL) is the thickness of absorbing material necessary to reduce x-ray beam intensity to half its original value; it is the best clinical measure of beam quality.',
    prompt: 'What is the most accurate indicator of x-ray beam quality and penetrability?',
    category: 'Core Concept',
    tagColor: 'yellow',
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-16',
    chapterNumber: 9,
    chapterTitle: 'X-Ray Interaction with Matter',
    partId: 'part2',
    text: 'Photoelectric effect probability is inversely proportional to the cube of energy (1/E³) and directly proportional to the cube of atomic number (Z³). It produces subject contrast but increases patient dose.',
    prompt: 'State the mathematical dependency of photoelectric absorption on photon energy and atomic number.',
    category: 'Formula / Law',
    tagColor: 'green',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-17',
    chapterNumber: 9,
    chapterTitle: 'X-Ray Interaction with Matter',
    partId: 'part2',
    text: 'Compton scatter probability is inversely proportional to photon energy (1/E) and independent of atomic number Z; Compton scatter is the predominant source of occupational radiation exposure.',
    prompt: 'What interaction dominates at higher diagnostic energies and creates personnel radiation dose?',
    category: 'Radiation Protection / Dose Limits',
    tagColor: 'purple',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },

  // Part III: The Radiographic Image
  {
    id: 'hyp-18',
    chapterNumber: 11,
    chapterTitle: 'Radiographic Technique',
    partId: 'part3',
    text: 'The 15% Rule: A 15% increase in kVp produces the same optical receptor exposure as doubling the mAs (or halving mAs when increasing kVp by 15% to reduce patient dose).',
    prompt: 'How does adjusting kVp by 15% alter image receptor exposure and patient dose?',
    category: 'Formula / Law',
    tagColor: 'green',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-19',
    chapterNumber: 12,
    chapterTitle: 'Scatter Radiation',
    partId: 'part3',
    text: 'Grid Conversion Factor (Bucky Factor): No grid = 1, 5:1 = 2, 6:1 = 3, 8:1 = 4, 12:1 = 5, 16:1 = 6. Formula: mAs₂ = mAs₁ × (GCF₂ / GCF₁).',
    prompt: 'List the standard Grid Conversion Factors for 5:1 through 16:1 grids.',
    category: 'Technique / Equipment',
    tagColor: 'blue',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-20',
    chapterNumber: 13,
    chapterTitle: 'Image Quality Optimization',
    partId: 'part3',
    text: 'Magnification Factor = SID / SOD. Object Size = Image Size / MF. To minimize magnification and geometric blur, maximize SID and minimize OID.',
    prompt: 'What are the two geometric rules for minimizing distortion and penumbra?',
    category: 'Core Concept',
    tagColor: 'yellow',
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },

  // Part IV: Digital Radiography
  {
    id: 'hyp-21',
    chapterNumber: 14,
    chapterTitle: 'Computers in Medical Imaging',
    partId: 'part4',
    text: 'Dynamic range is determined by bit depth (2ⁿ): 8-bit has 256 shades of gray, 12-bit has 4,096 shades, and 14-bit has 16,384 shades of gray.',
    prompt: 'How does bit depth influence digital contrast resolution?',
    category: 'Core Concept',
    tagColor: 'yellow',
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-22',
    chapterNumber: 15,
    chapterTitle: 'Computed Radiography',
    partId: 'part4',
    text: 'CR imaging plates use europium-activated barium fluorohalide (BaFX:Eu²⁺); latent image readout occurs via photostimulated luminescence stimulated by a red helium-neon or solid-state laser (633 nm), emitting blue light.',
    prompt: 'What phosphor is used in CR, and what color laser stimulates emission?',
    category: 'Technique / Equipment',
    tagColor: 'blue',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-23',
    chapterNumber: 16,
    chapterTitle: 'Digital Radiography',
    partId: 'part4',
    text: 'Direct digital conversion uses amorphous selenium (a-Se) to convert x-rays directly into charge without light dispersion, yielding higher spatial resolution than indirect conversion (CsI/a-Si).',
    prompt: 'What material performs direct x-ray conversion in flat-panel digital detectors?',
    category: 'Technique / Equipment',
    tagColor: 'blue',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-24',
    chapterNumber: 18,
    chapterTitle: 'Digital Radiographic Display & Artifacts',
    partId: 'part4',
    text: 'DQE (Detective Quantum Efficiency) measures detector sensitivity and efficiency; high DQE allows lower patient exposure while maintaining image signal-to-noise ratio (SNR).',
    prompt: 'What is DQE and why is high DQE clinically advantageous?',
    category: 'Core Concept',
    tagColor: 'yellow',
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },

  // Part VII & VIII: Radiobiology & Radiation Protection
  {
    id: 'hyp-25',
    chapterNumber: 30,
    chapterTitle: 'Fundamental Principles of Radiobiology',
    partId: 'part7',
    text: 'Law of Bergonie and Tribondeau: Stem cells and highly mitotic tissues with long dividing futures are most radiosensitive; mature, differentiated non-dividing cells (nerve, muscle) are most radioresistant.',
    prompt: 'State the Law of Bergonie and Tribondeau regarding cellular radiosensitivity.',
    category: 'Exam Trap / High-Yield',
    tagColor: 'red',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-26',
    chapterNumber: 33,
    chapterTitle: 'Deterministic Radiation Effects',
    partId: 'part7',
    text: 'Deterministic effects (tissue reactions) have a clear dose threshold and their clinical severity increases with increasing dose (e.g., skin erythema at 2 Gyt, epilation at 3 Gyt, cataracts at 0.5 Gyt).',
    prompt: 'Define deterministic radiation effects and cite their key dose-response characteristics.',
    category: 'Core Concept',
    tagColor: 'yellow',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-27',
    chapterNumber: 34,
    chapterTitle: 'Stochastic Radiation Effects',
    partId: 'part7',
    text: 'Stochastic effects (cancer and genetic mutations) follow a linear non-threshold (LNT) model; probability of occurrence increases with dose, but severity is independent of dose.',
    prompt: 'How do stochastic effects differ fundamentally from deterministic effects?',
    category: 'Exam Trap / High-Yield',
    tagColor: 'red',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-28',
    chapterNumber: 39,
    chapterTitle: 'Designing for Radiation Protection',
    partId: 'part8',
    text: 'Primary protective barriers require at least 1.6 mm (1/16 inch) lead equivalent extending 2.1 meters (7 feet) upward from the floor.',
    prompt: 'What are the thickness and height standards for primary protective barriers?',
    category: 'Radiation Protection / Dose Limits',
    tagColor: 'purple',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-29',
    chapterNumber: 40,
    chapterTitle: 'Radiation Protection Procedures',
    partId: 'part8',
    text: 'Occupational effective dose annual limit is 50 mSv/yr (5 rem/yr). Cumulative lifetime limit is 10 mSv × age in years (1 rem × age).',
    prompt: 'State the NCRP annual and cumulative occupational effective dose limits.',
    category: 'Radiation Protection / Dose Limits',
    tagColor: 'purple',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  },
  {
    id: 'hyp-30',
    chapterNumber: 40,
    chapterTitle: 'Radiation Protection Procedures',
    partId: 'part8',
    text: 'Fetal dose limit for pregnant radiation workers is 5 mSv for the entire gestational period, and no more than 0.5 mSv in any single month.',
    prompt: 'What are the total gestational and monthly dose limits for pregnant radiographers?',
    category: 'Radiation Protection / Dose Limits',
    tagColor: 'purple',
    starred: true,
    createdAt: '2026-09-01T00:00:00Z',
    isUserCreated: false
  }
];

const STORAGE_KEY = 'rad_high_yield_vault_v1';

export function getStoredHighlights(): HighYieldPoint[] {
  if (typeof window === 'undefined') return INITIAL_CURATED_POINTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_CURATED_POINTS));
      return INITIAL_CURATED_POINTS;
    }
    const parsed: HighYieldPoint[] = JSON.parse(raw);
    return parsed;
  } catch (err) {
    console.error('Failed to load highlights from localStorage', err);
    return INITIAL_CURATED_POINTS;
  }
}

export function saveStoredHighlights(points: HighYieldPoint[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(points));
    window.dispatchEvent(new CustomEvent('rad_highlights_updated', { detail: points }));
  } catch (err) {
    console.error('Failed to save highlights to localStorage', err);
  }
}

export function addHighlight(point: Omit<HighYieldPoint, 'id' | 'createdAt'>): HighYieldPoint {
  const current = getStoredHighlights();
  const newPoint: HighYieldPoint = {
    ...point,
    id: `usr-hyp-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
    createdAt: new Date().toISOString(),
    isUserCreated: true
  };
  const updated = [newPoint, ...current];
  saveStoredHighlights(updated);
  return newPoint;
}

export function deleteHighlight(id: string): void {
  const current = getStoredHighlights();
  const updated = current.filter(p => p.id !== id);
  saveStoredHighlights(updated);
}

export function toggleStarHighlight(id: string): void {
  const current = getStoredHighlights();
  const updated = current.map(p => p.id === id ? { ...p, starred: !p.starred } : p);
  saveStoredHighlights(updated);
}

export function updateHighlightNote(id: string, prompt: string, category: string, tagColor: HighlightColor): void {
  const current = getStoredHighlights();
  const updated = current.map(p => p.id === id ? { ...p, prompt, category, tagColor } : p);
  saveStoredHighlights(updated);
}

export const HIGHLIGHT_TAG_CONFIG: Record<HighlightColor, { label: string; bg: string; text: string; border: string; highlightClass: string }> = {
  yellow: {
    label: 'Core Concept',
    bg: 'bg-amber-500/20',
    text: 'text-amber-300',
    border: 'border-amber-500/40',
    highlightClass: 'bg-amber-400/30 text-amber-100 px-1 py-0.5 rounded shadow-sm border-b-2 border-amber-400'
  },
  red: {
    label: 'Exam Trap / High-Yield',
    bg: 'bg-rose-500/20',
    text: 'text-rose-300',
    border: 'border-rose-500/40',
    highlightClass: 'bg-rose-500/30 text-rose-100 px-1 py-0.5 rounded shadow-sm border-b-2 border-rose-500'
  },
  green: {
    label: 'Formula / Law',
    bg: 'bg-emerald-500/20',
    text: 'text-emerald-300',
    border: 'border-emerald-500/40',
    highlightClass: 'bg-emerald-500/30 text-emerald-100 px-1 py-0.5 rounded shadow-sm border-b-2 border-emerald-400'
  },
  purple: {
    label: 'Radiation Protection',
    bg: 'bg-purple-500/20',
    text: 'text-purple-300',
    border: 'border-purple-500/40',
    highlightClass: 'bg-purple-500/30 text-purple-100 px-1 py-0.5 rounded shadow-sm border-b-2 border-purple-400'
  },
  blue: {
    label: 'Technique / Equipment',
    bg: 'bg-cyan-500/20',
    text: 'text-cyan-300',
    border: 'border-cyan-500/40',
    highlightClass: 'bg-cyan-500/30 text-cyan-100 px-1 py-0.5 rounded shadow-sm border-b-2 border-cyan-400'
  }
};

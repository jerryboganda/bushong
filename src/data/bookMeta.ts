import { BookPart } from '../types/book';

export const BOOK_META = {
  title: 'Radiologic Science for Technologists: Physics, Biology, and Protection',
  subtitle: 'Physics, Biology, and Protection',
  edition: '11th Edition',
  year: 2017,
  author: 'Stewart Carlyle Bushong, ScD, FAAPM, FACR',
  authorTitle: 'Professor of Radiologic Science, Baylor College of Medicine, Houston, Texas',
  publisher: 'Elsevier',
  isbn: '978-0-323-35377-9',
  totalPages: 696,
  motto: '"Physics is Fun"',
  penguinTale: {
    author: 'Benjamin Ripley Archer, PhD',
    title: 'A Penguin Tale',
    story: 'In the vast and beautiful expanse of the Antarctic region, there was once a great, isolated iceberg floating in the serene sea. Because of its location and accessibility, the great iceberg became a Mecca for penguins from the entire area. As more and more penguins flocked to their new home and began to cover the slopes of the ice field, the iceberg began to sink farther and farther into the sea. Penguins kept climbing on, forcing others off the iceberg and back into the ocean. Soon the iceberg became nearly submerged owing to the sheer number of penguins that attempted to take up residence there.',
    moral: 'The PENGUIN represents an important fact or bit of information that we must learn to understand a subject. The brain, similar to the iceberg, can retain only so much information before it becomes overloaded. When this happens, concepts begin to become dislodged, like penguins from the sinking iceberg. So, the key to learning is to reserve space for true "penguins" to fill the valuable and limited confines of our brains. Thus key points in this book are highlighted and referred to as "PENGUINS."'
  },
  prefaceSummary: 'The purpose of Radiologic Science for Technologists: Physics, Biology, and Protection is threefold: to convey a working knowledge of radiologic physics; to prepare radiography students for the certification examination by the ARRT; and to provide a base of knowledge from which practicing radiographers can make informed decisions about technical factors, diagnostic image quality, and radiation management for both patients and personnel.'
};

export const BOOK_METADATA = BOOK_META;

export const BOOK_PARTS: BookPart[] = [
  {
    id: 'part1',
    partNumber: 'PART I',
    title: 'Radiologic Physics',
    description: 'Fundamental concepts of matter, energy, mechanics, the atom, electromagnetic energy, electricity, magnetism, and electromagnetism.',
    chapterRange: 'Chapters 1 – 4',
    color: 'from-blue-600 to-cyan-700',
    accent: '#0284c7'
  },
  {
    id: 'part2',
    partNumber: 'PART II',
    title: 'X-Radiation',
    description: 'The x-ray imaging system, operating console, high-voltage generators, x-ray tube anatomy and physics, x-ray production, emission spectra, and interactions with matter.',
    chapterRange: 'Chapters 5 – 9',
    color: 'from-indigo-600 to-blue-800',
    accent: '#4f46e5'
  },
  {
    id: 'part3',
    partNumber: 'PART III',
    title: 'The Radiographic Image',
    description: 'Radiographic image quality, resolution, noise, characteristic curves, scatter radiation, grids, screen-film radiography, and exposure technique formulation.',
    chapterRange: 'Chapters 10 – 13',
    color: 'from-teal-600 to-emerald-700',
    accent: '#0d9488'
  },
  {
    id: 'part4',
    partNumber: 'PART IV',
    title: 'The Digital Radiographic Image',
    description: 'Computer science in imaging, computed radiography (CR), digital radiography (DR: CCD, CsI, a-Si, a-Se), digital technique, DQE, and soft-copy viewing on LCDs and LEDs.',
    chapterRange: 'Chapters 14 – 18',
    color: 'from-sky-600 to-blue-700',
    accent: '#0284c7'
  },
  {
    id: 'part5',
    partNumber: 'PART V',
    title: 'Image Artifacts and Quality Control',
    description: 'Screen-film artifacts, screen-film QA/QC protocols, digital radiographic artifacts (image receptor, software, object), and AAPM TG 18 digital display QC standards.',
    chapterRange: 'Chapters 19 – 22',
    color: 'from-amber-600 to-orange-700',
    accent: '#d97706'
  },
  {
    id: 'part6',
    partNumber: 'PART VI',
    title: 'Advanced X-ray Imaging',
    description: 'Mammography equipment and techniques, mammography QC, fluoroscopy, digital fluoroscopy (DSA, roadmapping), interventional radiology, and multislice helical computed tomography (CT).',
    chapterRange: 'Chapters 23 – 28',
    color: 'from-violet-600 to-purple-800',
    accent: '#7c3aed'
  },
  {
    id: 'part7',
    partNumber: 'PART VII',
    title: 'Radiobiology',
    description: 'Human biology, cell theory, DNA structure, fundamental radiobiology principles (Bergonié & Tribondeau, LET, RBE, OER), target theory, deterministic effects, and stochastic effects.',
    chapterRange: 'Chapters 29 – 34',
    color: 'from-rose-600 to-red-700',
    accent: '#e11d48'
  },
  {
    id: 'part8',
    partNumber: 'PART VIII',
    title: 'Radiation Protection',
    description: 'Health physics, ALARA, barrier shielding design, radiography/fluoroscopy patient dose, CT patient dose (CTDI, DLP, SSDE), patient dose management, and occupational dose management.',
    chapterRange: 'Chapters 35 – 40',
    color: 'from-emerald-600 to-teal-800',
    accent: '#059669'
  }
];

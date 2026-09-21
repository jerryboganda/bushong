import { ComparisonMatrix } from '../types/features';

export const EXAM_TRAP_MATRICES: ComparisonMatrix[] = [
  {
    id: 'interactions-matter',
    title: 'X-Ray Interactions with Matter',
    subtitle: 'Compton Scatter vs. Photoelectric Absorption vs. Coherent Scatter',
    category: 'Physics & Image Production',
    columns: ['Parameter', 'Compton Scatter', 'Photoelectric Absorption', 'Coherent (Classical) Scatter'],
    parameters: [
      {
        parameter: 'Interacting Electron',
        values: ['Outer-shell loosely bound electron', 'Inner-shell (K or L) tightly bound electron', 'Whole atom / bound orbital electrons'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Energy Dependency',
        values: ['Inversely proportional to energy: ~ 1/E', 'Inversely proportional to energy cubed: ~ 1/E³', 'Inversely proportional to energy squared: ~ 1/E²'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Atomic Number (Z) Dependency',
        values: ['Independent of Z (same probability in bone vs soft tissue)', 'Proportional to Z cubed: ~ Z³ (huge difference bone vs soft tissue)', 'Proportional to Z squared: ~ Z²'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Mass Density Dependency',
        values: ['Directly proportional to physical mass density', 'Directly proportional to physical mass density', 'Directly proportional to physical mass density']
      },
      {
        parameter: 'Clinical Energy Range',
        values: ['Dominates above ~25 keV in soft tissue, up to 150 kVp', 'Dominates below ~25 keV in soft tissue, and high Z contrast media (Iodine, Barium)', 'Low energies (< 10 keV), < 3% of diagnostic beam']
      },
      {
        parameter: 'Emitted Products',
        values: ['Compton recoil electron + Scattered x-ray photon with longer wavelength', 'Photoelectron + Characteristic cascade x-rays (absorbed locally)', 'Scattered x-ray photon with unchanged wavelength and energy']
      },
      {
        parameter: 'Impact on Radiographic Image',
        values: ['Degrades subject contrast with unwanted optical density / radiation fog', 'Produces diagnostic subject contrast (white radiopaque bone/contrast shadows)', 'Slight forward scatter; minimal contribution to image noise']
      },
      {
        parameter: 'Dosimetric Significance',
        values: ['Primary source of OCCUPATIONAL dose during fluoroscopy & radiography', 'Primary source of PATIENT radiation dose (total photon absorption)', 'Zero ionization; negligible dose contribution']
      }
    ],
    clinicalPearls: [
      'Photoelectric absorption is why we see bone and contrast agents (high Z = massive Z³ absorption).',
      'Compton scatter is why radiographers wear lead aprons and stand behind secondary barriers.',
      'As kVp increases, total interactions decrease, but the relative fraction of Compton scatter over photoelectric increases rapidly.'
    ],
    examTrapWarning: 'ARRT Trap: Never confuse energy dependence (1/E vs 1/E³) with Z dependence. Compton scatter is completely independent of atomic number Z; only Photoelectric depends on Z³!',
    mnemonic: 'P-E = Patient Exposure & Penetration Contrast (Z³). C = Compton = Clinician / Tech scatter (Independent of Z).'
  },
  {
    id: 'deterministic-vs-stochastic',
    title: 'Biological Radiation Effects',
    subtitle: 'Deterministic (Tissue Reactions) vs. Stochastic (Probabilistic)',
    category: 'Radiation Biology & Protection',
    columns: ['Parameter', 'Deterministic (Tissue Reactions)', 'Stochastic (Probabilistic Effects)'],
    parameters: [
      {
        parameter: 'Dose Threshold',
        values: ['Definite threshold dose below which effect does NOT occur', 'NO threshold (Linear Non-Threshold LNT model; any dose carries risk)'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Dose-Response Relationship',
        values: ['Non-linear sigmoid (threshold) curve', 'Linear non-threshold (LNT) or linear-quadratic curve'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Severity vs. Dose',
        values: ['Severity increases directly with higher dose (e.g. slight erythema vs severe ulceration)', 'Severity is independent of dose (a cancer caused by 10 mSv is just as lethal as one caused by 100 mSv)'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Probability vs. Dose',
        values: ['100% probability once threshold dose is exceeded', 'Probability of occurrence increases linearly with dose'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Onset Time',
        values: ['Early (hours to weeks post-exposure; acute)', 'Late (years to decades latent period; chronic)'],
        isKeyDifferentiator: false
      },
      {
        parameter: 'Mechanism',
        values: ['Extensive cell killing and tissue depletion exceeding repair threshold', 'Non-lethal sublethal DNA mutation in a single somatic or germ cell passed to progeny']
      },
      {
        parameter: 'Classic Clinical Examples',
        values: ['Skin erythema (2 Gyt), Epilation (3 Gyt), Cataracts (0.5 Gyt), Acute Radiation Syndrome (ARS, >1 Gyt)', 'Radiation-induced leukemia (5-7 yr latency), solid tumors (breast, thyroid, lung; 10-30 yr latency), hereditary genetic defects']
      },
      {
        parameter: 'Diagnostic Radiology Concern',
        values: ['Rare in general radiography; significant risk in prolonged high-dose interventional fluoroscopy', 'Primary concern in all diagnostic imaging and basis for all ALARA protocols']
      }
    ],
    clinicalPearls: [
      'Radiation protection philosophy (ALARA and dose limits) is designed to entirely PREVENT deterministic effects and LIMIT stochastic risk to acceptable levels.',
      'Lens of the eye threshold for radiation-induced cataracts has been updated by ICRP to 0.5 Gyt (500 mGy).'
    ],
    examTrapWarning: 'ARRT Trap: The board loves asking: "If radiation dose is doubled, what happens to the severity of radiation-induced cancer?" Answer: Severity does NOT change; only the probability of cancer increases!',
    mnemonic: 'Deterministic = Dose dictates Damage (Threshold). Stochastic = Single photon can Start (No Threshold, LNT).'
  },
  {
    id: 'line-focus-vs-heel-effect',
    title: 'Anode Physics and Geometry',
    subtitle: 'Line-Focus Principle vs. Anode Heel Effect',
    category: 'X-Ray Tube Design',
    columns: ['Feature', 'Line-Focus Principle', 'Anode Heel Effect'],
    parameters: [
      {
        parameter: 'Core Physics Principle',
        values: ['Geometrical projection of beveled target angle reduces effective focal spot', 'Self-absorption of x-ray photons within the heel of the tungsten target'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Primary Objective / Cause',
        values: ['Engineered design to permit large heat dissipation area while maintaining sharp focal spot', 'Unavoidable geometric consequence of the beveled anode target angle'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Target Angle Relationship',
        values: ['Smaller target angle (e.g. 7° vs 17°) produces smaller effective focal spot and better resolution', 'Smaller target angle INCREASES the heel effect (more severe cutoff on anode side)'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Beam Intensity Distribution',
        values: ['Does not alter intensity distribution directly', 'Intensity varies up to 45% across field: ~120% at cathode edge, 100% at central ray, ~75% at anode edge'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Spatial Resolution Effect',
        values: ['Improves recorded spatial resolution by minimizing focal spot blur (penumbra)', 'Slightly higher resolution on anode side due to smaller projected focal spot, but lower intensity']
      },
      {
        parameter: 'Factors Accentuating the Phenomenon',
        values: ['Fixed at manufacturing time by anode bevel angle (7° to 20°)', 'Short SID, large field size (collimator open), and steep (small) anode angle']
      },
      {
        parameter: 'Clinical Management Rule',
        values: ['Select small focal spot (0.5–0.6 mm) for extremity/detail, large (1.0–1.2 mm) for high heat/thick parts', 'FAT CAT: Position the thicker anatomical structure under the CATHODE end (e.g., abdomen, femur, thoracic spine)']
      }
    ],
    clinicalPearls: [
      'The actual focal spot is always LARGER than the effective focal spot (effective = actual × sin θ).',
      'For AP Thoracic Spine: Place patient head at anode, lower thoracic spine (thicker) at cathode.',
      'For AP Femur: Place hip (thicker) at cathode, knee (thinner) at anode.'
    ],
    examTrapWarning: 'ARRT Trap: Remember that decreasing the target angle improves spatial resolution (Line-focus principle) BUT worsens the anode heel effect!',
    mnemonic: 'FAT CAT: FAT (thicker) patient part goes toward CAThode. Anode = Away (less intensity).'
  },
  {
    id: 'spatial-vs-contrast-resolution',
    title: 'Image Quality Metrics',
    subtitle: 'Spatial Resolution vs. Contrast Resolution',
    category: 'Digital Image Quality',
    columns: ['Metric', 'Spatial Resolution', 'Contrast Resolution'],
    parameters: [
      {
        parameter: 'Definition',
        values: ['Ability to visualize and distinguish two separate small adjacent structures', 'Ability to distinguish anatomical structures of similar subject contrast / tissue density'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Measurement Unit',
        values: ['Line pairs per millimeter (lp/mm) or Modulation Transfer Function (MTF)', 'Dynamic range, signal-to-noise ratio (SNR), contrast-to-noise ratio (CNR), bit depth'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Primary Limiting Factor (Digital)',
        values: ['Pixel size, pixel pitch, detector element (DEL) size, focal spot blur, motion', 'Bit depth (grayscale levels 2ⁿ), scatter radiation, detector dynamic range, SNR'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Modulation Transfer Function (MTF)',
        values: ['MTF curve measures fidelity of spatial frequency reproduction (1.0 = perfect transfer)', 'Contrast is represented by low spatial frequencies on the MTF curve'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Film vs. Digital Radiography',
        values: ['Screen-film had superior spatial resolution (~10–15 lp/mm vs ~3–5 lp/mm in DR)', 'Digital radiography has vast superior contrast resolution (16,384 gray levels vs 30)'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Effect of Patient Scatter',
        values: ['Scatter does not directly blur edges (that is geometry/motion)', 'Scatter drastically degrades contrast resolution by laying down uniform background fog']
      },
      {
        parameter: 'Key Technical Controls',
        values: ['Focal spot size, SID, OID, patient immobilization, detector DEL pitch', 'kVp, collimation, anti-scatter grids, exposure (mAs for quantum mottle), bit depth']
      }
    ],
    clinicalPearls: [
      'Digital imaging won the clinical battle over film NOT because of spatial resolution (film was sharper), but because of digital’s unprecedented contrast resolution and post-processing latitude.',
      'Quantum noise (mottle) caused by underexposure is the chief enemy of contrast resolution.'
    ],
    examTrapWarning: 'ARRT Trap: Higher lp/mm means BETTER spatial resolution, but smaller pixel sizes require more radiation exposure to avoid quantum noise (fill factor trade-off)!',
    mnemonic: 'Spatial = Sharpness / Size of object. Contrast = Color / shades of Gray distinguishing tissues.'
  },
  {
    id: 'fixed-vs-variable-kvp',
    title: 'Exposure Technique Systems',
    subtitle: 'Fixed kVp vs. Variable kVp Technique Charts',
    category: 'Radiographic Technique',
    columns: ['Feature', 'Fixed kVp Technique Chart', 'Variable kVp Technique Chart'],
    parameters: [
      {
        parameter: 'Core Concept',
        values: ['Optimal kVp is held constant for a given anatomical part; mAs is varied for thickness', 'mAs is held constant; kVp is increased as anatomical thickness increases'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Standard Adjustment Formula',
        values: ['For every 4 to 5 cm increase in thickness, double mAs (or multiply by 2)', 'For every 1 cm increase in thickness, add 2 kVp: kVp = (2 × thickness in cm) + base kVp'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Patient Radiation Dose',
        values: ['LOWER patient dose overall (utilizes higher optimal kVp and lower mAs)', 'HIGHER patient dose (utilizes lower average kVp and higher mAs)'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Image Contrast Uniformity',
        values: ['Consistent, uniform radiographic contrast across varying patient body habitus', 'Variable contrast (thicker patients get higher kVp, resulting in lower/longer-scale contrast)'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Exposure Latitude',
        values: ['Wide exposure latitude; less chance of quantum mottle or severe burnout', 'Narrow exposure latitude; highly sensitive to caliper measuring errors'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Modern Digital Compatibility',
        values: ['Universal gold standard in digital imaging; perfectly matches digital detector response', 'Largely obsolete in modern digital departments, though historically tested on board exams']
      }
    ],
    clinicalPearls: [
      'Always remember: High kVp / low mAs technique is the #1 technologist-controlled factor for minimizing patient radiation dose while ensuring receptor penetration.',
      'Digital processing can normalize brightness, but it cannot fix quantum mottle caused by inadequate penetration.'
    ],
    examTrapWarning: 'ARRT Trap: If asked which technique chart provides the lowest patient dose and most uniform contrast, the answer is ALWAYS Fixed kVp!',
    mnemonic: 'Fixed = Friendly to patient (lower dose), Firm contrast. Variable = Variable contrast, 2 kVp per cm.'
  },
  {
    id: 'grid-cutoff-types',
    title: 'Anti-Scatter Grid Artifacts',
    subtitle: 'Types of Grid Cutoff: Causes, Appearances & Prevention',
    category: 'Image Production & Equipment',
    columns: ['Cutoff Type', 'Primary Physical Cause', 'Radiographic Image Appearance', 'Prevention & Corrective Action'],
    parameters: [
      {
        parameter: 'Off-Level Grid',
        values: ['Tube angled across the lead strips, or grid tilted relative to central ray', 'Uniform reduction in optical density / receptor exposure across the ENTIRE radiograph', 'Ensure CR is perpendicular to grid face; do not angle crosswise against lead lines'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Off-Center Grid',
        values: ['Central ray directed off-center transversely relative to the center of a focused grid', 'Uniform reduction in optical density / receptor exposure across the ENTIRE radiograph', 'Carefully align central ray to the midline detent of the grid / bucky mechanism'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Off-Focus Grid',
        values: ['SID used is outside the specified focal range (grid radius) (e.g. 100 cm on a 180 cm grid)', 'Severe loss of density / underexposure at the PERIPHERY (edges) of the image; center is normal', 'Strictly verify that the tube SID matches the specified focal range printed on the grid'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Upside-Down Focused Grid',
        values: ['Focused grid placed facing backward (tube-side facing away from tube)', 'Severe density cutoff on BOTH SIDES of the image; only a narrow central strip is properly exposed', 'Verify "Tube Side" sticker on grid prior to exposure; common on mobile/cross-table exams'],
        isKeyDifferentiator: true
      }
    ],
    clinicalPearls: [
      'Off-level and off-center cutoff look identical: overall light image across the entire receptor.',
      'Off-focus cutoff causes bilateral peripheral cutoff (dark center, clear light edges).',
      'Upside-down focused grid is catastrophic: central ray passes between parallel central strips, but angled peripheral strips absorb almost all radiation.'
    ],
    examTrapWarning: 'ARRT Trap: The board frequently asks: "An image shows adequate exposure in the center but severe bilateral cutoff at both lateral borders. What occurred?" Answer: Upside-down focused grid or off-focus grid!',
    mnemonic: 'Level/Center = Loss across entire image. Focus/Upside-down = Peripheral / edge cutoff.'
  },
  {
    id: 'direct-vs-indirect-dr',
    title: 'Digital Detector Technology',
    subtitle: 'Direct Conversion vs. Indirect Conversion Flat-Panel Detectors',
    category: 'Digital Radiography (DR)',
    columns: ['Parameter', 'Direct Conversion FPD', 'Indirect Conversion FPD (Scintillator + Photodiode)'],
    parameters: [
      {
        parameter: 'Photoconductor / Scintillator',
        values: ['Amorphous Selenium (a-Se)', 'Cesium Iodide (CsI structured needles) or Gadolinium Oxysulfide (Gd₂O₂S turbid)'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Intermediate Light Step',
        values: ['NO light stage (X-ray directly converted into electron-hole pairs)', 'YES (X-rays converted to light by scintillator, then light converted to charge by a-Si)'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Charge Collector',
        values: ['Thin-Film Transistor (TFT) array with storage capacitors', 'Amorphous Silicon (a-Si) photodiode array + TFT array'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Spatial Resolution',
        values: ['HIGHER spatial resolution (no lateral light spread or dispersion)', 'Slightly lower spatial resolution due to light isotropic dispersion in phosphor'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Detective Quantum Efficiency (DQE)',
        values: ['Moderate to high DQE; very linear response', 'HIGHER DQE at low patient doses (especially needle-like structured CsI:Tl)'],
        isKeyDifferentiator: true
      },
      {
        parameter: 'Primary Clinical Modalities',
        values: ['Digital Mammography (requires ultra-high spatial resolution ~10–15 lp/mm)', 'General Radiography, Chest, Abdomen, Mobile DR, Fluoroscopy FPDs']
      }
    ],
    clinicalPearls: [
      'Amorphous Selenium (a-Se) = DIRECT. "Direct has no light, Se is Direct."',
      'Cesium Iodide (CsI) needle structure functions like fiber-optic light pipes to minimize light blur.',
      'Both technologies use TFTs (thin-film transistors) to read out pixel electrical charges line-by-line.'
    ],
    examTrapWarning: 'ARRT Trap: Don’t mix up a-Se with a-Si! a-Se is the photoconductor for direct conversion; a-Si is the photodiode for indirect conversion!',
    mnemonic: 'Direct = Selenium (Se). Indirect = Scintillator + Silicon (Si).'
  }
];

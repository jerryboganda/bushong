export interface PhysicsPrinciple {
  category: 'Electrostatics' | 'Electrodynamics' | 'Magnetism' | 'Electromagnetism' | 'Classical Physics';
  title: string;
  points: string[];
  formula?: string;
  units?: string;
}

export interface RadiologicUnitItem {
  quantity: string;
  customaryName: string;
  customarySymbol: string;
  siName: string;
  siSymbol: string;
  conversion: string;
}

export interface SiDerivedUnit {
  quantity: string;
  name: string;
  symbol: string;
  otherUnits: string;
  baseUnits: string;
}

export interface UniversalConstant {
  name: string;
  symbol: string;
  value: string;
  unit: string;
}

export const REVIEW_OF_BASIC_PHYSICS: PhysicsPrinciple[] = [
  {
    category: 'Electrostatics',
    title: 'Fundamental Laws of Electrostatics',
    points: [
      '1. The addition or removal of electrons is called electrification.',
      '2. Like charges repel; unlike charges attract.',
      '3. Coulomb\'s law of electrostatic force: F = c × (Q_A × Q_B) / d²',
      '4. Only negative charges (electrons) can move in solids.',
      '5. Electrostatic charge is distributed on the outer surface of conductors.',
      '6. The concentration of charge is greater when the radius of curvature is smaller (sharpest surface curvature).'
    ],
    formula: 'F = c × (Q_A × Q_B) / d²',
    units: 'Force in Newtons (N), Charge in Coulombs (C), Distance in meters (m)'
  },
  {
    category: 'Electrodynamics',
    title: 'Ohm\'s Law & Electric Circuits',
    points: [
      'Ohm\'s Law: V = I × R (Electric potential = Current × Resistance)',
      'A series circuit rules: 1. V_t = V_1 + V_2 + V_3 + V_4; 2. I is the same through all elements; 3. R_t = R_1 + R_2 + R_3 + R_4',
      'A parallel circuit rules: 1. V is the same across each circuit element; 2. I_t = I_1 + I_2 + I_3 + I_4; 3. 1/R_t = 1/R_1 + 1/R_2 + 1/R_3 + 1/R_4',
      'Electric power: P = I × V = I² × R [(A)(V) = W]',
      'Work: Work = Q × V [(C)(V) = J]',
      'Potential: V = W / Q [J/C = V]',
      'Capacitance: C = Q / V [C/V = F (Farad)]'
    ],
    formula: 'V = I × R  |  P = I × V = I²R',
    units: 'V (Volts), I (Amperes), R (Ohms Ω), P (Watts W)'
  },
  {
    category: 'Magnetism',
    title: 'Laws of Magnetism',
    points: [
      '1. Every magnet has a north pole and a south pole (dipolar).',
      '2. Like poles repel; unlike poles attract.',
      '3. Gauss\'s law of magnetic force: F = k × (M_1 × M_2) / d²',
      'Magnetic lines of force always leave the north pole and enter the south pole in closed loops.',
      'Magnetic susceptibility describes the degree to which a material can be magnetized (Diamagnetic, Paramagnetic, Ferromagnetic).'
    ],
    formula: 'F = k × (M_1 × M_2) / d²',
    units: 'Tesla (T) [1 T = 10,000 Gauss (G)]'
  },
  {
    category: 'Electromagnetism',
    title: 'Electromagnetic Induction & Transformer Law',
    points: [
      '1. A magnetic field is always present around a conductor in which a current is flowing (Oersted\'s discovery 1820).',
      '2. Changing magnetic fields produce an electric current (Faraday\'s law of induction).',
      '3. Transformer law: V_p / V_s = N_p / N_s (Voltage is directly proportional to the turns ratio).',
      'Effect of transformer law on current: I_s / I_p = N_p / N_s = V_p / V_s (Current is inversely proportional to turns ratio).'
    ],
    formula: 'V_s / V_p = N_s / N_p  |  I_s / I_p = N_p / N_s',
    units: 'Primary (p) and Secondary (s) Voltage and Current'
  },
  {
    category: 'Classical Physics',
    title: 'Mechanics & Conservation Laws',
    points: [
      'Linear force: F = m × a [(kg)(m/s²) = N]',
      'Momentum: p = m × v [(kg)(m/s)]',
      'Mechanical work (or energy): Work (or E) = F × s [(N)(m) = J]',
      'Kinetic energy: E = (1/2) × m × v² [(kg)(m²/s²) = J]',
      'Mechanical power: P = F × s / t [(N)(m)/s = J/s = W]',
      'Conservation of momentum: m_A × v_A + m_B × v_B = m_A × v_A\' + m_B × v_B\'',
      'Conservation of kinetic energy: (1/2)m_A(v_A)² + (1/2)m_B(v_B)² = (1/2)m_A(v_A\')² + (1/2)m_B(v_B\')²'
    ],
    formula: 'F = ma  |  KE = (1/2)mv²  |  Work = Fd',
    units: 'Force (N), Work/Energy (J), Power (W)'
  }
];

export const SPECIAL_RADIOLOGIC_QUANTITIES: RadiologicUnitItem[] = [
  {
    quantity: 'Exposure',
    customaryName: 'roentgen',
    customarySymbol: 'R',
    siName: 'air kerma',
    siSymbol: 'Gy_a',
    conversion: 'Multiply R by 0.01 to obtain Gy_a | Multiply R by 2.58 × 10⁻⁴ to obtain C/kg'
  },
  {
    quantity: 'Absorbed dose',
    customaryName: 'rad',
    customarySymbol: 'rad',
    siName: 'gray',
    siSymbol: 'Gy_t',
    conversion: 'Multiply rad by 0.01 to obtain Gy_t (1 Gy = 1 J/kg = 100 rad)'
  },
  {
    quantity: 'Effective dose (Dose equivalent)',
    customaryName: 'rem',
    customarySymbol: 'rem',
    siName: 'sievert',
    siSymbol: 'Sv',
    conversion: 'Multiply rem by 0.01 to obtain Sv (1 Sv = 100 rem)'
  },
  {
    quantity: 'Radioactivity',
    customaryName: 'curie',
    customarySymbol: 'Ci',
    siName: 'becquerel',
    siSymbol: 'Bq',
    conversion: 'Multiply Ci by 3.7 × 10¹⁰ to obtain Bq (1 Bq = 1 disintegration per second)'
  }
];

export const SI_PREFIXES = [
  { factor: '10¹⁸', prefix: 'Exa', symbol: 'E' },
  { factor: '10¹⁵', prefix: 'Peta', symbol: 'P' },
  { factor: '10¹²', prefix: 'Tera', symbol: 'T' },
  { factor: '10⁹', prefix: 'Giga', symbol: 'G' },
  { factor: '10⁶', prefix: 'Mega', symbol: 'M' },
  { factor: '10³', prefix: 'Kilo', symbol: 'k' },
  { factor: '10²', prefix: 'Hecto', symbol: 'h' },
  { factor: '10¹', prefix: 'Deca', symbol: 'da' },
  { factor: '10⁻¹', prefix: 'Deci', symbol: 'd' },
  { factor: '10⁻²', prefix: 'Centi', symbol: 'c' },
  { factor: '10⁻³', prefix: 'Milli', symbol: 'm' },
  { factor: '10⁻⁶', prefix: 'Micro', symbol: 'μ' },
  { factor: '10⁻⁹', prefix: 'Nano', symbol: 'n' },
  { factor: '10⁻¹²', prefix: 'Pico', symbol: 'p' },
  { factor: '10⁻¹⁵', prefix: 'Femto', symbol: 'f' },
  { factor: '10⁻¹⁸', prefix: 'Atto', symbol: 'a' }
];

export const SI_DERIVED_UNITS_SPECIAL: SiDerivedUnit[] = [
  { quantity: 'Frequency', name: 'Hertz', symbol: 'Hz', otherUnits: '—', baseUnits: '1/s' },
  { quantity: 'Force', name: 'Newton', symbol: 'N', otherUnits: '—', baseUnits: 'm·kg/s²' },
  { quantity: 'Pressure, stress', name: 'Pascal', symbol: 'Pa', otherUnits: 'N/m²', baseUnits: 'kg/(m·s²)' },
  { quantity: 'Energy, work, quantity of heat', name: 'Joule', symbol: 'J', otherUnits: 'N·m', baseUnits: 'm²·kg/s²' },
  { quantity: 'Power', name: 'Watt', symbol: 'W', otherUnits: 'J/s', baseUnits: 'm²·kg/s³' },
  { quantity: 'Electric charge', name: 'Coulomb', symbol: 'C', otherUnits: '—', baseUnits: 's·A' },
  { quantity: 'Electric potential', name: 'Volt', symbol: 'V', otherUnits: 'W/A', baseUnits: 'm²·kg/(A·s³)' },
  { quantity: 'Capacitance', name: 'Farad', symbol: 'F', otherUnits: 'C/V', baseUnits: 'A²·s⁴/(m²·kg)' },
  { quantity: 'Electric resistance', name: 'Ohm', symbol: 'Ω', otherUnits: 'V/A', baseUnits: 'kg·m²/(A²·s⁴)' },
  { quantity: 'Conductance', name: 'Siemens', symbol: 'S', otherUnits: 'A/V', baseUnits: 's³·A²/(m²·kg)' },
  { quantity: 'Magnetic flux', name: 'Weber', symbol: 'Wb', otherUnits: 'V·s', baseUnits: 'm²·kg/(s²·A)' },
  { quantity: 'Magnetic field (B)', name: 'Tesla', symbol: 'T', otherUnits: 'Wb/m²', baseUnits: 'kg/(s²·A)' },
  { quantity: 'Luminous flux', name: 'Lumen', symbol: 'lm', otherUnits: 'cd·sr', baseUnits: 'cd·sr' }
];

export const UNIVERSAL_PHYSICAL_CONSTANTS: UniversalConstant[] = [
  {
    name: "Planck's Constant (h)",
    symbol: 'h',
    value: '6.626 × 10⁻³⁴ J·s = 4.15 × 10⁻¹⁵ eV·s = 6.62 × 10⁻²⁷ erg·s',
    unit: 'J·s / eV·s / erg·s'
  },
  {
    name: 'Velocity of Light in Vacuum (c)',
    symbol: 'c',
    value: '3.00 × 10⁸ m/s = 3.00 × 10¹⁰ cm/s = 186,400 mi/s',
    unit: 'm/s / cm/s'
  },
  {
    name: 'Base of Natural Logarithms (e)',
    symbol: 'e',
    value: '2.7182818',
    unit: 'dimensionless'
  },
  {
    name: 'Pi (π)',
    symbol: 'π',
    value: '3.14159265',
    unit: 'dimensionless'
  },
  {
    name: 'Elementary Electric Charge (e⁻)',
    symbol: 'e',
    value: '1.602 × 10⁻¹⁹ C (1 C = 6.3 × 10¹⁸ electrons)',
    unit: 'Coulombs (C)'
  },
  {
    name: 'Mass of an Electron at Rest',
    symbol: 'm_e',
    value: '9.109 × 10⁻³¹ kg = 0.000549 amu (0.51 MeV)',
    unit: 'kg / amu / MeV'
  },
  {
    name: 'Mass of a Proton at Rest',
    symbol: 'm_p',
    value: '1.673 × 10⁻²⁷ kg = 1.00728 amu',
    unit: 'kg / amu'
  },
  {
    name: 'Mass of a Neutron at Rest',
    symbol: 'm_n',
    value: '1.675 × 10⁻²⁷ kg = 1.00867 amu',
    unit: 'kg / amu'
  }
];

export const CONVERSION_TABLES = {
  length: [
    { unit: '1 centimeter (cm)', meters: '10⁻² m (0.01 m)' },
    { unit: '1 micron (μm)', meters: '10⁻⁶ m (0.000001 m)' },
    { unit: '1 nanometer (nm)', meters: '10⁻⁹ m' },
    { unit: '1 angstrom (Å)', meters: '10⁻¹⁰ m' },
    { unit: '1 mile (mi)', meters: '1609 m' },
    { unit: '1 inch (in)', meters: '0.0254 m (2.54 cm)' }
  ],
  massEnergy: [
    { eV: '1.0 eV', joules: '1.60 × 10⁻¹⁹ J', kg: '1.78 × 10⁻³⁶ kg', amu: '1.07 × 10⁻⁹ amu' },
    { eV: '6.24 × 10¹⁸ eV', joules: '1.0 J', kg: '1.11 × 10⁻¹⁷ kg', amu: '6.69 × 10⁹ amu' },
    { eV: '5.61 × 10³² eV', joules: '8.99 × 10¹⁶ J', kg: '1.0 × 10⁰ kg (1 kg)', amu: '6.02 × 10²⁶ amu' },
    { eV: '9.32 × 10⁸ eV (932 MeV)', joules: '1.49 × 10⁻¹⁰ J', kg: '1.66 × 10⁻²⁷ kg', amu: '1.0 amu' }
  ],
  time: [
    { unit: '1 Year', days: '365', hours: '8.76 × 10³', minutes: '5.26 × 10⁵', seconds: '3.15 × 10⁷ s' },
    { unit: '1 Day', days: '1', hours: '24', minutes: '1.44 × 10³', seconds: '8.64 × 10⁴ s' },
    { unit: '1 Hour', days: '—', hours: '1', minutes: '60', seconds: '3.6 × 10³ s' },
    { unit: '1 Minute', days: '—', hours: '—', minutes: '1', seconds: '60 s' }
  ]
};

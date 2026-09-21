# Challenge Questions for Part 2: Chapters 5 to 9
import json

CHAPTER_5_QUESTIONS = [
  {
    "id": "q5-1",
    "questionNumber": 1,
    "chapterNumber": 5,
    "question": "Define or otherwise identify the following: (a) Semiconductor, (b) Automatic exposure control (AEC), (c) Line compensation, (d) Capacitor, (e) mA meter location, (f) Diode, (g) Voltage ripple, (h) Rectification, (i) Autotransformer, (j) High-frequency power rating.",
    "answer": "Essential components and physics of the x-ray imaging system and high-voltage generator.",
    "explanation": "(a) Semiconductor: Material (silicon, germanium) that conducts electricity under some conditions but behaves as an insulator under others; forms the basis for solid-state rectifiers. (b) Automatic exposure control (AEC): Device (usually an ionization chamber between patient and receptor) that automatically terminates x-ray exposure when the preset radiation quantity is reached. (c) Line compensation: Electronic circuit that adjusts line voltage precisely to 220 V to counteract incoming utility fluctuations. (d) Capacitor: Electrical component that stores electrical charge and energy; used in mobile discharge units. (e) mA meter location: Positioned in the electrical center of the high-voltage step-up transformer secondary winding (at zero potential/ground) for operator safety. (f) Diode: Two-terminal electronic component that allows current to flow in one direction only. (g) Voltage ripple: The variation in peak voltage across the x-ray tube during exposure (100% single-phase, 14% 3-phase 6-pulse, 4% 3-phase 12-pulse, <1% high frequency). (h) Rectification: The conversion of alternating current (AC) to direct current (DC) using solid-state diodes. (i) Autotransformer: Single-coil transformer operating on self-induction that supplies precise variable input voltage to the high-voltage and filament transformers. (j) Power rating (kW): Maximum tube power: single-phase kW = (0.7 × mA × kVp)/1000; high-frequency kW = (mA × kVp)/1000."
  },
  {
    "id": "q5-2",
    "questionNumber": 2,
    "chapterNumber": 5,
    "question": "220 V is supplied across 1200 windings of the primary coil of the autotransformer. If 1650 windings are tapped, what voltage will be supplied to the primary coil of the high-voltage transformer?",
    "answer": "302.5 V.",
    "explanation": "Using the autotransformer law: Vs / Vp = Ns / Np. Here, Vp = 220 V, Np = 1200 turns, and secondary tapped turns Ns = 1650. Secondary voltage Vs = Vp × (Ns / Np) = 220 V × (1650 / 1200) = 220 × 1.375 = 302.5 Volts."
  },
  {
    "id": "q5-3",
    "questionNumber": 3,
    "chapterNumber": 5,
    "question": "A kVp meter reads 86 kVp, and the turns ratio of the high-voltage step-up transformer is 1200. What is the true voltage across the prereading meter?",
    "answer": "71.67 V.",
    "explanation": "The prereading kVp meter is situated on the low-voltage autotransformer output (primary of the step-up transformer) but is calibrated to display the resulting secondary peak kilovoltage. True voltage Vp = Vs / (Ns/Np) = 86,000 V / 1200 = 71.67 Volts."
  },
  {
    "id": "q5-4",
    "questionNumber": 4,
    "chapterNumber": 5,
    "question": "The supply voltage from the autotransformer to the filament transformer is 60 V. If the turns ratio of the filament transformer is 1/4 (step-down 0.25), what is the filament voltage?",
    "answer": "15 V.",
    "explanation": "The filament transformer is a step-down transformer (turns ratio < 1). Secondary voltage Vs = Vp × (Ns / Np) = 60 V × (1 / 4) = 15 Volts."
  },
  {
    "id": "q5-5",
    "questionNumber": 5,
    "chapterNumber": 5,
    "question": "If the current in the primary of the filament transformer in question 4 were 0.5 A, what would be the filament current?",
    "answer": "2.0 A.",
    "explanation": "Because power is conserved across transformers: Ip / Is = Ns / Np. Therefore, Is = Ip × (Np / Ns) = 0.5 A × (4 / 1) = 2.0 Amperes. Stepping down voltage increases current proportionally."
  },
  {
    "id": "q5-6",
    "questionNumber": 6,
    "chapterNumber": 5,
    "question": "The supply to a high-voltage step-up transformer with a turns ratio of 550 is 190 V. What is the voltage across the x-ray tube?",
    "answer": "104.5 kVp (104,500 V).",
    "explanation": "Vs = Vp × (Ns / Np) = 190 V × 550 = 104,500 V = 104.5 kVp."
  },
  {
    "id": "q5-7",
    "questionNumber": 7,
    "chapterNumber": 5,
    "question": "Describe the functional components of the modern radiographic operating console.",
    "answer": "Line compensation meter/switch, kVp selection controls, mA and exposure time (or mAs) selectors, AEC sensor selectors, and exposure switch.",
    "explanation": "The operating console provides controls for electrical line voltage compensation, major and minor kVp adjustments (autotransformer taps), filament current selection (mA station and focal spot size), timer selection (or mAs), automatic exposure control (AEC phototimer sensor selection and density trim), and the two-stage deadman exposure switch."
  },
  {
    "id": "q5-8",
    "questionNumber": 8,
    "chapterNumber": 5,
    "question": "The radiographic table must be radiolucent. Define radiolucent and describe carbon fiber table construction.",
    "answer": "Radiolucent means easily penetrated by x-rays with minimal absorption. Carbon fiber tables absorb very few photons, maintaining beam quality and reducing patient dose.",
    "explanation": "Patient couches are constructed from carbon fiber composite layers. Carbon fiber is exceptionally strong, supporting heavy patients without sagging, yet consists of low-Z elements that exhibit low photoelectric absorption. This minimizes beam attenuation and prevents scatter artifacts."
  },
  {
    "id": "q5-9",
    "questionNumber": 9,
    "chapterNumber": 5,
    "question": "Describe the movements of a modern radiographic/fluoroscopic patient couch.",
    "answer": "Floating tabletop movement (longitudinal and transverse), vertical elevation/lowering, and tilt (90° vertical to 15-30° Trendelenburg).",
    "explanation": "Modern tables feature four-way floating motorized tabletops that unlock electromagnetically for rapid patient positioning, variable motorized height adjustments to assist patient transfer, and motorized tilting capabilities from vertical (90°) for upright GI fluoroscopy down to Trendelenburg (-15° to -30°) for myelography and vascular studies."
  },
  {
    "id": "q5-10",
    "questionNumber": 10,
    "chapterNumber": 5,
    "question": "List the five major controls on the operator's console.",
    "answer": "kVp selector, mA selector, exposure time selector, AEC sensor/density control, and line power switch.",
    "explanation": "These controls govern the qualitative (kVp) and quantitative (mA and time) parameters of the x-ray beam, calibrate incoming electrical voltage, and dictate automatic exposure termination thresholds."
  },
  {
    "id": "q5-11",
    "questionNumber": 11,
    "chapterNumber": 5,
    "question": "What is the primary purpose of the autotransformer in the x-ray imaging system?",
    "answer": "To vary and supply precise input voltages to the high-voltage step-up and filament transformers.",
    "explanation": "Incoming municipal electrical lines fluctuate and operate at fixed voltages (220 V or 480 V). The autotransformer allows the radiographer to adjust voltage in fine increments (minor kVp) and coarse increments (major kVp) before stepping up to kilovolts."
  },
  {
    "id": "q5-12",
    "questionNumber": 12,
    "chapterNumber": 5,
    "question": "How does primary voltage relate to secondary voltage in an autotransformer?",
    "answer": "Directly proportional to the ratio of tapped secondary turns to primary turns: Vs / Vp = Ns / Np.",
    "explanation": "Because the same magnetic flux cuts every turn of the single autotransformer winding, the voltage per turn is identical. Tapping more windings yields a higher secondary voltage; tapping fewer windings yields a lower secondary voltage."
  },
  {
    "id": "q5-13",
    "questionNumber": 13,
    "chapterNumber": 5,
    "question": "What does the prereading kVp meter allow the radiographer to do?",
    "answer": "Read the exact kilovoltage that will be applied across the x-ray tube prior to making the exposure.",
    "explanation": "Connected across the autotransformer output terminals before the step-up transformer, the prereading meter monitors primary voltage but is calibrated in secondary kilovolts. This enables the technologist to confirm the selected kVp before initiating exposure, without requiring actual current flow through the tube."
  },
  {
    "id": "q5-14",
    "questionNumber": 14,
    "chapterNumber": 5,
    "question": "Operating console controls are set at 200 mA with an exposure time of 1/20 s. What is the milliampere-seconds (mAs)?",
    "answer": "10 mAs.",
    "explanation": "mAs = mA × time in seconds = 200 mA × (1 / 20 s) = 200 × 0.05 s = 10 mAs."
  },
  {
    "id": "q5-15",
    "questionNumber": 15,
    "chapterNumber": 5,
    "question": "In an examination of a pediatric patient the operating console controls are set at 600 mA / 30 ms. What is the mAs?",
    "answer": "18 mAs.",
    "explanation": "First convert milliseconds to seconds: 30 ms = 0.030 s. Then: mAs = 600 mA × 0.030 s = 18 mAs. Short exposure times minimize motion artifacts in pediatric radiography."
  },
  {
    "id": "q5-16",
    "questionNumber": 16,
    "chapterNumber": 5,
    "question": "What is the difference between a high-voltage generator and a high-voltage transformer?",
    "answer": "The generator includes the transformer plus the rectifiers, filament circuit, and oil tank housing.",
    "explanation": "The high-voltage transformer is purely the electromagnetic mutual induction device that steps up voltage. The high-voltage generator is the complete assembly consisting of the high-voltage step-up transformer, the filament step-down transformer, solid-state rectification diodes, and insulating dielectric oil inside a sealed metal tank."
  },
  {
    "id": "q5-17",
    "questionNumber": 17,
    "chapterNumber": 5,
    "question": "Why does the x-ray circuit require rectification?",
    "answer": "Because x-ray tubes require direct current (electrons must flow exclusively from cathode to anode).",
    "explanation": "Alternating current (AC) reverses direction 60 times per second (60 Hz). If the inverse half-cycle reached the x-ray tube, electrons would be pulled from the red-hot anode target toward the filament, instantly vaporizing the filament and destroying the x-ray tube. Rectification ensures unidirectional current flow."
  },
  {
    "id": "q5-18",
    "questionNumber": 18,
    "chapterNumber": 5,
    "question": "Match the power source with its voltage ripple: (a) Single-phase, (b) Three-phase 6-pulse, (c) Three-phase 12-pulse, (d) High-frequency.",
    "answer": "(a) Single-phase: 100%; (b) Three-phase 6-pulse: 14%; (c) Three-phase 12-pulse: 4%; (d) High-frequency: <1%.",
    "explanation": "Voltage ripple is the percentage difference between peak voltage and minimum valley voltage. Single-phase drops to zero each half-cycle (100% ripple). Three-phase 6-pulse stays above 86% (14% ripple). Three-phase 12-pulse stays above 96% (4% ripple). High-frequency generators maintain virtually constant potential (<1% ripple), maximizing x-ray quantity and effective energy."
  },
  {
    "id": "q5-19",
    "questionNumber": 19,
    "chapterNumber": 5,
    "question": "What is the only type of high-voltage generator that can be positioned directly on or inside the x-ray tube housing?",
    "answer": "High-frequency generator.",
    "explanation": "High-frequency generators operate at 500 to 50,000 Hz, allowing transformer cores to be minified to a fraction of the size and weight of massive 60-Hz transformers. Compact high-frequency generator tanks can be mounted directly on the tube crane or inside mobile systems."
  },
  {
    "id": "q5-20",
    "questionNumber": 20,
    "chapterNumber": 5,
    "question": "State the equations for computing single-phase and high-frequency electric power ratings.",
    "answer": "Single-phase: Power (kW) = (0.7 × mA × kVp) / 1000; High-frequency / Three-phase: Power (kW) = (mA × kVp) / 1000.",
    "explanation": "Power rating reflects the maximum tube capacity at 100 kVp and 100 ms. Single-phase power suffers from 100% voltage ripple, reducing effective power by a factor of 0.7. High-frequency and three-phase generators supply nearly constant potential, yielding full nominal wattage: Power = V × I."
  }
]

CHAPTER_6_QUESTIONS = [
  {
    "id": "q6-1",
    "questionNumber": 1,
    "chapterNumber": 6,
    "question": "Define or otherwise identify the following: (a) Housing cooling chart, (b) Leakage radiation, (c) Heat unit (HU), (d) Focusing cup, (e) Anode rotation speed, (f) Thoriated tungsten, (g) X-ray tube current, (h) Grid-controlled x-ray tube, (i) Space charge effect, (j) Actual vs effective focal spot.",
    "answer": "Key engineering and physical features of the x-ray tube.",
    "explanation": "(a) Housing cooling chart: Graphic displaying heat storage capacity of the protective tube housing and time required to cool. (b) Leakage radiation: X-rays escaping through the protective lead housing other than through the port; must not exceed 1 mGya/hr at 1 meter. (c) Heat unit (HU): Thermal energy measurement: HU = kVp × mA × s × generator factor. (d) Focusing cup: Negatively charged nickel shroud focusing the electron cloud toward the anode target. (e) Anode rotation speed: 3,400 rpm for standard tubes; 10,000 rpm for high-capacity tubes. (f) Thoriated tungsten: Tungsten filament alloyed with 1-2% thorium to enhance thermionic emission and prolong tube life. (g) X-ray tube current: Number of electrons crossing from cathode to anode per second, measured in mA. (h) Grid-controlled tube: X-ray tube with a third electrode (the focusing cup acting as a grid) to switch exposure on/off in microsecond intervals. (i) Space charge effect: Cloud of electrons surrounding the filament whose mutual electrostatic repulsion limits further thermionic emission. (j) Actual vs effective focal spot: Actual is the physical area on the anode struck by electrons; effective is the projected area directed toward the patient (line-focus principle)."
  },
  {
    "id": "q6-2",
    "questionNumber": 2,
    "chapterNumber": 6,
    "question": "Describe the line-focus principle and explain its primary advantage.",
    "answer": "Angling the anode target projects an effective focal spot much smaller than the actual electron bombardment area, improving spatial resolution while maintaining heat dissipation.",
    "explanation": "By bevelling the anode target at an angle between 7° and 20° (typically 12°), the electron impact track (actual focal spot) can be made large to withstand high thermal loads, while the projected beam perpendicular to the tube axis (effective focal spot) appears small (e.g. 0.6 mm or 1.2 mm), providing high geometric image sharpness."
  },
  {
    "id": "q6-3",
    "questionNumber": 3,
    "chapterNumber": 6,
    "question": "Explain the anode heel effect and describe how it influences clinical positioning.",
    "answer": "Radiation intensity is greater on the cathode side than on the anode side because photons emitted toward the anode must traverse thicker target material; position thicker anatomy under the cathode.",
    "explanation": "Because x-rays originate at varying depths within the tungsten target, photons directed toward the anode side must penetrate more tungsten before exiting, undergoing greater self-absorption. X-ray intensity on the cathode side can be up to 120% of central ray intensity, whereas on the anode side it drops to 75%. Radiographers position thicker body parts (e.g., abdomen, femur, thoracic spine) toward the cathode side to achieve uniform receptor exposure."
  },
  {
    "id": "q6-4",
    "questionNumber": 4,
    "chapterNumber": 6,
    "question": "How many heat units are generated by an exposure of 70 kVp, 200 mA, and 0.5 s on a three-phase 12-pulse generator?",
    "answer": "9,870 Heat Units (HU).",
    "explanation": "HU = kVp × mA × s × generator factor. Generator factors: Single-phase = 1.0; 3-phase 6-pulse = 1.35; 3-phase 12-pulse = 1.41; High-frequency = 1.45. For 3-phase 12-pulse: HU = 70 × 200 × 0.5 × 1.41 = 7,000 × 1.41 = 9,870 HU. (In Joules: 1 HU = 0.7 Joules for single phase, or 7,000 Joules electrical energy)."
  },
  {
    "id": "q6-5",
    "questionNumber": 5,
    "chapterNumber": 6,
    "question": "Why is tungsten the material of choice for x-ray tube targets?",
    "answer": "High atomic number (Z=74), high melting point (3422°C), and high thermal conductivity.",
    "explanation": "Tungsten's high Z (74) yields high x-ray production efficiency and energetic characteristic x-rays (69.5 keV). Its exceptional melting point (3422°C) withstands the extreme thermal shock of electron bombardment without melting or vaporizing, and its thermal conductivity dissipates heat rapidly into the copper anode shaft."
  },
  {
    "id": "q6-6",
    "questionNumber": 6,
    "chapterNumber": 6,
    "question": "What is thermionic emission and at what filament temperature does it occur?",
    "answer": "The boiling off of electrons from a heated metal filament; begins at approximately 2,200°C.",
    "explanation": "When filament current reaches 3 to 6 Amperes, resistive heating raises the tungsten filament wire to incandescence (~2200°C). Outer-shell electrons absorb sufficient thermal energy to overcome the metal's surface work function, creating a space-charge cloud of free electrons."
  },
  {
    "id": "q6-7",
    "questionNumber": 7,
    "chapterNumber": 6,
    "question": "What is the function of the protective housing surrounding the x-ray tube?",
    "answer": "Prevents electrical shock, attenuates leakage radiation, provides mechanical support, and aids thermal cooling via dielectric oil.",
    "explanation": "The heavy lead-lined steel housing shields high-voltage cables from patient/operator contact, limits leakage radiation to <1 mGya/hr at 1 m, contains dielectric oil for electrical insulation and heat conduction, and accommodates cooling fans or heat exchangers."
  },
  {
    "id": "q6-8",
    "questionNumber": 8,
    "chapterNumber": 6,
    "question": "Describe the three modes of heat dissipation in an x-ray tube.",
    "answer": "Radiation (infrared), conduction, and convection.",
    "explanation": "The red-hot anode target cools predominantly by thermal radiation (emitting infrared rays across the vacuum to the Pyrex glass envelope). Conduction transfers heat along the copper rotor shaft to the bearings. Convection circulates the heated dielectric oil around the housing cooling fins."
  },
  {
    "id": "q6-9",
    "questionNumber": 9,
    "chapterNumber": 6,
    "question": "What is the primary cause of premature x-ray tube failure?",
    "answer": "Thermal stress from excessive heat loading and tungsten vaporization coating the glass envelope.",
    "explanation": "Excess heat causes focal track pitting, cracking, and rotor bearing friction. Repeated high exposures vaporize filament and target tungsten, coating the inner glass envelope; this conductive metal mirror attracts electrons, causing electrical arcing and tube puncture."
  },
  {
    "id": "q6-10",
    "questionNumber": 10,
    "chapterNumber": 6,
    "question": "How does dual-focus tube design operate, and when is each focal spot utilized?",
    "answer": "Two filaments of different lengths embedded in the focusing cup: small focal spot (0.5-0.6 mm) for high resolution at low mA; large focal spot (1.0-1.2 mm) for high technique and thick anatomy.",
    "explanation": "Small focal spots minimize geometric blur (penumbra) for extremities and cervical spines where fine trabecular detail is needed, but are limited to lower mA (usually <= 300 mA) to prevent melting. Large focal spots spread electron impact over a larger area for heavy abdominal or pelvic exposures requiring high mA (400-1000 mA)."
  },
  {
    "id": "q6-11",
    "questionNumber": 11,
    "chapterNumber": 6,
    "question": "Explain the operation of the induction motor that rotates the anode.",
    "answer": "Electromagnetic stator coils outside the glass envelope produce a rotating magnetic field that induces electrical currents and rotation in the copper rotor inside the vacuum.",
    "explanation": "Because the anode rotates inside a high-vacuum glass envelope, physical drive shafts cannot enter the tube. Stator electromagnets outside the vacuum are energized sequentially in multiphase AC, creating a rotating magnetic field. By Lenz's law, this induces magnetic currents in the internal copper rotor, spinning the anode at 3,400 to 10,000 rpm."
  },
  {
    "id": "q6-12",
    "questionNumber": 12,
    "chapterNumber": 6,
    "question": "What is the regulatory limit on x-ray tube housing leakage radiation?",
    "answer": "Less than 1 mGya/hr (100 mR/hr) at a distance of 1 meter from the housing operating at maximum capacity.",
    "explanation": "FDA and NCRP standards mandate that lead shielding inside the protective tube housing attenuate all stray radiation escaping through the housing walls to < 1 mGya/hr at 1 meter when operated at maximum continuous tube voltage and current."
  },
  {
    "id": "q6-13",
    "questionNumber": 13,
    "chapterNumber": 6,
    "question": "How does target angle affect the effective focal spot size and the anode heel effect?",
    "answer": "Smaller target angles decrease the effective focal spot size (improving sharpness) but increase the severity of the anode heel effect.",
    "explanation": "Steeper angles (e.g. 7°-10°) project a very fine effective focal spot for improved resolution. However, the steeper slope forces photons emitted toward the anode side to traverse more target metal, intensifying the heel effect cut-off."
  },
  {
    "id": "q6-14",
    "questionNumber": 14,
    "chapterNumber": 6,
    "question": "Why is molybdenum or graphite layered beneath the tungsten target in modern rotating anodes?",
    "answer": "To reduce rotational weight and provide higher heat storage capacity without thermal distortion.",
    "explanation": "Molybdenum and graphite have lower mass densities than tungsten, significantly reducing rotor inertia and bearing strain. Furthermore, graphite has more than double the thermal heat capacity of tungsten, storing enormous amounts of heat dissipated from the thin tungsten surface."
  },
  {
    "id": "q6-15",
    "questionNumber": 15,
    "chapterNumber": 6,
    "question": "What is the saturation current of an x-ray tube?",
    "answer": "The maximum filament current where all emitted thermionic electrons are drawn to the anode; further increases in kVp yield no additional tube current.",
    "explanation": "At saturation current, the positive anode potential is high enough to attract 100% of electrons as fast as they boil off from the filament. Above this point, the tube is emission-limited: tube current can only be raised by increasing filament temperature (mA station)."
  },
  {
    "id": "q6-16",
    "questionNumber": 16,
    "chapterNumber": 6,
    "question": "Describe the proper tube warm-up procedure and explain why it is essential.",
    "answer": "Three sequential exposures at 1-2 second intervals using low mA, long exposure time, and moderate kVp (e.g. 70 kVp, 200 mA, 1 s); prevents thermal shock cracking of the cold anode.",
    "explanation": "Delivering a heavy exposure to a cold tungsten anode can instantly crack or shatter the disc due to rapid, uneven thermal expansion. Warm-up exposures gradually expand the anode track and pre-heat the target evenly."
  },
  {
    "id": "q6-17",
    "questionNumber": 17,
    "chapterNumber": 6,
    "question": "What is off-focus (extrafocal) radiation and why is it undesirable?",
    "answer": "X-rays produced by stray electrons that strike non-target areas of the anode; increases patient dose and reduces image contrast.",
    "explanation": "Some electrons bounce off the focal spot and are pulled back to strike other areas of the anode disc or tube housing, producing extrafocal x-rays. These photons are collimated poorly, create ghost shadows outside the collimator borders, and degrade radiographic contrast."
  },
  {
    "id": "q6-18",
    "questionNumber": 18,
    "chapterNumber": 6,
    "question": "What is the function of the vacuum maintained inside the glass or metal envelope?",
    "answer": "Eliminates air molecules so projectile electrons can travel unobstructed from cathode to anode without collisions or filament oxidation.",
    "explanation": "If gas molecules were present, projectile electrons would collide with air atoms, losing kinetic energy, scattering off course, and ionizing the gas. Air would also burn and oxidize the incandescent tungsten filament instantly, destroying the tube."
  },
  {
    "id": "q6-19",
    "questionNumber": 19,
    "chapterNumber": 6,
    "question": "What happens when an x-ray tube is operating in the space-charge limited region?",
    "answer": "At low kVp, the negative electrostatic repulsion of the electron cloud prevents all electrons from crossing to the anode; tube current is constrained by kVp.",
    "explanation": "Below saturation voltage, the electrostatic barrier formed by the electron cloud repels newly emitted electrons back into the filament. In this space-charge limited region, an increase in kVp accelerates more electrons, increasing mA even if filament heat is unchanged."
  },
  {
    "id": "q6-20",
    "questionNumber": 20,
    "chapterNumber": 6,
    "question": "What is a detent position in radiographic equipment?",
    "answer": "A mechanical or electromagnetic lock that centers the x-ray tube precisely with the image receptor at a standardized distance (e.g., 40 in or 72 in SID).",
    "explanation": "Detents ensure perfect optical alignment between the x-ray beam central ray, the collimator field, the anti-scatter grid, and the image receptor tray, preventing off-center grid cut-off and geometric magnification errors."
  }
]

CHAPTER_7_QUESTIONS = [
  {
    "id": "q7-1",
    "questionNumber": 1,
    "chapterNumber": 7,
    "question": "Define or otherwise identify the following: (a) Projectile electron, (b) Binding energy, (c) Characteristic x-rays, (d) Bremsstrahlung x-rays, (e) X-ray quantity, (f) X-ray quality, (g) Effective energy, (h) Added filtration, (i) Emission spectrum, (j) Molybdenum target.",
    "answer": "Core physics terms of x-ray production and emission.",
    "explanation": "(a) Projectile electron: High-speed electron accelerated from the cathode filament across the vacuum to bombard the anode target. (b) Binding energy: Electrostatic attraction energy binding orbital electrons to the nucleus. (c) Characteristic x-rays: Discrete x-rays emitted when an outer-shell electron fills an inner-shell vacancy created by electron impact. (d) Bremsstrahlung x-rays: Continuous spectrum x-rays produced when projectile electrons decelerate around the nuclear electrostatic field. (e) X-ray quantity: Total number of x-ray photons in the beam (intensity/exposure, mGya). (f) X-ray quality: Penetrability of the x-ray beam (measured by HVL). (g) Effective energy: The monoenergetic equivalent energy representing the penetrating capability of a polyenergetic beam. (h) Added filtration: Sheets of metal (aluminum/copper) inserted into the beam beyond inherent tube filtration. (i) Emission spectrum: Graph plotting x-ray quantity against photon energy. (j) Molybdenum target: Target material (Z=42) yielding characteristic K x-rays at 17.5 and 19.6 keV, ideal for mammography."
  },
  {
    "id": "q7-2",
    "questionNumber": 2,
    "chapterNumber": 7,
    "question": "Calculate the energy and wavelength of the characteristic x-ray produced when a K-shell electron is replaced by an M-shell electron in tungsten (K binding = 69.5 keV, M binding = 2.8 keV).",
    "answer": "Energy = 66.7 keV; Wavelength = 0.0186 nm.",
    "explanation": "Characteristic x-ray energy equals the difference in binding energies: E = E_K - E_M = 69.5 keV - 2.8 keV = 66.7 keV (K-beta photon). Wavelength λ = 1.24 / E (in keV) = 1.24 / 66.7 = 0.01859 nm."
  },
  {
    "id": "q7-3",
    "questionNumber": 3,
    "chapterNumber": 7,
    "question": "At what fraction of the velocity of light do 90-keV projectile electrons travel?",
    "answer": "Approximately 53% of the speed of light (0.53 c).",
    "explanation": "Using relativistic kinetic energy KE = mc²(γ - 1): at 90 keV, electron velocity reaches approximately 1.6 × 10⁸ m/s, which is 53% of the speed of light in vacuum."
  },
  {
    "id": "q7-4",
    "questionNumber": 4,
    "chapterNumber": 7,
    "question": "What does the discrete x-ray emission spectrum represent?",
    "answer": "Characteristic x-ray photons emitted at precise, fixed energy levels unique to target electron shell transitions.",
    "explanation": "Because electron orbital binding energies are fixed, transition photons have exact discrete energies (e.g. tungsten K-alpha at 59.3 keV, K-beta at 66.7 keV), appearing as sharp vertical lines on the spectrum."
  },
  {
    "id": "q7-5",
    "questionNumber": 5,
    "chapterNumber": 7,
    "question": "Describe the continuous bremsstrahlung x-ray emission spectrum.",
    "answer": "A bell-shaped continuum ranging from zero up to the maximum peak kilovoltage (kVp), peaking at approximately one-third of the maximum energy.",
    "explanation": "Projectile electrons can decelerate to varying degrees depending on how closely they graze target nuclei. Bremsstrahlung produces a continuous range of energies from near zero to maximum kVp, with peak intensity occurring at ~1/3 to 1/2 of maximum kVp (e.g. peak at ~30 keV for 90 kVp)."
  },
  {
    "id": "q7-6",
    "questionNumber": 6,
    "chapterNumber": 7,
    "question": "When an x-ray imaging system is operated at 80 kVp, its output intensity is 35 µGya/mAs. What will be the output intensity if voltage is increased to 90 kVp at the same mAs?",
    "answer": "44.3 µGya/mAs.",
    "explanation": "X-ray quantity is proportional to the square of kVp: I2 / I1 = (kVp2 / kVp1)². I2 = 35 × (90 / 80)² = 35 × (1.125)² = 35 × 1.2656 = 44.3 µGya/mAs."
  },
  {
    "id": "q7-7",
    "questionNumber": 7,
    "chapterNumber": 7,
    "question": "Discuss the effect on the x-ray emission spectrum if a single-phase x-ray imaging system is changed to a three-phase or high-frequency system.",
    "answer": "X-ray quantity increases substantially, effective energy shifts to the right, and characteristic line intensity rises.",
    "explanation": "Because high-frequency systems operate near peak voltage continuously without dropping to zero, average electron kinetic energy is significantly higher. The continuous spectrum shifts rightward, maximum energy remains identical (set by kVp), and overall beam intensity nearly doubles."
  },
  {
    "id": "q7-8",
    "questionNumber": 8,
    "chapterNumber": 7,
    "question": "Explain the effect that adding aluminum filtration to an x-ray tube has on the discrete and continuous emission spectra.",
    "answer": "Selectively attenuates low-energy photons, shifting the continuous peak to the right (hardening) while decreasing overall intensity; characteristic line heights are reduced but their energies do not change.",
    "explanation": "Filtration absorbs low-energy x-rays, causing the left side of the continuous spectrum to drop to zero and shifting the average beam energy higher. Characteristic spikes maintain their exact energy positions because target atomic physics is unchanged."
  },
  {
    "id": "q7-9",
    "questionNumber": 9,
    "chapterNumber": 7,
    "question": "How is the kinetic energy of the projectile electrons streaming across the x-ray tube increased?",
    "answer": "By increasing the tube kilovoltage peak (kVp).",
    "explanation": "Potential difference (kVp) creates the accelerating electrostatic field. Raising kVp increases the electric force acting on the electrons, accelerating them to higher terminal velocities and kinetic energies: KE = 1/2 m v²."
  },
  {
    "id": "q7-10",
    "questionNumber": 10,
    "chapterNumber": 7,
    "question": "At 80 kVp, what is the maximum kinetic energy in joules of electrons arriving at the target?",
    "answer": "1.28 × 10⁻¹⁴ Joules.",
    "explanation": "E = 80,000 eV × 1.602 × 10⁻¹⁹ J/eV = 1.282 × 10⁻¹⁴ J."
  },
  {
    "id": "q7-11",
    "questionNumber": 7,
    "questionNumber": 11,
    "chapterNumber": 7,
    "question": "Why is the diagnostic x-ray tube considered an inefficient energy conversion device?",
    "answer": "Over 99% of projectile electron kinetic energy is converted into heat; less than 1% produces x-rays.",
    "explanation": "The overwhelming majority of projectile electrons merely collide with target outer-shell electrons, causing molecular excitation and infrared thermal vibration. At 60 kVp only ~0.5% produces x-rays; at 100 kVp it rises to ~1%."
  },
  {
    "id": "q7-12",
    "questionNumber": 12,
    "chapterNumber": 7,
    "question": "Draw and write a description of the formation of characteristic radiation.",
    "answer": "A projectile electron ionizes an inner-shell (K-shell) electron; an outer-shell electron transitions down to fill the vacancy, emitting a photon equal to the binding energy difference.",
    "explanation": "When an incoming projectile electron possesses kinetic energy greater than 69.5 keV (the K-shell binding energy of tungsten), it can eject a K-shell electron. The unstable vacancy is immediately filled by an electron from the L, M, or N shell. As the outer electron drops to a lower energy state, the excess potential energy is radiated as a characteristic x-ray photon."
  },
  {
    "id": "q7-13",
    "questionNumber": 13,
    "chapterNumber": 7,
    "question": "What is the clinical importance of K-characteristic x-rays in diagnostic radiography?",
    "answer": "Only K-characteristic x-rays have sufficient energy (57-69 keV) to penetrate human tissue and form diagnostic radiographs; L, M, and N characteristic x-rays (<12 keV) are absorbed by filtration.",
    "explanation": "In tungsten, L-shell characteristic photons are ~12 keV, and M-shell are ~3 keV; these lack the penetrating power to reach the image receptor and are filtered out. Only K-characteristic x-rays have adequate diagnostic penetrability."
  },
  {
    "id": "q7-14",
    "questionNumber": 14,
    "chapterNumber": 7,
    "question": "What is the range of energies of bremsstrahlung x-rays?",
    "answer": "From near zero up to the peak kilovoltage (kVp) applied across the tube.",
    "explanation": "Bremsstrahlung results from electron electrostatic deflection around the nucleus. If an electron makes a glancing pass, it loses minimal energy, producing a low-energy photon. If it makes a head-on collision with the nuclear field, it loses 100% of its kinetic energy, producing a maximum-energy photon equal to the tube kVp."
  },
  {
    "id": "q7-15",
    "questionNumber": 15,
    "chapterNumber": 7,
    "question": "What is the minimum wavelength (λ_min) associated with x-rays emitted from an x-ray tube operated at 90 kVp?",
    "answer": "0.0138 nm (0.138 Å).",
    "explanation": "Duane-Hunt law: λ_min = 1.24 / kVp (in keV). λ_min = 1.24 / 90 = 0.01378 nm = 0.138 Ångstroms."
  },
  {
    "id": "q7-16",
    "questionNumber": 16,
    "chapterNumber": 7,
    "question": "List three factors that affect the shape of the x-ray emission spectrum and briefly describe each.",
    "answer": "kVp, mAs, and added filtration.",
    "explanation": "(1) kVp: Shifts the continuous spectrum rightward and increases both amplitude and maximum energy; (2) mAs: Proportionally scales spectrum amplitude up or down without changing its shape or maximum energy; (3) Added filtration: Absorbs low-energy photons, reducing total area while shifting the peak energy to the right."
  },
  {
    "id": "q7-17",
    "questionNumber": 17,
    "chapterNumber": 7,
    "question": "Define and explain the clinical 15% kVp rule.",
    "answer": "Increasing kVp by 15% doubles image receptor exposure (equivalent to doubling mAs); decreasing kVp by 15% halves receptor exposure.",
    "explanation": "Because beam penetrability and x-ray output increase nonlinearly with kVp (approximately kVp²), a 15% boost in kVp allows a 50% reduction in mAs while maintaining identical optical density/receptor exposure, significantly lowering patient radiation dose."
  },
  {
    "id": "q7-18",
    "questionNumber": 18,
    "chapterNumber": 7,
    "question": "What is the diagnostic range of x-ray energies used in general radiography?",
    "answer": "20 to 150 kVp.",
    "explanation": "Mammography utilizes 25-35 kVp; extremity radiography uses 50-65 kVp; skull and spine work uses 70-85 kVp; and gastrointestinal barium studies and chest radiography use 100-125 kVp."
  },
  {
    "id": "q7-19",
    "questionNumber": 19,
    "chapterNumber": 7,
    "question": "What type of target radiation is useful for mammography and not useful for general diagnostic radiography?",
    "answer": "Molybdenum and rhodium characteristic x-rays (17 to 23 keV).",
    "explanation": "Mammography requires high subject contrast in soft glandular breast tissue. Molybdenum (Z=42) and Rhodium (Z=45) targets emit characteristic photons at 17.5-23 keV, which maximize photoelectric contrast in thin soft tissues but are too weakly penetrating for general thick body radiography."
  },
  {
    "id": "q7-20",
    "questionNumber": 20,
    "chapterNumber": 7,
    "question": "Why is beam filtration important in clinical radiography?",
    "answer": "It hardens the beam by removing non-penetrating low-energy photons, substantially reducing unnecessary patient skin entrance dose.",
    "explanation": "Diagnostic tubes must contain at least 2.5 mm Al equivalent total filtration for operation above 70 kVp. Without filtration, low-energy photons would be 100% absorbed in the patient's skin and superficial tissues, contributing heavily to patient dose without providing any diagnostic information to the receptor."
  }
]

CHAPTER_8_QUESTIONS = [
  {
    "id": "q8-1",
    "questionNumber": 1,
    "chapterNumber": 8,
    "question": "Define or otherwise identify the following: (a) Inherent filtration, (b) The unit of x-ray quantity, (c) A filtered x-ray spectrum, (d) A kVp change equal to twice the mAs, (e) Three filter materials used with diagnostic x-ray beams, (f) Half-value layer (HVL), (g) Wedge filter, (h) The unit of x-ray quality, (i) The approximate HVL of a diagnostic x-ray system, (j) X-ray intensity.",
    "answer": "Core concepts of radiation quantity, quality, half-value layer, and beam filtration.",
    "explanation": "(a) Inherent filtration: Built-in filtration provided by the glass or metal envelope (~0.5 mm Al) and dielectric oil (~1.0 mm Al), totaling ~1.5 mm Al equivalent. (b) Unit of x-ray quantity: Air kerma (Gya) or exposure (Roentgen, R). (c) Filtered spectrum: Spectrum depleted of low-energy photons with higher effective energy. (d) 15% rule: Increasing kVp by 15% yields equivalent receptor exposure to doubling mAs. (e) Filter materials: Aluminum (most common, Z=13), Copper (Z=29), Molybdenum/Rhodium (mammography). (f) Half-value layer (HVL): The thickness of a specified absorbing material (usually aluminum) needed to attenuate x-ray beam intensity to half its original value. (g) Wedge filter: Compensating filter used to balance exposure across anatomies of tapering thickness (e.g. AP foot, AP thoracic spine). (h) Unit of x-ray quality: Half-value layer (mm Al) or effective energy (keV). (i) Approximate HVL: 3 to 5 mm Al equivalent at 80-90 kVp. (j) X-ray intensity: The number of x-ray photons per unit area per unit time, measured in mGya/mAs."
  },
  {
    "id": "q8-2",
    "questionNumber": 2,
    "chapterNumber": 8,
    "question": "How does half-value layer (HVL) change as kVp increases from 50 to 120 kVp at constant filtration (2.5 mm Al)?",
    "answer": "HVL increases with kVp, rising from ~1.5 mm Al at 50 kVp to ~4.5 mm Al at 120 kVp.",
    "explanation": "Higher kVp imparts greater kinetic energy to projectile electrons, creating higher-energy photons with greater penetrability. More aluminum is required to attenuate 50% of the more penetrating beam, so HVL rises systematically with kVp."
  },
  {
    "id": "q8-3",
    "questionNumber": 3,
    "chapterNumber": 8,
    "question": "An abdominal radiograph taken at 84 kVp, 150 mAs results in patient radiation exposure of 6.5 mGya. The image is repeated at 84 kVp, 250 mAs. What is the new radiation exposure?",
    "answer": "10.83 mGya.",
    "explanation": "X-ray exposure is directly proportional to mAs: I2 / I1 = mAs2 / mAs1. I2 = 6.5 mGya × (250 / 150) = 6.5 × 1.667 = 10.83 mGya."
  },
  {
    "id": "q8-4",
    "questionNumber": 4,
    "chapterNumber": 8,
    "question": "An image of the lateral skull taken at 68 kVp, 20 mAs is repeated. If the kVp is increased to 78 kVp, what should be the new mAs to maintain constant image receptor exposure?",
    "answer": "10 mAs.",
    "explanation": "Increasing kVp from 68 to 78 kVp represents approximately a 15% increase (68 × 1.15 = 78.2 kVp). By the 15% rule, to maintain constant exposure when increasing kVp by 15%, the mAs must be reduced by half: 20 mAs / 2 = 10 mAs."
  },
  {
    "id": "q8-5",
    "questionNumber": 5,
    "chapterNumber": 8,
    "question": "A chest radiograph taken at 180 cm SID results in an exposure of 120 µGya. What would the exposure be if the same radiographic factors were used at 100 cm SID?",
    "answer": "388.8 µGya.",
    "explanation": "Applying the inverse square law: I2 = I1 × (d1 / d2)² = 120 µGya × (180 / 100)² = 120 × (1.8)² = 120 × 3.24 = 388.8 µGya."
  },
  {
    "id": "q8-6",
    "questionNumber": 6,
    "chapterNumber": 8,
    "question": "Fluoroscopic exposure measurements with aluminum absorbers yield: 0 mm Al = 650 µGya, 1 mm Al = 480 µGya, 2 mm Al = 350 µGya, 3 mm Al = 260 µGya, 4 mm Al = 190 µGya. Estimate the half-value layer (HVL).",
    "answer": "Approximately 2.3 mm Al.",
    "explanation": "The initial intensity is 650 µGya. Half of this initial intensity is 325 µGya (650 / 2). Inspection of the attenuation data shows 350 µGya at 2 mm Al and 260 µGya at 3 mm Al. By interpolation, 325 µGya corresponds to approximately 2.3 mm Al."
  },
  {
    "id": "q8-7",
    "questionNumber": 7,
    "chapterNumber": 8,
    "question": "When operated at 74 kVp, 100 mAs, the output intensity is 3.5 mGya and the HVL is 3.2 mm Al. How much additional filtration is necessary to reduce the output intensity to 1.75 mGya?",
    "answer": "3.2 mm Al.",
    "explanation": "By definition, the Half-Value Layer is the exact thickness of absorber required to reduce the beam intensity to half its original value (from 3.5 mGya down to 1.75 mGya). Therefore, adding exactly one HVL (3.2 mm Al) will halve the intensity."
  },
  {
    "id": "q8-8",
    "questionNumber": 8,
    "chapterNumber": 8,
    "question": "How does x-ray tube output intensity (mGya/mAs) vary with kVp?",
    "answer": "Proportional to the square of kVp: Intensity ∝ kVp².",
    "explanation": "Higher kVp increases both the efficiency of x-ray production in the target and the penetrating power of the photons through the tube window, causing exposure rate to increase approximately with the square of the voltage."
  },
  {
    "id": "q8-9",
    "questionNumber": 9,
    "chapterNumber": 8,
    "question": "A radiographic exposure is 80 kVp at 50 mAs. How many electrons interact with the target?",
    "answer": "3.125 × 10¹⁷ electrons.",
    "explanation": "Charge Q = 50 mAs = 0.05 C. Number of electrons = 0.05 C / (1.602 × 10⁻¹⁹ C/electron) = 3.125 × 10¹⁷ electrons."
  },
  {
    "id": "q8-10",
    "questionNumber": 10,
    "chapterNumber": 8,
    "question": "An extremity radiograph taken at 60 kVp, 10 mAs results in an intensity of 280 µGya. If the technique is changed to 55 kVp, 10 mAs, what is the resultant x-ray intensity?",
    "answer": "235.3 µGya.",
    "explanation": "I2 = I1 × (kVp2 / kVp1)² = 280 µGya × (55 / 60)² = 280 × (0.9167)² = 280 × 0.8403 = 235.3 µGya."
  },
  {
    "id": "q8-11",
    "questionNumber": 11,
    "chapterNumber": 8,
    "question": "What is the square law (direct square law) and how is it used in technique adjustments?",
    "answer": "mAs1 / mAs2 = (SID1 / SID2)²; Used to adjust mAs when changing distance to maintain constant image receptor exposure.",
    "explanation": "Unlike the inverse square law (which calculates radiation intensity drop), the direct square law dictates how the radiographer must adjust mAs when SID changes to compensate for beam divergence. Increasing SID requires increasing mAs by the square of distance ratio."
  },
  {
    "id": "q8-12",
    "questionNumber": 12,
    "chapterNumber": 8,
    "question": "What is the primary purpose of x-ray beam filtration?",
    "answer": "To eliminate useless low-energy photons that contribute only to patient skin dose without enhancing image quality.",
    "explanation": "Filtration hardens the beam, raising its effective energy and improving penetration through the patient to the receptor while sparing superficial tissues."
  },
  {
    "id": "q8-13",
    "questionNumber": 13,
    "chapterNumber": 8,
    "question": "The kVp is reduced from 78 to 68 kVp. What must be done to mAs to maintain constant exposure at the image receptor?",
    "answer": "Double the mAs.",
    "explanation": "Decreasing kVp by 15% (78 to 68 kVp) cuts beam transmission roughly in half. To maintain optical receptor exposure, mAs must be doubled (15% rule)."
  },
  {
    "id": "q8-14",
    "questionNumber": 14,
    "chapterNumber": 8,
    "question": "What is the relationship between x-ray quantity and mAs?",
    "answer": "Directly proportional: doubling mAs doubles the number of x-ray photons produced.",
    "explanation": "mAs dictates the total number of projectile electrons striking the target. Since each electron has a fixed probability of producing an x-ray, photon quantity scales linearly with mAs."
  },
  {
    "id": "q8-15",
    "questionNumber": 15,
    "chapterNumber": 8,
    "question": "Define half-value layer (HVL) and state why it is the best single measure of beam quality.",
    "answer": "The thickness of an absorber that reduces x-ray beam intensity by 50%; it directly reflects the penetrability of the polyenergetic beam.",
    "explanation": "Because diagnostic beams are polyenergetic, peak kilovoltage (kVp) alone does not convey the spectrum's effective energy. HVL experimentally measures actual penetrability through standard aluminum filters."
  },
  {
    "id": "q8-16",
    "questionNumber": 16,
    "chapterNumber": 8,
    "question": "List the two ways an x-ray beam can be shifted to a higher average energy.",
    "answer": "By increasing kVp or adding filtration.",
    "explanation": "Increasing kVp raises the peak kinetic energy of projectile electrons. Adding filtration absorbs low-energy photons from the beam; both shift the average photon energy higher."
  },
  {
    "id": "q8-17",
    "questionNumber": 17,
    "chapterNumber": 8,
    "question": "Why is aluminum (Z=13) standardly used for x-ray beam filtration in general radiography?",
    "answer": "Its atomic number preferentially absorbs low-energy x-rays via the photoelectric effect while allowing diagnostic photons to pass.",
    "explanation": "Aluminum has K-shell binding energy (1.56 keV) low enough that it does not create energetic characteristic scatter, yet attenuates soft bremsstrahlung photons efficiently without excessively degrading output intensity."
  },
  {
    "id": "q8-18",
    "questionNumber": 18,
    "chapterNumber": 8,
    "question": "Describe the clinical use of a wedge compensating filter during radiography of the foot.",
    "answer": "The thick end of the wedge is positioned over the thin toes, and the thin end over the thick heel/tarsals, producing uniform image receptor exposure.",
    "explanation": "The human foot varies significantly in anatomical thickness from the thin phalanges (toes) to the thick tarsals and calcaneus. Without a compensating filter, an exposure adequate for the heel overexposes the toes. The wedge filter balances transmitted radiation intensity."
  },
  {
    "id": "q8-19",
    "questionNumber": 19,
    "chapterNumber": 8,
    "question": "Does adding filtration to the x-ray tube affect the quantity of x-rays reaching the image receptor?",
    "answer": "Yes; filtration reduces total photon quantity, but primarily removes soft photons that would never reach the receptor anyway.",
    "explanation": "Total beam intensity at the tube port is reduced, but transmitted diagnostic photons are largely preserved. A slight increase in technique may be needed, but the net patient dose is significantly lower."
  },
  {
    "id": "q8-20",
    "questionNumber": 20,
    "chapterNumber": 8,
    "question": "Summarize the effect of increasing mAs, kVp, distance, and filtration on x-ray quality and quantity.",
    "answer": "mAs: Quality None, Quantity Increases; kVp: Quality Increases, Quantity Increases; Distance: Quality None, Quantity Decreases; Filtration: Quality Increases, Quantity Decreases.",
    "explanation": "mAs and distance alter photon quantity purely through electron numbers and geometry without changing photon energy. kVp increases both penetrability and production efficiency. Filtration enhances quality (higher HVL) while attenuating photon numbers."
  }
]

CHAPTER_9_QUESTIONS = [
  {
    "id": "q9-1",
    "questionNumber": 1,
    "chapterNumber": 9,
    "question": "Define or otherwise identify the following: (a) Differential absorption, (b) Classical scattering, (c) Mass density, (d) 1.02 MeV, (e) Contrast agent, (f) Compton scattering, (g) Attenuation, (h) Monoenergetic, (i) Secondary electron, (j) Photoelectric effect.",
    "answer": "The five fundamental x-ray interactions with matter and differential absorption mechanisms.",
    "explanation": "(a) Differential absorption: The difference in x-ray absorption between different anatomical tissues (bone vs soft tissue), producing radiographic contrast. (b) Classical (coherent/Rayleigh) scattering: Low-energy interaction (<10 keV) where the photon changes direction without loss of energy or ionization. (c) Mass density: Mass per unit volume (g/cm³); directly increases the probability of both Compton and photoelectric interactions. (d) 1.02 MeV: Threshold energy required for pair production (energy equivalence of two electron rest masses, 2 × 0.511 MeV). (e) Contrast agent: High-Z compound (barium, iodine) introduced into organs to increase photoelectric absorption. (f) Compton scattering: Interaction with outer-shell electron producing a scattered photon and a recoil electron. (g) Attenuation: Total reduction in beam intensity from absorption and scattering. (h) Monoenergetic: Radiation beam consisting of photons having only one single energy. (i) Secondary electron: Orbital electron ejected during an interaction. (j) Photoelectric effect: Complete absorption of an incident photon by an inner-shell electron, which is ejected as a photoelectron."
  },
  {
    "id": "q9-2",
    "questionNumber": 2,
    "chapterNumber": 9,
    "question": "What are the two factors of primary importance to differential absorption in diagnostic radiography?",
    "answer": "Atomic number of the tissue (Z) and mass density (g/cm³).",
    "explanation": "Photoelectric absorption is proportional to the cube of the atomic number (Z³). Compton scattering is proportional to mass density. Bone (Z=13.8, density 1.85 g/cm³) absorbs far more photons than soft tissue (Z=7.4, density 1.0 g/cm³), producing diagnostic contrast."
  },
  {
    "id": "q9-3",
    "questionNumber": 3,
    "chapterNumber": 9,
    "question": "A 28-keV x-ray interacts photoelectrically with a K-shell electron of a calcium atom (K-shell binding = 4.0 keV). What is the kinetic energy of the ejected photoelectron?",
    "answer": "24.0 keV.",
    "explanation": "Kinetic energy of photoelectron E_ke = E_photon - E_binding = 28 keV - 4.0 keV = 24.0 keV."
  },
  {
    "id": "q9-4",
    "questionNumber": 4,
    "chapterNumber": 9,
    "question": "1000 x-rays with an energy of 140 keV are incident on bone and soft tissue of equal thickness. If 87 x-rays are scattered in soft tissue, approximately how many are scattered in bone?",
    "answer": "Approximately 160 x-rays.",
    "explanation": "Compton scattering probability is independent of atomic number Z, but depends directly on mass density (electron density). Bone density (1.85 g/cm³) is ~1.85 times greater than soft tissue (1.0 g/cm³): 87 × 1.85 = 161 x-rays."
  },
  {
    "id": "q9-5",
    "questionNumber": 5,
    "chapterNumber": 9,
    "question": "Why are iodinated compounds such excellent contrast agents for vascular radiography?",
    "answer": "Iodine's high atomic number (Z=53) and K-edge (33.2 keV) produce high photoelectric absorption within the diagnostic beam spectrum.",
    "explanation": "Iodine has a K-shell binding energy of 33.2 keV. Photons just above this energy undergo intense photoelectric absorption, making blood vessels filled with iodine sharply radiopaque against surrounding soft tissue."
  },
  {
    "id": "q9-6",
    "questionNumber": 6,
    "chapterNumber": 9,
    "question": "Diagram Compton scattering and identify the incident photon, positive ion, ejected Compton recoil electron, and scattered photon.",
    "answer": "Incident x-ray collides with outer-shell electron; electron is ejected (recoil electron), and photon is deflected with reduced energy.",
    "explanation": "Energy conservation equation: E_incident = E_scattered + E_binding + E_electron_ke. The atom is left ionized (positive ion), and the scattered photon continues in a new direction with lower energy and longer wavelength."
  },
  {
    "id": "q9-7",
    "questionNumber": 7,
    "chapterNumber": 9,
    "question": "Describe backscatter radiation and give clinical examples in diagnostic radiology.",
    "answer": "Compton-scattered photons deflected backward at angles approaching 180°; responsible for cassette back cover artifacts and occupational dose.",
    "explanation": "Photons scattered at 180° retain up to 68% of their original energy. In clinical practice, backscatter from the patient couch or wall can expose the backside of an unshielded image receptor, projecting hinges or cassette springs onto the radiograph."
  },
  {
    "id": "q9-8",
    "questionNumber": 8,
    "chapterNumber": 9,
    "question": "Tungsten is alloyed in collimator shutters. If a 63-keV x-ray undergoes a Compton interaction with an L-shell electron (binding = 12 keV) and ejects it with 11 keV kinetic energy, what is the scattered photon energy?",
    "answer": "40.0 keV.",
    "explanation": "E_scatter = E_incident - (E_binding + E_ke) = 63 keV - (12 keV + 11 keV) = 63 - 23 = 40.0 keV."
  },
  {
    "id": "q9-9",
    "questionNumber": 9,
    "chapterNumber": 9,
    "question": "Of the five basic mechanisms of x-ray interaction with matter, which three are not important to diagnostic radiology, and why?",
    "answer": "Classical scattering, pair production, and photodisintegration.",
    "explanation": "Classical scattering (<10 keV) accounts for <3% of interactions and causes minor fog. Pair production requires a minimum threshold of 1.02 MeV, and photodisintegration requires >10 MeV; both energies are far above the diagnostic range (20-150 keV)."
  },
  {
    "id": "q9-10",
    "questionNumber": 10,
    "chapterNumber": 9,
    "question": "On average, 33.7 eV is required for each ionization in air. How many ion pairs would a 22-keV x-ray produce if completely absorbed?",
    "answer": "Approximately 653 ion pairs.",
    "explanation": "Total ion pairs = 22,000 eV / 33.7 eV/ion pair = 652.8 ion pairs."
  },
  {
    "id": "q9-11",
    "questionNumber": 11,
    "chapterNumber": 9,
    "question": "How is the energy of a Compton-scattered x-ray photon computed mathematically?",
    "answer": "E_scatter = E_incident - (E_b + E_ke); or using the Compton wavelength shift equation: Δλ = (h/mc)(1 - cos θ).",
    "explanation": "The wavelength shift depends solely on the scattering angle θ. Maximum energy loss occurs at 180° (direct backscatter), where wavelength increases by 0.0486 Å."
  },
  {
    "id": "q9-12",
    "questionNumber": 12,
    "chapterNumber": 9,
    "question": "Does the probability of Compton scattering depend on the atomic number (Z) of the target atom?",
    "answer": "No; Compton scattering probability is independent of atomic number Z.",
    "explanation": "Almost all light and medium elements have approximately the same number of electrons per gram (~3 × 10²³ electrons/g, with the exception of hydrogen). Thus, Compton probability depends strictly on mass density and photon energy, not on Z."
  },
  {
    "id": "q9-13",
    "questionNumber": 13,
    "chapterNumber": 9,
    "question": "When kVp is increased, what happens to the absolute probability of Compton scattering?",
    "answer": "The absolute probability of Compton scattering decreases (proportional to 1/E), but it decreases much more slowly than photoelectric absorption (1/E³), so relative Compton interactions dominate.",
    "explanation": "As photon energy rises, all interactions become less likely because matter becomes more transparent. However, photoelectric effect drops rapidly as 1/E³, whereas Compton drops gradually as 1/E. Consequently, at higher kVp, the percentage of surviving interactions that are Compton scatter increases markedly."
  },
  {
    "id": "q9-14",
    "questionNumber": 14,
    "chapterNumber": 9,
    "question": "Describe the photoelectric effect and state the conditions required for it to occur.",
    "answer": "An incident photon transfers all its energy to an inner-shell electron, ejecting it; the photon must have energy equal to or slightly greater than the electron's binding energy.",
    "explanation": "The incident photon completely vanishes. The ejected electron (photoelectron) carries kinetic energy E_ke = E_photon - E_binding. An outer electron transitions into the vacancy, emitting characteristic radiation."
  },
  {
    "id": "q9-15",
    "questionNumber": 15,
    "chapterNumber": 9,
    "question": "When kVp is increased, what happens to the relative probability of the photoelectric effect versus Compton scattering?",
    "answer": "Photoelectric absorption decreases precipitously (∝ 1/E³), so Compton scattering becomes the dominant interaction.",
    "explanation": "At 50 kVp, photoelectric interactions are predominant in bone and soft tissue. At 100 kVp, photoelectric absorption drops dramatically, and Compton scatter accounts for the vast majority of interactions, reducing radiographic contrast."
  },
  {
    "id": "q9-16",
    "questionNumber": 16,
    "chapterNumber": 9,
    "question": "How much more likely is it that an x-ray will interact photoelectrically with bone (Z=13.8) than with soft tissue (Z=7.4)?",
    "answer": "Approximately 6.5 times more likely (Z_bone / Z_soft)³.",
    "explanation": "Photoelectric probability is proportional to Z³. (13.8 / 7.4)³ = (1.865)³ = 6.48. Bone absorbs roughly 6.5 times more photons per gram via photoelectric interaction than soft tissue at equal beam energy."
  },
  {
    "id": "q9-17",
    "questionNumber": 17,
    "chapterNumber": 9,
    "question": "What is the relationship between atomic number (Z) and differential absorption?",
    "answer": "Differential absorption increases dramatically with differences in atomic number due to the Z³ dependence of the photoelectric effect.",
    "explanation": "Small differences in elemental composition between adjacent structures create huge variations in photoelectric photon absorption, providing high subject contrast (e.g. bone vs muscle, barium vs bowel wall)."
  },
  {
    "id": "q9-18",
    "questionNumber": 18,
    "chapterNumber": 9,
    "question": "What is the relationship between mass density and differential absorption?",
    "answer": "Directly proportional: doubling tissue density doubles the number of atoms per unit volume, doubling both Compton and photoelectric interactions.",
    "explanation": "Even when two tissues have identical effective atomic numbers (such as air in lungs vs soft tissue in heart, both Z ~ 7.4), the heart has ~1000 times greater mass density (1.0 vs 0.0012 g/cm³), producing high differential absorption and clear anatomical borders."
  },
  {
    "id": "q9-19",
    "questionNumber": 19,
    "chapterNumber": 9,
    "question": "In a contrast examination with iodine (Z=53), what is the relative probability of photoelectric interaction in iodine versus soft tissue (Z=7.4)?",
    "answer": "Approximately 367 times greater in iodine.",
    "explanation": "(Z_iodine / Z_soft)³ = (53 / 7.4)³ = (7.162)³ = 367.4. Iodine absorbs over 350 times more photons photoelectrically than soft tissue, creating radiopaque outlines."
  },
  {
    "id": "q9-20",
    "questionNumber": 20,
    "chapterNumber": 9,
    "question": "What kVp is typically used to penetrate barium in gastrointestinal contrast examinations, and why?",
    "answer": "High kVp (100 to 120 kVp); needed to penetrate thick barium suspensions and visualize mucosal lumen details.",
    "explanation": "Barium (Z=56) has such extreme photoelectric absorption that at standard kilovoltages (<80 kVp) the organ is completely opaque. High kVp (>100 kVp) increases beam penetrability, producing diagnostic transmission through the barium column to reveal mucosal lesions."
  }
]

print("Part 2 questions ready: Chapters 5, 6, 7, 8, 9 (100 questions total).")

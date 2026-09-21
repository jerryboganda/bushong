import { Chapter } from '../types/book';

export const CHAPTERS_PART1: Chapter[] = [
  {
    number: 1,
    title: 'Essential Concepts of Radiologic Science',
    partId: 'part1',
    partTitle: 'Part I: Radiologic Physics',
    pages: 'Pages 2–25',
    objectives: [
      'Describe the characteristics of matter and energy.',
      'Identify the various forms of energy.',
      'Define electromagnetic radiation and ionizing radiation.',
      'State the relative intensity of ionizing radiation from various sources.',
      'List the concepts of basic radiation protection and the Ten Commandments.',
      'Discuss the derivation of scientific systems of measurement.',
      'List and define units of radiation and radioactivity.'
    ],
    outline: [
      'Nature of Our Surroundings (Matter and Energy)',
      'Sources of Ionizing Radiation',
      'Discovery of X-Rays',
      'Development of Medical Imaging',
      'Reports of Radiation Injury & Basic Radiation Protection',
      'Standard Units of Measurement (Base & Derived)',
      'Mechanics (Velocity, Acceleration, Newton\'s Laws, Weight, Momentum, Work, Power, Energy, Heat)',
      'Terminology & Radiologic Units (Air Kerma, Gray, Sievert, Becquerel)'
    ],
    penguins: [
      {
        id: 'p-1-1',
        title: 'Mass and Energy Equivalence',
        content: 'Mass is the quantity of matter as described by its energy equivalence (E = mc²). Matter is anything that occupies space and has mass.',
        chapterNumber: 1
      },
      {
        id: 'p-1-2',
        title: 'Definition of Energy',
        content: 'Energy is the ability to do work. Like matter, energy can exist in several forms: potential, kinetic, chemical, electrical, thermal, nuclear, and electromagnetic.',
        chapterNumber: 1
      },
      {
        id: 'p-1-3',
        title: 'Ionization Definition',
        content: 'Ionization is the removal of an orbital electron from an atom. The ejected electron and the remaining positive atom are called an ion pair.',
        chapterNumber: 1
      },
      {
        id: 'p-1-4',
        title: 'ALARA Principle',
        content: 'Always practice ALARA: Keep radiation exposures As Low As Reasonably Achievable using time, distance, and shielding.',
        chapterNumber: 1
      },
      {
        id: 'p-1-5',
        title: 'Atomic Standard of Time',
        content: 'The second (s) is based on the vibration of atoms of cesium in an atomic clock (accurate to 1 second in 5,000 years).',
        chapterNumber: 1
      },
      {
        id: 'p-1-6',
        title: 'Air Kerma & Special Units',
        content: 'Air kerma (Gya) is the unit of radiation exposure; Gray (Gyt) is absorbed dose; Sievert (Sv) is effective/occupational dose; Becquerel (Bq) is radioactivity.',
        chapterNumber: 1
      }
    ],
    formulas: [
      {
        id: 'f-einstein',
        name: 'Einstein\'s Mass-Energy Equivalence',
        formula: 'E = m × c²',
        variables: [
          { symbol: 'E', meaning: 'Energy', unit: 'Joules (J)' },
          { symbol: 'm', meaning: 'Mass', unit: 'kg' },
          { symbol: 'c', meaning: 'Velocity of light in vacuum', unit: '3 × 10⁸ m/s' }
        ],
        description: 'Quantifies the equivalence between mass and energy, serving as the basis for nuclear energy and pair production.',
        chapterNumber: 1
      },
      {
        id: 'f-velocity',
        name: 'Velocity (Speed)',
        formula: 'v = d / t',
        variables: [
          { symbol: 'v', meaning: 'Velocity', unit: 'm/s' },
          { symbol: 'd', meaning: 'Distance traveled', unit: 'm' },
          { symbol: 't', meaning: 'Time elapsed', unit: 's' }
        ],
        description: 'Measure of how fast an object is moving, or the rate of change of position with time.',
        chapterNumber: 1,
        calculatorId: 'velocity'
      },
      {
        id: 'f-acceleration',
        name: 'Acceleration',
        formula: 'a = (v_f - v_o) / t',
        variables: [
          { symbol: 'a', meaning: 'Acceleration', unit: 'm/s²' },
          { symbol: 'v_f', meaning: 'Final velocity', unit: 'm/s' },
          { symbol: 'v_o', meaning: 'Initial velocity', unit: 'm/s' },
          { symbol: 't', meaning: 'Time interval', unit: 's' }
        ],
        description: 'Rate of change of velocity with time.',
        chapterNumber: 1
      },
      {
        id: 'f-newton-force',
        name: 'Newton\'s Second Law (Force)',
        formula: 'F = m × a',
        variables: [
          { symbol: 'F', meaning: 'Force', unit: 'Newtons (N)' },
          { symbol: 'm', meaning: 'Mass', unit: 'kg' },
          { symbol: 'a', meaning: 'Acceleration', unit: 'm/s²' }
        ],
        description: 'The force acting on an object equals the mass of the object multiplied by its acceleration.',
        chapterNumber: 1
      },
      {
        id: 'f-weight',
        name: 'Weight',
        formula: 'Wt = m × g',
        variables: [
          { symbol: 'Wt', meaning: 'Weight', unit: 'N or lb' },
          { symbol: 'm', meaning: 'Mass', unit: 'kg' },
          { symbol: 'g', meaning: 'Acceleration of gravity', unit: '9.8 m/s² (Earth), 1.6 m/s² (Moon)' }
        ],
        description: 'Force exerted on a body by gravitational pull. On Earth, 1 lb = 4.5 N.',
        chapterNumber: 1
      },
      {
        id: 'f-work',
        name: 'Work',
        formula: 'Work = F × d',
        variables: [
          { symbol: 'Work', meaning: 'Mechanical work or energy', unit: 'Joules (J)' },
          { symbol: 'F', meaning: 'Force applied', unit: 'Newtons (N)' },
          { symbol: 'd', meaning: 'Distance', unit: 'm' }
        ],
        description: 'Product of force and distance over which it is applied.',
        chapterNumber: 1
      },
      {
        id: 'f-power',
        name: 'Power',
        formula: 'P = Work / t = (F × d) / t',
        variables: [
          { symbol: 'P', meaning: 'Power', unit: 'Watts (W) or J/s' },
          { symbol: 'Work', meaning: 'Work performed', unit: 'Joules (J)' },
          { symbol: 't', meaning: 'Time elapsed', unit: 's' }
        ],
        description: 'Rate of doing work. 1 horsepower (hp) = 746 W; 1000 W = 1 kilowatt (kW).',
        chapterNumber: 1
      },
      {
        id: 'f-kinetic-energy',
        name: 'Kinetic Energy',
        formula: 'KE = (1/2) × m × v²',
        variables: [
          { symbol: 'KE', meaning: 'Kinetic Energy', unit: 'Joules (J)' },
          { symbol: 'm', meaning: 'Mass', unit: 'kg' },
          { symbol: 'v', meaning: 'Velocity', unit: 'm/s' }
        ],
        description: 'Energy of motion. Depends on mass and the square of velocity.',
        chapterNumber: 1
      },
      {
        id: 'f-potential-energy',
        name: 'Gravitational Potential Energy',
        formula: 'PE = m × g × h',
        variables: [
          { symbol: 'PE', meaning: 'Potential Energy', unit: 'Joules (J)' },
          { symbol: 'm', meaning: 'Mass', unit: 'kg' },
          { symbol: 'g', meaning: 'Acceleration of gravity', unit: '9.8 m/s²' },
          { symbol: 'h', meaning: 'Height above ground', unit: 'm' }
        ],
        description: 'Stored energy of position or configuration.',
        chapterNumber: 1
      }
    ],
    sections: [
      {
        id: 'c1-s1',
        title: 'Nature of Our Surroundings: Matter and Energy',
        paragraphs: [
          'In a physical analysis, all things can be classified as matter or energy. Matter is anything that occupies space and has mass. It is the material substance of which physical objects are composed. All matter is composed of fundamental building blocks called atoms.',
          'A primary distinguishing characteristic of matter is mass, the quantity of matter contained in any physical object. Mass is measured in kilograms (kg). Whereas mass is described by its energy equivalence, weight is the force exerted on a body under the influence of gravity.',
          'Energy is the ability to do work. In SI, energy is measured in joules (J). In radiology, the unit electron volt (eV) is frequently used. Forms include potential energy, kinetic energy, chemical energy, electrical energy, thermal energy (heat), nuclear energy, and electromagnetic energy.'
        ]
      },
      {
        id: 'c1-s2',
        title: 'Ionizing Radiation and Environmental Sources',
        paragraphs: [
          'Radiation is the transfer of energy through space. Matter that intercepts radiation and absorbs part or all of it is said to be exposed or irradiated.',
          'Ionizing radiation is any type of radiation capable of removing an orbital electron from the atom with which it interacts. The orbital electron and the atom from which it was separated are called an ion pair.',
          'Sources of ionizing radiation are divided into natural environmental radiation (~3 mSv/yr) and man-made radiation (~3.2 mSv/yr). Natural sources include cosmic rays, terrestrial radiation (uranium, thorium), internally deposited radionuclides (potassium-40), and radon. Radon emits alpha particles and is the largest source of natural radiation.',
          'Diagnostic x-rays constitute the largest man-made source of ionizing radiation (3.2 mSv/yr), primarily driven by CT and high-level fluoroscopy.'
        ],
        tableData: {
          title: 'Special Quantities of Radiologic Science and Their Associated Units',
          headers: ['Quantity', 'Customary Unit', 'Customary Symbol', 'SI Unit', 'SI Symbol', 'Conversion Factor'],
          rows: [
            ['Exposure', 'Roentgen', 'R', 'Air kerma', 'Gya', '1 R = 0.01 Gya (2.58 × 10⁻⁴ C/kg)'],
            ['Absorbed Dose', 'Rad', 'rad', 'Gray', 'Gyt', '1 rad = 0.01 Gyt (1 J/kg)'],
            ['Effective Dose', 'Rem', 'rem', 'Sievert', 'Sv', '1 rem = 0.01 Sv'],
            ['Radioactivity', 'Curie', 'Ci', 'Becquerel', 'Bq', '1 Ci = 3.7 × 10¹⁰ Bq']
          ]
        }
      },
      {
        id: 'c1-s3',
        title: 'Discovery of X-Rays and Development of Medical Imaging',
        paragraphs: [
          'On November 8, 1895, Wilhelm Conrad Roentgen discovered x-rays while investigating cathode rays in a Crookes tube at Würzburg University, Germany. A plate coated with barium platinocyanide glowed fluorescently several meters away.',
          'Roentgen produced the first medical x-ray image of his wife\'s hand in early 1896 and received the first Nobel Prize in Physics in 1901.',
          'Major milestones: 1896 (Pupin screen), 1898 (Thomas Edison fluoroscope using zinc cadmium sulfide and calcium tungstate; Clarence Dally was first American x-ray fatality in 1904), 1907 (Snook interrupterless transformer), 1913 (Coolidge hot-cathode tube; Bucky stationary grid), 1921 (Potter-Bucky moving grid).'
        ]
      },
      {
        id: 'c1-s4',
        title: 'Basic Radiation Protection & The Ten Commandments',
        paragraphs: [
          'Always practice ALARA: Keep radiation exposures as low as reasonably achievable using the cardinal principles: time, distance, and shielding.',
          'The primary protective devices include: Filtration (aluminum/copper absorbs low-energy useless x-rays), Collimation (restricts useful beam, reduces scatter, improves contrast), Protective Apparel (lead-impregnated 0.25–0.5 mm aprons/gloves), Gonadal Shielding (used for patients of childbearing potential), and Protective Barriers (lead-lined console control booth).'
        ],
        subsections: [
          {
            subtitle: 'Box 1-1: The Ten Commandments of Radiation Protection',
            text: [
              '1. Understand and apply the cardinal principles of radiation control: time, distance, and shielding.',
              '2. Do not allow familiarity to result in false security.',
              '3. Never stand in the primary beam.',
              '4. Always wear protective apparel when not behind a protective barrier.',
              '5. Always wear an occupational radiation monitor and position it outside the protective apron at the collar.',
              '6. Never hold a patient during radiographic examination. Use mechanical restraining devices when possible. Otherwise, have family or friends hold the patient.',
              '7. The person holding the patient must always wear a protective apron and, if possible, protective gloves.',
              '8. Use gonadal shields on all people of childbearing age when such use will not interfere with the examination.',
              '9. Examination of the pelvis and lower abdomen of pregnant patients should be avoided whenever possible, especially during the first trimester.',
              '10. Always collimate to the smallest field size appropriate for the examination.'
            ]
          }
        ]
      },
      {
        id: 'c1-s5',
        title: 'Mechanics & Heat',
        paragraphs: [
          'Three base quantities of physics: mass (kilogram), length (meter), and time (second). Secondary or derived quantities include velocity (m/s), acceleration (m/s²), force (N), momentum (kg·m/s), work (J), power (W).',
          'Heat is the kinetic energy of the random motion of molecules. The unit of heat is the calorie (energy required to raise 1 g of water by 1°C). Heat transfer occurs via conduction (transfer through material by physical touch), convection (mechanical transfer of hot molecules in gas/liquid), and thermal radiation (infrared emission). An x-ray tube anode cools primarily by thermal radiation.'
        ]
      }
    ],
    summary: [
      'Radiology requires knowledge of physics, medicine, and biology. Matter occupies space and has mass; energy is the capacity to do work.',
      'Ionization is the removal of an electron from an atom, producing an ion pair. Only x-rays, gamma rays, and high-energy ultraviolet light have sufficient photon energy to ionize matter.',
      'Natural background radiation totals ~3 mSv/yr (radon is the largest); medical imaging accounts for ~3.2 mSv/yr of population exposure.',
      'Modern radiologic units: Air kerma (Gya) for exposure, Gray (Gyt) for absorbed dose, Sievert (Sv) for effective/occupational dose, and Becquerel (Bq) for radioactivity.'
    ],
    challengeQuestions: [
      {
        id: "q1-1",
        questionNumber: 1,
        chapterNumber: 1,
        question: "Define or otherwise identify the following: (a) Energy, (b) Derived quantity, (c) Ionizing radiation, (d) Air kerma, (e) The average level of natural environmental radiation, (f) The Coolidge tube, (g) Fluoroscopy, (h) Acceleration, (i) The term applied to the chemistry of the body, (j) Barium platinocyanide.",
        answer: "Fundamental radiologic physics concepts defining energy, radiation units, historical milestones, and mechanical terms.",
        explanation: "(a) Energy: The ability to do work, measured in joules (J) or electron volts (eV). (b) Derived quantity: A secondary physical quantity formulated from combinations of base quantities (e.g., velocity, acceleration, force, momentum, work, power). (c) Ionizing radiation: Electromagnetic or particulate radiation capable of dislodging orbital electrons from atoms, creating ion pairs. (d) Air kerma (Gya): Kinetic energy released in matter per unit mass of air; the SI unit of radiation exposure. (e) Natural background level: Approximately 3 mSv (300 mrem) annually, predominantly from radon. (f) Coolidge tube: Hot-cathode vacuum x-ray tube invented in 1913 that permitted independent control of mA and kVp. (g) Fluoroscopy: Dynamic, real-time radiographic visualization of internal anatomical motion. (h) Acceleration: The rate of change of velocity with time: a = (vf - vo)/t. (i) Biochemistry: The chemical processes occurring within living organisms. (j) Barium platinocyanide: The fluorescent phosphor Roentgen observed glowing on November 8, 1895, leading to the discovery of x-rays."
      },
      {
        id: "q1-2",
        questionNumber: 2,
        chapterNumber: 1,
        question: "Match the following dates with the appropriate event: (a) 1901, (b) 1907, (c) 1913, (d) 1895. Events: (1) Roentgen discovers x-rays, (2) Roentgen wins the first Nobel Prize in physics, (3) The Snook transformer is developed, (4) The Coolidge hot-cathode tube is introduced.",
        answer: "(a)-2, (b)-3, (c)-4, (d)-1.",
        explanation: "Chronology of radiologic physics: 1895: Wilhelm Conrad Roentgen discovers x-rays in W\u00fcrzburg, Germany; 1901: Roentgen receives the first Nobel Prize in Physics; 1907: H.C. Snook introduces the high-voltage interrupterless transformer; 1913: William D. Coolidge develops the hot-cathode vacuum tube."
      },
      {
        id: "q1-3",
        questionNumber: 3,
        chapterNumber: 1,
        question: "Describe how weight is different from mass.",
        answer: "Mass is the invariant quantity of matter (measured in kg); weight is the gravitational force exerted on that mass (Wt = mg, measured in Newtons).",
        explanation: "Mass is an intrinsic property of a physical body described by its energy equivalence (E = mc\u00b2) and remains constant anywhere in the universe. Weight is a force that depends directly on the local gravitational acceleration: Weight = mass \u00d7 gravity (Wt = m \u00d7 g). A 60-kg person has a mass of 60 kg on both Earth and the Moon, but weighs 588 N on Earth and only 96 N on the Moon."
      },
      {
        id: "q1-4",
        questionNumber: 4,
        chapterNumber: 1,
        question: "Name four examples of electromagnetic radiation.",
        answer: "Radiofrequency waves, microwaves, visible light, and x-rays.",
        explanation: "The electromagnetic spectrum consists of oscillating electric and magnetic fields traveling at the speed of light (3 \u00d7 10\u2078 m/s). Examples include radio waves, microwaves, infrared radiation, visible light, ultraviolet light, x-rays, and gamma rays. Only ultraviolet, x-rays, and gamma rays possess sufficient photon energy to produce ionization in biological matter."
      },
      {
        id: "q1-5",
        questionNumber: 5,
        chapterNumber: 1,
        question: "How is x-ray interaction different from that seen in other types of electromagnetic radiation?",
        answer: "X-rays have high enough photon energy to remove orbital electrons from atoms (ionization).",
        explanation: "Unlike low-energy non-ionizing electromagnetic radiation (such as radio waves, microwaves, and visible light) which only cause molecular agitation or valence electron transitions, diagnostic x-rays have photon energies ranging from 20 to 150 keV. This energy exceeds the electron binding energy of human tissue atoms, enabling x-rays to ionize matter, eject orbital electrons, break molecular bonds, and cause biological damage."
      },
      {
        id: "q1-6",
        questionNumber: 6,
        chapterNumber: 1,
        question: "What is the purpose of x-ray beam filtration?",
        answer: "To absorb low-energy x-rays before they reach the patient, reducing unnecessary patient skin dose.",
        explanation: "Diagnostic x-ray beams are polyenergetic. Low-energy photons lack sufficient penetrability to pass through the patient to reach the image receptor; they would merely be absorbed in superficial tissues, contributing solely to patient skin exposure. Aluminum filters placed in the collimator absorb these low-energy photons, 'hardening' the beam and substantially reducing patient radiation dose."
      },
      {
        id: "q1-7",
        questionNumber: 7,
        chapterNumber: 1,
        question: "Describe the process that results in the formation of a negative ion and a positive ion.",
        answer: "Ionization: An incident high-energy photon ejects an orbital electron (negative ion), leaving the remainder of the atom positively charged (positive ion).",
        explanation: "When an ionizing x-ray photon collides with an orbital electron (such as via the photoelectric or Compton effect) and transfers energy exceeding the electron's binding energy, the electron is expelled from the atom. The free ejected electron is the negative ion, and the remaining atom, now having more protons than electrons, becomes a positive ion. Together they constitute an ion pair."
      },
      {
        id: "q1-8",
        questionNumber: 8,
        chapterNumber: 1,
        question: "What percentage of average radiation exposure to a human is attributable to medical x-rays?",
        answer: "Approximately 50% (~3.2 mSv of the total ~6.2 mSv annual exposure).",
        explanation: "According to NCRP Report No. 160, the average annual radiation exposure to the U.S. population is approximately 6.2 mSv (620 mrem). Natural background sources contribute ~3.0 mSv (48%), while medical imaging (computed tomography, fluoroscopy, nuclear medicine, and general radiography) contributes ~3.2 mSv (approximately 50% of the total collective dose)."
      },
      {
        id: "q1-9",
        questionNumber: 9,
        chapterNumber: 1,
        question: "What is the velocity of the mobile x-ray imaging system if the hospital elevator travels 20 m to the next floor in 30 s?",
        answer: "0.67 m/s.",
        explanation: "Velocity is defined as the rate of change of position with time: v = d / t. Here, distance d = 20 m and time t = 30 s. Therefore, v = 20 m / 30 s = 0.67 m/s (approx. 2.4 km/h)."
      },
      {
        id: "q1-10",
        questionNumber: 10,
        chapterNumber: 1,
        question: "A radiographer has a mass of 58 kg. What is her weight on Earth? On the moon?",
        answer: "Earth weight = 568.4 N (~128 lb); Moon weight = 92.8 N (~21 lb).",
        explanation: "Weight is calculated as Wt = m \u00d7 g. On Earth (g = 9.8 m/s\u00b2): Wt = 58 kg \u00d7 9.8 m/s\u00b2 = 568.4 Newtons (568.4 N / 4.45 N/lb = 127.7 lb). On the Moon, gravitational acceleration is approximately one-sixth of Earth's (g = 1.6 m/s\u00b2): Wt = 58 kg \u00d7 1.6 m/s\u00b2 = 92.8 Newtons (approx. 20.9 lb)."
      },
      {
        id: "q1-11",
        questionNumber: 11,
        chapterNumber: 1,
        question: "The acronym ALARA stands for what, and what are the three cardinal principles of radiation control?",
        answer: "As Low As Reasonably Achievable; Cardinal principles: Minimize Time, Maximize Distance, Use Shielding.",
        explanation: "ALARA stands for As Low As Reasonably Achievable, taking into account economic and social factors. It represents the ethical and regulatory cornerstone of radiologic protection. The three cardinal principles are: (1) Minimize the time spent near radiation sources; (2) Maximize distance from radiation sources (governed by the inverse square law); and (3) Use structural and personal lead shielding."
      },
      {
        id: "q1-12",
        questionNumber: 12,
        chapterNumber: 1,
        question: "Name devices designed to minimize radiation exposure to the patient and the operator.",
        answer: "Collimators, aluminum filtration, lead aprons, thyroid shields, gonadal shielding, and protective lead barriers.",
        explanation: "Patient protection devices include variable-aperture beam collimators (restricting exposure strictly to the anatomy of interest), filtration (absorbing useless soft x-rays), gonad shields (contact or shadow shields), and high-speed image receptors. Operator protection devices include 0.5-mm lead-equivalent aprons, thyroid shields, lead glass viewing windows, mobile lead shields, and lead drapes/bucky slot covers on fluoroscopy towers."
      },
      {
        id: "q1-13",
        questionNumber: 13,
        chapterNumber: 1,
        question: "Liquid hydrogen with a boiling temperature of 77 K is used to cool some superconducting magnets. What is this temperature in degrees Celsius? In degrees Fahrenheit?",
        answer: "-196.15\u00b0C and -321.07\u00b0F.",
        explanation: "To convert Kelvin to Celsius: \u00b0C = K - 273.15 = 77 - 273.15 = -196.15\u00b0C. To convert Celsius to Fahrenheit: \u00b0F = (\u00b0C \u00d7 9/5) + 32 = (-196.15 \u00d7 1.8) + 32 = -353.07 + 32 = -321.07\u00b0F."
      },
      {
        id: "q1-14",
        questionNumber: 14,
        chapterNumber: 1,
        question: "What are the three natural sources of whole-body radiation exposure?",
        answer: "Cosmic rays, terrestrial radiation, and internally deposited radionuclides.",
        explanation: "Natural environmental radiation encompasses: (1) Cosmic radiation: high-energy particulate and photon emissions from the sun and deep space; (2) Terrestrial radiation: emissions from radionuclides naturally occurring in the Earth's crust (uranium, thorium, radium); and (3) Internally deposited radionuclides: natural isotopes metabolically incorporated into human tissue, predominantly Potassium-40 (\u2074\u2070K) and Carbon-14 (\u00b9\u2074C)."
      },
      {
        id: "q1-15",
        questionNumber: 15,
        chapterNumber: 1,
        question: "What naturally occurring radiation source is responsible for radiation dose to lung tissue?",
        answer: "Radon gas (\u00b2\u00b2\u00b2Rn).",
        explanation: "Radon is a radioactive gas produced by the natural decay of radium-226 (a daughter of uranium-238) found in soil, concrete, and brick. Radon emits alpha particles. When inhaled, radon and its decay progeny lodge in the tracheobronchial epithelium, delivering a concentrated local alpha dose responsible for the vast majority of natural background radiation exposure to human lungs."
      },
      {
        id: "q1-16",
        questionNumber: 16,
        chapterNumber: 1,
        question: "How would you define the term 'radiation'?",
        answer: "Energy emitted and transferred through space or a medium.",
        explanation: "Radiation is the transmission of energy through space in the form of electromagnetic waves or subatomic particles. Matter that intercepts radiation and absorbs part or all of it is said to be exposed or irradiated."
      },
      {
        id: "q1-17",
        questionNumber: 17,
        chapterNumber: 1,
        question: "What are the four special quantities of radiation measurement and their SI units?",
        answer: "Exposure/Air kerma (Gya), Absorbed dose (Gyt), Effective/Equivalent dose (Sv), and Radioactivity (Bq).",
        explanation: "The four fundamental radiologic quantities: (1) Exposure: Air kerma (Gya, kinetic energy transferred to electrons in air, customary unit: Roentgen, 1 R = 0.01 Gya); (2) Absorbed dose: Gray (Gyt, 1 J/kg in tissue, customary unit: rad, 1 rad = 0.01 Gyt); (3) Effective/Equivalent dose: Sievert (Sv, biological harm taking into account radiation type and tissue weighting factors, customary unit: rem, 1 rem = 0.01 Sv); and (4) Radioactivity: Becquerel (Bq, 1 disintegration/s, customary unit: Curie, 1 Ci = 3.7 \u00d7 10\u00b9\u2070 Bq)."
      },
      {
        id: "q1-18",
        questionNumber: 18,
        chapterNumber: 1,
        question: "Place the following in chronologic order of appearance: (a) Digital fluoroscopy, (b) American Society of Radiologic Technologists (ASRT), (c) Computed tomography (CT), (d) Radiographic grids, (e) Automatic film processing.",
        answer: "Radiographic grids (1913/1921) -> ASRT (1920) -> Automatic film processing (1942) -> Computed tomography (1973) -> Digital fluoroscopy (1979).",
        explanation: "Chronological history: 1913: Gustav Bucky invents the stationary grid (Hollis Potter added moving mechanism in 1921); 1920: American Association of Radiological Technicians (now ASRT) founded; 1942: Pako develops first automatic film processor; 1973: Godfrey Hounsfield introduces commercial computed tomography; 1979: Digital fluoroscopy introduced with computerized video processing."
      },
      {
        id: "q1-19",
        questionNumber: 19,
        chapterNumber: 1,
        question: "List five clinical skills required by the ARRT for certification as a radiographer.",
        answer: "Accurate patient positioning, technical exposure factor selection, radiation protection enforcement, image quality evaluation, and radiographic equipment operation.",
        explanation: "The ARRT Radiography Practice Standards mandate competence in: (1) Accurately positioning patients and anatomical parts relative to the central ray and receptor; (2) Selecting optimal technical exposure factors (kVp, mAs, SID, focal spot); (3) Implementing radiation safety protocols for patients, self, and team members; (4) Critically evaluating radiographic image quality and correcting technical errors; and (5) Operating and performing basic quality control on radiographic and digital imaging equipment."
      },
      {
        id: "q1-20",
        questionNumber: 20,
        chapterNumber: 1,
        question: "What are the three base units common to the SI and MKS systems of measurement?",
        answer: "The meter (m) for length, the kilogram (kg) for mass, and the second (s) for time.",
        explanation: "All physical measurements in the metric MKS system and the International System of Units (SI) are derived from the three fundamental base physical quantities: length (meter), mass (kilogram), and time (second). Every other mechanical quantity (such as velocity [m/s], force [N = kg\u00b7m/s\u00b2], and energy [J = kg\u00b7m\u00b2/s\u00b2]) is a derived quantity constructed from these three base units."
      }
    ]
  },
  {
    number: 2,
    title: 'The Structure of Matter',
    partId: 'part1',
    partTitle: 'Part I: Radiologic Physics',
    pages: 'Pages 26–43',
    objectives: [
      'Relate the history of atomic models from the Greeks to Bohr and Quantum Chromodynamics.',
      'Identify the fundamental particles: electron, proton, and neutron.',
      'Describe electron orbital shells (K, L, M, N, O, P, Q) and the 2n² rule.',
      'Explain electron binding energy and ionization potential.',
      'Differentiate isotopes, isobars, isotones, and isomers.',
      'Discuss radioactivity, radioactive half-life (T1/2), and alpha versus beta emission.',
      'Compare particulate vs electromagnetic ionizing radiation.'
    ],
    outline: [
      'Centuries of Discovery (Greek, Dalton, Thomson, Rutherford, Bohr Atoms)',
      'Fundamental Particles (Electron, Proton, Neutron)',
      'Atomic Structure and Electron Shells (2n² limit, octet rule)',
      'Electron Binding Energy',
      'Atomic Nomenclature (Atomic number Z, Mass number A, Chemical symbol)',
      'Nuclear Relationships (Isotopes, Isobars, Isotones, Isomers)',
      'Combinations of Atoms (Molecules, Compounds, Covalent & Ionic Bonds)',
      'Radioactivity & Radioisotopes (Alpha, Beta emission)',
      'Radioactive Half-life (T1/2) & Exponential Decay',
      'Types of Ionizing Radiation (Particulate vs Electromagnetic)'
    ],
    penguins: [
      {
        id: 'p-2-1',
        title: 'Atom Definition',
        content: 'An atom is the smallest particle that has all the properties of an element. An atom is essentially empty space with a dense nucleus.',
        chapterNumber: 2
      },
      {
        id: 'p-2-2',
        title: 'Fundamental Particles',
        content: 'The fundamental particles of an atom are the electron (mass = 9.1 × 10⁻³¹ kg, charge -1), the proton (mass = 1.673 × 10⁻²⁷ kg, charge +1), and the neutron (mass = 1.675 × 10⁻²⁷ kg, charge 0).',
        chapterNumber: 2
      },
      {
        id: 'p-2-3',
        title: 'Shell Capacity & Octet Rule',
        content: 'The maximum number of electrons per shell is 2n² (where n is principal quantum number: K=2, L=8, M=18, N=32, O=50). No outer shell can ever contain more than 8 electrons.',
        chapterNumber: 2
      },
      {
        id: 'p-2-4',
        title: 'Centripetal Force',
        content: 'The force that keeps an electron in orbit is centripetal ("center-seeking") electrostatic attraction, which exactly balances centrifugal force.',
        chapterNumber: 2
      },
      {
        id: 'p-2-5',
        title: 'Radioactive Decay and Half-life',
        content: 'Radioactivity is the spontaneous emission of particles and energy to become stable. Half-life (T1/2) is the time required for radioactivity to decrease to one half of its original value (3.3 half-lives = 1 tenth-life).',
        chapterNumber: 2
      },
      {
        id: 'p-2-6',
        title: 'X-ray vs Gamma Ray Origin',
        content: 'Gamma rays are emitted from the nucleus of a radioisotope. X-rays are produced in the electron cloud outside the nucleus.',
        chapterNumber: 2
      }
    ],
    formulas: [
      {
        id: 'f-max-electrons',
        name: 'Maximum Electrons per Shell',
        formula: 'Maximum electrons = 2n²',
        variables: [
          { symbol: 'n', meaning: 'Principal quantum number (shell number)', unit: 'K=1, L=2, M=3, N=4, O=5, P=6, Q=7' }
        ],
        description: 'Calculates the maximum electron capacity of any atomic orbital shell.',
        chapterNumber: 2,
        calculatorId: 'electron-shell'
      },
      {
        id: 'f-radioactive-decay',
        name: 'Radioactive Decay Law',
        formula: 'Activity remaining = Original activity × (0.5)ⁿ',
        variables: [
          { symbol: 'n', meaning: 'Number of half-lives elapsed', unit: 'n = time elapsed / T1/2' }
        ],
        description: 'Calculates remaining radioactive quantity after n half-lives.',
        chapterNumber: 2,
        calculatorId: 'half-life'
      }
    ],
    sections: [
      {
        id: 'c2-s1',
        title: 'Evolution of Atomic Models',
        paragraphs: [
          'Ancient Greeks envisioned matter composed of four essences: earth, water, air, and fire, and coined the word atom (indivisible). Today, 118 elements are known (92 natural, 26 synthetic).',
          'John Dalton (1808) showed elements could be classified by integral atomic mass, envisioning hook-and-eye bonding. Dmitri Mendeleev (1869) created the Periodic Table, arranging elements by increasing atomic mass into eight groups with recurring chemical properties.',
          'J.J. Thomson (late 1890s) discovered electrons and proposed the plum pudding model. Ernest Rutherford (1911) discovered the small, dense, positively charged nucleus. Niels Bohr (1913) perfected the miniature solar system model where electrons orbit at prescribed energy levels.'
        ]
      },
      {
        id: 'c2-s2',
        title: 'Atomic Structure and Electron Shells',
        paragraphs: [
          'An atom is mostly empty space. If the nucleus were the size of a basketball, orbital electrons would be 12 km away! The nucleus contains 99.998% of the mass of a uranium atom.',
          'Electrons orbit in discrete shells: K (n=1, max 2), L (n=2, max 8), M (n=3, max 18), N (n=4, max 32), O (n=5, max 50). The outermost shell can never hold more than 8 electrons (octet rule). The number of electrons in the outer shell equals the group number in the periodic table and determines valence.',
          'Centripetal force (electrostatic attraction between opposite charges) prevents electrons from flying away, balancing centrifugal force.'
        ]
      },
      {
        id: 'c2-s3',
        title: 'Electron Binding Energy and Ionization',
        paragraphs: [
          'Electron binding energy (Eb) is the strength of attachment of an electron to the nucleus. The closer an electron is to the nucleus, the more tightly it is bound (K > L > M > N).',
          'Larger, more complex atoms have higher binding energies for every shell. In tungsten (W, Z=74), K-shell Eb is 69.5 keV; in carbon (C, Z=6), K-shell Eb is only 0.28 keV. In human soft tissue, ~34 eV is required to ionize an atom (ionization potential).'
        ]
      },
      {
        id: 'c2-s4',
        title: 'Atomic Nomenclature: Isotopes, Isobars, Isotones, Isomers',
        paragraphs: [
          'Atomic number (Z) is the number of protons in the nucleus. Atomic mass number (A) is the total number of nucleons (protons + neutrons). Number of neutrons = A - Z.',
          'Mnemonic for nuclear relationships: ISOTOPE has same Protons; ISOBAR has same A (mass number); ISOTONE has same Neutrons; ISOMER has same everything except energy state (metastable, e.g., Tc-99m).'
        ],
        tableData: {
          title: 'Characteristics of Nuclear Arrangements',
          headers: ['Arrangement', 'Atomic Number (Z)', 'Atomic Mass Number (A)', 'Neutron Number (A-Z)', 'Example'],
          rows: [
            ['Isotope', 'Same', 'Different', 'Different', '¹³⁰Ba, ¹³²Ba, ¹³⁴Ba, ¹³⁶Ba, ¹³⁸Ba'],
            ['Isobar', 'Different', 'Same', 'Different', '¹³¹I and ¹³¹Xe'],
            ['Isotone', 'Different', 'Different', 'Same', '¹³⁰I, ¹³¹Xe, and ¹³²Cs (all 77 neutrons)'],
            ['Isomer', 'Same', 'Same', 'Same', '⁹⁹ᵐTc and ⁹⁹Tc']
          ]
        }
      },
      {
        id: 'c2-s5',
        title: 'Radioactivity and Types of Ionizing Radiation',
        paragraphs: [
          'Radioactivity is the spontaneous emission of particles and energy by unstable nuclei to achieve stability. Two key particulate decay modes are beta emission (a neutron transforms into a proton and an electron/beta particle, Z increases by 1, A stays constant) and alpha emission (loss of 2 protons and 2 neutrons, helium nucleus, A drops by 4, Z drops by 2).',
          'Particulate radiation includes alpha (range <0.1 mm in tissue, 4–7 MeV, highly ionizing) and beta particles (range 1–2 cm in tissue, 0–7 MeV). Electromagnetic radiation consists of x-rays (from electron cloud) and gamma rays (from nucleus), having zero mass, zero charge, traveling at the speed of light c = 3 × 10⁸ m/s.'
        ]
      }
    ],
    summary: [
      'The atom consists of a central positive nucleus (protons and neutrons) surrounded by orbiting electrons in shells.',
      'Electron capacity is 2n²; the outermost shell never exceeds 8 electrons.',
      'Binding energy increases with higher Z and closer proximity to the nucleus.',
      'Isotopes have same Z; isobars have same A; isotones have same neutrons; isomers are metastable energy variants.',
      'Alpha particles are heavy helium nuclei; beta particles are nuclear electrons; x-rays and gamma rays are electromagnetic photons differing only in origin.'
    ],
    challengeQuestions: [
      {
        id: "q2-1",
        questionNumber: 1,
        chapterNumber: 2,
        question: "Define or otherwise identify the following: (a) Photon, (b) The Rutherford atom, (c) Positron, (d) Nucleons, (e) The arrangement of the periodic table of the elements, (f) Radioactive half-life, (g) W (chemical symbol for what element?), (h) Alpha particle, (i) K shell, (j) Chemical compound.",
        answer: "Key atomic and nuclear physics terms.",
        explanation: "(a) Photon: The smallest quantum or packet of electromagnetic energy, traveling at the speed of light. (b) Rutherford atom: 1911 atomic model describing a dense, positively charged central nucleus surrounded by a cloud of negative electrons. (c) Positron: An anti-electron having the same mass as an electron (9.1 \u00d7 10\u207b\u00b3\u00b9 kg) but bearing a positive charge (+1). (d) Nucleons: The constituents of the atomic nucleus, namely protons and neutrons. (e) Periodic table arrangement: Elements arranged in rows (periods) corresponding to the number of electron shells, and columns (groups) corresponding to the number of electrons in the outermost valence shell. (f) Radioactive half-life (T1/2): Time required for a quantity of radioactivity to decay to half of its original value. (g) W: Tungsten (Wolfram, Z=74). (h) Alpha particle: A helium nucleus composed of 2 protons and 2 neutrons (+2 charge). (i) K shell: The innermost electron orbital shell of an atom (n=1), possessing the highest binding energy. (j) Chemical compound: A new substance formed by the chemical combination of two or more different elements in definite proportions."
      },
      {
        id: "q2-2",
        questionNumber: 2,
        chapterNumber: 2,
        question: "Figure 2-1 shows the following approximate sizes: an atom, 10\u207b\u00b9\u2070 m; the Earth, 10\u2077 m. By how many orders of magnitude do these objects differ?",
        answer: "17 orders of magnitude (a factor of 10\u00b9\u2077).",
        explanation: "Orders of magnitude represent powers of 10. The difference is: 10\u2077 m / 10\u207b\u00b9\u2070 m = 10^(7 - (-10)) = 10\u00b9\u2077. Thus, the diameter of the Earth differs from that of an atom by 17 orders of magnitude (100 quadrillion times)."
      },
      {
        id: "q2-3",
        questionNumber: 3,
        chapterNumber: 2,
        question: "How many protons, neutrons, electrons, and nucleons are found in the following: (a) \u00b9\u2076O, (b) \u00b2\u2077Al, (c) \u2076\u2070Co, (d) \u00b2\u00b2\u2076Ra?",
        answer: "Protons / Neutrons / Electrons / Nucleons: (a) \u00b9\u2076O: 8, 8, 8, 16; (b) \u00b2\u2077Al: 13, 14, 13, 27; (c) \u2076\u2070Co: 27, 33, 27, 60; (d) \u00b2\u00b2\u2076Ra: 88, 138, 88, 226.",
        explanation: "Atomic number Z = protons = electrons in neutral atom. Mass number A = nucleons = protons + neutrons. Neutrons N = A - Z. For Oxygen (Z=8, A=16): 8p, 8n, 8e, 16 nucleons. For Aluminum (Z=13, A=27): 13p, 14n, 13e, 27 nucleons. For Cobalt (Z=27, A=60): 27p, 33n, 27e, 60 nucleons. For Radium (Z=88, A=226): 88p, 138n, 88e, 226 nucleons."
      },
      {
        id: "q2-4",
        questionNumber: 4,
        chapterNumber: 2,
        question: "Using the data in Table 2-1, determine the mass of \u2079\u2079Tc in atomic mass units and in kilograms.",
        answer: "Approximately 98.9 amu and 1.64 \u00d7 10\u207b\u00b2\u2075 kg.",
        explanation: "One atomic mass unit (amu) is equal to 1.6605 \u00d7 10\u207b\u00b2\u2077 kg. Technetium-99 has a nominal mass number of 99 amu. In kilograms: 98.9 amu \u00d7 1.6605 \u00d7 10\u207b\u00b2\u2077 kg/amu = 1.642 \u00d7 10\u207b\u00b2\u2075 kg."
      },
      {
        id: "q2-5",
        questionNumber: 5,
        chapterNumber: 2,
        question: "Diagram the expected electron configuration of Zirconium (\u2074\u2070Zr).",
        answer: "K=2, L=8, M=18, N=10, O=2.",
        explanation: "Zirconium has atomic number Z = 40. Electrons fill the shells according to maximum capacity 2n\u00b2 and the octet rule for outer shells: K (n=1) = 2; L (n=2) = 8; M (n=3) = 18; N (n=4) = 10; O (n=5) = 2. Total electrons = 2 + 8 + 18 + 10 + 2 = 40."
      },
      {
        id: "q2-6",
        questionNumber: 6,
        chapterNumber: 2,
        question: "If atoms large enough to have electrons in the T shell existed, what would be the maximum number allowed in that shell?",
        answer: "200 electrons.",
        explanation: "Orbital shells are lettered K(n=1), L(n=2), M(n=3), N(n=4), O(n=5), P(n=6), Q(n=7), R(n=8), S(n=9), T(n=10). By the 2n\u00b2 formula, for the T shell where principal quantum number n = 10: Maximum electron capacity = 2 \u00d7 (10)\u00b2 = 2 \u00d7 100 = 200 electrons."
      },
      {
        id: "q2-7",
        questionNumber: 7,
        chapterNumber: 2,
        question: "How much more tightly bound are K-shell electrons in tungsten than (a) L-shell electrons, (b) M-shell electrons, and (c) free electrons?",
        answer: "(a) 57.4 keV more, (b) 66.7 keV more, (c) 69.5 keV more.",
        explanation: "In Tungsten (Z=74): K-shell binding energy = 69.5 keV; L-shell = 12.1 keV; M-shell = 2.8 keV; free electron = 0 keV. (a) Difference with L-shell: 69.5 - 12.1 = 57.4 keV; (b) Difference with M-shell: 69.5 - 2.8 = 66.7 keV; (c) Difference with free electron: 69.5 - 0 = 69.5 keV."
      },
      {
        id: "q2-8",
        questionNumber: 8,
        chapterNumber: 2,
        question: "From a list of nuclides, differentiate isotopes, isobars, isotones, and isomers.",
        answer: "Isotopes have same Z (protons); Isobars have same A (mass number); Isotones have same N (neutrons); Isomers have same Z and A in different nuclear energy states.",
        explanation: "Mnemonic guides: IsoTope: same p (protons/Z); IsoBar: same a (atomic mass number A); IsoTone: same n (neutrons); IsoMer: same everything, metastable nuclear state (e.g. \u2079\u2079\u1d50Tc vs \u2079\u2079Tc)."
      },
      {
        id: "q2-9",
        questionNumber: 9,
        chapterNumber: 2,
        question: "\u2079\u2070Sr has a half-life of 29 years. If 10 MBq were present in 1950, approximately how much would remain in 2010?",
        answer: "Approximately 2.37 MBq.",
        explanation: "Elapsed time t = 2010 - 1950 = 60 years. Number of half-lives n = t / T1/2 = 60 / 29 = 2.069 half-lives. Remaining activity A = A0 \u00d7 (1/2)^n = 10 MBq \u00d7 (0.5)^2.069 = 10 \u00d7 0.238 = 2.38 MBq."
      },
      {
        id: "q2-10",
        questionNumber: 10,
        chapterNumber: 2,
        question: "Compare alpha, beta, and gamma radiation regarding mass, charge, and origin.",
        answer: "Alpha: 4 amu, +2, nuclear; Beta: 0.00055 amu, -1, nuclear; Gamma: 0 mass, 0 charge, nuclear.",
        explanation: "Alpha particles are helium nuclei (2 protons, 2 neutrons, mass ~4 amu, charge +2) emitted from radioactive heavy nuclei. Beta particles are high-speed electrons (mass = 1/2000 amu, charge -1) emitted from unstable nuclei during neutron decay. Gamma rays are electromagnetic photons (mass 0, charge 0) emitted from excited nuclear states."
      },
      {
        id: "q2-11",
        questionNumber: 11,
        chapterNumber: 2,
        question: "For what is Dmitri Mendeleev remembered in physical science?",
        answer: "Devising the first periodic table of chemical elements in 1869.",
        explanation: "Russian chemist Dmitri Mendeleev organized the known elements in order of increasing atomic mass and demonstrated that elements with similar chemical valence and properties appear at periodic intervals, forming the foundation of the modern Periodic Table of the Elements."
      },
      {
        id: "q2-12",
        questionNumber: 12,
        chapterNumber: 2,
        question: "Who developed the concept of the atom as a miniature solar system?",
        answer: "Niels Bohr in 1913.",
        explanation: "Niels Bohr improved upon Rutherford's nuclear model by proposing that electrons revolve around the central positive nucleus only in specific, quantized circular orbits or energy levels (shells), analogous to planets orbiting the sun."
      },
      {
        id: "q2-13",
        questionNumber: 13,
        chapterNumber: 2,
        question: "List the fundamental particles within an atom.",
        answer: "The electron, the proton, and the neutron.",
        explanation: "The proton (mass 1.673 \u00d7 10\u207b\u00b2\u2077 kg, charge +1) and neutron (mass 1.675 \u00d7 10\u207b\u00b2\u2077 kg, charge 0) are nucleons residing in the central nucleus. The electron (mass 9.109 \u00d7 10\u207b\u00b3\u00b9 kg, charge -1) orbits in defined shells outside the nucleus."
      },
      {
        id: "q2-14",
        questionNumber: 14,
        chapterNumber: 2,
        question: "What property of an atom does binding energy describe?",
        answer: "The strength of electrostatic attachment holding an electron in its orbital shell.",
        explanation: "Electron binding energy represents the amount of energy required to completely remove an electron from its orbital shell against the centripetal electrostatic attraction of the positive nucleus. Inner-shell electrons (K shell) in high-Z elements have the highest binding energy."
      },
      {
        id: "q2-15",
        questionNumber: 15,
        chapterNumber: 2,
        question: "Can atoms be ionized by changing the number of positive charges (protons)?",
        answer: "No. Ionization involves adding or removing orbital electrons; changing protons alters the atomic number Z and transmutes the element.",
        explanation: "Ionization is strictly the gain or loss of orbital electrons from the electron cloud. Altering the number of nuclear protons changes the elemental identity (nuclear transmutation) rather than ionizing the existing atom."
      },
      {
        id: "q2-16",
        questionNumber: 16,
        chapterNumber: 2,
        question: "Describe how ion pairs are formed.",
        answer: "An incident ionizing photon or particle transfers energy to an orbital electron, ejecting it and leaving behind a positive ion.",
        explanation: "When ionizing radiation interacts with an atom with energy exceeding the electron's binding energy, an orbital electron is ejected. The free negative electron and the remaining positive atom are collectively referred to as an ion pair."
      },
      {
        id: "q2-17",
        questionNumber: 17,
        chapterNumber: 2,
        question: "What determines the chemical properties of an element?",
        answer: "The number and arrangement of valence electrons in the outermost electron shell.",
        explanation: "The valence shell electrons govern how an atom bonds with other atoms (ionic or covalent bonding). Elements sharing the same number of outer-shell valence electrons belong to the same group in the periodic table and share similar chemical reactivities."
      },
      {
        id: "q2-18",
        questionNumber: 18,
        chapterNumber: 2,
        question: "Why doesn't an orbital electron spontaneously fly away from the nucleus of an atom?",
        answer: "The centripetal electrostatic attraction between the positive nucleus and negative electron balances the centrifugal force of orbital motion.",
        explanation: "The positive electrical charge of nuclear protons attracts the negatively charged orbital electrons with a Coulomb force (centripetal force) that precisely counteracts the centrifugal force resulting from the electron's orbital velocity, maintaining stable orbits."
      },
      {
        id: "q2-19",
        questionNumber: 19,
        chapterNumber: 2,
        question: "Describe the difference between alpha and beta emission.",
        answer: "Alpha emission ejects a 4-amu helium nucleus (+2); beta emission ejects a high-speed electron (-1) converted from a nuclear neutron.",
        explanation: "Alpha decay occurs in heavy radionuclides, ejecting 2 protons and 2 neutrons, decreasing atomic number Z by 2 and mass number A by 4. Beta decay occurs in neutron-rich nuclei: a neutron converts into a proton, an antineutrino, and an electron (beta particle), increasing atomic number Z by 1 while leaving mass number A unchanged."
      },
      {
        id: "q2-20",
        questionNumber: 20,
        chapterNumber: 2,
        question: "How does carbon-14 dating determine the age of petrified wood or organic artifacts?",
        answer: "By measuring the ratio of remaining radioactive \u00b9\u2074C (T1/2 = 5730 yrs) to stable \u00b9\u00b2C.",
        explanation: "Living organic matter continuously exchanges carbon with the atmosphere, maintaining a constant \u00b9\u2074C/\u00b9\u00b2C ratio. When the organism dies, carbon intake ceases and \u00b9\u2074C decays radioactively with a half-life of 5730 years. Comparing the residual \u00b9\u2074C activity to modern organic material allows calculation of the elapsed time since death."
      }
    ]
  },
  {
    number: 3,
    title: 'Electromagnetic Energy',
    partId: 'part1',
    partTitle: 'Part I: Radiologic Physics',
    pages: 'Pages 44–59',
    objectives: [
      'Identify the properties of photons: velocity, amplitude, frequency, and wavelength.',
      'State and calculate using the electromagnetic wave equation (c = f × λ).',
      'Explain the electromagnetic spectrum and the three imaging windows.',
      'Differentiate wave model (visible light) and particle model (quantum theory for x-rays).',
      'State and solve problems with the Inverse Square Law.',
      'Explain Planck\'s quantum equation (E = hf).'
    ],
    outline: [
      'Photons (Velocity, Amplitude, Frequency, Wavelength)',
      'Electromagnetic Wave Equation (c = fλ)',
      'The Electromagnetic Spectrum (Energy, Frequency, Wavelength)',
      'Three Imaging Windows (Visible light, Radiofrequency, X-radiation)',
      'Wave-Particle Duality (Wave model for visible light, particle model for x-rays)',
      'Inverse Square Law',
      'Particle Model: Planck\'s Quantum Theory (E = hf, E = hc/λ)',
      'Matter and Energy Equivalence'
    ],
    penguins: [
      {
        id: 'p-3-1',
        title: 'Speed of Light Constant',
        content: 'The velocity of all electromagnetic radiation is constant: c = 3 × 10⁸ m/s (186,000 miles/second).',
        chapterNumber: 3
      },
      {
        id: 'p-3-2',
        title: 'Wave Equation Relationship',
        content: 'At a given velocity, wavelength and frequency are inversely proportional: c = f × λ. As frequency increases, wavelength decreases.',
        chapterNumber: 3
      },
      {
        id: 'p-3-3',
        title: 'Imaging Windows Identification',
        content: 'Visible light is identified by wavelength (nm), radiofrequency by frequency (MHz), and x-rays by photon energy (eV or keV).',
        chapterNumber: 3
      },
      {
        id: 'p-3-4',
        title: 'Wave-Particle Duality',
        content: 'Photons interact with matter most easily when the matter is approximately the same size as the photon wavelength. Visible light behaves like a wave; x-rays behave as particles.',
        chapterNumber: 3
      },
      {
        id: 'p-3-5',
        title: 'Inverse Square Law Rule',
        content: 'The intensity of electromagnetic radiation is inversely related to the square of the distance from the source: I₁/I₂ = (d₂/d₁)². Doubling distance reduces intensity to one-fourth.',
        chapterNumber: 3
      },
      {
        id: 'p-3-6',
        title: 'Planck\'s Quantum Relation',
        content: 'The energy of a photon is directly proportional to its frequency: E = hf (where h = 4.15 × 10⁻¹⁵ eV·s or 6.63 × 10⁻³⁴ J·s).',
        chapterNumber: 3
      }
    ],
    formulas: [
      {
        id: 'f-wave-eq',
        name: 'Electromagnetic Wave Equation',
        formula: 'c = f × λ',
        variables: [
          { symbol: 'c', meaning: 'Speed of light', unit: '3 × 10⁸ m/s' },
          { symbol: 'f', meaning: 'Frequency', unit: 'Hertz (Hz or 1/s)' },
          { symbol: 'λ', meaning: 'Wavelength', unit: 'meters (m)' }
        ],
        description: 'Frequency and wavelength are inversely proportional for all electromagnetic energy.',
        chapterNumber: 3,
        calculatorId: 'wave-equation'
      },
      {
        id: 'f-inverse-square',
        name: 'Inverse Square Law',
        formula: 'I₁ / I₂ = (d₂ / d₁)²  or  I₂ = I₁ × (d₁ / d₂)² ',
        variables: [
          { symbol: 'I₁', meaning: 'Original radiation intensity', unit: 'mGy, mR, or lux' },
          { symbol: 'I₂', meaning: 'New radiation intensity', unit: 'mGy, mR, or lux' },
          { symbol: 'd₁', meaning: 'Original distance from source', unit: 'm or cm' },
          { symbol: 'd₂', meaning: 'New distance from source', unit: 'm or cm' }
        ],
        description: 'Radiation intensity decreases inversely with the square of the distance from a point source.',
        chapterNumber: 3,
        calculatorId: 'inverse-square'
      },
      {
        id: 'f-planck',
        name: 'Planck\'s Quantum Equation',
        formula: 'E = h × f = (h × c) / λ',
        variables: [
          { symbol: 'E', meaning: 'Photon energy', unit: 'eV or Joules' },
          { symbol: 'h', meaning: 'Planck\'s constant', unit: '4.15 × 10⁻¹⁵ eV·s or 6.63 × 10⁻³⁴ J·s' },
          { symbol: 'f', meaning: 'Photon frequency', unit: 'Hz' },
          { symbol: 'λ', meaning: 'Wavelength', unit: 'm' }
        ],
        description: 'Relates photon energy directly to frequency and inversely to wavelength.',
        chapterNumber: 3
      }
    ],
    sections: [
      {
        id: 'c3-s1',
        title: 'Photons and Sine Wave Characteristics',
        paragraphs: [
          'An x-ray photon is a discrete quantum of electromagnetic energy traveling through space at the speed of light (c = 3 × 10⁸ m/s). Photons have no mass and no charge, but have electric and magnetic fields continuously oscillating sinusoidally at right angles to each other.',
          'Sine waves are characterized by amplitude (one-half the range from crest to valley), frequency (f, cycles per second measured in Hertz, Hz), and wavelength (λ, distance from crest to crest).'
        ]
      },
      {
        id: 'c3-s2',
        title: 'The Electromagnetic Spectrum',
        paragraphs: [
          'The known electromagnetic spectrum extends over 25 orders of magnitude in frequency (10² to 10²⁴ Hz) and wavelength (10⁷ to 10⁻¹⁶ m).',
          'Three regions are critical to medical imaging: Visible Light (400–700 nm, used in image viewing and photostimulated luminescence), Radiofrequency (low energy, meters to cm, used in MRI), and X- and Gamma Radiation (30–150 keV in diagnostic radiography, 10⁻¹⁰ to 10⁻¹² m).'
        ]
      },
      {
        id: 'c3-s3',
        title: 'Wave-Particle Duality and Interactions',
        paragraphs: [
          'Photons interact with matter most easily when the matter is approximately the same size as the photon wavelength. Radio waves (meters) interact with metallic antennas. Microwaves (cm) interact with foods. Visible light (hundreds of nm) interacts with rods and cones of the eye. X-rays (sub-nanometer) interact with electrons and atoms.',
          'Visible light exhibits reflection, absorption, and transmission, and materials are categorized as transparent (window glass), translucent (frosted glass), or opaque (black paint). Anatomical structures are described as radiopaque (bone, absorb x-rays) or radiolucent (soft tissue, lung, transmit x-rays).'
        ]
      },
      {
        id: 'c3-s4',
        title: 'The Inverse Square Law in Practice',
        paragraphs: [
          'Radiation intensity falls off rapidly with distance from a point source because the emitted photons spread over an increasingly larger spherical surface area.',
          'Formula: I₁ / I₂ = (d₂ / d₁)². When distance from the tube is doubled, intensity drops to one fourth (25%). When distance is halved, intensity increases by a factor of 4 (400%).'
        ]
      }
    ],
    summary: [
      'Electromagnetic radiation consists of photons traveling at c = 3 × 10⁸ m/s.',
      'The wave equation c = fλ shows frequency and wavelength are inversely related.',
      'X-rays behave like particles (photons); light behaves like waves.',
      'Inverse Square Law states intensity drops with the square of distance.',
      'Planck\'s equation E = hf links energy directly to frequency.'
    ],
    challengeQuestions: [
      {
        id: "q3-1",
        questionNumber: 1,
        chapterNumber: 3,
        question: "Define or otherwise identify the following: (a) Photon, (b) Radiolucency, (c) The inverse square law, (d) Frequency, (e) Law of conservation of energy, (f) Gamma ray, (g) Electromagnetic spectrum, (h) Sinusoidal variation, (i) Quantum, (j) Visible light.",
        answer: "Core electromagnetic physics concepts.",
        explanation: "(a) Photon: An unbroken bundle of electromagnetic energy that travels at the speed of light. (b) Radiolucency: The property of tissues or materials that transmit x-rays easily, appearing dark or black on radiographs (e.g. lung, air). (c) Inverse square law: Radiation intensity is inversely proportional to the square of the distance from the source: I1/I2 = (d2/d1)\u00b2. (d) Frequency (f): The number of wavelengths or wave cycles that pass a given point per second, measured in Hertz (Hz). (e) Law of conservation of energy: Energy can neither be created nor destroyed, only transformed from one form to another. (f) Gamma ray: High-energy electromagnetic radiation emitted from the nucleus of a radioisotope. (g) Electromagnetic spectrum: The complete continuum of electromagnetic radiation from radio waves to gamma rays. (h) Sinusoidal variation: Mathematical sine wave pattern describing the oscillating amplitude of electric and magnetic fields. (i) Quantum: An individual discrete packet of electromagnetic energy. (j) Visible light: Electromagnetic radiation within the 400 nm (violet) to 700 nm (red) range detectable by the human eye."
      },
      {
        id: "q3-2",
        questionNumber: 2,
        chapterNumber: 3,
        question: "Accurately diagram one photon of orange light (lambda = 620 nm) and identify its velocity, electric field, magnetic field, and wavelength.",
        answer: "Transverse wave oscillating at velocity c = 3 \u00d7 10\u2078 m/s with mutually perpendicular electric and magnetic vectors and wavelength 620 nm.",
        explanation: "An electromagnetic photon consists of an electric field oscillating vertically and a magnetic field oscillating horizontally, perpendicular to each other and perpendicular to the direction of propagation. Velocity c = 3 \u00d7 10\u2078 m/s, and the peak-to-peak wavelength \u03bb = 620 \u00d7 10\u207b\u2079 m."
      },
      {
        id: "q3-3",
        questionNumber: 3,
        chapterNumber: 3,
        question: "A thunderclap associated with lightning has a frequency of 800 Hz. If its wavelength is 50 cm, what is its velocity? How far away is the thunder if the time interval between seeing lightning and hearing thunder is 6 s?",
        answer: "Velocity = 400 m/s; Distance = 2400 m (2.4 km).",
        explanation: "Velocity v = frequency \u00d7 wavelength = 800 Hz \u00d7 0.5 m = 400 m/s. Because light travels virtually instantaneously, the distance to the lightning strike is d = v \u00d7 t = 400 m/s \u00d7 6 s = 2400 meters (2.4 km or ~1.5 miles)."
      },
      {
        id: "q3-4",
        questionNumber: 4,
        chapterNumber: 3,
        question: "What is the frequency associated with a photon of microwave radiation that has a wavelength of 10\u207b\u00b3 m (1 mm)?",
        answer: "3 \u00d7 10\u00b9\u00b9 Hz (300 GHz).",
        explanation: "Using the electromagnetic wave equation c = f \u00d7 \u03bb: f = c / \u03bb = (3 \u00d7 10\u2078 m/s) / (10\u207b\u00b3 m) = 3 \u00d7 10\u00b9\u00b9 Hz (300 GHz)."
      },
      {
        id: "q3-5",
        questionNumber: 5,
        chapterNumber: 3,
        question: "Radio station WIMP-FM broadcasts at 104 MHz. What is the wavelength of this radiation?",
        answer: "2.88 meters.",
        explanation: "Frequency f = 104 MHz = 104 \u00d7 10\u2076 Hz. Wavelength \u03bb = c / f = (3 \u00d7 10\u2078 m/s) / (104 \u00d7 10\u2076 s\u207b\u00b9) = 2.88 meters."
      },
      {
        id: "q3-6",
        questionNumber: 6,
        chapterNumber: 3,
        question: "In mammography, 26-keV x-rays are used. What is the frequency of this radiation?",
        answer: "6.28 \u00d7 10\u00b9\u2078 Hz.",
        explanation: "Photon energy E = 26 keV = 26,000 eV \u00d7 1.6 \u00d7 10\u207b\u00b9\u2079 J/eV = 4.16 \u00d7 10\u207b\u00b9\u2075 Joules. Using Planck's equation E = h \u00d7 f: f = E / h = (4.16 \u00d7 10\u207b\u00b9\u2075 J) / (6.626 \u00d7 10\u207b\u00b3\u2074 J\u00b7s) = 6.28 \u00d7 10\u00b9\u2078 Hz."
      },
      {
        id: "q3-7",
        questionNumber: 7,
        chapterNumber: 3,
        question: "Radiography of a barium-filled colon calls for high-kVp technique. These x-rays can have an energy of 110 keV. What is the frequency and wavelength of this radiation?",
        answer: "Frequency = 2.66 \u00d7 10\u00b9\u2079 Hz; Wavelength = 0.0113 nm (1.13 \u00d7 10\u207b\u00b9\u00b9 m).",
        explanation: "E = 110 keV = 1.76 \u00d7 10\u207b\u00b9\u2074 J. Frequency f = E / h = 1.76 \u00d7 10\u207b\u00b9\u2074 / 6.626 \u00d7 10\u207b\u00b3\u2074 = 2.66 \u00d7 10\u00b9\u2079 Hz. Wavelength \u03bb = c / f = 3 \u00d7 10\u2078 / 2.66 \u00d7 10\u00b9\u2079 = 1.13 \u00d7 10\u207b\u00b9\u00b9 m = 0.0113 nm."
      },
      {
        id: "q3-8",
        questionNumber: 8,
        chapterNumber: 3,
        question: "What is the energy of the 110-keV x-ray in question 7 when expressed in joules? What is its mass equivalence?",
        answer: "Energy = 1.76 \u00d7 10\u207b\u00b9\u2074 J; Mass equivalence = 1.96 \u00d7 10\u207b\u00b3\u00b9 kg.",
        explanation: "Energy in Joules = 110,000 eV \u00d7 1.602 \u00d7 10\u207b\u00b9\u2079 J/eV = 1.762 \u00d7 10\u207b\u00b9\u2074 J. Mass equivalence from Einstein's equation m = E / c\u00b2: m = 1.762 \u00d7 10\u207b\u00b9\u2074 J / (3 \u00d7 10\u2078 m/s)\u00b2 = 1.762 \u00d7 10\u207b\u00b9\u2074 / 9 \u00d7 10\u00b9\u2076 = 1.96 \u00d7 10\u207b\u00b3\u00b9 kg (approx. 1/5th the rest mass of an electron)."
      },
      {
        id: "q3-9",
        questionNumber: 9,
        chapterNumber: 3,
        question: "The output intensity of a normal radiographic imaging system is 0.05 mGya/mAs at 100 cm. What is the output intensity of such a system at 200 cm?",
        answer: "0.0125 mGya/mAs.",
        explanation: "Applying the inverse square law: I2 = I1 \u00d7 (d1 / d2)\u00b2 = 0.05 \u00d7 (100 / 200)\u00b2 = 0.05 \u00d7 (1/2)\u00b2 = 0.05 / 4 = 0.0125 mGya/mAs. Doubling the distance reduces exposure intensity to one-fourth."
      },
      {
        id: "q3-10",
        questionNumber: 10,
        chapterNumber: 3,
        question: "A mobile x-ray imaging system has an output intensity of 0.04 mGya at 100 cm. Conditions require that a particular examination be conducted at 75 cm SID. What will be the output intensity at this distance?",
        answer: "0.071 mGya (71 \u00b5Gya).",
        explanation: "I2 = I1 \u00d7 (d1 / d2)\u00b2 = 0.04 mGya \u00d7 (100 / 75)\u00b2 = 0.04 \u00d7 (1.333)\u00b2 = 0.04 \u00d7 1.778 = 0.0711 mGya."
      },
      {
        id: "q3-11",
        questionNumber: 11,
        chapterNumber: 3,
        question: "Write the wave equation and explain its variables.",
        answer: "v = f \u00d7 \u03bb (for electromagnetic radiation: c = f \u00d7 \u03bb).",
        explanation: "Velocity (v or c) equals frequency (f) multiplied by wavelength (\u03bb). For all electromagnetic radiation traveling in vacuum or air, velocity is constant at c = 3 \u00d7 10\u2078 m/s."
      },
      {
        id: "q3-12",
        questionNumber: 12,
        chapterNumber: 3,
        question: "How are frequency and wavelength related across the electromagnetic spectrum?",
        answer: "They are inversely proportional (as frequency increases, wavelength decreases).",
        explanation: "Because the product of frequency and wavelength equals the constant speed of light (c = f\u03bb), higher-energy photons with higher frequencies must possess correspondingly shorter wavelengths."
      },
      {
        id: "q3-13",
        questionNumber: 13,
        chapterNumber: 3,
        question: "Write the inverse square law and describe its meaning in radiation protection.",
        answer: "I1 / I2 = (d2 / d1)\u00b2; Radiation intensity decreases with the square of the distance from the source.",
        explanation: "Radiation spreading outward from a point source covers an area proportional to the square of the distance. Doubling the distance from an x-ray tube reduces dose rate to 25%; tripling distance reduces it to 11.1%. Distance is the most potent and cost-effective radiation protection tool."
      },
      {
        id: "q3-14",
        questionNumber: 14,
        chapterNumber: 3,
        question: "The intensity of light from a reading lamp is 200 millilumens (mlm) at a distance of 2 meters. What is the intensity of light at 3 m?",
        answer: "88.9 millilumens (mlm).",
        explanation: "I2 = I1 \u00d7 (d1 / d2)\u00b2 = 200 mlm \u00d7 (2 / 3)\u00b2 = 200 \u00d7 (4 / 9) = 88.89 mlm."
      },
      {
        id: "q3-15",
        questionNumber: 15,
        chapterNumber: 3,
        question: "What are the three imaging windows of the electromagnetic spectrum, and what unit of measure is applied to each?",
        answer: "Radiofrequency (frequency in Hz), Visible light (wavelength in nm), and X-radiation (energy in eV/keV).",
        explanation: "Medical imaging utilizes three distinct regions of the electromagnetic spectrum: (1) Radiofrequency: used in MRI, characterized by frequency (megahertz, MHz); (2) Visible light: used in optical microscopy and endoscopy, characterized by wavelength (nanometers, nm); and (3) X-radiation: used in radiography, CT, and fluoroscopy, characterized by photon energy (kiloelectron volts, keV)."
      },
      {
        id: "q3-16",
        questionNumber: 16,
        chapterNumber: 3,
        question: "What is the energy range of diagnostic x-rays?",
        answer: "20 keV to 150 keV.",
        explanation: "Diagnostic medical radiography utilizes photon energies ranging from 20 keV (in low-kVp mammography) up to 150 keV (in high-kVp chest radiography and computed tomography)."
      },
      {
        id: "q3-17",
        questionNumber: 17,
        chapterNumber: 3,
        question: "What is the difference between x-rays and gamma rays?",
        answer: "Their origin: x-rays originate from the electron cloud; gamma rays originate from inside the nucleus.",
        explanation: "X-rays and gamma rays with identical energies have identical physical properties and interactions. The sole distinction is origin: x-rays are produced in the electron shells of atoms or via bremsstrahlung deceleration outside the nucleus, whereas gamma rays are emitted during radioactive nuclear transitions from within the atomic nucleus."
      },
      {
        id: "q3-18",
        questionNumber: 18,
        chapterNumber: 3,
        question: "Some regions of the electromagnetic spectrum behave like waves, and some regions behave like particles in their interaction with matter. What is this phenomenon called?",
        answer: "Wave-particle duality.",
        explanation: "Low-energy electromagnetic radiation (radio, light) interacts primarily as waves (showing refraction, interference, and diffraction), whereas high-energy photons (x-rays, gamma rays) interact primarily as discrete particulate bundles of energy (photoelectric absorption, Compton collision)."
      },
      {
        id: "q3-19",
        questionNumber: 19,
        chapterNumber: 3,
        question: "Define attenuation.",
        answer: "The reduction in radiation intensity that results from absorption and scattering as x-rays traverse matter.",
        explanation: "Attenuation is the total loss of photons from the primary beam caused by both photoelectric absorption (photons completely captured) and Compton scatter (photons deflected out of the beam path)."
      },
      {
        id: "q3-20",
        questionNumber: 20,
        chapterNumber: 3,
        question: "What is the frequency of a 70-keV x-ray photon?",
        answer: "1.69 \u00d7 10\u00b9\u2079 Hz.",
        explanation: "E = 70,000 eV \u00d7 1.602 \u00d7 10\u207b\u00b9\u2079 J/eV = 1.121 \u00d7 10\u207b\u00b9\u2074 J. Frequency f = E / h = 1.121 \u00d7 10\u207b\u00b9\u2074 J / 6.626 \u00d7 10\u207b\u00b3\u2074 J\u00b7s = 1.692 \u00d7 10\u00b9\u2079 Hz."
      }
    ]
  },
  {
    number: 4,
    title: 'Electricity, Magnetism, and Electromagnetism',
    partId: 'part1',
    partTitle: 'Part I: Radiologic Physics',
    pages: 'Pages 60–82',
    objectives: [
      'Define electrostatics, electrification (contact, friction, induction), and the four electrostatic laws.',
      'State Coulomb\'s Law and describe electric potential (Volt).',
      'Explain electrodynamics, conductors, insulators, semiconductors, and superconductors.',
      'State Ohm\'s Law (V = IR) and Electric Power (P = IV = I²R).',
      'Contrast series and parallel circuits, and direct current (DC) vs alternating current (AC).',
      'Discuss magnetism, magnetic dipoles, domains, states of matter, and the four magnetic laws.',
      'Relate Oersted\'s and Faraday\'s experiments, and state the Transformer Law.'
    ],
    outline: [
      'Electrostatics & Electrostatic Laws (Coulomb\'s Law, Electric Potential)',
      'Electrodynamics (Conductors, Insulators, Semiconductors, Superconductivity)',
      'Electric Circuits (Ohm\'s Law, Series vs Parallel Circuits)',
      'Direct Current (DC) vs Alternating Current (AC)',
      'Electric Power (P = IV = I²R)',
      'Magnetism (Dipoles, Domains, Permeability, Susceptibility, 4 States)',
      'Magnetic Laws (Poles, Dipoles, Inverse Square Law, Tesla & Gauss)',
      'Electromagnetism (Oersted\'s discovery, Solenoids, Electromagnets)',
      'Electromagnetic Induction (Faraday\'s Law, Lenz\'s Law)',
      'Electromechanical Devices (Motors, Generators, Induction Motor)',
      'Transformers (Step-up, Step-down, Autotransformer, Shell-type, Transformer Law)'
    ],
    penguins: [
      {
        id: 'p-4-1',
        title: 'Electrification Methods',
        content: 'Electrification can be created by contact, friction, or induction. Outer-shell electrons are loosely bound and easily transferred.',
        chapterNumber: 4
      },
      {
        id: 'p-4-2',
        title: 'Four Laws of Electrostatics',
        content: '1. Unlike charges attract; like charges repel. 2. Coulomb\'s Law: electrostatic force is inversely proportional to distance squared. 3. Electric charge is distributed uniformly on the outer surface of conductors. 4. Electric charge concentrates along the sharpest curvature.',
        chapterNumber: 4
      },
      {
        id: 'p-4-3',
        title: 'Ohm\'s Law & Power',
        content: 'The voltage across a circuit is current times resistance: V = IR. Electric power is P = IV = I²R (measured in watts; 1 W = 1 A at 1 V).',
        chapterNumber: 4
      },
      {
        id: 'p-4-4',
        title: 'Magnetism from Moving Charge',
        content: 'Any charged particle in motion creates a magnetic field perpendicular to its motion. Moving electrons create closed magnetic field lines.',
        chapterNumber: 4
      },
      {
        id: 'p-4-5',
        title: 'Faraday\'s Law of Induction',
        content: 'An electric current is induced in a circuit if some part of that circuit is in a changing magnetic field. Magnitude depends on field strength, velocity, angle, and number of turns.',
        chapterNumber: 4
      },
      {
        id: 'p-4-6',
        title: 'Transformer Law',
        content: 'A transformer changes the intensity of alternating voltage and current: Vs/Vp = Ns/Np and Is/Ip = Np/Ns. Step-up increases voltage and decreases current.',
        chapterNumber: 4
      }
    ],
    formulas: [
      {
        id: 'f-coulomb',
        name: 'Coulomb\'s Law of Electrostatic Force',
        formula: 'F = k × (Q₁ × Q₂) / d²',
        variables: [
          { symbol: 'F', meaning: 'Electrostatic force', unit: 'Newtons (N)' },
          { symbol: 'Q₁, Q₂', meaning: 'Electrostatic charges', unit: 'Coulombs (C)' },
          { symbol: 'd', meaning: 'Distance between charges', unit: 'm' },
          { symbol: 'k', meaning: 'Constant of proportionality', unit: 'N·m²/C²' }
        ],
        description: 'Quantifies attraction or repulsion between charges.',
        chapterNumber: 4
      },
      {
        id: 'f-ohms-law',
        name: 'Ohm\'s Law',
        formula: 'V = I × R',
        variables: [
          { symbol: 'V', meaning: 'Electric potential', unit: 'Volts (V)' },
          { symbol: 'I', meaning: 'Electric current', unit: 'Amperes (A)' },
          { symbol: 'R', meaning: 'Electric resistance', unit: 'Ohms (Ω)' }
        ],
        description: 'Fundamental relationship between voltage, current, and resistance.',
        chapterNumber: 4,
        calculatorId: 'ohms-law'
      },
      {
        id: 'f-electric-power',
        name: 'Electric Power',
        formula: 'P = I × V = I² × R',
        variables: [
          { symbol: 'P', meaning: 'Power', unit: 'Watts (W)' },
          { symbol: 'I', meaning: 'Current', unit: 'Amperes (A)' },
          { symbol: 'V', meaning: 'Potential', unit: 'Volts (V)' },
          { symbol: 'R', meaning: 'Resistance', unit: 'Ohms (Ω)' }
        ],
        description: 'Quantifies rate of energy consumption. Radiographic units require 20 to 150 kW.',
        chapterNumber: 4,
        calculatorId: 'electric-power'
      },
      {
        id: 'f-transformer-law',
        name: 'Transformer Law',
        formula: 'V_s / V_p = N_s / N_p  and  I_s / I_p = N_p / N_s',
        variables: [
          { symbol: 'V_s', meaning: 'Secondary voltage', unit: 'V or kV' },
          { symbol: 'V_p', meaning: 'Primary voltage', unit: 'V' },
          { symbol: 'N_s', meaning: 'Number of turns on secondary coil', unit: 'turns' },
          { symbol: 'N_p', meaning: 'Number of turns on primary coil', unit: 'turns' },
          { symbol: 'I_s', meaning: 'Secondary current', unit: 'mA or A' },
          { symbol: 'I_p', meaning: 'Primary current', unit: 'A' }
        ],
        description: 'Voltage change across a transformer is proportional to the turns ratio (Ns/Np); current change is inversely proportional.',
        chapterNumber: 4,
        calculatorId: 'transformer-law'
      }
    ],
    sections: [
      {
        id: 'c4-s1',
        title: 'Electrostatics and Laws',
        paragraphs: [
          'Electrostatics is the study of stationary electric charges. Electrons have one unit of negative charge (1.6 × 10⁻¹⁹ C); protons have one unit of positive charge. 1 Coulomb = 6.3 × 10¹⁸ electron charges.',
          'Four electrostatic laws: 1. Unlike charges attract; like charges repel. 2. Coulomb\'s Law: F = k(Q1Q2/d²). 3. Electric charges reside exclusively on the outer surfaces of conductors. 4. Electric charge concentrates along the sharpest curvature of a conductor surface (e.g., cattle prod tips).'
        ]
      },
      {
        id: 'c4-s2',
        title: 'Electrodynamics and Electric Circuits',
        paragraphs: [
          'Electrodynamics is the study of electric charges in motion (electricity). Four electrical states of matter: Superconductor (niobium, titanium; zero resistance below Tc; requires cold), Conductor (copper, aluminum; variable resistance obeying Ohm\'s Law), Semiconductor (silicon, germanium; basis for microchips and rectifiers), and Insulator (rubber, glass; blocks electron flow).',
          'In a Series circuit, all elements are in a single line: R_total = R1 + R2 + R3; I is constant; V_total = V1 + V2 + V3. In a Parallel circuit, elements bridge across conductors: 1/R_total = 1/R1 + 1/R2 + 1/R3; V is constant; I_total = I1 + I2 + I3.',
          'Direct Current (DC) flows in one direction only (battery). Alternating Current (AC) oscillates sinusoidally at 60 Hz in the US (50 Hz in Europe), completing 120 reversals per second (16.7 ms per cycle).'
        ]
      },
      {
        id: 'c4-s3',
        title: 'Magnetism and Electromagnetism',
        paragraphs: [
          'Around 1000 BC, shepherds in Magnesia discovered magnetite (Fe3O4), or lodestone. Any charged particle in motion creates a magnetic field. Spinning electrons and spinning protons create magnetic moments.',
          'Four magnetic states of matter: Nonmagnetic (wood, glass), Diamagnetic (water, plastic; weakly repelled), Paramagnetic (gadolinium MRI contrast; weakly attracted), Ferromagnetic (iron, cobalt, nickel, alnico; strongly magnetized).',
          'SI unit of magnetic field strength is the Tesla (T); older unit is Gauss (G): 1 T = 10,000 G. Earth\'s field is ~50 μT at equator, 100 μT at poles. MRI magnets are 1.5 to 3.0 T.',
          'Hans Oersted (1820) proved electric current creates a magnetic field around a wire. A coil of wire is a solenoid; adding an iron core creates an electromagnet. Michael Faraday (1831) proved a changing magnetic field induces an electric current in a conductor (electromagnetic induction).'
        ]
      },
      {
        id: 'c4-s4',
        title: 'Transformers',
        paragraphs: [
          'A transformer changes the intensity of alternating voltage and current without moving parts via mutual induction. It works ONLY with AC.',
          'Turns ratio (Ns/Np) > 1 is a step-up transformer (increases voltage, decreases current). Turns ratio < 1 is a step-down transformer (decreases voltage, increases current). Types include closed-core (laminated iron sheets to minimize eddy currents), autotransformer (single winding on iron core), and shell-type (most efficient, two closed cores).'
        ]
      }
    ],
    summary: [
      'Electrostatics covers stationary charges; electrodynamics covers moving charges.',
      'Ohm\'s Law (V = IR) and Electric Power (P = IV = I²R) govern circuits.',
      'Every magnet has two poles (north and south); like poles repel, unlike attract.',
      'Faraday\'s Law of induction enables generators, motors, and transformers.',
      'Transformers step up or step down alternating voltages according to the turns ratio: Vs/Vp = Ns/Np.'
    ],
    challengeQuestions: [
      {
        id: "q4-1",
        questionNumber: 1,
        chapterNumber: 4,
        question: "Define or otherwise identify the following: (a) Electric charge and its unit, (b) Electrodynamics, (c) Electric power, (d) Electrostatics, (e) Dipole, (f) Induction, (g) Magnetic domain, (h) Autotransformer, (i) Gauss and Tesla, (j) Electric potential.",
        answer: "Fundamental electricity, magnetism, and electromagnetism concepts.",
        explanation: "(a) Electric charge: Intrinsic atomic property of protons (+) and electrons (-); unit is the Coulomb (C = 6.3 \u00d7 10\u00b9\u2078 charges). (b) Electrodynamics: The science of electric charges in motion (electricity). (c) Electric power: Rate of electric energy consumption: P = IV = I\u00b2R, measured in Watts (W). (d) Electrostatics: The study of stationary electric charges. (e) Dipole: An object with two opposite magnetic poles (North and South) or electric charges. (f) Induction: Electrification or magnetization of an object produced without physical contact by proximity to an electric or magnetic field. (g) Magnetic domain: A localized microscopic region within ferromagnetic material where billions of atomic magnetic dipoles are aligned in parallel. (h) Autotransformer: Single-winding transformer operating on self-induction that supplies variable voltage to the high-voltage section. (i) Gauss and Tesla: Units of magnetic field strength; 1 Tesla (T) = 10,000 Gauss (G). (j) Electric potential: Electric potential energy per unit charge; unit is the Volt (1 V = 1 J/C)."
      },
      {
        id: "q4-2",
        questionNumber: 2,
        chapterNumber: 4,
        question: "What is the total circuit resistance when resistive elements of 5, 10, 15, and 20 \u03a9 are connected in (a) series and (b) parallel?",
        answer: "(a) Series = 50 \u03a9; (b) Parallel = 2.4 \u03a9.",
        explanation: "(a) In series: R_total = R1 + R2 + R3 + R4 = 5 + 10 + 15 + 20 = 50 \u03a9. (b) In parallel: 1/R_total = 1/5 + 1/10 + 1/15 + 1/20 = 12/60 + 6/60 + 4/60 + 3/60 = 25/60. R_total = 60 / 25 = 2.4 \u03a9. Total resistance in parallel is always less than the smallest individual resistor."
      },
      {
        id: "q4-3",
        questionNumber: 3,
        chapterNumber: 4,
        question: "If the total current in the circuit in question 2 is 7 A, what is the voltage across the 10-\u03a9 resistor for (a) series and (b) parallel operation?",
        answer: "(a) Series = 70 V; (b) Parallel = 16.8 V.",
        explanation: "(a) In series, current is uniform across all elements (I = 7 A): V = I \u00d7 R = 7 A \u00d7 10 \u03a9 = 70 V. (b) In parallel, total voltage across the circuit is V_total = I_total \u00d7 R_total = 7 A \u00d7 2.4 \u03a9 = 16.8 V. In parallel, voltage is identical across every branch, so the voltage across the 10-\u03a9 resistor is 16.8 V."
      },
      {
        id: "q4-4",
        questionNumber: 4,
        chapterNumber: 4,
        question: "A radiographic exposure requires 100 mAs. How many electrons is this?",
        answer: "6.25 \u00d7 10\u00b9\u2077 electrons.",
        explanation: "Current is charge per unit time: 1 A = 1 C/s. Therefore, 100 mAs = 0.1 A \u00d7 1 s = 0.1 Coulomb. One Coulomb equals 6.25 \u00d7 10\u00b9\u2078 electrons. Total electrons = 0.1 C \u00d7 6.25 \u00d7 10\u00b9\u2078 electrons/C = 6.25 \u00d7 10\u00b9\u2077 electrons."
      },
      {
        id: "q4-5",
        questionNumber: 5,
        chapterNumber: 4,
        question: "Describe three types of transformers used in electrical and imaging systems.",
        answer: "Step-up transformer, step-down transformer, and autotransformer.",
        explanation: "(1) Step-up transformer: has more secondary than primary turns (turns ratio > 1), stepping up voltage to kilovolts while reducing amperage; (2) Step-down transformer: has fewer secondary than primary turns (turns ratio < 1), stepping down voltage to ~10-12 V while increasing filament current to 3-6 A; (3) Autotransformer: single tapped winding that provides variable secondary voltage through self-induction."
      },
      {
        id: "q4-6",
        questionNumber: 6,
        chapterNumber: 4,
        question: "What are the three ways to electrify an object?",
        answer: "Friction, contact, and induction.",
        explanation: "(1) Friction: mechanical rubbing transfers electrons from one object to another (e.g. shoes on carpet); (2) Contact: physical touch transfers charge directly between bodies until potentials equalize; (3) Induction: uncharged conductive object placed within an electric field has charges displaced without physical touch."
      },
      {
        id: "q4-7",
        questionNumber: 7,
        chapterNumber: 4,
        question: "List the four fundamental laws of electrostatics.",
        answer: "(1) Like charges repel, unlike attract; (2) Coulomb's inverse square law; (3) Charge resides on external surfaces of conductors; (4) Charge concentrates at maximum surface curvature.",
        explanation: "(1) Electrostatic force is repulsive between like charges and attractive between opposite charges; (2) Force is proportional to product of charges and inversely proportional to the square of distance (F = k\u00b7q1\u00b7q2/d\u00b2); (3) In solid conductors, excess charges distribute exclusively over the outer perimeter; (4) Charges concentrate most densely where curvature is sharpest (e.g. lightning rod)."
      },
      {
        id: "q4-8",
        questionNumber: 8,
        chapterNumber: 4,
        question: "Why is static electrification easier in dry Phoenix than in humid Houston?",
        answer: "Dry air is an electrical insulator that retains charge, whereas humid air contains water molecules that dissipate charge.",
        explanation: "Water vapor in humid air condenses as a microscopic film on surfaces, making them slightly conductive and allowing static charges to bleed off into the atmosphere. In dry climates, the lack of humidity preserves electrical insulation, allowing electrostatic charges to accumulate to high potentials."
      },
      {
        id: "q4-9",
        questionNumber: 9,
        chapterNumber: 4,
        question: "A mobile x-ray imaging system operates on 110 V AC power. Its maximum capacity is 110 kVp and 100 mA. What is the turns ratio of the high-voltage transformer?",
        answer: "1000:1.",
        explanation: "By the transformer law: Vs / Vp = Ns / Np. Here, peak secondary voltage Vs = 110 kV = 110,000 V, and primary supply voltage Vp = 110 V. Turns ratio = 110,000 / 110 = 1000:1."
      },
      {
        id: "q4-10",
        questionNumber: 10,
        chapterNumber: 4,
        question: "What should be the primary current in the previous question to produce a secondary current of 100 mA?",
        answer: "100 Amperes (100,000 mA).",
        explanation: "Because power is conserved across an ideal transformer (Vp \u00d7 Ip = Vs \u00d7 Is): Ip / Is = Ns / Np. Therefore, Ip = Is \u00d7 (Ns / Np) = 100 mA \u00d7 1000 = 100,000 mA = 100 A."
      },
      {
        id: "q4-11",
        questionNumber: 11,
        chapterNumber: 4,
        question: "Magnetic fields in excess of 5 Gauss can interfere with cardiac pacemakers. How many millitesla (mT) is this?",
        answer: "0.5 mT.",
        explanation: "1 Tesla = 10,000 Gauss. Therefore, 1 Gauss = 0.0001 T = 0.1 mT. A 5-Gauss field equals 5 \u00d7 0.1 mT = 0.5 mT. (The 5-Gauss line defines the safety perimeter around MRI scanners)."
      },
      {
        id: "q4-12",
        questionNumber: 12,
        chapterNumber: 4,
        question: "What is the role of magnetism in the study of x-ray imaging systems?",
        answer: "Electromagnetism powers high-voltage transformers, filament transformers, autotransformers, and induction motors for rotating anodes.",
        explanation: "X-ray equipment relies on electromagnetic induction for transforming line voltage into kilovoltage, stepping down voltage for filament heating, and rotating the heavy copper/tungsten anode disc at 3,400 to 10,000 rpm via an external stator induction motor."
      },
      {
        id: "q4-13",
        questionNumber: 13,
        chapterNumber: 4,
        question: "List the three principal types of magnets.",
        answer: "Naturally occurring magnets, artificially induced permanent magnets, and electromagnets.",
        explanation: "(1) Natural magnets: earth and magnetite (lodestone); (2) Permanent artificial magnets: manufactured alloys of aluminum, nickel, and cobalt (alnico) or neodymium; (3) Electromagnets: temporary magnets consisting of a current-carrying wire coil wrapped around a soft iron core."
      },
      {
        id: "q4-14",
        questionNumber: 14,
        chapterNumber: 4,
        question: "Describe the physical construction and operation of an electromagnet.",
        answer: "A solenoid (insulated wire coil) carrying electric current wrapped around a ferromagnetic core that generates a magnetic field only while current flows.",
        explanation: "When an electric current flows through a helical wire coil (solenoid), it creates an internal magnetic field. Inserting a soft iron core intensifies the magnetic field lines hundreds of times by aligning the iron's magnetic domains. The magnetic field can be instantly toggled on or off by controlling the electrical current."
      },
      {
        id: "q4-15",
        questionNumber: 15,
        chapterNumber: 4,
        question: "Explain how a magnetic domain can cause an object to behave like a magnet.",
        answer: "Alignment of microscopic magnetic dipoles into synchronized domains produces net macroscopic magnetic poles.",
        explanation: "Individual electrons exhibit magnetic spin dipoles. In non-magnetized ferromagnetic iron, these dipoles form microscopic domains pointing in random orientations, canceling each other out. When exposed to an external magnetic field, the domains rotate into mutual parallel alignment, reinforcing each other and creating net North and South magnetic poles."
      },
      {
        id: "q4-16",
        questionNumber: 16,
        chapterNumber: 4,
        question: "State Ohm's law and describe its effect on electric circuits.",
        answer: "V = I \u00d7 R; Voltage equals current multiplied by resistance.",
        explanation: "Ohm's law defines the relationship among potential difference (V, volts), current (I, amperes), and resistance (R, ohms). It demonstrates that electric current is directly proportional to voltage and inversely proportional to resistance. If resistance doubles at constant voltage, current drops by half."
      },
      {
        id: "q4-17",
        questionNumber: 17,
        chapterNumber: 4,
        question: "What happens when a bar magnet is heated to a very high temperature?",
        answer: "It loses its magnetism because thermal agitation disrupts the alignment of magnetic domains (Curie point).",
        explanation: "Excess thermal energy causes intense, randomized kinetic motion of atoms within the metal lattice. Above the Curie temperature (770\u00b0C for iron), this agitation shatters the parallel alignment of magnetic domains, causing the permanent magnet to lose its macroscopic magnetization."
      },
      {
        id: "q4-18",
        questionNumber: 18,
        chapterNumber: 4,
        question: "List three diamagnetic materials.",
        answer: "Water, plastic, copper, and bismuth.",
        explanation: "Diamagnetic materials are unaffected or very weakly repelled by magnetic field lines because they have no unpaired orbital electrons to create magnetic dipoles. Examples include water, copper, bismuth, lead, and plastic."
      },
      {
        id: "q4-19",
        questionNumber: 19,
        chapterNumber: 4,
        question: "Where in everyday life might one find an electromagnet?",
        answer: "Doorbell chimes, circuit breakers, audio speakers, electric motors, and computer hard drive actuators.",
        explanation: "Electromagnets provide mechanical motion from electrical signals in doorbells (solenoids striking a chime bar), audio speakers (voice coils oscillating in magnetic fields), electromagnetic relays, washing machine valves, and power door locks."
      },
      {
        id: "q4-20",
        questionNumber: 20,
        chapterNumber: 4,
        question: "What is the range in intensity of the Earth's natural magnetic field?",
        answer: "Approximately 0.03 to 0.06 mT (0.3 to 0.6 Gauss).",
        explanation: "The Earth behaves as a giant magnetic dipole generated by molten iron currents in its outer core. Magnetic field intensity varies from approximately 0.03 mT (0.3 Gauss) near the equator to 0.06 mT (0.6 Gauss) at the magnetic poles. (For comparison, an MRI magnet of 1.5 T is 30,000 times stronger than Earth's field)."
      }
    ]
  }
];

# Challenge Questions for Part 1: Chapters 1 to 4
import json

CHAPTER_1_QUESTIONS = [
  {
    "id": "q1-1",
    "questionNumber": 1,
    "chapterNumber": 1,
    "question": "Define or otherwise identify the following: (a) Energy, (b) Derived quantity, (c) Ionizing radiation, (d) Air kerma, (e) The average level of natural environmental radiation, (f) The Coolidge tube, (g) Fluoroscopy, (h) Acceleration, (i) The term applied to the chemistry of the body, (j) Barium platinocyanide.",
    "answer": "Fundamental radiologic physics concepts defining energy, radiation units, historical milestones, and mechanical terms.",
    "explanation": "(a) Energy: The ability to do work, measured in joules (J) or electron volts (eV). (b) Derived quantity: A secondary physical quantity formulated from combinations of base quantities (e.g., velocity, acceleration, force, momentum, work, power). (c) Ionizing radiation: Electromagnetic or particulate radiation capable of dislodging orbital electrons from atoms, creating ion pairs. (d) Air kerma (Gya): Kinetic energy released in matter per unit mass of air; the SI unit of radiation exposure. (e) Natural background level: Approximately 3 mSv (300 mrem) annually, predominantly from radon. (f) Coolidge tube: Hot-cathode vacuum x-ray tube invented in 1913 that permitted independent control of mA and kVp. (g) Fluoroscopy: Dynamic, real-time radiographic visualization of internal anatomical motion. (h) Acceleration: The rate of change of velocity with time: a = (vf - vo)/t. (i) Biochemistry: The chemical processes occurring within living organisms. (j) Barium platinocyanide: The fluorescent phosphor Roentgen observed glowing on November 8, 1895, leading to the discovery of x-rays."
  },
  {
    "id": "q1-2",
    "questionNumber": 2,
    "chapterNumber": 1,
    "question": "Match the following dates with the appropriate event: (a) 1901, (b) 1907, (c) 1913, (d) 1895. Events: (1) Roentgen discovers x-rays, (2) Roentgen wins the first Nobel Prize in physics, (3) The Snook transformer is developed, (4) The Coolidge hot-cathode tube is introduced.",
    "answer": "(a)-2, (b)-3, (c)-4, (d)-1.",
    "explanation": "Chronology of radiologic physics: 1895: Wilhelm Conrad Roentgen discovers x-rays in Würzburg, Germany; 1901: Roentgen receives the first Nobel Prize in Physics; 1907: H.C. Snook introduces the high-voltage interrupterless transformer; 1913: William D. Coolidge develops the hot-cathode vacuum tube."
  },
  {
    "id": "q1-3",
    "questionNumber": 3,
    "chapterNumber": 1,
    "question": "Describe how weight is different from mass.",
    "answer": "Mass is the invariant quantity of matter (measured in kg); weight is the gravitational force exerted on that mass (Wt = mg, measured in Newtons).",
    "explanation": "Mass is an intrinsic property of a physical body described by its energy equivalence (E = mc²) and remains constant anywhere in the universe. Weight is a force that depends directly on the local gravitational acceleration: Weight = mass × gravity (Wt = m × g). A 60-kg person has a mass of 60 kg on both Earth and the Moon, but weighs 588 N on Earth and only 96 N on the Moon."
  },
  {
    "id": "q1-4",
    "questionNumber": 4,
    "chapterNumber": 1,
    "question": "Name four examples of electromagnetic radiation.",
    "answer": "Radiofrequency waves, microwaves, visible light, and x-rays.",
    "explanation": "The electromagnetic spectrum consists of oscillating electric and magnetic fields traveling at the speed of light (3 × 10⁸ m/s). Examples include radio waves, microwaves, infrared radiation, visible light, ultraviolet light, x-rays, and gamma rays. Only ultraviolet, x-rays, and gamma rays possess sufficient photon energy to produce ionization in biological matter."
  },
  {
    "id": "q1-5",
    "questionNumber": 5,
    "chapterNumber": 1,
    "question": "How is x-ray interaction different from that seen in other types of electromagnetic radiation?",
    "answer": "X-rays have high enough photon energy to remove orbital electrons from atoms (ionization).",
    "explanation": "Unlike low-energy non-ionizing electromagnetic radiation (such as radio waves, microwaves, and visible light) which only cause molecular agitation or valence electron transitions, diagnostic x-rays have photon energies ranging from 20 to 150 keV. This energy exceeds the electron binding energy of human tissue atoms, enabling x-rays to ionize matter, eject orbital electrons, break molecular bonds, and cause biological damage."
  },
  {
    "id": "q1-6",
    "questionNumber": 6,
    "chapterNumber": 1,
    "question": "What is the purpose of x-ray beam filtration?",
    "answer": "To absorb low-energy x-rays before they reach the patient, reducing unnecessary patient skin dose.",
    "explanation": "Diagnostic x-ray beams are polyenergetic. Low-energy photons lack sufficient penetrability to pass through the patient to reach the image receptor; they would merely be absorbed in superficial tissues, contributing solely to patient skin exposure. Aluminum filters placed in the collimator absorb these low-energy photons, 'hardening' the beam and substantially reducing patient radiation dose."
  },
  {
    "id": "q1-7",
    "questionNumber": 7,
    "chapterNumber": 1,
    "question": "Describe the process that results in the formation of a negative ion and a positive ion.",
    "answer": "Ionization: An incident high-energy photon ejects an orbital electron (negative ion), leaving the remainder of the atom positively charged (positive ion).",
    "explanation": "When an ionizing x-ray photon collides with an orbital electron (such as via the photoelectric or Compton effect) and transfers energy exceeding the electron's binding energy, the electron is expelled from the atom. The free ejected electron is the negative ion, and the remaining atom, now having more protons than electrons, becomes a positive ion. Together they constitute an ion pair."
  },
  {
    "id": "q1-8",
    "questionNumber": 8,
    "chapterNumber": 1,
    "question": "What percentage of average radiation exposure to a human is attributable to medical x-rays?",
    "answer": "Approximately 50% (~3.2 mSv of the total ~6.2 mSv annual exposure).",
    "explanation": "According to NCRP Report No. 160, the average annual radiation exposure to the U.S. population is approximately 6.2 mSv (620 mrem). Natural background sources contribute ~3.0 mSv (48%), while medical imaging (computed tomography, fluoroscopy, nuclear medicine, and general radiography) contributes ~3.2 mSv (approximately 50% of the total collective dose)."
  },
  {
    "id": "q1-9",
    "questionNumber": 9,
    "chapterNumber": 1,
    "question": "What is the velocity of the mobile x-ray imaging system if the hospital elevator travels 20 m to the next floor in 30 s?",
    "answer": "0.67 m/s.",
    "explanation": "Velocity is defined as the rate of change of position with time: v = d / t. Here, distance d = 20 m and time t = 30 s. Therefore, v = 20 m / 30 s = 0.67 m/s (approx. 2.4 km/h)."
  },
  {
    "id": "q1-10",
    "questionNumber": 10,
    "chapterNumber": 1,
    "question": "A radiographer has a mass of 58 kg. What is her weight on Earth? On the moon?",
    "answer": "Earth weight = 568.4 N (~128 lb); Moon weight = 92.8 N (~21 lb).",
    "explanation": "Weight is calculated as Wt = m × g. On Earth (g = 9.8 m/s²): Wt = 58 kg × 9.8 m/s² = 568.4 Newtons (568.4 N / 4.45 N/lb = 127.7 lb). On the Moon, gravitational acceleration is approximately one-sixth of Earth's (g = 1.6 m/s²): Wt = 58 kg × 1.6 m/s² = 92.8 Newtons (approx. 20.9 lb)."
  },
  {
    "id": "q1-11",
    "questionNumber": 11,
    "chapterNumber": 1,
    "question": "The acronym ALARA stands for what, and what are the three cardinal principles of radiation control?",
    "answer": "As Low As Reasonably Achievable; Cardinal principles: Minimize Time, Maximize Distance, Use Shielding.",
    "explanation": "ALARA stands for As Low As Reasonably Achievable, taking into account economic and social factors. It represents the ethical and regulatory cornerstone of radiologic protection. The three cardinal principles are: (1) Minimize the time spent near radiation sources; (2) Maximize distance from radiation sources (governed by the inverse square law); and (3) Use structural and personal lead shielding."
  },
  {
    "id": "q1-12",
    "questionNumber": 12,
    "chapterNumber": 1,
    "question": "Name devices designed to minimize radiation exposure to the patient and the operator.",
    "answer": "Collimators, aluminum filtration, lead aprons, thyroid shields, gonadal shielding, and protective lead barriers.",
    "explanation": "Patient protection devices include variable-aperture beam collimators (restricting exposure strictly to the anatomy of interest), filtration (absorbing useless soft x-rays), gonad shields (contact or shadow shields), and high-speed image receptors. Operator protection devices include 0.5-mm lead-equivalent aprons, thyroid shields, lead glass viewing windows, mobile lead shields, and lead drapes/bucky slot covers on fluoroscopy towers."
  },
  {
    "id": "q1-13",
    "questionNumber": 13,
    "chapterNumber": 1,
    "question": "Liquid hydrogen with a boiling temperature of 77 K is used to cool some superconducting magnets. What is this temperature in degrees Celsius? In degrees Fahrenheit?",
    "answer": "-196.15°C and -321.07°F.",
    "explanation": "To convert Kelvin to Celsius: °C = K - 273.15 = 77 - 273.15 = -196.15°C. To convert Celsius to Fahrenheit: °F = (°C × 9/5) + 32 = (-196.15 × 1.8) + 32 = -353.07 + 32 = -321.07°F."
  },
  {
    "id": "q1-14",
    "questionNumber": 14,
    "chapterNumber": 1,
    "question": "What are the three natural sources of whole-body radiation exposure?",
    "answer": "Cosmic rays, terrestrial radiation, and internally deposited radionuclides.",
    "explanation": "Natural environmental radiation encompasses: (1) Cosmic radiation: high-energy particulate and photon emissions from the sun and deep space; (2) Terrestrial radiation: emissions from radionuclides naturally occurring in the Earth's crust (uranium, thorium, radium); and (3) Internally deposited radionuclides: natural isotopes metabolically incorporated into human tissue, predominantly Potassium-40 (⁴⁰K) and Carbon-14 (¹⁴C)."
  },
  {
    "id": "q1-15",
    "questionNumber": 15,
    "chapterNumber": 1,
    "question": "What naturally occurring radiation source is responsible for radiation dose to lung tissue?",
    "answer": "Radon gas (²²²Rn).",
    "explanation": "Radon is a radioactive gas produced by the natural decay of radium-226 (a daughter of uranium-238) found in soil, concrete, and brick. Radon emits alpha particles. When inhaled, radon and its decay progeny lodge in the tracheobronchial epithelium, delivering a concentrated local alpha dose responsible for the vast majority of natural background radiation exposure to human lungs."
  },
  {
    "id": "q1-16",
    "questionNumber": 16,
    "chapterNumber": 1,
    "question": "How would you define the term 'radiation'?",
    "answer": "Energy emitted and transferred through space or a medium.",
    "explanation": "Radiation is the transmission of energy through space in the form of electromagnetic waves or subatomic particles. Matter that intercepts radiation and absorbs part or all of it is said to be exposed or irradiated."
  },
  {
    "id": "q1-17",
    "questionNumber": 17,
    "chapterNumber": 1,
    "question": "What are the four special quantities of radiation measurement and their SI units?",
    "answer": "Exposure/Air kerma (Gya), Absorbed dose (Gyt), Effective/Equivalent dose (Sv), and Radioactivity (Bq).",
    "explanation": "The four fundamental radiologic quantities: (1) Exposure: Air kerma (Gya, kinetic energy transferred to electrons in air, customary unit: Roentgen, 1 R = 0.01 Gya); (2) Absorbed dose: Gray (Gyt, 1 J/kg in tissue, customary unit: rad, 1 rad = 0.01 Gyt); (3) Effective/Equivalent dose: Sievert (Sv, biological harm taking into account radiation type and tissue weighting factors, customary unit: rem, 1 rem = 0.01 Sv); and (4) Radioactivity: Becquerel (Bq, 1 disintegration/s, customary unit: Curie, 1 Ci = 3.7 × 10¹⁰ Bq)."
  },
  {
    "id": "q1-18",
    "questionNumber": 18,
    "chapterNumber": 1,
    "question": "Place the following in chronologic order of appearance: (a) Digital fluoroscopy, (b) American Society of Radiologic Technologists (ASRT), (c) Computed tomography (CT), (d) Radiographic grids, (e) Automatic film processing.",
    "answer": "Radiographic grids (1913/1921) -> ASRT (1920) -> Automatic film processing (1942) -> Computed tomography (1973) -> Digital fluoroscopy (1979).",
    "explanation": "Chronological history: 1913: Gustav Bucky invents the stationary grid (Hollis Potter added moving mechanism in 1921); 1920: American Association of Radiological Technicians (now ASRT) founded; 1942: Pako develops first automatic film processor; 1973: Godfrey Hounsfield introduces commercial computed tomography; 1979: Digital fluoroscopy introduced with computerized video processing."
  },
  {
    "id": "q1-19",
    "questionNumber": 19,
    "chapterNumber": 1,
    "question": "List five clinical skills required by the ARRT for certification as a radiographer.",
    "answer": "Accurate patient positioning, technical exposure factor selection, radiation protection enforcement, image quality evaluation, and radiographic equipment operation.",
    "explanation": "The ARRT Radiography Practice Standards mandate competence in: (1) Accurately positioning patients and anatomical parts relative to the central ray and receptor; (2) Selecting optimal technical exposure factors (kVp, mAs, SID, focal spot); (3) Implementing radiation safety protocols for patients, self, and team members; (4) Critically evaluating radiographic image quality and correcting technical errors; and (5) Operating and performing basic quality control on radiographic and digital imaging equipment."
  },
  {
    "id": "q1-20",
    "questionNumber": 20,
    "chapterNumber": 1,
    "question": "What are the three base units common to the SI and MKS systems of measurement?",
    "answer": "The meter (m) for length, the kilogram (kg) for mass, and the second (s) for time.",
    "explanation": "All physical measurements in the metric MKS system and the International System of Units (SI) are derived from the three fundamental base physical quantities: length (meter), mass (kilogram), and time (second). Every other mechanical quantity (such as velocity [m/s], force [N = kg·m/s²], and energy [J = kg·m²/s²]) is a derived quantity constructed from these three base units."
  }
]

CHAPTER_2_QUESTIONS = [
  {
    "id": "q2-1",
    "questionNumber": 1,
    "chapterNumber": 2,
    "question": "Define or otherwise identify the following: (a) Photon, (b) The Rutherford atom, (c) Positron, (d) Nucleons, (e) The arrangement of the periodic table of the elements, (f) Radioactive half-life, (g) W (chemical symbol for what element?), (h) Alpha particle, (i) K shell, (j) Chemical compound.",
    "answer": "Key atomic and nuclear physics terms.",
    "explanation": "(a) Photon: The smallest quantum or packet of electromagnetic energy, traveling at the speed of light. (b) Rutherford atom: 1911 atomic model describing a dense, positively charged central nucleus surrounded by a cloud of negative electrons. (c) Positron: An anti-electron having the same mass as an electron (9.1 × 10⁻³¹ kg) but bearing a positive charge (+1). (d) Nucleons: The constituents of the atomic nucleus, namely protons and neutrons. (e) Periodic table arrangement: Elements arranged in rows (periods) corresponding to the number of electron shells, and columns (groups) corresponding to the number of electrons in the outermost valence shell. (f) Radioactive half-life (T1/2): Time required for a quantity of radioactivity to decay to half of its original value. (g) W: Tungsten (Wolfram, Z=74). (h) Alpha particle: A helium nucleus composed of 2 protons and 2 neutrons (+2 charge). (i) K shell: The innermost electron orbital shell of an atom (n=1), possessing the highest binding energy. (j) Chemical compound: A new substance formed by the chemical combination of two or more different elements in definite proportions."
  },
  {
    "id": "q2-2",
    "questionNumber": 2,
    "chapterNumber": 2,
    "question": "Figure 2-1 shows the following approximate sizes: an atom, 10⁻¹⁰ m; the Earth, 10⁷ m. By how many orders of magnitude do these objects differ?",
    "answer": "17 orders of magnitude (a factor of 10¹⁷).",
    "explanation": "Orders of magnitude represent powers of 10. The difference is: 10⁷ m / 10⁻¹⁰ m = 10^(7 - (-10)) = 10¹⁷. Thus, the diameter of the Earth differs from that of an atom by 17 orders of magnitude (100 quadrillion times)."
  },
  {
    "id": "q2-3",
    "questionNumber": 3,
    "chapterNumber": 2,
    "question": "How many protons, neutrons, electrons, and nucleons are found in the following: (a) ¹⁶O, (b) ²⁷Al, (c) ⁶⁰Co, (d) ²²⁶Ra?",
    "answer": "Protons / Neutrons / Electrons / Nucleons: (a) ¹⁶O: 8, 8, 8, 16; (b) ²⁷Al: 13, 14, 13, 27; (c) ⁶⁰Co: 27, 33, 27, 60; (d) ²²⁶Ra: 88, 138, 88, 226.",
    "explanation": "Atomic number Z = protons = electrons in neutral atom. Mass number A = nucleons = protons + neutrons. Neutrons N = A - Z. For Oxygen (Z=8, A=16): 8p, 8n, 8e, 16 nucleons. For Aluminum (Z=13, A=27): 13p, 14n, 13e, 27 nucleons. For Cobalt (Z=27, A=60): 27p, 33n, 27e, 60 nucleons. For Radium (Z=88, A=226): 88p, 138n, 88e, 226 nucleons."
  },
  {
    "id": "q2-4",
    "questionNumber": 4,
    "chapterNumber": 2,
    "question": "Using the data in Table 2-1, determine the mass of ⁹⁹Tc in atomic mass units and in kilograms.",
    "answer": "Approximately 98.9 amu and 1.64 × 10⁻²⁵ kg.",
    "explanation": "One atomic mass unit (amu) is equal to 1.6605 × 10⁻²⁷ kg. Technetium-99 has a nominal mass number of 99 amu. In kilograms: 98.9 amu × 1.6605 × 10⁻²⁷ kg/amu = 1.642 × 10⁻²⁵ kg."
  },
  {
    "id": "q2-5",
    "questionNumber": 5,
    "chapterNumber": 2,
    "question": "Diagram the expected electron configuration of Zirconium (⁴⁰Zr).",
    "answer": "K=2, L=8, M=18, N=10, O=2.",
    "explanation": "Zirconium has atomic number Z = 40. Electrons fill the shells according to maximum capacity 2n² and the octet rule for outer shells: K (n=1) = 2; L (n=2) = 8; M (n=3) = 18; N (n=4) = 10; O (n=5) = 2. Total electrons = 2 + 8 + 18 + 10 + 2 = 40."
  },
  {
    "id": "q2-6",
    "questionNumber": 6,
    "chapterNumber": 2,
    "question": "If atoms large enough to have electrons in the T shell existed, what would be the maximum number allowed in that shell?",
    "answer": "200 electrons.",
    "explanation": "Orbital shells are lettered K(n=1), L(n=2), M(n=3), N(n=4), O(n=5), P(n=6), Q(n=7), R(n=8), S(n=9), T(n=10). By the 2n² formula, for the T shell where principal quantum number n = 10: Maximum electron capacity = 2 × (10)² = 2 × 100 = 200 electrons."
  },
  {
    "id": "q2-7",
    "questionNumber": 7,
    "chapterNumber": 2,
    "question": "How much more tightly bound are K-shell electrons in tungsten than (a) L-shell electrons, (b) M-shell electrons, and (c) free electrons?",
    "answer": "(a) 57.4 keV more, (b) 66.7 keV more, (c) 69.5 keV more.",
    "explanation": "In Tungsten (Z=74): K-shell binding energy = 69.5 keV; L-shell = 12.1 keV; M-shell = 2.8 keV; free electron = 0 keV. (a) Difference with L-shell: 69.5 - 12.1 = 57.4 keV; (b) Difference with M-shell: 69.5 - 2.8 = 66.7 keV; (c) Difference with free electron: 69.5 - 0 = 69.5 keV."
  },
  {
    "id": "q2-8",
    "questionNumber": 8,
    "chapterNumber": 2,
    "question": "From a list of nuclides, differentiate isotopes, isobars, isotones, and isomers.",
    "answer": "Isotopes have same Z (protons); Isobars have same A (mass number); Isotones have same N (neutrons); Isomers have same Z and A in different nuclear energy states.",
    "explanation": "Mnemonic guides: IsoTope: same p (protons/Z); IsoBar: same a (atomic mass number A); IsoTone: same n (neutrons); IsoMer: same everything, metastable nuclear state (e.g. ⁹⁹ᵐTc vs ⁹⁹Tc)."
  },
  {
    "id": "q2-9",
    "questionNumber": 9,
    "chapterNumber": 2,
    "question": "⁹⁰Sr has a half-life of 29 years. If 10 MBq were present in 1950, approximately how much would remain in 2010?",
    "answer": "Approximately 2.37 MBq.",
    "explanation": "Elapsed time t = 2010 - 1950 = 60 years. Number of half-lives n = t / T1/2 = 60 / 29 = 2.069 half-lives. Remaining activity A = A0 × (1/2)^n = 10 MBq × (0.5)^2.069 = 10 × 0.238 = 2.38 MBq."
  },
  {
    "id": "q2-10",
    "questionNumber": 10,
    "chapterNumber": 2,
    "question": "Compare alpha, beta, and gamma radiation regarding mass, charge, and origin.",
    "answer": "Alpha: 4 amu, +2, nuclear; Beta: 0.00055 amu, -1, nuclear; Gamma: 0 mass, 0 charge, nuclear.",
    "explanation": "Alpha particles are helium nuclei (2 protons, 2 neutrons, mass ~4 amu, charge +2) emitted from radioactive heavy nuclei. Beta particles are high-speed electrons (mass = 1/2000 amu, charge -1) emitted from unstable nuclei during neutron decay. Gamma rays are electromagnetic photons (mass 0, charge 0) emitted from excited nuclear states."
  },
  {
    "id": "q2-11",
    "questionNumber": 11,
    "chapterNumber": 2,
    "question": "For what is Dmitri Mendeleev remembered in physical science?",
    "answer": "Devising the first periodic table of chemical elements in 1869.",
    "explanation": "Russian chemist Dmitri Mendeleev organized the known elements in order of increasing atomic mass and demonstrated that elements with similar chemical valence and properties appear at periodic intervals, forming the foundation of the modern Periodic Table of the Elements."
  },
  {
    "id": "q2-12",
    "questionNumber": 12,
    "chapterNumber": 2,
    "question": "Who developed the concept of the atom as a miniature solar system?",
    "answer": "Niels Bohr in 1913.",
    "explanation": "Niels Bohr improved upon Rutherford's nuclear model by proposing that electrons revolve around the central positive nucleus only in specific, quantized circular orbits or energy levels (shells), analogous to planets orbiting the sun."
  },
  {
    "id": "q2-13",
    "questionNumber": 13,
    "chapterNumber": 2,
    "question": "List the fundamental particles within an atom.",
    "answer": "The electron, the proton, and the neutron.",
    "explanation": "The proton (mass 1.673 × 10⁻²⁷ kg, charge +1) and neutron (mass 1.675 × 10⁻²⁷ kg, charge 0) are nucleons residing in the central nucleus. The electron (mass 9.109 × 10⁻³¹ kg, charge -1) orbits in defined shells outside the nucleus."
  },
  {
    "id": "q2-14",
    "questionNumber": 14,
    "chapterNumber": 2,
    "question": "What property of an atom does binding energy describe?",
    "answer": "The strength of electrostatic attachment holding an electron in its orbital shell.",
    "explanation": "Electron binding energy represents the amount of energy required to completely remove an electron from its orbital shell against the centripetal electrostatic attraction of the positive nucleus. Inner-shell electrons (K shell) in high-Z elements have the highest binding energy."
  },
  {
    "id": "q2-15",
    "questionNumber": 15,
    "chapterNumber": 2,
    "question": "Can atoms be ionized by changing the number of positive charges (protons)?",
    "answer": "No. Ionization involves adding or removing orbital electrons; changing protons alters the atomic number Z and transmutes the element.",
    "explanation": "Ionization is strictly the gain or loss of orbital electrons from the electron cloud. Altering the number of nuclear protons changes the elemental identity (nuclear transmutation) rather than ionizing the existing atom."
  },
  {
    "id": "q2-16",
    "questionNumber": 16,
    "chapterNumber": 2,
    "question": "Describe how ion pairs are formed.",
    "answer": "An incident ionizing photon or particle transfers energy to an orbital electron, ejecting it and leaving behind a positive ion.",
    "explanation": "When ionizing radiation interacts with an atom with energy exceeding the electron's binding energy, an orbital electron is ejected. The free negative electron and the remaining positive atom are collectively referred to as an ion pair."
  },
  {
    "id": "q2-17",
    "questionNumber": 17,
    "chapterNumber": 2,
    "question": "What determines the chemical properties of an element?",
    "answer": "The number and arrangement of valence electrons in the outermost electron shell.",
    "explanation": "The valence shell electrons govern how an atom bonds with other atoms (ionic or covalent bonding). Elements sharing the same number of outer-shell valence electrons belong to the same group in the periodic table and share similar chemical reactivities."
  },
  {
    "id": "q2-18",
    "questionNumber": 18,
    "chapterNumber": 2,
    "question": "Why doesn't an orbital electron spontaneously fly away from the nucleus of an atom?",
    "answer": "The centripetal electrostatic attraction between the positive nucleus and negative electron balances the centrifugal force of orbital motion.",
    "explanation": "The positive electrical charge of nuclear protons attracts the negatively charged orbital electrons with a Coulomb force (centripetal force) that precisely counteracts the centrifugal force resulting from the electron's orbital velocity, maintaining stable orbits."
  },
  {
    "id": "q2-19",
    "questionNumber": 19,
    "chapterNumber": 2,
    "question": "Describe the difference between alpha and beta emission.",
    "answer": "Alpha emission ejects a 4-amu helium nucleus (+2); beta emission ejects a high-speed electron (-1) converted from a nuclear neutron.",
    "explanation": "Alpha decay occurs in heavy radionuclides, ejecting 2 protons and 2 neutrons, decreasing atomic number Z by 2 and mass number A by 4. Beta decay occurs in neutron-rich nuclei: a neutron converts into a proton, an antineutrino, and an electron (beta particle), increasing atomic number Z by 1 while leaving mass number A unchanged."
  },
  {
    "id": "q2-20",
    "questionNumber": 20,
    "chapterNumber": 2,
    "question": "How does carbon-14 dating determine the age of petrified wood or organic artifacts?",
    "answer": "By measuring the ratio of remaining radioactive ¹⁴C (T1/2 = 5730 yrs) to stable ¹²C.",
    "explanation": "Living organic matter continuously exchanges carbon with the atmosphere, maintaining a constant ¹⁴C/¹²C ratio. When the organism dies, carbon intake ceases and ¹⁴C decays radioactively with a half-life of 5730 years. Comparing the residual ¹⁴C activity to modern organic material allows calculation of the elapsed time since death."
  }
]

CHAPTER_3_QUESTIONS = [
  {
    "id": "q3-1",
    "questionNumber": 1,
    "chapterNumber": 3,
    "question": "Define or otherwise identify the following: (a) Photon, (b) Radiolucency, (c) The inverse square law, (d) Frequency, (e) Law of conservation of energy, (f) Gamma ray, (g) Electromagnetic spectrum, (h) Sinusoidal variation, (i) Quantum, (j) Visible light.",
    "answer": "Core electromagnetic physics concepts.",
    "explanation": "(a) Photon: An unbroken bundle of electromagnetic energy that travels at the speed of light. (b) Radiolucency: The property of tissues or materials that transmit x-rays easily, appearing dark or black on radiographs (e.g. lung, air). (c) Inverse square law: Radiation intensity is inversely proportional to the square of the distance from the source: I1/I2 = (d2/d1)². (d) Frequency (f): The number of wavelengths or wave cycles that pass a given point per second, measured in Hertz (Hz). (e) Law of conservation of energy: Energy can neither be created nor destroyed, only transformed from one form to another. (f) Gamma ray: High-energy electromagnetic radiation emitted from the nucleus of a radioisotope. (g) Electromagnetic spectrum: The complete continuum of electromagnetic radiation from radio waves to gamma rays. (h) Sinusoidal variation: Mathematical sine wave pattern describing the oscillating amplitude of electric and magnetic fields. (i) Quantum: An individual discrete packet of electromagnetic energy. (j) Visible light: Electromagnetic radiation within the 400 nm (violet) to 700 nm (red) range detectable by the human eye."
  },
  {
    "id": "q3-2",
    "questionNumber": 2,
    "chapterNumber": 3,
    "question": "Accurately diagram one photon of orange light (lambda = 620 nm) and identify its velocity, electric field, magnetic field, and wavelength.",
    "answer": "Transverse wave oscillating at velocity c = 3 × 10⁸ m/s with mutually perpendicular electric and magnetic vectors and wavelength 620 nm.",
    "explanation": "An electromagnetic photon consists of an electric field oscillating vertically and a magnetic field oscillating horizontally, perpendicular to each other and perpendicular to the direction of propagation. Velocity c = 3 × 10⁸ m/s, and the peak-to-peak wavelength λ = 620 × 10⁻⁹ m."
  },
  {
    "id": "q3-3",
    "questionNumber": 3,
    "chapterNumber": 3,
    "question": "A thunderclap associated with lightning has a frequency of 800 Hz. If its wavelength is 50 cm, what is its velocity? How far away is the thunder if the time interval between seeing lightning and hearing thunder is 6 s?",
    "answer": "Velocity = 400 m/s; Distance = 2400 m (2.4 km).",
    "explanation": "Velocity v = frequency × wavelength = 800 Hz × 0.5 m = 400 m/s. Because light travels virtually instantaneously, the distance to the lightning strike is d = v × t = 400 m/s × 6 s = 2400 meters (2.4 km or ~1.5 miles)."
  },
  {
    "id": "q3-4",
    "questionNumber": 4,
    "chapterNumber": 3,
    "question": "What is the frequency associated with a photon of microwave radiation that has a wavelength of 10⁻³ m (1 mm)?",
    "answer": "3 × 10¹¹ Hz (300 GHz).",
    "explanation": "Using the electromagnetic wave equation c = f × λ: f = c / λ = (3 × 10⁸ m/s) / (10⁻³ m) = 3 × 10¹¹ Hz (300 GHz)."
  },
  {
    "id": "q3-5",
    "questionNumber": 5,
    "chapterNumber": 3,
    "question": "Radio station WIMP-FM broadcasts at 104 MHz. What is the wavelength of this radiation?",
    "answer": "2.88 meters.",
    "explanation": "Frequency f = 104 MHz = 104 × 10⁶ Hz. Wavelength λ = c / f = (3 × 10⁸ m/s) / (104 × 10⁶ s⁻¹) = 2.88 meters."
  },
  {
    "id": "q3-6",
    "questionNumber": 6,
    "chapterNumber": 3,
    "question": "In mammography, 26-keV x-rays are used. What is the frequency of this radiation?",
    "answer": "6.28 × 10¹⁸ Hz.",
    "explanation": "Photon energy E = 26 keV = 26,000 eV × 1.6 × 10⁻¹⁹ J/eV = 4.16 × 10⁻¹⁵ Joules. Using Planck's equation E = h × f: f = E / h = (4.16 × 10⁻¹⁵ J) / (6.626 × 10⁻³⁴ J·s) = 6.28 × 10¹⁸ Hz."
  },
  {
    "id": "q3-7",
    "questionNumber": 7,
    "chapterNumber": 3,
    "question": "Radiography of a barium-filled colon calls for high-kVp technique. These x-rays can have an energy of 110 keV. What is the frequency and wavelength of this radiation?",
    "answer": "Frequency = 2.66 × 10¹⁹ Hz; Wavelength = 0.0113 nm (1.13 × 10⁻¹¹ m).",
    "explanation": "E = 110 keV = 1.76 × 10⁻¹⁴ J. Frequency f = E / h = 1.76 × 10⁻¹⁴ / 6.626 × 10⁻³⁴ = 2.66 × 10¹⁹ Hz. Wavelength λ = c / f = 3 × 10⁸ / 2.66 × 10¹⁹ = 1.13 × 10⁻¹¹ m = 0.0113 nm."
  },
  {
    "id": "q3-8",
    "questionNumber": 8,
    "chapterNumber": 3,
    "question": "What is the energy of the 110-keV x-ray in question 7 when expressed in joules? What is its mass equivalence?",
    "answer": "Energy = 1.76 × 10⁻¹⁴ J; Mass equivalence = 1.96 × 10⁻³¹ kg.",
    "explanation": "Energy in Joules = 110,000 eV × 1.602 × 10⁻¹⁹ J/eV = 1.762 × 10⁻¹⁴ J. Mass equivalence from Einstein's equation m = E / c²: m = 1.762 × 10⁻¹⁴ J / (3 × 10⁸ m/s)² = 1.762 × 10⁻¹⁴ / 9 × 10¹⁶ = 1.96 × 10⁻³¹ kg (approx. 1/5th the rest mass of an electron)."
  },
  {
    "id": "q3-9",
    "questionNumber": 9,
    "chapterNumber": 3,
    "question": "The output intensity of a normal radiographic imaging system is 0.05 mGya/mAs at 100 cm. What is the output intensity of such a system at 200 cm?",
    "answer": "0.0125 mGya/mAs.",
    "explanation": "Applying the inverse square law: I2 = I1 × (d1 / d2)² = 0.05 × (100 / 200)² = 0.05 × (1/2)² = 0.05 / 4 = 0.0125 mGya/mAs. Doubling the distance reduces exposure intensity to one-fourth."
  },
  {
    "id": "q3-10",
    "questionNumber": 10,
    "chapterNumber": 3,
    "question": "A mobile x-ray imaging system has an output intensity of 0.04 mGya at 100 cm. Conditions require that a particular examination be conducted at 75 cm SID. What will be the output intensity at this distance?",
    "answer": "0.071 mGya (71 µGya).",
    "explanation": "I2 = I1 × (d1 / d2)² = 0.04 mGya × (100 / 75)² = 0.04 × (1.333)² = 0.04 × 1.778 = 0.0711 mGya."
  },
  {
    "id": "q3-11",
    "questionNumber": 11,
    "chapterNumber": 3,
    "question": "Write the wave equation and explain its variables.",
    "answer": "v = f × λ (for electromagnetic radiation: c = f × λ).",
    "explanation": "Velocity (v or c) equals frequency (f) multiplied by wavelength (λ). For all electromagnetic radiation traveling in vacuum or air, velocity is constant at c = 3 × 10⁸ m/s."
  },
  {
    "id": "q3-12",
    "questionNumber": 12,
    "chapterNumber": 3,
    "question": "How are frequency and wavelength related across the electromagnetic spectrum?",
    "answer": "They are inversely proportional (as frequency increases, wavelength decreases).",
    "explanation": "Because the product of frequency and wavelength equals the constant speed of light (c = fλ), higher-energy photons with higher frequencies must possess correspondingly shorter wavelengths."
  },
  {
    "id": "q3-13",
    "questionNumber": 13,
    "chapterNumber": 3,
    "question": "Write the inverse square law and describe its meaning in radiation protection.",
    "answer": "I1 / I2 = (d2 / d1)²; Radiation intensity decreases with the square of the distance from the source.",
    "explanation": "Radiation spreading outward from a point source covers an area proportional to the square of the distance. Doubling the distance from an x-ray tube reduces dose rate to 25%; tripling distance reduces it to 11.1%. Distance is the most potent and cost-effective radiation protection tool."
  },
  {
    "id": "q3-14",
    "questionNumber": 14,
    "chapterNumber": 3,
    "question": "The intensity of light from a reading lamp is 200 millilumens (mlm) at a distance of 2 meters. What is the intensity of light at 3 m?",
    "answer": "88.9 millilumens (mlm).",
    "explanation": "I2 = I1 × (d1 / d2)² = 200 mlm × (2 / 3)² = 200 × (4 / 9) = 88.89 mlm."
  },
  {
    "id": "q3-15",
    "questionNumber": 15,
    "chapterNumber": 3,
    "question": "What are the three imaging windows of the electromagnetic spectrum, and what unit of measure is applied to each?",
    "answer": "Radiofrequency (frequency in Hz), Visible light (wavelength in nm), and X-radiation (energy in eV/keV).",
    "explanation": "Medical imaging utilizes three distinct regions of the electromagnetic spectrum: (1) Radiofrequency: used in MRI, characterized by frequency (megahertz, MHz); (2) Visible light: used in optical microscopy and endoscopy, characterized by wavelength (nanometers, nm); and (3) X-radiation: used in radiography, CT, and fluoroscopy, characterized by photon energy (kiloelectron volts, keV)."
  },
  {
    "id": "q3-16",
    "questionNumber": 16,
    "chapterNumber": 3,
    "question": "What is the energy range of diagnostic x-rays?",
    "answer": "20 keV to 150 keV.",
    "explanation": "Diagnostic medical radiography utilizes photon energies ranging from 20 keV (in low-kVp mammography) up to 150 keV (in high-kVp chest radiography and computed tomography)."
  },
  {
    "id": "q3-17",
    "questionNumber": 17,
    "chapterNumber": 3,
    "question": "What is the difference between x-rays and gamma rays?",
    "answer": "Their origin: x-rays originate from the electron cloud; gamma rays originate from inside the nucleus.",
    "explanation": "X-rays and gamma rays with identical energies have identical physical properties and interactions. The sole distinction is origin: x-rays are produced in the electron shells of atoms or via bremsstrahlung deceleration outside the nucleus, whereas gamma rays are emitted during radioactive nuclear transitions from within the atomic nucleus."
  },
  {
    "id": "q3-18",
    "questionNumber": 18,
    "chapterNumber": 3,
    "question": "Some regions of the electromagnetic spectrum behave like waves, and some regions behave like particles in their interaction with matter. What is this phenomenon called?",
    "answer": "Wave-particle duality.",
    "explanation": "Low-energy electromagnetic radiation (radio, light) interacts primarily as waves (showing refraction, interference, and diffraction), whereas high-energy photons (x-rays, gamma rays) interact primarily as discrete particulate bundles of energy (photoelectric absorption, Compton collision)."
  },
  {
    "id": "q3-19",
    "questionNumber": 19,
    "chapterNumber": 3,
    "question": "Define attenuation.",
    "answer": "The reduction in radiation intensity that results from absorption and scattering as x-rays traverse matter.",
    "explanation": "Attenuation is the total loss of photons from the primary beam caused by both photoelectric absorption (photons completely captured) and Compton scatter (photons deflected out of the beam path)."
  },
  {
    "id": "q3-20",
    "questionNumber": 20,
    "chapterNumber": 3,
    "question": "What is the frequency of a 70-keV x-ray photon?",
    "answer": "1.69 × 10¹⁹ Hz.",
    "explanation": "E = 70,000 eV × 1.602 × 10⁻¹⁹ J/eV = 1.121 × 10⁻¹⁴ J. Frequency f = E / h = 1.121 × 10⁻¹⁴ J / 6.626 × 10⁻³⁴ J·s = 1.692 × 10¹⁹ Hz."
  }
]

CHAPTER_4_QUESTIONS = [
  {
    "id": "q4-1",
    "questionNumber": 1,
    "chapterNumber": 4,
    "question": "Define or otherwise identify the following: (a) Electric charge and its unit, (b) Electrodynamics, (c) Electric power, (d) Electrostatics, (e) Dipole, (f) Induction, (g) Magnetic domain, (h) Autotransformer, (i) Gauss and Tesla, (j) Electric potential.",
    "answer": "Fundamental electricity, magnetism, and electromagnetism concepts.",
    "explanation": "(a) Electric charge: Intrinsic atomic property of protons (+) and electrons (-); unit is the Coulomb (C = 6.3 × 10¹⁸ charges). (b) Electrodynamics: The science of electric charges in motion (electricity). (c) Electric power: Rate of electric energy consumption: P = IV = I²R, measured in Watts (W). (d) Electrostatics: The study of stationary electric charges. (e) Dipole: An object with two opposite magnetic poles (North and South) or electric charges. (f) Induction: Electrification or magnetization of an object produced without physical contact by proximity to an electric or magnetic field. (g) Magnetic domain: A localized microscopic region within ferromagnetic material where billions of atomic magnetic dipoles are aligned in parallel. (h) Autotransformer: Single-winding transformer operating on self-induction that supplies variable voltage to the high-voltage section. (i) Gauss and Tesla: Units of magnetic field strength; 1 Tesla (T) = 10,000 Gauss (G). (j) Electric potential: Electric potential energy per unit charge; unit is the Volt (1 V = 1 J/C)."
  },
  {
    "id": "q4-2",
    "questionNumber": 2,
    "chapterNumber": 4,
    "question": "What is the total circuit resistance when resistive elements of 5, 10, 15, and 20 Ω are connected in (a) series and (b) parallel?",
    "answer": "(a) Series = 50 Ω; (b) Parallel = 2.4 Ω.",
    "explanation": "(a) In series: R_total = R1 + R2 + R3 + R4 = 5 + 10 + 15 + 20 = 50 Ω. (b) In parallel: 1/R_total = 1/5 + 1/10 + 1/15 + 1/20 = 12/60 + 6/60 + 4/60 + 3/60 = 25/60. R_total = 60 / 25 = 2.4 Ω. Total resistance in parallel is always less than the smallest individual resistor."
  },
  {
    "id": "q4-3",
    "questionNumber": 3,
    "chapterNumber": 4,
    "question": "If the total current in the circuit in question 2 is 7 A, what is the voltage across the 10-Ω resistor for (a) series and (b) parallel operation?",
    "answer": "(a) Series = 70 V; (b) Parallel = 16.8 V.",
    "explanation": "(a) In series, current is uniform across all elements (I = 7 A): V = I × R = 7 A × 10 Ω = 70 V. (b) In parallel, total voltage across the circuit is V_total = I_total × R_total = 7 A × 2.4 Ω = 16.8 V. In parallel, voltage is identical across every branch, so the voltage across the 10-Ω resistor is 16.8 V."
  },
  {
    "id": "q4-4",
    "questionNumber": 4,
    "chapterNumber": 4,
    "question": "A radiographic exposure requires 100 mAs. How many electrons is this?",
    "answer": "6.25 × 10¹⁷ electrons.",
    "explanation": "Current is charge per unit time: 1 A = 1 C/s. Therefore, 100 mAs = 0.1 A × 1 s = 0.1 Coulomb. One Coulomb equals 6.25 × 10¹⁸ electrons. Total electrons = 0.1 C × 6.25 × 10¹⁸ electrons/C = 6.25 × 10¹⁷ electrons."
  },
  {
    "id": "q4-5",
    "questionNumber": 5,
    "chapterNumber": 4,
    "question": "Describe three types of transformers used in electrical and imaging systems.",
    "answer": "Step-up transformer, step-down transformer, and autotransformer.",
    "explanation": "(1) Step-up transformer: has more secondary than primary turns (turns ratio > 1), stepping up voltage to kilovolts while reducing amperage; (2) Step-down transformer: has fewer secondary than primary turns (turns ratio < 1), stepping down voltage to ~10-12 V while increasing filament current to 3-6 A; (3) Autotransformer: single tapped winding that provides variable secondary voltage through self-induction."
  },
  {
    "id": "q4-6",
    "questionNumber": 6,
    "chapterNumber": 4,
    "question": "What are the three ways to electrify an object?",
    "answer": "Friction, contact, and induction.",
    "explanation": "(1) Friction: mechanical rubbing transfers electrons from one object to another (e.g. shoes on carpet); (2) Contact: physical touch transfers charge directly between bodies until potentials equalize; (3) Induction: uncharged conductive object placed within an electric field has charges displaced without physical touch."
  },
  {
    "id": "q4-7",
    "questionNumber": 7,
    "chapterNumber": 4,
    "question": "List the four fundamental laws of electrostatics.",
    "answer": "(1) Like charges repel, unlike attract; (2) Coulomb's inverse square law; (3) Charge resides on external surfaces of conductors; (4) Charge concentrates at maximum surface curvature.",
    "explanation": "(1) Electrostatic force is repulsive between like charges and attractive between opposite charges; (2) Force is proportional to product of charges and inversely proportional to the square of distance (F = k·q1·q2/d²); (3) In solid conductors, excess charges distribute exclusively over the outer perimeter; (4) Charges concentrate most densely where curvature is sharpest (e.g. lightning rod)."
  },
  {
    "id": "q4-8",
    "questionNumber": 8,
    "chapterNumber": 4,
    "question": "Why is static electrification easier in dry Phoenix than in humid Houston?",
    "answer": "Dry air is an electrical insulator that retains charge, whereas humid air contains water molecules that dissipate charge.",
    "explanation": "Water vapor in humid air condenses as a microscopic film on surfaces, making them slightly conductive and allowing static charges to bleed off into the atmosphere. In dry climates, the lack of humidity preserves electrical insulation, allowing electrostatic charges to accumulate to high potentials."
  },
  {
    "id": "q4-9",
    "questionNumber": 9,
    "chapterNumber": 4,
    "question": "A mobile x-ray imaging system operates on 110 V AC power. Its maximum capacity is 110 kVp and 100 mA. What is the turns ratio of the high-voltage transformer?",
    "answer": "1000:1.",
    "explanation": "By the transformer law: Vs / Vp = Ns / Np. Here, peak secondary voltage Vs = 110 kV = 110,000 V, and primary supply voltage Vp = 110 V. Turns ratio = 110,000 / 110 = 1000:1."
  },
  {
    "id": "q4-10",
    "questionNumber": 10,
    "chapterNumber": 4,
    "question": "What should be the primary current in the previous question to produce a secondary current of 100 mA?",
    "answer": "100 Amperes (100,000 mA).",
    "explanation": "Because power is conserved across an ideal transformer (Vp × Ip = Vs × Is): Ip / Is = Ns / Np. Therefore, Ip = Is × (Ns / Np) = 100 mA × 1000 = 100,000 mA = 100 A."
  },
  {
    "id": "q4-11",
    "questionNumber": 11,
    "chapterNumber": 4,
    "question": "Magnetic fields in excess of 5 Gauss can interfere with cardiac pacemakers. How many millitesla (mT) is this?",
    "answer": "0.5 mT.",
    "explanation": "1 Tesla = 10,000 Gauss. Therefore, 1 Gauss = 0.0001 T = 0.1 mT. A 5-Gauss field equals 5 × 0.1 mT = 0.5 mT. (The 5-Gauss line defines the safety perimeter around MRI scanners)."
  },
  {
    "id": "q4-12",
    "questionNumber": 12,
    "chapterNumber": 4,
    "question": "What is the role of magnetism in the study of x-ray imaging systems?",
    "answer": "Electromagnetism powers high-voltage transformers, filament transformers, autotransformers, and induction motors for rotating anodes.",
    "explanation": "X-ray equipment relies on electromagnetic induction for transforming line voltage into kilovoltage, stepping down voltage for filament heating, and rotating the heavy copper/tungsten anode disc at 3,400 to 10,000 rpm via an external stator induction motor."
  },
  {
    "id": "q4-13",
    "questionNumber": 13,
    "chapterNumber": 4,
    "question": "List the three principal types of magnets.",
    "answer": "Naturally occurring magnets, artificially induced permanent magnets, and electromagnets.",
    "explanation": "(1) Natural magnets: earth and magnetite (lodestone); (2) Permanent artificial magnets: manufactured alloys of aluminum, nickel, and cobalt (alnico) or neodymium; (3) Electromagnets: temporary magnets consisting of a current-carrying wire coil wrapped around a soft iron core."
  },
  {
    "id": "q4-14",
    "questionNumber": 14,
    "chapterNumber": 4,
    "question": "Describe the physical construction and operation of an electromagnet.",
    "answer": "A solenoid (insulated wire coil) carrying electric current wrapped around a ferromagnetic core that generates a magnetic field only while current flows.",
    "explanation": "When an electric current flows through a helical wire coil (solenoid), it creates an internal magnetic field. Inserting a soft iron core intensifies the magnetic field lines hundreds of times by aligning the iron's magnetic domains. The magnetic field can be instantly toggled on or off by controlling the electrical current."
  },
  {
    "id": "q4-15",
    "questionNumber": 15,
    "chapterNumber": 4,
    "question": "Explain how a magnetic domain can cause an object to behave like a magnet.",
    "answer": "Alignment of microscopic magnetic dipoles into synchronized domains produces net macroscopic magnetic poles.",
    "explanation": "Individual electrons exhibit magnetic spin dipoles. In non-magnetized ferromagnetic iron, these dipoles form microscopic domains pointing in random orientations, canceling each other out. When exposed to an external magnetic field, the domains rotate into mutual parallel alignment, reinforcing each other and creating net North and South magnetic poles."
  },
  {
    "id": "q4-16",
    "questionNumber": 16,
    "chapterNumber": 4,
    "question": "State Ohm's law and describe its effect on electric circuits.",
    "answer": "V = I × R; Voltage equals current multiplied by resistance.",
    "explanation": "Ohm's law defines the relationship among potential difference (V, volts), current (I, amperes), and resistance (R, ohms). It demonstrates that electric current is directly proportional to voltage and inversely proportional to resistance. If resistance doubles at constant voltage, current drops by half."
  },
  {
    "id": "q4-17",
    "questionNumber": 17,
    "chapterNumber": 4,
    "question": "What happens when a bar magnet is heated to a very high temperature?",
    "answer": "It loses its magnetism because thermal agitation disrupts the alignment of magnetic domains (Curie point).",
    "explanation": "Excess thermal energy causes intense, randomized kinetic motion of atoms within the metal lattice. Above the Curie temperature (770°C for iron), this agitation shatters the parallel alignment of magnetic domains, causing the permanent magnet to lose its macroscopic magnetization."
  },
  {
    "id": "q4-18",
    "questionNumber": 18,
    "chapterNumber": 4,
    "question": "List three diamagnetic materials.",
    "answer": "Water, plastic, copper, and bismuth.",
    "explanation": "Diamagnetic materials are unaffected or very weakly repelled by magnetic field lines because they have no unpaired orbital electrons to create magnetic dipoles. Examples include water, copper, bismuth, lead, and plastic."
  },
  {
    "id": "q4-19",
    "questionNumber": 19,
    "chapterNumber": 4,
    "question": "Where in everyday life might one find an electromagnet?",
    "answer": "Doorbell chimes, circuit breakers, audio speakers, electric motors, and computer hard drive actuators.",
    "explanation": "Electromagnets provide mechanical motion from electrical signals in doorbells (solenoids striking a chime bar), audio speakers (voice coils oscillating in magnetic fields), electromagnetic relays, washing machine valves, and power door locks."
  },
  {
    "id": "q4-20",
    "questionNumber": 20,
    "chapterNumber": 4,
    "question": "What is the range in intensity of the Earth's natural magnetic field?",
    "answer": "Approximately 0.03 to 0.06 mT (0.3 to 0.6 Gauss).",
    "explanation": "The Earth behaves as a giant magnetic dipole generated by molten iron currents in its outer core. Magnetic field intensity varies from approximately 0.03 mT (0.3 Gauss) near the equator to 0.06 mT (0.6 Gauss) at the magnetic poles. (For comparison, an MRI magnet of 1.5 T is 30,000 times stronger than Earth's field)."
  }
]

print("Part 1 questions ready: Chapters 1, 2, 3, 4 (80 questions total).")

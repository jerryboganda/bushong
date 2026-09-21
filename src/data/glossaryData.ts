export interface GlossaryItem {
  term: string;
  definition: string;
  category: 'Physics' | 'Equipment' | 'Image Quality' | 'Digital Imaging' | 'Radiobiology' | 'Radiation Protection' | 'General';
  units?: string;
  letter: string;
}

export const BUSHONG_GLOSSARY: GlossaryItem[] = [
  {
    "term": "1% voltage ripple",
    "definition": "High-frequency generators that have higher x-ray quantity and quality.",
    "category": "Equipment",
    "letter": "#"
  },
  {
    "term": "100% voltage ripple",
    "definition": "Single-phase power in which the voltage varies from zero to its maximum value.",
    "category": "Equipment",
    "letter": "#"
  },
  {
    "term": "14% ripple",
    "definition": "Three-phase, six-pulse power whose voltage supplied to the x-ray tube never falls below 86% of peak value.",
    "category": "Equipment",
    "letter": "#"
  },
  {
    "term": "4% voltage ripple",
    "definition": "Three-phase, 12-pulse power whose voltage supplied to the x-ray tube never falls below 96% of peak value.",
    "category": "Equipment",
    "letter": "#"
  },
  {
    "term": "Abrasion layer",
    "definition": "Protective covering of gelatin that encloses an emulsion.",
    "category": "Image Quality",
    "letter": "A"
  },
  {
    "term": "Absolute age-response relationship",
    "definition": "Increased incidence of a disease; constant number of cases after a minimal latent period.",
    "category": "Digital Imaging",
    "letter": "A"
  },
  {
    "term": "Absolute risk",
    "definition": "Incidence of malignant disease in a population within 1 year for a given dose; expressed as number of cases/10° persons/rem.",
    "category": "Radiation Protection",
    "letter": "A"
  },
  {
    "term": "Absorbed dose",
    "definition": "a. Energy transferred from ionizing radiation per unit mass of irradiated material; expressed in rad (100 erg/g) or gray (1 J/kg). b. Thermalization of tissue through absorption of ultrasound energy; expressed as a rise in temperature (°C).",
    "category": "Radiation Protection",
    "letter": "A",
    "units": "rad (100 erg/g) or gray (1 J/kg)"
  },
  {
    "term": "Absorption",
    "definition": "a. Transfer of energy from an electromagnetic field to matter; removal of x-rays from a beam via the photoelectric effect. b. Process by which ultrasound transfers energy to tissue through conversion of acoustic energy to heat.",
    "category": "Radiation Protection",
    "letter": "A"
  },
  {
    "term": "Absorption blur",
    "definition": "Characteristic of a subject that affects subject contrast.",
    "category": "Image Quality",
    "letter": "A"
  },
  {
    "term": "Acceleration (a)",
    "definition": "Rate of change of velocity over time.",
    "category": "Physics",
    "letter": "A",
    "units": "a"
  },
  {
    "term": "Acceleration of gravity",
    "definition": "Constant rate at which objects falling to the Earth accelerate.",
    "category": "Physics",
    "letter": "A"
  },
  {
    "term": "Acetic acid",
    "definition": "Chemical used in the stop bath.",
    "category": "General",
    "letter": "A"
  },
  {
    "term": "Activator",
    "definition": "Chemical, usually acetic acid in the fixer and sodium carbonate in the developer, used to neutralize the developer and swell the gelatin.",
    "category": "Image Quality",
    "letter": "A"
  },
  {
    "term": "Active memory",
    "definition": "Data can be stored or accessed at random from anywhere in main memory in approximately equal amounts of time, regardless of where the data are located.",
    "category": "General",
    "letter": "A"
  },
  {
    "term": "Actual focal-spot size",
    "definition": "Area on the anode target that is exposed to electrons from the tube current., (m/s)",
    "category": "Equipment",
    "letter": "A"
  },
  {
    "term": "Acute radiation syndrome",
    "definition": "Radiation sickness that occurs in humans after whole-body doses of 1 Gy (100 rad) or more of ionizing radiation delivered over a short time.",
    "category": "Radiation Protection",
    "letter": "A"
  },
  {
    "term": "Adenine",
    "definition": "Nitrogenous organic base that attaches to a deoxyribose molecule.",
    "category": "General",
    "letter": "A"
  },
  {
    "term": "Adhesive layer",
    "definition": "Protective covering of gelatin that encloses the emulsion.",
    "category": "Image Quality",
    "letter": "A"
  },
  {
    "term": "Aerial oxidation",
    "definition": "Oxidation that occurs when air is introduced into the developer after it is mixed, handled, and stored.",
    "category": "Image Quality",
    "letter": "A"
  },
  {
    "term": "Afterglow",
    "definition": "Phosphorescence in an intensifying screen.",
    "category": "Digital Imaging",
    "letter": "A"
  },
  {
    "term": "Age-response function",
    "definition": "Pattern of change in radiosensitivity as a function of phase in the cell cycle.",
    "category": "Radiobiology",
    "letter": "A"
  },
  {
    "term": "Air-gap technique",
    "definition": "Practice of moving the image receptor 10 to 15 cm from the patient so that fewer scattered x-rays interact with the image receptor, thereby enhancing contrast.",
    "category": "Image Quality",
    "letter": "A"
  },
  {
    "term": "ALARA",
    "definition": "Principle that states that radiation exposure should be kept As Low As Reasonably Achievable, when economic and social factors are taken into account.",
    "category": "Radiation Protection",
    "letter": "A"
  },
  {
    "term": "Algorithm",
    "definition": "Computer-adapted mathematical calculation applied to raw data during image reconstruction.",
    "category": "General",
    "letter": "A"
  },
  {
    "term": "Alnico",
    "definition": "Alloy of aluminum, nickel, and cobalt; one of the more useful magnets produced from ferromagnetic material.",
    "category": "Physics",
    "letter": "A"
  },
  {
    "term": "Alpha particle (a particle)",
    "definition": "Particulate form of ionizing radiation that consists of two protons and two neutrons; nucleus of helium emitted from the nucleus of a radioactive atom.",
    "category": "Physics",
    "letter": "A",
    "units": "a particle"
  },
  {
    "term": "Alternating current (AC)",
    "definition": "Oscillation of electricity in both directions within a conductor.",
    "category": "Physics",
    "letter": "A",
    "units": "AC"
  },
  {
    "term": "Amber filter",
    "definition": "Filter that transmits light with wavelengths longer than 550 nm, which is above the spectral response of blue-sensitive film. American Association of Physicists in Medicine (AAPM) — Scientific society of medical physicists.",
    "category": "Image Quality",
    "letter": "A"
  },
  {
    "term": "American College of Medical Physicists (ACMP)",
    "definition": "Professional society of medical physicists.",
    "category": "General",
    "letter": "A",
    "units": "ACMP"
  },
  {
    "term": "American College of Radiology (ACR)",
    "definition": "Professional society of radiologists and medical physicists.",
    "category": "Digital Imaging",
    "letter": "A",
    "units": "ACR"
  },
  {
    "term": "American Society of Radiologic Technologists (ASRT)",
    "definition": "Scientific and professional society of radiographers.",
    "category": "General",
    "letter": "A",
    "units": "ASRT"
  },
  {
    "term": "Ammeter",
    "definition": "Device that measures current.",
    "category": "General",
    "letter": "A"
  },
  {
    "term": "Ampere (A)",
    "definition": "SI unit of electric charge: 1 A = 1 C/s.",
    "category": "Physics",
    "letter": "A",
    "units": "A"
  },
  {
    "term": "Amplitude",
    "definition": "Width of a waveform.",
    "category": "General",
    "letter": "A"
  },
  {
    "term": "Anabolism",
    "definition": "Process of synthesizing smaller molecules into a larger macromolecule.",
    "category": "Radiobiology",
    "letter": "A"
  },
  {
    "term": "Anaphase_",
    "definition": "Third phase of mitosis, during which chromatids repel one another and migrate along the mitotic spindle to opposite sides of the cell.",
    "category": "Radiobiology",
    "letter": "A"
  },
  {
    "term": "Anatomically programmed radiography (APR)",
    "definition": "Technique by which graphics on the console guide the technologist in selection of a desired kVp and mAs.",
    "category": "Physics",
    "letter": "A",
    "units": "APR"
  },
  {
    "term": "Angiography",
    "definition": "Fluoroscopic process by which the x-ray examination is guided toward visualization of vessels. Angstrom (A) Unit of measure of wavelength: 1 A =",
    "category": "Equipment",
    "letter": "A",
    "units": "of wavelength: 1 A ="
  },
  {
    "term": "Anode",
    "definition": "Positively charged side of an x-ray tube that contains the target.",
    "category": "Equipment",
    "letter": "A"
  },
  {
    "term": "Anthropomorphic",
    "definition": "Human characteristics.",
    "category": "General",
    "letter": "A"
  },
  {
    "term": "Antibodies",
    "definition": "Proteins produced by the body in response to the presence of foreign antigens, such as bacteria or viruses.",
    "category": "General",
    "letter": "A"
  },
  {
    "term": "Antigen",
    "definition": "Molecular configuration of an antibody that attacks a particular type of invasive or infectious agent.",
    "category": "General",
    "letter": "A"
  },
  {
    "term": "Aperture",
    "definition": "a. Circular opening for the patient in the gantry of a computed tomographic or magnetic resonance imaging system. b. Fixed collimation of a diagnostic x-ray tube, as in an aperture diaphragm. c. Variable opening before the lens of a cine or photospot camera.",
    "category": "Image Quality",
    "letter": "A"
  },
  {
    "term": "Aperture diaphragm",
    "definition": "Simple beam-restricting device that attaches a lead-lined metal diaphragm to the head of the x-ray tube.",
    "category": "Equipment",
    "letter": "A"
  },
  {
    "term": "Archival quality",
    "definition": "Attribute that refers to the fact that the image does not deteriorate with age but remains in its original state.",
    "category": "Radiation Protection",
    "letter": "A"
  },
  {
    "term": "Area beam",
    "definition": "X-ray beam pattern that usually is shaped like a square or a rectangle, and that is used in conventional radiography and fluoroscopy.",
    "category": "Equipment",
    "letter": "A"
  },
  {
    "term": "Array processor",
    "definition": "Part of a computer that handles raw data and performs the mathematical calculations necessary to reconstruct a digital image.",
    "category": "Digital Imaging",
    "letter": "A"
  },
  {
    "term": "Artifact",
    "definition": "Unintended optical density on a radiograph or another film-type image receptor.",
    "category": "Image Quality",
    "letter": "A"
  },
  {
    "term": "Asthenic",
    "definition": "Referring to the body habitus of a patient who is small and frail.",
    "category": "General",
    "letter": "A"
  },
  {
    "term": "Atom",
    "definition": "Smallest particle of an element that cannot be divided or broken by chemical means.",
    "category": "Physics",
    "letter": "A"
  },
  {
    "term": "Atomic mass",
    "definition": "Relative mass of a specific isotope of an element.",
    "category": "Physics",
    "letter": "A"
  },
  {
    "term": "Atomic mass number",
    "definition": "(A) Number of protons plus number of neutrons in the nucleus.",
    "category": "Physics",
    "letter": "A"
  },
  {
    "term": "Atomic mass unit (amu)",
    "definition": "Mass of a neutral atom of an element, expressed as one-twelfth the mass of carbon, which has an arbitrarily assigned value of 12.",
    "category": "Physics",
    "letter": "A",
    "units": "amu"
  },
  {
    "term": "Atomic number (Z)",
    "definition": "Number of protons in the nucleus.",
    "category": "Physics",
    "letter": "A"
  },
  {
    "term": "Atrophy",
    "definition": "Shrinking of a tissue or organ.",
    "category": "General",
    "letter": "A"
  },
  {
    "term": "Attenuation",
    "definition": "Reduction in radiation intensity that results from absorption and scattering.",
    "category": "Image Quality",
    "letter": "A"
  },
  {
    "term": "Automatic brightness control (ABC)",
    "definition": "Feature ona fluoroscope that allows the radiologist to select an imagebrightness level that is subsequently maintained automatically by varying the kVp, the mAs, or both.",
    "category": "Equipment",
    "letter": "A",
    "units": "ABC"
  },
  {
    "term": "Automatic exposure control (AEC)",
    "definition": "Feature that determines radiation exposure during radiography in most x-ray imaging systems.",
    "category": "General",
    "letter": "A",
    "units": "AEC"
  },
  {
    "term": "Autotransformer",
    "definition": "Transformer located in the operating console that controls the kVp; it consists of one winding of wire and varies voltage and current by self-induction.",
    "category": "Equipment",
    "letter": "A"
  },
  {
    "term": "Autotransformer law",
    "definition": "Principle stating that the voltage received and the voltage provided are directly related to the number of turns of the transformer enclosed by the respective connections.",
    "category": "Equipment",
    "letter": "A"
  },
  {
    "term": "Average gradient",
    "definition": "Measure of radiographic contrast.",
    "category": "Image Quality",
    "letter": "A"
  },
  {
    "term": "Axial",
    "definition": "Perpendicular to the long axis of the body.",
    "category": "General",
    "letter": "A"
  },
  {
    "term": "Axial tomography",
    "definition": "Conventional tomography in which the plane of the image is parallel to the long axis of the body; this results in sagittal and coronal images.",
    "category": "General",
    "letter": "A"
  },
  {
    "term": "Backscatter radiation",
    "definition": "X-rays that have interacted with an object and are deflected backward.",
    "category": "Image Quality",
    "letter": "B"
  },
  {
    "term": "Bandpass",
    "definition": "Number of times per second that the electron beam can be modulated.",
    "category": "Physics",
    "letter": "B"
  },
  {
    "term": "Basal cells",
    "definition": "Stem cells that mature as they migrate to the surface of the epidermis.",
    "category": "Radiobiology",
    "letter": "B"
  },
  {
    "term": "Base",
    "definition": "Area that serves as.a mechanical support for the active phosphor layer in a radiographic intensifying screen.",
    "category": "Digital Imaging",
    "letter": "B"
  },
  {
    "term": "Base density",
    "definition": "Optical density inherent in the base of the film.",
    "category": "Image Quality",
    "letter": "B"
  },
  {
    "term": "Base plus fog (B+F)",
    "definition": "Average density from an unexposed area of the strips.",
    "category": "Image Quality",
    "letter": "B"
  },
  {
    "term": "Baseline mammography",
    "definition": "A woman's first radiographic examination of her breasts, used for comparison with all future mammograms.",
    "category": "Equipment",
    "letter": "B"
  },
  {
    "term": "Battery cell",
    "definition": "Each zinc-copper plate formation in a voltaic pile.",
    "category": "Radiobiology",
    "letter": "B"
  },
  {
    "term": "Beam axis",
    "definition": "Central line that represents maximal ultrasound or x-ray intensity.",
    "category": "General",
    "letter": "B"
  },
  {
    "term": "Beam penetrability",
    "definition": "Ability of an x-ray beam to penetrate tissue.",
    "category": "General",
    "letter": "B"
  },
  {
    "term": "Beam restrictor",
    "definition": "Device that restricts the size of the x-ray field to only the anatomical structure of interest.",
    "category": "Physics",
    "letter": "B"
  },
  {
    "term": "Beam-limiting device",
    "definition": "Device that provides a means of restricting the size of an x-ray field.",
    "category": "General",
    "letter": "B"
  },
  {
    "term": "Becquerel (Bq)",
    "definition": "Special name for the SI units of radioactivity. One becquerel is equal to disintegration per second.",
    "category": "Radiation Protection",
    "letter": "B",
    "units": "Bq"
  },
  {
    "term": "Beta particle (B particle)",
    "definition": "Ionizing radiation with characteristics of an electron; emitted from the nucleus of a radioactive atom.",
    "category": "Physics",
    "letter": "B",
    "units": "B particle"
  },
  {
    "term": "Binary number system",
    "definition": "Number system with only two digits, 0 and 1.",
    "category": "Digital Imaging",
    "letter": "B"
  },
  {
    "term": "Biochemistry",
    "definition": "Chemical reactions at the molecular level.",
    "category": "General",
    "letter": "B"
  },
  {
    "term": "Biplane imaging",
    "definition": "Configuration of pairs of serial changers used with two orthogonal x-ray sources.",
    "category": "General",
    "letter": "B"
  },
  {
    "term": "Bipolar",
    "definition": "Magnet that has two poles.",
    "category": "General",
    "letter": "B"
  },
  {
    "term": "Bit",
    "definition": "Smallest unit of measure in computer storage capacity.",
    "category": "General",
    "letter": "B",
    "units": "in computer storage capacity"
  },
  {
    "term": "Bit depth",
    "definition": "Number of bits used to reproduce image gray levels (e.g., 8 bits = 2° = 256 gray levels).",
    "category": "Digital Imaging",
    "letter": "B"
  },
  {
    "term": "Body habitus",
    "definition": "General size and shape of a patient.",
    "category": "General",
    "letter": "B"
  },
  {
    "term": "Brachytherapy",
    "definition": "Radiation oncology in which the source of radiation is on or in the body.",
    "category": "General",
    "letter": "B"
  },
  {
    "term": "Bremsstrahlung x-ray",
    "definition": "X-ray that results from interaction of the projectile electron with a target nucleus; braking radiation.",
    "category": "Radiation Protection",
    "letter": "B"
  },
  {
    "term": "Brightness gain",
    "definition": "Ability of the image intensifier to increase the illumination level of the image.",
    "category": "Digital Imaging",
    "letter": "B"
  },
  {
    "term": "Bucky factor (B)",
    "definition": "Ratio of incident radiation to transmitted radiation through a grid; ratio of patient dose with and without a grid.",
    "category": "Radiation Protection",
    "letter": "B"
  },
  {
    "term": "Bucky slot cover",
    "definition": "Protective cover that automatically shields the Bucky slot opening during fluoroscopic examinations when the Bucky tray is at the foot of the table.",
    "category": "Radiation Protection",
    "letter": "B"
  },
  {
    "term": "Buffer",
    "definition": "Acetate added to the fixer to maintain a constant pH.",
    "category": "Image Quality",
    "letter": "B"
  },
  {
    "term": "Buffering agent",
    "definition": "Alkali compound in the developer that enhances the action of the developing agent by controlling the concentration of hydrogen ions.",
    "category": "Digital Imaging",
    "letter": "B"
  },
  {
    "term": "Byte",
    "definition": "Group of eight bits; represents one character or digit.",
    "category": "Digital Imaging",
    "letter": "B"
  },
  {
    "term": "C-arm fluoroscope",
    "definition": "Portable device for fluoroscopy. The opposite ends of the C-shaped support arm hold the image intensifier and the x-ray tube.",
    "category": "Equipment",
    "letter": "C"
  },
  {
    "term": "Calipers",
    "definition": "Instrument with two bent or curved legs used for measuring the thickness of a solid.",
    "category": "General",
    "letter": "C"
  },
  {
    "term": "Calorie (c)",
    "definition": "Energy necessary to raise the temperature of te of water by 1°C.",
    "category": "Physics",
    "letter": "C",
    "units": "c"
  },
  {
    "term": "Cassette",
    "definition": "Rigid holder that contains the film and screens.",
    "category": "Digital Imaging",
    "letter": "C"
  },
  {
    "term": "Cassette-loaded spot film",
    "definition": "Conventional method of capturing images with image-intensified fluoroscopes.",
    "category": "Image Quality",
    "letter": "C"
  },
  {
    "term": "Catabolism",
    "definition": "Process that creates energy for a cell by breaking down molecular nutrients that are brought to and diffused through the cell membrane.",
    "category": "Radiobiology",
    "letter": "C"
  },
  {
    "term": "Cathode",
    "definition": "Negative side of the x-ray tube; contains the filament and the focusing cup.",
    "category": "Equipment",
    "letter": "C"
  },
  {
    "term": "Cathode ray tube (CRT)",
    "definition": "Electron beam tube designed for a two-dimensional display of signals.",
    "category": "Digital Imaging",
    "letter": "C",
    "units": "CRT"
  },
  {
    "term": "Cathode rays",
    "definition": "Stream of electrons.",
    "category": "Equipment",
    "letter": "C"
  },
  {
    "term": "Cell",
    "definition": "Basic unit of all living matter.",
    "category": "Radiobiology",
    "letter": "C"
  },
  {
    "term": "Cell cloning",
    "definition": "Process by which normal cells produce a visible colony in a short time.",
    "category": "Radiobiology",
    "letter": "C"
  },
  {
    "term": "Cell cycle time",
    "definition": "Average time from one mitosis to another.",
    "category": "Radiobiology",
    "letter": "C"
  },
  {
    "term": "Cell theory",
    "definition": "Principle that all plants and animals contain cells as their basic functional units.",
    "category": "Radiobiology",
    "letter": "C"
  },
  {
    "term": "Center for Diseases and",
    "definition": "Radiological Health (CDRH) Agency responsible for a national electronic radiation control program. Known as the Bureau of Radiological Health (BRH) before 1982.",
    "category": "Digital Imaging",
    "letter": "C"
  },
  {
    "term": "Central axis x-ray beam",
    "definition": "X-ray beam composed of x- rays that travel along the center of the useful x-ray beam.",
    "category": "General",
    "letter": "C"
  },
  {
    "term": "Central nervous system (CNS) syndrome",
    "definition": "Form of acute radiation syndrome caused by radiation doses of 50 Gy (S000 rad) or more of ionizing radiation that results in failure of the central nervous system, followed by death within a few hours to several days.",
    "category": "Radiation Protection",
    "letter": "C"
  },
  {
    "term": "Central processing unit (CPU)",
    "definition": "Processing hardware in large computers.",
    "category": "General",
    "letter": "C",
    "units": "CPU"
  },
  {
    "term": "Central ray",
    "definition": "Center of the x-ray beam that interacts with the image receptor.",
    "category": "General",
    "letter": "C"
  },
  {
    "term": "Centrifugal force",
    "definition": "Force that causes an electron to travel straight and leave the atom.",
    "category": "Physics",
    "letter": "C"
  },
  {
    "term": "Centripetal force",
    "definition": "Force that keeps an electron in orbit.",
    "category": "Physics",
    "letter": "C"
  },
  {
    "term": "Characteristic curve",
    "definition": "Graph of optical density versus log relative response; H & D curve.",
    "category": "Image Quality",
    "letter": "C"
  },
  {
    "term": "Characteristic x-ray",
    "definition": "X-ray released as a result of the photoelectric effect; its discrete energies are determined by the respective electron binding energy.",
    "category": "Digital Imaging",
    "letter": "C"
  },
  {
    "term": "Charge-coupled device (CCD)",
    "definition": "Solid-state device that converts visible light photons to electrons.",
    "category": "Digital Imaging",
    "letter": "C",
    "units": "CCD"
  },
  {
    "term": "Chelate",
    "definition": "Sequestering agent.",
    "category": "General",
    "letter": "C"
  },
  {
    "term": "Chemical energy",
    "definition": "Energy released by a_ chemical reaction.",
    "category": "Physics",
    "letter": "C"
  },
  {
    "term": "Chemical fog",
    "definition": "Artifact produced by chemical contamination of the developer.",
    "category": "Image Quality",
    "letter": "C"
  },
  {
    "term": "Chemical symbol",
    "definition": "Alphabetic abbreviation for an element.",
    "category": "General",
    "letter": "C"
  },
  {
    "term": "Chip",
    "definition": "Tiny piece of semiconductor material.",
    "category": "General",
    "letter": "C"
  },
  {
    "term": "Chromatid deletion",
    "definition": "Breakage of a chromatid.",
    "category": "Radiobiology",
    "letter": "C"
  },
  {
    "term": "Cine film",
    "definition": "Film used in cinefluorography.",
    "category": "Image Quality",
    "letter": "C"
  },
  {
    "term": "cine)",
    "definition": "Standard that enables imaging systems from different manufacturers to communicate. e",
    "category": "General",
    "letter": "C"
  },
  {
    "term": "Cinefluorography",
    "definition": "Recording of fluoroscopic images on movie film.",
    "category": "Image Quality",
    "letter": "C"
  },
  {
    "term": "Classical scattering",
    "definition": "Scattering of x-rays with no loss of energy. Also called coherent, Rayleigh, or Thompson scattering.",
    "category": "Image Quality",
    "letter": "C"
  },
  {
    "term": "Clearing agent",
    "definition": "A chemical, usually ammonium thiosulfate, that is added to the fixer to remove undeveloped silver bromine from the emulsion.",
    "category": "Radiation Protection",
    "letter": "C"
  },
  {
    "term": "Clinical tolerance",
    "definition": "Moist desquamation in radiation therapy.",
    "category": "General",
    "letter": "C"
  },
  {
    "term": "Closed-core transformer",
    "definition": "Square core of ferromagnetic material built up of laminated layers of iron; it helps to reduce energy losses caused by eddy currents.",
    "category": "Equipment",
    "letter": "C"
  },
  {
    "term": "Coast time",
    "definition": "Time it takes the rotor to rest after use.",
    "category": "Equipment",
    "letter": "C"
  },
  {
    "term": "Codon",
    "definition": "Series of three consecutive nucleotide bases in the DNA.",
    "category": "Radiobiology",
    "letter": "C"
  },
  {
    "term": "Collimation",
    "definition": "Restriction of the useful x-ray beam to reduce patient dose and improve image contrast.",
    "category": "Radiation Protection",
    "letter": "C"
  },
  {
    "term": "Collimator",
    "definition": "Device used to restrict x-ray beam size and shape.",
    "category": "Image Quality",
    "letter": "C"
  },
  {
    "term": "Commutator",
    "definition": "Device that acts like a switch, converting an alternating-current generator to a direct-current generator.",
    "category": "Equipment",
    "letter": "C"
  },
  {
    "term": "Compensating filter",
    "definition": "Material inserted between an x-ray source and a patient to shape the intensity of the x-ray beam. An x-ray beam filter is designed to make the remnant beam more uniform in intensity.",
    "category": "Radiation Protection",
    "letter": "C"
  },
  {
    "term": "Compression",
    "definition": "The act off lattening soft tissue to improve optical density.",
    "category": "Digital Imaging",
    "letter": "C"
  },
  {
    "term": "Compression device",
    "definition": "Device that maintains close screen-film contact when the cassette is closed and latched.",
    "category": "Digital Imaging",
    "letter": "C"
  },
  {
    "term": "Compton effect",
    "definition": "Scattering of x-rays that results in ionization and loss of energy.",
    "category": "Image Quality",
    "letter": "C"
  },
  {
    "term": "Compton scattering",
    "definition": "Interaction between an x-ray and a loosely bound outer-shell electron that results in ionization and x-ray scattering.",
    "category": "Image Quality",
    "letter": "C"
  },
  {
    "term": "Computed radiography",
    "definition": "(CR) Radiographic technique that uses a photostimulable phosphor as the image receptor and an area beam.",
    "category": "Digital Imaging",
    "letter": "C"
  },
  {
    "term": "Computed tomography",
    "definition": "(CT) Creation of a crosssectional tomographic section of the body with a rotating fan beam, a detector array, and computed reconstruction.",
    "category": "Digital Imaging",
    "letter": "C"
  },
  {
    "term": "Computed tomography dose index",
    "definition": "(CTD!) Radiation dose in a single slice over a 10-cm length so that dose delivered beyond the selected slice thickness is included.",
    "category": "Radiation Protection",
    "letter": "C"
  },
  {
    "term": "Computer-aided detection(CAD)",
    "definition": "Use of a highly complex pattern recognition. Conduction 'Transfer of heat by molecular agitation.",
    "category": "General",
    "letter": "C",
    "units": "CAD"
  },
  {
    "term": "Conductor",
    "definition": "Material that allows heat or electric current to flow.",
    "category": "Physics",
    "letter": "C"
  },
  {
    "term": "Cone",
    "definition": "Circular metal tube that attaches to x-ray tube housing to limit the beam size and shape.",
    "category": "Equipment",
    "letter": "C"
  },
  {
    "term": "Cone cutting",
    "definition": "Misalignment of cones that causes one side of the radiograph to not be exposed because the edge of the cone may interfere with the x-ray beam.",
    "category": "General",
    "letter": "C"
  },
  {
    "term": "Cones and cylinders",
    "definition": "Modifications of the aperture diaphragm.",
    "category": "General",
    "letter": "C"
  },
  {
    "term": "Connective tissue",
    "definition": "Tissue that binds tissue and organs together.",
    "category": "General",
    "letter": "C"
  },
  {
    "term": "Contact shields",
    "definition": "Shields that are flat and are placed directly on the patient's gonads.",
    "category": "Radiation Protection",
    "letter": "C"
  },
  {
    "term": "Continuous quality improvement",
    "definition": "(CQI) Program that includes administrative protocols for the continual improvement of mammographic quality.",
    "category": "Image Quality",
    "letter": "C"
  },
  {
    "term": "Contrast",
    "definition": "Degree of difference between the light and dark areas of a radiograph.",
    "category": "Image Quality",
    "letter": "C"
  },
  {
    "term": "Contrast agent",
    "definition": "Compound used as an aid for imaging internal organs with x-rays.",
    "category": "Image Quality",
    "letter": "C"
  },
  {
    "term": "Contrast improvement factor",
    "definition": "Ratio of radiographic contrast with a grid to that without a grid.",
    "category": "Image Quality",
    "letter": "C"
  },
  {
    "term": "Contrast index",
    "definition": "Difference between the step with an average optical density closest to 2.2 and the step with an average optical density closest to, but not less than,",
    "category": "Image Quality",
    "letter": "C"
  },
  {
    "term": "Contrast medium",
    "definition": "Agent that enhances differences between anatomical structures.",
    "category": "Image Quality",
    "letter": "C"
  },
  {
    "term": "Contrast resolution",
    "definition": "Ability to distinguish between and to image similar tissues.",
    "category": "Digital Imaging",
    "letter": "C"
  },
  {
    "term": "Controlled area",
    "definition": "Area where personnel occupancy and activity are subject to control and supervision for the purpose of radiation protection.",
    "category": "Radiation Protection",
    "letter": "C"
  },
  {
    "term": "Convection",
    "definition": "Transfer of heat by the movement of hot matter to a colder place.",
    "category": "Physics",
    "letter": "C"
  },
  {
    "term": "Conversion efficiency (CE)",
    "definition": "Rate at which x-ray energy is transformed into light in an intensifying screen.",
    "category": "Digital Imaging",
    "letter": "C",
    "units": "CE"
  },
  {
    "term": "Conversion factor",
    "definition": "Ratio of illumination intensity at the output phosphor to radiation intensity incident on the input phosphor.",
    "category": "General",
    "letter": "C"
  },
  {
    "term": "Coolidge tube",
    "definition": "Type of vacuum tube in use today that allows x-ray intensity and energy to be selected separately and accurately.",
    "category": "Physics",
    "letter": "C"
  },
  {
    "term": "Cosmic rays",
    "definition": "Particulate and electromagnetic radiation emitted by the sun and the stars.",
    "category": "Physics",
    "letter": "C"
  },
  {
    "term": "Coulomb (C)",
    "definition": "SI unit of electric charge.",
    "category": "Physics",
    "letter": "C",
    "units": "C"
  },
  {
    "term": "Coulomb per kilogram (C/kg)",
    "definition": "SI unit of radiation expoSurei 2.08 <d Or @/ke = 1Re",
    "category": "Physics",
    "letter": "C",
    "units": "C/kg"
  },
  {
    "term": "Coupling",
    "definition": "Joining of magnetic fields produced by the primary and secondary coils.",
    "category": "Physics",
    "letter": "C"
  },
  {
    "term": "Covalent bond",
    "definition": "Chemical union between atoms formed by sharing one or more pairs of electrons.",
    "category": "Physics",
    "letter": "C"
  },
  {
    "term": "Covering power",
    "definition": "The more efficient use of silver in an emulsion to produce the same optical density per unit exposure.",
    "category": "Image Quality",
    "letter": "C"
  },
  {
    "term": "Crookes tube",
    "definition": "Forerunner of modern fluorescent, neon, and x-ray tubes.",
    "category": "Digital Imaging",
    "letter": "C"
  },
  {
    "term": "Cross-linking",
    "definition": "Process of side spurs created by irradiation and attached to a neighboring macromolecule or to another segment of the same molecule.",
    "category": "Digital Imaging",
    "letter": "C"
  },
  {
    "term": "Crossed grid",
    "definition": "Grid on which lead strips run parallel to the long and short axes.",
    "category": "Digital Imaging",
    "letter": "C"
  },
  {
    "term": "Crossover",
    "definition": "Process that occurs during meiosis wherein chromatids exchange chromosomal material.",
    "category": "Radiobiology",
    "letter": "C"
  },
  {
    "term": "Crossover rack",
    "definition": "Device in an automatic processor that transports film from one tank to the next.",
    "category": "Digital Imaging",
    "letter": "C"
  },
  {
    "term": "Cryogen",
    "definition": "Extremely cold liquid.",
    "category": "Radiation Protection",
    "letter": "C"
  },
  {
    "term": "Crystal lattice",
    "definition": "Three-dimensional, cross-linked structure of silver, bromine, and iodine atoms.",
    "category": "Digital Imaging",
    "letter": "C"
  },
  {
    "term": "Curie (Ci)",
    "definition": "Former unit of radioactivity. Expressed as 1 Ci = 3.7 x 10'° disintegrations per second = 3.7 x",
    "category": "Radiation Protection",
    "letter": "C",
    "units": "Ci"
  },
  {
    "term": "Cutie pie",
    "definition": "Nickname for an ionization chamber-type survey meter.",
    "category": "Radiation Protection",
    "letter": "C"
  },
  {
    "term": "Cytoplasm",
    "definition": "Protoplasm that exists outside the cell's nucleus.",
    "category": "Radiobiology",
    "letter": "C"
  },
  {
    "term": "Cytosine",
    "definition": "Nitrogenous organic base that attaches to a deoxyribose molecule.",
    "category": "General",
    "letter": "C"
  },
  {
    "term": "Data acquisition system",
    "definition": "(DAS) Computer-controlled electronic amplifier and switching device to which the signal from each radiation detector of a multislice spiral computed tomographic scanning system is connected.",
    "category": "Physics",
    "letter": "D"
  },
  {
    "term": "Decimal system",
    "definition": "System of numbers based on multiples of 10.",
    "category": "General",
    "letter": "D"
  },
  {
    "term": "Densitometer",
    "definition": "Instrument that measures the optical density of exposed film.",
    "category": "Image Quality",
    "letter": "D"
  },
  {
    "term": "Density difference (DD)",
    "definition": "The difference between the step with an average optical density closest to 2.2 and the step with an average optical density closest to, but not less than, 0.5,",
    "category": "Image Quality",
    "letter": "D"
  },
  {
    "term": "Deoxyribonucleic acid (DNA)",
    "definition": "Molecule that carries the genetic information necessary for cell replication; the target molecule of radiobiology.",
    "category": "Radiobiology",
    "letter": "D",
    "units": "DNA"
  },
  {
    "term": "Derived quantities",
    "definition": "Any secondary quantity derived from a combination of one or more of three base quantities, such as mass, length, and time.",
    "category": "Physics",
    "letter": "D"
  },
  {
    "term": "Desquamation",
    "definition": "Ulceration and denudation of the skin.",
    "category": "General",
    "letter": "D"
  },
  {
    "term": "Detail",
    "definition": "Degree of sharpness of structural lines on a radiograph.",
    "category": "General",
    "letter": "D"
  },
  {
    "term": "Detective quantum efficiency (DQE)",
    "definition": "Percentage of x-rays absorbed by the image receptor.",
    "category": "Radiobiology",
    "letter": "D"
  },
  {
    "term": "Detector array",
    "definition": "Group of detectors and the interspace material used to separate them; the image receptor in computed tomography.",
    "category": "General",
    "letter": "D"
  },
  {
    "term": "Deterministic effect",
    "definition": "Biologic response whose severity varies with radiation dose. A dose threshold usually exists.",
    "category": "Radiation Protection",
    "letter": "D"
  },
  {
    "term": "Developing",
    "definition": "Stage of processing during which the latent image is converted to a manifest image.",
    "category": "General",
    "letter": "D"
  },
  {
    "term": "Developing agent",
    "definition": "A chemical, usually phenidone, hydroquinone, or Metol, that reduces exposed silver ions to atomic silver.",
    "category": "Digital Imaging",
    "letter": "D"
  },
  {
    "term": "Development fog",
    "definition": "Artifact that results from reduction of crystals that had not been exposed to metallic silver caused by the lack of a restrainer.",
    "category": "Digital Imaging",
    "letter": "D"
  },
  {
    "term": "Diagnostic mammography",
    "definition": "Examination performed on patients with symptoms or elevated risk factors for breast cancer.",
    "category": "Radiobiology",
    "letter": "D"
  },
  {
    "term": "Diagnostic-type protective tube housing",
    "definition": "Lead-lined housing enclosing an x-ray tube that shields leakage radiation to less than 100 mR/hr at 1 m.",
    "category": "Radiation Protection",
    "letter": "D"
  },
  {
    "term": "Diaphragm",
    "definition": "Device that restricts an x-ray beam to a fixed size.",
    "category": "General",
    "letter": "D"
  },
  {
    "term": "Dichroic stain",
    "definition": "Two-colored stain that appears as a curtain effect on the radiograph.",
    "category": "General",
    "letter": "D"
  },
  {
    "term": "DICOM",
    "definition": "(Digital Imaging and Communications in Medi- t",
    "category": "Digital Imaging",
    "letter": "D"
  },
  {
    "term": "Differential absorption",
    "definition": "Different degrees of absorption o in different tissues that result in image contrast and formation of the x-ray image. a",
    "category": "Image Quality",
    "letter": "D"
  },
  {
    "term": "Digital fluoroscopy (DF)",
    "definition": "Digital x-ray imaging system that produces a series of dynamic images with the use t of an area x-ray beam and an image intensifier. g",
    "category": "Digital Imaging",
    "letter": "D"
  },
  {
    "term": "Digital radiography (DR)",
    "definition": "Static images produced with a fan x-ray beam intercepted by a linear array of radiation u detectors or an area x-ray beam intercepted by a pho- g tostimulable phosphor plate or a direct-capture solidstate device.",
    "category": "Digital Imaging",
    "letter": "D",
    "units": "DR"
  },
  {
    "term": "Dimagnetic",
    "definition": "Nonmagnetic materials that are unaffected when brought into a magnetic field.",
    "category": "Physics",
    "letter": "D"
  },
  {
    "term": "Dimensional stability",
    "definition": "Property that allows the base of radiographic film to maintain its size and shape during use and processing, so it does not contribute to image distortion.",
    "category": "Image Quality",
    "letter": "D"
  },
  {
    "term": "Diode",
    "definition": "Vacuum tube with two electrodes—a cathode and an anode.",
    "category": "Equipment",
    "letter": "D"
  },
  {
    "term": "Dipolar",
    "definition": "Referring to a molecule with areas of opposing electric charge.",
    "category": "Physics",
    "letter": "D"
  },
  {
    "term": "Direct current (DC)",
    "definition": "Flow of electricity in only one direction within a conductor.",
    "category": "Physics",
    "letter": "D",
    "units": "DC"
  },
  {
    "term": "Direct effect",
    "definition": "Effect of radiation that occurs when ionizing radiation interacts directly with a particularly radiosensitive molecule.",
    "category": "Radiobiology",
    "letter": "D"
  },
  {
    "term": "Direct-current motor",
    "definition": "Electric motor in which many turns of wire are used for the current loop and many bar magnets are used to create the external magnetic field.",
    "category": "Digital Imaging",
    "letter": "D"
  },
  {
    "term": "Direct-exposure film",
    "definition": "Film used without intensifying screens.",
    "category": "Digital Imaging",
    "letter": "D"
  },
  {
    "term": "Disaccharide",
    "definition": "A sugar.",
    "category": "General",
    "letter": "D"
  },
  {
    "term": "Dissociation",
    "definition": "Process of separating a whole into parts.",
    "category": "General",
    "letter": "D"
  },
  {
    "term": "Distortion",
    "definition": "Unequal magnification of different portions of the same object.",
    "category": "Image Quality",
    "letter": "D"
  },
  {
    "term": "Dose",
    "definition": "Amount of radiant energy absorbed by an irradiated object.",
    "category": "Radiation Protection",
    "letter": "D"
  },
  {
    "term": "Dose equivalent (H)",
    "definition": "Radiation quantity that is used for radiation protection and that expresses dose on a common scale for all radiation. Expressed in rem or sievert (Sv).",
    "category": "Radiation Protection",
    "letter": "D",
    "units": "rem or sievert (Sv)"
  },
  {
    "term": "Dose length product (DLP)",
    "definition": "Product of computed tomography dose index (CTDI) and slice thickness. Depends only on selected computed tomography (CT) parameters and does not reflect patient dose.",
    "category": "Radiation Protection",
    "letter": "D"
  },
  {
    "term": "Dose limit (DL)",
    "definition": "Maximum permissible occupational radiation dose.",
    "category": "Radiation Protection",
    "letter": "D"
  },
  {
    "term": "Dosimeter",
    "definition": "Instrument that detects and measures exposure to lonizing radiation.",
    "category": "Radiation Protection",
    "letter": "D"
  },
  {
    "term": "Dosimetry",
    "definition": "The practice of measuring the intensity of radiation.",
    "category": "General",
    "letter": "D"
  },
  {
    "term": "Double-contrast examination",
    "definition": "Examination of the colon that uses air and barium for contrast.",
    "category": "Image Quality",
    "letter": "D"
  },
  {
    "term": "Double-emulsion film",
    "definition": "Radiographic film that has an emulsion coating on both sides of the base and a layer of supercoat over each emulsion.",
    "category": "Image Quality",
    "letter": "D"
  },
  {
    "term": "Double-helix",
    "definition": "Configuration of DNA that is shaped like a ladder twisted about an imaginary axis like a spring.",
    "category": "Radiobiology",
    "letter": "D"
  },
  {
    "term": "Doubling dose",
    "definition": "That dose of radiation that is expected to double the number of genetic mutations in a generation.",
    "category": "Radiation Protection",
    "letter": "D"
  },
  {
    "term": "Duplicating film",
    "definition": "Single-emulsion film that is exposed to ultraviolet light or blue light through the existing radiograph to produce a copy.",
    "category": "Radiobiology",
    "letter": "D"
  },
  {
    "term": "Dynamic range",
    "definition": "Range of values that can be displayed by an imaging system; shades of gray.",
    "category": "Digital Imaging",
    "letter": "D"
  },
  {
    "term": "Early effect",
    "definition": "Radiation response that occurs within minutes or days after radiation exposure.",
    "category": "General",
    "letter": "E"
  },
  {
    "term": "ecules, especially",
    "definition": "RNA, from the nucleus to the cytoplasm.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Eddy current",
    "definition": "Current that opposes the magnetic field that induced it, creating a loss of transformer efficiency.",
    "category": "Digital Imaging",
    "letter": "E"
  },
  {
    "term": "Edge enhancement",
    "definition": "Accentuation of the interface between different tissues.",
    "category": "General",
    "letter": "E"
  },
  {
    "term": "Edge response function (ERF)",
    "definition": "Mathematical expression of the ability of the computed tomographic scanner to reproduce a high-contrast edge with accuracy.",
    "category": "Image Quality",
    "letter": "E",
    "units": "ERF"
  },
  {
    "term": "Effective atomic number",
    "definition": "Weighted average atomic number for the different elements of a material.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Effective dose (E)",
    "definition": "Sum of specified tissues of the products of equivalent dose in a tissue (Hy) and the weighting factor for the tissue (W 7). Effective dose is a method of converting a nonuniform radiation dose, as when a protective apron is worn, to a dose, with respect to risk, as if the whole body were exposed.",
    "category": "Radiation Protection",
    "letter": "E"
  },
  {
    "term": "Effective dose equivalent (H_)",
    "definition": "Sum of the products of the dose equivalent to a tissue (Hy) and the weighting factors (Wy) applicable to each of the tissues irradiated. The values (W+) are different for effective dose and effective dose equivalent.",
    "category": "Radiation Protection",
    "letter": "E"
  },
  {
    "term": "Effective focal-spot size",
    "definition": "Area projected onto the patient and the image receptor.",
    "category": "General",
    "letter": "E"
  },
  {
    "term": "effectiveness between different radiations.",
    "definition": "Formerly called quality factor.",
    "category": "Radiation Protection",
    "letter": "E"
  },
  {
    "term": "Elective booking",
    "definition": "Safeguard against the irradiation of an unsuspected pregnancy.",
    "category": "General",
    "letter": "E"
  },
  {
    "term": "Electric circuit",
    "definition": "Path of electron flow from the generating source through the various components and back again.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Electric current",
    "definition": "Flow of electrons.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Electric field",
    "definition": "Lines of force exerted on charged ions in the tissues by the electrodes that cause charged particles to move from one pole to another.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Electrical energy",
    "definition": "Work that can be done when an electron or an electronic charge moves through an electric potential.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Electricity",
    "definition": "Form of energy created by the activity of electrons and other subatomic particles in motion.",
    "category": "Digital Imaging",
    "letter": "E"
  },
  {
    "term": "Electrification",
    "definition": "Process of adding or removing electrons from a substance.",
    "category": "Radiation Protection",
    "letter": "E"
  },
  {
    "term": "Electrified object",
    "definition": "Object that has too few or too many electrons.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Electrode",
    "definition": "Electrical terminal or connector.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Electromagnet",
    "definition": "Coil or wire wrapped around an iron core that intensifies the magnetic field.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Electromagnetic energy",
    "definition": "Type of energy in x-rays, radio waves, microwaves, and visible light.",
    "category": "Digital Imaging",
    "letter": "E"
  },
  {
    "term": "Electromagnetic radiation",
    "definition": "Oscillating electric and magnetic fields that travel in a vacuum with the velocity of light. Includes x-rays, gamma rays, and some nonionizing radiation (such as ultraviolet, visible, infrared, and radio waves).",
    "category": "Radiobiology",
    "letter": "E"
  },
  {
    "term": "Electromagnetic spectrum",
    "definition": "Continuum of electromagnetic energy.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Electromotive force",
    "definition": "Electric potential; mea (V).;",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Electron",
    "definition": "Elementary particle with one negative charge. Electrons surround the positively charged nucleus and determine the chemical properties of the atom.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Electron binding energy",
    "definition": "Strength of attachment of an electron to the nucleus.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Electron optics",
    "definition": "Engineering aspects of maintaining proper electron travel.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Electron spin",
    "definition": "Momentum of a particle of an atom ina fixed pattern.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Electron volt (eV)",
    "definition": "Unit of energy equal to that which an electron acquires from a potential difference of 1 V.",
    "category": "Physics",
    "letter": "E",
    "units": "eV"
  },
  {
    "term": "Electrostatics",
    "definition": "Study of fixed or stationary electric charge.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Element",
    "definition": "Atoms that have the same atomic number and the same chemical properties. Substance that cannot be reduced further without changing its chemical properties.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Elemental mass",
    "definition": "Characteristic mass of an element, determined by the relative abundance of isotopes and their respective atomic masses.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Elongation",
    "definition": "Image that is made to appear longer than it really is because the inclined object is not located on the central x-ray beam.",
    "category": "General",
    "letter": "E"
  },
  {
    "term": "Embryologic effect",
    "definition": "Damage that occurs as the result of exposure of an organism to ionizing radiation during its embryonic stage of development.",
    "category": "General",
    "letter": "E"
  },
  {
    "term": "Emulsion",
    "definition": "Material with which x-rays or light photons from screens interact and transfer information.",
    "category": "Digital Imaging",
    "letter": "E"
  },
  {
    "term": "Endoplasmic reticulum",
    "definition": "Channel or series of channels that allows the nucleus to communicate with the cytoplasm.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Energy",
    "definition": "Ability to do work; measured in joules (J).",
    "category": "Physics",
    "letter": "E",
    "units": "joules (J)"
  },
  {
    "term": "Energy levels",
    "definition": "Orbits around the nucleus that contain a designated number of electrons. Energy subtraction 'Technique that uses the two x-ray beams alternately to provide a subtraction image that results from differences in photoelectric interaction.",
    "category": "Digital Imaging",
    "letter": "E"
  },
  {
    "term": "Entrance roller",
    "definition": "Roller that grips the film to begin its trip through the processor.",
    "category": "Image Quality",
    "letter": "E"
  },
  {
    "term": "Entrance skin exposure (ESE)",
    "definition": "X-ray exposure to the skin; expressed in milliroentgen (mR).",
    "category": "Radiation Protection",
    "letter": "E",
    "units": "milliroentgen (mR)"
  },
  {
    "term": "Enzyme",
    "definition": "Molecule that is needed in small quantities to allow a biochemical reaction to continue, even though it does not directly enter into the reaction.",
    "category": "General",
    "letter": "E"
  },
  {
    "term": "Epidemiology",
    "definition": "Study of the occurrence, distribution, and causes of disease in humans.",
    "category": "General",
    "letter": "E"
  },
  {
    "term": "Epilation",
    "definition": "Loss of hair.",
    "category": "Radiobiology",
    "letter": "E"
  },
  {
    "term": "Epithelium",
    "definition": "Covering tissue that lines all exposed surfaces of the body, both exterior and interior.",
    "category": "General",
    "letter": "E"
  },
  {
    "term": "Erg (joule)",
    "definition": "Unit of energy and work.",
    "category": "Physics",
    "letter": "E",
    "units": "joule"
  },
  {
    "term": "Erythema",
    "definition": "Sunburn-like reddening of the skin.",
    "category": "Radiobiology",
    "letter": "E"
  },
  {
    "term": "Erythrocyte",
    "definition": "Red blood cell.",
    "category": "Radiobiology",
    "letter": "E"
  },
  {
    "term": "EUR/OPE",
    "definition": "Electrons used in reduction/oxidation produces electrons.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Excess risk",
    "definition": "Difference between observed and expected numbers of cases.",
    "category": "General",
    "letter": "E"
  },
  {
    "term": "Excitation",
    "definition": "Addition of energy to a system achieved by raising the energy of electrons with the use of x-rays.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Exit radiation",
    "definition": "X-rays that remain after the beam exits through the patient.",
    "category": "Radiation Protection",
    "letter": "E"
  },
  {
    "term": "Exponent",
    "definition": "Superscript or power to which 10 is raised in scientific notation.",
    "category": "Digital Imaging",
    "letter": "E"
  },
  {
    "term": "Exponential form",
    "definition": "Power-of-10 notation.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Exposed matter",
    "definition": "Matter that intercepts radiation and absorbs part or all of it; irradiated matter.",
    "category": "Physics",
    "letter": "E"
  },
  {
    "term": "Exposure",
    "definition": "Measure of the ionization produced in air by X-rays Or gamma rays. Quantity of radiation intensity expressed in roentgen (R), Coulombs per kilogram (C/ kg), or air kerma (Gy).",
    "category": "Radiation Protection",
    "letter": "E",
    "units": "roentgen (R)"
  },
  {
    "term": "Exposure factors",
    "definition": "Factors that influence and determine the quantity and quality of x-radiation to which the patient is exposed.",
    "category": "General",
    "letter": "E"
  },
  {
    "term": "Exposure linearity",
    "definition": "Ability of a radiographic unit to produce a constant radiation output for various combinations of mA and exposure time.",
    "category": "General",
    "letter": "E"
  },
  {
    "term": "Extinction time",
    "definition": "Time required to end an exposure.",
    "category": "General",
    "letter": "E"
  },
  {
    "term": "Extrafocal radiation, off-focus radiation",
    "definition": "Electrons that bounce off the focal spot and land on other areas of the target.",
    "category": "Equipment",
    "letter": "E"
  },
  {
    "term": "Extrapolation",
    "definition": "Estimation of a value beyond the range of known values.",
    "category": "General",
    "letter": "E"
  },
  {
    "term": "Falling-load generator",
    "definition": "Design in which exposure factors are adjusted automatically to the highest mA at the shortest exposure time allowed by the high-voltage generator.",
    "category": "Equipment",
    "letter": "F"
  },
  {
    "term": "Fan beam",
    "definition": "X-ray beam pattern used in computed tomography and digital radiography; projected as a slit.",
    "category": "Digital Imaging",
    "letter": "F"
  },
  {
    "term": "Feed tray",
    "definition": "The start of the transport system, where the film to be processed is inserted into the automatic processor in the darkroom.",
    "category": "Image Quality",
    "letter": "F"
  },
  {
    "term": "Ferromagnetic material",
    "definition": "Material that is strongly attracted by a magnet and that usually can be permanently magnetized by exposure to a magnetic field.",
    "category": "Physics",
    "letter": "F"
  },
  {
    "term": "Field",
    "definition": "Interactions among different energies, forces, or masses that cannot be seen but can be described mathematically.",
    "category": "Digital Imaging",
    "letter": "F"
  },
  {
    "term": "Field of view (FOV)",
    "definition": "Image matrix size provided by digital x-ray imaging systems.",
    "category": "Digital Imaging",
    "letter": "F",
    "units": "FOV"
  },
  {
    "term": "Fifteen percent rule",
    "definition": "Principle that states that if the optical density on a radiograph is to be increased with the use of kVp, an increase in kVp by 15% is equivalent to doubling of the mAs.",
    "category": "Digital Imaging",
    "letter": "F"
  },
  {
    "term": "Filament",
    "definition": "Part of the cathode that emits electrons, resulting in a tube current.",
    "category": "Equipment",
    "letter": "F"
  },
  {
    "term": "File",
    "definition": "Collection of data or information that is treated as a unit by the computer.",
    "category": "General",
    "letter": "F"
  },
  {
    "term": "Film badge",
    "definition": "Pack of photographic film used for approximate measurement of radiation exposure to radiation workers. It is the most widely used and most economical type of personnel radiation monitor.",
    "category": "Radiation Protection",
    "letter": "F"
  },
  {
    "term": "Film graininess",
    "definition": "Distribution of silver halide grains in an emulsion.",
    "category": "Image Quality",
    "letter": "F"
  },
  {
    "term": "Filtered back projection",
    "definition": "Process by which an image acquired during computed tomography and stored in computer memory is reconstructed.",
    "category": "General",
    "letter": "F"
  },
  {
    "term": "Filtration",
    "definition": "Removal of low-energy x-rays from the useful beam with aluminum or another metal. It results in increased beam quality and reduced patient dose.",
    "category": "Radiation Protection",
    "letter": "F"
  },
  {
    "term": "First-generation computed tomographic scanner",
    "definition": "Finely collimated x-ray beam, single-detector assembly that translates across the patient and rotates between successive translations.",
    "category": "Digital Imaging",
    "letter": "F"
  },
  {
    "term": "Five percent rule",
    "definition": "Principle that states that an increase of 5% in the kVp may be accompanied by a 30% reduction in the mAs to produce the same optical density at a slightly reduced contrast scale.",
    "category": "Digital Imaging",
    "letter": "F"
  },
  {
    "term": "Fixing",
    "definition": "Stage of processing during which the silver halide not exposed to radiation is dissolved and removed from the emulsion.",
    "category": "Radiation Protection",
    "letter": "F"
  },
  {
    "term": "Fluorescence",
    "definition": "Emission of visible light only during stimulation.",
    "category": "General",
    "letter": "F"
  },
  {
    "term": "Fluorescent screen",
    "definition": "Cycle in a television picture tube whereby the electron beam creates the television optical signal and then immediately fades.",
    "category": "Digital Imaging",
    "letter": "F"
  },
  {
    "term": "Fluoroscope",
    "definition": "Device used to image moving anatomical structures with x-rays.",
    "category": "Equipment",
    "letter": "F"
  },
  {
    "term": "Fluoroscopy",
    "definition": "Imaging modality that provides a continuous image of the motion of internal structures while the x-ray tube is energized. Real-time imaging.",
    "category": "Equipment",
    "letter": "F"
  },
  {
    "term": "Flux gain",
    "definition": "Ratio of the number of light photons at the output phosphor to the number of x-rays at the input phosphor.",
    "category": "Physics",
    "letter": "F"
  },
  {
    "term": "Focal spot",
    "definition": "Region of the anode target in which electrons interact to produce x-rays.",
    "category": "Equipment",
    "letter": "F"
  },
  {
    "term": "Focal-spot blur",
    "definition": "Blurred region on the radiograph over which the technologist has little control.",
    "category": "Image Quality",
    "letter": "F"
  },
  {
    "term": "Focused grid",
    "definition": "Radiographic grid constructed so that the grid strips converge on an imaginary line.",
    "category": "Image Quality",
    "letter": "F"
  },
  {
    "term": "Focusing cup",
    "definition": "Metal shroud that surrounds the filament.",
    "category": "Equipment",
    "letter": "F"
  },
  {
    "term": "Fog",
    "definition": "Unintended optical density on a radiograph that reduces contrast through light or chemical contamination.",
    "category": "Image Quality",
    "letter": "F"
  },
  {
    "term": "Fog density",
    "definition": "Development of silver grain that contains no useful information.",
    "category": "Image Quality",
    "letter": "F"
  },
  {
    "term": "Force",
    "definition": "That which changes the motion of an object; a push or a pull. Expressed in newtons (N).",
    "category": "Physics",
    "letter": "F",
    "units": "newtons (N)"
  },
  {
    "term": "Foreshortening",
    "definition": "Reduction in image size; related to the angle of inclination of the object.",
    "category": "General",
    "letter": "F"
  },
  {
    "term": "Fraction",
    "definition": "Numeric value expressed by dividing one number by another.",
    "category": "General",
    "letter": "F"
  },
  {
    "term": "Fractionated",
    "definition": "Radiation dose delivered at the same dose in equal portions at regular intervals.",
    "category": "Radiation Protection",
    "letter": "F"
  },
  {
    "term": "Free radical",
    "definition": "Uncharged molecule that contains a single unpaired electron in the valence shell.",
    "category": "Radiobiology",
    "letter": "F"
  },
  {
    "term": "Frequency",
    "definition": "Number of cycles or wavelengths of a simple harmonic motion per unit time. Expressed in",
    "category": "Physics",
    "letter": "F"
  },
  {
    "term": "Fulcrum",
    "definition": "Imaginary pivot point about which the x-ray tube and the image receptor move.",
    "category": "Digital Imaging",
    "letter": "F"
  },
  {
    "term": "Full width at half maximum (FWHM)",
    "definition": "Width of the profile at half its maximum value.",
    "category": "General",
    "letter": "F",
    "units": "FWHM"
  },
  {
    "term": "Full-wave rectification",
    "definition": "Circuit in which the negative half-cycle corresponding to the inverse voltage is reversed, so a positive voltage is always directed across the x-ray tube.",
    "category": "Digital Imaging",
    "letter": "F"
  },
  {
    "term": "Fundamental laws of motion",
    "definition": "The three principles of inertia, force, and action/reaction established by Isaac Newton.",
    "category": "Physics",
    "letter": "F"
  },
  {
    "term": "Fundamental particles",
    "definition": "The three primary constituents of an atom: electrons, photons, and neutrons.",
    "category": "Physics",
    "letter": "F"
  },
  {
    "term": "Gantry",
    "definition": "Portion of the computed tomographic or magnetic resonance imaging system that accommodates the patient and source or the detector assemblies.",
    "category": "Equipment",
    "letter": "G"
  },
  {
    "term": "Gastrointestinal (Gl) syndrome",
    "definition": "Form of acute radiation syndrome that appears in humans at a_ threshold dose of about 10 Gy (1000 rad). It is characterized by nausea, diarrhea, and damage to the cells lining the intestines.",
    "category": "Radiation Protection",
    "letter": "G"
  },
  {
    "term": "Geiger-Muller (G-M) counter",
    "definition": "Radiation detection and radiation measuring instrument that detects individual ionizations. It is the primary radiation survey instrument for nuclear medicine facilities.",
    "category": "Radiation Protection",
    "letter": "G"
  },
  {
    "term": "Gelatin",
    "definition": "Part of the emulsion that provides mechanical support for the silver halide crystals by holding them uniformly dispersed in place.",
    "category": "Digital Imaging",
    "letter": "G"
  },
  {
    "term": "Generation time",
    "definition": "See Cell cycle time.",
    "category": "Radiobiology",
    "letter": "G"
  },
  {
    "term": "Genetic cell",
    "definition": "Oogonium or spermatogonium.",
    "category": "Radiobiology",
    "letter": "G"
  },
  {
    "term": "Genetic effect",
    "definition": "Effect of radiation that is seen in an individual and in subsequent unexposed generations.",
    "category": "General",
    "letter": "G"
  },
  {
    "term": "Genetically significant dose (GSD)",
    "definition": "Average gonadal dose given to members of the population who are of childbearing age.",
    "category": "Radiation Protection",
    "letter": "G"
  },
  {
    "term": "Germ cell",
    "definition": "Reproductive cell.",
    "category": "Radiobiology",
    "letter": "G"
  },
  {
    "term": "Glandular dose",
    "definition": "Average radiation dose to glandular tissue.",
    "category": "Radiation Protection",
    "letter": "G"
  },
  {
    "term": "Glow curve",
    "definition": "Graph that shows the relationship of light output to temperature change.",
    "category": "General",
    "letter": "G"
  },
  {
    "term": "Glycogen",
    "definition": "Human polysaccharide.",
    "category": "General",
    "letter": "G"
  },
  {
    "term": "Gonadal dose",
    "definition": "Exposure to the reproductive organs.",
    "category": "Radiation Protection",
    "letter": "G"
  },
  {
    "term": "Gr",
    "definition": "a i u d s e c d u to b ff y un",
    "category": "General",
    "letter": "G"
  },
  {
    "term": "Gradient",
    "definition": "Slope of the tangent at any point on the characteristic Curve.",
    "category": "Image Quality",
    "letter": "G"
  },
  {
    "term": "Granulocyte",
    "definition": "Scavenger cell used to fight bacteria.",
    "category": "Radiobiology",
    "letter": "G"
  },
  {
    "term": "Gray (Gy)",
    "definition": "Special name for the SI unit of absorbed dose and air kerma. 1 Gy = 1 J/kg = 100 rad.",
    "category": "Radiation Protection",
    "letter": "G",
    "units": "Gy"
  },
  {
    "term": "Gray scale",
    "definition": "Image display in which intensity is recorded as variations in brightness.",
    "category": "Digital Imaging",
    "letter": "G"
  },
  {
    "term": "Grid",
    "definition": "Device used to reduce the intensity of scatter radiation in the remnant x-ray beam.",
    "category": "Radiation Protection",
    "letter": "G"
  },
  {
    "term": "Grid cleanup",
    "definition": "Ability of a grid to absorb scatter radiation. c",
    "category": "Image Quality",
    "letter": "G"
  },
  {
    "term": "Grid frequency",
    "definition": "Number of grid lines per inch or centimeter.",
    "category": "Image Quality",
    "letter": "G"
  },
  {
    "term": "Grid lines",
    "definition": "Series of sections of radiopaque material.",
    "category": "Image Quality",
    "letter": "G"
  },
  {
    "term": "Grid ratio",
    "definition": "Ratio of grid height to grid strip separation.",
    "category": "Image Quality",
    "letter": "G"
  },
  {
    "term": "Grid-controlled tube",
    "definition": "X-ray tube designed to be turned on and off very rapidly for situations that require multiple exposures at precise exposure times.",
    "category": "Image Quality",
    "letter": "G"
  },
  {
    "term": "Guanine",
    "definition": "Nitrogenous organic base that attaches to a deoxyribose molecule.",
    "category": "General",
    "letter": "G"
  },
  {
    "term": "Guide shoe",
    "definition": "Device in an automatic processor that is used to steer film around bends.",
    "category": "Image Quality",
    "letter": "G"
  },
  {
    "term": "Guidewire",
    "definition": "Device that allows the safe introduction of the catheter into the vessel.",
    "category": "General",
    "letter": "G"
  },
  {
    "term": "Halation",
    "definition": "Reflection of screen light transmitted through the emulsion and base.",
    "category": "Digital Imaging",
    "letter": "H"
  },
  {
    "term": "Half-life",
    "definition": "Time required for a quantity of radioactivity to be reduced to half its original value.",
    "category": "General",
    "letter": "H"
  },
  {
    "term": "Half-value layer (HVL)",
    "definition": "Thickness of absorber necessary to reduce an x-ray beam to half its original intensity.",
    "category": "Radiobiology",
    "letter": "H",
    "units": "HVL"
  },
  {
    "term": "Half-wave rectification",
    "definition": "Condition in which the voltage is not allowed to swing negatively during the negative half of its cycle.",
    "category": "Equipment",
    "letter": "H"
  },
  {
    "term": "Hard copy",
    "definition": "Permanent image on film or paper, as opposed to an image on a cathode ray tube, a disc, or magnetic tape.",
    "category": "Image Quality",
    "letter": "H"
  },
  {
    "term": "Hard x-ray",
    "definition": "X-ray that has high penetrability and therefore is of high quality.",
    "category": "General",
    "letter": "H"
  },
  {
    "term": "Hardener",
    "definition": "A chemical, usually potassium glutaraldehyde alum in the fixer, that is used to stiffen and shrink the emulsion.",
    "category": "Digital Imaging",
    "letter": "H"
  },
  {
    "term": "Hardware",
    "definition": "Visible parts of the computer.",
    "category": "General",
    "letter": "H"
  },
  {
    "term": "Health physics",
    "definition": "The science that is concerned with the recognition, evaluation, and control of radiation hazards.",
    "category": "General",
    "letter": "H"
  },
  {
    "term": "Heel effect",
    "definition": "Absorption of x-rays in the heel of the target, resulting in reduced x-ray intensity to the anode side of the central axis.",
    "category": "Image Quality",
    "letter": "H"
  },
  {
    "term": "Hematologic syndrome",
    "definition": "Form of acute radiation syndrome that develops after whole-body exposure to doses",
    "category": "Radiation Protection",
    "letter": "H"
  },
  {
    "term": "Hertz (Hz)",
    "definition": "Unit of frequency; the number of cycles or oscillations that occur each second during simple harmonic motion.",
    "category": "Physics",
    "letter": "H",
    "units": "Hz"
  },
  {
    "term": "Hexadecimal number system",
    "definition": "Number system used by low-level applications to represent a set of four bits.",
    "category": "General",
    "letter": "H"
  },
  {
    "term": "High-contrast resolution",
    "definition": "Ability to image small objects with high subject contrast; spatial resolution.",
    "category": "Digital Imaging",
    "letter": "H"
  },
  {
    "term": "High-voltage generator",
    "definition": "One of three principal parts of an X-ray imaging system; it is always close to the x-ray tube.",
    "category": "Equipment",
    "letter": "H"
  },
  {
    "term": "Hit",
    "definition": "Radiation interaction with the target. I",
    "category": "Equipment",
    "letter": "H"
  },
  {
    "term": "Homeostasis",
    "definition": "a. State of equilibrium among tissue and i organs. b. Ability of the body to return to normal func- r",
    "category": "General",
    "letter": "H"
  },
  {
    "term": "Hormone",
    "definition": "Protein manufactured by various endocrine v glands and carried by the blood to regulate body func- x tions such as growth and development. a",
    "category": "Digital Imaging",
    "letter": "H"
  },
  {
    "term": "Horsepower (hp)",
    "definition": "British unit of power. I",
    "category": "Physics",
    "letter": "H"
  },
  {
    "term": "Hounsfield unit (HU)",
    "definition": "Scale of computed tomographic I numbers used to assess the nature of tissue. m",
    "category": "General",
    "letter": "H"
  },
  {
    "term": "Hybrid subtraction",
    "definition": "Technique that combines temporal I and energy subtraction. w",
    "category": "Digital Imaging",
    "letter": "H"
  },
  {
    "term": "Hydroquinone",
    "definition": "Principal compound used in the chemi- I cal composition of film developers. m",
    "category": "Digital Imaging",
    "letter": "H"
  },
  {
    "term": "Hypersthenic",
    "definition": "Referring to a body habitus of a patient o",
    "category": "General",
    "letter": "H"
  },
  {
    "term": "Hypo",
    "definition": "Sodium thiosulfate, a fixing agent that removes I unexposed and undeveloped silver halide crystals from x the emulsion. p",
    "category": "Radiation Protection",
    "letter": "H"
  },
  {
    "term": "Hypo retention",
    "definition": "Undesirable retention of the fixer in s emulsion. d",
    "category": "Image Quality",
    "letter": "H"
  },
  {
    "term": "Hyposthenic",
    "definition": "Referring to a body habitus of a patient I who is thin but healthy looking. r",
    "category": "General",
    "letter": "H"
  },
  {
    "term": "Hysteresis",
    "definition": "Additional resistance created by the alter- p",
    "category": "Digital Imaging",
    "letter": "H"
  },
  {
    "term": "Image detail",
    "definition": "Sharpness of small structures on the I radiograph. r",
    "category": "General",
    "letter": "I"
  },
  {
    "term": "Image intensifier",
    "definition": "Electronic vacuum tube that amplifies I a fluoroscopic image to reduce patient dose. u",
    "category": "Radiation Protection",
    "letter": "I"
  },
  {
    "term": "Image matrix",
    "definition": "Layout of cells in rows and columns. i",
    "category": "Radiobiology",
    "letter": "I"
  },
  {
    "term": "Image noise",
    "definition": "Deterioration of the radiographic image. b",
    "category": "Image Quality",
    "letter": "I"
  },
  {
    "term": "Image receptor (IR)",
    "definition": "Medium that transforms the x-ray I beam into a visible image; radiographic film or a phos- d",
    "category": "Image Quality",
    "letter": "I",
    "units": "IR"
  },
  {
    "term": "Image receptor contrast",
    "definition": "Contrast that is inherent in the v",
    "category": "Image Quality",
    "letter": "I"
  },
  {
    "term": "Image-forming x-ray",
    "definition": "X-ray that exits from the patient I and enters the image receptor. a",
    "category": "General",
    "letter": "I"
  },
  {
    "term": "Improper fraction",
    "definition": "Fraction in which the quotient is I",
    "category": "General",
    "letter": "I"
  },
  {
    "term": "In vivo",
    "definition": "In the living cell. r",
    "category": "Radiobiology",
    "letter": "I"
  },
  {
    "term": "Indirect effect",
    "definition": "Effect of radiation that results from the s",
    "category": "Radiobiology",
    "letter": "I"
  },
  {
    "term": "Induction",
    "definition": "Process of making ferromagnetic material r magnetic. b",
    "category": "Physics",
    "letter": "I"
  },
  {
    "term": "Induction motor",
    "definition": "Electric motor in which the rotor is a I series of wire loops but the external magnetic field is i supplied by several fixed electromagnets called stators. l",
    "category": "Equipment",
    "letter": "I"
  },
  {
    "term": "Inertia",
    "definition": "Property of matter that resists change in motion l",
    "category": "Physics",
    "letter": "I"
  },
  {
    "term": "Infrared light",
    "definition": "Light that consists of photons with wave- e lengths longer than those of visible light but shorter l than those of microwaves. s",
    "category": "Digital Imaging",
    "letter": "I"
  },
  {
    "term": "Infrared radiation",
    "definition": "Electromagnetic radiation just lower in energy than visible light, with a wavelength in the range of 0.7 to 1000 um (or 700 to 1000 nm).",
    "category": "Physics",
    "letter": "I"
  },
  {
    "term": "Inherent filtration",
    "definition": "Filtration of useful x-ray beams provided by the permanently installed components of an x-ray tube housing assembly and the glass window of an x-ray tube. Initiation time 'Time required to start an exposure.",
    "category": "Image Quality",
    "letter": "I"
  },
  {
    "term": "Input",
    "definition": "Process of transferring information into primary memory.",
    "category": "General",
    "letter": "I"
  },
  {
    "term": "Insulator",
    "definition": "Material that inhibits the flow of electrons within a conductor or during heat transfer.",
    "category": "Physics",
    "letter": "I"
  },
  {
    "term": "Integrate mode",
    "definition": "Function of an instrument designed to measure the total accumulated intensity of radiation over time.",
    "category": "General",
    "letter": "I"
  },
  {
    "term": "Intensification factor (IF)",
    "definition": "Ratio of exposure without screens to that with screens to produce the same optical density.",
    "category": "Digital Imaging",
    "letter": "I"
  },
  {
    "term": "Intensifying screen",
    "definition": "Sensitive phosphor that converts x-rays to light to shorten exposure time and reduce patient dose.",
    "category": "Radiation Protection",
    "letter": "I"
  },
  {
    "term": "Intensity profile",
    "definition": "Projection formed by the intensity of radiation detected according to the attenuation pattern.",
    "category": "General",
    "letter": "I"
  },
  {
    "term": "Interface",
    "definition": "Hardware and software that enable imaging systems to interconnect and to connect with printers.",
    "category": "General",
    "letter": "I"
  },
  {
    "term": "Internally deposited radionuclide",
    "definition": "Naturally occurring radionuclide in the human body.",
    "category": "General",
    "letter": "I"
  },
  {
    "term": "International System of Units (SI)",
    "definition": "Standard system of units based on the meter, the kilogram, and the second; it has been adopted by all countries and is used in all branches of science.",
    "category": "General",
    "letter": "I"
  },
  {
    "term": "Interphase",
    "definition": "Period of growth of the cell between divisions.",
    "category": "Radiobiology",
    "letter": "I"
  },
  {
    "term": "Interpolation",
    "definition": "Estimation of a value between two known values.",
    "category": "General",
    "letter": "I"
  },
  {
    "term": "Interrogation time",
    "definition": "Time during which the signal from an image detector is sampled.",
    "category": "General",
    "letter": "I"
  },
  {
    "term": "Interspace material",
    "definition": "Sections of radiolucent material in a grid.",
    "category": "Image Quality",
    "letter": "I"
  },
  {
    "term": "Interstitial",
    "definition": "Referring to the area between cells.",
    "category": "Radiobiology",
    "letter": "I"
  },
  {
    "term": "Inverse square law",
    "definition": "Law that states that the intensity of radiation at a location is inversely proportional to the square of its distance from the source of radiation.",
    "category": "Physics",
    "letter": "I"
  },
  {
    "term": "Inverse voltage",
    "definition": "Current that flows from the anode to the cathode.",
    "category": "Equipment",
    "letter": "I"
  },
  {
    "term": "Inverter",
    "definition": "High-speed switches that convert direct current into a series of square pulses.",
    "category": "Image Quality",
    "letter": "I"
  },
  {
    "term": "Irradiated",
    "definition": "Referring to matter that intercepts radiation and absorbs part or all of it; exposed.",
    "category": "Physics",
    "letter": "I"
  },
  {
    "term": "Isomers",
    "definition": "Atoms that have the same numbers of protons and neutrons but a different nuclear energy state.",
    "category": "Physics",
    "letter": "I"
  },
  {
    "term": "Isotones",
    "definition": "Atoms that have the same number of neutrons.",
    "category": "Physics",
    "letter": "I"
  },
  {
    "term": "Isotopes",
    "definition": "Atoms that have the same number of protons but a different number of neutrons.",
    "category": "Physics",
    "letter": "I"
  },
  {
    "term": "Isotropic",
    "definition": "Equal intensity in all directions; having the same properties in all directions. Joule (J) Unit of energy; the work done when a force of 1 N acts on an object along a distance of 1 m.",
    "category": "Physics",
    "letter": "I"
  },
  {
    "term": "J).",
    "definition": "W=F xd.",
    "category": "General",
    "letter": "J"
  },
  {
    "term": "Karyotype",
    "definition": "Chromosome map.",
    "category": "Radiobiology",
    "letter": "K"
  },
  {
    "term": "Kerma (k)",
    "definition": "Energy absorbed per unit mass from the initial kinetic energy released in matter of all the electrons liberated by x-rays or gamma rays. Expressed in eray (Gy). 1 Gy = 1 J/kg.",
    "category": "Radiobiology",
    "letter": "K",
    "units": "eray (Gy)"
  },
  {
    "term": "Kilo-",
    "definition": "Prefix meaning \"one thousand.\"",
    "category": "General",
    "letter": "K"
  },
  {
    "term": "Kiloelectron volt (keV)",
    "definition": "The kinetic energy of an electron equivalent to 1000 eV. 1 keV = 1000 eV.",
    "category": "Physics",
    "letter": "K",
    "units": "keV"
  },
  {
    "term": "Kilogram (kg)",
    "definition": "Scientific unit of mass that is unrelated to gravitational effects; 1000 g.",
    "category": "Physics",
    "letter": "K",
    "units": "kg"
  },
  {
    "term": "Kilovolt (kV)",
    "definition": "Electric potential equal to 1000 V.",
    "category": "Physics",
    "letter": "K",
    "units": "kV"
  },
  {
    "term": "Kilovolt peak (kVp)",
    "definition": "Measure of the maximum electrical potential across an x-ray tube; expressed in kilovolts.",
    "category": "Digital Imaging",
    "letter": "K",
    "units": "kVp"
  },
  {
    "term": "Kinetic energy",
    "definition": "Energy of motion.",
    "category": "Physics",
    "letter": "K"
  },
  {
    "term": "Lag",
    "definition": "Phosphorescence.",
    "category": "General",
    "letter": "L"
  },
  {
    "term": "Laser disc",
    "definition": "Removable disc that uses laser technology to write and read data.",
    "category": "Radiation Protection",
    "letter": "L"
  },
  {
    "term": "Late effect",
    "definition": "Radiation response that is not observed for 6 months or longer after exposure.",
    "category": "General",
    "letter": "L"
  },
  {
    "term": "Latent image",
    "definition": "Unobservable image stored in the silver halide emulsion; it is made manifest by processing.",
    "category": "Image Quality",
    "letter": "L"
  },
  {
    "term": "Latent image center",
    "definition": "Sensitivity center that has many silver ions attracted to it.",
    "category": "General",
    "letter": "L"
  },
  {
    "term": "Latent period",
    "definition": "Period after the prodromal stage of the acute radiation syndrome during which no sign of radiation sickness is apparent.",
    "category": "Radiobiology",
    "letter": "L"
  },
  {
    "term": "Lateral decentering",
    "definition": "Improper positioning of the grid that results in cutoff.",
    "category": "Image Quality",
    "letter": "L"
  },
  {
    "term": "Latitude",
    "definition": "Range of x-ray exposure over which a radiograph is acceptable.",
    "category": "General",
    "letter": "L"
  },
  {
    "term": "Law of Bergonié and Tribondeau",
    "definition": "Principle that states that the radiosensitivity of cells is directly proportional to their reproductive activity and inversely proportional to their degree of differentiation. e",
    "category": "Radiobiology",
    "letter": "L"
  },
  {
    "term": "Law of conservation of matter",
    "definition": "Principle that states that matter can be neither created nor destroyed.",
    "category": "Digital Imaging",
    "letter": "L"
  },
  {
    "term": "Law of inertia",
    "definition": "Principle that states that a body will remain at rest or will continue to move with a constant velocity in a straight line unless acted on by an external force.",
    "category": "Radiation Protection",
    "letter": "L"
  },
  {
    "term": "LDsoco",
    "definition": "Dose of radiation expected to cause death within 60 days to 50% of those exposed.",
    "category": "Radiation Protection",
    "letter": "L"
  },
  {
    "term": "Leakage radiation",
    "definition": "Secondary radiation emitted through the tube housing.",
    "category": "Equipment",
    "letter": "L"
  },
  {
    "term": "Limiting resolution",
    "definition": "Spatial frequency at a modulation transfer function equal to 0.1.",
    "category": "Digital Imaging",
    "letter": "L"
  },
  {
    "term": "Line focus",
    "definition": "Projection of an inclined line onto a surface, resulting in a smaller size.",
    "category": "General",
    "letter": "L"
  },
  {
    "term": "Line focus principle",
    "definition": "Design incorporated into x-ray tube targets to allow a large area for heating while a small focal spot is maintained.",
    "category": "Equipment",
    "letter": "L"
  },
  {
    "term": "Line pair",
    "definition": "One bar and its interspace of equal width.",
    "category": "General",
    "letter": "L"
  },
  {
    "term": "Linear energy transfer (LET)",
    "definition": "Measure of the rate at which energy is transferred from ionizing radiation to soft tissue. Expressed in kiloelectron volts per micrometer of soft tissue.",
    "category": "Radiobiology",
    "letter": "L"
  },
  {
    "term": "Linear tomography",
    "definition": "Imaging modality in which the x-ray tube is mechanically attached to the image receptor and moves in one direction as the image receptor moves in the opposite direction.",
    "category": "Equipment",
    "letter": "L"
  },
  {
    "term": "Linear, nonthreshold",
    "definition": "Referring to the dose-response relationship that intersects the dose axis at or below",
    "category": "Radiation Protection",
    "letter": "L"
  },
  {
    "term": "Linear, threshold",
    "definition": "Referring to the dose-response relationship that intercepts the dose axis at a value greater than zero.",
    "category": "Radiation Protection",
    "letter": "L"
  },
  {
    "term": "Lodestone",
    "definition": "A leading stone. A natural magnet.",
    "category": "General",
    "letter": "L"
  },
  {
    "term": "Log relative exposure (LRE)",
    "definition": "Change in optical density over each exposure interval.",
    "category": "Image Quality",
    "letter": "L",
    "units": "LRE"
  },
  {
    "term": "Logic function",
    "definition": "Computer-recognized command that evaluates an intermediate result and performs subsequent computations in accordance with that result.",
    "category": "General",
    "letter": "L"
  },
  {
    "term": "lon",
    "definition": "Atom with too many or too few electrons; an electrically charged particle.",
    "category": "Physics",
    "letter": "L"
  },
  {
    "term": "lon pair",
    "definition": "Two oppositely charged particles.",
    "category": "General",
    "letter": "L"
  },
  {
    "term": "lonchamber",
    "definition": "Instrument that detects and measures the radiation intensity in areas outside of protective barriers.",
    "category": "Radiation Protection",
    "letter": "L"
  },
  {
    "term": "Long gray scale",
    "definition": "Low-contrast radiograph that has many shades of gray.",
    "category": "Image Quality",
    "letter": "L"
  },
  {
    "term": "lonic bond",
    "definition": "Bonding that occurs because of an electrostatic force between ions.",
    "category": "Physics",
    "letter": "L"
  },
  {
    "term": "lonization",
    "definition": "Removal of an orbital electron from an atom.",
    "category": "Radiation Protection",
    "letter": "L"
  },
  {
    "term": "lonization potential",
    "definition": "Amount of energy (34 eV) necessary to 1onize tissue atoms.",
    "category": "Physics",
    "letter": "L"
  },
  {
    "term": "lonized",
    "definition": "Referring to an atom that has an extra electron or has had an electron removed.",
    "category": "Radiation Protection",
    "letter": "L"
  },
  {
    "term": "lonizing radiation",
    "definition": "Radiation capable of ionization.",
    "category": "General",
    "letter": "L"
  },
  {
    "term": "Look-up table (LUT)",
    "definition": "Matrix of data that manipulates the values of gray levels, converting an image input value to a different output value.",
    "category": "Digital Imaging",
    "letter": "L"
  },
  {
    "term": "Low-contrast resolution",
    "definition": "Ability to image objects with similar subject contrast.",
    "category": "Digital Imaging",
    "letter": "L"
  },
  {
    "term": "lsobars",
    "definition": "Atoms that have the same number of nucleons but different numbers of protons and neutrons.",
    "category": "Physics",
    "letter": "L"
  },
  {
    "term": "lsochromatid",
    "definition": "Fragment in a chromosome aberration.",
    "category": "Radiobiology",
    "letter": "L"
  },
  {
    "term": "Luminescence",
    "definition": "Emission of visible light.",
    "category": "General",
    "letter": "L"
  },
  {
    "term": "Lymphocyte",
    "definition": "White blood cell that plays an active role in providing immunity for the body by producing antibodies; it is the most radiosensitive blood cell:",
    "category": "Radiobiology",
    "letter": "L"
  },
  {
    "term": "Lysosome",
    "definition": "Cell that contains enzymes capable of digesting cellular fragments..",
    "category": "Radiobiology",
    "letter": "L"
  },
  {
    "term": "Magnetic dipole",
    "definition": "Current that flows in an infinitesimally e small loop.",
    "category": "Physics",
    "letter": "M"
  },
  {
    "term": "Magnetic dipole moment",
    "definition": "Vector with a magnitude equal to the product of the current that flows in a loop and the area of the current loop.",
    "category": "Physics",
    "letter": "M"
  },
  {
    "term": "Magnetic domain",
    "definition": "An accumulation of many atomic magnets with their dipoles aligned.",
    "category": "Physics",
    "letter": "M"
  },
  {
    "term": "Magnetic permeability",
    "definition": "Property of a material that causes a it to attract the imaginary lines of the magnetic field.",
    "category": "Physics",
    "letter": "M"
  },
  {
    "term": "Magnetic susceptibility",
    "definition": "The ease with which a substance can be magnetized.",
    "category": "Physics",
    "letter": "M"
  },
  {
    "term": "Magnetism",
    "definition": "The polarization of a material. c",
    "category": "Physics",
    "letter": "M"
  },
  {
    "term": "Magnetite",
    "definition": "The magnetic oxide of iron.",
    "category": "Physics",
    "letter": "M"
  },
  {
    "term": "Magnetization",
    "definition": "Relative magnetic flux density in a material compared with that in a vacuum.",
    "category": "Image Quality",
    "letter": "M"
  },
  {
    "term": "Magnification",
    "definition": "Condition in which the images on the c radiograph are larger than the object they represent.",
    "category": "Image Quality",
    "letter": "M"
  },
  {
    "term": "Magnitude",
    "definition": "Number that represents a quantity.",
    "category": "General",
    "letter": "M"
  },
  {
    "term": "Main-chain scission",
    "definition": "Breakage of the long-chain macromolecule that divides the long, single molecule into smaller ones. Mainframe computer <A fast, mediumto large-capacity system that has multiple microprocessors.",
    "category": "Digital Imaging",
    "letter": "M"
  },
  {
    "term": "Mammographer",
    "definition": "A radiologic technologist who specializes in breast x-ray studies.",
    "category": "Equipment",
    "letter": "M"
  },
  {
    "term": "Mammography",
    "definition": "Radiographic examination of the breast using low kilovoltage.",
    "category": "Equipment",
    "letter": "M"
  },
  {
    "term": "Man-made radiation",
    "definition": "X-rays and artificially produced radionuclides used for nuclear medicine.",
    "category": "General",
    "letter": "M"
  },
  {
    "term": "Manifest illness",
    "definition": "Stage of acute radiation syndrome during which signs and symptoms are apparent.",
    "category": "Radiobiology",
    "letter": "M"
  },
  {
    "term": "Manifest image",
    "definition": "The observable image that is formed when the latent image undergoes proper chemical processing.",
    "category": "General",
    "letter": "M"
  },
  {
    "term": "Mask image",
    "definition": "Image obtained from mask mode.",
    "category": "General",
    "letter": "M"
  },
  {
    "term": "Mask mode",
    "definition": "Method of temporal subtraction that results in successive subtraction images of contrast-filled vessels.",
    "category": "Digital Imaging",
    "letter": "M"
  },
  {
    "term": "Masking",
    "definition": "The act of ensuring that no extraneous light from the viewbox enters the viewer's eyes.",
    "category": "General",
    "letter": "M"
  },
  {
    "term": "Mass",
    "definition": "A quantity of matter; expressed in kilograms.",
    "category": "Physics",
    "letter": "M",
    "units": "kilograms"
  },
  {
    "term": "Mass density",
    "definition": "Quantity of matter per unit volume.",
    "category": "Image Quality",
    "letter": "M"
  },
  {
    "term": "Mass-energy equivalence",
    "definition": "Energy equals mass multiplied by the square of the speed of light.",
    "category": "Image Quality",
    "letter": "M"
  },
  {
    "term": "Matrix",
    "definition": "Rows and columns of pixels displayed on a digital image.",
    "category": "Digital Imaging",
    "letter": "M"
  },
  {
    "term": "Matter",
    "definition": "Anything that occupies space and has form or shape.",
    "category": "Physics",
    "letter": "M"
  },
  {
    "term": "Maximum permissible dose (MPD)",
    "definition": "Dose of occupational radiation that would be expected to produce no significant radiation effects. An old expression. Replaced by Dose Limit.",
    "category": "Radiation Protection",
    "letter": "M"
  },
  {
    "term": "Maximum-intensity projection (MIP)",
    "definition": "Reconstruction of an image through selection of the highest-value pixels along any arbitrary line in the data set; only those pixels are exhibited.",
    "category": "Digital Imaging",
    "letter": "M"
  },
  {
    "term": "Mean lethal dose",
    "definition": "Constant related to the radiosensitivity of a cell.",
    "category": "Radiation Protection",
    "letter": "M"
  },
  {
    "term": "Mean marrow dose (MMD)",
    "definition": "Average radiation dose to the entire active bone marrow.",
    "category": "Radiation Protection",
    "letter": "M"
  },
  {
    "term": "Mean survival time",
    "definition": "Average time between exposure and death.",
    "category": "General",
    "letter": "M"
  },
  {
    "term": "Mechanical energy",
    "definition": "Ability of an object to do work. See also Kinetic energy and Potential energy.",
    "category": "Physics",
    "letter": "M"
  },
  {
    "term": "Medical physicist",
    "definition": "Physicist who examines and monitors the performance of imaging equipment.",
    "category": "Digital Imaging",
    "letter": "M"
  },
  {
    "term": "Meiosis",
    "definition": "Process of germ cell division that reduces the chromosomes in each daughter cell to half the number of chromosomes in the parent cell.",
    "category": "Radiobiology",
    "letter": "M"
  },
  {
    "term": "Metabolism",
    "definition": "Anabolism and catabolism.",
    "category": "Radiobiology",
    "letter": "M"
  },
  {
    "term": "Metaphase",
    "definition": "Phase of cell division during which the chromosomes are divisible.",
    "category": "Radiobiology",
    "letter": "M"
  },
  {
    "term": "Meto!l",
    "definition": "Secondary constituent used in the chemical composition of developing agents.",
    "category": "General",
    "letter": "M"
  },
  {
    "term": "Microcalcifications",
    "definition": "Calcific deposits that appear as small grains of varying sizes on the x-ray film.",
    "category": "Digital Imaging",
    "letter": "M"
  },
  {
    "term": "Microcomputer",
    "definition": "Personal computer or _ electronic organizer.",
    "category": "Digital Imaging",
    "letter": "M"
  },
  {
    "term": "Microcontroller",
    "definition": "Tiny computer installed in an appliance.",
    "category": "Digital Imaging",
    "letter": "M"
  },
  {
    "term": "Microfocus tube",
    "definition": "Tube that has a very small focal spot and that is specifically designed for imaging very small microcalcifications at relatively short source-to-image distances.",
    "category": "Digital Imaging",
    "letter": "M"
  },
  {
    "term": "Microwave",
    "definition": "Short-wavelength radiofrequency.",
    "category": "Digital Imaging",
    "letter": "M"
  },
  {
    "term": "Mid-density (MD) step",
    "definition": "Step that has an average optical density closest to, but not less than, 1.2.",
    "category": "Image Quality",
    "letter": "M"
  },
  {
    "term": "Milliampere (mA)",
    "definition": "Measure of x-ray tube current.",
    "category": "Equipment",
    "letter": "M",
    "units": "mA"
  },
  {
    "term": "Milliampere-second (mAs)",
    "definition": "Product of exposure time and x-ray tube current; measure of the total number of electrons.",
    "category": "Equipment",
    "letter": "M",
    "units": "mAs"
  },
  {
    "term": "Minification gain",
    "definition": "Ratio of the square of the diameter of the input phosphor to the square of the diameter of the output phosphor.",
    "category": "General",
    "letter": "M"
  },
  {
    "term": "Misregistration",
    "definition": "Misalignment of two or more images because of patient motion between image acquisitions.",
    "category": "General",
    "letter": "M"
  },
  {
    "term": "Mitochondrion",
    "definition": "Structure that digests macromolecules to produce energy for the cell.",
    "category": "Radiobiology",
    "letter": "M"
  },
  {
    "term": "Mitosis (M)",
    "definition": "Process of somatic cell division wherein a parent cell divides to form two daughter cells identical to the parent cell.",
    "category": "Radiobiology",
    "letter": "M"
  },
  {
    "term": "Modem",
    "definition": "Device that converts digital information into analog information.",
    "category": "Digital Imaging",
    "letter": "M"
  },
  {
    "term": "Modulation",
    "definition": "Changing of the magnitude of a video signal; the magnitude is directly proportional to the light intensity received by the television camera tube.",
    "category": "Equipment",
    "letter": "M"
  },
  {
    "term": "Modulation transfer function (MTF)",
    "definition": "Mathematical procedure for measuring resolution.",
    "category": "Digital Imaging",
    "letter": "M"
  },
  {
    "term": "Molecule",
    "definition": "Group of atoms of various elements held together by chemical forces; the smallest unit of a compound that can exist by itself and retain all its chemical properties. used in mammography.",
    "category": "Equipment",
    "letter": "M"
  },
  {
    "term": "Momentum",
    "definition": "Product of the mass of an object and its velocity.",
    "category": "Physics",
    "letter": "M"
  },
  {
    "term": "Monoenergetic",
    "definition": "Beam that contains x-rays or gamma rays that all have the same energy.",
    "category": "Physics",
    "letter": "M"
  },
  {
    "term": "Monosaccharide",
    "definition": "A sugar.",
    "category": "General",
    "letter": "M"
  },
  {
    "term": "Motherboard",
    "definition": "Main circuit board in a system unit.",
    "category": "Physics",
    "letter": "M"
  },
  {
    "term": "Motion blur",
    "definition": "Blurring of the image that results from movement of the patient or the x-ray tube during exposure.",
    "category": "Image Quality",
    "letter": "M"
  },
  {
    "term": "Moving grid",
    "definition": "Grid that moves while the x-ray exposure is being made.",
    "category": "Image Quality",
    "letter": "M"
  },
  {
    "term": "Multiplanar reformation (MPR)",
    "definition": "Process by which transverse images are stacked to form a three-dimensional data set.",
    "category": "General",
    "letter": "M",
    "units": "MPR"
  },
  {
    "term": "Multislice computed tomography",
    "definition": "Imaging modality that uses two detector arrays to produce two spiral slices at the same time.",
    "category": "General",
    "letter": "M"
  },
  {
    "term": "Multitarget or single-hit model",
    "definition": "Model of radiation doseresponse relationship for more complicated biologic systems, such as human cells.",
    "category": "Radiation Protection",
    "letter": "M"
  },
  {
    "term": "Muscle",
    "definition": "Tissue that is capable of contracting.",
    "category": "General",
    "letter": "M"
  },
  {
    "term": "Mutual induction",
    "definition": "Process of producing electricity in a secondary coil by passing an alternating current through a nearby primary coil. National Council on Radiation Protection and Measurement",
    "category": "Radiation Protection",
    "letter": "M"
  },
  {
    "term": "nate reversal of the magnetic field caused by the alter-",
    "definition": "I nating current. s",
    "category": "Physics",
    "letter": "N"
  },
  {
    "term": "Natural environmental radiation",
    "definition": "Naturally occurring ionizing radiation, including cosmic rays, terrestrial radiation, and internally deposited radionuclides.",
    "category": "General",
    "letter": "N"
  },
  {
    "term": "Natural magnet",
    "definition": "Magnet that gets its magnetism from the Earth.",
    "category": "Physics",
    "letter": "N"
  },
  {
    "term": "NCRP)",
    "definition": "Organization that continuously reviews recommended dose limits.",
    "category": "Radiation Protection",
    "letter": "N"
  },
  {
    "term": "Nervous tissue",
    "definition": "Tissue that consists of neurons and serves as the avenue through which electrical impulses are transmitted throughout the body for control and response.",
    "category": "Physics",
    "letter": "N"
  },
  {
    "term": "Neuron",
    "definition": "Cell of the nervous system that has long, thin extensions from the cell to distant parts of the body.",
    "category": "Radiobiology",
    "letter": "N"
  },
  {
    "term": "Neutron",
    "definition": "Uncharged elementary particle, with a mass slightly greater than that of the proton, that is found in the nucleus of every atom heavier than hydrogen.",
    "category": "Digital Imaging",
    "letter": "N"
  },
  {
    "term": "Newton (N)",
    "definition": "Unit of force in the SI system; 1 N=0.22 lb.",
    "category": "Physics",
    "letter": "N"
  },
  {
    "term": "Node",
    "definition": "One of many stations or terminals of a computer network.",
    "category": "Physics",
    "letter": "N"
  },
  {
    "term": "Noise",
    "definition": "a. Grainy or uneven appearance of an image caused by an insufficient number of primary x-rays. b. Uniform signal produced by scattered x-rays.",
    "category": "Image Quality",
    "letter": "N"
  },
  {
    "term": "Nonionizing radiation",
    "definition": "Radiation for which the mechanism of action in tissue does not directly ionize atomic or molecular systems through a single interaction.",
    "category": "Physics",
    "letter": "N"
  },
  {
    "term": "Nonlinear, nonthreshold",
    "definition": "Referring to varied responses that are produced from varied doses, with any dose expected to produce a response. aNroen lproduced from varied doses, with a particular level below which there 1s no response.",
    "category": "Radiation Protection",
    "letter": "N"
  },
  {
    "term": "Nonscheduled maintenance",
    "definition": "Maintenance that becomes necessary because of a failure in the system that necessitates processor repair.",
    "category": "General",
    "letter": "N"
  },
  {
    "term": "Nonstochastic effects",
    "definition": "Biologic effects of ionizing radiation that demonstrate the existence of a threshold. Severity of biologic damage increases with increased dose. See Determination Effects.",
    "category": "Radiation Protection",
    "letter": "N"
  },
  {
    "term": "North pole",
    "definition": "Magnetic pole that has a positive electrostatic charge.",
    "category": "Physics",
    "letter": "N"
  },
  {
    "term": "Nuclear energy",
    "definition": "Energy contained within the nucleus of an atom.",
    "category": "Physics",
    "letter": "N"
  },
  {
    "term": "Nucleolus",
    "definition": "Rounded structure that often is attached to the nuclear membrane and controls the passage of mol-",
    "category": "General",
    "letter": "N"
  },
  {
    "term": "Nucleon",
    "definition": "A proton or a neutron.",
    "category": "Physics",
    "letter": "N"
  },
  {
    "term": "Nucleotide",
    "definition": "Unit formed from a nitrogenous base, a five-carbon sugar molecule, and a phosphate molecule.",
    "category": "General",
    "letter": "N"
  },
  {
    "term": "Nucleus",
    "definition": "a. Center of a living cell; spherical mass of protoplasm that contains the genetic material (DNA) that is stored in its molecular structure. b. Center of an atom that contains neutrons and protons.",
    "category": "Radiobiology",
    "letter": "N"
  },
  {
    "term": "Nuclide",
    "definition": "General term that refers to all known isotopes, both stable and unstable, of chemical elements.",
    "category": "General",
    "letter": "N"
  },
  {
    "term": "Object plane",
    "definition": "Plane in which the anatomical structures that are to be imaged lie.",
    "category": "Physics",
    "letter": "O"
  },
  {
    "term": "Object-to-image receptor distance (OID)",
    "definition": "Distance from the image receptor to the object that is to be imaged.",
    "category": "General",
    "letter": "O"
  },
  {
    "term": "Occupational dose",
    "definition": "Dose received by an individual in a restricted area during the course of employment in which the individual's assigned duties involve exposure to radiation.",
    "category": "Radiation Protection",
    "letter": "O"
  },
  {
    "term": "Occupational exposure",
    "definition": "Radiation exposure received by radiation workers.",
    "category": "Radiation Protection",
    "letter": "O"
  },
  {
    "term": "Off-focus radiation",
    "definition": "X-rays produced in the anode but not at the focal spot.",
    "category": "Equipment",
    "letter": "O"
  },
  {
    "term": "Off-level grid",
    "definition": "Artifact produced by an improperly positioned radiographic tube—not by an improperly positioned grid.",
    "category": "Image Quality",
    "letter": "O"
  },
  {
    "term": "Oocytes",
    "definition": "Primordial follicles that grow to encapsulate oogonia.",
    "category": "General",
    "letter": "O"
  },
  {
    "term": "Opaque",
    "definition": "Surface that does not allow the passage of light.",
    "category": "General",
    "letter": "O"
  },
  {
    "term": "Open filament",
    "definition": "Condition that results when the filament becomes thinner and breaks.",
    "category": "Equipment",
    "letter": "O"
  },
  {
    "term": "Operating console",
    "definition": "Console that allows the radiologic technologist to control the x-ray tube current and voltage so that the useful x-ray beam is of proper quantity and quality.",
    "category": "Equipment",
    "letter": "O"
  },
  {
    "term": "Operating system",
    "definition": "Series of instructions that organizes the course of data through the computer to solve a particular problem.",
    "category": "General",
    "letter": "O"
  },
  {
    "term": "Optical density",
    "definition": "Degree of blackening of a radiograph.",
    "category": "Image Quality",
    "letter": "O"
  },
  {
    "term": "Optical disc",
    "definition": "Removable disc that uses laser technology to write and read data.",
    "category": "Radiation Protection",
    "letter": "O"
  },
  {
    "term": "Ordered pairs",
    "definition": "Notation for coordinates in which the first number of the pair represents a distance along the x-axis and the second number indicates a distance up the y-axis.",
    "category": "General",
    "letter": "O"
  },
  {
    "term": "Organ system",
    "definition": "Combination of tissues and organs that forms an overall integrated organization.",
    "category": "General",
    "letter": "O"
  },
  {
    "term": "Organic molecule",
    "definition": "Molecule that is life supporting and contains carbon.",
    "category": "General",
    "letter": "O"
  },
  {
    "term": "Organs",
    "definition": "Collection of tissues of similar structure and function.",
    "category": "General",
    "letter": "O"
  },
  {
    "term": "Origin",
    "definition": "Point at which two axes meet on a graph.",
    "category": "General",
    "letter": "O"
  },
  {
    "term": "Orthochromatic",
    "definition": "Referring to blueor green-sensitive film; usually exposed with rare Earth screen.",
    "category": "Digital Imaging",
    "letter": "O"
  },
  {
    "term": "Outcome analysis",
    "definition": "Image interpretation that involves reconciling the patient's ultimate disease condition with the radiologist's diagnosis.",
    "category": "General",
    "letter": "O"
  },
  {
    "term": "Output",
    "definition": "Process of transferring the results of a computation from primary memory to storage or to the user.",
    "category": "General",
    "letter": "O"
  },
  {
    "term": "Overcoat",
    "definition": "Protective covering of gelatin that encloses the emulsion.",
    "category": "Image Quality",
    "letter": "O"
  },
  {
    "term": "Overexposed",
    "definition": "Referring to a radiograph that is too dark because too much x-radiation reached the image receptor.",
    "category": "General",
    "letter": "O"
  },
  {
    "term": "Ovum",
    "definition": "Mature germ cell in a female.",
    "category": "Radiobiology",
    "letter": "O"
  },
  {
    "term": "Oxidation",
    "definition": "Reaction that produces an electron.",
    "category": "Physics",
    "letter": "O"
  },
  {
    "term": "Oxygen enhancement ratio (OER)",
    "definition": "Ratio of the dose necessary to produce a given effect under anoxic conditions to the dose necessary to produce the same effect under aerobic conditions.",
    "category": "Radiation Protection",
    "letter": "O",
    "units": "OER"
  },
  {
    "term": "P Prroopportional counter",
    "definition": "Sensitive instrument that is used primarily as stationary laboratory instrument for the assay of small quantities of radioactivity.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Pair production",
    "definition": "Interaction between the x-ray and the nuclear electric field that causes the x-ray to disappear and that causes two electrons—one positive and one negative—to take its place.",
    "category": "Physics",
    "letter": "P"
  },
  {
    "term": "Panchromatic",
    "definition": "Referring to film that is sensitive to the entire visible light spectrum.",
    "category": "Image Quality",
    "letter": "P"
  },
  {
    "term": "Parallel circuit",
    "definition": "Circuit that contains elements that bridge conductors rather than lie in a line along a conductor.",
    "category": "Physics",
    "letter": "P"
  },
  {
    "term": "Parallel grid",
    "definition": "Simple grid in which all lead grid strips are parallel.",
    "category": "Image Quality",
    "letter": "P"
  },
  {
    "term": "Paramagnetic",
    "definition": "Referring to materials slightly attracted to a magnet and loosely influenced by an external magnetic field.",
    "category": "Physics",
    "letter": "P"
  },
  {
    "term": "Parenchymal",
    "definition": "Referring to part of the organ that contains tissues representative of that particular organ.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Partial volume effect",
    "definition": "Distortion of signal intensity from a tissue because it extends partially into an adjacent slice thickness.",
    "category": "Image Quality",
    "letter": "P"
  },
  {
    "term": "Particle accelerator",
    "definition": "An atom \"smasher.\" Cyclotron. Linear Accelerator.",
    "category": "Physics",
    "letter": "P"
  },
  {
    "term": "Particulate radiation",
    "definition": "Radiation distinct from x-rays and gamma rays; examples include alpha particles, electrons, neutrons, and protons.",
    "category": "Physics",
    "letter": "P"
  },
  {
    "term": "Penetrability",
    "definition": "Ability of an x-ray to penetrate tissue; range in tissue; x-ray quality.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Penetrometer",
    "definition": "Aluminum step wedge.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Penumbra",
    "definition": "Image blur that results from the size of the focal spot; geometric unsharpness.",
    "category": "Image Quality",
    "letter": "P"
  },
  {
    "term": "Permanent magnet",
    "definition": "Magnet whose magnetism is induced artificially.",
    "category": "Physics",
    "letter": "P"
  },
  {
    "term": "Phantom",
    "definition": "Device that simulates some parameters of the human body for evaluation of imaging system performance.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Phenidone",
    "definition": "Secondary constituent in the chemical composition of developing agents.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Phosphor",
    "definition": "Active layer of the radiographic intensifying screen closest to the radiographic film.",
    "category": "Digital Imaging",
    "letter": "P"
  },
  {
    "term": "Phosphorescence",
    "definition": "Emission of visible light during and after stimulation.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Photoconductor",
    "definition": "Material that conducts electrons when illuminated.",
    "category": "Physics",
    "letter": "P"
  },
  {
    "term": "Photodiode",
    "definition": "Solid-state device that converts light into an electric current.",
    "category": "Physics",
    "letter": "P"
  },
  {
    "term": "Photodisintegration",
    "definition": "Process by which very high-energy x-rays can escape interaction with electrons and the nuclear electric field and can be absorbed directly by the nucleus.",
    "category": "Radiobiology",
    "letter": "P"
  },
  {
    "term": "Photoelectric effect",
    "definition": "Absorption of an x-ray by 1onization.",
    "category": "Physics",
    "letter": "P"
  },
  {
    "term": "Photoelectron",
    "definition": "Electron that has been removed during the process of photoelectric absorption.",
    "category": "Radiation Protection",
    "letter": "P"
  },
  {
    "term": "Photoemission",
    "definition": "Electron emission after light stimulation.",
    "category": "Physics",
    "letter": "P"
  },
  {
    "term": "Photographic effect",
    "definition": "Formation of the latent image.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Photometer",
    "definition": "Instrument that measures light intensity.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Photomultiplier tube",
    "definition": "Electron tube that converts visible light into an electrical signal.",
    "category": "Physics",
    "letter": "P"
  },
  {
    "term": "Photon",
    "definition": "Electromagnetic radiation that has neither mass nor electric charge but interacts with matter as though it is a particle; x-rays and gamma rays.",
    "category": "Physics",
    "letter": "P"
  },
  {
    "term": "Photospot camera",
    "definition": "Camera that exposes only one frame when active, receiving its image from the output phosphor of the image-intensifier tube.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Photostimulation",
    "definition": "Emission of visible light after excitation by laser light.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Photothermographic",
    "definition": "Printing process by which film is exposed to light, thereby forming a latent image that is made visible by heat.",
    "category": "Image Quality",
    "letter": "P"
  },
  {
    "term": "Phototimer",
    "definition": "Device that allows automatic exposure control.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Pitch",
    "definition": "See Spiral pitch ratio.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Pixel",
    "definition": "Picture element; the cell of a digital image matrix.",
    "category": "Radiobiology",
    "letter": "P"
  },
  {
    "term": "Planck's constant (h)",
    "definition": "Fundamental physical constant that relates the energy of radiation to its frequency.",
    "category": "Physics",
    "letter": "P"
  },
  {
    "term": "Planetary rollers",
    "definition": "Rollers positioned outside the master roller and guide shoes.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Pluripotential stem cell",
    "definition": "Stem cell that has the ability to develop into several different types of mature cells.",
    "category": "Radiobiology",
    "letter": "P"
  },
  {
    "term": "Pocket ionization chamber (pocket dosimeter)",
    "definition": "Personnel radiation monitoring device. Ploosisn t ofl esfiuonnc tioAnn ya t cthhaen gpeo intth ato f rea suslitnsg lei n cihmepmiaciarlm enbto ndo.r",
    "category": "Radiation Protection",
    "letter": "P",
    "units": "pocket dosimeter"
  },
  {
    "term": "Point mutation",
    "definition": "Molecular lesion caused by the change or loss of a base that destroys the triplet code and may not be reversible.",
    "category": "Radiobiology",
    "letter": "P"
  },
  {
    "term": "Polarity",
    "definition": "Existence of opposing negative and positive charges.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Pole",
    "definition": "Magnetically charged end of a material.",
    "category": "Physics",
    "letter": "P"
  },
  {
    "term": "Polyenergetic",
    "definition": "Referring to radiation, such as x-rays, with a spectrum of energies.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Polysaccharide",
    "definition": "Large carbohydrate that includes starches and glycogen.",
    "category": "Digital Imaging",
    "letter": "P"
  },
  {
    "term": "Positive beam limiting (PBL)",
    "definition": "Feature of radiographic collimators that automatically adjusts the radiation field to the size of the image receptor.",
    "category": "Image Quality",
    "letter": "P"
  },
  {
    "term": "Potassium bromide",
    "definition": "Compound used as a restrainer in the developer.",
    "category": "Image Quality",
    "letter": "P"
  },
  {
    "term": "Potassium iodide",
    "definition": "Compound used as a restrainer in the developer.",
    "category": "Image Quality",
    "letter": "P"
  },
  {
    "term": "Potential energy",
    "definition": "Ability to do work by virtue of position. Power 'Time rate at which work (W) is done. 1 W =",
    "category": "Physics",
    "letter": "P"
  },
  {
    "term": "Power-of-10 notation",
    "definition": "Exponential form.",
    "category": "Physics",
    "letter": "P"
  },
  {
    "term": "Precursor cell",
    "definition": "An immature cell.",
    "category": "Radiobiology",
    "letter": "P"
  },
  {
    "term": "Predetector collimator",
    "definition": "Collimator that restricts the x-ray beam viewed by the detector array.",
    "category": "Image Quality",
    "letter": "P"
  },
  {
    "term": "Prepatient collimator",
    "definition": "Collimator that consists of several sections so that a nearly parallel x-ray beam results.",
    "category": "Image Quality",
    "letter": "P"
  },
  {
    "term": "Prereading voltmeter",
    "definition": "A kVp meter that registers even though an exposure is not being made and no current is flowing within the circuit; this allows the voltage to be monitored before an exposure.",
    "category": "Digital Imaging",
    "letter": "P"
  },
  {
    "term": "Preservative",
    "definition": "Chemical additive, usually sodium sulfide, which maintains the chemical balance of the developer and fixer.",
    "category": "Image Quality",
    "letter": "P"
  },
  {
    "term": "Preventive maintenance",
    "definition": "Planned program of parts replacement at regular intervals.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Primary coil",
    "definition": "The first coil through which the varying current in an electromagnet is passed.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Primary protective barrier",
    "definition": "Any wall to which the useful beam can be directed.",
    "category": "Radiation Protection",
    "letter": "P"
  },
  {
    "term": "Processing",
    "definition": "Chemical treatment of the emulsion of a radiographic film to change a latent image to a manifest image.",
    "category": "Image Quality",
    "letter": "P"
  },
  {
    "term": "Processor",
    "definition": "Electronic circuitry that does the actual computations and the memory that supports it.",
    "category": "Physics",
    "letter": "P"
  },
  {
    "term": "Prodromal period",
    "definition": "First stage of the acute radiation syndrome; occurs within hours after radiation exposure.",
    "category": "Radiobiology",
    "letter": "P"
  },
  {
    "term": "production of free radicals produced by the interaction",
    "definition": "I of radiation with water. t",
    "category": "Radiobiology",
    "letter": "P"
  },
  {
    "term": "Prone",
    "definition": "Having the front or ventral surface downward. Lying flat or prostrate.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Proper fraction",
    "definition": "Fraction in which the quotient is less than 1.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Prophase",
    "definition": "Phase of cell division during which the nucleus and the chromosomes enlarge and the DNA begins to take structural form.",
    "category": "Radiobiology",
    "letter": "P"
  },
  {
    "term": "Protective coating",
    "definition": "Layer of the radiographic intensifying screen closest to the radiographic film.",
    "category": "Digital Imaging",
    "letter": "P"
  },
  {
    "term": "Protective housing",
    "definition": "Lead-lined metal container into which the x-ray tube is fitted.",
    "category": "Equipment",
    "letter": "P"
  },
  {
    "term": "Protein synthesis",
    "definition": "Metabolic production of proteins.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Proton",
    "definition": "Elementary particle with a positive electric charge equal to that of an electron and a mass approximately equal to that of a neutron. It is located within the nucleus of an atom.",
    "category": "Physics",
    "letter": "P"
  },
  {
    "term": "Protracted dose",
    "definition": "Dose of radiation that is delivered continuously but at a lower dose rate.",
    "category": "Radiation Protection",
    "letter": "P"
  },
  {
    "term": "Pulse mode/rate mode",
    "definition": "Instruments designed to detect the presence of radiation.",
    "category": "General",
    "letter": "P"
  },
  {
    "term": "Quality assurance",
    "definition": "(QA) All planned and _ systematic actions necessary to provide adequate confidence that a facility, system, or administrative component will perform safely and satisfactorily in service to a patient. It includes scheduling, preparation, and promptness in examination or treatment, reporting of results, and quality control.",
    "category": "Image Quality",
    "letter": "Q"
  },
  {
    "term": "Quality control (QC)",
    "definition": "All actions necessary to control and verify the performance of equipment; part of quality assurance.",
    "category": "General",
    "letter": "Q",
    "units": "QC"
  },
  {
    "term": "Quantum",
    "definition": "An x-ray photon.",
    "category": "Physics",
    "letter": "Q"
  },
  {
    "term": "Quantum mottle",
    "definition": "Radiographic noise produced by the random interaction of x-rays with an intensifying screen. This effect is more noticeable when very high rare Earth systems are used at a high kVp.",
    "category": "Digital Imaging",
    "letter": "Q"
  },
  {
    "term": "Quantum theory",
    "definition": "Theory in the physics of matter smaller than an atom and of electromagnetic radiation.",
    "category": "Physics",
    "letter": "Q"
  },
  {
    "term": "Rad (radiation absorbed dose)",
    "definition": "Special unit for absorbed dose and air kerma. 1 rad = 100 erg/g = 0.01 Gy.",
    "category": "Radiation Protection",
    "letter": "R",
    "units": "radiation absorbed dose"
  },
  {
    "term": "Radiation",
    "definition": "Energy emitted and transferred through matter.",
    "category": "Physics",
    "letter": "R"
  },
  {
    "term": "Radiation (thermal)",
    "definition": "Transfer of heat by the emission of infrared electromagnetic radiation.",
    "category": "Physics",
    "letter": "R",
    "units": "thermal"
  },
  {
    "term": "Radiation biology",
    "definition": "Branch of biology that is concerned with the effects of ionizing radiation on living systems.",
    "category": "General",
    "letter": "R"
  },
  {
    "term": "Radiation exposure",
    "definition": "X-ray quantity or intensity; measured in roentgens.",
    "category": "Radiation Protection",
    "letter": "R",
    "units": "roentgens"
  },
  {
    "term": "Radiation fog",
    "definition": "Artifact caused by unintentional exposure to radiation.",
    "category": "Image Quality",
    "letter": "R"
  },
  {
    "term": "Radiation hormesis",
    "definition": "Theory that suggests that very low radiation doses may be beneficial.",
    "category": "Radiation Protection",
    "letter": "R"
  },
  {
    "term": "Radiation quality",
    "definition": "Relative penetrability of an x-ray beam determined by its average energy; usually measured by half-value layer or kilovolt peak.",
    "category": "Physics",
    "letter": "R"
  },
  {
    "term": "Radiation quantity",
    "definition": "Intensity of radiation; usually measured in milliroentgen (mR).",
    "category": "Radiation Protection",
    "letter": "R",
    "units": "milliroentgen (mR)"
  },
  {
    "term": "Radiation Safety Officer (RSO)",
    "definition": "That individual-physician, medical physicist, or technologist-assigned to develop and implement the radiation safety program.",
    "category": "General",
    "letter": "R",
    "units": "RSO"
  },
  {
    "term": "Radiation standards",
    "definition": "Recommendations, rules, and regulations regarding permissible concentrations, as well as safe handling techniques, transportation, and industrial control of radioactive material.",
    "category": "General",
    "letter": "R"
  },
  {
    "term": "Radiation weighting factor (Wz)",
    "definition": "Factor used for radiation protection that accounts for differences in biologic",
    "category": "Radiation Protection",
    "letter": "R",
    "units": "Wz"
  },
  {
    "term": "Radioactive decay",
    "definition": "Naturally occurring process whereby an unstable atomic nucleus relieves its instability through the emission of one or more energetic particles.",
    "category": "Physics",
    "letter": "R"
  },
  {
    "term": "Radioactive disintegration",
    "definition": "Process by which the nucleus spontaneously emits particles and energy and transforms itself into another atom to reach stability.",
    "category": "Physics",
    "letter": "R"
  },
  {
    "term": "Radioactive half-life",
    "definition": "Time required for a radioisotope to decay to half its original activity.",
    "category": "General",
    "letter": "R"
  },
  {
    "term": "Radioactivity",
    "definition": "Rate of decay or disintegration of radioactive material. Expressed in curie (Ci) or becquerel (Bq). 1 Gi=3-7 x 10™ Ba:",
    "category": "Radiation Protection",
    "letter": "R",
    "units": "curie (Ci) or becquerel (Bq)"
  },
  {
    "term": "Radiofrequency",
    "definition": "(RF) Electromagnetic radiation with frequencies from 0.3 kHz to 300 GHz; magnetic resonance imaging uses RF in the range of approximately 1 to 100 mHz.",
    "category": "Physics",
    "letter": "R"
  },
  {
    "term": "Radiographer",
    "definition": "Radiologic technologist who deals specifically with x-ray imaging.",
    "category": "General",
    "letter": "R"
  },
  {
    "term": "Radiographic contrast",
    "definition": "Combined result of image receptor contrast and subject contrast.",
    "category": "Image Quality",
    "letter": "R"
  },
  {
    "term": "Radiographic intensifying screen",
    "definition": "Device that converts the energy of the x-ray beam into visible light to increase the brightness of an x-ray image.",
    "category": "Digital Imaging",
    "letter": "R"
  },
  {
    "term": "Radiographic noise",
    "definition": "Undesirable fluctuation in the optical density of the image.",
    "category": "Image Quality",
    "letter": "R"
  },
  {
    "term": "Radiographic technique",
    "definition": "Combination of _ settings selected on the control panel of the x-ray imaging system to produce a quality image on the radiograph.",
    "category": "General",
    "letter": "R"
  },
  {
    "term": "Radiographic technique chart",
    "definition": "Guide that describes standard methods for consistently producing high-quality images.",
    "category": "Digital Imaging",
    "letter": "R"
  },
  {
    "term": "Radiography",
    "definition": "Imaging modality that uses x-ray film and usually an x-ray tube mounted from the ceiling on a track that allows the tube to be moved in any direction; provides fixed images.",
    "category": "Image Quality",
    "letter": "R"
  },
  {
    "term": "Radioisotopes",
    "definition": "Radioactive atoms that have the same number of protons. They are changed into a different atomic species by disintegration of the nucleus accompanied by the emission of ionizing radiation.",
    "category": "Physics",
    "letter": "R"
  },
  {
    "term": "Radiological Society of North America (RSNA)",
    "definition": "Scientific society of radiologists and medical physicists.",
    "category": "General",
    "letter": "R",
    "units": "RSNA"
  },
  {
    "term": "Radiologist",
    "definition": "Physician who specializes in medical imaging with the use of x-rays, ultrasound, and magnetic resonance imaging.",
    "category": "Physics",
    "letter": "R"
  },
  {
    "term": "Radiolucent",
    "definition": "Referring to a tissue or material that transmits x-rays and appears dark on a radiograph.",
    "category": "General",
    "letter": "R"
  },
  {
    "term": "Radiolysis of water",
    "definition": "Dissociation of water into other molecular products as a result of irradiation.",
    "category": "Radiobiology",
    "letter": "R"
  },
  {
    "term": "Radionuclides",
    "definition": "Any nucleus that emits radiation.",
    "category": "Physics",
    "letter": "R"
  },
  {
    "term": "Radiopaque",
    "definition": "Referring to a tissue or material that absorbs x-rays and appears bright on a radiograph.",
    "category": "General",
    "letter": "R"
  },
  {
    "term": "Radiosensitivity",
    "definition": "Relative susceptibility of cells, tissues, and organs to the harmful action of ionizing radiation.",
    "category": "Radiobiology",
    "letter": "R"
  },
  {
    "term": "Radon",
    "definition": "Colorless, odorless, naturally occurring radioactive gas (***Ra) that decays via alpha emission and has a half-life of 3.8 days.",
    "category": "General",
    "letter": "R"
  },
  {
    "term": "RAID (redundant array of inexpensive discs) system",
    "definition": "System that consists of at least two disc drives within a single cabinet that collectively act as a single storage system.",
    "category": "Digital Imaging",
    "letter": "R"
  },
  {
    "term": "Random access memory (RAM)",
    "definition": "Data that can be stored or accessed at random from anywhere in main memory in approximately equal amounts of time, regardless of where they are located.",
    "category": "General",
    "letter": "R",
    "units": "RAM"
  },
  {
    "term": "ranging from approximately 1 to 10 Gy",
    "definition": "(100 to 1000 rad). It is characterized by reduction in white cells, red cells, and platelets in circulating blood.",
    "category": "Radiobiology",
    "letter": "R"
  },
  {
    "term": "Rare Earth element",
    "definition": "Element that is a transitional metal found in low abundance in nature.",
    "category": "General",
    "letter": "R"
  },
  {
    "term": "Rare Earth screen",
    "definition": "Radiographic intensifying screen made from rare Earth elements, which make it more useful for radiographic imaging.",
    "category": "Digital Imaging",
    "letter": "R"
  },
  {
    "term": "Raster pattern",
    "definition": "Pattern produced on the screen of a television picture tube by the movement of an electron beam or on film by a laser scan.",
    "category": "Digital Imaging",
    "letter": "R"
  },
  {
    "term": "Ratio",
    "definition": "Mathematical relationship between — similar quantities.",
    "category": "General",
    "letter": "R"
  },
  {
    "term": "Read-only memory (ROM)",
    "definition": "Data storage device that contains information supplied by the manufacturer that cannot be written on or erased.",
    "category": "General",
    "letter": "R",
    "units": "ROM"
  },
  {
    "term": "Realtime",
    "definition": "Display for which the image is continuously renewed, often to view anatomical motion, in fluoroscopy and ultrasound.",
    "category": "Digital Imaging",
    "letter": "R"
  },
  {
    "term": "Reciprocity law",
    "definition": "Principle that states that optical density on a radiograph is proportional only to the total energy imparted to the radiographic film.",
    "category": "Image Quality",
    "letter": "R"
  },
  {
    "term": "Reconstruction",
    "definition": "Creation of an image from data.",
    "category": "Digital Imaging",
    "letter": "R"
  },
  {
    "term": "Reconstruction time",
    "definition": "Time needed for the computer to present a digital image after an examination has been completed.",
    "category": "Radiobiology",
    "letter": "R"
  },
  {
    "term": "Recorded detail",
    "definition": "Degree of sharpness of structural lines on a radiograph.",
    "category": "General",
    "letter": "R"
  },
  {
    "term": "Recovery",
    "definition": "Repair and repopulation.",
    "category": "General",
    "letter": "R"
  },
  {
    "term": "Rectification",
    "definition": "Process of converting alternating current to direct current.",
    "category": "Equipment",
    "letter": "R"
  },
  {
    "term": "Rectifier",
    "definition": "Electronic device that allows current flow in only one direction.",
    "category": "Equipment",
    "letter": "R"
  },
  {
    "term": "Red filter",
    "definition": "Filter that transmits light only above 600 nm; it is used with both greenand blue-sensitive film.",
    "category": "Image Quality",
    "letter": "R"
  },
  {
    "term": "Redox",
    "definition": "Simultaneous reduction and __ oxidation reactions.",
    "category": "General",
    "letter": "R"
  },
  {
    "term": "Reducing agent",
    "definition": "Chemical responsible for reduction.",
    "category": "General",
    "letter": "R"
  },
  {
    "term": "Reduction",
    "definition": "Process by which an electron is given up by a chemical to neutralize a positive ion.",
    "category": "Physics",
    "letter": "R"
  },
  {
    "term": "Reflection",
    "definition": "Return or reentry of an x-ray.",
    "category": "General",
    "letter": "R"
  },
  {
    "term": "Reflective layer",
    "definition": "Layer of the intensifying screen that intercepts light headed in other directions and redirects it to the film.",
    "category": "Digital Imaging",
    "letter": "R"
  },
  {
    "term": "Refraction",
    "definition": "Deviation of course that occurs when photons of visible light traveling in straight lines pass from one transparent medium to another.",
    "category": "Physics",
    "letter": "R"
  },
  {
    "term": "Region of interest (ROI)",
    "definition": "Area of an anatomical structure on a reconstructed digital image as defined by the operator using a cursor.",
    "category": "Digital Imaging",
    "letter": "R",
    "units": "ROI"
  },
  {
    "term": "Relative age-response relationship",
    "definition": "Increased incidence of a disease proportional to its natural incidence.",
    "category": "Digital Imaging",
    "letter": "R"
  },
  {
    "term": "Relative biologic effectiveness (RBE)",
    "definition": "Ratio of the dose of standard radiation necessary to produce a given effect to the dose of test radiation needed for the same effect.",
    "category": "Radiation Protection",
    "letter": "R",
    "units": "RBE"
  },
  {
    "term": "Relative risk",
    "definition": "Estimation of late radiation effects in large populations without precise knowledge of their radiation dose.",
    "category": "Radiation Protection",
    "letter": "R"
  },
  {
    "term": "Relay",
    "definition": "Electrical device based on electromagnetic induction that serves as a switch.",
    "category": "Physics",
    "letter": "R"
  },
  {
    "term": "Rem (radiation equivalent man)",
    "definition": "Special unit for dose equivalent and effective dose. It has been replaced by the sievert (Sv) in the SI system. 1 rem = 0.01 Sv.",
    "category": "Radiation Protection",
    "letter": "R",
    "units": "radiation equivalent man"
  },
  {
    "term": "Remnant radiation",
    "definition": "X-rays that pass through the patient and interact with the image receptor.",
    "category": "Radiation Protection",
    "letter": "R"
  },
  {
    "term": "Replenishment",
    "definition": "Replacement of developer and of fixer in the automatic processing of film.",
    "category": "Image Quality",
    "letter": "R"
  },
  {
    "term": "Repopulation",
    "definition": "Replication by surviving cells.",
    "category": "Radiobiology",
    "letter": "R"
  },
  {
    "term": "Resistance",
    "definition": "Opposition to a force.",
    "category": "Physics",
    "letter": "R"
  },
  {
    "term": "Resolution",
    "definition": "Measure of the ability of a system to image two separate objects and visually distinguish one from the other.",
    "category": "Digital Imaging",
    "letter": "R"
  },
  {
    "term": "Restrainer",
    "definition": "Compound that restricts the action of the developing agent to only irradiated silver halide crystals.",
    "category": "Digital Imaging",
    "letter": "R"
  },
  {
    "term": "Ribonucleic acid (RNA)",
    "definition": "Molecules that are involved in the growth and development of a cell through a number of small, spherical cytoplasmic organelles that attach to the endoplasmic reticulum.",
    "category": "Radiobiology",
    "letter": "R",
    "units": "RNA"
  },
  {
    "term": "Ribosomes'",
    "definition": "The site of protein synthesis.",
    "category": "General",
    "letter": "R"
  },
  {
    "term": "Right-hand rule",
    "definition": "Rule by which the direction of magnetic field lines can be determined.",
    "category": "Physics",
    "letter": "R"
  },
  {
    "term": "Roller subassembly",
    "definition": "One of three principal film-transport subsystems in an imaging system.",
    "category": "Image Quality",
    "letter": "R"
  },
  {
    "term": "Rotating anode",
    "definition": "Anode used in general purpose x-ray tubes because the tubes must be capable of producing high-intensity x-ray beams in a short time.",
    "category": "Equipment",
    "letter": "R"
  },
  {
    "term": "Rotor",
    "definition": "Rotating part of an electromagnetic induction motor that is located inside the glass envelope.",
    "category": "Equipment",
    "letter": "R"
  },
  {
    "term": "Saccharide",
    "definition": "A carbohydrate.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Safe industry",
    "definition": "Industry that has an associated annual fatality accident rate of no more than 1 per 10,000 workers.",
    "category": "Physics",
    "letter": "S"
  },
  {
    "term": "Safelight",
    "definition": "Incandescent lamp with a color filter that provides sufficient illumination in the darkroom while ensuring that the film remains unexposed.",
    "category": "Radiation Protection",
    "letter": "S"
  },
  {
    "term": "Sagittal plane",
    "definition": "Any anterior-posterior plane parallel to the long axis of the body.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Saturation current",
    "definition": "Filament current that has risen to its maximum value because all available electrons have been used. h Sc a a s l a o r n ly Re m f a e g r n riitnugd e.to a quan",
    "category": "Equipment",
    "letter": "S"
  },
  {
    "term": "Scanned projection radiography",
    "definition": "(SPR) Generalized method of making a digital radiograph; used in computed tomography for precise localization.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Scatter radiation",
    "definition": "X-rays scattered back in the direction of the incident x-ray beam.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Scheduled maintenance",
    "definition": "Procedures performed on a routine basis.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Scientific notation",
    "definition": "Exponential form.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Scintillation detector",
    "definition": "Instrument used in the detector arrays of many computed tomographic scanners.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Screen lag",
    "definition": "The phosphorescence in an intensifying screen.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Screen speed",
    "definition": "Relative number used to identify the efficiency of conversion of x-rays into usable light.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Screen-film",
    "definition": "The most commonly used film; used with intensifying screens.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Screening mammography",
    "definition": "Imaging examination that is performed on the breasts of asymptomatic women with a two-view protocol, to detect unsuspected cancer.",
    "category": "Radiobiology",
    "letter": "S"
  },
  {
    "term": "Second (s)",
    "definition": "Standard unit of time.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Secondary coil",
    "definition": "Coil in which induced current in an electromagnet flows.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Secondary electron",
    "definition": "Electron ejected from the outer shell of an atom.",
    "category": "Physics",
    "letter": "S"
  },
  {
    "term": "Secondary memory",
    "definition": "Data stored on tape drives, diskettes, and hard disc drives.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Secondary protective barrier",
    "definition": "Barrier designed to shield an area from secondary radiation.",
    "category": "Radiation Protection",
    "letter": "S"
  },
  {
    "term": "Secondary radiation",
    "definition": "Leakage and scatter reaction.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Section thickness",
    "definition": "The thickness of tissue that will not be blurred by tomography.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Selectivity",
    "definition": "Ratio of primary radiation to scattered radiation transmitted through the grid.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Self-induction",
    "definition": "Magnetic field produced in a coil of wire that opposes the alternating current being conducted.",
    "category": "Physics",
    "letter": "S"
  },
  {
    "term": "Self-rectified system",
    "definition": "Imaging system in which the x-ray tube serves as the vacuum-tube rectifier.",
    "category": "Equipment",
    "letter": "S"
  },
  {
    "term": "Semiconductor",
    "definition": "Material that can serve both as a conductor and as an insulator of electricity.",
    "category": "Physics",
    "letter": "S"
  },
  {
    "term": "Sensitivity",
    "definition": "Ability of an image receptor to respond to x-rays.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Sensitivity center",
    "definition": "Physical imperfections in the lattice of the emulsion layer that occur during the film manufacturing process.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Sensitivity profile",
    "definition": "Slice thickness.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Sensitizing agent",
    "definition": "Agent that enhances the effect of radiation.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Sensitometer",
    "definition": "Optical step wedge that is used to construct a characteristic curve.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Sensitometry",
    "definition": "Study of the response of an image receptor to x-rays.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Sequestering agent",
    "definition": "Agent introduced into the developer to form stable complexes with metallic ions and salts.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Shaded surface display (SSD)",
    "definition": "Computer-aided technique that identifies a narrow range of values as belonging to the object to be imaged and displays that range.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Shadow dose equivalent (HS)",
    "definition": "Dose of radiation to which the external skin or an extremity is exposed.",
    "category": "Radiation Protection",
    "letter": "S"
  },
  {
    "term": "Shadow shield",
    "definition": "Shield that is suspended over the region of interest; it casts a shadow over the patient's reproductive organs.",
    "category": "Radiation Protection",
    "letter": "S"
  },
  {
    "term": "Shape distortion",
    "definition": "Type of distortion caused by elongation or foreshortening.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Shell-type transformer",
    "definition": "Transformer that confines more of the magnet field lines of the primary winding because there are essentially two closed cores.",
    "category": "Equipment",
    "letter": "S"
  },
  {
    "term": "Shells",
    "definition": "Orbital energy levels that surround the nucleus of an atom.",
    "category": "Physics",
    "letter": "S"
  },
  {
    "term": "Short gray scale",
    "definition": "High-contrast radiograph that exhibits black to white in just a few apparent steps.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Sievert (Sv)",
    "definition": "Special name for the SI unit of dose equivalent and effective dose. 1 Sv = 1 J/kg = 100 rem.",
    "category": "Radiation Protection",
    "letter": "S",
    "units": "Sv"
  },
  {
    "term": "Sigmoid-type (S-type) dose-response relationship",
    "definition": "Nonlinear, threshold radiation dose-response relationship.",
    "category": "Radiation Protection",
    "letter": "S"
  },
  {
    "term": "Silver bromide",
    "definition": "Material that makes up 98% of the silver halide crystals in a typical emulsion.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Silver halide crystals",
    "definition": "Active ingredient of the radiographic emulsion. It is instrumental in creating a latent image on the radiograph.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Silver iodide",
    "definition": "Material that makes up 2% of the silver halide crystals in a typical emulsion.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Sine wave",
    "definition": "Variation in the movement of photons in electrical and magnetic fields.",
    "category": "Physics",
    "letter": "S"
  },
  {
    "term": "Single-target hit model",
    "definition": "Model of radiation doseresponse relationships for enzymes, viruses, and bacteria.",
    "category": "Radiation Protection",
    "letter": "S"
  },
  {
    "term": "Sinusoidal",
    "definition": "Simple motion; a sine wave.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Skin erythema dose (SED)",
    "definition": "Dose of radiation, usually about 200 rad or 2 Gy, that causes redness of the skin.",
    "category": "Radiation Protection",
    "letter": "S"
  },
  {
    "term": "Slice thickness",
    "definition": "The thickness of the tissue that is being imaged.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Slice-acquisition rate (SAR)",
    "definition": "Measure of the efficiency of a multislice spiral computed tomographic scanner.",
    "category": "General",
    "letter": "S",
    "units": "SAR"
  },
  {
    "term": "Slip ring technology",
    "definition": "Technology that allows the gantry to rotate continuously without interruption, making spiral computed tomography possible.",
    "category": "Equipment",
    "letter": "S"
  },
  {
    "term": "Sludge",
    "definition": "Deposit on the film that results from dirty or warped rollers; causes emulsion pickoff and gelatin buildup.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Sodium carbonate",
    "definition": "Alkali compound contained in the developer.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Sodium hydroxide",
    "definition": "Alkali compound contained in the developer.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Sodium sulfite",
    "definition": "Preservative added to the developer that keeps it clear.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Soft copy",
    "definition": "Output on a display screen.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Soft tissue radiography",
    "definition": "Radiography in which only muscle and fat structures are imaged.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Soft x-ray",
    "definition": "X-ray that has low penetrability and therefore 1s of low quality.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Software",
    "definition": "Computer programs that tell the hardware what to do and how to store data.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Solenoid",
    "definition": "Helical winding of current-carrying wire that produces a magnetic field along the axis of the helix.",
    "category": "Physics",
    "letter": "S"
  },
  {
    "term": "Solid-state diode",
    "definition": "Diode that passes electric current in only one direction.",
    "category": "Physics",
    "letter": "S"
  },
  {
    "term": "Solution",
    "definition": "Suspension of particles or molecules in a fluid.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Solvent",
    "definition": "Liquid into which various solids and powders can be dissolved.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Somatic cells",
    "definition": "All cells of the body except the oogonium and the spermatogonium.",
    "category": "Radiobiology",
    "letter": "S"
  },
  {
    "term": "Somatic effects",
    "definition": "Effects of radiation, such as cancer and leukemia, limited to an exposed individual. See also Genetic effect.",
    "category": "Radiobiology",
    "letter": "S"
  },
  {
    "term": "Source-to-image receptor distance (SID)",
    "definition": "Distance from the x-ray tube to the image receptor.",
    "category": "Equipment",
    "letter": "S"
  },
  {
    "term": "Source-to-skin distance",
    "definition": "(SSD) Distance from the patient's skin to the fluoroscopic tube.",
    "category": "Equipment",
    "letter": "S"
  },
  {
    "term": "Space charge",
    "definition": "Electron cloud near the filament.",
    "category": "Equipment",
    "letter": "S"
  },
  {
    "term": "Space-charge effect",
    "definition": "Phenomenon of the space charge that makes it difficult for subsequent electrons to be emitted by the filament because of electrostatic repulsion.",
    "category": "Equipment",
    "letter": "S"
  },
  {
    "term": "Spatial distortion",
    "definition": "Misrepresentation in the image of the actual spatial relationships among objects.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Spatial frequency",
    "definition": "Measure of resolution; usually expressed in line pairs per millimeter (lp/mm).",
    "category": "Digital Imaging",
    "letter": "S",
    "units": "line pairs per millimeter (lp/mm)"
  },
  {
    "term": "Spatial resolution",
    "definition": "Ability to image small objects that have high subject contrast.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Spatial uniformity",
    "definition": "Constancy of pixel values in all regions of the reconstructed image.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Special quantities",
    "definition": "Additional quantities designed to support measurement in specialized areas of science and technology.",
    "category": "Radiation Protection",
    "letter": "S"
  },
  {
    "term": "Spectrum",
    "definition": "Graphic representation of the range over which a quantity extends.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Spectrum matching",
    "definition": "Use of rare Earth screens only in conjunction with film emulsions that have light absorption characteristics matched to the light emission of the screen.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Speed",
    "definition": "Term used to loosely describe the sensitivity of film to x-rays.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Speed index",
    "definition": "Step that has an average optical density closest to, but not less than, 1.2.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Sperm",
    "definition": "See Spermatozoa.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Spermatocyte",
    "definition": "Mature spermatogonium.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Spermatogonium",
    "definition": "Male germ cell.",
    "category": "Radiobiology",
    "letter": "S"
  },
  {
    "term": "Spermatozoa",
    "definition": "Functionally mature male germ cell.",
    "category": "Radiobiology",
    "letter": "S"
  },
  {
    "term": "Spindle fibers",
    "definition": "Fibers that connect a centromere and two chromatids to the poles of the nucleus during mitosis.",
    "category": "Radiobiology",
    "letter": "S"
  },
  {
    "term": "Spindles",
    "definition": "Poles of the nucleus.",
    "category": "Physics",
    "letter": "S"
  },
  {
    "term": "Spinning top",
    "definition": "Device used to check exposure timers.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Spiral pitch ratio",
    "definition": "Relationship between patient couch movement and x-ray beam collimation.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Spiral/helical",
    "definition": "Term given to computed tomography because it describes the apparent motion of the x-ray tube during the scan.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Spot film",
    "definition": "Static image in a small-format image receptor taken during fluoroscopy.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Square law",
    "definition": "Principle that states that one can compensate for a change in the source-to-object distance by changing the mAs by the factor SID squared.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Starch",
    "definition": "A plant polysaccharide.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Stationary anode",
    "definition": "Anode used in imaging systems in which high tube current and power are not required.",
    "category": "Equipment",
    "letter": "S"
  },
  {
    "term": "Stator",
    "definition": "Stationary coil windings located in the protective housing but outside the x-ray tube glass envelope. It is part of the electromagnetic induction motor.",
    "category": "Equipment",
    "letter": "S"
  },
  {
    "term": "Stem cell",
    "definition": "Immature or precursor cell.",
    "category": "Radiobiology",
    "letter": "S"
  },
  {
    "term": "Step wedge",
    "definition": "Filter used during radiography of a body part, such as the foot, that varies in thickness from one end to the other.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Step-down transformer",
    "definition": "Transformer in which the voltage is decreased from the primary side to the secondary side.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Step-up transformer",
    "definition": "Transformer in which the voltage is increased from the primary side to the secondary side.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Stepping",
    "definition": "Computer-controlled capability on a patient table that allows imaging from the abdomen to the feet after a single injection of contrast media.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Stereoradiography",
    "definition": "Practice of making two radiographs of the same object and viewing through a device that allows each eye to view a different radiograph.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Sthenic",
    "definition": "Referring to the body habitus of a patient who is strong and active; average body habitus.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Stochastic effects",
    "definition": "Probability or frequency of the biologic response to radiation as a function of radiation dose. Disease incidence increases proportionally with dose, and there is no dose threshold.",
    "category": "Radiation Protection",
    "letter": "S"
  },
  {
    "term": "Storage memory",
    "definition": "Main computer memory in which the program and data files are stored.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Straight-line portion",
    "definition": "Portion of a sensitometric curve in which the diagnostic or most useful range of density is produced.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Stromal",
    "definition": "Referring to part of an organ that is composed of connective tissue and vasculature that provides structure to the organ.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Structure mottle",
    "definition": "Distribution of phosphor crystals in an intensifying screen.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Subatomic particle",
    "definition": "Particle smaller than the atom.",
    "category": "Physics",
    "letter": "S"
  },
  {
    "term": "Subject contrast",
    "definition": "Component of radiographic contrast determined by the size, shape, and x-ray attenuating characteristics of the subject who is being examined and contrast.",
    "category": "Image Quality",
    "letter": "S"
  },
  {
    "term": "Substance",
    "definition": "Any drug, chemical, or biologic entity.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Subtraction technique",
    "definition": "Method of removing all unnecessary anatomical structures from an image and enhancing only those of interest.",
    "category": "Radiation Protection",
    "letter": "S"
  },
  {
    "term": "Supercomputer",
    "definition": "One of the fastest and highest-capacity computers; contains hundreds to thousands of microprocessors.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Superconductivity",
    "definition": "Property by which some materials exhibit no resistance below a critical temperature.",
    "category": "Digital Imaging",
    "letter": "S"
  },
  {
    "term": "Supine",
    "definition": "Lying down with the face up. The ventral side is up, the dorsal side is down.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Supporting tissue",
    "definition": "Tissue that binds tissues and organs together.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "system",
    "definition": "Unit in which the x-ray source rotates but the detector assembly does not.",
    "category": "General",
    "letter": "S"
  },
  {
    "term": "Target",
    "definition": "a. Region of an x-ray tube anode that is struck by electrons emitted by the filament. b. Molecule (DNA) that is most sensitive to radiation.",
    "category": "Radiobiology",
    "letter": "T"
  },
  {
    "term": "Target molecules",
    "definition": "Molecules (DNA) that are few in number yet essential for cell survival; they are particularly sensitive to the effects of ionizing radiation.",
    "category": "Radiobiology",
    "letter": "T"
  },
  {
    "term": "Target theory",
    "definition": "Theory that a cell will die if target molecules are inactivated as a _ result of radiation exposure.",
    "category": "Radiobiology",
    "letter": "T"
  },
  {
    "term": "Technique factors",
    "definition": "The kVp and mA as selected for a given radiographic examination.",
    "category": "General",
    "letter": "T"
  },
  {
    "term": "Teleradiology",
    "definition": "Transfer of images and patient reports to remote sites.",
    "category": "Radiation Protection",
    "letter": "T"
  },
  {
    "term": "Telophase",
    "definition": "Final subphase of mitosis that is characterized by the disappearance of structural chromosomes into a mass of DNA and the closing off of the nuclear membrane into two nuclei.",
    "category": "Radiobiology",
    "letter": "T"
  },
  {
    "term": "Temperature",
    "definition": "Measure of heat and cold.",
    "category": "General",
    "letter": "T"
  },
  {
    "term": "Temporal subtraction",
    "definition": "Computer-assisted technique whereby an image obtained at one time is subtracted from an image obtained at a later time.",
    "category": "Digital Imaging",
    "letter": "T"
  },
  {
    "term": "Temporary magnet",
    "definition": "Magnet that retains the properties of a magnet only while its magnetism is being induced.",
    "category": "Physics",
    "letter": "T"
  },
  {
    "term": "Tenth-value layer (TVL)",
    "definition": "Thickness of an absorber necessary to reduce an x-ray beam to one-tenth its original intensity. 1 TVL = 3.3 half-value layers.",
    "category": "Radiobiology",
    "letter": "T",
    "units": "TVL"
  },
  {
    "term": "Terminal",
    "definition": "Input and output device that uses a keyboard for input and a display screen for output.",
    "category": "Digital Imaging",
    "letter": "T"
  },
  {
    "term": "Terrestrial radiation",
    "definition": "Radiation emitted from deposits of uranium, thorium, and other radionuclides in the Earth.",
    "category": "General",
    "letter": "T"
  },
  {
    "term": "Tesla (T)",
    "definition": "SI unit of magnetic field intensity. An older unit is the gauss (G). 1 T = 10,000 G.",
    "category": "Physics",
    "letter": "T",
    "units": "the gauss (G)"
  },
  {
    "term": "Test object",
    "definition": "a. Passive device that provides echoes and permits evaluation of one or more parameters of an ultrasound system but does not necessarily duplicate the acoustic properties of the human body. b. Passive device of geometric shapes designed to evaluate the performance of x-ray and magnetic resonance imaging systems. See also Phantom.",
    "category": "Physics",
    "letter": "T"
  },
  {
    "term": "Thermal energy",
    "definition": "Energy of molecular motion; heat; infrared radiation.",
    "category": "Physics",
    "letter": "T"
  },
  {
    "term": "Thermal radiation",
    "definition": "Transfer of heat by _ infrared emission.",
    "category": "General",
    "letter": "T"
  },
  {
    "term": "Thermionic emission",
    "definition": "Emission of electrons from a heated surface.",
    "category": "Physics",
    "letter": "T"
  },
  {
    "term": "Thermographic",
    "definition": "Process that uses only heat to produce a visible image on film.",
    "category": "Image Quality",
    "letter": "T"
  },
  {
    "term": "Thermoluminescence dosimetry",
    "definition": "Emission of light by a thermally stimulated crystal after irradiation.",
    "category": "Digital Imaging",
    "letter": "T"
  },
  {
    "term": "Thermometer",
    "definition": "Device that measures temperature.",
    "category": "General",
    "letter": "T"
  },
  {
    "term": "Thiosulfate",
    "definition": "Fixing agent that removes unexposed and undeveloped silver halide crystals from the emulsion.",
    "category": "Radiation Protection",
    "letter": "T"
  },
  {
    "term": "Three-phase electric power",
    "definition": "Generation of three simultaneous voltage waveforms out of step with one another; thus, voltage never drops to zero during exposure.",
    "category": "Digital Imaging",
    "letter": "T"
  },
  {
    "term": "Threshold dose",
    "definition": "Dose below which a person has a negligible chance of sustaining specific biologic damage, or dose at which response to increasing x-ray intensity first occurs.",
    "category": "Radiation Protection",
    "letter": "T"
  },
  {
    "term": "Thrombocyte",
    "definition": "Circular or oval disc called a platelet; it is found in the blood, and it initiates blood clotting and prevents hemorrhage.",
    "category": "Radiobiology",
    "letter": "T"
  },
  {
    "term": "Throughput",
    "definition": "Number of patients imaged per day. Number of films imaged per hour.",
    "category": "Image Quality",
    "letter": "T"
  },
  {
    "term": "Thymine",
    "definition": "Nitrogenous organic base that attaches to a deoxyribose molecule.",
    "category": "General",
    "letter": "T"
  },
  {
    "term": "Time-interval difference (TID) mode",
    "definition": "Technique that produces subtracted images from progressive masks and the frames that follow.",
    "category": "General",
    "letter": "T"
  },
  {
    "term": "Time-of-occupancy factor (1)",
    "definition": "Length of time that the area being protected is used.",
    "category": "Radiation Protection",
    "letter": "T"
  },
  {
    "term": "Tissue",
    "definition": "Collection of cells of similar structure and function.",
    "category": "Radiobiology",
    "letter": "T"
  },
  {
    "term": "Tissue weighting factor (W;)",
    "definition": "Proportion of risk of stochastic effects that result from irradiation of the whole body when only an organ or tissue is irradiated; accounts for the relative radiosensitivity of various tissues and organs.",
    "category": "Radiation Protection",
    "letter": "T",
    "units": "W;"
  },
  {
    "term": "Tomogram",
    "definition": "X-ray image of a coronal, sagittal, transverse, or oblique section through the body.",
    "category": "General",
    "letter": "T"
  },
  {
    "term": "Tomography",
    "definition": "Imaging modality that brings into focus only the anatomical structure lying in a plane of interest, while structures on either side of that plane are blurred.",
    "category": "Image Quality",
    "letter": "T"
  },
  {
    "term": "Total effective dose",
    "definition": "(TED) Recommendation by the National Council on Radiation Protection and Measurement that a radiation worker's lifetime effective dose should be limited to the worker's age in years multiplied by 10 mSv.",
    "category": "Radiation Protection",
    "letter": "T"
  },
  {
    "term": "Total filtration",
    "definition": "Inherent filtration plus added filtration.",
    "category": "Image Quality",
    "letter": "T"
  },
  {
    "term": "Transaxial",
    "definition": "Across the body; transverse.",
    "category": "Digital Imaging",
    "letter": "T"
  },
  {
    "term": "Transcription",
    "definition": "Process of constructing mRNA.",
    "category": "Digital Imaging",
    "letter": "T"
  },
  {
    "term": "Transfer",
    "definition": "Addition of an amino acid during translation.",
    "category": "General",
    "letter": "T"
  },
  {
    "term": "Transformer",
    "definition": "Electrical device that operates on the principle of mutual induction to change the magnitude of current and voltage.",
    "category": "Equipment",
    "letter": "T"
  },
  {
    "term": "Translation",
    "definition": "Process of forming a protein molecule from messenger RNA.",
    "category": "General",
    "letter": "T"
  },
  {
    "term": "Translucent",
    "definition": "Surface that allows light to be transmitted but greatly alters and reduces its intensity.",
    "category": "General",
    "letter": "T"
  },
  {
    "term": "Transmission",
    "definition": "Passage of an x-ray beam through an anatomical part with no interaction with atomic structures.",
    "category": "Physics",
    "letter": "T"
  },
  {
    "term": "Transparent",
    "definition": "Surface that allows light to be transmitted almost unaltered.",
    "category": "General",
    "letter": "T"
  },
  {
    "term": "Transport roller",
    "definition": "Agent that moves the film through chemical tanks and the dryer assembly.",
    "category": "Digital Imaging",
    "letter": "T"
  },
  {
    "term": "Transverse",
    "definition": "Across the body; axial.",
    "category": "Digital Imaging",
    "letter": "T"
  },
  {
    "term": "Transverse image",
    "definition": "Image that is perpendicular to the long axis of the body.",
    "category": "General",
    "letter": "T"
  },
  {
    "term": "Tungsten",
    "definition": "Metal element that is the principal component of the cathode and the anode.",
    "category": "Equipment",
    "letter": "T"
  },
  {
    "term": "Turnaround assembly",
    "definition": "Device in the automatic processor that reverses the direction of film.",
    "category": "Image Quality",
    "letter": "T"
  },
  {
    "term": "Turns ratio",
    "definition": "Quotient of the number of turns in the secondary coil to the number of turns in the primary coil.",
    "category": "General",
    "letter": "T"
  },
  {
    "term": "Ultraviolet light",
    "definition": "Light that is located at the short end of the electromagnetic spectrum between visible light and ionizing x-rays; it is beyond the range of human vision.",
    "category": "Radiobiology",
    "letter": "U"
  },
  {
    "term": "Uncontrolled area",
    "definition": "Area occupied by anyone; the maximum exposure rate allowed in this area is based on the recommended dose limit for the public.",
    "category": "Radiation Protection",
    "letter": "U"
  },
  {
    "term": "Underexposed",
    "definition": "Referring to a radiograph that is too light because too little x-radiation reaches the image receptor.",
    "category": "General",
    "letter": "U"
  },
  {
    "term": "Undifferentiated cell",
    "definition": "Immature or nonspecialized cell.",
    "category": "Radiobiology",
    "letter": "U"
  },
  {
    "term": "Unified field theory",
    "definition": "Theoretical combination of magnetic, electric, gravitational, and strong nuclear forces, along with weak interaction, to explain the physical laws of magnetism.",
    "category": "Physics",
    "letter": "U"
  },
  {
    "term": "Unit",
    "definition": "Standard of measurement.",
    "category": "Radiation Protection",
    "letter": "U"
  },
  {
    "term": "Use factor (U)",
    "definition": "Proportional amount of time during which the x-ray beam is energized or directed toward a particular barrier.",
    "category": "Radiation Protection",
    "letter": "U"
  },
  {
    "term": "Useful beam",
    "definition": "Primary radiation used to form an image.",
    "category": "General",
    "letter": "U"
  },
  {
    "term": "Valence electron",
    "definition": "Electron in the outermost shell.",
    "category": "Physics",
    "letter": "V"
  },
  {
    "term": "Variable aperture collimator",
    "definition": "Box-shaped device that contains a radiographic beam-defining system. It is the device that is most often used to reduce the size and shape of a radiographic beam.",
    "category": "Image Quality",
    "letter": "V"
  },
  {
    "term": "VDT",
    "definition": "Abbreviation for video display terminal.",
    "category": "Digital Imaging",
    "letter": "V"
  },
  {
    "term": "Vector",
    "definition": "Quantity or measurement that has magnitude, unit, and direction. Velocity (v) Rate of change of an object's position over time; speed.",
    "category": "Radiation Protection",
    "letter": "V"
  },
  {
    "term": "Video display terminal",
    "definition": "Monitor that is similar to a television screen.",
    "category": "Digital Imaging",
    "letter": "V"
  },
  {
    "term": "Vidicon",
    "definition": "Television camera tube that is used most often in television fluoroscopy.",
    "category": "Equipment",
    "letter": "V"
  },
  {
    "term": "Vignetting",
    "definition": "Reduction in brightness at the periphery of the image.",
    "category": "General",
    "letter": "V"
  },
  {
    "term": "Visible light",
    "definition": "Radiant energy in the electromagnetic spectrum that is visible to the human eye.",
    "category": "Physics",
    "letter": "V"
  },
  {
    "term": "Volt (V)",
    "definition": "SI unit of electric potential and_ potential difference.",
    "category": "Physics",
    "letter": "V",
    "units": "V"
  },
  {
    "term": "Voltage ripple",
    "definition": "Means of characterizing voltage waveforms.",
    "category": "Equipment",
    "letter": "V"
  },
  {
    "term": "Voltaic pile",
    "definition": "Stack of copper and zinc plates that produces an electric current; a precursor of the modern battery.",
    "category": "Physics",
    "letter": "V"
  },
  {
    "term": "Voxel",
    "definition": "Three-dimensional pixel; volume element.",
    "category": "Digital Imaging",
    "letter": "V"
  },
  {
    "term": "Washing",
    "definition": "Stage of processing during which any remaining chemicals are removed from the film.",
    "category": "Radiation Protection",
    "letter": "W"
  },
  {
    "term": "Watt (W)",
    "definition": "One ampere of current that flows through an electric potential of one volt.",
    "category": "Physics",
    "letter": "W",
    "units": "W"
  },
  {
    "term": "Wave equation",
    "definition": "Formula that states that velocity equals frequency multiplied by wavelength.",
    "category": "Physics",
    "letter": "W"
  },
  {
    "term": "Wave-particle duality",
    "definition": "Principle that states that both wave and particle concepts must be retained, because wave-like properties are exhibited in some experiments and particle-like properties are exhibited in others.",
    "category": "General",
    "letter": "W"
  },
  {
    "term": "Waveform",
    "definition": "Graphic representation of a wave.",
    "category": "General",
    "letter": "W"
  },
  {
    "term": "Wavelength",
    "definition": "Distance between similar points on a sine wave; the length of one cycle.",
    "category": "Physics",
    "letter": "W"
  },
  {
    "term": "Wavetheory",
    "definition": "Theory that electromagnetic energy travels through space in the form of waves.",
    "category": "Physics",
    "letter": "W"
  },
  {
    "term": "Weight",
    "definition": "Force on a mass that is caused by the acceleration of gravity. Properly expressed in newtons (N), but commonly expressed in pounds (lb). 4.4 Ib = 1 N.",
    "category": "Physics",
    "letter": "W",
    "units": "newtons (N)"
  },
  {
    "term": "Wetting",
    "definition": "Process that makes the emulsion film swell so that subsequent chemical baths can reach all parts of the emulsion uniformly.",
    "category": "Image Quality",
    "letter": "W"
  },
  {
    "term": "Wetting agent",
    "definition": "Agent, usually water, that treats the radiograph so that chemicals can penetrate the emulsion.",
    "category": "Image Quality",
    "letter": "W"
  },
  {
    "term": "Whole body",
    "definition": "For purposes of external exposure, the head, trunk (including gonads), arm above the elbow, and leg above the knee.",
    "category": "General",
    "letter": "W"
  },
  {
    "term": "Whole-body exposure",
    "definition": "Radiographic exposure in which the whole body, rather than an isolated part, is irradiated. W at i n w d h o i w c h le t v h ele levLeolcsa toifo ng rays are assigned. It regulates the optical density of the displayed image and identifies the type of tissue to be imaged.",
    "category": "Digital Imaging",
    "letter": "W"
  },
  {
    "term": "Window",
    "definition": "Thin section of a glass envelope through which the useful beam emerges.",
    "category": "General",
    "letter": "W"
  },
  {
    "term": "Window width",
    "definition": "Specific number of gray levels or digital image numbers assigned to an image. It determines the gray scale rendition of the imaged tissue and therefore the image contrast.",
    "category": "Digital Imaging",
    "letter": "W"
  },
  {
    "term": "Windowing",
    "definition": "Technique that allows one to see only a \"window\" of the entire dynamic range. Word 'Two bytes of information.",
    "category": "Digital Imaging",
    "letter": "W"
  },
  {
    "term": "Work (W)",
    "definition": "Product of the force on an object and the distance over which the force acts. Expressed in joules",
    "category": "Physics",
    "letter": "W",
    "units": "W"
  },
  {
    "term": "Workload (W)",
    "definition": "Product of the maximum milliamperage (mA) and the number of x-ray examinations performed per week. Expressed in milliamperes per minute per week (mA/min/wk).",
    "category": "Radiation Protection",
    "letter": "W",
    "units": "W"
  },
  {
    "term": "Workstation",
    "definition": "Powerful desktop system; often connected to larger computer systems so that users can transfer and share information.",
    "category": "Physics",
    "letter": "W"
  },
  {
    "term": "X-axis",
    "definition": "Horizontal line of a graph.",
    "category": "General",
    "letter": "X"
  },
  {
    "term": "X-ray",
    "definition": "Penetrating, ionizing electromagnetic radiation that has a wavelength much shorter than that of visible light.",
    "category": "Physics",
    "letter": "X"
  },
  {
    "term": "X-ray imaging system",
    "definition": "X-ray system designed for radiography, tomography, or fluoroscopy.",
    "category": "Equipment",
    "letter": "X"
  },
  {
    "term": "X-ray quality",
    "definition": "Penetrability of an x-ray beam.",
    "category": "General",
    "letter": "X"
  },
  {
    "term": "X-ray quantity",
    "definition": "Output intensity of an x-ray imaging system; measured in roentgens (R).",
    "category": "Radiation Protection",
    "letter": "X",
    "units": "roentgens (R)"
  },
  {
    "term": "X-ray tube rating charts",
    "definition": "Charts that guide the technologist in the use of x-ray tubes.",
    "category": "Equipment",
    "letter": "X"
  },
  {
    "term": "Y-axis",
    "definition": "Vertical line of a graph.",
    "category": "General",
    "letter": "Y"
  },
  {
    "term": "Zonography",
    "definition": "Thick-slice tomography with a tomographic angle of less than 10 degrees.",
    "category": "General",
    "letter": "Z"
  }
];

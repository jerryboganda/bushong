# Challenge Questions for Part 5: Chapters 19 to 22
# Bushong 11th Edition Textbook

CHAPTER_19_QUESTIONS = [
  {
    "id": "q19-1",
    "questionNumber": 1,
    "chapterNumber": 19,
    "question": "Define or otherwise identify the following: (a) Exposure artifact, (b) Guide shoe marks, (c) Pick-off, (d) Pressure mark, (e) Kink mark, (f) Hypo retention, (g) Safelight fog, (h) Curtain effect, (i) Pi line, (j) Processing artifact.",
    "answer": "Standard terminology for screen-film radiographic artifacts arising during exposure, processing, and handling.",
    "explanation": "(a) Exposure artifact: An unwanted optical density or blemish caused by improper patient preparation, motion, double exposure, or grid alignment during x-ray exposure. (b) Guide shoe marks: Fine linear scratches on the film emulsion running parallel to the direction of film travel through the automatic processor caused by sprung or misaligned guide shoes. (c) Pick-off: Flecks of emulsion torn away or deposited onto film by dirty or sticky rollers. (d) Pressure mark: Optical density alteration caused by mechanical pressure on the film prior to or following exposure. (e) Kink mark: Fingernail-shaped crescent artifact caused by abrupt bending or buckling of film before processing. (f) Hypo retention: Yellow-brown staining that develops over months/years due to residual ammonium/sodium thiosulfate fixer remaining in the emulsion from inadequate washing. (g) Safelight fog: Generalized density increase caused by improper darkroom bulb wattage, wrong filter color, or excessive safelight exposure time. (h) Curtain effect: Uneven dripline density pattern caused by chemistry draining non-uniformly down the film surface when exiting wash tanks. (i) Pi line: Transverse dark or light lines occurring perpendicular to film travel at regular intervals equal to roller circumference (C = pi × d). (j) Processing artifact: Any artifact produced by chemical or mechanical malfunctions inside the automated film processor."
  },
  {
    "id": "q19-2",
    "questionNumber": 2,
    "chapterNumber": 19,
    "question": "Why must records be kept when the QC technologist sees artifacts?",
    "answer": "To track recurring trends, identify root causes, trigger timely equipment maintenance, and prevent repeat patient exposures.",
    "explanation": "Maintaining an artifact log allows the QC team to pinpoint whether artifacts are isolated technologist errors or systemic mechanical/chemical failures (such as roller misalignment or chemistry exhaustion), ensuring prompt corrective action before multiple patients are subjected to unnecessary repeat radiation doses."
  },
  {
    "id": "q19-3",
    "questionNumber": 3,
    "chapterNumber": 19,
    "question": "Describe an artifact.",
    "answer": "Any unwanted feature, optical density, or blemish on a radiograph that does not represent actual patient anatomy.",
    "explanation": "An artifact is an artificial visual density or distortion introduced during image acquisition, processing, or display that impairs diagnostic clarity, degrades contrast, and can either mimic or obscure pathology, potentially causing diagnostic errors."
  },
  {
    "id": "q19-4",
    "questionNumber": 4,
    "chapterNumber": 19,
    "question": "List the three stages in diagnostic imaging during which artifacts tend to occur.",
    "answer": "Exposure stage, processing stage, and handling/storage stage.",
    "explanation": "(1) Exposure stage: Patient motion, incorrect patient positioning, radiopaque jewelry/clothing, double exposures, grid cutoff, and quantum mottle; (2) Processing stage: Roller scratches, pi lines, guide shoe marks, chemical fog, chemical replenishment imbalance, and inadequate wash/fixer hypo retention; (3) Handling and storage stage: Static electricity discharges, fingernail kinks, safe-light fog, moisture/heat damage, and radiation fog."
  },
  {
    "id": "q19-5",
    "questionNumber": 5,
    "chapterNumber": 19,
    "question": "Give three examples of exposure artifacts.",
    "answer": "Patient motion blur, double exposure, and radiopaque foreign objects (zippers, necklaces, ECG leads).",
    "explanation": "Exposure artifacts occur during the x-ray exposure itself: (1) Involuntary or voluntary patient motion causing blurred anatomical margins; (2) Accidental double exposure when an exposed cassette is reused; (3) External radiopaque objects left on the patient such as jewelry, bra hooks, zippers, or surgical monitoring leads; and (4) Grid cutoff from tube-grid misalignment."
  },
  {
    "id": "q19-6",
    "questionNumber": 6,
    "chapterNumber": 19,
    "question": "How would a radiographer correct a blurred radiograph if it was the result of patient motion?",
    "answer": "Use clear patient breathing instructions, immobilization devices, and a higher mA station with a shorter exposure time.",
    "explanation": "Motion unsharpness is minimized by: (1) Instructing the patient clearly on breath-holding protocols; (2) Utilizing physical immobilization devices (sandbags, compression bands, sponges); and (3) Selecting the highest available mA station to achieve the required mAs in the shortest possible exposure duration (fraction of a second)."
  },
  {
    "id": "q19-7",
    "questionNumber": 7,
    "chapterNumber": 19,
    "question": "What is the principal reason for double exposures?",
    "answer": "Technologist carelessness in failing to segregate exposed cassettes from unexposed cassettes.",
    "explanation": "Double exposure occurs almost exclusively when a technologist fails to follow established department workflow for physically separating exposed cassettes from fresh unexposed cassettes in the radiographic suite or mobile cart."
  },
  {
    "id": "q19-8",
    "questionNumber": 8,
    "chapterNumber": 19,
    "question": "Name three types of processing artifacts.",
    "answer": "Guide shoe marks, pi lines, and wet-pressure sensitization marks.",
    "explanation": "Processing artifacts generated within the automated film processor include: (1) Guide shoe scratches caused by misaligned turnaround guides; (2) Pi lines caused by dirty, damaged, or out-of-round rollers; (3) Wet-pressure sensitization marks from roller pressure on soft wet emulsion; (4) Chemical fog from developer temperature overheating; and (5) Roller pick-off flecks."
  },
  {
    "id": "q19-9",
    "questionNumber": 9,
    "chapterNumber": 19,
    "question": "What is a dichroic stain?",
    "answer": "A two-colored chemical stain on the radiograph (appearing greenish-yellow in reflected light and pinkish-brown in transmitted light) caused by improper fixing.",
    "explanation": "Dichroic stains occur when developer chemistry is not properly neutralized by the acidic fixer (due to exhausted fixer or improper wash rates). The residual developer continues to react in the fixer bath, forming colloidal silver deposits that appear dichroic (two colors under different lighting)."
  },
  {
    "id": "q19-10",
    "questionNumber": 10,
    "chapterNumber": 19,
    "question": "How do guide shoe marks occur?",
    "answer": "Misaligned, bent, or improperly seated guide shoes scratch the soft film emulsion as the film rounds a turnaround rack.",
    "explanation": "Turnaround assemblies in automatic processors use curved metal or plastic guide shoes to redirect film from one vertical roller rack into the next tank. If a guide shoe is sprung, misaligned, or rough, its sharp edges press into and gouge the soft, swollen film emulsion, leaving straight grooves parallel to film travel."
  },
  {
    "id": "q19-11",
    "questionNumber": 11,
    "chapterNumber": 19,
    "question": "Explain what 3.1416 inches has to do with pi lines.",
    "answer": "A 1-inch diameter processor roller has a circumference of 3.1416 inches (pi × d), repeating dirty roller artifacts every 3.1416 inches.",
    "explanation": "Pi lines occur when debris or flat spots on a roller contact the film once per revolution. Roller circumference C = pi × diameter. For a standard 1.0-inch diameter turnaround or transport roller: C = 3.1416 × 1.0 = 3.1416 inches. The artifact repeats across the film at exactly this interval."
  },
  {
    "id": "q19-12",
    "questionNumber": 12,
    "chapterNumber": 19,
    "question": "Describe the causes of wet-pressure sensitization marks.",
    "answer": "Excessive pressure exerted by misaligned or dirty rollers while the film emulsion is soft and wet in the developer tank.",
    "explanation": "While film emulsion is submerged in warm developer solution, the gelatin expands and becomes soft and vulnerable. If transport rollers exert uneven, excessive pressure, the mechanical stress chemically sensitizes the silver halide grains, producing localized high-density marks."
  },
  {
    "id": "q19-13",
    "questionNumber": 13,
    "chapterNumber": 19,
    "question": "Explain three ways fog can occur on a radiograph.",
    "answer": "Darkroom light leaks/improper safelight filters, excessive processor developer temperature, and exposure to scatter/background radiation during storage.",
    "explanation": "(1) Optical fog: Caused by light leaks through darkroom doors/pass-boxes or improper safelight filter/bulb wattage; (2) Chemical fog: Caused by developer temperature exceeding specifications or chemical contamination; (3) Radiation fog: Caused by scattered x-rays or background radiation penetrating unshielded film storage bins."
  },
  {
    "id": "q19-14",
    "questionNumber": 14,
    "chapterNumber": 19,
    "question": "What is the cause of a static artifact on the processed radiograph?",
    "answer": "Electrostatic discharge sparks striking the film emulsion, most prevalent during periods of low ambient relative humidity (<40%).",
    "explanation": "When dry film is rapidly removed from cassettes, slid across loading benches, or handled in dry air (relative humidity below 40%), built-up static electrical charge discharges as an electrical spark across the emulsion, exposing silver halide grains."
  },
  {
    "id": "q19-15",
    "questionNumber": 15,
    "chapterNumber": 19,
    "question": "List the three types of static artifact patterns.",
    "answer": "Crown static, tree static, and smudge static.",
    "explanation": "(1) Crown static: Radiates outward in a crown or arc shape, caused by peeling film rapidly from a rubber or plastic cassette surface; (2) Tree static: Branching, arborized jagged lines resembling lightning strikes, caused by friction discharge during rapid film sliding; (3) Smudge static: Dark, diffuse, cloud-like black smudges caused by lint or finger contact carrying static discharge."
  },
  {
    "id": "q19-16",
    "questionNumber": 16,
    "chapterNumber": 19,
    "question": "Why is it important for radiographers to be alert to film artifacts?",
    "answer": "Artifacts can simulate fractures or pathology causing misdiagnosis, or obscure genuine lesions and cause unnecessary repeat examinations.",
    "explanation": "Artifacts can closely mimic pathological conditions (e.g., a hair line mimicking a skull fracture, or static mimicking calcifications), leading to false-positive diagnoses and unnecessary invasive treatments. Conversely, artifacts can obscure subtle genuine malignancies, leading to delayed medical care."
  },
  {
    "id": "q19-17",
    "questionNumber": 17,
    "chapterNumber": 19,
    "question": "How can one best avoid processor artifacts?",
    "answer": "Implement strict daily and weekly preventative maintenance, roller rack cleaning, and precise replenishment rate monitoring.",
    "explanation": "Processor artifacts are prevented by scheduled maintenance: washing crossover racks daily, scrubbing transport rollers with non-abrasive pads, monitoring developer temperature with a precision thermometer, maintaining proper chemical replenishment rates, and running daily sensitometric strips."
  },
  {
    "id": "q19-18",
    "questionNumber": 18,
    "chapterNumber": 19,
    "question": "What causes grid cutoff artifacts?",
    "answer": "Improper alignment between the primary x-ray beam and the lead strips of the grid (off-level, off-center, off-focus, or upside-down).",
    "explanation": "Grid cutoff occurs when the primary beam strikes the lead grid strips at an angle rather than passing through the radiolucent interspaces: (1) Off-level: Tube or grid tilted; (2) Off-center: Central ray displaced laterally from grid center; (3) Off-focus: SID used outside the grid's focal range; (4) Upside-down: Focused grid placed backward, causing severe peripheral cutoff."
  },
  {
    "id": "q19-19",
    "questionNumber": 19,
    "chapterNumber": 19,
    "question": "How do pressure-type artifacts appear?",
    "answer": "Pressure applied prior to exposure produces dark (increased optical density) marks; pressure applied after exposure produces light (decreased optical density) marks.",
    "explanation": "Mechanical pressure on film emulsion before exposure physically sensitizes the silver halide crystals (producing black artifacts upon development). Conversely, heavy mechanical pressure or scratching on film after latent image formation disrupts the latent image centers (desensitization), resulting in minus-density light marks."
  },
  {
    "id": "q19-20",
    "questionNumber": 20,
    "chapterNumber": 19,
    "question": "What type of artifact does hypo retention cause?",
    "answer": "A yellow-brown chemical discoloration and fading of the radiographic image during long-term storage.",
    "explanation": "If film is inadequately washed, residual sodium or ammonium thiosulfate (hypo) remains in the gelatin emulsion. Over time, the hypo reacts with elemental silver grains and atmospheric oxygen to form silver sulfide, creating a mottled yellow-brown stain that degrades the archival quality of the radiograph."
  }
]

CHAPTER_20_QUESTIONS = [
  {
    "id": "q20-1",
    "questionNumber": 1,
    "chapterNumber": 20,
    "question": "Define or otherwise identify the following: (a) Quality assurance (QA), (b) Required x-ray beam filtration, (c) Tomography QC, (d) Outcome analysis, (e) Minimum half-value layer (HVL), (f) TJC 10-step program, (g) Exposure linearity, (h) Quality control (QC).",
    "answer": "Foundational quality assurance, accreditation, and equipment performance evaluation terms.",
    "explanation": "(a) Quality assurance (QA): Comprehensive management program overseeing all aspects of patient care, scheduling, report delivery, and departmental clinical outcomes. (b) Required x-ray beam filtration: Minimum total filtration of 2.5 mm Al equivalent for systems operating above 70 kVp. (c) Tomography QC: Quality tests evaluating section thickness, cut height accuracy, and fulcrum travel. (d) Outcome analysis: Systematic clinical study assessing whether diagnostic imaging procedures produce accurate diagnoses and improved patient health outcomes. (e) Minimum HVL: The minimum thickness of aluminum absorber required to reduce the x-ray beam intensity to half its original value, verifying beam quality. (f) TJC 10-step program: The Joint Commission's standardized 10-step continuous quality improvement model for healthcare organizations. (g) Exposure linearity: The ability of an x-ray system to produce consistent radiation output (mGy/mAs) across adjacent mA stations (must be within ±10%). (h) Quality control (QC): The technical aspect of QA involving physical measurements, calibration, and testing of imaging hardware to ensure peak performance."
  },
  {
    "id": "q20-2",
    "questionNumber": 2,
    "chapterNumber": 20,
    "question": "List and explain the theory behind The Joint Commission (TJC) QA program used in hospitals.",
    "answer": "Continuous quality improvement based on 10 standardized steps designed to monitor, evaluate, and systematically optimize patient care.",
    "explanation": "The Joint Commission 10-step model operates on the theory that clinical quality is an ongoing, continuous process rather than a static goal: (1) Assign responsibility; (2) Delineate scope of care; (3) Identify key aspects of care; (4) Identify indicators; (5) Establish thresholds for evaluation; (6) Collect and organize data; (7) Evaluate care; (8) Take corrective action; (9) Assess effectiveness of action; (10) Communicate findings department-wide."
  },
  {
    "id": "q20-3",
    "questionNumber": 3,
    "chapterNumber": 20,
    "question": "Discuss the three steps of quality control for radiographic equipment.",
    "answer": "Acceptance testing, routine performance monitoring, and preventative maintenance/repair.",
    "explanation": "(1) Acceptance testing: Performed by a qualified medical physicist on new or extensively repaired equipment to verify it meets manufacturer specifications and legal requirements before clinical use; (2) Routine performance monitoring: Regularly scheduled periodic tests performed by QC technologists to ensure stable ongoing performance; (3) Preventative maintenance and repair: Scheduled servicing and component replacement to prevent breakdowns and restore out-of-tolerance equipment."
  },
  {
    "id": "q20-4",
    "questionNumber": 4,
    "chapterNumber": 20,
    "question": "Name the people on the diagnostic imaging QC team.",
    "answer": "The radiologist (medical director), the qualified medical physicist, and the designated QC technologist.",
    "explanation": "The QC team is a triumvirate: (1) Radiologist: Provides overall clinical leadership and establishes diagnostic acceptability standards; (2) Medical Physicist: Oversees equipment specifications, baseline acceptance testing, and complex calibrations; (3) QC Technologist: Executes day-to-day measurements, maintains logs, and reports equipment deviations."
  },
  {
    "id": "q20-5",
    "questionNumber": 5,
    "chapterNumber": 20,
    "question": "How is filtration measured in radiographic equipment?",
    "answer": "By measuring the half-value layer (HVL) of the x-ray beam using sheets of pure aluminum and an calibrated radiation detector.",
    "explanation": "Because physical examination of inherent filtration inside the tube housing is impossible, filtration is determined indirectly by measuring the half-value layer (HVL). Radiation exposure is recorded with calibrated dosimeters while progressively thicker sheets of high-purity aluminum are placed in the beam until output drops to 50% of the unattenuated value."
  },
  {
    "id": "q20-6",
    "questionNumber": 6,
    "chapterNumber": 20,
    "question": "Why are proper x-ray beam alignment and collimation important?",
    "answer": "To prevent irradiating tissue outside the area of clinical interest and to avoid clipping vital anatomy at the edge of the receptor.",
    "explanation": "Proper collimator congruence protects the patient from unnecessary radiation exposure by confining the primary beam strictly to the anatomical region of interest. Alignment ensures the central ray is centered over the grid and image receptor, avoiding grid cutoff and anatomy cut-off."
  },
  {
    "id": "q20-7",
    "questionNumber": 7,
    "chapterNumber": 20,
    "question": "What are the limits for radiographic collimation misalignment?",
    "answer": "The x-ray beam and light field congruence must agree within ±2% of the source-to-image distance (SID).",
    "explanation": "Federal regulations and NCRP guidelines mandate that the misalignment of the light field with the actual x-ray beam must not exceed 2% of the SID along any axis (e.g., ±2 cm at a 100-cm SID). Beam-to-receptor perpendicularity must also be within 1 degree."
  },
  {
    "id": "q20-8",
    "questionNumber": 8,
    "chapterNumber": 20,
    "question": "What three QC tools are used to measure focal-spot size?",
    "answer": "The pinhole camera, the star pattern, and the slit camera.",
    "explanation": "(1) Pinhole camera: The definitive reference standard; projects an inverted focal-spot image through a microscopic aperture (0.03 mm) onto film, though difficult to align; (2) Star pattern: Resolution test pattern where focal-spot size is calculated from the radius of blurred resolution zones; (3) Slit camera: The standard clinical tool; uses 10-µm slits to measure focal-spot dimensions in width and length."
  },
  {
    "id": "q20-9",
    "questionNumber": 9,
    "chapterNumber": 20,
    "question": "What is the permitted variation of radiographic reproducibility?",
    "answer": "The coefficient of variation (CoV) for exposure reproducibility must not exceed ±5% (0.05).",
    "explanation": "Exposure reproducibility measures the ability of the x-ray generator to produce identical radiation output when identical technical factors (kVp, mA, time) are repeated multiple times. The variation in output across 10 sequential exposures must remain within ±5%."
  },
  {
    "id": "q20-10",
    "questionNumber": 10,
    "chapterNumber": 20,
    "question": "What test is performed on intensifying screens and cassettes to check whether there is proper screen-film contact?",
    "answer": "The wire mesh test.",
    "explanation": "A fine copper wire mesh test tool is placed over the face of the cassette and exposed at low kVp. Upon development, the radiograph is viewed from a distance of ~2 meters. Areas of poor contact cause localized light spread, appearing as fuzzy, dark blotches on the mesh pattern."
  },
  {
    "id": "q20-11",
    "questionNumber": 11,
    "chapterNumber": 20,
    "question": "What products are used to clean radiographic intensifying screens?",
    "answer": "Specialized antistatic commercial screen cleaning solutions and lint-free electrostatic wipes.",
    "explanation": "Screens should only be cleaned with manufacturer-recommended antistatic screen cleaner. Flammable organic solvents (alcohol, ether, acetone) must never be used because they dissolve the protective polyurethane screen coating."
  },
  {
    "id": "q20-12",
    "questionNumber": 12,
    "chapterNumber": 20,
    "question": "How often should lead apparel be checked for protective integrity?",
    "answer": "Annually (at least once every 12 months).",
    "explanation": "All protective lead aprons, thyroid shields, and lead gloves must undergo documented physical inspection and fluoroscopic or radiographic imaging at least annually to detect internal cracks, tears, or shielding separation."
  },
  {
    "id": "q20-13",
    "questionNumber": 13,
    "chapterNumber": 20,
    "question": "How do we ensure kVp accuracy in radiographic equipment?",
    "answer": "Using calibrated non-invasive electronic digital kVp meters (filter packs) tested annually to verify accuracy within ±5% (or ±4 kVp).",
    "explanation": "A digital kVp meter containing filtered solid-state radiation detectors measures the differential penetration of x-rays through copper/aluminum filters to calculate peak kilovoltage. Measured kVp must remain within ±5% of the console setting."
  },
  {
    "id": "q20-14",
    "questionNumber": 14,
    "chapterNumber": 20,
    "question": "What is the unit of luminance of a viewbox?",
    "answer": "Candela per square meter (cd/m^2) or nits (minimum 1,500 cd/m^2 for general radiography).",
    "explanation": "Luminance of conventional illuminators is measured with a photometer in candelas per square meter (cd/m^2). Viewboxes for general screen-film radiography must provide at least 1,500 cd/m^2, with luminance uniformity not varying by more than ±10% across the surface."
  },
  {
    "id": "q20-15",
    "questionNumber": 15,
    "chapterNumber": 20,
    "question": "How often should an automatic film processor be cleaned?",
    "answer": "Crossover racks cleaned daily; deep tank cleaning and roller rack scrubbing performed weekly to monthly.",
    "explanation": "Crossover transport assemblies must be wiped clean daily with warm water to remove dried chemical crystallization. Deep tank drainage, chemical replenishment system flushing, and full roller scrub-downs are scheduled weekly or monthly based on patient volume."
  },
  {
    "id": "q20-16",
    "questionNumber": 16,
    "chapterNumber": 20,
    "question": "What is the importance of preventive maintenance for a radiographic film processor?",
    "answer": "It minimizes unexpected mechanical breakdowns, maintains stable sensitometric processing conditions, and prevents costly repeat exposures.",
    "explanation": "Preventative maintenance (PM) replaces worn drive gears, seals, and circulation pumps before catastrophic failure occurs, maintaining developer activity and water wash purity within narrow tolerances to guarantee consistent radiographic optical density."
  },
  {
    "id": "q20-17",
    "questionNumber": 17,
    "chapterNumber": 20,
    "question": "A high-frequency radiographic imaging system requires how much x-ray beam filtration?",
    "answer": "A minimum of 2.5 mm aluminum equivalent total filtration when operated at 70 kVp or above.",
    "explanation": "Under 21 CFR 1020.30 and NCRP Report No. 102, any radiographic system operated at 70 kVp or higher requires a minimum total beam filtration (inherent + added) of 2.5 mm Al equivalent to suppress low-energy patient skin dose."
  },
  {
    "id": "q20-18",
    "questionNumber": 18,
    "chapterNumber": 20,
    "question": "What is the permitted radiographic exposure linearity variation?",
    "answer": "The radiation intensity output (mGy/mAs) across adjacent mA stations must not vary by more than ±10%.",
    "explanation": "Exposure linearity requires that radiation output per unit mAs remains constant when changing between adjacent mA stations while holding mAs constant: |X1 - X2| / (X1 + X2) <= 0.10, where X1 and X2 are average outputs in mGy/mAs."
  },
  {
    "id": "q20-19",
    "questionNumber": 19,
    "chapterNumber": 20,
    "question": "When should defective protective apparel be discarded?",
    "answer": "Immediately upon discovering a crack, tear, or lead separation over critical organ areas.",
    "explanation": "Any lead apron or shield exhibiting holes, tears, or fractures on inspection—particularly over gonadal or hematopoietic regions—must be removed from service and discarded immediately, as it exposes the wearer to direct unattenuated primary or scattered beam."
  },
  {
    "id": "q20-20",
    "questionNumber": 20,
    "chapterNumber": 20,
    "question": "What tools are used for film processor monitoring?",
    "answer": "A sensitometer, a transmission densitometer, and a precision QC thermometer.",
    "explanation": "Processor monitoring relies on: (1) Sensitometer: Exposes a standardized optical step-wedge onto film; (2) Densitometer: Measures optical densities on the processed strip (evaluating Base+Fog, Speed Index, and Contrast Index); (3) Thermometer: Measures developer temperature accurately within ±0.3°C."
  }
]

CHAPTER_21_QUESTIONS = [
  {
    "id": "q21-1",
    "questionNumber": 1,
    "chapterNumber": 21,
    "question": "Define or otherwise identify the following: (a) Histogram, (b) Artifact, (c) Partition, (d) Compression, (e) CAD, (f) Frequency distribution, (g) For presentation, (h) Flatfielding, (i) Radiation fatigue.",
    "answer": "Essential concepts and terminology regarding digital radiographic artifacts and image processing.",
    "explanation": "(a) Histogram: Graphic plot showing the frequency distribution of pixel values (exposure levels) recorded in an image. (b) Artifact: Any artificial feature or distortion in a digital image not representing patient anatomy. (c) Partition: The division of an imaging plate into multiple exposure fields (e.g., 2-on-1 or 4-on-1), requiring distinct collimated borders. (d) Compression: Mathematical reduction of image file size for storage or rapid transmission (lossless or lossy). (e) CAD: Computer-aided detection/diagnosis software that highlights suspicious lesions for radiologist review. (f) Frequency distribution: Statistical display of how often each specific numerical pixel value occurs across the image matrix. (g) For presentation: Fully processed image data optimized for human visual display on a calibrated workstation. (h) Flatfielding: Software calibration process that equalizes pixel response across the receptor to correct for heel effect, gain variations, and shading. (i) Radiation fatigue: Gradual degradation in detector response or plate background noise over years of repetitive high radiation exposures."
  },
  {
    "id": "q21-2",
    "questionNumber": 2,
    "chapterNumber": 21,
    "question": "What are the three general classifications of digital image artifacts?",
    "answer": "Image receptor artifacts, software/processing artifacts, and object/operator artifacts.",
    "explanation": "(1) Image receptor artifacts: Scratches on phosphor plates, dust on light guides, defective detector pixels, ghosting from incomplete plate erasure; (2) Software artifacts: Flat-fielding errors, incorrect histogram selection, improper collimation boundary detection, excessive image compression; (3) Object/operator artifacts: Patient motion, radiopaque clothing, double exposures, upside-down cassette placement, improper grid cutoff."
  },
  {
    "id": "q21-3",
    "questionNumber": 3,
    "chapterNumber": 21,
    "question": "What is the 'for-processing' image, and how is it manipulated into a 'for-presentation' image?",
    "answer": "Raw digital data directly acquired from the detector; transformed into 'for-presentation' by applying flat-fielding, anatomical histogram analysis, and lookup tables (LUT).",
    "explanation": "The 'for-processing' image contains raw, uncorrected pixel values linear with radiation exposure, which appear low-contrast and flat. Proprietary image processing algorithms apply offset correction, flatfield gain calibration, anatomical histogram segmentation, noise reduction, edge enhancement, and non-linear LUT transformation to create the diagnostic 'for-presentation' image."
  },
  {
    "id": "q21-4",
    "questionNumber": 4,
    "chapterNumber": 21,
    "question": "What does it mean when a single digital radiographic image is not properly aligned with the IP?",
    "answer": "The collimation edges do not align parallel to the plate borders, causing histogram analysis failure, severe contrast degradation, and incorrect exposure indicators.",
    "explanation": "Digital exposure recognition software assumes collimation borders run parallel to the edges of the imaging plate. If the collimated x-ray field is placed at an angle, the software fails to detect the clear collimated margins and includes unattenuated background exposure in the histogram, resulting in an abnormally dark or washed-out image with an erroneous exposure index."
  },
  {
    "id": "q21-5",
    "questionNumber": 5,
    "chapterNumber": 21,
    "question": "What is the appearance of the radiation response curve for a digital radiographic image receptor?",
    "answer": "A strictly linear, straight-line response spanning four to five orders of magnitude of radiation exposure.",
    "explanation": "Unlike screen-film which has an S-shaped characteristic curve with toe and shoulder regions (narrow latitude), digital image receptors respond in a completely linear fashion from very low exposures (quantum noise threshold) up to extreme exposures (saturation), providing a dynamic range exceeding 10,000:1."
  },
  {
    "id": "q21-6",
    "questionNumber": 6,
    "chapterNumber": 21,
    "question": "Which digital imaging modality generates the largest image file, and approximately how large is it?",
    "answer": "Digital mammography tomosynthesis (DMT), generating 1 to 2 GB per study (standard 2D FFDM generates ~50 MB per study).",
    "explanation": "Because mammography requires ultra-high spatial resolution (50-µm pixels with 16-bit depth), each projection image is ~10-20 MB. A digital breast tomosynthesis (DMT) examination acquiring 15 to 25 projection views reconstructed into dozens of 1-mm slices produces datasets of 1 to 2 Gigabytes per patient study."
  },
  {
    "id": "q21-7",
    "questionNumber": 7,
    "chapterNumber": 21,
    "question": "What is the difference between lossless and lossy compression?",
    "answer": "Lossless compression reconstructs the exact original image bit-for-bit (up to 3:1 ratio); lossy compression achieves high compression (10:1 to 50:1) by discarding imperceptible image data.",
    "explanation": "Lossless compression (ratios up to 3:1) retains every bit of raw numerical data and is legally required for primary diagnostic interpretation. Lossy compression (ratios of 10:1 to 50:1 or greater) permanently discards fine image frequencies; while acceptable for rapid web viewing or teleradiology triage, excessive lossy compression introduces blocking artifacts and obliterates microcalcifications."
  },
  {
    "id": "q21-8",
    "questionNumber": 8,
    "chapterNumber": 21,
    "question": "What happens when multiple exposure fields on a single IP have improper or overlapping margins?",
    "answer": "Collimation edge detection fails, causing incorrect histogram scaling, improper density, and loss of diagnostic contrast.",
    "explanation": "When partitioning an IP into multiple fields (e.g., 2-on-1), the technologist must maintain clear, non-overlapping collimated borders parallel to the plate. If margins overlap or are unequal, the segmentation algorithm cannot differentiate between adjacent exposures, incorporating scatter from adjacent exposures into the histogram and producing severe density errors."
  },
  {
    "id": "q21-9",
    "questionNumber": 9,
    "chapterNumber": 21,
    "question": "How many distinct margins should appear on a properly collimated digital radiograph?",
    "answer": "Four distinct collimated margins, cleanly centered and parallel to the edges of the imaging plate.",
    "explanation": "Optimal digital image processing algorithms require four distinct collimation borders parallel to the plate edges so the software can accurately identify the anatomical volume of interest (VOI) and exclude unattenuated raw beam background exposure from the histogram."
  },
  {
    "id": "q21-10",
    "questionNumber": 10,
    "chapterNumber": 21,
    "question": "Why is backscatter radiation important in digital radiography?",
    "answer": "Digital receptors are exceptionally sensitive to low-level scatter, which can expose the receptor through the back of the cassette and create phantom artifacts.",
    "explanation": "Because digital photostimulable phosphor and flat-panel detectors have extremely high radiation sensitivity and wide dynamic range, x-rays scattered from walls, floors, or cassette holders behind the detector can penetrate the rear casing, creating faint phantom shadows and reducing image contrast."
  },
  {
    "id": "q21-11",
    "questionNumber": 11,
    "chapterNumber": 21,
    "question": "What are the units on each axis of a digital radiographic image histogram?",
    "answer": "Horizontal x-axis: Pixel digital value (exposure level / gray level); Vertical y-axis: Number of pixels (frequency of occurrence).",
    "explanation": "A digital image histogram displays the distribution of pixel values: the horizontal axis plots the pixel value or signal intensity (corresponding to radiation exposure), and the vertical axis plots the number of pixels in the image that possess that specific value."
  },
  {
    "id": "q21-12",
    "questionNumber": 12,
    "chapterNumber": 21,
    "question": "What type of algorithm is used to correct for malfunctioning pixels in a flat-panel detector?",
    "answer": "Defective pixel interpolation (point or bilinear interpolation).",
    "explanation": "Flat-panel detectors often have a tiny percentage of unresponsive or dead pixels from manufacturing defects. During calibration, software identifies defective pixel coordinates and interpolates an estimated value by taking the mathematical average of the functioning surrounding neighbor pixels."
  },
  {
    "id": "q21-13",
    "questionNumber": 13,
    "chapterNumber": 21,
    "question": "Why is data compression often required for digital images?",
    "answer": "To reduce transmission time across networks and decrease the enormous storage demands on PACS archival storage systems.",
    "explanation": "Digital imaging departments generate hundreds of gigabytes to terabytes of data daily. Compressing image files reduces network bandwidth consumption during teleradiology transmission and reduces PACS hard-drive and off-site cloud storage costs."
  },
  {
    "id": "q21-14",
    "questionNumber": 14,
    "chapterNumber": 21,
    "question": "What do the two outlying peaks on a digital image histogram represent?",
    "answer": "The minimum peak represents raw unexposed collimated border areas; the maximum peak represents raw, unattenuated direct x-ray beam striking outside the patient.",
    "explanation": "On a raw histogram: (1) The low-exposure spike on the extreme left corresponds to the fully collimated, unexposed areas under the collimator lead blades; (2) The high-exposure spike on the extreme right corresponds to the direct, raw unattenuated beam that bypassed the patient and struck the detector directly. The anatomical data of interest (VOI) lies between these two spikes."
  },
  {
    "id": "q21-15",
    "questionNumber": 15,
    "chapterNumber": 21,
    "question": "What is the life expectancy of a CR imaging plate?",
    "answer": "Thousands of exposures, typically 5 to 10 years if physically protected from mechanical scratching and abrasion.",
    "explanation": "Photostimulable phosphor plates do not chemically degrade from radiation exposure; their lifespan is limited primarily by mechanical wear, scratches, roller abrasion, and edge chipping from repeated transport cycles through the CR reader."
  },
  {
    "id": "q21-16",
    "questionNumber": 16,
    "chapterNumber": 21,
    "question": "Relate the tissues of a digital radiograph to their position on the radiation response curve.",
    "answer": "Bone occupies the lower-exposure region; soft tissue occupies the middle region; lung and unattenuated air occupy the high-exposure region.",
    "explanation": "Dense radiopaque structures (bone, barium, metal implants) attenuate most x-rays, placing their detector exposure in the low-signal range. Visceral organs, muscle, and fluid occupy the intermediate exposure range. Radiolucent air-filled lungs and skin borders transmit the most photons, falling in the higher-signal portion of the linear response curve."
  },
  {
    "id": "q21-17",
    "questionNumber": 17,
    "chapterNumber": 21,
    "question": "Why is it important for the radiologic technologist to select the proper imaging protocol for each digital examination?",
    "answer": "It ensures the system applies the exact anatomical histogram analysis and lookup table (LUT) matched to the specific body part.",
    "explanation": "Each anatomical menu selection (e.g., chest vs lateral lumbar spine) applies a specialized processing algorithm that anticipates specific exposure ranges and tissue contrast distributions. Selecting the wrong anatomical menu applies mismatched histogram scaling, resulting in suboptimal contrast, unnatural edge enhancement, or diagnostic artifact."
  },
  {
    "id": "q21-18",
    "questionNumber": 18,
    "chapterNumber": 21,
    "question": "How does the heel effect appear on a digital image receptor?",
    "answer": "Image brightness is uniform due to flatfielding calibration, but quantum mottle (noise) may appear on the anode side if underpenetrated.",
    "explanation": "In screen-film, the anode heel effect appears as a visible gradient in optical density. In digital imaging, flat-fielding calibration automatically evens out the visual brightness across the receptor; however, because fewer photons reach the anode side of the beam, the anode edge may exhibit higher quantum noise (mottle) if mAs is marginal."
  },
  {
    "id": "q21-19",
    "questionNumber": 19,
    "chapterNumber": 21,
    "question": "Excessive compression can result in what form of image artifact?",
    "answer": "Blocking artifacts, loss of edge sharpness, and complete erasure of fine subtle structures like microcalcifications.",
    "explanation": "Excessive lossy compression algorithms (such as high-ratio JPEG) divide images into discrete 8 × 8 pixel blocks. At high compression ratios, block boundary seams become visible ('tiling' or 'blocking' artifacts), and high-frequency anatomical detail (fine bone trabeculae, tiny calcifications) is permanently blurred or erased."
  },
  {
    "id": "q21-20",
    "questionNumber": 20,
    "chapterNumber": 21,
    "question": "Is an image histogram updated from time to time? If so, why?",
    "answer": "Yes; manufacturers and medical physicists update histogram lookup tables to adapt to evolving clinical techniques, new patient demographics, and bariatric imaging needs.",
    "explanation": "Clinical histogram models are periodically refined through software firmware updates. Vendors adjust the algorithmic reference ranges and gradation curves to accommodate changing clinical techniques (e.g., lower kVp protocols, pediatric parameters) and varying patient body habitus to optimize diagnostic image quality."
  }
]

CHAPTER_22_QUESTIONS = [
  {
    "id": "q22-1",
    "questionNumber": 1,
    "chapterNumber": 22,
    "question": "Define or otherwise identify the following: (a) SMPTE pattern, (b) Specular reflection, (c) GSDF, (d) cd/m^2, (e) Veiling glare, (f) Presentation value (p-value), (g) VESA, (h) TG 18, (i) NIST, (j) Pincushion distortion.",
    "answer": "Key standards, photometric quantities, and test patterns for medical digital display quality control.",
    "explanation": "(a) SMPTE pattern: Standard test pattern developed by the Society of Motion Picture and Television Engineers used to evaluate display resolution, contrast, and 5%-95% luminance patches. (b) Specular reflection: Mirror-like reflection of ambient light from smooth display surfaces producing sharp glare images. (c) GSDF: Grayscale Standard Display Function (DICOM Part 14); mathematically standardizes display luminance response so images appear visually consistent across all monitors. (d) cd/m^2: Candela per square meter (nit); SI unit of luminance. (e) Veiling glare: Stray light scattered internally within the display panel or faceplate that washes out low-contrast details. (f) Presentation value (p-value): Standardized digital driving level input to a display after DICOM calibration. (g) VESA: Video Electronics Standards Association; establishes physical and electronic video display standards. (h) TG 18: AAPM Task Group 18, which developed comprehensive test patterns and QC protocols for medical displays. (i) NIST: National Institute of Standards and Technology; provides calibrated measurement standards. (j) Pincushion distortion: Geometric distortion where straight lines curve inward toward the screen center."
  },
  {
    "id": "q22-2",
    "questionNumber": 2,
    "chapterNumber": 22,
    "question": "Which TG 18 test pattern is used to evaluate diffuse reflection, and how does the pattern appear?",
    "answer": "TG 18-AD; it appears as a uniformly dark, black field with a central low-contrast square used to observe reflected ambient room light.",
    "explanation": "The TG 18-AD test pattern is designed to assess diffuse ambient reflection. It presents a uniform low-reflectance black screen; an illuminance meter or telescopic photometer measures reflected ambient light under varying room illumination conditions to ensure reflection does not degrade threshold contrast."
  },
  {
    "id": "q22-3",
    "questionNumber": 3,
    "chapterNumber": 22,
    "question": "What type of device is used to evaluate diffuse reflection on a display?",
    "answer": "A calibrated telescopic photometer and an illuminance meter (lux meter).",
    "explanation": "Diffuse reflection is evaluated by placing an illuminance meter at the center of the display surface to measure incident ambient light, while a telescopic photometer positioned at the standard viewing distance measures the luminance emitted and diffusely reflected from the screen face."
  },
  {
    "id": "q22-4",
    "questionNumber": 4,
    "chapterNumber": 22,
    "question": "What are the time requirements on technologist QC of a digital display device?",
    "answer": "Daily or weekly visual evaluation using the TG 18-QC or SMPTE test pattern (taking approximately 2 to 5 minutes).",
    "explanation": "Routine QC requires technologists to perform a rapid daily or weekly visual inspection of diagnostic workstations using the TG 18-QC pattern to verify that the 5% and 95% contrast patches are clearly visible, alphanumeric letters are sharp, and no geometric distortion or dead pixels exist."
  },
  {
    "id": "q22-5",
    "questionNumber": 5,
    "chapterNumber": 22,
    "question": "Which TG 18 test pattern is used to evaluate digital display resolution, and how does the pattern appear?",
    "answer": "TG 18-QC, TG 18-CX, and TG 18-PX; they feature high-frequency line pairs and pixel-level cross patterns across center and corners.",
    "explanation": "The TG 18-QC pattern features line-pair resolution targets in the center and all four corners. The dedicated TG 18-CX pattern consists of single-pixel cross targets to evaluate resolution uniformity and sharpness across the entire display matrix."
  },
  {
    "id": "q22-6",
    "questionNumber": 6,
    "chapterNumber": 22,
    "question": "What luminance range should be measurable on a primary diagnostic medical display?",
    "answer": "From L_min (~0.5 to 1.5 cd/m^2) to L_max (>171 cd/m^2 for general radiography, >420 cd/m^2 for mammography).",
    "explanation": "AAPM TG 18 guidelines require primary diagnostic displays to produce a minimum luminance (L_min) between 0.5 and 1.5 cd/m^2, and a maximum luminance (L_max) of at least 171 cd/m^2 for general diagnostic workstations and at least 420 cd/m^2 for digital mammography workstations."
  },
  {
    "id": "q22-7",
    "questionNumber": 7,
    "chapterNumber": 22,
    "question": "What does L_min represent, and what is its preferred value?",
    "answer": "The minimum luminance emitted by the display at the lowest input driving level; preferred value is between 0.5 and 1.5 cd/m^2.",
    "explanation": "L_min is the display's darkest possible black level. If L_min is too low (<0.5 cd/m^2), dark structures blend into ambient room reflection; if too high (>1.5 cd/m^2), black regions appear washed-out gray, reducing overall luminance ratio (L_max / L_min, which should exceed 250)."
  },
  {
    "id": "q22-8",
    "questionNumber": 8,
    "chapterNumber": 22,
    "question": "Which TG 18 test pattern is used to evaluate display noise, and how does it appear?",
    "answer": "TG 18-AFC; it consists of a uniform grayscale field divided into quadrants with low-contrast circular targets of varying contrast.",
    "explanation": "The TG 18-AFC (apparent flicker and contrast) pattern features small, low-contrast target squares containing just-noticeable contrast patches embedded in noise fields, testing the observer's ability to discern subtle signals through spatial and temporal display noise."
  },
  {
    "id": "q22-9",
    "questionNumber": 9,
    "chapterNumber": 22,
    "question": "What is the principle of perceptual linearization?",
    "answer": "Equal changes in digital driving levels produce equal perceived changes in brightness across the human visual threshold spectrum (DICOM GSDF).",
    "explanation": "Based on the Barten model of human contrast sensitivity, perceptual linearization ensures that a given numerical increment in image pixel value produces an identical, visually noticeable change in perceived brightness regardless of whether the structure lies in dark shadow or bright highlights."
  },
  {
    "id": "q22-10",
    "questionNumber": 10,
    "chapterNumber": 22,
    "question": "When should a medical physicist perform digital display device quality control?",
    "answer": "Upon initial installation (acceptance testing), at annual intervals, and following any major hardware or software repair.",
    "explanation": "A qualified medical physicist must perform a comprehensive photometric evaluation during acceptance testing before a display is cleared for patient diagnosis, periodically during annual audits, and whenever display panels, graphics cards, or backlight modules are replaced."
  },
  {
    "id": "q22-11",
    "questionNumber": 11,
    "chapterNumber": 22,
    "question": "What TG 18 electronic test pattern is used to evaluate contrast resolution of a digital display device, and how does it appear?",
    "answer": "TG 18-CT; it appears as 16 low-contrast square patches spanning low to high luminance with subtle half-contrast inner targets.",
    "explanation": "The TG 18-CT pattern consists of 16 primary target regions spanning the entire grayscale range. In each region, smaller sub-targets with subtle contrast increments (1% to 2%) test the display's capability to faithfully render low-contrast differences throughout its dynamic range."
  },
  {
    "id": "q22-12",
    "questionNumber": 12,
    "chapterNumber": 22,
    "question": "What is threshold of visibility?",
    "answer": "The lowest contrast level between an object and its surrounding background that is just perceptible to the human eye.",
    "explanation": "The threshold of visibility represents the limit of human contrast detection. In display evaluation, test patterns verify that targets having contrast at the human visual threshold remain visible across all display luminance levels without being masked by display noise or glare."
  },
  {
    "id": "q22-13",
    "questionNumber": 13,
    "chapterNumber": 22,
    "question": "What are the standard descriptions for digital display devices?",
    "answer": "Primary diagnostic displays (high resolution, calibrated for radiologist interpretation) and Secondary clinical displays (review monitors on nursing floors/clinics).",
    "explanation": "Primary displays are high-performance monitors (2 to 5+ megapixels, calibrated strictly to DICOM GSDF, high L_max) utilized by radiologists for formal diagnostic interpretation. Secondary displays are general clinical monitors (1 to 2 megapixels) used by referring physicians and nurses to review images after formal reports are signed."
  },
  {
    "id": "q22-14",
    "questionNumber": 14,
    "chapterNumber": 22,
    "question": "What is display noise?",
    "answer": "High-frequency random or fixed-pattern fluctuations in screen luminance that degrade image contrast and obscure subtle details.",
    "explanation": "Display noise includes high-frequency electronic noise in the LCD driving circuitry, backlight luminance fluctuations, structural variations in liquid crystal cell thickness, and faceplate anti-glare etching grain, all of which introduce unwanted random variance into image presentation."
  },
  {
    "id": "q22-15",
    "questionNumber": 15,
    "chapterNumber": 22,
    "question": "Which TG 18 electronic test pattern is used for luminance uniformity assessment, and how does it appear?",
    "answer": "TG 18-UN10 and TG 18-UN80; they appear as uniform solid fields of 10% and 80% luminance across the entire display screen.",
    "explanation": "The TG 18-UN10 (dark uniform field) and TG 18-UN80 (bright uniform field) patterns present completely solid grayscale across the display. A photometer measures luminance at five positions (screen center and four corners) to verify that luminance does not vary by more than ±30% across the active display area."
  }
]

print("Part 5 questions ready: Chapters 19, 20, 21, 22 (75 questions total).")

# Challenge Questions for Part 6: Chapters 23 to 28
# Bushong 11th Edition Textbook

CHAPTER_23_QUESTIONS = [
  {
    "id": "q23-1",
    "questionNumber": 1,
    "chapterNumber": 23,
    "question": "Define or otherwise identify the following: (a) Minimum filtration for mammography, (b) Mammographic SID, (c) Adipose tissue, (d) Mammographic grid ratio, (e) Molybdenum, (f) AEC in mammography, (g) Baseline mammogram, (h) Breast cancer incidence, (i) DMIST, (j) Characteristic x-radiation.",
    "answer": "Essential physics, equipment specifications, and clinical terminology in mammography.",
    "explanation": "(a) Minimum filtration for mammography: Typically 0.03 mm (30 µm) molybdenum or 0.025 mm (25 µm) rhodium, filtering out unneeded bremsstrahlung while transmitting K-characteristic photons. (b) Mammographic SID: Standardized fixed source-to-image receptor distance, typically 60 to 70 cm (24 to 26 inches). (c) Adipose tissue: Radiolucent fatty breast tissue, possessing an effective atomic number of ~6.3. (d) Mammographic grid ratio: Low grid ratio (typically 4:1 or 5:1) with high frequency (30 to 50 lines/cm) or cellular honeycomb grids. (e) Molybdenum (Z=42): Primary target and filter material producing K-characteristic x-rays at 17.4 and 19.5 keV. (f) AEC: Automatic exposure control utilizing a movable solid-state detector placed beneath the breast to ensure optimal exposure to the densest glandular tissue. (g) Baseline mammogram: The initial screening mammographic study against which all future comparative studies are evaluated. (h) Breast cancer incidence: Lifetime risk of approximately 1 in 8 women in the United States. (i) DMIST: Landmark NCI screening trial demonstrating superiority of digital mammography for dense breasts. (j) Characteristic x-radiation: Discrete monoenergetic x-rays produced when an outer-shell electron transitions into an inner K-shell vacancy."
  },
  {
    "id": "q23-2",
    "questionNumber": 2,
    "chapterNumber": 23,
    "question": "Describe the anatomy of the breast, including the types of tissue and structural sizes.",
    "answer": "Composed of glandular tissue (lobules and ducts), fibrous stroma (Cooper's ligaments), and adipose tissue, with microcalcifications measuring 100 to 500 µm.",
    "explanation": "The female breast consists of 15 to 20 glandular lobes embedded in a fibrous connective tissue framework (suspensory Cooper's ligaments) and surrounding adipose tissue. Dense fibroglandular parenchyma has an effective atomic number (Z ~ 7.4) very close to fat (Z ~ 6.3), requiring low-energy photons (20-30 kVp) to optimize photoelectric absorption. Microcalcifications of clinical interest typically range from 100 to 500 µm in size."
  },
  {
    "id": "q23-3",
    "questionNumber": 3,
    "chapterNumber": 23,
    "question": "Discuss changes in image quality and patient dose in mammography as kVp is increased.",
    "answer": "Increasing kVp reduces patient radiation dose and exposure time, but significantly degrades image contrast resolution.",
    "explanation": "Because photoelectric absorption is inversely proportional to the cube of photon energy (Z^3 / E^3), increasing kVp elevates average beam energy. While higher kVp reduces patient entrance skin dose and tube heating, Compton scattering increases relative to photoelectric interactions, washing out subtle soft-tissue contrast between glandular tissue and malignant tumors."
  },
  {
    "id": "q23-4",
    "questionNumber": 4,
    "chapterNumber": 23,
    "question": "Graphically compare the x-ray emission of a tungsten target x-ray tube with that of a molybdenum target x-ray tube operated at 28 kVp.",
    "answer": "Tungsten produces predominantly low-energy bremsstrahlung with zero characteristic x-rays at 28 kVp; molybdenum produces intense characteristic spikes at 17.4 and 19.5 keV.",
    "explanation": "Tungsten (Z=74) requires at least 69.5 keV to ionize K-shell electrons, so at 28 kVp it generates only a continuous bremsstrahlung spectrum with no characteristic peaks. Molybdenum (Z=42, K-edge 20 keV) produces intense discrete K-characteristic peaks at 17.4 keV (K-alpha) and 19.5 keV (K-beta), precisely matching the optimal energy window for imaging thin-to-average breasts."
  },
  {
    "id": "q23-5",
    "questionNumber": 5,
    "chapterNumber": 23,
    "question": "The electron binding energies for molybdenum are K-shell, 20 keV; L-shell, 2.6 keV; and M-shell, 0.5 keV. What are the possible characteristic x-ray energies when operated at 28 kVp?",
    "answer": "K-alpha = 17.4 keV (K - L transition) and K-beta = 19.5 keV (K - M transition).",
    "explanation": "Characteristic photon energy equals the difference in binding energies between the involved electron shells: K-alpha energy = E_K - E_L = 20.0 keV - 2.6 keV = 17.4 keV. K-beta energy = E_K - E_M = 20.0 keV - 0.5 keV = 19.5 keV."
  },
  {
    "id": "q23-6",
    "questionNumber": 6,
    "chapterNumber": 23,
    "question": "Discuss the influence of the heel effect on image quality in mammography.",
    "answer": "The tube is oriented with the cathode over the thick chest wall and the anode over the thin nipple to achieve uniform receptor exposure.",
    "explanation": "The heel effect causes higher radiation intensity on the cathode side of the tube. In mammography, the cathode is aligned toward the patient's chest wall (where breast tissue is thickest and requires greater penetration), while the anode is aligned toward the anterior nipple (where the breast is thinnest), producing balanced optical density from chest wall to nipple."
  },
  {
    "id": "q23-7",
    "questionNumber": 7,
    "chapterNumber": 23,
    "question": "Why is mammography usually performed with an x-ray tube target of molybdenum or rhodium?",
    "answer": "Their K-characteristic emissions (17.4-22.7 keV) provide optimal photoelectric contrast in breast tissue with minimal useless low-energy dose.",
    "explanation": "Molybdenum (K-peaks at 17.4 and 19.5 keV) is ideal for imaging fatty and average-density breasts. Rhodium (Z=45, K-peaks at 20.2 and 22.7 keV) provides slightly more penetrating characteristic photons ideal for dense, thick, or fibroglandular breasts."
  },
  {
    "id": "q23-8",
    "questionNumber": 8,
    "chapterNumber": 23,
    "question": "Draw the relationships among x-ray tube target, intensifying screen, film base, film emulsion, and the patient for single-emulsion screen-film mammography.",
    "answer": "Beam passes: Patient -> Cassette front -> Film base -> Film emulsion -> Intensifying screen (screen is positioned behind the emulsion).",
    "explanation": "Mammography uses single-emulsion film in direct contact with a single high-definition back intensifying screen. The x-ray beam traverses the patient, cassette face, and transparent film base before reaching the emulsion and striking the screen from behind, eliminating light crossover and maximizing spatial resolution."
  },
  {
    "id": "q23-9",
    "questionNumber": 9,
    "chapterNumber": 23,
    "question": "How is soft tissue radiography different from conventional radiography?",
    "answer": "Soft tissue radiography uses low kVp (24-32 kVp) and specialized target/filter materials to maximize photoelectric differential absorption between similar soft tissues.",
    "explanation": "Conventional radiography images anatomical structures with wide differences in atomic number and physical density (bone vs air vs muscle) using 60-120 kVp. Soft tissue radiography must differentiate tissues with virtually identical effective atomic numbers and densities (fat Z=6.3 vs glandular Z=7.4), demanding low photon energies where photoelectric interactions dominate."
  },
  {
    "id": "q23-10",
    "questionNumber": 10,
    "chapterNumber": 23,
    "question": "To what do the abbreviations ACR and MQSA refer?",
    "answer": "ACR: American College of Radiology; MQSA: Mammography Quality Standards Act (passed by US Congress in 1992).",
    "explanation": "The ACR is the primary professional medical association that establishes clinical guidelines and accreditation standards. The MQSA is federal legislation mandated by the US Congress and enforced by the FDA, establishing strict nationwide standards for mammography personnel, equipment calibration, and annual inspections."
  },
  {
    "id": "q23-11",
    "questionNumber": 11,
    "chapterNumber": 23,
    "question": "What is the difference between diagnostic and screening mammography?",
    "answer": "Screening is performed on asymptomatic women for early detection; diagnostic evaluates symptomatic women or abnormal screening recalls.",
    "explanation": "Screening mammography is a routine preventative study performed on asymptomatic women, consisting of two standard views per breast (craniocaudal [CC] and mediolateral oblique [MLO]). Diagnostic mammography is performed on patients presenting with clinical symptoms (palpable lump, nipple discharge) or abnormal screening findings, utilizing specialized views (spot compression, magnification, rolled views)."
  },
  {
    "id": "q23-12",
    "questionNumber": 12,
    "chapterNumber": 23,
    "question": "Describe digital mammographic tomosynthesis (DMT) and why is it becoming more attractive for breast imaging.",
    "answer": "It acquires multiple low-dose angular projections to reconstruct thin 1-mm tomographic slices, eliminating tissue overlap and cutting recall rates.",
    "explanation": "DMT swings the x-ray tube across a small angular arc (15° to 50°) while acquiring 11 to 25 low-dose exposures. A reconstruction computer creates thin 1-mm planar slices, allowing radiologists to view structures free from overlying fibroglandular tissue, significantly increasing invasive cancer detection by up to 40% while reducing false-positive recall callbacks."
  },
  {
    "id": "q23-13",
    "questionNumber": 13,
    "chapterNumber": 23,
    "question": "Explain why mammography requires a low-kVp technique.",
    "answer": "To maximize the photoelectric effect (proportional to 1/E^3), amplifying subtle contrast differences between fat and glandular parenchyma.",
    "explanation": "In breast tissue, differential absorption depends heavily on the photoelectric effect. Because photoelectric interaction probability is inversely proportional to the cube of photon energy (1/E^3), keeping kVp low (24 to 32 kVp) ensures that photon energies remain below 30 keV, generating the high subject contrast necessary to delineate subtle tumors."
  },
  {
    "id": "q23-14",
    "questionNumber": 14,
    "chapterNumber": 23,
    "question": "List the advantages of mammographic compression.",
    "answer": "Evens breast thickness, lowers patient dose, reduces scatter, decreases motion blur, minimizes geometric magnification blur, and spreads overlapping tissues.",
    "explanation": "Vigorous breast compression provides vital physical benefits: (1) Flattens the breast to uniform thickness across the detector; (2) Lowers radiation dose by reducing tissue thickness; (3) Reduces scatter-to-primary ratio, boosting contrast; (4) Minimizes motion unsharpness by immobilizing the breast; (5) Brings structures closer to the receptor, minimizing geometric blur (OID); (6) Separates overlapping tissue structures."
  },
  {
    "id": "q23-15",
    "questionNumber": 15,
    "chapterNumber": 23,
    "question": "Name the three materials used for mammographic x-ray tube targets.",
    "answer": "Molybdenum (Mo), Rhodium (Rh), and Tungsten (W).",
    "explanation": "Molybdenum (Z=42) is the standard for thin-to-average breasts; Rhodium (Z=45) is used for dense or thick breasts; and Tungsten (Z=74) with K-edge filters (Rh, Ag) is widely used in full-field digital mammography and tomosynthesis systems."
  },
  {
    "id": "q23-16",
    "questionNumber": 16,
    "chapterNumber": 23,
    "question": "What focal-spot sizes are used for mammography? Why?",
    "answer": "0.3 mm for standard routine contact imaging; 0.1 mm microfocus for geometric magnification imaging.",
    "explanation": "Due to the short SID (60 to 70 cm), focal-spot blur would severely degrade image sharpness if standard radiographic focal spots were used. A 0.3 mm spot maintains sharp detail during contact views, while a 0.1 mm microfocus spot is required during 1.5× to 2.0× magnification views to resolve 100-µm microcalcifications."
  },
  {
    "id": "q23-17",
    "questionNumber": 17,
    "chapterNumber": 23,
    "question": "What is the best target-filter combination for imaging dense breast tissue?",
    "answer": "Rhodium target with Rhodium filter (Rh/Rh), or Tungsten target with Silver or Rhodium filter (W/Rh, W/Ag).",
    "explanation": "A Rhodium target (K-characteristic spikes at 20.2 and 22.7 keV) filtered with 0.025 mm Rhodium provides a slightly harder, more penetrating beam than Mo/Mo, penetrating dense glandular parenchyma without excessive exposure times or high patient radiation dose."
  },
  {
    "id": "q23-18",
    "questionNumber": 18,
    "chapterNumber": 23,
    "question": "What grid ratio and grid frequency are used for mammography?",
    "answer": "Grid ratio of 4:1 or 5:1 with high grid frequency of 30 to 50 lines/cm, or high-transmission cellular (HTC) grids.",
    "explanation": "Because mammographic x-ray beams are low energy, high grid ratios would absorb excessive primary beam and dramatically increase patient radiation dose. A low ratio (4:1 or 5:1) balances scatter cleanup with dose efficiency, while high frequency or crossed cellular copper grids eliminate visible grid lines."
  },
  {
    "id": "q23-19",
    "questionNumber": 19,
    "chapterNumber": 23,
    "question": "What feature of a dedicated mammography imaging system is important for imaging microcalcifications?",
    "answer": "A 0.1-mm microfocus focal spot, high-resolution direct-conversion detector (pixel pitch 50-85 µm), and high detective quantum efficiency (DQE).",
    "explanation": "Microcalcifications are early hallmarks of ductal carcinoma in situ (DCIS) and can measure down to 100 µm. Resolving these requires a small 0.1 mm focal spot to minimize penumbra, magnification positioning, high DQE to suppress quantum noise, and detector pixel pitch <= 85 µm."
  },
  {
    "id": "q23-20",
    "questionNumber": 20,
    "chapterNumber": 23,
    "question": "What is the purpose of tilting the mammography x-ray tube within the tube housing?",
    "answer": "To make the central ray perpendicular to the chest wall edge of the detector, ensuring complete coverage of posterior chest wall breast tissue.",
    "explanation": "By tilting the x-ray tube 6° to 8° within its housing, the central ray (or the edge of the divergent beam) is aligned exactly vertical along the patient's chest wall. This eliminates geometric dead space at the edge of the detector, ensuring that deep posterior glandular tissue is fully imaged."
  }
]

CHAPTER_24_QUESTIONS = [
  {
    "id": "q24-1",
    "questionNumber": 1,
    "chapterNumber": 24,
    "question": "Define or otherwise identify the following: (a) Quality assurance (QA), (b) Quality control (QC), (c) Mammography test object, (d) Density difference, (e) Repeat rate, (f) Digital display device, (g) Nit, (h) Densitometer, (i) Average glandular dose (AGD), (j) MQSA.",
    "answer": "Foundational quality assurance, dosimetry, and regulatory standards governing mammography.",
    "explanation": "(a) QA: All-encompassing management philosophy ensuring clinical diagnostic quality, patient satisfaction, and exam efficiency. (b) QC: Technical testing and instrumentation procedures ensuring imaging equipment meets strict performance specifications. (c) Mammography test object: Standardized acrylic phantom (ACR phantom simulating 4.2 cm compressed breast) containing test specks, fibers, and masses. (d) Density difference: The optical density difference between the step-wedge contrast index steps on a sensitometric strip. (e) Repeat rate: Percentage of images repeated due to technical or patient errors (must remain <5%). (f) Digital display device: High-resolution medical-grade LCD monitor calibrated to DICOM GSDF for primary mammogram reading (>=5 megapixels). (g) Nit: Unit of luminance equal to 1 candela/m^2. (h) Densitometer: Instrument measuring optical density of exposed film. (i) AGD: Absorbed radiation dose to glandular breast tissue; mandated by MQSA to not exceed 3.0 mGy per view with grid. (j) MQSA: Federal law regulating all US mammography facilities."
  },
  {
    "id": "q24-2",
    "questionNumber": 2,
    "chapterNumber": 24,
    "question": "List two aspects of the radiologist's duties involving mammographic QC.",
    "answer": "Conducting medical outcomes audits (tracking biopsy results) and performing clinical image quality reviews.",
    "explanation": "Under MQSA regulations, the lead interpreting radiologist must: (1) Maintain a documented medical outcomes audit system tracking all positive mammograms to histological biopsy findings and pathological outcomes; and (2) Regularly review clinical image quality with technologists, providing feedback on positioning and technique."
  },
  {
    "id": "q24-3",
    "questionNumber": 3,
    "chapterNumber": 24,
    "question": "What is the most time-consuming task for QC mammographers?",
    "answer": "Daily sensitometric film-processor monitoring (in analog facilities) and weekly phantom image evaluation/scoring.",
    "explanation": "In film environments, daily developer sensitometry, densitometric tracking, and temperature stabilization consume significant technologist time. In digital mammography, weekly phantom image acquisition, visual object scoring, and contrast-to-noise ratio (CNR) calculations represent the most detailed routine duties."
  },
  {
    "id": "q24-4",
    "questionNumber": 4,
    "chapterNumber": 24,
    "question": "Which member of the QC team tracks positive diagnoses?",
    "answer": "The lead interpreting radiologist (medical director).",
    "explanation": "MQSA explicitly assigns the responsibility of medical outcomes audit tracking—correlating positive mammographic findings with surgical biopsies, pathology reports, and cancer registry data—to the designated lead interpreting radiologist."
  },
  {
    "id": "q24-5",
    "questionNumber": 5,
    "chapterNumber": 24,
    "question": "Which member of the QC team should notice a temperature error in the developer solution?",
    "answer": "The designated QC mammographer (radiologic technologist).",
    "explanation": "The QC technologist measures developer temperature daily using a calibrated thermometer before running patient films, identifying temperature fluctuations before they cause sensitometric shifts."
  },
  {
    "id": "q24-6",
    "questionNumber": 6,
    "chapterNumber": 24,
    "question": "What do the fibrils of the ACR accreditation test object simulate?",
    "answer": "Linear fibrous tissue structures, ductal extensions, and spicules of microcalcifications or architectural distortions.",
    "explanation": "The nylon fibrils embedded in the ACR phantom simulate subtle spiculations radiating from infiltrating ductal carcinoma and fine fibrous ductal parenchymal changes."
  },
  {
    "id": "q24-7",
    "questionNumber": 7,
    "chapterNumber": 24,
    "question": "Describe how to clean radiographic intensifying screens. How often is this task performed?",
    "answer": "Cleaned weekly using approved antistatic screen cleaner and lint-free wipes, then stood open vertically to air-dry.",
    "explanation": "Screens are wiped gently with antistatic commercial cleaner using lint-free gauze pads to remove dust, lint, and skin flakes. The cassettes must be left standing open on edge in a dust-free darkroom to dry completely before reloading with film."
  },
  {
    "id": "q24-8",
    "questionNumber": 8,
    "chapterNumber": 24,
    "question": "Explain how mammographic viewboxes are different from conventional viewboxes.",
    "answer": "Mammographic viewboxes have at least double the luminance (minimum 3,000 cd/m^2 vs 1,500 cd/m^2) and include masking shutters.",
    "explanation": "Because mammographic film has optical densities reaching 3.0 to 3.5 OD in glandular regions, illuminators must emit at least 3,000 cd/m^2 to penetrate dark areas. They also feature adjustable masking shutters to block extraneous light around the edges of the film, preventing glare."
  },
  {
    "id": "q24-9",
    "questionNumber": 9,
    "chapterNumber": 24,
    "question": "Why are the QC tasks for digital mammography vendor specific?",
    "answer": "Different manufacturers use fundamentally different detector technologies (a-Se direct, CsI indirect, CR) with proprietary calibration software.",
    "explanation": "Unlike screen-film which was standardized around chemical processors, full-field digital mammography systems utilize diverse physical technologies (direct a-Se flat panels, indirect CsI/a-Si arrays, CCDs, or photostimulable phosphor plates). Each manufacturer has proprietary calibration routines, phantom scoring algorithms, and flatfielding tools."
  },
  {
    "id": "q24-10",
    "questionNumber": 10,
    "chapterNumber": 24,
    "question": "What three objects are found in the ACR mammography test object?",
    "answer": "Fibers (nylon fibrils), speck groups (simulated microcalcifications), and masses (tumor-like low-contrast disks).",
    "explanation": "The ACR mammography accreditation phantom contains 16 test targets embedded in a wax block: 6 nylon fibers (1.56 to 0.40 mm), 5 microcalcification speck groups (0.54 to 0.16 mm), and 5 low-contrast tumor-like mass disks (2.00 to 0.25 mm thickness)."
  },
  {
    "id": "q24-11",
    "questionNumber": 11,
    "chapterNumber": 24,
    "question": "Describe the process of scoring test objects in the ACR phantom.",
    "answer": "Under standardized viewing conditions, targets are scored from largest to smallest; minimum passing score is 4 fibers, 3 speck groups, and 3 masses.",
    "explanation": "The image is viewed on a calibrated display or viewbox using a magnifying lens. Each object group is scored starting with the largest: a full point (1.0) is given if the entire object is clearly visible, 0.5 points for partial visualization, and 0 for invisible. To pass MQSA accreditation, the image must clearly visualize at least 4.0 fibers, 3.0 speck groups, and 3.0 masses."
  },
  {
    "id": "q24-12",
    "questionNumber": 12,
    "chapterNumber": 24,
    "question": "How do you check for light leaks in the darkroom?",
    "answer": "Remain in total darkroom darkness for 5 minutes for dark adaptation, then visually inspect doors, pass-boxes, and ceiling tiles for light entry.",
    "explanation": "The technologist enters the darkroom, turns off all white lights and safelights, and remains inside for at least 5 minutes to allow rhodopsin regeneration and full scotopic eye adaptation. Any cracks of light penetrating door seals, processors, or ductwork become readily visible and must be sealed with opaque weather stripping."
  },
  {
    "id": "q24-13",
    "questionNumber": 13,
    "chapterNumber": 24,
    "question": "What is the acceptable fog value for 2 minutes of safelight exposure of film?",
    "answer": "An optical density increase of not more than 0.05 OD.",
    "explanation": "Under the MQSA safelight test protocol, a pre-exposed film strip is exposed to darkroom safelight conditions for 2 minutes. The additional optical density added by the safelight must not exceed 0.05 OD above baseline."
  },
  {
    "id": "q24-14",
    "questionNumber": 14,
    "chapterNumber": 24,
    "question": "Describe the device used to check screen-film contact in mammography.",
    "answer": "A fine copper wire mesh screen test tool (40 wires per inch / 16 wires per cm).",
    "explanation": "A specialized 40-mesh copper wire screen is placed atop the mammography cassette and exposed at 25-28 kVp. The processed radiograph is inspected from a distance of 1 meter for dark, blurry patches indicative of trapped air or poor screen-film contact."
  },
  {
    "id": "q24-15",
    "questionNumber": 15,
    "chapterNumber": 24,
    "question": "What is the maximum pressure allowed for the mammography compression device?",
    "answer": "Between 25 and 45 pounds of force (111 to 200 Newtons) in power drive mode.",
    "explanation": "MQSA mandates that initial powered mechanical compression must reach between 25 and 45 lbs (111 to 200 N). Compression must be maintained without slipping and must feature an instant manual release mechanism."
  },
  {
    "id": "q24-16",
    "questionNumber": 16,
    "chapterNumber": 24,
    "question": "Which should require more attention by the QC mammographer, screen-film or digital imaging?",
    "answer": "Screen-film requires more daily hands-on chemical attention; digital requires careful display calibration and detector flatfield monitoring.",
    "explanation": "Screen-film demands constant daily vigilance over temperature, chemical replenishment, wash rates, and darkroom contamination. While digital imaging eliminates wet chemicals, it requires disciplined weekly phantom SNR/CNR measurements, monitor calibration (DICOM GSDF), and detector ghosting checks."
  },
  {
    "id": "q24-17",
    "questionNumber": 17,
    "chapterNumber": 24,
    "question": "What is the speed index, and how is it determined?",
    "answer": "The optical density of the sensitometric step closest to OD 1.20 above base plus fog.",
    "explanation": "On a daily sensitometric control strip, the speed index (mid-density step) is the step with an optical density closest to 1.20 above base-plus-fog. It monitors daily changes in developer activity and must remain within ±0.15 OD of the established operating baseline."
  },
  {
    "id": "q24-18",
    "questionNumber": 18,
    "chapterNumber": 24,
    "question": "What is the minimum required luminance of a mammography viewbox?",
    "answer": "At least 3,000 cd/m^2 (nits).",
    "explanation": "Under MQSA regulations, viewbox illuminators used for mammography interpretation must provide a minimum luminance of 3,000 cd/m^2 (candelas per square meter), ensuring adequate light transmission through high-density films."
  },
  {
    "id": "q24-19",
    "questionNumber": 19,
    "chapterNumber": 24,
    "question": "When test object images are produced, what technique should be used?",
    "answer": "The clinical AEC exposure technique routinely used for a standard 4.2-cm compressed breast (typically ~28 kVp).",
    "explanation": "When exposing the ACR accreditation phantom, the technologist must select the exact clinical technique (kVp, target/filter, grid, and AEC setting) used for an average 4.2-cm breast composed of 50% adipose and 50% glandular tissue to ensure real-world clinical validity."
  },
  {
    "id": "q24-20",
    "questionNumber": 20,
    "chapterNumber": 24,
    "question": "Show how to compute the repeat rate in mammography.",
    "answer": "Repeat Rate (%) = (Total Number of Repeated Images / Total Number of Images Acquired) × 100%.",
    "explanation": "Repeat rate is calculated quarterly: Divide the number of repeated patient exposures by the total number of clinical exposures taken during that audit period, multiplied by 100. MQSA mandates that the repeat rate should not exceed 5% (with an optimal target of 2% to 3%)."
  }
]

CHAPTER_25_QUESTIONS = [
  {
    "id": "q25-1",
    "questionNumber": 1,
    "chapterNumber": 25,
    "question": "Define or otherwise identify the following: (a) Photopic vision, (b) Automatic brightness control (ABC), (c) Visual acuity, (d) Flux gain, (e) Angiography, (f) Vidicon, (g) Photoemission, (h) Bucky slot cover, (i) Spot-film camera sizes, (j) Modulation.",
    "answer": "Key physical components, vision mechanics, and terminology of image-intensified fluoroscopy.",
    "explanation": "(a) Photopic vision: Bright-light vision mediated by retinal cones (>10 cd/m^2) providing sharp visual acuity and color perception. (b) Automatic brightness control (ABC): Feedback system that dynamically adjusts tube kVp and mA to maintain constant image brightness regardless of patient thickness. (c) Visual acuity: The ability of the visual system to discern fine detail and separate small objects. (d) Flux gain: The ratio of the number of light photons emitted at the output phosphor to the number of x-ray photons absorbed at the input phosphor. (e) Angiography: Radiographic visualization of blood vessels following intravascular injection of contrast media. (f) Vidicon: Vacuum television camera tube converting light from the output phosphor into an electrical video signal. (g) Photoemission: Electron emission from a photocathode surface stimulated by incident light photons. (h) Bucky slot cover: Protective 0.25 mm lead equivalent shielding device that automatically covers the 5-cm bucky opening when the bucky tray is moved to the end of the table. (i) Spot-film camera sizes: Photographic film sizes historically used for recording static fluoroscopic images (70 mm, 100 mm, 105 mm). (j) Modulation: The variation of the amplitude, frequency, or phase of an electronic carrier wave to convey video information."
  },
  {
    "id": "q25-2",
    "questionNumber": 2,
    "chapterNumber": 25,
    "question": "Draw a diagram to show the relationship between the x-ray tube, the patient couch, and the image intensifier in fluoroscopy.",
    "answer": "Under-table x-ray tube beneath the patient couch; x-ray beam passes upward through the couch and patient into the over-table image intensifier tower.",
    "explanation": "In standard diagnostic fluoroscopy, the x-ray tube is mounted beneath the patient support couch. The primary beam projects upward through the radiolucent couch and patient anatomy into the image-intensifier carriage suspended above the patient, directing scatter predominantly downward toward the operator's feet."
  },
  {
    "id": "q25-3",
    "questionNumber": 3,
    "chapterNumber": 25,
    "question": "What is the difference between rod and cone vision? With which is visual acuity greater?",
    "answer": "Cones operate in daylight (photopic) and provide color and high acuity; rods operate in dim light (scotopic) with low acuity. Visual acuity is far greater with cones.",
    "explanation": "Cones are concentrated in the fovea centralis, perceive color, and possess 10× greater visual acuity and contrast perception than rods. Rods are distributed across the peripheral retina, perceive only shades of gray in dim light, and exhibit poor visual acuity."
  },
  {
    "id": "q25-4",
    "questionNumber": 4,
    "chapterNumber": 25,
    "question": "What is the approximate kVp for the following fluoroscopic examinations: barium enema, gallbladder, and upper gastrointestinal?",
    "answer": "Barium enema: 110 to 120 kVp (single contrast) or 80-90 kVp (air contrast); Gallbladder: 70 to 80 kVp; Upper GI: 100 to 110 kVp.",
    "explanation": "High kVp (100 to 120 kVp) is necessary to penetrate dense solid barium columns in upper GI and single-contrast barium enemas. Double-contrast air-barium studies use 80-90 kVp. Gallbladder exams with iodinated contrast require 70-80 kVp to match the K-edge of iodine (33.2 keV)."
  },
  {
    "id": "q25-5",
    "questionNumber": 5,
    "chapterNumber": 25,
    "question": "Draw a cross section of the human eye and label the cornea, lens, and retina.",
    "answer": "Cornea (anterior clear protective cover), crystalline lens (focusing optic), and retina (posterior photosensitive layer containing rods and cones).",
    "explanation": "Light enters through the transparent anterior cornea, passes through the pupil whose aperture is controlled by the iris, is focused by the flexible crystalline lens, and is projected onto the posterior sensory retina containing photoreceptor cells (rods and cones)."
  },
  {
    "id": "q25-6",
    "questionNumber": 6,
    "chapterNumber": 25,
    "question": "Explain the difference between photoemission and thermionic emission.",
    "answer": "Photoemission is electron ejection caused by incident light photons; thermionic emission is electron ejection caused by thermal heating.",
    "explanation": "In thermionic emission (occurring at the x-ray tube filament), electrical current heats a tungsten wire until outer-shell electrons gain sufficient kinetic energy to boil off. In photoemission (occurring at the photocathode of an image intensifier), incident light photons transfer energy directly to surface electrons, ejecting them into the vacuum tube."
  },
  {
    "id": "q25-7",
    "questionNumber": 7,
    "chapterNumber": 25,
    "question": "Diagram the image-intensifier tube, label its principal parts, and discuss the function of each.",
    "answer": "Input phosphor (CsI), photocathode (Cs-Sb), electrostatic focusing lenses, anode (+25 kV), and output phosphor (ZnCdS:Ag).",
    "explanation": "(1) Input phosphor: Cesium iodide crystals convert incident x-ray photons into visible light; (2) Photocathode: Thin cesium-antimony layer emitting photoelectrons proportional to light intensity; (3) Electrostatic lenses: Positively charged metal rings focusing electron paths across the tube; (4) Anode: Accelerated positive electrode (+25,000 V) pulling electrons forward; (5) Output phosphor: Zinc cadmium sulfide crystals emitting bright green light upon electron impact."
  },
  {
    "id": "q25-8",
    "questionNumber": 8,
    "chapterNumber": 25,
    "question": "A 23-cm image intensifier has an output phosphor size of 2.5 cm and a flux gain of 75. What is its brightness gain?",
    "answer": "6,348.",
    "explanation": "Brightness Gain = Minification Gain × Flux Gain. Minification Gain = (Input Diameter / Output Diameter)^2 = (23 / 2.5)^2 = (9.2)^2 = 84.64. Brightness Gain = 84.64 × 75 = 6,348."
  },
  {
    "id": "q25-9",
    "questionNumber": 9,
    "chapterNumber": 25,
    "question": "What is vignetting in fluoroscopy?",
    "answer": "A reduction in image brightness and spatial resolution toward the periphery of the fluoroscopic field.",
    "explanation": "Because the input phosphor is curved and the electrostatic lenses focus electrons more accurately toward the central axis, electrons striking the periphery suffer geometric distortion and dispersion, causing peripheral brightness and sharpness to fall off by 10% to 20% compared to the center."
  },
  {
    "id": "q25-10",
    "questionNumber": 10,
    "chapterNumber": 25,
    "question": "Why is the television monitor considered the weakest link in image-intensified fluoroscopy?",
    "answer": "A conventional 525-line television monitor restricts spatial resolution to 1 to 2 lp/mm, whereas the image intensifier produces 5 lp/mm.",
    "explanation": "An image intensifier is capable of resolving 4 to 5 lp/mm at its output phosphor. However, when the optical image is coupled into a standard 525-line CRT video camera and displayed on a 525-line television screen, resolution drops sharply to approximately 1 to 2 lp/mm due to video raster bandwidth limits."
  },
  {
    "id": "q25-11",
    "questionNumber": 11,
    "chapterNumber": 25,
    "question": "What is the primary function of the fluoroscope?",
    "answer": "To provide dynamic, real-time visualization of internal anatomical structures and physiological motion.",
    "explanation": "Unlike static radiography which captures an instantaneous anatomical shadow at a single moment, fluoroscopy allows continuous dynamic examination of moving physiological processes such as peristalsis, cardiac contraction, swallowing mechanics, and catheter navigation."
  },
  {
    "id": "q25-12",
    "questionNumber": 12,
    "chapterNumber": 25,
    "question": "Who invented the fluoroscope in 1896? What phosphor was used on that original fluoroscopic screen?",
    "answer": "Thomas A. Edison in 1896; he used calcium tungstate (CaWO4).",
    "explanation": "Thomas Edison investigated thousands of chemical compounds following Roentgen's discovery and invented the first commercial hand-held fluoroscope in 1896 using calcium tungstate crystals, which produced a much brighter visual glow than Roentgen's barium platinocyanide."
  },
  {
    "id": "q25-13",
    "questionNumber": 13,
    "chapterNumber": 25,
    "question": "What determines the image frame rate in video fluoroscopy?",
    "answer": "The vertical television scanning frequency: 30 frames per second (consisting of 60 interlaced fields per second in North America).",
    "explanation": "In standard NTSC video broadcast systems, 60 television fields are scanned per second (synchronized with 60-Hz AC power). Two consecutive interlaced fields (odd and even) form one complete video frame, yielding a frame rate of 30 frames per second."
  },
  {
    "id": "q25-14",
    "questionNumber": 14,
    "chapterNumber": 25,
    "question": "What limits the vertical resolution and horizontal resolution of a video monitor?",
    "answer": "Vertical resolution is limited by the number of scan lines; horizontal resolution is limited by the video system bandwidth (frequency response).",
    "explanation": "Vertical resolution is determined by the total number of horizontal raster lines (e.g., 525 lines) multiplied by the Kell factor (~0.7). Horizontal resolution is determined by the maximum electronic bandpass frequency (MHz) of the video amplifier and cable circuitry."
  },
  {
    "id": "q25-15",
    "questionNumber": 15,
    "chapterNumber": 25,
    "question": "Does spatial resolution change when one is viewing in the magnification mode versus the normal mode?",
    "answer": "Yes; spatial resolution improves significantly in magnification mode (e.g., from ~4 lp/mm in normal mode to ~6 lp/mm in mag mode).",
    "explanation": "In magnification mode, electrostatic lens voltage is increased, shifting the electron focal point closer to the input phosphor. Only electrons from the central portion of the input phosphor reach the output phosphor. Because minification is reduced, spatial resolution improves from ~4 lp/mm to ~6 lp/mm, at the cost of higher patient radiation dose."
  },
  {
    "id": "q25-16",
    "questionNumber": 16,
    "chapterNumber": 25,
    "question": "What is meant by a trifield image intensifier?",
    "answer": "An image-intensifier tube that can operate in three different selectable field-of-view diameters (e.g., 25 cm, 17 cm, and 12 cm).",
    "explanation": "A trifield tube allows the operator to switch electronically between three field sizes by altering electrostatic focusing voltages: 25 cm (normal large FOV, low dose), 17 cm (magnification 1), and 12 cm (magnification 2, highest spatial resolution, highest patient dose)."
  },
  {
    "id": "q25-17",
    "questionNumber": 17,
    "chapterNumber": 25,
    "question": "Draw the approximate raster pattern for a conventional video monitor.",
    "answer": "An active horizontal sweep from left to right, followed by a rapid blanked retrace diagonally back to the left, repeating in odd and even interlaced fields.",
    "explanation": "The electron beam scans from top-left to bottom-right across the monitor screen: active sweep displays video signal, blanked horizontal retrace returns the beam to the left edge, and vertical retrace returns the beam to the top to begin the interlaced even field."
  },
  {
    "id": "q25-18",
    "questionNumber": 18,
    "chapterNumber": 25,
    "question": "When the image intensifier is switched from 15-cm mode to 25-cm mode, what happens to patient radiation dose and contrast resolution?",
    "answer": "Patient radiation dose decreases significantly; contrast resolution slightly decreases.",
    "explanation": "Switching to a larger field of view (25-cm mode) increases minification gain, producing a brighter output image. To keep output constant, the ABC reduces tube mA and kVp, cutting patient radiation dose substantially (dose ratio = (15/25)^2 = 0.36, a 64% dose reduction). Contrast resolution and spatial resolution decrease slightly due to less minification."
  },
  {
    "id": "q25-19",
    "questionNumber": 19,
    "chapterNumber": 25,
    "question": "Trace the path of information-carrying elements in a fluoroscopic system from incident x-rays to video image.",
    "answer": "X-ray photons -> Light photons (input phosphor) -> Electrons (photocathode) -> Light photons (output phosphor) -> Video signal (CCD) -> Display monitor.",
    "explanation": "(1) X-rays exit patient and strike CsI input phosphor -> converted into visible light; (2) Light strikes SbCs3 photocathode -> converted into photoelectrons; (3) Electrons accelerated across 25 kV onto ZnCdS output phosphor -> converted into high-intensity green light; (4) Light coupled to CCD sensor -> converted into electrical video charges; (5) Signal amplified, processed, and displayed on LCD monitor."
  },
  {
    "id": "q25-20",
    "questionNumber": 20,
    "chapterNumber": 25,
    "question": "What is the principal difference between a standard video system for fluoroscopy and a high-resolution system?",
    "answer": "Standard systems use 525 scan lines at 4.5 MHz; high-resolution systems use 1000+ scan lines at 20+ MHz bandwidth.",
    "explanation": "Standard 525-line systems (NTSC standard) have a video bandpass of ~4.5 MHz, capping spatial resolution around 1-2 lp/mm. High-resolution fluoroscopy systems utilize 1,024 or 2,048 raster scan lines and high-frequency amplifiers (20-30 MHz), doubling both horizontal and vertical spatial resolution."
  }
]

CHAPTER_26_QUESTIONS = [
  {
    "id": "q26-1",
    "questionNumber": 1,
    "chapterNumber": 26,
    "question": "Define or otherwise identify the following: (a) Digital subtraction angiography (DSA), (b) Registration, (c) Interrogation time, (d) Extinction time, (e) Flat panel image receptor (FPIR), (f) Progressive video scan, (g) Duty cycle, (h) Automatic brightness stabilization (ABS), (i) Flat panel image display.",
    "answer": "Essential technology and timing parameters in Digital Fluoroscopy (DF) and DSA.",
    "explanation": "(a) DSA: High-speed real-time subtraction of pre-contrast mask images from contrast-enhanced images to visualize vascular anatomy. (b) Registration: Precise spatial alignment of mask and contrast images. (c) Interrogation time: The time required for the x-ray tube to be switched on and reach the selected kVp and mA levels. (d) Extinction time: The time required for the x-ray tube to be switched off completely. (e) FPIR: Solid-state flat-panel image receptor (CsI-TFT or a-Se) replacing bulky image intensifiers. (f) Progressive video scan: Video scanning mode that sweeps lines continuously from top to bottom without interlacing. (g) Duty cycle: The fraction of time that the x-ray tube is actively generating radiation during pulsed fluoroscopy. (h) ABS: Automatic brightness stabilization adjusting exposure factors electronically. (i) Flat panel display: High-luminance medical LCD monitor displaying digital fluoroscopy."
  },
  {
    "id": "q26-2",
    "questionNumber": 2,
    "chapterNumber": 26,
    "question": "What are the principal advantages of DF over conventional fluoroscopy?",
    "answer": "Speed of image acquisition, postprocessing image subtraction (DSA), wider dynamic range, pulsed dose reduction, and elimination of cassette handling.",
    "explanation": "DF enables immediate real-time vascular subtraction (DSA), postprocessing contrast enhancement, edge sharpening, and digital roadmapping. Furthermore, high-frequency pulsed fluoroscopy reduces patient radiation exposure by up to 50-80% compared to continuous conventional fluoroscopy."
  },
  {
    "id": "q26-3",
    "questionNumber": 3,
    "chapterNumber": 26,
    "question": "Describe the sequence of image acquisition in mask-mode fluoroscopy.",
    "answer": "Baseline mask acquired before contrast arrival, contrast injected, subsequent frames acquired, mask subtracted in real time from each frame.",
    "explanation": "In mask-mode DSA: (1) An unopacified pre-contrast image ('mask') is acquired and stored in digital memory; (2) Radiopaque iodinated contrast is injected into the vascular system; (3) Serial radiographic exposures are made as contrast flows through the vessels; (4) The digital processor subtracts the mask from each incoming image pixel-by-pixel, erasing bone and soft tissue and leaving only the contrast-filled vessels."
  },
  {
    "id": "q26-4",
    "questionNumber": 4,
    "chapterNumber": 26,
    "question": "Describe the differences between a video system operating in the interlace mode and one operating in the progressive mode.",
    "answer": "Interlaced mode scans alternate odd and even lines in two separate 1/60-s fields; progressive mode scans all lines sequentially from 1 to 525+ in a single 1/30-s sweep.",
    "explanation": "Interlaced video scans odd lines first (field 1, 1/60 s), then even lines (field 2, 1/60 s). In DF, this produces motion blur and interlacing artifacts. Progressive scanning reads every line in continuous sequential order, producing a blur-free, sharper image matching the digital readout of CCDs and flat panels."
  },
  {
    "id": "q26-5",
    "questionNumber": 5,
    "chapterNumber": 26,
    "question": "Why are all electronic devices inherently noisy?",
    "answer": "Random thermal agitation of electrons inside electronic circuits produces constant background electronic noise.",
    "explanation": "Thermal kinetic energy causes valence and conduction electrons in resistors, amplifiers, and semiconductors to vibrate randomly (Johnson-Nyquist thermal noise). This random electronic motion generates a continuous baseline noise voltage that competes with faint diagnostic signals."
  },
  {
    "id": "q26-6",
    "questionNumber": 6,
    "chapterNumber": 26,
    "question": "Describe the process of energy subtraction in digital fluoroscopy.",
    "answer": "Alternating exposures at two different kVp levels (e.g., 70 kVp and 90 kVp) to exploit the abrupt K-edge absorption increase of iodine at 33.2 keV.",
    "explanation": "Unlike temporal subtraction which relies on time intervals between exposures, energy subtraction pulses the x-ray beam rapidly between two different energy spectra (one below and one above the 33.2 keV K-edge of iodine). Subtraction isolates the iodine signal while canceling bone and soft tissue without motion misregistration artifacts."
  },
  {
    "id": "q26-7",
    "questionNumber": 7,
    "chapterNumber": 26,
    "question": "What determines the spatial resolution of a DF system?",
    "answer": "The image matrix size, field of view (FOV) diameter, and detector element (del) pixel pitch.",
    "explanation": "Spatial resolution is determined by pixel size: Pixel size = FOV / Matrix size. A 1024 × 1024 matrix provides four times the spatial resolution of a 512 × 512 matrix over the same field of view."
  },
  {
    "id": "q26-8",
    "questionNumber": 8,
    "chapterNumber": 26,
    "question": "A DF system is operated in a 512 × 512 image mode with a 23-cm image intensifier. What is the size of each pixel?",
    "answer": "0.45 mm (450 µm).",
    "explanation": "Convert FOV to millimeters: 23 cm = 230 mm. Pixel size = FOV / Matrix size = 230 mm / 512 = 0.449 mm, or ~0.45 mm (450 µm)."
  },
  {
    "id": "q26-9",
    "questionNumber": 9,
    "chapterNumber": 26,
    "question": "The dynamic range of some DF systems is described as 12 bits deep. What does this mean?",
    "answer": "The system can resolve and display 4,096 distinct numerical shades of gray.",
    "explanation": "Bit depth determines dynamic range: 2^12 = 4,096 discrete gray levels. This wide range ensures that subtle vascular contrast variations are not lost to saturation or threshold cutoff."
  },
  {
    "id": "q26-10",
    "questionNumber": 10,
    "chapterNumber": 26,
    "question": "What principally determines spatial resolution in digital fluoroscopy?",
    "answer": "The physical pixel size of the image matrix and the sampling frequency of the detector.",
    "explanation": "In DF, limiting spatial resolution is strictly governed by the Nyquist limit: fn = 1 / (2 × pixel size). For flat-panel digital fluoroscopy, physical detector element pitch (typically 150-200 µm) sets the fundamental upper limit on spatial resolution."
  },
  {
    "id": "q26-11",
    "questionNumber": 11,
    "chapterNumber": 26,
    "question": "How is automatic brightness stabilization (ABS) implemented with FPIR fluoroscopy?",
    "answer": "Solid-state electronics monitor charge integration on detector pixels and adjust pulsed mA and pulse width via high-speed feedback.",
    "explanation": "In flat-panel digital fluoroscopy, pixel storage capacitors in the detector array are sampled electronically during the x-ray pulse. A feedback loop immediately adjusts generator pulse width and tube current (mA) to maintain optimal target detector dose without lag."
  },
  {
    "id": "q26-12",
    "questionNumber": 12,
    "chapterNumber": 26,
    "question": "What is the pixel size of a 1000-line video system when the DF image intensifier is operated in the 12-cm mode?",
    "answer": "0.12 mm (120 µm).",
    "explanation": "FOV = 12 cm = 120 mm. Pixel size = FOV / Scan lines = 120 mm / 1000 lines = 0.12 mm (120 µm)."
  },
  {
    "id": "q26-13",
    "questionNumber": 13,
    "chapterNumber": 26,
    "question": "How does a fluoroscopic image captured by FPIR differ from that captured with an II-CCD?",
    "answer": "FPIR produces zero pincushion/barrel distortion, uniform spatial resolution across the entire field, higher DQE, and immunity to external magnetic fields.",
    "explanation": "Traditional II-CCD systems suffer from curved-surface pincushion distortion, peripheral vignetting, and sensitivity to magnetic fields. Flat-panel image receptors (FPIR) provide completely rectangular, distortion-free geometry, uniform brightness from center to corner, wider dynamic range, and higher detective quantum efficiency."
  },
  {
    "id": "q26-14",
    "questionNumber": 14,
    "chapterNumber": 26,
    "question": "What additional equipment is required to progress from conventional fluoroscopy to DF?",
    "answer": "A high-frequency pulsed generator, an analog-to-digital converter (ADC), a digital image processor/workstation, and a CCD or FPIR detector.",
    "explanation": "Progressing from conventional analog fluoroscopy to DF requires: (1) A high-power pulsed x-ray generator with sub-millisecond switching; (2) A solid-state CCD camera or active matrix flat panel; (3) High-speed ADCs (>=10 bits); (4) Dedicated digital subtraction and image processing computers; and (5) High-resolution digital display monitors and DICOM PACS interfaces."
  },
  {
    "id": "q26-15",
    "questionNumber": 15,
    "chapterNumber": 26,
    "question": "Discuss the patient dose implications associated with DF compared with conventional fluoroscopy.",
    "answer": "DF can reduce patient dose by 50% to 80% using pulsed fluoroscopy, but high-frame-rate acquisition and digital cine runs can dramatically escalate dose.",
    "explanation": "Using pulsed fluoroscopy (e.g., 7.5 or 15 pulses/second instead of 30 frames/second continuous exposure) substantially reduces patient radiation dose. However, because digital images do not appear degraded by overexposure, excessive fluoroscopy time or frequent DSA runs can result in severe radiation skin injuries if dose monitoring is neglected."
  },
  {
    "id": "q26-16",
    "questionNumber": 16,
    "chapterNumber": 26,
    "question": "What is image-guided catheter navigation (roadmapping)?",
    "answer": "Superimposing a live, real-time fluoroscopic image over a static, subtracted maximum-opacification vascular roadmap.",
    "explanation": "Roadmapping captures a DSA frame showing contrast-filled arteries and stores it as a static background overlay. Live fluoroscopy is displayed in real time over this map, allowing the interventionalist to guide catheter and guidewire tips precisely through tortuous arterial branches without administering continuous contrast."
  },
  {
    "id": "q26-17",
    "questionNumber": 17,
    "chapterNumber": 26,
    "question": "What x-ray energy (keV) would result in greatest contrast in digital subtraction angiography when an iodinated contrast agent is used (K-edge = 33.2 keV)?",
    "answer": "Just above 33.2 keV (approximately 34 to 40 keV).",
    "explanation": "Photoelectric absorption increases precipitously when photon energy matches or slightly exceeds the electron binding energy of the K-shell (the K-absorption edge). For iodine (K-edge at 33.2 keV), monoenergetic photons at 34 to 40 keV experience maximum attenuation, creating the highest vascular image contrast."
  },
  {
    "id": "q26-18",
    "questionNumber": 18,
    "chapterNumber": 26,
    "question": "What are some advantages associated with the use of a CCD instead of a TV camera tube?",
    "answer": "Higher signal-to-noise ratio (>1000:1), linear response, zero image lag/ghosting, unlimited service life, and compact size.",
    "explanation": "CCDs offer significant clinical advantages over analog Vidicon/Plumbicon tubes: (1) Signal-to-noise ratio exceeding 1000:1 (vs 200:1 for TV tubes); (2) Completely linear dynamic range; (3) Elimination of image lag and blooming; (4) Virtual immunity to physical shock; (5) Zero warm-up time and indefinite operating life."
  },
  {
    "id": "q26-19",
    "questionNumber": 19,
    "chapterNumber": 26,
    "question": "How can misregistration artifacts be corrected in DSA?",
    "answer": "Using pixel shift (sub-pixel spatial re-registration) or selecting an alternative mask frame.",
    "explanation": "If patient motion occurs between the mask and contrast runs, anatomical edges fail to cancel, leaving high-contrast bone edges that obscure vessels. Pixel shift shifts the mask image horizontally and vertically in fractional-pixel increments to realign anatomy; alternatively, re-masking selects a post-movement frame as the new baseline mask."
  },
  {
    "id": "q26-20",
    "questionNumber": 20,
    "chapterNumber": 26,
    "question": "Why is SNR ratio important in DF?",
    "answer": "Subtractive image processing compounds noise; a high SNR (at least 1000:1) is required to prevent noise from obliterating subtle opacified vessels.",
    "explanation": "When subtracting two digital images (Image 2 - Image 1), anatomical signals cancel, but random noise adds in quadrature (Noise_total = sqrt(Noise1^2 + Noise2^2)), increasing overall noise by 41% (sqrt(2)). A high initial SNR (at least 1000:1 vs 200:1 in conventional TV) ensures that vessels filled with dilute contrast remain distinctly visible."
  }
]

CHAPTER_27_QUESTIONS = [
  {
    "id": "q27-1",
    "questionNumber": 1,
    "chapterNumber": 27,
    "question": "Define or otherwise identify the following: (a) Angiographic contrast media, (b) Arteriography, (c) Hinck catheter shape, (d) Catheter, (e) Guidewire, (f) Arterial dissection, (g) Biplane imaging, (h) Tilt couch, (i) Venography, (j) Photofluorography.",
    "answer": "Key clinical tools, procedures, and vascular complications in Interventional Radiology (IR).",
    "explanation": "(a) Angiographic contrast media: Non-ionic, low-osmolar water-soluble iodinated solutions providing radiopacity within blood vessels. (b) Arteriography: Radiographic visualization of arteries following contrast injection. (c) Hinck catheter: Specialized curved catheter designed for selective engagement of brachiocephalic and carotid vessels. (d) Catheter: Flexible radiopaque tube threaded through vessels to inject contrast or deliver therapeutic devices. (e) Guidewire: Flexible wire with a soft floppy tip that guides catheters safely through vascular pathways. (f) Arterial dissection: Catastrophic tear in the inner arterial tunica intima layer caused by catheter or guidewire trauma. (g) Biplane imaging: Simultaneous orthogonal x-ray imaging (AP and lateral) using two tubes and detectors to halve contrast volume and procedure time. (h) Tilt couch: Motorized radiolucent table capable of Trendelenburg and reverse-Trendelenburg tilting. (i) Venography: Radiographic imaging of veins. (j) Photofluorography: Recording fluoroscopic images onto small format film (e.g., 100 mm)."
  },
  {
    "id": "q27-2",
    "questionNumber": 2,
    "chapterNumber": 27,
    "question": "Describe cardiac catheterization.",
    "answer": "Percutaneous insertion of specialized catheters into coronary arteries and heart chambers to diagnose coronary stenosis, measure intracardiac pressures, and perform angioplasty/stenting.",
    "explanation": "Cardiac catheterization is an advanced interventional fluoroscopic procedure. Catheters are introduced through the radial or femoral artery into the aortic root and coronary ostia to evaluate coronary artery disease (via coronary angiography), assess left ventricular wall motion (ventriculography), measure hemodynamic pressures, and deploy coronary stents."
  },
  {
    "id": "q27-3",
    "questionNumber": 3,
    "chapterNumber": 27,
    "question": "What is the Seldinger method for arterial access?",
    "answer": "A percutaneous access technique involving 18-gauge needle puncture, insertion of a flexible guidewire, needle removal, threading a catheter over the wire, and guidewire removal.",
    "explanation": "Invented by Sven Ivar Seldinger in 1953: (1) An 18-gauge cannula punctures both walls of the artery and is withdrawn until pulsating arterial blood spurts; (2) A flexible guidewire is advanced through the needle into the lumen; (3) The needle is withdrawn while pressure maintains hemostasis; (4) A catheter is threaded over the wire into the artery; (5) The guidewire is removed, leaving the catheter positioned in the vessel."
  },
  {
    "id": "q27-4",
    "questionNumber": 4,
    "chapterNumber": 27,
    "question": "What artery is used most often for arterial access in angiography?",
    "answer": "The common femoral artery (with the radial artery increasingly preferred for coronary procedures).",
    "explanation": "The common femoral artery in the groin is historically the most common access site because of its large caliber, superficial course over the femoral head (providing a firm bony backing for manual compression), and direct access to the abdominal aorta."
  },
  {
    "id": "q27-5",
    "questionNumber": 5,
    "chapterNumber": 27,
    "question": "Why is a guidewire used for arterial access of catheters?",
    "answer": "It guides the flexible catheter safely through tortuous vessels without traumatizing or perforating the vascular endothelium.",
    "explanation": "Catheters have blunt plastic tips that can scrape, dissect, or puncture arterial walls if advanced alone. A guidewire with a flexible, atraumatic, soft J-tip or floppy tip navigates through vascular branchings first; the catheter then slides smoothly over the wire track."
  },
  {
    "id": "q27-6",
    "questionNumber": 6,
    "chapterNumber": 27,
    "question": "List four types of catheters and the vessels for which they are designed.",
    "answer": "Pigtail (ventriculography/aortography), Cobra (renal/mesenteric), Headhunter (carotid/cerebral), and Simmons (tortuous arch vessels).",
    "explanation": "(1) Pigtail: Curled circular tip with multiple side holes used in large vessels (aorta, left ventricle) to inject high volume contrast safely without wall recoil; (2) Cobra: Smooth single-curve catheter used to select renal and celiac/mesenteric arteries; (3) Headhunter: Gentle primary curve for cannulating carotid and vertebral arteries; (4) Simmons: Complex reverse-curve catheter designed to engage acutely angled branch vessels in tortuous atherosclerotic aortas."
  },
  {
    "id": "q27-7",
    "questionNumber": 7,
    "chapterNumber": 27,
    "question": "Name two reasons why the radiologist visits the patient before an interventional radiologic procedure is performed.",
    "answer": "To obtain informed consent (explaining risks, benefits, and alternatives) and to assess physical/vascular health, allergy history, and renal function.",
    "explanation": "The pre-procedure clinical visit allows the physician to: (1) Personally explain the procedure, potential complications, and obtain written informed consent; (2) Evaluate peripheral pulses, check for previous iodinated contrast or medication allergies, and verify baseline laboratory values (BUN, creatinine/eGFR, prothrombin time/INR)."
  },
  {
    "id": "q27-8",
    "questionNumber": 8,
    "chapterNumber": 27,
    "question": "What is the most common problem that patients encounter after an interventional radiologic procedure?",
    "answer": "Puncture site hemorrhage, hematoma formation, or pseudoaneurysm at the arterial puncture site.",
    "explanation": "Because high-pressure arterial punctures are made (often under antiplatelet/anticoagulant therapy), bleeding at the puncture site leading to localized groin hematoma is the most common post-procedure complication, requiring firm post-procedure manual compression or vascular closure devices."
  },
  {
    "id": "q27-9",
    "questionNumber": 9,
    "chapterNumber": 27,
    "question": "What are thrombolysis and embolization in interventional radiology?",
    "answer": "Thrombolysis is the pharmacological dissolution of intravascular blood clots; embolization is the intentional therapeutic occlusion of a bleeding or abnormal blood vessel.",
    "explanation": "Thrombolysis infuses fibrinolytic enzymes (tPA, urokinase) directly through a catheter into a thrombosed vessel to dissolve occlusive clots. Embolization selectively delivers mechanical coils, gelatin sponge, or liquid embolic agents (glue) to permanently block bleeding vessels, starve tumors of arterial blood supply, or seal aneurysms."
  },
  {
    "id": "q27-10",
    "questionNumber": 10,
    "chapterNumber": 27,
    "question": "What is the required heating capacity of the interventional x-ray tube?",
    "answer": "An anode heat storage capacity of at least 1.0 to 2.0 Mega Heat Units (MHU) with rapid liquid heat dissipation (>1 MHU/min).",
    "explanation": "Interventional procedures involve extended fluoroscopy times alongside rapid serial high-mA DSA runs, generating immense anode heat. IR tubes require massive anode discs (1.0 to 2.0+ MHU heat capacity), high anode rotation speeds (10,000 rpm), and liquid-to-air heat exchangers."
  },
  {
    "id": "q27-11",
    "questionNumber": 11,
    "chapterNumber": 27,
    "question": "Name the titles and describe the duties of the team of personnel who work in the IR suite.",
    "answer": "Interventional radiologist (operator), scrub technologist (sterile assist/equipment prep), circulating technologist (imaging controls/PACS), and circulating nurse (sedation/hemodynamics).",
    "explanation": "(1) Interventional Radiologist: Physician performing vascular cannulation and interventions; (2) Scrub Technologist: Maintains sterile field, prepares guidewires, catheters, stents, and contrast injectors; (3) Circulating Technologist: Operates imaging consoles, sets frame rates, manages postprocessing and DICOM transfers; (4) Registered Nurse: Administers conscious sedation/analgesics, monitors ECG, blood pressure, and vital signs."
  },
  {
    "id": "q27-12",
    "questionNumber": 12,
    "chapterNumber": 27,
    "question": "List the focal-spot requirements for the interventional x-ray tube. For what procedure is the small focal spot used?",
    "answer": "Small focal spot 0.3 mm for magnification and fine cerebral/extremity angiography; large focal spot 1.0 mm for high-mA aortography and abdominal DSA.",
    "explanation": "IR x-ray tubes require dual or triple focal spots: a 0.3 mm small focal spot is utilized during geometric magnification studies (e.g., intracranial aneurysm coil embolization) to resolve tiny vessels without focal-spot blur. The large 1.0 mm spot handles high-mA (up to 1000 mA) short-exposure DSA runs in thick body parts."
  },
  {
    "id": "q27-13",
    "questionNumber": 13,
    "chapterNumber": 27,
    "question": "What does it mean when the patient couch has a stepping capability?",
    "answer": "The table motorized drive automatically steps down the patient's body in synchrony with contrast bolus flow from pelvis to feet (bolus chasing).",
    "explanation": "In peripheral lower extremity arteriography ('stepping' or 'bolus chase'), a single contrast injection in the abdominal aorta travels down the legs. A motorized stepping table advances sequentially from pelvis to thighs to calves and feet, matching the velocity of the contrast column to capture the complete arterial tree in one injection."
  },
  {
    "id": "q27-14",
    "questionNumber": 14,
    "chapterNumber": 27,
    "question": "Name the frame rates for a cine camera historically used in cardiology.",
    "answer": "Typically 15, 30, and 60 frames per second.",
    "explanation": "Cine film cameras recorded coronary angiography on 35-mm film at high frame rates: 15 fps (pediatric/low motion), 30 fps (standard adult coronary angiography), and 60 fps (rapid cardiac motion and congenital heart anomalies)."
  },
  {
    "id": "q27-15",
    "questionNumber": 15,
    "chapterNumber": 27,
    "question": "List three 'special procedures' performed in interventional radiology.",
    "answer": "Percutaneous transluminal angioplasty (PTA) with stenting, transcatheter embolization, and transjugular intrahepatic portosystemic shunt (TIPS).",
    "explanation": "Advanced IR procedures include: (1) PTA and vascular stenting to restore patency to stenotic vessels; (2) Transcatheter arterial embolization to stop acute hemorrhage or devascularize tumors; (3) TIPS to create an intrahepatic shunt between the portal vein and hepatic vein to alleviate portal hypertension."
  },
  {
    "id": "q27-16",
    "questionNumber": 16,
    "chapterNumber": 27,
    "question": "What is transbrachial selective coronary angiography?",
    "answer": "Accessing coronary arteries through a surgical cutdown or percutaneous puncture of the brachial artery in the antecubital fossa.",
    "explanation": "Pioneered by F. Mason Sones at the Cleveland Clinic in 1958, the transbrachial approach cannulates the brachial artery in the arm to reach the coronary ostia, commonly utilized when severe peripheral vascular disease or aortoiliac occlusion prevents femoral access."
  },
  {
    "id": "q27-17",
    "questionNumber": 17,
    "chapterNumber": 27,
    "question": "Why are some catheters fenestrated (pierced with multiple side holes)?",
    "answer": "To disperse large contrast volumes rapidly under high pressure while preventing jet-induced whipping of the catheter tip.",
    "explanation": "If a high-pressure injector forces 30-40 mL of contrast through a single end-hole, the high-velocity jet can cause the catheter tip to whip violently, perforating the vessel wall. Side holes (fenestrations) distribute pressure symmetrically, stabilizing the catheter and providing rapid, dense vascular opacification."
  },
  {
    "id": "q27-18",
    "questionNumber": 18,
    "chapterNumber": 27,
    "question": "How does osmolarity affect the action of a contrast agent in the bloodstream?",
    "answer": "High-osmolar agents draw interstitial fluid into blood vessels (hypervolemia, vasodilation, pain, kidney stress); low-osmolar agents minimize fluid shifts and adverse reactions.",
    "explanation": "Blood plasma osmolarity is ~300 mOsm/kg. High-osmolar contrast media (HOCM, ~1500 mOsm/kg) cause profound osmotic fluid shifts, pulling water out of red blood cells and endothelial tissues into the vascular compartment, triggering acute vasodilation, burning sensations, cardiac strain, and nephrotoxicity. Modern non-ionic low-osmolar (LOCM, ~600 mOsm/kg) and iso-osmolar agents eliminate these severe hemodynamics."
  },
  {
    "id": "q27-19",
    "questionNumber": 19,
    "chapterNumber": 27,
    "question": "What is the recommended minimum size for an IR suite?",
    "answer": "At least 400 to 500 square feet (approximately 40 to 50 square meters).",
    "explanation": "An interventional suite requires substantial floor space (minimum 400-500 sq ft) to accommodate large biplane C-arms, physiological hemodynamic monitors, power injectors, ultrasound units, crash carts, anesthesia machines, and a sterile field table with multiple personnel."
  },
  {
    "id": "q27-20",
    "questionNumber": 20,
    "chapterNumber": 27,
    "question": "What initials may an ARRT registered technologist with a specialty in IR place as a title postscript?",
    "answer": "RT(R)(VI) for Vascular-Interventional Radiography, or RT(R)(CI) for Cardiac-Interventional Radiography.",
    "explanation": "The American Registry of Radiologic Technologists (ARRT) offers advanced post-primary board certifications in Vascular-Interventional Radiography, granting the credential RT(R)(VI), and Cardiac-Interventional Radiography, granting RT(R)(CI)."
  }
]

CHAPTER_28_QUESTIONS = [
  {
    "id": "q28-1",
    "questionNumber": 1,
    "chapterNumber": 28,
    "question": "Define or otherwise identify the following: (a) Algorithm, (b) Transverse image, (c) Projection, (d) Interpolation, (e) Prepatient collimation, (f) Spatial frequency, (g) Hounsfield unit (HU), (h) Slip ring, (i) Modulation transfer function (MTF), (j) Maximum intensity projection (MIP).",
    "answer": "Fundamental reconstruction principles, instrumentation, and metrics in multislice helical Computed Tomography (CT).",
    "explanation": "(a) Algorithm: A finite set of mathematical instructions (e.g., filtered backprojection) used by the CT computer to reconstruct attenuation data into cross-sectional images. (b) Transverse image: An axial cross-sectional slice perpendicular to the long (craniocaudal) axis of the body. (c) Projection: An intensity profile of x-ray attenuation measurements formed by a single sweep of the beam across the patient at one angle. (d) Interpolation: Mathematical estimation of a value between two known data points (e.g., estimating z-axis attenuation between helical scan points). (e) Prepatient collimation: Lead collimator blades at the x-ray tube aperture determining beam width, slice thickness, and patient radiation dose. (f) Spatial frequency: Measurement of spatial detail in line pairs per millimeter (lp/mm). (g) Hounsfield unit (HU): Numerical value representing tissue attenuation relative to water (water = 0 HU, air = -1000 HU, dense bone = +1000 to +3000 HU). (h) Slip ring: Electromechanical conductive rings and brushes that supply power and transmit data, permitting continuous 360° gantry rotation. (i) MTF: Ratio of output image contrast to input object contrast across spatial frequencies. (j) MIP: 3D volume reconstruction technique that projects only the highest attenuation voxels along a ray path onto a 2D display (used in CT angiography)."
  },
  {
    "id": "q28-2",
    "questionNumber": 2,
    "chapterNumber": 28,
    "question": "Name the individual who first demonstrated CT in 1970.",
    "answer": "Sir Godfrey N. Hounsfield (at EMI Laboratories in England).",
    "explanation": "Godfrey Hounsfield conceptualized computed tomography in 1967 and built the first clinical prototype CT brain scanner in 1970 at EMI Central Research Laboratories in the UK. He shared the 1979 Nobel Prize in Physiology or Medicine with physicist Allan Cormack."
  },
  {
    "id": "q28-3",
    "questionNumber": 3,
    "chapterNumber": 28,
    "question": "Explain the term 'linear interpolation at 180 degrees' (180° LI).",
    "answer": "A helical reconstruction algorithm that estimates planar slice data using measurement points separated by 180° of gantry rotation rather than 360°.",
    "explanation": "Because an x-ray beam passing in one direction provides the same line integral attenuation as one passing in the exact opposite direction (separated by 180°), 180° linear interpolation samples projection data closer to the desired reconstruction plane than 360° LI, narrowing the slice sensitivity profile (SSP) and improving z-axis spatial resolution."
  },
  {
    "id": "q28-4",
    "questionNumber": 4,
    "chapterNumber": 28,
    "question": "What are the components in the gantry portion of the multislice helical CT imaging system?",
    "answer": "The x-ray tube, high-voltage generator, prepatient collimator, slip rings, solid-state detector array, and data acquisition system (DAS).",
    "explanation": "The CT gantry houses all rotating hardware: (1) High-capacity rotating anode x-ray tube; (2) High-frequency step-up generator; (3) Prepatient beam-shaping collimator and bowtie filter; (4) Low-friction slip rings; (5) Multislice solid-state scintillation detector array; and (6) High-speed Data Acquisition System (DAS) with ADCs."
  },
  {
    "id": "q28-5",
    "questionNumber": 5,
    "chapterNumber": 28,
    "question": "What are the special requirements of the x-ray tube as used in multislice helical CT imaging?",
    "answer": "Massive anode heat storage capacity (5 to 8+ MHU), rapid anode cooling rates (>1 MHU/min), small focal spots, and mechanical ruggedness to withstand up to 13G centrifugal force.",
    "explanation": "Because multislice helical CT acquires data continuously during multiple high-mA rotations without cool-down pauses, CT tubes require enormous anode heat capacity (up to 8 MHU), high-speed circulating oil-to-air heat exchangers, and reinforced bearings to endure tremendous centrifugal gravitational stresses generated by sub-second gantry rotations (up to 4 rotations per second)."
  },
  {
    "id": "q28-6",
    "questionNumber": 6,
    "chapterNumber": 28,
    "question": "Write the formula for the multislice helical CT pitch.",
    "answer": "Pitch = Couch movement per 360° rotation (mm) / Total x-ray beam width (mm) = I / (N × W).",
    "explanation": "Beam pitch = Table travel per gantry rotation (I) divided by total collimated beam width, where total beam width equals the number of active detector rows (N) multiplied by the slice thickness per row (W): Pitch = I / (N × W). A pitch of 1.0 indicates contiguous scanning; pitch > 1 indicates extended helical coverage with lower dose; pitch < 1 indicates overlapping data with higher dose."
  },
  {
    "id": "q28-7",
    "questionNumber": 7,
    "chapterNumber": 28,
    "question": "What is the volume of tissue imaged with beam width thickness of 10 mm, scan time of 30 s, and pitch of 1.6:1?",
    "answer": "480 mm (48 cm) along the z-axis.",
    "explanation": "Assuming a standard 1.0-second gantry rotation time: Couch speed = (Pitch × Beam width) / Rotation time = (1.6 × 10 mm) / 1.0 s = 16 mm/second. Total anatomical distance imaged along z-axis = Couch speed × Scan time = 16 mm/s × 30 s = 480 mm (48 cm)."
  },
  {
    "id": "q28-8",
    "questionNumber": 8,
    "chapterNumber": 28,
    "question": "Describe the two collimators used in CT imaging.",
    "answer": "Prepatient collimator (at the tube, shaping beam thickness and determining patient dose) and Predetector collimator (restricting scatter and defining slice profile).",
    "explanation": "(1) Prepatient collimator: Positioned at the tube housing exit aperture; defines total beam width along the z-axis, controls patient radiation dose, and shapes beam profile; (2) Predetector collimator: Positioned directly in front of the detector array; intercepts scattered photons and limits off-axis scatter from reaching detector elements."
  },
  {
    "id": "q28-9",
    "questionNumber": 9,
    "chapterNumber": 28,
    "question": "What material makes up the patient support couch in CT?",
    "answer": "Carbon fiber composites.",
    "explanation": "CT patient couches are constructed of carbon fiber because it possesses low density and low atomic number (minimal x-ray attenuation and scatter), while providing high tensile strength and rigidity to prevent table sag under heavy patients (up to 450-500 lbs)."
  },
  {
    "id": "q28-10",
    "questionNumber": 10,
    "chapterNumber": 28,
    "question": "Explain how slip-ring technology contributed to the development of helical CT.",
    "answer": "Electromechanical conductive slip rings eliminated high-voltage cable winding, allowing continuous, infinite gantry rotation.",
    "explanation": "Older axial CT scanners had physical electrical cables connecting the gantry to the power supply, requiring the gantry to stop and reverse direction after every 360° rotation (step-and-shoot). Slip rings use circular conductive tracks and sliding carbon-alloy brushes to transmit high voltage and digital signals continuously, enabling uninterrupted helical scanning."
  },
  {
    "id": "q28-11",
    "questionNumber": 11,
    "chapterNumber": 28,
    "question": "What is the voxel size of a CT imaging system with a 320 × 320 matrix size, a 20-cm reconstruction diameter, and a 0.5-cm slice thickness?",
    "answer": "Pixel size = 0.625 mm × 0.625 mm; Voxel volume = 1.95 mm^3 (0.625 mm × 0.625 mm × 5 mm).",
    "explanation": "Reconstruction field of view (DFOV) = 20 cm = 200 mm. Pixel width = DFOV / Matrix = 200 mm / 320 = 0.625 mm. Slice thickness (z-axis) = 0.5 cm = 5 mm. Voxel volume = width × height × depth = 0.625 mm × 0.625 mm × 5.0 mm = 1.953 mm^3."
  },
  {
    "id": "q28-12",
    "questionNumber": 12,
    "chapterNumber": 28,
    "question": "The volume of tissue imaged on helical CT is determined by which technique selections?",
    "answer": "Pitch, total beam collimation width, gantry rotation speed, and total scan acquisition time.",
    "explanation": "Z-axis anatomical coverage distance is computed directly as: Coverage = (Pitch × Beam width / Rotation time) × Total scan time. Altering any of these parameters proportionally changes the volume of anatomical tissue imaged."
  },
  {
    "id": "q28-13",
    "questionNumber": 13,
    "chapterNumber": 28,
    "question": "Define multiplanar reformation (MPR) in CT.",
    "answer": "Reconstructing a 3D volumetric stack of contiguous axial CT images into coronal, sagittal, oblique, or curved 2D planar images.",
    "explanation": "When CT scans are acquired with isotropic voxels (equal dimensions in x, y, and z axes), the computer can reslice the volumetric dataset along any arbitrary geometric angle—coronal, sagittal, or oblique—without any loss of spatial resolution or image distortion."
  },
  {
    "id": "q28-14",
    "questionNumber": 14,
    "chapterNumber": 28,
    "question": "Explain the mathematics of the multislice helical CT image reconstruction process.",
    "answer": "Raw projection data undergo z-axis interpolation into planar sets, followed by convolution filtration and filtered backprojection (or iterative reconstruction).",
    "explanation": "In helical scanning: (1) Raw helical projection data are interpolated along the z-axis (using 180° or 360° LI) to synthesize a planar set of projections corresponding to a specific slice location; (2) The projections are mathematically filtered with a convolution kernel (smoothing or bone algorithm); (3) Filtered backprojection or model-based iterative reconstruction (MBIR) projects attenuation profiles across a matrix to calculate pixel attenuation values (CT numbers in HU)."
  },
  {
    "id": "q28-15",
    "questionNumber": 15,
    "chapterNumber": 28,
    "question": "What type of high-voltage generator is used for multislice helical CT?",
    "answer": "Compact, high-frequency generators mounted directly onto the rotating gantry framework.",
    "explanation": "Modern CT scanners use high-frequency generators operating at several tens of kilohertz (up to 100 kHz). Their compact size and lightweight design allow them to be mounted directly onto the rotating gantry rotor, eliminating high-voltage slip rings."
  },
  {
    "id": "q28-16",
    "questionNumber": 16,
    "chapterNumber": 28,
    "question": "A multislice helical CT imaging system can resolve a 0.65-mm high-contrast object. What spatial frequency does this represent?",
    "answer": "0.77 lp/mm.",
    "explanation": "One line pair consists of the object and an equivalent interspace (total width = 2 × 0.65 mm = 1.30 mm). Spatial frequency = 1 / (1.30 mm) = 0.769 lp/mm, or approximately 0.77 lp/mm."
  },
  {
    "id": "q28-17",
    "questionNumber": 17,
    "chapterNumber": 28,
    "question": "A 10-s multislice helical CT examination is conducted with a 1.5:1 pitch and 5-mm beam width (assuming 1 rotation/second). How much tissue is imaged?",
    "answer": "75 mm (7.5 cm).",
    "explanation": "Table speed = (Pitch × Beam width) / Rotation time = (1.5 × 5 mm) / 1 s = 7.5 mm/second. Total anatomical distance = Speed × Time = 7.5 mm/s × 10 s = 75 mm (7.5 cm)."
  },
  {
    "id": "q28-18",
    "questionNumber": 18,
    "chapterNumber": 28,
    "question": "Why is multislice helical CT pitch greater than 2:1 rarely used?",
    "answer": "Pitches > 2:1 cause severe slice sensitivity profile broadening, data sampling gaps, and streak artifacts.",
    "explanation": "When pitch exceeds 2.0, angular sampling intervals become too wide and interpolation algorithms must bridge large physical gaps along the z-axis. This causes marked broadening of the effective slice thickness (loss of z-axis resolution) and generates windmill and helical interpolation artifacts."
  },
  {
    "id": "q28-19",
    "questionNumber": 19,
    "chapterNumber": 28,
    "question": "What determines in-plane spatial resolution in CT?",
    "answer": "Focal spot size, detector element aperture width, reconstruction matrix size / FOV, and mathematical reconstruction convolution kernel.",
    "explanation": "In-plane (x-y) spatial resolution is limited geometrically by the detector element width and focal-spot dimensions, digitally by the pixel size (FOV / matrix), and algorithmically by the choice of reconstruction filter (a high-frequency 'bone' kernel maximizes spatial resolution, whereas a soft-tissue kernel prioritizes contrast resolution)."
  },
  {
    "id": "q28-20",
    "questionNumber": 20,
    "chapterNumber": 28,
    "question": "What does the term 'CT linearity' describe?",
    "answer": "The strict linear relationship between calculated CT numbers (Hounsfield units) and the actual linear attenuation coefficients (µ) of tissues.",
    "explanation": "CT linearity refers to the principle that Hounsfield units scale in a direct linear relationship with tissue x-ray linear attenuation coefficients: HU = 1000 × (µ_tissue - µ_water) / µ_water. Regular calibration with a five-pin phantom (air, water, acrylic, polyethylene, Teflon) verifies that CT numbers remain linear across the attenuation spectrum."
  }
]

print("Part 6 questions ready: Chapters 23, 24, 25, 26, 27, 28 (120 questions total).")

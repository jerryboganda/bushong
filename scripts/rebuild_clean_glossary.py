import pdfplumber
import fitz
import re
import json

CATEGORIES = [
    'Physics',
    'Equipment',
    'Image Quality',
    'Digital Imaging',
    'Radiobiology',
    'Radiation Protection',
    'General'
]

def categorize(term, defn):
    text = (term + " " + defn).lower()
    # High-specificity keywords first
    if any(k in text for k in ['dose', 'alara', 'sievert', 'rem', 'protection', 'shield', 'occupational', 'dosimeter', 'survey', 'barrier', 'effective dose', 'absorbed dose', 'air kerma', 'roentgen', 'curie', 'becquerel', 'stochastic', 'deterministic', 'linear nonthreshold', 'linear-nonthreshold', 'mpd', 'dose equivalent', 'quality factor', 'annual limit', 'controlled area', 'uncontrolled area', 'workload', 'occupancy factor', 'use factor']):
        return 'Radiation Protection'
    if any(k in text for k in ['dna', 'cell', 'mitosis', 'meiosis', 'chromosome', 'acute radiation syndrome', 'prodromal', 'hematologic', 'gastrointestinal', 'cns syndrome', 'leukemia', 'cancer', 'radiobiology', 'radiosensitiv', 'rbe', 'let', 'oer', 'target theory', 'direct effect', 'indirect effect', 'free radical', 'radiolysis', 'catabolism', 'anabolism', 'bergo', 'tribondeau', 'epilation', 'erythema', 'cytogenetic', 'in vitro', 'in vivo', 'doubling dose', 'genetically significant dose']):
        return 'Radiobiology'
    if any(k in text for k in ['digital', 'pixel', 'voxel', 'matrix', 'dqe', 'cr', 'dr', 'pacs', 'dicom', 'histogram', 'lookup table', 'lut', 'photostimulable', 'psp', 'charge-coupled', 'ccd', 'tft', 'flat-panel', 'computed radiography', 'bit depth', 'binary', 'byte', 'compression', 'display', 'monitor', 'lcd', 'active matrix', 'sampling frequency', 'nyquist', 'window level', 'window width', 'kernel', 'spatial frequency', 'subtraction']):
        return 'Digital Imaging'
    if any(k in text for k in ['contrast', 'resolution', 'mtf', 'spatial resolution', 'artifact', 'noise', 'blur', 'penumbra', 'heel effect', 'grid', 'scatter', 'collimat', 'filtration', 'distortion', 'magnification', 'density', 'optical density', 'fog', 'speed', 'screen', 'film', 'emulsion', 'developer', 'fixer', 'characteristic curve', 'h&d curve', 'dmin', 'dmax', 'solarization', 'subject contrast', 'radiographic contrast', 'focal-spot blur', 'geometric blur']):
        return 'Image Quality'
    if any(k in text for k in ['x-ray tube', 'anode', 'cathode', 'filament', 'focusing cup', 'generator', 'transformer', 'rectifier', 'rectification', 'autotransformer', 'high voltage', 'fluoroscop', 'ripple', 'stator', 'rotor', 'target', 'beryllium', 'housing', 'cooling', 'heat unit', 'mammograph', 'ct scanner', 'gantry', 'slip ring', 'collimator', 'image intensifier', 'photocathode', 'vidicon', 'plumbicon', 'television', 'generator']):
        return 'Equipment'
    if any(k in text for k in ['energy', 'mass', 'matter', 'atom', 'electron', 'proton', 'neutron', 'nucleus', 'binding energy', 'photoelectric', 'compton', 'coherent', 'pair production', 'photodisintegration', 'wavelength', 'frequency', 'photon', 'electromagnetic', 'velocity', 'acceleration', 'force', 'work', 'power', 'quantum', 'inverse square', 'potential', 'kinetic', 'joule', 'newton', 'watt', 'volt', 'ampere', 'ohm', 'coulomb', 'magnetic', 'magnetism', 'electric', 'circuit', 'electromagnetic spectrum', 'law of conservation', 'mechanics', 'newton\'s', 'planck']):
        return 'Physics'
    return 'General'

def extract_units(term, defn):
    # Check if term ends with units in parentheses
    m = re.search(r'\(([^)]+)\)$', term)
    if m:
        cand = m.group(1).strip()
        if any(c in cand.lower() for c in ['m/s', 'kg', 'j', 'w', 'v', 'a', 'c', 'gy', 'sv', 'bq', 'hz', 'ev', 'kev', 'mev', 'nm', 'rad', 'rem', 'r', 'ci', 'c/kg', 'lp/mm', 'cd/m', 'tesla', 'gauss']):
            return cand
    m2 = re.search(r'\b(?:expressed in|measured in|unit is|units are|unit of measure[:\s]+)\s*([^.;,]+)', defn, re.I)
    if m2:
        cand = m2.group(1).strip()
        if len(cand) < 35:
            return cand
    return None

def get_letter(term):
    clean = re.sub(r'^[^a-zA-Z0-9]+', '', term)
    if not clean:
        return '#'
    first = clean[0].upper()
    if first.isdigit():
        return '#'
    return first

def clean_ocr_text(s):
    if not s:
        return ""
    # Replace common OCR ligatures & smart quotes
    s = s.replace('\u2018', "'").replace('\u2019', "'")
    s = s.replace('\u201c', '"').replace('\u201d', '"')
    s = s.replace('\u2014', '—').replace('\u2013', '–')
    # Fix broken hyphenation e.g. "mag- netic" -> "magnetic"
    s = re.sub(r'(\b[a-zA-Z]{2,})-\s+([a-zA-Z]{2,}\b)', r'\1\2', s)
    # Fix spacing before punctuation
    s = re.sub(r'\s+([,.:;?!)])', r'\1', s)
    # Fix spacing after opening parens
    s = re.sub(r'([(])\s+', r'\1', s)
    # Fix concatenated words like "radiationsyndrome" -> "radiation syndrome"
    s = s.replace("radiationsyndrome", "radiation syndrome")
    s = s.replace("screenfilm", "screen-film")
    s = s.replace("flatpanel", "flat-panel")
    s = s.replace("xray", "x-ray")
    s = s.replace("Xray", "X-ray")
    # Collapse multiple spaces
    s = re.sub(r'\s+', ' ', s)
    return s.strip()

def run():
    pdf_path = 'Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf'
    raw_entries = []

    print("Opening PDF with pdfplumber...")
    with pdfplumber.open(pdf_path) as pdf:
        for p_idx in range(634, 654):
            page = pdf.pages[p_idx]
            w, h = page.width, page.height
            
            # Bushong 2-column layout: left column (0 to w/2), right column (w/2 to w)
            # header margin ~45pt, footer margin ~35pt
            for col_rect in [(0, 45, w/2, h - 35), (w/2, 45, w, h - 35)]:
                cropped = page.crop(col_rect)
                words = cropped.extract_words()
                if not words:
                    continue
                
                # Group words into visual lines by vertical alignment (top)
                lines = []
                cur_line = []
                cur_top = None
                for wd in words:
                    top = wd['top']
                    if cur_top is None or abs(top - cur_top) < 4:
                        cur_line.append(wd)
                        cur_top = top
                    else:
                        lines.append(cur_line)
                        cur_line = [wd]
                        cur_top = top
                if cur_line:
                    lines.append(cur_line)
                
                for l in lines:
                    l_text = " ".join(wd['text'] for wd in l).strip()
                    # Skip page headers / footers
                    if not l_text or l_text in ['GLOSSARY', 'Glossary'] or l_text.startswith('Units are shown in parentheses'):
                        continue
                    if re.match(r'^\d{1,4}$', l_text): # Page number e.g. 615, 616
                        continue
                    
                    # Check for column gap between term and definition
                    split_idx = -1
                    for i in range(len(l) - 1):
                        gap = l[i+1]['x0'] - l[i]['x1']
                        if gap >= 10.5:
                            nxt = l[i+1]['text']
                            # Definitions start with uppercase, number, 'a.', or '('
                            if nxt[0].isupper() or nxt.startswith('a.') or nxt.startswith('1.') or nxt.startswith('('):
                                split_idx = i + 1
                                break
                    
                    if split_idx != -1:
                        term = " ".join(wd['text'] for wd in l[:split_idx]).strip()
                        defn = " ".join(wd['text'] for wd in l[split_idx:]).strip()
                        raw_entries.append({'term': term, 'definition': defn})
                    elif len(l) <= 6 and (l[0]['text'][0].isupper() or l[0]['text'][0].isdigit()) and not l_text.endswith('.'):
                        # Term on its own line (definition starts on next line)
                        raw_entries.append({'term': l_text, 'definition': ''})
                    else:
                        # Continuation line of definition
                        if raw_entries:
                            if raw_entries[-1]['definition']:
                                raw_entries[-1]['definition'] += " " + l_text
                            else:
                                raw_entries[-1]['definition'] = l_text

    print(f"Extracted {len(raw_entries)} raw entries from PDF.")

    # Clean and deduplicate
    cleaned = []
    seen = set()

    for e in raw_entries:
        term = clean_ocr_text(e['term'])
        defn = clean_ocr_text(e['definition'])
        
        # Remove leading non-alphanumeric chars except % or numbers
        term = re.sub(r'^[^\w%]+', '', term)
        if not term or len(term) < 2:
            continue
        if not defn or len(defn) < 5:
            continue
            
        key = term.lower()
        if key in seen:
            continue
        seen.add(key)
        
        category = categorize(term, defn)
        letter = get_letter(term)
        units = extract_units(term, defn)
        
        item = {
            'term': term,
            'definition': defn,
            'category': category,
            'letter': letter
        }
        if units:
            item['units'] = units
        cleaned.append(item)

    # Sort alphabetically: numbers (#) first, then A-Z
    cleaned.sort(key=lambda x: (x['letter'] != '#', x['letter'], x['term'].lower()))

    print(f"Total clean, unique glossary terms: {len(cleaned)}")

    # Category counts
    cat_counts = {}
    for item in cleaned:
        cat_counts[item['category']] = cat_counts.get(item['category'], 0) + 1
    print("Category breakdown:", cat_counts)

    # Letter counts
    letter_counts = {}
    for item in cleaned:
        letter_counts[item['letter']] = letter_counts.get(item['letter'], 0) + 1
    print("Letter breakdown:", sorted(letter_counts.items()))

    # Sample output
    print("\nFirst 5 entries:")
    for item in cleaned[:5]:
        print(f"  [{item['letter']}] {item['term']} ({item['category']}): {item['definition'][:60]}...")

    # Write to src/data/glossaryData.ts
    ts_code = """export interface GlossaryItem {
  term: string;
  definition: string;
  category: 'Physics' | 'Equipment' | 'Image Quality' | 'Digital Imaging' | 'Radiobiology' | 'Radiation Protection' | 'General';
  units?: string;
  letter: string;
}

export const BUSHONG_GLOSSARY: GlossaryItem[] = """ + json.dumps(cleaned, indent=2, ensure_ascii=False) + ";\n"

    with open('src/data/glossaryData.ts', 'w', encoding='utf-8') as f:
        f.write(ts_code)

    print("Saved clean, complete glossary to src/data/glossaryData.ts!")

if __name__ == '__main__':
    run()

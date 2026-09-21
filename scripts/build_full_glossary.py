import pdfplumber
import re
import json
import time

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
    if any(k in text for k in ['dose', 'alara', 'sievert', 'rem', 'protection', 'shield', 'occupational', 'dosimeter', 'survey', 'barrier', 'effective dose', 'absorbed dose', 'air kerma', 'roentgen', 'curie', 'becquerel', 'stochastic', 'deterministic', 'linear nonthreshold', 'linear-nonthreshold', 'mpd', 'dose equivalent', 'quality factor']):
        return 'Radiation Protection'
    if any(k in text for k in ['dna', 'cell', 'mitosis', 'meiosis', 'chromosome', 'acute radiation syndrome', 'prodromal', 'hematologic', 'gastrointestinal', 'cns syndrome', 'leukemia', 'cancer', 'radiobiology', 'radiosensitiv', 'rbe', 'let', 'oer', 'target theory', 'direct effect', 'indirect effect', 'free radical', 'radiolysis', 'catabolism', 'anabolism', 'bergo', 'tribondeau']):
        return 'Radiobiology'
    if any(k in text for k in ['digital', 'pixel', 'voxel', 'matrix', 'dqe', 'cr', 'dr', 'pacs', 'dicom', 'histogram', 'lookup table', 'lut', 'photostimulable', 'psp', 'charge-coupled', 'ccd', 'tft', 'flat-panel', 'computed radiography', 'bit depth', 'binary', 'byte', 'compression', 'display', 'monitor', 'lcd', 'active matrix', 'sampling frequency', 'nyquist']):
        return 'Digital Imaging'
    if any(k in text for k in ['contrast', 'resolution', 'mtf', 'spatial resolution', 'artifact', 'noise', 'blur', 'penumbra', 'heel effect', 'grid', 'scatter', 'collimat', 'filtration', 'distortion', 'magnification', 'density', 'optical density', 'fog', 'speed', 'screen', 'film', 'emulsion', 'developer', 'fixer', 'characteristic curve', 'h&d curve', 'dmin', 'dmax', 'solarization']):
        return 'Image Quality'
    if any(k in text for k in ['x-ray tube', 'anode', 'cathode', 'filament', 'focusing cup', 'generator', 'transformer', 'rectifier', 'rectification', 'autotransformer', 'high voltage', 'fluoroscop', 'ripple', 'stator', 'rotor', 'target', 'beryllium', 'housing', 'cooling', 'heat unit', 'mammograph', 'ct scanner', 'gantry', 'slip ring', 'collimator', 'image intensifier', 'photocathode']):
        return 'Equipment'
    if any(k in text for k in ['energy', 'mass', 'matter', 'atom', 'electron', 'proton', 'neutron', 'nucleus', 'binding energy', 'photoelectric', 'compton', 'coherent', 'pair production', 'photodisintegration', 'wavelength', 'frequency', 'photon', 'electromagnetic', 'velocity', 'acceleration', 'force', 'work', 'power', 'quantum', 'inverse square', 'potential', 'kinetic', 'joule', 'newton', 'watt', 'volt', 'ampere', 'ohm', 'coulomb', 'magnetic', 'magnetism', 'electric', 'circuit', 'electromagnetic spectrum', 'law of conservation']):
        return 'Physics'
    return 'General'

def extract_units(term, defn):
    # Check if term has units in parentheses, e.g. "Work (J)", "Acceleration (m/s²)", "Electric charge (C)"
    m = re.search(r'\(([^)]+)\)$', term)
    if m:
        cand = m.group(1).strip()
        if any(c in cand.lower() for c in ['m/s', 'kg', 'j', 'w', 'v', 'a', 'c', 'gy', 'sv', 'bq', 'hz', 'ev', 'kev', 'mev', 'nm', 'rad', 'rem', 'r', 'ci', 'c/kg']):
            return cand
    # Check if definition starts or mentions units
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

print("Reading PDF glossary pages 635 to 654...")
with pdfplumber.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf') as pdf:
    raw_entries = []
    
    for p_idx in range(634, 654):
        page = pdf.pages[p_idx]
        w, h = page.width, page.height
        
        for col_rect in [(0, 45, w/2, h - 35), (w/2, 45, w, h - 35)]:
            cropped = page.crop(col_rect)
            words = cropped.extract_words()
            if not words: continue
            
            # group words into lines by top
            lines = []
            cur_line = []
            cur_top = None
            for wd in words:
                top = wd['top']
                if cur_top is None:
                    cur_top = top
                    cur_line.append(wd)
                elif abs(top - cur_top) < 4:
                    cur_line.append(wd)
                else:
                    lines.append(cur_line)
                    cur_line = [wd]
                    cur_top = top
            if cur_line:
                lines.append(cur_line)
                
            for l in lines:
                l_text = " ".join(wd['text'] for wd in l).strip()
                if not l_text or l_text in ['GLOSSARY', 'Glossary'] or l_text.startswith('Units are shown in parentheses'):
                    continue
                if re.match(r'^\d{3}$', l_text):
                    continue
                    
                split_idx = -1
                for i in range(len(l) - 1):
                    gap = l[i+1]['x0'] - l[i]['x1']
                    if gap >= 11.0:
                        nxt = l[i+1]['text']
                        if nxt[0].isupper() or nxt.startswith('a.') or nxt.startswith('1.') or nxt.startswith('('):
                            split_idx = i + 1
                            break
                            
                if split_idx != -1:
                    term = " ".join(wd['text'] for wd in l[:split_idx]).strip()
                    defn = " ".join(wd['text'] for wd in l[split_idx:]).strip()
                    raw_entries.append({'term': term, 'definition': defn})
                elif len(l) <= 6 and (l[0]['text'][0].isupper() or l[0]['text'][0].isdigit()) and not l_text.endswith('.'):
                    raw_entries.append({'term': l_text, 'definition': ''})
                else:
                    if raw_entries:
                        if raw_entries[-1]['definition']:
                            raw_entries[-1]['definition'] += " " + l_text
                        else:
                            raw_entries[-1]['definition'] = l_text

print(f"Raw extracted entries: {len(raw_entries)}")

# Clean and normalize
cleaned = []
seen = set()

for e in raw_entries:
    term = e['term'].strip()
    defn = e['definition'].strip()
    
    # Remove leading non-alphanumerics
    term = re.sub(r'^[^\w%]+', '', term)
    if not term or len(term) < 2:
        continue
    if not defn or len(defn) < 5:
        continue
        
    # Clean text
    defn = re.sub(r'(\b[a-zA-Z]+)-\s+([a-zA-Z]+\b)', r'\1\2', defn)
    term = re.sub(r'(\b[a-zA-Z]+)-\s+([a-zA-Z]+\b)', r'\1\2', term)
    defn = defn.replace('', "'").replace('', "'").replace('', "'")
    term = term.replace('', "'").replace('', "'").replace('', "'")
    defn = re.sub(r'\s+([,.:;])', r'\1', defn)
    term = re.sub(r'\s+([,.:;])', r'\1', term)
    term = re.sub(r'\s+', ' ', term).strip()
    defn = re.sub(r'\s+', ' ', defn).strip()
    
    # Check duplicate
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

# Sort alphabetically by letter then term
cleaned.sort(key=lambda x: (x['letter'] == '#', x['term'].lower()))

print(f"Cleaned unique terms: {len(cleaned)}")

# Generate TypeScript file
ts_output = """export interface GlossaryItem {
  term: string;
  definition: string;
  category: 'Physics' | 'Equipment' | 'Image Quality' | 'Digital Imaging' | 'Radiobiology' | 'Radiation Protection' | 'General';
  units?: string;
  letter: string;
}

export const BUSHONG_GLOSSARY: GlossaryItem[] = """

ts_output += json.dumps(cleaned, indent=2) + ";\n"

with open('src/data/glossaryData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_output)

print("Saved to src/data/glossaryData.ts!")

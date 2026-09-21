import pdfplumber
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
    if any(k in text for k in ['dose', 'alara', 'sievert', 'rem', 'protection', 'shield', 'occupational', 'dosimeter', 'survey', 'barrier', 'effective dose', 'absorbed dose', 'air kerma', 'roentgen', 'curie', 'becquerel']):
        return 'Radiation Protection'
    if any(k in text for k in ['dna', 'cell', 'mitosis', 'meiosis', 'chromosome', 'syndrome', 'stochastic', 'deterministic', 'latent', 'prodromal', 'hematologic', 'gastrointestinal', 'cns', 'leukemia', 'cancer', 'radiobiology', 'radiosensitiv', 'rbe', 'let', 'oer', 'target theory', 'direct effect', 'indirect effect', 'free radical', 'radiolysis', 'catabolism', 'anabolism']):
        return 'Radiobiology'
    if any(k in text for k in ['digital', 'pixel', 'voxel', 'matrix', 'detector', 'dqe', 'cr', 'dr', 'pacs', 'dicom', 'histogram', 'lookup table', 'lut', 'photostimulable', 'psp', 'charge-coupled', 'ccd', 'tft', 'flat-panel', 'computed radiography', 'bit depth', 'binary', 'byte', 'compression', 'display', 'monitor']):
        return 'Digital Imaging'
    if any(k in text for k in ['contrast', 'resolution', 'mtf', 'spatial resolution', 'artifact', 'noise', 'blur', 'penumbra', 'heel effect', 'grid', 'scatter', 'collimat', 'filtration', 'distortion', 'magnification', 'density', 'optical density', 'fog', 'speed', 'screen', 'film', 'emulsion', 'developer', 'fixer', 'characteristic curve', 'h&d curve']):
        return 'Image Quality'
    if any(k in text for k in ['x-ray tube', 'anode', 'cathode', 'filament', 'focusing cup', 'generator', 'transformer', 'rectifier', 'rectification', 'autotransformer', 'high voltage', 'fluoroscop', 'generator', 'ripple', 'stator', 'rotor', 'target', 'beryllium', 'housing', 'cooling', 'heat unit', 'mammograph', 'ct scanner', 'gantry', 'slip ring']):
        return 'Equipment'
    if any(k in text for k in ['energy', 'mass', 'matter', 'atom', 'electron', 'proton', 'neutron', 'nucleus', 'binding energy', 'photoelectric', 'compton', 'coherent', 'pair production', 'photodisintegration', 'wavelength', 'frequency', 'photon', 'electromagnetic', 'velocity', 'acceleration', 'force', 'work', 'power', 'quantum', 'inverse square', 'potential', 'kinetic', 'joule', 'newton', 'watt', 'volt', 'ampere', 'ohm', 'coulomb', 'magnetic', 'magnetism', 'electric', 'circuit']):
        return 'Physics'
    return 'General'

def get_letter(term):
    clean = re.sub(r'^[^a-zA-Z0-9]+', '', term)
    if not clean:
        return '#'
    first = clean[0].upper()
    if first.isdigit():
        return '#'
    return first

print("Testing categorization & helpers...")

import pdfplumber
import re
import json
import time
from glossary_helpers import categorize, get_letter

t0 = time.time()
print("Opening PDF...", flush=True)

with pdfplumber.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf') as pdf:
    all_raw_lines = []
    
    for p_idx in range(634, 654):
        p_t0 = time.time()
        page = pdf.pages[p_idx]
        w, h = page.width, page.height
        
        # crop left and right columns
        left_text = page.crop((0, 45, w/2, h - 35)).extract_text() or ""
        right_text = page.crop((w/2, 45, w, h - 35)).extract_text() or ""
        
        # split lines
        for l in left_text.splitlines():
            l_str = l.strip()
            if l_str and l_str not in ['GLOSSARY', 'Glossary'] and not l_str.startswith('Units are shown in parentheses'):
                all_raw_lines.append(l_str)
                
        for l in right_text.splitlines():
            l_str = l.strip()
            if l_str and l_str not in ['GLOSSARY', 'Glossary'] and not l_str.startswith('Units are shown in parentheses'):
                all_raw_lines.append(l_str)
                
        print(f"Page {p_idx+1} processed in {time.time() - p_t0:.2f}s", flush=True)

print(f"Total extracted lines across 20 pages: {len(all_raw_lines)} in {time.time() - t0:.2f}s", flush=True)

with open('scripts/glossary_raw_lines.json', 'w', encoding='utf-8') as f:
    json.dump(all_raw_lines, f, indent=2)

import pdfplumber
import fitz
import re
import json
import time

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')
cq_start_pages = [45, 63, 78, 101, 122, 141, 154, 164, 179, 204, 225, 255, 284, 301, 314, 324, 340, 352, 362, 373, 382, 392, 407, 422, 438, 452, 460, 486, 501, 510, 516, 526, 541, 559, 570, 586, 595, 605, 617, 634]

all_ch_cqs = {}

with pdfplumber.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf') as pdf:
    for ch_num in range(1, 41):
        p_start = cq_start_pages[ch_num - 1] - 1
        p_count = 3 if ch_num in [21, 3, 8] else 2
        
        full_text = ""
        for p_idx in range(p_start, min(len(pdf.pages), p_start + p_count)):
            p = pdf.pages[p_idx]
            w, h = p.width, p.height
            left = p.crop((0, 35, w/2, h - 35)).extract_text() or ""
            right = p.crop((w/2, 35, w, h - 35)).extract_text() or ""
            full_text += "\n" + left + "\n" + right
            
        pos_s = full_text.find("CHALLENGE QUESTIONS")
        if pos_s != -1:
            full_text = full_text[pos_s + len("CHALLENGE QUESTIONS"):]
        pos_e = full_text.find("The answers to the Challenge Questions")
        if pos_e == -1:
            pos_e = full_text.find("evolve.elsevier.com")
        if pos_e != -1:
            full_text = full_text[:pos_e]
            
        lines = [l.strip() for l in full_text.splitlines() if l.strip()]
        all_ch_cqs[ch_num] = {
            'start_page': cq_start_pages[ch_num - 1],
            'lines': lines,
            'raw': full_text
        }
        print(f"Ch {ch_num:2d} (p. {cq_start_pages[ch_num - 1]}): {len(lines)} lines")

with open('scripts/all_cq_raw.json', 'w', encoding='utf-8') as f:
    json.dump(all_ch_cqs, f, indent=2)

print("Saved all raw CQs to scripts/all_cq_raw.json!")

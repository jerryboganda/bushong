import pdfplumber
import fitz
import re
import json

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')
cq_start_pages = [45, 63, 78, 101, 122, 141, 154, 164, 179, 204, 225, 255, 284, 301, 314, 324, 340, 352, 362, 373, 382, 392, 407, 422, 438, 452, 460, 486, 501, 510, 516, 526, 541, 559, 570, 586, 595, 605, 617, 634]

for ch_idx, start_page in enumerate(cq_start_pages, 1):
    p0 = start_page - 1
    p_end = min(len(doc), p0 + (3 if ch_idx == 21 else 2))
    
    text = ""
    for p in range(p0, p_end):
        text += "\n" + doc[p].get_text()
        
    pos_s = text.find("CHALLENGE QUESTIONS")
    if pos_s != -1:
        text = text[pos_s + len("CHALLENGE QUESTIONS"):]
    pos_e = text.find("The answers to the Challenge Questions")
    if pos_e == -1:
        pos_e = text.find("evolve.elsevier.com")
    if pos_e != -1:
        text = text[:pos_e]
        
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    print(f"Ch {ch_idx:2d} (p. {start_page}): {len(lines)} lines, chars={len(text)}")

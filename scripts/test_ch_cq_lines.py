import pdfplumber
import fitz
import re
import json

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')
cq_start_pages = [45, 63, 78, 101, 122, 141, 154, 164, 179, 204, 225, 255, 284, 301, 314, 324, 340, 352, 362, 373, 382, 392, 407, 422, 438, 452, 460, 486, 501, 510, 516, 526, 541, 559, 570, 586, 595, 605, 617, 634]

def extract_chapter_questions(ch_num):
    p_start = cq_start_pages[ch_num - 1] - 1
    p_count = 3 if ch_num in [21, 3] else 2
    
    # Use fitz blocks or pdfplumber columns
    full_text = ""
    with pdfplumber.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf') as pdf:
        for p_idx in range(p_start, min(len(pdf.pages), p_start + p_count)):
            p = pdf.pages[p_idx]
            w, h = p.width, p.height
            left = p.crop((0, 35, w/2, h - 35)).extract_text() or ""
            right = p.crop((w/2, 35, w, h - 35)).extract_text() or ""
            full_text += "\n" + left + "\n" + right
            
    # Locate CHALLENGE QUESTIONS
    pos_s = full_text.find("CHALLENGE QUESTIONS")
    if pos_s != -1:
        full_text = full_text[pos_s + len("CHALLENGE QUESTIONS"):]
    pos_e = full_text.find("The answers to the Challenge Questions")
    if pos_e == -1:
        pos_e = full_text.find("evolve.elsevier.com")
    if pos_e != -1:
        full_text = full_text[:pos_e]
        
    lines = [l.strip() for l in full_text.splitlines() if l.strip()]
    return lines

for ch in [1, 2, 3, 4, 5]:
    lines = extract_chapter_questions(ch)
    print(f"=== Chapter {ch}: {len(lines)} lines ===")
    for l in lines[:15]:
        print("  ", l)

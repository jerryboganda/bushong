import fitz
import re
import json

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')

cq_start_pages = [45, 63, 78, 101, 122, 141, 154, 164, 179, 204, 225, 255, 284, 301, 314, 324, 340, 352, 362, 373, 382, 392, 407, 422, 438, 452, 460, 486, 501, 510, 516, 526, 541, 559, 570, 586, 595, 605, 617, 634]

def extract_chapter_cq_raw(ch_idx):
    p_start = cq_start_pages[ch_idx - 1] - 1
    # include up to 3 pages
    text = ""
    for p in range(p_start, min(len(doc), p_start + 3)):
        text += "\n" + doc[p].get_text()
        if "The answers to the Challenge Questions" in text or "evolve.elsevier.com" in text:
            break
            
    pos_start = text.find("CHALLENGE QUESTIONS")
    if pos_start == -1:
        return ""
    text = text[pos_start + len("CHALLENGE QUESTIONS"):]
    
    pos_end = text.find("The answers to the Challenge Questions")
    if pos_end == -1:
        pos_end = text.find("evolve.elsevier.com")
    if pos_end != -1:
        text = text[:pos_end]
        
    return text.strip()

for ch in range(1, 6):
    raw = extract_chapter_cq_raw(ch)
    print(f"=== Chapter {ch} (chars={len(raw)}) ===")
    lines = [l.strip() for l in raw.split('\n') if l.strip()]
    for l in lines[:10]:
        print(f"  {l}")
    print("  ...")
    for l in lines[-5:]:
        print(f"  {l}")

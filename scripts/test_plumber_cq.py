import pdfplumber
import re

cq_start_pages = [45, 63, 78, 101, 122, 141, 154, 164, 179, 204, 225, 255, 284, 301, 314, 324, 340, 352, 362, 373, 382, 392, 407, 422, 438, 452, 460, 486, 501, 510, 516, 526, 541, 559, 570, 586, 595, 605, 617, 634]

with pdfplumber.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf') as pdf:
    for ch_idx in range(1, 6):
        p_start = cq_start_pages[ch_idx - 1] - 1
        ch_text = ""
        for p in range(p_start, min(len(pdf.pages), p_start + 3)):
            page = pdf.pages[p]
            w, h = page.width, page.height
            left = page.crop((0, 30, w/2, h - 30)).extract_text() or ""
            right = page.crop((w/2, 30, w, h - 30)).extract_text() or ""
            ch_text += "\n" + left + "\n" + right
            if "The answers to the Challenge Questions" in ch_text or "evolve.elsevier.com" in ch_text:
                break
                
        pos_s = ch_text.find("CHALLENGE QUESTIONS")
        if pos_s != -1:
            ch_text = ch_text[pos_s + len("CHALLENGE QUESTIONS"):]
        pos_e = ch_text.find("The answers to the Challenge Questions")
        if pos_e == -1:
            pos_e = ch_text.find("evolve.elsevier.com")
        if pos_e != -1:
            ch_text = ch_text[:pos_e]
            
        lines = [l.strip() for l in ch_text.splitlines() if l.strip()]
        print(f"=== Chapter {ch_idx} (lines={len(lines)}) ===")
        # find lines starting with number
        q_lines = [l for l in lines if re.match(r'^(?:[0-9]{1,2}|[I|l]0?|[0-9]\s*[.:;])\b', l)]
        print(f"Found {len(q_lines)} candidate question lines:")
        for ql in q_lines:
            print(f"   {ql[:60]}")

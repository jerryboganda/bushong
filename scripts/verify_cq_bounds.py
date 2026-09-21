import fitz

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')

cq_start_pages = [45, 63, 78, 101, 122, 141, 154, 164, 179, 204, 225, 255, 284, 301, 314, 324, 340, 352, 362, 373, 382, 392, 407, 422, 438, 452, 460, 486, 501, 510, 516, 526, 541, 559, 570, 586, 595, 605, 617, 634]

for ch_idx, start_page in enumerate(cq_start_pages, start=1):
    # Check start_page and start_page + 1
    p0 = start_page - 1
    p1 = min(len(doc) - 1, p0 + 1)
    
    txt0 = doc[p0].get_text()
    txt1 = doc[p1].get_text() if p1 > p0 else ""
    
    combined = txt0 + "\n--- PAGE SPLIT ---\n" + txt1
    
    # Locate "CHALLENGE QUESTIONS"
    pos_start = combined.find("CHALLENGE QUESTIONS")
    pos_end = combined.find("The answers to the Challenge Questions")
    if pos_end == -1:
        # maybe "The answers to the Challenge Questions" is on p0 or p1
        pos_end = combined.find("evolve.elsevier.com")
        
    found_start = pos_start != -1
    found_end = pos_end != -1
    cq_len = len(combined[pos_start:pos_end]) if found_start and found_end else 0
    print(f"Ch {ch_idx:2d} (p. {start_page}): start={found_start}, end={found_end}, text_len={cq_len}")

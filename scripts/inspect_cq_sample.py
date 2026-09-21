import fitz
import re

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')

def get_chapter_cq_text(page_indices):
    full_text = ""
    for p in page_indices:
        txt = doc[p].get_text()
        full_text += "\n" + txt
    # find where CHALLENGE QUESTIONS begins
    cq_pos = full_text.find("CHALLENGE QUESTIONS")
    if cq_pos != -1:
        cq_text = full_text[cq_pos:]
    else:
        cq_text = full_text
        
    # find where the evolve notice or chapter ends
    evolve_pos = cq_text.find("The answers to the Challenge Questions")
    if evolve_pos != -1:
        cq_text = cq_text[:evolve_pos]
    return cq_text

for ch_num, pages in [
    (1, [44]),
    (2, [62]),
    (3, [77, 78]),
    (4, [100, 101]),
    (5, [121]),
    (10, [203, 204]),
    (20, [372]),
    (30, [509]),
    (40, [633])
]:
    cq_text = get_chapter_cq_text(pages)
    # count questions like "1.", "2.", etc.
    q_matches = re.findall(r'(?:^|\n)\s*(\d{1,2})\.\s+', cq_text)
    print(f"Chapter {ch_num} (pages {pages}): found question numbers: {q_matches}")

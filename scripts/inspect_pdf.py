import fitz
import re

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')

cq_pages = []
for pno in range(len(doc)):
    txt = doc[pno].get_text()
    if 'CHALLENGE QUESTIONS' in txt.upper():
        cq_pages.append((pno + 1, [line.strip() for line in txt.split('\n') if 'CHALLENGE' in line.upper()]))

print(f"Total pages with CHALLENGE QUESTIONS: {len(cq_pages)}")
for pno, matches in cq_pages:
    print(f"Page {pno}: {matches}")

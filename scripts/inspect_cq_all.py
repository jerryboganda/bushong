import fitz
import re

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')

# Locate all CHALLENGE QUESTIONS sections
cq_starts = []
for pno in range(len(doc)):
    txt = doc[pno].get_text()
    if 'CHALLENGE QUESTIONS' in txt.upper():
        # find line containing CHALLENGE QUESTIONS
        cq_starts.append(pno)

print(f"Total pages with 'CHALLENGE QUESTIONS': {len(cq_starts)}")
print("Pages:", [p+1 for p in cq_starts])

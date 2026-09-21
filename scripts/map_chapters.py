import fitz
import re

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')

# Find pages where "CHAPTER X" or "Chapter X" appears as heading
chapters_found = {}

for pno in range(len(doc)):
    txt = doc[pno].get_text()
    # Check if this page starts a chapter: e.g. "CHAPTER 1", "CHAPTER 2", etc.
    # Often formatted as: "CHAPTER X\n" or "Chapter X\n" or "C H A P T E R  X"
    m = re.search(r'(?:^|\n)\s*(?:CHAPTER|Chapter)\s+(\d{1,2})\b', txt)
    if m:
        ch_num = int(m.group(1))
        if 1 <= ch_num <= 40:
            if ch_num not in chapters_found or pno < chapters_found[ch_num]['start_page']:
                # check if it has "OBJECTIVES" or "OUTLINE" to confirm chapter title page
                if 'OBJECTIVES' in txt or 'OUTLINE' in txt:
                    chapters_found[ch_num] = {'start_page': pno + 1}

# Let's also find all pages with "CHALLENGE QUESTIONS"
cq_pages_by_ch = {}
for pno in range(len(doc)):
    txt = doc[pno].get_text()
    if 'CHALLENGE QUESTIONS' in txt:
        # Which chapter does this belong to?
        # Find closest chapter start <= pno + 1
        # Or look for "CHAPTER X" near the top
        cq_pages_by_ch[pno + 1] = txt.count('CHALLENGE QUESTIONS')

print("Found chapter starts:")
for c in sorted(chapters_found.keys()):
    print(f"Chapter {c}: start page {chapters_found[c]['start_page']}")

print("\nPages with CHALLENGE QUESTIONS:")
print(sorted(cq_pages_by_ch.keys()))

import fitz

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')
p = doc[634]
words = p.get_text("words")

from collections import defaultdict
blocks = defaultdict(lambda: defaultdict(list))
for w in words:
    # w: (x0, y0, x1, y1, word, block_no, line_no, word_no)
    blocks[w[5]][w[6]].append(w)

for b_no in sorted(blocks.keys()):
    b_lines = blocks[b_no]
    print(f"--- Block {b_no} (lines={len(b_lines)}) ---")
    for l_no in sorted(b_lines.keys()):
        line_words = " ".join(w[4] for w in b_lines[l_no])
        print(f"  Line {l_no}: {line_words[:60]}")

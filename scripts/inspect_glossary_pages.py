import fitz

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')

# Check pages 634 through 653
for pno in range(634, 654):
    page = doc[pno]
    rect = page.rect
    mid_x = rect.width / 2
    blocks = page.get_text("blocks")
    # count blocks
    print(f"Page {pno+1} (book p. {pno-19}): {len(blocks)} blocks")

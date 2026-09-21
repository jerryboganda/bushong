import fitz

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')

# Let's inspect pages 634 to 653
for pno in range(634, 654):
    page = doc[pno]
    text = page.get_text()
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    print(f"Page {pno+1}: {len(lines)} lines")

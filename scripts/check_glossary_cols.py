import fitz

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')
page = doc[634]
rect = page.rect
mid_x = rect.width / 2

blocks = page.get_text("blocks")
# separate left and right columns
col_left = [b for b in blocks if b[0] < mid_x and b[1] > 50 and b[3] < rect.height - 40]
col_right = [b for b in blocks if b[0] >= mid_x and b[1] > 50 and b[3] < rect.height - 40]

col_left.sort(key=lambda b: b[1])
col_right.sort(key=lambda b: b[1])

print("LEFT COLUMN FIRST 5 BLOCKS:")
for b in col_left[:5]:
    print("--- BLOCK ---")
    print(b[4].strip())

print("\nRIGHT COLUMN FIRST 5 BLOCKS:")
for b in col_right[:5]:
    print("--- BLOCK ---")
    print(b[4].strip())

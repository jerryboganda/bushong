import fitz
import time

t0 = time.time()
doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')
print(f"Open took {time.time() - t0:.2f}s")

for pno in range(634, 637):
    t1 = time.time()
    d = doc[pno].get_text("dict")
    print(f"Page {pno+1} took {time.time() - t1:.2f}s, blocks={len(d['blocks'])}")

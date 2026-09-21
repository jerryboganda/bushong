import fitz
import time

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')
p = doc[634]
t0 = time.time()
words = p.get_text("words")
print(f"words: {len(words)} in {time.time()-t0:.3f}s", flush=True)

t0 = time.time()
blocks = p.get_text("blocks")
print(f"blocks: {len(blocks)} in {time.time()-t0:.3f}s", flush=True)

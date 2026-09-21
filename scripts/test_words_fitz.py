import fitz

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')
p = doc[634]
words = p.get_text("words")
for w in words[10:35]:
    print(w)

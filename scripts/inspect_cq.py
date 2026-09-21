import fitz

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')
print("Page 44:")
print(doc[43].get_text()[-1000:])
print("="*40)
print("Page 45:")
print(doc[44].get_text()[:2000])

import pdfplumber

with pdfplumber.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf') as pdf:
    p78 = pdf.pages[77]
    w, h = p78.width, p78.height
    print("=== P78 RIGHT ===")
    print(p78.crop((w/2, 30, w, h - 30)).extract_text())
    p79 = pdf.pages[78]
    print("=== P79 LEFT ===")
    print(p79.crop((0, 30, w/2, h - 30)).extract_text())
    print("=== P79 RIGHT ===")
    print(p79.crop((w/2, 30, w, h - 30)).extract_text())

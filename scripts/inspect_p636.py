import pdfplumber

with pdfplumber.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf') as pdf:
    page = pdf.pages[635] # page 636 (book p 616)
    w, h = page.width, page.height
    left = page.crop((0, 50, w/2, h - 40)).extract_text()
    right = page.crop((w/2, 50, w, h - 40)).extract_text()
    print("=== LEFT (first 10 lines) ===")
    for l in left.split('\n')[:10]:
        print(l)
    print("=== RIGHT (first 10 lines) ===")
    for l in right.split('\n')[:10]:
        print(l)

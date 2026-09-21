import pdfplumber

with pdfplumber.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf') as pdf:
    page = pdf.pages[634] # page 635
    w = page.width
    h = page.height
    
    left = page.crop((0, 50, w/2, h - 40))
    right = page.crop((w/2, 50, w, h - 40))
    
    print("=== LEFT COLUMN ===")
    print(left.extract_text()[:1000])
    print("=== RIGHT COLUMN ===")
    print(right.extract_text()[:1000])

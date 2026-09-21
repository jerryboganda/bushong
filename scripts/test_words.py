import pdfplumber

with pdfplumber.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf') as pdf:
    page = pdf.pages[634]
    w, h = page.width, page.height
    left = page.crop((0, 50, w/2, h - 40))
    words = left.extract_words(extra_attrs=['fontname', 'size'])
    for word in words[:40]:
        print(f"{word['text']} | x0={word['x0']:.1f}, x1={word['x1']:.1f}, top={word['top']:.1f} | font={word['fontname']}")

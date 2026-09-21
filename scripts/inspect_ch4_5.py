import pdfplumber

with pdfplumber.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf') as pdf:
    for p_num in [101, 102, 122]:
        page = pdf.pages[p_num - 1]
        w, h = page.width, page.height
        print(f"=== PAGE {p_num} ===")
        txt = page.extract_text() or ""
        print(txt[-1200:] if len(txt) > 1200 else txt)

import pdfplumber

with pdfplumber.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf') as pdf:
    for p_idx in [77, 78]:
        page = pdf.pages[p_idx]
        w, h = page.width, page.height
        left = page.crop((0, 30, w/2, h - 30)).extract_text() or ""
        right = page.crop((w/2, 30, w, h - 30)).extract_text() or ""
        print(f"=== PAGE {p_idx+1} LEFT ===")
        print(left[:600])
        print(f"=== PAGE {p_idx+1} RIGHT ===")
        print(right[:600])

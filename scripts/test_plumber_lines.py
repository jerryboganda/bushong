import pdfplumber

with pdfplumber.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf') as pdf:
    for p_idx in [634, 635]:
        page = pdf.pages[p_idx]
        w, h = page.width, page.height
        left = page.crop((0, 45, w/2, h - 35)).extract_text() or ""
        right = page.crop((w/2, 45, w, h - 35)).extract_text() or ""
        print(f"=== PAGE {p_idx+1} LEFT (lines={len(left.splitlines())}) ===")
        for l in left.splitlines()[:12]:
            print(f"  {l}")
        print(f"=== PAGE {p_idx+1} RIGHT (lines={len(right.splitlines())}) ===")
        for l in right.splitlines()[:12]:
            print(f"  {l}")

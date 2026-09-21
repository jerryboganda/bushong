import fitz

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')
page = doc[634]
raw = page.get_text("rawdict")
# inspect the first few spans
for b in raw['blocks']:
    if 'lines' not in b: continue
    for l in b['lines']:
        for sp in l['spans']:
            # check characters and flags or font
            txt = "".join(c['c'] for c in sp['chars'])
            if 'voltage' in txt or 'Adenine' in txt or 'ALARA' in txt:
                print(f"txt: {txt}, font: {sp['font']}, size: {sp['size']}, flags: {sp['flags']}, color: {sp.get('color')}")

import fitz

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')
page = doc[635] # page 636
rect = page.rect
mid_x = rect.width / 2

blocks = page.get_text("dict")['blocks']
for b in blocks:
    if 'lines' not in b: continue
    for l in b['lines'][:15]:
        spans = [s for s in l['spans'] if s['text'].strip()]
        if not spans: continue
        # print spans with x coordinates
        span_strs = [f"[{s['bbox'][0]:.1f}-{s['bbox'][2]:.1f}: '{s['text'].strip()}']" for s in spans]
        print(" | ".join(span_strs))

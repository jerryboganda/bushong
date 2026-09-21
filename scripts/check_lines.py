import fitz

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')
page = doc[634] # page 635

data = page.get_text("dict")
for b in data['blocks']:
    if 'lines' not in b: continue
    for l in b['lines'][:12]:
        line_text = " ".join(s['text'].strip() for s in l['spans'] if s['text'].strip())
        if not line_text: continue
        sp = l['spans'][0]
        # check if there's any distinction in x-position or font
        print(f"x={l['bbox'][0]:.1f}, y={l['bbox'][1]:.1f} | font={sp['font']} size={sp['size']:.1f} flags={sp['flags']} | {line_text}")

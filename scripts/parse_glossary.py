import fitz

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')
page = doc[634] # Page 635 (0-indexed 634)
blocks = page.get_text('dict')['blocks']
for b in blocks[:15]:
    if 'lines' in b:
        for line in b['lines'][:3]:
            for span in line['spans']:
                font = span['font']
                size = span['size']
                flags = span['flags']
                text = span['text']
                print(f"{font} | size={size:.1f} | flags={flags} | text={text[:40]}")

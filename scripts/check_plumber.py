import pdfplumber

with pdfplumber.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf') as pdf:
    page = pdf.pages[634] # page 635
    text = page.extract_text(layout=True)
    lines = text.split('\n')
    for l in lines[10:35]:
        print(f"|{l}|")

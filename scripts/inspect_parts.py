import re

for p in range(1, 9):
    fname = f"src/data/chaptersPart{p}.ts"
    with open(fname, encoding='utf-8') as f:
        txt = f.read()
    print(f"Part {p}: length={len(txt)}, chapters in file:")
    chs = re.findall(r'number:\s*(\d+)', txt)
    print(f"  Chapters: {chs}")

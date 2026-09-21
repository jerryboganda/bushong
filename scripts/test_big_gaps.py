import pdfplumber

with pdfplumber.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf') as pdf:
    for p_idx in [634, 635, 636, 637]:
        page = pdf.pages[p_idx]
        w, h = page.width, page.height
        for col_name, col_rect in [("left", (0, 45, w/2, h - 35)), ("right", (w/2, 45, w, h - 35))]:
            cropped = page.crop(col_rect)
            words = cropped.extract_words()
            # group words by line top
            lines = []
            cur_line = []
            cur_top = None
            for wd in words:
                top = wd['top']
                if cur_top is None:
                    cur_top = top
                    cur_line.append(wd)
                elif abs(top - cur_top) < 4:
                    cur_line.append(wd)
                else:
                    lines.append(cur_line)
                    cur_line = [wd]
                    cur_top = top
            if cur_line:
                lines.append(cur_line)
                
            # inspect the first word of each line
            for l in lines[:10]:
                text = " ".join(w['text'] for w in l)
                # check inter-word gaps
                gaps = [(l[i]['text'], l[i+1]['text'], round(l[i+1]['x0'] - l[i]['x1'], 1)) for i in range(len(l)-1)]
                big_gaps = [g for g in gaps if g[2] >= 9.0]
                if big_gaps:
                    print(f"P{p_idx+1} {col_name}: BIG GAP in '{text[:40]}...': {big_gaps}")

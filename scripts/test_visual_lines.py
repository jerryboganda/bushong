import fitz
from collections import defaultdict

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')

def extract_column_visual_lines(page, x_min, x_max):
    words = page.get_text("words")
    # filter words in this column range, ignore headers (y < 45) and footers (y > 720)
    col_words = [w for w in words if x_min <= w[0] <= x_max and 45 <= w[1] <= 720]
    
    # cluster into lines by y-center
    # w: (x0, y0, x1, y1, word, block_no, line_no, word_no)
    lines_by_y = []
    # sort by y0, then x0
    col_words.sort(key=lambda w: (w[1], w[0]))
    
    current_line = []
    current_y = None
    
    for w in col_words:
        y_mid = (w[1] + w[3]) / 2
        if current_y is None:
            current_y = y_mid
            current_line.append(w)
        elif abs(y_mid - current_y) < 4.0: # same line
            current_line.append(w)
            # update running y
            current_y = (current_y * (len(current_line)-1) + y_mid) / len(current_line)
        else:
            current_line.sort(key=lambda w: w[0])
            lines_by_y.append(current_line)
            current_line = [w]
            current_y = y_mid
            
    if current_line:
        current_line.sort(key=lambda w: w[0])
        lines_by_y.append(current_line)
        
    return lines_by_y

lines = extract_column_visual_lines(doc[634], 0, doc[634].rect.width / 2)
print(f"Total visual lines on page 635 left col: {len(lines)}")
for l in lines[:15]:
    line_str = ""
    for i, w in enumerate(l):
        if i > 0:
            gap = w[0] - l[i-1][2]
            if gap > 8.0:
                line_str += f"  <GAP {gap:.1f}>  "
            else:
                line_str += " "
        line_str += w[4]
    print(f"y={l[0][1]:.1f} | {line_str}")

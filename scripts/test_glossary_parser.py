import fitz
import re

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')

def parse_glossary_column(lines, col_x_start):
    entries = []
    current_term = ""
    current_def = []
    
    # We examine each line
    for l in lines:
        spans = [s for s in l['spans'] if s['text'].strip()]
        if not spans:
            continue
            
        line_start_x = spans[0]['bbox'][0]
        # Ignore page header/footer
        if l['bbox'][1] < 45 or l['bbox'][3] > 730:
            continue
        line_text = " ".join(s['text'].strip() for s in spans)
        if line_text in ['GLOSSARY', 'Glossary']:
            continue
        if 'Units are shown in parentheses' in line_text:
            continue
            
        # Check if this line starts a new term.
        # A new term line starts near col_x_start (within 15 pts)
        # And within this line, there is a split between term and definition,
        # OR the term is short and the definition starts after a gap >= 8 pts,
        # OR the term is the entire line and definition starts on the next line.
        
        # Let's see if there is a gap > 8 pts between consecutive spans in this line
        split_idx = -1
        for i in range(len(spans) - 1):
            gap = spans[i+1]['bbox'][0] - spans[i]['bbox'][2]
            # If gap is notably large (> 8 pt)
            if gap >= 8.0:
                # Also check if spans[i+1] starts with Capital or 'a.'
                t_next = spans[i+1]['text'].strip()
                if t_next and (t_next[0].isupper() or t_next.startswith('a.') or t_next.startswith('1.') or t_next.startswith('(')):
                    split_idx = i + 1
                    break
                    
        # Check if line_start_x is near col margin:
        is_margin = abs(line_start_x - col_x_start) < 15
        
        if is_margin and split_idx != -1:
            # We found a new term!
            term = " ".join(s['text'].strip() for s in spans[:split_idx])
            definition = " ".join(s['text'].strip() for s in spans[split_idx:])
            entries.append((term, definition))
        elif is_margin and len(spans) <= 3 and not entries:
            # First entry or continuation?
            pass
        elif entries:
            # Continuation of previous entry definition
            prev_t, prev_d = entries[-1]
            entries[-1] = (prev_t, prev_d + " " + line_text)
            
    return entries

all_entries = []
for pno in range(634, 654):
    page = doc[pno]
    rect = page.rect
    mid_x = rect.width / 2
    
    blocks = page.get_text("dict")['blocks']
    left_lines = []
    right_lines = []
    for b in blocks:
        if 'lines' not in b: continue
        for l in b['lines']:
            if l['bbox'][0] < mid_x:
                left_lines.append(l)
            else:
                right_lines.append(l)
                
    left_lines.sort(key=lambda l: l['bbox'][1])
    right_lines.sort(key=lambda l: l['bbox'][1])
    
    # Left col starts ~17, right col starts ~282
    left_entries = parse_glossary_column(left_lines, 17.0)
    right_entries = parse_glossary_column(right_lines, 282.0)
    
    all_entries.extend(left_entries)
    all_entries.extend(right_entries)

print(f"Total entries extracted: {len(all_entries)}")
for t, d in all_entries[:15]:
    print(f"[{t}] -> {d[:60]}...")

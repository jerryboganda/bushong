import pdfplumber
import re
import json

with pdfplumber.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf') as pdf:
    extracted_terms = []
    
    for p_idx in range(634, 654):
        page = pdf.pages[p_idx]
        w, h = page.width, page.height
        
        for col_rect in [(0, 45, w/2, h - 35), (w/2, 45, w, h - 35)]:
            cropped = page.crop(col_rect)
            words = cropped.extract_words()
            if not words: continue
            
            # group words into lines by top
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
                
            for l in lines:
                l_text = " ".join(wd['text'] for wd in l).strip()
                if not l_text or l_text in ['GLOSSARY', 'Glossary'] or l_text.startswith('Units are shown in parentheses'):
                    continue
                # ignore page number lines (e.g. single number like 615, 616)
                if re.match(r'^\d{3}$', l_text):
                    continue
                    
                # Find if there is a gap >= 11.0
                split_idx = -1
                for i in range(len(l) - 1):
                    gap = l[i+1]['x0'] - l[i]['x1']
                    if gap >= 11.0:
                        nxt = l[i+1]['text']
                        # Next word must be start of definition
                        if nxt[0].isupper() or nxt.startswith('a.') or nxt.startswith('1.') or nxt.startswith('('):
                            split_idx = i + 1
                            break
                            
                if split_idx != -1:
                    term = " ".join(wd['text'] for wd in l[:split_idx]).strip()
                    defn = " ".join(wd['text'] for wd in l[split_idx:]).strip()
                    extracted_terms.append({'term': term, 'definition': defn})
                elif len(l) <= 6 and (l[0]['text'][0].isupper() or l[0]['text'][0].isdigit()) and not l_text.endswith('.'):
                    # Could be a standalone term heading on its own line
                    # e.g. "American Society of Radiologic Technologists (ASRT)"
                    extracted_terms.append({'term': l_text, 'definition': ''})
                else:
                    # Continuation of definition
                    if extracted_terms:
                        if extracted_terms[-1]['definition']:
                            extracted_terms[-1]['definition'] += " " + l_text
                        else:
                            extracted_terms[-1]['definition'] = l_text

print(f"Total extracted terms: {len(extracted_terms)}")
for t in extracted_terms[:20]:
    print(f"[{t['term']}] -> {t['definition'][:60]}...")
print("...")
for t in extracted_terms[-10:]:
    print(f"[{t['term']}] -> {t['definition'][:60]}...")

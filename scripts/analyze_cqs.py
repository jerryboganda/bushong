import json
import re

with open('scripts/all_cq_raw.json', encoding='utf-8') as f:
    data = json.load(f)

for ch_num in range(1, 41):
    ch_data = data[str(ch_num)]
    lines = ch_data['lines']
    
    # Let's inspect lines that start a question
    # In Bushong, questions are numbered 1 to ~20.
    # Because of font glyph issues, some numbers might be '.', 'i)', etc., or standard digits.
    # Let's see all lines that look like candidate questions or have '?'
    q_candidates = []
    for l in lines:
        if re.search(r'\?$', l) or re.match(r'^(?:\d{1,2}|[I|l]0?|[a-j]\.)\b', l) or 'Define or' in l:
            q_candidates.append(l)
            
    print(f"Ch {ch_num:2d}: {len(lines)} lines, {len(q_candidates)} question candidates")

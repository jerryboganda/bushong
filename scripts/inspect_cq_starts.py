import json
import re

with open('scripts/all_cq_raw.json', encoding='utf-8') as f:
    data = json.load(f)

for ch_str in sorted(data.keys(), key=int):
    ch_num = int(ch_str)
    raw = data[ch_str]['raw']
    lines = data[ch_str]['lines']
    
    # Let's inspect how questions start.
    # In each chapter:
    # Look for question boundaries.
    print(f"=== Chapter {ch_num} (lines: {len(lines)}) ===")
    for idx, l in enumerate(lines[:6]):
        print(f"  [{idx}] {l}")

import json

with open('scripts/all_cq_raw.json', encoding='utf-8') as f:
    data = json.load(f)

for ch_num in range(6, 16):
    lines = data[str(ch_num)]['lines']
    print(f"=== Chapter {ch_num} ({len(lines)} lines) ===")
    for l in lines[:10]:
        print("  ", l)

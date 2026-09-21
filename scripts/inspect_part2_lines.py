import json

with open('scripts/all_cq_raw.json', encoding='utf-8') as f:
    data = json.load(f)

for ch in [5, 6, 7, 8, 9]:
    print(f"=== CHAPTER {ch} ===")
    lines = data[str(ch)]['lines']
    for l in lines:
        print(l)

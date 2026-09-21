import json

with open('scripts/all_cq_raw.json', encoding='utf-8') as f:
    data = json.load(f)

for ch in [1, 2, 3, 4]:
    print(f"=== CHAPTER {ch} ===")
    lines = data[str(ch)]['lines']
    for l in lines:
        print(l)

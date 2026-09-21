import json

with open('scripts/all_cq_raw.json', encoding='utf-8') as f:
    data = json.load(f)

for part_idx, chs in [
    (3, [10, 11, 12, 13]),
    (4, [14, 15, 16, 17, 18]),
    (5, [19, 20, 21, 22]),
    (6, [23, 24, 25, 26, 27, 28]),
    (7, [29, 30, 31, 32, 33, 34]),
    (8, [35, 36, 37, 38, 39, 40])
]:
    print(f"\n================ PART {part_idx} ================")
    for ch in chs:
        lines = data[str(ch)]['lines']
        print(f"--- Chapter {ch} ({len(lines)} lines) ---")
        for l in lines[:8]:
            print("  ", l)

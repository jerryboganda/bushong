import json

with open('scripts/glossary_raw_lines.json', encoding='utf-8') as f:
    lines = json.load(f)

print(f"Total lines: {len(lines)}")
for i, l in enumerate(lines[:30]):
    print(f"{i:2d}: {l}")

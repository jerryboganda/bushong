import json

with open('scripts/all_cq_raw.json', encoding='utf-8') as f:
    data = json.load(f)

def print_chapter(ch_num):
    print(f"================ CHAPTER {ch_num} ================")
    lines = data[str(ch_num)]['lines']
    for l in lines:
        print(l)

print_chapter(2)
print_chapter(4)
print_chapter(5)

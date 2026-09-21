import re

for part in range(1, 9):
    fname = f"src/data/chaptersPart{part}.ts"
    with open(fname, encoding='utf-8') as f:
        text = f.read()
    matches = list(re.finditer(r'challengeQuestions:\s*\[', text))
    print(f"Part {part}: found {len(matches)} challengeQuestions occurrences")

import re
import json
import os

def audit_everything():
    total_qs = 0
    total_penguins = 0
    total_formulas = 0
    total_sections = 0
    issues = []

    for part in range(1, 9):
        path = f"src/data/chaptersPart{part}.ts"
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()

        ch_matches = list(re.finditer(r"\{\s*number:\s*(\d+),\s*title:\s*([\"'].*?[\"'])", content))
        for i, m in enumerate(ch_matches):
            ch_num = int(m.group(1))
            ch_title = m.group(2).strip("\"'")
            start_pos = m.start()
            end_pos = ch_matches[i+1].start() if i+1 < len(ch_matches) else len(content)
            ch_text = content[start_pos:end_pos]

            sec_matches = re.findall(r"id:\s*[\"']c\d+-s", ch_text)
            penguin_matches = re.findall(r"id:\s*[\"']p-\d+-", ch_text)
            formula_matches = re.findall(r"id:\s*[\"']f-", ch_text)

            total_sections += len(sec_matches)
            total_penguins += len(penguin_matches)
            total_formulas += len(formula_matches)

            # CQs
            cq_m = re.search(r"challengeQuestions:\s*\[(.*?)\]\s*(?=\n\s*\}\s*[,\]])", ch_text, re.DOTALL)
            if not cq_m:
                issues.append(f"Ch {ch_num}: Missing challengeQuestions block")
                continue

            cq_body = cq_m.group(1)
            q_splits = re.findall(r"\{\s*id:\s*([^\n]+?),\s*questionNumber:\s*(\d+),\s*chapterNumber:\s*(\d+),\s*question:\s*(\".*?\"),\s*answer:\s*(\".*?\"),\s*explanation:\s*(\".*?\")\s*\}", cq_body, re.DOTALL)
            q_count = len(q_splits)
            total_qs += q_count

            nums = [int(q[1]) for q in q_splits]
            expected = list(range(1, q_count + 1))
            if nums != expected:
                issues.append(f"Ch {ch_num}: question numbering issue: got {nums}, expected {expected}")

            for q in q_splits:
                if int(q[2]) != ch_num:
                    issues.append(f"Ch {ch_num} Q{q[1]}: chapterNumber mismatch: {q[2]}")

    print(f"=== FULL AUDIT SUMMARY ===")
    print(f"Total Chapters Audited: 40")
    print(f"Total Detailed Sections: {total_sections}")
    print(f"Total Penguin Key Concepts: {total_penguins}")
    print(f"Total Physics Formulas: {total_formulas}")
    print(f"Total Challenge Questions: {total_qs}")

    # Audit Glossary
    with open("src/data/glossaryData.ts", "r", encoding="utf-8") as f:
        gloss_text = f.read()

    marker = "export const BUSHONG_GLOSSARY: GlossaryItem[] = "
    pos = gloss_text.find(marker)
    start = pos + len(marker)
    end = gloss_text.rfind(";")
    gloss_items = json.loads(gloss_text[start:end].strip())
    print(f"Total Glossary Terms: {len(gloss_items)}")

    # Check for quote corruption
    corrupted_terms = [item for item in gloss_items if "''" in item['term'] or "''" in item['definition']]
    if corrupted_terms:
        issues.append(f"Glossary contains {len(corrupted_terms)} corrupted terms!")

    if issues:
        print("\nISSUES DETECTED:")
        for iss in issues:
            print(" -", iss)
        return False
    else:
        print("\nALL AUDITS PASSED WITH ZERO ISSUES!")
        return True

if __name__ == "__main__":
    audit_everything()

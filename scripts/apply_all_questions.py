import json
import re
import sys
import os

sys.path.insert(0, os.path.abspath("."))

import scripts.questions_part1 as p1
import scripts.questions_part2 as p2
import scripts.questions_part3 as p3
import scripts.questions_part4 as p4
import scripts.questions_part5 as p5
import scripts.questions_part6 as p6
import scripts.questions_part7 as p7
import scripts.questions_part8 as p8

CHAPTER_QUESTIONS = {
    1: p1.CHAPTER_1_QUESTIONS,
    2: p1.CHAPTER_2_QUESTIONS,
    3: p1.CHAPTER_3_QUESTIONS,
    4: p1.CHAPTER_4_QUESTIONS,
    5: p2.CHAPTER_5_QUESTIONS,
    6: p2.CHAPTER_6_QUESTIONS,
    7: p2.CHAPTER_7_QUESTIONS,
    8: p2.CHAPTER_8_QUESTIONS,
    9: p2.CHAPTER_9_QUESTIONS,
    10: p3.CHAPTER_10_QUESTIONS,
    11: p3.CHAPTER_11_QUESTIONS,
    12: p3.CHAPTER_12_QUESTIONS,
    13: p3.CHAPTER_13_QUESTIONS,
    14: p4.CHAPTER_14_QUESTIONS,
    15: p4.CHAPTER_15_QUESTIONS,
    16: p4.CHAPTER_16_QUESTIONS,
    17: p4.CHAPTER_17_QUESTIONS,
    18: p4.CHAPTER_18_QUESTIONS,
    19: p5.CHAPTER_19_QUESTIONS,
    20: p5.CHAPTER_20_QUESTIONS,
    21: p5.CHAPTER_21_QUESTIONS,
    22: p5.CHAPTER_22_QUESTIONS,
    23: p6.CHAPTER_23_QUESTIONS,
    24: p6.CHAPTER_24_QUESTIONS,
    25: p6.CHAPTER_25_QUESTIONS,
    26: p6.CHAPTER_26_QUESTIONS,
    27: p6.CHAPTER_27_QUESTIONS,
    28: p6.CHAPTER_28_QUESTIONS,
    29: p7.CHAPTER_29_QUESTIONS,
    30: p7.CHAPTER_30_QUESTIONS,
    31: p7.CHAPTER_31_QUESTIONS,
    32: p7.CHAPTER_32_QUESTIONS,
    33: p7.CHAPTER_33_QUESTIONS,
    34: p7.CHAPTER_34_QUESTIONS,
    35: p8.CHAPTER_35_QUESTIONS,
    36: p8.CHAPTER_36_QUESTIONS,
    37: p8.CHAPTER_37_QUESTIONS,
    38: p8.CHAPTER_38_QUESTIONS,
    39: p8.CHAPTER_39_QUESTIONS,
    40: p8.CHAPTER_40_QUESTIONS,
}

def format_question_ts(q):
    lines = ["      {"]
    lines.append(f"        id: {json.dumps(q['id'])},")
    lines.append(f"        questionNumber: {q['questionNumber']},")
    lines.append(f"        chapterNumber: {q['chapterNumber']},")
    lines.append(f"        question: {json.dumps(q['question'])},")
    if "answer" in q and q["answer"]:
        lines.append(f"        answer: {json.dumps(q['answer'])},")
    if "explanation" in q and q["explanation"]:
        lines.append(f"        explanation: {json.dumps(q['explanation'])}")
    lines.append("      }")
    return "\n".join(lines)

def format_cq_block(questions):
    formatted_qs = ",\n".join(format_question_ts(q) for q in questions)
    return f"challengeQuestions: [\n{formatted_qs}\n    ]"

def update_part_file(part_idx):
    file_path = f"src/data/chaptersPart{part_idx}.ts"
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    ch_starts = list(re.finditer(r"\{\s*number:\s*(\d+),", content))
    if not ch_starts:
        print(f"Error: No chapters found in {file_path}")
        return False

    # Process chapters in reverse order so character offsets in earlier chapters remain valid
    for i in reversed(range(len(ch_starts))):
        m = ch_starts[i]
        ch_num = int(m.group(1))
        if ch_num not in CHAPTER_QUESTIONS:
            print(f"Warning: Chapter {ch_num} has no questions mapped!")
            continue

        start_pos = m.start()
        end_pos = ch_starts[i + 1].start() if i + 1 < len(ch_starts) else len(content)
        ch_text = content[start_pos:end_pos]

        cq_m = re.search(r"challengeQuestions:\s*\[(.*?)\]\s*(?=\n\s*\}(?:,|\s*;|\s*\]))", ch_text, re.DOTALL)
        if not cq_m:
            print(f"Error: Could not find challengeQuestions block in Chapter {ch_num}!")
            return False

        new_cq_block = format_cq_block(CHAPTER_QUESTIONS[ch_num])
        
        # Replace in ch_text
        cq_start = cq_m.start()
        cq_end = cq_m.end()
        new_ch_text = ch_text[:cq_start] + new_cq_block + ch_text[cq_end:]

        # Replace in content
        content = content[:start_pos] + new_ch_text + content[end_pos:]
        print(f"Updated Chapter {ch_num} in Part {part_idx} with {len(CHAPTER_QUESTIONS[ch_num])} questions.")

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Successfully saved updated {file_path}!")
    return True

def main():
    total_q_count = sum(len(qs) for qs in CHAPTER_QUESTIONS.values())
    print(f"Applying {total_q_count} questions across all 40 chapters...")
    for part_idx in range(1, 9):
        ok = update_part_file(part_idx)
        if not ok:
            print(f"Aborting on part {part_idx}")
            sys.exit(1)
    print("All 8 parts updated successfully!")

if __name__ == "__main__":
    main()

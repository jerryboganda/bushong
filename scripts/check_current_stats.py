import re
import glob

files = sorted(glob.glob('src/data/chaptersPart*.ts'))
for f in files:
    with open(f, encoding='utf-8') as fp:
        content = fp.read()
    
    # find chapters
    ch_nums = re.findall(r'number:\s*(\d+)', content)
    penguins = len(re.findall(r'id:\s*[\'"]p-', content))
    formulas = len(re.findall(r'id:\s*[\'"]f-', content))
    questions = len(re.findall(r'id:\s*[\'"]q\d', content))
    sections = len(re.findall(r'id:\s*[\'"]c\d+-s', content))
    print(f"{f}: Chapters {ch_nums} | sections={sections}, penguins={penguins}, formulas={formulas}, questions={questions}")

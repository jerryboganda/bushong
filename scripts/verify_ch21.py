import fitz

doc = fitz.open('Radiologic science for technologists  physics, biology, and protection (Bushong, Stewart C., author) (z-library.sk, 1lib.sk, z-lib.sk).pdf')
txt = doc[381].get_text() + "\n" + doc[382].get_text() + "\n" + doc[383].get_text()
pos_s = txt.find("CHALLENGE QUESTIONS")
pos_e = txt.find("The answers to the Challenge Questions")
print("Ch 21 length:", len(txt[pos_s:pos_e]))
print("First 200 chars:", txt[pos_s:pos_s+200])

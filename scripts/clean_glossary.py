import json
import re

# Let's clean and validate the extracted terms
with open('scripts/test_full_glossary_parse.py') as f:
    pass

# We can run a dedicated cleaning function:
def clean_term_and_def(term, defn):
    term = term.strip()
    defn = defn.strip()
    
    # Fix hyphenation across lines: e.g. "radi- ography" -> "radiography", "micro- waves" -> "microwaves"
    defn = re.sub(r'(\b[a-zA-Z]+)-\s+([a-zA-Z]+\b)', r'\1\2', defn)
    term = re.sub(r'(\b[a-zA-Z]+)-\s+([a-zA-Z]+\b)', r'\1\2', term)
    
    # Fix encoding glitches like  -> appropriate character or remove
    defn = defn.replace('', "'")
    term = term.replace('', "'")
    
    # Fix spaces around punctuation
    defn = re.sub(r'\s+([,.:;])', r'\1', defn)
    term = re.sub(r'\s+([,.:;])', r'\1', term)
    
    # Normalize multiple whitespace
    term = re.sub(r'\s+', ' ', term)
    defn = re.sub(r'\s+', ' ', defn)
    
    return term, defn

print("Cleaner ready.")

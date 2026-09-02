import re
import json

with open('gdrive_raw.html', 'r', encoding='utf-8') as f:
    html = f.read()

callbacks = re.findall(r'AF_initDataCallback\((\{.*?\})\);', html, re.DOTALL)
if len(callbacks) >= 5:
    cb4 = callbacks[4]
    with open('cb4.json', 'w', encoding='utf-8') as f:
        f.write(cb4)
    print("cb4 saved, searching items...")

    # Let's find all file IDs, file names, thumbnails in cb4
    # Regex for file entries: ["ID", ["FILENAME", ...]] or similar
    matches = re.findall(r'\["([a-zA-Z0-9_-]{20,})",\s*\["([^"]+)"', cb4)
    print("Found matches:", len(matches))
    for m in matches:
        print("Match:", m)

    # Also search for all strings ending in .png, .jpg, .jpeg, etc.
    all_strs = re.findall(r'"([^"]+)"', cb4)
    for s in all_strs:
        if '.' in s and len(s) < 100:
            print("String with dot:", s)

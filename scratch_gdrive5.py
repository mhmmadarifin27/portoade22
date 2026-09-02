import json
import re

with open('cb4.json', 'r', encoding='utf-8') as f:
    text = f.read()

match = re.search(r'data:\s*(\[.*\])\s*,\s*sideChannel:', text, re.DOTALL)
if match:
    data = json.loads(match.group(1))
    items = data[27][7][0][0]
    print(f"Total folder items: {len(items)}")
    for i, item in enumerate(items):
        folder_id = item[0]
        # folder name is usually at item[24][2][0][2][1][0][0][0] or item[35][0][0][0]
        # let's search all strings in item
        names = []
        def get_names(sub):
            if isinstance(sub, str) and len(sub) < 100 and not sub.startswith('http') and sub != 'application/vnd.google-apps.folder' and sub != 'Shared folder':
                names.append(sub)
            elif isinstance(sub, list):
                for x in sub:
                    get_names(x)
        get_names(item)
        print(f"Folder {i}: ID = {folder_id}, Names = {set(names)}")

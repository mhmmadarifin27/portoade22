import re
import json

with open('folder_sample.html', 'r', encoding='utf-8') as f:
    html = f.read()

callbacks = re.findall(r'AF_initDataCallback\((\{.*?\})\);', html, re.DOTALL)
cb4 = callbacks[4]
match = re.search(r'data:\s*(\[.*\])\s*,\s*sideChannel:', cb4, re.DOTALL)
if not match:
    match = re.search(r'data:\s*(\[.*\])\s*\}\s*$', cb4, re.DOTALL)

if match:
    data = json.loads(match.group(1))
    items = data[27][7][0][0]
    print(f"Total items in folder: {len(items)}")
    for i, item in enumerate(items):
        file_id = item[0]
        # let's search all strings in item
        names = []
        def get_names(sub):
            if isinstance(sub, str) and len(sub) < 100:
                names.append(sub)
            elif isinstance(sub, list):
                for x in sub:
                    get_names(x)
        get_names(item)
        print(f"Item {i}: ID = {file_id}, Strings = {set(names)}")

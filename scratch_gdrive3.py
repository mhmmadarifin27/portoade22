import json
import re

with open('cb4.json', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's extract the data object from AF_initDataCallback({key: 'ds:1', hash: '...', data: [...]})
match = re.search(r'data:\s*(\[.*\])\s*,\s*sideChannel:', text, re.DOTALL)
if not match:
    match = re.search(r'data:\s*(\[.*\])\s*\}\s*$', text, re.DOTALL)

if match:
    data_str = match.group(1)
    # Parse json or evaluate
    data = json.loads(data_str)
    print("Parsed JSON data successfully!")
    
    # Recursive search for folder/file items
    def find_items(obj):
        results = []
        if isinstance(obj, list):
            # Check if this list looks like [id, name, mimeType, ...]
            if len(obj) >= 3 and isinstance(obj[0], str) and len(obj[0]) > 20 and isinstance(obj[1], str) and len(obj[1]) > 0:
                results.append((obj[0], obj[1]))
            for item in obj:
                results.extend(find_items(item))
        elif isinstance(obj, dict):
            for k, v in obj.items():
                results.extend(find_items(v))
        return results

    items = find_items(data)
    print(f"Found {len(items)} items:")
    for it in set(items):
        print(it)
else:
    print("Could not match data block directly, let's regex search strings")
    # find sequences of strings
    strs = re.findall(r'\["([a-zA-Z0-9_-]{20,})",\s*"([^"]+)"', text)
    print("Regex tuples:", strs)

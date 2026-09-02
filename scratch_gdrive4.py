import json
import re

with open('cb4.json', 'r', encoding='utf-8') as f:
    text = f.read()

match = re.search(r'data:\s*(\[.*\])\s*,\s*sideChannel:', text, re.DOTALL)
if match:
    data = json.loads(match.group(1))
    
    def dump_strings(obj, path=""):
        if isinstance(obj, str):
            if any(term in obj.lower() for term in ['toko', 'batik', 'gudang', 'inventory', 'koperasi', 'mandalagiri', 'sibos', 'kilang', 'pertamina', 'sistem', 'folder']):
                print(f"{path}: {obj}")
        elif isinstance(obj, list):
            for i, item in enumerate(obj):
                dump_strings(item, f"{path}[{i}]")
        elif isinstance(obj, dict):
            for k, v in obj.items():
                dump_strings(v, f"{path}.{k}")

    dump_strings(data)

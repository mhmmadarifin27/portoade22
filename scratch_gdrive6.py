import urllib.request
import re
import json
import os

folders = {
    'academic-information-system': '16Oav72iaKdABm2EMhAs6dV1PjPCpNNYS',
    'inventory-system': '1fsZ6svas2q4gpPnXksxVd3VgxTaBzop0',
    'sibos': '1W2VxBKZmPJWPE7tP5k652v96ULXVm9tm',
    'batik': '19VCAEuhtYSj81p5GQbz8hgIqsb7vsQH0',
    'gudang-barang': '1wA_qFwE4NaPtH2nrmGw0B0iDIoEgofUl',
    'mandalagiri-coffee': '1rnFuyR-4kCFi-oCZfFlR6hCugMS1oHYQ',
    'kilang-ru3': '1PDJoiaPnZityI6q97pT5inbJW5t-5kcW',
    'toko-bangunan': '1cnIsL2cliukPj_v1CUtmTtdjJ42Sc4ZS'
}

def get_folder_files(folder_id):
    url = f'https://drive.google.com/drive/folders/{folder_id}'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching {folder_id}: {e}")
        return []
    
    callbacks = re.findall(r'AF_initDataCallback\((\{.*?\})\);', html, re.DOTALL)
    files = []
    for cb in callbacks:
        match = re.search(r'data:\s*(\[.*\])\s*,\s*sideChannel:', cb, re.DOTALL)
        if not match:
            match = re.search(r'data:\s*(\[.*\])\s*\}\s*$', cb, re.DOTALL)
        if match:
            try:
                data = json.loads(match.group(1))
                # Search recursively for file items
                def find_files(obj):
                    if isinstance(obj, list):
                        # check if it's a file descriptor: [id, name, mimeType, ...]
                        # or [..., file_id, ..., filename]
                        for idx, el in enumerate(obj):
                            if isinstance(el, str) and (el.lower().endswith('.png') or el.lower().endswith('.jpg') or el.lower().endswith('.jpeg') or el.lower().endswith('.webp')):
                                # find id nearby
                                for nearby in obj:
                                    if isinstance(nearby, str) and len(nearby) in range(25, 45) and not ' ' in nearby and not '.' in nearby:
                                        files.append((nearby, el))
                                        break
                                else:
                                    # search recursively in obj
                                    pass
                        for x in obj:
                            find_files(x)
                    elif isinstance(obj, dict):
                        for k, v in obj.items():
                            find_files(v)
                find_files(data)
            except Exception as ex:
                pass
    return list(set(files))

all_files = {}
for name, fid in folders.items():
    res = get_folder_files(fid)
    all_files[name] = res
    print(f"Project '{name}' (ID: {fid}): {len(res)} files found -> {res}")

with open('gdrive_files.json', 'w') as f:
    json.dump(all_files, f, indent=2)

import urllib.request
import re
import json

fid = '1cnIsL2cliukPj_v1CUtmTtdjJ42Sc4ZS'
url = f'https://drive.google.com/drive/folders/{fid}'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')

with open('folder_sample.html', 'w', encoding='utf-8') as f:
    f.write(html)

callbacks = re.findall(r'AF_initDataCallback\((\{.*?\})\);', html, re.DOTALL)
print(f"Callbacks count: {len(callbacks)}")

for i, cb in enumerate(callbacks):
    print(f"CB {i} len: {len(cb)}")
    # print strings with image or file extensions
    strs = re.findall(r'"([^"]+)"', cb)
    valid_strs = [s for s in strs if any(ext in s.lower() for ext in ['.png', '.jpg', '.jpeg', '.webp', 'image', 'screenshot', 'toko', 'pos'])]
    print(f"CB {i} interesting: {valid_strs[:10]}")

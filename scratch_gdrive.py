import urllib.request
import re
import json

url = 'https://drive.google.com/drive/folders/1HekeX44It_LTjyLJBWONWltQSXp7kvId?usp=sharing'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')

with open('gdrive_raw.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Saved gdrive_raw.html, length:", len(html))

# Let's inspect scripts and data callbacks
callbacks = re.findall(r'AF_initDataCallback\((\{.*?\})\);', html, re.DOTALL)
print("Callbacks count:", len(callbacks))

for idx, cb in enumerate(callbacks):
    print(f"Callback {idx} length: {len(cb)}")
    # search for strings in callback
    keys = re.findall(r'"([^"]{4,100})"', cb)
    keywords = [k for k in keys if any(w in k.lower() for w in ['project', 'image', 'png', 'jpg', 'jpeg', 'batik', 'toko', 'sibos', 'kilang', 'koperasi', 'foto'])]
    if keywords:
        print(f"Callback {idx} interesting keys:", keywords[:20])

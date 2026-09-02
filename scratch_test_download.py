import urllib.request

file_id = '133P58vF3nqlXHsyoIODPDtl0zyzBVfCH'
# Let's test different download urls
urls = [
    f'https://drive.google.com/uc?export=download&id={file_id}',
    f'https://drive.usercontent.google.com/download?id={file_id}&export=download',
    f'https://lh3.googleusercontent.com/d/{file_id}'
]

for u in urls:
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        res = urllib.request.urlopen(req)
        content = res.read()
        print(f"URL: {u} -> Status: {res.status}, Length: {len(content)}, Content-Type: {res.headers.get('Content-Type')}")
        if len(content) > 1000 and 'image' in res.headers.get('Content-Type', ''):
            with open('test_download.png', 'wb') as f:
                f.write(content)
            print("Successfully saved test_download.png!")
            break
    except Exception as e:
        print(f"URL: {u} -> Error: {e}")

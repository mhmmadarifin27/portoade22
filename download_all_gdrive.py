import urllib.request
import re
import json
import os
import time

project_folders = {
    'academic-information-system': '16Oav72iaKdABm2EMhAs6dV1PjPCpNNYS',
    'inventory-system': '1fsZ6svas2q4gpPnXksxVd3VgxTaBzop0',
    'sibos': '1W2VxBKZmPJWPE7tP5k652v96ULXVm9tm',
    'batik': '19VCAEuhtYSj81p5GQbz8hgIqsb7vsQH0',
    'gudang-barang': '1wA_qFwE4NaPtH2nrmGw0B0iDIoEgofUl',
    'mandalagiri-coffee': '1rnFuyR-4kCFi-oCZfFlR6hCugMS1oHYQ',
    'kilang-ru3': '1PDJoiaPnZityI6q97pT5inbJW5t-5kcW',
    'toko-bangunan': '1cnIsL2cliukPj_v1CUtmTtdjJ42Sc4ZS'
}

base_dest_dir = os.path.join(os.getcwd(), 'public', 'images', 'projects', 'gallery')
os.makedirs(base_dest_dir, exist_ok=True)

downloaded_map = {}

for slug, fid in project_folders.items():
    print(f"\n==========================================")
    print(f"Processing project: {slug} (Folder ID: {fid})")
    url = f'https://drive.google.com/drive/folders/{fid}'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Failed to fetch folder {slug}: {e}")
        continue

    callbacks = re.findall(r'AF_initDataCallback\((\{.*?\})\);', html, re.DOTALL)
    if len(callbacks) < 5:
        print(f"Insufficient callbacks for {slug}")
        continue

    cb4 = callbacks[4]
    match = re.search(r'data:\s*(\[.*\])\s*,\s*sideChannel:', cb4, re.DOTALL)
    if not match:
        match = re.search(r'data:\s*(\[.*\])\s*\}\s*$', cb4, re.DOTALL)
    if not match:
        print(f"Could not parse data for {slug}")
        continue

    data = json.loads(match.group(1))
    items = data[27][7][0][0]
    print(f"Found {len(items)} items in folder.")

    project_dir = os.path.join(base_dest_dir, slug)
    os.makedirs(project_dir, exist_ok=True)

    project_images = []

    for idx, it in enumerate(items):
        file_id = it[0][1] if isinstance(it[0], list) and len(it[0]) > 1 else it[0]
        # Find filename
        names = []
        def get_names(sub):
            if isinstance(sub, str):
                if sub.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                    names.append(sub)
            elif isinstance(sub, list):
                for x in sub:
                    get_names(x)
        get_names(it)
        
        orig_filename = names[0] if names else f"screenshot_{idx+1}.png"
        # Clean filename
        clean_name = f"slide-{idx+1}.png"
        file_path = os.path.join(project_dir, clean_name)
        web_path = f"/images/projects/gallery/{slug}/{clean_name}"

        # Download file
        download_url = f'https://drive.google.com/uc?export=download&id={file_id}'
        try:
            dl_req = urllib.request.Request(download_url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
            dl_res = urllib.request.urlopen(dl_req)
            content = dl_res.read()
            with open(file_path, 'wb') as f:
                f.write(content)
            print(f"  [{idx+1}/{len(items)}] Downloaded: {orig_filename} -> {web_path} ({len(content)} bytes)")
            project_images.append(web_path)
        except Exception as err:
            print(f"  [{idx+1}/{len(items)}] Error downloading {file_id}: {err}")

        time.sleep(0.3)

    downloaded_map[slug] = project_images

with open('downloaded_projects_map.json', 'w') as f:
    json.dump(downloaded_map, f, indent=2)

print("\nDone! Download summary saved to downloaded_projects_map.json")

import os
import re
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Silinecek satırlar (regex olarak)
PATTERNS = [
    r'<!-- Removed by WebCopy -->',
    r'<!--<base href="/">-->',
    r'<!-- Removed by WebCopy --><!--<base href="/">--><!-- Removed by WebCopy -->',
    r'^\ufeff',  # BOM karakteri (görünmez)
]

def temizle(dosya_yolu):
    try:
        with open(dosya_yolu, 'r', encoding='utf-8-sig') as f:
            icerik = f.read()
    except Exception as e:
        print(f"Okuma hatası ({dosya_yolu}): {e}")
        return False
    
    orijinal = icerik
    for pattern in PATTERNS:
        icerik = re.sub(pattern, '', icerik, flags=re.MULTILINE)
    
    # Boş kalan satırları temizle
    icerik = re.sub(r'\n\s*\n', '\n', icerik)
    
    if icerik != orijinal:
        with open(dosya_yolu, 'w', encoding='utf-8') as f:
            f.write(icerik)
        return True
    return False

def get_title(icerik):
    match = re.search(r'<title>(.*?)</title>', icerik, re.IGNORECASE)
    if match:
        return match.group(1).strip()
    return "Yeni Demo"

def add_to_index_html(demo_id, title, file_ext):
    index_path = os.path.join(BASE_DIR, 'yazilimlar', 'index.html')
    if not os.path.exists(index_path):
        print(f"Hata: {index_path} bulunamadı!")
        return

    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if f"id: '{demo_id}'" in content or f'id: "{demo_id}"' in content:
        print(f"Demo {demo_id} zaten listeye eklenmiş.")
        return

    # Basic category
    new_product = f"{{ id: '{demo_id}', title: '{title}', category: 'kurumsal', catName: 'Kurumsal & Ajans', file: '{file_ext}' }}"
    
    # Insert before the closing bracket of the products array
    pattern = r'(const products = \[.*?)(];)'
    
    def replacer(match):
        arr_content = match.group(1)
        if arr_content.strip().endswith('['):
            return arr_content + "\n            " + new_product + "\n        " + match.group(2)
        else:
            return arr_content + ",\n            " + new_product + "\n        " + match.group(2)

    new_content = re.sub(pattern, replacer, content, flags=re.DOTALL)
    
    if content != new_content:
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"✓ Demo {demo_id} başarıyla index.html dosyasına eklendi.")
    else:
        print("x Demo listesi güncellenemedi, format eşleşmedi.")

def main():
    if len(sys.argv) > 1:
        # Modüler kullanım: python a.py demo/121
        target_dir_arg = sys.argv[1]
        target_dir = os.path.join(BASE_DIR, 'yazilimlar', target_dir_arg)
        if not os.path.exists(target_dir):
            print(f"Klasör bulunamadı: {target_dir}")
            return
            
        sayac = 0
        demo_id = os.path.basename(os.path.normpath(target_dir_arg))
        demo_title = "Yeni Demo"
        index_file_name = "index.html"
        
        for root, dirs, files in os.walk(target_dir):
            for file in files:
                if file.endswith(('.html', '.htm')):
                    path = os.path.join(root, file)
                    if temizle(path):
                        sayac += 1
                        print(f"✓ Temizlendi: {os.path.relpath(path, BASE_DIR)}")
                    
                    if file.startswith('index'):
                        with open(path, 'r', encoding='utf-8') as f:
                            t = get_title(f.read())
                            if t != "Yeni Demo":
                                demo_title = t
                        index_file_name = file
        
        print(f"\n✅ Toplam {sayac} dosya temizlendi.")
        print("Listeye ekleniyor...")
        add_to_index_html(demo_id, demo_title, index_file_name)

    else:
        # Eski kullanım
        sayac = 0
        for root, dirs, files in os.walk(BASE_DIR):
            if '.git' in root:
                continue
            for file in files:
                if file.endswith(('.html', '.htm')):
                    path = os.path.join(root, file)
                    if temizle(path):
                        sayac += 1
                        print(f"✓ Temizlendi: {os.path.relpath(path, BASE_DIR)}")

        print(f"\n✅ Toplam {sayac} dosya temizlendi.")

if __name__ == '__main__':
    main()
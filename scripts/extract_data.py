#!/usr/bin/env python3
import glob
import json
import os
import re
from bs4 import BeautifulSoup

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

APP_COLORS = {
    'file_manager': {'primary': '#1a73e8', 'primaryDark': '#1557b0'},
    'qr_scanner': {'primary': '#0284c7', 'primaryDark': '#0369a1'},
    'music_player': {'primary': '#10b981', 'primaryDark': '#059669'},
    'photos': {'primary': '#8b5cf6', 'primaryDark': '#7c3aed'},
    'ebook_reader': {'primary': '#0284c7', 'primaryDark': '#0369a1'},
    'pdf_reader': {'primary': '#dc2626', 'primaryDark': '#b91c1c'},
    'notes': {'primary': '#10b981', 'primaryDark': '#059669'},
    'sheets': {'primary': '#059669', 'primaryDark': '#047857'},
    'video_player': {'primary': '#ec4899', 'primaryDark': '#db2777'},
    'voice_recorder': {'primary': '#ef4444', 'primaryDark': '#dc2626'},
    'torch_light': {'primary': '#eab308', 'primaryDark': '#ca8a04'},
    'messages': {'primary': '#2563eb', 'primaryDark': '#1d4ed8'},
    'docs': {'primary': '#176b5b', 'primaryDark': '#104f42'},
}

def extract_apps_and_legal():
    # 1. Read apps from generate_catalogue.py
    with open(os.path.join(BASE_DIR, 'generate_catalogue.py'), 'r', encoding='utf-8') as f:
        code = f.read()

    # Extract APPS list
    start_match = re.search(r'APPS\s*=\s*\[', code)
    if not start_match:
        raise Exception("Could not find APPS in generate_catalogue.py")
    start_pos = start_match.start()
    
    # We can evaluate or parse APPS safely
    scope = {}
    exec(code[start_pos:], scope)
    apps = scope['APPS']

    # Add color metadata to apps
    for app in apps:
        app_id = app['id']
        colors = APP_COLORS.get(app_id, {'primary': '#2563eb', 'primaryDark': '#1d4ed8'})
        app['colors'] = colors

    # 2. Extract legal docs
    legal_data = {}
    languages_order = [
        {"code": "en", "name": "English"},
        {"code": "en_us", "name": "English (US)"},
        {"code": "en_gb", "name": "English (UK)"},
        {"code": "en_au", "name": "English (AU)"},
        {"code": "fr", "name": "Français"},
        {"code": "de", "name": "Deutsch"},
        {"code": "vi", "name": "Tiếng Việt"},
        {"code": "es", "name": "Español"},
        {"code": "pt", "name": "Português"},
        {"code": "ru", "name": "Русский"},
        {"code": "hi", "name": "हिन्दी"},
        {"code": "mr", "name": "मराठी"},
        {"code": "bn", "name": "বাংলা"},
        {"code": "te", "name": "తెలుగు"},
        {"code": "ta", "name": "தமிழ்"},
        {"code": "tr", "name": "Türkçe"},
        {"code": "ja", "name": "日本語"},
        {"code": "zh", "name": "简体中文"},
        {"code": "sw", "name": "Kiswahili"},
        {"code": "ha", "name": "Hausa"},
        {"code": "id", "name": "Bahasa Indonesia"}
    ]

    for p in glob.glob(os.path.join(BASE_DIR, '*/*/*.html')):
        rel = os.path.relpath(p, BASE_DIR)
        parts = rel.split('/')
        if len(parts) != 3:
            continue
        app_id, doc_type, filename = parts
        if doc_type not in ('privacy_policy', 'terms_of_service'):
            continue
        lang = filename.replace('.html', '')

        with open(p, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f.read(), 'html.parser')

        h1 = soup.find('h1')
        title = h1.get_text(strip=True) if h1 else ''

        header = soup.find(['div', 'header'], class_='header') or soup.find('header')
        subtitle = ''
        if header and header.find('p'):
            subtitle = header.find('p').get_text(strip=True)

        card = soup.find(class_='card') or soup.find('article')
        content_html = ''
        if card:
            # inner html without outer div/article tag
            content_html = ''.join(str(c) for c in card.children).strip()

        key = f"{app_id}/{doc_type}/{lang}"
        legal_data[key] = {
            'appId': app_id,
            'docType': doc_type,
            'lang': lang,
            'title': title,
            'subtitle': subtitle,
            'content': content_html
        }

    # Write out data files
    data_dir = os.path.join(BASE_DIR, 'src', 'data')
    os.makedirs(data_dir, exist_ok=True)

    apps_js = f"export const APPS = {json.dumps(apps, indent=2, ensure_ascii=False)};\n"
    apps_js += f"export const LANGUAGES = {json.dumps(languages_order, indent=2, ensure_ascii=False)};\n"
    apps_js += f"export const APP_COLORS = {json.dumps(APP_COLORS, indent=2, ensure_ascii=False)};\n"
    with open(os.path.join(data_dir, 'appsData.js'), 'w', encoding='utf-8') as f:
        f.write(apps_js)

    legal_json = json.dumps(legal_data, ensure_ascii=False)
    legal_js = f"export const LEGAL_DOCS = {legal_json};\n"
    with open(os.path.join(data_dir, 'legalDocs.js'), 'w', encoding='utf-8') as f:
        f.write(legal_js)

    print(f"Extracted {len(apps)} apps, {len(legal_data)} legal documents.")

if __name__ == '__main__':
    extract_apps_and_legal()

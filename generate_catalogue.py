#!/usr/bin/env python3
import os

BASE_DIR = "/home/mrks/GitHub/Mohan2123.github.io"

APPS = [
    {
        "id": "file_manager",
        "package_id": "com.mohan.filemanager",
        "name": "File Manager",
        "tagline": "Fast, Clean & Powerful File Explorer with Built-in Media Tools",
        "category": "utility",
        "category_label": "Utilities & Tools",
        "summary": "A full-featured file manager with multi-tab browsing, fast search, archive compression/extraction (ZIP, 7z, RAR), encrypted safe vault, and built-in media players.",
        "features": [
            {"title": "Dual-Pane & Tabbed Navigation", "desc": "Effortlessly manage files across internal storage, SD cards, and USB drives."},
            {"title": "Secure Vault", "desc": "Password & biometric protected encrypted storage for your sensitive files."},
            {"title": "Archive Support", "desc": "Compress and extract ZIP, 7Z, TAR, and RAR files directly with password support."},
            {"title": "Built-in Media Players", "desc": "Preview images, videos, audio, and documents without third-party apps."},
            {"title": "Storage Analyzer", "desc": "Visual breakdown of large files, duplicates, and redundant cache."}
        ]
    },
    {
        "id": "qr_scanner",
        "package_id": "com.mohan.qrscanner",
        "name": "QR & Barcode Scanner",
        "tagline": "Lightning-Fast QR Scanner & Custom Code Studio",
        "category": "utility",
        "category_label": "Utilities & Tools",
        "summary": "Scan all 1D and 2D barcode formats instantly with smart contextual actions (Wi-Fi connect, contact save, link preview) and create personalized styled QR codes.",
        "features": [
            {"title": "Instant Multi-Format Scanning", "desc": "Reads QR, Data Matrix, Aztec, UPC, EAN, Code 128, and PDF417 in milliseconds."},
            {"title": "QR Code Generator", "desc": "Create branded codes with custom colors, gradients, logos, and custom templates."},
            {"title": "Batch Scan Mode", "desc": "Scan multiple items continuously with automated sound/haptic feedback and CSV export."},
            {"title": "History & Favorites", "desc": "Full offline history searchable by date, type, and keyword."},
            {"title": "Safety & Security", "desc": "Built-in URL safety check to protect against malicious phishing links."}
        ]
    },
    {
        "id": "music_player",
        "package_id": "com.mohan.music_player",
        "name": "Hi-Fi Music Player",
        "tagline": "Audiophile Grade Player with 10-Band Equalizer & Lyrics",
        "category": "media",
        "category_label": "Media & Audio",
        "summary": "Crisp, lossless audio playback supporting FLAC, MP3, AAC, OGG, WAV with 10-band graphic EQ, synchronized karaoke-style lyrics, tag editor, and gapless playback.",
        "features": [
            {"title": "10-Band Pro Equalizer", "desc": "Bass boost, 3D reverb effects, virtualizer, and custom audio presets."},
            {"title": "Synchronized Lyrics", "desc": "Real-time scrolling synchronized lyrics (LRC) support with offline caching."},
            {"title": "Lossless Audio Engine", "desc": "Pure gapless playback with 24-bit Hi-Res audio output support."},
            {"title": "Smart Tag Editor", "desc": "Edit ID3 metadata, album art, genre, year, and track info easily."},
            {"title": "Sleep Timer & Driving Mode", "desc": "Custom sleep timer with fade-out and simplified driving mode UI."}
        ]
    },
    {
        "id": "photos",
        "package_id": "com.mohan.photos",
        "name": "Photos Gallery",
        "tagline": "Private, Smart Gallery & Creative Photo Editor",
        "category": "media",
        "category_label": "Media & Audio",
        "summary": "Lightweight photo gallery with album management, EXIF metadata viewer, biometric hidden vault, and built-in pro image editor and collage maker.",
        "features": [
            {"title": "Pro Image Editor", "desc": "Crop, rotate, filter presets, HSL curve adjustments, and doodle overlays."},
            {"title": "Biometric Photo Vault", "desc": "Keep private photos and videos hidden and encrypted behind fingerprint/PIN lock."},
            {"title": "Collage Maker", "desc": "Combine multiple photos into beautiful grid layouts with customizable borders."},
            {"title": "Deep EXIF Inspector", "desc": "View camera settings, ISO, shutter speed, focal length, and GPS map locations."},
            {"title": "High Performance", "desc": "Fast rendering, smooth zoom transitions, and instant thumbnail indexing."}
        ]
    },
    {
        "id": "ebook_reader",
        "package_id": "com.mohan.ebook_reader",
        "name": "eBook Reader",
        "tagline": "Multi-Format Digital Reader with Text-to-Speech",
        "category": "productivity",
        "category_label": "Productivity & Docs",
        "summary": "Read EPUB, PDF, MOBI, CBZ, and TXT with customized typography, night mode, bookmarking, dictionary lookup, and natural Text-to-Speech narration.",
        "features": [
            {"title": "Universal Format Support", "desc": "Seamlessly open and parse EPUB 2/3, PDF, Comic Book (CBZ/CBR), and TXT files."},
            {"title": "Natural Text-to-Speech", "desc": "Listen to your books hands-free with background playback and variable speeds."},
            {"title": "Custom Typography", "desc": "Choose custom fonts, line spacing, margins, background paper colors, and dark mode."},
            {"title": "Highlights & Notes", "desc": "Highlight key passages in multi-colors and export your annotations to Markdown."},
            {"title": "Reading Stats & Goal Tracker", "desc": "Track pages read per day, reading speed (WPM), and total reading duration."}
        ]
    },
    {
        "id": "pdf_reader",
        "package_id": "com.mohan.pdf_reader",
        "name": "PDF Reader & Studio",
        "tagline": "Fast PDF Viewer, Markup & Digital Signature Tool",
        "category": "productivity",
        "category_label": "Productivity & Docs",
        "summary": "High-speed PDF viewer with sharp vector rendering, full-text search, sticky notes, freehand drawing, electronic signatures, page reordering, and PDF merging.",
        "features": [
            {"title": "Smooth Vector Rendering", "desc": "Instant page loading and crisp rendering even on 1000+ page documents."},
            {"title": "Annotation & Markup", "desc": "Underline, strikethrough, highlight text, and add comments and freehand sketches."},
            {"title": "Digital Form Filling & Signing", "desc": "Fill interactive PDF forms and place your cryptographic or drawn e-signature."},
            {"title": "Page Organizer", "desc": "Reorder, rotate, extract, delete, and merge multiple PDF documents."},
            {"title": "Inverted Dark Reading Mode", "desc": "High-contrast dark mode designed for comfortable reading in low light."}
        ]
    },
    {
        "id": "notes",
        "package_id": "com.mohan.notes",
        "name": "Notes & Tasks",
        "tagline": "Markdown Notes, Checklists & Organization",
        "category": "productivity",
        "category_label": "Productivity & Docs",
        "summary": "Capture thoughts, organize projects with nested tags, create rich checklists, format with full Markdown support, and lock sensitive notes with biometrics.",
        "features": [
            {"title": "Full Markdown Support", "desc": "Headings, code syntax highlighting, bold/italic, tables, and live preview."},
            {"title": "Interactive Checklists", "desc": "Manage daily todos, grocery lists, and track completion progress with ease."},
            {"title": "Folder & Tag Hierarchy", "desc": "Organize notes with multi-color tags, pinned notes, and flexible search."},
            {"title": "Biometric Note Locking", "desc": "Secure individual sensitive notes with AES-256 encryption and biometric lock."},
            {"title": "Backup & Export", "desc": "Export notes to PDF, TXT, or JSON and create local backups."}
        ]
    },
    {
        "id": "sheets",
        "package_id": "com.mohan.sheets",
        "name": "Sheets & Calculations",
        "tagline": "Spreadsheet Editor with Formula Engine & Charts",
        "category": "productivity",
        "category_label": "Productivity & Docs",
        "summary": "Create, edit, and analyze spreadsheets on the go. Compatible with CSV and XLSX formats, featuring 100+ mathematical formulas, cell formatting, and interactive charts.",
        "features": [
            {"title": "100+ Formulas & Functions", "desc": "Comprehensive math, statistical, financial, text, and lookup formula support."},
            {"title": "CSV & Excel Compatibility", "desc": "Import and export CSV and standard XLSX spreadsheet workbooks effortlessly."},
            {"title": "Visual Chart Engine", "desc": "Generate instant Bar, Line, Pie, and Scatter charts from cell ranges."},
            {"title": "Cell Formatting Studio", "desc": "Customize borders, background fills, number formats (currency, percentage), and font styles."},
            {"title": "Sort & Filter Tools", "desc": "Filter rows dynamically and sort data across multiple column criteria."}
        ]
    },
    {
        "id": "video_player",
        "package_id": "com.mohan.video_player",
        "name": "Ultra Video Player",
        "tagline": "HD / 4K Player with Gesture Controls & Picture-in-Picture",
        "category": "media",
        "category_label": "Media & Audio",
        "summary": "High-performance video player supporting 4K, MKV, MP4, AVI, WebM with hardware acceleration, subtitle sync, audio booster, background play, and floating PiP mode.",
        "features": [
            {"title": "Hardware Accelerated Playback", "desc": "Silky-smooth 4K, 60fps video playback with optimal battery efficiency."},
            {"title": "Smart Gesture Controls", "desc": "Swipe to adjust brightness, volume, and seek playback timeline seamlessly."},
            {"title": "Picture-in-Picture (PiP)", "desc": "Watch videos in a floating resizable window while using other apps."},
            {"title": "Subtitle Customizer & Sync", "desc": "Load external SRT/ASS subtitles with real-time sync adjustment, custom fonts, and colors."},
            {"title": "Audio Boost & Equalizer", "desc": "Amplify quiet audio tracks with 200% volume boost and built-in sound presets."}
        ]
    },
    {
        "id": "voice_recorder",
        "package_id": "com.mohan.voice_recorder",
        "name": "Voice Recorder Pro",
        "tagline": "Studio-Quality Audio Recorder with Waveform & Trimming",
        "category": "utility",
        "category_label": "Utilities & Tools",
        "summary": "Record interviews, lectures, meetings, and voice memos in high fidelity (WAV, MP3, M4A, AAC) with live waveform visualization, silence skipper, and audio trimmer.",
        "features": [
            {"title": "Real-Time Visual Waveform", "desc": "Crisp live visualization of audio frequencies and amplitude levels while recording."},
            {"title": "Noise Suppression & Gain", "desc": "Active background noise reduction, echo cancellation, and automatic gain control."},
            {"title": "Skip Silence Mode", "desc": "Automatically skip silent pauses during recording or playback."},
            {"title": "Built-in Audio Trimmer", "desc": "Cut, trim, and export selected segments directly without external editing software."},
            {"title": "Bookmark Markers", "desc": "Add timestamped markers during recordings to quickly find key moments later."}
        ]
    },
    {
        "id": "torch_light",
        "package_id": "com.mohan.torch_light",
        "name": "Super Torch & Strobe",
        "tagline": "Instant Flashlight with Strobe, SOS & Screen Light",
        "category": "utility",
        "category_label": "Utilities & Tools",
        "summary": "Ultra-bright LED flashlight with instant launch widget, adjustable frequency strobe light, Morse code SOS emergency beacon, and customizable color screen light.",
        "features": [
            {"title": "Instant Launch", "desc": "Starts illuminating immediately on app launch or via quick-settings tile."},
            {"title": "Adjustable Strobe Mode", "desc": "Customizable flash frequency from 1 Hz to 20 Hz for signaling or party lighting."},
            {"title": "Emergency SOS Morse Beacon", "desc": "Automated SOS light sequence for emergency roadside or hiking situations."},
            {"title": "Color Screen Light", "desc": "Full-screen ambient illumination with customizable RGB colors and brightness."},
            {"title": "Auto-Off Battery Saver", "desc": "Configurable timer to automatically turn off flashlight and prevent battery drain."}
        ]
    }
]

def get_shared_css():
    return """
:root {
  --primary: #2563eb;
  --primary-hover: #1d4ed8;
  --bg-main: #0f172a;
  --bg-card: #1e293b;
  --bg-card-hover: #334155;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --border-color: #334155;
  --accent: #38bdf8;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: var(--bg-main);
  color: var(--text-main);
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

a {
  color: var(--accent);
  text-decoration: none;
  transition: all 0.2s ease;
}

a:hover {
  text-decoration: underline;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

/* Header */
header {
  border-bottom: 1px solid var(--border-color);
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-main);
  text-decoration: none;
}

.logo-badge {
  background: linear-gradient(135deg, #2563eb, #38bdf8);
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-links a {
  color: var(--text-muted);
  font-weight: 500;
  font-size: 0.95rem;
}

.nav-links a:hover {
  color: var(--text-main);
  text-decoration: none;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.75rem 1.4rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #fff;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #1d4ed8, #1e40af);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.5);
  text-decoration: none;
}

.btn-secondary {
  background: var(--bg-card);
  color: var(--text-main);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background: var(--bg-card-hover);
  border-color: #475569;
  text-decoration: none;
}

.btn-sm {
  padding: 0.55rem 0.9rem;
  font-size: 0.85rem;
  border-radius: 8px;
}

/* Footer */
footer {
  margin-top: auto;
  border-top: 1px solid var(--border-color);
  padding: 3rem 0;
  background: #090d16;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}
"""

def generate_catalogue_html():
    apps_cards_html = ""
    for app in APPS:
        play_url = f"https://play.google.com/store/apps/details?id={app['package_id']}"
        rustore_url = f"https://www.rustore.ru/catalog/app/{app['package_id']}"
        apps_cards_html += f"""
      <article class="app-card" data-category="{app['category']}">
        <div class="app-card-header">
          <div class="app-icon-wrapper">
            <img src="assets/icons/{app['id']}.png" alt="{app['name']} Icon" class="app-icon-img" loading="lazy" />
          </div>
          <div>
            <span class="category-badge">{app['category_label']}</span>
            <h3 class="app-title">{app['name']}</h3>
          </div>
        </div>
        <p class="app-desc">{app['summary']}</p>
        <div class="app-card-actions">
          <a href="{app['id']}/index.html" class="btn btn-secondary btn-sm" style="flex: 1 1 100%;">View Details & Legal</a>
          <a href="{play_url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="flex: 1 1 calc(50% - 0.35rem);">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a2.036 2.036 0 0 1-.22-.387A2.08 2.08 0 0 1 3.25 21V3c0-.288.048-.564.139-.8A2.037 2.037 0 0 1 3.61 1.814zm11.238 11.241l2.082 2.082-9.756 5.633 7.674-7.715zm0-2.11L7.173 3.23l9.756 5.633-2.082 2.082zm1.48 1.48l3.414 1.972c.983.568.983 1.492 0 2.06l-3.414 1.972-2.188-2.188 2.188-1.816z"/></svg>
            Google Play
          </a>
          <a href="{rustore_url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="flex: 1 1 calc(50% - 0.35rem);">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm2 4v8h3v-3h2.5l2.5 3h3.5l-3.2-3.8c1.3-.6 2.2-1.8 2.2-3.2 0-2.2-1.8-4-4-4H6zm3 2.5h3c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H9v-3z"/></svg>
            RuStore
          </a>
        </div>
      </article>
"""

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mohan Apps Showcase | Fast, Clean & Multi-Platform Applications</title>
  <meta name="description" content="Explore Mohan's ecosystem of multiple OS supported applications: File Manager, QR Scanner, Music Player, Photos Gallery, eBook Reader, PDF Reader, Notes, Sheets, Video Player, Voice Recorder, and Torch Light.">
  <style>
{get_shared_css()}

/* Hero Section */
.hero {{
  padding: 5rem 0 3.5rem;
  text-align: center;
  background: radial-gradient(circle at 50% 20%, rgba(37, 99, 235, 0.15), transparent 70%);
}}

.hero-pill {{
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 1rem;
  border-radius: 9999px;
  background: rgba(37, 99, 235, 0.15);
  border: 1px solid rgba(37, 99, 235, 0.3);
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}}

.hero h1 {{
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 1.25rem;
  background: linear-gradient(135deg, #ffffff 40%, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}}

.hero p {{
  font-size: 1.15rem;
  color: var(--text-muted);
  max-width: 680px;
  margin: 0 auto 2.5rem;
}}

.stats-bar {{
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}}

.stat-item {{
  display: flex;
  flex-direction: column;
  align-items: center;
}}

.stat-number {{
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-main);
}}

.stat-label {{
  font-size: 0.85rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}}

/* Filter Tabs */
.filter-nav {{
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin: 2.5rem 0 3rem;
  flex-wrap: wrap;
}}

.filter-btn {{
  padding: 0.6rem 1.25rem;
  border-radius: 9999px;
  background: var(--bg-card);
  color: var(--text-muted);
  border: 1px solid var(--border-color);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}}

.filter-btn:hover, .filter-btn.active {{
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}}

/* App Grid */
.apps-grid {{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.75rem;
  margin-bottom: 5rem;
}}

.app-card {{
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
}}

.app-card:hover {{
  transform: translateY(-4px);
  border-color: #475569;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
}}

.app-card-header {{
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin-bottom: 1.1rem;
}}

.app-icon-wrapper {{
  width: 58px;
  height: 58px;
  border-radius: 14px;
  overflow: hidden;
  flex-shrink: 0;
  background: #1e293b;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}}

.app-icon-img {{
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}}

.category-badge {{
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--accent);
  letter-spacing: 0.05em;
  margin-bottom: 0.2rem;
}}

.app-title {{
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
}}

.app-desc {{
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.55;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}}

.app-card-actions {{
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}}
  </style>
</head>
<body>

  <header>
    <div class="container nav-container">
      <a href="index.html" class="logo">
        <div class="logo-badge">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        </div>
        <span>Mohan Apps</span>
      </a>
      <nav class="nav-links">
        <a href="#catalogue">Applications</a>
        <a href="https://github.com/Mohan2123" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container">
        <div class="hero-pill">
          <span>✨ Fast, Clean & Multi-Platform Applications</span>
        </div>
        <h1>Modern Multiple OS Supported Apps</h1>
        <p>A comprehensive ecosystem of productivity, multimedia, and daily utility applications engineered for high performance across Android, Linux, Windows, macOS, and iOS.</p>
        
        <div class="stats-bar">
          <div class="stat-item">
            <span class="stat-number">11</span>
            <span class="stat-label">Core Applications</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">Multi-OS</span>
            <span class="stat-label">Cross-Platform Ready</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">21</span>
            <span class="stat-label">Languages Supported</span>
          </div>
        </div>
      </div>
    </section>

    <section id="catalogue" class="container">
      <div class="filter-nav">
        <button class="filter-btn active" data-filter="all">All Applications ({len(APPS)})</button>
        <button class="filter-btn" data-filter="utility">Utilities & Tools (4)</button>
        <button class="filter-btn" data-filter="productivity">Productivity & Docs (4)</button>
        <button class="filter-btn" data-filter="media">Media & Audio (3)</button>
      </div>

      <div class="apps-grid">
{apps_cards_html}
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-content">
      <div class="logo">
        <div class="logo-badge" style="width: 32px; height: 32px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        </div>
        <span style="font-size: 1.1rem;">Mohan Apps Ecosystem</span>
      </div>
      <p>© 2026 Mohan Apps. Crafted with dedication for clean and fast multi-platform experiences.</p>
      <div class="footer-links">
        <a href="https://github.com/Mohan2123" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        <a href="index.html">All Apps</a>
      </div>
    </div>
  </footer>

  <script>
    document.addEventListener('DOMContentLoaded', () => {{
      const buttons = document.querySelectorAll('.filter-btn');
      const cards = document.querySelectorAll('.app-card');

      buttons.forEach(button => {{
        button.addEventListener('click', () => {{
          buttons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          const filter = button.getAttribute('data-filter');

          cards.forEach(card => {{
            if (filter === 'all' || card.getAttribute('data-category') === filter) {{
              card.style.display = 'flex';
            }} else {{
              card.style.display = 'none';
            }}
          }});
        }});
      }});
    }});
  </script>
</body>
</html>
"""

def generate_app_detail_html(app):
    play_url = f"https://play.google.com/store/apps/details?id={app['package_id']}"
    rustore_url = f"https://www.rustore.ru/catalog/app/{app['package_id']}"
    features_html = ""
    for f in app["features"]:
        features_html += f"""
        <div class="feature-card">
          <div class="feature-icon-bullet">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div>
            <h4 class="feature-title">{f['title']}</h4>
            <p class="feature-desc">{f['desc']}</p>
          </div>
        </div>
"""

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{app['name']} - {app['tagline']} | Mohan Apps</title>
  <meta name="description" content="{app['summary']}">
  <style>
{get_shared_css()}

/* App Detail Hero */
.app-hero {{
  padding: 4rem 0 3rem;
  border-bottom: 1px solid var(--border-color);
  background: radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.1), transparent 60%);
}}

.breadcrumb {{
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
}}

.hero-layout {{
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
}}

@media (max-width: 768px) {{
  .hero-layout {{
    flex-direction: column;
    align-items: center;
    text-align: center;
  }}
}}

.app-detail-icon-wrapper {{
  width: 96px;
  height: 96px;
  border-radius: 22px;
  overflow: hidden;
  flex-shrink: 0;
  background: #1e293b;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
}}

.app-detail-icon-img {{
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}}

.app-detail-header h1 {{
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 0.4rem;
}}

.app-tagline {{
  font-size: 1.15rem;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 1rem;
}}

.app-spec-badges {{
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}}

@media (max-width: 768px) {{
  .app-spec-badges {{
    justify-content: center;
  }}
}}

.spec-badge {{
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 0.35rem 0.85rem;
  border-radius: 8px;
  font-size: 0.85rem;
  color: var(--text-muted);
}}

.hero-actions {{
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}}

@media (max-width: 768px) {{
  .hero-actions {{
    justify-content: center;
  }}
}}

/* Features Section */
.content-section {{
  padding: 3.5rem 0;
}}

.section-heading {{
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}}

.features-grid {{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}}

.feature-card {{
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
}}

.feature-icon-bullet {{
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(37, 99, 235, 0.2);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}}

.feature-title {{
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
}}

.feature-desc {{
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
}}

/* Legal Box */
.legal-box {{
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}}

.legal-links {{
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
}}
  </style>
</head>
<body>

  <header>
    <div class="container nav-container">
      <a href="../index.html" class="logo">
        <div class="logo-badge">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        </div>
        <span>Mohan Apps</span>
      </a>
      <nav class="nav-links">
        <a href="../index.html">← All Applications</a>
        <a href="https://github.com/Mohan2123" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="app-hero">
      <div class="container">
        <nav class="breadcrumb">
          <a href="../index.html">Home</a>
          <span>/</span>
          <span>{app['category_label']}</span>
          <span>/</span>
          <span style="color: var(--text-main);">{app['name']}</span>
        </nav>

        <div class="hero-layout">
          <div class="app-detail-icon-wrapper">
            <img src="../assets/icons/{app['id']}.png" alt="{app['name']} Icon" class="app-detail-icon-img" />
          </div>
          <div class="app-detail-header">
            <h1>{app['name']}</h1>
            <div class="app-tagline">{app['tagline']}</div>
            <div class="app-spec-badges">
              <span class="spec-badge">Category: {app['category_label']}</span>
              <span class="spec-badge">Package: {app['package_id']}</span>
            </div>
            <div class="hero-actions">
              <a href="{play_url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a2.036 2.036 0 0 1-.22-.387A2.08 2.08 0 0 1 3.25 21V3c0-.288.048-.564.139-.8A2.037 2.037 0 0 1 3.61 1.814zm11.238 11.241l2.082 2.082-9.756 5.633 7.674-7.715zm0-2.11L7.173 3.23l9.756 5.633-2.082 2.082zm1.48 1.48l3.414 1.972c.983.568.983 1.492 0 2.06l-3.414 1.972-2.188-2.188 2.188-1.816z"/></svg>
                Get it on Google Play
              </a>
              <a href="{rustore_url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm2 4v8h3v-3h2.5l2.5 3h3.5l-3.2-3.8c1.3-.6 2.2-1.8 2.2-3.2 0-2.2-1.8-4-4-4H6zm3 2.5h3c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H9v-3z"/></svg>
                RuStore
              </a>
              <a href="privacy_policy/en.html" class="btn btn-secondary">Privacy Policy</a>
              <a href="terms_of_service/en.html" class="btn btn-secondary">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container content-section">
      <h3 class="section-heading">Key Highlights & Capabilities</h3>
      <div class="features-grid">
{features_html}
      </div>

      <div class="legal-box">
        <div>
          <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.35rem;">Compliance & Transparency</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Review our legal agreements and privacy protections translated into 21 native languages.</p>
        </div>
        <div class="legal-links">
          <a href="privacy_policy/en.html" class="btn btn-secondary btn-sm">🔒 Privacy Policy (21 Langs)</a>
          <a href="terms_of_service/en.html" class="btn btn-secondary btn-sm">📜 Terms of Service (21 Langs)</a>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-content">
      <div class="logo">
        <div class="logo-badge" style="width: 32px; height: 32px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        </div>
        <span style="font-size: 1.1rem;">Mohan Apps Ecosystem</span>
      </div>
      <p>© 2026 Mohan Apps. All rights reserved.</p>
      <div class="footer-links">
        <a href="../index.html">← Back to Catalogue</a>
        <a href="privacy_policy/en.html">Privacy Policy</a>
        <a href="terms_of_service/en.html">Terms of Service</a>
        <a href="https://github.com/Mohan2123" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </footer>

</body>
</html>
"""

def main():
    root_index_path = os.path.join(BASE_DIR, "index.html")
    with open(root_index_path, "w", encoding="utf-8") as f:
        f.write(generate_catalogue_html())
    print(f"Generated root catalogue: {root_index_path}")

    for app in APPS:
        app_dir = os.path.join(BASE_DIR, app["id"])
        os.makedirs(app_dir, exist_ok=True)
        app_page_path = os.path.join(app_dir, "index.html")
        with open(app_page_path, "w", encoding="utf-8") as f:
            f.write(generate_app_detail_html(app))
        print(f"Generated app detail page: {app_page_path}")

    print("Catalogue generation complete!")

if __name__ == "__main__":
    main()

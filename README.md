# ADEPU KOUSHAL — CINEMATIC FILMMAKER PORTFOLIO

> **"We don't merely capture light; we construct an emotional architecture that echoes long after the screen fades to black."**

A luxury, minimal, dark, cinematic personal portfolio website built specifically for **Adepu Koushal** — Filmmaker, Director, Cinematographer, DOP, and Video Editor, associated with **MILLISTUDIOS** and **SREE MEDIA**.

---

## 🎬 Cinematic Highlights & Features

1. **Movie Opening Hero Section**:
   - High-impact widescreen visual background with subtle motion and dark overlay.
   - Cinematic typography: **ADEPU KOUSHAL** in bold display lettering with gold accents.
   - Real-time camera telemetry display: Running Timecode clock (`TC 00:14:28:16`), `24.000 FPS • DCI 4K • LOG3`, and smooth scroll indicator.
   - Interactive generative ambient sound engine (55Hz warm analog cinema drone with Web Audio API, toggleable via `SOUND: ON / OFF` with animated audio wave bars).

2. **Curated Filmography (My Projects)**:
   - Modern horizontal and wide-grid cinematic showcase.
   - High-resolution posters with 2.39:1 / 16:9 widescreen ratios, role credits (*Story • Direction • DOP • Editing*), year, duration, and camera telemetry.
   - **Watch Project** interactive button that opens the film in a fullscreen cinema player modal.

3. **Editorial About Section**:
   - Director portrait framed in a custom ARRI/RED camera reticle with live crosshairs and framing marks `[ + ]`.
   - Comprehensive bio emphasizing independent storytelling, visual creativity, and direction.
   - Dedicated studio cards for **MILLISTUDIOS** and **SREE MEDIA**.
   - Career milestones: 07+ Produced Works, 25+ Commercials, 500K+ Views, 2 Studio Partnerships.

4. **Trailers & Films**:
   - Interactive category filter tabs:
     - *All Previews*
     - *Short Film Trailers*
     - *Cover Song Trailers*
     - *Film Glimpses & Teasers*
     - *Promotional Videos*
   - Smooth hover zoom states, play button overlay, and direct modal playback.

5. **Cinematography & Photography Gallery**:
   - Editorial masonry layout showcasing *Cinematic Frames*, *Behind The Scenes*, *Lighting Studies*, *Camera Rigs*, and *Portraits*.
   - Click-to-inspect **EXIF Telemetry Lightbox**: displays Camera System (e.g. *ARRI Alexa Mini / Sony FX3*), Lens (*Cooke Anamorphic / Zeiss Master Prime*), Exposure (*1/48s • ISO 800 • T2.8 • 2.39:1*), and Director's Notes.

6. **Reels & Creative Edits**:
   - Dedicated 9:16 vertical cinema cards optimized for Instagram Reels and fast-paced edits.
   - Real-time video preview playback and direct Instagram links.

7. **Skills & Tools**:
   - Creative Disciplines (*Direction, Cinematography, DOP, Video Editing, Storytelling, Color Grading, Creative Development*) with animated cinematic telemetry meters.
   - Post-Production Software Cards (*Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop, CapCut Pro, DaVinci Resolve*) with role descriptions and proficiency badges.

8. **Contact Section (Film End Credits Experience)**:
   - "HAVE A STORY TO TELL? LET'S CREATE SOMETHING CINEMATIC."
   - One-click inquiry email button and WhatsApp direct link.
   - Social links: Instagram (`@adepu_koushal`), YouTube (`Milli Studios`), Email.
   - Rolling film end credits reel with production credits, camera department, and acknowledgements.

9. **Technical Performance**:
   - Zero framework overhead — loads instantly with 60-120fps smooth animations.
   - Desktop physics-based custom cursor with contextual states (`PLAY`, `INSPECT`, `SCROLL`, `CLOSE`).
   - 35mm subtle analog film grain overlay and optional 2.39:1 letterbox bars.
   - Mobile-responsive curtain navigation drawer with smooth slide-down animation.

---

## 🚀 How to Run & Preview

### Option A: Instant Direct Browser Open (No Setup Required)
Simply double-click:
```
open-in-browser.bat
```
*(Or double-click `index.html` directly in Windows Explorer).*

### Option B: Local Web Server
Double-click:
```
start-portfolio.bat
```
This runs a local server at `http://localhost:3000` and automatically opens your default web browser.

---

## 🛠 How to Customize & Add Content

All projects, trailers, reels, stills, and social links are centralized in a single clean configuration file:

📁 **`js/portfolio-data.js`**

### 1. Adding or Editing a Project
Open `js/portfolio-data.js` and locate `projects: [...]`:
```javascript
{
  id: "my-new-film",
  title: "Title of Film",
  category: "Short Film / Cover Song",
  type: "Short Film",
  roles: "Story • Direction • DOP • Editing",
  year: "2024",
  duration: "12:30",
  aspectRatio: "2.39:1 Cinemascope",
  telemetry: "DCI 4K • Zeiss Prime • Log3",
  youtubeUrl: "https://youtu.be/YOUR_YOUTUBE_ID",
  youtubeId: "YOUR_YOUTUBE_ID",
  poster: "assets/images/your_poster.jpg",
  backdrop: "https://img.youtube.com/vi/YOUR_YOUTUBE_ID/maxresdefault.jpg",
  description: "Your synopsis or directorial vision here...",
  awards: "Official Selection",
  featured: true
}
```

### 2. Adding a Trailer / Teaser
In `js/portfolio-data.js` under `trailers: [...]`:
```javascript
{
  id: "trailer-id",
  title: "Film Name — Official Trailer",
  tag: "Short Film Trailer",
  filterGroup: "short-film", // Options: short-film, cover-song, teaser, promo
  type: "Official Trailer",
  roles: "Director • DOP",
  youtubeUrl: "https://youtu.be/YOUR_YOUTUBE_ID",
  youtubeId: "YOUR_YOUTUBE_ID",
  thumbnail: "https://img.youtube.com/vi/YOUR_YOUTUBE_ID/maxresdefault.jpg",
  duration: "01:30",
  releaseDate: "2024"
}
```

### 3. Adding Behind-the-Scenes or Photography Stills
In `js/portfolio-data.js` under `cinematography: [...]`:
```javascript
{
  id: "cine-frame-id",
  title: "Frame Title",
  category: "Cinematic Frames", // Behind The Scenes, Lighting Study, Camera Work
  camera: "Sony FX3 / ARRI Alexa Mini",
  lens: "35mm Cine Prime",
  telemetry: "1/48s • ISO 800 • T2.0 • 2.39:1",
  image: "assets/images/your_image.png",
  notes: "Directorial notes on how this shot was framed."
}
```

### 4. Updating Instagram, Email, or WhatsApp
In `js/portfolio-data.js` under `profile: { ... }`:
```javascript
email: "your.email@gmail.com",
instagram: "https://www.instagram.com/your_handle/",
instagramDisplay: "@your_handle",
youtube: "https://www.youtube.com/@yourchannel",
whatsapp: "+919876543210"
```

---

## 📂 Directory Structure

```
adepu-koushal-portfolio/
├── index.html                  # Semantic cinematic HTML5 structure & modals
├── open-in-browser.bat         # 1-click instant browser launcher
├── start-portfolio.bat         # 1-click local HTTP server launcher
├── README.md                   # This documentation
├── css/
│   ├── style.css               # Core styling, responsive typography & layout
│   ├── cinematic.css           # 35mm grain, letterbox, camera reticles, modals
│   └── cursor.css              # Custom interactive desktop cursor
├── js/
│   ├── portfolio-data.js       # Central data config (films, links, metadata)
│   ├── cinema-player.js        # Fullscreen YouTube & video modal lightbox
│   ├── audio-ambience.js       # Synthesized cinematic analog drone engine
│   ├── transitions.js          # Timecode clock, scroll reveals & parallax
│   ├── cursor.js               # Physics-based custom cursor with hover labels
│   └── app.js                  # Main controller connecting data to DOM
└── assets/
    ├── images/                 # Posters, thumbnails, stills, BTS photos
    ├── reels/                  # Video reels & previews (.mp4)
    └── stills/                 # Raw frame captures
```

---

## 🌐 Deploying Online

This website is **100% static and production ready**. You can deploy it in seconds to:
- **Vercel / Netlify**: Simply drag and drop the `adepu-koushal-portfolio` folder or connect your Git repository.
- **GitHub Pages**: Push this directory to a GitHub repository and turn on Pages in repository settings.
- **Custom Domain / Hostinger / cPanel**: Upload all files to your `public_html` directory via FTP or File Manager.

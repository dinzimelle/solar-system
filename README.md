# 🪐 Solar System 3D (v2.1 - Production)
**An Interactive, Photorealistic EdTech Universe Built for the Next Generation of Explorers.**

🚀 **Live Site:** [solarsystem3d.space](https://solarsystem3d.space)

---

## 📖 Project Overview
Solar System 3D is a high-performance, web-based astronomical simulation designed to bridge the gap between static textbooks and immersive learning. Developed as a Progressive Web App (PWA), it combines real-world orbital physics with cinematic 3D graphics to provide an accessible STEM tool for students of all ages.

## 🚀 What's New in Version 2.1
The leap from MVP to our V2 production build introduces massive graphical and UX upgrades:
* **Photorealistic Textures:** Upgraded from low-poly colors to high-resolution 2K planetary maps.
* **Milky Way Skybox:** Replaced the static black background with a massive, slow-drifting galactic sphere.
* **Cinematic Welcome Screen:** Bypasses browser autoplay policies for a seamless Text-to-Speech entrance.
* **News Ticker Marquee:** A sleek, auto-scrolling black-and-white release notes banner that cleanly dismisses after one cycle.
* **Dynamic Knowledge Engine:** Expanded the database to include 10 facts for the Sun and 5 for each planet, randomized on every click to increase replayability.
* **Multi-Set Quiz System:** Upgraded the "Cosmic Quiz" to randomly select from 4 different question banks per session.
* **Mobile-Optimized UI:** Both the Info Panel and Quiz Panel are now fully draggable and feature minimize/collapse toggles to free up screen real estate.

## 🛠️ Technical Stack
* **Engine:** Three.js (WebGL) for 60fps 3D rendering.
* **Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3.
* **Deployment:** GitHub Pages + Namecheap DNS.
* **Architecture:** PWA (Service Workers, Manifest API).
* **Telemetry:** GoatCounter (Privacy-First, Cookie-Free Analytics).

## ✨ Core Features
* **Dynamic Lighting & Shadows:** Utilizing `MeshStandardMaterial` and a central `PointLight` to simulate realistic sunlight behavior and day/night planetary cycles.
* **AI Narrator:** Integrated Web Speech API for an interactive, audio-guided tour of the planets.
* **Gamified Learning:** A "Cosmic Quiz" module with randomized logic and celebratory confetti visual feedback.
* **Time Simulation:** User-controlled orbital velocity (Pause, Normal, 8x Speed).

---

## ❓ Frequently Asked Questions (FAQ)

### 💻 How do I install this on my phone?
Since this is a **Progressive Web App (PWA)**, you don't need the App Store. Simply open [solarsystem3d.space](https://solarsystem3d.space) in your mobile browser, tap the **Share** button (iOS) or **Three Dots** (Android), and select **"Add to Home Screen."**

### 🌑 Why are some sides of the planets dark?
The simulation uses a realistic **Single Point Light Source** located at the center of the Sun. Just like in the real solar system, planets have a "Day Side" and a "Night Side" based on their position relative to the Sun.

### ⚙️ Can I use this offline?
Yes! Thanks to the custom **Service Worker (`sw.js`)**, the core assets are cached on your device the first time you visit. You can continue to explore the orbits even without an internet connection.

### 🛸 Why is Pluto included?
While officially classified as a Dwarf Planet, Pluto remains a significant part of astronomical study and the Kuiper Belt. In this app, we include it to provide a complete historical and scientific perspective.

---

## 🚀 Development Journey
This project followed a full **SDLC (Software Development Life Cycle)**:
1.  **Phase 1 (MVP):** Basic 3D spherical geometry and orbital math.
2.  **Phase 2 (UX):** Adding TTS audio, the Cosmic Quiz, and the draggable UI.
3.  **Phase 3 (DevOps):** Custom domain routing, SSL enforcement, and PWA configuration.
4.  **Phase 4 (Production):** Implementing PBR textures, dynamic lighting, skybox integration, and scalable JSON data structures.

---

## 👨‍💻 Author
**Project Created by dinzimelle** *Passionate about EdTech, 3D Graphics, and Modern Web Architecture.*

---
© 2026 solarsystem3d.space

# 🪐 Solar System 3D (v2.0 - Production)
**An Interactive, Photorealistic EdTech Universe Built for the Next Generation of Explorers.**

🚀 **Live Site:** [solarsystem3d.space](https://solarsystem3d.space)

---

## 📖 Project Overview
Solar System 3D is a high-performance, web-based astronomical simulation designed to bridge the gap between static textbooks and immersive learning. Developed as a Progressive Web App (PWA), it combines real-world orbital physics with cinematic 3D graphics to provide an accessible STEM tool for students of all ages.

## 🛠️ Technical Stack
* **Engine:** Three.js (WebGL)
* **Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3
* **Deployment:** GitHub Pages + Namecheap DNS
* **Architecture:** PWA (Service Workers, Manifest API)
* **Assets:** 2K PBR (Physically Based Rendering) Textures

## ✨ Key Features
* **Dynamic Lighting & Shadows:** Utilizing `MeshStandardMaterial` and `PointLight` to simulate realistic sunlight behavior.
* **AI Narrator:** Integrated Web Speech API for an interactive, audio-guided tour of the planets.
* **Gamified Learning:** A "Cosmic Quiz" module with randomized logic and celebratory visual feedback.
* **Mobile-First UX:** A custom-coded **Draggable Info Panel** to solve screen real-estate challenges on mobile devices.
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
1.  **Phase 1 (MVP):** Basic 3D shapes and orbital math.
2.  **Phase 2 (UX):** Adding TTS audio, the Cosmic Quiz, and the draggable UI.
3.  **Phase 3 (DevOps):** Custom domain routing, SSL enforcement, and PWA configuration.
4.  **Phase 4 (Refining):** Transitioning from Low-Poly colors to Photorealistic PBR Textures.

---

## 👨‍💻 Author
**Project Created by dinzimelle** *Passionate about EdTech, 3D Graphics, and Modern Web Architecture.*

---
© 2026 solarsystem3d.space

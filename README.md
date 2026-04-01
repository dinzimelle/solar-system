# 🪐 Solar System 3D (v2.2.1 - Production)
**An Interactive, Photorealistic EdTech Universe Built for the Next Generation of Explorers.**

🚀 **Live Site:** [solarsystem3d.space](https://solarsystem3d.space)

---

## 📖 Project Overview
Solar System 3D is a high-performance, web-based astronomical simulation designed to bridge the gap between static textbooks and immersive learning. Developed as a Progressive Web App (PWA), it combines real-world orbital physics with cinematic 3D graphics to provide an accessible STEM tool for students of all ages.

## 🚀 What's New in Version 2.2.1
Our latest production build focuses on immersive HUD elements, seamless mobile UX, and enterprise-grade security:
* **Supply Chain Protection (v2.2.1 Patch):** Implemented Subresource Integrity (SRI) cryptographic hashes on all external CDN libraries to block malicious script injections.
* **Holographic Planetary Labels:** Added 3D, camera-facing sci-fi sprites with high-visibility, kid-friendly bold neon text for effortless navigation.
* **Smart Toggle Zoom:** Streamlined mobile UX. Users can now simply tap a focused planet a second time to instantly zoom back out to the full solar system view.
* **Cinematic News Ticker:** A sleek, black-and-white auto-scrolling release notes marquee that provides updates and automatically dismisses after one cycle.
* **Dynamic Knowledge Engine:** Features 10 facts for the Sun and 5 for each planet, randomly shuffling on every click to increase replayability.
* **Multi-Set Quiz System:** The "Cosmic Quiz" now randomly selects from 4 different question banks per session.

## 🛡️ Security & Privacy
This application is engineered to be 100% compliant with school IT environments:
* **Zero-Backend Architecture:** As a static web application, there are no databases, user accounts, or server-side vulnerabilities to exploit.
* **Subresource Integrity (SRI):** All third-party libraries are locked with SHA-512 cryptographic hashes to prevent supply-chain tampering.
* **COPPA & GDPR Compliant:** We utilize GoatCounter for telemetry—a privacy-first, cookie-free analytics platform. We do not track personal data, serve ads, or sell user information.

## 🛠️ Technical Stack
* **Engine:** Three.js (WebGL) for 60fps 3D rendering.
* **Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3.
* **Deployment:** GitHub Pages + Namecheap DNS.
* **Architecture:** PWA (Service Workers, Manifest API).
* **Telemetry:** GoatCounter (Privacy-First Analytics).

## ✨ Core Features
* **Draggable & Collapsible UI:** Info and Quiz panels can be minimized and dragged anywhere on the screen to free up space on mobile devices.
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
4.  **Phase 4 (Production V2):** Implementing PBR textures, dynamic lighting, skybox integration, 2D Canvas Sprites for HUD labels, and scalable JSON data structures.
5.  **Phase 5 (Security):** Hardening external assets with SRI hashing for IT compliance.

---

## 👨‍💻 Author
**Project Created by dinzimelle** *Passionate about EdTech, 3D Graphics, and Modern Web Architecture.*

---
© 2026 solarsystem3d.space. All Rights Reserved. This software and its source code may not be copied, distributed, or modified without express written permission.

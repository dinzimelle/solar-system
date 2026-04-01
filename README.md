# 🪐 Solar System 3D (v2.3.0 - Production)
**An Interactive, Photorealistic EdTech Universe Built for the Next Generation of Explorers.**

🚀 **Live Site:** [solarsystem3d.space](https://solarsystem3d.space)

---

## 📖 Project Overview
Solar System 3D is a high-performance, web-based astronomical simulation designed to bridge the gap between static textbooks and immersive learning. Developed as a Progressive Web App (PWA), it combines real-world orbital physics with cinematic 3D graphics to provide an accessible STEM tool for students of all ages.

---

## 📜 Version History & Changelog

### 🚀 v2.3.0 (Infrastructure & Scale)
* **Global Edge Caching:** Integrated Cloudflare CDN to cache 2K photorealistic textures at the edge, reducing bandwidth consumption by 95% and ensuring zero-downtime scaling during viral traffic spikes.
* **Unified Draggable Dashboard:** The Time Warp controls are now a fully modular, draggable, and collapsible widget, matching the Info and Quiz panels to free up critical screen space on mobile.
* **UI Polish:** Added an un-intrusive legal copyright footer and refined the Matrix-green terminal signature.

### 🛡️ v2.2.1 (Security Patch)
* **Supply Chain Protection:** Implemented Subresource Integrity (SRI) cryptographic hashes on all external CDN libraries (Three.js, OrbitControls, Canvas Confetti) to block malicious script injections and ensure IT compliance for schools.

### 🛸 v2.2.0 (The HUD Update)
* **Holographic Planetary Labels:** Added 3D, camera-facing sci-fi sprites with high-visibility, kid-friendly bold neon text for effortless navigation.
* **Smart Toggle Zoom:** Streamlined mobile UX. Users can tap a focused planet a second time to instantly zoom back out to the full solar system view.
* **Cinematic News Ticker:** A sleek, black-and-white auto-scrolling release notes marquee that provides updates and automatically dismisses after one cycle.

### 🌌 v2.0.0 (The Immersion Update)
* **Photorealistic Environment:** Upgraded from basic colors to high-definition 2K planetary texture maps and integrated a massive, drifting Milky Way skybox.
* **Dynamic Knowledge Engine:** Expanded the database to feature 10 facts for the Sun and 5 for each planet, randomly shuffling on every click to increase replayability.
* **Multi-Set Quiz System:** Rebuilt the "Cosmic Quiz" to randomly select from 4 different question banks per session.
* **AI Narrator Enhancements:** Upgraded the Web Speech API integration for smoother, more accessible auditory learning.

---

## 🛡️ Security, Privacy & Infrastructure
This application is engineered to be 100% compliant with school IT environments and highly resilient to traffic surges:
* **High-Availability Scaling:** Proxied through Cloudflare for enterprise-grade DDoS protection, auto-minification, and global asset delivery.
* **Zero-Backend Architecture:** As a static web application, there are no databases, user accounts, or server-side vulnerabilities to exploit.
* **COPPA & GDPR Compliant:** We utilize GoatCounter for telemetry—a privacy-first, cookie-free analytics platform. We do not track personal data, serve ads, or sell user information.

## 🛠️ Technical Stack
* **Engine:** Three.js (WebGL) for 60fps 3D rendering.
* **Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3.
* **Infrastructure:** GitHub Pages + Cloudflare CDN + Namecheap DNS.
* **Architecture:** PWA (Service Workers, Manifest API).
* **Telemetry:** GoatCounter (Privacy-First Analytics).

---

## ❓ Frequently Asked Questions (FAQ)

### 💻 How do I install this on my phone?
Since this is a **Progressive Web App (PWA)**, you don't need the App Store. Simply open [solarsystem3d.space](https://solarsystem3d.space) in your mobile browser, tap the **Share** button (iOS) or **Three Dots** (Android), and select **"Add to Home Screen."**

### 🌑 Why are some sides of the planets dark?
The simulation uses a realistic **Single Point Light Source** located at the center of the Sun. Just like in the real solar system, planets have a "Day Side" and a "Night Side" based on their position relative to the Sun.

### ⚙️ Can I use this offline?
Yes! Thanks to the custom **Service Worker (`sw.js`)**, the core assets are cached on your device the first time you visit. You can continue to explore the orbits even without an internet connection.

---

## 🚀 Development Journey
This project followed a full **SDLC (Software Development Life Cycle)**:
1.  **Phase 1 (MVP):** Basic 3D spherical geometry and orbital math.
2.  **Phase 2 (UX):** Adding TTS audio, the Cosmic Quiz, and the draggable UI.
3.  **Phase 3 (DevOps):** Custom domain routing, SSL enforcement, and PWA configuration.
4.  **Phase 4 (Production V2):** Implementing PBR textures, dynamic lighting, skybox integration, and 2D Canvas Sprites.
5.  **Phase 5 (Security):** Hardening external assets with SRI hashing for IT compliance.
6.  **Phase 6 (Infrastructure):** Migrating DNS to Cloudflare for edge caching and infinite scalability.

---

## 👨‍💻 Author
**Project Created by dinzimelle** *Passionate about EdTech, 3D Graphics, and Modern Web Architecture.*

---
© 2026 solarsystem3d.space. All Rights Reserved. This software and its source code may not be copied, distributed, or modified without express written permission.

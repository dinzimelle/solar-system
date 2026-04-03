# 🪐 Solar System 3D (v3.1.0 - Production)
**An Interactive, Photorealistic EdTech Universe Built for the Next Generation of Explorers.**

🚀 **Live Site:** [solarsystem3d.space](https://solarsystem3d.space)

---

## 📖 Project Overview
Solar System 3D is a high-performance, web-based astronomical simulation designed to bridge the gap between static textbooks and immersive learning. Developed as a Progressive Web App (PWA), it combines real-world orbital physics with cinematic 3D graphics to provide an accessible STEM tool for students of all ages.

---

## 📜 Version History & Changelog

### 🌔 v3.1.0 (The Moon Update)
* **Hierarchical Scene Graph:** Upgraded the 3D physics engine to support relative sub-orbits, allowing moons to dynamically orbit their host planets while the planets orbit the Sun.
* **Luna Integration:** Added Earth's Moon with custom textures, scale, and orbital mechanics.
* **Expanded Gamification:** Increased the Toddler Track discovery maximum to 11 celestial bodies, adding new confetti and audio triggers for finding the Moon.
* **Massive Trivia Expansion:** Fully integrated the expanded knowledge database, featuring 20 unique facts for the Sun and multiple randomized facts for every planet and moon.

### 📱 v3.0.2 (The PWA & Mobile Polish Patch)
* **Full PWA Offline Support:** Completely integrated `manifest.json` and `sw.js` Service Worker. Users can now install the app natively on iOS (Safari), Android (Chrome), and Desktop for a 100% offline, fullscreen experience.
* **Bento Grid Landing Page:** Re-architected the entry point (`index.html`) into a modern marketing landing page featuring CSS-generated twinkling stars and glassmorphism cards.
* **Notch Dodging:** Integrated Apple's `env(safe-area-inset)` CSS variables so the UI elegantly dodges physical camera notches on modern devices (like the iPhone 16 Pro) in landscape mode.
* **Auto-Minimize Viewport:** On devices smaller than 950px, all UI panels now automatically start in a collapsed state to maximize the 3D viewing area on load.

### 🏆 v3.0.1 (The HUD Polish Update)
* **Draggable Profile HUD:** The new Profile HUD now utilizes the unified draggable panel architecture.
* **Landscape Flexbox Scroll:** Fixed CSS overflow behaviors to trigger hardware-accelerated touch scrolling inside panels when viewing long text on short landscape screens.

### 🎮 v3.0.0 (The Gamification Update)
* **Dual-Track Progression Engine:** Introduced a two-tier reward system to accommodate all age groups:
  * **Toddler Discovery Track:** Awards Gold Stars (⭐) and confetti for clicking and discovering celestial bodies.
  * **Learner XP Track:** Awards XP for correct quiz answers, allowing students to rank up through 5 progressive tiers.
* **Persistent Browser Saves:** Integrated `localStorage` to save progression with zero backend requirements.
* **Social Web Share API:** Added an interactive "Share Achievement" button that hooks into native mobile share sheets.

### 🌌 v2.7.0 (The Deep Space Update)
* **Andromeda Galaxy Integration:** Implemented an external `THREE.PlaneGeometry` mesh featuring the Andromeda Galaxy in the deep background.

### 🧑‍🚀 v2.6.0 (The Personalized Journey Update)
* **Dynamic AI Onboarding:** Added an interactive welcome terminal capturing name, gender, and future STEM role.
* **Personalized AI Narration:** The Web Speech API dynamically greets users by their chosen title.

### 📱 v2.5.0 (The Mobile UX Update)
* **Native Mobile Responsiveness:** Smart Orientation Docking for Portrait/Landscape modes.

### ☄️ v2.4.0 (The Outer Rim Update)
* **Majestic Kuiper Belt:** Integrated a high-performance particle system rendering 3,000 icy debris bodies.

### 🚀 Legacy Infrastructure
* Global Edge Caching via Cloudflare.
* Subresource Integrity (SRI) cryptographic hashes.
* Holographic Planetary Labels & Smart Toggle Zoom.

---

## 🛡️ Security, Privacy & Infrastructure
* **Zero-Backend Architecture:** Static web application with `localStorage` progression. No server-side vulnerabilities.
* **COPPA & GDPR Compliant:** 100% School Safe. Cookie-free analytics via GoatCounter. No personal data tracking.
* **High-Availability Scaling:** Proxied through Cloudflare for global asset delivery.

## 🛠️ Technical Stack
* **Engine:** Three.js (WebGL)
* **PWA:** Native Service Workers & Web App Manifests
* **Infrastructure:** GitHub Pages + Cloudflare CDN

---

## 👨‍💻 Author
**Project Created by dinzimelle** *Passionate about EdTech, 3D Graphics, and Modern Web Architecture.*

---
© 2026 solarsystem3d.space. All Rights Reserved.

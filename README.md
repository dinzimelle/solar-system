# 🪐 Solar System 3D (v3.0.1 - Production)
**An Interactive, Photorealistic EdTech Universe Built for the Next Generation of Explorers.**

🚀 **Live Site:** [solarsystem3d.space](https://solarsystem3d.space)

---

## 📖 Project Overview
Solar System 3D is a high-performance, web-based astronomical simulation designed to bridge the gap between static textbooks and immersive learning. Developed as a Progressive Web App (PWA), it combines real-world orbital physics with cinematic 3D graphics to provide an accessible STEM tool for students of all ages.

---

## 📜 Version History & Changelog

### 🏆 v3.0.1 (The HUD Polish Update)
* **Draggable Profile HUD:** The new Profile HUD now utilizes the unified draggable panel architecture, allowing users to reposition it freely.
* **Minimizable HUD:** Added a minimize toggle (`−`/`+`) to the Profile HUD to save screen real estate.
* **Advanced Mobile Docking:** Refactored CSS media queries to ensure the new HUD stacks cleanly on portrait screens and docks elegantly into the top-left corner on landscape screens without overlapping the Quiz or Info panels.

### 🎮 v3.0.0 (The Gamification Update)
* **Dual-Track Progression Engine:** Introduced a two-tier reward system to accommodate all age groups:
  * **Toddler Discovery Track:** Awards Gold Stars (⭐) and confetti for clicking and discovering celestial bodies (Max: 10 Stars).
  * **Learner XP Track:** Awards XP for correct quiz answers, allowing students to rank up through 5 progressive tiers (Space Cadet 🚀 ➔ Universe Master 👑).
* **Persistent Browser Saves:** Integrated `localStorage` to save user names, avatars, XP, and discovered planets across sessions with zero backend requirements.
* **Social Web Share API:** Added an interactive "Share Achievement" button that hooks into native mobile share sheets or desktop clipboards, allowing users to safely share their rank.

### 🌌 v2.7.0 (The Deep Space Update)
* **Andromeda Galaxy Integration:** Implemented an external `THREE.PlaneGeometry` mesh featuring the Andromeda Galaxy in the deep background. Uses `THREE.AdditiveBlending` for an organic, glowing telescope effect and a slow cinematic rotation tied to the global Time Warp engine.

### 🧑‍🚀 v2.6.0 (The Personalized Journey Update)
* **Dynamic AI Onboarding:** Added an interactive welcome terminal that captures the user's name, gender, and future STEM role.
* **Personalized AI Narration:** The Web Speech API now greets users by their formal chosen title (e.g., "Commander Alex").
* **Gamified Praise System:** The Cosmic Quiz now celebrates completions with personalized, randomized audio praises.

### 📱 v2.5.0 (The Mobile UX Update)
* **Native Mobile Responsiveness:** Smart Orientation Docking for Portrait/Landscape modes.
* **Hardware-Accelerated Scrolling:** Buttery-smooth touch swiping for landscape UI panels.

### ☄️ v2.4.0 (The Outer Rim Update)
* **Majestic Kuiper Belt:** Integrated a high-performance particle system rendering 3,000 icy debris bodies orbiting beyond Neptune.

### 🚀 v2.3.0 (Infrastructure & Scale)
* **Global Edge Caching:** Integrated Cloudflare CDN.
* **Unified Draggable Dashboard:** Modularized the Time Warp controls.

### 🛡️ v2.2.1 (Security Patch)
* **Supply Chain Protection:** Implemented Subresource Integrity (SRI) cryptographic hashes.

### 🛸 v2.2.0 (The HUD Update)
* **Holographic Planetary Labels & Smart Toggle Zoom.**

### 🌌 v2.0.0 (The Immersion Update)
* **Photorealistic Environment:** 2K maps and Milky Way skybox.
* **Dynamic Knowledge Engine & Multi-Set Quizzes.**

---

## 🛡️ Security, Privacy & Infrastructure
* **High-Availability Scaling:** Proxied through Cloudflare for DDoS protection and global asset delivery.
* **Zero-Backend Architecture:** Static web application with `localStorage` progression. No server-side vulnerabilities.
* **COPPA & GDPR Compliant:** Cookie-free analytics via GoatCounter. No personal data tracking.

## 🛠️ Technical Stack
* **Engine:** Three.js (WebGL)
* **Infrastructure:** GitHub Pages + Cloudflare CDN
* **Telemetry:** GoatCounter (Privacy-First)

---

## 👨‍💻 Author
**Project Created by dinzimelle** *Passionate about EdTech, 3D Graphics, and Modern Web Architecture.*

---
© 2026 solarsystem3d.space. All Rights Reserved.

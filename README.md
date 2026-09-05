# Amol Khartade — Portfolio Website

> **Lead Mobile Engineer | AI-Augmented Developer**  
> *"Architecting high-performance, offline-first mobile ecosystems at scale."*

A developer-focused, high-performance personal portfolio website built with **Next.js (App Router)**, **Three.js**, **Tailwind CSS**, and **Framer Motion**, engineered for static export and hosting on **GitHub Pages**.

---

## ⚡ Tech Stack

- **Framework**: Next.js 15 (App Router, Static HTML Export)
- **3D Graphics**: Three.js (Optimized WebGL particle constellation & digital grid with mouse parallax damping)
- **Styling**: Tailwind CSS (OLED dark palette, custom glassmorphism, glowing telemetry)
- **Animation**: Framer Motion (Smooth scroll reveals, staggered cards, interactive tabs)
- **Icons**: Lucide React (Accessible SVGs, zero emojis)
- **Hosting**: GitHub Pages (Automated CI/CD via GitHub Actions)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Static Export (for GitHub Pages)
```bash
npm run build
```
This generates a static build in the `out/` directory ready for deployment on any static hosting provider.

---

## 🌐 GitHub Pages Deployment

### Option A: Automatic Deployment (Recommended)
This repository includes a pre-configured GitHub Actions workflow in `.github/workflows/deploy.yml`.

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete high-performance portfolio website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to **Settings** > **Pages** in your GitHub repository.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Every push to `main` will automatically build and publish your portfolio!

### Option B: Custom Base Path (Project Pages vs User Pages)
- If deploying to `https://<username>.github.io` (User page), `NEXT_PUBLIC_BASE_PATH` is automatically empty (`""`).
- If deploying to `https://<username>.github.io/<repo-name>` (Project page), the included GitHub Actions workflow automatically extracts and sets `NEXT_PUBLIC_BASE_PATH` so all assets and links resolve correctly.

---

## 📐 Architecture Highlights

- **Locked 60 FPS Three.js Canvas**: Clamped pixel ratio (`Math.min(window.devicePixelRatio, 1.75)`), Page Visibility API pause on background tab, instanced buffer geometry, and alpha compositing.
- **Offline-First Narrative**: Detailed case study on LeadPluss CRM highlighting Shopify FlashList recycling, TanStack Query, and react-native-mmkv v4 cold boot caching (<1ms).
- **AI-Augmented Engineering**: Highlighting workflow acceleration via Claude Code, Gemini CLI, and Google Antigravity.
- **Strict A11y & Performance**: 4.5:1 text contrast ratio, focus rings for keyboard navigation, and responsive layouts across 375px, 768px, 1024px, and 1440px breakpoints.

# CLAUDE.md — Developer Guidelines & Runbook

This document serves as the guide for updating, maintaining, and testing the **Shah Ahmed Saad Rupai Portfolio Website**.

---

## 🛠️ Project Structure
* **`index.html`**: The main static Single Page Application (SPA). Styled using Tailwind CSS (via CDN) with a custom minimalist "cool slate & warm amber" dark theme.
* **`data.js`**: Contains the structured database (`resumeData`) representing the resume content. The website renders all fields dynamically from this file.
* **`.github/workflows/static.yml`**: Official GitHub Actions Pages deployment pipeline. Automatically packages and publishes the site to GitHub Pages on every push to `main`.
* **`resume.pdf`**: The compiled PDF resume linked for download on the website.
* **`avatar.jpeg`**: The profile image displayed in the hero section.

---

## 🚀 How to Update Content
To update any information on the website (e.g., adding a new role, skill, or project):
1. Open and edit **`data.js`**.
2. Modify the JSON-like `resumeData` object.
3. Save the file. The changes will instantly reflect in `index.html` on the next page reload.

---

## 🎨 Design System & Custom Components
* **Base Background**: Cool Slate / Deep Blue (`bg-[#040711]`) with a subtle mesh grid background overlay (`.ambient-bg`).
* **Accent Colors**: Amber (`text-amber-400`, `shadow-glow-amber`) and orange gradients.
* **Card Interactivity (`.neon-card`)**: 
  * Features cursor spotlight borders (`::before`) and inner radial highlights (`::after`) that automatically track mouse movement via CSS custom variables (`--mouse-x`, `--mouse-y`) updated by JavaScript listeners.
* **Marquee Slider**:
  * An infinite horizontal ticker track (`.animate-marquee`) loop sliding core technologies between the Hero and Work Experience sections.
* **Scroll-driven Animations**:
  * Integrated a lightweight `IntersectionObserver` that attaches class `active` to elements with `reveal-left` and `reveal-right` classes as they enter the screen, triggering slide-in animations.

---

## 🧪 Deployment Verification Checklist
Before committing and pushing changes, verify:
* **All links are active** and point to the correct external addresses (especially LinkedIn, GitHub, and email).
* **Blank Screen Check**: Ensure `h1` has `id="hero-name"` and the description has `id="hero-summary"`.
* **Grid responsiveness** works correctly on viewports from 320px (mobile iPhone SE) to 1024px+ (desktop).
* **Tab/iPad compatibility**:
  * Desktop links are hidden below the `lg` breakpoint to avoid overlap.
  * Projects grid renders as two columns on `md` (768px).
* **Timeline dots** align perfectly with the vertical connector line (Line: `before:left-[11px] sm:before:left-[14px]`, Dot: `-left-[20px] sm:-left-[25px]`).
* **GitHub Pages is set to GitHub Actions** in the repository Settings page.

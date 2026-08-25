# CLAUDE.md — Developer Guidelines & Runbook

This document serves as the guide for updating, maintaining, and testing the **Shah Ahmed Saad Rupai Portfolio Website**.

---

## 🛠️ Project Structure
* **`index.html`**: The main static Single Page Application (SPA). Styled using Tailwind CSS (via CDN) with a custom minimalist "cool slate & warm amber" dark theme.
* **`data.js`**: Contains the structured database (`resumeData`) representing the resume content. The website renders all fields dynamically from this file.
* **`.github/workflows/static.yml`**: Official GitHub Actions Pages deployment pipeline. Automatically packages and publishes the site to GitHub Pages on every push to `main`.
* **`resume.pdf`**: The compiled PDF resume linked for download on the website.

---

## 🚀 How to Update Content
To update any information on the website (e.g., adding a new role, skill, or project):
1. Open and edit **`data.js`**.
2. Modify the JSON-like `resumeData` object.
3. Save the file. The changes will instantly reflect in `index.html` on the next page reload.

---

## 🎨 Theme Specs & Style Guide
* **Base Background**: Cool Slate / Deep Blue (`bg-[#080c15]`)
* **Surfaces & Cards**: Slate (`bg-slate-900`, `bg-[#111827]`) with `backdrop-filter: blur(12px)` and thin borders.
* **Accents (Warm)**: Amber / Copper (`text-amber-400`, `bg-amber-500/10`, `border-amber-500/30`).
* **Fonts**: `Plus Jakarta Sans` (headings/body) and `JetBrains Mono` (tags, dates, and metrics).

---

## 🧪 Deployment Verification Checklist
Before committing and pushing changes, verify:
* **All links are active** and point to the correct external addresses (especially LinkedIn, GitHub, and email).
* **Grid responsiveness** works correctly on viewports from 320px (mobile) to 1024px+ (desktop).
* **Tab/iPad compatibility** renders a double-column layout for projects (`md:grid-cols-2`).
* **Timeline dots** align perfectly with the vertical connector line.
* **GitHub Pages is set to GitHub Actions** in the repository Settings page.

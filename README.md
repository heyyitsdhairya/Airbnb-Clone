# Airbnb Clone - Frontend Listing Page

A pixel-perfect, responsive replica of the Airbnb listing page built with **React** and **Vite**, featuring interactive components, keyboard-accessible modals, dynamic sticky navigation, and smooth carousels.

---

## 🚀 How to Run the Project Locally

Follow these simple steps after unzipping the project folder:

### 1. Install Dependencies
Open your terminal inside the unzipped folder and run:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

### 3. Open in Browser
Click on the local URL printed in your terminal (typically `http://localhost:5173`) to view the application.

---

## 📁 Key Files & Documentation

* **`src/`** — All React components, CSS stylesheets, and data structures.
* **`public/`** — High-resolution listing imagery, icons, and SVG assets.
* **`AI_Prompts_Log.txt`** — Detailed, chronological record of prompts and AI-assisted workflow.
* **`architecture.png`** — High-level architecture diagram illustrating component hierarchy, state flow, and data layers.

---

## ✨ Features Implemented

* **Hero Photo Gallery**: 5-image CSS Grid with hover effects and fullscreen triggers.
* **Sticky Reservation Sidebar**: Interactive booking card with price calculation and reservation toast.
* **Scroll-Triggered Sticky Navigation**: Dynamic top navigation bar with active section spy.
* **Full-Screen Photo Tour**: Categorized photo masonry overlay with background scroll lock.
* **Accessible Image Lightbox**: Single-image focus viewer supporting keyboard controls (`Escape` to close, `ArrowLeft` / `ArrowRight` to navigate).
* **"More Stays Nearby" Carousel**: Custom flexbox carousel with bounded sliding logic.

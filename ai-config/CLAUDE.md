# Claude AI Assistant Configuration (CLAUDE.md)

This document provides system context, guidelines, and project conventions for Claude Code and AI assistants working on the Airbnb Clone project.

---

## 🛠️ Project & Build Commands

* **Install Dependencies**: `npm install`
* **Development Server**: `npm run dev` (Runs locally on `http://localhost:5173`)
* **Production Build**: `npm run build` (Outputs optimized bundle to `dist/`)
* **Preview Production**: `npm run preview`
* **Linter**: `npm run lint` (`oxlint`)

---

## 🏗️ Architecture & Component Hierarchy

* **Framework**: React 19 + Vite 8
* **Styling**: Vanilla CSS with Design Tokens (`src/index.css`)
* **Icons**: Lucide React + Curated SVGs

### Component Layout (`src/components/`):
* `Header/` — Main navigation bar with Airbnb search pill and user menu.
* `Listing/` — Core listing components:
  * `TitleSection.jsx` & `Gallery.jsx` — 5-image masonry layout utilizing CSS Grid.
  * `ContentLeft.jsx` — Host details, sleeping arrangements, description, and 2-column amenities grid.
  * `Sidebar.jsx` — Sticky reservation card with price calculation and non-navigating toast trigger.
  * `StickyNav.jsx` — Scroll-triggered secondary navigation bar with section spy.
  * `ThingsToKnowSection.jsx` — "More stays nearby" carousel with calculated transform boundaries.
* `Modals/` — Overlay layer:
  * `PhotoTourModal.jsx` — Categorized full-screen photo gallery.
  * `LightboxModal.jsx` — Accessible single-image viewer with keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`).
  * `AmenitiesModal.jsx` — Complete amenities list with background scroll-lock.
  * `ReserveToast.jsx` — Slide-up booking notification (3-second auto-dismiss).

---

## 🎨 Coding & Styling Guidelines

1. **State Management**:
   * Global state for modals, active categories, and toast notifications is managed in `src/App.jsx`.
   * Body scroll-locking (`overflow: hidden`) must be applied whenever a full-screen modal mounts.

2. **Styling Rules**:
   * Use CSS variables defined in `src/index.css` (e.g., `--primary: #FF385C`, `--text-dark: #222222`).
   * Prefer **CSS Grid** for 2D masonry layouts and **Flexbox** for 1D horizontal bars and carousels.
   * Maintain desktop-first pixel parity matching official Airbnb specifications.

3. **Accessibility**:
   * All modals must capture `Escape` key events to close cleanly.
   * Lightbox gallery navigation must listen for `ArrowLeft` and `ArrowRight`.

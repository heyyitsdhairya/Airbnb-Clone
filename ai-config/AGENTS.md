# AI Agents & Skills Configuration

This document outlines the specialized AI agents, skills, and assistive personas utilized during the iterative development of the Airbnb Clone listing page.

---

## 🤖 Configured AI Agents & Personas

### 1. Frontend Architecture Agent
* **Role**: Project Scaffolding & Component Design
* **Scope**:
  * Initialized the React + Vite modular architecture.
  * Designed the component hierarchy (`Header`, `Listing`, `Modals`, `Sidebar`).
  * Established clean state management in `App.jsx` using React Hooks (`useState`, `useEffect`).

### 2. UI/UX & CSS Styling Specialist Agent
* **Role**: Visual Replication & Design System
* **Scope**:
  * Established global CSS variables and design tokens in `index.css` (Airbnb Coral `#FF385C`, text colors, typography).
  * Built the 5-image photo gallery utilizing rigid **CSS Grid** masonry.
  * Developed the **Flexbox** layout for the Header search pill, 2-column amenities, and sticky sidebar.
  * Structured the "More Stays Nearby" carousel with hardware-accelerated CSS transforms.

### 3. Interaction & Accessibility (A11y) Agent
* **Role**: Keyboard Navigation & Modal Lifecycle
* **Scope**:
  * Configured keyboard event listeners for the `LightboxModal` (`ArrowLeft`, `ArrowRight` for image navigation, `Escape` to close).
  * Implemented dynamic body scroll-locking (`overflow: hidden`) to prevent background page scroll while overlays are active.
  * Engineered the non-navigating Reserve button click interception with an auto-dismissing Toast notification (3-second lifecycle).

### 4. Visual QA & Verification Agent
* **Role**: Sub-pixel Comparison & Behavioral Debugging
* **Scope**:
  * Analyzed user-provided reference screenshots and video recordings.
  * Fine-tuned price font-weights, rating gaps, and star icon alignments.
  * Identified and resolved the carousel translation overshoot bug to ensure cards stop flush at viewport boundaries.

---

## 🛠️ Custom Skills & Rule Sets Applied

| Skill / Rule Set | Description | Purpose |
| :--- | :--- | :--- |
| `component-driven-react` | Enforces single-responsibility, reusable functional components. | Clean, maintainable codebase |
| `modal-accessibility-rules` | Prescribes focus management, keyboard handlers, and scroll-locks. | WCAG-compliant UX |
| `screenshot-guided-dev` | Directs UI synthesis based on visual assets due to bot-blockers. | Authentic clone fidelity |
| `state-driven-interactions` | Dictates event-driven UI updates over hardcoded routing. | Native desktop application feel |

---

## 💻 Environment Setup
* **Development Environment**: Antigravity AI IDE / Modern AI-Assisted Workspace
* **Framework**: React 19 + Vite 8
* **Icons**: Lucide React + Curated SVG Assets

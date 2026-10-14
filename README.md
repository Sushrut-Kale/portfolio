# Sushrut Kale — Developer Portfolio V5

A high-fidelity editorial developer portfolio inspired by Modnia and Swiss modernist graphic design. Features section-based viewport switching, a layered engineering-themed custom cursor, standardized two-column project archives, verified collegiate timeline (2025–2029), and zero-compromise performance.

---

## Technology Stack

- **Core & Runtime:** React 19, JavaScript (ES2022+), Vite 6
- **Styling:** Vanilla CSS with custom design tokens (warm ivory, rich near-black, terracotta `#AC4033`, taupe `#988B82`)
- **Icons:** Lucide React
- **Hosting & Deployment:** Vercel (SPA routing configured) and GitHub Pages compatible
- **Zero Heavy Dependencies:** Hardware-accelerated CSS transforms and lightweight RAF loops for 60+ FPS motion

---

## Directory Structure

```text
portfolio/
├── public/
│   ├── cer/              # 22 verified certification PDFs and images
│   ├── events/           # National hackathon certificates & defense slides
│   ├── experience/       # MITAOE internship documents & credentials
│   └── pfp/              # Profile portraits
├── src/
│   ├── animations/       # Motion tokens and easing curves
│   │   └── easings.js
│   ├── components/       # Reusable UI modules & overlays
│   │   ├── ComingSoonToast.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── MediaModal.jsx
│   │   ├── Navbar.jsx
│   │   ├── Preloader.jsx
│   │   ├── ProjectCaseModal.jsx
│   │   └── ResumeModal.jsx
│   ├── data/             # Centralized portfolio data
│   │   └── portfolioData.js
│   ├── hooks/            # Reusable accessibility and UI hooks
│   │   └── useReducedMotion.js
│   ├── sections/         # The 7 primary editorial sections
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Events.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── styles/           # Global design tokens and styles
│   │   └── index.css
│   ├── App.jsx           # Section-switching coordinator & modal host
│   └── main.jsx          # Application entry point
├── index.html            # SPA host HTML
├── package.json
├── vercel.json           # Vercel SPA routing and caching rules
├── vite.config.js
└── README.md
```

---

## Local Development

### 1. Installation

```bash
npm install
```

### 2. Run Local Development Server

```bash
npm run dev
```

The application will start at `http://127.0.0.1:5173/`.

### 3. Build for Production

```bash
npm run build
```

Production assets will be built to the `dist/` directory.

### 4. Preview Production Build

```bash
npm run preview
```

---

## Deployment Instructions

### Vercel (Recommended)

1. Push your changes to GitHub repository: `https://github.com/Sushrut-Kale/portfolio.git`.
2. In the [Vercel Dashboard](https://vercel.com), select **Add New Project** → **Import Git Repository**.
3. Select `Sushrut-Kale/portfolio`.
4. Configure project settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Vercel will build and assign a production URL.
6. The included `vercel.json` automatically manages SPA rewrites for deep section links (`#about`, `#projects`, etc.) and sets 1-year immutable caching on production assets.

---

## Environment Variables

The project operates without mandatory third-party credentials for base display. For custom contact form forwarding:

| Variable | Description | Default |
| :--- | :--- | :--- |
| `VITE_CONTACT_ENDPOINT` | Optional webhook/API URL for dispatching contact forms | Uses fallback `mailto:` handler |

> **Note:** Never commit secret API keys or token files to version control.

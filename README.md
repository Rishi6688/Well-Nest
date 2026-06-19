# WellNest — Holistic Health Companion

<div align="center">

![WellNest](https://img.shields.io/badge/WellNest-Holistic%20Health-4CAF50?style=for-the-badge&logo=leaf&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Multilingual](https://img.shields.io/badge/Languages-7%20Supported-blueviolet?style=for-the-badge)
![Mobile First](https://img.shields.io/badge/Mobile-First-00BCD4?style=for-the-badge&logo=android&logoColor=white)

**Feel better, naturally.**

*A mobile-first wellness web app that delivers home remedies, guided cooking, lifestyle plans, and nearby doctor/yoga finder — all in your language.*

</div>

---

## What I Built

WellNest is a **holistic health companion** designed to be the first stop before a clinic visit. You describe your symptoms, and WellNest gives you a personalized plan: proven home remedies, step-by-step voice-guided cooking instructions, a lifestyle recovery schedule, and a map to nearby doctors and yoga centers if you need professional help.

The entire app runs in the browser with zero dependencies — no frameworks, no build tools, no server. Just HTML, CSS, and vanilla JavaScript. It was built mobile-first to serve users on any device, and ships with 7-language support including 4 Indian regional languages.

---

## App Overview

```
┌─────────────────────────────────────────────────┐
│                   WellNest                      │
│          Holistic Health Companion              │
├─────────────┬─────────────┬─────────────────────┤
│   Home      │  Remedies   │   Cook Guide        │
│  (index)    │  (results)  │   (cook)            │
│             │             │                     │
│ · Symptom   │ · Remedy    │ · GPS-style voice   │
│   selector  │   cards     │   cooking steps     │
│ · Quick     │ · Lifestyle │ · Ingredient list   │
│   tags      │   plan      │ · Step progress     │
│ · Search    │ · Cook tabs │ · Prev / Next nav   │
├─────────────┴─────────────┴─────────────────────┤
│              Find Help  (help)                  │
│    Map · Doctors nearby · Yoga centers          │
└─────────────────────────────────────────────────┘
```

---

## Features

### Symptom-Based Personalisation
Select from a grid of common conditions — Cold & Fever, Headache, Cough, Tiredness, Diabetes, Hypertension, Stomach Ache, Anxiety — or type any symptom in the search bar. WellNest instantly generates a tailored wellness plan.

### Home Remedy Cards
Each remedy comes with:
- Ingredient list with quantities
- Time estimate and remedy category
- Benefit tags (Antiviral, Immunity Boost, Respiratory, Anti-bacterial, etc.)
- Direct link to the guided Cook Guide

### GPS-Style Cook Guide
The cook guide works like navigation for your kitchen:
- Step-by-step numbered instructions
- Voice guide toggle that follows your progress
- Progress bar tracking completion
- Previous / Next step navigation
- Active step highlighting with smooth animations

### Lifestyle Recovery Plan
Beyond remedies, WellNest recommends a full recovery schedule: Walking (20 mins), Yoga Nidra (30 mins), Music Therapy, Social connection, Rest (8–9 hrs), and Breathing exercises.

### Nearby Doctor & Yoga Finder
If home remedies aren't enough, the Find Help page surfaces:
- General physicians, Ayurvedic specialists, and ENT doctors within a 10 km radius
- Local yoga and meditation centers with session details
- One-tap booking and visit buttons

### 7-Language Support
The entire app is localised with a persistent language switcher:

| Language | Code |
|----------|------|
| English  | en   |
| Hindi (हिंदी) | hi |
| Tamil (தமிழ்) | ta |
| Telugu (తెలుగు) | te |
| Kannada (ಕನ್ನಡ) | kn |
| Français | fr   |
| Español  | es   |

Language preference is saved to `localStorage` and restored on every page load.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic, accessible) |
| Styling | CSS3 (custom properties, flexbox, grid, keyframe animations) |
| Logic | Vanilla JavaScript (ES6+) |
| I18n | Custom dictionary-based translation engine (`lang.js`) |
| Storage | `localStorage` for language persistence |
| Fonts | Playfair Display (headings), system stack (body) |

No npm. No build step. No runtime dependencies. Open `index.html` and it works.

---

## Project Structure

```
well-nest/
├── index.html        # Home — symptom selector & search
├── results.html      # Remedy plan — tabbed remedies, cook guide, lifestyle
├── cook.html         # GPS-style step-by-step cooking guide
├── help.html         # Nearby doctors & yoga centers map view
│
├── styles.css        # Core layout & home screen styles
├── results.css       # Remedy cards, tabs, lifestyle grid
├── cook.css          # Dark cook-guide header, step rows
├── help.css          # Map placeholder, doctor & yoga list cards
├── global.css        # Shared: nav bar, lang bar, animations, utilities
│
├── app.js            # Symptom selection, tab switching, page routing
├── cook.js           # GPS step navigation, voice toggle logic
└── lang.js           # I18n dictionary & language switching engine
```

---

## Getting Started

No installation required.

```bash
# Clone the repository
git clone https://github.com/Rishi6688/Well-Nest.git

# Open the app
cd Well-Nest
# Double-click index.html  OR  serve with any static server:
npx serve .
```

Then open `http://localhost:3000` in your browser (or just open `index.html` directly).

---

## How It Works

```
User selects symptoms
        ↓
WellNest routes to results.html?symptom=<name>
        ↓
  ┌─────────────────────────────┐
  │  Remedies tab (default)     │ ← Remedy cards with ingredients
  │  Cook Guide tab             │ ← GPS step-by-step voice guide
  │  Lifestyle tab              │ ← Recovery activities + doctor map
  └─────────────────────────────┘
        ↓
User taps "Start guided cook" → cook.html (full GPS experience)
        ↓
User taps "Find nearby help"  → help.html (doctors + yoga centers)
```

---

## Screens at a Glance

| Screen | Description |
|--------|-------------|
| **Home** | Hero section, symptom chip grid, search bar, quick-access tags |
| **Results** | Summary banner, 3-tab plan (Remedies / Cook / Lifestyle) |
| **Cook Guide** | Dark header, voice-bar GPS, 5-step ingredient walkthrough |
| **Find Help** | Map view, doctor list with distance, yoga center list |

All screens share a persistent bottom navigation bar and a scrollable language switcher at the top.

---

## Design Principles

- **Mobile-first** — viewport locked, no user-scalable, touch-optimised tap targets
- **Zero friction** — no sign-up, no account, no API keys needed to run
- **Inclusive** — 7 languages with font adjustments for Indic scripts
- **Natural feel** — green-forward palette, Playfair Display headings, smooth fade-slide transitions

---

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you'd like to change.

---

## License

MIT © [Rishi6688](https://github.com/Rishi6688)

---

<div align="center">

Built with care. No prescriptions required.

</div>

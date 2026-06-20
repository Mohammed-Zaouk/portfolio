# zaouk.dev

My personal portfolio — built with React, TypeScript, and Vite. It showcases three production projects I built and shipped solo: **DawaMZ**, **MZNovels**, and **RedactMZ**, along with case studies that walk through the architecture, challenges, and results of the first two.

🔗 **Live:** [zaouk.dev](https://zaouk.dev)

## Features

- **Multilingual** — English, French, Arabic (RTL), and Japanese, with a custom language context and per-page translation files
- **Case studies** — in-depth write-ups for DawaMZ and MZNovels: architecture, tech stack, challenges, results, and screenshots
- **Frosted-glass navbar** with scroll-aware transitions
- **Responsive design** with device mockups (desktop + mobile) for each project
- **404 page** with the same multilingual support as the rest of the site

## Tech Stack

- **Framework:** React + TypeScript
- **Build tool:** Vite
- **Routing:** React Router
- **Styling:** Plain CSS (component-scoped stylesheets)
- **Deployment:** Vercel

## Project Structure

```
src/
├── assets/              # Images and static assets
├── Components/          # Shared UI components (navbar, footer, etc.)
├── Context/             # Language context + per-project translation files
├── Pages/
│   ├── case-study/      # DawaMZ and MZNovels case study pages
│   └── index.tsx
├── Styles/              # Component and page stylesheets
├── App.tsx
├── global.css
└── main.tsx

public/
├── dawamz-docs/         # DawaMZ screenshots and assets
├── mznovels-docs/       # MZNovels screenshots and assets
├── docs/
└── favicon/
```

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Featured Projects

### DawaMZ
A multilingual pharmacy finder for Morocco — native mobile app (React Native + Expo) and companion website (React + Vite), sharing a single Supabase backend. 50,000+ installs on the Play Store.

### MZNovels
A free novel reading and publishing platform built with Django, serving 100,000+ users and 4M+ page views.

### RedactMZ
A browser-based, client-side PDF redaction tool — everything runs in the browser with JavaScript and HTML5 Canvas, so no files are ever uploaded to a server.

Full write-ups for DawaMZ and MZNovels are available on the live site under their respective case study pages.

## License

This repository is for personal/portfolio use. Feel free to look around, but please don't copy the content or design wholesale.
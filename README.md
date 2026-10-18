# Water my Plants

Water my Plants is a UX case-study portfolio page by Mahiya H. It documents the design process for helping indoor plant owners remember watering schedules, identify plant needs, and track watering history.

The project presents the full design story—from user research and synthesis through persona development, information architecture, wireframes, visual design, and the final prototype.

## Live site

[View the deployed case study](https://mahiya-water-my-plants.netlify.app/)

## Tech stack

- React
- Vite
- Tailwind CSS v4 through the Vite plugin
- Lucide icons
- Responsive React components and an accessible image viewer

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The site will be available at the local URL shown by Vite, usually [http://localhost:5173](http://localhost:5173).

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the local Vite development server. |
| `npm run dev` | Start the local Vite development server. |
| `npm run build` | Create an optimized production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |

## Project structure

```text
src/
├── App.jsx                         Application shell, footer, and image viewer state
├── tailwind.css                    Tailwind tokens and global accessibility defaults
├── navbar/navbar.jsx               Responsive navigation with section indicators
├── case-study/
│   ├── CaseStudy.jsx               Complete case study and all seven paper sketches
│   └── EvidenceFigure.jsx          Research figures and keyboard-accessible image viewer
├── assets/                         Original sketches and interface imagery
└── dashboard/                      Previous components, no longer imported by the app
```

## Verification

The production build can be checked with:

```bash
npm run build
```

## Deployment

The project is configured for a standard Vite deployment. Netlify can deploy it using:

- Build command: `npm run build`
- Publish directory: `dist`


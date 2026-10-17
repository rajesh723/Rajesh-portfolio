# Rajesh Kumar — Developer Portfolio

A responsive dark-theme portfolio built with React, TypeScript, Vite, and Tailwind CSS v4. The UI uses custom components and Lucide icons with a shadcn-inspired visual language; you can add shadcn/ui primitives later if desired.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build for production

```bash
npm run build
npm run preview
```

## Before publishing

Search for these placeholders and replace them with your real details:

- `YOUR_EMAIL@example.com` in `src/App.tsx`
- `https://github.com/` links with your GitHub profile and specific project repositories
- `https://linkedin.com/` links with your LinkedIn profile
- Add your actual resume PDF in `public/` and link it from the hero if you want a resume download
- Add real demo URLs only for projects that are deployed and available

Project cards currently describe the projects based on the implementation details provided. Do not imply a live demo or public repository until those URLs are ready.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. In Vercel, select **Add New → Project** and import that repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. Vercel detects the Vite project automatically in most cases.

No environment variables are required for this static portfolio.

## Structure

```text
src/
  App.tsx       Main sections, project details modal, mobile nav, copy-email interaction
  main.tsx      React entry point
  styles.css    Theme, responsive layout, animations, reduced-motion support
index.html      Metadata and font loading
```

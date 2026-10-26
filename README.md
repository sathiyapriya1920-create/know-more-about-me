# Sathiya Priya C — WordPress Developer Portfolio

Interactive developer portfolio built with **React + Vite**. Positions Sathiya as a WordPress Developer with experience in theme/plugin development, Elementor, SEO tooling, and related frontend work at ZozoThemes (AbileWeb Technologies).

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Customize content

All editable content lives under `src/data/`:

| File | Purpose |
|------|---------|
| `profile.js` | Name, contact, LinkedIn/GitHub, headline, metrics, about, philosophy, résumé flag |
| `projects.js` | Project cards, case studies, live URLs, stack, editable placeholders |
| `experience.js` | ZozoThemes role, dates, expandable responsibility groups |
| `skills.js` | Skill categories and items |

### Résumé

Set `resumeFilename` in `profile.js` to a PDF name (e.g. `'resume.pdf'`) and place the file in `public/documents/`. Until then, the download button stays hidden.

### Placeholders still marked [EDIT …]

- Cookieshift: exact personal contribution, stack, outcomes
- SEO Agent: feature list and outcomes
- Schema Booster: public URL and contribution details
- Office automation: tools, workflows, outcomes
- Zozo Nest: finer contribution details

Update those strings in `src/data/projects.js` (and experience automation notes) when you have confirmed facts. Do not invent metrics.

## Project structure

```
src/
  components/
    layout/       ErrorBoundary, Footer
    navigation/   Sticky Nav + mobile drawer
    projects/     ProjectCard, ProjectModal
    sections/     Hero, Overview, About, Skills, Projects, Experience, Philosophy, Contact
    ui/           Button, Badge, SectionHeading
  data/           profile, projects, experience, skills
  hooks/          useReveal, useScrollSpy, useMediaQuery, useTyping, useCountUp
  styles/         variables.css, globals.css
```

## Features

- Dark charcoal theme with teal/cyan accents
- Staggered hero entrance + typing role rotation
- Animated 140+ themes metric on scroll
- Interactive skill category tabs
- Project category filters + accessible case-study modal
- Expandable experience areas with timeline
- Sticky nav with active-section spy and Escape-close mobile menu
- Copy-email contact actions
- Reduced-motion support throughout
- Résumé button only when a file is configured

## Deploy (Vercel / GitHub)

1. Push this repo to GitHub.
2. Import the project in Vercel (framework: Vite).
3. After you have a live URL, set canonical / Open Graph URLs in `index.html`.

## Confirmed links

- Cookieshift: https://cookieshift.com/
- SEO Agent: https://seo-agent.cookieshift.com/
- Zozo Portfolio: https://wordpress.org/plugins/zozo-portfolio/
- Zozo Nest: https://wordpress.org/plugins/zozonest
- ZozoThemes: https://zozothemes.com/
- LinkedIn: https://www.linkedin.com/in/sathiya-priya-c-4a59a8444/
- GitHub: https://github.com/sathiyapriyac-coder

## License

Private portfolio project. Use and adapt for personal job applications.

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
| `projects.js` | Project cards, case studies, live URLs, stack, screenshots |
| `experience.js` | ZozoThemes role, dates, expandable responsibility groups |
| `skills.js` | Skill categories and items |

### Résumé

Set `resumeFilename` in `profile.js` to a PDF name (e.g. `'resume.pdf'`) and place the file in `public/documents/`. Until then, the download button stays hidden.

### Project screenshots

Cards and case studies support an optional screenshot. Save a 16:9 image (about 1200×675) in `public/images/` and set it on the project:

```js
image: '/images/zozo-portfolio.png',
```

Projects without an image simply render without one.

### Missing details never show

Any project field set to `null` (or an empty `stack: []`) is hidden automatically, so the site never shows placeholder text. Fill fields in only when you have confirmed facts — do not invent metrics.

`draftProjects` at the bottom of `src/data/projects.js` holds work that is parked (currently **Schema Booster**, until it has a public URL and confirmed contribution). Move an entry into `projects` when it is ready.

### Before you apply — checklist

- [ ] Add your résumé PDF to `public/documents/` and set `resumeFilename` in `profile.js` (the button appears automatically)
- [ ] Add a screenshot for each featured project
- [ ] Cookieshift: add your exact contribution, stack and outcome (`projects.js`)
- [ ] SEO Agent: add the confirmed feature list and outcome
- [ ] Check every project year matches your real involvement
- [ ] Add a professional photo or avatar if you want one (optional)

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
- Animated metrics on scroll (years of experience is calculated from your start date)
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
3. `index.html` already has canonical / Open Graph URLs for `https://sathiya-digital-portfolio.vercel.app/`. If you change the domain, update those URLs and `public/og-image.png` (the link-preview image).

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

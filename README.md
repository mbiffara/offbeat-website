# Offbeat Landing

Marketing site for OFFBEAT — a single-page Next.js app rendered from a JSON content file.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, <head> metadata
│   ├── page.tsx          # Single landing page — composes all sections
│   ├── globals.css       # Tailwind base + custom tokens + marquee keyframes
│   └── icon.png          # Browser favicon (auto-wired by Next.js)
├── components/
│   ├── Header.tsx        # Floating top nav + mobile menu
│   ├── Hero.tsx          # Title, video bg, stats cards, mobile ribbon
│   ├── OurSystem.tsx     # "What we do" items + image gallery
│   ├── Credentials.tsx   # "Built for ourselves" highlights
│   ├── BuiltFor.tsx      # Audience cards + image gallery
│   ├── WeWork.tsx        # Partner logos
│   ├── ContactUs.tsx     # Contact form
│   ├── Faq.tsx           # Collapsible Q&A
│   └── Footer.tsx        # Footer + social
└── content/
    └── landing.json      # All copy & list data for every section
public/
├── images/               # Photos, hero video, ondas gif
└── icons/                # hexicon.png used in card item rows
```

Every section reads its strings from `src/content/landing.json`; the components only handle layout and styling.

## Editing content

Open `src/content/landing.json`. Each top-level key maps to a section component and only the fields shown here are read — adding extras is fine but they will be ignored.

```jsonc
{
  "header":   { "logoAlt", "nav": [{ "label", "href" }], "cta": { "label", "href" } },
  "hero":     { "eyebrow", "titleStart", "titleAccent", "slogan", "marquee": [], "stats": [{ "value", "label", "description" }] },
  "ourSystem":   { "eyebrow", "titleStart", "titleAccent", "description", "items": [{ "title", "description" }] },
  "credentials": { "eyebrow", "titleStart", "titleAccent", "description", "highlights": [{ "title", "description" }] },
  "builtFor": { "eyebrow", "titleStart", "titleAccent", "cards": [{ "title", "description" }] },
  "weWork":   { "eyebrow", "titleStart", "titleAccent", "titleEnd", "partners": [{ "name", "logo" }] },
  "contact":  { "title", "description", "privacy", "fields": [{ "name", "label", "placeholder", "type" }], "serviceQuestion", "services": [], "submitLabel" },
  "faq":      { "eyebrow", "titleAccent", "titleEnd", "items": [{ "question", "answer" }] },
  "footer":   { "logoAlt", "tagline", "contact", "copyright", "legal": [{ "label", "href" }], "credit", "social": [{ "label", "href" }] }
}
```

### Two-color titles

Most sections render their section title as `{titleStart} {titleAccent}` where `titleAccent` is rendered in violet. To put the violet word first, swap the two strings.

### Highlight titles with mid-string accents

In `credentials.highlights[].title`, wrap the violet portion in asterisks:

```json
{ "title": "*OWN TRACK* RECORD" }   →  OWN TRACK (violet) RECORD (white)
{ "title": "PULL *QUOTE*" }         →  PULL (white) QUOTE (violet)
```

This is parsed in `Credentials.tsx` — splitting on `*` and toggling the violet class for odd-indexed parts.

### Hero ribbon (mobile only)

The violet marquee at the bottom of the hero shows the `hero.stats` entries (rendered as `"{value} {label}"`) and is hidden at `md+` because the stats cards take over on desktop.

### Adding/removing list items

`stats`, `items`, `highlights`, `cards`, `partners`, `services`, `faq.items`, and `nav` are all arrays — add or remove entries directly and the page will re-render. Number of items affects grid columns at breakpoints (e.g. `lg:grid-cols-4` in BuiltFor/OurSystem); if you change list length significantly, double-check the grid still looks right.

## Replacing images

All static assets live in `public/`:

| File | Where it's used |
|---|---|
| `public/images/hero.mp4` + `hero-poster.jpg` | Hero background video |
| `public/images/system-{1,2,3}.jpg` | OurSystem gallery (referenced in `OurSystem.tsx`) |
| `public/images/credentials.jpg` | Credentials section image |
| `public/images/builtfor-{1..5}.jpg` | BuiltFor horizontal gallery |
| `public/images/ondasexpansivas.gif` | Background wave behind Contact + FAQ (desktop only) |
| `public/images/partner-*.png` | Referenced from `weWork.partners[].logo` |
| `public/icons/hexicon.png` | Card-item icon used by OurSystem, Credentials, BuiltFor |
| `src/app/icon.png` | Browser favicon — Next.js picks this up automatically |

Image paths in `landing.json` (e.g. partner logos) are public-relative — use `/images/foo.png`, not `public/images/foo.png`.

To change the favicon, replace `src/app/icon.png` (any square PNG — Next.js handles sizing). Hard-reload to bust the browser cache.

## Styling

Tailwind v4 with custom tokens defined in `src/app/globals.css`:

- `offbeat-black`, `offbeat-white`, `offbeat-violet`, `offbeat-violet-soft`, `offbeat-violet-border` — brand colors
- `rounded-card`, `rounded-button` — shared radii
- `animate-marquee` — drives the hero ribbon (30s linear loop)

Mobile/desktop split: components use Tailwind's `md:` prefix throughout. A few sections (OurSystem, BuiltFor) render their item lists as horizontally-scrolling cards on mobile and switch to a static grid at `md+`.

## Deployment

Targets Vercel — no extra config needed beyond connecting the repo. The production build is `next build`.

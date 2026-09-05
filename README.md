# Justus Dieckman — developer portfolio

A personal portfolio for freelance work, networking, and publicly inspectable projects.

- Live: https://justus-dieckman.sage-swift-4852.chatgpt.site
- GitHub: https://github.com/Hacker-pro-discord/justus-portfolio
- Contact: https://contra.com/justus_dieckman_a7zjair6

## Stack and development

React 19, TypeScript, Vinext (Next.js-compatible routing on Vite), and CSS. Fully static output; no backend, accounts, database, analytics, or contact-data collection. Hosted publicly with Sites. The Sites starter includes a retained Shadcn component catalog; the portfolio uses semantic HTML and Lucide icons.

Use **Node 22.22.0** (see `.node-version`). Node 24.13.1 on Windows exhibited an upstream libuv shutdown assertion after prerendering; Node 22 completes normally.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm test
npm start
```

The local production preview is at http://localhost:4173. Deploy **dist/client**, not the project source or the generated server directory. Build artifacts and environment files are ignored by Git. No runtime secrets are needed.

## Editing

- `app/page.tsx`: sections, project descriptions, services, contact links
- `app/globals.css`: responsive design, colors, reduced-motion behavior
- `app/layout.tsx`: page title, description, canonical URL, social metadata
- `public/`: optimized repository screenshot, original favicon and social card, robots and sitemap
- `scripts/check.mjs`: 12 checks of the actual production export
- `scripts/preview.mjs`: local-only static preview server

Update the origin in the layout, sitemap, robots file, and README together when changing domains. `scripts/social-card.py` regenerates the original typographic Open Graph image using Pillow and Windows Segoe UI fonts; it is optional and not part of the build.

Lint covers authored code. The unused generated component catalog and its bundled mobile hook are excluded from lint, but remain covered by TypeScript. The Next image rule is disabled because the screenshot is already optimized to WebP, dimensioned, lazy-loaded, and served directly by static hosting.

## Content evidence

Inspected public README files and implementation on September 5, 2026. This portfolio does not assert that the desktop applications were executed or independently audited.

| Project | Inspected commit | Evidence |
| --- | --- | --- |
| Jinx Cleaner | `99416a046c114ec14f961c1afee2982ba6f9f8d3` | `jinx_cleaner.py`, requirements, README, repository screenshots |
| AI Image Analyzer | `7074bd15823dc3d226478f5938ee2c40541300df` | Ollama client, UI modules, requirements, README |
| AI News Hub | `2637653f21ceb34fbeac84b4cf44847ee82c27c0` | RSS retrieval, filters, bookmark and HTML export functions, README |
| STL Miniature Scraper | `af7097615a7cf787beb02f78c142a6b62b039b44` | current source, provider modules, requirements, README |

The Jinx screenshot comes from `Hacker-pro-discord/Jinx-Cleaner/assets/startup-view.jpg`; its window title border was cropped and it was resized to 1440 × 764 WebP. It is a repository screenshot, not a fabricated UI. Other project visuals are workflow diagrams and icons, not screenshots. The orbital geometry, monogram, and social card are original; no Doctor Who promotional assets are used.

Jinx is described as a triage utility, not an antivirus replacement. Image analysis is model-generated critique, not objective measurement. STL discovery does not guarantee pricing, licensing, availability, or downloads. AI systems work is a small practice section; no unreleased OMEGA link or raw system prompt is published. Contact uses the supplied Contra profile; no private email is exposed.

## Validation

Run the checks above after edits. Also inspect desktop and mobile layouts, keyboard navigation, expandable project notes, links, images, and the browser console. Automated artifact checks do not replace browser or screen-reader testing. Sites publication is a separate deployment step; pushing to GitHub alone does not automatically redeploy this site.

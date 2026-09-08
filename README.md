# Justus Dieckman — developer portfolio

A personal portfolio for freelance work, networking, and publicly inspectable projects.

- Live: https://blue-box-code.netlify.app
- GitHub: https://github.com/Hacker-pro-discord/justus-portfolio
- Contact: https://contra.com/MadmanInAComputer

## Stack and development

React 19, TypeScript, Vinext (Next.js-compatible routing on Vite), and CSS. Fully static output; no backend, accounts, database, analytics, or contact-data collection. Hosted publicly on the Netlify Free plan. The Sites starter includes a retained Shadcn component catalog; the portfolio uses semantic HTML and Lucide icons.

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

The local production preview is at http://localhost:4173. Routes are `/` (overview) and `/3d-animation` (dedicated case study); `/3d-animation/` also works. Unknown paths return a real 404. Navigation uses normal anchors against the static export, so direct visits and links work without client-side routing. The Next.js HTML-link lint rule is disabled intentionally for this static-site architecture. Deploy **dist/client**, not the project source or the generated server directory. Build artifacts and environment files are ignored by Git. No runtime secrets are needed.

## Editing

- `app/page.tsx`: homepage overview, software projects, services, contact, and the 3D teaser
- `app/3d-animation/page.tsx`: aircraft case study, character-framework R&D, production flow, and route-specific metadata
- `app/3d-animation/animation.css`: styles scoped to the new case-study page
- `components/site-chrome.tsx`: shared header, navigation, and footer
- `app/globals.css`: responsive design, colors, reduced-motion behavior
- `app/layout.tsx`: page title, description, canonical URL, social metadata
- `public/`: current application screenshots, original favicon and social card, robots and sitemap
- `scripts/check.mjs`: route, link, metadata, media and content checks on the production export
- `docs/public-assets.json`: reviewed public media allowlist, with SHA-256 hashes
- `docs/animation-content.md`: evidence, asset preparation, and future case-study instructions
- `scripts/preview.mjs`: local-only static preview server

Update the origin in the layout, sitemap, robots file, and README together when changing domains. `scripts/social-card.py` regenerates the original typographic Open Graph image using Pillow and Windows Segoe UI fonts; it is optional and not part of the build.

Lint covers authored code. The unused generated component catalog and its bundled mobile hook are excluded from lint, but remain covered by TypeScript. The Next image rule is disabled because the application screenshots are small static assets, dimensioned, lazy-loaded, and served directly by static hosting.

## Content evidence

Inspected public README files and implementation on September 5, 2026. Jinx Cleaner and AI News Hub 0.2.0 were also executed and checked locally on Windows 11 / Python 3.12.11: 18 Jinx tests and 21 News Hub tests passed, as did Ruff, Bandit, compile checks and both PyInstaller packaged offline smoke tests. This is focused implementation validation, not an independent security audit. Analyzer and STL evidence remains source inspection only.

| Project | Inspected commit | Evidence |
| --- | --- | --- |
| Jinx Cleaner | `838c075b16c58a3e8e0e231c3f34693fc019b573` | Persistent quarantine/restore, process identity, Windows helpers, tests and current screenshot |
| AI Image Analyzer | `7074bd15823dc3d226478f5938ee2c40541300df` | Ollama client, UI modules, requirements, README |
| AI News Hub | `403fa6c46888346c5ed0747d6b236ee0b1e31f1e` | UTC aggregation, source health, persistent bookmarks, current dashboard and packaged smoke |
| STL Miniature Scraper | `af7097615a7cf787beb02f78c142a6b62b039b44` | current source, provider modules, requirements, README |

Fresh screenshots were captured from the actual Windows applications on September 5, 2026 and copied unchanged from their repositories: `Jinx-Cleaner/assets/jinx-cleaner-0.2.0.png` (1442 × 952, 111 KB) and `AI-News-Hub/assets/ai-news-hub-0.2.0.png` (1442 × 932, 161 KB). Jinx shows its Files/restore interface with an empty quarantine and real read-only scan counters; private process commands and file paths are not exposed. News Hub shows a live five-source refresh. No destructive system action was run for these screenshots. Analyzer and STL visuals remain diagrams/icons, not screenshots. The cinematic time-vortex and blue telephone-box artwork was generated as an original illustration, then optimized to 201 KB desktop and 65 KB mobile WebP assets. The monogram and social card are original; no Doctor Who promotional assets are used. The site intentionally reflects Doctor Who fandom without official logos or character artwork.

Jinx is described as a triage utility, not an antivirus replacement. Image analysis is model-generated critique, not objective measurement. STL discovery does not guarantee pricing, licensing, availability, or downloads. AI systems work is a small practice section; no unreleased OMEGA link or raw system prompt is published. Contact uses the corrected Contra profile and the email explicitly supplied for publication by Justus.

## Validation

Run the checks above after edits. Also inspect desktop and mobile layouts, keyboard navigation, expandable project notes, links, images, and the browser console. Automated artifact checks do not replace browser or screen-reader testing.

Netlify project `blue-box-code` is connected to `Hacker-pro-discord/justus-portfolio` as of September 7, 2026. Push verified source to `main` to trigger a production build through the repository webhook. Netlify uses a read-only deployment key for this repository. The build runs `npm run build && npm test` with Node 22.22.0 and publishes only `dist/client`, as specified in `netlify.toml`. Check the Netlify deploy log for success, then verify `/`, `/3d-animation`, navigation, and media on the live site.

For a manual fallback, build and test locally, then run `npx netlify-cli deploy --site blue-box-code --dir dist/client --prod --no-build` while signed into the owning Netlify account. The `.openai/hosting.json` file records the former Sites host, retained as a backup; deployment uses the existing Netlify project.

## 3D & Animation structure

The homepage retains the existing artwork, typography, colors, software/automation content, and contact links. Its addition is a small aircraft teaser linking to the dedicated page. Shared navigation includes a visible 3D & Animation link on desktop and mobile.

The animation page separates the aircraft production from reusable character-system R&D. Blender produces the cinematic picture. Unreal is presented accurately as a parallel import, scale, scene-assembly, and Sequencer proof. Character retargeting, reusable visemes, and character export to Unreal are not claimed as completed work. An original character visual demonstration remains a future addition.

New public media lives in `public/images/animation/` and `public/media/animation/`. The aircraft visuals are rendered from the actual local models and scene, with insignia removed. The 12-second H.264 preview is silent at the file level, has playback controls, and loads only on request. No source project, character prototype, reference library, audio, or private repository is bundled.

To add a future case study, follow `docs/animation-content.md`. Keep claims tied to inspected work; update the media allowlist only after reviewing each new asset. Keep raw projects and review screenshots outside `public/` and deploy only `dist/client/`. Netlify rewrites in `netlify.toml` serve the exported animation HTML for both URL forms without masking unknown paths.

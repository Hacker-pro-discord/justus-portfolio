import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
const dir = 'dist/client';
const html = readFileSync(join(dir, 'index.html'), 'utf8');
let passed = 0;
function check(label, condition) {
  assert.ok(condition, label);
  passed++;
  console.log(`PASS ${label}`);
}
check('one main heading', (html.match(/<h1\b/g) || []).length === 1);
check(
  'name and primary technologies are rendered',
  ['Justus', 'Dieckman', 'Python', 'JavaScript', 'TypeScript'].every((s) =>
    html.includes(s),
  ),
);
check(
  'all four projects have public repository links',
  [
    'Jinx-Cleaner',
    'AI-Image-Analyzer-and-Image-to-Prompt',
    'AI-News-Hub',
    'STL_Miniature_Scraper',
  ].every((s) => html.includes(`https://github.com/Hacker-pro-discord/${s}`)),
);
check(
  'Contra contact destination',
  html.includes('https://contra.com/justus_dieckman_a7zjair6'),
);
check(
  'all fragment links resolve',
  [...html.matchAll(/href="#([^"]+)"/g)].every((m) =>
    html.includes(`id="${m[1]}"`),
  ),
);
check(
  'title and description',
  /<title>Justus Dieckman/.test(html) && /name="description"/.test(html),
);
check(
  'canonical and social metadata',
  ['rel="canonical"', 'property="og:image"', 'name="twitter:card"'].every((s) =>
    html.includes(s),
  ),
);
check(
  'semantic language and skip navigation',
  html.includes('lang="en"') && html.includes('Skip to content'),
);
check(
  'local assets exist',
  [...html.matchAll(/(?:src|href)="(\/[^"#?]+)"/g)].every(
    (m) => m[1] === '/' || existsSync(join(dir, m[1])),
  ),
);
check(
  'images have alt and dimensions',
  [...html.matchAll(/<img\b[^>]*>/g)].every(
    (m) =>
      /alt="[^"]+"/.test(m[0]) && /width=/.test(m[0]) && /height=/.test(m[0]),
  ),
);
check(
  'robots, sitemap, favicon and social card',
  ['robots.txt', 'sitemap.xml', 'favicon.svg', 'og-image.png'].every((f) =>
    existsSync(join(dir, f)),
  ),
);
check(
  'no local auth or preview references',
  !/localhost|sites\.test|seedy@|__debug/.test(html),
);
console.log(`${passed} production artifact checks passed.`);

import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, extname } from 'node:path';
import { createHash } from 'node:crypto';
const dir = 'dist/client';
const html = readFileSync(join(dir, 'index.html'), 'utf8');
const animation = readFileSync(join(dir, '3d-animation.html'), 'utf8');
function resolvePublic(path) {
  const url = new URL(path, 'https://blue-box-code.netlify.app');
  const name = url.pathname.replace(/\/$/, '') || '/';
  if (name === '/') return join(dir, 'index.html');
  const exact = join(dir, name);
  return existsSync(exact) ? exact : exact + '.html';
}
let passed = 0;
function check(label, condition) {
  assert.ok(condition, label);
  passed++;
  console.log(`PASS ${label}`);
}
check('public pages preserve UTF-8 punctuation', !/\u00e2\u20ac|\u00e2\u2020|\ufffd/.test(html + animation));
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
  'both updated desktop projects use current screenshots and functionality',
  [
    'jinx-cleaner-0.2.0.png',
    'ai-news-hub-0.2.0.png',
    'checksum-verified restore',
    'source health',
  ].every((text) => html.includes(text)),
);
check(
  'corrected Contra and direct email destinations',
  html.includes('https://contra.com/justus_dieckman_a7ziair6') &&
    html.includes('mailto:dieckmanjustus@gmail.com'),
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
  [...html.matchAll(/(?:src|srcSet|href)="(\/[^"#?]+)"/gi)].every((m) =>
    existsSync(resolvePublic(m[1])),
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
for (const [route, page] of [
  ['/', html],
  ['/3d-animation', animation],
]) {
  check(
    `${route}: one heading and main landmark`,
    (page.match(/<h1\b/g) || []).length === 1 &&
      (page.match(/<main\b/g) || []).length === 1,
  );
  check(
    `${route}: shared navigation`,
    ['/#work', '/3d-animation', '/#services', '/#about', '/#contact'].every(
      (href) => page.includes(`href="${href}"`),
    ),
  );
  check(
    `${route}: images described and dimensioned`,
    [...page.matchAll(/<img\b[^>]*>/g)].every(
      (m) =>
        /alt="[^"]+"/.test(m[0]) && /width=/.test(m[0]) && /height=/.test(m[0]),
    ),
  );
  check(
    `${route}: assets and internal links resolve`,
    [...page.matchAll(/(?:href|src|srcSet|poster)="((?:\/|#)[^"]*)"/gi)].every(
      (m) => {
        const url = new URL(m[1], `https://blue-box-code.netlify.app${route}`);
        const file = resolvePublic(url.pathname);
        return (
          existsSync(file) &&
          (!url.hash ||
            readFileSync(file, 'utf8').includes(`id="${url.hash.slice(1)}"`))
        );
      },
    ),
  );
}
check(
  'new route has distinct metadata',
  animation.includes('<title>3D &amp; Animation') &&
    animation.includes(
      'rel="canonical" href="https://blue-box-code.netlify.app/3d-animation"',
    ) &&
    animation.includes(
      'property="og:url" content="https://blue-box-code.netlify.app/3d-animation"',
    ),
);
check(
  'new route is in sitemap',
  readFileSync(join(dir, 'sitemap.xml'), 'utf8').includes(
    '/3d-animation</loc>',
  ),
);
check('real 404 export exists', existsSync(join(dir, '404.html')));
check(
  'Netlify serves both route forms',
  ['/3d-animation"', '/3d-animation/"'].every((s) =>
    readFileSync('netlify.toml', 'utf8').includes(`from = "${s}`),
  ),
);
check(
  'video is user-initiated with a poster and native controls',
  /<video[^>]*controls=""/.test(animation) &&
    /<video[^>]*preload="none"/.test(animation) &&
    /<video[^>]*poster=/.test(animation) &&
    !/<video[^>]*autoplay/i.test(animation),
);
const video = readFileSync(join(dir, 'media/animation/aircraft-action.mp4'));
check('preview is under 2 MB', video.length < 2_000_000);
// MP4 handler atoms identify track type; a muted attribute alone is insufficient.
const handlers = [];
for (
  let offset = video.indexOf('hdlr');
  offset !== -1;
  offset = video.indexOf('hdlr', offset + 4)
)
  handlers.push(video.toString('ascii', offset + 12, offset + 16));
check(
  'preview has video and no audio handler',
  handlers.includes('vide') && !handlers.includes('soun'),
);
check(
  'preview starts with its movie metadata',
  video.indexOf('moov') < video.indexOf('mdat'),
);
const approved = JSON.parse(readFileSync('docs/public-assets.json', 'utf8'));
const files = readdirSync(dir, { recursive: true, withFileTypes: true })
  .filter((f) => f.isFile())
  .map((f) => join(f.parentPath, f.name));
const mediaExtensions = /\.(png|jpe?g|webp|gif|svg|mp4|webm|avif|ico)$/i;
check(
  'every public visual is explicitly approved',
  files
    .filter((f) => mediaExtensions.test(f))
    .every((f) => {
      const relative =
        '/' + f.replaceAll('\\', '/').replace(/^dist\/client\//, '');
      return (
        approved[relative] ===
        createHash('sha256').update(readFileSync(f)).digest('hex')
      );
    }),
);
check(
  'no raw production files or extra audio bundled',
  files.every(
    (f) =>
      !/\.(blend\d?|fbx|gltf|glb|obj|uasset|umap|uproject|wav|mp3|ogg|aac|flac|zip|7z|kdenlive|py)$/i.test(
        f,
      ),
  ),
);
check(
  'no new private production references in public output',
  files
    .filter((f) =>
      ['.html', '.txt', '.js', '.css', '.json', '.svg', '.xml'].includes(
        extname(f),
      ),
    )
    .every((f) => {
      let text = readFileSync(f, 'utf8');
      // The owner explicitly requires the pre-existing homepage identity to stay.
      // Only its existing fandom wording is allowed, only in the two home exports.
      if (/[\\/]index\.(html|txt)$/.test(f)) {
        const count = (text.match(/Doctor Who/g) || []).length;
        if (count > (f.endsWith('.html') ? 2 : 1)) return false;
        text = text.replaceAll('Doctor Who', '');
      }
      return !/doctor[\s_-]*who|matt[\s_-]*smith|tardis|\bBBC\b|private[_-]backup|C:[\\/]+Users|file:\/\//i.test(
        text,
      );
    }),
);
console.log(`${passed} production artifact checks passed.`);

import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve('dist/client');
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};
const port = Number(process.env.PORT || 4173);
http
  .createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(
        new URL(req.url, 'http://localhost').pathname,
      );
      const file = resolve(
        root,
        '.' + pathname + (pathname.endsWith('/') ? 'index.html' : ''),
      );
      if (!file.startsWith(root + sep)) {
        res.writeHead(403);
        res.end();
        return;
      }
      const body = await readFile(file);
      res.writeHead(200, {
        'Content-Type': types[extname(file)] || 'application/octet-stream',
      });
      res.end(body);
    } catch {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
    }
  })
  .listen(port, '127.0.0.1', () =>
    console.log(`Static preview: http://localhost:${port}/`),
  );

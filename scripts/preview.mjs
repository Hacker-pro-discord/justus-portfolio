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
  '.mp4': 'video/mp4',
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
      let file = resolve(
        root,
        '.' + pathname + (pathname.endsWith('/') ? 'index.html' : ''),
      );
      if (!file.startsWith(root + sep)) {
        res.writeHead(403);
        res.end();
        return;
      }
      let body;
      try {
        body = await readFile(file);
      } catch {
        if (extname(pathname)) throw new Error('Missing file');
        file = resolve(root, '.' + pathname.replace(/\/$/, '') + '.html');
        body = await readFile(file);
      }
      if (req.headers.range) {
        const match = /^bytes=(\d+)-(\d*)$/.exec(req.headers.range);
        const start = match ? Number(match[1]) : -1;
        const end =
          match && match[2]
            ? Math.min(Number(match[2]), body.length - 1)
            : body.length - 1;
        if (start < 0 || start > end || start >= body.length) {
          res
            .writeHead(416, { 'Content-Range': `bytes */${body.length}` })
            .end();
          return;
        }
        res.writeHead(206, {
          'Content-Type': types[extname(file)] || 'application/octet-stream',
          'Accept-Ranges': 'bytes',
          'Content-Range': `bytes ${start}-${end}/${body.length}`,
          'Content-Length': end - start + 1,
        });
        res.end(
          req.method === 'HEAD' ? undefined : body.subarray(start, end + 1),
        );
        return;
      }
      res.writeHead(200, {
        'Content-Type': types[extname(file)] || 'application/octet-stream',
        'Content-Length': body.length,
        'Accept-Ranges': 'bytes',
      });
      res.end(req.method === 'HEAD' ? undefined : body);
    } catch {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(await readFile(resolve(root, '404.html')));
    }
  })
  .listen(port, '127.0.0.1', () =>
    console.log(`Static preview: http://localhost:${port}/`),
  );

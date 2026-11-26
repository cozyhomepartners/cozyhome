// Vite plugin: after the normal client build, render every public route to
// static HTML (dist/<route>/index.html) and generate sitemap.xml.
// Runs inside plain `vite build`, so Lovable's publish pipeline picks it up
// with no extra configuration.
import { build, type Plugin, type ResolvedConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const SITE_URL = 'https://www.cozyhomepartners.com';

export function prerender(): Plugin {
  let config: ResolvedConfig;
  return {
    name: 'cozyhome-prerender',
    apply: 'build',
    configResolved(c) {
      config = c;
    },
    async closeBundle() {
      if (config.build.ssr || process.env.PRERENDER_CHILD) return;

      const root = config.root;
      const outDir = path.resolve(root, config.build.outDir);
      const tmpDir = path.resolve(root, 'node_modules/.prerender');

      process.env.PRERENDER_CHILD = '1';
      try {
        await build({
          configFile: config.configFile,
          mode: config.mode,
          logLevel: 'warn',
          build: {
            ssr: 'src/entry-server.tsx',
            outDir: tmpDir,
            emptyOutDir: true,
            copyPublicDir: false,
            rollupOptions: { external: ['bufferutil', 'utf-8-validate'] }, // optional native deps of ws
          },
          ssr: { noExternal: true }, // bundle deps so ESM/CJS interop never bites
        });
      } finally {
        delete process.env.PRERENDER_CHILD;
      }

      const entry = fs.readdirSync(tmpDir).find((f) => /^entry-server\.m?js$/.test(f))!;
      const { render, routes } = await import(pathToFileURL(path.join(tmpDir, entry)).href);
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf-8');

      for (const r of routes as { path: string }[]) {
        const { html, head } = render(r.path);
        const page = template
          .replace('<!--app-head-->', head)
          .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
        const file =
          r.path === '/' ? 'index.html' : r.path === '/404' ? '404.html' : `${r.path.slice(1)}/index.html`;
        fs.mkdirSync(path.dirname(path.join(outDir, file)), { recursive: true });
        fs.writeFileSync(path.join(outDir, file), page);
        // Also write /route.html: static hosts differ on whether /route maps to
        // route/index.html or route.html, so provide both.
        if (file.endsWith('/index.html')) fs.writeFileSync(path.join(outDir, `${r.path.slice(1)}.html`), page);
      }

      const today = new Date().toISOString().slice(0, 10);
      const urls = (routes as { path: string; changefreq: string; priority: number; hidden?: boolean }[])
        .filter((r) => !r.hidden)
        .map(
          (r) =>
            `  <url>\n    <loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority.toFixed(1)}</priority>\n  </url>`,
        )
        .join('\n');
      fs.writeFileSync(
        path.join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );
      fs.rmSync(tmpDir, { recursive: true, force: true });
      config.logger.info(`\n✓ pre-rendered ${routes.length} routes + sitemap.xml`);
    },
  };
}

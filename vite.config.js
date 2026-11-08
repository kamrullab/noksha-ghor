import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const ensureTrailingSlash = (value) => value.endsWith('/') ? value : `${value}/`;
const githubBuild = process.env.GITHUB_ACTIONS === 'true';
const base = process.env.SITE_BASE || (githubBuild ? '/noksha-ghor/' : '/');
const platformUrl = process.env.CANONICAL_URL || 'https://nokshaghor.pages.dev/';
const siteUrl = ensureTrailingSlash(platformUrl);

const portableSeo = {
  name: 'portable-seo',
  transformIndexHtml(html) {
    return html.replaceAll('__SITE_URL__', siteUrl);
  },
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'robots.txt',
      source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}sitemap.xml\n`,
    });
    this.emitFile({
      type: 'asset',
      fileName: 'sitemap.xml',
      source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}</loc>\n    <lastmod>2026-11-08</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
    });
  },
};

export default defineConfig({
  base,
  plugins: [react(), portableSeo],
});

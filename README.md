# নকশা ঘর

ফেনীর কনস্ট্রাকশন ও ইন্টেরিয়র ডিজাইন প্রতিষ্ঠানের জন্য তৈরি responsive Bengali business website।

## Features

- Responsive layout for mobile, tablet, laptop and large desktop
- Bengali typography and flyer inspired visual identity
- Editable interior and construction service sections
- Live React and SVG construction animation
- Mosque and religious structure design section
- Engineer profiles, click to call and WhatsApp actions
- Embedded Google Maps location
- Structured data, Open Graph, Twitter Cards, sitemap and robots metadata
- Accessible navigation and reduced motion support

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deployment

The Vite configuration automatically supports root deployments and GitHub Pages subpath deployments.

### Cloudflare Pages

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22`
- No base-path environment variable is required
- `CF_PAGES_URL` is detected automatically for canonical URL, robots and sitemap output

### Vercel

Import the GitHub repository and deploy. The included `vercel.json` supplies the build command and output directory. Vercel's production URL is detected automatically for SEO metadata.

### GitHub Pages

The included GitHub Actions workflow sets:

- `SITE_BASE=/noksha-ghor/`
- `SITE_URL=https://kamrullab.github.io/noksha-ghor/`

### Custom domain

Set `SITE_URL` to the full production URL during the build. Include `https://` and a trailing slash. Example:

```text
SITE_URL=https://www.example.com/
```

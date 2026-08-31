# Fermat Enterprises LLC — website

Company website for Fermat Enterprises LLC, served at
**https://fermatenterprisesllc.xyz**.

Vite + React + TypeScript + Tailwind, with shadcn/ui components.

## Local development

```bash
npm install
npm run dev      # http://localhost:8080
```

## Other commands

```bash
npm run build    # production build into dist/
npm run preview  # serve the built dist/ locally
npm run lint
npm run test
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages. No manual step is needed.

Two details make GitHub Pages work with this app:

- `public/CNAME` pins the custom domain. Deleting it will drop the site back
  to the `*.github.io` URL.
- `scripts/spa-fallback.mjs` copies `index.html` to `404.html` after each
  build. GitHub Pages serves `404.html` for paths it has no file for, which
  is how client-side routes such as `/services` survive a hard refresh.

# dorward.co.uk project

This is my micro-CV page.

Requires Node.js 20.19+ or 22.12+ (including newer major versions).

## Development

```
npm install
npm start
```

## Build

```
npm run build
```

Vite builds the site from `src/` into `dist/`. Files in `public/`, including
the Apache configuration and PHP error page, are copied without processing.
Run `npm run preview` to preview the build locally; PHP requires the web server.

## Deploy

Copy to the web server using scp. Use `deploy.sh` (protected by .gitignore)

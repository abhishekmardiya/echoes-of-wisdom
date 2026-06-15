# Echoes of Wisdom

Echoes of Wisdom is a single-page site that shows a list of book quotes: the quote text, the book it came from, and a layout meant to look like a marked-up page. You can use a light or dark page style.

## Tech stack

- [Next.js](https://nextjs.org/docs) 16 (App Router) and React 19
- [Tailwind CSS](https://tailwindcss.com) v4
- [Biome](https://biomejs.dev) for lint and format
- [@teispace/next-themes](https://www.npmjs.com/package/@teispace/next-themes) for theme switching (React 19–friendly, no inline script in the client tree)

## How quotes are loaded

Quotes live in code in [`src/lib/quotes.ts`](src/lib/quotes.ts). Source data is an array of **books** (`quoteBooks`): each entry has `title`, `author`, and a `quotes` array of strings. That list is flattened into exported `quotes`, where each row is a `Quote` (`text`, `title`, `author`) for the UI. There is no network request.

To add or change quotes, append or edit objects in `quoteBooks` and redeploy or refresh locally.

## Scripts

```bash
npm install
npm run dev          # dev server — http://localhost:3000
npm run build        # production build
npm run start        # serve production build
npm run lint         # biome check
npm run format       # biome format --write
npm run ts           # tsc --noEmit --watch
npm run debug-build  # next build --debug
```

## Requirements

Node.js version compatible with Next.js 16 — see [Next.js system requirements](https://nextjs.org/docs/app/getting-started/installation#system-requirements).

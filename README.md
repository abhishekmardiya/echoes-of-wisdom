# Echoes of Wisdom

Echoes of Wisdom is a single-page site that shows a list of book quotes: the quote text, the book it came from, and a layout meant to look like a marked-up page. You can use a light or dark page style.

## Tech stack

- [Next.js](https://nextjs.org/docs) 16 (App Router) and React 19
- [Tailwind CSS](https://tailwindcss.com) v4
- [Biome](https://biomejs.dev) for lint and format
- [@teispace/next-themes](https://www.npmjs.com/package/@teispace/next-themes) for theme switching (React 19–friendly, no inline script in the client tree)

## How quotes are loaded

Quotes live in code as a static list in [`src/lib/quotes.ts`](src/lib/quotes.ts). Each item has a `quote` string and a `book` string. The home page calls `quotes`, which returns that list (no network request).

To add or change quotes, edit the `quotes` array in `quotes.ts` and redeploy or refresh locally.

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # run production server
npm run lint     # biome check
npm run format   # biome format --write
```

## Requirements

- Node.js compatible with Next.js 16 (see [Next.js system requirements](https://nextjs.org/docs/app/getting-started/installation))

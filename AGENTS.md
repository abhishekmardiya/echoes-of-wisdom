<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Exports

- Use **named exports** for all application modules and React components (for example `export function QuoteCard`, `export const quotes`).
- **Default exports** are required only where the framework or a bundler expects them. Do not use `export default` for ordinary components hooks, other modules.

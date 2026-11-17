<!-- owner: @koldovsky (web team) · why: instructions every agent needs in every session · review-by: 2027-02-19 -->
# shop-web

Next.js 16 app and BFF of the Shop system. Talks to shop-pricing (:8082) and shop-orders (:8081) by URL from env.

## Commands
- Test: `npm test` · Typecheck: `npm run typecheck` · Run: `npm run dev` → :3001 (needs shop-pricing running)

## Hard rules
- The UI never computes prices; it renders cents from shop-pricing with `lib/money.ts`.
- Service URLs come from env (`.env.example`), never hard-coded hosts.
- API errors in BFF routes: see `.claude/rules/api-errors.md`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

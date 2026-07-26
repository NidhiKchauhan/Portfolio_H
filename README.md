# Hardik Baraiya — Portfolio

Next.js (App Router) + TypeScript (strict) + Tailwind CSS v4 + shadcn/ui + Framer Motion + React Three Fiber.

Design system, tokens, and rationale: see `/DESIGN.md`, `/REFERENCES.md`, and `/CONTENT.md` at the project root (one level up from this folder).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build & deploy

```bash
npm run build
npm run start   # serve the production build locally
```

Deploys to Vercel with zero configuration — connect the repo (or run `vercel`) and it will detect Next.js automatically.

**Before deploying**, set the `NEXT_PUBLIC_SITE_URL` environment variable to the real production URL (used for canonical links, Open Graph/Twitter metadata, the sitemap, and JSON-LD). Without it, metadata falls back to a placeholder Vercel-style URL.

## Adding or editing content

All real content lives in typed data files under `src/content/` — nothing is hardcoded in JSX. Editing the site's content never requires touching a component.

| To change... | Edit this file |
|---|---|
| Name, title, summary, contact info, résumé link | `src/content/profile.ts` |
| A job / add a new job | `src/content/experience.ts` — push a new `Job` object (most recent first) |
| A case study / add a new one | `src/content/case-studies.ts` — push a new `CaseStudy` object |
| Skills / toolchain groups | `src/content/skills.ts` |
| Education & certifications | `src/content/education.ts` |
| Nav links | `src/content/nav.ts` |

Adding a job or case study is always: add one object to the relevant array. No other file needs to change.

## Swapping images

Images live in `public/images/`. The only current image is `desk-illustration.webp` (decorative hero/About art — explicitly not a headshot; see `DESIGN.md`/`CONTENT.md` for why).

To swap it:
1. Drop the new file in `public/images/`.
2. Update the `src` in `src/components/sections/about.tsx`.
3. Keep `alt=""` only if the image is purely decorative; otherwise write a real, meaningful `alt`.
4. Large source images should be pre-optimized (resize + convert to WebP/AVIF) before adding — `next/image` will further optimize at build/request time, but it can't undo an oversized source file.

To add a real headshot for the About section: drop it in `public/images/`, then update `about.tsx` to render it as the primary figure (it currently deliberately omits a personal photo since none was available — see `CONTENT.md`).

## Design tokens

All color, type, spacing, radius, and motion tokens are defined in `src/app/globals.css` under `@theme inline`, `:root` (light), and `.dark`. Change a token there and it propagates everywhere — no per-component color values exist outside of the "Protocol Schematic" accent usages documented in `DESIGN.md`.

## The 3D signature

`src/components/three/dns-trace.tsx` orchestrates the hero's "DNS Resolution Trace" — it detects `prefers-reduced-motion`, WebGL support, and `navigator.hardwareConcurrency`, and falls back to a static SVG (`dns-trace-fallback.tsx`) whenever any of those say no. The actual R3F scene lives in `dns-trace-scene.tsx` and is lazy-loaded via `next/dynamic({ ssr: false })`, deferred further via `requestIdleCallback` so it never competes with initial hydration.

## Known upstream notes

- `shadcn/ui` in this project is built on `@base-ui-components/react`, not Radix — composed components use the `render` prop (`<Button render={<Link .../>} />`), not `asChild`, and boolean flags like `nativeButton={false}` are required when rendering a non-`<button>` into a `Button`.
- `lucide-react` in this version does not export brand/social icons (e.g. no `Linkedin`) from its main entry — use a generic icon or an inline SVG instead.

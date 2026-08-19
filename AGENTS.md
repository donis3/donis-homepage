<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

Personal static portfolio for **Deniz Özkan** (donis.dev). Agents should treat this as a small, opinionated Next.js site: keep changes local, match existing style, and do not invent a second architecture.

## Stack

- **Package manager:** pnpm only. Do not add `package-lock.json` or Yarn files.
- **Runtime:** Node 24+ (CI uses Node 24).
- **App:** Next.js App Router, React 19, TypeScript 6 (`strict: true`).
- **Output:** `output: "export"` in `next.config.ts`. No Route Handlers, no server-only APIs at runtime, no `next/image` optimization (`images.unoptimized: true`).
- **UI:** Tailwind CSS v4 (`app/globals.css` + `@theme`), shadcn/ui **New York**, `cn()` from `@/lib/utils`.
- **Content:** MDX in `projects/{slug}/content.mdx`, parsed with `gray-matter` + Zod, rendered with `next-mdx-remote-client/rsc`.
- **Motion:** `motion/react` (not `framer-motion`).
- **Icons:** Lucide for UI chrome; `react-icons` for brands/socials/skills. Mixing both is existing habit — do not “unify” unless asked.

## Commands

```bash
pnpm install
pnpm dev          # copies project images into public/, cleans on Ctrl+C
pnpm build        # static export to out/; postbuild copies images
pnpm lint
pnpm image-prep   # ImageMagick: PNG→JPG, sequential names, thumbnails
pnpm thumb        # thumbnails only
```

ImageMagick (`convert`) is required for `image-prep` / `thumb`.

## Layout of the repo

| Path | Role |
|------|------|
| `app/(landing)/` | Homepage sections |
| `app/(pages)/` | `/about`, `/contact`, `/projects`, `/projects/[slug]` |
| `app/(pages)/projects/[slug]/` | Project page + OG/Twitter image routes |
| `components/` | Shared UI (navbar, footer, theme, shadcn under `components/ui/`) |
| `core/` | Site data and filesystem helpers (not React-only) |
| `lib/utils.ts` | `cn`, `sleep` |
| `projects/{slug}/` | Source of truth for a project: `content.mdx` + images |
| `.tools/` | Bash image pipeline |
| `public/assets/` | Static files; **do not commit** `public/assets/projects/*` (copied at dev/build) |

Alias: `@/*` → repo root.

## Coding habits (match these)

**Formatting (Prettier):** tabs, `tabWidth: 3`, `prettier-plugin-tailwindcss` with `clsx` / `cn` as Tailwind functions. Do not reformat the whole tree.

**Files and exports**

- Pages and most components: **default export**.
- Colocate route-specific UI in `_components/` next to the route.
- Shared primitives live in `components/`; site config/data in `core/`.
- Mark `"use client"` only when the file needs browser APIs, hooks, or Motion.

**React / Next**

- Prefer Server Components for data loading (`getProjectsMetadata`, MDX, sitemap).
- Client islands for filters, drawers, theme, animations.
- Typed App Router params: `PageProps<"/projects/[slug]">` and `await params`.
- Dynamic project routes must keep `generateStaticParams`.
- Metadata on every public page (`title` / `description` / `keywords`). Title template is in `app/layout.tsx`.
- Tailwind v4 utilities already in use: `bg-linear-to-*`, `h-(--navbar-height)`, `pt-(--navbar-height)`. Do not revert to v3 gradient class names.

**shadcn**

- Config: `components.json` (RSC, CSS variables, Lucide).
- Prefer existing `Button`, `Badge`, `Drawer` (Vaul), `Carousel` (Embla).
- Custom Button variant `ghost-light` exists for the dark navbar — keep it.
- Avoid drive-by rewrites of generated `components/ui/*`.

**Data and validation**

- Project frontmatter is validated by `core/project-helpers/project-metadata-schema.ts` (`zod/v4`).
- `description` is SEO length-constrained (70–155 chars). `shortTitle` and `shortDescription` are required.
- Folder name under `projects/` **is** the slug.
- Cover/thumbnail detection is filename-based (`cover` / `thumbnail` in the name). Gallery images are `{slug}-{n}.jpg`.
- Socials: `core/socials.ts`. `isActive: false` hides an item. Email is assembled client-side (`local` + `@donis.dev`) to reduce scraping — preserve that pattern in Footer / MailButton.
- Timeline: `core/timeline.tsx` (JSX icons in data). Sort/display lives in the about page component.
- Kill switch: `NEXT_PUBLIC_ENABLE_SITE !== "1"` renders `ComingSoon` on the landing layout only.

**Styling**

- Semantic tokens (`bg-background`, `text-muted-foreground`, `border-border`) on inner pages.
- Hero is an exception: explicit cyan/black/white overlay.
- Fonts: Poppins (`--font-sans`) and Noto Sans Mono (`--font-mono`) via `next/font/google`.

## Adding or editing a project

1. Create `projects/{slug}/content.mdx` with YAML frontmatter matching the Zod schema.
2. Add `{slug}-cover.jpg` (and optional gallery images). Run `pnpm image-prep`.
3. Set `isFeatured` / `featureOrder` if it should appear in the homepage carousel.
4. Do not copy images into `public/assets/projects` by hand.

## Environment

Typed in `types/environment.d.ts`. Public values live in committed `.env` (used by local `next` and GitHub Actions). Keep secrets and machine-only overrides in `.env.local` (gitignored).

- `NEXT_PUBLIC_SITE_URL` — canonical origin (sitemap, metadataBase)
- `NEXT_PUBLIC_CONTACT_EMAIL` — local-part only (domain is hardcoded as `donis.dev`)
- `NEXT_PUBLIC_ENABLE_SITE` — `"1"` to show the real landing page
- `NEXT_PUBLIC_APP_VERSION` — injected from `package.json` in `next.config.ts`

## Deploy

GitHub Actions `.github/workflows/deploy-gh.yml`: **manual** `workflow_dispatch` → `pnpm run build` → upload `out/` → GitHub Pages. Do not assume push-to-main deploys.

## Do not

- Introduce a backend, database, or non-static Next features.
- Switch package managers or add a test framework unless asked.
- Bump major versions (`motion` 13, `lucide-react` 1, `typescript` 7) without an explicit request and a working `pnpm build`.
- Rewrite MDX project copy or timeline history unless asked.
- Store project images only under `public/`; source of truth is `projects/`.

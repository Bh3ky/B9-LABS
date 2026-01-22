# Next.js App Router Migration Plan

This plan migrates the current Vite + React app to a fully functional Next.js (React) website using the App Router. It assumes Node 18+ and keeps the existing visual language and data model.

## 1) Goals and Non-Goals
- **Goals**: Preserve UI/UX, move to Next.js App Router, enable SSR/SSG where appropriate, keep TypeScript and Tailwind, maintain current component structure.
- **Non-Goals**: Redesign the UI, replace Framer Motion, or change the core data model in `constants.ts` unless required by Next.js.

## 2) Current-State Inventory
- **Routing**: React Router with `HashRouter`.
- **Entry**: `index.html`, `index.tsx`, `App.tsx`.
- **Views**: `pages/` directory.
- **Components**: `components/` directory.
- **Data**: `constants.ts`, `types.ts`.
- **Assets**: Any static assets referenced in code or `index.html`.

## 3) Target Architecture (Next.js App Router)
- **App Router**: `app/` directory with `layout.tsx` and route segments.
- **Pages**:
  - Home: `app/page.tsx`
  - Projects: `app/projects/page.tsx`
  - Archive: `app/archive/page.tsx`
- **Components**: `components/` (unchanged, import from `app` and route pages).
- **Data**: `constants.ts`, `types.ts` (unchanged, update imports as needed).
- **Styling**: Tailwind via `globals.css` and `tailwind.config.ts`.
- **Assets**: `public/` for images, icons, fonts.

## 4) Migration Phases

### Phase A: Baseline Setup
1. Initialize a Next.js app with the App Router and TypeScript.
2. Add Tailwind CSS and configure `globals.css`.
3. Add ESLint and TypeScript config alignment with current project.
4. Confirm `npm run dev` works and renders a placeholder page.

### Phase B: File and Routing Migration
1. Create `app/layout.tsx` to replace `index.html` boilerplate:
   - Move metadata, fonts, and global wrappers here.
2. Create route pages:
   - `app/page.tsx` from `pages/Home`.
   - `app/projects/page.tsx` from `pages/Projects`.
   - `app/archive/page.tsx` from `pages/Archive`.
3. Replace `react-router-dom` with App Router navigation (`next/link`).
4. Remove `HashRouter`-specific logic and any hash-based URLs.

### Phase C: Components and Data
1. Move `components/` as-is; fix any absolute import paths.
2. Update `constants.ts` and `types.ts` imports where required.
3. Mark client components that rely on hooks or browser APIs with `"use client"`.
4. For animation components (Framer Motion), ensure client boundary placement is minimal.

### Phase D: Styling and Assets
1. Migrate Tailwind config and ensure class names render identically.
2. Move any images and icons into `public/` and update paths.
3. Validate fonts:
   - If using Google Fonts, switch to `next/font`.
   - If self-hosted, place fonts in `public/` and reference via CSS.

### Phase E: Runtime and Behavior Parity
1. Verify the `Counter` component works with SSR/CSR.
2. Ensure IntersectionObserver usage is gated to client components.
3. Check scroll animations and reveal effects.
4. Confirm that navigation transitions and route changes feel consistent.

### Phase F: Build, Deploy, and QA
1. Run `next build` and resolve any SSR/Edge issues.
2. Validate performance (LCP/CLS/INP).
3. Add deployment config (Vercel or preferred host).
4. Update README and docs to describe the new Next.js workflow.

## 5) Detailed Work Items

### 5.1 Project Setup
- Create `app/`, `public/`, and `styles/` (if needed).
- Add `next.config.js` and align with project needs.
- Install required dependencies: `next`, `react`, `react-dom`, `tailwindcss`, `postcss`, `autoprefixer`.

### 5.2 App Router Structure
- `app/layout.tsx`:
  - Global `<html>` and `<body>`.
  - Include shared components like `Header`/`Footer`.
- `app/page.tsx`:
  - Render the current `Home` page content.
- `app/projects/page.tsx`, `app/archive/page.tsx`:
  - Render respective views.
- `app/not-found.tsx` (add):
  - Provide a styled 404 page.

### 5.3 Client/Server Component Strategy
- Default to server components.
- Add `"use client"` to:
  - Components using hooks (`useState`, `useEffect`).
  - Framer Motion animations.
  - IntersectionObserver logic.

### 5.4 Data and Types
- Keep `types.ts` and `constants.ts` in the project root or move to `lib/`.
- Update import paths to avoid relative depth issues.
- Consider `lib/` for helpers if needed later.

### 5.5 SEO and Metadata
- Use `export const metadata` in `app/layout.tsx`.
- Add Open Graph and Twitter metadata.
- Ensure canonical URLs match the deployment domain.

## 6) Risks and Mitigations
- **SSR issues with browser APIs**: isolate in client components.
- **Routing differences**: ensure all links use `next/link` and remove hash paths.
- **Asset paths**: verify image URLs are in `public/`.
- **Animation mismatch**: test Framer Motion in client components.

## 7) Validation Checklist
- `npm run dev` renders all routes.
- All animations and counters behave like the Vite version.
- Links work without hash URLs.
- `next build` completes without warnings.
- Lighthouse scores are comparable or improved.

## 8) Proposed Timeline (Example)
- **Day 1**: Setup Next.js, Tailwind, App Router scaffold.
- **Day 2**: Migrate pages and components; fix client/server boundaries.
- **Day 3**: Styling parity, asset migration, metadata, and QA.

## 9) Deliverables
- Working Next.js App Router app.
- Updated docs and README.
- Deployment-ready configuration.

## 10) Open Questions
- Should routing include a `/projects/[id]` detail page later?
- Any preference for deployment target (Vercel, Netlify, custom)?
- Should we introduce a CMS or keep `constants.ts` for now?

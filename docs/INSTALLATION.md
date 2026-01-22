# Installation & Dependency Management

B9 Labs is a modern React application built with Next.js App Router and TypeScript. Dependencies are managed via npm, and Next.js handles bundling, transpilation, and routing.

## 1. How Dependencies Work

Dependencies are installed locally via npm and bundled by Next.js. Runtime dependencies (React, Framer Motion, etc.) are included in the build output without import maps.

## 2. Adding New Dependencies

To add a new library to the project:
1. Install it via npm:
   ```bash
   npm install <package-name>
   ```
2. Import it in your `.tsx` files as usual:
   ```ts
   import { NewLibrary } from 'new-library';
   ```

## 3. Local Development Setup

Next.js provides the development server for local work.

### Prerequisites:
- Node.js (version 18 or higher)
- npm

### Steps:
1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   This starts the Next.js dev server (typically on `http://localhost:3000`). It provides hot reloading, TypeScript compilation, and App Router support.

3. **Open in browser:**
   Navigate to the provided local URL (e.g., `http://localhost:3000`).

## 4. Production Deployment

For production, build the project to transpile TypeScript and bundle assets:

```bash
npm run build
```

This creates a `.next` build. Deploy using standard Next.js settings:
- **Vercel**: Detects Next.js automatically.
- **Netlify/Other**: Use their Next.js build presets.

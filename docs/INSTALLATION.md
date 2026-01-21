# Installation & Dependency Management

B9 Labs is a modern React application built with Vite, utilizing TypeScript and ES Modules. Dependencies are managed via npm, and the project uses an import map for runtime loading of external libraries from esm.sh in production. For local development, Vite handles bundling and transpilation.

## 1. How Dependencies Work

Dependencies are installed locally via npm for development tools (e.g., Vite, TypeScript). External libraries (React, Framer Motion, etc.) are loaded at runtime using the `importmap` defined in `index.html`, which points to esm.sh for CDN delivery. This reduces bundle size and enables fast development.

### The Import Map
We use [esm.sh](https://esm.sh) as a Content Delivery Network (CDN) to serve npm packages as standard ES modules.

```json
{
  "imports": {
    "react": "https://esm.sh/react@^19.2.3",
    "react-dom/": "https://esm.sh/react-dom@^19.2.3/",
    "framer-motion": "https://esm.sh/framer-motion@^11.11.11",
    "lucide-react": "https://esm.sh/lucide-react@^0.454.0"
  }
}
```

## 2. Adding New Dependencies

To add a new library to the project:
1. Install it via npm for development (if needed for build tools):
   ```bash
   npm install <package-name>
   ```
2. If it's a runtime dependency to be loaded via import map, add it to the `<script type="importmap">` block in `index.html` pointing to its `esm.sh` URL.
3. Import it in your `.tsx` files as if it were a local package:
   ```ts
   import { NewLibrary } from 'new-library';
   ```

## 3. Local Development Setup

The project requires a build step for TypeScript and JSX transpilation. Use Vite's development server for local development.

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
   This starts Vite's dev server (typically on `http://localhost:3000` or the next available port). It provides hot reloading, TypeScript compilation, and serves the app with proper module resolution.

3. **Open in browser:**
   Navigate to the provided local URL (e.g., `http://localhost:3000`).

### Alternative Servers (Not Recommended):
While the project can be served statically after building, for development, always use `npm run dev` to ensure TypeScript and JSX are processed correctly.

## 4. Production Deployment

For production, build the project to transpile TypeScript and bundle assets:

```bash
npm run build
```

This creates a `dist` folder with optimized files. Deploy the `dist` folder to platforms like:
- **Vercel**: Select "Other" as the framework and set the root directory to `dist`.
- **Netlify**: Set the publish directory to `dist`.
- **GitHub Pages**: Push the `dist` contents to the `main` branch or use a deployment action.

The import map ensures dependencies are loaded from CDN in production, keeping the bundle lightweight.
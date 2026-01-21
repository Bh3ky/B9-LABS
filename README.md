# B9 Labs 

A sophisticated, high-performance platform for cataloging and showcasing engineering projects. Built with a focus on minimalism, kinetic typography, and real-time data visualization.

## 🚀 Quick Start

This project is a modern React application built with Vite and TypeScript, utilizing an `importmap` in `index.html` for runtime dependency loading from `esm.sh`. It requires a build step for TypeScript transpilation.

### Prerequisites
- Node.js (version 18 or higher)
- npm

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/b9-labs.git
   cd b9-labs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   This launches Vite's dev server with hot reloading (typically on `http://localhost:3000`).

4. **Open the browser:**
   Navigate to the provided local URL (e.g., `http://localhost:3000`).

## 🛠 Tech Stack

- **React 19**: Modern UI library using the latest features.
- **Tailwind CSS**: Utility-first styling for high-performance design.
- **Framer Motion**: Advanced kinetic animations and reveal effects.
- **Lucide React**: Clean, consistent iconography.
- **TypeScript**: Type-safe engineering.

## 📁 Folder Structure

- `/components`: Reusable UI modules (Header, Hero, Counter).
- `/pages`: Main view layouts (Home, Projects, Archive).
- `/docs`: Detailed architectural and design documentation.
- `types.ts`: Global TypeScript definitions.
- `constants.ts`: Central source of truth for project data and navigation.

## 🧪 Documentation

For a deep dive into how B9 Labs is built, check out the [docs/](./docs/) directory:
- [Installation & Dependencies](./docs/INSTALLATION.md)
- [Architecture](./docs/ARCHITECTURE.md)
- [Design System](./docs/DESIGN_SYSTEM.md)

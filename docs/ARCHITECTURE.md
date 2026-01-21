# Architecture Overview

B9 Labs follows a modular, data-driven architecture designed for maintainability and scalability.

## 1. Data-Driven UI
The platform treats project information as data. All content for projects is centralized in `src/constants.ts` using the `Project` interface defined in `types.ts`.
- **Benefit**: Adding a new project only requires updating a single JSON-like object.
- **Scalability**: This structure allows for an easy transition to a Headless CMS or a Gemini-powered backend in the future.

## 2. Component Hierarchy
The application uses a flat but strictly organized component structure:
- **Header/Footer**: Global layout components.
- **Hero**: High-impact entry point using Framer Motion variants for staggered reveals.
- **Counter**: A specialized observer-based component that triggers animations when entering the viewport.
- **ProjectCard**: A self-contained preview module with hover-state logic.

## 3. Routing Strategy
We use `react-router-dom` with a `HashRouter`. This ensures the application can be hosted on static platforms (like GitHub Pages) without specialized server configuration for deep-linking.

## 4. Real-time Simulation
The "Real-time stats" are achieved through the `Counter` component. It uses `IntersectionObserver` to detect when the user scrolls to the stats section and then runs a requestAnimationFrame-based timer to animate values from 0 to the target.

## 5. Performance Considerations
- **No-Build ESM**: By using `esm.sh`, we reduce the complexity of the development environment.
- **Tailwind JIT**: Styling is processed instantly, ensuring only the necessary CSS is shipped.
- **Asset Loading**: Images use `picsum.photos` for demonstration, but the architecture supports responsive `srcset` implementation.

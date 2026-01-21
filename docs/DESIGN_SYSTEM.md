# Design System & Aesthetics

B9 Labs is built on a philosophy of "Engineering Minimalism" — where the code is as beautiful as the UI.

## 1. Color Palette
- **Primary**: `Neutral-950` (#030303) - A deep, true black for professional depth.
- **Accent**: `Blue-600` (#2563eb) - Used sparingly for interactive elements and brand identity.
- **Secondary**: `Neutral-400/500` - Used for metadata and low-priority text to maintain hierarchy.

## 2. Typography
- **Headings**: `Inter` with Black (900) weight. Characterized by tight tracking (`tracking-tighter`) to create a "brutalist" high-impact feel.
- **Monospace**: `JetBrains Mono` - Used for metrics, tags, and system logs to reinforce the "Labs" and engineering theme.

## 3. Visual Language
- **Glassmorphism**: Headers and cards use `backdrop-blur-md` with semi-transparent backgrounds to create a sense of layering.
- **Vault/Folder UI**: The Archive page utilizes a file-explorer metaphor. This creates a familiar mental model for developers looking through "repositories."
- **Status Indicators**: Pulse animations on "Active" status dots provide a "living" feel to the platform.

## 4. Motion Principles
- **Reveals**: Elements don't just appear; they "reveal" using a custom cubic-bezier `[0.16, 1, 0.3, 1]` for a snappy, high-end feel.
- **Hover States**: Cards utilize a combination of scaling, grayscale-to-color transitions, and border-glow effects to provide immediate tactile feedback.

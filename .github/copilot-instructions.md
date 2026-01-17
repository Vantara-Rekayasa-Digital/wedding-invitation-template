# AI Coding Agent Instructions

## Project Overview

This is a **wedding invitation website** built with **Vite + React + TypeScript + shadcn/ui**. The project follows an Islamic wedding theme with emerald and gold colors. Originally created with Lovable.dev, it's designed as a single-page application showcasing wedding details, countdown, and interactive elements.

## Architecture & Structure

### Component Organization

- **Page components** in `src/pages/`: `Index.tsx` is the main wedding page that composes all sections
- **Wedding sections** in `src/components/wedding/`: Self-contained feature sections (Hero, Couple, Event, Countdown, etc.)
- **UI components** in `src/components/ui/`: shadcn/ui components (button, card, dialog, etc.)
- **Section composition**: The `Index.tsx` page uses `<SectionDivider />` between each wedding section for visual separation

### Styling Approach

- **CSS Variables**: All theme colors defined as HSL values in `src/index.css` (e.g., `--emerald`, `--gold`, `--cream`)
- **Font classes**: Use utility classes `font-script` (Great Vibes), `font-serif` (Cormorant Garamond), `font-arabic` (Amiri)
- **shadcn/ui pattern**: Use `cn()` utility from `@/lib/utils` to merge Tailwind classes with component variants
- **Text shadows**: For text over images, define inline styles like `textShadow: "2px 2px 8px rgba(0,0,0,0.8)"`

### Path Aliases

- `@/` maps to `src/` - use this for all imports (e.g., `import { Button } from "@/components/ui/button"`)

## Development Workflows

### Build & Dev Commands

```bash
npm run dev          # Start dev server on port 8080
npm run build        # Production build
npm run build:dev    # Development mode build
npm test             # Run tests once
npm run test:watch   # Run tests in watch mode
npm run lint         # Lint codebase
```

### Testing Setup

- **Framework**: Vitest with jsdom and React Testing Library
- **Setup file**: `src/test/setup.ts` configures `matchMedia` mock for component tests
- **Test location**: Place tests next to source files as `*.test.ts` or `*.test.tsx`

### Adding shadcn/ui Components

This project uses shadcn/ui components. To add new ones, use the CLI or manually add from [ui.shadcn.com](https://ui.shadcn.com). Configuration is in `components.json`.

## Project-Specific Patterns

### Animation Pattern (Framer Motion)

Most wedding sections use this scroll-reveal pattern:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  {/* Content */}
</motion.div>
```

### Typography Hierarchy

- **Arabic text**: Use `className="font-arabic"` with `dir="rtl"` attribute
- **Decorative headings**: Use `className="font-script text-4xl md:text-5xl"`
- **Body text**: Use `className="font-serif text-lg"`

### Music Player Behavior

The `MusicPlayer` component (`src/components/wedding/MusicPlayer.tsx`) implements:

- Auto-play attempt on load (may be browser-blocked)
- Auto-pause when tab hidden, auto-resume when visible
- Persistent play/pause state across visibility changes

### Color Theme

Primary theme uses HSL color variables:

- **Primary**: Emerald green `hsl(160, 50%, 35%)`
- **Accent**: Gold `hsl(35, 70%, 55%)`
- **Background**: Light cream `hsl(45, 30%, 97%)`

## Key Dependencies

- **React Router**: `react-router-dom` for routing (`/` → Index, `*` → NotFound)
- **TanStack Query**: `@tanstack/react-query` configured in `App.tsx` with `QueryClientProvider`
- **Radix UI**: Headless UI primitives for accessible components
- **Framer Motion**: For scroll animations and transitions
- **Sonner + Radix Toast**: Dual toast notification systems

## Anti-Patterns to Avoid

- Don't use absolute imports without `@/` alias
- Don't define colors outside of CSS variables in `src/index.css`
- Don't bypass `cn()` utility when merging Tailwind classes
- Don't create tests without importing `@testing-library/jest-dom` (setup.ts handles this)

## Important Notes

- TypeScript is configured with relaxed rules (`noImplicitAny: false`, `strictNullChecks: false`)
- Lovable component tagger is active in development mode only
- Server runs on port 8080 with HMR overlay disabled

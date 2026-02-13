# Library Research: Bold Editorial Documentation Design System

**Generated:** 2026-02-02
**Sub-Agent:** 0D - Library Research
**Purpose:** Research npm packages and libraries for building a bold, editorial documentation design system

---

## Executive Summary

This research evaluates 50+ libraries and tools across visual testing, component frameworks, typography, animations, and utilities. The goal is to identify packages that support:

1. **Attio-like Structure** - Clean, progressive disclosure, atomic design
2. **Bold/Editorial Visual Identity** - High contrast, dramatic typography, Gothic/medieval accents
3. **Production-Ready Quality** - Active maintenance, reasonable bundle size, good DX

### Top Recommendations

| Category | Primary Pick | Why |
|----------|-------------|-----|
| Visual Testing | Playwright built-in | Native `toHaveScreenshot()`, no extra deps |
| Component Primitives | Radix UI | Unstyled, accessible, shadcn foundation |
| Styling Framework | Tailwind + shadcn/ui | Copy-paste ownership, great dark mode |
| Typography | @tailwindcss/typography | Prose classes, editorial-ready |
| Animations | Motion (Framer) | Declarative, 120fps, React-native |
| Icons | Lucide React | Tree-shakable, customizable SVGs |
| Toast Notifications | Sonner | Beautiful stacking animations |
| Command Palette | cmdk | Headless, composable, shadcn-integrated |
| State Management | Zustand | Minimal boilerplate, hook-based |
| Drawer/Bottom Sheet | Vaul | Mobile-first, snap points |

---

## 1. Visual Testing & Screenshot Comparison

### Playwright Visual Testing (RECOMMENDED)

**Package:** `@playwright/test`
**Install:** `npm i -D @playwright/test`
**Weekly Downloads:** 4M+

Playwright includes native visual comparison capabilities.

**Key Features:**
- `await expect(page).toHaveScreenshot()` - Pixel-based comparison
- `await expect(value).toMatchSnapshot()` - Text/binary comparison
- Configurable tolerance: `maxDiffPixels`, `threshold`
- Cross-browser snapshots (Chromium, Firefox, WebKit)
- Built-in baseline management

**Configuration Options:**
```javascript
await expect(page).toHaveScreenshot({
  maxDiffPixels: 100,  // Acceptable pixel difference
  threshold: 0.3,      // Pixel tolerance ratio
});
```

**Pros:**
- No additional dependencies
- Built-in to test runner
- Excellent documentation

**Cons:**
- Requires CI consistency (Docker recommended)
- Browser-specific snapshots needed

**Sources:**
- [Playwright Visual Comparisons](https://playwright.dev/docs/test-snapshots)
- [BrowserStack Playwright Snapshot Guide](https://www.browserstack.com/guide/playwright-snapshot-testing)

---

### Chromatic (Alternative for Component Libraries)

**Package:** `chromatic @chromatic-com/playwright`
**Best For:** Storybook-based visual regression

For component library visual testing, Chromatic provides cloud-based visual review.

---

## 2. Documentation Component Frameworks

### Nextra (Next.js Documentation)

**Package:** `nextra nextra-theme-docs`
**Framework:** Next.js App Router (v4+)

**Key Features:**
- Built-in docs theme with sidebar, search, TOC
- MDX native support
- `_meta.js` for navigation configuration
- Dark mode built-in

**Customization:**
- `sidebar.defaultMenuCollapseLevel` - Control collapse depth
- `sidebar.autoCollapse` - Auto-collapse inactive sections
- Full CSS custom properties support

**Pros:**
- Quick setup for docs sites
- Great default styles
- Active development

**Cons:**
- App router only (v4)
- Limited visual customization without ejecting

**Sources:**
- [Nextra Docs Theme](https://nextra.site/docs/docs-theme/start)
- [Custom Theme Guide](https://nextra.site/docs/custom-theme)

---

### Docusaurus (React Documentation)

**Package:** `@docusaurus/core`
**Framework:** React

**Dark Mode Implementation:**
```css
[data-theme='light'] {
  --note-bg: rgb(210, 216, 255);
}
[data-theme='dark'] {
  --note-bg: rgb(83, 73, 126);
}
```

**Customization:**
- CSS variables for theming
- `useColorMode` hook for programmatic access
- Swizzling for component overrides

**Pros:**
- Mature ecosystem
- Plugin architecture
- i18n built-in

**Cons:**
- Heavier than Nextra
- More opinionated structure

**Sources:**
- [Docusaurus Theme Configuration](https://docusaurus.io/docs/api/themes/configuration)

---

## 3. Component Libraries

### shadcn/ui (RECOMMENDED)

**Install:** `npx shadcn@latest init`
**Philosophy:** Copy components into your codebase

**Why It's Ideal for Bold Editorial:**
- Full control over styling
- Radix primitives underneath
- Excellent dark mode support
- CSS variables for theming

**Theming System:**
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}
```

**Key Components for Docs:**
- Command (cmdk-based)
- Dialog, Sheet, Drawer
- Tabs, Accordion, Collapsible
- Toast (via Sonner)

**Pros:**
- You own the code
- TypeScript-first
- Tailwind-native

**Cons:**
- Manual updates
- Setup time per project

**Sources:**
- [shadcn/ui Theming](https://ui.shadcn.com/docs/theming)
- [shadcn/ui Dark Mode](https://ui.shadcn.com/docs/dark-mode)

---

### Radix UI Primitives (Foundation Layer)

**Package:** `radix-ui`
**Install:** `npm install radix-ui`

**Key Features:**
- Unstyled, accessible components
- WAI-ARIA compliant
- Keyboard navigation built-in
- `asChild` prop for composition

**Available Components:**
- Accordion, Dialog, Dropdown Menu
- Navigation Menu, Popover, Tabs
- Tooltip, Select, Slider
- 50+ components total

**Why Use Directly:**
- When shadcn doesn't have a component
- For custom design systems
- Maximum flexibility

**Sources:**
- [Radix Primitives Introduction](https://www.radix-ui.com/primitives/docs/overview/introduction)
- [Radix Styling Guide](https://www.radix-ui.com/primitives/docs/guides/styling)

---

### React Aria (Alternative Primitives)

**Package:** `react-aria`
**By:** Adobe

**Features:**
- 50+ accessible components
- Hooks-based architecture
- i18n for 30+ languages
- Cross-platform support

**Architecture:**
1. State Hook (logic)
2. Behavior Hook (interactions)
3. Component (styling)

**When to Choose Over Radix:**
- Need fine-grained control
- Complex internationalization
- Mobile-first applications

**Sources:**
- [React Aria](https://react-spectrum.adobe.com/react-aria/index.html)
- [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html)

---

## 4. Typography Systems

### @tailwindcss/typography (RECOMMENDED)

**Package:** `@tailwindcss/typography`
**Install:** `npm install -D @tailwindcss/typography`

**Usage:**
```html
<article class="prose lg:prose-xl dark:prose-invert">
  {{ markdown }}
</article>
```

**Features:**
- `prose` base class with sensible defaults
- Size modifiers: `prose-sm`, `prose-lg`, `prose-xl`, `prose-2xl`
- Color modifiers: `prose-gray`, `prose-slate`, etc.
- Dark mode: `prose-invert`
- Element modifiers: `prose-headings:underline`

**Customization for Editorial:**
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'h1': {
              fontFamily: 'var(--font-display)',
              fontWeight: '900',
              letterSpacing: '-0.02em',
            },
          },
        },
      },
    },
  },
}
```

**Sources:**
- [Tailwind Typography Plugin](https://github.com/tailwindlabs/tailwindcss-typography)
- [Introducing Tailwind Typography](https://tailwindcss.com/blog/tailwindcss-typography)

---

### Gutenberg (Typography Starter Kit)

**Package:** Not npm, CSS framework
**Website:** matejlatin.github.io/Gutenberg

**Features:**
- Modular scale based typography
- Baseline grid for vertical rhythm
- Responsive type scale

**Best For:** Understanding typography principles before implementing in Tailwind.

---

### Variable Fonts for Bold Editorial

**Recommended Variable Fonts:**

| Font | Axes | Best For |
|------|------|----------|
| Inter | Weight, Slant | Body text, UI |
| Manrope | Weight | Headlines, bold statements |
| Space Grotesk | Weight | Technical, modern |
| Fraunces | Weight, Optical Size | Editorial, classical |
| DM Sans | Weight | Clean documentation |

**Implementation:**
```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-var.woff2') format('woff2');
  font-weight: 100 900;
  font-display: swap;
}
```

**Benefits:**
- Single file for all weights
- Smoother weight transitions
- Smaller total bundle

**Sources:**
- [MDN Variable Fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Fonts/Variable_fonts)
- [v-fonts.com](https://v-fonts.com/)

---

## 5. Gothic/Medieval Typography

### Google Fonts Blackletter Options

| Font | Style | Notes |
|------|-------|-------|
| UnifrakturCook | Traditional Fraktur | Bold only, display use |
| New Rocker | Modern Blackletter | Rock/street aesthetic |
| Almendra SC | Fusion Medieval | Small caps variant |
| Astloch | Modern Gothic | Display font |
| Kings | Neutralized Blackletter | Government/formal |

**Usage Recommendations:**
- Headlines only (18px+ minimum)
- Pair with clean sans-serif for body
- Avoid for dense paragraph text
- Great for section dividers, badges

**Sources:**
- [35 Old English Google Fonts](https://www.notebookandpenguin.com/old-english-blackletter-gothic-google-fonts/)
- [Google Fonts Blackletter](https://fonts.google.com/knowledge/glossary/blackletter)

---

## 6. Animation Libraries

### Motion (Framer Motion) - RECOMMENDED

**Package:** `motion`
**Install:** `npm install motion`

**Key Features:**
- Declarative animations via `<motion />` component
- Hardware-accelerated (120fps)
- Gesture support (drag, hover, tap)
- Layout animations
- Variants for orchestrated animations

**Basic Usage:**
```jsx
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

**For Documentation Sites:**
- Page transitions
- Accordion open/close
- Sidebar slide animations
- Progress indicators

**Sources:**
- [Motion Documentation](https://motion.dev/docs)
- [Motion React Quick Start](https://motion.dev/docs/react)

---

## 7. Icons

### Lucide React (RECOMMENDED)

**Package:** `lucide-react`
**Install:** `npm install lucide-react`
**Icons:** 1500+

**Customization Props:**
- `size` (default: 24)
- `color` (default: currentColor)
- `strokeWidth` (default: 2)
- `absoluteStrokeWidth` (maintains weight at any size)

**Usage:**
```jsx
import { Camera, ChevronRight, Menu } from 'lucide-react';

<Camera size={32} strokeWidth={1.5} />
```

**Benefits:**
- Tree-shakable (only imports what you use)
- TypeScript support
- Consistent design language
- Replaces Feather Icons

**Sources:**
- [Lucide React Guide](https://lucide.dev/guide/packages/lucide-react)
- [Lucide Icons](https://lucide.dev/icons/)

---

## 8. UI Utilities

### cmdk (Command Palette)

**Package:** `cmdk`
**Install:** `yarn add cmdk`

**Features:**
- Headless (no styling)
- Automatic filtering/sorting
- Keyboard navigation
- React 18 safe

**Usage:**
```jsx
import { Command } from 'cmdk';

<Command>
  <Command.Input placeholder="Search..." />
  <Command.List>
    <Command.Item>Action 1</Command.Item>
    <Command.Item>Action 2</Command.Item>
  </Command.List>
</Command>
```

**Sources:**
- [cmdk Documentation](https://cmdk.paco.me/)

---

### Sonner (Toast Notifications)

**Package:** `sonner`
**Install:** `npm install sonner`

**Features:**
- Stacking animation (viral feature)
- Promise-based toasts
- Multiple types: success, error, info, warning

**Usage:**
```jsx
import { Toaster, toast } from 'sonner';

<Toaster />
<button onClick={() => toast.success('Saved!')}>Save</button>
```

**Sources:**
- [Sonner Documentation](https://sonner.emilkowal.ski/)

---

### Vaul (Drawer/Bottom Sheet)

**Package:** `vaul`
**Install:** `npm install vaul`

**Features:**
- Mobile-first drawer
- Snap points support
- Built on Radix Dialog
- Multiple positions (top, bottom, left, right)

**Snap Points Example:**
```jsx
<Drawer.Root snapPoints={[0.5, 1]}>
  <Drawer.Trigger>Open</Drawer.Trigger>
  <Drawer.Content>
    {/* Half-screen or full-screen */}
  </Drawer.Content>
</Drawer.Root>
```

**Sources:**
- [Vaul Documentation](https://vaul.emilkowal.ski/)

---

## 9. State Management

### Zustand (RECOMMENDED for Docs SPAs)

**Package:** `zustand`
**Install:** `npm install zustand`

**Why for Documentation:**
- Sidebar collapse state
- Theme preferences
- Search state
- Reading progress

**Usage:**
```javascript
import { create } from 'zustand';

const useStore = create((set) => ({
  sidebarOpen: true,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
```

**Middleware:**
- `persist` - localStorage sync
- `devtools` - Redux DevTools support

**Sources:**
- [Zustand Documentation](https://zustand.docs.pmnd.rs/)
- [Zustand GitHub](https://github.com/pmndrs/zustand)

---

## 10. CSS Utilities

### clsx + tailwind-merge (RECOMMENDED)

**Packages:** `clsx`, `tailwind-merge`
**Install:** `npm install clsx tailwind-merge`

**The `cn()` utility:**
```javascript
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

**Usage:**
```jsx
<div className={cn(
  'base-styles',
  isActive && 'active-styles',
  className // Allow overrides
)}>
```

**Why Both:**
- `clsx` - Conditional class joining
- `tailwind-merge` - Resolves Tailwind conflicts

**Sources:**
- [Using clsx with tailwind-merge](https://akhilaariyachandra.com/blog/using-clsx-or-classnames-with-tailwind-merge)

---

## 11. SVG & Decorative Elements

### SVGR (SVG to React Components)

**Package:** `@svgr/core`
**Install:** Various integrations available

**Features:**
- Convert any SVG to React component
- Webpack, Vite, CLI support
- Full prop customization

**Sources:**
- [SVGR Documentation](https://react-svgr.com/)

---

### Shape Dividers

**Package:** `shape-dividers`
**Install:** From npm or GitHub

**For Editorial Dividers:**
- Wave shapes
- Curved separators
- Geometric patterns

**Alternative:** Create custom SVG dividers and convert with SVGR.

**Sources:**
- [shape-dividers GitHub](https://github.com/andraswebcode/shape-dividers)

---

## 12. Halftone & Texture Effects (CSS)

For that editorial/print aesthetic, pure CSS halftone effects are possible.

**Technique:**
```css
.halftone {
  background: radial-gradient(circle, #000 20%, transparent 20%);
  background-size: 8px 8px;
  filter: contrast(10);
}
```

**For Full Implementation:**
1. Use radial-gradient for dots
2. Apply high contrast filter
3. Use mix-blend-mode for color

**Sources:**
- [CSS Halftone Patterns](https://css-irl.info/css-halftone-patterns/)
- [Frontend Masters Halftone Guide](https://frontendmasters.com/blog/pure-css-halftone-effect-in-3-declarations/)

---

## 13. Content Layer / MDX

### MDX (Markdown + JSX)

**Package:** `@mdx-js/react`

**Features:**
- JSX in Markdown
- Custom component mapping
- Works with Next.js, Remix, etc.

**Component Mapping:**
```jsx
import { MDXProvider } from '@mdx-js/react';

const components = {
  h1: (props) => <h1 className="text-4xl font-black" {...props} />,
  code: CodeBlock,
};

<MDXProvider components={components}>
  {children}
</MDXProvider>
```

**Sources:**
- [MDX Documentation](https://mdxjs.com/docs/using-mdx/)

---

### Markdoc (Stripe's Approach)

**Package:** `@markdoc/markdoc`

**Features:**
- Custom tag syntax: `{% callout %}...{% /callout %}`
- Type-safe schemas
- React renderer

**Why Consider:**
- More explicit than MDX
- Better for large documentation
- Stripe's production-proven

**Sources:**
- [Markdoc Documentation](https://markdoc.dev/docs/overview)
- [How Stripe Uses Markdoc](https://stripe.com/blog/markdoc)

---

## 14. High Contrast & Accessibility

### Design System Considerations

**WCAG Standards:**
- 4.5:1 contrast ratio for normal text
- 3:1 for large text (18px+ or 14px+ bold)
- 7:1 for AAA compliance

**Implementation:**
```css
/* High contrast mode support */
@media (prefers-contrast: more) {
  :root {
    --foreground: #000;
    --background: #fff;
    --border: 2px solid #000;
  }
}
```

**CSS for Dark High Contrast:**
```css
@media (forced-colors: active) {
  /* Windows High Contrast Mode */
  .button {
    border: 2px solid ButtonText;
  }
}
```

**Sources:**
- [Smashing Magazine High Contrast Guide](https://www.smashingmagazine.com/2023/01/creating-high-contrast-design-system-css-custom-properties/)

---

## 15. Brutalist CSS (Bold Alternative)

### Brutalist Framework

**Website:** brutalistframework.com

**Features:**
- Flexbox + CSS Grid utilities
- Brutalist design patterns
- BUFF, Grids, FUX components

### NeoBrutalismCSS

**Website:** matifandy8.github.io/NeoBrutalismCSS
**Size:** < 100KB

**Features:**
- Lightweight
- Modular classes
- Strong borders, high contrast

**When to Use:**
- Anti-minimalist aesthetic
- Tech/developer documentation
- Strong visual statements

---

## 16. Magazine/Editorial Layouts

### CSS Grid Editorial Patterns

**Key Techniques:**
```css
.editorial-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
}

.feature-story {
  grid-column: span 8;
}

.sidebar-story {
  grid-column: span 4;
}
```

**Named Grid Lines:**
```css
.layout {
  grid-template-columns:
    [full-start] 1fr
    [content-start] minmax(0, 65ch)
    [content-end] 1fr
    [full-end];
}
```

**Sources:**
- [Smashing Magazine - CSS Grid Areas](https://www.smashingmagazine.com/2023/02/build-magazine-layout-css-grid-areas/)
- [CSS-Tricks Magazine Layout](https://css-tricks.com/responsive-grid-magazine-layout-in-just-20-lines-of-css/)

---

## 17. Font Loading Optimization

### Performance Checklist

1. **Use WOFF2 format** (30% smaller than WOFF)
2. **Add `font-display: swap`** (prevents FOIT)
3. **Subset fonts** (remove unused glyphs)
4. **Self-host** (avoid third-party latency)
5. **Preload critical fonts**

**Implementation:**
```html
<link rel="preload" href="/fonts/Inter-var.woff2" as="font" type="font/woff2" crossorigin>

<style>
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-var.woff2') format('woff2');
  font-display: swap;
}
</style>
```

**Tools:**
- [Glyphhanger](https://github.com/zachleat/glyphhanger) - Font subsetting
- [FontSquirrel Generator](https://www.fontsquirrel.com/tools/webfont-generator)

**Sources:**
- [DebugBear Font Performance Guide](https://www.debugbear.com/blog/website-font-performance)
- [web.dev Font Optimization](https://web.dev/learn/performance/optimize-web-fonts)

---

## 18. Reference Design Systems

### Attio Design Principles

Based on research, Attio's clean structure comes from:

1. **Single design system** - Same buttons, menus everywhere
2. **Progressive disclosure** - Depth reveals on interaction
3. **Micro-interactions** - Subtle gradients, tactile hover states
4. **Cubic bezier animations** - Smooth, consistent motion
5. **User-action-driven UI** - Show only what's needed

**Implementation Strategy:**
- Start with shadcn/ui base
- Add hover state refinements
- Implement progressive panels
- Use Motion for polish

**Sources:**
- [How Attio Does Design](https://strategybreakdowns.com/p/how-attio-does-design)
- [Attio Design Guidelines](https://docs.attio.com/sdk/guides/design-guidelines)

---

### Stripe Documentation

Stripe's docs are powered by Markdoc with:
- Custom interactive components
- Tabbed code examples
- Collapsible sections
- Custom tag syntax

**Sources:**
- [Stripe Markdoc Blog](https://stripe.com/blog/markdoc)

---

## 19. Notion-Style Components

### notion-components

**Package:** `notion-components`
**Install:** `npm install notion-components`

**Components:**
- Clean, minimal React components
- Notion's aesthetic
- CSS included

### Novel (Notion-style Editor)

**Package:** `novel`
**Features:** AI-powered, Notion-style WYSIWYG

For documentation with user-editable content.

---

## 20. Complete Recommended Stack

### Minimal Bold Editorial Docs Stack

```json
{
  "dependencies": {
    "next": "^14",
    "react": "^18",
    "tailwindcss": "^3.4",
    "@tailwindcss/typography": "^0.5",
    "motion": "^11",
    "lucide-react": "^0.400",
    "zustand": "^4",
    "sonner": "^1",
    "cmdk": "^1",
    "vaul": "^0.9",
    "clsx": "^2",
    "tailwind-merge": "^2"
  },
  "devDependencies": {
    "@playwright/test": "^1.43",
    "typescript": "^5"
  }
}
```

**Total Bundle Impact:** ~50-80KB gzipped (excluding React/Next)

### Installation Commands

```bash
# Core
npm install motion lucide-react zustand sonner cmdk vaul clsx tailwind-merge

# Typography
npm install -D @tailwindcss/typography

# Testing
npm install -D @playwright/test
npx playwright install
```

---

## Summary: Package Evaluation Matrix

| Package | Attio Structure | Bold Editorial | Bundle Size | Maintenance |
|---------|-----------------|----------------|-------------|-------------|
| shadcn/ui | 5/5 | 4/5 | 0 (copy) | Active |
| Radix UI | 5/5 | 4/5 | ~50KB | Active |
| Motion | 4/5 | 5/5 | ~30KB | Active |
| Tailwind Typography | 4/5 | 5/5 | ~5KB | Active |
| Lucide | 4/5 | 4/5 | ~2KB/icon | Active |
| cmdk | 5/5 | 3/5 | ~10KB | Active |
| Sonner | 4/5 | 4/5 | ~8KB | Active |
| Zustand | 4/5 | N/A | ~3KB | Active |
| Playwright | 5/5 | N/A | Dev only | Active |

**Legend:** 5/5 = Excellent fit, 4/5 = Good fit, 3/5 = Adequate

---

## Next Steps

1. **Set up base with shadcn/ui** - Initialize with dark mode
2. **Configure Tailwind Typography** - Customize for editorial style
3. **Add variable font** - Fraunces or similar for headlines
4. **Implement Motion animations** - Page transitions, micro-interactions
5. **Set up Playwright visual testing** - Baseline screenshots
6. **Add command palette** - cmdk with custom styling
7. **Create halftone/texture components** - CSS-based accents
8. **Design Gothic accent system** - Limited use decorative typography

---

## Sources Index

### Visual Testing
- [Playwright Visual Comparisons](https://playwright.dev/docs/test-snapshots)
- [BrowserStack Playwright Guide](https://www.browserstack.com/guide/playwright-snapshot-testing)

### Component Libraries
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [React Aria](https://react-spectrum.adobe.com/react-aria/)

### Typography
- [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [MDN Variable Fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Fonts/Variable_fonts)
- [Google Fonts Blackletter](https://fonts.google.com/knowledge/glossary/blackletter)

### Animation & UI
- [Motion Documentation](https://motion.dev/docs)
- [Sonner Toast](https://sonner.emilkowal.ski/)
- [cmdk](https://cmdk.paco.me/)
- [Vaul Drawer](https://vaul.emilkowal.ski/)

### CSS Techniques
- [CSS Halftone Patterns](https://css-irl.info/css-halftone-patterns/)
- [CSS Grid Magazine Layouts](https://www.smashingmagazine.com/2023/02/build-magazine-layout-css-grid-areas/)
- [High Contrast Design Systems](https://www.smashingmagazine.com/2023/01/creating-high-contrast-design-system-css-custom-properties/)

### Reference Sites
- [Attio Design Strategy](https://strategybreakdowns.com/p/how-attio-does-design)
- [Stripe Markdoc](https://stripe.com/blog/markdoc)

### State & Utilities
- [Zustand](https://zustand.docs.pmnd.rs/)
- [clsx + tailwind-merge](https://akhilaariyachandra.com/blog/using-clsx-or-classnames-with-tailwind-merge)
- [Lucide Icons](https://lucide.dev/)

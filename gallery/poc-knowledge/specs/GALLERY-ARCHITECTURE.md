# Architectural Gallery: Production Specification

**Created:** 2026-01-22
**Purpose:** Document the fully decked out production version vs preview approach
**Status:** Specification complete, awaiting implementation decision

---

## Two Versions Compared

| Aspect | V3 Vision (Preview) | Production (Fully Decked) |
|--------|---------------------|---------------------------|
| **Purpose** | See the aesthetic without setup | Ship-ready gallery |
| **Install required** | None (CDN only) | Full npm setup |
| **Tailwind** | CDN play mode | Proper config with custom theme |
| **Components** | CSS mimicking shadcn | Real shadcn/ui components |
| **Icons** | Lucide CDN | Lucide React with tree-shaking |
| **Animations** | CSS @keyframes approximation | Framer Motion + GSAP ScrollTrigger |
| **Framework** | Single HTML file | Astro or Next.js |
| **Build** | None | Vite/Turbopack |
| **Output** | 1 HTML file to preview | Static site or SSR app |

---

## Production Stack (Fully Decked Out)

### Core Framework

```
Framework: Astro 4.x
Why: Static-first, islands architecture, zero JS by default
     Perfect for documentation/gallery sites
     Can add React components only where needed
```

Alternative: Next.js 14+ (if we need more dynamic features later)

### Styling

```
Primary: Tailwind CSS 3.4+
Config: Custom theme extending shadcn defaults
Approach: Utility-first with component extraction
```

**Custom Tailwind Config:**
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Gallery dark theme
        'gallery-base': '#0f1210',
        'gallery-elevated': '#171c18',
        'gallery-surface': '#1e241f',
        'gallery-highlight': '#252b26',

        // Accent (intentional green, not AI-default purple)
        'accent': {
          DEFAULT: '#4ade80',
          muted: '#22c55e',
          glow: 'rgba(74, 222, 128, 0.15)',
        },

        // Text hierarchy
        'text-primary': '#e8e6e3',
        'text-secondary': '#9d9b98',
        'text-muted': '#6b6966',
      },

      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'SF Mono', 'monospace'],
      },

      // 8px grid spacing
      spacing: {
        '18': '4.5rem',  // 72px
        '22': '5.5rem',  // 88px
      },

      // Premium shadow system (5-layer)
      boxShadow: {
        'premium-sm': '0 1px 1px rgba(0,0,0,0.12)',
        'premium-md': `
          0 1px 1px rgba(0,0,0,0.12),
          0 2px 2px rgba(0,0,0,0.12),
          0 4px 4px rgba(0,0,0,0.12)
        `,
        'premium-lg': `
          0 1px 1px rgba(0,0,0,0.12),
          0 2px 2px rgba(0,0,0,0.12),
          0 4px 4px rgba(0,0,0,0.12),
          0 8px 8px rgba(0,0,0,0.12),
          0 16px 16px rgba(0,0,0,0.12)
        `,
        'glow': '0 0 0 1px rgba(74,222,128,0.1), 0 0 20px rgba(74,222,128,0.1)',
      },

      // Animation timing
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '400ms',
        'deliberate': '500ms',  // Premium "observable" motion
      },
    },
  },
}
```

### Components: shadcn/ui

**Why shadcn/ui:**
- Not a component library - it's copy/paste components you own
- Built on Radix primitives (accessible by default)
- Tailwind-native styling
- Customizable without fighting the library

**Components we'd use:**

| Component | Use Case |
|-----------|----------|
| `Card` | Pattern cards, activity items |
| `Tabs` | Variant switcher (Minimal/Standard/Production) |
| `Button` | Copy buttons, navigation |
| `Badge` | Maturity indicators (🌱 Seedling, 🌳 Evergreen) |
| `Tooltip` | Hover previews, term definitions |
| `Collapsible` | Optional depth (NOT accordions - these stay open) |
| `ScrollArea` | Custom scrollbars for zones |
| `Separator` | Section dividers |
| `HoverCard` | Rich previews on pattern links |

**Installation:**
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add card tabs button badge tooltip collapsible scroll-area separator hover-card
```

### Icons: Lucide

```
Library: lucide-react (for Astro/React components)
Why:
- Clean, consistent stroke width
- Tree-shakeable (only import what you use)
- 1000+ icons
- Recommended by UI-Tips over emoji
```

**Icons we'd use:**

| Icon | Use Case |
|------|----------|
| `MessageSquareQuote` | Quote activity items |
| `Link2` | Connection activity items |
| `BarChart3` | Case study/numbers |
| `HelpCircle` | Open questions |
| `Lightbulb` | Insights |
| `FolderTree` | File structure section |
| `CheckCircle2` | When to use |
| `XCircle` | When NOT to use |
| `Zap` | Variants |
| `AlertTriangle` | Common failures |
| `ArrowLeft` | Back navigation |
| `Copy` | Copy buttons |
| `Check` | Copied confirmation |
| `ExternalLink` | External links |

**Usage:**
```jsx
import { MessageSquareQuote, Link2, Lightbulb } from 'lucide-react'

<MessageSquareQuote className="w-4 h-4 text-accent" />
```

### Animation: Framer Motion + GSAP

**Framer Motion** (component animations):
```
Use for:
- Page transitions
- Component mount/unmount
- Hover states with spring physics
- Layout animations (when zones resize)
- Stagger animations (activity feed items)
```

**GSAP + ScrollTrigger** (scroll-based):
```
Use for:
- Scroll-linked highlighting
- Parallax effects (if any)
- Complex sequenced animations
- Performance-critical animations
```

**Animation Specifications:**

| Element | Animation | Timing | Library |
|---------|-----------|--------|---------|
| Page load | Fade in + slight rise | 400ms ease-out | Framer Motion |
| Activity items | Stagger fade in | 50ms stagger, 300ms each | Framer Motion |
| Hover lift | Scale 1.02 + shadow increase | 200ms spring | Framer Motion |
| Copy button feedback | Check icon + color change | 150ms | Framer Motion |
| Zone highlighting (brush) | Background fade | 200ms ease | CSS (perf) |
| Scroll progress | Header shrink + progress bar | ScrollTrigger | GSAP |
| Tab switch | Content crossfade | 200ms | Framer Motion |

**Framer Motion Example:**
```jsx
import { motion, AnimatePresence } from 'framer-motion'

// Activity item with stagger
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.3,
    delay: index * 0.05  // stagger
  }}
  whileHover={{
    scale: 1.02,
    boxShadow: 'var(--shadow-premium-md)'
  }}
>
  {/* content */}
</motion.div>
```

**GSAP ScrollTrigger Example:**
```js
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Highlight active section on scroll
ScrollTrigger.create({
  trigger: '.structure-section',
  start: 'top center',
  end: 'bottom center',
  onEnter: () => highlightSection(),
  onLeave: () => unhighlightSection(),
})
```

### Design Tool: Framer

**Workflow (from UI-Tips):**
```
1. Design in Framer first (visual iteration)
2. Use Framer AI plugins for generation
3. Export design tokens / copy styles
4. Implement in code with shadcn components
5. Add Framer Motion animations
```

**Why Framer for design:**
- Visual playground for layout experiments
- AI plugins (Builder.io, others) for rapid iteration
- Can prototype animations before coding
- Exports to code (though we'd rebuild with our stack)
- Collaborative (if working with designers)

---

## File Structure (Production)

```
gallery/
├── astro.config.mjs
├── tailwind.config.js
├── package.json
│
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── ...
│   │   │
│   │   ├── pattern/               # Pattern-specific components
│   │   │   ├── PatternCard.tsx
│   │   │   ├── EssenceBlock.tsx
│   │   │   ├── VariantTabs.tsx
│   │   │   ├── StructureZone.tsx
│   │   │   ├── ActivityZone.tsx
│   │   │   ├── ActivityItem.tsx
│   │   │   ├── ConnectionFooter.tsx
│   │   │   └── FlowDiagram.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ZonesContainer.tsx
│   │   │
│   │   └── shared/
│   │       ├── CopyButton.tsx
│   │       ├── MaturityBadge.tsx
│   │       └── BrushingProvider.tsx  # Context for zone linking
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PatternLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro            # Gallery home
│   │   └── patterns/
│   │       ├── ralph.astro
│   │       ├── gas-town.astro
│   │       ├── cc-mirror.astro
│   │       └── ...
│   │
│   ├── content/
│   │   └── patterns/              # MDX or JSON pattern data
│   │       ├── ralph.mdx
│   │       ├── gas-town.mdx
│   │       └── ...
│   │
│   ├── lib/
│   │   ├── utils.ts               # cn() helper, etc.
│   │   └── animations.ts          # GSAP setup
│   │
│   └── styles/
│       └── globals.css            # Tailwind imports + custom
│
├── public/
│   └── fonts/
│       ├── SpaceGrotesk-*.woff2
│       └── GeistMono-*.woff2
│
└── content/
    └── patterns/                  # Pattern content (if using Astro content collections)
```

---

## Component Specifications

### 1. EssenceBlock (Hero One-Liner)

```tsx
interface EssenceBlockProps {
  code: string
  caption: string
}

// Visual spec:
// - Full-width container with gradient background
// - Code in large monospace, accent color
// - Subtle glow on hover
// - Copy button with animated feedback
// - Caption in muted italic below

// Animations:
// - Mount: fade in + rise (400ms)
// - Hover: glow intensifies (200ms)
// - Copy: button morphs to checkmark (150ms)
```

### 2. VariantTabs

```tsx
interface VariantTabsProps {
  variants: {
    name: string        // "Minimal" | "Standard" | "Production"
    code: string
    description?: string
  }[]
}

// Visual spec:
// - Segmented control style (not underline tabs)
// - Active tab has elevated background + accent text
// - Content area with syntax-highlighted code
// - Copy button per variant

// Animations:
// - Tab switch: content crossfade (200ms)
// - Active indicator: slide (spring physics)
```

### 3. StructureZone

```tsx
interface StructureZoneProps {
  sections: {
    id: string
    icon: LucideIcon
    title: string
    content: ReactNode
  }[]
}

// Visual spec:
// - Solid border (not dashed - that's for fluid zone)
// - All sections visible by default (NO ACCORDIONS)
// - Section dividers between items
// - Highlighted state for brushing (green glow background)

// Animations:
// - Highlight: background fade (200ms ease)
// - Section hover: subtle lift
```

### 4. ActivityZone

```tsx
interface ActivityZoneProps {
  items: {
    id: string
    type: 'quote' | 'connection' | 'case-study' | 'question' | 'insight'
    content: string
    meta: string
    linksTo: string[]  // IDs of structure sections
  }[]
}

// Visual spec:
// - Dashed border (indicates fluid/living content)
// - Items have type-specific icons (Lucide)
// - Muted metadata below content
// - Highlighted state for brushing

// Animations:
// - Mount: stagger fade in (50ms between items)
// - Hover: card lifts slightly
// - Highlight: background + subtle scale
```

### 5. BrushingProvider (Context)

```tsx
// Manages the hover-to-highlight connection between zones

interface BrushingContextValue {
  highlightedStructure: string[]
  highlightedActivity: string[]
  setHighlightedStructure: (ids: string[]) => void
  setHighlightedActivity: (ids: string[]) => void
}

// Usage:
// - ActivityItem onMouseEnter → setHighlightedStructure(linksTo)
// - StructureSection checks if its id is in highlightedStructure
// - Reverse works too (Structure → Activity)
```

### 6. FlowDiagram (SVG)

```tsx
interface FlowDiagramProps {
  steps: string[]       // ["Fresh", "Read", "Task", "Verify", "Commit"]
  loop?: boolean        // Show loop arrow back to start
  interactive?: boolean // Highlight on hover
}

// Visual spec:
// - Horizontal flow with arrow connectors
// - Boxes have gradient fill matching theme
// - Loop arrow is dashed
// - Interactive: hover step → tooltip with description

// Animations:
// - Mount: steps fade in sequentially (100ms stagger)
// - Hover: step pulses slightly
```

---

## Design Tokens (Production)

```css
/* globals.css - imported into Tailwind */

@layer base {
  :root {
    /* === COLORS === */
    --color-base: 15 18 16;           /* #0f1210 */
    --color-elevated: 23 28 24;       /* #171c18 */
    --color-surface: 30 36 31;        /* #1e241f */
    --color-highlight: 37 43 38;      /* #252b26 */

    --color-accent: 74 222 128;       /* #4ade80 */
    --color-accent-muted: 34 197 94;  /* #22c55e */

    --color-text-primary: 232 230 227;   /* #e8e6e3 */
    --color-text-secondary: 157 155 152; /* #9d9b98 */
    --color-text-muted: 107 105 102;     /* #6b6966 */

    --color-border-subtle: 42 48 43;     /* #2a302b */
    --color-border-active: 61 74 63;     /* #3d4a3f */

    /* === SPACING (8px grid) === */
    --space-1: 0.5rem;    /* 8px */
    --space-2: 1rem;      /* 16px */
    --space-3: 1.5rem;    /* 24px */
    --space-4: 2rem;      /* 32px */
    --space-5: 2.5rem;    /* 40px */
    --space-6: 3rem;      /* 48px */

    /* === TYPOGRAPHY === */
    --font-sans: 'Space Grotesk', system-ui, sans-serif;
    --font-mono: 'Geist Mono', 'SF Mono', monospace;

    --text-xs: 0.75rem;     /* 12px */
    --text-sm: 0.8125rem;   /* 13px */
    --text-base: 1rem;      /* 16px */
    --text-lg: 1.125rem;    /* 18px */
    --text-xl: 1.25rem;     /* 20px */
    --text-2xl: 1.5rem;     /* 24px */
    --text-3xl: 2rem;       /* 32px */

    /* === RADII === */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-full: 9999px;

    /* === SHADOWS (5-layer premium) === */
    --shadow-sm: 0 1px 1px rgba(0,0,0,0.12);
    --shadow-md:
      0 1px 1px rgba(0,0,0,0.12),
      0 2px 2px rgba(0,0,0,0.12),
      0 4px 4px rgba(0,0,0,0.12);
    --shadow-lg:
      0 1px 1px rgba(0,0,0,0.12),
      0 2px 2px rgba(0,0,0,0.12),
      0 4px 4px rgba(0,0,0,0.12),
      0 8px 8px rgba(0,0,0,0.12),
      0 16px 16px rgba(0,0,0,0.12);
    --shadow-glow:
      0 0 0 1px rgba(74,222,128,0.1),
      0 0 20px rgba(74,222,128,0.1);

    /* === TRANSITIONS === */
    --transition-fast: 150ms ease;
    --transition-normal: 250ms ease;
    --transition-slow: 400ms ease;
    --transition-deliberate: 500ms ease;
  }
}
```

---

## Animation Choreography

### Page Load Sequence

```
T+0ms:    Background visible
T+100ms:  Navigation fades in
T+200ms:  Essence block fades in + rises
T+400ms:  Variant tabs fade in
T+500ms:  Zones container fades in
T+600ms:  Structure sections stagger in (50ms each)
T+800ms:  Activity items stagger in (50ms each)
T+1000ms: Connections footer fades in
```

### Interaction Animations

| Interaction | Animation | Duration | Easing |
|-------------|-----------|----------|--------|
| Button hover | Scale 1.02, shadow increase | 150ms | ease-out |
| Button click | Scale 0.98 | 100ms | ease-in |
| Copy success | Icon morph (Copy → Check) | 150ms | spring |
| Tab switch | Content crossfade | 200ms | ease |
| Card hover | Y -2px, shadow-md → shadow-lg | 200ms | ease-out |
| Zone highlight | Background color fade | 200ms | ease |
| Tooltip appear | Fade + scale from 0.95 | 150ms | ease-out |

### Scroll Animations (GSAP)

```js
// Header shrink on scroll
ScrollTrigger.create({
  start: 'top top',
  end: '100px top',
  scrub: true,
  onUpdate: (self) => {
    const progress = self.progress
    header.style.padding = `${lerp(16, 8, progress)}px`
    logo.style.transform = `scale(${lerp(1, 0.9, progress)})`
  }
})

// Active section highlighting
document.querySelectorAll('.structure-section').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top center',
    end: 'bottom center',
    onEnter: () => section.classList.add('in-view'),
    onLeave: () => section.classList.remove('in-view'),
    onEnterBack: () => section.classList.add('in-view'),
    onLeaveBack: () => section.classList.remove('in-view'),
  })
})
```

---

## V3 Vision (Preview) Specification

**Purpose:** Show the aesthetic without npm install

**What it includes:**
- Tailwind via CDN: `<script src="https://cdn.tailwindcss.com">`
- Lucide via CDN: `<script src="https://unpkg.com/lucide@latest">`
- Custom Tailwind config inline
- CSS @keyframes approximating Framer Motion
- HTML structure matching production components
- Comments marking "// Production: use X instead"

**What it omits:**
- Real shadcn components (mimicked with Tailwind classes)
- Real Framer Motion (CSS animations instead)
- Real GSAP (IntersectionObserver approximation)
- Build step
- Component architecture

**Limitations:**
- Animations less smooth than production
- No spring physics
- No tree-shaking (larger file)
- Single file (not maintainable at scale)

---

## Implementation Phases

### Phase 1: V3 Vision Preview (Current)
- Single HTML file with CDN dependencies
- Validates aesthetic direction
- No npm required

### Phase 2: Project Setup
```bash
npm create astro@latest gallery
cd gallery
npx astro add tailwind
npx astro add react
npx shadcn-ui@latest init
npm install lucide-react framer-motion gsap
```

### Phase 3: Core Components
- Implement shadcn components
- Build pattern-specific components
- Set up BrushingProvider context

### Phase 4: Content Structure
- Define pattern content schema
- Create Astro content collections
- Migrate Ralph pattern data

### Phase 5: Animation Layer
- Add Framer Motion to components
- Implement GSAP scroll triggers
- Choreograph page load sequence

### Phase 6: Polish & Ship
- Performance optimization
- Accessibility audit
- Deploy to Vercel/Netlify

---

## Dependencies (Production)

```json
{
  "dependencies": {
    "astro": "^4.x",
    "@astrojs/react": "^3.x",
    "@astrojs/tailwind": "^5.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "tailwindcss": "^3.4.x",
    "lucide-react": "^0.300.x",
    "framer-motion": "^11.x",
    "gsap": "^3.12.x",
    "class-variance-authority": "^0.7.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  },
  "devDependencies": {
    "@types/react": "^18.x",
    "typescript": "^5.x"
  }
}
```

---

## Reference Links

| Resource | URL |
|----------|-----|
| shadcn/ui | https://ui.shadcn.com |
| Tailwind CSS | https://tailwindcss.com |
| Lucide Icons | https://lucide.dev |
| Framer Motion | https://www.framer.com/motion |
| GSAP | https://greensock.com/gsap |
| Astro | https://astro.build |
| Radix Primitives | https://www.radix-ui.com |

---

## Decision Log

| Date | Decision | Reasoning |
|------|----------|-----------|
| 2026-01-22 | Astro over Next.js | Static-first is better for docs, less JS shipped |
| 2026-01-22 | shadcn over other libraries | Own the components, Tailwind-native, accessible |
| 2026-01-22 | Framer Motion + GSAP | FM for components, GSAP for scroll (best of both) |
| 2026-01-22 | Space Grotesk font | Modern/tech feel, recommended by UI-Tips |
| 2026-01-22 | Green accent over purple | Intentional choice, avoids "AI smell" |
| 2026-01-22 | 8px grid spacing | Industry standard, consistent rhythm |
| 2026-01-22 | 5-layer shadows | Premium depth without harshness |

---

*This document serves as the source of truth for the Gallery architecture. Update it as decisions evolve.*

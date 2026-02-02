# Blended Theme Specification: NOUS-DOMINANT

A bold hybrid design system that combines the maximum contrast philosophy of Nous Research with accent elements from Medieval and Sanrok aesthetics.

---

## Design Philosophy

**Core Identity:** Maximum contrast brutalism with historical and warm accents

The Nous aesthetic provides the dominant visual DNA - pure black and white, bold condensed sans typography, repetition patterns, and thick borders. Medieval contributes decorative typography moments (Blackletter for ceremonial headings). Sanrok injects energy through its pure red accent and duotone image treatment.

**The Blend Hierarchy:**
1. **NOUS (70%)** - Color system, primary typography, layout structure, borders, effects
2. **Medieval (15%)** - Accent typography for special moments, ornamental flourishes
3. **Sanrok (15%)** - Accent color (red), interactive states, energy

---

## Color Palette

### Primary Colors (Maximum Contrast Foundation)

| Token | Value | Usage |
|-------|-------|-------|
| `--blend-black` | `#000000` | Primary background (inverted sections), text, borders |
| `--blend-white` | `#FFFFFF` | Primary background, text on dark, cards |

### Accent Colors

| Token | Value | Source | Usage |
|-------|-------|--------|-------|
| `--blend-accent-red` | `#FF0000` | Sanrok | CTAs, links, hover states, emphasis |
| `--blend-accent-red-hover` | `#CC0000` | Derived | Hover state for red |
| `--blend-muted` | `#333333` | Nous | Secondary text, dividers |

### Reserved Accents (Rare Use)

| Token | Value | Source | Usage |
|-------|-------|--------|-------|
| `--blend-medieval-blue` | `#1A44B8` | Medieval | Blackletter initials only (optional) |
| `--blend-cream` | `#FBF5EF` | Sanrok | Subtle warmth in backgrounds (rare) |

### Semantic Colors

```css
:root {
  /* Foundations */
  --blend-black: #000000;
  --blend-white: #FFFFFF;
  --blend-accent: #FF0000;
  --blend-accent-hover: #CC0000;
  --blend-muted: #333333;

  /* Semantic mappings */
  --color-bg-primary: var(--blend-white);
  --color-bg-inverted: var(--blend-black);
  --color-bg-card: var(--blend-white);
  --color-text-primary: var(--blend-black);
  --color-text-inverted: var(--blend-white);
  --color-text-muted: var(--blend-muted);
  --color-text-accent: var(--blend-accent);
  --color-border: var(--blend-black);
  --color-border-thin: rgba(0, 0, 0, 0.15);
  --color-link: var(--blend-accent);
  --color-link-hover: var(--blend-accent-hover);

  /* Interactive states */
  --color-focus-ring: var(--blend-accent);
  --color-active: var(--blend-accent);
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: var(--blend-accent);
}
```

---

## Typography Hierarchy

### Font Stack

```css
:root {
  /* Primary - Nous DNA */
  --font-display: 'Inter Tight', 'Roboto Condensed', 'Arial Narrow', sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', Monaco, monospace;

  /* Accent - Medieval ceremonial moments */
  --font-blackletter: 'UnifrakturMaguntia', 'Old English Text MT', 'Luminari', fantasy;

  /* Reserved - Sanrok warmth (rarely used) */
  --font-serif-display: 'Instrument Serif', 'Playfair Display', Georgia, serif;
}
```

### Type Scale

| Level | Size | Weight | Font | Transform | Tracking | Usage |
|-------|------|--------|------|-----------|----------|-------|
| Hero | `clamp(4rem, 12vw, 10rem)` | 900 (Black) | Display | UPPERCASE | -0.04em | Page heroes |
| H1 | `4.209rem` (67px) | 900 | Display | UPPERCASE | -0.03em | Section titles |
| H2 | `3.157rem` (50px) | 900 | Display | UPPERCASE | -0.03em | Major headings |
| H3 | `2.369rem` (38px) | 700 | Display | UPPERCASE | -0.02em | Subsections |
| H4 | `1.777rem` (28px) | 700 | Body | UPPERCASE | 0.05em | Card titles |
| H5 | `1rem` (16px) | 600 | Body | UPPERCASE | 0.1em | Labels |
| Body | `1rem` (16px) | 400 | Body | none | 0 | Paragraph text |
| Small | `0.875rem` (14px) | 400 | Body | none | 0 | Captions |
| Micro | `0.625rem` (10px) | 500 | Body | UPPERCASE | 0.15em | Metadata |

### Blackletter Accent Usage (Medieval Contribution)

Reserved for **ceremonial moments only**:
- Special section headers ("The Archive", "Proclamation")
- Decorative drop caps at article starts
- Achievement/milestone announcements
- Signature brand moments

```css
.blend-blackletter-heading {
  font-family: var(--font-blackletter);
  font-size: var(--text-3xl);
  color: var(--blend-black);
  text-align: center;
  letter-spacing: 0.02em;
}

.blend-drop-cap {
  font-family: var(--font-blackletter);
  font-size: 5rem;
  float: left;
  line-height: 0.75;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  color: var(--blend-black);
}

/* Optional: Red drop cap for emphasis */
.blend-drop-cap--accent {
  color: var(--blend-accent);
}
```

---

## CSS Token Values

```css
/* ============================================
 * BLENDED THEME: NOUS-DOMINANT
 * ============================================ */

[data-theme="blend-nous"],
.theme-blend-nous {
  /* Colors */
  --blend-black: #000000;
  --blend-white: #FFFFFF;
  --blend-accent: #FF0000;
  --blend-accent-hover: #CC0000;
  --blend-muted: #333333;
  --blend-medieval-blue: #1A44B8;
  --blend-cream: #FBF5EF;

  /* Typography */
  --font-display: 'Inter Tight', 'Roboto Condensed', 'Arial Narrow', sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --font-blackletter: 'UnifrakturMaguntia', 'Old English Text MT', fantasy;
  --font-mono: 'JetBrains Mono', 'SF Mono', Monaco, monospace;

  /* Type Scale */
  --text-hero: clamp(4rem, 12vw, 10rem);
  --text-h1: 4.209rem;
  --text-h2: 3.157rem;
  --text-h3: 2.369rem;
  --text-h4: 1.777rem;
  --text-h5: 1rem;
  --text-body: 1rem;
  --text-small: 0.875rem;
  --text-micro: 0.625rem;

  /* Line Heights */
  --leading-hero: 0.9;
  --leading-tight: 0.95;
  --leading-heading: 1.1;
  --leading-body: 1.6;
  --leading-relaxed: 1.75;

  /* Letter Spacing */
  --tracking-tighter: -0.04em;
  --tracking-tight: -0.03em;
  --tracking-normal: 0;
  --tracking-wide: 0.05em;
  --tracking-wider: 0.1em;
  --tracking-widest: 0.15em;

  /* Font Weights */
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  --weight-black: 900;

  /* Borders - THICK (Nous signature) */
  --border-thin: 1px;
  --border-medium: 2px;
  --border-thick: 4px;
  --border-frame: 8px;
  --border-heavy: 12px;

  /* Border Radius - Minimal (Nous preference) */
  --radius-none: 0;
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;

  /* Effects */
  --repetition-opacity: 0.06;
  --halftone-opacity: 0.25;
  --halftone-size: 4px;

  /* Transitions */
  --duration-fast: 100ms;
  --duration-normal: 200ms;
  --duration-slow: 400ms;
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Aesthetic Contributions by Source

### From NOUS (Dominant - 70%)

| Element | Implementation |
|---------|----------------|
| **Color Philosophy** | Pure black #000000 + pure white #FFFFFF, maximum contrast |
| **Primary Typography** | Bold condensed sans (Inter Tight), weight 700-900 |
| **Text Treatment** | ALL UPPERCASE for headings, tight tracking |
| **Borders** | Thick (4-12px), solid black lines |
| **Layout** | Grid structures with thick dividing lines |
| **Backgrounds** | Repetition patterns (text as texture, 6-8% opacity) |
| **Images** | Halftone dot patterns, high contrast B&W |
| **Dividers** | Thick solid bars (4-8px height) |
| **Frames** | Heavy bordered containers (8-12px) |

### From Medieval (Accent - 15%)

| Element | Implementation |
|---------|----------------|
| **Blackletter Font** | UnifrakturMaguntia for ceremonial headings |
| **Drop Caps** | Decorative initial capitals at text starts |
| **Ornamental Dividers** | Fleur-de-lis (⚜) as section breaks (sparse use) |
| **Vertical Rhythm** | Justified text blocks for long-form content |

### From Sanrok (Accent - 15%)

| Element | Implementation |
|---------|----------------|
| **Accent Color** | Pure red #FF0000 for CTAs, links, emphasis |
| **Hover States** | Red activation on interactive elements |
| **Image Treatment** | Red duotone option for photos (mix-blend-multiply) |
| **Energy** | Red provides warmth and urgency against B&W |
| **Rankings/Badges** | Red circular badges for numbered items |

---

## Components to Showcase

### 1. Hero Section with Repetition Pattern

Demonstrates: Nous typography, repetition texture, red accent CTA

```tsx
function BlendedHero() {
  return (
    <section className="relative py-24 px-8 bg-white overflow-hidden">
      {/* Repetition background - Nous signature */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="text-6xl font-black uppercase tracking-tighter
                       leading-none whitespace-nowrap text-black"
            style={{ opacity: 0.06 }}
          >
            RESEARCH · RESEARCH · RESEARCH · RESEARCH · RESEARCH
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-[clamp(4rem,12vw,10rem)] font-black uppercase
                       tracking-tighter leading-[0.9] text-black mb-8">
          Maximum<br />Contrast
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
          A brutalist design system with historical and warm accents.
        </p>

        {/* CTA - Sanrok red energy */}
        <button className="px-8 py-4 bg-[#FF0000] text-white font-bold
                          uppercase tracking-wide text-sm
                          border-4 border-black hover:bg-black
                          transition-colors duration-200">
          Explore System
        </button>
      </div>
    </section>
  );
}
```

### 2. Framed Logo Block

Demonstrates: Thick Nous borders, centered branding

```tsx
function BlendedLogoFrame() {
  return (
    <div className="inline-flex items-center justify-center
                    p-8 bg-white border-8 border-black">
      <span className="text-3xl font-black uppercase tracking-tighter">
        PATTERN<span className="text-[#FF0000]">.</span>LIBRARY
      </span>
    </div>
  );
}

/* Inverted variant */
function InvertedLogoFrame() {
  return (
    <div className="inline-flex items-center justify-center
                    p-8 bg-black border-8 border-white">
      <span className="text-3xl font-black uppercase tracking-tighter text-white">
        PATTERN<span className="text-[#FF0000]">.</span>LIBRARY
      </span>
    </div>
  );
}
```

### 3. Team Card with Halftone + Red Badge

Demonstrates: Halftone images (Nous), rank badge (Sanrok red)

```tsx
function BlendedTeamCard({ name, role, rank, imageSrc }) {
  return (
    <div className="border-4 border-black bg-white">
      {/* Halftone image - Nous effect */}
      <div className="relative aspect-square bg-gray-200">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover grayscale contrast-150"
        />
        {/* Halftone overlay */}
        <div
          className="absolute inset-0 mix-blend-multiply opacity-25 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
            backgroundSize: '4px 4px',
          }}
        />

        {/* Rank badge - Sanrok red */}
        <div className="absolute top-3 right-3 w-10 h-10
                        bg-[#FF0000] text-white
                        flex items-center justify-center
                        font-black text-lg">
          {rank}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 border-t-4 border-black">
        <h4 className="font-black uppercase tracking-wide text-sm text-black">
          {name}
        </h4>
        <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">
          {role}
        </p>
      </div>
    </div>
  );
}
```

### 4. Article Block with Medieval Drop Cap

Demonstrates: Blackletter drop cap (Medieval), justified text, thick dividers

```tsx
function BlendedArticleBlock() {
  return (
    <article className="max-w-2xl mx-auto py-16 px-8">
      {/* Medieval-style heading */}
      <h2
        className="text-5xl text-center mb-8 text-black"
        style={{ fontFamily: "'UnifrakturMaguntia', fantasy" }}
      >
        The Archive
      </h2>

      {/* Thick divider - Nous */}
      <div className="h-2 bg-black w-32 mx-auto mb-12" />

      {/* Body with drop cap */}
      <p className="text-black leading-relaxed text-justify">
        <span
          className="float-left pr-4 pt-2 text-8xl leading-[0.7] text-black"
          style={{ fontFamily: "'UnifrakturMaguntia', fantasy" }}
        >
          I
        </span>
        n the tradition of rigorous documentation, we present a system
        built upon maximum contrast and unwavering clarity. Each element
        serves a purpose. Each decision is deliberate. The stark opposition
        of black and white creates a visual hierarchy that demands attention
        and rewards careful observation.
      </p>

      <p className="text-black leading-relaxed text-justify mt-4">
        This is not minimalism for its own sake, but rather a commitment
        to the essential. Typography speaks loudly. Borders define space.
        Red punctuates with energy and urgency.
      </p>

      {/* Ornamental divider - Medieval accent */}
      <div className="flex items-center justify-center gap-4 py-8 text-black">
        <div className="flex-1 h-px bg-black" />
        <span className="text-2xl">⚜</span>
        <div className="flex-1 h-px bg-black" />
      </div>
    </article>
  );
}
```

### 5. Grid Section with Thick Borders

Demonstrates: Nous grid layout, border structure, inverted sections

```tsx
function BlendedGridSection() {
  const items = [
    { title: 'Research', desc: 'Deep analysis and pattern extraction' },
    { title: 'Design', desc: 'Maximum contrast visual systems' },
    { title: 'Deploy', desc: 'Production-ready components' },
  ];

  return (
    <section className="py-16 px-8 bg-black text-white">
      <h2 className="text-4xl font-black uppercase tracking-tight text-center mb-12">
        Capabilities
      </h2>

      {/* Grid with thick borders - Nous structure */}
      <div className="max-w-4xl mx-auto border-t-4 border-b-4 border-white">
        <div className="grid grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`p-8 ${i > 0 ? 'border-l-2 border-white' : ''}`}
            >
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {item.desc}
              </p>
              {/* Red accent link - Sanrok energy */}
              <a
                href="#"
                className="inline-block mt-4 text-[#FF0000] text-sm
                           font-bold uppercase tracking-wide
                           hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Visual Hierarchy Summary

```
┌─────────────────────────────────────────────────────────────┐
│  HERO (Nous: Black condensed sans, 900 weight, UPPERCASE)   │
│  ░░░░░░░░░ repetition pattern background ░░░░░░░░░░░░░░░░░  │
│                                                             │
│              MAXIMUM CONTRAST                               │
│                                                             │
│          [ EXPLORE SYSTEM ] ← Red CTA (Sanrok)              │
├─────────────────────────────────────────────────────────────┤
│  ████████████  THICK DIVIDER (Nous: 8px black)  ████████████│
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                   ℜ The Archive                             │
│                   (Medieval Blackletter heading)            │
│                                                             │
│  ══════════════════════════════════════════                 │
│                                                             │
│  𝔍n the tradition of...  (Medieval drop cap + Nous body)   │
│                                                             │
│           ────────── ⚜ ──────────                          │
│           (Medieval ornamental divider)                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│ │ ▓▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓▓ │        │
│ │ halftone │ │ halftone │ │ halftone │ │ halftone │        │
│ │    [1]   │ │    [2]   │ │    [3]   │ │    [4]   │ ← Red  │
│ ├──────────┤ ├──────────┤ ├──────────┤ ├──────────┤  badges│
│ │ NAME     │ │ NAME     │ │ NAME     │ │ NAME     │        │
│ │ Role     │ │ Role     │ │ Role     │ │ Role     │        │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘        │
│  (Nous: 4px border cards with Sanrok red rank badges)       │
├─────────────────────────────────────────────────────────────┤
│ ██████████████████████████████████████████████████████████ │
│ █                    INVERTED SECTION                    █ │
│ █   RESEARCH    │    DESIGN    │    DEPLOY               █ │
│ █   Learn More ←── Red links (Sanrok)                    █ │
│ ██████████████████████████████████████████████████████████ │
└─────────────────────────────────────────────────────────────┘
```

---

## Implementation Notes

### Font Loading

```html
<!-- Required fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@700;900&display=swap" rel="stylesheet">

<!-- Medieval accent (loaded async for performance) -->
<link href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
```

### Tailwind Config Extension

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        blend: {
          black: '#000000',
          white: '#FFFFFF',
          accent: '#FF0000',
          'accent-hover': '#CC0000',
          muted: '#333333',
        },
      },
      fontFamily: {
        display: ['Inter Tight', 'Roboto Condensed', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        blackletter: ['UnifrakturMaguntia', 'fantasy'],
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
        '8': '8px',
        '12': '12px',
      },
      fontSize: {
        'hero': 'clamp(4rem, 12vw, 10rem)',
      },
      letterSpacing: {
        'tighter': '-0.04em',
      },
    },
  },
};
```

---

## Usage Guidelines

### DO

- Use maximum contrast (pure black on white, white on black)
- Make headings BOLD, UPPERCASE, and TIGHT
- Use thick borders (4-8px) for important containers
- Add red accents sparingly for CTAs and emphasis
- Include repetition patterns as subtle background texture
- Reserve Blackletter for ceremonial/special moments only
- Apply halftone effects to photography

### DON'T

- Use gray tones when black/white would work
- Mix too many accent colors (stick to red)
- Overuse Blackletter (it loses impact)
- Use thin borders (under 2px) for primary containers
- Add rounded corners to main containers (keep sharp)
- Use Medieval blue frequently (reserve for rare Blackletter initials)
- Apply soft shadows (the aesthetic is flat and bold)

---

## Accessibility Considerations

- **Contrast Ratio:** Pure black on white exceeds WCAG AAA (21:1)
- **Red on White:** #FF0000 on #FFFFFF = 4.0:1 (passes AA for large text, use bold)
- **Red on Black:** #FF0000 on #000000 = 5.25:1 (passes AA)
- **Focus States:** Use red outline (4px) for keyboard navigation
- **Reduced Motion:** Disable repetition animations if `prefers-reduced-motion`

---

*This specification defines a Nous-dominant blended theme that maintains maximum visual impact while incorporating ceremonial Medieval typography moments and Sanrok's energetic red accent.*

# Medieval-Dominant Blended Theme Specification

> A design system that fuses Medieval manuscript aesthetics with Sanrok's warmth and Nous's structural weight.

---

## Design Philosophy

This blend creates a **"Modern Illuminated"** aesthetic - the gravitas of medieval manuscripts brought into contemporary web design through careful integration of three distinct visual languages.

### How Each System Contributes

| System | Contribution | Percentage |
|--------|-------------|------------|
| **Medieval** | Primary identity: Royal blue, Blackletter headings, decorative elements, ornamental dividers, justified text | **60%** |
| **Sanrok** | Warmth layer: Cream backgrounds, rounded corners on containers, humanizing warmth | **25%** |
| **Nous** | Structural weight: Thick borders, high contrast accents, bold visual anchors | **15%** |

---

## Color Palette

### Primary Colors

```css
:root {
  /* MEDIEVAL - Primary Identity */
  --color-primary: #1A44B8;              /* Royal Blue - dominant brand color */
  --color-primary-dark: #132F80;         /* Deeper blue for emphasis */
  --color-primary-light: #2857D9;        /* Lighter blue for hover states */

  /* SANROK - Warmth Layer */
  --color-background: #FBF5EF;           /* Warm cream - primary background */
  --color-background-alt: #F5EDE3;       /* Slightly deeper cream for cards */
  --color-surface: #FFFFFF;              /* White surfaces */

  /* NOUS - Contrast Anchors */
  --color-black: #000000;                /* Pure black for maximum contrast */
  --color-white: #FFFFFF;                /* Pure white */

  /* TEXT HIERARCHY */
  --color-text-primary: #1A44B8;         /* Blue headings (medieval) */
  --color-text-body: #2D2A26;            /* Warm dark brown for body */
  --color-text-muted: #6B6560;           /* Muted brown for secondary */

  /* ACCENTS & FEEDBACK */
  --color-accent: #8B1E3F;               /* Deep burgundy (medieval accent) */
  --color-gold: #C9A227;                 /* Gold leaf reference */
  --color-success: #2D6A4F;              /* Forest green */
  --color-warning: #C49052;              /* Warm amber */
  --color-error: #9B2335;                /* Deep red */
}
```

### Color Relationships

```
BACKGROUND STACK (Sanrok warmth):
┌─────────────────────────────────┐
│  #FBF5EF (Cream) - Page BG     │
│    ├── #F5EDE3 - Card BG       │
│    └── #FFFFFF - Elevated BG   │
└─────────────────────────────────┘

FOREGROUND STACK (Medieval blue):
┌─────────────────────────────────┐
│  #1A44B8 (Royal Blue) - Primary │
│    ├── Display headings        │
│    ├── Borders (thick)         │
│    └── Interactive elements    │
└─────────────────────────────────┘

ACCENT STACK (Nous weight):
┌─────────────────────────────────┐
│  #000000 (Black) - Anchors     │
│    ├── Thick border strokes    │
│    ├── Drop caps               │
│    └── Strong dividers         │
└─────────────────────────────────┘
```

---

## Typography Hierarchy

### Font Stack

```css
:root {
  /* DISPLAY - Medieval Identity (Blackletter) */
  --font-display: 'UnifrakturMaguntia', 'Old English Text MT', 'Luminari', serif;

  /* HEADINGS - Elegant Serif (Sanrok influence) */
  --font-heading: 'Instrument Serif', 'Playfair Display', 'Crimson Text', Georgia, serif;

  /* BODY - Readable Serif */
  --font-body: 'Crimson Text', 'EB Garamond', Georgia, serif;

  /* UI/SYSTEM - Clean Sans */
  --font-ui: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  /* MONO - Code */
  --font-mono: 'JetBrains Mono', 'SF Mono', Monaco, monospace;
}
```

### Type Scale (1.333 - Perfect Fourth)

```css
:root {
  /* DISPLAY - Blackletter (Medieval) */
  --text-hero: clamp(4rem, 12vw, 8rem);    /* Hero headlines */
  --text-display: clamp(3rem, 8vw, 5rem);  /* Section titles */

  /* HEADINGS - Instrument Serif (Sanrok-softened) */
  --text-h1: 3.157rem;     /* 50.52px */
  --text-h2: 2.369rem;     /* 37.90px */
  --text-h3: 1.777rem;     /* 28.43px */
  --text-h4: 1.333rem;     /* 21.33px */

  /* BODY - Crimson Text */
  --text-body: 1.125rem;   /* 18px - generous for readability */
  --text-small: 0.875rem;  /* 14px */
  --text-xs: 0.75rem;      /* 12px */

  /* SPECIAL */
  --text-initial: 5rem;    /* Drop cap size */
}
```

### Typography Application Rules

| Element | Font | Color | Notes |
|---------|------|-------|-------|
| Hero Title | `--font-display` (Blackletter) | `--color-primary` | Viewport-filling, tight line-height |
| Section Heading | `--font-display` (Blackletter) | `--color-primary` | With ornamental divider below |
| H1-H2 | `--font-heading` (Instrument Serif) | `--color-primary` | Elegant, slightly condensed |
| H3-H4 | `--font-heading` | `--color-text-body` | Standard weight |
| Body | `--font-body` (Crimson) | `--color-text-body` | Justified, generous leading |
| UI Elements | `--font-ui` (Inter) | varies | Buttons, labels, meta |
| Drop Caps | `--font-display` | `--color-primary` or `--color-gold` | Floated left, ~5rem |

---

## Component Specifications

### 1. Hero Section (Medieval + Sanrok)

The hero demonstrates the primary fusion: Blackletter on warm cream.

```css
.hero {
  /* Sanrok warmth */
  background: var(--color-background);
  padding: 6rem 2rem;

  /* Content centering */
  text-align: center;
}

.hero-title {
  /* Medieval identity */
  font-family: var(--font-display);
  font-size: var(--text-hero);
  color: var(--color-primary);
  line-height: 0.85;
  letter-spacing: -0.02em;

  /* Softening for modern feel */
  text-shadow: 0 2px 4px rgba(26, 68, 184, 0.1);
}

.hero-subtitle {
  /* Sanrok influence */
  font-family: var(--font-heading);
  font-size: var(--text-h3);
  color: var(--color-text-muted);
  font-style: italic;
  margin-top: 1.5rem;
}
```

### 2. Ornamental Divider (Medieval)

```css
.divider-ornamental {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 0;
  color: var(--color-primary);
}

.divider-ornamental::before,
.divider-ornamental::after {
  content: '';
  flex: 1;
  max-width: 200px;
  height: 2px;  /* Nous weight influence */
  background: linear-gradient(
    90deg,
    transparent,
    var(--color-primary),
    transparent
  );
}

.divider-ornamental-symbol {
  font-size: 1.5rem;
  /* Fleur-de-lis, cross, or decorative symbol */
}

/* Common symbols: ⚜ ✠ ❧ ❦ ✥ ❋ */
```

### 3. Content Card (Sanrok + Nous)

Cards use Sanrok's warmth with Nous's thick borders.

```css
.card-illuminated {
  /* Sanrok base */
  background: var(--color-surface);
  border-radius: 12px;
  padding: 2rem;

  /* Nous structural weight */
  border: 3px solid var(--color-primary);
  box-shadow:
    0 4px 6px rgba(26, 68, 184, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.06);

  /* Optional gold accent (Medieval) */
  border-top: 4px solid var(--color-gold);
}

.card-illuminated-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.card-illuminated-body {
  font-family: var(--font-body);
  color: var(--color-text-body);
  line-height: 1.7;
  text-align: justify;
}
```

### 4. Initial Cap / Drop Cap (Medieval)

```css
.initial-cap {
  float: left;
  font-family: var(--font-display);
  font-size: var(--text-initial);
  line-height: 0.75;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  color: var(--color-primary);

  /* Optional gold treatment */
  /* color: var(--color-gold); */
  /* text-shadow: 1px 1px 2px rgba(0,0,0,0.2); */
}

/* Accompanying paragraph */
.initial-cap + p,
.initial-cap-container p {
  font-family: var(--font-body);
  line-height: 1.8;
  text-align: justify;
  hyphens: auto;
}
```

### 5. Navigation / Header (Blend)

```css
.header-illuminated {
  /* Sanrok warmth */
  background: var(--color-background);

  /* Nous structural weight */
  border-bottom: 4px solid var(--color-primary);

  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo {
  /* Medieval identity */
  font-family: var(--font-display);
  font-size: 1.75rem;
  color: var(--color-primary);
}

.header-nav-link {
  /* UI font for clarity */
  font-family: var(--font-ui);
  font-size: var(--text-small);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-body);

  /* Transition */
  transition: color 0.2s ease;
}

.header-nav-link:hover {
  color: var(--color-primary);
}

.header-nav-link.active {
  color: var(--color-primary);
  /* Underline with medieval flourish */
  text-decoration: underline;
  text-decoration-style: wavy;
  text-underline-offset: 4px;
}
```

---

## Component Showcase Selection

These 5 components best demonstrate the three-way blend:

### 1. Hero Section with Blackletter Title
**Shows:** Medieval typography dominance + Sanrok warm background
**Key elements:** Viewport-filling Blackletter, cream background, centered layout

### 2. Illuminated Content Card
**Shows:** Nous thick borders + Sanrok rounded corners + Medieval colors
**Key elements:** 3px royal blue border, cream/white surfaces, drop cap option

### 3. Ornamental Section Divider
**Shows:** Pure Medieval aesthetic with Nous weight
**Key elements:** Fleur-de-lis symbol, gradient lines, 2px stroke weight

### 4. Team/Profile Grid
**Shows:** Sanrok card style + Medieval border treatment
**Key elements:** Rounded corners, thick blue borders, Blackletter names

### 5. Typography Scale Demo
**Shows:** Full hierarchy with all three font families
**Key elements:** Blackletter hero, Instrument Serif headings, Crimson body

---

## CSS Custom Properties (Complete Token Set)

```css
:root {
  /* ===== COLORS ===== */

  /* Primary (Medieval) */
  --color-primary: #1A44B8;
  --color-primary-dark: #132F80;
  --color-primary-light: #2857D9;
  --color-primary-alpha-10: rgba(26, 68, 184, 0.1);
  --color-primary-alpha-20: rgba(26, 68, 184, 0.2);

  /* Background (Sanrok) */
  --color-bg: #FBF5EF;
  --color-bg-alt: #F5EDE3;
  --color-surface: #FFFFFF;

  /* Neutral */
  --color-black: #000000;
  --color-white: #FFFFFF;

  /* Text */
  --color-text: #2D2A26;
  --color-text-muted: #6B6560;
  --color-text-inverse: #FFFFFF;

  /* Accent (Medieval) */
  --color-gold: #C9A227;
  --color-burgundy: #8B1E3F;

  /* Feedback */
  --color-success: #2D6A4F;
  --color-warning: #C49052;
  --color-error: #9B2335;

  /* ===== TYPOGRAPHY ===== */

  /* Font Families */
  --font-display: 'UnifrakturMaguntia', 'Old English Text MT', serif;
  --font-heading: 'Instrument Serif', 'Playfair Display', Georgia, serif;
  --font-body: 'Crimson Text', 'EB Garamond', Georgia, serif;
  --font-ui: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Font Sizes */
  --text-hero: clamp(4rem, 12vw, 8rem);
  --text-display: clamp(3rem, 8vw, 5rem);
  --text-h1: 3.157rem;
  --text-h2: 2.369rem;
  --text-h3: 1.777rem;
  --text-h4: 1.333rem;
  --text-body: 1.125rem;
  --text-small: 0.875rem;
  --text-xs: 0.75rem;
  --text-initial: 5rem;

  /* Line Heights */
  --leading-tight: 0.85;
  --leading-snug: 1.1;
  --leading-normal: 1.5;
  --leading-relaxed: 1.7;
  --leading-loose: 1.8;

  /* Letter Spacing */
  --tracking-tighter: -0.03em;
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.05em;
  --tracking-wider: 0.08em;

  /* ===== SPACING ===== */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --space-4xl: 6rem;

  /* ===== BORDERS (Nous influence) ===== */
  --border-thin: 1px;
  --border-medium: 2px;
  --border-thick: 3px;
  --border-heavy: 4px;
  --border-extra: 6px;

  /* ===== RADIUS (Sanrok influence) ===== */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* ===== SHADOWS ===== */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(26, 68, 184, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px rgba(26, 68, 184, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px rgba(26, 68, 184, 0.12), 0 10px 10px rgba(0, 0, 0, 0.04);

  /* ===== TRANSITIONS ===== */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --transition-slow: 400ms ease;

  /* ===== Z-INDEX ===== */
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal: 400;
  --z-tooltip: 500;
}
```

---

## Visual Identity Summary

```
┌────────────────────────────────────────────────────────────────┐
│                    MEDIEVAL-DOMINANT BLEND                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ╔════════════════════════════════════════════════════════╗   │
│  ║  MEDIEVAL (60%)                                        ║   │
│  ║  • Royal Blue #1A44B8 as primary                       ║   │
│  ║  • Blackletter (UnifrakturMaguntia) for display        ║   │
│  ║  • Ornamental dividers (⚜)                             ║   │
│  ║  • Drop caps / Initial letters                         ║   │
│  ║  • Justified body text                                 ║   │
│  ║  • Gold accents (#C9A227)                              ║   │
│  ╚════════════════════════════════════════════════════════╝   │
│                                                                │
│  ┌────────────────────────────────┐                           │
│  │  SANROK (25%)                  │                           │
│  │  • Warm cream #FBF5EF bg       │                           │
│  │  • Rounded corners (12px)      │                           │
│  │  • Instrument Serif for H1-H4  │                           │
│  │  • Soft shadows                │                           │
│  │  • Humanizing warmth           │                           │
│  └────────────────────────────────┘                           │
│                                                                │
│  ┌────────────────────┐                                       │
│  │  NOUS (15%)        │                                       │
│  │  • Thick borders   │                                       │
│  │  • (3-4px)         │                                       │
│  │  • High contrast   │                                       │
│  │  • Bold anchors    │                                       │
│  │  • Strong dividers │                                       │
│  └────────────────────┘                                       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Implementation Notes

### Font Loading (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=UnifrakturMaguntia&display=swap" rel="stylesheet">
```

### Tailwind CSS Extension

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'medieval-blue': '#1A44B8',
        'medieval-dark': '#132F80',
        'sanrok-cream': '#FBF5EF',
        'sanrok-cream-dark': '#F5EDE3',
        'accent-gold': '#C9A227',
        'accent-burgundy': '#8B1E3F',
      },
      fontFamily: {
        'blackletter': ['UnifrakturMaguntia', 'Old English Text MT', 'serif'],
        'display': ['Instrument Serif', 'Playfair Display', 'Georgia', 'serif'],
        'body': ['Crimson Text', 'EB Garamond', 'Georgia', 'serif'],
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
      }
    }
  }
}
```

---

## Usage Guidelines

### DO
- Use Blackletter sparingly - only for hero titles and major section headers
- Pair thick borders (Nous) with rounded corners (Sanrok) for balanced weight
- Apply cream backgrounds liberally - it's the unifying warmth
- Use gold (#C9A227) as a special accent, not primary interactive color
- Maintain justified text for body copy in content-heavy sections

### DON'T
- Use Blackletter for body text or UI elements (illegible)
- Mix too many border weights in one component
- Use pure black backgrounds (breaks the warmth)
- Overuse ornamental dividers (one per section maximum)
- Forget to load all three font families

---

*Specification created: 2026-02-02*
*Design system: Medieval-Dominant Blend v1.0*

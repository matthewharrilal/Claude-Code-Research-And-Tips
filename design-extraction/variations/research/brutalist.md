# Brutalist Web Design: CSS Research

> Research compiled 2026-02-02 for documentation component styling.
> Connected to reference images: NOUS Branding (massive minimal type), Decentralize AI Summit (poster aesthetic)

---

## Overview

Brutalist web design derives from the French "beton brut" (raw concrete). In digital context, it emphasizes raw HTML structure, minimal CSS ornamentation, and stark visual honesty. The movement splits into three camps:

1. **Purists** - Basic HTML markup, blue links, default fonts
2. **UX Minimalists** - Functional but styled, clean fonts, interesting grids
3. **Artists** - Self-expression, experimental techniques, animations

**Neo-brutalism** is the modern evolution: combines brutalist principles with bold colors, thick borders, and hard shadows while maintaining usability.

---

## Border Specifications

### Recommended Border Widths

| Context | Width | Notes |
|---------|-------|-------|
| Subtle | 2px | Minimum for brutalist feel |
| Standard | 3-4px | Sweet spot for most components |
| Bold | 5-6px | High-impact cards, featured elements |
| Maximum | 8px+ | Hero sections, primary CTAs |

### Border CSS Patterns

```css
/* Standard brutalist border */
.brutal-border {
  border: 4px solid #000;
}

/* Thick brutalist border */
.brutal-border-thick {
  border: 6px solid #000;
}

/* Maximum impact border */
.brutal-border-max {
  border: 8px solid #000;
}

/* Colored border variants */
.brutal-border-accent {
  border: 4px solid currentColor;
}
```

---

## Box-Shadow Techniques

### Hard Offset Shadows (Core Technique)

The signature neobrutalist effect uses **zero blur** with offset positioning:

```css
/* Standard hard shadow - 4px offset */
.shadow-brutal {
  box-shadow: 4px 4px 0 #000;
}

/* Medium hard shadow - 6px offset */
.shadow-brutal-md {
  box-shadow: 6px 6px 0 #000;
}

/* Large hard shadow - 8px offset */
.shadow-brutal-lg {
  box-shadow: 8px 8px 0 #000;
}

/* Extra large - 12px offset */
.shadow-brutal-xl {
  box-shadow: 12px 12px 0 #000;
}
```

### Using CSS Variables

```css
:root {
  --shadow-offset: 4px;
  --shadow-color: #000;
}

.brutal-card {
  box-shadow: var(--shadow-offset) var(--shadow-offset) 0 var(--shadow-color);
}
```

### Viewport-Relative Shadows (Responsive)

```css
/* Scales with viewport */
.shadow-responsive {
  --shadow: 1.5vmin;
  --border: 1vmin;
  box-shadow: var(--shadow) var(--shadow) 0 #000;
  border: solid var(--border) #000;
}
```

### Stacked/Layered Shadows

Create depth with multiple shadow layers:

```css
/* Colorful stacked effect (Fossheim technique) */
.shadow-stacked {
  box-shadow:
    inset blue 0 0 0 2px,
    10px -10px 0 -3px #fff, 10px -10px #1FC11B,
    20px -20px 0 -3px #fff, 20px -20px #FFD913,
    30px -30px 0 -3px #fff, 30px -30px #FF9C55,
    40px -40px 0 -3px #fff, 40px -40px #FF5555;
}

/* Rainbow ring effect */
.shadow-rings {
  box-shadow:
    rgb(85, 91, 255) 0px 0px 0px 3px,
    rgb(31, 193, 27) 0px 0px 0px 6px,
    rgb(255, 217, 19) 0px 0px 0px 9px,
    rgb(255, 156, 85) 0px 0px 0px 12px,
    rgb(255, 85, 85) 0px 0px 0px 15px;
}
```

### Boxy 3D Button Effect

```css
/* Boxy button with stacked shadows */
.button-boxy {
  --bottom-color: #999;
  --right-color: #ddd;

  box-shadow:
    1px 0 0 var(--right-color),
    1px 1px 0 var(--bottom-color),
    2px 1px 0 var(--right-color),
    2px 2px 0 var(--bottom-color),
    3px 2px 0 var(--right-color),
    3px 3px 0 var(--bottom-color),
    4px 3px 0 var(--right-color),
    4px 4px 0 var(--bottom-color);
}
```

---

## Typography

### Font Combinations

| Use Case | Font | Weight | Notes |
|----------|------|--------|-------|
| Headlines | Space Grotesk | 700 | Bold geometric sans |
| Headlines Alt | Helvetica/System | 700-900 | Classic brutalist |
| Body | Inter | 400-500 | Clean readability |
| Mono/Code | System Monospace | 400 | Raw aesthetic |

### Size Scale

```css
/* Brutalist typography scale */
.text-xs { font-size: 12px; line-height: 1.4; }
.text-sm { font-size: 14px; line-height: 1.5; }
.text-base { font-size: 16px; line-height: 1.6; }
.text-lg { font-size: 18px; line-height: 1.6; }
.text-xl { font-size: 24px; line-height: 1.4; }
.text-2xl { font-size: 32px; line-height: 1.3; }
.text-3xl { font-size: 44px; line-height: 1.2; }
.text-4xl { font-size: 64px; line-height: 1.1; }
.text-5xl { font-size: 96px; line-height: 1.0; }
```

### Typography CSS

```css
/* Brutalist headings */
.heading-brutal {
  font-family: 'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

/* Massive display text (NOUS style) */
.heading-massive {
  font-size: clamp(48px, 12vw, 200px);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.04em;
}

/* Body text */
.body-brutal {
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 400;
  line-height: 1.6;
}

/* Monospace (raw HTML feel) */
.mono-brutal {
  font-family: 'SF Mono', Monaco, 'Courier New', monospace;
  font-size: 14px;
}
```

---

## Color Schemes

### Classic Brutalist (Monochrome)

```css
:root {
  --brutal-black: #000000;
  --brutal-white: #ffffff;
  --brutal-gray-dark: #1d1e22;
  --brutal-gray-mid: #5e5e5e;
  --brutal-gray-light: #eaeaea;
  --brutal-bg: #fafafa;
}
```

### Neo-Brutalist (Vibrant)

```css
:root {
  /* Primary colors */
  --neo-green: #00ff9f;
  --neo-yellow: #f8ff1d;
  --neo-purple: #9c7bff;
  --neo-red: #ff5555;
  --neo-orange: #ff9c55;
  --neo-blue: #555bff;

  /* Secondary */
  --neo-coral: #ff6b6b;
  --neo-lime: #1fc11b;
  --neo-gold: #ffd913;
}
```

### Documentation-Appropriate Palette

```css
:root {
  /* Backgrounds */
  --bg-primary: #ffffff;
  --bg-secondary: #fafafa;
  --bg-accent: #f0f0f0;

  /* Text */
  --text-primary: #1d1e22;
  --text-secondary: #5e5e5e;
  --text-muted: #888888;

  /* Borders & Shadows */
  --border-color: #000000;
  --shadow-color: #000000;

  /* Accents (pick one) */
  --accent-primary: #2a7d7d;  /* Teal */
  --accent-secondary: #ff5555; /* Red */
}
```

### High Contrast Documentation

```css
/* Dark mode brutalist */
:root[data-theme="dark"] {
  --bg-primary: #0a0a0a;
  --bg-secondary: #1a1a1a;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --border-color: #ffffff;
  --shadow-color: #ffffff;
}
```

---

## Button Components

### Standard Brutalist Button

```css
.btn-brutal {
  background-color: #fff;
  border: 4px solid #000;
  padding: 12px 24px;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  box-shadow: 4px 4px 0 #000;
  transition: transform 0.1s, box-shadow 0.1s;
}

.btn-brutal:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #000;
}

.btn-brutal:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #000;
}
```

### Filled Brutalist Button

```css
.btn-brutal-filled {
  background-color: #000;
  color: #fff;
  border: 4px solid #000;
  padding: 12px 24px;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 4px 4px 0 #555;
  transition: all 0.1s;
}

.btn-brutal-filled:hover {
  background-color: #333;
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #555;
}
```

### Colored Button Variant

```css
.btn-brutal-color {
  background-color: #ff5555;
  color: #000;
  border: 4px solid #000;
  padding: 12px 24px;
  font-weight: 700;
  box-shadow: 4px 4px 0 #000;
  transition: all 0.1s;
}

.btn-brutal-color:hover {
  background-color: #ff7777;
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #000;
}
```

### Pseudo-Element Shadow Button

```css
.btn-brutal-pseudo {
  background-color: #fff;
  border: 3px solid #2a7d7d;
  padding: 16px 40px;
  font-weight: 700;
  font-size: 18px;
  color: #2a7d7d;
  position: relative;
  cursor: pointer;
}

.btn-brutal-pseudo::after {
  content: '';
  position: absolute;
  background-color: #2a7d7d;
  top: 6px;
  left: 6px;
  right: -6px;
  bottom: -6px;
  z-index: -1;
  transition: all 0.1s;
}

.btn-brutal-pseudo:hover::after {
  top: 8px;
  left: 8px;
  right: -8px;
  bottom: -8px;
}

.btn-brutal-pseudo:active::after {
  top: 3px;
  left: 3px;
  right: -3px;
  bottom: -3px;
}
```

### Offset Border Button

```css
.btn-offset {
  background: none;
  border: 5px solid black;
  padding: 1.5rem 3rem;
  box-shadow:
    5px 5px red,
    10px 10px black,
    inset 5px 5px white,
    inset 10px 10px black;
  font-family: system-ui, sans-serif;
  font-weight: bold;
  font-size: 1.25rem;
  cursor: pointer;
}
```

---

## Card Components

### Standard Brutalist Card

```css
.card-brutal {
  background: #fff;
  border: 4px solid #000;
  padding: 24px;
  box-shadow: 8px 8px 0 #000;
}

.card-brutal-header {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 2px solid #000;
}

.card-brutal-body {
  font-family: 'Inter', system-ui, sans-serif;
  line-height: 1.6;
}
```

### Colored Card

```css
.card-brutal-colored {
  background: #00ff9f;
  border: 4px solid #000;
  padding: 24px;
  box-shadow: 8px 8px 0 #000;
}
```

### Interactive Card

```css
.card-brutal-interactive {
  background: #fff;
  border: 4px solid #000;
  padding: 24px;
  box-shadow: 6px 6px 0 #000;
  transition: transform 0.15s, box-shadow 0.15s;
  cursor: pointer;
}

.card-brutal-interactive:hover {
  transform: translate(-3px, -3px);
  box-shadow: 9px 9px 0 #000;
}

.card-brutal-interactive:active {
  transform: translate(2px, 2px);
  box-shadow: 4px 4px 0 #000;
}
```

---

## Form Elements

### Input Fields

```css
.input-brutal {
  width: 100%;
  padding: 12px 16px;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 16px;
  border: 3px solid #000;
  background: #fff;
  box-shadow: 4px 4px 0 #000;
  outline: none;
  transition: box-shadow 0.1s, transform 0.1s;
}

.input-brutal:focus {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #000;
}

.input-brutal::placeholder {
  color: #888;
}
```

### Checkbox

```css
.checkbox-brutal {
  appearance: none;
  width: 24px;
  height: 24px;
  border: 3px solid #000;
  background: #fff;
  cursor: pointer;
  position: relative;
}

.checkbox-brutal:checked {
  background: #000;
}

.checkbox-brutal:checked::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 2px;
  width: 6px;
  height: 12px;
  border: solid #fff;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
```

### Select Dropdown

```css
.select-brutal {
  appearance: none;
  width: 100%;
  padding: 12px 40px 12px 16px;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 16px;
  border: 3px solid #000;
  background: #fff url('data:image/svg+xml,...') no-repeat right 12px center;
  box-shadow: 4px 4px 0 #000;
  cursor: pointer;
}
```

---

## Code Blocks

### Brutalist Code Block

```css
.code-brutal {
  background: #1d1e22;
  color: #f0f0f0;
  border: 4px solid #000;
  padding: 20px;
  font-family: 'SF Mono', Monaco, 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  overflow-x: auto;
  box-shadow: 6px 6px 0 #000;
}
```

### Inline Code

```css
.code-inline-brutal {
  background: #f0f0f0;
  border: 2px solid #000;
  padding: 2px 6px;
  font-family: 'SF Mono', Monaco, monospace;
  font-size: 0.9em;
}
```

---

## Callout/Alert Components

### Standard Callout

```css
.callout-brutal {
  border: 4px solid #000;
  border-left-width: 8px;
  padding: 16px 20px;
  background: #fff;
  margin: 20px 0;
}

.callout-brutal-warning {
  border-left-color: #ffd913;
  background: #fffef0;
}

.callout-brutal-error {
  border-left-color: #ff5555;
  background: #fff5f5;
}

.callout-brutal-info {
  border-left-color: #555bff;
  background: #f5f5ff;
}

.callout-brutal-success {
  border-left-color: #1fc11b;
  background: #f5fff5;
}
```

---

## Navigation

### Brutalist Nav

```css
.nav-brutal {
  display: flex;
  gap: 0;
  border: 4px solid #000;
  background: #fff;
}

.nav-brutal-item {
  padding: 12px 24px;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  border-right: 4px solid #000;
  transition: background 0.1s;
}

.nav-brutal-item:last-child {
  border-right: none;
}

.nav-brutal-item:hover {
  background: #000;
  color: #fff;
}

.nav-brutal-item.active {
  background: #000;
  color: #fff;
}
```

---

## Layout Utilities

### Brutalist Container

```css
.container-brutal {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* With visible border */
.container-brutal-bordered {
  border: 4px solid #000;
  padding: 24px;
  margin: 24px auto;
}
```

### Dividers

```css
.divider-brutal {
  border: none;
  border-top: 4px solid #000;
  margin: 32px 0;
}

.divider-brutal-thick {
  border-top-width: 8px;
}

.divider-brutal-dashed {
  border-top-style: dashed;
}
```

---

## Example Site References

### Pure Brutalist
- **Craigslist** - Column upon column of blue links, white background, no images
- **Brutalist Web Design** (brutalist-web.design) - Manifesto site, semantic HTML focused
- **Drudge Report** - Text-heavy, minimal styling, link aggregation

### Neo-Brutalist (Modern)
- **Balenciaga** - Fashion brand, stark layouts, raw typography
- **Telfar** - Simple functionality, accessibility focus
- **Studio Brot** - Creative agency, cursor effects, motion hints
- **The Outline** (defunct) - Oversized bold typography, unusual layouts

### Design Resources
- **Brutalist Websites** (brutalistwebsites.com) - Collection since 2014
- **Awwwards Brutalism Collection** - Award-winning examples
- **Dribbble #brutalism** - 4,500+ designs

---

## Framework References

| Framework | Size | Focus |
|-----------|------|-------|
| [NeoBrutalismCSS](https://matifandy8.github.io/NeoBrutalismCSS/) | <100KB | Lightweight, pure CSS |
| [Neo-brutalism-CSS](https://github.com/Walikuperek/Neo-brutalism-CSS) | Varies | Components, animations |
| [Brutalist Framework](http://www.brutalistframework.com/) | Varies | HTML template focused |
| [Neobrutalism Components](https://www.shadcn.io/template/ekmas-neobrutalism-components) | React | Tailwind-based, shadcn |

---

## Implementation Checklist

### Essential Properties
- [ ] Border: 3-4px solid black minimum
- [ ] Box-shadow: X Y 0 color (zero blur)
- [ ] Font-weight: 700+ for headings
- [ ] Text-transform: uppercase for emphasis
- [ ] High contrast colors

### Interactive States
- [ ] Hover: translate + increased shadow
- [ ] Active: translate opposite + decreased shadow
- [ ] Focus: visible border or shadow change

### Accessibility Considerations
- [ ] Maintain clear visual hierarchy
- [ ] High contrast ratios (4.5:1 minimum)
- [ ] Legible typography (16px+ base)
- [ ] Clear focus indicators
- [ ] Semantic HTML foundation

---

## Sources

- [Brutalist Web Design](https://brutalist-web.design) - Core principles and philosophy
- [Designlab - Brutalism in Web Design](https://designlab.com/blog/examples-brutalism-in-web-design)
- [HubSpot - Brutalist Website Design](https://blog.hubspot.com/website/brutalist-website-design)
- [NN/g - Neobrutalism](https://www.nngroup.com/articles/neobrutalism/)
- [FreeFrontend - CSS Neobrutalism](https://freefrontend.com/css-neobrutalism/)
- [Neo-brutalism-CSS GitHub](https://github.com/Walikuperek/Neo-brutalism-CSS)
- [CSS-Tricks - Boxy Buttons](https://css-tricks.com/books/greatest-css-tricks/abusing-box-shadow-fun-visual-effects/)
- [Really Good Designs - Neo Brutalist Examples](https://reallygooddesigns.com/neo-brutalist-website-examples/)
- [TodayMade - Brutalist Web Design Guide](https://www.todaymade.com/blog/brutalist-web-design)
- [Elementor - Brutalism in Web Design](https://elementor.com/blog/brutalism-in-web-design/)
- [CSS Scan - Box Shadow Examples](https://getcssscan.com/css-box-shadow-examples)

<!--
LIGHT SECTION — Phase 2D
Part Of: card-system/research — Deep research on card patterns
Contributed To: Soul principles foundation; 3A-3D research fed into SOUL-DEFINITION.md
Full Context: perceptual-audit-v2/synthesis/
-->

# 3A: Card Anatomy - Sanrok Studio Deep Extraction

**Sub-Agent:** 3A
**Focus Area:** Card Component Structure and "Anti-Card" Philosophy
**Date:** 2026-02-03

---

## Executive Summary

Sanrok Studio's approach represents a **paradigm break** from conventional card-based web design. Where most design systems treat cards as containers (bounded rectangles with backgrounds, shadows, and borders), Sanrok employs an **editorial row-based layout** where content defines its own boundaries through typography and whitespace alone.

This is not a card system. It is a **typographic rhythm system** that happens to display project information.

---

## 1. Container Analysis: The Anti-Container

### What We DON'T See

| Property | Generic Card Value | Sanrok Value | Soul Impact |
|----------|-------------------|--------------|-------------|
| `background-color` | `#ffffff`, `#f5f5f5` | **None / Transparent** | Content floats on page canvas |
| `border` | `1px solid #e0e0e0` | **None** | No visual imprisonment |
| `border-radius` | `8px`, `12px`, `16px` | **None** | No rounded softening |
| `box-shadow` | `0 2px 8px rgba(0,0,0,0.1)` | **None** | No elevation hierarchy |
| `padding` | `16px`, `24px` | **Row-based rhythm** | Content breathes freely |
| `min-height` | `200px`, `300px` | **None** | Content dictates height |
| `overflow` | `hidden` | **Visible** | No content truncation |

### What This Means

The "card" is not a box containing content—it's **a horizontal relationship between elements**. This is fundamentally different from:

- **Material Design cards:** Elevated surfaces with shadow depth
- **Bootstrap cards:** Bordered containers with headers/bodies/footers
- **Tailwind cards:** Utility-composed rounded rectangles
- **Neo-brutalist cards:** Black shadows, 100% opacity strokes

Sanrok's approach aligns with **Swiss International Typographic Style** principles where the grid system and typography create structure, not decorative containers.

> "The grid is the foundation for arranging all visual elements in a design."
> — Philip B. Meggs, *History of Graphic Design*

---

## 2. Header Row Analysis: Typography as Architecture

### Layout Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  PROJECT TITLE                                    2023    [BUTTON]  │
│  (Instrument Serif, italic, uppercase, red)       (Inter, black)   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Title Typography Extraction

| Property | Value | Soul Impact |
|----------|-------|-------------|
| `font-family` | `Instrument Serif` | Humanist warmth, editorial authority |
| `font-style` | `italic` | Dynamic tension, forward motion |
| `text-transform` | `uppercase` | Confidence, magazine masthead energy |
| `color` | `#E53935` / `hsl(1, 79%, 55%)` | Brand signature, immediate recognition |
| `font-size` | ~`1.25rem` – `1.5rem` | Readable prominence without shouting |
| `font-weight` | `400` (regular) | Italic carries weight; bold would be redundant |
| `letter-spacing` | ~`0.02em` – `0.04em` | Slight tracking for uppercase legibility |
| `line-height` | ~`1.2` – `1.3` | Tight for single-line titles |

### Year Typography Extraction

| Property | Value | Soul Impact |
|----------|-------|-------------|
| `font-family` | `Inter` | Swiss neutrality, clean utility |
| `font-weight` | `400` | Understated, informational |
| `color` | `#1a1a1a` / near-black | Strong contrast, secondary role |
| `font-size` | ~`0.875rem` – `1rem` | Smaller than title, clear hierarchy |

### Row Alignment Philosophy

- **Flexbox with `justify-content: space-between`** or CSS Grid with explicit columns
- Left-aligned title creates reading entry point
- Right-aligned metadata creates visual balance
- **No vertical stacking on desktop** — horizontal relationships only
- Single baseline alignment across all elements

---

## 3. Tag/Button Analysis: The Outline Paradigm

### Button Style Extraction

```css
/* Extracted Soul Pattern */
.project-button {
  background: transparent;           /* NOT filled */
  border: 1px solid currentColor;    /* Stroke matches text */
  border-radius: 0;                  /* Sharp, NOT rounded */
  padding: 0.5rem 1rem;              /* Functional, not chunky */
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #E53935;                    /* Brand red */
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.project-button:hover {
  background: #E53935;
  color: #ffffff;
}
```

| Property | Generic Pattern | Sanrok Pattern | Soul Impact |
|----------|----------------|----------------|-------------|
| `background` | Solid fill (`#007bff`) | **Transparent** | Button is a frame, not a block |
| `border-radius` | `4px`, `8px`, `9999px` (pill) | **`0`** | Sharp edges = editorial precision |
| `border-width` | `0` (relies on background) | **`1px`** | Line drawing aesthetic |
| `text-transform` | `capitalize`, `none` | **`uppercase`** | Matches title energy |
| `font-size` | `1rem` | **`0.75rem`** | Compact, utility-scale |
| `padding` | `12px 24px` | **`8px 16px`** | Lean, not chunky |

### What Makes This Button Different

1. **No shadow on hover** — State changes through color inversion only
2. **No scale transform** — No playful "bounce" or growth
3. **No gradient** — Flat color philosophy
4. **No icon** — Text-only, typographic purity
5. **Square corners** — Swiss/Brutalist heritage

---

## 4. Image Area Analysis: Duotone Red Treatment

### Duotone Technique

Sanrok applies a **monochromatic red filter** to photography, creating brand cohesion across all imagery. This is a variation of the duotone technique popularized by Spotify and embraced in editorial design.

| Aspect | Implementation | Soul Impact |
|--------|---------------|-------------|
| **Base technique** | Grayscale → Red overlay | Unified visual language |
| **Color mapping** | Shadows → dark red, Highlights → light red/white | Preserves detail with brand color |
| **Blend mode** | Likely `multiply` or CSS filters | Technical simplicity |
| **Application** | Team photos, portfolio images | Everything becomes "Sanrok" |

### CSS Implementation Options

```css
/* Option 1: Filter-based */
.duotone-red {
  filter: grayscale(100%) sepia(100%) hue-rotate(-10deg) saturate(300%);
}

/* Option 2: Mix-blend-mode with overlay */
.duotone-container {
  position: relative;
}
.duotone-container::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #E53935;
  mix-blend-mode: multiply;
}

/* Option 3: SVG filter for precise control */
<filter id="duotone-red">
  <feColorMatrix type="saturate" values="0"/>
  <feComponentTransfer>
    <feFuncR type="table" tableValues="0.1 0.9"/>
    <feFuncG type="table" tableValues="0 0.2"/>
    <feFuncB type="table" tableValues="0 0.2"/>
  </feComponentTransfer>
</filter>
```

### Image Grid Layout

- **No fixed aspect ratios** — Images maintain natural proportions
- **Responsive columns** — Likely 2-4 columns based on viewport
- **Minimal gap** — Just enough to distinguish items
- **No hover zoom** — Editorial stillness, not e-commerce urgency

---

## 5. Spacing System: Vertical Rhythm

### Observed Spacing Scale

| Element | Spacing | Purpose |
|---------|---------|---------|
| Between project rows | `2rem` – `3rem` | Clear separation without dividers |
| Title to metadata | `auto` (flex space-between) | Horizontal relationship |
| Image grid gap | `0.5rem` – `1rem` | Tight cohesion |
| Section margin | `4rem` – `6rem` | Major content breaks |

### Rhythm Philosophy

Unlike component-based systems with rigid spacing tokens, Sanrok appears to use:

1. **Proportional spacing** — Based on content size rather than fixed values
2. **Generous whitespace** — Cream background does heavy lifting
3. **No divider lines** — Space itself creates separation
4. **Asymmetric margins** — Not mechanically equal on all sides

---

## 6. What Makes This NOT Generic

### 10+ Differentiating Factors

| # | Generic Pattern | Sanrok Pattern | Why It Matters |
|---|----------------|----------------|----------------|
| 1 | Card has background | No background | Content floats freely |
| 2 | Card has border | No border | Typography defines edges |
| 3 | Card has shadow | No shadow | Flat hierarchy |
| 4 | Card has border-radius | Sharp corners | Editorial precision |
| 5 | Vertical card layout | Horizontal row layout | Magazine list aesthetic |
| 6 | Card stacks content | Single baseline row | Desktop-first clarity |
| 7 | Filled buttons | Outline-only buttons | Frame, not block |
| 8 | Rounded button corners | Square button corners | Swiss/Brutalist DNA |
| 9 | Full-color images | Duotone red treatment | Unified brand filter |
| 10 | System sans-serif | Instrument Serif (italic) | Typographic signature |
| 11 | Black or gray titles | Red titles (uppercase) | Bold brand statement |
| 12 | Image hover effects | Static images | Editorial stillness |
| 13 | Dense information cards | Minimal metadata | Essential only |
| 14 | Standardized aspect ratios | Natural proportions | Authentic imagery |

### The Soul Statement

> **This is EDITORIAL LAYOUT design, not traditional web "card components."**

The "card" doesn't exist as a reusable container. Instead, there's:
- A **typographic row** with left-right relationships
- A **color system** (red on cream) creating visual separation
- A **rhythm** where whitespace does the work of borders

---

## 7. Comparison: Sanrok vs. Common Frameworks

### vs. Material Design Cards

| Aspect | Material Design | Sanrok |
|--------|----------------|--------|
| Container | Surface with elevation | None |
| Shadow | Multi-level depth system | None |
| Border radius | `4px` standard | `0` |
| Content structure | Header, body, actions | Single row |
| Philosophy | Skeuomorphic surfaces | Typographic minimalism |

### vs. Bootstrap Cards

| Aspect | Bootstrap | Sanrok |
|--------|-----------|--------|
| Container | `.card` with border | None |
| Header | `.card-header` distinct | Inline with row |
| Body | `.card-body` padded | No concept |
| Actions | `.card-footer` separated | Inline button |
| Philosophy | Component modularity | Editorial composition |

### vs. Neo-Brutalist Cards

| Aspect | Neo-Brutalist | Sanrok |
|--------|--------------|--------|
| Shadow | Black, 100% opacity | None |
| Border | Heavy stroke (2-4px) | None |
| Colors | Vibrant, clashing | Restrained red + cream |
| Shapes | Geometric, exposed | Typographic-only |
| Philosophy | Anti-design, raw | Editorial refinement |

---

## 8. Implementation Recommendations

### For Design System Extraction

When recreating this pattern, do NOT:

- ❌ Create a "Card" component with wrapper div
- ❌ Apply `background-color`, `border`, `box-shadow`
- ❌ Use `border-radius` anywhere
- ❌ Create filled buttons

Instead, DO:

- ✅ Create a `ProjectRow` component with flex layout
- ✅ Use typography as the primary structural element
- ✅ Apply color only to text and images
- ✅ Let whitespace do the separation work
- ✅ Create outline-style button variants

### Token Recommendations

```css
/* Sanrok Soul Tokens */
:root {
  /* Colors */
  --sanrok-red: #E53935;
  --sanrok-cream: #F5F0E8;
  --sanrok-black: #1a1a1a;

  /* Typography */
  --font-serif: 'Instrument Serif', Georgia, serif;
  --font-sans: 'Inter', system-ui, sans-serif;

  /* Spacing (proportional, not fixed) */
  --row-gap: clamp(1.5rem, 4vw, 3rem);
  --section-gap: clamp(3rem, 8vw, 6rem);

  /* Borders (for buttons only) */
  --border-weight: 1px;
  --border-radius: 0; /* Intentionally zero */
}
```

---

## 9. Sources & References

### Direct Research
- [Sanrok Studio](https://sanrokstudio.com/) — Primary source
- [CSS Design Awards - Sanrok Studio](https://www.cssdesignawards.com/sites/sanrok-studio/21463/)
- [Whiteboard Journal - Sanrok Portfolio Interview](https://www.whiteboardjournal.com/focus/ideas/portofolio-sanrok-studio/)

### Design Context
- [Zeka Design - Brutalism in Graphic Design](https://www.zekagraphic.com/brutalism-in-graphic-design/)
- [Envato - Neo-Brutalism Trend Deep Dive](https://author.envato.com/hub/trend-deep-dive-neo-brutalism/)
- [Swiss Style Graphic Design - Envato](https://elements.envato.com/learn/swiss-style-graphic-design)
- [PRINT Magazine - Swiss Style Principles](https://www.printmag.com/featured/swiss-style-principles-typefaces-designers/)

### Typography & Portfolio Design
- [Typewolf - Top 40 Designer Portfolio Sites](https://www.typewolf.com/portfolio-sites)
- [Siteinspire - Typographic Websites](https://www.siteinspire.com/websites?categories=24)
- [Designmodo - Oversized Typography Portfolios](https://designmodo.com/oversized-typography/)

### Duotone Technique
- [99designs - The Duotone Effect](https://99designs.com/blog/trends/duotone-design/)
- [Designmodo - Duotone Website Design](https://designmodo.com/duotone-website-design/)
- [Speckyboy - Dual-Toned Color Schemes](https://speckyboy.com/duo-toned-color-schemes-web-design/)

---

## 10. Conclusion: The Anti-Pattern Pattern

Sanrok Studio's "card" is notable precisely because it rejects the card paradigm entirely. The soul of this design lives in:

1. **Typography supremacy** — Instrument Serif italic uppercase red titles
2. **Horizontal relationships** — Row layouts, not stacked containers
3. **Color restraint** — Red on cream, nothing else
4. **Editorial stillness** — No hover effects, no shadows, no animation excess
5. **Whitespace confidence** — Space creates structure, not lines

This is not a design system to be componentized in the traditional sense. It's a **typographic philosophy** that happens to display web content.

---

*Sub-Agent 3A — Card Anatomy Research Complete*

<!--
═══════════════════════════════════════════════════════════════════════════════
LIGHT SECTION PROVENANCE — Group D1b
File: design-extraction/archive/variations/research/editorial.md
Part Of: archive/variations — Design variation research
Contributed To: Editorial pattern exploration; fed into card-system soul principles
═══════════════════════════════════════════════════════════════════════════════
-->

# Editorial Web Design Research

> CSS techniques for publication-quality typography, magazine layouts, and elegant styling

**Reference Connection:** Sanrok Red Team (editorial layout, team cards), Sanrok Headline (publication-quality typography)

---

## Table of Contents

1. [Serif/Sans Pairing Combinations](#1-serifsans-pairing-combinations)
2. [Drop Cap Styling](#2-drop-cap-styling)
3. [Caption Styling Approaches](#3-caption-styling-approaches)
4. [Whitespace and Vertical Rhythm](#4-whitespace-and-vertical-rhythm)
5. [Refined Border Treatments](#5-refined-border-treatments)
6. [Hover Interactions](#6-hover-interactions)
7. [Magazine Layout Grids](#7-magazine-layout-grids)
8. [Complete Editorial Component Examples](#8-complete-editorial-component-examples)

---

## 1. Serif/Sans Pairing Combinations

Editorial design demands intentional font pairing that creates visual hierarchy while maintaining readability. The key principle: **contrast without conflict**.

### Recommended Pairings

| Headline Font | Body Font | Character | Best For |
|---------------|-----------|-----------|----------|
| **Playfair Display** | Montserrat | Bold, modern, newspaper feel | Editorial articles, magazines |
| **Abril Fatface** | Lato | High contrast, attention-grabbing | Feature articles, headlines |
| **Montserrat** | EB Garamond | Modern meets classic | News articles, scannable content |
| **Source Serif Pro** | Source Sans Pro | Harmonious superfamily | Long-form content, documentation |
| **Merriweather** | Open Sans | Readable, warm | Blog posts, essays |
| **Cormorant Garamond** | Proza Libre | Refined, intellectual | Academic, literary |

### CSS Implementation

```css
/* Editorial Typography System */
:root {
  /* Font Families */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-accent: 'Cormorant Garamond', Georgia, serif;
  --font-caption: 'Source Sans Pro', sans-serif;

  /* Font Scale (Major Third - 1.25 ratio) */
  --text-xs: 0.64rem;    /* 10.24px */
  --text-sm: 0.8rem;     /* 12.8px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.25rem;    /* 20px */
  --text-xl: 1.563rem;   /* 25px */
  --text-2xl: 1.953rem;  /* 31.25px */
  --text-3xl: 2.441rem;  /* 39px */
  --text-4xl: 3.052rem;  /* 48.8px */
  --text-5xl: 3.815rem;  /* 61px */
}

/* Headlines - Serif with character */
h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

h1 {
  font-size: var(--text-5xl);
  font-size: clamp(2.5rem, 5vw + 1rem, 4rem);
}

h2 {
  font-size: var(--text-3xl);
}

h3 {
  font-size: var(--text-xl);
}

/* Body - Sans-serif for readability */
body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.7;
  color: #2d2d2d;
}

/* Lead paragraph - larger, more refined */
.lead {
  font-family: var(--font-accent);
  font-size: var(--text-lg);
  font-style: italic;
  line-height: 1.8;
  color: #4a4a4a;
}

/* Article byline */
.byline {
  font-family: var(--font-caption);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #6b6b6b;
}
```

### Loading Fonts Properly

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Source+Sans+Pro:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
```

---

## 2. Drop Cap Styling

Drop caps signal the beginning of an article with editorial gravitas. Two approaches exist: the classic float method and the modern `initial-letter` property.

### Modern Approach: `initial-letter`

```css
/* Modern drop cap with initial-letter */
.article-body > p:first-of-type::first-letter {
  font-family: 'Playfair Display', serif;
  initial-letter: 3.5 3; /* size / number of lines */
  font-weight: 700;
  margin-right: 0.75rem;
  color: #1a1a1a;
}

/* Safari prefix */
@supports (-webkit-initial-letter: 3) {
  .article-body > p:first-of-type::first-letter {
    -webkit-initial-letter: 3.5 3;
  }
}
```

### Classic Fallback: Float Method

```css
/* Float-based drop cap (broader browser support) */
.article-body > p:first-of-type::first-letter {
  float: left;
  font-family: 'Playfair Display', serif;
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 0.8;
  margin-right: 0.5rem;
  margin-top: 0.1em;
  color: #1a1a1a;
}
```

### Decorative Variations

```css
/* Drop cap with accent color */
.drop-cap-accent::first-letter {
  font-family: 'Cormorant Garamond', serif;
  initial-letter: 3;
  font-weight: 600;
  margin-right: 0.75rem;
  color: #2a7d7d; /* Muted teal accent */
}

/* Drop cap with background */
.drop-cap-boxed::first-letter {
  font-family: 'Playfair Display', serif;
  initial-letter: 3;
  font-weight: 700;
  margin-right: 0.75rem;
  color: #ffffff;
  background: #1a1a1a;
  padding: 0.5rem;
  border-radius: 4px;
}

/* Drop cap with subtle border */
.drop-cap-bordered::first-letter {
  font-family: 'Playfair Display', serif;
  initial-letter: 3;
  font-weight: 700;
  margin-right: 0.75rem;
  color: #1a1a1a;
  border: 1px solid currentColor;
  padding: 0.25rem 0.5rem;
}

/* Gradient drop cap */
.drop-cap-gradient::first-letter {
  font-family: 'Playfair Display', serif;
  initial-letter: 3.5 3;
  font-weight: 700;
  margin-right: 0.75rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

---

## 3. Caption Styling Approaches

Captions in editorial design are understated yet informative, using smaller sizes, lighter weights, and often italic styling.

### Basic Editorial Caption

```css
/* Figure container */
figure {
  margin: 2rem 0;
  padding: 0;
}

figure img {
  width: 100%;
  height: auto;
  display: block;
}

/* Caption styling */
figcaption {
  font-family: var(--font-caption);
  font-size: var(--text-sm);
  color: #6b6b6b;
  line-height: 1.5;
  padding-top: 0.75rem;
  border-top: 1px solid #e0e0e0;
  margin-top: 0.75rem;
}

/* Italic caption variant */
figcaption.italic {
  font-style: italic;
}

/* Caption with credit */
figcaption .credit {
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #999;
  margin-left: 0.5em;
}
```

### Table-Display Method (Auto-sizing)

This technique makes the caption match the image width automatically:

```css
/* Figure adapts to content width */
figure.auto-size {
  display: table;
  margin: 2rem auto;
}

figure.auto-size img {
  display: block;
  max-width: 100%;
  height: auto;
}

figure.auto-size figcaption {
  display: table-caption;
  caption-side: bottom;
  font-family: var(--font-caption);
  font-size: var(--text-sm);
  color: #6b6b6b;
  padding-top: 0.75rem;
  text-align: center;
}
```

### Pull-Quote Style Caption

```css
/* Large quote-style caption */
figure.pull-quote {
  margin: 3rem 0;
  padding: 0 2rem;
}

figure.pull-quote figcaption {
  font-family: var(--font-accent);
  font-size: var(--text-xl);
  font-style: italic;
  color: #3d3d3d;
  line-height: 1.6;
  border-left: 3px solid #2a7d7d;
  padding-left: 1.5rem;
  margin-top: 1rem;
}

figure.pull-quote figcaption cite {
  display: block;
  font-family: var(--font-caption);
  font-size: var(--text-sm);
  font-style: normal;
  color: #6b6b6b;
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

### Side Caption (Magazine Layout)

```css
/* Side-by-side image and caption */
figure.side-caption {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  align-items: end;
  margin: 3rem 0;
}

figure.side-caption img {
  width: 100%;
  height: auto;
}

figure.side-caption figcaption {
  font-family: var(--font-caption);
  font-size: var(--text-sm);
  color: #6b6b6b;
  line-height: 1.6;
  align-self: start;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
}

@media (max-width: 768px) {
  figure.side-caption {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
```

---

## 4. Whitespace and Vertical Rhythm

Editorial design demands disciplined spacing. Vertical rhythm creates visual harmony through consistent baseline multiples.

### Baseline System

```css
:root {
  /* Baseline unit - all spacing derives from this */
  --baseline: 1.5rem; /* 24px at 16px base */

  /* Spacing scale */
  --space-1: calc(var(--baseline) * 0.25);  /* 6px */
  --space-2: calc(var(--baseline) * 0.5);   /* 12px */
  --space-3: calc(var(--baseline) * 0.75);  /* 18px */
  --space-4: var(--baseline);               /* 24px */
  --space-5: calc(var(--baseline) * 1.5);   /* 36px */
  --space-6: calc(var(--baseline) * 2);     /* 48px */
  --space-7: calc(var(--baseline) * 3);     /* 72px */
  --space-8: calc(var(--baseline) * 4);     /* 96px */
}
```

### Flow Utility (Lobotomized Owl)

```css
/* Automatic vertical spacing between siblings */
.flow {
  --flow-space: var(--space-4);
}

.flow > * + * {
  margin-top: var(--flow-space);
}

/* Context-specific overrides */
.flow h2 {
  --flow-space: var(--space-6);
}

.flow h3 {
  --flow-space: var(--space-5);
}

.flow p + p {
  --flow-space: var(--space-4);
}

.flow figure {
  --flow-space: var(--space-6);
}
```

### Article Layout with Vertical Rhythm

```css
/* Article container */
.article {
  max-width: 680px;
  margin: 0 auto;
  padding: var(--space-6) var(--space-4);
}

/* Headline spacing */
.article h1 {
  margin-bottom: var(--space-4);
}

/* Meta information */
.article-meta {
  display: flex;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid #e0e0e0;
}

/* Paragraphs */
.article p {
  line-height: var(--baseline);
  margin-bottom: var(--space-4);
}

/* Block quotes */
.article blockquote {
  margin: var(--space-6) 0;
  padding: var(--space-4) var(--space-5);
  border-left: 3px solid #2a7d7d;
}

/* Section breaks */
.article hr {
  border: none;
  height: 1px;
  background: #e0e0e0;
  margin: var(--space-7) 0;
}

/* Centered decorative break */
.article .section-break {
  text-align: center;
  margin: var(--space-6) 0;
  color: #999;
  font-size: var(--text-lg);
  letter-spacing: 0.5em;
}
```

### Responsive Spacing

```css
/* Tighter spacing on mobile */
@media (max-width: 768px) {
  :root {
    --baseline: 1.25rem; /* 20px */
  }

  .article {
    padding: var(--space-4) var(--space-3);
  }
}
```

---

## 5. Refined Border Treatments

Editorial borders are thin, purposeful, and never heavy. They delineate without dominating.

### Thin Line Separators

```css
/* Horizontal rule */
hr.editorial {
  border: none;
  height: 1px;
  background: #e0e0e0;
  margin: 3rem 0;
}

/* Decorative centered rule */
hr.ornament {
  border: none;
  height: 1px;
  background: transparent;
  margin: 2.5rem 0;
  position: relative;
}

hr.ornament::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 1px;
  background: #ccc;
}

/* Rule with centered symbol */
hr.symbol {
  border: none;
  margin: 2.5rem 0;
  text-align: center;
}

hr.symbol::before {
  content: '\2022 \2022 \2022'; /* Three dots */
  letter-spacing: 0.5em;
  color: #999;
  font-size: 0.75rem;
}
```

### Card Borders

```css
/* Subtle card with thin border */
.card-editorial {
  border: 1px solid #e8e4df;
  border-radius: 2px;
  padding: 1.5rem;
  background: #fefcf9;
}

/* Card with accent border */
.card-accent {
  border: 1px solid #e8e4df;
  border-left: 3px solid #2a7d7d;
  padding: 1.5rem;
  background: #ffffff;
}

/* Card with top accent only */
.card-top-accent {
  border-top: 2px solid #1a1a1a;
  padding-top: 1.5rem;
}
```

### Image Frame Borders

```css
/* Thin frame around images */
.img-framed {
  border: 1px solid #e0e0e0;
  padding: 8px;
  background: #ffffff;
}

/* Double-line frame (editorial classic) */
.img-double-frame {
  border: 1px solid #ccc;
  padding: 4px;
  background: #ffffff;
  box-shadow: inset 0 0 0 1px #e8e4df;
}

/* Subtle shadow instead of border */
.img-shadow {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
```

### Table Borders

```css
/* Editorial table styling */
table.editorial {
  width: 100%;
  border-collapse: collapse;
}

table.editorial th,
table.editorial td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

table.editorial th {
  font-family: var(--font-caption);
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6b6b6b;
  border-bottom: 2px solid #1a1a1a;
}

table.editorial tbody tr:hover {
  background: #faf9f7;
}
```

### Blockquote Borders

```css
/* Left-border blockquote */
blockquote.editorial {
  border-left: 2px solid #2a7d7d;
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-family: var(--font-accent);
  font-style: italic;
  color: #4a4a4a;
}

/* Full-width top/bottom borders */
blockquote.highlight {
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 2rem 0;
  margin: 2.5rem 0;
}
```

---

## 6. Hover Interactions

Editorial hover effects are subtle and refined - they enhance without distracting.

### Animated Underline Links

```css
/* Base link styling */
a.editorial-link {
  position: relative;
  color: #2a7d7d;
  text-decoration: none;
}

/* Underline that grows on hover */
a.editorial-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: bottom left;
  transition: transform 0.3s ease-out;
}

a.editorial-link:hover::after {
  transform: scaleX(1);
}

/* Reverse direction variant */
a.editorial-link-reverse::after {
  transform-origin: bottom right;
}

a.editorial-link-reverse:hover::after {
  transform-origin: bottom left;
}
```

### Image Hover Effects

```css
/* Subtle zoom on hover */
figure.hover-zoom {
  overflow: hidden;
}

figure.hover-zoom img {
  transition: transform 0.4s ease;
}

figure.hover-zoom:hover img {
  transform: scale(1.03);
}

/* Darken overlay on hover */
figure.hover-overlay {
  position: relative;
  overflow: hidden;
}

figure.hover-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.3s ease;
}

figure.hover-overlay:hover::after {
  background: rgba(0, 0, 0, 0.1);
}
```

### Card Hover States

```css
/* Subtle lift effect */
.card-hover-lift {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card-hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* Border color change */
.card-hover-border {
  border: 1px solid #e0e0e0;
  transition: border-color 0.2s ease;
}

.card-hover-border:hover {
  border-color: #2a7d7d;
}

/* Background tint */
.card-hover-tint {
  background: #ffffff;
  transition: background 0.2s ease;
}

.card-hover-tint:hover {
  background: #faf9f7;
}
```

### Navigation Hover

```css
/* Navigation link with sliding underline */
.nav-link {
  position: relative;
  padding: 0.5rem 0;
  color: #4a4a4a;
  text-decoration: none;
  font-family: var(--font-caption);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #1a1a1a;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #1a1a1a;
}

.nav-link:hover::before {
  width: 100%;
}

/* Active state */
.nav-link.active::before {
  width: 100%;
  background: #2a7d7d;
}
```

### Button Hover

```css
/* Ghost button with fill on hover */
.btn-editorial {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid #1a1a1a;
  background: transparent;
  color: #1a1a1a;
  font-family: var(--font-caption);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
  cursor: pointer;
}

.btn-editorial:hover {
  background: #1a1a1a;
  color: #ffffff;
}

/* Underline button variant */
.btn-text {
  display: inline-block;
  padding: 0.5rem 0;
  border: none;
  border-bottom: 1px solid #1a1a1a;
  background: transparent;
  color: #1a1a1a;
  font-family: var(--font-caption);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.btn-text:hover {
  color: #2a7d7d;
  border-color: #2a7d7d;
}
```

---

## 7. Magazine Layout Grids

CSS Grid enables sophisticated magazine-style layouts with asymmetric arrangements.

### Basic Magazine Grid

```css
/* Magazine article grid */
.magazine-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

/* Featured article spans full width */
.magazine-grid .featured {
  grid-column: 1 / -1;
}

/* Two-column span */
.magazine-grid .span-2 {
  grid-column: span 2;
}

@media (max-width: 768px) {
  .magazine-grid .span-2 {
    grid-column: span 1;
  }
}
```

### Named Grid Areas

```css
/* Complex editorial layout */
.editorial-layout {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: 2rem;
  grid-template-areas:
    "hero hero hero hero hero hero hero hero hero hero hero hero"
    "main main main main main main main main side side side side"
    "feat feat feat feat feat feat related related related related related related";
}

.hero { grid-area: hero; }
.main-content { grid-area: main; }
.sidebar { grid-area: side; }
.featured { grid-area: feat; }
.related { grid-area: related; }

@media (max-width: 1024px) {
  .editorial-layout {
    grid-template-areas:
      "hero hero hero hero hero hero hero hero hero hero hero hero"
      "main main main main main main main main main main main main"
      "side side side side side side side side side side side side"
      "feat feat feat feat feat feat feat feat feat feat feat feat"
      "related related related related related related related related related related related related";
  }
}
```

### Responsive Magazine Layout (20 Lines)

From CSS-Tricks - a minimal, powerful approach:

```css
.archive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 2rem;
  grid-auto-flow: dense;
}

/* Featured items span multiple columns */
.archive .article:nth-child(31n + 1) {
  grid-column: 1 / -1;
}

.archive .article:nth-child(16n + 2) {
  grid-column: span 2;
}

.archive .article:nth-child(16n + 10) {
  grid-column: span 2;
}

/* Fallback for narrow screens */
@media (max-width: 460px) {
  .archive {
    display: flex;
    flex-direction: column;
  }
}
```

### Article Page Layout

```css
/* Full article page */
.article-page {
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;
  row-gap: 2rem;
}

.article-page > * {
  grid-column: 2;
}

/* Full-bleed images */
.article-page .full-bleed {
  grid-column: 1 / -1;
  width: 100%;
}

/* Wide images (larger than text) */
.article-page .wide {
  grid-column: 1 / -1;
  max-width: 900px;
  margin: 0 auto;
}

/* Pull quotes to the side */
@media (min-width: 1200px) {
  .article-page .pull-quote {
    grid-column: 1;
    text-align: right;
    padding-right: 2rem;
  }
}
```

---

## 8. Complete Editorial Component Examples

### Article Header

```html
<header class="article-header">
  <div class="article-meta">
    <span class="category">Technology</span>
    <time datetime="2026-02-02">February 2, 2026</time>
  </div>
  <h1 class="article-title">The Art of Minimal Design</h1>
  <p class="article-deck">How constraints breed creativity in modern web design</p>
  <div class="article-byline">
    <span class="author">By <a href="#">Jane Smith</a></span>
    <span class="reading-time">8 min read</span>
  </div>
</header>
```

```css
.article-header {
  max-width: 680px;
  margin: 0 auto;
  padding: 4rem 1.5rem 3rem;
  text-align: center;
}

.article-meta {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-caption);
  font-size: var(--text-sm);
  color: #6b6b6b;
}

.article-meta .category {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #2a7d7d;
}

.article-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw + 1rem, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.article-deck {
  font-family: var(--font-accent);
  font-size: var(--text-xl);
  font-style: italic;
  color: #4a4a4a;
  line-height: 1.5;
  margin-bottom: 2rem;
}

.article-byline {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-family: var(--font-caption);
  font-size: var(--text-sm);
  color: #6b6b6b;
  padding-top: 1.5rem;
  border-top: 1px solid #e0e0e0;
}

.article-byline a {
  color: #1a1a1a;
  text-decoration: none;
}

.article-byline a:hover {
  text-decoration: underline;
}
```

### Team Member Card (Sanrok Style)

```html
<article class="team-card">
  <figure class="team-card-image">
    <img src="team-member.jpg" alt="Jane Smith">
  </figure>
  <div class="team-card-content">
    <h3 class="team-card-name">Jane Smith</h3>
    <p class="team-card-role">Design Director</p>
    <p class="team-card-bio">Leading our visual identity across all platforms.</p>
  </div>
</article>
```

```css
.team-card {
  display: grid;
  gap: 1.25rem;
  padding: 1.5rem;
  border: 1px solid #e8e4df;
  background: #ffffff;
  transition: border-color 0.2s ease;
}

.team-card:hover {
  border-color: #c0b8af;
}

.team-card-image {
  margin: 0;
  overflow: hidden;
  aspect-ratio: 1;
}

.team-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.team-card:hover .team-card-image img {
  filter: grayscale(0%);
}

.team-card-name {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.team-card-role {
  font-family: var(--font-caption);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #2a7d7d;
  margin-bottom: 0.75rem;
}

.team-card-bio {
  font-size: var(--text-sm);
  color: #6b6b6b;
  line-height: 1.5;
}
```

### Code Block (Editorial Style)

```css
/* Editorial code block */
pre.code-editorial {
  background: #f8f6f3;
  border: 1px solid #e8e4df;
  border-radius: 3px;
  padding: 1.5rem;
  overflow-x: auto;
  font-family: 'JetBrains Mono', 'SF Mono', Monaco, monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #3d3d3d;
}

/* Code with caption/label */
.code-block {
  position: relative;
  margin: 2rem 0;
}

.code-block-label {
  position: absolute;
  top: 0;
  left: 1rem;
  transform: translateY(-50%);
  background: #ffffff;
  padding: 0 0.5rem;
  font-family: var(--font-caption);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #6b6b6b;
}

/* Inline code */
code.inline {
  background: #f0ebe3;
  padding: 0.15em 0.4em;
  border-radius: 3px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9em;
  color: #c44b4b;
}
```

---

## Sources

### Magazine Layout Techniques
- [FreeFrontend: 78 CSS Magazine Layouts](https://freefrontend.com/css-magazine-layouts/)
- [Smashing Magazine: Build Magazine Layout with CSS Grid](https://www.smashingmagazine.com/2023/02/build-magazine-layout-css-grid-areas/)
- [CSS-Tricks: Responsive Magazine Layout in 20 Lines](https://css-tricks.com/responsive-grid-magazine-layout-in-just-20-lines-of-css/)
- [Speckyboy: CSS Grid & Flexbox Magazine Layouts](https://speckyboy.com/news-magazine-css-layouts/)

### Typography and Font Pairing
- [Figma: 39 Font Pairings](https://www.figma.com/resource-library/font-pairings/)
- [Webflow: 8 Font Pairing Examples](https://webflow.com/blog/font-pairing)
- [Smashing Magazine: Best Practices Combining Typefaces](https://www.smashingmagazine.com/2010/11/best-practices-of-combining-typefaces/)
- [Pangram Pangram: Best Sans and Serif Font Pairings](https://pangrampangram.com/blogs/journal/best-font-pairings-2025)

### Drop Caps
- [Chrome Developers: CSS initial-letter](https://developer.chrome.com/blog/control-your-drop-caps-with-css-initial-letter)
- [DigitalOcean: Drop Caps in CSS](https://www.digitalocean.com/community/tutorials/css-drop-caps)
- [CSS-Tricks: Drop Caps Snippet](https://css-tricks.com/snippets/css/drop-caps/)

### Hover Effects and Animations
- [30 Seconds of Code: Hover Underline Animation](https://www.30secondsofcode.org/css/s/hover-underline-animation/)
- [Tobias Ahlin: Animating Link Underlines](https://tobiasahlin.com/blog/css-trick-animating-link-underlines/)
- [CSS {In Real Life}: Animating Underlines](https://css-irl.info/animating-underlines/)

### Vertical Rhythm and Spacing
- [Zell Liew: Why Vertical Rhythm](https://zellwk.com/blog/why-vertical-rhythms/)
- [24 Ways: Managing Flow and Rhythm with CSS Custom Properties](https://24ways.org/2018/managing-flow-and-rhythm-with-css-custom-properties/)
- [Aleksandr Hovhannisyan: Vertical Rhythm with CSS Grid](https://www.aleksandrhovhannisyan.com/blog/vertical-rhythm-with-css-grid/)

### Figures and Captions
- [FreeFrontend: HTML figure & figcaption with CSS](https://freefrontend.com/html-figure-figcaption/)
- [Perficient: CSS Image Caption Solutions](https://blogs.perficient.com/2018/07/31/image-captions-done-right/)
- [W3: CSS Figures & Captions](https://www.w3.org/Style/Examples/007/figures.en.html)

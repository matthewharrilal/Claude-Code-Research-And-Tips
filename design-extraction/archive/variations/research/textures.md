<!--
═══════════════════════════════════════════════════════════════════════════════
LIGHT SECTION PROVENANCE — Group D1b
File: design-extraction/archive/variations/research/textures.md
Part Of: archive/variations — Design variation research
Contributed To: Editorial pattern exploration; fed into card-system soul principles
═══════════════════════════════════════════════════════════════════════════════
-->

# CSS Texture Techniques Research

> Comprehensive guide to noise, grain, halftone, and paper textures using pure CSS and SVG

---

## Table of Contents

1. [SVG Noise Textures](#1-svg-noise-textures)
2. [Grain Overlay Techniques](#2-grain-overlay-techniques)
3. [Halftone Effects (CSS Only)](#3-halftone-effects-css-only)
4. [Paper Textures](#4-paper-textures)
5. [Performance Considerations](#5-performance-considerations)
6. [Quick Reference](#6-quick-reference)

---

## 1. SVG Noise Textures

The foundation of CSS noise textures is the SVG `<feTurbulence>` filter, which generates Perlin or fractal noise.

### Core SVG Filter

```svg
<svg viewBox="0 0 200 200" xmlns='http://www.w3.org/2000/svg'>
  <filter id='noiseFilter'>
    <feTurbulence
      type='fractalNoise'
      baseFrequency='0.65'
      numOctaves='3'
      stitchTiles='stitch' />
  </filter>
  <rect width='100%' height='100%' filter='url(#noiseFilter)' />
</svg>
```

### Key Parameters Explained

| Parameter | Value | Effect |
|-----------|-------|--------|
| `type` | `fractalNoise` | Perlin noise (organic) |
| `type` | `turbulence` | More chaotic pattern |
| `baseFrequency` | `0.65` | Controls coarseness (higher = finer grain) |
| `numOctaves` | `3` | Detail levels (1-5, higher = more complex) |
| `stitchTiles` | `stitch` | Enables seamless tiling |

### Ready-to-Use Data URIs

#### Subtle Noise (baseFrequency: 0.65)

```css
.noise-subtle {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
```

#### Medium Noise (baseFrequency: 1.0)

```css
.noise-medium {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
```

#### Fine Grain (baseFrequency: 4.0)

```css
.noise-fine {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
```

#### Very Fine Stipple (baseFrequency: 8.0)

```css
.noise-stipple {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
```

---

## 2. Grain Overlay Techniques

### Method A: Pseudo-Element Overlay (Recommended)

The most flexible approach using `::before` or `::after`:

```css
.card {
  position: relative;
  overflow: hidden;
  background: rgb(15, 23, 42);
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 182px;
  opacity: 0.12;
  pointer-events: none;
}

.card-content {
  position: relative;
  z-index: 1;
}
```

### Method B: Grainy Gradient with Contrast Boost

Creates sharp, defined grain by boosting contrast:

```css
.grainy-gradient {
  isolation: isolate;
  background:
    linear-gradient(to right, blue, transparent),
    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  filter: contrast(170%) brightness(1000%);
}

/* Optional: Add color overlay with blend mode */
.grainy-gradient::after {
  content: "";
  position: absolute;
  inset: 0;
  background: moccasin;
  mix-blend-mode: multiply;
}
```

### Intensity Levels

```css
/* Ultra-subtle (barely visible) */
.grain-ultra-subtle::before {
  opacity: 0.05;
  background-size: 200px;
}

/* Subtle (professional) */
.grain-subtle::before {
  opacity: 0.08;
  background-size: 180px;
}

/* Medium (noticeable) */
.grain-medium::before {
  opacity: 0.15;
  background-size: 150px;
}

/* Heavy (artistic) */
.grain-heavy::before {
  opacity: 0.25;
  background-size: 120px;
}

/* Film grain (very visible) */
.grain-film::before {
  opacity: 0.35;
  background-size: 100px;
}
```

### Method C: Animated Film Grain

```css
.film-grain {
  position: relative;
}

.film-grain::after {
  animation: grain 8s steps(10) infinite;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  content: "";
  height: 300%;
  left: -50%;
  opacity: 0.3;
  position: fixed;
  top: -100%;
  width: 300%;
  pointer-events: none;
}

@keyframes grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -10%); }
  20% { transform: translate(-15%, 5%); }
  30% { transform: translate(7%, -25%); }
  40% { transform: translate(-5%, 25%); }
  50% { transform: translate(-15%, 10%); }
  60% { transform: translate(15%, 0%); }
  70% { transform: translate(0%, 15%); }
  80% { transform: translate(3%, 35%); }
  90% { transform: translate(-10%, 10%); }
}
```

---

## 3. Halftone Effects (CSS Only)

Halftone reproduces images/gradients using dots of varying sizes. These techniques reference anime screentone and Ben-Day dots.

### Basic Halftone (3 Declarations)

The simplest pure CSS halftone:

```css
.halftone {
  /* 1. Pattern (dots) + Map (gradient that controls dot size) */
  background:
    radial-gradient(closest-side, #777, #fff) 0 / 1em 1em space,
    linear-gradient(90deg, #888, #fff);

  /* 2. Blend the layers */
  background-blend-mode: multiply;

  /* 3. Boost contrast to create hard edges */
  filter: contrast(16);
}
```

### Staggered Dot Grid (Anime Screentone)

```css
.halftone-staggered {
  --dot: radial-gradient(closest-side, #777, #fff calc(100% / 1.414));

  background:
    var(--dot) 0 0 / 2em 2em,
    var(--dot) 1em 1em / 2em 2em,
    linear-gradient(90deg, #888, #fff);
  background-blend-mode: multiply;
  filter: contrast(16);
}
```

### Configurable Halftone with CSS Variables

```css
.halftone-configurable {
  --dot-color: #000;
  --bg-color: #fff;
  --dot-size: 0.25rem;
  --grid-size: 1.35rem;
  --grid-offset: calc(var(--grid-size) / 2);

  background-image:
    radial-gradient(circle at center, var(--dot-color) var(--dot-size), transparent 0),
    radial-gradient(circle at center, var(--dot-color) var(--dot-size), transparent 0);
  background-size: var(--grid-size) var(--grid-size);
  background-position: 0 0, var(--grid-offset) var(--grid-offset);
}
```

### Radial Halftone (From Center)

```css
.halftone-radial {
  background:
    radial-gradient(closest-side, #777, #fff) 0 / 1em 1em space,
    radial-gradient(circle at center, #888, #fff);
  background-blend-mode: multiply;
  filter: contrast(16);
}
```

### Line Halftone (Vertical Lines)

```css
.halftone-lines {
  background:
    repeating-linear-gradient(90deg, #777, #fff 0.5em),
    linear-gradient(180deg, #888, #fff);
  background-blend-mode: multiply;
  filter: contrast(16);
}
```

### Diagonal Halftone

```css
.halftone-diagonal {
  background:
    linear-gradient(45deg, #fff, #777) 0 / 1em 1em,
    linear-gradient(90deg, #888, #fff);
  background-blend-mode: multiply;
  filter: contrast(16);
}
```

### Inverted Halftone (White Dots on Dark)

```css
.halftone-inverted {
  background:
    radial-gradient(closest-side, #888, #000) 0 / 1em 1em space,
    linear-gradient(90deg, #777, #000);
  background-blend-mode: screen;
  filter: contrast(16);
}
```

### Colored Halftone

```css
.halftone-colored {
  background:
    radial-gradient(closest-side, #777, #fff) 0 / 1em 1em space,
    linear-gradient(45deg, #ff6b6b, #4ecdc4);
  background-blend-mode: multiply;
  filter: contrast(16);
  mix-blend-mode: multiply; /* For layering over content */
}
```

### Soft Halftone (Larger Dots with Blur)

```css
.halftone-soft {
  background:
    radial-gradient(closest-side, #777, #fff) 0 / 2em 2em space,
    linear-gradient(90deg, #888, #fff);
  background-blend-mode: multiply;
  filter: contrast(80) blur(2px) contrast(5);
}
```

### Complete Halftone Component

```css
.halftone-component {
  position: relative;
  background: white;
  filter: contrast(50);
}

.halftone-component::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle at center,
    black 0.06rem,
    transparent 0.65rem
  );
  background-size: 1.3rem 1.3rem;
  mask-image: linear-gradient(rgb(0 0 0), rgb(0 0 0 / 0.5));
  pointer-events: none;
}
```

---

## 4. Paper Textures

### CSS-Only Paper Texture

Using layered gradients to simulate paper:

```css
.paper-texture {
  background-color: #f5f5f0;
  background-image:
    /* Subtle variation */
    linear-gradient(
      90deg,
      rgba(200, 200, 200, 0.03) 50%,
      transparent 50%
    ),
    linear-gradient(
      rgba(200, 200, 200, 0.03) 50%,
      transparent 50%
    );
  background-size: 4px 4px;
}
```

### Paper with Grain Overlay

```css
.paper-grain {
  background-color: #faf8f5;
  position: relative;
}

.paper-grain::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.04;
  pointer-events: none;
}
```

### Aged Paper Effect

```css
.aged-paper {
  background:
    linear-gradient(
      135deg,
      rgba(139, 119, 101, 0.1) 0%,
      transparent 50%,
      rgba(139, 119, 101, 0.05) 100%
    ),
    #f4efe4;
  position: relative;
}

.aged-paper::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.06;
  mix-blend-mode: multiply;
  pointer-events: none;
}
```

### Cardboard Texture

```css
.cardboard {
  background-color: #c9b99a;
  position: relative;
}

.cardboard::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    /* Horizontal fibers */
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.03) 2px,
      rgba(0, 0, 0, 0.03) 4px
    ),
    /* Noise */
    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.15;
  pointer-events: none;
}
```

### Transparent Textures Pattern (Example)

From transparenttextures.com - these require downloading the PNG, but here's the usage pattern:

```css
/* Using a downloaded texture */
.textured-paper {
  background-color: #f5f5dc;
  background-image: url('/textures/paper.png');
  background-repeat: repeat;
}

/* With blend mode for color flexibility */
.textured-paper-colored {
  background-color: #3498db;
  background-image: url('/textures/paper.png');
  background-repeat: repeat;
  background-blend-mode: soft-light;
}
```

---

## 5. Performance Considerations

### Impact Levels

| Technique | Performance | Notes |
|-----------|-------------|-------|
| SVG data URI (inline) | Excellent | No HTTP request, vector-based |
| CSS gradients (halftone) | Excellent | Pure CSS, hardware accelerated |
| Small PNG (8x8, 16x16) | Good | Tiny file size, tiles well |
| Animated grain | Moderate | GPU intensive, use sparingly |
| Large PNG textures | Poor | Avoid 400x400+ textures |
| High contrast filters | Moderate | Can cause repaints |

### Best Practices

```css
/* GOOD: Contained pseudo-element */
.element::before {
  content: "";
  position: absolute;
  inset: 0;
  /* texture here */
  pointer-events: none; /* Important! */
  will-change: opacity; /* If animating */
}

/* GOOD: Small background-size for tiling */
.grain::before {
  background-size: 180px; /* Sweet spot */
}

/* AVOID: Full-page fixed overlays */
.bad-grain {
  position: fixed;
  width: 300%;  /* Too large! */
  height: 300%;
}

/* BETTER: Contained to viewport */
.good-grain {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
}
```

### Mobile Considerations

```css
/* Reduce intensity on mobile */
@media (max-width: 768px) {
  .grain::before {
    opacity: 0.05; /* Lower than desktop */
    background-size: 200px; /* Larger tiles = less computation */
  }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .film-grain::after {
    animation: none;
  }
}
```

---

## 6. Quick Reference

### Complete Copy-Paste Components

#### Production-Ready Grain Overlay

```css
/* Add to any element */
.with-grain {
  position: relative;
  isolation: isolate;
}

.with-grain::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 182px;
  opacity: 0.08;
  pointer-events: none;
  z-index: 1;
}

.with-grain > * {
  position: relative;
  z-index: 2;
}
```

#### Production-Ready Halftone

```css
.halftone-overlay {
  position: relative;
}

.halftone-overlay::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(closest-side, rgba(0,0,0,0.5), transparent) 0 / 8px 8px space;
  mix-blend-mode: multiply;
  pointer-events: none;
}
```

#### Production-Ready Paper

```css
.paper-surface {
  background-color: #faf8f5;
  position: relative;
}

.paper-surface::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
}
```

### baseFrequency Quick Guide

| Value | Effect | Use Case |
|-------|--------|----------|
| 0.4-0.6 | Coarse, cloudy | Artistic backgrounds |
| 0.65-1.0 | Classic grain | Most common |
| 1.5-2.0 | Fine grain | Paper texture |
| 4.0-8.0 | Very fine stipple | Subtle texture |

### Opacity Quick Guide

| Opacity | Effect | Use Case |
|---------|--------|----------|
| 0.03-0.05 | Barely visible | Professional/minimal |
| 0.08-0.12 | Subtle | Default recommendation |
| 0.15-0.20 | Noticeable | Artistic |
| 0.25-0.35 | Heavy | Film/vintage effect |

---

## Sources

- [CSS-Tricks: Grainy Gradients](https://css-tricks.com/grainy-gradients/)
- [Frontend Masters: Pure CSS Halftone Effect in 3 Declarations](https://frontendmasters.com/blog/pure-css-halftone-effect-in-3-declarations/)
- [CSS In Real Life: CSS Halftone Patterns](https://css-irl.info/css-halftone-patterns/)
- [ibelick: Creating Grainy Backgrounds with CSS](https://ibelick.com/blog/create-grainy-backgrounds-with-css)
- [freeCodeCamp: How to Create Grainy CSS Backgrounds Using SVG Filters](https://www.freecodecamp.org/news/grainy-css-backgrounds-using-svg-filters/)
- [CSS-Tricks: Animated Grainy Texture](https://css-tricks.com/snippets/css/animated-grainy-texture/)
- [Transparent Textures](https://www.transparenttextures.com/)
- [fffuel nnnoise](https://www.fffuel.co/nnnoise/)
- [Codrops: SVG Filter Effects with feTurbulence](https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/)

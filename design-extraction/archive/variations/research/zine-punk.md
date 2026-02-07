<!--
═══════════════════════════════════════════════════════════════════════════════
LIGHT SECTION PROVENANCE — Group D1b
File: design-extraction/archive/variations/research/zine-punk.md
Part Of: archive/variations — Design variation research
Contributed To: Editorial pattern exploration; fed into card-system soul principles
═══════════════════════════════════════════════════════════════════════════════
-->

# Zine/Punk Aesthetic CSS Research

> **Reference Images:** Nous Research spread (zine collage layout), Decentralize AI Summit (punk/DIY poster aesthetic)

This document provides working CSS code, SVG filters, and techniques for creating authentic zine and punk graphic design effects in web components.

---

## Table of Contents

1. [Torn Paper Effects](#torn-paper-effects)
2. [Xerox/Photocopy Texture Overlays](#xeroxphotocopy-texture-overlays)
3. [Noise and Grain Textures](#noise-and-grain-textures)
4. [Rotation and Distortion](#rotation-and-distortion)
5. [Typography](#typography)
6. [Color Palettes](#color-palettes)
7. [Stamp Effects](#stamp-effects)
8. [Complete Component Examples](#complete-component-examples)

---

## Torn Paper Effects

### SVG Filter Approach (feTurbulence + feDisplacementMap)

This creates organic, irregular torn edges by displacing pixels using noise:

```svg
<svg width="0" height="0" style="position: absolute;">
  <defs>
    <filter id="torn-edge">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.04"
        numOctaves="5"
        result="noise"/>
      <feDisplacementMap
        in="SourceGraphic"
        in2="noise"
        scale="15"
        xChannelSelector="R"
        yChannelSelector="G"/>
    </filter>
  </defs>
</svg>
```

```css
.torn-paper {
  filter: url(#torn-edge);
}
```

### CSS Clip-Path Irregular Edge

For a more controlled torn effect using polygon points:

```css
.torn-bottom {
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 8px),
    97% 100%,
    94% calc(100% - 5px),
    90% calc(100% - 2px),
    86% 100%,
    82% calc(100% - 6px),
    78% calc(100% - 3px),
    74% 100%,
    70% calc(100% - 4px),
    65% calc(100% - 7px),
    60% 100%,
    55% calc(100% - 5px),
    50% calc(100% - 2px),
    45% 100%,
    40% calc(100% - 6px),
    35% calc(100% - 3px),
    30% 100%,
    25% calc(100% - 5px),
    20% calc(100% - 8px),
    15% 100%,
    10% calc(100% - 4px),
    5% calc(100% - 6px),
    0 100%
  );
}
```

### SVG Data URI Torn Edge Border

```css
.torn-edge-svg {
  border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5 T30,5 T40,5 T50,5 T60,5 T70,5 T80,5 T90,5 T100,5 L100,10 L0,10 Z' fill='%23f5f5dc'/%3E%3C/svg%3E") 10 stretch;
  border-width: 0 0 10px 0;
  border-style: solid;
}
```

### CSS Stamp Shape (Perforated Edge)

Creates postage stamp-style perforated edges:

```css
.stamp-edge {
  --r: 8px; /* control the notch radius */

  padding: var(--r);
  background: #f5f5dc;
  mask:
    radial-gradient(50% 50%, #0000 66%, #000 67%) round
     var(--r) var(--r)/calc(2*var(--r)) calc(2*var(--r)),
    conic-gradient(#000 0 0) content-box;
}
```

---

## Xerox/Photocopy Texture Overlays

### Full-Page Texture Overlay

```css
body {
  position: relative;
}

body::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.08;
  mix-blend-mode: multiply;
  pointer-events: none;
  z-index: 9999;
}
```

### Photocopy Filter Stack

Simulates low-quality xerox reproduction:

```css
.xerox-effect {
  filter:
    grayscale(100%)
    contrast(1.8)
    brightness(0.95);
  background-blend-mode: multiply;
}

/* Add grain overlay */
.xerox-effect::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E");
  opacity: 0.15;
  mix-blend-mode: overlay;
  pointer-events: none;
}
```

### Halftone Dot Pattern

```css
.halftone {
  background-image:
    radial-gradient(circle, #000 1px, transparent 1px);
  background-size: 4px 4px;
  mix-blend-mode: multiply;
  opacity: 0.3;
}
```

### Motion Blur/Smudge Effect

```svg
<svg width="0" height="0">
  <defs>
    <filter id="motion-blur">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3,0" />
    </filter>
  </defs>
</svg>
```

```css
.smudged {
  filter: url(#motion-blur);
}
```

---

## Noise and Grain Textures

### SVG feTurbulence Noise Generator

```svg
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="noiseFilter">
    <feTurbulence
      type="fractalNoise"
      baseFrequency="0.65"
      numOctaves="3"
      stitchTiles="stitch" />
  </filter>
  <rect width="100%" height="100%" filter="url(#noiseFilter)" />
</svg>
```

**Key Parameters:**
- `type`: `fractalNoise` (smooth, cloud-like) or `turbulence` (ripple-like)
- `baseFrequency`: 0.02-0.2 for most textures (lower = larger patterns)
- `numOctaves`: 1-5 (higher = more detail, more CPU)
- `stitchTiles`: "stitch" for seamless tiling

### Grainy Gradient (CSS + SVG)

```css
.grainy-gradient {
  position: relative;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}

.grainy-gradient::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.25;
  mix-blend-mode: overlay;
  pointer-events: none;
}
```

### Boosted Grain with Contrast

```css
.high-grain {
  background:
    linear-gradient(to right, #4a0080, transparent),
    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  filter: contrast(170%) brightness(1000%);
  isolation: isolate;
}

.high-grain-overlay {
  background: #f5f5dc;
  mix-blend-mode: multiply;
}
```

### Animated Grain Texture

```css
.animated-grain::after {
  content: "";
  position: fixed;
  top: -100%;
  left: -50%;
  width: 300%;
  height: 300%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.15;
  pointer-events: none;
  animation: grain 8s steps(10) infinite;
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

### Paper Texture (Rough Surface)

```svg
<svg width="0" height="0">
  <defs>
    <filter id="paper-texture">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.04"
        numOctaves="5"
        result="noise"/>
      <feDiffuseLighting
        in="noise"
        lighting-color="white"
        surfaceScale="2">
        <feDistantLight azimuth="45" elevation="60"/>
      </feDiffuseLighting>
    </filter>
  </defs>
</svg>
```

---

## Rotation and Distortion

### Punk Rock Stripe (rotate + skew)

```css
.punk-stripe {
  background: linear-gradient(240deg, #ff3366, #ff6b35);
  padding: 3rem 2rem;
  transform: rotate(-3deg) skew(-3deg);
  margin: 2rem -2rem; /* Extend past container */
}

/* Un-skew the content inside */
.punk-stripe__content {
  transform: skew(3deg);
}
```

### Random Rotation Classes

For hand-placed, DIY feel:

```css
.rotate-cw-1 { transform: rotate(1deg); }
.rotate-cw-2 { transform: rotate(2deg); }
.rotate-cw-3 { transform: rotate(3deg); }
.rotate-ccw-1 { transform: rotate(-1deg); }
.rotate-ccw-2 { transform: rotate(-2deg); }
.rotate-ccw-3 { transform: rotate(-3deg); }

/* Combined with slight translate for "placed by hand" feel */
.placed-1 { transform: rotate(-2deg) translate(3px, -2px); }
.placed-2 { transform: rotate(1.5deg) translate(-2px, 4px); }
.placed-3 { transform: rotate(-1deg) translate(1px, -3px); }
```

### SVG Text Distortion Filter

```svg
<svg width="0" height="0">
  <defs>
    <filter id="text-distort">
      <feTurbulence
        baseFrequency="0.01 0.01"
        numOctaves="1"
        result="noise" />
      <feDisplacementMap
        in="SourceGraphic"
        in2="noise"
        scale="8"
        xChannelSelector="R"
        yChannelSelector="R" />
    </filter>
  </defs>
</svg>
```

```css
.distorted-text {
  filter: url(#text-distort);
}
```

### Glitch Text Effect

```css
.glitch {
  position: relative;
  color: #fff;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  left: 2px;
  text-shadow: -2px 0 #ff3366;
  clip: rect(24px, 550px, 90px, 0);
  animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

.glitch::after {
  left: -2px;
  text-shadow: 2px 0 #00ffff;
  clip: rect(85px, 550px, 140px, 0);
  animation: glitch-anim 2.5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% { clip: rect(31px, 9999px, 94px, 0); }
  5% { clip: rect(70px, 9999px, 71px, 0); }
  10% { clip: rect(29px, 9999px, 24px, 0); }
  /* ... add more keyframes for full effect */
}
```

---

## Typography

### Typewriter Fonts (Google Fonts)

```css
/* Import from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Special+Elite&family=Space+Mono:wght@400;700&display=swap');

/* Typewriter styles */
.typewriter {
  font-family: 'Cutive Mono', monospace;
}

.old-typewriter {
  font-family: 'Special Elite', cursive;
  letter-spacing: 0.05em;
}

.modern-mono {
  font-family: 'Space Mono', monospace;
}
```

### Distressed Type Effect

```css
.distressed-text {
  font-family: 'Special Elite', monospace;
  color: #1a1a1a;
  text-shadow:
    1px 1px 0 rgba(0,0,0,0.1),
    -1px -1px 0 rgba(255,255,255,0.3);
  filter: url(#text-distort); /* Reference SVG filter */
}
```

### Inked/Stamped Text

```css
.inked-text {
  font-family: 'Cutive Mono', monospace;
  color: #1a1a1a;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  opacity: 0.9;
  /* Mask with grunge texture for ink variation */
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
```

### Brutalist Typography Stack

```css
:root {
  /* Grotesque/Sans-Serif - Raw, minimal */
  --font-grotesque: 'Archivo', 'IBM Plex Sans', 'Work Sans', system-ui, sans-serif;

  /* Monospace - Technical, grid-like */
  --font-mono: 'Space Mono', 'IBM Plex Mono', 'Roboto Mono', monospace;

  /* Display - Bold statements */
  --font-display: 'Archivo Black', 'Franklin Gothic', Impact, sans-serif;
}

/* All caps, heavy weight */
.brutalist-heading {
  font-family: var(--font-grotesque);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 0.9;
}

/* Monospace body */
.brutalist-body {
  font-family: var(--font-mono);
  font-size: 14px;
  line-height: 1.6;
}
```

### CSS Text Outline (Hollow Text)

```css
.outline-text {
  color: transparent;
  -webkit-text-stroke: 2px #1a1a1a;
  text-stroke: 2px #1a1a1a;
  font-weight: 900;
}
```

---

## Color Palettes

### Newsprint/Xerox

```css
:root {
  /* Newsprint Base */
  --newsprint-paper: #f5f5dc;      /* Cream/off-white */
  --newsprint-aged: #e8e4d4;       /* Yellowed paper */
  --newsprint-ink: #1a1a1a;        /* Near-black ink */
  --newsprint-faded: #4a4a4a;      /* Faded text */

  /* Xerox Tones */
  --xerox-white: #fafafa;
  --xerox-gray-light: #d4d4d4;
  --xerox-gray-mid: #9a9a9a;
  --xerox-gray-dark: #3d3d3d;
  --xerox-black: #0a0a0a;
}
```

### Punk/Zine Limited Palette

```css
:root {
  /* Classic 2-color punk */
  --punk-black: #0a0a0a;
  --punk-white: #fafafa;

  /* Bold accent (choose one) */
  --punk-red: #ff3366;
  --punk-yellow: #ffff00;
  --punk-pink: #ff69b4;
  --punk-cyan: #00ffff;

  /* Safety/Warning */
  --punk-caution: #ffcc00;
  --punk-danger: #ff0000;
}
```

### Risograph-Inspired

```css
:root {
  /* Risograph ink colors */
  --riso-black: #000000;
  --riso-blue: #0078bf;
  --riso-green: #00a95c;
  --riso-yellow: #ffe800;
  --riso-orange: #ff6c2f;
  --riso-red: #ff665e;
  --riso-pink: #fe6db6;
  --riso-purple: #765ba7;
  --riso-fluorescent-pink: #ff48b0;
  --riso-fluorescent-orange: #ff7477;

  /* Paper stocks */
  --riso-paper-white: #ffffff;
  --riso-paper-cream: #fff5d6;
  --riso-paper-kraft: #c9b89a;
}
```

### High Contrast Duo

```css
:root {
  /* Stark black & white with one accent */
  --duo-bg: #000000;
  --duo-fg: #ffffff;
  --duo-accent: #ff3366; /* Hot pink */
}

/* Alternative: Inverted */
:root {
  --duo-bg: #ffffff;
  --duo-fg: #000000;
  --duo-accent: #0066ff; /* Electric blue */
}
```

---

## Stamp Effects

### Rubber Stamp with Rotation

```css
.rubber-stamp {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 3px solid #c41e3a;
  border-radius: 4px;
  color: #c41e3a;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transform: rotate(-5deg);
  opacity: 0.85;

  /* Grunge mask for worn look */
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
```

### Circular Stamp/Seal

```css
.circular-stamp {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border: 4px solid #1a1a1a;
  border-radius: 50%;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  text-align: center;
  transform: rotate(-12deg);

  /* Double border effect */
  box-shadow:
    inset 0 0 0 2px transparent,
    inset 0 0 0 4px #1a1a1a;
}
```

### Ink Bleed Effect

```css
.ink-bleed {
  position: relative;
  color: #1a1a1a;
  text-shadow:
    0 0 1px #1a1a1a,
    0 0 2px rgba(26, 26, 26, 0.5);
  filter: blur(0.3px);
}
```

---

## Complete Component Examples

### Zine-Style Card

```css
.zine-card {
  position: relative;
  background: var(--newsprint-paper, #f5f5dc);
  padding: 2rem;
  transform: rotate(-1deg);
  box-shadow:
    4px 4px 0 rgba(0,0,0,0.1),
    8px 8px 20px rgba(0,0,0,0.15);
}

/* Torn bottom edge */
.zine-card::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  height: 20px;
  background: inherit;
  clip-path: polygon(
    0 50%, 3% 30%, 6% 60%, 9% 40%, 12% 55%,
    15% 35%, 18% 50%, 21% 45%, 24% 55%, 27% 40%,
    30% 60%, 33% 35%, 36% 50%, 39% 45%, 42% 55%,
    45% 40%, 48% 60%, 51% 35%, 54% 50%, 57% 45%,
    60% 55%, 63% 40%, 66% 60%, 69% 35%, 72% 50%,
    75% 45%, 78% 55%, 81% 40%, 84% 60%, 87% 35%,
    90% 50%, 93% 45%, 96% 55%, 100% 40%,
    100% 100%, 0 100%
  );
}

/* Grain overlay */
.zine-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.06;
  mix-blend-mode: multiply;
  pointer-events: none;
}
```

### Punk Banner

```css
.punk-banner {
  position: relative;
  background: linear-gradient(135deg, #ff3366 0%, #ff6b35 100%);
  color: #fff;
  padding: 3rem 4rem;
  transform: rotate(-2deg) skew(-2deg);
  margin: 2rem -3rem;
  overflow: hidden;
}

.punk-banner__content {
  transform: skew(2deg);
}

.punk-banner__title {
  font-family: 'Archivo Black', Impact, sans-serif;
  font-size: 4rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 0.9;
  text-shadow: 4px 4px 0 rgba(0,0,0,0.3);
}

/* Noise overlay */
.punk-banner::after {
  content: "";
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.12;
  mix-blend-mode: overlay;
  pointer-events: none;
}
```

### Collage Container

```css
.collage-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0; /* Overlapping items */
  padding: 2rem;
}

.collage-item {
  position: relative;
  background: #fff;
  padding: 1rem;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
}

.collage-item:nth-child(1) { transform: rotate(-3deg) translate(10px, 5px); z-index: 1; }
.collage-item:nth-child(2) { transform: rotate(2deg) translate(-5px, -8px); z-index: 2; }
.collage-item:nth-child(3) { transform: rotate(-1deg) translate(8px, 12px); z-index: 3; }
.collage-item:nth-child(4) { transform: rotate(4deg) translate(-12px, 3px); z-index: 2; }
.collage-item:nth-child(5) { transform: rotate(-2deg) translate(6px, -6px); z-index: 4; }
.collage-item:nth-child(6) { transform: rotate(1deg) translate(-3px, 8px); z-index: 1; }
```

### Xerox Document Effect

```css
.xerox-document {
  position: relative;
  background: #fafafa;
  padding: 3rem;
  filter: grayscale(100%) contrast(1.3);
}

/* Scan lines */
.xerox-document::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,0,0,0.03) 2px,
    rgba(0,0,0,0.03) 4px
  );
  pointer-events: none;
}

/* Photocopy artifacts */
.xerox-document::after {
  content: "";
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.08;
  mix-blend-mode: multiply;
  pointer-events: none;
}
```

---

## Sources

### Torn Paper Effects
- [SVG Backgrounds: Torn Paper and Shadow](https://www.svgbackgrounds.com/new-10-torn-paper-and-shadow-backgrounds/)
- [Subframe: 10 CSS Paper Effect Examples](https://www.subframe.com/tips/css-paper-effect-examples)
- [CSS Shape: Stamp](https://css-shape.com/stamp/)
- [GitHub: TornPaper.js](https://github.com/happy358/TornPaper)

### Textures and Noise
- [CSS-Tricks: Grainy Gradients](https://css-tricks.com/grainy-gradients/)
- [CSS-Tricks: Animated Grainy Texture](https://css-tricks.com/snippets/css/animated-grainy-texture/)
- [Codrops: SVG Filter Effects with feTurbulence](https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/)
- [freeCodeCamp: Grainy CSS Backgrounds Using SVG Filters](https://www.freecodecamp.org/news/grainy-css-backgrounds-using-svg-filters/)
- [fffuel: nnnoise SVG Noise Generator](https://www.fffuel.co/nnnoise/)

### Xerox/Photocopy
- [Envato Tuts+: Create Photocopy and Xerox Textures](https://design.tutsplus.com/tutorials/how-to-create-photocopy-and-xerox-textures--cms-109034)
- [Medium: Add a Texture Overlay to an Entire Webpage](https://medium.com/@erikritter/css-snippets-add-a-texture-overlay-to-an-entire-webpage-b0bfdfd02c45)

### Punk/Brutalist Design
- [Bryan L. Robinson: Punk Rock CSS with rotate() and skew()](https://bryanlrobinson.com/blog/tip-use-rotate-and-skew-together-to-introduce-punk-rock-design/)
- [Envato Elements: Fanzine Web Design Inspiration](https://elements.envato.com/learn/fanzine-web-design-inspiration)
- [Webflow Blog: A Deep Dive into Brutalism](https://webflow.com/blog/brutalism)
- [Creative Bloq: Are Brutalist Sites the Web's Punk Rock Moment?](https://www.creativebloq.com/features/are-brutalist-sites-the-webs-punk-rock-moment)

### Typography
- [Brutalist Themes: Free Fonts for Brutalist Websites](https://brutalistthemes.com/free-fonts-for-brutalist-websites/)
- [Typewolf: Top 10 Brutalist Fonts](https://www.typewolf.com/top-10-brutalist-fonts)
- [Google Fonts: Cutive Mono](https://fonts.google.com/specimen/Cutive+Mono)
- [Google Fonts: Space Mono](https://fonts.google.com/specimen/Space+Mono)

### Stamp Effects
- [CodePen: Rubber Stamp Effect](https://codepen.io/555/pen/pdwvBP)
- [benarson.com: Ink Stamp Effect Using CSS and Fonts](https://benarson.com/ink-stamp-effect-using-css-and-fonts/)

### Distortion and Text Effects
- [Henry.codes: How to Distort Text with SVG Filters](https://henry.codes/writing/how-to-distort-text-with-svg/)
- [CSS-Tricks: Creating Patterns with SVG Filters](https://css-tricks.com/creating-patterns-with-svg-filters/)
- [Bennett Feely: Clippy CSS clip-path Maker](https://bennettfeely.com/clippy/)

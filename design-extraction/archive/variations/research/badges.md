# CSS Badge and Stamp Effects Research

> Comprehensive guide to rotated badges, corner ribbons, seal effects, and distressed stamp treatments.

**Reference Image Connections:**
- Image 1 (Nous Hermes): Level indicators, badges
- Image 3 (Nous Research spread): Stamps, barcodes
- Image 6-7 (Sanrok): Arrow motifs, decorative elements

---

## Table of Contents

1. [Rotation Values](#1-rotation-values)
2. [Positioning Techniques](#2-positioning-techniques)
3. [Corner Ribbon Implementations](#3-corner-ribbon-implementations)
4. [Stamp/Seal Border Treatments](#4-stampseal-border-treatments)
5. [Starburst Badge Effects](#5-starburst-badge-effects)
6. [Wear/Distress Effects](#6-weardistress-effects)
7. [Combined Examples](#7-combined-examples)
8. [Sources](#8-sources)

---

## 1. Rotation Values

### Common Rotation Angles

| Angle | Use Case | Visual Effect |
|-------|----------|---------------|
| `-15deg` | Subtle tilt | Casual, hand-placed feel |
| `-20deg` | Moderate rotation | Stamp-like appearance |
| `-30deg` | Strong diagonal | Dynamic, attention-grabbing |
| `-45deg` | Corner ribbon | Perfect diagonal placement |
| `12deg` | Approval stamp | Classic rubber stamp tilt |
| `45deg` | Right-corner ribbon | Diagonal from top-right |
| `225deg` | Bottom-left ribbon | Inverted diagonal |
| `-225deg` | Bottom-right ribbon | Inverted diagonal |

### Basic Rotation CSS

```css
/* Subtle stamp tilt */
.badge-subtle {
  transform: rotate(-15deg);
}

/* Classic approval stamp rotation */
.badge-stamp {
  transform: rotate(12deg);
}

/* Corner ribbon rotation */
.badge-corner {
  transform: rotate(-45deg);
}

/* Dynamic angle for emphasis */
.badge-dynamic {
  transform: rotate(-30deg);
}
```

### Transform Origin Control

```css
/* Default: center rotation */
.badge-center {
  transform-origin: center center; /* 50% 50% */
  transform: rotate(-15deg);
}

/* Rotate from top-left corner */
.badge-pivot-topleft {
  transform-origin: top left;
  transform: rotate(-15deg);
}

/* Rotate from bottom-left (swing effect) */
.badge-pivot-bottomleft {
  transform-origin: bottom left;
  transform: rotate(15deg);
}

/* Custom pivot point (outside element) */
.badge-external-pivot {
  transform-origin: -20px -20px;
  transform: rotate(-15deg);
}

/* Pixel-precise pivot */
.badge-precise {
  transform-origin: 90px 30px;
  transform: rotate(-20deg);
}
```

---

## 2. Positioning Techniques

### Absolute Positioning for Badges

```css
/* Parent container setup */
.card {
  position: relative;
  overflow: hidden; /* Optional: clips ribbon edges */
}

/* Top-right corner badge */
.badge-top-right {
  position: absolute;
  top: 10px;
  right: 10px;
}

/* Top-left corner badge */
.badge-top-left {
  position: absolute;
  top: 10px;
  left: 10px;
}

/* Negative positioning (extends beyond container) */
.badge-overflow {
  position: absolute;
  top: -5px;
  right: -5px;
}
```

### Transform + Position Combination

```css
/* Centered on corner using translate */
.badge-corner-centered {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
}

/* Ribbon positioned with rotation */
.ribbon-positioned {
  position: absolute;
  right: -25px;
  top: -12px;
  transform: rotate(20deg);
}

/* Complex corner positioning */
.ribbon-complex {
  position: absolute;
  top: 30px;
  right: -25px;
  width: 225px;
  transform: rotate(45deg);
}
```

### Z-Index Layering

```css
/* Badge above content */
.badge-overlay {
  position: absolute;
  z-index: 10;
}

/* Behind content (decorative) */
.badge-decorative {
  position: absolute;
  z-index: -1;
}
```

---

## 3. Corner Ribbon Implementations

### Basic Corner Ribbon

```html
<div class="box">
  <div class="ribbon"><span>Popular</span></div>
</div>
```

```css
.box {
  width: 200px;
  height: 300px;
  position: relative;
  border: 1px solid #BBB;
  background: #eee;
}

.ribbon {
  position: absolute;
  right: -5px;
  top: -5px;
  z-index: 1;
  overflow: hidden;
  width: 75px;
  height: 75px;
  text-align: right;
}

.ribbon span {
  font-size: 10px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  line-height: 20px;
  transform: rotate(45deg);
  width: 100px;
  display: block;
  background: linear-gradient(#9BC90D 0%, #79A70A 100%);
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
  position: absolute;
  top: 19px;
  right: -21px;
}

/* Folded corner pseudo-elements */
.ribbon span::before {
  content: '';
  position: absolute;
  left: 0px;
  top: 100%;
  z-index: -1;
  border-left: 3px solid #79A70A;
  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #79A70A;
}

.ribbon span::after {
  content: '';
  position: absolute;
  right: 0%;
  top: 100%;
  z-index: -1;
  border-right: 3px solid #79A70A;
  border-left: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #79A70A;
}
```

### Four-Corner Ribbon System

```css
/* Base ribbon styles */
.ribbon {
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
}

.ribbon::before,
.ribbon::after {
  position: absolute;
  z-index: -1;
  content: '';
  display: block;
  border: 5px solid #2980b9;
}

.ribbon span {
  position: absolute;
  display: block;
  width: 225px;
  padding: 15px 0;
  background-color: #3498db;
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
  color: #fff;
  font: 700 18px/1 'Lato', sans-serif;
  text-shadow: 0 1px 1px rgba(0,0,0,.2);
  text-transform: uppercase;
  text-align: center;
}

/* Top Left */
.ribbon-top-left {
  top: -10px;
  left: -10px;
}
.ribbon-top-left::before,
.ribbon-top-left::after {
  border-top-color: transparent;
  border-left-color: transparent;
}
.ribbon-top-left::before { top: 0; right: 0; }
.ribbon-top-left::after { bottom: 0; left: 0; }
.ribbon-top-left span {
  right: -25px;
  top: 30px;
  transform: rotate(-45deg);
}

/* Top Right */
.ribbon-top-right {
  top: -10px;
  right: -10px;
}
.ribbon-top-right::before,
.ribbon-top-right::after {
  border-top-color: transparent;
  border-right-color: transparent;
}
.ribbon-top-right::before { top: 0; left: 0; }
.ribbon-top-right::after { bottom: 0; right: 0; }
.ribbon-top-right span {
  left: -25px;
  top: 30px;
  transform: rotate(45deg);
}

/* Bottom Left */
.ribbon-bottom-left {
  bottom: -10px;
  left: -10px;
}
.ribbon-bottom-left::before,
.ribbon-bottom-left::after {
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.ribbon-bottom-left::before { bottom: 0; right: 0; }
.ribbon-bottom-left::after { top: 0; left: 0; }
.ribbon-bottom-left span {
  right: -25px;
  bottom: 30px;
  transform: rotate(225deg);
}

/* Bottom Right */
.ribbon-bottom-right {
  bottom: -10px;
  right: -10px;
}
.ribbon-bottom-right::before,
.ribbon-bottom-right::after {
  border-bottom-color: transparent;
  border-right-color: transparent;
}
.ribbon-bottom-right::before { bottom: 0; left: 0; }
.ribbon-bottom-right::after { top: 0; right: 0; }
.ribbon-bottom-right span {
  left: -25px;
  bottom: 30px;
  transform: rotate(-225deg);
}
```

### Simple Pill-Style Badge

```css
.ribbon-pill {
  width: 60px;
  font-size: 14px;
  padding: 4px;
  position: absolute;
  right: -25px;
  top: -12px;
  text-align: center;
  border-radius: 25px;
  transform: rotate(20deg);
  background-color: #ff9800;
  color: white;
}
```

---

## 4. Stamp/Seal Border Treatments

### Perforated Stamp Edge (Radial Gradient)

```css
.stamp-perforated {
  --r: 20px; /* control the radius/notch size */

  height: 250px;
  aspect-ratio: 1.5;
  padding: var(--r);
  background: #b3b39c;
  mask:
    radial-gradient(50% 50%, #0000 66%, #000 67%) round
      var(--r) var(--r) / calc(2*var(--r)) calc(2*var(--r)),
    conic-gradient(#000 0 0) content-box;
}
```

### Alternative Perforated Edge

```css
.stamp-edge {
  background:
    radial-gradient(
      transparent 0px,
      transparent 4px,
      white 4px,
      white
    );
  background-size: 20px 20px;
  background-position: -10px -10px;
}
```

### Simple Dashed Border Stamp

```css
.stamp-dashed {
  border: 2px dashed #fff;
  width: 400px;
  height: 400px;
  margin: auto;
}

.stamp-dashed img {
  width: calc(100% - 24px);
  height: calc(100% - 24px);
  background: #fff;
  padding: 12px;
}
```

### Circular Seal Badge

```css
.seal-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: #c41e3a;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  border: 3px solid #8b0000;
  box-shadow:
    0 0 0 2px #c41e3a,
    0 4px 8px rgba(0, 0, 0, 0.3);
}
```

### Double-Ring Seal

```css
.seal-double-ring {
  position: relative;
  width: 100px;
  height: 100px;
  background: #1a1a2e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.seal-double-ring::before {
  content: '';
  position: absolute;
  inset: 4px;
  border: 2px solid #e94560;
  border-radius: 50%;
}

.seal-double-ring::after {
  content: '';
  position: absolute;
  inset: 10px;
  border: 1px dashed #e94560;
  border-radius: 50%;
}
```

---

## 5. Starburst Badge Effects

### Basic Starburst (12 Points)

```css
.starburst {
  width: 200px;
  aspect-ratio: 1;
  background: #ff6b35;
  clip-path: polygon(
    100% 50%, 78.98% 57.76%, 93.3% 75%, 71.21% 71.21%,
    75% 93.3%, 57.76% 78.98%, 50% 100%, 42.24% 78.98%,
    25% 93.3%, 28.79% 71.21%, 6.7% 75%, 21.02% 57.76%,
    0% 50%, 21.02% 42.24%, 6.7% 25%, 28.79% 28.79%,
    25% 6.7%, 42.24% 21.02%, 50% 0%, 57.76% 21.02%,
    75% 6.7%, 71.21% 28.79%, 93.3% 25%, 78.98% 42.24%
  );
}
```

### Starburst with Pseudo-Elements (Layered Approach)

```css
.starburst-layered,
.starburst-layered::before,
.starburst-layered::after {
  height: 8.5em;
  width: 8.5em;
  background: #760B1F;
  position: absolute;
}

.starburst-layered {
  position: relative;
  transform: rotate(-45deg);
}

.starburst-layered::before {
  content: "";
  transform: rotate(-30deg);
}

.starburst-layered::after {
  content: "";
  transform: rotate(-15deg);
}
```

### Animated Rotating Starburst

```css
.starburst-animated {
  aspect-ratio: 1;
  animation: spike 0.8s linear infinite;
}

@keyframes spike {
  0% {
    clip-path: polygon(/* start coordinates */);
  }
  100% {
    clip-path: polygon(/* end coordinates with rotation */);
  }
}
```

### 8-Point Star Badge

```css
.star-8point {
  width: 100px;
  aspect-ratio: 1;
  background: #e74c3c;
  clip-path: polygon(
    50% 0%, 61% 35%, 98% 35%, 68% 57%,
    79% 91%, 50% 70%, 21% 91%, 32% 57%,
    2% 35%, 39% 35%
  );
}
```

---

## 6. Wear/Distress Effects

### CSS Mask for Grunge Texture

```css
/* Requires a grunge PNG texture with transparency */
.distressed {
  -webkit-mask-image: url("grunge-texture.png");
  mask-image: url("grunge-texture.png");
  -webkit-mask-size: contain;
  mask-size: contain;
}

/* Simple grit overlay */
.grit {
  -webkit-mask-image: url("grit.png");
  mask-image: url("grit.png");
}
```

### Stamp with Grunge Effect

```css
.stamp-worn {
  font-size: 3em;
  color: #c41e3a;
  display: inline-block;
  padding: 10px 20px;
  border: 8px solid currentColor;
  text-transform: uppercase;
  font-weight: bold;

  /* Rotation for authentic feel */
  transform: rotate(-5deg);

  /* Grunge mask */
  -webkit-mask-image: url("grunge-texture.png");
  mask-image: url("grunge-texture.png");

  /* Blend for ink-on-paper effect */
  mix-blend-mode: multiply;
}
```

### Rubber Stamp Effect (Multi-Color)

```css
.rubber-stamp {
  --stamp-color: #c41e3a;

  display: inline-block;
  padding: 0.5em 1em;
  border: 4px solid var(--stamp-color);
  border-radius: 4px;
  color: var(--stamp-color);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  /* Worn effect */
  opacity: 0.85;
  transform: rotate(12deg);

  /* Texture mask */
  -webkit-mask-image: url("grunge.png");
  mask-image: url("grunge.png");
  -webkit-mask-size: 200px;
  mask-size: 200px;

  /* Ink blend */
  mix-blend-mode: multiply;
}

/* Color variants */
.rubber-stamp.approved { --stamp-color: #27ae60; }
.rubber-stamp.declined { --stamp-color: #c0392b; }
.rubber-stamp.pending { --stamp-color: #f39c12; }
.rubber-stamp.draft { --stamp-color: #7f8c8d; }
```

### Opacity-Based Wear (No Image Required)

```css
.faded-stamp {
  position: relative;
  opacity: 0.7;
}

.faded-stamp::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    transparent 30%,
    rgba(255,255,255,0.1) 50%,
    transparent 70%
  );
  pointer-events: none;
}
```

### Noise/Grain Effect (CSS Only)

```css
.grainy-stamp {
  position: relative;
}

.grainy-stamp::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.15;
  mix-blend-mode: overlay;
  pointer-events: none;
}
```

---

## 7. Combined Examples

### Level Indicator Badge (Nous Hermes Style)

```css
.level-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.25em 0.75em;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 1px solid #e94560;
  border-radius: 2px;
  color: #e94560;
  font-family: monospace;
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transform: rotate(-3deg);
}

.level-badge::before {
  content: '';
  width: 8px;
  height: 8px;
  background: #e94560;
  border-radius: 50%;
}
```

### Approval Stamp (Document Style)

```css
.approval-stamp {
  display: inline-block;
  padding: 0.75em 1.5em;
  border: 4px double #27ae60;
  border-radius: 8px;
  color: #27ae60;
  font-size: 1.5em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  transform: rotate(-12deg);
  opacity: 0.85;

  /* Grunge effect */
  -webkit-mask-image: url("grunge.png");
  mask-image: url("grunge.png");
  mix-blend-mode: multiply;
}
```

### Corner "NEW" Ribbon

```css
.new-ribbon-container {
  position: relative;
  overflow: hidden;
}

.new-ribbon {
  position: absolute;
  top: 20px;
  right: -35px;
  width: 120px;
  padding: 8px 0;
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  transform: rotate(45deg);
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
```

### Barcode-Style Badge (Technical)

```css
.barcode-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em;
  background: white;
  border: 1px solid #333;
  font-family: 'Courier New', monospace;
}

.barcode-badge .bars {
  display: flex;
  gap: 2px;
  height: 30px;
  margin-bottom: 4px;
}

.barcode-badge .bar {
  width: 2px;
  background: #000;
}

.barcode-badge .bar.wide { width: 4px; }
.barcode-badge .bar.space { background: transparent; }

.barcode-badge .code {
  font-size: 10px;
  letter-spacing: 2px;
}
```

### Arrow Motif Badge (Sanrok Style)

```css
.arrow-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.5em 1em 0.5em 1.5em;
  background: #1a1a2e;
  color: white;
  font-size: 0.875em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.arrow-badge::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border: 6px solid transparent;
  border-right-color: #e94560;
  border-left: none;
}

.arrow-badge::after {
  content: '';
  position: absolute;
  right: -12px;
  top: 0;
  bottom: 0;
  border: 1em solid #1a1a2e;
  border-right-color: transparent;
}
```

---

## 8. Sources

### Corner Ribbons
- [CSS-Tricks: Corner Ribbon](https://css-tricks.com/snippets/css/corner-ribbon/)
- [W3Schools: How To Create a Ribbon](https://www.w3schools.com/howto/howto_css_ribbon.asp)
- [CSS Portal: Corner Ribbon Guide](https://www.cssportal.com/blog/create-corner-ribbon/)
- [CSS Portal: Ribbon Generator](https://www.cssportal.com/css-ribbon-generator/)
- [GitHub Gist: Corner Ribbon All Corners](https://gist.github.com/JoeyBurzynski/17a098eda13801644b816ae400852ef7)
- [Kitty Giraudel: Corner Ribbon with Trigonometry](https://kittygiraudel.com/2020/01/22/corner-ribbon-with-trigonometry/)
- [freeCodeCamp: CSS-Only Ribbon](https://www.freecodecamp.org/news/make-a-css-only-ribbon/)
- [FreeFrontend: 30 CSS Ribbons Collection](https://freefrontend.com/css-ribbons/)

### Stamp Effects
- [CSS-Shape: Stamp](https://css-shape.com/stamp/)
- [TheCodePlayer: CSS3 Stamp with Radial Gradients](https://thecodeplayer.com/walkthrough/css3-stamp)
- [GitHub Gist: Stamp Border with CSS](https://gist.github.com/iaeo/4142301)
- [css-tip: Postage Stamp Effect](https://css-tip.com/postage-stamp/)
- [benarson: Ink Stamp Effect](https://benarson.com/ink-stamp-effect-using-css-and-fonts/)

### Grunge/Distress Effects
- [Viget: Easy Textures with CSS Masks](https://www.viget.com/articles/easy-textures-with-css-masks)
- [Coding Dude: CSS Texture on Text](https://www.coding-dude.com/wp/css/applying-an-image-texture-on-text-with-html-and-css/)
- [CSS-Tricks: Grainy Gradients](https://css-tricks.com/grainy-gradients/)
- [Codrops: Techniques for Textured Text](https://tympanus.net/codrops/2013/12/02/techniques-for-creating-textured-text/)

### Starburst/Seal Badges
- [CSS-Tricks: Building a Starburst](https://css-tricks.com/building-a-starburst-with-css/)
- [css-generators: Starburst Shape Generator](https://css-generators.com/starburst-shape/)
- [css-tip: Starburst Images with Rotation](https://css-tip.com/starburst-image/)
- [CodePen: Animated Badges with Starburst](https://codepen.io/jackbrewer/pen/wWxLQd)

### Transform/Positioning
- [MDN: transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transform-origin)
- [MDN: rotate()](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate)
- [CSS-Tricks: transform-origin](https://css-tricks.com/almanac/properties/t/transform-origin/)

### Badge Collections
- [FreeFrontend: 39 CSS Badges](https://freefrontend.com/css-badges/)
- [Subframe: 10 CSS Badge Examples](https://www.subframe.com/tips/css-badge-examples)
- [W3Schools: CSS Badges](https://www.w3schools.com/w3css/w3css_badges.asp)

---

## Quick Reference

### Rotation Cheat Sheet
```css
/* Corner ribbons */
rotate(-45deg)  /* Top-left */
rotate(45deg)   /* Top-right */
rotate(225deg)  /* Bottom-left */
rotate(-225deg) /* Bottom-right */

/* Stamps */
rotate(-5deg) to rotate(-20deg)  /* Subtle to moderate */
rotate(12deg)  /* Classic approval stamp */

/* Level badges */
rotate(-3deg) to rotate(-8deg)  /* Subtle technical feel */
```

### Grunge Mask One-Liner
```css
-webkit-mask-image: url("grunge.png"); mask-image: url("grunge.png"); mix-blend-mode: multiply;
```

### Quick Circular Badge
```css
width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
```

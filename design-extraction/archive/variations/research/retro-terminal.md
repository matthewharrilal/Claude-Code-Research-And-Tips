<!--
═══════════════════════════════════════════════════════════════════════════════
LIGHT SECTION PROVENANCE — Group D1b
File: design-extraction/archive/variations/research/retro-terminal.md
Part Of: archive/variations — Design variation research
Contributed To: Editorial pattern exploration; fed into card-system soul principles
═══════════════════════════════════════════════════════════════════════════════
-->

# Retro Terminal / CRT Effects CSS Research

**Research Date:** 2026-02-02
**Purpose:** Comprehensive CSS techniques for vintage computer terminal aesthetics
**Reference Images:** Nous Research spread (old terminal imagery), Nous Hermes (retro anime/tech aesthetic)

---

## Table of Contents

1. [Phosphor Color Palettes](#1-phosphor-color-palettes)
2. [Scanline Effects](#2-scanline-effects)
3. [Screen Glow & Vignette](#3-screen-glow--vignette)
4. [Flicker Animations](#4-flicker-animations)
5. [Color Separation / Chromatic Aberration](#5-color-separation--chromatic-aberration)
6. [Text Glow Effects](#6-text-glow-effects)
7. [Bezel & Screen Curvature](#7-bezel--screen-curvature)
8. [Complete CRT Container](#8-complete-crt-container)
9. [Terminal Typography](#9-terminal-typography)
10. [Blinking Cursor](#10-blinking-cursor)
11. [Performance Notes](#11-performance-notes)
12. [Sources](#12-sources)

---

## 1. Phosphor Color Palettes

Historical CRT monitors used different phosphor types that produced distinct colors.

### Green Phosphor (P1 - Classic Terminal)

```css
:root {
  /* Green Phosphor Palette */
  --phosphor-green-bright: #33ff33;      /* Bright green text */
  --phosphor-green-medium: #00ff00;      /* Standard green */
  --phosphor-green-dim: #009600;         /* Dimmed/darker green */
  --phosphor-green-glow: rgba(0, 150, 0, 0.75);  /* Background glow */
  --phosphor-green-p1: #3f3;             /* P1 standard shorthand */
}
```

### Amber Phosphor (P3 - Vintage Monitors)

```css
:root {
  /* Amber Phosphor Palette - P3 type (602nm wavelength) */
  --phosphor-amber-bright: #ffcc00;      /* Light amber */
  --phosphor-amber-standard: #ffb000;    /* Standard amber (most common) */
  --phosphor-amber-medium: #ed9e00;      /* Medium shade */
  --phosphor-amber-dim: #d16f00;         /* Darker amber */
  --phosphor-amber-dark: #b55d00;        /* Darkest shade */
  --phosphor-amber-rgb: rgb(255, 176, 0); /* RGB equivalent of #ffb000 */
}
```

### White Phosphor (P4 - Later Monitors)

```css
:root {
  /* White Phosphor Palette */
  --phosphor-white-bright: #ffffff;
  --phosphor-white-standard: #cce;       /* Slight blue tint */
  --phosphor-white-dim: #c8c8c8;
}
```

### Dark Background Colors

```css
:root {
  /* CRT Screen Backgrounds */
  --crt-black: #000000;
  --crt-dark-green: #031e11;             /* Dark green tinted black */
  --crt-scanline-dark: rgba(18, 16, 16, 0);
  --crt-scanline-shadow: rgba(0, 0, 0, 0.25);
}
```

---

## 2. Scanline Effects

### Basic Horizontal Scanlines

```css
.crt-scanlines::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    to bottom,
    rgba(18, 16, 16, 0) 50%,
    rgba(0, 0, 0, 0.25) 50%
  );
  background-size: 100% 2px;  /* 2px creates fine scanlines, 4px for coarser */
  z-index: 2;
  pointer-events: none;
}
```

### Scanlines with RGB Sub-pixels

This adds both horizontal scanlines AND vertical RGB phosphor dot simulation:

```css
.crt-scanlines-rgb::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background:
    linear-gradient(
      rgba(18, 16, 16, 0) 50%,
      rgba(0, 0, 0, 0.25) 50%
    ),
    linear-gradient(
      90deg,
      rgba(255, 0, 0, 0.06),
      rgba(0, 255, 0, 0.02),
      rgba(0, 0, 255, 0.06)
    );
  background-size: 100% 2px, 3px 100%;
  z-index: 2;
  pointer-events: none;
}
```

### Ultra-Fine Scanlines (1px)

```css
.crt-scanlines-fine::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
}
```

### Configurable Scanlines (8px spacing)

```css
.crt-scanlines-wide::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    to bottom,
    rgba(18, 16, 16, 0) 50%,
    rgba(0, 0, 0, 0.25) 50%
  );
  background-size: 100% 8px;  /* Wider spacing for stylized look */
  z-index: 2;
  pointer-events: none;
}
```

---

## 3. Screen Glow & Vignette

### Radial Background Glow (Green Phosphor)

```css
.crt-glow {
  background-color: black;
  background-image: radial-gradient(
    rgba(0, 150, 0, 0.75),
    black 120%
  );
}
```

### Radial Background Glow (Amber Phosphor)

```css
.crt-glow-amber {
  background-color: black;
  background-image: radial-gradient(
    rgba(255, 176, 0, 0.3),
    black 120%
  );
}
```

### Vignette Overlay (Inset Box Shadow)

```css
.crt-vignette::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: inset 0px 0px 150px black;
  pointer-events: none;
}
```

### Vignette Overlay (Radial Gradient)

```css
.crt-vignette-gradient::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: radial-gradient(
    circle,
    transparent 50%,
    black 150%
  );
  pointer-events: none;
}
```

### Inner Phosphor Glow

```css
.crt-inner-glow::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: inset 0 0 5px 5px rgba(255, 255, 255, 0.1);
  background: radial-gradient(
    ellipse at center,
    rgba(51, 255, 51, 0.1) 0%,
    transparent 70%
  );
  pointer-events: none;
}
```

---

## 4. Flicker Animations

### Subtle Screen Flicker

```css
.crt-flicker::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(18, 16, 16, 0.1);
  opacity: 0;
  z-index: 2;
  pointer-events: none;
  animation: flicker 0.15s infinite;
}

@keyframes flicker {
  0% { opacity: 0.27861; }
  5% { opacity: 0.34769; }
  10% { opacity: 0.23604; }
  15% { opacity: 0.90626; }
  20% { opacity: 0.18128; }
  25% { opacity: 0.83891; }
  30% { opacity: 0.65583; }
  35% { opacity: 0.67807; }
  40% { opacity: 0.26559; }
  45% { opacity: 0.84693; }
  50% { opacity: 0.96019; }
  55% { opacity: 0.08594; }
  60% { opacity: 0.20313; }
  65% { opacity: 0.71988; }
  70% { opacity: 0.53455; }
  75% { opacity: 0.37288; }
  80% { opacity: 0.71428; }
  85% { opacity: 0.70419; }
  90% { opacity: 0.7003; }
  95% { opacity: 0.36108; }
  100% { opacity: 0.24387; }
}
```

### Rolling Scanline Effect

Creates a bright line that rolls down the screen periodically:

```css
.scanline-roll {
  width: 100%;
  height: 100px;
  z-index: 8;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 0.2) 10%,
    rgba(0, 0, 0, 0.1) 100%
  );
  opacity: 0.1;
  position: absolute;
  bottom: 100%;
  pointer-events: none;
  animation: scanline-roll 10s linear infinite;
}

@keyframes scanline-roll {
  0% { bottom: 100%; }
  80% { bottom: 100%; }
  100% { bottom: 0%; }
}
```

---

## 5. Color Separation / Chromatic Aberration

### Animated Text Shadow (RGB Shift)

```css
.crt-colorsep {
  animation: textShadow 1.6s infinite;
}

@keyframes textShadow {
  0% {
    text-shadow:
      0.4389924193300864px 0 1px rgba(0, 30, 255, 0.5),
      -0.4389924193300864px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  5% {
    text-shadow:
      2.7928974010788217px 0 1px rgba(0, 30, 255, 0.5),
      -2.7928974010788217px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  10% {
    text-shadow:
      0.02956275843481219px 0 1px rgba(0, 30, 255, 0.5),
      -0.02956275843481219px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  15% {
    text-shadow:
      0.40218538552878136px 0 1px rgba(0, 30, 255, 0.5),
      -0.40218538552878136px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  20% {
    text-shadow:
      3.4794037899852017px 0 1px rgba(0, 30, 255, 0.5),
      -3.4794037899852017px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  25% {
    text-shadow:
      1.6125630401149584px 0 1px rgba(0, 30, 255, 0.5),
      -1.6125630401149584px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  30% {
    text-shadow:
      0.7015590085143956px 0 1px rgba(0, 30, 255, 0.5),
      -0.7015590085143956px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  35% {
    text-shadow:
      3.896914047650351px 0 1px rgba(0, 30, 255, 0.5),
      -3.896914047650351px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  40% {
    text-shadow:
      3.870905614848819px 0 1px rgba(0, 30, 255, 0.5),
      -3.870905614848819px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  45% {
    text-shadow:
      2.231056963361899px 0 1px rgba(0, 30, 255, 0.5),
      -2.231056963361899px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  50% {
    text-shadow:
      0.08084290417898504px 0 1px rgba(0, 30, 255, 0.5),
      -0.08084290417898504px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  55% {
    text-shadow:
      2.3758461067427543px 0 1px rgba(0, 30, 255, 0.5),
      -2.3758461067427543px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  60% {
    text-shadow:
      2.202193051050636px 0 1px rgba(0, 30, 255, 0.5),
      -2.202193051050636px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  65% {
    text-shadow:
      2.8638780614874975px 0 1px rgba(0, 30, 255, 0.5),
      -2.8638780614874975px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  70% {
    text-shadow:
      0.48874025155497314px 0 1px rgba(0, 30, 255, 0.5),
      -0.48874025155497314px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  75% {
    text-shadow:
      1.8948491305757957px 0 1px rgba(0, 30, 255, 0.5),
      -1.8948491305757957px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  80% {
    text-shadow:
      0.0833037308038857px 0 1px rgba(0, 30, 255, 0.5),
      -0.0833037308038857px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  85% {
    text-shadow:
      0.09769827255241735px 0 1px rgba(0, 30, 255, 0.5),
      -0.09769827255241735px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  90% {
    text-shadow:
      3.443339761481782px 0 1px rgba(0, 30, 255, 0.5),
      -3.443339761481782px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  95% {
    text-shadow:
      2.1841838852799786px 0 1px rgba(0, 30, 255, 0.5),
      -2.1841838852799786px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  100% {
    text-shadow:
      2.6208764473832513px 0 1px rgba(0, 30, 255, 0.5),
      -2.6208764473832513px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
}
```

### Static Color Separation (Simplified)

```css
.crt-colorsep-static {
  text-shadow:
    1px 0 1px rgba(0, 30, 255, 0.5),
    -1px 0 1px rgba(255, 0, 80, 0.3),
    0 0 3px;
}
```

---

## 6. Text Glow Effects

### Basic Phosphor Glow (Green)

```css
.terminal-text-green {
  color: #33ff33;
  text-shadow:
    0 0 5px #33ff33,
    0 0 10px #33ff33,
    0 0 20px #33ff33;
}
```

### Basic Phosphor Glow (Amber)

```css
.terminal-text-amber {
  color: #ffb000;
  text-shadow:
    0 0 5px #ffb000,
    0 0 10px #ffb000,
    0 0 20px #ffb000;
}
```

### Soft Blur Glow (Authentic CRT)

```css
.terminal-text-soft {
  color: white;
  text-shadow: 0 0 5px #c8c8c8;
}
```

### Multi-Layer Intense Glow

```css
.terminal-text-intense {
  color: #33ff33;
  text-shadow:
    0 0 2px #33ff33,
    0 0 5px #33ff33,
    0 0 10px #33ff33,
    0 0 20px #00ff00,
    0 0 30px #00ff00,
    0 0 40px #00ff00;
}
```

### Pulsing Glow Animation

```css
.terminal-text-pulse {
  color: #33ff33;
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    text-shadow:
      0 0 5px #33ff33,
      0 0 10px #33ff33;
  }
  50% {
    text-shadow:
      0 0 10px #33ff33,
      0 0 20px #33ff33,
      0 0 30px #33ff33;
  }
}
```

### Preventing Overly Crisp Text

```css
.terminal-text-authentic {
  text-shadow: 0 0 1px rgba(51, 255, 51, 0.8);
}
```

---

## 7. Bezel & Screen Curvature

### CRT Bezel with Depth

```css
.crt-bezel {
  position: relative;
  background: #1a1a1a;
  border-radius: 20px;
  padding: 30px;
  box-shadow:
    inset 0 0 1px 0.66667em #000,
    0 0 20px rgba(0, 0, 0, 0.5);
}

.crt-bezel::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
  pointer-events: none;
}
```

### Screen with Border Image Bezel

```css
.crt-screen {
  position: relative;
  width: 100%;
  height: 67.5vmin;
  border: 30px solid transparent;
  border-image-source: url(./bezel.png);  /* Use custom bezel image */
  border-image-slice: 30 fill;
  border-image-outset: 0;
  overflow: hidden;
}
```

### Curved Screen Effect (Border Radius)

```css
.crt-curved {
  border-radius: 50px / 30px;  /* Horizontal / Vertical radius */
  overflow: hidden;
}
```

### Glass Overlay Effect

```css
.crt-glass::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    transparent 50%
  );
  border-radius: inherit;
  pointer-events: none;
}
```

---

## 8. Complete CRT Container

### Full CRT Effect (All Combined)

```css
/* Base container */
.crt {
  position: relative;
  background-color: #000;
  background-image: radial-gradient(
    rgba(0, 150, 0, 0.75),
    black 120%
  );
  color: #33ff33;
  font-family: 'VT323', 'Courier New', monospace;
  overflow: hidden;
  border-radius: 20px;
}

/* Scanlines */
.crt::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    rgba(18, 16, 16, 0) 50%,
    rgba(0, 0, 0, 0.25) 50%
  );
  background-size: 100% 2px;
  z-index: 2;
  pointer-events: none;
}

/* Flicker effect */
.crt::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(18, 16, 16, 0.1);
  opacity: 0;
  z-index: 2;
  pointer-events: none;
  animation: flicker 0.15s infinite;
}

/* Text styling */
.crt-text {
  text-shadow:
    0 0 5px #c8c8c8,
    0.4px 0 1px rgba(0, 30, 255, 0.5),
    -0.4px 0 1px rgba(255, 0, 80, 0.3);
}
```

### Amber Terminal Variant

```css
.crt-amber {
  position: relative;
  background-color: #000;
  background-image: radial-gradient(
    rgba(255, 176, 0, 0.3),
    black 120%
  );
  color: #ffb000;
  font-family: 'VT323', 'Courier New', monospace;
  overflow: hidden;
}

.crt-amber::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    rgba(18, 16, 16, 0) 50%,
    rgba(0, 0, 0, 0.25) 50%
  );
  background-size: 100% 2px;
  z-index: 2;
  pointer-events: none;
}

.crt-amber-text {
  text-shadow:
    0 0 5px #ffb000,
    0 0 10px #ffb000;
}
```

---

## 9. Terminal Typography

### Google Fonts Import

```css
@import url("https://fonts.googleapis.com/css?family=VT323&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");
```

### Terminal Font Stack

```css
.terminal {
  font-family:
    'VT323',
    'Share Tech Mono',
    'Fira Code',
    'Inconsolata',
    'Monaco',
    'Menlo',
    'Courier New',
    monospace;
  font-size: 1.3rem;
  line-height: 1.4;
  text-transform: uppercase;  /* Optional: classic terminal style */
}
```

### System Font Alternative

```css
.terminal-system {
  font-family:
    ui-monospace,
    'Cascadia Code',
    'Source Code Pro',
    Menlo,
    Consolas,
    'DejaVu Sans Mono',
    monospace;
}
```

---

## 10. Blinking Cursor

### Block Cursor

```css
.terminal-input {
  position: relative;
  caret-color: transparent;  /* Hide default cursor */
}

.terminal-input::after {
  content: "\25A0";  /* Black square: ■ */
  animation: cursor-blink 1s step-end infinite;
  margin-left: 1px;
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
```

### Underscore Cursor

```css
.terminal-input-underscore::after {
  content: "_";
  animation: cursor-blink 0.7s step-end infinite;
}
```

### Command Prompt Prefix

```css
.terminal-input::before {
  content: ">";
  position: absolute;
  padding-left: 1.5rem;
  left: 0;
  color: inherit;
}
```

---

## 11. Performance Notes

### Animation Performance

- **Flicker animations** at 0.15s (6.67fps) are intensive. Consider using `will-change: opacity;` on the animated element.
- **Scanline overlays** use `pointer-events: none;` to prevent interaction blocking.
- For smoother animations, use `transform` and `opacity` properties which are GPU-accelerated.

```css
.crt-optimized::after {
  will-change: opacity;
  transform: translateZ(0);  /* Force GPU layer */
}
```

### Reducing Jank

```css
/* Use contain to isolate repaints */
.crt-container {
  contain: paint layout;
}
```

### Disabling Effects for Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  .crt::after,
  .crt-flicker::after,
  .crt-colorsep {
    animation: none !important;
  }
}
```

### Mobile Considerations

- Scanlines may not render well on high-DPI mobile screens
- Consider using larger `background-size` values (4px instead of 2px) on mobile
- Disable flicker animations on mobile for battery savings

```css
@media (max-width: 768px) {
  .crt::before {
    background-size: 100% 4px;  /* Coarser scanlines */
  }
  .crt::after {
    animation: none;  /* Disable flicker */
  }
}
```

---

## 12. Sources

### Primary References

- [Retro CRT terminal screen in CSS + JS](https://dev.to/ekeijl/retro-crt-terminal-screen-in-css-js-4afh) - DEV Community (comprehensive tutorial)
- [Old Timey Terminal Styling](https://css-tricks.com/old-timey-terminal-styling/) - CSS-Tricks
- [Add CRT scanlines, screen flicker and color separation effects](https://gist.github.com/lmas/6a1bd445bc7a7145245085f4a740d3f5) - GitHub Gist
- [Creating Glow Effects with CSS](https://codersblock.com/blog/creating-glow-effects-with-css/) - Coder's Block
- [Simulating a CRT Monitor in CSS](https://blog.webguy.pw/blog/simulating-a-crt-monitor-in-css/) - Bob's Blog

### Color & Theme References

- [Amber-theme for Windows Terminal](https://github.com/Welding-Torch/Amber-theme) - GitHub
- [amber-terminal for iTerm2](https://github.com/octoturt/amber-terminal) - GitHub
- [Terminal CSS Framework](https://terminalcss.xyz/) - Modern terminal styling
- [Retrocomputing Stack Exchange - Phosphor Colors](https://retrocomputing.stackexchange.com/questions/12835/exactly-what-color-was-the-text-on-monochrome-terminals-with-green-on-black-and)

### Vignette Techniques

- [CSS Image Effects: Vignettes 3 Ways](https://una.im/vignettes) - Una Kravets

### CodePen Examples

- [CSS CRT screen effect](https://codepen.io/lbebber/pen/XJRdrV/) - Lucas Bebber
- [CSS Scanlines](https://codepen.io/meduzen/pen/zxbwRV) - Mehdi
- [Vintage Terminal](https://codepen.io/brainstarr/pen/RwPNwNX) - Brainstarr
- [Vintage Fake Terminal Emulator](https://codepen.io/jcubic/pen/BwBYOZ) - jcubic
- [Pipboy Pure CSS Retro Terminal](https://codepen.io/uniqo/pen/bGJpgwR) - Carter Lovelace

### Frameworks & Libraries

- [98.css](https://jdan.github.io/98.css/) - Windows 98 CSS library
- [system.css](https://sakofchit.github.io/system.css/) - Apple System OS CSS library
- [crt-css](https://github.com/D3nn7/crt-css) - Simple CRT effect library
- [retro-css list](https://github.com/matt-auckland/retro-css) - Curated list of retro CSS frameworks

---

## Quick Copy Reference

### Minimal CRT Setup

```css
/* Copy this for a quick CRT effect */
.crt {
  background: radial-gradient(rgba(0, 150, 0, 0.75), black 120%);
  color: #33ff33;
  font-family: 'VT323', monospace;
  position: relative;
}
.crt::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%);
  background-size: 100% 2px;
  pointer-events: none;
}
```

### Minimal Amber Setup

```css
/* Copy this for amber terminal */
.terminal-amber {
  background: radial-gradient(rgba(255, 176, 0, 0.3), black 120%);
  color: #ffb000;
  font-family: 'VT323', monospace;
  text-shadow: 0 0 5px #ffb000;
}
```

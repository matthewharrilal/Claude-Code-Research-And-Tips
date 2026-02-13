<!--
LIGHT SECTION — Phase 2D
Part Of: card-system/research — Deep research on card patterns
Contributed To: Soul principles foundation; 3A-3D research fed into SOUL-DEFINITION.md
Full Context: perceptual-audit-v2/synthesis/
-->

# 3C: Halftone & Duotone Image Treatment Techniques

## Executive Summary

**PRIMARY RECOMMENDATION: CSS Filter + Blend Mode Duotone (Technique #1)**

For Sanrok's aesthetic, which uses DUOTONE (cream background + red overlay) rather than traditional halftone dots, the CSS blend mode technique offers the best balance of:
- Visual fidelity to the Sanrok reference
- Performance (no JavaScript, no external assets)
- Browser support
- Maintainability

**Fallback Chain:**
1. CSS Filter + Blend Mode (primary)
2. SVG feComponentTransfer (enhanced control)
3. Pre-processed images (guaranteed consistency)

---

## Understanding Sanrok's Image Treatment

### What Sanrok Uses

Looking at Sanrok's reference images:
- **NOT** traditional halftone (dots)
- **IS** duotone: two-color treatment (cream/off-white + red/coral)
- Team photos have clear red tint overlay
- Book/portfolio images appear muted, desaturated with warm tone

### The Duotone Process

1. Convert image to grayscale
2. Map shadows to one color (typically the darker color)
3. Map highlights to another color (typically the lighter color)
4. Result: Image uses only two colors but retains full tonal range

---

## Technique #1: CSS Filter + Blend Mode Duotone

**Quality Score vs Sanrok Reference: 9/10**

This is the most commonly used web technique and closest to Sanrok's implementation.

### How It Works

Uses CSS pseudo-elements with `mix-blend-mode` to overlay two colors that blend through the image based on luminosity values.

### Complete Code Example

```html
<div class="duotone-image">
  <img src="portrait.jpg" alt="Team member">
</div>
```

```css
/* The container handles the duotone effect */
.duotone-image {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

/* The image itself gets desaturated */
.duotone-image img {
  display: block;
  width: 100%;
  height: auto;
  filter: grayscale(100%) contrast(1.1);
}

/* Dark color overlay (maps to shadows) */
.duotone-image::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #C25C4E; /* Sanrok red/coral */
  mix-blend-mode: darken;
  pointer-events: none;
}

/* Light color overlay (maps to highlights) */
.duotone-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #F5F0E8; /* Sanrok cream */
  mix-blend-mode: lighten;
  pointer-events: none;
}
```

### Alternative: Single-Layer Approach

```css
/* Simpler version using filter stack */
.duotone-simple img {
  filter:
    grayscale(100%)
    sepia(100%)
    hue-rotate(-10deg)
    saturate(300%)
    brightness(0.95)
    contrast(1.1);
}
```

### Pros
- Pure CSS - no JavaScript required
- Excellent performance
- Works on any image without preprocessing
- Easy to customize colors
- Animatable for hover effects
- Small file size impact

### Cons
- Requires wrapper element (can't apply to `<img>` directly)
- Colors are approximations (not pixel-perfect)
- Limited control over midtone mapping
- IE11 not supported (Edge 79+ works)

### Browser Support
- Chrome 41+
- Firefox 32+
- Safari 8+
- Edge 79+
- iOS Safari 8+
- **Not supported:** IE11, Opera Mini

---

## Technique #2: SVG Filter with feComponentTransfer

**Quality Score vs Sanrok Reference: 10/10**

Most accurate duotone reproduction - identical to Photoshop's Gradient Map.

### How It Works

SVG filters allow precise color channel manipulation:
1. `feColorMatrix` converts to grayscale
2. `feComponentTransfer` maps each RGB channel to new values

### Complete Code Example

```html
<!-- Define the filter (can be in HTML or external SVG) -->
<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="duotone-sanrok">
      <!-- Step 1: Convert to grayscale using red channel -->
      <feColorMatrix
        type="matrix"
        values="1 0 0 0 0
                1 0 0 0 0
                1 0 0 0 0
                0 0 0 1 0">
      </feColorMatrix>

      <!-- Step 2: Map grayscale to duotone colors -->
      <!-- Shadow color: #C25C4E (194, 92, 78) -->
      <!-- Highlight color: #F5F0E8 (245, 240, 232) -->
      <feComponentTransfer color-interpolation-filters="sRGB">
        <feFuncR type="table" tableValues="0.7608 0.9608"></feFuncR>
        <feFuncG type="table" tableValues="0.3608 0.9412"></feFuncG>
        <feFuncB type="table" tableValues="0.3059 0.9098"></feFuncB>
        <feFuncA type="table" tableValues="0 1"></feFuncA>
      </feComponentTransfer>
    </filter>
  </defs>
</svg>

<!-- Apply to image -->
<img src="portrait.jpg" class="duotone-svg" alt="Team member">
```

```css
.duotone-svg {
  filter: url(#duotone-sanrok);
}

/* External SVG file version */
.duotone-svg-external {
  filter: url('/assets/filters.svg#duotone-sanrok');
}
```

### Color Conversion Formula

To convert RGB (0-255) to tableValues (0-1):
```
tableValue = RGBvalue / 255

Example for #C25C4E:
R: 194 / 255 = 0.7608
G: 92 / 255 = 0.3608
B: 78 / 255 = 0.3059
```

### Enhanced Version with Contrast

```xml
<filter id="duotone-sanrok-enhanced">
  <feColorMatrix type="matrix"
    values="0.33 0.33 0.33 0 0
            0.33 0.33 0.33 0 0
            0.33 0.33 0.33 0 0
            0 0 0 1 0">
  </feColorMatrix>

  <!-- Add contrast boost before color mapping -->
  <feComponentTransfer>
    <feFuncR type="gamma" exponent="0.9" amplitude="1.2" offset="0"></feFuncR>
    <feFuncG type="gamma" exponent="0.9" amplitude="1.2" offset="0"></feFuncG>
    <feFuncB type="gamma" exponent="0.9" amplitude="1.2" offset="0"></feFuncB>
  </feComponentTransfer>

  <feComponentTransfer color-interpolation-filters="sRGB">
    <feFuncR type="table" tableValues="0.7608 0.9608"></feFuncR>
    <feFuncG type="table" tableValues="0.3608 0.9412"></feFuncG>
    <feFuncB type="table" tableValues="0.3059 0.9098"></feFuncB>
  </feComponentTransfer>
</filter>
```

### Pros
- Pixel-perfect color control
- Identical to Photoshop output
- Can apply directly to `<img>` elements
- Reusable filter definitions
- Supports advanced effects (gamma, multi-stop gradients)

### Cons
- More complex syntax
- Requires understanding color math
- External SVG files can have CORS issues
- Slight learning curve

### Browser Support
- Chrome 8+
- Firefox 3.5+
- Safari 6+
- Edge 12+
- IE 10+ (partial)

---

## Technique #3: CSS Pattern Overlay (Halftone Dots)

**Quality Score vs Sanrok Reference: 4/10**

Creates actual halftone dot patterns - NOT what Sanrok uses, but documented for completeness.

### How It Works

Uses `radial-gradient` to create dot patterns, combined with high contrast filter to create size variation based on underlying image brightness.

### Complete Code Example

```css
/* Pure CSS halftone - 3 declarations */
.halftone-pattern {
  background:
    /* Dot pattern layer */
    radial-gradient(closest-side, #C25C4E, transparent) 0/ 8px 8px space,
    /* Image layer (use as background-image) */
    url('portrait.jpg') center/cover;
  background-blend-mode: multiply;
  filter: contrast(10);
}

/* More controlled version */
.halftone-controlled {
  position: relative;
}

.halftone-controlled::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle at center,
    #C25C4E 2px,
    transparent 2px
  );
  background-size: 6px 6px;
  mix-blend-mode: multiply;
  pointer-events: none;
}
```

### Staggered Dot Pattern

```css
.halftone-staggered::before {
  background-image:
    radial-gradient(circle at center, #C25C4E 2px, transparent 2px),
    radial-gradient(circle at center, #C25C4E 2px, transparent 2px);
  background-size: 8px 8px;
  background-position: 0 0, 4px 4px;
}
```

### Pros
- Pure CSS
- Interesting retro aesthetic
- Can be animated
- No image preprocessing

### Cons
- NOT duotone - creates actual dots
- Doesn't match Sanrok aesthetic
- Can look pixelated at certain sizes
- Performance cost with high contrast filter

### Browser Support
- Same as CSS blend modes above

---

## Technique #4: Canvas/JavaScript Processing

**Quality Score vs Sanrok Reference: 8/10**

Offers precise pixel-level control and real-time processing.

### How It Works

1. Load image into canvas
2. Get pixel data (ImageData)
3. For each pixel, calculate luminosity
4. Map luminosity to duotone color
5. Write modified pixels back

### Complete Code Example

```html
<canvas id="duotone-canvas"></canvas>
<img id="source-image" src="portrait.jpg" style="display: none;">
```

```javascript
class DuotoneProcessor {
  constructor(shadowColor, highlightColor) {
    // Parse hex colors to RGB
    this.shadow = this.hexToRgb(shadowColor);
    this.highlight = this.hexToRgb(highlightColor);
  }

  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  process(sourceImage, canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = sourceImage.naturalWidth;
    canvas.height = sourceImage.naturalHeight;

    // Draw original image
    ctx.drawImage(sourceImage, 0, 0);

    // Get pixel data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Process each pixel
    for (let i = 0; i < data.length; i += 4) {
      // Calculate luminosity (grayscale value)
      const luminosity = (
        data[i] * 0.299 +
        data[i + 1] * 0.587 +
        data[i + 2] * 0.114
      ) / 255;

      // Interpolate between shadow and highlight colors
      data[i] = this.lerp(this.shadow.r, this.highlight.r, luminosity);
      data[i + 1] = this.lerp(this.shadow.g, this.highlight.g, luminosity);
      data[i + 2] = this.lerp(this.shadow.b, this.highlight.b, luminosity);
      // Alpha channel unchanged
    }

    // Write modified pixels
    ctx.putImageData(imageData, 0, 0);
  }

  lerp(start, end, t) {
    return Math.round(start + (end - start) * t);
  }
}

// Usage
const processor = new DuotoneProcessor('#C25C4E', '#F5F0E8');
const img = document.getElementById('source-image');
const canvas = document.getElementById('duotone-canvas');

img.onload = () => processor.process(img, canvas);
```

### React Component Version

```jsx
import { useEffect, useRef } from 'react';

function DuotoneImage({ src, shadowColor, highlightColor, className }) {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const canvas = canvasRef.current;

    const processImage = () => {
      const ctx = canvas.getContext('2d');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      const shadow = hexToRgb(shadowColor);
      const highlight = hexToRgb(highlightColor);

      for (let i = 0; i < data.length; i += 4) {
        const lum = (data[i] * 0.299 + data[i+1] * 0.587 + data[i+2] * 0.114) / 255;
        data[i] = lerp(shadow.r, highlight.r, lum);
        data[i + 1] = lerp(shadow.g, highlight.g, lum);
        data[i + 2] = lerp(shadow.b, highlight.b, lum);
      }

      ctx.putImageData(imageData, 0, 0);
    };

    if (img.complete) processImage();
    else img.onload = processImage;
  }, [src, shadowColor, highlightColor]);

  return (
    <div className={className}>
      <img ref={imgRef} src={src} style={{ display: 'none' }} crossOrigin="anonymous" />
      <canvas ref={canvasRef} />
    </div>
  );
}
```

### Pros
- Complete pixel control
- Can add custom effects (gamma, curves)
- Works on any image format
- Can generate exportable images

### Cons
- JavaScript required
- CORS restrictions on external images
- Larger bundle size
- Slower initial render
- Not SEO-friendly (canvas content not indexed)

### Browser Support
- All modern browsers
- Canvas 2D: IE9+ (with polyfills)

---

## Technique #5: Pre-processed Images

**Quality Score vs Sanrok Reference: 10/10**

Images are processed server-side or during build, delivering the exact desired result.

### ImageMagick Command

```bash
# Basic duotone conversion
convert input.jpg \
  -colorspace gray \
  -level +10% \
  +level-colors "#C25C4E","#F5F0E8" \
  output.jpg

# With contrast enhancement
convert input.jpg \
  -colorspace gray \
  -contrast-stretch 2%x2% \
  -level +10% \
  +level-colors "#C25C4E","#F5F0E8" \
  -quality 85 \
  output.jpg

# Batch process directory
for img in *.jpg; do
  convert "$img" \
    -colorspace gray \
    -level +10% \
    +level-colors "#C25C4E","#F5F0E8" \
    "duotone_$img"
done
```

### Sharp (Node.js) Implementation

```javascript
const sharp = require('sharp');

async function createDuotone(inputPath, outputPath, shadowHex, highlightHex) {
  const shadow = hexToRgb(shadowHex);
  const highlight = hexToRgb(highlightHex);

  // Create gradient lookup table (256 entries)
  const lut = Buffer.alloc(256 * 3);
  for (let i = 0; i < 256; i++) {
    const t = i / 255;
    lut[i * 3] = lerp(shadow.r, highlight.r, t);
    lut[i * 3 + 1] = lerp(shadow.g, highlight.g, t);
    lut[i * 3 + 2] = lerp(shadow.b, highlight.b, t);
  }

  await sharp(inputPath)
    .grayscale()
    .raw()
    .toBuffer({ resolveWithObject: true })
    .then(({ data, info }) => {
      const output = Buffer.alloc(info.width * info.height * 3);
      for (let i = 0; i < data.length; i++) {
        const gray = data[i];
        output[i * 3] = lut[gray * 3];
        output[i * 3 + 1] = lut[gray * 3 + 1];
        output[i * 3 + 2] = lut[gray * 3 + 2];
      }
      return sharp(output, {
        raw: { width: info.width, height: info.height, channels: 3 }
      })
        .jpeg({ quality: 85 })
        .toFile(outputPath);
    });
}

// Usage
createDuotone('input.jpg', 'output.jpg', '#C25C4E', '#F5F0E8');
```

### Next.js Image Optimization Integration

```javascript
// next.config.js
module.exports = {
  images: {
    loader: 'custom',
    loaderFile: './lib/duotone-loader.js',
  },
};

// lib/duotone-loader.js
export default function duotoneLoader({ src, width, quality }) {
  // Point to your image processing API
  return `https://your-api.com/duotone?src=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}
```

### Pros
- Perfect quality every time
- No client-side processing
- Works in all browsers
- Best SEO (real images)
- Can be heavily optimized (WebP, AVIF)

### Cons
- Requires build/server pipeline
- Multiple image versions for responsive
- More complex deployment
- Changes require reprocessing

### Browser Support
- Universal (it's just images)

---

## Comparison Matrix

| Technique | Quality | Performance | Complexity | Browser Support | Sanrok Match |
|-----------|---------|-------------|------------|-----------------|--------------|
| CSS Blend Modes | 9/10 | Excellent | Low | Good | 9/10 |
| SVG feComponentTransfer | 10/10 | Excellent | Medium | Good | 10/10 |
| CSS Pattern Overlay | 4/10 | Good | Low | Good | 4/10 |
| Canvas JavaScript | 8/10 | Medium | High | Excellent | 8/10 |
| Pre-processed | 10/10 | Excellent | Medium | Universal | 10/10 |

---

## Final Recommendation

### Primary: CSS Filter + Blend Mode

Use for most cases. Implement in `halftone.css` below.

### Fallback #1: SVG feComponentTransfer

For cases requiring pixel-perfect accuracy or direct img element application.

### Fallback #2: Pre-processed Images

For hero images, critical brand photos, or when CSS support is uncertain.

---

## Implementation: halftone.css

```css
/**
 * Sanrok Duotone Image Treatment
 *
 * Usage:
 * <div class="duotone">
 *   <img src="photo.jpg" alt="Description">
 * </div>
 *
 * Variants:
 * - .duotone (default: red/cream)
 * - .duotone--dark (darker shadow)
 * - .duotone--subtle (reduced effect)
 * - .duotone--hover (effect on hover only)
 */

/* ==========================================================================
   CSS Custom Properties
   ========================================================================== */

:root {
  /* Sanrok brand colors for duotone */
  --duotone-shadow: #C25C4E;
  --duotone-highlight: #F5F0E8;

  /* Alternative color pairs */
  --duotone-shadow-dark: #8B3D32;
  --duotone-highlight-dark: #E8E0D0;

  /* Timing */
  --duotone-transition: 0.4s ease;
}

/* ==========================================================================
   Base Duotone Container
   ========================================================================== */

.duotone {
  position: relative;
  display: inline-block;
  overflow: hidden;
  line-height: 0; /* Remove inline spacing */
}

/* The image gets desaturated and slightly enhanced */
.duotone img {
  display: block;
  width: 100%;
  height: auto;
  filter: grayscale(100%) contrast(1.1) brightness(1.05);
  transition: filter var(--duotone-transition);
}

/* Dark color layer - maps to shadows */
.duotone::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: var(--duotone-shadow);
  mix-blend-mode: darken;
  pointer-events: none;
  z-index: 1;
}

/* Light color layer - maps to highlights */
.duotone::after {
  content: "";
  position: absolute;
  inset: 0;
  background-color: var(--duotone-highlight);
  mix-blend-mode: lighten;
  pointer-events: none;
  z-index: 2;
}

/* ==========================================================================
   Duotone Variants
   ========================================================================== */

/* Darker, more dramatic duotone */
.duotone--dark {
  --duotone-shadow: var(--duotone-shadow-dark);
  --duotone-highlight: var(--duotone-highlight-dark);
}

.duotone--dark img {
  filter: grayscale(100%) contrast(1.2) brightness(0.95);
}

/* Subtle duotone - less saturation */
.duotone--subtle::before,
.duotone--subtle::after {
  opacity: 0.7;
}

.duotone--subtle img {
  filter: grayscale(80%) contrast(1.05);
}

/* Duotone on hover only */
.duotone--hover img {
  filter: none;
  transition: filter var(--duotone-transition);
}

.duotone--hover::before,
.duotone--hover::after {
  opacity: 0;
  transition: opacity var(--duotone-transition);
}

.duotone--hover:hover img {
  filter: grayscale(100%) contrast(1.1) brightness(1.05);
}

.duotone--hover:hover::before,
.duotone--hover:hover::after {
  opacity: 1;
}

/* Reverse hover - starts duotone, reveals color */
.duotone--reveal:hover img {
  filter: none;
}

.duotone--reveal:hover::before,
.duotone--reveal:hover::after {
  opacity: 0;
}

/* ==========================================================================
   Aspect Ratio Containers
   ========================================================================== */

.duotone--square {
  aspect-ratio: 1;
}

.duotone--portrait {
  aspect-ratio: 3/4;
}

.duotone--landscape {
  aspect-ratio: 4/3;
}

.duotone--square img,
.duotone--portrait img,
.duotone--landscape img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ==========================================================================
   SVG Filter Alternative (inline in HTML)
   ========================================================================== */

/*
Add this SVG to your HTML (hidden):

<svg style="display: none;">
  <defs>
    <filter id="duotone-filter">
      <feColorMatrix type="matrix"
        values="1 0 0 0 0
                1 0 0 0 0
                1 0 0 0 0
                0 0 0 1 0">
      </feColorMatrix>
      <feComponentTransfer color-interpolation-filters="sRGB">
        <feFuncR type="table" tableValues="0.7608 0.9608"></feFuncR>
        <feFuncG type="table" tableValues="0.3608 0.9412"></feFuncG>
        <feFuncB type="table" tableValues="0.3059 0.9098"></feFuncB>
      </feComponentTransfer>
    </filter>
  </defs>
</svg>

Then use: filter: url(#duotone-filter);
*/

.duotone--svg {
  position: relative;
  display: inline-block;
}

.duotone--svg img {
  filter: url(#duotone-filter);
}

/* ==========================================================================
   Fallback for unsupported browsers
   ========================================================================== */

@supports not (mix-blend-mode: darken) {
  /* Fallback: simple sepia/hue-rotate approximation */
  .duotone img {
    filter:
      grayscale(100%)
      sepia(100%)
      hue-rotate(-10deg)
      saturate(200%)
      brightness(0.9);
  }

  .duotone::before,
  .duotone::after {
    display: none;
  }
}

/* ==========================================================================
   Print Styles
   ========================================================================== */

@media print {
  .duotone img {
    filter: grayscale(100%);
  }

  .duotone::before,
  .duotone::after {
    display: none;
  }
}

/* ==========================================================================
   Reduced Motion
   ========================================================================== */

@media (prefers-reduced-motion: reduce) {
  .duotone img,
  .duotone::before,
  .duotone::after {
    transition: none;
  }
}
```

---

## React Component Implementation

```tsx
// components/DuotoneImage.tsx
import React from 'react';
import styles from './DuotoneImage.module.css';

interface DuotoneImageProps {
  src: string;
  alt: string;
  variant?: 'default' | 'dark' | 'subtle' | 'hover' | 'reveal';
  aspectRatio?: 'auto' | 'square' | 'portrait' | 'landscape';
  className?: string;
}

export function DuotoneImage({
  src,
  alt,
  variant = 'default',
  aspectRatio = 'auto',
  className = '',
}: DuotoneImageProps) {
  const containerClasses = [
    styles.duotone,
    variant !== 'default' && styles[`duotone--${variant}`],
    aspectRatio !== 'auto' && styles[`duotone--${aspectRatio}`],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}
```

---

## Sources

- [CSS Duotone Generator](https://cssduotone.com/)
- [How to Apply a Duotone Effect to Images with CSS - DEV Community](https://dev.to/itsjp/how-to-apply-a-duotone-effect-to-images-with-css-5gj2)
- [Duotone using CSS blend modes - Jose M. Perez](https://jmperezperez.com/blog/duotone-using-css-blend-modes/)
- [Using SVG to Create a Duotone Image Effect - CSS-Tricks](https://css-tricks.com/using-svg-to-create-a-duotone-image-effect/)
- [SVG Filter Effects: Duotone Images with feComponentTransfer - Codrops](https://tympanus.net/codrops/2019/02/05/svg-filter-effects-duotone-images-with-fecomponenttransfer/)
- [Pure CSS Halftone Effect in 3 Declarations - Frontend Masters](https://frontendmasters.com/blog/pure-css-halftone-effect-in-3-declarations/)
- [Creating Halftone Dot Art with JavaScript - Medium](https://medium.com/@banyapon/creating-halftone-dot-art-with-javascript-a-step-by-step-guide-to-grayscale-and-accent-highlights-1e57e946e05e)
- [Generate duotone image using ImageMagick - GitHub Gist](https://gist.github.com/fmnxl/da848cc575ae7306407d9dfe912426f9)
- [halftone-js - GitHub](https://github.com/M-A-19/halftone-js)
- [CSS Halftone Patterns - CSS In Real Life](https://css-irl.info/css-halftone-patterns/)

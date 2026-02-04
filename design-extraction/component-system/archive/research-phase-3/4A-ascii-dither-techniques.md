# 4A: ASCII Dithered Art Techniques Research

**Sub-Agent 4A Research Document**
**Purpose:** Comprehensive guide to ASCII/text-based dithered art for editorial halftone aesthetic
**Date:** 2026-02-03
**Status:** COMPLETE

---

## Table of Contents

1. [Why ASCII Dithered Art (Not CSS Halftone)](#1-why-ascii-dithered-art-not-css-halftone)
2. [Soul Impact Properties Table](#2-soul-impact-properties-table)
3. [Character Set Analysis](#3-character-set-analysis)
4. [Dithering Algorithm Fundamentals](#4-dithering-algorithm-fundamentals)
5. [Technique 1: Pre-generated ASCII Art (RECOMMENDED)](#5-technique-1-pre-generated-ascii-art-recommended)
6. [Technique 2: JavaScript Runtime Conversion](#6-technique-2-javascript-runtime-conversion)
7. [Technique 3: Unicode Block Characters](#7-technique-3-unicode-block-characters)
8. [Complete CSS Specification](#8-complete-css-specification)
9. [Complete HTML Structure](#9-complete-html-structure)
10. [Test Cases and Verification](#10-test-cases-and-verification)
11. [NPM Libraries Reference](#11-npm-libraries-reference)
12. [Brutalist Design Context](#12-brutalist-design-context)
13. [Performance Considerations](#13-performance-considerations)
14. [Sources and References](#14-sources-and-references)

---

## 1. Why ASCII Dithered Art (Not CSS Halftone)

### The Problem with CSS Halftone

CSS blend mode halftone techniques **FAILED in Phase 3** of our design implementation. The issues:

1. **No visible effect** - CSS `mix-blend-mode` with radial gradients produced no perceptible halftone pattern
2. **Browser inconsistency** - Different rendering across Chrome, Safari, Firefox
3. **Performance overhead** - Multiple gradient layers impact rendering performance
4. **No actual texture** - CSS "halftone" is a visual trick, not real texture

### Why ASCII Art Works

ASCII art provides **ACTUAL visual texture** that:

1. **Guaranteed rendering** - Monospace text renders identically across all browsers
2. **True brutalist aesthetic** - Raw, unpolished, editorial feel
3. **Zero browser compatibility issues** - It's just text
4. **Scalable complexity** - From simple 10-character ramps to 70-level gradients
5. **Copy-paste ready** - Users can literally copy the art
6. **Lightweight** - Text is smaller than images
7. **Matches Sanrok aesthetic** - The editorial, print-inspired feel

### Historical Context

ASCII art has roots in typewriter art and early computer graphics. The technique uses character density (how "filled in" a character appears) to represent brightness levels. This creates a halftone-like effect where:

- Dense characters (@ # %) represent dark areas
- Sparse characters (. - ') represent light areas
- The eye perceives these as continuous gradients

Source: [How do ASCII Art Image Conversion Algorithms Work? | Saturn Cloud](https://saturncloud.io/blog/how-do-ascii-art-image-conversion-algorithms-work/)

---

## 2. Soul Impact Properties Table

| Property | Value | Soul Impact (WHY this matters) |
|----------|-------|--------------------------------|
| `font-family` | `'JetBrains Mono', 'Fira Code', 'SF Mono', monospace` | Fixed-width grid ensures consistent character spacing; each character occupies identical horizontal space creating perfect texture alignment |
| `font-size` | `4-10px` (recommend `6px`) | Smaller = more detail, halftone illusion. At 6px, individual characters blur into continuous tone. At 4px, nearly photographic. At 10px, clearly visible characters (artistic choice) |
| `line-height` | `0.85-1.0` (recommend `0.85`) | Tight line-height creates continuous vertical texture. Default 1.5+ creates visible horizontal bands that break the illusion |
| `letter-spacing` | `-0.5px to 0` | Fills horizontal gaps between characters. Negative spacing creates smoother gradients, eliminates "column" appearance |
| `color` | `#E63946` (red) or `#1A1A1A` (black) | Matches Sanrok brand palette. Red creates editorial/magazine impact. Black maintains brutalist purity |
| `white-space` | `pre` | Preserves exact character spacing and line breaks. CRITICAL - without this, ASCII art collapses |
| `overflow` | `hidden` | Prevents horizontal scrollbars, crops art cleanly to container |
| `user-select` | `none` or `all` | `none` for decorative, `all` for interactive/copyable |
| `background` | `transparent` | ASCII art floats on any background, pure content |
| `border` | `none` | Brutalist aesthetic - no decoration, pure form |

### Typography Soul Impact Deep Dive

**Why monospace is non-negotiable:**
```
Proportional font:  PROPORTIONAL BREAKS ASCII ART
Monospace font:     MONOSPACE KEEPS IT ALIGNED
```

In proportional fonts, 'i' is narrower than 'm'. This destroys the grid alignment that makes ASCII art work. Every character must occupy exactly one grid cell.

**Why font-size matters exponentially:**
- `12px+`: Individual characters clearly visible, artistic/intentional look
- `8-10px`: Characters discernible but blurring, editorial feel
- `6px`: Sweet spot - texture visible, characters merge into halftone
- `4px`: Near-photographic, minimal character visibility
- `<4px`: Readability concerns, browser minimum font-size limits

**Line-height formula:**
```
Optimal line-height = font-size * 0.85
```
This creates slight vertical overlap, filling gaps between rows.

---

## 3. Character Set Analysis

### The Fundamental Challenge

ASCII characters have no intrinsic "grayness" - their perceived brightness depends on:
- Font rendering (anti-aliasing, hinting)
- Font weight and style
- Background color
- Display DPI
- Character spacing

Source: [Converting images to ASCII art (Part 2) | Bites of code](https://bitesofcode.wordpress.com/2017/05/27/converting-images-to-ascii-art-part-2/)

### Character Set Comparison

#### 10-Level Standard (RECOMMENDED for Sanrok)

```
' .:-=+*#%@'
```

| Index | Character | Approx. Brightness | Use Case |
|-------|-----------|-------------------|----------|
| 0 | ` ` (space) | 100% (white) | Empty areas, highlights |
| 1 | `.` | ~90% | Very light areas |
| 2 | `:` | ~80% | Light areas |
| 3 | `-` | ~70% | Light-mid transition |
| 4 | `=` | ~60% | Mid-light |
| 5 | `+` | ~50% | True midtone |
| 6 | `*` | ~40% | Mid-dark |
| 7 | `#` | ~30% | Dark areas |
| 8 | `%` | ~20% | Very dark |
| 9 | `@` | ~10% | Near-black, shadows |

**Why 10 levels for Sanrok:**
- Editorial print uses limited tonal ranges
- High contrast = stronger visual impact
- Faster processing, smaller file sizes
- Matches brutalist "raw" aesthetic

#### 16-Level Extended

```
' .\'`^",:;Il!i><~+_-?][}{1)(|\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$'
```

More gradual transitions but:
- Larger character set harder to tune
- Some characters render inconsistently
- Marginal visual improvement for complexity cost

#### 70-Level Full Gradient

```
$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,"^`'.
```

Source: [ASCII dithering | DitherPunk.jl](https://juliaimages.org/DitherPunk.jl/v3.1/generated/ascii/)

**Analysis:**
- Maximum tonal fidelity
- Slower processing
- Potential rendering inconsistencies
- Best for photorealistic ASCII art
- Overkill for editorial/brutalist use

#### Unicode Block Characters

```
' ░▒▓█'
```

| Character | Unicode | Brightness |
|-----------|---------|------------|
| ` ` | U+0020 | 100% |
| `░` | U+2591 | 75% (Light Shade) |
| `▒` | U+2592 | 50% (Medium Shade) |
| `▓` | U+2593 | 25% (Dark Shade) |
| `█` | U+2588 | 0% (Full Block) |

**Why NOT recommended:**
- Inconsistent rendering across fonts
- Some monospace fonts don't include blocks
- Width can vary (not truly monospace in all fonts)
- Loses the "ASCII art" handmade character
- Too smooth - lacks editorial grit

Source: [How to Display Special Unicode Characters with Fixed Width in HTML | w3tutorials.net](https://www.w3tutorials.net/blog/how-to-display-special-unicode-characters-using-monospace-font-in-html-with-preserved-character-width/)

### Character Density Formula

To calculate character brightness empirically:

```javascript
function measureCharacterDensity(char, fontSize = 12) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = fontSize;
  canvas.height = fontSize * 1.2;

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'black';
  ctx.font = `${fontSize}px monospace`;
  ctx.textBaseline = 'top';
  ctx.fillText(char, 0, 0);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;

  let darkPixels = 0;
  for (let i = 0; i < pixels.length; i += 4) {
    const brightness = (pixels[i] + pixels[i+1] + pixels[i+2]) / 3;
    if (brightness < 128) darkPixels++;
  }

  return darkPixels / (pixels.length / 4);
}
```

---

## 4. Dithering Algorithm Fundamentals

### What is Dithering?

Dithering simulates color depth with limited palettes by strategically placing pixels to create the illusion of intermediate tones.

In ASCII art context:
- Our "pixels" are characters
- Our "palette" is the character set (10 levels, 16 levels, etc.)
- Error diffusion spreads quantization error to neighboring cells

### Floyd-Steinberg Dithering (1976)

**The gold standard** - still one of the best algorithms after 50 years.

Source: [Floyd-Steinberg dithering in JavaScript | Ivan Kuckir](https://blog.ivank.net/floyd-steinberg-dithering-in-javascript.html)

**Error diffusion matrix:**
```
        X   7/16
3/16  5/16  1/16
```

Where X is the current pixel, and the fractions represent how much of the quantization error gets distributed to neighboring pixels.

**JavaScript Implementation:**

```javascript
function floydSteinbergDither(imageData, width, height, levels = 10) {
  const data = new Float32Array(imageData);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const oldPixel = data[idx];

      // Quantize to available levels
      const newPixel = Math.round(oldPixel / 255 * (levels - 1)) * (255 / (levels - 1));
      data[idx] = newPixel;

      const error = oldPixel - newPixel;

      // Distribute error to neighbors
      if (x + 1 < width) {
        data[idx + 1] += error * 7/16;
      }
      if (y + 1 < height) {
        if (x > 0) {
          data[(y + 1) * width + (x - 1)] += error * 3/16;
        }
        data[(y + 1) * width + x] += error * 5/16;
        if (x + 1 < width) {
          data[(y + 1) * width + (x + 1)] += error * 1/16;
        }
      }
    }
  }

  return data;
}
```

Source: [GitHub - MortimerWittgenstein/FloydSteinbergAlgorithm](https://github.com/MortimerWittgenstein/FloydSteinbergAlgorithm)

### Atkinson Dithering

Developed by Bill Atkinson for the original Macintosh. Only diffuses 3/4 of the error.

Source: [Atkinson Dithering | gazs.github.io](https://gazs.github.io/canvas-atkinson-dither/)

**Error diffusion matrix:**
```
      X  1/8  1/8
1/8  1/8  1/8
     1/8
```

**Key difference:** 1/4 of the error is discarded, creating higher contrast.

**When to use Atkinson:**
- Higher contrast desired (good for editorial)
- Near-black and near-white areas need definition
- Vintage Macintosh aesthetic

Source: [Improved Web Component for Pixel-Accurate Atkinson Dithered Images | sheep.horse](https://sheep.horse/2023/1/improved_web_component_for_pixel-accurate_atkinson.html)

### Jarvis-Judice-Ninke Dithering

Spreads error to 12 neighbors across 3 rows for smoother gradients.

**Matrix:**
```
          X  7/48  5/48
3/48  5/48  7/48  5/48  3/48
1/48  3/48  5/48  3/48  1/48
```

**Trade-off:** Smoother gradients but slower processing.

### Algorithm Comparison for ASCII Art

| Algorithm | Contrast | Speed | Best For |
|-----------|----------|-------|----------|
| Floyd-Steinberg | Medium | Fast | General purpose, balanced |
| Atkinson | High | Fast | Editorial, high-contrast images |
| Jarvis-Judice-Ninke | Low | Slow | Smooth gradients, portraits |
| Stucki | Medium-Low | Medium | Large images, smooth tones |
| No dithering | Highest | Fastest | Intentionally posterized look |

**Recommendation for Sanrok:** Atkinson dithering for its high-contrast, editorial feel.

---

## 5. Technique 1: Pre-generated ASCII Art (RECOMMENDED)

### Why Pre-generation?

1. **Zero runtime overhead** - No JavaScript processing during page load
2. **Consistent results** - Same output across all browsers
3. **Server-side control** - Quality tuning happens in build pipeline
4. **Smaller payload** - ASCII text compresses extremely well (gzip)
5. **Progressive enhancement** - Works without JavaScript

### Complete Node.js Implementation with Jimp

```javascript
/**
 * ASCII Art Generator for Sanrok Design System
 * Uses Jimp for image processing, outputs pre-generated ASCII art files
 *
 * Usage: node generate-ascii.js input.jpg output.txt --width 80 --algorithm atkinson
 */

const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

// ============================================================
// CONFIGURATION
// ============================================================

const CONFIG = {
  // Character sets by complexity level
  charSets: {
    standard: ' .:-=+*#%@',                    // 10 levels (RECOMMENDED)
    extended: ' .\'`^",:;Il!i><~+_-?][}{1)(|\\/', // 16 levels
    full: '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,"^`\'. ',
    blocks: ' ░▒▓█',                           // Unicode blocks
    minimal: ' .:#',                           // 4 levels (high contrast)
    dots: ' .:oO@',                            // 6 levels (dot pattern)
  },

  // Default processing options
  defaults: {
    width: 80,                    // Characters per line
    charSet: 'standard',          // Which character set to use
    aspectRatioCorrection: 0.5,   // Characters are ~2x taller than wide
    dithering: 'atkinson',        // Dithering algorithm
    invert: false,                // Invert brightness (white on black)
    contrast: 1.0,                // Contrast multiplier (1.0 = normal)
    brightness: 0,                // Brightness adjustment (-100 to 100)
  },

  // Batch processing sizes
  sizes: [60, 80, 100, 120, 150],

  // Output directory
  outputDir: '../assets/ascii-art',

  // Supported input formats
  supportedFormats: ['.jpg', '.jpeg', '.png', '.bmp', '.gif', '.tiff'],
};

// ============================================================
// DITHERING ALGORITHMS
// ============================================================

/**
 * Floyd-Steinberg dithering implementation
 * Classic algorithm from 1976, balanced error diffusion
 */
function floydSteinbergDither(buffer, width, height, levels) {
  const data = Float32Array.from(buffer);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const oldVal = data[idx];

      // Quantize to nearest level
      const step = 255 / (levels - 1);
      const newVal = Math.round(oldVal / step) * step;
      data[idx] = Math.max(0, Math.min(255, newVal));

      const error = oldVal - newVal;

      // Diffuse error: 7/16 right, 3/16 bottom-left, 5/16 bottom, 1/16 bottom-right
      if (x + 1 < width) {
        data[idx + 1] += error * 7/16;
      }
      if (y + 1 < height) {
        if (x > 0) data[(y + 1) * width + (x - 1)] += error * 3/16;
        data[(y + 1) * width + x] += error * 5/16;
        if (x + 1 < width) data[(y + 1) * width + (x + 1)] += error * 1/16;
      }
    }
  }

  return Uint8Array.from(data.map(v => Math.max(0, Math.min(255, v))));
}

/**
 * Atkinson dithering implementation
 * Higher contrast, discards 1/4 of error - great for editorial style
 */
function atkinsonDither(buffer, width, height, levels) {
  const data = Float32Array.from(buffer);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const oldVal = data[idx];

      const step = 255 / (levels - 1);
      const newVal = Math.round(oldVal / step) * step;
      data[idx] = Math.max(0, Math.min(255, newVal));

      // Atkinson only diffuses 3/4 of error (6 * 1/8 = 3/4)
      const error = (oldVal - newVal) / 8;

      // Diffuse to 6 neighbors
      if (x + 1 < width) data[idx + 1] += error;
      if (x + 2 < width) data[idx + 2] += error;
      if (y + 1 < height) {
        if (x > 0) data[(y + 1) * width + (x - 1)] += error;
        data[(y + 1) * width + x] += error;
        if (x + 1 < width) data[(y + 1) * width + (x + 1)] += error;
      }
      if (y + 2 < height) {
        data[(y + 2) * width + x] += error;
      }
    }
  }

  return Uint8Array.from(data.map(v => Math.max(0, Math.min(255, v))));
}

/**
 * Jarvis-Judice-Ninke dithering
 * Smoother gradients, spreads error to 12 neighbors
 */
function jarvisDither(buffer, width, height, levels) {
  const data = Float32Array.from(buffer);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const oldVal = data[idx];

      const step = 255 / (levels - 1);
      const newVal = Math.round(oldVal / step) * step;
      data[idx] = Math.max(0, Math.min(255, newVal));

      const error = oldVal - newVal;

      // Row 0 (current row)
      if (x + 1 < width) data[idx + 1] += error * 7/48;
      if (x + 2 < width) data[idx + 2] += error * 5/48;

      // Row 1
      if (y + 1 < height) {
        if (x > 1) data[(y + 1) * width + (x - 2)] += error * 3/48;
        if (x > 0) data[(y + 1) * width + (x - 1)] += error * 5/48;
        data[(y + 1) * width + x] += error * 7/48;
        if (x + 1 < width) data[(y + 1) * width + (x + 1)] += error * 5/48;
        if (x + 2 < width) data[(y + 1) * width + (x + 2)] += error * 3/48;
      }

      // Row 2
      if (y + 2 < height) {
        if (x > 1) data[(y + 2) * width + (x - 2)] += error * 1/48;
        if (x > 0) data[(y + 2) * width + (x - 1)] += error * 3/48;
        data[(y + 2) * width + x] += error * 5/48;
        if (x + 1 < width) data[(y + 2) * width + (x + 1)] += error * 3/48;
        if (x + 2 < width) data[(y + 2) * width + (x + 2)] += error * 1/48;
      }
    }
  }

  return Uint8Array.from(data.map(v => Math.max(0, Math.min(255, v))));
}

/**
 * No dithering - simple quantization
 * Maximum contrast, posterized look
 */
function noDither(buffer, width, height, levels) {
  const step = 255 / (levels - 1);
  return Uint8Array.from(buffer.map(v => Math.round(v / step) * step));
}

// ============================================================
// CORE CONVERSION FUNCTION
// ============================================================

/**
 * Convert an image to ASCII art
 *
 * @param {string} imagePath - Path to input image
 * @param {Object} options - Conversion options
 * @returns {Promise<string>} - ASCII art string
 */
async function imageToAscii(imagePath, options = {}) {
  const opts = { ...CONFIG.defaults, ...options };
  const chars = CONFIG.charSets[opts.charSet] || CONFIG.charSets.standard;

  // Load and process image
  const image = await Jimp.read(imagePath);

  // Calculate dimensions preserving aspect ratio
  const aspectRatio = image.bitmap.height / image.bitmap.width;
  const height = Math.floor(opts.width * aspectRatio * opts.aspectRatioCorrection);

  // Resize and convert to grayscale
  image
    .resize(opts.width, height, Jimp.RESIZE_BILINEAR)
    .grayscale();

  // Apply brightness/contrast adjustments
  if (opts.brightness !== 0) {
    image.brightness(opts.brightness / 100);
  }
  if (opts.contrast !== 1.0) {
    image.contrast(opts.contrast - 1);
  }

  // Extract grayscale values
  const grayscaleBuffer = new Uint8Array(opts.width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < opts.width; x++) {
      const pixel = Jimp.intToRGBA(image.getPixelColor(x, y));
      grayscaleBuffer[y * opts.width + x] = pixel.r; // Already grayscale, R=G=B
    }
  }

  // Apply dithering
  let ditheredBuffer;
  switch (opts.dithering) {
    case 'floyd-steinberg':
      ditheredBuffer = floydSteinbergDither(grayscaleBuffer, opts.width, height, chars.length);
      break;
    case 'atkinson':
      ditheredBuffer = atkinsonDither(grayscaleBuffer, opts.width, height, chars.length);
      break;
    case 'jarvis':
      ditheredBuffer = jarvisDither(grayscaleBuffer, opts.width, height, chars.length);
      break;
    case 'none':
    default:
      ditheredBuffer = noDither(grayscaleBuffer, opts.width, height, chars.length);
  }

  // Convert to ASCII
  let ascii = '';
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < opts.width; x++) {
      const brightness = ditheredBuffer[y * opts.width + x];

      // Map brightness to character index
      let charIndex;
      if (opts.invert) {
        charIndex = Math.floor((brightness / 255) * (chars.length - 1));
      } else {
        charIndex = Math.floor(((255 - brightness) / 255) * (chars.length - 1));
      }

      // Clamp to valid range
      charIndex = Math.max(0, Math.min(chars.length - 1, charIndex));
      ascii += chars[charIndex];
    }
    ascii += '\n';
  }

  return ascii.trim();
}

// ============================================================
// BATCH PROCESSING
// ============================================================

/**
 * Process an image at multiple sizes
 *
 * @param {string} imagePath - Path to input image
 * @param {Object} options - Base options
 * @returns {Promise<Object>} - Object with size keys and ASCII values
 */
async function batchProcess(imagePath, options = {}) {
  const results = {};

  for (const width of CONFIG.sizes) {
    const ascii = await imageToAscii(imagePath, { ...options, width });
    results[width] = ascii;
  }

  return results;
}

/**
 * Process all images in a directory
 *
 * @param {string} inputDir - Input directory path
 * @param {string} outputDir - Output directory path
 * @param {Object} options - Processing options
 */
async function processDirectory(inputDir, outputDir, options = {}) {
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Get all image files
  const files = fs.readdirSync(inputDir).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return CONFIG.supportedFormats.includes(ext);
  });

  console.log(`Processing ${files.length} images...`);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const baseName = path.basename(file, path.extname(file));

    console.log(`  Processing: ${file}`);

    const results = await batchProcess(inputPath, options);

    for (const [width, ascii] of Object.entries(results)) {
      const outputPath = path.join(outputDir, `${baseName}-${width}.txt`);
      fs.writeFileSync(outputPath, ascii);
      console.log(`    Saved: ${outputPath}`);
    }
  }

  console.log('Done!');
}

// ============================================================
// CLI INTERFACE
// ============================================================

async function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log(`
ASCII Art Generator for Sanrok Design System

Usage:
  node generate-ascii.js <input> <output> [options]
  node generate-ascii.js --batch <inputDir> <outputDir> [options]

Options:
  --width <n>        Characters per line (default: 80)
  --charset <name>   Character set: standard, extended, full, blocks, minimal, dots
  --dithering <alg>  Algorithm: none, floyd-steinberg, atkinson, jarvis
  --invert           Invert brightness (for dark backgrounds)
  --contrast <n>     Contrast multiplier (default: 1.0)
  --brightness <n>   Brightness adjustment -100 to 100 (default: 0)

Examples:
  node generate-ascii.js portrait.jpg portrait.txt --width 100 --dithering atkinson
  node generate-ascii.js --batch ./images ./ascii-output --charset minimal
    `);
    process.exit(1);
  }

  // Parse options
  const options = {};
  for (let i = 2; i < args.length; i++) {
    switch (args[i]) {
      case '--width':
        options.width = parseInt(args[++i], 10);
        break;
      case '--charset':
        options.charSet = args[++i];
        break;
      case '--dithering':
        options.dithering = args[++i];
        break;
      case '--invert':
        options.invert = true;
        break;
      case '--contrast':
        options.contrast = parseFloat(args[++i]);
        break;
      case '--brightness':
        options.brightness = parseInt(args[++i], 10);
        break;
    }
  }

  if (args[0] === '--batch') {
    await processDirectory(args[1], args[2], options);
  } else {
    const ascii = await imageToAscii(args[0], options);
    fs.writeFileSync(args[1], ascii);
    console.log(`Saved ASCII art to: ${args[1]}`);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

// Export for use as module
module.exports = {
  imageToAscii,
  batchProcess,
  processDirectory,
  floydSteinbergDither,
  atkinsonDither,
  jarvisDither,
  CONFIG,
};
```

### Package.json for ASCII Generator

```json
{
  "name": "sanrok-ascii-generator",
  "version": "1.0.0",
  "description": "ASCII art generator for Sanrok design system",
  "main": "generate-ascii.js",
  "scripts": {
    "generate": "node generate-ascii.js",
    "batch": "node generate-ascii.js --batch ./images ./output"
  },
  "dependencies": {
    "jimp": "^0.22.12"
  }
}
```

---

## 6. Technique 2: JavaScript Runtime Conversion

### When to Use Runtime Conversion

- User-uploaded images
- Dynamic content
- Interactive ASCII art editors
- Webcam/video to ASCII

### Canvas-Based Browser Implementation

```javascript
/**
 * Browser-based ASCII Art Converter
 * Uses HTML5 Canvas for pixel access
 *
 * Note: This is for runtime conversion. For static images,
 * prefer pre-generated ASCII art (Technique 1).
 */

class AsciiArtConverter {
  constructor(options = {}) {
    this.config = {
      chars: options.chars || ' .:-=+*#%@',
      width: options.width || 80,
      aspectRatio: options.aspectRatio || 0.5,
      dithering: options.dithering || 'atkinson',
      invert: options.invert || false,
      ...options
    };

    // Create offscreen canvas
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
  }

  /**
   * Convert an image element to ASCII art
   * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} source
   * @returns {string} ASCII art string
   */
  convert(source) {
    // Calculate dimensions
    const sourceWidth = source.videoWidth || source.naturalWidth || source.width;
    const sourceHeight = source.videoHeight || source.naturalHeight || source.height;

    const width = this.config.width;
    const height = Math.floor(width * (sourceHeight / sourceWidth) * this.config.aspectRatio);

    // Resize canvas
    this.canvas.width = width;
    this.canvas.height = height;

    // Draw and get pixel data
    this.ctx.drawImage(source, 0, 0, width, height);
    const imageData = this.ctx.getImageData(0, 0, width, height);

    // Convert to grayscale buffer
    const grayscale = this.toGrayscale(imageData);

    // Apply dithering
    const dithered = this.applyDithering(grayscale, width, height);

    // Convert to ASCII
    return this.toAscii(dithered, width, height);
  }

  /**
   * Convert ImageData to grayscale values
   */
  toGrayscale(imageData) {
    const { data, width, height } = imageData;
    const grayscale = new Uint8Array(width * height);

    for (let i = 0; i < data.length; i += 4) {
      // Luminance formula: 0.299R + 0.587G + 0.114B
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      grayscale[i / 4] = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
    }

    return grayscale;
  }

  /**
   * Apply selected dithering algorithm
   */
  applyDithering(buffer, width, height) {
    const levels = this.config.chars.length;

    switch (this.config.dithering) {
      case 'floyd-steinberg':
        return this.floydSteinberg(buffer, width, height, levels);
      case 'atkinson':
        return this.atkinson(buffer, width, height, levels);
      case 'none':
        return this.quantize(buffer, levels);
      default:
        return this.atkinson(buffer, width, height, levels);
    }
  }

  /**
   * Simple quantization (no dithering)
   */
  quantize(buffer, levels) {
    const step = 255 / (levels - 1);
    return Uint8Array.from(buffer.map(v => Math.round(v / step) * step));
  }

  /**
   * Floyd-Steinberg dithering
   */
  floydSteinberg(buffer, width, height, levels) {
    const data = Float32Array.from(buffer);
    const step = 255 / (levels - 1);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = y * width + x;
        const oldVal = data[idx];
        const newVal = Math.round(oldVal / step) * step;
        data[idx] = newVal;

        const error = oldVal - newVal;

        if (x + 1 < width) data[idx + 1] += error * 7/16;
        if (y + 1 < height) {
          if (x > 0) data[(y + 1) * width + (x - 1)] += error * 3/16;
          data[(y + 1) * width + x] += error * 5/16;
          if (x + 1 < width) data[(y + 1) * width + (x + 1)] += error * 1/16;
        }
      }
    }

    return Uint8Array.from(data.map(v => Math.max(0, Math.min(255, v))));
  }

  /**
   * Atkinson dithering
   */
  atkinson(buffer, width, height, levels) {
    const data = Float32Array.from(buffer);
    const step = 255 / (levels - 1);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = y * width + x;
        const oldVal = data[idx];
        const newVal = Math.round(oldVal / step) * step;
        data[idx] = newVal;

        const error = (oldVal - newVal) / 8;

        if (x + 1 < width) data[idx + 1] += error;
        if (x + 2 < width) data[idx + 2] += error;
        if (y + 1 < height) {
          if (x > 0) data[(y + 1) * width + (x - 1)] += error;
          data[(y + 1) * width + x] += error;
          if (x + 1 < width) data[(y + 1) * width + (x + 1)] += error;
        }
        if (y + 2 < height) {
          data[(y + 2) * width + x] += error;
        }
      }
    }

    return Uint8Array.from(data.map(v => Math.max(0, Math.min(255, v))));
  }

  /**
   * Convert buffer to ASCII string
   */
  toAscii(buffer, width, height) {
    const chars = this.config.chars;
    let ascii = '';

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const brightness = buffer[y * width + x];

        let charIndex;
        if (this.config.invert) {
          charIndex = Math.floor((brightness / 255) * (chars.length - 1));
        } else {
          charIndex = Math.floor(((255 - brightness) / 255) * (chars.length - 1));
        }

        charIndex = Math.max(0, Math.min(chars.length - 1, charIndex));
        ascii += chars[charIndex];
      }
      ascii += '\n';
    }

    return ascii.trim();
  }

  /**
   * Convert from URL (handles loading)
   */
  async fromUrl(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(this.convert(img));
      img.onerror = reject;
      img.src = url;
    });
  }

  /**
   * Convert from file input
   */
  async fromFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const ascii = await this.fromUrl(e.target.result);
          resolve(ascii);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
}

// Usage example
/*
const converter = new AsciiArtConverter({
  width: 80,
  dithering: 'atkinson',
  chars: ' .:-=+*#%@'
});

// From existing image element
const img = document.querySelector('img');
const ascii = converter.convert(img);

// From URL
const ascii = await converter.fromUrl('/images/portrait.jpg');

// From file input
const input = document.querySelector('input[type="file"]');
input.addEventListener('change', async (e) => {
  const ascii = await converter.fromFile(e.target.files[0]);
  document.querySelector('pre').textContent = ascii;
});
*/

// Export for ES modules
export { AsciiArtConverter };
```

### Web Worker Implementation (Unblocking)

Source: [Improved Web Component for Pixel-Accurate Atkinson Dithered Images | sheep.horse](https://sheep.horse/2023/1/improved_web_component_for_pixel-accurate_atkinson.html)

```javascript
// ascii-worker.js
self.onmessage = function(e) {
  const { imageData, width, height, config } = e.data;

  // Convert to grayscale
  const grayscale = new Uint8Array(width * height);
  for (let i = 0; i < imageData.length; i += 4) {
    grayscale[i / 4] = Math.round(
      0.299 * imageData[i] +
      0.587 * imageData[i + 1] +
      0.114 * imageData[i + 2]
    );
  }

  // Apply Atkinson dithering
  const chars = config.chars;
  const levels = chars.length;
  const data = Float32Array.from(grayscale);
  const step = 255 / (levels - 1);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const oldVal = data[idx];
      const newVal = Math.round(oldVal / step) * step;
      data[idx] = newVal;

      const error = (oldVal - newVal) / 8;

      if (x + 1 < width) data[idx + 1] += error;
      if (x + 2 < width) data[idx + 2] += error;
      if (y + 1 < height) {
        if (x > 0) data[(y + 1) * width + (x - 1)] += error;
        data[(y + 1) * width + x] += error;
        if (x + 1 < width) data[(y + 1) * width + (x + 1)] += error;
      }
      if (y + 2 < height) {
        data[(y + 2) * width + x] += error;
      }
    }
  }

  // Convert to ASCII
  let ascii = '';
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const brightness = Math.max(0, Math.min(255, data[y * width + x]));
      let charIndex = Math.floor(((255 - brightness) / 255) * (levels - 1));
      charIndex = Math.max(0, Math.min(levels - 1, charIndex));
      ascii += chars[charIndex];
    }
    ascii += '\n';
  }

  self.postMessage({ ascii });
};
```

---

## 7. Technique 3: Unicode Block Characters

### Overview

Unicode provides block-drawing characters that can create halftone effects without the "ASCII art" character variety.

### Available Characters

| Character | Unicode | Name | Coverage |
|-----------|---------|------|----------|
| (space) | U+0020 | Space | 0% |
| `░` | U+2591 | Light Shade | ~25% |
| `▒` | U+2592 | Medium Shade | ~50% |
| `▓` | U+2593 | Dark Shade | ~75% |
| `█` | U+2588 | Full Block | 100% |

### Why NOT Recommended for Sanrok

1. **Inconsistent font rendering:**
   - Not all monospace fonts include these characters
   - Width may vary (breaking the grid alignment)
   - Anti-aliasing differences across browsers

2. **Aesthetic mismatch:**
   - Blocks are too "smooth" - no handmade character
   - Lacks the editorial, typewriter-art feel
   - More "digital" than "print"

3. **Limited expression:**
   - Only 5 levels vs 10+ with ASCII characters
   - No way to increase tonal range
   - Can't mix with text naturally

4. **Accessibility concerns:**
   - Screen readers can't interpret meaning
   - Copy-paste behavior varies

### When Unicode Blocks ARE Appropriate

- Loading indicators/progress bars
- Simple charts/graphs in terminal
- Pixel art that needs clean edges
- Interfaces mimicking retro games

### If You Must Use Blocks

```css
.block-art {
  font-family: 'Noto Mono', 'Roboto Mono', monospace;
  font-size: 8px;
  line-height: 1;
  letter-spacing: 0;
  white-space: pre;

  /* Force character width consistency */
  display: inline-block;
}

.block-art span {
  display: inline-block;
  width: 1ch;
  text-align: center;
}
```

Source: [How to Display Special Unicode Characters with Fixed Width in HTML | w3tutorials.net](https://www.w3tutorials.net/blog/how-to-display-special-unicode-characters-using-monospace-font-in-html-with-preserved-character-width/)

---

## 8. Complete CSS Specification

### Base ASCII Art Styles

```css
/* ============================================================
   ASCII ART DISPLAY STYLES
   For Sanrok Design System
   ============================================================ */

/* Base ASCII art container */
.ascii-art {
  /* Typography - CRITICAL for proper rendering */
  font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', 'Menlo', 'Monaco', 'Consolas', monospace;
  font-size: 6px;
  line-height: 0.85;
  letter-spacing: -0.5px;
  font-weight: 400;
  font-variant-ligatures: none; /* Prevent ligature merging */

  /* Layout */
  white-space: pre;
  overflow: hidden;
  display: block;

  /* Default colors (Sanrok black) */
  color: var(--color-text, #1A1A1A);
  background: transparent;

  /* Brutalist: no decoration */
  border: none;
  border-radius: 0;
  box-shadow: none;

  /* Selection behavior */
  user-select: none;
  -webkit-user-select: none;

  /* Performance */
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: grayscale;
}

/* ============================================================
   COLOR VARIATIONS
   ============================================================ */

/* Sanrok red accent */
.ascii-art--red {
  color: var(--color-accent, #E63946);
}

/* Inverted (white on dark) */
.ascii-art--inverted {
  color: var(--color-background, #FAFAFA);
  background: var(--color-text, #1A1A1A);
  padding: 1rem;
}

/* Subtle gray */
.ascii-art--muted {
  color: var(--color-text-muted, #6B6B6B);
}

/* ============================================================
   SIZE VARIATIONS
   ============================================================ */

/* Extra small - near photographic */
.ascii-art--xs {
  font-size: 4px;
  line-height: 0.8;
  letter-spacing: -0.3px;
}

/* Small - detailed but visible texture */
.ascii-art--sm {
  font-size: 5px;
  line-height: 0.82;
  letter-spacing: -0.4px;
}

/* Medium (default) - balanced */
.ascii-art--md {
  font-size: 6px;
  line-height: 0.85;
  letter-spacing: -0.5px;
}

/* Large - characters visible */
.ascii-art--lg {
  font-size: 8px;
  line-height: 0.88;
  letter-spacing: -0.3px;
}

/* Extra large - clearly ASCII art */
.ascii-art--xl {
  font-size: 10px;
  line-height: 0.9;
  letter-spacing: -0.2px;
}

/* 2X Large - artistic/decorative */
.ascii-art--2xl {
  font-size: 12px;
  line-height: 0.92;
  letter-spacing: -0.1px;
}

/* ============================================================
   ASPECT RATIO CONTAINERS
   ============================================================ */

/* Square container */
.ascii-art-container--square {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Portrait container */
.ascii-art-container--portrait {
  aspect-ratio: 3 / 4;
  overflow: hidden;
}

/* Landscape container */
.ascii-art-container--landscape {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

/* Full width (responsive) */
.ascii-art-container--full {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}

/* ============================================================
   GRID LAYOUTS (Sanrok 6-image style)
   ============================================================ */

/* 6-image grid (2x3) */
.ascii-art-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2px;
}

.ascii-art-grid--2x2 {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.ascii-art-grid--3x3 {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.ascii-art-grid--masonry {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
}

.ascii-art-grid--masonry > * {
  flex: 1 1 calc(33.333% - 2px);
  min-width: 100px;
}

/* ============================================================
   INTERACTIVE STATES
   ============================================================ */

/* Hoverable */
.ascii-art--interactive {
  cursor: pointer;
  transition: color 0.2s ease, opacity 0.2s ease;
}

.ascii-art--interactive:hover {
  color: var(--color-accent, #E63946);
}

/* Selectable (for copy) */
.ascii-art--selectable {
  user-select: all;
  -webkit-user-select: all;
  cursor: text;
}

/* Focus state */
.ascii-art--interactive:focus {
  outline: 2px solid var(--color-accent, #E63946);
  outline-offset: 2px;
}

/* ============================================================
   ANIMATION EFFECTS
   ============================================================ */

/* Typewriter reveal */
@keyframes ascii-reveal {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

.ascii-art--animate-reveal {
  animation: ascii-reveal 2s ease-out forwards;
}

/* Scanline effect */
@keyframes ascii-scanline {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}

.ascii-art--scanline::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(230, 57, 70, 0.5),
    transparent
  );
  animation: ascii-scanline 3s linear infinite;
}

/* Glitch effect */
@keyframes ascii-glitch {
  0%, 100% {
    transform: translate(0);
    opacity: 1;
  }
  10% {
    transform: translate(-2px, 1px);
    opacity: 0.8;
  }
  20% {
    transform: translate(2px, -1px);
    opacity: 0.9;
  }
  30% {
    transform: translate(-1px, 2px);
    opacity: 1;
  }
}

.ascii-art--glitch:hover {
  animation: ascii-glitch 0.3s ease-in-out;
}

/* ============================================================
   RESPONSIVE ADJUSTMENTS
   ============================================================ */

/* Mobile-first responsive sizing */
@media (max-width: 768px) {
  .ascii-art {
    font-size: 4px;
    line-height: 0.8;
    letter-spacing: -0.3px;
  }

  .ascii-art-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .ascii-art {
    font-size: 3px;
    line-height: 0.75;
    letter-spacing: -0.2px;
  }

  .ascii-art-grid {
    grid-template-columns: 1fr;
  }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .ascii-art {
    -webkit-font-smoothing: subpixel-antialiased;
  }
}

/* ============================================================
   UTILITY CLASSES
   ============================================================ */

/* Text alignment within container */
.ascii-art--center {
  text-align: center;
}

/* Preserve whitespace strictly */
.ascii-art--strict {
  white-space: pre-wrap;
  word-break: break-all;
}

/* Hide on small screens */
.ascii-art--hide-mobile {
  display: block;
}

@media (max-width: 640px) {
  .ascii-art--hide-mobile {
    display: none;
  }
}
```

### CSS Custom Properties (Theme Integration)

```css
/* ASCII Art CSS Custom Properties for Theme Integration */
:root {
  /* Colors */
  --ascii-color-primary: #1A1A1A;
  --ascii-color-accent: #E63946;
  --ascii-color-muted: #6B6B6B;
  --ascii-color-bg: transparent;

  /* Typography */
  --ascii-font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;
  --ascii-font-size-base: 6px;
  --ascii-line-height: 0.85;
  --ascii-letter-spacing: -0.5px;

  /* Sizes */
  --ascii-size-xs: 4px;
  --ascii-size-sm: 5px;
  --ascii-size-md: 6px;
  --ascii-size-lg: 8px;
  --ascii-size-xl: 10px;

  /* Grid */
  --ascii-grid-gap: 2px;
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  :root {
    --ascii-color-primary: #FAFAFA;
    --ascii-color-bg: #1A1A1A;
  }
}
```

Source: [CSS style for ascii-art | Brian Khuu](https://briankhuu.com/blog/2015/01/14/css-style-for-ascii-art/)

---

## 9. Complete HTML Structure

### Basic Single ASCII Art

```html
<!-- Basic ASCII art display -->
<figure class="ascii-art-container">
  <pre class="ascii-art ascii-art--md" aria-label="ASCII art portrait">
                              @@@@@@@@
                        @@@@@@@@@@@@@@@@@@@@
                     @@@@@#*+==-:::-==+*#@@@@@@
                   @@@#+-:..............:-+#@@@@
                 @@@*-........................-*@@@
               @@@+.............................+@@@
              @@*.......:---:.......::---:.......*@@
             @@+......:+####+:.....:+####+-......+@@
            @@+.......+#%%%%#=.....-#%%%%#=.......-@@
           @@=........=%%%%%#-.....-#%%%%#=........=@@
           @@.........-#%%%%+......+%%%%#=.........=@@
          @@=..........-+##+-......-=##+-..........=@@
          @@:............::..........::............:@@
          @@...............-+####+-................@@
          @@:..............=#######-..............@@
           @@:..............*#####*.............:@@
            @@:..............=###=..............:@@
             @@=..............===..............=@@
              @@*.............................*@@
               @@@=.........................=@@@
                 @@#+:...................:+#@@
                   @@@#*=:..........:=*#@@@
                     @@@@@#######@@@@@@
                        @@@@@@@@@@@
  </pre>
  <figcaption class="visually-hidden">Portrait rendered as ASCII art</figcaption>
</figure>
```

### Grid Layout (6 Images - Sanrok Left Card Style)

```html
<!-- ASCII art grid layout (2x3) -->
<div class="ascii-art-grid" role="img" aria-label="Collection of 6 ASCII art images">
  <div class="ascii-art-grid__item">
    <pre class="ascii-art ascii-art--sm ascii-art--red">
@@@@@@@@@@@@@@
@@##**==--::@@
@@:.......::@@
@@...-==-...@@
@@..=####=..@@
@@..-+##+-..@@
@@....::....@@
@@#*=---=*#@@@
@@@@@@@@@@@@@@
    </pre>
  </div>

  <div class="ascii-art-grid__item">
    <pre class="ascii-art ascii-art--sm">
@@@@@@@@@@@@@@
@@:.......::@@
@@:........:@@
@@:.+***+..:@@
@@:.#%%%%=.:@@
@@:.-*##*-.:@@
@@:........:@@
@@@@@@@@@@@@@@
    </pre>
  </div>

  <div class="ascii-art-grid__item">
    <pre class="ascii-art ascii-art--sm ascii-art--red">
@@@@@@@@@@@@@@
@@*........*@@
@@..======..@@
@@.=%%%%%=..@@
@@..=###=...@@
@@...-==-...@@
@@..........@@
@@@@@@@@@@@@@@
    </pre>
  </div>

  <div class="ascii-art-grid__item">
    <pre class="ascii-art ascii-art--sm">
@@@@@@@@@@@@@@
@@..::::::..@@
@@.+######+.@@
@@.########.@@
@@.-######-.@@
@@..=####=..@@
@@...=##=...@@
@@@@@@@@@@@@@@
    </pre>
  </div>

  <div class="ascii-art-grid__item">
    <pre class="ascii-art ascii-art--sm ascii-art--red">
@@@@@@@@@@@@@@
@@*+++++++++@@
@@*........*@@
@@*.:----:.*@@
@@*.=%%%%=.*@@
@@*.-+##+:.*@@
@@*........*@@
@@@@@@@@@@@@@@
    </pre>
  </div>

  <div class="ascii-art-grid__item">
    <pre class="ascii-art ascii-art--sm">
@@@@@@@@@@@@@@
@@#=......=#@@
@@..+****+..@@
@@.+%%%%%%+.@@
@@..=####=..@@
@@...=##=...@@
@@....==....@@
@@@@@@@@@@@@@@
    </pre>
  </div>
</div>
```

### Single Large (Sanrok Right Card Style)

```html
<!-- Large single ASCII art (hero/feature) -->
<article class="ascii-art-hero">
  <pre class="ascii-art ascii-art--lg ascii-art--red" aria-label="Featured artwork">

                                          @@@@@@@@@@@@@@@@@@
                                    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                                @@@@@@@@@@@@+=-:::::::-=+@@@@@@@@@@@@
                             @@@@@@@@@*-:...................:-*@@@@@@@@@
                           @@@@@@@*-..............................-*@@@@@@@
                         @@@@@@@=...................................:=@@@@@@@
                        @@@@@@-.......................................:=@@@@@@
                       @@@@@+...........................................:+@@@@@
                      @@@@@:..............................................:@@@@@
                     @@@@@.................................................:@@@@@
                    @@@@@...................................................@@@@@
                    @@@@=..............:+#################+:...............:=@@@@
                   @@@@+..............+#####################+...............:@@@@
                   @@@@:.............=########################=..............:@@@@
                   @@@@..............##########################+..............@@@@
                   @@@@.............=###########################+.............@@@@
                   @@@@.............+###########################=.............@@@@
                   @@@@..............+#########################=..............@@@@
                   @@@@:..............=+#####################+=..............:@@@@
                   @@@@+..................:-=+#########+=-:..................+@@@@
                    @@@@=..................................................:=@@@@
                    @@@@@:.................................................@@@@@
                     @@@@@................................................@@@@@
                      @@@@@+.............................................@@@@@
                       @@@@@+..........................................+@@@@@
                        @@@@@@=......................................=@@@@@@
                         @@@@@@@*-................................-*@@@@@@@
                           @@@@@@@@@*=-......................-=*@@@@@@@@@
                             @@@@@@@@@@@@@@*+========+*@@@@@@@@@@@@@@
                                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                                     @@@@@@@@@@@@@@@@@@@@@@@

  </pre>
</article>
```

### React Component Structure

```jsx
// AsciiArt.tsx
import React from 'react';
import clsx from 'clsx';
import styles from './AsciiArt.module.css';

interface AsciiArtProps {
  content: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: 'default' | 'red' | 'muted' | 'inverted';
  selectable?: boolean;
  interactive?: boolean;
  animate?: 'none' | 'reveal' | 'glitch';
  className?: string;
  ariaLabel?: string;
}

export const AsciiArt: React.FC<AsciiArtProps> = ({
  content,
  size = 'md',
  color = 'default',
  selectable = false,
  interactive = false,
  animate = 'none',
  className,
  ariaLabel,
}) => {
  const classes = clsx(
    styles.asciiArt,
    styles[`size-${size}`],
    styles[`color-${color}`],
    {
      [styles.selectable]: selectable,
      [styles.interactive]: interactive,
      [styles[`animate-${animate}`]]: animate !== 'none',
    },
    className
  );

  return (
    <pre
      className={classes}
      aria-label={ariaLabel}
      role="img"
    >
      {content}
    </pre>
  );
};

// AsciiArtGrid.tsx
interface AsciiArtGridProps {
  items: Array<{ content: string; color?: 'default' | 'red' }>;
  columns?: 2 | 3;
  size?: 'xs' | 'sm' | 'md';
  className?: string;
}

export const AsciiArtGrid: React.FC<AsciiArtGridProps> = ({
  items,
  columns = 3,
  size = 'sm',
  className,
}) => {
  return (
    <div
      className={clsx(styles.grid, styles[`grid-${columns}`], className)}
      role="img"
      aria-label={`Collection of ${items.length} ASCII art images`}
    >
      {items.map((item, index) => (
        <AsciiArt
          key={index}
          content={item.content}
          size={size}
          color={item.color}
        />
      ))}
    </div>
  );
};
```

---

## 10. Test Cases and Verification

### Test Cases Table

| Test ID | Source Image | Dimensions (chars) | Purpose | Expected Result |
|---------|--------------|-------------------|---------|-----------------|
| TC-001 | Portrait face (portrait.jpg) | 80x40 | Human subject detail | Clear facial features, recognizable expression |
| TC-002 | High contrast logo (logo.png) | 60x30 | Test extremes | Sharp edges, no banding |
| TC-003 | Gradient circle (gradient.png) | 100x50 | Smooth tonal transitions | Visible dithering pattern, no hard bands |
| TC-004 | Text on background (text.jpg) | 80x20 | Readability test | Text should be discernible |
| TC-005 | Low light photo (dark.jpg) | 80x40 | Shadow detail | Details visible in dark areas |
| TC-006 | High key photo (bright.jpg) | 80x40 | Highlight detail | Details visible in bright areas |
| TC-007 | Complex scene (scene.jpg) | 120x60 | Multiple subjects | All elements distinguishable |
| TC-008 | Abstract pattern (abstract.png) | 60x60 | Non-representational | Pattern maintained |

### Verification Checklist

#### Pre-Generation Verification

- [ ] Node.js v16+ installed
- [ ] Jimp package installed (`npm install jimp`)
- [ ] Input images accessible
- [ ] Output directory exists and writable
- [ ] Character set appropriate for use case

#### Output Quality Verification

- [ ] No horizontal banding visible
- [ ] Smooth tonal transitions (if dithered)
- [ ] Aspect ratio preserved
- [ ] File size reasonable (<50KB for 80-char width)
- [ ] Characters render correctly in target font

#### Browser Rendering Verification

- [ ] Chrome: Characters aligned, no spacing issues
- [ ] Firefox: Characters aligned, no spacing issues
- [ ] Safari: Characters aligned, no spacing issues
- [ ] Mobile Safari: Renders at correct size
- [ ] Mobile Chrome: Renders at correct size

#### Accessibility Verification

- [ ] `aria-label` present and descriptive
- [ ] `role="img"` applied to container
- [ ] `alt` text available for screen readers
- [ ] High contrast mode maintains visibility
- [ ] Keyboard navigation works (if interactive)

### Automated Testing Script

```javascript
// test-ascii-output.js
const fs = require('fs');
const path = require('path');

function verifyAsciiArt(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  const results = {
    filePath,
    passed: true,
    tests: []
  };

  // Test 1: Consistent line length
  const lineLengths = lines.map(l => l.length);
  const uniqueLengths = [...new Set(lineLengths.filter(l => l > 0))];
  results.tests.push({
    name: 'Consistent line length',
    passed: uniqueLengths.length === 1,
    details: uniqueLengths.length === 1
      ? `All lines: ${uniqueLengths[0]} chars`
      : `Varying lengths: ${uniqueLengths.join(', ')}`
  });

  // Test 2: Valid characters only
  const validChars = ' .:-=+*#%@\n';
  const invalidChars = [...content].filter(c => !validChars.includes(c));
  results.tests.push({
    name: 'Valid characters only',
    passed: invalidChars.length === 0,
    details: invalidChars.length === 0
      ? 'All characters valid'
      : `Invalid chars found: ${[...new Set(invalidChars)].join('')}`
  });

  // Test 3: Non-empty content
  const nonEmptyLines = lines.filter(l => l.trim().length > 0);
  results.tests.push({
    name: 'Non-empty content',
    passed: nonEmptyLines.length > 5,
    details: `${nonEmptyLines.length} non-empty lines`
  });

  // Test 4: Reasonable file size
  const stats = fs.statSync(filePath);
  const sizeKB = stats.size / 1024;
  results.tests.push({
    name: 'Reasonable file size (<100KB)',
    passed: sizeKB < 100,
    details: `${sizeKB.toFixed(2)} KB`
  });

  // Update overall passed status
  results.passed = results.tests.every(t => t.passed);

  return results;
}

// Run tests on all files in output directory
const outputDir = './output';
const files = fs.readdirSync(outputDir).filter(f => f.endsWith('.txt'));

console.log('ASCII Art Output Verification\n' + '='.repeat(50));

files.forEach(file => {
  const results = verifyAsciiArt(path.join(outputDir, file));

  console.log(`\n${results.passed ? '✓' : '✗'} ${file}`);
  results.tests.forEach(test => {
    console.log(`  ${test.passed ? '✓' : '✗'} ${test.name}: ${test.details}`);
  });
});
```

---

## 11. NPM Libraries Reference

### Recommended Libraries

| Library | Use Case | Pros | Cons |
|---------|----------|------|------|
| [image-to-ascii](https://www.npmjs.com/package/image-to-ascii) | Node.js server-side | Full-featured, CLI support, colored output | Requires native dependencies |
| [asciify-image](https://www.npmjs.com/package/asciify-image) | Node.js, no native deps | Zero native dependencies, Promise-based | Fewer options than image-to-ascii |
| [jimp](https://www.npmjs.com/package/jimp) | Image processing base | Pure JS, no native deps, full control | Requires custom ASCII conversion |
| [aalib.js](http://mir3z.github.io/aalib.js/) | Browser-based | Works with video, canvas rendering | Browser-only |
| [get-ascii-image](https://www.npmjs.com/package/get-ascii-image) | Browser-based, zero deps | Lightweight, frontend-only | Limited options |
| [jscii](https://www.npmjs.com/package/jscii) | Browser streams/images | Video support, streaming | Older codebase |

Source: [image-to-ascii | npm](https://www.npmjs.com/package/image-to-ascii)

### Installation Commands

```bash
# Server-side (Node.js)
npm install jimp                    # For custom implementation (RECOMMENDED)
npm install image-to-ascii          # Full-featured, requires native deps
npm install asciify-image           # No native deps, simpler

# Browser-side
npm install get-ascii-image         # Zero-dependency, frontend only
```

### Quick Usage Examples

#### Using image-to-ascii (Node.js)

```javascript
const imageToAscii = require('image-to-ascii');

imageToAscii('path/to/image.jpg', {
  size: { width: 80 },
  colored: false,
}, (err, converted) => {
  console.log(err || converted);
});
```

#### Using asciify-image (Node.js)

```javascript
const asciify = require('asciify-image');

asciify('path/to/image.jpg', { fit: 'box', width: 80, height: 40 })
  .then(ascii => console.log(ascii))
  .catch(err => console.error(err));
```

Source: [asciify-image | npm](https://www.npmjs.com/package/asciify-image)

#### Using get-ascii-image (Browser)

```javascript
import { getAsciiImage } from 'get-ascii-image';

const options = {
  width: 80,
  charRamp: ' .:-=+*#%@',
};

getAsciiImage(imageElement, options)
  .then(ascii => {
    document.querySelector('pre').textContent = ascii;
  });
```

Source: [GitHub - aromalanil/get-ascii-image](https://github.com/aromalanil/get-ascii-image)

---

## 12. Brutalist Design Context

### What is Brutalist Web Design?

Brutalist web design derives from architectural brutalism ("béton brut" = raw concrete). Key principles:

1. **Truth to materials** - The web's materials are content, not decoration
2. **Raw aesthetics** - Unpolished, intentionally rough
3. **Function over form** - Content is king
4. **Rejection of "sameness"** - Against template-driven homogeneity

Source: [Brutalist Web Design](https://brutalist-web.design)

### How ASCII Art Fits Brutalism

| Brutalist Principle | ASCII Art Implementation |
|---------------------|-------------------------|
| Raw materials | Text IS the material - no image processing tricks |
| Anti-decoration | No shadows, borders, or effects |
| Performance | Tiny file sizes, instant loading |
| Accessibility | Text-based = screen-reader friendly |
| Timelessness | Works in any browser, any era |

### Notable Brutalist Sites Using ASCII/Text Art

1. **Craigslist** - Pure text, no imagery
2. **Brutalist Websites** (brutalistwebsites.com) - Curates examples including ASCII art
3. **Many indie/art sites** featured on Awwwards brutalism collection

Source: [Examples & Best Practices of Brutalism in Web Design | Designlab](https://designlab.com/blog/examples-brutalism-in-web-design)

### The Editorial Connection

Editorial design (magazines, newspapers) shares DNA with brutalism:
- **Grid systems** - Text naturally creates grids
- **Typography focus** - Words as visual elements
- **Limited color palettes** - Often black/white/accent
- **Halftone tradition** - Historical print limitation = aesthetic choice

ASCII art with dithering recreates the halftone newsprint aesthetic that defined 20th-century editorial design.

---

## 13. Performance Considerations

### File Size Comparison

| Format | 80x40 Image | 200x100 Image | Notes |
|--------|-------------|---------------|-------|
| ASCII .txt | ~3.2 KB | ~20 KB | Compresses to <1KB with gzip |
| PNG (optimized) | ~15 KB | ~80 KB | Lossless, larger |
| JPEG (q=80) | ~8 KB | ~35 KB | Lossy, artifacts |
| WebP | ~6 KB | ~25 KB | Modern, not universal |
| SVG halftone | ~50 KB+ | ~200 KB+ | Vector, complex |

**ASCII wins on file size**, especially with compression.

### Rendering Performance

#### Pre-generated ASCII (Technique 1)
- **Initial paint**: Near-instant (text renders immediately)
- **Reflow**: Minimal (fixed-width characters)
- **Memory**: Very low (~100KB for large art)
- **CPU**: Zero processing required

#### Runtime Conversion (Technique 2)
- **Initial paint**: Delayed by processing time
- **Processing time**: 50-500ms depending on size
- **CPU**: Moderate during conversion
- **Use case**: Only for dynamic content

### Optimization Tips

1. **Gzip compression** - ASCII text compresses 80%+
2. **Lazy loading** - Defer off-screen ASCII art
3. **Pre-render** - Generate at build time, not runtime
4. **Appropriate sizing** - Match dimensions to display size
5. **Font loading** - Use `font-display: swap` for monospace fonts

### Browser Minimum Font Size

Some browsers enforce minimum font sizes:
- Chrome: Can be disabled in settings (default: none)
- Firefox: 9px default minimum
- Safari: No enforced minimum

For 4-6px ASCII art, test across browsers and provide fallbacks.

---

## 14. Sources and References

### Web Search Sources (2026)

1. [Efecto: Building Real-Time ASCII and Dithering Effects with WebGL Shaders | Codrops](https://tympanus.net/codrops/2026/01/04/efecto-building-real-time-ascii-and-dithering-effects-with-webgl-shaders/) - January 2026 article on real-time ASCII and dithering
2. [Efecto App](https://efecto.app/) - Free ASCII art and dithering effects tool
3. [Image to ASCII Art Converter | Fontb](https://www.fontb.com/image-to-ascii) - Browser-based converter

### NPM Package Documentation

4. [image-to-ascii | npm](https://www.npmjs.com/package/image-to-ascii) - Node.js ASCII art module
5. [asciify-image | npm](https://www.npmjs.com/package/asciify-image) - Zero native dependency option
6. [GitHub - IonicaBizau/image-to-ascii](https://github.com/IonicaBizau/image-to-ascii) - Source repository
7. [aalib.js | ASCII art library in JavaScript](http://mir3z.github.io/aalib.js/) - Browser library
8. [get-ascii-image | npm](https://www.npmjs.com/package/get-ascii-image) - Frontend-only package
9. [jscii | npm](https://www.npmjs.com/package/jscii) - Image/stream to ASCII

### Dithering Algorithm Resources

10. [Floyd-Steinberg dithering in JavaScript | Ivan Kuckir](https://blog.ivank.net/floyd-steinberg-dithering-in-javascript.html) - Algorithm implementation
11. [Floyd-Steinberg dithering | Wikipedia](https://en.wikipedia.org/wiki/Floyd%E2%80%93Steinberg_dithering) - Algorithm theory
12. [GitHub - MortimerWittgenstein/FloydSteinbergAlgorithm](https://github.com/MortimerWittgenstein/FloydSteinbergAlgorithm) - JavaScript implementation
13. [GitHub - noopkat/floyd-steinberg](https://github.com/noopkat/floyd-steinberg) - Node.js dithering
14. [Atkinson Dithering | gazs.github.io](https://gazs.github.io/canvas-atkinson-dither/) - Canvas implementation
15. [GitHub - rtrvrtg/node-atkinson-dither](https://github.com/rtrvrtg/node-atkinson-dither) - Node.js Atkinson
16. [Improved Web Component for Pixel-Accurate Atkinson Dithered Images | sheep.horse](https://sheep.horse/2023/1/improved_web_component_for_pixel-accurate_atkinson.html) - Web component approach
17. [Atkinson dithering | Wikipedia](https://en.wikipedia.org/wiki/Atkinson_dithering) - Algorithm details
18. [ASCII dithering | DitherPunk.jl](https://juliaimages.org/DitherPunk.jl/v3.1/generated/ascii/) - Julia implementation with character sets

### ASCII Art Theory

19. [How do ASCII Art Image Conversion Algorithms Work? | Saturn Cloud](https://saturncloud.io/blog/how-do-ascii-art-image-conversion-algorithms-work/) - Comprehensive overview
20. [Converting images to ASCII art (Part 2) | Bites of code](https://bitesofcode.wordpress.com/2017/05/27/converting-images-to-ascii-art-part-2/) - Character density analysis
21. [Convert An Image Into An ASCII Art Masterpiece | Marmelab](https://marmelab.com/blog/2018/02/20/convert-image-to-ascii-art-masterpiece.html) - Canvas-based tutorial
22. [GitHub - itaborai83/textixel](https://github.com/itaborai83/textixel) - Ad-hoc dithering algorithm

### CSS and Styling

23. [CSS style for ascii-art | Brian Khuu](https://briankhuu.com/blog/2015/01/14/css-style-for-ascii-art/) - Essential CSS properties
24. [How to Display Special Unicode Characters with Fixed Width | w3tutorials.net](https://www.w3tutorials.net/blog/how-to-display-special-unicode-characters-using-monospace-font-in-html-with-preserved-character-width/) - Unicode handling
25. [Monospace UI Framework - ASTA Design System | CSS Script](https://www.cssscript.com/monospace-ui-framework-asta/) - Full monospace framework
26. [ASCII Text Generator + 6 Monospaced Fonts | CraftSupply](https://craftsupply.co/articles/ascii/) - Font recommendations

### Brutalist Design

27. [Examples & Best Practices of Brutalism in Web Design | Designlab](https://designlab.com/blog/examples-brutalism-in-web-design) - Comprehensive guide
28. [Brutalist Web Design](https://brutalist-web.design) - Manifesto and principles
29. [11 Fascinating Examples of Brutalist Web Design | HubSpot](https://blog.hubspot.com/website/brutalist-website-design) - Example gallery
30. [Brutalism | Awwwards](https://www.awwwards.com/awwwards/collections/brutalism/) - Curated collection

### Image Processing

31. [Node Jimp | Color grayscale | GeeksforGeeks](https://www.geeksforgeeks.org/node-jimp-color-grayscale/) - Jimp grayscale
32. [Image processing with Node and Jimp | LogRocket](https://blog.logrocket.com/image-processing-with-node-and-jimp/) - Comprehensive Jimp tutorial
33. [Using in Browser | Jimp](https://jimp-dev.github.io/jimp/guides/browser/) - Browser Jimp usage

---

## Appendix A: Quick Reference Card

### Character Sets

```
Standard (10):  ' .:-=+*#%@'
Minimal (4):    ' .:#'
Dots (6):       ' .:oO@'
Blocks (5):     ' ░▒▓█'
```

### CSS Essentials

```css
.ascii-art {
  font-family: 'JetBrains Mono', monospace;
  font-size: 6px;
  line-height: 0.85;
  letter-spacing: -0.5px;
  white-space: pre;
}
```

### Dithering Choice

- **Atkinson**: High contrast, editorial feel (RECOMMENDED)
- **Floyd-Steinberg**: Balanced, general purpose
- **None**: Maximum contrast, posterized

### Size Guide

| Size | Font | Use |
|------|------|-----|
| xs | 4px | Near-photographic |
| sm | 5px | Grid thumbnails |
| md | 6px | Default, balanced |
| lg | 8px | Feature image |
| xl | 10px | Hero, artistic |

---

**Document Statistics:**
- Total lines: 1,580+
- Sections: 14 major sections
- Code examples: 15+
- Tables: 12
- External sources: 33

**Last Updated:** 2026-02-03
**Author:** Sub-Agent 4A
**Status:** COMPLETE

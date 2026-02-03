# Font Feasibility Analysis

## Executive Summary

This document analyzes the practical availability, licensing, and implementation feasibility for the top 3 font candidates identified from the Sanrok Studio typography comparison. The analysis provides ready-to-use implementation code and clear recommendations for each use case.

**Top 3 Candidates:**
| Rank | Font | Match Score | Cost | Integration |
|------|------|-------------|------|-------------|
| 1 | Right Didone | 34/40 | $40+ | Self-hosted |
| 2 | Instrument Serif | 30/40 | FREE | Google Fonts |
| 3 | Bodoni Moda | 28/40 | FREE | Google Fonts |

---

## Recommendation 1: Right Didone

### Match Quality: 34/40 (4.25/5) - BEST MATCH

Right Didone from [Pangram Pangram Foundry](https://pangrampangram.com/products/right-didone) is a contemporary Didone with the closest match to the Sanrok reference design. It features the curved R leg, G spur, and sharp contemporary terminals.

### Licensing

| Aspect | Details |
|--------|---------|
| **License Type** | Commercial (proprietary) |
| **Base Price** | Starting at $40 per license type |
| **Personal/Trial** | FREE - Full glyph set for personal use, portfolios, pitches, testing |
| **Commercial** | Requires separate licenses per use type |
| **Font Starter Pack** | $29 - Includes 1130+ styles from 75 typefaces |

**License Types Required:**

| License | Use Case | Pricing Structure |
|---------|----------|-------------------|
| Print/Desktop | Installed on workstations, printed materials | Per workstation |
| Web | Websites, embedded in pages | Per pageview tier (e.g., 10k/month) |
| App | Mobile/desktop applications | Per active users/month |
| Social Media | Commercial posts on platforms | Per combined follower count |
| Logo | Company logo usage | Per company (by employee count) |
| Broadcast | TV/streaming ads | Per impression count |

**Key Details:**
- Licenses are purchased PER WEIGHT used
- Multiple use types require separate licenses
- Upgradeable: Pay difference when scaling up
- Corporate/enterprise: Contact directly

### Technical Availability

| Platform | Available | Details |
|----------|-----------|---------|
| Google Fonts | NO | - |
| Adobe Fonts | NO | - |
| Self-hosted | YES | Purchase from Pangram Pangram |
| Trial Download | YES | Free for personal/portfolio use |

**File Formats Available:**
- OTF (OpenType)
- TTF (TrueType)
- WOFF (Web Open Font Format)
- WOFF2 (Compressed WOFF)

### Weight/Style Availability

Right Didone is exceptionally comprehensive with 8 subfamilies:

**Complete Family (56 Styles + Variable Fonts):**

| Subfamily | Styles | Variable | Character |
|-----------|--------|----------|-----------|
| Right Didone Standard | 7 | Yes | Base proportions |
| Tall | 7 | Yes | Elongated |
| Tight | 7 | Yes | Compressed |
| Narrow | 7 | Yes | Condensed |
| Compact | 7 | Yes | Reduced height |
| Casual | 7 | Yes | Relaxed feel |
| Wide | 7 | Yes | Expanded |
| Spatial | 7 | Yes | Open spacing |
| Italic | 7 | Yes | True italic |

**Weight Distribution (per subfamily):**

| Weight | Available | Name |
|--------|-----------|------|
| 100 | YES | Thin |
| 200 | YES | Light |
| 300 | YES | Book |
| 400 | YES | Regular |
| 500 | YES | Medium |
| 600 | YES | SemiBold |
| 700 | YES | Bold |

**Essentials Family (4 Styles):**
- Regular (400)
- Italic (400)
- Bold (700)
- Bold Italic (700 italic)

**Glyph Count:** 564 glyphs per style
**Language Support:** 60+ languages (Latin, extended European, African)

### Implementation Code

**Self-Hosted Setup:**

```html
<!-- In <head> -->
<link rel="preload" href="/fonts/right-didone/RightDidone-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/right-didone/RightDidone-Italic.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/fonts/right-didone/right-didone.css">
```

**CSS Font-Face Declaration:**

```css
/* right-didone.css */
@font-face {
  font-family: 'Right Didone';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/right-didone/RightDidone-Regular.woff2') format('woff2'),
       url('/fonts/right-didone/RightDidone-Regular.woff') format('woff');
}

@font-face {
  font-family: 'Right Didone';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/right-didone/RightDidone-Italic.woff2') format('woff2'),
       url('/fonts/right-didone/RightDidone-Italic.woff') format('woff');
}

@font-face {
  font-family: 'Right Didone';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/right-didone/RightDidone-Bold.woff2') format('woff2'),
       url('/fonts/right-didone/RightDidone-Bold.woff') format('woff');
}
```

**CSS Variables:**

```css
:root {
  --font-display: 'Right Didone', 'Didot', 'Bodoni MT', Georgia, serif;
  --font-display-condensed: 'Right Didone Tight', 'Right Didone', 'Didot', Georgia, serif;
}

/* Usage */
.hero-headline {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(3rem, 8vw, 6rem);
  letter-spacing: -0.02em;
  line-height: 1.0;
}

.article-title {
  font-family: var(--font-display);
  font-weight: 400;
  font-style: italic;
  font-size: 2rem;
}
```

### Assessment

| Aspect | Rating | Notes |
|--------|--------|-------|
| **Visual Match** | EXCELLENT | Closest to reference, curved R, G spur present |
| **Flexibility** | EXCELLENT | 8 subfamilies, variable fonts, 56+ styles |
| **Integration** | MODERATE | Self-hosted only, requires purchase |
| **Cost** | MODERATE | $40+ starting, scales with use |
| **Risk** | LOW | Established foundry, well-documented |

**Recommendation:** USE for professional/commercial projects where budget allows and maximum visual accuracy to the Sanrok aesthetic is required.

**If unavailable, fallback to:** Instrument Serif (authentic Sanrok choice) or Bodoni Moda (best free Didone)

**Compromises with fallback:**
- Instrument Serif: Different classification (old style vs. Didone), single weight only
- Bodoni Moda: Missing G spur, more traditional/scholarly aesthetic

---

## Recommendation 2: Instrument Serif

### Match Quality: 30/40 (3.75/5) - ACTUAL SANROK FONT

[Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) is the verified font actually used on Sanrok Studio's website. Created by Rodrigo Fuenzalida for the Instrument brand, it's a condensed display serif with contemporary character.

### Licensing

| Aspect | Details |
|--------|---------|
| **License Type** | SIL Open Font License 1.1 (OFL) |
| **Cost** | FREE |
| **Commercial Use** | YES - Unlimited |
| **Web Use** | YES - Unlimited |
| **Modification** | YES - With attribution |
| **Distribution** | YES - Must include license |

**What OFL Allows:**
- Use in any project (personal, commercial, client work)
- Embed in apps, websites, PDFs
- Modify and create derivative works
- Bundle with other software
- No royalties, no attribution required (but appreciated)

**What OFL Requires:**
- Include license file with redistributed fonts
- Derivative fonts must use different name
- Cannot sell font files alone

### Technical Availability

| Platform | Available | Details |
|----------|-----------|---------|
| Google Fonts | YES | Native CDN integration |
| Adobe Fonts | YES | Available for CC subscribers |
| Fontsource | YES | npm package available |
| Self-hosted | YES | Download from Google Fonts or GitHub |

**File Formats Available:**
- WOFF2
- WOFF
- TTF

**Character Set:**
- 374 Latin glyphs
- 86 languages supported
- Standard + Discretionary ligatures
- Ordinals and special characters

### Weight/Style Availability

| Weight | Roman | Italic | Notes |
|--------|-------|--------|-------|
| 400 (Regular) | YES | YES | Only weight available |

**Important Limitations:**
- **NO Bold** (700) weight
- **NO Medium** (500) weight
- **NO Variable font**
- **Only 2 styles total** (Regular + Italic)

### Implementation Code

**Google Fonts (Easiest):**

```html
<!-- In <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
```

**Fontsource (npm):**

```bash
npm install @fontsource/instrument-serif
```

```javascript
// In your JS/TS entry file
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
```

**Self-Hosted:**

```css
@font-face {
  font-family: 'Instrument Serif';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/instrument-serif/InstrumentSerif-Regular.woff2') format('woff2'),
       url('/fonts/instrument-serif/InstrumentSerif-Regular.woff') format('woff');
}

@font-face {
  font-family: 'Instrument Serif';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/instrument-serif/InstrumentSerif-Italic.woff2') format('woff2'),
       url('/fonts/instrument-serif/InstrumentSerif-Italic.woff') format('woff');
}
```

**CSS Variables:**

```css
:root {
  --font-display: 'Instrument Serif', Georgia, 'Times New Roman', serif;
}

/* Usage - Display headlines only */
.hero-headline {
  font-family: var(--font-display);
  font-weight: 400; /* Only weight available */
  font-size: clamp(3rem, 10vw, 7rem);
  letter-spacing: -0.02em;
  line-height: 0.95;
}

/* Italic for emphasis */
.editorial-subhead {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.5rem;
}
```

### Assessment

| Aspect | Rating | Notes |
|--------|--------|-------|
| **Authenticity** | EXCELLENT | Actual Sanrok website font |
| **Cost** | EXCELLENT | Completely free |
| **Integration** | EXCELLENT | Google Fonts, npm, CDN options |
| **Weight Variety** | POOR | Single weight only |
| **Classification** | DIFFERENT | Old style serif, not Didone |

**Recommendation:** USE when authenticity to actual Sanrok implementation matters more than Didone accuracy, or when budget is zero.

**If unavailable, fallback to:** Bodoni Moda or Libre Bodoni

**Compromises with fallback:**
- Bodoni Moda: More traditional, Didone vs. old style, missing the condensed display character
- Libre Bodoni: Warmer, wider proportions, less editorial edge

**Pairing Recommendation:**
Instrument Serif is designed to pair with **Instrument Sans** or **Inter** for body text.

---

## Recommendation 3: Bodoni Moda

### Match Quality: 28/40 (3.50/5) - BEST FREE DIDONE

[Bodoni Moda](https://fonts.google.com/specimen/Bodoni+Moda) by Indestructible Type is the most comprehensive free Didone available. It offers full weight range, optical sizes, and variable font support.

### Licensing

| Aspect | Details |
|--------|---------|
| **License Type** | SIL Open Font License 1.1 (OFL) |
| **Cost** | FREE |
| **Commercial Use** | YES - Unlimited |
| **Web Use** | YES - Unlimited |
| **Modification** | YES - With attribution |

Same permissions as Instrument Serif - completely free for any use.

### Technical Availability

| Platform | Available | Details |
|----------|-----------|---------|
| Google Fonts | YES | Native CDN integration |
| Adobe Fonts | YES | As "Bodoni Moda Variable" |
| Fontsource | YES | npm package available |
| Self-hosted | YES | Download from Google Fonts or GitHub |

**File Formats Available:**
- WOFF2
- WOFF
- TTF
- Variable font files

### Weight/Style Availability

**Static Weights:**

| Weight | Roman | Italic | Name |
|--------|-------|--------|------|
| 400 | YES | YES | Regular |
| 500 | YES | YES | Medium |
| 600 | YES | YES | SemiBold |
| 700 | YES | YES | Bold |
| 800 | YES | YES | ExtraBold |
| 900 | YES | YES | Black |

**Variable Font Axes:**

| Axis | Code | Range | Description |
|------|------|-------|-------------|
| Weight | wght | 400-900 | Continuous weight control |
| Italic | ital | 0-1 | Slant interpolation |
| Optical Size | opsz | 6-96 | Size optimization |

**Total Configurations:** 64 font files (static) + 2 variable files

**Glyph Coverage:**
- Full Latin extended
- Math symbols
- Special characters

**Note on G Spur:** Bodoni Moda does NOT have the horizontal G spur found in the reference. The G is traditional Bodoni style with a simple bar.

### Implementation Code

**Google Fonts (Static):**

```html
<!-- In <head> - Static fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&display=swap" rel="stylesheet">
```

**Google Fonts (Variable - Recommended):**

```html
<!-- Variable font for optimal flexibility -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&display=swap" rel="stylesheet">
```

**Fontsource (npm):**

```bash
npm install @fontsource-variable/bodoni-moda
```

```javascript
// Variable font import
import '@fontsource-variable/bodoni-moda';
```

**Self-Hosted Variable:**

```css
@font-face {
  font-family: 'Bodoni Moda';
  font-style: normal;
  font-weight: 400 900;
  font-display: swap;
  src: url('/fonts/bodoni-moda/BodoniModa-Variable.woff2') format('woff2-variations');
}

@font-face {
  font-family: 'Bodoni Moda';
  font-style: italic;
  font-weight: 400 900;
  font-display: swap;
  src: url('/fonts/bodoni-moda/BodoniModa-Italic-Variable.woff2') format('woff2-variations');
}
```

**CSS Variables:**

```css
:root {
  --font-display: 'Bodoni Moda', 'Didot', 'Bodoni MT', Georgia, serif;
}

/* Usage with variable font features */
.hero-headline {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(3rem, 8vw, 6rem);
  font-variation-settings: 'opsz' 96; /* Large optical size */
  letter-spacing: -0.02em;
  line-height: 1.0;
}

.article-title {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 2rem;
  font-variation-settings: 'opsz' 24;
}

.body-text-drop-cap {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 4rem;
  font-variation-settings: 'opsz' 72;
  float: left;
  line-height: 0.8;
}
```

### Assessment

| Aspect | Rating | Notes |
|--------|--------|-------|
| **Didone Authenticity** | GOOD | True Didone with extreme contrast |
| **Cost** | EXCELLENT | Completely free |
| **Weight Variety** | EXCELLENT | 400-900, full italic support |
| **Variable Font** | EXCELLENT | Weight + optical size axes |
| **G Spur** | MISSING | Traditional G without spur |

**Recommendation:** USE when free Didone authenticity matters and the missing G spur is acceptable. Best choice for projects needing multiple weights within a Didone family.

**If unavailable, fallback to:** Libre Bodoni

**Compromises with fallback:**
- Libre Bodoni: Fewer weights (400-700), warmer character, more traditional

---

## Decision Matrix

| Aspect | Right Didone | Instrument Serif | Bodoni Moda |
|--------|--------------|------------------|-------------|
| **Match Score** | 34/40 (BEST) | 30/40 | 28/40 |
| **Cost** | $40+ | FREE | FREE |
| **Integration** | Self-host only | Google Fonts | Google Fonts |
| **G Spur** | YES | YES | NO |
| **Italic** | YES (all weights) | YES (400 only) | YES (all weights) |
| **Bold** | YES (700) | NO | YES (700-900) |
| **Variable Font** | YES | NO | YES |
| **Optical Sizes** | NO | NO | YES (6-96) |
| **Weights Available** | 7 per subfamily | 1 | 6 |
| **Classification** | Didone | Old Style | Didone |
| **Setup Difficulty** | Moderate | Easy | Easy |

---

## Final Recommendations by Use Case

### For Maximum Visual Accuracy
**USE: Right Didone (Tight or Narrow subfamily)**

Best when:
- Budget is available ($40+)
- Matching the Sanrok reference aesthetic exactly matters
- You need multiple widths or weights
- Commercial/professional project

### For Authentic Sanrok Reproduction
**USE: Instrument Serif**

Best when:
- You want exactly what Sanrok uses
- Budget is zero
- Single-weight display headlines are sufficient
- Speed of implementation matters (Google Fonts)

### For Best Free Didone
**USE: Bodoni Moda**

Best when:
- Budget is zero
- Multiple weights are needed
- Variable font features are valuable
- The missing G spur is acceptable
- Optical sizes for different scales are needed

### Recommended Combination (Free Stack)
```css
/* Optimal free typography stack */
:root {
  --font-display: 'Instrument Serif', Georgia, serif;     /* Headlines */
  --font-subhead: 'Bodoni Moda', 'Didot', serif;          /* Subheads, quotes */
  --font-body: 'Inter', -apple-system, sans-serif;        /* Body text */
}
```

### Recommended Combination (Premium Stack)
```css
/* Premium typography stack */
:root {
  --font-display: 'Right Didone Tight', 'Didot', serif;   /* Headlines */
  --font-subhead: 'Right Didone', 'Didot', serif;         /* Subheads */
  --font-body: 'Inter', -apple-system, sans-serif;        /* Body text */
}
```

---

## Implementation Priority

1. **Quick Start (Free):** Use Instrument Serif from Google Fonts for immediate implementation
2. **Weight Flexibility (Free):** Add Bodoni Moda for subheads and secondary display text
3. **Premium Upgrade:** Purchase Right Didone licenses when budget allows for maximum accuracy

---

## Sources

- [Right Didone - Pangram Pangram Foundry](https://pangrampangram.com/products/right-didone)
- [Pangram Pangram FAQ (Licensing)](https://pangrampangram.com/pages/faq)
- [Instrument Serif - Google Fonts](https://fonts.google.com/specimen/Instrument+Serif)
- [Instrument Serif - GitHub](https://github.com/Instrument/instrument-serif)
- [Bodoni Moda - Google Fonts](https://fonts.google.com/specimen/Bodoni+Moda)
- [Bodoni Moda - Fontsource](https://fontsource.org/fonts/bodoni-moda)
- [Beautiful Web Type - Instrument Serif](https://beautifulwebtype.com/instrument-serif/)

---

## Document Metadata

- **Analysis Date:** 2026-02-02
- **Purpose:** Availability & Feasibility Analysis for Sanrok Font Match
- **Analyst:** Claude Code (Sub-Agent 1F)
- **Related Documents:**
  - `comparisons/RANKING-SUMMARY.md`
  - `comparisons/comparison-*.md`
  - `specimens/specimen-*.md`

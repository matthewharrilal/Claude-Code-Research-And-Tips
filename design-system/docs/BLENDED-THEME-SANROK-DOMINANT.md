# Blended Theme: Sanrok-Dominant

A harmonious fusion of three distinct aesthetics with Sanrok as the primary visual identity, enriched by Medieval ornamental elegance and Nous textural depth.

---

## Design Philosophy

**Core Concept:** "Elegant Innovation with Heritage Depth"

This blend takes Sanrok's warm, contemporary agency aesthetic and elevates it with:
- Medieval's sense of ceremony and craft (ornamental flourishes)
- Nous's visual texture and energy (repetition patterns as subtle backgrounds)

The result is a design language that feels both timeless and cutting-edge.

---

## Contribution from Each Aesthetic

### Sanrok (80% - Dominant)
| Element | What It Brings | Specific Implementation |
|---------|----------------|------------------------|
| Color Identity | Pure red `#FF0000` as primary accent | All CTAs, highlights, active states |
| Typography Soul | Instrument Serif display font | Hero text, H1, H2 headings |
| Background Warmth | Cream `#FBF5EF` backgrounds | Page backgrounds, section separators |
| Photo Treatment | Red duotone overlay | Team cards, featured images |
| Component Style | Rounded corners, soft shadows | Cards, buttons, navigation |
| Spatial Feel | Generous whitespace, floating elements | Overall layout rhythm |

### Medieval (12% - Accent)
| Element | What It Brings | Specific Implementation |
|---------|----------------|------------------------|
| Ornamental Details | `⚜` fleur-de-lis, `❧` flourishes | Section dividers, special callouts |
| Sense of Ceremony | Formal structure | Important announcements, headers |
| Crafted Typography | Decorative initial caps (optional) | Feature articles, long-form content |
| Gold Accent | `#C4A35A` medieval gold | Premium tier indicators, awards |

### Nous (8% - Texture)
| Element | What It Brings | Specific Implementation |
|---------|----------------|------------------------|
| Visual Energy | Repetition patterns | Subtle background textures (3-5% opacity) |
| Structural Boldness | Thick borders (used sparingly) | Hero frames, featured content boxes |
| Contrast Moments | Black/white maximum contrast | Footer, inverted hero sections |
| Dynamic Feeling | Condensed sans texture | Background word patterns |

---

## Color Palette

### Primary Colors
```css
:root {
  /* Sanrok Foundation */
  --blend-primary: #FF0000;           /* Pure Sanrok red - CTAs, accents */
  --blend-primary-dark: #CC0000;      /* Hover state */
  --blend-primary-light: #FF3333;     /* Subtle highlights */

  /* Background System */
  --blend-bg-page: #FBF5EF;           /* Warm cream - primary background */
  --blend-bg-card: #FFFFFF;           /* Pure white - cards, elevated surfaces */
  --blend-bg-subtle: #F8F4ED;         /* Slightly deeper cream - alternating sections */

  /* Text Colors */
  --blend-text-primary: #171717;      /* Near-black - headings, body */
  --blend-text-secondary: #4A4A4A;    /* Dark gray - secondary content */
  --blend-text-muted: #B0B0B0;        /* Muted - labels, metadata */
  --blend-text-inverse: #FFFFFF;      /* White - on dark backgrounds */
}
```

### Accent Colors (from Medieval/Nous)
```css
:root {
  /* Medieval Accents */
  --blend-accent-gold: #C4A35A;       /* Premium indicators, awards */
  --blend-accent-royal: #1A44B8;      /* Special callouts, links (optional) */

  /* Nous Structural */
  --blend-contrast-black: #000000;    /* Maximum contrast when needed */
  --blend-contrast-white: #FFFFFF;    /* Inverted sections */

  /* Ornament Color */
  --blend-ornament: #FF0000;          /* Divider ornaments use primary red */
}
```

### Semantic Colors
```css
:root {
  /* State Colors */
  --blend-success: #22C55E;
  --blend-warning: #F59E0B;
  --blend-error: #EF4444;
  --blend-info: #3B82F6;

  /* Border Colors */
  --blend-border-subtle: rgba(0, 0, 0, 0.08);
  --blend-border-medium: rgba(0, 0, 0, 0.15);
  --blend-border-strong: #171717;
}
```

---

## Typography Hierarchy

### Font Stack
```css
:root {
  /* Display (from Sanrok) - The visual identity */
  --blend-font-display: 'Instrument Serif', 'Playfair Display', Georgia, serif;

  /* Body (from Sanrok) */
  --blend-font-body: 'Inter', system-ui, -apple-system, sans-serif;

  /* Texture (from Nous) - Background patterns only */
  --blend-font-condensed: 'Inter Tight', 'Roboto Condensed', sans-serif;

  /* Code */
  --blend-font-mono: 'JetBrains Mono', 'SF Mono', Monaco, monospace;

  /* Optional: Medieval accent (use sparingly) */
  --blend-font-blackletter: 'UnifrakturMaguntia', 'Old English Text MT', serif;
}
```

### Type Scale
```css
:root {
  /* Hero - Sanrok viewport-filling style */
  --blend-text-hero: clamp(4rem, 12vw, 11rem);

  /* Headings */
  --blend-text-h1: 4.209rem;    /* 67px - Instrument Serif */
  --blend-text-h2: 3.157rem;    /* 50px - Instrument Serif */
  --blend-text-h3: 2.369rem;    /* 38px - Inter Semibold */
  --blend-text-h4: 1.777rem;    /* 28px - Inter Semibold */

  /* Body */
  --blend-text-lg: 1.333rem;    /* 21px - Lead paragraphs */
  --blend-text-base: 1rem;      /* 16px - Body text */
  --blend-text-sm: 0.875rem;    /* 14px - Small text, labels */
  --blend-text-xs: 0.625rem;    /* 10px - Metadata */
}
```

### Typography Assignments
| Level | Font | Weight | Tracking | Usage |
|-------|------|--------|----------|-------|
| Hero | Instrument Serif | 400 (normal) | -0.03em | Homepage hero, major headlines |
| H1 | Instrument Serif | 400 | -0.02em | Page titles |
| H2 | Instrument Serif | 400 | -0.02em | Section headers |
| H3 | Inter | 600 (semibold) | 0 | Subsection headers |
| H4 | Inter | 600 | 0 | Card titles |
| Body | Inter | 400 | 0 | Paragraphs |
| Label | Inter | 500 | 0.05em | Uppercase metadata |
| Ornament text | Inter Tight | 700 | -0.03em | Background patterns (Nous) |

---

## Components to Showcase the Blend

### 1. Hero Section with Textured Background
**Demonstrates:** Sanrok typography + Nous repetition texture

```tsx
// Hero with subtle word repetition background
<section className="blend-hero">
  {/* Nous-style repetition at very low opacity */}
  <div className="blend-hero__texture" aria-hidden="true">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="blend-hero__texture-line">
        INNOVATION · INNOVATION · INNOVATION · INNOVATION
      </div>
    ))}
  </div>

  {/* Sanrok-style hero text */}
  <h1 className="blend-hero__title">
    <span className="italic">Creative</span>{' '}
    <span>Agency</span>
  </h1>

  {/* Medieval ornamental divider below */}
  <div className="blend-hero__divider">
    <span className="blend-hero__divider-line" />
    <span className="blend-hero__divider-ornament">⚜</span>
    <span className="blend-hero__divider-line" />
  </div>
</section>
```

**CSS Tokens:**
```css
.blend-hero {
  background: var(--blend-bg-page);
  padding: var(--space-24) var(--space-8);
  position: relative;
  overflow: hidden;
}

.blend-hero__texture {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: none;
}

.blend-hero__texture-line {
  font-family: var(--blend-font-condensed);
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
  white-space: nowrap;
  color: var(--blend-primary);
  opacity: 0.04;  /* Very subtle - just adds texture */
}

.blend-hero__title {
  font-family: var(--blend-font-display);
  font-size: var(--blend-text-hero);
  font-weight: 400;
  line-height: 0.85;
  letter-spacing: -0.03em;
  color: var(--blend-text-primary);
  text-align: center;
  position: relative;
  z-index: 1;
}

.blend-hero__title .italic {
  font-style: italic;
}

.blend-hero__divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  margin-top: var(--space-8);
  color: var(--blend-primary);
}

.blend-hero__divider-line {
  width: 80px;
  height: 1px;
  background: currentColor;
}

.blend-hero__divider-ornament {
  font-size: 1.5rem;
}
```

---

### 2. Ornamental Section Divider
**Demonstrates:** Medieval flourishes + Sanrok color

```tsx
// Section divider with medieval ornament in Sanrok red
<div className="blend-divider">
  <div className="blend-divider__line" />
  <span className="blend-divider__ornament">⚜</span>
  <div className="blend-divider__line" />
</div>

// Variant with flourish
<div className="blend-divider blend-divider--flourish">
  <div className="blend-divider__line" />
  <span className="blend-divider__ornament">❧</span>
  <div className="blend-divider__line" />
</div>
```

**CSS Tokens:**
```css
.blend-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) 0;
  max-width: 400px;
  margin: 0 auto;
}

.blend-divider__line {
  flex: 1;
  height: 1px;
  background: var(--blend-primary);
  opacity: 0.6;
}

.blend-divider__ornament {
  font-size: 1.5rem;
  color: var(--blend-primary);
}

/* Double line variant (more medieval) */
.blend-divider--double .blend-divider__line {
  height: auto;
  border-top: 1px solid var(--blend-primary);
  border-bottom: 1px solid var(--blend-primary);
  padding: 2px 0;
  opacity: 0.4;
}
```

---

### 3. Team Member Card with Enhanced Treatment
**Demonstrates:** Sanrok card style + duotone + Medieval rank badge

```tsx
<div className="blend-team-card">
  {/* Duotone image (Sanrok style) */}
  <div className="blend-team-card__image">
    <img src="/team/person.jpg" alt="" />
    <div className="blend-team-card__image-overlay" />

    {/* Rank badge with gold accent (Medieval influence) */}
    <div className="blend-team-card__rank">
      <span className="blend-team-card__rank-ornament">✦</span>
      <span className="blend-team-card__rank-number">1</span>
    </div>
  </div>

  <div className="blend-team-card__content">
    <h4 className="blend-team-card__name">Alex Chen</h4>
    <p className="blend-team-card__role">Lead Designer</p>
  </div>
</div>
```

**CSS Tokens:**
```css
.blend-team-card {
  background: var(--blend-bg-card);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: transform 250ms ease;
}

.blend-team-card:hover {
  transform: translateY(-4px);
}

.blend-team-card__image {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
}

.blend-team-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.3) brightness(1.1);
}

/* Red duotone overlay */
.blend-team-card__image-overlay {
  position: absolute;
  inset: 0;
  background: var(--blend-primary);
  mix-blend-mode: multiply;
  opacity: 0.85;
}

/* Enhanced rank badge with medieval star ornament */
.blend-team-card__rank {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background: var(--blend-primary);
  color: var(--blend-text-inverse);
  padding: 6px 10px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
}

.blend-team-card__rank-ornament {
  font-size: 0.625rem;
  color: var(--blend-accent-gold);
}

.blend-team-card__content {
  padding: 1rem;
}

.blend-team-card__name {
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--blend-text-primary);
  margin-bottom: 4px;
}

.blend-team-card__role {
  font-size: 10px;
  font-weight: 500;
  color: var(--blend-text-muted);
  margin: 0;
}
```

---

### 4. Featured Content Box
**Demonstrates:** Nous thick border + Sanrok warmth + Medieval ornament corners

```tsx
<div className="blend-feature-box">
  {/* Corner ornaments (Medieval) */}
  <span className="blend-feature-box__corner blend-feature-box__corner--tl">❧</span>
  <span className="blend-feature-box__corner blend-feature-box__corner--br">❧</span>

  {/* Content */}
  <h3 className="blend-feature-box__title">Featured Insight</h3>
  <p className="blend-feature-box__text">
    Our latest research reveals transformative patterns in user behavior...
  </p>
  <a href="#" className="blend-feature-box__link">Read More</a>
</div>
```

**CSS Tokens:**
```css
.blend-feature-box {
  position: relative;
  background: var(--blend-bg-card);
  border: 4px solid var(--blend-text-primary);  /* Nous-inspired thick border */
  padding: 2rem;
  margin: 2rem 0;
}

.blend-feature-box__corner {
  position: absolute;
  font-size: 1.25rem;
  color: var(--blend-primary);
  background: var(--blend-bg-page);  /* Match page background */
  padding: 0 0.5rem;
}

.blend-feature-box__corner--tl {
  top: -0.75rem;
  left: 1rem;
}

.blend-feature-box__corner--br {
  bottom: -0.75rem;
  right: 1rem;
  transform: rotate(180deg);
}

.blend-feature-box__title {
  font-family: var(--blend-font-display);
  font-size: var(--blend-text-h3);
  font-weight: 400;
  color: var(--blend-text-primary);
  margin-bottom: 1rem;
}

.blend-feature-box__text {
  font-size: var(--blend-text-base);
  line-height: 1.6;
  color: var(--blend-text-secondary);
  margin-bottom: 1.5rem;
}

.blend-feature-box__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--blend-primary);
  font-weight: 500;
  text-decoration: none;
}

.blend-feature-box__link:hover {
  text-decoration: underline;
}
```

---

### 5. Navigation with Ornamental Accent
**Demonstrates:** Sanrok pill navigation + Medieval flourish indicator

```tsx
<nav className="blend-nav">
  <div className="blend-nav__pills">
    {items.map((item) => (
      <button
        key={item.id}
        className={`blend-nav__item ${active === item.id ? 'blend-nav__item--active' : ''}`}
      >
        {active === item.id && (
          <>
            <span className="blend-nav__ornament">⚜</span>
            <span className="blend-nav__active-bg" />
          </>
        )}
        <span className="blend-nav__label">{item.label}</span>
      </button>
    ))}
  </div>
</nav>
```

**CSS Tokens:**
```css
.blend-nav {
  display: inline-flex;
  justify-content: center;
}

.blend-nav__pills {
  display: inline-flex;
  gap: 4px;
  background: var(--blend-bg-card);
  padding: 8px;
  border-radius: 9999px;
  box-shadow: var(--shadow-md);
}

.blend-nav__item {
  position: relative;
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--blend-text-primary);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 150ms ease;
}

.blend-nav__item:hover:not(.blend-nav__item--active) {
  background: rgba(0, 0, 0, 0.04);
}

.blend-nav__item--active {
  color: var(--blend-text-inverse);
}

.blend-nav__active-bg {
  position: absolute;
  inset: 0;
  background: var(--blend-text-primary);
  border-radius: 9999px;
  z-index: 0;
}

.blend-nav__label {
  position: relative;
  z-index: 1;
}

/* Small ornament above active item */
.blend-nav__ornament {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.625rem;
  color: var(--blend-primary);
  z-index: 2;
}
```

---

## Complete CSS Variables Export

```css
/**
 * Blended Theme: Sanrok-Dominant
 *
 * Sanrok (80%): Color identity, typography, warmth
 * Medieval (12%): Ornamental flourishes, ceremony
 * Nous (8%): Textural patterns, structural boldness
 */

[data-theme="blended"],
.theme-blended {
  /* === PRIMARY COLORS (Sanrok) === */
  --blend-primary: #FF0000;
  --blend-primary-dark: #CC0000;
  --blend-primary-light: #FF3333;
  --blend-primary-10: rgba(255, 0, 0, 0.1);
  --blend-primary-5: rgba(255, 0, 0, 0.05);

  /* === BACKGROUNDS (Sanrok) === */
  --blend-bg-page: #FBF5EF;
  --blend-bg-card: #FFFFFF;
  --blend-bg-subtle: #F8F4ED;
  --blend-bg-inverted: #171717;

  /* === TEXT (Sanrok) === */
  --blend-text-primary: #171717;
  --blend-text-secondary: #4A4A4A;
  --blend-text-muted: #B0B0B0;
  --blend-text-inverse: #FFFFFF;

  /* === ACCENTS (Medieval) === */
  --blend-accent-gold: #C4A35A;
  --blend-accent-royal: #1A44B8;

  /* === STRUCTURE (Nous) === */
  --blend-contrast-black: #000000;
  --blend-contrast-white: #FFFFFF;
  --blend-texture-opacity: 0.04;
  --blend-thick-border: 4px;

  /* === ORNAMENTS === */
  --blend-ornament-color: #FF0000;
  --blend-ornament-size: 1.5rem;

  /* === TYPOGRAPHY === */
  --blend-font-display: 'Instrument Serif', 'Playfair Display', Georgia, serif;
  --blend-font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --blend-font-condensed: 'Inter Tight', 'Roboto Condensed', sans-serif;
  --blend-font-mono: 'JetBrains Mono', 'SF Mono', Monaco, monospace;

  /* === TYPE SCALE === */
  --blend-text-hero: clamp(4rem, 12vw, 11rem);
  --blend-text-h1: 4.209rem;
  --blend-text-h2: 3.157rem;
  --blend-text-h3: 2.369rem;
  --blend-text-h4: 1.777rem;
  --blend-text-lg: 1.333rem;
  --blend-text-base: 1rem;
  --blend-text-sm: 0.875rem;
  --blend-text-xs: 0.625rem;

  /* === SPACING === */
  --blend-space-1: 0.25rem;
  --blend-space-2: 0.5rem;
  --blend-space-3: 0.75rem;
  --blend-space-4: 1rem;
  --blend-space-6: 1.5rem;
  --blend-space-8: 2rem;
  --blend-space-12: 3rem;
  --blend-space-16: 4rem;
  --blend-space-24: 6rem;

  /* === BORDERS === */
  --blend-border-subtle: rgba(0, 0, 0, 0.08);
  --blend-border-medium: rgba(0, 0, 0, 0.15);
  --blend-border-strong: #171717;
  --blend-radius-sm: 0.25rem;
  --blend-radius-md: 0.5rem;
  --blend-radius-lg: 0.75rem;
  --blend-radius-xl: 1rem;
  --blend-radius-full: 9999px;

  /* === SHADOWS === */
  --blend-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --blend-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --blend-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --blend-shadow-card: 0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 24px rgba(0, 0, 0, 0.06);

  /* === TRANSITIONS === */
  --blend-duration-fast: 150ms;
  --blend-duration-normal: 250ms;
  --blend-duration-slow: 400ms;
  --blend-ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --blend-ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## Usage Guidelines

### When to Use Medieval Elements
- Section dividers between major content blocks
- Premium/featured content callouts
- Awards, achievements, or milestone indicators
- Formal announcements or important notices
- Page headers for editorial content

### When to Use Nous Elements
- Hero backgrounds (word repetition at 3-5% opacity)
- Featured content boxes (thick borders)
- Section backgrounds for visual rhythm
- Inverted footer sections
- High-impact callout boxes

### When NOT to Mix
- Body text should always be Inter (Sanrok) - never use Blackletter for body
- Duotone should always be red (Sanrok) - never blue or black
- Navigation should stay minimal (Sanrok) - ornaments only for active states
- Cards should have soft shadows (Sanrok) - never thick Nous borders on cards

---

## Implementation Notes

### Font Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800&family=Inter+Tight:wght@700&display=swap" rel="stylesheet">
```

### Required Ornament Characters
Ensure these Unicode characters render correctly:
- `⚜` (U+269C) - Fleur-de-lis
- `❧` (U+2767) - Rotated floral heart bullet
- `✦` (U+2726) - Black four-pointed star
- `✠` (U+2720) - Maltese cross (optional)

### Accessibility
- Repetition patterns must have `aria-hidden="true"`
- Ornamental dividers should not convey meaning
- Maintain 4.5:1 contrast ratio for all text
- Decorative elements should be purely visual

---

## Visual Reference Summary

| Aspect | Source | Implementation |
|--------|--------|----------------|
| Primary color | Sanrok | `#FF0000` everywhere |
| Display font | Sanrok | Instrument Serif for H1/H2/Hero |
| Backgrounds | Sanrok | Warm cream `#FBF5EF` |
| Cards | Sanrok | Rounded corners, soft shadows |
| Dividers | Medieval | `⚜` ornaments in Sanrok red |
| Callout boxes | Medieval + Nous | Thick borders with corner flourishes |
| Backgrounds | Nous | Word repetition at 3-5% opacity |
| Photo treatment | Sanrok | Red duotone overlay |
| Premium indicators | Medieval | Gold accent `#C4A35A` |

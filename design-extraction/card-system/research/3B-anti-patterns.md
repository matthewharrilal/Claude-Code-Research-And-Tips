# Anti-Patterns: What Makes Cards Generic

## Research Document 3B
**Sub-Agent:** 3B
**Task:** Document generic card patterns to avoid
**Output:** Understanding of what NOT to build

---

## Executive Summary

Generic cards look the same across the web because they share specific CSS patterns: rounded corners, drop shadows, white backgrounds, pastel tags, and hover lift effects. The Sanrok approach inverts every single one of these choices to create editorial authenticity instead of SaaS sameness.

**The Core Insight:** Generic cards are designed to be "safe" and "universally acceptable." Sanrok cards are designed to be *memorable* and *opinionated*.

---

## 1. Bootstrap Card Analysis

### Default CSS Properties

Bootstrap cards are the most common baseline for web card patterns. Their defaults have become the de facto "generic" look.

```css
/* Bootstrap 5.3 Card Defaults */
.card {
  --bs-card-spacer-y: 1rem;
  --bs-card-spacer-x: 1rem;
  --bs-card-title-spacer-y: 0.5rem;
  --bs-card-border-width: 1px;
  --bs-card-border-color: rgba(0, 0, 0, 0.125);
  --bs-card-border-radius: 0.375rem;  /* 6px - THE GENERIC RADIUS */
  --bs-card-box-shadow: null;         /* No shadow by default */
  --bs-card-cap-bg: rgba(0, 0, 0, 0.03);
  --bs-card-bg: #fff;                 /* White background */
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: var(--bs-card-bg);
  background-clip: border-box;
  border: var(--bs-card-border-width) solid var(--bs-card-border-color);
  border-radius: var(--bs-card-border-radius);
}
```

**Source:** [Bootstrap 5.3 Cards Documentation](https://getbootstrap.com/docs/5.3/components/card/)

### WHY These Make Cards Generic

| Property | Bootstrap Value | Why Generic | Soul Impact |
|----------|-----------------|-------------|-------------|
| `border-radius` | `0.375rem` (6px) | Safe, inoffensive, "modern" default | Removes editorial edge |
| `background` | `#fff` | Creates a container feel | Content floats in a box |
| `border` | `1px solid rgba(0,0,0,0.125)` | Barely visible, non-committal | Neither minimal nor bold |
| `box-shadow` | `null` (none) | Bootstrap intentionally neutral | No depth philosophy |

### The Sanrok Alternative

```css
/* Sanrok Card Philosophy */
.sanrok-card {
  background: transparent;     /* Content IS the design */
  border-radius: 0;           /* Sharp = editorial = intentional */
  border: none;               /* Let content create edges */
  box-shadow: none;           /* Flat design, no fake depth */
}
```

---

## 2. Tailwind Card Patterns

### Common Utility Combinations

Tailwind doesn't have a built-in card component, but the community has converged on a standard pattern that defines "generic."

```html
<!-- The Generic Tailwind Card -->
<div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="..." alt="...">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Title</div>
    <p class="text-gray-700 text-base">Description</p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #tag
    </span>
  </div>
</div>
```

**Source:** [Tailwind CSS Cards](https://v1.tailwindcss.com/components/cards), [Flowbite Cards](https://flowbite.com/docs/components/card/)

### The Generic Class Stack

| Tailwind Classes | What They Do | Generic Impact |
|------------------|--------------|----------------|
| `rounded-lg` | `border-radius: 0.5rem` (8px) | The ubiquitous rounded corner |
| `shadow-lg` | Multi-layer shadow | "Floating card" effect |
| `bg-white` | White background | Content in a container |
| `overflow-hidden` | Clips content to radius | Enforces the roundness |
| `hover:shadow-xl` | Deeper shadow on hover | The "lift" effect |

### Shadow Values Decoded

```css
/* Tailwind shadow-lg (the most common) */
box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
            0 4px 6px -4px rgb(0 0 0 / 0.1);

/* Tailwind shadow-xl (hover state) */
box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
            0 8px 10px -6px rgb(0 0 0 / 0.1);
```

**Soul Impact:** These shadows create an illusion of physical depth that distances the content from the reader. It says "I am a UI element" instead of "I am content."

**Source:** [Tailwind Box Shadow](https://tailwindcss.com/docs/box-shadow)

### The Sanrok Alternative

```css
/* Sanrok-style Tailwind classes would be: */
/* bg-transparent rounded-none shadow-none border-0 */

/* Or with custom classes: */
.sanrok-card {
  @apply bg-transparent border-0;
  border-radius: 0;
  box-shadow: none;
}
```

---

## 3. Material Design Cards

### Core Specifications

Material Design explicitly codifies the "generic" look with scientific precision. They define elevation levels, shadow formulas, and corner radii as a system.

```css
/* Material Design 3 Card Elevation Shadows */

/* Level 0 - Flat */
box-shadow: none;

/* Level 1 - Elevated Card (default) */
box-shadow: 0px 1px 2px 0px rgb(0 0 0 / 30%),
            0px 1px 3px 1px rgb(0 0 0 / 15%);

/* Level 2 - Raised */
box-shadow: 0px 1px 2px 0px rgb(0 0 0 / 30%),
            0px 2px 6px 2px rgb(0 0 0 / 15%);

/* Level 3 - Overlay */
box-shadow: 0px 4px 8px 3px rgb(0 0 0 / 15%),
            0px 1px 3px 0px rgb(0 0 0 / 30%);
```

**Source:** [Material Design 3 Cards Specs](https://m3.material.io/components/cards/specs), [Material Design Elevation](https://m3.material.io/styles/elevation/applying-elevation)

### Material Design Card Types

| Type | Container | Elevation | Corner Radius |
|------|-----------|-----------|---------------|
| Elevated | Surface with shadow | Level 1 | 12dp |
| Filled | Colored background | Level 0 | 12dp |
| Outlined | Transparent + border | Level 0 | 12dp |

### The 12dp Corner Radius Problem

Material Design 3 standardizes `border-radius: 12px` for cards. This is everywhere:
- Every Android app
- Every Google product
- Every Material UI website
- Most React component libraries

**Soul Impact:** 12px radius is so ubiquitous that it reads as "default" not "designed."

### Shadow Opacity Formula

Material uses a specific opacity formula:
- Umbra: 20% opacity
- Penumbra: 14% opacity
- Ambient: 12% opacity

**Source:** [Material Design Elevation Shadows](https://m1.material.io/material-design/elevation-shadows.html)

### The Sanrok Alternative

```css
/* Material Design would say: */
.md-card {
  border-radius: 12px;
  box-shadow: 0px 1px 2px 0px rgb(0 0 0 / 30%),
              0px 1px 3px 1px rgb(0 0 0 / 15%);
}

/* Sanrok says: */
.sanrok-card {
  border-radius: 0;
  box-shadow: none;
}
```

---

## 4. SaaS Landing Page Cards

### The Pattern Convergence

SaaS landing pages have converged on identical card patterns because they optimize for "trust" and "professionalism" - which translates to "sameness."

### Common SaaS Card Pattern

```css
/* The Standard SaaS Feature Card */
.saas-card {
  background: #ffffff;
  border-radius: 16px;           /* Even rounder than Material */
  padding: 24px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.saas-card:hover {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  transform: translateY(-5px);   /* THE LIFT EFFECT */
}
```

**Source:** [10 CSS Card Hover Effect Examples](https://www.subframe.com/tips/css-card-hover-effect-examples), [CSS Card Hover Effects](https://wpdean.com/css-card-hover-effects/)

### SaaS Tag Styling

```css
/* Generic SaaS Tag */
.saas-tag {
  background: #E5E7EB;           /* Light gray fill */
  /* Or pastel colors: */
  background: #E0E7FF;           /* Light indigo */
  background: #DCFCE7;           /* Light green */
  background: #FEE2E2;           /* Light red */

  border-radius: 9999px;         /* Pill shape */
  padding: 4px 12px;
  font-size: 12px;
  color: #374151;                /* Gray text */
}
```

### The SaaS Testimonial Card

```css
/* Every SaaS testimonial card */
.testimonial-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.testimonial-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;             /* Circle */
}
```

**Soul Impact:** When everything looks the same, nothing stands out. SaaS cards are designed for conversion, not communication.

### The Sanrok Alternative

```css
/* Sanrok Testimonial */
.sanrok-testimonial {
  background: transparent;
  border-radius: 0;
  border-left: 4px solid #FF0000;  /* Bold accent */
}

/* Sanrok Tag */
.sanrok-tag {
  background: transparent;
  border: 1px solid currentColor;  /* Outline only */
  border-radius: 0;                /* Square tag */
}
```

---

## 5. Complete Anti-Pattern Table

| Category | Generic Pattern | Sanrok Alternative | Soul Difference |
|----------|-----------------|-------------------|-----------------|
| **CORNERS** | | | |
| Border Radius | `4-16px` | `0` | Sharp = editorial confidence |
| Pill Tags | `9999px` radius | `0` (square) | Tags are content, not candy |
| **DEPTH** | | | |
| Box Shadow | Multi-layer soft | `none` | Flat = honest = editorial |
| Hover Shadow | Deeper shadow | No change | Content, not interactive element |
| Elevation | Level 1-3 | Level 0 | Cards don't float |
| **BACKGROUNDS** | | | |
| Card BG | `#ffffff` | `transparent` | Content defines space |
| Tag BG | Pastel fill | `transparent` | Outline > fill |
| Container Feel | Enclosed | Borderless | Content breathes |
| **ANIMATION** | | | |
| Hover Transform | `translateY(-5px)` | `none` | Cards don't move |
| Transitions | `0.3-0.4s` ease | Minimal/none | No gimmicks |
| **TYPOGRAPHY** | | | |
| Tag Font | Sans-serif small | Uppercase tracking | Visual hierarchy |
| Title Font | Sans-serif bold | Serif italic | Editorial confidence |

---

## 6. "The Safe Card" - What NOT to Build

This CSS represents every generic card on the internet. **DO NOT USE.**

```css
/* THE SAFE CARD - Everything wrong with modern web cards */
.safe-card {
  /* Container styling */
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;

  /* Shadow - the cardinal sin */
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.08),
    0 4px 6px rgba(0, 0, 0, 0.05);

  /* Hover - lift effect */
  transition: all 0.3s ease;
}

.safe-card:hover {
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}

/* Generic padding */
.safe-card__content {
  padding: 20px;
}

/* Generic tag */
.safe-card__tag {
  background: #E5E7EB;
  border-radius: 9999px;
  padding: 4px 12px;
  font-size: 12px;
  color: #6B7280;
}

/* Generic title */
.safe-card__title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #111827;
  margin-bottom: 8px;
}

/* Generic description */
.safe-card__description {
  font-size: 14px;
  color: #6B7280;
  line-height: 1.5;
}
```

### Why This Fails

1. **Rounded corners** - Says "I'm friendly and modern" but means nothing
2. **White background** - Creates a container instead of letting content speak
3. **Multi-layer shadow** - Fake depth for fake importance
4. **Hover lift** - Treating content cards like buttons
5. **Pill tags** - Decorative candy instead of information
6. **Gray text** - Low contrast, low commitment

---

## 7. "The Sanrok Card" - What TO Build

This CSS represents the Sanrok editorial philosophy. **USE THIS.**

```css
/* THE SANROK CARD - Editorial confidence */
.sanrok-card {
  /* NO container styling */
  background: transparent;
  border-radius: 0;
  border: none;
  box-shadow: none;

  /* Optional: accent border for grouping */
  /* border-left: 4px solid var(--sanrok-red); */
}

/* NO hover effects on content cards */
.sanrok-card:hover {
  /* Nothing. Cards are content, not buttons. */
}

/* Content padding */
.sanrok-card__content {
  padding: 0;  /* Content defines its own space */
}

/* Sanrok tag - outline style */
.sanrok-card__tag {
  background: transparent;
  border: 1px solid currentColor;
  border-radius: 0;
  padding: 4px 8px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--sanrok-red);
}

/* Sanrok title - editorial serif */
.sanrok-card__title {
  font-family: 'Instrument Serif', Georgia, serif;
  font-weight: 400;
  font-style: italic;
  font-size: 24px;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

/* Sanrok description */
.sanrok-card__description {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Level badge - bold and direct */
.sanrok-card__level {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--sanrok-red);
  color: white;
  font-weight: 700;
  font-size: 18px;
  /* NO border-radius - square */
}
```

### Why This Works

1. **Zero radius** - Sharp corners are editorial, confident, intentional
2. **Transparent background** - Content creates its own visual space
3. **No shadow** - Honest flatness, no fake depth
4. **No hover transform** - Cards are content, not interactive elements
5. **Outline tags** - Information, not decoration
6. **Serif italic titles** - Editorial personality, not generic sans-serif
7. **Strong accent colors** - Bold #FF0000, not muted pastels

---

## 8. BANNED PROPERTIES LIST

### Absolutely Forbidden

| Property | Banned Values | Rationale |
|----------|---------------|-----------|
| `border-radius` | `> 0` | Sharp corners are editorial |
| `box-shadow` | Any value | Flat design, no fake depth |
| `transform` on hover | `translateY(*)` | Content doesn't lift |
| `background` (card) | `#fff`, grays | Transparent or accent only |
| `background` (tag) | Pastel fills | Outline style only |
| `font-family` (title) | Sans-serif | Serif for editorial |

### Allowed Values

| Property | Allowed Values | When to Use |
|----------|----------------|-------------|
| `border-radius` | `0` | Always |
| `box-shadow` | `none` | Always |
| `background` | `transparent` | Default |
| `background` | `var(--sanrok-red)` | Level badges only |
| `border` | `1px solid currentColor` | Tags only |
| `border-left` | `4px solid var(--sanrok-red)` | Quote cards, callouts |

### Conditional Properties

| Scenario | Allowed | Notes |
|----------|---------|-------|
| Level badge | Filled background, NO radius | Square with brand color |
| Quote card | Left border accent | 4px solid, sharp corners |
| Interactive card link | Subtle opacity change | `opacity: 0.9` on hover max |
| Tag | Border only, no fill | `border: 1px solid` |

---

## Visual Comparison

### Generic vs Sanrok - Side by Side

```
GENERIC CARD                        SANROK CARD
+---------------------------+
|  +-------------------+    |       +-+
|  |     IMAGE         |    |       |4| The Ralph Wiggum Loop
|  +-------------------+    |       +-+
|                           |           by Matt Pocock
|  Title Here               |
|                           |       Continuous iteration pattern
|  Description text that    |       that never stops until you do.
|  wraps to multiple lines  |
|                           |       [ autonomous ] [ iteration ]
|  [ #tag ]  [ #tag ]       |
|                           |
|       [Learn More ->]     |
|                           |
+---------------------------+

^-- Container thinking            ^-- Content thinking
    - White box                       - Transparent
    - Rounded corners                 - Sharp edges
    - Shadow depth                    - Flat
    - Pill tags                       - Square outline tags
    - CTA button                      - Content is the action
```

---

## Sources

- [Bootstrap 5.3 Cards Documentation](https://getbootstrap.com/docs/5.3/components/card/)
- [Tailwind CSS Cards](https://v1.tailwindcss.com/components/cards)
- [Flowbite Cards](https://flowbite.com/docs/components/card/)
- [Tailwind Box Shadow](https://tailwindcss.com/docs/box-shadow)
- [Material Design 3 Cards Specs](https://m3.material.io/components/cards/specs)
- [Material Design 3 Elevation](https://m3.material.io/styles/elevation/applying-elevation)
- [Material Design Elevation Shadows](https://m1.material.io/material-design/elevation-shadows.html)
- [10 CSS Card Hover Effect Examples](https://www.subframe.com/tips/css-card-hover-effect-examples)
- [CSS Card Hover Effects](https://wpdean.com/css-card-hover-effects/)
- [CSS Box Shadow - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/box-shadow)
- [Expanded Use of Box-Shadow - Modern CSS](https://moderncss.dev/expanded-use-of-box-shadow-and-border-radius/)

---

## Key Takeaways for Implementation

1. **Start with `border-radius: 0`** - This single change transforms the feel
2. **Remove all shadows** - Trust content to create visual interest
3. **Make backgrounds transparent** - Let the page breathe
4. **Use outline tags, not filled** - Information hierarchy, not decoration
5. **No hover transforms** - Cards are content, not buttons
6. **Serif italic for titles** - Editorial confidence
7. **Bold accent colors** - #FF0000, not gray-200

**The goal is not to be different for its own sake. The goal is to be editorial, confident, and memorable.**

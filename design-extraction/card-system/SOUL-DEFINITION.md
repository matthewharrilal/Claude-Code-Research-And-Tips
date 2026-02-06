<!--
═══════════════════════════════════════════════════════════════
⚠️  SUPERSEDED — DO NOT USE FOR NEW WORK
═══════════════════════════════════════════════════════════════

STATUS: This file has been superseded and contains OUTDATED values.

SUPERSEDED BY: design-extraction/component-system/SOUL-DEFINITION.md
  (which itself feeds into MASTER-SOUL-SYNTHESIS.md)

WHY THIS EXISTS: Card-system soul definition from Phase 3. Superseded
by component-system SOUL-DEFINITION.md which covers all components.

DANGER: Values in this file may CONFLICT with soul-locked tokens.
Using these values will break the design system's soul alignment.

DO NOT:
- Copy values from this file
- Reference this file in new work
- Update this file (it's frozen as historical record)

INSTEAD: Use the superseding document linked above.

Last verified: 2026-02-06
═══════════════════════════════════════════════════════════════
-->

# Card Component Soul Definition
## Phase 3 Synthesis Document
## Timestamp: 2026-02-03

---

## The Core Question

**"What makes a Sanrok card FEEL like Sanrok and not like Bootstrap?"**

## The Answer

Sanrok's "cards" reject the container-first paradigm of modern web design entirely. Where Bootstrap, Tailwind, and Material Design treat cards as boxes containing content (with backgrounds, borders, shadows, and rounded corners), Sanrok employs **editorial row-based layouts** where content defines its own boundaries through typography, color, and whitespace alone. This is not a card system—it's a **typographic rhythm system** that happens to display project information. The soul emerges from: transparent backgrounds (no container chrome), outline-only tags (not filled pills), duotone image treatment (print heritage), mixed serif/sans typography (editorial tension), sharp 0px corners (decisive confidence), and generous whitespace as active design element. Together, these create layouts that feel like magazine spreads rather than web app components.

---

## The 10 Soul Principles

These are **NON-NEGOTIABLE**. Violating any of these means we've failed to capture the soul.

### Principle 1: No Container Chrome

The card has **NO visible boundary**.

| Property | Required Value | Banned Values | Soul Impact |
|----------|---------------|---------------|-------------|
| background | `transparent` | white, gray, any color | Content floats, no box |
| border | `none` | any border | No artificial boundary |
| border-radius | `0` | any value >0 | Sharp, decisive |
| box-shadow | `none` | any shadow | Flat, graphic |

The **CONTENT** defines the card, not a container around it.

### Principle 2: Outline Tags (Not Filled)

Tags use outline style, matching the filled/outline typography system.

| Property | Required Value | Banned Values | Soul Impact |
|----------|---------------|---------------|-------------|
| background | `transparent` | any fill color | Breathing room, restraint |
| border | `1px solid #E83025` | none | Defines without filling |
| border-radius | `0` | >2px, pill shape | Sharp, editorial |
| text-transform | `uppercase` | lowercase | Label-like, structured |

### Principle 3: Duotone Images

**EVERY** image must have duotone treatment (cream + red color mapping).

**Primary Implementation:** CSS blend modes
```css
.duotone::before { mix-blend-mode: darken; background: #C25C4E; }
.duotone::after { mix-blend-mode: lighten; background: #F5F0E8; }
```

This is what makes it feel "editorial" rather than "web."

### Principle 4: Typography Hierarchy

| Element | Font | Style | Case | Color | Soul Impact |
|---------|------|-------|------|-------|-------------|
| Title | Instrument Serif | italic | UPPERCASE | #E83025 | Commands attention |
| Year | Inter | normal | normal | #1A1A1A | Grounding metadata |
| Tags | Inter | normal | UPPERCASE | #E83025 | Structured labels |

Mixed typefaces create editorial tension.

### Principle 5: Flat Design

No depth simulation anywhere.

**BANNED:**
- `box-shadow` (any value)
- gradient backgrounds
- hover lift effects (`translateY`)
- `transform: scale` on hover

This is graphic design, not app UI.

### Principle 6: Sharp Edges

Zero rounded corners anywhere in the card.

| Element | border-radius | Why |
|---------|---------------|-----|
| Card | `0` | Decisive, confident |
| Images | `0` | Consistent sharpness |
| Tags | `0` | Editorial, not friendly |

Sharp = confident, decisive, graphic.
Rounded = friendly, safe, generic.

### Principle 7: Limited Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#E83025` | Titles, tags, accents |
| Background | `#FEF9F5` | Page background (cream) |
| Text | `#1A1A1A` | Body text (near-black) |

**NO grays. NO additional accent colors.**

### Principle 8: Tight Spacing

Less breathing room than web defaults.

| Gap | Value | Generic Alternative |
|-----|-------|---------------------|
| Card to card | `24px` | 32-48px |
| Header to tags | `16px` | More |
| Tags to images | `20px` | More |

Editorial design uses space efficiently.

### Principle 9: Grid Alignment

| Property | Value |
|----------|-------|
| Grid system | 12-column |
| Gap | 24px |
| Card span | 6 columns (desktop) |
| Max width | 1400px |

### Principle 10: Left-Heavy Alignment

Strong left alignment, not centered.

- Title: Left-aligned
- Year: Right-aligned (creates tension)
- Tags: Right-aligned (balance)
- Content: Left-aligned

---

## The Sanrok Card Blueprint

```
┌────────────────────────────────────────────────────────────────┐
│ NO VISIBLE CONTAINER — THIS BOX IS JUST FOR ILLUSTRATION      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ PROJECT NAME HERE                                    2025      │
│ (Instrument Serif, italic, uppercase, red)    (Inter, black)  │
│                                                                │
│                                      ┌───────┐ ┌───────┐       │
│                                      │Finance│ │Global │       │
│                                      └───────┘ └───────┘       │
│                                      (outline tags, right)     │
│                                                                │
│ ┌──────────────────────────────────────────────────────────┐   │
│ │                                                          │   │
│ │              IMAGE WITH DUOTONE TREATMENT                │   │
│ │              (cream + red blend modes)                   │   │
│ │                                                          │   │
│ └──────────────────────────────────────────────────────────┘   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Locked CSS Values

These values are **LOCKED** and must not be changed during implementation.

```css
/* ═══════════════════════════════════════════════════════════
   LOCKED VALUES — DO NOT CHANGE
   ═══════════════════════════════════════════════════════════ */

/* Container — NO CHROME */
.project-card {
  background: transparent;    /* LOCKED */
  border: none;               /* LOCKED */
  border-radius: 0;           /* LOCKED */
  box-shadow: none;           /* LOCKED */
}

/* Title */
.project-card__title {
  font-family: 'Instrument Serif', Georgia, serif;  /* LOCKED */
  font-style: italic;                                /* LOCKED */
  text-transform: uppercase;                         /* LOCKED */
  color: #E83025;                                    /* LOCKED */
  line-height: 1.0;                                  /* LOCKED */
}

/* Tags */
.tag {
  background: transparent;              /* LOCKED */
  border: 1px solid #E83025;           /* LOCKED */
  border-radius: 0;                     /* LOCKED */
  text-transform: uppercase;            /* LOCKED */
  font-family: 'Inter', sans-serif;    /* LOCKED */
}

/* Grid */
.project-grid {
  display: grid;                            /* LOCKED */
  grid-template-columns: repeat(12, 1fr);  /* LOCKED */
  gap: 24px;                                /* LOCKED */
}

.project-card {
  grid-column: span 6;                      /* LOCKED (desktop) */
}
```

---

## Anti-Patterns (From 3B)

These are **BANNED**:

| Property | Banned Values | Correct Value |
|----------|---------------|---------------|
| border-radius | >0 | 0 |
| box-shadow | any | none |
| background (card) | white, gray, any | transparent |
| tag background | any fill | transparent |
| tag border-radius | >2px | 0 |
| hover transform | translateY, scale | none |
| hover shadow | any | none |

---

## Duotone Implementation (From 3C)

The recommended duotone technique is: **CSS Filter + Blend Mode**

```css
/* Primary duotone implementation */
.duotone {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.duotone img {
  display: block;
  width: 100%;
  height: auto;
  filter: grayscale(100%) contrast(1.1) brightness(1.05);
}

.duotone::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #C25C4E; /* Sanrok red/coral */
  mix-blend-mode: darken;
  pointer-events: none;
  z-index: 1;
}

.duotone::after {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #F5F0E8; /* Sanrok cream */
  mix-blend-mode: lighten;
  pointer-events: none;
  z-index: 2;
}
```

**Fallback:** SVG feComponentTransfer filter for pixel-perfect accuracy
**Graceful degradation:** `filter: grayscale(100%) sepia(100%) hue-rotate(-10deg) saturate(200%)`

---

## Success Criteria

The card implementation is successful when:

- [ ] Looking at it, you think "editorial/magazine" not "web app"
- [ ] It has NO visible container boundaries
- [ ] Tags are outline style (not filled)
- [ ] Images have visible duotone treatment
- [ ] Typography matches the hierarchy (serif title, sans metadata)
- [ ] Zero rounded corners anywhere
- [ ] Zero shadows anywhere
- [ ] Limited to red/cream/black palette
- [ ] Side-by-side with Sanrok reference, they feel related
- [ ] Clear visual difference from generic card example

---

## Sources

- 3A: Card Anatomy Analysis
- 3B: Anti-Pattern Research
- 3C: Halftone/Duotone Techniques
- 3D: Editorial/Magazine Design Patterns
- Sanrok reference images (sanrok-homepage-full.png, sanrok-about-full.png)

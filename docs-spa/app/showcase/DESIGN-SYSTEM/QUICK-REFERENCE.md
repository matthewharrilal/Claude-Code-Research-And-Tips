# QUICK-REFERENCE: Pattern Lookup for Feature Building

> **You are here because you need to build something using this design system.**
> This document gets you to the right pattern fast. For deep understanding, see README.md.

---

## Find Your Pattern

| Content Type | Pattern | Density | Key Constraint |
|--------------|---------|---------|----------------|
| Tutorial/Guide | NARRATIVE ARC | CRESCENDO | Progressive disclosure |
| API Reference | STRATIFIED | GEOLOGICAL | Confidence layers |
| Settings/Config | MENU | STACCATO | Scannable options |
| Dashboard | AXIS | ISLANDS | Clear zones |
| Error States | PARALLEL | ISLANDS | Side-by-side resolution |
| Getting Started | CONVERSATIONAL | CRESCENDO | Build trust progressively |
| Troubleshooting | CONFIDENCE-BASED (reversed) | CRESCENDO | Resolution-oriented |
| Changelog | CHRONOLOGICAL | TIDAL | Time-based flow |

---

## Quick Application

### Step 1: Find Your Pattern (above)

### Step 2: Apply These Soul Pieces (ALL are mandatory)

| Soul Piece | CSS | Why |
|------------|-----|-----|
| #1 Sharp Edges | `border-radius: 0` | Precision, authority |
| #2 Archivist Serif | `font-family: 'Cormorant Garamond'` | Wisdom has weight |
| #3 2-Zone Callouts | See PATTERN-INDEX | Family structure |
| #4 No Shadows | `box-shadow: none` | Flatness = honesty |
| #5 Squares Signal System | `border-radius: 0` on indicators | System-level signals |

### Step 3: Verify

- [ ] All 5 soul pieces present
- [ ] Pattern matches your content type
- [ ] Density creates right rhythm

### Step 4: If Something Doesn't Fit

Your content type isn't here? → Use Extension Protocol in README.md PART IV

Pattern applied but feels wrong? → Trace pattern's DERIVATION CHAIN in README.md PART III

---

## Token Quick Reference

### Colors (KortAI Palette)

```css
--kortai-crimson: #E83025;      /* Primary brand */
--kortai-cream: #FEF9F5;        /* Background */
--kortai-charcoal: #1A1A1A;     /* Text primary */
--kortai-warm-gray: #6B6B6B;    /* Text secondary */
```

### Typography

```css
/* Headings */
font-family: 'Inter', sans-serif;
font-weight: 600;

/* Body */
font-family: 'Inter', sans-serif;
font-weight: 400;

/* Wisdom/Emphasis */
font-family: 'Cormorant Garamond', serif;
font-style: italic;
```

### Spacing Scale

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;   /* Cluster gap minimum */
--space-3xl: 64px;
```

### Geometry

```css
border-radius: 0;       /* ALWAYS — soul piece #1 */
box-shadow: none;       /* ALWAYS — soul piece #4 */
```

---

## Density Pattern Quick Guide

| Pattern | Rhythm | Best For |
|---------|--------|----------|
| **PULSE** | High-low alternation | Dialogue, Q&A, breathing content |
| **CRESCENDO** | Sparse → Dense | Learning paths, confidence building |
| **ISLANDS** | Clusters in whitespace | Task groups, distinct sections |
| **GEOLOGICAL** | Layered strata | Reference, depth-on-demand |
| **TIDAL** | Flowing rhythm | Timelines, sequential content |
| **FRACTAL** | Self-similar at all scales | Complex hierarchies |

---

## Links

- Full pattern details: `patterns/PATTERN-INDEX.md`
- Token values: `tokens/*.md`
- Soul piece source: `provenance/SOUL-DISCOVERIES.md`
- Derivation chains: README.md PART III
- Extension protocol: README.md PART IV
- Complete Design Mind: README.md

---

## When to Go Deeper

| Situation | Action |
|-----------|--------|
| Pattern works for your content | Apply and verify (Level 1) |
| Pattern doesn't quite fit | Trace provenance, understand WHY (Level 2) |
| No pattern exists | Use Extension Protocol (Level 3) |
| After building anything | Validate with chain criteria (Level 4) |

**Remember:** If you're extending the system (Level 3), read README.md PART I first.
The soul pieces are non-negotiable. The reasoning is transferable.

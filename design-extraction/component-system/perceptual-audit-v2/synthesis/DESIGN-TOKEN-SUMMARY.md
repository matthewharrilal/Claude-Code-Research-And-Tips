# DESIGN TOKEN SUMMARY
## Consolidated KortAI Design Tokens

**Version:** 1.0
**Date:** 2026-02-04
**Phase:** 4A-E Synthesis
**Sources:** All 4 Tracking Sheets (Typography, Spacing, Color, Container)

═══════════════════════════════════════════════════════════════════════════════
## LOCKED CSS VARIABLES
═══════════════════════════════════════════════════════════════════════════════

Copy this as the foundation for all component CSS:

```css
:root {
  /* ─────────────────────────────────────────────────────────────────────────
     COLORS — LOCKED
     Red + Cream + Black only. No grays, no additional accents.
     ───────────────────────────────────────────────────────────────────────── */
  --color-primary: #E83025;           /* Sanrok red, editorial confidence */
  --color-background: #FEF9F5;        /* Warm cream, not sterile white */
  --color-text: #1A1A1A;              /* Near-black, softer than pure #000 */
  --color-text-secondary: #666666;    /* Muted secondary text */
  --color-border: #E0D5C5;            /* Warm border tone */
  --color-border-subtle: #F0EBE3;     /* Very subtle dividers */

  /* ─────────────────────────────────────────────────────────────────────────
     TYPOGRAPHY — LOCKED
     Serif for display, Sans for body, Mono for code.
     ───────────────────────────────────────────────────────────────────────── */
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;

  /* ─────────────────────────────────────────────────────────────────────────
     TYPE SCALE — LOCKED
     Based on 16px base, editorial proportions.
     ───────────────────────────────────────────────────────────────────────── */
  --text-xs: 0.75rem;      /* 12px — Labels, captions */
  --text-sm: 0.875rem;     /* 14px — Small body, metadata */
  --text-base: 1rem;       /* 16px — Body text */
  --text-lg: 1.125rem;     /* 18px — Large body */
  --text-h4: 1.25rem;      /* 20px — Small headlines */
  --text-h3: 1.5rem;       /* 24px — Section headlines */
  --text-h2: 2rem;         /* 32px — Major headlines */
  --text-h1: 2.5rem;       /* 40px — Page titles */
  --text-display: 3rem;    /* 48px — Hero text */

  /* ─────────────────────────────────────────────────────────────────────────
     GEOMETRY — LOCKED
     Sharp edges, no shadows, flat design.
     ───────────────────────────────────────────────────────────────────────── */
  --border-radius: 0;                 /* ALWAYS sharp edges */
  --box-shadow: none;                 /* ALWAYS flat design */

  /* ─────────────────────────────────────────────────────────────────────────
     SPACING — LOCKED
     8px base unit, consistent vertical rhythm.
     ───────────────────────────────────────────────────────────────────────── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
}
```

═══════════════════════════════════════════════════════════════════════════════
## TYPOGRAPHY TOKENS
═══════════════════════════════════════════════════════════════════════════════

### Font Families — Structural Role

| Token | Value | Zone Type | Structural Meaning |
|-------|-------|-----------|-------------------|
| `font-serif` | Instrument Serif, Georgia, serif | Title zones | "This is a title zone" (editorial) |
| `font-sans` | Inter, system-ui, sans-serif | Content zones | "This is a content zone" (functional) |
| `font-mono` | JetBrains Mono, monospace | Technical zones | "This is a technical zone" (precise) |

### Font Sizes — Zone Hierarchy

| Token | Value | Zone Role | Density Impact |
|-------|-------|-----------|----------------|
| `size-xs` | 11px | Tertiary (labels, metadata) | HIGH density |
| `size-sm` | 12px | Secondary supporting | MED-HIGH density |
| `size-base` | 14px | Primary body | MED density |
| `size-md` | 16px | Large body | MED-LOW density |
| `size-lg` | 20px | Small title | LOW density |
| `size-xl` | 24px | Medium title | LOW density |
| `size-2xl` | 28px | Large title | VERY LOW density |

**Size Creates Zone Separation:**
- Jump of 4px+ = zone boundary
- Jump of 2px = within-zone variation

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, code |
| Medium | 500 | Labels, metadata |
| Semibold | 600 | Headers, emphasis |
| Bold | 700 | Strong emphasis (rare) |

═══════════════════════════════════════════════════════════════════════════════
## COLOR TOKENS
═══════════════════════════════════════════════════════════════════════════════

### Text Colors — Hierarchy Signaling

| Token | Hex | Zone Type | Structural Role |
|-------|-----|-----------|-----------------|
| `text-primary` | #1A1A1A | Title zones | "This is important" |
| `text-secondary` | #444444 | Body zones | "This explains" |
| `text-tertiary` | #888888 | Metadata zones | "This is supporting" |
| `text-muted` | #AAAAAA | Contextual zones | "This recedes" |
| `text-inverse` | #FFFFFF | Dark bg zones | Inverted content |

### Background Colors — Zone Differentiation

| Token | Hex | Zone Type | Component Usage |
|-------|-----|-----------|-----------------|
| `bg-page` | #FAFAFA | Page ground | Base |
| `bg-card` | #FFFFFF | Elevated zone | Cards |
| `bg-warm` | #FEF9F5 | Warm emphasis | Essence Callout |
| `bg-dark` | #1E1E1E | Inverted focus | Code Snippet |
| `bg-info` | #F5F8FA | Info semantic | Info Callout |
| `bg-tip` | #F5FAF5 | Tip semantic | Tip Callout |
| `bg-gotcha` | #FEF6F5 | Warning semantic | Gotcha Callout |
| `bg-summary` | #FEF9F0 | Synthesis | Reasoning |

### Accent Colors — Semantic Signaling

| Token | Hex | Semantic Role | Component Usage |
|-------|-----|---------------|-----------------|
| `accent-red` | #E83025 | Primary attention | Primary, Warnings |
| `accent-coral` | #C97065 | Muted warning | Gotcha alternative |
| `accent-blue` | #4A90D9 | Information | Info Callout, File Tree |
| `accent-green` | #4A9D6B | Positive/helpful | Tip Callout |
| `accent-amber` | #D97706 | Wisdom/synthesis | Essence, Reasoning |
| `accent-purple` | #7C3AED | Challenge/action | Challenge Callout |

═══════════════════════════════════════════════════════════════════════════════
## SPACING TOKENS
═══════════════════════════════════════════════════════════════════════════════

### Spacing Scale — Structural Role

| Token | Value | Structural Role | Density Impact |
|-------|-------|-----------------|----------------|
| `space-xs` | 4px | Tight coupling (within element) | HIGH |
| `space-sm` | 8px | Related items (within zone) | MED-HIGH |
| `space-md` | 12px | Zone gaps (between zones) | MED |
| `space-base` | 16px | Standard separation | MED |
| `space-lg` | 20px | Generous padding | MED-LOW |
| `space-xl` | 24px | Component padding | LOW |
| `space-2xl` | 32px | Section breaks | VERY LOW |
| `space-3xl` | 48px | Page margins | SPARSE |

### Structural Boundaries

| Range | Meaning |
|-------|---------|
| 4-8px | "These items are ONE thing" |
| 12-16px | "These are related but separate" |
| 24-32px | "These are different sections" |
| 48px+ | "These are different regions" |

### Zone Separation Methods

| Method | KortAI Preferred? | When Used |
|--------|-------------------|-----------|
| Whitespace only | YES | Primary method |
| Background color change | YES | Semantic zones |
| Left border accent | YES | Callouts |
| Full border | Sometimes | Tables, complex data |
| Horizontal rule | RARELY | Explicit breaks |
| Drop shadow | NO | Never |

═══════════════════════════════════════════════════════════════════════════════
## CONTAINER TOKENS
═══════════════════════════════════════════════════════════════════════════════

### Border Radius (Edge Treatment)

| Token | Value | Structural Role | Usage |
|-------|-------|-----------------|-------|
| `radius-none` | 0px | Sharp edges = decisive | **DEFAULT** |
| `radius-sm` | 4px | Slight softening | NEVER USED |
| `radius-md` | 6px | Standard web | NEVER USED |

**Rule:** Always use `radius-none` (0px). No exceptions.

### Shadows (Elevation)

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-subtle` | 0 2px 8px rgba(0,0,0,0.08) | NEVER USED |
| `shadow-none` | none | **DEFAULT** |

**Rule:** Always use `shadow-none`. No exceptions.

### Borders (Boundary Definition)

| Token | Value | Structural Role | Usage |
|-------|-------|-----------------|-------|
| `border-left-accent` | 3-4px solid [color] | Left flag marker | Callouts |
| `border-outline` | 1px solid [color] | Subtle container | Frames |
| `border-none` | none | Content-defined | Default |

### Container → Zone Relationship

| Container Style | Zone Type | Structural Meaning |
|-----------------|-----------|-------------------|
| No visible container | Content-defined zone | "Content speaks" |
| Left accent border | Flagged zone | "Semantic category" |
| Full border | Enclosed zone | "Bounded content" |
| Dark background | Inverted zone | "Focus content" |
| Tinted background | Semantic zone | "Type-specific" |

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT-SPECIFIC TOKENS
═══════════════════════════════════════════════════════════════════════════════

### Code Snippet
```css
.code-snippet {
  --code-bg: #1E1E1E;
  --code-text: #F5F0EB;
  --code-header-bg: rgba(255,255,255,0.05);
  --code-border-separator: rgba(255,255,255,0.1);
  --code-line-number-color: #666666;
}
```

### Callout Family
```css
.callout {
  --callout-border-width: 4px;
  --callout-padding-top: 24px;
  --callout-padding-bottom: 28px;  /* Asymmetric! */
  --callout-padding-left: 20px;
  --callout-label-size: 10-11px;
}
```

### Decision Matrix
```css
.decision-matrix {
  --matrix-left-border: 4px solid var(--color-primary);
  --matrix-row-padding: 16px;
  --matrix-column-gap: 24px;
  --matrix-rule-color: #E5E5E5;
  /* NO vertical borders */
}
```

### Reasoning Component
```css
.reasoning {
  --reasoning-frame: 1px solid #E5E5E5;
  --reasoning-divider: 1px solid #E5E5E5;
  --reasoning-summary-bg: #FEF9F0;
  --reasoning-amber: #D97706;
}
```

═══════════════════════════════════════════════════════════════════════════════
## TOKEN USAGE BY COMPONENT
═══════════════════════════════════════════════════════════════════════════════

| Component | Primary Font | Background | Accent Color | Border Style |
|-----------|--------------|------------|--------------|--------------|
| Code Snippet | Mono | Dark (#1E1E1E) | — | Color mass |
| Info Callout | Sans | Light blue tint | Blue (#4A90D9) | 4px left |
| Tip Callout | Sans | Light green tint | Green (#4A9D6B) | 4px left |
| Gotcha Callout | Sans | Pink tint | Red/Coral | 4px left |
| Essence Callout | **Serif italic** | Warm amber | Amber (#D97706) | 4px left |
| Challenge Callout | Sans | Light purple tint | Purple (#7C3AED) | 4px left |
| File Tree | Mono | Warm cream | Blue (folders) | 4px left |
| Decision Matrix | Sans | Warm cream | Red (#E83025) | 4px left |
| Core Abstraction | Serif + Mono | Cream + Dark | Red labels | 1px frame |
| Task Component | Sans | Warm cream | Red (checkboxes) | 1px subtle |
| Reasoning | Serif + Sans | Cream + Amber | Red + Amber | 1px frame |

═══════════════════════════════════════════════════════════════════════════════
## DOCUMENT METADATA
═══════════════════════════════════════════════════════════════════════════════

**Created:** 2026-02-04
**Phase:** 4A-E Synthesis
**Sources:**
- tracking/TYPOGRAPHY-TOKENS.md
- tracking/SPACING-TOKENS.md
- tracking/COLOR-TOKENS.md
- tracking/CONTAINER-TOKENS.md

**Purpose:** Single reference for all KortAI design tokens

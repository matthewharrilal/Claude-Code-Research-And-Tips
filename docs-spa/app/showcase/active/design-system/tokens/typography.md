<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/DESIGN-SYSTEM/tokens/typography.md
Tier: B | Batch: 5 | Generated: 2026-02-06
═══════════════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS
This file is the canonical typography token registry for the KortAI design
system. It locks the font families, type scale, weights, and line heights that
define the system's editorial voice. The three-font structural system
(Instrument Serif / Inter / JetBrains Mono) creates zone-level semantic
meaning — each font signals a different content type. All values trace to the
T1 DESIGN-TOKEN-SUMMARY.md synthesis and the typography-system research.

2. THE QUESTION THIS ANSWERS
"What font, size, weight, and line-height should I use for any text element
in the KortAI system?"

3. STATUS
ACTIVE — Canonical source of truth for all typography tokens

5. BUILT ON
| Source | Role | Key Values | Path |
|--------|------|------------|------|
| DESIGN-TOKEN-SUMMARY.md | T1 origin of locked values | Font stacks, type scale, weights | design-extraction/component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md |
| typography-system/ | Research origin (Instrument Serif discovery) | Font selection rationale | design-extraction/typography-system/ |

6. MUST HONOR
| # | Constraint | Rationale |
|---|-----------|-----------|
| 1 | --font-display: 'Instrument Serif', Georgia, serif (LOCKED) | The ONLY display font; editorial identity of the system |
| 2 | --font-body: 'Inter', system-ui, sans-serif (LOCKED) | Functional clarity for content zones |
| 3 | --font-mono: 'JetBrains Mono', 'SF Mono', monospace (LOCKED) | Technical precision for code zones |
| 4 | --text-base: 1rem (16px) (LOCKED) | Body text baseline; T1 locked value |
| 5 | Font stack is locked — no substitutions | Wrong font = wrong zone signal = broken semantics |
| 6 | Display text uses tight line-height | Editorial density; loose line-height kills the editorial feel |

8. CONSUMED BY
| Consumer | How It Uses This File |
|----------|----------------------|
| All explorations (DD-XXX, OD-XXX, AD-XXX, CD-XXX) | CSS variable values for font application |
| DESIGN-SYSTEM/README.md | References typography tokens as locked soul constraints |
| Components (implicit) | All text-rendering components inherit these font variables |
| Migration guide | Typography compliance checklist during page migration |
| Perceptual Depth Audit sub-agents | Verification target for soul compliance checks |

10. DIAGNOSTIC QUESTIONS
Q1: Is Instrument Serif used ONLY in title/display zones and never in body
    content or code blocks?
Q2: Does the type scale follow the locked progression (0.75rem through 3rem)
    with no invented intermediate sizes?
Q3: Are there any instances of fonts outside the three locked families
    (e.g., Bebas Neue, Roboto, or unlisted serif fonts)?

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
 -->

# Typography Tokens
## Locked KortAI Typography System

═══════════════════════════════════════════════════════════════════════════════

## Font Families (LOCKED)

```css
:root {
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
}
```

### Structural Roles

| Font | Zone Type | Meaning |
|------|-----------|---------|
| Instrument Serif | Title zones | "This is a title zone" (editorial) |
| Inter | Content zones | "This is a content zone" (functional) |
| JetBrains Mono | Technical zones | "This is a technical zone" (precise) |

**AD Validation:** All 6 AD explorations verified the font trio as a density signal
at character scale (AD-F-027, fractal scale 5). AD-002 (F-Pattern) proved that
typography compression across acts IS CRESCENDO density (AD-F-006): act-zone padding
compresses from 64px (Act I) to 32px (Act III) while font sizes maintain hierarchy.
AD-001 (Z-Pattern) proved typography velocity = Z-position = PULSE tempo (AD-F-004).
See `provenance/stage-4-axis-ad/AD-PA-CONVENTIONS.md`.

═══════════════════════════════════════════════════════════════════════════════

## Type Scale (LOCKED)

```css
:root {
  --text-xs: 0.75rem;      /* 12px — Labels, captions */
  --text-sm: 0.875rem;     /* 14px — Small body, metadata */
  --text-base: 1rem;       /* 16px — Body text */
  --text-lg: 1.125rem;     /* 18px — Large body */
  --text-h4: 1.25rem;      /* 20px — Small headlines */
  --text-h3: 1.5rem;       /* 24px — Section headlines */
  --text-h2: 2rem;         /* 32px — Major headlines */
  --text-h1: 2.5rem;       /* 40px — Page titles */
  --text-display: 3rem;    /* 48px — Hero text */
}
```

═══════════════════════════════════════════════════════════════════════════════

## Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, code |
| Medium | 500 | Labels, metadata |
| Semibold | 600 | Headers, emphasis |
| Bold | 700 | Strong emphasis (rare) |

═══════════════════════════════════════════════════════════════════════════════

## Critical Rules

### 1. h3 Must Be Italic
```css
h3 {
  font-family: var(--font-display);
  font-style: italic;
}
```

### 2. Essence Callout Body Uses Serif
```css
.callout--essence .callout__body {
  font-family: var(--font-display);
  font-style: italic;
}
```

### 3. Callout Labels Are 10-11px Uppercase
```css
.callout__label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
```

### 4. Size Jump = Zone Boundary
- Jump of 4px+ = zone boundary
- Jump of 2px = within-zone variation

═══════════════════════════════════════════════════════════════════════════════

## Component-Specific Typography

| Component | Title Font | Body Font | Special |
|-----------|------------|-----------|---------|
| Code Snippet | Sans | Mono | — |
| Callouts (most) | — | Sans | 10px uppercase label |
| Essence Callout | — | **Serif Italic** | Quote treatment |
| File Tree | — | Mono | ASCII connectors |
| Decision Matrix | Sans | Sans | Open grid |
| Core Abstraction | Serif | Serif + Mono | Framed |
| Reasoning | Serif | Sans | Equal-weight columns |

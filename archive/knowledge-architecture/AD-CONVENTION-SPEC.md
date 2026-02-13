<!--
===============================================================================
INLINE THREADING HEADER
File: knowledge-architecture/_ad-execution/AD-CONVENTION-SPEC.md
Tier: B | Stage: 4 (Axis AD) | Generated: 2026-02-09

BUILT ON: OD-CONVENTION-SPEC.md, HANDOFF-OD-TO-AD.md, ACCUMULATED-IDENTITY-v1.1.md,
          R4-AXIS-INNOVATIONS.md, anti-patterns/registry.md, tokens/* (4 files)
CONSUMED BY: all AD Builders (Wave 1-3), HANDOFF-AD-TO-CD.md, future CD work
===============================================================================
-->

# AD Convention Specification
## Unified Standards for Axis Explorations

**Purpose:** Extend OD-CONVENTION-SPEC.md with axis-specific standards. Sections 1-11
are INHERITED from OD verbatim. Sections 12-16 define AD-specific conventions for
CSS Grid, Flexbox, axis zone tokens, transitions, and accessibility.

**Inheritance model:** Every value in Sections 1-11 carries its original T1/T2 label
plus INHERITED + FROZEN. Sections 12-16 carry AD-SPECIFIC + FROZEN. All values have
three labels: provenance tier, inheritance status, and mutability.

---

## 1. Soul Compliance Checklist (10 Lines)
### INHERITED FROM: OD-CONV Section 1

Every AD artifact MUST pass all 10 checks. Zero exceptions.

```
[ ] border-radius: 0 everywhere (no rounded corners on any element or pseudo-element)
    T1 (COMP-F-001, geometry.md) | INHERITED | FROZEN

[ ] box-shadow: none (no shadows -- solid-offset pseudo-elements are the ONLY depth mechanism)
    T1 (COMP-F-004, geometry.md) | INHERITED | FROZEN

[ ] No filter: drop-shadow() anywhere
    T1 (COMP-F-004) | INHERITED | FROZEN

[ ] No fake depth, gradients-as-depth, or blur effects
    T2 (ANTI-PHYSICAL identity -- 20/20 SOUL FAILs confirm) | INHERITED | FROZEN

[ ] Locked palette: #E83025, #1A1A1A, #FAFAF5, #E0D5C5, #6B9B7A, #4A7C9B, #C97065, #7C3AED
    T1 (colors.md) | INHERITED | FROZEN

[ ] Font trio only: 'Instrument Serif' (display), 'Inter' (body), 'JetBrains Mono' (code)
    T1 (typography.md) | INHERITED | FROZEN

[ ] Border weights: 4px left accent OR 3px+ structural -- never 1-2px for structural borders
    T2 (OD-F-AP-001 remediation) | INHERITED | FROZEN

[ ] Spacing model: --space-* tokens from the unified scale (Section 6)
    T1 (spacing.md) | INHERITED | FROZEN

[ ] Max 2 callouts per viewport section
    T2 (DD-F-014, R5-T4) | INHERITED | FROZEN

[ ] DD-F-006 fractal self-similarity at 5 scales (navigation, page, section, component, character)
    T1 (DD-F-006, elevated to 5 scales in OD-006 v3) | INHERITED | FROZEN
```

---

## 2. Border System (3 Categories)
### INHERITED FROM: OD-CONV Section 2

The 2px border epidemic (108 CSS declarations, 1000+ computed instances) was the #1
systemic audit finding in OD. This 3-category system resolves it.

| Category | Width | When to Use | Examples |
|----------|-------|-------------|---------|
| **Cat 1: Structural / Accent / Frame** | 3px+ (4px for callout left-border) | Chapter titles, code block frames, section dividers, page headers, full-border containers, axis zone frames | `.chapter-divider { border-bottom: 3px solid var(--color-border); }` `.callout { border-left: 4px solid var(--accent-blue); }` |
| **Cat 2: Data Separators** | 1px | Table row borders, connector lines, timeline lines, horizontal rules between related items, grid cell separators | `tr { border-bottom: 1px solid var(--color-border-subtle); }` |
| **Cat 3: Micro-element** | 1px | Badge outlines, toggle borders, copy button borders, inline code borders | `.badge { border: 1px solid var(--color-border); }` |

**The rule:** 2px borders are BANNED. Every border is either Cat 1 (3px+), Cat 2 (1px),
or Cat 3 (1px). There is no middle ground.
T2 (OD-F-AP-001 remediation, remediates OD-F-AP-001 anti-pattern) | INHERITED | FROZEN

**Orthogonal encoding note (from v1.1 identity):** Cat 1/2 borders and Cat 3 semantic
borders coexist on different axes. Stratum LEFT borders (4px/3px/2px/1px) are semantic
confidence signals on the Y-axis. Content-block TOP borders are data separators
(always 1px per Cat 2) on the X-axis. Conflating these axes reintroduces the 2px epidemic.
T2 (Wave 3 discovery, ACCUMULATED-IDENTITY-v1.1) | INHERITED | FROZEN

---

## 3. Code Block Theme
### INHERITED FROM: OD-CONV Section 3

**Unified Standard: Dark theme.**

```css
.code-block,
pre {
  background: #1A1A1A;
  color: #FAFAF5;
  border: 3px solid var(--color-border);        /* Cat 1 structural */
  border-radius: var(--border-radius);          /* 0 */
  padding: var(--space-6) var(--space-8);       /* 24px 32px */
  font-family: var(--font-mono);
  font-size: var(--type-code);                  /* 0.875rem / 14px */
  line-height: 1.5;
  overflow-x: auto;
}
```
T1 (colors.md #1A1A1A, typography.md JetBrains Mono) + T2 (OD dialect unification) | INHERITED | FROZEN

**Syntax highlighting palette (dark background only):**
- Keywords: `#E83025` (primary red) -- T1 (colors.md) | INHERITED | FROZEN
- Strings: `#6B9B7A` (sage green) -- T1 (colors.md) | INHERITED | FROZEN
- Comments: `#666666` (secondary text) -- T1 (colors.md) | INHERITED | FROZEN
- Functions/methods: `#4A7C9B` (muted blue) -- T1 (colors.md) | INHERITED | FROZEN
- Types/classes: `#C97065` (coral) -- T1 (colors.md) | INHERITED | FROZEN
- Numbers/constants: `#D97706` (amber) -- T1 (colors.md) | INHERITED | FROZEN
- Punctuation/operators: `#E0D5C5` (border color -- warm tan) -- T1 (colors.md) | INHERITED | FROZEN

**Inline code:**

```css
code:not(pre code) {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background: var(--color-border-subtle);       /* #F0EBE3 */
  padding: 2px 6px;
  border: 1px solid var(--color-border);        /* Cat 3 micro */
}
```
T1 (colors.md, typography.md) | INHERITED | FROZEN

---

## 4. Header Layout
### INHERITED FROM: OD-CONV Section 4

**Unified Standard: Full-bleed header with dark background.**

```
+---------------------------------------------------------------------------+
|  [background: #1A1A1A]                                                    |
|                                                                           |
|  META LINE: "EXPLORATION AD-NNN" + "AXIS: PATTERN"                       |
|  font: Inter 500, var(--type-meta), letter-spacing: 0.15em               |
|  color: var(--color-text-secondary)                                       |
|  margin-bottom: var(--space-2)                                            |
|                                                                           |
|  TITLE: "AD-NNN: Pattern Name"                                           |
|  font: Instrument Serif, var(--type-page), color: #FAFAF5                |
|  margin-bottom: var(--space-4)                                            |
|                                                                           |
|  SUBTITLE: Hypothesis statement                                           |
|  font: Inter 400, var(--type-body), color: var(--color-text-secondary)   |
|  max-width: 70ch                                                          |
|                                                                           |
|  padding: var(--space-16) var(--space-8)                                  |
|  border-bottom: 3px solid var(--color-primary)  [Cat 1 structural]        |
+---------------------------------------------------------------------------+
```

**Inner wrapper:** Header content uses `max-width: 860px; margin: 0 auto` to match
page container width.
T1 (colors.md #1A1A1A, typography.md) + T2 (OD dark header universality validated across all 6 ODs) | INHERITED | FROZEN

**AD meta line format:** `EXPLORATION AD-NNN` replaces `EXPLORATION OD-NNN`. The
density badge becomes an axis badge: e.g., "AXIS: Z-PATTERN" instead of "DENSITY: PULSE".
T2 (AD-specific label convention) | AD-SPECIFIC | FROZEN

---

## 5. Type Scale
### INHERITED FROM: OD-CONV Section 5

**Unified Standard (5-level cascade, ~1.5x ratio):**

```css
:root {
  --type-page: 2.5rem;        /* 40px -- page title (Instrument Serif) */
  --type-section: 1.625rem;   /* 26px -- chapter / section titles (Instrument Serif) */
  --type-subsection: 1.375rem;/* 22px -- questions, tasks, strata, spokes, axis zones (Inter 600 or Instrument Serif) */
  --type-body: 1rem;          /* 16px -- body text (Inter 400) */
  --type-code: 0.875rem;      /* 14px -- code (JetBrains Mono 400) */
  --type-meta: 0.75rem;       /* 12px -- meta labels, badges (Inter 500, letter-spacing: 0.1em) */
}
```
T1 (typography.md) + T2 (OD convention unification) | INHERITED | FROZEN

**Naming convention:** Use the generic `--type-subsection` (not pattern-specific
names like --type-spoke, --type-grid-cell). AD-specific semantic aliases are
permitted in comments but the token name is `--type-subsection`.
T2 (naming convention from OD) | INHERITED | FROZEN

---

## 6. Spacing Tokens
### INHERITED FROM: OD-CONV Section 6

**Unified Standard: Include BOTH systems. Numbered scale is primary; Gestalt aliases
map to specific numbered values.**

```css
:root {
  /* Primary numbered scale */
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
  --space-20: 80px;

  /* Gestalt semantic aliases (EXT-CONV-003 + EXT-DENSITY-001) */
  --space-within: var(--space-2);    /* 8px -- within related elements */
  --space-between: var(--space-8);   /* 32px -- between distinct elements */
  --space-chapter: var(--space-16);  /* 64px -- between chapters */
}
```
T1 (spacing.md) + T2 (EXT-CONV-003, EXT-DENSITY-001) | INHERITED | FROZEN

---

## 7. Color Application
### INHERITED FROM: OD-CONV Section 7

All ADs share the locked palette. The divergence is in APPLICATION -- when each color
appears and how semantic tints are used.

**Unified Standard:**

| Color | Token | When to Use |
|-------|-------|-------------|
| `#E83025` | `--color-primary` | Primary accents: callout left-borders, page header underline, links, interactive highlights, skip-link background. NEVER for body text. |
| `#1A1A1A` | `--color-text` | Body text, headings, strong borders (Cat 1 structural at full assertiveness), code block backgrounds (inverted). |
| `#FEF9F5` | `--color-background` | Page background, sparse zones. The "paper" color. |
| `#FFFFFF` | (no token) | Dense zones. Creates subtle PULSE differentiation with #FEF9F5. |
| `#FAF5ED` | (no token) | Breathing zones -- chapter dividers, mode transitions, recovery whitespace. Slightly warmer than background. |
| `#666666` | `--color-text-secondary` | Meta labels, secondary text, timestamps, code comments, subtitle text. |
| `#E0D5C5` | `--color-border` | Primary borders (Cat 1/2/3), table rules, structural separators. |
| `#F0EBE3` | `--color-border-subtle` | Subtle backgrounds for inline code, hover states, secondary containers. |

T1 (colors.md) | INHERITED | FROZEN

**Callout accent colors (5 only):**

| Color | Token | Callout Type |
|-------|-------|-------------|
| `#4A90D9` | `--accent-blue` | Context, Note, Information |
| `#4A9D6B` | `--accent-green` | Tip, Success, Checkpoint |
| `#C97065` | `--accent-coral` | Gotcha, Warning, Error Recovery |
| `#D97706` | `--accent-amber` | Caution, Important |
| `#7C3AED` | `--accent-purple` | Essence, Insight, Meta |

T1 (colors.md) | INHERITED | FROZEN

**Prohibited:** Off-palette colors. No new off-palette colors may be introduced.
T2 (OD Fix #8 removed OD-003 --accent-tan) | INHERITED | FROZEN

---

## 8. Page Length Target
### INHERITED FROM: OD-CONV Section 8

**Unified Target: 10,000-14,000px body height.**
T2 (OD convention based on dialect analysis) | INHERITED | FROZEN

**Breathing zone budget:** Within the 10,000-14,000px target, a minimum of 15% of
total page height SHOULD be whitespace (chapter dividers, mode transitions, section
gaps). This means ~1,500-2,100px of breathing space across the page.
T2 (OD whitespace requirement) | INHERITED | FROZEN

**AD-006 exception:** AD-006 (crown jewel, compound axis) follows the same relaxed
ceiling as OD-006: 12,000-15,000px. As the synthesis page demonstrating ALL axis
patterns, it has unique structural requirements.
T2 (crown jewel exception pattern from OD) | AD-SPECIFIC | FROZEN

---

## 9. AD-006 Intentional Divergences
### INHERITED FROM: OD-CONV Section 9 (adapted for AD)

AD-006 (Creative/Crown Jewel) is deliberately distinct from AD-001-005.
These divergences are INTENTIONAL and MUST NOT be unified:

| Divergence | AD-001-005 Value | AD-006 Value | Why Intentional |
|-----------|------------------|-------------|-----------------|
| `--type-page` | 2.5rem (40px) | 3rem (48px) | Crown jewel editorial voice requires stronger typographic presence |
| Content mode | Single axis pattern per AD | ALL axis patterns in compound sequence | AD-006's thesis requires demonstrating all patterns |
| Drop caps | Optional | Required at section openings | EXT-CREATIVE-005 editorial drop caps are part of the crown jewel identity |

T2 (Crown jewel pattern inherited from OD-006) | INHERITED | FROZEN

**Divergences that are NOT intentional (should be unified):**
- All other tokens (colors, fonts, geometry, accents, spacing) are IDENTICAL across all ADs.

---

## 10. Unified :root Block (Copy-Paste Ready)
### INHERITED FROM: OD-CONV Section 10

For AD-001 through AD-005 (AD-006 overrides --type-page to 3rem):

```css
:root {
  /* Colors -- LOCKED */
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #E0D5C5;
  --color-border-subtle: #F0EBE3;

  /* Zone backgrounds (PULSE / WAVE differentiation) */
  --color-zone-sparse: #FEF9F5;   /* sparse zones */
  --color-zone-dense: #FFFFFF;    /* dense zones */
  --color-zone-breathing: #FAF5ED;/* chapter dividers, mode transitions */

  /* Typography -- LOCKED */
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;

  /* Type Scale -- 5-level cascade (~1.5x ratio) */
  --type-page: 2.5rem;         /* 40px */
  --type-section: 1.625rem;    /* 26px */
  --type-subsection: 1.375rem; /* 22px */
  --type-body: 1rem;           /* 16px */
  --type-code: 0.875rem;       /* 14px */
  --type-meta: 0.75rem;        /* 12px */

  /* Geometry -- LOCKED */
  --border-radius: 0;
  --box-shadow: none;

  /* Spacing Scale */
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
  --space-20: 80px;

  /* Gestalt Semantic Aliases */
  --space-within: var(--space-2);    /* 8px */
  --space-between: var(--space-8);   /* 32px */
  --space-chapter: var(--space-16);  /* 64px */

  /* Callout Accents -- LOCKED */
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-coral: #C97065;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;

  /* Standardized Border */
  --border-left-width: 4px;

  /* Solid Offset (EXT-CREATIVE-001) */
  --offset-x: 4px;
  --offset-y: 4px;
  --offset-color: #1A1A1A;
}
```
T1 (all token files) + T2 (OD convention unification) | INHERITED | FROZEN

---

## 11. Required Base Styles (All ADs)
### INHERITED FROM: OD-CONV Section 12

Beyond the :root tokens, every AD MUST include these base styles:

```css
/* Reset */
* { box-sizing: border-box; margin: 0; padding: 0; }

/* Enforce sharp edges globally */
*:where(:not(input, button, select)) { border-radius: 0; }

/* Selection */
::selection {
  background: var(--color-primary);
  color: var(--color-background);
}

/* Focus */
*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  background: var(--color-primary);
  color: var(--color-background);
  padding: 8px 16px;
  z-index: 1000;
  font-family: var(--font-body);
  font-size: 14px;
  text-decoration: none;
}
.skip-link:focus { top: 0; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Print */
@media print {
  body { background: white; color: black; }
  .skip-link, .scroll-witness { display: none; }
}

/* Semantic structure: MUST use <main>, proper heading hierarchy */
```
T1 (geometry.md, colors.md) + T2 (OD convention, WCAG compliance) | INHERITED | FROZEN

---

## 12. CSS Grid Patterns
### AD-SPECIFIC

Axis explorations use CSS Grid as the primary layout mechanism. These patterns define
the allowed grid configurations.

### 12.1 Named Grid Areas

AD explorations MUST use named grid areas for semantic clarity. Anonymous grid
tracks are prohibited for structural layout (allowed for decorative sub-grids only).

```css
/* Standard: named areas -- REQUIRED for structural layout */
.axis-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "nav    content"
    "footer footer";
  grid-template-columns: 1fr 2fr;
  gap: var(--space-8);  /* 32px -- uses spacing token */
}
```
T2 (EXT-SPAT-004 Named Grid Areas, R4 Section 2.1 Bento Grid) | AD-SPECIFIC | FROZEN

### 12.2 Column Templates

All grid column values MUST use `fr` units or token-based fixed widths. Arbitrary
pixel widths are prohibited.

**Allowed column patterns:**

| Pattern | Use Case | Example |
|---------|----------|---------|
| Equal columns | Uniform grid | `repeat(3, 1fr)` |
| Weighted columns | Content + sidebar | `2fr 1fr` or `1fr 1.618fr` (golden ratio) |
| Auto-fill responsive | Card grids | `repeat(auto-fill, minmax(280px, 1fr))` |
| Named tracks | Bento grids | `[start] 1fr [mid] 1fr [end]` |

T2 (R4-4.3 CSS Grid fr, R4-4.1 Golden Ratio proportions) | AD-SPECIFIC | FROZEN

### 12.3 Gap Tokens

Grid gaps MUST use spacing tokens. No arbitrary gap values.

```css
/* Standard gap tokens for grid */
--grid-gap-tight: var(--space-4);    /* 16px -- within axis zone */
--grid-gap-standard: var(--space-8); /* 32px -- between axis zones */
--grid-gap-wide: var(--space-16);    /* 64px -- between major sections */
```
T2 (spacing.md scale applied to grid context) | AD-SPECIFIC | FROZEN

### 12.4 Bento Grid Pattern (AD-003)

Bento grids use varied cell sizes to signal importance. Large cells = primary features.

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-8);
}
.bento-item--large {
  grid-column: span 2;
  grid-row: span 2;
}
.bento-item--wide {
  grid-column: span 2;
}
```
T2 (R4-2.1 Bento Grid, R2-4.1 Bento Grid) | AD-SPECIFIC | FROZEN

### 12.5 Responsive Grid Behavior

At viewport widths below 768px, ALL multi-column grids collapse to single column.
This is a binary rule, not a judgment call.

```css
@media (max-width: 768px) {
  [class*="grid"] {
    grid-template-columns: 1fr;
    grid-template-areas: none; /* reset named areas to stack naturally */
  }
}
```
T2 (R4-3.3 Axis Transitions, responsive requirement) | AD-SPECIFIC | FROZEN

---

## 13. Flexbox Configurations
### AD-SPECIFIC

Flexbox is used for axis-internal content flow within grid cells. Grid defines the
macro layout; Flexbox defines micro content arrangement.

### 13.1 Direction and Alignment

**Allowed Flexbox patterns:**

| Pattern | Use Case | CSS |
|---------|----------|-----|
| Row with wrap | Card rows, tag lists | `display: flex; flex-wrap: wrap; gap: var(--space-4);` |
| Column stack | Vertical content flow | `display: flex; flex-direction: column; gap: var(--space-6);` |
| Row centered | Navigation, badges | `display: flex; justify-content: center; align-items: center; gap: var(--space-4);` |
| Space-between | Header bar, footer | `display: flex; justify-content: space-between; align-items: center;` |

T2 (standard Flexbox patterns for axis content) | AD-SPECIFIC | FROZEN

### 13.2 Flex Item Sizing

Flex items MUST use `flex: 1` or explicit `flex-basis` with token values. Arbitrary
`width` on flex items is prohibited (use `flex-basis` or `min-width`/`max-width`).

```css
/* Allowed */
.flex-item { flex: 1; min-width: 280px; }
.flex-item { flex-basis: calc(50% - var(--space-4)); }

/* Prohibited */
.flex-item { width: 347px; } /* arbitrary pixel value */
```
T2 (token-based sizing constraint) | AD-SPECIFIC | FROZEN

### 13.3 Flex vs Grid Decision Rule

**Binary rule:** If the layout has 2+ dimensions (rows AND columns), use Grid.
If the layout flows in ONE dimension only, use Flexbox. Do not use Grid for
single-row or single-column layouts. Do not use Flexbox for 2D layouts.

T2 (layout engine selection rule for AD clarity) | AD-SPECIFIC | FROZEN

---

## 14. Axis Zone Tokens
### AD-SPECIFIC

Axis explorations extend OD's zone token system with axis-specific zone semantics.
These extend (not replace) the inherited `--color-zone-sparse`, `--color-zone-dense`,
and `--color-zone-breathing` tokens.

### 14.1 Axis Zone Custom Properties

```css
:root {
  /* Inherited zone tokens (from OD) */
  --color-zone-sparse: #FEF9F5;     /* sparse zones -- INHERITED | FROZEN */
  --color-zone-dense: #FFFFFF;      /* dense zones -- INHERITED | FROZEN */
  --color-zone-breathing: #FAF5ED;  /* breathing zones -- INHERITED | FROZEN */

  /* AD axis zone extensions */
  --axis-zone-primary: var(--color-zone-dense);     /* Primary content axis */
  --axis-zone-secondary: var(--color-zone-sparse);  /* Secondary/sidebar axis */
  --axis-zone-focal: var(--color-background);       /* Focal point / hub */
  --axis-zone-transition: var(--color-zone-breathing); /* Axis transition space */
}
```
T2 (extends OD-F-005 zone token naming with axis semantics) | AD-SPECIFIC | FROZEN

### 14.2 Zone Token Naming Convention

Axis zone tokens MUST:
1. Reference inherited density zone tokens (not hardcode hex values)
2. Use axis-semantic names (`--axis-zone-*`), not container names (`--sidebar-bg`)
3. Carry dual semantics: spatial position (primary/secondary) AND density function (dense/sparse)

This extends the OD principle: density function names over container names, now also
incorporating spatial axis function names.
T2 (extends OD-F-005, zone token naming from ACCUMULATED-IDENTITY-v1.1 Section 2) | AD-SPECIFIC | FROZEN

### 14.3 Axis Zone Background Rules

- All axis zone backgrounds MUST be fully opaque. opacity === 1 on all visual elements.
- No `rgba()` with alpha < 1.0 anywhere. Binary rule, no exceptions.
- Zone differentiation comes from the 3 locked zone colors, not from transparency.

T2 (OD-AP-003 systemic audit gap, binary opacity rule) | AD-SPECIFIC | FROZEN

---

## 15. Soul-Compliant Axis Transitions
### AD-SPECIFIC

Axis explorations may use transitions and animations for scroll-triggered reveals,
axis changes, and progressive disclosure. ALL must comply with the ANTI-PHYSICAL identity.

### 15.1 Allowed Transitions

| Transition | Allowed? | Constraint |
|------------|----------|------------|
| `opacity` | YES, with conditions | Start AND end values MUST both be 1.0 for persistent elements. Opacity 0->1 allowed ONLY for scroll-triggered entrance animations. |
| `transform: translateX/Y` | YES, with conditions | ONLY for scroll-triggered entrance (element slides in once, then stays). No hover transforms. No continuous animation. |
| `max-height` | YES | For `<details>` expand/collapse. No arbitrary animation. |
| `color` | YES | For hover state color changes on links. |
| `border-color` | YES | For hover state border assertion (e.g., OD-005 territory tiles). |
| `background-color` | YES | For hover state zone highlighting. Must remain fully opaque. |

T2 (ANTI-PHYSICAL identity, OD-005 hover resolution) | AD-SPECIFIC | FROZEN

### 15.2 Prohibited Transitions

| Transition | Why Prohibited |
|------------|----------------|
| `transform: scale()` | Implies z-depth change (ANTI-PHYSICAL) |
| `transform: rotate()` | Implies physical object manipulation |
| `transform: translateY()` on hover | Implies lift/float (Spirit violation -- OD-005) |
| `box-shadow` animation | Prohibited property (Soul Piece #4) |
| `filter: blur()` animation | Implies material/depth (ANTI-PHYSICAL) |
| `perspective` / `transform-style: preserve-3d` | Literal 3D space (ANTI-PHYSICAL) |
| Parallax scrolling | Implies z-depth layers (ANTI-PHYSICAL) |
| Any transition with `opacity` ending < 1.0 | Semi-transparency creates shadow illusion (OD-AP-003) |

T2 (20/20 SOUL FAIL analysis, ANTI-PHYSICAL identity) | AD-SPECIFIC | FROZEN

### 15.3 Scroll-Triggered Reveal Rules

Scroll-triggered animations (e.g., EXT-CREATIVE-004 THE ARRIVING WISDOM) are allowed
under these constraints:

1. Element starts at `opacity: 0; transform: translateY(20px)`.
2. On scroll into viewport, transitions to `opacity: 1; transform: translateY(0)`.
3. Animation fires ONCE. No repeat, no reverse.
4. `prefers-reduced-motion: reduce` disables ALL such animations (Section 11 base styles).
5. Content MUST be accessible (in DOM, readable by screen readers) regardless of animation state.

T2 (EXT-CREATIVE-004, WCAG reduced-motion, progressive enhancement) | AD-SPECIFIC | FROZEN

### 15.4 Transition Timing

All transitions use the same timing function for consistency:

```css
--transition-standard: 0.3s ease;
```

No `ease-in-out`, no custom cubic-bezier, no spring physics. One timing, one system.
T2 (consistency over variety, DD-F-007) | AD-SPECIFIC | FROZEN

---

## 16. Axis Accessibility Requirements
### AD-SPECIFIC

Five binary rules for axis layout accessibility. These are non-negotiable.

### 16.1 Source Order = Logical Reading Order

The HTML source order MUST match the logical reading order of the content.
Screen readers and keyboard users traverse the DOM in source order. If the
visual layout differs from the source order, comprehension breaks.

**Binary rule:** Read the HTML source top-to-bottom. Does the content make
sense in that order? If YES -> PASS. If NO -> FAIL. Fix the HTML, not the CSS.

T2 (WCAG 1.3.2 Meaningful Sequence, R4-3.3 axis transition accessibility) | AD-SPECIFIC | FROZEN

### 16.2 CSS `order` Property BANNED

The CSS `order` property reorders elements visually without changing source order.
This creates a disconnect between what sighted users see and what screen reader
users hear. It is BANNED in all AD explorations.

**Binary rule:** `grep -r "order:" [file]`. If found on any element -> FAIL.
(Exception: `z-index` and `flex-order` are different properties; this rule targets
only the Flexbox/Grid `order` property.)

T2 (WCAG 1.3.2, source-visual order mismatch is an accessibility violation) | AD-SPECIFIC | FROZEN

### 16.3 Every Axis Zone = Section with aria-label

Every distinct axis zone (grid area, flex container representing a content region)
MUST be wrapped in a `<section>` element with a descriptive `aria-label`.

```html
<!-- REQUIRED for every axis zone -->
<section aria-label="API Reference — Core Methods">
  <!-- zone content -->
</section>
```

**Binary rule:** Every named grid area in `grid-template-areas` MUST correspond
to a `<section aria-label="...">` in the HTML. Count grid areas, count sections.
If counts don't match -> FAIL.

T2 (WCAG 1.3.1 Info and Relationships, landmark navigation) | AD-SPECIFIC | FROZEN

### 16.4 scroll-snap-type Requires aria-flowto

If `scroll-snap-type` is used on any container, every snap child MUST have
`aria-flowto` pointing to the next logical snap target, and `aria-describedby`
on the container explaining the scroll behavior.

```html
<div class="snap-container"
     aria-describedby="snap-desc"
     style="scroll-snap-type: x mandatory;">
  <p id="snap-desc" class="sr-only">Scroll horizontally to view more sections.</p>
  <section aria-flowto="section-2" id="section-1">...</section>
  <section aria-flowto="section-3" id="section-2">...</section>
  <section id="section-3">...</section>
</div>
```

**Binary rule:** If `scroll-snap-type` exists in CSS -> check for `aria-flowto`
on every snap child. If any child lacks `aria-flowto` -> FAIL.

T2 (WCAG 1.3.2 + 2.4.3 Focus Order, R4-3.3 contained scroll accessibility) | AD-SPECIFIC | FROZEN

### 16.5 Focus Order Follows Reading Axis

Tab order MUST follow the reading axis established by the layout. For
left-to-right top-to-bottom layouts, focus moves left-to-right across columns,
then top-to-bottom down rows. For hub-and-spoke layouts, focus moves from hub
to first spoke, through spoke content, back to hub, to next spoke.

**Binary rule:** Tab through the entire page with keyboard. Does focus move in
the same direction the eye reads? If YES -> PASS. If NO -> FAIL. Fix with
source order adjustment (not `tabindex`). `tabindex` > 0 is BANNED.

T2 (WCAG 2.4.3 Focus Order, R4-4.2 Hub-and-Spoke keyboard navigation) | AD-SPECIFIC | FROZEN

---

## DIFF: Changes from OD-CONVENTION-SPEC.md

This section documents every value that differs from the inherited OD-CONVENTION-SPEC.md.

### Values CHANGED

| Section | OD Value | AD Value | Reason |
|---------|----------|----------|--------|
| 4. Header meta line | `"EXPLORATION OD-NNN" + "DENSITY: PATTERN"` | `"EXPLORATION AD-NNN" + "AXIS: PATTERN"` | Stage-appropriate labeling |
| 9. Intentional divergences | OD-006 specific list | AD-006 adapted list (same principle, different exploration) | Crown jewel pattern carries forward with AD context |

### Values ADDED (Sections 12-16, all new)

| Section | What Was Added | Provenance |
|---------|---------------|------------|
| 12. CSS Grid Patterns | Named areas, column templates, gap tokens, bento pattern, responsive collapse | R4-2.1, R4-4.3, R2-4.1, EXT-SPAT-004 |
| 13. Flexbox Configurations | Direction/alignment patterns, sizing rules, flex-vs-grid decision rule | Standard Flexbox, token-based constraint |
| 14. Axis Zone Tokens | 4 axis zone custom properties extending OD zone tokens | OD-F-005 extension, ACCUMULATED-IDENTITY-v1.1 |
| 15. Soul-Compliant Transitions | Allowed/prohibited transition list, scroll reveal rules, timing | ANTI-PHYSICAL identity, EXT-CREATIVE-004, 20/20 SOUL FAIL |
| 16. Axis Accessibility | 5 binary rules: source order, order banned, aria-label, aria-flowto, focus order | WCAG 2.1, R4-3.3, R4-4.2 |

### Values UNCHANGED (Sections 1-8, 10-11)

All token values, border system, code block theme, type scale, spacing tokens,
color application, page length target, unified :root block, and base styles are
IDENTICAL to OD-CONVENTION-SPEC.md. Zero modifications.

---

## Per-Standard Soul Test Results

| # | Standard | Gate 1 (Soul Pieces) | Gate 2 (Locked Tokens) | Gate 3 (Anti-Patterns) |
|---|----------|---------------------|----------------------|----------------------|
| 1 | Border System (3-Cat) | PASS | PASS | PASS (remediates OD-F-AP-001) |
| 2 | Code Block Theme (Dark) | PASS | PASS (inverted palette) | PASS |
| 3 | Header Layout (Full-bleed) | PASS (editorial authority) | PASS | PASS |
| 4 | Type Scale (5-level) | PASS (Typography-First) | PASS | PASS (remediates OD-AP-002) |
| 5 | Spacing Tokens (Dual) | PASS (whitespace as design) | PASS | PASS |
| 6 | Color Application | PASS (limited palette) | PASS | PASS (prevents traffic-light) |
| 7 | Page Length Target | PASS (preserves breathing) | PASS | PASS (prevents uniform density) |
| 8 | CSS Grid Patterns | PASS (flat layout, no depth) | PASS (gap uses tokens) | PASS |
| 9 | Flexbox Configurations | PASS (flat layout, no depth) | PASS (sizing uses tokens) | PASS |
| 10 | Axis Zone Tokens | PASS (references density zones) | PASS (extends locked tokens) | PASS (opacity === 1 enforced) |
| 11 | Axis Transitions | PASS (ANTI-PHYSICAL compliant) | PASS (no prohibited properties) | PASS (no hover lift, no scale) |
| 12 | Axis Accessibility | PASS (source order = reading order) | N/A | PASS (prevents visual-source mismatch) |

**All 12 standards PASS all applicable gates.** No revisions required.

---

## COMPACTION-SAFE SUMMARY

- **File:** AD-CONVENTION-SPEC.md
- **Purpose:** Extend OD conventions with 5 axis-specific sections (12-16)
- **Sections 1-11:** INHERITED from OD-CONVENTION-SPEC.md, all values FROZEN
- **Section 12:** CSS Grid -- named areas required, fr units, gap tokens, bento pattern, responsive collapse at 768px
- **Section 13:** Flexbox -- direction patterns, token-based sizing, flex-vs-grid binary decision rule
- **Section 14:** Axis Zone Tokens -- 4 custom properties extending OD zone tokens, opacity === 1 enforced
- **Section 15:** Transitions -- allowed list (opacity entrance, translateX/Y entrance, color/border-color/bg hover), prohibited list (scale, rotate, hover-lift, box-shadow, blur, 3D, parallax, semi-transparent), scroll reveal rules
- **Section 16:** Accessibility -- 5 binary rules (source order, CSS order banned, aria-label on zones, aria-flowto with scroll-snap, focus follows reading axis)
- **DIFF:** 2 values changed (header meta line, AD-006 divergences), 5 sections added, 0 tokens modified
- **Soul Test:** All 12 standards PASS all gates
- **Status:** COMPLETE (ALL sections FROZEN)

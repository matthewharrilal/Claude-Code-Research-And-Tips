<!-- INLINE THREADING HEADER
Tier: A (formal chain document)
WHY THIS EXISTS: Convention specification for CD (Stage 5) explorations — defines all rules builders must follow
STATUS: DRAFT
BUILT ON: AD-CONVENTION-SPEC.md (S1-16), R5-COMBINATION-THEORY.md, combination-rules.md, HANDOFF-AD-TO-CD.md
CONSUMED BY: All CD builders (Wave 1-2), CD auditors, HANDOFF-CD-TO-MIGRATION.md
-->

# CD Convention Specification
## Unified Standards for Combination Explorations

**Purpose:** Extend AD-CONVENTION-SPEC.md with combination-specific standards. Sections 1-16
are INHERITED from AD verbatim. Sections 17-20 define CD-specific conventions for
combination rules, transition grammar, density tolerance, and combination accessibility.

**Inheritance model:** Every value in Sections 1-16 carries its original T1/T2 label
plus INHERITED + FROZEN. Sections 17-20 carry CD-SPECIFIC + the mutability level
indicated per-value (FROZEN, SOFT-LOCKED, or OPEN). All values have three labels:
provenance tier, inheritance status, and mutability.

---

## 1. Soul Compliance Checklist (10 Lines)
### INHERITED FROM: AD-CONV Section 1

Every CD artifact MUST pass all 10 checks. Zero exceptions.

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
### INHERITED FROM: AD-CONV Section 2

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
### INHERITED FROM: AD-CONV Section 3

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
### INHERITED FROM: AD-CONV Section 4

**Unified Standard: Full-bleed header with dark background.**

```
+---------------------------------------------------------------------------+
|  [background: #1A1A1A]                                                    |
|                                                                           |
|  META LINE: "EXPLORATION CD-NNN" + "COMBINATION: RECIPE"                 |
|  font: Inter 500, var(--type-meta), letter-spacing: 0.15em               |
|  color: var(--color-text-secondary)                                       |
|  margin-bottom: var(--space-2)                                            |
|                                                                           |
|  TITLE: "CD-NNN: Combination Name"                                       |
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

**Inner wrapper:** Header content uses `max-width: 1100px; margin: 0 auto` to match
page container width.
T1 (colors.md #1A1A1A, typography.md) + T2 (OD dark header universality validated across all 6 ODs) | INHERITED | FROZEN

**CD meta line format:** `EXPLORATION CD-NNN` replaces `EXPLORATION AD-NNN`. The
axis badge becomes a combination badge: e.g., "COMBINATION: DEEP DIVE" instead of
"AXIS: Z-PATTERN".
T2 (CD-specific label convention) | CD-SPECIFIC | FROZEN

---

## 5. Type Scale
### INHERITED FROM: AD-CONV Section 5

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
names like --type-spoke, --type-grid-cell). CD-specific semantic aliases are
permitted in comments but the token name is `--type-subsection`.
T2 (naming convention from OD) | INHERITED | FROZEN

---

## 6. Spacing Tokens
### INHERITED FROM: AD-CONV Section 6

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
### INHERITED FROM: AD-CONV Section 7

All CDs share the locked palette. The divergence is in APPLICATION -- when each color
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
### INHERITED FROM: AD-CONV Section 8

**Unified Target: 10,000-14,000px body height.**
T2 (OD convention based on dialect analysis) | INHERITED | FROZEN

**Breathing zone budget:** Within the 10,000-14,000px target, a minimum of 15% of
total page height SHOULD be whitespace (chapter dividers, mode transitions, section
gaps). Maximum 25% ceiling (AD-PA-CONVENTIONS C-11). This means ~1,500-2,100px of
breathing space across the page, never exceeding ~3,500px.
T2 (OD whitespace requirement + AD ceiling) | INHERITED | FROZEN

**CD-006 exception:** CD-006 (crown jewel, compound combination) follows the same
relaxed ceiling as OD-006 and AD-006: 12,000-15,000px. As the synthesis page
demonstrating ALL combination recipes, it has unique structural requirements.
T2 (crown jewel exception pattern from OD) | CD-SPECIFIC | FROZEN

---

## 9. CD-006 Intentional Divergences
### INHERITED FROM: AD-CONV Section 9 (adapted for CD)

CD-006 (Creative/Crown Jewel) is deliberately distinct from CD-001-005.
These divergences are INTENTIONAL and MUST NOT be unified:

| Divergence | CD-001-005 Value | CD-006 Value | Why Intentional |
|-----------|------------------|-------------|-----------------|
| `--type-page` | 2.5rem (40px) | 3rem (48px) | Crown jewel editorial voice requires stronger typographic presence |
| Content mode | Single combination recipe per CD | ALL combination recipes in compound sequence | CD-006's thesis requires demonstrating all recipes |
| Drop caps | Optional | Required at section openings | EXT-CREATIVE-005 editorial drop caps are part of the crown jewel identity |

T2 (Crown jewel pattern inherited from OD-006) | INHERITED | FROZEN

**Divergences that are NOT intentional (should be unified):**
- All other tokens (colors, fonts, geometry, accents, spacing) are IDENTICAL across all CDs.

---

## 10. Unified :root Block (Copy-Paste Ready)
### INHERITED FROM: AD-CONV Section 10

For CD-001 through CD-005 (CD-006 overrides --type-page to 3rem):

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

## 11. Required Base Styles (All CDs)
### INHERITED FROM: AD-CONV Section 11

Beyond the :root tokens, every CD MUST include these base styles:

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
### INHERITED FROM: AD-CONV Section 12

Axis explorations use CSS Grid as the primary layout mechanism. These patterns define
the allowed grid configurations. CD inherits all AD grid conventions and extends them
in Section 17 for combination-specific layouts.

### 12.1 Named Grid Areas

CD explorations MUST use named grid areas for semantic clarity. Anonymous grid
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
T2 (EXT-SPAT-004 Named Grid Areas, R4 Section 2.1 Bento Grid) | INHERITED | FROZEN

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

T2 (R4-4.3 CSS Grid fr, R4-4.1 Golden Ratio proportions) | INHERITED | FROZEN

### 12.3 Gap Tokens

Grid gaps MUST use spacing tokens. No arbitrary gap values.

```css
/* Standard gap tokens for grid */
--grid-gap-tight: var(--space-4);    /* 16px -- within axis zone */
--grid-gap-standard: var(--space-8); /* 32px -- between axis zones */
--grid-gap-wide: var(--space-16);    /* 64px -- between major sections */
```
T2 (spacing.md scale applied to grid context) | INHERITED | FROZEN

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
T2 (R4-2.1 Bento Grid, R2-4.1 Bento Grid) | INHERITED | FROZEN

**Bento Grid Litmus Test:** CD-003 bento patterns MUST pass the Bento Grid
Litmus Test -- verify no columns compress below 130px at any viewport width.
If any bento cell falls below 130px computed width -> FAIL. Adjust
`grid-template-columns` or add a collapse breakpoint.
T2 (Bento Grid Litmus Test, _CD-EXEC-CONTEXT.md) | CD-SPECIFIC | FROZEN

### 12.5 Responsive Grid Behavior

At viewport widths below 768px, ALL multi-column grids collapse to single column
(2-3 column grids). At viewport widths below 960px, 4+-column grids collapse to
single column (ESC-001 resolution).

```css
/* 4+ column grids: early collapse at 960px (ESC-001 resolution) */
@media (max-width: 960px) {
  .bento-grid,
  [class*="grid-4col"],
  [class*="grid-5col"] {
    grid-template-columns: 1fr;
    grid-template-areas: none;
  }
}

/* 2-3 column grids: standard collapse at 768px */
@media (max-width: 768px) {
  [class*="grid"] {
    grid-template-columns: 1fr;
    grid-template-areas: none; /* reset named areas to stack naturally */
  }
}
```
T2 (R4-3.3 Axis Transitions, responsive requirement) | INHERITED | FROZEN
**ESC-001 RESOLVED:** 960px collapse threshold for 4+-column grids. AD-006 bento zones
broke destructively between 768-960px (5/5 UNANIMOUS, WOULD-NOT-SHIP from AD-PA-CONVENTIONS
C-08). CD adopts 960px as standard for complex grids. | CD-SPECIFIC | FROZEN

---

## 13. Flexbox Configurations
### INHERITED FROM: AD-CONV Section 13

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

T2 (standard Flexbox patterns for axis content) | INHERITED | FROZEN

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
T2 (token-based sizing constraint) | INHERITED | FROZEN

### 13.3 Flex vs Grid Decision Rule

**Binary rule:** If the layout has 2+ dimensions (rows AND columns), use Grid.
If the layout flows in ONE dimension only, use Flexbox. Do not use Grid for
single-row or single-column layouts. Do not use Flexbox for 2D layouts.

T2 (layout engine selection rule for AD clarity) | INHERITED | FROZEN

---

## 14. Axis Zone Tokens
### INHERITED FROM: AD-CONV Section 14

CD explorations extend the axis zone token system. These tokens define the
semantic backgrounds for different layout regions within combination pages.

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
T2 (extends OD-F-005 zone token naming with axis semantics) | INHERITED | FROZEN

### 14.2 Zone Token Naming Convention

Axis zone tokens MUST:
1. Reference inherited density zone tokens (not hardcode hex values)
2. Use axis-semantic names (`--axis-zone-*`), not container names (`--sidebar-bg`)
3. Carry dual semantics: spatial position (primary/secondary) AND density function (dense/sparse)

This extends the OD principle: density function names over container names, now also
incorporating spatial axis function names.
T2 (extends OD-F-005, zone token naming from ACCUMULATED-IDENTITY-v1.1 Section 2) | INHERITED | FROZEN

### 14.3 Axis Zone Background Rules

- All axis zone backgrounds MUST be fully opaque. opacity === 1 on all visual elements.
- No `rgba()` with alpha < 1.0 anywhere. Binary rule, no exceptions.
- Zone differentiation comes from the 3 locked zone colors, not from transparency.

T2 (OD-AP-003 systemic audit gap, binary opacity rule) | INHERITED | FROZEN

---

## 15. Soul-Compliant Axis Transitions
### INHERITED FROM: AD-CONV Section 15

CD explorations may use transitions and animations for scroll-triggered reveals,
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

T2 (ANTI-PHYSICAL identity, OD-005 hover resolution) | INHERITED | FROZEN

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

T2 (20/20 SOUL FAIL analysis, ANTI-PHYSICAL identity) | INHERITED | FROZEN

### 15.3 Scroll-Triggered Reveal Rules

Scroll-triggered animations (e.g., EXT-CREATIVE-004 THE ARRIVING WISDOM) are allowed
under these constraints:

1. Initial CSS state MUST render content visible. JavaScript MAY add hidden state
   for reveal effect. Content is NEVER gated behind JavaScript.
2. On scroll into viewport, transitions to `opacity: 1; transform: translateY(0)`.
3. Animation fires ONCE. No repeat, no reverse.
4. `prefers-reduced-motion: reduce` disables ALL such animations (Section 11 base styles).
5. Content MUST be accessible (in DOM, readable by screen readers) regardless of animation state.

**ESC-002 RESOLVED:** Progressive enhancement means initial CSS = visible.
JavaScript MAY add `opacity: 0; transform: translateY(20px)` for reveal effect.
If JavaScript fails, content remains visible. This closes the gap between letter
and spirit of the original S15.3 convention.
T2 (EXT-CREATIVE-004, WCAG reduced-motion, progressive enhancement) | INHERITED | FROZEN
ESC-002 resolution from AD-PA-CONVENTIONS C-09 (5/5 UNANIMOUS, WOULD-NOT-SHIP) | CD-SPECIFIC | FROZEN

### 15.4 Transition Timing

All transitions use the same timing function for consistency:

```css
--transition-standard: 0.3s ease;
```

No `ease-in-out`, no custom cubic-bezier, no spring physics. One timing, one system.
T2 (consistency over variety, DD-F-007) | INHERITED | FROZEN

---

## 16. Axis Accessibility Requirements
### INHERITED FROM: AD-CONV Section 16

Five binary rules for axis layout accessibility. These are non-negotiable.

### 16.1 Source Order = Logical Reading Order

The HTML source order MUST match the logical reading order of the content.
Screen readers and keyboard users traverse the DOM in source order. If the
visual layout differs from the source order, comprehension breaks.

**Binary rule:** Read the HTML source top-to-bottom. Does the content make
sense in that order? If YES -> PASS. If NO -> FAIL. Fix the HTML, not the CSS.

T2 (WCAG 1.3.2 Meaningful Sequence, R4-3.3 axis transition accessibility) | INHERITED | FROZEN

### 16.2 CSS `order` Property BANNED

The CSS `order` property reorders elements visually without changing source order.
This creates a disconnect between what sighted users see and what screen reader
users hear. It is BANNED in all CD explorations.

**Binary rule:** `grep -r "order:" [file]`. If found on any element -> FAIL.
(Exception: `z-index` and `flex-order` are different properties; this rule targets
only the Flexbox/Grid `order` property.)

T2 (WCAG 1.3.2, source-visual order mismatch is an accessibility violation) | INHERITED | FROZEN

### 16.3 Every Axis Zone = Section with aria-label

Every distinct axis zone (grid area, flex container representing a content region)
MUST be wrapped in a `<section>` element with a descriptive `aria-label`.

```html
<!-- REQUIRED for every axis zone -->
<section aria-label="API Reference -- Core Methods">
  <!-- zone content -->
</section>
```

**Binary rule:** Every named grid area in `grid-template-areas` MUST correspond
to a `<section aria-label="...">` in the HTML. Count grid areas, count sections.
If counts don't match -> FAIL.

T2 (WCAG 1.3.1 Info and Relationships, landmark navigation) | INHERITED | FROZEN

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

T2 (WCAG 1.3.2 + 2.4.3 Focus Order, R4-3.3 contained scroll accessibility) | INHERITED | FROZEN

### 16.5 Focus Order Follows Reading Axis

Tab order MUST follow the reading axis established by the layout. For
left-to-right top-to-bottom layouts, focus moves left-to-right across columns,
then top-to-bottom down rows. For hub-and-spoke layouts, focus moves from hub
to first spoke, through spoke content, back to hub, to next spoke.

**Binary rule:** Tab through the entire page with keyboard. Does focus move in
the same direction the eye reads? If YES -> PASS. If NO -> FAIL. Fix with
source order adjustment (not `tabindex`). `tabindex` > 0 is BANNED.

T2 (WCAG 2.4.3 Focus Order, R4-4.2 Hub-and-Spoke keyboard navigation) | INHERITED | FROZEN

---

## Appendix A: Deviation Protocol
### INHERITED FROM: OD-CONV Deviation Protocol

When a builder encounters a situation where a FROZEN convention appears to conflict
with the design intent, the following protocol MUST be followed:

### A.1 Deviation Classification

| Level | Name | Conditions | Required Action |
|-------|------|-----------|-----------------|
| Level 0 | **No Deviation** | Value matches convention exactly | None -- apply as-is |
| Level 1 | **Contextual Application** | Convention applies but requires interpretation for this specific context | Document interpretation in code comment citing convention ID |
| Level 2 | **Documented Deviation** | Convention cannot be applied as-written; alternative achieves same perceptual intent | File deviation request: cite convention, explain conflict, propose alternative, get approval |
| Level 3 | **Convention Conflict** | Two FROZEN conventions produce contradictory requirements | Escalate immediately -- do NOT resolve independently. Document both conventions and the conflict. Lead resolves. |

### A.2 Deviation Request Format

```markdown
## Deviation Request

**Convention:** [Section number and name]
**Status:** [FROZEN / SOFT-LOCKED / OPEN]
**Conflict:** [What the convention requires vs what the context needs]
**Proposed Alternative:** [Specific alternative with CSS/HTML]
**Perceptual Intent Preserved:** [YES/NO -- explain how the spirit is maintained]
**Soul Compliance:** [Does the alternative violate any soul piece? Which?]
```

### A.3 Who Can Approve

- **FROZEN:** Only the Lead (with documented rationale that updates this spec)
- **SOFT-LOCKED:** Lead or designated reviewer
- **OPEN:** Builder may self-approve with documented rationale

T2 (deviation management, prevents ad-hoc convention breaking) | INHERITED | FROZEN

---

## 17. Combination Rules
### CD-SPECIFIC

CD explorations combine axis patterns, density patterns, and components into compound
layouts. These rules govern how combinations work. They are derived from R5-COMBINATION-THEORY.md
(39 findings) and validated by AD's compound exploration (AD-006, 38/40).

### 17.1 The 4 Combination Rules

Every CD page MUST comply with all 4 rules when placing components adjacently.

#### Rule 1: Never Stack Same-Velocity (R5-T2)

Components have reading velocities. Stacking two SLOW components consecutively
creates reader fatigue. Insert a FAST component between them.

| Velocity | Components |
|----------|------------|
| **SLOW** | Code Snippet, Core Abstraction, Reasoning, Essence Callout |
| **MEDIUM** | File Tree, Decision Matrix |
| **FAST** | Info Callout, Tip Callout, Gotcha Callout, Challenge Callout, Task Component |

**Binary rule:** Scan adjacent component pairs. Two consecutive SLOW components
without a FAST/MEDIUM between them -> FAIL.

```
WRONG: Code Snippet -> Core Abstraction -> Reasoning
RIGHT: Code Snippet -> Tip Callout -> Reasoning
```

T2 (R5-T2 Velocity Mismatch Rule) | CD-SPECIFIC | FROZEN

#### Rule 2: Temperature Flow (R5-T3)

Components have semantic temperatures. Direct Warm->Cold transitions create jarring
dissonance. A Neutral component MUST buffer the transition.

**Temperature Taxonomy (11 components x 3 columns):**

| Component | Extended Term | Base Temperature | Temperature Flow Compatibility |
|-----------|-------------|-----------------|-------------------------------|
| Code Snippet | -- | Neutral | Buffers any transition |
| Info Callout | -- | Neutral | Buffers any transition |
| Tip Callout | -- | Warm | Flows naturally to Neutral |
| Gotcha Callout | -- | Cold | Flows naturally from Neutral |
| Essence Callout | Reverent | Warm | Flows naturally to Neutral |
| Challenge Callout | -- | Warm | Flows naturally to Neutral |
| File Tree | -- | Neutral | Buffers any transition |
| Decision Matrix | -- | Neutral | Buffers any transition |
| Core Abstraction | Reverent | Warm | Flows naturally to Neutral; extended "Reverent" = deepest Warm |
| Task Component | Utilitarian | Cold | Flows naturally from Neutral; extended "Utilitarian" = functional Cold |
| Reasoning | Deliberate | Neutral | Buffers any transition; extended "Deliberate" = considered Neutral |

**Extended term mapping:**
- Reverent -> Warm (Core Abstraction, Essence Callout)
- Utilitarian -> Cold (Task Component)
- Deliberate -> Neutral (Reasoning)

**Flow direction:** Warm -> Neutral -> Cold is smooth. Cold -> Warm requires a
Neutral buffer. Warm -> Cold without buffer -> FAIL.

```
WRONG: Tip Callout (Warm) -> Gotcha Callout (Cold)
RIGHT: Tip Callout (Warm) -> Info Callout (Neutral) -> Gotcha Callout (Cold)
```

T2 (R5-T3 Semantic Dissonance) | CD-SPECIFIC | FROZEN

#### Rule 3: Weight Balance (R5-G3)

Components have visual weight. Consecutive heavy components overwhelm the reader.
Intersperse with light components.

| Weight | Components |
|--------|------------|
| **Heavy** | Code Snippet (dark mass), Reasoning (large frame), Core Abstraction (frame + dark code), Decision Matrix, File Tree |
| **Medium** | Gotcha Callout, Essence Callout, Challenge Callout, Task Component |
| **Light** | Info Callout, Tip Callout |

**Golden ratio guideline:** For every heavy component, include 1-2 light/medium
components before the next heavy component.

**Reading rhythm ratios (per page):**
- Heavy components: 20-30% of component count
- Medium components: 30-40% of component count
- Light components: 30-40% of component count

```
WRONG: Code Snippet -> Decision Matrix -> Reasoning
RIGHT: Code Snippet -> Info Callout -> Decision Matrix
```

T2 (R5-G3 Visual Weight Balance) | CD-SPECIFIC | SOFT-LOCKED

#### Rule 4: Semantic Proximity Spacing (R5-G1)

Spacing between components signals their semantic relationship. Tight spacing
means "these are related." Wide spacing means "new topic."

| Relationship | Spacing Token | Pixel Value |
|-------------|--------------|-------------|
| **Tight coupling** (e.g., Code + explaining Tip) | `var(--space-4)` | 16px |
| **Moderate** (different topics within section) | `var(--space-6)` to `var(--space-8)` | 24-32px |
| **Loose** (section break) | `var(--space-12)` to `var(--space-16)` | 48-64px |
| **Recovery** (chapter divider, breathing zone) | `var(--space-16)` to `var(--space-20)` | 64-80px |

AD validated confidence-proportional spacing (AD-F-015): Established=24px, Probable=32px,
Speculative=40px, Open=48px/64px. The same principle applies to component proximity:
the more related two components are, the tighter their spacing.

T2 (R5-G1 Semantic Proximity, AD-F-015) | CD-SPECIFIC | FROZEN

### 17.2 Velocity Interaction Rules

When axis patterns combine, their inherent velocities interact.

| Combination | Outcome | Guidance |
|------------|---------|---------|
| SLOW axis + SLOW axis (e.g., Spiral + Core Abstraction) | **Contemplative plateau** -- risk of reader fatigue | Insert a FAST component (Tip, Info) at the axis boundary. Maximum 2 consecutive SLOW zones before a FAST interrupt. |
| FAST axis + FAST axis (e.g., Z-Pattern + Choreography) | **Scanning acceleration** -- risk of shallow engagement | Use Recovery spacing (64-80px) at boundary. Insert an Essence callout to force deceleration. |
| SLOW axis + FAST axis (e.g., F-Pattern + Bento Grid) | **Natural rhythm** -- velocity alternation creates PULSE | This is the ideal. The transition itself creates the breathing room. Standard spacing (32px) at boundary. |

T2 (R5-T2 extended to combination scale, AD-F-024 sequential constraint) | CD-SPECIFIC | SOFT-LOCKED

### 17.3 Weight Distribution Guidelines

Within a single viewport (~900px height), visual weight MUST be balanced.

| Viewport Composition | Heavy | Medium | Light | Total Components |
|---------------------|-------|--------|-------|-----------------|
| **Dense viewport** | 1-2 | 1-2 | 1-2 | 3-5 |
| **Standard viewport** | 1 | 1-2 | 1-3 | 3-5 |
| **Breathing viewport** | 0 | 0-1 | 0-1 | 0-2 (+ whitespace) |

**Binary rule:** No viewport section may contain more than 3 heavy components.
If a combination recipe places 4+ heavy components in one viewport -> FAIL.
Split across viewports with a breathing zone between groups.

T2 (R5-G3, R5-Q1 density limits) | CD-SPECIFIC | SOFT-LOCKED

### 17.4 Component Compatibility Matrix Reference

The 11x11 component compatibility matrix is defined in R5-COMBINATION-THEORY.md
(Part 10, Appendix). CD builders MUST consult it before placing components adjacently.

**Reference:** `../../provenance/original-research/R5-COMBINATION-THEORY.md` --
Appendix: Quick Reference Matrix.

**Legend:** Yes = Excellent pairing, OK = Acceptable with buffer, No = Avoid
consecutive placement.

**Key "No" pairings (avoid consecutive):**
- Gotcha + Gotcha (alarm fatigue)
- Gotcha + Challenge (mood whiplash)
- Essence + Essence (axiom fatigue)
- Challenge + Challenge (enthusiasm fatigue)
- FileTree + FileTree (structural monotony)
- Matrix + Matrix (decision paralysis)
- Core + Core (contemplation overload)
- Task + Task (checklist fatigue)
- Reasoning + Reasoning (deliberation overload)

T2 (R5 compatibility matrix) | CD-SPECIFIC | FROZEN

### 17.5 Traffic Light Rule

**NEVER place Tip Callout (green, `--accent-green`) adjacent to Gotcha Callout
(coral, `--accent-coral`).** This creates a "traffic light" effect that feels
childish and diminishes the semantic authority of both callouts.

**Binary rule:** Scan for adjacent Tip + Gotcha in either order. If found -> FAIL.
Insert a neutral component (Code Snippet, prose, Info Callout) or whitespace
between them.

```
WRONG: Tip Callout -> Gotcha Callout
RIGHT: Tip Callout -> [whitespace or neutral component] -> Gotcha Callout
```

T2 (DD-F-015, R5-T3 traffic light, combination-rules.md) | CD-SPECIFIC | FROZEN

### 17.6 Combination Recipes (from R5)

Six validated combination recipes that CD builders SHOULD use as starting patterns.

| Recipe | Use Case | Sequence | Source |
|--------|----------|----------|--------|
| **Quick Reference** | API docs, concise how-to | Info -> Code -> Tip | R5 Recipe 1 |
| **Deep Dive** | Architectural explanation | Info -> Essence -> Core Abstraction -> Code -> Gotcha -> Task | R5 Recipe 2 |
| **Decision Guide** | Technology choice | Info -> Decision Matrix -> Reasoning -> Task | R5 Recipe 3 |
| **Troubleshooting** | Error resolution | Gotcha -> Decision Matrix -> Code -> Task -> Tip | R5 Recipe 4 |
| **Tutorial Section** | Step-by-step learning | Info -> Task -> Code -> Tip -> Code -> Gotcha -> Challenge | R5 Recipe 5 |
| **Architecture Overview** | System structure | File Tree -> Core Abstraction -> Decision Matrix -> Tip | R5 Recipe 6 |

These are starting patterns, not rigid templates. Builders MAY adapt sequences as
long as all 4 combination rules (velocity, temperature, weight, proximity) are satisfied.

T2 (R5 Part 8 Combination Recipes) | CD-SPECIFIC | SOFT-LOCKED

---

## 18. Transition Grammar Extension
### CD-SPECIFIC

CD inherits the AD-F-025 transition grammar (5x5 matrix) and extends it for
combination-scale transitions where density, organization, AND axis change simultaneously.

### 18.1 AD-F-025 Inherited Matrix (5 Axis Patterns)

The transition grammar classifies all 20 directed transitions between 5 axis patterns
into 3 types. This matrix is INHERITED from AD and FROZEN.

| From \ To | Z-Pattern | F-Pattern | Bento | Spiral | Choreography |
|-----------|-----------|-----------|-------|--------|-------------|
| **Z-Pattern** | -- | Smooth | Bridge | Bridge | Smooth |
| **F-Pattern** | Smooth | -- | Bridge | Bridge | Smooth |
| **Bento** | Bridge | Bridge | -- | Breathing | Bridge |
| **Spiral** | Bridge | Bridge | Breathing | -- | Breathing |
| **Choreography** | Smooth | Smooth | Bridge | Breathing | -- |

**Transition types:**
- **Smooth (4 pairs):** Z<->F, Z<->Choreo, F<->Choreo. Natural flow, standard
  spacing (32px). These pairs share reading-axis compatibility.
- **Bridge (10 pairs):** Z<->Bento, Z<->Spiral, F<->Bento, F<->Spiral,
  Bento<->Choreo. Require an explicit visual transition element (divider, breathing
  zone, interstitial). Recovery spacing (48-64px).
- **Breathing (6 pairs):** Bento<->Spiral, Spiral<->Choreo. Maximum transition
  difficulty. Require full breathing zone (64-80px) with a visual transition element.

T2 (AD-F-025, validated in AD-006 compound exploration) | INHERITED | FROZEN

### 18.2 Combination-Scale Extension

When CD combines axis patterns, the transitions become more complex because density
AND organization change simultaneously with axis geometry. The AD grammar addresses
axis-to-axis transitions. CD extends this to compound transitions.

**Compound transition rule:** When transitioning between two combined zones that
differ in 2+ dimensions (axis + density, or axis + organization), treat the
transition as one step HIGHER in the grammar:

| AD Grammar Type | Compound Upgrade | Spacing |
|----------------|-----------------|---------|
| Smooth (in AD) | -> Bridge (in CD) | 48-64px |
| Bridge (in AD) | -> Breathing (in CD) | 64-80px |
| Breathing (in AD) | -> Double Breathing (in CD) | 80px + visual divider |

**Rationale (AD-F-024):** Compound is SEQUENTIAL, not simultaneous. When multiple
dimensions change at a transition boundary, the reader needs MORE decompression
time, not less. The upgrade ensures each dimension change registers perceptually.

T2 (AD-F-024 sequential constraint, AD-F-025 grammar, R5-S2 density wave) | CD-SPECIFIC | SOFT-LOCKED

### 18.3 Transition Types at Combination Scale

#### Smooth Transitions (4 pairs at AD level -> Bridge at CD level)

When Z<->F, Z<->Choreo, or F<->Choreo transitions occur within a CD page:
- Use `var(--space-12)` gap (48px) instead of AD's `var(--space-8)` (32px)
- Include a 1px Cat 2 data separator line at the midpoint
- The separator visually acknowledges the axis change

#### Bridge Transitions (10 pairs at AD level -> Breathing at CD level)

When Z<->Bento, F<->Spiral, or similar transitions occur within a CD page:
- Use `var(--space-16)` gap (64px)
- Include a breathing zone with `background: var(--color-zone-breathing)` (#FAF5ED)
- Breathing zone height: `var(--space-8)` (32px) minimum

#### Breathing Transitions (6 pairs at AD level -> Double Breathing at CD level)

When Bento<->Spiral, Spiral<->Choreo, or similar maximum-difficulty transitions occur:
- Use `var(--space-20)` gap (80px)
- Include a visual divider: 3px Cat 1 structural border + breathing zone on both sides
- The divider says: "complete context switch ahead"

T2 (AD-F-025 extended, R5-S2 density wave sequencing) | CD-SPECIFIC | SOFT-LOCKED

### 18.4 Choreography as Universal Bridge

Choreography is the only axis pattern that has Smooth transitions with both
Z-Pattern and F-Pattern AND Bridge transitions with Bento. This makes it the
most versatile transition mediator.

**Recommendation:** When combining patterns with Breathing-level difficulty
(e.g., Bento -> Spiral), consider inserting a Choreography section as a
transition bridge. The sequence Bento -> Choreography -> Spiral has two Bridge
transitions instead of one Breathing transition, which may read more smoothly.

T2 (AD-F-025 transition grammar analysis) | CD-SPECIFIC | OPEN

### 18.5 Spiral as Most Isolated Pattern

Spiral has Breathing transitions with both Bento and Choreography, and Bridge
transitions with Z-Pattern and F-Pattern. It has NO Smooth transitions with
any other pattern. This makes it the most isolated pattern in the grammar.

**Implication for CD:** Spiral sections within combination pages require the
strongest transition treatment. Always use Breathing-level (or higher) transitions
when entering or exiting a Spiral zone.

T2 (AD-F-025 transition grammar analysis) | CD-SPECIFIC | FROZEN

---

## 19. Density Tolerance Table
### CD-SPECIFIC

DD-F-013 operationalized: per-component density tolerance defines how much density
variation each component can absorb before it needs to split into multiple instances
or change form.

### 19.1 Per-Component Density Tolerance

All values below are DRAFT. CD builders MUST test empirically during Wave 1 and
update this table with validated values. Values marked with `*` are initial estimates
based on R5-COMBINATION-THEORY.md analysis and AD perceptual audit evidence.

| Component | Min Density | Max Density | Compression Behavior | Splitting Threshold |
|-----------|------------|------------|---------------------|-------------------|
| Code Snippet | SPARSE (short snippet, 5-10 lines) | DENSE (40-50 lines max) | Line count reduction; switch to `overflow-y: auto` with max-height at DENSE ceiling | Split at 50+ lines into multiple snippets with explanatory callouts between* |
| Info Callout | SPARSE (1 sentence) | MODERATE (3-4 sentences) | Text wraps naturally; no structural change | Split into 2 callouts or convert to prose at 5+ sentences* |
| Tip Callout | SPARSE (1 sentence) | MODERATE (2-3 sentences) | Text wraps naturally | Convert to prose section at 4+ sentences (loses callout impact)* |
| Gotcha Callout | SPARSE (1 sentence) | MODERATE (3 sentences) | Text wraps; urgency preserved via border color | Split into numbered warning list at 4+ items* |
| Essence Callout | SPARSE (1 phrase) | LOW-MODERATE (2 sentences) | Italic serif voice degrades at length; keep brief | Do not exceed 2 sentences -- convert to Core Abstraction if longer* |
| Challenge Callout | SPARSE (1 prompt) | MODERATE (3 steps) | Numbered steps wrap naturally | Convert to Task Component at 4+ steps* |
| File Tree | LOW-MODERATE (3-5 items) | DENSE (20-30 items) | Indentation depth increases; readability degrades at depth > 4 | Split into multiple trees with explanatory headers at 30+ items* |
| Decision Matrix | MODERATE (2-3 options x 3-4 criteria) | DENSE (5 options x 6 criteria) | Horizontal scroll at narrow viewports; readability degrades | Split into multiple focused matrices at 6+ options OR 7+ criteria* |
| Core Abstraction | MODERATE (principle + 10-line code) | DENSE (principle + 30-line code) | Code zone compresses; philosophical zone preserved | Split principle from code at 30+ lines; use separate Code Snippet* |
| Task Component | SPARSE (2-3 tasks) | DENSE (8-10 tasks) | Checklist grows vertically; each task stays single-line | Group into subtask sections at 10+ items* |
| Reasoning | MODERATE (2 columns, 3-4 rows) | DENSE (2 columns, 8-10 rows) | Columns stack at narrow viewports; summary zone absorbs overflow | Split into sequential Reasoning components at 10+ comparison points* |

T2 (DD-F-013 operationalized, R5-Q1 density limits) | CD-SPECIFIC | OPEN

### 19.2 Combination Density Tolerance

When components are placed in combination (per Section 17 recipes), the effective
density tolerance of each component is REDUCED. Adjacent heavy components compress
the perceptual space available for each.

**Reduction rule (DRAFT):**
- 2 heavy components in one viewport: each operates at ~75% of its individual Max Density
- 3 heavy components in one viewport: each operates at ~60% of its individual Max Density
- More than 3 heavy components: FAIL -- split across viewports

Example: A Code Snippet alone tolerates 40-50 lines. When adjacent to a Decision
Matrix in the same viewport, reduce to 30-37 lines. When a third heavy component
(Reasoning) is added, reduce to 24-30 lines.

T2 (DD-F-013 at combination scale, R5-G3 weight balance) | CD-SPECIFIC | OPEN

### 19.3 Component Density Limit Summary

Maximum component count per viewport, derived from combination-rules.md:

| Component Type | Maximum per Viewport | Rationale |
|----------------|---------------------|-----------|
| Callouts (any type) | 2 | Alarm fatigue (DD-F-014) |
| Code Snippets | 2 | Cognitive load |
| Decision structures (Matrix, Reasoning) | 1 | Focus -- decision paralysis anti-pattern (R5-A3) |
| Heavy components total | 3 | Weight balance (R5-G3, Section 17.3) |
| Total components | 5 | Information processing ceiling |

T2 (combination-rules.md, R5-Q1) | CD-SPECIFIC | SOFT-LOCKED

### 19.4 Responsive Combination Behavior

When viewport width decreases, combination layouts must degrade gracefully. Each
combination recipe has specific collapse behavior.

#### 19.4.1 Collapse Behavior at 768px

At `max-width: 768px`, ALL multi-column combination layouts collapse to single column.
The combination's axis pattern is sacrificed in favor of readability. The remaining
single-column layout preserves the DENSITY PATTERN (PULSE, WAVE, etc.) even though
the AXIS PATTERN (Z, F, Bento, etc.) is lost.

**Rationale:** Density is felt through spacing and typography, which work in single
column. Axis is felt through spatial arrangement, which requires width. Below 768px,
width is insufficient for axis expression.

T2 (AD-CONV S12.5, responsive constraint) | CD-SPECIFIC | FROZEN

#### 19.4.2 Pattern Dominance at Narrow Viewports

When a combination collapses to single column, the following determines which
pattern's reading order dominates:

| Combination Type | Dominant Pattern (< 768px) | Rationale |
|-----------------|---------------------------|-----------|
| Z + F | F-Pattern dominance | F's top-to-bottom scanning preserves in single column |
| Z + Bento | Z-Pattern dominance | Z's alternating width creates PULSE in single column |
| F + Spiral | F-Pattern dominance | Spiral cannot express in single column |
| Bento + any | Bento cells stack vertically, largest first | Importance hierarchy maintained through stack order |
| Choreography + any | Choreography dominance | Direction cues (interstitials, transitions) persist in single column |
| Compound (3+ patterns) | Density pattern dominance | When all axis is lost, density rhythm is the remaining structure |

T2 (AD-F-024 sequential constraint, responsive degradation) | CD-SPECIFIC | OPEN

#### 19.4.3 Stack Order for Multi-Column Collapse

When multi-column combination layouts collapse to single column:

1. **Primary content column** stacks ABOVE secondary/sidebar columns
2. Within stacked columns, components maintain their within-column source order
3. Navigation/index elements move to TOP of stack (before primary content)
4. Decorative/supplementary elements move to BOTTOM of stack
5. Breathing zones between columns are replaced with standard section gaps (`var(--space-8)`)

**Binary rule:** After collapse, read the single-column page top-to-bottom. Does
the content still make narrative sense? If YES -> PASS. If NO -> fix source order.

T2 (WCAG 1.3.2, responsive single-column readability) | CD-SPECIFIC | FROZEN

---

## 20. Combination Accessibility
### CD-SPECIFIC

CD extends the 5 binary accessibility rules from Section 16 with combination-specific
requirements for nested interaction, compound landmarks, and multi-axis reading order.

### 20.1 Nested Focus Management

When components contain interactive sub-components (e.g., a Code Snippet with a
copy button inside a Bento grid cell that itself is focusable), focus management
follows these rules:

1. **Outer-to-inner focus flow:** Tab first reaches the outermost interactive container,
   then descends into child interactive elements.
2. **No focus traps:** Every interactive element MUST allow Tab to escape to the next
   element. Focus must never loop within a single component.
3. **Composite widget pattern:** If a component functions as a composite widget
   (e.g., a Decision Matrix with sortable columns), use `role="grid"` with
   `aria-activedescendant` for internal navigation. Arrow keys navigate within;
   Tab escapes to the next component.

```html
<!-- Nested focus example: Bento cell containing Code Snippet with copy button -->
<section aria-label="Authentication Example" class="bento-item">
  <div class="code-block" role="group" aria-label="Code example with copy action">
    <pre><code>// authentication code</code></pre>
    <button class="copy-btn" aria-label="Copy code to clipboard">Copy</button>
  </div>
</section>
```

**Binary rule:** Tab through the combination page. At every interactive element,
can you Tab OUT of it to the next element? If any element traps focus -> FAIL.

T2 (WCAG 2.1.2 No Keyboard Trap, combination nesting) | CD-SPECIFIC | FROZEN

### 20.2 Combined Landmarks for Screen Readers

Combination pages have multiple axis zones, each wrapped in `<section>` per
Section 16.3. When zones combine, the landmark tree must remain navigable.

**Rules:**
1. **Maximum landmark depth: 2 levels.** A `<section>` inside a `<section>` is
   acceptable. A `<section>` inside a `<section>` inside a `<section>` is prohibited.
2. **Every landmark has a unique `aria-label`.** No two sections on the same page
   may share identical aria-labels.
3. **The `<main>` element contains ALL content sections.** No content sections
   outside `<main>`.
4. **Complementary content** (sidebar, supplementary) uses `<aside>` with `aria-label`.
5. **Navigation** uses `<nav>` with `aria-label` distinguishing it from other navs.

```html
<main>
  <!-- Level 1: Combination zones -->
  <section aria-label="Z-Pattern Analysis">
    <!-- Level 2: Axis sub-zones (maximum depth) -->
    <section aria-label="Z-Pattern Overview">...</section>
    <section aria-label="Z-Pattern Deep Dive">...</section>
  </section>
  <section aria-label="Bento Grid Comparison">
    <section aria-label="Grid Layout Options">...</section>
    <section aria-label="Grid Performance Data">...</section>
  </section>
</main>
```

**Binary rule:** Count nesting depth of `<section>` elements. If any section is
nested 3+ levels deep -> FAIL. Flatten the structure.

T2 (WCAG 1.3.1 Info and Relationships, landmark navigation at combination scale) | CD-SPECIFIC | FROZEN

### 20.3 Multi-Axis Reading Order with aria-flowto

When a combination page presents content in a non-linear reading order (e.g., a
Bento grid where the eye moves in a non-sequential spatial path), `aria-flowto`
chains MUST guide screen readers through the intended reading sequence.

**Rules:**
1. Every content section that is NOT read in natural DOM order MUST have `aria-flowto`
   pointing to the next logical section.
2. The `aria-flowto` chain must cover EVERY content section -- no orphaned sections.
3. The first section in the reading order carries `aria-flowto` to the second, the
   second to the third, and so on. The last section has no `aria-flowto`.

```html
<!-- Multi-axis reading order for Z + Bento combination -->
<section id="overview" aria-label="Page Overview" aria-flowto="z-analysis">
  <!-- Z-Pattern overview content -->
</section>
<section id="bento-grid" aria-label="Component Grid" aria-flowto="conclusion">
  <!-- Bento comparison -- visually between overview and analysis -->
</section>
<section id="z-analysis" aria-label="Z-Pattern Analysis" aria-flowto="bento-grid">
  <!-- Detailed analysis -- visually below overview but read second -->
</section>
<section id="conclusion" aria-label="Conclusion">
  <!-- Final section -->
</section>
```

**Binary rule:** List all `<section>` elements. Trace the `aria-flowto` chain from
first to last. Does every section appear exactly once in the chain? If any section
is orphaned or duplicated -> FAIL.

T2 (WCAG 1.3.2 Meaningful Sequence, multi-axis navigation) | CD-SPECIFIC | FROZEN

### 20.4 CD-004 No-Depth Constraint

The ANTI-PHYSICAL identity is absolute. Combination pages MUST NOT use any technique
that creates a perception of depth, layering, or z-axis separation.

**CD-004 Prohibited Techniques:**
- `opacity` < 1 on ANY persistent element (semi-transparency implies layering)
- `z-index` stacking for visual depth (z-index for functional overlay like skip-link
  is acceptable; z-index for "this card is in front of that card" is BANNED)
- `box-shadow` in any form (already in Soul Checklist, repeated for emphasis)
- Depth gradients (`linear-gradient` simulating light source or shadow)
- Background blur (`backdrop-filter: blur()`)
- Perspective transforms (`perspective`, `transform-style: preserve-3d`)
- "Card elevation" patterns (raised cards, floating elements)
- Overlapping elements that create perceived stacking (except for the solid-offset
  pseudo-element technique from EXT-CREATIVE-001)

**How to achieve visual hierarchy WITHOUT depth:**
- Color differentiation (zone backgrounds: sparse, dense, breathing)
- Typography differentiation (serif/sans/mono, weight, size)
- Border weight (Cat 1: 3px+ structural, Cat 2/3: 1px data/micro)
- Spacing (proximity signals relationship per Section 17.4)
- Border-weight gradient as geological encoding (AD-F-014: 4px/3px/1px)

**Binary rule:** Search for `opacity:` (not in animation), `z-index:` (not on
skip-link/modal), `box-shadow:`, `backdrop-filter:`, `perspective:`,
`transform-style: preserve-3d`. If found for visual depth purposes -> FAIL.

T2 (ANTI-PHYSICAL identity, 20/20 SOUL FAIL, AD-F-013 soul as generative constraint) | CD-SPECIFIC | FROZEN

---

## DIFF: Changes from AD-CONVENTION-SPEC.md

This section documents every value that differs from the inherited AD-CONVENTION-SPEC.md.

### Values CHANGED

| Section | AD Value | CD Value | Reason |
|---------|----------|----------|--------|
| 4. Header meta line | `"EXPLORATION AD-NNN" + "AXIS: PATTERN"` | `"EXPLORATION CD-NNN" + "COMBINATION: RECIPE"` | Stage-appropriate labeling |
| 4. Header inner wrapper max-width | 860px | 1100px | AD-PA-CONVENTIONS C-01 validated 1100px after user intervention |
| 8. Breathing zone budget | 15% floor only | 15% floor + 25% ceiling | AD-PA-CONVENTIONS C-11 ceiling validated across 6 pages |
| 9. Intentional divergences | AD-006 specific list | CD-006 adapted list (same principle, different exploration) | Crown jewel pattern carries forward with CD context |
| 12.5 Responsive grid | 768px only | 960px for 4+-col, 768px for 2-3 col | ESC-001 resolution -- bento broke destructively at 768-960px |
| 15.3 Scroll reveal | Content starts at opacity:0 | Content starts VISIBLE; JS MAY add hidden | ESC-002 resolution -- 40-60% content invisibility at AD-006 |

### Values ADDED (Sections 17-20, all new)

| Section | What Was Added | Provenance |
|---------|---------------|------------|
| 17. Combination Rules | 4 rules (velocity, temperature, weight, proximity), velocity interaction, weight distribution, compatibility matrix ref, traffic light, 6 recipes | R5-COMBINATION-THEORY.md, combination-rules.md, AD-F-015, AD-F-024 |
| 18. Transition Grammar Extension | AD-F-025 5x5 matrix inherited, compound upgrade rule, 3 transition types at CD scale, Choreography as bridge, Spiral isolation | AD-F-025, AD-F-024, R5-S2 |
| 19. Density Tolerance Table | 11-row component tolerance, combination reduction rule, responsive collapse behavior, pattern dominance, stack order | DD-F-013, R5-Q1, R5-G3, combination-rules.md |
| 20. Combination Accessibility | Nested focus, combined landmarks (2-level max), aria-flowto chains, CD-004 no-depth constraint | WCAG 2.1, ANTI-PHYSICAL, AD-F-013 |

### Values UNCHANGED (Sections 1-3, 5-7, 10-14, 16)

All token values, border system, code block theme, type scale, spacing tokens,
color application, unified :root block, base styles, grid patterns (base), flexbox
configurations, axis zone tokens, and axis accessibility are IDENTICAL to
AD-CONVENTION-SPEC.md. Zero modifications.

### Escalations RESOLVED

| Escalation | Resolution | Section |
|-----------|-----------|---------|
| ESC-001 (960px collapse for 4+-col grids) | Adopted as FROZEN convention. 960px for complex grids, 768px for simple grids. | 12.5 |
| ESC-002 (progressive enhancement) | Adopted as FROZEN convention. Initial CSS = visible. JS MAY add hidden state. | 15.3 |

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
| 13 | Combination Rules | PASS (velocity/temperature/weight are composition rules, not depth cues) | PASS (spacing uses tokens) | PASS (traffic light rule prevents callout anti-pattern) |
| 14 | Transition Grammar | PASS (transitions are spacing/dividers, not motion) | PASS (gap values use tokens) | PASS (no depth-creating transitions) |
| 15 | Density Tolerance | PASS (density variation, not depth variation) | PASS (all values use tokens or are OPEN/DRAFT) | PASS (splitting prevents overwhelming, not depth) |
| 16 | Combination Accessibility | PASS (focus management, landmarks, flowto) | N/A | PASS (CD-004 no-depth is the centerpiece) |

**All 16 standards PASS all applicable gates.** No revisions required.

---

## COMPACTION-SAFE SUMMARY

- **File:** CD-CONVENTION-SPEC.md
- **Purpose:** Extend AD conventions with 4 combination-specific sections (17-20)
- **Sections 1-16:** INHERITED from AD-CONVENTION-SPEC.md, all values FROZEN
- **Deviation Protocol:** Appendix A (inherited from OD-CONV) -- 3 levels + request format + approval chain
- **Section 17:** Combination Rules -- 4 rules (velocity/temperature/weight/proximity), velocity interaction, weight distribution, 11x11 compatibility matrix reference, traffic light rule, 6 recipes
- **Section 18:** Transition Grammar Extension -- AD-F-025 5x5 matrix inherited + compound upgrade rule (Smooth->Bridge, Bridge->Breathing, Breathing->Double Breathing), Choreography as universal bridge, Spiral as most isolated
- **Section 19:** Density Tolerance Table -- 11-component tolerance table (DRAFT), combination reduction rule, responsive collapse at 768px, pattern dominance hierarchy, stack order for single-column collapse
- **Section 20:** Combination Accessibility -- nested focus (no traps), combined landmarks (2-level max), aria-flowto chains for multi-axis reading, CD-004 no-depth constraint (ANTI-PHYSICAL absolute)
- **ESC-001 RESOLVED:** 960px collapse for 4+-column grids
- **ESC-002 RESOLVED:** Progressive enhancement -- initial CSS visible, JS MAY add hidden
- **DIFF:** 5 values changed, 4 sections added, 0 inherited tokens modified, 2 escalations resolved
- **Soul Test:** All 16 standards PASS all gates
- **Status:** DRAFT (all FROZEN values are locked; SOFT-LOCKED and OPEN values await empirical validation in Wave 1)

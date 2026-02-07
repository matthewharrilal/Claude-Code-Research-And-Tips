<!-- ═══════════════════════════════════════════════════════════════════════
     INLINE THREADING HEADER — Phase 2B
     File: design-extraction/component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md
     Tier: A | Batch: 1 | Generated: 2026-02-06
     ═══════════════════════════════════════════════════════════════════════ -->

## 1. Why This Exists

DESIGN-TOKEN-SUMMARY.md is the **single CSS source of truth** for the entire KortAI design system. It consolidates token values from 4 upstream tracking sheets and 2 typography-system CSS files into one locked `:root {}` block that every downstream file must copy verbatim. Without this file, there is no authoritative answer to "what is the correct value of `--color-primary`?" -- the 4 tracking sheets contain working values that drifted during the audit process, and only this synthesis resolves those conflicts into final locked values.

**Role in the pipeline:** This is a T1 (Tier 1) synthesis file -- the highest authority level. It sits at the convergence point where research becomes CSS implementation. It is the bridge between perceptual soul analysis and production code.

---

## 2. The Question This Answers

**"What are the exact, locked CSS custom property values for every KortAI design token?"**

Specifically:
- What is every `:root` CSS variable name and its locked value?
- What color goes with what semantic zone?
- What font family maps to what structural role?
- What spacing value means "zone boundary" vs "tight coupling"?
- What container properties are soul-locked (border-radius: 0, box-shadow: none)?
- What component-specific token overrides exist?

This file answers these questions definitively. Any other file answering these questions is either upstream (working data) or downstream (a copy that must match).

---

## 3. Status

| Attribute | Value |
|-----------|-------|
| Authority Level | T1 (highest) |
| Lock Status | LOCKED -- modification requires Phase-level approval |
| Created | 2026-02-04 |
| Phase | 4A-E Synthesis |
| Version | 1.0 |
| Inbound References | 34+ files across 6 directories |
| Token Count | 33 `:root` variables + 4 component-specific blocks |
| Threading Readiness | YES -- no gaps |

---

## 4. Soul Alignment

This file IS the CSS implementation of the soul. It translates the 5 soul pieces from MASTER-SOUL-SYNTHESIS.md into concrete CSS variables:

| Soul Piece | Token Implementation |
|------------|---------------------|
| **Soul Piece 1: Editorial Restraint** | `--color-primary: #E83025` (red only); `--color-background: #FEF9F5` (warm cream); `--color-text: #1A1A1A` (near-black). Three-color palette enforced. |
| **Soul Piece 2: Sharp Confidence** | `--border-radius: 0` (ALWAYS); `--box-shadow: none` (ALWAYS). No exceptions, no softening. |
| **Soul Piece 3: Typographic Hierarchy** | `--font-display: 'Instrument Serif'` (editorial); `--font-body: 'Inter'` (functional); `--font-mono: 'JetBrains Mono'` (precise). Three families, three structural zones. |
| **Soul Piece 4: Organized Density** | `--space-1` through `--space-16` on 4px base grid. 8px base unit creates consistent vertical rhythm. |
| **Soul Piece 5: Content-Defined Space** | Component tokens use `background: transparent`, `border: none` as defaults. Containers recede; content defines boundaries. |

**Constraint:** If any value in this file changes, the soul changes. Token modifications are soul modifications.

---

## 5. Built On (Backward Traversal)

### Direct Upstream Sources (4 tracking sheets)

| Source File | What It Contributed | Key Values Extracted |
|-------------|--------------------|--------------------|
| `tracking/COLOR-TOKENS.md` | Text colors, background colors, accent colors per component | `text-primary: #1A1A1A`, `accent-red: #E83025`, `bg-warm: #FEF9F5`, per-component color zone tables |
| `tracking/TYPOGRAPHY-TOKENS.md` | Font families, size scale, weight scale, per-component typography | `font-serif: Instrument Serif`, `font-sans: Inter`, `font-mono: JetBrains Mono`, 7-step size scale (11-28px) |
| `tracking/SPACING-TOKENS.md` | Spacing scale, zone separation methods, per-component spacing | 8-step spacing scale (4-48px), structural boundary meanings, separation methods |
| `tracking/CONTAINER-TOKENS.md` | Border radius, shadows, border styles, container-zone relationships | `radius-none: 0px` (DEFAULT), `shadow-none: none` (DEFAULT), left accent border pattern |

### Indirect Upstream Sources (typography CSS)

| Source File | What It Contributed | Key Values Extracted |
|-------------|--------------------|--------------------|
| `typography-system/type-scale.css` | Responsive type scale with clamp() values, line-height, letter-spacing tokens | `--leading-none: 0.9`, `--leading-relaxed: 1.65`, `--tracking-tighter: -0.03em`, display sizes via clamp() |
| `typography-system/typography.css` | Font stacks with full fallbacks, color tokens, base body setup | `--font-display: 'Instrument Serif', Georgia, 'Times New Roman', serif`, `--color-primary: #E83025` |

### Synthesis Decisions Made

This file made consolidation decisions where upstream sources disagreed. The synthesis promoted perceptual-audit-verified values over earlier tracking sheet values. See Section 9 (Research Debt) for specific drift instances.

---

## 6. Must Honor (Constraints)

### Absolute Constraints (Soul-Locked)

| Constraint | Enforced Value | Violation Consequence |
|------------|---------------|----------------------|
| `--border-radius` | `0` | Soul violation -- sharp edges are non-negotiable |
| `--box-shadow` | `none` | Soul violation -- flat design is non-negotiable |
| `--color-primary` | `#E83025` | Soul violation -- Sanrok red is the only primary |
| `--font-display` | `'Instrument Serif'` | Soul violation -- editorial voice destroyed |
| Three-color palette | Red + Cream + Black | Soul violation -- additional colors dilute restraint |

### Structural Constraints

| Constraint | Rule | Source |
|------------|------|--------|
| All `:root` values are FINAL | No additions, no modifications without Phase approval | CLAUDE.md (perceptual-audit-v2) |
| Component tokens must reference `:root` | Component-specific blocks use `var()` to reference root tokens | PRODUCTION-RULES.md |
| Type scale uses rem | Body type scale in rem (0.75rem-3rem), not px | Synthesis decision (accessibility) |
| Spacing uses px | Spacing scale in px (4px-64px), not rem | Synthesis decision (precision) |

### Downstream Contract

Any file copying the `:root` block MUST copy it verbatim. Partial copies or modified values break the provenance chain.

---

## 7. What Breaks If This Changes

### Direct Breakage (Files That Copy Token Values Verbatim)

| File | Relationship | How It Breaks |
|------|-------------|---------------|
| `DD-001-breathing.html` | CSS comment: "LOCKED DESIGN TOKENS -- From DESIGN-TOKEN-SUMMARY.md" | Wrong token values in exploration |
| `DD-002-gradient.html` | Same CSS comment provenance | Wrong token values in exploration |
| `DD-003-islands.html` | Same CSS comment provenance | Wrong token values in exploration |
| `DD-004-layers.html` | Same CSS comment provenance | Wrong token values in exploration |
| `DD-005-rivers.html` | Same CSS comment provenance | Wrong token values in exploration |
| `DD-006-fractal.html` | Same CSS comment provenance | Wrong token values in exploration |
| `DESIGN-SYSTEM/tokens/colors.md` | Values copied from this file | Downstream docs show wrong values |
| `DESIGN-SYSTEM/tokens/typography.md` | Values copied from this file | Downstream docs show wrong values |
| `DESIGN-SYSTEM/tokens/spacing.md` | Values copied from this file | Downstream docs show wrong values |
| `DESIGN-SYSTEM/tokens/geometry.md` | Values copied from this file | Downstream docs show wrong values |
| `component-system/css/variables.css` | CSS implementation of these tokens | Production CSS diverges from source of truth |

**Total direct breakage: 11 files**

### Indirect Breakage (Files That Reference This File)

| File | Relationship | Impact |
|------|-------------|--------|
| `FINDINGS-INDEX.md` (line 278) | Cites this as token source | Citation becomes inaccurate |
| `MASTER-STATE.md` | Lists token block in quick reference section | Quick reference becomes wrong |
| `QUICK-START.md` | Directs readers to this file for tokens | Readers get outdated instructions |
| `SOUL-DISCOVERIES.md` | Contains "LOCKED DESIGN TOKENS" reference block | Reference block needs update |
| `COMPONENT-AUDIT-FOUNDATION.md` | Contains "LOCKED DESIGN TOKENS" section | Audit foundation misaligned |
| `PIPELINE-BACKBONE.md` | Directs pipeline consumers to read this file | Pipeline produces wrong output |
| `SOURCE-OF-TRUTH-REGISTRY.md` | Registers this as CSS variable authority | Registry points to stale authority |
| `KA-DECISIONS.md` | Documents token resolution decisions | Decision documentation outdated |
| `COMPONENTS-REGISTRY.md` | Lists this as source for component specs | Component specs reference wrong tokens |
| 6 CLAUDE.md files (typography, card, font, archive, component, perceptual) | Direct readers to this file | Navigation to stale source |
| 6 archive/tokens/*.{css,json} files | Superseded-by markers pointing here | Supersession chain breaks |

**Total indirect breakage: 23+ additional files**

### Cascade Summary

**A single token value change in this file cascades to 34+ files across 6 directories.** This is the most connected T1 file by downstream reference count.

---

## 8. Consumed By (Forward Traversal)

### Tier 1: Direct Token Consumers (copy values verbatim)

```
DESIGN-TOKEN-SUMMARY.md
├── showcase/explorations/density/DD-001-breathing.html     [CSS :root block copy]
├── showcase/explorations/density/DD-002-gradient.html      [CSS :root block copy]
├── showcase/explorations/density/DD-003-islands.html       [CSS :root block copy]
├── showcase/explorations/density/DD-004-layers.html        [CSS :root block copy]
├── showcase/explorations/density/DD-005-rivers.html        [CSS :root block copy]
├── showcase/explorations/density/DD-006-fractal.html       [CSS :root block copy]
├── showcase/DESIGN-SYSTEM/tokens/colors.md                 [values transcribed]
├── showcase/DESIGN-SYSTEM/tokens/typography.md             [values transcribed]
├── showcase/DESIGN-SYSTEM/tokens/spacing.md                [values transcribed]
├── showcase/DESIGN-SYSTEM/tokens/geometry.md               [values transcribed]
└── component-system/css/variables.css                      [CSS implementation]
```

### Tier 2: Reference Consumers (cite this file, display subset of values)

```
DESIGN-TOKEN-SUMMARY.md
├── showcase/FINDINGS-INDEX.md                              [line 278 source citation]
├── showcase/DESIGN-SYSTEM/QUICK-START.md                   [directs to this file]
├── showcase/checkpoints/MASTER-STATE.md                    [quick reference block]
├── showcase/checkpoints/SOUL-DISCOVERIES.md                [reference block]
├── showcase/checkpoints/COMPONENT-AUDIT-FOUNDATION.md      [reference block]
├── showcase/checkpoints/COMPONENTS-REGISTRY.md             [source listing]
├── showcase/DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md   [reference block]
└── showcase/knowledge-architecture/
    ├── PIPELINE-BACKBONE.md                                [pipeline instruction]
    ├── SOURCE-OF-TRUTH-REGISTRY.md                         [authority listing]
    ├── KA-DECISIONS.md                                     [decision documentation]
    └── KA-POSITION.md                                      [position reference]
```

### Tier 3: Navigation Consumers (CLAUDE.md files that direct here)

```
DESIGN-TOKEN-SUMMARY.md
├── design-extraction/FOLDER-MAP.md
├── design-extraction/typography-system/CLAUDE.md
├── design-extraction/card-system/CLAUDE.md
├── design-extraction/font-research/CLAUDE.md
├── design-extraction/archive/CLAUDE.md
├── design-extraction/component-system/CLAUDE.md
└── design-extraction/component-system/perceptual-audit-v2/CLAUDE.md
```

### Tier 4: Supersession Markers (archived files pointing here as replacement)

```
DESIGN-TOKEN-SUMMARY.md
├── design-extraction/archive/tokens/tokens.json            [_SUPERSEDED field]
├── design-extraction/archive/tokens/effects.css            [comment header]
├── design-extraction/archive/tokens/colors.css             [comment header]
├── design-extraction/archive/tokens/spacing.css            [comment header]
├── design-extraction/archive/tokens/typography.css         [comment header]
└── design-extraction/archive/tokens/index.css              [comment header]
```

---

## 9. Research Debt

### CRITICAL: Token Value Drift Between Tracking Sheets and Synthesis

The tracking sheets (upstream) and the synthesis (this file) disagree on 7 token values. The synthesis is authoritative, but the drift is undocumented -- meaning a future reader of the tracking sheets would get wrong values.

| Token | Tracking Sheet Value | Synthesis Value | Delta | Severity |
|-------|---------------------|-----------------|-------|----------|
| `accent-amber` | `#C49052` (COLOR-TOKENS.md) | `#D97706` (this file) | Different hue: warm bronze vs golden amber | HIGH -- used in Essence + Reasoning |
| `accent-purple` | `#7B68EE` (COLOR-TOKENS.md) | `#7C3AED` (this file) | Different shade: medium slate blue vs vibrant purple | HIGH -- used in Challenge Callout |
| `bg-dark` | `#1A1A1A` (COLOR-TOKENS.md, CONSISTENCY-REGISTRY.md) | `#1E1E1E` (this file) | 4 lightness steps difference | MEDIUM -- Code Snippet background |
| `bg-info` | `#F0F7FF` (COLOR-TOKENS.md, CONSISTENCY-REGISTRY.md) | `#F5F8FA` (this file) | Blue tint vs neutral blue-gray | MEDIUM -- Info Callout background |
| `bg-tip` | `#F0F7F0` (COLOR-TOKENS.md, all component HTML files) | `#F5FAF5` (this file) | Green tint intensity differs | MEDIUM -- Tip Callout background |
| `bg-reasoning`/`bg-summary` | `#F8F6F0` as `bg-reasoning` (COLOR-TOKENS.md) | `#FEF9F0` as `bg-summary` (this file) | Token renamed AND value changed | HIGH -- naming inconsistency + value drift |
| `--leading-relaxed` | `1.65` (type-scale.css) | Not in `:root` block | Missing from locked tokens; `variables.css` uses `1.6`, component HTML uses `1.7` | MEDIUM -- three different values in use |

### Coverage Gaps

| Gap | Description | Impact |
|-----|-------------|--------|
| Line-height tokens absent from `:root` | The locked `:root` block defines no `--leading-*` variables despite typography-system/type-scale.css defining 5 values | Downstream consumers cannot get line-height from the single source of truth |
| Letter-spacing tokens absent from `:root` | `type-scale.css` defines 5 `--tracking-*` variables; none appear in the locked block | Same gap as line-height |
| Font weight tokens absent from `:root` | The file documents weights 400/500/600/700 in prose tables but provides no CSS variables | Implementations must hardcode weight values |
| Display type scale divergence | The `:root` block uses rem values (`--text-xs: 0.75rem` through `--text-display: 3rem`) while `type-scale.css` uses clamp() values (`--text-h1: clamp(32px, 5vw, 64px)`). These are two different scale systems. | Unclear which scale is canonical for headings |
| Component-specific tokens not in `:root` | Code Snippet, Callout, Decision Matrix, and Reasoning each have separate CSS blocks but these are not inside the locked `:root` | Downstream consumers must parse component blocks separately |
| `border-left-accent` width inconsistency | CONTAINER-TOKENS.md says `3px solid`, DESIGN-TOKEN-SUMMARY.md says `3-4px solid`, Callout component block says `4px` | Which width is locked? |

### Type Scale Reconciliation Needed

The file contains TWO type scale systems that do not align:

| `:root` Block (rem-based) | Tracking Sheet (px-based) | Match? |
|--------------------------|---------------------------|--------|
| `--text-xs: 0.75rem` (12px) | `size-xs: 11px` | NO (12 vs 11) |
| `--text-sm: 0.875rem` (14px) | `size-sm: 12px` | NO (14 vs 12) |
| `--text-base: 1rem` (16px) | `size-base: 14px` | NO (16 vs 14) |
| `--text-lg: 1.125rem` (18px) | `size-md: 16px` | NO (18 vs 16) |
| `--text-h4: 1.25rem` (20px) | `size-lg: 20px` | YES |
| `--text-h3: 1.5rem` (24px) | `size-xl: 24px` | YES |
| `--text-h2: 2rem` (32px) | -- | No tracking equivalent |
| `--text-h1: 2.5rem` (40px) | -- | No tracking equivalent |
| `--text-display: 3rem` (48px) | -- | No tracking equivalent |

The lower end of the scale is misaligned. The `:root` block appears to define a web-standard scale (12/14/16/18px), while the tracking sheets define a tighter editorial scale (11/12/14/16px). Both claim to be locked.

---

## 10. Diagnostic Questions

Use these questions to verify integrity when working with this file:

### Quick Health Check (< 2 minutes)

1. Does DD-006-fractal.html's `:root` block still match this file's `:root` block exactly?
2. Does `component-system/css/variables.css` define `--border-radius: 0` and `--box-shadow: none`?
3. Does `DESIGN-SYSTEM/tokens/colors.md` list `--color-primary: #E83025`?

### Deep Integrity Audit (10+ minutes)

4. For each of the 7 drift items in Section 9: have the tracking sheets been updated to match synthesis values, or does the drift persist?
5. Do all 6 DD files use identical `:root` blocks? (DD-001 historically had `line-height: 1.6` while DD-002+ used `1.7` -- has this been reconciled?)
6. Is `--leading-relaxed` defined anywhere in the locked `:root` block, or is it still missing? If missing, which value (1.6, 1.65, or 1.7) should be canonical?
7. Does the `:root` type scale (rem-based) or the tracking sheet type scale (px-based) represent the actual intended values? Can both coexist?
8. Has any new component been added downstream that introduces tokens not registered in this file?
9. Do the 6 `archive/tokens/*.css` supersession markers still point to the correct file path?
10. Has `design-system/src/styles/tokens.css` (the dead-island design-system package) been reconciled with this file, or does it still contain `--sanrok-red: #FF0000` (contradicting `#E83025`)?

### Provenance Verification

11. Can you trace every value in the `:root` block back to a specific tracking sheet entry? (Expected answer: yes for colors and spacing; no for the rem-based type scale, which appears to be a synthesis-time creation)
12. Does the `border-left-accent` token resolve to a single width value (3px or 4px)?

<!-- ═══════════════════════════════════════════════════════════════════════
     END INLINE THREADING HEADER
     ═══════════════════════════════════════════════════════════════════════ -->

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

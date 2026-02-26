# MASTER MIDDLE-TIER EXECUTION PROMPT
## For: Another Claude Instance to PLAN the Middle-Tier Page Build

**Synthesized from:** 5 research extractions (ontology, checklist, pipeline, context, reference) totaling ~5,300 lines, plus 2 format references (MASTER-CD-EXECUTION-PROMPT.md, 14-master-execution-prompt.md) totaling ~2,260 lines.

**Governing Principle:** Binary rules achieve 100% agent compliance. Judgment rules achieve ~0%.

**Date:** 2026-02-16
**Author:** prompt-writer (synthesis agent)

---

## TABLE OF CONTENTS

- [Section 0: Mission Statement](#section-0-mission-statement)
- [Section 1: Identity and Constraints](#section-1-identity-and-constraints)
- [Section 2: Vocabulary](#section-2-vocabulary)
- [Section 3: Mechanism Vocabulary](#section-3-mechanism-vocabulary)
- [Section 4: Build Pipeline](#section-4-build-pipeline)
- [Section 5: Validation Framework](#section-5-validation-framework)
- [Section 6: Context and Lessons](#section-6-context-and-lessons)
- [Section 7: Reference Examples](#section-7-reference-examples)
- [Section 8: Anti-Patterns and Failure Modes](#section-8-anti-patterns-and-failure-modes)
- [Section 9: Content Requirements](#section-9-content-requirements)
- [Section 10: Success Criteria](#section-10-success-criteria)

---

# SECTION 0: MISSION STATEMENT

## What This Document Is

A Claude instance reading ONLY this document should be able to PLAN a complete Middle-tier page build: what content to select, what mechanisms to deploy, what pipeline steps to follow, what validation gates to pass, and how to evaluate the result. This document is SELF-CONTAINED.

## What the Middle-Tier Experiment Is

The Middle-tier experiment is THE most important untested hypothesis in the KortAI design system:

> **Can pattern-based deployment (8-10 mechanisms, no metaphor) reach the engagement threshold -- making a page feel "designed" rather than "formatted"?**

This experiment builds ONE page using the Middle-tier protocol (skip metaphor derivation, use density pattern + per-category mechanism selection) and evaluates whether the result crosses the "designed" threshold that separates formatted content from spatial composition.

## What the Receiving Instance Should Produce

1. **Content selection** -- 800-1,200 word mixed-type content (prose + code + callouts + tables) in a domain DIFFERENT from Variant B's scientific calibration
2. **Pattern selection** -- one of CRESCENDO / F-PATTERN / BENTO / PULSE, justified by content type
3. **Mechanism deployment plan** -- 8-10 mechanisms from the catalog, at least 1 from each of 5 categories, with content-based justification for each
4. **Build specification** -- complete HTML/CSS plan following the 10-step build workflow
5. **Validation plan** -- how to evaluate using Quick Check (15 items), then full 138-item checklist
6. **Evaluation framework** -- how to determine SUCCESS / PARTIAL / FAILURE using the decision matrix

## Pipeline Position: YOU ARE HERE

```
Phase A: CD ................................ COMPLETE
Phase B: Content Analysis ................. NOT STARTED
Phase C: Component Extraction ............. COMPLETE (42 files, 6-layer ontology)
Phase D: Extraction Validation ............ COMPLETE (CONDITIONAL PASS)
Phase D+: Richness + Rigidity Research .... COMPLETE (tier model)
Phase D++: Skill Enrichment Wave 1 ........ COMPLETE (M2/M3/M5/M8 applied)
Phase D+++: Middle-tier Experiment ........ PLANNED  <-- YOU ARE PLANNING THIS
Phase E: Migration Playbook v2 ............ NOT STARTED
Phase F: Pilot Migration .................. NOT STARTED
=== FREEZE LINE ===
Phase H: Track 1 Migration ................ NOT STARTED
Phase I: Track 2 Migration ................ NOT STARTED
```

## What This Spec Assumes the Reader Has Access To

1. The full repository at path: `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/`
2. An HTTP server to serve HTML files (Playwright MCP blocks `file://` protocol)
3. Playwright MCP for browser automation (screenshots, DOM inspection, computed style measurement)
4. The design system files at `design-system/`
5. The enriched skills at `~/.claude/skills/tension-composition/` and `~/.claude/skills/perceptual-auditing/`

## Governing Principles

1. **Binary rules achieve 100% agent compliance; judgment rules achieve ~0%.** Every instruction in this document is BINARY (PASS/FAIL) unless explicitly labeled as judgment.
2. **Richness = vocabulary fluency, not creative freedom.** More mechanisms deployed fluently across more categories = richer page.
3. **Peak richness occurs at maximum content-mechanism FIT, not maximum technique COUNT.** 6 perfectly-deployed mechanisms > 10 with 3 forced.
4. **Container width 940-960px is NON-NEGOTIABLE.** THE primary Phase D failure mode (4/5 pages violated it).
5. **The tier model is HYPOTHESIS, not proven fact.** This experiment is the FIRST practical test.

---

# SECTION 1: IDENTITY AND CONSTRAINTS

## 1.1 Absolute Prohibitions (8 -- Zero Exceptions, EVER)

These are SOUL CONSTRAINTS. Violating ANY ONE invalidates the entire page.

| # | Prohibition | CSS Rule | Why |
|---|-------------|----------|-----|
| 1 | NEVER use border-radius > 0 on any element | `border-radius: 0` | Sharp edges = decisive, confident, print heritage. Soul constraint #1. |
| 2 | NEVER use box-shadow on any element | `box-shadow: none` | Shadows = false depth through physical light metaphors. |
| 3 | NEVER use filter: drop-shadow() | `filter: none` | Same principle as box-shadow. |
| 4 | NEVER use semi-transparent backgrounds (opacity < 1) | `opacity: 1` on visual elements | opacity < 1 = same visual effect as box-shadow. |
| 5 | NEVER use gradient backgrounds | No `linear-gradient`, `radial-gradient`, etc. | Gradients imply light sources, dimensional depth. |
| 6 | NEVER use pure black (#000000) or pure white (#FFFFFF) | Use palette values only | KortAI = warm earth tones. |
| 7 | NEVER use Instrument Serif for body text | Serif = DISPLAY ONLY (headings) | Destroys typography trinity. Inter is body font. |
| 8 | NEVER use rounded corners for decoration | `border-radius: 0` (reinforces #1) | Cosmetic softening vs geometric precision. |

## 1.2 Conditional Prohibitions (12 -- Documented Exceptions Only)

| # | Prohibition | Exception Condition |
|---|-------------|---------------------|
| 9 | NEVER use 2px borders | OD-004 confidence encoding pattern ONLY |
| 10 | NEVER use accent borders < 4px | AD-004 progressive depth encoding (4px/3px/1px) |
| 11 | NEVER use decorative elements without information | NONE -- delete if no info |
| 12 | NEVER break grid with decoration | Content-driven asymmetry only |
| 13 | NEVER use vertical borders in tables | NONE -- horizontal-only borders |
| 14 | NEVER use hover lift effects (transform: translateY) | NONE -- editorial, not UI |
| 15 | NEVER use traffic-light color adjacency (green next to red) | 48px+ spacing or neutral component between |
| 16 | NEVER use cool-toned grays (#F5F5F5, #E0E0E0, etc.) | NONE -- always warm palette |
| 17 | NEVER use non-italic h3 headings | NONE -- all h3 MUST be italic |
| 18 | NEVER use same-density stacking (SLOW+SLOW or FAST+FAST) | Intentional crescendo patterns only |
| 19 | NEVER justify design choices without research provenance | NONE |
| 20 | NEVER create new patterns without tension derivation | NONE |

## 1.3 Meta-Prohibitions (2 -- Process-Level)

- **#19:** Research provenance required for all visual decisions
- **#20:** Tension derivation required for all new patterns (NOTE: Middle-tier uses PATTERN SELECTION, not tension derivation -- this prohibition applies to Ceiling+)

## 1.4 The 5 Soul Pieces (LOCKED -- Zero Exceptions)

| # | Soul Piece | CSS Expression |
|---|-----------|---------------|
| 1 | Sharp Edges Command Authority | `border-radius: 0` |
| 2 | The Archivist Speaks in Serif | `font-family: 'Instrument Serif'; font-style: italic` (headings) |
| 3 | Callouts Share Family DNA | 2-zone (label + body) + `border-left: 4px solid` + color differentiation |
| 4 | Shadows Lie About Depth | `box-shadow: none` |
| 5 | Squares Signal System | `border-radius: 0` on indicators |

## 1.5 Source File for Constraints

**File:** `design-system/compositional-core/identity/prohibitions.md` (353 lines)
**Status:** MUST-READ. Load FIRST before any design work.

---

# SECTION 2: VOCABULARY

## 2.1 The Complete Token Set

The builder MUST read `design-system/compositional-core/vocabulary/tokens.css` (174 lines) BEFORE any design work. Below is the complete token vocabulary for reference.

### Color Palette (IMMUTABLE -- identity)

| Token | Value | Purpose |
|-------|-------|---------|
| `--color-primary` | `#E83025` | Sanrok red -- editorial confidence. LOCKED. |
| `--color-background` | `#FEF9F5` | Warm cream -- not sterile white. LOCKED. |
| `--color-text` | `#1A1A1A` | Near-black -- softer than #000. LOCKED. |
| `--color-text-secondary` | `#666666` | Muted secondary text. LOCKED. |
| `--color-border` | `#E0D5C5` | Warm border tone. LOCKED. |
| `--color-border-subtle` | `#F0EBE3` | Very subtle dividers. LOCKED. |

### Accent Colors (MUTABLE -- semantic flexibility)

| Token | Value | Purpose |
|-------|-------|---------|
| `--accent-blue` | `#4A90D9` | Info/Note callout, File Tree |
| `--accent-green` | `#4A9D6B` | Tip callout |
| `--accent-coral` | `#C97065` | Gotcha callout |
| `--accent-amber` | `#D97706` | Essence callout, Reasoning |
| `--accent-purple` | `#7C3AED` | Challenge callout |

### Zone Background Colors (AVAILABLE -- zone differentiation)

| Token | Value | Purpose |
|-------|-------|---------|
| `--color-zone-sparse` | `#FEF9F5` | Sparse breathing zones (cream) |
| `--color-zone-dense` | `#FFFFFF` | Dense content zones (white) |
| `--color-zone-breathing` | `#FAF5ED` | Recovery breathing zones (tan) |

### Callout Background Colors (AVAILABLE -- semantic)

| Token | Value | Purpose |
|-------|-------|---------|
| `--bg-info` | `#F5F8FA` | Info callout background |
| `--bg-tip` | `#F5FAF5` | Tip callout background |
| `--bg-gotcha` | `#FEF6F5` | Warning callout background |
| `--bg-summary` | `#FEF9F0` | Reasoning/synthesis background |

### Typography (IMMUTABLE -- identity trinity)

| Token | Value | Purpose |
|-------|-------|---------|
| `--font-display` | `'Instrument Serif', Georgia, serif` | Editorial authority -- headings ONLY. LOCKED. |
| `--font-body` | `'Inter', system-ui, sans-serif` | Functional clarity -- body text. LOCKED. |
| `--font-mono` | `'JetBrains Mono', 'SF Mono', monospace` | Technical precision -- code. LOCKED. |

### Type Scale

| Token | Value | Px | Purpose |
|-------|-------|----|---------|
| `--type-meta` | `0.75rem` | 12px | Labels, captions |
| `--type-code` | `0.875rem` | 14px | Code blocks |
| `--type-body` | `1rem` | 16px | Body text baseline |
| `--type-subsection` | `1.5rem` | 24px | Section headlines (h3, MUST be italic) |
| `--type-section` | `2rem` | 32px | Major headlines (h2) |
| `--type-page` | `2.5rem` | 40px | Page titles (h1) |

### Spacing Scale (4px base unit -- IMMUTABLE anchors)

| Token | Value | Purpose |
|-------|-------|---------|
| `--space-2` | `8px` | Within element |
| `--space-3` | `12px` | Zone gaps |
| `--space-4` | `16px` | Standard separation |
| `--space-5` | `20px` | Generous padding |
| `--space-6` | `24px` | Component padding, grid-gap |
| `--space-8` | `32px` | Section breaks |
| `--space-10` | `40px` | Large section breaks |
| `--space-12` | `48px` | Page margins |
| `--space-16` | `64px` | Major sections (EXHALE) |
| `--space-20` | `80px` | Recovery breathing |
| `--space-24` | `96px` | Sparse ocean |

### Semantic Spacing Aliases

| Token | Value | Purpose |
|-------|-------|---------|
| `--space-within` | `8px` | Within single unit |
| `--space-between` | `32px` | Between sections |
| `--space-chapter` | `64px` | Major divisions |

### Border Widths (IMMUTABLE -- 3-category system)

| Token | Value | Purpose |
|-------|-------|---------|
| `--border-structural` | `4px` | Left accent borders (callouts). LOCKED. |
| `--border-accent` | `3px` | Header/footer structural dividers. |
| `--border-micro` | `1px` | Subtle dividers, table rows. |

**CRITICAL:** NEVER use 2px borders except for documented confidence encoding exceptions.

### Syntax Highlighting Tokens (code zones)

| Token | Value |
|-------|-------|
| `--syntax-keyword` | `#E83025` (red) |
| `--syntax-string` | `#6B9B7A` (green) |
| `--syntax-comment` | `#666666` (gray) |
| `--syntax-function` | `#4A7C9B` (blue) |
| `--syntax-type` | `#C97065` (coral) |
| `--syntax-number` | `#D97706` (amber) |

### Miscellaneous

| Token | Value | Purpose |
|-------|-------|---------|
| `--transition-standard` | `0.3s ease` | Standard timing |
| `--grid-gap` | `24px` | Standard grid separation. LOCKED. |

**Total tokens: 65** (21 immutable, 14 mutable, 30 available)

## 2.2 Font Loading (CDN Links)

```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## 2.3 Token Compliance Requirement

**B8.1:** >= 80% of CSS values MUST reference tokens.css custom properties. Raw hex values, px values outside the spacing scale, or fonts not in the trinity = token violations.

---

# SECTION 3: MECHANISM VOCABULARY

## 3.1 What Is a Mechanism?

A mechanism is a CSS technique that works across MULTIPLE metaphors, verified by two binary tests:
- **Name Test:** Remove the metaphor name. Does the description still make sense? YES = mechanism.
- **Transfer Test:** Does the technique work with a DIFFERENT metaphor? YES = mechanism.

## 3.2 The 5 Property Categories

| Category | ID | Mechanisms | What It Governs |
|----------|----|-----------|-----------------|
| **Spatial** | S | #5, #6, #15 | Layout topology, density rhythm, grid structure |
| **Hierarchy** | H | #1, #4, #11 | Importance encoding, structural weight, scale |
| **Component** | C | #2, #9, #10, #17 | Internal component patterns, semantic signals |
| **Depth/Emphasis** | D | #3, #7, #16 | Layering, zone differentiation, focal points |
| **Structure/Navigation** | N | #8, #12, #13, #14, #18 | Page chrome, navigation, progressive disclosure |

**CRITICAL: Per-category selection protocol for Middle-tier: Deploy AT LEAST ONE mechanism from each category.**

## 3.3 All 18 Mechanisms

### #1. Border-Weight Gradient Encoding [HIERARCHY]

**CSS Pattern:** `4px/3px/1px` border-left progression
**Encodes:** Hierarchy / importance / confidence
**Complexity:** LOW (~20 CSS lines)

```css
.element--highest { border-left: 4px solid var(--color-text); }
.element--high    { border-left: 3px solid var(--color-text); }
.element--low     { border-left: 1px solid var(--color-border); }
```

### #2. 2-Zone Component DNA [COMPONENT]

**CSS Pattern:** Sparse label zone + dense body zone + 4px left border
**Encodes:** Internal component organization
**Complexity:** LOW (~50 CSS lines)

```css
.component { border-left: 4px solid var(--accent-color); padding: 20px 24px; margin: 24px 0; }
.component__label { font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: var(--space-2); }
.component__body { font-family: var(--font-body); font-size: var(--type-body); line-height: 1.7; }
```

### #3. Solid Offset Depth (Box-Shadow Alternative) [DEPTH/EMPHASIS]

**CSS Pattern:** `::after` pseudo-element with `top: 4px; left: 4px; background: var(--color-text); z-index: -1;`
**Encodes:** Featured/elevated content WITHOUT violating box-shadow prohibition
**Complexity:** LOW (~15 CSS lines)

### #4. Spacing Compression (Inverse Density-Confidence) [HIERARCHY]

**CSS Pattern:** Padding gradient from sparse (80px) to dense (16px)
**Encodes:** Certainty/importance inversely correlated with density
**Complexity:** LOW (~20 CSS lines)

```css
.zone--sparse   { padding: var(--space-20); } /* 80px */
.zone--moderate { padding: var(--space-8);  } /* 32px */
.zone--dense    { padding: var(--space-4);  } /* 16px */
```

### #5. Dense/Sparse Alternation (INHALE/EXHALE Rhythm) [SPATIAL]

**CSS Pattern:** Alternating section padding and margins
**Encodes:** Breathing rhythm across page
**Complexity:** LOW (~15 CSS lines)

```css
.section--sparse { padding: var(--space-20) var(--space-6); margin-bottom: var(--space-chapter); }
.section--dense  { padding: var(--space-6); margin-bottom: var(--space-between); }
```

### #6. Width Variation (Channel/Pool Pattern) [SPATIAL]

**CSS Pattern:** `max-width` and `margin-left` variation
**Encodes:** Visual rhythm through width changes
**Complexity:** LOW (~10 CSS lines)

```css
.narrow-channel { max-width: 70%; margin-left: 5%; }
.full-pool      { max-width: 100%; margin-left: 0; }
```

### #7. Zone Background Differentiation [DEPTH/EMPHASIS]

**CSS Pattern:** 3-color zone token system for background shifts
**Encodes:** Section type / content density
**Complexity:** LOW (~25 CSS lines)

```css
.zone--sparse    { background: var(--color-zone-sparse);    } /* #FEF9F5 cream */
.zone--dense     { background: var(--color-zone-dense);     } /* #FFFFFF white */
.zone--breathing { background: var(--color-zone-breathing); } /* #FAF5ED tan */
```

### #8. Scroll Witness / Sticky TOC [STRUCTURE/NAVIGATION]

**CSS Pattern:** `position: sticky; top: var(--space-8);` with `.active` state
**Encodes:** Reading position / navigation
**Complexity:** MEDIUM (~35 CSS lines, requires JS)

### #9. Confidence/Priority Encoding via Color [COMPONENT]

**CSS Pattern:** `border-left-color` mapped to semantic color tokens
**Encodes:** Content type / priority via accent color
**Complexity:** LOW (~10 CSS lines)

```css
.element--critical { border-left-color: var(--color-primary); }   /* Red */
.element--info     { border-left-color: var(--accent-blue); }     /* Blue */
.element--success  { border-left-color: var(--accent-green); }    /* Green */
.element--caution  { border-left-color: var(--accent-amber); }    /* Amber */
```

### #10. Border-Left Semantic Signaling [COMPONENT]

**CSS Pattern:** Universal `border-left: 4px solid` for callout-like emphasis
**Encodes:** "This is emphasized content"
**Complexity:** LOW (~5 CSS lines)

### #11. Typographic Scale Jumping [HIERARCHY]

**CSS Pattern:** ~1.5x ratio between heading levels
**Encodes:** Hierarchy through size differentiation
**Complexity:** LOW (~10 CSS lines)

```
--type-page: 2.5rem -> --type-section: 2rem -> --type-subsection: 1.5rem -> --type-body: 1rem -> --type-code: 0.875rem -> --type-meta: 0.75rem
```

### #12. Progressive Disclosure (Density Gradient Flow) [STRUCTURE/NAVIGATION]

**CSS Pattern:** 4-phase padding progression (intro -> build -> climax -> resolve)
**Encodes:** Reader journey through information density
**Complexity:** MEDIUM (~30 CSS lines)

```css
.phase--intro   { padding: var(--space-20); } /* Sparse */
.phase--build   { padding: var(--space-8);  } /* Moderate */
.phase--climax  { padding: var(--space-4);  } /* Dense */
.phase--resolve { padding: var(--space-10); } /* Breathing */
```

### #13. Dark Header + 3px Primary Border [STRUCTURE/NAVIGATION]

**CSS Pattern:** Dark background + 3px red border-bottom
**Encodes:** Page-level structure / editorial authority
**Complexity:** LOW (~20 CSS lines)

```css
header { background: var(--color-text); color: var(--color-background); border-bottom: 3px solid var(--color-primary); }
.header-inner { max-width: 960px; margin: 0 auto; padding: var(--space-16) var(--space-8); }
```

### #14. Footer Mirror (Dark + 3px Border-Top) [STRUCTURE/NAVIGATION]

**CSS Pattern:** Mirrors header structure with border-top
**Encodes:** Page symmetry / structural bookends
**Complexity:** LOW (~20 CSS lines)

```css
footer { background: var(--color-text); color: var(--color-background); border-top: 3px solid var(--color-primary); }
```

### #15. Bento Grid (Variable Span Layout) [SPATIAL]

**CSS Pattern:** CSS Grid with span modifiers for importance encoding
**Encodes:** Content importance through cell size
**Complexity:** MEDIUM (~25 CSS lines)

```css
.bento-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
.bento-cell--large { grid-column: span 2; grid-row: span 2; }
.bento-cell--wide  { grid-column: span 2; }
```

### #16. Drop Cap (Editorial Opening) [DEPTH/EMPHASIS]

**CSS Pattern:** `::first-letter` with display serif, 3.5em, float left
**Encodes:** Editorial authority / section opening
**Complexity:** LOW (~10 CSS lines)

```css
.drop-cap::first-letter { font-family: var(--font-display); font-size: 3.5em; float: left; line-height: 0.8; margin-right: var(--space-2); color: var(--color-primary); }
```

### #17. Code Block (Dark Background + Syntax Highlighting) [COMPONENT]

**CSS Pattern:** Dark background, 3px border, monospace, 7 syntax tokens
**Encodes:** Technical content zone
**Complexity:** LOW (~40 CSS lines)

```css
pre { background: var(--color-text); color: var(--color-background); border: 3px solid var(--color-border); padding: 24px 32px; font-family: var(--font-mono); font-size: var(--type-code); line-height: 1.5; overflow-x: auto; }
```

### #18. Data Table (Mono Headers + Border Categories) [STRUCTURE/NAVIGATION]

**CSS Pattern:** Mono uppercase headers, 3px header border, 1px row borders
**Encodes:** Tabular data with hierarchy
**Complexity:** LOW (~20 CSS lines)

```css
.data-table th { font-family: var(--font-mono); font-size: var(--type-meta); font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; padding: 12px 16px; border-bottom: 3px solid var(--color-border); }
.data-table td { padding: 12px 16px; border-bottom: 1px solid var(--color-border); }
```

## 3.4 Middle-Tier Selection Logic

Middle-tier uses CONTENT-STRUCTURE MAPPING (each mechanism serves a DIFFERENT content need INDEPENDENTLY):

| Content Feature | Mechanism |
|----------------|-----------|
| Content has code blocks | #17 (Code Block) |
| Content has hierarchy | #1 (Border-Weight Gradient) + #11 (Typographic Scale) |
| Content has callouts/tips | #2 (2-Zone DNA) + #9 (Color Encoding) |
| Content has sections | #5 (Dense/Sparse Alternation) + #7 (Zone Backgrounds) |
| Page needs chrome | #13 (Dark Header) + #14 (Footer Mirror) |
| Content has tables | #18 (Data Table) |
| Content has step sequence | #12 (Progressive Disclosure) |
| Content has featured items | #3 (Solid Offset) or #16 (Drop Cap) |
| Content has grid layouts | #15 (Bento Grid) |

## 3.5 Middle-Tier Proven Pairs (2-Mechanism Combinations)

These are the ONLY combinations appropriate at Middle-tier (Ceiling uses triples):

| Pair | Mechanisms | Shared Semantic |
|------|-----------|----------------|
| **Zone Pair** | #7 (Backgrounds) + #10 (Border-Left) | Spatial sections/categories |
| **Component Pair** | #2 (2-Zone DNA) + #11 (Typography) | Internal component organization |
| **Emphasis Pair** | #10 (Border-Left) + #3 (Solid Offset) | Featured/highlighted elements |

## 3.6 Mechanism Interaction Requirement (B4.4)

**MANDATORY:** Document at least 2 pairs of mechanisms that REINFORCE each other to encode a shared content dimension.

**Format:** "Mechanism X + Mechanism Y both encode [dimension] BECAUSE [content property]."

**VALID example:** "#4 Spacing Compression + #7 Zone Background = both encode section importance (padding + background). Intro: sparse padding (80px) + light background. Detail: dense padding (32px) + white background."

**INVALID example:** "#1 Border-Weight + #17 Code Block = different content features (hierarchy vs syntax -- no shared dimension)."

## 3.7 Mechanism Perceptibility Floor (B4.5)

**Rule:** Differences between deployed mechanism states MUST be >= 10% OR >= 8px, whichever is GREATER.

| Property | Perceptible | Imperceptible (FAIL) |
|----------|------------|---------------------|
| Padding 48px vs 56px (8px diff) | PASS | -- |
| Padding 48px vs 49px (1px diff) | -- | FAIL |
| Width 70% vs 100% (30% diff) | PASS | -- |
| Width 98% vs 100% (2% diff) | -- | FAIL |
| Background contrast ratio >= 1.05:1 | PASS | -- |

## 3.8 Scales (Fractal Coherence)

5 named scales exist. Middle-tier requires 2:

| Scale | What It Covers | Required for Middle? |
|-------|---------------|---------------------|
| Navigation | Header, TOC, page-level nav | NO |
| **Page** | Section sequence across full page | **YES** |
| Section | Components within a section | NO |
| **Component** | Content inside a single component | **YES** |
| Character | Text-level styling | NO |

## 3.9 Source File for Mechanisms

**File:** `design-system/compositional-core/grammar/mechanism-catalog.md` (1,011 lines)
**Status:** MUST-READ. Read the FULL catalog (all 18 mechanisms). DO NOT sample.

---

# SECTION 4: BUILD PIPELINE

## 4.1 Middle-Tier Pipeline Overview

Middle-tier SKIPS Phases 1-3 of the full tension-composition pipeline:

```
FULL PIPELINE:     Phase 0 -> Phase 1 -> Phase 2 -> Phase 3 -> Phase 3.5 -> Phase 4 -> Phase 5
MIDDLE PIPELINE:   Phase 0 -> [SKIP 1-3] -> Phase 4.0 -> Phase 4 -> Phase 5
```

**What Middle skips:**
- Phase 1: Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME)
- Phase 2: Tension derivation (reader needs vs system constraints)
- Phase 3: Metaphor collapse (constrained associative search)
- Phase 3.5: Metaphor commitment gate

**What Middle replaces Phases 1-3 with:**
- Density PATTERN selection (CRESCENDO / F-PATTERN / BENTO / PULSE)
- Direct content-to-mechanism mapping

## 4.2 The 10-Step Build Workflow

This is the CORRECT build sequence. The ordering is CRITICAL -- earlier steps establish constraints for later steps.

### Step 1: Token Compliance (B8 -- MUST BE FIRST)

**Action:** Read `prohibitions.md` (353 lines) AND `tokens.css` (174 lines) BEFORE any design work.

**Verification:**
- [ ] prohibitions.md read in full
- [ ] tokens.css read in full
- [ ] 527 lines of mandatory context loaded BEFORE any CSS is written

**FAIL condition:** Any design work done before reading these files = INSTANT FAIL.

### Step 2: Pipeline Routing (B1)

**Action:** Classify as Middle tier, select density pattern.

**Output format:**
```
TIER: Middle
PATTERN: [CRESCENDO / F-PATTERN / BENTO / PULSE]
JUSTIFICATION: [why this pattern fits this content]
SKIP: Phases 1-3 (no metaphor derivation)
NEXT: Phase 4.0 (mechanism extraction with selected pattern)
```

**Pattern selection lookup:**

| Content Type | Pattern | Why |
|--------------|---------|-----|
| Tutorial, step-by-step guide | **CRESCENDO** | Density builds progressively (sparse -> dense -> sparse) |
| Reference, lookup, API docs | **F-PATTERN** | Dense left column (nav), sparse right (content) |
| Overview, dashboard, card gallery | **BENTO** | Grid-based modular sections |
| Narrative, story arc, case study | **PULSE** | Rhythmic dense-sparse-dense alternation |

**CRITICAL:** Patterns are SPATIAL ORGANIZATION STRATEGIES (the skeleton). Mechanisms are CSS TECHNIQUES (the flesh) deployed within that skeleton. Do NOT confuse them.

### Step 3: Guardrail Compliance (B9 -- Know Floors Before Design)

**Quantitative guardrails -- ALL are NON-NEGOTIABLE:**

| Guardrail | Value | Check |
|-----------|-------|-------|
| Min horizontal padding | >= 32px per side on containers | B9.1 |
| Characters per line | 45-80 CPL at 1440px viewport | B9.2 |
| Compression ratio | Deepest padding >= 40% of shallowest | B9.3 |
| Body line-height | >= 1.5 | B9.4 |
| Section breathing zones | >= 48px between major sections | B9.5 |
| Heading-to-body gap | >= 16px | B9.6 |
| 1440px rendering | No horizontal scrollbar | B9.7 |
| 768px rendering | No overlapping, no truncation, all accessible | B9.8 |

### Step 4: Container Width (B2 -- NON-NEGOTIABLE)

**THE SINGLE MOST IMPORTANT RULE:**

```css
.page-container {
  max-width: 960px;   /* MUST be 940-960px. NEVER below 940. NEVER above 960. */
  margin: 0 auto;
  padding: 0 var(--space-8);  /* 32px horizontal minimum */
}
```

**If you want a narrower aesthetic, use INTERNAL PADDING:**
```css
/* WRONG -- reduces container width */
.container { max-width: 700px; }

/* CORRECT -- internal padding creates narrow effect */
.container {
  max-width: 960px;   /* Non-negotiable */
  padding: 0 120px;   /* Internal padding = 720px content width */
}
```

**Priority order:**
1. Container width 940-960px (NEVER compromise)
2. Readability floors (NEVER compromise)
3. Pattern fidelity (ADJUST to meet above)
4. Aesthetic preference (LAST priority)

**THIS IS THE #1 PHASE D FAILURE MODE. 4/5 validation pages violated it.**

### Step 5: Mechanism Breadth (B3 -- 1+ Per Category)

**Action:** Read the FULL mechanism catalog (18 mechanisms). For EACH of the 5 categories, deploy AT LEAST ONE mechanism that serves THIS content.

| Category | Available | Minimum | Your Selection |
|----------|-----------|---------|---------------|
| **Spatial** | #5, #6, #15 | 1+ | [fill in] |
| **Hierarchy** | #1, #4, #11 | 1+ | [fill in] |
| **Component** | #2, #9, #10, #17 | 1+ | [fill in] |
| **Depth/Emphasis** | #3, #7, #16 | 1+ | [fill in] |
| **Structure/Nav** | #8, #12, #13, #14, #18 | 1+ | [fill in] |

**All 5 categories covered = B3.6 PASS.** Missing ANY category = CRITICAL FAIL.

### Step 6: Mechanism Count Verification (B4)

**Verify natural landing:**
- Count is 7-12 inclusive? **PASS** (< 7 = Floor-tier; > 12 = Ceiling-tier)
- Each mechanism has content-based justification? **NOT** "to reach 8 mechanisms"
- Count emerged from per-category selection (breadth), NOT targeting a number

**Document 2+ reinforcing pairs (B4.4 -- see Section 3.6)**
**Verify perceptibility (B4.5 -- see Section 3.7)**

### Step 7: Mechanism Justification (B5)

**For EACH deployed mechanism:** "I deploy [name] BECAUSE [content feature] at [location]"
**For AT LEAST 3 rejected mechanisms:** "I reject [name] BECAUSE [reason it doesn't fit THIS content]"

**Content-based, NOT catalog-based:**
- CORRECT: "This content has code blocks so mechanism #17 fits"
- WRONG: "Mechanism #17 is for technical zones" (catalog description, not content evidence)

### Step 8: Fractal Coherence (B6 -- 2 Scales for Middle)

**MANDATORY deliverable: Scale coverage table**

| Scale | Pattern Expression | CSS Evidence |
|-------|-------------------|--------------|
| **Page** | [How section sequence reflects selected pattern] | [Specific CSS: section padding values, background progression] |
| **Component** | [How content within components mirrors pattern] | [Specific CSS: internal padding, label vs body spacing] |

**Passing criteria:**
- Table complete with BOTH Page and Component scales
- SAME pattern direction at each scale
- CSS evidence provided for each scale
- Pattern is STRUCTURAL (rhythm, hierarchy, density), NOT decorative (color theme)

### Step 9: Soul Compliance (B7 -- Automated Verification)

| Check | Method |
|-------|--------|
| border-radius: 0 everywhere | Regex scan: no `border-radius` value > 0 |
| box-shadow: none everywhere | Regex scan: no `box-shadow` declaration |
| No gradients | Regex scan: no `linear-gradient`, `radial-gradient`, `conic-gradient` |
| No pure black #000000 | Regex scan: no `#000000` or `#000` or `rgb(0,0,0)` |
| No pure white #FFFFFF | Regex scan: no `#FFFFFF` or `#FFF` or `rgb(255,255,255)` |
| Typography trinity | h1/h2 use --font-display, body uses --font-body, code uses --font-mono |
| Colors from tokens | All colors trace to tokens.css values |

### Step 10: Additional Build Quality (B10)

| Check | Requirement |
|-------|-------------|
| Semantic HTML landmarks | >= 3 of: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>` |
| Zone backgrounds follow pattern | CRESCENDO: lighter (sparse) -> darker (dense). Consistent with Step 8. |
| Code blocks use mechanism #17 | Dark bg (~#1A1A1A), 3px border, JetBrains Mono, overflow-x: auto |
| WCAG AA contrast >= 4.5:1 | All primary text-background combinations |
| Border weights follow 3-category | 4px structural, 3px accent, 1px separator. NEVER 2px. |
| Single self-contained HTML file | One .html file, all CSS in `<style>`, fonts via CDN, no external CSS/JS |

## 4.3 Complete :root Block (Copy-Paste Ready)

```css
:root {
  /* Soul constraints -- IMMUTABLE */
  --border-radius: 0;
  --box-shadow: none;

  /* Colors -- LOCKED */
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #E0D5C5;
  --color-border-subtle: #F0EBE3;

  /* Zone backgrounds */
  --color-zone-sparse: #FEF9F5;
  --color-zone-dense: #FFFFFF;
  --color-zone-breathing: #FAF5ED;

  /* Typography -- LOCKED */
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;

  /* Type scale */
  --type-page: 2.5rem;
  --type-section: 2rem;
  --type-subsection: 1.5rem;
  --type-body: 1rem;
  --type-code: 0.875rem;
  --type-meta: 0.75rem;

  /* Spacing -- 4px base */
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

  /* Border weights */
  --border-left-width: 4px;

  /* Callout accents */
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-coral: #C97065;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;
}
```

## 4.4 Base Typography (Copy-Paste Ready)

```css
body {
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: 1.7;
  color: var(--color-text);
  background: var(--color-background);
}

h1, h2 {
  font-family: var(--font-display);
  font-weight: 400;
  line-height: 1.2;
}
h1 { font-size: var(--type-page); margin-bottom: var(--space-6); }
h2 { font-size: var(--type-section); margin-top: var(--space-12); margin-bottom: var(--space-4); }
h3 {
  font-family: var(--font-display);
  font-size: var(--type-subsection);
  font-style: italic;   /* ALL h3 MUST be italic */
  font-weight: 400;
  line-height: 1.4;
  margin-top: var(--space-8);
  margin-bottom: var(--space-4);
}

p { margin-bottom: var(--space-4); max-width: 65ch; }

code {
  font-family: var(--font-mono);
  font-size: var(--type-code);
  background: var(--color-border-subtle);
  padding: 2px 6px;
  border: 1px solid var(--color-border);
}
```

## 4.5 Accessibility (MANDATORY in Every Page)

```css
.skip-link {
  position: absolute; top: -100%; left: 0;
  background: var(--color-primary); color: var(--color-background);
  padding: 8px 16px; z-index: 1000;
  font-family: var(--font-body); font-size: 14px; text-decoration: none;
}
.skip-link:focus { top: 0; }

*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

::selection {
  background: var(--color-primary);
  color: var(--color-background);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## 4.6 Responsive Strategy (768px -- ONLY Validated Breakpoint)

```css
@media (max-width: 768px) {
  .page-container { max-width: 100%; padding: 0 var(--space-5); }
  h1 { font-size: 2rem; }
  h2 { font-size: 1.5rem; }
  .bento-grid { grid-template-columns: 1fr; }
  /* Grids collapse to single column */
  /* Padding compresses: desktop 48-64px -> tablet 32-48px -> mobile 24-32px */
  /* NEVER below 24px padding */
}
```

## 4.7 Transition Types (3+ Required for Middle-Tier)

```css
/* SMOOTH: 48px gap + 1px separator */
.transition--smooth {
  margin: var(--space-12) 0;         /* 48px */
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-12);
}

/* BRIDGE: 64px gap + breathing zone */
.transition--bridge {
  margin: var(--space-16) 0;         /* 64px */
  background: var(--color-zone-breathing);
  padding: var(--space-8);           /* 32px */
}

/* BREATHING: 80px gap + 3px structural border */
.transition--breathing {
  margin: var(--space-20) 0;         /* 80px */
  border-top: 3px solid var(--color-border);
  padding-top: var(--space-20);
}
```

## 4.8 Component Sequencing Rules (R5)

| Rule | Principle |
|------|-----------|
| **Velocity Sequencing** | Never stack same-velocity components. SLOW + SLOW = monotonous. Insert FAST between. |
| **Temperature Flow** | Warm -> Neutral -> Cold (smooth). NEVER Warm -> Cold (jarring). |
| **Weight Balance** | Heavy + Heavy overwhelms. Interleave Light components. |
| **Semantic Proximity** | Related: 8-16px. Different topics: 24-32px. Sections: 48-64px. |

**Component properties:**

| Component | Velocity | Temperature | Weight |
|-----------|----------|-------------|--------|
| Code Snippet | SLOW | Neutral | Heavy |
| Info Callout | FAST | Neutral | Light |
| Tip Callout | FAST | Warm | Light |
| Gotcha Callout | FAST | Cold | Medium |
| Essence Callout | SLOW | Warm | Medium |
| Data Table | MEDIUM | Neutral | Heavy |

**Max components per viewport:** Callouts: 2 max. Code blocks: 2 max. Heavy total: 3 max.

---

# SECTION 5: VALIDATION FRAMEWORK

## 5.1 Critical-10 Items (Failure on ANY ONE = Experiment Fails)

| # | ID | Check | Pass Condition |
|---|------|-------|---------------|
| 1 | **B8.2** | Always-load protocol | Read prohibitions.md + tokens.css BEFORE design work |
| 2 | **A1.0** | M1 status verified | Builder uses per-category minimum protocol, NOT "sample 2-4" |
| 3 | **B1.2** | Phases 1-3 skipped | No metaphor derivation, tension analysis, or multi-axis questioning |
| 4 | **B2.1** | Container width 940-960px | Computed max-width at 1440px viewport is 940-960px |
| 5 | **B2.5** | Container priority documented | "940-960px is HIGHEST priority. Express narrowing via internal padding." |
| 6 | **B3.6** | All 5 mechanism categories | 1+ from Spatial AND Hierarchy AND Component AND Depth/Emphasis AND Structure/Nav |
| 7 | **B4.4** | Mechanism interaction | 2+ reinforcing pairs documented with shared content dimensions |
| 8 | **B7.1** | border-radius: 0 | No element has border-radius > 0 anywhere in CSS |
| 9 | **B7.2** | box-shadow: none | No element uses box-shadow anywhere in CSS |
| 10 | **E1.1** | Verdict stated | Exactly one of: SUCCESS / PARTIAL / FAILURE |

## 5.2 Quick Check: 15-Item Gate (30-40 Minutes)

Run BEFORE the full 138-item checklist. Catches 80% of issues.

### Instant-Fail Items (Critical-10 Subset)

| # | Item | Pass Condition |
|---|------|---------------|
| 1 | Container width 940-960px | Computed max-width at 1440px |
| 2 | border-radius: 0 | No violations |
| 3 | box-shadow: none | No violations |
| 4 | No pure black #000 | No #000000 anywhere |
| 5 | No pure white #FFF | No #FFFFFF anywhere |
| 6 | All 5 mechanism categories | 1+ per category |
| 7 | Phases 1-3 skipped | No metaphor/tension performed |
| 8 | Always-load protocol | prohibitions.md + tokens.css read first |
| 9 | CPL 45-80 | Body text at 1440px |
| 10 | Body line-height >= 1.5 | Computed line-height |

### Threshold Items

| # | Item | Pass Condition |
|---|------|---------------|
| 11 | PA-05 engagement | 4/4 sub-criteria PASS (see 5.3) |
| 12 | Token compliance >= 80% | 80%+ CSS values from tokens.css |
| 13 | Mechanism count 7-12 | Total unique mechanisms |
| 14 | Better than Variant B: categories | Middle deploys across MORE than 2 categories |
| 15 | Better than Variant B: verdict | Clear improvement with 2+ specific observations |

**Verdicts:**
- All 15 PASS = QUICK PASS
- Any Critical-10 FAIL = INSTANT FAIL (experiment fails)
- Any Threshold FAIL = UNDER-DESIGNED (full check yields PARTIAL or FAILURE)

## 5.3 PA-05 Operationalization (4 Binary Sub-Criteria)

PA-05 ("page feels designed") is operationalized into 4 measurable sub-criteria:

### PA-05a: Non-Default Layout Element Count >= 2

**Qualifying:** Asymmetric multi-column, bento grids with spans, width-constrained blocks, full-bleed backgrounds, solid-offset depth, sections with different internal padding structures.
**NOT qualifying:** Equal-width columns, single-column centered, uniform card grids.

### PA-05b: Padding Range Ratio >= 2.0x

Largest section padding / smallest section padding >= 2.0.
- 80px / 32px = 2.5x -- PASS
- 48px / 40px = 1.2x -- FAIL

### PA-05c: Visual Hierarchy Identification Test

Fresh agent identifies PRIMARY and SECONDARY zones from 20px Gaussian-blurred screenshot within 3 seconds. Both match builder intent = PASS.

### PA-05d: Non-Framework CSS Ratio >= 15%

Compositional CSS (calc(), pseudo-elements, grid-template, transform, nth-child, semantic selectors, different values for same element type) / total CSS >= 15%.

### Composite

| Score | Result |
|-------|--------|
| 4/4 PASS | **PA-05 = YES** (Designed) |
| 2-3/4 PASS | **PA-05 = MARGINAL** |
| 0-1/4 PASS | **PA-05 = NO** (Formatted) |

### 768px Adjusted Thresholds

| Sub-criterion | 1440px | 768px |
|---------------|--------|-------|
| PA-05a | >= 2 elements | >= 1 element |
| PA-05b | >= 2.0x ratio | >= 1.5x ratio |
| PA-05c | Same method | Same method, different screenshot |
| PA-05d | >= 15% | Same (CSS doesn't change) |

## 5.4 Full 138-Item Checklist Summary

The full checklist has 138 items across 8 sections:

| Section | Items | Focus |
|---------|-------|-------|
| A: Pre-Build Decisions | 23 | M1 timing, content selection, pattern, mechanism approach |
| B: Build Requirements | 53 | Token compliance, routing, guardrails, container, mechanisms, fractal, soul, quality |
| C: Measurement and Metrics | 22 | Structural metrics, mechanism analysis, programmatic audit, perceptual audit |
| D: Evaluation Criteria | 12 | Side-by-side with Variant B, engagement, novelty |
| E: The Verdict | 16 | SUCCESS / PARTIAL / FAILURE criteria |
| F: Post-Experiment Decisions | 15 | What to do based on verdict |
| G: Meta-Checks | 8 | Framing correctness |
| H: Completeness Cross-Check | 6 | Coverage tables |

**Source file:** `ephemeral/session-insights/18-middle-tier-checklist.md` (~1,200 lines)

## 5.5 Programmatic Audit Protocol (C3)

| Step | Action |
|------|--------|
| 1 | Serve HTML via HTTP (Playwright blocks `file://`) |
| 2 | Disable scroll animations: `animation: none !important; opacity: 1 !important` |
| 3 | Wait for `document.fonts.ready` BEFORE checking computed fonts |
| 4 | Measure COMPUTED styles (not CSS source -- shorthand overrides catch bugs) |
| 5 | Check at BOTH 1440px AND 768px viewports |
| 6 | Verify header-content alignment, border shorthand order |

## 5.6 Perceptual Audit Protocol (PA -- 48 Questions)

### The One Rule
> "React to what you see before you check what you know."

### Tier 1: Mandatory Five (EVERY audit)

| ID | Question |
|----|----------|
| PA-01 | What's the first thing that bothers you? |
| PA-02 | Is any text uncomfortable to read? Point to the worst spot. |
| PA-03 | Does this feel like one designer made it, or three? |
| PA-04 | Where does your eye go first? Is that where it SHOULD go? |
| PA-05 | Would you put your name on this? What would you fix first? |

### Middle-Tier Audit Scope

**For Middle-tier pages, use:**
- PA-01 through PA-20 (Mandatory Five + Standard Fifteen)
- PA-SEM-01, PA-SEM-02, PA-SEM-03 (pattern logic checks)
- At BOTH 1440px AND 768px viewports

**PA-SEM questions for Middle:**

| ID | Question | Pass | Fail |
|----|----------|------|------|
| PA-SEM-01 | For 3 most prominent spacing variations, justify each against adjacent token values using pattern logic | "CRESCENDO peak uses 16px (densest)" | "32px because it looked good" |
| PA-SEM-02 | Do spacing progressions use clear ratios (2:1, 3:1) or arbitrary gradations? | 64->32->16 (4:2:1 ratio) | 64->56->48 (arbitrary) |
| PA-SEM-03 | Can you explain WHY this pattern fits this content without referencing the catalog? | "Complexity increases -> density increases" | "I used CRESCENDO because catalog" |

---

# SECTION 6: CONTEXT AND LESSONS

## 6.1 The Tier Model

| Property | Floor | Middle (TARGET) | Ceiling | Flagship |
|----------|-------|-----------------|---------|----------|
| Pages (of total) | 10-20% | 40-50% | 20-30% | 5-10% |
| Mechanisms | 5 | 8-10 | 12-15 | 16-18 |
| Build time | 30-45 min | 70-100 min | 150-220 min | 240-400 min |
| CSS lines | 150-250 | 350-500 | 700-1000 | 1000-1500 |
| Metaphor? | No | No | Yes | Yes + multi-pattern |
| Categories | 2-3 | 5/5 | 5/5 | 5/5 |
| Scales | 0 | 2 | 4 | 5 |
| Deployment | Individual | Individual | Combination | Multi-pattern |

**Middle tier is the recommended universal floor.** Floor-to-Middle transition has the HIGHEST ROI (3-4x richness for ~45 extra minutes).

**IMPORTANT:** These numbers are BACKWARD-ENGINEERED from existing pages, NOT invented targets. They describe NATURAL LANDING ZONES.

## 6.2 Phase D Findings (What Worked and What Failed)

### What Worked (Variant B: 18/19 Compliance, 4/5 Novelty)

- **Genuine metaphor derivation:** "Scientific calibration laboratory" independently derived
- **Custom component vocabulary:** Instrument cards, cost meters, error analysis panels
- **Lab zone system:** 5 variants with progressive padding (64px/48px/32px)
- **4-color zone system:** --bg-safety, --bg-clean-room, --bg-transition, --bg-data
- **100% token compliance:** All CSS values from token scale
- **100% soul compliance:** border-radius: 0, box-shadow: none

### What Failed

1. **Container width violation (THE #1 failure):** 4/5 pages violated 940-960px. Variant B = 880px (too narrow). Others went wider (1052px).
2. **Always-load protocol skip:** Track 1 builder skipped prohibitions.md + tokens.css = 5 critical violations = INSTANT FAIL.
3. **Prose-only content:** Limited component testing to 22-44% (vs 67% target).
4. **"Sample 2-4 mechanisms":** All 11 research agents identified this as the single most limiting specification.

### What to Avoid

- Do NOT reduce container width below 940px for any reason
- Do NOT skip the always-load protocol
- Do NOT use "sample 2-4 mechanisms" -- read the FULL catalog
- Do NOT use prose-only content for the experiment
- Do NOT treat case studies as templates

## 6.3 Modification Recommendations Applied

| Mod | Name | Status | What It Does |
|-----|------|--------|-------------|
| M2 | Fractal Gate | APPLIED (Wave 1) | Promoted 10-line check to GATE with scale coverage table |
| M3 | Container Width | APPLIED (Wave 1) | NON-NEGOTIABLE 940-960px rule |
| M5 | Tier Routing | APPLIED (Wave 1) | Middle skips Phases 1-3, goes to Phase 4 with pattern |
| M8 | Tier Framing | APPLIED (Wave 1) | Individual/combination/multi-pattern distinction |
| M1 | Per-Category Minimum | NOT YET APPLIED | Override at builder-prompt level for this experiment |

**M1 override for this experiment:** The skill still says "sample 2-4." The builder prompt MUST contain: "IGNORE 'sample 2-4'. Instead deploy 1+ per category (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Nav). Read FULL catalog."

## 6.4 Core Research Findings

### Richness = Vocabulary Fluency, Not Creative Freedom

Showcase pages (DD-006 at 36/40, CD-006 at 39/40) were MORE rigid than pipeline output, not less. CD-006 operated under 78 simultaneous constraints. More constraints produced more richness because constraints were overwhelmingly VOCABULARY (new tools), not PROHIBITIONS (things you can't do).

### The Gap is Quantitative, Not Qualitative

Variant B derives GENUINE identity. The gap is technique SATURATION (7/18 mechanisms used), not technique ABSENCE. Per-category minimum ensures breadth.

### "Sample 2-4 Mechanisms" = 50:1 Information Loss

The pipeline compresses 337 research findings and 94 external research references into "sample 2-4 mechanisms." This is the single most limiting specification. M1 exists to fix it.

### Binary Rules vs Judgment Rules

**THE most important architectural principle:** Binary rules achieve 100% agent compliance. Judgment rules achieve ~0%. Every instruction in this prompt is binary unless explicitly labeled otherwise.

## 6.5 Variant B Mechanism Recount (Authoritative Baseline)

Variant B deployed **7 mechanisms across 5 categories (100% category coverage)**:

| Category | Mechanisms | Count |
|----------|-----------|-------|
| Spatial (S) | #5 Dense/Sparse Alternation | 1 |
| Hierarchy (H) | #1 Border-Weight, #4 Spacing Compression, #11 Typography Scale | 3 |
| Component (C) | #2 2-Zone DNA, #10 Border-Left Signal | 2 |
| Depth/Emphasis (D) | #7 Zone Background | 1 |
| Structure/Nav (N) | #18 Data Table | 1 |

**11 mechanisms NOT deployed:** #3, #6, #8, #9, #12, #13, #14, #15, #16, #17

**Key insight:** HIGH compliance (18/19) does NOT equal HIGH technique saturation. The gap is technique DENSITY.

---

# SECTION 7: REFERENCE EXAMPLES

## 7.1 Variant B Anatomy (Phase D Winner)

### Structure

```html
<body>
  <div class="page-container">  <!-- max-width: 960px -->
    <section class="lab-zone">           <!-- Safety briefing: sparse -->
    <section class="lab-zone--critical">  <!-- Critical: 4px left border -->
    <section class="lab-zone--clean-room"> <!-- Measurement: white bg -->
    <section class="lab-zone--dense">      <!-- Dense data zone -->
    <section class="lab-zone--transition"> <!-- Breathing/transition -->
  </div>
</body>
```

### What Middle Must Improve Over Variant B

Variant B scored 18/19 compliance but missed:
- Dark header (#13) + footer mirror (#14) -- not deployed
- Code blocks (#17) -- no code in prose-only content
- Color encoding (#9) -- single callout color
- Bento grid (#15) -- no grid layout
- Solid offset (#3) -- no featured elements

Middle-tier with mixed content should naturally deploy these additional mechanisms.

## 7.2 Crown Jewel Summary: DD-006 (Ceiling Reference)

- **CSS lines:** ~730 (Ceiling range: 700-1000)
- **Mechanisms:** 12+ across all 5 categories
- **Fractal:** 4-level demonstration (page/section/component/character)
- **What separates it from Middle:** Structural recursion at 4 scales, content ABOUT self-similarity that DEMONSTRATES self-similarity, 730 CSS lines

**Do NOT attempt to match DD-006 at Middle tier.** Middle targets 350-500 CSS lines, 2 scales, 8-10 mechanisms.

## 7.3 Crown Jewel Summary: CD-006 (Flagship Reference)

- **CSS lines:** 1,000+ (Flagship range)
- **Components:** ALL 11 types deployed
- **Patterns:** ALL 5 axis patterns on one page
- **Transitions:** 7 total (2 Smooth, 3 Bridge, 2 Breathing)
- **Fractal:** 5 scales (navigation, page, section, component, character)

**Do NOT attempt to match CD-006 at Middle tier.** This is the scoring ceiling (39/40).

## 7.4 Concrete CSS: Callout System (Middle-Tier Level)

```css
.callout { border-left: 4px solid; padding: var(--space-6) var(--space-8); margin: var(--space-6) 0; }
.callout-label { font-family: var(--font-body); font-weight: 600; font-size: var(--type-meta); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: var(--space-2); }
.callout-body { font-family: var(--font-body); font-size: var(--type-body); line-height: 1.7; }

.callout--info    { border-left-color: var(--accent-blue);   background: #F5F9FE; }
.callout--tip     { border-left-color: var(--accent-green);  background: #F2F9F4; }
.callout--gotcha  { border-left-color: var(--accent-coral);  background: #FEF6F5; }
.callout--essence { border-left-color: var(--accent-purple); background: var(--color-zone-breathing); }
.callout--essence .callout-body { font-family: var(--font-display); font-style: italic; font-size: 1.125rem; }
```

## 7.5 Concrete CSS: Section Zones (Middle-Tier Level)

```css
.section--sparse {
  padding: var(--space-16);    /* 64px */
  background: var(--color-zone-sparse);
}
.section--dense {
  padding: var(--space-8);     /* 32px */
  background: var(--color-zone-dense);
  border: 1px solid var(--color-border);
}
.section--breathing {
  padding: var(--space-12);    /* 48px */
  background: var(--color-zone-breathing);
}
.section--critical {
  border-left: 4px solid var(--color-primary);
  padding: var(--space-16);
  background: var(--color-zone-sparse);
}
```

## 7.6 What the 5 Most Universal Mechanisms Look Like Together

Based on case study frequency analysis, these 5 mechanisms appear in 3+ of 9 case studies:

1. **2-Zone Component DNA (#2)** -- 6/9 case studies
2. **Border-Weight Gradient (#1)** -- 4/9
3. **Zone Background Differentiation (#7)** -- 4/9
4. **Spacing Compression (#4)** -- 3/9
5. **Dense/Sparse Alternation (#5)** -- 3/9

A Middle-tier page selecting 8-10 mechanisms should include ALL 5 of these plus 3-5 from the remaining catalog.

---

# SECTION 8: ANTI-PATTERNS AND FAILURE MODES

## 8.1 Known Gaming Vulnerabilities

### Post-Hardening Gaming Resistance: 8/10

The worst possible passing page (pre-hardening) was a single-column 940px page with 5 independently deployed mechanisms, 48-52px uniform padding, barely perceptible background alternation, CRESCENDO claimed via 52px -> 48px decrease. It NOW fails:

- B4.1: 5 mechanisms < 7 floor = FAIL
- B4.4: No reinforcing pairs = FAIL
- B4.5: 48 vs 52 = 4px < 8px threshold = FAIL
- PA-05a: 0 custom layout elements < 2 = FAIL
- PA-05b: 52/48 = 1.08x < 2.0x = FAIL

### Remaining Vulnerabilities

1. **B5.1 justification gaming:** "I deploy #1 because content has headings" trivially satisfies the template. Countermeasure: B5.3 requires content features, not catalog descriptions.
2. **B6.4/B6.5 evidence gaming:** "Padding varies" technically cites CSS. Countermeasure: items require EXACT VALUES.
3. **D2.3 atmosphere gaming:** "Warm palette creates pleasant reading" describes system defaults, not builder choices. Countermeasure: evidence must cite builder-created spatial decisions.

## 8.2 Common Build Failures

| Failure | Prevention |
|---------|-----------|
| Container width < 940px | Use 960px max-width. Express narrowing through internal padding. |
| Container width > 960px | Use exactly 960px max-width (or 940px). |
| Skip always-load protocol | Read prohibitions.md + tokens.css FIRST. 527 lines. |
| "Sample 2-4 mechanisms" | Read FULL catalog. Deploy 1+ per category. |
| Prose-only content | Use mixed content: prose + code + callouts + tables. |
| Case studies as templates | Extract MECHANISMS, not implementations. |
| Uniform density | Vary padding: 64px sparse, 32px moderate, 16px dense. |
| Same-velocity stacking | Interleave SLOW (code) with FAST (callouts). |
| Traffic-light adjacency | 48px+ between green (tip) and red (gotcha). |
| Missing h3 italic | ALL h3 elements: `font-style: italic`. |

## 8.3 Anti-Patterns from Compositional Rules

| Rule | Anti-Pattern | Correct |
|------|-------------|---------|
| N4 | Nesting > 2 levels deep | Max 2 (zone -> callout). Never 3+. |
| R2 | 4+ consecutive dense sections | Max 3, then mandatory sparse. |
| Z2 | 4+ zone color changes per viewport | Max 2-3 per viewport. |
| D1 | 5+ components per viewport height | Max 3-4. |
| AP1 | 3+ callouts per viewport section | Max 2 callouts per viewport. |
| C1 | Simultaneous axis patterns | One section = one pattern. |

## 8.4 Border Anti-Patterns

| ID | Anti-Pattern | Correct |
|----|-------------|---------|
| AP-B1 | 2px borders outside confidence encoding | 4px for callouts, 3px for sections, 1px for separators |
| AP-B2 | Mixed border widths on same element | 1px all sides, then override left to 4px |
| AP-B3 | Border for spacing (transparent borders) | Use spacing tokens |
| AP-B4 | Rounded borders | `border-radius: 0` ALWAYS |

## 8.5 Process Anti-Patterns

| Anti-Pattern | Why It Fails | Correct |
|-------------|-------------|---------|
| Building before reading constraints | Produces soul violations | Always-load protocol FIRST |
| Counting mechanisms as target | Goodhart's Law | Per-category breadth; count is consequence |
| Metaphor derivation for Middle | Wastes 60+ minutes | Pattern selection lookup |
| Reading case studies before building | Template convergence | Phase-gated access (case studies LAST) |
| Treating "designed" as judgment | 0% inter-rater reliability | PA-05 operationalized into 4 sub-criteria |

---

# SECTION 9: CONTENT REQUIREMENTS

## 9.1 Content Selection Criteria

| Criterion | Requirement | Fail Condition |
|-----------|-------------|----------------|
| A2.1 Word count | 800-1,200 words | < 800 too thin; > 1,200 scope creep |
| A2.2 Prose paragraphs | >= 3 paragraphs of narrative/explanatory prose | Zero prose = FAIL |
| A2.3 Code blocks | >= 2 code blocks | Zero = FAIL |
| A2.4 Callouts/tips/warnings | >= 2 callout-type elements | Zero = FAIL |
| A2.5 Hierarchical headings | 2+ heading levels (e.g., H2 + H3) | Only 1 level = FAIL |
| A2.6 Table OR reference | >= 1 data table or structured reference | None = FAIL |
| A2.7 Step sequence | >= 1 sequential procedure (3+ steps) | None = FAIL |
| A2.8 Domain different from Variant B | NOT about scientific calibration / measurement | Same domain = FAIL |
| A2.9 NOT self-referential | NOT about the design system itself | Self-referential = ABORT |
| A2.10 Maps to density pattern | Maps to exactly one of: CRESCENDO / F-PATTERN / BENTO / PULSE | Ambiguous = FAIL |

## 9.2 Structural Verification

| Check | Threshold |
|-------|-----------|
| A3.1 Structural element type count | >= 4 of: prose, code, callouts, tables, step sequences, headings, lists |
| A3.2 No single element dominates | No single type > 60% by word/line count |
| A3.3 Verification documented | Written record showing A2.1-A2.10 verified |

## 9.3 Why Mixed Content Matters

Variant B's prose-only content limited component testing to 22-44%. Mixed content exercises more mechanism categories:
- Code blocks -> #17 (Code Block component category)
- Tables -> #18 (Data Table structure category)
- Callouts -> #2 + #9 (Component category)
- Step sequences -> #12 (Progressive Disclosure structure category)
- Multiple heading levels -> #11 (Typographic Scale hierarchy category)

Mixed content NATURALLY demands more mechanisms across more categories.

## 9.4 Content Domain Suggestions

Content should be about a TECHNICAL TOPIC unrelated to design systems or scientific calibration. Good candidates:
- Setting up a development environment
- Configuring a deployment pipeline
- Database query optimization
- API versioning strategies
- Authentication flow design
- Container orchestration
- Monitoring and observability
- Performance profiling

The specific topic is less important than meeting the structural requirements (A2.1-A2.10).

---

# SECTION 10: SUCCESS CRITERIA

## 10.1 The Decision Matrix

| Engagement | Novelty | Verdict | Action |
|-----------|---------|---------|--------|
| Designed | Novel | **SUCCESS** | Proceed to Wave 2 (M1/M6/M7). Tier model validated. |
| Designed | Derivative | **PARTIAL** | Middle achieves richness but feels like showcase copy. Revise M1 + add customization mandate. |
| Under-designed | Novel | **PARTIAL** | Tier boundary wrong. Middle may need 10-12 mechanisms. Novelty is good (vocabulary works). |
| Under-designed | Derivative | **PARTIAL** | Wave 1 validated (convergence detectable). Proceed to Wave 2. |

## 10.2 SUCCESS Criteria (ALL must be true)

| ID | Check | Pass Condition |
|----|-------|---------------|
| E2.1 | PA-05 at 1440px = YES | 4/4 sub-criteria PASS |
| E2.2 | Better than Variant B = YES | Clear improvement, NOT marginal |
| E2.3 | Spatial atmosphere = YES or SOMEWHAT | "Want to spend time here" at least partially |
| E2.4 | 5-category coverage = PASS | B3.6 |
| E2.5 | Novelty >= 2 of 3 signals | D3.1/D3.2/D3.3 indicate novel |
| E2.6 | Container width = 940-960px | B2.1 |
| E2.7 | Soul compliance = 7/7 | B7.1-B7.7 all PASS |

## 10.3 FAILURE Criteria (any 1 true)

| ID | Check | Interpretation |
|----|-------|---------------|
| E4.1 | PA-05 at 1440px = NO | 0-1 sub-criteria PASS. Lookup cannot produce engagement. |
| E4.2 | Better than Variant B = NO | Middle equal or worse despite more mechanisms |
| E4.3 | All 3 novelty signals = DERIVATIVE | Page copies showcase pages structurally |
| E4.4 | Container width violated | #1 failure mode recurred |
| E4.5 | 5-category coverage failed | Per-category minimum didn't produce breadth |

## 10.4 Novelty Assessment (3 Tests)

| Test | Method | Novel | Derivative |
|------|--------|-------|-----------|
| D3.1 Structural fingerprint | 20px Gaussian blur: Middle vs OD-004 vs DD-006 | DISTINCT shape distribution | SAME sectioning pattern |
| D3.2 CSS value overlap | For shared mechanisms: extract CSS values, compare | < 30% overlap | > 60% overlap |
| D3.3 Mechanism combination | Are combinations same as showcase or different? | Different pairs | Same pairs |

## 10.5 Post-Experiment Decisions

### If SUCCESS

| Action | What |
|--------|------|
| F1.1 | Apply M1 to skill permanently |
| F1.2 | Proceed to Wave 2 planning (M6, M7) |
| F1.3 | Plan Ceiling experiment with SAME content |
| F1.4 | Document strongest content-mechanism fits |
| F1.5 | Document gaps for Wave 2 |

### If PARTIAL

| Action | What |
|--------|------|
| F2.1 | Analyze WHICH dimension is missing (spatial variety, depth, coherence, atmosphere) |
| F2.2 | Consider adjusting per-category parameters |
| F2.3 | Consider 2nd Middle build with adjustments |
| F2.4 | Evaluate whether content choice affected result |
| F2.5 | Do NOT proceed to Ceiling until PARTIAL understood |

### If FAILURE

| Action | What |
|--------|------|
| F3.1 | Distinguish content-specific vs fundamental failure |
| F3.2 | Analyze M1-specific vs tier-model failure |
| F3.3 | Consider Floor/Ceiling binary (dropping Middle) |
| F3.4 | Re-examine whether "no metaphor" is the actual problem |
| F3.5 | Do NOT proceed to Wave 2 |

## 10.6 Meta-Checks (Section G)

| Check | Pass Condition |
|-------|---------------|
| G1 | Mechanism counts described as DESCRIPTIVE, not prescriptive |
| G2 | "Sample 2-4" labeled as the PROBLEM, not the design |
| G3 | Patterns distinguished from mechanisms (skeleton vs flesh) |
| G4 | Middle = lookup (content -> mechanism). Ceiling = derivation (metaphor -> semantics -> mechanisms). |
| G5 | Fractal coherence with CONCRETE examples (section padding progression) |
| G6 | Scales and mechanisms are SEPARATE dimensions (depth vs breadth) |
| G7 | M1 sequencing with rationale documented |
| G8 | Verdict framework exists BEFORE build |

## 10.7 Key Thresholds Quick Reference

| Property | Threshold | Item |
|----------|-----------|------|
| Container max-width | 940-960px | B2.1 (NON-NEGOTIABLE) |
| Horizontal padding | >= 32px | B9.1 |
| Characters per line | 45-80 | B9.2 |
| Compression ratio | Deepest >= 40% of shallowest | B9.3 |
| Body line-height | >= 1.5 | B9.4 |
| Section breathing | >= 48px | B9.5 |
| Heading-body gap | >= 16px | B9.6 |
| Token compliance | >= 80% | B8.1 |
| Mechanism count | 7-12 | B4.1 |
| Mechanism categories | 5/5 | B3.6 |
| Mechanism interactions | >= 2 pairs | B4.4 |
| Perceptibility | >= 10% OR 8px | B4.5 |
| CSS line count | 350-500 (descriptive) | C1.1 |
| Word count | 800-1,200 | A2.1 |
| Structural types | >= 4 | A3.1 |
| PA-05a elements | >= 2 (1440px) | C4.5 |
| PA-05b padding ratio | >= 2.0x (1440px) | C4.5 |
| PA-05d compositional CSS | >= 15% | C4.5 |
| WCAG contrast | >= 4.5:1 | B10.9 |
| Semantic HTML | >= 3 landmarks | B10.1 |
| Fractal scales | 2 (Page + Component) | B6.1 |
| Transitions | >= 3 | C3 enrichment |

---

# APPENDIX A: FILE REFERENCE MAP

## Tier 1: MUST-LOAD (Builder reads directly)

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 1 | `design-system/compositional-core/identity/prohibitions.md` | 353 | 22 soul constraints. Load FIRST. |
| 2 | `design-system/compositional-core/vocabulary/tokens.css` | 174 | 65 tokens. Load SECOND. |
| 3 | `design-system/compositional-core/grammar/mechanism-catalog.md` | 1,011 | 18 mechanisms + compositional rules. |
| 4 | `design-system/compositional-core/guidelines/semantic-rules.md` | 286 | Semantic gap rules. |
| 5 | `design-system/compositional-core/guidelines/usage-criteria.md` | 298 | Usage criteria. |
| 6 | `~/.claude/skills/tension-composition/SKILL.md` | ~1,582 | Build pipeline (with M1 override). |
| 7 | `~/.claude/skills/perceptual-auditing/SKILL.md` | ~200 | PA audit questions. |

## Tier 2: MUST-REFERENCE (Prompt incorporates findings)

| # | File | Purpose |
|---|------|---------|
| 8 | `ephemeral/session-insights/18-middle-tier-checklist.md` | 138-item checklist |
| 9 | `ephemeral/session-insights/21-quick-check.md` | 15-item gate |
| 10 | `ephemeral/session-insights/21-pa05-operationalization.md` | PA-05 sub-criteria |
| 11 | `ephemeral/session-insights/21-mechanism-hardening.md` | B4.4, B4.5, floor raise |
| 12 | `ephemeral/continuity-docs/HANDOFF.md` | State transfer document |
| 13 | `ephemeral/phase-d-execution/builds/variant-b-weak-perm.html` | Variant B baseline |

## Tier 3: Crown Jewel References (Visual Comparison)

| # | File | Purpose |
|---|------|---------|
| 14 | `design-system/validated-explorations/density/DD-006-fractal.html` | Ceiling reference |
| 15 | `design-system/validated-explorations/combination/CD-006-pilot-migration.html` | Flagship reference |

---

# APPENDIX B: BUILDER PROMPT MANDATORY BLOCKS

Every builder agent MUST receive these blocks in their prompt:

## Block 1: Soul Checklist

```
SOUL CHECKLIST (verify EVERY element):
- [ ] border-radius: 0 on ALL elements
- [ ] box-shadow: none on ALL elements
- [ ] No filter: drop-shadow()
- [ ] No opacity < 1 on visual elements
- [ ] No gradient backgrounds
- [ ] No pure black (#000000) or pure white (#FFFFFF)
- [ ] Instrument Serif for DISPLAY HEADINGS only (never body)
- [ ] Inter for body text
- [ ] JetBrains Mono for code
- [ ] All h3 elements: font-style: italic
- [ ] All colors from tokens.css palette
- [ ] Border widths: 4px/3px/1px only (NEVER 2px)
```

## Block 2: File-Write Enforcement

```
CRITICAL: You MUST write the HTML file using the Write tool.
Text output is NOT sufficient. The file must exist on disk.
```

## Block 3: Container Width Enforcement

```
CONTAINER WIDTH: 940-960px at 1440px viewport.
This is NON-NEGOTIABLE. 4/5 Phase D pages violated this.
If ANY narrowing is needed, use INTERNAL PADDING, not external width reduction.
max-width: 960px + padding: 0 120px = 720px content width (CORRECT)
max-width: 700px (WRONG -- INSTANT FAIL)
```

## Block 4: M1 Override

```
MECHANISM SELECTION: IGNORE "sample 2-4 mechanisms" in the skill.
Instead: Read the FULL mechanism catalog (18 mechanisms).
Deploy AT LEAST 1 mechanism from EACH of these 5 categories:
- Spatial: #5, #6, #15
- Hierarchy: #1, #4, #11
- Component: #2, #9, #10, #17
- Depth/Emphasis: #3, #7, #16
- Structure/Nav: #8, #12, #13, #14, #18
Justify each deployed mechanism with content-based reasoning.
Reject at least 3 with content-based reasoning.
```

---

# APPENDIX C: COMPOSITIONAL RULES SUMMARY (41 Rules)

## Zone Nesting (4 rules)
- N1: Max nesting 2 levels (zone -> callout). Never 3.
- N2: Code blocks peer to callouts.
- N3: Decision matrices are terminal nodes.
- N4: Max component depth = 2.

## Spacing Rhythm (4 rules)
- R1: Every 2-4 dense zones MUST be followed by breathing (48px+ or bg shift).
- R2: Max 3 consecutive dense sections, then sparse.
- R3: Breathing triggers after 2-3 dense components, between sections, after viewport-height dense content.
- R4: Inside:between ratio = 1:3 to 1:4. Inside: 8-12px. Between: 24-32px. Sections: 48-64px.

## Background Zones (3 rules)
- Z1: Background shifts signal content type change.
- Z2: Max 2-3 zone changes per viewport.
- Z3: Heavy border -> moderate spacing. Light border -> generous spacing.

## Component Density (3 rules)
- D1: Max 3-4 components per viewport-height.
- D2: Density overwhelm at 3+ callouts, code+2+matrix, no whitespace for 2+ viewports.
- D3: Intro sparse -> Middle dense -> Conclusion sparse (may invert).

## 2-Zone DNA (3 rules)
- DNA1: Label (12px, uppercase, 600 weight, 0.1em letter-spacing) + Body (16px, 1.7 line-height).
- DNA2: Separator is spacing (margin-bottom 8-12px), NOT border.
- DNA3: 2-zone DNA applies universally (callouts, islands, code blocks).

## Compound Grammar (3 rules)
- C1: Sequential NOT simultaneous axis patterns.
- C2: Transition grammar: SMOOTH (32-48px), BRIDGE (64-96px + bg shift), BREATHING (96px+).
- C3: Max 5-6 patterns per page.

## Fractal (3 rules)
- F1: Fractal required at tier-specified scales (Middle: 2).
- F2: Same rhythm at each scale.
- F3: Fractal breaks correlate with lower audit scores.

## Grid Grammar (3 rules)
- G1: Bento span encodes importance (2x2 anchor, 2x1 secondary, 1x1 tertiary).
- G2: Grid gaps 24-32px.
- G3: Max 12 grid cells without breathing.

## Responsive Collapse (2 rules)
- RC1: Grids collapse to 1-2 columns at 768px.
- RC2: Padding compression at mobile: Desktop 48-64px -> Tablet 32-48px -> Mobile 24-32px. NEVER below 24px.

## Anti-Patterns (4 rules)
- AP1: Max 2 callouts per viewport section.
- AP2: Min 2 density modes per page.
- AP3: Density emerges from structure, not imposed.
- AP4: One section = one axis pattern.

---

# APPENDIX D: EVALUATION TIME ESTIMATES

| Phase | Time |
|-------|------|
| Pre-build decisions (content, pattern, mechanisms) | 30-45 min |
| Build (HTML + CSS) | 70-100 min |
| Programmatic audit (automated) | 5 min |
| Quick Check (15 items) | 30-40 min |
| Perceptual audit (PA-01 to PA-20 + SEM) | 30 min |
| Comparison with Variant B | 20-30 min |
| Verdict decision | 15-20 min |
| **TOTAL** | **3.5-4.5 hours** |

---

**FAIL CONDITION:** "Ran out of time" is NOT valid. "Ran out of context" requires compaction recovery, NOT abandonment. Every Critical-10 item must PASS.

**SUCCESS CONDITION:** PA-05 = YES (4/4 sub-criteria), Better than Variant B = YES, 5-category coverage = PASS, Container = 940-960px, Soul = 7/7, Novelty >= 2/3 signals.

---

*End of MASTER-MIDDLE-TIER-EXECUTION-PROMPT.md. A Claude instance reading this document has everything needed to plan and execute the Middle-tier experiment.*

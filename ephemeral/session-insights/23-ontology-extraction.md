# Ontology Extraction — Complete Constraints, Tokens, Mechanisms, Rules, and Guidelines

**Date:** 2026-02-15
**Agent:** ontology-researcher
**Source Files Read:** 16 files across Tier 1 (9 files) and Tier 3 (7 files)
**Purpose:** Exhaustive extraction of everything relevant to building a Middle-tier page

---

## Layer 1: Prohibitions (Identity — What KortAI REFUSES)

**Source:** `design-system/compositional-core/identity/prohibitions.md` (353 lines)

### ABSOLUTE PROHIBITIONS (8 — Zero Exceptions, EVER)

| # | Prohibition | CSS Rule | Why It Exists |
|---|-------------|----------|---------------|
| 1 | NEVER use border-radius > 0 on any element | `border-radius: 0` | Sharp edges = decisive, confident, print heritage. #1 soul constraint. |
| 2 | NEVER use box-shadow on any element | `box-shadow: none` | Shadows = false depth through physical light metaphors. Flat = print heritage. |
| 3 | NEVER use filter: drop-shadow() on any element | `filter: none` | Same principle as box-shadow. Any shadow violates anti-physical identity. |
| 4 | NEVER use semi-transparent backgrounds (opacity < 1) | `opacity: 1` on all visual elements | opacity < 1 on offset pseudo-elements = same visual effect as box-shadow. |
| 5 | NEVER use gradient backgrounds | No `linear-gradient`, `radial-gradient`, etc. | Gradients imply light sources, dimensional depth. |
| 6 | NEVER use pure black (#000000) or pure white (#FFFFFF) | Use palette values only | KortAI = warm earth tones. Pure black = harsh digital. Pure white = sterile. |
| 7 | NEVER use Instrument Serif for body text | Serif = DISPLAY ONLY (headings) | Destroys typography trinity. Inter is body font. |
| 8 | NEVER use rounded corners for decoration | `border-radius: 0` (reinforces #1) | Cosmetic softening vs geometric precision — KortAI explicitly rejects "friendly". |

### CONDITIONAL PROHIBITIONS (12 — Documented Exceptions Only)

| # | Prohibition | Exception | Documentation Required |
|---|-------------|-----------|----------------------|
| 9 | NEVER use 2px borders | OD-004 confidence encoding pattern only | "Using 2px border for [specific confidence encoding]. Exception justified by [pattern reference]." |
| 10 | NEVER use accent borders < 4px | AD-004 progressive depth encoding (4px/3px/1px) | "Using border-weight gradient [4px/3px/1px] for depth encoding per AD-F-014." |
| 11 | NEVER use decorative elements that don't carry information | NONE | If element doesn't carry information, delete it. |
| 12 | NEVER break grid with decoration | Content-driven asymmetry (pull quotes, emphasis callouts) | Break must serve semantic purpose. |
| 13 | NEVER use vertical borders in tables | NONE | Always horizontal-only borders. Open grid aesthetic. |
| 14 | NEVER use hover lift effects (transform: translateY) | NONE | Content is editorial, not interactive UI. |
| 15 | NEVER use traffic-light color adjacency (green next to red) | Separate with 48px+ spacing or neutral component | "Tip and Gotcha separated by [48px spacing / neutral content]." |
| 16 | NEVER use cool-toned grays (#F5F5F5, #E0E0E0, etc.) | NONE | Always use warm palette values. |
| 17 | NEVER use non-italic h3 headings | NONE | All h3 must be italic. Editorial hierarchy convention. |
| 18 | NEVER use same-density stacking (SLOW+SLOW or FAST+FAST) | Intentional crescendo patterns (PULSE, CRESCENDO) | "Using [CRESCENDO / PULSE] pattern. Exception justified by intentional density arc." |
| 19 | NEVER justify design choices without research provenance | NONE | Every visual decision must trace to research findings. |
| 20 | NEVER create new patterns without tension derivation | NONE | Patterns emerge from content tension, not template reuse. |

### META-PROHIBITIONS (2 — Process-Level)

- **#19:** Research provenance required for all visual decisions
- **#20:** Tension derivation required for all new patterns

**Summary:** 8 absolute + 12 conditional + 2 meta = 22 total prohibitions

---

## Layer 2: Tokens (Vocabulary — CSS Custom Properties)

**Source:** `design-system/compositional-core/vocabulary/tokens.css` (174 lines)

### Mutability Classification

- **IMMUTABLE (soul/identity):** Cannot change without violating identity
- **MUTABLE (scale/accent):** Can vary within constraints
- **AVAILABLE (extended):** Exist but not required

### Soul Constraints (IMMUTABLE — soul)

```css
--border-radius: 0;           /* IMMUTABLE — ALWAYS sharp edges. Never > 0. */
--box-shadow: none;            /* IMMUTABLE — ALWAYS flat design. Never any shadow. */
/* filter: drop-shadow() also prohibited */
```

### Color Palette

**Primary Colors (IMMUTABLE — identity):**

| Token | Value | Purpose |
|-------|-------|---------|
| `--color-primary` | `#E83025` | Sanrok red — editorial confidence, LOCKED |
| `--color-background` | `#FEF9F5` | Warm cream — not sterile white, LOCKED |
| `--color-text` | `#1A1A1A` | Near-black — softer than #000, LOCKED |
| `--color-text-secondary` | `#666666` | Muted secondary text, LOCKED |
| `--color-border` | `#E0D5C5` | Warm border tone, LOCKED |
| `--color-border-subtle` | `#F0EBE3` | Very subtle dividers, LOCKED |

**Accent Colors (MUTABLE — semantic flexibility):**

| Token | Value | Purpose |
|-------|-------|---------|
| `--accent-blue` | `#4A90D9` | Info/Note callout, File Tree |
| `--accent-green` | `#4A9D6B` | Tip callout |
| `--accent-coral` | `#C97065` | Gotcha callout (alternative) |
| `--accent-amber` | `#D97706` | Essence callout, Reasoning |
| `--accent-purple` | `#7C3AED` | Challenge callout |

**Background Colors (AVAILABLE — zone differentiation):**

| Token | Value | Purpose |
|-------|-------|---------|
| `--bg-page` | `#FAFAFA` | Page ground |
| `--bg-card` | `#FFFFFF` | Elevated zones |
| `--bg-warm` | `#FEF9F5` | Warm emphasis (Essence) |
| `--bg-dark` | `#1E1E1E` | Inverted focus (Code) — CD-006 uses #1A1A1A |
| `--bg-info` | `#F5F8FA` | Info semantic |
| `--bg-tip` | `#F5FAF5` | Tip semantic |
| `--bg-gotcha` | `#FEF6F5` | Warning semantic |
| `--bg-summary` | `#FEF9F0` | Synthesis (Reasoning) |

**Zone Colors (AVAILABLE — OD-F-005):**

| Token | Value | Purpose |
|-------|-------|---------|
| `--color-zone-sparse` | `#FEF9F5` | Sparse breathing zones |
| `--color-zone-dense` | `#FFFFFF` | Dense content zones |
| `--color-zone-breathing` | `#FAF5ED` | Recovery breathing zones |

**Text Hierarchy Colors (AVAILABLE):**

| Token | Value | Purpose |
|-------|-------|---------|
| `--text-primary` | `#1A1A1A` | "This is important" |
| `--text-secondary` | `#444444` | "This explains" |
| `--text-tertiary` | `#888888` | "This is supporting" |
| `--text-muted` | `#AAAAAA` | "This recedes" |
| `--text-inverse` | `#FFFFFF` | Dark background content |

### Typography

**Font Families (IMMUTABLE — identity trinity):**

| Token | Value | Purpose |
|-------|-------|---------|
| `--font-display` | `'Instrument Serif', Georgia, serif` | Editorial authority — LOCKED |
| `--font-body` | `'Inter', system-ui, sans-serif` | Functional clarity — LOCKED |
| `--font-mono` | `'JetBrains Mono', 'SF Mono', monospace` | Technical precision — LOCKED |

**Type Scale (MUTABLE — responsive hierarchy):**

| Token | Value | Px | Purpose |
|-------|-------|-----|---------|
| `--text-xs` | `0.75rem` | 12px | Labels, captions |
| `--text-sm` | `0.875rem` | 14px | Small body, metadata |
| `--text-base` | `1rem` | 16px | Body text baseline |
| `--text-lg` | `1.125rem` | 18px | Large body |
| `--text-h4` | `1.25rem` | 20px | Small headlines |
| `--text-h3` | `1.5rem` | 24px | Section headlines |
| `--text-h2` | `2rem` | 32px | Major headlines |
| `--text-h1` | `2.5rem` | 40px | Page titles |
| `--text-display` | `3rem` | 48px | Hero text |

**CD-006 Convention (alternative naming):**

| Token | Value | Purpose |
|-------|-------|---------|
| `--type-page` | `3rem` | Page-level titles |
| `--type-section` | `1.625rem` | Section titles |
| `--type-subsection` | `1.375rem` | Subsection titles |
| `--type-body` | `1rem` | Body text |
| `--type-code` | `0.875rem` | Code blocks |
| `--type-meta` | `0.75rem` | Metadata, labels |

### Spacing Scale (4px base unit)

**Core Scale (IMMUTABLE — anchors):**

| Token | Value | Purpose |
|-------|-------|---------|
| `--space-1` | `4px` | Base unit — LOCKED |
| `--space-2` | `8px` | Within element |
| `--space-3` | `12px` | Zone gaps |
| `--space-4` | `16px` | Standard separation |
| `--space-5` | `20px` | Generous padding |
| `--space-6` | `24px` | Component padding |
| `--space-8` | `32px` | Section breaks |
| `--space-10` | `40px` | Large section breaks |
| `--space-12` | `48px` | Page margins |
| `--space-16` | `64px` | Major sections (EXHALE) |
| `--space-20` | `80px` | Recovery breathing |
| `--space-24` | `96px` | Sparse ocean |

**Gestalt Semantic Aliases (AVAILABLE):**

| Token | Value | Purpose |
|-------|-------|---------|
| `--space-within` | `var(--space-2)` (8px) | Within single unit |
| `--space-between` | `var(--space-8)` (32px) | Between sections |
| `--space-chapter` | `var(--space-16)` (64px) | Major divisions |

**Grid System (IMMUTABLE):**

| Token | Value | Purpose |
|-------|-------|---------|
| `--grid-gap` | `24px` | Standard grid separation — LOCKED |

### Border Widths (IMMUTABLE — system)

| Token | Value | Purpose |
|-------|-------|---------|
| `--border-structural` | `4px` | Left accent borders (callouts) — LOCKED |
| `--border-accent` | `3px` | Secondary accent weight |
| `--border-micro` | `1px` | Subtle dividers, frames |
| `--border-left-width` | `4px` | Callout standard (alias) |

### Syntax Highlighting (AVAILABLE — code zones)

| Token | Value | Purpose |
|-------|-------|---------|
| `--syntax-keyword` | `#E83025` | Red — keywords |
| `--syntax-string` | `#6B9B7A` | Green — strings |
| `--syntax-comment` | `#666666` | Gray — comments |
| `--syntax-function` | `#4A7C9B` | Blue — functions |
| `--syntax-type` | `#C97065` | Coral — types |
| `--syntax-number` | `#D97706` | Amber — numbers |
| `--syntax-punctuation` | `#E0D5C5` | Border color — punctuation |

### Miscellaneous Tokens

| Token | Value | Purpose |
|-------|-------|---------|
| `--transition-standard` | `0.3s ease` | Standard timing |
| `--offset-x` | `4px` | Solid offset (EXT-CREATIVE-001) |
| `--offset-y` | `4px` | Solid offset |
| `--offset-color` | `#1A1A1A` | Solid offset color |

**Total tokens:** 65 (21 immutable, 14 mutable, 30 available)

---

## Layer 3: Mechanisms (Grammar — 18 Reusable CSS Techniques)

**Source:** `design-system/compositional-core/grammar/mechanism-catalog.md` (1,011 lines)

### What Is a Mechanism?

A mechanism is a CSS technique that works across MULTIPLE metaphors, verified by two binary tests:
- **Name Test:** Remove the metaphor name. Does the description still make sense? YES = mechanism.
- **Transfer Test:** Does the technique work with a DIFFERENT metaphor? YES = mechanism.

### 5 Property Categories

| Category | ID | Mechanisms | Governs |
|----------|----|-----------|---------|
| **Spatial** | S | #5, #6, #15 | Layout topology, density rhythm, grid structure |
| **Hierarchy** | H | #1, #4, #11 | Importance encoding, structural weight, scale |
| **Component** | C | #2, #9, #10, #17 | Internal component patterns, semantic signals |
| **Depth/Emphasis** | D | #3, #7, #16 | Layering, zone differentiation, focal points |
| **Structure/Navigation** | N | #8, #12, #13, #14, #18 | Page chrome, navigation, progressive disclosure |

**CRITICAL: Per-category selection protocol for Middle-tier+: Deploy AT LEAST ONE mechanism from each category.**

### All 18 Mechanisms

#### #1. Border-Weight Gradient Encoding [HIERARCHY]

**CSS Pattern:** `4px/3px/2px/1px` border-left progression
**Encodes:** Hierarchy / importance / confidence (abstract semantic domain)
**Metaphor Independence:** HIGH (confidence, consolidation, structural hierarchy)
**Complexity:** LOW (~20 CSS lines)

```css
.element--highest { border-left: 4px solid var(--color-text); }
.element--high    { border-left: 3px solid var(--color-text); }
.element--medium  { border-left: 2px solid var(--color-text); } /* ONLY semantic use */
.element--low     { border-left: 1px solid var(--color-border); }
```

#### #2. 2-Zone Component DNA [COMPONENT]

**CSS Pattern:** Sparse label zone + dense body zone + 4px left border
**Encodes:** Internal component organization
**Metaphor Independence:** VERY HIGH
**Complexity:** LOW (~50 CSS lines)

```css
.component { border-left: 4px solid var(--accent-color); padding: 20px 24px; margin: 24px 0; }
.component__label { font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: var(--space-within); }
.component__body { font-family: var(--font-body); font-size: var(--type-body); line-height: 1.7; }
```

#### #3. Solid Offset Depth (Box-Shadow Alternative) [DEPTH/EMPHASIS]

**CSS Pattern:** `::after` pseudo-element with `top: 4px; left: 4px; background: var(--color-text); z-index: -1;`
**Encodes:** Featured/elevated content WITHOUT violating box-shadow prohibition
**Metaphor Independence:** VERY HIGH
**Complexity:** LOW (~15 CSS lines)
**Critical constraint:** MUST use box-shadow: none. Solid offset is ONLY depth technique.

#### #4. Spacing Compression (Inverse Density-Confidence) [HIERARCHY]

**CSS Pattern:** Padding gradient from sparse (80px) to dense (16px)
**Encodes:** Certainty/importance inversely correlated with density
**Metaphor Independence:** HIGH
**Complexity:** LOW (~20 CSS lines)

```css
.zone--sparse   { padding: var(--space-20); } /* 80px — highest certainty */
.zone--moderate { padding: var(--space-8);  } /* 32px */
.zone--dense    { padding: var(--space-4);  } /* 16px — lowest certainty */
```

#### #5. Dense/Sparse Alternation (INHALE/EXHALE Rhythm) [SPATIAL]

**CSS Pattern:** Alternating section padding and margins
**Encodes:** Breathing rhythm across page
**Metaphor Independence:** VERY HIGH
**Complexity:** LOW (~15 CSS lines)

```css
.section--sparse { padding: var(--space-20) var(--space-6); margin-bottom: var(--space-chapter); }
.section--dense  { padding: var(--space-6); margin-bottom: var(--space-between); }
```

#### #6. Width Variation (Channel/Pool Pattern) [SPATIAL]

**CSS Pattern:** `max-width` and `margin-left` variation
**Encodes:** Visual rhythm through width changes
**Metaphor Independence:** HIGH
**Complexity:** LOW (~10 CSS lines)

```css
.narrow-channel { max-width: 70%; margin-left: 5%; }
.full-pool      { max-width: 100%; margin-left: 0; }
```

#### #7. Zone Background Differentiation [DEPTH/EMPHASIS]

**CSS Pattern:** 4-color zone token system for background shifts
**Encodes:** Section type / content density through background color
**Metaphor Independence:** VERY HIGH
**Complexity:** LOW (~25 CSS lines)

```css
.zone--sparse    { background: var(--color-zone-sparse);    } /* #FEF9F5 */
.zone--dense     { background: var(--color-zone-dense);     } /* #FFFFFF */
.zone--breathing { background: var(--color-zone-breathing); } /* #FAF5ED */
.zone--bedrock   { background: var(--color-zone-bedrock);   } /* #1A1A1A */
```

#### #8. Scroll Witness / Sticky TOC [STRUCTURE/NAVIGATION]

**CSS Pattern:** `position: sticky; top: var(--space-8);` with `.active` state
**Encodes:** Reading position / navigation
**Metaphor Independence:** HIGH
**Complexity:** MEDIUM (~35 CSS lines, requires JS)

#### #9. Confidence/Priority Encoding via Color [COMPONENT]

**CSS Pattern:** `border-left-color` mapped to semantic color tokens
**Encodes:** Content type / priority via accent color
**Metaphor Independence:** VERY HIGH
**Complexity:** LOW (~10 CSS lines)

```css
.element--critical { border-left-color: var(--color-primary); }   /* Red */
.element--warning  { border-left-color: var(--accent-coral); }    /* Coral */
.element--info     { border-left-color: var(--accent-blue); }     /* Blue */
.element--success  { border-left-color: var(--accent-green); }    /* Green */
.element--note     { border-left-color: var(--accent-purple); }   /* Purple */
.element--caution  { border-left-color: var(--accent-amber); }    /* Amber */
```

#### #10. Border-Left Semantic Signaling [COMPONENT]

**CSS Pattern:** Universal `border-left: 4px solid` for callout-like emphasis
**Encodes:** "This is emphasized content"
**Metaphor Independence:** VERY HIGH
**Complexity:** LOW (~5 CSS lines)

#### #11. Typographic Scale Jumping [HIERARCHY]

**CSS Pattern:** ~1.5x ratio between heading levels
**Encodes:** Hierarchy through size differentiation
**Metaphor Independence:** VERY HIGH
**Complexity:** LOW (~10 CSS lines)

```
--type-page: 2.5rem → --type-section: 1.625rem → --type-subsection: 1.375rem → --type-body: 1rem → --type-code: 0.875rem → --type-meta: 0.75rem
```

#### #12. Progressive Disclosure (Density Gradient Flow) [STRUCTURE/NAVIGATION]

**CSS Pattern:** 4-phase padding progression (intro → build → climax → resolve)
**Encodes:** Reader journey through information density
**Metaphor Independence:** HIGH
**Complexity:** MEDIUM (~30 CSS lines)

```css
.phase--intro   { padding: var(--space-20); } /* Sparse */
.phase--build   { padding: var(--space-8);  } /* Moderate */
.phase--climax  { padding: var(--space-4);  } /* Dense */
.phase--resolve { padding: var(--space-10); } /* Breathing */
```

#### #13. Dark Header + 3px Primary Border [STRUCTURE/NAVIGATION]

**CSS Pattern:** Dark background + 3px red border-bottom
**Encodes:** Page-level structure / editorial authority
**Metaphor Independence:** VERY HIGH
**Complexity:** LOW (~20 CSS lines)

```css
header { background: var(--color-text); color: var(--color-background); border-bottom: 3px solid var(--color-primary); }
.header-inner { max-width: 1100px; margin: 0 auto; padding: var(--space-16) var(--space-8); }
```

#### #14. Footer Mirror (Dark + 3px Border-Top) [STRUCTURE/NAVIGATION]

**CSS Pattern:** Mirrors header structure with border-top
**Encodes:** Page symmetry / structural bookends
**Metaphor Independence:** VERY HIGH
**Complexity:** LOW (~20 CSS lines)

```css
footer { background: var(--color-text); color: var(--color-background); border-top: 3px solid var(--color-primary); }
```

#### #15. Bento Grid (Variable Span Layout) [SPATIAL]

**CSS Pattern:** CSS Grid with span modifiers for importance encoding
**Encodes:** Content importance through cell size
**Metaphor Independence:** HIGH
**Complexity:** MEDIUM (~25 CSS lines)

```css
.bento-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
.bento-cell--large { grid-column: span 2; grid-row: span 2; }
.bento-cell--wide  { grid-column: span 2; }
.bento-cell--tall  { grid-row: span 2; }
```

#### #16. Drop Cap (Editorial Opening) [DEPTH/EMPHASIS]

**CSS Pattern:** `::first-letter` with display serif, 3.5em, float left
**Encodes:** Editorial authority / section opening
**Metaphor Independence:** MEDIUM (editorial/narrative only)
**Complexity:** LOW (~10 CSS lines)

```css
.drop-cap::first-letter { font-family: var(--font-display); font-size: 3.5em; float: left; line-height: 0.8; margin-right: var(--space-2); color: var(--color-primary); }
```

#### #17. Code Block (Dark Background + Syntax Highlighting) [COMPONENT]

**CSS Pattern:** Dark background, 3px border, monospace, 7 syntax tokens
**Encodes:** Technical content zone
**Metaphor Independence:** VERY HIGH
**Complexity:** LOW (~40 CSS lines)

```css
pre { background: var(--color-text); color: var(--color-background); border: 3px solid var(--color-border); padding: 24px 32px; font-family: var(--font-mono); font-size: var(--type-code); line-height: 1.5; }
```

#### #18. Data Table (Mono Headers + Border Categories) [STRUCTURE/NAVIGATION]

**CSS Pattern:** Mono uppercase headers, 3px header border, 1px row borders
**Encodes:** Tabular data with hierarchy
**Metaphor Independence:** VERY HIGH
**Complexity:** LOW (~20 CSS lines)

```css
.data-table th { font-family: var(--font-mono); font-size: var(--type-meta); font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; padding: 12px 16px; border-bottom: 3px solid var(--color-border); }
.data-table td { padding: 12px 16px; border-bottom: 1px solid var(--color-border); }
```

### Mechanism Summary by Metaphor Independence

- **VERY HIGH (13):** #2, #3, #5, #7, #9, #10, #11, #13, #14, #17, #18, #4 (partial), #1 (partial)
- **HIGH (4):** #1, #4, #8, #12, #15, #6
- **MEDIUM (1):** #16 (editorial/narrative only)

### Middle-Tier Selection Logic (vs Ceiling)

**Middle (content-structure mapping):**
- Builder looks at content: "This has code blocks → I need #17"
- Builder looks at content: "This has hierarchy → I need #1"
- Each mechanism serves a DIFFERENT content need INDEPENDENTLY
- Selection logic: content feature → mechanism capability (direct mapping)

**Ceiling (metaphor-driven multi-channel coherence):**
- Multiple mechanisms encode the SAME semantic TOGETHER
- e.g., border-weight + spacing + backgrounds ALL encode "depth"

### Scales (Zoom Levels — Fractal Coherence)

5 named scales:
1. **Navigation (bird's eye)** — Header, TOC, page-level nav
2. **Page (the scroll)** — Section sequence across full page
3. **Section (one screen)** — Components within a section
4. **Component (one element)** — Content inside a single component
5. **Character (inline)** — Text-level styling

**Middle-tier requires 2 scales:** Page + Component
**Ceiling requires 4 scales:** Navigation + Page + Section + Component
**Flagship requires 5 scales:** All including Character

---

## Layer 3 Extension: Compositional Rules (41 Rules)

**Source:** `design-system/compositional-core/grammar/compositional-rules.md` (527 lines)

### Zone Nesting Rules (4)

| Rule | Description |
|------|-------------|
| N1 | Callouts nest inside zone wrappers, NOT other callouts. Max nesting: 2 levels (zone → callout). |
| N2 | Code blocks can appear inside callouts AND independently. Peers to callouts. |
| N3 | Decision matrices are TERMINAL nodes — contain data rows, not other components. |
| N4 | Maximum component nesting depth = 2 (zone → component). Never level 3. |

### Spacing Rhythm Rules (4)

| Rule | Description |
|------|-------------|
| R1 | Dense sections followed by sparse sections at page scale. Every 2-4 dense zones MUST be followed by breathing room (48px+ or background shift). |
| R2 | Minimum consecutive dense sections = 1, maximum = 3. If 3 dense sections appear consecutively, next MUST be sparse. |
| R3 | Breathing-room triggers: after 2-3 dense components, between major sections, after viewport-height dense content, before/after fractal scale shifts. |
| R4 | Spacing inside:between ratio = 1:3 to 1:4. Inside components: 8-12px. Between components: 24-32px. Between sections: 48-64px. Between chapters: 64-96px. |

### Background Zone Rules (3)

| Rule | Description |
|------|-------------|
| Z1 | Background color changes signal content type shift. Sparse=#FEF9F5, Dense=#FFFFFF, Breathing=#FAF5ED. |
| Z2 | Maximum zone changes per viewport = 2-3. More than 3 = "strobe effect" anti-pattern. |
| Z3 | If heavy border (3-4px), use moderate spacing (24-32px). If light border (1px or none), use generous spacing (48-96px). |

### Component Density Rules (3)

| Rule | Description |
|------|-------------|
| D1 | Maximum components per viewport-height = 3-4. 5+ = density ceiling violation. |
| D2 | Density overwhelms at: 3+ callouts in viewport, code + 2 callouts + matrix in single viewport, no whitespace for 2+ viewport-heights. |
| D3 | Density variation: Intro (sparse) → Middle (dense) → Conclusion (sparse). Geological pattern may INVERT this. |

### 2-Zone DNA Rules (3)

| Rule | Description |
|------|-------------|
| DNA1 | Callout structure is ALWAYS 2-zone: Label (12px, uppercase, 600 weight, 0.1em letter-spacing) + Body (16px, 1.7 line-height). |
| DNA2 | Separator between zones is SPACING (margin-bottom 8-12px), NOT border. |
| DNA3 | 2-zone DNA applies to non-callout components (islands, scale demos, code blocks). Universal pattern. |

### Compound Grammar Rules (3)

| Rule | Description |
|------|-------------|
| C1 | Sequential NOT simultaneous axis patterns. One section = one pattern. (AD-F-024) |
| C2 | Transition grammar: SMOOTH (compatible flows, 32-48px), BRIDGE (incompatible, 64-96px + bg shift), BREATHING (major chapters, 96px+). |
| C3 | Maximum patterns per page = 5-6. More creates cognitive whiplash. |

### Fractal Application Rules (3)

| Rule | Description |
|------|-------------|
| F1 | Fractal self-similarity at 4 scales REQUIRED (Page, Section, Component, Character). Missing 1 scale = INVALID. |
| F2 | Each scale repeats the SAME rhythm. If page alternates dense/sparse, sections within must also alternate. |
| F3 | Fractal breaks create coherence loss. Correlates with lower audit scores. |

### Grid Grammar Rules (3)

| Rule | Description |
|------|-------------|
| G1 | Bento grid cell span encodes importance: 2x2 = anchor, 2x1 = secondary, 1x1 = tertiary. No uniform cell sizes. |
| G2 | Grid gaps = ocean whitespace. 24-32px (--space-6 to --space-8). |
| G3 | Maximum grid cells without breathing = 12. Beyond 12 = introduce breathing zones. |

### Responsive Collapse Rules (2)

| Rule | Description |
|------|-------------|
| RC1 | Grids collapse to 1-2 columns at 768px. Multi-column → single column. |
| RC2 | Padding compression at mobile: Desktop 48-64px → Tablet 32-48px → Mobile 24-32px. NEVER below 24px. |

### Anti-Pattern Rules (4)

| Rule | Description |
|------|-------------|
| AP1 | NO callout stacking. Max 2 callouts per viewport section. (DD-F-014 / R5-A1) |
| AP2 | NO uniform density. Minimum 2 density modes per page. |
| AP3 | NO fighting the pattern. Density emerges from structure, not imposed. |
| AP4 | NO simultaneous axis patterns. One section = one axis pattern. (AD-F-024) |

---

## Layer 3 Extension: Border System (3-Category Encoding)

**Source:** `design-system/compositional-core/grammar/border-system.md` (658 lines)

### 3-Category Border Width System

| Category | Width | Uses |
|----------|-------|------|
| **Cat 1 — Structural** | `4px` | Callout left borders, page-level containers, component emphasis, confidence=established |
| **Cat 2 — Accent** | `3px` | Header/footer structural dividers, code block borders, secondary emphasis, confidence=probable |
| **Cat 3 — Micro** | `1px` | Subtle container borders, data table separators, inline code, confidence=open |
| **EXCEPTION** | `2px` | ONLY for confidence encoding (speculative) in geological pattern |

### Border Color Semantics

| Color | Token | Usage |
|-------|-------|-------|
| Primary Red | `--color-primary: #E83025` | Headers/footers, high-importance containers, editorial emphasis |
| Accent Colors | 5 accent tokens | Callout type encoding (blue=info, green=tip, coral=warning, amber=essence, purple=challenge) |
| Border Gray | `--color-border: #E0D5C5` | Functional boundaries, table separators, code blocks |
| Dark Gray | `--color-text: #1A1A1A` | Confidence encoding (geological pattern only) |

### Border Combination Rules

- **Compound borders:** 1px all-around + 4px left override = "contained unit with directional emphasis"
- **border-bottom:** Used for headers. NEVER border-top on content (reserved for footer mirroring header).
- **NO border-right:** Zero instances across all explorations. All directional = border-left.
- **Border widths DO NOT change at breakpoints.** Structural, not responsive.

### Border Anti-Patterns

| ID | Anti-Pattern | Correct |
|----|-------------|---------|
| AP-B1 | 2px borders outside confidence encoding | Use 4px for callouts, 3px for secondary |
| AP-B2 | Mixed border widths on same element | 1px all sides, then override left to 4px |
| AP-B3 | Border for spacing (transparent borders) | Use spacing tokens instead |
| AP-B4 | Rounded borders | `border-radius: 0` ALWAYS |

### Border Width Decision Tree

```
START: Need a border?
├─ Callout or emphasized content? → 4px left + accent color
├─ Header/footer structural divider? → 3px bottom/top + primary red
├─ Code block or major container? → 3px all-around + gray
├─ Table row or subtle frame? → 1px + light gray
├─ Confidence-encoded content? → 4px/3px/2px/1px gradient + dark gray
└─ None of the above → DON'T USE BORDER, use spacing
```

---

## Layer 3 Extension: Mechanism Combinations (6 Proven Families)

**Source:** `design-system/compositional-core/grammar/mechanism-combinations.md` (334 lines)

### Combination Families

| # | Family | Mechanisms | Shared Semantic | Min Tier |
|---|--------|-----------|-----------------|----------|
| 1 | Hierarchy Triad | #1 + #4 + #11 | Importance/certainty/priority | Ceiling |
| 2 | Depth Triple | #1 + #4 + #7 | Layering/stratification | Ceiling |
| 3 | Density Triple | #5 + #4 + #7 | Content pacing (sparse/dense) | Ceiling |
| 4 | Zone Pair | #7 + #10 | Spatial sections/categories | **Middle** |
| 5 | Component Pair | #2 + #11 | Internal component organization | **Middle** |
| 6 | Emphasis Pair | #10 + #3 | Featured/highlighted elements | **Middle** |

**Middle-tier builders:** Use proven PAIRS only (2 mechanisms encoding same semantic). Recommended: Zone Pair, Component Pair, Emphasis Pair.

### Perceptual Alignment Principle

Mechanisms combine well when they encode the SAME semantic through DIFFERENT perceptual channels. They fail when channels contradict.

### 3 Anti-Combination Conflict Types

1. **Semantic Overload:** Two mechanisms encoding DIFFERENT semantics on SAME element (e.g., border-weight for both TYPE and PRIORITY)
2. **Perceptual Contradiction:** Two mechanisms encoding OPPOSITE values (e.g., sparse padding + dense background)
3. **Redundant Encoding:** Two mechanisms encoding SAME semantic with NO added value (e.g., both border-weight AND border-color for priority)

---

## Layer 4: Key Component Patterns (26 Families)

**Source:** `design-system/compositional-core/components/component-inventory.md` (879 lines)
**Note:** `merged-components.css` file not found at expected path; inventory extracted instead.

### Component Confidence Distribution

- **HIGH (8+ files):** 7 components (Callout, Code Blocks, Page Header, Skip Link, Focus-Visible, Selection Styling, Tables)
- **MEDIUM (4-7 files):** 13 components
- **LOW (2-3 files):** 6 components

### Universal Components (All Stages — 10 families)

1. **Callout Family** — 27/27 files (100%). Parametric: `--accent-color`, `--callout-border-color`, `--callout-bg-color`. 6 semantic variants (essence/tip/info/note/gotcha/challenge). Essence uses serif italic body.
2. **Code Blocks** — 25/27 files (92%). Dark background theme. 3px border (CD convention wins). Syntax highlighting tokens.
3. **Page Header** — 27/27 files (100%). ID line (mono, uppercase, red) + Title (serif italic, 32px) + Subtitle (sans, secondary) + 3px bottom border.
4. **Page Footer** — 18/27 files (66%). 3px top border (red). Provenance metadata. Meta font size.
5. **Tables** — 19/27 files (70%). 3px header border. Mono uppercase headers. 1px row borders.
6. **Skip Link** — 27/27 files (100%). Primary red bg. z-index 1000.
7. **Focus-Visible** — 27/27 files (100%). 3px outline (primary red). 2px offset.
8. **Selection Styling** — 22/27 files (81%). Primary red background.
9. **Stats Bar / Metadata Grid** — 17/27 files (63%). Two patterns: horizontal segments (DD/OD) and vertical stacks (CD).
10. **Section Indicator / Meta Line** — 18/27 files (66%). Mono uppercase meta text.

### CD-Specific Components (8 families)

11. **Reasoning Component** — 6/6 CD files. 3px border, amber icon, serif italic title.
12. **Core Abstraction** — 5/6 CD files. 3px red border. Essence + proof composite.
13. **Bento Grid** — 6/6 CD files. 2-column grid. 3px cell borders.
14. **Essence Pullquote** — 5/6 CD files. 4px purple border. Serif italic 26px. Max-width 55ch.
15. **Density Meter** — 6/6 CD files. 5-segment bar. Primary red fill.
16. **Version Badge** — 6/6 CD files. Inline-block mono. 1px border.
17. **Section Zones** — 6/6 CD files. 5 density modifiers. Padding: 64px → 48px → 32px → 24px.
18. **Breathing Zones** — 6/6 CD files. 3px top + bottom borders. Breathing background.

### DD/OD-Primary Components (5 families)

19. **File Tree** — 5/27 files. 4px blue border. Monospace pre-formatted.
20. **Decision Matrix** — 4/27 files. 4px red border. Grid layout.
21. **Density Indicator** — 3/27 files. 4px height bar. Width varies by density.
22. **Q&A Pair** — 2/27 files. Question 60% width, serif italic. Drop cap answer.
23. **Breadcrumb** — 3/27 files. Meta font. Secondary color links.

### Soul Compliance

100% across all 26 families: border-radius: 0, box-shadow: none, no drop-shadow, correct palette.

---

## Layer 5: Case Studies Index

**Source:** `design-system/compositional-core/case-studies/README.md` (542 lines)
**Note:** `_INDEX.md` does not exist. README.md serves as index.

### 9 Case Studies (+ 3 Visual Variants)

**DD Case Studies (Dense Technical):**
- **DD-003: Islands** — Bento grid isolation. Tension: independent modules. Mechanisms: grid islands, zone differentiation, 3px cell borders.
- **DD-004: Layers** — Atmospheric depth. Tension: natural layering. Mechanisms: border-weight gradient, zone backgrounds, fractal nesting.
- **DD-006: Fractal** — Self-similarity at 4 scales. Tension: content ABOUT self-similarity must DEMONSTRATE it. Mechanisms: fractal density rhythm, recursive 2-zone DNA, spacing compression.

**OD Case Studies (Conversational/Editorial):**
- **OD-001: Conversational** — Q&A dialogue. Tension: reader-driven exploration. Mechanisms: width variation, drop cap, dense answer zones.
- **OD-004: Confidence** — Geological stratification. Tension: variable epistemic status. Mechanisms: border-weight confidence encoding, zone progression.
- **OD-006: Creative** — Dual-lens toggle. Tension: teaching while demonstrating. Mechanisms: 2-zone DNA, serif italic, progressive disclosure.

**CD Case Studies (Combination Grammar):**
- **CD-001: Reasoning Inside Code** — Framed deliberation. Tension: code + thought process. Mechanisms: reasoning component, 3px borders, amber accents.
- **CD-005: Multi-Axis Transition** — Bridge section. Tension: simple → complex navigation. Mechanisms: essence pullquote, section zones, breathing space.
- **CD-006: Pilot Migration** — Meta-tutorial. Tension: demonstrate while explaining. Mechanisms: bento grid, core abstraction, density meter.

### Anti-Prescription Protocol

- Every case study MUST begin with "THIS IS NOT A TEMPLATE" warning
- CORRECT reading order: Phases 1-3 blind → Phase 3.5 commit → Phase 4 mechanisms → Phase 5 case studies
- Extract MECHANISMS (border-weight, compression), NOT implementations (4px bedrock, 80px surface)
- Jazz Real Book analogy: learn vocabulary, play YOUR solo

### What to Extract vs Not Extract

**From DD-006:** Extract fractal self-similarity principle, spacing compression, recursive 2-zone DNA. DO NOT extract "use 4 scales" or specific 80px→48px→32px→20px values.

**From OD-004:** Extract border-weight gradient, zone progression, vertical stacking. DO NOT extract "geological metaphor" or "6 strata".

**From CD-006:** Extract bento grid mechanism, density meter visualization, section zones. DO NOT extract "meta-tutorial structure" or "5-segment density meter".

---

## Layer 6: Semantic Rules and Usage Criteria

### Semantic Decision Rules (5 Gaps Filled)

**Source:** `design-system/compositional-core/guidelines/semantic-rules.md` (286 lines)

#### Gap 1: Info vs Note Callout Selection

| Callout | When to Use | Position |
|---------|-------------|----------|
| `callout--info` | Section-level orientation, setting expectations | Section start |
| `callout--note` | Inline warnings, clarifications, edge cases | Within content flow |
| `callout--context` | Page-level "you are here" (HYPOTHETICAL) | Top of page |

**Boundary rule:** Entire section → Info. Single paragraph/step → Note. Entire page → Context.

#### Gap 2: Inline vs Block Code

| Format | When to Use |
|--------|-------------|
| Inline `<code>` | ≤1 line, ≤50 chars, within prose, no syntax highlighting needed |
| `<pre><code>` block | ≥2 lines OR >50 chars, syntax highlighting, standalone reference |

#### Gap 3: Table Styling

**Default: Clean tables (no zebra-striping).** Zero instances of zebra-striping across all explorations. Zebra = HYPOTHETICAL.

#### Gap 4: Breathing-Room Zone Triggers

| Zone Type | Criteria | Spacing |
|-----------|----------|---------|
| Breathing-room | Between major sections, ≤3 sentences, transition function | ≥48px padding |
| Sparse | Low information density, high-certainty content | 40-80px |
| Dense | High information density, complex content | 16-32px |

#### Gap 5: Callout Semantic Differentiation

**5 semantic colors, 8 CSS class variants:**

| Type | Color | Hex | Font | When |
|------|-------|-----|------|------|
| Informational (Info/Note) | Blue | #4A90D9 | Body sans | Procedural context, clarifications |
| Helpful (Tip) | Green | #4A9D6B | Body sans | Suggestions, best practices |
| Wisdom (Essence) | Amber | #D97706 | Serif italic | Core principles, deep insights |
| Warning (Gotcha/Warning) | Red | #E83025 | Body sans | Common mistakes, pitfalls |
| Challenge (Challenge/Caution) | Purple | #7C3AED | Body sans | Advanced topics, exercises |

**Essence is special:** ONLY callout using serif font + italic. Reserved for wisdom/core principles.

### Semantic Value Framework (3-Question Test)

For EVERY varying CSS value:
1. **Q1: WHAT varies?** Identify property and range.
2. **Q2: WHY does it vary?** Must reference content structure, metaphor logic, or pattern logic. NOT "looked good".
3. **Q3: WHY THESE SPECIFIC VALUES?** If answer references content/metaphor/pattern → SEMANTIC. If "on the scale" or "looked good" → ARBITRARY.

**Middle-tier passing:** 80%+ varying values justified via pattern logic.

### Usage Criteria (4 Additional Discoveries)

**Source:** `design-system/compositional-core/guidelines/usage-criteria.md` (298 lines)

#### Component Spacing Criteria

| Condition | Spacing | Token Range |
|-----------|---------|-------------|
| Both adjacent components high-density | 64-80px | `--space-16` to `--space-20` |
| Major section transitions | 64px minimum | `--space-16` |
| Islands pattern | 80px around islands | `--space-20` |
| Moderate-density components | 24-32px | `--space-6` to `--space-8` |
| Continuous content flow | 24px | `--space-6` |
| Related/nested components | 8-16px | `--space-2` to `--space-4` |

#### Grid Column Selection

| Columns | When | Min Cell Width | Gap |
|---------|------|---------------|-----|
| 2-column | Comparison-based, detailed reading, bento pattern | ≥400px | `--space-6` (24px) |
| 3-column | Categorical (3 categories), scannable/summary, fractal | ≥280px | `--space-4` (16px) |
| 4-column | HYPOTHETICAL (no validated uniform 4-col) | — | — |

**Responsive:** ALL multi-column grids → single column at 768px.

#### Footer Content Criteria

**Belongs in footer:** Provenance metadata, navigation aids, version/status, attribution.
**Does NOT belong:** Primary content, navigation affecting understanding, interactive elements.
**Optional:** Footer omitted for simple pages, print-focused, embedded components.

#### Nesting vs Flattening

**NEST when:** Parent-child relationship, spacing override needed, visual containment is semantic.
**FLATTEN when:** Peer-level components, standard spacing applies, visual independence is semantic.
**Depth limit:** Maximum 3 levels (section → callout → code). Beyond 3 → restructure.

---

## Routing: Phase-Gated Protocol

**Source:** `design-system/compositional-core/CLAUDE.md` (680 lines)

### Track Classification (The Addition Test)

"Can existing components fulfill this WITHOUT transforming their meaning?"
- **YES → Track 1** (Assembly, 45-90 min)
- **NO → Track 2** (Composition, 3-5 hours)

### Track 2 Phase-Gated Access

| Phase | What's Permitted | What's PROHIBITED |
|-------|-----------------|-------------------|
| 0 | prohibitions.md + tokens.css | case-studies/, explorations, mechanism-catalog |
| 1-3 | Tension-composition skill BLIND | ALL library access |
| 3.5 | Metaphor lock-in (GATE) | Changing metaphor after library |
| 4 | mechanism-catalog.md (first 200 lines) + components.css | case-studies/ |
| 5 | case-studies/README.md + 2-3 similar studies (OPTIONAL) | All case studies (volume control) |
| 6 | Implementation with exact tokens | — |
| 7 | Perceptual audit | — |

### Anti-Gravity Rules (5+1 Essential Mechanisms)

| Rule | Name | Type | Effect |
|------|------|------|--------|
| R1 | Phase-Gated Library Access | Structural | Directory separation prevents pre-creative exposure |
| R2 | Mechanism/Metaphor Separation | Structural | Dual-file structure prevents conflation |
| R3 | Anti-Prescription Framing | Behavioral | "NOT A TEMPLATE" warning triggers derivation mode |
| R5 | Binary Sequential Phase Rules | Behavioral | MUST complete phases in exact sequence 0→1→2→3→3.5→4→5→6→7 |
| R6 | Divergence Mandate | Behavioral | Success = novel metaphor NOT in library |

### Metacognitive Checks (7 — Not 20)

1. Discovery language? → Rewrite
2. Template-matching? → Regenerate
3. Lens stated? → State it
4. Universal framing? → Document context
5. Violating guardrails? → Cost-benefit check
6. Metaphor matches library? → Divergence table
7. Copying recipes? → Extract mechanisms

**Rule:** If spending >5 min on meta-questions: STOP. CHOOSE. MOVE ON.

---

## Routing: Root Navigation and Soul Enforcement

**Source:** `design-system/CLAUDE.md` (715 lines)

### Always-Load Protocol (ALL Agents, ALL Tasks)

1. `compositional-core/identity/prohibitions.md` (353 lines)
2. `compositional-core/vocabulary/tokens.css` (174 lines)

**Total mandatory overhead: 527 lines (2 files)**
**Read fresh from file (not memory).** Values can change.

### Ingestion Protocol by Agent Type

| Agent Type | Additional Files |
|------------|-----------------|
| Builder (Track 2) | Phase-gated per protocol above |
| Builder (Track 1) | + RESEARCH-SYNTHESIS.md + R[relevant].md + mechanism-catalog.md |
| Auditor | + mechanism-catalog.md (full) + case-studies/*.md + component-inventory.md |
| Research | + lens-manifesto.md + construction-narrative.md + anti-gravity-compliance.md |
| Planner | + usage-criteria.md + gap-check.md |

### Supersession Matrix

| Layer | New Authority | Historical Context |
|-------|--------------|-------------------|
| Identity | compositional-core/identity/ | specification/tokens/ |
| Vocabulary | compositional-core/vocabulary/tokens.css | specification/tokens/*.md |
| Grammar | compositional-core/grammar/ | specification/patterns/*.md |
| Components | compositional-core/components/ | validated-explorations/ |
| Case Studies | compositional-core/case-studies/ | validated-explorations/ HTMLs |
| Guidelines | compositional-core/guidelines/ | pipeline/03-MIGRATION-PIPELINE.md |

### Common Anti-Patterns (Routing)

1. Going to specification/ when you need compositional-core/ for building
2. Reading pipeline/ when you should be building
3. Skipping research/ context before building explorations
4. Confusing validated-explorations/ with templates
5. Not reading prohibitions.md before building
6. Not distinguishing Track 1 from Track 2

---

## Grammar Extensions: Responsive Strategy

**Source:** `design-system/compositional-core/guidelines/responsive-strategy.md` (194 lines)

### Validated Breakpoints

**768px — ONLY validated breakpoint** (100% of responsive rules)

### Responsive Transformations at 768px

1. Multi-column grids → single column
2. Horizontal flex → vertical stack
3. Typography scale reduction: 32px → 26px titles (19% decrease)
4. Margin/padding compression (remove horizontal offsets)
5. Max-width overrides to 100%

### Responsive Principles

1. **Single breakpoint simplicity** — Only 768px
2. **Grid collapse over fluid scaling** — Binary transformation, not gradual
3. **Typography reduction is modest** — 19% max, preserves hierarchy
4. **Spacing vertical bias** — Vertical preserved, horizontal removed
5. **Max-width override** — Full-width at mobile

### NOT Validated (Hypothetical)

- 375px mobile breakpoint
- 1024px tablet breakpoint
- Fluid typography (clamp(), viewport units)
- Container queries
- Dark mode token overrides

---

## Grammar Extensions: Skill Enrichments

### Tension-Composition Additions (5 Additions)

**Source:** `design-system/compositional-core/skill-enrichments/tension-composition-additions.md` (473 lines)

1. **Anti-Assumption Header** — "You are CONSTRUCTING a composition, not DISCOVERING one." Prevents discovery bias.
2. **Phase 0D: Library Prohibition** — Binary MUST NOT during Phases 0-3. Violation invalidates entire derivation.
3. **Phase 3.5: Metaphor Commitment Gate** — Lock-in before library exposure. 5-question divergence verification. POINT OF NO RETURN.
4. **Phase 4 Revision: Mechanism Extraction** — Step 4.0 grants library access. Extract TECHNIQUES not implementations. "Sample 2-4 mechanisms most relevant to YOUR metaphor."
5. **Phase 5: Divergence Verification** — Case study access at FINAL timing. 5-dimension divergence comparison table. Binary pass/fail.

### Perceptual-Auditing Additions (3 Additions)

**Source:** `design-system/compositional-core/skill-enrichments/perceptual-auditing-additions.md` (189 lines)

1. **Meta-Audit Warning** — "DO NOT build pages TO PASS this audit." Guardrails are FLOORS, not TARGETS. Audit AFTER building, not before.
2. **Metaphor-Awareness Section** — Metaphors encode spatial biases as CSS values. DO NOT flag intentional metaphor-driven decisions as failures. DO flag if metaphor violates guardrail floors.
3. **Guardrails Priority Clarification** — Priority hierarchy: (1) Readability floors, (2) Breathing zones, (3) Content width, (4) Compression ratio, (5) Metaphor fidelity, (6) Aesthetic preference. "THE METAPHOR'S CSS EXPRESSION MUST BE MODIFIED, NOT THE FLOORS."

**Key principle:** "The metaphor shapes experience; the guardrails prevent it from breaking experience."

---

## Perceptual Guardrails (Quantitative Floors)

Extracted from CLAUDE.md files and skill enrichments:

| Guardrail | Value | What It Prevents |
|-----------|-------|-----------------|
| Container width minimum | 940px (65% of 1440px viewport) | Metaphor-driven width collapse |
| Label-to-heading gap minimum | 16px | Metaphor-driven smashing |
| Padding floor minimum | 32px on containers | Metaphor-driven dead zones |
| Compression ratio maximum | 40% (densest ÷ sparsest) | Cognitive fatigue |
| Callouts per viewport | Max 2 | Callout cacophony (DD-F-014) |
| Components per viewport | Max 3-4 | Density ceiling |
| Line height minimum | 1.5 | Readability |
| Characters per line (CPL) max | 80 | Readability |
| Content-to-viewport ratio | 65-80% at 1440px | Proportion + presence |

---

## Middle-Tier Specific Guidance

Consolidated from all sources for Middle-tier page building:

### Middle-Tier Profile

| Property | Value |
|----------|-------|
| Mechanisms deployed | 8-10 |
| Per-category minimums | Spatial: 1+, Temporal: 1+, Material: 1+, Behavioral: 1+, Relational: 1+ |
| Scales covered | 2 (Page + Component) |
| CSS lines | 350-500 |
| Build time | 70-100 min |
| Metaphor | NOT required (content-structure mapping) |
| Combinations | Use proven PAIRS only (Zone Pair, Component Pair, Emphasis Pair) |
| Semantic justification | 80%+ varying values justified via pattern logic |

### Middle-Tier Selection Logic

Builder looks at content features and maps directly to mechanisms:
- Content has code blocks → #17 (Code Block)
- Content has hierarchy → #1 (Border-Weight Gradient)
- Content has callouts → #2 (2-Zone DNA) + #9 (Color Encoding)
- Content has sections → #5 (Dense/Sparse Alternation) + #7 (Zone Backgrounds)
- Page needs chrome → #13 (Dark Header) + #14 (Footer Mirror)
- Content has tables → #18 (Data Table)

### What Middle-Tier Does NOT Require

- Metaphor derivation (Track 2 workflow)
- Phase-gated library access
- Divergence verification
- Multi-channel coherence (Ceiling+ only)
- 4+ scale fractal coverage (2 scales sufficient)

---

## Summary Statistics

| Category | Count |
|----------|-------|
| Prohibitions (Layer 1) | 22 (8 absolute, 12 conditional, 2 meta) |
| Tokens (Layer 2) | 65 (21 immutable, 14 mutable, 30 available) |
| Mechanisms (Layer 3) | 18 (across 5 categories) |
| Compositional Rules (Layer 3 ext) | 41 rules across 11 categories |
| Border System Categories (Layer 3 ext) | 3 primary + 1 exception |
| Mechanism Combinations (Layer 3 ext) | 6 families (3 Middle-tier-eligible pairs) |
| Component Families (Layer 4) | 26 families (34 CSS selectors) |
| Case Studies (Layer 5) | 9 text + 3 visual = 12 total |
| Semantic Rules (Layer 6) | 5 gap rules + 3-question test + 4 usage criteria |
| Perceptual Guardrails | 9 quantitative floors |
| Anti-Gravity Rules | 5 essential mechanisms |

**Total files read:** 16
**Total lines read:** ~6,000+

---

**END ONTOLOGY EXTRACTION**

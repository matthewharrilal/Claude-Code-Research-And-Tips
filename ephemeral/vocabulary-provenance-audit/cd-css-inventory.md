# CD Explorations CSS Inventory

Comprehensive extraction from all 6 CD HTML files in `design-system/validated-explorations/combination/`.

---

## 1. SHARED LOCKED LAYER (All 6 CD Files)

All CD explorations share a nearly identical `:root` token block and base styles. These are the "locked layer" values present across ALL explorations.

### 1.1 CSS Custom Properties (:root)

**Colors:**
| Token | Value | Notes |
|-------|-------|-------|
| `--color-primary` | `#E83025` | KortAI red |
| `--color-background` | `#FEF9F5` | Warm cream |
| `--color-text` | `#1A1A1A` | Near-black |
| `--color-text-secondary` | `#666666` | Gray |
| `--color-border` | `#E0D5C5` | Warm border |
| `--color-border-subtle` | `#F0EBE3` | Subtle border |
| `--color-zone-sparse` | `#FEF9F5` | Same as background |
| `--color-zone-dense` | `#FFFFFF` | White |
| `--color-zone-breathing` | `#FAF5ED` | Warm intermediate |

**Typography:**
| Token | Value |
|-------|-------|
| `--font-display` | `'Instrument Serif', Georgia, serif` |
| `--font-body` | `'Inter', system-ui, sans-serif` |
| `--font-mono` | `'JetBrains Mono', 'SF Mono', monospace` |

**Type Scale:**
| Token | Value | Notes |
|-------|-------|-------|
| `--type-page` | `2.5rem` | CD-006 overrides to `3rem` |
| `--type-section` | `1.625rem` | |
| `--type-subsection` | `1.375rem` | |
| `--type-body` | `1rem` | |
| `--type-code` | `0.875rem` | |
| `--type-meta` | `0.75rem` | |

**Geometry:**
| Token | Value |
|-------|-------|
| `--border-radius` | `0` |
| `--box-shadow` | `none` |

**Spacing Scale:**
| Token | Value |
|-------|-------|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-8` | `32px` |
| `--space-10` | `40px` |
| `--space-12` | `48px` |
| `--space-16` | `64px` |
| `--space-20` | `80px` |

**Gestalt Aliases:**
| Token | Value |
|-------|-------|
| `--space-within` | `var(--space-2)` = 8px |
| `--space-between` | `var(--space-8)` = 32px |
| `--space-chapter` | `var(--space-16)` = 64px |

**Callout Accents:**
| Token | Value |
|-------|-------|
| `--accent-blue` | `#4A90D9` |
| `--accent-green` | `#4A9D6B` |
| `--accent-coral` | `#C97065` |
| `--accent-amber` | `#D97706` |
| `--accent-purple` | `#7C3AED` |

**Solid Offset:**
| Token | Value |
|-------|-------|
| `--offset-x` | `4px` |
| `--offset-y` | `4px` |
| `--offset-color` | `#1A1A1A` |
| `--border-left-width` | `4px` |

**Syntax Highlighting:**
| Token | Value |
|-------|-------|
| `--syntax-keyword` | `#E83025` |
| `--syntax-string` | `#6B9B7A` |
| `--syntax-comment` | `#666666` |
| `--syntax-function` | `#4A7C9B` |
| `--syntax-type` | `#C97065` |
| `--syntax-number` | `#D97706` |
| `--syntax-punctuation` | `#E0D5C5` |

**Transition:**
| Token | Value | Notes |
|-------|-------|-------|
| `--transition-standard` | `0.3s ease` | Present in CD-002 through CD-006; absent in CD-001 |

**Axis Zone Tokens (CD-006 only):**
| Token | Value |
|-------|-------|
| `--axis-zone-primary` | `var(--color-zone-dense)` |
| `--axis-zone-secondary` | `var(--color-zone-sparse)` |
| `--axis-zone-focal` | `var(--color-background)` |
| `--axis-zone-transition` | `var(--color-zone-breathing)` |

### 1.2 Shared Base Styles

**Reset:**
- `* { box-sizing: border-box; margin: 0; padding: 0; }`
- `*:where(:not(input, button, select)) { border-radius: 0; }` -- Soul Piece #1 enforcement

**Body:**
- `font-family: var(--font-body)`
- `font-size: var(--type-body)` (1rem)
- `line-height: 1.7`
- `color: var(--color-text)`
- `background: var(--color-background)`
- `-webkit-font-smoothing: antialiased`
- `-moz-osx-font-smoothing: grayscale`

**Headings:**
- All: `font-family: var(--font-display); line-height: 1.2`
- h1: `font-size: var(--type-page)`
- h2: `font-size: var(--type-section)`
- h3: `font-size: var(--type-subsection); font-style: italic`

**Paragraph:** `max-width: 70ch; margin-bottom: var(--space-4); overflow-wrap: break-word`

**Links:** `color: var(--color-primary); text-decoration: none` / hover: `text-decoration: underline`

**Selection:** `background: var(--color-primary); color: var(--color-background)` -- branded selection

**Focus:** `outline: 3px solid var(--color-primary); outline-offset: 2px` -- WCAG

**Skip Link:** Absolute positioned, `top: -100%` / on focus `top: 0`, bg: primary, z-index: 1000

---

## 2. BORDER WEIGHT INVENTORY

### Three-Category Border System

| Category | Weight | Purpose | Examples |
|----------|--------|---------|----------|
| **Cat 1: Structural** | `3px solid` | Major section boundaries, component frames | header bottom, code blocks, component outer borders, section dividers, breathing zone borders, core-abstraction frames, table header bottom |
| **Cat 2: Separator** | `1px solid` | Internal divisions, row separators | table row borders, reasoning column dividers, task item separators, transition smooth lines |
| **Cat 3: Micro** | `1px solid` | Small UI elements | version-badge border, inline code border, density-meter segment, task checkbox, decision-matrix label bottom |
| **Cat 1: Accent** | `4px solid` | Left-border callouts, F-pattern spine, z-term emphasis | callout left border, f-heading left border, z-term left border, essence pullquote left border, qa-question left border, stratum borders (varies by confidence: 4px/3px/1px) |

### Specific Border Usage by File

**All 6 files:**
- `header { border-bottom: 3px solid var(--color-primary) }` -- Cat 1 structural
- `.callout { border-left: 4px solid }` -- Cat 1 accent (color varies by variant)
- `pre/code-block { border: 3px solid var(--color-border) }` -- Cat 1 structural
- `th { border-bottom: 3px solid var(--color-border) }` -- Cat 1 structural
- `td { border-bottom: 1px solid var(--color-border-subtle) }` -- Cat 2 separator
- `.page-footer { border-top: 3px solid var(--color-primary) }` -- Cat 1 structural
- `inline code { border: 1px solid var(--color-border) }` -- Cat 3 micro
- `*:focus-visible { outline: 3px solid var(--color-primary) }` -- focus (not technically border)

**CD-001 specific:**
- `.reasoning { border: 3px solid var(--color-border) }` -- full frame
- `.reasoning__header { border-bottom: 1px solid var(--color-border) }` -- internal separator
- `.reasoning__icon { border: 1px solid var(--accent-amber) }` -- micro accent
- `.core-abstraction { border: 3px solid var(--color-primary) }` -- PRIMARY color frame (unique)
- `.core-abstraction__essence { border-bottom: 3px solid var(--color-primary) }` -- PRIMARY color internal
- `.bento-cell { border: 3px solid var(--color-border) }` -- structural
- `.bento-cell__label { border-bottom: 1px solid var(--color-border-subtle) }` -- separator
- `.density-meter__segment { border: 1px solid var(--color-border) }` -- micro
- `.breathing-zone { border-top: 3px; border-bottom: 3px solid var(--color-border) }` -- structural pair
- `.section-indicator { border-bottom: 1px solid var(--color-border-subtle) }` -- separator
- `.essence-pullquote { border-left: 4px solid var(--accent-purple) }` -- accent

**CD-002 specific:**
- `.spiral-layer { border-left: varying }` -- 4px/3px/1px by confidence level
- `.decision-matrix { border: 3px solid var(--color-border) }` -- structural frame
- `.decision-matrix__header { border-bottom: 3px solid var(--color-border) }` -- structural
- `.task-component { border: 3px solid var(--color-border) }` -- structural frame
- `.task-component__header { border-bottom: 3px solid var(--color-border) }` -- structural
- `.task-component__item { border-bottom: 1px solid var(--color-border-subtle) }` -- separator
- `.task-component__item::before { border: 1px solid var(--color-border) }` -- micro (checkbox)
- `.z-hero-block { border: 3px solid var(--color-border) }` -- structural
- `.breathing-transition { border-top: 3px; border-bottom: 3px solid var(--color-border) }` -- pair
- `.reasoning { border: 3px solid var(--color-border) }` -- frame
- `.reasoning__header { border-bottom: 3px solid var(--color-border) }` -- structural
- `.reasoning__column:first-child { border-right: 1px solid var(--color-border) }` -- separator
- `.reasoning__summary { border-top: 3px solid var(--color-border) }` -- structural

**CD-003 specific:**
- `.hub-node { border: 3px solid var(--color-border) }` -- structural
- `.hub-node--active { border-color: var(--color-primary) }` -- emphasis
- `.spoke-item { border: 3px solid var(--color-border) }` -- structural
- `.bento-cell { border: 3px solid var(--color-border) }` -- structural
- `.file-tree { border: 3px solid var(--color-border) }` -- structural (dark bg)
- `.reasoning { border: 3px solid var(--color-border) }` -- structural
- `.core-abstraction { border: 3px solid var(--color-border) }` -- structural
- `.core-abstraction__principle { border-bottom: 3px solid var(--color-border) }` -- structural

**CD-004 specific:**
- `.spiral-layer { border-left: 4px/3px/1px }` -- confidence-graded
- `.choreo-hub { border: 3px solid var(--color-border) }` -- structural
- `.choreo-spoke { border: 3px solid var(--color-border) }` -- structural
- `.essence-voice { border-left: 4px solid var(--accent-purple) }` -- accent
- `.breathing-divider { border-top: 3px solid var(--color-border) }` -- structural
- `.tidal-dense { border: 3px solid var(--color-border) }` -- structural

**CD-005 specific:**
- `.z-term { border-left: 4px solid var(--color-primary) }` -- accent
- `.z-def { border: 3px solid var(--color-border) }` -- structural
- `.transition--smooth__line { border-top: 1px solid var(--color-border) }` -- separator
- `.transition--bridge { border-top: 3px; border-bottom: 3px solid var(--color-border) }` -- structural pair
- `.core-abstraction { border: 3px solid var(--color-border) }` -- structural
- `.core-abstraction__principle { border-bottom: 3px solid var(--color-border) }` -- structural
- `.reasoning { border: 3px solid var(--color-border) }` -- structural
- `.reasoning__header { border-bottom: 3px solid var(--color-border) }` -- structural
- `.reasoning__column:first-child { border-right: 1px solid var(--color-border) }` -- separator
- `.reasoning__summary { border-top: 3px solid var(--color-border) }` -- structural
- `.decision-matrix { border: 3px solid var(--color-border) }` -- structural
- `.decision-matrix__header { border-bottom: 3px solid var(--color-border) }` -- structural
- `.bento-item { border: 3px solid var(--color-border) }` -- structural
- `.file-tree { border: 3px solid var(--color-border) }` -- structural
- `.task-component { border: 3px solid var(--color-border) }` -- structural
- `.task-component__header { border-bottom: 3px solid var(--color-border) }` -- structural
- `.task-component__item { border-bottom: 1px solid var(--color-border-subtle) }` -- separator
- `.task-component__item::before { border: 1px solid var(--color-border) }` -- micro checkbox

**CD-006 specific:**
- `.toc { border: 3px solid var(--color-border) }` -- structural (navigation)
- `.callout--info { border-left-color: var(--accent-blue) }` -- accent
- `.callout--tip { border-left-color: var(--accent-green) }` -- accent
- `.callout--gotcha { border-left-color: var(--accent-coral) }` -- accent
- `.callout--essence { border-left-color: var(--accent-purple) }` -- accent
- `.callout--challenge { border-left-color: var(--accent-amber) }` -- accent
- `.code-block { border: 3px solid var(--color-border) }` -- structural
- `.file-tree { border: 3px solid var(--color-border) }` -- structural
- `.decision-matrix { border: 3px solid var(--color-border) }` -- structural
- `.decision-matrix-label { border-bottom: 1px solid var(--color-border) }` -- separator
- `.decision-matrix th { border-bottom: 3px solid var(--color-border) }` -- structural
- `.decision-matrix td { border-bottom: 1px solid var(--color-border) }` -- separator
- `.core-abstraction { border: 3px solid var(--color-border) }` -- structural
- `.core-abstraction-label { border-bottom: 1px solid var(--color-border) }` -- separator
- `.core-abstraction-principle { border-bottom: 1px solid var(--color-border) }` -- separator
- `.task-component { border: 3px solid var(--color-border) }` -- structural
- `.task-label { border-bottom: 1px solid var(--color-border) }` -- separator
- `.task-checkbox { border: 1px solid var(--color-border) }` -- micro
- `.reasoning { border: 3px solid var(--color-border) }` -- structural
- `.reasoning-label { border-bottom: 1px solid var(--color-border) }` -- separator
- `.reasoning-question { border-bottom: 1px solid var(--color-border) }` -- separator
- `.reasoning-column:first-child { border-right: 1px solid var(--color-border) }` -- separator
- `.reasoning-recommendation { border-top: 3px solid var(--accent-green) }` -- structural accent
- `.transition--smooth { border-top: 1px solid var(--color-border) }` -- separator
- `.transition--breathing { border-top: 3px solid var(--color-border) }` -- structural
- `.bento-item { border: 3px solid var(--color-border) }` -- structural
- `.choreo-hub { border: 3px solid var(--color-border) }` -- structural
- `.choreo-spoke { border: 3px solid var(--color-border) }` -- structural
- `.stratum--established { border-left: 4px solid var(--color-text) }` -- accent
- `.stratum--probable { border-left: 3px solid var(--color-text-secondary) }` -- accent
- `.stratum--speculative { border-left: 1px solid var(--color-border) }` -- accent
- `.qa-question { border-left: 4px solid var(--color-primary) }` -- accent
- `code:not(...) { border: 1px solid var(--color-border) }` -- micro

---

## 3. COLOR VALUES (Beyond Tokens)

These are hardcoded color values that appear OUTSIDE the :root token block, used as backgrounds for callouts and specialized zones in CD-006:

| Hardcoded Value | Where Used | Purpose |
|-----------------|-----------|---------|
| `#F5F9FE` | `.callout--info` background (CD-006) | Blue-tinted info bg |
| `#F2F9F4` | `.callout--tip` bg, `.decision-matrix .recommended` bg (CD-006), `.reasoning-recommendation` bg | Green-tinted bg |
| `#FEF6F5` | `.callout--gotcha` bg (CD-006) | Coral-tinted bg |
| `#FFFBF2` | `.callout--challenge` bg (CD-006) | Amber-tinted bg |
| `#F8F5FE` | `.core-abstraction-label` bg (CD-006) | Purple-tinted bg |
| `#f5f5f5` | Print styles: `pre` bg, `code-block` bg | Print fallback |
| `#ccc` | Print styles: border-color | Print fallback |
| `white` / `black` | Print styles | Print overrides |

**Observation:** CD-001 through CD-005 use `var(--color-zone-sparse)` for callout backgrounds uniformly. CD-006 introduces per-accent-color tinted backgrounds (#F5F9FE, #F2F9F4, etc.) as a crown jewel divergence.

---

## 4. SPACING VALUES USED

### Actual spacing usage across all CD files:

| Scale Value | Token | Usage Contexts |
|-------------|-------|----------------|
| 2px | raw | version-badge padding (2px 8px), inline code padding (2px 6px) |
| 4px | `--space-1` | density-meter gap, version-badge padding, margin-top, gap |
| 6px | raw | inline code padding |
| 8px | `--space-2` | callout label margin-bottom, meta-line margin-bottom, spacing within |
| 12px | `--space-3` | table cell padding, label margin-bottom, gap |
| 16px | `--space-4` | body paragraph margin, heading margin-bottom, file-tree indentation L1, table padding, skip-link padding, button padding |
| 20px | `--space-5` | callout internal padding |
| 24px | `--space-6` | callout padding, component internal padding, section margins, code block padding, bento cell padding, table-of-contents gap |
| 32px | `--space-8` | header padding, section heading margin, content block margin, component outer margins, large padding, reasoning columns, core-abstraction padding, z-def padding, bento grid gap |
| 40px | `--space-10` | (available but rarely used directly) |
| 48px | `--space-12` | page container top padding, header padding on mobile, section zone padding, breathing zone, transition smooth gap |
| 64px | `--space-16` | header inner padding, chapter spacing, section margin-bottom, page-container padding, transition bridge margin |
| 80px | `--space-20` | transition breathing margin/padding (CD-006) |

---

## 5. LAYOUT TECHNIQUES

### Grid Layouts

**Z-Pattern (CD-001, CD-005, CD-006):**
- CD-001: `.bento-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6) }`
- CD-001: `.bento-cell--primary { grid-column: 1 / -1 }` -- full-width cell
- CD-005: `.z-sweep { display: grid; grid-template-areas: "z-term z-def"; grid-template-columns: 1fr 1.618fr; gap: var(--space-8) }` -- golden ratio
- CD-005: `.z-sweep--reverse { grid-template-areas: "z-def z-term"; grid-template-columns: 1.618fr 1fr }` -- reversed golden ratio
- CD-006: `.z-hero { display: grid; grid-template-columns: 1.618fr 1fr; grid-template-rows: auto auto; gap: var(--space-8) }` -- golden ratio with explicit row/column placement
- CD-006: `.z-primary { grid-column: 1; grid-row: 1 }`, `.z-secondary { grid-column: 2; grid-row: 1 }`, `.z-diagonal { grid-column: 1; grid-row: 2 }`, `.z-terminal { grid-column: 2; grid-row: 2 }`

**F-Pattern (CD-001, CD-005, CD-006):**
- Implemented via left-anchor border pattern, not grid
- CD-001: `.section-zone h2 { border-left: 4px solid var(--color-primary); padding-left: var(--space-4) }`
- CD-005: `.f-heading { padding-left: var(--space-6); border-left: 4px solid var(--color-primary) }`
- CD-005: `.f-content-block { padding-left: var(--space-6) }`
- CD-006: `.f-movement { margin-bottom: var(--space-8) }`

**Bento Grid (CD-001, CD-003, CD-005, CD-006):**
- CD-001: `grid-template-columns: 1fr 1fr` (2-col)
- CD-003: `grid-template-columns: repeat(3, 1fr)` (3-col) with `.bento-cell--wide { grid-column: span 2 }`
- CD-005: `grid-template-columns: repeat(4, 1fr)` (4-col) with `--large: span 2 / span 2`, `--wide: span 2`
- CD-006: `grid-template-columns: repeat(4, 1fr)` (4-col) with `--large: span 2 / span 2`, `--wide: span 2`

**Spiral Layout (CD-002, CD-004, CD-006):**
- CD-002: `.spiral-layer { border-left: varying width }` -- confidence-graded left borders (4px/3px/1px)
- CD-004: `.spiral-strata { display: flex; flex-direction: column; gap: var(--space-8) }` with `.spiral-stratum { border-left: varying }`
- CD-006: `.spiral-strata { display: flex; flex-direction: column; gap: var(--space-8) }` with `.stratum { border-left: 4px/3px/1px }`

**Choreography Hub-Spoke (CD-003, CD-004, CD-006):**
- CD-003: `.hub-node { border: 3px solid }` (centered hub) + `.spoke-item { border: 3px solid }` (satellite)
- CD-004: `.choreo-hub { text-align: center; padding: var(--space-8); border: 3px solid }` + `.choreo-spokes { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6) }`
- CD-006: `.choreo-hub { text-align: center; padding: var(--space-8); background: var(--axis-zone-focal); border: 3px solid }` + `.choreo-spokes { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6) }`

**Reasoning Component Columns (CD-002, CD-005, CD-006):**
- `.reasoning__columns / .reasoning-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 0 }`
- First column has `border-right: 1px solid` separator

### Flexbox Layouts

- `.meta-line { display: flex; align-items: center; gap: var(--space-4) }` -- header meta
- `.density-meter { display: flex; gap: var(--space-1) }` (CD-001)
- `.page-footer__inner { display: flex; justify-content: space-between; align-items: center }` -- footer
- `.toc-list li a { display: flex; align-items: baseline; gap: var(--space-2) }` (CD-006)
- `.task-list li { display: flex; align-items: flex-start; gap: var(--space-2) }` (CD-006)
- `.spiral-strata { display: flex; flex-direction: column; gap: var(--space-8) }` (CD-004, CD-006)

### Max-Width Constraints

- `.page-container / .header-inner / .page-footer__inner { max-width: 1100px; margin: 0 auto }` -- ALL files
- `p { max-width: 70ch }` -- prose measure
- `.core-abstraction__quote { max-width: 55ch }` (CD-001)
- `.essence-pullquote p { max-width: 55ch }` (CD-001)
- `.header .subtitle { max-width: 70ch }` -- subtitle

---

## 6. PSEUDO-ELEMENT TECHNIQUES

| Selector | Content | Purpose | File(s) |
|----------|---------|---------|---------|
| `.task-component__item::before` | `content: ''` | Checkbox square (14x14px, 1px border) | CD-002, CD-005 |
| `.reasoning-column li::before` | `content: "--"` | List bullet replacement with em-dash | CD-006 |
| `::selection` | n/a | Branded text selection (red bg, cream text) | ALL |
| `*:focus-visible` | n/a | Focus ring (3px primary outline) | ALL |
| `.drop-cap::first-letter` | n/a | Drop capital (3.5em, float left, Instrument Serif, primary color) | CD-006 |

---

## 7. COMPONENT INVENTORY BY FILE

### CD-001: Reasoning Inside Code
**Pattern:** CRESCENDO density + NARRATIVE ARC + F-PATTERN + BENTO

| Class | Purpose | CSS Technique |
|-------|---------|---------------|
| `.section-zone` | Full-width density zones | Background color shifts per zone |
| `.section-zone--opening` | Sparse zone (background + generous padding) | `bg: zone-sparse; padding: 64px` |
| `.section-zone--rising` | Medium density | `bg: zone-dense; padding: 48px` |
| `.section-zone--building` | High density (compressed) | `bg: zone-dense; padding: 32px` |
| `.section-zone--peak` | Maximum density | `bg: zone-dense; padding: 24px top` |
| `.section-zone--resolution` | Return to sparse | `bg: zone-sparse; padding: 64px` |
| `.breathing-zone` | Between-section breathing space | `bg: zone-breathing; border-top/bottom: 3px; padding: 48px` |
| `.breathing-zone--tight` | Compressed breathing | `padding: 24px` |
| `.breathing-zone--release` | Extended breathing | `padding: 64px` |
| `.content-block` | Content grouping | `margin-bottom: var(--space-between)` |
| `.reasoning` | Deliberation container | 3px border frame, sparse bg, 32px padding |
| `.reasoning__header` | Header with icon | flex row, 1px bottom border |
| `.reasoning__icon` | Badge/label icon | mono font, 1px amber border, uppercase |
| `.reasoning__title` | Question text | display font, italic |
| `.core-abstraction` | Essence + Code composite | 3px PRIMARY border, two zones |
| `.core-abstraction__essence` | Philosophy zone | sparse bg, serif italic, 3px primary bottom border |
| `.core-abstraction__label` | "CORE ABSTRACTION" label | mono, uppercase, purple accent |
| `.core-abstraction__quote` | Philosophical statement | display font italic, 1.625rem, max-width 55ch |
| `.core-abstraction__proof` | Code proof zone | Nested pre, no extra borders |
| `.density-meter` | Visual density indicator | flex bar segments, filled = primary color |
| `.section-indicator` | Section label | mono, uppercase, 1px bottom border |
| `.bento-grid` | 2-column island grid | `grid: 1fr 1fr` |
| `.bento-cell` | Grid cell | 3px border, dense bg, 24px padding |
| `.bento-cell--primary` | Full-width cell | `grid-column: 1 / -1` |
| `.bento-cell__label` | Cell header label | mono, uppercase, 1px bottom border |
| `.essence-pullquote` | Bridge element | 4px purple left border, serif italic, 1.625rem |
| `.callout` | Advisory/info box | 4px left border, 5 color variants |
| `.callout--note/tip/gotcha/caution/essence` | Callout variants | Border color + label color per accent |

### CD-002: Task Containing Decision
**Pattern:** PULSE density + TASK-BASED + Z-PATTERN + SPIRAL

| Class | Purpose | CSS Technique |
|-------|---------|---------------|
| `.spiral-layer` | Confidence stratum | Left border weight varies: 4px=confirmed, 3px=probable, 1px=speculative |
| `.spiral-layer--confirmed` | Established layer | `border-left: 4px solid var(--color-text)` |
| `.spiral-layer--probable` | Probable layer | `border-left: 3px solid var(--color-text-secondary)` |
| `.spiral-layer--speculative` | Speculative layer | `border-left: 1px solid var(--color-border)` |
| `.z-hero-block` | Z-pattern overview | 3px structural border, sparse bg, 32px padding |
| `.decision-matrix` | Decision table container | 3px frame, overflow-x: auto |
| `.decision-matrix__header` | Matrix header zone | sparse bg, 3px bottom border |
| `.decision-matrix .row-highlight` | Recommended row | breathing bg |
| `.decision-matrix .cell-best` | Best value | green, font-weight 600 |
| `.decision-matrix .cell-ok` | OK value | secondary text color |
| `.decision-matrix .cell-weak` | Weak value | coral color |
| `.task-component` | Task checklist | 3px frame |
| `.task-component__header` | Task header | sparse bg, 3px bottom border |
| `.task-component__item::before` | Checkbox pseudo-element | 14x14px empty square, absolute positioned |
| `.reasoning` | Two-column comparison | 3px frame, grid 1fr 1fr |
| `.reasoning__columns` | Two-column grid | `grid-template-columns: 1fr 1fr` |
| `.reasoning__column:first-child` | Left column separator | `border-right: 1px solid` |
| `.reasoning__summary` | Conclusion zone | breathing bg, 3px green top border |
| `.breathing-transition` | Major breathing zone | breathing bg, 3px top+bottom borders |

### CD-003: File Tree with Callouts
**Pattern:** ISLANDS density + SPATIAL + BENTO GRID + CHOREOGRAPHY

| Class | Purpose | CSS Technique |
|-------|---------|---------------|
| `.hub-node` | Choreography hub | 3px border, centered |
| `.hub-node--active` | Active hub | `border-color: var(--color-primary)` |
| `.spoke-item` | Hub-spoke satellite | 3px border |
| `.bento-cell` | Bento grid cell | 3px border, dense bg |
| `.bento-cell--wide` | Wide cell | `grid-column: span 2` |
| `.file-tree` | File tree component | Dark bg (#1A1A1A), mono font, 3px border |
| `.file-tree__item--l1/l2/l3` | Indentation levels | padding-left: 16px/32px/48px |
| `.file-tree__dir` | Directory name | function syntax color (#4A7C9B) |
| `.file-tree__file` | File name | background color (#FEF9F5) |
| `.file-tree__comment` | Annotation | comment syntax color (#666666) |
| `.reasoning` | Reasoning component | 3px frame |
| `.core-abstraction` | Composite component | 3px frame, principle + code zones |

### CD-004: Essence as Background
**Pattern:** TIDAL density + CONFIDENCE-BASED + SPIRAL + CHOREOGRAPHY

| Class | Purpose | CSS Technique |
|-------|---------|---------------|
| `.spiral-strata` | Spiral container | `flex-direction: column; gap: 32px` |
| `.spiral-stratum` | Confidence layer | Left border varies by confidence |
| `.stratum--established` | Established | `border-left: 4px solid var(--color-text)` |
| `.stratum--probable` | Probable | `border-left: 3px solid var(--color-text-secondary)` |
| `.stratum--speculative` | Speculative | `border-left: 1px solid var(--color-border)` |
| `.essence-voice` | Ambient essence callout | 4px purple left border, serif italic |
| `.choreo-hub` | Hub element | centered, 3px border, 32px padding |
| `.choreo-spokes` | Spoke grid | `grid: repeat(3, 1fr); gap: 24px` |
| `.choreo-spoke` | Individual spoke | 3px border, 24px padding |
| `.tidal-dense` | Dense tidal section | 3px border, dense bg |
| `.tidal-sparse` | Sparse tidal section | no border, sparse bg |
| `.breathing-divider` | Between-section break | `border-top: 3px solid; padding: 48px 0` |

### CD-005: Multi-Axis Transition
**Pattern:** WAVE density + SPATIAL + Z-PATTERN + F-PATTERN + BENTO (3 sequential axes)

| Class | Purpose | CSS Technique |
|-------|---------|---------------|
| `.section-heading` | Shared section header | display font, 32px margin-bottom, 3px bottom border |
| `.z-sweep` | Z-pattern row | grid: `1fr 1.618fr` (golden ratio), named areas |
| `.z-sweep--reverse` | Reversed Z row | grid: `1.618fr 1fr` |
| `.z-term` | Z-sweep term cell | sparse bg, 4px primary left border |
| `.z-term__label` | Term label | mono meta, primary color, uppercase |
| `.z-term__text` | Term content | display font, subsection size |
| `.z-def` | Z-sweep definition cell | dense bg, 3px border frame |
| `.transition--smooth` | Z-to-F transition | `padding: 48px 0; text-align: center` |
| `.transition--smooth__line` | Divider line | `border-top: 1px solid` |
| `.transition--smooth__heading` | Transition heading | display font, section size |
| `.f-heading` | F-pattern left-spine heading | `border-left: 4px primary; padding-left: 24px; italic` |
| `.f-content-block` | F-pattern content | `padding-left: 24px` |
| `.transition--bridge` | F-to-Bento breathing zone | breathing bg, 3px top+bottom borders, `64px 32px` padding |
| `.bento-grid` | 4-column grid | `repeat(4, 1fr); gap: 32px` |
| `.bento-item` | Grid cell | dense bg, 3px border |
| `.bento-item--large` | 2x2 cell | `grid-column: span 2; grid-row: span 2` |
| `.bento-item--wide` | 2x1 cell | `grid-column: span 2` |
| `.core-abstraction` | Principle + code composite | 3px frame, principle zone + code zone |
| `.reasoning` | Two-column deliberation | 3px frame, grid columns, summary zone |
| `.decision-matrix` | Table with emphasis | 3px frame, header zone, cell coloring |
| `.file-tree` | File tree (dark theme) | dark bg, mono, colored syntax items |
| `.task-component` | Checklist | 3px frame, checkbox pseudo-elements |

### CD-006: Pilot Migration (Crown Jewel)
**Pattern:** ALL 5 axes (Z, F, Bento, Spiral, Choreography) + ALL 11 components + fractal at 5 scales

| Class | Purpose | CSS Technique |
|-------|---------|---------------|
| `.toc` | Table of contents | breathing bg, 3px border, flex list |
| `.toc-list li a` | TOC entry | flex, baseline-aligned, hover transition |
| `.toc-number` | Section number | mono, meta size, 24px min-width |
| `.toc-density` | Density indicator | mono, meta, auto margin-left |
| `.section` | Section wrapper | 64px bottom margin |
| `.section-header` | Section header area | 32px bottom margin |
| `.section-meta` | Section metadata | mono, meta, uppercase, 0.1em tracking |
| `.drop-cap::first-letter` | Drop capital | `font-size: 3.5em; float: left; line-height: 0.8; color: primary` |
| `.callout--info/tip/gotcha/essence/challenge` | 5 callout variants | Each with unique tinted background + accent border-left |
| `.code-block` | Dark code block | dark bg, 3px border, mono, with `.code-label` |
| `.code-label` | Code filename | mono meta, secondary color |
| `.file-tree` | File tree (light theme) | breathing bg, 3px border |
| `.file-tree-label` | Tree header | body font, uppercase |
| `.file-tree-item--l1/l2/l3` | Indentation | 16px/32px/48px |
| `.file-tree-icon` | File icon | secondary color, 8px right margin |
| `.decision-matrix` | Table container | 3px frame |
| `.decision-matrix-label` | Matrix header | breathing bg, 1px bottom border |
| `.decision-matrix .recommended` | Recommended row | green-tinted bg, bold |
| `.core-abstraction` | Principle + Proof composite | 3px frame, 3 zones (label/principle/proof) |
| `.core-abstraction-label` | "CORE ABSTRACTION" | purple text, purple-tinted bg |
| `.core-abstraction-principle` | Philosophical statement | display serif italic, 1.25rem |
| `.core-abstraction-proof` | Code proof | dark bg, mono, 0.875rem |
| `.task-component` | Task checklist | 3px frame |
| `.task-label` | Task header | breathing bg, 1px bottom border |
| `.task-list li` | Task item | flex, 8px gap |
| `.task-checkbox` | Checkbox square | 16x16px, 1px border, no pseudo-element |
| `.reasoning` | Two-column deliberation | 3px frame, 5 zones |
| `.reasoning-label` | Header label | breathing bg, 1px bottom border |
| `.reasoning-question` | Question text | serif italic, subsection size |
| `.reasoning-columns` | Two-column grid | `1fr 1fr`, first-child border-right |
| `.reasoning-column li::before` | List bullet | `content: "--"`, absolute positioned |
| `.reasoning-recommendation` | Conclusion | green-tinted bg, 3px green top border |
| `.transition--smooth` | Axis transition (light) | `margin: 48px 0; border-top: 1px; padding-top: 48px` |
| `.transition--bridge` | Axis transition (medium) | `margin: 64px 0; breathing bg; padding: 32px` |
| `.transition--breathing` | Axis transition (heavy) | `margin: 80px 0; border-top: 3px; padding-top: 80px` |
| `.z-hero` | Z-pattern layout | `grid: 1.618fr 1fr`, explicit row/col placement |
| `.z-primary/secondary/diagonal/terminal` | Z-grid positions | Explicit `grid-column` + `grid-row` |
| `.qa-block` | Q&A pair | 32px bottom margin |
| `.qa-question` | Question | serif italic, primary color, 4px primary left border |
| `.qa-answer` | Answer | 32px left padding |
| `.f-movement` | F-pattern section | 32px bottom margin |
| `.bento-grid` | 4-column grid | `repeat(4, 1fr); gap: 24px` |
| `.bento-item` | Grid cell | axis-zone-primary bg, 3px border |
| `.bento-item--wide/large` | Span variants | `span 2` / `span 2 + span 2` |
| `.spiral-strata` | Spiral container | flex column, 32px gap |
| `.stratum` | Confidence layer | padding, relative position |
| `.stratum--established/probable/speculative` | Confidence borders | 4px/3px/1px left border |
| `.stratum-label` | Stratum label | mono, meta, uppercase |
| `.choreo-hub` | Hub element | centered, focal bg, 3px border |
| `.choreo-spokes` | Spoke grid | `repeat(3, 1fr); gap: 24px` |
| `.choreo-spoke` | Individual spoke | primary bg, 3px border |
| `.page-footer` | Footer | dark bg, 3px primary top border |
| `.page-footer__inner` | Footer layout | flex, space-between |
| `.page-footer__id` | Page ID | mono, meta, uppercase |
| `.page-footer__rule` | Accent bar | 48px wide, 3px tall, primary color |

---

## 8. RESPONSIVE BREAKPOINTS

### 960px (CD-003, CD-005, CD-006)
- Bento grid collapses to single column
- Choreography spokes collapse to single column (CD-006)

### 768px (ALL files)
- All multi-column grids collapse to single column
- Header padding reduces (typically 48px horizontal to 16px)
- Page container padding reduces
- Z-pattern grids become vertical
- Reasoning two-column becomes one-column (border-right removed, border-bottom added)
- Footer flexbox becomes column direction
- Title font size reduces (e.g., 2.5rem to ~1.75rem)
- Breathing zones reduce padding

### 480px (CD-006 only)
- Header title shrinks further to 1.625rem
- h2 shrinks to 1.375rem
- Code block padding and font-size reduce
- Callout padding reduces

---

## 9. ACCESSIBILITY FEATURES

| Feature | Implementation | Files |
|---------|---------------|-------|
| Skip link | `<a class="skip-link">` hidden until focused | ALL |
| `.sr-only` | Screen-reader-only text | CD-001, CD-005 |
| Focus ring | `*:focus-visible { outline: 3px solid primary }` | ALL |
| Reduced motion | `@media (prefers-reduced-motion)` zeroes animation/transition | ALL |
| Print styles | `@media print` overrides bg/color | ALL |
| `overflow-x: auto` on tables/code | Horizontal scroll for overflow | ALL |
| Semantic HTML | `<header>`, `<main>`, `<footer>`, `<section>`, `<nav>` | ALL |

---

## 10. NAMING CONVENTION EVOLUTION

CD-001 through CD-005 use BEM-like double-underscore notation:
- `.callout__label`, `.callout__body`
- `.reasoning__header`, `.reasoning__title`
- `.core-abstraction__essence`, `.core-abstraction__label`
- `.task-component__header`, `.task-component__item`
- `.page-footer__inner`, `.page-footer__id`

CD-006 shifts to simpler hyphenated naming for some components:
- `.callout-label`, `.callout-body` (no double underscore)
- `.reasoning-label`, `.reasoning-question`, `.reasoning-columns`
- `.core-abstraction-label`, `.core-abstraction-principle`
- `.task-label`, `.task-list`, `.task-checkbox`
- `.file-tree-label`, `.file-tree-item`

But retains BEM for footer: `.page-footer__inner`, `.page-footer__id`, `.page-footer__rule`

**Inconsistency note:** CD-006 uses both naming patterns within the same file.

---

## 11. UNIQUE TECHNIQUES BY FILE

### CD-001 Only
- **Density meter component** (`.density-meter`) -- visual progress bar showing CRESCENDO density level
- **Section zone system** (`.section-zone--opening/rising/building/peak/resolution`) -- 5-phase density progression via background + padding modulation
- **Breathing zone variants** (`--tight`, `--release`) -- variable breathing intensity
- **Core abstraction with PRIMARY border** (3px `#E83025` instead of `#E0D5C5`)
- **Essence pullquote** -- separate from callout system, uses serif italic at section scale

### CD-002 Only
- **Decision matrix cell coloring** (`.cell-best`, `.cell-ok`, `.cell-weak`) -- semantic cell-level color
- **Task checkbox via ::before** pseudo-element (14x14px)
- **Z-hero block** as non-grid bordered container (simple block, not grid-based Z)

### CD-003 Only
- **Hub-spoke layout** (`.hub-node` + `.spoke-item`) without grid -- manual positioning
- **Hub active state** (`.hub-node--active { border-color: primary }`)
- **Dark-background file tree** (bg: `#1A1A1A`, text: `#FEF9F5`)

### CD-004 Only
- **Tidal density** (`.tidal-dense`, `.tidal-sparse`) -- alternating bordered/unbordered sections
- **Essence voice** as ambient background element -- 4px purple left border, serif italic, distributed throughout page
- **Breathing divider** (`.breathing-divider`) -- simple `border-top: 3px` separator

### CD-005 Only
- **Golden ratio grid columns** (`1fr 1.618fr` and `1.618fr 1fr`) -- mathematical proportion
- **Named grid areas** (`grid-template-areas: "z-term z-def"`)
- **Explicit transition components** (`.transition--smooth`, `.transition--bridge`) as standalone visual elements with headings
- **Three sequential axis patterns** on one page (Z -> smooth -> F -> bridge -> Bento)

### CD-006 Only
- **Drop caps** (`.drop-cap::first-letter { font-size: 3.5em; float: left }`)
- **Table of contents** (`.toc`) with flexbox list, numbered entries, density indicators
- **Per-accent tinted callout backgrounds** (#F5F9FE, #F2F9F4, #FEF6F5, #FFFBF2, #F8F5FE)
- **Essence callout with enlarged body text** (`font-size: 1.125rem`)
- **Code label** (`.code-label`) above code blocks showing filename
- **File tree with icons** (`.file-tree-icon`) -- light theme (breathing bg instead of dark)
- **QA block** (`.qa-block`, `.qa-question`, `.qa-answer`) -- Q&A pattern with primary left border
- **All 5 axis patterns** on one page
- **3 transition types** (smooth = 48px gap + 1px border, bridge = 64px + breathing bg, breathing = 80px + 3px border)
- **Axis zone tokens** in :root (abstracting zone colors from axis patterns)
- **480px responsive breakpoint** (smallest text/padding reduction)
- **Reasoning recommendation zone** with green-tinted bg + 3px green top border
- **Reasoning list bullets** via `::before { content: "--" }` pseudo-element
- **version-badge** with `font-size: 0.625rem` (10px, smallest type used)
- **`--type-page: 3rem`** override (all others use 2.5rem)

---

## 12. CROSS-CUTTING OBSERVATIONS

1. **Border system is perfectly consistent:** 3px structural, 1px separator, 4px accent left border. Zero violations of the three-category system across all 6 files.

2. **Component reuse is high but implementations diverge:** The same components (reasoning, callout, core-abstraction, task, decision-matrix, file-tree) appear across multiple files but with slightly different CSS class naming, different internal structures, and different sub-component patterns. This is NOT copy-paste -- each exploration adapts the component to its specific combination pattern.

3. **CD-006 is a superset:** It contains implementations of ALL component types and ALL axis patterns found across CD-001 through CD-005.

4. **Density is expressed through SPACING, not visual noise:** CRESCENDO (CD-001) compresses padding from 64px to 24px. TIDAL (CD-004) alternates bordered/unbordered. WAVE (CD-005) uses different spacings per section. ISLANDS (CD-003) uses bento grid gaps. The mechanism is always spacing modulation, never decoration.

5. **The golden ratio (1.618) appears in CD-005 and CD-006** for Z-pattern grid proportions. Not present in other files.

6. **CD-006 introduces 5 hardcoded background colors** not present in any other CD file (#F5F9FE, #F2F9F4, #FEF6F5, #FFFBF2, #F8F5FE). These are per-accent tinted backgrounds for callout variants.

7. **Confidence encoding via border weight** is a distinct technique: 4px (established/confirmed), 3px (probable), 1px (speculative). Used in spiral layouts in CD-002, CD-004, and CD-006.

8. **Font usage is strict:** Instrument Serif = display headings + essence/core italic. Inter = body + labels. JetBrains Mono = code + meta labels. The only place serif appears in body text is inside `.callout--essence .callout__body` and `.core-abstraction` principle zones.

9. **No transitions/animations in the combination layer itself.** `--transition-standard: 0.3s ease` is declared but only used for TOC link hover in CD-006. The `prefers-reduced-motion` media query is prophylactic.

10. **All 6 files use the exact same footer pattern:** dark bg (#1A1A1A), 3px primary top border, flex inner with page ID (mono) and 48px red accent bar.

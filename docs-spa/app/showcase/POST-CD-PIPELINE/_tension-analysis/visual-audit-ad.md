# Visual Audit: AD-003 through AD-006

**Auditor:** ad-auditor
**Date:** 2026-02-12
**Method:** Playwright snapshot + source code analysis of all 4 files
**Files audited:**
- AD-003-bento-grid.html (1,897 lines)
- AD-004-spiral.html (1,484 lines)
- AD-005-choreography.html (1,847 lines)
- AD-006-compound.html (2,064+ lines)

---

## 1. Shared Locked Layer (Identical Across All 4 Files)

All four AD explorations share an **identical locked layer** (lines ~70-484 in each file). This establishes the baseline component set inherited from OD convention.

### 1.1 Root Token System
| Token | Value | Notes |
|-------|-------|-------|
| `--color-primary` | `#E83025` | Brand red |
| `--color-background` | `#FEF9F5` | Warm cream page bg |
| `--color-text` | `#1A1A1A` | Near-black text |
| `--color-text-secondary` | `#666666` | Gray secondary |
| `--color-border` | `#E0D5C5` | Tan border |
| `--color-border-subtle` | `#F0EBE3` | Light border |
| `--color-zone-sparse` | `#FEF9F5` | Same as background |
| `--color-zone-dense` | `#FFFFFF` | White dense zone |
| `--color-zone-breathing` | `#FAF5ED` | Warm breathing zone |
| `--font-display` | `'Instrument Serif', Georgia, serif` | Display/heading font |
| `--font-body` | `'Inter', system-ui, sans-serif` | Body text font |
| `--font-mono` | `'JetBrains Mono', 'SF Mono', monospace` | Code font |
| `--type-page` | `2.5rem` | H1 size |
| `--type-section` | `1.625rem` | H2 size |
| `--type-subsection` | `1.375rem` | H3 size |
| `--type-body` | `1rem` | Body text |
| `--type-code` | `0.875rem` | Code blocks |
| `--type-meta` | `0.75rem` | Meta labels |
| `--border-radius` | `0` | Soul Piece #1 |
| `--box-shadow` | `none` | Soul Piece #4 |
| `--transition-standard` | `0.3s ease` | AD convention Section 15 |

### 1.2 Locked Layer Components (Shared by All 4)

#### A. Header (Full-bleed dark)
- **Background:** `var(--color-text)` (#1A1A1A)
- **Text color:** `var(--color-background)` (#FEF9F5)
- **Border-bottom:** `3px solid var(--color-primary)` (Cat 1 structural)
- **Inner max-width:** 1100px, centered
- **Padding:** `var(--space-16) var(--space-8)` (64px 32px)
- **Contains:** `.meta-line` (flex, uppercase, 0.15em spacing), `.version-badge` (mono, 1px border, Cat 3), `h1` (Instrument Serif, 2.5rem), `.subtitle` (Inter, 1rem, secondary color)

#### B. Code Blocks (`pre`)
- **Background:** `var(--color-text)` (#1A1A1A) -- dark theme
- **Text:** `var(--color-background)` (#FEF9F5)
- **Border:** `3px solid var(--color-border)` (Cat 1 structural)
- **Padding:** `var(--space-6) var(--space-8)` (24px 32px)
- **Font:** `var(--font-mono)`, `var(--type-code)` (0.875rem)
- **Line-height:** 1.5
- **Syntax classes:** `.kw` (keyword, red), `.st` (string, green), `.cm` (comment, gray), `.fn` (function, blue), `.ty` (type, coral), `.nu` (number, amber), `.pu` (punctuation, tan)

#### C. Inline Code (`code:not(pre code)`)
- **Font:** `var(--font-mono)`, `0.9em`
- **Background:** `var(--color-border-subtle)` (#F0EBE3)
- **Padding:** `2px 6px`
- **Border:** `1px solid var(--color-border)` (Cat 3 micro)

#### D. Callout System (5 variants)
- **Structure:** 2-zone (label + body), `border-left: 4px solid`
- **Padding:** `var(--space-6) var(--space-5)` (24px 20px)
- **Margin:** `var(--space-6) 0` (24px symmetric)
- **Background:** `var(--color-zone-sparse)`
- **Label:** Inter, 0.75rem, 600 weight, 0.1em spacing, uppercase
- **Body:** Inter, 1rem, line-height 1.7
- **Variants:**
  - `--note`: blue (`#4A90D9`)
  - `--tip`: green (`#4A9D6B`)
  - `--gotcha`: coral (`#C97065`)
  - `--caution`: amber (`#D97706`)
  - `--essence`: purple (`#7C3AED`), body in Instrument Serif italic

#### E. Tables
- **Border-collapse:** collapse
- **Display:** block (allows overflow-x: auto)
- **th:** Inter, 0.75rem, 600, uppercase, `border-bottom: 3px solid var(--color-border)` (Cat 1)
- **td:** Inter, 1rem, `border-bottom: 1px solid var(--color-border-subtle)` (Cat 2)
- **No vertical borders** (anti-pattern: prison bars)

#### F. Skip Link
- **Position:** absolute, hidden until focus
- **Background:** `var(--color-primary)` (#E83025)
- **Font:** Inter, 14px

#### G. Soul Enforcement
- `*:where(:not(input, button, select)) { border-radius: 0; }` -- global sharp edges
- `::selection { background: var(--color-primary); color: var(--color-background); }` -- branded selection
- `*:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }` -- WCAG focus
- `@media (prefers-reduced-motion: reduce)` -- prophylactic motion disable

#### H. Page Container
- **Max-width:** 1100px
- **Margin:** 0 auto
- **Padding:** `var(--space-12) var(--space-6)` (48px 24px)

---

## 2. AD-003: Bento Grid -- Axis-Specific Components

### Unique Components

#### 2.1 Bento Grid Layout (`.bento-grid`)
- **Display:** grid
- **Columns:** `repeat(3, minmax(0, 1fr))` -- 3-column base
- **Gap:** `var(--space-8)` (32px)
- **Size variants:** `.bento-item--large` (span 2 cols, span 2 rows), `.bento-item--wide` (span 2 cols), `.bento-item--tall` (span 2 rows)
- **Responsive:** 2-col at 1024px, 1-col at 768px

#### 2.2 Bento Cell (`.bento-cell`)
- **Background:** `var(--color-zone-dense)` (#FFFFFF)
- **Border:** `3px solid var(--color-border)` (Cat 1)
- **Padding:** `var(--space-6)` (24px)
- **Display:** flex, column, gap 16px
- **Title:** Instrument Serif, 1.375rem, italic
- **Body:** Inter, 1rem, line-height 1.7

#### 2.3 Complexity Badge (`.complexity-badge`)
- **Font:** JetBrains Mono, 0.75rem, 500 weight, uppercase
- **Padding:** `4px 8px`
- **Border:** `1px solid` (Cat 3)
- **Variants:** `--beginner` (green), `--intermediate` (blue), `--advanced` (amber)
- **Evolution note:** Similar to OD version badges but with complexity semantics

#### 2.4 Collapsible Details (`.bento-details`)
- **Summary:** Inter, 1rem, 600, red (#E83025), cursor pointer
- **Marker:** Custom triangle `\25B6`, rotates 90deg on open
- **Separator:** `border-top: 1px solid var(--color-border-subtle)` (Cat 2)
- **Content padding-top:** 16px

#### 2.5 Step List (`.step-list`)
- **Counter-based:** CSS counter, flex column, gap 24px
- **Number badge:** Mono, 0.75rem, white on dark (#1A1A1A), 24x24px square, centered

#### 2.6 Split Layout (`.split-layout`)
- **Display:** grid, `1fr 1fr`, gap 24px
- **Collapses:** to 1fr at 900px

#### 2.7 Category Group (`.category-group`)
- **Margin-bottom:** 64px between categories
- **Label:** Inter, 0.75rem, 600, uppercase, `border-bottom: 1px solid` (Cat 2)

#### 2.8 Bookend Components
- **Background:** `var(--color-zone-breathing)` (#FAF5ED)
- **Border:** `3px solid var(--color-border)` (Cat 1)
- **Padding:** 32px
- **Front variant:** `border-left: 4px solid var(--color-primary)` (red accent)
- **Back variant:** `border-left: 4px solid var(--accent-green)` (completion signal)

#### 2.9 Verify List
- **List-style:** none, flex column, gap 12px
- **Check mark:** Mono, green, `[checkmark]`

#### 2.10 Breathing Zone
- **Height:** `var(--space-12)` (48px)
- **Background:** `var(--color-zone-breathing)` (#FAF5ED)

#### 2.11 Cell Callout (inline, within cells)
- **Border-left:** `4px solid` (accent color)
- **Padding:** `12px 16px`
- **Background:** `var(--color-zone-sparse)`
- **Variants:** `--tip` (green), `--gotcha` (coral), `--caution` (amber)

#### 2.12 Page End Marker
- **Text-align:** center
- **Font:** Mono, 0.75rem, 0.3em letter-spacing
- **Pseudo-element:** 64px x 3px bar in `var(--color-border)`, centered

#### 2.13 Duration Badge
- **Font:** Mono, 0.75rem, secondary color

#### 2.14 RAR Block
- **Background:** `var(--color-zone-breathing)`
- **Border:** `3px solid var(--color-border)` (Cat 1)
- **Padding:** 32px

---

## 3. AD-004: Spiral -- Axis-Specific Components

### Unique Components

#### 3.1 Spiral Map (header nav, `.spiral-map`)
- **Display:** grid, 4 columns
- **Gap:** 4px
- **Max-width:** 320px
- **Cells:** dark background (#1A1A1A), mono 0.75rem, centered
- **Border-bottom gradient:** Established=4px primary, Probable=3px border, Speculative=3px subtle, Open=1px subtle

#### 3.2 Stratum Sections (`.stratum`)
- **Border-left-style:** solid, color varies by confidence
- **Established:** 4px primary, padding 24/24/32/32, bg white (dense)
- **Probable:** 3px border, padding 32/24/32/40, bg sparse (#FEF9F5)
- **Speculative:** 3px subtle, padding 32/24/32/48, bg breathing (#FAF5ED)
- **Open:** 1px subtle, padding 32/24/32/64, bg background (#FEF9F5)
- **Evolution note:** Border-weight gradient IS geological encoding -- unique to AD-004

#### 3.3 Stratum Transition (`.stratum-transition`)
- **Height:** 48px (OD-F-007 minimum)
- **Border-top:** `3px solid var(--color-border)` (Cat 1)
- **Background:** `var(--color-zone-breathing)`
- **Label:** Mono, 0.75rem, uppercase, secondary color

#### 3.4 Confidence Badge (`.confidence-badge`)
- **Font:** Mono, 0.75rem, 500, uppercase
- **Padding:** `4px 12px`
- **Variants:** Established=3px primary border, Probable=3px border, Speculative=1px border, Open=1px subtle
- **Evolution note:** Distinct from AD-003 complexity badges -- same visual DNA but different semantics

#### 3.5 Pull Quote (`.pull-quote`)
- **Font:** Instrument Serif, italic, 1.625rem
- **Border-left:** `4px solid var(--color-primary)`
- **Padding:** `24px 32px`
- **Margin:** `32px 0`
- **Background:** `var(--color-zone-sparse)`
- **Attribution:** Inter, normal, 0.75rem, uppercase, secondary color

#### 3.6 Metadata Panel (sidebar, `.metadata-panel`)
- **Background:** `var(--color-zone-sparse)`
- **Border:** `3px solid var(--color-border)` (Cat 1)
- **Padding:** 24px
- **Title:** Inter, 0.75rem, 600, uppercase, `border-bottom: 3px solid` (Cat 1)
- **Items:** flex row, key (mono, secondary) + value (mono, 500), `border-bottom: 1px solid` (Cat 2)

#### 3.7 Content Grid (within Established stratum)
- **Columns:** `1fr 0.618fr` -- golden ratio
- **Named areas:** `"main sidebar"`
- **Gap:** 24px (tighter at core)

#### 3.8 Comparison Grid (`.comparison-grid`)
- **Columns:** `1fr 1fr`
- **Gap:** 32px
- **Panels:** `3px solid var(--color-border)` (Cat 1)
- **Established panel:** white bg, `border-left: 4px solid primary`
- **Speculative panel:** breathing bg, `border-left: 4px solid amber`

#### 3.9 Open Questions List
- **Custom `?` marker:** Instrument Serif italic, 1.625rem, secondary color
- **Items:** `border-bottom: 1px solid` (Cat 2), padding 16px, hanging indent

#### 3.10 Page Footer (`.page-footer`)
- **Border-top:** `3px solid var(--color-border)` (Cat 1)
- **Padding:** `32px 0`
- **Label:** Mono, 0.75rem, uppercase

#### 3.11 RAR Block (dl/dt/dd format)
- Uses definition list instead of AD-003's heading-based format
- Same visual weight: 3px border, sparse bg, 32px padding

---

## 4. AD-005: Choreography -- Axis-Specific Components

### Unique Components

#### 4.1 Hub Grid (`.hub-grid`)
- **Display:** grid, `repeat(4, 1fr)`
- **Named areas:** 2-row layout with featured tile spanning 2 cols
- **Gap:** `var(--space-6)` (24px)
- **Responsive:** 2-col at 1440px, 1-col at 768px

#### 4.2 Territory Tile (`.territory-tile`)
- **Background:** `var(--axis-zone-primary)` (#FFFFFF)
- **Border:** `3px solid var(--color-border)` (Cat 1)
- **Padding:** 24px
- **Hover:** `border-color: var(--color-primary)` (flat, no transform)
- **Transition:** `border-color 0.3s ease`
- **Featured variant:** `border-left: 4px solid primary`, with solid offset pseudo-element
- **Evolution note:** Most interactive component in AD -- hover state introduces flat interactivity

#### 4.3 Solid Offset Pseudo-element (`.territory-tile--featured::after`)
- **Position:** absolute, offset 4px right/down
- **Border:** `3px solid #1A1A1A` (Cat 1)
- **Background:** `var(--color-background)` (fully opaque)
- **Z-index:** -1
- **Evolution note:** NEW component type -- editorial "dropped shadow" using flat offset, not box-shadow

#### 4.4 Diagonal Transition (`.axis-transition`)
- **Clip-path:** `polygon(0 0, 100% 0, 100% 85%, 0 100%)` -- descending diagonal
- **Ascending variant:** `polygon(0 15%, 100% 0, 100% 100%, 0 100%)`
- **Background:** `var(--axis-zone-transition)` (#FAF5ED)
- **Padding:** `48px 24px`
- **Mobile (768px):** clip-path removed, becomes `border-top: 3px solid`
- **Evolution note:** GENUINELY NEW -- no DD or OD equivalent

#### 4.5 Progress Bar (`.progress-bar`)
- **Display:** flex, gap 4px
- **Segments:** 8px tall, flex proportional
- **Active:** `var(--color-primary)` (#E83025)
- **Inactive:** `var(--color-border-subtle)` (#F0EBE3)
- **border-radius: 0, box-shadow: none** enforced
- **Evolution note:** GENUINELY NEW -- no DD or OD equivalent

#### 4.6 Breadcrumb (`.breadcrumb`)
- **Font:** Inter, 0.75rem, 500
- **Separator:** red triangle `&#9656;`
- **Current:** text color, 600 weight
- **Touch targets:** `4px 8px` padding on items

#### 4.7 Spoke Content (`.spoke-content`)
- **Background:** white (#FFFFFF)
- **Padding:** `48px 24px`
- **Inner max-width:** 1100px

#### 4.8 Breathing Zone (full-width variant)
- **Background:** `var(--axis-zone-transition)` (#FAF5ED)
- **Padding:** `48px 24px`
- **Borders:** `3px solid var(--color-border)` top AND bottom (Cat 1)
- **Different from AD-003:** AD-003 breathing zone is height-only spacer; AD-005 has content

#### 4.9 Axis Interstitial (`.axis-interstitial`)
- **Background:** breathing zone
- **Padding:** `32px 24px`
- **Borders:** `3px solid` top + bottom (Cat 1)
- **Text-align:** center
- **Label:** Inter, 0.75rem, 600, uppercase

#### 4.10 Page Closing (`.page-closing`)
- **Border-top:** `3px solid var(--color-border)` (Cat 1)
- **Padding:** `48px 24px`
- **Rule:** 80px x 3px in `var(--color-primary)`, centered
- **Mark:** Instrument Serif italic, 1rem, secondary color

#### 4.11 Scroll Reveal System (CSS + JS)
- CSS: `.reveal-on-scroll` starts visible (progressive enhancement)
- JS-enabled: starts at opacity 0, translateY(20px), transitions to visible
- Uses IntersectionObserver, fires once, respects prefers-reduced-motion

#### 4.12 Code Explanation Block (`.code-explanation`)
- **Display:** flex column, gap 24px
- **Purpose:** alternating code + prose blocks

#### 4.13 Spoke Section (`.spoke-section`)
- **Margin-bottom:** `var(--space-between)` (32px)

#### 4.14 RAR Section (hidden)
- `display: none; aria-hidden: true` -- hidden from view
- Contains minimal research application record

---

## 5. AD-006: Compound -- Axis-Specific Components

### Unique Components

#### 5.1 Scroll Witness (`.scroll-witness`)
- **Position:** fixed, top 0, full width
- **Height:** 3px
- **Background track:** `var(--color-border-subtle)`
- **Fill:** `var(--color-primary)`, width controlled by JS
- **Z-index:** 999
- **Evolution note:** GENUINELY NEW -- persistent scroll progress indicator

#### 5.2 Axis Indicator (`.axis-indicator`)
- **Position:** sticky, top 3px (below scroll witness)
- **Background:** `var(--color-text)` (#1A1A1A)
- **Font:** Mono, 0.75rem, uppercase
- **Display:** flex, centered, gap 32px
- **Border-bottom:** `1px solid` (Cat 2)
- **Labels:** secondary color; Values: background color (#FEF9F5)
- **Evolution note:** GENUINELY NEW -- persistent metadata bar

#### 5.3 Drop Cap (`.drop-cap::first-letter`)
- **Font:** Instrument Serif, 3.5em
- **Float:** left
- **Color:** `var(--color-primary)` (#E83025)
- **Line-height:** 0.8
- **Disabled inside grid cells** (FIX-013)
- **Evolution note:** GENUINELY NEW -- editorial drop cap feature

#### 5.4 Z-Layout (`.z-layout`)
- **Display:** grid, 2x2 named areas
- **Gap:** 32px
- **Dense quadrants:** (top-left, bottom-right) white bg, `3px solid` border
- **Sparse quadrants:** (top-right, bottom-left) no border, just padding

#### 5.5 Pattern Echo Grid (`.pattern-echo-grid`)
- **Display:** grid, `repeat(3, 80px) / repeat(2, 80px)`
- **Gap:** 8px
- **Each cell:** `1px solid` border (Cat 3), CSS-only miniature pattern visualization
- **6 patterns:** Z, F, Bento, Spiral, Choreo, Compound (self-reference)
- **Uses `::before`/`::after`** pseudo-elements for pattern sketches
- **Evolution note:** GENUINELY NEW -- CSS-only abstract visualizations

#### 5.6 F-Layout (`.f-layout`)
- **Display:** flex column, gap 32px
- **Scanlines:** `border-bottom: 1px solid` (Cat 2), padding-bottom 32px

#### 5.7 Triple Column (`.triple-column`)
- **Display:** grid, 3 named columns
- **Gap:** 16px
- **Cells:** `3px solid var(--color-border)` (Cat 1)
- **Heading:** Mono, 0.75rem, 600, uppercase, `border-bottom: 3px solid primary`

#### 5.8 Bento Grid (AD-006 variant, `.bento-grid`)
- **Columns:** `repeat(4, 1fr)` with named areas
- **Featured item:** primary border, solid offset pseudo-element
- **Gap:** 32px (FIX-020)
- **Items:** `3px solid border`, 24px padding, white bg

#### 5.9 Spiral Layout (AD-006 variant, `.spiral-layout`)
- **Display:** grid, 3-column with named areas
- **Columns:** `1fr 1fr 1.618fr` (golden ratio)
- **Gap:** 32px
- **Strata use accent-colored left borders:** blue=validated, green=established, amber=exploratory, purple=speculative

#### 5.10 Choreography Layout (AD-006 variant, `.choreo-layout`)
- **Display:** grid, 3-column with named areas
- **Columns:** `1fr 1.618fr 1fr` (golden ratio hub)
- **Gap:** 32px
- **Hub:** primary border, solid offset, white bg
- **Spokes:** regular border, sparse bg

#### 5.11 Decision Matrix (`.decision-matrix`)
- **Best-fit cells:** `border-left: 4px solid primary`, 600 weight
- **Acceptable cells:** `border-left: 4px solid green`
- **Avoid cells:** `border-left: 4px solid border`, secondary color

#### 5.12 Transition Grammar Matrix
- **Smooth:** green text
- **Bridge:** amber text
- **Breathing:** coral text

#### 5.13 Discovery Log (`.discovery-log`)
- **Border:** `3px solid primary` (Cat 1, accent)
- **Background:** white
- **Title:** Mono, 0.75rem, 600, primary color, `border-bottom: 3px solid primary`
- **Items:** `border-bottom: 1px solid` (Cat 2)
- **ID label:** Mono, 0.75rem, 600, primary color

#### 5.14 Fractal Annotation (`.fractal-annotation`)
- **Display:** grid, `3rem 1fr`
- **Marker:** Mono, 0.75rem, vertical writing-mode, `border-right: 1px solid` (Cat 2)
- **Evolution note:** GENUINELY NEW -- vertical margin annotations

#### 5.15 Collapsible Details (AD-006 variant)
- **Border:** `3px solid var(--color-border)` (Cat 1)
- **Summary:** 600 weight, breathing bg, `border-bottom: 1px solid` (closed) / `3px solid` (open)
- **Content padding:** 24px

#### 5.16 Zone Background Classes
- `.zone-sparse`, `.zone-dense`, `.zone-breathing` -- utility classes for section backgrounds

#### 5.17 Section Meta/Header
- `.section-meta`: Mono, 0.75rem, 500, uppercase, secondary
- `.section-header`: margin-bottom 32px

#### 5.18 Scroll-Reveal Protection (MF-001 fix)
- Forces `opacity: 1 !important; transform: none !important; visibility: visible !important` on all axis sections
- Prevents external JS from hiding content

---

## 6. Cross-AD Component Evolution Summary

### Components Inherited Unchanged from DD/OD
1. **Header** -- identical dark full-bleed header structure
2. **Code blocks** -- identical dark-theme `pre` with syntax highlighting
3. **Inline code** -- identical subtle bg + 1px border
4. **Callout system** -- identical 5-variant border-left callouts
5. **Tables** -- identical open-grid, no vertical borders
6. **Skip link** -- identical accessibility component
7. **Soul enforcement** -- identical `border-radius: 0` global rule
8. **Page container** -- identical 1100px max-width
9. **Selection styling** -- identical branded selection
10. **Focus-visible** -- identical WCAG outline
11. **Reduced motion** -- identical prophylactic
12. **Print styles** -- identical

### Components Evolved from DD/OD Patterns
1. **Badges:** DD/OD version badges evolved into AD-003 complexity badges and AD-004 confidence badges (same visual DNA: mono, small, bordered)
2. **Breathing zones:** DD/OD simple spacers evolved into AD-005 content-bearing breathing zones with full borders
3. **Bookend sections:** OD bookend pattern refined in AD-003 with front (red accent) and back (green accent) distinction
4. **Page ending:** Different closure patterns per file (AD-003: centered text + bar, AD-004: labeled footer, AD-005: rule + italic mark)
5. **RAR blocks:** Vary in format (AD-003: h2/h3/table, AD-004: dl/dt/dd, AD-005: hidden, AD-006: not observed in read portion)

### Genuinely New AD Components (No DD/OD Precedent)
1. **Bento grid layout** (AD-003) -- CSS Grid with varied cell sizes
2. **Collapsible bento details** (AD-003) -- per-cell progressive disclosure
3. **Step list with counter** (AD-003) -- numbered steps with dark square badges
4. **Split layout** (AD-003) -- 2-column code/explanation split
5. **Spiral stratum sections** (AD-004) -- border-weight-gradient geological encoding
6. **Stratum transitions** (AD-004) -- labeled breathing zones between geological layers
7. **Pull quotes** (AD-004) -- Instrument Serif italic, border-left accent
8. **Metadata panel** (AD-004) -- sidebar key-value display
9. **Comparison grid** (AD-004) -- side-by-side established vs speculative
10. **Open questions list** (AD-004) -- custom `?` marker hanging indent
11. **Hub grid** (AD-005) -- 4-column territory tile layout
12. **Territory tiles with hover** (AD-005) -- flat hover state (border-color transition only)
13. **Solid offset pseudo-element** (AD-005, AD-006) -- editorial flat shadow
14. **Diagonal clip-path transitions** (AD-005) -- descending/ascending directional signals
15. **Progress bar** (AD-005) -- flat rectangular reading progress
16. **Breadcrumb navigation** (AD-005) -- hub-spoke wayfinding
17. **Axis interstitials** (AD-005) -- compact transition markers
18. **Scroll reveal system** (AD-005) -- IntersectionObserver progressive enhancement
19. **Scroll witness** (AD-006) -- fixed scroll progress bar
20. **Axis indicator** (AD-006) -- sticky metadata annotation bar
21. **Drop caps** (AD-006) -- editorial first-letter treatment
22. **Pattern echo grid** (AD-006) -- CSS-only miniature pattern visualizations
23. **Triple column comparison** (AD-006) -- 3-way org/density/axis comparison
24. **Decision matrix** (AD-006) -- color-coded best-fit/acceptable/avoid
25. **Transition grammar matrix** (AD-006) -- smooth/bridge/breathing color codes
26. **Discovery log** (AD-006) -- primary-accented finding catalog
27. **Fractal annotation** (AD-006) -- vertical margin markers

### Soul Compliance Across All 4 Files
| Check | AD-003 | AD-004 | AD-005 | AD-006 |
|-------|--------|--------|--------|--------|
| `border-radius: 0` everywhere | PASS | PASS | PASS | PASS |
| `box-shadow: none` everywhere | PASS | PASS | PASS | PASS |
| No `filter: drop-shadow()` | PASS | PASS | PASS | PASS |
| No 2px borders in axis layer | PASS | PASS | PASS | PASS |
| All backgrounds opaque | PASS | PASS | PASS | PASS |
| Font trio correct | PASS | PASS | PASS | PASS |
| 3-category border system | PASS | PASS | PASS | PASS |

### Border System Summary
| Category | Width | Color | Usage |
|----------|-------|-------|-------|
| Cat 1 (structural) | 3px+ | `--color-border` or `--color-primary` | Cells, header bottom, code blocks, tables th |
| Cat 2 (separator) | 1px | `--color-border-subtle` | Table rows, details summaries, list separators |
| Cat 3 (micro) | 1px | `--color-border` | Inline code, version badges, pattern echoes |
| Accent | 4px | Accent colors | Callout left borders, stratum indicators, featured items |

### AD-004 Border Exception (Semantic Gradient)
AD-004 uses border-weight as a **semantic signal** (confidence encoding):
- 4px = Established (bedrock)
- 3px = Probable (subsoil)
- 3px = Speculative (topsoil, using subtle color)
- 1px = Open (atmosphere)

This is explicitly documented as a semantic exception to border uniformity.

---

## 7. Component Count Summary

| File | Locked Layer Components | Axis-Specific Components | Total Distinct |
|------|------------------------|--------------------------|----------------|
| AD-003 | 12 | 14 | 26 |
| AD-004 | 12 | 11 | 23 |
| AD-005 | 12 | 14 | 26 |
| AD-006 | 12 | 18 | 30 |

**Total unique component types across AD-003 through AD-006:** ~57 distinct visual components (12 shared locked + ~45 axis-specific, with some overlap in concepts like bookends/breathing zones).

---

*End of AD visual audit report.*

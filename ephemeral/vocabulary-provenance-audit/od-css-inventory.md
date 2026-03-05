# OD CSS Inventory — All 6 Organizational Explorations

Comprehensive extraction of every CSS technique actually used in OD-001 through OD-006.
Generated from embedded `<style>` sections of each HTML file.

---

## Summary Statistics

| Exploration | CSS Lines | Classes | Pseudo-elements | Media Queries | Keyframes |
|-------------|-----------|---------|-----------------|---------------|-----------|
| OD-001 | ~1,145 | ~75 | 7 | 5 | 1 (`arrive`) |
| OD-002 | ~774 | ~55 | 1 | 3 | 0 |
| OD-003 | ~584 | ~85 | 8 | 4 | 1 (`arrive`) |
| OD-004 | ~1,072 | ~90 | 4 | 4 | 1 (`arrive`) |
| OD-005 | ~907 | ~75 | 5 | 4 | 1 (`arrive`) |
| OD-006 | ~1,392 | ~130+ | 10+ | 4 | 2 (`arrive`, `track-progress`) |

---

## 1. DESIGN TOKENS (`:root` Variables)

### Color Tokens (IDENTICAL across all 6)

| Token | Value | Notes |
|-------|-------|-------|
| `--color-primary` | `#E83025` | KortAI red |
| `--color-background` | `#FEF9F5` | Warm cream |
| `--color-text` | `#1A1A1A` | Near-black |
| `--color-text-secondary` | `#666666` | Medium gray |
| `--color-border` | `#E0D5C5` | Warm tan border |
| `--color-border-subtle` | `#F0EBE3` | Very light tan |
| `--accent-blue` | `#4A90D9` | Callout info |
| `--accent-green` | `#4A9D6B` | Callout tip/checkpoint |
| `--accent-coral` | `#C97065` | Callout gotcha |
| `--accent-amber` | `#D97706` | Callout warning |
| `--accent-purple` | `#7C3AED` | Callout essence |

### Zone Background Tokens

| Token | Value | Used In |
|-------|-------|---------|
| `--color-zone-sparse` | `#FEF9F5` | All 6 ODs |
| `--color-zone-dense` | `#FFFFFF` | All 6 ODs |
| `--color-zone-breathing` | `#FAF5ED` | All 6 ODs |
| `--color-zone-moderate` | `#FFFFFF` | OD-004 only |
| `--color-zone-densest` | `#FAF5ED` | OD-004 only |
| `--color-zone-emphasis` | `var(--color-border-subtle)` | OD-003 only |

### Typography Tokens (IDENTICAL across all 6)

| Token | Value |
|-------|-------|
| `--font-display` | `'Instrument Serif', Georgia, serif` |
| `--font-body` | `'Inter', system-ui, sans-serif` |
| `--font-mono` | `'JetBrains Mono', 'SF Mono', monospace` |

### Type Scale Tokens (IDENTICAL across all 6, except OD-006)

| Token | Value | OD-006 Override |
|-------|-------|-----------------|
| `--type-page` | `2.5rem` (40px) | `3rem` (48px) -- "crown jewel override" |
| `--type-section` | `1.625rem` (26px) | same |
| `--type-subsection` | `1.375rem` (22px) | same |
| `--type-body` | `1rem` (16px) | same |
| `--type-code` | `0.875rem` (14px) | same |
| `--type-meta` | `0.75rem` (12px) | same |

### Spacing Tokens (IDENTICAL across all 6)

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
| `--space-24` | `96px` (OD-004 only) |

### Gestalt Semantic Aliases (all 6)

| Token | Value | Meaning |
|-------|-------|---------|
| `--space-within` | `var(--space-2)` = 8px | Within related elements |
| `--space-between` | `var(--space-8)` = 32px | Between distinct elements |
| `--space-chapter` | `var(--space-16)` = 64px | Between chapters/sections |

### Geometry Tokens (IDENTICAL across all 6)

| Token | Value |
|-------|-------|
| `--border-radius` | `0` |
| `--box-shadow` | `none` |
| `--border-left-width` | `4px` |
| `--offset-x` | `4px` |
| `--offset-y` | `4px` |
| `--offset-color` | `#1A1A1A` |

### OD-004 Unique Tokens

| Token | Value | Purpose |
|-------|-------|---------|
| `--stratum-established-padding` | `var(--space-10)` = 40px | Confidence stratum spacing |
| `--stratum-probable-padding` | `var(--space-8)` = 32px | Confidence stratum spacing |
| `--stratum-speculative-padding` | `var(--space-5)` = 20px | Confidence stratum spacing |
| `--stratum-open-padding` | `var(--space-4)` = 16px | Confidence stratum spacing |

### OD-006 Unique Tokens

| Token | Value | Purpose |
|-------|-------|---------|
| `--question-width` | `60%` | Q&A pair question width |
| `--answer-width` | `100%` | Q&A pair answer width |

---

## 2. BORDER WEIGHTS USED

### 3-Category Border System (consistent across all 6)

| Category | Weight | Purpose | Examples |
|----------|--------|---------|----------|
| Cat 1: Structural | `3px` | Section dividers, header bottom, table headers, code block frames | `border-bottom: 3px solid var(--color-primary)` |
| Cat 2: Data Separator | `1px` | Within-content separation, table rows, subtle dividers | `border-bottom: 1px solid var(--color-border-subtle)` |
| Cat 3: Micro-element | `1px` | Inline code borders, copy buttons, small badges | `border: 1px solid var(--color-border)` |
| Callout left | `4px` (`--border-left-width`) | Callout system, answer borders, file trees | `border-left: var(--border-left-width) solid` |

### OD-004 Semantic Border Inversion (unique)

| Weight | Meaning | Color |
|--------|---------|-------|
| `4px` | Established (highest confidence) | `var(--color-text)` #1A1A1A |
| `3px` | Probable | `var(--accent-blue)` #4A90D9 |
| `2px` | Speculative (INTENTIONAL thin = lower confidence) | `var(--accent-amber)` #D97706 |
| `1px` | Open questions (INTENTIONAL thinnest) | `var(--accent-purple)` #7C3AED |

### All distinct border declarations across ODs

- `3px solid var(--color-primary)` -- header bottom, chapter title bottom, table header
- `3px solid var(--color-border)` -- code block frame, act divider, pattern viz, survey meta, enrichment card
- `3px solid var(--color-text)` -- pattern viz, conversation summary, territory tile, solid-offset, code block (OD-001)
- `3px solid var(--accent-purple)` -- essence pullquote top/bottom, essence callout (OD-001)
- `3px solid var(--accent-coral)` -- troubleshoot border (OD-003, OD-004)
- `4px solid var(--color-text)` -- established stratum (OD-004), established confidence (OD-006)
- `3px solid var(--color-text-secondary)` -- emerging stratum (OD-006)
- `1px solid var(--color-border-subtle)` -- data separators, verification list items
- `1px solid var(--color-border)` -- inline code, fractal annotations, sidebar panel note, code-block header separator, spoke divider, footer link
- `1px solid var(--color-text)` -- visual index cells, TOC marker
- `1px solid var(--color-primary)` -- territory tile badge (OD-005)
- `1px solid var(--accent-green)` -- verification check boxes
- `1px solid var(--accent-coral)` -- troubleshoot summary marker
- `1px solid #333` -- code block header separator (dark block, OD-002)
- `1px solid #444` -- copy button border (dark block, OD-002)
- `1px solid var(--color-border)` -- code-block label (OD-003, OD-004 within dark block)

---

## 3. COLOR VALUES

### All distinct hex/named colors across the 6 ODs

**Already in tokens (see Section 1):**
`#E83025`, `#FEF9F5`, `#1A1A1A`, `#666666`, `#E0D5C5`, `#F0EBE3`, `#4A90D9`, `#4A9D6B`, `#C97065`, `#D97706`, `#7C3AED`, `#FFFFFF`, `#FAF5ED`

**Additional hardcoded colors:**

| Color | Where Used | Context |
|-------|-----------|---------|
| `#FAFAF5` | OD-001, OD-002, OD-004, OD-005, OD-006 | Header title color on dark bg, code block text color |
| `white` / `#FFFFFF` | Many | Code block copy text, answer backgrounds, card bgs |
| `black` | Print styles | `color: black` in print |
| `#888` / `#888888` | OD-002 | Code lang/copy color inside dark block |
| `#555` | OD-002 | Code line numbers inside dark block |
| `#333` / `#333333` | OD-002, OD-004 | Code header separator inside dark block, geological column separator |
| `#444` | OD-002 | Copy button border inside dark block |
| `#6B9B7A` | OD-001, OD-002, OD-003, OD-005 | Syntax highlight: string (sage green) |
| `#4A7C9B` | OD-001, OD-002, OD-005 | Syntax highlight: function (muted blue) |
| `#F4FAF6` | OD-004 | Checkpoint callout background (light green) |
| `#FEF6F5` | OD-004 | Troubleshoot summary background (light coral) |
| `#F5EDE0` | OD-006 | Territory tile hover background (warm tan) |

### Syntax Highlight Colors (code blocks)

| Token/Class | Color | Name |
|-------------|-------|------|
| comment | `#666666` / `var(--color-text-secondary)` | Gray |
| keyword | `#E83025` / `var(--color-primary)` | Red |
| string | `#6B9B7A` | Sage green |
| function | `#4A7C9B` | Muted blue |
| type | `#C97065` / `var(--accent-coral)` | Coral |
| variable | `#E0D5C5` (OD-002) / `#FAFAF5` (OD-005) | Warm tan / Off-white |
| number | `#D97706` / `var(--accent-amber)` | Amber |
| bracket | `#D97706` (OD-005) | Amber |
| operator | `#E0D5C5` (OD-005) | Warm tan |

---

## 4. SPACING VALUES

### All distinct spacing values used (beyond tokens)

| Value | Where Used |
|-------|-----------|
| `0` | Various margin/padding resets |
| `1px` | Inline code padding, border widths |
| `2px` | Outline-offset, version badge padding, inline code padding, speculative border |
| `3px` | Gap in diagrams/grids, wave bars, visual index |
| `4px` | Offset values, progress dots gap, margin/padding various |
| `6px` | Marker margin-top alignment |
| `8px` | Skip link padding |
| `9px` | Scroll witness label font-size (NOT a spacing token) |
| `10px` | Various specific values |
| `14px` | Survey meta value font-size |
| `16px` | Skip link padding |
| `24px` | Scroll witness position-left, TOC marker height |
| `28px` | Answer padding-left (4px border + 28px = 32px alignment, OD-001) |
| `48px` | Task island number size (OD-003) |
| `80px` | Sparse sea height |
| `96px` | Large sparse sea height (OD-003) |
| `100px` | Arc/wave diagram height |
| `200px` | Tension meter bar width, scroll witness column width |
| `280px` | Territory grid minmax (OD-005), enrichment grid minmax (OD-001) |
| `640px` | Max-width for descriptions, essence quote (OD-003) |
| `720px` | Max-width for established stratum content (OD-004) |
| `860px` | `max-width` for `.page-container` and `.exploration-header__inner` -- ALL 6 ODs |

---

## 5. LAYOUT TECHNIQUES

### Flexbox (Used in ALL 6 ODs)

| Pattern | Classes | Example |
|---------|---------|---------|
| Horizontal row | `.exploration-meta`, `.diagram-row`, `.evidence-dna` | `display: flex; gap: var(--space-6)` |
| Vertical column | `.conversation-diagram`, `.scroll-witness`, `.fractal-annotations` | `flex-direction: column` |
| Center-aligned | `.act-marker`, `.task-island__number` | `align-items: center; justify-content: center` |
| Space-between | `.code-block__header`, `.arc-labels`, `.wave-labels` | `justify-content: space-between` |
| Flex-wrap | `.exploration-meta` (OD-003+) | `flex-wrap: wrap` |
| Fit-content | `.dual-lens__toggle` (OD-006) | `width: fit-content` |

### CSS Grid (Used in OD-003, OD-004, OD-005, OD-006)

| Pattern | Class | Columns | Context |
|---------|-------|---------|---------|
| 2-column equal | `.strata-inventory`, `.task-overview`, `.comparison-grid`, `.synthesis-grid` | `1fr 1fr` | Side-by-side content |
| 3-column equal | `.hub-grid`, `.visual-index` | `repeat(3, 1fr)` | Hub tiles, specimen grid |
| 3-part page layout | `.page-layout` (OD-006) | `200px 48px 1fr` | Sidebar + annotations + content |
| Auto-fit responsive | `.territory-grid`, `.enrichment-grid`, `.footer-grid` | `repeat(auto-fit, minmax(Npx, 1fr))` | Card grids |
| Named areas | `.spoke-grid` (OD-005) | `3fr 1fr` with `grid-template-areas` | Content + sidebar |
| 6-column | `.archipelago-map` (OD-003) | `repeat(6, 1fr)` | Task overview tiles |

### Sticky Positioning

| Class | Properties | Used In |
|-------|-----------|---------|
| `.sidebar-panel` | `position: sticky; top: var(--space-6)` | OD-005 |
| `.scroll-witness` | `position: sticky; top: 0; height: 100vh` | OD-006 |
| `.fractal-annotations` | `position: sticky; top: 0; height: 100vh` | OD-006 |
| `.section-header` | `position: sticky; top: 0; z-index: 50` | OD-006 |

### Fixed Positioning

| Class | Properties | Used In |
|-------|-----------|---------|
| `.scroll-witness` (OD-001) | `position: fixed; left: 24px; top: 50%; transform: translateY(-50%)` | OD-001 |
| `.wave-indicator` (OD-005) | `position: fixed; right: var(--space-4); top: 50%; transform: translateY(-50%)` | OD-005 |

---

## 6. PSEUDO-ELEMENT TECHNIQUES

### `::after` (Solid Offset Depth Pattern)

Used extensively in OD-001, OD-004, OD-005, OD-006 for the "neobrutalist depth" effect:

```css
.element::after {
  content: '';
  position: absolute;
  top: var(--offset-y);     /* 4px */
  left: var(--offset-x);    /* 4px */
  width: 100%;
  height: 100%;
  background: var(--offset-color);  /* #1A1A1A */
  z-index: -1;
}
```

**Applied to:** `.pattern-visualization`, `.callout--essence`, `.code-block` (OD-001), `.conversation-summary` (OD-001), `.geological-survey` (OD-004), `.territory-tile` (OD-005, OD-006), `.solid-offset` (OD-006)

OD-005 variant: `border: 3px solid var(--offset-color)` instead of `background` fill, with `pointer-events: none; opacity: 1`.

### `::after` (Progress fill)

- `.toc__marker::after` (OD-006): `background: var(--color-primary); transform: scaleY(var(--progress, 0))` -- scroll-driven progress indicator

### `::before` (Content insertion)

| Selector | Content | Used In |
|----------|---------|---------|
| `.question__marker::before` | `''` (8x8 red square) | OD-001 |
| `.callout--collapsible summary::before` | `'` + `'` | OD-001 |
| `.troubleshoot summary::before` | `'+'` / `'\2212'` | OD-003, OD-004 |
| `.task-island__toggle::after` | `'\2212'` / `'+'` | OD-003 |
| `.task-step__marker::before` | `counter(task-step)` | OD-003 |
| `.section-header__mode::before` | `''` (8x8 red square) | OD-006 |
| `details summary::before` | `'\25B8'` (triangle) | OD-006 |
| `.task-checkpoint::before` | `'CHECKPOINT'` | OD-006 |
| `a[href]::after` (print) | `" (" attr(href) ")"` | All 6 |

### `::first-letter` (Drop Cap)

| Selector | Properties | Used In |
|----------|-----------|---------|
| `.answer__lead--dropcap::first-letter` | `font-family: var(--font-display); font-size: 3.5em; float: left; color: var(--color-primary)` | OD-001 |
| `.section-opening::first-letter` | `font-family: var(--font-display); font-size: 4.2em; float: left; color: var(--color-primary)` | OD-006 |

### `::selection`

All 6 ODs: `background: var(--color-primary); color: var(--color-background)`

---

## 7. ANIMATION & TRANSITION TECHNIQUES

### Scroll-Driven Animations (`animation-timeline: view()`)

Used in: OD-001, OD-003, OD-004, OD-005, OD-006

```css
@keyframes arrive {
  from { opacity: 0; transform: translateY(16px|20px); }
  to { opacity: 1; transform: translateY(0)|none; }
}
.reveal {
  animation: arrive 0.5s ease-out both;
  animation-timeline: view();
  animation-range: entry 10% entry 40%;
}
```

**Stagger variants:** `.reveal-delay-1` (15%/45%), `.reveal-delay-2` (20%/50%)

### Scroll-Driven Progress Tracking (OD-006 only)

```css
@property --progress {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}
@keyframes track-progress {
  from { --progress: 0; }
  to { --progress: 1; }
}
.doc-section {
  animation: track-progress linear both;
  animation-timeline: view(block 95% 5%);
}
```

### CSS Transitions (used across all 6)

| Property | Duration | Easing | Context |
|----------|----------|--------|---------|
| `border-color` | `0.15s` | `ease` | Territory tiles, buttons |
| `background-color` | `0.15s` | `ease` | Territory tiles hover |
| `color` | `0.15s`-`0.2s` | `ease` | Links, buttons |
| `opacity` | `0.2s` | `ease` | Fractal annotations |
| `height` | `0.3s` | `ease` | Scroll witness fill bars |
| `border-color` | `0.2s` | `ease` | Section header scroll state |
| `border-left-color, background-color` | `0.15s` | `ease` | Semantic bridge code targets |
| `transform` | `0.15s` | `ease` | Details summary triangle rotation |

### Fallbacks

All ODs with animations include:
- `@media (prefers-reduced-motion: reduce)` -- disables all animation/transition
- `@supports not (animation-timeline: view())` -- static fallback for non-Chromium

---

## 8. PER-EXPLORATION UNIQUE COMPONENTS

### OD-001 — Conversational

| Class | Purpose |
|-------|---------|
| `.conversation-chapter` | Chapter divider with breathing zone background |
| `.conversation-chapter__label` | Mono label (e.g., "CHAPTER 01") |
| `.conversation-chapter__title` | Serif italic chapter name with 3px bottom border |
| `.conversation-chapter__progress` | Dot-based progress indicator per chapter |
| `.progress-dots` + `.progress-dot` | Flex row of 8px square dots (active/complete/inactive) |
| `.qa-pair` | Question-answer unit (32px margin-bottom) |
| `.question` | Narrow width (60%), indented left (5%), sparse background |
| `.question__marker` | Absolute-positioned mono label + 8px red square `::before` |
| `.question__narrowing` | Socratic narrowing indicator (8px mono) |
| `.question__text` | Serif italic, 22px |
| `.answer` | Full width, 4px left border, white dense background |
| `.answer__lead` | Lead paragraph, max 65ch |
| `.answer__lead--dropcap` | Drop cap variant (3.5em serif first-letter) |
| `.answer__detail` | Secondary answer content (14px, gray) |
| `.pattern-visualization` | Bordered box with solid offset `::after` |
| `.conversation-diagram` | Flex column of diagram rows |
| `.diagram-row`, `.diagram-bar`, `.diagram-label`, `.diagram-density` | Bar chart visualization components |
| `.diagram-connector`, `.diagram-connector-line` | Connecting elements between bars |
| `.diagram-annotation` | Sub-diagram text note |
| `.follow-up`, `.follow-up--deep` | Follow-up question variants (narrower, lighter) |
| `.essence-pullquote` | Center-aligned, top+bottom 3px purple borders |
| `.version-badge` | Inline mono badge (red bg, white text) |
| `.scroll-witness` (fixed) | Fixed left sidebar with section progress bars |
| `.scroll-witness__marker`, `__fill`, `__label` | Progress bar components |
| `.research-badge`, `__tag` | Inline research reference tags |
| `.conversation-summary` | Closing pattern box with solid offset |
| `.enrichment-appendix` | V2 appendix section |
| `.enrichment-grid` | Auto-fill grid of enrichment cards |
| `.enrichment-card`, `__id`, `__name`, `__desc`, `__where` | Card components for v2 research |

### OD-002 — Narrative

| Class | Purpose |
|-------|---------|
| `.act-header` | Narrative act separator (80px top margin) |
| `.act-header__number` | Mono label for act number |
| `.act-header__title` | Serif italic, with TYPE SIZE CASCADE per act |
| `.act-header--setup .act-header__title` | 40px (spacious) |
| `.act-header--rising .act-header__title` | 26px (tighter) |
| `.act-header--climax .act-header__title` | 22px (compressed) |
| `.act-header--falling .act-header__title` | 16px, 600 weight (settled) |
| `.act-header--resolution .act-header__title` | 16px (exhale) |
| `.narrative-beat` | Section within an act |
| `.narrative-beat__subtitle` | Inter 600, uppercase, secondary color |
| `.act--setup .narrative-beat` | 64px margin, 17px/1.85 line-height -- SPARSE |
| `.act--rising .narrative-beat` | 40px margin, 15px/1.7 -- MEDIUM |
| `.act--climax .narrative-beat` | 24px margin, 14px/1.6 -- DENSE |
| `.act--falling .narrative-beat` | 32px margin, 14px/1.7 -- SETTLING |
| `.act--resolution .narrative-beat` | 40px margin, 15px/1.8 -- EXHALE |
| `.arc-visualization` | Bar chart showing CRESCENDO density arc |
| `.arc-diagram` | Flex row of bars with 100px height |
| `.arc-bar`, `.arc-bar__fill` | Individual bar (10 bars, heights 10-95px) |
| `.arc-labels`, `.arc-annotation` | Axis labels and explanatory text |
| `.tension-meter` | Compact horizontal progress bar per act |
| `.tension-meter__bar`, `__fill`, `__label` | Meter components |
| `.tension-meter__bar--setup` | 10% fill |
| `.tension-meter__bar--climax` | 95% fill |
| `.act-divider` | 48px breathing zone with top+bottom 3px borders |
| `.code-progression` | Signal for progressive code reveal (mono label) |
| `.narrative-summary` | Closing summary box, primary left border |
| `.narrative-summary__marker` | 8px red square marker (Soul Piece 5) |
| Code syntax: `.code--comment`, `--keyword`, `--string`, `--function`, `--type`, `--variable`, `--number` | 7 syntax highlight classes |

### OD-003 — Task-Based

| Class | Purpose |
|-------|---------|
| `.archipelago-map` | 6-column grid of task tiles in header |
| `.archipelago-tile` | 3px bordered tile with number, label, duration |
| `.archipelago-tile--beginner` | Green border |
| `.archipelago-tile--intermediate` | Red border |
| `.archipelago-tile--advanced` | Purple border |
| `.bookend-front` | Dense orientation block (left red border) |
| `.task-overview` | 2-column grid of overview items |
| `.task-overview__marker` | 10x10px square marker |
| `.bookend-meta` | Meta row with 3px top border |
| `.sparse-sea` | 80px empty space element |
| `.sparse-sea--large` | 96px variant |
| `.task-island` | `<details>` collapsible task card |
| `.task-island--beginner/intermediate/advanced` | Difficulty-colored left borders |
| `.task-island--featured` | `outline: 4px solid var(--color-text); outline-offset: 4px` |
| `.task-island > summary` | Flex row: number + title-block + toggle |
| `.task-island__number` | 48x48px bordered number box |
| `.task-island__toggle` | 24x24px +/- toggle button |
| `.task-duration` | Mono badge with 3px border |
| `.task-complexity--beginner/intermediate/advanced` | Colored 1px bordered badge |
| `.task-steps` | Ordered list with CSS counter |
| `.task-step` | Flex row with step marker + content + vertical line connector |
| `.task-step:not(:last-child)::after` | 1px vertical connector line (absolute) |
| `.task-step__marker` | 32x32px bordered numbered square |
| `.troubleshoot` | `<details>` with coral 3px border |
| `.troubleshoot summary::before` | +/- toggle inside 3px bordered box |
| `.bookend-back` | Closing bookend (3px border, red left) |
| `.bookend-reflection` | Purple-bordered reflection box |
| `.verification-list` | Checkmark list |
| `.verification-list__check` | 18x18px green-bordered checkmark box |
| `.whats-next` | Navigation section with red left border |
| `.whats-next__arrow` | Mono arrow prefix |
| `.section-label` | Centered mono label |
| `.essence-quote` | Center-aligned serif italic pullquote, red top+bottom borders |
| `.pattern-summary` | Table-containing summary box with mono header |

### OD-004 — Confidence

| Class | Purpose |
|-------|---------|
| `.geological-column` | Dark header minimap with 4 stratum bars |
| `.geological-column__bar--established` | 4px height (bedrock) |
| `.geological-column__bar--probable` | 3px height |
| `.geological-column__bar--speculative` | 2px height |
| `.geological-column__bar--open` | 1px height |
| `.geological-survey` | Content inventory box with solid offset |
| `.strata-inventory` | 2-column grid of stratum items |
| `.strata-inventory__marker--established/probable/speculative/open` | Color-coded 10x10px squares |
| `.confidence-switcher` | Tab bar (3 options) with 3px gap, active has red bottom border |
| `.stratum` | Container for each confidence level |
| `.stratum--established` | 4px left border (black), sparse padding (40px), 720px max-width |
| `.stratum--probable` | 3px left border (blue), moderate padding (32px) |
| `.stratum--speculative` | 2px left border (amber), dense padding (20px) |
| `.stratum--open` | 1px left border (purple), densest padding (16px) |
| `.stratum__epistemic` | "You Are Reading" marker with 4px left border |
| `.evidence-dna` | Flex row of evidence metadata items |
| `.stratum-boundary` | 48px breathing zone between strata |
| `.stratum-boundary__line` | 3px horizontal rule |
| `.stratum-boundary__progress` | Square progress indicators |
| `.progress-square`, `--filled` | 10x10px empty/filled squares |
| `.comparison-grid` | 2-column grid with 3px gap, border-colored bg |
| `.comparison-column--established/probable/speculative` | Color-coded bottom borders |
| `.crux-block` | "What would change this?" box (3px border, purple label) |

### OD-005 — Spatial

| Class | Purpose |
|-------|---------|
| `.wave-visualization` | Bar chart showing hub-spoke oscillation |
| `.wave-diagram` | Flex row of bars (hub, spoke1-6, gaps) |
| `.wave-bar--hub/s1-s6/gap1-5/end` | Individual bar fills (12-85px heights) |
| `.hub` | Sparse overview section with serif heading |
| `.hub__subtitle` | 14px secondary text, max 55ch |
| `.territory-grid` | Auto-fit grid of territory tiles (280px min) |
| `.territory-tile` | 3px black border with solid offset `::after` as border (not fill) |
| `.territory-tile__marker` | 8px red square (Soul Piece 5) |
| `.territory-tile__badge` | 10px mono badge with 1px red border |
| `.spoke` | Dense content section with scroll-margin |
| `.spoke-divider` | 1px horizontal rule with 80px spacing |
| `.breadcrumb` | Navigation breadcrumb with triangle separators |
| `.breadcrumb__current` | Serif italic, normal case, dark color |
| `.spoke__heading` | Serif italic with 3px red bottom border |
| `.spoke-grid` | Named-area grid (3fr content + 1fr sidebar) |
| `.spoke-content` | `grid-area: doctrine` |
| `.spoke-sidebar` | `grid-area: references` |
| `.spoke-section` | Content block within spoke |
| `.sidebar-panel` | Sticky sidebar with 4px left border |
| `.sidebar-panel__list` | Square-bulleted list |
| `.return-link` | 3px bordered button with hover fill |
| `.flowchart` | Preformatted text flowchart in bordered box |
| `.wave-indicator` | Fixed right sidebar with zone rectangles |
| `.wave-indicator__zone` | 8x24px rectangles (active = red) |
| `.wave-indicator__label` | Vertical text (writing-mode: vertical-rl) |
| `.decision-table` | Table with structural header border + closing border |
| `.exploration-footer` | 3px red top border + footer grid |
| `.footer-link` | 1px bordered link card with hover effect |
| `.footer-meta` | Mono meta text |
| `.inline-code` | 13px mono with subtle bg and 1px border |

### OD-006 — Creative (Synthesis)

| Class | Purpose |
|-------|---------|
| `.page-layout` | 3-column CSS Grid (200px + 48px + 1fr) |
| `.scroll-witness` (sticky) | Sticky left TOC sidebar with 3px right border |
| `.scroll-witness__title` | Mono label |
| `.toc__item` | TOC entry with marker + label |
| `.toc__marker` | 4x24px bordered rectangle with scroll-driven fill `::after` |
| `.toc__label`, `__mode` | Section name + organizational mode |
| `.fractal-annotations` | Sticky left annotations panel |
| `.fractal-annotation` | Vertical text annotations (writing-mode: vertical-lr, rotated 180deg) |
| `.fractal-annotation__scale`, `__ratio` | Scale name + ratio label |
| `.main-content` | 860px max-width content area |
| `.page-header` | Dark header with negative margin for full-bleed |
| `.page-header__title` | 3rem (48px, overridden) display font, -0.02em tracking |
| `.page-header__subtitle` | Serif italic section text |
| `.page-header__thesis` | Left-bordered thesis statement box |
| `.section-header` | Sticky section header with scroll-triggered red bottom border |
| `.section-header__number` | Red mono number |
| `.section-header__mode` | Mode indicator with 8px red square `::before` |
| `.section-opening` | Body text with editorial drop cap `::first-letter` |
| `.solid-offset` | Generic solid offset class (3px border + ::after) |
| `.dual-lens` | Why/How toggle component |
| `.dual-lens__toggle` | 3px bordered toggle button group |
| `.dual-lens__btn` | Toggle buttons (active = inverted colors) |
| `.view-why` | Serif italic conceptual view |
| `.view-how` | Mono code view with subtle bg |
| `.qa-pair`, `.question`, `.answer` | Q&A pair from OD-001 pattern |
| `.act`, `.act-marker`, `.act-marker__icon` | Narrative act from OD-002 pattern |
| `.act--exposition/rising/climax` | Line-height variants (1.9/1.7/1.5) |
| `.task-island` (OD-006 version) | Simpler task component (no `<details>`) |
| `.task-step`, `__marker` | Step markers with 1px left border connector |
| `.task-checkpoint` | Green-bordered checkpoint with `::before` content |
| `.stratum--established/emerging/exploratory` | Confidence strata (4px/3px/1px borders) |
| `.certainty-badge`, `__icon` | Inline confidence indicator |
| `.hub-grid` | 3-column grid for territory tiles |
| `.territory-tile` | 3px bordered tile with solid offset |
| `.territory-tile__density` | Red mono density label |
| `.synthesis-grid` | 2-column grid |
| `.synthesis-card` | 3px bordered card with org/density/proof sections |
| `.visual-index` | 3-column specimen grid (3px outer border) |
| `.visual-index__cell` | 1px bordered cell |
| `.visual-index__preview` | 4:3 aspect ratio preview area |
| `.mini-pulse` | Miniature OD-001 signature (narrow/wide bars) |
| `.mini-crescendo` | Miniature OD-002 signature (rising bar segments) |
| `.mini-islands` | Miniature OD-003 signature (separated squares) |
| `.mini-geological` | Miniature OD-004 signature (layered bands) |
| `.mini-wave` | Miniature OD-005 signature (hub + spoke cross) |
| `.mini-fractal` | Miniature OD-006 signature (recursive 3x3 grid) |
| `.concept-link` | Semantic bridge (hover reveals bottom border) |
| `.code-target`, `.code-target.highlighted` | Code highlight target (left border + bg) |
| `.pull-quote` | Magazine-style serif italic quote with 4px red left border |
| `.pull-quote__attribution` | Mono attribution |
| `details`, `details summary` | Collapsible sections with 4px left border, triangle markers |
| `.section-divider` | Breathing zone between sections (80px margin, 1px border) |
| `.comparison-table` | Standard table (3px header border, 1px row borders) |
| `.page-footer` | 3px red top border footer |
| Utility classes: `.mt-4/6/8`, `.mb-4/6/8`, `.text-secondary/primary`, `.font-mono/display` | Spacing and text utilities |
| `.sr-only` | Screen reader only (clip-rect pattern) |

---

## 9. RESPONSIVE BREAKPOINTS

| Breakpoint | Used In | Changes |
|------------|---------|---------|
| `max-width: 1200px` | OD-001, OD-005 | Hide scroll-witness / wave-indicator |
| `max-width: 1024px` | OD-006 | Collapse 3-column layout to single column, hide sidebars |
| `max-width: 768px` | OD-001, OD-002, OD-004, OD-005, OD-006 | Stack grids to 1-col, adjust padding, widen questions to 100% |
| `max-width: 720px` | OD-004 | Comparison grid to single column |
| `max-width: 640px` | OD-003, OD-004 | Archipelago map to 3-col, task-overview/strata to 1-col |

---

## 10. ACCESSIBILITY TECHNIQUES

| Technique | Details | Used In |
|-----------|---------|---------|
| Skip link | `.skip-link` (position absolute, visible on focus) | All 6 |
| Focus visible | `*:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px }` | All 6 |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` -- kills all animation/transition | All 6 |
| Animation fallback | `@supports not (animation-timeline: view())` -- static for non-Chromium | OD-001,003,004,005,006 |
| Print styles | Hide nav/UI, show URLs after links, remove shadows | All 6 |
| Screen reader only | `.sr-only` (clip-rect pattern) | OD-006 |
| Custom list markers | `list-style: none` + custom styled markers | OD-003, OD-004, OD-006 |
| Selection styling | `::selection` with brand colors | All 6 |
| `user-select: none` | Code line numbers, summary elements | All 6 |

---

## 11. CROSS-OD PATTERNS (Shared Components)

### Components present in ALL 6 ODs

1. **Exploration Header** -- Dark bg (`var(--color-text)`), 3px red bottom border, serif italic title, mono ID/meta
2. **Page Container** -- `max-width: 860px; margin: 0 auto`
3. **Callout System** -- 4px left border, 5-6 color variants (essence, tip, info/note, gotcha, warning, checkpoint)
4. **Code Block** -- Dark bg (#1A1A1A), mono font, 3px border, syntax highlighting
5. **Skip Link** -- Accessible skip-to-content
6. **Focus Visible** -- 3px red outline
7. **Selection Styling** -- Red bg, cream text
8. **Print Styles** -- White bg, hidden UI, URL display

### Components present in 3-5 ODs

1. **File Tree** -- OD-001, OD-002 (mono, 4px left border, line-height 1.8)
2. **Decision Matrix/Table** -- OD-001, OD-002, OD-005, OD-006 (3px header border, mono headers)
3. **Essence Pullquote** -- OD-001, OD-002 (center-aligned, purple top+bottom borders)
4. **Scroll-Driven Reveal** -- OD-001, OD-003, OD-004, OD-005, OD-006 (`.reveal` classes)
5. **Solid Offset** -- OD-001, OD-004, OD-005, OD-006 (pseudo-element depth)
6. **Verification List** -- OD-003, OD-004 (green-bordered checkmark squares)
7. **Troubleshoot Collapsible** -- OD-003, OD-004 (coral 3px border, +/- toggle)
8. **What's Next** -- OD-003, OD-004 (red left border, serif italic title)
9. **Territory Tile** -- OD-005, OD-006 (3px bordered card with solid offset)

### Components unique to a single OD

- **OD-001:** Conversation pairs (Q/A), scroll witness (fixed), drop cap, progress dots, enrichment appendix, version badge, research badges
- **OD-002:** Narrative acts with typography cascade (5 size steps), tension meter, arc visualization, act dividers, code progression signal
- **OD-003:** Archipelago map, task islands (collapsible details), task steps with connector lines, bookend front/back, sparse sea, task overview grid
- **OD-004:** Geological strata (4 confidence levels with border-weight encoding), geological column minimap, confidence switcher tabs, stratum boundaries, progress squares, comparison grid with colored headers, crux blocks
- **OD-005:** Hub-spoke layout, territory grid, spoke grid (named areas), wave visualization, breadcrumbs, sidebar panel (sticky), return link button, wave indicator (fixed), flowchart, footer grid
- **OD-006:** 3-column page layout, fractal annotations (vertical text), dual lens (why/how toggle), visual index (specimen grid), mini-signatures (6 pattern miniatures), semantic bridge (concept-link/code-target), section-opening drop cap, section-header (sticky with scroll state), synthesis grid, certainty badges, comparison table, utility classes, @property registration

---

## 12. FONT WEIGHTS ACTUALLY USED

| Weight | Context | Used In |
|--------|---------|---------|
| `300` | Stratum exploratory text | OD-006 |
| `400` | Body text, code, most content (default) | All 6 |
| `500` | Meta labels, highlighted table rows, sidebar links, mono badge weights | All 6 |
| `600` | Callout labels, act-header falling, narrative beat subtitles, task step titles, bookend meta values, archipelago tile numbers, task markers, section headers | All 6 |

**Note:** No `700` (bold) used anywhere. Maximum weight is `600` (semibold), used only for structural labels and markers.

---

## 13. LINE-HEIGHT VALUES

| Value | Context |
|-------|---------|
| `0.8` | Drop cap first-letter |
| `1.1` | Page header title (OD-006) |
| `1.15` | Exploration title |
| `1.2` | Spoke headings, section headers |
| `1.3` | Task island titles, pullquote, toc labels, question text |
| `1.4` | Question text (OD-001), established stratum (OD-006) |
| `1.5` | Code blocks, essence pullquote text, sidebar lists, synthesis proof, act climax |
| `1.6` | Callout body, hypothesis, epistemic markers, exploration hypothesis, act emerging/falling |
| `1.65` | Speculative stratum prose (OD-004) |
| `1.7` | Body text default, most prose, answer detail, act rising/moderate |
| `1.8` | File tree, verification lists, flowchart, established stratum (OD-004), act resolution, sidebar note, footer meta |
| `1.85` | Act setup narrative (OD-002) -- SPARSE |
| `1.9` | Act exposition (OD-006) |

**CRESCENDO technique:** Line-height decreases as density increases:
- Sparse: 1.85-1.9
- Medium: 1.7
- Dense: 1.5-1.6
- Densest: 1.4

---

## 14. LETTER-SPACING VALUES

| Value | Context |
|-------|---------|
| `-0.02em` | Page header title (OD-006 only) |
| `0.04em` | Fractal annotations |
| `0.05em` | Research badge tags, narrative beat subtitles |
| `0.06em` | Geological column labels, comparison table headers, mini labels, troubleshoot, breadcrumbs, territory density |
| `0.08em` | Exploration meta, code lang labels, callout labels, arc/wave labels, breadcrumbs, tension meter, section headers, confidence switcher, evidence DNA, scroll witness labels, various mono labels |
| `0.1em` | Exploration ID, question markers, callout labels, code block labels, TOC title, section header number, tension meter label, act-marker label |
| `0.12em` | Code block labels (OD-003+), callout labels (OD-004), bookend-meta labels, scroll witness labels |
| `0.15em` | Pattern viz title, chapter labels, essence pullquote labels, geological survey/boundary labels, archipelago tile labels, section divider, page-header meta |

---

## 15. NOTABLE CSS PATTERNS & TECHNIQUES

### Counter-based numbering (OD-003)
```css
.task-steps { list-style: none; counter-reset: task-step; }
.task-step__marker { counter-increment: task-step; }
.task-step__marker::before { content: counter(task-step); }
```

### Outline-based "featured" highlight (OD-003)
```css
.task-island--featured {
  outline: 4px solid var(--color-text);
  outline-offset: 4px;
}
```

### Named grid areas (OD-005)
```css
.spoke-grid {
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "doctrine references";
}
.spoke-content { grid-area: doctrine; }
.spoke-sidebar { grid-area: references; }
```

### CSS @property registration (OD-006 only)
```css
@property --progress {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}
```

### Writing-mode for vertical text (OD-005, OD-006)
```css
.wave-indicator__label {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
.fractal-annotation {
  writing-mode: vertical-lr;
  text-orientation: mixed;
  transform: rotate(180deg);
}
```

### Aspect ratio (OD-006)
```css
.visual-index__preview {
  aspect-ratio: 4/3;
}
```

### Scroll-margin (OD-005)
```css
.spoke {
  scroll-margin-top: var(--space-4);
}
```

### Negative margin for full-bleed (OD-006)
```css
.page-header {
  margin: 0 calc(-1 * var(--space-8));
}
```

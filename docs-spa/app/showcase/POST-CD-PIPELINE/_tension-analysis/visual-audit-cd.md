# Visual Audit: CD-003 through CD-006 -- Component Catalog

**Auditor:** cd-auditor
**Date:** 2026-02-12
**Method:** Playwright snapshot + HTML source analysis
**Files:** CD-003, CD-004, CD-005, CD-006

---

## Executive Summary

The CD (Combination) phase uses **zero new atomic component primitives**. Every component present in CD-003 through CD-006 is a recombination of DD/OD/AD components. CD's contribution is **compositional grammar** -- how components relate spatially, temporally, and semantically -- not new visual atoms.

CD introduces **layout-level innovations** (transition zones, axis-specific containers, confidence strata) and **naming conventions** that unify prior components, but the visual DNA of every individual component traces directly to DD/OD/AD origins.

---

## CD-003: File Tree with Callouts

**URL:** `CD-003-file-tree-with-callouts.html`
**Combination:** DD:ISLANDS | OD:SPATIAL | AD:BENTO GRID + CHOREOGRAPHY
**Lines:** 1,770 | **Content Topic:** React application file structure

### Component Catalog

| # | Component | CSS Class(es) | Origin | New in CD? |
|---|-----------|---------------|--------|------------|
| 1 | **Header** (full-bleed dark) | `header`, `.header-inner`, `.meta-line` | DD-001+ (all phases) | NO |
| 2 | **Version Badge** | `.version-badge` | OD phase | NO |
| 3 | **Section Heading** | `.section-heading` | DD/OD convention | NO |
| 4 | **Bento Grid** | `.bento-grid`, `.bento-cell`, `.bento-item--2x2/2x1/1x2` | AD-003 (bento grid axis) | NO |
| 5 | **Cell Badge** | `.cell-badge`, `.cell-badge--hub/spoke/file-tree` | AD-003 | NO |
| 6 | **File Tree** | `.file-tree`, `.file-tree__item`, `--dir/--file/--highlight` | DD/OD (structural component) | NO |
| 7 | **Info Callout** | `.callout.callout--note` | DD-001+ (all phases) | NO |
| 8 | **Tip Callout** | `.callout.callout--tip` | DD-001+ | NO |
| 9 | **Gotcha Callout** | `.callout.callout--gotcha` | DD-001+ | NO |
| 10 | **Challenge Callout** | `.callout.callout--challenge` | DD-001+ | NO |
| 11 | **Essence Callout** | `.callout.callout--essence` | DD-001+ | NO |
| 12 | **Code Snippet** (dark theme `<pre>`) | `pre`, syntax classes `.kw/.st/.cm/.fn/.ty/.nu/.pu` | DD-001+ | NO |
| 13 | **Inline Code** | `code:not(pre code)` | DD-001+ | NO |
| 14 | **Decision Matrix** (table) | `.decision-matrix`, `.recommended` | OD/AD | NO |
| 15 | **Core Abstraction** | `.core-abstraction`, `__title`, `__body` | AD phase | NO |
| 16 | **Reasoning Component** | `.reasoning`, `__title`, `__body` | AD phase | NO |
| 17 | **Choreography Hub** | `.choreo-hub`, `__title` | AD-005 (choreography axis) | NO |
| 18 | **Choreography Spokes** | `.choreo-spokes`, `.choreo-spoke`, `--full` | AD-005 | NO |
| 19 | **Smooth Transition** | `.transition--smooth` | **CD-NEW (layout)** | LAYOUT ONLY |
| 20 | **RAR Block** | `.rar-block` | CD convention | METADATA ONLY |
| 21 | **Footer** | `.page-footer`, `__inner`, `__id`, `__rule` | DD-001+ | NO |
| 22 | **Page End Marker** | `.page-end` | OD/AD convention | NO |
| 23 | **Skip Link** | `.skip-link` | All phases | NO |

### Key CSS Properties

- **border-radius:** 0 (global enforcement via `*:where(:not(input,button,select))`)
- **box-shadow:** none (`:root` token)
- **Borders:** 3px structural, 4px semantic (callout/file-tree left), 1px separator/micro. ZERO 2px.
- **Backgrounds:** `#FEF9F5` (sparse), `#FFFFFF` (dense), `#FAF5ED` (breathing), `#1A1A1A` (header/footer/code). All fully opaque.
- **Fonts:** `Instrument Serif` (display/headings, italic for Essence/Core), `Inter` (body), `JetBrains Mono` (code)
- **Type scale:** 2.5rem (page), 1.625rem (section), 1.375rem (subsection), 1rem (body), 0.875rem (code), 0.75rem (meta)
- **Container:** max-width 1100px
- **Bento gap:** 32px (`--space-8`)

### Recombination vs New

The File Tree component is NOT new to CD -- it appeared in earlier phases. What IS new is the **compositional relationship**: File Tree and Callouts sharing left-anchored 4px border DNA (finding CD-F-009), with weight differentiation (dark `#1A1A1A` border for File Tree vs colored accent borders for callouts). This is a COMBINATION FINDING, not a new component.

The **Smooth Transition** (`.transition--smooth`) is the closest thing to "new" -- a 32px-height element with a centered 120px horizontal line acting as a visual bridge between bento grid and choreography sections. But this is a layout mechanism, not a reusable component.

---

## CD-004: Essence as Background

**URL:** `CD-004-essence-as-background.html`
**Combination:** DD:TIDAL | OD:CONFIDENCE | AD:SPIRAL + CHOREOGRAPHY
**Lines:** 1,626 | **Content Topic:** Database architecture decisions

### Component Catalog

| # | Component | CSS Class(es) | Origin | New in CD? |
|---|-----------|---------------|--------|------------|
| 1 | **Header** (full-bleed dark) | `.page-header`, `.header-inner`, `.header-meta` | DD-001+ | NO |
| 2 | **Version Badge** | `.version-badge` | OD phase | NO |
| 3 | **Confidence Badge** | `.confidence-badge`, `--established/probable/speculative/open` | OD-004 (confidence org) | NO |
| 4 | **Spiral Confidence Strata** | `.stratum-established/probable/speculative/open` | AD-004 (spiral axis) | NO |
| 5 | **Essence Callout** (narrow 60% width) | `.callout-essence` + `max-width: 60%` | DD + **CD width modulation** | VARIANT |
| 6 | **Info Callout** | `.callout-info` | DD-001+ | NO |
| 7 | **Tip Callout** | `.callout-tip` | DD-001+ | NO |
| 8 | **Challenge Callout** | `.callout-challenge` | DD-001+ | NO |
| 9 | **Code Block** (dark theme) | `.code-block`, `.code-label`, syntax classes | DD-001+ | NO |
| 10 | **Inline Code** | `code:not(pre code):not(.code-block code)` | DD-001+ | NO |
| 11 | **Reasoning Component** (2-column) | `.reasoning`, `.reasoning-header`, `.reasoning-columns`, `.reasoning-col` | AD phase | NO |
| 12 | **Task Component** (checklist) | `.task-component`, `.task-header`, `.task-list`, `.task-checkbox` | OD/AD | NO |
| 13 | **Breathing Transition** | `.transition--breathing` + `.transition-essence` | **CD-NEW (layout)** | LAYOUT ONLY |
| 14 | **Choreography Hub** | `.choreography-hub` | AD-005 | NO |
| 15 | **Choreography Spoke** | `.spoke`, `.spoke-header`, `.spoke-transition` | AD-005 | NO |
| 16 | **Confidence Gap Spacers** | `.confidence-gap-moderate/breathing/wide` | AD-004 (spacing) | NO |
| 17 | **Section Title** | `.section-title` | DD/OD convention | NO |
| 18 | **Footer** | `.page-footer`, `__inner`, `__id`, `__rule` | DD-001+ | NO |
| 19 | **Skip Link** | `.skip-link` | All phases | NO |
| 20 | **RAR Block** (inline monospace) | Inline styles in `<div>` | CD convention | METADATA ONLY |

### Key CSS Properties

- **border-radius:** 0 (global enforcement)
- **box-shadow:** none (`:root` token)
- **Borders:** 4px (established strata + callout left), 3px (structural + probable strata), 1px (speculative strata + separator). ZERO 2px.
- **Border-weight gradient:** 4px (Established) -> 3px (Probable) -> 1px (Speculative) -> 0px (Open). This is the spiral axis visualization from AD-F-014.
- **Spacing gradient:** 24px (Established) -> 32px (Probable) -> 48px (Speculative) -> 64px (Open). Confidence-proportional per AD-F-015.
- **Essence max-width:** 60% -- TIDAL density modulation. This is the only width-modulated component.
- **Backgrounds:** `#FEF9F5` (zone-sparse), `#FFFFFF` (zone-dense), `#FAF5ED` (zone-breathing), `#1A1A1A` (header/footer/code). All opaque.
- **Breathing transition:** margin 80px 0, padding 48px 0, border-top/bottom 3px solid, background `#FAF5ED`.

### Recombination vs New

The **Essence Callout at 60% max-width** is the closest to a new variant. The component is the same DD-origin callout (2-zone, 4px left border, Instrument Serif italic), but the `max-width: 60%` creates TIDAL density modulation -- narrow Essence vs full-width Code blocks. This is a CSS property override, not a new component.

The **Breathing Transition** (`.transition--breathing`) is a layout spacer with 80px margin, 3px structural borders top/bottom, breathing zone background, and a centered Essence-style text. This is a CD-level layout innovation combining breathing-zone spacing from AD-F-025 with Essence typography.

The **border-weight gradient** (4px/3px/1px) on strata is inherited directly from AD-F-014. CD applies it but did not invent it.

---

## CD-005: Multi-Axis Transition

**URL:** `CD-005-multi-axis-transition.html`
**Combination:** DD:WAVE | OD:SPATIAL | AD:Z-PATTERN + F-PATTERN + BENTO GRID
**Lines:** 1,999 | **Content Topic:** Testing strategy

### Component Catalog

| # | Component | CSS Class(es) | Origin | New in CD? |
|---|-----------|---------------|--------|------------|
| 1 | **Header** (full-bleed dark) | `header`, `.header-inner`, `.meta-line` | DD-001+ | NO |
| 2 | **Version Badge** | `.version-badge` | OD phase | NO |
| 3 | **Section Heading** | `.section-heading` | DD/OD convention | NO |
| 4 | **Z-Sweep** (definition pair) | `.z-sweep`, `.z-sweep--reverse`, `.z-term`, `.z-def` | AD-001 (Z-pattern axis) | NO |
| 5 | **Z-Term Label** | `.z-term__label`, `.z-term__text` | AD-001 | NO |
| 6 | **F-Heading** (left-spine) | `.f-heading` | AD-002 (F-pattern axis) | NO |
| 7 | **F-Content Block** | `.f-content-block` | AD-002 | NO |
| 8 | **Bento Grid** (4-column) | `.bento-grid`, `.bento-item`, `--large`, `--wide` | AD-003 (bento grid) | NO |
| 9 | **Bento Item Label/Title** | `.bento-item__label`, `.bento-item__title` | AD-003 | NO |
| 10 | **File Tree** (dark theme) | `.file-tree`, `.file-tree__label`, `__item`, `--l1/l2/l3`, `__dir/file/comment` | DD/OD | NO |
| 11 | **Decision Matrix** (framed) | `.decision-matrix`, `__header`, `__header-label/title`, `.row-highlight`, `.cell-best/ok/weak` | OD/AD | NO |
| 12 | **Core Abstraction** (principle + code) | `.core-abstraction`, `__principle`, `__principle-label/text`, `__code` | AD phase | NO |
| 13 | **Reasoning Component** (2-column + summary) | `.reasoning`, `__header`, `__columns`, `__column`, `__summary` | AD phase | NO |
| 14 | **Task Component** (checklist) | `.task-component`, `__header`, `__list`, `__item` | OD/AD | NO |
| 15 | **Essence Callout** | `.callout.callout--essence` | DD-001+ | NO |
| 16 | **Info Callout** | `.callout.callout--note` | DD-001+ | NO |
| 17 | **Tip Callout** | `.callout.callout--tip` | DD-001+ | NO |
| 18 | **Gotcha Callout** | `.callout.callout--gotcha` | DD-001+ | NO |
| 19 | **Challenge Callout** | `.callout.callout--challenge` | DD-001+ | NO |
| 20 | **Code Snippet** (dark `<pre>`) | `pre`, syntax classes | DD-001+ | NO |
| 21 | **Inline Code** | `code:not(pre code)` | DD-001+ | NO |
| 22 | **Smooth Transition** (Z->F) | `.transition--smooth`, `__line`, `__heading` | **CD-NEW (layout)** | LAYOUT ONLY |
| 23 | **Bridge Transition** (F->Bento) | `.transition--bridge` + contained callout | **CD-NEW (layout)** | LAYOUT ONLY |
| 24 | **Footer** | `.page-footer`, `__inner`, `__id`, `__rule` | DD-001+ | NO |
| 25 | **Skip Link** | `.skip-link` | All phases | NO |

### Key CSS Properties

- **border-radius:** 0 (global enforcement)
- **box-shadow:** none
- **Borders:** 3px structural, 4px semantic (callout left + Z-term left + F-heading left), 1px separator. ZERO 2px.
- **Z-sweep grid:** `1fr 1.618fr` (golden ratio) for normal sweep, `1.618fr 1fr` for reversed. Gap: 32px.
- **Bento grid:** 4-column (`repeat(4, 1fr)`), gap 32px.
- **Smooth transition:** padding 48px 0, hr with `border-top: 1px`, heading below.
- **Bridge transition:** background `#FAF5ED`, padding 64px 32px, margin 48px 0, border-top/bottom 3px solid. Contains an Info callout as intermediary.
- **Decision matrix colors:** `.cell-best` = `--accent-green`, `.cell-ok` = `--color-text-secondary`, `.cell-weak` = `--accent-coral`.
- **Task checkbox:** 14px square, 1px border, generated via `::before` pseudo-element.
- **Responsive:** 960px collapses bento to 1-col, 768px collapses Z-sweep and reasoning to 1-col.

### Recombination vs New

CD-005 is the ONLY exploration testing 3 axis patterns sequentially. The **Smooth Transition** and **Bridge Transition** are CD-level layout innovations implementing the AD-F-025 transition grammar. The Smooth Transition uses a minimal 1px separator + section heading (48px gap). The Bridge Transition uses a full breathing zone with Info callout as intermediary (64px gap). These are compositional grammar, not atomic components.

Every component inside the axis zones (Z-sweep, F-heading, Bento cell, File Tree, Decision Matrix, Core Abstraction, Reasoning, Task, all 5 callout types, Code Snippet) is a direct reuse from DD/OD/AD.

---

## CD-006: Pilot Migration (Crown Jewel)

**URL:** `CD-006-pilot-migration.html`
**Combination:** ALL 5 axes (Z, F, Bento, Spiral, Choreography) + ALL 11 component types
**Lines:** 2,064 | **Content Topic:** Building your first KortAI documentation page

### Component Catalog

| # | Component | CSS Class(es) | Origin | New in CD? |
|---|-----------|---------------|--------|------------|
| 1 | **Header** (full-bleed dark) | `header`, `.header-inner`, `.header-meta`, `.header-title` | DD-001+ | NO |
| 2 | **Version Badge** | `.version-badge` | OD phase | NO |
| 3 | **Table of Contents** | `.toc`, `.toc-list`, `.toc-number`, `.toc-title`, `.toc-density` | **CD-006 specific** | NEW COMPONENT |
| 4 | **Section Meta** | `.section-meta` | CD convention | VARIANT |
| 5 | **Drop Cap** | `.drop-cap::first-letter` | **CD-006 specific** | NEW VARIANT |
| 6 | **Spiral Strata** | `.spiral-strata`, `.stratum`, `--established/probable/speculative` | AD-004 (spiral axis) | NO |
| 7 | **Stratum Label** | `.stratum-label` | AD-004 | NO |
| 8 | **Core Abstraction** (label + principle + proof) | `.core-abstraction`, `-label`, `-principle`, `-proof` | AD phase | NO |
| 9 | **Z-Hero Grid** | `.z-hero`, `.z-primary/secondary/diagonal/terminal` | AD-001 (Z-pattern) | NO |
| 10 | **Q&A Block** | `.qa-block`, `.qa-question`, `.qa-answer` | AD-001 (Z-pattern Q&A) | NO |
| 11 | **F-Movement** | `.f-movement` | AD-002 (F-pattern) | NO |
| 12 | **Bento Grid** (4-column) | `.bento-grid`, `.bento-item`, `--wide`, `--large` | AD-003 (bento grid) | NO |
| 13 | **Choreography Hub** | `.choreo-hub` | AD-005 (choreography) | NO |
| 14 | **Choreography Spokes** (3-column) | `.choreo-spokes`, `.choreo-spoke` | AD-005 | NO |
| 15 | **Decision Matrix** | `.decision-matrix`, `-label`, `.recommended` | OD/AD | NO |
| 16 | **Reasoning Component** (2-column) | `.reasoning`, `-label`, `-question`, `-columns`, `-column`, `-recommendation` | AD phase | NO |
| 17 | **Task Component** (checklist) | `.task-component`, `.task-label`, `.task-list`, `.task-checkbox` | OD/AD | NO |
| 18 | **File Tree** (breathing bg variant) | `.file-tree`, `.file-tree-label`, `.file-tree-item`, `--l1/l2/l3`, `.file-tree-icon` | DD/OD | NO |
| 19 | **Info Callout** | `.callout.callout--info` | DD-001+ | NO |
| 20 | **Tip Callout** | `.callout.callout--tip` | DD-001+ | NO |
| 21 | **Gotcha Callout** | `.callout.callout--gotcha` | DD-001+ | NO |
| 22 | **Essence Callout** | `.callout.callout--essence` | DD-001+ | NO |
| 23 | **Challenge Callout** | `.callout.callout--challenge` | DD-001+ | NO |
| 24 | **Code Snippet** (dark block) | `.code-block`, `.code-label`, syntax classes | DD-001+ | NO |
| 25 | **Inline Code** | `code:not(pre code):not(.code-block code)` | DD-001+ | NO |
| 26 | **Smooth Transition** | `.transition--smooth` | CD layout | LAYOUT ONLY |
| 27 | **Bridge Transition** | `.transition--bridge` | CD layout | LAYOUT ONLY |
| 28 | **Breathing Transition** | `.transition--breathing` | CD layout | LAYOUT ONLY |
| 29 | **Footer** | `.page-footer`, `__inner`, `__id`, `__rule` | DD-001+ | NO |
| 30 | **Skip Link** | `.skip-link` | All phases | NO |

### Key CSS Properties

- **border-radius:** 0 (global enforcement)
- **box-shadow:** none
- **`--type-page: 3rem`** -- CD-006 DIVERGENCE from standard 2.5rem. Crown jewel override (S9 divergence).
- **Drop cap:** `font-size: 3.5em`, `float: left`, `line-height: 0.8`, `color: #E83025`. First-letter styling.
- **Callout backgrounds:** CD-006 uses **custom callout backgrounds** instead of zone tokens:
  - Info: `#F5F9FE` (light blue tint)
  - Tip: `#F2F9F4` (light green tint)
  - Gotcha: `#FEF6F5` (light coral tint)
  - Essence: `var(--color-zone-breathing)` = `#FAF5ED`
  - Challenge: `#FFFBF2` (light amber tint)
  - Core Abstraction label: `#F8F5FE` (light purple tint)
  - Reasoning recommendation: `#F2F9F4` (light green tint)
- **Essence body font-size:** `1.125rem` (18px) -- slightly larger than standard `1rem`.
- **Core Abstraction principle font-size:** `1.25rem` (20px) -- larger than standard.
- **Transition types implemented:** Smooth (48px + 1px border), Bridge (64px + breathing bg), Breathing (80px + 3px border).
- **Z-hero grid:** `1.618fr 1fr` (golden ratio).
- **Bento grid:** 4-column, gap 24px (`--space-6`, vs 32px in other CDs).
- **Choreography spokes:** 3-column grid, gap 24px.
- **Responsive:** 960px collapses bento/choreo, 768px collapses everything, 480px further font-size reduction.

### Recombination vs New

CD-006 introduces TWO genuinely new elements:

1. **Table of Contents (`.toc`)**: A navigation component with numbered items, title text, and density type annotation. This is NEW -- no prior DD/OD/AD exploration has a TOC. It uses `background: #FAF5ED`, `border: 3px solid`, `list-style: none`, and a flex layout with `gap: 8px`. The `.toc-number` uses mono font at meta size, `.toc-density` shows axis pattern type.

2. **Drop Cap (`.drop-cap::first-letter`)**: A typographic treatment using `font-size: 3.5em`, `float: left`, `color: #E83025`. This is a genuinely new visual element not present in any prior exploration.

CD-006 also introduces **custom callout backgrounds** (`#F5F9FE`, `#F2F9F4`, `#FEF6F5`, `#FFFBF2`, `#F8F5FE`) that give each callout type a subtle tinted background instead of using the standard zone tokens. This is a DIVERGENCE from the convention spec but was explicitly permitted as a crown jewel (S9 divergence).

---

## Cross-CD Component Summary

### Components Present Across ALL 4 CD Explorations

| Component | CD-003 | CD-004 | CD-005 | CD-006 | Origin |
|-----------|--------|--------|--------|--------|--------|
| Header (dark, full-bleed) | YES | YES | YES | YES | DD |
| Footer (dark, 3px red top) | YES | YES | YES | YES | DD |
| Skip Link | YES | YES | YES | YES | DD |
| Info Callout | YES | YES | YES | YES | DD |
| Tip Callout | YES | YES | YES | YES | DD |
| Essence Callout | YES | YES | YES | YES | DD |
| Code Snippet (dark) | YES | YES | YES | YES | DD |
| Inline Code | YES | YES | YES | YES | DD |
| Version Badge | YES | YES | YES | YES | OD |

### Components in 3 of 4 CDs

| Component | CD-003 | CD-004 | CD-005 | CD-006 | Origin |
|-----------|--------|--------|--------|--------|--------|
| Gotcha Callout | YES | -- | YES | YES | DD |
| Challenge Callout | YES | YES | -- | YES | DD |
| Reasoning Component | YES | YES | YES | YES | AD |
| Task Component | -- | YES | YES | YES | OD/AD |
| Decision Matrix | YES | -- | YES | YES | OD/AD |
| File Tree | YES | -- | YES | YES | DD/OD |

### Components in 2 of 4 CDs

| Component | CD-003 | CD-004 | CD-005 | CD-006 | Origin |
|-----------|--------|--------|--------|--------|--------|
| Core Abstraction | YES | -- | YES | YES | AD |
| Bento Grid | YES | -- | YES | YES | AD-003 |
| Choreography Hub/Spokes | YES | YES | -- | YES | AD-005 |
| Spiral Strata | -- | YES | -- | YES | AD-004 |
| Confidence Badge | -- | YES | -- | -- | OD-004 |
| Z-Sweep / Z-Hero | -- | -- | YES | YES | AD-001 |
| F-Heading / F-Movement | -- | -- | YES | YES | AD-002 |
| Q&A Block | -- | -- | -- | YES | AD-001 |

### CD-Only Elements

| Element | Type | Where | Genuinely New? |
|---------|------|-------|----------------|
| Table of Contents | Component | CD-006 only | YES -- new atomic component |
| Drop Cap | Typographic treatment | CD-006 only | YES -- new visual element |
| Smooth Transition | Layout mechanism | CD-003, CD-005, CD-006 | Layout grammar, not component |
| Bridge Transition | Layout mechanism | CD-005, CD-006 | Layout grammar, not component |
| Breathing Transition | Layout mechanism | CD-004, CD-006 | Layout grammar, not component |
| Essence at 60% width | CSS variant | CD-004 only | Property override, not new component |
| Custom callout backgrounds | CSS variant | CD-006 only | Crown jewel divergence |
| Section Meta labels | Convention | CD-006 | Convention, not component |
| RAR Block | Metadata | CD-003, CD-004 | Metadata, not visual component |

---

## Answer to the Central Question

**Does CD introduce ANY new atomic primitives?**

Almost none. Out of ~30 distinct component types cataloged across CD-003 through CD-006:

- **2 genuinely new elements:** Table of Contents (CD-006) and Drop Cap (CD-006). Both appear only in the crown jewel pilot migration page.
- **3 layout mechanisms:** Smooth, Bridge, and Breathing transitions. These implement AD-F-025 transition grammar at the CD scale. They are compositional grammar, not reusable components.
- **2 CSS variants:** Essence at 60% width (CD-004) and custom callout backgrounds (CD-006). These are property overrides on existing components.
- **~25 components** are direct reuses from DD, OD, and AD phases with identical visual DNA.

**CD exclusively recombines existing components.** Its innovation is in:
1. **Transition grammar** -- how sections connect (Smooth/Bridge/Breathing)
2. **Multi-axis sequencing** -- multiple axis patterns on one page (CD-005, CD-006)
3. **Compositional rules** -- velocity, temperature, weight, proximity interleaving
4. **Combination findings** -- documenting HOW components interact when placed together

The design system's component vocabulary was essentially complete by the end of AD. CD's contribution is the grammar that governs how those components compose.

---

## Shared CSS Properties Across All 4 CDs

| Property | Value | Consistent? |
|----------|-------|-------------|
| `--border-radius` | `0` | YES -- all 4 |
| `--box-shadow` | `none` | YES -- all 4 |
| `--color-primary` | `#E83025` | YES -- all 4 |
| `--color-background` | `#FEF9F5` | YES -- all 4 |
| `--color-text` | `#1A1A1A` | YES -- all 4 |
| `--color-text-secondary` | `#666666` | YES -- all 4 |
| `--color-border` | `#E0D5C5` | YES -- all 4 |
| `--font-display` | `'Instrument Serif'` | YES -- all 4 |
| `--font-body` | `'Inter'` | YES -- all 4 |
| `--font-mono` | `'JetBrains Mono'` | YES -- all 4 |
| `--type-page` | `2.5rem` | 3 of 4 (CD-006 uses `3rem`) |
| `--type-section` | `1.625rem` | YES -- all 4 |
| `--type-body` | `1rem` | YES -- all 4 |
| `--type-code` | `0.875rem` | YES -- all 4 |
| `--type-meta` | `0.75rem` | YES -- all 4 |
| `--space-chapter` | `64px` | YES -- all 4 |
| max-width (container) | `1100px` | YES -- all 4 |
| Header bg | `#1A1A1A` | YES -- all 4 |
| Header border-bottom | `3px solid #E83025` | YES -- all 4 |
| Footer bg | `#1A1A1A` | YES -- all 4 |
| Footer border-top | `3px solid #E83025` | YES -- all 4 |
| Callout border-left | `4px solid [accent]` | YES -- all 4 |
| Code block bg | `#1A1A1A` | YES -- all 4 |
| Code block border | `3px solid #E0D5C5` | YES -- all 4 |

### CD-006 Divergences (Crown Jewel)

1. `--type-page: 3rem` (vs standard 2.5rem)
2. Custom callout background colors (vs zone tokens)
3. Essence callout body at `1.125rem` (vs standard `1rem`)
4. Core Abstraction principle at `1.25rem` (vs standard `1.375rem`)
5. Bento grid gap `24px` (vs `32px` in CD-003/CD-005)
6. Drop cap first-letter treatment
7. Table of Contents component

---

## Soul Compliance (All 4 CDs)

| Soul Check | CD-003 | CD-004 | CD-005 | CD-006 |
|------------|--------|--------|--------|--------|
| `border-radius: 0` | PASS | PASS | PASS | PASS |
| `box-shadow: none` | PASS | PASS | PASS | PASS |
| No `filter: drop-shadow()` | PASS | PASS | PASS | PASS |
| Instrument Serif italic for Essence/Core ONLY | PASS | PASS | PASS | PASS |
| 2-zone callouts + 4px left border | PASS | PASS | PASS | PASS |
| No physical-movement animation | PASS | PASS | PASS | PASS |
| opacity: 1 on all backgrounds | PASS | PASS | PASS | PASS |
| 3-category borders (1px, 3px, 4px) | PASS | PASS | PASS | PASS |
| `#E83025` only primary accent | PASS | PASS | PASS | PASS |

**Result: 0 soul violations across all 4 CD explorations.**

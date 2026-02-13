# Visual Audit: OD-003 through OD-006 — Component Catalog

**Agent:** od-auditor
**Date:** 2026-02-12
**Method:** Full-page Playwright screenshots at 1280px + CSS source analysis of all 4 files
**Files audited:**
- OD-003-task-based.html (~1,100 lines)
- OD-004-confidence.html (~1,400 lines)
- OD-005-spatial.html (~1,300 lines)
- OD-006-creative.html (~2,000+ lines)

---

## Section 1: Shared Components (Present in All or Most OD Files)

### 1.1 Exploration Header (Dark)
- **Present in:** OD-003, OD-004, OD-005, OD-006
- **CSS:** `.exploration-header` — `background: #1A1A1A; border-bottom: 3px solid #E83025; padding: 64px 32px`
- **Inner wrapper:** `.exploration-header__inner` — `max-width: 860px; margin: 0 auto`
- **Sub-components:**
  - `.exploration-id` — Mono, 12px, uppercase, letter-spacing 0.15em, #666666
  - `.exploration-title` — Instrument Serif, italic, 2.5rem (OD-003/004/005) or 3rem (OD-006), #FAFAF5
  - `.exploration-hypothesis` — 16px, #666666, max-width 70ch
  - `.exploration-meta` — Flex row, mono 12px, uppercase, values in #E83025
- **OD-006 variant:** Uses `.page-header` instead of `.exploration-header`. Has `.page-header__thesis` (4px left border #E83025, italic Instrument Serif 1.125rem on dark bg). Also uses `--type-page: 3rem` (48px) instead of the standard 2.5rem (40px) — sanctioned override.
- **border-radius:** 0 everywhere. **box-shadow:** none.

### 1.2 Page Container
- **Present in:** OD-003, OD-004, OD-005
- **CSS:** `.page-container` — `max-width: 860px; margin: 0 auto; padding: 0 24px; padding-bottom: 80px`
- **OD-006 variant:** Uses `.main-content` instead — same max-width 860px but with a 3-column grid layout wrapping it (`.page-layout`: `grid-template-columns: 200px 48px 1fr`)

### 1.3 Callout System (Family DNA)
- **Present in:** ALL 4 files
- **Structure:** 2-zone (label + body), 4px left border
- **CSS base:** `.callout` — `border-left: 4px solid; background: #F0EBE3; margin: 24px 0`
- **Label:** `.callout__label` — Mono, 12px, uppercase, letter-spacing 0.08-0.12em, 600 weight
- **Body:** `.callout__body` — 14px (OD-003/004) or 16px (OD-006), line-height 1.7
- **Variants by border-left-color:**
  - `--essence` — #E83025 (OD-003/004) or #7C3AED purple (OD-006). Body: Instrument Serif italic, 15px
  - `--tip` — #4A9D6B green
  - `--checkpoint` — #4A9D6B green, background #F4FAF6 (OD-004) or #F0EBE3 (OD-003)
  - `--warning` — #D97706 amber
  - `--gotcha` — #C97065 coral
  - `--note` — #4A90D9 blue
  - `--insight` — #4A90D9 blue (OD-006 only)
  - `--discovery` — #4A9D6B green (OD-006 only)
  - `--prereq` — #E83025 (OD-003 only)
- **OD-006 difference:** Callout has `background: transparent` instead of `#F0EBE3`. Padding uses `space-4 space-6` instead of having separate label/body sections with border-bottom. This is a structural simplification — OD-006 callouts lack the visible zone separator line.

### 1.4 Code Blocks
- **Present in:** OD-003, OD-004, OD-005, OD-006
- **OD-003/OD-004:** Dark theme — `background: #1A1A1A; color: #FAFAF5; border: 3px solid #E0D5C5; padding: 24px 32px`
  - `.code-block__label` — Mono 12px uppercase, #666666, border-bottom 1px #333333
  - Syntax colors: `.code-keyword` #E83025, `.code-string` #6B9B7A, `.code-comment` #666666 italic, `.code-function` #4A7C9B
- **OD-005:** Rich code blocks with line numbers, copy buttons, language badges — significantly more complex
  - `.code-block-enhanced` with `.code-header` (language + copy button), `.code-line-numbers`, `.code-content`
  - Background: light (#F0EBE3) not dark
  - Line numbers column, copy button with border 3px solid #1A1A1A
- **OD-006:** Light theme — `background: #F0EBE3; padding: 24px; border-radius: 0`
  - `.code-block__label` positioned absolute top-right
  - Syntax: `.keyword` #E83025, `.string` #4A9D6B, `.comment` #666666
  - No visible border on the block itself (unlike OD-003/004 which have 3px border)

### 1.5 Scroll-Driven Reveal Animations
- **Present in:** ALL 4 files
- **CSS:** `.reveal` — `animation: arrive 0.5s ease-out both; animation-timeline: view(); animation-range: entry 10% entry 40%`
- Chromium-only with `@supports not (animation-timeline: view())` fallback (opacity: 1, transform: none)
- All files include `@media (prefers-reduced-motion: reduce)` override
- OD-006 adds `.reveal-delay-2` (entry 20% entry 50%)

### 1.6 Skip Link + Focus Visible
- **Present in:** ALL 4 files
- `.skip-link` — position absolute, top -100%, background #E83025, color #FEF9F5
- `*:focus-visible` — outline: 3px solid #E83025, outline-offset: 2px

### 1.7 Inline Code
- **Present in:** ALL 4 files
- `p code, li code` — Mono, 14px (0.875rem), background #F0EBE3, padding 1px 5px, border 1px solid #E0D5C5

---

## Section 2: OD-003 Unique Components (Task-Based / ISLANDS + BOOKENDS)

### 2.1 Archipelago Map (Header)
- `.archipelago-map` — CSS Grid, `repeat(6, 1fr)`, gap 8px, in dark header
- `.archipelago-tile` — 3px solid border, centered text
  - `.archipelago-tile__number` — Mono 18px, 600 weight, #FEF9F5
  - `.archipelago-tile__label` — Mono 9px uppercase
  - `.archipelago-tile__duration` — Mono 9px, #666666
  - Color coding: `--beginner` green (#4A9D6B), `--intermediate` red (#E83025), `--advanced` purple (#7C3AED)
- **UNIQUE: miniature task map in header is a fractal echo of the page structure**

### 2.2 Bookend Front (Dense Orientation)
- `.bookend-front` — `background: #FFFFFF; border-left: 4px solid #E83025; padding: 32px; margin-top: 48px`
- Sub-components:
  - `.bookend-front__label` — "You Are Here", mono 12px uppercase, #E83025
  - `.bookend-front__title` — Instrument Serif italic, 1.625rem
  - `.bookend-front__description` — 15px, #666666
  - `.task-overview` — 2-column grid, 10px square markers with complexity colors
  - `.bookend-meta` — Flex row with border-top 3px, items: Total Time, Prerequisites, Difficulty

### 2.3 Task Islands (Collapsible `<details>`)
- `.task-island` — `background: #FFFFFF; border: 3px solid #E0D5C5; border-left: 4px solid [complexity-color]`
  - `[open]` state changes background to `#F0EBE3`
  - `--featured` variant uses `outline: 4px solid #1A1A1A; outline-offset: 4px`
- Summary layout: flex with number box + title block + toggle
  - `.task-island__number` — 48x48px box, mono 20px, 3px border, complexity-colored
  - `.task-island__label` — "Task Island X of 6", mono 12px
  - `.task-island__title` — Instrument Serif italic, 1.375rem
  - `.task-duration` — Mono 12px in 3px bordered box
  - `.task-complexity` — Mono 10px uppercase, 1px colored border badge
  - `.task-island__toggle` — 24x24px box with +/- icon, 3px border
- **UNIQUE: Collapsible architecture with Task 1 open by default, progressive complexity gradient**

### 2.4 Task Steps (Numbered)
- `.task-steps` — Counter-reset list
- `.task-step` — Flex with square marker + content, connected by 1px vertical line
  - `.task-step__marker` — 32x32px, mono 13px, 3px border, counter-driven numbers
  - `.task-step__title` — 600 weight, 15px
  - `.task-step__description` — 14px, #666666

### 2.5 Troubleshooting Accordion
- `.troubleshoot` — `border: 3px solid #C97065`
- Summary: background #F0EBE3, mono 12px uppercase, coral-colored
  - `::before` toggle: 20x20px box with +/- icon, 3px coral border
- Body: 14px, border-top 1px coral

### 2.6 Bookend Back (3-beat Decompression)
- `.bookend-back` — `background: #FFFFFF; border: 3px solid #E0D5C5; border-left: 4px solid #E83025; padding: 32px`
- Sub-components:
  - `.bookend-reflection` — Purple-accented, `border-left: 4px solid #7C3AED; background: #FAF5ED`
    - Title: mono 12px uppercase, purple
    - Body: Instrument Serif italic, 15px
  - `.verification-list` — Checkmark list with 18x18px squares, 3px green border, separator lines
  - `.whats-next` — Arrow-marked list with 3px bordered container

### 2.7 Essence Pullquote (Centered)
- `.essence-quote` — Instrument Serif italic, 1.625rem, border-top + border-bottom 3px #E83025, centered, max-width 640px

### 2.8 Sparse Sea Separators
- `.sparse-sea` — height: 80px, empty space between islands
- `.sparse-sea--large` — height: 96px

### 2.9 Section Labels
- `.section-label` — Mono 10px uppercase, centered, #666666

### 2.10 Pattern Summary Table
- `.pattern-summary` — Background #F0EBE3, border 3px solid #E0D5C5, mono headers 10px

---

## Section 3: OD-004 Unique Components (Confidence-Based / GEOLOGICAL + CRESCENDO)

### 3.1 Geological Column (Header Minimap)
- `.geological-column` — Flex row in dark header, border-top 1px #333333
  - 4 strata indicators with bars of different heights encoding confidence:
  - `--established`: 4px height (white bar)
  - `--probable`: 3px height (blue bar)
  - `--speculative`: 2px height (amber bar) — INTENTIONAL thin border
  - `--open`: 1px height (purple bar) — INTENTIONAL thin border
  - Labels in mono 12px uppercase
- **UNIQUE: Border-weight-as-meaning system. Thin borders deliberately signal lower confidence (Rule 5 inversion)**

### 3.2 Geological Survey (Overview Block with Solid Offset)
- `.geological-survey` — `background: white; border: 3px solid #E0D5C5; border-left: 4px solid #E83025; padding: 32px`
- **Solid offset pseudo-element:** `::after` — `top: 4px; left: 4px; background: #1A1A1A; z-index: -1`
- Sub-components:
  - `.geological-survey__label` — "Geological Survey", mono 12px, #E83025
  - `.geological-survey__title` — Instrument Serif italic, 1.625rem
  - `.strata-inventory` — 2-column grid with 10px square markers colored by stratum
  - `.survey-meta` — Flex row, border-top 3px, Total/Range/Reading Time/Updated
- **UNIQUE: First OD to use the solid offset technique (neobrutalist depth without box-shadow)**

### 3.3 Confidence Switcher (Tab Bar)
- `.confidence-switcher` — Flex, gap 3px, background #E0D5C5 (gap fill)
  - `.confidence-switcher__option` — Mono 12px uppercase, white background
  - `--active` variant: font-weight 600, color #E83025, border-bottom 3px #E83025
  - 3 options: "Facts Only" / "Full Analysis" / "Everything"
  - ARIA: `role="tablist"`, options as `role="tab"`
- **UNIQUE: Visual-only confidence filter (no JS state persistence)**

### 3.4 Geological Strata (4 Confidence Layers)
- `.stratum` — Base container with `margin-bottom: 64px`
- `.stratum__header` — Contains depth label, title, epistemic marker, evidence DNA
- **Stratum 1 — Established (SPARSE):**
  - `border-left: 4px solid #1A1A1A; background: #FEF9F5; padding: 40px 0`
  - Content: `max-width: 720px` (narrower = sparse), `line-height: 1.8` (generous)
  - Type: h3 at 1.25rem, body at 15px
- **Stratum 2 — Probable (MODERATE):**
  - `border-left: 3px solid #4A90D9; background: #FFFFFF; padding: 32px 0`
  - Body: `line-height: 1.7`
  - Type: h3 at 1.2rem, body at 15px
- **Stratum 3 — Speculative (DENSE):**
  - `border-left: 2px solid #D97706; background: #FFFFFF; padding: 20px 0` — 2px INTENTIONAL semantic
  - Body: `line-height: 1.65` (tighter)
  - Type: h3 at 1.125rem, body at 14px (smaller)
- **Stratum 4 — Open Questions (DENSEST):**
  - `border-left: 1px solid #7C3AED; background: #FAF5ED; padding: 16px 0` — 1px INTENTIONAL semantic
  - Body: `line-height: 1.6` (tightest)
  - Type: h3 at 1.0625rem, body at 14px
- **UNIQUE: Entire typographic system (font size, line height, padding, border width) modulates with confidence level. This is the most sophisticated density-as-meaning system in all OD files.**

### 3.5 Epistemic Markers
- `.stratum__epistemic` — 13px, #666666, `border-left: 4px solid #E0D5C5; padding-left: 20px`
- "You are reading established practices..." disclosure text per EXT-CONF-005

### 3.6 Evidence DNA
- `.evidence-dna` — Flex row of meta items
  - `.evidence-dna__item` — Mono 12px uppercase: "Sources: 50+" / "Validation: Production-proven" / "Consensus: Industry-wide"
- **UNIQUE: Epistemic metadata visible at each stratum boundary**

### 3.7 Stratum Boundary Markers
- `.stratum-boundary` — `padding: 48px 0` (chapter-level), centered flex column
  - `.stratum-boundary__line` — `height: 3px; background: #E0D5C5`
  - `.stratum-boundary__label` — Mono 12px uppercase: "Entering Stratum 2: Probable"
  - `.stratum-boundary__scent` — Information scent text, centered, max-width 500px
  - `.stratum-boundary__progress` — Row of 10px square indicators (filled = completed, outlined = remaining)
  - `.progress-square` — 10px square, border 1px #E0D5C5, filled variant: background #E83025

### 3.8 Crux Blocks
- `.crux-block` — `border: 3px solid #E0D5C5; background: white; padding: 20px 24px`
  - `.crux-block__label` — "What Would Change This Rating", mono 12px, purple #7C3AED
  - `.crux-block__text` — 14px, #666666 with bold #1A1A1A for key phrases
- **UNIQUE: "What would change this confidence level?" — epistemic transparency unique to OD-004**

### 3.9 Comparison Grid
- `.comparison-grid` — 2-column CSS Grid, gap 3px, background #E0D5C5 (gap fill)
  - `.comparison-column` — white background, padding 24px
  - Column labels color-coded by confidence: established=#1A1A1A, probable=#4A90D9, speculative=#D97706
  - Square list markers (Soul Piece 5)

---

## Section 4: OD-005 Unique Components (Spatial / WAVE + ISLANDS)

### 4.1 WAVE Density Visualization
- `.wave-visualization` — White background, 4px left border #E83025
  - `.wave-diagram` — Flex, align-end, gap 3px, height 100px, border-bottom 3px
  - `.wave-bar` — Variable-height bars showing density oscillation:
    - Hub bars: 18px height (#E0D5C5)
    - Spoke bars: 70-85px height (#E83025 for first, #666666 for rest)
    - Gap bars: 12px height (#F0EBE3)
  - `.wave-labels` — Flex row showing "Hub (sparse)" through territory names
  - `.wave-annotation` — Explanatory text below diagram
- **UNIQUE: CSS bar chart visualizing the WAVE density pattern. No other OD has a density diagram.**

### 4.2 Territory Grid (Hub Map)
- `.territory-grid` — CSS Grid, `repeat(auto-fit, minmax(280px, 1fr))`, gap 24px
- `.territory-tile` — `border: 3px solid #1A1A1A; padding: 20px; background: white`
  - **Solid offset:** `::after` pseudo-element, 4px offset, 3px bordered outline at z-index -1
  - Hover: `border-color: #E83025; background: #F0EBE3` (flat, no transform — spirit compliant)
  - ARIA: `role="grid"` with tiles as `role="gridcell"`, keyboard arrow navigation
  - Sub-components:
    - `.territory-tile__marker` — 8px square, #E83025 (no border-radius)
    - `.territory-tile__name` — Instrument Serif italic, 20px
    - `.territory-tile__description` — 13px, #666666
    - `.territory-tile__badge` — Mono 10px uppercase, 1px #E83025 border
- **UNIQUE: Interactive grid with solid offset depth + ARIA grid role + keyboard navigation**

### 4.3 Spoke Sections (Content Islands)
- `.spoke` — `padding: 48px 0; scroll-margin-top: 16px`
- `.spoke-divider` — `height: 1px; background: #E0D5C5; margin: 80px 0` (island isolation)
- Sub-components:
  - `.breadcrumb` — Mono 11px uppercase, triangle separators, current item in Instrument Serif italic
  - `.spoke__heading` — Instrument Serif italic, 1.625rem, border-bottom 3px #E83025
  - `.spoke__intro` — 15px, #666666, max-width 60ch
  - `.spoke-grid` — 2-column grid (3fr content + 1fr sidebar)
    - `.spoke-content` — Main doctrine area
    - `.spoke-sidebar` — Reference cards, library lists, tools
  - "Return to Map" links back to hub

### 4.4 Enhanced Code Blocks (with Line Numbers + Copy)
- `.code-block-enhanced` with header, line numbers, and copy button
  - `.code-header` — Flex: language badge + copy button
  - `.code-line-number` — Mono, right-aligned, #666666
  - `.code-content` — Syntax highlighted with `.token-*` classes
  - Copy button: `border: 3px solid #1A1A1A`
- **UNIQUE: OD-005 is the only OD with rich code blocks (line numbers, language badges, copy buttons)**

### 4.5 Sidebar Reference Cards
- `.spoke-sidebar` — Grid area "references"
  - Key APIs lists, migration paths, library recommendations
  - Bordered container with mono headers
  - Cross-territory navigation links

### 4.6 Comparison Tables
- Standard tables with `border-collapse: collapse`, 1px cell borders
- Bold first column, pattern comparison data
- Used in Component Patterns and Data Fetching territories

### 4.7 ASCII Flowcharts
- Pre-formatted text blocks showing decision trees
- "State Selection Flowchart", "Performance Optimization Flowchart"
- Mono font, inline within content
- **UNIQUE: Text-based flowcharts instead of visual diagrams**

### 4.8 WAVE Density Indicator (Fixed Sidebar)
- Scroll-driven zone markers showing current density zone
- Fixed sidebar with "Zone" label
- **Only visible on wider viewports (>1024px)**

### 4.9 Footer Territory Summary
- Grid of linked territory tiles at page bottom
- Mirror of hub map with summary text
- Pipeline metadata line

---

## Section 5: OD-006 Unique Components (Creative Synthesis / ALL PATTERNS)

### 5.1 Scroll Witness (Fixed TOC with Progress Bars)
- `.scroll-witness` — Sticky, full-height, left sidebar, 3px right border
  - `.scroll-witness__title` — "Exploration Progress", mono 12px
  - `.toc__item` — Link with progress marker + label + mode tag
  - `.toc__marker` — 4px wide, 24px tall, 1px border, filled by `::after` pseudo-element
    - Fill driven by `--progress` CSS custom property tracked via `animation-timeline: view()`
  - `.toc__label` — 12px, 500 weight
  - `.toc__mode` — Mono 10px, shows "conversational -- PULSE" etc.
- **UNIQUE: CSS-only scroll progress tracking. The TOC markers fill as sections scroll into view. No JavaScript.**

### 5.2 Fractal Annotation Layer (Left Margin)
- `.fractal-annotations` — Sticky, full-height, left-most column, 1px right border, #FAF5ED bg
  - `.fractal-annotation` — Vertical text (`writing-mode: vertical-lr; transform: rotate(180deg)`)
  - 4 annotations: Page Scale, Section Scale, Component Scale, Character Scale
  - Each shows type ratio: "48px -> 26px (1.85x)"
  - Opacity 0.6 default, 1.0 when `.active`, color transitions to #E83025
- **UNIQUE: Makes DD-F-006 fractal self-similarity VISIBLE. No other exploration annotates its own architecture.**

### 5.3 Visual Index Grid (Specimen Sheet)
- `.visual-index` — `display: grid; grid-template-columns: repeat(3, 1fr); border: 3px solid #1A1A1A`
  - 6 cells, each with `.visual-index__preview` (4:3 aspect ratio) + `.visual-index__label`
  - **Pattern Echo miniatures (CSS-only):**
    - OD-001: `.mini-pulse` — Alternating narrow/wide bars
    - OD-002: `.mini-crescendo` — Increasing-height segments
    - OD-003: `.mini-islands` — Spaced square blocks
    - OD-004: `.mini-geological` — Stacked colored layers
    - OD-005: `.mini-wave` — Hub center with cross spokes
    - OD-006: `.mini-fractal` — Recursive 3x3 mini-grid (strange loop)
  - Cell label: Inter 600, 14px + Mono sublabel
- **UNIQUE: CSS-only miniature visual signatures of each OD pattern. OD-006's cell is self-referential (fractal strange loop).**

### 5.4 Q&A Pairs (Section 1 — Conversational/PULSE)
- `.qa-pair` — Container with `margin-bottom: 64px`
- `.question` — `max-width: 60%`, flex with 8px square marker #E83025
  - `.question__text` — Instrument Serif, 1.375rem
- `.answer` — `width: 100%; background: #FFFFFF; border-left: 4px solid #E0D5C5; padding: 24px 32px`
- **Width differential creates TIDAL density: narrow question, full-width answer**

### 5.5 Act Markers (Section 2 — Narrative/CRESCENDO)
- `.act-marker` — Flex with icon + label
  - `.act-marker__icon` — 24x24px, 3px border, mono 12px numeral (I, II, III)
  - `.act-marker__label` — "Exposition — The Problem", mono 12px uppercase
- `.act--exposition` — line-height 1.9 (SPARSE)
- `.act--rising` — line-height 1.7 (MODERATE)
- `.act--climax` — line-height 1.5 (DENSE)
- **UNIQUE: Line-height modulation encodes narrative tension/density**

### 5.6 Dual Lens Toggle (Section 2)
- `.dual-lens__toggle` — `border: 3px solid #1A1A1A; width: fit-content`
  - `.dual-lens__btn` — Mono 12px, uppercase, padding 8px 24px
  - `.active` state: dark bg, light text
- `.view-why` — Instrument Serif italic, 1.125rem (conceptual lens)
- `.view-how` — Mono 14px, background #F0EBE3 (implementation lens)
- **UNIQUE: Serif/monospace toggle between conceptual and technical views. Only interactive component invented specifically for OD-006.**

### 5.7 Task Islands (Section 3 — simplified from OD-003)
- `.task-island__header` — Flex with 28x28px number box (3px border #E83025)
- `.task-step` — `padding-left: 40px; border-left: 1px solid #E0D5C5; margin-left: 14px`
  - `.task-step__marker` — 6px square, #666666
- `.task-checkpoint` — 4px left border green, mono "CHECKPOINT" prefix
- **Simpler than OD-003: not collapsible, no complexity gradient, no duration badges**

### 5.8 Confidence Strata (Section 4 — simplified from OD-004)
- `.stratum--established` — 4px left border #1A1A1A, line-height 1.4, font-weight 500
- `.stratum--emerging` — 3px left border #666666, line-height 1.6, font-weight 400
- `.stratum--exploratory` — 1px left border #E0D5C5, line-height 1.8, font-weight 300, italic
- `.certainty-badge` — 8px square icon + mono 10px label
- **Simpler than OD-004: no survey, no evidence DNA, no crux blocks, but preserves border-width-as-confidence**

### 5.9 Hub Grid (Section 5 — simplified from OD-005)
- `.hub-grid` — `grid-template-columns: repeat(3, 1fr); gap: 24px`
- `.territory-tile` — Same solid offset technique as OD-005
  - `.territory-tile__name` — Instrument Serif, 1.375rem
  - `.territory-tile__desc` — 14px, #666666
  - `.territory-tile__density` — Mono 10px uppercase, #E83025
- Hover: `border-color: #E83025; background: #F5EDE0` (flat, no transform)
- **Simpler than OD-005: no ARIA grid role, no keyboard nav, no breadcrumbs, no spokes**

### 5.10 Synthesis Grid (Section 6)
- `.synthesis-grid` — 2-column grid, gap 32px
- `.synthesis-card` — `padding: 24px; border: 3px solid #E0D5C5`
  - `.synthesis-card__org` — Mono 12px uppercase, #E83025: "Conversational"
  - `.synthesis-card__density` — Instrument Serif, 1.375rem: "IS Pulse"
  - `.synthesis-card__proof` — 14px, #666666: explanation text
- **UNIQUE: The identity pairs ("Conversational IS Pulse") as visual cards**

### 5.11 Editorial Drop Caps
- `.section-opening::first-letter` — Instrument Serif, 4.2em, float left, #E83025
- **UNIQUE: Magazine-style serif drop caps at each section opening. No other OD uses this.**

### 5.12 Semantic Bridge (Concept-to-Code Hover)
- `.concept-link` — `border-bottom: 1px solid transparent`, hover reveals #E83025
- `.code-target` — `border-left: 3px solid transparent`, `.highlighted` state: border #E83025, bg #F0EBE3
- **UNIQUE: Hover a concept in prose, highlight corresponding code. Interactive cross-referencing.**

### 5.13 Section Dividers (Mode Transition)
- Separator between organizational modes: "Conversational -> Narrative"
- Centered text, mode labels, breathing whitespace
- OD-F-007: cognitive decompression when switching patterns

### 5.14 Collapsible Sections (`<details>`)
- `details` — 4px left border #E0D5C5
- `summary` — 14px, 600 weight, triangle marker that rotates 90deg on open
- Used for depth-on-demand within strata

### 5.15 Pull Quotes
- `.pull-quote` — Instrument Serif italic, 1.5rem, 4px left border #E83025, `margin: 48px 0`
  - `.pull-quote__attribution` — Mono 12px uppercase, #666666

### 5.16 Section Headers (Sticky)
- `.section-header` — `position: sticky; top: 0; background: #FEF9F5; z-index: 50`
  - `.section-header__number` — "Section 01", mono 12px, #E83025
  - `.section-header__title` — Instrument Serif, 1.625rem
  - `.section-header__mode` — "Conversational -- PULSE density", mono 12px, with 8px square indicator
  - Border-bottom transitions to #E83025 when scrolled
- **UNIQUE: Sticky section headers that show current organizational mode**

### 5.17 Footer (Culmination Spread)
- Dark background (#1A1A1A), extensive metadata listing
- Lists all creative techniques, research applied, soul compliance, fractal verification
- Pipeline position indicator

---

## Section 6: Component Count Summary

| Component Category | OD-003 | OD-004 | OD-005 | OD-006 |
|---|---|---|---|---|
| **Header variants** | Archipelago map | Geological column | Standard dark | Culmination spread |
| **Overview/survey** | Bookend front | Geological survey + offset | Wave visualization + Hub grid | Visual index (specimen) |
| **Primary structural** | Task islands (collapsible) | Geological strata (4 layers) | Spoke sections (6 territories) | 6 organizational sections |
| **Interactive** | Collapse/expand | Confidence switcher | Grid keyboard nav + copy btns | Dual lens toggle + Semantic bridge |
| **Navigation** | Section labels | Stratum boundaries + progress | Breadcrumbs + hub links | Scroll witness + sticky headers |
| **Epistemic** | -- | Evidence DNA + Crux blocks | -- | Certainty badges (simplified) |
| **Code blocks** | Dark theme, labeled | Dark theme, labeled | Enhanced (line numbers, copy) | Light theme, labeled |
| **Callout system** | 7 variants (prereq+) | 6 variants | 5 variants | 6 variants (insight+, discovery+) |
| **Meta-architecture** | -- | -- | -- | Fractal annotations + Pattern echo |
| **Total unique components** | ~10 | ~9 | ~8 | ~17 |

---

## Section 7: Key Observations for Tension Analysis

### 7.1 Components That Are Metaphor-Dependent (Layer 3 — Non-Extractable)
These components only make sense in their specific page context:

1. **OD-004 Geological Strata System** — Border-width-as-confidence (4px/3px/2px/1px) + inverse density (sparse=certain, dense=uncertain). The entire typographic modulation system (font size, line height, padding all change per stratum) is inseparable from the geological metaphor.

2. **OD-004 Evidence DNA** — "Sources: 50+ / Validation: Production-proven / Consensus: Industry-wide" only makes sense within confidence stratification.

3. **OD-004 Crux Blocks** — "What would change this confidence level?" is meaningless outside epistemic organization.

4. **OD-006 Fractal Annotation Layer** — Labels showing "Page Scale: 48px -> 26px (1.85x)" only exist because OD-006 is documenting its own architecture. Self-referential by nature.

5. **OD-006 Visual Index Pattern Echo** — Miniature CSS renderings of each OD's signature pattern. Only possible because OD-006 is a meta-documentation page.

6. **OD-006 Dual Lens Toggle** — Why/How serif/mono toggle embodies the "Organization IS Density" thesis. The switch between lenses IS the proof.

7. **OD-006 Scroll Witness** — Progress bars that fill as sections scroll. The tracking mechanism IS the fractal made visible.

### 7.2 Components That Are Extractable (Layer 2 — Reusable Vocabulary)
These could work in any page:

1. **Callout system** — 2-zone, 4px left border, color variants. Present in all files with minor variations.
2. **Code blocks** — Dark or light theme, labeled, syntax highlighted.
3. **Territory tiles with solid offset** — Reusable card pattern.
4. **Task steps with square markers** — Numbered procedure pattern.
5. **Comparison grids** — Side-by-side columns.
6. **Troubleshooting accordions** — Collapsible detail blocks.
7. **Breadcrumbs with triangle separators** — Navigation component.
8. **Bookend structure** — Dense front + sparse middle + dense back.

### 7.3 Soul Compliance Across All 4 Files
- `border-radius: 0` — Confirmed in all :root blocks and all components
- `box-shadow: none` — Confirmed in all :root blocks. Solid offset used instead where depth needed
- Instrument Serif — Used for all titles, essence callouts, questions, pull quotes
- Callout Family DNA — 2-zone structure with 4px left border maintained across all files
- Square markers — All indicator elements are square (no circles, no rounded)

### 7.4 Evolution Trajectory (OD-003 to OD-006)
- **Complexity increases:** OD-003 has ~10 unique components, OD-006 has ~17
- **Interactivity increases:** OD-003 has collapse/expand only; OD-006 has dual lens, semantic bridge, scroll tracking
- **Self-awareness increases:** OD-003 documents CI/CD (external topic); OD-006 documents itself (meta-documentation)
- **Metaphor depth increases:** OD-003 uses archipelago (straightforward spatial metaphor); OD-004 uses geological strata (confidence-as-depth); OD-006 proves organization=density (the page IS the argument)
- **Code block style diverges:** OD-003/004 dark theme, OD-005 enhanced with line numbers, OD-006 light theme minimal
- **Callout structure simplifies in OD-006:** OD-003/004 have visible zone separator (border-bottom on label); OD-006 removes it (transparent background, no separator)

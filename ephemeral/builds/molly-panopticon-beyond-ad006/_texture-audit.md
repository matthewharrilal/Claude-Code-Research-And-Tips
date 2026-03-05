# Texture and Craft Quality Audit

**File:** `_build-beta.html`
**Auditor:** Texture & Craft Quality Auditor
**Date:** 2026-03-03

---

## 1. CSS Variable Usage

### Custom Properties Defined: ZERO

The build defines **zero CSS custom properties**. All values are hardcoded throughout the 2,133-line `<style>` block. There are no `--corridor-width`, `--domain-accent`, or any content-semantic variables.

### Design System Token Usage

| Token | Token Value | Hardcoded Equivalent in Build | Usage |
|-------|------------|-------------------------------|-------|
| `--color-primary` | `#E83025` | `#E83025` | Used ~40+ times (hardcoded) |
| `--color-background` | `#FEF9F5` | `#FEF9F5` | Used ~15+ times (hardcoded) |
| `--color-text` | `#1A1A1A` | `#1A1A1A` | Used ~20+ times (hardcoded) |
| `--color-text-secondary` | `#666666` | `#666666` | Used ~25+ times (hardcoded) |
| `--color-border` | `#E0D5C5` | `#E0D5C5` | Used ~35+ times (hardcoded) |
| `--color-zone-breathing` | `#FAF5ED` | `#FAF5ED` | Used ~5 times (hardcoded) |
| `--font-display` | Instrument Serif | Instrument Serif | Used ~20+ times (hardcoded) |
| `--font-body` | Inter | Inter | Used ~10+ times (hardcoded) |
| `--font-mono` | JetBrains Mono | JetBrains Mono | Used ~25+ times (hardcoded) |
| `--border-structural` | 4px | 4px | Used correctly (hardcoded) |
| `--border-accent` | 3px | 3px | Used correctly (hardcoded) |
| `--border-micro` | 1px | 1px | Used correctly (hardcoded) |

**Token alignment: ~95%.** Values match the design system tokens almost perfectly, but they are all hardcoded rather than referencing `var(--token-name)`. The build uses the correct VALUES from the design system but not the correct MECHANISM (CSS custom properties).

**Verdict:** VALUES are correct. MECHANISM is missing. A `var()` refactor would improve maintainability but the actual visual output is token-compliant.

---

## 2. Typography

### Font Families Used: 3 (matches design system trinity)

1. **Instrument Serif** (italic) -- Display headings, philosophical quotes, epigraphs, pullquotes, essence callouts
2. **Inter** -- Body text, h4 headings, analysis prose, build-phase titles
3. **JetBrains Mono** -- Section indicators, labels, metadata, file paths, code blocks, severity badges, domain paths

### Distinct Typographic Treatments: 28

| # | Family | Size | Weight | Style | Usage |
|---|--------|------|--------|-------|-------|
| 1 | Instrument Serif | 2.5rem (40px) | normal | italic | h1, page-header__title |
| 2 | Instrument Serif | 2rem (32px) | normal | italic | h2, final-wisdom__text |
| 3 | Instrument Serif | 1.75rem (28px) | normal | italic | violent-gap__quote, window-quote__text |
| 4 | Instrument Serif | 1.5rem (24px) | normal | italic | h3, essence-pullquote__text, stats-bar__value |
| 5 | Instrument Serif | 1.25rem (20px) | normal | italic | epigraph__text, principle__name, reasoning__title, correlation-top__title |
| 6 | Instrument Serif | 1.125rem (18px) | normal | italic | callout--essence body |
| 7 | Instrument Serif | 1.0625rem (17px) | normal | italic | critique__text |
| 8 | Instrument Serif | 3rem (48px) | normal | italic | mundane-reveal__number |
| 9 | Inter | 1.0625rem (17px) | 400 | normal | open-sky__text |
| 10 | Inter | 1rem (16px) | 400 | normal | body text (p), build-phase__title (600) |
| 11 | Inter | 0.9375rem (15px) | 400 | normal | door__description, antipattern__name (600), build-phase__text, critique__response |
| 12 | Inter | 0.875rem (14px) | 400 | normal | subtitle, asymmetry individual text |
| 13 | Inter | 0.8125rem (13px) | 400 | normal | asymmetry list, handoff text |
| 14 | Inter | 1.125rem (18px) | 600 | normal | h4 |
| 15 | JetBrains Mono | 0.875rem (14px) | 400/500 | normal | code, code-snippet__content |
| 16 | JetBrains Mono | 0.8125rem (13px) | 500 | normal | door__path, asymmetry__list, file-tree__content, inline code, td:first-child |
| 17 | JetBrains Mono | 0.75rem (12px) | 500/600 | normal | section-indicator, epigraph__cite, callout__label, critique__handle, sightline__arrow |
| 18 | JetBrains Mono | 0.6875rem (11px) | 600 | normal | principle__number, isolation-diagram__title, stats-bar__label, door__name, file-tree__label, page-footer__label, all uppercase labels |
| 19 | JetBrains Mono | 0.625rem (10px) | normal | normal | isolation-cell__label, sightline__domain, page-footer__tag, antipattern__severity |
| 20 | JetBrains Mono | 0.5625rem (9px) | normal | normal | width-transition__label |
| 21 | JetBrains Mono | 11px | normal | normal | page-header__id, page-header__provenance, code-snippet__filename |
| 22 | JetBrains Mono | 10px | normal | normal | asymmetry__label |
| 23 | JetBrains Mono | 9px | normal | normal | asymmetry__institution::after pseudo |
| 24 | JetBrains Mono | 8px | normal | normal | corridor-witness__label |
| 25 | Inter | 0.75rem (12px) | 500 | normal | door__name |
| 26 | Inter | 1rem (16px) | 600 | normal | build-phase__title |
| 27 | Inter | 0.9375rem (15px) | 600 | normal | antipattern__name |
| 28 | Inter | 0.875rem (14px) | normal | normal | build-phase__steps li |

### Typography Assessment

**Hierarchy: EXCELLENT.** Three font families map cleanly to three content voices:
- **Instrument Serif italic** = insight, philosophy, wisdom, emotional weight
- **Inter** = analysis, description, practical instruction
- **JetBrains Mono** = system labels, metadata, file paths, code

This is a genuine "three voices" system where font family carries semantic meaning. The serif voice is reserved for philosophical/emotional moments. The mono voice signals technical/machine content. The sans-serif is the neutral analytical backbone. This is not just hierarchy -- it is characterization.

**Font sizes span from 8px to 48px (3rem).** The range is wide but each size is purposeful. The smallest sizes (8-10px) are used for metadata labels and progress indicators. The largest (48px) is for the $2,000 stat reveal -- a single moment of maximal visual emphasis.

**Weight usage is restrained:** Primarily 400 (normal) and 500 (medium). Weight 600 appears only for: h4, principle numbers, section labels, file-tree labels, page-footer labels -- all structural markers. No 700 (bold) in the stylesheet. `font-weight: 600` is used as the "special event" weight, which aligns with the design system's "two-weight rule" spirit (here extended to 3 weights: 400/500/600).

---

## 3. Color

### Zone Backgrounds: 7 distinct backgrounds

| # | Color | Hex | Usage | RGB Delta from Neighbors |
|---|-------|-----|-------|-------------------------|
| 1 | Near-black | `#1A1A1A` | Institutional zones, header, footer, code blocks, violent-gap, isolation-diagram, self-referential | -- |
| 2 | Dark brown | `#2A2220` | Threshold zone, asymmetry__individual (dark) | Delta from #1A1A1A: R+16, G+8, B+6 (max 16) |
| 3 | Dark near-black | `#151515` | Inverted asymmetry institution | Delta from #1A1A1A: R-5, G-5, B-5 (max 5) |
| 4 | Warm cream | `#FEF9F5` | Lit corridor, open sky, window zones, epigraph areas | -- |
| 5 | Pure white | `#FFFFFF` | Domain wing, proof zone, door interiors, principle grid | Delta from #FEF9F5: R+1, G+6, B+10 (max 10) |
| 6 | Warm breathing | `#FAF5ED` | Machine room, breathing zones, correlation zone, handoff connector, domain-config tab | Delta from #FEF9F5: R-4, G-4, B-8 (max 8) |
| 7 | Callout-specific | Various | See callout backgrounds below | -- |

### Perceptibility Analysis (>= 15 RGB delta required per SC-09)

| Boundary | Colors | Max Channel Delta | Verdict |
|----------|--------|-------------------|---------|
| Institutional -> Threshold | `#1A1A1A` -> `#2A2220` | **16 (R)** | PASS (barely) |
| Threshold -> Lit | `#2A2220` -> `#FEF9F5` | **228 (R)** | PASS |
| Lit -> Domain Wing | `#FEF9F5` -> `#FFFFFF` | **10 (B)** | **FAIL** (below 15) |
| Domain Wing -> Machine Room | `#FFFFFF` -> `#FAF5ED` | **18 (B)** | PASS (barely) |
| Machine Room -> Lit | `#FAF5ED` -> `#FEF9F5` | **8 (B)** | **FAIL** (below 15) |
| Lit -> Proof | `#FEF9F5` -> `#FFFFFF` | **10 (B)** | **FAIL** (below 15) |
| Proof -> Correlation | `#FFFFFF` -> `#FAF5ED` | **18 (B)** | PASS (barely) |
| Inverted Institution | `#1A1A1A` -> `#151515` | **5 (R=G=B)** | **FAIL** (below 15) |

**4 boundaries fail the >= 15 RGB delta threshold.** The three light-tone transitions (#FEF9F5 / #FFFFFF / #FAF5ED) are perceptually subtle. They are saved by strong border interventions (3px solid #E0D5C5 borders at zone transitions), which compensate for the background delta deficit. But strictly by the color-alone standard, these are violations.

### Callout Background Colors: 4 distinct

| Callout Type | Background | Border Color |
|-------------|-----------|-------------|
| Default (danger) | `#FEF6F5` | `#E83025` |
| Warning | `#FFFBF2` | `#D97706` |
| Info | `#F5F9FE` | `#4A90D9` |
| Essence | `#F8F5FE` | `#7C3AED` |

All match design system token values exactly (`--bg-callout-gotcha`, `--bg-callout-challenge`, `--bg-callout-info`, `--bg-callout-essence`).

### Semantic Color Usage

| Color | Semantic Meaning | Correct? |
|-------|-----------------|----------|
| `#E83025` (red) | Power, surveillance, the institutional gaze, danger, primary accent | YES -- red as the color of the panopticon's eye |
| `#4A90D9` (blue) | Work domains, info callouts, file trees, institutional/technical | YES -- blue for institutional systems |
| `#4A9D6B` (green) | Life domains, checkmarks, organic/personal | YES -- green for life/growth |
| `#D97706` (amber) | Warnings, Goodhart's Law, severity badges, reasoning | YES -- amber for caution |
| `#7C3AED` (purple) | Essence, philosophical pullquotes | YES -- purple for wisdom/insight |

**Color is fully semantic.** Every accent color carries meaning. No decorative color usage detected.

---

## 4. Borders

### Distinct Border Configurations: 11

| # | Width | Color | Usage | Semantic Encoding |
|---|-------|-------|-------|-------------------|
| 1 | 4px solid | `#E83025` | Institutional corridor walls, violent-gap top/bottom, window zone borders, build-phase left | **Structural** -- power, institutional force, major boundaries |
| 2 | 4px solid | `#E0D5C5` | Build-phase left border | **Structural** -- timeline spine |
| 3 | 3px solid | `#E83025` | Page-header bottom, epigraph left, footer top, critique response left, self-referential, correlation diagram | **Accent** -- KortAI identity, important connections |
| 4 | 3px solid | `#E0D5C5` | Domain wing border-top, machine room border-top, proof border-top, correlation zone borders, stats-bar, mundane-reveal, isolation-diagram, principles-grid, breathing zones, th border-bottom, code-snippet border | **Accent** -- section separation, structural containers |
| 5 | 3px solid | `#D97706` | Goodhart-split border, goodhart-split__metric right border | **Accent** -- warning containers |
| 6 | 3px solid | `#4A90D9` | door--work left border | **Accent** -- work domain identity |
| 7 | 3px solid | `#4A9D6B` | door--life left border | **Accent** -- life domain identity |
| 8 | 1px solid | `#E0D5C5` | Door borders, principle borders, sightline, extension-feed, antipattern, handoff-bridge, file-tree, domain-config, section-indicator bottom, inline code, td bottom, skeptic-flow, critique__text left, extension-diagram | **Micro** -- internal separation |
| 9 | 1px solid | `#333` | Dark-zone internal borders (isolation-cell, isolation-principle top, inverted asymmetry institution) | **Micro** -- dark-context separation |
| 10 | 1px solid | `#4A90D9` | door-category--work border | **Micro** -- category label |
| 11 | 1px solid | `#4A9D6B` | door-category--life border | **Micro** -- category label |

### 2px Border Check: **NONE FOUND** (CORRECT)

The design system explicitly FORBIDS 2px borders (`--border-structural: 4px`, `--border-accent: 3px`, `--border-micro: 1px`; 2px deliberately skipped). This build correctly avoids 2px borders entirely.

### Border Assessment

**Border encoding is semantic and consistent.** The 3-weight system (4px/3px/1px) maps cleanly:
- **4px** = major structural boundaries (power, institutional walls)
- **3px** = accent/section boundaries (identity, container outlines)
- **1px** = internal micro-separation (within components)

The border system also encodes content meaning through color:
- Red borders = surveillance/power
- Blue left borders = work domains
- Green left borders = life domains
- Amber borders = warning content

This is a multi-dimensional border language: weight encodes hierarchy, color encodes domain.

---

## 5. Hover/Transition States

### Total Hover/Transition Effects: 14

| # | Element | Effect | Reveals Relationship? |
|---|---------|--------|----------------------|
| 1 | `.door:hover` | `border-color: #E83025` (from #E0D5C5) | YES -- door "activates" under attention |
| 2 | `.door:hover .door__header` | `background: #FEF6F5` (warm highlight) | YES -- header warms when door is approached |
| 3 | `.isolation-cell:hover` | `border-color: #E83025` | YES -- domain cell activates |
| 4 | `.sightline:hover` | `border-color: #E83025` | YES -- correlation sightline activates |
| 5 | `.extension-feed:hover` | `border-color: #E83025` | YES -- feed node activates |
| 6 | `.antipattern:hover` | `border-color: #E83025` | YES -- antipattern card activates |
| 7 | `.corridor-witness:hover` | `opacity: 0.6 -> 1` | YES -- persistent UI reveals on attention |
| 8 | `.domain-config__tab:hover` | `color: #E83025` | YES -- tab becomes active-colored |
| 9 | `.code-block:hover .copy-btn` | `opacity: 0 -> 1` | YES -- reveals action on attention (defined but no copy buttons implemented in HTML) |
| 10 | `details summary:hover` | `background: #F4F4F5` | YES -- expandable area signals interactivity (defined in tokens reference, not in this build) |
| 11 | All transitions | `0.3s ease` | Consistent timing throughout |
| 12 | `::selection` | `background: #E83025; color: #FEF9F5` | YES -- red selection = the surveillance gaze follows your cursor |
| 13 | `.skip-link:focus` | `top: 0` (from -100%) | YES -- accessibility skip link |
| 14 | `*:focus-visible` | `outline: 3px solid #E83025` | YES -- all focus states use red (surveillance color) |

### Transition Assessment

**Transitions are purposeful, not decorative.** Every hover state is a border-color change to `#E83025` -- the surveillance red. This creates a consistent "the system notices you" interaction pattern. The metaphor of the panopticon extends into interaction: when you hover (look at) an element, it responds with the red of observation.

No generic "lift" effects. No scale transforms. No opacity fades on content elements. The restraint is notable.

The `::selection` color being `#E83025` (the panopticon red) is a particularly smart detail -- when the reader selects text, the surveillance color highlights it. The gaze follows your cursor.

---

## 6. Responsive Design

### Breakpoint: Single breakpoint at 768px

### Responsive Rules: 33 distinct responsive declarations

**Structural Layout Collapses:**
| Component | Desktop | 768px |
|-----------|---------|-------|
| Corridor widths | 520/680/960px | 100% with 16px padding |
| Asymmetry grid | 7fr 3fr / 3fr 7fr | 1fr (stacked) |
| Door pairs | 2 columns | 1 column |
| Principles grid | 2 columns | 1 column |
| Isolation cells | 4 columns | 2 columns |
| Mundane reveal | 1fr 2fr | 1 column |
| Goodhart split | 3fr 2fr | 1 column |
| Handoff bridge | 1fr auto 1fr | 1 column |
| Correlation sightlines | 4 columns | 2 columns |
| Stats bar | flex row | flex column |
| Footer | 2 columns | 1 column |
| Skeptic flow | 1fr auto 1fr | 1 column |
| Extension feeds | 3 columns | 1 column |

**Typography Scaling:**
- h1: 2.5rem -> 1.75rem
- h2: 2rem -> 1.5rem
- h3: 1.5rem -> 1.25rem
- page-header__title: 2.5rem -> 1.75rem
- violent-gap__quote: 1.75rem -> 1.375rem
- window-quote__text: 1.75rem -> 1.375rem
- final-wisdom__text: 2rem -> 1.5rem

**Border Adaptation:**
- Asymmetry institution: border-right -> border-bottom on stack
- Inverted asymmetry: border-left -> none, reordered
- Mundane reveal stat: border-right -> border-bottom
- Goodhart metric: border-right -> border-bottom
- Handoff connector: border-left/right -> border-top/bottom
- Stats bar segments: border-right -> border-bottom
- Principles: border-right removed (`!important`)

**Special Cases:**
- Corridor witness (fixed position progress indicator): `display: none` on mobile
- Zone padding reduced (80px -> 48px for institutional and window zones)
- Epigraph inner: max-width 100%, padding reduced

### Responsive Assessment

**GOOD.** The responsive design is thorough and content-aware. Grid layouts correctly collapse to single-column. Typography scales down proportionally. Border orientations flip from vertical to horizontal when layouts stack. The corridor-witness UI element is hidden on mobile (correct -- it's a desktop spatial device).

The single `!important` usage (`.principle { border-right: none !important; }`) is necessary to override the `:nth-child(odd)` specificity on mobile. Acceptable.

**Missing:** No `@media (min-width: 1200px)` or wider breakpoint. The max-width cap at 960px handles ultra-wide gracefully (centered corridor). No intermediate breakpoint (e.g., 1024px for tablets). The binary 768px approach is simple but effective.

### Reduced Motion

Present and correct:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 7. Overall CSS Quality

### Total CSS Lines: ~2,133

(From line 10 `<style>` to line 2133 `</style>`)

### Code Organization

The CSS is organized into **31 clearly labeled sections**, each with block comment headers:
1. Reset & Base
2. Skip Link
3. The Corridor System
4. Zone System
5. Typography (Three voices)
6. The Header
7. The Epigraph
8. The Asymmetry Split
9. The Violent Gap
10. The $2,000 Reveal
11. The 8 Doors
12. Design Principles
13. Isolation Architecture
14. Handoff Bridge
15. Code Blocks
16. Callout System
17. The Production Table
18. The Window Quote
19. The Goodhart Section
20. The Correlation Layer
21. The Critique
22. The Open Sky
23. Build Your Own
24. Anti-Patterns
25. Stats Bar
26. File Tree
27. Essence Pullquote
28. Self-Referential Element (Corridor Witness)
29. Footer
30. Breathing Zones
31. Reasoning, Responsive, Reduced Motion, Width Transitions, Domain Config, Skeptic Pattern, Self-Referential, Extension Pattern

Each section header includes a comment explaining the metaphorical or structural purpose (e.g., "THE CORRIDOR SYSTEM -- The corridor is the central spatial metaphor"). This is EXEMPLARY documentation.

### Selector Specificity

- **!important usage:** 4 instances total
  1. `animation-duration: 0.01ms !important` (reduced motion -- acceptable)
  2. `transition-duration: 0.01ms !important` (reduced motion -- acceptable)
  3. `scroll-behavior: auto !important` (reduced motion -- acceptable)
  4. `.principle { border-right: none !important }` (responsive override -- acceptable)

- **Maximum nesting depth:** 3 levels (e.g., `.asymmetry--inverted .asymmetry__individual .asymmetry__label`)
- **BEM-like naming:** Consistent throughout. Block__Element--Modifier pattern. Examples: `.door__header`, `.door--work`, `.callout--warning`, `.corridor--confined`
- **No ID selectors** in CSS
- **No deeply nested selectors** beyond 3 levels

### Inline Styles

**17 inline styles detected in HTML.** These are a concern:

| Line | Element | Inline Style |
|------|---------|-------------|
| 2186 | h2 | `color: #FEF9F5` |
| 2188-2192 | p elements | `color: #ddd`, `color: #999` |
| 2190 | em | `color: #E83025` |
| 2215 | p | `font-size: 0.8125rem; color: #999` |
| 2225 | div | `padding: 24px 0` |
| 2226 | callout | `background: #2A2220; border-left-color: #E83025` |
| 2228 | p | `color: #FEF9F5` |
| 2242-2248 | Various | `color: #FEF9F5`, `color: #ddd`, `color: #999`, `color: #E83025`, `font-weight: 500` |
| 2257 | div | `max-width: 680px` |
| 2267-2272 | li elements | `color: #1A1A1A` |
| 2427 | div | `margin-top: 32px` |
| 2492 | h3 | `margin-top: 48px` |
| 2604-2613 | Various | Inline font/color/size styles in handoff bridge |
| 2674 | div | `margin-bottom: 0` |
| 2768 | section | `padding: 80px 0` |
| 2777, 2781 | p elements | `font-size: 0.9375rem; line-height: 1.7` |
| 2910 | div | `display: block; padding: ...` |

Most inline styles are color overrides for text within dark zones (where body text defaults to `#1A1A1A` but needs to be light). This is a legitimate challenge when zones switch between dark and light backgrounds. However, these could be handled with zone-scoped CSS rules (e.g., `.zone--institutional p { color: #ddd; }`).

**Severity: MODERATE.** The inline styles work correctly but represent a maintainability debt. The count (17) is not extreme for a 3,190-line file.

### JavaScript

Minimal and purposeful. Single IIFE (35 lines) for the scroll-driven corridor witness indicator. Uses `{ passive: true }` on the scroll listener. No framework dependencies. No external scripts.

### Accessibility

- Skip link present and functional
- `role="banner"`, `role="main"`, `role="contentinfo"` on header/main/footer
- `aria-label` on every `<section>` (13 total)
- `aria-label` on the corridor-witness `<nav>`
- `<details>` elements for progressive disclosure (anti-patterns)
- `<blockquote>` with `<cite>` for epigraph
- Semantic HTML structure (header/main/footer/section/nav)
- Focus-visible styles defined globally

---

## Summary Scores

| Dimension | Score | Notes |
|-----------|-------|-------|
| **CSS Variable Usage** | 2/10 | Correct values but zero `var()` references. All hardcoded. |
| **Typography** | 9/10 | 28 distinct treatments. Three-voice system perfectly maps to content semantics. Wide range (8-48px) purposefully deployed. |
| **Color** | 7/10 | 7 zone backgrounds. Semantic accent colors. But 4 light-zone boundaries fail the >= 15 RGB delta threshold. Rescued by border interventions. |
| **Borders** | 9/10 | 11 configurations. Zero 2px violations. Semantic encoding via both weight AND color. Multi-dimensional border language. |
| **Hover/Transitions** | 8/10 | 14 effects, all purposeful. Consistent "red activation" pattern ties to panopticon metaphor. No decorative effects. |
| **Responsive** | 8/10 | 33 responsive declarations. All grids collapse correctly. Typography scales. Borders adapt orientation. Reduced motion support. Missing intermediate breakpoint. |
| **Overall CSS Quality** | 7/10 | 2,133 lines well-organized into 31 labeled sections. BEM naming. Low specificity. But 17 inline styles and zero custom properties reduce the score. |

### Top Findings

**Strengths:**
1. Typography system is a genuine three-voice characterization, not just hierarchy
2. Border system encodes meaning on two axes (weight = hierarchy, color = domain)
3. Hover states extend the panopticon metaphor -- red activation = "the system sees you"
4. CSS organization with 31 labeled sections including metaphorical explanations is exemplary
5. `::selection` color matching the surveillance red is an exceptional detail
6. No 2px border violations, no box-shadow, no border-radius -- perfect soul compliance

**Weaknesses:**
1. Zero CSS custom properties -- all values hardcoded despite matching token values
2. 4 zone boundaries fail the >= 15 RGB delta threshold (light-to-light transitions)
3. 17 inline styles (mostly dark-zone text color overrides)
4. No intermediate responsive breakpoint (only 768px)
5. Copy button CSS defined but not implemented in HTML (dead CSS)

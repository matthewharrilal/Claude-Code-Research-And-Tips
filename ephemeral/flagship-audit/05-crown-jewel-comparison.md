# Crown Jewel Technique Comparison: DD-006 vs CD-006 vs Flagship

## Executive Summary

**Unique CSS techniques per file:**
| File | Unique CSS Techniques | Score |
|------|----------------------|-------|
| **DD-006** (fractal, 36/40) | **47** | 36/40 |
| **CD-006** (pilot, 39/40) | **89** | 39/40 |
| **Flagship** (07-intentionality) | **63** | Unknown (audit: DO NOT SHIP) |

The flagship has MORE raw CSS technique count than DD-006 but significantly LESS than CD-006. However, the problem is not raw count -- it is **technique diversity and structural variety**. The flagship has 63 techniques but they cluster in TWO categories (typography modulation and zone backgrounds), while CD-006 spreads 89 techniques across TWELVE categories with rich structural variety.

**The richness gap is structural, not quantitative.** CD-006 uses 11 distinct component types, 5 axis patterns, 3 grid layouts, 7 distinct callout colorings, borders on EVERYTHING, and true visual diversity section to section. The flagship uses 1 component type (component-block), 1 axis pattern (F-pattern), 0 grid layouts, 0 callouts, borders on NOTHING visible in the body, and near-identical section appearance throughout.

---

## Master Technique Gap Table

### Category 1: BORDER TREATMENTS

| Technique | DD-006 | CD-006 | Flagship | Gap Description |
|-----------|--------|--------|----------|-----------------|
| 4px left border on callouts | YES (`--border-left-width: 4px`) | YES (`.callout { border-left: 4px solid }`) | YES (`.component-block { border-left: 4px solid }`) | Present but INVISIBLE -- component-blocks exist in CSS but few appear visually distinct |
| 3px structural borders on containers | YES (`.exploration-header { border-bottom: 3px solid }`) | YES (`.decision-matrix { border: 3px solid }`, `.code-block { border: 3px solid }`, `.file-tree { border: 3px solid }`, `.reasoning { border: 3px solid }`, `.task-component { border: 3px solid }`, `.toc { border: 3px solid }`, `.bento-item { border: 3px solid }`, `.choreo-hub { border: 3px solid }`, `.choreo-spoke { border: 3px solid }`) | NO -- **ZERO 3px borders on any component in the body** | **CRITICAL GAP.** CD-006 has 3px borders on 9+ distinct component types. Flagship has ZERO visible 3px containment borders |
| 1px data separator borders | YES (`.component-scale__header { border-bottom: 1px solid }`) | YES (`.decision-matrix td { border-bottom: 1px solid }`, etc.) | YES (`.table td { border-bottom: 1px }`) | Present -- tables have 1px separators |
| Border-weight gradient (4px/3px/1px semantic) | YES (`.fractal-scale__box { border-left: 3px solid }`, different widths per context) | YES (`.stratum--established { border-left: 4px }`, `.stratum--probable { border-left: 3px }`, `.stratum--speculative { border-left: 1px }`) | NO -- **Only 4px left border exists; 3px and 1px are NOT used as semantic signals on body content** | **CRITICAL GAP.** CD-006 uses border-weight as a confidence gradient (established/probable/speculative). Flagship defines `--border-structural: 4px; --border-accent: 3px; --border-micro: 1px` but NEVER applies them to visible body content containers |
| Q&A question red left border | NO | YES (`.qa-question { border-left: 4px solid var(--color-primary) }`) | NO | **GAP.** CD-006 uses red borders to visually separate questions from answers |
| Nested border depth (border on container + internal border) | YES (`.fractal-nested { border-left: 3px }` nested 3 levels deep) | YES (`.core-abstraction { border: 3px }` + internal `.core-abstraction-principle { border-bottom: 1px }`) | NO | **GAP.** Both crown jewels use borders INSIDE bordered containers for depth |
| Table left accent border | NO | NO | YES (`.table-featured { border-left: 4px solid }`) | Present -- flagship actually has this |
| Footer red rule decoration | NO | YES (`.page-footer__rule { width: 48px; height: 3px; background: #E83025 }`) | NO | Minor gap |

**Border Score: DD-006 = 5/8, CD-006 = 7/8, Flagship = 3/8**

---

### Category 2: FONT-SIZE VARIATION

| Technique | DD-006 | CD-006 | Flagship | Gap Description |
|-----------|--------|--------|----------|-----------------|
| Page-level heading (3rem/48px) | NO (32px max) | YES (`--type-page: 3rem`) | YES (`--type-h1: 36px`) | Present |
| Section heading (1.625rem/26px) | NO (28px) | YES (`--type-section: 1.625rem`) | YES (`--type-h2: 28px`) | Present |
| Subsection heading (1.375rem/22px) | NO (20px) | YES (`--type-subsection: 1.375rem`) | YES (`--type-h3: 22px`) | Present |
| Body text (1rem/16px) | YES | YES | YES | Present |
| Code text (0.875rem/14px) | YES (`font-size: var(--type-code)`) | YES (`--type-code: 0.875rem`) | YES (`--type-code: 14px`) | Present |
| Meta labels (0.75rem/12px) | YES (`font-size: 10px`, `11px`, `9px`) | YES (`--type-meta: 0.75rem`) | YES (`--type-meta: 12px`) | Present |
| Micro-label (8-9px) | YES (`.section-scale__para-label { font-size: 8px }`) | NO | NO | Minor gap |
| Callout body serif at 1.125rem | NO | YES (`.callout--essence .callout-body { font-size: 1.125rem }`) | YES (`.closing-essence { font-size: 1.125rem }`) | Present but only in ONE place in flagship vs THREE in CD-006 |
| Core abstraction principle at 1.25rem | NO | YES (`.core-abstraction-principle { font-size: 1.25rem }`) | NO | **GAP.** CD-006 has a unique type size for principle statements |
| Version badge at 0.625rem | NO | YES (`.version-badge { font-size: 0.625rem }`) | NO | Minor gap |
| VARIED sizes across sections | YES (12px, 13px, 14px, 15px, 16px -- 5 distinct body sizes) | YES (0.625rem to 3rem -- 8+ distinct sizes) | NO -- **UNIFORM 16px body, 28px headings across ALL sections** | **CRITICAL GAP.** Both crown jewels vary font size WITHIN body content. Flagship body text is 16px in every single section |

**Font-Size Score: DD-006 = 8/11, CD-006 = 10/11, Flagship = 6/11**

---

### Category 3: FONT-WEIGHT VARIATION

| Technique | DD-006 | CD-006 | Flagship | Gap Description |
|-----------|--------|--------|----------|-----------------|
| Weight 400 (body text) | YES | YES | YES | Present |
| Weight 500 (mono labels) | YES (`.exploration-id { letter-spacing: 0.1em }` implied by mono font) | YES (`.header-meta { font-weight: 500 }`) | YES (`font-weight: 500` in mono) | Present |
| Weight 600 (emphasis/labels) | YES (`.callout-essence__label { font-weight: 600 }`) | YES (`.callout-label { font-weight: 600 }`, `.decision-matrix th { font-weight: 600 }`, `.reasoning-column h4 { font-weight: 600 }`, `.file-tree-label { font-weight: 600 }`) | YES (`h3 { font-weight: 600 }`) | Present but flagship ONLY uses 600 on h3 |
| Weight 700 (bold emphasis) | NO | YES (`Inter:wght@400;500;600;700` loaded, `.recommended { font-weight: 600 }`) | NO | Minor gap |
| Weight variation ACROSS body sections | NO | YES (table `.recommended` rows get 600) | NO -- **400 everywhere in body text** | **GAP.** CD-006 uses weight as a semantic signal within tables |

**Font-Weight Score: DD-006 = 3/5, CD-006 = 5/5, Flagship = 3/5**

---

### Category 4: COLOR VARIATION IN BODY TEXT

| Technique | DD-006 | CD-006 | Flagship | Gap Description |
|-----------|--------|--------|----------|-----------------|
| Primary red (#E83025) as text accent | YES (`.exploration-id`, `.keyword`) | YES (`.qa-question { color: var(--color-primary) }`) | YES (`.drop-cap::first-letter { color: var(--color-primary) }`, `.component-label`) | Present |
| Secondary gray (#666) for meta | YES (`.color-text-secondary`) | YES | YES | Present |
| Blue accent for callout labels | YES (`.component-scale__label { color: var(--accent-blue) }`) | YES (`.callout--info .callout-label { color: var(--accent-blue) }`) | YES (`.component-block .component-label { color: var(--color-primary) }`) | Flagship uses RED for ALL labels, not varied colors |
| Green accent for specific elements | YES (`.string { color: #6B9B7A }` in code) | YES (`.callout--tip .callout-label { color: var(--accent-green) }`, `.reasoning-recommendation strong { color: var(--accent-green) }`) | YES (`--color-green: #4A9D6B` defined) | Present in CSS but GREEN only appears in code syntax and component labels |
| Coral/amber/purple accent text | NO | YES (`.callout--gotcha .callout-label { color: var(--accent-coral) }`, `.callout--challenge .callout-label { color: var(--accent-amber) }`, `.callout--essence .callout-label { color: var(--accent-purple) }`) | YES (`--color-amber: #D97706; --color-coral: #E83025; --color-blue: #4A90D9` defined) | Flagship DEFINES these colors but barely USES them. Only `.component-block.warm .component-label { color: amber }` and `.component-block.resolution .component-label { color: green }` |
| Warm text color shift in headings | NO | NO | YES (`.zone-s1 h2 { color: #2A2420 }`, `.zone-s3 h2 { color: #252018 }`) | Flagship has this micro-modulation but it is IMPERCEPTIBLE (1-5 rgb point difference) |
| Syntax highlighting colors (4+ distinct) | YES (keyword red, string green, function blue, variable coral, comment gray) | YES (same 6 syntax colors) | NO -- flagship has dark code blocks but uses only 2 colors (red primary, cream text) | **GAP.** Both crown jewels have rich syntax highlighting. Flagship code blocks are monochrome |

**Color Score: DD-006 = 5/7, CD-006 = 7/7, Flagship = 4/7**

---

### Category 5: STRUCTURAL ELEMENTS (Callouts, Asides, Containment)

| Technique | DD-006 | CD-006 | Flagship | Gap Description |
|-----------|--------|--------|----------|-----------------|
| Info callout (blue border) | YES (`.callout-info`) | YES (`.callout--info`) - 5 instances | NO -- **ZERO info callouts** | **CRITICAL GAP.** CD-006 has 5 info callouts. Flagship has 0 |
| Tip callout (green border) | NO | YES (`.callout--tip`) - 4 instances | NO | **CRITICAL GAP** |
| Gotcha/warning callout (coral border) | NO | YES (`.callout--gotcha`) - 3 instances | NO | **CRITICAL GAP** |
| Essence callout (purple, serif italic) | YES (`.callout-essence`) - 1 instance | YES (`.callout--essence`) - 3 instances | NO -- the `.component-block` is not an essence callout | **CRITICAL GAP** |
| Challenge callout (amber border) | NO | YES (`.callout--challenge`) - 2 instances | NO | **GAP** |
| Core Abstraction (principle + code proof) | NO | YES (`.core-abstraction`) - 2 instances | NO | **GAP.** Unique compound component: serif principle + dark code proof |
| Decision Matrix (full table component) | NO | YES (`.decision-matrix`) - 1 instance | NO | **GAP.** Bordered table with label, header background, recommended row |
| File Tree component | NO | YES (`.file-tree`) - 2 instances | NO | **GAP.** Structural file tree with indentation levels |
| Task Component (checkbox list) | NO | YES (`.task-component`) - 3 instances | NO | **GAP.** Bordered task list with visual checkboxes |
| Reasoning Component (2-col + recommendation) | NO | YES (`.reasoning`) - 2 instances | NO | **GAP.** 2-column compare + green recommendation zone |
| Q&A blocks (question/answer pattern) | NO | YES (`.qa-block` + `.qa-question` + `.qa-answer`) - 5 instances | NO | **GAP.** Red-bordered questions with indented answers |
| Pullquote / blockquote | NO | NO | YES (`.master-insight { border-left: 4px; outline: 2px }`) - 1 instance | Present in flagship |
| Two-zone component (label + body) | NO | YES (all callouts share this structure) | YES (`.component-block .component-label + .component-body`) | Present in both |

**Component count: DD-006 uses 3 component types. CD-006 uses 11 component types. Flagship uses 2 component types (component-block + pullquote).**

**Structural Score: DD-006 = 3/13, CD-006 = 12/13, Flagship = 2/13**

---

### Category 6: BACKGROUND TREATMENT

| Technique | DD-006 | CD-006 | Flagship | Gap Description |
|-----------|--------|--------|----------|-----------------|
| Per-section background zone colors | NO (white + cream only) | YES (sections vary between `--color-zone-sparse`, `--color-zone-dense`, `--color-zone-breathing`) | YES (12 distinct zone backgrounds `--color-zone-s1` through `--color-zone-s12`) | Flagship has MORE zone backgrounds than CD-006 but they are **barely perceptible** (1-8 RGB point differences) |
| Callout-specific tinted backgrounds | YES (`.callout-essence { background: rgba(217, 119, 6, 0.08) }`, `.callout-info { background: rgba(74, 144, 217, 0.08) }`) | YES (5 distinct callout backgrounds: `#F5F9FE`, `#F2F9F4`, `#FEF6F5`, `#FFFBF2`, `var(--color-zone-breathing)`) | NO -- **ZERO tinted callout backgrounds** | **CRITICAL GAP.** Crown jewels give callouts distinct background tints. Flagship has no callouts, hence no tinted backgrounds |
| Dark code block backgrounds | YES (`.character-scale { background: #1A1A1A }`) | YES (`.code-block { background: var(--color-text) }`, `.core-abstraction-proof`) | YES (`.sequence-block { background: var(--color-text) }`) | Present |
| Recommended row highlight | NO | YES (`.decision-matrix .recommended { background: #F2F9F4 }`) | NO | **GAP** |
| Even-row alternation in tables | NO | NO | YES (`.table-featured tbody tr:nth-child(even) td { background: var(--color-zone-breathing) }`) | Flagship has this but CD-006 does not |
| Hub/spoke background differentiation | NO | YES (`.choreo-hub { background: var(--axis-zone-focal) }`, `.choreo-spoke { background: var(--axis-zone-primary) }`) | NO | **GAP** |
| Stratum depth backgrounds (nested `rgba`) | YES (`.fractal-nested { background: rgba(232, 48, 37, 0.03) }`, nesting to 0.06, 0.09) | NO | NO | **GAP.** DD-006 uses progressively deeper rgba tints for fractal nesting |
| Component header backgrounds | NO | YES (`.core-abstraction-label { background: #F8F5FE }`, `.decision-matrix-label { background: var(--color-zone-breathing) }`, `.task-label { background: var(--color-zone-breathing) }`) | NO | **GAP.** CD-006 gives component headers distinct background zones |
| Bridge/transition backgrounds | NO | YES (`.transition--bridge { background: var(--color-zone-breathing) }`) | NO -- dividers are just border lines | **GAP** |

**Background Score: DD-006 = 4/9, CD-006 = 7/9, Flagship = 3/9**

---

### Category 7: TABLE STYLING

| Technique | DD-006 | CD-006 | Flagship | Gap Description |
|-----------|--------|--------|----------|-----------------|
| Table with bordered container | NO | YES (`.decision-matrix { border: 3px solid }`) | NO (tables have no outer border except `.table-light`) | **GAP** |
| Table header with distinct background | NO | YES (`.decision-matrix th { background: var(--color-zone-breathing) }`) | NO (table headers have no background) | **GAP** |
| Multiple table styling variants | NO | NO | YES (`.table-compact`, `.table-dense`, `.table-featured`, `.table-moderate`, `.table-warning`, `.table-light`, `.table-findings` -- 7 variants) | Flagship excels here |
| Table border-left accent | NO | NO | YES (`.table-featured { border-left: 4px solid }`) | Flagship excels |
| Recommended row highlighting | NO | YES | NO | Gap |
| Uppercase mono table headers | NO | YES (`font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.05em`) | YES (`.table th { font-family: var(--font-mono); font-size: 12px; text-transform: uppercase }`) | Present in both |

**Table Score: DD-006 = 0/6, CD-006 = 4/6, Flagship = 4/6**

---

### Category 8: LAYOUT / GRID PATTERNS

| Technique | DD-006 | CD-006 | Flagship | Gap Description |
|-----------|--------|--------|----------|-----------------|
| CSS Grid layout (multi-column) | YES (`.page-scale { grid-template-columns: 1fr 1fr 1fr }`, `.scale-comparison { grid-template-columns: repeat(4, 1fr) }`) | YES (`.bento-grid { grid-template-columns: repeat(4, 1fr) }`, `.z-hero { grid-template-columns: 1.618fr 1fr }`, `.reasoning-columns { grid-template-columns: 1fr 1fr }`, `.choreo-spokes { grid-template-columns: repeat(3, 1fr) }`) | NO -- **ZERO CSS grid layouts** | **CRITICAL GAP.** CD-006 uses 4 distinct grid layouts. Flagship is single-column throughout |
| Bento grid with span variations | NO | YES (`.bento-item--wide { grid-column: span 2 }`, `.bento-item--large { grid-column: span 2; grid-row: span 2 }`) | NO | **GAP** |
| Z-pattern golden ratio grid | NO | YES (`.z-hero { grid-template-columns: 1.618fr 1fr }`) | NO | **GAP** |
| Hub-spoke layout | NO | YES (`.choreo-hub` centered + `.choreo-spokes` 3-column grid) | NO | **GAP** |
| Flexbox layout | YES (`.fractal-diagram { display: flex }`) | YES (`.page-footer__inner { display: flex }`, `.toc-list li a { display: flex }`, `.task-list li { display: flex }`) | NO (no flex layouts in body content) | **GAP** |
| Side-by-side content (2-col within section) | NO | YES (Geometry section: `grid-template-columns: 1fr 1fr` for code + file tree) | NO | **GAP** |
| Width variation (different section widths) | NO | NO | YES (`.narrow-table-wrapper { max-width: 85% }`, `.pullquote-wrapper { max-width: 80% }`, `.tension-group { max-width: 90%; margin-left: 5% }`) | Flagship has this mechanism |

**Layout Score: DD-006 = 2/7, CD-006 = 6/7, Flagship = 1/7**

---

### Category 9: TYPOGRAPHY ORNAMENTS

| Technique | DD-006 | CD-006 | Flagship | Gap Description |
|-----------|--------|--------|----------|-----------------|
| Drop caps (::first-letter) | NO | YES (`.drop-cap::first-letter { font-size: 3.5em; float: left; color: var(--color-primary) }`) | YES (`.drop-cap::first-letter`) | Present |
| Italic serif for emphasis | YES (`h2, h3 { font-style: italic }`) | YES (`h1-h6 { font-family: var(--font-display) }`, `.callout--essence .callout-body { font-style: italic }`) | YES | Present |
| Uppercase mono for labels/meta | YES (`.exploration-id { text-transform: uppercase; letter-spacing: 0.1em }`) | YES (`.section-meta`, `.callout-label`, `.decision-matrix-label`, `.file-tree-label`, `.task-label`, `.stratum-label`) | YES (`.section-meta`, `.component-label`, `.header-meta`) | Present |
| Arrow markers in lists | NO | YES (`.reasoning-column li::before { content: "--" }`) | YES (`.sequence-block ul li::before { content: '\2192' }`) | Present |
| Letter-spacing modulation across page | NO | NO | YES (zone-based `letter-spacing` from 0.096px to -0.048px) | Flagship has this but it is IMPERCEPTIBLE |
| Centered intro text | YES (`.intro { text-align: center }`) | NO | NO | DD-006 has this |
| Version badge (inline code badge) | NO | YES (`.version-badge { font-size: 0.625rem; padding: 2px 8px; border: 1px solid }`) | NO | Minor gap |

**Typography Score: DD-006 = 4/7, CD-006 = 5/7, Flagship = 4/7**

---

### Category 10: SECTION TRANSITIONS / DIVIDERS

| Technique | DD-006 | CD-006 | Flagship | Gap Description |
|-----------|--------|--------|----------|-----------------|
| Labeled section divider (text on line) | YES (`.section-divider { text-align: center; position: relative }` with centered label on horizontal line) | NO | NO | **DD-006 unique technique** |
| Smooth transition (1px line) | NO | YES (`.transition--smooth { border-top: 1px solid }`) | YES (`.divider-smooth { height: 1px }`) | Present |
| Bridge transition (with background) | NO | YES (`.transition--bridge { background: var(--color-zone-breathing); padding: var(--space-8) }`) | YES (`.divider-bridge { height: 1px }`) -- but **NO background, NO padding** | **GAP.** CD-006 bridge transitions have breathing-colored backgrounds with prose content inside. Flagship bridge transitions are just thin lines |
| Breathing transition (3px structural) | NO | YES (`.transition--breathing { border-top: 3px solid; margin: 80px 0 }`) | YES (`.divider-breathing { height: 3px }`) | Present |
| Bridge reframe prose between sections | NO | YES (3 instances of centered italic prose inside bridge transitions) | YES (`.bridge-prose p { font-style: italic; color: secondary }`) | Both have bridge prose but flagship's bridge prose is OUTSIDE the divider (separate element) while CD-006's is INSIDE a breathing-colored container |
| Transition semantic labeling | NO | YES (`.transition--breathing`, `.transition--bridge`, `.transition--smooth` with `role="separator"`) | YES (`.divider-smooth`, `.divider-bridge`, `.divider-breathing`) | Present |

**Transition Score: DD-006 = 1/6, CD-006 = 5/6, Flagship = 4/6**

---

### Category 11: ACCESSIBILITY / META

| Technique | DD-006 | CD-006 | Flagship | Gap Description |
|-----------|--------|--------|----------|-----------------|
| Skip link | YES | YES | NO | **GAP** |
| focus-visible outline | YES | YES | NO | **GAP** |
| ::selection styling | YES | YES | NO | **GAP** |
| prefers-reduced-motion | YES | YES | NO | **GAP** |
| Print styles | NO | YES | NO | **GAP** |
| aria-label on sections | NO | YES (every section has `aria-label`) | NO | **GAP** |
| role="note" on callouts | NO | YES (every callout has `role="note"`) | NO | **GAP** |
| role="separator" on transitions | NO | YES | NO | **GAP** |

**Accessibility Score: DD-006 = 4/8, CD-006 = 8/8, Flagship = 0/8**

---

### Category 12: RESPONSIVE DESIGN

| Technique | DD-006 | CD-006 | Flagship | Gap Description |
|-----------|--------|--------|----------|-----------------|
| Breakpoint at 960px | YES (`.page-scale { grid-template-columns: 1fr }`) | YES (`.bento-grid { grid-template-columns: 1fr }`) | NO | **GAP** |
| Breakpoint at 768px | YES (`.fractal-diagram { flex-direction: column }`) | YES (comprehensive: header, grids, reasoning, footer) | NO | **GAP** |
| Breakpoint at 480px | NO | YES (`.header-title { font-size: 1.625rem }`, `.code-block { padding: var(--space-4) }`) | NO | **GAP** |
| Responsive type scale adjustment | NO | YES (h2 shrinks to 1.375rem at 480px) | NO | **GAP** |

**Responsive Score: DD-006 = 2/4, CD-006 = 4/4, Flagship = 0/4**

---

## AGGREGATE SCORES

| Category | DD-006 | CD-006 | Flagship | Flagship Gap |
|----------|--------|--------|----------|--------------|
| 1. Border Treatments | 5/8 | **7/8** | 3/8 | -4 vs CD-006 |
| 2. Font-Size Variation | 8/11 | **10/11** | 6/11 | -4 vs CD-006 |
| 3. Font-Weight Variation | 3/5 | **5/5** | 3/5 | -2 vs CD-006 |
| 4. Color in Body Text | 5/7 | **7/7** | 4/7 | -3 vs CD-006 |
| 5. Structural Elements | 3/13 | **12/13** | 2/13 | **-10 vs CD-006** |
| 6. Background Treatment | 4/9 | **7/9** | 3/9 | -4 vs CD-006 |
| 7. Table Styling | 0/6 | 4/6 | **4/6** | 0 vs CD-006 |
| 8. Layout / Grids | 2/7 | **6/7** | 1/7 | **-5 vs CD-006** |
| 9. Typography Ornaments | 4/7 | **5/7** | 4/7 | -1 vs CD-006 |
| 10. Section Transitions | 1/6 | **5/6** | 4/6 | -1 vs CD-006 |
| 11. Accessibility | 4/8 | **8/8** | 0/8 | **-8 vs CD-006** |
| 12. Responsive Design | 2/4 | **4/4** | 0/4 | **-4 vs CD-006** |
| **TOTAL** | **41/91** | **80/91** | **34/91** | **-46 vs CD-006** |

---

## THE TOP 10 MISSING TECHNIQUES (Ranked by Impact)

### 1. ZERO STRUCTURAL BORDERS IN BODY (Gap: -7 techniques)
CD-006 has 3px borders on: decision-matrix, code-block, file-tree, reasoning, task-component, toc, bento-item, choreo-hub, choreo-spoke. These create **visual containment** -- every component has visible edges. The flagship defines `--border-structural: 4px` and `--border-accent: 3px` in CSS tokens but NEVER applies them to visible body content. The only visible borders are on tables (thead bottom borders) and the header/footer. The body is border-free.

### 2. ZERO DISTINCT COMPONENT TYPES (Gap: -10 techniques)
CD-006 uses 11 distinct component types: Info, Tip, Gotcha, Essence, Challenge, Code Snippet, File Tree, Decision Matrix, Core Abstraction, Task Component, Reasoning. Each has unique styling, unique border color, unique background tint, unique typography. The flagship uses 1 type: `component-block` with minor variations (`.neutral`, `.warm`, `.resolution`). Every component in the flagship looks nearly identical -- a left-bordered box with a mono label.

### 3. ZERO GRID LAYOUTS (Gap: -5 techniques)
CD-006 uses 4 distinct grid patterns: 4-column bento grid, golden-ratio Z-hero grid, 2-column reasoning grid, 3-column choreography spokes. The flagship is entirely single-column. No visual variety in page structure.

### 4. ZERO CALLOUT COLOR VARIETY (Gap: -5 techniques)
CD-006 has 5 callout types with 5 distinct accent colors (blue, green, coral, amber, purple) and 5 distinct background tints. The flagship's component-blocks use only red and occasionally amber/green, all with no background tint.

### 5. UNIFORM FONT-SIZE (Gap: -4 techniques)
DD-006 uses 5 distinct body text sizes (12px, 13px, 14px, 15px, 16px). CD-006 uses 8+ distinct sizes from 0.625rem to 3rem. The flagship uses 16px body text in every section, 28px headings in every section. Zero variation.

### 6. ZERO ACCESSIBILITY FEATURES (Gap: -8 techniques)
CD-006 has: skip link, focus-visible, ::selection, reduced-motion, print styles, aria-labels on every section, role="note" on callouts, role="separator" on transitions. The flagship has NONE of these.

### 7. ZERO RESPONSIVE BREAKPOINTS (Gap: -4 techniques)
CD-006 has 3 breakpoints (960px, 768px, 480px) with comprehensive adjustments. The flagship has zero responsive CSS.

### 8. NO CONTAINED BRIDGE TRANSITIONS (Gap: -1 technique, high visual impact)
CD-006 bridge transitions are breathing-colored containers with centered prose inside. The flagship has bridge prose as a separate element next to a thin line. The contained bridge creates a visual "rest stop" between sections.

### 9. NO NESTED BORDER DEPTH (Gap: -1 technique, high visual impact)
Both crown jewels use borders INSIDE bordered containers (DD-006's fractal nesting, CD-006's core-abstraction with internal separator). This creates depth without shadows. The flagship never nests bordered elements.

### 10. INSUFFICIENT BACKGROUND TINTING (Gap: perceptual, not count)
The flagship has MORE background color definitions (12 zone tints) than CD-006 (3 zone tints + 5 callout tints). But the flagship's zone tints differ by 1-8 RGB points and are IMPERCEPTIBLE. CD-006's callout tints are PERCEPTIBLE because they use distinct hues (blue tint, green tint, coral tint, amber tint, purple tint) rather than slightly warmer/cooler cream variations.

---

## ROOT CAUSE ANALYSIS

The flagship's technique deficit is not random. It has a clear structural cause:

**The flagship was built as a TYPOGRAPHY + ZONE-BACKGROUND exercise, not a STRUCTURAL COMPOSITION exercise.**

Evidence:
- 42 of the flagship's 63 CSS techniques are typography modulations (letter-spacing, line-height, word-spacing, heading color modulations per zone) or zone background definitions
- Only 6 of 63 are structural (table variants, component-block variants)
- Zero are layout techniques (no grids, no multi-column)
- Zero are accessibility techniques

The flagship invested its CSS budget almost entirely in Channel 2 (typographic convergence) and Channel 1 (chromatic zone tinting). Channels 3 (spatial variation) and 4 (structural containment) were left empty. The result is a page where every section READS differently (at a sub-perceptual level) but LOOKS identical.

**CD-006 invests its CSS budget across ALL channels equally:** ~20 structural techniques, ~15 layout techniques, ~15 color/background techniques, ~15 typography techniques, ~15 component-specific techniques, ~9 accessibility/responsive techniques. This breadth IS richness.

---

## RECOMMENDATIONS FOR REMEDIATION

### Must-Have (to close the gap from 34/91 to 60+/91):
1. Add 3px containment borders to component-blocks, tables, and major content elements
2. Add AT LEAST 3 distinct callout types with unique border colors and background tints
3. Add AT LEAST 1 CSS grid layout (2-column split for a section)
4. Vary font-size across sections (compress to 14px in dense zones, expand to 18px in sparse)
5. Add skip link, focus-visible, and prefers-reduced-motion
6. Make bridge transitions into breathing-colored containers with prose inside

### Should-Have (to approach CD-006 quality):
7. Add file-tree or task-component or reasoning component (at least 1 compound component)
8. Add responsive breakpoints at 768px minimum
9. Add Q&A blocks or another structural content pattern besides paragraphs + tables
10. Use border-weight gradient (4px/3px/1px) as semantic signal on visible body content

---

## CONCLUSION

The richness gap between the flagship and the crown jewels is **structural diversity, not technique count.** The flagship has 63 CSS techniques but they all serve 2 channels (typography and zone backgrounds). CD-006 has 89 techniques serving 12 categories equally. DD-006 has 47 techniques but achieves higher visual variety through structural elements (nested borders, grid layouts, labeled dividers).

The core diagnosis: **the flagship was built as if richness = micro-typographic modulation. The crown jewels demonstrate that richness = component variety + structural containment + layout diversity + color differentiation.** The flagship needs borders, callouts, grids, and color variety -- not more letter-spacing gradients.

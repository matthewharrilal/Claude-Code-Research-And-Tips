# Cross-Run Comparison: V3 vs Previous Gas Town Outputs

**Date:** 2026-02-24
**Comparator:** Cross-Run Comparator Agent (Opus)
**Files Compared:**
1. **V3** — `ephemeral/pages/V3-Yegge-Gas-Town/p2-yegge-gas-town.html` (2,152 lines)
2. **VA Pipeline** — `ephemeral/pages/gas-town-va-pipeline/output.html` (2,045 lines)
3. **First Gas Town (Mode 4 PA)** — `ephemeral/pages/gas-town-steve-yegge/output.html` (1,508 lines)

---

## 1. HIGH-LEVEL STRUCTURAL METRICS

| Metric | First (Mode 4) | VA Pipeline | V3 | V3 Delta vs VA |
|--------|----------------|-------------|-----|----------------|
| **Total lines** | 1,508 | 2,045 | 2,152 | +107 (+5.2%) |
| **CSS lines** | 1,084 | 1,264 | 1,354 | +90 (+7.1%) |
| **Zones** | 4 | 6 | 6 | Same |
| **Sections (`<section>`)** | 4 | 6 | 6 | Same |
| **Tables** | 2 | 5 | 5 | Same |
| **Collapsible details** | 0 | 5 | 14 | +9 (+180%) |
| **Unique CSS class names** | 66 | 81 | 79 | -2 (negligible) |
| **Font size varieties** | 17 | 17 | 19 | +2 |
| **Media queries** | 4 | 3 | 3 | Same |
| **ARIA attributes** | 15 | 19 | 7 | -12 (REGRESSION) |
| **Grid layout refs** | 9 | 9 | 33 | +24 (+267%) |
| **Border refs** | 77 | 77 | 66 | -11 (-14%) |

---

## 2. ZONE BACKGROUND ANALYSIS

### V3 Zone Backgrounds (8 concept-named tokens)
| Zone | Hex | Name |
|------|-----|------|
| Header | #1A1A1A | settlement-gate |
| Z1 | #FEF9F5 | outpost-yard |
| Z2 | #F0EBE0 | outpost-commons |
| Z3 | #E5DDD0 | factory-floor |
| Z4 | #FAF5ED | command-post |
| Z5 | #EDE6DA | supply-depot |
| Z6 | #FDF6E5 | settlement-ledger |
| Footer | #1E1E1E | settlement-wall |

### VA Pipeline Zone Backgrounds (6 factory-named tokens + accents)
| Zone | Hex | Name |
|------|-----|------|
| Header | #1A1A1A | color-text |
| Z1 | #FEF9F5 | factory-intake |
| Z2 | #F0EBE0 | factory-workshop |
| Z3 | #FFFFFF | factory-floor |
| Z4 | #EDE6DA | factory-archive |
| Z5 | #F8F3EB | factory-output |
| Z6 | #E8E1D5 | factory-dispatch |
| Footer | #1A1A1A | color-text |

### First Gas Town Zone Backgrounds (4 brief-named tokens)
| Zone | Hex | Name |
|------|-----|------|
| Header | #1A1A1A | color-text |
| Z1 | #FEF9F5 | bg-z1 |
| Z2 | #F0EBE3 | bg-z2 |
| Z3 | #E8E0D4 | bg-z3 |
| Z4 | #F5F0E8 | bg-z4 |
| Footer | #1A1A1A | color-text |

### RGB Delta Comparison (Max Channel Delta Between Adjacent Zones)

| Transition | First | VA Pipeline | V3 | >= 15 Threshold? |
|------------|-------|-------------|-----|-----------------|
| Header -> Z1 | 228 | 228 | 228 | All PASS |
| Z1 -> Z2 | 18 | 21 | 21 | All PASS |
| Z2 -> Z3 | **15** | **31** | **16** | All PASS (V3 at floor) |
| Z3 -> Z4 | **20** | **37** | **29** | All PASS |
| Z4 -> Z5 | -- | 17 | 19 | All PASS |
| Z5 -> Z6 | -- | 22 | 16 | V3 at floor |
| Z6 -> Footer | 219 | 206 | 223 | All PASS |

**Key finding:** V3 meets the >=15 RGB threshold at ALL transitions, but sits at exactly 16 on two transitions (Z2->Z3 and Z5->Z6). VA Pipeline had the advantage of #FFFFFF (pure white) for Z3 which created large deltas (31, 37) but at the cost of breaking the warm palette. V3 stays within the warm cream-to-tan palette consistently, trading maximum contrast for palette coherence. This is a defensible design decision.

---

## 3. TYPOGRAPHY COMPARISON

### Font Size Ranges

| File | Min (non-inherit) | Max | Distinct Values | Scale Shape |
|------|-------------------|-----|-----------------|-------------|
| First | 12px | 3.5em (~56px) | 17 | Variable/token-based |
| VA Pipeline | 10px | 3.5em (~56px) | 17 | Mostly var() tokens |
| V3 | 10px | 42px | 19 | Direct px values |

### V3 Typography Type Scale (px, deduplicated)
`10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 22, 24, 28, 32, 36, 40, 42`

This is **17 distinct px sizes** (plus `0.875em` and `inherit`). This represents the richest type scale of the three files.

### Typography Strategy Comparison

| Property | First | VA Pipeline | V3 |
|----------|-------|-------------|-----|
| Size encoding | Mix px + var() | Mostly var() tokens | Direct px values |
| Zone-specific sizes | Yes (via zone rules) | Yes (via zone rules) | Yes (per-zone h2/h3/p rules) |
| Body text per zone | 1rem (all) | var(--text-base)/15px | 18/16/15/16/15/15px |
| H2 per zone | var(--type-page/section) | var(--text-h1/h2) | 40/32/28/28/28/28px |
| Letter-spacing variation | Yes (Z3 = 0.03em) | Some (section indicators) | Yes (per-zone indicators) |
| Font-weight variation | Yes (Z2=500, Z3=600) | Limited | Per-zone (builder used 600 for body in Z3, 400 elsewhere) |

**Key finding:** V3 uses direct px values for ALL font sizes rather than CSS custom property tokens. This makes zone-specific typography MORE explicit and auditable but LESS DRY. The type scale compression from 18px body in Z1 to 15px body in Z3/Z5 (peak density zones) creates a measurable "tightening" effect. VA Pipeline had a similar strategy but used `var()` indirection which obscured the actual values.

---

## 4. STRUCTURAL AND COMPONENT COMPARISON

### Component Inventory

| Component Type | First | VA Pipeline | V3 | Notes |
|----------------|-------|-------------|-----|-------|
| **Dark header** | Yes | Yes | Yes | All three have dark header + 3px red border |
| **Dark footer** | Yes | Yes | Yes | V3 adds explicit `role="contentinfo"` |
| **Complexity ladder** | Drop cap + core-quote | ASCII diagram | ASCII diagram | V3 is closest to VA |
| **Stats bar** | Header inline | Header flex | Separate zone component | V3 moves stats to Z1 body |
| **TOC** | None | None | Yes (with density labels) | NEW in V3 |
| **Comparison grid** | None | ASCII diagram | 2-column CSS grid | NEW structural pattern in V3 |
| **Pull quote** | core-quote (offset depth) | blockquote (purple border) | pull-quote (red border) | V3 has dedicated pull-quote class |
| **Role grid** | Bento grid (auto-fit) | 2-col grid | 2-col grid | V3 + VA identical approach |
| **Role cards** | rank/name/function | level/name/function/model/details | level/name/desc (compact) | V3 MORE compact |
| **Collapsible deep dives** | None | None | 8 role deep dives | MAJOR new component in V3 |
| **Memory layers** | None | ASCII diagram | Semantic HTML (3 layers) | V3 upgrades from ASCII to structured HTML |
| **Waves table** | data-table | waves-table | waves-table | Similar treatment across all |
| **Dark inversion block** | None | Yes (D-04 moment) | Yes (quote + attribution) | V3 simplifies to single quote |
| **Principle blocks** | None | Yes (6 blocks) | Prose paragraphs (H3 + p) | V3 REMOVES principle-block component |
| **Code blocks** | Pre + syntax highlighting | Pre + code-snippet (header) | Pre + code-label | V3 simpler than VA |
| **Checklists** | None | checklist (unicode squares) | checklist (CSS pseudo squares) | V3 uses CSS-generated checkboxes |
| **Troubleshoot accordions** | None | troubleshoot-item (5) | troubleshoot (6) | V3 adds 1 more |
| **Quote grid** | None | None | 2-col quote cards (6) | NEW in V3 |
| **Source lists** | Footer inline | Footer inline | Dedicated source-list in Z6 | NEW in V3 |
| **Cost table** | None | Footer inline | Full data table | NEW in V3 |
| **Checkpoint callouts** | checkpoint-bar | None | checkpoint (green) | V3 repurposes differently |
| **Warning callouts** | callout--threat/caution | callout--warning | callout--warning | Similar |
| **Essence callouts** | None | callout--essence | callout--essence | V3 adds purple variant |
| **Section indicators** | section-indicator | section-indicator | section-indicator | All three have this |
| **Selection color per zone** | None | 2 zones | 3 zones | V3 adds factory zone selection |
| **Zone boundary CSS classes** | None | None | Yes (boundary-z1-z2 etc.) | NEW explicit boundary markers |

### Component Count Summary

| Metric | First | VA Pipeline | V3 |
|--------|-------|-------------|-----|
| Distinct component types | ~12 | ~18 | ~26 |
| Interactive components (details) | 0 | 5 | 14 |
| Grid layouts | 1 | 1 | 4 |
| Callout variants | 5 | 4 | 5 |
| Tables | 2 | 5 | 5 |

**Key finding:** V3 has the richest component vocabulary of the three files. The addition of TOC, quote grid, collapsible deep dives, explicit boundary classes, checkpoint callouts, and source lists represents a significant structural enrichment. The collapsible deep dives for all 8 roles (14 total `<details>` elements including troubleshooting) is the single largest structural addition.

---

## 5. WHAT IMPROVED (V3 vs VA Pipeline)

### 5.1 Zone-Specific Typography (MAJOR IMPROVEMENT)
V3 explicitly declares font sizes per zone in px rather than relying on var() indirection. Body text shrinks from 18px (Z1) to 15px (Z3, Z5), creating measurable density compression at peak zones. H2 drops from 40px (Z1) to 28px (Z3-Z6). This is MORE intentional zone-specific typography than VA Pipeline.

### 5.2 Metaphor-Named Custom Properties (MAJOR IMPROVEMENT)
V3 uses concept-named tokens (`--settlement-gate`, `--outpost-yard`, `--factory-floor`, `--command-post`, `--supply-depot`, `--settlement-ledger`) that map the page metaphor to CSS structure. VA Pipeline used factory names (`--factory-intake`, `--factory-workshop`) but less consistently. The First used generic names (`--bg-z1`). V3's naming carries the Settlement metaphor into the code itself.

### 5.3 Explicit Zone Boundary Classes (NEW)
V3 introduces `boundary-z1-z2` through `boundary-z5-z6` CSS classes that encode the transition weight directly in markup. This is absent in both previous versions and makes the zone transition strategy auditable from HTML alone.

### 5.4 Component Richness (SIGNIFICANT IMPROVEMENT)
26 distinct component types vs 18 (VA) and 12 (First). The TOC with density labels, the quote grid, the memory layers as structured HTML, and the collapsible role deep dives all add structural variety that was missing.

### 5.5 Interactive Density (SIGNIFICANT IMPROVEMENT)
14 collapsible elements vs 5 (VA) vs 0 (First). The 8 role deep dives give the Factory Floor zone genuine depth-on-demand behavior.

### 5.6 Content Comprehensiveness (MODERATE IMPROVEMENT)
V3 includes content sections missing from VA: a dedicated "When to Use" section, a full comparison table (5 orchestrators vs VA's 3), a cost estimation table, dedicated sources section with typed source list, and the 6-quote grid. Total content coverage is the most complete of the three.

### 5.7 Grid Layout Richness (SIGNIFICANT IMPROVEMENT)
V3 uses 4 distinct grid layouts (comparison-grid, role-grid, quote-grid, stats-bar flex) vs 1 each in the other files. This gives structural variety to different content types.

### 5.8 Background Consistency (MODERATE IMPROVEMENT)
V3 maintains all zone backgrounds within the warm cream-tan palette. VA Pipeline's Z3 used #FFFFFF (pure white) which broke the warm palette. V3's factory-floor (#E5DDD0) is the warmest and darkest non-header/footer zone, creating the correct "peak density feels different" signal without breaking palette unity.

### 5.9 Conviction Block (NEW)
V3 includes an 11-line conviction/self-evaluation comment at the top of the file documenting 7 compositional checks the builder performed. This is absent in both previous versions.

---

## 6. WHAT REGRESSED (V3 vs VA Pipeline)

### 6.1 ARIA Accessibility (SIGNIFICANT REGRESSION)
V3 has only 7 `aria-` attributes vs VA Pipeline's 19 and First's 15. Most ASCII diagrams and data tables in V3 lack `aria-label` attributes. The VA Pipeline consistently labeled diagrams (`role="img" aria-label="..."`), tables, and complementary sections. This is the most notable regression.

### 6.2 Principle Block Visual Treatment (MODERATE REGRESSION)
VA Pipeline had a dedicated `principle-block` component with varied border-left colors (steel, blue, green, amber, coral, purple) giving each principle visual distinctiveness. V3 renders the Core Principles section as simple H3 + prose paragraphs without a dedicated component, creating visual monotony in Z4. This echoes the CCF-03 "Zone 4 Monotony" finding from the VA Pipeline analysis but in a different form.

### 6.3 Decision Flow Diagram (LOSS)
VA Pipeline included a decision-flow ASCII diagram ("Are you Stage 7+? -> No -> Use Ralph Wiggum") that gave the "When to Use" section a unique visual component. V3 uses two callout boxes instead. Functional but less visually distinctive.

### 6.4 Communication Flow Diagram (LOSS)
VA Pipeline had a detailed comm-flow ASCII diagram showing message routing (Overseer -> Mayor -> Refinery -> Polecat -> Dogs -> Complete). V3 omits this. The hierarchy diagram remains but the communication flow is lost.

### 6.5 Code Snippet Headers (LOSS)
VA Pipeline used a `code-snippet` component with a dark header bar showing filenames (`Terminal`, `Startup Sequence`, `Daily Operations`). V3 uses plain `<pre>` blocks with `code-label` spans. Less visual structure around code blocks.

### 6.6 Print Styles (SLIGHT REGRESSION)
VA Pipeline had more specific print styles (break-before, break-inside, pre-wrap). V3's print styles are minimal (hide skip-link/toc, basic body adjustments).

### 6.7 Drop Cap (LOSS)
Both VA Pipeline and First Gas Town used a drop cap (3.5em first letter) for the opening paragraph. V3 does not use this mechanism.

---

## 7. WHAT'S NEW (Present in V3 Only)

| Feature | Description | Impact |
|---------|-------------|--------|
| **TOC with density labels** | Navigation with per-section density indicators (moderate/dense/reference) | HIGH -- unique wayfinding component |
| **Collapsible role deep dives** | 8 `<details>` elements for each Gas Town role | HIGH -- depth-on-demand |
| **Quote grid** | 2x3 grid of quote cards in Z6 | MODERATE -- visual variety in reference zone |
| **Memory layers component** | Structured HTML for 3-layer memory model (hot/warm/cold) | MODERATE -- replaces ASCII diagram |
| **Zone boundary classes** | Explicit `boundary-z1-z2` etc. in markup | MODERATE -- auditability |
| **Conviction comment block** | 11-line self-evaluation in HTML comment | LOW (invisible to user, valuable for audit) |
| **Source list component** | Typed source list (Blog/GitHub/Podcast) | MODERATE -- proper reference handling |
| **Cost estimation table** | Dedicated data table for cost metrics | LOW -- data that was in footer before |
| **Comparison with 5 orchestrators** | Adds Infinite Orchestra to the comparison | LOW -- incremental content |
| **Role count display** | Large "8" display numeral for role count | LOW -- decorative emphasis |
| **Tabular nums on cost table** | `font-variant-numeric: tabular-nums` for numbers | LOW -- edge intentionality |

---

## 8. COLOR PALETTE ANALYSIS

### Primary Palette Usage

| Color | Role | V3 Uses | VA Uses | First Uses |
|-------|------|---------|---------|------------|
| #E83025 (Red) | Primary accent, borders, highlights | Yes | Yes | Yes |
| #4A90D9 (Blue) | Info callouts, accent | Yes | Yes | Yes |
| #4A9D6B (Green) | Checkpoints, tips | Yes | Yes | Yes |
| #C97065 (Coral) | Troubleshooting, warnings | Yes | Yes | Yes |
| #D97706 (Amber) | Memory warm layer, caution | Yes | Yes | Yes |
| #7C3AED (Purple) | Essence callouts | Yes | Yes (blockquotes) | Yes |

All three files use the identical 6-accent palette. No regression or improvement here -- this is locked by the design system.

### Zone-to-Zone Color Arc

| Property | First | VA Pipeline | V3 |
|----------|-------|-------------|-----|
| Warmest zone | Z3 (#E8E0D4) | Z6 (#E8E1D5) | Z3 (#E5DDD0) |
| Lightest zone | Z1 (#FEF9F5) | Z3 (#FFFFFF) | Z1 (#FEF9F5) |
| Color arc | warm->deep->return | warm->white->tan->tan | warm->tan->deep->return->tan->warm |
| Double-peak visible | No (monotonic deepening) | No (white disrupts) | Yes (Z3 deep, Z4 lift, Z5 re-deep) |

**Key finding:** V3 is the only version with a clear double-peak density arc visible in the background colors alone. The Z3->Z4 lift (29 delta) followed by Z4->Z5 re-darkening creates the "breathe then re-engage" pattern. The VA Pipeline's use of #FFFFFF for Z3 was an outlier that disrupted the warm palette.

---

## 9. PREVIOUS ANALYSIS CONTEXT (VA Pipeline Master Synthesis)

The VA Pipeline analysis produced 10 Cross-Cutting Findings (CCF-01 through CCF-10). How does V3 address them?

| Finding | VA Pipeline Issue | V3 Status |
|---------|-------------------|-----------|
| **CCF-01: Trailing Void** | ~5 viewport-heights of blank cream below content | UNKNOWN -- requires browser rendering to verify |
| **CCF-02: Sub-perceptual zone deltas** | Z2-Z3 = 11 RGB, Z3-Z4 = 8 RGB | FIXED -- V3 Z2-Z3 = 16, Z3-Z4 = 29. All >=15 |
| **CCF-03: Zone 4 Monotony** | 6 identical principle blocks | PARTIAL -- principle blocks removed but Z4 is now plain prose (no components) |
| **CCF-04: B+ Ceiling** | Technically correct but emotionally flat | IMPROVED -- more component variety, conviction self-eval, but unclear if the emotional gap is closed without PA |
| **CCF-05: Metaphor Fade** | Metaphor strong top-third, weak bottom | IMPROVED -- settlement metaphor naming persists to Z6 (settlement-ledger), but zone indicators don't carry metaphor labels |
| **CCF-06: Structure over-indexed** | 65% structural PA questions, 9% experiential | N/A -- pipeline measurement issue, not page issue |
| **CCF-07: Responsive Fluid not Intentional** | 768px scales rather than reorganizes | SIMILAR -- responsive section collapses grids to 1-col but no evidence of distinct 768px rethinking |
| **CCF-08: Prose vs CSS-specific instructions** | Prose instructions = partial compliance | N/A -- pipeline process issue |
| **CCF-09: Gate runner structural issues** | False positives, missing gates, weak JS | N/A -- gate runner issue |
| **CCF-10: Brief assembler bottleneck** | Information loss at brief assembly | N/A -- pipeline process issue |

---

## 10. SUMMARY VERDICT

### Overall Assessment

V3 is the **richest structural output** of the three Gas Town runs. It has:
- The most CSS (1,354 lines)
- The most component variety (26 types)
- The most interactive elements (14 collapsibles)
- The richest type scale (19 distinct sizes)
- The most grid layouts (4)
- The best metaphor integration into code (concept-named tokens)
- The only double-peak density arc visible in backgrounds alone
- All zone background deltas >=15 RGB (the first version to achieve this cleanly)

**Notable trade-offs:**
- ARIA accessibility significantly regressed (7 vs 19 attributes)
- Lost some VA Pipeline components (decision flow diagram, communication flow, principle blocks, drop cap)
- Zone 4 (Command Post) may trend toward visual monotony without dedicated principle components
- Two zone transitions sit at exactly 16 RGB delta (passes threshold but barely)

### Quantified Improvement Score

| Dimension | VA -> V3 Direction | Magnitude |
|-----------|-------------------|-----------|
| CSS volume | IMPROVED | +7% |
| Component variety | IMPROVED | +44% (18 -> 26) |
| Interactive elements | IMPROVED | +180% (5 -> 14) |
| Grid layouts | IMPROVED | +267% (1 -> 4) |
| Typography richness | IMPROVED | +12% (17 -> 19) |
| Zone background perceptibility | IMPROVED | 100% pass (was 4/6) |
| Metaphor in code | IMPROVED | Concept-named > factory-named > generic |
| Accessibility (ARIA) | REGRESSED | -63% (19 -> 7) |
| Specific components lost | REGRESSED | -4 components |
| Content completeness | IMPROVED | +3 sections |

**Net assessment:** V3 is a clear structural improvement over both predecessors. The primary risk area is the ARIA regression and the two borderline RGB deltas. If ARIA attributes were restored to VA Pipeline levels, V3 would be unambiguously the best output of the three.

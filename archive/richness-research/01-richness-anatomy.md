# Richness Anatomy: CSS Technique Progression Across Pipeline Stages

**Author:** showcase-archaeologist
**Date:** 2026-02-15
**Files analyzed:**
- DD-006-fractal.html (1,120 lines) -- Stage 2 Density crown jewel
- OD-004-confidence.html (1,978 lines) -- Stage 3 Organization
- AD-005-choreography.html (1,846 lines) -- Stage 4 Axis
- CD-006-pilot-migration.html (2,085 lines) -- Stage 5 Combination crown jewel
- variant-b-weak-perm.html (694 lines) -- Phase D Variant B (tension-skill output)

---

## 1. QUANTITATIVE OVERVIEW

| Metric | DD-006 | OD-004 | AD-005 | CD-006 | Variant B |
|--------|--------|--------|--------|--------|-----------|
| **Total lines** | 1,120 | 1,978 | 1,846 | 2,085 | 694 |
| **Custom properties (--var)** | 210 | 435 | 322 | 634 | 174 |
| **@media queries** | 5 | 5 | 7 | 5 | 1 |
| **@keyframes** | 0 | 1 | 0 | 0 | 0 |
| **animation uses** | 1 | 12 | 12 | 1 | 0 |
| **transition uses** | 1 | 6 | 56 | 27 | 11 |
| **transform uses** | 13 | 21 | 24 | 13 | 5 |
| **clip-path uses** | 0 | 0 | 24 | 0 | 0 |
| **grid-template** | 5 | 6 | 11 | 11 | 0 |
| **display: grid** | 2 | 2 | 1 | 5 | 0 |
| **display: flex** | 5 | 15 | 5 | 8 | 0 |
| **border-left** | 14 | 19 | 10 | 13 | 7 |
| **pseudo-elements** | 3 | 6 | 3 | 4 | 0 |
| **position: abs/rel** | 5 | 3 | 4 | 6 | 0 |
| **z-index** | 1 | 2 | 2 | 1 | 0 |
| **CSS class selectors** | 75 | 138 | 93 | 135 | 41 |
| **Unique component types** | ~8 | ~16 | ~18 | ~22 | ~8 |

**Key takeaway:** Variant B has 174 custom property references (on par with DD's 210) but ZERO grid layouts, ZERO flex layouts, ZERO pseudo-elements, ZERO positioning, and ZERO animations. It is structurally simpler than even the earliest pipeline stage.

---

## 2. STAGE-BY-STAGE TECHNIQUE INVENTORY

### 2A. DD-006 (Density Exploration -- Fractal)
**Score:** 36/40 | **Lines:** 1,120 | **File size:** ~42KB

#### Technique Inventory
1. **CSS Custom Properties** -- Full :root block with 28 unique tokens (colors, fonts, spacing, geometry, accents)
2. **Flexbox** -- Fractal diagram layout, scale-demo headers, character-scale lines
3. **CSS Grid** -- page-scale (3-column), scale-comparison (4-column responsive)
4. **Responsive media queries** -- 3 breakpoints (768px, 900px, 500px)
5. **Pseudo-elements** -- section-divider::before (horizontal line behind text), ::selection (branded)
6. **Accessibility** -- skip-link, :focus-visible, prefers-reduced-motion
7. **Nested visual encoding** -- .fractal-nested with increasing rgba opacity at each nesting level (0.03, 0.06, 0.09)
8. **BEM-like naming** -- .fractal-scale__label, .component-scale__dense-zone
9. **Border-weight system** -- 4px primary, 3px structural, 2px for internal, 1px for separators
10. **Dark code block** -- Full syntax-highlighted code section with line numbers

#### What DD Established (Baseline)
- Token architecture (:root block)
- Border-left callout pattern (4px colored border)
- Font trinity (Instrument Serif / Inter / JetBrains Mono)
- Soul enforcement (border-radius: 0, box-shadow: none)
- Labeled mono-font metadata system (10px uppercase letter-spacing)
- Dense/sparse zone differentiation via background color
- Basic responsive collapse (3-col to 1-col)

#### Metaphor Penetration Depth: MODERATE
The fractal metaphor encodes primarily at the **structural level**: nested divs with increasing opacity create visual fractal nesting. The metaphor is DEMONSTRATED (via the 4-scale visualization) rather than deeply ENCODED in CSS. The dense/sparse rhythm exists but is expressed through content arrangement, not through novel CSS techniques.

---

### 2B. OD-004 (Organizational Exploration -- Confidence)
**Score:** 34/40 | **Lines:** 1,978 | **File size:** ~93KB

#### Technique Inventory (ALL DD techniques PLUS:)
11. **Scroll-driven animations** -- @keyframes + animation-timeline: view() + animation-range (Chromium-only with @supports fallback)
12. **Solid offset pseudo-element** -- .geological-survey::after creates neobrutalist depth (position: absolute, 4px offset, z-index: -1)
13. **Semantic spacing tokens** -- --space-within (8px), --space-between (32px), --space-chapter (64px) as Gestalt semantic aliases
14. **Zone background tokens** -- --color-zone-sparse, --color-zone-moderate, --color-zone-dense, --color-zone-densest
15. **Stratum-specific padding tokens** -- --stratum-established-padding through --stratum-open-padding (decreasing: 40px -> 32px -> 20px -> 16px)
16. **Confidence-encoded border weights** -- 4px/3px/2px/1px deliberately encoding confidence level (INTENTIONAL Rule 5 inversion)
17. **Evidence DNA markers** -- flexbox metadata rows with mono-font evidence type/strength/crux
18. **Confidence switcher UI** -- Tab-like control with active state (not JS-functional, visual prototype)
19. **Comparison grid** -- 2-column CSS grid with gap-as-border technique (3px gap + background color = visual grid lines)
20. **Stratum boundary system** -- 3-component: 48px whitespace + 3px rule + centered label (chapter-level transitions)
21. **Square progress indicators** -- 10x10px filled/empty squares for geological progress (Soul Piece #5)
22. **Geological minimap in header** -- Dark header contains miniature colored bars (4px/3px/2px/1px) as preview
23. **Epistemic disclosure markers** -- "You Are Reading" labels per stratum (EXT-CONF-005)
24. **6-variant callout system** -- Essence, Tip, Checkpoint, Warning, Gotcha, Note with color-coded borders
25. **Reveal animation classes** -- .reveal and .reveal-delay-1 with staggered entry ranges
26. **Offset tokens** -- --offset-x, --offset-y, --offset-color as solid shadow system

#### What's NEW at OD (vs DD)
| Technique | Trigger |
|-----------|---------|
| Scroll-driven animations | EXT-CREATIVE-004, OD-001 lesson chain |
| Solid offset depth (::after) | EXT-CREATIVE-001 neobrutalist, OD-001 discovery |
| Semantic spacing aliases | OD convention spec Section 6, EXT-CONV-003 |
| Zone background tokens | OD-F-005 "Organization IS Density" |
| Confidence-encoded borders | EXT-CONF-013, deliberate Rule 5 inversion |
| Stratum boundary system | EXT-CONF-014, R1-003 viewport principle |
| Evidence DNA markers | EXT-CONF-011, EA Forum epistemic |
| Switcher UI component | EXT-CONF-012, Stripe Docs pattern |
| Gap-as-border grid | OD convention, comparison grid implementation |
| Square progress indicators | Soul Piece #5 evolution |
| Dark header convention | EXT-CONF-015, OD convention Section 4 |
| Epistemic disclosure markers | EXT-CONF-005, Appleton research |

#### Metaphor Penetration Depth: DEEP
The geological metaphor encodes into CSS at **every structural level**:
- **Token level**: --stratum-*-padding tokens encode confidence as spacing
- **Border level**: Border weights (4px/3px/2px/1px) ARE confidence levels
- **Background level**: Zone tokens map to geological layers
- **Typography level**: Font sizes decrease with decreasing confidence (15px -> 14px)
- **Line-height level**: Line-height decreases (1.8 -> 1.7 -> 1.65 -> 1.6)
- **Content width level**: max-width narrows for confident strata (720px) and widens for uncertain
- **Spacing level**: Padding DECREASES with decreasing confidence (inverse density-confidence)
- **Visual chrome level**: Dark header IS a geological survey map

The metaphor doesn't just label things -- it generates NOVEL CSS values. Border weights, padding amounts, line heights, font sizes, and max-widths are all DERIVED from the geological metaphor's logic.

---

### 2C. AD-005 (Axis Exploration -- Choreography)
**Score:** ~73KB | **Lines:** 1,846

#### Technique Inventory (ALL DD + OD techniques PLUS:)
27. **clip-path: polygon()** -- Diagonal transitions between hub and spoke sections (descending and ascending variants)
28. **CSS Grid named areas** -- grid-template-areas with "featured featured standard-a standard-b" etc.
29. **Multi-breakpoint grid cascade** -- 4-col -> 2-col -> 1-col at 1440px/1024px/768px (EXT-AXIS-CH-005)
30. **Hover transitions** -- border-color transition on territory tiles (var(--transition-standard))
31. **Transition timing tokens** -- --transition-standard: 0.3s ease as reusable token
32. **Axis zone tokens** -- --axis-zone-primary, --axis-zone-secondary, --axis-zone-focal, --axis-zone-transition
33. **Progressive enhancement for JS reveal** -- .js-enabled .reveal-on-scroll pattern (start visible, JS hides, IntersectionObserver reveals)
34. **Offset pseudo-element on featured tile** -- ::after with 3px border + offset creating depth
35. **Breadcrumb wayfinding** -- Running header with separator elements (R2-1.4)
36. **Breathing zone** -- Full-width transition zones with border-top + border-bottom + breathing background
37. **Progress bar segments** -- flex-based rectangular segments with hub/spoke proportional sizing
38. **Spoke content pattern** -- Full-width dense sections with constrained inner max-width
39. **Chapter divider** -- Simple 3px border-top at 32px margin (structural separation)
40. **Compact interstitial** -- Lightweight axis-transition marker (32px padding vs 48px breathing zone)
41. **Page closing** -- Centered rule (80x3px primary) + italic mark
42. **Print styles** -- @media print with color overrides
43. **Font smoothing** -- -webkit-font-smoothing: antialiased, -moz-osx-font-smoothing: grayscale
44. **Syntax highlighting tokens** -- --syntax-keyword through --syntax-punctuation (7 token colors)
45. **SR-only utility** -- Screen-reader-only class with clip: rect(0,0,0,0) pattern
46. **Table styles** -- Open grid (no vertical borders), responsive overflow

#### What's NEW at AD (vs OD)
| Technique | Trigger |
|-----------|---------|
| clip-path: polygon() diagonals | EXT-AXIS-CH-002, R4-113, R4-126, R4-128 |
| CSS Grid named areas | R2-4.2 asymmetric grid, hub-spoke topology |
| Multi-breakpoint cascade | EXT-AXIS-CH-005, Section 12.5 responsive |
| Transition timing token | AD convention Section 15 |
| Axis zone token layer | AD convention Section 14 |
| JS progressive enhancement | Section 15.3, EXT-CREATIVE-004 |
| Proportional progress segments | EXT-AXIS-CH-004, R4-122 |
| Breadcrumb wayfinding | R2-1.4, EXT-SPAT-002 |
| Print media query | AD convention addition |
| Syntax highlighting token set | AD convention (7-color system) |
| SR-only utility class | Accessibility expansion |
| Page closing component | LW-3 fix (dead zone elimination) |
| Compact interstitial | LW-4 fix (transition density control) |

#### Metaphor Penetration Depth: STRUCTURAL
The choreography/hub-spoke metaphor encodes into:
- **Layout topology**: Grid named areas create literal hub (4-col establishing shot) vs spoke (1-col close-up)
- **Spatial transitions**: clip-path diagonals create physical direction change (descending = entering spoke, ascending = returning)
- **Progress encoding**: Segment widths (hub=1fr, spoke=3fr) encode navigation position
- **Background zones**: Zone tokens differentiate hub (dense), spoke (dense), transition (breathing)
- **Spacing rhythm**: Hub gaps (24px) vs spoke internal spacing (32px) encode density shift

The choreography metaphor generates CSS techniques that DON'T EXIST in prior stages (clip-path, named grid areas, proportional segments).

---

### 2D. CD-006 (Combination Exploration -- Pilot Migration)
**Score:** 39/40 | **Lines:** 2,085

#### Technique Inventory (ALL DD + OD + AD techniques PLUS:)
47. **Drop caps** -- ::first-letter pseudo-element (3.5em Instrument Serif, float: left, primary color)
48. **Multiple axis patterns in one page** -- Z-Pattern, F-Pattern, Bento Grid, Spiral, Choreography ALL present
49. **3-type transition grammar** -- Smooth (48px + 1px), Bridge (64px + breathing zone), Breathing (80px + 3px)
50. **Reasoning component** -- 2-column comparison (grid 1fr 1fr) + recommendation row with green border
51. **Decision matrix component** -- Bordered table with label header, recommended row highlight
52. **Core abstraction component** -- Composite: label + principle (serif italic) + proof (dark code block)
53. **Task component** -- Checkbox list with 16x16px square checkboxes
54. **File tree component** -- Mono-font indented tree with --l1/--l2/--l3 padding levels
55. **QA block component** -- Question in serif italic with 4px primary border-left, indented answer
56. **Strata system** -- 3-tier border-weight encoding (4px established, 3px probable, 1px speculative)
57. **Footer mirroring header** -- Dark footer with primary border-top, flex layout, ID + rule
58. **Version badge** -- Inline mono-font badge with 1px border
59. **TOC with density annotations** -- Table of contents listing section titles + density labels (sparse/dense/breathing)
60. **Bento grid** -- 4-column grid with --wide (span 2) and --large (span 2x2) variants
61. **Z-hero layout** -- Golden ratio grid (1.618fr 1fr) with primary/secondary/diagonal/terminal zones
62. **Spiral strata layout** -- Flex column with border-weight gradient per confidence level
63. **Choreography hub/spoke** -- Hub (centered, bordered, focal) + spokes (3-column grid)
64. **F-movement sections** -- Sequential sections with heading hierarchy (F-pattern reading)
65. **Axis zone token layer** -- Inherited from AD: --axis-zone-primary, --axis-zone-secondary, etc.
66. **Crown jewel divergence** -- --type-page: 3rem (overriding 2.5rem convention -- documented S9 divergence)

#### What's NEW at CD (vs AD)
| Technique | Trigger |
|-----------|---------|
| Drop caps (::first-letter) | CD-006 S9 crown jewel divergence requirement |
| Transition grammar (3 types) | CD convention S18.3, AD-F-025 transition grammar |
| Reasoning component | R5 combination theory, multi-perspective |
| Decision matrix component | CD convention, structured decision support |
| Core abstraction component | CD composite: Essence + Code proof |
| Task component with checkboxes | CD convention, interactive task tracking |
| File tree component | CD convention, project structure display |
| QA block | CD OD-001 pattern revival, Q&A with primary accent |
| TOC with density annotations | CD-F-021+ findings, navigation-scale fractal |
| Z-hero golden ratio grid | AD-001 pattern application (1.618fr) |
| Bento span variants (wide/large) | AD-003 pattern application |
| Spiral strata in content | AD-004 pattern application |
| Choreography hub/spoke | AD-005 pattern application |
| Crown jewel type override | CD-006 documented divergence (3rem vs 2.5rem) |
| Footer component | CD convention C-02/C-04/C-23 |

#### Metaphor Penetration Depth: COMPREHENSIVE (ALL PRIOR METAPHORS UNIFIED)
CD-006 doesn't have a SINGLE metaphor -- it is a SYNTHESIS of all prior metaphors operating simultaneously:
- Geological strata (confidence encoding)
- Hub-spoke choreography (navigation topology)
- Z/F reading patterns (eye movement guidance)
- Bento containment (visual variety within structure)
- Fractal self-similarity (5 scales: navigation, page, section, component, character)

The metaphor penetration is **total** because CD combines ALL prior axis patterns, each carrying its own CSS technique vocabulary. The pilot migration metaphor adds a meta-layer: this is a page ABOUT building pages, so the system demonstrates itself.

---

## 3. VARIANT B ANALYSIS

### 3A. What Variant B HAS
- Token architecture (:root block with 37 properties)
- Font trinity (Instrument Serif, Inter, JetBrains Mono)
- Soul enforcement (border-radius: 0, box-shadow: none)
- Basic responsive (@media max-width: 768px, single breakpoint)
- Novel metaphor: "Lab environment" with safety zones, clean rooms, measurement protocols
- Instrument cards (2-zone DNA: label + body)
- Error cards (metric + label + description)
- Protocol cards (Instrument Serif italic, primary accent)
- Cost meter component
- Research question component
- Measurement tables
- Tier encoding (border-weight: 4px critical, 3px verify, 1px monitor)
- Inline code styling

### 3B. What Variant B LACKS (Present in Even DD-006)
| Technique | DD | OD | AD | CD | Variant B |
|-----------|----|----|----|----|-----------|
| CSS Grid layouts | YES | YES | YES | YES | **NO** |
| Flexbox layouts | YES | YES | YES | YES | **NO** |
| Pseudo-elements (::before/::after) | YES | YES | YES | YES | **NO** |
| position: absolute/relative | YES | YES | YES | YES | **NO** |
| z-index layering | YES | YES | YES | YES | **NO** |
| @keyframes animations | NO | YES | NO | NO | **NO** |
| Scroll-driven animation | NO | YES | NO | NO | **NO** |
| clip-path | NO | NO | YES | NO | **NO** |
| Grid named areas | NO | NO | YES | YES | **NO** |
| Multi-column responsive | YES | YES | YES | YES | **NO** |
| Skip-link accessibility | YES | YES | YES | YES | **NO** |
| :focus-visible | YES | YES | YES | YES | **NO** |
| prefers-reduced-motion | YES | YES | YES | YES | **NO** |
| ::selection styling | YES | YES | YES | YES | **NO** |
| Dark header convention | NO | YES | YES | YES | **NO** |
| Solid offset depth | NO | YES | YES | NO | **NO** |
| Semantic spacing aliases | NO | YES | YES | YES | **NO** |
| Zone background tokens | NO | YES | YES | YES | **NO** |
| Border-weight encoding | NO | YES (4-level) | YES (3-level) | YES (3-level) | Partial (3-tier) |
| Multiple component types | ~8 | ~16 | ~18 | ~22 | ~8 |
| Fractal scale demo | YES (4 scales) | YES (4 scales) | YES (5 scales) | YES (5 scales) | **NO** |
| Drop caps | NO | NO | NO | YES | **NO** |
| Print styles | NO | NO | YES | YES | **NO** |
| Transition grammar | NO | NO | Implicit | Explicit (3 types) | **NO** |
| TOC component | NO | NO | NO | YES | **NO** |
| File tree component | NO | NO | NO | YES | **NO** |
| Footer component | NO | NO | YES | YES | **NO** |

### 3C. Where Variant B Sits on the DD-CD Progression

**Variant B is PRE-DD in structural richness.**

Variant B sits BELOW DD-006 on the richness scale. Here's why:

1. **Layout**: Variant B uses NO flexbox, NO grid. DD-006 uses both. Variant B relies entirely on block-level stacking -- the simplest possible CSS layout model.

2. **Pseudo-elements**: Variant B uses ZERO pseudo-elements. DD-006 uses 3 (section-divider::before, ::selection). The absence of pseudo-elements means no decorative layers, no generated content, no visual depth.

3. **Positioning**: Variant B uses ZERO positioned elements. DD-006 uses 5 (skip-link absolute, section-divider relative, etc.). This means no overlapping layers, no offset effects, no z-axis composition.

4. **Responsiveness**: Variant B has 1 media query (768px single breakpoint). DD-006 has 5 media queries across 3 breakpoints. Variant B's responsive behavior is minimal.

5. **Accessibility**: Variant B has ZERO accessibility features (no skip-link, no focus-visible, no reduced-motion). DD-006 has all three.

6. **Animation/Transition**: While Variant B has 11 transition references (likely from hover states), it has 0 animations. DD-006 has the reduced-motion declaration and ::selection.

**What Variant B DOES have that's comparable to DD:**
- Token architecture (similar scope)
- Border-weight encoding (3-tier vs DD's implicit)
- Callout-like components (2-zone label+body DNA)
- Novel metaphor vocabulary ("lab", "instrument card", "safety briefing")

**What Variant B DOES that's BETTER than DD:**
- Metaphor novelty (4/5 -- lab environment is genuinely novel)
- Custom component vocabulary (instrument cards, error cards, cost meters, research questions are new types)
- The border-weight encoding is SEMANTICALLY rich (critical/verify/monitor maps to trust tiers)

### 3D. The Richness Gap: Summary

| Dimension | DD-006 | Variant B | Gap |
|-----------|--------|-----------|-----|
| **Layout techniques** | Grid + Flex | Block-only | CRITICAL |
| **Visual depth** | Pseudo-elements + position | Flat stacking | MAJOR |
| **Accessibility** | Complete | Missing | MAJOR |
| **Responsive** | 3 breakpoints | 1 breakpoint | MODERATE |
| **Animation** | Reduced-motion aware | None | MODERATE |
| **Component variety** | ~8 types | ~8 types | PARITY |
| **Token count** | ~28 unique | ~37 unique | Variant B HIGHER |
| **Metaphor novelty** | Moderate | High (4/5) | Variant B HIGHER |
| **Metaphor CSS encoding** | Moderate | Low | DD HIGHER |

---

## 4. WHAT TRIGGERS RICHNESS: THE ACCUMULATION MECHANISM

### 4A. Stage-to-Stage Richness Sources

Each stage introduces new CSS techniques. The sources are:

1. **Research findings** (R1-R5) -- Research discovered WHAT to express
2. **External research** (EXT-*) -- External patterns discovered HOW to express it
3. **Convention specifications** -- Convention specs STANDARDIZED the expression
4. **Cross-stage findings** (DD-F, OD-F, AD-F, CD-F) -- Prior-stage findings MANDATED new expressions
5. **Audit remediation** -- Audit findings FIXED expressions that violated constraints
6. **Accumulated identity** -- Identity documents ACCUMULATED all prior decisions

### 4B. The Accumulation Chain in Detail

```
DD-006 (Baseline):
  Source: R3 (51 density findings) + DESIGN-TOKEN-SUMMARY
  Produces: 28 tokens, 8 component types, 3 pseudo-elements
  New technique families: token architecture, border-weight system, fractal nesting

     |
     v  +18 DD-F findings forwarded
     |  +12 EXT-CONF findings consumed
     |  +OD-CONVENTION-SPEC standardization
     |
OD-004 (Major richness jump):
  Source: R1 (28 org findings) + DD-F-001 through DD-F-018 + EXT-CONF-001 through EXT-CONF-018
  Adds: scroll animations, solid offset, semantic spacing, zone tokens,
        confidence-encoded borders, evidence DNA, switcher UI, comparison grid,
        stratum boundaries, square progress, dark header, epistemic markers
  New technique families: animation-timeline, pseudo-element depth, gap-as-border,
        semantic token aliasing, confidence-proportional CSS properties

     |
     v  +17 OD-F findings forwarded
     |  +33 EXT-AXIS-* findings consumed
     |  +AD-CONVENTION-SPEC (822 lines)
     |
AD-005 (Technique variety peak):
  Source: R4 (192 axis findings!) + R2 (27 creative) + EXT-AXIS-CH-001 through EXT-AXIS-CH-005
  Adds: clip-path diagonals, named grid areas, multi-breakpoint cascade,
        transition timing tokens, axis zone tokens, JS progressive enhancement,
        progress segments, breadcrumbs, print styles, SR-only utility
  New technique families: clip-path geometry, named grid topology,
        progressive enhancement, print media

     |
     v  +28 AD-F findings forwarded (ALL prior + AD-F-023 ATTENTION TOPOLOGY)
     |  +39 R5 combination findings consumed
     |  +CD-CONVENTION-SPEC
     |
CD-006 (Synthesis crown jewel):
  Source: ALL prior findings + R5 (39 combination findings) + ACCUMULATED-IDENTITY-v2
  Adds: drop caps, 3-type transition grammar, reasoning component,
        decision matrix, core abstraction, task component, file tree,
        QA block, density-annotated TOC, ALL 5 axis patterns, footer,
        crown jewel type override
  New technique families: composite components (label+principle+proof),
        multi-pattern unification, explicit transition grammar
```

### 4C. Richness Accumulation is NOT Linear

The richness jump from DD to OD is the LARGEST in the pipeline:

| Transition | New Techniques Added | Primary Driver |
|------------|---------------------|---------------|
| DD -> OD | ~16 new techniques | External research (18 EXT-CONF-* findings) + Convention spec |
| OD -> AD | ~13 new techniques | R4's massive research base (192 findings) + Convention spec |
| AD -> CD | ~14 new techniques | Combination of ALL prior (synthesis) + R5 theory |

The OD jump is largest because:
1. OD is the first stage with a CONVENTION SPECIFICATION (standardizing output)
2. OD consumed 18 external research findings (EXT-CONF-001 through EXT-CONF-018) -- more than any other stage
3. The geological metaphor demanded NOVEL CSS value generation (border weights AS confidence, padding AS certainty)
4. The scroll-driven animation API and solid offset technique are architecturally novel additions that didn't exist in DD's vocabulary

---

## 5. WHAT "RICHNESS" ACTUALLY MEANS IN CSS TERMS

### 5A. The Five Dimensions of Richness

Based on this analysis, "richness" in concrete CSS terms consists of:

**Dimension 1: Layout Complexity**
- Block-only (Variant B) -> Flex (DD) -> Grid (DD/OD) -> Named grid areas (AD) -> Multi-pattern (CD)
- This is the MOST IMPACTFUL dimension. Without grid and flex, all visual variety collapses to vertical stacking.

**Dimension 2: Visual Depth**
- Flat (Variant B) -> Pseudo-elements (DD) -> Offset shadows (OD) -> Clip-path geometry (AD) -> Drop caps + composite (CD)
- Pseudo-elements and positioning create layers that make pages feel three-dimensional and crafted.

**Dimension 3: Token Semantic Density**
- Raw values (none) -> Design tokens (DD) -> Semantic aliases (OD) -> Zone tokens (AD) -> Composite tokens (CD)
- Each stage adds a NEW LAYER of token meaning: DD's tokens are VALUES; OD's tokens are INTENTIONS (--space-chapter means something); AD's tokens are ZONES (--axis-zone-focal).

**Dimension 4: Responsive Sophistication**
- 0 breakpoints (none) -> 1 breakpoint (Variant B) -> 3 breakpoints (DD) -> Progressive cascade (AD) -> Pattern-aware responsive (CD)
- Richness includes HOW the layout adapts, not just WHETHER it adapts.

**Dimension 5: Metaphor-to-CSS Encoding Depth**
- Labels only (surface) -> Background differentation (DD) -> Value generation (OD) -> Technique generation (AD) -> Full unification (CD)
- The deepest richness comes when the conceptual metaphor GENERATES CSS properties that would not exist without the metaphor. OD's border-weight-as-confidence and AD's clip-path-as-direction-change are techniques the metaphor INVENTED.

### 5B. Why Variant B Scores High on Novelty but Low on Richness

Variant B has:
- A genuinely novel metaphor (lab environment: 4/5 novelty)
- Good token compliance (97-100%)
- Custom component vocabulary (instrument cards, cost meters)

But it lacks richness because:
1. The lab metaphor generates LABELS (safety briefing, clean room) but not CSS TECHNIQUES. The metaphor names zones; it doesn't create new layout patterns.
2. Without grid/flex, all "lab zones" are just border + padding + background variations on a single-column block stack.
3. The tier encoding (critical/verify/monitor = 4px/3px/1px) is the ONE place where metaphor generates CSS values -- and it's the strongest part of the page.
4. Zero pseudo-elements means no decorative depth, no generated content, no visual layering.
5. Zero positioning means no overlapping, no offsets, no z-axis composition.

**The core insight:** Variant B's tension-composition skill generates SEMANTIC richness (good metaphor, good naming, good conceptual structure) but NOT TECHNICAL richness (layout patterns, visual depth, responsive behavior, CSS technique variety).

---

## 6. THE RICHNESS DELTA: WHAT THE PIPELINE ACCUMULATES

### What Variant B Would Need to Match DD-006 (Minimum Richness)
1. At least ONE CSS Grid or Flexbox layout
2. At least ONE pseudo-element (decorative or functional)
3. At least ONE positioned element
4. Skip-link + focus-visible + prefers-reduced-motion (accessibility)
5. At least 2 responsive breakpoints with layout changes

### What Variant B Would Need to Match OD-004 (Average Pipeline Richness)
All of the above, PLUS:
6. Scroll-driven or conventional CSS animation
7. Solid offset pseudo-element (neobrutalist depth)
8. Semantic spacing aliases (--space-within, --space-chapter)
9. Zone background tokens differentiating content areas
10. Metaphor-derived CSS values (the metaphor should GENERATE at least some token values)
11. Multi-component callout system (at least 4 variants)
12. Dark header convention

### What Variant B Would Need to Match CD-006 (Peak Richness)
All of the above, PLUS:
13. Multiple axis layout patterns in a single page
14. Explicit transition grammar between sections
15. Drop caps or equivalent editorial flourish
16. Composite components (multi-zone beyond 2-zone)
17. Table of contents with metadata annotations
18. Footer mirroring header
19. Print styles
20. 11+ distinct component types

---

## 7. CONCLUSIONS

### 7.1 Richness is Accumulated, Not Designed
No single stage "designs" richness. Each stage inherits ALL prior techniques and adds its own. CD-006's 22+ component types and 634 custom property references exist because 4 prior stages each contributed their own technique vocabulary. The pipeline IS the richness mechanism.

### 7.2 External Research is the Primary Richness Driver
The OD richness jump (largest single-stage increase) was driven by 18 EXT-CONF-* findings -- external research patterns that introduced scroll-driven animation, neobrutalist offset, epistemic disclosure, etc. Raw R-series findings provide WHAT to express; EXT-* findings provide HOW.

### 7.3 Convention Specifications Crystallize Richness
The OD Convention Spec was the first stage to have one. It standardized the dark header, code block theme, callout system, and spacing scale that all subsequent stages inherited. Convention specs transform ad-hoc technique discovery into SYSTEMATIC vocabulary.

### 7.4 Metaphor Depth Correlates with Richness
The richest stages have metaphors that GENERATE CSS values:
- OD's geological metaphor generates border weights, padding amounts, line heights, and font sizes
- AD's choreography metaphor generates clip-path polygons, grid area names, and progress segment proportions
- Variant B's lab metaphor generates labels but not CSS values

**The key diagnostic question for any new page:** Does the metaphor merely NAME CSS properties, or does it DERIVE them?

### 7.5 Variant B is Pre-DD in Structural Richness
Despite scoring highest on novelty (4/5) and compliance (18/19), Variant B's CSS is structurally simpler than the earliest pipeline stage. It uses zero grid, zero flex, zero pseudo-elements, zero positioning, and zero accessibility features. Its richness is entirely SEMANTIC (good naming, good metaphor) rather than TECHNICAL (layout patterns, visual depth, responsive behavior).

### 7.6 The Tension-Composition Skill Produces Semantic Richness, Not Technical Richness
This is the core finding. The skill generates excellent metaphors and conceptual structure, but does not encode the ACCUMULATED TECHNICAL VOCABULARY of the pipeline. The 337 research findings, 94 external research findings, and 4 convention specifications that produced the pipeline's richness are compressed out of the skill.

---

## APPENDIX A: Complete Technique Taxonomy

| # | Technique | First Stage | Trigger | Variant B? |
|---|-----------|-------------|---------|------------|
| 1 | CSS Custom Properties | DD | Token architecture | YES |
| 2 | Flexbox | DD | Layout need | NO |
| 3 | CSS Grid | DD | Multi-column layout | NO |
| 4 | Responsive media queries | DD | Multi-device | PARTIAL (1 only) |
| 5 | Pseudo-elements | DD | Decorative depth | NO |
| 6 | Accessibility (skip, focus, reduced-motion) | DD | Convention | NO |
| 7 | Nested opacity encoding | DD | Fractal metaphor | NO |
| 8 | BEM-like naming | DD | Convention | PARTIAL |
| 9 | Border-weight system | DD | Soul enforcement | YES |
| 10 | Dark code block | DD | Convention | NO |
| 11 | Scroll-driven animation | OD | EXT-CREATIVE-004 | NO |
| 12 | Solid offset pseudo | OD | EXT-CREATIVE-001 | NO |
| 13 | Semantic spacing aliases | OD | EXT-CONV-003 | NO |
| 14 | Zone background tokens | OD | OD-F-005 | PARTIAL |
| 15 | Confidence-encoded borders | OD | EXT-CONF-013 | PARTIAL |
| 16 | Evidence DNA markers | OD | EXT-CONF-011 | NO |
| 17 | Switcher UI component | OD | EXT-CONF-012 | NO |
| 18 | Gap-as-border grid | OD | OD convention | NO |
| 19 | Stratum boundary system | OD | EXT-CONF-014 | NO |
| 20 | Square progress indicators | OD | Soul Piece #5 | NO |
| 21 | Dark header convention | OD | EXT-CONF-015 | NO |
| 22 | Epistemic disclosure | OD | EXT-CONF-005 | NO |
| 23 | 6-variant callout system | OD | Soul Piece #4 | NO |
| 24 | clip-path geometry | AD | R4-113, EXT-AXIS-CH-002 | NO |
| 25 | Named grid areas | AD | R2-4.2 | NO |
| 26 | Multi-breakpoint cascade | AD | EXT-AXIS-CH-005 | NO |
| 27 | Transition timing token | AD | AD convention S15 | NO |
| 28 | Axis zone tokens | AD | AD convention S14 | NO |
| 29 | JS progressive enhancement | AD | Section 15.3 | NO |
| 30 | Progress segments | AD | EXT-AXIS-CH-004 | NO |
| 31 | Breadcrumb wayfinding | AD | R2-1.4 | NO |
| 32 | Print styles | AD | AD convention | NO |
| 33 | SR-only utility | AD | Accessibility | NO |
| 34 | Drop caps | CD | S9 crown jewel | NO |
| 35 | 3-type transition grammar | CD | AD-F-025 | NO |
| 36 | Reasoning component | CD | R5 combination | NO |
| 37 | Decision matrix | CD | CD convention | NO |
| 38 | Core abstraction | CD | CD composite | NO |
| 39 | Task component | CD | CD convention | NO |
| 40 | File tree component | CD | CD convention | NO |
| 41 | QA block | CD | OD-001 revival | NO |
| 42 | TOC with density | CD | CD-F-021 | NO |
| 43 | Multi-pattern page | CD | AD-F-023 synthesis | NO |
| 44 | Footer mirroring header | CD | CD convention | NO |

**Variant B uses: 5 of 44 techniques (11.4%)**
**DD-006 uses: 10 of 44 techniques (22.7%)**
**OD-004 uses: 23 of 44 techniques (52.3%)**
**AD-005 uses: 33 of 44 techniques (75.0%)**
**CD-006 uses: 44 of 44 techniques (100%)**

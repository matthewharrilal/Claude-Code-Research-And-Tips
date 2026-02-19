# CSS Forensics: CD-006 vs Flagship (07-intentionality.html)

## Method

Side-by-side analysis of exact CSS declarations in:
- **CD-006:** `design-system/validated-explorations/combination/CD-006-pilot-migration.html` (39/40, crown jewel)
- **Flagship:** `ephemeral/flagship-experiment/07-intentionality.html` (failed on richness)
- **Prior analysis:** `ephemeral/flagship-audit/05-crown-jewel-comparison.md` (used as cross-reference, not as source)

All data below is extracted directly from the HTML/CSS source. Line numbers refer to source files.

---

## 1. RAW METRICS COMPARISON

| Metric | CD-006 | Flagship | Delta |
|--------|--------|----------|-------|
| **CSS lines** (to `</style>`) | 1,090 (lines 72-1090) | 1,034 (lines 50-1034) | CD-006 +56 |
| **`font-size` declarations** | 50 | 25 | CD-006 2x |
| **`background` declarations** | 49 | 37 | CD-006 +12 |
| **`border` declarations** | 80 | 82 | Nearly equal |
| **`display: grid/flex` in CSS** | 10 (5 grid + 5 flex) | 0 | **CD-006 +10** |
| **CSS custom properties (uses)** | 414 | 268 | CD-006 +146 |
| **`@media` queries** | 5 (reduced-motion, print, 960, 768, 480) | 0 | **CD-006 +5** |
| **`grid-template-columns` rules** | 9 (5 definitions + 4 responsive) | 0 | **CD-006 +9** |
| **`role="note"` in HTML** | 17 | 0 | CD-006 +17 |
| **`aria-label` in HTML** | 21 | 0 | CD-006 +21 |
| **Callout class instances in HTML** | 29 | 0 | **CD-006 +29** |
| **`component-block` instances in HTML** | 0 | 27 | Flagship +27 |

**Key finding:** The two files have SIMILAR total CSS line counts (~1,050 each). The gap is not quantity -- it is WHERE those lines are spent.

---

## 2. DISTINCT FONT-SIZE VALUES

### CD-006: 13 distinct values
| Value | Where used | Lines |
|-------|-----------|-------|
| `3rem` (48px) | `--type-page`, `h1`, `.header-title` | 94, 189, 280 |
| `2rem` | Responsive header at 768px | 1029 |
| `1.625rem` (26px) | `--type-section`, `h2`, responsive 480px | 95, 190, 1074 |
| `1.375rem` (22px) | `--type-subsection`, `h3`, responsive 480px h2 | 96, 192, 1078 |
| `1.25rem` (20px) | `.core-abstraction-principle` | 626 |
| `1.125rem` (18px) | `.callout--essence .callout-body` | 453 |
| `1rem` (16px) | `--type-body`, body text | 97, 176 |
| `0.9em` | Inline `code` elements | 506 |
| `0.875rem` (14px) | `--type-code`, code blocks | 98 |
| `0.8125rem` (13px) | Responsive code at 480px | 1083 |
| `0.75rem` (12px) | `--type-meta`, labels | 99 |
| `0.625rem` (10px) | `.version-badge` | 272 |
| `3.5em` (~56px) | `.drop-cap::first-letter` | 386 |

### Flagship: 9 distinct values
| Value | Where used | Lines |
|-------|-----------|-------|
| `36px` | `--type-h1` | 85 |
| `28px` | `--type-h2` | 86 |
| `22px` | `--type-h3` | 87 |
| `16px` | `--type-body` | 84, 172 |
| `14px` | `--type-code` | 89 |
| `12px` / `0.75rem` | `--type-meta`, `.section-meta` | 88, 1014 |
| `11px` | `.table-light th` | 399 |
| `10px` | `.footer-provenance` | 1026 |
| `3.5em` | `.drop-cap::first-letter` | 276 |
| `1.125rem` | `.closing-essence` | 987 |

**CD-006 has 13 distinct sizes vs Flagship's 9.** But the critical difference is not count -- it's deployment. CD-006 uses `1.25rem` for core-abstraction principles and `0.625rem` for version badges, creating MORE visual hierarchy tiers. More importantly, CD-006 has responsive type scaling at 3 breakpoints (sizes change at 960/768/480), while Flagship sizes are static.

---

## 3. DISTINCT BACKGROUND COLORS

### CD-006: 12 distinct backgrounds
| Color | Where | Lines |
|-------|-------|-------|
| `var(--color-text)` / `#1A1A1A` | Header, code blocks, core-abstraction-proof, footer | 249, 468, 634, 952 |
| `var(--color-background)` / `#FEF9F5` | Body default | 179 |
| `var(--color-zone-breathing)` / `#FAF5ED` | TOC, bridge transitions, file-tree, decision-matrix-label, task-label, recommended even rows | 308, 516, 565, 659, 704, 782, 924 |
| `var(--color-zone-dense)` / `#FFFFFF` | `--axis-zone-primary`, bento-item, choreo-spoke | 803, 937 |
| `#F5F9FE` | `.callout--info` | 427 |
| `#F2F9F4` | `.callout--tip`, `.decision-matrix .recommended`, `.reasoning-recommendation` | 433, 599, 761 |
| `#FEF6F5` | `.callout--gotcha` | 440 |
| `#FFFBF2` | `.callout--challenge` | 461 |
| `#F8F5FE` | `.core-abstraction-label` | 619 |
| `var(--axis-zone-focal)` / `#FEF9F5` | `.choreo-hub` | 924 |
| `white` | Print body | 994 |
| `#f5f5f5` | Print code blocks | 997 |

### Flagship: 18 defined, but only 5 perceptibly distinct
| Color | Where | Perceptible? |
|-------|-------|-------------|
| `#FEF9F5` | `--color-zone-s1`, `--color-zone-s10`, `--color-zone-s12`, body default | YES (base warm cream) |
| `#FAF5ED` | `--color-zone-s2`, `--color-zone-s11`, `--color-zone-breathing` | YES (warm tan) |
| `#FDF8F2` | `--color-zone-s3` | NO (1-2 RGB points from s1) |
| `#FDFBF8` | `--color-zone-s4` | NO (imperceptible shift) |
| `#FEFEFE` | `--color-zone-s5`, `--color-zone-s7`, `--color-zone-s8`, `--color-zone-dense` | YES (near-white) |
| `#FBF7F1` | `--color-zone-s6` | NO (imperceptible) |
| `#FEFCFA` | `--color-zone-s9` | NO (imperceptible) |
| `var(--color-text)` / `#1A1A1A` | Header, sequence-block, footer | YES (dark) |
| `var(--color-zone-breathing)` | Even-row table alternation | YES (tan) |

**CD-006 has 12 backgrounds, 10 perceptibly distinct.** The distinct callout backgrounds (`#F5F9FE` blue tint, `#F2F9F4` green tint, `#FEF6F5` coral tint, `#FFFBF2` amber tint, `#F8F5FE` purple tint) are each a DIFFERENT HUE, not a different shade of cream.

**Flagship defines 18 zone backgrounds but only 5 are perceptibly distinct to the human eye.** The remaining 13 vary by 1-8 RGB points within the warm cream spectrum. The flagship has ZERO distinct-hue tinted backgrounds (no blue tint, no green tint, no coral tint, no purple tint).

---

## 4. BORDER DECLARATIONS

### CD-006: 23 distinct border contexts

**3px structural borders (containment):**
1. `header { border-bottom: 3px solid var(--color-primary) }` -- line 251
2. `.toc { border: 3px solid var(--color-border) }` -- line 309
3. `.code-block { border: 3px solid var(--color-border) }` -- line 470
4. `.file-tree { border: 3px solid var(--color-border) }` -- line 517
5. `.decision-matrix { border: 3px solid var(--color-border) }` -- line 552
6. `.core-abstraction { border: 3px solid var(--color-border) }` -- line 607
7. `.task-component { border: 3px solid var(--color-border) }` -- line 647
8. `.reasoning { border: 3px solid var(--color-border) }` -- line 692
9. `.bento-item { border: 3px solid var(--color-border) }` -- line 804
10. `.choreo-hub { border: 3px solid var(--color-border) }` -- line 925
11. `.choreo-spoke { border: 3px solid var(--color-border) }` -- line 937
12. `.page-footer { border-top: 3px solid var(--color-primary) }` -- line 953
13. `.decision-matrix th { border-bottom: 3px solid var(--color-border) }` -- line 583
14. `.reasoning-recommendation { border-top: 3px solid var(--accent-green) }` -- line 762
15. `.transition--breathing { border-top: 3px solid var(--color-border) }` -- line 789

**4px left borders (identity/callout system):**
16. `.callout { border-left: var(--border-left-width) solid }` (4px) -- line 398
17. `.stratum--established { border-left: 4px solid var(--color-text) }` -- line 898
18. `.qa-question { border-left: 4px solid var(--color-primary) }` -- line 864

**Semantic border-weight gradient:**
19. `.stratum--probable { border-left: 3px solid var(--color-text-secondary) }` -- line 902
20. `.stratum--speculative { border-left: 1px solid var(--color-border) }` -- line 906

**1px internal borders:**
21. `.decision-matrix td { border-bottom: 1px solid var(--color-border) }` -- line 590
22. `.core-abstraction-label { border-bottom: 1px solid var(--color-border) }` -- line 620
23. `.code:not(pre code) { border: 1px solid var(--color-border) }` -- line 509

### Flagship: 14 distinct border contexts

**Structural/accent:**
1. `.page-header { border-bottom: var(--border-accent) solid var(--color-primary) }` (3px) -- line 194
2. `.page-footer { border-top: var(--border-accent) solid var(--color-primary) }` (3px) -- line 662
3. `table thead tr { border-bottom: var(--border-accent) solid var(--color-text) }` (3px) -- line 301
4. `.table-featured { border-left: var(--border-structural) solid var(--color-primary) }` (4px) -- line 357
5. `.table-moderate { border-left: var(--border-accent) solid var(--color-border) }` (3px) -- line 367
6. `.table-warning { border-left: var(--border-accent) solid var(--color-coral) }` (3px) -- line 378
7. `.table-light { border: var(--border-micro) solid var(--color-border-subtle) }` (1px) -- line 391
8. `.table-findings { border-top: var(--border-accent) solid var(--color-text) }` (3px) -- line 405

**Component left border:**
9. `.component-block { border-left: var(--border-structural) solid var(--color-primary) }` (4px) -- line 456
10. `.component-block .component-label { border-bottom: var(--border-micro) solid }` (1px) -- line 468

**Table cell borders:**
11. `table td { border-bottom: var(--border-micro) solid var(--color-border-subtle) }` (1px) -- line 319

**Dividers:**
12. `.divider-smooth { height: 1px }` (uses height, not border) -- line 591
13. `.divider-bridge { height: 1px }` -- line 599
14. `.divider-breathing { height: 3px }` -- line 607

**Key difference:** CD-006 has 11 components with 3px containment borders. Flagship has ZERO components with containment borders -- only tables get outer borders, and only in certain variants. The `component-block` has a 4px LEFT border but no surrounding containment. This is the single biggest visual difference between the two pages.

---

## 5. COMPONENT TYPES WITH DISTINCT STYLING

### CD-006: 11 distinct component types
1. **Callout--info** (blue left border, `#F5F9FE` bg) -- 5 instances
2. **Callout--tip** (green left border, `#F2F9F4` bg) -- 4 instances
3. **Callout--gotcha** (coral left border, `#FEF6F5` bg) -- 3 instances
4. **Callout--essence** (purple left border, breathing bg, serif italic body) -- 3 instances
5. **Callout--challenge** (amber left border, `#FFFBF2` bg) -- 2 instances
6. **Code-block** (dark bg, mono font, 3px border, syntax highlighting) -- multiple
7. **File-tree** (breathing bg, 3px border, mono font, indentation levels) -- 2 instances
8. **Decision-matrix** (3px bordered table with header bg, recommended row highlight) -- 1 instance
9. **Core-abstraction** (3px border, purple label bg, serif principle, dark code proof) -- 2 instances
10. **Task-component** (3px border, label zone, checkbox list) -- 3 instances
11. **Reasoning** (3px border, 2-column grid, green recommendation zone) -- 2 instances

### Flagship: 3 component types
1. **Component-block** (4px left red border, mono label, body) -- variations: `.neutral`, `.warm`, `.resolution` (different left-border colors only)
2. **Sequence-block** (dark bg, mono font, arrow-prefixed list items)
3. **Pullquote/master-insight** (4px left red border, outline offset, serif display)

**CD-006 has 3.7x more component types.** Each type in CD-006 has unique border treatment, unique background color, unique typography, and unique internal structure. The flagship's `component-block` is one shape with three color variations -- visually it reads as the same component throughout.

---

## 6. MAX-WIDTH VARIATION

### CD-006: 2 max-width values in body
| Value | Element | Line |
|-------|---------|------|
| `1100px` | `.page-container`, `.header-inner`, `.page-footer__inner` | 299, 256, 958 |
| `70ch` | `p` max-width | 197 |

### Flagship: 5 max-width values
| Value | Element | Line |
|-------|---------|------|
| `960px` | `.page-container`, `.page-header .header-inner`, `.page-footer .footer-inner`, `.bridge-prose` | 182, 199, 667, 614 |
| `68ch` | `section p` | 262 |
| `640px` | `.page-header .header-subtitle` | 225 |
| `90%` | `.tension-group` | 528 |
| `85%` | `.narrow-table-wrapper` | 713 |
| `80%` | `.pullquote-wrapper` | 428 |
| `60ch` | `.bridge-prose p` | 624 |

**Flagship actually exceeds CD-006 on width variation** (7 vs 2 values). This is one of the few channels where the flagship invested more richness.

---

## 7. CSS CUSTOM PROPERTIES

### CD-006: 47 custom properties defined in `:root`
- 6 color tokens (`--color-*`)
- 3 zone backgrounds (`--color-zone-*`)
- 3 font families (`--font-*`)
- 6 type scale values (`--type-*`)
- 2 geometry tokens (`--border-radius`, `--box-shadow`)
- 14 spacing tokens (`--space-*`)
- 3 gestalt spacing aliases (`--space-within/between/chapter`)
- 5 callout accent colors (`--accent-*`)
- 1 border-left-width
- 3 offset tokens (`--offset-x/y/color`)
- 6 syntax highlighting colors (`--syntax-*`)
- 1 transition timing
- 4 axis zone tokens (`--axis-zone-*`)

**All 47 are USED in declarations** (414 total var() references).

### Flagship: 48 custom properties defined in `:root`
- 6 primary colors (`--color-*`)
- 3 font families (`--font-*`)
- 6 type scale values (`--type-*`)
- 14 spacing tokens (`--space-*`)
- 3 zone base backgrounds (`--color-zone-sparse/dense/breathing`)
- 12 per-section zone backgrounds (`--color-zone-s1` through `--color-zone-s12`)
- 4 accent colors (`--color-amber/blue/coral/green`)
- 3 border weight tokens (`--border-structural/accent/micro`)

**Usage:** 268 total var() references. The 12 per-section zone backgrounds are used once each (in `.zone-sN` rules). The 4 accent colors are sparsely used (amber in `.warm`, green in `.resolution`, coral in `.table-warning` -- blue is defined but barely applied in body).

**Key gap:** CD-006's custom properties are heavily cross-referenced (avg 8.8 uses per property). Flagship's are defined-and-used-once (avg 5.6 uses, and 12 of 48 are used exactly once).

---

## 8. CHANNEL-BY-CHANNEL CSS DIFF

For each channel, the exact CSS rules that would need to be added to Flagship to match CD-006's richness.

### Channel A: Structural Containment (CRITICAL -- highest impact gap)

**CD-006 has, Flagship lacks:**

```css
/* 3px containment borders on components -- CD-006 lines 552, 607, 647, 692, 517 */
/* The flagship's component-block only has border-LEFT. Adding full containment: */

.component-block {
  border: 3px solid var(--color-border);  /* REPLACE border-left-only */
}

/* Dedicated component types with 3px borders */
.callout--info {
  border-left-color: var(--color-blue);
  background: #F5F9FE;
}

.callout--tip {
  border-left-color: var(--color-green);
  background: #F2F9F4;
}

.callout--gotcha {
  border-left-color: var(--color-coral);
  background: #FEF6F5;
}

.callout--essence {
  border-left-color: #7C3AED;
  background: var(--color-zone-breathing);
}

.callout--essence .callout-body {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.125rem;
}

.callout--challenge {
  border-left-color: var(--color-amber);
  background: #FFFBF2;
}
```

**Lines needed:** ~40 CSS lines + HTML restructuring of component-block instances
**Impact:** Transforms body from "same left-bordered box repeated" to "visually differentiated components"

### Channel B: Grid Layouts (CRITICAL -- zero grid in flagship)

**CD-006 has, Flagship lacks:**

```css
/* Bento grid -- CD-006 lines 797-815 */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}
.bento-item { border: 3px solid var(--color-border); padding: var(--space-6); }
.bento-item--wide { grid-column: span 2; }
.bento-item--large { grid-column: span 2; grid-row: span 2; }

/* Z-pattern golden ratio -- CD-006 lines 826-851 */
.z-hero {
  display: grid;
  grid-template-columns: 1.618fr 1fr;
  grid-template-rows: auto auto;
  gap: var(--space-8);
}

/* 2-column reasoning -- CD-006 lines 716-767 */
.reasoning-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.reasoning-recommendation {
  background: #F2F9F4;
  border-top: 3px solid var(--color-green);
}

/* Choreography hub/spokes -- CD-006 lines 921-946 */
.choreo-spokes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}
```

**Lines needed:** ~60 CSS lines + substantial HTML restructuring (sections need grid wrappers)
**Impact:** Breaks single-column monotony. Gives different sections different spatial shapes.

### Channel C: Callout Color System (HIGH)

**CD-006 has, Flagship lacks:**

```css
/* 5 distinct callout background tints -- CD-006 lines 423-462 */
.callout--info    { background: #F5F9FE; } /* blue tint */
.callout--tip     { background: #F2F9F4; } /* green tint */
.callout--gotcha  { background: #FEF6F5; } /* coral tint */
.callout--essence { background: var(--color-zone-breathing); } /* breathing */
.callout--challenge { background: #FFFBF2; } /* amber tint */

/* Component header backgrounds -- CD-006 lines 619, 565, 659 */
.core-abstraction-label { background: #F8F5FE; } /* purple tint */
.decision-matrix-label  { background: var(--color-zone-breathing); }
.task-label             { background: var(--color-zone-breathing); }
```

**Lines needed:** ~15 CSS lines
**Impact:** Creates COLOR DIVERSITY across components. Currently flagship body uses only cream/near-white backgrounds.

### Channel D: Semantic Border-Weight Gradient (MEDIUM)

**CD-006 has, Flagship lacks IN BODY:**

```css
/* CD-006 lines 896-907: confidence gradient via border-weight */
.stratum--established { border-left: 4px solid var(--color-text); }
.stratum--probable    { border-left: 3px solid var(--color-text-secondary); }
.stratum--speculative { border-left: 1px solid var(--color-border); }
```

Flagship defines `--border-structural: 4px`, `--border-accent: 3px`, `--border-micro: 1px` but only uses them on TABLE structures. The 4px/3px/1px semantic gradient never appears on body content components.

**Lines needed:** ~10 CSS lines + HTML restructuring
**Impact:** Communicates confidence levels visually. Creates depth hierarchy.

### Channel E: Q&A Pattern (MEDIUM)

**CD-006 has, Flagship lacks:**

```css
/* CD-006 lines 853-869 */
.qa-question {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--type-subsection);
  color: var(--color-primary);
  padding-left: var(--space-4);
  border-left: 4px solid var(--color-primary);
}
.qa-answer {
  padding-left: var(--space-8);
}
```

**Lines needed:** ~15 CSS lines
**Impact:** Creates a distinct visual rhythm (red-bordered question, indented answer). CD-006 uses this 5 times.

### Channel F: Accessibility + Responsive (HIGH for quality, not richness)

**CD-006 has, Flagship lacks:**

```css
/* Skip link -- CD-006 lines 229-242 */
.skip-link { position: absolute; top: -100%; /* ... */ }
.skip-link:focus { top: 0; }

/* Focus visible -- CD-006 lines 221-224 */
*:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }

/* Selection -- CD-006 lines 213-216 */
::selection { background: var(--color-primary); color: var(--color-background); }

/* Reduced motion -- CD-006 lines 982-988 */
@media (prefers-reduced-motion: reduce) { /* ... */ }

/* Print -- CD-006 lines 993-999 */
@media print { /* ... */ }

/* Responsive breakpoints -- CD-006 lines 1004-1089 */
@media (max-width: 960px) { /* grid collapse */ }
@media (max-width: 768px) { /* general mobile */ }
@media (max-width: 480px) { /* small screen type */ }
```

**Lines needed:** ~90 CSS lines
**Impact:** Professional finish. Does not directly affect visual richness at 1440px but indicates production quality.

### Channel G: Footer Red Rule + Version Badge (MINOR)

**CD-006 has, Flagship lacks:**

```css
/* Red decorative rule -- CD-006 lines 973-977 */
.page-footer__rule { width: 48px; height: 3px; background: var(--color-primary); }

/* Version badge -- CD-006 lines 271-276 */
.version-badge {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  padding: 2px 8px;
  border: 1px solid currentColor;
  letter-spacing: 0.1em;
}
```

**Lines needed:** ~10 CSS lines
**Impact:** Minor detail polish

### Channel H: Bridge Transition Containers (MEDIUM)

**CD-006 has, Flagship lacks:**

```css
/* CD-006 line 780-784: bridge transitions are CONTAINERS with bg */
.transition--bridge {
  margin: var(--space-16) 0;
  background: var(--color-zone-breathing);
  padding: var(--space-8);
}
```

Flagship bridge transitions are just 1px divider lines (`.divider-bridge { height: 1px }`). They have separate `.bridge-prose` elements, but the prose sits OUTSIDE any colored container. CD-006's bridge prose lives INSIDE a breathing-colored container, creating a visual "rest stop."

**Lines needed:** ~5 CSS lines
**Impact:** Creates breathing spaces between sections

---

## 9. WHERE THE FLAGSHIP SPENT ITS CSS BUDGET INSTEAD

The flagship is not lacking CSS -- it has ~1,034 lines. But approximately 300 of those lines go to a system CD-006 does not have:

### Per-zone typographic micro-modulation (lines 736-963, ~227 lines)

```css
/* 12 sets of per-zone paragraph styling */
.zone-s1 p  { line-height: 1.8; letter-spacing: 0.006em; word-spacing: 0.02em; }
.zone-s3 p  { line-height: 1.75; letter-spacing: 0.004em; word-spacing: 0.015em; }
.zone-s5 p  { line-height: 1.65; letter-spacing: -0.003em; word-spacing: -0.01em; }
/* ... 9 more zones ... */

/* 12 sets of per-zone heading modulation */
.zone-s1 h2 { letter-spacing: 0.01em; color: #2A2420; }
.zone-s3 h2 { letter-spacing: 0.008em; color: #252018; }
/* ... 10 more zones ... */

/* Per-zone component margin modulation */
.zone-s1 .component-block { margin: var(--space-8) 0; }
.zone-s5 .component-block { margin: var(--space-4) 0; }
/* ... 8 more zones ... */

/* Per-zone table border color shifts */
.zone-s3 .table-compact thead tr { border-bottom-color: #5C4B3A; }
.zone-s4 table td { border-bottom-color: #E5DCCE; }
/* ... more ... */
```

**This is 227 lines of CSS that are IMPERCEPTIBLE to the human eye.** The `letter-spacing` differences are 0.001-0.01em. The `word-spacing` differences are 0.005-0.02em. The heading color shifts are 1-12 RGB points. The border color shifts are 5-15 RGB points.

**CD-006 uses zero per-zone typographic modulation.** Instead, those ~230 lines go to:
- 11 distinct component type definitions (~200 lines)
- 5 grid layout definitions (~60 lines)
- 3 responsive breakpoints (~80 lines)

**This is the root cause: the flagship spent ~22% of its CSS budget on imperceptible micro-typography instead of on visible structural diversity.**

---

## 10. THE CSS DIFF: WHAT TO ADD

### Estimated total to match CD-006 richness:

| Change | CSS Lines | HTML Changes | Priority |
|--------|-----------|--------------|----------|
| Add 5 distinct callout types with colors + backgrounds | ~45 | Restructure ~12 component-blocks | CRITICAL |
| Add 3px containment borders to components | ~10 | None (CSS only) | CRITICAL |
| Add 1 bento grid layout (Section 5) | ~15 | Wrap content in grid | CRITICAL |
| Add 1 two-column reasoning layout (Section 7) | ~20 | Restructure tension groups | HIGH |
| Add Q&A pattern (Sections 4, 6) | ~15 | Add question/answer HTML | HIGH |
| Add bridge-as-container transitions | ~5 | Wrap bridge prose in div | MEDIUM |
| Add file-tree component (Section 8) | ~20 | Add HTML | MEDIUM |
| Add border-weight semantic gradient | ~10 | Add stratum classes | MEDIUM |
| Add skip link + focus-visible + selection | ~15 | Add skip link HTML | HIGH |
| Add prefers-reduced-motion + print | ~15 | None | MEDIUM |
| Add 3 responsive breakpoints | ~60 | None | HIGH |
| Remove imperceptible zone micro-modulation | -200 | Remove zone classes | OPTIONAL |
| **TOTAL** | **~230 additions** (or ~30 net if removing imperceptible modulation) | **Significant HTML restructuring** | |

---

## 11. PREVIOUS ANALYSIS CROSS-CHECK

The prior analysis (`05-crown-jewel-comparison.md`) scored:

| Category | CD-006 | Flagship | Prior Score Match? |
|----------|--------|----------|-------------------|
| Border Treatments | 7/8 | 3/8 | CONFIRMED -- CD-006 has 23 border contexts vs flagship's 14, but flagship's 14 are concentrated on tables, not components |
| Font-Size Variation | 10/11 | 6/11 | CONFIRMED -- CD-006 has 13 distinct sizes vs 9, plus responsive scaling |
| Structural Elements | 12/13 | 2/13 | CONFIRMED -- 11 component types vs 3 |
| Layout/Grids | 6/7 | 1/7 | CONFIRMED -- 5 grid/flex definitions vs 0 |
| Background Treatment | 7/9 | 3/9 | CONFIRMED -- 10 perceptibly distinct vs 5 perceptibly distinct |
| Accessibility | 8/8 | 0/8 | CONFIRMED -- 5 @media queries + skip link + aria + role vs 0 |

**Every finding in the prior analysis is CONFIRMED by direct CSS extraction.** No discrepancies found.

---

## 12. ROOT DIAGNOSIS

**CD-006 distributes its CSS across 12 visual channels equally.**
**Flagship concentrates its CSS in 2 channels (zone backgrounds + typographic micro-modulation).**

The CSS line count is nearly identical (~1,050 each). The divergence is allocation:

| Channel | CD-006 Lines | Flagship Lines | Gap |
|---------|-------------|---------------|-----|
| Component definitions (11 types) | ~200 | ~40 (1 type + 2 variants) | -160 |
| Grid layouts (5 patterns) | ~80 | 0 | -80 |
| Callout color system | ~40 | ~15 | -25 |
| Responsive breakpoints | ~90 | 0 | -90 |
| Accessibility | ~30 | 0 | -30 |
| Zone micro-modulation | 0 | ~227 | +227 |
| Table variants | ~10 | ~100 | +90 |
| Per-zone spacing/border modulation | 0 | ~70 | +70 |
| **TOTAL allocated** | **~450** | **~452** | **Net ~0** |

The flagship's CSS budget was spent on the WRONG channels. It invested 227 lines in sub-perceptual typographic shifts that no human can see, while spending 0 lines on the structural diversity, grid layouts, and component variety that humans immediately notice.

**This is not a lazy or under-built page. It is a misallocated page.** The builder clearly had the technical skill (7 table variants, 6 metaphor channels, 12-zone progression). The problem is that the execution prompt's emphasis on "metaphor channels" and "refinement gradients" directed that skill toward imperceptible micro-typography instead of toward the visible structural variety that defines richness.

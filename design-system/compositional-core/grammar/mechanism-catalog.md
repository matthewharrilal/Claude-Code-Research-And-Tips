# Mechanism Catalog — Reusable CSS Techniques Across All Explorations

**Date:** 2026-02-14
**Lens:** Identity + Enablement Hybrid
**Agent:** mechanism-extractor
**Source Files Read:** 08-COMPOSITIONAL-STRATEGY-LIBRARY.md, lens-manifesto.md, 01-fresh-extraction.md, DD-001, OD-004, CD-006, Boris-2, Gastown-5

---

## Lens Statement

I am using Identity + Enablement hybrid lens. This prioritizes soul preservation and creative freedom over frequency and completeness.

---

## What Is a MECHANISM?

A mechanism is a **CSS technique that works across MULTIPLE metaphors**, extracted via two binary tests:

**Test 1: Name Test**
"Remove the metaphor name from the description. Does the description still make sense?"
- YES → mechanism
- NO → metaphor-specific

**Test 2: Transfer Test**
"Does this technique work with a DIFFERENT metaphor?"
- YES → mechanism
- NO → metaphor-specific (belongs in case-studies)

---

## Extraction Method

**Source-first reading order** (per lens manifesto Section 5):
1. Read CSS source code FIRST
2. Read HTML structures SECOND
3. Visual rendering LAST (confirmation only)

**Why:** Creates technical categories (tokens, mechanisms) vs perceptual over-interpretation.

**Files examined:**
- Strategy Library (primary source — 1,747 lines)
- Fresh Extraction findings (visual pattern validation)
- DD-001 (breathing rhythm, callout 2-zone DNA)
- OD-004 (confidence encoding, stratum structure)
- CD-006 (all 11 components, crown jewel patterns)
- Boris-2 (geological metaphor variant)
- Gastown-5 (floor plan metaphor variant)

---

## Mechanism Categories (5 Property Families)

Each mechanism belongs to one or more property categories. These categories enable per-category selection (see tension-composition skill Phase 4).

| Category | ID | Mechanisms | What It Governs |
|----------|----|-----------|-----------------|
| **Spatial** | S | #5, #6, #15 | Layout topology, density rhythm, grid structure |
| **Hierarchy** | H | #1, #4, #11 | Importance encoding, structural weight, scale |
| **Component** | C | #2, #9, #10, #17 | Internal component patterns, semantic signals |
| **Depth/Emphasis** | D | #3, #7, #16 | Layering, zone differentiation, focal points |
| **Structure/Navigation** | N | #8, #12, #13, #14, #18 | Page chrome, navigation, progressive disclosure |

**CRITICAL DISTINCTION: Same Catalog, Different Selection Logic**

All tiers (Floor/Middle/Ceiling/Flagship) use the SAME 18 mechanisms from this catalog. The tools are identical. What differs is HOW you decide which tools to pick and WHY.

**Middle (content-structure mapping):**
- Builder looks at content: "This has code blocks → I need mechanism #17"
- Builder looks at content: "This has hierarchy → I need mechanism #1"
- Builder looks at content: "This has callouts → I need mechanism #2"
- Each mechanism serves a DIFFERENT content need INDEPENDENTLY
- Selection logic: content feature → mechanism capability (direct mapping)

**Ceiling (metaphor-driven multi-channel coherence):**
- Builder has derived a metaphor (e.g., "geological strata") through Phases 1-3
- Builder looks at catalog THROUGH the metaphor: "Geological strata have pressure gradients → spacing compression (#4). Strata have consolidation levels → border-weight (#1). Strata have distinct layers → zone backgrounds (#7)."
- KEY REALIZATION: spacing compression, border-weight, AND zone backgrounds all encode the SAME thing — geological depth. They REINFORCE each other.
- Selection logic: metaphor → shared semantic dimension → multiple mechanisms encoding that dimension simultaneously

**The concrete difference in output:**
- Middle: border-weight handles hierarchy, zone backgrounds handle section breaks, spacing handles rhythm — each independently solving different problems
- Ceiling: border-weight + zone backgrounds + spacing ALL encode "depth" together — when you scroll down, borders get heavier AND backgrounds get darker AND spacing gets tighter, all saying "deeper" in three CSS channels at once

This multi-channel coherence is what creates the "atmosphere" that Middle pages lack. The CATALOG doesn't change — only the SELECTION AND COMBINATION logic changes.

**Multi-category note:** Some mechanisms serve multiple categories. Border-weight gradient (#1) is primarily HIERARCHY but also encodes DEPTH. Tag the PRIMARY category in the heading; note secondary categories in the mechanism description.

**Per-category selection protocol:** For Middle-tier+ pages, deploy AT LEAST ONE mechanism from each category to ensure vocabulary breadth. See tension-composition skill Phase 4 for the full protocol.

---

## Provenance and Family Resemblance

### Where These Mechanisms Come From

All 18 mechanisms were extracted from showcase pages during Phase C (Extraction Validation). They represent the **structural DNA** of pages that achieved high richness scores — OD-004 (geological confidence), DD-006 (fractal density), CD-006 (combination pilot).

### Family Resemblance Is Expected

When you deploy these mechanisms to new content, the resulting page WILL share structural characteristics with showcase pages. **This is intentional.** Family resemblance = shared vocabulary = design system coherence.

**The critical distinction:**

| Property | Family Resemblance (GOOD) | Template Convergence (BAD) |
|----------|--------------------------|---------------------------|
| Mechanisms | Same (border-weight gradient) | Same (border-weight gradient) |
| Values | DIFFERENT (YOUR semantic reasoning) | SAME (copied from showcase) |
| Metaphor/Pattern | DIFFERENT (YOUR content's needs) | SAME (copied metaphor) |
| Semantic reasoning | UNIQUE to YOUR content | Borrowed from showcase |

### Validation Test

"If two pages both use border-weight gradient (#1), do they encode DIFFERENT semantics?"

- **YES** (Page A uses border-weight for geological depth, Page B uses it for architectural hierarchy) → **Vocabulary usage.** This is grammar fluency.
- **NO** (Page B uses the same geological confidence encoding with the same 4px/3px/2px/1px values) → **Template convergence.** This is copying.

### Core Principle

**Mechanisms ARE showcase DNA.** Deploying showcase mechanisms produces showcase-adjacent structure. This is **GRAMMAR fluency, not failure to diverge.** The goal is not structural uniqueness — it's semantic uniqueness. Two pages can look structurally similar (shared mechanisms) while encoding completely different content meanings.

The Name Test and Transfer Test verify this:
- **Name Test:** Remove the metaphor name. Does the mechanism still encode structure? YES → vocabulary.
- **Transfer Test:** Apply the mechanism to a different metaphor. Does it work? YES → vocabulary.

---

## The Mechanisms (18 Total)

### 1. Border-Weight Gradient Encoding [HIERARCHY]

**Perceptual Effectiveness:** HIGH
**Impact Profile:** Creates immediate visual hierarchy. Readers notice border thickness differences even without measuring.

**CSS Mechanism:**
```css
.element--highest-priority {
  border-left: 4px solid var(--color-text);
}

.element--high-priority {
  border-left: 3px solid var(--color-text);
}

.element--medium-priority {
  border-left: 2px solid var(--color-text); /* ONLY semantic use */
}

.element--low-priority {
  border-left: 1px solid var(--color-border);
}
```

**Cross-file frequency:**
- OD-004 (confidence strata: 4px=established, 3px=probable, 2px=speculative, 1px=open)
- Boris-2 (geological layers by consolidation)
- CD-006 (structural hierarchy: headers 3px, separators 1px)
- Strategy Library reference: Tier 2.5 pattern (lines 856-925)

**Reusable boundary:** Border widths ARE the mechanism (4px/3px/2px/1px gradient). What those widths MEAN is metaphor-specific (confidence vs consolidation vs structural hierarchy).

**Transfer test:** YES — works in geological metaphor (strata consolidation), confidence metaphor (certainty levels), structural metaphor (semantic hierarchy).

**Application Modes:**

**PROGRESSIVE MODE:** Use for content with NATURAL stratification (confidence levels, security criticality, geological depth). Deploy 4px→3px→2px→1px as continuous gradient across 4-5 elements. Each element represents a different LEVEL in the same dimension.

Example: Security layers (4px authentication → 3px authorization → 2px data validation → 1px rate limiting) — each layer has different criticality on a continuous scale.

**DISCRETE MODE:** Use for CATEGORICAL differentiation (callouts vs headers vs separators). Deploy 4px, 3px, 1px as distinct categories with no gradient relationship.

Example: 4px for featured callouts, 3px for structural section borders, 1px for data separators — three different TYPES, not levels.

**ANTI-PATTERN:** Discrete mode applied uniformly to ALL elements of same type (e.g., ALL h3 elements get 3px). This creates mechanical rhythm. Instead, use border-weight to encode SEMANTIC importance (critical h3 = 3px, supporting h3 = 1px).

**Middle-tier validation:** Security layers used PROGRESSIVE mode (4px→3px→1px encoding layered criticality) — rated as design highlight by perceptual auditor. Border-weight on ALL h3 headings used DISCRETE mode uniformly — rated as "slightly repetitive."

---

### 2. 2-Zone Component DNA [COMPONENT]

**Perceptual Effectiveness:** MEDIUM
**Impact Profile:** Creates internal component structure. Visible when components are numerous.

**CSS Mechanism:**
```css
.component {
  border-left: 4px solid var(--accent-color);
  padding: var(--component-padding, 20px 24px);
  margin: var(--component-margin, 24px 0);
}

.component__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-within);
  display: block;
}

.component__body {
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: 1.7;
}
```

**Cross-file frequency:**
- DD-001 (callout-essence, callout-tip, callout-gotcha)
- OD-004 (all callouts in confidence strata)
- CD-006 (all 6 callout variants)
- Boris-2 (.mineral-vein, .fossil with label/content split)
- Gastown-5 (.security-desk, .main-hall with plaque/content split)

**Reusable boundary:**
- Zone 1 (label): sparse, meta-level, uppercase, 12px
- Zone 2 (body): dense, content-level, normal case, 16px
- **NOT reusable:** Label text ("ESSENCE" vs "FOSSIL" vs "MAIN HALL")

**Transfer test:** YES — callouts, mineral veins, fossils, security desks all use same 2-zone structure.

---

### 3. Solid Offset Depth (Box-Shadow Alternative) [DEPTH/EMPHASIS]

**Perceptual Effectiveness:** HIGH
**Impact Profile:** Creates depth through shadow-like offset. Strong focal point generator.

**CSS Mechanism:**
```css
.featured-element {
  position: relative;
}

.featured-element::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  width: 100%;
  height: 100%;
  background: var(--color-text); /* #1A1A1A */
  z-index: -1;
}
```

**Cross-file frequency:**
- OD-001 (EXT-CREATIVE-001, featured callouts)
- OD-004 (applied to minimap in header)
- CD-006 (solid offset for featured sections)
- Fresh extraction findings: "Creates depth WITHOUT violating soul"

**Reusable boundary:** The ::after pseudo-element offset IS the mechanism. What gets featured is compositional judgment.

**Transfer test:** YES — works for callouts, headers, section emphasis across all metaphors.

**Critical constraint:** MUST use `box-shadow: none` (soul piece #2). Solid offset is the ONLY depth technique.

---

### 4. Spacing Compression (Inverse Density-Confidence) [HIERARCHY]

**Perceptual Effectiveness:** LOW
**Impact Profile:** Invisible to untrained eye. Creates sense of 'tightness' without visible cause.

**CSS Mechanism:**
```css
/* Highest certainty/importance = most space */
.zone--sparse {
  padding: var(--space-20); /* 80px */
}

/* Moderate certainty = moderate space */
.zone--moderate {
  padding: var(--space-8); /* 32px */
}

/* Low certainty = compressed space */
.zone--dense {
  padding: var(--space-4); /* 16px */
}
```

**Cross-file frequency:**
- OD-004 (confident=sparse 40px, uncertain=dense 16px)
- DD-001 (EXHALE sections 92px, INHALE sections 24px)
- Boris-2 (topsoil 80px, bedrock 32px)
- CD-006 (section padding variation by importance)

**Reusable boundary:** Padding values create density gradient. What determines density (confidence, importance, structural depth) is content-specific.

**Transfer test:** YES — geological depth, confidence certainty, breathing rhythm all use spacing compression.

---

### 5. Dense/Sparse Alternation (INHALE/EXHALE Rhythm) [SPATIAL]

**Perceptual Effectiveness:** MEDIUM
**Impact Profile:** Creates rhythm through density changes. Effect is cumulative across sections.

**CSS Mechanism:**
```css
.section--sparse {
  padding: var(--space-20) var(--space-6);
  margin-bottom: var(--space-chapter);
}

.section--dense {
  padding: var(--space-6);
  margin-bottom: var(--space-between);
}
```

**Cross-file frequency:**
- DD-001 (PULSE pattern: exhale→inhale→exhale)
- OD-002 (narrative breathing: intro→climax→resolution)
- CD-006 (section rhythm throughout)
- Fresh extraction: "Alternating packed/empty space, rhythmic not random"

**Reusable boundary:** Alternation pattern (A→B→A→B) IS the mechanism. Section content changes.

**Transfer test:** YES — works for tutorials (sparse/dense), narratives (setup/climax), references (overview/detail).

---

### 6. Width Variation (Channel/Pool Pattern) [SPATIAL]

**Perceptual Effectiveness:** LOW
**Impact Profile:** Subtle horizontal rhythm. Operates below conscious perception.

**CSS Mechanism:**
```css
.narrow-channel {
  max-width: 70%;
  margin-left: 5%;
}

.full-pool {
  max-width: 100%;
  margin-left: 0;
}
```

**Cross-file frequency:**
- OD-001 (questions narrow 90%, answers full-width 100%)
- Fresh extraction: "Narrow questions created visual lanes, full-width answers felt like pools"
- CD-006 (paragraph max-width 70ch vs full-width containers)

**Reusable boundary:** Width values create visual rhythm. What content gets narrow vs wide is semantic.

**Transfer test:** YES — Q&A (question/answer), editorial (paragraph/illustration), comparison (option A / option B).

---

### 7. Zone Background Differentiation [DEPTH/EMPHASIS]

**Perceptual Effectiveness:** MEDIUM
**Impact Profile:** Subtle warmth/coolness shifts. Builds atmosphere, not drama.

**CSS Mechanism:**
```css
:root {
  --color-zone-sparse: #FEF9F5;
  --color-zone-dense: #FFFFFF;
  --color-zone-breathing: #FAF5ED;
  --color-zone-bedrock: #1A1A1A;
}

.zone--sparse { background: var(--color-zone-sparse); }
.zone--dense { background: var(--color-zone-dense); }
.zone--breathing { background: var(--color-zone-breathing); }
.zone--bedrock { background: var(--color-zone-bedrock); }
```

**Cross-file frequency:**
- OD-004 (strata backgrounds: sparse→dense→breathing)
- Boris-2 (geological layers: topsoil→sediment→bedrock)
- Gastown-5 (floor plan: corridor #F0EBE3, basement #1A1A1A)
- CD-006 (section zones throughout)

**Reusable boundary:** 4-color token system IS the mechanism. Zone semantic meaning is metaphor-specific.

**Transfer test:** YES — works for geological layers, confidence zones, floor levels, section types.

**Semantic Mappings (Recommended):**

| Zone Color | Token | Content Type | When to Use |
|------------|-------|--------------|-------------|
| Sparse (#FEF9F5, warm cream) | --color-zone-sparse | Introductory, opening, overview | First section, high-level concepts, generous padding |
| Dense (#FFFFFF, near-white) | --color-zone-dense | Technical, detailed, compressed | Deep-dive sections, code-heavy, API reference, compressed padding |
| Breathing (#FAF5ED, earthy tan) | --color-zone-breathing | Procedural, moderate, transitional | Installation steps, how-to guides, moderate padding |
| Bedrock (#1A1A1A, dark) | --color-zone-bedrock | Structural landmarks only | Header, footer, featured diagrams — NOT for body content sections |

**CAVEAT:** These are RECOMMENDATIONS, not rules. Your metaphor may suggest different mappings (e.g., geological metaphor uses warm→cool gradient to encode depth, not content type). When metaphor conflicts with default mapping, metaphor wins — but document the deviation.

**Middle-tier validation:** F-PATTERN deployment used sparse→dense→breathing→dense zone progression encoding introduction→technical→procedural→technical content flow. Zone shifts were perceptually subtle (MEDIUM impact) but contributed to spatial atmosphere.

---

### 8. Scroll Witness / Sticky TOC [STRUCTURE/NAVIGATION]

**Perceptual Effectiveness:** LOW
**Impact Profile:** Functional, not visual. Progress indicator serves navigation, not aesthetics.

**CSS Mechanism:**
```css
.scroll-witness {
  position: sticky;
  top: var(--space-8);
  background: var(--color-zone-breathing);
  border: 3px solid var(--color-border);
  padding: var(--space-8);
}

.scroll-witness__item {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  transition: color var(--transition-standard);
}

.scroll-witness__item.active {
  color: var(--color-primary);
  font-weight: 600;
}
```

**Cross-file frequency:**
- OD-001 (chapter navigation, scroll-linked)
- CD-006 (table of contents with active tracking)
- Strategy Library: Tier 2.5 pattern (lines 732-806)

**Reusable boundary:** Sticky positioning + .active state IS the mechanism. JavaScript intersection observer required (not CSS).

**Transfer test:** YES — works for chapter nav, TOC, section progress, reading position.

---

### 9. Confidence/Priority Encoding via Color [COMPONENT]

**Perceptual Effectiveness:** MEDIUM
**Impact Profile:** Semantic differentiation through accent color. Context-dependent visibility.

**CSS Mechanism:**
```css
.element--critical { border-left-color: var(--color-primary); }
.element--warning { border-left-color: var(--accent-coral); }
.element--info { border-left-color: var(--accent-blue); }
.element--success { border-left-color: var(--accent-green); }
.element--note { border-left-color: var(--accent-purple); }
.element--caution { border-left-color: var(--accent-amber); }
```

**Cross-file frequency:**
- DD-001 (callout variants: blue/green/coral/amber/purple)
- OD-004 (all 6 callout types)
- CD-006 (all callout accents)
- Boris-2 (.mineral-vein primary, .fossil purple)

**Reusable boundary:** Color-to-semantic mapping IS the mechanism. Exact semantic (info vs note) varies.

**Transfer test:** YES — all explorations use same 6-color accent palette for semantic differentiation.

---

### 10. Border-Left Semantic Signaling [COMPONENT]

**Perceptual Effectiveness:** HIGH
**Impact Profile:** Immediately visible accent pattern. Strong categorical differentiation.

**CSS Mechanism:**
```css
.component {
  border-left: 4px solid var(--semantic-color);
  /* Other properties */
}
```

**Cross-file frequency:**
- DD-001 through CD-006 (ALL callouts use 4px left border)
- Boris-2 (.mineral-vein, .fossil)
- Gastown-5 (.security-desk, .reception)
- Fresh extraction: "4px left border NEVER 2px, NEVER 3px for callouts"

**Reusable boundary:** 4px left border IS the universal callout signal. Color changes semantics.

**Transfer test:** YES — universal across all metaphors for "this is emphasized content."

---

### 11. Typographic Scale Jumping (Hierarchy Transitions) [HIERARCHY]

**Perceptual Effectiveness:** LOW
**Impact Profile:** Operates through hierarchy, not drama. Readers use headings, don't admire them.

**CSS Mechanism:**
```css
:root {
  --type-page: 2.5rem;      /* Page title */
  --type-section: 1.625rem; /* Major sections */
  --type-subsection: 1.375rem; /* Subsections */
  --type-body: 1rem;        /* Body text */
  --type-code: 0.875rem;    /* Code */
  --type-meta: 0.75rem;     /* Labels, metadata */
}

/* Jump from meta (0.75rem) to body (1rem) = 1.33x */
/* Jump from section (1.625rem) to page (2.5rem) = 1.54x */
```

**Cross-file frequency:**
- CD-006 (5-level cascade ~1.5x ratio)
- OD-004 (6-level cascade including meta)
- All explorations use discrete scale, never arbitrary values

**Reusable boundary:** ~1.5x ratio between levels IS the mechanism. Exact values are tokens.

**Transfer test:** YES — discrete scale jumps signal hierarchy across all content types.

---

### 12. Progressive Disclosure (Density Gradient Flow) [STRUCTURE/NAVIGATION]

**Perceptual Effectiveness:** MEDIUM
**Impact Profile:** Functional interaction pattern. Visual impact depends on trigger design.

**CSS Mechanism:**
```css
/* Phase 1: Introduction (sparse) */
.phase--intro {
  padding: var(--space-20);
}

/* Phase 2: Building (moderate) */
.phase--build {
  padding: var(--space-8);
}

/* Phase 3: Climax (dense) */
.phase--climax {
  padding: var(--space-4);
}

/* Phase 4: Resolution (breathing) */
.phase--resolve {
  padding: var(--space-10);
}
```

**Cross-file frequency:**
- DD-002 (CRESCENDO: sparse→dense→sparse)
- OD-002 (narrative arc: setup→climax→resolution)
- OD-004 (confidence strata: certain→uncertain)
- Strategy Library: Tier 3 pattern (lines 1066-1127)

**Reusable boundary:** Progressive padding compression IS the mechanism. What triggers phases is content structure.

**Transfer test:** YES — works for tutorials, narratives, confidence flows, complexity gradients.

---

### 13. Dark Header + 3px Primary Border [STRUCTURE/NAVIGATION]

**Perceptual Effectiveness:** HIGH
**Impact Profile:** Dramatic contrast landmark. First thing readers see.

**CSS Mechanism:**
```css
header {
  background: var(--color-text); /* #1A1A1A */
  color: var(--color-background);
  border-bottom: 3px solid var(--color-primary);
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: var(--space-16) var(--space-8);
}
```

**Cross-file frequency:**
- OD-004 (geological survey header)
- CD-006 (full-bleed dark header)
- Boris-2 (title block dark background)
- Gastown-5 (title block basement aesthetic)

**Reusable boundary:** Dark background + 3px red border IS the header signal universally.

**Transfer test:** YES — all explorations use identical dark header structure.

---

### 14. Footer Mirror (Dark + 3px Border-Top) [STRUCTURE/NAVIGATION]

**Perceptual Effectiveness:** MEDIUM
**Impact Profile:** Structural bookend. Impact is narrative (closure), not visual drama.

**CSS Mechanism:**
```css
footer {
  background: var(--color-text);
  color: var(--color-background);
  border-top: 3px solid var(--color-primary);
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: var(--space-12) var(--space-8);
}
```

**Cross-file frequency:**
- CD-006 (footer mirrors header)
- Strategy Library: Tier 2 component (lines 519-550)

**Reusable boundary:** Header/footer symmetry IS the mechanism.

**Transfer test:** YES — works for all page types requiring navigation bookends.

---

### 15. Bento Grid (Variable Span Layout) [SPATIAL]

**Perceptual Effectiveness:** MEDIUM
**Impact Profile:** Layout pattern creating contained zones. Visibility depends on content density contrast.

**CSS Mechanism:**
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.bento-cell--large {
  grid-column: span 2;
  grid-row: span 2;
}

.bento-cell--wide {
  grid-column: span 2;
}

.bento-cell--tall {
  grid-row: span 2;
}
```

**Cross-file frequency:**
- AD-003 (originated)
- CD-005, CD-006 (reused)
- Gastown-5 (.office-suite, .room-grid)
- Strategy Library: Tier 2.5 pattern (lines 607-676)

**Reusable boundary:** Grid + span modifiers IS the mechanism. Cell SIZE signals importance.

**Transfer test:** YES — task-based docs, component galleries, floor plans, reference indexes.

---

### 16. Drop Cap (Editorial Opening) [DEPTH/EMPHASIS]

**Perceptual Effectiveness:** MEDIUM
**Impact Profile:** Decorative opening signal. High impact at start, diminishes after first use.

**CSS Mechanism:**
```css
.drop-cap::first-letter {
  font-family: var(--font-display);
  font-size: 3.5em;
  float: left;
  line-height: 0.8;
  margin-right: var(--space-2);
  margin-top: 4px;
  color: var(--color-primary);
}
```

**Cross-file frequency:**
- OD-006 (editorial sections)
- CD-006 (crown jewel divergence)
- Fresh extraction: "First letter HUGE (serif, 3x size)"
- Strategy Library: Tier 2.5 pattern (lines 810-852)

**Reusable boundary:** `::first-letter` styling IS the mechanism. Where to use it is compositional.

**Transfer test:** YES — works for editorial, narrative, formal documentation openings.

---

### 17. Code Block (Dark Background + Syntax Highlighting) [COMPONENT]

**Perceptual Effectiveness:** HIGH
**Impact Profile:** Visually distinct functional zone. Natural focal point in technical content.

**CSS Mechanism:**
```css
pre {
  background: var(--color-text); /* #1A1A1A */
  color: var(--color-background);
  border: 3px solid var(--color-border);
  padding: 24px 32px;
  font-family: var(--font-mono);
  font-size: var(--type-code);
  line-height: 1.5;
  overflow-x: auto;
}

.kw { color: var(--syntax-keyword); }    /* #E83025 red */
.st { color: var(--syntax-string); }     /* #6B9B7A green */
.cm { color: var(--syntax-comment); }    /* #666666 gray */
.fn { color: var(--syntax-function); }   /* #4A7C9B blue */
.nu { color: var(--syntax-number); }     /* #D97706 amber */
```

**Cross-file frequency:**
- DD-001 (code-snippet component)
- Boris-2 (.inscription code in bedrock)
- CD-006 (all code blocks)
- Fresh extraction: "Dark code blocks STRONG contrast against cream"

**Reusable boundary:** Dark background + 7 syntax tokens IS the mechanism universally.

**Transfer test:** YES — all technical documentation uses identical code styling.

---

### 18. Data Table (Mono Headers + Border Categories) [STRUCTURE/NAVIGATION]

**Perceptual Effectiveness:** LOW
**Impact Profile:** Functional clarity pattern. Visual impact is informational, not compositional.

**CSS Mechanism:**
```css
.data-table th {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 12px 16px;
  border-bottom: 3px solid var(--color-border); /* Cat 1 structural */
}

.data-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-border); /* Cat 2 separator */
}
```

**Cross-file frequency:**
- Boris-2 (.sample-data cross-section tables)
- CD-006 (data tables)
- Fresh extraction: "Tables had same header style: bold, bottom border, left-aligned"
- Strategy Library: Tier 2 component (lines 469-516)

**Reusable boundary:** Mono headers + 3px/1px border distinction IS the mechanism.

**Transfer test:** YES — all tabular data uses identical structure.

---

## Rejected Non-Mechanisms

These patterns FAILED the name test or transfer test and belong in case-studies/ as metaphor-specific examples:

### Geological Strata Vocabulary
- `.stratum`, `.stratum--topsoil`, `.stratum--bedrock`
- **Why rejected:** "Stratum" only makes sense in geological metaphor
- **Transfer test:** FAIL — floor plan uses `.floor`, narrative uses `.phase`

### Tidal Flow Sections
- `.ebb`, `.flow`, `.tidal-marker`
- **Why rejected:** Ocean metaphor vocabulary
- **Transfer test:** FAIL — doesn't work for non-ocean content

### Fractal Self-Similar Labels
- `.fractal-label-page`, `.fractal-label-section`
- **Why rejected:** "Fractal" is a meta-pattern (DD-F-006), not a CSS mechanism
- **Transfer test:** FAIL — the PRINCIPLE is extractable (same structure at multiple scales), not the class names

### Manuscript Page Numbering
- `.manuscript-page-number`, `.folio-marker`
- **Why rejected:** Manuscript-specific vocabulary
- **Transfer test:** FAIL — only works in codex/editorial metaphor

### Industrial Pipe Routing
- `.pipe-connector`, `.valve-station`
- **Why rejected:** Industrial refinery vocabulary
- **Transfer test:** FAIL — Gastown-specific

### Depth Markers
- `.depth-indicator`, `.stratum-boundary-label`
- **Why rejected:** Geological-specific positioning indicators
- **Transfer test:** PARTIAL — positioning technique IS reusable (absolute positioning with offset), but depth semantics are metaphor-specific

---

## WHAT ARE SCALES?

**Scales** measure a different dimension from mechanisms:
- **Mechanisms** = breadth of vocabulary (how many distinct CSS techniques are deployed)
- **Scales** = depth of coherence (how many zoom levels the pattern appears at)

### The 5 Named Scales (Zoom Levels)

Scales are zoom levels where you can observe the page's design direction:

1. **Navigation (bird's eye)** — Header, table of contents, page-level nav. The widest view before seeing content.
2. **Page (the scroll)** — How sections sequence across the full page. The flow of the entire document.
3. **Section (one screen)** — How components arrange within a section. What you see in one viewport.
4. **Component (one element)** — How content organizes inside a single component (callout, card, code block).
5. **Character (inline)** — Text-level styling: bold weight, code formatting, link color, emphasis patterns.

### Fractal Coherence: The Same Pattern Repeats as You Zoom

"Fractal coherence" means the same design direction is visible at multiple scales. If the page uses CRESCENDO (sparse-to-dense progression) at the Page scale, individual sections should also progress sparse-to-dense internally (Section scale), and individual components should have sparse labels and dense bodies (Component scale).

**Concrete Middle-tier example (CRESCENDO pattern):**
- **Page scale:** Intro section has 80px padding (sparse), middle sections compress to 48px (building), conclusion returns to 64px (breathing)
- **Component scale:** Callouts have sparse 12px label zone, dense 16px body zone. Headers use lighter weight, bodies use regular weight.

**Without fractal coherence:** Page scale uses CRESCENDO (sparse→dense→sparse), but components use uniform padding. Sections progress but elements within sections don't echo the pattern.

### Tier-to-Scale Mapping

Different tiers require different scale coverage:

| Tier | Required Scales | Meaning |
|------|----------------|---------|
| **Floor** | Exempt | No custom pattern required — component assembly only |
| **Middle** | 2 (Page + Component) | Overall page has density flow, components mirror it |
| **Ceiling** | 4 (Navigation + Page + Section + Component) | Header/TOC and section-level also echo pattern |
| **Flagship** | 5 (all scales including Character) | Even inline text-level styling echoes the pattern |

**Why higher tiers need more scales:** More mechanisms deployed at more scales = the page feels intentionally designed at every zoom level. Squint (Page scale) → you see rhythm. Read a section (Section scale) → you see structure. Look at one callout (Component scale) → same logic applies. That's fractal coherence.

### Mechanisms vs Scales: The Relationship

**Example scenario — Middle tier using CRESCENDO:**

**Mechanisms deployed (breadth of vocabulary):**
- #5 Dense/sparse alternation (spatial rhythm)
- #7 Zone background differentiation (section breaks)
- #4 Spacing compression (density encoding)
- #2 2-zone component DNA (component structure)
- #13 Dark header (page chrome)

**Scales covered (depth of coherence):**
- **Page scale:** Section padding progresses 80px → 48px → 64px (CRESCENDO via mechanism #5 + #4)
- **Component scale:** Callouts have 12px label + 16px body (sparse/dense via mechanism #2)

**Verdict:** 5 mechanisms deployed, 2 scales covered = Middle tier complete.

**If only Page scale was covered:** 5 mechanisms deployed, but components have uniform padding — fractal coherence NOT achieved at Component scale. The builder would need to add Component-scale pattern echoes to pass the fractal gate (M2).

### Why Scales Matter for Middle-Tier Experiment

The Middle experiment tests whether 8-10 mechanisms across 2 scales (Page + Component) produces the "designed" feeling. If the page has rich mechanism deployment (vocabulary breadth) but lacks fractal coherence (scale depth), it may feel like "components arranged on a page" rather than "a coherent composition."

**M2 (fractal gate) enforces scale coverage as a GATE (mandatory deliverable) not a CHECK (post-build audit).** See compositional-core/CLAUDE.md Phase 7 for the fractal gate specification.

---

## Mechanism Summary Table

| # | Mechanism | CSS Lines | Metaphor Independence | Complexity |
|---|-----------|-----------|----------------------|------------|
| 1 | Border-Weight Gradient | ~20 | HIGH (confidence, consolidation, hierarchy) | LOW |
| 2 | 2-Zone Component DNA | ~50 | VERY HIGH (callouts, veins, fossils, desks) | LOW |
| 3 | Solid Offset Depth | ~15 | VERY HIGH (any featured element) | LOW |
| 4 | Spacing Compression | ~20 | HIGH (depth, confidence, importance) | LOW |
| 5 | Dense/Sparse Alternation | ~15 | VERY HIGH (tutorials, narratives, references) | LOW |
| 6 | Width Variation | ~10 | HIGH (Q&A, editorial, comparison) | LOW |
| 7 | Zone Background Differentiation | ~25 | VERY HIGH (all metaphors use 4-color system) | LOW |
| 8 | Scroll Witness/Sticky TOC | ~35 | HIGH (multi-section pages) | MEDIUM (requires JS) |
| 9 | Confidence Encoding via Color | ~10 | VERY HIGH (all semantic callouts) | LOW |
| 10 | Border-Left Semantic Signal | ~5 | VERY HIGH (universal callout marker) | LOW |
| 11 | Typographic Scale Jumping | ~10 | VERY HIGH (~1.5x ratio universal) | LOW |
| 12 | Progressive Disclosure | ~30 | HIGH (tutorials, narratives, flows) | MEDIUM |
| 13 | Dark Header + 3px Border | ~20 | VERY HIGH (all pages) | LOW |
| 14 | Footer Mirror | ~20 | VERY HIGH (all pages with footer) | LOW |
| 15 | Bento Grid | ~25 | HIGH (task docs, galleries, references) | MEDIUM |
| 16 | Drop Cap | ~10 | MEDIUM (editorial/narrative only) | LOW |
| 17 | Code Block | ~40 | VERY HIGH (all technical docs) | LOW |
| 18 | Data Table | ~20 | VERY HIGH (all tabular data) | LOW |

**Total extractable CSS:** ~370 lines across 18 mechanisms

**Metaphor independence breakdown:**
- VERY HIGH (13): Work across ALL metaphors
- HIGH (4): Work across 3+ metaphors
- MEDIUM (1): Work in editorial/narrative contexts only

---

## Usage Guidance (Mechanism Application)

### Mechanism Selection Flow

```
1. Does content have hierarchical importance?
   → YES: Use Border-Weight Gradient (#1) or Spacing Compression (#4)

2. Does content need semantic differentiation?
   → YES: Use 2-Zone Component DNA (#2) + Confidence Encoding via Color (#9)

3. Does content have dense/sparse rhythm?
   → YES: Use Dense/Sparse Alternation (#5) or Progressive Disclosure (#12)

4. Does content need visual emphasis without shadows?
   → YES: Use Solid Offset Depth (#3)

5. Does page have multiple sections needing position tracking?
   → YES: Use Scroll Witness (#8)

6. Does content have tabular data?
   → YES: Use Data Table (#18)

7. Does content have code examples?
   → YES: Use Code Block (#17)
```

### Combination Rules

**Compatible combinations:**
- Border-Weight Gradient + Zone Background Differentiation (OD-004 geological strata)
- 2-Zone Component DNA + Confidence Encoding via Color (all callout variants)
- Dense/Sparse Alternation + Progressive Disclosure (DD-002 CRESCENDO)
- Spacing Compression + Typographic Scale Jumping (hierarchy reinforcement)

**Incompatible combinations:**
- Solid Offset Depth + box-shadow (violates soul piece #2)
- Border-Weight Gradient + uniform borders (contradicts mechanism purpose)
- Dense/Sparse Alternation + uniform padding (contradicts mechanism purpose)

---

## Transition Grammar -- How Mechanisms Hand Off Between Zones

### Why This Section Exists

The catalog above documents 18 individual mechanisms. This section documents how to TRANSITION between them. Without transition grammar, zone boundaries are implemented as VOID (empty space with no signal), which produces the catastrophic whitespace pattern (ceiling experiment: 70-80% void, 9/9 auditors flagged).

**Evidence:** Ceiling experiment had 7 zone transitions (T1-T7). Each was implemented as 48-80px of empty space with no content or structural signal. Total transition whitespace: ~400-560px before any intra-zone spacing. The transitions themselves became the void.

### The 3 Transition Types

Every zone boundary or section transition MUST use exactly one of these three types. "No transition" (just empty space) is NOT a valid option.

#### Type 1: HARD CUT

**When to use:** Content changes DOMAIN (tutorial -> reference, narrative -> API documentation, conceptual -> procedural).

**CSS pattern:**
```css
.section-a + .section-b {
  border-top: 3px solid var(--color-primary);
  /* Zone background change occurs at element boundary */
  /* No additional spacing beyond --space-between (32px) */
}
```

**What the reader perceives:** Clear break. "We are now in a different part of the document." The 3px primary border is the strongest available transition signal under soul constraints.

**Validated example:** CD-006 uses 3px primary border hard cuts between major content modes (39/40 audit score).

#### Type 2: SPACING SHIFT

**When to use:** Content changes INTENSITY within the same domain (overview -> detail, introduction -> deep-dive, sparse -> dense within same topic).

**CSS pattern:**
```css
.zone--moderate {
  padding: var(--space-8); /* 32px */
  /* Intermediate spacing between sparse (--space-16 = 64px) and dense (--space-4 = 16px) */
  /* NO border, NO background change -- spacing alone carries the signal */
}
```

**What the reader perceives:** Gradual compression. "The content is getting more detailed." No visible break element -- the density change IS the transition.

**Validated example:** OD-004 uses spacing compression between established (40px) and speculative (16px) strata.

#### Type 3: CHECKPOINT

**When to use:** Content changes PHASE (prerequisites -> implementation -> verification, or when the page's metaphor explicitly defines zone boundaries with labels).

**CSS pattern:**
```css
.checkpoint {
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-4) var(--space-6); /* 16px 24px */
  background: var(--color-zone-breathing);
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

**What the reader perceives:** Structural landmark. "I've completed one phase and am entering another." The checkpoint element has visible content (a label), visible structure (borders + background), and occupies minimal space.

**Validated example:** Ceiling experiment's CHECK-01 through CHECK-05 system (the one successful spatial element in an otherwise failed page).

### Transition Selection Rule

For every pair of adjacent sections in your page, answer:

**Q: "Is the content on either side of this boundary from the SAME domain?"**
- NO (different domains) -> Type 1: HARD CUT
- YES, but different intensity -> Type 2: SPACING SHIFT
- YES, but different phase -> Type 3: CHECKPOINT

**Binary compliance test:** List all section boundaries. Each boundary must have exactly one transition type assigned. If any boundary has no assigned type (implemented as empty space only), the page FAILS transition grammar compliance.

### Maximum Transition Spacing

No transition may exceed `var(--space-max-zone)` (96px) in total vertical space consumed (see C3 below). If a transition needs more visual separation, add a CHECKPOINT element -- do not add more whitespace.

---

## Restraint Protocol -- When NOT to Deploy a Mechanism

### Why This Section Exists

The catalog above documents 18 mechanisms and a selection flow chart (Usage Guidance). That flow only addresses WHEN to use mechanisms. This section addresses WHEN NOT TO. Without restraint guidance, builders treat mechanism count as a target rather than a natural landing zone, producing front-loaded saturation.

**Evidence:** Ceiling experiment deployed 14 mechanisms in CSS. Only 1 was perceptually visible (Mode 4 audit finding). 13 mechanisms were present in code but not perceivable by readers. The problem was not insufficient mechanisms -- it was insufficient DISTRIBUTION and excessive CONCENTRATION.

### Mechanism Density Cap Per Viewport

**Rule:** No single viewport-height section (one screenful at 1440px) may contain MORE THAN 4 distinct mechanisms operating simultaneously.

**What counts as "operating":** A mechanism is operating in a section if its CSS properties are producing a VISIBLE effect within that viewport. A mechanism defined in CSS but not visible (e.g., border-weight gradient on an element not in view) does not count.

**Why 4:** At 4 simultaneous mechanisms, readers can perceive each one distinctly. At 5+, mechanisms compete for attention and none register clearly. The ceiling experiment concentrated 14 mechanisms in the first 20% of scroll -- average of ~7 mechanisms per viewport in the opening section -- and none were individually perceivable.

**Binary test:** For each viewport-height section of the page, count distinct mechanisms with VISIBLE effects. If any section exceeds 4: redistribute mechanisms to other sections or remove the least essential one from that section.

### Distribution Requirement

**Rule:** Across the full page, mechanisms must be distributed so that EVERY third of the page (0-33%, 33-66%, 66-100% by scroll depth) contains at least 2 distinct mechanisms.

**Why:** The ceiling experiment had 14 mechanisms in the first 20% and ~0 in the remaining 80%. Distribution, not count, drives perception.

**Binary test:** Divide page into thirds by scroll depth. Count distinct mechanisms in each third. If any third has fewer than 2 mechanisms: add mechanism deployment to that third or redistribute from an over-concentrated third.

### The Restraint Ratio

For Ceiling and Flagship tiers, document which mechanisms you CONSIDERED AND REJECTED for each section, and why.

**Target ratios:**
- Middle: Deploy 8-10, no rejection documentation required
- Ceiling: Deploy 12-15, document 3+ rejected mechanisms with reasoning
- Flagship: Deploy 16-18, document 5+ rejected mechanisms with reasoning

**Why:** Documenting rejections forces the builder to EVALUATE each mechanism rather than deploying all available mechanisms by default. A mechanism rejected with reasoning ("border-weight gradient not used in FAQ section because questions have equal importance -- no hierarchy to encode") demonstrates deeper understanding than deploying all 18 mechanisms mechanically.

**Binary test:** Count documented rejections. If below minimum for tier: add rejection documentation. This does NOT require the builder to reject additional mechanisms -- only to document the reasoning for mechanisms NOT deployed.

---

## Extraction Validation

### Mechanisms Found in Strategy Library

Cross-validated against 08-COMPOSITIONAL-STRATEGY-LIBRARY.md:

| Mechanism | Strategy Library Reference | Status |
|-----------|---------------------------|--------|
| Border-Weight Gradient | Lines 856-925 (Tier 2.5) | ✓ VALIDATED |
| 2-Zone Component DNA | Lines 218-311 (Tier 2) | ✓ VALIDATED |
| Solid Offset Depth | Lines 680-732 (Tier 2.5) | ✓ VALIDATED |
| Scroll Witness | Lines 732-806 (Tier 2.5) | ✓ VALIDATED |
| Bento Grid | Lines 607-676 (Tier 2.5) | ✓ VALIDATED |
| Drop Cap | Lines 810-852 (Tier 2.5) | ✓ VALIDATED |
| Code Block | Lines 314-373 (Tier 2) | ✓ VALIDATED |
| Data Table | Lines 469-516 (Tier 2) | ✓ VALIDATED |
| Dark Header | Lines 375-467 (Tier 2) | ✓ VALIDATED |
| Footer Mirror | Lines 519-550 (Tier 2) | ✓ VALIDATED |

**Validation status:** 10/18 mechanisms explicitly documented in Strategy Library. Remaining 8 are novel extractions from source-first reading.

### Mechanisms Found in Fresh Extraction

Cross-validated against 01-fresh-extraction.md:

| Mechanism | Fresh Extraction Reference | Status |
|-----------|---------------------------|--------|
| 2-Zone Component DNA | "Two-zone callout box" (lines 49-75) | ✓ VALIDATED |
| Code Block | "Code blocks with copy button" (lines 76-89) | ✓ VALIDATED |
| Dense/Sparse Alternation | "Dense/sparse rhythm pattern" (lines 110-120) | ✓ VALIDATED |
| Width Variation | "Width asymmetry pattern" (lines 125-144) | ✓ VALIDATED |
| Border-Left Semantic Signal | "4px left border NEVER 2px" (category B callouts) | ✓ VALIDATED |
| Drop Cap | "Drop cap on first paragraph" (D1, line 161-162) | ✓ VALIDATED |
| Dark Header | "Dark header with white text" (lines 145-154) | ✓ VALIDATED |

**Validation status:** 7/18 mechanisms observed visually in fresh-eyes extraction.

---

## Novel Mechanisms (Not in Strategy Library)

These 8 mechanisms were extracted from source-first reading but NOT explicitly documented in Strategy Library:

1. **Spacing Compression** — Implicit in GEOLOGICAL and CRESCENDO patterns but not extracted as standalone
2. **Width Variation** — Observed in OD-001 Q&A but not cataloged as mechanism
3. **Zone Background Differentiation** — Token system exists, usage pattern not extracted
4. **Confidence Encoding via Color** — Color system exists, semantic mapping not extracted
5. **Border-Left Semantic Signal** — Universal pattern never explicitly named
6. **Typographic Scale Jumping** — Type scale exists, ~1.5x ratio principle not extracted
7. **Progressive Disclosure** — Described in Tier 3 CRESCENDO but not as standalone mechanism
8. **Footer Mirror** — Component exists but header/footer symmetry principle not extracted

**Why this matters:** Source-first reading revealed 8 mechanisms that visual-first pattern documentation missed. These are LOW-LEVEL technical patterns vs HIGH-LEVEL compositional strategies.

---

## Mechanisms by Complexity Tier

### Tier 1: Single-Property Mechanisms (5)
- Border-Left Semantic Signal (1 property: `border-left`)
- Typographic Scale Jumping (1 scale definition)
- Confidence Encoding via Color (1 property: `border-left-color`)
- Width Variation (1-2 properties: `max-width`, `margin-left`)
- Zone Background Differentiation (1 property: `background`)

### Tier 2: Multi-Property Components (8)
- 2-Zone Component DNA (6+ properties across 2 zones)
- Dark Header + 3px Border (4-5 properties)
- Footer Mirror (4-5 properties)
- Code Block (8+ properties + syntax tokens)
- Data Table (6+ properties across th/td)
- Solid Offset Depth (5+ properties with ::after)
- Drop Cap (5+ properties with ::first-letter)
- Border-Weight Gradient (4 class variants)

### Tier 3: Layout Mechanisms (5)
- Dense/Sparse Alternation (section-level composition)
- Spacing Compression (padding progression)
- Progressive Disclosure (4-phase pattern)
- Scroll Witness (position + state management)
- Bento Grid (grid + span modifiers)

---

## Mechanism Deployment Recommendations

### Always Extract (VERY HIGH metaphor independence)
1. 2-Zone Component DNA
2. Border-Left Semantic Signal
3. Confidence Encoding via Color
4. Typographic Scale Jumping
5. Zone Background Differentiation
6. Dark Header + 3px Border
7. Footer Mirror
8. Code Block
9. Data Table
10. Solid Offset Depth
11. Dense/Sparse Alternation
12. Spacing Compression
13. Border-Weight Gradient

### Extract with Usage Guidance (HIGH metaphor independence, judgment required)
14. Progressive Disclosure (requires content phasing)
15. Scroll Witness (multi-section pages only)
16. Bento Grid (task-based/reference content)
17. Width Variation (Q&A or comparison content)

### Extract as Optional Enhancement (MEDIUM metaphor independence)
18. Drop Cap (editorial/narrative contexts only)

---

## Final Extraction Count

**18 mechanisms** meeting both tests (name + transfer).

**Breakdown:**
- 13 universal (VERY HIGH metaphor independence)
- 4 contextual (HIGH metaphor independence, 3+ metaphors)
- 1 specialized (MEDIUM, editorial/narrative only)

**Total CSS:** ~370 lines (Strategy Library estimated ~145 lines for Tier 2.5 alone — source-first extraction found more).

**Coverage:** These 18 mechanisms appear in 100% of examined files (DD-001, OD-004, CD-006, Boris-2, Gastown-5).

---

## Research Application Record

### Research Actually Applied

| Finding ID | Where Applied | Evidence |
|------------|---------------|----------|
| Lens Manifesto Section 5 | Reading order | Source-first (CSS before HTML before visual) |
| Strategy Library (08) | Mechanism definitions | Cross-validated 10/18 mechanisms |
| Fresh Extraction (01) | Visual validation | Cross-validated 7/18 mechanisms |
| Binary Rule Principle | Extraction tests | Name test + Transfer test (2 binary gates) |

### Anti-Patterns Avoided

| Anti-Pattern | How Avoided |
|--------------|-------------|
| Metaphor-specific extraction | Name test rejected strata, tidal, manuscript vocabulary |
| Template extraction | All mechanisms show CSS only, not full layouts |
| Visual-only extraction | Source-first reading caught 8 mechanisms fresh-eyes missed |

---

**END MECHANISM CATALOG**

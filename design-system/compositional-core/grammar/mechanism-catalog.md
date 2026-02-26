# Mechanism Catalog — 18 Reusable CSS Techniques

A mechanism is a **CSS technique that works across MULTIPLE metaphors**, verified by two tests:
- **Name Test:** Remove the metaphor name. Does the description still make sense? YES → mechanism
- **Transfer Test:** Does this technique work with a DIFFERENT metaphor? YES → mechanism

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

**Reusable boundary:** Mono headers + 3px/1px border distinction IS the mechanism.

**Transfer test:** YES — all tabular data uses identical structure.

---

---

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

**END MECHANISM CATALOG**

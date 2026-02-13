# Lineage Test: OD-004 Confidence Through AD Into CD

**Agent:** lineage-tester
**Date:** 2026-02-12
**Method:** Source code analysis across all 18 exploration files (6 OD, 6 AD, 6 CD)

---

## Executive Summary

OD-004's distinctive patterns were **structurally transformed** through the pipeline, not directly replicated. The 4-stratum confidence model and its GEOLOGICAL density pairing survived through AD-004 into CD-004 and CD-006, but the mechanism changed at each stage. OD-004's bespoke components (Geological Survey, Confidence Switcher, Evidence DNA, Crux Block, Stratum Boundaries) were **entirely lost** -- zero CSS class names or HTML structures from OD-004 appear in any CD file. What survived was the **abstract organizational principle** (confidence stratification + border-weight encoding), not the concrete implementation.

**Verdict: ABSORBED as principle, LOST as implementation.**

---

## Primary Tracer: OD-004-confidence.html

### OD-004 Distinctive Patterns Catalog

OD-004 is the most structurally distinct OD exploration. Its unique patterns:

| Pattern | CSS Classes | Description |
|---------|------------|-------------|
| **4-Stratum Confidence Model** | `.stratum--established`, `.stratum--probable`, `.stratum--speculative`, `.stratum--open` | Content organized into 4 certainty levels with decreasing density |
| **Border-Weight Gradient** | 4px/3px/2px/1px left borders per stratum | Thicker borders = higher confidence (EXT-CONF-013) |
| **Geological Survey** | `.geological-survey`, `.geological-survey__label`, `.geological-survey__title`, `.geological-survey__description` | Always-visible content inventory with solid offset (EXT-CONF-009) |
| **Strata Inventory** | `.strata-inventory`, `.strata-inventory__marker--{level}` | 2-column grid counting items per confidence tier |
| **Confidence Switcher** | `.confidence-switcher`, `.confidence-switcher__option` | 3-button tablist: "Facts Only" / "Full Analysis" / "Everything" (EXT-CONF-012) |
| **Stratum Boundaries** | `.stratum-boundary`, `.stratum-boundary__line`, `.stratum-boundary__scent`, `.stratum-boundary__progress` | Transition markers with progress squares and information scent text (EXT-CONF-010/014) |
| **Evidence DNA** | `.evidence-dna`, `.evidence-dna__item`, `.evidence-dna__value` | Per-stratum metadata: sources count, validation type, consensus level (EXT-CONF-011) |
| **Epistemic Markers** | `.stratum__epistemic` | "You Are Reading" disclosures per stratum (EXT-CONF-005) |
| **Crux Blocks** | `.crux-block`, `.crux-block__label`, `.crux-block__text` | "What Would Change This Rating" blocks (EXT-CONF-011) |
| **Comparison Grids** | `.comparison-grid`, `.comparison-column--{level}` | Side-by-side established vs. speculative approaches (R1-004/R1-006) |
| **Inverse Density-Confidence** | Spacing vars `--stratum-{level}-padding` | Sparse=certain, dense=uncertain (R1-001 defining rhythm) |
| **Zone Backgrounds** | `--color-zone-sparse/moderate/dense/densest` | 4 distinct background tones per confidence stratum (EXT-CONF-016) |

### Content: API Best Practices & Stability Guide

OD-004's content covers API design organized by certainty: HTTP status codes (established) through edge-first architecture (speculative) to autonomous API agents (open questions). Each stratum has its own typography scale, line-height, and spacing.

---

## Stage 1: OD-004 -> AD-004 (Spiral)

### What AD-004 Inherited

AD-004-spiral.html is explicitly paired with OD-004 (line 23: `OD-004-confidence.html | Paired OD exploration (GEOLOGICAL density)`). The pairing produced 4 key discoveries:

- **AD-F-013:** Angular spiral resolves geological-radial tension. The border-radius: 0 constraint forces spiral into nested rectangles, which ARE geological strata. This is a genuine transformation -- OD-004's horizontal strata became AD-004's nested concentric boxes.
- **AD-F-014:** Border-weight gradient IS geological encoding (4px/3px/1px, skipping 2px to avoid epidemic). The 4-level system was compressed to 3 visible levels.
- **AD-F-015:** Confidence-proportional spacing creates CRESCENDO whitespace -- OD-004's inverse density-confidence rhythm expressed through geometric proportion.
- **AD-F-016:** Spiral reading order ENHANCES geological layering -- the stress test proved compatibility.

### What AD-004 Transformed

| OD-004 Pattern | AD-004 Transformation | Status |
|---------------|----------------------|--------|
| 4 strata (established/probable/speculative/open) | 3 visible strata (4px/3px/1px), open = breathing zone without border | **Compressed** |
| Horizontal band layout | Nested concentric rectangles (angular spiral) | **Structurally transformed** |
| Geological Survey component | Not present | **Lost** |
| Confidence Switcher | Not present | **Lost** |
| Evidence DNA per stratum | Not present | **Lost** |
| Stratum Boundary markers | Not present (transitions implicit in nesting) | **Lost** |
| Crux Blocks | Not present | **Lost** |
| Comparison Grids | Not present | **Lost** |
| Border-weight gradient (4/3/2/1) | Border-weight gradient (4/3/1, skip 2px) | **Preserved but compressed** |
| Inverse density-confidence spacing | Golden ratio proportional spacing | **Transformed** |
| Zone backgrounds (4 colors) | Not present (single background) | **Lost** |
| Epistemic markers | Not present | **Lost** |

**Verdict:** AD-004 absorbed OD-004's **core organizing principle** (confidence = geological strata = border-weight encoding) but discarded every bespoke component. The transformation was genuine -- converting horizontal bands to nested rectangles -- but the rich metadata layer (Evidence DNA, Crux, Epistemic markers, Survey, Switcher) was entirely dropped.

---

## Stage 2: AD-004 -> CD-004 (Essence as Background)

### What CD-004 Inherited

CD-004-essence-as-background.html explicitly lists OD-004 as its paired OD (line 26: `OD-004-confidence.html | Paired OD exploration (CONFIDENCE-BASED)`) and inherits via AD-004's findings.

The confidence model survives in CD-004 with these CSS implementations:

```css
/* From CD-004-essence-as-background.html lines 358-388 */
.stratum-established { border-left: 4px solid var(--color-border); padding-left: var(--space-6); }
.stratum-probable    { border-left: 3px solid var(--color-border); padding-left: var(--space-8); }
.stratum-speculative { border-left: 1px solid var(--color-border); padding-left: var(--space-12); }
.stratum-open        { padding-left: var(--space-16); /* no border */ }

.confidence-gap-moderate  { margin-top: var(--space-8); }
.confidence-gap-breathing { margin-top: var(--space-12); }
.confidence-gap-wide      { margin-top: var(--space-16); }
```

CD-004 also introduces `.confidence-badge` variants (lines 735-750):
```css
.confidence-badge--established { color: var(--accent-green); }
.confidence-badge--probable    { color: var(--accent-blue); }
.confidence-badge--speculative { color: var(--accent-amber); }
.confidence-badge--open        { color: var(--accent-coral); }
```

### What CD-004 Actually Uses vs. What OD-004 Created

| OD-004 Pattern | CD-004 Status | Evidence |
|---------------|---------------|----------|
| 4 confidence strata | **PRESENT** -- 4 stratum classes + confidence badges | Lines 358-388, 735-750, HTML body |
| Border-weight gradient | **PRESENT** -- 4px/3px/1px/none (via AD-F-014) | Lines 360, 367, 374, 381 |
| Confidence-proportional spacing | **PRESENT** -- 24px/32px/48px/64px gap classes | Lines 386-388 |
| Content organized by certainty | **PRESENT** -- database paradigms graded established to open | Lines 840, 871, 971, 1106, 1202 |
| Geological Survey component | **ABSENT** | No `.geological-survey` in any CD file |
| Confidence Switcher | **ABSENT** | No `.confidence-switcher` in any CD file |
| Evidence DNA per stratum | **ABSENT** | No `.evidence-dna` in any CD file |
| Stratum Boundary markers | **ABSENT** | No `.stratum-boundary` in any CD file |
| Crux Blocks | **ABSENT** | No `.crux-block` in any CD file |
| Epistemic markers | **ABSENT** | No `.stratum__epistemic` in any CD file |
| Zone backgrounds (4 colors) | **ABSENT** -- single background scheme used | CD-004 uses 3 zone vars, not 4 |
| Comparison Grids (established vs speculative) | **ABSENT** | No comparison grid component |
| Inverse density-confidence rhythm | **TRANSFORMED** -- spacing encodes it, not typographic density | Spacing gradient present; font-size/line-height gradient absent |

### New CD-004 Patterns NOT From OD-004

CD-004 introduces patterns foreign to OD-004:
- **Essence callouts as ambient background voice** (frequency + typography, not depth) -- its own thesis
- **TIDAL width modulation** (Essence at 60% width = narrow/dense wisdom) -- from DD-005/OD-001
- **Choreography axis** (direction changes = density changes, hub-and-spoke) -- from AD-005
- **Breathing transition** between confidence strata and decision choreography -- from CD-F-006

**Verdict:** CD-004 is the ONLY CD file that meaningfully carries OD-004's organizational structure forward. The stratum model, border-weight gradient, and confidence-proportional spacing all survived. But every rich component (6 of 12 distinctive patterns) was stripped. The confidence model was reduced from a heavily-instrumented epistemic system to a simple CSS class hierarchy.

---

## Stage 3: OD-004 in CD-006 (Crown Jewel)

CD-006-pilot-migration.html uses OD-004's patterns in two sections:

### Section 1 (Spiral axis, GEOLOGICAL density)
Lines 1142-1191: "The Design System at a Glance"
```html
<div class="stratum stratum--established">
  <div class="stratum-label">Bedrock -- Established</div>
  <!-- Locked tokens content -->
</div>
<div class="stratum stratum--probable">
  <div class="stratum-label">Subsoil -- Probable</div>
  <!-- Pattern content -->
</div>
<div class="stratum stratum--speculative">
  <div class="stratum-label">Atmosphere -- Speculative</div>
  <!-- Frontier content -->
</div>
```

CSS (lines 891-916):
```css
.stratum--established { border-left: 4px solid var(--accent-green); }
.stratum--probable    { border-left: 3px solid var(--accent-blue); }
.stratum--speculative { border-left: 1px solid var(--accent-amber); }
```

### Section 8 (Spiral return, GEOLOGICAL density) -- Structural Closure
Lines 1946-2013: Same stratum structure repeated, creating bookend closure (CD-F-021). Same border-weight gradient, different content.

### What CD-006 Takes From OD-004
- 3 strata (not 4 -- "open" tier dropped)
- Border-weight gradient (4px/3px/1px)
- Geological naming (Bedrock/Subsoil/Atmosphere -- different labels than OD-004's Established/Probable/Speculative/Open)
- Stratum-label component (simplified from OD-004's full header system)

### What CD-006 Does NOT Take
- No Geological Survey, no Evidence DNA, no Crux Blocks, no Confidence Switcher
- No stratum boundary markers or progress squares
- No epistemic markers
- No 4th stratum (open questions)
- No inverse density-confidence rhythm (CD-006 uses fixed spacing)

---

## Secondary Tracer 1: OD-001 Conversational

### OD-001 Distinctive Patterns
- Q&A dialogue structure (`.question`, `.answer`, `.question__marker`)
- PULSE density (sparse question / dense answer alternation)
- TIDAL width variation (Q at 60%, A at 100%)
- Scroll Witness (`.scroll-witness`) -- CSS-only section progress
- Editorial Drop Caps (`.editorial-drop`)
- Socratic Narrowing chains (broad Q -> narrow Q -> specific Q -> answer)
- Solid Offset depth on key components
- Hourglass conversational architecture

### Tracing Through AD-001 (Z-Pattern)
AD-001 paired with OD-001. Z-Pattern alternating flow IS conversational Q&A -- the equivalence is structural: left-right sweeps map to question-answer pairs. AD-F-001 (Z-sweep PULSE equivalence) was the key discovery.

### In CD Files
- **CD-006** (lines 1219-1310): Section 2 uses Z-Pattern axis with PULSE density and "Conversational" organization. Contains explicit Q&A pairs (`<!-- Q&A 1: PULSE rhythm (question sparse, answer dense) -->`). Three Q&A blocks exist with question/answer structure.
- **CD-002** uses PULSE density throughout (Decision Matrix as PULSE pause). OD-F-005 ("Organization IS Density") cited explicitly. But the actual Q&A structure (question markers, answer boxes, width variation) is absent.
- **Drop caps**: CD-006 uses `.drop-cap` class (lines 384, 1193, 1472) -- inherited from OD-001's editorial drop cap technique (EXT-CREATIVE-005).

### Verdict: OD-001

| Pattern | CD Status |
|---------|-----------|
| Q&A dialogue structure | **PRESENT in CD-006 S2** -- simplified Q&A pairs, no `.question__marker` |
| PULSE density | **PRESENT in CD-002, CD-006** -- as abstract principle, not Q&A alternation |
| TIDAL width variation | **ABSENT** -- no width modulation in CD files' Q&A sections |
| Scroll Witness | **ABSENT** -- no `.scroll-witness` in any CD file |
| Editorial Drop Caps | **PRESENT in CD-006** -- `.drop-cap` class used twice |
| Socratic Narrowing | **ABSENT** -- Q&A pairs are flat, no narrowing chain |
| Solid Offset depth | **ABSENT** -- no `::after` pseudo-element offsets in CD files |
| Hourglass architecture | **ABSENT** |

**Abstract principle survived (PULSE, Q&A mode). Implementation details lost (markers, width variation, scroll witness, socratic narrowing, solid offset).**

---

## Secondary Tracer 2: OD-006 Creative (Crown Jewel)

### OD-006 Distinctive Patterns
- Visual Index grid (`.visual-index-cell`) -- specimen-sheet grid overview
- Dual Lens toggle (`.dual-lens`) -- Why/How toggle between serif/monospace
- Territory Tiles (`.territory-tile`) -- hover-activated pattern cards
- Fractal Annotation Layer -- persistent sidebar annotations labeling fractal scale
- Culmination Spread -- amplified retrospective visual integration
- Recursive Table of Contents (`.toc__marker`) -- 3-level fractal TOC
- Pattern Echo -- CSS-only miniature visual signatures
- "Organization IS Density" thesis (OD-F-005)

### In CD Files
- **OD-F-005** ("Organization IS Density"): Cited explicitly in CD-002 (line 86: `OD-F-005 (Organization IS Density) -- MANDATORY`), CD-003 (line 65). This abstract finding survived as a constraint.
- **CD-006** (line 1478): Restates the thesis: "Axis IS organization IS density. Z-Pattern IS conversational IS PULSE. F-Pattern IS narrative IS CRESCENDO."
- **Visual Index grid**: **ABSENT** from all CD files
- **Dual Lens toggle**: **ABSENT** from all CD files
- **Territory Tiles**: **ABSENT** from all CD files
- **Fractal Annotation Layer**: **ABSENT** from all CD files
- **Culmination Spread**: **ABSENT** from all CD files
- **Recursive TOC**: **ABSENT** from all CD files
- **Pattern Echo**: **ABSENT** from all CD files

**Verdict: OD-006's thesis survived as a constraint. Every creative component was lost.**

---

## Cross-Cutting Findings

### 1. The Abstraction Gradient

At each pipeline stage, OD patterns were abstracted further:

```
OD-004                    AD-004                    CD-004 / CD-006
================================================================================================
12 unique components  ->  4 findings (AD-F-013-016) -> stratum classes + badges
4 strata              ->  3 strata (skip 2px)       -> 3 strata
Geological Survey     ->  (lost)                    -> (lost)
Confidence Switcher   ->  (lost)                    -> (lost)
Evidence DNA          ->  (lost)                    -> (lost)
Crux Blocks           ->  (lost)                    -> (lost)
Stratum Boundaries    ->  (lost)                    -> (lost)
Epistemic Markers     ->  (lost)                    -> (lost)
Border-weight 4/3/2/1 ->  Border-weight 4/3/1       -> Border-weight 4/3/1
Inverse density       ->  Proportional spacing       -> Spacing gradient
Zone backgrounds (4)  ->  (lost)                    -> (lost)
Comparison grids      ->  (lost)                    -> (lost)
```

**12 components reduced to 3 CSS class families.** The abstraction is severe: ~75% information loss per stage.

### 2. What Survived vs. What Was Lost

**Survived (3 of 12):**
1. Stratum classes (confidence tiers as CSS classes with labels)
2. Border-weight gradient (4px/3px/1px encoding confidence)
3. Confidence-proportional spacing (increasing space = increasing uncertainty)

**Lost (9 of 12):**
1. Geological Survey (always-visible inventory)
2. Confidence Switcher (reader filtering control)
3. Evidence DNA (source/validation/consensus metadata)
4. Epistemic Markers ("you are reading" disclosures)
5. Crux Blocks ("what would change this")
6. Stratum Boundary markers (transition zones with progress tracking)
7. Comparison Grids (side-by-side confidence level comparison)
8. Zone Backgrounds (4 distinct background tones)
9. Inverse density-confidence rhythm (typography + spacing together)

### 3. The Pattern of Loss

The lost patterns share a common trait: they are **metadata-rich, reader-facing instrumentation**. They tell the reader about the confidence of what they are reading. The surviving patterns are **visual-structural** -- they show confidence through visual encoding (border thickness, spacing) without explicitly labeling it.

This suggests the pipeline selectively preserved **implicit visual encoding** and discarded **explicit epistemic instrumentation**.

### 4. The "Findings" Bridge Mechanism

The pipeline's transmission mechanism is the AD-F/CD-F findings system. OD-004 produced 5 builder discoveries (B3A-001 through B3A-005), which were compressed into AD-F-013 through AD-F-016 (4 findings). These 4 findings then appeared in CD research packages.

**But findings are 1-2 sentence summaries.** AD-F-014 says "Border-weight gradient IS geological encoding (4px/3px/1px)." This captures the RULE but not the IMPLEMENTATION. The Geological Survey, the Evidence DNA, the Crux Blocks -- these were implementation details that the findings system does not transmit.

### 5. Content Independence

Each stage used completely different content:
- OD-004: API Best Practices & Stability Guide
- AD-004: Content not specified in header (axis geometry demonstration)
- CD-004: Database paradigms (SQL/NoSQL/NewSQL)
- CD-006: "Building Your First KortAI Documentation Page"

The content is new at each stage. OD-004's API content was never referenced again. The organizational principle was separated from its content, applied to new content, and the original content vanished.

---

## Scoring Summary

| Tracer | Principle Survival | Component Survival | Implementation Survival |
|--------|-------------------|-------------------|------------------------|
| OD-004 -> AD-004 | HIGH (4 findings) | ZERO (0 of 12 components) | LOW (border-weight only) |
| OD-004 -> CD-004 | HIGH (strata + badges + spacing) | ZERO (0 of 12 components) | MEDIUM (3 CSS class families) |
| OD-004 -> CD-006 | MEDIUM (3 strata, 2 sections) | ZERO (0 of 12 components) | LOW (simplified stratum labels) |
| OD-001 -> CD-006 | MEDIUM (Q&A + PULSE + drop caps) | ZERO (0 of 8 components) | LOW (flat Q&A, no markers) |
| OD-006 -> CD files | HIGH (OD-F-005 thesis as constraint) | ZERO (0 of 8 components) | ZERO |

**Overall: Abstract principles survived at ~60-80% fidelity. Concrete implementations survived at ~0-10% fidelity.**

---

## Implications

1. **The pipeline is a principle extractor, not a pattern replicator.** It converts rich implementations into sparse findings, which then inform new implementations. The output is structurally novel at each stage -- it shares DNA but not anatomy.

2. **The 50:1 compression ratio from the metacognition analysis is confirmed here.** OD-004's ~2,000 lines of CSS/HTML compressed to 4 AD-F findings (~200 words), which then expanded into new CSS/HTML in CD-004 and CD-006 that shares the principle but not the implementation.

3. **Distinctive OD-004 patterns that would make the user say "that's from OD-004"** (the Geological Survey with its solid offset, the Confidence Switcher, the Evidence DNA, the Crux Blocks) -- none of these appear in any CD file. The lineage is forensic, not perceptual.

4. **CD-004 is the strongest carrier** -- it explicitly pairs with OD-004, uses 4 stratum classes, implements border-weight gradient, and applies confidence-proportional spacing. But it wraps these in an entirely different thesis (Essence as ambient background voice) with new components (ambient Essence callouts, choreography sections) that OD-004 never had.

5. **The pipeline's memory is conceptual, not visual.** If you showed someone OD-004 and CD-004 side by side without context, they would not recognize CD-004 as a descendant. The inheritance is in the CSS comment annotations and the provenance headers, not in the rendered appearance.

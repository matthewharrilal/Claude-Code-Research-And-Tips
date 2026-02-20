# Scale Analysis: Component (~40-100px)

**Agent:** scale-component
**Scale:** Component (a single card, callout, table, code block, reasoning panel)
**Size range:** ~40-100px vertical extent per component instance
**Date:** 2026-02-20

---

## Overview

The Component scale is where "2-zone DNA" lives -- every component splits into a sparse LABEL zone and a dense BODY zone. This is the scale where the design system's vocabulary becomes most tangible to readers. A reader who scans a callout, a code block header, or a table header row is experiencing Component-scale design. This analysis maps each CI concept to Component scale and identifies enrichment gaps.

---

## 1. Six Channels Inside a Component

At Component scale, the 6 channels operate WITHIN a single element rather than between page zones. Each channel manifests as a contrast between the label zone and body zone of the same component.

### Channel Mapping at Component Scale

| Channel | Component Expression | Current Brief Coverage | Example CSS |
|---------|---------------------|----------------------|-------------|
| **Chromatic** | Label bg vs body bg. Callouts use faint tinted backgrounds (rgba 0.05 opacity) for the whole component, but the label zone and body zone share the same bg. The real chromatic signal is the 4px border-left accent color. | IMPLICIT -- brief says "tinted or breathing background" for label but components.css gives both zones the same bg. | `.callout { background: rgba(74, 157, 107, 0.05); }` -- single bg, no label/body split. |
| **Typographic** | Label: 0.75rem, 600 weight, uppercase, 0.1em letter-spacing, mono/sans. Body: 1rem, 400 weight, normal case, 1.7 line-height, body font. This is the STRONGEST channel at component scale -- the label/body type contrast is the primary signal. | EXPLICIT in Section 8 "Component 2-Zone DNA." Well-documented. | `.callout__label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; }` |
| **Spatial** | Label padding vs body padding. In components.css the callout has unified padding (24px 20px) with label margin-bottom 12px. The label/body spatial split is through margin, not padding. True spatial differentiation = label zone is compressed (less vertical space) while body zone expands. | PARTIALLY covered. Brief says "label/body padding delta >= 4px" but components.css uses margin-bottom (12px) not distinct paddings. The threshold (>=4px) is in the Fractal Echo table but there is no recipe for HOW to express it. | `.callout__label { margin-bottom: 12px; }` -- spatial separation via margin, not padding differential. |
| **Structural** | Label-body separator. In components.css: section-indicator has `border-bottom: 1px solid var(--color-border-subtle)`. Callouts do NOT have an internal separator -- the label/body boundary is marked by type shift alone. Code-snippet has `border-bottom: 1px solid` on its header. Bento-cell has `border-bottom: 1px solid` on its label. | PARTIALLY covered. Brief says "1px bottom border separator" in DNA description. Present in code-snippet, bento-cell, section-indicator, but ABSENT from the base callout family (the most frequent component). | `.code-snippet__header { border-bottom: 1px solid var(--color-border); }` |
| **Behavioral** | Component hover/expand. Currently MINIMAL. Code-snippet has a copy button with hover. Breadcrumb has link hover. No callout hover. No table row hover. No expand/collapse. Behavioral channel is the weakest at component scale. | NOT COVERED in brief at Component scale. Brief mentions behavioral as "enhancement channel" globally but provides zero component-level behavioral guidance. | `.code-snippet__copy:hover { ... }` -- only instance. |
| **Material** | Component surface treatment. The component border (4px left for callouts, 3px enclosure for code blocks, 3px for bento cells) IS the material signal. Different border configurations = different material surfaces. | IMPLICIT -- covered under "3-Tier Border Budget" but not framed as material channel at component scale. | `.callout { border-left: 4px solid; }` vs `pre { border: 3px solid; }` vs `.bento-cell { border: 3px solid; }` |

### Key Finding: Channel Imbalance at Component Scale

Components currently express 2 strong channels (Typographic, Structural/Material) and 4 weak/absent channels (Chromatic, Spatial, Behavioral, Material-as-surface). The brief's multi-coherence requirement (3+ channels at boundaries) applies to ZONE boundaries but is never explicitly mapped to the label/body boundary WITHIN components.

**Critical gap:** The label-to-body transition inside a component IS a boundary. It is the smallest-scale boundary in the system. If multi-coherence matters at zone boundaries (200-400px scale), it should also matter at component boundaries (40-100px scale). Currently, the brief says nothing about this.

---

## 2. Multi-Coherence at Component Scale

### Is the label-to-body transition a multi-coherence event?

**YES.** The label-to-body boundary shifts multiple channels simultaneously:

At a well-built callout boundary (label -> body):
1. **Typographic:** 0.75rem/600/uppercase/0.1em -> 1rem/400/normal/1.7lh (SHIFTS)
2. **Spatial:** Compressed label (12px margin-bottom) -> expanded body prose (SHIFTS)
3. **Structural:** 1px border separator (if present) marks the boundary (SHIFTS when present)

That is 2-3 channels shifting together at the label/body boundary. They all encode the same semantic direction: **DEEPENING** (from meta-level wayfinding into content-level substance).

### What the brief SHOULD say but doesn't

The brief (Section 4) defines multi-coherence at zone boundaries: "at every zone boundary, at least 3 of 6 CSS channels shift simultaneously." It then defines coherence directions (DEEPENING, OPENING, FOCUSING, RESOLVING).

The brief does NOT say:
- That the label/body transition inside a component IS a multi-coherence event
- That the direction inside components should ECHO the page-level coherence direction
- That components in a DEEPENING zone should have tighter label/body contrast than components in an OPENING zone (parametric echo)

**This is the single clearest enrichment opportunity at Component scale.** The brief treats multi-coherence as a zone-to-zone concept. It should ALSO be a label-to-body concept. The vocabulary already supports this -- the brief just never says it explicitly.

### Channel Count at Component Boundaries

| Component | Channels at label/body boundary | Direction |
|-----------|-------------------------------|-----------|
| Callout (base) | 2 (Typographic + Spatial) | DEEPENING |
| Callout (with separator) | 3 (+ Structural) | DEEPENING |
| Code-snippet | 3 (Typographic + Spatial + Structural) | FOCUSING |
| Bento-cell | 3 (Typographic + Spatial + Structural) | DEEPENING |
| Data table (th->td) | 3 (Typographic + Spatial + Structural) | DEEPENING |
| Reasoning | 3 (Typographic + Spatial + Structural) | OPENING |
| File-tree | 2 (Typographic + Spatial) | FOCUSING |
| Stats-bar | 2 (Typographic + Spatial) | DEEPENING |

**Observation:** Components WITH an internal separator (1px border between label and body) achieve 3 channels. Components WITHOUT a separator achieve only 2. The separator is a free +1 channel. The brief's DNA description mentions "1px bottom border separator" but components.css only implements it in 3/8 component families (code-snippet, bento-cell, section-indicator). The base callout -- the MOST frequent component -- lacks it.

---

## 3. Anti-Scale at Component Scale

The anti-scale model from the scale exploration research:

> Richness = semantic density x restraint x spatial confidence

### At Component Scale:

**Semantic density** = content-per-component. How much meaningful content does each component instance carry? A callout with one paragraph of insight is denser than a callout used as a wrapper for a single sentence. Density at component scale means: each component instance EARNS its visual weight. No empty components. No single-line callouts that could be inline text.

**Self-test:** For each component instance, ask: "Does this need its own bordered container, or could it be inline text?" If inline text works, the component is visually expensive for its semantic payload. That is low density.

**Restraint** = not every available component is deployed. The component library has 34 families. Restraint at component scale means: a page uses 8-12 of them, not all 34. A single component type (callouts) does not exceed 35% of all instances. Drop caps appear at most twice. The absence of certain component types is deliberate, not accidental.

**Self-test:** What component types are ABSENT from this page? Can you justify each absence as content-appropriate, not accidental? If not, the restraint is unintentional.

**Spatial confidence** = component intentional standalone. Each component occupies its space with authority. No cramped components. No oversized components with too much padding for their content. The component's visual weight matches its semantic importance.

**Self-test:** Could you describe this component's role in 3 words? ("key insight callout," "code proof," "comparison data"). If not, the component lacks spatial purpose.

### Current Brief Coverage

The brief's Section 3 (Richness) defines density, restraint, and spatial confidence at PAGE scale. The Section 5 (Fractal Echo) table lists "Component ~40-100px: Content organizes inside one element" with threshold "Label/body padding delta >= 4px."

**Gap:** The brief never maps the anti-scale formula (density x restraint x spatial confidence) down to component scale. The only Component-scale threshold is "label/body padding delta >= 4px" -- a spatial metric. There is no density threshold (minimum content per component), no restraint threshold (maximum component repetition), and no spatial confidence threshold (component visual weight matching semantic importance).

---

## 4. Fractal Self-Similarity at Component Scale

### PA-63 asks: Does the component echo the page?

Fractal self-similarity at Component scale means: the organizing principle visible at Page scale (e.g., "progressive density") also manifests inside each component.

**Structural echo:** If the page uses DEEPENING (sparse -> dense progression), then components should have sparse labels and dense bodies. The label zone IS the sparse register. The body zone IS the dense register. Every 2-zone component inherently echoes a sparse-to-dense pattern.

**Parametric echo:** Components in dense zones should have tighter internal padding than components in sparse zones. This is explicitly stated in the brief:

> "Parametric echo: Components in dense zones should have tighter internal padding than components in sparse zones."

This is the STRONGEST current connection between Component scale and Page scale in the brief. It tells builders that component internals should VARY by zone context.

### Current Coverage Assessment

**Structural echo:** IMPLICIT. The 2-zone DNA (sparse label + dense body) inherently echoes page-level sparse/dense patterns. But the brief never says "the label/body structure IS fractal echo at component scale." It just describes the DNA and the fractal principle separately.

**Parametric echo:** EXPLICIT. The brief's Section 5 states it clearly. This is well-covered.

### What's Missing

The brief says components should have parametric echo (tighter padding in dense zones). But it gives no CONCRETE CSS for what this looks like:

```css
/* DEEPENING zone: components are compressed */
.zone--dense .callout {
  padding: 16px 20px;          /* tighter than default 24px 20px */
}
.zone--dense .callout__label {
  margin-bottom: 8px;          /* tighter than default 12px */
}

/* OPENING zone: components breathe */
.zone--sparse .callout {
  padding: 32px 24px;          /* more generous than default */
}
.zone--sparse .callout__label {
  margin-bottom: 16px;         /* more space */
}
```

This CSS recipe is absent from both the brief and components.css. The PRINCIPLE is stated; the RECIPE is not. Per the "recipe beats checklist" finding, builders need the recipe.

---

## 5. Perception Thresholds at Component Scale

### Stated Thresholds

From the Fractal Echo table (Section 5):
- **Label/body padding delta >= 4px** -- this is the only stated Component-scale threshold

From the Component DNA description (Section 8):
- **Label: 0.75rem** -- implied minimum font size for labels
- **Label: letter-spacing 0.1em** -- implied minimum for label letter-spacing
- **Body: 1rem, 1.7 line-height** -- implied body standards

### Derived Thresholds (From Perception Physics, Section 2)

Applying the page-level perception physics to component internals:

| Property | Threshold | Component Application |
|----------|-----------|----------------------|
| Font-size delta | >= 2px between zones | Label (12px/0.75rem) vs body (16px/1rem) = 4px delta. PASSES. |
| Letter-spacing | >= 0.03em or 0 | Label 0.1em, body 0 (normal). PASSES. |
| Background delta | >= 15 RGB on at least one channel | Components currently share a single bg. Does NOT APPLY within-component unless label has distinct bg. |
| Stacked gap | <= 120px | Individual components: label margin (12px) + body padding top = well under 120px. PASSES by nature. |

### What's Missing

**No minimum CONTRAST between label and body text color.** The brief defines label color as "muted color" (via accent or secondary color) and body as full text color. But there is no stated delta threshold. In callout variants, label color is the accent color (e.g., #4A9D6B for tip) while body is #1A1A1A. That is a large delta. But in section-indicator, label color is #666666 and body is also sometimes #666666. No threshold catches this.

**No minimum component HEIGHT.** The brief says Component scale is ~40-100px. But there is no minimum height that triggers "this IS a component" vs "this is an inline element that looks like a component but doesn't earn its weight." A callout with 4px border, 24px padding, 12px label, 16px body = approximately 100px minimum. A stats-bar segment might be only 40px. The range is wide but unstated as a threshold.

---

## 6. What Would Enrichment Look Like?

### Current Brief Coverage of Component Scale

The conventions brief covers Component scale in these locations:
- **Section 5 (Fractal Echo):** One row in the scale table. "Component ~40-100px: Content organizes inside one element. Label/body padding delta >= 4px."
- **Section 8 (CSS Vocabulary):** "Component 2-Zone DNA" paragraph. Label zone spec + body zone spec. "This DNA repeats identically across callouts, code blocks, data tables..."
- **Section 9B (Quality Floor):** ">= 8 component types from the library."

Total: approximately 10-15 lines of the 400-line brief address Component scale directly.

### What's Missing (Ranked by Leverage)

#### GAP 1: Component-Internal Multi-Coherence (HIGH LEVERAGE)

**What to add:** A statement in Section 4 or Section 8 that the label-to-body transition IS a multi-coherence event at smaller scale. The direction (DEEPENING into content, FOCUSING into code, etc.) should be stated per component family.

**Proposed enrichment (2-3 lines):**
> The label-to-body transition inside every component is a micro-coherence event. At this boundary, Typographic + Spatial channels always shift together (2 channels minimum). Adding a 1px internal separator gains a third channel (Structural) for free. The direction is always DEEPENING: from meta-register (label) into content-register (body).

**Why this matters:** Builders who understand components AS multi-coherence events will naturally build richer components. Builders who see components as "boxes with labels" will produce flat components. The flagship had FLAT components because the brief never connected components to multi-coherence.

#### GAP 2: Parametric Echo Recipe (HIGH LEVERAGE)

**What to add:** Concrete CSS showing how component padding varies by zone context. The principle is stated but the recipe is absent.

**Proposed enrichment (5-8 lines):**
> Parametric echo at Component scale: components in dense zones compress their internals.
> - Dense zone callout: padding 16px 20px, label margin-bottom 8px
> - Default callout: padding 24px 20px, label margin-bottom 12px
> - Sparse zone callout: padding 32px 24px, label margin-bottom 16px
> All three use the SAME 2-zone DNA. The difference is TIGHTNESS, echoing the zone's density.

**Why this matters:** The "recipe beats checklist" finding applies here. The principle "components in dense zones should have tighter internal padding" is a CHECKLIST item. The concrete values above are a RECIPE.

#### GAP 3: Internal Separator Consistency (MEDIUM LEVERAGE)

**What to add:** A statement that the 1px internal separator between label and body is RECOMMENDED for all component families, not just code-snippet and bento-cell.

**Current state:** The DNA description says "1px bottom border separator" but base callouts in components.css do NOT implement it. This creates inconsistency.

**Proposed enrichment (1-2 lines):**
> Every component with 2-zone DNA SHOULD include a 1px bottom border between label and body. This separator adds a Structural channel to the label/body boundary, raising channel count from 2 to 3.

#### GAP 4: Behavioral Channel at Component Scale (LOW LEVERAGE)

**What to add:** Guidance on hover states for components. Currently zero components have meaningful hover behavior.

**This is LOW leverage because:** Behavioral channel is documented as an "enhancement channel" at all scales. Components without hover still achieve 2-3 channel shifts. Adding hover would be an enrichment, but it is not blocking quality.

#### GAP 5: Anti-Scale Formula at Component Scale (LOW LEVERAGE)

**What to add:** The density/restraint/spatial-confidence formula mapped to Component scale. This is conceptually elegant but builders probably will not operationalize it.

**Why low leverage:** The anti-scale formula at component scale is hard to measure and even harder to build toward. Page-level thresholds (8+ component types, no single type > 35%) already cover the restraint dimension. Density and spatial confidence at component scale are judgment calls, not binary gates.

---

## 7. Visual Quality: CD-006 vs Flagship at Component Scale

### CD-006 Components (39/40)

CD-006 had STRONG components. From the validated explorations and audit reports:

- **11 distinct component types** deployed (callouts, code blocks, bento grid, reasoning panels, core abstractions, essence pullquotes, data tables, density meters, version badges, section zones, breathing zones)
- **Internal separators present** in most component families (code-snippet header border, bento-cell label border, core-abstraction essence/proof border)
- **3-tier border budget correctly applied:** 4px for callout accent, 3px for structural enclosure (bento cells, reasoning panels, core abstraction), 1px for internal separators
- **Parametric echo visible:** Components in dense zones had compressed padding, components in sparse zones had generous padding
- **Multiple component variants** within the same family (callout--essence with italic serif, callout--tip with standard body text, core-abstraction with split essence/proof zones)

### Flagship Components (1.5/4)

The flagship had WEAK components. From the dissection and PA audit:

- **Zero visible borders** on any component
- **Uniform typography** -- all text at 16px/400 weight, no label/body differentiation
- **No internal separators** -- label/body boundaries were invisible
- **No parametric echo** -- components had the same padding everywhere regardless of zone
- **Few component types** -- the page was dominated by prose paragraphs with no component structure

### The Gap

The flagship's component failure was not about QUANTITY (it had components in the HTML). It was about VISIBILITY. The components existed in markup but produced no perceptible visual signal. Zero borders + uniform typography + no separators = invisible component structure.

**Root cause at Component scale:** The flagship builder received a CHECKLIST of constraints but no RECIPE for component construction. The constraints said "border-radius: 0" and "no box-shadow" (what NOT to do) but did not say "4px left border + 0.75rem uppercase label + 1px separator + 1rem body" (what TO DO). The DNA description exists in the brief but was not transmitted to the builder as a recipe.

### Is Component Scale Enrichment Highest-Leverage?

**Argument FOR:** Component scale is where readers spend 70-80% of their reading time. They are reading callout bodies, scanning table rows, examining code blocks. If components are flat, the page feels flat regardless of zone-level multi-coherence. CD-006's strength was in its components -- 11 families, all with rich internal structure. The flagship's weakness was in its components -- invisible structure. Fixing components fixes what readers actually see.

**Argument AGAINST:** Component scale enrichment cannot fix PAGE-level problems (zone background differentiation, transition grammar, whitespace voids). The flagship's dominant failure was the 70-80% whitespace void, which is a PAGE-scale problem, not a Component-scale problem. Component enrichment is necessary but not sufficient.

**Verdict:** Component scale enrichment is **second-highest leverage**, after Page-scale zone differentiation. But it is the highest-leverage RECIPE enrichment. The Page-scale enrichment is about THRESHOLDS (>=15 RGB delta, <=120px gap). The Component-scale enrichment is about RECIPES (how to build a rich component). Both are needed. Components are where recipe-vs-checklist matters most.

---

## Synthesis: Recommended Enrichments

### Priority 1: Add Component Multi-Coherence to Brief (2-3 lines)

Add to Section 4 or Section 8: "The label/body boundary inside every component is a micro-coherence event. 2 channels minimum (Typographic + Spatial). 3 channels with internal separator (+ Structural). Direction is always DEEPENING."

### Priority 2: Add Parametric Echo CSS Recipe to Brief (5-8 lines)

Add to Section 5 or Section 8: Concrete padding values for components in dense vs default vs sparse zones. Replace the principle-only statement with a recipe.

### Priority 3: Add Internal Separator as Standard Practice (1-2 lines)

Add to Section 8 DNA description: "Every 2-zone component SHOULD include a 1px bottom border between label and body. This gains a free Structural channel at the component boundary."

### Priority 4 (Optional): Update components.css Callout Family

Add `border-bottom: 1px solid var(--color-border-subtle)` to `.callout__label`. This brings the base callout to 3-channel coherence, matching code-snippet and bento-cell.

---

## Cross-Scale Relationships

| Relationship | How Component Scale Connects |
|-------------|----------------------------|
| **Component -> Page** | Component padding varies by zone context (parametric echo). Components in dense zones are compressed; in sparse zones they breathe. |
| **Component -> Section** | Component TYPE varies by section purpose. Technical sections use code blocks + data tables. Narrative sections use callouts + pullquotes. The component MIX encodes section identity. |
| **Component -> Character** | Label zone uses Character-scale typography (0.75rem, uppercase, 0.1em letter-spacing). Body zone uses standard Character-scale (1rem, normal case). Component scale CONTAINS Character scale. |
| **Component -> Navigation** | Component density (how many per viewport) creates rhythm visible at Navigation scale (squint test). Many components = dense page feel. Few components = sparse page feel. |

---

**END SCALE-COMPONENT ANALYSIS**

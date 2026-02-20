# 07 — Perception Thresholds: Floor or Ceiling?

**Task:** Determine whether PV2 perception thresholds are a FLOOR (preventing 1.5/4 FLAT) or a CEILING (enabling 4/4 DESIGNED).

**Verdict:** Thresholds are a FLOOR and ONLY a floor. The gap between 2.5/4 and 4/4 lives entirely above the threshold layer.

---

## 1. The PV2 Perception Thresholds (L1)

From the PV2 pipeline diagram, the thresholds are:

| Parameter | Threshold | Gate |
|-----------|-----------|------|
| Background delta (adjacent zones) | >= 15 RGB points | SC-09 |
| Stacked gap (total at boundary) | <= 108px | SC-10 |
| Font-size delta (adjacent zones) | >= 2px | SC-11 |
| Letter-spacing delta | >= 0.03em | SC-14 |
| Zone count | 2-5 zones | SC-12 |

These are encoded as Layer 1 in the 5-layer compositional intelligence stack. The pipeline diagram explicitly states: "These prevent INVISIBILITY. Prevents 1.5/4 (FLAT)."

---

## 2. CD-006 Actual Values vs. Thresholds

CD-006 scored 39/40 — effectively DESIGNED. Here are its ACTUAL computed values extracted from the CSS:

### Background Colors (Chromatic Channel)

| Token | Hex | R | G | B |
|-------|-----|---|---|---|
| --color-background | #FEF9F5 | 254 | 249 | 245 |
| --color-zone-sparse | #FEF9F5 | 254 | 249 | 245 |
| --color-zone-dense | #FFFFFF | 255 | 255 | 255 |
| --color-zone-breathing | #FAF5ED | 250 | 245 | 237 |
| Header background | #1A1A1A | 26 | 26 | 26 |
| Callout info bg | #F5F9FE | 245 | 249 | 254 |
| Callout tip bg | #F2F9F4 | 242 | 249 | 244 |
| Callout gotcha bg | #FEF6F5 | 254 | 246 | 245 |
| Callout essence bg | #FAF5ED | 250 | 245 | 237 |
| Callout challenge bg | #FFFBF2 | 255 | 251 | 242 |
| Core abstraction label bg | #F8F5FE | 248 | 245 | 254 |

**Adjacent zone delta analysis:**
- zone-sparse (#FEF9F5) to zone-breathing (#FAF5ED): R=4, G=4, B=8. Max channel delta = **8 RGB points**.
- zone-sparse (#FEF9F5) to zone-dense (#FFFFFF): R=1, G=6, B=10. Max channel delta = **10 RGB points**.
- zone-breathing (#FAF5ED) to zone-dense (#FFFFFF): R=5, G=10, B=18. Max channel delta = **18 RGB points**.

**Critical finding: CD-006 FAILS the >= 15 RGB threshold on 2 of 3 zone pairs.** The zone-sparse to zone-breathing delta is only 8 points. The zone-sparse to zone-dense delta is only 10 points. Only the breathing-to-dense pair crosses 15.

Yet CD-006 scored 39/40. This means the threshold, applied mechanically to zone backgrounds, would REJECT a crown jewel.

### Typography Scale

| Level | Size | Usage |
|-------|------|-------|
| --type-page | 3rem (48px) | H1 title |
| --type-section | 1.625rem (26px) | H2 headings |
| --type-subsection | 1.375rem (22px) | H3 headings |
| --type-body | 1rem (16px) | Body text |
| --type-code | 0.875rem (14px) | Code blocks |
| --type-meta | 0.75rem (12px) | Labels, metadata |

**Adjacent font-size deltas:**
- Page → Section: 48 - 26 = **22px** (far above 2px threshold)
- Section → Subsection: 26 - 22 = **4px** (above threshold)
- Subsection → Body: 22 - 16 = **6px** (above threshold)
- Body → Code: 16 - 14 = **2px** (exactly at threshold)
- Code → Meta: 14 - 12 = **2px** (exactly at threshold)

CD-006 meets the font-size thresholds, but barely at the small end. The 6-level type scale provides a 48px to 12px range — a 4:1 ratio. This is far beyond thresholds; it's a COMPOSITIONAL CHOICE about typographic hierarchy.

### Letter-Spacing

CD-006 uses letter-spacing values of:
- 0.15em (header meta)
- 0.1em (section labels, callout labels, multiple component labels)
- 0.05em (table headers, code labels)
- 0 (body text, implicit)
- -0.01em is not used in the main CSS

**Delta between adjacent uses:** 0.05em to 0.1em = **0.05em** (above 0.03em threshold). Body (0) to code labels (0.05em) = **0.05em**.

CD-006 meets the letter-spacing threshold, but uses only 3-4 distinct values. The threshold is easily met; what matters compositionally is that expanded tracking signals "meta/label" while normal tracking signals "content reading." This is SEMANTIC, not numeric.

### Spacing / Stacked Gaps

CD-006 uses three transition types with explicit gap control:
- SMOOTH: 48px margin + 1px separator + 48px padding = **97px total** (below 108px)
- BRIDGE: 64px margin + 32px padding + 64px margin = **160px total** (ABOVE 108px stacked threshold)
- BREATHING: 80px margin + 3px border + 80px padding = **163px total** (ABOVE 108px stacked threshold)

**Critical finding: CD-006 FAILS the stacked gap threshold on 2 of 3 transition types.** BRIDGE transitions create 160px gaps. BREATHING transitions create 163px gaps. Both exceed the 108px maximum.

Yet these are INTENTIONAL architectural decisions — the breathing space IS the design. A gate that rejects 160px gaps would demand CD-006 compress its transition grammar.

---

## 3. Summary: CD-006 vs. Thresholds

| Threshold | CD-006 Status | Passes? |
|-----------|--------------|---------|
| BG delta >= 15 RGB | 8-18 range | FAILS on 2/3 pairs |
| Font-size >= 2px | 2-22px range | PASSES (barely at small end) |
| Letter-spacing >= 0.03em | 0.05em typical | PASSES |
| Stacked gap <= 108px | 97-163px range | FAILS on 2/3 types |
| Zone count 2-5 | 3 zone types | PASSES |

**CD-006 would FAIL 2 of 5 thresholds applied mechanically.** The crown jewel of the design system would be rejected by its own verification gates.

---

## 4. What Separates Threshold-Compliant from DESIGNED

Consider a hypothetical page that meets ALL thresholds:

| Property | Minimum Compliant | CD-006 | Gap |
|----------|-------------------|--------|-----|
| BG colors | 3 zones, 15+ RGB apart | 6+ distinct backgrounds, semantically assigned to content roles (info=blue, tip=green, gotcha=coral, essence=breathing) | SEMANTIC ASSIGNMENT |
| Typography | Body + 1 heading 2px apart | 6-level hierarchy with drop caps, italic subsections, mono labels | TYPOGRAPHIC VOICE |
| Borders | Present somewhere | 4px semantic borders with weight gradient (4px=established, 3px=probable, 1px=speculative) | INFORMATION ENCODING |
| Spacing | Under 108px | 3 named transition types (smooth/bridge/breathing) with specific rhythmic purpose | COMPOSITIONAL GRAMMAR |
| Layout | Anything that passes | 5 distinct axis patterns (Z, F, Bento, Spiral, Choreography) deployed to match content structure | STRUCTURAL METAPHOR |

The gap is not quantitative but qualitative:

1. **Semantic direction:** CD-006's borders encode information confidence (4px=established, 1px=speculative). A threshold-compliant page has borders that are just... borders.

2. **Compositional grammar:** CD-006 has named transitions (smooth, bridge, breathing) that create rhythm. Threshold compliance produces transitions that are just gaps.

3. **Component vocabulary:** CD-006 uses 11 component types (callout, code-block, file-tree, decision-matrix, core-abstraction, task, reasoning, bento-grid, z-hero, spiral-strata, choreography). Threshold compliance requires zero components.

4. **Fractal self-similarity:** CD-006 operates at 5 scales (navigation, page, section, component, character). Drop caps at character scale echo the red primary at page scale. Thresholds measure nothing about scale coverage.

5. **Content-form resonance:** CD-006 uses Z-pattern layout for quick-start content because Z-pattern matches scanning behavior. It uses spiral for confidence-stratified content because spiral matches progressive deepening. Thresholds cannot verify that layout matches content.

---

## 5. The Anti-Scale Model Lens

The anti-scale model (from scale research) states:

> **Richness = semantic density x restraint x spatial confidence**

This is multiplicative. If any factor = 0, richness = 0.

**How thresholds relate to each factor:**

| Factor | What thresholds measure | What thresholds miss |
|--------|------------------------|---------------------|
| Spatial confidence | YES — bg deltas, font deltas, gap limits prevent invisible zones | Cannot measure whether spatial decisions are COHERENT (multi-channel, same direction) |
| Restraint | PARTIALLY — gap maximum prevents voids | Cannot measure whether CSS is PURPOSEFUL (every rule earns its place) |
| Semantic density | NO — nothing about meaning per CSS line | Cannot measure whether visual choices carry semantic weight |

Thresholds address approximately 1/3 of the richness equation (spatial confidence prevention). They address zero of semantic density and minimal restraint.

**The flagship (1.5/4) had:**
- Spatial confidence ≈ 0 (1-8 RGB zone deltas, imperceptible)
- Restraint ≈ low (227 lines of sub-perceptual CSS)
- Semantic density ≈ low (uniform appearance, no content-form relationship)
- **Anti-scale product: ~0** (any factor near zero collapses the product)

**CD-006 (39/40, ~4/4) had:**
- Spatial confidence ≈ high (but via COMPONENT DIVERSITY not zone backgrounds — callouts, code blocks, grids, headers create contrast through STRUCTURAL variety, not background deltas)
- Restraint ≈ high (every CSS rule visually present; zero sub-perceptual waste)
- Semantic density ≈ very high (borders encode confidence, transitions encode rhythm, layouts encode content structure)
- **Anti-scale product: high** (all three factors strong)

---

## 6. The Key Insight: CD-006's Spatial Confidence Comes from Components, Not Zone Backgrounds

This is the critical finding that resolves the apparent contradiction of CD-006 failing the 15-RGB threshold while scoring 39/40.

CD-006's zone backgrounds (sparse=#FEF9F5, breathing=#FAF5ED) are SUBTLY different — 8 RGB points. But within those zones, the COMPONENTS create massive visual contrast:
- Dark header (#1A1A1A) against cream body
- Dark code blocks (#1A1A1A) against light backgrounds
- Colored callout borders (blue, green, coral, amber, purple) against neutral backgrounds
- 3px structural borders against borderless content
- Bento grids against prose flow
- Drop caps (3.5em, red) against body text

The spatial confidence comes from COMPONENT TEXTURE, not zone-level background shifting. The threshold model measures the wrong variable.

This means a Fat Core agent could meet ALL thresholds and still produce FLAT output if it:
- Uses 3 backgrounds 15+ RGB apart but deploys no structural components
- Uses 3 font sizes 2px+ apart but creates no typographic hierarchy with semantic purpose
- Keeps gaps under 108px but creates no rhythmic transition grammar

Conversely, a Fat Core agent could FAIL thresholds while producing DESIGNED output if it:
- Uses subtle zone backgrounds (8 RGB apart) but creates rich component texture within zones
- Uses large breathing transitions (160px) that serve compositional rhythm

---

## 7. Verdict: Floor, Not Ceiling

**Thresholds are necessary but radically insufficient.**

| PA-05 Score | What produces it | Thresholds' role |
|-------------|-----------------|------------------|
| 1.5/4 FLAT | All visual decisions below perception | Thresholds PREVENT this (floor) |
| 2.0/4 STYLED | Visible variation without coherence | Thresholds ENABLE this (minimum) |
| 2.5/4 COMPOSED | Coherent variation with some semantic weight | Thresholds IRRELEVANT — multi-coherence, not individual channels |
| 3.0/4 COMPOSED+ | Strong multi-channel coherence, content-form relationship emerging | Thresholds IRRELEVANT |
| 4.0/4 DESIGNED | Semantic density x restraint x spatial confidence all high | Thresholds IRRELEVANT — anti-scale model governs |

**The gap between 2.5/4 and 4/4 is NOT about thresholds at all.** It is about:

1. **Multi-coherence (L4):** Multiple channels shifting together at boundaries in the same semantic direction. Thresholds check individual channels; multi-coherence requires coordination.

2. **Anti-scale judgment (L5):** Knowing when a CSS rule earns its visual weight. Knowing when restraint creates more impact than addition. This is compositional intelligence that no numeric threshold captures.

3. **Content-form resonance:** Choosing Z-pattern BECAUSE the content demands scanning, not because "use grid layouts." Choosing spiral BECAUSE the content has confidence strata. This is the irreducible capability of the builder agent.

4. **Component vocabulary fluency:** Deploying 11 component types where each serves a specific content purpose, not just achieving numeric diversity. CD-006's reasoning component (2-column comparison + recommendation) exists because the content has reasoning; the task component exists because the content has tasks.

---

## 8. Implications for Fat Core

### What this means for the conventions brief:

Thresholds MUST be in the brief (they prevent catastrophic failure). But they should occupy **5 lines, not 50**. The brief's weight should be on:

1. **Component deployment guidance** (which components serve which content types)
2. **Multi-coherence principle** ("at every zone boundary, at least 3 things should change together")
3. **Anti-scale self-test** ("does every CSS rule earn its visual weight?")
4. **Semantic direction** ("borders encode information hierarchy, not decoration")

### What this means for the gate runner:

The 15-gate verification shell catches L1 issues reliably. But SC-09 (bg delta >= 15) should be modified to account for COMPONENT-LEVEL contrast, not just zone-level backgrounds. A zone with 8 RGB delta but 6 distinct component types with strong visual contrast should PASS.

### What this means for the 4/4 question:

**No threshold configuration produces 4/4.** The ceiling is not about what numbers to set. The ceiling is about whether the builder agent has:
- Compositional vocabulary (knows 11+ component types and when to use each)
- Spatial confidence (creates contrast through structural variety, not just color shifting)
- Semantic discipline (every visual decision maps to content meaning)
- Rhythmic grammar (transitions create narrative, not just separation)

These are properties of the AGENT, not the PROMPT. CD-006 was built by an Opus agent with deep context about the design system and content. The thresholds were never the enabling factor — the agent's fluency was.

---

## 9. The Paradox Resolved

**Why the flagship FAILED despite having MORE infrastructure than CD-006:**

The flagship had 530 lines of input including perception thresholds. CD-006 had no formal thresholds at all. The flagship met thresholds programmatically (technically) while producing sub-perceptual CSS. CD-006 violated thresholds (8 RGB zone deltas, 160px transitions) while producing rich, designed output.

Thresholds measure the WRONG LEVEL of the visual hierarchy. They measure zone-level properties when richness emerges from component-level and semantic-level properties. A builder that optimizes for threshold compliance (as the flagship did) produces technically correct but visually flat output. A builder that optimizes for content-form resonance (as CD-006 did) produces rich output that may incidentally violate zone-level thresholds.

**The floor/ceiling answer is definitive:**
- **Floor:** YES — thresholds prevent 1.5/4 by ensuring visual decisions are at least perceptible
- **Ceiling:** NO — thresholds are orthogonal to the 2.5/4 → 4/4 gap, which is governed by compositional intelligence, semantic density, restraint, and content-form resonance
- **Gotcha:** Mechanically applied thresholds would REJECT CD-006, the crown jewel. Any gate system must account for component-level richness as an alternative path to spatial confidence.

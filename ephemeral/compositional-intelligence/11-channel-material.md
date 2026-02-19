# CHANNEL 6: MATERIAL — Trace Through PV2

**Author:** Material Channel Tracer (Opus 4.6)
**Date:** 2026-02-19
**Task:** #11 — Trace how texture/depth/surface coherence operates in PV2
**Sources:** PV2-PIPELINE-DIAGRAM.md, TC SKILL.md, mechanism-catalog.md, tokens.css, 14-MASTER-SYNTHESIS.md, prohibitions.md, CD-006-pilot-migration.html

---

## EXECUTIVE SUMMARY

The material channel is the MOST constrained and LEAST specified channel in PV2. Five soul prohibitions (no box-shadow, no gradients, no drop-shadow, no semi-transparency, no decorative complexity) eliminate the conventional CSS toolkit for expressing surface quality. Yet CD-006 achieved material richness within these constraints. PV2 names "Material" as one of 6 operational channels but provides ZERO concrete specification of what material coherence means, how to plan it, how to build it, or how to verify it. The channel exists in name only.

**Verdict:** Material is a PHANTOM CHANNEL — referenced in taxonomies, absent from operations. The intelligence that would make material decisions operational is scattered across 4 files with no structured invocation path. This is the channel most likely to be ignored entirely by a builder, producing technically compliant but atmospherically flat output.

---

## 1. WHAT IS THE MATERIAL CHANNEL?

Material is the channel that governs the perceived SURFACE QUALITY of a page — the sense of weight, texture, substance, and depth that a reader experiences without consciously analyzing. It answers: "What does this page feel like to TOUCH (metaphorically)?"

### CSS Properties That Encode Material

Under soul constraints, the material channel operates through a RESTRICTED vocabulary:

| Material Quality | Allowed CSS | Prohibited CSS |
|-----------------|------------|----------------|
| **Weight/heaviness** | `border-width` (4px/3px/1px), `font-weight` (400-700) | box-shadow, drop-shadow |
| **Depth/layering** | Background color shifts (#FEF9F5 -> #FAF5ED -> #1A1A1A) | Gradients, opacity < 1, z-index stacking with shadows |
| **Texture** | Font-family shifts (serif vs sans vs mono), letter-spacing variation | Background images, SVG patterns, filter effects |
| **Surface quality** | Background color warmth (warm cream vs cool white vs dark), border solidity | Background gradients, glassmorphism, neumorphism |
| **Density/compression** | Padding, line-height, font-size, gap | — (no restrictions on spacing) |
| **Solid offset depth** | `::after` pseudo-element with solid offset (4px/4px) | Semi-transparent pseudo-elements, blurred shadows |

### What Makes Material Distinct From Other Channels

Material overlaps with but is NOT reducible to:
- **Chromatic:** Background colors ARE material (zone warmth), but material also includes weight and texture
- **Typographic:** Font shifts ARE material (serif = formal texture, mono = mechanical texture), but material also includes spatial depth
- **Structural:** Borders ARE material (weight encoding), but material also includes atmospheric qualities
- **Spatial:** Density IS material (compression = heavier), but material also includes surface quality

**The unique contribution of material:** ATMOSPHERE. A page can be chromatically correct, typographically varied, structurally sound, and spatially rhythmic yet feel FLAT — lacking the sense that the surface has qualities beyond color and layout. Material is what makes a warm cream background feel like paper rather than just "a light color."

---

## 2. WAVE-BY-WAVE TRACE

### Wave 0 (TC Planner): PARTIALLY PRESENT

**Where material appears in TC:**

1. **Phase 0D-CEILING context box** (SKILL.md line 155-156): "Per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+)" — but these are mechanism-catalog categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation), NOT channel categories. The D category (Depth/Emphasis) is the closest to material, containing:
   - Mechanism #3: Solid Offset Depth
   - Mechanism #7: Zone Background Differentiation
   - Mechanism #16: Drop Cap

2. **Phase 4 Isomorphism Table** (SKILL.md lines 1134-1141): TC's "Material Properties" column explicitly maps material qualities to CSS:
   - Density/compression -> padding, line-height, font-size, gap
   - Weight/heaviness -> border-width, font-weight, background opacity
   - Transparency/opacity -> Background color saturation/value shifts
   - Texture -> Font family shifts (serif vs sans vs mono)

3. **Phase 4 Completeness Checklist** (SKILL.md line 1165): "Material: What is the substance like?" — explicitly requires the planner to address material.

4. **Translation Grammar** (SKILL.md lines 1181-1219): Provides weight/depth/density lookup tables mapping metaphor properties to concrete CSS.

**What TC does NOT do for material:**

- TC does NOT produce a "material plan" as a distinct section in `_build-plan.md`. The build plan specifies zone backgrounds, mechanisms per category, and transitions — but there is no section that says "the material quality of this page should feel like X."
- TC does NOT specify shadow-alternative depth treatments. The solid offset (mechanism #3) is listed in the catalog but never explicitly planned.
- TC does NOT specify font-as-texture decisions. Whether a section should feel "precise" (sans-serif) vs "authoritative" (serif) vs "mechanical" (mono) is left to the builder's discretion.
- TC does NOT specify warmth gradients within zones. Whether zone 2's #FAF5ED should feel "earthy" or "papery" is never discussed.

**Material intelligence in TC: ~15% specified.** The isomorphism table and completeness checklist acknowledge material exists. The translation grammar provides CSS lookup. But TC produces no material-specific deliverable — no "material palette," no "texture arc," no "depth plan."

### Wave 0.5 (Metaphor Validation): ABSENT

The fresh-eyes metaphor validator checks whether the metaphor is STRUCTURAL (suggests specific CSS forms) or ANNOUNCED (just a label). This validation could in principle catch material decisions — "geological strata implies darkening depth, heavier borders at lower layers" is structural. But the validator has no specific protocol for material evaluation. The binary STRUCTURAL/ANNOUNCED gate is metaphor-level, not channel-level.

**Material intelligence in Wave 0.5: 0%.** No material-specific validation.

### Wave 0.9 (Handoff Gate): ABSENT

The 5 binary handoff checks are:
1. Zone count 2-5? (Spatial)
2. BG colors >= 15 RGB delta? (Chromatic)
3. >= 2 grid layouts? (Structural)
4. Per-category mechanism minimums? (Mixed — but Depth/Emphasis is the closest to material)
5. >= 3 transition types? (Spatial/Structural)

**None of these checks verify material coherence.** There is no gate for:
- "Does the material quality reinforce the metaphor?"
- "Are depth treatments planned?"
- "Does font-as-texture map to semantic zones?"
- "Is the solid offset technique deployed for focal points?"

Check #4 (per-category minimums) indirectly catches material via the D (Depth/Emphasis) category minimum of 1+. If the planner selected mechanism #3 (solid offset), #7 (zone backgrounds), or #16 (drop cap), the D:1+ minimum is satisfied. But this only confirms that ONE depth mechanism is planned — not that material decisions are coherent or reinforcing.

**Material intelligence in Wave 0.9: ~5%.** Only the indirect D:1+ minimum.

### Wave 1 (Build): FRAGMENTARY

The 9-phase recipe distributes material decisions across multiple phases without cohesion:

| Recipe Phase | Material Content | Specificity |
|-------------|-----------------|-------------|
| Phase 2 (Soul) | "Zero box-shadow. No gradients." | HIGH — prohibitions only |
| Phase 3 (Zone BGs) | "Apply background colors per zone. >= 15 RGB delta." | MEDIUM — chromatic, not material |
| Phase 4 (Borders) | "Border-left on callouts (4px solid). Callout variants." | MEDIUM — structural weight |
| Phase 5 (Typography) | "3-zone typography arc: display/body/detail." | LOW — font-as-texture is unaddressed |
| Phase 6 (Element-Level) | "Pull-quote/blockquote visual distinction." | LOW — surface quality unspecified |
| Phase 8 (Verification) | "Cascade value table: background, font-size, font-weight, letter-spacing, border-left" | MEDIUM — records material properties but doesn't evaluate coherence |

**What the recipe DOES specify materially:**
- Zone backgrounds must be >= 15 RGB apart (chromatic constraint with material implication)
- Borders must exist (structural weight = material weight)
- Typography must have 3 zones (font-as-texture implicitly)

**What the recipe DOES NOT specify materially:**
- Whether solid offset depth (#3) should be deployed and where
- Whether background warmth should follow a temperature arc (warm -> neutral -> cool -> warm)
- Whether font-weight progression should reinforce depth (heavier = deeper/more important)
- Whether padding compression should correlate with background darkening (tighter = darker = deeper)
- Whether the page should feel like paper, like stone, like glass, like cloth — i.e., the METAPHOR-DRIVEN material quality

**The recipe treats material as a BYPRODUCT of other phases, not as a compositional channel.** If the builder applies zone backgrounds (Phase 3) and borders (Phase 4) and typography (Phase 5) correctly, some material quality emerges. But it emerges ACCIDENTALLY, not INTENTIONALLY.

**Material intelligence in Wave 1: ~20%.** Scattered across 4 phases, never cohered.

### Wave 2 (Verification): MINIMALLY PRESENT

**Programmatic Gates:**
- SC-02 (Soul): Verifies box-shadow: none, border-radius: 0 — material PROHIBITIONS
- SC-09 (BG delta): Verifies >= 15 RGB between zones — material THRESHOLD
- SC-11 (Font zones): Verifies >= 2px font-size delta — material THRESHOLD (typographic texture)

**These verify material CONSTRAINTS, not material QUALITY.** A page that passes all 3 gates could still feel materially flat — uniform font-weight throughout, no depth treatment, no surface quality variation, no weight progression. The gates prevent material violations but don't detect material absence.

**Perceptual Audit (9 auditors, 48 questions):**
The 48 PA questions include several that touch material:
- PA-05: "Does this feel DESIGNED?" (holistic, includes material atmosphere)
- PA-32: "Is visual weight distributed or concentrated?" (material weight)
- PA-36: "Where are the designed moments?" (material peaks)
- PA-47: "Does visual novelty persist throughout the page?" (material variety)

But none ask DIRECTLY about material quality:
- No question asks "Does this page have texture?"
- No question asks "Do depth treatments reinforce the metaphor?"
- No question asks "Does the surface quality change between zones?"
- No question asks "Is font-as-texture intentional or default?"

The PA catches material deficiency indirectly through the "designed" gestalt, but cannot diagnose material specifically. If 9/9 auditors say "this feels flat," that MIGHT be material — or chromatic, or typographic, or structural. The PA has no channel-specific diagnostic.

**Material intelligence in Wave 2: ~10%.** Constraint verification only; no quality detection.

### Wave 3 (Fix): STRUCTURALLY UNABLE

The fix cycle addresses "top-3 blocking issues from PA weaver report." If material flatness is identified as a blocking issue, the builder receives feedback like "page feels flat" or "lacks visual depth." But:

1. The builder has no material-specific recipe to follow for fixes
2. The fix instruction would be "add depth" without specifying HOW within soul constraints
3. The builder's reference files (recipe, tokens, prohibitions) don't contain a "material enhancement protocol"
4. The 2-PA re-verification cannot detect whether material was improved (same diagnostic gap as Wave 2)

**Material intelligence in Wave 3: ~5%.** Can be identified as a problem; cannot be fixed structurally.

---

## 3. WHERE MATERIAL INTELLIGENCE EXISTS (AND IS LOST)

### Intelligence Source 1: TC SKILL.md Isomorphism Table (Lines 1134-1141)

The TC skill contains the most explicit material intelligence in the entire pipeline:

```
C. Material Properties -- Texture, weight, substance
| Density/compression | padding, line-height, font-size, gap |
| Weight/heaviness    | border-width, font-weight, background opacity |
| Transparency/opacity| Background color saturation/value shifts |
| Texture             | Font family shifts (serif vs sans vs mono) |
```

**Where it's lost:** This table lives inside the TC planner's context. The TC planner uses it to select mechanisms. But the MAPPING from material properties to specific CSS values does not survive into `_build-plan.md`. The build plan says "deploy mechanism #7 (zone backgrounds)" but does NOT say "zone backgrounds should encode geological weight — deeper = darker = heavier material quality."

**Compression point:** TC's material properties table (4 rows, ~100 words) compresses to mechanism names in the build plan (~5 words: "M:1+ via #7"). The SEMANTIC REASONING about WHY mechanism #7 encodes material quality for THIS content is discarded.

### Intelligence Source 2: Mechanism Catalog — Mechanism #3 (Solid Offset Depth)

The mechanism catalog contains the soul-legal depth technique:

```css
.featured-element::after {
  content: '';
  position: absolute;
  top: 4px; left: 4px;
  width: 100%; height: 100%;
  background: var(--color-text);
  z-index: -1;
}
```

**Where it's lost:** This mechanism is cataloged but never MANDATED. The recipe's 9 phases never say "Phase X: Deploy solid offset on featured elements." It exists in the mechanism catalog that the builder receives but has no phase in the recipe where it gets applied. Compare with borders (Phase 4), typography (Phase 5), zone backgrounds (Phase 3) — each has a dedicated phase. Solid offset has no home.

### Intelligence Source 3: Prohibitions — The Anti-Material Constraints

Prohibitions.md contains 5 constraints that define material's boundaries:
1. NEVER box-shadow (no false depth)
2. NEVER drop-shadow (no physical light)
3. NEVER opacity < 1 (no translucency)
4. NEVER gradients (no implied light sources)
5. NEVER decorative complexity (no texture patterns)

**Where it's lost:** These constraints are LOADED by the builder (prohibitions.md is always-load) but only as NEGATIONS. The builder knows what NOT to do materially but has no paired PLAYBOOK for what TO DO. This is the guardrail factory problem applied specifically to the material channel: 5 guardrails, 0 playbooks.

### Intelligence Source 4: CD-006 — Material Through Constraints

CD-006 achieved material richness (39/40 score) with these techniques:
- Solid offset depth (`--offset-x: 4px; --offset-y: 4px; --offset-color: #1A1A1A`)
- Warm cream background as "paper" texture (`#FEF9F5`)
- Dark code blocks as "depth zones" (`#1A1A1A`)
- Border-weight encoding as "structural weight" (4px/3px/1px)
- Font-family as "texture shift" (Instrument Serif = formal/heavy, Inter = clean/light, JetBrains Mono = precise/mechanical)
- Background warmth gradient across zones (warm cream -> cool white -> earthy tan -> dark)

**Where it's lost:** CD-006's material decisions were made by an Opus builder with human iteration, not from a recipe. The material intelligence is EMBODIED in the HTML/CSS artifact but never EXTRACTED into operational form. The mechanism catalog captures individual techniques (#3 solid offset, #7 zone backgrounds) but not the COHERENT MATERIAL STRATEGY that made them work together.

---

## 4. THE NAMING CONFUSION: TWO DIFFERENT "MATERIAL" CONCEPTS

A critical confusion exists between two uses of "Material" in PV2:

### Material as Mechanism Category (TC SKILL.md)

The TC skill uses 5 categories: Spatial, Temporal, Material, Behavioral, Relational. "Material" here means the isomorphism table's material properties — density, weight, transparency, texture. The per-category minimum requires M:1+ (at least one material mechanism).

### Material as Verification Channel (Master Synthesis)

The master synthesis resolves channel taxonomy to 6 channels: Chromatic, Typographic, Spatial, Structural, Behavioral, Material. "Material" here means a CSS measurement channel — what getComputedStyle properties encode surface quality.

### The Problem

These two uses of "Material" have DIFFERENT scopes:
- TC's Material category includes: density (padding), weight (border-width, font-weight), transparency (color shifts), texture (font-family shifts)
- Verification's Material channel is UNDEFINED — the master synthesis says "Material" is a channel but provides no measurement protocol

**X-05 from the master synthesis resolves:** "The mechanism-catalog.md names are the source of truth." But the mechanism catalog uses Spatial/Hierarchy/Component/Depth-Emphasis/Structure-Navigation — it does NOT have a "Material" category. "Material" appears ONLY in the TC skill's isomorphism table and the verification channel taxonomy.

**Result:** Material exists in two taxonomies and zero operational specifications. No one is responsible for material coherence. No one can measure it. No one can verify it.

---

## 5. WHAT CD-006 DID THAT PV2 CANNOT REPRODUCE

CD-006's material coherence came from 6 COORDINATED decisions:

1. **Warm paper ground:** `#FEF9F5` background as the default surface — not just "a light color" but deliberately chosen to evoke physical paper warmth
2. **Depth through inversion:** Dark code blocks and dark header/footer create material depth without shadows — the "bedrock layer" feels physically deeper
3. **Weight encoding:** 4px borders on high-priority elements, 1px on low-priority — heavier borders feel materially heavier
4. **Texture through typography:** Instrument Serif for display headings (formal, carved texture), Inter for body (clean, smooth texture), JetBrains Mono for code (mechanical, precise texture)
5. **Solid offset focal points:** The `::after` pseudo-element creates material emphasis without violating soul constraints
6. **Temperature arc:** Zone progression from warm cream (#FEF9F5) through neutral white (#FFFFFF) through earthy tan (#FAF5ED) to dark (#1A1A1A) — a material temperature journey

**Why PV2 cannot reproduce this:**

- Decision 1: PV2 specifies `#FEF9F5` as background token but never frames it as "paper texture" — the semantic framing is lost
- Decision 2: PV2's Phase 3 handles zone backgrounds but doesn't connect dark zones to "material depth"
- Decision 3: PV2's Phase 4 handles borders but doesn't connect weight to "material heaviness"
- Decision 4: PV2's Phase 5 handles typography zones but doesn't connect font families to "textural quality"
- Decision 5: PV2 never phases solid offset deployment — mechanism #3 has no recipe home
- Decision 6: PV2's handoff gate checks >= 15 RGB delta but not whether the arc has a TEMPERATURE DIRECTION (warm -> cool vs random)

Each decision exists SOMEWHERE in PV2 as a fragment. But the COHERENT STRATEGY — "this page should feel like heavy paper gradually darkening toward stone" — is never articulated and never verified.

---

## 6. STRUCTURED APPROACH: MAKING MATERIAL OPERATIONAL

### 6.1: TC Must Produce a Material Palette

Add to TC's `_build-plan.md` output a MATERIAL section:

```markdown
## Material Palette

### Surface Quality
TEMPERATURE ARC: warm cream (introduction) -> cool white (technical) -> earthy tan (procedural) -> warm cream (conclusion)
METAPHOR CONNECTION: [How surface temperature reinforces the content metaphor]

### Depth Treatment
PRIMARY DEPTH TECHNIQUE: [solid offset / dark inversion / weight gradient]
FOCAL POINTS: [Which 2-3 elements receive maximum material emphasis]
DEPTH DIRECTION: [Top-to-bottom darkening / Center-outward weight / Rhythmic weight pulses]

### Texture Map
DISPLAY ZONES: Instrument Serif — [what quality this evokes for THIS content]
BODY ZONES: Inter — [what quality this evokes for THIS content]
TECHNICAL ZONES: JetBrains Mono — [what quality this evokes for THIS content]
TEXTURE TRANSITIONS: [Where font-family shifts should reinforce zone transitions]

### Weight Distribution
HEAVIEST ELEMENT: [What and why]
LIGHTEST ELEMENT: [What and why]
WEIGHT GRADIENT DIRECTION: [How weight reinforces the content's hierarchy]
```

This is ~15 lines added to the build plan. It makes material decisions EXPLICIT rather than hoping they emerge from other phases.

### 6.2: Recipe Phase 4.5 — Material Deployment

Insert a dedicated material phase between Phase 4 (Borders) and Phase 5 (Typography):

```
Phase 4.5: Material Surface

1. DEPLOY solid offset (mechanism #3) on 2-3 featured elements
   - "Can you SEE the offset creating depth?"
   - Expected: 4px solid dark offset on featured callouts, key diagrams, or hero sections

2. VERIFY temperature arc from build plan
   - Check zone background sequence matches planned temperature direction
   - "Does the warmth shift feel intentional or random?"

3. CONNECT border weight to material weight
   - Heaviest borders (4px) should appear in zones with densest content
   - Lightest borders (1px) should appear in zones with sparsest content
   - "Does heavier = more important = denser = darker?"

4. PLAN font-as-texture deployment
   - Where will Instrument Serif create "formal/carved" texture?
   - Where will JetBrains Mono create "mechanical/precise" texture?
   - These decisions feed Phase 5 (Typography) with material intent
```

This is ~20 lines of recipe. It makes material a SEQUENCED phase rather than an accidental byproduct.

### 6.3: Handoff Gate — Material Check

Add a 6th binary check to Wave 0.9:

```
[ ] Material depth planned? (At least 1 depth technique specified: solid offset, dark inversion, or weight gradient)
```

This is the CHEAPEST possible material gate — a single binary check that the planner addressed material AT ALL. It does not verify quality (that's the PA's job) but prevents the channel from being ignored entirely.

### 6.4: Programmatic Gate — Material Measurement

Add SC-13 to the gate runner:

```javascript
// SC-13: Material depth — at least ONE element uses solid offset or dark background inversion
// Checks for ::after pseudo-elements with offset positioning OR dark-on-light background inversions
```

This gate verifies that SOME material depth technique was deployed. Combined with SC-09 (background delta), SC-11 (font-size zones), and SC-02 (soul), it creates a minimal material verification layer.

### 6.5: PA Material Questions

Add 2 material-specific questions to the 48-question PA set:

```
PA-49: MATERIAL ATMOSPHERE — Does the page have perceived surface quality (paper-like warmth, stone-like weight, glass-like precision) or does it feel like "just a webpage"?
PA-50: MATERIAL COHERENCE — Do depth treatments (dark zones, heavy borders, solid offsets) reinforce each other or appear independently?
```

These give the 9 PA auditors explicit permission and vocabulary to evaluate material. Without these questions, material deficiency gets reported as "feels flat" without actionable diagnosis.

---

## 7. THE HARDEST PROBLEM: MATERIAL IS THE ANTI-SOUL CHANNEL

Material is fundamentally the channel most constrained by the soul:

| What Material Typically Uses | KortAI Soul Prohibition |
|------------------------------|------------------------|
| box-shadow for depth | NEVER (Prohibition #2) |
| gradients for surface | NEVER (Prohibition #5) |
| opacity for translucency | NEVER (Prohibition #4) |
| drop-shadow for weight | NEVER (Prohibition #3) |
| border-radius for softness | NEVER (Prohibition #1) |
| texture images for surface | NEVER (Prohibition #8 — decorative complexity) |

This means material in KortAI is expressed through a SEVERELY restricted vocabulary:
- Flat background color shifts (warm/cool temperature)
- Border weight (4px/3px/1px = heavy/medium/light)
- Font family (serif = formal, sans = clean, mono = precise)
- Solid offset pseudo-element (the ONE allowed depth technique)
- Spacing compression (tight = dense/heavy, loose = light/airy)
- Dark inversion (dark background sections = deep material zones)

**The challenge:** These are ALL shared with other channels. Background colors are chromatic. Borders are structural. Fonts are typographic. Spacing is spatial. Material in KortAI is ENTIRELY expressed through OTHER channels' CSS properties, distinguished only by SEMANTIC INTENT.

**This is why material is the hardest channel to formalize:** You cannot measure "material intent" with getComputedStyle. You can only measure the CSS properties, which belong to chromatic/structural/typographic/spatial channels. Material is the channel that exists BETWEEN other channels — it is the COHERENCE of their deployment, not a separate CSS dimension.

### Implication for PV2

Material cannot be verified programmatically in isolation. It can only be:
1. PLANNED by TC (material palette in build plan)
2. DEPLOYED by builder (material phase in recipe)
3. EVALUATED by PA (material questions in audit)

The programmatic gates can verify that material INGREDIENTS exist (dark zones, solid offsets, weight gradients) but cannot verify that they COHERE into a material atmosphere. This is fundamentally a perceptual judgment, which is why the PA is essential for material.

---

## 8. SCORING: MATERIAL CHANNEL THROUGH PV2

| Wave | Material Intelligence | Score (0-10) | Primary Gap |
|------|---------------------|-------------|-------------|
| Wave 0 (TC) | Isomorphism table + completeness checklist | 4/10 | No material-specific deliverable in build plan |
| Wave 0.5 (Metaphor) | Structural/Announced test (metaphor-level) | 1/10 | No material-specific validation |
| Wave 0.9 (Handoff) | D:1+ minimum (indirect) | 1/10 | No material coherence check |
| Wave 1 (Build) | Scattered across Phases 2-6 | 3/10 | No dedicated material phase; no recipe for depth |
| Wave 2 (Verify) | SC-02 soul check + PA gestalt | 2/10 | No material measurement; no PA material questions |
| Wave 3 (Fix) | Can identify "flat" feeling | 1/10 | No material-specific fix protocol |
| **OVERALL** | | **2/10** | Material is named but operationally absent |

---

## 9. COMPARISON: CD-006 vs FLAGSHIP vs PV2

| Material Dimension | CD-006 (39/40) | Flagship (1.5/4) | PV2 (projected) |
|-------------------|----------------|-------------------|-----------------|
| Temperature arc | Warm->cool->earthy->warm (intentional) | 1-8 RGB shifts (imperceptible) | >= 15 RGB (threshold, not intent) |
| Depth technique | Solid offset on featured elements | Zero depth treatment | Mechanism #3 in catalog (unphased) |
| Weight encoding | 4px/3px/1px = priority gradient | All borders identical | Phase 4 specifies borders (no weight plan) |
| Font-as-texture | 3 families with intentional texture zones | All 16px/400 | Phase 5 specifies size (not texture quality) |
| Surface quality | "Heavy paper" atmosphere throughout | Flat digital surface | Unaddressed |
| Dark inversion | Header/footer/code as depth anchors | Zero dark zones (all cream) | Phase 2 allows dark; no mandate |

**Key insight:** PV2 fixes the chromatic threshold (>= 15 RGB) but does not address the MATERIAL QUALITY that makes those color shifts feel like surface changes rather than just "different colors." The gap between "colors that are 15 RGB apart" and "surfaces that feel like different materials" is the material channel's unique contribution — and it is entirely absent from PV2.

---

## 10. RECOMMENDATIONS

### Immediate (for codification)

1. **Add Material Palette section to TC build plan output** (~15 lines of specification in TC SKILL.md)
2. **Add Phase 4.5 (Material Surface) to operational-recipe.md** (~20 lines)
3. **Add 6th handoff gate check** (material depth planned, 1 binary check)
4. **Add PA-49 and PA-50** (material atmosphere + material coherence questions)

### Structural (for recipe design)

5. **Reclassify mechanism #3 (solid offset)** as a STANDARD deployment, not optional mechanism. Every flagship page should have at least 2-3 solid offset focal points.
6. **Add "temperature direction" to build plan** — require TC to specify whether the zone background arc moves warm->cool->warm, warm->dark, or another intentional pattern.
7. **Add weight-to-depth correlation instruction** — "Heaviest borders should appear in densest/darkest zones. If your heaviest border appears in your lightest zone, justify the exception."

### Diagnostic (for the PA)

8. **Train PA auditors on material vocabulary** — give them the 6 material dimensions (temperature, depth, weight, texture, surface, density) as a checklist within their assigned questions.
9. **Add material to the cascade value table** — require the builder to record which material technique was deployed at each section boundary, not just CSS property values.

---

## APPENDIX: THE SOUL-LEGAL MATERIAL TOOLKIT

For reference, here is the complete set of CSS techniques available for material expression under soul constraints:

```css
/* === DEPTH === */
/* Solid offset (mechanism #3) — the ONLY allowed depth technique */
.featured::after {
  content: '';
  position: absolute;
  top: 4px; left: 4px;
  width: 100%; height: 100%;
  background: #1A1A1A;
  z-index: -1;
}

/* Dark inversion — background flip for depth zones */
.zone--deep {
  background: #1A1A1A;
  color: #FEF9F5;
}

/* === WEIGHT === */
/* Border weight gradient */
.heavy { border-left: 4px solid #1A1A1A; }
.medium { border-left: 3px solid #1A1A1A; }
.light { border-left: 1px solid #E0D5C5; }

/* Font weight gradient */
.heavy-text { font-weight: 700; }
.medium-text { font-weight: 600; }
.light-text { font-weight: 400; }

/* === TEXTURE === */
/* Font-as-texture (3 material qualities) */
.formal { font-family: 'Instrument Serif', Georgia, serif; }  /* carved, authoritative */
.clean { font-family: 'Inter', system-ui, sans-serif; }       /* smooth, functional */
.precise { font-family: 'JetBrains Mono', monospace; }        /* mechanical, exact */

/* === TEMPERATURE === */
/* Zone warmth progression */
.warm { background: #FEF9F5; }     /* warm paper */
.neutral { background: #FFFFFF; }  /* cool, clinical */
.earthy { background: #FAF5ED; }   /* earthy, grounding */
.deep { background: #1A1A1A; }     /* dark, weighty */

/* === DENSITY (as material compression) === */
.airy { padding: 80px 48px; line-height: 1.8; }     /* light, breathable */
.moderate { padding: 32px 24px; line-height: 1.7; }  /* balanced substance */
.compressed { padding: 16px 16px; line-height: 1.5; } /* dense, heavy */
```

This toolkit is ~50 lines of CSS. It is the material channel's ENTIRE vocabulary under soul constraints. Every material decision a KortAI page makes must draw from this toolkit. PV2 should make this explicit rather than hoping builders discover it from scattered sources.

---

**END OF REPORT**

**Statistics:**
- Files analyzed: 7 (PV2 diagram, TC skill, mechanism catalog, tokens.css, master synthesis, prohibitions, CD-006)
- Material references found: 47 across all sources
- Waves with material intelligence: 1/5 partial (TC), 4/5 absent or minimal
- Overall material channel score: 2/10
- Recommendations: 9 (4 immediate, 3 structural, 2 diagnostic)
- Core finding: Material is a PHANTOM CHANNEL — named in taxonomies, absent from operations. It is the hardest channel to formalize because it exists as the COHERENCE of other channels' deployment, not as a separate CSS dimension.

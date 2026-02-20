# Deep Dive Analysis: conventions-brief.md (403 lines)

**Agent:** brief-enrichment-analyst
**Date:** 2026-02-20
**File analyzed:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/pipeline/conventions-brief.md`
**Lines read:** 403/403 (complete)

---

## 1. SECTION-BY-SECTION INVENTORY

| # | Section | Lines | Content | Compositional Intelligence Concepts |
|---|---------|-------|---------|--------------------------------------|
| 1 | IDENTITY (Soul) | 11-48 | 6 soul constraints (CSS prohibitions), typography trinity, container width, spacing scale, color palette | Identity through refusal; perceptual physics; warm editorial character |
| 2 | PERCEPTION (The Physics of Visibility) | 51-69 | RGB delta >=15, letter-spacing >=0.03em, stacked gaps <=120px, multi-coherence >=3 channels, border configs >=3, component families >=8, mechanism breadth >=4/5 categories | Perception thresholds as physics (not rules); the Flagship failure lesson; CSS waste concept |
| 3 | RICHNESS (The Governing Principle) | 73-88 | Density x Restraint x Spatial Confidence formula; self-test for invisible CSS; deployment ceiling (35% max per type); drop cap limit; 3-adjective personality test | Anti-scale formula; multiplicative zero property; the 238-wasted-lines cautionary tale |
| 4 | MULTI-COHERENCE (The Binding Rule) | 91-123 | 6 channels named, 4 directions defined, concrete example, layout diversity shortcut, global coherence (Flagship), boundary naming | Simultaneous channel shifts; semantic direction; narrative arc of intensity; layout topology as free multi-coherence |
| 5 | FRACTAL ECHO (Pattern at Every Scale) | 126-149 | 5 scales with build order + thresholds, dependency chain (Scale 5 without Scale 2 = orphaned), parametric echo, fractal echo table mandate | Scale hierarchy; build-order dependency; parametric vs structural echo; two-strong-beats-five-weak |
| 6 | UNIFIED METAPHOR (Flagship Requirement) | 152-163 | Structural metaphor definition, CSS-only perception test, escape valve (no metaphor > forced metaphor) | Metaphor as CSS driver not label; the "remove text" test; content-derived not imposed |
| 7 | TRANSITION GRAMMAR (Three Kinds of Boundary) | 166-179 | SMOOTH/BRIDGE/BREATHING definitions with CSS values, adjacency rules, within-zone vs between-zone hierarchy | Cognitive distance mapping; transition taxonomy; boundary hierarchy |
| 8 | CSS VOCABULARY (The Instrument) | 182-208 | 7 proven patterns: 2-zone DNA, 3-tier border, dark slab, callout system, section meta, syntax highlighting, layout topologies, drop cap | Vocabulary as musician's scales; the "improvise after learning" framing; proven patterns as instruments |
| 9 | CREATIVE AUTHORITY | 211-225 | 80% creative freedom, override permission with logging, invent permission, zone count freedom, reject permission, deployment freedom | Constraint-to-freedom ratio; what NOT to deploy matters; 3 absent mechanisms requirement |
| 9B | QUALITY FLOOR | 228-240 | >=14 mechanisms, >=800 CSS lines, >=3 channel shifts (avg >=4), >=3 border configs, >=8 component types, 3-5 zones with >=15 RGB delta | Floor as "what COMPOSED naturally produces" not aspirational target |
| 10 | COMPOSITIONAL MEMORY | 243-254 | Boundary naming, midpoint reflection, category awareness | Drift prevention; attention horizon concept; intentional vs accidental absence |
| 11 | FIVE QUESTIONS | 257-271 | Squint, Scroll, Second Half, Boundary, Skeleton | Compositional mirrors; self-assessment without pass/fail; perceptual verification |
| 12 | RESTRAINT LIST | 275-292 | 10 explicit absences: gradients, shadows, animations, parallax, icons, nested grids, decorative borders, body accent colors, sub-perceptual letter-spacing, 2px borders | Designed absence; editorial constraint; "not available instruments" |
| 13 | ACCESSIBILITY | 296-337 | HTML skeleton template, skip link, ARIA roles, focus-visible, reduced-motion, selection, contrast ratios | Accessibility as structural architecture, not cosmetic bolting |
| 14 | RESPONSIVE BEHAVIOR | 341-351 | 3 breakpoints (960/768/480), adaptation rules, character preservation | Soul persistence across viewports; layout adaptation vs character adaptation |
| -- | CONVICTION CARD | 354-376 | Pre-build commitment template: content, zones, organizing principle, direction, metaphor, 6 commitments | Compositional memory anchor; conviction as drift-prevention; scroll-back point |
| -- | PROCESS | 380-400 | 4-phase flow (Understand/Plan/Build/Verify), 4 verification pauses, 3 deliverables | Boundary-by-boundary building; verification interleaving; build log requirements |

**Total sections: 16 (14 numbered + Conviction Card + Process)**
**Total compositional intelligence concepts invoked: ~35+**

---

## 2. STACK PROGRESSION ANALYSIS

**The stack:** scales (vertical depth) -> channels (horizontal breadth) -> multi-coherence (simultaneous coherence) -> anti-scale (governing principle)

**How the brief presents these:**

| Concept | Section | Position | Status |
|---------|---------|----------|--------|
| Anti-scale (Richness formula) | Section 3 (lines 73-88) | EARLY -- 3rd section | Stated as "The Governing Principle" |
| Multi-coherence | Section 4 (lines 91-123) | 4th section | Stated as "The Binding Rule" |
| Scales (fractal echo) | Section 5 (lines 126-149) | 5th section | Stated as "Pattern at Every Scale" |
| Channels | Section 4, lines 95-102 | Embedded WITHIN multi-coherence | Listed as sub-list, not standalone concept |

**CRITICAL FINDING: The progression is INVERTED.** The brief presents:
1. Identity (soul)
2. Perception (physics)
3. **Anti-scale (governing principle) -- presented FIRST**
4. **Multi-coherence (binding rule) -- presented SECOND, with channels embedded inside**
5. **Scales (fractal echo) -- presented THIRD**

The research stack says: scales -> channels -> multi-coherence -> anti-scale (bottom-up, building blocks to governing principle).

The brief says: anti-scale -> multi-coherence (with channels inside) -> scales (top-down, governing principle to building blocks).

**Is this a problem?** It depends on the reader model. The brief is addressed to a BUILDER, not a student. Builders benefit from knowing the GOVERNING PRINCIPLE first ("what am I optimizing for?") and the BUILDING BLOCKS second ("what tools implement that?"). This is **telescope-first order** -- see the destination before picking up the tools.

**But the stack PROGRESSION is never stated AS a progression.** The sections are ADJACENT but INDEPENDENT. There is no sentence like "Channels are the building blocks of multi-coherence, which is the mechanism of the anti-scale formula." Each section explains itself. The architectural RELATIONSHIP between them is implicit.

**Verdict:** The ordering is defensible (telescope-first). The missing element is the RELATIONSHIP ARCHITECTURE -- a 2-3 sentence bridge explaining that these concepts form a stack, not just a list.

---

## 3. CHANNEL GRANULARITY

**All 6 channels named?** YES (Section 4, lines 95-102):
1. Chromatic -- background-color shift
2. Typographic -- font-size, font-weight, letter-spacing, line-height shift
3. Spatial -- padding, margin, content density shift
4. Structural -- border-left weight, horizontal rules, divider presence
5. Behavioral -- hover states, transition timing
6. Material -- surface treatment, component density

**Defined with CSS properties?** PARTIAL.
- Chromatic: `background-color` (explicit)
- Typographic: `font-size, font-weight, letter-spacing, line-height` (explicit, 4 properties)
- Spatial: `padding, margin` + "content density" (2 explicit, 1 vague)
- Structural: `border-left weight` + "horizontal rules" + "divider presence" (1 explicit, 2 descriptive)
- Behavioral: "hover states, transition timing" (descriptive, no CSS properties)
- Material: "surface treatment, component density" (descriptive, no CSS properties)

**With concrete examples?** YES for multi-coherence as a whole (lines 116, the DEEPENING example). NO for individual channels. The example shows 5 channels shifting together but does not demonstrate what a SINGLE channel shift looks like in isolation.

**Primary vs enhancement distinction?** YES (line 103): "The 4 primary channels are Chromatic, Typographic, Spatial, and Structural. Behavioral and Material are enhancement channels."

**Verdict:** Channels are well-named and the primary/enhancement distinction is clear. The gap is in CSS property specificity for channels 4-6 and in per-channel isolation examples.

---

## 4. SCALE GRANULARITY

**All 5 scales named?** YES (Section 5, lines 132-138):
1. Navigation (~1440px)
2. Page (~960px)
3. Section (~200-400px)
4. Component (~40-100px)
5. Character (~12-20px)

**Build order?** YES, explicitly stated: "build largest first, verify before proceeding" (line 130). Table includes a "Verified?" checkbox column.

**Dependency chain?** YES (lines 140-141): "Scale 5 (Character) without perceptible Scale 2 (Page) produces orphaned variation." The Flagship failure is cited as evidence.

**Min thresholds?** YES, one per scale in the table:
- Navigation: Header padding >= 48px, visible at 20% zoom
- Page: BG delta >= 15 RGB between adjacent zones
- Section: >= 2 component types per viewport
- Component: Label/body padding delta >= 4px
- Character: ONLY after Page scale verified

**Priority guidance?** YES (line 142): "Navigation + Page + Component are mandatory strong. Section is recommended. Character is optional and last. Two strong scales beat five weak ones."

**Parametric echo?** YES (line 144): Components in dense zones should have tighter internal padding than components in sparse zones.

**Fractal echo table mandate?** YES (line 146): "Before writing CSS, produce a Fractal Echo Table in your build log."

**Verdict:** Scale granularity is EXCELLENT. This is the most operationally complete section of the brief. All 5 scales named, ordered, thresholded, dependency-chained, prioritized, with parametric echo and a mandatory build artifact. This section needs ZERO enrichment.

---

## 5. MULTI-COHERENCE DEPTH

**Stated as a number or as compositional intelligence?** BOTH.

Number form (line 63): "Multi-coherence requires at least 3 CSS channels shifting together at every zone boundary."

Compositional intelligence form (lines 105-106): "Semantic direction is coherent when all shifting channels encode the same intent."

**Are the 4 directions defined?** YES (lines 108-112):
```
DEEPENING  = darker bg + tighter spacing + heavier borders + denser typography
OPENING    = warmer bg + generous spacing + thinner borders + more air
FOCUSING   = narrower content + larger type + bolder accents + fewer elements
RESOLVING  = settled tones + standard spacing + lighter borders + clean typography
```

Each direction is defined with 4 CSS-adjacent properties, creating a concrete mapping from semantic intent to CSS behavior.

**Contradiction detection?** YES (line 114): "If the background darkens but spacing increases, the channels contradict. Fix the contradiction before proceeding."

**Concrete example?** YES (line 116): Full 5-channel DEEPENING example with specific CSS values (FEF9F5 -> F0EBE3, 18px -> 16px, 64px -> 48px, 3px border-left, 0.05em -> 0.03em).

**Layout diversity shortcut?** YES (lines 118): "Changing layout topology inherently shifts Typographic + Spatial + Structural channels -- three free channel shifts."

**Global coherence (Flagship)?** YES (line 120): "Multi-coherence is sustained at every zone boundary... Not concentrated at header/footer bookends with flat middle sections."

**Narrative arc?** YES (line 120): "The coherence profile varies -- quieter boundaries at 3 channels, climactic boundaries at 5-6 channels -- creating a narrative arc of visual intensity."

**Verdict:** Multi-coherence depth is STRONG. Both numeric floor and compositional intelligence are present. All 4 directions are defined with CSS mappings. The concrete example is excellent. The narrative arc concept elevates this beyond checklist compliance. This section needs MINIMAL enrichment -- perhaps only the stack relationship bridge (see #2).

---

## 6. ANTI-SCALE AS GOVERNING PRINCIPLE

**Position:** Section 3, titled "RICHNESS (The Governing Principle)" -- literally the section subtitle.

**Formula:** `Richness = semantic density x restraint x spatial confidence` (line 75).

**Multiplicative zero property?** YES (lines 77): "Zero in any factor produces zero richness, regardless of the other two."

**Each factor defined?** YES:
- Density (lines 79-81): Every CSS rule perceptible, >=2 component types per viewport, zero waste
- Restraint (lines 83): >=3 mechanisms deliberately absent, no single type >35%, drop caps <=2 sections
- Spatial confidence (lines 85-86): >=2 layout topologies, 3-tier border system, >=5 font-sizes, readable prose width

**Self-test?** YES (line 81): "Imagine commenting it out. If removing it causes no visible change at 100% zoom, delete it permanently."

**Is it the GOVERNING principle?** YES in title and position. But there is a tension: Section 4 (Multi-Coherence) is called "The Binding Rule." If Richness = governing principle and Multi-Coherence = binding rule, the hierarchy is clear. But nowhere does the brief explicitly say "Richness is the GOAL, multi-coherence is the MECHANISM, and scales/channels are the TOOLS." This hierarchy is implicit.

**Verdict:** Anti-scale IS presented as the governing principle. The formula, the multiplicative zero, and the three-factor decomposition are all present and well-explained. The gap is the SAME gap identified in #2: the relationship between anti-scale (governing), multi-coherence (binding), channels (building blocks), and scales (architecture) is STRUCTURAL but IMPLICIT.

---

## 7. FLOOR VS TARGET DISTINCTION

**Does the brief distinguish perception thresholds (floors) from compositional intelligence (target)?**

YES, in multiple places:

1. **Section 2** (Perception): "These are not rules to comply with. They are the physics of human perception. CSS below these thresholds is invisible." (line 69) -- FLOOR framing.

2. **Section 2**, line 63: "3 channels = DESIGNED (the floor). 5+ channels shifting together = COMPOSED (the target for Flagship)." -- EXPLICIT floor/target distinction with named levels.

3. **Section 9B** (Quality Floor): "They are not aspirations -- they are the floor below which a page is UNFINISHED." (line 230) -- FLOOR framing.

4. **Section 3** (Richness): The entire section describes the TARGET -- what COMPOSED output looks like. Not stated as a floor.

5. **Section 5** (Fractal Echo): "Two strong scales beat five weak ones" (line 142) -- TARGET guidance (quality over quantity).

**Is the distinction SYSTEMATIC?** No. The brief uses "floor" language in Sections 2 and 9B, and "target" language implicitly in Sections 3-5. But there is no systematic LABELED distinction between "these thresholds are the floor that prevents failure" and "these concepts are the target that produces quality." The reader must infer the distinction from section titles and framing.

**The explicit floor/target statement at line 63** (DESIGNED/COMPOSED) is the single best example. It names two levels, assigns channel counts, and labels one as floor and one as Flagship target. But this pattern is not replicated for other dimensions (e.g., "2 layout topologies = DESIGNED, 3+ = COMPOSED" is never stated, though it's implied at line 205).

**Verdict:** The floor/target distinction EXISTS in the brief but is INCONSISTENT. It is explicit for multi-coherence (3 = DESIGNED, 5+ = COMPOSED), implicit for everything else. A brief enrichment could extend this named-level pattern to 2-3 more dimensions without adding bulk.

---

## 8. RECIPE VS CHECKLIST RATIO

**Methodology:** I counted every sentence/phrase and classified it as:

- **World-description** (W): Describes what the world IS, how it works, what materials exist, what physics apply. Framing that creates understanding. Examples: "KortAI pages are warm, sharp, flat, and editorial." / "Human perception has hard limits."
- **Recipe** (R): Sequenced steps, specific CSS values, "do this then that" instructions. Examples: "Build scales in order. Verify each before proceeding." / "HTML skeleton first, then CSS, working BOUNDARY BY BOUNDARY."
- **Constraint** (C): Threshold, prohibition, requirement. "Must be", "at least", "never", "no more than". Examples: ">= 14 mechanisms" / "No single margin or padding value exceeds 96px."
- **Creative authority** (A): Explicit permission, freedom statement. Examples: "You may override any non-soul value" / "Everything outside the six soul constraints is yours to decide."

**Line-by-line count (approximate, by section):**

| Section | W | R | C | A | Total | W% |
|---------|---|---|---|---|-------|-----|
| 1. Identity | 3 | 0 | 12 | 0 | 15 | 20% |
| 2. Perception | 8 | 0 | 7 | 0 | 15 | 53% |
| 3. Richness | 10 | 2 | 4 | 0 | 16 | 63% |
| 4. Multi-coherence | 12 | 4 | 3 | 0 | 19 | 63% |
| 5. Fractal Echo | 6 | 5 | 3 | 0 | 14 | 43% |
| 6. Unified Metaphor | 6 | 1 | 1 | 1 | 9 | 67% |
| 7. Transition Grammar | 8 | 0 | 2 | 0 | 10 | 80% |
| 8. CSS Vocabulary | 14 | 0 | 0 | 0 | 14 | 100% |
| 9. Creative Authority | 2 | 0 | 1 | 8 | 11 | 18% |
| 9B. Quality Floor | 1 | 0 | 7 | 0 | 8 | 13% |
| 10. Compositional Memory | 5 | 3 | 0 | 0 | 8 | 63% |
| 11. Five Questions | 10 | 0 | 0 | 0 | 10 | 100% |
| 12. Restraint List | 2 | 0 | 10 | 0 | 12 | 17% |
| 13. Accessibility | 2 | 3 | 5 | 0 | 10 | 20% |
| 14. Responsive | 3 | 0 | 3 | 0 | 6 | 50% |
| Conviction Card | 1 | 5 | 0 | 0 | 6 | 17% |
| Process | 2 | 6 | 0 | 0 | 8 | 25% |

**TOTALS:**
- World-description (W): **95 statements** (~51%)
- Recipe (R): **29 statements** (~16%)
- Constraint (C): **58 statements** (~31%)
- Creative authority (A): **9 statements** (~5%)

**Ratio analysis:**
- **World-description : Constraint = 1.6:1** (95:58)
- **Recipe : Constraint = 0.5:1** (29:58) -- constraints outnumber recipes 2:1
- **Creative authority = 5%** of total statements
- **Combined non-constraint (W+R+A) : Constraint = 2.3:1** (133:58)

**Comparison to the research finding:** The research found a 7.9:1 guardrail-to-playbook ratio in the FLAGSHIP master prompt's building sections. The conventions brief has a 2:1 constraint-to-recipe ratio, which is DRAMATICALLY better. The brief is primarily world-description (51%), which is exactly the right framing -- it describes what the world IS, not what you MUST do.

**However:** The constraint-to-recipe ratio within BUILDING GUIDANCE specifically (Sections 9B, 12, 13, 14, Conviction Card, Process) is much higher. In these operational sections, constraints dominate. The world-description ratio is carried by the conceptual sections (3, 4, 6, 7, 8, 11).

**Verdict:** The brief's overall ratio is healthy (51% world-description). But the operational sections (9B, 12, 13) are constraint-heavy. The RECIPE content (16%) is adequate but could be strengthened in the Process section specifically -- the "Build boundary-by-boundary" instruction (line 386) is the single most important recipe instruction and it gets only 2 sentences.

---

## 9. WHAT WOULD ENRICHMENT LOOK LIKE?

Based on the gaps identified above, here are specific edits ranked by impact:

### Enrichment 1: STACK RELATIONSHIP BRIDGE (Highest Impact)

**Location:** Between Section 2 and Section 3, or as a 2-3 line preamble before Section 3.

**Content (draft, ~5 lines):**
```
Sections 3-5 form an architectural stack. RICHNESS (Section 3) is the governing
principle -- the destination. MULTI-COHERENCE (Section 4) is the binding mechanism --
how richness manifests at boundaries. FRACTAL ECHO (Section 5) is the scale
architecture -- where richness manifests across zoom levels. CHANNELS (inside Section 4)
are the building blocks -- the CSS properties that shift.

The stack: channels (tools) → multi-coherence (mechanism) → scales (architecture) →
richness (governing principle). You build bottom-up (channels first) but PLAN top-down
(richness goal first).
```

**Why:** This is the single missing piece. The concepts are all present. The RELATIONSHIP between them is not. Adding 5-7 lines of bridge text would make the architectural stack EXPLICIT without adding any new content.

**Risk:** Near zero. This adds no new constraints, no new content, just names the relationship that already exists implicitly.

### Enrichment 2: FLOOR/TARGET NAMING EXTENSION

**Location:** Within Section 9B, extending the DESIGNED/COMPOSED pattern to 2-3 more dimensions.

**Content (draft, ~4 lines):**
```
Named levels:
- Channel shifts: 3 = DESIGNED (floor), 5+ = COMPOSED (Flagship target)
- Layout topologies: 2 = DESIGNED (floor), 3+ = COMPOSED (Flagship target)
- Scales strong: 2 = DESIGNED (floor), 3+ = COMPOSED (Flagship target)
```

**Why:** The DESIGNED/COMPOSED naming pattern at line 63 is the brief's best floor/target mechanism. Extending it to 2 more dimensions creates systematic guidance without adding new concepts.

**Risk:** Low. 4 lines. Already uses existing naming pattern.

### Enrichment 3: BOUNDARY-BY-BOUNDARY RECIPE EXPANSION

**Location:** Within the Process section (line 386), expanding the "Build boundary-by-boundary" instruction.

**Content (draft, ~6 lines):**
```
At each zone boundary, set ALL shifting channels together in one CSS block:
  /* Boundary Z1->Z2: DEEPENING */
  .zone-2 {
    background: #F0EBE3;     /* Chromatic: 18 RGB darker */
    padding: 48px 64px;      /* Spatial: compressed from 64px */
    border-left: 3px solid;  /* Structural: border appears */
    font-size: 16px;         /* Typographic: reduced from 18px */
  }
Do NOT set all backgrounds first, then all borders, then all typography.
That produces flat output. Set everything at each boundary.
```

**Why:** "Build boundary-by-boundary" is the single most important recipe instruction in the brief, but it gets only 2 sentences. The Flagship failure's root cause was partly channel-by-channel building. This expansion gives a concrete CSS example of boundary-by-boundary building.

**Risk:** Low. 6 lines. Reinforces an existing instruction with a concrete example.

### Enrichment 4: CHANNEL CSS PROPERTY COMPLETION

**Location:** Section 4, lines 99-101, completing the CSS property lists for channels 4-6.

**Content (draft, ~3 lines of modification):**
```
4. **Structural** -- border-left-width, border-bottom (hr), divider visibility (display)
5. **Behavioral** -- :hover background-color, transition-duration, cursor
6. **Material** -- background-color opacity region, component count per viewport, grid-template density
```

**Why:** Channels 4-6 currently use descriptive language ("hover states") rather than CSS properties. Making the CSS properties explicit helps builders know WHAT to change.

**Risk:** Low. Modifies existing lines, adds specificity.

### NOT RECOMMENDED:

- **Adding new sections** -- The brief has 16 sections. More sections = more length = more likely to be skimmed.
- **Expanding Section 8 (CSS Vocabulary)** -- Already 100% world-description. Adding more patterns would shift toward prescription.
- **Adding a "Common Mistakes" section** -- The brief already has Restraint List (Section 12) and Five Questions (Section 11). A mistakes section would duplicate.
- **Expanding Creative Authority** -- At 5% of statements, creative authority is underrepresented. But expanding it risks the "weak permission has zero effect" finding. Creative authority is better expressed by the ABSENCE of constraints than by explicit permission statements.

---

## 10. RISK ASSESSMENT

### Would enriching violate "not too long, too FLAT"?

**Current length:** 403 lines (the brief's own footer says "approximately 240 lines of world-description").

**Proposed enrichments:**
- Enrichment 1 (stack bridge): +7 lines
- Enrichment 2 (floor/target naming): +4 lines
- Enrichment 3 (recipe expansion): +8 lines
- Enrichment 4 (channel properties): +0 lines (modification)

**Total if ALL applied:** ~422 lines (+19 lines, +4.7%)

**Risk of "too long":** NEGLIGIBLE. 19 lines is under 5% growth. The brief is already well under the "too long" threshold (the failed master prompt was 963 lines; the brief is 403).

**Risk of "too FLAT":** LOW. The enrichments are ARCHITECTURAL (stack relationships, naming patterns, concrete examples), not ADDITIONAL CONTENT. They don't add new concepts -- they name relationships between existing concepts. This is the exact opposite of "flat" -- it adds depth to existing structure.

### Would it push constraint language above 20%?

**Current constraint ratio:** 31% (58/191 statements).

**Enrichment 1:** 0 constraint sentences added.
**Enrichment 2:** 0 constraint sentences (these are NAMING, not new constraints -- the >=2 and >=3 thresholds already exist in sections 5 and 8).
**Enrichment 3:** 0 constraint sentences (this is RECIPE -- how to build, not what to verify).
**Enrichment 4:** 0 constraint sentences (modifies existing descriptions).

**Post-enrichment constraint ratio:** ~57/196 = 29% (actually DECREASES slightly because enrichments are world-description and recipe).

**Verdict:** Constraint ratio would DECREASE from 31% to ~29%. No risk.

### Would it undermine 80% creative authority?

**Current creative authority statements:** 9 (5% of total). This seems low but is CORRECT -- creative authority is expressed primarily through the ABSENCE of constraints, not through explicit permission. The brief's world-description framing (51% of statements) IS the creative authority mechanism.

**Would enrichments add constraints?** NO. Zero new constraints. Zero new prohibitions. Zero new thresholds.

**Would enrichments restrict creative space?** NO. Enrichment 1 names relationships (no restriction). Enrichment 2 labels existing thresholds (no new thresholds). Enrichment 3 shows HOW to build (recipe, not constraint). Enrichment 4 specifies CSS properties (implementation detail, not restriction).

**Verdict:** Zero risk to creative authority. The enrichments are all in the "understanding" and "recipe" categories, not the "constraint" category.

---

## SYNTHESIS: Overall Brief Quality Assessment

### Strengths (what the brief does WELL)

1. **World-description framing** (51% of statements). The brief describes what the world IS, not what you MUST do. This is the exact right framing for compositional builders.

2. **Scale section** (Section 5) is operationally complete. All 5 scales named, ordered, thresholded, dependency-chained, prioritized, with parametric echo. Zero enrichment needed.

3. **Multi-coherence section** (Section 4) includes the concrete DEEPENING example (line 116) -- the single best teaching moment in the brief. Shows 5 channels shifting together with specific CSS values.

4. **Anti-scale as governing principle** (Section 3) correctly positioned first in the conceptual stack. Multiplicative zero property is stated.

5. **Five Questions** (Section 11) is pure compositional intelligence -- no constraints, no thresholds, just mirrors for self-assessment. This section models what "compositional intelligence" means better than any other.

6. **Transition Grammar** (Section 7) is world-description at 80% -- three boundary types defined with cognitive rationale, not CSS mandates.

7. **The ratio is healthy.** At 1.6:1 world-description to constraint, this brief avoids the 7.9:1 guardrail-to-playbook ratio that killed the Flagship master prompt.

### Gaps (what the brief is MISSING)

1. **Stack relationship architecture** (identified in #2). The concepts are all present but their RELATIONSHIP is implicit. A 5-7 line bridge would make the architecture explicit.

2. **Systematic floor/target naming** (identified in #7). The DESIGNED/COMPOSED pattern at line 63 is excellent but not extended to other dimensions.

3. **Boundary-by-boundary recipe specificity** (identified in #8). The most important building instruction gets 2 sentences. A concrete CSS example would make it actionable.

4. **Channel CSS property gaps** (identified in #3). Channels 4-6 use descriptive language instead of CSS property names.

### What the brief is NOT (correctly)

1. NOT a checklist. It has constraints but frames them as physics, not requirements.
2. NOT a master prompt. It does not try to control every decision.
3. NOT a template. It does not prescribe specific implementations.
4. NOT too long. At 403 lines, it is readable in one sitting.

### Bottom Line

The conventions brief is the best document in the pipeline for builder guidance. Its world-description framing, concrete examples, and healthy constraint ratio are exactly what the research found was needed. The enrichment needed is MINIMAL and ARCHITECTURAL -- adding the relationships between existing concepts, not adding new concepts. Total proposed enrichment: ~19 lines (~4.7% growth), zero new constraints, zero risk to creative authority.

The brief's primary value is that it describes a WORLD, not a CHECKLIST. Any enrichment must preserve this character. The proposed enrichments do.

---

*End of deep dive analysis. 04-brief-deep-dive.md complete.*

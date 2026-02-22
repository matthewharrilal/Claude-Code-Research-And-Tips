# TC-to-Builder Compression Analysis

**Date:** 2026-02-20
**Analyst:** Opus 4.6 handoff researcher
**Scope:** The TC -> Builder boundary in /build-page -- the highest compression point in the entire pipeline

---

## 1. THE COMPRESSION RATIO: WHAT ACTUALLY SURVIVES

The TC skill (SKILL.md) is 1,612 lines. The brief target is 80-120 lines. That is a **13:1 to 20:1 compression ratio.** But the raw line count understates the loss because the TC skill is not uniform -- some phases produce intelligence that must survive, others produce process scaffolding that should not.

### Phase-by-phase mapping to brief sections

| TC Phase | TC Lines | Brief Section(s) | Brief Lines (est.) | Compression | What Survives |
|----------|----------|-------------------|---------------------|-------------|---------------|
| Phase 0: Content Assessment (lines 42-82) | ~40 | Implicit in Section 2 | 0 explicit | Total drop | Content type, scope, section IDs -- none appear in brief |
| Phase 1: Multi-Axis Questioning (lines 123-206) | ~83 | Section 3 (tensions) | ~8-10 | 8:1 | Axis names + needs. LOST: richness ratings, opposition depth, axis interaction effects, structural property derivation |
| Phase 2: Tension Derivation (lines 209-377) | ~168 | Section 3 (tensions) | ~8-10 | 17:1 | Tension poles + dominant tension. LOST: Addition Test result, BECAUSE test, SUBSTITUTION test, richness formula scores, tension validity checks |
| Phase 3: Metaphor Collapse (lines 380-710) | ~330 | Section 1 (metaphor) | ~8-12 | 28:1 | Metaphor name + CSS directions. LOST: structural property extraction from both sides, overlap percentage, search query, all candidate scoring (A through F), isomorphism tables, resonance split, perceptual risk/cost assessments |
| Phase 3.5: Metaphor Commitment (lines 712-790) | ~78 | Section 8 (anchors) | ~4-6 | 13:1 | 3 guardrails. LOST: commitment verification, divergence justification, zone architecture derivation reasoning |
| Phase 3.5G: Quality Rubric (lines 618-670) | ~52 | Not in brief | 0 | Total drop | 6-criterion rubric score, 6 binary rejection checks -- entirely absent from brief |
| Phase 4: Layout Generation (lines 793-1487) | ~694 | Sections 2, 4, 5, 6 | ~50-70 | 10:1 | Zone names, mechanism list, CSS directions, recipe. LOST: anti-scale model self-checks, full guardrail tables, 5-category taxonomy extraction, translation grammar lookup, pacing prediction, coherence checking rules (C1-C5), multi-coherence binding rules (R-MC-01 through R-MC-06), component tier analysis, adapt-vs-invent decisions, transition grammar lookup table, fractal consistency gate |
| Phase 4.5: Output Template (lines 1491-1579) | ~88 | IS the brief format | 80-120 | 1:1 | This IS the brief template |

### The kill zone: Phase 3 at 28:1

Phase 3 is the most compressed phase. The TC agent tests 2-5 candidate metaphors, scoring each on 6 dimensions (Resolution, Isomorphism, Resonance split, Feasibility, Perceptual Risk, Perceptual Cost), applies 6 binary rejection checks, and runs a quality rubric. All of this produces a SINGLE LINE in the brief:

```
STRUCTURAL METAPHOR: Geological Strata -- visible layer boundaries via border-left
```

The builder receives the winner. The builder does not receive:
- Why other candidates lost
- What perceptual risks were flagged
- What the isomorphism count was (is this a 6-mapping metaphor or a 3-mapping metaphor?)
- What the perceptual cost score was
- Which rejection checks the metaphor survived

**This matters because the builder has no calibration signal.** A metaphor with 6 isomorphisms and 0 perceptual risk should be built with confidence -- push the metaphor hard. A metaphor with 3 isomorphisms and 2 perceptual cost flags should be built cautiously -- the metaphor's concept encourages violations. The brief erases this distinction.

**Priority: P2 (IMPORTANT).** The builder can still build well without this, but calibration prevents overreach and underreach.

---

## 2. SECTION 6 BUILD RECIPE: DOES IT ACTUALLY SOLVE THE PROBLEM?

### What the recipe template specifies (lines 1533-1558)

The Phase 4.5 template for Section 6 says:

```
ZONE: [zone name from Section 2]
  1. Set container: max-width: 960px; padding: [specific values]
  2. Set zone background: [exact color value] (delta from previous zone: [N] RGB)
  3. Deploy [mechanism name]: [2-line CSS snippet]
  4. Deploy [mechanism name]: [2-line CSS snippet]
  5. Set typography: font-size: [value]; line-height: [value]; letter-spacing: [value]
TRANSITION to next zone: [SMOOTH/BRIDGE/BREATHING] -- [specific CSS]
```

Plus: "Top 5 mechanism CSS snippets" and embedded perception checks.

### Assessment: This is a GENUINE recipe, not a checklist

The recipe format has the right structural DNA:
- Zone-keyed (not channel-keyed)
- Sequenced steps with action verbs (Set, Deploy)
- Specific CSS values (not "make it perceptible")
- Perception checks embedded after each zone

The Middle experiment builder received a 100-line recipe and produced PA-05 4/4. The Flagship builder received a 71-line checklist and produced PA-05 1.5/4. The recipe format is the proven winner.

### But here is the budget problem

The brief is 80-120 lines TOTAL for 8 sections. Let me budget honestly:

| Section | Minimum Lines | Content |
|---------|---------------|---------|
| 1. Structural Metaphor | 8-12 | Name, WHY, 3-5 CSS directions, BECAUSE test |
| 2. Zone Architecture | 10-15 | 3-5 zones x (name + direction + density + content) |
| 3. Content Tensions | 8-12 | 3-5 tensions x (axis + poles + dominant) |
| 4. Selected Mechanisms | 20-30 | 14-18 mechanisms x (name + category + CSS recipe + metaphor service + impact profile) |
| 5. Metaphor-Implied CSS Directions | 8-12 | 4 scales x 2-3 lines |
| 6. Build Recipe | 25-40 | 3-5 zones x (5-8 steps each) |
| 7. Detection Expectations | 8-12 | Per-mechanism squint expectations |
| 8. Builder Anchors | 4-6 | 3 non-negotiable guardrails |

**TOTAL minimum: ~91-139 lines.**

Sections 4 and 6 fight for the same budget. Section 4 demands per-mechanism detail (the template says "1-line CSS recipe AND how it serves the metaphor AND the impact profile"). At 14 mechanisms, that is 28-42 lines minimum just for the mechanism list. Section 6 demands per-zone deployment sequences with CSS values. At 4 zones with 5 steps each, that is 20-32 lines.

**The combined demand of Sections 4 + 6 is 48-74 lines -- potentially 62% of the entire brief.**

### What this means in practice

A TC agent forced to hit 80 lines will produce either:
- A complete recipe (Section 6) with a thin mechanism list (Section 4) -- duplicated effort since the recipe already names mechanisms
- A complete mechanism list (Section 4) with a thin recipe (Section 6) -- the recipe degrades back to a checklist

**The template encourages Section 4/6 overlap** because mechanisms appear in both. A disciplined TC agent would fold Section 4 INTO Section 6 (list mechanisms as part of their zone deployment) and use Section 4 as a summary index. But the template treats them as separate sections.

**Priority: P2 (IMPORTANT).** The recipe format is correct. The budget is tight but workable IF the TC agent treats Sections 4 and 6 as complementary, not independent. The risk is a TC agent that writes 30 lines for Section 4 (full mechanism list) and then runs out of budget for Section 6 (thin recipe), reproducing the checklist failure.

### Concrete example of what a real Section 6 should look like

For a 4-zone geological metaphor, a GOOD recipe:

```
ZONE 1: Surface Orientation (sparse, OPENING)
  Set bg: #FEF9F5 (base warm cream)
  Set padding: 64px 0
  Deploy dark-header (#13): bg #1A1A1A, color #FEF9F5, padding 48px 32px, 3px border-bottom
  Deploy drop-cap (#16): ::first-letter 3.5em Instrument Serif #E83025
  Set typography: h1 2.5rem/1.2, body 18px/1.7, letter-spacing 0.05em
  Squint check: dark header creates maximum-contrast opening boundary

TRANSITION Z1->Z2: BRIDGE -- bg shift to #F0EBE3 (18 RGB delta on B channel),
  64px breathing zone, border-top 1px, body font-size drops to 16px

ZONE 2: Sedimentary Core (moderate, DEEPENING)
  Set bg: #F0EBE3
  Set padding: 48px 0
  Deploy 2-column grid (#6 width-variation): grid-template-columns: 1.618fr 1fr
  Deploy border-weight-gradient (#1): callouts get 4px border-left, data gets 1px
  Deploy 2-zone-DNA (#2): .callout-label mono 0.75rem uppercase 0.1em, .callout-body Inter 1rem/1.7
  Set typography: h2 1.5rem, body 16px/1.65, letter-spacing 0.03em
  Squint check: can you see Z1->Z2 boundary at arm's length? Background must read differently.
```

That is already 20 lines for 2 zones. Four zones = ~40-50 lines. Which means the recipe alone consumes 40-60% of the brief budget. This is the right allocation -- the recipe IS the primary deliverable -- but it requires the other sections to be lean.

**Recommendation:** Explicitly state that Section 6 gets 40-50% of the brief budget, Sections 4/5 get merged or drastically compressed, and Sections 1/2/3/7/8 share the remainder.

---

## 3. BUILDER VISIBILITY: WHAT THE BUILDER ACTUALLY READS

The builder reads these files in order (from build-page SKILL.md lines 88-97):

| File | Lines | Actionable CSS % | Role |
|------|-------|-------------------|------|
| _tc-brief.md | 80-120 | ~60% (recipe) | Compositional foundation |
| conventions-brief.md | 584 | ~40% | World model + CSS vocabulary |
| Content markdown | varies | 0% (input) | Raw material |
| mechanism-catalog.md | ~869 | ~70% | CSS patterns (reference) |
| components.css | ~900 | ~80% | Component library (reference) |
| tokens.css | 174 | 100% | CSS variables |
| prohibitions.md | 353 | ~30% | Soul constraints |

**Total: ~2,960-3,000 lines.** But the builder reads files 4-7 "as needed" (reference), while files 1-3 are read completely.

### Actionable CSS guidance breakdown

**High-actionability content (directly tells builder what CSS to write):**
- TC brief Section 6 (recipe): ~40-50 lines of zone-keyed CSS
- conventions-brief Sections 4 (multi-coherence): ~80 lines with concrete boundary examples
- conventions-brief Section 5 (fractal echo): ~50 lines with parametric CSS recipe
- conventions-brief Section 8 (CSS vocabulary): ~60 lines of pattern CSS
- tokens.css: 174 lines of CSS variables
- Total: ~404-414 lines (~14% of total)

**Philosophical/contextual content (tells builder WHY but not WHAT):**
- TC brief Sections 1, 3, 7, 8: ~30-40 lines
- conventions-brief Sections 1-3, 6, 9-12: ~250 lines
- prohibitions.md: ~250 lines of constraint rules
- mechanism-catalog.md preamble/framing: ~200 lines
- Total: ~730-740 lines (~25% of total)

**CSS patterns available but not zone-keyed (builder must choose/adapt):**
- mechanism-catalog.md mechanism entries: ~600 lines
- components.css: ~900 lines
- Total: ~1,500 lines (~50% of total)

**Observation:** The builder's reading stack is ~14% actionable recipe, ~25% philosophy, ~50% un-keyed CSS library, and ~11% overhead. The TC brief's Section 6 recipe is the ONLY content that tells the builder "write THIS CSS in THIS zone." Everything else requires the builder to make selection and adaptation decisions.

**Priority: P3 (NICE TO HAVE).** The 14% actionable ratio is not inherently wrong -- a skilled builder uses the library. But it means the brief recipe is load-bearing. If the recipe is thin, the builder falls back to the ~50% un-keyed library, which is the checklist-mode failure pattern.

---

## 4. METAPHOR SEMANTIC TRANSFER: WHAT THE WHY LOSES

### The TC agent's metaphor derivation process

The TC agent performs a multi-step reasoning chain:

1. Multi-axis questioning identifies 4-14 reader needs with structural properties
2. Tension derivation tests each need against KortAI constraints using Addition, BECAUSE, and SUBSTITUTION tests
3. Structural properties from BOTH sides are extracted into geometric abstractions
4. A search query is constructed from overlap + gap properties
5. 2-5 candidate metaphors are tested on 6+ dimensions
6. The winning metaphor has documented resolution, isomorphism, resonance, feasibility, risk, and cost

### What the builder receives

```
STRUCTURAL METAPHOR: Geological Strata
WHY structural: visible layer boundaries via border-left-width progression,
density gradient via tightening line-height, stratification via bg color shifts >=15 RGB
BECAUSE: content's confidence levels map to geological consolidation (established = bedrock, speculative = topsoil)
```

### What is lost

**The WHY behind the metaphor's structural choices.** The TC agent knows that "geological strata" won because:
- Its isomorphism count was 6 (depth = consolidation pressure, strata = content layers, fossils = embedded evidence, core samples = cross-sectional analysis, sedimentary compression = progressive density, tectonic boundaries = major transitions)
- Its perceptual risk was LOW (transitions = changing state not empty space, expression = structural gradients not labels, variety = different strata have different visual weight)
- Competing metaphors (e.g., "manuscript codex") were rejected because their transition model was EMPTY SPACE (page turns)

The builder receives the winner without the reasoning. This means:
- The builder cannot assess metaphor strength (is this a 6-isomorphism slam dunk or a 3-isomorphism stretch?)
- The builder cannot predict risk zones (where does the metaphor encourage violations?)
- The builder cannot make informed trade-offs (when the metaphor conflicts with a guardrail, how important IS the metaphor property that conflicts?)

### Concrete example of what gets lost

TC agent's internal reasoning (Phase 3.5F):
```
Perceptual Cost Assessment for "Geological Strata":
- Compression below floors: YES (+1) -- bedrock might compress to 16px
- Container width below minimum: YES (+1) -- cylindrical shape biases narrow
- Uniform element grids: NO (0) -- strata are different by definition
- Transitions as empty space: NO (0) -- strata are state changes
- Explicit labels: NO (0) -- depth is structural

Builder Warning to Add: Cap minimum padding at 32px even at bedrock.
```

What the builder receives: Nothing about this analysis. If the brief includes a Builder Anchor like "bedrock zone padding >= 32px" the builder gets the WHAT but not the WHY (the metaphor's physical concept encourages over-compression). Without the WHY, the builder may remove the constraint during a fix cycle because they don't understand what it prevents.

**Priority: P2 (IMPORTANT).** The metaphor's risk profile should survive compression. Not the full scoring tables, but a 2-3 line "RISK PROFILE" subsection in Section 1: what the metaphor encourages that the builder should resist.

---

## 5. MECHANISM SELECTION INTELLIGENCE: LIST VS. REASONING

### What the TC agent produces (Phase 4)

The TC agent:
1. Reads the full mechanism catalog (18 mechanisms across 5 categories)
2. Extracts metaphor physical properties across 5 categories (Spatial, Temporal, Material, Behavioral, Relational)
3. Maps properties to CSS through a translation grammar lookup table
4. Checks coherence across 5 rules (C1-C5)
5. Checks multi-coherence binding (R-MC-01 through R-MC-06)
6. Validates per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+)
7. Validates density cap (<=4 per viewport) and distribution (>=2 per page third)
8. Documents justification for each selected AND 3+ rejected mechanisms
9. Runs the fractal consistency gate

### What the brief provides

Section 4 template (lines 1516-1523):
```
- List all selected mechanisms with their catalog categories
- For each mechanism: 1-line CSS recipe AND how it serves the metaphor
- For each mechanism: include the catalog's IMPACT PROFILE
- Density cap: <=4 mechanisms per viewport
- Distribution: >=2 mechanisms per third of page length
```

### What is lost

**The REASONING behind mechanism selection is almost entirely lost.** The brief provides:
- Mechanism name + category (WHAT)
- 1-line CSS recipe (HOW)
- How it serves the metaphor (WHY, at 1-line resolution)
- Impact profile (WHICH channels it activates)

The brief does NOT provide:
- Why specific mechanisms were REJECTED (the 3+ documented rejections)
- How mechanisms PAIR to encode shared semantics through different channels (the "reinforcing pairs" requirement from Phase 4.0)
- The coherence direction at each boundary that the mechanisms must serve (this is in Section 2 but not cross-referenced in Section 4)
- The pacing prediction (Section count? Breathing model? Dramatic moment placement?)

**The pairing loss is the most significant.** The TC agent identifies "reinforcing pairs" -- mechanisms that encode the SAME semantic through different CSS channels (e.g., border-weight + zone backgrounds both encode depth). The builder receives a flat list. A flat list of 14 mechanisms gives no signal about which ones work TOGETHER. The builder must re-derive the pairing from the mechanism descriptions and the metaphor, which is exactly the intelligence the TC agent already produced.

**Concrete example:**

TC agent's internal work:
```
REINFORCING PAIR 1: Border-weight gradient (#1) + Zone backgrounds (#7)
  Both encode DEPTH. Heavier borders AND darker backgrounds = deeper.
  Deploy together at Z2->Z3 boundary for DEEPENING.

REINFORCING PAIR 2: Spacing compression (#4) + Typography scale (#11)
  Both encode DENSITY. Tighter spacing AND smaller type = denser content.
  Deploy together in Zone 3 (most analytical section).
```

Brief Section 4:
```
- #1 Border-weight gradient (Hierarchy): border-left 4px/3px/1px encodes confidence
- #4 Spacing compression (Hierarchy): padding decreases with depth
- #7 Zone backgrounds (Depth/Emphasis): bg darkens through zones
- #11 Typography scale (Hierarchy): font-size decreases in dense zones
```

The builder gets four independent items. The TC agent knew they work in two pairs. The pairing information is the COMPOSITIONAL INTELLIGENCE that makes mechanisms serve multi-coherence rather than being isolated techniques.

**Priority: P1 (BLOCKING for 4/4).** Without mechanism pairing information in the brief, the builder deploys mechanisms independently. Independent mechanism deployment is the root cause of "STRUCTURED but not COMPOSED" output. Pairing IS multi-coherence. The brief's flat list is structurally anti-compositional.

---

## 6. MISSING HANDOFF ELEMENTS

### What should be in the brief but is not

**6.1. Metaphor Risk Profile (P2)**

2-3 lines after Section 1's BECAUSE test:
```
RISK: Perceptual cost 2/5 (moderate). Cylindrical shape biases narrow containers
(mitigate: internal padding, not width reduction). Compression concept may push
padding below 32px at depth (mitigate: cap bedrock at 40px padding).
```

**Why:** Gives the builder calibration for HOW HARD to push the metaphor. Without it, builders either over-express (violating guardrails) or under-express (flat output).

**6.2. Reinforcing Mechanism Pairs (P1)**

A short subsection in Section 4 or 6:
```
PAIRS:
  #1 + #7: Both encode DEPTH at Z2->Z3. Deploy together.
  #4 + #11: Both encode DENSITY in Zone 3. Deploy together.
  #13 + #14: Both encode BOOKEND framing. Deploy at header/footer.
```

**Why:** This IS multi-coherence. Without it, the builder has 14 independent tools instead of 6-7 coherent clusters. The Middle experiment's success came from a RECIPE that sequenced mechanisms per-zone (implicitly pairing them). The brief should make pairing explicit.

**6.3. Coherence Direction Cross-Reference (P2)**

Section 2 defines zone directions (OPENING -> DEEPENING -> RESOLVING). Section 4 lists mechanisms. But the brief never cross-references: "At the Z1->Z2 boundary (BRIDGE, DEEPENING), deploy mechanisms #1, #4, #7 with these CSS values, all encoding DEEPENING." This cross-reference IS Section 6's recipe -- but if the recipe is thin, the cross-reference evaporates.

**6.4. Pacing Prediction (P3)**

The TC agent runs a pacing prediction in Phase 4.2B. This produces:
```
PACING RISK: LOW
Section count: 8
Breathing model: CHANGING STATE
Element uniformity: VARIED
Dramatic moment: YES at 70%
```

This does not appear in the brief. It should, because it tells the builder WHERE to concentrate visual investment (at the dramatic moment) and WHERE to exercise restraint (elsewhere).

**6.5. Rejected Mechanisms (P3)**

The TC agent documents 3+ rejected mechanisms with reasoning. The builder never sees these. This matters because the builder might independently consider deploying a mechanism the TC agent rejected for good reason (e.g., drop-cap in a section where the metaphor demands density, not editorial openness).

**6.6. Layout Topology Plan (P2)**

Section 2 defines zones. Section 5 gives CSS directions per scale. But neither specifies WHICH grid topology goes WHERE. The conventions brief says "at least 2 distinct layout topologies across the page." The TC agent's pacing analysis knows which sections are narrative (single-column) vs analytical (grid) vs comparative (2-column). But this doesn't survive into the brief as a layout plan.

The builder receives: "Use 2+ layout topologies" (from conventions brief) + zone names (from TC brief). The builder does NOT receive: "Zone 2 is analytical -- use 2-column grid here. Zone 3 is narrative -- use single-column. Zone 4 is comparative -- use 3-column spokes."

---

## 7. DOES THE BUILD RECIPE ACTUALLY SOLVE THE FLAGSHIP FAILURE?

### The flagship failure root cause chain

1. Builder received a CHECKLIST (71 lines of constraints: "Verify/Fail if/Must be")
2. No zone-keyed deployment sequence
3. No CSS values per zone
4. No embedded perception checks
5. Result: builder deployed sub-perceptual CSS everywhere (letter-spacing 0.001-0.01em, background deltas 1-8 RGB)

### Does Section 6 solve each root cause?

| Root Cause | Section 6 Fix? | Assessment |
|------------|---------------|------------|
| Checklist format | YES -- recipe format with action verbs | Solved IF the TC agent writes a real recipe, not a thin outline |
| No zone-keyed sequence | YES -- "one block per zone" format | Solved structurally by the template |
| No CSS values per zone | PARTIALLY -- template says "[specific values]" and "[exact color value]" | Depends on TC agent discipline. Template says "specific" but doesn't enforce it. A lazy TC agent could write "Set bg: [appropriate warm tone]" instead of "Set bg: #F0EBE3" |
| No perception checks | YES -- "Squint test" after each zone block | Solved by template |
| Sub-perceptual CSS | PARTIALLY -- perception checks flag it, but the builder still writes the CSS | Convention brief's perception thresholds are the real defense. The recipe's checks are a second line |

### The remaining gap

The recipe template is structurally correct. The risk is EXECUTION, not DESIGN. Specifically:

1. **TC agent laziness:** The template says "[specific values]" but a TC agent generating under token pressure may write abstract directions instead of values. "Set typography to something denser" vs "Set typography: font-size 16px, line-height 1.6, letter-spacing 0.03em." The template encourages specificity but doesn't enforce it.

2. **Budget squeeze:** 80-120 lines is tight. If the TC agent allocates 30 lines to Section 4 (mechanism list) and 10 lines to Section 6 (thin recipe), the recipe degrades. The template should state "Section 6 is the PRIMARY section. Sections 4 and 5 are SECONDARY. If budget forces a trade-off, preserve Section 6."

3. **No validation of recipe quality:** The /build-page orchestrator checks that _tc-brief.md "contains all 8 sections" (line 67). It does NOT check that Section 6 contains zone-keyed CSS values. A brief with 8 section headers and thin content passes validation.

**Priority: P1 (BLOCKING for 4/4).** The recipe format is the right answer. But the brief validation is too weak. Without enforcement that Section 6 contains SPECIFIC CSS values (not abstract directions), the recipe can degrade to a checklist inside a recipe-shaped container.

---

## 8. SUMMARY: RANKED FINDINGS

### P1 -- BLOCKING for 4/4 (fix these or 4/4 is impossible)

**P1-A: Mechanism pairing information is absent from the brief.**
The TC agent identifies reinforcing pairs (mechanisms that encode the same semantic through different channels). The brief presents a flat list. Without pairing, the builder deploys mechanisms independently, producing STRUCTURED (vocabulary deployed) but not COMPOSED (vocabulary harmonized) output. Multi-coherence IS mechanism pairing at boundaries.

FIX: Add a "PAIRS" subsection to Section 4 or 6. 3-5 lines listing which mechanisms deploy together and which semantic direction they share.

**P1-B: Recipe specificity is not validated.**
The brief template says "specific values" but /build-page only checks section existence, not section quality. A thin recipe with abstract directions ("deploy some mechanisms here") passes validation but reproduces the checklist failure.

FIX: Add a brief validation check in /build-page: Section 6 must contain at least 3 hex color values, at least 3 px/rem values, and at least 2 explicit perception checks. If not, reject the brief and re-invoke TC.

### P2 -- IMPORTANT for 4/4 (meaningfully increase P(4/4))

**P2-A: Metaphor risk profile is lost.**
The builder receives the winning metaphor without calibration. High-confidence metaphors (6 isomorphisms, 0 risk) should be pushed hard. Cautious metaphors (3 isomorphisms, 2 risk flags) should be built conservatively. The brief erases this distinction.

FIX: Add 2-3 lines to Section 1: "RISK: [score]/5. [What to resist]. [What to amplify]."

**P2-B: Layout topology plan is absent.**
The brief defines zones but not grid patterns. The builder must independently decide where to use single-column vs 2-column vs bento grid. The TC agent's content analysis has this information (analytical sections = grids, narrative = single-column).

FIX: Add 1 line per zone in Section 2: "Layout: [single-column | 2-column grid | 3-column spokes | bento]."

**P2-C: Section 4/6 budget conflict is unresolved.**
Sections 4 and 6 fight for ~50-60% of the brief budget. The template treats them as independent. They should be integrated: Section 4 as a mechanism INDEX (name + category, 1 line each = 14 lines), Section 6 as the deployment RECIPE (mechanisms appear in context).

FIX: Add a budget directive to Phase 4.5: "Section 6 is the PRIMARY section (40-50% of brief). Section 4 is a mechanism INDEX (15% of brief). Section 5 is optional if Section 6 covers scale-level CSS."

**P2-D: Coherence direction not cross-referenced to mechanisms.**
Section 2 gives zone boundaries with directions. Section 4 gives mechanisms. But the builder must mentally cross-reference: "which mechanisms serve DEEPENING at Z2->Z3?" The recipe (Section 6) is supposed to do this, but if the recipe is thin, the cross-reference is lost.

FIX: Already solved IF P2-C is implemented (Section 6 gets budget priority and mechanisms appear in zone context). No separate fix needed.

### P3 -- NICE TO HAVE (would improve quality but not decisive)

**P3-A: Pacing prediction is lost.**
The TC agent knows section count, breathing model, element uniformity, and dramatic moment placement. This could appear as 4 lines in the brief.

**P3-B: Rejected mechanisms are lost.**
The TC agent documents 3+ rejected mechanisms. 3 lines in the brief would prevent the builder from re-considering rejected mechanisms.

**P3-C: Phase 3.5G quality rubric score is lost.**
The 6-criterion rubric score (e.g., "14/18 VIABLE METAPHOR") gives the builder confidence calibration. 1 line.

**P3-D: Phase 0 content assessment is lost.**
Content type (prose-dominant, mixed, visual-dominant) and scope classification affect how the builder treats sections. 1 line.

---

## 9. THE VERDICT ON SECTION 6

**Does the BUILD RECIPE solve the flagship failure, or is it just more text?**

The recipe format is the RIGHT structural answer. The Middle experiment proved that sequenced, zone-keyed instructions with specific CSS values produce DESIGNED output (PA-05 4/4). The Flagship's checklist produced FLAT output (PA-05 1.5/4). The recipe template in Section 6 has the correct DNA.

But the recipe is inside a brief with an 80-120 line budget and 7 competing sections. The template does not prioritize Section 6 over other sections. The validation does not check recipe quality. The mechanism list (Section 4) and the recipe (Section 6) overlap without explicit integration guidance.

**The recipe is necessary but not sufficient.** Two additional changes are required:

1. **Budget allocation:** Explicitly state Section 6 gets 40-50% of lines. Other sections compress.
2. **Quality validation:** The orchestrator must check that Section 6 contains specific CSS values, not abstract directions.

Without these, the recipe template is an aspiration. With them, it is the proven solution.

---

## 10. CONCRETE RECOMMENDATIONS (Ordered by Impact)

### Edit 1: Add mechanism pairing to Section 4 template (P1-A)
**File:** `~/.claude/skills/tension-composition/SKILL.md`, lines ~1516-1523
**Add after "Distribution: >=2 mechanisms per third of page length":**
```
- REINFORCING PAIRS: List 2-4 mechanism pairs that encode the SAME semantic direction through DIFFERENT CSS channels. Format: "#N + #M: Both encode [SEMANTIC] at [BOUNDARY]. Deploy together." These pairs ARE multi-coherence. Without them, mechanisms are independent tools rather than a coherent system.
```

### Edit 2: Add budget priority to Phase 4.5 preamble (P2-C)
**File:** `~/.claude/skills/tension-composition/SKILL.md`, line ~1575
**Replace** "Brief Length: Target 80-120 lines" with:
```
Brief Length: Target 80-120 lines.
Section budget: Section 6 (BUILD RECIPE) is the PRIMARY section and receives 40-50% of lines. Section 4 (SELECTED MECHANISMS) is a compact index (mechanism + category + 1-line CSS, no elaboration). Sections 1-3 share 20-25%. Sections 5, 7, 8 share the remainder.
If budget forces a trade-off: PRESERVE Section 6. Section 5 can be folded into Section 6's zone blocks. Section 7 is optional.
```

### Edit 3: Add brief quality validation to /build-page (P1-B)
**File:** `~/.claude/skills/build-page/SKILL.md`, line ~67
**Replace** "Verify _tc-brief.md exists and contains all 8 sections" with:
```
Verify _tc-brief.md exists and passes these checks:
1. Contains all 8 section headers (## 1 through ## 8)
2. Section 6 (BUILD RECIPE) contains >= 3 hex color values (e.g., #FEF9F5)
3. Section 6 contains >= 3 explicit px/rem/em CSS values
4. Section 6 contains >= 2 "Squint check" or "PERCEPTION CHECK" lines
5. Section 4 contains "PAIRS:" or "REINFORCING" with >= 2 mechanism pairings
If any check fails: re-invoke TC with feedback specifying which check failed.
```

### Edit 4: Add risk profile to Section 1 template (P2-A)
**File:** `~/.claude/skills/tension-composition/SKILL.md`, after line ~1503
**Add:**
```
- RISK PROFILE (2-3 lines): Perceptual cost score [X/5]. What the metaphor's concept ENCOURAGES that the builder should RESIST (e.g., "cylindrical shape biases narrow containers -- use internal padding"). What the metaphor does WELL that the builder should AMPLIFY.
```

### Edit 5: Add layout topology to Section 2 template (P2-B)
**File:** `~/.claude/skills/tension-composition/SKILL.md`, after line ~1509
**Add:**
```
- For each zone: layout topology (single-column | 2-column grid | 3-column | bento | golden-ratio). The builder may override, but the TC agent's content analysis determines the starting topology.
```

---

## APPENDIX: The Compression Map (Visual)

```
TC SKILL (1,612 lines)
    |
    |-- Phase 0: Content Assessment (40 lines)
    |     \--> DROPPED (content type/scope not in brief)
    |
    |-- Phase 1: Multi-Axis Questioning (83 lines)
    |     \--> Brief Section 3: ~8 lines (axis names + needs)
    |          LOST: richness ratings, opposition depth, interaction effects
    |
    |-- Phase 2: Tension Derivation (168 lines)
    |     \--> Brief Section 3: ~8 lines (tension poles + dominant)
    |          LOST: Addition/BECAUSE/SUBSTITUTION tests, richness formula, validity checks
    |
    |-- Phase 3: Metaphor Collapse (330 lines)
    |     \--> Brief Section 1: ~10 lines (name + CSS directions)
    |          LOST: ALL candidate scoring, isomorphism tables, resonance split,
    |                perceptual risk/cost, rejection checks, search query
    |
    |-- Phase 3.5: Metaphor Commitment (78 lines)
    |     \--> Brief Section 8: ~5 lines (3 anchors)
    |          LOST: commitment verification, divergence justification, zone reasoning
    |
    |-- Phase 3.5G: Quality Rubric (52 lines)
    |     \--> DROPPED (rubric score not in brief)
    |
    |-- Phase 4: Layout Generation (694 lines)
    |     \--> Brief Sections 2, 4, 5, 6: ~55 lines
    |          LOST: anti-scale self-checks, full guardrail tables, 5-category taxonomy,
    |                translation grammar, pacing prediction, coherence rules (C1-C5),
    |                multi-coherence binding (R-MC-01 through R-MC-06), component tier
    |                analysis, adapt-vs-invent, transition grammar lookup, fractal gate
    |
    |-- Phase 4.5: Output Template (88 lines)
    |     \--> IS the brief format (1:1)
    |
    === BRIEF: 80-120 lines ===

    SURVIVING: metaphor name + CSS directions, zone names + boundaries + directions,
               tension poles, mechanism list + CSS recipes, metaphor-implied CSS,
               build recipe, detection expectations, builder anchors

    DEAD: all candidate scoring, all test results, all risk assessments,
          all coherence rule checks, all guardrail tables, content assessment,
          pacing prediction, mechanism pairing, mechanism rejections,
          quality rubric score, layout topology per zone
```

---

*End of analysis. Total: ~400 lines.*

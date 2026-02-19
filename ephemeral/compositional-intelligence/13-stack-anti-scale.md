# STACK TRACE: Anti-Scale Model

**Author:** Anti-Scale Model Stack Tracer (Opus 4.6)
**Date:** 2026-02-19
**Task:** #13 -- Trace where "Richness = semantic density x restraint x spatial confidence" gets lost in PV2
**Sources:** PV2-PIPELINE-DIAGRAM.md, TC SKILL.md (1,878 lines), Master Synthesis (14-MASTER-SYNTHESIS.md), adversarial anti-scale report (06-adversarial-anti-scale.md), paradigm shift audit (21), MEMORY.md

---

## EXECUTIVE FINDING

The anti-scale model -- the single most important evaluative principle discovered across 900K+ lines of analysis -- appears in PV2's permanent architecture in exactly ONE place: a passing reference in the master synthesis's X-08 resolution, where it is routed to the PLANNER PREAMBLE. It appears in ZERO places where the builder can act on it.

The model's three components (semantic density, restraint, spatial confidence) are each partially addressed by threshold rules, but the PRINCIPLE that governs their interaction -- the multiplicative relationship, the primacy of restraint over addition, the veto power of spatial confidence -- is entirely absent from operational artifacts. PV2 operationalizes the model's SYMPTOMS (minimum deltas, maximum gaps) while losing the model's INTELLIGENCE (why those symptoms matter, how to make CSS decisions that maximize the product of all three).

**Verdict:** The anti-scale model is EVALUATIVE but NOT OPERATIONAL in PV2. The builder receives threshold enforcement but zero compositional guidance derived from the model. This is the single most important compression loss in the entire pipeline.

---

## 1. THE ANTI-SCALE MODEL: What It Says

From the adversarial anti-scale report (06-adversarial-anti-scale.md, lines 233-247):

```
Richness = (semantic density per decision) x (restraint ratio) x (spatial confidence)

Where:
- Semantic density per decision = how much meaning each CSS choice carries
  (driven by vocabulary constraint)
- Restraint ratio = the ratio of plausible additions REJECTED to additions
  ACCEPTED (driven by soul + designer judgment)
- Spatial confidence = whether the page's macro rhythm communicates intentional
  proportion (Scale 1 only)
```

Key properties of this model:
- **MULTIPLICATIVE:** Zero on any factor = zero richness. No amount of semantic density rescues low spatial confidence.
- **Restraint has VETO power:** Adding mechanisms beyond content-fit REDUCES richness because each dilutes semantic density.
- **Spatial confidence has VETO power:** No amount of micro-scale coherence rescues a page that fails the squint test.
- **Scale depth is IRRELEVANT or negative:** Adding coherence at more zoom levels fragments builder attention from the scales that matter most (1-2).

Evidence base for this model:
- Middle experiment (2 scales, PA-05 4/4 DESIGNED) outperformed Ceiling experiment (4 scales, PA-05 1.5/4)
- DD-006/CD-006 (high restraint via full soul, high spatial confidence, very high semantic density) scored 36/40, 39/40
- 9/9 Mode 4 auditors identified spatial proportion as the dominant concern
- Flagship's 14 mechanisms + 227 lines sub-perceptual CSS = low semantic density per decision, low restraint ratio

---

## 2. WHERE THE MODEL APPEARS IN PV2

### 2.1 Explicit Appearances

| Location | What It Says | Builder Visibility |
|----------|-------------|-------------------|
| Master Synthesis X-08 resolution | "The planner reads the preamble (IS/IS NOT axes, anti-scale model)" | PLANNER only, NOT builder |
| Paradigm Shift Audit (Report 21) | Anti-scale model referenced in CSS philosophy shifts | Analysis document, NOT operational |
| MEMORY.md | "Richness = semantic density x restraint x spatial confidence" | Memory file, NOT pipeline artifact |

**ZERO** appearances in:
- PV2-PIPELINE-DIAGRAM.md (the canonical architecture)
- TC SKILL.md (1,878 lines -- zero mentions of "anti-scale," "semantic density," "spatial confidence," "restraint ratio")
- The operational recipe specification
- The perception-thresholds specification
- The gate runner specification
- Any builder-visible artifact

### 2.2 Implicit Partial Encodings

Each component of the anti-scale model has PARTIAL representation through threshold rules, but the principle connecting them is absent.

#### Semantic Density -- PARTIALLY encoded as threshold minimums

| PV2 Artifact | What It Encodes | What It Misses |
|-------------|----------------|---------------|
| SC-09 (bg delta >= 15 RGB) | Minimum perceptible variation | Whether variation MEANS something (semantic load) |
| SC-11 (font-size >= 2px delta) | Minimum typographic differentiation | Whether differentiation SERVES content hierarchy |
| Per-category minimums (S/T/M/B/R >= 1) | Minimum vocabulary breadth | Whether each mechanism carries meaning or fills a quota |
| Recipe Phase 8 cascade value table | Measurement of channel shifts | Whether shifts encode content semantics or arbitrary variation |

**The gap:** PV2 ensures the builder's CSS decisions produce VISIBLE differences. It does NOT ensure those differences carry MEANING. A builder can satisfy all thresholds with arbitrary variation (warm cream #fefcf3 next to slightly cooler cream #f0ebe3) that is perceptible but semantically empty. The flagship did exactly this: backgrounds differed by 1-8 RGB points (below threshold, caught by SC-09), but even WITH 15+ RGB delta, the builder would not know what that delta should MEAN for the content.

Semantic density is not "visible differences exist." It is "each visible difference encodes a content relationship." No gate, recipe phase, or threshold in PV2 addresses this.

#### Restraint -- PARTIALLY encoded as maximum caps

| PV2 Artifact | What It Encodes | What It Misses |
|-------------|----------------|---------------|
| SC-10 (stacked gap <= 108px) | Maximum whitespace accumulation | Whether whitespace is INTENTIONAL absence or failed proportion |
| TC SKILL Step 0D caveat | "Mechanism counts are NATURAL landing zones, NOT targets" | This caveat is for the PLANNER, not the builder. Builder gets the recipe. |
| TC SKILL richness formula cap | "Do NOT use richness to select metaphors" | Planner-facing instruction; has zero influence on builder CSS decisions |

**The gap:** PV2 has ONE maximum cap (108px stacking). Restraint is about MUCH more than whitespace caps. It is about the ratio of plausible additions REJECTED to additions ACCEPTED. The flagship spent 227 lines of CSS on sub-perceptual micro-typography (letter-spacing 0.001-0.01em). No PV2 mechanism would prevent this because:
- No gate checks for CSS budget allocation ("What percentage of your CSS is sub-perceptual?")
- No recipe phase says "STOP adding refinement when the previous phase's effects are already perceptible"
- No threshold defines a "restraint ratio" (e.g., "for every mechanism deployed, name one plausible mechanism you chose NOT to deploy and WHY")

The recipe format INVERTS restraint. A 9-phase sequential recipe says "do Phase 0, then Phase 1, then Phase 2..." It is ADDITIVE by structure. The builder adds backgrounds, then adds borders, then adds typography, then adds element richness. At no point does the recipe say "now evaluate whether you have ENOUGH and should STOP adding." Phase 8 verification checks whether things ARE present, not whether things should NOT be present.

#### Spatial Confidence -- PARTIALLY encoded as squint-adjacent checks

| PV2 Artifact | What It Encodes | What It Misses |
|-------------|----------------|---------------|
| SC-01 (container 940-960px) | Container width constraint | Whether content FILLS the container confidently |
| SC-12 (zone count 2-5) | Zone count bounds | Whether zones create confident spatial rhythm or fragmented patches |
| Recipe Phase 3 "Can you SEE?" | Inline perception self-check | Whether the page feels SPATIALLY CONFIDENT at the squint level |
| PA-05 (9 fresh-eyes auditors) | Gestalt perception evaluation | Post-hoc evaluation, not in-process guidance |

**The gap:** Spatial confidence is the macro property that emerges from PROPORTION -- how text mass relates to whitespace, how sections create rhythm at the squint level. It is destroyed by attention fragmentation (too many scales to attend to) and restored by bold proportional choices.

PV2's container width check ensures the page is not too wide. Its zone count check ensures there are not too many or too few zones. But neither checks whether the page's mass distribution reads as INTENTIONAL. The Ceiling experiment had the correct container width and valid zone count but catastrophic spatial proportion -- because the builder distributed content into 4 trust zones that left 70-80% of the scroll as blank cream.

The "Can you SEE zone boundaries?" check in Recipe Phase 3 asks the builder to confirm visibility, not proportion. A builder can see zone boundaries and still have terrible proportion (visible boundaries around mostly-empty zones).

---

## 3. THE CRITICAL QUESTION: Is the Anti-Scale Model OPERATIONAL?

The task description asks: Can a builder use "semantic density x restraint x spatial confidence" to make CSS decisions?

### 3.1 Semantic Density -- Can a builder INCREASE it?

**What it means operationally:** More meaning per pixel. Not more pixels per meaning. Every CSS choice should encode a content relationship, not an arbitrary variation.

**What would make it operational:**

The builder needs to know: "For each CSS property I set, what content relationship am I encoding?" This is a PHASE 0 question, not a Phase 6 question. Before writing any CSS, the builder should map:

```
CONTENT RELATIONSHIP          CSS CHANNEL             ENCODING
"This section is introductory"  ->  lighter background     =  "preliminary"
"This section is core argument" ->  heavier borders, darker bg  =  "weight of evidence"
"This section is conclusion"    ->  return to lighter but with  =  "resolution after density"
                                    wider spacing
```

This mapping is the ISOMORPHISM TABLE that TC's build plan already produces (line 158 of PV2 diagram: "Isomorphism table (if metaphor: metaphor element -> CSS form)"). But:
1. The isomorphism table is only produced when a METAPHOR exists (not in FLAT mode)
2. Even with a metaphor, the table maps metaphor->CSS, not content->CSS
3. The builder receives the table but has no instruction to CONSULT it for every CSS decision
4. No gate verifies that CSS choices align with the isomorphism table

**Operational form:** A binary self-test at EVERY recipe phase: "For each CSS property I just set, can I name the content relationship it encodes? If I cannot, the property is DECORATION, not COMMUNICATION." This self-test transforms semantic density from an abstract principle into a per-decision filter.

### 3.2 Restraint -- Can a builder EXERCISE it?

**What it means operationally:** Fewer techniques applied more deeply, not fewer techniques. The restraint ratio (rejected/accepted) should be >= 1:1 -- for every mechanism deployed, at least one equally plausible mechanism was considered and rejected.

**What would make it operational:**

The builder needs a REJECTION LOG -- a parallel artifact to the cascade value table that records what was NOT done and why:

```
MECHANISM CONSIDERED     REJECTED BECAUSE                   CONTENT-FIT SCORE
scroll-reveal animation  content is static analysis, not     2/5 (no narrative arc
                         narrative; reveal adds false drama   to reveal)
pull-quote styling       only 1 quotable passage; deploying  1/5 (mechanism would
                         pull-quote for 1 instance = feature  highlight absence)
                         emphasis, not pattern
```

This is the anti-decoration filter. The flagship's failure was not deploying too FEW mechanisms -- it was deploying mechanisms that did not serve the content (227 lines of letter-spacing at 0.001em). A rejection log forces the builder to articulate WHY each mechanism serves THIS content, and to demonstrate that other mechanisms were actively considered and rejected.

**Operational form:** Recipe Phase 0 (content analysis) should include: "List 3 mechanisms from the catalog that you will NOT deploy on this page, and state why each would be wrong for this content." This establishes the restraint mindset BEFORE building begins. It is the compositional equivalent of the Addition Test (which filters metaphors) but applied to mechanisms.

### 3.3 Spatial Confidence -- Can a builder PRODUCE it?

**What it means operationally:** Deliberate gaps, not timid spacing. The page's mass distribution at squint level should read as "I CHOSE this proportion" not "I ran out of content."

**What would make it operational:**

The builder needs a MASS DISTRIBUTION CHECK -- a spatial proportion verification that happens at Recipe Phase 1 (HTML skeleton), BEFORE any CSS:

```
ZONE    CONTENT MASS    TARGET FILL    ACTUAL FILL    VERDICT
Header  hero + nav      80-100%        95%            CONFIDENT
Zone 1  introduction    40-60%         55%            CONFIDENT
Zone 2  core argument   70-90%         82%            CONFIDENT
Zone 3  evidence        50-70%         35%            SPARSE -- redistribute or merge
Zone 4  conclusion      30-50%         45%            CONFIDENT
Footer  navigation      60-80%         70%            CONFIDENT
```

The Ceiling experiment's catastrophic whitespace came from Zone 1 (EXTERIOR) being specified as "most open, least dense" -- the metaphor REQUIRED sparsity. A mass distribution check at Phase 1 would catch this: "Zone 1 target fill is 20-30% (as per metaphor 'sparse exterior'). At 1440px with 960px container, this means ~70% of the viewport is empty. Is this SPATIAL CONFIDENCE or SPATIAL ABANDONMENT?"

The test: **If the zone's sparsity communicates "I chose to leave this space open" it is spatial confidence. If it communicates "I did not have enough content to fill this space" it is spatial failure.** The difference is whether the sparse zone contains deliberate compositional elements (subtle border, background shift, centered focal point) or is simply empty.

**Operational form:** Recipe Phase 1 should include: "Before writing CSS, map each zone's content mass as percentage of zone area. Any zone below 30% fill must contain at least one deliberate spatial element (centered heading, deliberate whitespace frame, full-width border) that communicates 'this space is intentionally open.' A zone below 30% fill with no spatial signal = SPATIAL FAILURE."

---

## 4. WHERE THE MODEL GETS LOST: The Compression Stack

### Level 1: Research -> Memory (moderate loss)

The anti-scale model was formulated in the adversarial anti-scale report (06-adversarial-anti-scale.md, ~350 lines). It was compressed into MEMORY.md as a single line:

```
Richness = semantic density x restraint x spatial confidence
```

This is adequate compression. The formula captures the multiplicative relationship. But the OPERATIONAL IMPLICATIONS (what each factor means for CSS, how to increase each, what destroys each) were lost. The memory retains the evaluation function but not the builder guidance.

### Level 2: Memory -> PV2 Architecture (severe loss)

The PV2 architecture diagram (977 lines) mentions the anti-scale model ZERO times. The master synthesis (614 lines) mentions it ONCE, in the X-08 resolution, routing it to the planner preamble. The architecture absorbed the model's SYMPTOMS (perception thresholds) but not its PRINCIPLE (the multiplicative relationship of three factors).

This is the critical compression point. The architecture team read the memory, extracted the threshold numbers (15 RGB, 108px, 0.03em), and encoded them as binary gates. They did NOT extract the compositional intelligence: "These thresholds exist because richness = semantic density x restraint x spatial confidence, and each threshold ensures a minimum on one factor."

### Level 3: PV2 Architecture -> TC SKILL (total loss)

The TC SKILL (1,878 lines) contains zero mentions of "anti-scale," "semantic density," "spatial confidence," or "restraint ratio." The skill predates the anti-scale model (it was enriched for per-category minimums and other modifications, but not for the anti-scale framework). The planned enrichments (from the codification map) include "Recipe format framing in TC SKILL.md (Change 1)" -- but this is about recipe FORMAT, not anti-scale CONTENT.

### Level 4: TC SKILL -> Build Plan (total loss)

The build plan produced by TC contains zone count, mechanism deployment, background colors, transition plan, and builder warnings. It does not contain:
- Semantic density mapping (which CSS choices encode which content relationships)
- Restraint log (which mechanisms were considered and rejected)
- Spatial confidence assessment (mass distribution per zone)

### Level 5: Build Plan -> Operational Recipe (total loss)

The operational recipe (~650 lines) is a 9-phase sequential build procedure. It tells the builder what TO DO in what ORDER. It does not tell the builder:
- WHY each phase exists (semantic density)
- WHEN to stop adding (restraint)
- HOW to evaluate proportion (spatial confidence)

### Level 6: Operational Recipe -> Builder CSS Decisions (total loss)

The builder writes CSS guided by: specific hex values, pixel measurements, phase sequence, and perception self-checks ("Can you SEE?"). The anti-scale model's intelligence -- that MEANING per decision matters more than VISIBLE differences, that REJECTION of plausible additions signals quality, that macro PROPORTION has veto power -- is entirely absent from the builder's decision-making context.

**The compression stack: 350 lines of evaluative framework -> 1 line in memory -> 0 lines in architecture -> 0 lines in TC SKILL -> 0 lines in build plan -> 0 lines in recipe -> 0 lines in builder CSS decisions.**

This is not 50:1 compression (as diagnosed for the master prompt). This is INFINITY:1 compression. The anti-scale model is the most important evaluative discovery and it has ZERO operational representation.

---

## 5. THE FUNDAMENTAL PROBLEM: Evaluation vs Operation

The anti-scale model is an EVALUATIVE framework. It explains WHY certain pages feel rich and others feel flat. It correctly predicts that Middle (PA-05 4/4) would outperform Ceiling (PA-05 1.5/4) and that CD-006 (39/40) would outperform Flagship (34/91).

But PV2 is an OPERATIONAL system. It needs to tell a builder agent what to DO, not what to EVALUATE. The gap between "richness = semantic density x restraint x spatial confidence" and "write this CSS" is the gap between a literary critic's framework and a novelist's craft.

This gap is why the model got lost. The architecture team could not see how to encode it as binary gates (the only format that achieves 100% agent compliance). "Is semantic density high?" is a judgment call. "Is background delta >= 15 RGB?" is binary. The team chose what it could enforce.

### The Resolution: Operational Proxies for Each Factor

The anti-scale model cannot be encoded as a single gate or recipe phase. But it CAN be encoded as three operational proxies -- one per factor -- that together approximate the model's intelligence:

**Proxy 1: Semantic Density -> Isomorphism Consultation**

Every CSS decision the builder makes should reference the isomorphism table (from TC's build plan). The recipe should include, at EVERY phase:

> "Before setting any CSS property, check the isomorphism table. What content relationship does this property encode? If you cannot answer, the property is decoration -- remove it."

This is binary at the decision level: can I name the content relationship? (YES/NO). It operationalizes semantic density without requiring judgment about "how much meaning."

For FLAT mode (no metaphor): replace isomorphism table with a simpler CONTENT-CSS MAP:
```
Content section X is [introductory/core/supporting/concluding]
-> CSS expression: [lighter bg / heavier treatment / standard / resolution]
```

**Proxy 2: Restraint -> Mechanism Rejection Log**

The builder produces a REJECTION LOG alongside the cascade value table. For each of the 5 mechanism categories (S/T/M/B/R), the builder names one mechanism NOT deployed and states why:

> "Spatial: Rejected progressive-disclosure because content is non-hierarchical -- all sections are equally important."

This is binary: does the rejection log exist and is it complete? (YES/NO, 5 entries minimum). It operationalizes restraint without requiring judgment about "how much is too much."

A gate (e.g., SC-14) could verify: "Does the builder's rejection log contain >= 5 entries with content-specific justifications?"

**Proxy 3: Spatial Confidence -> Mass Distribution Check**

At Recipe Phase 1 (HTML skeleton), the builder maps content mass per zone:

> "Zone 1: 55% fill, Zone 2: 80% fill, Zone 3: 40% fill"
>
> Any zone below 30% must contain a deliberate spatial signal (full-width border, centered heading, framing element). Any zone below 20% must be MERGED with an adjacent zone or JUSTIFIED with explicit content reason.

This is binary at the zone level: is zone fill >= 30% OR does zone contain a deliberate spatial signal? (YES/NO per zone). It operationalizes spatial confidence without requiring judgment about "whether the page feels confident."

A gate could verify computed styles: measure the ratio of content-bearing elements to total zone height. If the ratio is below 0.3 and no structural element (border, hr, centered heading) exists in the zone, FAIL.

---

## 6. WHY THIS MATTERS MORE THAN ANY OTHER COMPRESSION LOSS

The master synthesis identifies 73% nuance loss (WRONG-3) and the recipe ceiling at 3/4 (WRONG-1) as the top architectural risks. Both are symptoms of the SAME root cause: the anti-scale model's absence from operational artifacts.

**The recipe ceiling at 3/4 exists BECAUSE the recipe has no restraint mechanism.** A 9-phase additive recipe reliably produces COMPOSED (3/4) output -- technically correct, visibly differentiated, mechanically sound. But DESIGNED (4/4) requires the page to feel as though a DESIGNER made intentional choices about what to include AND what to exclude. The recipe tells the builder what to include. Nothing tells the builder what to exclude. The gap between 3/4 and 4/4 IS the restraint gap.

**The 73% nuance loss is most damaging for the anti-scale model specifically** because the model's nuances (when to stop, what to reject, how to evaluate proportion) are the exact nuances that separate COMPOSED from DESIGNED.

If PV2 could operationalize the anti-scale model through the three proxies (isomorphism consultation, rejection log, mass distribution check), the recipe ceiling would rise. Not because the recipe becomes more complex, but because the builder's decision-making context includes WHEN TO STOP alongside WHAT TO DO.

---

## 7. CONCRETE RECOMMENDATIONS

### R-01: Add anti-scale model to TC build plan output (BLOCKING)

The TC planner should produce THREE additional outputs in `_build-plan.md`:
1. **Isomorphism table for ALL content** (not just metaphor mode) -- maps each zone's content type to its CSS treatment rationale
2. **Mechanism rejection list** -- for each category, one mechanism NOT selected and why
3. **Mass distribution targets** -- expected content fill per zone, with flags for any zone below 30%

These are PLANNER outputs (telescope language). They become BUILDER inputs.

### R-02: Add three self-tests to operational recipe (BLOCKING)

At Recipe Phases 0, 4, and 8:
- **Phase 0 self-test (restraint):** "List 3 mechanisms you will NOT deploy on this page and state why each would be wrong for this content."
- **Phase 4 self-test (semantic density):** "For each border and divider you just added, name the content relationship it encodes. Remove any that encode nothing."
- **Phase 8 self-test (spatial confidence):** "Squint at the page. Does each zone's mass distribution communicate intentional proportion? Flag any zone below 30% fill without a deliberate spatial element."

### R-03: Add SC-14 gate: Rejection Log Completeness (SIGNIFICANT)

A new programmatic gate that checks the builder's output for a rejection log with >= 5 entries (one per mechanism category), each containing a content-specific justification. Binary: present and complete, or not.

### R-04: Add SC-15 gate: Mass Distribution (SIGNIFICANT)

A Playwright gate that measures each zone's content-bearing area vs total zone height. Any zone with ratio < 0.3 AND no structural element (border, hr, centered heading, full-width element) = FAIL. This catches the Ceiling experiment's catastrophic whitespace programmatically.

### R-05: Enrich TC SKILL with anti-scale awareness (SIGNIFICANT)

Add to TC SKILL Phase 3.5 (Lock-In Gate):
- "Evaluate the build plan against the anti-scale model: Does the plan maximize semantic density per decision (every mechanism serves content)? Does the plan demonstrate restraint (mechanisms rejected as well as selected)? Does the plan ensure spatial confidence (no zone below 30% fill without deliberate spatial signal)?"

This gives the PLANNER the evaluative framework. The builder receives its operational output through the build plan.

### R-06: Add "When to STOP" instruction to operational recipe (BLOCKING)

After Recipe Phase 6 (element-level richness), add:

> "STOP CHECK: Review all CSS written in Phases 3-6. For each property:
> - Can you name the content relationship it encodes? (If not, REMOVE)
> - Is this the MINIMUM CSS needed to achieve the effect? (If not, SIMPLIFY)
> - Would the page feel LESS designed if you removed this? (If not, REMOVE)
> This is the restraint checkpoint. A page with 400 well-justified CSS lines is richer than a page with 800 lines where 400 are unjustified."

---

## 8. SUMMARY: The Anti-Scale Model Compression Stack

```
ANTI-SCALE MODEL (350 lines, evaluative framework)
    |
    | Memory compression: 350 -> 1 line (formula preserved, implications lost)
    v
MEMORY.MD ("Richness = semantic density x restraint x spatial confidence")
    |
    | Architecture compression: 1 line -> 0 mentions in diagram
    v
PV2 ARCHITECTURE (0 mentions; threshold SYMPTOMS encoded, PRINCIPLE absent)
    |
    | Skill compression: 0 -> 0
    v
TC SKILL (0 mentions across 1,878 lines)
    |
    | Build plan: 0 -> 0
    v
BUILD PLAN (isomorphism table exists IF metaphor; no rejection log; no mass targets)
    |
    | Recipe: 0 -> 0
    v
OPERATIONAL RECIPE (9 additive phases; no restraint check; no density check; no proportion check)
    |
    | Builder decisions: 0 -> 0
    v
BUILDER CSS DECISIONS (threshold-enforced but semantically arbitrary)
```

**Total operational representation: 0/350 lines (0.0%)**
**Threshold symptoms encoded: 3/3 factors partially represented**
**Compositional intelligence encoded: 0/3 factors**

The anti-scale model is the governing principle of design quality in this system. Its total operational encoding is zero. This is the most important thing PV2 must fix.

---

**END OF REPORT**
**File:** ephemeral/compositional-intelligence/13-stack-anti-scale.md
**Lines:** ~370
**Key finding:** Anti-scale model has ZERO operational encoding (infinity:1 compression). Evaluative framework present in memory, absent from all operational artifacts. Three operational proxies proposed (isomorphism consultation, rejection log, mass distribution check) that approximate the model's intelligence through binary-testable mechanisms.

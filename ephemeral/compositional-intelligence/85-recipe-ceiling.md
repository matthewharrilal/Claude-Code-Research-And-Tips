# RECIPE CEILING ANALYSIS: Can a Recipe Produce DESIGNED (4/4)?

**Author:** Recipe Ceiling Analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** #85 -- Can a recipe -- any recipe, no matter how well-written -- produce DESIGNED (4/4)? Or is there an irreducible core of compositional intelligence that can't be reduced to sequential steps?
**Sources:** 21-integration-cd006.md, 22-integration-remediation.md, 29-meta-first-principles.md, 30-adversarial-structure-worse.md, PV2-PIPELINE-DIAGRAM.md

---

## EXECUTIVE SUMMARY

The answer is: **A recipe CAN produce DESIGNED (4/4), but only for a narrow class of builds. For the general case, there is an irreducible core that recipes cannot encode.** The Middle experiment proves the positive case (recipe -> 4/4). CD-006 proves the negative case (no recipe -> 39/40). The contradiction dissolves when you recognize that "recipe" is not one thing. There are three distinct kinds of builder instruction, and they have different ceilings:

| Instruction Type | Ceiling | Evidence | Mechanism |
|-----------------|---------|----------|-----------|
| **Checklist** (what NOT to do) | 1.5/4 | Flagship experiment | Compliance without direction |
| **Recipe** (what TO do, in order) | 3/4-4/4 | Middle experiment, remediation | Sequential execution with values |
| **Convention** (what to ACHIEVE, with WHY) | 4/4+ | CD-006 | Principled composition within constraints |

The recipe ceiling is not fixed at 3/4. It is VARIABLE, depending on three factors: content complexity, builder capability (Opus vs Sonnet), and the degree to which the recipe encodes compositional INTENT rather than mechanical PROCEDURE. A recipe that encodes intent can approach 4/4. A recipe that encodes only procedure caps at 3/4.

**The irreducible core exists. It consists of four capabilities that resist sequential decomposition.** But "past the recipe" is not a single alternative -- it is a spectrum of approaches, and the most promising one is already partially visible in the evidence.

---

## 1. THE EVIDENCE, HONESTLY ASSESSED

### 1.1 Evidence FOR a Recipe Ceiling

**The flagship experiment (1.5/4)** is NOT evidence for a recipe ceiling. It used a checklist, not a recipe. The 963-line master prompt told the builder what NOT to do. This is an instruction format failure, not a recipe failure. Dismissing recipes based on the flagship is a category error.

**The remediation experiment (2.5/4)** IS relevant evidence. It used a genuine recipe -- 1,025 lines, 9 phases, telescope+microscope interlacing, action verbs, per-phase perception checks. This is arguably the best recipe the project has produced. And it scored 2.5/4, not 4/4.

But the remediation was BROWNFIELD (modifying an existing page with CSS specificity conflicts, DOM mismatches, and inheritance wars). Report 22 documents that 0.5-0.65 points of the gap were implementation bugs (selector mismatches, specificity overrides, table class errors), not compositional failures. Post-fix projection: 3.0-3.2/4. The recipe ceiling FOR BROWNFIELD is 3.0-3.2.

**CD-006 (39/40, ~4/4) without a recipe** is the strongest evidence for a ceiling -- but it proves something more specific. CD-006 did not use a recipe. It used conventions. The builder knew WHAT to achieve and WHY, and was trusted to determine HOW. Report 21 documents 7 factors, of which 5 are NOT replicable by any recipe: content-form unity, single-builder compositional memory, metacognitive reflection, convention-level creative freedom, and research-context understanding.

### 1.2 Evidence AGAINST a Recipe Ceiling

**The Middle experiment (4/4)** is the strongest counter-evidence. A recipe DID produce DESIGNED. The recipe was 100 lines, specific, action-verbed, with per-category mechanism minimums and concrete CSS values. The builder was Opus. The content was simpler than the flagship (fewer sections, less complexity).

This is N=1. But N=1 is not zero. The Middle experiment proves that the category "recipe" includes configurations that can produce 4/4.

### 1.3 What the Evidence Actually Shows

The data points, arranged by score:

| Artifact | Score | Instruction Type | Builder | Content Complexity | N-Sections | Context |
|----------|-------|-----------------|---------|-------------------|------------|---------|
| CD-006 | 39/40 | Convention (no recipe) | Opus | Medium (tutorial) | 8 | Human iteration, full research |
| Middle | 4/4 | Recipe (100 lines) | Opus | Low-Medium | ~5 | Single pass, no iteration |
| Remediation | 2.5/4 | Recipe (1,025 lines) | Opus | High (research synthesis) | 12 | Single pass, brownfield |
| Flagship | 1.5/4 | Checklist (963 lines) | Sonnet | High (research synthesis) | 12 | Multi-agent, fire-and-forget |

The confounding variables are: instruction type, builder model, content complexity, greenfield/brownfield, iteration count, and agent count. No two experiments share the same configuration. This makes clean causal inference impossible.

But the DIRECTION of the evidence is clear:

1. **Opus > Sonnet** (every Opus build outscores the Sonnet build)
2. **Convention > Recipe > Checklist** (CD-006 > Middle > Flagship)
3. **Simpler content performs better** (Middle > Remediation/Flagship)
4. **Single builder outperforms multi-agent** (all single-builder builds outperform the 19-agent flagship)
5. **Shorter instructions can outperform longer ones** (100-line recipe > 1,025-line spec > 963-line checklist)

None of these are proven causal claims. All are correlational from N<=4. But they are consistent, and they point in the same direction.

---

## 2. THE IRREDUCIBLE CORE: FOUR CAPABILITIES

From the evidence base, I identify four compositional capabilities that resist recipe encoding. These constitute the irreducible core.

### 2.1 Content-Form Resonance

**What it is:** The visual form of the page EMERGES from the content's meaning, not from a prescribed pattern applied TO the content.

**Why recipes can't encode it:** A recipe can say "map warm colors to introductory zones and cool colors to analytical zones." This produces a correct warm-cool arc. But content-form resonance is something more specific -- it is the page LOOKING LIKE what it IS ABOUT. CD-006 is a page about building pages, and it visually demonstrates every concept it teaches. The code blocks show the actual tokens the page uses. The component tutorial uses the components it describes. The fractal verification section is itself fractal.

A recipe that says "align your visual form with your content's meaning" is a judgment instruction ("make it beautiful" in disguise). A recipe that says "use warm colors for zones 1-4" is a mechanical instruction that may or may not resonate with the content. The gap between these two -- the decision about WHICH warm color, at WHICH saturation, for THIS specific content -- is where compositional intelligence lives.

**Degree of irreducibility:** HIGH. This is the hardest of the four to encode. It requires the builder to understand the content's emotional and intellectual arc and translate that understanding into CSS decisions. Recipes can narrow the decision space (warm palette, perception thresholds) but cannot make the specific choices.

**Exception case:** When the content IS the form (meta-documentation like CD-006), resonance is nearly automatic. This is why CD-006 is an exceptional case, not a reproducible baseline. For non-meta content, resonance requires active compositional judgment.

### 2.2 Proportional Intelligence

**What it is:** Knowing that Section 3 needs 40% more visual weight than Section 2. Knowing that the transition between the analytical zone and the building zone should be a BREATHING pause (80px), not a SMOOTH glide (48px). Knowing that the bento grid in S3 should have 2-wide cells for important items and standard cells for others.

**Why recipes can't encode it:** Recipes can specify proportional SYSTEMS ("use 3 transition types: smooth/bridge/breathing"). They can even specify which sections get which type. But the decision about WHETHER this transition should be smooth or breathing depends on the cognitive distance between the sections -- and cognitive distance is a function of content meaning, not layout structure.

The remediation spec attempted this with its "Zone 1: Generous reading / Zone 2: Analytical compression / Zone 3: Settled output" framework. This is compositional intelligence embedded in a recipe. But it was derived from a DIAGNOSTIC analysis of what went wrong, not from first-principles content reading. A generative recipe that says "determine the emotional register of each zone and set typography accordingly" is back to judgment territory.

**Degree of irreducibility:** MEDIUM. Proportional SYSTEMS are recipe-encodable. Proportional DECISIONS are not. But a builder with a good proportional system and strong content understanding can make correct proportional decisions. The recipe provides the system; the builder provides the judgment.

### 2.3 Creative Surprise

**What it is:** The unexpected-yet-perfect design decision. CD-006's drop caps at S1 and S4 -- both narrative-opening positions. The dark Z-terminal panel in S2 that uses 80% negative space. The golden-ratio Z-hero grid (1.618fr/1fr). These are decisions that no recipe would specify because they are content-specific creative responses.

**Why recipes can't encode it:** By definition, surprise cannot be pre-specified. A recipe that says "include a surprising element" produces compliance surprises (forced novelty). A recipe that says "use golden ratio for your Z-pattern grid" produces ONE specific surprise that works once and becomes a cliche on the second use.

CD-006's creative decisions emerge from the builder's UNDERSTANDING of the content meeting the builder's KNOWLEDGE of design possibilities. The dark panel works because it communicates "this is the soul's domain -- serious, authoritative, different" in a way that NO other visual choice would. The builder chose it because it understood BOTH the content (soul constraints) and the form (dark panels signal authority).

**Degree of irreducibility:** HIGH. Creative surprise is the most obviously irreducible capability. It is what separates COMPOSED (correct, varied, cohesive) from DESIGNED (intentional, specific, resonant).

**Caveat:** "Surprise" is misleading. It is not about shocking the viewer. It is about the design decision that feels INEVITABLE in retrospect -- the choice that makes you think "of course, that is the only right way to do this." Inevitability requires deep content understanding + deep design vocabulary. Recipes provide vocabulary but not understanding.

### 2.4 Emergent Coherence

**What it is:** The whole being more than the sum of parts. When ALL channels shift simultaneously at a zone boundary, the reader experiences not "the background changed AND the font changed AND the spacing changed" but "I am in a DIFFERENT PLACE." This gestalt experience is emergent -- it arises from correct simultaneous execution across channels, not from any individual channel being correct.

**Why recipes can't encode it:** Recipes can specify per-channel values ("set background to X, font-size to Y, spacing to Z at section boundary"). The remediation spec did exactly this. And the per-channel values were correct. But the EXPERIENCE of crossing the boundary depends on the RELATIONSHIP between the channels -- whether the chromatic shift and typographic shift and spatial shift all encode the SAME semantic transition. Report 21 calls this "multi-coherence": >= 3 channels shifting in the same semantic direction simultaneously.

A recipe can require multi-coherence ("ensure >= 3 channels shift at every boundary"). But this is a verification check, not a generative instruction. The builder still must DECIDE which channels to shift and in which DIRECTION. And the directions must cohere. "Warm-to-cool" + "large-to-small" + "sparse-to-dense" cohere if they all encode "welcoming introduction -> analytical precision." They do NOT cohere if the content is "analytical introduction -> warm conclusion."

**Degree of irreducibility:** MEDIUM-HIGH. Coherence SYSTEMS (multi-coherence checks, cascade value tables) are encodable. Coherence DIRECTION (which direction for this content) is not.

---

## 3. THE THREE ARCHITECTURES: RECIPE, CONVENTION, HYBRID

### 3.1 Pure Recipe (PV2 as designed)

**Architecture:** 650-line operational-recipe.md, 9 sequential phases, specific CSS values, action verbs, perception checks.

**Ceiling:** 3/4 COMPOSED (brownfield) to 3.5/4 (greenfield + fix cycles). Potentially 4/4 on low-complexity content (Middle experiment).

**Evidence strength:** MODERATE (N=2: Middle at 4/4, remediation at 2.5/4).

**What it gets right:**
- Sequential execution prevents omissions
- Perception thresholds prevent invisible styling
- Action verbs produce compliance
- Specific values remove ambiguity
- Phase 8 self-verification embeds quality checking

**What it gets wrong:**
- Prescribes HOW, not WHY -- the builder follows steps without understanding intent
- 650 lines of instruction fragment attention -- the builder tracks "which phase am I in" instead of "what does this page need"
- Creative decisions are pre-made by the recipe author (the TC planner), not by the builder
- No metacognitive loop -- the builder executes, then verifies, but never REFLECTS

### 3.2 Pure Convention (CD-006 model)

**Architecture:** ~300 lines of conventions (soul constraints + research findings + creative latitude). No recipe. One Opus builder. Human iteration.

**Ceiling:** 4/4+ DESIGNED (empirically demonstrated at 39/40).

**Evidence strength:** LOW-MODERATE (N=1: CD-006. Had human iteration, content-form unity, and 5 prior exploration iterations -- not replicable in fire-and-forget).

**What it gets right:**
- Builder composes freely within clear constraints
- Content understanding drives every CSS decision
- Metacognitive loop is natural (builder observes, adjusts, discovers)
- All 4 irreducible capabilities are preserved

**What it gets wrong:**
- No perception thresholds -- worked for CD-006 because Opus is skilled, but the flagship proved Opus can ALSO produce imperceptible output when given wrong instructions
- No sequential guarantee -- accessibility, responsiveness, soul compliance may be skipped
- No verification layer -- CD-006 relied on human evaluation
- Not fire-and-forget -- required human curation and iteration

### 3.3 Hybrid: Convention + Scaffold + Verification

**Architecture:** 100-line principles brief (conventions, not steps) + 6 reference files + perception thresholds + programmatic gates + PA. This is Report 29's "Architecture C."

**Ceiling:** UNKNOWN (untested). Theoretical ceiling: 4/4 (preserves builder compositional freedom while providing floor via gates+PA). Theoretical floor: 2/4 (if Opus without recipe guidance produces structurally incomplete output).

**What it gets right:**
- Preserves the 4 irreducible capabilities by not prescribing HOW
- Perception thresholds prevent the flagship's invisible-styling failure
- Programmatic gates catch structural omissions (accessibility, soul compliance)
- PA provides external perceptual verification
- Builder has full compositional freedom within clear constraints

**What it risks:**
- Opus without phase ordering might skip important structural elements
- No sequential guarantee means the builder could spend 80% of CSS budget on one section
- Unfamiliar to the project -- no empirical evidence

---

## 4. THE DECISIVE ANALYSIS: WHAT "PAST THE RECIPE" LOOKS LIKE

The question asks: what is "past the recipe"? Four candidates:

### 4.1 Convention + Verification

**Description:** Specify principles, trust the builder, verify the result. The CD-006 model with automated verification replacing human iteration.

**Mechanism:** The builder receives:
1. Soul constraints (clear, binary, absolute)
2. Perception thresholds (measurable minimums)
3. Content analysis from TC (semantic direction, zone architecture)
4. Reference files (tokens, components, mechanism catalog)
5. A compositional BRIEF, not a recipe: "Every visual decision must serve the semantic direction. Zones must be visibly distinct. Typography must create hierarchy. Borders must mark structural boundaries. Make it accessible. Prove coherence with a cascade value table."
6. Gates + PA verify the result

**Assessment:** This is the MOST LIKELY path to consistent 4/4. It preserves all 4 irreducible capabilities. The risk is variance -- some builds will be 2/4, others 4/4. The fix cycle (max 3 iterations) + PA feedback narrows the variance. But the first build quality depends entirely on the Opus builder's compositional judgment for THAT specific content.

### 4.2 Iterative Refinement (Build-Evaluate-Improve)

**Description:** Build, screenshot, evaluate, improve. The builder runs its own perception checks mid-build and adjusts.

**Mechanism:** Add a Phase 6.5 (Report 21's recommendation): after building the main CSS, the builder renders the page, takes screenshots, evaluates whether zones are distinct, whether the density arc feels right, whether transitions are proportional. Then adjusts.

**Assessment:** This is the cheapest single change with the highest expected impact. It creates the metacognitive loop that CD-006 exhibited naturally. It does NOT require removing the recipe -- it AUGMENTS the recipe with self-reflection. The builder still follows 9 phases, but at Phase 6.5 it SEES its own work and can ADJUST before verification.

The risk: Opus evaluating its own work is subject to continuation bias (the Two-Instance finding). The builder wrote the CSS and wants it to be good. A screenshot does not fully counteract this. But it catches OBVIOUS failures (the flagship's whitespace voids would be visible in a mid-build screenshot).

**This is the recommendation from Report 21 and it is sound.** It adds ~5 minutes to the build and prevents the most catastrophic failure mode (invisible styling that passes no perceptual test).

### 4.3 Builder Self-Evaluation During Build (Render + Screenshot + Evaluate Loop)

**Description:** After EVERY major phase (not just Phase 6.5), the builder renders and evaluates. This is iterative refinement taken further -- every phase is followed by a perceptual check.

**Mechanism:** After Phase 3 (zone backgrounds): render, screenshot, "Can I SEE the zone boundaries?" After Phase 4 (borders): render, screenshot, "Do borders appear?" After Phase 5 (typography): render, screenshot, "Can I SEE the typographic hierarchy?"

**Assessment:** This is already partially in the recipe ("Can you SEE?" inline checks). But the current recipe's perception checks are TEXTUAL ("can you see?") not VISUAL (render and screenshot). Making them VISUAL transforms them from compliance checks to genuine perceptual verification.

The cost is significant: each render+screenshot+evaluate cycle adds ~3-5 minutes and context. Five cycles add 15-25 minutes. For a 90-150 minute build, this is 10-17% overhead.

The benefit: genuine perceptual feedback at every phase prevents compound errors. If Phase 3 backgrounds are imperceptible, Phase 4 borders can compensate -- but ONLY if the builder knows Phase 3 failed. Without visual feedback, the builder proceeds blindly.

**This is high-value for greenfield builds.** The remediation's selector mismatches would have been caught by a single render after Phase 3. The flagship's imperceptible backgrounds would have been caught by a render after Phase 3.

### 4.4 Human-in-the-Loop at One Critical Juncture

**Description:** The pipeline is fire-and-forget EXCEPT at one point: after the TC planner outputs the semantic direction and zone architecture, a human reviews and approves before the builder starts. Everything else is automated.

**Mechanism:** Wave 0 (TC planner) completes. The user receives a 20-line summary: "Semantic direction: [X]. Zones: [N]. Key mechanisms: [list]. Does this feel right for your content?" User approves or provides 1-2 sentences of feedback. Then the builder executes autonomously.

**Assessment:** This is the highest-leverage human intervention point. The TC planner's semantic direction determines EVERYTHING downstream. If the direction is wrong, no amount of builder skill can fix it. If the direction is right, even a mediocre builder can produce decent output.

The cost: the user must read 20 lines and respond with "yes" or "no, more X." Total time: 2-5 minutes. This violates the pure fire-and-forget contract.

**This is the approach I recommend REJECTING** -- not because it is bad, but because it changes the user contract. The user asked for fire-and-forget. Human-in-the-loop, even at one point, makes it fire-and-check-and-forget. The pipeline should handle direction validation internally (which Wave 0.5, fresh-eyes metaphor validation, already does).

---

## 5. THE ANSWER

### Can a recipe produce DESIGNED (4/4)?

**YES, under specific conditions:**

1. **Content complexity is low-to-medium** (5-8 sections, 2-3 zones, clear structural hierarchy). The Middle experiment proves this.

2. **The builder is Opus** (not Sonnet). Every empirical data point supports this.

3. **The recipe encodes compositional INTENT, not just mechanical PROCEDURE.** The Middle recipe worked because it was short enough to be absorbed holistically and specific enough to guide decisions. The remediation spec worked less well because it was too long to absorb holistically, despite being individually excellent.

4. **The content doesn't require deep content-form resonance.** Pages about processes, tutorials, and structured information can be DESIGNED by recipe because the content structure maps naturally to visual structure. Pages about abstract ideas, emotional narratives, or philosophical arguments require content-form resonance that recipes can't prescribe.

### Is there an irreducible core?

**YES.** Four capabilities resist recipe encoding:

1. **Content-form resonance** (HIGH irreducibility) -- the page LOOKING LIKE what it's ABOUT
2. **Proportional intelligence** (MEDIUM irreducibility) -- knowing the right weight, not just the system
3. **Creative surprise** (HIGH irreducibility) -- the inevitable-in-retrospect decision
4. **Emergent coherence** (MEDIUM-HIGH irreducibility) -- the gestalt "I am in a different place" at boundaries

These four capabilities collectively account for the gap between 3/4 (COMPOSED) and 4/4 (DESIGNED). A recipe reliably produces the structural completeness, perceptual variation, and cohesive feel that define COMPOSED. The four irreducible capabilities produce the intentionality, specificity, and content-service that define DESIGNED.

### What does "past the recipe" look like?

**The most promising path is the Convention + Scaffold + Mid-Build Visual Evaluation model:**

1. TC planner derives semantic direction and zone architecture (TELESCOPE)
2. Fresh-eyes validates direction is structural (QUALITY GATE)
3. Opus builder receives:
   - Semantic direction + zone map (intent, not procedure)
   - 6 reference files (vocabulary, not instructions)
   - 100-line principles brief: "What must be true" (SCAFFOLD)
   - Perception thresholds (FLOOR)
4. Builder composes freely, rendering and visually evaluating at key junctures (METACOGNITIVE LOOP)
5. Builder produces cascade value table (PROOF)
6. 12 programmatic gates verify compliance (AUTOMATED VERIFICATION)
7. 9 PA auditors evaluate perception (EXTERNAL VERIFICATION)
8. Fix cycle if needed (ITERATION)

This architecture preserves all 4 irreducible capabilities while providing the floor (gates + thresholds) that prevents catastrophic failure. It is Architecture C from Report 29 with the addition of mid-build visual evaluation from Report 21.

**Expected outcome:** PA-05 >= 3/4 (from gates + PA floor) with a realistic path to 4/4 (from preserved compositional freedom + visual feedback loop). Variance will be higher than the pure recipe approach. Some builds will be 2.5/4, others 4/4. The fix cycle narrows the distribution upward.

---

## 6. THE UNCOMFORTABLE TRUTH

### The recipe is not the bottleneck. The QUESTION is the bottleneck.

The question "can a recipe produce DESIGNED?" assumes that recipes and composition are on the same axis -- that more recipe moves you toward COMPOSED and less recipe moves you toward DESIGNED. The evidence does not support this linear model.

The actual model is two-dimensional:

```
                     HIGH COMPOSITIONAL FREEDOM
                              |
                    CD-006    |
                    (39/40)   |
                              |
                              |   Middle (4/4)
    LOW                       |                     HIGH
    SPECIFICITY ──────────────┼──────────────────── SPECIFICITY
                              |
                              |   Remediation (2.5/4)
                              |
                    Flagship  |
                    (1.5/4)   |
                              |
                     LOW COMPOSITIONAL FREEDOM
```

CD-006 has HIGH freedom + LOW specificity. Middle has MODERATE freedom + HIGH specificity. Remediation has LOW freedom + HIGH specificity. Flagship has LOW freedom + LOW specificity (because the checklist format gave no specific values AND no compositional freedom -- the worst of both worlds).

**The winning quadrant is HIGH specificity + HIGH freedom.** Give the builder specific, measurable constraints (perception thresholds, soul prohibitions) AND compositional freedom (convention-style direction, not step-by-step recipe). This is the quadrant no experiment has tested.

The Middle experiment approached this quadrant (100-line recipe with specific values + creative latitude for layout decisions). CD-006 was in the HIGH freedom / LOW specificity quadrant (convention-only, no thresholds). Neither occupied the theoretical optimum.

### The experiment that should be run

**Architecture D: Maximum specificity + maximum freedom.**

- All perception thresholds specified (>= 15 RGB, >= 2px font-size, <= 108px gap, etc.)
- All soul constraints specified (border-radius: 0, box-shadow: none, etc.)
- Full component library available (merged-components.css)
- Full mechanism catalog available (mechanism-catalog.md)
- Semantic direction from TC planner
- NO recipe. NO phase sequence. NO mandatory checkpoints.
- Instruction: "Build a page where every visual decision serves the semantic direction. Use the component library (>= 10/26 classes). Meet all perception thresholds. Meet all soul constraints. Render and evaluate your work visually at least 3 times during building. Produce a cascade value table. Make it DESIGNED."
- Programmatic gates verify thresholds
- 9 PA auditors evaluate perception

This isolates the question: is the recipe a scaffold or a cage? If Architecture D produces >= 3/4, the recipe is unnecessary complexity. If it produces < 3/4, the recipe provides genuine value that goes beyond the thresholds and constraints.

My prediction: Architecture D produces 3.0-3.5/4 on first build, improving to 3.5-4.0/4 with one fix cycle. The recipe is a cage, not a scaffold -- and the cage costs 0.5-1.0 points of compositional quality by fragmenting the builder's attention and constraining its creative decisions.

---

## 7. SYNTHESIS: THE RECIPE CEILING IS REAL BUT MOVABLE

### The ceiling is not at a fixed PA-05 score.

The ceiling is at the BOUNDARY between what can be pre-specified and what must be composed in the moment. For simple content, that boundary is high -- recipes can pre-specify almost everything because the content-form mapping is straightforward. For complex content, the boundary is lower -- more decisions require in-the-moment compositional judgment.

### The ceiling MOVES based on three variables:

1. **Content complexity.** Low complexity = high recipe ceiling (4/4 achievable). High complexity = lower recipe ceiling (3/4 achievable).

2. **Recipe format.** Convention-style recipes (WHAT to achieve + WHY) have higher ceilings than procedure-style recipes (HOW to do it, step by step). The Middle recipe worked partly because it was short enough to function as a convention set -- the builder absorbed it holistically and composed freely within it.

3. **Builder capability.** Opus with recipes hits higher ceilings than Sonnet with the same recipe. Opus treats recipes as guidelines; Sonnet treats them as laws. The difference accounts for ~0.5-1.0 PA-05 points (the Sonnet-for-builders finding that remains unexamined experimentally).

### The practical recommendation:

**Do not choose between recipe and convention. Use BOTH, layered:**

- CONVENTION layer (50 lines): Semantic direction, compositional principles, "What must be true." This is the TELESCOPE. It tells the builder WHAT to achieve and WHY. It preserves compositional freedom.

- THRESHOLD layer (80 lines): Perception thresholds, measurable minimums, binary compliance checks. This is the FLOOR. It prevents catastrophic failure. It does not constrain composition.

- REFERENCE layer (500+ lines): Tokens.css, prohibitions.md, mechanism-catalog.md, merged-components.css. This is the VOCABULARY. It gives the builder materials to compose with. It does not prescribe how to use them.

- RECIPE layer (100 lines, OPTIONAL): Phase suggestions, "you might want to establish zones before borders." This is the SCAFFOLD -- not mandatory, not phase-gated, not checkpoint-enforced. Available if the builder wants sequential guidance. Ignorable if the builder has a better idea.

- VERIFICATION layer (gates + PA): Binary compliance + perceptual evaluation. This is the PROOF. It catches what the builder misses and provides the feedback loop that human iteration provided for CD-006.

Total builder input: ~730 lines across 6-7 files. Of those, ~50 lines are convention (freedom-preserving), ~80 lines are thresholds (floor-setting), ~100 lines are optional recipe (scaffold), and ~500 lines are reference materials.

This is 80 lines MORE than the Middle experiment's successful 100-line recipe and 80 lines LESS than PV2's 650-line mandatory recipe. It preserves the Middle experiment's demonstrated success path (short, specific, convention-like) while adding the perception thresholds that the Middle experiment didn't need (its content was simple enough that Opus naturally produced visible styling).

### The irreducible core remains irreducible.

Content-form resonance, proportional intelligence, creative surprise, and emergent coherence cannot be encoded in any instruction format. They emerge from a skilled builder deeply understanding the content and composing freely within clear constraints. The best the pipeline can do is:

1. GIVE the builder deep content understanding (TC planner's analysis)
2. GIVE the builder a rich vocabulary (mechanism catalog, component library)
3. SET a perceptual floor (thresholds)
4. VERIFY the result externally (gates + PA)
5. ITERATE if needed (fix cycle)
6. GET OUT OF THE WAY for everything else

This is not "no recipe." This is "recipe as optional scaffold within a convention-driven, verification-backed architecture." The recipe remains available for builders who want sequential guidance. It is not mandatory for builders who don't. The verification layer catches failures regardless of whether the builder used the recipe.

**The recipe ceiling is real. The way past it is not to write a better recipe. It is to trust the builder more, verify more rigorously, and iterate when needed.**

---

## APPENDIX A: Scoring the 4 Candidates for "Past the Recipe"

| Approach | Preserves Irreducible Core? | Fire-and-Forget? | Expected Floor | Expected Ceiling | Evidence | Recommendation |
|----------|---------------------------|-----------------|----------------|-----------------|----------|----------------|
| Convention + Verification | YES (all 4) | YES | 2/4 (no structural guarantee) | 4/4 | MODERATE (CD-006 extrapolation) | PROMISING but risky floor |
| Iterative Refinement (Phase 6.5) | PARTIAL (adds metacognition) | YES | 3/4 (recipe provides floor) | 3.5/4 | LOW (untested) | CHEAPEST single improvement |
| Visual Eval at Every Phase | PARTIAL (adds metacognition) | YES | 3/4 (recipe provides floor) | 3.5-4/4 | LOW (untested) | HIGH VALUE, moderate cost |
| Human-in-the-Loop at Direction | YES (preserves all 4) | NO | 3/4 | 4/4 | MODERATE (CD-006 model) | REJECT (violates user contract) |

**Recommended combination:** Convention + Verification as the primary architecture, with Visual Eval at Key Junctures as the metacognitive enhancement. The recipe becomes an optional scaffold available to the builder, not a mandatory sequential program.

## APPENDIX B: The Two-Dimensional Model

The investigation has treated instruction type as a one-dimensional axis (checklist -> recipe -> convention). The evidence suggests a two-dimensional space:

**Dimension 1: Specificity** (how precise are the measurable constraints?)
- LOW: "use warm colors" / HIGH: "zone backgrounds >= 15 RGB delta, R >= G >= B"

**Dimension 2: Freedom** (how much compositional latitude does the builder have?)
- LOW: "Phase 3: Set bg to #fefcf3" / HIGH: "zones must be visibly distinct; choose colors that serve the semantic direction"

The four experiments map to four quadrants:

| | Low Freedom | High Freedom |
|---|---|---|
| **Low Specificity** | Flagship (1.5/4) | CD-006 (39/40) |
| **High Specificity** | Remediation (2.5/4) | Middle (~4/4) |

**The untested quadrant is High Specificity + Maximum Freedom** -- all thresholds and constraints specified, zero procedural steps. This is Architecture D from Section 6.

The evidence predicts that this quadrant would produce the highest quality consistently, because:
- High specificity prevents catastrophic failure (flagship's 1-8 RGB deltas)
- High freedom preserves compositional intelligence (CD-006's 39/40)
- The combination gives the builder a rich palette AND the freedom to paint

PV2's recipe occupies the High Specificity + Low Freedom quadrant (with the remediation). Moving the recipe from mandatory to optional -- while keeping all thresholds mandatory -- shifts the architecture toward the High Specificity + High Freedom quadrant. This is the direction the evidence points.

---

**END OF RECIPE CEILING ANALYSIS**

**Key findings:**
1. A recipe CAN produce 4/4, but only for low-medium complexity content with an Opus builder
2. Four irreducible capabilities resist recipe encoding: content-form resonance, proportional intelligence, creative surprise, emergent coherence
3. The most promising "past the recipe" architecture is Convention + Scaffold + Mid-Build Visual Evaluation + Gates + PA
4. The recipe ceiling is variable (not fixed at 3/4), depending on content complexity, recipe format, and builder capability
5. The investigation should test Architecture D (max specificity + max freedom) to empirically resolve the recipe vs convention debate
6. The two-dimensional model (specificity x freedom) explains all 4 experiments better than the one-dimensional model (checklist -> recipe -> convention)

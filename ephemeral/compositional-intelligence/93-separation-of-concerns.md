# SEPARATION OF CONCERNS ANALYSIS — PV2 Stage-by-Stage

**Author:** Separation of Concerns Analyst (Opus 4.6)
**Task:** #93
**Date:** 2026-02-19
**Sources:**
- PV2-PIPELINE-DIAGRAM.md (977 lines, canonical PV2 architecture)
- 17-design-recipe-restructure.md (1,128 lines, recipe phase restructuring)
- 23-skill-audit-tc.md (421 lines, TC skill classification)
- 25-skill-pipeline-arch.md (635 lines, skill invocation architecture)
- 28-meta-propagation.md (639 lines, propagation without loss analysis)

---

## EXECUTIVE SUMMARY

The user's question is architectural: how do you structure PV2 so that each stage does its job cleanly without contaminating adjacent stages, and without the separation itself creating gaps that degrade output?

**The core finding:** PV2's separation of concerns is MOSTLY correct but has three structural violations and two structural gaps:

**VIOLATIONS (where concerns bleed):**
1. TC SKILL.md contains 624 lines (32.3%) of builder content -- the planner does the builder's thinking
2. The operational recipe is content-agnostic -- the procedural layer doesn't carry compositional intelligence
3. Fix cycle receives perception-language issues -- the fixer must re-derive compositional diagnosis from symptoms

**GAPS (where separation creates voids):**
1. The builder cannot ask TC clarification questions -- one-way information flow at the most critical boundary
2. No mechanism exists to connect PA findings back to compositional decisions -- perception and composition are decoupled at the fix boundary

**The deeper insight:** The right separation is not by AGENT (who does what) but by INTELLIGENCE TYPE (declarative, procedural, visual, compositional, perceptual, calibrational). Each type should propagate in its optimal format and each stage should consume only the types it needs.

---

## 1. WAVE 0: TENSION-COMPOSITION (TC PLANNER)

### Clean Responsibility

TC is the TELESCOPE. Its job is to:
- Read the content markdown (the ONLY agent that sees full content)
- Analyze reader needs across multiple cognitive axes
- Derive genuine tensions between those needs
- Collapse tensions into a structural metaphor (or determine FLAT MODE)
- Specify zone architecture, mechanism deployment, transition plan
- Output `_build-plan.md` (or `_build-recipe.md` under Report 17's restructuring)

TC answers ONE question: **"What visual form does this content need?"**

### What TC Should NOT Do

1. **Write CSS.** TC's output is declarative (WHAT) and compositional (WHY), never procedural (HOW). CSS lookup tables, translation grammars, and component CSS patterns are the builder's domain.

2. **Specify exact pixel values for layout.** TC should specify zone backgrounds (hex colors), mechanism categories, and transition types. It should NOT specify `padding: 64px 32px` -- that's a recipe/builder decision that depends on the HTML structure TC hasn't seen.

3. **Verify output.** TC has no verification role. It does not check whether the builder followed its plan. Verification belongs to Wave 2.

4. **Judge compositional quality.** TC generates compositional architecture. Judging whether that architecture WORKS is PA's job (Wave 2). TC self-evaluating its own metaphor is the F-40 bias problem that Wave 0.5 exists to catch.

5. **Route between tiers.** Under ALWAYS FLAGSHIP, tier routing is dead code. TC always runs full Phases 0-3.5.

### What DEGRADES When TC Does Builder Work

Report 23 identifies that the current TC SKILL.md contains 624 lines (32.3%) of builder-oriented content:
- Phase 4.0: Perceptual guardrails with CSS examples (174 lines)
- Step 4.2: CSS translation grammar lookup tables (84 lines)
- Phase 4.7B: Landmark completeness gate (67 lines)
- Phase 4.9: Tokenization self-check (75 lines)
- Phase 5 Output: Two-output format that includes HTML (58 lines)
- Builder appendices: Warnings + guardrails (132 lines)

When TC carries this builder content:

**DEGRADATION 1: Context dilution.** The TC planner reads 1,933 lines. Only 718 lines (37.1%) are invocational -- directly causing creative analysis. The remaining 63% competes for context attention with the creative engine. The planner's axis questioning, tension derivation, and metaphor scoring -- THE most valuable content in the entire pipeline -- get attention-diluted by CSS lookup tables the planner will never write.

**DEGRADATION 2: Role confusion.** The planner sees CSS patterns and begins thinking about implementation during the planning phase. This is the "am I about to build or about to plan?" self-test in the recipe's Phase 0 -- but the self-test exists BECAUSE the planner's own skill file primes it to think about building. Remove the builder content and the self-test becomes unnecessary.

**DEGRADATION 3: Output format contamination.** TC Phase 5 specifies "Generate TWO outputs: A thought process document and an HTML compositional layout." Under PV2, TC generates ONE output: `_build-plan.md`. The old two-output spec contradicts PV2 architecture and could cause TC to waste 30+ minutes generating HTML that the builder will rebuild from scratch.

**DEGRADATION 4: Guardrail duplication.** TC Phase 4.0 contains perceptual guardrails (container width, CPL, compression ratio) that also exist in `perception-thresholds.md`, `operational-recipe.md`, and the gate runner. Four copies of the same constraints means four places to update when thresholds change. It also means the planner spends tokens reading constraints the builder enforces and the gate runner verifies.

### How to Enforce the Boundary

**STRUCTURAL enforcement:**
1. Remove Phase 4+ from TC SKILL.md entirely (Report 23's P0 recommendation). TC becomes Phases 0-3.5 only (~650-700 lines, -64%).
2. TC's output contract: `_build-plan.md` must contain zones, mechanisms, transitions, metaphor, and coherence direction. Must NOT contain CSS, HTML, or pixel-level layout.
3. Handoff gate (Wave 0.9) validates _build-plan.md structure, not content quality.

**COGNITIVE enforcement:**
1. TC SKILL.md opens with a 3-line identity statement: "You are analyzing content and deriving compositional architecture. You are NOT writing CSS, HTML, or layout. Your output is a build plan, not a page."
2. Phase 3.5 (Lock-In Gate) marks the end of TC's responsibility. After commitment, TC is DONE.

---

## 2. WAVE 0.5: METAPHOR VALIDATION

### Clean Responsibility

The fresh-eyes agent answers ONE binary question: **"Does this metaphor suggest specific CSS, or is it just a label?"**

STRUCTURAL = CSS-suggestive (proceed)
ANNOUNCED = label-only (return to TC or FLAT mode)

### What Wave 0.5 Should NOT Do

1. **Read the content.** The validator reads ONLY the metaphor description. Content context would allow it to rationalize a weak metaphor.

2. **Read the tension derivation.** Understanding HOW the metaphor was derived creates sympathy for it. The validator must be cold.

3. **Suggest alternatives.** The validator's job is binary judgment, not creative contribution. "This metaphor is ANNOUNCED" is sufficient. "This metaphor is ANNOUNCED, try 'geological strata' instead" introduces the validator's biases into TC's creative process.

4. **Evaluate compositional quality.** Whether the metaphor is GOOD (rich, resonant) vs BAD (shallow, forced) is not the question. The question is whether it's STRUCTURAL (suggests CSS forms) vs ANNOUNCED (requires labels to connect).

### What DEGRADES When the Boundary Bleeds

**If the validator reads content:** Continuation bias. "Well, the content IS about geological layers, so the metaphor kind of works..." -- this is the same F-40 self-evaluation bias the validator exists to prevent.

**If the validator suggests alternatives:** The TC planner's metaphor derivation (Phases 1-3) is a 30-60 minute creative process grounded in content-specific axis questioning. A 5-minute validator cannot produce a better alternative. Suggestions from the validator would be superficial and could derail TC's re-derivation.

**If the validator evaluates quality:** Mission creep. The validator becomes a mini-PA, delaying the pipeline by 15-20 minutes for quality evaluation that PA will do comprehensively in Wave 2.

### How to Enforce the Boundary

**STRUCTURAL enforcement:**
1. The orchestrator extracts ONLY the metaphor description paragraph from `_build-plan.md` and passes it to the validator as a string. The validator has no file path to the full build plan.
2. The validator's prompt contains: "You will read a metaphor description. Answer ONLY: does this description suggest specific CSS forms (STRUCTURAL) or is it just a label (ANNOUNCED)? Do not suggest alternatives."

---

## 3. WAVE 0.9: HANDOFF VALIDATION GATE

### Clean Responsibility

The handoff gate answers ONE question: **"Is the build plan structurally complete?"**

Five binary checks:
1. Zone count 2-5?
2. BG colors >= 15 RGB delta between adjacent zones?
3. >= 2 grid layouts planned?
4. Per-category mechanism minimums met (S/T/M/B/R each 1+)?
5. >= 3 transition types planned?

(Report 17 proposes 2 additional checks: recipe instance has phase sections; each section has semantic justification.)

### What Wave 0.9 Should NOT Do

1. **Judge compositional quality.** "Are these the RIGHT mechanisms for this content?" is not the gate's question. The gate checks that mechanisms EXIST in each category, not that they're well-chosen. Quality judgment is PA's job.

2. **Verify the metaphor.** Wave 0.5 already validated whether the metaphor is structural. The handoff gate should not re-evaluate.

3. **Suggest improvements.** The gate is BINARY. Pass or fail. If the build plan has only 2 transition types, the response is "FAIL: need >= 3 transition types." Not "FAIL: consider adding a BREATHING transition between zones 3 and 4 because the content shifts from technical to reflective." That reasoning is TC's job.

4. **Evaluate content-to-metaphor fit.** Whether "geological strata" is the right metaphor for a research synthesis is TC's decision. The gate cannot second-guess it.

### What DEGRADES When the Gate Tries Quality

**If the gate judges quality:** The gate becomes a bottleneck. Instead of a 1-minute binary check, it becomes a 10-minute quality evaluation. Every additional minute at the gate delays the 90-150 minute build.

**If the gate suggests improvements:** The feedback loop becomes ambiguous. TC re-derives based on gate feedback, but the gate's feedback is less informed than TC's original analysis (the gate didn't read the content, didn't do axis questioning, didn't derive tensions). Gate suggestions are guaranteed to be shallower than TC's own judgment.

**If the gate evaluates fit:** Scope creep toward a pre-PA. If the gate can evaluate content-metaphor fit, why not also evaluate mechanism-zone mapping? And if it evaluates that, why not also evaluate transition appropriateness? The gate becomes an unbounded quality review.

### How to Enforce the Boundary

**STRUCTURAL enforcement:**
1. The gate is implemented as a PARSER, not an AGENT. The orchestrator runs 5 (or 7) regex/value checks against `_build-plan.md`. No LLM judgment involved.
2. Gate output is a JSON array of PASS/FAIL with measured values: `[{"check": "zone_count", "value": 4, "threshold": "2-5", "result": "PASS"}]`
3. On failure, the orchestrator sends TC a SPECIFIC failure message: "BG delta between zone 2 (#f0ebe3) and zone 3 (#eee9e0) is 6 RGB points. Minimum is 15." No advice, no suggestions, just the failing measurement.

---

## 4. WAVE 1: BUILD EXECUTION (OPUS BUILDER)

### Clean Responsibility

The builder is the MICROSCOPE. Its job is to:
- Read the recipe template (procedural: WHAT to do in what order)
- Read the build plan (declarative: WHAT values to use, WHY)
- Read reference files (vocabulary: tokens, prohibitions, components, mechanisms)
- Execute 9 sequential recipe phases
- Write CSS + HTML that implements the plan
- Produce a cascade value table (prove coherence)

The builder answers ONE question: **"How do I turn this plan into CSS/HTML?"**

### What the Builder Should NOT Do

1. **Re-derive the metaphor.** TC spent 30-60 minutes on metaphor derivation. The builder should TRUST the metaphor, not re-analyze the content and decide "actually, botanical growth fits better." The recipe's Phase 0 self-test ("Am I about to BUILD or about to PLAN?") exists precisely to catch this.

2. **Question the zone architecture.** If TC specified 4 zones with these sections in these zones, the builder implements that architecture. The builder may flag concerns (via checkpoint communication), but should not unilaterally redesign.

3. **Invent new mechanisms.** The build plan specifies which mechanisms from which categories. The builder deploys them. The builder does NOT browse the mechanism catalog for additional mechanisms TC didn't select. If the builder feels a mechanism is missing, that's a checkpoint communication -- not a unilateral addition.

4. **Skip recipe phases.** The recipe is sequential for a reason (Report 17: scale-organized phases build from macro to micro). The builder cannot decide "Phase 7 (accessibility) is boring, I'll do it later" or "Phase 3 (backgrounds) is obvious, I'll combine it with Phase 4." Phase ordering IS the recipe's intelligence.

5. **Evaluate its own compositional quality.** Phase 8 self-checks ("Can you SEE zone boundaries?") are PERCEPTUAL self-checks, not COMPOSITIONAL self-evaluations. The builder can check "are the zone boundaries visible?" but not "is this page DESIGNED?" The latter is PA's question.

### What DEGRADES When the Builder Re-Plans

**If the builder re-derives the metaphor:** 30-60 minutes of builder time spent on analysis that TC already completed. The builder's metaphor will be shallower (it hasn't done axis questioning or tension derivation). The resulting CSS serves two masters -- TC's architecture and the builder's improvised metaphor -- creating incoherence.

This is precisely what happened in the flagship experiment. The builder received a checklist (not a recipe) and had to re-derive compositional decisions from constraints. The result: 22% of CSS budget spent on sub-perceptual micro-typography (letter-spacing 0.001-0.01em) because the builder optimized for "refinement gradients" instead of executing the planned architecture.

**If the builder questions zone architecture:** The cascade value table becomes unpredictable. TC planned for 4 zones with specific channel shifts at each boundary. If the builder merges zones 2 and 3, the planned transition (BRIDGE) becomes meaningless, the planned mechanism deployment doesn't match the actual HTML, and the programmatic gates (SC-09, SC-12) may fail.

**If the builder invents new mechanisms:** Mechanism count inflation without compositional purpose. The flagship had 14 mechanisms but most were imperceptible (letter-spacing at 0.001em IS technically a mechanism, but it's perceptually null). Richness is not linear with mechanism count (MEMORY.md: "REJECT: Technique count metric"). The builder adding mechanisms beyond TC's selection dilutes the ones TC carefully chose.

**If the builder skips phases:** Phases build on each other. Phase 3 (backgrounds) defines the chromatic channel. Phase 4 (borders) defines the structural channel. Phase 5 (typography) defines the typographic channel. Phase 8 (verification) checks that >= 3 channels shift at each boundary. If the builder reorders phases, the inline boundary checkpoints (Report 17's hybrid) become meaningless.

### Where the Builder SHOULD Have Creative Freedom

This is the telescope + microscope question. TC is the telescope (sees the whole content, derives intent). The builder is the microscope (sees each element, writes each CSS rule). Between telescope and microscope there is a NECESSARY creative gap: the builder must decide HOW to implement "border-weight gradient" in CSS for THIS specific HTML structure.

The builder's creative freedom is:
- CSS implementation details (which selectors, which cascade strategy)
- HTML structural decisions (which semantic elements, which ARIA patterns)
- Component adaptation (how .callout-box looks in THIS zone)
- Responsive adaptations (how the zone architecture works at 768px)
- Micro-interactions (hover states, focus styles, transition timing)

These are MICROSCOPE decisions. They require seeing the actual HTML structure and making element-level choices. TC cannot make them because TC doesn't see HTML.

**The boundary rule:** TC decides WHAT and WHY. The builder decides HOW and WHERE (within the plan). If the builder's HOW contradicts TC's WHAT, the builder should communicate through a checkpoint -- not unilaterally override.

### How to Enforce the Boundary

**STRUCTURAL enforcement:**
1. The recipe's Phase 0 starts with: "Read _build-plan.md. Confirm understanding. You are IMPLEMENTING this plan, not redesigning it."
2. The 5 mandatory checkpoints (Phases 0, 1, 3, 4, 8) create structured communication. The planner reviews builder output and catches deviations before they compound.
3. The cascade value table (Phase 8) is REQUIRED. The builder must PROVE coherence with measured values, not claim it.

**COGNITIVE enforcement:**
1. Recipe format uses ACTION verbs ("Set," "Apply," "Deploy," "Verify") not JUDGMENT verbs ("Ensure," "Consider," "Evaluate"). Action verbs prime execution; judgment verbs prime analysis.
2. Each phase's instruction starts with "Read _build-recipe.md Phase [N] Instance" -- anchoring the builder to TC's plan.
3. Report 17's recipe instance includes BECAUSE clauses that explain WHY each value was chosen. The builder reads WHY and implements HOW, rather than having to re-derive WHY from mechanism names alone.

---

## 5. WAVE 2: DUAL-LAYER VERIFICATION

### 5a. Programmatic Gates (Gate Runner)

### Clean Responsibility

The gate runner answers ONE question: **"Does the HTML/CSS meet 12 binary thresholds?"**

It measures. It does not judge. SC-09 checks whether adjacent zone backgrounds have >= 15 RGB delta. It does not evaluate whether the zone colors are APPROPRIATE for the content.

### What the Gate Runner Should NOT Do

1. **Evaluate compositional quality.** "Is this page designed?" is not a binary threshold question. The gate runner checks properties that CAN be measured programmatically: container width, ARIA landmarks, font-size deltas, background deltas, stacked gaps.

2. **Suggest fixes.** The gate runner outputs: `SC-09: FAIL. Zone 2 (#f0ebe3) to Zone 3 (#eee9e0) delta = 6 RGB. Threshold >= 15.` It does NOT output: "Consider using a darker color for Zone 3." Suggesting fixes is the builder's job in Wave 3.

3. **Weight or prioritize gates.** All 12 gates are BLOCKING under ALWAYS FLAGSHIP. The gate runner does not decide "SC-01 (container width) is more important than SC-06 (ARIA landmarks)." All fail equally.

### 5b. Perceptual Audit (9 PA Auditors)

### Clean Responsibility

PA auditors answer ONE question: **"Does this page FEEL designed to a reader who has zero knowledge of how it was built?"**

They see ONLY screenshots. They answer assigned questions from the 48-question PA set. They produce independent reports.

### What PA Auditors Should NOT Do

1. **Read the recipe, build plan, or any build artifact.** The fresh-eyes principle is NON-NEGOTIABLE. PA auditors evaluate PERCEPTION, not COMPLIANCE. "Did the builder follow Phase 3?" is not their question. "Can I see where zones change?" is.

2. **Suggest specific CSS fixes.** "Add `border-left: 4px solid #5c4b3a` to callout elements" requires CSS knowledge and build context. PA auditors should say: "Callout boxes are visually indistinct from body text. No visual marker separates them." The builder translates perception into CSS.

3. **Evaluate content appropriateness.** "Is this the right metaphor for research synthesis?" is TC's domain. PA evaluates whether the visual result FEELS intentional, regardless of whether the metaphor is "correct."

4. **Coordinate with other auditors.** Each auditor is INDEPENDENT. The PA weaver (who synthesizes 9 reports) identifies convergent findings. Individual auditors should not try to produce a consensus report.

### What DEGRADES When Verifiers Try to Be Designers

**If PA auditors suggest CSS:** The fix cycle builder receives CSS suggestions from agents who haven't seen the HTML structure, don't know the cascade order, and can't test their suggestions. The builder implements the suggestion, it conflicts with the existing cascade, and the fix creates new problems.

**If PA auditors read build context:** Compliance evaluation replaces perception evaluation. "The builder specified >= 15 RGB delta and achieved 16, so backgrounds PASS" -- but 16 RGB delta in this specific color range might still be imperceptible. The flagship's programmatic gates ALL PASSED. The PA (correctly operating without build context) found the backgrounds imperceptible. Context-free evaluation caught what context-aware evaluation missed.

**If PA auditors coordinate:** Groupthink. The flagship's whitespace void was found by 9/9 independent auditors. If they'd coordinated, the first auditor might have said "whitespace void" and the remaining 8 might have anchored on that finding, missing subtler issues. Independence generates breadth.

### How to Enforce the Boundary

**STRUCTURAL enforcement:**
1. Screenshot pre-capture pattern. Team lead takes ALL screenshots BEFORE spawning auditors. Auditors receive file paths to images, not Playwright access. They literally CANNOT access the HTML/CSS.
2. Each auditor receives: (a) image file paths, (b) assigned PA questions, (c) NOTHING ELSE. No recipe, no plan, no build log.
3. The PA weaver reads 9 reports and produces convergence analysis. The weaver does NOT read build artifacts either.

**OUTPUT FORMAT enforcement:**
1. PA reports use PERCEPTUAL language: "Zone boundaries are barely visible." Not CSS language: "Background delta is too low."
2. PA-05 score is described in experiential terms: FLAT (uniform), STYLED (some variation), COMPOSED (clear hierarchy), DESIGNED (intentional purpose). These are PERCEPTION scores, not COMPLIANCE scores.

---

## 6. WAVE 3: FIX INTEGRATION

### Clean Responsibility

The fix cycle answers ONE question: **"Can targeted changes address the top-3 blocking issues without redesigning the page?"**

The builder reads PA's top-3 issues (in perception language), translates them to CSS/HTML changes, applies fixes, and gets a 2-PA re-check.

### What Wave 3 Should NOT Do

1. **Redesign the page.** If PA says "whitespace void at 70-80%," the fix is NOT "redesign the zone architecture." The fix is "add content to empty zones" or "reduce zone padding" or "add visual elements to fill the void." The zone architecture was TC's decision. The fix adjusts within that architecture.

2. **Add new features.** "The page would benefit from a table of contents" is a new feature, not a fix. The fix cycle addresses BLOCKING ISSUES identified by PA, not enhancement opportunities.

3. **Expand scope.** If PA identified 7 issues and the weaver ranked the top 3, the builder fixes the top 3. Not all 7. If the top 3 are fixed and the page reaches PA-05 >= 3/4, the remaining 4 issues are acceptable imperfections.

4. **Run a full Mode 4 PA.** Fix cycles use QUICK 2-PA re-checks, not full 9-auditor Mode 4. The full PA happened in Wave 2. The re-check confirms improvement. This is deliberate -- Mode 4 for every fix cycle would triple Wave 3's duration.

### What DEGRADES When Fixes Become Redesigns

**If the fix cycle redesigns:** The builder writes 200+ new CSS lines, changes the HTML structure, introduces new mechanisms TC didn't plan. The cascade value table from Phase 8 becomes invalid. Programmatic gates may break (new structure, different selectors). The 2-PA re-check evaluates a substantially different page -- it's no longer a "fix" check, it's a full build evaluation.

The flagship remediation demonstrated this danger. The remediation spec was 1,025 lines across 9 phases -- essentially a full rebuild specification. While it improved PA-05 from 1.5 to 2.5 (+1.0), it was a REMEDIATION (substantial redesign), not a FIX CYCLE (targeted changes). PV2's fix cycle should not become a remediation cycle.

**If fixes expand scope:** Each fix cycle takes 30-60 minutes. If the builder addresses 7 issues instead of 3, cycles take 60-120 minutes. Three cycles at 120 minutes = 360 minutes -- longer than the original build. The 3-issue cap prevents scope expansion.

**If fixes run full Mode 4:** 9 PA auditors x 30-45 minutes = significant time per fix cycle. Three fix cycles with Mode 4 = 90-135 minutes of verification alone. The 2-PA quick check reduces this to ~10-15 minutes per cycle. If the 2-PA can't confirm improvement, THEN escalate to the user rather than running Mode 4.

### How to Enforce the Boundary

**STRUCTURAL enforcement:**
1. Fix cycle prompt: "You are applying TARGETED FIXES to the top-3 issues identified by PA. Do not redesign the page. Do not add new features. Do not change the zone architecture."
2. Max 3 cycles is HARD-CODED. No "one more try" exception.
3. Fix cycle receives: (a) PA top-3 issues, (b) the original build plan, (c) the original recipe. The build plan ANCHORS the fix to TC's architecture.

**SCOPE enforcement:**
1. Each fix produces a DIFF, not a full rewrite. The orchestrator can measure: "How many CSS lines changed?" If > 100 lines changed in a "fix" cycle, it's a redesign, not a fix.
2. Quick 2-PA re-check asks: "Did the specific issue improve?" Not "Is the page now DESIGNED?" The re-check is targeted, not comprehensive.

---

## 7. CROSS-CUTTING ANALYSIS: IS THE CURRENT PV2 SEPARATION CORRECT?

### What PV2 Gets Right

**1. TC/Builder separation.** The telescope/microscope split is fundamentally sound. Creative-expansive analysis (axis questioning, tension derivation, metaphor collapse) and procedural-sequential execution (HTML skeleton, CSS phases, accessibility) are genuinely different cognitive modes. Asking one agent to do both degrades both. Report 25 confirms: "The cognitive mode separation (telescope vs microscope) is genuinely valuable."

**2. PA/Build separation.** Fresh-eyes perception evaluation is the pipeline's most important quality gate. Context-free auditors catch what context-laden builders miss. The whitespace void (9/9 auditors flagged it) is the proof case. This separation is non-negotiable.

**3. Orchestrator as sole coordinator.** Skills are leaves, not callers. TC does not invoke PA. PA does not invoke TC. The orchestrator routes all artifacts. This prevents circular dependencies and ensures deterministic flow.

**4. Serial chain with internal parallelism.** PLAN -> BUILD -> VERIFY is the minimal serial chain. You cannot verify what hasn't been built. You cannot build what hasn't been planned. The only parallelism (gate runner + 9 PA auditors) is within Wave 2, where both verify the same artifact independently.

### What PV2 Gets Wrong (or Could Improve)

**VIOLATION 1: TC carries builder content.**

The TC SKILL.md's Phase 4+ content (624 lines, 32.3%) belongs in the builder's domain. This is the most clearly fixable violation. Report 23 provides the exact cut: remove Phases 4+, relocate to operational-recipe.md / mechanism-catalog.md / perception-thresholds.md. TC shrinks from 1,933 to ~650-700 lines with 65% invocational content (up from 37%).

**Fix:** P0 priority. Remove Phase 4+ from TC SKILL.md.

**VIOLATION 2: Recipe is content-agnostic.**

The operational recipe (650 lines) says "apply >= 15 RGB delta" regardless of content. The content-specific intelligence lives ONLY in `_build-plan.md`. This creates the "mental merge" problem (Report 17): the builder must cross-reference two documents at every phase.

**Fix:** Report 17's two-layer architecture (template + instance). TC generates a `_build-recipe.md` that mirrors the recipe's phase structure with content-specific values. The builder reads "Phase 3: Zone 1 = #FEF9F5, Zone 2 = #F0EBE3, delta R-14 G-17 B-18 = PASS, BECAUSE surface layer is warm cream" instead of cross-referencing the generic recipe against the build plan.

**VIOLATION 3: Fix cycle receives perception-language issues.**

PA outputs "zone boundaries are barely visible." The fix cycle builder must translate this to "background delta is too low" and then to specific CSS changes. The translation from perception to composition to CSS is a lossy two-step process.

**Fix:** The PA weaver's output should include both perception language AND mechanism/CSS references where applicable. The weaver reads the gate runner's results alongside PA reports. "Zone boundaries barely visible (PA finding) + SC-09 delta = 6 RGB (gate measurement)" gives the fix builder both the perception symptom and the programmatic measurement.

**GAP 1: Builder cannot ask TC clarification questions.**

The 5 mandatory checkpoints are one-way: builder outputs, planner reviews. The builder cannot say "Is transition Z2->Z3 BRIDGE or BREATHING? The content doesn't clearly shift axis here." Report 25 proposes file-bus bidirectional communication or blocker escalation.

**Fix:** Add a `_builder-question.md` file to the communication protocol. If the builder writes a question, the orchestrator pauses build execution, routes the question to the TC planner (who still has content context), and routes the answer back. This costs ~5-10 minutes per question but prevents the builder from making a wrong guess that compounds over subsequent phases.

**GAP 2: No composition-perception bridge at fix boundary.**

PA finds perceptual issues. The builder needs compositional diagnoses. No mechanism connects the two. The cascade value table partially bridges this (it records computed CSS that PA can reference), but PA doesn't read the cascade table (it only reads screenshots).

**Fix:** The PA weaver gets access to the cascade value table (but NOT the recipe or build plan). The cascade table is MEASURED VALUES, not build context -- it's what the page IS, not what the builder intended. The weaver can then say: "Zone 2-3 boundary: background delta = 6 RGB (from cascade table). PA finding: boundary invisible. Fix: increase chromatic channel."

### Should the Builder Have MORE Creative Freedom?

**No, but freedom should be at the RIGHT level.**

The current PV2 gives the builder freedom at the wrong level. The recipe says "apply >= 15 RGB delta" (too abstract -- the builder must choose specific colors) but then the build plan says "#fefcf3, #f0ebe3, #faf5ed, #1a1a1a" (too specific -- no room for the builder's chromatic sensibility).

Report 17's restructuring corrects this: TC specifies the semantic direction (warm-cool-warm arc) and the verification threshold (>= 15 RGB), while the builder adapts within those constraints. The builder's creative freedom is in HOW to implement the semantic direction in CSS, not in WHETHER to follow it.

**The telescope + microscope metaphor is correctly calibrated:**
- TC: "This page needs 4 zones with a warm-cool-warm chromatic arc, border-weight gradient encoding confidence levels, and BREATHING transitions at major semantic shifts."
- Builder: "I'll implement the warm-cool-warm arc as #fefcf3 -> #f0ebe3 -> #faf5ed -> #1a1a1a (all >= 15 RGB delta). The border-weight gradient maps to 4px/3px/2px/1px using var(--color-text). BREATHING transitions get 80px margin + 3px decorative border."
- PA: "Zone boundaries are clearly visible. Typography hierarchy is distinct. The page feels COMPOSED."

Should the separation be STRICTER? Only at one point: the builder should not be able to ADD mechanisms beyond TC's selection. Report 17's recipe instance includes a "REJECTED mechanisms" section that tells the builder why certain mechanisms were NOT chosen. This prevents the builder from re-adding them.

---

## 8. THE DEEPER ARCHITECTURE: SEPARATION BY INTELLIGENCE TYPE

Report 28 identifies 6 types of intelligence that flow through PV2:

| Type | Description | Optimal Format | Which Stage Produces It | Which Stage Consumes It |
|------|-------------|----------------|------------------------|------------------------|
| Declarative | WHAT to do | Structured data (YAML) | TC | Builder |
| Procedural | HOW to do it | Sequenced recipe | Operational recipe (static) | Builder |
| Visual | WHAT it looks like | CSS code | TC (adapted snippets) + Builder (full CSS) | PA (as screenshots) |
| Compositional | WHY this combination | Prose with isomorphisms | TC | Builder (via build plan) |
| Perceptual | HOW it feels | Screenshots + PA reports | PA | Fix cycle builder |
| Calibrational | WHEN to adjust | Thresholds + examples | Perception-thresholds.md | Gate runner + Builder |

The current PV2 propagates ALL six types through prose markdown -- a format that's good for compositional and procedural intelligence but terrible for declarative and visual intelligence.

**The correct separation of concerns is by INTELLIGENCE TYPE, not just by STAGE.**

Each stage should:
1. PRODUCE the intelligence types it's responsible for
2. PROPAGATE them in the optimal format
3. CONSUME only the types it needs
4. NOT TRANSLATE intelligence types it doesn't own

**TC produces:** Declarative (zones, mechanisms, transitions) + Compositional (WHY)
**Recipe provides:** Procedural (phase ordering, action verbs)
**Builder produces:** Visual (CSS/HTML)
**Gate runner consumes:** Calibrational (thresholds) + Visual (computed styles)
**PA produces:** Perceptual (how it feels)

When a stage tries to produce an intelligence type it doesn't own, separation of concerns degrades:
- TC producing Visual intelligence (CSS lookup tables) = VIOLATION
- PA producing Compositional intelligence ("try border-weight gradient") = VIOLATION
- Gate runner producing Perceptual intelligence ("this looks flat") = VIOLATION
- Builder producing Declarative intelligence (re-deriving the metaphor) = VIOLATION

---

## 9. STAGE-BY-STAGE VERDICT TABLE

| Stage | Clean Responsibility | Current Violations | Degradation Risk | Enforcement Mechanism |
|-------|---------------------|-------------------|-----------------|----------------------|
| **Wave 0 (TC)** | Content analysis, tension derivation, metaphor collapse, build plan output | 624 lines (32.3%) of builder content; Phase 5 specifies HTML output | Builder content dilutes creative engine; role confusion primes planning-as-building | Remove Phase 4+; identity statement; output contract |
| **Wave 0.5 (Metaphor)** | Binary structural/announced judgment | None currently | Would degrade if validator reads content or suggests alternatives | Input restriction (metaphor string only); prompt constraint |
| **Wave 0.9 (Gate)** | 5 binary completeness checks | None currently | Would degrade if gate judges quality instead of completeness | Implement as parser not agent; output is JSON measurements |
| **Wave 1 (Build)** | Recipe execution, CSS/HTML production, cascade value table | Builder may re-derive metaphor under weak recipes; builder receives content-agnostic recipe | Re-derivation wastes time and introduces incoherence; mental merge across 6 files | Two-layer recipe (template + instance); action verbs; Phase 0 self-test; checkpoints |
| **Wave 2a (Gates)** | 12 binary threshold measurements | None currently | Would degrade if gates weighted or suggested fixes | PASS/FAIL output with measured values only |
| **Wave 2b (PA)** | Perception-only evaluation of screenshots | None currently | Would degrade if auditors read build context or suggest CSS | Screenshot pre-capture; zero build context; perceptual language only |
| **Wave 3 (Fix)** | Targeted CSS/HTML changes for top-3 issues | Perception-to-composition translation gap | Fixes may become redesigns; scope may expand | Fix prompt with scope constraint; max 3 cycles; diff-based measurement |

---

## 10. RECOMMENDATIONS

### P0 (Must Do Before Codifying PV2)

1. **Remove Phase 4+ from TC SKILL.md.** 1,933 -> ~650-700 lines. Relocate builder content to operational-recipe.md, mechanism-catalog.md, perception-thresholds.md. TC becomes Phases 0-3.5 only.

2. **Implement Report 17's two-layer recipe.** Template (~300 lines, static) + Instance (~200-400 lines, generated by TC per build). Eliminates the mental merge and embeds compositional intelligence in the recipe phases.

3. **Add scope constraint to fix cycle prompt.** "You are applying TARGETED FIXES to the top-3 issues. Do not redesign the page. Do not add new features. Max CSS change: 100 lines per fix cycle."

### P1 (Should Do)

4. **Add `_builder-question.md` communication protocol.** Builder can ask TC clarification questions through the file bus. Orchestrator routes. Cost: ~5-10 min per question. Prevents compounding errors.

5. **Give PA weaver access to cascade value table.** The weaver can link perceptual findings to measured CSS values, improving fix-cycle diagnosis accuracy. The cascade table is measured state, not build intent -- it doesn't violate fresh-eyes.

6. **Implement handoff gate as parser, not agent.** Pure text validation against a schema. No LLM judgment. Removes any temptation for the gate to evaluate quality.

### P2 (Could Do)

7. **Multi-format propagation per Report 28.** TC outputs structured YAML for declarative intelligence + CSS snippets for visual intelligence + prose for compositional intelligence. Each type in its optimal format. Estimated 2x intelligence survival.

8. **Builder diff measurement.** Orchestrator measures CSS lines changed in each fix cycle. If > 100 lines, flag as potential redesign for review.

9. **Rejected-mechanism propagation.** TC's build plan includes 3+ rejected mechanisms with reasons. Prevents the builder from independently adding them.

---

## 11. THE FUNDAMENTAL PRINCIPLE

Separation of concerns in PV2 serves a single purpose: **each stage should do what it's best at, consume what it needs, produce what others need, and NOT do what other stages do better.**

TC is best at creative analysis. Let it analyze. Don't make it write CSS.
The builder is best at CSS/HTML production. Let it build. Don't make it re-derive metaphors.
PA is best at perception. Let it perceive. Don't make it write code.
The gate runner is best at measurement. Let it measure. Don't make it judge.
The fix cycle is best at targeted changes. Let it fix. Don't make it redesign.

When each stage stays in its lane, the pipeline is a relay race where each runner covers their leg at maximum speed. When stages bleed into each other, the pipeline is a crowd all trying to run the same leg simultaneously.

The user asked for "maximum efficacy and maximum effort, not bogged down by a lack of separation of concerns." The answer: PV2's separation is 80% correct. The 20% that needs fixing is specific, identified, and fixable. Fix it, codify it, build a page, and measure whether the separation holds under real execution.

---

**END OF REPORT**

**Key files referenced:**
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/pipeline/PV2-PIPELINE-DIAGRAM.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/17-design-recipe-restructure.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/23-skill-audit-tc.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/25-skill-pipeline-arch.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/28-meta-propagation.md`

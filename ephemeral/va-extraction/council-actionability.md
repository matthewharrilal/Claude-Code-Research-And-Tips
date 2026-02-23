# Actionability Advocate Brief
Date: 2026-02-23

## Position Summary

The actionability audit (Diagram 23 / Report A7) represents the only voice in the entire Visual Architecture that asks: "But will this actually work when a builder agent sits down to build?" Every other diagram theorizes, models, classifies, or aspirates. Diagram 23 is the one that counted the lines, measured the effort, and sequenced the work. Its meta-recommendation -- 70% subtraction, 30% addition -- is not a philosophical preference. It is an empirical conclusion drawn from the fact that the Middle experiment (100-line recipe, PA-05 4/4 DESIGNED) outperformed the Flagship experiment (963-line checklist, PA-05 1.5/4 FLAT) by 2.5 points. More lines HURT. The evidence is unambiguous.

The actionability position can be stated in one sentence: **Remove the 900 lines that suppress quality, keep the 73 lines that enable it, test with the cheapest experiments first, and only invest in architecture after validation.** Every other diagram in the VA wants to ADD things -- emotional arcs, compositional registers, CCS measurements, atmospheric coupling, multi-channel encoding. The actionability audit says: before you add a single line, prove the lines you already have aren't killing quality. The N=4 evidence says they are.

The 87 contradiction candidates largely reduce to one master tension: **other diagrams want to build a cathedral; the actionability audit wants to prove the foundation holds first.** I will argue that the foundation-first approach is not just prudent but MANDATORY given that 9/10 assumptions in the VA are untested (N=0) per Diagram 24's own analysis.

---

## Contradiction Resolutions (Actionability Position)

### Pattern 1: GATES -> BUILDER (10 items)

#### Contradiction 1: Builder sees frameworks only vs. gate thresholds routing to builder
- **What the VA says:** Gate items (thresholds, pass/fail criteria) should NOT go to the builder -- the VA explicitly says "builder sees frameworks only" (ITEM 120). Yet 10 gate items are routed to the builder agent.
- **What the actionability audit says:** Perception thresholds (#2) MUST reach the builder directly. This is item #2 on the priority list, 8 lines, breaks Chain A + Chain E. The builder who doesn't know that backgrounds must differ by >= 15 RGB will produce invisible CSS -- as happened in the Flagship experiment.
- **My argument:** The VA's blanket rule "builder sees no gate thresholds" is the EXACT suppressor that caused PA-05 1.5/4. The builder in the Flagship experiment literally could not see perception thresholds and produced letter-spacing of 0.001em -- technically "correct" by the checklist, perceptually invisible. The Gas Town builder succeeded BECAUSE it overrode conventions brief values using perception thresholds. This is not a contradiction -- it is a correction. Thresholds are not "gates" for the builder; they are CALIBRATION. The builder needs to know "what is visible" to write visible CSS. Withholding this is like telling a painter to use colors but not telling them the canvas is white.
- **Recommended resolution:** GATES items that are PERCEPTION THRESHOLDS (background delta >= 15 RGB, letter-spacing >= 0.025em, stacked gap <= 120px, border weights 4/3/1px) route to BOTH gate-runner AND builder. The builder receives them as calibration, not as pass/fail gates. Items that are pure VERIFICATION (container width check, mechanism count check) stay gate-runner-only. This is the actionability audit's Tier 1 item #2.

#### Contradiction 2: Recipe format (ITEM 138) classified as GATES but routed to builder
- **What the VA says:** Recipe format is a GATES-layer item.
- **What the actionability audit says:** Recipe format is the #1 lever across the entire pipeline. It is the builder's FORMAT, not a gate. Classifying it as GATES is a category error.
- **My argument:** Recipe format is not a gate. It is the builder's operating mode. "Verify X" vs "Deploy X" determines whether the builder enters COMPLYING or COMPOSING mode. The Middle experiment proved this: recipe format = PA-05 4/4 DESIGNED; checklist format = PA-05 1.5/4 FLAT. N=2 but effect size is 2.5 points -- massive. Three independent reports (58, 59, 55) converge on this as the single highest-leverage change. Classifying it as GATES buries it in the wrong pipeline layer.
- **Recommended resolution:** Recipe format belongs in ORCHESTRATION as the builder's primary input format specification. The builder prompt IS a recipe. This is non-negotiable per the actionability audit's #1 recommendation.

#### Contradiction 3: Builder COMPOSING mode (ITEM 137) and CSS naming conventions (ITEMS 57, 61, 66-68) as GATES
- **What the VA says:** These are GATES items.
- **What the actionability audit says:** COMPOSING mode is a disposition, not a gate. CSS naming conventions (concept-named custom properties, zone-specific padding values) are BUILDER VOCABULARY, not gates.
- **My argument:** You cannot gate-check someone INTO composing mode. Composing mode is activated by the format and language of the prompt -- recipe verbs, dispositional instructions, creative authority framing. The CSS naming examples (zone-1 callout padding: 20px 24px, zone-3 callout border-left-width: 5px) are EXEMPLARS for the builder, not thresholds for the gate-runner. Putting them in GATES means they become things to VERIFY instead of things to LEARN FROM. This is exactly the compliance trap (Chain A) that produced PA-05 1.5/4.
- **Recommended resolution:** COMPOSING mode → ORCHESTRATION (builder prompt disposition). CSS naming/value exemplars → BUILDER (as value table entries per Tier 2 item #13). Mode determinant (ITEM 78) → ORCHESTRATION (determines which prompt variant to use).

---

### Pattern 2: IDENTITY -> BUILDER (6 items)

#### Contradiction 4: Soul constraints as world-description routed to builder
- **What the VA says:** Identity items like "Every surface is sharp. Corners are cut, not curved" (ITEM 21), border-radius:0 (ITEM 22), warm palette (ITEM 23), and "Zero decorative elements" (ITEM 020) are IDENTITY-layer and should go to ORCHESTRATOR or GATE-RUNNER.
- **What the actionability audit says:** Soul constraints MUST reach the builder. The actionability audit's 73-line minimal constraint set includes 15 lines of identity constraints as the FIRST tier -- "Hard Physics" in Report 58's terminology.
- **My argument:** This is not a real contradiction. Identity constraints that constrain CSS output MUST be in the builder's prompt. Where else would they go? The gate-runner can VERIFY compliance, but the builder must KNOW the rules to follow them. The tension pattern description says "identity rules are non-negotiable, should they go to ORCHESTRATOR or GATE-RUNNER instead?" -- but "instead" is wrong. They go to the builder AND the gate-runner. The builder receives them as world-description (enabling constraints that define the design space). The gate-runner receives them as pass/fail checks. This is explicitly the actionability audit's Tier 1 architecture: Hard Physics (15 lines identity) → builder prompt.
- **Recommended resolution:** DUAL-ROUTE. Identity constraints go to BUILDER as world-description (Tier 1 of the 73-line set) AND to GATE-RUNNER as verification checks. No conflict. The source (tokens.css + soul constraints + components.css, ITEM 073) is the reference; builder and gate-runner get different VIEWS of the same source.

---

### Pattern 3: ORCHESTRATION -> BUILDER (35 items)

This is the largest category (35 items) and the one where the actionability position is MOST important.

#### Contradiction 5: Builder input stack items classified as ORCHESTRATION
- **What the VA says:** Items like "Builder input #1: Activation brief (~100 lines)" (ITEM 50), "Builder input #2: Content source material" (ITEM 51), and the entire 8-step build sequence (ITEMs 59-67) are ORCHESTRATION-layer.
- **What the actionability audit says:** The builder's input specification and build sequence are the builder's RECIPE. They are the CORE of what the builder receives. Classifying them as ORCHESTRATION is technically correct (the orchestrator assembles them) but misleading if it means the builder doesn't own them.
- **My argument:** The orchestrator ASSEMBLES the builder's inputs, but the builder RECEIVES and EXECUTES them. The 8-step build sequence (write conviction statement → build header + Z1 → self-evaluate → adjust → build Z2-Z3 → midpoint evaluate → build Z4 + footer → final evaluate) is literally the builder's recipe. The actionability audit's #1 recommendation is that this sequence must be in RECIPE FORMAT, not checklist format. Classifying these as ORCHESTRATION risks them being optimized for the orchestrator's convenience rather than the builder's comprehension. The builder must see these as "here is what I do" not "here is what was planned for me."
- **Recommended resolution:** CONTEXTUAL. These items are AUTHORED by the orchestrator but CONSUMED by the builder. The pipeline layer is ORCHESTRATION (correct -- the orchestrator assembles them), but the target agent is BUILDER (correct -- the builder receives them). The tension resolves by understanding that layer and agent are orthogonal. The actionability audit's concern is that these items reach the builder in RECIPE FORMAT, not that they be reclassified.

#### Contradiction 6: 3-pass architecture (ITEMs 2-3, 18-19, 25-26, 28) vs. single-pass recommendation
- **What the VA says:** Diagrams 6-8 specify a 3-pass architecture: Pass 1 (STRUCTURAL SKELETON + PERVADING METAPHOR, 20-35 min), Pass 2 (ATMOSPHERIC ENRICHMENT + MECHANISM COUPLING, 15-25 min), Pass 3 (TERMINAL CRAFT + DESIGNED MOMENTS, 10-20 min). Each pass has a different mode (GENERATIVE, COMPOSITIONAL, POLISHING).
- **What the actionability audit says:** Start single-pass, add iteration only if needed (Diagram 24, REC-02). The 3-pass architecture is untested (N=0, Assumption #9 in Diagram 24). The Compositional Critic between passes is "PURE FANTASY (zero evidence)" (CF-02). The Grand Synthesis (Diagram 25) classifies 3-pass convergence as FANTASY.
- **My argument:** This is the actionability audit's STRONGEST position. The 3-pass architecture has ZERO evidence. Every successful build in the project's history was single-pass (Middle: single-pass, PA-05 4/4; Gas Town: single-pass, PA-05 3.5). Every multi-pass proposal is theoretical. The Compositional Critic that mediates between passes has never existed, never been tested, and Diagram 24 explicitly calls it "PURE FANTASY." Adding 3 untested components (Critic, conviction artifact, disposition layer) to a pipeline that already fails at PA-05 1.5/4 is adding complexity to a system that fails from EXCESS complexity. The actionability audit says: prove single-pass works at 3.5+ before adding passes. Run experiment #21 (creative revision cycle, 6-10 hours) to validate BEFORE committing to multi-pass architecture.
- **Recommended resolution:** Pipeline v3 launches as SINGLE-PASS with the 73-line constraint set + recipe format + perception thresholds. Multi-pass is Tier 4 THEORETICAL (item #23) and is BLOCKED until experiment #21 validates that revision improves quality. Do not build the Compositional Critic. Do not design conviction artifacts. Do not assume 3 passes converge. TEST FIRST.

#### Contradiction 7: 73-line constraint cap (ITEM 6) vs. total builder input ~3,600 lines (CF-01)
- **What the VA says:** Diagram 24 calls this "THE LINE COUNT SHELL GAME" (CF-01). The builder's actual input stack is ~3,600 lines (constraint set 73 + disposition 113 + TC brief 42 + value tables 550 + tokens.css 174 + components.css 1,196 + mechanism-catalog 300+ + CD-006 1,200+ + conviction artifacts 50). This is LARGER than v2's ~2,800 lines.
- **What the actionability audit says:** The 73-line constraint set is the CONSTRAINT layer, not the total input. The actionability audit explicitly acknowledges this: "15 lines identity + 8 lines calibration + 50 lines framework = the minimal constraint set." The other files (tokens.css, components.css, etc.) are REFERENCE MATERIALS, not constraints.
- **My argument:** CF-01 is a valid criticism of MARKETING, not of ARCHITECTURE. The actionability audit never claims the builder sees only 73 lines total. It claims the CONSTRAINT layer should be 73 lines. The difference matters enormously: 73 lines of CONSTRAINTS in recipe format, surrounded by reference materials the builder can consult as needed, is categorically different from 963 lines of CONSTRAINTS in checklist format. The Middle experiment proves this: the builder received ~100 lines of recipe-format constraints plus reference files and produced PA-05 4/4. The Flagship builder received ~530 lines of checklist-format constraints plus reference files and produced PA-05 1.5/4. The constraint:reference ratio matters. CF-01 conflates constraints with reference materials. The fix is honest accounting (Diagram 24 REC-05: say "better organized" not "less input"), not abandoning the 73-line architecture.
- **Recommended resolution:** Accept CF-01's accounting correction: document total builder input as ~3,600 lines. But maintain the 73-line CONSTRAINT cap as the builder's primary instruction set. The improvement is FORMAT (recipe vs checklist) and STRUCTURE (73 lines constraints + reference materials vs 963 lines undifferentiated constraints), not volume.

#### Contradiction 8: Applied vs. Composed mode (ITEMs 50-54, 63) as ORCHESTRATION -> BUILDER
- **What the VA says:** The Applied/Composed mode distinction (Swiss Army Knife vs Orchestra) is an ORCHESTRATION decision routed to the builder.
- **What the actionability audit says:** Mode selection happens BEFORE the builder prompt is assembled. It determines WHICH recipe the builder receives. The builder doesn't choose between Applied and Composed -- the orchestrator chooses and gives the builder the appropriate prompt.
- **My argument:** The builder should not be told "there are two modes, here's how they differ." The builder should be given ONE mode's recipe and told to execute it. Giving the builder both modes creates a choice that introduces compliance uncertainty. The actionability audit's recipe format (#1) is mode-specific: the recipe for a Composed page is different from the recipe for an Applied page. The orchestrator selects the mode; the builder receives the corresponding recipe. This is cleaner, simpler, and prevents the builder from second-guessing mode selection.
- **Recommended resolution:** Mode selection = ORCHESTRATION (correct). Mode-specific recipe = BUILDER input. The builder never sees "Applied vs Composed" as a concept -- it just receives the appropriate recipe. The actionability audit's item #9 (mechanism selection logic distinction) becomes an ORCHESTRATOR tool for selecting which recipe to assemble, not a builder-facing explanation.

#### Contradiction 9: Opus builder non-negotiable (ITEM 100) + fresh instances (ITEMs 21, 112)
- **What the VA says:** Opus builder is non-negotiable (ORCHESTRATION item). Fresh instances defeat continuation bias (ORCHESTRATION item routed to builder context).
- **What the actionability audit says:** Opus-as-builder is Tier 3 experiment #19 -- testable but unproven (N=0 isolated). Fresh instances are assumed to prevent bias without information loss (Assumption #8 in Diagram 24, N=0 UNTESTED).
- **My argument:** "Opus builder non-negotiable" is a PRESCRIPTION masquerading as a FINDING. The evidence shows Opus CORRELATED with better output (CD-006 = Opus = 39/40) but the variable has never been ISOLATED. The Flagship experiment used Sonnet builders but also used checklist format, a different prompt, different content, and a different team topology. Declaring Opus "non-negotiable" before running experiment #19 is premature. The actionability audit says: run the experiment first (4-6 hours), THEN decide. If Opus shows +0.5 PA-05 over Sonnet with all else equal, THEN make it non-negotiable. As for fresh instances defeating continuation bias: untested. The Middle experiment used fresh instances and succeeded; the Flagship used fresh instances and failed. Fresh instances are not the variable that matters.
- **Recommended resolution:** Opus builder = STRONG RECOMMENDATION pending experiment #19 validation, not "non-negotiable." Fresh instance requirement = KEEP (low cost, theoretical basis is sound) but do not treat as a quality guarantee.

---

### Pattern 4: ROUTING -> GATE-RUNNER (2 items)

#### Contradiction 10: Survival function S(x) as ROUTING routed to GATE-RUNNER
- **What the VA says:** The survival function S(x) = 1/(1+C(x)) -- where C(x)=0 means the rule survives and C(x)>0 means it dies -- is a ROUTING item assigned to the GATE-RUNNER. Routing is Phase 0-1; gates are Phase 3.
- **What the actionability audit says:** The survival function is a META-RULE for deciding which constraints to include. It belongs in the orchestrator's pre-build assembly logic, not in the gate-runner.
- **My argument:** The survival function determines which rules ENTER the builder's constraint set. That is routing, not gating. A gate-runner checks output against rules; it does not decide which rules exist. The survival function should run DURING PROMPT ASSEMBLY (Phase 0-1) to filter the constraint set down to the 73-line core. After assembly, the gate-runner checks against whatever constraints survived. Putting the survival function in the gate-runner means the gate-runner is both selecting and enforcing rules -- a separation-of-concerns violation.
- **Recommended resolution:** Survival function S(x) → ORCHESTRATOR (prompt assembly phase). Not gate-runner. The gate-runner receives the RESULT of S(x) filtering (the 73-line constraint set) and checks against that.

---

### Pattern 5: VALUES -> GATE-RUNNER (34 items)

This is the second-largest category and the one with the most nuance.

#### Contradiction 11: Suppressor removal curve and PA-05 predictions as VALUES routed to GATE-RUNNER
- **What the VA says:** The suppressor removal curve (ITEM 31), PA-05 predictions at each level (ITEMs 33-38), and suppressor prioritization (ITEMs 43-44) are VALUES-layer items routed to the GATE-RUNNER. The tension pattern notes: "quality tiers involve judgment, not binary checks."
- **What the actionability audit says:** The suppressor removal curve is a PLANNING tool, not a runtime gate. PA-05 predictions are HYPOTHESES (Diagram 24: "EVERY quantitative prediction is a HYPOTHESIS, not a FINDING"). You cannot gate-check a hypothesis.
- **My argument:** The suppressor removal curve tells us WHICH suppressors to remove and in what order. That is pre-build planning, not runtime verification. The PA-05 predictions (1.5 → 2.0 → 2.5 → 3.0 → 3.5 → 4.0) are the theoretical model, not gate thresholds. You don't fail a build because it scored PA-05 2.5 instead of 3.0 -- you use the score to calibrate the next build. These items belong in the ORCHESTRATOR's decision logic (which pipeline variant to run, how many passes, whether to iterate) not in the gate-runner's pass/fail checks.
- **Recommended resolution:** Suppressor removal curve, PA-05 predictions, and suppressor prioritization → ORCHESTRATOR (planning/calibration). The gate-runner checks BINARY thresholds (container width 940-960px, background delta >= 15 RGB, stacked gap <= 120px). It does NOT check quality tiers or PA-05 predictions. Quality assessment is the PA auditor's job, not the gate-runner's.

#### Contradiction 12: CCS (Compositional Coherence Score) measurements as VALUES routed to GATE-RUNNER
- **What the VA says:** CCS measurements (ITEMs 28-35, 43-45, 52) -- including the 3-register model (Register 1: CCS 0.15-0.35, Register 2: 0.35-0.55, Register 3: 0.55-0.80) -- are VALUES items routed to the GATE-RUNNER.
- **What the actionability audit says:** CCS is a THEORETICAL measurement framework (Diagram 25 classifies 3 compositional registers as THEORIZED, N=0). CCS >= 0.55 for atmospheric coupling is classified as FANTASY (ITEM 178). You cannot gate-check a fantasy.
- **My argument:** CCS has never been measured in a live pipeline. The values assigned to Gas Town (0.35-0.55 depending on methodology) and CD-006 (0.15-0.40 depending on methodology) show that the measurement itself is not stable. Diagram 22 documented 5 contradictions in CCS values alone (Cluster 1). The gate-runner needs BINARY checks with PROVEN thresholds. CCS is a research construct that may eventually become a gate -- but not until: (a) the measurement methodology is standardized, (b) the thresholds are validated experimentally, and (c) the measurement can be automated. None of these conditions are met. The actionability audit's position is clear: items #1-#9 are ALL proven interventions. CCS is Tier 4 THEORETICAL.
- **Recommended resolution:** CCS measurements → RESEARCH/CALIBRATION (informational, not gate-checked). The gate-runner checks PROVEN binary thresholds only. CCS becomes a gate-runner check ONLY after experiment #18 (73-line test) or #24 (atmospheric coupling) provides validated thresholds.

#### Contradiction 13: PA-05 scale definitions (FLAT/ASSEMBLED/COMPOSED/DESIGNED) as VALUES routed to GATE-RUNNER
- **What the VA says:** The PA-05 1-4 scale (ITEM 27) and specific page scores (ITEMS 32-35) are VALUES items routed to the GATE-RUNNER.
- **What the actionability audit says:** PA-05 is assessed by the PA auditor, not the gate-runner. The gate-runner runs BEFORE the PA auditor. It checks programmatic constraints (container width, CSS line count, mechanism count, background deltas). PA-05 is a POST-BUILD assessment.
- **My argument:** The gate-runner cannot assess PA-05 because PA-05 requires PERCEPTUAL JUDGMENT. Does the page look designed? Does it feel composed? These are questions for 9 independent Opus auditors viewing screenshots, not for a programmatic script counting CSS properties. Routing PA-05 scale definitions to the gate-runner conflates two different verification systems: (1) programmatic binary checks (gate-runner, pre-PA) and (2) perceptual quality assessment (PA auditors, post-build). The Flagship experiment proved these are different: all programmatic gates PASSED while PA-05 scored 1.5/4. Gates are necessary but not sufficient. Do not try to make the gate-runner do the PA's job.
- **Recommended resolution:** PA-05 scale definitions → PA AUDITORS (as assessment framework). Gate-runner does NOT attempt to measure or predict PA-05. Gate-runner handles BINARY constraints; PA handles quality assessment. Clean separation.

#### Contradiction 14: Quantitative consistency findings (ITEM 039) as VALUES routed to GATE-RUNNER
- **What the VA says:** The finding that "347 claims, 83.3% fully consistent, 14 contradictions (4.0%)" is a VALUES item routed to the GATE-RUNNER.
- **What the actionability audit says:** This is META-INFORMATION about the research corpus, not a runtime gate check.
- **My argument:** You cannot gate-check "83.3% consistency." This is a quality statement about the RESEARCH, not about the BUILD OUTPUT. It belongs in the pipeline's documentation and planning materials. The gate-runner needs specific, binary rules (container width yes/no, background delta yes/no), not research quality statistics.
- **Recommended resolution:** Research corpus quality statistics → DOCUMENTATION. Not routed to any runtime agent.

---

## Items That Should Be SIMPLIFIED in Pipeline

Based on the actionability audit's analysis, these items from the unified registry are over-complex and should be simplified:

1. **3-pass build architecture** → Replace with single-pass + optional revision (Tier 4, experiment-gated)
2. **Compositional Critic agent** → Remove entirely until experiment #21 validates (classified FANTASY by D25)
3. **Conviction artifact** → Remove entirely until experiment proves 20 lines can preserve intent (classified FANTASY by D25)
4. **CCS measurement framework** → Defer to research tier; do not gate-check (methodology unstable, 5 contradictions documented)
5. **Emotional arc specification** → Keep as EMERGENT (D21 ITEM 032 explicitly says "cannot be gate-checked"), remove any gate-runner items
6. **Atmospheric coupling target (CCS >= 0.55)** → Tier 4 THEORETICAL, not a near-term gate (classified FANTASY by D25)
7. **80% creative authority** → Untested assumption (N=0, D24 Assumption #7); simplify to "builder has creative freedom within identity constraints"
8. **Content-form router** → Simplify to word-count-to-zone-count mapping (item #3, 6 lines) instead of full classification system
9. **All suppressor removal curve items** → Move from gate-runner to orchestrator planning; gate-runner only checks binary thresholds
10. **14-dimension Flagship definition** → Defer to Tier 4; immediate focus on PA-05 >= 3.5 as the measurable target

---

## Items That Should Be ADDED

The actionability audit recommends these items that are NOT currently in other VA diagrams:

1. **Perception threshold table** (item #2, 8 lines) — THE single most validated addition, N=3+ evidence, breaks 2 suppression chains
2. **Content-volume-to-zone-count map** (item #3, 6 lines) — ROOT CAUSE prevention of documented catastrophic failure
3. **Content-form fit gate** (item #4, 5 lines) — ROOT CAUSE prevention of over-formed zones
4. **Mechanism density cap per viewport** (item #5, 2 lines) — prevents mechanism concentration in first 20%
5. **Semantic value 3-question self-check** (item #6, 8 lines) — the builder's tool for avoiding arbitrary CSS
6. **Component character table** (item #8, 12 lines) — operationalizes existing prohibition with actionable model
7. **Mechanism selection logic distinction** (item #9, 6 lines) — "arguably the most important paragraph" per Report 50
8. **PA question count reconciliation** (item #7, 4 find-replace edits) — fixes calibration inconsistency across 4 files
9. **Integrative gestalt auditor** (item #14, 1 paragraph prompt) — captures holistic quality decomposed questions miss

Total addition: ~47 lines of new content + 1 new auditor role. This is the 30% addition the actionability audit calls for.

---

## Priority Ranking

Ordered by impact on pipeline quality, with the actionability audit's assessment of each contradiction's importance:

### CRITICAL (must resolve correctly or pipeline fails)

1. **Contradiction 6: 3-pass vs single-pass** — THE architectural fork. Wrong choice wastes weeks. Actionability says: single-pass first, multi-pass only after experiment validates. Impact: prevents building 3 untested components.

2. **Contradiction 7: 73-line cap vs 3,600-line reality** — THE honesty test. If we lie about complexity, we cannot debug failures. Actionability says: honest accounting, maintain 73-line CONSTRAINT cap, acknowledge total input. Impact: prevents self-deception.

3. **Contradiction 2: Recipe format as GATES vs builder operating mode** — THE #1 lever. Recipe format is the single highest-leverage change (+0.5-1.0 PA-05). Misclassifying it as GATES buries it. Impact: +0.5-1.0 PA-05 directly.

4. **Contradiction 12: CCS as gate-runner check vs research construct** — THE premature operationalization risk. Gate-checking an unstable metric with contradictory measurements produces false confidence. Impact: prevents gate-runner unreliability.

### HIGH (significant quality impact)

5. **Contradiction 1: Perception thresholds to builder** — Breaking the "builder sees no thresholds" rule is essential. The Flagship builder produced invisible CSS because it didn't know what "visible" meant. Impact: +0.3-0.5 PA-05.

6. **Contradiction 11: Suppressor curve in gate-runner vs orchestrator** — Planning tools in the gate-runner create confusion about what the gate-runner actually checks. Impact: gate-runner reliability.

7. **Contradiction 9: Opus non-negotiable vs unvalidated** — Premature commitment to an unvalidated requirement increases cost without proven benefit. Impact: cost efficiency, experiment design.

8. **Contradiction 8: Applied/Composed mode to builder** — Giving builders two modes creates choice paralysis. Orchestrator selects; builder receives. Impact: builder clarity.

### MEDIUM (correctness matters but impact is bounded)

9. **Contradiction 5: Orchestration items routed to builder** — Correctly identifying that layer != agent resolves 35 items at once. Impact: classification clarity.

10. **Contradiction 4: Identity to builder** — Dual-route resolves cleanly. No real tension. Impact: ensures soul constraints reach builder.

11. **Contradiction 13: PA-05 scale in gate-runner** — Clean separation of programmatic gates from perceptual assessment. Impact: prevents gate-runner scope creep.

12. **Contradiction 10: Survival function in gate-runner vs orchestrator** — Separation of concerns. Impact: architectural cleanliness.

### LOW (should be resolved but pipeline doesn't hinge on it)

13. **Contradiction 14: Research statistics in gate-runner** — Obviously meta-information, not a runtime check. Impact: classification correctness.

14. **Contradiction 3: CSS naming conventions as GATES** — Exemplars are vocabulary, not gates. Impact: minor classification fix.

---

## The Actionability Bottom Line

The other council advocates will argue for richer emotional arcs, deeper compositional registers, more sophisticated CCS measurements, multi-pass architectures with compositional critics, and atmospheric coupling targets. They will point to the Visual Architecture's 25 diagrams of theory and aspiration.

I have one counter-argument: **N=4, 9/10 untested, every prediction is a hypothesis.**

The actionability audit is the only voice that says: before you build the cathedral, test the foundation. Before you add the 3-pass architecture, prove single-pass works. Before you gate-check CCS, stabilize the measurement. Before you declare Opus non-negotiable, isolate the variable.

The cheapest experiment costs 4 hours. The most expensive Tier 1 fix costs 2-4 hours total for all 9 items. The entire actionability program (Phase 1 + Phase 2) costs 6-12 hours and produces experimental evidence instead of theoretical predictions.

Every hour spent building untested architecture is an hour NOT spent validating whether the architecture works. The actionability audit's sequence -- FIX, TEST, DESIGN, TEST, ARCHITECT -- is not conservative. It is the only approach that generates evidence. Everything else is faith.

**Remove 900 lines. Keep 73. Test. Then invest.**

# PV2 Cross-Reference: Coherence Analysis

**Analyst:** coherence-analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** #9 -- Does the PV2 architecture cohere internally?
**Sources:**
1. `ephemeral/pipeline-analysis/_meta-cognitive/PV2-ARCHITECTURE-DIAGRAM.html` (1,143 lines)
2. `ephemeral/pipeline-analysis/_meta-cognitive/pv2-flagship-coherence-audit.md` (263 lines)
3. `ephemeral/pipeline-analysis/_meta-cognitive/pv2-cross-validation.md` (527 lines)
4. `ephemeral/pipeline-analysis/_meta-cognitive/pv2-flagship-self-test.md` (693 lines)
5. `ephemeral/pipeline-analysis/_meta-cognitive/pipeline-v2-architecture.md` (625 lines)
6. `ephemeral/pipeline-analysis/_meta-cognitive/pv2-tier-routing.md` (347 lines)

**User Directive:** ALWAYS FLAGSHIP

---

## EXECUTIVE SUMMARY

The PV2 architecture is **internally coherent at the structural level** -- the skill separation, verification layers, agent topology, and enrichment propagation reinforce each other consistently. However, the coherence **fractures at the intersection of three specific fault lines**: (1) the architecture describes a tiered system while the user wants ALWAYS FLAGSHIP, which creates dead specification mass and routing complexity that never fires; (2) File 10's coherence vision was reduced by ~60% during recipe extraction, creating a gap between what the architecture CLAIMS to verify and what it ACTUALLY verifies; (3) the self-test and cross-validation agree the architecture is sound but BOTH flag Gate 6 (meta-to-output ratio) as violated -- the architecture cannot validate itself because it has produced zero permanent output.

**Bottom line:** The architecture coheres, but it coheres as a GENERAL system. For ALWAYS FLAGSHIP, coherence becomes EASIER (no routing ambiguity, no tier gradients, no "Floor vs Middle vs Ceiling" decision logic) but the architecture needs stripping, not preserving, of the non-Flagship tiers.

---

## PART A: INTERNAL COHERENCE ASSESSMENT

### A1: Skill Separation Coherence

The architecture defines 5 components with clean separation:

| Component | Role | Reads | Writes | Boundary |
|-----------|------|-------|--------|----------|
| /build-page | Orchestrate | User input | Agent dispatches | Never writes CSS |
| /tension-composition | Think | Content + mechanism catalog | _build-plan.md | Never writes CSS |
| operational-recipe.md | Execute | _build-plan.md + tokens.css + prohibitions.md | HTML page | Never derives metaphors |
| /perceptual-auditing | Verify | Screenshots ONLY | PA reports | Never sees build process |
| gate-runner.js | Measure | Rendered page via Playwright | PASS/FAIL per gate | Never makes judgments |

**Coherence verdict: STRONG.** Each component has exactly one job. The boundaries are clean. The information isolation (PA auditors see screenshots, not code; gate runner measures, not judges) is consistently maintained across the architecture diagram, the tier routing matrix, and the unified architecture document. No document contradicts these boundaries.

**One subtle tension:** The architecture diagram (Section 7) routes `mechanism-catalog.md` to the builder for Ceiling+. The self-test (Gate 4) flags that the mechanism catalog is NOT embedded in the recipe. The coherence audit confirms this gap. This creates an external dependency for the builder at Ceiling+ tier, which violates the self-containment principle. However, for ALWAYS FLAGSHIP, the builder will ALWAYS receive the full mechanism catalog -- so this is a coherence win, not a gap.

### A2: Two-Layer Verification Coherence

The architecture diagram's Section 4 describes two verification layers:
- **Layer 1 (Programmatic):** 12 binary gates, measured via `getComputedStyle`
- **Layer 2 (Perceptual):** Fresh-eyes auditors evaluating screenshots

The cross-validation confirms this is agreed upon by all 6 original proposals (A-8). The tier routing matrix specifies how these layers scale by tier. The self-test runs the architecture's own verification prompt against File 42.

**Coherence verdict: STRONG with one structural irony.** The two-layer system is the most internally consistent part of the architecture. Every document affirms: "programmatic gates catch thresholds; perceptual audit catches gestalt." The flagship experiment is cited as proof (all gates PASSED, PA FAILED). The architecture diagram quotes the exact RGB delta evidence.

The structural irony: the self-test scores File 42 at 6/7 gates (PASS or CONDITIONAL PASS), with Gate 1 (compression) as the sole FAIL. But Gate 1 is about VIOLATION EXAMPLES -- and the self-test's own analysis shows this failure mode is structurally inapplicable to recipe steps (you can't show a "violation" of "Write this HTML" -- the violation IS the absence of the step). The verification system applies a checklist-shaped gate to recipe-shaped content, which is the exact mismatch the corpus diagnosed. The verification prompt and the recipe are coherent in PRINCIPLE but their intersection reveals a format mismatch.

### A3: Enrichment Propagation Coherence

The architecture diagram (Section 8) describes 5 enrichment paths:
1. PA SKILL enrichment -> every future build
2. TC SKILL enrichment -> better build plans
3. Recipe enrichment -> better CSS output
4. Gate runner enrichment -> catches more issues
5. Build failure analysis -> pipeline adaptation

**Coherence verdict: SOUND but UNTESTED.** The propagation model is internally consistent -- enriching PA catches more issues, enriching TC improves plans, enriching the recipe improves CSS. The architecture diagram correctly identifies PA as the highest-leverage enrichment point.

However, no build has ever exercised this propagation chain. The enrichment model is a theory about a system that has produced zero pages through the described pipeline. The cross-validation flags this as Gap C-6 (no version control strategy for recipe evolution). The self-test's Meta-Check M-1 identifies the cheapest experiment: build one page and measure PA-05.

### A4: Agent Topology Coherence

The tier routing matrix (Section B) specifies detailed agent topologies per tier. The architecture diagram (Section 6) describes the 4-wave Flagship architecture. The unified architecture (Section 4.6) provides a summary table.

**Coherence verdict: CONSISTENT across documents but with a minor discrepancy.**

The unified architecture specifies:
- Flagship: "1 Opus builder + planner, 9-PA Mode 4 audit, mandatory approvals at 5 phases"

The tier routing matrix specifies:
- Flagship Wave 2: "1 Sonnet Agent -- Programmatic Verifier" + "1 Sonnet Agent -- Soul Compliance" + "9 Opus Agents -- PA Auditors" + "1 Opus Agent -- PA Weaver"
- Total: 12-16 agents

The architecture diagram specifies:
- "9 independent Opus auditors, each assigned specific PA questions"
- "Lead captures all screenshots"

These are consistent in WHAT happens but differ slightly in WHO does it:
- The tier routing matrix adds a dedicated "Soul Compliance" Sonnet agent that doesn't appear in the architecture diagram or the unified architecture.
- The tier routing matrix has Wave 4 (Spot-Check) that the architecture diagram omits.

These are minor specification drift, not contradictions. The core topology (planner -> builder -> screenshot capture -> parallel auditors -> weaver -> optional fix) is identical across all three documents.

---

## PART B: CROSS-VALIDATION CONFIRMATION AND CHALLENGE

### B1: What the Cross-Validation Confirms

The cross-validation (pv2-cross-validation.md) found:
- **8 agreements** across all 6 proposals (all high-confidence)
- **8 contradictions** (2 critical, 3 significant, 3 minor)
- **7 gaps** (1 critical, 3 significant, 3 minor)
- **Anti-reproduction gate score: 6/7 PASS** (Gate 6 FAIL)

The architecture diagram resolves ALL 7 contradictions and presents them as decided. Cross-referencing:

| Contradiction | Cross-Validation Finding | Architecture Diagram Resolution | Coherent? |
|---------------|-------------------------|-------------------------------|-----------|
| B-1: Orchestrator yes/no | Docs 3,6 say YES; Doc 1 says NO | YES -- thin ~350-line orchestrator | YES -- diagram shows /build-page as entry point |
| B-2: Skill naming | 4 different names proposed | /build-page | YES -- consistent across diagram |
| B-3: Recipe line count | 650 vs 1,000 vs 1,800 | ~650 lines | YES -- but cross-validation recommended 800-1,000 with provenance |
| B-4: Background delta | 10 vs 15 RGB | 15 RGB | YES -- diagram shows >= 15 in gate list |
| B-5: Stacked gap | 120 vs 192 | 108px Flagship / 120px Middle+Ceiling (recipe target) + 192px (gate fail) | PARTIALLY -- diagram says 108px in tier table but architecture says 192px in gate |
| B-6: Phase numbering | TC 0-5 vs F42 0-8 | Separate namespaces | YES -- diagram uses "Step" not "Phase" for user journey |
| B-7: Transition types | 3 vs 5x5 | Tier-gated | YES -- diagram describes 3-type for recipe |

**Stacked gap discrepancy (B-5):** The architecture diagram's tier routing table (Section 5) says Flagship stacked gap limit is 108px. The unified architecture's gate table (Section 6) says SC-10 threshold is <= 192px. The resolved decisions section (Section 9, Decision 2) says "108px for Flagship, 120px for Middle/Ceiling." This is THREE different numbers in the same document family:
- 108px (Flagship recipe target)
- 120px (Middle/Ceiling recipe target)
- 192px (gate runner FAIL threshold)

The cross-validation recommended keeping all three as different-purpose numbers (target vs gate). The architecture diagram mostly follows this but does not consistently label which number is which. This is a MINOR coherence gap -- the principle is consistent but the specific expression varies.

### B2: What the Cross-Validation Challenges

The cross-validation's most important challenge is Section F: self-referential analysis. It found:
- The 6 proposals collectively are CHECKLISTS, not RECIPES (F-1)
- The architecture's guardrail-to-playbook ratio is ~8:1 (F-3) -- WORSE than the master prompt's 7.9:1
- The architecture would score 3/7 on its own verification prompt (F-4)

**This is the deepest coherence finding.** The architecture prescribes recipe format for builders. But the architecture ITSELF is written in checklist format. The cross-validation's conclusion is correct: architecture documents are THINKING artifacts, and the verification prompt is designed for EXECUTION artifacts. The mismatch is expected.

But the challenge goes deeper: if the architecture is a checklist that prescribes recipes, does the prescription survive the "telephone game" of compression from architecture -> skill file -> agent prompt -> builder behavior? The corpus's own findings say 50:1 compression kills nuance. The architecture's recipe-over-checklist thesis may not survive its own compression chain.

**Coherence verdict for cross-validation: CONFIRMS structural soundness, CHALLENGES implementation fidelity.**

---

## PART C: SELF-TEST ASSESSMENT

### C1: Does File 42 Pass Its Own Standards?

The self-test (pv2-flagship-self-test.md) ran all 7 verification gates against File 42:

| Gate | Score | Key Finding |
|------|-------|-------------|
| G1: Compression | FAIL (31%) | Violation examples (1C) absent from most instructions |
| G2: Judgment Rules | CONDITIONAL PASS | 6 judgment rules (3 structural CONTENT DECISION + 3 PA exception) |
| G3: Guardrail Ratio | PASS (0.13:1) | 60x improvement over master prompt's 7.9:1 |
| G4: Builder Visibility | CONDITIONAL PASS | Middle: self-contained. Ceiling+: external deps |
| G5: Perception Thresholds | PASS (7.5/8) | 140 perception terms vs 0 in original |
| G6: Meta Ratio | PASS (2.0:1 new) | File 42 itself is output, not meta |
| G7: Recipe Format | PASS (0 checklist verbs) | Strongest gate pass |

**The self-test's verdict: FIX AND RE-VERIFY (6/7 PASS).**

**Coherence assessment of the self-test:**

The self-test is the most methodologically rigorous of the three source documents. It counts every rule (132 total), classifies every verb, and produces a concrete scorecard. Its findings are INTERNALLY consistent -- Gate 7 (recipe format) is the strongest pass because the self-test verified every building instruction uses action verbs. Gate 1 is the sole fail because the self-test found zero "VIOLATION LOOKS LIKE" strings.

The self-test also correctly identifies a meta-level insight: Gate 1's failure mode (missing violation examples) is STRUCTURALLY different from the master prompt's failure mode (missing perception terms). The master prompt failed because builders couldn't see. File 42 "fails" Gate 1 because builders aren't told what failure looks like -- but since the recipe tells them exactly what SUCCESS looks like (complete CSS blocks), this is a documentation gap, not a quality gap.

**For ALWAYS FLAGSHIP:** The self-test's Gate 4 (builder visibility) becomes MORE relevant. The self-test notes that Ceiling+ builders need the mechanism catalog externally. In ALWAYS FLAGSHIP mode, this external dependency is permanent and systematic. The self-test's fix recommendation -- "embed mechanism catalog excerpts in the handoff document" -- is coherent with the Flagship wave architecture (TC Planner selects mechanisms in Wave 0, and those selections should be embedded in the build plan that the builder reads in Wave 1).

---

## PART D: THE COHERENCE AUDIT'S DEEPER FINDING

### D1: File 10's Vision vs PV2's Implementation

The coherence audit (pv2-flagship-coherence-audit.md) is the most specific of the three documents. It inventories File 10's coherence requirements (8 MC rules, 10 SC rules, cascade value tables, perception thresholds, channel taxonomy) and maps each to PV2's implementation.

**The headline finding: PV2 Phase 8E implements ~40% of File 10's coherence vision.**

What survived:
- Perception thresholds (FULLY ADOPTED)
- S-09 stacking fix (FULLY ADOPTED)
- Channel counting at 2-3 transitions (ADOPTED, scope-reduced)
- Binary >= 3 channels gate (ADOPTED)

What was lost:
- Full 12x10 cascade value table (NOT ADOPTED)
- Co-variation direction verification (NOT ADOPTED)
- Named reinforcing pairs with removal tests (NOT ADOPTED)
- Cascading chain specification (NOT ADOPTED)
- CCS as computed score (INTENTIONALLY REPLACED by counting)
- Coverage of ALL 11 transitions (only 2-3 checked)

**Coherence assessment:** This is the architecture's most significant INTERNAL contradiction. Here is why:

1. The architecture diagram (Section 4) states: "Two verification layers -- numbers AND eyes -- ensure the page is genuinely designed, not just technically compliant."

2. The coherence audit proves that the programmatic layer (Layer 1) checks only 2-3 of 11 transitions, does NOT verify co-variation direction, and does NOT produce a persistent cascade value table.

3. The architecture's own thesis is "programmatic gates catch what numbers can measure; PA catches what eyes see." But the programmatic gates DON'T measure most of what File 10 designed them to measure.

4. This means the perceptual audit bears the ENTIRE burden of catching coherence failures -- including the ones that COULD be caught programmatically (channel counting at all 11 transitions, co-variation direction) but aren't.

**For ALWAYS FLAGSHIP:** This is either a CRITICAL gap or an acceptable design decision, depending on how you interpret the architecture's coherence philosophy:

- **If the architecture TRUSTS Mode 4 PA (9 auditors, 48 questions):** Then the reduced programmatic coherence checking is acceptable. Mode 4 PA will catch incoherent transitions that programmatic gates miss. The 9-auditor breadth compensates for the reduced gate scope.

- **If the architecture REQUIRES programmatic + perceptual as INDEPENDENT verification layers:** Then the coherence gap is critical. Layer 1 is performing at ~40% of its designed capacity for coherence. The two-layer principle degrades to a "1.4-layer" system for coherence specifically.

The coherence audit recommends 3 specific additions that would close this gap:
1. Expand Phase 8E to ALL transitions (not just 2-3)
2. Add co-variation direction check
3. Require cascade value table as a deliverable

These recommendations are COHERENT with the architecture's own principles. They are also LOW COST (the marginal effort of checking 11 transitions vs 3 is minimal). The architecture's failure to include them appears to be compression loss during recipe extraction, not an intentional design decision.

### D2: The 6+ Channel Requirement: Setup vs Verification

The coherence audit identifies a subtle but important incoherence:

The tier routing matrix (Phase 3, Flagship row) says: "6+ CSS channels shifting at each major boundary."

But this appears as a SETUP instruction (how to BUILD the zones), not as a VERIFICATION gate (how to CHECK the zones). Phase 8E's verification checks >= 3 channels -- half the Flagship setup requirement.

This means:
- The builder is told to create 6+ channel shifts (Phase 3)
- The verifier only checks for 3+ channel shifts (Phase 8E)
- A builder who creates only 4 channel shifts would PASS verification while FAILING the setup instruction

This is a SPEC-VERIFICATION MISMATCH. The architecture tells builders to aim higher than it checks. This is the kind of gap that allows technically-compliant-but-visually-flat output -- the exact failure mode the architecture was designed to prevent.

**For ALWAYS FLAGSHIP:** This mismatch is particularly damaging because Flagship is the tier with the tightest standards. The fix is straightforward: make the Phase 8E threshold tier-aware (>= 3 for Middle, >= 5 for Ceiling, >= 6 for Flagship).

---

## PART E: DOES THE ARCHITECTURE PASS ITS OWN SELF-TESTS?

### E1: Anti-Reproduction Protocol Compliance

| Gate | Cross-Validation Score | Self-Test Score | Unified Architecture Score | Consensus |
|------|----------------------|----------------|--------------------------|-----------|
| G1: Compression | CONDITIONAL PASS | FAIL (31%) | PASS | CONDITIONAL -- depends on artifact type |
| G2: Judgment | PASS | CONDITIONAL PASS | PASS | PASS -- judgment rules are structurally necessary |
| G3: Guardrail Ratio | PASS | PASS (0.13:1) | PASS | STRONG PASS |
| G4: Builder Visibility | PASS (with caveat) | CONDITIONAL PASS | PASS | PASS (for ALWAYS FLAGSHIP) |
| G5: Perception | PASS | PASS (7.5/8) | PASS | PASS |
| G6: Meta Ratio | **FAIL** | PASS (2.0:1 for File 42 alone) | WATCH (17:1) | **FAIL** at architecture level |
| G7: Recipe Format | PASS | PASS (0 checklist verbs) | PASS | STRONG PASS |

**Consensus: 5/7 PASS, 1 CONDITIONAL, 1 FAIL.**

Gate 6 is the critical failure. All three documents acknowledge it. The cross-validation states: "Current ratio: INFINITY:1" (since zero permanent output exists). The unified architecture says "WATCH." The self-test scopes Gate 6 narrowly to File 42 and claims PASS -- but this is scope manipulation. When assessed at the architecture level (the question this report is answering), Gate 6 FAILS.

### E2: Does ALWAYS FLAGSHIP Change Gate 6?

ALWAYS FLAGSHIP WORSENS Gate 6. Here's why:

The current architecture specifies 4 tiers with routing logic, gate gradients, and agent topology variants. ALWAYS FLAGSHIP means:
- Tier classification logic: DEAD CODE
- Floor/Middle/Ceiling specifications: DEAD SPECIFICATION
- Gate strictness gradients: COLLAPSED to "all BLOCKING"
- Agent topology options: COLLAPSED to "12-16 Opus-heavy"

This means the architecture contains ~40% specification mass (by my estimate: ~2,000 of ~5,000 meta lines across the 6 source documents) that describes behavior that will NEVER execute. Dead specification inflates the meta-to-output ratio with zero benefit.

**For ALWAYS FLAGSHIP, the coherent action is to STRIP the architecture down to Flagship-only specification.** This would:
- Remove ~2,000 lines of tier-routing logic
- Simplify the /build-page orchestrator from "classifier + router + multi-path" to "intake + dispatch + verify"
- Eliminate all WARNING-level gates (Flagship has ALL gates as BLOCKING)
- Remove graceful degradation protocol (no lower tiers to degrade to)
- Simplify agent topology to one specification (not four)

---

## PART F: DOES ALWAYS FLAGSHIP MAKE COHERENCE EASIER OR HARDER?

### F1: Where ALWAYS FLAGSHIP Improves Coherence

1. **No routing ambiguity.** The architecture's most complex section (tier routing) becomes trivial. Every page gets the same treatment. Zero classification decisions, zero "should this be Middle or Ceiling?" conversations.

2. **No gate strictness gradients.** All gates are BLOCKING. No WARNING-level gates that might be ignored. Binary: PASS or FIX.

3. **Builder always gets everything.** No conditional file routing (mechanism catalog "for Ceiling+ only"). The builder always receives: operational recipe + full mechanism catalog + tokens.css + prohibitions.md + TC build plan + perception thresholds. Gate 4 (builder visibility) becomes unconditionally PASS.

4. **PA always runs at full power.** Mode 4, 9 auditors, all 48 questions, screenshot pre-capture. No "self-check" half-measures.

5. **Metaphor always derived.** TC Phases 0-3.5 always run. No pattern-selection shortcut for Middle tier. The build plan always includes metaphor, mechanism selections, zone architecture, isomorphism table, and bridge prose.

### F2: Where ALWAYS FLAGSHIP Creates New Tensions

1. **Cost disproportionality.** Flagship builds take 90-180 min with 12-16 agents. For a changelog page or API reference, this is grotesque overkill. The architecture currently handles this with tier routing. ALWAYS FLAGSHIP eliminates that escape valve.

**Coherence question:** Does the user ACTUALLY mean "always Flagship" for ALL content, or "always use the Flagship QUALITY STANDARD"? If the latter, a simpler interpretation is: always target PA-05 >= 3/4 with Mode 4 PA, but allow lighter build processes for simpler content.

2. **Dead specification creates cognitive load.** If the architecture retains tier-routing sections for "reference" but never uses them, every agent reading the architecture must parse and ignore irrelevant sections. This is the exact "conviction sandwich" failure mode the corpus diagnosed -- identity content mixed with execution instructions, forcing agents to separate signal from noise.

3. **Stacking gap becomes singular.** The current architecture has 108px (Flagship), 120px (Ceiling/Middle), and 192px (gate fail). ALWAYS FLAGSHIP simplifies this to: target 108px, fail at... what? 120px? 192px? The gap between target and fail threshold was designed for tier flexibility. With one tier, one threshold is cleaner.

4. **Coherence checking scope.** The coherence audit's central finding -- that Phase 8E checks only 2-3 of 11 transitions -- becomes MORE important at ALWAYS FLAGSHIP. If every page is Flagship, every page needs full coherence verification. The 73-82% of unchecked transitions becomes a systematic blind spot, not an occasional one.

### F3: Net Assessment

**ALWAYS FLAGSHIP makes coherence EASIER at the architectural level** (fewer decision paths, fewer conditional behaviors, fewer spec ambiguities) **but HARDER at the verification level** (every page needs the deepest checks, and the coherence checking gap becomes systematic).

The recommended path:
1. Strip the architecture to Flagship-only specification
2. Close the coherence verification gap (expand Phase 8E to all transitions, add co-variation direction, tier-aware channel thresholds)
3. Decide whether ALWAYS FLAGSHIP means "always this process" or "always this quality standard"

---

## PART G: SYNTHESIS -- 9 COHERENCE FINDINGS

Ordered by severity.

### Finding 1: CRITICAL -- Gate 6 (Meta-to-Output) is Unanimously FAILED

All three source documents acknowledge Gate 6 failure. The cross-validation states infinity:1. The unified architecture says WATCH at 17:1. The self-test scopes around it. Zero permanent files have been written. The architecture is internally coherent about this diagnosis but has not ACTED on it. Every additional analysis document (including this one) worsens Gate 6.

### Finding 2: CRITICAL -- Coherence Verification Gap (40% of File 10's Vision)

Phase 8E checks 2-3 of 11 transitions. Co-variation direction is not verified. No cascade value table is required. The spec-verification mismatch (6+ channels required in setup, 3+ checked in verification) allows technically-compliant but visually-flat output. For ALWAYS FLAGSHIP, this gap is systematic.

### Finding 3: SIGNIFICANT -- Dead Specification Mass Under ALWAYS FLAGSHIP

~40% of the architecture describes Floor, Middle, and Ceiling behavior that will never execute. This inflates meta-to-output ratio, creates cognitive load for agents parsing the specs, and violates the architecture's own principle of routing only relevant information to each agent.

### Finding 4: SIGNIFICANT -- Stacked Gap Triple-Number Inconsistency

108px, 120px, and 192px appear in different documents with different purposes. The PRINCIPLE is consistent (target vs gate fail) but the specific numbers and their assignment to tiers create confusion. For ALWAYS FLAGSHIP: use ONE target (108px) and ONE fail threshold (120px or 192px, user decides).

### Finding 5: SIGNIFICANT -- Architecture Is a Checklist Prescribing Recipes

The cross-validation's self-referential check (Section F) found the architecture would score 3/7 on its own verification prompt. The guardrail-to-playbook ratio of the architecture documents is 8:1 -- WORSE than the original master prompt. This is expected for THINKING documents but means the architecture-to-recipe compression step is high-risk.

### Finding 6: MODERATE -- Self-Test's Gate 1 Failure Is Misdiagnosed

The self-test scores Gate 1 at 31% (FAIL). But the dominant failure mode is "missing violation examples" (check 1C), which the self-test itself argues is structurally inapplicable to recipe steps. The adjusted score is 49%. The TRUE Gate 1 concern is provenance (check 1B at 55%), not violation examples. This misdiagnosis could lead to wrong-priority fixes if taken at face value.

### Finding 7: MODERATE -- Enrichment Propagation Is Untested Theory

The architecture diagram describes 5 enrichment paths. Zero pages have been built through the described pipeline. The enrichment model is coherent in theory but unvalidated in practice. The self-test's M-1 (cheapest experiment: build one page) is the correct next step.

### Finding 8: MINOR -- Soul Compliance Agent Appears Inconsistently

The tier routing matrix adds a dedicated "Soul Compliance" Sonnet agent to Flagship Wave 2. This agent does not appear in the architecture diagram or the unified architecture. It is a minor specification drift but illustrates how details can diverge across documents.

### Finding 9: MINOR -- Wave 4 (Spot-Check) Present in Tier Routing, Absent from Diagram

The tier routing matrix specifies a Wave 4 spot-check with 2 Opus agents for Flagship. The architecture diagram stops at "Step 7 -- Ship Decision" with no wave structure. The unified architecture mentions "max 3 fix cycles" but does not describe Wave 4.

---

## PART H: RECOMMENDATIONS FOR ALWAYS FLAGSHIP

### H1: Strip to Flagship-Only

Remove Floor, Middle, and Ceiling specifications from the operational artifacts. Keep them in ephemeral as reference. The /build-page orchestrator becomes ~150 lines (intake + dispatch + verify) instead of ~350 (intake + classify + route-by-tier + dispatch + verify). The recipe drops tier-conditional sections. The gate strictness table has one column, not four.

### H2: Close the Coherence Verification Gap

Add to Phase 8E:
1. Check ALL section transitions (not just 2-3 "major" ones)
2. Verify co-variation direction at each transition
3. Require >= 6 channels shifting at zone boundaries (matching the Phase 3 setup instruction)
4. Produce a cascade value table as a persistent deliverable

Estimated cost: ~30 additional lines in the recipe's Phase 8E section.

### H3: Collapse Stacked Gap to Two Numbers

For ALWAYS FLAGSHIP:
- Recipe target: 108px maximum total gap at boundaries
- Gate fail: 120px (tight, since Flagship standards apply)

Drop the 192px number entirely -- it was the GENERAL gate, and ALWAYS FLAGSHIP doesn't need a general gate.

### H4: Codify -- Gate 6 Demands It

The architecture coheres. The verification layers reinforce each other. The skill separation is clean. The enrichment model is sound in theory. The ONLY failing gate across all three source documents is Gate 6: zero permanent output.

The coherent next action is: write the files. Not more analysis. The architecture self-tests confirm readiness. The cross-validation confirms structural soundness. The coherence audit identified specific gaps (all fixable in the recipe). Build.

---

## VERDICT

**Internal coherence: 7.5/10.** The architecture is structurally sound. Skill boundaries are clean. Verification layers reinforce each other. The diagnosed failure modes (guardrail-to-playbook ratio, builder visibility, perception thresholds, quality routing) all have specific, coherent fixes.

**Deductions:**
- -1.0 for coherence verification gap (40% of File 10's vision lost, spec-verification mismatch)
- -0.5 for stacked gap triple-number inconsistency
- -0.5 for dead specification mass under ALWAYS FLAGSHIP
- -0.5 for Gate 6 failure (architecture cannot fully validate itself without output)

**Cross-validation confirms the architecture: YES.** The 8 agreements are high-confidence. The 7 contradictions are resolved consistently (though B-5 stacked gap has residual inconsistency). The self-referential check is expected to fail for THINKING documents.

**Self-tests confirm the architecture: YES with caveats.** 6/7 gates PASS. Gate 1 failure is partially misdiagnosed. Gate 6 failure is real but resolvable only through codification.

**ALWAYS FLAGSHIP impact on coherence: NET POSITIVE** at the architectural level (simpler routing, no ambiguity, unconditional builder access), **NET CHALLENGING** at the verification level (coherence gap becomes systematic, cost disproportionality for simple content). The recommended resolution: strip to Flagship-only and close the verification gaps.

---

**END OF COHERENCE ANALYSIS**

**Statistics:**
- Source documents analyzed: 6 (3,598 lines total)
- Internal coherence findings: 9 (2 CRITICAL, 3 SIGNIFICANT, 2 MODERATE, 2 MINOR)
- Cross-document contradictions found: 3 (stacked gap numbers, soul compliance agent, Wave 4 spot-check)
- Architecture self-test consensus: 5/7 PASS, 1 CONDITIONAL, 1 FAIL
- Recommended structural changes for ALWAYS FLAGSHIP: 4 (strip tiers, close coherence gap, collapse stacked gap, codify)

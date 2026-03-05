# Nuance Map — Reframing Anti-Patterns and Hard Cases

**Author:** Opus nuance-mapper agent
**Date:** 2026-02-25
**Inputs:** Reports 01-05, MASTER-CHECKLIST.md (35 items)
**Purpose:** Prevent naive reframing by mapping when each fix type works, fails, and backfires.

---

## Section 1: When Each Fix Type Works vs Fails

### Fix Type 1: Code Enforcement (Binary Gates)

**Works when:** The requirement is objectively measurable in the DOM. Container width (GR-03), border-radius (GR-01), font family (GR-05) all achieve 100% compliance because the check is unambiguous and the fix is a single CSS property. Report 02 confirms: binary rules trigger constraint-checking circuits that operate in parallel with construction.

**Moves the problem when:** The gate measures a proxy, not the real quality dimension. GR-11 checks RGB deltas between zones — technically measurable, but 15 RGB delta does not guarantee perceptual distinctness (Report 01, Dim 11: dark inversion zones create false positives). The gate passes; the page still looks flat.

**Makes things WORSE when:** Gates create gaming incentives. Report 05 identifies the Middle-tier paradox: 0 gates produced PA-05 4/4; 42 gates produce 2.0/4 initial. Builders may allocate CSS budget toward gate compliance (integer borders, specific margin values) rather than perceptual quality. Every gate that measures a proxy redirects builder attention from composition to threshold-chasing.

**Conditions for success:** (1) The property is DOM-measurable with no DPR or context sensitivity. (2) The check has zero false-positive rate (or codified exceptions per B-14). (3) The requirement genuinely correlates with perceptual quality, not just structural compliance.

### Fix Type 2: Spec Reduction

**Works when:** The reduced spec brings per-agent input below the attention threshold (~800 lines per Report 02). The Middle-tier's 100-line recipe is the proof: the builder held the ENTIRE spec in working memory. Report 02's empirical curve shows 95% compliance at <500 lines degrading to 72% at ~4,650.

**Moves the problem when:** Reduction removes the wrong things. Removing "Target 8+ components" (a judgment rule) from the spec won't increase component adoption — it just removes the aspiration. The problem is enforcement format, not spec volume.

**Makes things WORSE when:** It removes creative enablement content. Report 05 notes the recipe format ("Read/Select/Deploy/Assess" verbs, sequenced steps, specific CSS values) is what made the Middle-tier succeed. Reducing the recipe to "be creative" removes the vocabulary that ENABLES quality. Report 03 Section 5 confirms: "Evaluation files scale well. Specification files scale badly." Cutting evaluation spec (PA questions, gate definitions) would degrade the pipeline's strongest subsystem.

**Conditions for success:** (1) The removed content is constraint/prohibition, not recipe/enablement. (2) Remaining spec stays in recipe format with concrete CSS. (3) Per-agent input drops below ~800 lines for the affected agent.

### Fix Type 3: File Consolidation

**Works when:** The merged files serve the same agent and have no isolation requirement. Report 03 identifies 7 convenience splits (gate-runner-preconditions, gate-manifest.json, pa-manifest, etc.) that create sync requirements with zero isolation benefit. Merging them removes 7 cross-reference failure surfaces.

**Moves the problem when:** Consolidation increases a single file's length past an agent's attention budget. Merging MANIFEST Section 4 into the orchestrator adds ~240 lines to an already-1,129-line file. The sync problem is fixed; the attention problem is worsened.

**Makes things WORSE when:** It destroys information isolation. Report 03 is emphatic: pa-guardrails.md + pa-guardrails-weaver.md MUST remain separate. Merging would contaminate auditor judgment with weaver scoring criteria. The PA split (6 files) is the pipeline's most reliable subsystem BECAUSE of its isolation.

**Conditions for success:** (1) Both files serve the same agent. (2) No information-isolation requirement exists. (3) The merged file stays under the consumer agent's attention budget. (4) The merge eliminates at least 2 cross-references.

### Fix Type 4: Template Slots

**Works when:** The information is predictable and repeatable across builds. Hover behavior (A-01) and signal declarations (A-02) should appear in EVERY brief. A template slot guarantees inclusion regardless of assembler attention. Report 01 (Dim 1) confirms: the assembler faithfully fills slots — it fills what the template asks for, nothing more.

**Moves the problem when:** The information varies by content and cannot be templated. Value table spacing progressions are content-specific (10 per-zone tables, 262 lines). A template slot for "spacing progressions" would either be too generic (slot exists, assembler fills it with "spacing scale 4-96px" — same loss) or too specific (slot demands all 262 lines — exceeds brief budget).

**Makes things WORSE when:** Template slots increase brief length past the builder's attention budget. Report 02 identifies ~3,600 lines as the MANIFEST's builder input target. Each template slot adds ~5-15 lines to the brief. At 272 lines current, there's headroom — but 35 new slots at 10 lines each would push the brief to 622 lines, past the point where Report 02's attention curve predicts degradation.

**Conditions for success:** (1) The content appears in every build, not just some. (2) The slot can be filled in <=15 lines. (3) Total brief stays under ~350 lines.

### Fix Type 5: Feedback Loops

**Works when:** The feedback is concrete, actionable, and consumed by a specific agent. REFINE is the proof: +1.5 PA-05 from artistic impression fed to a fresh builder. Report 01 (Dim 13) confirms REFINE as the pipeline's ONLY effective feedback loop.

**Moves the problem when:** The feedback is diagnostic, not prescriptive. "DELIGHT 4/10" tells you something is wrong but not what to do. Report 01 notes PA findings are in perceptual language, not traceable to brief template gaps. A human must translate "no hover states" into "brief template lacks hover vocabulary slot."

**Makes things WORSE when:** Feedback creates infinite regress. Report 01 (Dim 7): adding GR-48 to catch missing gates, then needing GR-49 to catch missing GR-48, then needing... Each feedback layer is itself subject to non-execution.

**Conditions for success:** (1) The feedback consumer is a DIFFERENT agent than the feedback producer. (2) The feedback is prescriptive ("add X to file Y"), not diagnostic ("quality is low"). (3) The feedback loop is structural (pipeline won't proceed without it), not voluntary.

### Fix Type 6: Tracker/Instrumentation

**Works when:** The tracked field is auto-populated by code. Report 04 Section 5 proposes ~60% auto-fill. File existence, line counts, timestamps, gate results — all derivable without orchestrator effort. Report 05 (S-01 through S-05) confirms: mechanical, zero-judgment fixes stick.

**Moves the problem when:** The tracking requires manual judgment under time pressure. Report 04 shows tracker fill rate inversely correlates with pipeline phase: 0% for early phases, 90% for novel phases. The orchestrator fills what's immediately useful and skips what's retrospective.

**Makes things WORSE when:** It increases total trackable items. Report 01 (Dim 7): 375 items at 67% = 98 missed. Adding 11 proposals = ~420 items. If fill rate holds, 140 missed — a NET INCREASE in untracked items. Report 02 confirms the 20:1 meta-output threshold: every tracking line competes for the same finite attention.

**Conditions for success:** (1) >60% of fields are auto-populated. (2) Manual fields gate subsequent phases (structural, not voluntary). (3) Total manual fields < 50. (4) Meta-to-output ratio stays under 10:1.

---

## Section 2: Checklist Item Categories

### Category A: Signal AND Implementation Both Correct (Leave Alone)

- **A-01** (hover template slot): Signal correct (hover absent), implementation correct (template slot). Report 01 Dim 1 confirms template slot absence is THE mechanism.
- **B-04** (fix GR-11 adjacent pairs): Signal correct (false positive), implementation correct (code fix). Report 03 confirms GR-11 checks all-pairs when spec means adjacent-only.
- **B-07** (DPR correction before gates): Signal correct (DPR artifacts), implementation correct (mechanical fix). Report 05 confirms DPR workaround stuck for screenshots; extend to gates.
- **C-07** (standardize integrative filename): Signal correct (naming mismatch), implementation correct (2-line fix).
- **A-09** (codify REFINE isolation): Signal correct (isolation critical to REFINE success), implementation correct (explicit protocol).

### Category B: Signal Correct, Implementation Needs Reframing

- **A-04** (edge-zone channel minimums): Signal correct — builders under-execute at edges. But the implementation ("numbered requirements") risks becoming another judgment rule the builder satisfices on. Report 02 shows builders satisfice at minimums: "3+ channels" would produce exactly 3. **Nuance:** Need a GATE (GR-55, proposed in B-06) not just a numbered requirement. The brief change alone (A-04) will NOT fix this without the gate (B-06). These should be linked or merged.

- **A-05** (component selection HTML comment): Signal correct — 5-6 vs 8+ is a real regression. But the implementation (force builder to declare selection in comment before building) adds a meta-task to the builder's construction mode. Report 02 shows meta-process tasks are most vulnerable to non-execution. **Nuance:** The declaration might be pro-forma ("I'll use callout, pull-quote, blockquote..." then not use them). A post-build gate (GR-46 counting actual component classes) is more reliable than a pre-build declaration.

- **B-01** (unify gate JSON + GR-48): Signal absolutely correct — GR-48 never running is the pipeline's most dangerous recursive failure. But the implementation asks the orchestrator to maintain a running results array across phases. Report 02 shows the orchestrator at ~4,650 lines is already at 72% compliance. **Nuance:** The running-array pattern is itself a voluntary-execution task. Report 04's `runAllGates()` wrapper (code-enforced accumulation) is more reliable than an orchestrator-maintained array. Favor code over spec.

- **D-01** (derive L0 from L2): Signal correct — L0/L2 divergence is real. But "derive L0 from L2" does nothing if L2 is also empty (which it was for Phases 0-2). **Nuance:** The fix prevents the two-story ILLUSION but doesn't solve the root cause (L2 not being filled). Needs to be paired with D-04 (auto-fill) and Report 04's phase-gated check (can't start Phase N+1 until Phase N tracker is >80%).

- **D-05** (timing ledger): Signal correct — timestamps were estimated not actual. Implementation ("append-only table") adds 20 items to the tracker. Report 01 Dim 7: each new tracked item is itself subject to non-execution. **Nuance:** Only works if timestamps are CODE-generated (`date -u` at spawn/complete), not orchestrator-entered. If manual, this becomes 20 more fields the orchestrator skips under pressure.

- **D-06** (compression metrics): Signal correct — compression ratio is diagnostic. But implementation adds a tracking table the orchestrator must fill at each stage. **Nuance:** This should be computed by code (BV-05 can calculate input/output line counts), not entered manually. Manual compression tracking will hit the same 0% fill rate as Pre-Flight.

- **B-09** (post-REFINE mechanical sweep): Signal correct — REFINE introduced nav rail that failed GR-52. But "run a gate SUBSET" is still a voluntary execution choice. **Nuance:** Should be automatic: the REFINE gate pass should ALWAYS run identity + accessibility gates as a code-enforced step, not an orchestrator decision.

### Category C: Obvious Reframing Would Be Wrong

- **A-03** (dark-zone pre-check before PA): The "obvious" reframing is "add a gate." But Report 01 Dim 11 shows context sensitivity: dark zones are inherently dense, and what looks "invisible" at DPR 0.667 may be fine at DPR 1.0. A binary gate ("< 30% visible content = HALT") would false-positive on every dark-themed design. **The right fix is DPR correction (B-07) FIRST, then a human scroll-through.** A gate here would suppress legitimate dark-zone aesthetics.

- **A-08** (border width recipe format): The "obvious" reframing is "add GR-08 as a stricter gate." But Report 05 (R-01) shows the issue is PARTIALLY a DPR measurement artifact: integer CSS values produce fractional computed values at DPR 0.667. Tightening GR-08 without fixing DPR (B-07) creates more false positives. **Fix B-07 first. Then A-08 becomes lower priority because the measurement artifact disappears.**

- **D-08** (REFINE delta metrics): The "obvious" reframing is "track everything about REFINE." But Report 05 Section 6 shows REFINE succeeds BECAUSE the builder receives minimal input (existing HTML + 33 lines artistic impression). Adding REFINE tracking infrastructure risks leaking gate data/threshold numbers into the REFINE builder's context. **Nuance:** Track REFINE outcomes (line deltas, gate changes) AFTER the REFINE builder finishes, not as inputs to the REFINE process. Keep the REFINE builder's context clean.

- **C-05** (tiered PA deployment): The "obvious" reframing is "save money by deploying fewer auditors when there's a clear defect." But Report 01 Dim 14 (complexity-induced invisibility) and Report 05 (S-05) confirm: Mode 4 (9 auditors) is the pipeline's most reliable subsystem. Reducing to 3 auditors risks missing secondary issues that the catastrophic defect masks. **Nuance:** The pre-check (A-03) is the right fix. If the pre-check triggers, skip PA entirely and go to REFINE. If it doesn't trigger, run full 9 auditors. Half-measures (3-auditor triage) get the worst of both worlds.

### Category D: Symptoms of Deeper Root Causes

- **B-02** (GR-60 re-run after REFINE), **B-09** (post-REFINE sweep), **D-08** (REFINE tracking) — All three address the same root cause: **REFINE has no verification step.** The pipeline runs gates before REFINE and PA after REFINE, but nothing verifies the REFINE output itself. Root cause: REFINE is treated as "magic that just works" rather than a pipeline phase requiring its own gate pass.

- **D-03** (respawn tracking), **D-05** (timing ledger), **D-06** (compression metrics), **D-09** (triage fields), **D-10** (run-summary.json), **D-11** (alert protocol) — All six address the same root cause: **the pipeline has no observability layer.** Each proposes a different instrumentation surface. Root cause: the pipeline was designed as a production system (transform input to output) not a monitored system (transform + observe + diagnose). Fixing individual metrics won't help if the orchestrator's attention budget is already exhausted. The root fix is Report 04's pipeline-controller script that auto-generates observability data.

- **B-06** (GR-50 collision), **B-11** (GR-19 exemption), **B-14** (exception patterns) — All three address the same root cause: **the gate manifest is not a tested schema.** Gate IDs are assigned by convention, exceptions are undocumented, and no validation ensures manifest-to-code consistency. Root cause: the gate system grew organically (add gates per retrospective) without a schema-level integrity mechanism.

---

## Section 3: Reframing Anti-Patterns

### Anti-Pattern 1: "Just Add a Gate"
The reflexive response to any failure is "add a gate." But Report 05 shows gate count increased 35% (31->42) while coverage DECREASED 3% (74%->71%). Each new gate (B-10, B-12, B-13, GR-55, GR-65, GR-66, GR-67) adds to the manifest without ensuring existing gates run. **Before adding ANY gate, ensure GR-48 coverage enforcement (B-01) is working.** Otherwise every new gate just increases the denominator of the coverage fraction.

### Anti-Pattern 2: "Consolidate Everything"
Report 03 identifies 7 convenience splits to merge. But merging INCREASES individual file sizes. The orchestrator spec at 1,129 lines absorbing gate-runner-preconditions (+83), experiment-protocol, and MANIFEST Section 4 (+240) becomes ~1,452 lines. Report 02 shows compliance degrades past ~800 lines. **Consolidation helps cross-reference integrity but hurts per-agent attention.** The two goals are in tension. Merge only when the sync cost exceeds the length cost.

### Anti-Pattern 3: "Reduce Spec Because Middle-Tier Had Less"
Report 05's Middle-tier paradox (100 lines -> 4/4; 542+ lines -> 2.0/4) is compelling but misleading as a directive. The Middle-tier's content was DIFFERENT (better fit for the 12 mechanisms deployed), the tier target was DIFFERENT (Middle, not Flagship), and n=1. Report 05 itself warns: "This does not mean delete all spec." The lesson is not "less is more" but "recipe format matters more than volume, and creative enablement matters more than constraint."

### Anti-Pattern 4: "Auto-Fill All Tracker Fields"
Report 04 proposes auto-filling ~60% of tracker fields. But auto-fill only works for factual fields (file existence, line counts, timestamps). The 40% that require judgment (routing verification, quality assessments, creative decisions) CANNOT be auto-filled. If the remaining 40% is still >50 fields, the orchestrator will still skip them. **The right move is auto-fill AND reduce: target <=20 manual fields total.**

### Anti-Pattern 5: "Make the Orchestrator Do More Verification"
Items A-03, B-09, C-02, D-01, D-11 all add orchestrator responsibilities. Report 02 shows the orchestrator at ~4,650 lines and ~72% compliance. Every additional mandate REDUCES compliance with existing mandates. **Each item that adds orchestrator work must be paired with something that removes orchestrator work.** Net-zero attention budget, not net-positive.

### Anti-Pattern 6: "Remove Soft Language"
Report 01 (Dim 8) identifies soft language ("target," "aim for," "recommended") as a crack. The instinct is "make everything REQUIRED." But Report 05 notes that Run C achieved 18 component types WITHOUT a "required" designation. Some "targets" serve as creative aspiration that agents occasionally exceed. Making everything binary removes the ceiling alongside the floor. **Convert to binary only when agents consistently under-execute. Leave as aspirational when agents sometimes exceed.**

---

## Section 4: The Hard Cases

### Hard Case 1: A-04 + B-06 — Edge Zone Multi-Coherence

Reports point in opposite directions:
- Report 02 says convert judgment rules to binary gates (GR-55 checking channel count per boundary). This would catch under-execution.
- Report 05 says more gates correlate with lower initial quality. The Middle-tier achieved excellent multi-coherence with 0 gates because the builder optimized for the page, not thresholds.
- Report 01 (Dim 12) says this is a downstream propagation failure — the brief was correct, the builder under-executed.

**The tension:** A gate catches under-execution but may cause the builder to produce exactly-3-channels-at-edges (satisficing at the minimum) rather than the organic result that might exceed or fall below. The gate constrains the floor but may also constrain the ceiling. The brief's numbered requirements (A-04) might suffice without a gate — but Report 02 says judgment rules achieve ~0-65% compliance without enforcement.

**Unresolved:** Is a gate that floors at 3 better than no gate that averages 2-but-sometimes-7? This depends on whether the floor (3) or the ceiling (7) matters more for perceptual quality.

### Hard Case 2: D-01 + D-04 — Tracker Simplification vs Diagnostic Richness

Reports point in opposite directions:
- Report 04 says reduce tracker to ~50 fields (from 298). This makes 100% fill rate achievable.
- Report 01 (Dim 13) says feedback loops require diagnostic data. Without L2 detail, we cannot trace WHY hover behavior was lost, and the same loss will recur.
- Report 03 says the tracker achieved 67% at 375 items. A 50-item tracker at 90% would have ~5 gaps — less data overall, but more reliable.

**The tension:** A slim tracker the orchestrator actually fills vs a rich tracker that captures root-cause data. The current state (375 items, 67% filled, ALL early-phase detail missing) is the worst of both worlds. But reducing to 50 items may lose the specific diagnostic that catches the next novel failure mode.

**Unresolved:** Which 50 fields? The answer requires knowing which failures will recur — but the whole point of diagnostic richness is catching failures you didn't predict.

### Hard Case 3: Report 05's Central Tension — Simplify Initial Build vs Enrich REFINE

Report 05 proposes: simplify initial build spec (closer to 100 lines), accept PA-05 2.0, invest in multi-cycle REFINE. Multiple checklist items (A-01, A-02, A-04, A-05, A-08) go in the OPPOSITE direction — adding to the initial build spec.

**The tension:** The checklist assumes the initial build CAN be improved by better spec. Report 05 argues the initial build is at a quality ceiling imposed by attention limits — improving spec just changes WHICH 80% gets executed. REFINE is where quality actually happens.

**Unresolved:** Should the 12 P1-HIGH items that add to builder/assembler input be implemented? Or should the pipeline accept initial-build mediocrity and invest in REFINE sophistication? The checklist and Report 05 are in direct contradiction. Both have strong evidence.

### Hard Case 4: B-01 (GR-48 Enforcement) — Structural vs Attention Cost

Report 04 proposes GR-48 as a verdict PRECONDITION (can't SHIP without it). This is structurally elegant — same pattern that makes BV gates work. But:
- Report 02 notes GR-48 needs ALL results as input, which are fragmented across 4 locations.
- Report 04 acknowledges a unified results array must be maintained across 3 pipeline phases.
- Report 01 (Dim 7) warns: making GR-48 structural adds it to the critical path, and any bug in GR-48 now blocks the entire verdict.

**The tension:** GR-48 as a voluntary epilogue = never runs. GR-48 as a structural precondition = blocks the pipeline if results are fragmented. The code-wrapper solution (Report 04's `runAllGates()`) resolves this IF implemented. But the wrapper itself is a substantial code change to a 1,654-line JS file that runs in Playwright. A bug in the wrapper could break all gate execution.

**Unresolved:** Implement GR-48 as code-enforced (high reliability, high risk if buggy) or as a spec mandate with better positioning (lower reliability, lower risk)? The conservative path (spec mandate + better positioning) may repeat the current failure. The aggressive path (code-enforced) may introduce a new failure class.

### Hard Case 5: The Meta Problem — 35 Items vs Report 01's Defense Paradox

The MASTER-CHECKLIST has 35 items. Report 01 (Dim 7) warns: implementing all 35 adds ~450 lines to pipeline artifacts, each line a new reference that can rot, a new item subject to non-execution, and a new attention burden. Report 05 shows spec accumulation correlating with LOWER quality. The checklist that fixes problems IS ITSELF the pattern that causes problems.

**The tension:** Every individual item is well-justified. The collection is self-defeating. Implementing 35 fixes pushes the pipeline from ~10,061 to ~10,500 lines, deepening the attention-budget crisis that Report 02 identifies as the root cause. But NOT implementing them leaves 14 crack dimensions unaddressed.

**Unresolved:** How many of the 35 items should be implemented? Report 01 suggests 3 structural changes. Report 05 suggests 3 highest-leverage fixes. The checklist suggests all 35 in priority order. The right number is somewhere between 3 and 35, and picking the wrong subset could be worse than picking none (if the chosen subset increases spec volume without closing the right cracks).

---

*Nuance map complete. 5 hard cases identified, 6 anti-patterns documented, 35 items categorized. Key message: the research converges on structural/code fixes and diverges on spec-volume fixes. When in doubt, favor code over spec, automation over instruction, and fewer-but-enforced over more-but-voluntary.*

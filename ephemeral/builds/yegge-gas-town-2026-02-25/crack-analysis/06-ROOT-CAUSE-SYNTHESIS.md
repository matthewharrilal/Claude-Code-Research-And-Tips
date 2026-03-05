# Root Cause Synthesis — Why Things Keep Falling Through Cracks in Pipeline v3

**Synthesizer:** Opus (synthesizer agent)
**Date:** 2026-02-25
**Inputs:** 5 research reports (taxonomy, LLM attention, architecture, execution, cross-iteration) + master checklist (35 items)

---

## Part 1: The Root Cause Diagnosis

### It Is One Root Cause With Three Manifestations

The 5 reports appear to identify different problems -- 14 crack dimensions, attention budgets, architecture gaps, execution failures, recurrence patterns. But they converge on a single underlying cause:

**The pipeline specifies far more than it enforces, and the gap between specification and enforcement is filled by voluntary agent compliance -- which degrades predictably with volume.**

This is not "agents are unreliable" or "specs are unclear." The specs ARE clear. The agents ARE capable. The problem is architectural: the pipeline's enforcement surface area covers ~6% of its specification surface area (52 gates + 4 BV + 6 decision rules = 62 enforced items out of 885 total). The remaining 94% depends on agents reading, remembering, and choosing to follow instructions under cognitive load that exceeds their reliable processing capacity.

The three manifestations:

**Manifestation 1: Specification exceeds attention budget (Reports 01, 02, 04).** The orchestrator holds ~4,650 lines at ~72% compliance. The builder holds ~2,868 lines at ~80% compliance. The brief assembler holds ~2,839 lines at ~85% compliance. Each agent drops the bottom ~15-28% of its spec input. Those drops are NOT random -- they follow predictable patterns (low salience, late position, meta-process, judgment rules). The pipeline adds spec to prevent previous drops, which increases the volume that causes drops.

**Manifestation 2: Architecture creates compression bottlenecks without enforcement (Report 03).** The recipe-to-brief junction (Boundary C) compresses 2,769 lines into ~165 lines at 5.7:1. The brief template has no slot for hover behavior or signal declarations. The S(x) survival function was designed to govern compression but was never applied. The architecture CREATES the bottleneck (file splits require compression) but provides no ENFORCEMENT at the bottleneck (no gate checks what survives compression).

**Manifestation 3: Fixes are proposed but never applied (Report 05).** Hover behavior has been absent from EVERY pipeline build. The template fix has been proposed for 8+ days across 4+ retrospectives. GR-48 has never executed in any run. The pipeline generates retrospective analysis (15,000+ lines per run) at a rate that far exceeds its implementation capacity (~0 lines applied between runs).

### The Uncomfortable Synthesis

Report 05 delivers the finding the other 4 reports circle around: **the Middle-tier experiment achieved PA-05 4/4 with 100 lines of spec, 0 gates, 8 agents, and 35 minutes. The current pipeline achieves PA-05 2.0/4 initial (3.5/4 after REFINE) with 10,061 lines of spec, 42 gates, 30 agents, and 200 minutes.**

The pipeline's specification volume has an inverse relationship with initial build quality. More spec produces more compliance on binary rules (which were already at 100%) and less compliance on judgment rules (which carry the quality signal). The pipeline is optimizing the wrong variable.

This does NOT mean "delete all spec." Container width enforcement (4-layer redundancy, 3 runs durable) proves that structural enforcement works. Recipe format (template + BV gate) proves that template-level enforcement works. But it means every additional spec line has NEGATIVE marginal value past a threshold the pipeline crossed somewhere between 100 and 530 lines.

---

## Part 2: Convergence Map

### Finding C1: Binary enforcement works; voluntary compliance doesn't
**Reports:** 01 (D3, D8), 02 (Section 3), 03 (Section 8), 04 (Section 1-2), 05 (S-01 through S-05)
**Confidence:** HIGHEST -- unanimous across all 5 reports with identical examples.
Binary rules (container width, border-radius: 0, font trinity) achieve 100% compliance. Judgment rules ("target 8+", "use full range", S(x) function) achieve 0-65%. The dividing line is not complexity but whether violation is mechanically prevented vs voluntarily avoided.

### Finding C2: The orchestrator is overloaded and is the weakest link
**Reports:** 01 (D10), 02 (Section 5), 03 (cross-reference hubs), 04 (Section 7), 05 (implied by tracker gaps)
**Confidence:** HIGH -- 4/5 reports explicitly, 1 implicitly.
The orchestrator holds ~4,650 lines at ~72% compliance. It is both player and referee. It hand-constructs gate results, estimates timestamps, skips meta-gates, runs agents out of sequence. No retrospective has ever analyzed the orchestrator itself. Report 04 calls it "an attention problem disguised as an execution problem."

### Finding C3: The brief template is the primary information bottleneck
**Reports:** 01 (D1, D2), 02 (Section 2.1), 03 (Section 2, Boundary C), 05 (R-05)
**Confidence:** HIGH -- 4/5 reports identify the same mechanism.
Hover behavior (Step 2.7) and signal declarations (Step 3.4c) were lost because the brief template has no slot for them. The assembler fills slots faithfully -- it cannot propagate what the template doesn't prompt for. This has recurred in EVERY pipeline build (100% recurrence rate).

### Finding C4: Gate coverage is declining as gate count increases
**Reports:** 01 (D7, D14), 02 (Section 5.3), 04 (Section 3-4), 05 (R-03)
**Confidence:** HIGH -- 4/5 reports with quantitative evidence.
Gate count: 31 -> 31 -> 42. Coverage: 74% -> 74% -> 71%. GR-48 (the meta-gate) has never executed in any run. The pipeline adds gates faster than it executes them. More gates = more items that can be skipped = less coverage percentage.

### Finding C5: REFINE is the only consistently positive quality intervention
**Reports:** 02 (Section 4.3), 05 (Section 3, Section 6)
**Confidence:** HIGH -- 2 reports explicitly, corroborated by all runs.
REFINE consistently produces +1.0 to +1.5 PA-05 improvement. Initial build quality is flat at 2.0-2.5/4 across all v3 runs. ALL improvement comes from REFINE. The REFINE builder receives LESS spec (existing HTML + 33 lines artistic impression), which is why it succeeds.

### Finding C6: Tracking overhead becomes its own crack source
**Reports:** 01 (D7), 02 (Section 1.2), 03 (Section 5.3), 04 (Section 5), 05 (meta:output ratio)
**Confidence:** HIGH -- 4/5 reports identify this paradox.
375 tracker items at 67% fill rate = 98 unfilled. Adding the proposed 11 instrumentation items would increase to ~420 items. If fill rate stays at 67%, 139 items would be unfilled -- a net INCREASE in gaps despite more tracking. The 20:1 meta:output threshold exists but the trend is toward more meta per run.

### Finding C7: The pipeline generates more analysis than implementation
**Reports:** 05 (Sections 5, 8)
**Confidence:** MODERATE -- 1 report explicitly, but the evidence is stark.
Hover template fix: proposed 8+ days ago, 4+ retrospectives, 0 implementations. GR-48 enforcement: proposed in every run, 0 implementations. The pipeline spends orders of magnitude more time analyzing gaps than fixing them. Each run produces 10+ analysis files and 35+ checklist items. Implementation rate: ~0%.

---

## Part 3: The Fix Hierarchy (By Leverage)

Ranked by cracks-closed-per-line-of-effort. Specific files and line estimates from the reports.

### Tier 1: Highest Leverage (Close 60%+ of Cracks)

**Fix 1: Add hover behavior + signal declaration slots to brief template**
- Files: `design-system/pipeline/artifact-tc-brief-template.md`
- Lines: ~20 added
- Closes: Template slot absence (D1), compression loss for these items (D2), R-05 (100% recurrence)
- Reports supporting: 01, 02, 03, 05
- Why highest leverage: 20 lines close a defect that has recurred in every single pipeline build. The ratio of analysis-to-fix is approximately 500:1.

**Fix 2: Unified gate results JSON + GR-48 as verdict precondition**
- Files: `design-system/pipeline/artifact-orchestrator.md` (~30 lines), `design-system/pipeline/gate-runner-core.js` (~20 lines)
- Lines: ~50 total
- Closes: Voluntary non-execution (D3), complexity-induced invisibility (D14), defense paradox (D7), R-03 (gate coverage gaps), R-07 (hand-constructed results)
- Reports supporting: 01, 02, 03, 04, 05
- Report 04's key insight: make GR-48 a verdict PRECONDITION (same pattern as BV gates), not an epilogue. If GR-48 fails, verdict = INCOMPLETE regardless of PA-05.

**Fix 3: `source` field on gate results (`code` | `manual` | `skip`)**
- Files: `design-system/pipeline/gate-runner-spec.md` (~15 lines), gate functions (~5 lines each)
- Lines: ~30 total
- Closes: Execution-recording divergence (D4), orchestrator opacity (D10)
- Reports supporting: 01, 04, 05

### Tier 2: High Leverage (Close 25% of Cracks)

**Fix 4: DPR correction before all gate execution**
- Files: `design-system/pipeline/artifact-orchestrator.md` (~5 lines)
- Lines: ~5
- Closes: R-01 (border width false positives), R-08 (DPR measurement), D9 (platform variance)
- Reports supporting: 01, 05. Code already exists (gate-runner-core.js lines 1483-1510).

**Fix 5: Fix GR-11 adjacent-only + GR-15 auto-margin exclusion**
- Files: `design-system/pipeline/gate-runner-core.js` (~15 lines)
- Lines: ~15
- Closes: R-04 (false positives, accelerating), D11 (mode/context sensitivity)
- Reports supporting: 01, 05

**Fix 6: Post-REFINE re-run of failed gates**
- Files: `design-system/pipeline/artifact-orchestrator.md` (~5 lines)
- Lines: ~5
- Closes: Voluntary non-execution of GR-60 re-verification, feedback loop absence (D13)
- Reports supporting: 01, 04

**Fix 7: Convert "target 8+" to binary gate (GR-66 component count)**
- Files: `design-system/pipeline/gate-runner-core.js` (~15 lines)
- Lines: ~15
- Closes: R-02 (component adoption regression), D8 (soft language), D12 (downstream propagation)
- Reports supporting: 01, 02, 05

### Tier 3: Moderate Leverage (Close 15% of Cracks)

**Fix 8: Reduce tracker to ~50 critical fields + auto-populate 60%**
- Files: `design-system/pipeline/EXECUTION-TRACKER-TEMPLATE.md` (rewrite), new `tracker-preflight.sh` (~60 lines)
- Lines: ~200 rewritten, ~60 new
- Closes: D4 (execution-recording divergence), D7 (defense paradox via LESS tracking), R-06 (tracker gaps)
- Reports supporting: 02, 03, 04
- This is COUNTER-INTUITIVE: the fix is LESS tracking, not more. 50 fields at 95% > 375 fields at 67%.

**Fix 9: Derive L0 from L2 (no manual summary checkboxes)**
- Files: `design-system/pipeline/EXECUTION-TRACKER-TEMPLATE.md` (~30 lines)
- Lines: ~30 modified
- Closes: D4 (two-story divergence), R-06 (tracker L2/L3 gaps)
- Reports supporting: 01, 04, 05

### NOT Recommended (Negative Leverage)

**Adding more gates before fixing coverage.** Report 05: "42 gates at 71% coverage is worse than 30 gates at 95% coverage." GR-65, GR-66, GR-67, GR-68 should wait until GR-48 enforcement is operational.

**Adding more tracker fields.** Reports 01, 04: more fields = lower fill rate = more gaps. Reduce first, then add selectively.

**Splitting the orchestrator role.** Report 02 proposes 3 phase-orchestrators (~1,400/2,100/1,000 lines each). This is architecturally sound but high-effort (~200+ lines, fundamental workflow change). Defer until Tier 1-2 fixes are applied and measured.

---

## Part 4: What This Means for the Master Checklist

### Items CORRECTLY Framed (Implement As-Is)

- **A-01** (hover template slot): Correctly identified as highest-impact single fix. All 5 reports support it.
- **A-02** (signal declaration slot): Correctly framed, correctly downgraded to P1 by adversarial review.
- **B-03** (`source` field): Correctly identified as P0. Report 04 confirms this is the gate integrity foundation.
- **B-04** (GR-11 adjacent-only fix): Correctly specified. Report 01 provides the exact mechanism.
- **B-05** (GR-15 auto-margin exclusion): Correctly specified.
- **B-07** (DPR before all gates): Correctly specified. Code already exists.
- **A-06** (Integrative timing): Correctly specified.
- **A-07** (rendering vs composition in weaver): Correctly specified. Important for preventing REBUILD on rendering-only failures.

### Items With Right Signal, Wrong Implementation

- **B-01** (unify JSON + GR-48): Right signal, but the implementation should go further. Report 04's insight: GR-48 should be a VERDICT PRECONDITION, not just "the last gate to run." Reframe: "Verdict cannot be SHIP or REFINE unless GR-48 PASS. GR-48 FAIL = INCOMPLETE." This uses the same structural enforcement pattern that makes BV gates work (something downstream DEPENDS on the result).

- **D-01** (derive L0 from L2): Right signal, but the checklist adds L3 enforcement ON TOP of fixing L0/L2. Report 04 recommends the opposite: REDUCE the tracker to ~50 fields first, THEN enforce fill rate. Adding enforcement to a 375-field tracker doesn't fix the root cause (too many fields). Reframe: D-01 should first reduce tracker to ~50 critical fields, then derive L0 from L2 within that reduced set.

- **A-04** (edge zone channel minimums): Right signal, but phrased as a number to hit. Report 02 shows that numbered minimums are still judgment rules the builder satisfices on. Reframe: convert to a GATE (GR-55 multi-coherence check) that programmatically measures channel shifts at each boundary, rather than relying on the builder to self-verify.

- **A-05** (component selection HTML comment): Right signal (declaration before building), but the current implementation adds builder input lines without reducing others. Report 05 warns about the builder input ceiling (~3,600 lines). Reframe: A-05 should be PAIRED with a reduction of builder input elsewhere (e.g., compress content map appendix per A-10, or reduce value table detail).

- **D-07** (BV-05 keyword scan): Right signal, but should be a CODE gate in the BV runner, not an orchestrator text check. Report 04 demonstrates that code enforcement achieves 100% reliability while orchestrator text checks achieve ~72%. Reframe: implement as a JS function in gate-runner-core.js that the BV runner calls automatically.

### Items Addressing Symptoms Not Root Causes

- **D-05** (timing ledger): Addresses the symptom (timing inaccuracy) but the root cause is that the orchestrator fills the tracker retrospectively instead of as-it-happens. The timing ledger adds 20 more fields to a tracker that already has too many. If the tracker is reduced to 50 fields (Fix 8 above), timing can be 3-5 of those fields rather than a separate 20-field section.

- **D-06** (compression metrics section): Addresses the symptom (unknown compression ratios) but the root cause is that S(x) was never applied. Adding a metrics TABLE to track what S(x) would have computed is tracking-about-tracking. Either implement S(x) as a BV gate or remove it from the spec (per A-12).

- **D-08** (REFINE L2 tracking): Adds more tracking infrastructure for REFINE, which is the one phase that already WORKS. Report 05 shows REFINE is the pipeline's highest-ROI mechanism. Adding 40 lines of tracking to the working mechanism risks the defense paradox (D7): making the working thing more complex until it breaks.

- **D-10** (run-summary.json): Nice for cross-run comparison but does not close any crack. It is meta-infrastructure about meta-infrastructure.

- **C-05** (tiered PA deployment): Addresses the symptom (wasting agents on catastrophic defects) but A-03 (dark-zone pre-check) already prevents the scenario. C-05 adds complexity for a case that A-03 eliminates.

### Root Causes With NO Corresponding Checklist Item

1. **The specification volume problem itself.** No checklist item proposes REDUCING spec volume. Every item ADDS lines. Report 05's central finding -- that the Middle-tier achieved higher quality with 100 lines than the current pipeline achieves with 10,061 -- has no implementation path in the checklist. The checklist needs an item: "AUDIT builder input volume. If total builder-facing spec exceeds 1,500 lines, identify lines to CUT before adding new ones."

2. **The retrospective-to-implementation gap.** No checklist item addresses the fact that fixes are proposed repeatedly and never applied. The checklist itself may become the 5th retrospective to propose the hover template fix. There should be a persistent, cross-run "unapplied fixes" tracker that is checked BEFORE any new retrospective analysis begins.

3. **REFINE investment vs initial-spec investment.** Report 05 identifies that all quality improvement comes from REFINE, but no checklist item proposes enriching the REFINE protocol or simplifying the initial build spec. The checklist optimizes the initial build (which has flat returns) and ignores the REFINE cycle (which has increasing returns).

4. **Orchestrator accountability.** Report 01 (D10) identifies the orchestrator as the pipeline's largest blind spot. Report 04 documents hand-constructed gate results, estimated timestamps, and out-of-sequence agent deployment. No checklist item creates an orchestrator audit mechanism.

---

## Part 5: Principles for the Auxiliary Prompt

### What Won't Work

The current model -- a voluntary compliance checklist that the orchestrator reads and chooses to follow -- is the exact pattern that reports 01-05 unanimously identify as failing. Report 02 shows judgment-rule compliance at 0-65%. Report 04 shows tracker field compliance at 67%. Adding another document of judgment rules will achieve the same compliance rate.

Specifically, an auxiliary prompt that says "check these 35 things" will be processed with the same attention budget that already drops 28% of the orchestrator's 4,650-line input. It will increase the input by ~100 lines, reducing the compliance rate on EXISTING specs while achieving partial compliance on the new items. Net effect: negative.

### What Would Work

The auxiliary prompt should contain ONLY things that meet two criteria:
1. **Binary and self-verifiable.** The orchestrator can check yes/no with zero judgment.
2. **Gate subsequent actions.** Failure to check blocks something the orchestrator wants to do.

### Proposed Structure

The auxiliary prompt should NOT be a checklist. It should be a **3-gate sequence** embedded at pipeline decision points where the orchestrator already stops to make decisions:

**Gate A: Pre-Brief Verification (after Brief Assembler, before BV gates)**
```
Before running BV-01: scan the brief for these EXACT strings.
REQUIRED (brief FAILS without them):
  - "hover" or ":hover" (Step 2.7)
  - "SCROLL-REVEALS" (Step 3.4c)
  - "component" + a count >= 8 (Step 1.4)
  - One D-0N reference per disposition
MISSING ANY = return brief to assembler with: "Missing: [list]"
```
This is binary (string present or not), self-verifiable (grep), and gates the builder spawn (no builder without passing).

**Gate B: Pre-Verdict Integrity Check (after PA reports, before weaver)**
```
Before spawning the weaver, verify:
  - gate-results.json exists AND contains >= [REQUIRED count] entries
  - Every REQUIRED gate ID from gate-manifest.json appears in results
  - Every result has a "source" field
  - GR-48 is present with status PASS
MISSING ANY = verdict is INCOMPLETE. Do NOT spawn weaver.
```
This is binary (file exists, field exists), self-verifiable (JSON inspection), and gates the verdict (no weaver without passing).

**Gate C: Post-REFINE Regression Check (after REFINE builder, before REFINE PA)**
```
After REFINE builder completes:
  - Re-run every gate that FAILED in initial pass
  - Run GR-10, GR-18, GR-22, GR-51, GR-52 (mechanical regression set)
  - If any NEW failures introduced: return to REFINE builder with fix list
Do NOT spawn 9 PA auditors until mechanical gates pass.
```
This is binary (gate pass/fail), self-verifiable (code output), and gates PA deployment (no auditors without passing).

### What Makes This Different From the Current Approach

1. **3 gates, not 35 items.** Within the orchestrator's attention budget.
2. **Positioned at decision points the orchestrator already reaches.** Not a separate document to remember to read.
3. **Each gate blocks something expensive.** Gate A blocks builder spawn. Gate B blocks weaver spawn. Gate C blocks PA deployment. The orchestrator is MOTIVATED to pass them because failure means it cannot proceed.
4. **Zero judgment rules.** Every check is string-present, field-exists, or gate-pass. No "target," "aim for," or "consider."
5. **~30 lines total, not ~100+.** Fits in the orchestrator's effective attention window.

The remaining 32 checklist items (the ones that don't fit into 3 binary gates) should be converted to:
- Code in gate-runner-core.js (for anything measurable)
- Template structure in artifact-tc-brief-template.md (for anything the assembler must include)
- Architectural prevention (for anything the pipeline should make impossible)

If an item cannot be expressed as code, template, or architecture, it will not be reliably followed. That is the central finding of all 5 reports.

---

## Summary

**Root cause:** The pipeline specifies 885 items but enforces 62. The 823-item gap is filled by voluntary agent compliance that degrades predictably with volume.

**Highest-leverage fixes (in order):**
1. Add 2 template slots (hover + signals) -- 20 lines, closes a defect in 100% of builds
2. Unify gate JSON + make GR-48 a verdict precondition -- 50 lines, closes the meta-verification gap
3. Add `source` field to gate results -- 30 lines, restores gate integrity
4. DPR correction before gates -- 5 lines, fixes 5-6 unreliable gate measurements
5. Fix GR-11 + GR-15 false positives -- 15 lines, restores gate credibility

**What the pipeline should STOP doing:** Adding spec without enforcement. Adding gates without fixing coverage. Generating retrospective analysis without implementing previous findings.

**What the pipeline should START doing:** Reducing builder input volume. Investing in REFINE protocol. Implementing the 3 fixes that have been proposed for 8+ days.

Total lines to implement Tier 1 fixes: ~100. Total lines of analysis identifying them: ~50,000+.

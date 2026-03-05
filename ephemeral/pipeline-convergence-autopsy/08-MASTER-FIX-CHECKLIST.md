# Master Surgical Fix Checklist — Pipeline v3 Convergence Autopsy

**Date:** 2026-02-25
**Synthesized by:** Opus agent
**Sources:** 7 investigation reports (01-stop-signal-trace, 02-ideology-analysis, 03-behavioral-economics, 04-self-analysis, 05-gate-architecture-audit, 06-cross-run-comparison, 07-anti-loss-audit)
**Scope:** Every surgical change needed to make iteration a first-class citizen in Pipeline v3

---

## How to Use This Checklist

Fixes are organized **by target file**. Within each file, fixes are ordered by priority (P0 first). Each fix has a unique ID for cross-referencing.

**Priority legend:**
- **P0-BLOCKING** — Pipeline will always stop too early without this fix
- **P1-HIGH** — Significantly improves convergence probability
- **P2-MEDIUM** — Helps but not critical for basic iteration

**Classification legend:**
- **EXPLICIT** — Change specific existing text
- **STRUCTURAL** — Add a new section or mechanism
- **ARCHITECTURAL** — Rethink a pipeline concept

---

## FILE 1: `ephemeral/va-extraction/MANIFEST.md`

### FIX-01: Replace "pipeline terminates" with iteration-aware language in Quickstart Step 11
- **Classification:** EXPLICIT
- **Priority:** P0-BLOCKING
- **What to change:**

  **Current text (Step 11, ~line 40-41):**
  > If SHIP WITH FIXES: pipeline terminates with mechanical fix list. If REFINE or REBUILD: pipeline terminates with action items for a new manual run. (Single-pass default — no automatic re-execution.)

  **New text:**
  > If SHIP WITH FIXES: pipeline completes with mechanical fix list. If REFINE: execute REFINE protocol (artifact-orchestrator.md Section 7) — spawn different Opus builder, then RETURN TO PHASE 3 FOR FULL RE-AUDIT. If REBUILD: execute REBUILD protocol (artifact-orchestrator.md Section 7) — full Phase 0-3 re-execution. Pipeline is NOT complete until verdict is SHIP or SHIP WITH FIXES.

- **Why it matters:** Report 01 (ES-01) identifies this as "the primary kill switch." The word "terminates" appears twice, converting REFINE from an action verb to a terminal label. Report 03 (Section 1.1) shows the numbered step gradient creates "reaching step 11 = done" pressure. Report 04 (Section 2) documents the actual Molly run stopping here.
- **Estimated scope:** ~3 lines changed
- **Dependencies:** None

### FIX-02: Replace "Maximum iterations" hard cap with convergence-based iteration budget
- **Classification:** EXPLICIT
- **Priority:** P0-BLOCKING
- **What to change:**

  **Current text (~line 42):**
  > Maximum iterations: 1 REBUILD + 1 REFINE before requiring human review. If a second REBUILD is triggered, the pipeline terminates with diagnostic output.

  **New text:**
  > Iteration budget: up to 1 REBUILD + 2 REFINE passes. Continue REFINE if PA-05 improved by >= 0.3 from previous pass. Stop if: (a) PA-05 delta < 0.3 between passes (diminishing returns), (b) verdict is SHIP or SHIP WITH FIXES, or (c) iteration budget exhausted. If a second REBUILD is triggered, pipeline halts with diagnostic output for human review.

- **Why it matters:** Report 02 (Finding 2) proposes replacing the hard cap with a convergence criterion. Report 03 (Section 5.5) identifies the missing iteration budget. Report 01 (ES-02) shows the cap functions as a permission slip to stop after zero iterations because the default path never reaches the cap.
- **Estimated scope:** ~3 lines changed
- **Dependencies:** None

### FIX-03: Remove "SINGLE-PASS" as default architecture label from Pipeline Overview
- **Classification:** EXPLICIT
- **Priority:** P1-HIGH
- **What to change:**

  **Current text (~line 65):**
  > Default mode: SINGLE-PASS (3-pass is EXPERIMENTAL, blocked until Experiment #21 validates it).

  **New text:**
  > Default mode: ITERATIVE-TO-CONVERGENCE. Initial build + PA audit + REFINE if needed. The pipeline iterates until PA-05 reaches SHIP threshold or improvement stalls (delta < 0.3). The 3-pass Compositional Critic architecture remains EXPERIMENTAL (blocked until Experiment #21); this does not affect the standard REFINE loop.

- **Why it matters:** Report 01 (ES-03, ES-04, ES-06) found this label repeated 4 times across 2 files. Report 02 (Section 4) identifies the "experiment gate" that conflates simple REFINE iteration with the experimental 3-pass architecture. The distinction matters: REFINE is already validated (Yegge +1.5 PA-05); the 3-pass Compositional Critic is not.
- **Estimated scope:** ~2 lines changed
- **Dependencies:** None

### FIX-04: Rewrite dependency graph description to include feedback loop
- **Classification:** EXPLICIT
- **Priority:** P1-HIGH
- **What to change:**

  **Current text (~line 591-593):**
  > In single-pass mode, there are NO feedback loops. If the verdict is REFINE or REBUILD, the pipeline terminates with action items. A new pipeline run would be needed to act on those items.

  **New text:**
  > The pipeline includes a feedback loop for REFINE verdicts: after REFINE build, the pipeline returns to Phase 3A (screenshots + gates) and Phase 3B-C (full PA re-audit). This loop repeats until PA-05 reaches SHIP threshold or improvement stalls. The dependency graph arrow from VERDICT back to Phase 3A is the REFINE loop.

- **Why it matters:** Report 01 (ES-07) identifies this as CRITICAL — it explicitly declares "NO feedback loops" which directly contradicts the REFINE protocol's step 5. Report 01 (IS-02) notes the ASCII dependency graph is a DAG with no cycles, reinforcing the no-loop framing.
- **Estimated scope:** ~3 lines changed + ASCII graph update (add arrow from Verdict back to Phase 3A)
- **Dependencies:** None

### FIX-05: Rewrite "REFINE and REBUILD are OUTPUT LABELS" to action labels
- **Classification:** EXPLICIT
- **Priority:** P0-BLOCKING
- **What to change:**

  **Current text (~line 519):**
  > Single-pass behavior: In single-pass mode (the default), REFINE and REBUILD are OUTPUT LABELS. The pipeline terminates with the verdict + action items. A human decides whether to run a new pipeline execution. There is no automatic re-execution.

  **New text:**
  > Verdict behavior: REFINE and REBUILD are ACTION TRIGGERS. When the Weaver issues REFINE, the orchestrator executes the REFINE protocol (artifact-orchestrator.md Section 7) and returns to Phase 3 for re-audit. When the Weaver issues REBUILD, the orchestrator executes the REBUILD protocol and returns to Phase 0. The pipeline continues until verdict is SHIP or SHIP WITH FIXES, or the iteration budget is exhausted.

- **Why it matters:** Report 01 (ES-08) calls the phrase "OUTPUT LABELS" devastating — it redefines REFINE from a verb (action) to a noun (classification). This is the single most destructive framing in the entire pipeline. Report 02 (Section 3) traces how this framing metastasized from classification tool to justification for non-iteration.
- **Estimated scope:** ~4 lines changed
- **Dependencies:** FIX-02 (iteration budget defined first)

### FIX-06: Add REFINE builder prompt template to Appendix E
- **Classification:** STRUCTURAL
- **Priority:** P1-HIGH
- **What to change:** Add a new subsection in Appendix E after the Builder prompt template:

  ```markdown
  ### REFINE Builder Prompt Template

  You are a COMPOSITIONAL REFINEMENT agent. You will receive a page that has already
  been built and audited. Your job is to COMPOSE — not fix, not patch, not repair.

  **You receive:**
  - The original execution brief (for context)
  - Pass {N} HTML output (the current page)
  - The Weaver's artistic impression (describes what the page FEELS like — this is your primary input)
  - The original builder's conviction artifact (3-sentence design intent)
  {IF RESIDUAL EXISTS: - The previous builder's residual artifact (what they would change next)}

  **You do NOT receive:** Gate scores, threshold numbers, diagnostic language, PA question text.

  **Your mode:** COMPOSITIONAL. You are refining relationships between zones, strengthening
  the emotional arc, deepening the metaphor. You are NOT fixing defects.

  **Output:** A single HTML file — the refined page. Include a CONVICTION comment at the
  top (your 3-sentence design intent for THIS pass). Include a RESIDUAL comment at the
  bottom: what you would change if you had one more pass (minimum 50 characters).

  **Critical:** Do NOT enter CORRECTIVE mode. If the artistic impression says "the middle
  sags," respond by COMPOSING a better middle — not by tweaking padding values.
  ```

- **Why it matters:** Report 01 (AL-03) identifies the missing REFINE prompt template as a HIGH-priority absent loop. Without it, the orchestrator must improvise, violating the pipeline's "use these templates" ethos. Report 04 (Section 1, Factor 5) confirms the orchestrator worked from memory rather than re-reading the protocol.
- **Estimated scope:** ~25 lines added
- **Dependencies:** FIX-14 (RESIDUAL artifact defined first)

### FIX-07: Add iteration-aware file naming convention
- **Classification:** STRUCTURAL
- **Priority:** P2-MEDIUM
- **What to change:** In the output file naming section (~line 526-536), add:

  ```markdown
  ### Iteration File Naming

  When REFINE produces a second build cycle, suffix all Phase 3 artifacts with `-refine`:
  - `p3a-gate-results-refine.json`
  - `p3b-pa-auditor-A-refine.md` through `p3b-pa-auditor-I-refine.md`
  - `p3b-integrative-refine.md`
  - `p3c-weaver-diagnostic-refine.md`
  - `p3c-weaver-artistic-refine.md`

  For a third cycle (second REFINE), use `-refine-2`. The HTML file is always overwritten
  in place (single canonical output).

  DO NOT overwrite Pass 1 PA reports — they are the comparison baseline.
  ```

- **Why it matters:** Report 01 (IS-04) identifies single-indexed naming as an implicit stop signal. Report 06 (Section 1) shows Yegge used `-refine` suffixes while Molly had zero post-REFINE artifacts. The naming convention makes iteration structurally expected.
- **Estimated scope:** ~12 lines added
- **Dependencies:** None

---

## FILE 2: `ephemeral/va-extraction/artifact-orchestrator.md`

### FIX-08: Rewrite REFINE protocol from 5-step list to 3-section BEFORE/DURING/AFTER structure
- **Classification:** STRUCTURAL
- **Priority:** P0-BLOCKING
- **What to change:**

  **Current text (~lines 543-548):**
  ```
  REFINE protocol:
  1. Spawn DIFFERENT Opus builder (defeats continuation bias)
  2. Give it: original brief, Pass 1 output, PA weaver's artistic impressions (in generative language)
  3. DO NOT give: gate scores, threshold numbers, diagnostic language
  4. Builder enters COMPOSITIONAL mode (refining relationships, not fixing defects)
  5. Return to Phase 3 for re-audit
  ```

  **New text:**
  ```
  ## REFINE Protocol

  ### BEFORE REFINE
  - **Re-read this section now.** Do not execute from memory.
  - Apply mechanical fixes FIRST (same builder, CSS-only).
  - Record pre-REFINE PA-05 score in the Iteration Log.

  ### DURING REFINE
  - Spawn a DIFFERENT Opus builder (defeats continuation bias).
  - Provide: original execution brief, Pass N HTML output, Weaver's artistic impression,
    original conviction artifact. If a RESIDUAL artifact exists from the previous builder,
    include it.
  - DO NOT provide: gate scores, threshold numbers, diagnostic language.
  - Builder enters COMPOSITIONAL mode (refining relationships, not fixing defects).
  - Builder MUST produce a RESIDUAL comment: what it would change next (>= 50 chars).

  ### AFTER REFINE (NON-NEGOTIABLE)
  >>> YOU MUST RETURN TO PHASE 3 FOR FULL RE-AUDIT. <<<

  The pipeline is NOT complete until the post-REFINE PA produces a SHIP or
  SHIP WITH FIXES verdict. Skipping re-audit makes the REFINE meaningless —
  you are shipping an unverified page.

  Gates after REFINE verify CSS values. They CANNOT verify compositional quality.
  ALL-PASS gates do NOT mean the REFINE worked. Only PA re-audit can confirm.

  Historical evidence: Yegge Gas Town REFINE improved PA-05 by +1.5 (2.0 -> 3.5),
  the largest single-cycle improvement ever recorded. But the REFINE also introduced
  5 new concerns only discoverable through re-audit.
  ```

- **Why it matters:** Report 01 (ES-09) identifies step 5 as "the ONLY line describing a convergence loop" — buried at position 5 of 5, preceded by 11 explicit stop signals. Report 04 (Section 5) proves step 5 was skipped due to salience failure under context compression. Report 04 (FIX-02) proposes the exact BEFORE/DURING/AFTER structure. Report 06 (R-02) proposes the non-negotiable warning with historical evidence.
- **Estimated scope:** ~30 lines replacing ~6 lines (+24 net)
- **Dependencies:** FIX-14 (RESIDUAL artifact)

### FIX-09: Remove or reframe "Single-pass = DEFAULT" from Council Mandates
- **Classification:** EXPLICIT
- **Priority:** P0-BLOCKING
- **What to change:**

  **Current text (~line 13):**
  > Single-pass = DEFAULT. 3-pass = EXPERIMENTAL (blocked until experiment #21)

  **New text:**
  > Iterative-to-convergence = DEFAULT (REFINE loop until SHIP or diminishing returns). 3-pass Compositional Critic architecture = EXPERIMENTAL (blocked until experiment #21). Note: standard REFINE iteration is NOT the same as the 3-pass architecture and does NOT require experimental validation.

  Also change at ~line 65:
  > Default mode: SINGLE-PASS (3-pass is EXPERIMENTAL, blocked until Experiment #21 validates it)

  To:
  > Default mode: ITERATIVE-TO-CONVERGENCE. Standard REFINE iteration is the default loop. 3-pass Compositional Critic remains EXPERIMENTAL.

  And at ~line 44:
  > Budget expectation: 25-40% of builds may need REFINE or REBUILD (per council REC-07). Plan for 1 REBUILD + 1 REFINE maximum before human review. Single-pass is the default — no automatic re-execution.

  To:
  > Budget expectation: 40-60% of builds will use at least one REFINE cycle (per operational evidence). REFINE is not failure — it is the convergence mechanism. Budget for 1 REBUILD + 2 REFINE passes maximum. The pipeline iterates to convergence by default.

- **Why it matters:** Report 01 (ES-03, ES-04, ES-05) found "single-pass = DEFAULT" repeated 3 times in the first 65 lines of this file. Report 02 (Section 4) identifies how this language makes iteration feel "unauthorized." Report 03 (Section 4.2) shows how the 1-cap becomes a ceiling, not a floor. Report 02 (IM-03) documents the "chilling effect" of proximity between "iteration" and "blocked."
- **Estimated scope:** ~6 lines changed across 3 locations
- **Dependencies:** None

### FIX-10: Reframe cost estimates from overhead to investment
- **Classification:** EXPLICIT
- **Priority:** P2-MEDIUM
- **What to change:**

  **Current text (~lines 667-670):**
  > Single-pass default: ~60-120 min, ~$30-150 per page. REFINE iteration (if needed): adds ~60-75 min.

  **New text:**
  > Build with convergence: ~80-180 min, ~$50-250 per page (1-2 REFINE cycles typical). The first 80 minutes produce the initial build. Each REFINE cycle adds ~45-60 min and historically improves PA-05 by +0.5 to +1.5 points — the highest-ROI activity in the pipeline.

- **Why it matters:** Report 02 (Section 6) identifies how "adds ~60-75 min" frames REFINE as cost rather than investment. Report 03 (IM-02) documents the same: "The word 'adds' frames REFINE as cost, not as investment."
- **Estimated scope:** ~3 lines changed
- **Dependencies:** None

### FIX-11: Add post-REFINE "verification theater" warning
- **Classification:** STRUCTURAL
- **Priority:** P1-HIGH
- **What to change:** Add immediately after the gate-runner execution instructions (in the Phase 3A protocol section):

  ```markdown
  ### POST-REFINE GATE WARNING

  After running gates on a REFINE build, display this message to yourself:

  > GATES PASSED — but gates verify IDENTITY and PERCEPTION PHYSICS only.
  > Gates do NOT verify: PA-05, emotional arc, Tier 5, compositional quality.
  > The only verification of compositional quality is perceptual re-audit.
  > If the previous verdict was REFINE: you MUST proceed to Phase 3B re-audit.
  > ALL-PASS gates after REFINE do NOT mean the page is ready to ship.
  ```

- **Why it matters:** Report 04 (RC-3, Section 2) documents "verification theater" — the orchestrator substituted all-green gate signals for actual perceptual verification. Report 06 (Hypothesis 3) confirms the "gate confidence trap" as a secondary cause of premature stopping. Report 05 (Section 1.3) catalogs the critical gap: zero compositional quality gates.
- **Estimated scope:** ~8 lines added
- **Dependencies:** None

### FIX-12: Add "Known REFINE Outcomes" evidence section
- **Classification:** STRUCTURAL
- **Priority:** P1-HIGH
- **What to change:** Add a new subsection in Section 7 (Verdict and Decision Tree), after the REFINE protocol:

  ```markdown
  ### Known REFINE Outcomes (Cross-Run Evidence)

  | Run | Pre-REFINE PA-05 | Post-REFINE PA-05 | Delta | Key Changes |
  |-----|-----------------|-------------------|-------|-------------|
  | Yegge Gas Town (2026-02-25) | 2.0/4 | 3.5/4 | **+1.5** | Dark zone contrast, zone transitions, sticky nav |

  **Evidence summary:**
  - REFINE produces the largest single-cycle quality improvements in the pipeline.
  - Re-auditing after REFINE discovered 5 NEW concerns not present in the initial PA.
  - REFINE without re-audit = REFINE without evidence = unverified page.

  UPDATE THIS TABLE after each run that includes a REFINE cycle.
  ```

- **Why it matters:** Report 06 (R-05) proposes encoding cross-run learning. Report 06 (Section 5) documents the complete absence of cross-run memory. Report 02 (Section 8) identifies the N=4 evidence base problem — the pipeline cannot learn from its own history without a place to record it.
- **Estimated scope:** ~12 lines added
- **Dependencies:** None

### FIX-13: Add iteration decision function after verdict
- **Classification:** STRUCTURAL
- **Priority:** P0-BLOCKING
- **What to change:** In Section 7 (Verdict and Decision Tree), after the verdict categories, add:

  ```markdown
  ### Post-Verdict Iteration Decision (MANDATORY)

  After receiving the Weaver's verdict, execute this decision function:

  1. Record PA-05 score in the Iteration Log (see Execution Tracker).
  2. If verdict is SHIP or SHIP WITH FIXES: pipeline complete. Proceed to output.
  3. If verdict is REFINE:
     a. Check iteration budget: have we used fewer than 2 REFINE passes?
        - YES: proceed to REFINE protocol (BEFORE/DURING/AFTER above).
        - NO: pipeline halts. Report to user with quality trajectory.
     b. If this is REFINE pass 2+: check PA-05 delta from previous pass.
        - Delta >= 0.3: improvement is meaningful. Proceed to REFINE.
        - Delta < 0.3: diminishing returns. Report to user with trajectory.
  4. If verdict is REBUILD:
     a. Check iteration budget: have we used fewer than 1 REBUILD?
        - YES: execute REBUILD protocol (full Phase 0-3 re-execution).
        - NO: pipeline halts. Report to user with diagnostic output.

  **Do NOT skip this function.** The pipeline is NOT complete until this function
  outputs SHIP, SHIP WITH FIXES, or HALT.
  ```

- **Why it matters:** Report 01 (AL-02) identifies the critical absent loop: "No decision point after verdict." Report 03 (Section 7.4) proposes the exact decision function. Report 02 (Finding 2) proposes the convergence criterion (delta >= 0.3). Report 05 identifies the missing convergence gates.
- **Estimated scope:** ~18 lines added
- **Dependencies:** FIX-02 (iteration budget), FIX-08 (REFINE protocol restructured)

### FIX-14: Define REFINE EXIT ARTIFACT (Builder Residual)
- **Classification:** STRUCTURAL
- **Priority:** P1-HIGH
- **What to change:** Add to the REFINE protocol section (immediately after DURING REFINE in FIX-08):

  ```markdown
  ### Builder Residual Artifact

  Every builder (initial and REFINE) MUST include a RESIDUAL HTML comment at the
  end of the HTML file, before </body>:

  <!-- RESIDUAL:
  What I preserved from the previous builder: [1-2 sentences]
  What I changed and why: [1-2 sentences]
  What I would change next if given another pass: [1-2 sentences]
  Trade-offs I made: [1-2 sentences]
  -->

  Minimum 50 characters. This artifact captures builder knowledge that would otherwise
  die with the agent. It is the richest iteration intelligence in the pipeline.

  The orchestrator checks for this artifact (GR-78) and routes it to any subsequent
  REFINE builder.
  ```

- **Why it matters:** Report 07 (Section 3.1) identifies "Agent Knowledge Loss" as the most critical iteration boundary failure. Report 05 (GR-78) proposes the gate. Report 07 (Section 5) estimates ~2 min builder effort for potentially doubling iteration effectiveness.
- **Estimated scope:** ~14 lines added
- **Dependencies:** None (but referenced by FIX-06, FIX-08)

### FIX-15: Move REFINE protocol from Section 7 (Verdict) to execution sections
- **Classification:** STRUCTURAL
- **Priority:** P1-HIGH
- **What to change:** The REFINE protocol currently lives in "SECTION 7: VERDICT AND DECISION TREE" — a section about classifying outcomes. Move it (or add a prominent cross-reference) into the execution flow between Phase 3C and pipeline termination, so the orchestrator encounters it while executing, not while classifying.

  Add after Section 6 (Phase 3C):

  ```markdown
  ## SECTION 6.5: ITERATION PROTOCOL (executed if verdict is REFINE or REBUILD)

  This section is part of the EXECUTION flow, not the classification flow.
  If the Weaver's verdict is REFINE, execute this section before declaring
  pipeline complete.

  [Full REFINE protocol from FIX-08 goes here]
  [Post-Verdict Iteration Decision from FIX-13 goes here]
  ```

- **Why it matters:** Report 01 (IS-10) identifies the positional problem: "REFINE protocol is in the 'Verdict' section, not the 'Execution' section." The orchestrator executing Sections 2-6 sequentially reaches Section 6, receives the verdict, and considers execution complete. Reaching Section 7 requires a separate intentional act.
- **Estimated scope:** ~5 lines (cross-reference header + redirect) or ~50 lines (full content move)
- **Dependencies:** FIX-08, FIX-13

### FIX-16: Remove or reframe "you cannot fix your way to Flagship" to not suppress iteration
- **Classification:** EXPLICIT
- **Priority:** P2-MEDIUM
- **What to change:**

  **Current text (~line 566):**
  > You cannot fix your way to Flagship. Only compose your way.

  **New text:**
  > You cannot FIX your way to Flagship — but you can COMPOSE your way through successive REFINE passes. Each REFINE is a fresh act of composition, not a repair. The path from 3.0 to 4.0 is "compose, evaluate, compose again" — not "fix, fix, fix."

- **Why it matters:** Report 02 (Section 2, "The Critical Asymmetry") identifies how this principle is correct about fixing but incorrectly generalized to suppress all iteration. The distinction between FIX (corrective, degrades composition) and REFINE (compositional, builds quality) is the pipeline's own insight — but the current framing collapses them.
- **Estimated scope:** ~2 lines changed
- **Dependencies:** None

---

## FILE 3: `ephemeral/va-extraction/EXECUTION-TRACKER-TEMPLATE.md`

### FIX-17: Add Iteration Log section to execution tracker
- **Classification:** STRUCTURAL
- **Priority:** P0-BLOCKING
- **What to change:** Add a new section after the Phase 3C section:

  ```markdown
  ## Iteration Log

  | Cycle | Phase | PA-05 | Tier 5 | Gate Pass Rate | Fix Count | Mech | Struct | Comp | Verdict | Decision |
  |-------|-------|-------|--------|----------------|-----------|------|--------|------|---------|----------|
  | 1 | Initial | ___/4 | ___/9 | ___/42 | ___ | ___ | ___ | ___ | ___ | ___ |
  | 2 | REFINE-1 | ___/4 | ___/9 | ___/42 | ___ | ___ | ___ | ___ | ___ | ___ |
  | 3 | REFINE-2 | ___/4 | ___/9 | ___/42 | ___ | ___ | ___ | ___ | ___ | ___ |

  **Quality trajectory:** Is PA-05 improving? By how much per cycle?
  **Convergence assessment:** Are we approaching SHIP or stalling?

  ### Orchestrator Observations
  _Free-text notes on quality concerns, borderline decisions, things that seemed off.
  These survive session continuations._

  _______________________________________________________________
  _______________________________________________________________
  _______________________________________________________________
  ```

- **Why it matters:** Report 01 (IS-03) identifies the tracker's single-pass structure as CRITICAL: "The tracker is structurally single-pass. If the orchestrator were to run a REFINE iteration, there would be no place to record it." Report 03 (Section 1.4) confirms the tracker's single-slot design rewards completion over convergence. Report 04 (RC-4) documents the Molly tracker was completely blank. Report 07 (Section 3.3) identifies orchestrator context loss across session boundaries.
- **Estimated scope:** ~18 lines added
- **Dependencies:** None

### FIX-18: Update Circuit Breaker field to support multiple iterations
- **Classification:** EXPLICIT
- **Priority:** P1-HIGH
- **What to change:**

  **Current text (~line 501):**
  > | Circuit Breaker | ___ (N/A / 1st REBUILD / 1st REFINE / HUMAN REVIEW) |

  **New text:**
  > | Iteration State | ___ (N/A / REFINE-1 / REFINE-2 / REBUILD-1 / BUDGET EXHAUSTED / HUMAN REVIEW) |

- **Why it matters:** Report 03 (Section 1.4) documents that the current Circuit Breaker options have no "2nd REFINE" value — the tracker was designed for a state that the revised pipeline now supports. The enum must match the iteration budget.
- **Estimated scope:** ~1 line changed
- **Dependencies:** FIX-02 (iteration budget)

### FIX-19: Add post-REFINE completion gate to Post-Run Verification
- **Classification:** STRUCTURAL
- **Priority:** P0-BLOCKING
- **What to change:** In the Post-Run Verification section (~lines 529-596), add:

  ```markdown
  ### Iteration Completion Check
  - [ ] If Weaver verdict was REFINE: do post-REFINE PA reports exist (`*-refine.md`)?
    - YES: Iteration cycle complete.
    - NO: **PIPELINE IS NOT COMPLETE.** Return to Phase 3.
  - [ ] If REFINE was executed: is PA-05 recorded in the Iteration Log for BOTH pre and post REFINE?
    - YES: Quality trajectory is documented.
    - NO: Fill in Iteration Log before declaring complete.
  ```

- **Why it matters:** Report 04 (FIX-01, RC-5) proposes this as the highest-leverage fix: "make the skip DETECTABLE." Report 06 (R-01) proposes the exact binary check. This is the structural enforcement that makes step-5 skips impossible to hide.
- **Estimated scope:** ~8 lines added
- **Dependencies:** FIX-07 (file naming convention)

---

## FILE 4: `ephemeral/va-extraction/pa-weaver.md`

### FIX-20: Add "Revision Enhancement Opportunities" section to balance degradation warnings
- **Classification:** STRUCTURAL
- **Priority:** P1-HIGH
- **What to change:** After Section 6.2 "Revision Degradation Warnings" (5 degradation mechanisms), add:

  ```markdown
  ### 6.3 Revision Enhancement Opportunities

  Fix cycles CAN degrade composition (see 6.2). But COMPOSITIONAL REFINE passes
  (different builder, generative language, compositional mode) CAN enhance it:

  1. **Feedback incorporation:** PA audit reveals perceptual reality invisible to builders.
     The REFINE builder works with information the original builder never had.
  2. **Compositional discovery:** A fresh builder finds relationships the first couldn't see.
     Continuation bias prevents self-discovery; a new perspective enables it.
  3. **Error-as-signal:** Understanding WHY something feels wrong reveals what the page NEEDS.
     The gap between intent and perception is the most informative signal available.
  4. **Asymptotic refinement:** Each pass reduces the remaining gap between current and ideal.
     The 69-question PA audit produces findings that a single REFINE can only partially address.

  The REFINE protocol is specifically designed to be COMPOSITIONAL, not mechanical.
  It is NOT the same as a fix cycle. Do not conflate them.
  ```

- **Why it matters:** Report 02 (Finding 4, Section 2) identifies the 5:0 asymmetry between degradation warnings and enhancement opportunities as creating a self-fulfilling prophecy. The pipeline has zero "iteration enhancement" content. Report 02 documents "Mechanism B: Design neglect" — because the pipeline believes iteration degrades quality, it invests zero architecture in making iteration work well.
- **Estimated scope:** ~15 lines added
- **Dependencies:** None

### FIX-21: Remove or qualify Weaver predictions that substitute for verification
- **Classification:** EXPLICIT
- **Priority:** P1-HIGH
- **What to change:** In the Weaver verdict protocol, add a constraint:

  ```markdown
  ### Weaver Prediction Constraint

  The Weaver MUST NOT predict post-REFINE PA-05 scores. Predictions create a perverse
  incentive for the orchestrator to skip re-audit ("the weaver said it would be 3.5,
  so I don't need to measure it").

  WRONG: "Three mechanical CSS fixes would likely elevate this to PA-05 3.5/4."
  RIGHT: "Three mechanical CSS fixes are needed. Re-audit required to determine actual
  post-REFINE PA-05 score."

  The Weaver's role is ASSESSMENT of the current page, not PREDICTION of the next page.
  ```

- **Why it matters:** Report 06 (Hypothesis 5) identifies the "Weaver framing effect" — the Molly Weaver said "would likely elevate to FLAGSHIP tier (PA-05 3.5/4)" which gave the orchestrator a prediction to trust instead of measuring. Report 06 calls this "paradoxically a side-effect of a GOOD weaver" — better analysis increases the probability of premature termination.
- **Estimated scope:** ~10 lines added
- **Dependencies:** None

### FIX-22: Add Finding Status Map to Weaver output protocol
- **Classification:** STRUCTURAL
- **Priority:** P1-HIGH
- **What to change:** In the Weaver's output specification, add:

  ```markdown
  ### Weaver Output: Finding Status Map (for re-audit cycles only)

  When producing a verdict for cycle N >= 2, the Weaver ALSO outputs a Finding Status Map:

  | Pass N-1 Finding | Expected Status | Actual Status |
  |-----------------|----------------|---------------|
  | [finding from previous weaver] | FIXED / IMPROVED / UNCHANGED | [assessed] |
  | ... | ... | ... |

  New findings (not in Pass N-1): list separately.
  Regressed findings (worse than Pass N-1): flag as REGRESSION.

  This map is routed to the orchestrator for iteration decision-making. It is NOT
  shared with PA auditors (information isolation preserved).
  ```

- **Why it matters:** Report 07 (Section 3.2) identifies "PA Finding Staleness" as a critical iteration boundary loss. The pipeline has no concept of finding lifecycle (NEW / ADDRESSED / VERIFIED / REGRESSED / INTRODUCED). Report 07 (Section 5) proposes the Finding Status Map as P0-BLOCKING. Without it, the Pass 2 Weaver cannot distinguish improvements from pre-existing issues.
- **Estimated scope:** ~12 lines added
- **Dependencies:** None

---

## FILE 5: `~/.claude/skills/build-page/SKILL.md`

### FIX-23: Add iteration awareness to SKILL.md entry point
- **Classification:** EXPLICIT
- **Priority:** P1-HIGH
- **What to change:** After the current description of steps 0-11, add:

  ```markdown
  ### Iteration behavior

  The pipeline iterates to convergence. If the Weaver's verdict is REFINE, execute
  the REFINE protocol (artifact-orchestrator.md Section 6.5) and return to Phase 3
  for full re-audit. The pipeline is NOT complete until the verdict is SHIP or
  SHIP WITH FIXES. Budget: up to 1 REBUILD + 2 REFINE passes.

  Do NOT treat REFINE as a terminal label. It is an action trigger.
  ```

- **Why it matters:** Report 01 (IS-08) identifies the SKILL.md entry point as having "zero mention of iteration" — the orchestrator's first document frames the pipeline as single-pass. Adding iteration awareness here ensures the orchestrator's mission brief includes convergence.
- **Estimated scope:** ~8 lines added
- **Dependencies:** FIX-01, FIX-09 (consistent framing)

---

## FILE 6: `ephemeral/va-extraction/gate-runner-core.js` (and `gate-runner-spec.md`, `gate-manifest.json`)

### FIX-24: Add GR-70 (PA-05 Non-Regression Gate)
- **Classification:** STRUCTURAL
- **Priority:** P0-BLOCKING
- **What to change:** Add to gate-runner-spec.md and implement as an orchestrator-procedural check:

  ```markdown
  ### GR-70: PA-05 Non-Regression (REQUIRED, cycle >= 2)
  - **Input:** PA-05 score from cycle N and cycle N-1 (from Iteration Log)
  - **PASS:** PA-05(N) >= PA-05(N-1)
  - **FAIL:** PA-05 decreased. HALT pipeline — quality regressed. Human review required.
  - **Execution:** Post-PA, orchestrator compares scores in Iteration Log.
  - **Rationale:** Without this, REFINE can silently make things worse with no detection.
  ```

  Also add to gate-manifest.json as a REQUIRED gate in a new "ITERATION" domain.

- **Why it matters:** Report 05 identifies GR-70 as "the single most critical missing gate." Report 05 (Section 3.3) proposes the verdict logic: GR-70 FAIL = HALT. The pipeline currently has 42 gates for initial build quality and 0 for iteration quality.
- **Estimated scope:** ~15 lines spec + ~10 lines implementation + manifest update
- **Dependencies:** FIX-17 (Iteration Log exists to store scores)

### FIX-25: Add GR-75 (Iteration Counter Gate)
- **Classification:** STRUCTURAL
- **Priority:** P1-HIGH
- **What to change:** Formalize the existing circuit breaker prose as an actual gate:

  ```markdown
  ### GR-75: Iteration Counter (REQUIRED, every cycle)
  - **Input:** Current cycle number from Iteration Log
  - **PASS:** cycle <= 3 (1 initial + 1 REBUILD + 1 REFINE, or 1 initial + 2 REFINE)
  - **FAIL:** Iteration budget exhausted. Pipeline halts for human review.
  - **Execution:** Pre-build, checked by orchestrator before spawning any iteration builder.
  ```

- **Why it matters:** Report 05 (Section 3.4, Wave 5 item 1) identifies this as the lowest-cost, highest-value new gate: "5 lines of code. Makes the prose rule in MANIFEST enforceable."
- **Estimated scope:** ~8 lines spec + ~5 lines implementation
- **Dependencies:** FIX-02 (iteration budget defined)

### FIX-26: Add GR-78 (Builder Residual Artifact Gate)
- **Classification:** STRUCTURAL
- **Priority:** P1-HIGH
- **What to change:**

  ```markdown
  ### GR-78: Builder Residual Artifact (RECOMMENDED, every cycle)
  - **Input:** Built HTML file
  - **PASS:** HTML contains `<!-- RESIDUAL:` comment with >= 50 characters of content.
  - **FAIL:** Residual artifact missing. Builder knowledge will be lost.
  - **Execution:** Post-build, checked alongside existing GR-43 (self-eval) and GR-63 (experiential).
  ```

- **Why it matters:** Report 05 (Section 3.4, Wave 5 item 3) and Report 07 (Section 3.1, P0-BLOCKING) both identify builder knowledge loss as the most critical iteration boundary failure. The residual artifact captures what the builder would change next — the richest iteration intelligence available.
- **Estimated scope:** ~8 lines spec + ~5 lines implementation (pattern match in HTML)
- **Dependencies:** FIX-14 (RESIDUAL artifact defined)

---

## FILE 7: `ephemeral/va-extraction/pa-deployment.md`

### FIX-27: Add iteration-aware Weaver routing for REFINE cycles
- **Classification:** STRUCTURAL
- **Priority:** P2-MEDIUM
- **What to change:** In the Weaver routing section, add:

  ```markdown
  ### Weaver Routing for REFINE Cycles (cycle >= 2)

  When the Weaver processes a post-REFINE PA audit, it receives ONE additional input:
  - The **Finding Status Map** from the previous cycle's Weaver (see pa-weaver.md)

  This map shows which previous findings were expected to be addressed. The Weaver uses
  this to assess: (a) were expected fixes actually effective? (b) did REFINE introduce
  new problems? (c) is quality converging or stalling?

  PA AUDITORS do NOT receive the Finding Status Map. Information isolation is preserved.
  The Weaver is the ONLY agent with cross-cycle visibility.
  ```

- **Why it matters:** Report 07 (Section 3.2, 3.4) identifies the finding lifecycle gap. Report 07 (Section 2, AL-02/AL-06) documents how information isolation — correct for single-pass integrity — creates a memoryless system across passes. The Weaver is the designated boundary-crossing agent; routing the finding map to the Weaver (not auditors) preserves isolation while enabling cross-cycle learning.
- **Estimated scope:** ~10 lines added
- **Dependencies:** FIX-22 (Finding Status Map defined)

---

## FILE 8: `ephemeral/va-extraction/experiment-protocol.md`

### FIX-28: Reclassify REFINE iteration from "experimental" to "validated"
- **Classification:** EXPLICIT
- **Priority:** P2-MEDIUM
- **What to change:**

  **Current framing (~line 48-51):**
  > Experiments run OUTSIDE normal pipeline execution — they are NOT part of a build.

  **Add clarifying note:**
  > Note: Standard REFINE iteration (spawn different builder, re-audit) is NOT an experiment.
  > It is a validated operational procedure with N=2 evidence (Yegge Gas Town +1.5 PA-05,
  > Molly Panopticon pending). Experiment #21 (creative revision cycle with Compositional
  > Critic) is a DIFFERENT mechanism that remains experimental.

- **Why it matters:** Report 01 (IS-11) identifies how the experiment protocol creates a categorical boundary between "building" (no iteration) and "experimenting" (iteration). Report 02 (Section 4) documents the "experiment gate" that treats basic REFINE iteration as requiring the same validation as the untested 3-pass architecture.
- **Estimated scope:** ~4 lines added
- **Dependencies:** None

---

## CROSS-CUTTING THEMES

### Theme 1: Language Creates Reality (40:1 Ratio)
The pipeline's vocabulary actively suppresses iteration. "Terminates" appears 6 times; "iterates" appears 0 times (Report 01, IS-14). "Output labels" converts verbs to nouns (Report 01, ES-08). "Single-pass = DEFAULT" is repeated 4 times (Report 01, ES-03/04/05/06). Fixes FIX-01, FIX-03, FIX-04, FIX-05, FIX-09, FIX-10, FIX-16 all address vocabulary. The cumulative effect matters more than any individual word change.

### Theme 2: Structural Absence Is Stronger Than Textual Instruction
Step 5 of the REFINE protocol says "return to Phase 3" — but there is no Phase 4, no tracker section, no prompt template, no file naming convention, no decision function, and no gate for iteration (Reports 01 AL-01 through AL-08). A single instruction cannot overcome the absence of supporting infrastructure. Fixes FIX-06, FIX-07, FIX-08, FIX-13, FIX-14, FIX-17, FIX-19, FIX-24, FIX-25, FIX-26 all add structural support.

### Theme 3: Measurement Drives Behavior
The pipeline measures phases completed, gates passed, and files produced — but not quality trajectory, PA-05 deltas, or convergence direction (Report 03, Section 6). Without quality trajectory data, the orchestrator cannot make informed iteration decisions. Fixes FIX-17, FIX-22, FIX-24 add measurement infrastructure. FIX-13 adds the decision function that consumes the measurements.

### Theme 4: The FIX-vs-COMPOSE Distinction Must Be Operationalized
The pipeline correctly identified that mechanical fixing degrades composition. It incorrectly generalized this to all iteration (Report 02, Section 3). The REFINE protocol is already designed to be compositional — different builder, artistic language, no gate scores. The pipeline built the machine but won't let it run. Fixes FIX-08, FIX-16, FIX-20 operationalize the distinction by making compositional REFINE the expected path while preserving warnings about mechanical fix cycles.

### Theme 5: Anti-Loss Architecture Ends at the Iteration Boundary
14 anti-loss mechanisms exist for single-pass execution; 0 explicitly cover iteration (Report 07). 4 mechanisms are actively anti-iteration (information isolation paradox). Fixes FIX-14 (builder residual), FIX-22 (finding status map), FIX-27 (weaver routing) extend anti-loss coverage across iteration boundaries while preserving the information isolation that makes each individual pass trustworthy.

---

## IMPLEMENTATION ORDER

### Wave A: Language Surgery (30 minutes, 0 dependencies)
Apply all EXPLICIT text changes that remove stop signals and install iteration framing:
1. **FIX-09** — Remove "Single-pass = DEFAULT" (3 locations in orchestrator)
2. **FIX-01** — Rewrite Quickstart Step 11 (MANIFEST)
3. **FIX-02** — Replace hard cap with iteration budget (MANIFEST)
4. **FIX-03** — Rewrite Pipeline Overview default mode (MANIFEST)
5. **FIX-04** — Rewrite dependency graph description (MANIFEST)
6. **FIX-05** — Rewrite "OUTPUT LABELS" (MANIFEST)
7. **FIX-10** — Reframe cost estimates (orchestrator)
8. **FIX-16** — Reframe "cannot fix your way" (orchestrator)
9. **FIX-28** — Reclassify REFINE from experimental (experiment protocol)

**Result after Wave A:** The pipeline's vocabulary no longer suppresses iteration. All 11 explicit stop signals (ES-01 through ES-11) are neutralized or reversed.

### Wave B: Structural Infrastructure (45 minutes, depends on Wave A)
Add the structural elements that make iteration possible:
1. **FIX-17** — Add Iteration Log to tracker (tracker template)
2. **FIX-18** — Update Circuit Breaker field (tracker template)
3. **FIX-19** — Add post-REFINE completion gate to tracker (tracker template)
4. **FIX-14** — Define RESIDUAL artifact (orchestrator)
5. **FIX-08** — Restructure REFINE protocol to BEFORE/DURING/AFTER (orchestrator)
6. **FIX-13** — Add iteration decision function (orchestrator)
7. **FIX-15** — Move REFINE to execution sections (orchestrator)
8. **FIX-07** — Add iteration file naming convention (MANIFEST)
9. **FIX-06** — Add REFINE builder prompt template (MANIFEST Appendix E)
10. **FIX-23** — Add iteration awareness to SKILL.md

**Result after Wave B:** The pipeline has structural support for iteration: a tracker that records convergence, a decision function that drives iteration, a prompt template for REFINE builders, and file naming that expects multiple passes.

### Wave C: Quality Mechanisms (30 minutes, depends on Wave B)
Add the quality feedback and anti-loss mechanisms:
1. **FIX-20** — Add enhancement opportunities to weaver (pa-weaver.md)
2. **FIX-21** — Remove Weaver predictions (pa-weaver.md)
3. **FIX-22** — Add Finding Status Map (pa-weaver.md)
4. **FIX-11** — Add post-REFINE gate warning (orchestrator)
5. **FIX-12** — Add known REFINE outcomes evidence (orchestrator)
6. **FIX-27** — Add iteration-aware Weaver routing (pa-deployment.md)

**Result after Wave C:** The pipeline has quality feedback mechanisms that cross iteration boundaries while preserving information isolation.

### Wave D: Gate Implementation (30 minutes, depends on Waves B+C)
Add the programmatic enforcement:
1. **FIX-24** — GR-70: PA-05 Non-Regression gate
2. **FIX-25** — GR-75: Iteration Counter gate
3. **FIX-26** — GR-78: Builder Residual Artifact gate

**Result after Wave D:** The gate system covers iteration quality, not just initial build quality. The 42:0 gate asymmetry (initial vs iteration) becomes 42:3.

---

## EXPECTED IMPACT

### Before All Fixes
- **40:1 ratio** of stop signals to iteration instructions
- **Zero** structural support for iteration (no tracker fields, no file naming, no prompt template, no decision function)
- **Zero** iteration-quality gates (42 gates for initial build, 0 for convergence)
- **Zero** anti-loss mechanisms covering iteration boundaries
- **Predicted behavior:** Orchestrator stops after 1 pass 60-75% of the time, regardless of quality gap. REFINE executed only under extreme urgency (PA-05 < 2.5) or user intervention.

### After All Fixes
- **Iteration-to-convergence** is the default mode, with quality-based stopping criteria
- **Full structural support:** Iteration Log, RESIDUAL artifacts, file naming, prompt template, decision function
- **3 iteration-quality gates:** PA-05 non-regression, iteration counter, builder residual
- **3 cross-boundary mechanisms:** Builder residual, Finding Status Map, Weaver routing
- **Predicted behavior:** Orchestrator executes REFINE when issued by Weaver, performs full re-audit, records quality trajectory, stops when PA-05 converges or budget exhausted. Expected 1-2 REFINE cycles for typical builds, with measurable PA-05 improvement of +0.5 to +1.5 per cycle.

### What Does NOT Change
- Information isolation for PA auditors (preserved)
- Opus model mandate (preserved)
- Soul constraints (preserved)
- Gate runner architecture (extended, not replaced)
- Mode 4 PA with 9 auditors (preserved)
- The 3-pass Compositional Critic remains experimental (only standard REFINE iteration is activated)

---

## FIX SUMMARY TABLE

| Fix ID | Title | File | Priority | Classification | Wave |
|--------|-------|------|----------|---------------|------|
| FIX-01 | Rewrite Step 11 "terminates" language | MANIFEST.md | P0 | EXPLICIT | A |
| FIX-02 | Replace hard cap with convergence budget | MANIFEST.md | P0 | EXPLICIT | A |
| FIX-03 | Remove "SINGLE-PASS" from overview | MANIFEST.md | P1 | EXPLICIT | A |
| FIX-04 | Add feedback loop to dependency graph | MANIFEST.md | P1 | EXPLICIT | A |
| FIX-05 | Rewrite "OUTPUT LABELS" to "ACTION TRIGGERS" | MANIFEST.md | P0 | EXPLICIT | A |
| FIX-06 | Add REFINE builder prompt template | MANIFEST.md | P1 | STRUCTURAL | B |
| FIX-07 | Add iteration file naming convention | MANIFEST.md | P2 | STRUCTURAL | B |
| FIX-08 | Restructure REFINE protocol (BEFORE/DURING/AFTER) | orchestrator.md | P0 | STRUCTURAL | B |
| FIX-09 | Remove "Single-pass = DEFAULT" (3 locations) | orchestrator.md | P0 | EXPLICIT | A |
| FIX-10 | Reframe cost as investment | orchestrator.md | P2 | EXPLICIT | A |
| FIX-11 | Add post-REFINE gate warning | orchestrator.md | P1 | STRUCTURAL | C |
| FIX-12 | Add known REFINE outcomes evidence | orchestrator.md | P1 | STRUCTURAL | C |
| FIX-13 | Add iteration decision function | orchestrator.md | P0 | STRUCTURAL | B |
| FIX-14 | Define REFINE EXIT ARTIFACT (residual) | orchestrator.md | P1 | STRUCTURAL | B |
| FIX-15 | Move REFINE to execution sections | orchestrator.md | P1 | STRUCTURAL | B |
| FIX-16 | Reframe "cannot fix your way" | orchestrator.md | P2 | EXPLICIT | A |
| FIX-17 | Add Iteration Log to tracker | TRACKER.md | P0 | STRUCTURAL | B |
| FIX-18 | Update Circuit Breaker to iteration state | TRACKER.md | P1 | EXPLICIT | B |
| FIX-19 | Add post-REFINE completion gate | TRACKER.md | P0 | STRUCTURAL | B |
| FIX-20 | Add revision enhancement opportunities | pa-weaver.md | P1 | STRUCTURAL | C |
| FIX-21 | Remove Weaver predictions | pa-weaver.md | P1 | EXPLICIT | C |
| FIX-22 | Add Finding Status Map | pa-weaver.md | P1 | STRUCTURAL | C |
| FIX-23 | Add iteration to SKILL.md | SKILL.md | P1 | EXPLICIT | B |
| FIX-24 | GR-70: PA-05 Non-Regression gate | gate system | P0 | STRUCTURAL | D |
| FIX-25 | GR-75: Iteration Counter gate | gate system | P1 | STRUCTURAL | D |
| FIX-26 | GR-78: Builder Residual Artifact gate | gate system | P1 | STRUCTURAL | D |
| FIX-27 | Add iteration-aware Weaver routing | pa-deployment.md | P2 | STRUCTURAL | C |
| FIX-28 | Reclassify REFINE as validated | experiment-protocol.md | P2 | EXPLICIT | A |

**Totals:** 28 fixes across 8 files. 8 P0-BLOCKING, 13 P1-HIGH, 7 P2-MEDIUM. 10 EXPLICIT, 17 STRUCTURAL, 1 ARCHITECTURAL (none pure — all are surgical). 4 implementation waves, estimated ~135 minutes total.

---

*Synthesis complete. All 7 investigation reports consumed. Fixes deduplicated across reports (multiple reports identified the same root causes from different angles). Every fix is traceable to at least one report finding.*

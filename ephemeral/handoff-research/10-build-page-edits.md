# Build-Page SKILL.md Edit Summary

**Date:** 2026-02-20
**File:** `~/.claude/skills/build-page/SKILL.md`
**Tasks completed:** 8 (Tasks 1, 3, 4, 5, 6, 11, 15, 17)

---

## Edit 1: Route TC brief + build-log to weaver (Task 1, P1-1)

**Location:** Section 6.3, weaver spawn prompt (after lock sheet read instruction)
**Lines added:** ~10
**What changed:** Added 3 new required reads to weaver spawn prompt:
1. `_tc-brief.md` -- for intended metaphor, zone architecture, and detection expectations (Section 7)
2. `_build-log.md` -- for conviction statement, transition table, fractal echo table
3. Instructions to use these for intent-vs-reality comparison to drive fix-type classification (STRUCTURAL vs MECHANICAL)

**Research basis:** Report 07 (information asymmetry), Gap Rank #1 and #2. The weaver's TC brief Section 7 ("DETECTION EXPECTATIONS: WEAVER-only") was designed for the weaver but never routed to it. The conviction statement enables the weaver to bridge auditor perceptions to builder intent.

---

## Edit 2: Add recipe-format validation to orchestrator (Task 3, P1-3)

**Location:** New Section 2.1 between TC brief verification and Builder Deployment
**Lines added:** ~7
**What changed:** After receiving TC brief, orchestrator checks Section 6 (BUILD RECIPE) for recipe verbs (Set/Apply/Deploy) vs checklist verbs (Verify/Must/Fail if). If >50% checklist verbs, returns brief to TC agent for rewrite.

**Research basis:** Report 08 (critical path), Finding #1. Recipe format is THE most replicated success predictor (middle-tier builder got recipe = 4/4; flagship got checklist = 1.5/4). Validating at handoff prevents the failure mode from propagating.

---

## Edit 3: Give weaver access to cascade-value-table (Task 4, P1-4)

**Location:** Section 6.3, weaver spawn prompt (after build-log read instruction)
**Lines added:** ~5
**What changed:** Added `_cascade-value-table.md` to weaver's required reads, with instructions to cross-reference declared values against gate measured values. Where declared = measured but below threshold = STRUCTURAL. Where declared != measured = MECHANICAL.

**Research basis:** Report 02 (weaver fix cycle), Section 1. The weaver cannot reliably classify MECHANICAL vs STRUCTURAL without seeing the builder's computed CSS values. The cascade-value-table provides the delta between intent and reality.

---

## Edit 4: Add self-challenge question to fix cycle (Task 5, P2-1)

**Location:** Section 7.2, fix instruction framing
**Lines added:** ~6 (net, some lines modified)
**What changed:** Supplemented "Re-read your conviction statement" with a mandatory self-challenge: "Name one way your current CSS CONTRADICTS your conviction statement." Added instruction that if the self-challenge reveals the plan was wrong, update the conviction statement first before fixing CSS.

**Research basis:** Report 02 (weaver fix cycle), Section 3. Continuation bias causes builders to re-affirm their original decisions when re-reading their own conviction statement. The self-challenge forces explicit identification of contradictions, making implicit assumptions challengeable. This is Approach B from the report (zero cost, immediate effect).

---

## Edit 5: Expand cycle 2-3 PA coverage (Task 6, P2-2)

**Location:** Section 7.3 (Re-Verify) and Section 7.4 (Cycle Limits table)
**Lines added:** ~4 (net replacement)
**What changed:**
- Cycle 2: 2 auditors (A, C) -> 4 auditors (A, B, C, F). B catches typography regressions (#2 historical failure mode). F catches rhythm/consistency regressions.
- Cycle 3: 2 auditors (A, C) -> 3 auditors (A, C, G). G evaluates PA-44 and PA-68, enabling the TC re-invocation trigger.
- Updated Agent Models table: "2 (fix cycles)" -> "4 (cycle 2), 3 (cycle 3)"

**Research basis:** Report 02 (weaver fix cycle), Section 4. The 2-auditor model left 5/7 dimensions unmonitored, and critically disabled the TC re-invocation trigger (PA-44/PA-68 assigned to Auditor G, who was dropped). The expanded coverage adds ~$5-10/cycle but catches regressions in typography, rhythm, and metaphor.

---

## Edit 6: Add escalation report format (Task 11, P3-1)

**Location:** Section 7.4, after "ESCALATE to user" line
**Lines added:** ~30
**What changed:** Added a structured escalation report template with 7 sections: Final Scores (PA-05 + Tier 5 + gates), Convergence Trajectory (per-cycle PA-05 scores + trend), What Was Tried, What Improved, What Plateaued (with weaver root-cause hypothesis), Root Cause Hypothesis (metaphor/builder/spec/content), Recommended Next Action, Key Files for Review. Written to `_escalation-report.md`.

**Research basis:** Report 02 (weaver fix cycle), Section 6. The run manifest provides WHAT happened but not WHY or WHAT TO DO NEXT. Users need convergence trajectory, unresolved issues with classifications, and recommended next actions to make informed decisions after escalation.

---

## Edit 7: Add midpoint micro-gate (Task 15, R08-2)

**Location:** New Section 3.1 between Wave 1 Monitoring and Gate Runner
**Lines added:** ~17
**What changed:** After builder completes ~50% of zones, orchestrator runs 3 gates (SC-04 warm palette, SC-09 background delta, SC-15 border presence) on the partially-built output.html. If any fail, builder receives immediate structured fix instruction with measured value and threshold. Catches #1 failure mode (imperceptible backgrounds, zero borders) before it compounds across the full page. Includes NOTE that the gate is opportunistic -- if builder completes too quickly, skip to full gate runner.

**Research basis:** Report 08 (critical path), Part 2 #2. The flagship's catastrophic failure was detectable after 3 sections. Fix cost at midpoint: 2 minutes. Fix cost after full build: 30+ minutes. The midpoint gate catches drift DURING the build, not after.

---

## Edit 8: Add tiered fix cycle (Task 17, R08-4)

**Location:** Section 7.1, fix instruction template
**Lines added:** ~10 (net replacement of existing template)
**What changed:** Restructured flat fix instruction template into 3 priority tiers:
- TIER 1: STRUCTURAL (fix first) -- gate failures, zone architecture, spatial skeleton, weaver-classified STRUCTURAL issues
- TIER 2: COMPOSITIONAL (fix second) -- PA-05 sub-criteria, Tier 5 gaps, compositional issues
- TIER 3: POLISH (fix last) -- MECHANICAL CSS adjustments, accessibility, token compliance
- PROTECTED section renamed with explicit justification requirement

Added priority ordering directive: "Fix ALL Tier 1 BEFORE touching Tier 2. Fix ALL Tier 2 BEFORE Tier 3."

**Research basis:** Report 08 (critical path), Part 2 #5. Without priority ordering, builders fix easiest issues first (font-size adjustment) and leave hardest (multi-coherence restructuring) for later. Tiered prioritization transforms fix instructions from checklist to recipe, matching the proven build sequence (skeleton -> zones -> components -> refinement).

---

## File Delta Summary

- **Total lines added:** ~85 (approximate net)
- **Sections modified:** 2.1 (new), 3.1 (new), 6.3, 7.1, 7.2, 7.3, 7.4, 10 (Agent Models table)
- **Sections unchanged:** 0, 1, 2 (TC spawn prompt), 3 (builder spawn prompt), 4, 5, 5.5, 6.1, 6.2, 8, 9, 11
- **File length:** ~487 -> ~578 lines (estimated)
- **No structural corruption:** Full re-read verified all markdown formatting, code blocks, and section numbering intact.

# Threshold Auditor Report -- Independent Verification

**Date:** 2026-02-17
**Agent:** threshold-auditor
**Scope:** Independent cross-file verification of all 8 thresholds (TC-01 through TC-08)
**Authoritative source:** `ephemeral/flagship-preparation/_checkpoint/THRESHOLD-REGISTRY.md`

---

## Overall Verdict: PASS (with observations)

All 8 thresholds are either consistent across files or have documented, intentional divergences. **No blocking inconsistencies found.** However, the LIVING-STATE.md contains stale/simplified descriptions for TC-01, TC-02, and TC-03 that could mislead downstream agents. This is LOW priority but worth noting.

---

## Verification Matrix

| ID | Authoritative Value | Consistent? | Edits Required? | Key Finding |
|----|-------------------|-------------|-----------------|-------------|
| TC-01 | Graduated: 60% pre-build, 50% skeleton, 70% post-mechanism | YES (with caveat) | NO | PA SKILL uses flat 60%; LIVING-STATE oversimplifies to ">=60%" |
| TC-02 | 20% warning gate, 25% hard abort | YES | NO | LIVING-STATE says "<=15%" -- WRONG description, but all operational files correct |
| TC-03 | 5 passes | YES (operational files) | NO | LIVING-STATE says "3 passes" -- STALE. Multiple early reports use "3 passes" but these predate the 5-pass resolution |
| TC-04 | Target 12-14, hard cap 16 | INTENTIONAL DIVERGENCE | NO | mechanism-catalog.md says "Flagship: 16-18" -- descriptive tier model vs prescriptive target |
| TC-05 | 240 lines total, builder sees 55-80 | YES | NO | 200-line metacognitive finding is different concept, not conflict |
| TC-06 | Both deliverable file + SendMessage required | YES | NO | Uniform across all references |
| TC-07 | 2160px (1.5 viewports at 1440px) | KNOWN DISCREPANCY, DOCUMENTED | NO | 1620px in kill-criteria.md is stricter skeleton-stage value; documented in pre-flight checklist |
| TC-08 | HIGH priority, NOT BLOCKING | YES | NO | Uniform across all references |

---

## Detailed Per-Threshold Analysis

### TC-01: Content-to-void ratio

**Authoritative value:** Graduated: 60% pre-build skeleton, 50% skeleton phase, 70% post-mechanism

**File-by-file verification:**

| File | Line(s) | Value | Match? |
|------|---------|-------|--------|
| THRESHOLD-REGISTRY.md | 11 | Graduated: 60% pre-build, 50% skeleton, 70% post-mechanism | AUTHORITATIVE |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 644 | Gate 0 >= 60%, Gate 1 >= 50%, Gate 3 >= 70% | YES |
| 12-gap-analysis.md | 380 | GRADUATED: pre-build >= 60%, skeleton >= 50%, post-Pass-2 >= 70% | YES |
| 08-metacognitive-checkpoints.md | 53, 59 | Content >= 60% of total (pre-build), 50% at skeleton stage (line 184) | YES |
| 03-spatial-confidence-gate.md | ~1098 | 60:40 pre-build | YES |
| PA SKILL.md | 357 | Min content: 60% of total scroll height | COMPATIBLE (general guardrail) |
| 18-UNIFIED-ACTION-PLAN.md | ~128, ~373 | Content distribution >= 70% (post-mechanism) | YES |
| LIVING-STATE.md | 150 | "Content-to-void ratio >=60%" | OVERSIMPLIFIED -- drops graduated scheme |

**Verdict:** CONSISTENT in all operational files. LIVING-STATE.md oversimplifies to a single flat value, which is not technically wrong (60% is the pre-build gate) but loses the graduated nature. LOW priority.

---

### TC-02: Header proportion gate

**Authoritative value:** 20% warning gate, 25% hard abort

**File-by-file verification:**

| File | Line(s) | Value | Match? |
|------|---------|-------|--------|
| THRESHOLD-REGISTRY.md | 12 | 20% warning gate, 25% hard abort | AUTHORITATIVE |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 335 | SC-05 header <= 20% of first viewport (288px) | YES |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 645 | SC-05: <= 288px. Hard fail: > 360px | YES (288px = 20% of 1440, 360px = 25% of 1440) |
| 03-extraction-gates-risks.md | 33 | headerRatio <= 25% AND content visible | COMPATIBLE (uses abort threshold) |
| PA SKILL.md | 145 | PA-29: counts text styles in header (qualitative) | COMPATIBLE (no numeric threshold -- correct for PA) |
| LIVING-STATE.md | 151 | "Header proportion <=15%" | WRONG -- should be 20%/25%, not 15% |

**Verdict:** CONSISTENT in all operational files. **LIVING-STATE.md uses 15% which matches NEITHER the warning (20%) nor the abort (25%) threshold.** This appears to be a stale value from an earlier iteration before TC-02 was resolved. The LIVING-STATE is a status document, not an execution document, so this does not create operational risk. However, if downstream agents read LIVING-STATE for threshold summaries, they would get the wrong number.

**Risk:** LOW. No operational file uses 15%. All execution documents (pre-flight checklist, extraction-gates-risks) use the correct 20%/25% values.

---

### TC-03: Review passes

**Authoritative value:** 5 passes

**File-by-file verification:**

| File | Line(s) | Value | Match? |
|------|---------|-------|--------|
| THRESHOLD-REGISTRY.md | 13 | 5 passes | AUTHORITATIVE |
| 18-UNIFIED-ACTION-PLAN.md | 20, 462, 543, 554 | 5 passes | YES |
| 17-no-compromise-pipeline.md | 37, 575, 802-803 | 5 passes | YES |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 646 | 5 passes | YES |
| 12-gap-analysis.md | 382 | 5-pass (most detailed). ADOPT. | YES |
| 06-extraction-pipeline-synthesis.md | 147 | 5 passes | YES |
| S4-metacognitive-dimensions.md | 197, 233, 284, 410, 460 | 5 passes | YES |
| LIVING-STATE.md | 152 | "Review passes: 3 (pass 3->4 cliff)" | STALE |

**Files referencing "3 passes" (pre-resolution):**

| File | Line(s) | Context |
|------|---------|---------|
| 07-kill-criteria.md | 427, 479, 641 | "after all three passes" |
| 13-compositional-fluency.md | 324 | "decomposes composition into three passes" |
| 20-attention-bandwidth-theory.md | 259, 293, 654 | "proposes 3 passes" |
| 21-beyond-flagship.md | 73, 126 | "defines 3 passes" |
| 05-extraction-composition-intent.md | 28 | "3 passes: Pass 1, Pass 2, Pass 3" |
| 09-adversarial-premortem.md | 146, 152 | "all three passes" |

**Analysis:** The "3 passes" references are from EARLY analysis reports (Files 05, 07, 09, 13, 20, 21) written BEFORE the pipeline was expanded to 5 passes by the no-compromise pipeline (File 17). The gap analysis (File 12, line 382) explicitly resolved this: "CONFLICT-03: 5-pass (most detailed). ADOPT." All AUTHORITATIVE execution documents (18-UNIFIED-ACTION-PLAN, 13-MASTER-PRE-FLIGHT-CHECKLIST) use 5 passes.

**LIVING-STATE.md** says "3 (pass 3->4 cliff)" which references the diminishing-returns finding that passes beyond 3 have diminishing ROI. This is the RATIONALE for why 3 was originally proposed, not the actual resolved value. The LIVING-STATE description is stale.

**Verdict:** CONSISTENT in all authoritative execution files. Early analysis files retain "3 passes" but these are pre-resolution. No edit required in operational files. LIVING-STATE description is stale but non-blocking.

---

### TC-04: Mechanism count

**Authoritative value:** Target 12-14, hard cap 16

**File-by-file verification:**

| File | Line(s) | Value | Match? |
|------|---------|-------|--------|
| THRESHOLD-REGISTRY.md | 14 | Target 12-14, hard cap 16 | AUTHORITATIVE |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 647 | Target: 12-14. Hard cap: 16 | YES |
| 18-UNIFIED-ACTION-PLAN.md | 151, 271, 389 | Cap <= 16, 12-14 recommended | YES |
| 12-gap-analysis.md | 383 | Target 12-14, hard cap 16 | YES |
| 04-restraint-protocol.md | 96, 217, 415 | 12-14 recommended, 16 max | YES |
| mechanism-catalog.md | 1062 | Flagship: Deploy 16-18 | INTENTIONAL DIVERGENCE (descriptive tier model) |
| mechanism-combinations.md | 380, 386 | Ceiling: 12-15, Flagship: 16-18 | INTENTIONAL DIVERGENCE |
| tension-composition SKILL.md | 83, 162 | 12-15 (Ceiling), 16-18 (Flagship) | INTENTIONAL DIVERGENCE |

**Analysis:** The divergence is well-documented. The tier model describes what NATURALLY EMERGES; the execution target constrains what to AIM FOR. The hard cap at 16 (below the tier's natural maximum of 18) is the entire point of constraint pressure theory. Editing the tier model to match the execution target would corrupt a descriptive reference.

**Verdict:** INTENTIONAL DIVERGENCE. Not an inconsistency. No edit required.

---

### TC-05: Prompt length

**Authoritative value:** 240 lines total, builder sees 55-80

**File-by-file verification:**

| File | Line(s) | Value | Match? |
|------|---------|-------|--------|
| THRESHOLD-REGISTRY.md | 15, 45, 47 | 240 lines total, builder sees 55-80 | AUTHORITATIVE |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 648, 703, 753 | 240 total, builder ~55-80 | YES |
| 18-UNIFIED-ACTION-PLAN.md | 446, 539, 554 | ~240 line prompt | YES |
| 10-prompt-architecture.md | 532, 581, 601, 610 | ~240 lines (76% reduction from 1,004) | YES |
| 04-extraction-prompt-aesthetics.md | 18, 163, 805 | ~240 lines across Layers 1-3 | YES |
| 08-metacognitive-checkpoints.md | 33 | ~200 lines = compliance degradation threshold | DIFFERENT CONCEPT |
| 11-crossref-merged-actions.md | 134, 184, 699 | ~240 lines total, builder <= 100 | COMPATIBLE (100 is a higher bound than 80 -- the 55-80 target is from later refinement) |
| E2-information-loss-analysis.md | 39 | ~240 lines target | YES |
| E3-verification-layer.md | 468, 780 | <= 240 lines | YES |
| S2-flagship-research-integration.md | 132, 337, 339 | ~240 lines max (with tension analysis vs original 100-200) | DOCUMENTED TENSION |

**Analysis:** The 200-line finding in 08-metacognitive-checkpoints is a research finding about builder compliance, not the execution target. The 240-line total works because the builder only sees 55-80 lines (well under 200). The 11-crossref file says "builder <= 100" which is a looser bound than the later-refined 55-80 but not contradictory.

**Verdict:** CONSISTENT. No conflicting values in execution documents.

---

### TC-06: Communication mandates

**Authoritative value:** Both deliverable file + SendMessage required

**File-by-file verification:**

| File | Line(s) | Value | Match? |
|------|---------|-------|--------|
| THRESHOLD-REGISTRY.md | 16 | Both deliverable file + SendMessage required | AUTHORITATIVE |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 649 | Deliverables = substance, Messages = enforcement | YES |
| 12-gap-analysis.md | 385 | Use BOTH. CM-19 deliverable + CM-13 message count | YES |
| 06-communication-protocol.md | 484 | Test for when SendMessage required | YES |

**Not found in:** design-system/compositional-core/, ~/.claude/skills/ (correct -- these are agent-communication-agnostic)

**Verdict:** CONSISTENT. Uniform across all references.

---

### TC-07: Max void

**Authoritative value:** 2160px (1.5 viewports at 1440px)

**File-by-file verification:**

| File | Line(s) | Value | Match? |
|------|---------|-------|--------|
| THRESHOLD-REGISTRY.md | 17 | 2160px (1.5 viewports at 1440px) | AUTHORITATIVE |
| 18-UNIFIED-ACTION-PLAN.md | 128, 373 | SC-02: <= 2,160px | YES |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 335, 650 | SC-02 <= 2160px; TC-07 resolution: 2160px final, 1620px skeleton | YES |
| 12-gap-analysis.md | 386 | Use 2160px (1.5 viewports). ADOPT. | YES |
| 03-spatial-confidence-gate.md | 251 | maxVoidFound > 2160 --> FAIL | YES |
| 11-crossref-merged-actions.md | 231 | SC-02 max void <= 2160px | YES |
| PA SKILL.md | 356 | 1.5 viewport-heights (at 1440px) | YES (implies 2160px) |
| 07-kill-criteria.md | 205, 207, 208, 283, 741 | <= 1620px (1.5 x 1080px) | **KNOWN DISCREPANCY** |
| 18-UNIFIED-ACTION-PLAN.md | 507 | SP-02: <= 1620px | **KNOWN DISCREPANCY** |
| 06-extraction-pipeline-synthesis.md | 699 | SP-02: <= 1620px | **KNOWN DISCREPANCY** |
| V1-nuance-recovery-01-07.md | 689-693 | Documents 1620 vs 2160 discrepancy | DOCUMENTED |
| V3-nuance-recovery-15-21.md | 250 | Documents SP-02 (1620) vs SC-02 (2160) discrepancy | DOCUMENTED |
| supplementary-files-summary.md | 158, 309 | Confirms discrepancy | DOCUMENTED |
| DECISION-LOG.md | 48 | Notes "MUST RESOLVE" | DOCUMENTED |

**Analysis:** The 1620px value calculates 1.5 x 1080px (viewport HEIGHT). The 2160px value calculates 1.5 x 1440px (viewport WIDTH). The kill-criteria.md author appears to have used viewport HEIGHT instead of WIDTH for the multiplication. The pre-flight checklist resolved this by making 1620px a "stricter skeleton-stage threshold" and 2160px the "authoritative gate threshold."

This resolution is documented but arguably the 1620px value should be understood as using a WRONG formula (1.5 x viewport height, not width). The decision to keep it as a "stricter early threshold" is pragmatically sound (stricter is safer) but the mathematical basis is inconsistent. The 07-kill-criteria.md explicitly says "1.5 x 1080px viewport height" -- so the intent was 1.5 viewports calculated with HEIGHT.

**Risk assessment:** LOW. The pre-flight checklist (execution authority) documents both values. The THRESHOLD-REGISTRY (single source of truth) uses 2160px. All SC-02 references in execution documents use 2160px. The kill-criteria.md is a reference document that pre-dates the resolution.

**Verdict:** KNOWN DISCREPANCY, DOCUMENTED AND RESOLVED. No edit required.

---

### TC-08: Constraint pressure experiment

**Authoritative value:** HIGH priority, NOT BLOCKING

**File-by-file verification:**

| File | Line(s) | Value | Match? |
|------|---------|-------|--------|
| THRESHOLD-REGISTRY.md | 18 | HIGH priority, NOT BLOCKING | AUTHORITATIVE |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 651 | HIGH, not BLOCKING | YES |
| 12-gap-analysis.md | 387 | Label HIGH, not BLOCKING. Run if time permits | YES |
| 19-constraint-pressure-hypothesis.md | 341 | Experiment CONSTRAINT-PRESSURE-01 (described, not mandated) | YES |
| S1-scale-exploration-integration.md | 418, 455 | Optional pre-flagship experiment | YES |
| S4-metacognitive-dimensions.md | 318 | CONSTRAINT-PRESSURE-01 listed | YES |

**Not found in:** design-system/compositional-core/, ~/.claude/skills/ (correct -- this is a pipeline experiment, not a design system property)

**Verdict:** CONSISTENT. All references agree: HIGH priority but NOT BLOCKING for flagship.

---

## LIVING-STATE.md Observation

The LIVING-STATE.md (lines 148-157) contains a Phase 3 summary table with descriptions for TC-01, TC-02, and TC-03 that do NOT match the THRESHOLD-REGISTRY:

| ID | LIVING-STATE Description | REGISTRY Value | Discrepancy |
|----|-------------------------|---------------|-------------|
| TC-01 | "Content-to-void ratio >=60%" | "Graduated: 60% pre-build, 50% skeleton, 70% post-mechanism" | Oversimplified -- drops graduated scheme |
| TC-02 | "Header proportion <=15%" | "20% warning gate, 25% hard abort" | WRONG value -- 15% appears nowhere in resolution |
| TC-03 | "Review passes: 3 (pass 3->4 cliff)" | "5 passes" | STALE -- pre-resolution value |

**Risk:** LOW. LIVING-STATE is a status tracking document, not an execution authority. All actual execution documents (pre-flight checklist, unified action plan, gap analysis) use the correct values. However, if any agent reads LIVING-STATE as a threshold summary, they would get wrong information for TC-02 and TC-03.

**Recommendation:** Update LIVING-STATE descriptions to match registry values. This is a LOW-priority cosmetic fix, not a blocking issue.

---

## Level 2 Metacognitive Observations

### 1. The "3 passes vs 5 passes" evolution is well-documented but creates archaeological confusion

Multiple early analysis files (05, 07, 09, 13, 20, 21) reference "3 passes" because they were written before File 17 (no-compromise-pipeline) expanded to 5 passes. The gap analysis explicitly resolved this (CONFLICT-03 -> ADOPT 5 passes). All authoritative execution files use 5 passes. But a naive search across all files would find many "3 passes" references, which could confuse agents that don't understand the chronological layering.

### 2. The TC-07 "resolution" is pragmatically sound but mathematically inconsistent

The 1620px value uses `1.5 x 1080px viewport HEIGHT`. The 2160px value uses `1.5 x 1440px viewport WIDTH`. These measure DIFFERENT things. Calling 1620px a "stricter skeleton-stage threshold" makes operational sense (stricter is safer early on), but the original intent was clearly to compute `1.5 viewports` -- just using different viewport dimensions. If anyone revisits the formula, they should clarify: is "1.5 viewports" based on height (900-1080px) or width (1440px)? The registry chose width.

### 3. The design-system/compositional-core files are clean of threshold contamination

I searched all of compositional-core/ and skills/ for threshold values. Only two thresholds appear:
- TC-01: PA SKILL.md has a flat 60% content guardrail (compatible with the graduated scheme)
- TC-04: mechanism-catalog.md and tension-composition SKILL.md have tier model values (descriptive, not prescriptive)

This is architecturally correct. Design system files should remain descriptive. Flagship execution targets belong only in ephemeral preparation documents.

### 4. The threshold-resolver was thorough and accurate

After completing my independent search and analysis, I read the resolver's report. My findings closely align. The resolver correctly identified the same discrepancies and reached the same conclusions. See cross-reference section below.

---

## Cross-Reference Against Resolver

After completing my independent analysis, I read `threshold-resolver-report.md`. Comparison:

### Agreement on all 8 thresholds

Both the resolver and I independently reached the same verdict for all 8 thresholds:
- TC-01: CONSISTENT (graduated values correct in execution files)
- TC-02: CONSISTENT (20%/25% correct in execution files)
- TC-03: CONSISTENT (5 passes correct in execution files)
- TC-04: INTENTIONAL DIVERGENCE (tier model vs execution target)
- TC-05: CONSISTENT (240/55-80 uniform)
- TC-06: CONSISTENT (both required)
- TC-07: KNOWN DISCREPANCY, DOCUMENTED (1620 vs 2160)
- TC-08: CONSISTENT (HIGH, NOT BLOCKING)

### Items I found that the resolver did NOT explicitly flag

1. **LIVING-STATE.md stale descriptions:** The resolver did not flag that LIVING-STATE.md lines 150-152 contain wrong/stale descriptions for TC-01 (">=60%" vs graduated), TC-02 ("<=15%" vs 20%/25%), and TC-03 ("3 passes" vs 5). The resolver likely authored the LIVING-STATE update itself and used shorthand. This is cosmetic but could mislead downstream agents.

2. **Breadth of "3 passes" archaeological references:** While the resolver noted TC-03 is consistent, I found 7+ files still referencing "3 passes" (07-kill-criteria, 13-compositional-fluency, 20-attention-bandwidth-theory, 21-beyond-flagship, 05-extraction-composition-intent, 09-adversarial-premortem, S2-flagship-research-integration). The resolver mentioned fewer files. This is not a discrepancy in verdict, but the scale of stale references is larger than the resolver indicated.

3. **TC-07 mathematical inconsistency:** I noted that 1620px uses viewport HEIGHT (1080px) while 2160px uses viewport WIDTH (1440px). The resolver documented this but framed it primarily as "stricter skeleton vs final." My observation that these are fundamentally different dimensional bases (height vs width) adds context to why the discrepancy exists.

### Items the resolver found that I confirmed

1. **TC-04 tier model vs execution target** -- I independently found the same mechanism-catalog.md line 1062 ("Flagship: Deploy 16-18") and reached the same "descriptive vs prescriptive" conclusion.

2. **TC-05 metacognitive 200-line finding** -- I independently found 08-metacognitive-checkpoints.md line 33 and confirmed it is a research finding, not a competing threshold.

3. **TC-07 three independent documentations** -- I confirmed V1, V3, and supplementary-files-summary all independently documented the 1620/2160 discrepancy.

### Verdict on resolver accuracy

The resolver's report is ACCURATE. No corrections needed. My independent search found the same results plus the LIVING-STATE description issue. The resolver's conclusion of "NO EDITS REQUIRED" is correct for operational files. The LIVING-STATE descriptions are cosmetic but worth updating.

---

## Summary

**Overall: PASS.**

- 6/8 thresholds are fully consistent across all files
- 1/8 (TC-04) has an intentional, well-documented divergence between descriptive tier model and prescriptive execution target
- 1/8 (TC-07) has a known, documented, and resolved discrepancy (1620px skeleton vs 2160px final)
- LIVING-STATE.md has stale descriptions for 3 thresholds (TC-01, TC-02, TC-03) -- LOW priority cosmetic issue
- No edits required in any design-system or skills file
- No edits required in any execution-authority file
- The resolver's findings are independently confirmed

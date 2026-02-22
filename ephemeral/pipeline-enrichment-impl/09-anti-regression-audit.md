# Anti-Regression Audit: All Proposed Pipeline Edits

**Auditor:** anti-regression-auditor (Opus 4.6)
**Date:** 2026-02-20
**Scope:** 4 change manifests (01-brief, 02-skill, 03-gate, 04-pa) cross-referenced against execution report findings, master synthesis, and 16 research reports
**Files audited:**
- `01-brief-changes.md` (10 edits, +38 lines, final 441/450)
- `02-skill-changes.md` (12 edits, +15 lines, final 430/450)
- `03-gate-changes.md` (8 edits, +~133 lines, final ~1,126)
- `04-pa-changes.md` (2 immediate edits, 3 deferred)

---

## 1. SUMMARY VERDICT

**PASS WITH NOTES**

All 9 bug fixes (B1-B9) are addressed. All 3 DO NOW enrichments are addressed. All 8 DEFER enrichments are addressed. All 5 DON'T enrichments are correctly excluded. The 4 manifests are internally consistent with 3 minor threshold discrepancies that need resolution before application.

**3 items require revision before edits are applied (see Section 7).**
**5 items are noted for awareness but do not block (see Section 8).**

---

## 2. BUG FIX COVERAGE MATRIX (B1-B9)

| Bug | Description | Addressed By | File(s) | Status |
|-----|-------------|-------------|---------|--------|
| **B1** | Mechanism count threshold gap (SKILL says >=1/cat only, gate says >=14 total) | Skill Edit 1 + Edit 6 (merged into DG-4 fix) | SKILL.md | **ADDRESSED** -- ">= 14 total AND >= 1 in each of 5 categories" added. Edit 6 subsumes Edit 1. |
| **B2** | Micro-gates converted to honor system (threshold mismatches) | Skill Edit 5 (combined B2+E3+E-CONTRA), Gate Edit 6 (audit confirms gate-runner already correct) | SKILL.md + gate-runner.md | **ADDRESSED** -- SKILL.md checkpoints restructured to boundary-grouped, thresholds aligned (ARIA >=5, borders >=3 configs). Gate Edit 6 confirms gate-runner thresholds are already correct; mismatches are SKILL.md-side only. |
| **B3** | Behavioral gates BG-1/BG-2 missing from SKILL.md | Skill Edit 3 + Edit 3B | SKILL.md | **ADDRESSED** -- BG-1/BG-2 added to gate reference line (Edit 3) and verification section (Edit 3B, +3 lines). |
| **B4** | Gate-to-PA context not routed to weaver | Skill Edit 4 | SKILL.md | **ADDRESSED** -- _gate-results.json routed to weaver (not auditors, preserving fresh-eyes). +2 lines. |
| **B5** | DG-4 references non-existent _build-plan.yaml | Skill Edit 6 | SKILL.md | **ADDRESSED** -- DG-4 restructured to validate from _build-log.md (which the builder DOES produce). |
| **B6** | TeamCreate vs Task tool ambiguity | Skill Edit 7 | SKILL.md | **ADDRESSED** -- Lines 30 and 204 changed to "Task tool". |
| **B7** | Zone selector fragility (single point of failure) | Gate Edit 1 (SC-00), Edit 4 (execution groups), Edit 7 (summary table), Edit 8 (handoff section) | gate-runner.md | **ADDRESSED** -- Full SC-00 pre-gate with primary + 3 fallback selectors, dependency chain updated, summary table updated. ~65 lines. **NOTE:** Cross-file impact requires 3-4 lines in conventions-brief.md (zone markup patterns) and 1-2 lines in SKILL.md (builder note). See MISSING item M1. |
| **B8** | Threshold inconsistency (0.02em in CLAUDE.md files) | Gate Edit 2 (confirms gate-runner already correct), cross-file note | gate-runner.md + CLAUDE.md files | **PARTIALLY ADDRESSED** -- Gate Edit 2 confirms gate-runner.md already uses 0.025em correctly. The actual bug is in 2 CLAUDE.md files. **The CLAUDE.md fixes are documented as cross-file impacts but NO manifest covers them.** See MISSING item M2. |
| **B9** | Metaphor pervasion blind spot (PA-44 doesn't test spatial coverage) | PA Edit 1 | SKILL.md (PA-44 line) | **ADDRESSED** -- PA-44 expanded to include "Does the metaphor persist across the ENTIRE page, or does it fade or disappear in some sections?" Option A (modify existing question) correctly chosen over Option B (new question). |

**Bug Fix Verdict: 8/9 FULLY ADDRESSED, 1/9 PARTIALLY ADDRESSED (B8 needs CLAUDE.md file edits).**

---

## 3. ENRICHMENT COVERAGE MATRIX

### DO NOW (E2, E3, E4) -- Master Synthesis: Apply Before Test

| Enrichment | Description | Addressed By | File | Status |
|------------|-------------|-------------|------|--------|
| **E2** | Boundary-by-boundary CSS recipe example | Brief Edit 2 (+10 lines) | conventions-brief.md | **ADDRESSED** -- Concrete CSS code block showing all channels set together at one boundary. Recipe format, not checklist. |
| **E3** | Fix checkpoint contradiction (boundary vs channel grouped) | Skill Edit 5 (merged with B2) | SKILL.md | **ADDRESSED** -- 4 channel-grouped checkpoints restructured to 3 boundary-grouped checkpoints. Also resolves E-CONTRA. |
| **E4** | Perception threshold consolidation table | Brief Edit 1 (+10 lines) | conventions-brief.md | **ADDRESSED** -- 6-row table mapping channels to CSS properties and perception floors. |

**DO NOW Verdict: 3/3 ADDRESSED.**

### DEFER (E1, E5, E6, E9, E10, E14, E15, E16) -- Master Synthesis: Apply If PA-05 2.5-3.0

| Enrichment | Description | Addressed By | File | Status |
|------------|-------------|-------------|------|--------|
| **E1** | Stack relationship bridge text (~5 lines) | Brief Edit 3 (+4 lines) | conventions-brief.md | **ADDRESSED** -- 4-line bridge naming stack architecture (richness governs, multi-coherence binds, fractal echo distributes). World-description voice. |
| **E5** | DESIGNED/COMPOSED naming extension | Brief Edit 4 (+4 lines) | conventions-brief.md | **ADDRESSED** -- Named quality levels for channel shifts (3=DESIGNED, 5+=COMPOSED), layout topologies (2/3+), strong scales (2/3+). |
| **E6** | Channel CSS property completion (channels 5-6) | Brief Edit 5 (0 lines, modification) | conventions-brief.md | **ADDRESSED** -- Behavioral updated to ":hover background-color, transition-duration, cursor"; Material updated to "component type mix, visual texture density (prose-only vs prose+code+callout)". |
| **E9** | Component-internal multi-coherence statement | Brief Edit 6 (+3 lines) | conventions-brief.md | **ADDRESSED** -- Label-to-body transition described as micro-coherence event (2-3 channels, always DEEPENING). |
| **E10** | Parametric echo CSS recipe | Brief Edit 7 (+3 lines) | conventions-brief.md | **ADDRESSED** -- Concrete CSS values: "callout in dense zone uses padding 16px 20px and label margin-bottom 8px. Same callout in sparse zone uses padding 32px 24px and label margin-bottom 16px." Pure recipe. |
| **E14** | Character scale register inventory | Brief Edit 8 (0 lines, modification) | conventions-brief.md | **ADDRESSED** -- Character scale table row expanded with CSS property names (font-size, font-weight, letter-spacing >= 0.03em) and 5% CSS budget cap. |
| **E15** | Weaver compositional vocabulary | Skill Edit 9 (+3 lines) | SKILL.md | **ADDRESSED** -- Weaver instructed to name affected multi-coherence channel, fractal scale, and transition type when describing issues. |
| **E16** | Fix cycle recipe structure | Skill Edit 10 (+5 lines) | SKILL.md | **ADDRESSED** -- Compositional context section added to fix instructions: boundary coherence direction from build log, missing channels, brief section reference, worked example. |

**DEFER Verdict: 8/8 ADDRESSED.**

### DON'T (E7, E8, E11, E12, E13) -- Master Synthesis: Reject

| Enrichment | Description | Status |
|------------|-------------|--------|
| **E7** | Compositional reference card for mid-build | **CORRECTLY EXCLUDED** -- Brief Edit manifest explicitly excludes (Report 07 MEDIUM risk, Contrarian HIGH). SKILL.md manifest also excludes (budget cost ~8 lines + 30-line new file). |
| **E8** | Comprehension proof gate before building | **CORRECTLY EXCLUDED** -- Both manifests exclude. Master synthesis: "rote exercise." |
| **E11** | New gates (SC-17 scale coverage, SC-18 restraint) | **CORRECTLY EXCLUDED** -- Gate manifest "What Was NOT Included" section explicitly lists these. Report 08 exceeds own 22-25 gate ceiling. |
| **E12** | New PA questions | **CORRECTLY EXCLUDED** -- PA manifest defers PA-68/69/70 with "pre-registered but not applied" status. Respects master synthesis "Do NOT add new PA questions." |
| **E13** | Character scale budget cap as standalone gate | **CORRECTLY EXCLUDED** -- Brief Edit 8 incorporates the 5% budget NOTE (awareness cue) without creating a standalone gate. Gate manifest excludes SC-17. |

**DON'T Verdict: 5/5 CORRECTLY EXCLUDED.**

### GO BEYOND (Execution Report Findings Not in Master Synthesis)

| Finding | Description | Addressed By | File | Status |
|---------|-------------|-------------|------|--------|
| **E-FIX** | Fix cycle recipe-to-checklist degradation | Skill Edit 10 (E16), Skill Edit 12, Brief Edit 9 | SKILL.md + conventions-brief.md | **ADDRESSED** -- Fix cycle gets compositional context (Skill E10), same-builder gets re-read instruction (Skill E12), brief adds fix-cycle memory note (Brief E9). |
| **E-CONTRA** | Boundary-by-boundary vs channel-grouped contradiction | Skill Edit 5, Brief Edit 10 | SKILL.md + conventions-brief.md | **ADDRESSED** -- Both files restructured to boundary-grouped verification. Contradiction eliminated. |
| **E-STACK** | Stack progression absent | Brief Edit 3 (E1) | conventions-brief.md | **ADDRESSED** -- 4-line bridge text. |
| **E-PHANTOM** | Enhancement channel phantom status | Brief Edit 5 (E6), Gate Edit 3 (documentation) | conventions-brief.md + gate-runner.md | **ADDRESSED** -- Brief gives channels 5-6 CSS property names. Gate Edit 3 documents phantom status with 3 future options (a/b/c) and recommends (c) as deferred. |
| **E-RETURN** | Return path extinction | Skill Edit 10 (E16), Skill Edit 9 (E15), Gate Edit 5 (brief_section references) | SKILL.md + gate-runner.md | **ADDRESSED** -- Three-pronged: weaver gets vocabulary (E15), fix cycle gets compositional context (E16), gate fix recipes get brief_section references (Gate E5). |

**GO BEYOND Verdict: 5/5 ADDRESSED.**

---

## 4. CROSS-MANIFEST CONSISTENCY CHECK

### 4.1 Mechanism Count Threshold

| File | Value | Source |
|------|-------|--------|
| conventions-brief.md (Quality Floor, current line ~234) | >= 14 mechanisms deployed | Already present |
| SKILL.md (DG-4, after Edit 1/6) | >= 14 total AND >= 1 in each of 5 categories | Edit 1 + Edit 6 |
| gate-runner.md (DG-4, current line ~916) | >= 14 total AND >= 1 in each of 5 categories | Already present |
| **VERDICT:** | **CONSISTENT** | |

### 4.2 ARIA Landmark Count

| File | Value | Source |
|------|-------|--------|
| conventions-brief.md (current) | Not explicitly stated as number | -- |
| SKILL.md (after Edit 5) | >= 5 ARIA landmarks | Edit 5 (aligned with MG-1) |
| gate-runner.md (SC-06, current line ~753) | >= 5 | Already present |
| **VERDICT:** | **CONSISTENT** | |

### 4.3 Border Configuration Count

| File | Value | Source |
|------|-------|--------|
| conventions-brief.md (Section 9B, current line ~237) | >= 3 border configurations | Already present |
| SKILL.md (after Edit 5) | >= 3 distinct border configurations, >= 1 structural border-left (3px+) | Edit 5 |
| gate-runner.md (SC-15, current line ~476) | >= 3 distinct border configurations | Already present |
| **VERDICT:** | **CONSISTENT** | |

### 4.4 Background Delta Threshold

| File | Value | Source |
|------|-------|--------|
| conventions-brief.md (Section 2, line ~56-57) | >= 15 RGB delta | Already present |
| conventions-brief.md (Brief Edit 1, perception table) | >= 15 RGB delta on any channel | Edit 1 |
| SKILL.md (after Edit 5) | >= 15 RGB | Edit 5 |
| gate-runner.md (SC-09, line ~179) | >= 15 RGB (max-channel method) | Already present |
| **VERDICT:** | **CONSISTENT** | |

### 4.5 Letter-Spacing Floor

| File | Value | Source |
|------|-------|--------|
| conventions-brief.md (Section 2, line ~59) | >= 0.03em | Already present |
| conventions-brief.md (Brief Edit 8, character scale) | >= 0.03em | Edit 8 |
| gate-runner.md (SC-14, line ~421) | >= 0.025em | Already present |
| **VERDICT:** | **DISCREPANCY -- see INCORRECT item I1** |

The conventions brief says 0.03em; the gate-runner says 0.025em. Brief Edit 8 uses 0.03em (matching the brief). This is a pre-existing discrepancy, not introduced by the manifests. However, Brief Edit 1's perception table says "Typographic: >= 2px size OR >= 100 weight delta" and does NOT include a letter-spacing row in the "Perceptible When" column, while Brief Edit 8 says ">= 0.03em." The gate-runner uses 0.025em as the FLOOR (below which = sub-perceptual), which is different from 0.03em as a PERCEPTION threshold. The 0.025em is "don't go below this" and 0.03em is "this is when it becomes perceptible." These are compatible (0.025em is the floor, 0.03em is the perception threshold) but the distinction is not made explicit.

### 4.6 Stacked Gap Threshold

| File | Value | Source |
|------|-------|--------|
| conventions-brief.md (Section 2, line ~61) | <= 120px | Already present |
| Brief Edit 10 (boundary-grouped pauses) | Not mentioned in new verification pauses | Edit 10 |
| gate-runner.md (SC-10, line ~220) | <= 120px total | Already present |
| **VERDICT:** | **CONSISTENT** (but note Brief Edit 10 drops the stacked gap from verification pauses -- it was never in the original 4 pauses either, so no regression) |

### 4.7 Gate Count

| File | Value After Edits | Source |
|------|-------------------|--------|
| gate-runner.md (Gate Edit 7, summary table) | 22 gates (1 pre + 15 T1 + 4 T2 + 2 T3) | Gate Edit 7 |
| SKILL.md (current line ~119) | "15 composition-critical gates" | **NEEDS UPDATE** -- see MISSING item M3 |
| **VERDICT:** | **DISCREPANCY** -- SKILL.md still says 15; should say 16 (15 + SC-00) or note SC-00 as pre-gate |

### 4.8 Checkpoint Structure

| File | Value After Edits |
|------|-------------------|
| conventions-brief.md (Brief Edit 10) | 3 verification pauses (skeleton / zone boundaries / full build) |
| SKILL.md (Skill Edit 5) | 3 checkpoints (skeleton / zone boundaries / full build) |
| **VERDICT:** | **CONSISTENT** -- Both restructured from 4 channel-grouped to 3 boundary-grouped |

### 4.9 Terminology Consistency

| Concept | conventions-brief.md | SKILL.md | gate-runner.md | flagship-pa-questions.md |
|---------|---------------------|----------|---------------|------------------------|
| Zone selector naming | **ABSENT** (needs addition per Gate Edit 1) | **ABSENT** (needs note per Gate Edit 1) | SC-00 defines 3 selector patterns | N/A |
| BG-1/BG-2 | N/A | After Edit 3/3B: referenced | Already defined | N/A |
| Compositional context in fix cycle | Brief Edit 9 uses "fix cycle memory" | Skill Edit 10 uses "Compositional Context" heading | Gate Edit 5 uses "Fix Recipe Compositional Context" | N/A |
| **VERDICT:** | Terminology is **CONSISTENT ENOUGH** -- the fix cycle concept uses slightly different headings per file but same intent. The "Compositional Context" framing is consistent between SKILL.md (E10) and gate-runner.md (E5). Brief uses "Fix cycle memory" in world-description voice, which is appropriate. |

---

## 5. RESEARCH FINDING GAP ANALYSIS

### 5.1 Findings CAPTURED by Manifests

| Report | Finding | Captured In |
|--------|---------|-------------|
| 01 (Pipeline State Map) | C1: Stack progression absent from all pipeline files | Brief Edit 3 (E1) |
| 01 | Channel 5-6 near-phantom status | Brief Edit 5 (E6), Gate Edit 3 (documentation) |
| 01 | Page scale most heavily gated; 4 of 5 scales ungated | Acknowledged; deferred per master synthesis "DON'T add new gates" |
| 02 (Stack Placement) | Stack needs bridge text, not restructuring | Brief Edit 3 achieves bridge without restructure |
| 02 | Telescope/microscope/periscope optic model | Manifests use appropriate voice per file (world-description in brief, imperative in SKILL.md, technical in gate-runner) |
| 04 (Brief Deep Dive) | Brief near ceiling at 403 lines | Brief manifest stays within 450 cap (441 final) |
| 04 | Guardrail-to-playbook ratio 2.0:1, target <=2:1 | Brief manifest improves to ~1.7:1 |
| 04 | Channels 4-6 lack CSS property names | Brief Edit 5 (E6) addresses channels 5-6 |
| 05 (Verification) | DG-1B (fractal echo cross-validation) proposed | Correctly deferred per master synthesis |
| 05 | SC-13B should stay ADVISORY | Correctly maintained as ADVISORY |
| 05 | L5 anti-scale cannot be gated programmatically | Correctly not gated |
| 06 (Orchestrator) | E-CONTRA: boundary vs channel contradiction | Skill Edit 5 + Brief Edit 10 |
| 06 | Weaver needs compositional vocabulary | Skill Edit 9 (E15) |
| 06 | Gate results should go to weaver, not auditors | Skill Edit 4 (B4) |
| 06 | Missing compositional checkpoint in builder self-checks | Skill Edit 5 adds ">= 3 channels shift in same semantic direction" |
| 07 (Anti-Regression) | Complexity ratchet risk | Mitigated by 450-line caps on brief and SKILL.md |
| 07 | Guardrail factory risk | Brief adds recipe/world-description, not constraints |
| 07 | Recipe formatting = 0 HIGH risks | Edits 2, 7 (brief) are pure recipe format |
| 10 (Contrarian) | Pipeline has never been tested -- enrichment is premature | Master synthesis decision tree preserved: DO NOW minimal, DEFER conditional, DON'T rejected |
| 10 | More text = worse output | Line budgets enforced (brief 441/450, SKILL 430/450) |
| 10 | Compression is a feature (abstraction) for forward path | Manifests do not add CI vocabulary to gates |
| 13 (Page Scale) | Boundary-by-boundary recipe is highest-leverage brief enrichment | Brief Edit 2 (E2) |
| 13 | Transition-to-coherence mapping table | Correctly excluded (budget constraint, inferrable) |
| 15 (Component) | Component-internal multi-coherence is highest-leverage component enrichment | Brief Edit 6 (E9) |
| 15 | Parametric echo needs recipe, not principle | Brief Edit 7 (E10) -- concrete CSS values |
| 16 (Character) | Character scale should be constrained, not expanded | Brief Edit 8 (E14) -- 5% budget cap + CSS property names |
| 17 (Concept Flow) | Return path extinction (8/9 concepts lost in fix cycle) | Gate Edit 5 (brief_section references), Skill Edit 10 (compositional context), Skill Edit 12 (re-read instruction) |
| 17 | Recipe-to-checklist degradation in fix cycle | Brief Edit 9 (fix cycle memory), Skill Edit 10 (recipe structure in fix instructions) |
| 17 | Perception thresholds = best-preserved concept | Brief Edit 1 (E4) consolidates thresholds into one table |

### 5.2 Findings NOT Captured but SHOULD Be

| Report | Finding | Gap | Severity |
|--------|---------|-----|----------|
| 01 (Pipeline State Map) | DG-1 validates table existence, NOT CSS implementation (deliverable-reality gap) | No manifest addresses this. Gate Edit 1 adds SC-00 (zone selectors) but DG-1B (fractal echo cross-validation) was proposed in Report 05 and correctly deferred. | LOW -- master synthesis says "DON'T add new gates"; this is correctly deferred |
| 06 (Orchestrator) | Lock sheet should include compositional context (CHALLENGEABLE elements mapped to channels/scales) | Not addressed in any manifest. | LOW -- acknowledged in Skill manifest "NOT INCLUDED" section; budget constraint |
| 06 | No per-concept priority weighting in builder spawn prompt (multi-coherence and fractal echo correlate most with PA-05) | Not addressed. | LOW -- the conventions brief itself weights these via section ordering and emphasis |
| **Gate Edit 1** | SC-00 cross-file: conventions-brief needs 3-4 lines documenting zone markup patterns | **Not in Brief manifest** | **MEDIUM -- See MISSING item M1** |
| **Gate Edit 1** | SC-00 cross-file: SKILL.md needs 1-2 lines noting zone class requirement | **Not in Skill manifest** | **MEDIUM -- See MISSING item M1** |
| **Gate Edit 2** | B8 cross-file: 2 CLAUDE.md files need 0.02em -> 0.025em fix | **Not in any manifest** | **MEDIUM -- See MISSING item M2** |
| **Gate Edit 4** | SC-00 cross-file: SKILL.md gate table needs SC-00 row + "15 gates" -> "16 gates" | **Not in Skill manifest** | **MEDIUM -- See MISSING item M3** |

### 5.3 Findings Correctly Deferred

| Finding | Source | Why Correctly Deferred |
|---------|--------|----------------------|
| Brief restructuring (bottom-up) | Report 02 | Master synthesis + contrarian agree: telescope-first order is correct |
| New gates (DG-1B, SC-13C, SC-10B, SC-17, SC-18) | Reports 02, 05 | Master synthesis: "DON'T add new gates"; Report 08 exceeds gate ceiling |
| SC-13B upgrade to BLOCKING | Report 05 | ~50% confidence heuristic; CD-006 would sometimes fail; premature |
| New PA questions (PA-68/69/70) | Report 05 | PA manifest correctly pre-registers but does NOT apply |
| Anti-scale programmatic gates | Report 05 | "CANNOT verify programmatically, SHOULD NOT attempt" |
| Compositional reference card (E7) | Report 06 | More text = worse output; MEDIUM regression risk |
| Comprehension proof gate (E8) | Report 06 | Rote exercise; slows builder start |
| Coherence arc planning (13 Gap 1) | Report 13 | Overlaps with existing brief content at line 120; budget tight |
| Section-scale density gate | Report 14 | Report 14's own verdict: "REJECT" |
| Navigation-specific enrichment | Report 12 | Report 12's own verdict: "LEAST enrichment-needy" |

---

## 6. THRESHOLD CONSISTENCY AUDIT

Every numeric threshold mentioned across all manifests:

| Threshold | Brief (Current) | Brief (After Edits) | SKILL.md (After Edits) | Gate-Runner (After Edits) | Consistent? |
|-----------|-----------------|---------------------|----------------------|--------------------------|-------------|
| Container width | 940-960px | 940-960px (unchanged) | 940-960px (unchanged) | 940-960px (SC-01) | YES |
| Background delta | >= 15 RGB | >= 15 RGB (Edit 1 table, Edit 2 example) | >= 15 RGB (Edit 5) | >= 15 RGB (SC-09) | YES |
| Font-size delta | >= 2px | >= 2px (Edit 1 table) | >= 2px (Edit 5) | >= 2px implicit in SC-11 (10px display-body) | YES (different measurement: Edit 1 says "2px size delta between zones" while SC-11 says "10px display-body delta" -- these are DIFFERENT thresholds measuring different things, but compatible) |
| Letter-spacing floor | >= 0.03em (brief) or 0 | >= 0.03em (Edit 8) | N/A | >= 0.025em (SC-14) | **DISCREPANCY** (pre-existing) -- see I1 |
| Font-weight delta | >= 100 | >= 100 (Edit 1 table) | N/A | >= 100 implicit in SC-13 Ch2 | YES |
| Stacked gap | <= 120px | <= 120px (unchanged) | N/A | <= 120px (SC-10) | YES |
| Spatial delta between zones | >= 24px | >= 24px (Edit 1 table) | N/A | >= 24px (SC-13 Ch3) | YES |
| Zone count | 3-5 | 3-5 (unchanged) | N/A | 3-5 (SC-12) | YES |
| Multi-coherence minimum | >= 3 channels/boundary | >= 3 (unchanged) | >= 3 channels (Edit 5) | >= 3 (SC-13) | YES |
| Multi-coherence average | avg >= 4 | avg >= 4 (unchanged) | N/A | avg >= 4 (SC-13) | YES |
| ARIA landmarks | N/A (brief doesn't specify number) | N/A | >= 5 (Edit 5) | >= 5 (SC-06) | YES |
| Component types | >= 8 | >= 8 (unchanged) | >= 8 (Edit 5) | >= 8 (SC-08) | YES |
| Border configurations | >= 3 | >= 3 (unchanged) | >= 3 (Edit 5) | >= 3 (SC-15) | YES |
| Mechanism total | >= 14 | >= 14 (unchanged) | >= 14 (Edit 1/6) | >= 14 (DG-4) | YES |
| Mechanisms per category | >= 1 per 5 categories | >= 1 per 5 (unchanged) | >= 1 per 5 (Edit 1/6) | >= 1 per 5 (DG-4) | YES |
| Character scale CSS budget | N/A | <= 5% (Edit 8) | N/A | N/A | N/A (new, brief-only) |
| Channel shifts per boundary DESIGNED | N/A | 3 (Edit 4) | N/A | 3 (SC-13 threshold) | YES |
| Channel shifts per boundary COMPOSED | N/A | 5+ (Edit 4) | N/A | N/A | N/A (naming only, not gate) |
| Layout topologies DESIGNED | N/A | 2 (Edit 4) | N/A | N/A | YES (matches existing brief Section 5) |
| Strong scales DESIGNED | N/A | 2 (Edit 4) | N/A | N/A | YES (matches existing brief Section 5) |
| SC-00 zone selector minimum | N/A | N/A | N/A | >= 3 elements (Gate Edit 1) | N/A (new) |
| SC-13B direction coherence | N/A | N/A | N/A | >= 50% boundaries (unchanged, ADVISORY) | N/A |

**Threshold Audit Verdict: 1 pre-existing discrepancy (letter-spacing 0.03em vs 0.025em), 0 new discrepancies introduced by manifests.**

---

## 7. MISSING ITEMS (Must Address Before Applying Edits)

### M1: SC-00 Cross-File Propagation (BLOCKING)

Gate Edit 1 introduces SC-00 (zone selector validation) with a 65-line definition. Gate Edit 1's own "Required conventions brief documentation" section specifies that builders MUST use one of 3 zone markup patterns. Gate Edit 4's cross-file impact says:

> "conventions-brief.md: Add 3-4 lines documenting required zone markup patterns"
> "SKILL.md: Add 1-2 lines to builder spawn prompt noting zone class naming requirement"

**Neither the Brief manifest nor the Skill manifest includes these edits.** The Brief manifest has 9 lines of remaining budget (441/450), which is tight but sufficient for 3-4 lines. The Skill manifest has 20 lines remaining (430/450), sufficient for 1-2 lines.

**Resolution required:** Either:
(a) Add Brief Edit 11 and Skill Edit 13 covering the cross-file SC-00 requirements, OR
(b) Defer SC-00 entirely until the next edit cycle (but this removes the B7 fix, which was rated HIGH priority)

**Recommendation:** (a) -- Add the cross-file edits. The zone selector fragility is the #1 single point of failure per the execution report. Budget is available in both files.

### M2: B8 CLAUDE.md File Fixes (BLOCKING)

B8 (threshold inconsistency, 0.02em in CLAUDE.md files) is documented in the execution report. Gate Edit 2 confirms gate-runner.md is already correct. The gate manifest's cross-file impact says:

> "design-system/CLAUDE.md: Fix any instance of '0.02em' to '0.025em'"
> "design-system/compositional-core/CLAUDE.md: Fix any instance of '0.02em' to '0.025em'"

**No manifest covers the actual CLAUDE.md edits.** These are simple find-replace operations but must be explicitly included in the edit plan.

**Resolution required:** Add a 5th manifest or append to an existing manifest covering the 2 CLAUDE.md files.

### M3: SKILL.md Gate Table SC-00 Propagation (BLOCKING)

Gate Edit 4 adds SC-00 to the execution groups. Gate Edit 4's cross-file impact says:

> "SKILL.md line 119-121: Update '15 composition-critical gates' to include SC-00"
> "SKILL.md gate table (lines 123-139): Add SC-00 row"

**The Skill manifest does not include these edits.** The Skill manifest only addresses gates via Edit 3 (BG-1/BG-2 references) and Edit 6 (DG-4 restructuring).

**Resolution required:** Add Skill Edit 13 (or fold into an existing edit) covering:
- Update gate count from 15 to 16 (or note SC-00 as pre-gate before the 15)
- Add SC-00 row to gate table

---

## 8. INCORRECT ITEMS (Notes, Not Blocking)

### I1: Letter-Spacing Threshold Discrepancy (Pre-Existing, Not Introduced)

The conventions brief uses 0.03em as the perception threshold for letter-spacing shifts. The gate-runner uses 0.025em as the sub-perceptual floor in SC-14. These are DIFFERENT concepts (perception floor vs sub-perceptual detection floor) but the manifests do not clarify this distinction. Brief Edit 8 introduces "letter-spacing >= 0.03em" in the character scale table row.

**This is a pre-existing discrepancy that the manifests neither introduce nor resolve.** It should be documented for future calibration but does not block the current edits.

**Recommendation:** Add a footnote or comment in Brief Edit 1's perception table clarifying: "The 0.025em floor (gate-runner SC-14) catches sub-perceptual CSS; the 0.03em threshold (this table) is when letter-spacing shifts become perceptibly meaningful. Values between 0.025-0.03em are technically perceptible but marginal."

### I2: Brief Edit 1 Table Format vs Master Synthesis Table Format

The master synthesis (Appendix A, Edit C) specifies the perception table as:
```
| Channel | Primary CSS | Perception Floor |
```

Brief Edit 1 uses:
```
| Channel | Primary CSS Properties | Perceptible When |
```

These are equivalent in content but differ in column headers. Brief Edit 1's headers are slightly more informative. **This is not a problem** -- the manifest author improved the format. Just noting for completeness.

### I3: Skill Edit 5 vs Master Synthesis Edit B -- ARIA Threshold

The master synthesis (Appendix A, Edit B) specifies:
```
1. After HTML skeleton: >= 3 ARIA landmarks? Skip link? >= 8 component classes?
```

Skill Edit 5 upgrades this to:
```
1. After HTML skeleton: >= 5 ARIA landmarks? Skip link? >= 8 component classes?
```

This is a DELIBERATE improvement (aligning with gate-runner SC-06 which requires >= 5), not a regression. The master synthesis draft was written before the B2 threshold alignment was resolved. Skill Edit 5 correctly overrides the master synthesis value. **Not an issue.**

### I4: Brief Edit 2 CSS Example Uses Different Values Than Brief Edit 1 Table

Brief Edit 1 says Chromatic is "perceptible when >= 15 RGB delta on any channel."
Brief Edit 2's CSS example says `background: #F0EBE3; /* Chromatic: 18 RGB darker */`

The 18 RGB value in the example exceeds the 15 RGB threshold, which is correct (the example should exceed the floor). **Not an issue** -- good practice to show a value above the minimum.

### I5: Gate Edit 5 Cross-Reference to SKILL.md Fix Template

Gate Edit 5 adds a `brief_section` field to gate fix recipes. Gate Edit 5's cross-file impact says:

> "SKILL.md fix cycle template (lines 310-327): Add `brief_section` field to fix instruction template"

Skill Edit 10 adds a "Compositional Context" section to the fix instructions but does NOT add the `brief_section` JSON field format. The approaches are complementary (Skill E10 adds concept-level context; Gate E5 adds per-gate references) but not perfectly aligned in format.

**Recommendation:** Skill Edit 10 should include a note like: "Each gate failure entry in _gate-results.json will include a `brief_section` field pointing to the relevant conventions-brief section." This connects the two edits.

---

## 9. ADDITIONAL CROSS-CHECKS

### 9.1 Voice Consistency

| File | Required Voice | Achieved? |
|------|---------------|-----------|
| conventions-brief.md | World-description, atmospheric | YES -- Brief Edits 1-10 all use world-description voice. Edit 3 ("Sections 3-5 form a stack...") is declarative. Edit 7 ("Same DNA, different tightness...") is experiential. Edit 9 ("When returning to fix gate failures...") is recipe-shaped but in the brief's conversational register. |
| SKILL.md | Imperative, orchestrator-to-agent | YES -- Skill Edits use imperative verbs. Edit 5 ("After HTML skeleton: >= 5 ARIA landmarks?"). Edit 9 ("When describing issues, name the affected multi-coherence channel..."). Edit 10 ("For each failed gate or PA issue at a boundary, include:"). |
| gate-runner.md | Technical, programmatic specification | YES -- Gate Edits use technical specification voice. Edit 1 (SC-00) includes JavaScript code, structured output format, and fallback logic. Edit 5 (fix recipe enrichment) uses JSON format and gate-category mapping table. |
| flagship-pa-questions.md | Perceptual, auditor-accessible | YES -- PA Edits maintain perceptual language. Edit 1 (PA-44) adds "Does the metaphor persist across the ENTIRE page?" Edit 2 (PA-63) adds "find the SAME component type in a different section" -- observation verbs, not framework language. |

### 9.2 Line Budget Compliance

| File | Before | After | Cap | Headroom | Status |
|------|--------|-------|-----|----------|--------|
| conventions-brief.md | 403 | 441 | 450 | 9 lines | OK -- tight but sufficient for M1 (3-4 lines) |
| SKILL.md | 415 | 430 | 450 | 20 lines | OK -- sufficient for M1 (1-2 lines) + M3 (2-3 lines) |
| gate-runner.md | 993 | ~1,126 | No explicit cap | N/A | OK -- gate-runner has no stated cap; 1,126 lines is proportional to 22 gates |
| flagship-pa-questions.md | 144 | ~152 | No explicit cap | N/A | OK -- 2 edits, ~8 lines modified |

### 9.3 Guardrail-to-Playbook Ratio Impact

| File | Before | After | Trend |
|------|--------|-------|-------|
| conventions-brief.md | ~2.0:1 (58 constraint : 29 recipe) | ~1.7:1 (58 constraint : 35 recipe) | **IMPROVED** -- 6 new recipe items, 0 new constraints (Edit 8's 5% cap is the only constraint-adjacent addition, paired with CSS properties). |
| SKILL.md | Not measured | Not measured | **NEUTRAL** -- Bug fixes align thresholds (no new constraints). E15/E16 add recipe-structured context (what TO do). E11 adds compositional framing ("Select mechanisms that serve your multi-coherence channels" = guidance, not prohibition). |

---

## 10. FINAL SCORECARD

| Category | Score | Detail |
|----------|-------|--------|
| Bug Fix Coverage (B1-B9) | **8.5/9** | B8 partially addressed (gate-runner correct, CLAUDE.md fixes missing from manifests) |
| DO NOW Coverage (E2, E3, E4) | **3/3** | All addressed with appropriate edits |
| DEFER Coverage | **8/8** | All pre-registered with exact edit text |
| DON'T Exclusions | **5/5** | All correctly excluded with justification |
| GO BEYOND Coverage | **5/5** | All execution report findings addressed |
| Cross-Manifest Consistency | **Good** | 1 pre-existing discrepancy (letter-spacing), 0 new discrepancies |
| Research Finding Coverage | **Good** | No critical research findings missed; 3 cross-file propagation gaps identified |
| Threshold Consistency | **Good** | All thresholds match across files (1 pre-existing exception) |
| Voice Appropriateness | **Excellent** | Each file's edits use the correct register |
| Line Budget Compliance | **Good** | All files within caps; tight on brief (9 lines remaining + M1 needs 3-4) |

### Overall: **PASS WITH NOTES**

**3 BLOCKING items (M1, M2, M3)** need resolution before edits are applied. All are straightforward cross-file propagation additions that the individual manifest authors flagged but that no manifest currently includes.

**Estimated resolution effort:** ~20 minutes for a single agent to produce the 3 missing mini-manifests (Brief Edit 11, Skill Edits 13-14, CLAUDE.md edit pair).

---

*End of anti-regression audit. 09-anti-regression-audit.md complete.*

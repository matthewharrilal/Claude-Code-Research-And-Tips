# COMPREHENSIVE AUDIT: Files 18-21 Gap Analysis

**Auditor:** Opus 4.6 (comprehensive-auditor agent)
**Date:** 2026-02-24
**Scope:** Complete inventory of every gap, partial coverage, missing enrichment, and completeness issue across files 18-21
**Method:** Line-by-line extraction from all 4 files, cross-referenced against the 57-enrichment master list (05) and the structural intersection analysis (13)

---

## TABLE OF CONTENTS

1. [File 18 Audit: Gap Check](#1-file-18-audit-gap-check)
2. [File 19 Audit: User Insight Completeness](#2-file-19-audit-user-insight-completeness)
3. [File 20 Audit: Paradigm & Cross-Run Completeness](#3-file-20-audit-paradigm--cross-run-completeness)
4. [File 21 Audit: Master Synthesis 8-Change Plan](#4-file-21-audit-master-synthesis-8-change-plan)
5. [Cross-File Synthesis: What the 8-Change Plan Misses](#5-cross-file-synthesis-what-the-8-change-plan-misses)
6. [Dependency Check: File 13 vs File 21](#6-dependency-check-file-13-vs-file-21)
7. [Final Verdict](#7-final-verdict)

---

## 1. FILE 18 AUDIT: GAP CHECK

File 18 mapped 247 findings from 19 Phase 2 reports against 57 enrichments. Below is a complete inventory.

### 1A. ALL 18 MISSING Findings (GAP-01 through GAP-12, plus 6 embedded in report tables)

| Item ID | Type | Description | Source Report | Tier | In 8-Change Plan? |
|---------|------|-------------|---------------|------|-------------------|
| GAP-01 | GAP | No responsive breakpoint specification in builder recipe. Builder has no guidance on 768px/480px layout reorganization. | step4-pa-epsilon.md | SHOULD | NO |
| GAP-02 | GAP | No table responsive behavior guidance. Tables don't adapt at narrow viewports. | step4-pa-epsilon.md | SHOULD | NO |
| GAP-03 | GAP | Metaphor structural embedding not enforced. Metaphor announced in language but not in layout/typography. No enrichment strengthens metaphor enforcement. | step4-pa-zeta.md | COULD | NO |
| GAP-04 | GAP | No builder feedback/iteration loop. Builder never sees gate results or PA feedback. Pipeline is single-pass by design. | step-paradigm-analysis.md | COULD | NO |
| GAP-05 | GAP | No taste/judgment metric in pipeline. ME-055 ("What would you REMOVE?") is one taste signal but not a metric. | step-paradigm-analysis.md | COULD | NO |
| GAP-06 | GAP | LLM vision != human vision gap not addressed. Fundamental limitation of LLM-based PA. | buddy-metacognitive.md | COULD | NO |
| GAP-07 | GAP | No human-in-the-loop review step. Pipeline is entirely agent-driven. | buddy-metacognitive.md | COULD | NO |
| GAP-08 | GAP | Visual component completeness check missing (legends, axis labels, consistent tier counts between text and diagrams). | inattentional-blindness-audit.md | SHOULD | NO |
| GAP-09 | GAP | Content accuracy verification (text-diagram consistency). Complexity Ladder shows 5 tiers but text describes 6. | inattentional-blindness-audit.md | SHOULD | NO |
| GAP-10 | GAP | Invisible DOM content detection gate missing. No check for opacity:0, visibility:hidden, zero-height content-bearing elements. | gate-usability-audit.md Section 4F | SHOULD | NO |
| GAP-11 | GAP | Scroll-reveal / animation-gated content detection gate missing. JS-gated content may be invisible at capture time. | gate-usability-audit.md Section 4G | COULD | NO |
| GAP-12 | GAP | Empty sections / missing content detection gate. Headings with no content below them. | gate-usability-audit.md Section 4H | SHOULD | NO |
| GAP-13 (embedded) | GAP | "Gas town" metaphor could be expressed through typography weight = resource weight. Specific creative suggestion lost. | step4-pa-zeta.md | COULD | NO |
| GAP-14 (embedded) | GAP | Settlement Map has no legend explaining marker meanings. Visual component incompleteness. | inattentional-blindness-audit.md | SHOULD | NO |
| GAP-15 (embedded) | GAP | Complexity Ladder text-diagram tier count mismatch (5 vs 6). Content accuracy failure. | inattentional-blindness-audit.md | SHOULD | NO |
| GAP-16 (embedded) | GAP | Content visibility gate 4F (opacity:0, off-screen, color-matches-background). Distinct from GAP-10 in scope. | gate-usability-audit.md Section 4F | SHOULD | NO |
| GAP-17 (embedded) | GAP | Image/SVG load verification gate (GR-63). naturalWidth > 0, SVG bounding box > 0, alt text presence. | gate-usability-audit.md Section 4D | COULD | NO |
| GAP-18 (embedded) | GAP | Touch target size gate (GR-64, WCAG 2.5.5 >= 44x44px). Interactive elements need minimum clickable area. | gate-usability-audit.md Section 4E | COULD | NO |

**Total MISSING: 18 items. 0 in the 8-change plan.**

### 1B. ALL 34 PARTIAL Findings (P-01 through P-16, plus 18 embedded in report tables)

| Item ID | Type | Description | Enrichment | What's Missing | Source Report | Tier | In 8-Change Plan? |
|---------|------|-------------|------------|----------------|---------------|------|-------------------|
| P-01 | PARTIAL | Timestamp/duration tracking in execution tracker | ME-045 | ME-045 addresses context budget but not per-phase timestamps | step1-paper-trail-audit.md | COULD | NO |
| P-02 | PARTIAL | Gate-manifest.json missing execution_order field | ME-018 | ME-018 adds perceptibility but not execution_order | step1-paper-trail-audit.md | COULD | NO |
| P-03 | PARTIAL | Inter-auditor agreement weighting in Weaver | ME-001 | Experiential pass adds coverage but Weaver does not weight agreement levels | step3-pipeline-pa-review.md | SHOULD | PARTIAL (ME-001 in plan) |
| P-04 | PARTIAL | PA scoring calibration across auditors | ME-019 | Range scoring helps but inter-auditor calibration not addressed | step3-pipeline-pa-review.md | SHOULD | NO |
| P-05 | PARTIAL | "What if experiential pass also fails?" — no fallback | ME-001 | No backup if universal pre-check produces false negatives | buddy-adversarial.md | SHOULD | PARTIAL (ME-001 in plan) |
| P-06 | PARTIAL | GR-05 downgrades may enable future visible soul violations | ME-010 | Opacity threshold (0.3) may not catch all visible cases | buddy-adversarial.md | COULD | NO |
| P-07 | PARTIAL | "Prevent > detect" principle not codified | ME-004, ME-038 | Individual prevention measures exist but principle not stated | step7-fix-effectiveness.md | COULD | PARTIAL (ME-004 in plan) |
| P-08 | PARTIAL | Gates as detectors vs preventers distinction | ME-018 | Perceptibility metadata exists but detector/preventer role not classified | step7-fix-effectiveness.md | COULD | NO |
| P-09 | PARTIAL | Dark inversion blocks as specific technique | ME-049 | Dark moments guidance exists but inversion blocks not called out | buddy-fresh-eyes.md | COULD | NO |
| P-10 | PARTIAL | Invisible excess detection | ME-055 | "What would you REMOVE?" is close but not specifically about invisible/ignored content | inattentional-blindness-audit.md | COULD | NO |
| P-11 | PARTIAL | Pipeline philosophical statement missing from MANIFEST. "Reader experience is primary value" not declared. | ME-002, ME-008 | Mechanism fixes exist but philosophy not stated | priority-inversion-analysis.md | SHOULD | PARTIAL (ME-002 in plan) |
| P-12 | PARTIAL | Image/SVG load verification gate (GR-63) | NONE | Gate-usability-audit proposes this but no ME covers it | gate-usability-audit.md | COULD | NO |
| P-13 | PARTIAL | Touch target size gate (GR-64) | NONE | Gate-usability-audit proposes this but no ME covers it | gate-usability-audit.md | COULD | NO |
| P-14 | PARTIAL | Self-evaluation answer quality (depth, not just existence) | ME-004 | ME-004 adds new questions but not quality criteria for answers | step1-paper-trail-audit.md | COULD | PARTIAL (ME-004 in plan) |
| P-15 | PARTIAL | Content selection criteria for pipeline input | ME-052 | Audience description helps but content selection methodology not addressed | step-paradigm-analysis.md | COULD | NO |
| P-16 | PARTIAL | Content-promise mismatch for collapsible summaries | ME-023 | ME-023 asks about structural promises but not collapsible summary information sufficiency specifically | inattentional-blindness-audit.md | COULD | NO |
| P-17 (embedded) | PARTIAL | Overall rating 1.5/5 void-dominated may be DPR artifact, not real | ME-006 | DPR bug caused voids; real page may differ. Fix addresses root cause but rating is contaminated. | step4-pa-alpha.md | SHOULD | YES (ME-006 in plan) |
| P-18 (embedded) | PARTIAL | Density annotations valuable but small | ME-014 | GR-61 catches min font size but not annotation readability specifically | step4-pa-alpha.md | COULD | NO |
| P-19 (embedded) | PARTIAL | PA scoring calibration inconsistencies | ME-019 | Range scoring helps but doesn't fully address calibration drift between auditors | step3-pipeline-pa-review.md | SHOULD | NO |
| P-20 (embedded) | PARTIAL | Weaver accepted auditor scores without independent verification | ME-002 | Priority override helps but doesn't add independent Weaver verification | step3-pipeline-pa-review.md | SHOULD | YES (ME-002 in plan) |
| P-21 (embedded) | PARTIAL | Metaphor: color system supports hierarchy but does not carry metaphor | NONE | Same as GAP-03 — metaphor enforcement gap | step4-pa-zeta.md | COULD | NO |
| P-22 (embedded) | PARTIAL | Tables lack column headers explaining data structure (ARIA covers accessibility but not content clarity) | ME-016 | ARIA addresses accessibility but not content clarity | inattentional-blindness-audit.md | COULD | NO |
| P-23 (embedded) | PARTIAL | Adversarial: "What if experiential pass also fails?" | ME-001 | Valid adversarial challenge with no backup mechanism | buddy-adversarial.md | SHOULD | PARTIAL |
| P-24 (embedded) | PARTIAL | GR-05 downgrades may enable visible soul violations at scale | ME-010 | Future sub-perceptual tints might become visible at scale | buddy-adversarial.md | COULD | NO |
| P-25 (embedded) | PARTIAL | Two systematic biases: screenshot contamination + Middle comparison | ME-006 | Screenshot bias addressed, Middle comparison bias is methodological | buddy-adversarial.md | COULD | PARTIAL (ME-006 in plan) |
| P-26 (embedded) | PARTIAL | "What does it look like?" (vs screenshots-of-screenshots) | ME-006 | Better screenshots help but don't resolve fundamental mediation problem | buddy-metacognitive.md | COULD | PARTIAL (ME-006 in plan) |
| P-27 (embedded) | PARTIAL | "Is PA-05 valid?" | ME-019 | Range scoring improves calibration but doesn't address whether PA-05 measures right thing | buddy-metacognitive.md | COULD | NO |
| P-28 (embedded) | PARTIAL | 23 usability issues on page, most outside pipeline scope | Various | Most are content-level issues | inattentional-blindness-audit.md | COULD | NO |
| P-29 (embedded) | PARTIAL | PA caught 7 fully (30%), 6 partially (26%), missed 10 (43%) | ME-001 | Experiential pass improves detection but can't guarantee 100% | inattentional-blindness-audit.md | SHOULD | PARTIAL (ME-001 in plan) |
| P-30 (embedded) | PARTIAL | Philosophical problem: pipeline optimizes for sophistication, not reader experience | ME-002, ME-008 | Enrichments fix mechanism but philosophical reorientation not codified | priority-inversion-analysis.md | SHOULD | PARTIAL |
| P-31 (embedded) | PARTIAL | Fundamental hierarchy inversion not stated in MANIFEST | ME-002, ME-008 | Fixes implement inversion but stated PHILOSOPHY not updated | priority-inversion-analysis.md | SHOULD | PARTIAL |
| P-32 (embedded) | PARTIAL | "Multi-pass approach rejected without evidence; CD-006 was multi-pass" not addressed | ME-017 | Phase 4 adds mechanical fixes but not compositional revision | step-paradigm-analysis.md | COULD | NO |
| P-33 (embedded) | PARTIAL | "Highest ROI: prevent > detect" principle not codified as design principle | ME-004, ME-038, ME-039 | Builder improvements help but principle not stated | step7-fix-effectiveness.md | COULD | PARTIAL (ME-039 in plan) |
| P-34 (embedded) | PARTIAL | Content selection affects quality but no enrichment addresses content selection criteria | ME-052 | Audience description tangential; content selection methodology absent | step-paradigm-analysis.md | COULD | NO |

**Total PARTIAL: 34 items. 6 in plan fully, 9 partially addressed by plan items.**

### 1C. ALL 8 Proposed New Enrichments from File 18

| ID | Description | Source Gap | Target File | Severity | In 8-Change Plan? |
|----|-------------|-----------|-------------|----------|-------------------|
| NEW-01 | Responsive breakpoint specification (768px, 480px) | GAP-01, GAP-02 | artifact-builder-recipe.md | MINOR | NO |
| NEW-02 | Visual component completeness check for PA (legends, axes, tier counts) | GAP-08, GAP-09 | pa-questions.md | MINOR | NO |
| NEW-03 | Invisible DOM content detection gate GR-65 (RECOMMENDED) | GAP-10 | gate-runner-core.js | MINOR | NO |
| NEW-04 | Empty section detection gate GR-66 (ADVISORY) | GAP-12 | gate-runner-core.js | CONSIDER | NO |
| NEW-05 | Pipeline philosophy statement in MANIFEST ("reader experience is primary value") | P-11 | MANIFEST.md | MINOR | NO |
| NEW-06 | Timestamp tracking in execution tracker | P-01 | EXECUTION-TRACKER-TEMPLATE.md | CONSIDER | NO |
| NEW-07 | Image/SVG load verification gate GR-63 (ADVISORY) | P-12 | gate-runner-core.js | CONSIDER | NO |
| NEW-08 | Prevent-detect principle in MANIFEST | P-07 | MANIFEST.md | CONSIDER | NO |

**Total new enrichments proposed: 8. 0 in 8-change plan.**

### 1D. Per-Report Coverage (Lowest Coverage Reports)

| Report | Total Findings | FULL | PARTIAL | MISSING | N/A | Coverage % |
|--------|---------------|------|---------|---------|-----|-----------|
| step4-pa-zeta.md (Metaphor + Coherence) | 5 | 0 | 2 | 1 | 2 | **0% FULL** |
| step4-pa-epsilon.md (Responsiveness) | 6 | 2 | 0 | 2 | 2 | **33% FULL** |
| step-paradigm-analysis.md | 10 | 2 | 3 | 2 | 3 | **20% FULL** |
| buddy-metacognitive.md | 11 | 3 | 4 | 2 | 2 | **27% FULL** |
| gate-usability-audit.md | 16 | 12 | 2 | 2 | 0 | **75% FULL** |
| MASTER-SYNTHESIS.md | 10 | 7 | 0 | 0 | 3 | **100% FULL** (actionable items) |

**Lowest coverage: step4-pa-zeta.md at 0% FULL coverage.** The metaphor/coherence domain has no enrichments addressing it. This is by design (metaphor is TC brief territory) but represents a structural blind spot.

---

## 2. FILE 19 AUDIT: USER INSIGHT COMPLETENESS

File 19 checked 4 user-insight reports against the 57 enrichments. Here is the complete extraction.

### 2A. Gorilla Experiment Framing — What Was Flattened

| Item ID | Type | Description | Impact | In 8-Change Plan? |
|---------|------|-------------|--------|-------------------|
| UI-01 | MISSING-NUANCE | ME-001 rationale mentions "attentional tunnels" but the deeper gorilla experiment framing (questions don't just GUIDE attention, they CREATE the auditor's perceptual reality) is compressed to a single clause. | LOW for implementation, MODERATE for future pipeline designers who may remove the experiential pass without understanding WHY it exists. | PARTIAL (ME-001 in plan, but framing lost) |
| UI-02 | MISSING-NUANCE | Per-auditor attentional tunnel analysis (9 auditors, each SAW the chart AS something different: A=rhythm device, B=text, C=spatial weight, D=pacing beat, E=grid element, F=pattern instance, G=metaphor vehicle, H=responsive object, I=design choice) is not cited in any enrichment. | LOW — this is evidence FOR ME-001, not a separate enrichment. But it's the most persuasive element of the entire experiential-PA case. | NO |
| UI-03 | MISSING-NUANCE | The "analytical evaluation != experiential evaluation" metacognitive warning is implied by ME-001 but not explicitly articulated. | LOW for implementation. | PARTIAL |
| UI-04 | MISSING-NUANCE | The comprehension test ("After reading the page, can an agent answer questions ABOUT the content?") has no enrichment. Testing whether page communicates information vs just being readable. | MODERATE — distinct failure class. Impractical for screenshot-based PA though. | NO |

### 2B. Per-Auditor Chart Detection — Evidence or Separate Enrichment?

**File 19's assessment: This is SUPPORTING EVIDENCE, not a separate enrichment.** ME-001 already proposes the correct fix (universal experiential pass). The per-auditor chart detection breakdown (1/9 thorough, 4/9 passing, 3/9 zero) validates ME-001 but does not constitute an additional spec change.

**My assessment: AGREE.** The per-auditor analysis belongs in documentation (ME-044 rationale) not as a separate enrichment. However, File 19 notes that the "9 different perceptual realities" finding is the single most communicable evidence for ME-001's necessity. If ME-044 (documenting experiential pass rationale) were in the 8-change plan, this evidence should be cited there. ME-044 is NOT in the 8-change plan (deferred as low-priority documentation).

### 2C. 6-Type Failure Taxonomy — Coverage Analysis

| Type | Name | Covered By Enrichment? | In 8-Change Plan? | Gap? |
|------|------|----------------------|-------------------|------|
| Type 1 | False Affordance | YES — ME-031 | NO (ME-031 deferred) | YES — not in plan |
| Type 2 | Communicative Failure | YES — ME-022 | NO (ME-022 deferred) | YES — not in plan |
| Type 3 | Navigation Desert | YES — ME-021 | NO (ME-021 deferred) | YES — not in plan |
| Type 4 | Content-Promise Mismatch | YES — ME-023 | NO (ME-023 deferred) | YES — not in plan |
| Type 5 | Invisible Excess | YES — ME-007, ME-041 | YES (ME-007 in plan) | PARTIAL — ME-007 in plan but ME-041 not |
| Type 6 | Cross-Element Contradiction | **NO — MISSING from enrichment list** | NO | YES — gap in both enrichments AND plan |

**5/6 failure types have enrichments. Only 1/6 (Type 5, partially) is in the 8-change plan.** The 6-type taxonomy is the most systematic contribution from the user-insight reports, and only Type 5 gets any plan coverage.

**File 19 proposes:** Extend ME-023 to include cross-element contradiction check (Type 6). This would close the taxonomy gap but ME-023 itself is not in the plan.

### 2D. User-Specific Insights Lacking Enrichment Coverage

| Item ID | Type | Description | Source | Tier | In 8-Change Plan? |
|---------|------|-------------|--------|------|-------------------|
| UI-05 | GAP | Level 2 protocol: dedicated "User" auditor with zero analytical questions, only experiential instruction | inattentional-blindness-audit.md | COULD | NO |
| UI-06 | GAP | Level 3 protocol: split PA into Phase A (experiential) + Phase B (analytical) | inattentional-blindness-audit.md | COULD | NO |
| UI-07 | GAP | Comprehension test: can an agent answer questions ABOUT the content after reading? | experiential-pa-analysis.md | COULD | NO |
| UI-08 | PARTIAL | D-01: TOC links — ME-021 detects absence of navigation but not functionality of existing navigation. Screenshots can't test links. | inattentional-blindness-audit.md | SHOULD | NO |
| UI-09 | PARTIAL | D-09: "8" decorative numeral conveys no information — ME-022 targets charts/diagrams, not standalone decorative numerals. | inattentional-blindness-audit.md | COULD | NO |
| UI-10 | GAP | GR-64 (Touch Target Size, WCAG 2.5.5, >= 44x44px) — proposed in gate-usability-audit manifest but no ME entry | gate-usability-audit.md | COULD | NO |
| UI-11 | GAP | GR-63 (Image/SVG Load Verification) — proposed in gate-usability-audit manifest but no ME entry | gate-usability-audit.md | COULD | NO |

---

## 3. FILE 20 AUDIT: PARADIGM & CROSS-RUN COMPLETENESS

### 3A. Zone 4 Monotony — Why NOT CAPTURED and What Would Fix It

**Finding:** Zone 4 monotony persists across runs (VA had identical principle blocks; V3 has plain prose without components). This is a recurring cross-run pattern (CR-5/CR-15 in File 20).

**Why not captured:** No enrichment addresses zone-level visual monotony. ME-048 ("one unique visual element per zone") partially addresses it from the builder side, but there is no PA-side detection question that asks "is any zone visually monotonous?"

**File 20 proposes:** ME-NEW-02: Extend PA-50 or add new question: "Is any zone visually monotonous? A zone is monotonous if it contains only prose paragraphs with no structural variety (no grids, tables, collapsibles, callouts, or distinct components). Flag any zone with >3 consecutive paragraphs without a visual break."

**In 8-change plan?** NO. Neither ME-048 (builder-side) nor the proposed PA question are in the plan.

### 3B. ALL 7 Cross-Run Items NOT CAPTURED

| Item ID | Type | Description | Source | Actionable? | In 8-Change Plan? |
|---------|------|-------------|--------|-------------|-------------------|
| CR-3 | GAP | Zone transitions at exactly 16 RGB delta (floor-hugging). BV-02 catches <15 but no mechanism for "technically passing but perceptually marginal." | cross-run-comparison | YES — ME-NEW-01 proposed (BV-02 "comfortable margin" advisory, target >=25 not just >=15) | NO |
| CR-5/CR-15 | GAP | Zone 4 monotony persists across runs in different forms. Structural blind spot. | cross-run-comparison | YES — ME-NEW-02 proposed (zone monotony PA question) | NO |
| CR-6 | GAP | Loss of decision flow diagram from VA. | cross-run-comparison | NO — creative decision, not pipeline defect. | NO |
| CR-7 | GAP | Loss of communication flow diagram from VA. | cross-run-comparison | NO — same as CR-6. | NO |
| CR-8 | GAP | Loss of code snippet headers (dark header bar) from VA. | cross-run-comparison | NO — creative decision. | NO |
| CR-9 | GAP | Print styles regression (V3 has none). | cross-run-comparison | NO — too minor for enrichment. | NO |
| CR-10 | GAP | Loss of drop cap mechanism from VA. | cross-run-comparison | NO — creative decision. | NO |
| CR-16 | GAP | Responsive design repeats "scale not reorganize" pattern across all runs. Pipeline has no mechanism to evaluate responsive QUALITY. | cross-run-comparison | YES — ME-NEW-03 proposed (responsive reorganization evaluation) | NO |

**Of 7 NOT CAPTURED items: 3 are actionable (CR-3, CR-5/15, CR-16). 4 are creative decisions (correctly not enrichments). 0 are in the 8-change plan.**

### 3C. ARIA Regression Finding — Is It Fully Captured?

**Finding:** V3 has 7 ARIA attributes vs VA's 19 (-63%).

**Enrichment:** ME-016 (ARIA requirement, target >=15).

**In 8-change plan?** NO. ME-016 is deferred.

**Assessment:** ME-016 CAPTURES the finding (sets >=15 floor). But ME-016 is NOT in the 8-change plan. The ARIA regression — the single biggest accessibility regression across runs — has no representation in the implementation plan.

### 3D. ME-NEW-01 (BV-02 "Comfortable Margin" Advisory) — Full Details

**Source:** CR-3 (two zone transitions at exactly 16 RGB delta, which is floor-hugging)

**Proposed change:** Add to builder recipe or brief template: "Target zone background deltas of >=25 RGB for primary transitions. The >=15 threshold is the MINIMUM, not the target. Transitions at 15-20 are perceptually marginal. Design for comfortable visibility, not threshold compliance."

**Severity:** CONSIDER

**In 8-change plan?** NO.

**Assessment:** This is a paradigm-aligned enrichment (shifts builder mindset from "pass the gate" to "design for perception"). Low line cost (+3 lines to builder recipe). High leverage per line. SHOULD be considered for inclusion.

### 3E. Additional Proposed Enrichments from File 20

| ID | Description | Severity | In 8-Change Plan? |
|----|-------------|----------|-------------------|
| ME-NEW-01 | BV-02 "comfortable margin" advisory (target >=25 RGB) | CONSIDER | NO |
| ME-NEW-02 | Zone monotony detection PA question | MINOR | NO |
| ME-NEW-03 | Responsive reorganization evaluation (PA-46 extension) | CONSIDER | NO |
| ME-NEW-04 | Conditional REFINE cycle (re-evaluate E-009 AFTER Tier 1 implemented) | BLOCKING (conditional) | NO |
| ME-NEW-05 | Specification retirement protocol (net growth <=0 lines, 4,000-line threshold) | SIGNIFICANT | NO |
| ME-NEW-06 | Expand exemplar set to 3-5 pages with immersion framing | CONSIDER | NO |
| ME-NEW-07 | Timestamp population enforcement in tracker template | MINOR | NO |
| ME-NEW-08 | Simplify file naming convention to match actual practice | MINOR | NO |
| ME-NEW-09 | COMPOSED-mode brief budget (165-300 lines) | MINOR | NO |
| ME-NEW-10 | Extend ME-016 with full accessibility checklist (keyboard, alt text, color, skip-link) | SIGNIFICANT | NO |
| ME-NEW-11 | Page length consideration + navigation requirement for >15,000px pages | CONSIDER | NO |
| ME-NEW-12 | Weaver corrected screenshots must >= auditor screenshot count (evidence symmetry) | MINOR | NO |
| ME-NEW-13 | Accessibility item added to experiential pass (ME-001 extension) | MINOR | NO |

**13 new enrichments proposed. 0 in the 8-change plan.**

---

## 4. FILE 21 AUDIT: MASTER SYNTHESIS 8-CHANGE PLAN

### 4A. The 57→8 Reduction: ALL 49 Cut Items

The master synthesis cut 49 enrichments from the implementation plan. Here is every cut item with justification assessment.

#### CUT CATEGORY 1: New Gates (3 items)

| ME-ID | Description | Reason Given | Cut Justified? |
|-------|-------------|-------------|----------------|
| ME-003 | GR-60 WCAG contrast gate | Gate-runner at 68% compliance, requires Wave 0 subtraction first, WCAG vs palette conflict unresolved | **JUSTIFIED** — the palette conflict (soul-mandated accent colors at 3:1-4.1:1) is a genuine blocker. But this is the #3 ranked enrichment and BLOCKING severity. Cut is SAFE but represents a significant loss. |
| ME-014 | GR-61 minimum font size gate | Gate-runner capacity, requires subtraction | **JUSTIFIED** — downstream of ME-003. |
| ME-040 | GR-62 text overflow gate | Gate-runner capacity, requires subtraction | **JUSTIFIED** — lowest priority of the three new gates. |

**Assessment: All 3 cuts justified by gate-runner capacity constraint.** However, ME-003 is BLOCKING severity and the #3 enrichment. The master synthesis acknowledges this by deferring to "Wave 2 after validation run." The risk: if the validation run succeeds, the team may never return for Wave 2.

#### CUT CATEGORY 2: Gate Severity Restructure (7 items)

| ME-ID | Description | Reason Given | Cut Justified? |
|-------|-------------|-------------|----------------|
| ME-024 | GR-07 → RECOMMENDED | Low leverage individually | **JUSTIFIED** — tier moves don't change detection, just severity. |
| ME-025 | GR-12 → RECOMMENDED | Same | **JUSTIFIED** |
| ME-026 | GR-43 → RECOMMENDED | Same | **JUSTIFIED** |
| ME-027 | GR-19 → ADVISORY | Same | **JUSTIFIED** |
| ME-028 | GR-21/GR-22 threshold adjust | Same | **JUSTIFIED** |
| ME-029 | GR-17 list item threshold | Same | **JUSTIFIED** |
| ME-030 | GR-48/GR-49 viewport namespacing | Same | **JUSTIFIED** — but this is a FIX for a real conflict (meta-gates contradict on every multi-viewport run). Low risk if cut, but real bug persists. |

**Assessment: All 7 cuts justified. ME-030 is the most regrettable cut — it fixes a real multi-viewport bug that will cause confusing gate output.**

#### CUT CATEGORY 3: Tracking/Documentation (5 items)

| ME-ID | Description | Reason Given | Cut Justified? |
|-------|-------------|-------------|----------------|
| ME-042 | MANIFEST line count updates | Zero impact on output quality | **JUSTIFIED** |
| ME-043 | Execution tracker fields | Zero impact on output quality | **JUSTIFIED** |
| ME-044 | Document experiential pass protocol | Zero impact on output quality | **JUSTIFIED** — but loses the gorilla experiment documentation |
| ME-045 | Context budget awareness | Zero impact on output quality | **JUSTIFIED** |
| ME-046 | Screenshot correction protocol | Zero impact on output quality | **PARTIALLY JUSTIFIED** — ME-046 provides correction protocol for ME-006 (which IS in the plan). Without ME-046, ME-006 detects bad screenshots but has no standard recovery procedure. |

**Assessment: ME-046 should arguably be IN the plan as a companion to ME-006.** The synthesis includes ME-006 (screenshot validation) but not ME-046 (what to do when validation fails). This is a gap — detection without defined recovery.

#### CUT CATEGORY 4: Reservoir/CONSIDER Items (11 items)

| ME-ID | Description | Reason Given | Cut Justified? |
|-------|-------------|-------------|----------------|
| ME-047 | 3 background registers | Lowest confidence, old reservoir | **JUSTIFIED** |
| ME-048 | One unique element per zone | Same | **JUSTIFIED** |
| ME-049 | 2-3 dark moments | Same | **JUSTIFIED** |
| ME-050 | Spacing compression range | Same | **JUSTIFIED** |
| ME-051 | Experiential PA question replacements | N/A — ME-051 IS in the plan (bundled with ME-037) | **N/A — this is INCLUDED, not cut** |
| ME-052 | Audience description | Lowest confidence | **JUSTIFIED** |
| ME-053 | Container width exceptions | Lowest confidence, contradicts NON-NEGOTIABLE | **JUSTIFIED** |
| ME-054 | Remove dead CSS | Should be safe subtraction | **PARTIALLY JUSTIFIED** — this is a SUBTRACTION that reduces complexity. If anything, it should be in the plan. |
| ME-055 | Anti-Goodhart question | PA budget consumed | **JUSTIFIED** |
| ME-056 | CSS pattern library | Requires new file | **JUSTIFIED** |
| ME-057 | Weaver emotional arc | Low impact | **JUSTIFIED** |

**Assessment: ME-054 (dead CSS removal, -13 lines) is a subtraction that REDUCES pipeline complexity. It costs nothing and aligns with the fresh-eyes "reduce, don't add" principle. Should be in the plan.**

#### CUT CATEGORY 5: Phase 4 Fix Application (1 item)

| ME-ID | Description | Reason Given | Cut Justified? |
|-------|-------------|-------------|----------------|
| ME-017 | Phase 4 fix application protocol | Architectural change requiring own validation cycle | **JUSTIFIED** — File 13 assessed ME-017 as INADEQUATE mitigation (architectural change disguised as enrichment). Correctly deferred. |

#### CUT CATEGORY 6: PA Enrichments (11 items)

| ME-ID | Description | Reason Given | Cut Justified? |
|-------|-------------|-------------|----------------|
| ME-015 | Data corruption escalation protocol | Over PA budget | **PARTIALLY JUSTIFIED** — ME-015 is the auditor-facing companion to ME-006 (in plan). Without it, auditors who encounter corrupted screenshots have no protocol. |
| ME-021 | Navigation usability PA question | Over PA budget | **JUSTIFIED** but loses Type 3 (Navigation Desert) detection |
| ME-022 | Information extraction PA question | Over PA budget | **JUSTIFIED** but loses Type 2 (Communicative Failure) detection |
| ME-023 | Content promise vs delivery PA question | Over PA budget | **JUSTIFIED** but loses Type 4 (Content-Promise Mismatch) detection |
| ME-031 | False affordance scan | Over PA budget | **JUSTIFIED** but loses Type 1 (False Affordance) detection |
| ME-032 | Pipeline-introspection markers | Over PA budget | **JUSTIFIED** — metadata only, low impact |
| ME-033 | Void question deduplication | Over PA budget | **JUSTIFIED** — efficiency improvement only |
| ME-034 | Defect-bypass cross-viewport | Over PA budget | **JUSTIFIED** — efficiency improvement only |
| ME-035 | Footer/header contrast note | Over PA budget | **JUSTIFIED** — 1 line, could be added trivially |
| ME-036 | Horizontal scroll element-level | Over PA budget | **JUSTIFIED** — 1 line, could be added trivially |
| ME-055 | Anti-Goodhart question | Over PA budget | **JUSTIFIED** |

**Assessment: ME-015 is the most regrettable PA cut.** It's the auditor-facing complement to ME-006. Without it, the plan adds screenshot validation (detects bad screenshots) but doesn't tell auditors what to do when they encounter suspected corruption. ME-035 and ME-036 are each +1 line — virtually free to include.

#### CUT CATEGORY 7: Gate Modifications (4 items)

| ME-ID | Description | Reason Given | Cut Justified? |
|-------|-------------|-------------|----------------|
| ME-010 | GR-05 split (opacity filter) | Low individual impact, doesn't change WHAT pipeline checks | **JUSTIFIED** — improves accuracy but not detection scope |
| ME-011 | GR-06 rendered font check | Same | **JUSTIFIED** |
| ME-012 | GR-14 scoping fix | Same | **JUSTIFIED** — but GR-14 has 13 false positives that persist |
| ME-013 | GR-09 tolerance fix | Same | **JUSTIFIED** — but GR-09 tolerance bands were a FIX-FAILED item (FF-01) |

**Assessment: ME-012 and ME-013 fix KNOWN BROKEN gates (13 false positives and failed tolerance bands respectively). Cutting them means known bugs persist through the validation run, potentially creating noise that obscures the impact of the 8 changes.**

### 4B. Items from Files 18-20 That Should RESTORE Cut Items

Cross-referencing Files 18-20 gaps against the 49 cut items:

| Gap/Finding | Source File | Suggests Restoring | Strength of Case |
|-------------|------------|-------------------|-----------------|
| ARIA regression (-63%) uncovered | File 20 (CR-1) | ME-016 (ARIA requirement) | STRONG — single biggest accessibility regression across runs, +8 lines to builder recipe |
| Type 6 failure taxonomy gap | File 19 (Section 2C) | Extend ME-023 (content promise) | MODERATE — would also cover Types 1-4 if ME-021/022/023/031 restored |
| Zone 4 monotony (CR-5/15) | File 20 (Section 3A) | ME-048 (unique element per zone) | MODERATE — +3 lines, CONSIDER tier, addresses recurring cross-run issue |
| ME-006 without ME-046 = detection without recovery | File 18, File 20 | ME-046 (screenshot correction protocol) | STRONG — ME-006 is in the plan but its recovery companion is cut |
| ME-006 without ME-015 = validation without auditor protocol | File 19, File 20 | ME-015 (data corruption escalation) | STRONG — same logic: auditors need to know what to do |
| Known broken gates persist | File 18 (P-02) | ME-012 (GR-14 fix), ME-013 (GR-09 fix) | MODERATE — noise from 13 false positives may confuse validation run |
| Dead CSS not removed | File 18 analysis | ME-054 (remove dead CSS, -13 lines) | STRONG — subtraction, costs nothing, reduces complexity |
| ME-035 and ME-036 = 2 total lines | File 18 (P-35, P-36) | ME-035, ME-036 (PA question extensions) | STRONG — +2 total lines, virtually free |

**Strongest cases for restoration:** ME-016 (+8 lines, ARIA regression), ME-046 (+5 lines, recovery for ME-006), ME-054 (-13 lines, subtraction), ME-035/ME-036 (+2 lines combined).

### 4C. Does Implementation Order Account for File 13 Dependencies?

File 13 identified these binding constraints:

| Dependency | File 13 Specification | File 21 Implementation Order | Satisfied? |
|-----------|----------------------|------------------------------|-----------|
| Gate-runner net-zero | Subtraction MUST precede any gate addition | File 21 has no gate additions (ME-003/014/040 deferred) | **YES** (by omission — no gates added, so constraint not tested) |
| ME-037 + ME-051 atomic | PA retirements and replacements in one operation | Step 4a + 4b marked "MUST be one operation" | **YES** |
| ME-010 before ME-003 | Split establishes opacity-filtering pattern GR-60 reuses | Both deferred, so N/A | **YES** (by omission) |
| ME-001 before ME-009 | Experiential pass must exist before aggregation thresholds | ME-001 = Step 1, ME-009 not explicitly listed but subsumed by ME-001 | **PARTIAL** — ME-009 (threshold table) is referenced in ME-001's spec but not listed as a separate step |
| ME-006 before ME-015 | Screenshot validation must exist before data corruption escalation | ME-006 = Step 3b, ME-015 deferred | **YES** (by omission — ME-015 cut) |
| Brief-facing content after capacity verified | Builder recipe must stay under 1,000 lines | ME-004 and ME-039 in Steps 1c and 1d; no capacity verification mentioned | **NO** — File 21 does not include capacity verification after builder recipe changes |
| All tier reclassifications after GR-48 understood | Tier moves affect meta-gate | All deferred | **YES** (by omission) |

**Assessment:** File 21 satisfies dependencies mostly by omission (deferred items don't need ordering). The only actual dependency in the plan is ME-037+ME-051 atomicity, which is correctly handled. The MISSING dependency check is builder recipe capacity verification after Steps 1c/1d.

Also, File 13's 5-wave plan is fundamentally different from File 21's single-wave plan. File 13 proposed: Wave 0 (subtraction) → Wave 1 (8 Tier 1 items) → Wave 2 (12 gate items) → Wave 3 (12 PA items) → Wave 4 (9 recipe/docs items). File 21 collapses this into a single 8-change wave. This is **intentional** per the fresh-eyes prescription but means File 13's careful capacity management (running total staying under 240 lines) is replaced by a simpler "these 8 fit at +115 lines" calculation.

---

## 5. CROSS-FILE SYNTHESIS: WHAT THE 8-CHANGE PLAN MISSES

### 5A. Tiered Summary of All Gaps

#### MUST-ADDRESS (Quality gap if not addressed)

| Item | Source | Description | Lines | Why MUST |
|------|--------|-------------|-------|----------|
| ME-003 (GR-60) deferred | File 18, 19, 21 | WCAG text contrast gate — the #3 enrichment, BLOCKING severity. THE glaring hole: 31 gates and none checks text readability. | +70 (gate-runner) | **The chart illegibility that triggered the entire analysis has no programmatic prevention in the plan** |
| ME-016 deferred | File 20 (CR-1) | ARIA regression -63%. V3 = 7, target >=15. Single biggest accessibility regression. | +8 (builder recipe) | Cost-free, catches the most measurable regression |
| ME-046 not paired with ME-006 | File 18, 21 | ME-006 detects bad screenshots. ME-046 defines recovery. Detection without recovery = incomplete protocol. | +5 (MANIFEST) | ME-006 will fire and operators won't know what to do |
| ME-009 not explicit | File 21 | Threshold table (>=3/9 CONFIRMED) — enables the experiential pass (ME-001) to be ACTIONABLE. Without aggregation rules, 9 experiential reports create chaos for the Weaver. | +15 (pa-deployment + pa-weaver) | ME-001 is hollow without ME-009 |

#### SHOULD-ADDRESS (Improvement opportunity)

| Item | Source | Description | Lines |
|------|--------|-------------|-------|
| ME-015 not paired with ME-006 | File 19, 20 | Auditor-facing data quality protocol. ME-006 validates before deployment but doesn't tell auditors what to do if they STILL encounter corruption. | +20 |
| ME-054 (dead CSS removal) | File 21 cut analysis | Pure subtraction. -13 lines from components.css/tokens.css. Reduces complexity for free. | -13 |
| ME-035 + ME-036 | File 18 (P-35, P-36) | Footer/header contrast note + element-level scroll check. +2 total lines. Virtually free PA improvements. | +2 |
| Type 6 failure taxonomy gap | File 19 | Cross-element contradiction is the only uncovered failure type. Extend ME-023 when it's eventually added. | +0 (extension of existing) |
| Zone 4 monotony (CR-5/15) | File 20 | Recurring cross-run issue with no detection mechanism. | +3-5 (PA question) |
| ME-NEW-01 (comfortable margin) | File 20 | Target >=25 RGB not just >=15. Shifts mindset from compliance to perception. | +3 |
| ME-012 + ME-013 (broken gates) | File 21 cut analysis | GR-14 has 13 false positives, GR-09 tolerance bands failed. Known bugs persist. | +5 combined |

#### COULD-ADDRESS (Nice to have)

| Item | Source | Description |
|------|--------|-------------|
| ME-NEW-02 through ME-NEW-13 | File 20 | 13 proposed new enrichments from paradigm/cross-run analysis |
| GAP-03 (metaphor enforcement) | File 18 | No enrichment strengthens metaphor enforcement |
| GAP-04 through GAP-07 | File 18 | Paradigm-level gaps (feedback loop, taste metric, LLM vision, human review) |
| UI-05, UI-06, UI-07 | File 19 | Level 2/3 PA protocols, comprehension test |
| CR-6/7/8/10 (component losses) | File 20 | Creative decisions, correctly not enrichments |

### 5B. The Biggest Risk in the 8-Change Plan

**The plan adds experiential detection (ME-001) without programmatic prevention (ME-003).** The experiential pass will FIND illegible text. But without GR-60 (WCAG contrast gate), there's no programmatic check that prevents it from being built in the first place. The pipeline will:

1. Builder creates illegible chart text (no prevention — ME-003 deferred)
2. Gate runner runs 31 gates, none catch it (no WCAG gate)
3. 9 auditors run experiential pass, some catch it (ME-001 in plan)
4. Weaver prioritizes the finding (ME-002 in plan)
5. Orchestrator applies fix... but ME-017 (Phase 4 fix application) is deferred

So the plan improves DETECTION of the problem but not PREVENTION or RESOLUTION. The "prevent > detect" principle identified in File 18 (P-07) is violated by the plan itself.

---

## 6. DEPENDENCY CHECK: FILE 13 VS FILE 21

### 6A. What File 13 Says the 8 Changes Need

File 13 identified these specific requirements for the enrichments that ARE in the plan:

| Plan Item | File 13 Requirement | File 21 Addresses? |
|-----------|--------------------|--------------------|
| ME-001 (experiential pass) | Safe, +22 lines to pa-deployment.md | YES — Step 1a |
| ME-002 (weaver priority) | CAUTION — modifies existing priority hierarchy, verify no gate thresholds leak (M-04) | PARTIAL — Step 1b listed but M-04 verification not mentioned |
| ME-004 (builder Q0) | Safe, use recipe verbs not checklist verbs (M-11, M-06) | PARTIAL — Step 1c listed, verb check in Step 5 |
| ME-005 (verdict logic) | CAUTION — must verify verdict logic synchronized across 3 locations (gate-manifest.json L55-59, MANIFEST L275-285, gate-runner-core.js L752-778) | PARTIAL — Step 3a listed, 3-location sync mentioned in pre-req but not in steps |
| ME-006 (screenshot validation) | Safe, expanded CSS override replaces existing | YES — Step 3b |
| ME-007 (GR-44 fix) | CAUTION — preserve existing sub-check A, add sub-check B. Maintain result schema. | PARTIAL — Step 2a listed but schema preservation not mentioned |
| ME-037+ME-051 (PA swap) | CAUTION — 5-location reverse checklist for retirements, 5-location forward for additions. MUST be atomic. | YES — Step 4a+4b marked as "one operation" |
| ME-039 (boilerplate) | Safe | YES — Step 1d |

**Assessment:** File 21 lists the implementation steps but omits several of File 13's specific verification requirements:
- No mention of M-04 gate threshold leak check for ME-002
- No mention of result schema preservation for ME-007
- No mention of 3-location verdict sync verification for ME-005
- Builder recipe capacity verification missing

These are PROCESS gaps, not content gaps. They could be addressed by adding a pre-flight checklist referencing File 13's anti-loss interaction matrix.

### 6B. File 13's Wave 0 (Subtraction) — Is It Needed for the 8 Changes?

File 13 prescribed Wave 0 (subtract ~170 lines from gate-runner-core.js) before ANY additions. But the 8-change plan only adds +10 lines to gate-runner-core.js (ME-007 GR-44 fix). ME-005 verdict logic adds ~15 lines to gate-runner-core.js.

**Total gate-runner addition from 8-change plan: +25 lines.**

Gate-runner is at 68% compliance with net-zero mandatory. +25 lines may or may not violate the net-zero constraint depending on how strictly "net-zero" is interpreted.

**Assessment:** File 21 implicitly assumes +25 lines is tolerable without subtraction. File 13 says net-zero is MANDATORY. This is a minor inconsistency — +25 lines to a ~1,437-line file is 1.7%, well within tolerance, but technically violates the stated constraint.

---

## 7. FINAL VERDICT

### 7A. Completeness Scorecard

| File | Total Items Extracted | In 8-Change Plan? | Coverage |
|------|----------------------|-------------------|----------|
| File 18 (gap check) | 18 MISSING + 34 PARTIAL + 8 NEW = 60 | 0 MISSING, 6+9 PARTIAL, 0 NEW | **0% of gaps, 25% of partials** |
| File 19 (user insight) | 4 nuance losses + 7 gaps + 1 taxonomy gap = 12 | 3 partially via ME-001/002 | **25% partial coverage** |
| File 20 (paradigm/cross-run) | 7 NOT CAPTURED + 13 NEW = 20 | 0 | **0%** |
| File 21 (master synthesis) | 49 cut items | N/A (this IS the plan) | N/A |
| **TOTAL unique gaps** | **~75 distinct items** | **~12 partially addressed** | **~16% partial coverage** |

### 7B. Does the Master Synthesis Actually Cover Everything?

**NO.** The 8-change plan covers 8 of 57 enrichments (14%) and 0 of the 21 newly proposed enrichments from Files 18-20. However, this is BY DESIGN — the master synthesis deliberately implements "implement 5, run, measure, decide" (fresh-eyes prescription).

The question is whether the 8 chosen changes are the RIGHT 8. Assessment:

**Correctly included (6/8):**
- ME-001 (experiential pass) — unanimous agreement
- ME-002 (weaver priority) — directly addresses root cause
- ME-004 (builder Q0) — prevention at source
- ME-007 (GR-44) — fixes known false negative
- ME-039 (boilerplate) — prevents known gate failures
- ME-037+ME-051 (PA swap) — balances question portfolio

**Questionable inclusion (1/8):**
- ME-005 (verdict logic) — CAUTION rating, complex 3-location sync, fixes a problem that matters only if builds FAIL identity gates (which they might not with ME-039 boilerplate preventing failures). Could be swapped for ME-016 (ARIA, simpler, addresses measured regression).

**Missing from plan that Files 18-20 strongly suggest:**
1. ME-009 (experiential pass threshold table) — makes ME-001 actionable (+15 lines)
2. ME-046 (screenshot correction protocol) — makes ME-006 complete (+5 lines)
3. ME-016 (ARIA accessibility) — addresses measured -63% regression (+8 lines)
4. ME-054 (dead CSS removal) — pure subtraction (-13 lines)
5. ME-035 + ME-036 (PA question extensions) — near-free (+2 lines)

**Total if added: +17 net lines (28 added - 13 removed). Plan goes from +115 to +132 lines. Still well within 240-line budget.**

### 7C. Recommendation

The 8-change plan is a defensible starting point that correctly prioritizes the highest-convergence items. But it has 5 specific gaps that Files 18-20 collectively identify:

1. **Add ME-009** — ME-001 without ME-009 creates 9 unstructured experiential reports with no aggregation rules. The Weaver will be overwhelmed.
2. **Add ME-046** — ME-006 without ME-046 is detection without recovery. When the screenshot gate fires, what's the standard procedure?
3. **Add ME-016** — +8 lines, addresses the single most measurable regression (ARIA -63%). Nearly free.
4. **Add ME-054** — -13 lines. Subtraction. Aligns with the plan's own philosophy.
5. **Add ME-035 + ME-036** — +2 lines total. Extending existing PA questions costs almost nothing.

These 5 additions bring the plan from 8 to 13 changes, from +115 to +132 net lines (still 108 lines under budget), and close the most serious gaps identified by Files 18-20.

The remaining ~62 gaps are correctly deferred to post-validation-run decision-making.

---

*Audit complete. 4 files analyzed (2,577 combined lines). 75 distinct gaps inventoried. 8-change plan covers ~16% partially. 5 specific additions recommended (+17 net lines). No BLOCKING gaps found in the 8-change plan itself, but ME-003 (WCAG contrast gate) deferral means the chart illegibility that triggered the entire analysis has no programmatic prevention.*

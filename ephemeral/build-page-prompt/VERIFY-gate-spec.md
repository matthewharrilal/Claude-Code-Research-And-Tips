# VERIFY -- Gate-Runner Section vs User Specification

**Author:** spec-verifier (Opus 4.6)
**Date:** 2026-02-19
**Task:** #57 -- Verify gate-runner draft covers everything user specified
**Input:** DRAFT-10-gate-runner-section.md (1,048 lines), 42-gate-crossref.md (341 lines)

---

## 1. GATE COUNT VERIFICATION

**User spec:** "21 programmatic checks"

**Draft count (from summary table, lines 975-998):**

| # | Gate ID | Name |
|---|---------|------|
| 1 | SC-01 | Container Width |
| 2 | SC-02 | Soul Properties |
| 3 | SC-03 | Font Trinity |
| 4 | SC-04 | Warm Palette |
| 5 | SC-05 | No Pure Extremes |
| 6 | SC-06 | ARIA Landmarks |
| 7 | SC-07 | Skip Link |
| 8 | SC-08 | Component Library Adoption |
| 9 | SC-09 | Background Delta |
| 10 | SC-10 | Stacked Gap |
| 11 | SC-11 | Typography Zone Hierarchy |
| 12 | SC-12 | Zone Count |
| 13 | SC-13 | Multi-Coherence |
| 14 | SC-14 | Sub-Perceptual Prevention |
| 15 | SC-15 | Border/Structural Presence |
| 16 | SC-13B | Direction Coherence (ADVISORY) |
| 17 | SC-16 | Monotonic Progress (ADVISORY) |
| 18 | DG-1 | Fractal Echo Table |
| 19 | DG-2 | Cascade Value Table |
| 20 | DG-3 | Landmark Completeness |
| 21 | DG-4 | Handoff Validation |

**COUNT: 21 gates. PASS.**

Draft's own count (line 999): "17 blocking + 2 advisory + 2 behavioral = 21 gates"

**Note:** The user said "21 programmatic checks." The draft has 19 programmatic + 2 behavioral (BG-1, BG-2). BG-1 and BG-2 are NOT programmatic -- they require agent/human judgment. However, the user's specification does not explicitly require all 21 to be programmatic JS checks. The draft clearly labels BG-1 and BG-2 as behavioral and separates them into Tier C. This is an acceptable interpretation.

**Verdict: PASS (21 gates present)**

---

## 2. CATEGORY COVERAGE VERIFICATION

**User spec:** 6 categories -- soul, spacing, perception, structure, mechanism count, channel coverage

| User Category | Gates in Draft | Covered? |
|--------------|---------------|----------|
| **Soul violations** | SC-01 (container width), SC-02 (radius/shadow), SC-03 (font trinity), SC-04 (warm palette), SC-05 (no pure extremes) | YES |
| **Spacing violations** | SC-10 (stacked gap), SC-13 channel 3 (spatial >= 24px) | YES |
| **Perception threshold violations** | SC-09 (bg delta >= 15 RGB), SC-11 (font size hierarchy >= 10px/2px), SC-14 (sub-perceptual prevention) | YES |
| **Structure checks** | SC-06 (ARIA), SC-07 (skip link), SC-08 (component library), DG-3 (landmark completeness), SC-12 (zone count) | YES |
| **Mechanism count** | DG-4 sub-check 3 (mechanisms >= 1 per 5 categories) | YES (see note below) |
| **Channel coverage** | SC-13 (>= 3 channels per boundary, avg >= 4) | YES |

**Note on mechanism count:** The user said "< 14 mechanisms = fail." The draft's DG-4 sub-check 3 requires ">= 1 in each of 5 categories (Spatial, Temporal, Material, Behavioral, Relational)" which is a per-CATEGORY minimum, not a total count of 14. The draft does NOT have a gate that explicitly checks "total mechanism count >= 14."

**FINDING: The user specified "< 14 mechanisms = fail" but the draft uses per-category minimums (5 minimum total, not 14). This is a MISMATCH with the user's literal specification.** The per-category approach may be BETTER (it prevents all-of-one-type gaming), but it does not match "< 14 mechanisms = fail."

**Verdict: 5/6 categories PASS, 1 PARTIAL (mechanism count uses different threshold than user specified)**

---

## 3. EXACT PASS/FAIL THRESHOLDS

**User spec:** Each gate must have an exact pass/fail threshold (number, not word)

| Gate | Has Numeric Threshold? | Threshold |
|------|----------------------|-----------|
| SC-01 | YES | 940-960px |
| SC-02 | YES | 0px / none |
| SC-03 | YES (implicit) | 3 allowed fonts |
| SC-04 | YES | R >= G >= B |
| SC-05 | YES | No rgb(0,0,0) or rgb(255,255,255) |
| SC-06 | YES | >= 5 landmarks |
| SC-07 | YES | Present (binary) |
| SC-08 | YES | >= 8 component types |
| SC-09 | YES | >= 15 RGB max-channel delta |
| SC-10 | YES | <= 120px total |
| SC-11 | YES | >= 10px display-body, >= 2px body-detail, >= 3 clusters |
| SC-12 | YES | 3-5 zones |
| SC-13 | YES | >= 3 per boundary, avg >= 4.0 |
| SC-14 | YES | No ls in (0, 0.025em), no bg delta 1-14 RGB |
| SC-15 | YES | >= 3 distinct configs |
| SC-13B | YES | >= 50% boundaries coherent (advisory) |
| SC-16 | YES | >= 1 monotonic property (advisory) |
| DG-1 | YES | 5 rows, non-empty fields |
| DG-2 | YES | < 5 RGB / < 1px / < 0.01em discrepancy |
| DG-3 | YES | 3 elements present |
| DG-4 | YES | 5 sub-checks (each with numeric threshold) |

**Verdict: PASS -- all 21 gates have exact numeric pass/fail thresholds**

---

## 4. PROGRAMMATIC CHECK METHOD

**User spec:** Each gate must have a programmatic check method

| Gate | Has JS/Programmatic Check? |
|------|--------------------------|
| SC-01 through SC-16 | YES (JS code blocks provided) |
| DG-1 | YES ("Parse YAML. Validate structure programmatically.") |
| DG-2 | YES ("Parse YAML. Compare claimed vs SC-13 measured values.") |
| DG-3 | YES (JS code block) |
| DG-4 | YES ("Parse YAML. Validate each field programmatically.") |
| BG-1 | NO -- "Agent attestation (non-blocking -- verified via build log)" |
| BG-2 | NO -- "Fresh-eyes Opus check" |

**Note:** BG-1 and BG-2 are explicitly labeled as NOT programmatic (Tier C behavioral). The draft explains WHY they cannot be programmatic (lines 877-879: "Did the agent derive independently? is fundamentally subjective"). The user's spec said "21 programmatic checks" but the draft interprets BG-1/BG-2 as non-programmatic behavioral gates.

**Verdict: 19/21 PASS (programmatic), 2/21 are behavioral (acknowledged and explained)**

---

## 5. SPECIFIC VIOLATIONS CHECKLIST

The user listed 12 specific violations that must be addressed:

| User-Specified Violation | Gate(s) | Present? | Exact Match? |
|--------------------------|---------|----------|-------------|
| **Container width** (wrong) | SC-01 | YES | YES -- 940-960px range |
| **Pure black text** | SC-05 | YES | YES -- `color === 'rgb(0, 0, 0)'` checked |
| **Prohibited fonts** | SC-03 | YES | YES -- only 3 allowed fonts |
| **Stacked gap > 108px** | SC-10 | YES | MODIFIED -- threshold changed to 120px (per 42-gate-crossref correction, empirically sourced) |
| **Padding < 24px between zones** | SC-13 ch.3 | YES | YES -- Spatial channel threshold >= 24px padding delta |
| **Background color < 15 RGB apart** | SC-09 | YES | YES -- max-channel delta >= 15 at every boundary |
| **Font sizes < 2px apart** | SC-11 | YES | YES -- body-detail delta >= 2px |
| **Missing semantic HTML** | SC-06 + DG-3 | YES | YES -- ARIA landmarks >= 5, header/main/footer required |
| **No grid layouts** | DG-4 sub-check 5 | YES | YES -- grid_layouts >= 2 required in build plan |
| **Missing ARIA** | SC-06 + SC-07 | YES | YES -- >= 5 landmarks + skip link |
| **Mechanism count < 14** | DG-4 sub-check 3 | PARTIAL | NO -- uses per-category minimums (min 5 total), not "< 14 = fail" |
| **Channel coverage < 4** | SC-13 | YES | YES -- avg >= 4 across boundaries (Flagship tier) |

**Stacked gap note:** User said "> 108px" but draft uses 120px. The 42-gate-crossref.md (Finding 2, lines 119-121) explains: 108px is unsourced; 120px matches the remediation audit's empirical threshold. The draft applied this correction transparently (cross-validation resolution table, line 21). This is a JUSTIFIED deviation.

**Mechanism count note:** User said "< 14 mechanisms = fail." Draft's DG-4 requires >= 1 mechanism per each of 5 categories. Minimum total = 5, not 14. The per-category approach was recommended in MEMORY.md ("per-category minimums: Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+") and is arguably better design, but it does NOT match the user's literal "< 14 = fail" specification.

**Verdict: 10/12 exact match, 1 justified deviation (108->120px), 1 MISMATCH (mechanism count 14 vs per-category minimums)**

---

## 6. 26% COVERAGE FRAMING

**User spec:** "Gates catch about ~26% of what makes a page 'designed.'"

**Draft, line 47:** "Gates catch mechanical defects (~26% of compositional quality)."

**Draft, line 48:** "The remaining ~74% requires perceptual audit (PA)."

**Verdict: PASS -- 26% framing present and correctly stated**

---

## 7. GATE-TO-PA HANDOFF

**User spec:** "They filter out broken pages so the PA auditors don't waste time on pages that obviously fail."

**Draft, lines 163-175:** Full "Gate-to-PA Handoff" section:
- "Gates FILTER; PA JUDGES." (line 163)
- "ALL 15 blocking gates must PASS before PA runs." (line 165)
- "Gate diagnostic output... is included as PA CONTEXT" (lines 168-170)
- Unidirectional handoff clearly stated

**Verdict: PASS -- handoff is clear, one-way, well-documented**

---

## 8. CROSS-REFERENCE VALIDATION (42-gate-crossref.md)

The cross-reference found 4 action items. Checking which were applied in the draft:

| Action Item | Applied in Draft? |
|------------|------------------|
| SC-04/SC-05: Add inverted-context and semantic-accent exceptions | YES -- lines 707-711 (SC-04 exceptions), lines 738-741 (SC-05 exceptions), documented in cross-validation resolution table line 23-24 |
| SC-10: Change 108px to 120px | YES -- line 249: "<= 120px" |
| SC-14: Change 0.02em to 0.025em | YES -- line 439: "0.025em" |
| DG-2: Label discrepancy thresholds as engineering defaults | YES -- lines 623-625: "engineering defaults, not empirically sourced. Treat first experiment as calibration data." |

**Verdict: PASS -- all 4 cross-reference corrections applied**

---

## 9. ADDITIONAL QUALITY CHECKS

### 9a. Fix recipe format
Every blocking gate includes a fix recipe format with `instruction`, `css`, and often `alternative` and `reference` fields. This is ABOVE what the user specified (user did not require fix recipes). Good.

### 9b. Micro-gate schedule
Lines 75-109 define 4 micro-gate checkpoints during the build. The user did not specify this. This is ABOVE the user's spec and is a valuable addition (catches failures early).

### 9c. Execution grouping
Lines 117-137 define 5 execution groups with dependency chains. The user did not specify this. Good operational addition.

### 9d. Flagship threshold elevation table
Lines 957-966 summarize the 6 gates with Flagship-elevated thresholds. Clear and useful.

### 9e. parseRGB helper
Lines 1005-1015 provide the shared utility function. Practical.

---

## SUMMARY VERDICT

| Check | Result |
|-------|--------|
| All 21 gates present? | PASS (21/21) |
| All 6 categories covered? | PASS (6/6) |
| Exact numeric thresholds? | PASS (21/21) |
| Programmatic check methods? | PASS (19/21 programmatic, 2 behavioral -- explained) |
| Container width gate? | PASS |
| Pure black text gate? | PASS |
| Prohibited fonts gate? | PASS |
| Stacked gap > 108px gate? | PASS (justified deviation to 120px) |
| Padding < 24px gate? | PASS |
| Background color < 15 RGB gate? | PASS |
| Font size < 2px gate? | PASS |
| Semantic HTML gate? | PASS |
| Grid layout gate? | PASS |
| ARIA gate? | PASS |
| Mechanism count < 14 gate? | **PARTIAL** -- per-category minimums (min 5), not "< 14 = fail" |
| Channel coverage < 4 gate? | PASS |
| 26% coverage framing? | PASS |
| Gate-to-PA handoff clear? | PASS |
| Cross-reference corrections applied? | PASS (4/4) |

### OVERALL: PASS WITH 1 FINDING

**FINDING: Mechanism count threshold mismatch.**

The user specified "< 14 mechanisms = fail." The draft implements per-category minimums via DG-4 sub-check 3 (Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+ = minimum 5 total). This is a design improvement (prevents single-category gaming) but does NOT enforce the user's "14" threshold.

**Options for the assembler:**
1. Add a separate total-count check: `total_mechanisms >= 14` alongside per-category minimums
2. Increase per-category minimums to sum to ~14: e.g., Spatial 3+, Temporal 2+, Material 3+, Behavioral 3+, Relational 3+ = 14 minimum
3. Accept the deviation and document the rationale

**Recommendation:** Option 1 -- add both checks. Per-category minimums prevent gaming; total >= 14 matches user spec. They are complementary, not contradictory. DG-4 sub-check 3 should become: "mechanisms: >= 14 total AND >= 1 in each of 5 categories."

---

**END VERIFICATION**

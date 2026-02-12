<!-- INLINE THREADING HEADER
Tier: B (audit deliverable)
WHY THIS EXISTS: Audit report for CD-CONVENTION-SPEC.md — verifies inheritance, soul compliance, and CD-specific content
STATUS: COMPLETE
BUILT ON: CD-CONVENTION-SPEC.md, AD-CONVENTION-SPEC.md, AD-PA-CONVENTIONS.md, R5-EVALUATION-MATRIX.md
CONSUMED BY: Team Lead (CD Phase 0), CD builders, fix agents (if FAIL items exist)
-->

# CD Convention Specification -- Audit Report

**Auditor:** Agent-0D (Convention Auditor)
**Date:** 2026-02-11
**Document Under Audit:** `DESIGN-SYSTEM/provenance/stage-5-combination-cd/CD-CONVENTION-SPEC.md`
**Document Length:** ~1,450 lines

---

## Summary Verdict: CONDITIONAL PASS

The CD-CONVENTION-SPEC.md is a substantial, well-structured document that correctly inherits Sections 1-16 from AD-CONVENTION-SPEC.md and adds four meaningful CD-specific sections (17-20). Soul compliance is clean. The 4 combination rules, transition grammar, density tolerance, and combination accessibility sections are comprehensive and well-sourced.

**However, 3 deficiencies must be addressed before the spec can be used by builders:**

1. **Duplicate Section 6 numbering** -- The Deviation Protocol is numbered "## 6." conflicting with the already-existing "## 6. Spacing Tokens." Must be renumbered.
2. **Bento Grid Litmus Test reference missing** -- No mention of the Bento Grid Litmus Test from SKILL.md / execution context.
3. **Header max-width divergence undocumented** -- CD spec uses 1100px (correct per AD-PA-CONVENTIONS C-01), but AD-CONVENTION-SPEC uses 860px. The DIFF section does not document this change.

None of these are soul violations or structural failures. All are fixable in minutes.

---

## Soul Compliance Checklist

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 1 | border-radius: 0 everywhere | PASS | S1 line 29: "border-radius: 0 everywhere" + S10 line 334: `--border-radius: 0;` + S11 line 385: `*:where(:not(input, button, select)) { border-radius: 0; }` |
| 2 | box-shadow: none | PASS | S1 line 32: "box-shadow: none" + S10 line 335: `--box-shadow: none;` |
| 3 | No filter: drop-shadow() | PASS | S1 line 35: "No filter: drop-shadow() anywhere" |
| 4 | font-family: 'Instrument Serif' italic for Essence/Core ONLY | PASS | S1 line 44: "Font trio only" + S5 lines 177-183: type scale with correct font assignments |
| 5 | 2-zone callouts + border-left: 4px solid + color differentiation | PASS | S7 lines 245-254: 5 callout accent colors with 4px left-border convention throughout |
| 6 | No physical-movement animation | PASS | S15.2 lines 649-662: explicit prohibited transitions list (scale, rotate, hover-lift, parallax, etc.) + S20.4 CD-004 no-depth constraint |
| 7 | opacity: 1 on all backgrounds | PASS | S14.3 lines 622-626: "opacity === 1 on all visual elements" binary rule + S20.4 line 1345: "opacity < 1 on ANY persistent element" prohibited |
| 8 | 3-category borders (ZERO 2px) | PASS | S2 lines 68-76: Cat 1 (3px+), Cat 2 (1px), Cat 3 (1px), "2px borders are BANNED" |
| 9 | #E83025 only accent color | PASS | S1 line 41: locked palette + S7 line 236: `#E83025` as `--color-primary` for accents. S7 line 257: "No new off-palette colors may be introduced" |
| 10 | No hover depth effects | PASS | S15.2: `transform: scale()` prohibited, `transform: translateY()` on hover prohibited, `box-shadow` animation prohibited |

**Soul Verdict: 10/10 PASS. Zero soul violations.**

---

## 12-Point Audit Results

### 1. S1-16 Inherited Correctly

**Verdict: PASS (with 1 minor deficiency)**

All 16 sections from AD-CONVENTION-SPEC exist in the CD spec with matching content:

| Section | AD-CONV | CD-CONV | Match? |
|---------|---------|---------|--------|
| 1. Soul Compliance | Lines 26-61 | Lines 23-58 | YES -- verbatim |
| 2. Border System | Lines 65-86 | Lines 62-83 | YES -- verbatim |
| 3. Code Block Theme | Lines 89-131 | Lines 86-128 | YES -- verbatim |
| 4. Header Layout | Lines 134-168 | Lines 131-166 | YES (with CD meta line addition) |
| 5. Type Scale | Lines 171-191 | Lines 169-189 | YES -- verbatim |
| 6. Spacing Tokens | Lines 195-222 | Lines 193-220 | YES -- verbatim |
| 7. Color Application | Lines 226-261 | Lines 224-259 | YES -- verbatim |
| 8. Page Length Target | Lines 264-278 | Lines 262-278 | YES (with CD ceiling addition) |
| 9. Intentional Divergences | Lines 282-298 | Lines 281-298 | YES (adapted for CD-006) |
| 10. :root Block | Lines 301-372 | Lines 300-371 | YES -- verbatim |
| 11. Base Styles | Lines 376-432 | Lines 375-431 | YES -- verbatim |
| 12. CSS Grid | Lines 436-522 | Lines 435-538 | YES (with ESC-001 addition) |
| 13. Flexbox | Lines 526-566 | Lines 541-582 | YES -- verbatim |
| 14. Zone Tokens | Lines 570-612 | Lines 585-627 | YES -- verbatim |
| 15. Transitions | Lines 616-672 | Lines 630-693 | YES (with ESC-002 amendment) |
| 16. Accessibility | Lines 676-755 | Lines 696-776 | YES -- verbatim |

**Deficiency:** The header inner wrapper max-width changed from 860px (AD spec line 161) to 1100px (CD spec line 158). This is the CORRECT value per AD-PA-CONVENTIONS C-01 (the PA audit validated 1100px after user intervention). However, this change is NOT documented in the DIFF section (lines 1371-1407). The DIFF section lists 5 changed values but omits this one.

---

### 2. S17 Combination Rules

**Verdict: PASS**

Section 17 (lines 817-1016) contains all required elements:

- **4 Rules present:**
  - Rule 1: Never Stack Same-Velocity (R5-T2) -- line 829, with SLOW/MEDIUM/FAST velocity table
  - Rule 2: Temperature Flow (R5-T3) -- line 849, with full temperature taxonomy
  - Rule 3: Weight Balance (R5-G3) -- line 885, with Heavy/Medium/Light weight table
  - Rule 4: Semantic Proximity Spacing (R5-G1) -- line 911, with spacing token table

- **Temperature taxonomy for all 11 components:** Lines 855-868, all 11 present (Code Snippet, Info Callout, Tip Callout, Gotcha Callout, Essence Callout, Challenge Callout, File Tree, Decision Matrix, Core Abstraction, Task Component, Reasoning)

- **Extended term mapping present:** Lines 870-873
  - Reverent -> Warm (Core Abstraction, Essence Callout)
  - Utilitarian -> Cold (Task Component)
  - Deliberate -> Neutral (Reasoning)

- **Additional subsections:** Velocity interaction rules (17.2), Weight distribution guidelines (17.3), Compatibility matrix reference (17.4), Traffic light rule (17.5), Combination recipes (17.6)

---

### 3. S18 Transition Grammar

**Verdict: PASS**

Section 18 (lines 1018-1119) contains:

- **5x5 matrix reference:** Lines 1029-1035 -- full AD-F-025 inherited matrix with all 20 directed transitions classified as Smooth (4 pairs), Bridge (10 pairs), or Breathing (6 pairs)
- **Combination-scale extension:** Lines 1049-1068 -- compound upgrade rule (Smooth->Bridge, Bridge->Breathing, Breathing->Double Breathing)
- **Three transition types at CD scale:** Smooth (lines 1072-1077), Bridge (lines 1079-1084), Breathing (lines 1087-1092) with specific spacing values
- **Choreography as universal bridge:** Section 18.4, lines 1095-1106
- **Spiral as most isolated pattern:** Section 18.5, lines 1109-1118

---

### 4. S19 Density Tolerance

**Verdict: PASS**

Section 19 (lines 1122-1230) contains:

- **Per-component table with all 11 components:** Lines 1137-1147, all 11 present
- **Columns:** Component, Min Density, Max Density, Compression Behavior, Splitting Threshold -- all present
- **Section 19.4 responsive combination behavior:** Lines 1182-1229
  - 19.4.1 Collapse behavior at 768px (line 1187)
  - 19.4.2 Pattern dominance at narrow viewports (line 1200)
  - 19.4.3 Stack order for multi-column collapse (line 1216)

---

### 5. S20 Accessibility

**Verdict: PASS**

Section 20 (lines 1233-1367) contains:

- **Nested focus management:** Section 20.1, lines 1239-1267, with 3 rules and HTML example
- **Combined landmarks:** Section 20.2, lines 1269-1301, with 5 rules, HTML example, and 2-level max depth
- **aria-flowto chains:** Section 20.3, lines 1304-1336, with 3 rules and multi-axis reading order example
- **CD-004 no-depth constraint:** Section 20.4, lines 1339-1367

---

### 6. ESC-001 Resolved

**Verdict: PASS**

ESC-001 (960px collapse threshold for 4+-column grids) is documented in Section 12.5, lines 509-538:

> "At viewport widths below 960px, 4+-column grids collapse to single column (ESC-001 resolution)."

Includes CSS media query example at `max-width: 960px` and explicit note: "ESC-001 RESOLVED: 960px collapse threshold for 4+-column grids."

Also listed in the DIFF section (line 1405): "ESC-001 (960px collapse for 4+-col grids) | Adopted as FROZEN convention."

---

### 7. ESC-002 Resolved

**Verdict: PASS**

ESC-002 (progressive enhancement) is documented in Section 15.3, lines 665-681:

> "Content MUST be visible by default... JavaScript MAY add `opacity: 0; transform: translateY(20px)` for reveal effect. If JavaScript fails, content remains visible."

Explicit resolution note at line 676: "ESC-002 RESOLVED: Progressive enhancement means initial CSS = visible."

Also listed in DIFF section (line 1406).

---

### 8. CD-004 ANTI-PHYSICAL

**Verdict: PASS**

Section 20.4 (lines 1339-1367) contains the complete CD-004 no-depth constraint:

- `opacity` < 1 prohibited on persistent elements (line 1345)
- `z-index` stacking for visual depth prohibited (line 1346)
- `box-shadow` in any form prohibited (line 1348)
- Depth gradients prohibited (line 1349)
- Background blur prohibited (line 1350)
- Perspective transforms prohibited (line 1351)
- "Card elevation" patterns prohibited (line 1352)
- Overlapping elements prohibited except solid-offset (line 1353)

Alternative hierarchy techniques listed (lines 1357-1361): color differentiation, typography, border weight, spacing, border-weight gradient.

Binary rule at lines 1363-1365 for programmatic verification.

---

### 9. Three-Value Labels

**Verdict: PASS**

The spec uses a three-tier mutability system throughout:

- **FROZEN** -- cannot be modified (used on all inherited values and critical CD values)
- **SOFT-LOCKED** -- strong evidence, modification requires re-validation
- **OPEN** -- adaptable with documented rationale

Stated explicitly in the document header (lines 16-19): "All values have three labels: provenance tier, inheritance status, and mutability."

Every value in the document carries three labels. Examples:
- Line 30: `T1 (COMP-F-001, geometry.md) | INHERITED | FROZEN`
- Line 909: `T2 (R5-G3 Visual Weight Balance) | CD-SPECIFIC | SOFT-LOCKED`
- Line 1149: `T2 (DD-F-013 operationalized, R5-Q1 density limits) | CD-SPECIFIC | OPEN`

---

### 10. Deviation Protocol

**Verdict: PASS (with numbering deficiency)**

A deviation/amendment protocol exists at lines 779-814, containing:

- **3-level deviation classification** (lines 789-793): Level 0 (No Deviation), Level 1 (Contextual Application), Level 2 (Documented Deviation), Level 3 (Convention Conflict)
- **Deviation request format** (lines 797-805): structured markdown template
- **Approval chain** (lines 809-812): FROZEN = Lead only, SOFT-LOCKED = Lead or reviewer, OPEN = Builder self-approve

The section header reads: "### INHERITED FROM: AD-CONV Section 6 / OD-CONV Deviation Protocol"

**Deficiency:** The section is numbered "## 6. Deviation Protocol" (line 779), which conflicts with "## 6. Spacing Tokens" (line 193). This creates a DUPLICATE Section 6. The AD-CONVENTION-SPEC does NOT have a deviation protocol section at all -- it was part of the OD convention spec but not carried forward explicitly into the AD spec. The CD spec adds it but uses the wrong number. It should be numbered as a standalone section (e.g., Appendix A) or placed between Section 16 and Section 17 with a non-conflicting number (e.g., "## 16A. Deviation Protocol" or renumbered as Section 17 with subsequent sections shifted).

---

### 11. Binary Rules Checkable

**Verdict: PASS**

Spot-checking 5 binary rules from the execution plan (Section 6 of MASTER-CD-EXECUTION-PROMPT.md):

| Rule ID | Description | Spec Reference | Checkable? |
|---------|-------------|---------------|------------|
| **K-01** | Each CD declares DD+OD+AD patterns | Not in convention spec (build requirement, not convention) | N/A -- this is a builder requirement, not a convention value |
| **K-04** | AD-F-024 sequential | S18.2 line 1064: "Compound is SEQUENTIAL, not simultaneous" | YES |
| **K-07** | No consecutive same-velocity without buffer | S17.1 Rule 1 line 839: binary rule with WRONG/RIGHT examples | YES |
| **K-10** | Max 2 callouts per viewport | S1 line 53: "Max 2 callouts per viewport section" + S19.3 line 1174: "Callouts (any type) | 2 | Alarm fatigue" | YES |
| **S-08** | 3-category borders (ZERO 2px) | S2 line 74: "2px borders are BANNED" with Cat 1/2/3 definitions | YES |

All checked rules that are convention-level (K-04, K-07, K-10, S-08) are findable and verifiable in the spec. K-01 is a build-process requirement, not a convention value, so its absence from the convention spec is correct.

---

### 12. Bento Grid Litmus Test

**Verdict: FAIL**

No reference to the "Bento Grid Litmus Test" exists anywhere in CD-CONVENTION-SPEC.md. Searched for "Bento Grid Litmus," "litmus," and "SKILL.md" -- zero matches.

The Bento Grid Litmus Test is referenced in `POST-CD-PIPELINE/_CD-EXEC-CONTEXT.md` (line 141) as one of 7 execution protocol bullet points: "Bento Grid Litmus Test -- catches 130px crushed columns." This test is directly relevant to CD-003 (File Tree with Callouts, Bento Grid pattern) and should be referenced in the convention spec, either in Section 12.4 (Bento Grid Pattern) or Section 17.

---

## Deficiency Summary

| # | Severity | Description | Location | Fix |
|---|----------|-------------|----------|-----|
| D-1 | MEDIUM | Duplicate Section 6 numbering -- Deviation Protocol conflicts with Spacing Tokens | Line 779 | Renumber to Section 16A, or insert before Section 17 with a unique number |
| D-2 | LOW | Bento Grid Litmus Test not referenced | Missing entirely | Add reference in S12.4 or S17: "CD-003 bento patterns MUST pass the Bento Grid Litmus Test (verify no columns compress below 130px at any viewport)" |
| D-3 | LOW | Header max-width change (860px -> 1100px) not in DIFF section | S4 line 158 vs DIFF section lines 1371-1407 | Add row to DIFF "Values CHANGED" table: Section 4 header inner wrapper, AD: 860px, CD: 1100px, Reason: AD-PA-CONVENTIONS C-01 validated 1100px |

---

## Overall Assessment

### Strengths

1. **Inheritance is thorough.** All 16 sections are present with correct content. The provenance labels (T1/T2 + INHERITED/CD-SPECIFIC + FROZEN/SOFT-LOCKED/OPEN) are applied consistently throughout.

2. **Section 17 (Combination Rules) is excellent.** The 4 rules are well-structured with binary-testable formulations, clear velocity/temperature/weight taxonomies for all 11 components, and practical WRONG/RIGHT examples. The traffic light rule (17.5) and recipe catalog (17.6) add significant builder value.

3. **Section 18 (Transition Grammar) successfully extends AD-F-025.** The compound upgrade rule (Smooth->Bridge->Breathing->Double Breathing) is a clean, logical extension. The analysis of Choreography as universal bridge and Spiral as most isolated pattern provides actionable guidance.

4. **Section 19 (Density Tolerance) operationalizes DD-F-013.** The per-component table with all 11 components and the combination reduction rule (75%/60% capacity at 2/3 heavy components) gives builders concrete limits. The responsive collapse behavior (19.4) with pattern dominance hierarchy and stack ordering is thorough.

5. **Section 20 (Combination Accessibility) is comprehensive.** Nested focus management, 2-level landmark depth limit, aria-flowto chains, and the CD-004 no-depth constraint are all binary-testable rules.

6. **The DIFF section is valuable.** Documenting every change from AD, every addition, and the two escalation resolutions creates a clear paper trail (minus the one omission noted in D-3).

7. **ESC-001 and ESC-002 are properly resolved** with FROZEN status and clear rationale.

### Weaknesses

1. **Section numbering error (D-1)** is the most significant deficiency. Builders may be confused by two "Section 6" references.

2. **The Bento Grid Litmus Test omission (D-2)** means CD-003 builders lack a concrete validation test for bento column compression.

3. **Several Section 19 values are marked DRAFT/OPEN with asterisks** -- this is acceptable for a first-pass spec but means Wave 1 builders must validate empirically rather than rely on the spec as definitive.

### Readiness for Builders

**CONDITIONAL READY.** Once the 3 deficiencies are fixed (estimated 5-10 minutes of editing), the spec is ready for Wave 1 builders. The DRAFT values in Section 19 are appropriately flagged and do not block building -- they flag areas where builders should validate and report back.

The spec successfully bridges AD conventions into the combination domain. The 4 combination rules, transition grammar extension, and density tolerance table give builders a clear operational framework that was absent before. The document is well-sourced with R5 and AD-F citations throughout.

---

## Document Metadata

**Audit Duration:** Single-pass comprehensive read of all 4 input files + cross-referencing
**Lines Audited:** ~1,450 (CD-CONVENTION-SPEC) + ~822 (AD-CONVENTION-SPEC) + ~970 (AD-PA-CONVENTIONS) + ~707 (R5-EVALUATION-MATRIX)
**Soul Violations Found:** 0
**Inheritance Errors Found:** 0 (1 undocumented improvement)
**Structural Deficiencies Found:** 3 (1 MEDIUM, 2 LOW)

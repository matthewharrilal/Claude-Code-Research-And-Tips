# Compliance Audit: artifact-gate-runner.md vs Fresh Run Gate Results

**Auditor:** audit-gates
**Date:** 2026-02-23
**Artifact:** `ephemeral/va-extraction/artifact-gate-runner.md` (1,380 lines, 42 gates defined)
**Gate Results (fresh run):** `ephemeral/pages/yegge-gas-town-extraction/gate-results.md` (65 lines)
**Gate Results (VA pipeline build):** `ephemeral/pages/gas-town-va-pipeline/_gate-results.md` (66 lines)
**HTML Under Test:** `ephemeral/pages/yegge-gas-town-extraction/yegge-gas-town.html`

---

## EXECUTIVE SUMMARY

The gate runner artifact defines 42 gates across 8 categories. The fresh run executed **16 gates** (10 identity + 6 perception) plus **3 anti-pattern gates** (GR-17, GR-18, GR-20). This is consistent with the artifact's own guidance (L32: "only 15 of 42 gates were run" in Gas Town, and the executable code covers "16 REQUIRED gates plus 3 RECOMMENDED anti-pattern gates").

However, there are significant compliance issues: **gate ID renumbering**, **threshold inconsistencies**, **missing gates from the executable code**, and **two conflicting gate result files** that report different outcomes for the same page.

**Verdict: PARTIAL COMPLIANCE — 7 discrepancies requiring resolution.**

---

## SECTION 1: PER-GATE COMPLIANCE AUDIT

### Identity Gates (Artifact: GR-01 through GR-10)

#### GR-01: Border Radius Zero
- **Executed?** YES
- **Artifact threshold:** All computed border-radius === "0px"
- **Results threshold:** 0 violations
- **Result:** PASS
- **JS code as-is?** UNKNOWN — results don't include diagnostic data showing the code was run verbatim. The result format (just "0 violations") is consistent with the artifact's code output structure but we cannot confirm identical code execution.
- **Pass/fail correct?** YES — 0 violations = PASS per artifact spec.

#### GR-02: Box Shadow None
- **Executed?** YES
- **Artifact threshold:** All computed box-shadow === "none"
- **Results threshold:** 0 violations
- **Result:** PASS
- **Pass/fail correct?** YES

#### GR-03: Container Width 940-960px
- **Executed?** YES
- **Artifact threshold:** 940px <= container width <= 960px
- **Results:** 960px, 6 container elements
- **Result:** PASS
- **Pass/fail correct?** YES — 960px is within [940, 960]

#### GR-04: No Gradients
- **Executed?** YES
- **Artifact threshold:** Zero gradient in backgroundImage
- **Results:** 0 violations
- **Result:** PASS
- **Pass/fail correct?** YES

#### GR-05: Warm Palette Compliance
- **Executed?** YES
- **Artifact threshold:** pureBlack === 0 AND coldColors === 0
- **Results:** 18 pure black (browser defaults on HTML/HEAD), 98 cold colors (rgb(74,144,217) on role-card__level)
- **Result:** FAIL
- **DISCREPANCY #1:** The artifact's JS code (L896-940) checks ALL elements including HTML/HEAD/META. The results correctly flag "18 pure black (browser defaults on HTML/HEAD)" but annotate them as false positives. However, the artifact's code does NOT exclude browser-default elements — it checks `document.querySelectorAll('*')` including HTML, HEAD, META, TITLE. **The code as written would flag these.** The results CORRECTLY called this FAIL per the artifact spec, but the annotation suggests the orchestrator may have wanted to dismiss them as false positives.
- **DISCREPANCY #2:** Cold colors — rgb(74,144,217) on `.role-card__level` is flagged as a genuine palette violation. This is CORRECT per artifact spec (the `isCold()` function returns true when B > R + 10 AND B > G + 10; for (74, 144, 217): 217 > 84 AND 217 > 154 = true). This is a real FAIL.
- **Pass/fail correct?** YES — correctly identified as FAIL.

#### GR-06: Font Trinity
- **Executed?** YES
- **Artifact threshold:** Zero violations AND all 3 fonts present
- **Results:** "All 3 fonts found. 9 'violations' are browser-default `times` on HTML/HEAD/META/TITLE — false positive"
- **Result:** PASS* (with asterisk)
- **DISCREPANCY #3:** The artifact's JS code (L943-969) checks `document.querySelectorAll('*')` which includes HTML/HEAD/META/TITLE. These elements inherit `times` from browser stylesheet. The artifact code would detect `times` as a violation (it's not in the allowed list). The results mark this PASS* but it should be FAIL per the literal artifact code. The asterisk indicates the orchestrator applied human judgment to override the programmatic result. **This is a compliance violation — the artifact says gates are BINARY pass/fail only (L10).** If the code produces violations, the gate should FAIL, and the false positive logic should be built into the code (e.g., filtering out HEAD/META/TITLE elements).

#### GR-07: No Pure Black / Pure White
- **Executed?** NO (as GR-07)
- **DISCREPANCY #4 (MAJOR):** The artifact defines GR-07 as "No Pure Black / Pure White." But the results file has no GR-07 entry. Instead, the results report "GR-07: Header DNA" — which is actually the artifact's GR-07 check embedded in the palette check (GR-05), while "Header DNA" in the artifact is a different concept (part of GR-10: Cross-Page DNA Properties, specifically the header dark bg + 3px red bottom border sub-check). **The fresh run RENUMBERED the gates.** The artifact's GR-07 (no pure B/W) was effectively subsumed into GR-05 (palette), and the artifact's header DNA check (part of GR-10) was promoted to its own gate slot GR-07.

#### GR-08: No Decorative Elements
- **Executed?** NO (as GR-08)
- **In results as:** GR-08 = "Border Hierarchy" — which is the artifact's GR-09.
- **Artifact's GR-08** (No Decorative Elements) does not appear in the results at all. This gate was SKIPPED in the fresh run.

#### GR-09: Border Weight Hierarchy
- **Executed?** YES (but renumbered to GR-08)
- **Artifact threshold:** Border weights follow 4/3/1px hierarchy, at least 2 distinct weights
- **Results:** 3 distinct weights: 4.0px (26 elements), 2.7px (141 elements), 0.7px (186 elements)
- **Result:** PASS
- **DISCREPANCY #5:** The actual border weights (4.0, 2.67, 0.67) deviate from the artifact's specified hierarchy (4/3/1px). The artifact code (L1015-1023) only checks `hasHierarchy = weightValues.length >= 2`, meaning it would PASS with any 2+ distinct weights regardless of whether they match 4/3/1. The result correctly reflects the code's behavior (PASS), but the code is WEAKER than the specification text (L145-149: "Border weights must follow hierarchy: 4px = primary, 3px = secondary, 1px = tertiary"). **The JS implementation underspecifies the gate relative to its textual description.**

#### GR-10: Cross-Page DNA Properties
- **Executed?** PARTIALLY — split across multiple result gates
- **In results as:** GR-07 (Header DNA), GR-09 (Typography), GR-10 (Accessibility)
- **Artifact's GR-10** checks ~30 DNA properties (body line-height, p max-width, header DNA, callout 4px border, h3 italic, selection red, focus-visible, skip-link). The fresh run split these into:
  - GR-07 (Header DNA): dark bg, red border — PASS
  - GR-09 (Typography): line-height 1.70, h3 italic — PASS
  - GR-10 (Accessibility): skip link, landmarks, headings — PASS
- Missing DNA checks: callout 4px left border, ::selection red, :focus-visible 3px solid primary, p max-width 70ch. These were NOT checked programmatically.

### Perception Gates (Artifact: GR-11 through GR-16)

#### GR-11: Background Delta >= 15 RGB
- **Executed?** YES
- **Artifact threshold:** All adjacent zone bg deltas >= 15 RGB (max channel difference)
- **Results:** Z1->Z2: 27 PASS, Z2->Z3: 11 FAIL, Z3->Z4: 8 FAIL, Z4->Z5: 29 PASS, Z5->Z6: 16 PASS
- **Result:** FAIL
- **Pass/fail correct?** YES — Z2->Z3 delta 11 and Z3->Z4 delta 8 are below 15 threshold.
- **JS code consistency:** The results report "Z1->Z2: 27" which is the max single-channel delta. The artifact code (L1083-1118) computes `Math.max(Math.abs(a.r-b.r), Math.abs(a.g-b.g), Math.abs(a.b-b.b))` — same metric. CONSISTENT.
- **Cross-check with HTML:** The HTML declares `--refinery-floor: #EDE6DA` (Z2) and `--refinery-tank: #FFF2E0` (Z3). But the results report Z2=rgb(237,230,218) and Z3=rgb(245,239,229). The HTML CSS variable for Z3 is `#FFF2E0` = rgb(255,242,224), but the MEASURED Z3 is rgb(245,239,229) = `#F5EFE5`. **The CSS variable declaration and the computed value differ.** This means either: (a) the builder changed the zone backgrounds from the variable declarations elsewhere in the CSS, or (b) child elements with different backgrounds were measured. Either way, the gate correctly measured COMPUTED values, which is what the artifact specifies.

#### GR-12: Letter Spacing >= 0.025em
- **Executed?** YES
- **Artifact threshold:** All explicit letter-spacing >= 0.025em
- **Results:** 0 violations
- **Result:** PASS
- **Pass/fail correct?** YES

#### GR-13: Stacked Gap <= 120px
- **Executed?** YES
- **Artifact threshold:** CSS property sum (margin-bottom + padding-bottom + margin-top + padding-top) at section boundaries <= 120px
- **Results:** Max 112px (Z1->Z2), others 80px
- **Result:** PASS
- **Pass/fail correct?** YES — 112px < 120px

#### GR-14: Total Visual Gap <= 150px
- **Executed?** YES
- **Artifact threshold:** getBoundingClientRect visual gap <= 150px
- **Results:** Z5->Z6: 318px (dark inversion block per D-04 in execution brief)
- **Result:** FAIL
- **DISCREPANCY #6:** The results correctly identify this as FAIL per the artifact's 150px threshold. However, the results annotation notes this is "intentional" — a dark inversion block specified in D-04 of the execution brief. The artifact does NOT have an exception mechanism for intentional structural elements. The gate is BINARY (L10-13). **A structural dark block that creates a 318px visual gap between zones is a genuine FAIL per the artifact spec, even if intentionally designed.** The artifact would need to be amended to handle "structural transition elements" that sit between zones (they're neither inside Z5 nor Z6 per the gate's zone-boundary model).

#### GR-15: Single Margin <= 96px
- **Executed?** YES
- **Artifact threshold:** All single margin/padding values <= 96px
- **Results:** 0 violations
- **Result:** PASS
- **Pass/fail correct?** YES

#### GR-16: All CSS Perceptible (Meta-Gate)
- **Executed?** NOT EXPLICITLY REPORTED
- **Artifact spec:** GR-16 passes if and only if GR-11 through GR-15 all pass
- **Results:** GR-11 FAIL and GR-14 FAIL, so GR-16 would be FAIL
- **The results do not report GR-16 separately.** The overall perception summary "3 PASS, 2 FAIL" covers GR-11 through GR-15 only (5 gates), suggesting GR-16 was not executed as a distinct gate.
- **DISCREPANCY #7:** GR-16 is omitted from results. Minor — it's a meta-gate aggregation of GR-11-15, so the information is implied.

### Anti-Pattern Gates (Artifact: GR-17 through GR-22)

#### GR-17: AP-01 Density Stacking
- **Executed?** YES
- **Artifact threshold:** min padding on content elements >= 12px
- **Results:** 262 violations — table cells at 8px padding
- **Result:** FAIL
- **Pass/fail correct?** YES — 8px < 12px threshold
- **Note:** The results correctly flag this but also note "common for dense data. Consider whether 12px minimum applies to table cells." The artifact code (L1264-1282) explicitly includes `td, th` in the selector list, so table cells ARE in scope. However, this raises a specification question: is 12px minimum padding reasonable for data tables?

#### GR-18: AP-09 Ghost Mechanisms
- **Executed?** YES
- **Artifact threshold:** Zero sub-perceptual mechanism values (border < 0.5px, opacity 0.01-0.1)
- **Results:** 0 ghosts
- **Result:** PASS
- **Pass/fail correct?** YES

#### GR-19: AP-10 Threshold Gaming
- **Executed?** NO
- **Artifact categorization:** ADVISORY gate (does not block)
- **Status:** Not reported in results. SKIPPED.

#### GR-20: AP-11 Structural Echo
- **Executed?** YES
- **Artifact threshold:** No 3+ consecutive identical sections
- **Results:** maxConsecutive = 1
- **Result:** PASS
- **Pass/fail correct?** YES

#### GR-21: AP-14 Cognitive Overload
- **Executed?** NO
- **Artifact note:** "This gate is difficult to automate precisely" (L273)
- **Status:** SKIPPED. Consistent with artifact guidance.

#### GR-22: AP-02 Color Zone Conflict
- **Executed?** NO
- **Status:** SKIPPED. Not unreasonable — requires semantic color role analysis.

### Precondition Gates (Artifact: GR-23 through GR-28)

- **Executed?** NONE OF THESE WERE REPORTED in the gate results files.
- **Artifact spec:** These run BEFORE the builder starts (Phase 0-1).
- **Assessment via execution brief:** The execution brief EXISTS and uses recipe format (world-description voice: "Every surface is sharp. Corners are cut, not curved."). This suggests GR-28 (Recipe Format) would PASS if checked. Brief appears to be under 200 lines, suggesting GR-26 would PASS. No gate-format language visible in the brief, suggesting GR-27 would PASS. Builder model cannot be determined from available files.
- **Compliance note:** The artifact explicitly states these run "BEFORE the builder starts" — they are precondition checks, not post-build checks. Their absence from post-build gate results is EXPECTED behavior per the artifact. However, there is no evidence they were checked AT ALL during the pipeline run.

### Verdict Gates (Artifact: GR-29 through GR-32)

- **Executed?** NOT AS PROGRAMMATIC GATES — but the verdict logic was applied.
- **Results file states:** "REFINE — 1 identity fail (cold color), 2 perception fails (bg deltas + visual gap)"
- **Artifact spec:** Any identity gate FAIL = REBUILD (L64), not REFINE. ANY perception gate FAIL = REFINE (L65).
- **MAJOR COMPLIANCE ISSUE:** The results file says "REFINE" but the artifact says identity FAIL = REBUILD. GR-05 (identity) FAILED. Per the artifact's verdict logic (L63-67), the verdict should be **REBUILD**, not REFINE. The results file's verdict is INCORRECT per the artifact specification.

### Mode Detection Gates (GR-33 through GR-35)
- **Executed?** NO — these are ADVISORY/DIAGNOSTIC per artifact
- **Status:** SKIPPED. Acceptable.

### Experiment Stage Gates (GR-36 through GR-39)
- **Executed?** NO — these are meta-gates for experiment protocol
- **Status:** SKIPPED. Expected — they don't run on individual builds.

### Structural/Policy Gates (GR-40 through GR-42)
- **Executed?** NO — these verify pipeline architecture
- **Status:** SKIPPED. These are process gates, not post-build checks.

---

## SECTION 2: SKIPPED GATES

Gates defined in the artifact but NOT appearing in results:

| Gate ID | Name | Category | Expected? |
|---------|------|----------|-----------|
| GR-07 | No Pure Black/Pure White | Identity | UNEXPECTED — subsumed into GR-05 but not separately checked |
| GR-08 | No Decorative Elements | Identity | UNEXPECTED — completely absent |
| GR-16 | All CSS Perceptible | Perception (meta) | MINOR — implied by GR-11-15 results |
| GR-19 | AP-10 Threshold Gaming | Anti-pattern (ADVISORY) | ACCEPTABLE — advisory gate |
| GR-21 | AP-14 Cognitive Overload | Anti-pattern | ACCEPTABLE — artifact notes difficulty |
| GR-22 | AP-02 Color Zone Conflict | Anti-pattern | ACCEPTABLE — requires semantic analysis |
| GR-23-28 | All Precondition Gates | Precondition | EXPECTED — run pre-build, not post-build |
| GR-29-32 | All Verdict Gates | Verdict | PARTIAL — verdict logic was applied but not as formal gates |
| GR-33-35 | All Mode Detection Gates | Mode (ADVISORY) | ACCEPTABLE — diagnostic only |
| GR-36-39 | All Experiment Gates | Experiment | EXPECTED — not applicable to individual builds |
| GR-40-42 | All Policy Gates | Policy | EXPECTED — pipeline architecture checks |

**Summary:** 23 gates skipped. Of these, 20 are expected/acceptable. 3 are unexpected:
1. GR-07 (No Pure B/W) — merged into GR-05 without explicit reporting
2. GR-08 (No Decorative Elements) — completely absent
3. GR-16 (All CSS Perceptible) — trivial omission

---

## SECTION 3: PHANTOM GATES (Results Without Artifact Match)

No true phantom gates found. The results map to artifact gates, but with **renumbering**:

| Results Gate | Results Name | Artifact Match | Artifact ID |
|-------------|-------------|----------------|-------------|
| GR-07 | Header DNA | Part of GR-10 (Cross-Page DNA) | GR-10 sub-check |
| GR-08 | Border Hierarchy | GR-09 | Renumbered |
| GR-09 | Typography | Part of GR-10 (Cross-Page DNA) | GR-10 sub-check |
| GR-10 | Accessibility | Part of GR-10 (Cross-Page DNA) | GR-10 sub-check |

The orchestrator **decomposed** the artifact's GR-10 (Cross-Page DNA) into 3 separate gates (Header DNA, Typography, Accessibility) and renumbered GR-08/GR-09 accordingly. This is operationally reasonable but creates a mapping discrepancy with the artifact's gate ID scheme.

---

## SECTION 4: FALSE POSITIVE ANALYSIS

Two false positive situations were identified in the results:

### 1. GR-05 Pure Black on HTML/HEAD/META/TITLE
- **Results say:** "18 pure black (browser defaults on HTML/HEAD)"
- **Artifact code behavior:** Would flag these — checks ALL elements via `document.querySelectorAll('*')`
- **Assessment:** These ARE false positives from the design intent perspective — no one intends to style `<html>` or `<head>`. But the artifact code does not exclude them. **The code should be amended to filter out non-rendered elements** (HEAD, META, TITLE, SCRIPT, STYLE, LINK, BR).
- **Were false positives correctly identified?** YES — the results correctly identify them as browser defaults. But the gate was still marked FAIL (correctly, because of the genuine cold color violations).

### 2. GR-06 Font Times on HTML/HEAD/META/TITLE
- **Results say:** "9 'violations' are browser-default `times` on HTML/HEAD/META/TITLE — false positive"
- **Assessment:** Same issue as GR-05. The results OVERRIDE the code output to PASS*, but the code would produce FAIL.
- **Were false positives correctly identified?** YES for identification. NO for handling — the results should either: (a) report FAIL and note false positives, or (b) the code should be fixed to exclude non-rendered elements. Marking PASS* with an asterisk is not a valid gate status per the artifact's BINARY spec.

---

## SECTION 5: EXECUTION CONTEXT

### Was the gate runner executed by the orchestrator (not an LLM agent)?

**INDETERMINATE.** The results file does not indicate who/what ran the gates. The artifact specifies (L36-48) that gates run in Phase 3 by the orchestrator via Playwright. Evidence:
- The results include structured data consistent with Playwright `page.evaluate()` output
- Screenshot inventory (55 files across 3 viewports) is consistent with Playwright session
- However, the result FORMAT differs from the artifact's specified JSON output format (L52-60). The results are in Markdown table format, not JSON. This suggests either: (a) the JSON was converted to Markdown for the results file, or (b) an LLM agent interpreted the gate specs and ran equivalent checks rather than executing the pre-built code verbatim.

### Were results from 1440px viewport?
**YES** — the results are labeled for 1440px. Screenshot inventory confirms 1440px captures.

### Were responsive gates run at 768px?
**PARTIALLY** — screenshots exist at 768px (16 scroll positions), but the gate results file does not report 768px gate results separately. The artifact specifies (L44): "Responsive gates re-run at 768px." **Compliance violation.**

---

## SECTION 6: CONFLICTING GATE RESULTS

Two gate result files exist for what appears to be the SAME HTML page:

### File 1: `ephemeral/pages/yegge-gas-town-extraction/gate-results.md`
- Uses GR-01 through GR-20 numbering
- Reports GR-05 FAIL (cold colors)
- Reports GR-11 FAIL (bg deltas at Z2->Z3 and Z3->Z4)
- Reports GR-14 FAIL (318px visual gap)
- Verdict: REFINE

### File 2: `ephemeral/pages/gas-town-va-pipeline/_gate-results.md`
- Uses SC-01 through SC-10 and PT-01 through PT-05 numbering (completely different scheme)
- Reports SC-04 (Warm Palette) PASS — **CONTRADICTS** File 1's GR-05 FAIL
- Reports PT-01 (Background Delta >= 15) PASS with deltas "21, 31, 37, 17, 22" — **CONTRADICTS** File 1's GR-11 FAIL
- Reports Z3 as rgb(255, 255, 255) (#FFFFFF) — **CONTRADICTS** File 1's Z3 as rgb(245, 239, 229)
- Has 4 MANUAL gates (SC-07, SC-09, SC-10, PT-04) — more conservative about what's automatable

**CRITICAL FINDING:** These two result files describe DIFFERENT states of the page. File 2 reports different zone background colors (Z3 is white vs warm cream) and different gate outcomes. This means either:
1. Two different versions of the HTML were tested, or
2. The gate code was run differently, or
3. One file is from an earlier build pass and one from a later pass

The task specifies `gate-results.md` (File 1) as the primary gate results file. File 2 uses a completely different gate naming scheme (SC/PT vs GR) that does not match the artifact at all.

---

## SECTION 7: DISCREPANCY SUMMARY

| # | Type | Gate | Issue | Severity |
|---|------|------|-------|----------|
| 1 | False positive handling | GR-05 | Browser-default elements flagged; artifact code doesn't exclude them | MEDIUM — code needs amendment |
| 2 | Palette violation | GR-05 | Cold color rgb(74,144,217) correctly flagged | N/A — correct behavior |
| 3 | Binary violation | GR-06 | Marked PASS* but code would produce FAIL; asterisk not valid per binary spec | HIGH — violates BINARY gate principle |
| 4 | Gate renumbering | GR-07-10 | Fresh run renumbered and decomposed gates vs artifact | HIGH — creates ID mismatch, complicates traceability |
| 5 | Weak implementation | GR-09/GR-08 | JS checks >= 2 distinct weights, spec says "must follow 4/3/1 hierarchy" | MEDIUM — code underspecifies the gate |
| 6 | No exception mechanism | GR-14 | 318px structural element has no carve-out in binary gate | MEDIUM — artifact needs structural transition element handling |
| 7 | Meta-gate omission | GR-16 | Not reported separately | LOW — information implied |
| 8 | VERDICT ERROR | Verdict | Results say REFINE but artifact says identity FAIL = REBUILD | **CRITICAL** — verdict logic contradicts artifact |
| 9 | Conflicting results files | All | Two gate result files with different outcomes | **CRITICAL** — undermines trust in gate runner |
| 10 | No 768px gate re-run | Responsive | Screenshots exist at 768px but no gate results at that viewport | MEDIUM — artifact requires re-run at 768px |

---

## SECTION 8: RECOMMENDATIONS

### Artifact Amendments Needed

1. **Exclude non-rendered elements** from ALL element-scanning gates (GR-01 through GR-07). Add filter: `el.tagName !== 'HTML' && el.tagName !== 'HEAD' && el.tagName !== 'META' && el.tagName !== 'TITLE' && el.tagName !== 'SCRIPT' && el.tagName !== 'STYLE' && el.tagName !== 'LINK' && el.tagName !== 'BR'`.

2. **Strengthen GR-08/GR-09 (Border Weight Hierarchy)** JS implementation to actually check for the 4/3/1 hierarchy pattern, not just "2+ distinct weights."

3. **Add structural transition element handling** to GR-14. A dark inversion block between zones is a legitimate design pattern that creates a large visual gap by design. The gate should either: (a) measure only zone-to-zone transitions excluding structural elements, or (b) have a documented exception mechanism for "transition elements."

4. **Add GR-08 (No Decorative Elements) to executable code.** Currently defined in specification but not in the JS code block.

5. **Canonicalize gate IDs.** The fresh run's renumbering from the artifact's scheme breaks traceability. Either the run must use artifact IDs exactly, or a mapping table must be maintained.

### Process Amendments Needed

6. **Fix verdict logic.** The fresh run applied REFINE when REBUILD was required per artifact spec (identity FAIL = REBUILD, L64). Either: (a) the orchestrator must follow the artifact's verdict logic exactly, or (b) the artifact's verdict logic needs revision (e.g., "identity FAIL on browser-default false positives = REFINE, identity FAIL on genuine violations = REBUILD").

7. **Resolve conflicting gate result files.** The two files (`gate-results.md` and `_gate-results.md`) must be reconciled. If they represent different build passes, they should be clearly labeled with timestamps and build IDs.

8. **Report 768px gate results.** The artifact requires responsive gates at 768px. Screenshots exist but no gate data was reported.

---

## APPENDIX: GATE COVERAGE MATRIX

| Artifact Gate ID | Artifact Name | Fresh Run ID | Executed? | Result | Compliant? |
|-----------------|---------------|-------------|-----------|--------|------------|
| GR-01 | Border Radius Zero | GR-01 | YES | PASS | YES |
| GR-02 | Box Shadow None | GR-02 | YES | PASS | YES |
| GR-03 | Container Width | GR-03 | YES | PASS | YES |
| GR-04 | No Gradients | GR-04 | YES | PASS | YES |
| GR-05 | Warm Palette | GR-05 | YES | FAIL | YES (result correct) |
| GR-06 | Font Trinity | GR-06 | YES | PASS* | NO (binary violation) |
| GR-07 | No Pure B/W | (in GR-05) | MERGED | N/A | PARTIAL |
| GR-08 | No Decorative Elements | — | NO | — | NO (skipped) |
| GR-09 | Border Weight Hierarchy | GR-08 | YES | PASS | PARTIAL (weak impl) |
| GR-10 | Cross-Page DNA | GR-07/09/10 | PARTIAL | PASS | PARTIAL (decomposed, gaps) |
| GR-11 | BG Delta >= 15 | GR-11 | YES | FAIL | YES |
| GR-12 | Letter Spacing | GR-12 | YES | PASS | YES |
| GR-13 | Stacked Gap <= 120px | GR-13 | YES | PASS | YES |
| GR-14 | Visual Gap <= 150px | GR-14 | YES | FAIL | YES (no exception) |
| GR-15 | Single Margin <= 96px | GR-15 | YES | PASS | YES |
| GR-16 | All CSS Perceptible | — | NO | — | NO (omitted) |
| GR-17 | Density Stacking | GR-17 | YES | FAIL | YES |
| GR-18 | Ghost Mechanisms | GR-18 | YES | PASS | YES |
| GR-19 | Threshold Gaming | — | NO | — | ACCEPTABLE |
| GR-20 | Structural Echo | GR-20 | YES | PASS | YES |
| GR-21 | Cognitive Overload | — | NO | — | ACCEPTABLE |
| GR-22 | Color Zone Conflict | — | NO | — | ACCEPTABLE |
| GR-23 | Builder = Opus | — | NO | — | EXPECTED (pre-build) |
| GR-24 | Content Heterogeneity | — | NO | — | EXPECTED (pre-build) |
| GR-25 | Suppressor Count | — | NO | — | EXPECTED (pre-build) |
| GR-26 | Brief Size Cap | — | NO | — | EXPECTED (pre-build) |
| GR-27 | Builder Gate-Free | — | NO | — | EXPECTED (pre-build) |
| GR-28 | Recipe Format | — | NO | — | EXPECTED (pre-build) |
| GR-29 | Ship Threshold | — | NO | — | EXPECTED (post-PA) |
| GR-30 | Rebuild Threshold | — | NO | — | EXPECTED (post-PA) |
| GR-31 | Refine Threshold | — | NO | — | EXPECTED (post-PA) |
| GR-32 | Refine Agent Isolation | — | NO | — | EXPECTED (post-PA) |
| GR-33 | CSS Naming Mode | — | NO | — | ACCEPTABLE |
| GR-34 | Component Modulation | — | NO | — | ACCEPTABLE |
| GR-35 | Layout Driver | — | NO | — | ACCEPTABLE |
| GR-36 | Stage 0 Smoke | — | NO | — | EXPECTED (experiment) |
| GR-37 | Stage 1 Q20 | — | NO | — | EXPECTED (experiment) |
| GR-38 | Stage 2 H2H | — | NO | — | EXPECTED (experiment) |
| GR-39 | Stage 4 Flagship | — | NO | — | EXPECTED (experiment) |
| GR-40 | Single-Pass Default | — | NO | — | EXPECTED (policy) |
| GR-41 | Rebuild Not Fix | — | NO | — | EXPECTED (policy) |
| GR-42 | Gates Hidden | — | NO | — | EXPECTED (policy) |

**Executed: 19/42 | Compliant: 13/19 | Non-compliant: 3/19 | Partial: 3/19**

---

*End of compliance audit.*

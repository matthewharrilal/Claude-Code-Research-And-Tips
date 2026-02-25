# Gate Quality Audit — Are We Asking the Right Questions?

**Auditor:** gate-quality-auditor (Opus 4.6)
**Date:** 2026-02-24
**Task:** #2 — Audit gate quality
**Scope:** All 5 gate-related files (core.js, spec.md, preconditions.md, manifest.json, provenance.md) cross-referenced against the gate quality exploration (file 13) and the original synthesis info-loss findings (file 04)

---

## TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [Per-Gate Meaningfulness Assessment](#2-per-gate-meaningfulness-assessment)
3. [Missing Gates Analysis](#3-missing-gates-analysis)
4. [File 13 Recommendations — Implementation Status](#4-file-13-recommendations--implementation-status)
5. [Gate Calibration Assessment](#5-gate-calibration-assessment)
6. [File Splitting Effectiveness](#6-file-splitting-effectiveness)
7. [Brief Verification Gates (BV-01 through BV-04)](#7-brief-verification-gates)
8. [Cross-Reference with Original Synthesis Findings](#8-cross-reference-with-original-synthesis-findings)
9. [Findings Summary](#9-findings-summary)

---

## 1. EXECUTIVE SUMMARY

### Verdict: SUBSTANTIAL IMPROVEMENT with 7 remaining issues (2 SIGNIFICANT, 5 MINOR)

The gate system has undergone a major transformation from its pre-extraction state. The original "19/42 gates executed" problem (OM-09) is directly addressed by:
- File splitting (1,379 lines -> 5 files totaling ~2,020 lines)
- Self-executing `runGateRunner(page)` function (no cherry-picking)
- GR-48 meta-gate enforcing coverage completeness
- 6 code defects from file 13 all fixed in the implementation

The 8 new gates recommended by file 13 are all implemented (with renumbering). The 12 gates recommended for removal were all removed. The overall architecture is sound.

**Key numbers:**
- 37 gates in gate-runner scope (18R + 8R + 5A + 2D + 4BV)
- 31 with executable Playwright JS in `gate-runner-core.js` (1,437 lines)
- 6 reclassified to orchestrator (GR-23-28)
- 13 removed (GR-16, GR-29-32, GR-35-39, GR-40-42)
- 4 brief verification gates added (BV-01-04)
- 10 new gates added (GR-43, GR-44, GR-45, GR-46, GR-48, GR-49, GR-50, GR-51, GR-52, GR-53)

---

## 2. PER-GATE MEANINGFULNESS ASSESSMENT

For each of the 37 gates (18R + 8R + 5A + 2D + 4BV): Is it testing something meaningful? Could it pass while the page still looks bad?

### 2A. Identity Gates (GR-01 through GR-10) — REQUIRED

| Gate | Meaningful? | Could Pass While Page Looks Bad? | Assessment |
|------|------------|----------------------------------|------------|
| GR-01 Border Radius Zero | YES | No — border-radius is visible at any value | CLEAN. Binary, unambiguous. |
| GR-02 Box Shadow None | YES | Marginal — very subtle shadows could be invisible but still violate | CLEAN. Soul constraint. |
| GR-03 Container Width | YES — HIGHEST VALUE identity gate | No — container width is the most-violated constraint historically (60% rate) | CLEAN. Correctly uses `getBoundingClientRect` + `maxWidth`. |
| GR-04 No Gradients | YES | No — gradients are visually distinct from flat colors | CLEAN. |
| GR-05 Warm Palette | YES | Yes — page can be warm but still dull | WELL-IMPLEMENTED. The `isRenderedElement` filter (line 250-251) FIXES the false-positive problem from file 13 (FIX applied: HEAD/META/TITLE excluded). The `isCold()` heuristic (B > R+10 AND B > G+10) is adequate. GR-07 is now separate, fixing the ID confusion. |
| GR-06 Font Trinity | YES | Yes — correct fonts with terrible sizing is possible | WELL-IMPLEMENTED. `isRenderedElement` filter fixes false positives. Requires all 3 fonts present AND no violations. No more PASS* — binary only. |
| GR-07 No Pure B/W | YES | Yes — avoiding exact #000/#FFF while using very dark/light values is trivial gaming | CLEAN. Now has standalone code (lines 310-342). Checks more border properties than GR-05 did (borderTopColor, borderRightColor, etc.). |
| GR-08 No Decorative Elements | PARTIAL | Yes — absence of hrs/spacer-divs doesn't mean the page is well-designed | HEURISTIC BUT FUNCTIONAL. File 13 said "NO EXECUTABLE CODE" — this has been fixed. Code checks: standalone HRs (no adjacent heading), empty spacer divs (height > 10px), icon-only decorative elements. The heuristic covers the common cases. |
| GR-09 Border Weight Hierarchy | YES | Yes — having 4/3/1 weights doesn't mean they're used meaningfully | FIXED. File 13 identified the code as checking `>=2 weights` instead of the 4/3/1 hierarchy. Implementation now uses tolerance bands (lines 419-422): `hasPrimary (3.5-4.5)`, `hasSecondary (2.5-3.5)`, `hasTertiary (0.5-1.5)`. Requires primary AND (secondary OR tertiary). |
| GR-10 Cross-Page DNA | YES — HIGH VALUE compound gate | Yes — DNA properties can be present but compositionally dead | SIGNIFICANTLY IMPROVED. File 13 identified "only ~40% of DNA properties checked." Implementation now includes ALL missing sub-checks: callout 4px border (lines 460-464), `::selection` red (lines 466-481), `:focus-visible` 3px (lines 483-495), p max-width 70ch (lines 497-508), body line-height >= 1.6, h3 italic, header dark bg + red border. 9 sub-checks total, ALL required to pass (line 522: `dnaSubChecks.every(Boolean)`). |

**Identity Gate Summary:** All 10 are meaningful. All 6 defects identified in file 13 have been fixed. The `isRenderedElement` helper (lines 135-146) is used consistently, eliminating the false-positive class of errors.

### 2B. Perception Gates (GR-11 through GR-15, GR-44) — REQUIRED

| Gate | Meaningful? | Could Pass While Page Looks Bad? | Assessment |
|------|------------|----------------------------------|------------|
| GR-11 BG Delta >= 15 RGB | YES — HIGHEST VALUE perception gate | Yes — passing >=15 at every boundary doesn't prevent clustering at 15-17 | UNCHANGED but supplemented by GR-51 (distribution). This pair is now the strongest perception check. |
| GR-12 Letter Spacing >= 0.025em | YES | Yes — letter-spacing can be above threshold but applied meaninglessly | CLEAN. Correctly converts px to em using element font-size. |
| GR-13 Stacked Gap (CSS) | YES | Yes — CSS sum can be <=120px while visual gap is much larger (box model effects) | COMPLEMENTARY with GR-14. This dual approach (CSS sum + visual measurement) is well-designed. |
| GR-14 Visual Gap | YES | Yes — visual gap can pass if content is dense but boring | FIXED. File 13 identified "no exception mechanism for structural transition elements." Implementation now has structural transition detection (lines 648-662): checks for sibling elements with distinct background color from both adjacent zones. Smart fix. |
| GR-15 Single Margin <= 96px | YES | Yes — 96px margins can be ugly even if they pass | CLEAN. |
| GR-44 Trailing Void | YES — CRITICAL NEW GATE | No — a 300+ px trailing void is always a defect | NEW. Addresses the #1 defect flagged by 9/9 PA auditors (OM-14 from file 04). Implementation (lines 703-735) correctly finds last visible content bottom and measures gap to body bottom. Excludes SCRIPT/STYLE/META/LINK. 300px threshold is reasonable. |

**Perception Gate Summary:** All 6 are meaningful. GR-14 structural transition fix is the most notable improvement. GR-44 is the single most valuable new gate (addresses the biggest known blind spot).

### 2C. Anti-Pattern Gates (GR-17 through GR-22)

| Gate | Tier | Meaningful? | Assessment |
|------|------|------------|------------|
| GR-17 Density Stacking | REC | YES | FIXED. File 13 identified 262 false positives from table cells. Implementation now separates content (>=12px) from table cells (>=4px) — lines 791-810. Clean separation. |
| GR-18 Ghost Mechanisms | REC | YES | UNCHANGED. Checks sub-perceptual borders (<0.5px) and opacity (<0.1). Clean. |
| GR-19 Threshold Gaming | REC | PARTIAL | NOW HAS CODE. File 13 said "NO EXECUTABLE CODE." Implementation (lines 845-892) checks both BG delta clustering (>50% at 15-17) AND letter-spacing floor-hugging (>30% at 0.025-0.028 combined with >30% BG floor). The compound condition is more nuanced than the original proposal. **CONCERN:** The 50% threshold remains somewhat arbitrary as file 13 noted, but having code is far better than having no code. |
| GR-20 Structural Echo | REC | YES | UNCHANGED. Checks for 3+ consecutive identical section signatures. |
| GR-21 Cognitive Overload | ADV | PARTIAL | NOW HAS CODE. File 13 said "NO EXECUTABLE CODE." Implementation (lines 928-978) uses a background-color proxy: counts distinct bg colors per 900px viewport slice, flags if >4. This is a reasonable simplification of the judgment-required concept. Correctly labeled THEORETICAL. |
| GR-22 Color Zone Conflict | ADV | PARTIAL | NOW HAS CODE. File 13 said "NO EXECUTABLE CODE." Implementation (lines 980-1035) checks if primary red (#E83025 range) is used as background (>2 bg uses = conflict). This is a narrower check than "semantic consistency" but addresses the specific red-role violation pattern. |

**Anti-Pattern Summary:** All 3 previously unimplemented gates (GR-19, GR-21, GR-22) now have executable code. The implementations use reasonable heuristic proxies rather than attempting the impossible (judgment calls in binary gates). This is the right approach.

### 2D. Wave 2 Gates (GR-45, GR-46, GR-50, GR-51, GR-52, GR-53) — NEW

| Gate | Tier | Meaningful? | Assessment |
|------|------|------------|------------|
| GR-45 Typography Variation | REC | YES | Addresses DR-02/DR-03 (heading size flattening). Uses band-based deduplication (4px tolerance) with H2+H3 fallback when <3 H2s exist. Well-designed. |
| GR-46 Print Stylesheet | ADV | MINOR | Checks for `@media print` rule existence. Low-severity but trivial to implement. Appropriate as ADVISORY. |
| GR-50 Conviction Statement | ADV | PARTIAL | Checks for `<!-- CONVICTION:` comment with >=3 sentences. Content quality check (metaphor, arc, strategy keywords) is a rough proxy. Appropriate as ADVISORY. |
| GR-51 BG Delta Distribution | REC | YES — HIGH VALUE | Addresses the DRIFT pattern (file 13 GR-43 proposal). Checks: >=50% of deltas >=25 RGB, stddev >=8, AND middle boundaries must have high deltas. The middle-boundary check is an improvement over the original proposal. |
| GR-52 Section Height Variation | REC | YES | Checks for >=3 distinct height bands (50px tolerance). Catches the structural echo pattern at a macro level. |
| GR-53 Density Arc Direction | ADV | MARGINAL | Checks that densest section is NOT first or last. The theory (content should crescendo in the middle) is reasonable but has many valid exceptions (hero patterns, footer-heavy layouts). Correctly labeled ADVISORY and THEORETICAL. |

**Wave 2 Summary:** GR-51 is the standout gate (directly addresses the #1 undetected quality gap: DRIFT clustering). GR-52 adds a useful macro-level structural check. GR-53 is the weakest (too many valid exceptions) but harmless as ADVISORY.

### 2E. Brief Verification Gates (BV-01 through BV-04) — REQUIRED

See Section 7 for detailed analysis.

### 2F. Diagnostic Gates (GR-33, GR-34) — Report-Only

These are listed in the manifest and spec but have NO code in `gate-runner-core.js`. The provenance file (line 128) lists them as "active Playwright gates" but the core.js header (line 20) says "Diagnostic (2): GR-33, GR-34 (report-only, no code in this file)." This is internally consistent — they are documented as existing but deliberately unimplemented. The spec correctly labels them ADVISORY diagnostic-only. No issue.

---

## 3. MISSING GATES ANALYSIS

### 3A. What file 13 recommended vs what was implemented

| File 13 Proposal | Implemented As | Status |
|-------------------|---------------|--------|
| GR-43: Background Delta Distribution | **GR-51** (renumbered to avoid collision) | IMPLEMENTED. GR-43 slot was repurposed for Self-Evaluation Comment. |
| GR-44: Trailing Whitespace Void | **GR-44** | IMPLEMENTED as proposed. |
| GR-45: Typography Variation | **GR-45** | IMPLEMENTED with improvements (band-based tolerance, fallback). |
| GR-46: Print Stylesheet | **GR-46** | IMPLEMENTED as proposed. |
| GR-47: Brief Line Budget | **BV-01** (absorbed per CONFLICT-007) | IMPLEMENTED as brief verification gate. Provenance correctly documents the skip. |
| GR-48: Gate Coverage Completeness | **GR-48** | IMPLEMENTED as proposed. |
| GR-49: Gate Result File Integrity | **GR-49** | IMPLEMENTED as proposed. |
| GR-50: Conviction Statement | **GR-50** | IMPLEMENTED with HTML comment check (different approach -- checks in built HTML rather than separate file). |

**All 8 recommended new gates are implemented.** The renumbering (GR-43->GR-51, GR-47->BV-01) is documented in the provenance file with reasons.

### 3B. Additional gates added beyond file 13 recommendations

| Gate | What It Does | Value Assessment |
|------|-------------|------------------|
| GR-43 (Self-Evaluation Comment) | Checks for `<!-- SELF-EVALUATION:` in HTML | MEDIUM -- ensures builder self-assessed. Different from file 13's GR-43 proposal (bg distribution). |
| GR-52 (Section Height Variation) | Checks for >=3 distinct height bands | HIGH -- catches structural echo at macro level. Not in file 13. |
| GR-53 (Density Arc Direction) | Checks densest section isn't first/last | LOW -- too many valid exceptions. Not in file 13. |

### 3C. Are there STILL missing gates?

After the additions, the remaining blind spots from file 13 Section 2C are:

| Blind Spot | Gate Coverage Now | Remaining Gap |
|------------|------------------|---------------|
| Trailing void | GR-44 | CLOSED |
| BG delta clustering/drift | GR-51 | CLOSED |
| Typography flattening | GR-45 | CLOSED |
| Gate coverage completeness | GR-48 | CLOSED |
| Result file integrity | GR-49 | CLOSED |
| Brief line budget | BV-01 | CLOSED |
| Print stylesheet | GR-46 | CLOSED |
| Conviction statement | GR-50 | CLOSED |
| **Content Map interpretive accuracy** | NONE | OPEN -- no gate verifies Content Map output quality. File 13 noted "Gates never see the Content Map." This remains true. |
| **Information creation quality** | NONE | OPEN -- no gate checks brief content quality (only volume via BV-01). File 13: "This is the hardest gap to close." |
| **Responsive BEHAVIOR (transitions)** | Partial (re-run at 768px) | PARTIALLY OPEN -- gates re-run at 768px but don't test the transition itself. |
| **Interaction states** | Partial (GR-10 focus-visible) | PARTIALLY OPEN -- only :focus-visible is checked, not hover/active. |

**Assessment:** The two remaining OPEN gaps (Content Map quality, Information creation quality) are JUDGMENT-REQUIRED dimensions that cannot be expressed as binary DOM checks. File 13 correctly identified these as belonging to the PA domain, not the gate domain. The gate system is at its proper boundary -- further expansion would mean attempting judgment calls in binary gates, which the exploration correctly warns against.

---

## 4. FILE 13 RECOMMENDATIONS -- IMPLEMENTATION STATUS

### 4A. Gates to ADD (8 recommended)

| Recommendation | Status | Evidence |
|---------------|--------|----------|
| GR-43 BG Delta Distribution | IMPLEMENTED as GR-51 | core.js lines 1170-1223 |
| GR-44 Trailing Void | IMPLEMENTED | core.js lines 702-735 |
| GR-45 Typography Variation | IMPLEMENTED | core.js lines 1048-1108 |
| GR-46 Print Stylesheet | IMPLEMENTED | core.js lines 1110-1134 |
| GR-47 Brief Line Budget | ABSORBED into BV-01 | core.js lines 33-67, per CONFLICT-007 |
| GR-48 Gate Coverage | IMPLEMENTED | core.js lines 1330-1374 |
| GR-49 Result File Integrity | IMPLEMENTED | core.js lines 1376-1416 |
| GR-50 Conviction Statement | IMPLEMENTED | core.js lines 1136-1168 |

**Score: 8/8 IMPLEMENTED**

### 4B. Gates to REMOVE (12 recommended)

| Recommendation | Status | Evidence |
|---------------|--------|----------|
| GR-16 (meta-gate) | REMOVED, absorbed into verdict logic | provenance line 35, core.js verdict logic lines 752-778 |
| GR-29-32 (verdict) | REMOVED to orchestrator | provenance lines 70-74 |
| GR-35 (layout driver) | REMOVED to PA | provenance line 75 |
| GR-36-39 (experiment) | REMOVED to experiment protocol | provenance lines 76-79 |
| GR-40-42 (policy) | REMOVED to orchestrator | provenance lines 80-82 |

**Score: 12/12 REMOVED** (with documented relocation to proper homes)

### 4C. Gates to RECLASSIFY (7 recommended)

| Recommendation | Status | Evidence |
|---------------|--------|----------|
| GR-19 REC -> ADV | NOT DONE. Kept as RECOMMENDED. | manifest.json tiers.recommended.gates includes GR-19 |
| GR-21 REC -> ADV | DONE | spec.md line 101, manifest.json tiers.advisory |
| GR-22 REC -> ADV | DONE | spec.md line 102, manifest.json tiers.advisory |
| GR-25 ADV -> REC | DONE via reclassification to orchestrator (FIX-094) | preconditions.md line 63-65 |
| GR-26 ADV -> REC | DONE via reclassification to orchestrator | preconditions.md line 67-69 |
| GR-27 ADV -> REC | DONE via reclassification to orchestrator | preconditions.md line 71-73 |
| GR-28 ADV -> REC | DONE via reclassification to orchestrator | preconditions.md line 75-78 |

**Score: 6/7 DONE.** GR-19 was kept as RECOMMENDED instead of being downgraded to ADVISORY. This is a deliberate choice -- the implementation now has executable code (lines 845-892), which strengthens its case for RECOMMENDED. **NOT A DEFECT** -- file 13's recommendation was based on "no executable code", which is no longer true.

### 4D. Code Defects to FIX (6 identified)

| Defect | Status | Evidence |
|--------|--------|----------|
| GR-05 false positives (HEAD/META/TITLE) | FIXED | core.js `isRenderedElement` helper (lines 135-146) applied at line 251 |
| GR-06 false positives + PASS* | FIXED | `isRenderedElement` at line 287. Binary status only (line 304: PASS or FAIL). |
| GR-09 weak threshold (>=2 vs 4/3/1) | FIXED | Tolerance bands at lines 419-422. Requires primary + secondary/tertiary. |
| GR-10 missing sub-checks | FIXED | All 9 DNA sub-checks present (lines 446-533). |
| GR-14 no structural transition handling | FIXED | Structural transition detection at lines 648-662. |
| GR-17 table cell false positives | FIXED | Separate content (>=12px) and table cell (>=4px) selectors at lines 791-810. |

**Score: 6/6 FIXED**

---

## 5. GATE CALIBRATION ASSESSMENT

### 5A. Thresholds Set Correctly

| Gate | Threshold | Assessment |
|------|-----------|------------|
| GR-03 Container Width 940-960px | Tight but correct | Historical evidence: 60% violation rate confirms this constraint is real and frequently violated. |
| GR-11 BG Delta >=15 RGB | Correct | Proven by Gas Town (delta 11 and 8 at two boundaries). Supplemented by GR-51 distribution check. |
| GR-12 Letter Spacing >=0.025em | Correct | Below this, letter-spacing is sub-perceptual -- the definition of a ghost mechanism. |
| GR-13 Stacked Gap <=120px | Correct | Proven boundary from S-09 research. CSS sum, not visual gap. |
| GR-14 Visual Gap <=150px | Correct | 30px above CSS threshold to allow for box model effects. Structural transitions excluded. |
| GR-15 Single Margin <=96px | Correct | Established by spatial soul constraint research. |
| GR-44 Trailing Void <=300px | Possibly generous | Gas Town had ~5 viewport-heights (~4,500px). 300px could allow generous footer padding. File 13 acknowledged this concern. Consider 200px as a tighter threshold, but 300px catches the catastrophic case. |
| GR-51 BG Distribution >=50% above 25, stddev >=8 | Possibly strict | File 13 acknowledged "calibrated to Gas Town data." Content with intentionally subtle transitions could fail. Appropriate as RECOMMENDED (not REQUIRED). |
| GR-45 Typography >=2 bands, 4px tolerance | Correct | 4px tolerance handles subpixel rendering. Band fallback (H2+H3 combined) for small pages is smart. |
| GR-52 Section Height >=3 bands, 50px tolerance | Reasonable | Could false-positive on very short pages with 2 sections, but the `<3 sections` early return handles this. |

### 5B. Thresholds Too Strict (False Positive Risk)

| Gate | Concern | Severity |
|------|---------|----------|
| GR-08 No Decorative Elements | Empty divs with height >10px could be intentional spacers in some designs | MINOR -- soul constraint says no decorative elements, so strictness is appropriate |
| GR-53 Density Arc | Many valid pages have hero sections (densest at top) or signature closings (densest at bottom) | MINOR -- correctly ADVISORY, won't block anything |

### 5C. Thresholds Too Loose (Miss Risk)

| Gate | Concern | Severity |
|------|---------|----------|
| GR-07 No Pure B/W | Only catches exact #000000 and #FFFFFF. rgb(1,1,1) or rgb(254,254,254) pass. | MINOR -- near-pure colors are visually indistinguishable from pure ones, and the soul constraint is about the extreme case |
| GR-21 Cognitive Overload <=4 distinct bgs | Background-only proxy misses non-bg visual channels (typography weight, border presence, spacing density) | MINOR -- correctly ADVISORY and THEORETICAL |

### 5D. Calibration Verdict

No thresholds are critically miscalibrated. The most questionable is GR-44's 300px (could be 200px for tighter control) and GR-51's distribution requirements (could be strict for intentionally subtle pages). Both are at appropriate tiers -- GR-44 is REQUIRED (catches the catastrophic case) and GR-51 is RECOMMENDED (flags the quality concern without blocking).

---

## 6. FILE SPLITTING EFFECTIVENESS

### 6A. Architecture Assessment

| File | Lines | Audience | Purpose | Well-Targeted? |
|------|-------|----------|---------|----------------|
| gate-runner-core.js | 1,437 | Orchestrator (copy into Playwright) | All executable JS | YES -- single function calls, no cherry-picking |
| gate-runner-spec.md | 189 | Pipeline designers, auditors | Human-readable spec | YES -- concise, no code |
| gate-runner-preconditions.md | 84 | Orchestrator (pre-build) | Text-based pre-build checks | YES -- separate execution context |
| gate-manifest.json | 159 | Orchestrator (table of contents) | JSON TOC, tiers, execution order | YES -- machine-readable, structured |
| gate-runner-provenance.md | 151 | Researchers, historians | History, traceability, council rulings | YES -- never needed during execution |

**Total: ~2,020 lines across 5 files** vs the original 1,379 lines in 1 file.

The total line count INCREASED (by ~640 lines), but the lines each audience must process DECREASED:
- Orchestrator: 1,379 -> ~1,596 (manifest + core.js) -- but core.js is EXECUTED, not READ. Orchestrator only needs to READ manifest (159 lines) then COPY core.js into Playwright. Effective read burden: **159 lines** (88% reduction).
- Auditors: 1,379 -> 189 lines (86% reduction).
- Researchers: 1,379 -> 151 lines (89% reduction).

### 6B. Will the Orchestrator Reliably Process All 5 Files?

**YES, for the right reason.** The orchestrator does NOT need to read all 5 files. Its workflow:
1. Read `gate-manifest.json` (159 lines) -- learn what to run and in what order
2. Execute `gate-runner-core.js` by copying it into Playwright -- it is self-contained
3. Run `gate-runner-preconditions.md` checks during Phase 1 (84 lines, separate timing)
4. Never read spec.md or provenance.md during execution

The manifest's `executionOrder` (lines 62-111) is explicit and sequential. Each step names the function and its prerequisites. This eliminates the selective attention problem (D-05) because the orchestrator does not choose which gates to run -- it calls functions that run ALL gates in their category.

### 6C. Self-Executing Architecture -- The Key Innovation

The most important architectural decision is making `gate-runner-core.js` self-executing rather than menu-based:

```
Old: Orchestrator reads 1,379 lines, selects which gates to run -> 19/42 executed (45%)
New: Orchestrator calls runGateRunner(page) -> ALL 17 REQUIRED gates run automatically
```

GR-48 provides the backstop: even if the orchestrator somehow skips a function call, the coverage meta-gate will detect the gap and report INCOMPLETE.

### 6D. Splitting Issues Found

| Issue | Severity | Details |
|-------|----------|---------|
| **SIGNIFICANT-01: GR-43 ID collision resolution creates confusion** | SIGNIFICANT | The original file 13 proposed GR-43 for BG Delta Distribution. The implementation uses GR-43 for Self-Evaluation Comment and renumbers BG Delta Distribution to GR-51. This is documented in provenance (line 27: "GR-51 renumbered from source GR-43") and manifest (note: "GR-51 renumbered from source GR-43 to avoid collision"). However, the collision means anyone reading file 13's recommendations and looking for "GR-43 Background Delta Distribution" will find "GR-43 Self-Evaluation Comment" instead. The provenance trail is clear but the numbering is potentially confusing. |
| MINOR-01: core.js is 1,437 lines -- still large | MINOR | While the orchestrator copies it rather than reads it, a future maintainer editing the file faces a 1,437-line JS file. The 5-section structure with clear headers mitigates this. |
| MINOR-02: spec.md line 130 says ">=4/12 RECOMMENDED" but manifest says ">=4/8" | MINOR | spec.md: "All 17 REQUIRED gates have results + >= 4/12 RECOMMENDED". manifest.json tiers.recommended.count: 8. The GR-48 implementation (core.js line 1340) checks against 8 RECOMMENDED gates. The spec.md "/12" appears to be a stale reference. |

---

## 7. BRIEF VERIFICATION GATES (BV-01 through BV-04)

### 7A. Individual Assessment

| Gate | What It Checks | Meaningful? | Well-Calibrated? | Assessment |
|------|---------------|------------|-------------------|------------|
| BV-01 Tier Line Budget | Line counts per tier (T1>=12, T2>=6, T3>=40, T4>=32, ContentMap>=24) with 80% threshold | YES -- catches C-06 (Tier 4 underrun) | YES -- 80% threshold prevents false failures from slight variations while catching serious underruns | WELL-DESIGNED. Also absorbs file 13's GR-47 proposal (CONFLICT-007). |
| BV-02 Background Delta | All consecutive hex pairs in brief text must differ by >=15 RGB | YES -- catches E-01/E-02 (brief-specified colors that violate delta minimum) | POSSIBLY STRICT -- checks ALL consecutive hex pairs, not just zone backgrounds. A brief mentioning two similar accent colors in a non-background context would fail. | FUNCTIONAL but scope is broader than intended. The preconditions.md (line 24) acknowledges: "Errs on the side of strictness." |
| BV-03 Recipe Format | Recipe verbs : checklist verbs ratio >= 3:1 | YES -- THE single most validated format finding (Recipe = DESIGNED N=2, Checklist = FLAT N=2) | REASONABLE -- 3:1 ratio is strict. A brief saying "Build X, then Verify Y" (ratio 1:1) would fail. But the research clearly shows recipe voice dominance is critical. | WELL-CALIBRATED for the evidence. |
| BV-04 Suppressor Scan | Zero suppressor patterns in builder-facing content | YES -- 20 known suppressors, ALL correlate with degradation | POSSIBLY STRICT -- "sample 2-4" pattern could match recipe instructions, not just suppressors | **SIGNIFICANT-02:** The regex pattern for S-01 (`/sample\s+\d+-\d+/i`) could produce false positives. The CONTEXT matters -- "sample 2-4 mechanisms" is a suppressor but "sample 3-5 values from each zone's palette" is a recipe instruction. The current regex cannot distinguish these. |

### 7B. BV Gate Architecture

The BV gates run pre-build on the brief text (not Playwright). They have a dedicated function `runBriefVerification(briefText)` at the top of core.js. This is architecturally clean -- pre-build checks are separated from post-build DOM inspection.

The execution order in manifest.json correctly places BV gates at step 1 (before builder spawn). Failure action is "return brief to assembler (max 2 revision cycles)" -- the 2-cycle cap prevents infinite loops.

---

## 8. CROSS-REFERENCE WITH ORIGINAL SYNTHESIS FINDINGS

### 8A. The "19/42 gates executed" problem (OM-09)

**Original finding (file 04):** "24 of 42 gates not executed or not reported (GR-07, GR-08, GR-16, GR-19-22, GR-23-42)"

**Resolution:**
- GR-07, GR-08: NOW HAVE CODE in core.js. Would execute.
- GR-16: ABSORBED into verdict logic. No longer a standalone gate.
- GR-19, GR-21, GR-22: NOW HAVE CODE in core.js. Would execute.
- GR-20: Already had code. The fresh run executed it (maxConsecutive=1).
- GR-23-28: RECLASSIFIED to orchestrator Section 9. No longer gate-runner scope.
- GR-29-32: REMOVED to orchestrator verdict logic.
- GR-33-34: Diagnostic-only, no code. Documented as report-only.
- GR-35: REMOVED to PA (not automatable).
- GR-36-39: REMOVED to experiment protocol.
- GR-40-42: REMOVED to orchestrator process checks.

**After these changes:** Of the 24 gates that did not execute, 7 now have code (GR-07, GR-08, GR-19, GR-21, GR-22 + GR-43 self-eval + GR-44 trailing void), 1 was absorbed (GR-16), 6 were reclassified (GR-23-28), 4 were removed to orchestrator (GR-29-32), 1 to PA (GR-35), 4 to experiments (GR-36-39), 3 to orchestrator process (GR-40-42), and 2 remain diagnostic-only (GR-33-34).

**The 19/42 execution rate would become: ~31/37 = 84%** (all gates with code in core.js). The remaining 6 are GR-33, GR-34 (diagnostic, no code), GR-46 (advisory), GR-50 (advisory), GR-53 (advisory) -- all advisory/diagnostic with code that CAN execute but might be skipped by orchestrator discretion.

**GR-48 ensures the critical 17/17 REQUIRED gates always execute.** This is the definitive fix for OM-09.

### 8B. The "GR-19 whitespace voids not run" finding (OM-15)

**Original finding (file 04):** "GR-19 (Whitespace Voids) gate not executed -- would have caught the trailing void programmatically"

**Note on numbering:** The original synthesis refers to "GR-19 whitespace voids" but the current system maps GR-19 to "Threshold Gaming." The whitespace void detection is now GR-44 (REQUIRED). The numbering confusion is from pre-extraction: the original artifact used different numbering than the current system.

**Resolution:** GR-44 (Trailing Whitespace Void) is now REQUIRED and has executable code. It would catch the Gas Town trailing void. Additionally, GR-14 (Visual Gap) has structural transition handling that also contributes to whitespace detection.

### 8C. Root Cause 5 coverage

**Original (file 04):** "Artifact specifies 42 gates -> gate runner is 1,380 lines of JavaScript -> orchestrator executes a subset of 18 gates -> critical gates in the unexecuted 24 -> trailing void goes undetected"

**Resolution mechanism:** The 3-mechanism solution from file 13 Section 6F is fully implemented:
1. Reduced what orchestrator sees: manifest.json (159 lines) replaces 1,379-line artifact. DONE.
2. Self-executing code: `runGateRunner(page)` runs all required gates automatically. DONE.
3. GR-48 hard stop: missing required gates = INCOMPLETE verdict. DONE.

---

## 9. FINDINGS SUMMARY

### SIGNIFICANT (2)

| ID | Finding | Impact | Recommendation |
|----|---------|--------|----------------|
| SIGNIFICANT-01 | GR-43 ID collision: file 13 proposed GR-43 for BG Delta Distribution but implementation uses GR-43 for Self-Evaluation Comment, renumbering to GR-51. Cross-referencing file 13 with implementation requires knowledge of the renumbering. | Confusion risk when tracing recommendations to implementations | Document the GR-43->GR-51 renumbering in a cross-reference table in spec.md or add a note to any document that references the original GR-43 proposal |
| SIGNIFICANT-02 | BV-04 suppressor regex `/sample\s+\d+-\d+/i` cannot distinguish suppressor context ("sample 2-4 mechanisms") from recipe context ("sample 3-5 values from each zone's palette"). False positive risk on recipe-format briefs. | Could reject valid briefs that use "sample N-M" in recipe instructions | Narrow the regex to match known suppressor phrases more precisely, e.g., `/sample\s+\d+-\d+\s+(mechanisms?|techniques?|from\s+(the\s+)?catalog)/i` |

### MINOR (5)

| ID | Finding | Impact | Recommendation |
|----|---------|--------|----------------|
| MINOR-01 | core.js is 1,437 lines -- still a large single file for maintenance | Low -- orchestrator copies it, does not read it line by line | Consider section-level comments as documentation (already present) |
| MINOR-02 | spec.md line 130 says ">=4/12 RECOMMENDED" but actual count is 8 | Confusion for spec readers | Fix spec.md to say ">=4/8" |
| MINOR-03 | GR-44 trailing void threshold (300px) may be too generous for pages with minimal footer content | Potential to miss moderate voids (150-300px range) | Consider 200px threshold or make content-dependent |
| MINOR-04 | GR-21 and GR-22 now have code but remain ADVISORY -- the manifest and spec do not note they were "upgraded" from "no code" | Minor documentation gap | Add note in provenance Wave 2 changelog |
| MINOR-05 | GR-33 and GR-34 listed as "active Playwright gates" in provenance line 128 but have no code in core.js | Misleading -- they are reference gates with no implementation | Clarify in provenance: "GR-33, GR-34: documented in spec, no Playwright code (diagnostic reporting by PA auditors)" |

### CLEAN (no issues)

The following areas are well-implemented with no findings:
- Identity gates GR-01 through GR-10: All 6 code defects from file 13 are fixed
- Perception gates GR-11 through GR-15: Clean implementations, GR-14 structural transition fix is excellent
- GR-44 (trailing void): The single most valuable new gate, directly addressing the #1 known defect
- GR-48 (coverage completeness): The definitive solution to the 19/42 execution problem
- Gate splitting architecture: Correct audience targeting, self-executing code, manifest-driven orchestration
- Provenance documentation: Complete change log with wave-by-wave tracking
- Verdict logic: Clean absorption of GR-16, consistent REBUILD/REFINE/INCOMPLETE/PROCEED_TO_PA categories

---

## OVERALL ASSESSMENT

**The gate system has transformed from 45% coverage with 6 code defects to projected 84%+ coverage with 0 code defects.** The original "19/42 gates executed" failure mode is structurally prevented by the self-executing architecture and GR-48 meta-gate. All 8 new gates from file 13 are implemented. All 12 removal recommendations were followed. All 6 code defects were fixed. The file splitting correctly targets different audiences.

The 2 SIGNIFICANT findings (GR-43 renumbering confusion, BV-04 regex false positive risk) are implementation details, not architectural problems. They can be fixed with documentation updates and regex refinement respectively.

The gate system is now at its proper boundary: catching binary compliance violations and measurable quality signals. The remaining blind spots (Content Map quality, information creation quality) are correctly identified as PA domain rather than gate domain. Attempting to gate these would require judgment calls that violate the binary gate principle.

---

*Audit complete. 37 gates reviewed, 4 BV gates reviewed, 5 files cross-referenced, 8 file 13 add recommendations verified (8/8), 12 removal recommendations verified (12/12), 7 reclassification recommendations verified (6/7, 1 justified deviation), 6 code defect fixes verified (6/6). 2 SIGNIFICANT + 5 MINOR findings.*

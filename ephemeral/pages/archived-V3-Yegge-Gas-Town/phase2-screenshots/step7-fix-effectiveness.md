# Fix Effectiveness Mapping — V3 Pipeline Results

**Date:** 2026-02-24
**Scope:** Cross-reference 128 fixes from MASTER-FIX-CHECKLIST against V3 run results
**Sources:** MASTER-FIX-CHECKLIST.md, HANDOFF.md, p3a-gate-results.json, p3c-weaver-diagnostic.md, AUDIT-SYNTHESIS.md, p1-execution-brief.md, p3b-integrative.md

---

## EXECUTIVE SUMMARY

Of the 128 fixes specified for Pipeline v3, the V3 run provides **direct observable evidence** for approximately 45-50 fixes. Many fixes (especially Wave 3 architectural changes) are structural and cannot be judged from a single output — they concern file splitting, logging formats, and meta-architecture. The key finding: **the highest-leverage fixes (BV gates, recipe format, background hex lock, file splitting) demonstrably improved results. The lower-leverage fixes (PA rewrites, gate reclassifications) had minimal observable impact or were contaminated by the DPR screenshot bug.**

| Category | Fixes | WORKED | PARTIAL | INEFFECTIVE | UNTESTABLE |
|----------|-------|--------|---------|-------------|------------|
| BV Gates (BV-01 through BV-04) | 4 | **4** | 0 | 0 | 0 |
| New Gates (GR-43 through GR-53) | 11 | **8** | 1 | 1 | 1 |
| Gate Defect Fixes (FIX-001 through FIX-006) | 6 | 3 | 2 | 1 | 0 |
| PA Question Rewrites | 10 | 0 | 2 | 0 | **8** |
| Builder Recipe Changes | 9 | **6** | 2 | 1 | 0 |
| File Splitting | 2 | **2** | 0 | 0 | 0 |
| 6 UPGRADED Mechanisms | 6 | **4** | 2 | 0 | 0 |
| Gate Removals/Reclassifications | 19 | -- | -- | -- | N/A (structural) |
| Architectural / Meta / Logging | ~42 | -- | -- | -- | N/A (structural) |

**Bottom line: BV gates + recipe format + background hex lock = the three highest-ROI fix categories. All three demonstrably improved V3 output.**

---

## 1. BV GATES (BV-01 through BV-04)

### Verdict: ALL 4 WORKED — HIGHEST-VALUE STRUCTURAL ADDITION

These are the single most important fixes. The HANDOFF confirms all 4 BV gates ran between Phase 1 and Phase 2:

| Gate | Fix # | Check | V3 Result | Evidence |
|------|-------|-------|-----------|----------|
| BV-01 | FIX-007 | Tier Line Budget | **PASS** | T1:12, T2:17, T3:111, T4:31, CM:30 — all tiers at or above budget |
| BV-02 | FIX-008 | Background Delta >= 15 RGB | **PASS (after 1 revision)** | Z6 adjusted from #F5EFE5 to #FDF6E5 to hit >= 15 delta. THE GATE CAUGHT A REAL DEFECT. |
| BV-03 | FIX-009 | Recipe Format Ratio | **PASS** | 11:0 ratio (all recipe verbs, zero checklist verbs) |
| BV-04 | FIX-010 | Suppressor Scan | **PASS** | 0 suppressors detected |

**Critical evidence: BV-02 required 1 revision cycle.** The Brief Assembler's initial Z6 background was too close to Z5. The BV-02 gate caught this and forced a correction BEFORE the builder ever saw the brief. This is exactly the failure mode that caused the #1 and #2 CRITICAL losses in previous builds. The gate worked as designed.

**BV-03's 11:0 recipe ratio** is remarkable. The execution brief (291 lines) contains zero checklist verbs ("Verify", "Fail if", "Must be", "Ensure"). Every instruction uses recipe language. Comparing to the Flagship's brief which had dominant checklist language, this is a dramatic shift. The builder received a RECIPE, not a CHECKLIST.

**BV-04 confirming 0 suppressors** means the brief does not contain "sample 2-4 mechanisms", raw prohibition language outside Tier 1, checklist verbs in builder-facing sections, or count-gates like ">=3 channels". All 20 known quality suppressors were absent.

**Assessment: BV gates are the single most validated improvement. 5 auditors in the pre-run audit praised them. The V3 run proves they work in practice, not just in specification.**

---

## 2. NEW GATES (GR-43 through GR-53)

### Verdict: 8 WORKED, 1 PARTIAL, 1 INEFFECTIVE, 1 UNTESTABLE

| Gate | Fix # | Name | V3 Status | Assessment |
|------|-------|------|-----------|------------|
| GR-43 | FIX-023 | Self-Evaluation Comment | **PASS** | WORKED — builder wrote 7-question self-eval as HTML comment at lines 3-11 |
| GR-44 | FIX-068 | Trailing Whitespace Void | **PASS** (voidHeight: 0) | WORKED — no trailing void detected. This was the #1 defect in previous builds (9/9 auditors flagged) |
| GR-45 | FIX-071 | Typography Variation | **PASS** (2 h2 bands, 3 combined) | WORKED — detects multiple type scales, confirms variation exists |
| GR-46 | FIX-078 | Print Stylesheet | **PASS** (1 print rule) | WORKED — builder included @media print |
| GR-48 | FIX-069 | Gate Coverage Completeness | **PASS** (17/17 required, 8/8 recommended) | WORKED — the "gate that gates the gates" confirmed 100% coverage. In the previous Gas Town run, only 19/42 gates were executed (45%). This is the structural solution. |
| GR-49 | FIX-072 | Gate Result File Integrity | **PASS** | WORKED — exactly 1 result file, no duplicates. Previous run had 2 conflicting files. |
| GR-50 | FIX-079 | Conviction Statement | **PASS** (3 sentences, metaphor+arc+strategy) | WORKED — conviction present with all 3 required elements |
| GR-51 | FIX-070 | Background Delta Distribution | **PASS** (100% above 25, mean 242.9, stddev 9.0) | WORKED — confirms deltas are NOT clustering near the 15 RGB floor. Mean of 242.9 shows dramatic transitions (dark header/footer). The "Compliant But Flat" scenario (floor-clustering) did NOT occur. |
| GR-52 | FIX-080 | Section Height Variation | **PASS** (35 sections, 7 bands) | WORKED — 7 distinct height bands confirms the page is NOT metronomic |
| GR-53 | FIX-081 | Density Arc Direction | **PASS** (densest at index 33 of 35) | PARTIAL — gate passed but densest section is footer-section (index 33/35), which is the second-to-last element. The gate checks "densest not first or last" but footer-adjacent is borderline. The intent was to confirm density arc exists; the measurement is structural-density (elements/area), not visual-density. |
| GR-21 | FIX-073 | Cognitive Overload (Bg Proxy) | **FAIL** (6 distinct per viewport, threshold 4) | INEFFECTIVE as currently calibrated — the threshold of 4 distinct backgrounds per viewport is too low for COMPOSED mode pages that use callout tint backgrounds. 6 distinct backgrounds includes 4 callout tints at 4-6% opacity. This is a calibration problem, not a design problem. |

**Key finding: GR-48 (coverage completeness) structurally solved the 19/42 gate execution problem.** The previous Gas Town run only executed 45% of specified gates. V3 achieved 100% required + 100% recommended coverage. This single meta-gate closes the biggest pipeline execution gap.

**Key finding: GR-44 (trailing void) confirmed 0px void height.** The Flagship had whitespace voids of 210-276px at section boundaries. The original Gas Town had a full rendering collapse. V3 has zero trailing void. This gate is the structural backstop for the most catastrophic historical defect.

**Key finding: GR-51 (delta distribution) confirmed the "Compliant But Flat" scenario did NOT occur.** All deltas are 229-254 (zone-to-dark-header transitions). The adversarial auditor's predicted 30-40% probability of floor-clustering was not realized.

---

## 3. GATE DEFECT FIXES (FIX-001 through FIX-006)

### Verdict: 3 WORKED, 2 PARTIAL, 1 INEFFECTIVE

| Fix | Gate | Description | V3 Result | Assessment |
|-----|------|-------------|-----------|------------|
| FIX-001 | GR-05 | Filter non-rendered elements | GR-05 FAIL (4 violations) | PARTIAL — the filter reduced false positives from 18 (previous run) to 4, but 4 real violations remain (callout tint colors). The filter works; the builder used non-warm tints. |
| FIX-002 | GR-06 | Filter + remove PASS* status | GR-06 FAIL (181 violations) | PARTIAL — PASS* status is gone (binary FAIL reported). But 181 violations from Times/SF Mono/Georgia in font stacks suggests the builder's CSS did not fully restrict font declarations. The gate correctly identifies the issue. |
| FIX-003 | GR-09 | Border weight tolerance bands | GR-09 FAIL (0.667px, 2.667px) | INEFFECTIVE at preventing the defect — the tolerance band matching correctly identified non-integer widths, but the builder still produced fractional border widths from em/rem values. The gate is accurate but the builder recipe did not prevent the cause. |
| FIX-004 | GR-10 | Cross-page DNA sub-checks | GR-10 PASS | WORKED — all structural elements present (header, footer, sections, skip-link) |
| FIX-005 | GR-14 | Structural transition handling | GR-14 FAIL (13 failures) | WORKED as diagnostic, NOT as gate — the gate correctly identifies that nested section containers create large measured gaps. The fix note itself says this is a structural false positive. The Weaver correctly classified it as false-positive. The gate ACCURATELY REPORTS the measurement; the measurement methodology needs revision. |
| FIX-006 | GR-17 | Table cell exemption | GR-17 FAIL (30 violations) | WORKED for tables, NEW problem in lists — table cell violations are gone (the td/th exemption works). But 30 `<li>` elements at 8px padding now fail the 12px threshold. The exemption was correctly scoped to table cells; list items need their own threshold consideration. |

**Pattern: Gate defect fixes improved gate ACCURACY (fewer false positives, binary status) but did not prevent builder DEFECTS. The gates correctly identify real issues; the builder recipe needs to better prevent them upstream.**

---

## 4. PA QUESTION REWRITES

### Verdict: LARGELY UNTESTABLE — DPR bug contaminated 9/9 auditor reports

The PA rewrite effectiveness is almost entirely obscured by the Playwright DPR screenshot bug that caused all 9 auditors to receive blank screenshots for scroll positions 05+. Key observations:

| Fix | Question | Assessment |
|-----|----------|------------|
| FIX-046 | PA-20 (personality match) | UNTESTABLE — auditors received corrupted screenshots |
| FIX-047 | PA-23 (resize comparison) | UNTESTABLE — viewport comparison was screenshot-based, all screenshots were corrupted at scroll offsets |
| FIX-048 | PA-28 (fragility check) | UNTESTABLE — required full-page context that auditors lacked |
| FIX-049 | PA-63 (component echoes) | PARTIAL SIGNAL — Auditor E reported "echoes yes, adapts yes" for visible content (conditional due to void artifact) |
| FIX-050 | PA-67 (visual unpredictability) | PARTIAL SIGNAL — Auditor A reported YES (purple accent, density labels) for visible content |
| FIX-051 | PA-24 (system belonging) | UNTESTABLE |
| FIX-052 | PA-25 (identity persistence) | UNTESTABLE |
| FIX-053 | PA-26 (convention problems) | UNTESTABLE |
| FIX-054 | PA-51 (content density) | UNTESTABLE — void artifact dominated all density assessments |
| FIX-055-060 | NEW PA-71 through PA-77 | MIXED — some were answered but void contamination undermines confidence |

**The DPR bug is the single biggest confound for PA effectiveness assessment.** The Weaver compensated using corrected screenshots, but the individual auditor reports — the raw signal — are corrupted for 75% of the page. We cannot determine whether PA rewrites produced better signal because the signal was corrupted at the source.

**One clear positive signal: PA-05 cross-validation (FIX-065) WORKED.** The distributed cross-validation protocol functioned as designed:
- DESIGNED cross-validated by Auditor F
- COHERENT cross-validated by Auditor G
- PROPORTIONATE cross-validated by Auditor C
- POLISHED cross-validated by Auditor B

All cross-validators submitted scores. The Weaver used both primary and cross scores to resolve. This protocol improvement is validated.

---

## 5. BUILDER RECIPE CHANGES

### Verdict: 6 WORKED, 2 PARTIAL, 1 INEFFECTIVE

| Fix | Description | V3 Evidence | Assessment |
|-----|-------------|-------------|------------|
| FIX-012 | Background Hex Lock in TC Brief | Brief contains LOCKED zone backgrounds with delta table | **WORKED** — all 8 zones have locked hex values, boundary deltas computed and verified >= 15 RGB. BV-02 caught and corrected Z6. |
| FIX-013 | Tier 2 vs Tier 3 Priority Override | Brief contains "PRIORITY OVERRIDE" section with 3 worked examples | **WORKED** — explicit priority rules + worked examples. Builder received clear guidance on conflict resolution. |
| FIX-014 | Technique Density per Disposition | Brief Tier 4 has 9 dispositions (D-01 through D-09), each with CSS property:value pairs | **WORKED** — D-02 specifies `border-bottom: 3px solid #E83025`, D-03 specifies `header { background: var(--settlement-gate); padding: 24px 0; }`, D-04 specifies `background: var(--color-text); color: var(--bg-primary);`, D-07 specifies `.zone-factory tr:hover { background: rgba(232,48,37,0.05); }`. Every disposition has concrete CSS. |
| FIX-015 | Builder Self-Evaluation as Required Output | Builder produced 7-question self-eval as HTML comment (lines 3-11) | **WORKED** — GR-43 confirms existence. 7 questions answered (exceeds the 4 minimum). |
| FIX-016 | Merge Phase 6 into Phase 5 Self-Eval | Self-eval includes temporal questions (section heights, density arc) | **WORKED** — questions 5-7 cover section height variation, density arc description, and ending quality |
| FIX-018 | Components.css Reference — "Aim for 8+" | Brief says "Aim for 8+ components. Adapt rather than invent." Builder received components.css (1,195 lines) | **PARTIAL** — the brief specifies the target but we cannot verify component adoption count from gate results alone. The builder produced 2,152 lines of HTML, suggesting substantial component usage, but exact count unknown. |
| FIX-021 | CD-006 Zone-by-Zone Reference | Builder received CD-006 reference (COMPOSED mode mandatory) | **PARTIAL** — routing verification confirms CD-006 was provided. Whether the builder actually referenced it for zone decisions is unverifiable. |
| FIX-022 | Conviction Statement Template | Conviction present: metaphor (The Settlement), arc (orientation>density>valley>climb>resolution), strategy (double-peak + multi-coherence) | **WORKED** — all 3 template elements present. The conviction is specific, not generic. |
| FIX-095 | D-09 Quiet Zone | Brief specifies Z4 as quiet zone with "2-3 mechanisms only" | **INEFFECTIVE (assessment uncertain)** — the specification exists in the brief but DPR-corrupted screenshots prevent verification of whether Z4 actually rendered as quieter than adjacent zones. Corrected screenshots suggest Z4 has prose-dominant content, but a definitive quiet-zone assessment requires uncorrupted full-page evaluation. |

**Key finding: The recipe format transformation is dramatic.** The V3 execution brief (291 lines) reads like a RECIPE with specific CSS values, worked examples, and zone-by-zone guidance. Compare to the Flagship's brief which was dominated by checklist language. BV-03's 11:0 recipe:checklist ratio confirms this quantitatively. This is the highest-validated format finding put into practice.

**Key finding: Background Hex Lock (FIX-012) prevented the #1 CRITICAL loss.** The brief contains LOCKED hex values with a full delta verification table. The builder was explicitly told "These hex values are FIXED. Creative authority applies to everything else." This removed the ambiguity that caused imperceptible background deltas in the Flagship.

---

## 6. FILE SPLITTING

### Verdict: BOTH WORKED

| Fix | Architecture | V3 Evidence | Assessment |
|-----|-------------|-------------|------------|
| FIX-090 | Gate runner: 1 file -> 5 files | GR-48 verified 100% gate coverage (17/17 required, 8/8 recommended). Gate runner version: "v3.1-wave3". | **WORKED** — the split architecture enabled the orchestrator to execute all gates. Previous run: 19/42 (45%). V3 run: 31/31 (100%). The 88% read-burden reduction cited in audit appears to have translated to execution completeness. |
| FIX-091 | PA protocol: 1 file -> 5 files | All 9 auditors received screenshots ONLY (fresh-eyes confirmed). No auditor received build context. Weaver received tier definitions. Information isolation enforced. | **WORKED** — the split enforced information isolation. The HANDOFF confirms: "All 9 auditors received screenshots ONLY (fresh-eyes principle): CONFIRMED. No auditor received Execution Brief, Content Map, or build intent: CONFIRMED." The weaver-only file kept tier context away from individual auditors. |

**Key finding: File splitting solved two distinct problems simultaneously.** (1) Gate execution completeness jumped from 45% to 100%. (2) PA information isolation was structurally enforced rather than relying on orchestrator compliance. Both were identified as top-tier improvements by the pre-run audit. V3 validates both.

---

## 7. THE 6 UPGRADED MECHANISMS

The pre-run audit identified 6 mechanisms upgraded from PARTIALLY EFFECTIVE to functional. Here is their V3 performance:

| Mechanism | What It Does | V3 Evidence | Assessment |
|-----------|-------------|-------------|------------|
| **M-01: Background Delta Verification** | Ensures adjacent zones differ by >= 15 RGB | GR-11 PASS (0 failures, 34 pairs checked). GR-51 PASS (100% above 25, mean 242.9). BV-02 caught a pre-build violation. | **WORKED** — triple-layer verification (BV-02 pre-build + GR-11 minimum + GR-51 distribution) all pass. The Flagship's dominant defect (imperceptible deltas) is structurally prevented. |
| **M-05: Tiered Brief Structure** | Brief organized by tier with line budgets | BV-01 PASS (T1:12, T2:17, T3:111, T4:31, CM:30). Brief is 291 lines with clear tier structure. | **WORKED** — the brief has explicit tier headers, line budgets met, and the tier structure carries through to builder guidance. Previous brief had 25/40 (62.5%) tier coverage. |
| **M-06: Suppressor Management** | Prevents known quality suppressors from reaching the builder | BV-04 PASS (0 suppressors). No "sample 2-4", no checklist verbs, no count-gates. | **WORKED** — zero suppressors reached the builder. "Sample 2-4 mechanisms" — the single most limiting specification identified by ALL 11 research agents — is completely absent. |
| **M-07: Recipe Format** | Brief uses recipe language (verbs: Build, Create, Derive) not checklist language (Verify, Fail if) | BV-03 PASS (11:0 ratio). Brief reads as sequenced instructions with CSS values. | **WORKED** — the format transformation is complete and verified by gate. |
| **M-14: Gate Coverage Verification** | All specified gates actually execute | GR-48 PASS (17/17 + 8/8). 31/31 gates produced results. | **WORKED** — jumps from 45% to 100% gate execution. |
| **M-16: Conviction Capture** | Builder states metaphor, arc, and strategy before building | GR-50 PASS. Conviction at line 1 of HTML: metaphor (Settlement), arc (orientation>density>valley>climb>resolution), strategy (double-peak + multi-coherence). | **PARTIAL** — conviction EXISTS and is specific, but the propagation auditor noted 35% loss probability for conviction as a SEPARATE FILE. In V3, the conviction was embedded as HTML comment rather than a separate file. This works but bypasses the file-based verification the fix intended. |

---

## 8. CROSS-CUTTING FINDINGS

### 8.1 The Highest-Leverage Fixes

Three fix categories account for the majority of observable improvement:

1. **BV Gates (FIX-007 through FIX-011):** Upstream verification before the builder. BV-02 caught a real defect. BV-03 confirmed recipe format. BV-04 confirmed suppressor absence. These gates move verification UPSTREAM where fixes are 10x cheaper.

2. **Background Hex Lock (FIX-012):** Prevented the #1 CRITICAL loss (imperceptible background deltas). The brief contains LOCKED hex values with computed deltas. The builder cannot accidentally create imperceptible transitions.

3. **File Splitting (FIX-090, FIX-091):** Solved 45% -> 100% gate execution AND enforced PA information isolation. Two problems, one architectural fix.

### 8.2 The DPR Bug Nullified PA Fix Assessment

The Playwright DPR screenshot bug (HANDOFF Anomaly A1) corrupted ALL 9 PA auditor reports. Every auditor received blank screenshots for 75% of the page. This means:
- PA question rewrites (FIX-046 through FIX-054) are **untestable** for signal quality
- PA new questions (FIX-055 through FIX-060) are **untestable**
- PA redistributions (FIX-061 through FIX-064) produced reports but on corrupted input
- Only the PA-05 cross-validation protocol (FIX-065) is **validated** as working

**This is the single biggest gap in effectiveness measurement.** 20+ PA-related fixes cannot be evaluated because the PA input was corrupted. The pipeline needs a screenshot validation gate (identified in HANDOFF Anomaly A1) before PA fixes can be properly assessed.

### 8.3 Gate Accuracy vs Builder Prevention

A recurring pattern: gate defect fixes improved gate ACCURACY but did not prevent builder DEFECTS.

- GR-05 correctly identifies 4 non-warm callout tints — but the builder still used them
- GR-06 correctly identifies 181 font violations — but the builder still included Times/SF Mono/Georgia
- GR-09 correctly identifies non-integer border widths — but the builder still used em/rem for borders
- GR-07 correctly identifies 1 pure black default — but the builder did not add html { color: }

The gates are ACCURATE DETECTORS, not PREVENTERS. The builder recipe needs stronger upstream constraints:
- Font-family declarations should be templated (not left to builder discretion)
- Border-width values should be specified as px-only in the recipe
- html { color: } should be in the components.css boilerplate

### 8.4 New Anomalies Not Covered by 128 Fixes

The V3 run exposed problems that the 128 fixes did not anticipate:

1. **Playwright DPR bug** — no screenshot validation gate exists. FIX-NEW-1 needed: sanity check screenshots before distributing to auditors.

2. **Context exhaustion** — the pipeline required 3 sessions. The 128 fixes added specification volume. No fix addressed context budget.

3. **GR-14 structural false positives** — FIX-005 added transition handling but the nested HTML structure still produces 13 failures. The measurement methodology (all section/zone elements) needs revision to sibling-only elements.

4. **GR-21 calibration for COMPOSED mode** — the 4-distinct-backgrounds threshold is too low for pages with callout tint variations. Needs mode-conditional thresholds.

5. **SHIP WITH FIXES protocol gap** — no Phase 4 (fix application + re-verification) exists. The pipeline ends at the verdict. The 5 mechanical fixes identified by the Weaver were NOT applied within the pipeline run.

### 8.5 Audit Synthesis Predictions vs V3 Reality

| Prediction | Source | V3 Reality | Accurate? |
|------------|--------|-----------|-----------|
| "READY FOR FIRST MONITORED RUN" | Audit Synthesis verdict | Pipeline ran to completion producing CEILING-tier output | **YES** |
| "Orchestrator is the weakest link" | 4 auditors | Orchestrator compliance 6/10 self-assessed; DPR bug undetected; timestamps not recorded | **YES** |
| "Binary gates catch compliance, not quality" | Multiple auditors | All gates PASS or mechanically FAIL; PA-05 = 3/4 (quality exists) | **YES** — gates confirmed identity compliance while PA detected compositional quality |
| "BV gates are highest-value addition" | 5 auditors | BV-02 caught a real defect; BV-03 confirmed recipe format | **YES** |
| "File splitting works" | Multiple auditors | 45% -> 100% gate coverage; information isolation enforced | **YES** |
| "'Compliant But Flat' at 30-40% probability" | Adversarial auditor | Did NOT occur — PA-05 = 3/4, Tier 5 = 9/9 | **NO** — the scenario was not realized. Recipe format + disposition density may have prevented it. |
| "Conviction at 35% loss probability" | Propagation auditor | Conviction present but as HTML comment, not separate file | **PARTIAL** — conviction was not "lost" but was embedded differently than specified |
| "Specification volume may suppress creativity" | Metacognitive auditor | 291-line brief + Opus builder produced CEILING-tier output | **INCONCLUSIVE** — N=1, but result suggests recipe format offsets volume concern |

---

## 9. SUMMARY SCORECARD

### Definitively WORKED (High Confidence)
- BV-01 through BV-04 (brief verification gates)
- Background Hex Lock (FIX-012)
- Recipe Format enforcement (BV-03 + brief transformation)
- Suppressor Management (BV-04)
- Self-Evaluation as Required Output (FIX-015 + GR-43)
- File Splitting (FIX-090, FIX-091 -> 45% to 100% gate coverage)
- GR-44 Trailing Void Detection
- GR-48 Gate Coverage Completeness
- GR-51 Background Delta Distribution
- PA-05 Cross-Validation Protocol (FIX-065)
- Conviction Statement Template (FIX-022 + GR-50)
- Tier 2 vs Tier 3 Priority Override (FIX-013)
- Disposition Technique Density (FIX-014)

### Partially Worked
- Gate element filtering (FIX-001, FIX-002) — reduced false positives but real violations remain
- Table cell exemption (FIX-006) — tables fixed, lists now fail
- Component adoption target — specified but unverified
- M-16 Conviction Capture — exists but as embedded comment, not separate file
- GR-53 Density Arc — passed but measurement (footer as densest) is borderline

### Ineffective or Untestable
- All PA question rewrites — DPR bug contamination
- GR-21 cognitive overload threshold — calibration too restrictive for COMPOSED mode
- GR-09 border tolerance bands — accurately detect but do not prevent
- D-09 Quiet Zone — specified but unverifiable from corrupted screenshots

### Cannot Assess (Structural/Architectural)
- Wave 3 architectural fixes (42 items) — these concern file organization, logging templates, meta-architecture. Cannot be assessed from a single output. They are enabling infrastructure.
- Gate removals and reclassifications — structural changes that reduce maintenance burden but do not produce observable output differences.

---

## 10. RECOMMENDATIONS FOR NEXT RUN

1. **ADD SCREENSHOT VALIDATION GATE** — check that <= 3 consecutive screenshots are predominantly monochrome before distributing to auditors. This would have prevented the DPR bug from corrupting 9 reports.

2. **TEMPLATE FONT DECLARATIONS** — add `html { color: #2a2a2a; font-family: Inter, system-ui, sans-serif; }` to components.css boilerplate so the builder cannot accidentally use browser defaults.

3. **SPECIFY PX-ONLY BORDERS** — add to recipe: "All border-width values MUST be integer px (1px, 2px, 3px, 4px). Do NOT use em/rem for border-width."

4. **ADJUST GR-21 THRESHOLD** — for COMPOSED mode, increase from 4 to 6 distinct backgrounds per viewport (or exclude backgrounds at <= 10% opacity from the count).

5. **REVISE GR-14 MEASUREMENT** — change from "all section/zone elements" to "adjacent sibling elements only" to eliminate structural false positives from nested HTML.

6. **ADD PHASE 4 PROTOCOL** — SHIP WITH FIXES needs a defined fix application + re-verification phase. Currently the pipeline ends at the verdict and fixes are deferred.

---

*Report complete. 128 fixes cross-referenced against V3 pipeline output. ~45-50 fixes have direct observable evidence. BV gates + recipe format + background hex lock = highest ROI. DPR screenshot bug nullified PA fix assessment.*

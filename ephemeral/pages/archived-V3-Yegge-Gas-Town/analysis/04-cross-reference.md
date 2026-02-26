# Cross-Reference Analysis: Phase 2 Findings vs 128-Fix Implementation

**Analyst:** cross-reference-analyst (Opus 4.6)
**Date:** 2026-02-24
**Sources:**
- Phase 2 MASTER-SYNTHESIS.md (17 reports, 19 agents)
- MASTER-FIX-CHECKLIST.md (128 fixes across 3 waves)
- AUDIT-SYNTHESIS.md (10 pre-run auditors)
- 7 individual Phase 2 reports (gate analysis, fix effectiveness, adversarial, priority inversion, gate usability, experiential PA, blindness hunter)

---

## EXECUTIVE SUMMARY

| Classification | Count | Description |
|----------------|-------|-------------|
| **ALREADY-FIXED** | 18 | Addressed by the 128 fixes AND Phase 2 confirms no longer an issue |
| **FIX-FAILED** | 8 | A fix was applied but Phase 2 shows the problem persists or mutated |
| **NEW** | 21 | Finding not covered by any of the 128 fixes |
| **UNTESTABLE** | 6 | Fix was applied but DPR screenshot bug prevents verification |

**The 8 FIX-FAILED items are the highest-priority output.** These represent fixes where we thought the problem was solved but Phase 2 evidence proves otherwise. The 21 NEW items represent blind spots in the original analysis -- findings the 128-fix process never anticipated.

---

## SECTION 1: ALREADY-FIXED (18 items)

These findings from the 128-fix analysis are confirmed RESOLVED by Phase 2 evidence.

| # | Finding | Fix(es) | Phase 2 Evidence |
|---|---------|---------|------------------|
| AF-01 | Imperceptible background deltas (#1 CRITICAL loss) | FIX-008 (BV-02), FIX-012 (hex lock) | GR-11 PASS, GR-51 PASS (100% above 25 RGB, mean 242.9). BV-02 caught a real Z6 defect and forced correction. The #1 historical failure is structurally prevented. |
| AF-02 | "Sample 2-4 mechanisms" suppressor | FIX-010 (BV-04) | BV-04 PASS (0 suppressors). Zero known quality suppressors reached the builder. |
| AF-03 | Checklist language in brief | FIX-009 (BV-03) | BV-03 PASS (11:0 recipe:checklist ratio). Brief is pure recipe format. |
| AF-04 | 45% gate execution (19/42 gates) | FIX-069 (GR-48), FIX-090 (file splitting) | GR-48 PASS (17/17 required, 8/8 recommended). 100% gate coverage, up from 45%. |
| AF-05 | PA information isolation failures | FIX-091 (PA file splitting) | All 9 auditors received screenshots ONLY. No auditor received build context. Information isolation structurally enforced. |
| AF-06 | Tier line budget thin briefs (25/40 = 62.5%) | FIX-007 (BV-01) | BV-01 PASS (T1:12, T2:17, T3:111, T4:31, CM:30). All tiers at or above budget. Brief is 291 lines. |
| AF-07 | Builder self-evaluation missing | FIX-015 (self-eval required output), FIX-017 (GR-43) | GR-43 PASS. Builder wrote 7-question self-eval as HTML comment at lines 3-11. |
| AF-08 | Conviction statement missing/generic | FIX-022 (conviction template), FIX-079 (GR-50) | GR-50 PASS. Conviction present with all 3 elements: metaphor (The Settlement), arc (orientation>density>valley>climb>resolution), strategy (double-peak + multi-coherence). |
| AF-09 | No technique density per disposition | FIX-014 | Brief Tier 4 has 9 dispositions (D-01 through D-09), each with CSS property:value pairs. Every disposition has concrete CSS. |
| AF-10 | Tier 2 vs Tier 3 conflict ambiguity | FIX-013 | Brief contains explicit "PRIORITY OVERRIDE" section with worked examples. Builder received clear conflict resolution guidance. |
| AF-11 | Table cell false positives (262 violations) | FIX-006 (table cell exemption) | V3 reports 0 td/th violations. Table cell exemption works perfectly. |
| AF-12 | Non-rendered element false positives (GR-05) | FIX-001, FIX-035 | False positives reduced from 98 (V1) to 4 (V3). `isRenderedElement()` filter works correctly. |
| AF-13 | Non-binary PASS* status on GR-06 | FIX-002 | GR-06 now reports binary FAIL (181 violations). PASS* eliminated. |
| AF-14 | GR-07 merged into GR-05 (ID confusion) | FIX-033 | GR-07 now has standalone executable code. Reports 1 real violation independently. |
| AF-15 | GR-44 trailing void gate missing | FIX-068 | GR-44 implemented and ran. Reports voidHeight=0 for content zone. (Note: adversarial found false negative -- see FIX-FAILED.) |
| AF-16 | PA-05 single-evaluator risk | FIX-065 (cross-validation) | Distributed cross-validation functioned: DESIGNED->F, COHERENT->G, PROPORTIONATE->C, POLISHED->B. All cross-validators submitted scores. |
| AF-17 | "Compliant But Flat" scenario (30-40% predicted) | FIX-009 (recipe format), FIX-014 (disposition density) | Did NOT occur. PA-05 = 3/4, Tier 5 = 9/9. Recipe format + disposition density likely prevented it. |
| AF-18 | Background delta distribution floor-clustering | FIX-070 (GR-51) | GR-51 PASS (100% above 25 RGB). Deltas are dramatically above floor. |

---

## SECTION 2: FIX-FAILED (8 items) -- HIGHEST PRIORITY

These are fixes that were applied but Phase 2 demonstrates the problem PERSISTS, MUTATED, or was INCOMPLETELY addressed.

### FF-01: GR-09 Tolerance Bands NOT Functioning (FIX-003)
- **Fix applied:** FIX-003 (HIGH, Wave 1) -- tolerance-band matching for border widths
- **Phase 2 evidence:** Gate reports `threshold: { allowedWidths: [1, 2, 3, 4] }` -- integer-only checking, NOT tolerance bands. V3 fails with 0.667px and 2.667px borders that should PASS under tolerance bands (0.667 is within 0.5-1.5 band, 2.667 is within 2.5-3.5 band).
- **Why it failed:** The tolerance band logic was either (a) implemented but overridden by a separate integer-only check, (b) not actually integrated into the deployed gate runner, or (c) the spec was written but code was not updated. Gate analyst calls this "the most concerning implementation issue."
- **What needs to change:** Audit `gate-runner-core.js` to verify FIX-003 tolerance bands are present. If they are, find the conflicting integer-only check and remove it. If they are not, implement the tolerance band logic as originally specified.
- **Severity:** MEDIUM. The actual page rendering is fine (0.667px renders as 1px). This is a gate accuracy bug, not a visual defect.

### FF-02: GR-14 Structural False Positives EXPANDED (FIX-005)
- **Fix applied:** FIX-005 (HIGH, Wave 1) -- structural transition handling for elements BETWEEN zones
- **Phase 2 evidence:** 13 false-positive failures from nested section-indicator elements WITHIN zones. Gaps measured at 400-2400px between sub-elements and zone containers are actually content heights, not whitespace.
- **Why it failed:** FIX-005 was designed for the V1 failure pattern (standalone elements between zones creating gaps). V3 uses a different HTML architecture with nested section-indicators. The fix addresses elements BETWEEN zones but not elements WITHIN zones measured against adjacent zones. Different failure mode entirely.
- **What needs to change:** Restrict gap measurement to ZONE-LEVEL SIBLINGS only. Only measure gaps between elements that share the same parent or are direct children of `<main>`. This is architecturally broken for modern nested HTML structures -- it will false-positive on ANY page with nested section containers.
- **Severity:** HIGH for gate accuracy. The gate runner's own fixNote acknowledges this is "likely a gate false-positive from nested HTML structure." But 13 false positives on every run undermines trust in the gate system.

### FF-03: GR-17 Density Stacking MUTATED to List Items (FIX-006)
- **Fix applied:** FIX-006 (HIGH, Wave 1) -- table cell exemption (td/th use 4px minimum instead of 12px)
- **Phase 2 evidence:** Table violations eliminated (0 in V3 vs 262 in V1). But 30 NEW list item violations at 8px padding. Same pattern, different element type.
- **Why it failed:** FIX-006 was correctly scoped to the V1 failure (table cells). The fix authors deliberately kept `li` in the 12px-minimum group. But the V3 builder uses 8px list padding for compact lists -- the same reasonable design choice that V1 builders made for tables.
- **What needs to change:** Add `li` to the table-cell exemption group (4px minimum) or create a separate threshold: `li` minimum 6-8px. 8px list padding is a standard design choice for compact content.
- **Severity:** LOW. 30 violations (down from 262) shows the fix worked for its target. The mutation is predictable and low-impact.

### FF-04: GR-44 Trailing Void FALSE NEGATIVE (FIX-068)
- **Fix applied:** FIX-068 (CRITICAL, Wave 2) -- trailing whitespace void detection gate
- **Phase 2 evidence:** GR-44 reports voidHeight=0. But the adversarial buddy discovered a real ~5,500px trailing void BELOW the footer. The page is 14,524px tall with content ending at ~9,000px.
- **Why it failed:** GR-44 measures from the last DOM element's bottom to the body bottom. The footer IS the last DOM element, so the gate measures 0px void. But the footer is positioned at ~9,000px with ~5,500px of blank scroll space below it. The gate measures DOM extent, not VISIBLE content extent.
- **What needs to change:** GR-44 should measure from the last VISIBLE element's rendered bottom (via `getBoundingClientRect()`) to the page's total scrollable height (`document.documentElement.scrollHeight`). If `scrollHeight - lastVisibleBottom > 300px`, FAIL.
- **Severity:** HIGH. The trailing void was THE #1 defect in historical builds. GR-44 was designed to catch it. A 5,500px void passing as 0px is a critical false negative.

### FF-05: GR-05 Warm Palette Still Catches Sub-Perceptual Tints (FIX-001)
- **Fix applied:** FIX-001 (CRITICAL, Wave 1) -- filter non-rendered elements from GR-05
- **Phase 2 evidence:** GR-05 FAIL with 4 violations at callout tints of 4-6% opacity (purple, blue, green). These are invisible to humans -- the gate usability audit classifies them as SUB-PERCEPTUAL. The priority inversion analysis ranks them as MAXIMUM inversion: pipeline HIGHEST priority, human ZERO priority.
- **Why it failed:** FIX-001 addressed false positives from non-rendered elements (HEAD/META/TITLE). It did NOT address the fundamental problem: GR-05 checks raw RGB channel ratios with no consideration of opacity. A 4% opacity purple tint computes to ~3-5 RGB points of shift on cream -- below the pipeline's own 15 RGB perception threshold.
- **What needs to change:** Gate usability audit recommends SPLIT: GR-05a (visible colors, opacity >= 0.3) stays REQUIRED; GR-05b (sub-perceptual tints, opacity < 0.3) downgraded to ADVISORY. Implementation: `if (opacity * maxChannelDifference <= 20)` -> ADVISORY rather than REQUIRED.
- **Severity:** LOW for visual impact (invisible tints). HIGH for pipeline credibility (triggers REBUILD for invisible violations, contributing to the priority inversion).

### FF-06: GR-06 Font Trinity Catches Never-Rendered Fallback Fonts (FIX-002)
- **Fix applied:** FIX-002 (CRITICAL, Wave 1) -- filter non-rendered elements + remove PASS*
- **Phase 2 evidence:** GR-06 FAIL with 181 violations. Violating fonts: Times (html default), SF Mono (code fallback), Georgia (serif fallback). These fonts exist in the CSS font-stack declarations but never actually render because primary fonts load successfully.
- **Why it failed:** FIX-002 removed PASS* status (now binary FAIL) and filtered non-rendered elements. But it checks font-stack DECLARATION, not RENDERED font. A font in position 2-4 of the stack that never activates still triggers FAIL.
- **What needs to change:** Gate usability audit recommends MODIFY: check the RENDERED font via `document.fonts.check()` rather than the declared stack. Fallback fonts in positions 2+ that are not actively rendering should not trigger REQUIRED failures.
- **Severity:** LOW for visual impact (fonts never render). HIGH for pipeline credibility (181 violations from fonts nobody sees).

### FF-07: MANIFEST Verdict Logic Is Overly Rigid (Implicit in multiple fixes)
- **Fix applied:** Multiple MANIFEST-EDIT fixes established the Identity gate FAIL -> REBUILD verdict logic
- **Phase 2 evidence:** 4 REQUIRED identity gate failures (GR-05, GR-06, GR-07, GR-09) are all mechanical CSS oversights requiring ~15 lines of changes. The MANIFEST says ANY Identity gate FAIL = REBUILD. The orchestrator pragmatically overrode this to SHIP WITH FIXES. Paper trail auditor, gate analyst, weaver, and adversarial buddy ALL agree the override was correct and the MANIFEST rule is the defect.
- **Why it failed:** The MANIFEST treats all identity gate failures as equally severe. A 4% opacity purple tint and a page-wide wrong font family produce the same verdict: REBUILD. No distinction between sub-perceptual violations and visible design failures.
- **What needs to change:** Restructure verdict logic to distinguish mechanical CSS hygiene (REFINE) from visible design violations (REBUILD). Add: "If ALL failing identity gates are classified MECHANICAL (single CSS rule fix), verdict = REFINE, not REBUILD."
- **Severity:** MEDIUM. The orchestrator worked around it, but the workaround creates a precedent for overriding MANIFEST rules, which undermines the rule system.

### FF-08: Conviction Capture as Embedded Comment, Not Separate File (FIX-022 + M-16)
- **Fix applied:** FIX-022 (conviction statement template), FIX-079 (GR-50)
- **Phase 2 evidence:** Conviction EXISTS and is specific (metaphor + arc + strategy). GR-50 PASS. But conviction was embedded as HTML comment at line 1, not as a separate file. The propagation auditor predicted 35% loss probability for the separate-file approach.
- **Why it "failed":** The fix specified conviction as a separate capture artifact. The builder embedded it directly in the HTML output instead. The adversarial buddy argues this is actually BETTER (lower loss probability, embedded in artifact). But it bypasses the file-based verification the fix intended.
- **What needs to change:** Accept HTML-comment embedding as a valid conviction capture method. Update GR-50 to check either (a) separate conviction file OR (b) conviction in HTML comment. Do not treat a working implementation differently from the expected implementation.
- **Severity:** LOW. The conviction is present and specific. The implementation is arguably better than the specification.

---

## SECTION 3: NEW FINDINGS (21 items)

These are Phase 2 findings NOT covered by any of the 128 fixes. These represent blind spots in the original analysis.

### Category A: Priority Inversion (4 items) -- THE DOMINANT NEW FINDING

| # | Finding | Source Report(s) | Description | Spec File(s) Needing Modification |
|---|---------|-----------------|-------------|-----------------------------------|
| N-01 | **Priority inversion is pipeline-wide** | priority-inversion-analysis, gate-usability-audit, MASTER-SYNTHESIS Finding 1 | Every pipeline stage (builder self-eval, gate runner, PA routing, weaver, orchestrator) prioritizes CSS compliance over human usability. 4/18 REQUIRED gates are SUB-PERCEPTUAL. Zero gates check text legibility. The illegible chart was Fix #5 behind 4 invisible violations. 5/7 priority inversions are MAXIMUM magnitude. | `MANIFEST.md` (verdict logic), `gate-runner-spec.md` (gate tiers), `gate-runner-core.js` (new gates), `pa-deployment.md` (routing), `pa-weaver.md` (priority model) |
| N-02 | **Zero usability gates exist** | gate-usability-audit | 31 gates. 0 check text legibility. 0 check text contrast. 0 check minimum font size. 0 check content accessibility. A page could pass all 18 REQUIRED gates with illegible text on every element. | `gate-runner-core.js` (add GR-60 text contrast REQUIRED, GR-61 min font size RECOMMENDED, GR-62 text overflow RECOMMENDED) |
| N-03 | **Weaver priority model ranks invisible above visible** | priority-inversion-analysis Stage 4 | Fix ordering: (1) font fallbacks never rendered, (2) 4% opacity tints, (3) sub-pixel borders, (4) html default color -> (5) illegible chart. Priority model: identity gate FAIL > perception gate FAIL > PA findings. | `pa-weaver.md` (add usability-blocker pre-filter: "Is there ANY finding a reader CANNOT READ?") |
| N-04 | **Builder self-eval has zero legibility questions** | priority-inversion-analysis Stage 1 | 7 questions about compositional architecture. 0 about whether text is readable, charts are legible, or components work. Builder creates illegible chart, passes 7/7. | `MANIFEST.md` Appendix E (add Q0: "Can you read every piece of text?" and Q0b: "Does every visual component convey its information?") |

### Category B: Experiential PA Gap (5 items)

| # | Finding | Source Report(s) | Description | Spec File(s) Needing Modification |
|---|---------|-----------------|-------------|-----------------------------------|
| N-05 | **PA is analytical, never experiential** | experiential-pa-analysis, MASTER-SYNTHESIS Finding 2 | 69 analytical questions create attentional tunnels. PA never asks auditors to USE the page. Chart illegibility caught by 1/9 auditors (11%). Gorilla experiment: counting task (analytical questions) induces inattentional blindness to the gorilla (illegible chart). | `pa-deployment.md` (add universal experiential pre-check U-01 to ALL auditors) |
| N-06 | **Legibility routing is a single point of failure** | experiential-pa-analysis, priority-inversion-analysis Stage 3 | PA-02 and PA-08 (the ONLY legibility questions) are BOTH routed exclusively to Auditor B. 4% of PA bandwidth on legibility. 36% on compositional intelligence. 5 of 9 auditors looked at the chart and did not flag it. | `pa-deployment.md` (distribute legibility pre-check across ALL 9 auditors) |
| N-07 | **43% experiential miss rate** | inattentional-blindness-audit | 23 usability issues found through experiential use. PA caught 7 fully (30%), 6 partially (26%), missed 10 entirely (43%). Missed issues are qualitatively worse: functional failures (broken affordances, misleading navigation) vs visual imperfections. | `pa-protocol.md` (add experiential pass before analytical questions) |
| N-08 | **Per-auditor tunnel vision on chart** | experiential-pa-analysis | Per-auditor analysis: A saw chart as "visual rhythm device," C saw "spatial weight element," D saw "rhythmic beat," E saw "layout element," F saw "pattern instance," G saw "metaphor cost/benefit," H saw "viewport challenge." Only B saw it as "text with readability problem." | `pa-deployment.md` (experiential pass ensures ALL auditors encounter chart AS TEXT before entering analytical tunnel) |
| N-09 | **Sub-perceptual PA questions disguised as perceptual** | priority-inversion-analysis Stage 3 | PA-55 ("Can you describe how 3 adjacent sections DIFFER?"), PA-56 ("Can you FEEL the tracking difference?"), PA-69 ("Count visual properties changing") are pipeline self-audit questions disguised as perceptual audit. They test whether the PIPELINE'S compositional model is reflected, not whether the USER experiences quality. | `pa-questions.md` (review and flag pipeline-introspection questions) |

### Category C: Screenshot/Infrastructure (4 items)

| # | Finding | Source Report(s) | Description | Spec File(s) Needing Modification |
|---|---------|-----------------|-------------|-----------------------------------|
| N-10 | **DPR screenshot bug is systemic** | MASTER-SYNTHESIS Section 3, adversarial buddy, blindness hunter | Playwright DPR bug caused scroll-04+ to show blank cream. Same bug in BOTH pipeline PA AND Phase 2. 15/15 auditors treated it as page defect. Zero self-correction mechanism. Single data source = single point of failure. | `MANIFEST.md` (add screenshot validation step), `gate-runner-core.js` (add screenshot sanity-check gate) |
| N-11 | **No screenshot validation mechanism** | MASTER-SYNTHESIS Section 4 item 6 | Protocol has no way to detect corrupted screenshots before distributing to auditors. All 15 auditors independently made the same wrong assumption. No escalation pathway for suspected data corruption. | `pa-deployment.md` (add pre-PA screenshot validation: no >3 consecutive identical screenshots, minimum unique content entropy) |
| N-12 | **No Phase 4 fix-application protocol** | fix-effectiveness Section 8.4 item 5 | Pipeline ends at verdict. SHIP WITH FIXES has no defined fix application + re-verification phase. The 5 mechanical fixes identified by the Weaver were NOT applied within the pipeline run. | `MANIFEST.md` (add Phase 4: fix application + re-gate for SHIP WITH FIXES verdict) |
| N-13 | **Context exhaustion across 3 sessions** | adversarial buddy, paper trail audit | Pipeline required 3 sessions (MANIFEST estimates 80-105 min; actual ~6 hours, 4x underestimate). Classified as "anomaly" but is a structural limitation. No fix addresses context budget. | `MANIFEST.md` (update time estimates; add context checkpoint protocol) |

### Category D: Gate Accuracy (3 items)

| # | Finding | Source Report(s) | Description | Spec File(s) Needing Modification |
|---|---------|-----------------|-------------|-----------------------------------|
| N-14 | **GR-21 threshold too low for COMPOSED mode** | gate-analysis, fix-effectiveness | 4-distinct-backgrounds threshold triggers on callout tint backgrounds at 4-6% opacity. V3 got 6 (4 zone backgrounds + callout tints). Threshold is too restrictive for pages with component variety. | `gate-runner-core.js` (GR-21: increase threshold to 6 for COMPOSED mode, or exclude backgrounds at <=10% opacity) |
| N-15 | **GR-22 flags skip-link background** | gate-analysis | GR-22 flags 4 red background uses including skip-link (accessibility element). Skip-link red bg is intentional for focus visibility. | `gate-runner-core.js` (GR-22: exempt skip-link and accessibility-focused elements) |
| N-16 | **Viewport namespacing conflict (GR-48 vs GR-49)** | AUDIT-SYNTHESIS action item 4 | Running gates at 1440px and 768px produces duplicate gate IDs. GR-48 deduplicates via Set, but GR-49 flags duplicates as integrity violation. These meta-gates conflict on every multi-viewport run. | `gate-runner-core.js` (add viewport field to result objects; update GR-49 to allow same-ID-different-viewport) |

### Category E: WCAG/Accessibility (2 items)

| # | Finding | Source Report(s) | Description | Spec File(s) Needing Modification |
|---|---------|-----------------|-------------|-----------------------------------|
| N-17 | **ARIA regression (19 -> 7 attributes)** | cross-run comparison (via adversarial) | V3 has 7 ARIA attributes vs VA Pipeline's 19. On a page with 5 tables, 14 collapsibles, and multiple diagrams, this is an accessibility failure. No fix in the 128 addresses ARIA. | `artifact-builder-recipe.md` (add ARIA accessibility requirement), `gate-runner-core.js` (add ARIA attribute count gate) |
| N-18 | **Zero WCAG contrast gates** | gate-usability-audit, priority-inversion-analysis | The most fundamental web accessibility standard (WCAG AA text contrast 4.5:1) has zero gate coverage. The page's primary diagram has illegible labels that would fail WCAG AA. | `gate-runner-core.js` (add GR-60 per gate-usability-audit Section 5) |

### Category F: Paradigm/Process (3 items)

| # | Finding | Source Report(s) | Description | Spec File(s) Needing Modification |
|---|---------|-----------------|-------------|-----------------------------------|
| N-19 | **Complexity-quality inversion (N=4 data)** | paradigm-analysis, MASTER-SYNTHESIS Finding 3 | Middle (100 lines) = 4/4. Gas Town v1 (610) = 3.5. V3 (3,600) = 3/4. Flagship (963) = 1.5. Suggestive inverse relationship, but confounded by model, content, format. Adversarial: Flagship outlier caused by FORMAT not VOLUME; removing it shows no clear trend. | N/A (paradigm question, not spec fix) |
| N-20 | **Opus vs Sonnet builder is the largest unexamined confound** | adversarial buddy, paradigm analysis | V3 used Opus builder. Previous runs used Sonnet. This is potentially the single largest variable change between runs. None of the 128 fixes address builder model. | N/A (experiment design question -- run identical content with Opus vs Sonnet to isolate) |
| N-21 | **Pipeline's 400:1 analysis-to-fix ratio** | MASTER-SYNTHESIS metacognitive warning | Phase 2 deployed 19 agents producing ~6,000+ lines of analysis for a page needing ~15 lines of CSS fixes. The pipeline's complexity disease is self-replicating. | N/A (process question -- reduce analysis scope for known-simple fix sets) |

---

## SECTION 4: UNTESTABLE (6 items)

These fixes were applied but the DPR screenshot bug prevents verification.

| # | Fix(es) | What was supposed to improve | Why untestable |
|---|---------|------------------------------|----------------|
| UT-01 | FIX-046 through FIX-054 (PA rewrites) | PA question quality and fresh-eyes compatibility | 9/9 pipeline auditors received corrupted screenshots from scroll-04+. Rewrite effectiveness is confounded, not nullified -- auditors answered about visible content, but dominant finding (void) was artifact. |
| UT-02 | FIX-055 through FIX-060 (new PA questions) | New question domains (content-form, accessibility, coherence, arc, hierarchy) | Same DPR corruption. Some questions produced partial signal but confidence is low. |
| UT-03 | FIX-061 through FIX-064 (PA redistributions) | Load balancing across auditors | Auditors answered their assigned questions, but quality of answers on 75% of page is compromised by screenshot corruption. |
| UT-04 | FIX-095 (D-09 Quiet Zone) | Zone 4 quiet zone specification | DPR-corrupted screenshots prevent verification of whether Z4 rendered as quieter than adjacent zones. |
| UT-05 | FIX-018 (components.css reference "Aim for 8+") | Component adoption target | Brief specifies target but V3 component adoption count cannot be verified from gate results alone. 2,152 lines of HTML suggests substantial usage but exact count unknown. |
| UT-06 | FIX-021 (CD-006 zone reference) | Builder references CD-006 for zone decisions | Routing confirmed (builder received CD-006). Whether builder actually referenced it for design decisions is unverifiable. |

---

## SECTION 5: FIX-FAILED PRIORITY RANKING

Ranked by severity and required effort.

| Rank | Item | Severity | Effort | Why it matters |
|------|------|----------|--------|----------------|
| **1** | **FF-04: GR-44 false negative (5,500px trailing void)** | HIGH | 1 hour | The trailing void was the #1 historical defect. The gate designed to catch it has a measurement bug that misses real voids. |
| **2** | **FF-02: GR-14 architectural false positives (13)** | HIGH | 2 hours | Gate is architecturally broken for nested HTML. False-positives on every run undermine gate system credibility. |
| **3** | **FF-05: GR-05 sub-perceptual tints as REQUIRED** | HIGH (credibility) | 1 hour | Triggers REBUILD for invisible violations. Central exhibit in the priority inversion case. Split into GR-05a/GR-05b. |
| **4** | **FF-06: GR-06 fallback fonts as REQUIRED** | HIGH (credibility) | 1 hour | 181 violations from fonts nobody sees. Check rendered font, not declared stack. |
| **5** | **FF-07: MANIFEST verdict rigidity** | MEDIUM | 30 min | "ANY Identity FAIL = REBUILD" is too rigid for mechanical CSS oversights. |
| **6** | **FF-01: GR-09 tolerance bands not functioning** | MEDIUM | 1 hour | Implementation gap between spec and deployed code. |
| **7** | **FF-03: GR-17 list item mutation** | LOW | 15 min | Predictable mutation. Add li to exemption group. |
| **8** | **FF-08: Conviction as HTML comment vs file** | LOW | 15 min | Spec mismatch, not quality failure. Accept HTML comment as valid. |

---

## SECTION 6: NEW FINDING PRIORITY RANKING

Ranked by leverage for pipeline improvement.

| Rank | Item | Leverage | Effort | Why it matters |
|------|------|----------|--------|----------------|
| **1** | **N-01 + N-02: Priority inversion + zero usability gates** | HIGHEST | 3-4 hours | THE dominant Phase 2 finding. Add GR-60 (text contrast REQUIRED). This single gate catches more real defects than GR-05/06/07 combined. |
| **2** | **N-05 + N-06: Experiential PA gap + legibility SPOF** | HIGHEST | 30 min spec | Add universal experiential pre-check to ALL auditors. Projected: chart detection goes from 11% to 78-100%. |
| **3** | **N-10 + N-11: Screenshot corruption + no validation** | HIGH | 2 hours | Systemic bug that corrupted 15/15 auditor reports. Add screenshot validation gate before PA distribution. |
| **4** | **N-04: Builder self-eval zero legibility questions** | HIGH | 5 min | Add 2 questions. Catches defects at the earliest, cheapest stage. |
| **5** | **N-12: No Phase 4 fix-application protocol** | HIGH | 1 hour | Pipeline ends at verdict. Mechanical fixes never applied within the run. |
| **6** | **N-03: Weaver priority model** | MEDIUM | 30 min | Add usability-blocker pre-filter so visible failures outrank invisible ones. |
| **7** | **N-17: ARIA regression** | MEDIUM | 1 hour | Add ARIA requirement to builder recipe + basic ARIA count gate. |
| **8** | **N-14 + N-15 + N-16: Gate accuracy items** | MEDIUM | 2 hours | GR-21 threshold, GR-22 skip-link exemption, viewport namespacing. |
| **9** | **N-18: WCAG contrast gates** | MEDIUM | 2 hours | Overlaps with N-02 (GR-60). Implementation in gate-usability-audit Section 5. |
| **10** | **N-19 + N-20: Paradigm questions** | LOW (action) | N/A | Requires controlled experiments, not spec changes. Opus vs Sonnet is highest-leverage unexamined variable. |

---

## SECTION 7: CONVERGENCE WITH PRE-RUN AUDIT PREDICTIONS

The AUDIT-SYNTHESIS made predictions before V3 ran. How did they hold up?

| Prediction | Pre-Run Source | Phase 2 Reality | Accurate? | Cross-Ref |
|------------|---------------|-----------------|-----------|-----------|
| "READY FOR FIRST MONITORED RUN" | Verdict (all 10 auditors) | Pipeline ran to completion producing CEILING-tier output | **YES** | -- |
| "Orchestrator is the weakest link" | 4 auditors (Finding 2) | Orchestrator compliance 6/10 self-assessed; DPR bug undetected; timestamps not recorded | **YES** | N-13 |
| "Binary gates catch compliance, not quality" | Multiple auditors (Finding 3) | All gates PASS or mechanically FAIL; quality exists (PA-05 = 3/4) | **YES** | N-01 |
| "BV gates are highest-value addition" | 5 auditors (Finding 4) | BV-02 caught real defect; BV-03 confirmed recipe format; BV-04 confirmed 0 suppressors | **YES** | AF-01 through AF-06 |
| "File splitting works" | Multiple auditors (Finding 5) | 45% -> 100% gate coverage; PA isolation enforced | **YES** | AF-04, AF-05 |
| "'Compliant But Flat' at 30-40% probability" | Adversarial auditor | Did NOT occur | **NO** (scenario did not happen) | AF-17 |
| "Conviction at 35% loss probability" | Propagation auditor | Conviction present but as HTML comment, not separate file | **PARTIAL** | FF-08 |
| "Specification volume may suppress creativity" | Metacognitive auditor | 291-line brief + Opus builder = CEILING-tier output at N=1 | **INCONCLUSIVE** | N-19 |
| "M-05 possibly STILL PARTIAL" | Adversarial auditor (Contradiction 4.1) | BV-01 passed on first check; no evidence of catching a thin brief. Gate calibration uncertain at N=1. | **UNRESOLVED** | UT-05 |
| "1 CRITICAL fix needed (tier leak in pa-questions.md)" | PA quality auditor | No evidence this was addressed or caused problems (DPR corruption obscures PA signal) | **UNTESTABLE** | UT-01 |

---

## SECTION 8: THE META-FINDING

The 128 fixes were designed by analyzing pipeline FAILURES. They fixed what went wrong. Phase 2 found what was NEVER CHECKED.

The 128 fixes addressed:
- Gate measurement accuracy (false positives, missing code, ID confusion)
- Gate coverage completeness (19/42 -> 100%)
- Brief quality (format, suppressors, thresholds, hex locks)
- PA protocol integrity (cross-validation, load balancing, rewrites)
- File architecture (splitting, isolation, routing)

The 128 fixes did NOT address:
- Whether the pipeline checks what matters to a HUMAN READER
- Whether invisible CSS violations should trigger REBUILD
- Whether the PA can detect functional failures (not just visual properties)
- Whether the builder is asked if the page WORKS (not just if it's composed)
- Whether screenshots can be trusted as evidence

**The fixes improved the system's ACCURACY at measuring the things it already measured. The Phase 2 findings reveal the system was measuring the WRONG THINGS.** Better measurement of CSS compliance does not help when the unmeasured thing is "can a person read the chart."

This is not a criticism of the 128-fix process. The fixes are well-specified, well-implemented, and demonstrably effective within their scope. BV gates alone justify the entire effort. The finding is that the SCOPE was defined by historical failures, and the most important current failure -- the priority inversion between CSS compliance and human usability -- was never in scope because it was never a failure. It was the design.

---

## APPENDIX: Complete Finding Inventory

### From MASTER-SYNTHESIS (3 major findings)
| Finding | Classification | Cross-Ref |
|---------|---------------|-----------|
| Finding 1: Priority Inversion (Pipeline-Wide) | **NEW** | N-01 |
| Finding 2: Experiential Gap (PA-Specific) | **NEW** | N-05 |
| Finding 3: Complexity-Quality Inversion | **NEW** | N-19 |

### From step5-gate-analysis (8 gate failures)
| Gate Failure | Classification | Cross-Ref |
|-------------|---------------|-----------|
| GR-05 warm palette (callout tints) | **FIX-FAILED** | FF-05 |
| GR-06 font trinity (fallback fonts) | **FIX-FAILED** | FF-06 |
| GR-07 pure B/W (html default) | **ALREADY-FIXED** (gate works correctly, trivial CSS fix) | AF-14 |
| GR-09 border hierarchy (tolerance bands) | **FIX-FAILED** | FF-01 |
| GR-14 visual gap (nested structure) | **FIX-FAILED** | FF-02 |
| GR-17 density stacking (list items) | **FIX-FAILED** | FF-03 |
| GR-21 cognitive overload (ADVISORY) | **NEW** | N-14 |
| GR-22 color zone conflict (ADVISORY) | **NEW** | N-15 |

### From step7-fix-effectiveness (5 categories)
| Category | Classification | Cross-Ref |
|----------|---------------|-----------|
| BV Gates all WORKED | **ALREADY-FIXED** | AF-01 through AF-06 |
| New Gates mostly WORKED | **ALREADY-FIXED** (8), **FIX-FAILED** (GR-44) | AF-15, FF-04 |
| Gate Defect Fixes mixed | **ALREADY-FIXED** (3), **FIX-FAILED** (3) | AF-12/13/14, FF-01/02/03 |
| PA Rewrites UNTESTABLE | **UNTESTABLE** | UT-01 through UT-03 |
| Builder Recipe Changes WORKED | **ALREADY-FIXED** (6) | AF-08 through AF-10 |

### From buddy-adversarial (10 findings)
| Finding | Classification | Cross-Ref |
|---------|---------------|-----------|
| Middle Experiment comparison confounded | **NEW** | N-19 |
| Screenshot corruption contaminated all PA | **NEW** | N-10 |
| Chart illegibility = PA design flaw | **NEW** | N-05 |
| PA-05 = 3/4 is upper-bound estimate | Observation (no fix implication) | -- |
| MANIFEST verdict logic is the defect | **FIX-FAILED** | FF-07 |
| V3 IS the best Gas Town output | Observation (positive) | -- |
| Infrastructure quality != output quality | Observation (meta) | -- |
| Opus builder is largest unexamined confound | **NEW** | N-20 |
| Phase 2 itself exhibits process-over-outcome trap | **NEW** | N-21 |
| Next run risk: content-form mismatch | Observation (future risk) | -- |

### From priority-inversion-analysis (5 stages analyzed)
| Stage | Classification | Cross-Ref |
|-------|---------------|-----------|
| Builder self-eval: 0 legibility questions | **NEW** | N-04 |
| Gate runner: 0 usability gates | **NEW** | N-02 |
| PA routing: legibility SPOF (1/9 auditors) | **NEW** | N-06 |
| Weaver: invisible > visible priority | **NEW** | N-03 |
| Orchestrator: no usability circuit breaker | **NEW** | N-04 (related) |

### From gate-usability-audit (gate-by-gate classification)
| Finding | Classification | Cross-Ref |
|---------|---------------|-----------|
| 4/18 REQUIRED gates are SUB-PERCEPTUAL | **NEW** | N-01 |
| 0 usability gates exist | **NEW** | N-02 |
| Proposed GR-60/61/62 with full Playwright code | **NEW** (actionable implementation) | N-02, N-18 |
| 6 gate downgrade recommendations | **NEW** | N-01 |
| GR-43 should be RECOMMENDED not REQUIRED | **NEW** | N-01 |

### From experiential-pa-analysis (per-auditor analysis)
| Finding | Classification | Cross-Ref |
|---------|---------------|-----------|
| 1/9 thorough chart detection (11%) | **NEW** | N-05 |
| Proposed experiential pass (78-100% detection) | **NEW** (actionable) | N-05 |
| PA-02/PA-08 both routed to Auditor B only | **NEW** | N-06 |

### From inattentional-blindness-audit (23 usability issues)
| Finding | Classification | Cross-Ref |
|---------|---------------|-----------|
| 43% experiential miss rate (10/23) | **NEW** | N-07 |
| Functional failures missed > visual imperfections missed | **NEW** | N-07 |
| 23 specific usability issues cataloged | **NEW** | N-07 |

---

*Cross-reference complete. 53 distinct findings classified across 4 categories. 18 ALREADY-FIXED (the 128 fixes worked). 8 FIX-FAILED (fixes that need revision). 21 NEW (blind spots the 128-fix process never anticipated). 6 UNTESTABLE (DPR screenshot bug prevents verification). The dominant new finding -- priority inversion between CSS compliance and human usability -- was never in the 128-fix scope because it was not a failure mode. It was the design philosophy.*

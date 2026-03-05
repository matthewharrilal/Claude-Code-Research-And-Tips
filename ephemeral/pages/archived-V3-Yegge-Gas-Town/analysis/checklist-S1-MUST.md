# SECTION 1: TIER 1 — MUST ITEMS

**Extracted by:** checklist-S1 agent (Opus 4.6)
**Date:** 2026-02-25
**Sources:** audit-05-08.md, audit-mechanisms.md, audit-09-11.md
**Scope:** Every item classified MUST or BLOCKING across all three audit files

---

## 9 BLOCKING ENRICHMENTS (ME-001 through ME-009)

---

#### [ME-001]: Add Experiential Pass (Section 2.5) to ALL PA Auditors
- **What:** Mandatory experiential reading pass before question answering. Auditors perform cold-look reading pass reporting: (1) illegible text, (2) effortful text, (3) skipped text. Report at TOP of audit as "## 0. Experiential Pass." Also adds universal legibility pre-check U-01 as FIRST question for all 9 auditors.
- **Where:** `pa-deployment.md` (+22 lines, insertion after Section 1.2 assignments, before Section 2 screenshots)
- **How:** Add new Section 2.5 with experiential pass protocol. Auditor-facing instruction: "Before answering your assigned questions, spend 2 minutes describing your first impression of the page." Orchestrator-facing setup goes in pa-deployment.md. Auditor prompt receives only the observation instruction, NOT the rationale.
- **Format rules:** Use observation verbs: "Describe what you see," "Note your first impression." NOT measurement verbs: "Verify legibility," "Check that text is readable." pa-deployment.md uses ORCHESTRATOR DECISION TREE format (phased steps with Input/Action/Output/Verification).
- **Anti-loss mechanisms:** M-04 (context isolation — CRITICAL: experiential pass instructions must contain NO tier definitions, NO PA-05 expected scores, NO mechanism counts), M-09 (prompt templates — PA auditor template must be updated to include experiential pass), M-20 (fresh-eyes — CRITICAL: instructions in pa-deployment.md ONLY, not pa-questions.md or pa-guardrails.md), M-22 (9-auditor deployment — new step in PA protocol)
- **Propagation cascades:** (1) pa-deployment.md (primary), (2) MANIFEST.md quickstart step 8 (if it references PA auditor workflow), (3) EXECUTION-TRACKER-TEMPLATE.md Phase 3B checklist, (4) PA auditor prompt template in MANIFEST Appendix E must reference experiential pass
- **Pre-conditions:** None — ME-001 can be implemented independently. However, ME-002 (Weaver priority) should be aware of experiential pass output format. ME-009 (aggregation) consumes ME-001 output.
- **Post-verification:** (1) Read new text: zero calibration data, zero mechanism counts, zero pipeline history. (2) Verify pa-questions.md NOT modified. (3) Verify pa-guardrails.md NOT modified (or if modified, only to add "complete experiential pass before answering questions" — no calibration). (4) Verify total line count of pa-deployment.md (~259). (5) Verify observation verbs only.
- **Budget impact:** +22 lines to pa-deployment.md (237 -> 259, below 300 threshold)
- **In current 8-change plan?** YES
- **Source audit files:** audit-05-08.md (Tier 1 BLOCKING), audit-mechanisms.md (Change 1 safety checklist), audit-09-11.md (FRESH-2-1 "single best enrichment," FRESH-4-1 top pick #1, META-2A chain analysis, ADV-1A time cost concerns)

---

#### [ME-002]: Add Usability Priority Override (New Section 5.0) to Weaver Fix Ordering
- **What:** "Is there ANY finding a reader CANNOT READ or CANNOT USE?" = Fix #1 regardless of gate status. New priority ordering: (1) Human readability, (2) Visual perception, (3) Identity compliance. Includes emotional arc connection (from HE-015). Binary framing: "If ANY auditor reports text illegibility at arm's length → this overrides PA-05 sub-criteria scoring."
- **Where:** `pa-weaver.md` (+14 lines, within existing verdict logic section)
- **How:** Add new Section 5.0 with usability priority override. If ME-002 only adds a PRIORITY OVERRIDE (usability trumps other criteria), it only needs to be in pa-weaver.md. If it modifies existing SHIP/REFINE/REBUILD thresholds, must propagate to 7 locations.
- **Format rules:** pa-weaver.md uses VERDICT PROTOCOL format. New usability priority must follow existing verdict threshold table structure. Weaver instructions can use judgment verbs (weaver IS the judgment agent). But the usability override itself should be binary.
- **Anti-loss mechanisms:** M-04 (context isolation — weaver-facing, safe; auditors do NOT see pa-weaver.md), M-13 (binary rules — weaver verdict is informed by this; if override modifies verdict thresholds, must be consistent across all 7 locations)
- **Propagation cascades:** If ONLY priority override: pa-weaver.md only. If verdict thresholds change: must propagate to MANIFEST.md L275-285, gate-manifest.json L55-59, gate-runner-spec.md L53-57, artifact-orchestrator.md verdict tree.
- **Pre-conditions:** ME-001 should be implemented first — ME-002 references auditor experiential pass output. If ME-001 is not implemented, the override references non-existent data.
- **Post-verification:** (1) Verify override uses binary language, not judgment scales. (2) Verify no calibration data leaked into auditor-visible files. (3) Verify verdict logic in pa-weaver.md is consistent with MANIFEST L275-285. (4) If verdict thresholds changed, verify all 7 cross-file locations updated.
- **Budget impact:** +14 lines to pa-weaver.md (376 -> 390, below threshold)
- **In current 8-change plan?** YES
- **Source audit files:** audit-05-08.md (Tier 1 BLOCKING, HE-004 confirms with specific fix ordering evidence: "1. Font stack, 2. Callout backgrounds, 3. Border widths, 4. HTML default color, 5. Chart legibility"), audit-mechanisms.md (Change 2 safety checklist)

---

#### [ME-003]: Add WCAG Text Contrast Gate GR-60 (REQUIRED)
- **What:** New programmatic gate. Normal text >=4.5:1 contrast ratio, large text >=3:1. Walk DOM tree for effective background. Check SVG text/tspan. ~70 lines new gate code. Must update: gate-runner-core.js, GR-48 REQUIRED_GATES array, gate-manifest.json, gate-runner-spec.md, pa-questions.md Appendix B.
- **Where:** `gate-runner-core.js` (+70 lines), `gate-manifest.json`, `gate-runner-spec.md`, `pa-questions.md` Appendix B (6-location update per M-13)
- **How:** Implement DOM-walking contrast checker in Playwright JavaScript. Full implementation sketch referenced in "gate-usability-audit.md Section 5" (external file — must be located and read). Result schema: `{ gate: 'GR-60', name: '...', status: 'PASS'|'FAIL', measured: {...}, threshold: {...} }`.
- **Format rules:** gate-runner-core.js uses EXECUTABLE PLAYWRIGHT JAVASCRIPT format. Try/catch wrapper mandatory. Result object schema must match existing gates.
- **Anti-loss mechanisms:** M-13 (binary rules — CRITICAL: new REQUIRED gate must appear in REQUIRED_GATES array at L1331), M-19 (programmatic verification — CRITICAL: gate-runner-core.js is most fragile file), M-08 (dual-route — DOM walking code could conflict with isRenderedElement() helper)
- **Propagation cascades:** 6-location update: (1) gate-runner-core.js (new gate function), (2) gate-runner-core.js L1331-1340 (REQUIRED_GATES array), (3) gate-manifest.json (new entry), (4) gate-runner-spec.md (new documentation), (5) pa-questions.md Appendix B (perception thresholds), (6) MANIFEST.md (gate count references)
- **Pre-conditions:** **CRITICAL — MULTIPLE UNRESOLVED PRECONDITIONS:**
  - ADV-07a: Gate-runner subtraction plan (~150 lines removal of GR-33-42 + GR-08) MUST happen BEFORE any gate additions. gate-runner-core.js has ZERO net budget.
  - ADV-1B-7 / ADV-1B-2 / ADV-1B-3: **WCAG palette conflict UNRESOLVED.** #2a7d7d (muted teal) on #f0ebe3 = ~4.1:1, BELOW 4.5:1. Sage green (#6b9b7a), warm amber (#c49052), muted coral (#c97065) all in 3:1-5:1 danger zone. WCAG gate would produce REQUIRED failures on colors the soul MANDATES. Must resolve via Option A (decorative exemption), Option B (revised accent palette), or Option C (RECOMMENDED tier instead of REQUIRED).
  - ADV-03: ME-003 says "go read gate-usability-audit.md Section 5 for code" — implementer must find and read a SEPARATE file. "2-hour task disguised as single enrichment."
  - ADV-05b: Combined gate additions (ME-003 + ME-014 + ME-040 = ~180 lines) exceed budget even after subtraction.
  - META-2B-1/2B-2: Gate produces PASS/FAIL, not fixes. WCAG FAIL on REQUIRED = REBUILD verdict. Rebuilt builder does NOT receive specific contrast failure info. May create infinite loop.
- **Post-verification:** (1) Verify GR-60 in REQUIRED_GATES array. (2) Verify result schema matches existing gates. (3) Verify gate-runner-core.js total line count (must subtract elsewhere to stay within budget). (4) Verify gate-manifest.json entry. (5) Verify no other gate functions accidentally modified. (6) Test against known HTML with known contrast ratios.
- **Budget impact:** +70 lines to gate-runner-core.js (EXCEEDS zero-net budget by 70 lines; requires -70 line offset elsewhere)
- **In current 8-change plan?** NO
- **Source audit files:** audit-05-08.md (Tier 1 BLOCKING, ADV-06c argues "rank 12-15 not rank 3"), audit-09-11.md (ADV-1B-1 through ADV-1B-7 palette conflict, ADV-5-4 missing code, FRESH-2-2 "should have been gate #1", FRESH-4-2 top pick #2, META-2B chain analysis)

---

#### [ME-004]: Add Legibility Self-Check Q0+Q1 to Builder Self-Evaluation
- **What:** Q0: text legibility scan (size <12px? contrast <3:1? diagram labels?). Q1: visual component clarity check. Renumber existing Q1-Q7 to Q2-Q8. Also add builder self-check grep commands (from HE-013: grep for non-trinity fonts, check rgba warmth, verify html color, check border-width integers).
- **Where:** `artifact-builder-recipe.md` (+12 lines, in Phase 5 self-evaluate section or equivalent)
- **How:** Add Q0 and Q1 as new self-check steps. Q0 must use recipe framing: "Assess: Can body text be comfortably read at arm's length? If not, increase font-size or line-height." NOT "Verify that text size >= 16px." Renumber existing Q1-Q7 to Q2-Q8.
- **Format rules:** artifact-builder-recipe.md uses RECIPE FORMAT. Template: `### Step N.M: [Action Verb] [What]` with Read/Select/Deploy/Assess structure. ALL new verbs MUST be recipe verbs (Build/Create/Derive/Map/Read/Select/Deploy/Assess). MUST avoid checklist verbs (Verify/Fail if/Must be/Ensure/Check that). MUST avoid suppressor phrases ("sample N-N", "must not"/"shall not"/"never use", ">= N channels").
- **Anti-loss mechanisms:** M-06 (suppressor management — CRITICAL: new content enters brief via Brief Assembler extraction, BV-04 will scan it), M-11 (recipe format — CRITICAL: BV-03 checks recipe:checklist ratio, must remain >= 3:1), M-12 (world-description framing — CRITICAL: must not use prohibitions), M-03 (direct injection — verify L62-63 "direct file routes" bypass still works), M-25 (honest accounting — update line count)
- **Propagation cascades:** Q0 is a self-check step in builder recipe. Does NOT propagate to gate-runner, PA questions, or verdict logic. IF Brief Assembler's extraction guide (MANIFEST.md L236-240) needs updating to include Q0 in "INCLUDE VERBATIM" list, add it there.
- **Pre-conditions:** None — can be implemented independently.
- **Post-verification:** (1) Count recipe verbs vs checklist verbs in new text. (2) Search for BV-04 trigger phrases (zero matches required). (3) Verify no gate thresholds in pass/fail format. (4) Verify world-description framing throughout. (5) Verify Step numbering is consistent. (6) Verify artifact-builder-recipe.md L62-63 ("direct file routes") unchanged.
- **Budget impact:** +12 lines to artifact-builder-recipe.md (~934 -> ~946, within +50 budget)
- **In current 8-change plan?** YES
- **Source audit files:** audit-05-08.md (Tier 1 BLOCKING), audit-mechanisms.md (Change 3 safety checklist with 10 verification items), audit-09-11.md (FRESH-4-7 honorable mention)

---

#### [ME-005]: Fix Verdict Logic for Mechanical Identity Failures
- **What:** Add MECHANICAL exception: if ALL REQUIRED identity gate failures are MECHANICAL (<=5 CSS lines, no HTML structural change, no design decision), verdict = REFINE not REBUILD. Add protocol override rule requiring orchestrator independent justification. Binary definition: "ALL identity failures require <=5 CSS lines to fix AND require no HTML structural changes AND require no design decisions → MECHANICAL → REFINE; ANY non-MECHANICAL identity failure → REBUILD."
- **Where:** `MANIFEST.md` (+8 lines at L276+), `gate-manifest.json` (L55-59), `gate-runner-core.js` (L752-778 verdict summary — net-zero mandatory)
- **How:** Update verdict logic across ALL 7+ locations simultaneously. Modify verdict decision tree to include MECHANICAL classification before REBUILD determination. Update early termination at MANIFEST L474 (applies only to non-MECHANICAL failures). Update circuit breaker at MANIFEST L605 if new iteration type added.
- **Format rules:** MANIFEST.md uses DECLARATIVE ROUTING + AGENT TEMPLATES format. Verdict logic uses prioritized list format. gate-manifest.json uses structured JSON. gate-runner-core.js uses executable JavaScript. Verdict logic is a DECISION TREE — binary conditions appropriate.
- **Anti-loss mechanisms:** M-13 (binary rules — CRITICAL: verdict logic is the core binary system; 7+ location consistency required), M-19 (programmatic verification — CRITICAL: if verdict summary in JS changes), M-23 (REBUILD not FIX — directly modifies when REBUILD triggers; THIS IS the pipeline's most important safety mechanism), M-07 (MANIFEST routing — editing MANIFEST), M-02 (dual-channel — verdict consumes dual-channel output)
- **Propagation cascades:** **THIS IS THE HIGHEST-CASCADE CHANGE.** ALL must be updated simultaneously: (1) MANIFEST.md L276 (primary), (2) MANIFEST.md L505 (Phase 3C), (3) MANIFEST.md L646 (failure mode table), (4) MANIFEST.md L714 (critical path table), (5) MANIFEST.md L1144 (execution sequence), (6) gate-manifest.json L56 (verdict registry), (7) gate-runner-spec.md L53 (spec docs), (8) artifact-orchestrator.md verdict decision tree. MISS ONE = contradiction.
- **Pre-conditions:** (1) Read ALL 7 verdict logic locations in full. (2) Verify current verdict logic is consistent across all 7 BEFORE editing. (3) Verify MECHANICAL concept is compatible with pa-weaver.md Section 3 diagnostic vocabulary. (4) Determine whether gate-runner-core.js verdict summary (L752-778) needs modification. (5) ADV-05c: MECHANICAL + circuit breaker interaction — when ME-005 and ME-008 both coexist, what happens? MECHANICAL says REFINE; usability breaker says "Fix #1." Interaction undefined.
- **Post-verification:** (1) Read ALL 7 verdict logic locations. Verify word-for-word consistency. (2) Verify early termination at MANIFEST L474 updated. (3) Verify circuit breaker at MANIFEST L605 updated. (4) Verify gate-manifest.json L56 matches MANIFEST L276. (5) Verify gate-runner-spec.md L53 matches. (6) Verify artifact-orchestrator.md verdict tree matches. (7) If gate-runner-core.js modified: verify function signatures unchanged, verify result schema unchanged, verify total line count <= 1,437.
- **Budget impact:** +8 lines MANIFEST.md (limited headroom of +20), +4 lines gate-manifest.json, net-zero gate-runner-core.js
- **In current 8-change plan?** YES
- **Source audit files:** audit-05-08.md (Tier 1 BLOCKING, Anti-Loss rated RISK — "modifies M-23 REBUILD Not FIX — the pipeline's most important safety mechanism"), audit-mechanisms.md (Change 6 safety checklist, "HIGHEST-CASCADE CHANGE"), audit-09-11.md (ADV-04b coordinated file warning, ADV-05c MECHANICAL+circuit breaker conflict, FRESH-8-4 verdict governance unclear)

---

#### [ME-006]: Add Screenshot Validation Gate Before PA Deployment
- **What:** 4 sub-changes: (1) Expand CSS override to include `visibility: visible !important; transform: none !important` (targeting `*::before, *::after` pseudo-elements), (2) Add Section 2.3a screenshot validation (no >2 consecutive blank, <20% blank total), (3) Add Section 2.5 full-page cross-reference (if full-page shows content not in scroll-through, overrides failed — REPEAT), (4) Add DPR validation to orchestrator.
- **Where:** `pa-deployment.md` (+15 lines, after capture, before auditor spawn), `artifact-orchestrator.md` (+12 lines, Phase 3A workflow)
- **How:** Add validation step between screenshot capture and auditor deployment: Capture → **Validate** → Deploy auditors. If blank >2 consecutive or >20% total at any viewport, capture is SUSPECT → re-capture with expanded CSS overrides. If full-page shows content not in scroll-through, overrides failed → halt and re-capture.
- **Format rules:** pa-deployment.md: phased protocol format. artifact-orchestrator.md: ORCHESTRATOR DECISION TREE format with Input/Action/Output/Verification/If FAIL template.
- **Anti-loss mechanisms:** M-21 (screenshot pre-capture — directly extends; verify it ADDS validation AFTER capture, not DURING), M-04 (context isolation — CRITICAL: screenshot validation results must NOT reach auditors; if auditors know screenshots were re-captured, it anchors their assessment), M-20 (fresh-eyes — validation adds step before auditor spawn), M-09 (prompt templates — orchestrator workflow changes)
- **Propagation cascades:** (1) pa-deployment.md (primary), (2) artifact-orchestrator.md (orchestrator workflow), (3) MANIFEST.md quickstart step 6 (if references screenshot flow), (4) EXECUTION-TRACKER-TEMPLATE.md Phase 3A checklist
- **Pre-conditions:**
  - ADV-1C-1/1C-2/1C-3: CSS overrides CHANGE THE PAGE. Scroll-triggered reveals show everything at once. Re-captured page is NOT the page the builder built. Needs builder signal mechanism (`<!-- SCROLL-REVEALS: true -->`) to distinguish intentional hidden content from broken screenshots.
  - ADV-1C-4: Two categories of blank: (a) DPR/animation bug — re-capture fixes; (b) Intentional scroll-triggered content — re-capture CREATES problem. Validation gate cannot distinguish without builder signal.
  - PE-009 check 3 (lost in merge): screenshot content should match expected section count from page's own navigation — structural promise cross-check NOT in current ME-006 spec.
  - HE-012 (lost in merge): PA question "PA-83: Does the page end cleanly at footer?" + always capture screenshot at scrollHeight - viewportHeight. Both lost.
- **Post-verification:** (1) Verify validation logic stays in orchestrator-facing files only. (2) Verify no validation results leak to pa-questions.md or pa-guardrails.md. (3) Verify MANIFEST quickstart step 6 updated. (4) Verify EXECUTION-TRACKER Phase 3A updated. (5) If builder signal implemented: verify it's in artifact-builder-recipe.md AND builder prompt template. (6) Verify capture sequence itself (pa-deployment.md Section 2.2) is NOT modified — validation is AFTER capture.
- **Budget impact:** +15 lines pa-deployment.md (237 + ME-001's 22 + 15 = 274, approaching but below 300 threshold), +12 lines artifact-orchestrator.md (~1,058 -> ~1,070, within +50 budget)
- **In current 8-change plan?** YES
- **Source audit files:** audit-05-08.md (Tier 1 BLOCKING, PE-001 CSS details, PE-002/PE-009/PE-011 validation sub-changes), audit-mechanisms.md (Change 7 safety checklist), audit-09-11.md (ADV-1C-1 through ADV-1C-4 new failure modes, META-2C-1 "strongest causal chain" 85%+, FRESH-2-3 "input validation for most expensive phase", FRESH-4-3 top pick #3)

---

#### [ME-007]: Fix GR-44 False Negative (Trailing Void Measurement)
- **What:** Replace current trailing void measurement algorithm with: find last visible element via `getBoundingClientRect()`, compare bottom to `scrollHeight`, fail if gap >300px. PRESERVE existing content-zone measurement as sub-check A, add page-level as sub-check B. Also add builder recipe trailing void check (from ME-041 content).
- **Where:** `gate-runner-core.js` (+10 lines, must be net-zero with -10 offset elsewhere)
- **How:** Locate GR-44 code block in gate-runner-core.js. Replace measurement logic. Preserve result schema: `{ gate: 'GR-44', name: '...', status: 'PASS'|'FAIL', measured: {...}, threshold: {...} }`. Identify -10 lines to subtract for net-zero (comment trimming, redundant helper consolidation, or gate logic tightening).
- **Format rules:** gate-runner-core.js uses EXECUTABLE PLAYWRIGHT JAVASCRIPT format. Try/catch wrapper mandatory. No other status values beyond PASS/FAIL.
- **Anti-loss mechanisms:** M-13 (binary rules — CRITICAL: GR-44 is in REQUIRED_GATES at L1334; must remain there), M-19 (programmatic verification — CRITICAL: modifying most fragile file; no other gate functions may be accidentally modified), M-05 (BV-01 code must not be affected), M-06 (BV-04 code must not be affected)
- **Propagation cascades:** If only MEASUREMENT LOGIC changes (how trailing void is detected), only gate-runner-core.js changes. If gate NAME or ID changes, must update: gate-manifest.json, gate-runner-spec.md, MANIFEST.md. GR-44 is in verdict summary at L756 (`perceptionGates` filter includes 'GR-44'). ADV-1D-1: GR-44 vs SC-10 overlap — reducing trailing space to fix GR-44 could accidentally compress last zone boundary gap below SC-10's 120px threshold. No coordination between the two gates.
- **Pre-conditions:** (1) Read GR-44 code block in full. (2) Understand current measurement and identify the BUG. (3) Identify -10 lines to subtract for net-zero. (4) Verify surrounding gate functions won't be affected.
- **Post-verification:** (1) Verify GR-44 result schema matches `{ gate, name, status, measured, threshold }`. (2) Verify GR-44 in REQUIRED_GATES at L1331-1335. (3) Verify verdict summary at L752-778 still includes 'GR-44' in perceptionGates filter. (4) Verify no other gate functions accidentally modified (check first/last lines of adjacent gates). (5) Verify function boundary comments unchanged. (6) Count total lines: must be <= 1,437. (7) Run modified gate-runner against known HTML to verify no JavaScript errors.
- **Budget impact:** +10 lines to gate-runner-core.js (REQUIRES -10 offset for net-zero mandatory)
- **In current 8-change plan?** YES
- **Source audit files:** audit-05-08.md (Tier 1 BLOCKING, "single worst false negative in gate system," HE-002/HE-012 confirm), audit-mechanisms.md (Change 4 safety checklist), audit-09-11.md (ADV-1D-1/1D-2 SC-10 overlap, FRESH-4-4 top pick #4 "concrete bug fix")

---

#### [ME-008]: Add Usability Circuit Breaker to Orchestrator
- **What:** Between Phase 3B (PA) and 3C (Weaver), orchestrator scans all 9 reports for BLOCKING usability findings. If found: elevate to BLOCKING-USABILITY, annotate as "must be Fix #1" for Weaver, verify fix in SHIP WITH FIXES verdict.
- **Where:** `MANIFEST.md` (+8 lines, between Phase 3B and 3C sections)
- **How:** Add orchestrator scan step between PA deployment results and Weaver invocation. Binary check: if ANY auditor experiential pass (ME-001) or question response flags text illegibility → orchestrator elevates to BLOCKING-USABILITY before passing to Weaver.
- **Format rules:** MANIFEST.md uses DECLARATIVE ROUTING format. Orchestrator instructions use decision-tree language.
- **Anti-loss mechanisms:** M-04 (context isolation — safe, orchestrator-facing), M-07 (MANIFEST routing — editing MANIFEST), M-23 (REBUILD not FIX — circuit breaker interacts with verdict logic)
- **Propagation cascades:** (1) MANIFEST.md (primary), (2) artifact-orchestrator.md (Phase 3B-3C transition), (3) EXECUTION-TRACKER-TEMPLATE.md
- **Pre-conditions:** ME-001 must be implemented first (circuit breaker scans experiential pass output). ADV-05c: When ME-005 (MECHANICAL) and ME-008 (circuit breaker) coexist, interaction is undefined — MECHANICAL says REFINE; usability breaker says "Fix #1." Must define which takes precedence.
- **Post-verification:** (1) Verify circuit breaker uses binary language. (2) Verify it scans experiential pass output format defined by ME-001. (3) Verify interaction with ME-005 MECHANICAL exception is defined.
- **Budget impact:** +8 lines to MANIFEST.md (limited headroom of +20)
- **In current 8-change plan?** NO
- **Source audit files:** audit-05-08.md (Tier 1 BLOCKING)

---

#### [ME-009]: Add Experiential Detection Threshold Table + Aggregation Rules
- **What:** >=3/9 auditors flag same text = CONFIRMED illegibility (Fix #1). 1/9 = POSSIBLE (Weaver investigates). 0/9 = All text readable. Add pre-aggregated summary to Weaver inputs. Ensure no calibration data leaks to auditors per M-04/M-20.
- **Where:** `pa-deployment.md` (+15 lines, new aggregation section), `pa-weaver.md` (+8 lines, aggregated summary input format)
- **How:** Add threshold table to pa-deployment.md (orchestrator computes aggregation from 9 experiential pass reports). Add pre-aggregated summary format to pa-weaver.md (Weaver receives structured summary, not raw 9 reports for this dimension).
- **Format rules:** pa-deployment.md: phased protocol format. pa-weaver.md: verdict protocol format. Aggregation thresholds are binary (>=3 = CONFIRMED, 1-2 = POSSIBLE, 0 = CLEAR).
- **Anti-loss mechanisms:** M-04 (context isolation — CRITICAL: aggregation thresholds must NOT leak to auditors; they are orchestrator/weaver-facing only), M-20 (fresh-eyes — aggregation is post-auditor, safe if kept in orchestrator/weaver files)
- **Propagation cascades:** (1) pa-deployment.md (primary — orchestrator aggregation step), (2) pa-weaver.md (Weaver input format)
- **Pre-conditions:** ME-001 must be implemented first (ME-009 aggregates ME-001 output). ADV-1A-2/1A-5: 9 auditors each reporting 3 categories = ~100+ new Weaver input lines. ME-009 structures consumption but does NOT reduce volume. Weaver capacity not analyzed.
- **Post-verification:** (1) Verify thresholds are binary (>=3/1-2/0). (2) Verify no calibration data in auditor-visible files. (3) Verify pa-deployment.md aggregation step is orchestrator-facing only. (4) Verify Weaver input format is structured (pre-aggregated summary), not raw dump.
- **Budget impact:** +15 lines pa-deployment.md (274 from ME-001+ME-006 + 15 = 289, approaching 300 threshold), +8 lines pa-weaver.md (390 from ME-002 + 8 = 398)
- **In current 8-change plan?** NO
- **Source audit files:** audit-05-08.md (Tier 1 BLOCKING), audit-09-11.md (ADV-1A-5 "does not reduce volume," FRESH-7-1 "symptomatic — root cause is ME-001")

---

## ADDITIONAL MUST ITEMS FROM BUDDY REPORTS

---

#### [ADV-1A-4 / ADV-3-3 / ADV-7B]: Three-Auditor Experiential Pass Optimization
- **What:** Run experiential pass on ONLY 3 auditors (cold-look specialist + structural specialist + content-form specialist), not all 9. Uses ME-009's 3/9 confirmation threshold — if 3/3 experiential auditors flag same text, that exceeds the >=3/9 CONFIRMED threshold already. Gets 33% of cost for approximately same detection power. Alternatively per ADV-7B: 3 experiential + 3-4 analytical = 6-7 total auditors.
- **Where:** `pa-deployment.md` (modify ME-001 experiential pass to designate 3 auditors, not all 9)
- **How:** When implementing ME-001, instead of adding experiential pass to ALL 9 auditors, designate 3 specific auditors (A = cold-look/impression, E = structural, G or I = content-form/adversarial) as experiential pass auditors. Other 6 auditors proceed directly to their assigned questions.
- **Format rules:** Same as ME-001 (observation verbs, orchestrator decision tree format).
- **Anti-loss mechanisms:** M-22 (9-auditor deployment — modifies auditor differentiation; 3 have expanded scope, 6 unchanged)
- **Propagation cascades:** Same as ME-001 propagation, plus: pa-deployment.md assignment table must reflect which 3 auditors do experiential pass.
- **Pre-conditions:** ME-001 must be designed first (this is an optimization OF ME-001).
- **Post-verification:** (1) Verify exactly 3 auditors designated for experiential pass. (2) Verify the 3 are the best candidates (cold-look, structural, adversarial). (3) Verify other 6 auditors' workflow is unchanged. (4) Verify ME-009 aggregation thresholds still work (3/3 = 3/9 equivalent).
- **Budget impact:** Net SAVINGS — reduces ME-001's +22 lines because experiential pass instructions only target 3 auditors, not 9. Also saves 45-72 min pipeline time (ADV-1A-1) and ~$15-20/run (HE-009).
- **In current 8-change plan?** NO — "Nobody in the analysis corpus has proposed this optimization"
- **Source audit files:** audit-09-11.md (ADV-1A-4, ADV-3-3, ADV-7B — convergence across 2 of 3 buddy files: ADV and META both identify 9 experiential auditors as wasteful)

---

#### [ADV-1B-7]: WCAG Palette Conflict Resolution (Pre-condition for ME-003)
- **What:** ME-003 (WCAG gate) will produce REQUIRED failures on soul-mandated accent colors. #2a7d7d on #f0ebe3 = ~4.1:1 (BELOW 4.5:1). Sage green, warm amber, muted coral all in danger zone. THREE resolution options, ONE must be chosen BEFORE implementing ME-003: Option A (WCAG exemption for decorative/non-informational accent colors), Option B (revised accent palette passing 4.5:1 on ALL warm backgrounds), Option C (WCAG gate at RECOMMENDED tier not REQUIRED).
- **Where:** Decision required before ME-003 implementation. Affects: `gate-runner-core.js` (GR-60 implementation), `tokens.css` (if Option B), `gate-manifest.json` (if Option C)
- **How:** User must decide Option A, B, or C. Then ME-003 implementation incorporates the chosen resolution.
- **Format rules:** N/A — decision item, not spec content.
- **Anti-loss mechanisms:** M-08 (dual-route — if accent palette changes, builder calibration values must update too)
- **Propagation cascades:** Option A: gate-runner-core.js decorative exemption logic. Option B: tokens.css accent colors + all files referencing accent hex values. Option C: gate-manifest.json tier change from REQUIRED to RECOMMENDED.
- **Pre-conditions:** Contrast ratio calculations for ALL accent colors on ALL warm backgrounds must be verified first.
- **Post-verification:** (1) Verify chosen option eliminates false positives on soul-mandated accent colors. (2) Verify chosen option does NOT eliminate true positives on genuinely illegible text.
- **Budget impact:** Depends on option chosen. Option A: +5-10 lines gate-runner. Option B: +0 lines (value changes only). Option C: +0 lines (tier change only).
- **In current 8-change plan?** NO (ME-003 itself is not in plan)
- **Source audit files:** audit-09-11.md (ADV-1B-1 through ADV-1B-7, rated MUST)

---

#### [ADV-1C-3]: Builder Signal Mechanism for Screenshot Validation (Pre-condition for ME-006)
- **What:** ME-006 screenshot validation needs a builder signal: "This page uses scroll-triggered reveals" that exempts it from blank-screenshot threshold while still catching actual DPR bugs. Without this, the validation gate cannot distinguish intentional hidden content from broken screenshots. Proposed: builder declares `<!-- SCROLL-REVEALS: true -->` HTML comment.
- **Where:** `artifact-builder-recipe.md` (builder output spec for HTML comment), `pa-deployment.md` (screenshot validation gate checks for comment before flagging blanks)
- **How:** Add instruction to builder recipe: "If your page uses scroll-triggered animations, add `<!-- SCROLL-REVEALS: true -->` to HTML." Screenshot validation gate: if comment present, allow blank screenshots; if absent, blank screenshots = DPR bug.
- **Format rules:** Builder instruction uses recipe framing: "Deploy a scroll-reveal declaration if your page uses scroll-triggered animations."
- **Anti-loss mechanisms:** M-06 (suppressor — verify builder instruction uses recipe verbs), M-11 (recipe format), M-12 (world-description framing)
- **Propagation cascades:** (1) artifact-builder-recipe.md (builder instruction), (2) pa-deployment.md (validation gate logic), (3) builder prompt template in MANIFEST Appendix E
- **Pre-conditions:** ME-006 must be designed first (this is a sub-component of ME-006).
- **Post-verification:** (1) Verify builder instruction uses recipe verbs. (2) Verify validation gate checks for HTML comment. (3) Verify the distinction (comment present = allow blanks, comment absent = flag blanks) is binary.
- **Budget impact:** +3-5 lines artifact-builder-recipe.md, +3-5 lines pa-deployment.md
- **In current 8-change plan?** NO
- **Source audit files:** audit-09-11.md (ADV-1C-1 through ADV-1C-4, rated MUST; audit-mechanisms.md Change 7 item 8 "orphan risk")

---

#### [ADV-07a]: Gate-Runner Subtraction Plan (THE Prerequisite for Gate Additions)
- **What:** Remove GR-33 through GR-42 and GR-08 spec text from gate-runner-core.js (~150 lines). THE most important prerequisite for Tier 1. Without it, ME-003/ME-014/ME-040 cannot be safely added. Gate-runner-core.js has ZERO net capacity budget.
- **Where:** `gate-runner-core.js` (-150 lines), `gate-manifest.json` (remove entries), `gate-runner-spec.md` (remove documentation), `MANIFEST.md` (update gate count references)
- **How:** Identify GR-33 through GR-42 and GR-08 in gate-runner-core.js. Remove gate functions. Remove from REQUIRED_GATES or RECOMMENDED_GATES arrays at L1331-1340. Remove from gate-manifest.json. Remove from gate-runner-spec.md. Update all gate count references.
- **Format rules:** N/A — subtraction only.
- **Anti-loss mechanisms:** M-13 (binary rules — removing from REQUIRED_GATES changes verdict behavior; must verify removed gates are truly low-value), M-19 (programmatic verification — editing most fragile file)
- **Propagation cascades:** Per `17-removal-propagation-map.md`: every removed gate must be removed from gate-runner-core.js (function + array entries), gate-manifest.json, gate-runner-spec.md, MANIFEST.md gate count references, and any pa-questions.md Appendix B references.
- **Pre-conditions:** (1) Verify GR-33-42 and GR-08 are truly low-value (cross-reference with ADV-2-2 through ADV-2-8 low-value gate analysis). (2) ADV-2-1/ADV-7A: Gate naming map GR-XX <-> SC-XX does NOT exist — implementer cannot identify which gates to modify without mapping. THIS IS A BLOCKING PREREQUISITE.
- **Post-verification:** (1) Verify gate-runner-core.js line count decreased by ~150. (2) Verify no remaining references to removed gate IDs. (3) Verify REQUIRED_GATES and RECOMMENDED_GATES arrays updated. (4) Verify gate-manifest.json entries removed. (5) Run gate-runner to verify no JavaScript errors from missing references.
- **Budget impact:** -150 lines gate-runner-core.js (creates capacity for ME-003 +70, ME-007 +10, net remaining: -70 available)
- **In current 8-change plan?** NO — "completely absent from master list" per adversarial review
- **Source audit files:** audit-05-08.md (ADV-07a rated MUST PRECONDITION, ADV-06a "subtraction must precede addition — should be rank 1-5"), audit-09-11.md (ADV-2-1 gate naming map blocking, FRESH-5-3 "aggressive pruning needed")

---

#### [ADV-2-1 / ADV-7A]: Gate Naming Map GR-XX <-> SC-XX
- **What:** Analysis files reference GR-XX (V3 pipeline gate-runner-core.js) and SC-XX (new pipeline gate-runner.md) interchangeably. Nobody has produced a mapping between the two systems. An implementer reading master list (GR-XX refs) and gate-runner.md (SC-XX refs) will not know which gates correspond. THIS IS A BLOCKING IMPLEMENTATION PREREQUISITE.
- **Where:** New mapping document or table added to an existing file (e.g., gate-runner-spec.md appendix or MANIFEST.md appendix)
- **How:** Read gate-runner-core.js (GR-XX gates) and gate-runner.md (SC-XX gates). Produce 1:1 mapping table showing which GR-XX corresponds to which SC-XX. Flag any GR-XX with no SC-XX equivalent and vice versa.
- **Format rules:** Simple lookup table format.
- **Anti-loss mechanisms:** N/A — informational only.
- **Propagation cascades:** Once mapping exists, all Phase 3 documents referencing SC-XX should be annotated with GR-XX equivalents (or vice versa).
- **Pre-conditions:** Access to both gate-runner-core.js and gate-runner.md.
- **Post-verification:** (1) Every GR-XX has a mapped SC-XX or "NO EQUIVALENT." (2) Every SC-XX has a mapped GR-XX or "NEW GATE."
- **Budget impact:** +20-30 lines (mapping table) if added to existing file
- **In current 8-change plan?** NO
- **Source audit files:** audit-09-11.md (ADV-2-1, ADV-7A — both rated MUST PRECONDITION, "BLOCKING implementation prerequisite")

---

#### [ADV-5-3]: Per-File Agent Architecture for Implementation
- **What:** Implementation MUST use 1 agent per target file (gate-runner gets own agent, MANIFEST gets own agent, etc.). Each reads ONLY its surgery plan. Surgery plans must contain EXACT old-text -> new-text diffs. Coordinating agent verifies cross-file consistency AFTER. Rationale: 5,000+ lines required reading will degrade single-agent compliance to near-zero (ADV-5-1, ADV-5-2).
- **Where:** Implementation process architecture (not a spec file change — an implementation methodology requirement)
- **How:** For each target file, create a focused surgery plan with exact old->new diffs. Assign one implementation agent per file. After all agents complete, run a cross-file consistency verification agent.
- **Format rules:** Surgery plans must use EXACT old-text -> new-text format (Edit tool compatible).
- **Anti-loss mechanisms:** All M-XX mechanisms — per-file architecture prevents cross-file contamination and compliance degradation.
- **Propagation cascades:** N/A — process architecture.
- **Pre-conditions:** Surgery plans must be written with exact diffs before implementation begins.
- **Post-verification:** Cross-file consistency verification after all per-file agents complete.
- **Budget impact:** N/A — process, not spec content.
- **In current 8-change plan?** NO — "Implementation architecture not designed" per ADV-FINAL-4
- **Source audit files:** audit-09-11.md (ADV-5-1 "5,000+ lines required reading," ADV-5-2 "compliance degradation by format," ADV-5-3 "per-file agent architecture," ADV-FINAL-4 rated MUST)

---

#### [ADV-06a]: Subtraction Priority Inversion Fix
- **What:** ME-037 (retire questions) ranked 36th but is the ONLY subtraction in the master list. "Subtraction must precede addition." Should be rank 1-5, not 36. Implementation order must be: (1) subtractions first (ME-037, ADV-07a gate removal, ADV-07b recipe cleanup, ME-054 dead CSS), (2) modifications second (ME-002, ME-005, ME-007, ME-010-013), (3) additions last (ME-001, ME-003, ME-004, ME-006, ME-008, ME-009, ME-039).
- **Where:** Implementation ordering (not a spec file change)
- **How:** Reorder implementation plan to: Phase A SUBTRACT FIRST, Phase B MODIFY EXISTING, Phase C ADD NEW.
- **Format rules:** N/A — ordering constraint.
- **Anti-loss mechanisms:** All capacity-related mechanisms — subtraction creates headroom for additions.
- **Propagation cascades:** N/A — ordering.
- **Pre-conditions:** ADV-07a (gate-runner subtraction) and ADV-07b (builder recipe subtraction) must be defined before implementation begins.
- **Post-verification:** Verify all subtractions completed and budgets updated before any additions applied.
- **Budget impact:** Net positive — creates capacity headroom.
- **In current 8-change plan?** PARTIAL — ME-037 is in plan but ordering is not specified
- **Source audit files:** audit-05-08.md (ADV-06a rated MUST, adversarial structural recommendation Phase A/B/C ordering)

---

#### [META-2A-3]: Detection-to-Fix Pipeline Gap
- **What:** CRITICAL: There is NO step in current pipeline for builder to receive and act on Weaver's fix list after PA. Pipeline produces a VERDICT, not applied FIXES. ME-017 proposes Phase 4 for mechanical fixes, but illegibility requires HTML/CSS redesign — not mechanical. Causal chain from detection to resolution has a MAJOR GAP. Experiential pass (ME-001) improves detection but the chain breaks at step 5 regardless.
- **Where:** Pipeline architecture (MANIFEST.md verdict-to-action gap)
- **How:** Must define: when Weaver produces a fix list and verdict is SHIP WITH FIXES or REFINE, what EXACTLY does the receiving agent get? How does diagnostic info from gates flow to the REBUILD builder (currently blocked by M-04 context isolation)?
- **Format rules:** N/A — architectural gap.
- **Anti-loss mechanisms:** M-04 (context isolation — creates the gap: builder in REBUILD cycle does not receive gate results), M-23 (REBUILD not FIX — REBUILD means fresh builder with zero diagnostics)
- **Propagation cascades:** Fixing this gap would touch MANIFEST.md verdict logic, artifact-orchestrator.md REBUILD/REFINE protocol, and potentially builder prompt template.
- **Pre-conditions:** Must decide: does diagnostic info flow to REBUILD builder (violating M-04 partial isolation) or does a new REFINE-with-diagnostics path exist?
- **Post-verification:** Verify that detection of illegibility leads to a concrete fix action, not just a verdict annotation.
- **Budget impact:** Unknown — architectural decision needed first.
- **In current 8-change plan?** NO — "this gap is not addressed in any of the 8 changes"
- **Source audit files:** audit-09-11.md (META-2A-3 rated MUST PRECONDITION, META-2B-1/2B-2 confirm for WCAG chain, convergence finding #3 across 2 buddy files)

---

#### [ADV-FINAL-2 / META-4-3 / META-4-5 / ADV-6-3]: Content Experiment Before Implementation
- **What:** 57 enrichments justified by N=1 (one pipeline run, one content type). Running pipeline on DIFFERENT content (e.g., Boris article — prose-only) before implementing enrichments would cost 2-4 hours, $5-15, and might invalidate half the enrichments. If Boris (prose-only) scores 3.5+ with CURRENT pipeline: priority inversion is content-specific and many enrichments solve wrong problem. If Boris ALSO scores 2.5-3.0: pipeline has systemic issues, enrichments justified. STRONGEST convergent finding across all 3 buddy files.
- **Where:** N/A — process decision, not spec change
- **How:** Run current pipeline (no enrichments) on prose-only content. Measure PA-05. Compare to Gas Town results. Use results to validate/invalidate enrichment necessity.
- **Format rules:** N/A
- **Anti-loss mechanisms:** N/A
- **Propagation cascades:** Results may invalidate or validate entire enrichment list.
- **Pre-conditions:** Content must be selected. Pipeline must be executable in current state.
- **Post-verification:** Compare PA-05 scores across content types. If prose-only >= 3.5: most ME-001-009 enrichments are Gas Town specific, not pipeline-general.
- **Budget impact:** $5-15, 2-4 hours. Potentially SAVES all implementation effort if results show enrichments unnecessary.
- **In current 8-change plan?** NO — "Nobody in analysis corpus proposes this"
- **Source audit files:** audit-09-11.md (ADV-6-1/6-2/6-3, ADV-FINAL-2 rated MUST, META-4-3/4-5 rated MUST, META-7-2 "Option A: Minimal," convergence finding #1 — strongest convergent finding across all 3 buddy files)

---

#### [META-1-1 / META-6-1 / META-6-2]: Frame A vs Frame C Awareness
- **What:** Phase 3 operates under Frame A (Fix the Machine) while SPEAKING Frame C (Reduce to Essentials). Evidence: 42 ADDs vs 1 REMOVE. Phase 2 found "more specification = worse output" — Phase 3 adds ~785 lines specification. 5,846 lines analysis for 2,034-line page. "Produce comprehensive enrichments" optimizes for COVERAGE, not OUTCOME. Phase 3 inherited the disease from the pipeline it is trying to cure. Implementation must be aware of this dynamic and actively resist it.
- **Where:** Implementation decision framing (not spec change)
- **How:** Before implementing ANY change, ask: "Does this addition REDUCE net pipeline complexity or INCREASE it?" If net increase, require explicit justification. Prefer modifications over additions. Prefer subtractions over modifications.
- **Format rules:** N/A — meta-awareness.
- **Anti-loss mechanisms:** N/A
- **Propagation cascades:** N/A
- **Pre-conditions:** N/A
- **Post-verification:** After all changes: count net lines added vs removed. If net positive exceeds 240-line capacity budget, implementation is Frame A (adding) not Frame C (simplifying).
- **Budget impact:** N/A — awareness constraint.
- **In current 8-change plan?** NO
- **Source audit files:** audit-09-11.md (META-1-1/1-2 rated MUST, META-6-1/6-2 rated MUST, META-3-1 "29:1 to 117:1 meta-to-output ratio")

---

#### [META-5-5]: Null Hypothesis — DPR Fix Only
- **What:** If ZERO enrichments applied and V4 Gas Town run with Opus builder + DPR bug fixed (just CSS override for screenshots): DPR fix alone might eliminate 80% of Phase 2 findings (void-dominated PA, screenshot corruption cascade, trailing void confusion). PA-05 without void artifact might be 3.0-3.5/4. Cheapest possible intervention, not considered anywhere.
- **Where:** N/A — experiment, not spec change
- **How:** Apply ONLY the CSS override fix from PE-001/ME-006 sub-change 1 to pa-deployment.md. Run pipeline. Measure PA-05.
- **Format rules:** N/A
- **Anti-loss mechanisms:** N/A
- **Propagation cascades:** Results inform whether full enrichment wave is needed.
- **Pre-conditions:** Pipeline must be executable. CSS override text from PE-001 must be available.
- **Post-verification:** Compare PA-05 with DPR-fix-only vs original V3 results.
- **Budget impact:** ~$10, ~2 hours. Potentially saves entire enrichment implementation if DPR was root cause.
- **In current 8-change plan?** NO
- **Source audit files:** audit-09-11.md (META-5-5 rated MUST, META-7-2 "Option A: Minimal $10, 2hr")

---

#### [FRESH-5-1 / FRESH-5-3 / FRESH-5-4]: Pipeline Complexity Exceeds Context Capacity
- **What:** Pipeline has 15 agents, 31+ gates, 69 PA questions, 4 BV gates, 885-item extraction taxonomy, 3-6 hours real time. "If your build system exceeds the context window of the AI running it, complexity has outpaced capacity." Architecture is sound; content is overloaded. Pipeline needs aggressive PRUNING, not more enrichments. ME-045 confirms: "pipeline typically requires 2-3 sessions due to context exhaustion." This is a MUST-ACKNOWLEDGE constraint on any implementation — adding lines makes this worse.
- **Where:** N/A — architectural awareness constraint
- **How:** Every proposed addition must be weighed against context capacity. Net additions that increase pipeline complexity without proven quality improvement should be deferred.
- **Format rules:** N/A
- **Anti-loss mechanisms:** M-25 (honest accounting — current ~3,600 lines; additions push higher)
- **Propagation cascades:** N/A
- **Pre-conditions:** N/A
- **Post-verification:** After all changes: verify total pipeline spec does not exceed context window limits. If 2-3 sessions already required, additions that push to 3-4 sessions are net negative.
- **Budget impact:** Constraining — limits total additions.
- **In current 8-change plan?** NO
- **Source audit files:** audit-09-11.md (FRESH-5-1/5-3/5-4 rated MUST, FRESH-5-2 "specification is primary artifact")

---

#### [ADV-01 / ADV-01a / ADV-01b / ADV-02]: Complexity Ratchet + Capacity Budget Violation
- **What:** Add:Remove ratio is 42:1 (42 ADD, 11 REPLACE, 1 REMOVE, 3 SIMPLIFY). Net addition ~620 lines against 240-line safe budget. Budget exceeded by 3.3x (785 vs 240). "The complexity ratchet is not about the QUALITY of additions — it is about the ACT of addition." The defense "these are the RIGHT 620 lines" is the same argument every previous enrichment wave made. If enforced strictly, only Tier 1 BLOCKING (~200 lines) + 2-3 SIGNIFICANT enrichments fit. Tiers 3-7 have ZERO remaining capacity.
- **Where:** Implementation budget constraint (not spec change)
- **How:** Enforce 240-line capacity budget. Tier 1 BLOCKING = ~200 lines. Remaining ~40 lines for 2-3 SIGNIFICANT items. Everything else is post-validation. "The 57-item list is actually a 12-15 item list wearing a trenchcoat."
- **Format rules:** N/A — budget constraint.
- **Anti-loss mechanisms:** All capacity mechanisms — exceeding budget degrades compliance.
- **Propagation cascades:** Budget enforcement determines which items from Tier 2+ can be included.
- **Pre-conditions:** Accurate line counts for each proposed change.
- **Post-verification:** After implementation: total net lines added must be <= 240.
- **Budget impact:** CONSTRAINING — 240 lines total budget, ~200 consumed by Tier 1 BLOCKING.
- **In current 8-change plan?** PARTIAL — 8-change plan is roughly within budget (~200-250 lines)
- **Source audit files:** audit-05-08.md (ADV-01/01a/01b rated MUST "CRITICAL finding #1," ADV-02/02a rated MUST "CRITICAL finding #2")

---

#### [ADV-7C / META-4-4]: Builder Model (Sonnet vs Opus) Unexamined
- **What:** MEMORY.md states: "Sonnet-for-builders is unexamined," "potentially highest-leverage single intervention." None of 57 enrichments addresses this. Phase 3 builds more infrastructure instead of running experiments. CD-006 (CEILING) was built by Opus; Flagship builders were Sonnet. One experiment ($5-15, 1-2 hrs) could render half the enrichments unnecessary. Also META-4-4: "Is pipeline QA system (maximize experience) or brand-enforcement system (maximize identity compliance)?" — deepest unexamined assumption.
- **Where:** N/A — experiment/process decision
- **How:** Run pipeline with Opus builder instead of Sonnet builder. Compare PA-05. If Opus builder produces PA-05 >= 3.5 with current pipeline: builder model is the bottleneck, not pipeline spec.
- **Format rules:** N/A
- **Anti-loss mechanisms:** N/A
- **Propagation cascades:** Results may redirect entire enrichment strategy.
- **Pre-conditions:** Pipeline must be executable with Opus builder.
- **Post-verification:** Compare PA-05 across Sonnet vs Opus builders on same content.
- **Budget impact:** $5-15, 1-2 hours. Potentially highest-leverage single intervention.
- **In current 8-change plan?** NO
- **Source audit files:** audit-09-11.md (ADV-7C rated MUST, META-4-4 rated MUST)

---

#### [FRESH-2-2 / FRESH-4-2]: ME-003 As Glaring Omission
- **What:** 31 programmatic gates and NONE check whether text is readable against background. "Should have been gate #1, not gate #60." Fresh-eyes rates ME-003 as top pick #2. However: ME-003 is NOT in the 8-change plan, has unresolved palette conflict (ADV-1B-7), missing implementation code (ADV-5-4), and requires gate-runner subtraction first (ADV-07a). Fresh-eyes assessment is that ME-003 is the RIGHT enrichment but implementation has major preconditions.
- **Where:** Same as ME-003 above
- **How:** Same as ME-003 above — but ONLY after ADV-07a subtraction and ADV-1B-7 palette resolution
- **Format rules:** Same as ME-003
- **Anti-loss mechanisms:** Same as ME-003
- **Propagation cascades:** Same as ME-003
- **Pre-conditions:** ADV-07a (subtraction), ADV-1B-7 (palette), ADV-5-4 (missing code) — ALL must resolve first
- **Post-verification:** Same as ME-003
- **Budget impact:** Same as ME-003 (+70 lines, requires prior -150 subtraction)
- **In current 8-change plan?** NO
- **Source audit files:** audit-09-11.md (FRESH-2-2 "glaring omission" rated MUST, FRESH-4-2 top pick #2 rated MUST)

---

#### [FRESH-6-1 / ADV-7F]: Builder Gets Nothing From Phase 3
- **What:** Every Phase 3 artifact is for pipeline DESIGNERS. None is for the agent that writes HTML. "Not a single enrichment gives the builder MORE to work with — more examples, more reference pages, more visual vocabulary." Where are EXAMPLES of pages scoring 4/4? If builder has never seen "DESIGNED," how can it produce "DESIGNED"? Highest-leverage intervention = giving BUILDER better input. Proposed artifacts: visual cheat sheet (5 common defects CSS), danger zones file (content types needing special handling), annotated 4/4 example page. None exist, none proposed.
- **Where:** New builder-facing artifacts (if created)
- **How:** Create builder-facing reference materials: (1) Visual cheat sheet of 5 most common CSS defects with correct/incorrect examples, (2) Danger zones file (content types needing special handling: SVG charts, code blocks, long-form essays), (3) Annotated example of 4/4 page. All would be direct-injection files (M-03) bypassing brief compression.
- **Format rules:** Must use world-description framing (M-12), recipe format (M-11), no suppressor language (M-06).
- **Anti-loss mechanisms:** M-03 (direct injection — builder-facing files bypass brief), M-06/M-11/M-12 (format requirements)
- **Propagation cascades:** (1) New files created, (2) MANIFEST.md Appendix B routing updated, (3) Builder prompt template updated to reference new files, (4) artifact-builder-recipe.md updated with file read instructions
- **Pre-conditions:** Must decide what constitutes "4/4 example" — no Flagship-tier page has been produced yet.
- **Post-verification:** (1) Verify builder-facing files use recipe format. (2) Verify routing in MANIFEST. (3) Verify no gate thresholds in builder-facing content.
- **Budget impact:** +50-100 lines new files (within direct-injection budget, bypasses brief compression)
- **In current 8-change plan?** NO — convergence finding #5 across ADV and FRESH buddy files
- **Source audit files:** audit-09-11.md (FRESH-6-1 rated MUST, ADV-7F rated MUST — convergence across 2 of 3 buddy files)

---

## SAFETY CHECKLIST CROSS-REFERENCE (from audit-mechanisms.md)

The mechanisms audit identified 80 verification items across 8 changes. For MUST items, the highest-risk mechanism interactions are:

### HIGH RISK Mechanisms (directly modified by 8-change plan)
| Mechanism | Why High Risk | Changes That Touch It |
|-----------|--------------|----------------------|
| **M-04** (Context Isolation) | CRITICAL — most at-risk mechanism. ME-001 adds auditor-facing content, ME-037+ME-051 modifies auditor-facing questions, ME-006 adds orchestrator instructions | ME-001, ME-006, ME-037+ME-051 |
| **M-06** (Suppressor Management) | CRITICAL — ME-004 and ME-039 add brief-facing content that BV-04 will scan | ME-004, ME-039 |
| **M-11** (Recipe Format) | CRITICAL — ME-004 and ME-039 must use recipe verbs, BV-03 checks ratio | ME-004, ME-039 |
| **M-12** (World-Description Framing) | CRITICAL — ME-004 and ME-039 must not use prohibition framing | ME-004, ME-039 |
| **M-13** (Binary Rules) | CRITICAL — ME-005 modifies verdict logic across 7+ locations, ME-007 modifies gate code | ME-005, ME-007 |
| **M-19** (Programmatic Verification) | CRITICAL — ME-007 modifies most fragile file (gate-runner-core.js) | ME-005, ME-007 |
| **M-20** (Fresh-Eyes Principle) | CRITICAL — ME-001 and ME-037+ME-051 add/modify auditor-facing content that must contain zero calibration | ME-001, ME-037+ME-051 |
| **M-22** (9-Auditor Deployment) | CRITICAL — ME-037+ME-051 directly modifies assignment table; 11-location update required | ME-037+ME-051 |

### Three Most Dangerous Interactions (from audit-mechanisms.md)
1. **ME-004/ME-039 x M-06/M-11/M-12** — Wrong verbs or prohibition framing → BV-03/BV-04 catches → brief FAIL. **Rule: Fix the content, never weaken the gate.**
2. **ME-005 x M-13** — Verdict logic across 7+ locations. Missing ONE = contradiction. **Rule: All 7 locations or none.**
3. **ME-037+ME-051 x M-22** — 11-location question total update. Mismatch = weaver flags incomplete data. **Rule: Compute final total ONCE, then search-and-replace across all 11 locations.**

---

## SUMMARY TABLE

| Item | Type | In 8-Plan? | Budget Lines | Key Risk |
|------|------|-----------|-------------|----------|
| ME-001 | BLOCKING enrichment | YES | +22 | M-04/M-20 isolation |
| ME-002 | BLOCKING enrichment | YES | +14 | 7-location verdict cascade |
| ME-003 | BLOCKING enrichment | NO | +70 | Palette conflict, zero budget, missing code |
| ME-004 | BLOCKING enrichment | YES | +12 | M-06/M-11/M-12 verb format |
| ME-005 | BLOCKING enrichment | YES | +12 across 3 files | HIGHEST CASCADE — 7+ locations |
| ME-006 | BLOCKING enrichment | YES | +27 across 2 files | Builder signal missing, CSS override changes page |
| ME-007 | BLOCKING enrichment | YES | +10 net-zero | Most fragile file |
| ME-008 | BLOCKING enrichment | NO | +8 | ME-005 interaction undefined |
| ME-009 | BLOCKING enrichment | NO | +23 across 2 files | Does not reduce Weaver volume |
| ADV-1A-4 | 3-auditor optimization | NO | Net savings | Modifies ME-001 scope |
| ADV-1B-7 | WCAG palette resolution | NO | Varies | MUST precede ME-003 |
| ADV-1C-3 | Builder signal mechanism | NO | +6-10 | MUST accompany ME-006 |
| ADV-07a | Gate-runner subtraction | NO | -150 | MUST precede all gate additions |
| ADV-2-1/7A | Gate naming map | NO | +20-30 | BLOCKING prerequisite |
| ADV-5-3 | Per-file agent architecture | NO | N/A | Implementation methodology |
| ADV-06a | Subtraction-first ordering | NO | N/A | Implementation ordering |
| META-2A-3 | Detection-to-fix gap | NO | Unknown | Architectural gap |
| ADV-FINAL-2 | Content experiment first | NO | $5-15, 2-4hr | May invalidate enrichments |
| META-1-1 | Frame A awareness | NO | N/A | Meta-awareness |
| META-5-5 | DPR-fix-only null hypothesis | NO | ~$10, ~2hr | May eliminate 80% of findings |
| FRESH-5-1 | Complexity exceeds capacity | NO | N/A | Constraining |
| ADV-01/02 | Capacity budget 240 lines | NO | N/A | Constraining |
| ADV-7C | Builder model experiment | NO | $5-15, 1-2hr | May redirect strategy |
| FRESH-2-2 | ME-003 as glaring omission | NO | Same as ME-003 | Same as ME-003 |
| FRESH-6-1 | Builder-facing artifacts | NO | +50-100 | No 4/4 example exists |

**Total items in MUST tier:** 25
**In current 8-change plan:** 6 of 9 BLOCKING enrichments (ME-001, ME-002, ME-004, ME-005, ME-006, ME-007) + ME-037+ME-051 + ME-039
**NOT in current 8-change plan:** 3 BLOCKING enrichments (ME-003, ME-008, ME-009) + 16 additional MUST items from buddy reports

---

*Section 1 checklist complete. 25 MUST items extracted with full surgical detail: 9 BLOCKING enrichments + 16 buddy-report MUST items. Every item includes What/Where/How/Format/Anti-loss/Propagation/Pre-conditions/Post-verification/Budget/Plan-status/Sources.*

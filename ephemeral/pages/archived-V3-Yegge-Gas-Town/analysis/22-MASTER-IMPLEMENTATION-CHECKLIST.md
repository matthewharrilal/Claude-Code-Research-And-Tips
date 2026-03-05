# MASTER IMPLEMENTATION CHECKLIST — V3 Gas Town Pipeline Enrichment

**Date:** 2026-02-25
**Sources:** 21 analysis files, 7 audit files, 6 section checklists, 1 adversarial audit
**Total corpus:** ~2MB analysis -> this single actionable reference
**Method:** Deduplicated, tiered by evidence strength (higher tier wins when audits disagree), cross-referenced against adversarial audit (File 23), surgery-precision preserved ALWAYS USE OPUS ALWAYS USE OPUS NO MATTER WHAT ALWAYS OPUSALWAYS USE OPUS ALWAYS USE OPUS NO MATTER WHAT ALWAYS OPUSALWAYS USE OPUS ALWAYS USE OPUS NO MATTER WHAT ALWAYS OPUS

---

## TABLE OF CONTENTS
1. [TIER 1 — MUST](#section-1-tier-1--must) (26 items + 3 promoted = 29)
   - 1A. [FIX BROKEN SPECS](#section-1a-fix-broken-specs) (5 items: MUST-00, MUST-13, MUST-14, MUST-07, MUST-26)
   - 1B. [FIX PRIORITY INVERSION](#section-1b-fix-priority-inversion) (6 items: MUST-01 through MUST-06)
   - 1C. [PREREQUISITES & DECISIONS](#section-1c-prerequisites--decisions) (15 items: MUST-08 through MUST-25, excluding deleted MUST-24)
   - 1D. [PROMOTED FROM SHOULD](#section-1d-promoted-from-should) (3 items: MUST-27, MUST-28, MUST-29)
2. [TIER 2 — SHOULD](#section-2-tier-2--should) (XX items)
3. [TIER 3 — COULD](#section-3-tier-3--could) (XX items)
4. [PRE-IMPLEMENTATION REQUIREMENTS](#section-4-pre-implementation-requirements) (XX items)
5. [IMPLEMENTATION ORDER](#section-5-implementation-order) (7 steps)
6. [GLOBAL FORMATTING RULES](#section-6-global-formatting-rules) (XX rules)
7. [ANTI-LOSS VERIFICATION](#section-7-anti-loss-verification) (25 mechanisms)
8. [GAPS AND UNRESOLVED](#section-8-gaps-and-unresolved) (XX items)

---

## SECTION 1: TIER 1 — MUST

**Criteria:** Blocks quality, creates cross-file conflict, breaks anti-loss mechanisms, or is a BLOCKING prerequisite if skipped.
**Total items:** 26 (1 anti-loss audit + 9 BLOCKING enrichments + 1 standalone retirement (ME-037) + 15 additional MUST items from buddy reports and adversarial audit)
**In current 8-change plan:** 6 of 9 BLOCKING enrichments (ME-001, ME-002, ME-004, ME-005, ME-006, ME-007) + ME-037+ME-051 + ME-039
**NOT in current 8-change plan:** 3 BLOCKING enrichments (ME-003, ME-008, ME-009) + 16 additional MUST items
**Root issues addressed:** RI-1 (Priority Inversion), RI-2 (Spec Bloat/Broken), RI-3 (Anti-Loss Mechanisms Not Working)

---

### SECTION 1A: FIX BROKEN SPECS (highest priority)

> **Rationale:** Before adding ANY new content, fix what is already broken. Subtraction before addition. Audit before enrichment. These 5 items repair existing spec files and create the prerequisites that all other MUST items depend on.

---

### MUST-00: Audit and Fix All HIGH RISK Anti-Loss Mechanisms in Current Spec Files

| Field | Detail |
|-------|--------|
| **What** | Before adding ANY new content to spec files, audit all 8 HIGH RISK anti-loss mechanisms (M-04 Information Isolation, M-06 Result Schema, M-11 Fresh-Eyes Principle, M-12 Warm Palette Lock, M-13 Net-Zero Budget, M-19 Propagation Cascade, M-20 Observation Verbs, M-22 9-Auditor Deployment) in their CURRENT spec file locations. Fix any that are broken, missing, or improperly applied. |
| **Where** | All 10 pipeline spec files in `ephemeral/va-extraction/` |
| **How** | For each HIGH RISK mechanism: (1) Read the mechanism definition in Section 7 of this checklist, (2) Find its location(s) in current spec files, (3) Verify it is correctly implemented with proper anti-skimming formatting, information isolation, and conviction language, (4) If broken or missing, fix it IN PLACE before proceeding to any enrichments. |
| **Why** | Root Issue 3: Anti-loss mechanisms aren't working. The pipeline's anti-loss mechanisms are documented but not properly applied in current specs. Adding new content to broken foundations makes the problem worse. |
| **Pre-conditions** | None — this is the FIRST thing to do. |
| **Post-verification** | (1) All 8 HIGH RISK mechanisms verified present in spec files. (2) M-04 (information isolation): no gate thresholds in auditor-facing files, no calibration data in pa-questions.md. (3) M-13 (net-zero): current line counts documented as baseline. (4) M-20 (observation verbs): pa-deployment.md uses observation verbs, not measurement verbs. |
| **Budget impact** | Net zero — this fixes existing content, not adds new content. |
| **Root issue** | RI-3 (Anti-Loss Mechanisms Not Working) |

**Other Section 1A items** (tagged with _(Section 1A: FIX BROKEN SPECS)_ at their original positions below):
- **MUST-13** (ADV-07a): Gate-runner subtraction plan — remove ~60-150 lines of low-value gates
- **MUST-14** (ADV-2-1/7A): Gate naming map GR-XX <-> SC-XX — blocking prerequisite for gate changes
- **MUST-07** (ME-007): Fix GR-44 false negative — trailing void measurement bug fix
- **MUST-26** (ME-037): Retire PA questions PA-06, PA-09, PA-40 — subtraction before addition

---

### SECTION 1B: FIX PRIORITY INVERSION (the core problem)

> **Rationale:** These 6 items directly address Root Issue 1 (Priority Inversion) — the pipeline treats CSS property compliance as highest-severity and human readability as secondary. These are the BLOCKING enrichments that add detection, prevention, and correction of the priority inversion.

---

### MUST-01: ME-001 — Add Experiential Pass (Section 2.5) to ALL PA Auditors

| Field | Detail |
|-------|--------|
| **What** | Mandatory experiential reading pass before question answering. Auditors perform cold-look reading pass reporting: (1) illegible text, (2) effortful text, (3) skipped text. Report at TOP of audit as "## 0. Experiential Pass." The experiential pass itself serves as the universal legibility check -- auditors report illegible, effortful, and skipped text before answering any questions. |
| **Where** | `pa-deployment.md` (+18 lines, insertion after Section 1.2 assignments, before Section 2 screenshots) |
| **How** | Add new Section 2.5 with experiential pass protocol. Auditor-facing instruction: "Before answering your assigned questions, spend 2 minutes describing your first impression of the page." Orchestrator-facing setup goes in pa-deployment.md. Auditor prompt receives only the observation instruction, NOT the rationale. |
| **Format rules** | Use observation verbs: "Describe what you see," "Note your first impression." NOT measurement verbs: "Verify legibility," "Check that text is readable." pa-deployment.md uses ORCHESTRATOR DECISION TREE format (phased steps with Input/Action/Output/Verification). |
| **Anti-loss mechanisms** | M-04 (context isolation — CRITICAL: experiential pass instructions must contain NO tier definitions, NO PA-05 expected scores, NO mechanism counts), M-09 (prompt templates — PA auditor template must be updated to include experiential pass), M-20 (fresh-eyes — CRITICAL: instructions in pa-deployment.md ONLY, not pa-questions.md or pa-guardrails.md), M-22 (9-auditor deployment — new step in PA protocol), M-12 (world-description framing — auditor instructions use observation language "Describe what you see" NOT measurement language "Verify that...") |
| **Propagation cascades** | (1) pa-deployment.md (primary), (2) MANIFEST.md quickstart step 8 (if it references PA auditor workflow), (3) EXECUTION-TRACKER-TEMPLATE.md Phase 3B checklist, (4) PA auditor prompt template in MANIFEST Appendix E must reference experiential pass |
| **Pre-conditions** | None — ME-001 can be implemented independently. However, ME-002 (Weaver priority) should be aware of experiential pass output format. ME-009 (aggregation) consumes ME-001 output. ME-015 (BLOCKED BY DEFECT scoring option) is a RECOMMENDED companion to ME-001. Without ME-015, auditors who identify illegibility in the experiential pass must still force YES/NO/CONDITIONAL answers for their questions, diluting the experiential signal. |
| **Post-verification** | (1) Read new text: zero calibration data, zero mechanism counts, zero pipeline history. (2) Verify pa-questions.md NOT modified. (3) Verify pa-guardrails.md NOT modified (or if modified, only to add "complete experiential pass before answering questions" — no calibration). (4) Verify total line count of pa-deployment.md (~255). (5) Verify observation verbs only. |
| **Supersedes** | ME-001 experiential pass supersedes the need to route PA-02 (legibility) to multiple auditors. The Phase 2 finding that "PA-02 was routed to only 1 of 9 auditors" (Auditor B) is addressed by giving ALL auditors (or 3 per MUST-10) a legibility observation task. ME-035 extends PA-02's scope (to include header/footer/chart text), and the experiential pass makes legibility a universal check rather than a single-auditor responsibility. HE-009 (dual-route PA-02/PA-08 to 2 auditors) is therefore DEFERRED — the experiential pass is a stronger solution. |
| **Budget impact** | +18 lines to pa-deployment.md (237 -> 255, below 300 threshold) |
| **In current 8-change plan?** | YES |
| **Source audit files** | audit-05-08.md (Tier 1 BLOCKING), audit-mechanisms.md (Change 1 safety checklist), audit-09-11.md (FRESH-2-1 "single best enrichment," FRESH-4-1 top pick #1, META-2A chain analysis, ADV-1A time cost concerns) |
| **Root issue** | RI-1 (Priority Inversion) |

---

### MUST-02: ME-002 — Add Usability Priority Override (New Section 5.0) to Weaver Fix Ordering

| Field | Detail |
|-------|--------|
| **What** | "Is there ANY finding a reader CANNOT READ or CANNOT USE?" = Fix #1 regardless of gate status. New priority ordering: (1) Human readability, (2) Visual perception, (3) Identity compliance. Includes emotional arc connection (from HE-015). Binary framing: "If ANY auditor reports text illegibility at arm's length -> this overrides PA-05 sub-criteria scoring." |
| **Where** | `pa-weaver.md` (+14 lines, within existing verdict logic section) |
| **How** | Add new Section 5.0 with usability priority override. If ME-002 only adds a PRIORITY OVERRIDE (usability trumps other criteria), it only needs to be in pa-weaver.md. If it modifies existing SHIP/REFINE/REBUILD thresholds, must propagate to 7 locations. |
| **Format rules** | pa-weaver.md uses VERDICT PROTOCOL format. New usability priority must follow existing verdict threshold table structure. Weaver instructions can use judgment verbs (weaver IS the judgment agent). But the usability override itself should be binary. |
| **Anti-loss mechanisms** | M-04 (context isolation — weaver-facing, safe; auditors do NOT see pa-weaver.md), M-13 (binary rules — weaver verdict is informed by this; if override modifies verdict thresholds, must be consistent across all 7 locations) |
| **Propagation cascades** | If ONLY priority override: pa-weaver.md only. If verdict thresholds change: must propagate to MANIFEST.md L275-285, gate-manifest.json L55-59, gate-runner-spec.md L53-57, artifact-orchestrator.md verdict tree. |
| **Pre-conditions** | ME-001 should be implemented first — ME-002 references auditor experiential pass output. If ME-001 is not implemented, the override references non-existent data. |
| **Post-verification** | (1) Verify override uses binary language, not judgment scales. (2) Verify no calibration data leaked into auditor-visible files. (3) Verify verdict logic in pa-weaver.md is consistent with MANIFEST L275-285. (4) If verdict thresholds changed, verify all 7 cross-file locations updated. |
| **Budget impact** | +14 lines to pa-weaver.md (376 -> 390, below threshold) |
| **In current 8-change plan?** | YES |
| **Source audit files** | audit-05-08.md (Tier 1 BLOCKING, HE-004 confirms with specific fix ordering evidence: "1. Font stack, 2. Callout backgrounds, 3. Border widths, 4. HTML default color, 5. Chart legibility"), audit-mechanisms.md (Change 2 safety checklist) |
| **Root issue** | RI-1 (Priority Inversion) |

---

### MUST-03: ME-003 — Add WCAG Text Contrast Gate GR-60 (REQUIRED)

| Field | Detail |
|-------|--------|
| **What** | New programmatic gate. Normal text >=4.5:1 contrast ratio, large text >=3:1. Walk DOM tree for effective background. Check SVG text/tspan. ~70 lines new gate code. Must update: gate-runner-core.js, GR-48 REQUIRED_GATES array, gate-manifest.json, gate-runner-spec.md, pa-questions.md Appendix B. |
| **Where** | `gate-runner-core.js` (+70 lines), `gate-manifest.json`, `gate-runner-spec.md`, `pa-questions.md` Appendix B (6-location update per M-13) |
| **How** | Implement DOM-walking contrast checker in Playwright JavaScript. Full implementation sketch referenced in "gate-usability-audit.md Section 5" (external file — must be located and read). Result schema: `{ gate: 'GR-60', name: '...', status: 'PASS'|'FAIL', measured: {...}, threshold: {...} }`. |
| **Format rules** | gate-runner-core.js uses EXECUTABLE PLAYWRIGHT JAVASCRIPT format. Try/catch wrapper mandatory. Result object schema must match existing gates. |
| **Anti-loss mechanisms** | M-13 (binary rules — CRITICAL: new REQUIRED gate must appear in REQUIRED_GATES array at L1331), M-19 (programmatic verification — CRITICAL: gate-runner-core.js is most fragile file), M-08 (dual-route — DOM walking code could conflict with isRenderedElement() helper), M-14 (perception calibration — GR-60 uses industry-standard WCAG ratios, not pipeline-specific; dual-routing not required but noted) |
| **Propagation cascades** | 6-location update: (1) gate-runner-core.js (new gate function), (2) gate-runner-core.js L1331-1340 (REQUIRED_GATES array), (3) gate-manifest.json (new entry), (4) gate-runner-spec.md (new documentation), (5) pa-questions.md Appendix B (perception thresholds), (6) MANIFEST.md (gate count references) |
| **Pre-conditions** | **CRITICAL — MULTIPLE UNRESOLVED PRECONDITIONS:** |
| | - ADV-07a: Gate-runner subtraction plan (~150 lines removal of GR-33-42 + GR-08) MUST happen BEFORE any gate additions. gate-runner-core.js has ZERO net budget. |
| | - ADV-1B-7 / ADV-1B-2 / ADV-1B-3: **WCAG palette conflict UNRESOLVED.** #2a7d7d (muted teal) on #f0ebe3 = ~4.1:1, BELOW 4.5:1. Sage green (#6b9b7a), warm amber (#c49052), muted coral (#c97065) all in 3:1-5:1 danger zone. WCAG gate would produce REQUIRED failures on colors the soul MANDATES. Must resolve via Option A (decorative exemption), Option B (revised accent palette), or Option C (RECOMMENDED tier instead of REQUIRED). |
| | - ADV-03: ME-003 says "go read gate-usability-audit.md Section 5 for code" — implementer must find and read a SEPARATE file. "2-hour task disguised as single enrichment." |
| | - ADV-05b: Combined gate additions (ME-003 + ME-014 + ME-040 = ~180 lines) exceed budget even after subtraction. |
| | - META-2B-1/2B-2: Gate produces PASS/FAIL, not fixes. WCAG FAIL on REQUIRED = REBUILD verdict. Rebuilt builder does NOT receive specific contrast failure info. May create infinite loop. |
| **Post-verification** | (1) Verify GR-60 in REQUIRED_GATES array. (2) Verify result schema matches existing gates. (3) Verify gate-runner-core.js total line count (must subtract elsewhere to stay within budget). (4) Verify gate-manifest.json entry. (5) Verify no other gate functions accidentally modified. (6) Test against known HTML with known contrast ratios. |
| **Budget impact** | +70 lines to gate-runner-core.js (EXCEEDS zero-net budget by 70 lines; requires -70 line offset elsewhere) |
| **In current 8-change plan?** | NO |
| **Source audit files** | audit-05-08.md (Tier 1 BLOCKING, ADV-06c argues "rank 12-15 not rank 3"), audit-09-11.md (ADV-1B-1 through ADV-1B-7 palette conflict, ADV-5-4 missing code, FRESH-2-2 "should have been gate #1", FRESH-4-2 top pick #2, META-2B chain analysis). Also endorsed by FRESH-2-2 / FRESH-4-2 (fresh-eyes top pick #2). |
| **Root issue** | RI-1 (Priority Inversion) |

---

### MUST-04: ME-004 — Add Legibility Self-Check Q0+Q1 to Builder Self-Evaluation

| Field | Detail |
|-------|--------|
| **What** | Q0: text legibility scan (size <12px? contrast <3:1? diagram labels?). Q1: visual component clarity check. Renumber existing Q1-Q7 to Q2-Q8. Also add builder self-check grep commands (from HE-013: grep for non-trinity fonts, check rgba warmth, verify html color, check border-width integers). |
| **Where** | `artifact-builder-recipe.md` (+12 lines, in Phase 5 self-evaluate section or equivalent) |
| **How** | Add Q0 and Q1 as new self-check steps. Q0 must use recipe framing: "Assess: Can body text be comfortably read at arm's length? If not, increase font-size or line-height." NOT "Verify that text size >= 16px." Renumber existing Q1-Q7 to Q2-Q8. |
| **Format rules** | artifact-builder-recipe.md uses RECIPE FORMAT. Template: `### Step N.M: [Action Verb] [What]` with Read/Select/Deploy/Assess structure. ALL new verbs MUST be recipe verbs (Build/Create/Derive/Map/Read/Select/Deploy/Assess). MUST avoid checklist verbs (Verify/Fail if/Must be/Ensure/Check that). MUST avoid suppressor phrases ("sample N-N", "must not"/"shall not"/"never use", ">= N channels"). |
| **Anti-loss mechanisms** | M-06 (suppressor management — CRITICAL: new content enters brief via Brief Assembler extraction, BV-04 will scan it), M-11 (recipe format — CRITICAL: BV-03 checks recipe:checklist ratio, must remain >= 3:1), M-12 (world-description framing — CRITICAL: must not use prohibitions), M-03 (direct injection — verify L62-63 "direct file routes" bypass still works), M-25 (honest accounting — update line count) |
| **Propagation cascades** | Q0 is a self-check step in builder recipe. Does NOT propagate to gate-runner, PA questions, or verdict logic. IF Brief Assembler's extraction guide (MANIFEST.md L236-240) needs updating to include Q0 in "INCLUDE VERBATIM" list, add it there. |
| **Pre-conditions** | None — can be implemented independently. |
| **Post-verification** | (1) Count recipe verbs vs checklist verbs in new text. (2) Search for BV-04 trigger phrases (zero matches required). (3) Verify no gate thresholds in pass/fail format. (4) Verify world-description framing throughout. (5) Verify Step numbering is consistent. (6) Verify artifact-builder-recipe.md L62-63 ("direct file routes") unchanged. |
| **Budget impact** | +12 lines to artifact-builder-recipe.md (~934 -> ~946, within +50 budget) |
| **In current 8-change plan?** | YES |
| **Source audit files** | audit-05-08.md (Tier 1 BLOCKING), audit-mechanisms.md (Change 3 safety checklist with 10 verification items), audit-09-11.md (FRESH-4-7 honorable mention) |
| **Root issue** | RI-1 (Priority Inversion) |

---

### MUST-05: ME-005 — Fix Verdict Logic for Mechanical Identity Failures

| Field | Detail |
|-------|--------|
| **What** | Add MECHANICAL exception: if ALL REQUIRED identity gate failures are MECHANICAL (<=5 CSS lines, no HTML structural change, no design decision), verdict = REFINE not REBUILD. Add protocol override rule requiring orchestrator independent justification. Binary definition: "ALL identity failures require <=5 CSS lines to fix AND require no HTML structural changes AND require no design decisions -> MECHANICAL -> REFINE; ANY non-MECHANICAL identity failure -> REBUILD." |
| **Where** | `MANIFEST.md` (+8 lines at L276+), `gate-manifest.json` (L55-59), `gate-runner-core.js` (L752-778 verdict summary — net-zero mandatory) |
| **How** | Update verdict logic across ALL 7+ locations simultaneously. Modify verdict decision tree to include MECHANICAL classification before REBUILD determination. Update early termination at MANIFEST L474 (applies only to non-MECHANICAL failures). Update circuit breaker at MANIFEST L605 if new iteration type added. |
| **Format rules** | MANIFEST.md uses DECLARATIVE ROUTING + AGENT TEMPLATES format. Verdict logic uses prioritized list format. gate-manifest.json uses structured JSON. gate-runner-core.js uses executable JavaScript. Verdict logic is a DECISION TREE — binary conditions appropriate. |
| **Anti-loss mechanisms** | M-13 (binary rules — CRITICAL: verdict logic is the core binary system; 7+ location consistency required), M-19 (programmatic verification — CRITICAL: if verdict summary in JS changes), M-23 (REBUILD not FIX — directly modifies when REBUILD triggers; THIS IS the pipeline's most important safety mechanism), M-07 (MANIFEST routing — editing MANIFEST), M-02 (dual-channel — verdict consumes dual-channel output) |
| **Propagation cascades** | **THIS IS THE HIGHEST-CASCADE CHANGE.** ALL must be updated simultaneously: (1) MANIFEST.md L276 (primary), (2) MANIFEST.md L505 (Phase 3C), (3) MANIFEST.md L646 (failure mode table), (4) MANIFEST.md L714 (critical path table), (5) MANIFEST.md L1144 (execution sequence), (6) gate-manifest.json L56 (verdict registry), (7) gate-runner-spec.md L53 (spec docs), (8) artifact-orchestrator.md verdict decision tree. MISS ONE = contradiction. |
| **Pre-conditions** | (1) Read ALL 7 verdict logic locations in full. (2) Verify current verdict logic is consistent across all 7 BEFORE editing. (3) Verify MECHANICAL concept is compatible with pa-weaver.md Section 3 diagnostic vocabulary. (4) Determine whether gate-runner-core.js verdict summary (L752-778) needs modification. (5) ADV-05c: MECHANICAL + circuit breaker interaction — when ME-005 and ME-008 both coexist, what happens? MECHANICAL says REFINE; usability breaker says "Fix #1." Interaction undefined. |
| **Post-verification** | (1) Read ALL 7 verdict logic locations. Verify word-for-word consistency. (2) Verify early termination at MANIFEST L474 updated. (3) Verify circuit breaker at MANIFEST L605 updated. (4) Verify gate-manifest.json L56 matches MANIFEST L276. (5) Verify gate-runner-spec.md L53 matches. (6) Verify artifact-orchestrator.md verdict tree matches. (7) If gate-runner-core.js modified: verify function signatures unchanged, verify result schema unchanged, verify total line count <= 1,437. |
| **Budget impact** | +8 lines MANIFEST.md (limited headroom of +20), +4 lines gate-manifest.json, net-zero gate-runner-core.js |
| **In current 8-change plan?** | YES |
| **Source audit files** | audit-05-08.md (Tier 1 BLOCKING, Anti-Loss rated RISK — "modifies M-23 REBUILD Not FIX — the pipeline's most important safety mechanism"), audit-mechanisms.md (Change 6 safety checklist, "HIGHEST-CASCADE CHANGE"), audit-09-11.md (ADV-04b coordinated file warning, ADV-05c MECHANICAL+circuit breaker conflict, FRESH-8-4 verdict governance unclear) |
| **Root issue** | RI-1 (Priority Inversion) |

---

### MUST-06: ME-006 — Add Screenshot Validation Gate Before PA Deployment

| Field | Detail |
|-------|--------|
| **What** | 4 sub-changes: (1) Expand CSS override to include `visibility: visible !important; transform: none !important` (targeting `*::before, *::after` pseudo-elements), (2) Add Section 2.3a screenshot validation (no >2 consecutive blank, <20% blank total), (3) Add Section 2.5 full-page cross-reference (if full-page shows content not in scroll-through, overrides failed — REPEAT), (4) Add DPR validation to orchestrator. |
| **Where** | `pa-deployment.md` (+15 lines, after capture, before auditor spawn), `artifact-orchestrator.md` (+12 lines, Phase 3A workflow) |
| **How** | Add validation step between screenshot capture and auditor deployment: Capture -> **Validate** -> Deploy auditors. If blank >2 consecutive or >20% total at any viewport, capture is SUSPECT -> re-capture with expanded CSS overrides. If full-page shows content not in scroll-through, overrides failed -> halt and re-capture. If re-capture is triggered, follow the Corrected Screenshot Recovery Protocol (ME-046): corrected screenshots MUST cover the ENTIRE page at regular intervals (every 900px of scroll height), not orchestrator-selected regions. See TIER 2C [ME-046] for full protocol. |
| **Format rules** | pa-deployment.md: phased protocol format. artifact-orchestrator.md: ORCHESTRATOR DECISION TREE format with Input/Action/Output/Verification/If FAIL template. |
| **Anti-loss mechanisms** | M-21 (screenshot pre-capture — directly extends; verify it ADDS validation AFTER capture, not DURING), M-04 (context isolation — CRITICAL: screenshot validation results must NOT reach auditors; if auditors know screenshots were re-captured, it anchors their assessment), M-20 (fresh-eyes — validation adds step before auditor spawn), M-09 (prompt templates — orchestrator workflow changes) |
| **Propagation cascades** | (1) pa-deployment.md (primary), (2) artifact-orchestrator.md (orchestrator workflow), (3) MANIFEST.md quickstart step 6 (if references screenshot flow), (4) EXECUTION-TRACKER-TEMPLATE.md Phase 3A checklist |
| **Pre-conditions** | |
| | - ADV-1C-1/1C-2/1C-3: CSS overrides CHANGE THE PAGE. Scroll-triggered reveals show everything at once. Re-captured page is NOT the page the builder built. Needs builder signal mechanism (`<!-- SCROLL-REVEALS: true -->`) to distinguish intentional hidden content from broken screenshots. |
| | - ADV-1C-4: Two categories of blank: (a) DPR/animation bug — re-capture fixes; (b) Intentional scroll-triggered content — re-capture CREATES problem. Validation gate cannot distinguish without builder signal. |
| | - PE-009 check 3 (lost in merge): screenshot content should match expected section count from page's own navigation — structural promise cross-check NOT in current ME-006 spec. |
| | - HE-012 (lost in merge): PA question "PA-83: Does the page end cleanly at footer?" + always capture screenshot at scrollHeight - viewportHeight. Both lost. |
| **Post-verification** | (1) Verify validation logic stays in orchestrator-facing files only. (2) Verify no validation results leak to pa-questions.md or pa-guardrails.md. (3) Verify MANIFEST quickstart step 6 updated. (4) Verify EXECUTION-TRACKER Phase 3A updated. (5) If builder signal implemented: verify it's in artifact-builder-recipe.md AND builder prompt template. (6) Verify capture sequence itself (pa-deployment.md Section 2.2) is NOT modified — validation is AFTER capture. |
| **Budget impact** | +15 lines pa-deployment.md (237 + ME-001's 18 + 15 = 270, approaching but below 300 threshold), +12 lines artifact-orchestrator.md (~1,058 -> ~1,070, within +50 budget) |
| **In current 8-change plan?** | YES |
| **Source audit files** | audit-05-08.md (Tier 1 BLOCKING, PE-001 CSS details, PE-002/PE-009/PE-011 validation sub-changes), audit-mechanisms.md (Change 7 safety checklist), audit-09-11.md (ADV-1C-1 through ADV-1C-4 new failure modes, META-2C-1 "strongest causal chain" 85%+, FRESH-2-3 "input validation for most expensive phase", FRESH-4-3 top pick #3) |
| **Root issue** | RI-1 (Priority Inversion) |

---

### MUST-07: ME-007 — Fix GR-44 False Negative (Trailing Void Measurement) _(Section 1A: FIX BROKEN SPECS)_

| Field | Detail |
|-------|--------|
| **What** | Replace current trailing void measurement algorithm with: find last visible element via `getBoundingClientRect()`, compare bottom to `scrollHeight`, fail if gap >300px. PRESERVE existing content-zone measurement as sub-check A, add page-level as sub-check B. Also add builder recipe trailing void check (from ME-041 content). |
| **Where** | `gate-runner-core.js` (+10 lines, must be net-zero with -10 offset elsewhere) |
| **How** | Locate GR-44 code block in gate-runner-core.js. Replace measurement logic. Preserve result schema: `{ gate: 'GR-44', name: '...', status: 'PASS'|'FAIL', measured: {...}, threshold: {...} }`. Identify -10 lines to subtract for net-zero (comment trimming, redundant helper consolidation, or gate logic tightening). |
| **Format rules** | gate-runner-core.js uses EXECUTABLE PLAYWRIGHT JAVASCRIPT format. Try/catch wrapper mandatory. No other status values beyond PASS/FAIL. |
| **Anti-loss mechanisms** | M-13 (binary rules — CRITICAL: GR-44 is in REQUIRED_GATES at L1334; must remain there), M-19 (programmatic verification — CRITICAL: modifying most fragile file; no other gate functions may be accidentally modified), M-05 (BV-01 code must not be affected), M-06 (BV-04 code must not be affected) |
| **Propagation cascades** | If only MEASUREMENT LOGIC changes (how trailing void is detected), only gate-runner-core.js changes. If gate NAME or ID changes, must update: gate-manifest.json, gate-runner-spec.md, MANIFEST.md. GR-44 is in verdict summary at L756 (`perceptionGates` filter includes 'GR-44'). ADV-1D-1: GR-44 vs SC-10 overlap — reducing trailing space to fix GR-44 could accidentally compress last zone boundary gap below SC-10's 120px threshold. No coordination between the two gates. |
| **Pre-conditions** | (1) Read GR-44 code block in full. (2) Understand current measurement and identify the BUG. (3) Identify -10 lines to subtract for net-zero. (4) Verify surrounding gate functions won't be affected. |
| **Post-verification** | (1) Verify GR-44 result schema matches `{ gate, name, status, measured, threshold }`. (2) Verify GR-44 in REQUIRED_GATES at L1331-1335. (3) Verify verdict summary at L752-778 still includes 'GR-44' in perceptionGates filter. (4) Verify no other gate functions accidentally modified (check first/last lines of adjacent gates). (5) Verify function boundary comments unchanged. (6) Count total lines: must be <= 1,437. (7) Run modified gate-runner against known HTML to verify no JavaScript errors. |
| **Budget impact** | +10 lines to gate-runner-core.js (REQUIRES -10 offset for net-zero mandatory) |
| **In current 8-change plan?** | YES |
| **Source audit files** | audit-05-08.md (Tier 1 BLOCKING, "single worst false negative in gate system," HE-002/HE-012 confirm), audit-mechanisms.md (Change 4 safety checklist), audit-09-11.md (ADV-1D-1/1D-2 SC-10 overlap, FRESH-4-4 top pick #4 "concrete bug fix") |
| **Root issue** | RI-2 (Spec Bloat/Broken) |

---

### SECTION 1C: PREREQUISITES & DECISIONS

> **Rationale:** These items are prerequisites, experiments, process constraints, and informational awareness items. They are important context for implementation but are NOT direct spec changes that fix broken specs or priority inversion. Items marked INFORMATIONAL represent meta-observations and process awareness constraints — they do not produce spec file changes.

---

### MUST-08: ME-008 — Add Usability Circuit Breaker to Orchestrator

| Field | Detail |
|-------|--------|
| **What** | Between Phase 3B (PA) and 3C (Weaver), orchestrator scans all 9 reports for BLOCKING usability findings. If found: elevate to BLOCKING-USABILITY, annotate as "must be Fix #1" for Weaver, verify fix in SHIP WITH FIXES verdict. |
| **Where** | `MANIFEST.md` (+8 lines, between Phase 3B and 3C sections) |
| **How** | Add orchestrator scan step between PA deployment results and Weaver invocation. Binary check: if ANY auditor experiential pass (ME-001) or question response flags text illegibility -> orchestrator elevates to BLOCKING-USABILITY before passing to Weaver. |
| **Format rules** | MANIFEST.md uses DECLARATIVE ROUTING format. Orchestrator instructions use decision-tree language. |
| **Anti-loss mechanisms** | M-04 (context isolation — safe, orchestrator-facing), M-07 (MANIFEST routing — editing MANIFEST), M-23 (REBUILD not FIX — circuit breaker interacts with verdict logic), M-13 (binary rules — circuit breaker adds a new binary verdict category BLOCKING-USABILITY that must be consistent with verdict logic across 7+ locations) |
| **Propagation cascades** | (1) MANIFEST.md (primary), (2) artifact-orchestrator.md (Phase 3B-3C transition), (3) EXECUTION-TRACKER-TEMPLATE.md |
| **Pre-conditions** | ME-001 must be implemented first (circuit breaker scans experiential pass output). ADV-05c: When ME-005 (MECHANICAL) and ME-008 (circuit breaker) coexist, interaction is undefined — MECHANICAL says REFINE; usability breaker says "Fix #1." Must define which takes precedence. |
| **Post-verification** | (1) Verify circuit breaker uses binary language. (2) Verify it scans experiential pass output format defined by ME-001. (3) Verify interaction with ME-005 MECHANICAL exception is defined. |
| **Budget impact** | +8 lines to MANIFEST.md (limited headroom of +20) |
| **In current 8-change plan?** | NO |
| **Source audit files** | audit-05-08.md (Tier 1 BLOCKING) |
| **Root issue** | RI-1 (Priority Inversion) |

---

### MUST-09: ME-009 — Add Experiential Detection Threshold Table + Aggregation Rules

| Field | Detail |
|-------|--------|
| **What** | >=3/9 auditors flag same text = CONFIRMED illegibility (Fix #1). 1/9 = POSSIBLE (Weaver investigates). 0/9 = All text readable. Add pre-aggregated summary to Weaver inputs. Ensure no calibration data leaks to auditors per M-04/M-20. |
| **Where** | `pa-deployment.md` (+15 lines, new aggregation section), `pa-weaver.md` (+8 lines, aggregated summary input format) |
| **How** | Add threshold table to pa-deployment.md (orchestrator computes aggregation from 9 experiential pass reports). Add pre-aggregated summary format to pa-weaver.md (Weaver receives structured summary, not raw 9 reports for this dimension). |
| **Format rules** | pa-deployment.md: phased protocol format. pa-weaver.md: verdict protocol format. Aggregation thresholds are binary (>=3 = CONFIRMED, 1-2 = POSSIBLE, 0 = CLEAR). |
| **Anti-loss mechanisms** | M-04 (context isolation — CRITICAL: aggregation thresholds must NOT leak to auditors; they are orchestrator/weaver-facing only), M-20 (fresh-eyes — aggregation is post-auditor, safe if kept in orchestrator/weaver files) |
| **Propagation cascades** | (1) pa-deployment.md (primary — orchestrator aggregation step), (2) pa-weaver.md (Weaver input format) |
| **Pre-conditions** | ME-001 must be implemented first (ME-009 aggregates ME-001 output). ADV-1A-2/1A-5: 9 auditors each reporting 3 categories = ~100+ new Weaver input lines. ME-009 structures consumption but does NOT reduce volume. Weaver capacity not analyzed. |
| **Post-verification** | (1) Verify thresholds are binary (>=3/1-2/0). (2) Verify no calibration data in auditor-visible files. (3) Verify pa-deployment.md aggregation step is orchestrator-facing only. (4) Verify Weaver input format is structured (pre-aggregated summary), not raw dump. |
| **Budget impact** | +15 lines pa-deployment.md (274 from ME-001+ME-006 + 15 = 289, approaching 300 threshold), +8 lines pa-weaver.md (390 from ME-002 + 8 = 398) |
| **In current 8-change plan?** | NO |
| **Source audit files** | audit-05-08.md (Tier 1 BLOCKING), audit-09-11.md (ADV-1A-5 "does not reduce volume," FRESH-7-1 "symptomatic — root cause is ME-001") |
| **Root issue** | RI-1 (Priority Inversion) |

---

### MUST-10: ADV-1A-4 / ADV-3-3 / ADV-7B — Three-Auditor Experiential Pass Optimization

| Field | Detail |
|-------|--------|
| **What** | Run experiential pass on ONLY 3 auditors (cold-look specialist + structural specialist + content-form specialist), not all 9. Uses ME-009's 3/9 confirmation threshold — if 3/3 experiential auditors flag same text, that exceeds the >=3/9 CONFIRMED threshold already. Gets 33% of cost for approximately same detection power. Alternatively per ADV-7B: 3 experiential + 3-4 analytical = 6-7 total auditors. |
| **Where** | `pa-deployment.md` (modify ME-001 experiential pass to designate 3 auditors, not all 9) |
| **How** | When implementing ME-001, instead of adding experiential pass to ALL 9 auditors, designate 3 specific auditors (A = cold-look/impression, E = structural, G or I = content-form/adversarial) as experiential pass auditors. Other 6 auditors proceed directly to their assigned questions. If ME-001 has already been implemented with "each auditor performs an experiential pass," REPLACE that instruction with: "Auditors A, E, and I perform an experiential pass before their assigned questions. Auditors B, C, D, F, G, H proceed directly to their assigned questions." Update the Section 2.5 title from "Experiential Pass (MANDATORY -- Before Questions)" to "Experiential Pass (MANDATORY -- Auditors A, E, I)." |
| **Format rules** | Same as ME-001 (observation verbs, orchestrator decision tree format). |
| **Anti-loss mechanisms** | M-22 (9-auditor deployment — modifies auditor differentiation; 3 have expanded scope, 6 unchanged), M-04 (context isolation — 3 experiential auditors have different information set than 6 non-experiential; minor concern but noted) |
| **Propagation cascades** | Same as ME-001 propagation, plus: pa-deployment.md assignment table must reflect which 3 auditors do experiential pass. |
| **Pre-conditions** | ME-001 must be designed first (this is an optimization OF ME-001). |
| **Post-verification** | (1) Verify exactly 3 auditors designated for experiential pass. (2) Verify the 3 are the best candidates (cold-look, structural, adversarial). (3) Verify other 6 auditors' workflow is unchanged. (4) Verify ME-009 aggregation thresholds still work (3/3 = 3/9 equivalent). |
| **Budget impact** | Net SAVINGS — reduces ME-001's +18 lines because experiential pass instructions only target 3 auditors, not 9. Also saves 45-72 min pipeline time (ADV-1A-1) and ~$15-20/run (HE-009). |
| **In current 8-change plan?** | NO — "Nobody in the analysis corpus has proposed this optimization" |
| **Source audit files** | audit-09-11.md (ADV-1A-4, ADV-3-3, ADV-7B — convergence across 2 of 3 buddy files: ADV and META both identify 9 experiential auditors as wasteful) |
| **Root issue** | RI-1 (Priority Inversion) |

---

### MUST-11: ADV-1B-7 — WCAG Palette Conflict Resolution (Pre-condition for ME-003)

| Field | Detail |
|-------|--------|
| **What** | ME-003 (WCAG gate) will produce REQUIRED failures on soul-mandated accent colors. #2a7d7d on #f0ebe3 = ~4.1:1 (BELOW 4.5:1). Sage green, warm amber, muted coral all in danger zone. THREE resolution options, ONE must be chosen BEFORE implementing ME-003: Option A (WCAG exemption for decorative/non-informational accent colors), Option B (revised accent palette passing 4.5:1 on ALL warm backgrounds), Option C (WCAG gate at RECOMMENDED tier not REQUIRED). |
| **Where** | Decision required before ME-003 implementation. Affects: `gate-runner-core.js` (GR-60 implementation), `tokens.css` (if Option B), `gate-manifest.json` (if Option C) |
| **How** | User must decide Option A, B, or C. Then ME-003 implementation incorporates the chosen resolution. |
| **Format rules** | N/A — decision item, not spec content. |
| **Anti-loss mechanisms** | M-08 (dual-route — if accent palette changes, builder calibration values must update too) |
| **Propagation cascades** | Option A: gate-runner-core.js decorative exemption logic. Option B: tokens.css accent colors + all files referencing accent hex values. Option C: gate-manifest.json tier change from REQUIRED to RECOMMENDED. |
| **Pre-conditions** | Contrast ratio calculations for ALL accent colors on ALL warm backgrounds must be verified first. |
| **Post-verification** | (1) Verify chosen option eliminates false positives on soul-mandated accent colors. (2) Verify chosen option does NOT eliminate true positives on genuinely illegible text. |
| **Budget impact** | Depends on option chosen. Option A: +5-10 lines gate-runner. Option B: +0 lines (value changes only). Option C: +0 lines (tier change only). |
| **In current 8-change plan?** | NO (ME-003 itself is not in plan) |
| **Source audit files** | audit-09-11.md (ADV-1B-1 through ADV-1B-7, rated MUST) |
| **Root issue** | RI-1 (Priority Inversion) |

---

### MUST-12: ADV-1C-3 — Builder Signal Mechanism for Screenshot Validation (Pre-condition for ME-006)

| Field | Detail |
|-------|--------|
| **What** | ME-006 screenshot validation needs a builder signal: "This page uses scroll-triggered reveals" that exempts it from blank-screenshot threshold while still catching actual DPR bugs. Without this, the validation gate cannot distinguish intentional hidden content from broken screenshots. Proposed: builder declares `<!-- SCROLL-REVEALS: true -->` HTML comment. |
| **Where** | `artifact-builder-recipe.md` (builder output spec for HTML comment), `pa-deployment.md` (screenshot validation gate checks for comment before flagging blanks) |
| **How** | Add instruction to builder recipe: "If your page uses scroll-triggered animations, add `<!-- SCROLL-REVEALS: true -->` to HTML." Screenshot validation gate: if comment present, allow blank screenshots; if absent, blank screenshots = DPR bug. |
| **Format rules** | Builder instruction uses recipe framing: "Deploy a scroll-reveal declaration if your page uses scroll-triggered animations." |
| **Anti-loss mechanisms** | M-06 (suppressor — verify builder instruction uses recipe verbs), M-11 (recipe format), M-12 (world-description framing) |
| **Propagation cascades** | (1) artifact-builder-recipe.md (builder instruction), (2) pa-deployment.md (validation gate logic), (3) builder prompt template in MANIFEST Appendix E |
| **Pre-conditions** | ME-006 must be designed first (this is a sub-component of ME-006). |
| **Post-verification** | (1) Verify builder instruction uses recipe verbs. (2) Verify validation gate checks for HTML comment. (3) Verify the distinction (comment present = allow blanks, comment absent = flag blanks) is binary. |
| **Budget impact** | +3-5 lines artifact-builder-recipe.md, +3-5 lines pa-deployment.md |
| **In current 8-change plan?** | NO |
| **Source audit files** | audit-09-11.md (ADV-1C-1 through ADV-1C-4, rated MUST; audit-mechanisms.md Change 7 item 8 "orphan risk") |
| **Root issue** | RI-1 (Priority Inversion) |

---

### MUST-13: ADV-07a — Gate-Runner Subtraction Plan (THE Prerequisite for Gate Additions) _(Section 1A: FIX BROKEN SPECS)_

| Field | Detail |
|-------|--------|
| **What** | Remove GR-33 through GR-42 and GR-08 spec text from gate-runner-core.js (~150 lines). THE most important prerequisite for Tier 1. Without it, ME-003/ME-014/ME-040 cannot be safely added. Gate-runner-core.js has ZERO net capacity budget. **BUDGET NOTE:** The evidence-based subtraction figure is -60 lines (per File 14 surgery plan, the most detailed source). The -150/-170 figures are from earlier estimates that counted gates using different naming conventions. Use -60 for capacity planning. |
| **Where** | `gate-runner-core.js` (-150 lines per original estimate; **corrected to -60 per File 14**), `gate-manifest.json` (remove entries), `gate-runner-spec.md` (remove documentation), `MANIFEST.md` (update gate count references) |
| **How** | Identify GR-33 through GR-42 and GR-08 in gate-runner-core.js. Remove gate functions. Remove from REQUIRED_GATES or RECOMMENDED_GATES arrays at L1331-1340. Remove from gate-manifest.json. Remove from gate-runner-spec.md. Update all gate count references. |
| **Format rules** | N/A — subtraction only. |
| **Anti-loss mechanisms** | M-13 (binary rules — removing from REQUIRED_GATES changes verdict behavior; must verify removed gates are truly low-value), M-19 (programmatic verification — editing most fragile file) |
| **Propagation cascades** | Per `17-removal-propagation-map.md`: every removed gate must be removed from gate-runner-core.js (function + array entries), gate-manifest.json, gate-runner-spec.md, MANIFEST.md gate count references, and any pa-questions.md Appendix B references. |
| **Pre-conditions** | (1) Verify GR-33-42 and GR-08 are truly low-value (cross-reference with ADV-2-2 through ADV-2-8 low-value gate analysis). (2) ADV-2-1/ADV-7A: Gate naming map GR-XX <-> SC-XX does NOT exist — implementer cannot identify which gates to modify without mapping. THIS IS A BLOCKING PREREQUISITE. |
| **Post-verification** | (1) Verify gate-runner-core.js line count decreased by ~150 (corrected: ~60 per File 14 surgery plan). (2) Verify no remaining references to removed gate IDs. (3) Verify REQUIRED_GATES and RECOMMENDED_GATES arrays updated. (4) Verify gate-manifest.json entries removed. (5) Run gate-runner to verify no JavaScript errors from missing references. |
| **Budget impact** | -150 lines gate-runner-core.js (creates capacity for ME-003 +70, ME-007 +10, net remaining: -70 available). **BUDGET NOTE:** The evidence-based subtraction figure is -60 lines (per File 14 surgery plan, the most detailed source). The -150/-170 figures are from earlier estimates that counted gates using different naming conventions. Use -60 for capacity planning. |
| **In current 8-change plan?** | NO — "completely absent from master list" per adversarial review |
| **Source audit files** | audit-05-08.md (ADV-07a rated MUST PRECONDITION, ADV-06a "subtraction must precede addition — should be rank 1-5"), audit-09-11.md (ADV-2-1 gate naming map blocking, FRESH-5-3 "aggressive pruning needed") |
| **Root issue** | RI-2 (Spec Bloat/Broken) |

---

### MUST-14: ADV-2-1 / ADV-7A — Gate Naming Map GR-XX <-> SC-XX _(Section 1A: FIX BROKEN SPECS)_

| Field | Detail |
|-------|--------|
| **What** | Analysis files reference GR-XX (V3 pipeline gate-runner-core.js) and SC-XX (new pipeline gate-runner.md) interchangeably. Nobody has produced a mapping between the two systems. An implementer reading master list (GR-XX refs) and gate-runner.md (SC-XX refs) will not know which gates correspond. THIS IS A BLOCKING IMPLEMENTATION PREREQUISITE. |
| **Where** | New mapping document or table added to an existing file (e.g., gate-runner-spec.md appendix or MANIFEST.md appendix) |
| **How** | Read gate-runner-core.js (GR-XX gates) and gate-runner.md (SC-XX gates). Produce 1:1 mapping table showing which GR-XX corresponds to which SC-XX. Flag any GR-XX with no SC-XX equivalent and vice versa. |
| **Format rules** | Simple lookup table format. |
| **Anti-loss mechanisms** | N/A — informational only. |
| **Propagation cascades** | Once mapping exists, all Phase 3 documents referencing SC-XX should be annotated with GR-XX equivalents (or vice versa). |
| **Pre-conditions** | Access to both gate-runner-core.js and gate-runner.md. |
| **Post-verification** | (1) Every GR-XX has a mapped SC-XX or "NO EQUIVALENT." (2) Every SC-XX has a mapped GR-XX or "NEW GATE." |
| **Budget impact** | +20-30 lines (mapping table) if added to existing file |
| **In current 8-change plan?** | NO |
| **Source audit files** | audit-09-11.md (ADV-2-1, ADV-7A — both rated MUST PRECONDITION, "BLOCKING implementation prerequisite") |
| **Root issue** | RI-2 (Spec Bloat/Broken) |

---

### MUST-15: ADV-5-3 — Per-File Agent Architecture for Implementation

| Field | Detail |
|-------|--------|
| **What** | Implementation MUST use 1 agent per target file (gate-runner gets own agent, MANIFEST gets own agent, etc.). Each reads ONLY its surgery plan. Surgery plans must contain EXACT old-text -> new-text diffs. Coordinating agent verifies cross-file consistency AFTER. Rationale: 5,000+ lines required reading will degrade single-agent compliance to near-zero (ADV-5-1, ADV-5-2). |
| **Where** | Implementation process architecture (not a spec file change — an implementation methodology requirement) |
| **How** | For each target file, create a focused surgery plan with exact old->new diffs. Assign one implementation agent per file. After all agents complete, run a cross-file consistency verification agent. |
| **Format rules** | Surgery plans must use EXACT old-text -> new-text format (Edit tool compatible). |
| **Anti-loss mechanisms** | All M-XX mechanisms — per-file architecture prevents cross-file contamination and compliance degradation. |
| **Propagation cascades** | N/A — process architecture. |
| **Pre-conditions** | Surgery plans must be written with exact diffs before implementation begins. |
| **Post-verification** | Cross-file consistency verification after all per-file agents complete. |
| **Budget impact** | N/A — process, not spec content. |
| **In current 8-change plan?** | NO — "Implementation architecture not designed" per ADV-FINAL-4 |
| **Source audit files** | audit-09-11.md (ADV-5-1 "5,000+ lines required reading," ADV-5-2 "compliance degradation by format," ADV-5-3 "per-file agent architecture," ADV-FINAL-4 rated MUST) |
| **Root issue** | RI-3 (Anti-Loss Mechanisms Not Working) |

---

### MUST-16: ADV-06a — Subtraction Priority Inversion Fix

| Field | Detail |
|-------|--------|
| **What** | ME-037 (retire questions) ranked 36th but is the ONLY subtraction in the master list. "Subtraction must precede addition." Should be rank 1-5, not 36. Implementation order must be: (1) subtractions first (ME-037, ADV-07a gate removal, ADV-07b recipe cleanup, ME-054 dead CSS), (2) modifications second (ME-002, ME-005, ME-007, ME-010-013), (3) additions last (ME-001, ME-003, ME-004, ME-006, ME-008, ME-009, ME-039). |
| **Where** | Implementation ordering (not a spec file change) |
| **How** | Reorder implementation plan to: Phase A SUBTRACT FIRST, Phase B MODIFY EXISTING, Phase C ADD NEW. |
| **Format rules** | N/A — ordering constraint. |
| **Anti-loss mechanisms** | All capacity-related mechanisms — subtraction creates headroom for additions. |
| **Propagation cascades** | N/A — ordering. |
| **Pre-conditions** | ADV-07a (gate-runner subtraction) and ADV-07b (builder recipe subtraction) must be defined before implementation begins. |
| **Post-verification** | Verify all subtractions completed and budgets updated before any additions applied. |
| **Budget impact** | Net positive — creates capacity headroom. |
| **In current 8-change plan?** | PARTIAL — ME-037 is in plan but ordering is not specified |
| **Source audit files** | audit-05-08.md (ADV-06a rated MUST, adversarial structural recommendation Phase A/B/C ordering) |
| **Root issue** | RI-2 (Spec Bloat/Broken) |

---

### MUST-17: META-2A-3 — Detection-to-Fix Pipeline Gap

| Field | Detail |
|-------|--------|
| **What** | CRITICAL: There is NO step in current pipeline for builder to receive and act on Weaver's fix list after PA. Pipeline produces a VERDICT, not applied FIXES. ME-017 proposes Phase 4 for mechanical fixes, but illegibility requires HTML/CSS redesign — not mechanical. Causal chain from detection to resolution has a MAJOR GAP. Experiential pass (ME-001) improves detection but the chain breaks at step 5 regardless. |
| **Where** | Pipeline architecture (MANIFEST.md verdict-to-action gap) |
| **How** | Must define: when Weaver produces a fix list and verdict is SHIP WITH FIXES or REFINE, what EXACTLY does the receiving agent get? How does diagnostic info from gates flow to the REBUILD builder (currently blocked by M-04 context isolation)? |
| **Format rules** | N/A — architectural gap. |
| **Anti-loss mechanisms** | M-04 (context isolation — creates the gap: builder in REBUILD cycle does not receive gate results), M-23 (REBUILD not FIX — REBUILD means fresh builder with zero diagnostics) |
| **Propagation cascades** | Fixing this gap would touch MANIFEST.md verdict logic, artifact-orchestrator.md REBUILD/REFINE protocol, and potentially builder prompt template. |
| **Pre-conditions** | Must decide: does diagnostic info flow to REBUILD builder (violating M-04 partial isolation) or does a new REFINE-with-diagnostics path exist? |
| **Post-verification** | Verify that detection of illegibility leads to a concrete fix action, not just a verdict annotation. |
| **Budget impact** | Unknown — architectural decision needed first. |
| **In current 8-change plan?** | NO — "this gap is not addressed in any of the 8 changes" |
| **Source audit files** | audit-09-11.md (META-2A-3 rated MUST PRECONDITION, META-2B-1/2B-2 confirm for WCAG chain, convergence finding #3 across 2 buddy files) |
| **Root issue** | RI-1 (Priority Inversion) |

---

### MUST-18: ADV-FINAL-2 / META-4-3 / META-4-5 / ADV-6-3 — Content Experiment Before Implementation

| Field | Detail |
|-------|--------|
| **What** | 57 enrichments justified by N=1 (one pipeline run, one content type). Running pipeline on DIFFERENT content (e.g., Boris article — prose-only) before implementing enrichments would cost 2-4 hours, $5-15, and might invalidate half the enrichments. If Boris (prose-only) scores 3.5+ with CURRENT pipeline: priority inversion is content-specific and many enrichments solve wrong problem. If Boris ALSO scores 2.5-3.0: pipeline has systemic issues, enrichments justified. STRONGEST convergent finding across all 3 buddy files. |
| **Where** | N/A — process decision, not spec change |
| **How** | Run current pipeline (no enrichments) on prose-only content. Measure PA-05. Compare to Gas Town results. Use results to validate/invalidate enrichment necessity. |
| **Format rules** | N/A |
| **Anti-loss mechanisms** | N/A |
| **Propagation cascades** | Results may invalidate or validate entire enrichment list. |
| **Pre-conditions** | Content must be selected. Pipeline must be executable in current state. |
| **Post-verification** | Compare PA-05 scores across content types. If prose-only >= 3.5: most ME-001-009 enrichments are Gas Town specific, not pipeline-general. |
| **Budget impact** | $5-15, 2-4 hours. Potentially SAVES all implementation effort if results show enrichments unnecessary. |
| **In current 8-change plan?** | NO — "Nobody in analysis corpus proposes this" |
| **Source audit files** | audit-09-11.md (ADV-6-1/6-2/6-3, ADV-FINAL-2 rated MUST, META-4-3/4-5 rated MUST, META-7-2 "Option A: Minimal," convergence finding #1 — strongest convergent finding across all 3 buddy files) |
| **Root issue** | RI-1 (Priority Inversion) |
| **Note** | **INFORMATIONAL** — This is an experiment/process decision, not a spec change. It does not produce spec file modifications. |

---

### MUST-19: META-1-1 / META-6-1 / META-6-2 — Frame A vs Frame C Awareness

| Field | Detail |
|-------|--------|
| **What** | Phase 3 operates under Frame A (Fix the Machine) while SPEAKING Frame C (Reduce to Essentials). Evidence: 42 ADDs vs 1 REMOVE. Phase 2 found "more specification = worse output" — Phase 3 adds ~785 lines specification. 5,846 lines analysis for 2,034-line page. "Produce comprehensive enrichments" optimizes for COVERAGE, not OUTCOME. Phase 3 inherited the disease from the pipeline it is trying to cure. Implementation must be aware of this dynamic and actively resist it. |
| **Where** | Implementation decision framing (not spec change) |
| **How** | Before implementing ANY change, ask: "Does this addition REDUCE net pipeline complexity or INCREASE it?" If net increase, require explicit justification. Prefer modifications over additions. Prefer subtractions over modifications. |
| **Format rules** | N/A — meta-awareness. |
| **Anti-loss mechanisms** | N/A |
| **Propagation cascades** | N/A |
| **Pre-conditions** | N/A |
| **Post-verification** | After all changes: count net lines added vs removed. If net positive exceeds 240-line capacity budget, implementation is Frame A (adding) not Frame C (simplifying). |
| **Budget impact** | N/A — awareness constraint. |
| **In current 8-change plan?** | NO |
| **Source audit files** | audit-09-11.md (META-1-1/1-2 rated MUST, META-6-1/6-2 rated MUST, META-3-1 "29:1 to 117:1 meta-to-output ratio") |
| **Root issue** | RI-2 (Spec Bloat/Broken) |
| **Note** | **INFORMATIONAL** — This is a meta-awareness constraint, not a spec change. It does not produce spec file modifications. |

---

### MUST-20: META-5-5 — Null Hypothesis: DPR Fix Only

| Field | Detail |
|-------|--------|
| **What** | If ZERO enrichments applied and V4 Gas Town run with Opus builder + DPR bug fixed (just CSS override for screenshots): DPR fix alone might eliminate 80% of Phase 2 findings (void-dominated PA, screenshot corruption cascade, trailing void confusion). PA-05 without void artifact might be 3.0-3.5/4. Cheapest possible intervention, not considered anywhere. |
| **Where** | N/A — experiment, not spec change |
| **How** | Apply ONLY the CSS override fix from PE-001/ME-006 sub-change 1 to pa-deployment.md. Run pipeline. Measure PA-05. |
| **Format rules** | N/A |
| **Anti-loss mechanisms** | N/A |
| **Propagation cascades** | Results inform whether full enrichment wave is needed. |
| **Pre-conditions** | Pipeline must be executable. CSS override text from PE-001 must be available. |
| **Post-verification** | Compare PA-05 with DPR-fix-only vs original V3 results. |
| **Budget impact** | ~$10, ~2 hours. Potentially saves entire enrichment implementation if DPR was root cause. |
| **In current 8-change plan?** | NO |
| **Source audit files** | audit-09-11.md (META-5-5 rated MUST, META-7-2 "Option A: Minimal $10, 2hr") |
| **Root issue** | RI-1 (Priority Inversion) |
| **Note** | **INFORMATIONAL** — This is an experiment proposal, not a spec change. It does not produce spec file modifications. |

---

### MUST-21: FRESH-5-1 / FRESH-5-3 / FRESH-5-4 — Pipeline Complexity Exceeds Context Capacity

| Field | Detail |
|-------|--------|
| **What** | Pipeline has 15 agents, 31+ gates, 69 PA questions, 4 BV gates, 885-item extraction taxonomy, 3-6 hours real time. "If your build system exceeds the context window of the AI running it, complexity has outpaced capacity." Architecture is sound; content is overloaded. Pipeline needs aggressive PRUNING, not more enrichments. ME-045 confirms: "pipeline typically requires 2-3 sessions due to context exhaustion." This is a MUST-ACKNOWLEDGE constraint on any implementation — adding lines makes this worse. |
| **Where** | N/A — architectural awareness constraint |
| **How** | Every proposed addition must be weighed against context capacity. Net additions that increase pipeline complexity without proven quality improvement should be deferred. |
| **Format rules** | N/A |
| **Anti-loss mechanisms** | M-25 (honest accounting — current ~3,600 lines; additions push higher) |
| **Propagation cascades** | N/A |
| **Pre-conditions** | N/A |
| **Post-verification** | After all changes: verify total pipeline spec does not exceed context window limits. If 2-3 sessions already required, additions that push to 3-4 sessions are net negative. |
| **Budget impact** | Constraining — limits total additions. |
| **In current 8-change plan?** | NO |
| **Source audit files** | audit-09-11.md (FRESH-5-1/5-3/5-4 rated MUST, FRESH-5-2 "specification is primary artifact") |
| **Root issue** | RI-2 (Spec Bloat/Broken) |
| **Note** | **INFORMATIONAL** — This is an architectural awareness constraint, not a spec change. It does not produce spec file modifications. |

---

### MUST-22: ADV-01 / ADV-01a / ADV-01b / ADV-02 — Complexity Ratchet + Capacity Budget Violation

| Field | Detail |
|-------|--------|
| **What** | Add:Remove ratio is 42:1 (42 ADD, 11 REPLACE, 1 REMOVE, 3 SIMPLIFY). Net addition ~620 lines against 240-line safe budget. Budget exceeded by 3.3x (785 vs 240). "The complexity ratchet is not about the QUALITY of additions — it is about the ACT of addition." The defense "these are the RIGHT 620 lines" is the same argument every previous enrichment wave made. If enforced strictly, only Tier 1 BLOCKING (~200 lines) + 2-3 SIGNIFICANT enrichments fit. Tiers 3-7 have ZERO remaining capacity. |
| **Where** | Implementation budget constraint (not spec change) |
| **How** | Enforce 240-line capacity budget. Tier 1 BLOCKING = ~200 lines. Remaining ~40 lines for 2-3 SIGNIFICANT items. Everything else is post-validation. "The 57-item list is actually a 12-15 item list wearing a trenchcoat." |
| **Format rules** | N/A — budget constraint. |
| **Anti-loss mechanisms** | All capacity mechanisms — exceeding budget degrades compliance. |
| **Propagation cascades** | Budget enforcement determines which items from Tier 2+ can be included. |
| **Pre-conditions** | Accurate line counts for each proposed change. |
| **Post-verification** | After implementation: total net lines added must be <= 240. |
| **Budget impact** | CONSTRAINING — 240 lines total budget, ~200 consumed by Tier 1 BLOCKING. |
| **In current 8-change plan?** | PARTIAL — 8-change plan is roughly within budget (~200-250 lines) |
| **Source audit files** | audit-05-08.md (ADV-01/01a/01b rated MUST "CRITICAL finding #1," ADV-02/02a rated MUST "CRITICAL finding #2") |
| **Root issue** | RI-2 (Spec Bloat/Broken) |
| **Note** | **INFORMATIONAL** — This is a budget constraint, not a spec change. It does not produce spec file modifications. Belongs logically in Section 4 (Pre-Implementation Requirements) but is cross-referenced here for visibility. |

---

### MUST-23: ADV-7C / META-4-4 — Builder Model (Sonnet vs Opus) Unexamined

| Field | Detail |
|-------|--------|
| **What** | MEMORY.md states: "Sonnet-for-builders is unexamined," "potentially highest-leverage single intervention." None of 57 enrichments addresses this. Phase 3 builds more infrastructure instead of running experiments. CD-006 (CEILING) was built by Opus; Flagship builders were Sonnet. One experiment ($5-15, 1-2 hrs) could render half the enrichments unnecessary. Also META-4-4: "Is pipeline QA system (maximize experience) or brand-enforcement system (maximize identity compliance)?" — deepest unexamined assumption. | ALWAYS USE OPUS ALWAYS USE OPUS NO MATTER WHAT ALWAYS OPUS
| **Where** | N/A — experiment/process decision |
| **How** | Run pipeline with Opus builder instead of Sonnet builder. Compare PA-05. If Opus builder produces PA-05 >= 3.5 with current pipeline: builder model is the bottleneck, not pipeline spec. |
| **Format rules** | N/A |
| **Anti-loss mechanisms** | N/A |
| **Propagation cascades** | Results may redirect entire enrichment strategy. |
| **Pre-conditions** | Pipeline must be executable with Opus builder. |
| **Post-verification** | Compare PA-05 scores across Sonnet vs Opus builders on same content. |
| **Budget impact** | $5-15, 1-2 hours. Potentially highest-leverage single intervention. |
| **In current 8-change plan?** | NO |
| **Source audit files** | audit-09-11.md (ADV-7C rated MUST, META-4-4 rated MUST) |
| **Root issue** | RI-1 (Priority Inversion) |
| **Note** | **INFORMATIONAL** — This is an experiment proposal, not a spec change. It does not produce spec file modifications. |

---

### ~~MUST-24~~ **[DELETED]**

> **MUST-24 was a duplicate of MUST-03 (ME-003).** Both reviewers (metacognitive and priority audit) identified this as a pure duplicate. The fresh-eyes endorsement (FRESH-2-2 / FRESH-4-2) has been folded into MUST-03's source audit files line. Removing to avoid inflating the MUST count and misleading budget math.

---

### MUST-25: FRESH-6-1 / ADV-7F — Builder Gets Nothing From Phase 3

| Field | Detail |
|-------|--------|
| **What** | Every Phase 3 artifact is for pipeline DESIGNERS. None is for the agent that writes HTML. "Not a single enrichment gives the builder MORE to work with — more examples, more reference pages, more visual vocabulary." Where are EXAMPLES of pages scoring 4/4? If builder has never seen "DESIGNED," how can it produce "DESIGNED"? Highest-leverage intervention = giving BUILDER better input. Proposed artifacts: visual cheat sheet (5 common defects CSS), danger zones file (content types needing special handling), annotated 4/4 example page. None exist, none proposed. |
| **Where** | New builder-facing artifacts (if created) |
| **How** | Create builder-facing reference materials: (1) Visual cheat sheet of 5 most common CSS defects with correct/incorrect examples, (2) Danger zones file (content types needing special handling: SVG charts, code blocks, long-form essays), (3) Annotated example of 4/4 page. All would be direct-injection files (M-03) bypassing brief compression. |
| **Format rules** | Must use world-description framing (M-12), recipe format (M-11), no suppressor language (M-06). |
| **Anti-loss mechanisms** | M-03 (direct injection — builder-facing files bypass brief), M-06/M-11/M-12 (format requirements) |
| **Propagation cascades** | (1) New files created, (2) MANIFEST.md Appendix B routing updated, (3) Builder prompt template updated to reference new files, (4) artifact-builder-recipe.md updated with file read instructions |
| **Pre-conditions** | Must decide what constitutes "4/4 example" — no Flagship-tier page has been produced yet. |
| **Post-verification** | (1) Verify builder-facing files use recipe format. (2) Verify routing in MANIFEST. (3) Verify no gate thresholds in builder-facing content. |
| **Budget impact** | +50-100 lines new files (within direct-injection budget, bypasses brief compression) |
| **In current 8-change plan?** | NO — convergence finding #5 across ADV and FRESH buddy files |
| **Source audit files** | audit-09-11.md (FRESH-6-1 rated MUST, ADV-7F rated MUST — convergence across 2 of 3 buddy files) |
| **Root issue** | RI-1 (Priority Inversion) |

---

### MUST-26: ME-037 — Retire PA Questions PA-06, PA-09, PA-40 _(Section 1A: FIX BROKEN SPECS)_

| Field | Detail |
|-------|--------|
| **What** | Retire 3 PA questions: PA-06 (words stacking vertically — near-zero failure rate, never actionable), PA-09 (dead space — fully subsumed by PA-33 "silence in music or dropped signal"), PA-40 (spacing jump — subsumed by PA-69 which counts visual properties at transitions). NOT retiring PA-07 — it does not exist in current pa-questions.md. |
| **Where** | 11 locations must be updated: pa-questions.md (delete rows + update total), pa-deployment.md (update auditor assignments B/C/F + total), MANIFEST.md (update auditor roster B/C/F + total at L150/151/154/159), pa-manifest.md (update B/C/F checklists + total), pa-weaver.md (update total at L18), pa-guardrails.md (update total at L15 + remove PA-40 from AP-05 mapping at L78), EXECUTION-TRACKER-TEMPLATE.md (update B/C/F rows + total) |
| **How** | DELETE: pa-questions.md L163 (PA-06), L171 (PA-09), L204 (PA-40). UPDATE auditor counts: B 8->7, C 11->10, F 6->5. UPDATE all "69 questions" references to new total (66 before additions, 69 after 3 additions from ME-021/022/023). |
| **Format rules** | Replacement questions use YES/NO evidence format with viewport assignment and auditor assignment, matching existing PA question format in pa-questions.md. |
| **Anti-loss mechanisms** | M-22 (9-auditor deployment — CRITICAL: 11-location question total consistency required; source of truth is pa-deployment.md L42-52), M-04 (context isolation — retired question content removed cleanly; replacement questions contain NO calibration data, NO tier definitions), M-20 (fresh-eyes — replacement questions use perceptual observation language only), M-09 (prompt templates — MANIFEST Appendix E PA auditor template question counts must match), M-07 (MANIFEST routing — auditor assignment table in MANIFEST L149-157 must reflect retirements) |
| **Pre-conditions** | Must be applied BEFORE ME-021/022/023 additions and BEFORE ME-033 (void collapse rule, which originally referenced PA-09). |
| **Post-verification** | (1) pa-questions.md has no PA-06, PA-09, or PA-40 rows. (2) Auditor B/C/F counts updated in ALL 5 locations. (3) Total updated in ALL 11 locations. (4) pa-guardrails.md AP-05 mapping no longer references PA-40 (OR-5). (5) ME-033 void collapse rule does NOT reference PA-09 (OR-4). |
| **Budget impact** | -6 lines in pa-questions.md (3 rows x 2 lines each). |
| **In current 8-change plan?** | YES (as part of ME-037+ME-051 atomic swap) |
| **Source audit files** | audit-14-17.md (File 16 Sections 1.1-1.3 retirements), audit-14-17.md (File 17 REMOVAL 6, ~42 cascading edits across 7 files) |
| **Root issue** | RI-2 (Spec Bloat/Broken) |

---

### SAFETY CHECKLIST CROSS-REFERENCE (from audit-mechanisms.md)

The mechanisms audit identified 80 verification items across 8 changes. For MUST items, the highest-risk mechanism interactions are:

#### HIGH RISK Mechanisms (directly modified by 8-change plan)

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

#### Three Most Dangerous Interactions (from audit-mechanisms.md)

1. **ME-004/ME-039 x M-06/M-11/M-12** — Wrong verbs or prohibition framing -> BV-03/BV-04 catches -> brief FAIL. **Rule: Fix the content, never weaken the gate.**
2. **ME-005 x M-13** — Verdict logic across 7+ locations. Missing ONE = contradiction. **Rule: All 7 locations or none.**
3. **ME-037+ME-051 x M-22** — 11-location question total update. Mismatch = weaver flags incomplete data. **Rule: Compute final total ONCE, then search-and-replace across all 11 locations.**

---

### ADVERSARIAL AUDIT CROSS-REFERENCE (from File 23)

The adversarial checklist audit (File 23) cataloged 154 items across 10 categories. The following MUST-level items from that audit are represented in Section 1 above:

| Adversarial Audit Item | Mapped To |
|------------------------|-----------|
| MISS-07: 6 adversarial prerequisites not in plan | MUST-13 (ADV-07a), MUST-14 (naming map), MUST-15 (per-file arch), MUST-16 (subtraction ordering) |
| MISS-12: Experiment-first imperative | MUST-18 (content experiment), MUST-20 (DPR null hypothesis) |
| MISS-14: Detection-without-fix mechanism | MUST-17 (detection-to-fix gap) |
| MISS-15: Builder gets nothing from Phase 3 | MUST-25 (builder-facing artifacts) |
| MISS-19: Net-zero gate-runner constraint | Covered by MUST-07 (ME-007) and MUST-13 (ADV-07a) budget notes |
| MISS-26: 4 cross-file discrepancies | Section 8C (cross-file discrepancies) |
| MISS-32: 18 MISSING findings (GAP-01 to GAP-18) | Section 8 (gaps) |
| DG-05: Net-zero constraint downgrade risk | MUST-07 and MUST-13 budget notes preserve BLOCKING severity |
| DG-06: Detection without fix downgrade risk | MUST-17 preserves CRITICAL severity |
| DG-07: Builder gets nothing downgrade risk | MUST-25 preserves MUST severity |
| CTR-05: Budget math contradiction | MUST-22 (capacity budget) |
| CTR-07: Experiment-first vs implement-now | MUST-18 (content experiment) |
| BW-01/BW-09/BW-13: 3 BLOCKING buddy warnings | MUST-18, MUST-19, MUST-16 respectively |
| GAP-01: Builder playbook with CSS recipes | MUST-25 |
| GAP-08: Builder-visible quality routing | MUST-25 |
| GAP-16: Background delta enforcement | Covered in existing gates (>= 15 RGB threshold) |
| GAP-17: Stacked spacing verification | Covered in existing S-09 loophole awareness |
| Finding 2: Three unanimous buddy convergences ignored | MUST-18 (experiment), MUST-16 (subtraction), MUST-25 (builder blind) |
| Finding 3: Detection-without-fix paradox | MUST-17 |

**Items from adversarial audit NOT mapped above (tracked in Section 8):**
- MISS-01 (35 uncovered V3E enrichments) -> Section 8 gaps
- MISS-02 (8 FIX-FAILED items) -> Section 8 gaps
- MISS-03 (79 reservoir items) -> Section 8 gaps
- MISS-40 (80 verification items) -> Section 7 anti-loss
- MISS-44 (11-location PA update) -> Covered in MUST-09's propagation cascades
- Finding 1 (budget unresolved) -> MUST-22
- Finding 4 (complexity ratchet in audit process) -> MUST-19 (Frame A awareness)
- Finding 5 (meta:output ratio) -> MUST-21 (complexity exceeds capacity)

---

### SUMMARY TABLE

| Item | Section | Type | Root Issue | In 8-Plan? | Budget Lines | Key Risk |
|------|---------|------|-----------|-----------|-------------|----------|
| **MUST-00** (Anti-loss audit) | **1A** | Anti-loss mechanism audit | RI-3 | NO | Net zero | Foundation for all other changes |
| MUST-01 (ME-001) | **1B** | BLOCKING enrichment | RI-1 | YES | +18 | M-04/M-20 isolation |
| MUST-02 (ME-002) | **1B** | BLOCKING enrichment | RI-1 | YES | +14 | 7-location verdict cascade |
| MUST-03 (ME-003) | **1B** | BLOCKING enrichment | RI-1 | NO | +70 | Palette conflict, zero budget, missing code |
| MUST-04 (ME-004) | **1B** | BLOCKING enrichment | RI-1 | YES | +12 | M-06/M-11/M-12 verb format |
| MUST-05 (ME-005) | **1B** | BLOCKING enrichment | RI-1 | YES | +12 across 3 files | HIGHEST CASCADE — 7+ locations |
| MUST-06 (ME-006) | **1B** | BLOCKING enrichment | RI-1 | YES | +27 across 2 files | Builder signal missing, CSS override changes page |
| MUST-07 (ME-007) | **1A** | BLOCKING enrichment | RI-2 | YES | +10 net-zero | Most fragile file |
| MUST-08 (ME-008) | 1C | BLOCKING enrichment | RI-1 | NO | +8 | ME-005 interaction undefined |
| MUST-09 (ME-009) | 1C | BLOCKING enrichment | RI-1 | NO | +23 across 2 files | Does not reduce Weaver volume |
| MUST-10 (ADV-1A-4) | 1C | 3-auditor optimization | RI-1 | NO | Net savings | Modifies ME-001 scope |
| MUST-11 (ADV-1B-7) | 1C | WCAG palette resolution | RI-1 | NO | Varies | MUST precede ME-003 |
| MUST-12 (ADV-1C-3) | 1C | Builder signal mechanism | RI-1 | NO | +6-10 | MUST accompany ME-006 |
| MUST-13 (ADV-07a) | **1A** | Gate-runner subtraction | RI-2 | NO | -150 (see BUDGET NOTE: corrected to -60 per File 14) | MUST precede all gate additions |
| MUST-14 (ADV-2-1/7A) | **1A** | Gate naming map | RI-2 | NO | +20-30 | BLOCKING prerequisite |
| MUST-15 (ADV-5-3) | 1C | Per-file agent architecture | RI-3 | NO | N/A | Implementation methodology |
| MUST-16 (ADV-06a) | 1C | Subtraction-first ordering | RI-2 | NO | N/A | Implementation ordering |
| MUST-17 (META-2A-3) | 1C | Detection-to-fix gap | RI-1 | NO | Unknown | Architectural gap |
| MUST-18 (ADV-FINAL-2) | 1C | Content experiment first | RI-1 | NO | $5-15, 2-4hr | May invalidate enrichments |
| MUST-19 (META-1-1) | 1C | Frame A awareness **[INFO]** | RI-2 | NO | N/A | Meta-awareness |
| MUST-20 (META-5-5) | 1C | DPR-fix-only null hypothesis **[INFO]** | RI-1 | NO | ~$10, ~2hr | May eliminate 80% of findings |
| MUST-21 (FRESH-5-1) | 1C | Complexity exceeds capacity **[INFO]** | RI-2 | NO | N/A | Constraining |
| MUST-22 (ADV-01/02) | 1C | Capacity budget 240 lines **[INFO]** | RI-2 | NO | N/A | Constraining |
| MUST-23 (ADV-7C) | 1C | Builder model experiment **[INFO]** | RI-1 | NO | $5-15, 1-2hr | May redirect strategy |
| ~~MUST-24~~ | — | ~~DELETED — duplicate of MUST-03~~ | — | — | — | — |
| MUST-25 (FRESH-6-1) | 1C | Builder-facing artifacts | RI-1 | NO | +50-100 | No 4/4 example exists |
| MUST-26 (ME-037) | **1A** | PA question retirement | RI-2 | YES | -6 | 11-location update |

**[INFO]** = INFORMATIONAL items — meta-observations and process awareness constraints that do not produce spec file changes.

**Total items in MUST tier:** 26 (25 original + MUST-00 - deleted MUST-24 = 26; +3 promoted = 29)
**Section breakdown:** 1A: 5 items (MUST-00, MUST-13, MUST-14, MUST-07, MUST-26) | 1B: 6 items (MUST-01 through MUST-06) | 1C: 15 items (MUST-08 through MUST-25, excluding deleted MUST-24)
**In current 8-change plan:** 6 of 9 BLOCKING enrichments (ME-001, ME-002, ME-004, ME-005, ME-006, ME-007) + ME-037+ME-051 + ME-039 + ME-037 standalone retirement
**NOT in current 8-change plan:** 3 BLOCKING enrichments (ME-003, ME-008, ME-009) + 16 additional MUST items from buddy reports + 3 promoted from SHOULD (ME-010, ME-012, ME-011)

---

### SECTION 1D: PROMOTED FROM SHOULD — FALSE VIOLATION FIXES (Root Issues 1+2)

These 3 items were promoted from TIER 2A (SHOULD) per Priority Audit (File 28), Finding 3. They are the most direct fixes for Root Issue 1 (priority inversion) and Root Issue 2 (spec file cruft). Combined, they produce **401 false violations per gate run** that drown real signals — this IS the priority inversion problem. Full surgery diffs remain in their TIER 2A entries in Section 2.

---

#### MUST-27: ME-010 — GR-05 Split (Sub-Perceptual Tint Detection) — PROMOTED FROM SHOULD
- **Root issue:** RI-1 (Priority Inversion) + RI-2 (Spec Bloat)
- **Impact:** 207 false violations/run from 4% opacity tints triggering REQUIRED identity failures
- **Full detail:** See TIER 2A entry in Section 2 for exact surgery diffs
- **Budget:** 76 lines deleted, 44 lines added = +32 freed

#### MUST-28: ME-012 — GR-14 False Positive Fix — PROMOTED FROM SHOULD
- **Root issue:** RI-1 (Priority Inversion) + RI-2 (Spec Bloat)
- **Impact:** 13 false structural violations/run from nested section containers
- **Full detail:** See TIER 2A entry in Section 2 for exact surgery diffs
- **Budget:** -1 line deleted, +3 lines added = +2 net

#### MUST-29: ME-011 — GR-06 Rendered Font Fix — PROMOTED FROM SHOULD
- **Root issue:** RI-2 (Spec Bloat)
- **Impact:** 181 false font violations/run from never-rendered fallback fonts
- **Full detail:** See TIER 2A entry in Section 2 for exact surgery diffs
- **Budget:** ~+5 net lines

---

<!-- SECTION 2: INSERTED — see line ~637+ (30 SHOULD items, full detail) -->

---

<!-- SECTION 3 WILL BE INSERTED HERE BY NEXT AGENT -->
<!-- Source: checklist-S3-COULD-S8-GAPS.md (COULD portion) -->
<!-- Expected content: TIER 3 — COULD items -->

---

<!-- SECTION 4 WILL BE INSERTED HERE BY NEXT AGENT -->
<!-- Source: checklist-S4-PREREQS-S5-ORDER.md (PREREQS portion) -->
<!-- Expected content: PRE-IMPLEMENTATION REQUIREMENTS -->

---

<!-- SECTION 5 WILL BE INSERTED HERE BY NEXT AGENT -->
<!-- Source: checklist-S4-PREREQS-S5-ORDER.md (ORDER portion) -->
<!-- Expected content: IMPLEMENTATION ORDER with dependency graph and budget tracker -->

---

<!-- SECTION 6 WILL BE INSERTED HERE BY NEXT AGENT -->
<!-- Source: checklist-S6-FORMAT-S7-ANTILOSS.md (FORMAT portion) -->
<!-- Expected content: GLOBAL FORMATTING RULES -->

---

<!-- SECTION 7: RESOLVED — Anti-Loss Verification content is in Section 7 below (7.0-7.5). -->
<!-- Source: checklist-S6-FORMAT-S7-ANTILOSS.md (ANTILOSS portion) — APPLIED. -->

---

<!-- SECTION 8 WILL BE INSERTED HERE BY NEXT AGENT -->
<!-- Source: checklist-S3-COULD-S8-GAPS.md (GAPS portion) -->
<!-- Expected content: GAPS AND UNRESOLVED -->

---


---


---

## SECTION 2: TIER 2 — SHOULD

---

## TIER 2A: INFRASTRUCTURE GATE FIXES (ME-010 through ME-013)

These are the 4 gate-runner-core.js fixes that address false positives and implementation gaps in existing gates. All classified SIGNIFICANT in the master enrichment list.

---

#### [ME-010]: Split GR-05 (Warm Palette) into GR-05a/GR-05b by Opacity Threshold

> **PROMOTED TO MUST** — see Section 1A (MUST-27). 401 combined false violations/run directly cause priority inversion (Root Issue 1). Authoritative cross-reference entries in Section 1A.

- **What:** Split the single GR-05 warm palette gate into two sub-gates. GR-05a checks visible colors (opacity >= 0.3) and stays REQUIRED. GR-05b checks sub-perceptual colors (opacity < 0.3) and is downgraded to ADVISORY. Sub-perceptual tints at ~20 RGB points and 4% opacity currently cause REQUIRED failures for invisible color differences.

- **Where:**
  - `gate-runner-core.js` L234-277 (GR-05 function body)
  - `gate-runner-core.js` L1332 (REQUIRED_GATES array)
  - `gate-runner-core.js` L753 (identityGates filter)
  - `gate-manifest.json` L19-24 (required.gates, required.count)
  - `gate-manifest.json` L37-40 (advisory.gates, advisory.count)
  - `gate-manifest.json` L56 (verdictLogic.REBUILD)
  - `gate-manifest.json` L62-76 (executionOrder)
  - `gate-manifest.json` L140-147 (totalGateCount)
  - `gate-runner-spec.md` L69 (GR-05 row), L17-20 (categorization), L23 (total count), L149-151 (summary table), L180 (tier totals)
  - `MANIFEST.md` L98, L142, L245, L276
  - `EXECUTION-TRACKER-TEMPLATE.md` L158, L165
  - `artifact-orchestrator.md` verdict decision tree

- **How:** Per File 14 surgery plan (GS-01A), this is CONSOLIDATED with the GR-07 downgrade (ME-024, a COULD item) into a single merged function. The consolidated approach deletes GR-05 (L234-277, 43 lines) and GR-07 (L309-342, 33 lines) -- 76 lines total. Replaces with a single 44-line merged gate producing three result objects: GR-05a (visible cold, REQUIRED), GR-05b (sub-perceptual, ADVISORY), and GR-07 (pure B/W visible-text-only, RECOMMENDED). The new code uses a single `querySelectorAll('*').forEach`, `parseRGB` with alpha, `effectiveVisibility > 20` threshold for cold split, and `hasText` filter for pure B/W.

  **Old (L234-277, 43 lines):** Full GR-05 function checking all colors against isCold() heuristic as single REQUIRED gate

  **New (44 lines):** Merged function producing 3 result objects:
  ```
  // Single DOM pass: classify each color as visible-cold (GR-05a), sub-perceptual-cold (GR-05b), or pure-BW-text (GR-07)
  querySelectorAll('*').forEach(el => {
    const rgb = parseRGB(getComputedStyle(el).color);
    const alpha = parseAlpha(getComputedStyle(el).color);
    const vis = effectiveVisibility(alpha, rgb);
    if (vis > 20 && isCold(rgb)) { coldVisible.push({el, rgb}); }     // GR-05a
    else if (vis <= 20 && isCold(rgb)) { coldSub.push({el, rgb}); }    // GR-05b
    if (hasText(el) && isPureBW(rgb)) { pureBW.push({el, rgb}); }      // GR-07
  });
  results.push({gate:'GR-05a', status: coldVisible.length===0?'PASS':'FAIL', ...});
  results.push({gate:'GR-05b', status: coldSub.length===0?'PASS':'ADVISORY_FAIL', ...});
  results.push({gate:'GR-07', status: pureBW.length===0?'PASS':'RECOMMENDED_FAIL', ...});
  ```

  **Satellite updates (from File 17, REMOVAL 1 -- 22 edits across 8 files):**
  - GS-01A-sat1: Remove 'GR-07' from REQUIRED_GATES array (L1332). Keep 'GR-05' (now means GR-05a).
  - GS-01A-sat2: Add 'GR-07' to RECOMMENDED_GATES array (L1338).
  - GS-01A-sat3: gate-manifest.json -- move GR-07 from REQUIRED to RECOMMENDED, add GR-05b as ADVISORY. Update required.count (18->17 for GR-07 removal, but GR-05a replaces GR-05 = stays 17 here; combined with other changes = 16 final). advisory.count 5->6.
  - GS-01A-sat4: gate-runner-spec.md -- update GR-05 description (split), note GR-07 tier change, "visible-text-only" scope.
  - gate-manifest.json L56 verdictLogic.REBUILD: clarify GR-05a FAIL=REBUILD, GR-05b=informational
  - gate-manifest.json L62-76 executionOrder: replace "GR-05" with "GR-05a" in step 2; add "GR-05b" to step 3/4
  - gate-manifest.json L140-147 totalGateCount: inGateRunner 31->32, total 37->38, grandTotal 41->42
  - MANIFEST.md L98 Layer 6 count: 72->73
  - MANIFEST.md L142 gate runner description: 37->38
  - MANIFEST.md L245 routing: 37->38
  - MANIFEST.md L276 verdict logic: add "GR-05a FAIL=REBUILD. GR-05b is ADVISORY."
  - EXECUTION-TRACKER-TEMPLATE.md L158 Identity gates: 10->10 (GR-05a replaces GR-05)
  - EXECUTION-TRACKER-TEMPLATE.md L165 Total: 33->34 (advisory +1)
  - artifact-orchestrator.md verdict decision tree: clarify GR-05a is the identity gate

- **Format rules:** Binary gate result objects must maintain `{gate, name, status, measured, threshold}` schema (M-19). The opacity threshold (0.3) must be a hard-coded constant, not a judgment call.

- **Anti-loss mechanisms:** M-08 (Dual-Route Pattern) -- CAUTION: opacity pre-filter changes code path BEFORE isCold() heuristic. A bug in the opacity check silently bypasses the entire warm palette verification. M-13 (Binary Rules) -- coordinated 5-7 location update. M-19 (Programmatic Gate Verification) -- maintain function boundary structure.

- **Propagation cascades:** 22 edits across 8 files per File 17. ME-018 (gate perceptibility classification) must update GR-05 "MIXED" -> GR-05a "HUMAN-PERCEPTIBLE" + GR-05b "SUB-PERCEPTUAL" (Orphan Risk OR-1). The `isCold()` heuristic must be shared between GR-05a and GR-05b (Implicit Dependency ID-1).

- **Pre-conditions:** Must be implemented SIMULTANEOUSLY with GR-07 downgrade (ME-024) per File 14 consolidation plan. Cannot be done as standalone split without the merged function approach or you lose the line budget savings (+32 freed lines).

- **Post-verification:** (1) Run gate runner on known HTML with both visible cold colors and sub-perceptual cold tints -- GR-05a should FAIL on visible, GR-05b should ADVISORY_FAIL on sub-perceptual. (2) Verify GR-48 REQUIRED_GATES array matches gate-manifest.json required tier. (3) Verify EXECUTION-TRACKER identity gate count still correct.

- **Budget impact:** Combined with ME-024 (GR-07): 76 lines deleted, 44 lines added = +32 freed. This is the LARGEST single savings in the gate surgery plan.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-010 row in Tier 2 table), audit-14-17.md (GS-01A consolidation plan, File 17 REMOVAL 1), audit-01-04.md (V3E-022, FF-05)

---

#### [ME-011]: Modify GR-06 to Check Rendered Font (Not Declared Stack)

> **PROMOTED TO MUST** — see Section 1A (MUST-29). 401 combined false violations/run directly cause priority inversion (Root Issue 1). Authoritative cross-reference entries in Section 1A.

- **What:** Change GR-06 font trinity gate from checking the declared CSS font-family stack to checking the actually-rendered font via `document.fonts.check()` after `document.fonts.ready`. Fallback-only violations (where the declared font never loads and a fallback renders instead) are downgraded to ADVISORY. Currently 181 violations are generated from fallback fonts that never display, all at REQUIRED severity.

- **Where:**
  - `gate-runner-core.js` GR-06 function body (~L280-308)
  - `gate-runner-spec.md` GR-06 row

- **How:**
  ```
  // Old: check font-family declaration string against trinity list
  const fontFamily = getComputedStyle(el).fontFamily;
  if (!isTrinityFont(fontFamily)) violations.push(...)

  // New: check rendered font, not declared stack
  await document.fonts.ready;
  const fontFamily = getComputedStyle(el).fontFamily;
  const rendered = document.fonts.check(`16px ${fontFamily.split(',')[0].trim()}`);
  if (!rendered) {
    // Font not loaded -- check if fallback is trinity
    const fallback = getActualRenderedFont(el); // Use canvas measurement
    if (!isTrinityFont(fallback)) {
      violations.push({...el, type: 'fallback-only', severity: 'ADVISORY'});
    }
  } else if (!isTrinityFont(fontFamily)) {
    violations.push({...el, type: 'declared-non-trinity', severity: 'REQUIRED'});
  }
  ```

- **Format rules:** Must ensure `document.fonts.ready` resolves before check. Binary result: fonts that actually render as non-trinity = REQUIRED FAIL; fonts declared but never rendered = ADVISORY.

- **Anti-loss mechanisms:** M-08 (Dual-Route Pattern) -- CAUTION: must ensure fonts.ready resolves before check, otherwise race condition. M-19 (Programmatic Gate) -- maintain result schema.

- **Propagation cascades:** gate-runner-spec.md GR-06 row description update. Minimal cascade -- GR-06 stays at REQUIRED tier, only the measurement method changes.

- **Pre-conditions:** Playwright must support `document.fonts.check()` and `document.fonts.ready`. Verify in test environment first. The `document.fonts.ready` check is CRITICAL -- without it, font loading state is indeterminate.

- **Post-verification:** (1) Create test HTML with Inter font loaded + Georgia fallback declared. GR-06 should PASS on Inter (loaded), ADVISORY on Georgia (fallback only). (2) Verify 181 V3 violations reduce to near-zero REQUIRED, some ADVISORY.

- **Budget impact:** ~15 net lines (estimated). Deferred from File 14 surgery plan ("Low priority, SIGNIFICANT rank 11").

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-011 row), audit-01-04.md (V3E-023, FF-06), audit-14-17.md (deferred enrichments table)

---

#### [ME-012]: Fix GR-14 Structural False Positives (Parent Scoping)

> **PROMOTED TO MUST** — see Section 1A (MUST-28). 401 combined false violations/run directly cause priority inversion (Root Issue 1). Authoritative cross-reference entries in Section 1A.

- **What:** Fix GR-14 (structural gap measurement) to restrict gap measurement to zone-level siblings only -- direct children of the same container. Currently measures gaps between nested sub-elements across zones, producing 13 false positives from nested HTML structure. Must preserve FIX-005's structural transition handling.

- **Where:**
  - `gate-runner-core.js` L627-678 (GR-14 function body), specifically L638 (query selector)

- **How:** Per File 14 surgery plan (GS-03B):
  ```
  // Old (L638): single query selecting all sections regardless of nesting
  const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');

  // New (4 lines): scoped to direct children of main container
  const container = document.querySelector('main, [role="main"], body');
  let sections = container.querySelectorAll(':scope > section, :scope > [class*="zone"], :scope > [class*="section"]');
  // Fallback: if scoped query yields < 2 sections, use original broad selector
  if (sections.length < 2) sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
  ```

- **Format rules:** Binary result. Gate measures gaps between direct sibling zones only. Nested elements within zones are not measured against adjacent zones. Fallback to original selector if scoping yields too few results prevents false negatives on pages with unusual structure.

- **Anti-loss mechanisms:** M-19 (Programmatic Gate) -- CAUTION: must preserve FIX-005's structural transition handling and maintain result object schema. The fallback ensures no false negatives.

- **Propagation cascades:** Minimal -- GR-14 stays at same tier, same result format. gate-runner-spec.md GR-14 description should note "zone-level siblings only."

- **Pre-conditions:** None beyond reading current GR-14 code to understand FIX-005 handling.

- **Post-verification:** (1) Run against V3 Gas Town HTML -- should produce 0 false positives (was 13). (2) Run against test HTML with 3 top-level zones and 5 nested sections within zones -- should measure 2 gaps (between zones), not 12 (between all sections).

- **Budget impact:** -2 consumed (1 line deleted, 4 added, net +3 but offset by GS line budget = -2 in File 14 accounting).

- **In current 8-change plan?** NO (but YES in File 14 surgery plan as GS-03B)

- **Sources:** audit-05-08.md (ME-012 row), audit-01-04.md (V3E-020, FF-02), audit-14-17.md (GS-03B)

---

#### [ME-013]: Fix GR-09 Tolerance Band Implementation

- **What:** Verify and fix GR-09 border-width tolerance bands per FIX-003 specification. The spec says: primary 3.5-4.5px -> 4px, secondary 2.5-3.5px -> 3px, tertiary 0.5-1.5px -> 1px. Currently an integer-only check rejects valid subpixel renderings. Values like 0.667px and 2.667px FAIL when they should PASS (they are valid browser renderings of allowed widths).

- **Where:**
  - `gate-runner-core.js` GR-09 function body (exact line TBD -- must audit full code path)

- **How:**
  ```
  // Old: integer-only check
  if (borderWidth !== Math.round(borderWidth)) violations.push(...)

  // New: tolerance band check per FIX-003
  function isAllowedBorderWidth(measured) {
    const bands = [
      { target: 4, min: 3.5, max: 4.5 },
      { target: 3, min: 2.5, max: 3.5 },
      { target: 2, min: 1.5, max: 2.5 },
      { target: 1, min: 0.5, max: 1.5 }
    ];
    return bands.some(b => measured >= b.min && measured <= b.max);
  }
  // Remove or subordinate integer-only check
  ```

- **Format rules:** Binary. Measured border width within any tolerance band = PASS. Outside all bands = FAIL. The integer check should be REMOVED entirely or made subordinate to tolerance bands.

- **Anti-loss mechanisms:** M-19 (Programmatic Gate) -- CAUTION: must audit full GR-09 code path to find where integer-only check lives. M-13 (Binary Rules) -- tolerance bands are the binary rule; the integer check is a different (incorrect) binary rule.

- **Propagation cascades:** gate-runner-spec.md GR-09 description should note tolerance bands. Minimal cascade otherwise.

- **Pre-conditions:** Must READ current GR-09 implementation to locate exact integer-only check. The FIX-003 spec describes the intended behavior but implementation diverged. Requires testing.

- **Post-verification:** (1) Test with border-width values: 0.667px (PASS -- in 0.5-1.5 band), 2.667px (PASS -- in 2.5-3.5 band), 4.0px (PASS -- in 3.5-4.5 band), 6.0px (FAIL -- no band). (2) Compare V3 gate results: violations that were false positives should now PASS.

- **Budget impact:** ~5 net lines. Deferred from File 14 surgery plan ("Requires testing").

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-013 row), audit-01-04.md (V3E-021, FF-01), audit-14-17.md (deferred enrichments table)

---

## TIER 2B: INFRASTRUCTURE PA/PIPELINE FIXES (ME-014 through ME-023)

These are PA protocol, builder recipe, and MANIFEST enrichments classified SIGNIFICANT.

---

#### [ME-014]: Add Minimum Font Size Gate GR-61 (RECOMMENDED)

- **What:** Add new RECOMMENDED gate checking minimum font sizes. Body text >= 14px, caption/label >= 11px, absolute minimum >= 10px. SVG text checked separately. CRITICAL violations (below absolute minimum) FAIL. ~50 lines of Playwright JS.

- **Where:**
  - `gate-runner-core.js` (insert at end of perception gates section)
  - `gate-manifest.json` (add to RECOMMENDED tier)
  - `gate-runner-spec.md` (add row: Perception, RECOMMENDED, Post-build, Playwright)
  - `MANIFEST.md` gate counts
  - GR-48 RECOMMENDED_GATES array

- **How:**
  ```
  // GR-61: Minimum Font Size
  const textEls = document.querySelectorAll('p,span,a,li,h1,h2,h3,h4,h5,h6,td,th,label,figcaption,blockquote,cite,dt,dd,summary,caption');
  const violations = [];
  textEls.forEach(el => {
    if (!isRenderedElement(el)) return;
    const size = parseFloat(getComputedStyle(el).fontSize);
    const tag = el.tagName.toLowerCase();
    const isCaption = ['figcaption','caption','label','small','sub','sup'].includes(tag);
    const minSize = isCaption ? 11 : 14;
    const absMin = 10;
    if (size < absMin) violations.push({el: tag, class: el.className, size, threshold: absMin, severity: 'CRITICAL'});
    else if (size < minSize) violations.push({el: tag, class: el.className, size, threshold: minSize, severity: 'WARNING'});
  });
  // SVG text
  document.querySelectorAll('text, tspan').forEach(el => {
    const size = parseFloat(getComputedStyle(el).fontSize || el.getAttribute('font-size') || '16');
    if (size < 10) violations.push({el: 'svg-text', size, threshold: 10, severity: 'CRITICAL'});
  });
  results.push({gate: 'GR-61', name: 'Minimum Font Size', status: violations.some(v => v.severity==='CRITICAL') ? 'FAIL' : 'PASS', measured: {total: textEls.length, violations: violations.length, details: violations.slice(0,5)}, threshold: {body: '14px', caption: '11px', absolute: '10px'}});
  ```

- **Format rules:** Binary. CRITICAL (below absolute min) = FAIL. WARNING (below category min) = PASS with advisory note. Uses `isRenderedElement()` helper per M-19.

- **Anti-loss mechanisms:** M-19 (Programmatic Gate) -- CAUTION: 6-location update required (gate-runner-core.js, gate-manifest.json, gate-runner-spec.md, GR-48 arrays, MANIFEST counts, EXECUTION-TRACKER). M-13 (Binary Rules) -- add to RECOMMENDED_GATES array.

- **Propagation cascades:** Same 6-location pattern as any new gate addition. If implemented with ME-003 (GR-60) and ME-040 (GR-62), combined = ~180 lines on zero-budget artifact (ADV-05b warning). Gate-runner subtraction MUST happen first.

- **Pre-conditions:** Gate-runner-core.js must have capacity (need subtraction from GS-01A/01B/01C/01D first -- those free 60 lines, GR-61 consumes 50). CANNOT be implemented before the consolidation surgery.

- **Post-verification:** (1) Run against V3 HTML -- chart labels at 7.5px should FAIL (CRITICAL). (2) Body text at 16px should PASS. (3) SVG text elements checked separately.

- **Budget impact:** -50 consumed. Deferred from File 14 surgery plan ("Would push +50 over budget. RECOMMENDED for next round.").

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-014 row), audit-01-04.md (V3E-017), audit-14-17.md (deferred enrichments), 18-gap-check.md (gate-usability-audit Section 4B)

---

#### [ME-015]: Add Data Corruption Escalation Protocol for PA Auditors

- **What:** 4 sub-changes: (1) Data quality awareness note in deployment preamble, (2) BLOCKED BY DEFECT scoring option -- if >50% content invisible, auditors answer "BLOCKED BY DEFECT -- [defect name]" instead of YES/NO/CONDITIONAL, (3) First-Auditor Halt protocol -- Auditor A checks for catastrophic rendering defects during cold-look; if >50% invisible, orchestrator re-captures before B-I proceed, (4) Full-page as ground truth -- explicit guidance that full-page screenshot is GROUND TRUTH; cross-reference scroll-throughs against it.

- **Where:**
  - `pa-questions.md` Section 1 preamble (+4 lines for BLOCKED BY DEFECT)
  - `pa-deployment.md` Section 2.4 (+6 lines for First-Auditor Halt + Ground Truth)

- **How:** Per File 16 surgery plan (PE-04):

  **pa-questions.md Section 1 preamble (add 4 lines):**
  ```
  BLOCKED BY DEFECT PROTOCOL: If >50% of page content is invisible due to rendering
  defects, screenshot corruption, or animation-gated visibility, answer "BLOCKED BY
  DEFECT -- [defect description]" instead of YES/NO/CONDITIONAL. Do not attempt to
  score questions about content you cannot see. The Weaver tallies BLOCKED questions separately.
  ```

  **pa-deployment.md Section 2.4 (append 6 lines):**
  ```
  FIRST-AUDITOR HALT: Auditor A (impression specialist) checks for catastrophic rendering
  defects during their cold-look pass. If A reports >50% content invisible or >3 consecutive
  blank viewports, orchestrator HALTS deployment of B through I, re-captures screenshots with
  expanded CSS overrides, and validates before resuming.

  GROUND TRUTH: The full-page screenshot (non-scrolling capture) is the GROUND TRUTH for
  page content. If scroll-through screenshots show blanks that the full-page does not, the
  scroll-through is UNRELIABLE. Auditors should cross-reference the full-page screenshot
  when they encounter suspicious blanks.
  ```

- **Format rules:** BLOCKED BY DEFECT is a binary scoring option (not a judgment). First-Auditor Halt is a binary protocol (>50% invisible = halt, otherwise proceed). Anti-skimming: these are instructions to auditors, must be clear and imperative.

- **Anti-loss mechanisms:** M-04 (Context Isolation) -- SAFE: ensure no calibration data leaks to auditors. The BLOCKED BY DEFECT protocol and Ground Truth guidance are auditor-appropriate (they describe what to DO, not what scores to AIM FOR). M-20 (Fresh-Eyes) -- SAFE: no build intent or threshold targets exposed.

- **Propagation cascades:**
  - pa-weaver.md must be updated to recognize BLOCKED BY DEFECT tallies (section on how Weaver handles blocked questions)
  - MANIFEST.md Phase 3B description should reference BLOCKED BY DEFECT protocol
  - MANIFEST.md Phase 3B->3C handoff should note BLOCKED question tallying
  - EXECUTION-TRACKER-TEMPLATE.md: add "First-Auditor Halt triggered: [ ] YES / [ ] NO"

- **Pre-conditions:** ME-006 (screenshot validation gate) should be implemented first -- the First-Auditor Halt is a BACKUP for when ME-006's validation misses something. If ME-006 works perfectly, the Halt rarely triggers.

- **Post-verification:** (1) Verify BLOCKED BY DEFECT text appears in auditor-visible Section 1, NOT in Weaver-only Section 4. (2) Verify no threshold targets or calibration data in the added text. (3) Verify First-Auditor Halt references Auditor A specifically (PE-012 nuance).

- **Budget impact:** +10 lines across 2 files (+4 in pa-questions.md, +6 in pa-deployment.md). Within File 16 budget after compressions (-5 from pa-questions.md Section 4 compression offsets the +4, -2 from pa-deployment.md 1.2.1 compression partially offsets the +6). Net: +5 after compressions.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-015 row), audit-01-04.md (V3E-004), audit-14-17.md (PE-04 in File 16), HE-006, PE-003, PE-012, PE-013

---

#### [ME-016]: Add ARIA Accessibility Requirements to Builder Recipe

- **What:** Add ARIA accessibility requirements to builder recipe: all data tables must have `aria-label` or `aria-labelledby`, all diagrams/images must have meaningful `alt` text or `aria-label`, all interactive regions must have `role` + `aria-label`. Target >= 15 ARIA attributes total (V3 regressed from 19 to 7, a 63% regression).

- **Where:**
  - `artifact-builder-recipe.md` (new section or append to existing accessibility section)

- **How:**
  ```
  ACCESSIBILITY: Your HTML includes at minimum 15 ARIA attributes:
  - Every <table> has aria-label describing its data purpose
  - Every diagram, chart, or infographic has aria-label or meaningful alt text
  - Every interactive region (collapsible, tabbed, modal) has role + aria-label
  - Skip-link as first focusable element: <a href="#main" class="skip-link">Skip to content</a>
  Count your ARIA attributes before submission. If fewer than 15, add more.
  ```

- **Format rules:** RECIPE framing (M-11, M-12): uses "Your HTML includes" (world-description) not "You MUST add" (prohibition). The count target (>=15) is a concrete number, not a judgment call. Uses Build/Create verbs.

- **Anti-loss mechanisms:** M-04 (Context Isolation) -- SAFE: no gate thresholds exposed. M-06 (Suppressor Management) -- SAFE: no suppressor patterns. M-12 (World-Description) -- recipe framing used.

- **Propagation cascades:**
  - If ARIA attributes become a gate check (future GR-63/64), gate-runner and manifest need updates
  - MANIFEST.md Appendix E builder template should reference ARIA requirements

- **Pre-conditions:** None -- pure addition to builder recipe. Must use recipe verbs per M-06/M-11.

- **Post-verification:** (1) Verify recipe framing (no "must"/"verify that"/"do NOT" patterns that would trigger BV-04). (2) Verify no gate thresholds in pass/fail format in the recipe text (M-04).

- **Budget impact:** +8-10 lines in artifact-builder-recipe.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-016 row), audit-01-04.md (V3E-039, N-17), 18-gap-check.md (step4-pa-delta.md "Data tables: well-structured but missing ARIA labels")

---

#### [ME-017]: Add Phase 4: Fix Application Protocol

- **What:** Add Phase 4 to pipeline: after Weaver verdict, orchestrator applies MECHANICAL fixes only (CSS value changes, font-stack cleanup, html color). Re-runs failed gates to verify. Updates verdict. Budget: <=15 min, <=50 CSS lines changed. This addresses the fact that SHIP WITH FIXES is a verdict the pipeline cannot currently execute -- fixes are identified but never applied.

- **Where:**
  - `MANIFEST.md` L521-523 (insert after Phase 3C verdict, before "Per-Agent Output Logging")
  - `MANIFEST.md` L605 (update circuit breaker: "1 REBUILD + 1 REFINE" -> "1 REBUILD + 1 REFINE + 1 Phase 4 mechanical fix")
  - `MANIFEST.md` Section 5 dependency graph (add Phase 4 node)
  - `EXECUTION-TRACKER-TEMPLATE.md` (add Phase 4 tracking fields)

- **How:** Per File 15 surgery plan (MS-03):

  **Insert after L521 (12 lines):**
  ```
  ### Phase 4: Mechanical Fix Application (CONDITIONAL)

  TRIGGER: Verdict is SHIP WITH FIXES AND all identified fixes are MECHANICAL
  (CSS value changes only, no HTML structural changes, no design decisions).

  STEPS:
  1. Apply each MECHANICAL fix from Weaver's Top-N list (CSS changes only)
  2. Re-run ONLY the gates that originally FAILED on the changed properties
  3. If all re-run gates now PASS: upgrade verdict to SHIP
  4. If any re-run gate still FAILS: retain SHIP WITH FIXES, document remaining

  BUDGET: Maximum 15 minutes, maximum 50 CSS lines changed.
  Do NOT apply fixes requiring HTML restructuring or design judgment.
  ```

  **Replace L605 circuit breaker (0 net lines):**
  ```
  // Old: "Maximum iterations: 1 REBUILD + 1 REFINE"
  // New: "Maximum iterations: 1 REBUILD + 1 REFINE + 1 Phase 4 mechanical fix"
  ```

- **Format rules:** Phase 4 trigger is binary (all fixes MECHANICAL = yes/no). Budget is concrete (15 min, 50 lines). Anti-skimming: numbered steps, bold trigger condition.

- **Anti-loss mechanisms:** M-23 (REBUILD Not FIX) -- CAUTION: adds a THIRD iteration type to a pipeline that already has REBUILD and REFINE. Must update circuit breaker at L605. The adversarial review (ADV-04, ADV-06d) rates this as RISK and recommends "run as experiment first." ME-005 (MECHANICAL verdict) is a dependency -- Phase 4 only triggers for MECHANICAL fixes, which ME-005 defines.

- **Propagation cascades:**
  - EXECUTION-TRACKER-TEMPLATE.md: add Phase 4 tracking section
  - MANIFEST.md Section 5 dependency graph: add Phase 4 node after Phase 3C
  - artifact-orchestrator.md: update to reference Phase 4 as post-verdict option
  - Coordinate with ME-005: Phase 4 uses ME-005's MECHANICAL classification

- **Pre-conditions:** ME-005 (MECHANICAL verdict exception) must be implemented first -- Phase 4's trigger depends on the MECHANICAL classification that ME-005 introduces. Without ME-005, there is no definition of "MECHANICAL fix."

- **Post-verification:** (1) Verify circuit breaker at L605 updated. (2) Verify Phase 4 in EXECUTION-TRACKER. (3) Verify Phase 4 appears in MANIFEST dependency graph. (4) Verify Phase 4 does NOT apply HTML changes (only CSS).

- **Budget impact:** +12 lines in MANIFEST.md + 0 (L605 replacement). Within File 15's +20 budget.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-017 row), audit-01-04.md (V3E-031, N-12), audit-14-17.md (MS-03 in File 15), HE-010, ADV-06d (recommends CONSIDER rank)

---

#### [ME-018]: Add Gate Perceptibility Classification to Manifest

- **What:** Add HUMAN-PERCEPTIBLE / SUB-PERCEPTUAL / MIXED / N/A classification column to gate manifest for all gates. Add `reliability` field to gate result JSON.

- **Where:**
  - `gate-manifest.json` (add perceptibility field to each gate entry)
  - `gate-runner-spec.md` (add column to summary table)

- **How:**
  ```json
  // gate-manifest.json: add to each gate object
  "GR-05a": { "tier": "REQUIRED", "perceptibility": "HUMAN-PERCEPTIBLE", ... },
  "GR-05b": { "tier": "ADVISORY", "perceptibility": "SUB-PERCEPTUAL", ... },
  "GR-12":  { "tier": "RECOMMENDED", "perceptibility": "SUB-PERCEPTUAL", ... },
  "GR-14":  { "tier": "REQUIRED", "perceptibility": "HUMAN-PERCEPTIBLE", ... },
  "GR-60":  { "tier": "REQUIRED", "perceptibility": "HUMAN-PERCEPTIBLE", ... },
  // ... for all gates
  ```

  ```
  // gate result JSON: add reliability field
  results.push({
    gate: 'GR-XX',
    name: '...',
    status: 'PASS|FAIL',
    measured: {...},
    threshold: {...},
    reliability: 'HIGH|MEDIUM|LOW'  // NEW: based on gate's measurement confidence
  });
  ```

- **Format rules:** Metadata only -- does not change gate behavior. Classification values are from fixed enum, not judgment.

- **Anti-loss mechanisms:** SAFE (metadata only, no behavioral change). Must coordinate with ME-010 (GR-05 split -- update from "MIXED" to separate classifications per OR-1).

- **Propagation cascades:** gate-runner-spec.md summary table needs new column. MANIFEST.md may reference perceptibility in routing descriptions.

- **Pre-conditions:** Gate tier changes (ME-010, ME-024-027) should be finalized first so classifications are applied to the correct tier assignments.

- **Post-verification:** (1) Every gate in manifest has a perceptibility value. (2) No gate is unclassified. (3) Classification aligns with actual measurement (sub-perceptual gates like GR-12 marked as SUB-PERCEPTUAL).

- **Budget impact:** ~0 structural lines (metadata additions to existing JSON objects). In gate-runner-spec.md, ~1-2 lines for column header.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-018 row), audit-01-04.md (V3E-042), 11-buddy-fresh-eyes.md ("suspicious enrichment" -- "metadata for metadata's sake" unless paired with severity changes)

---

#### [ME-019]: PA-05 Score as Range, Not Single Number

- **What:** Weaver presents PA-05 as a range (lower=conservative, upper=corrected). PARTIAL scores count 0.5 not 1.0. Round DOWN. Include hypothetical score for BLOCKING defects. This addresses the fact that "3/4" is presented as precise when it is actually 2.5-3.0.

- **Where:**
  - `pa-weaver.md` Section 1 (+8 lines for range + hypothetical scoring)

- **How:** Per File 16 surgery plan (PE-05):

  **pa-weaver.md Section 1 (add 8 lines):**
  ```
  PA-05 SCORING PROTOCOL:
  Present PA-05 as a RANGE, not a single number.
  - Lower bound: conservative score (count PARTIAL as 0, round DOWN)
  - Upper bound: corrected score (count PARTIAL as 1, void-corrected if applicable)
  - If BLOCKING defect exists: include hypothetical score "(if [defect] fixed: X/4)"
  - Tier 5 questions: PARTIAL counts as 0.5 (not 0 or 1)

  Example: "PA-05: 2.5-3.0/4 (if chart legibility fixed: 3.0-3.5/4)"

  The range communicates UNCERTAINTY. A single number implies precision that does not exist.
  ```

  **Compression offset:** pa-weaver.md Section 4.2-4.4 emotional arc source citations compressed from ~65 lines to ~57 lines (-8 lines), making PE-05 net 0.

- **Format rules:** Binary scoring within the range (each PA-05 sub-criterion is PASS/PARTIAL/FAIL). The range itself is a presentation format, not a judgment call. Anti-skimming: example provided.

- **Anti-loss mechanisms:** M-04 (Context Isolation) -- SAFE: range scoring is Weaver-only content, NOT exposed to auditors. M-20 (Fresh-Eyes) -- SAFE: no tier targets or calibration data exposed.

- **Propagation cascades:**
  - ADV-05d warning: PA-05 used as discrete number throughout project. If it becomes a range, tier classifications that use PA-05 thresholds (e.g., "PA-05 >= 3.5 AND Tier 5 >= 6/8" for Flagship) need to specify which end of the range to use.
  - pa-questions.md Section 1 (PA-05 definition) should note that Weaver presents as range
  - MANIFEST.md L159 or wherever PA-05 thresholds appear

- **Pre-conditions:** Auditor A must generate the raw PA-05 sub-scores. PE-010 (from File 08) suggests the hypothetical should be generated by AUDITOR A, not just presented by Weaver. Both auditor-side and weaver-side instructions needed.

- **Post-verification:** (1) Verify range scoring in Weaver-only content (NOT in auditor prompts). (2) Verify PARTIAL = 0.5 for Tier 5 questions. (3) Verify hypothetical format used for BLOCKING defects.

- **Budget impact:** +8 lines in pa-weaver.md, offset by -8 compression = 0 net.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-019 row), audit-01-04.md (V3E-015 partial), HE-001 (priming mechanism), HE-011 (Tier 5 inflation), PE-010 (auditor-side hypothetical)

---

#### [ME-020]: Add Orchestrator Decision Quality Self-Assessment

- **What:** Add Section B to orchestrator self-assessment: evidence for/against each judgment call, independent verification check, mode retrospective ("Was COMPOSED mode correct?"), components.css line count pre-flight validation.

- **Where:**
  - `artifact-orchestrator.md` (append to self-assessment section)

- **How:**
  ```
  DECISION QUALITY SELF-ASSESSMENT (Section B):
  Before submitting your verdict, answer these 4 questions:
  1. EVIDENCE: For each judgment call (mode selection, verdict, protocol overrides),
     what is the EVIDENCE for your decision? What evidence AGAINST did you consider?
  2. INDEPENDENT VERIFICATION: Did you verify your verdict against gate results
     independently, or did you adopt the Weaver's framing?
  3. MODE RETROSPECTIVE: Was the mode you selected in Phase 0 confirmed by the
     Weaver's tier assessment? If not, document the discrepancy.
  4. PRE-FLIGHT: Is components.css within +/- 20% of MANIFEST's stated line count?
     If not, investigate before proceeding.
  ```

- **Format rules:** Recipe format -- questions, not prohibitions. World-description framing (M-12). No suppressor patterns (M-06).

- **Anti-loss mechanisms:** SAFE. No fragile mechanisms touched. The mode retrospective addresses HE-016 ("Orchestrator does not question whether COMPOSED mode was correct").

- **Propagation cascades:** MANIFEST.md Appendix E orchestrator template should reference Section B.

- **Pre-conditions:** None.

- **Post-verification:** (1) Verify recipe framing. (2) Verify no gate thresholds in pass/fail format.

- **Budget impact:** +10 lines in artifact-orchestrator.md. Within +50 budget for this file.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-020 row), HE-007 (4 specific judgment errors orchestrator missed), HE-016 (mode retrospective)

---

#### [ME-021]: Add Navigation Usability PA Question PA-80

- **What:** Add PA-80: "Starting from the middle of the page, can you reach any other section using visible navigation? If the page has TOC/nav, do links appear functional? Flag if page > 10 viewports long has no sticky nav, back-to-top, or section links."

- **Where:**
  - `pa-questions.md` Section 3.8 or new section (+3 lines)
  - `pa-deployment.md` L47/L53 Auditor E assignment (E goes 6->7)
  - `MANIFEST.md` L153 Auditor E question list + count
  - `pa-manifest.md` L30 Auditor E checklist + count
  - `EXECUTION-TRACKER-TEMPLATE.md` Auditor E tracking
  - All totals that reference question count

- **How:** Per File 16 surgery plan (PA-N2):

  **pa-questions.md Section 3.8 (add 3 lines):**
  ```
  | PA-80 | Starting from the middle of the page, can you reach any other section using visible navigation? If TOC/nav exists, do links appear functional? Flag if page >10 viewport-heights long has no sticky nav, back-to-top, or section links. | E |
  ```

  **5-location update pattern:**
  1. pa-questions.md: add PA-80 row to Section 3.8
  2. pa-deployment.md: Auditor E assignment table -- add PA-80, count 6->7
  3. MANIFEST.md L153: Auditor E list -- add PA-80, count 6->7
  4. pa-manifest.md L30: Auditor E checklist -- add PA-80, count 6->7
  5. EXECUTION-TRACKER-TEMPLATE.md: Auditor E -- add PA-80, count 6->7

  **Total references to update:** Question total stays at 69 IF this is paired with a retirement (ME-037). If retirements already applied: 66 + PA-80 + PA-81 + PA-54 = 69.

- **Format rules:** Question text is experiential ("can you reach..."), not analytical. Binary outcome (yes/no navigation exists). Anti-skimming: specific threshold (>10 viewports).

- **Anti-loss mechanisms:** M-22 (9-Auditor Deployment) -- CAUTION: 5-location update required. M-04 (Context Isolation) -- verify question text contains no calibration data. M-20 (Fresh-Eyes) -- verify question is auditor-safe.

- **Propagation cascades:** All 5 locations listed above. Plus totals in pa-questions.md L306, pa-deployment.md L54, pa-weaver.md L18, pa-guardrails.md L15, pa-manifest.md L36, MANIFEST.md L159, EXECUTION-TRACKER-TEMPLATE.md total.

- **Pre-conditions:** ME-037 (retire 3 questions) should be applied FIRST to create room. If retirements bring total to 66, adding PA-80 + PA-81 + PA-54 = 69 (net zero).

- **Post-verification:** (1) Auditor E count = 7 in ALL 5 locations. (2) Total question count = 69 across all locations. (3) PA-80 text appears in pa-questions.md. (4) No calibration data in question text.

- **Budget impact:** +3 lines in pa-questions.md. 0 net structural lines in other files (value replacements only).

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-021 row), audit-01-04.md (V3E-009), 11-buddy-fresh-eyes.md ("Key missing thing: make it a NAVIGABLE DOCUMENT"), 18-gap-check.md (step4-pa-epsilon.md, buddy-fresh-eyes.md)

---

#### [ME-022]: Add Information Extraction PA Question PA-81

- **What:** Add PA-81: "For every chart, diagram, or infographic: can you answer 'What is the ONE thing this element wants me to know?' in under 5 seconds? If not, the element fails its communicative purpose. Note whether the element is a raster image or HTML/SVG."

- **Where:**
  - `pa-questions.md` Section 3.2 (+3 lines)
  - `pa-deployment.md` Auditor B assignment (B goes 7->8 after PA-06 retirement, net neutral)
  - `MANIFEST.md` L150 Auditor B question list + count
  - `pa-manifest.md` Auditor B checklist + count
  - `EXECUTION-TRACKER-TEMPLATE.md` Auditor B tracking
  - All totals

- **How:** Per File 16 surgery plan (PA-N3):

  **pa-questions.md Section 3.2 (add 3 lines):**
  ```
  | PA-81 | For every chart, diagram, or infographic: can you answer "What is the ONE thing this element wants me to know?" in under 5 seconds? If not, the element fails its communicative purpose. Note whether the element is a raster image or HTML/SVG (raster = content production issue; HTML/CSS = styling issue). | B |
  ```

  **5-location update:** Same pattern as ME-021 but for Auditor B. After PA-06 retirement (ME-037), B goes 8->7. Adding PA-81 brings B back to 8. Net neutral.

- **Format rules:** Experiential question ("can you answer..."). Includes PE-006 image-vs-CSS distinction. 5-second threshold is concrete and binary.

- **Anti-loss mechanisms:** M-22 (9-Auditor) -- CAUTION: 5-location update. M-04 -- verify no calibration data. M-20 -- verify auditor-safe.

- **Propagation cascades:** Same 5-location + totals pattern as ME-021.

- **Pre-conditions:** ME-037 (retire PA-06 from B) should be applied first to keep B at 8 questions.

- **Post-verification:** Same pattern as ME-021 but for Auditor B count = 8.

- **Budget impact:** +3 lines in pa-questions.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-022 row), audit-01-04.md (V3E-010), PE-006 (image-vs-CSS distinction), 18-gap-check.md (experiential-pa-analysis.md "communicative failure")

- **NOTE (PA Completeness Audit GAP-4):** The PA-81 question text above is the BASE version. The CANONICAL version is the EXTENDED version incorporating GAP-08 sub-checks (TIER 2E [GAP-08]), which adds: (b) legend/key check, (c) item count vs text claims, (d) axis/data label readability. The GAP-08 entry should reference this ME-022 as the canonical PA-81 location rather than maintaining a separate version.

---

#### [ME-023]: Add Content Promise vs Delivery PA Question PA-54

- **What:** Add PA-54: "Does the page deliver on its structural promises? Count navigational elements (TOC entries, section numbers, tabs) that promise content. How many are fulfilled by visible content? If < 80%, flag as STRUCTURAL PROMISE VIOLATION. Check collapsible summary adequacy."

- **Where:**
  - `pa-questions.md` Section 3.4 (Metaphor) (+3 lines)
  - `pa-deployment.md` Auditor G assignment (G goes 7->8)
  - `MANIFEST.md` L155 Auditor G question list + count
  - `pa-manifest.md` Auditor G checklist + count
  - `EXECUTION-TRACKER-TEMPLATE.md` Auditor G tracking
  - All totals

- **How:** Per File 16 surgery plan (PA-N1):

  **pa-questions.md Section 3.4 (add 3 lines):**
  ```
  | PA-54 | Does the page deliver on its structural promises? Count navigational elements (TOC entries, section numbers, tabs) that promise content. How many are fulfilled by visible content? If < 80%, flag as STRUCTURAL PROMISE VIOLATION. Check whether collapsible summaries adequately preview their content. | G |
  ```

  **5-location update:** Same pattern as ME-021 but for Auditor G. G goes 7->8.

- **Format rules:** Binary threshold (<80% = violation). Experiential ("Does the page deliver..."). The "Gas Town Settlement Map promises 12 sections, scroll delivers 3" example (PE-005) demonstrates the gap this catches.

- **Anti-loss mechanisms:** M-22 -- CAUTION: 5-location update. M-04 -- verify no calibration data.

- **Propagation cascades:** Same 5+totals pattern.

- **Pre-conditions:** ME-037 retirements should be applied first. No direct dependency but maintains question count balance.

- **Post-verification:** Same pattern as ME-021 but for Auditor G count = 8.

- **Budget impact:** +3 lines in pa-questions.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-023 row), audit-01-04.md (V3E-012), PE-005 ("Settlement Map promises 12 sections"), 18-gap-check.md (inattentional-blindness-audit.md "Content-promise mismatch")

---

## TIER 2C: SHOULD ITEMS FROM MANIFEST SURGERY (ME-042, ME-045, ME-046)

These MANIFEST items are classified SHOULD in File 15 surgery plan but COULD in the master enrichment list. Including here because the surgery plans provide exact implementation details and they have near-zero risk.

---

#### [ME-042]: Update MANIFEST Line Counts

- **What:** Update MANIFEST.md line counts to actual values. components.css count from 290 to actual (~1,195). Add pre-flight validation (+/-20%). Update runtime estimate from 80-105 min to 80-180 min. Update complexity table actuals (L346-356).

- **Where:**
  - `MANIFEST.md` L15 (components.css line count)
  - `MANIFEST.md` L67 (runtime estimate)
  - `MANIFEST.md` L346-356 (complexity table)
  - `MANIFEST.md` L921 (components.css path entry)

- **How:** Per File 15 surgery plan (MS-04):
  ```
  // L15: verify and update components.css line count
  // L67: "80-105 minutes" -> "80-180 minutes"
  // L346-356: update each row with actual line counts from current files
  // L921: verify components.css path is correct
  // L14: add pre-flight parenthetical: "(verify within +/-20% before build)"
  ```
  All cell/value changes, zero new lines.

- **Format rules:** In-place value replacements only. No structural changes.

- **Anti-loss mechanisms:** M-25 (Honest Complexity Accounting) -- SAFE: this IS the mechanism that M-25 protects.

- **Propagation cascades:** artifact-orchestrator.md L147-157 has a copy of the complexity table that must stay synchronized.

- **Pre-conditions:** Count actual file sizes at implementation time (they may have changed since analysis).

- **Post-verification:** (1) Line counts match actual file sizes within +/-20%. (2) Runtime estimate reflects real-world experience (3-6 hours per ME-045).

- **Budget impact:** 0 net lines (value replacements).

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-042 row), HE-017 (4x discrepancy flagged then dropped), audit-14-17.md (MS-04)

---

#### [ME-045]: Add Context Budget Awareness

- **What:** Add note that pipeline typically requires 2-3 sessions due to context exhaustion. Plan session boundaries between Phase 2 (build) and Phase 3A (gates). Update time estimates.

- **Where:**
  - `MANIFEST.md` L67-68 (after architecture section)

- **How:** Per File 15 surgery plan (MS-05):

  **Insert after L67 (2 lines):**
  ```
  Context sessions: Typically 2-3 sessions due to context exhaustion. Plan session
  boundaries between Phase 2 (build) and Phase 3A (gates). Save all state to files
  before each boundary.
  ```

- **Format rules:** Informational note. No judgment required.

- **Anti-loss mechanisms:** SAFE.

- **Propagation cascades:** Coordinates with ME-042 runtime update.

- **Pre-conditions:** ME-042 (line count updates) should be applied simultaneously.

- **Post-verification:** (1) Note appears in architecture section. (2) Runtime estimates updated per ME-042.

- **Budget impact:** +2 lines in MANIFEST.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-045 row), HE-014 (context exhaustion is "the norm"), audit-14-17.md (MS-05)

---

#### [ME-046]: Add Corrected Screenshot Recovery Protocol

- **What:** If re-capture needed, corrected screenshots MUST cover entire page at regular intervals (every 900px scroll height), not selected regions. Correction must be algorithmic, not curated.

- **Where:**
  - `MANIFEST.md` L476 (after "Output: Complete screenshot set...")

- **How:** Per File 15 surgery plan (MS-06):

  **Insert after L476 (3 lines):**
  ```
  CORRECTED SCREENSHOT PROTOCOL: If re-capture is needed, corrected screenshots MUST
  cover the ENTIRE page at regular intervals (every 900px of scroll height), not
  orchestrator-selected regions. Correction must be ALGORITHMIC, not CURATED, to prevent
  bias toward best-looking regions.
  ```

- **Format rules:** Binary protocol. Algorithmic (every 900px) vs curated (selected regions) is a binary distinction.

- **Anti-loss mechanisms:** SAFE. Addresses HE-018 bias mechanism: "orchestrator selected which regions to capture, meaning the Weaver saw orchestrator-curated content."

- **Propagation cascades:** artifact-orchestrator.md screenshot protocol section should reference this.

- **Pre-conditions:** ME-006 (screenshot validation gate) should be in place first.

- **Post-verification:** (1) Protocol specifies algorithmic intervals. (2) No "selected regions" language remains.

- **Budget impact:** +3 lines in MANIFEST.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-046 row), HE-018 (bias mechanism), audit-14-17.md (MS-06)

---

## TIER 2D: SHOULD ITEMS FROM PA SURGERY (ME-009, ME-032, ME-033, ME-034, ME-035, ME-057)

These PA enrichments are classified SHOULD (or SIGNIFICANT severity with SHOULD-level priority) based on the surgery plan's implementation ordering.

---

#### [ME-009]: Add Experiential Detection Threshold Table + Aggregation Rules

- **What:** Add threshold table for experiential pass findings: >= 3/9 auditors flag same text = CONFIRMED illegibility (Fix #1). 1/9 = POSSIBLE (Weaver investigates). 0/9 = all text readable. Add pre-aggregated summary to Weaver inputs.

- **Where:**
  - `pa-questions.md` Appendix B (+7 lines for threshold table)
  - `pa-weaver.md` (reference to aggregation in Weaver input format)

- **How:** Per File 16 surgery plan (PE-03):

  **pa-questions.md Appendix B (add 7 lines after compression freeing 3 lines = net +4):**
  ```
  EXPERIENTIAL PASS AGGREGATION (Weaver use only):

  | Auditors Flagging Same Element | Classification | Weaver Action |
  |-------------------------------|----------------|---------------|
  | >= 3 of 9 | CONFIRMED illegibility | Weaver Fix #1, regardless of gate status |
  | 1-2 of 9 | POSSIBLE illegibility | Weaver investigates, may include in fixes |
  | 0 of 9 | No illegibility detected | No action required |
  ```

- **Format rules:** Table format for quick reference. Binary thresholds (3/9 is the bright line). WEAVER USE ONLY -- must NOT appear in auditor-visible sections per M-04/M-20.

- **Anti-loss mechanisms:** M-04 (Context Isolation) -- SAFE: table is in Appendix B which is Weaver-only. Must verify Section 4 header "WEAVER USE ONLY" still present. M-20 (Fresh-Eyes) -- SAFE: no calibration data exposed to auditors.

- **Propagation cascades:** pa-weaver.md should reference this table in its experiential findings section.

- **Pre-conditions:** ME-001 (experiential pass) must be implemented first -- without it, there are no experiential findings to aggregate.

- **Post-verification:** (1) Table in Appendix B (Weaver-only section). (2) NOT in Sections 1-3 (auditor-visible). (3) No calibration data leaks.

- **Budget impact:** +4 lines (after -3 Appendix B compression).

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-009 row), audit-01-04.md (V3E-005, V3E-015), audit-14-17.md (PE-03)

---

#### [ME-032]: Mark Pipeline-Introspection PA Questions

- **What:** Add annotation after PA-55, PA-56, PA-69: "Pipeline introspection -- tests compositional model, not reader experience. Weaver weights lower than experiential findings."

- **Where:**
  - `pa-questions.md` Section 3.7 (after PA-55, PA-56)
  - `pa-questions.md` Section 3.8 (after PA-69)

- **How:** Per File 16 surgery plan (PE-10):

  **Add after PA-55 and PA-56 in Section 3.7 (1 line each, 2 total):**
  ```
  > *Pipeline introspection -- tests compositional model, not reader experience. Weaver weights lower than experiential findings.*
  ```

  **Add after PA-69 in Section 3.8 (1 line):**
  ```
  > *Pipeline introspection -- tests compositional model, not reader experience. Weaver weights lower than experiential findings.*
  ```

- **Format rules:** Metadata annotation only. Does not change question text. Blockquote format distinguishes from question content.

- **Anti-loss mechanisms:** SAFE (metadata only). Fresh-eyes buddy (11) called this "over-engineering" -- "If the questions are bad, remove them. If they are good, keep them." Consider whether this adds value or just complexity.

- **Propagation cascades:** pa-weaver.md should reference the distinction when synthesizing findings.

- **Pre-conditions:** None.

- **Post-verification:** (1) Annotations appear only on PA-55, PA-56, PA-69. (2) Not on any other questions.

- **Budget impact:** +3 lines in pa-questions.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-032 row), audit-01-04.md (V3E-013, N-09)

---

#### [ME-033]: Add Void Question Deduplication Rule

- **What:** If PA-50 detects >= 3 consecutive blank viewports: PA-33 auto-answered as "DROPPED SIGNAL" and PA-51 auto-answered as "VOID-DOMINATED." Auditor C answers PA-50 in detail and references for collapsed questions. Saves ~30% of Auditor C time.

- **Where:**
  - `pa-questions.md` Section 3.6 (Void Prevention) (+4 lines)

- **How:** Per File 16 surgery plan (PE-07):

  **pa-questions.md Section 3.6 (add 4 lines):**
  ```
  VOID COLLAPSE RULE: If PA-50 detects >= 3 consecutive blank viewports at any
  viewport width, the following questions are auto-answered from PA-50's finding:
  - PA-33: "DROPPED SIGNAL" (the silence is not intentional)
  - PA-51: "VOID-DOMINATED" (page-level density is void-dominated)
  Auditor C answers PA-50 in detail and references these auto-answers.
  ```

- **Format rules:** Binary trigger (>= 3 blank viewports). Auto-answers are fixed strings, not judgment.

- **Anti-loss mechanisms:** SAFE. Orphan Risk OR-4 from File 17: if PA-09 is retired (ME-037), the original enrichment referenced PA-09 auto-answer. Since PA-09 IS retired, the Void Collapse Rule correctly references only PA-33 and PA-51 (not PA-09). Verify PA-09 is NOT referenced in this rule.

- **Propagation cascades:** None beyond the 4 lines in pa-questions.md.

- **Pre-conditions:** ME-037 (retire PA-09) must be applied BEFORE this rule to avoid orphan reference.

- **Post-verification:** (1) Rule references PA-50, PA-33, PA-51 only. (2) PA-09 NOT referenced (it is retired).

- **Budget impact:** +4 lines in pa-questions.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-033 row), PE-004, audit-14-17.md (PE-07, OR-4)

---

#### [ME-034]: Add Defect-Bypass for H's Cross-Viewport Protocol

- **What:** If a defect is identical across all viewports, Auditor H states it ONCE and redirects analysis to viewport-specific differences in non-defective content. Prevents H from saying "PUNISHED" 3 times for the same viewport-independent defect.

- **Where:**
  - `pa-deployment.md` Section 1.2.1 (append 3 lines)

- **How:** Per File 16 surgery plan (PE-08):

  **pa-deployment.md Section 1.2.1 (append after compression, +1 net):**
  ```
  DEFECT UNIFORMITY: If a defect is identical across all viewports (same cause, same
  appearance), state the defect ONCE and redirect remaining analysis to viewport-specific
  differences in the NON-DEFECTIVE content.
  ```

- **Format rules:** Binary trigger (defect identical across viewports = yes/no). Imperative instruction.

- **Anti-loss mechanisms:** SAFE.

- **Propagation cascades:** None.

- **Pre-conditions:** None.

- **Post-verification:** (1) Instruction in Section 1.2.1. (2) Does not contradict existing cross-viewport protocol.

- **Budget impact:** +1 net line (after -2 compression of 1.2.1 method paragraph).

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-034 row), PE-007, audit-14-17.md (PE-08)

---

#### [ME-035]: Add Footer/Header to PA-02 Scope

- **What:** Extend PA-02 contrast assessment scope to include header, footer, chart labels, and diagram text. Currently header/footer text may be excluded from contrast assessment.

- **Where:**
  - `pa-questions.md` Section 3.2 PA-02 row (in-cell text extension)

- **How:** Per File 16 surgery plan (PE-09):

  **pa-questions.md Section 3.2 PA-02 row (modify existing text):**
  ```
  // Old: "Is the text contrast comfortable for extended reading?"
  // New: "Is the text contrast comfortable for extended reading? (Include header, footer, chart labels, and diagram text in your assessment, not just body content.)"
  ```

- **Format rules:** In-cell modification only. No structural changes. Parenthetical addition.

- **Anti-loss mechanisms:** SAFE. In-cell text extension, 0 structural lines changed.

- **Propagation cascades:** None.

- **Pre-conditions:** None.

- **Post-verification:** (1) PA-02 text includes parenthetical. (2) No other PA-02 references broken.

- **Budget impact:** 0 structural lines (in-cell text extension).

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-035 row), audit-14-17.md (PE-09)

---

#### [ME-057]: Weaver Emotional Arc Fix Mapping

- **What:** After Weaver's emotional arc synthesis, check if any Top-5 fix improves the weakest register. If yes, rank higher. If no corresponding fix exists, add COMPOSITIONAL note as potential Fix #6.

- **Where:**
  - `pa-weaver.md` Section 4.3 (append 3 lines)

- **How:** Per File 16 surgery plan (PE-11):

  **pa-weaver.md Section 4.3 (append 3 lines):**
  ```
  ARC-FIX MAPPING: After synthesizing the emotional arc (register scores), check:
  Does any Top-5 fix improve the WEAKEST register? If yes, promote that fix.
  If no fix addresses the weakest register, add a COMPOSITIONAL note recommending
  what type of change would strengthen it (e.g., "Add surprise element in bottom half").
  ```

- **Format rules:** Recipe format. "Check" and "promote" are recipe verbs. The compositional note is advisory, not a mandate.

- **Anti-loss mechanisms:** SAFE. Weaver-only content. Fresh-eyes buddy (11) called this "scope creep" -- the Weaver already has a complex job. Consider whether this adds signal or noise.

- **Propagation cascades:** None.

- **Pre-conditions:** None -- enhancement to existing Weaver section.

- **Post-verification:** (1) Text in Weaver-only Section 4.3. (2) NOT in auditor-visible content.

- **Budget impact:** +3 lines in pa-weaver.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-057 row), HE-015 (emotional arc disconnected from fix priorities), audit-14-17.md (PE-11)

---

## TIER 2E: SHOULD ITEMS FROM BUDDY REPORTS AND GAP CHECK

---

#### [GAP-01]: Add Responsive Breakpoint Specification to Builder Recipe

- **What:** Add minimum responsive breakpoint specification. At 768px: stack grids to single column, make tables horizontally scrollable (wrap in overflow-x: auto container), reduce heading sizes by ~15%. At 480px: reduce body font to 15px, increase line-height to 1.8, collapse multi-column layouts.

- **Where:**
  - `artifact-builder-recipe.md` (new responsive section)

- **How:** Per gap-check NEW-01:
  ```
  RESPONSIVE BEHAVIOR: Build mobile-first. At minimum, implement 2 breakpoints:
  - At 768px: stack grids to single column, make tables horizontally scrollable
    (wrap in overflow-x: auto container), reduce heading sizes by ~15%
  - At 480px: reduce body font to 15px, increase line-height to 1.8,
    collapse multi-column layouts
  These are MINIMUMS. Content-specific breakpoints (e.g., a 4-column grid
  collapsing at 1024px) are expected in addition.
  ```

- **Format rules:** Recipe format. World-description framing ("Build mobile-first" not "You MUST build mobile-first"). Concrete values (768px, 480px, 15%).

- **Anti-loss mechanisms:** M-04 -- SAFE: no gate thresholds. M-06/M-11 -- verify recipe verbs.

- **Propagation cascades:** None (builder recipe only).

- **Pre-conditions:** None.

- **Post-verification:** (1) Recipe framing verified. (2) No suppressor patterns.

- **Budget impact:** +6-8 lines in artifact-builder-recipe.md.

- **In current 8-change plan?** NO

- **Sources:** 18-gap-check.md (GAP-01, GAP-02), step4-pa-epsilon.md ("No breakpoint-driven layout changes")

---

#### [GAP-08]: Add Visual Component Completeness Check to PA

- **What:** Add question: "For every chart, diagram, or infographic: (a) Does it have a legend or key if it uses symbols/colors? (b) Does the number of items match what the surrounding text claims? (c) Are axis labels and data labels present and readable?"

- **Where:**
  - `pa-questions.md` (could be merged into PA-81 / ME-022 as sub-checks, or routed to Auditor D)

- **How:** Per gap-check NEW-02. The simplest implementation is to EXTEND ME-022 (PA-81) to include these sub-checks rather than adding a separate question:

  **Extend PA-81 text (from ME-022):**
  ```
  | PA-81 | For every chart, diagram, or infographic: (a) Can you answer "What is the ONE
  thing this element wants me to know?" in <5 seconds? (b) Does it have a legend/key if
  it uses symbols/colors? (c) Does the item count match surrounding text claims?
  (d) Are axis/data labels present and readable? Note whether raster image or HTML/SVG. | B |
  ```

- **Format rules:** Experiential sub-checks within existing question. No additional question needed if merged.

- **Anti-loss mechanisms:** M-22 -- if merged into PA-81, no additional 5-location update needed beyond ME-022.

- **Propagation cascades:** Same as ME-022 if merged.

- **Pre-conditions:** ME-022 should be the vehicle for this enrichment.

- **Post-verification:** (1) PA-81 includes all 4 sub-checks. (2) Auditor B count unchanged.

- **Budget impact:** 0 additional lines if merged into ME-022 (PA-81 text slightly longer but same row).

- **In current 8-change plan?** NO

- **Sources:** 18-gap-check.md (GAP-08, GAP-09), inattentional-blindness-audit.md ("Settlement Map has no legend explaining marker meanings")

---

#### [GAP-10]: Add Invisible DOM Content Detection (Future Gate GR-65, RECOMMENDED)

- **What:** Add RECOMMENDED gate checking for content-bearing elements with opacity: 0, visibility: hidden (but display not none), height: 0 with overflow hidden, or positioned off-screen (left < -9999px). Exclude skip-links and ARIA-hidden decorative elements. Flags content that exists in DOM but is invisible to users.

- **Where:**
  - `gate-runner-core.js` (new gate, ~40-50 lines)
  - `gate-manifest.json` (RECOMMENDED tier)
  - `gate-runner-spec.md` (new row)
  - GR-48 RECOMMENDED_GATES array
  - MANIFEST gate counts

- **How:** Per gap-check NEW-03:
  ```
  // GR-65: Invisible DOM Content
  const invisibles = [];
  document.querySelectorAll('p,h1,h2,h3,h4,h5,h6,li,td,th,blockquote,figcaption').forEach(el => {
    const style = getComputedStyle(el);
    const text = el.textContent.trim();
    if (!text || text.length < 5) return; // Skip empty/trivial
    if (el.closest('.skip-link') || el.getAttribute('aria-hidden') === 'true') return;

    const isInvisible = (
      parseFloat(style.opacity) === 0 ||
      style.visibility === 'hidden' ||
      (parseFloat(style.height) === 0 && style.overflow === 'hidden') ||
      (parseInt(style.left) < -9000)
    );
    if (isInvisible) invisibles.push({tag: el.tagName, class: el.className, text: text.slice(0,50)});
  });
  results.push({gate: 'GR-65', name: 'Invisible DOM Content', status: invisibles.length > 0 ? 'FAIL' : 'PASS', measured: {invisibleElements: invisibles.length, samples: invisibles.slice(0,3)}, threshold: {max: 0}});
  ```

- **Format rules:** Binary. Any content-bearing invisible element = FAIL. Skip-links and ARIA-hidden excluded.

- **Anti-loss mechanisms:** M-19 -- maintain result schema. M-13 -- add to RECOMMENDED_GATES array. Gate-runner capacity must have room (requires prior subtraction).

- **Propagation cascades:** 6-location update for new gate.

- **Pre-conditions:** Gate-runner subtraction surgery must be complete first. This is a FUTURE gate for the next round after the File 14 surgery.

- **Post-verification:** (1) Run against HTML with opacity:0 content -- should FAIL. (2) Run against HTML with skip-link -- skip-link should be excluded. (3) Verify result schema matches.

- **Budget impact:** ~40-50 lines in gate-runner-core.js. NOT within current surgery budget -- deferred to next round.

- **In current 8-change plan?** NO

- **Sources:** 18-gap-check.md (GAP-10), gate-usability-audit.md Section 4F

---

## TIER 2F: SHOULD ITEMS FROM ADVERSARIAL PREREQUISITES

These items were identified by the adversarial review (File 06) as prerequisites or missing items that should be addressed at SHOULD level.

---

#### [ADV-07a]: Gate-Runner Subtraction Plan (PREREQUISITE)

- **What:** Remove or consolidate gates to free capacity BEFORE any gate additions. The adversarial review identifies this as THE most important prerequisite, completely absent from the master enrichment list. Without it, ME-003/014/040 cannot be safely added to gate-runner-core.js.

- **Where:**
  - `gate-runner-core.js` (multiple gate consolidations per File 14 surgery plan)

- **How:** This is implemented by the File 14 surgery plan sections GS-01A through GS-01D:
  - GS-01A: Consolidate GR-05+GR-07 = +32 freed
  - GS-01B: Remove GR-12, merge into GR-18 = +15 freed
  - GS-01C: Trim GR-21 verbose code = +8 freed
  - GS-01D: Trim GR-22 verbose code = +5 freed
  - **Total freed: 60 lines** (not 150 as adversarial estimated -- the 150 figure referenced GR-33-42 which use old SC-XX naming from a different gate system per buddy-adversarial finding 7A)

- **Format rules:** Subtraction. No new concepts, no new gates. Pure compression of existing code.

- **Anti-loss mechanisms:** M-19, M-13 -- all gate changes require coordinated multi-location updates. The File 14 surgery plan provides exact old->new diffs for each consolidation.

- **Propagation cascades:** Per File 14 satellite updates: GR-48 arrays, gate-manifest.json, gate-runner-spec.md, verdict summary arrays. All specified in GS-01A-sat1 through GS-04A-exact4.

- **Pre-conditions:** MUST be done BEFORE any gate additions (ME-003 GR-60, ME-014 GR-61, ME-040 GR-62).

- **Post-verification:** (1) gate-runner-core.js stays at 1,436 lines (net zero after additions consume freed space). (2) All GR-48 arrays match gate-manifest.json. (3) Verify by running gate-runner on test HTML.

- **Budget impact:** +60 freed lines (consumed by GR-60 addition and other gate changes). Net 0 for gate-runner-core.js per File 14.

- **In current 8-change plan?** NO (but it is the PREREQUISITE for the entire gate surgery)

- **Sources:** audit-05-08.md (ADV-07a), audit-14-17.md (File 14 sections GS-01A through GS-01D), 09-buddy-adversarial.md (finding 7A gate naming mismatch)

---

#### [ADV-07b]: Builder Recipe Subtraction

- **What:** Remove duplicate component pattern descriptions (~20-30 lines) from builder recipe before adding new content (ME-016 ARIA, ME-038 borders, ME-041 trailing void, GAP-01 responsive).

- **Where:**
  - `artifact-builder-recipe.md` (identify and remove duplicated content)

- **How:** Must READ artifact-builder-recipe.md to identify specific duplicate patterns. The adversarial review estimates 20-30 lines of duplicate content but does not specify exact locations.

- **Format rules:** Subtraction only.

- **Anti-loss mechanisms:** M-03 (Direct File Injection) -- CAUTION: do not remove content that the builder NEEDS. Only remove provably duplicate descriptions.

- **Propagation cascades:** None (builder recipe is self-contained).

- **Pre-conditions:** Must read current artifact-builder-recipe.md to identify duplicates.

- **Post-verification:** (1) No information loss -- every unique instruction still present. (2) Net line reduction.

- **Budget impact:** -20 to -30 lines freed (estimated).

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ADV-07b)

---

#### [ADV-05c]: Define MECHANICAL + Circuit Breaker Interaction

- **What:** When ME-005 (MECHANICAL verdict exception) and ME-008 (usability circuit breaker) coexist, define behavior. What happens when a fix is classified MECHANICAL by ME-005 but a usability circuit breaker (ME-008) says "Fix #1"? The interaction is currently undefined, creating a combinatorial explosion of verdict states.

- **Where:**
  - `MANIFEST.md` verdict logic section (L275-285 or Phase 3C L505-512)

- **How:**
  ```
  INTERACTION RULE: If a finding is both MECHANICAL (per ME-005 classification) AND
  flagged BLOCKING-USABILITY (per circuit breaker), the USABILITY classification takes
  priority. Usability always outranks mechanical classification. The fix is treated as
  BLOCKING-USABILITY Fix #1, even though its implementation is mechanical.
  ```

- **Format rules:** Binary rule. Usability > mechanical is the priority order. No judgment required.

- **Anti-loss mechanisms:** M-23 (REBUILD Not FIX) -- CAUTION: modifies verdict logic.

- **Propagation cascades:** gate-manifest.json verdictLogic, artifact-orchestrator.md verdict decision tree.

- **Pre-conditions:** ME-005 and ME-008 must both be defined first.

- **Post-verification:** (1) Interaction rule present. (2) No contradictory verdict states possible.

- **Budget impact:** +2-3 lines in MANIFEST.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ADV-05c)

---

#### [ADV-05d]: Define PA-05 Range + Tier System Mapping

- **What:** If PA-05 becomes a range (per ME-019), define how ranges map to discrete tiers. When PA-05 is "2.5-3.0/4", which tier is it? The range straddles MIDDLE (2.0-2.9) and CEILING (3.0-3.9) boundaries.

- **Where:**
  - `pa-weaver.md` (append to ME-019 range scoring section)

- **How:**
  ```
  RANGE-TO-TIER MAPPING: When PA-05 is a range that straddles tier boundaries:
  - Use LOWER bound for tier classification (conservative)
  - Example: PA-05 2.5-3.0 = MIDDLE tier (lower bound 2.5 = MIDDLE)
  - Note the range in tier statement: "MIDDLE (trending CEILING)"
  ```

- **Format rules:** Binary. Lower bound determines tier. No judgment.

- **Anti-loss mechanisms:** SAFE.

- **Propagation cascades:** Any downstream system using PA-05 as discrete number.

- **Pre-conditions:** ME-019 (PA-05 as range) must be defined first.

- **Post-verification:** (1) Mapping rule present. (2) Uses lower bound.

- **Budget impact:** +3 lines in pa-weaver.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ADV-05d)

---

## SUMMARY STATISTICS

| Category | Items | Total Budget Impact |
|----------|-------|-------------------|
| TIER 2A: Gate Fixes (ME-010 through ME-013) | 4 | ME-010: +32 freed (combined with ME-024), ME-011: ~-15, ME-012: -2, ME-013: ~-5 |
| TIER 2B: PA/Pipeline Fixes (ME-014 through ME-023) | 10 | ME-014: -50, ME-015: +5, ME-016: +10, ME-017: +12, ME-018: ~0, ME-019: 0, ME-020: +10, ME-021: +3, ME-022: +3, ME-023: +3 |
| TIER 2C: MANIFEST Surgery (ME-042, ME-045, ME-046) | 3 | ME-042: 0, ME-045: +2, ME-046: +3 |
| TIER 2D: PA Surgery (ME-009, ME-032-035, ME-057) | 6 | ME-009: +4, ME-032: +3, ME-033: +4, ME-034: +1, ME-035: 0, ME-057: +3 |
| TIER 2E: Buddy/Gap Items (GAP-01, GAP-08, GAP-10) | 3 | GAP-01: +8, GAP-08: 0, GAP-10: ~-50 (deferred) |
| TIER 2F: Adversarial Prerequisites (ADV-07a/b, ADV-05c/d) | 4 | ADV-07a: +60 freed, ADV-07b: +25 freed, ADV-05c: +3, ADV-05d: +3 |
| **TOTAL** | **30 items** | See per-item details |

### Capacity Budget Impact

| File | Safe Budget | Tier 2 Consumption | Status |
|------|------------|-------------------|--------|
| gate-runner-core.js | 0 net (must subtract first) | ME-010 frees +32, ME-012 consumes -2, ME-013 consumes -5, ME-014 consumes -50 = NET -25 after +32 freed = need 25 from other subtractions (GS-01B/C/D provide +28) | TIGHT |
| pa-deployment.md | +30 | ME-015: +6, ME-034: +1 = +7 | WITHIN BUDGET |
| pa-questions.md | +30 | ME-009: +4, ME-021: +3, ME-022: +3, ME-023: +3, ME-032: +3, ME-033: +4, ME-035: 0 = +20 | WITHIN BUDGET |
| pa-weaver.md | +20 | ME-019: 0 (offset), ME-057: +3, ADV-05d: +3 = +6 | WITHIN BUDGET |
| MANIFEST.md | +20 | ME-017: +12, ME-042: 0, ME-045: +2, ME-046: +3, ADV-05c: +3 = +20 | AT LIMIT |
| artifact-builder-recipe.md | +50 | ME-016: +10, GAP-01: +8 = +18 | WITHIN BUDGET |
| artifact-orchestrator.md | +50 | ME-020: +10 = +10 | WITHIN BUDGET |

### Implementation Order

Per adversarial recommendation and File 14/15/16 surgery plans:

1. **Phase A: SUBTRACT** -- ADV-07a (gate consolidations), ADV-07b (recipe deduplication), compressions from File 15/16:
   - FILE 15 COMPRESSIONS (MANIFEST.md): R-1: L275-287 -> 3-line summary (frees 10 lines), R-2: L652-663 -> table format (frees 3 lines), R-3: L841 -> 1-line note (frees 1 line), R-4: L62-68 -> character compression (frees 0 lines), R-5: L969-971 -> compressed (frees 1 line). Total: 15 lines freed. See File 15 Sections R-1 through R-5 for exact old->new.
   - FILE 16 COMPRESSIONS (4 PA files): pa-deployment.md: 1.2.1 method (-2), 1.3 duplicate steps 4-5 (-3), 2.1.1 historical ref (-1) = -6. pa-questions.md: 1.1 redundant gestalt (-2), 1.5 CCS paragraph (-3), Section 4 duplicate (-5), Appendix B grid table (-3) = -13. pa-weaver.md: 4.2-4.4 source citations (-8), 9.1-9.2 remove columns (-5) = -13. pa-guardrails.md: Section 7 column (-2), Section 8 merge (-2), Section 11 dedup (-3) = -7. Total: 45 lines freed across 4 files. See File 16 Sections 2.1-2.4 for exact text.
2. **Phase B: FIX EXISTING** -- ME-010 (GR-05 split), ME-012 (GR-14 fix), ME-013 (GR-09 fix), ME-011 (GR-06 fix)
3. **Phase C: ADD GATES** -- ME-014 (GR-61 font size, only if capacity allows)
4. **Phase D: PA ENRICHMENTS** -- ME-009, ME-015, ME-032, ME-033, ME-034, ME-035
5. **Phase E: QUESTION CHANGES** -- ME-021, ME-022, ME-023 (after ME-037 retirements)
6. **Phase F: WEAVER/ORCHESTRATOR** -- ME-019, ME-020, ME-057, ADV-05c, ADV-05d
7. **Phase G: MANIFEST** -- ME-017, ME-042, ME-045, ME-046
8. **Phase H: BUILDER RECIPE** -- ME-016, GAP-01
9. **Phase I: DEFERRED** -- GAP-10 (invisible DOM gate), ME-018 (perceptibility column)

### Cross-File Discrepancy Notes

1. **File 14 vs File 17 on GR-05:** File 14 proposes ONE merged function (3 result objects). File 17 proposes TWO separate functions. **File 14 is authoritative** (more line-efficient, single DOM iteration).
2. **GR-48 arrays:** File 14 provides exact final-state arrays (GS-04A-exact1/exact2). These are the COORDINATED final state. Individual per-item changes from File 17 should NOT be applied independently.
3. **GR-12 absorption vs downgrade:** File 14 absorbs GR-12 into GR-18 (GR-12 ceases to exist). File 17 downgrades GR-12 to RECOMMENDED (still exists independently). **File 14 is authoritative** (saves more lines).
4. **Question total:** 3 retirements + 3 additions = 69 (net zero). File 15 incorrectly counts 4 retirements (including nonexistent PA-07).

### COORDINATED GR-48 FINAL-STATE ARRAYS (from File 14 Section 4A)

These arrays represent the AUTHORITATIVE final state after ALL tier reclassifications. Apply these as the final step of gate surgery — do NOT build up incrementally from individual changes. (Also documented in Section 4.12.)

```javascript
// gate-runner-core.js L1332 (REQUIRED_GATES)
const REQUIRED_GATES = [
  'GR-01', 'GR-02', 'GR-03', 'GR-04', 'GR-05', 'GR-06', 'GR-08', 'GR-09', 'GR-10',
  'GR-11', 'GR-13', 'GR-14', 'GR-15',
  'GR-44', 'GR-60'
];

// gate-runner-core.js L1338 (RECOMMENDED_GATES)
const RECOMMENDED_GATES = [
  'GR-07', 'GR-17', 'GR-18', 'GR-20',
  'GR-43', 'GR-45', 'GR-49', 'GR-51', 'GR-52'
];

// gate-runner-core.js L753 (identityGates filter)
const identityGates = results.filter(r =>
  ['GR-01','GR-02','GR-03','GR-04','GR-05','GR-06','GR-08','GR-09','GR-10'].includes(r.gate)
);

// gate-runner-core.js L756 (perceptionGates filter)
const perceptionGates = results.filter(r =>
  ['GR-11','GR-13','GR-14','GR-15','GR-44','GR-60'].includes(r.gate)
);
```

Note: GR-05 in REQUIRED_GATES means GR-05a after the split (ME-010). GR-12 is absent — absorbed into GR-18 per File 14 Section 1B.

### ORPHAN RISK: OR-2 — "GR-01-10" Range Notation After GR-07 Downgrade

After ME-024 downgrades GR-07 from REQUIRED to RECOMMENDED, all references to "GR-01-10" as the identity gate range are WRONG. GR-07 is no longer an identity-REQUIRED gate. Must update to "GR-01-06, GR-08-10" (or "GR-01-06, GR-08-GR-10").

Affected locations (from File 17 REMOVAL 2):
- MANIFEST.md L646: `Identity gate FAIL | GR-01-GR-10 | REBUILD`
- MANIFEST.md L714: `SECTION 1: IDENTITY GATES (GR-01-GR-10) | ANY fail = REBUILD`
- artifact-orchestrator.md L474: `ANY identity gate (GR-01-GR-10) fails`
- EXECUTION-TRACKER-TEMPLATE.md L158: `Identity (GR-01-GR-10) | 10` -> `Identity (GR-01-GR-06, GR-08-GR-10) | 9`

### ORPHAN RISK: OR-5 — AP-05 Detection Weakened After PA-40 Retirement

PA-40 retirement removes the primary detection question for AP-05 (Spacing Flat-Line) anti-pattern. Only PA-66 (negative space variety) remains in the AP-05 detection chain.

Affected locations:
- pa-guardrails.md L78: `PA-40 (spacing consistency), PA-66 (negative space variety)` -> remove PA-40, consider adding PA-69 as replacement
- pa-weaver.md L254: `PA-40, PA-66` -> remove PA-40

Mitigation: Route PA-69 (counts visual properties changing at transitions) as AP-05 supplementary detection alongside PA-66.

---

*Section 2 complete. 30 SHOULD/SIGNIFICANT items extracted with full detail: exact old->new diffs where available, all propagation cascades, all anti-loss mechanism impacts, all pre-conditions, budget accounting per file. Implementation order follows adversarial "subtract first" principle. All line numbers reference current file versions as documented in audit files.*

---

## SECTION 3: TIER 3 — COULD

Items classified COULD/CONSIDER/MINOR that are NOT in the 8-change plan. Organized by sub-category.

---

### 3A. Gate Severity Restructure (7 items)

#### ME-024: Downgrade GR-07 to RECOMMENDED
- **What:** Downgrade GR-07 (html default color) from REQUIRED to RECOMMENDED. Add visible-text-only filter (`textContent.trim().length > 0 && offsetHeight > 0`). Browser defaults on structural containers should not trigger identity failures.
- **Where:** `gate-runner-core.js`, `gate-manifest.json`
- **Propagation cascade:** ~24 edits across 9 files per File 17 REMOVAL 2. See File 17 for per-file edit details.
- **Budget impact:** +10 lines / -0 / net +10
- **In 8-plan?** NO
- **Loss if skipped:** Invisible browser defaults continue to trigger REQUIRED identity failures. Contributes to false-positive noise.

#### ME-025: Downgrade GR-12 to RECOMMENDED
- **What:** Downgrade GR-12 (letter-spacing >= 0.025em) from REQUIRED to RECOMMENDED. At 16px, 0.025em = 0-0.4px — entirely sub-perceptual.
- **Where:** `gate-runner-core.js`, `gate-manifest.json`
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** Sub-perceptual letter-spacing continues to trigger REQUIRED failures. Priority inversion at gate layer persists.
- **Propagation cascade:** ~18 edits across 8 files per File 17 REMOVAL 3. See File 17 for per-file edit details.
- **NOTE:** File 14 Section 1B uses absorption into GR-18 (GR-12 ceases to exist), not standalone downgrade. File 14 is authoritative — see Cross-File Discrepancy #3. Use File 14 Section 1B for exact old->new diffs (20 lines DELETE at L576-597, 5 lines ADD into GR-18 at ~L835).

#### ME-026: Downgrade GR-43 to RECOMMENDED
- **What:** Downgrade GR-43 (self-evaluation comment check) from REQUIRED to RECOMMENDED. An invisible HTML comment should not block builds.
- **Where:** `gate-runner-core.js`, `gate-manifest.json`
- **Propagation cascade:** ~17 edits across 8 files per File 17 REMOVAL 4. See File 17 for per-file edit details.
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** Missing `<!-- SELF-EVAL -->` comment blocks entire build. Punishes omission of invisible metadata.

#### ME-027: Downgrade GR-19 to ADVISORY
- **What:** Downgrade GR-19 (threshold gaming detection) from RECOMMENDED to ADVISORY. This gate checks builder INTENT, not visual output.
- **Where:** `gate-runner-core.js`, `gate-manifest.json`
- **Propagation cascade:** ~14 edits across 7 files per File 17 REMOVAL 5. See File 17 for per-file edit details.
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** Intent-detection gate weighted at RECOMMENDED tier — same as gates checking actual visual properties.

#### ME-028: Adjust GR-21 Threshold + GR-22 Skip-Link Exemption for COMPOSED Mode
- **What:** (1) Adjust GR-21 distinct background threshold from 4 to 6 for COMPOSED mode, OR exclude backgrounds with alpha < 0.1 from count. Low threshold causes false positive in COMPOSED mode. (2) Add GR-22 skip-link exemption per File 14 Section 1D: `el.classList.contains('skip-link') || el.closest('.skip-link')` — skip-link elements should not be counted in interactive element analysis.
- **Where:** `gate-runner-core.js`
- **Budget impact:** +10 lines / -0 / net +10
- **In 8-plan?** NO
- **Loss if skipped:** GR-21 false positive persists in COMPOSED mode — callout tints counted as "distinct backgrounds." GR-22 counts skip-links as interactive elements.
- **NOTE:** See File 14 Section 1C for exact GR-21 old->new code (52 lines DELETE, 40 lines ADD). See File 14 Section 1D for exact GR-22 old->new code (56 lines DELETE, 48 lines ADD with skip-link exemption).

#### ME-029: Fix GR-17 List Item Threshold
- **What:** Change `li` minimum padding from 12px to 4px (same as `td`/`th`). V3 evidence: 30 violations at 8px is standard design practice.
- **Where:** `gate-runner-core.js`
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** Standard 8px list padding triggers 30 RECOMMENDED warnings per run. Gate noise.

#### ME-030: Fix GR-48/GR-49 Viewport Namespacing Conflict
- **What:** Add viewport field to gate result objects. Update GR-49 to check `gate + viewport` pairs, not just `gate`. Every multi-viewport run has GR-48 deduplication conflicting with GR-49 integrity check.
- **Where:** `gate-runner-core.js`
- **Budget impact:** +10 lines / -0 / net +10
- **In 8-plan?** NO
- **Loss if skipped:** Meta-gates contradict on every multi-viewport run. Confusing gate output. **Most regrettable cut in this tier** per audit-18-21 analysis — this is a real bug, not a threshold tweak.
- **Fresh-eyes flag:** None.

---

### 3B. PA Enrichments (6 items)

#### ME-031: False Affordance Scan PA Question
- **What:** Add PA question: "Does every interactive-looking element actually appear interactive?" Route to Auditor E or H.
- **Where:** `pa-questions.md` (requires 5-location update per M-22)
- **Budget impact:** +10 lines / -0 / net +10
- **In 8-plan?** NO
- **Loss if skipped:** False affordances undetected. Type 1 failure (False Affordance) from 6-type taxonomy has no detection mechanism.

#### ME-032: Pipeline-Introspection Markers

> **NOTE: This item's authoritative entry is in Section 2 (TIER 2D). This Section 3 entry is a legacy duplicate kept for cross-reference only.**

- **What:** Mark PA-55, PA-56, PA-69 with `<!-- PIPELINE-INTROSPECTION -->` HTML comment. Weaver weights these differently from experiential findings.
- **Where:** `pa-questions.md`
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** Pipeline-introspection questions weighted same as reader-experience questions. Weaver cannot distinguish.
- **Fresh-eyes flag:** YES — audit-05-08 lists ME-032 as suspicious enrichment. Metadata-only, low risk but also low impact.

#### ME-033: Void Question Deduplication Rule

> **NOTE: This item's authoritative entry is in Section 2 (TIER 2D). This Section 3 entry is a legacy duplicate kept for cross-reference only.**

- **What:** If PA-50 flags >= 3 blank viewports, auto-answer PA-09, PA-51, PA-33 from PA-50 findings. Saves ~30% of Auditor C time under catastrophic void conditions.
- **Where:** `pa-questions.md`
- **Budget impact:** +10 lines / -0 / net +10
- **In 8-plan?** NO
- **Loss if skipped:** Under catastrophic void, 3 questions produce identical answers. Redundant auditor work.

#### ME-034: Defect-Bypass for H's Cross-Viewport Protocol

> **NOTE: This item's authoritative entry is in Section 2 (TIER 2D). This Section 3 entry is a legacy duplicate kept for cross-reference only.**

- **What:** If defect is identical across all viewports, auditor states once and redirects to viewport-specific differences in non-defective content. Prevents "PUNISHED x3" pattern.
- **Where:** `pa-deployment.md`
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** Auditor H says "PUNISHED" 3 times for the identical viewport-independent defect. Wasted analysis bandwidth.

#### ME-035: Footer/Header in PA-02 Scope
- **What:** Add to PA-02 instruction: "(Include header and footer text in your assessment, not just body content.)"
- **Where:** `pa-questions.md`
- **Budget impact:** +1 line / -0 / net +1
- **In 8-plan?** NO
- **Loss if skipped:** Header/footer text excluded from contrast assessment. 1-line fix, virtually free.
- **Restoration case:** STRONG per audit-18-21 — +1 line, near-zero cost.

#### ME-036: Horizontal Scroll Element-Level Check in PA-07
- **What:** Add to PA-07 instruction: "(Check both page-level AND element-level horizontal scroll.)"
- **Where:** `pa-questions.md`
- **Budget impact:** +1 line / -0 / net +1
- **In 8-plan?** NO
- **Loss if skipped:** Element-level `overflow-x: auto` at 768px (e.g., wide tables) goes undetected. 1-line fix.
- **Restoration case:** STRONG per audit-18-21 — +1 line, near-zero cost.

---

### 3C. Builder Recipe Improvements (3 items, excluding ME-039 which is in plan)

#### ME-038: Px-Only Border Width Instruction
- **What:** Add to builder recipe: "All border-width values MUST be integer px. Do NOT use em/rem." Prevents builder from using em/rem for borders, which compute to fractional px and fail GR-09.
- **Where:** `artifact-builder-recipe.md`
- **Budget impact:** +3 lines / -0 / net +3
- **In 8-plan?** NO
- **Loss if skipped:** Builder uses em/rem for borders, produces fractional px, fails GR-09 on every build. Known preventable pattern.

#### ME-040: Text Overflow Gate GR-62 (RECOMMENDED)
- **What:** Add new gate checking `overflow: hidden` clipping, `text-overflow: ellipsis` truncation, off-screen content. ~60 lines Playwright JS.
- **Where:** `gate-runner-core.js`
- **Budget impact:** +60 lines / -0 / net +60
- **In 8-plan?** NO
- **Loss if skipped:** Clipped/truncated text undetected programmatically. Only caught if PA auditor happens to notice.
- **Fresh-eyes flag:** Adversarial review (ADV-07c) recommends CUTTING this entirely — lowest priority of 3 new gates, 60 lines on zero-budget artifact.

#### ME-041: Trailing Void Prevention in Builder Recipe
- **What:** Add to builder recipe: "Verify page ends within 100px of last content element. Override `min-height: 100vh` if needed."
- **Where:** `artifact-builder-recipe.md`
- **Budget impact:** +3 lines / -0 / net +3
- **In 8-plan?** NO
- **Loss if skipped:** Builder creates trailing void, caught only by (now-fixed via ME-007) GR-44. Prevention-at-source principle violated. ME-007 detects; ME-041 prevents.

---

### 3D. Tracking + Documentation (5 items)

#### ME-042: Update MANIFEST Line Counts

> **NOTE: This item's authoritative entry is in Section 2 (TIER 2C). This Section 3 entry is a legacy duplicate kept for cross-reference only.**

- **What:** Update components.css line count from 290 to actual (~1,195). Add pre-flight validation (+/- 20%).
- **Where:** `MANIFEST.md`
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** 4x discrepancy in components.css size persists. Orchestrator flagged it then moved on during V3 run.

#### ME-043: Add Experiential Pass + Screenshot Tracking Fields
- **What:** Add tracking fields to EXECUTION-TRACKER-TEMPLATE for new experiential pass protocol and screenshot validation results.
- **Where:** `EXECUTION-TRACKER-TEMPLATE.md`
- **Budget impact:** +10 lines / -0 / net +10
- **In 8-plan?** NO
- **Loss if skipped:** No tracking for new experiential/screenshot protocols. Implementation not recorded.

#### ME-044: Document Experiential Pass Rationale
- **What:** Document rationale in artifact-pa-protocol.md: gorilla experiment, attentional tunnels, 11% detection rate improving to 78-100% with experiential pre-check.
- **Where:** `artifact-pa-protocol.md`
- **Budget impact:** +15 lines / -0 / net +15
- **In 8-plan?** NO
- **Loss if skipped:** Rationale for experiential pass undocumented. Future pipeline maintainers may remove it without understanding why it exists. Loses the "9 different perceptual realities" evidence (per-auditor chart detection analysis) — the single most communicable evidence for ME-001's necessity.
- **Fresh-eyes flag:** YES — audit-05-08 lists ME-044 as suspicious (documentation, not code). Adversarial review recommends CUTTING entirely.

#### ME-045: Context Budget Awareness

> **NOTE: This item's authoritative entry is in Section 2 (TIER 2C). This Section 3 entry is a legacy duplicate kept for cross-reference only.**

- **What:** Add note that pipeline typically requires 2-3 sessions. Plan boundaries between Phase 2 and Phase 3A. Update time estimates from 80-105 min to 3-6 hours.
- **Where:** `artifact-orchestrator.md`, `MANIFEST.md`
- **Budget impact:** +10 lines / -0 / net +10
- **In 8-plan?** NO
- **Loss if skipped:** MANIFEST time estimates remain 4x wrong (80-105 min actual ~6 hours). New operators will be surprised. Note: HE-014 proposes a MORE AGGRESSIVE version — Pipeline-A/Pipeline-B structural split (P0-P2 vs P3A-P3C in separate contexts). ME-045 is documentation-level; HE-014 is architecture-level.

#### ME-046: Corrected Screenshot Recovery Protocol

> **NOTE: This item's authoritative entry is in Section 2 (TIER 2C). This Section 3 entry is a legacy duplicate kept for cross-reference only.**
>
> **REVIEWER RECOMMENDATION: Bundle ME-046 with MUST-06 (ME-006) — detection without recovery is incomplete. +3-5 lines.**

- **What:** Define standard recovery protocol: screenshots must cover ENTIRE page at regular intervals (every 900px), not curated regions. When screenshot validation (ME-006) fires, this defines what to do.
- **Where:** `MANIFEST.md`
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** ME-006 (in plan) detects bad screenshots but has no standard recovery procedure. Detection without recovery = incomplete protocol. **Strongest restoration case** per audit-18-21 — ME-006's companion.
- **Restoration case:** STRONG — +5 lines, makes ME-006 complete.

---

### 3E. Reservoir Value-System Corrections (11 items, all CONSIDER tier)

#### ME-047: 3 Perceptually Distinct Background Registers
- **What:** Codify LIGHT/MEDIUM/DARK as 3 background registers. "FEWER distinctions with LARGER deltas." Instead of 6 barely-distinguishable cream shades, use 3 distinct registers.
- **Where:** `artifact-builder-recipe.md` or TC Brief
- **Budget impact:** +3 lines / -0 / net +3
- **In 8-plan?** NO
- **Loss if skipped:** Builder continues creating 6 barely-distinguishable cream shades. Perceptual flatness persists.

#### ME-048: One Unique Visual Element Per Zone
- **What:** Add instruction: "If every zone is interchangeable, the design is templated, not composed." Each zone should have at least one distinguishing visual component.
- **Where:** `artifact-builder-recipe.md`
- **Budget impact:** +3 lines / -0 / net +3
- **In 8-plan?** NO
- **Loss if skipped:** Zones visually identical. Zone 4 monotony (CR-5/CR-15 cross-run pattern) persists. Recurring issue across VA and V3 runs.

#### ME-049: 2-3 Dark Moments Distributed Across Scroll
- **What:** Add instruction: "A page that is entirely light cream creates scroll fatigue. Include 2-3 dark-background moments distributed across the scroll."
- **Where:** `artifact-builder-recipe.md`
- **Budget impact:** +3 lines / -0 / net +3
- **In 8-plan?** NO
- **Loss if skipped:** No dark-background pacing moments. Scroll fatigue from uniform light palette.

#### ME-050: Widen Spacing Compression Range to 3:1
- **What:** Add instruction: "If max padding is 80px, min should be <=27px." Current 2.5:1 ratio barely registers perceptually.
- **Where:** `artifact-builder-recipe.md`
- **Budget impact:** +3 lines / -0 / net +3
- **In 8-plan?** NO
- **Loss if skipped:** Current 2.5:1 spacing compression barely registers. Spatial monotony persists.

#### ME-051: Replace Retired Questions with Experiential Questions
- **What:** After ME-037 retires 4 structural questions, replace with 4 experiential questions: PA-87 (content-form specificity), PA-99 (return desire), NEW-07 (custom vs template), NEW-17 (rule-breaking/sprezzatura).
- **Where:** `pa-questions.md` (requires 5-location update per M-22)
- **Budget impact:** +20 lines / -20 lines (retirements) / net 0
- **In 8-plan?** YES (bundled with ME-037 as atomic operation)
- **Loss if skipped:** N/A — included in plan.

#### ME-052: One-Line Audience Description for PA Auditors
- **What:** Add to PA auditor prompts: "The intended audience for this page is [X]." Ensure no build-intent leaks (M-04 context isolation).
- **Where:** `pa-deployment.md`
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** Auditors evaluate without knowing who the page is for. Cannot assess whether design choices serve the audience.

#### ME-053: Container Width Per-Zone Exceptions for Code
- **What:** Code zones may expand to 1200px. Prose stays 960px. Relaxes NON-NEGOTIABLE container width constraint only for code/data.
- **Where:** `artifact-builder-recipe.md`
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** Code blocks truncated at 960px, harming readability. Documented as conflict with 960px NON-NEGOTIABLE.

#### ME-054: Remove Dead CSS/Unused Tokens
- **What:** Remove unused font-weight 700 (saves 20-50KB), 3 unused custom properties, `.featured-code` class if unused.
- **Where:** `components.css`, `tokens.css`
- **Budget impact:** +0 lines / -13 lines / net -13
- **In 8-plan?** NO
- **Loss if skipped:** Dead code persists, adding to pipeline complexity. This is a pure SUBTRACTION — costs nothing, reduces complexity.
- **Restoration case:** STRONG per audit-18-21 — -13 lines, aligns with "subtract first" principle.

#### ME-055: Anti-Goodhart "What Would You REMOVE?" PA Question
- **What:** Add PA question that inverts PA's additive bias: "What would you REMOVE from this page to improve it?"
- **Where:** `pa-questions.md`
- **Budget impact:** +10 lines / -0 / net +10
- **In 8-plan?** NO
- **Loss if skipped:** Every PA question asks "what's missing/wrong." None asks "what's excess." Additive bias persists.

#### ME-056: Codify Best CSS Patterns as Technique Library
- **What:** Document available CSS techniques: zone-adaptive font-size, dark code block inversion, inversion block pattern, font-family trinity, border hierarchy with color-weight pairing. Use world-description framing (M-12).
- **Where:** `artifact-builder-recipe.md`
- **Budget impact:** +20 lines / -0 / net +20
- **In 8-plan?** NO
- **Loss if skipped:** CSS patterns exist only in reference files builder may not see. Builder reinvents techniques each run.

#### ME-057: Weaver Emotional Arc to Fix Mapping

> **NOTE: This item's authoritative entry is in Section 2 (TIER 2D). This Section 3 entry is a legacy duplicate kept for cross-reference only.**

- **What:** After emotional arc analysis, check if any top-5 fix improves the weakest register. Add compositional recommendation as Fix #6 if not.
- **Where:** `pa-weaver.md`
- **Budget impact:** +10 lines / -0 / net +10
- **In 8-plan?** NO
- **Loss if skipped:** Weaver's emotional arc analysis is produced then completely ignored in fix prioritization. High-quality analysis wasted.
- **Fresh-eyes flag:** YES — audit-05-08 lists ME-057 as suspicious enrichment.

---

### 3F. Suspicious/Flagged COULD Items

The fresh-eyes auditor (audit-05-08) flagged these COULD items as potentially suspicious enrichments — items whose cost-benefit ratio may not justify inclusion even in a future wave:

| Item | Concern |
|------|---------|
| ME-018 | Gate perceptibility classification — metadata-only, but adds column to manifest everyone must maintain |
| ME-019 | PA-05 as range — downstream impact on tier system undefined (ADV-05d) |
| ME-020 | Orchestrator self-assessment — adds introspection overhead with uncertain quality improvement |
| ME-032 | Pipeline-introspection markers — metadata-only, low impact |
| ME-044 | Document experiential pass rationale — documentation, not code; adversarial recommends cutting |
| ME-057 | Emotional arc mapping — disconnected from fix loop; uncertain whether Weaver would use it |

---

### 3G. Reservoir STILL-USEFUL Items Not in Any ME (from audit-01-04)

These are STILL-USEFUL items from File 02 (reservoir extraction) that passed the V3 filter but were not elevated to ME-numbered enrichments:

#### Usability Improvements

| Item ID | Description | Target | Tier |
|---------|-------------|--------|------|
| VA-03 | Break Zone 4 monotony (5 identical principle blocks) | HTML structure | SHOULD |
| VA-06 | Fix subtitle low-contrast on dark header | HTML CSS | SHOULD |
| VA-07 | Reduce gap between TOC and Zone 1 | HTML CSS | COULD |
| VA-08 | Zebra-striping for table rows | HTML CSS | COULD |
| VA-09 | Collapsible treatment for long startup script | HTML structure | COULD |
| VA-10 | Visual preview for collapsed accordion items | HTML structure | COULD |
| VA-11 | Differentiate card backgrounds by level | HTML CSS | COULD |
| CSS-07 | Add scroll-margin-top for anchor links | HTML CSS | COULD |
| E01-04 | Responsive drop cap sizing (3.5em too large at 768px) | Builder recipe | COULD |
| E03-03 | Recovery command danger hierarchy (destructive vs safe commands) | Builder recipe | SHOULD (SAFETY) |
| E08-03 | Text measure variation (uniform 960px left-aligned = fatiguing) | Builder recipe | SHOULD |
| E08-05 | Vary heading treatment for emphasis | Builder recipe | COULD |
| E08-06 | Vary callout structure for different types | Builder recipe | COULD |
| E08-07 | Design footer as real destination, not just stop | Builder recipe | COULD |
| E08-10 | Distinguish ASCII diagrams from code blocks | Builder recipe | COULD |
| E06-11 | Deliberate plainness instruction (reader needs rest zones) | TC Brief Template | SHOULD |
| E06-12 | Thematic return instruction (circular narrative) | TC Brief Template | COULD |
| AR-04 | One-line audience description for PA auditors | PA protocol | COULD |

#### Builder Experience Improvements

| Item ID | Description | Target | Tier |
|---------|-------------|--------|------|
| E01-01/E04-01 | Concept-naming for custom properties (--accent-blue = #A07D50 is a bug) | Builder recipe | COULD |
| CSS-03 | Remove unused font-weight 700 from import (20-50KB) | components.css | COULD |
| CSS-04 | Remove dead tokens (3 unused custom properties) | tokens.css | COULD |
| CSS-09 | Remove .featured-code if unused (13 dead CSS lines) | components.css | COULD |
| CSS-10 | Codify zone-adaptive body font-size as technique | Builder recipe | COULD |
| CSS-11 | Codify dark code block inversion as technique | Builder recipe | COULD |
| CSS-12 | Codify inversion block pattern as technique | Builder recipe | COULD |
| CSS-14 | Codify border hierarchy with color-weight pairing as technique | Builder recipe | COULD |

#### Value System Corrections

| Item ID | Description | Target | Tier |
|---------|-------------|--------|------|
| E08-01 | 3 perceptually distinct background registers (LIGHT/MEDIUM/DARK) | Builder recipe / TC Brief | SHOULD |
| E08-02 | One unique visual element per zone | Builder recipe / TC Brief | SHOULD |
| E08-04 | 2-3 dark moments distributed across scroll | Builder recipe / TC Brief | SHOULD |
| E08-08 | Widen spacing compression range to 3:1 | Builder recipe | COULD |
| E08-09 | Editorial-weight-by-importance heading treatment | Builder recipe | COULD |
| E08-11 | Asymmetric spacing for editorial emphasis | Builder recipe | COULD |
| E05-02 | Metaphor persistence in final zones | Builder recipe / TC Brief | SHOULD |
| E06-09 | Emotional arc from inventory to sequence | PA questions | COULD |
| E03-05 | Second interstitial moment for long pages | Builder recipe | COULD |

#### Process Simplifications

| Item ID | Description | Target | Tier |
|---------|-------------|--------|------|
| AR-01 | Container width per-zone exceptions for code-heavy content | MANIFEST / Builder recipe | COULD |
| AR-02 | Palette families instead of warm/cool binary | Builder recipe / Gate runner | COULD |
| AR-10 | Remove mechanism count floor (make ADVISORY) | Gate runner | COULD |
| VA-04 | Semantic color coding for principle borders | Builder recipe | COULD |
| VA-12 | Strengthen metaphor from announced to structural | Builder recipe | SHOULD |
| PF-14 | Auditor conviction statement (single DOMINANT finding per auditor) | PA deployment | COULD |
| PF-15 | Soft boundary for REBUILD/REFINE | MANIFEST | COULD |

#### Experiential PA Questions Pool (24 candidate questions for future ME-051-style swaps)

From File 02 Section B — 24 experiential questions rated STILL-USEFUL. Only 4 were selected for ME-051. The remaining 20 form a backlog:

PA-80, PA-81, PA-84, PA-85, PA-86, PA-88, PA-89, PA-90, PA-91, PA-93, PA-95, PA-96, PA-97, PA-98, NEW-01, NEW-02, NEW-04, NEW-05, NEW-08, NEW-18.

These are available for future question portfolio rebalancing if ME-037+ME-051 swap proves successful.

---

### 3H. COULD Items Unique to Files 07/08 (No ME Number, No Implementation Path)

These items were identified in handoff enrichments (File 07) and pipeline PA enrichments (File 08) but were NOT merged into the master enrichment list and have no ME number:

| Source | Item | Description | Impact |
|--------|------|-------------|--------|
| HE-009 | Reduce PA auditors from 9 to 5 | Dual-route critical questions (PA-02/PA-08 to 2 auditors, PA-05 to 3). Saves $15-20/run. Listed as excluded process question (V3E-006) in master list. | SIGNIFICANT cost + architecture improvement |
| PE-008 | Adversarial question prioritization under catastrophic defects | I's void-resistant questions (PA-28/PA-27/PA-48) become HIGHEST PRIORITY during void events. | MINOR protocol improvement, easy to add |
| PE-010 | Auditor-side hypothetical PA-05 score | Auditor A generates hypothetical score for working content, labeled "(hypothesis)." Companion to ME-019 Weaver-side range. | MINOR nuance |
| PE-014 | Hypothetical cross-validation scores under dominant defects | Cross-validators provide actual + hypothetical scores when dominant defect exists. | MINOR nuance |
| PE-015 | Integrative Auditor inclusion requirement | Always include Integrative Auditor in PA analyses. Currently missing from analysis. | Process note |
| PE-016 | Optimize 9 auditors for diversity under defect conditions | Keep 9 but redirect analysis when void exists. Different from HE-009 (reduce). | Routing nuance |
| File 08 Appendix | PA question for justified vs arbitrary palette deviation | "When you see a visual element that breaks the pattern, does the break SERVE the content?" Addresses purple border disagreement (2 positive, 2 negative, 5 N/A). | Scoring gap |
| HE-012 (lost) | PA-83: "Does the page end cleanly at footer?" | Explicit trailing void PA question lost in merge to ME-007 (which only fixes the gate). | PA coverage gap |
| HE-012 (lost) | Always capture screenshot at scrollHeight - viewportHeight | Absolute bottom-of-page screenshot in every capture run. Lost in merge to ME-007. | Capture protocol gap |
| PE-009 (lost) | Screenshot content matches expected section count from navigation | Check 3 of screenshot validation: structural promise cross-check. Lost in merge to ME-006. | Validation gap |

---

### 3I. COULD Budget Summary

| Sub-Category | Item Count | Total Net Lines |
|-------------|-----------|----------------|
| Gate Severity Restructure (ME-024 to ME-030) | 7 | +50 |
| PA Enrichments (ME-031 to ME-036) | 6 | +38 |
| Builder Recipe (ME-038, ME-040, ME-041) | 3 | +66 |
| Tracking/Docs (ME-042 to ME-046) | 5 | +45 |
| Reservoir Value-System (ME-047 to ME-057) | 11 (10 not in plan + ME-051 in plan) | +62 (excl ME-051) |
| Un-numbered File 07/08 items | 10 | ~+30 est |
| Reservoir STILL-USEFUL (no ME) | ~42 | ~+150 est |
| **TOTAL COULD** | **~84** | **~+441 est** |

**Budget reality:** The 8-change plan uses ~115 of ~240 safe budget lines. ~125 lines remain. The full COULD tier at ~441 lines is 3.5x the remaining budget. Only ~28% of COULD items can fit if budget is respected.

**Highest-ROI COULD items** (from audit-18-21 restoration analysis):
1. ME-054 (dead CSS removal): **-13 lines** — pure subtraction
2. ME-035 + ME-036 (PA question extensions): **+2 lines** — virtually free
3. ME-046 (screenshot recovery): **+5 lines** — completes ME-006
4. ME-038 (px-only borders): **+3 lines** — prevents known GR-09 failures

These 4 items total **-3 net lines** and close the most cost-effective gaps.

---

---


---

## SECTION 4: PRE-IMPLEMENTATION REQUIREMENTS

---

## 4.1 Gate Naming Map (BLOCKING)

**Source:** ADV-2-1, ADV-7A (audit-09-11)

Analysis files reference GR-XX (V3 pipeline gate-runner-core.js) and SC-XX (new pipeline gate-runner.md) interchangeably. No mapping between the two systems exists.

**Why blocking:** An implementer reading the master enrichment list (GR-XX references) and gate-runner.md (SC-XX references) will not know which gates correspond. Every surgery plan assumes this mapping is known.

**Resolution required:** Produce a two-column table mapping every GR-XX to its SC-XX equivalent (or mark as "no equivalent"). Publish in a single reference location.

---

## 4.2 WCAG Palette Conflict Resolution (BLOCKING if ME-003 implemented)

**Source:** ADV-1B-2 through ADV-1B-7 (audit-09-11)

GR-60 (WCAG contrast gate) is REQUIRED tier. Soul-mandated accent colors fail WCAG 4.5:1 on warm backgrounds:
- `#2a7d7d` (muted teal) on `#f0ebe3` = ~4.1:1 -- BELOW 4.5:1 threshold
- `#6b9b7a` (sage green), `#c49052` (warm amber), `#c97065` (muted coral) all in 3:1-5:1 danger zone depending on background

**Why blocking:** WCAG gate will produce REQUIRED failures on colors the soul MANDATES. Infinite REBUILD loop possible.

**Three resolution options (one must be chosen):**

| Option | Description | Trade-off |
|--------|-------------|-----------|
| A | WCAG exemption for designated accent colors used decoratively (non-informational) | Weakens accessibility for accent text |
| B | Revised accent palette with colors passing 4.5:1 on ALL warm backgrounds | Changes visual identity |
| C | WCAG gate at RECOMMENDED tier (not REQUIRED) to avoid blocking builds | Reduces accessibility enforcement |

**Resolution required:** Select Option A, B, or C. Specify exact colors and contrast ratios.

---

## 4.3 Builder Scroll-Reveal Signal Mechanism (BLOCKING for ME-006)

**Source:** ADV-1C-3 (audit-09-11)

ME-006 (screenshot validation) adds a blank-screenshot threshold. Two categories of blank exist:
1. DPR/animation bug -- re-capture fixes it
2. Intentional scroll-triggered content -- re-capture CREATES a problem (forces visibility on hidden content, corrupts layout)

**Why blocking:** Without a builder signal ("This page uses scroll-triggered reveals"), the validation gate cannot distinguish intentional hidden content from broken screenshots.

**Resolution required:** Define a builder signal mechanism (e.g., builder output metadata flag, HTML comment marker, or manifest entry) that exempts pages with scroll-triggered reveals from the blank-screenshot threshold.

---

## 4.4 Detection-to-Fix Gap (BLOCKING for ME-001, ME-003)

**Source:** META-2A-3, META-2B-1 (audit-09-11)

Experiential pass (ME-001) and WCAG gate (ME-003) both DETECT problems but the pipeline has no mechanism to APPLY fixes:
- Gates produce PASS/FAIL, not fixes
- WCAG FAIL on REQUIRED = verdict REBUILD = new builder starts over without receiving specific failure info
- REBUILD builder does not receive gate results (per M-04 context isolation)
- Illegibility requires HTML/CSS redesign, not mechanical fix

**Why blocking:** Detection without a fix mechanism = correctly identified problems that still ship. The causal chain from detection to resolution has a gap at step 5.

**Resolution required:** Either (a) define a mechanism to pass diagnostic info from gates to REBUILD builder, or (b) accept that detection alone has value even without guaranteed fix, and document this explicitly as a known limitation.

---

## 4.5 Zero Tested Enrichments (BLOCKING -- process risk)

**Source:** META-4-3 (audit-09-11)

Every enrichment has been analyzed, cross-referenced, anti-loss-mapped, and adversarially reviewed. None have been TESTED. Analysis produces CONFIDENCE, not EVIDENCE.

**Why blocking:** 57 enrichments justified by N=1 (one pipeline run, one content type). All three buddy reviews independently recommend running the pipeline on different content before implementing enrichments.

**Resolution required:** Accept this risk explicitly OR run a minimal experiment first (DPR fix only, measure PA-05, compare). See ADV-6-1, META-7-2.

---

## 4.6 N=1 Representativeness (BLOCKING -- process risk)

**Source:** META-4-5 (audit-09-11)

All Phase 2+3 analysis is based on ONE page (Gas Town). Findings might be:
- Gas Town-specific (chart = Gas Town artifact, trailing void = Gas Town CSS bug, DPR issue depends on this page's animations)
- Content-type-specific (long-form technical essay has different failure modes than gallery/dashboard/landing)

**Why blocking:** If findings are Gas Town-specific, 57 pipeline-level changes are over-engineered. Phase 3 treats all findings as pipeline-general without evidence.

**Resolution required:** Accept this risk explicitly OR run pipeline on different content type before implementing. Document which enrichments are likely Gas Town-specific vs pipeline-general.

---

## 4.7 Per-File Implementation Architecture (BLOCKING)

**Source:** ADV-5-1, ADV-5-3 (audit-09-11)

Implementer must read 5,000+ lines before writing a single edit: master enrichment list (1,000), style guide (370), gate surgery (400+), manifest surgery (300+), pipeline files being modified (1,436+1,192+237+412+...). This exceeds the context capacity that caused original failures.

**Why blocking:** Compliance degrades by format multiplier. By ME-030, compliance near zero with a single agent.

**Resolution required:** Implementation MUST use 1 agent per target file. Each reads ONLY its surgery plan. Surgery plans must contain EXACT old-text -> new-text diffs. A coordinating agent verifies cross-file consistency AFTER.

---

## 4.8 Wave 0 Subtraction Prerequisite (BLOCKING)

**Source:** SI-BC-01, SI-W0-01 through SI-W0-07 (audit-12-13)

gate-runner-core.js is at 68% compliance with 0 net-addition safe budget. ~170 lines MUST be subtracted before ANY addition:
- GR-33 through GR-35 (Mode Advisory gates) -> move to orchestrator (-45 lines)
- GR-36 through GR-39 (Experiment Tracking gates) -> move to MANIFEST (-40 lines)
- GR-40 through GR-42 (Policy Gates) -> move to MANIFEST (-35 lines)
- GR-08 spec text (no JS implementation exists) -> remove (-30 lines)
- Duplicate component patterns from builder-recipe -> remove (-20 lines)

**Why blocking:** Without freeing ~150 lines from gate-runner-core.js, zero Tier 1 BLOCKING gate additions can proceed. Net-zero is the BINDING constraint.

**Resolution required:** Execute Wave 0 subtraction as the very first implementation step. Verify line count decreased by ~150. Update GR-48 arrays and gate-manifest.json for relocated gates.

---

## 4.9 Capacity Verification for Each Target File (BLOCKING)

**Source:** ISG-HC-01, ISG-CAP-01 through ISG-CAP-09 (audit-12-13)

Total aggregate safe addition capacity across ALL artifacts is ~240 lines. Per-file budgets:

| File | Current Lines | Safe Addition | Compliance | Headroom |
|------|--------------|---------------|------------|----------|
| artifact-tc-brief-template.md | ~224 | +30 | 83.7% | MODERATE |
| artifact-builder-recipe.md | ~934 | +50 | 82% | MODERATE |
| gate-runner-core.js | ~1,437 | **0 net** | 68% | **OVER CAPACITY** |
| artifact-routing.md | ~900 | +40 | 71.4% | MODERATE |
| artifact-orchestrator.md | ~1,058 | +50 | 87% | GOOD |
| artifact-identity-perception.md | ~556 | +20 | 78.8% | LIMITED |
| pa-questions.md + splits | ~1,004 | +30 | 94% | GOOD |
| MANIFEST.md | ~1,193 | +20 | 70.6% | LIMITED |
| artifact-value-tables.md | ~263 | +50 | N/A | GOOD |

**Why blocking:** Each enrichment must be checked against its target file's safe budget before implementation. Exceeding budget degrades compliance.

**Resolution required:** Before each wave, verify running total of net additions per file against capacity table. If over budget, identify lines to subtract first or reroute enrichment to a different file.

---

## 4.10 Brief Bottleneck Constraint (BLOCKING for brief-facing changes)

**Source:** ISG-BTL-01 through ISG-BTL-03 (audit-12-13)

ALL builder-facing enrichments pass through the TC brief (~165 lines). Brief is at the 200-line mode-collapse threshold.

**Why blocking:** Adding builder instructions to the brief template risks crossing the collapse threshold. Builder instructions should go into artifact-builder-recipe.md (934 lines with headroom) instead.

**Resolution required:** Route all builder-facing content to artifact-builder-recipe.md, NOT artifact-tc-brief-template.md. Verify no brief-template changes push past 200-line threshold.

---

## 4.11 Four Cross-File Discrepancies to Resolve (BLOCKING)

**Source:** Cross-file discrepancies section (audit-14-17)

| # | Discrepancy | Resolution |
|---|------------|------------|
| 1 | File 14 proposes GR-05+GR-07 consolidation as ONE merged function; File 17 describes TWO separate functions | File 14 authoritative (single DOM iteration, more line-efficient) |
| 2 | File 15 says 68 total questions (counts PA-07-old retirement); File 16 says 69 (PA-07 doesn't exist) | 3 confirmed retirements only. Net total = 69 if 3 additions applied |
| 3 | File 14 says GR-12 "absorbed into GR-18" (ceases to exist); File 17 says GR-12 downgraded to RECOMMENDED (still executes independently) | Choose one approach. File 14 saves more lines. |
| 4 | File 14 specifies exact final GR-48 arrays; File 17 specifies individual adds/removes per downgrade | File 14's exact arrays are the COORDINATED final state and are authoritative |

**Resolution required:** Confirm all 4 resolutions before implementation begins. Document which file is authoritative for each conflict.

---

## 4.12 Gate Naming Consistency Decisions (BLOCKING)

**Source:** GS-04A-exact1 through GS-04A-exact4 (audit-14-17)

Multiple gate tier changes affect the same arrays. The final coordinated state must be computed once, not applied incrementally:

| Array | Final State After All Changes |
|-------|-------------------------------|
| REQUIRED_GATES (L1332) | GR-01, GR-02, GR-03, GR-04, GR-05, GR-06, GR-08, GR-09, GR-10, GR-11, GR-13, GR-14, GR-15, GR-44, GR-60 |
| RECOMMENDED_GATES (L1338) | GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52 |
| identityGates (L753) | GR-01, GR-02, GR-03, GR-04, GR-05, GR-06, GR-08, GR-09, GR-10 |
| perceptionGates (L756) | GR-11, GR-13, GR-14, GR-15, GR-44, GR-60 |

**Resolution required:** Confirm these exact arrays. Each implementation agent must use these coordinated final states, not apply changes incrementally.

---

## 4.13 PA Surgery Post-Verification Checklist (from File 16 Section 10, lines 622-643)

After ALL PA file changes (ME-001, ME-002, ME-006, ME-009, ME-021-023, ME-032-035, ME-037, ME-057), run this consolidated sweep:

1. Total question count = 69 in ALL locations (pa-questions.md, pa-deployment.md, MANIFEST.md, pa-manifest.md, pa-weaver.md, pa-guardrails.md, EXECUTION-TRACKER-TEMPLATE.md)
2. Auditor A: 8 questions. Auditor B: 7 questions. Auditor C: 10 questions. Auditor D: 7 questions. Auditor E: 8 questions. Auditor F: 5 questions. Auditor G: 8 questions. Auditor H: 8 questions. Auditor I: 8 questions.
3. No retired questions (PA-06, PA-09, PA-40) appear in any file
4. No ME-033 void collapse rule references PA-09 (retired)
5. pa-guardrails.md AP-05 mapping does NOT reference PA-40 (retired)
6. Experiential pass instructions appear in pa-deployment.md ONLY, NOT in pa-questions.md or pa-guardrails.md
7. Aggregation thresholds appear in pa-deployment.md and pa-weaver.md ONLY, NOT in auditor-visible files
8. Zero calibration data (mechanism counts, PA-05 expected scores, tier definitions) in auditor-facing files
9. Fresh-eyes principle NOT violated: no pipeline history, no priming data in auditor prompts
10. New questions (PA-80, PA-81, PA-54) have correct auditor assignments and appear in all 5 locations
11. Pipeline-introspection markers on PA-55, PA-56, PA-69 (if ME-032 implemented)
12. Screenshot validation gate in pa-deployment.md includes CSS override and 4-check validation
13. Defect-bypass protocol in pa-deployment.md (if ME-034 implemented)
14. Footer/header scope extension in PA-02 (if ME-035 implemented)

---

## 4.14 Cumulative Gate Tier Impact (from File 17 lines 354-380)

| Tier | Before All Changes | After All Changes |
|------|-------------------|------------------|
| REQUIRED | 18 | 15 (with GR-60 addition: 16) |
| RECOMMENDED | 8 | 10 |
| ADVISORY | 5 | 8 |

See File 17 lines 354-380 for exact gate-by-gate roster per tier. Changes: GR-07 REQUIRED->RECOMMENDED, GR-12 absorbed into GR-18 (removed), GR-43 REQUIRED->RECOMMENDED, GR-19 RECOMMENDED->ADVISORY, GR-60 added as REQUIRED (if ME-003 implemented).

---

# SECTION 5: IMPLEMENTATION ORDER

Full dependency-respecting order across all enrichments. Based on 7 binding constraints (audit-12-13), file 14/17 implementation sequences, and file 16 PA phasing.

---

## 5.0 Binding Constraints (7 Total)

These constraints MUST be respected -- they define hard ordering dependencies:

| # | Constraint | Source | Consequence if Violated |
|---|-----------|--------|------------------------|
| BC-1 | Gate-runner net-zero: subtraction MUST precede addition | SI-BC-01 | gate-runner-core.js exceeds capacity, compliance drops below split threshold |
| BC-2 | ME-037 + ME-051 atomic: retirements and replacements in one operation | SI-BC-02 | PA question counts become inconsistent across 5+ locations |
| BC-3 | ME-010 (GR-05 split) before ME-003 (GR-60): split establishes opacity-filtering pattern GR-60 reuses | SI-BC-03 | GR-60 cannot reference opacity thresholds that don't exist yet |
| BC-4 | ME-001 before ME-009: experiential pass must exist before aggregation thresholds | SI-BC-04 | Aggregation thresholds reference a protocol that doesn't exist |
| BC-5 | ME-006 before ME-015: screenshot validation must exist before data corruption escalation | SI-BC-05 | Escalation protocol references a gate that doesn't exist |
| BC-6 | Brief-facing content (ME-047-050) AFTER capacity verified | SI-BC-06 | Builder recipe exceeds 1,000 lines |
| BC-7 | All tier reclassifications (ME-024-027) after GR-48 arrays understood | SI-BC-07 | Meta-gate arrays become inconsistent |

---

## 5.1 Wave 0: SUBTRACTION (-170 lines)

> **HIGH RISK mechanisms at risk:** M-13, M-19, M-05, M-06, M-08

> **BUDGET NOTE:** The evidence-based subtraction figure is -60 lines (per File 14 surgery plan, the most detailed source). The -150/-170 figures are from earlier estimates that counted gates using different naming conventions. Use -60 for capacity planning.

**Prerequisite to ALL other waves. Nothing proceeds until Wave 0 is verified.**

| Step | Operation | Target File | Lines Freed |
|------|-----------|-------------|-------------|
| 0.1 | Remove GR-33 through GR-35 (Mode Advisory gates) -> move to orchestrator | gate-runner-core.js | -45 |
| 0.2 | Remove GR-36 through GR-39 (Experiment Tracking gates) -> move to MANIFEST | gate-runner-core.js | -40 |
| 0.3 | Remove GR-40 through GR-42 (Policy Gates) -> move to MANIFEST | gate-runner-core.js | -35 |
| 0.4 | Remove GR-08 spec text (no JS implementation exists) | gate-runner-core.js | -30 |
| 0.5 | Remove duplicate component patterns | artifact-builder-recipe.md | -20 |
| 0.6 | Update GR-48 REQUIRED_GATES and RECOMMENDED_GATES for relocated gates | gate-runner-core.js | 0 |
| 0.7 | Update gate-manifest.json for relocated gates | gate-manifest.json | 0 |

### Wave 0 Verification Checkpoint

- [ ] gate-runner-core.js line count decreased by ~150 (see BUDGET NOTE below — corrected to ~60 per File 14)
- [ ] artifact-builder-recipe.md line count decreased by ~20
- [ ] GR-48 self-check passes with updated arrays (no relocated gates referenced)
- [ ] gate-manifest.json tier arrays no longer include relocated gates
- [ ] Relocated gate logic preserved in destination files (orchestrator, MANIFEST)
- [ ] **Gate-runner capacity after Wave 0: +150 lines available** **BUDGET NOTE:** The evidence-based subtraction figure is -60 lines (per File 14 surgery plan, the most detailed source). The -150/-170 figures are from earlier estimates that counted gates using different naming conventions. Use -60 for capacity planning.
- [ ] **Running total: -170 lines** (see BUDGET NOTE above — corrected figure is -60 lines per File 14)
- [ ] **Anti-loss M-13:** Verify REQUIRED_GATES array still contains ALL non-relocated required gates (no accidental removal)
- [ ] **Anti-loss M-19:** Verify gate-runner-core.js 6 function signatures unchanged (runBriefVerification, runGateRunner, runAntiPatternGates, runWave2Gates, runGateCoverage, checkGateResultIntegrity)
- [ ] **Anti-loss M-19:** Verify result object schema `{ gate, name, status, measured, threshold }` unchanged in ALL remaining gates
- [ ] **Anti-loss M-08:** Verify isCold() at L246-248 unchanged
- [ ] **Anti-loss M-05:** Verify BV-01 regexes at L35-39 unchanged
- [ ] **Anti-loss M-06:** Verify BV-04 regexes at L105-109 unchanged

---

## 5.2 Wave 1: USABILITY PRIORITY INVERSION (8 enrichments, +134 lines)

> **HIGH RISK mechanisms at risk:** M-04, M-06, M-11, M-12, M-13, M-19, M-20, M-22 (ALL 8 touched)

**Depends on:** Wave 0 complete.
**Unlocks:** Wave 3 (experiential pass protocol must exist for aggregation thresholds).

### Parallel Group A (Steps 1.1-1.6 -- independent files, can run in parallel)

| Step | ME | Operation | Target File | Net Lines |
|------|-----|-----------|-------------|-----------|
| 1.1 | ME-001 | Add experiential pass protocol | pa-deployment.md | +18 |
| 1.2 | ME-002 | Add usability priority override in weaver | pa-weaver.md | +14 |
| 1.3 | ME-004 | Add builder usability recipe step (Q0 self-check) | artifact-builder-recipe.md | +12 |
| 1.4 | ME-006 | Add expanded CSS override + screenshot validation gate | pa-deployment.md + orchestrator | +27 |
| 1.5 | ME-008 | Add usability circuit breaker in handoff | MANIFEST.md | +12 |
| 1.6 | ME-009 | Add experiential aggregation thresholds | pa-deployment.md + pa-weaver.md | +15 |

### Sequential Group B (Steps 1.7-1.8 -- gate-runner coordination, must be sequential)

| Step | ME | Operation | Target File | Net Lines |
|------|-----|-----------|-------------|-----------|
| 1.7 | ME-005 | Add MECHANICAL exception to verdict logic | MANIFEST + gate-manifest + gate-runner | +22 |
| 1.8 | ME-007 | Fix GR-44 trailing void measurement | gate-runner-core.js | +10 |

### Wave 1 Verification Checkpoint

- [ ] pa-deployment.md: experiential pass section exists BEFORE question answering
- [ ] pa-deployment.md: screenshot validation gate exists BEFORE auditor deployment
- [ ] pa-weaver.md: usability priority override in weaver-only content (NOT in auditor prompts)
- [ ] artifact-builder-recipe.md: Q0 self-check uses recipe verbs (not checklist verbs)
- [ ] MANIFEST.md: usability circuit breaker present in Phase 3B->3C handoff
- [ ] MANIFEST.md: MECHANICAL exception in verdict logic
- [ ] gate-runner-core.js: GR-44 uses scrollHeight, not body.getBoundingClientRect
- [ ] gate-manifest.json: verdictLogic includes MECHANICAL exception
- [ ] BV-03 check: recipe-to-checklist verb ratio >= 3:1 in modified sections
- [ ] **Running total: -170 + 134 = -36 lines (under budget)** (see Wave 0 BUDGET NOTE — if using corrected -60 figure, running total is -60 + 134 = +74 lines)
- [ ] pa-deployment.md: cumulative line count after ME-001 + ME-006 + ME-009 = ~289 (verify below 300 threshold)
- [ ] MANIFEST.md: cumulative line count after ME-005 + ME-008 (verify below 1,213 + 20 headroom = 1,233)
- [ ] gate-runner-core.js: cumulative line count after ME-005 + ME-007 (verify net-zero maintained)

---

## 5.3 Wave 2: GATE FIXES + GR-60 (12 enrichments, +116 lines)

> **HIGH RISK mechanisms at risk:** M-13, M-19

**Depends on:** Wave 0 complete. Can run in PARALLEL with Wave 1.
**Unlocks:** Wave 5a (gate capacity check after validation build).

### Phase 2A: Existing Gate Fixes (Steps 2.1-2.4 -- independent gates, parallel)

| Step | ME | Operation | Target File | Net Lines |
|------|-----|-----------|-------------|-----------|
| 2.1 | ME-010 | GR-05 split (opacity filter) -- establishes pattern for GR-60 | gate-runner-core.js + gate-manifest | +15 |
| 2.2 | ME-011 | GR-06 rendered font check rewrite | gate-runner-core.js | +2 |
| 2.3 | ME-012 | GR-14 zone-level scoping (structural false positives) | gate-runner-core.js | +3 |
| 2.4 | ME-013 | GR-09 tolerance bands | gate-runner-core.js | +2 |

### Phase 2B: Tier Reclassifications (Steps 2.5-2.8 -- parallel, after GR-48 arrays understood per BC-7)

| Step | ME | Operation | Gate | Old Tier | New Tier |
|------|-----|-----------|------|----------|----------|
| 2.5 | ME-024 | Downgrade GR-07 | GR-07 | REQUIRED | RECOMMENDED |
| 2.6 | ME-025 | Downgrade GR-12 (absorb into GR-18) | GR-12 | REQUIRED | Absorbed/RECOMMENDED |
| 2.7 | ME-026 | Downgrade GR-43 | GR-43 | REQUIRED | RECOMMENDED |
| 2.8 | ME-027 | Downgrade GR-19 | GR-19 | RECOMMENDED | ADVISORY |

### Phase 2C: Threshold Adjustments (Steps 2.9-2.10 -- parallel)

| Step | ME | Operation | Target | Net Lines |
|------|-----|-----------|--------|-----------|
| 2.9 | ME-028 | GR-21 threshold 4->6 + GR-22 skip-link exemption | gate-runner-core.js | +2 |
| 2.10 | ME-029 | GR-17 list item threshold (li from 12px to 4px group) | gate-runner-core.js | 0 |

### Phase 2D: Viewport Namespacing, then GR-60 (sequential -- 2.11 before 2.12 per BC-3)

| Step | ME | Operation | Target | Net Lines |
|------|-----|-----------|--------|-----------|
| 2.11 | ME-030 | GR-48/49 viewport namespacing | gate-runner-core.js | +4 |
| 2.12 | ME-003 | **GR-60 WCAG contrast (NEW REQUIRED gate)** -- LAST, largest addition, depends on ME-010 opacity pattern | gate-runner-core.js + 3 satellites | +70 |

### Phase 2E: Coordinated Array Updates (AFTER all Phase 2A-2D changes)

Apply the COORDINATED final state from File 14 (not incremental changes):
- REQUIRED_GATES array -> exact replacement per GS-04A-exact1
- RECOMMENDED_GATES array -> exact replacement per GS-04A-exact2
- identityGates filter -> exact replacement per GS-04A-exact3
- perceptionGates filter -> exact replacement per GS-04A-exact4
- gate-manifest.json -> all tier counts, verdict logic, execution order updated atomically

### Wave 2 Verification Checkpoint

- [ ] gate-runner-core.js net change: -150 (Wave 0) + ~98 (Wave 2) = **-52 net** (NEGATIVE, as required)
- [ ] GR-48 REQUIRED_GATES array has exactly 15 entries (was 18: -GR-07, -GR-12, -GR-43, +GR-60)
- [ ] GR-48 RECOMMENDED_GATES array has exactly 9 entries (+GR-07, +GR-43, -GR-19)
- [ ] gate-manifest.json: REQUIRED count = 16, RECOMMENDED count = 10, ADVISORY count = 8
- [ ] gate-manifest.json: verdictLogic updated for all tier changes + MECHANICAL exception
- [ ] gate-runner-spec.md: GR-60 row added, tier changes reflected, summary counts updated
- [ ] GR-05 split: isCold() utility shared between GR-05a/GR-05b
- [ ] GR-60: targets correct element set (p, span, a, li, h1-h6, td, th, label, figcaption, etc.)
- [ ] GR-60: WCAG AA thresholds correct (4.5:1 normal text, 3.0:1 large text)
- [ ] No orphan "GR-01-10" range notation remaining (search all files)
- [ ] **Running total: -36 + 116 = +80 lines**
- [ ] **Anti-loss M-13:** Verify REQUIRED_GATES and RECOMMENDED_GATES arrays at L1331-1340 match gate-manifest.json tier arrays EXACTLY
- [ ] **Anti-loss M-19:** Verify ALL result objects in modified gates use `{ gate, name, status, measured, threshold }` schema
- [ ] **Anti-loss M-19:** Verify no function boundary comments deleted or modified
- [ ] **Anti-loss M-08:** Verify isCold() utility shared correctly between GR-05a and GR-05b (no behavioral change in warm palette detection)
- [ ] **Anti-loss M-14:** Verify GR-51 thresholds unchanged (above25Ratio >= 0.50, stddev >= 8, middleHasHighDelta)
- [ ] **Anti-loss M-05:** Verify BV-01 tier minimum values unchanged (12, 6, 40, 32, 24)

---

## VALIDATION BUILD #1 (MANDATORY between Wave 2 and Wave 3)

Run the gate runner against existing V3 Gas Town HTML to verify:
- All modified gates still execute without errors
- GR-60 produces expected results (flag known contrast issues)
- No regression in gates that were not modified
- GR-48 coverage check passes with new arrays

**Do NOT proceed to Wave 3 until validation build passes.**

---

## 5.4 Wave 3: PA ENRICHMENTS (12 enrichments, +81 lines)

> **HIGH RISK mechanisms at risk:** M-04, M-20, M-22

**Depends on:** Wave 1 complete (experiential pass must exist per BC-4, BC-5). Wave 2 NOT required.

### Phase 3A: Atomic PA Swap (Step 3.1 -- FIRST AND ALONE per BC-2)

| Step | ME | Operation | Details |
|------|-----|-----------|---------|
| 3.1 | ME-037 + ME-051 | **ATOMIC:** Retire PA-06, PA-09, PA-40 AND add replacement experiential questions | 5-location update per question (pa-questions.md, pa-deployment.md, MANIFEST.md, pa-manifest.md, EXECUTION-TRACKER-TEMPLATE.md) |

**Verify after 3.1:** Auditor B 8->7->8 (retire PA-06, add PA-81). Auditor C 11->10. Auditor F 6->5. Totals consistent across all 5 locations.

### Phase 3B: New Question Additions (Steps 3.2-3.4 -- parallel, independent)

| Step | ME | Operation | Question | Routing | Lines |
|------|-----|-----------|----------|---------|-------|
| 3.2 | ME-021 | Add navigation usability question | PA-80 | Auditor E (6->7) | +3 in pa-questions + 5-location update |
| 3.3 | ME-022 | Add information extraction question | PA-81 | Auditor B (7->8, net neutral after PA-06 retire) | +3 in pa-questions + 5-location update |
| 3.4 | ME-023 | Add content promise vs delivery question | PA-54 | Auditor G (7->8) | +3 in pa-questions + 5-location update |

### Phase 3C: PA Protocol Modifications (Steps 3.5-3.11 -- parallel, independent)

| Step | ME | Operation | Target | Lines |
|------|-----|-----------|--------|-------|
| 3.5 | ME-015 | Data corruption escalation + BLOCKED BY DEFECT + First-Auditor Halt | pa-deployment + pa-questions | +10 |
| 3.6 | ME-031 | False affordance scan question | pa-questions + satellites | +12 |
| 3.7 | ME-032 | Pipeline-introspection annotations on PA-55, PA-56, PA-69 | pa-questions.md | +3 |
| 3.8 | ME-033 | Void question deduplication (Void Collapse Rule) | pa-questions.md Section 3.6 | +4 |
| 3.9 | ME-034 | Defect-bypass for cross-viewport protocol | pa-deployment.md | +3 |
| 3.10 | ME-035 | Footer/header explicit contrast note on PA-02 | pa-questions.md | +0 (in-cell) |
| 3.11 | ME-036 | Horizontal scroll element-level note | pa-questions.md | +1 |

### Phase 3D: Weaver Enhancement (Step 3.12 -- after ME-001 exists)

| Step | ME | Operation | Target | Lines |
|------|-----|-----------|--------|-------|
| 3.12 | ME-019 | PA-05 score as range + hypothetical scoring | pa-weaver.md | +8 (net 0 after compression) |

### Wave 3 Verification Checkpoint

- [ ] Total PA questions = 69 (69 - 3 retired + 3 added = 69, net zero)
- [ ] No auditor exceeds 12 questions
- [ ] Auditor load balance: A=9, B=8, C=10, D=11, E=7, F=5, G=8, H=5, I=6
- [ ] pa-deployment.md assignment table totals match 69
- [ ] pa-manifest.md checklist totals match 69
- [ ] MANIFEST.md L149-157 roster updated with correct question lists per auditor
- [ ] MANIFEST.md L159 total = 69
- [ ] Experiential pass appears BEFORE question answering in pa-deployment.md
- [ ] Screenshot validation gate appears BEFORE auditor deployment
- [ ] BLOCKED BY DEFECT protocol in auditor-visible pa-questions.md Section 1 preamble
- [ ] Priority Override in pa-weaver.md (NOT in auditor prompts -- fresh-eyes preserved)
- [ ] PA-05 range scoring in pa-weaver.md (NOT in auditor prompts)
- [ ] Void Collapse Rule references correct question IDs (PA-50, PA-33, PA-51)
- [ ] Pipeline-introspection annotations on PA-55, PA-56, PA-69 ONLY
- [ ] Orphan check: ME-033 Void Collapse Rule does NOT reference retired PA-09
- [ ] Orphan check: AP-05 anti-pattern mapping updated (PA-40 replaced with PA-69)
- [ ] No content from Section 4 of pa-questions.md leaked into Sections 1-3
- [ ] Fresh-eyes NOT violated: no tier targets, mechanism counts, or build context in auditor-facing files
- [ ] **Running total: +80 + 81 = +161 lines**

---

## 5.5 Wave 4: BUILDER RECIPE + NON-GATE INFRASTRUCTURE (9 enrichments, +66 lines)

> **HIGH RISK mechanisms at risk:** M-06, M-11, M-12

**Depends on:** Wave 0 complete (builder recipe subtraction). Independent of Waves 1-3.

### Phase 4A: Builder Recipe Additions (Steps 4.1-4.4 -- parallel, all target same file)

| Step | ME | Operation | Net Lines |
|------|-----|-----------|-----------|
| 4.1 | ME-016 | ARIA accessibility recipe step | +8 |
| 4.2 | ME-038 | px-only border width (binary+CSS format) | +3 |
| 4.3 | ME-039 | html color + font stack boilerplate | +8 |
| 4.4 | ME-041 | Trailing void prevention recipe step | +4 |

### Phase 4B: Non-Gate Infrastructure (Steps 4.5-4.9 -- parallel, independent files)

| Step | ME | Operation | Target | Net Lines |
|------|-----|-----------|--------|-----------|
| 4.5 | ME-018 | Gate perceptibility column | gate-manifest.json + gate-runner | +18 |
| 4.6 | ME-020 | Orchestrator self-assessment step | artifact-orchestrator.md | +15 |
| 4.7 | ME-042 | MANIFEST line count updates | MANIFEST.md | 0 |
| 4.8 | ME-043 | Execution tracker fields | EXECUTION-TRACKER-TEMPLATE.md | +5 |
| 4.9 | ME-046 | Screenshot correction protocol | MANIFEST.md | +5 |

### Wave 4 Verification Checkpoint

- [ ] artifact-builder-recipe.md: +23 net (within +50 safe after Wave 0 subtraction of -20)
- [ ] All new builder recipe content uses recipe verbs (Read/Select/Deploy/Assess)
- [ ] No checklist verbs in builder-facing content (no Verify, Fail if, Must be, Ensure, Check that)
- [ ] No gate thresholds or gate-format language in builder-facing content
- [ ] gate-manifest.json perceptibility column does NOT change tier classifications
- [ ] MANIFEST line count values are accurate
- [ ] **Running total: +161 + 66 = +227 lines (within ~240 budget)**

---

## VALIDATION BUILD #2 (MANDATORY between Wave 4 and Wave 5)

Run full pipeline on V3 Gas Town HTML:
- All gates execute without errors
- All PA questions answerable
- Brief assembly produces valid output
- Total line counts verified per file

**Do NOT proceed to Wave 5 until validation build passes.**

---

## 5.6 Wave 5: CONDITIONAL / DEFERRED

**Depends on:** Validation Build #2 results.

### Wave 5a: GR-61 (CONDITIONAL on gate-runner headroom)

| Step | ME | Operation | Condition | Net Lines |
|------|-----|-----------|-----------|-----------|
| 5a.1 | ME-014 | GR-61 min font size (RECOMMENDED) | Only if gate-runner net after Waves 0+2 is <= -50 (50+ lines headroom remaining) | +59 |

### Wave 5b: CONSIDER-Severity Items (implement only if budget allows)

| Step | ME | Operation | Net Lines |
|------|-----|-----------|-----------|
| 5b.1 | ME-047 | 3 background registers (builder recipe) | +4 |
| 5b.2 | ME-048 | Unique element per zone (builder recipe) | +3 |
| 5b.3 | ME-049 | Dark moments (builder recipe) | +3 |
| 5b.4 | ME-050 | Spacing compression range (builder recipe) | +3 |
| 5b.5 | ME-052 | Audience description (pa-deployment) | +3 |
| 5b.6 | ME-054 | Remove dead CSS (components.css / tokens.css) | -13 |

**NOT in Wave 5 (per BC-6 and red lines):**
- ME-053 (container width exceptions) -- contradicts NON-NEGOTIABLE constraint

### Wave 5c: PERMANENTLY DEFERRED (do not implement)

| ME | Reason |
|----|--------|
| ME-017 | Architectural change (Red Line 1 violation) -- requires separate validation cycle |
| ME-040 | GR-62 text overflow -- gate-runner cannot absorb without SECOND subtraction round |
| ME-044 | Low-priority prose documentation (20 effective lines for 10 actual) |
| ME-045 | Low-priority prose documentation (30 effective lines for 15 actual) |
| ME-055 | PA question budget consumed by Wave 3 |
| ME-056 | Requires new file creation -- route to separate reference file if ever needed |

---

## 5.7 Implementation Summary

| Wave | Purpose | Enrichments | Net Lines | Running Total | Validation Required |
|------|---------|-------------|-----------|---------------|---------------------|
| 0 | SUBTRACTION | 7 steps | -170 | -170 | Yes (line count + arrays) |
| 1 | Usability Priority Inversion | 8 ME | +134 | -36 | Yes (protocol + verdict) |
| 2 | Gate Fixes + GR-60 | 12 ME | +116 | +80 | **VALIDATION BUILD #1** |
| 3 | PA Enrichments | 12 ME | +81 | +161 | Yes (question totals) |
| 4 | Builder Recipe + Infrastructure | 9 ME | +66 | +227 | **VALIDATION BUILD #2** |
| 5 | Conditional / Deferred | 7+ ME | variable | variable | Per-item |

**Critical path:** Wave 0 -> (Wave 1 AND Wave 2 in PARALLEL) -> Validation Build #1 -> Wave 3 (depends on Wave 1) -> Wave 4 (independent) -> Validation Build #2 -> Wave 5

**Parallelism opportunities:**
- Waves 1 and 2 run in PARALLEL after Wave 0
- Within Wave 1: Steps 1.1-1.6 parallel, 1.7-1.8 sequential
- Within Wave 2: Steps 2.1-2.4 parallel, 2.5-2.8 parallel, 2.11 before 2.12
- Within Wave 3: Step 3.1 FIRST AND ALONE, 3.2-3.4 parallel, 3.5-3.11 parallel
- Within Wave 4: Steps 4.1-4.4 parallel, 4.5-4.9 parallel
- Wave 4 can run in parallel with Wave 3

**Total: 41 of 57 enrichments in Waves 0-4 (72%). 7 permanently deferred. 9 conditionally deferred.**
**Gate-runner-core.js net: -150 + 10 + 98 = -42 lines (net NEGATIVE, as required).**
**Grand total net: +227 lines (within ~240 budget, 13 lines headroom).**

---

## SECTION 6: GLOBAL FORMATTING RULES

---

## 6.1 Recipe vs Checklist Verbs

### Allowed Verbs (Recipe)

These are the ONLY verbs permitted in builder-facing content (artifact-builder-recipe.md, TC brief, builder prompt):

```
Build | Create | Derive | Map | Read | Select | Deploy | Assess
```

### Prohibited Verbs (Checklist)

These verbs MUST NOT appear in builder-facing content. BV-03 (gate-runner-core.js L93-102) programmatically scans for them:

```
Verify | Fail if | Must be | Ensure | Check that
```

### BV-03 Enforcement (ISG-RCP-09)

- **Mechanism:** BV-03 counts recipe verbs vs checklist verbs in the Brief Assembler output
- **Threshold:** >= 3:1 recipe-to-checklist verb ratio (with Infinity handling when checklist count = 0)
- **Location:** gate-runner-core.js L93-102
- **Recipe verb regex:** `Build|Create|Derive|Map|Read|Select|Deploy|Assess` (L94)
- **Checklist verb regex:** `Verify|Fail if|Must be|Ensure|Check that` (L95)

### ISG-RCP Rules (Complete List)

| Rule | Description | Tier |
|------|-------------|------|
| ISG-RCP-01 | Sequenced steps with Read/Select/Deploy/Assess verbs | MUST |
| ISG-RCP-02 | Each instruction has a concrete CSS example or value reference | MUST |
| ISG-RCP-03 | No checklist verbs: Verify, Fail if, Must be, Ensure, Check that | MUST |
| ISG-RCP-04 | Step format: `### Step N.M: [Action Verb] [What]` then Read/Select/Deploy/Assess blocks | SHOULD |
| ISG-RCP-05 | Anti-pattern: Prose paragraphs without action verbs ("The builder should consider...") | MUST |
| ISG-RCP-06 | Anti-pattern: Gate-format language ("Verify that all backgrounds differ by >= 15 RGB") | MUST |
| ISG-RCP-07 | Anti-pattern: Prohibition framing ("Do NOT use cold colors") -- use world-description instead ("Your palette is warm: R >= G >= B") | MUST |
| ISG-RCP-08 | Anti-pattern: Naked thresholds without calibration ranges ("delta >= 15" without "15 = floor, 25 = confident, 50 = dramatic") | MUST |
| ISG-RCP-09 | BV-03 enforcement: Brief Assembler output checked for 3:1 recipe-to-checklist verb ratio | MUST |

### Anti-Pattern Examples

| BAD (Checklist) | GOOD (Recipe) |
|------------------|---------------|
| "Verify that text is readable at arm's length" | "Assess whether text is readable at arm's length" |
| "Ensure the font stack matches exactly" | "Deploy the font stack as shown" |
| "Must be at least 16px font size" | "Select body font-size starting at 16px" |
| "Fail if backgrounds differ by < 15 RGB" | "Read the value tables and select backgrounds with deltas of 15+ RGB (15 = floor, 25 = confident, 50 = dramatic)" |
| "Check that no cold colors are used" | "Build your palette from warm tones: R >= G >= B" |
| "Do NOT use pure black" | "Your text color is soft dark: deploy #1A1A1A" |

---

## 6.2 Anti-Skimming Formatting

### BV-04 Suppressor Scan (M-06)

BV-04 programmatically scans brief-facing content for 4 suppressor regex patterns (gate-runner-core.js L104-117):

| Pattern | Regex | Catches |
|---------|-------|---------|
| S-01 | `sample\s+\d+-\d+` | "sample 2-4 mechanisms" language that limits vocabulary |
| S-02 | `must\s+not\|shall\s+not\|never\s+use` | Prohibition framing that makes builder cautious |
| S-03 | `verify\s+that\|fail\s+if\|must\s+be` | Gate-format language in builder content |
| S-04 | `>=?\s*\d+\s+channels?` | Channel count thresholds in builder content |

**Rule:** If BV-04 triggers, fix the CONTENT, never weaken the gate.

### BV-01 Tier Budget Enforcement (M-05)

BV-01 (gate-runner-core.js L29-67) enforces minimum line counts per brief tier:

| Tier | Regex | Minimum Lines (80% threshold) |
|------|-------|-------------------------------|
| Tier 1 | `/^#+\s*Tier\s*1/im` | >= 12 |
| Tier 2 | `/^#+\s*Tier\s*2/im` | >= 6 |
| Tier 3 | `/^#+\s*Tier\s*3/im` | >= 40 |
| Tier 4 | `/^#+\s*Tier\s*4/im` | >= 32 |
| Content Map | `/^#+\s*Content\s*Map/im` | >= 24 |

**Risk:** If tier header format changes, regexes fail silently = false PASS on under-specified briefs.

### Visual Break Patterns

- Never more than 3-4 paragraphs without a visual break in prose content
- Section headers in builder-facing content should be action-oriented (`### Step N.M: [Verb] [What]`)
- Every Tier 4 disposition in TC brief MUST have at least 1 concrete CSS property:value pair (ISG-TCB-04)

### Anti-Skimming Formatting Techniques (for New Enrichment Content)

When writing enrichment content that will be processed by LLM agents:

| Technique | Why | Example |
|-----------|-----|---------|
| Headers every 50 lines max | Prevents scroll-past in long prose | `### Step 2.3: Deploy Zone Backgrounds` |
| Bold inline parameters | Eye-catch for scanning agents | `delta of **15+ RGB** points` |
| Tables for multi-column data | Structured > prose for parameter extraction | `| Color | Hex | Delta |` rows |
| Numbered steps for sequences | Agents track position in sequence better than in paragraphs | `1. Read...  2. Select...  3. Deploy...` |
| CRITICAL/WARNING before content | Agents that skim see the flag even if they miss the body | `**CRITICAL:** The following 3 values are LOCKED...` |
| Concrete CSS after every instruction | Agents copy CSS directly; prose requires interpretation | `Deploy: background: #FEF9F5;` |

---

## 6.3 Information Isolation

### M-04: Context Isolation Rules

M-04 is the MOST at-risk mechanism during implementation. Fragility: **CRITICAL**.

**Locations:** MANIFEST.md L859-868 (exclusion table), L301-304 (PA isolation), pa-deployment.md L92, L201-221 (fresh-eyes), pa-guardrails.md L119-137, pa-questions.md L312-316 (Section 4 WEAVER USE ONLY), artifact-orchestrator.md L131-143 (builder isolation)

### What CANNOT Leak Between Roles

| FROM | TO Builder | TO PA Auditors | TO Weaver |
|------|-----------|----------------|-----------|
| Gate thresholds (PASS/FAIL format) | BLOCKED | N/A | Allowed |
| Calibration ranges (15=floor, 50=dramatic) | Allowed | BLOCKED | Allowed |
| PA-05 expected scores | BLOCKED | BLOCKED | Allowed (Section 4) |
| Mechanism counts / tier definitions | BLOCKED | BLOCKED | Allowed (Section 4) |
| Build plan details | N/A | BLOCKED | N/A |
| Pipeline failure history | BLOCKED | BLOCKED | BLOCKED |
| Prior experiment results | BLOCKED | BLOCKED | BLOCKED |
| Verdict logic | BLOCKED | BLOCKED | Allowed |
| Screenshot validation results | N/A | BLOCKED | Allowed |
| AP anti-pattern mappings | BLOCKED | BLOCKED | Allowed |

> **Design note:** The Weaver receives PA-05 calibration targets (correct per M-04 boundaries). Whether these targets should be presented BEFORE or AFTER auditor report synthesis to avoid anchoring is an open design question. Current design: Weaver receives targets as part of its standard context.

### Dual-Channel Boundaries (M-02)

- **Channel 1 (Lossless Universal):** Identity constraints, soul constraints -- delivered verbatim through MANIFEST routing
- **Channel 2 (Regenerated Content):** TC brief -- compressed through Brief Assembler with BV verification
- Builder sees calibration (15=floor, 25=confident, 50=dramatic), NOT thresholds (>=15 PASS, <15 FAIL)
- Gate runner sees thresholds, NOT calibration

### Fresh-Eyes Protection (M-20)

**Location:** pa-deployment.md L201-221

- Auditor receives ONLY: screenshots + PA questions + nothing else
- pa-questions.md Sections 1-3 are auditor-facing: ZERO calibration data, ZERO mechanism counts, ZERO tier definitions
- pa-questions.md Section 4 is WEAVER USE ONLY -- contains calibration, scoring criteria, anti-pattern mappings
- Adding calibration data to Sections 1-3 is **Red Line 6** (ISG-RL-06)

### Per-Change Isolation Checks

| Change | Isolation Risk | What to Verify |
|--------|---------------|----------------|
| ME-001 | HIGH -- adds content to pa-deployment.md that auditors read | Experiential pass instructions contain NO tier definitions, NO PA-05 scores, NO mechanism counts |
| ME-004 + ME-039 | HIGH -- adds content to builder-facing recipe | No gate thresholds in PASS/FAIL format; world-description framing only |
| ME-006 | MEDIUM -- screenshot validation results | Validation stays in orchestrator files, NOT auditor files |
| ME-037+ME-051 | HIGH -- modifies auditor-facing pa-questions.md | New questions contain ZERO calibration data; use perceptual language |

---

## 6.4 Conviction Language

### World-Description Framing (M-12)

**Principle:** Tell the builder what the WORLD IS, not what they MUST NOT DO.

**Location:** MANIFEST.md L188-190, L198, L863-864; artifact-builder-recipe.md L13; gate-runner-core.js L107 (BV-04 S-02 pattern)

| BAD (Prohibition) | GOOD (World-Description) |
|--------------------|--------------------------|
| "Do NOT use cold colors" | "Your palette IS warm: R >= G >= B" |
| "Never use pure black" | "Your text color is soft dark: #1A1A1A" |
| "Must not exceed 960px container" | "Your container lives at 960px" |
| "Fail if backgrounds differ by < 15 RGB" | "Backgrounds speak in deltas of 15+ RGB points (15 = floor, 25 = confident, 50 = dramatic)" |
| "Must be at least 12 mechanisms" | "Your composition uses 12+ mechanisms from the catalog" |

### Binary Rule Format (M-13)

- All rules output PASS or FAIL -- no partial scores, no "PASS*", no "PARTIAL"
- ISG-GR-05: Anti-pattern -- returning anything other than 'PASS' or 'FAIL' for status
- Gate result schema: `{ gate: 'GR-XX', name: '...', status: 'PASS'|'FAIL', measured: {...}, threshold: {...} }`
- Binary rules achieve 100% agent compliance; judgment rules achieve ~0%

### Auditor Question Language

- Perceptual verbs: "Does...?" "Is there...?" "Can you...?"
- NOT measurement verbs: "Verify that..." "Is count >= N?"
- Evidence format: YES/NO/CONDITIONAL + screenshot reference + description
- No judgment scales ("Rate 1-5") -- binary only (ISG-PA-04)

### Weaver Verdict Language

- Weaver CAN use judgment verbs (weaver IS the judgment agent)
- But binary overrides should be binary: "If text illegibility reported -> REFINE regardless of other scores"
- Verdict logic uses prioritized decision tree format, not subjective language

---

## 6.5 File Splitting Thresholds

### When to Split (ISG-SPL-01 through ISG-SPL-03)

A file needs splitting when ANY of these conditions are met:

| Condition | Threshold | Rule ID |
|-----------|-----------|---------|
| Compliance drops below | 65% | ISG-SPL-01 |
| Single agent must process entire file AND file exceeds | 1,000 lines | ISG-SPL-02 |
| File serves multiple agent roles | N/A | ISG-SPL-03 |

### When NOT to Split (ISG-SPL-04 through ISG-SPL-06)

| Condition | Rule ID |
|-----------|---------|
| Reference document read selectively (e.g., value tables) | ISG-SPL-04 |
| Serves single agent role regardless of length | ISG-SPL-05 |
| Content is structurally independent per section | ISG-SPL-06 |

### Current File Compliance

| File | Lines | Compliance | Safe +Lines | Headroom | Fragility |
|------|-------|-----------|-------------|----------|-----------|
| gate-runner-core.js | ~1,437 | 68% | **0 net** | OVER CAPACITY | CRITICAL |
| artifact-builder-recipe.md | ~934 | 82% | +50 | MODERATE | ROBUST |
| MANIFEST.md | ~1,193 | 70.6% | +20 | LIMITED | FRAGILE (routing) |
| artifact-orchestrator.md | ~1,058 | 87% | +50 | GOOD | ROBUST |
| artifact-routing.md | ~900 | 71.4% | +40 | MODERATE | N/A |
| artifact-identity-perception.md | ~556 | 78.8% | +20 | LIMITED | N/A |
| pa-questions.md | ~418 (~1,004 with splits) | 94% | +30 | GOOD | ROBUST (S1-3) / FRAGILE (S4) |
| artifact-tc-brief-template.md | ~224 | 83.7% | +30 | MODERATE | ROBUST (content) / CRITICAL (headers) |
| artifact-value-tables.md | ~263 | N/A (reference) | +50 | GOOD | ROBUST |
| EXECUTION-TRACKER-TEMPLATE.md | ~328 | N/A | Unlimited | GOOD | ROBUST |
| pa-deployment.md | ~237 | N/A | +30 | PA family | FRAGILE (assignments) |
| gate-manifest.json | ~159 | N/A | +10 | LIMITED | FRAGILE |
| gate-runner-spec.md | ~188 | N/A | +15 | MODERATE | N/A |
| pa-manifest.md | ~89 | N/A | +10 | MODERATE | N/A |

**Alert:** gate-runner-core.js at 68% is 3 points above the 65% split threshold. Adding ME-003+ME-014+ME-040 (+180 lines) without subtraction would push to ~62-64% (below split threshold). The subtraction-before-addition constraint (ISG-HC-04) prevents this.

---

## 6.6 Per-File Formatting Templates

### Template: gate-runner-core.js Changes

```javascript
// GR-XX: [Gate Name]
// [One-line description]
try {
  const result = await page.evaluate(() => {
    // Use window.isRenderedElement() for filtering
    // DOM access logic here
    return { measured: {...}, threshold: {...} };
  });
  results.push({
    gate: 'GR-XX',
    name: '[Gate Name]',
    status: result.measured >= result.threshold ? 'PASS' : 'FAIL',
    measured: result.measured,
    threshold: result.threshold
  });
} catch (err) {
  results.push({
    gate: 'GR-XX',
    name: '[Gate Name]',
    status: 'FAIL',
    measured: 'Error: ' + err.message,
    threshold: '[threshold description]'
  });
}
```

**Coordinated updates required (ISG-GR-09 through ISG-GR-15):**

1. Gate code in correct function (`runGateRunner` / `runAntiPatternGates` / `runWave2Gates`)
2. GR-48 REQUIRED or RECOMMENDED array (L1331-1340)
3. gate-manifest.json L18-52 tier classification
4. gate-manifest.json L62-111 execution order (if new step)
5. gate-runner-spec.md human-readable specification row
6. MANIFEST.md L244-267 Section 3 routing table
7. MANIFEST.md L275-285 verdict logic (if new category)

### Template: MANIFEST.md Changes

**Routing entry (Appendix B):**
```
| [Agent Role] | [File 1] + [File 2] + ... (~[N] lines) |
```

**Exclusion rule (Appendix B negative table):**
```
| [Agent Role] | "[What must NOT be included]" | [Reason] |
```

**Anti-patterns:**
- Adding content to MANIFEST prose sections when it belongs in an artifact file (ISG-MAN-03)
- Modifying Appendix E prompt templates without verifying `{VARIABLE}` placeholders still work (ISG-MAN-04)
- Changing verdict logic in MANIFEST without updating gate-manifest.json (ISG-MAN-05)

### Template: pa-deployment.md Changes

Follow ORCHESTRATOR DECISION TREE format:
```markdown
### Phase [N].[M]: [Step Name]
**Input:** [What this step receives]
**Action:** [What the orchestrator does]
**Output:** [What this step produces]
**Verification:** [How to confirm success]
**If FAIL:** [Recovery path]
```

### Template: artifact-builder-recipe.md Changes

Follow RECIPE FORMAT:
```markdown
### Step N.M: [Action Verb] [What]

**Read:** [What reference to consult]
**Select:** [What to choose from reference]
**Deploy:** [Exact CSS or HTML to write]
**Assess:** [Self-check in world-description framing]
```

**Anti-patterns (ISG-RCP-05 through ISG-RCP-08):**
- Prose paragraphs without action verbs
- Gate-format language
- Prohibition framing
- Naked thresholds without calibration ranges

### Template: pa-questions.md Changes

```markdown
**PA-[NN]: [Question text ending in ?]**
- Evidence: YES / NO / CONDITIONAL
- Viewport: [1440px / 768px / both]
- Assigned to: Auditor [Letter]
```

**Anti-patterns (ISG-PA-03, ISG-PA-04):**
- Adding calibration data or quality tiers to Sections 1-3 (violates fresh-eyes M-20)
- Adding judgment-scale questions ("Rate 1-5") instead of binary YES/NO

**Propagation required (ISG-PA-05 through ISG-PA-08):**
1. pa-deployment.md assignment table
2. MANIFEST.md agent roster
3. pa-manifest.md checklist
4. Question totals (appear in 3+ locations)

### Template: pa-weaver.md Changes

Follow VERDICT PROTOCOL format. Weaver instructions can use judgment verbs. Binary overrides use decision-tree format:
```markdown
**Override [N]: [Condition]**
IF [binary condition] THEN [verdict] regardless of [other criteria].
```

---

## 6.7 Format Multiplier Model

### Multiplier Table (ISG-FMM-01 through ISG-FMM-04)

| Format Type | Multiplier | Impact per Line | Example |
|-------------|-----------|-----------------|---------|
| Binary + CSS value | **0.5x** | Half normal degradation | `background: #FEF9F5; /* delta: 28 RGB */` |
| Recipe-format steps | **1.0x** | Neutral (baseline) | `### Step 2.1: Deploy warm background pair` |
| Prose instructions | **2.0x** | Double degradation | "The builder should consider the relationship between..." |
| Judgment-requiring | **3.0x** | Triple degradation | "If the page feels insufficiently rich, add more mechanisms" |

### Budget Calculation Process (ISG-FMM-05)

Before adding ANY enrichment:

1. **Count** net lines (added minus removed)
2. **Classify** by format type (binary+CSS / recipe / prose / judgment)
3. **Multiply:** `effective_lines = net_lines x format_multiplier`
4. **Compare** against file's safe budget
5. **If over:** subtract first OR route content to a file with more headroom

### Example Calculations

| Enrichment | Net Lines | Format | Multiplier | Effective Lines |
|------------|----------|--------|-----------|-----------------|
| ME-004 (Q0 self-check) | +12 | Recipe | 1.0x | 12 |
| ME-039 (boilerplate CSS) | +8 | Binary+CSS | 0.5x | 4 |
| ME-001 (experiential pass) | +18 | Recipe | 1.0x | 18 |
| ME-017 (Phase 4 prose) | +15 | Prose | 2.0x | 30 |
| ME-045 (context budget) | +15 | Prose | 2.0x | 30 |

**Implication:** Route all enrichments toward binary+CSS format wherever possible. A 10-line CSS snippet costs 5 effective lines; a 10-line prose paragraph costs 20. This is a 4:1 efficiency difference.

### Content Routing Decision Tree (ISG-RTG-01 through ISG-RTG-06)

| Content Type | Route To | Format |
|-------------|----------|--------|
| Specifies CSS property:value pair | artifact-builder-recipe.md (recipe step) | Binary+CSS (0.5x) |
| Perception threshold | artifact-identity-perception.md (calibration) + gate-runner-core.js (binary check) | Binary+CSS (0.5x) |
| Brief structure change | artifact-tc-brief-template.md (template) | Recipe (1.0x) |
| Process/decision change | artifact-orchestrator.md (phase step) | Recipe (1.0x) |
| Reference value | artifact-value-tables.md (value pair) | Binary+CSS (0.5x) |
| None of the above | Reconsider whether the enrichment is needed | N/A |

---

## 6.8 Red Lines (9 Absolute Constraints)

These changes require a separate architectural validation cycle. They CANNOT be implemented as standard enrichments.

| Red Line | Description | Rule ID |
|----------|-------------|---------|
| 1 | NEVER change the number of pipeline phases | ISG-RL-01 |
| 2 | NEVER change the brief line budget totals | ISG-RL-02 |
| 3 | NEVER change BV gate thresholds downward | ISG-RL-03 |
| 4 | NEVER remove any mechanism rated HIGHLY EFFECTIVE | ISG-RL-04 |
| 5 | NEVER change the builder's creative authority band (80%) | ISG-RL-05 |
| 6 | NEVER add calibration data to auditor-visible files | ISG-RL-06 |
| 7 | NEVER modify `isCold()` formula without full palette validation | ISG-RL-07 |
| 8 | NEVER change GR-48 REQUIRED_GATES to a smaller list | ISG-RL-08 |
| 9 | NEVER remove the dual-route pattern for any soul constraint | ISG-RL-09 |

---

## 6.9 Pre-Flight Checklist (Every Enrichment)

Before implementing ANY enrichment, complete ALL 7 preconditions (ISG-PFC-01 through ISG-PFC-07):

- [ ] **PFC-01:** Identify target file(s) and check the capacity table (Section 6.5)
- [ ] **PFC-02:** Identify anti-loss mechanisms in blast radius using the 5 interdependency clusters (Section 7)
- [ ] **PFC-03:** Classify enrichment format (binary+CSS / recipe / prose / judgment) and compute effective lines (Section 6.7)
- [ ] **PFC-04:** Check if net addition exceeds safe budget -- if yes, identify lines to subtract first
- [ ] **PFC-05:** If targeting gate-runner-core.js: identify equal or greater subtraction. Net-zero is MANDATORY.
- [ ] **PFC-06:** If targeting brief-facing content: verify NO checklist verbs, NO suppressor patterns, NO prohibition framing
- [ ] **PFC-07:** If targeting auditor-facing content: verify NO calibration data, NO tier definitions, NO build intent

---

## 6.10 Post-Implementation Verification (Every Enrichment)

After implementing ANY enrichment, complete ALL 7 checks (ISG-PIV-01 through ISG-PIV-07):

- [ ] **PIV-01:** Format check -- does the modified section still use recipe verbs (not checklist verbs)?
- [ ] **PIV-02:** Capacity check -- count net lines added, update running total against 240-line budget
- [ ] **PIV-02b:** Per-file compliance check -- if the edited file's new line count pushes compliance below 65% (see Section 6.5 table), the file needs splitting or prior subtraction
- [ ] **PIV-03:** Cross-reference check -- if changed a threshold, update ALL locations (gate-runner-core.js + gate-runner-spec.md + gate-runner-preconditions.md + MANIFEST quickstart)
- [ ] **PIV-04:** Isolation check -- does any new content leak to an agent that should not see it? (Check MANIFEST Appendix B exclusion table)
- [ ] **PIV-05:** Regex check -- if changed any header format, do BV-01 tier regexes (gate-runner-core.js L35-39) still match?
- [ ] **PIV-06:** GR-48 check -- if added a gate, is it in REQUIRED_GATES or RECOMMENDED_GATES?
- [ ] **PIV-07:** Question count check -- if added PA questions, are totals updated in pa-deployment.md, pa-manifest.md, and MANIFEST?

---
---

# SECTION 7: ANTI-LOSS VERIFICATION CHECKLIST

---

## 7.0 Mechanisms by Risk Level

| Risk Level | Mechanisms | Reason |
|------------|-----------|--------|
| **HIGH RISK** (directly modified by 8-change plan) | M-04, M-06, M-11, M-12, M-13, M-19, M-20, M-22 | Multiple changes touch these mechanisms' enforcement files |
| **MEDIUM RISK** (indirectly affected) | M-02, M-07, M-08, M-09, M-21, M-23, M-25 | Adjacent to changes; cascade effects possible |
| **LOW RISK** (not affected) | M-01, M-03, M-05, M-10, M-14, M-15, M-16, M-17, M-18, M-24 | No changes interact with these |

---

## 7.1 All 25 Mechanisms

### STRUCTURAL MECHANISMS (M-01 through M-06)

---

#### M-01: Artifact Decomposition
- **Location:** MANIFEST.md L91-102 (layer table), L179-342 (routing), L912-958 (file registry); gate-manifest.json L7-15 (files); pa-deployment.md L4-5 (split declaration)
- **Fragility:** ROBUST
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] Count artifact files in `ephemeral/va-extraction/` -- verify each appears in MANIFEST Section 3 + Appendix D
  - [ ] Verify no changes add/remove/rename artifact files
- **Anti-skimming pattern used:** N/A (structural architecture)
- **Information isolation dependency:** Enables M-04 by keeping files separable
- **Conviction language used:** N/A

---

#### M-02: Dual-Channel Architecture
- **Location:** MANIFEST.md L196-198 (dual-route description), L764, L795-797; artifact-orchestrator.md L233-242 (Channel 1/2 definitions); artifact-builder-recipe.md L62-63 (direct file routes)
- **Fragility:** ROBUST
- **Risk classification:** MEDIUM
- **What to check after implementation:**
  - [ ] After ME-005: verify MANIFEST L196-198 dual-route pattern text is unchanged
  - [ ] Verify builder prompt template still contains calibration context, not gate thresholds
  - [ ] Verify Channel 1 (lossless universal) and Channel 2 (regenerated content) boundaries intact
- **Anti-skimming pattern used:** N/A (architectural pattern)
- **Information isolation dependency:** YES -- dual-route IS how isolation works for thresholds. Builder sees calibration; gate sees binary.
- **Conviction language used:** N/A

---

#### M-03: Direct File Injection
- **Location:** MANIFEST.md L853 (builder receives tokens.css + components.css + mechanism-catalog.md + value tables), L1044-1045, L1083-1089; artifact-builder-recipe.md L23-25, L55-57, L62-63 ("direct file routes"); EXECUTION-TRACKER-TEMPLATE.md L36-38, L118-123
- **Fragility:** ROBUST
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] Verify artifact-builder-recipe.md L62-63 still says "direct file routes bypassing the brief" after ME-004 and ME-039 edits
  - [ ] Verify no new ME-004/ME-039 content accidentally routes through the brief instead of direct injection
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** Direct injection BYPASSES brief compression -- intentional design
- **Conviction language used:** N/A

---

#### M-04: Per-Agent Context Isolation
- **Location:** MANIFEST.md L859-868 (exclusion table), L301-304 (PA isolation); pa-deployment.md L92, L201-221 (fresh-eyes); pa-guardrails.md L119-137; pa-questions.md L312-316 (Section 4 WEAVER USE ONLY); artifact-orchestrator.md L131-143 (builder isolation)
- **Fragility:** **CRITICAL**
- **Risk classification:** **HIGH**
- **What to check after implementation:**
  - [ ] After ME-001: experiential pass instructions contain NO tier definitions, NO PA-05 expected scores, NO mechanism counts
  - [ ] After ME-037+ME-051: retired questions removed cleanly from Sections 1-3; new questions contain NO calibration data
  - [ ] After ME-006: screenshot validation info stays in orchestrator files (pa-deployment.md), NOT auditor files (pa-questions.md)
  - [ ] MANIFEST L859-868 exclusion table is unchanged
  - [ ] No content leaks across role boundaries (builder/auditor/weaver)
- **Anti-skimming pattern used:** N/A (isolation is structural, file-level separation)
- **Information isolation dependency:** THIS IS the information isolation mechanism -- most at-risk during this implementation wave
- **Conviction language used:** N/A

---

#### M-05: Tiered Brief Structure
- **Location:** gate-runner-core.js L29-67 (BV-01 code), L34-40 (tier header patterns: T1>=12, T2>=6, T3>=40, T4>=32, CM>=24 at 80%); MANIFEST.md L28-33, L404-408; gate-runner-preconditions.md L14-19
- **Fragility:** **CRITICAL** (gate-runner-core.js) / ROBUST (markdown)
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] gate-runner-core.js L35-39 tier regexes unchanged (`/^#+\s*Tier\s*1/im` etc.)
  - [ ] BV-01 min values unchanged (12, 6, 40, 32, 24)
  - [ ] No tier header format changes in any file
- **Anti-skimming pattern used:** BV-01 IS the anti-skimming mechanism for under-budgeted brief tiers
- **Information isolation dependency:** N/A
- **Conviction language used:** N/A (JavaScript code)

---

#### M-06: Suppressor Management
- **Location:** gate-runner-core.js L104-117 (BV-04 code), L105-109 (4 suppressor regex patterns); artifact-orchestrator.md L42; MANIFEST.md L32; gate-runner-preconditions.md L37-46
- **Fragility:** **CRITICAL** (regex patterns)
- **Risk classification:** **HIGH**
- **What to check after implementation:**
  - [ ] After ME-004 and ME-039: scan ALL new text in artifact-builder-recipe.md for BV-04 trigger patterns
  - [ ] No `sample N-N` phrases in new content
  - [ ] No `must not`/`shall not`/`never use` in new content
  - [ ] No `verify that`/`fail if`/`must be` in new content
  - [ ] No `>= N channels` in new content
  - [ ] New content uses recipe verbs: Build/Create/Derive/Map/Read/Select/Deploy/Assess
- **Anti-skimming pattern used:** BV-04 IS the anti-skimming enforcement for suppressor language
- **Information isolation dependency:** Suppressor scan applies ONLY to brief-facing content. ME-002 targets pa-weaver.md (weaver-facing) -- safe from BV-04.
- **Conviction language used:** **CRITICAL** -- ME-004/ME-039 content MUST use recipe verbs, not checklist verbs. "Assess whether text is readable" (recipe) NOT "Verify that text is readable" (suppressor).

---

### ROUTING MECHANISMS (M-07 through M-10)

---

#### M-07: MANIFEST-Driven Routing
- **Location:** MANIFEST.md L849-857 (positive routing), L859-868 (negative routing), L179-342 (Section 3 routing table); EXECUTION-TRACKER-TEMPLATE.md L54-58, L83-91, L117-127, L190-195
- **Fragility:** ROBUST
- **Risk classification:** MEDIUM
- **What to check after implementation:**
  - [ ] After ME-005: MANIFEST Section 3 routing table (L179-342) is completely unchanged
  - [ ] After ME-037+ME-051: auditor question lists in MANIFEST L149-157 updated correctly
  - [ ] After ALL changes: verify MANIFEST Section 3 routing table unchanged
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** M-07 enforces isolation by defining who receives what
- **Conviction language used:** N/A

---

#### M-08: Dual-Route Pattern
- **Location:** gate-runner-core.js L234-277 (GR-05 warm palette code), L246-248 (`isCold()` function); MANIFEST.md L196-198, L795-796; artifact-builder-recipe.md L108-120 (builder calibration)
- **Fragility:** FRAGILE (isCold heuristic)
- **Risk classification:** MEDIUM
- **What to check after implementation:**
  - [ ] `isCold()` at gate-runner-core.js L246-248 is unchanged
  - [ ] artifact-builder-recipe.md L108-120 calibration section is unchanged
  - [ ] Builder still sees CALIBRATION (15=floor, 25=confident, 50=dramatic) not THRESHOLDS (>=15 PASS, <15 FAIL)
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** Dual-route ensures builder sees calibration not thresholds
- **Conviction language used:** Builder calibration uses world-description framing

---

#### M-09: Agent Prompt Templates
- **Location:** MANIFEST.md L975-1170 (Appendix E: all templates), L1037-1090 (builder template), L1098-1119 (PA auditor template), L1138-1170 (weaver template); pa-deployment.md L42-52, L100-104, L106-119
- **Fragility:** FRAGILE (templates) / ROBUST (tables)
- **Risk classification:** MEDIUM
- **What to check after implementation:**
  - [ ] After ME-037+ME-051: all `{VARIABLE}` placeholders in MANIFEST Appendix E are intact
  - [ ] Question counts in PA auditor templates match pa-deployment.md assignments
  - [ ] After ME-001: experiential pass instructions don't break existing PA auditor template structure
  - [ ] Builder file read order in builder template unchanged
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** Templates enforce isolation by defining WHAT each agent receives
- **Conviction language used:** Builder template uses recipe verbs; PA auditor template uses observation verbs

---

#### M-10: Content Map Regeneration
- **Location:** gate-runner-core.js L39 (BV-01 ContentMap tier), MANIFEST.md L377-378, L986-1003; artifact-orchestrator.md L192-194
- **Fragility:** FRAGILE (BV-01 ContentMap regex)
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] gate-runner-core.js L39 ContentMap regex and min: 24 unchanged
  - [ ] MANIFEST Content Analyst prompt template unchanged
- **Anti-skimming pattern used:** BV-01 ContentMap tier IS the anti-skimming mechanism for content maps
- **Information isolation dependency:** N/A
- **Conviction language used:** N/A

---

### FORMAT MECHANISMS (M-11 through M-18)

---

#### M-11: Recipe Format
- **Location:** gate-runner-core.js L93-102 (BV-03 code), L94 (recipe verbs), L95 (checklist verbs), L96 (3:1 ratio); artifact-builder-recipe.md L5, L13; MANIFEST.md L31, L234; gate-runner-preconditions.md L30-35
- **Fragility:** **CRITICAL** (verb lists in JS)
- **Risk classification:** **HIGH**
- **What to check after implementation:**
  - [ ] After ME-004 and ME-039: count recipe verbs vs checklist verbs in ALL new text
  - [ ] Verify ratio remains >= 3:1 when combined with existing content
  - [ ] Count instances of Build/Create/Derive/Map/Read/Select/Deploy/Assess
  - [ ] Count instances of Verify/Fail if/Must be/Ensure/Check that
  - [ ] BV-03 verb regex at L94-95 unchanged
- **Anti-skimming pattern used:** BV-03 IS the anti-skimming enforcement for recipe format
- **Information isolation dependency:** Format applies to brief-facing content only
- **Conviction language used:** **CRITICAL.** ME-004 Q0 self-check MUST use "Assess" not "Verify." ME-039 boilerplate MUST use "Deploy" not "Ensure."

---

#### M-12: World-Description Framing
- **Location:** MANIFEST.md L188-190, L198, L863-864, L879; artifact-builder-recipe.md L13; artifact-orchestrator.md L131-143; gate-runner-core.js L107 (BV-04 S-02 pattern)
- **Fragility:** FRAGILE (requires discipline)
- **Risk classification:** **HIGH**
- **What to check after implementation:**
  - [ ] After ME-004 and ME-039: read every new sentence -- "Does this tell the builder what the WORLD IS, or what they MUST NOT DO?"
  - [ ] Prohibition language -> rewrite as world-description
  - [ ] ME-004 Q0 says "Assess whether text is readable at arm's length" (good) NOT "Verify that no text is illegible" (bad)
  - [ ] ME-039 boilerplate says "Deploy this HTML scaffold" (good) NOT "Ensure your HTML starts with" (bad)
- **Anti-skimming pattern used:** N/A (this is about VOICE, not FORMAT)
- **Information isolation dependency:** M-12 depends on M-04 to keep raw SC tables away from builder
- **Conviction language used:** **CRITICAL.** All new builder-facing content must use world-description verbs, not prohibition verbs.

---

#### M-13: Binary Rules
- **Location:** gate-runner-core.js L1-20 (execution order), L752-778 (verdict summary), L1330-1374 (GR-48 coverage), L1331-1340 (REQUIRED_GATES + RECOMMENDED_GATES arrays); gate-manifest.json L55-59, L18-52, L62-111; gate-runner-spec.md L51-57; MANIFEST.md L275-285
- **Fragility:** **CRITICAL** (gate-runner-core.js) / FRAGILE (gate-manifest.json)
- **Risk classification:** **HIGH**
- **What to check after implementation:**
  - [ ] After ME-005: verdict logic consistent across ALL 7 locations:
    1. MANIFEST.md L276
    2. MANIFEST.md L505 (Phase 3C)
    3. MANIFEST.md L646 (failure mode table)
    4. MANIFEST.md L714 (critical path table)
    5. MANIFEST.md L1144 (execution sequence)
    6. gate-manifest.json L56
    7. gate-runner-spec.md L53
    8. artifact-orchestrator.md verdict tree
  - [ ] After ME-007: GR-44 still returns `{ gate: 'GR-44', status: 'PASS'|'FAIL' }` schema
  - [ ] GR-44 still in REQUIRED_GATES array at L1331
- **Anti-skimming pattern used:** N/A (code, not prose)
- **Information isolation dependency:** N/A
- **Conviction language used:** N/A (JavaScript)

---

#### M-14: Perception Calibration Table
- **Location:** gate-runner-core.js L1170-1223 (GR-51), L1193-1214, L69-91 (BV-02); gate-runner-spec.md L132; pa-questions.md L362-377 (Appendix A); artifact-builder-recipe.md L108-124 (builder calibration)
- **Fragility:** **CRITICAL** (GR-51 code)
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] GR-51 thresholds unchanged (above25Ratio >= 0.50, stddev >= 8, middleHasHighDelta)
  - [ ] BV-02 minimum delta 15 unchanged at L82
  - [ ] Builder calibration ranges intact (15=floor, 25=confident, 50=dramatic)
- **Anti-skimming pattern used:** GR-51 IS the anti-skimming mechanism for background deltas -- catches "technically compliant" clustering
- **Information isolation dependency:** Builder sees CALIBRATION; gate sees BINARY. Dual-route.
- **Conviction language used:** N/A

---

#### M-15: Value Tables
- **Location:** MANIFEST.md L853, L1044-1045, L1089; artifact-builder-recipe.md L122
- **Fragility:** FRAGILE ("optional" flag is dangerous)
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] MANIFEST L1089 still references value-tables.md
  - [ ] artifact-builder-recipe.md L122 still points to value tables
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** Value tables bypass the brief via M-03 direct injection
- **Conviction language used:** N/A

---

#### M-16: Conviction Statement
- **Location:** gate-runner-core.js L1136-1168 (GR-50 regex + keywords); MANIFEST.md L423, L1053-1057, L1064-1073; artifact-orchestrator.md L377-379
- **Fragility:** FRAGILE (GR-50 regex + keywords)
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] GR-50 regex at L1139 unchanged
  - [ ] Conviction format in builder prompt template unchanged
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** Conviction is builder output -> orchestrator extracts -> REBUILD path only
- **Conviction language used:** N/A (gate code)

---

#### M-17: TC Brief Template
- **Location:** MANIFEST.md L20, L209-217, L1006-1032; gate-runner-core.js L29-67 (BV-01), L93-102 (BV-03)
- **Fragility:** ROBUST (template content) / **CRITICAL** (tier header format must match BV-01 regexes)
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] TC Brief Template tier headers match `^#+\s*Tier\s*[1234]` and `^#+\s*Content\s*Map`
  - [ ] No tier header format changes anywhere
- **Anti-skimming pattern used:** TC Brief Template defines the STRUCTURE that BV-01 enforces
- **Information isolation dependency:** N/A
- **Conviction language used:** Template uses recipe format (Read/Select/Deploy/Assess)

---

#### M-18: Worked Examples
- **Location:** MANIFEST.md L905 (glossary), L948 (Appendix D: file path)
- **Fragility:** ROBUST
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] No changes interact -- minimal verification needed
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** N/A
- **Conviction language used:** N/A

---

### VERIFICATION MECHANISMS (M-19 through M-25)

---

#### M-19: Programmatic Gate Verification
- **Location:** gate-runner-core.js L1-20 (execution order), L29-120 (BV gates), L128-779 (core gates), L786-1038 (anti-pattern gates), L1045-1323 (Wave 2 gates), L1330-1374 (GR-48), L1377-1416 (GR-49), L1418-1437 (usage); gate-manifest.json (159 lines); gate-runner-spec.md (188 lines)
- **Fragility:** **CRITICAL** (entire gate-runner-core.js)
- **Risk classification:** **HIGH**
- **What to check after implementation:**
  - [ ] After ME-007: GR-44 returns correct result schema `{ gate, name, status, measured, threshold }`
  - [ ] GR-44 still in `REQUIRED_GATES` array at L1334
  - [ ] No other gate functions accidentally modified (check function boundary comments)
  - [ ] After ME-005: if verdict summary at L752-778 is modified, verify it matches all 7 cross-file locations
  - [ ] `runGateRunner()` still returns `{ results, summary }` object
  - [ ] All 6 function signatures unchanged
- **Anti-skimming pattern used:** The entire gate system IS programmatic anti-skimming
- **Information isolation dependency:** Gate runner is orchestrator-executed, not agent-visible
- **Conviction language used:** N/A (JavaScript)

---

#### M-20: Fresh-Eyes PA Principle
- **Location:** pa-deployment.md L201-221 (full spec), L217-221; pa-guardrails.md L119-148 (Three Laws); pa-questions.md L312-316 (Section 4 WEAVER USE ONLY); MANIFEST.md L322-323, L866-868
- **Fragility:** ROBUST (structural enforcement via file split)
- **Risk classification:** **HIGH**
- **What to check after implementation:**
  - [ ] After ME-001: experiential pass instructions are in pa-deployment.md ONLY, not in pa-questions.md or pa-guardrails.md
  - [ ] After ME-037+ME-051: new replacement questions contain ZERO mechanism counts, pattern names, build plan details, prior experiment results, tier definitions, compositional stack theory
  - [ ] pa-deployment.md L201-221 fresh-eyes spec unchanged
  - [ ] pa-questions.md Sections 1-3 remain calibration-free
- **Anti-skimming pattern used:** N/A (this is about WHAT auditors see, not formatting)
- **Information isolation dependency:** **CRITICAL.** ME-001's experiential pass adds a "first impressions" step. Auditors receive ONLY "Before answering questions, describe your first impression of the page." NOT the rationale for WHY this was added.
- **Conviction language used:** Auditor instructions use observation language ("Describe what you see") not measurement language ("Verify that...")

---

#### M-21: Screenshot Pre-Capture
- **Location:** MANIFEST.md L35, L324; pa-deployment.md L139-196 (Section 2: complete protocol); EXECUTION-TRACKER-TEMPLATE.md L142-152
- **Fragility:** ROBUST
- **Risk classification:** MEDIUM
- **What to check after implementation:**
  - [ ] After ME-006: new screenshot validation does NOT modify the capture sequence itself
  - [ ] Validation is ADDED AFTER capture, not DURING
  - [ ] Validation stays in orchestrator-facing files, not auditor-facing files
  - [ ] Screenshot validation results do NOT reach auditors
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** Screenshot validation results should NOT reach auditors (would anchor assessment)
- **Conviction language used:** N/A

---

#### M-22: 9-Auditor Deployment
- **Location:** pa-deployment.md L28-31 (architecture), L42-52 (AUTHORITATIVE assignment table: 69 questions across 9 auditors A-I), L72-92 (PA-05 cross-validation), L106-119 (evidence format); pa-guardrails.md L44-54; pa-manifest.md L22-34, L40-47; MANIFEST.md L149-157 (agent roster)
- **Fragility:** FRAGILE (assignment table is source of truth)
- **Risk classification:** **HIGH**
- **What to check after implementation:**
  - [ ] After ME-037+ME-051 (MUST be atomic):
    - [ ] Retired questions (PA-06, PA-09, PA-40, PA-07 if exists) REMOVED from all 5 locations: pa-questions.md, pa-deployment.md L42-52, MANIFEST.md L149-157, pa-manifest.md L22-34, EXECUTION-TRACKER-TEMPLATE.md
    - [ ] New experiential questions ADDED to all 5 locations
    - [ ] Total counts match across ALL 11 locations: pa-questions.md L306, pa-deployment.md L54, pa-manifest.md L36, pa-weaver.md L18, pa-guardrails.md L15, MANIFEST.md L159+L784
    - [ ] No auditor exceeds 11 questions; Auditor C (currently 11) should not receive new questions without retirement offsetting
    - [ ] PA-05 cross-validation table at L72-92 unchanged
    - [ ] Load balance verified (retiring from B/C/F frees capacity; new questions to lightest auditors E/F/H)
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** Assignment table defines what each auditor sees -- incorrect assignments = wrong domain questions
- **Conviction language used:** N/A

---

#### M-23: REBUILD Not FIX
- **Location:** MANIFEST.md L40-42, L275-285 (verdict logic), L519-521 (max iterations), L605 (circuit breaker); gate-manifest.json L55-59; artifact-orchestrator.md L107-115
- **Fragility:** ROBUST (conceptual, not code)
- **Risk classification:** MEDIUM
- **What to check after implementation:**
  - [ ] After ME-005: MECHANICAL exception defined consistently across all 7 verdict logic locations
  - [ ] Definition is BINARY: "ALL identity failures are MECHANICAL (<=5 CSS lines, no HTML change, no design decision) -> REFINE; ANY non-MECHANICAL identity failure -> REBUILD"
  - [ ] Circuit breaker at L605 updated if ME-005 adds a new iteration type
  - [ ] Early termination at MANIFEST L474 updated for MECHANICAL exception
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** N/A
- **Conviction language used:** N/A (verdict logic, not recipe content)

---

#### M-24: Mode Selection by Orchestrator
- **Location:** MANIFEST.md L26, L344, L383-389, L886-887; artifact-orchestrator.md L297-347 (mode selection logic), L301, L313-323; EXECUTION-TRACKER-TEMPLATE.md L67-69
- **Fragility:** ROBUST
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] artifact-orchestrator.md Section 4 mode selection logic unchanged
  - [ ] Builder sees ONE mode, implicit in recipe format
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** Builder sees ONE mode, implicit in recipe format
- **Conviction language used:** N/A

---

#### M-25: Honest Complexity Accounting
- **Location:** MANIFEST.md L346-356 (accounting table: ~3,600 lines), L750 (CF-01); artifact-orchestrator.md L147-157; artifact-builder-recipe.md L14-15
- **Fragility:** ROBUST (documentation, not code)
- **Risk classification:** MEDIUM
- **What to check after implementation:**
  - [ ] Optional: update MANIFEST.md L346-356 line counts to reflect new artifact-builder-recipe.md size after ME-004 and ME-039
  - [ ] Not strictly necessary for pipeline function (documentation-only)
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** N/A
- **Conviction language used:** N/A

---

## 7.2 The 5 Interdependency Clusters

Changes within a cluster require coordinated updates across all cluster members.

### Cluster 1: Brief Quality Enforcement
- **Members:** M-05 (tiered brief), M-06 (suppressor management), M-11 (recipe format), M-17 (TC brief template)
- **Shared code:** gate-runner-core.js L29-120 (BV-01 through BV-04)
- **Rule:** Any brief format change must be coordinated across all four mechanisms
- **Rule ID:** ISG-CL1-01

### Cluster 2: Builder Information Barrier
- **Members:** M-04 (context isolation), M-08 (dual-route), M-12 (world-description framing)
- **Shared enforcement:** MANIFEST Appendix B exclusion table, BV-04 suppressor scan
- **Rule:** Content reaching the builder must avoid prohibition framing AND gate-format thresholds
- **Rule ID:** ISG-CL2-01

### Cluster 3: Gate Verification System
- **Members:** M-13 (binary rules), M-14 (perception calibration), M-19 (programmatic verification)
- **Shared code:** gate-runner-core.js (entire file), gate-manifest.json (tiers + verdict logic)
- **Rule:** Adding/removing gates requires coordinated updates in 5-7 locations
- **Rule ID:** ISG-CL3-01

### Cluster 4: PA Audit Integrity
- **Members:** M-20 (fresh-eyes), M-21 (screenshots), M-22 (9-auditor deployment)
- **Shared enforcement:** pa-deployment.md (assignment table), pa-guardrails.md (constraints)
- **Rule:** Adding PA questions requires updates in 5+ locations
- **Rule ID:** ISG-CL4-01

### Cluster 5: Routing Accuracy
- **Members:** M-01 (decomposition), M-03 (direct injection), M-07 (MANIFEST routing), M-09 (prompt templates)
- **Shared spec:** MANIFEST.md (Section 3 + Appendix B + Appendix D + Appendix E)
- **Rule:** Adding new files or changing routing requires updates in all four MANIFEST sections
- **Rule ID:** ISG-CL5-01

---

## 7.3 The 3 Most Dangerous Interactions

### DANGER 1: ME-004/ME-039 x M-06/M-11/M-12 -- Wrong Verbs Break BV Gates

**What happens:** New builder recipe content (ME-004 legibility self-check, ME-039 font/color boilerplate) that uses wrong verbs or prohibition framing will be caught by BV-03/BV-04, causing brief FAIL.

**The real danger:** If someone "fixes" the BV gate instead of fixing the content, suppressors enter the pipeline. This leads to: builder receives prohibition framing -> becomes cautious -> suppressor S-02 -> fewer mechanisms -> FLAT output.

**Validation protocol:**
- [ ] Scan ALL new text in artifact-builder-recipe.md for BV-04 trigger patterns (4 regex patterns listed in Section 6.2)
- [ ] Count recipe verbs vs checklist verbs in ALL new text
- [ ] Verify ratio remains >= 3:1
- [ ] Read every new sentence: "Does this tell the builder what the WORLD IS, or what they MUST NOT DO?"
- [ ] If BV-03 or BV-04 triggers: **FIX THE CONTENT, NEVER WEAKEN THE GATE**

**Specific checks:**
- ME-004 Q0 MUST use "Assess whether..." NOT "Verify that..."
- ME-039 boilerplate MUST use "Deploy this HTML scaffold" NOT "Ensure your HTML starts with"
- No `sample N-N`, `must not`, `shall not`, `never use`, `verify that`, `fail if`, `must be`, `>= N channels` anywhere in new content

---

### DANGER 2: ME-005 x M-13 -- 7-Location Verdict Logic Consistency

**What happens:** The MECHANICAL exception modifies when REBUILD vs REFINE triggers. This verdict logic appears in 7+ locations across the codebase. Missing even ONE location creates a contradiction.

**The real danger:** If MANIFEST says "MECHANICAL -> REFINE" but gate-manifest.json still says "ANY identity FAIL -> REBUILD", the pipeline's behavior depends on which file the orchestrator reads first. This creates unpredictable, non-reproducible verdict outcomes.

**All 7+ locations that MUST be updated simultaneously:**

| # | Location | Line Range | What |
|---|----------|-----------|------|
| 1 | MANIFEST.md | L276 | Primary verdict logic |
| 2 | MANIFEST.md | L505 | Phase 3C description |
| 3 | MANIFEST.md | L646 | Failure mode table |
| 4 | MANIFEST.md | L714 | Critical path table |
| 5 | MANIFEST.md | L1144 | Execution sequence |
| 6 | gate-manifest.json | L56 | Verdict registry |
| 7 | gate-runner-spec.md | L53 | Specification docs |
| 8 | artifact-orchestrator.md | Verdict tree | Decision tree |

**Additional locations to check:**
- MANIFEST.md L474 early termination (must add MECHANICAL exception)
- MANIFEST.md L605 circuit breaker (must update if new iteration type)
- pa-weaver.md verdict thresholds (if override references MECHANICAL)

**Rule:** All 7+ locations or none. Never commit a partial update.

**Validation protocol:**
- [ ] Read ALL verdict logic locations BEFORE editing (verify current consistency)
- [ ] After editing: read ALL locations and verify word-for-word consistency of MECHANICAL exception
- [ ] Verify MECHANICAL definition is BINARY: "ALL identity failures are MECHANICAL (<=5 CSS lines, no HTML change, no design decision) -> REFINE"
- [ ] Verify early termination at L474 updated
- [ ] Verify circuit breaker at L605 updated
- [ ] If gate-runner-core.js verdict summary (L752-778) modified: verify it matches all other locations

---

### DANGER 3: ME-037+ME-051 x M-22 -- 11-Location Question Total Consistency

**What happens:** Retiring 4 PA questions and adding 4 experiential replacements requires updating question totals and assignments across 11 locations. If pa-deployment.md says 70 but pa-weaver.md says 69, the weaver may flag incomplete data.

**The real danger:** The weaver uses question totals to detect incomplete audit data. A mismatch between ANY two locations causes the weaver to either (a) flag false incomplete data or (b) silently accept actually incomplete data. Both outcomes corrupt the PA verdict.

**All 11 locations that MUST match:**

| # | File | Specific Location | What |
|---|------|-------------------|------|
| 1 | pa-questions.md | Question entries | Individual question definitions |
| 2 | pa-deployment.md | L42-52 | Auditor assignment table |
| 3 | MANIFEST.md | L149-157 | Agent roster with question lists |
| 4 | pa-manifest.md | L22-34 | Report checklist |
| 5 | EXECUTION-TRACKER | Phase 3B | PA deployment checklist |
| 6 | pa-questions.md | L306 | Total count |
| 7 | pa-deployment.md | L54 | Total count |
| 8 | pa-manifest.md | L36 | Total count |
| 9 | pa-weaver.md | L18 | Total count |
| 10 | pa-guardrails.md | L15 | Total count |
| 11 | MANIFEST.md | L159+L784 | Total count(s) |

**Additional concerns:**
- PA-40 retirement breaks AP-05 mapping in pa-guardrails.md Section 7 and pa-weaver.md Section 6.1 (AP-05 maps to PA-40 + PA-66; without PA-40, AP-05 detection weakens)
- PA-07 may not exist (verify before attempting retirement)
- ME-033 references PA-09; if PA-09 is retired, ME-033's reference becomes orphan

**Rule:** Compute final total ONCE, then search-and-replace across all 11 locations. Retirement and addition MUST be ONE atomic operation -- never commit retirements without additions or vice versa.

**Validation protocol:**
- [ ] Before starting: read pa-questions.md and verify PA-06, PA-09, PA-40 exist; verify PA-07 does/does not exist
- [ ] Before starting: read pa-guardrails.md and identify AP-05 PA-40 reference
- [ ] Before starting: verify all 11 "69 questions" locations currently match
- [ ] Plan load balance: retiring from B(-1), C(-1), F(-1) frees capacity; assign new questions to lightest auditors (E:6, F:5-after-retirement, H:5)
- [ ] After implementation: count total questions in pa-questions.md
- [ ] After implementation: count total per-auditor in pa-deployment.md; verify no auditor exceeds 11
- [ ] After implementation: verify totals match across ALL 11 locations
- [ ] After implementation: verify AP-05 mapping in pa-guardrails.md and pa-weaver.md updated
- [ ] After implementation: verify PA-05 cross-validation table at pa-deployment.md L72-92 unchanged
- [ ] After implementation: verify new questions have YES/NO format, screenshot reference, viewport assignment, auditor assignment
- [ ] After implementation: verify new questions contain ZERO calibration data or mechanism counts
- [ ] **ATOMIC CHECK:** retirement and addition are ONE operation -- never commit retirements without additions

---

## 7.4 Critical Validation Steps (Post-All-Changes)

> **NOTE:** Anti-loss verification is now ALSO embedded per-wave in Section 5 (see Wave 0 and Wave 2 Verification Checkpoints). Section 7.4 serves as the FINAL comprehensive check after all waves complete.

After ALL 8 changes are complete, perform these global verification checks:

1. [ ] **BV-03 Verb Ratio:** Run BV-03 regex against all new text in artifact-builder-recipe.md. Verify >= 3:1 recipe-to-checklist ratio.
2. [ ] **BV-04 Suppressor Scan:** Run BV-04 regex against all new text. Verify zero suppressor matches.
3. [ ] **Verdict Consistency:** Read ALL 7+ verdict logic locations. Verify exact textual consistency of MECHANICAL exception.
4. [ ] **Gate Runner Integrity:** Verify gate-runner-core.js total line count <= 1,437. Verify GR-44 in REQUIRED_GATES. Verify result schema.
5. [ ] **Question Totals:** Count questions across ALL 11 total-count locations. Verify all match.
6. [ ] **AP-05 Mapping:** Verify AP-05 anti-pattern mapping updated in pa-guardrails.md + pa-weaver.md.
7. [ ] **Routing Table:** Verify MANIFEST.md Section 3 routing table (L179-342) unchanged.
8. [ ] **Exclusion Table:** Verify MANIFEST.md Appendix B exclusion table (L859-868) unchanged.
9. [ ] **GR-48 Consistency:** Verify gate-runner-core.js GR-48 REQUIRED_GATES and RECOMMENDED_GATES arrays at L1331-1340 match gate-manifest.json tier arrays.
10. [ ] **Fresh-Eyes Principle:** Verify pa-deployment.md fresh-eyes principle (L201-221) unchanged.

---

## 7.5 Aggregate Gate Accuracy Verification

After all gate fixes are applied, run gate-runner on V3 Gas Town HTML and verify:
- [ ] REQUIRED violations reduced from ~401 to target <= 50
- [ ] Zero REQUIRED violations from sub-perceptual measurements (GR-05b -> ADVISORY)
- [ ] Zero REQUIRED violations from fallback fonts (GR-06 -> ADVISORY for unrendered fonts)
- [ ] Zero false positives from nested element gaps (GR-14 scoped to zone siblings)
- [ ] Border-width violations at 0.667px and 2.667px now PASS (GR-09 tolerance bands)

If total REQUIRED violations still exceed 100 after all fixes: the gate subtraction plan (ADV-07a) needs to be more aggressive, or additional gates need tier downgrades.

---

*Sections 6 and 7 complete. 25 mechanisms mapped with location, fragility, risk, and verification checks. 3 most dangerous interactions documented with validation protocols. 9 red lines, 5 clusters, format multiplier model, per-file templates, and global pre-flight/post-implementation checklists included.*

---

## SECTION 8: GAPS AND UNRESOLVED

Every gap, missing item, unresolved question, and uncaptured finding from the audit corpus.

---

### 8A. ALL 18 MISSING Findings from File 18 Gap Check

Items rated MISSING — findings from Phase 2 reports with ZERO coverage by any enrichment.

#### GAP-01: No Responsive Breakpoint Specification
- **Description:** Builder has no guidance on 768px/480px layout reorganization. No enrichment specifies breakpoint behavior.
- **Source:** step4-pa-epsilon.md
- **Tier:** SHOULD
- **In 8-plan?** NO
- **Proposed fix:** NEW-01 — Add responsive breakpoint specification (768px, 480px) to artifact-builder-recipe.md.

#### GAP-02: No Table Responsive Behavior Guidance
- **Description:** Tables do not adapt at narrow viewports. No enrichment addresses table layout at 768px or below.
- **Source:** step4-pa-epsilon.md
- **Tier:** SHOULD
- **In 8-plan?** NO
- **Proposed fix:** NEW-01 (combined with GAP-01).

#### GAP-03: Metaphor Structural Embedding Not Enforced
- **Description:** Metaphor announced in language ("gas town," "settlement") but not embedded in layout or typography. No enrichment strengthens metaphor enforcement. This is structurally in TC Brief territory, but the gap means nothing prevents metaphor-as-label-only.
- **Source:** step4-pa-zeta.md
- **Tier:** COULD
- **In 8-plan?** NO
- **Note:** step4-pa-zeta.md has 0% FULL enrichment coverage — the lowest of any Phase 2 report. The metaphor/coherence domain is a structural blind spot.

#### GAP-04: No Builder Feedback/Iteration Loop
- **Description:** Builder never sees gate results or PA feedback. Pipeline is single-pass by design. No enrichment creates a feedback path from gates/PA back to builder.
- **Source:** step-paradigm-analysis.md
- **Tier:** COULD
- **In 8-plan?** NO
- **Note:** ME-017 (Phase 4) partially addresses this by applying fixes within a run, but it was deferred. The paradigm-level question remains: should the pipeline be iterative?

#### GAP-05: No Taste/Judgment Metric
- **Description:** Pipeline has no metric for design taste or aesthetic judgment. ME-055 ("What would you REMOVE?") is one taste signal but not a metric. Pipeline optimizes measurable properties but cannot evaluate gestalt quality.
- **Source:** step-paradigm-analysis.md
- **Tier:** COULD
- **In 8-plan?** NO

#### GAP-06: LLM Vision != Human Vision
- **Description:** Fundamental limitation of LLM-based PA. LLM visual perception differs from human visual perception in unknown ways. No enrichment addresses this gap.
- **Source:** buddy-metacognitive.md
- **Tier:** COULD
- **In 8-plan?** NO
- **Note:** This is arguably unfixable within the current architecture. Would require human-in-the-loop validation (GAP-07).

#### GAP-07: No Human-in-the-Loop Review Step
- **Description:** Pipeline is entirely agent-driven. No enrichment adds human review. The pipeline's consensus mechanism (9 auditors) assumes each auditor is independent, but all share the same LLM vision limitations.
- **Source:** buddy-metacognitive.md
- **Tier:** COULD
- **In 8-plan?** NO

#### GAP-08: Visual Component Completeness Check Missing
- **Description:** No PA question or gate checks whether charts have legends, diagrams have axis labels, or tier counts are consistent between text and diagrams.
- **Source:** inattentional-blindness-audit.md
- **Tier:** SHOULD
- **In 8-plan?** NO
- **Proposed fix:** NEW-02 — Visual component completeness PA question.

#### GAP-09: Content Accuracy Verification Missing
- **Description:** No mechanism checks text-diagram consistency. Example: Complexity Ladder shows 5 tiers but text describes 6. Content accuracy is outside gate scope and not in any PA question.
- **Source:** inattentional-blindness-audit.md
- **Tier:** SHOULD
- **In 8-plan?** NO
- **Proposed fix:** NEW-02 (combined with GAP-08).

#### GAP-10: Invisible DOM Content Detection Gate Missing
- **Description:** No gate checks for `opacity: 0`, `visibility: hidden`, or zero-height content-bearing elements. Content can be present in DOM but invisible to users.
- **Source:** gate-usability-audit.md Section 4F
- **Tier:** SHOULD
- **In 8-plan?** NO
- **Proposed fix:** NEW-03 — GR-65 invisible DOM content detection gate (RECOMMENDED).

#### GAP-11: Scroll-Reveal / Animation-Gated Content Detection Missing
- **Description:** No gate detects JS-gated content that may be invisible at capture time. IntersectionObserver + opacity:0 as default state leaves content invisible until scroll triggers reveal.
- **Source:** gate-usability-audit.md Section 4G
- **Tier:** COULD
- **In 8-plan?** NO
- **Note:** ME-006 (screenshot validation) partially addresses by expanding CSS overrides to force visibility, but the gate-level detection is absent.

#### GAP-12: Empty Sections / Missing Content Detection
- **Description:** No gate detects headings with no content below them. Empty sections pass all current gates.
- **Source:** gate-usability-audit.md Section 4H
- **Tier:** SHOULD
- **In 8-plan?** NO
- **Proposed fix:** NEW-04 — GR-66 empty section detection gate (ADVISORY).

#### GAP-13 (embedded): Metaphor-Typography Weight Mapping
- **Description:** "Gas town" metaphor could be expressed through typography weight = resource weight. Specific creative suggestion with no enrichment path.
- **Source:** step4-pa-zeta.md
- **Tier:** COULD
- **In 8-plan?** NO
- **Note:** Creative suggestion, not a spec change. Belongs in TC Brief guidance, not gate/builder spec.

#### GAP-14 (embedded): Settlement Map Missing Legend
- **Description:** Settlement Map has no legend explaining marker meanings. Visual component incompleteness.
- **Source:** inattentional-blindness-audit.md
- **Tier:** SHOULD
- **In 8-plan?** NO
- **Note:** Content-specific issue. Would be caught by proposed NEW-02 (visual component completeness).

#### GAP-15 (embedded): Complexity Ladder Tier Count Mismatch
- **Description:** Complexity Ladder diagram shows 5 tiers but text describes 6. Content accuracy failure.
- **Source:** inattentional-blindness-audit.md
- **Tier:** SHOULD
- **In 8-plan?** NO
- **Note:** Content-specific issue. Would be caught by proposed NEW-02.

#### GAP-16 (embedded): Content Visibility Gate (expanded scope)
- **Description:** Gate 4F scope: `opacity: 0`, off-screen positioning, `color` matching `background-color`. Broader than GAP-10.
- **Source:** gate-usability-audit.md Section 4F
- **Tier:** SHOULD
- **In 8-plan?** NO
- **Note:** Overlaps with GAP-10 but adds color-matching-background detection.

#### GAP-17 (embedded): Image/SVG Load Verification Gate
- **Description:** GR-63: `naturalWidth > 0`, SVG bounding box > 0, alt text presence. No ME covers this.
- **Source:** gate-usability-audit.md Section 4D
- **Tier:** COULD
- **In 8-plan?** NO
- **Proposed fix:** NEW-07 — GR-63 image/SVG load verification gate (ADVISORY).

#### GAP-18 (embedded): Touch Target Size Gate
- **Description:** GR-64 (WCAG 2.5.5): interactive elements >= 44x44px clickable area. No ME covers this.
- **Source:** gate-usability-audit.md Section 4E
- **Tier:** COULD
- **In 8-plan?** NO

**Total MISSING: 18 items. 0 in the 8-change plan. 5 proposed new enrichments (NEW-01 through NEW-04, NEW-07) address 8 of the 18 gaps.**

---

### 8B. Zone 4 Monotony — NOT CAPTURED

**Finding:** Zone 4 monotony persists across runs. VA had 5 identical principle blocks. V3 has plain prose without components. This is a recurring cross-run pattern (CR-5/CR-15 in File 20).

**Why not captured:** No enrichment addresses zone-level visual monotony. ME-048 ("one unique visual element per zone") partially addresses from the builder side, but:
1. ME-048 is CONSIDER tier, not in plan
2. There is no PA-side detection question that asks "is any zone visually monotonous?"
3. No gate checks for structural variety within zones

**File 20 proposes:** ME-NEW-02 — Extend PA-50 or add new question: "Is any zone visually monotonous? A zone is monotonous if it contains only prose paragraphs with no structural variety (no grids, tables, collapsibles, callouts, or distinct components). Flag any zone with >3 consecutive paragraphs without a visual break."

**Status:** NOT in enrichment list. NOT in 8-change plan. NOT in any proposed new enrichment from File 18. Only appears in File 20 paradigm analysis.

### Additional Section 1 Gaps (from S1 verification)

| Gap | Source | Detail | Recommendation |
|-----|--------|--------|---------------|
| Builder Model (Sonnet vs Opus) unexamined | audit-09-11 ADV-7C/META-4-4 | Potentially highest-leverage single intervention. MEMORY.md flags: "Sonnet complies meticulously; Opus complies AND creates beyond constraints." CD-006 (CEILING) was Opus-built. Flagship builders were Sonnet. | Run Opus builder experiment before or after enrichment wave. Already tracked as MUST-23 but not in 8-change plan. |
| Builder gets nothing from Phase 3 — artifacts unspecified | audit-09-11 CONVERGENCE 5 (FRESH-6-1, ADV-7F) | No artifacts for the builder (cheat sheet, annotated examples). Highest-leverage intervention per ADV and FRESH buddy files. Already tracked as MUST-25 but proposed artifacts need specification. | Proposed artifacts: (1) visual cheat sheet of 5 most common CSS defects with correct/incorrect examples, (2) danger zones file (content types needing special handling: SVG charts, code blocks, long-form essays), (3) annotated 4/4 example page. |

---

### 8C. 7 Cross-Run Items NOT CAPTURED (from File 20)

| CR-ID | Description | Source | Actionable? | Status |
|-------|-------------|--------|-------------|--------|
| CR-3 | Zone transitions at exactly 16 RGB delta (floor-hugging). BV-02 catches <15 but no mechanism for "technically passing but perceptually marginal." | cross-run-comparison | YES — ME-NEW-01 proposed (BV-02 "comfortable margin" advisory: target >=25 not just >=15) | NOT CAPTURED. Proposed enrichment has no ME number. |
| CR-5/CR-15 | Zone 4 monotony persists across runs in different forms. VA = identical blocks, V3 = plain prose. Structural blind spot. | cross-run-comparison | YES — ME-NEW-02 proposed (zone monotony PA question) | NOT CAPTURED. See Section 8B above. |
| CR-6 | Loss of decision flow diagram from VA. V3 has no equivalent. | cross-run-comparison | NO — creative decision, not pipeline defect. Builder chose different components. | Correctly NOT an enrichment. |
| CR-7 | Loss of communication flow diagram from VA. V3 has no equivalent. | cross-run-comparison | NO — creative decision, same as CR-6. | Correctly NOT an enrichment. |
| CR-8 | Loss of code snippet headers (dark header bar) from VA. V3 code blocks lack the distinctive dark header treatment. | cross-run-comparison | NO — creative decision. Could be addressed by ME-056 (technique library) which documents dark code block inversion as an available technique. | Correctly NOT an enrichment, but related to ME-056. |
| CR-9 | Print styles regression. V3 has no print styles. VA had `@media print` rules. | cross-run-comparison | NO — too minor for enrichment. Not detectable by current gates. | NOT CAPTURED. No ME, no proposed enrichment. |
| CR-10 | Loss of drop cap mechanism from VA. V3 has no drop cap. | cross-run-comparison | NO — creative decision. Drop cap is a specific technique, not a requirement. | Correctly NOT an enrichment. |
| CR-16 | Responsive design repeats "scale not reorganize" pattern across ALL runs. Pipeline has no mechanism to evaluate responsive QUALITY — only checks responsive PRESENCE. | cross-run-comparison | YES — ME-NEW-03 proposed (responsive reorganization evaluation as PA-46 extension) | NOT CAPTURED. Proposed enrichment has no ME number. |

**Of 7+1 NOT CAPTURED items: 3 are actionable (CR-3, CR-5/15, CR-16). 4 are creative decisions (correctly not enrichments). 0 are in the 8-change plan. 0 have ME numbers.**

---

### 8D. Proposed ME-NEW Items (from Files 18 and 20)

Items proposed by gap analysis and paradigm analysis that have no ME number and no implementation path.

#### From File 18:

| ID | Description | Source Gap | Target File | Severity |
|----|-------------|-----------|-------------|----------|
| NEW-01 | Responsive breakpoint specification (768px, 480px) | GAP-01, GAP-02 | artifact-builder-recipe.md | MINOR |
| NEW-02 | Visual component completeness check for PA (legends, axes, tier counts) | GAP-08, GAP-09 | pa-questions.md | MINOR |
| NEW-03 | Invisible DOM content detection gate GR-65 (RECOMMENDED) | GAP-10 | gate-runner-core.js | MINOR |
| NEW-04 | Empty section detection gate GR-66 (ADVISORY) | GAP-12 | gate-runner-core.js | CONSIDER |
| NEW-05 | Pipeline philosophy statement ("reader experience is primary value") | P-11 | MANIFEST.md | MINOR |
| NEW-06 | Timestamp tracking in execution tracker | P-01 | EXECUTION-TRACKER-TEMPLATE.md | CONSIDER |
| NEW-07 | Image/SVG load verification gate GR-63 (ADVISORY) | P-12, GAP-17 | gate-runner-core.js | CONSIDER |
| NEW-08 | Prevent-detect principle in MANIFEST | P-07 | MANIFEST.md | CONSIDER |

#### From File 20:

| ID | Description | Source | Severity |
|----|-------------|--------|----------|
| ME-NEW-01 | BV-02 "comfortable margin" advisory (target >=25 RGB, not just >=15) | CR-3 | CONSIDER |
| ME-NEW-02 | Zone monotony detection PA question | CR-5/CR-15 | MINOR |
| ME-NEW-03 | Responsive reorganization evaluation (PA-46 extension) | CR-16 | CONSIDER |
| ME-NEW-04 | Conditional REFINE cycle (re-evaluate E-009 AFTER Tier 1) | paradigm | BLOCKING (conditional) |
| ME-NEW-05 | Specification retirement protocol (net growth <=0, 4,000-line threshold) | paradigm | SIGNIFICANT |
| ME-NEW-06 | Expand exemplar set to 3-5 pages with immersion framing | paradigm | CONSIDER |
| ME-NEW-07 | Timestamp population enforcement in tracker template | paradigm | MINOR |
| ME-NEW-08 | Simplify file naming convention to match actual practice | paradigm | MINOR |
| ME-NEW-09 | COMPOSED-mode brief budget (165-300 lines) | paradigm | MINOR |
| ME-NEW-10 | Extend ME-016 with full accessibility checklist (keyboard, alt text, color, skip-link) | paradigm | SIGNIFICANT |
| ME-NEW-11 | Page length consideration + navigation requirement for >15,000px pages | paradigm | CONSIDER |
| ME-NEW-12 | Weaver corrected screenshots must >= auditor screenshot count (evidence symmetry) | paradigm | MINOR |
| ME-NEW-13 | Accessibility item added to experiential pass (ME-001 extension) | paradigm | MINOR |

**Total proposed: 21 new enrichments. 0 in the 8-change plan. 0 have been formally accepted into the enrichment list.**

---

### 8E. ARIA Regression (-63%) Gap

**Finding:** V3 has 7 ARIA attributes vs VA's 19 — a 63% regression. This is the single biggest measurable accessibility regression across runs.

**Enrichment:** ME-016 targets >=15 ARIA attributes with builder recipe instructions.

**In 8-change plan?** NO. ME-016 is deferred.

**In any proposed new enrichment?** ME-NEW-10 extends ME-016 with full accessibility checklist, also not in plan.

**Status:** The most measurable regression in the entire analysis has no representation in the implementation plan. ME-016 at +8 lines to builder recipe is one of the strongest restoration cases identified by audit-18-21.

---

### 8F. Gorilla Experiment Framing — Flattened

**Finding (from File 19):** ME-001's rationale mentions "attentional tunnels" but the deeper gorilla experiment framing is compressed to a single clause. The key insight — questions don't just GUIDE attention, they CREATE the auditor's perceptual reality — is lost.

Specific nuances flattened:

| ID | What Was Lost |
|----|---------------|
| UI-01 | Per-auditor attentional tunnel analysis: each of 9 auditors SAW the chart AS something different (A=rhythm device, B=text, C=spatial weight, D=pacing beat, E=grid element, F=pattern instance, G=metaphor vehicle, H=responsive object, I=design choice). The most persuasive evidence for ME-001. |
| UI-02 | "Analytical evaluation != experiential evaluation" metacognitive warning not explicitly articulated in any enrichment. |
| UI-03 | Comprehension test concept: "After reading the page, can an agent answer questions ABOUT the content?" Tests whether page communicates information, not just whether text is readable. Distinct failure class with no enrichment. |

**Status:** ME-001 implements the correct fix (experiential pass). The evidence FOR ME-001 is not preserved anywhere implementers would see it. ME-044 (document rationale) would capture this but is COULD tier and not in plan.

---

### 8G. 6-Type Failure Taxonomy Gaps

File 19 identified a 6-type usability failure taxonomy. Coverage:

| Type | Name | Enrichment | In 8-Plan? | Status |
|------|------|------------|-----------|--------|
| Type 1 | False Affordance | ME-031 | NO | GAP — enrichment exists but deferred |
| Type 2 | Communicative Failure | ME-022 | NO | GAP — enrichment exists but deferred |
| Type 3 | Navigation Desert | ME-021 | NO | GAP — enrichment exists but deferred |
| Type 4 | Content-Promise Mismatch | ME-023 | NO | GAP — enrichment exists but deferred |
| Type 5 | Invisible Excess | ME-007 + ME-041 | PARTIAL | ME-007 in plan, ME-041 not |
| Type 6 | Cross-Element Contradiction | **NONE** | NO | **GAP — no enrichment at all** |

**Type 6 (Cross-Element Contradiction)** is the only failure type with zero enrichment coverage. File 19 proposes extending ME-023 to include cross-element contradiction checks, but ME-023 itself is deferred.

**Status:** 5/6 types have enrichments. 1/6 (Type 5, partially) is in the plan. 1/6 (Type 6) has no enrichment at all. The taxonomy as a detection framework is 83% covered by enrichments but only 8% covered by the plan.

---

### 8H. Paradigm-Level Questions with No Spec Fix

These findings from the paradigm analysis (File 20) and metacognitive review (File 19) identify structural limitations that cannot be addressed by spec enrichments:

| Question | Source | Why No Spec Fix |
|----------|--------|-----------------|
| "Is PA-05 valid?" | buddy-metacognitive.md | PA-05 as a metric may not measure what matters. Range scoring (ME-019) improves calibration but doesn't address whether the metric itself is correct. |
| "LLM vision != human vision" | buddy-metacognitive.md | Fundamental architectural limitation. All 9 auditors share same LLM vision model. No spec change fixes this. |
| "More spec = worse output?" (ADV-08a) | adversarial review | Evidence: 100 lines -> PA-05 4/4; 610 lines -> 3.5/4; 3,600 lines -> 3/4; 963 lines -> 1.5/4. Correlation suggests spec volume inversely correlates with quality. Proposed: 4,220 lines. |
| "Opus vs Sonnet builder" (N-20) | cross-reference | Largest unexamined confound. One experiment ($5-15, 1-2 hrs) could render half the enrichment list unnecessary. |
| "Pipeline's 400:1 analysis-to-fix ratio" (N-21) | cross-reference | Complexity disease is self-replicating. Each analysis wave generates more analysis. No spec change addresses this. |
| "Multi-pass approach rejected without evidence" (P-32) | gap-check | CD-006 (CEILING tier) was multi-pass. Pipeline is single-pass by design. No enrichment enables iteration beyond ME-017 (mechanical fixes only, deferred). |
| "Content selection affects quality" (P-34) | gap-check | Content choice (what the page is ABOUT) affects quality but no enrichment addresses content selection methodology. |
| "Should the pipeline be iterative?" (GAP-04) | step-paradigm-analysis.md | Fundamental architecture question. Single-pass pipeline cannot incorporate feedback. |
| "Should auditor count be 5 not 9?" (HE-009) | handoff enrichments | Process question excluded from master list (V3E-006). $15-20 savings per run. Excluded as "process question." |
| "Is 68% gate compliance real?" | buddy-metacognitive.md | N=31 binary observations. 95% CI: 52-84%. Single measurement with +/-16pp uncertainty. Capacity decisions (240-line budget) derived from this single measurement. No spec change addresses the uncertainty — only more pipeline runs reduce CI. |
| "What is the cost-per-quality-point?" | buddy-metacognitive.md | Middle: ~$7.50 average / 4/4 = $1.88/point. V3: ~$75 average / 3/4 = $25/point. 13x cost for lower quality. Cost-effectiveness analysis absent from all 57 enrichments. Experiments (MUST-18, MUST-20, MUST-23) would provide data points. |

**Status:** These 11 questions represent the frontier beyond spec enrichments. They require EXPERIMENTS (N-20, HE-009, compliance CI, cost-per-point), ARCHITECTURE CHANGES (GAP-04, P-32), or ACCEPTANCE OF LIMITATIONS (LLM vision, PA-05 validity).

---

### 8I. Content Quality Observations Outside Pipeline Scope

Findings that describe content-level issues the pipeline cannot control:

| Observation | Source | Why Outside Scope |
|-------------|--------|-------------------|
| Complexity Ladder diagram shows 5 tiers, text describes 6 | inattentional-blindness-audit.md | Content accuracy. Pipeline builds HTML from brief; brief accuracy is upstream. |
| Settlement Map has no legend | inattentional-blindness-audit.md | Content completeness. Component design decision, not pipeline spec. |
| "Gas town" metaphor not expressed in layout | step4-pa-zeta.md | Creative direction. TC Brief territory, not builder spec. |
| 23 usability issues identified, most content-level | inattentional-blindness-audit.md | 16 of 23 are content decisions (word choice, diagram design, information architecture). |
| Large red "8" numeral conveys no information | PA auditors G, H, I | Decorative element judgment call. Not captured by ME-022 (charts/diagrams, not standalone numerals). |
| Purple "Idea Compiler" border — intentional or arbitrary? | PA auditors A, E (positive), G, I (negative) | No PA question distinguishes intentional from arbitrary rule-breaking. Proposed question in File 08 Appendix has no ME number. |

**Status:** These are legitimate quality observations that live outside the pipeline's control boundary. The pipeline can detect some (via experiential pass) but cannot prevent them (content decisions are made upstream in brief assembly).

---

### 8J. Adversarial Prerequisites NOT in Any Plan

The adversarial review (File 06) identified prerequisites that must be completed before the 8-change plan or any future wave. None are in the 8-change plan and none have ME numbers.

| ID | Prerequisite | Description | Status |
|----|-------------|-------------|--------|
| ADV-07a | Gate-runner subtraction plan | Remove GR-33 through GR-42 + GR-08 spec text (~150 lines) from gate-runner-core.js. THE most important prerequisite for any gate additions. Without it, gate-runner is over capacity. | **NOT IN ANY PLAN.** The 8-change plan adds +25 lines to gate-runner without subtraction. Technically violates net-zero constraint, though +25 on ~1,437 lines is 1.7%. |
| ADV-07b | Builder recipe subtraction | Remove duplicate component pattern descriptions (~20-30 lines) from artifact-builder-recipe.md. Needed before ME-038/039/041/047-056 additions. | **NOT IN ANY PLAN.** |
| ADV-05b | Combined gate budget validation | ME-003 + ME-014 + ME-040 combined = 180 lines on zero-budget artifact. Even after 150-line subtraction = net +30. Must validate combined impact. | **NOT IN ANY PLAN.** All 3 deferred, so moot for now. |
| ADV-05c | MECHANICAL + circuit breaker interaction | ME-005 (MECHANICAL = REFINE) + ME-008 (usability breaker = "Fix #1"). When both coexist, verdict behavior undefined. Combinatorial explosion of verdict states. | **NOT IN ANY PLAN.** ME-008 deferred, so moot for now. But ME-005 IS in plan — the interaction with future ME-008 is undefined. |
| ADV-05d | PA-05 range + tier system mapping | If PA-05 becomes 2.5-3.0 range (ME-019), which tier? Range straddles boundaries. No downstream adaptation documented. | **NOT IN ANY PLAN.** ME-019 deferred, so moot for now. |
| ADV-07e | Brief assembler compression behavior | Multiple enrichments add to TC Brief Template without acknowledging that assembler compresses additions away (79-line map -> ~12 lines historically). | **NOT IN ANY PLAN.** Structural issue affecting all brief-facing enrichments. |

---

### 8K. Nuances Lost in Merge (Master List Deduplication Losses)

When Files 07 and 08 were deduplicated into the 57-item master list, these specific nuances were lost:

| Master Item | Source | What Was Lost |
|-------------|--------|---------------|
| ME-006 | PE-009 Check 3 | Screenshot content should match expected section count from page's own navigation. Structural promise cross-check absent from ME-006. |
| ME-007 | HE-012 | PA question "PA-83: Does the page end cleanly at footer?" + "always capture screenshot at scrollHeight - viewportHeight." Both lost — ME-007 only fixes the gate algorithm, not PA/capture coverage. |
| ME-019 | PE-010 | Hypothetical PA-05 score should be generated by AUDITOR A, not just presented by Weaver. Auditor-side instruction lost. |
| ME-019 | HE-001 | Priming mechanism explanation: Weaver is optimistic because it reads 9 auditor reports before seeing corrected screenshots. Causal explanation absent from ME-019. |
| ME-015 | PE-012 | "Typically A, since they are the impression specialist" — specifies WHICH auditor does First-Auditor Halt. ME-015 mentions protocol but not assignment. |
| ME-018 | HE-008 | Systemic pattern: false positives get narratives ("known limitation"), false negatives get ignored ("not a problem"). Asymmetric treatment meta-observation lost. |
| ME-045 | HE-014 | Pipeline-A/Pipeline-B structural split proposal (P0-P2 vs P3A-P3C in separate contexts). ME-045 has documentation-level change; HE-014 has architecture-level proposal. |

**Status:** These nuances are documented in audit-05-08 Section "Nuances in Merged Items That Master List LOSES" but have no formal preservation path. If/when these ME items are implemented, the nuances should be restored from the source files (07, 08).

---

### 8L. Process Gaps in 8-Change Plan Implementation

From audit-18-21 Section 6 (dependency check), these process gaps exist in how the 8-change plan will be implemented:

| Gap | Description | Source |
|-----|-------------|--------|
| M-04 verification not mentioned | ME-002 (Weaver priority) should verify no gate thresholds leak to auditors. Not in implementation steps. | File 13 requirements vs File 21 steps |
| Result schema preservation not mentioned | ME-007 (GR-44 fix) must maintain `{gate, name, status, measured, threshold}` schema. Not in implementation steps. | File 13 requirements vs File 21 steps |
| 3-location verdict sync not mentioned | ME-005 must update verdict logic in gate-manifest.json L55-59 + MANIFEST L275-285 + gate-runner-core.js verdict summary. Not explicitly in steps. | File 13 requirements vs File 21 steps |
| Builder recipe capacity verification missing | After ME-004 and ME-039 additions, builder recipe should be verified to stay under 1,000 lines. No verification step. | File 13 requirements vs File 21 steps |
| MANIFEST Appendix E template updates | All agent-facing changes (ME-001, ME-002, ME-004, ME-037+ME-051) require MANIFEST Appendix E prompt template updates. If templates not updated, agents never receive changes. | M-09 requirement |
| Question totals in 3+ locations | ME-037+ME-051 must update pa-deployment.md L54, pa-manifest.md L36, MANIFEST L159. Missing any = inconsistency. | M-22 requirement |
| ME-001 without ME-009 | Experiential pass generates 9 unstructured reports. Without aggregation thresholds (>=3/9 = CONFIRMED), Weaver overwhelmed. | audit-18-21 cross-file synthesis |
| ME-006 without ME-046 | Screenshot validation detects bad screenshots. Without recovery protocol, operators don't know what to do when validation fires. | audit-18-21 cross-file synthesis |

---

### 8M. FIX-FAILED Items Not Addressed by Plan

6 of 8 FIX-FAILED items from File 04 are NOT in the 8-change plan:

| FF-ID | Description | Original Fix | Enrichment | In Plan? | Severity |
|-------|-------------|-------------|------------|----------|----------|
| FF-01 | GR-09 tolerance bands NOT functioning. Integer-only checking despite FIX-003 spec. | FIX-003 | ME-013 (V3E-021) | NO | MEDIUM — gate accuracy |
| FF-02 | GR-14 structural false positives EXPANDED. 13 false positives from nested section containers. | FIX-005 | ME-012 (V3E-020) | NO | HIGH — gate credibility, 13 false positives per run |
| FF-03 | GR-17 density stacking MUTATED to list items. 30 li violations at 8px. | FIX-006 | ME-029 (V3E-043) | NO | LOW |
| FF-05 | GR-05 warm palette catches sub-perceptual tints. 4% opacity triggers REQUIRED failures. | FIX-001 | ME-010 (V3E-022) | NO | HIGH — credibility, priority inversion |
| FF-06 | GR-06 font trinity catches never-rendered fallback fonts. 181 violations. | FIX-002 | ME-011 (V3E-023) | NO | HIGH — credibility, 181 false violations |
| FF-08 | Conviction as HTML comment not separate file. | FIX-022 + FIX-079 | None needed | NO | LOW — accept HTML comment as valid |

**Status:** FF-02 (13 false positives), FF-05 (sub-perceptual REQUIRED failures), and FF-06 (181 false font violations) are the most concerning. These create persistent noise in gate output that may obscure the impact of the 8-change plan's improvements. Combined, they represent ~207 false violations per run.

---

### 8N. Adversarial Attacks and Structural Warnings

The adversarial review (File 06) identified 8 attacks with 4 CRITICAL and 4 SIGNIFICANT findings. These are structural warnings about the enrichment approach itself:

| # | Attack | Finding | Severity | Addressed? |
|---|--------|---------|----------|-----------|
| 1 | Complexity ratchet | 42:1 add:remove ratio. "The list reproduces the disease it diagnoses." | CRITICAL | PARTIALLY — 8-change plan is smaller (8 items vs 57), but still 7:1 add:remove. |
| 2 | Capacity budget | 785 vs 240 safe budget lines (3.3x over) for full list. | CRITICAL | YES — 8-change plan at ~115 lines is within budget. |
| 3 | Actionability | 5/9 BLOCKING items fully actionable, 4/9 partial (ME-003, ME-005, ME-006 need discovery work). | SIGNIFICANT | PARTIALLY — ME-005 and ME-006 are in plan but still partial in actionability. |
| 4 | Anti-loss honesty | 3 CAUTION items should be RISK (ME-005, ME-017, ME-010). 4 multi-mechanism interactions unacknowledged. | SIGNIFICANT | PARTIALLY — ME-005 is in plan with CAUTION rating. ME-017 and ME-010 deferred. |
| 5 | Conflict detection | 4 missing conflicts including MECHANICAL vs circuit breaker, PA-05 range vs tier system. | SIGNIFICANT | PARTIALLY — conflicts are moot for deferred items except ME-005. |
| 6 | Priority challenge | Subtractions ranked 36th/54th, should be 1st-5th. | CRITICAL | PARTIALLY — ME-037 (subtraction) is in plan. ME-054 (subtraction) is not. Gate-runner subtraction is not. |
| 7 | Missing items | Gate-runner subtraction plan (THE prerequisite) completely absent. Opus vs Sonnet confound unexamined. | CRITICAL | NO — neither gate-runner subtraction nor Opus experiment are in plan. |
| 8 | Paradigm challenge | More lines correlates with worse PA-05 across N=4 runs. | SIGNIFICANT | ACKNOWLEDGED — 8-change plan is deliberately smaller. But structural warning persists. |

---

### 8O. Complete Gap Statistics

| Category | Count | In 8-Plan | Coverage |
|----------|-------|-----------|----------|
| MISSING findings (File 18) | 18 | 0 | 0% |
| PARTIAL findings (File 18) | 34 | 6 full + 9 partial | 25% |
| Proposed NEW enrichments (File 18) | 8 | 0 | 0% |
| Proposed ME-NEW enrichments (File 20) | 13 | 0 | 0% |
| Zone 4 monotony | 1 | 0 | 0% |
| Cross-run NOT CAPTURED | 7 (3 actionable) | 0 | 0% |
| ARIA regression | 1 | 0 | 0% |
| 6-type taxonomy gaps | 6 types (1 missing enrichment) | 1 partial | 8% |
| Gorilla framing nuances | 4 | 0 | 0% |
| Paradigm questions (no spec fix) | 11 | 0 | 0% |
| Content observations (outside scope) | 6 | 0 | 0% |
| Adversarial prerequisites | 6 | 0 | 0% |
| Merge deduplication losses | 7 | 0 | 0% |
| Process implementation gaps | 8 | 0 | 0% |
| FIX-FAILED items not addressed | 6 | 0 | 0% |
| Un-numbered File 07/08 items | 10 | 0 | 0% |
| **TOTAL** | **~134 distinct items** | **~16 partially** | **~12%** |

---

*Sections 3 and 8 complete. 84 COULD items inventoried across 9 sub-categories. 134 gap/unresolved items inventoried across 15 categories. The 8-change plan at ~115 lines addresses the highest-convergence items but leaves 12% coverage of the full gap landscape. Highest-ROI additions to the plan: ME-054 (-13 lines), ME-035+ME-036 (+2 lines), ME-046 (+5 lines), ME-038 (+3 lines) — totaling -3 net lines.*

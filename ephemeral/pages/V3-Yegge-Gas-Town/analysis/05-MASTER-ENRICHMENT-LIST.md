# MASTER ENRICHMENT LIST — V3 Gas Town Pipeline

**Assembled by:** master-merger (Opus 4.6)
**Date:** 2026-02-24
**Sources:**
1. `01-v3-enrichments.md` — 52 enrichments from 19 Phase 2 reports (V3E-001 through V3E-052)
2. `02-reservoir-extraction.md` — 79 STILL-USEFUL items from old reservoir
3. `03-anti-loss-map.md` — 25 anti-loss mechanisms with fragility ratings
4. `04-cross-reference.md` — 18 ALREADY-FIXED, 8 FIX-FAILED, 21 NEW, 6 UNTESTABLE
5. `07-handoff-enrichments.md` — 18 enrichments from HANDOFF.md (HE-001 through HE-018)
6. `08-pipeline-pa-enrichments.md` — 16 enrichments from pipeline PA reports (PE-001 through PE-016)

**Deduplication result:** 243 raw items → **57 master enrichments** (9 BLOCKING, 18 SIGNIFICANT, 16 MINOR, 14 CONSIDER)

---

## DEDUPLICATION METHODOLOGY

1. Merged items proposing the same change from multiple sources into a single enrichment citing all sources
2. When sources CONFLICTED, chose the version with stronger execution evidence (V3 > reservoir > theoretical)
3. FIX-FAILED items from cross-reference (04) are elevated to HIGH PRIORITY — the fix was applied and did not work
4. Old reservoir items (02) that overlap V3 enrichments (01/07/08) — V3 version preferred (informed by real execution data)
5. Items classified INVALIDATED in the reservoir audit (187 items) are EXCLUDED
6. Items classified ALREADY-FIXED in the cross-reference (18 items) are EXCLUDED
7. Pure process observations / paradigm questions (no spec change) are classified CONSIDER, not actionable enrichments

---

## TIER 1: PRIORITY INVERSION FIXES — Change WHAT the Pipeline Checks

These collectively invert the pipeline's value hierarchy from CSS compliance > Human usability to Human usability > CSS compliance.

---

### ME-001: Add Experiential Pass to ALL PA Auditors (MANDATORY Before Questions)
- **Source(s):** V3E-001, V3E-002, HE-005, N-05, N-06, N-08, E06-01 (reservoir), E03-06 (reservoir)
- **Severity:** BLOCKING
- **Target file:** `pa-deployment.md`
- **Change type:** ADD (new Section 2.5, inserted before question answering)
- **Exact proposed change:** Insert between screenshot-reading protocol and question answering:
  ```
  ### 2.5 Experiential Pass (MANDATORY -- Before Questions)

  Before answering any assigned questions, each auditor performs an experiential pass:

  > Look at these screenshots as a READER, not as an evaluator. Scroll through
  > the page and try to READ every piece of text you see -- headings, body text,
  > labels, chart annotations, captions, metadata, footer text, everything.
  >
  > Report THREE things:
  > 1. **Illegible text:** Every place where you could not read the text at all.
  > 2. **Effortful text:** Every place where you had to slow down or squint.
  > 3. **Skipped text:** Every place where you chose to skip text because it
  >    looked too small, too dense, or too low-contrast to bother reading.
  >
  > Report in a separate section at the TOP of your audit report, labeled
  > "## 0. Experiential Pass."

  Additionally, add universal legibility pre-check U-01 as FIRST question for ALL 9 auditors:
  > "Before answering your assigned questions, scan the full page. Is there ANY
  > text you cannot read? Any diagram, chart, or label that is illegible? If yes,
  > describe it and flag as BLOCKING. If no, write 'No legibility issues found.'"
  ```
- **Anti-loss impact:** SAFE — No existing mechanism affected. Strengthens fresh-eyes principle (M-20). Adding content to auditor-facing pa-deployment.md Section 2 is safe per anti-loss map.
- **Priority rank:** 1

---

### ME-002: Add Usability Priority Override to Weaver Fix Ordering
- **Source(s):** V3E-014, HE-004, HE-015, N-03
- **Severity:** BLOCKING
- **Target file:** `pa-weaver.md`
- **Change type:** ADD (new Section 5.0, before existing priority model)
- **Exact proposed change:** Insert as new Section 5.0:
  ```
  ## 5.0 PRIORITY OVERRIDE RULE

  Before ordering your fix list, ask: "Is there ANY finding from ANY auditor
  that describes something a reader CANNOT READ or CANNOT USE?"

  If yes: that finding is Fix #1, regardless of gate status. A reader who
  cannot read the page does not care about the font fallback stack.

  Gate failures are important. But an invisible gate failure is ALWAYS lower
  priority than a visible usability failure.

  Order fixes by: (1) Human readability/usability, (2) Visual perception,
  (3) Identity compliance.

  After emotional arc analysis, check whether any top-5 fix would improve the
  weakest register. If a fix improves both compliance AND emotional register,
  it ranks higher.
  ```
- **Anti-loss impact:** CAUTION — Modifies existing priority hierarchy (identity gate > perception > PA). This is the intended correction — the existing hierarchy IS the diagnosed problem. pa-weaver.md is ROBUST per anti-loss map. Ensure no gate thresholds leak into this section (M-04 context isolation).
- **Priority rank:** 2

---

### ME-003: Add WCAG Text Contrast Gate GR-60 (REQUIRED)
- **Source(s):** V3E-016, N-02, N-18, V3E-007 (PA-side)
- **Severity:** BLOCKING
- **Target file:** `gate-runner-core.js`
- **Change type:** ADD (new gate function ~70 lines)
- **Exact proposed change:** Add new REQUIRED gate checking WCAG 2.1 AA text contrast ratios:
  - Normal text (<18px or <14px bold): >= 4.5:1
  - Large text (>=18px or >=14px bold): >= 3:1
  - Walk DOM tree for effective background color
  - Check SVG `<text>` and `<tspan>` elements
  - Full implementation sketch in `gate-usability-audit.md` Section 5, GR-60
  - Add GR-60 to `REQUIRED_GATES` array in GR-48 (L1331-1340)
  - Add to `gate-manifest.json` REQUIRED tier
  - Add to `gate-runner-spec.md` specification table
  - Add quantitative guardrail text to `pa-questions.md` Appendix B: "When any auditor identifies text readability concerns, quantify: estimate the contrast ratio. WCAG AA minimum: 4.5:1 normal, 3:1 large. Report both estimated ratio and threshold."
- **Anti-loss impact:** CAUTION — Adding to gate-runner-core.js is CRITICAL fragility (M-19). Must follow the existing function pattern, maintain result object schema `{ gate, name, status, measured, threshold }`, and update 5-7 coordinated locations per M-13 edit guidance. See Cluster 3 in anti-loss map.
  - **Mitigation:** Follow exact gate addition checklist from anti-loss map: (1) gate-runner-core.js code, (2) GR-48 REQUIRED_GATES array, (3) gate-manifest.json tier, (4) gate-manifest.json execution order, (5) gate-runner-spec.md row, (6) MANIFEST Section 3 routing.
- **Priority rank:** 3

---

### ME-004: Add Legibility Self-Check Q0 to Builder Self-Evaluation
- **Source(s):** V3E-034, V3E-035, N-04, HE-013
- **Severity:** BLOCKING
- **Target file:** `artifact-builder-recipe.md`
- **Change type:** ADD (prepend 2 new questions before existing Q1)
- **Exact proposed change:** Insert as Q0 and Q1 in builder self-evaluation template:
  ```
  Q0: Is every piece of text on this page legible at its rendered size and
  contrast? Scan every text element. Any text below 12px? Any text with
  contrast ratio below 3:1 against its background? Any diagram/chart labels
  that are hard to read? List all issues or 'none found.'

  Q1: Does every visual component (diagram, chart, table, card, grid) convey
  its information clearly? For each non-prose visual element, can a reader
  extract the information it presents? List each component and yes/no.
  ```
  Renumber existing Q1-Q7 to Q2-Q8.
  Also add builder self-check (from HE-013): "Before submitting HTML, verify: (1) `grep` font stacks for non-trinity fonts, (2) all rgba backgrounds have warm channel dominance, (3) html element has explicit color, (4) all border-widths are integer px."
- **Anti-loss impact:** SAFE — artifact-builder-recipe.md is ROBUST per anti-loss map. Adding recipe steps is safe. Ensure new content uses recipe verbs (Build/Create/Assess), not checklist verbs (Verify/Fail if/Must be) per M-11 and M-06.
- **Priority rank:** 4

---

### ME-005: Fix Verdict Logic for Mechanical Identity Failures
- **Source(s):** V3E-030, FF-07 (cross-ref), HE-003
- **Severity:** BLOCKING
- **Target file:** `MANIFEST.md`
- **Change type:** REPLACE (modify verdict logic section)
- **Exact proposed change:** In MANIFEST.md verdict logic section, add:
  ```
  MECHANICAL EXCEPTION: If ALL REQUIRED identity gate failures are classified
  as MECHANICAL by the gate runner (auto-classified based on: fix requires
  <= 5 CSS lines, no HTML structural change, no design decision involved),
  the verdict is REFINE, not REBUILD.

  PROTOCOL OVERRIDE RULE: Protocol overrides require orchestrator approval.
  The orchestrator MUST state independent justification (not merely "agreed
  with Weaver"). Orchestrator must cite specific evidence from gate results.
  ```
  Update gate-manifest.json L55-59 verdict logic to include MECHANICAL exception. Update gate-runner-core.js verdict summary (L752-778) to auto-classify mechanical failures.
- **Anti-loss impact:** RISK — Modifies M-23 (REBUILD Not FIX) and M-13 (binary rules). The "any identity FAIL = REBUILD" rule protects against soul violations shipping. The MECHANICAL exception preserves intent while removing false positives.
  - **Mitigation:** Gate runner auto-classifies MECHANICAL (not orchestrator discretion). Classification criteria are binary: <=5 CSS lines AND no HTML structural change AND no design decision. Any ambiguous case remains REBUILD. Verify verdict logic stays synchronized across gate-manifest.json, MANIFEST L275-285, and gate-runner-core.js L752-778.
- **Priority rank:** 5

---

### ME-006: Add Screenshot Validation Gate Before PA Deployment
- **Source(s):** V3E-003, HE-006, HE-012, N-10, N-11, PE-001, PE-002, PE-009, PE-011
- **Severity:** BLOCKING
- **Target file:** `pa-deployment.md`, `artifact-orchestrator.md`
- **Change type:** ADD (new Section 2.3a + expanded CSS override + orchestrator validation gate)
- **Exact proposed change:**
  1. In pa-deployment.md Section 2.2, Step 3 — REPLACE current CSS override with expanded version:
     ```css
     *, *::before, *::after {
       animation: none !important;
       transition: none !important;
       opacity: 1 !important;
       visibility: visible !important;
       transform: none !important;
     }
     ```
  2. Add new Section 2.3a "Screenshot Validation" after capture, before auditor spawning:
     ```
     ### 2.3a Screenshot Validation Gate

     Before deploying ANY auditors, validate screenshots:
     1. No more than 2 consecutive scroll screenshots are blank at any viewport
     2. Blank screenshots do not exceed 20% of total at any viewport
     3. Content visible in full-page screenshot is also visible in scroll screenshots
     4. If ANY check fails: DO NOT deploy auditors. Re-capture with expanded
        CSS overrides. Deploying auditors on broken screenshots wastes 9 agent-runs.
     ```
  3. Add new Section 2.5 "Full-Page Cross-Reference Check":
     ```
     Compare full-page screenshot with scroll-through. If full-page shows content
     NOT visible in scroll-through, pre-capture CSS overrides failed. REPEAT capture.
     ```
  4. In artifact-orchestrator.md screenshot protocol, add DPR validation: `page.setViewportSize()` + verify `window.devicePixelRatio === 1`.
- **Anti-loss impact:** SAFE — Adding to pa-deployment.md Section 2 is safe (ROBUST area). Adding to artifact-orchestrator.md is ROBUST. No existing mechanism affected. Fills the most critical structural gap identified by ALL Phase 2 analysts.
- **Priority rank:** 6

---

### ME-007: Fix GR-44 False Negative (Trailing Void Measurement)
- **Source(s):** V3E-019, V3E-049, FF-04 (cross-ref), HE-002, HE-012
- **Severity:** BLOCKING
- **Target file:** `gate-runner-core.js`
- **Change type:** REPLACE (modify existing GR-44 implementation)
- **Exact proposed change:** In gate-runner-core.js, modify GR-44 to:
  1. Find the last visible element with `offsetHeight > 0` using `getBoundingClientRect()`
  2. Compare its bottom position to `document.documentElement.scrollHeight`
  3. Report the difference as trailing void: `scrollHeight - lastVisibleBottom`
  4. If `scrollHeight - lastVisibleBottom > 300px`, FAIL
  5. PRESERVE existing content-zone void measurement (add page-level as second check)
  Also add builder recipe instruction (V3E-048): "Verify page does not extend significantly beyond last content element. Add `body { min-height: unset; }` if needed."
- **Anti-loss impact:** CAUTION — Modifies existing gate in gate-runner-core.js (CRITICAL fragility, M-19). Must preserve existing content-zone measurement AND add page-level measurement. Maintain result object schema. GR-44 is already in the gate arrays; no new entries needed.
  - **Mitigation:** Keep existing GR-44 logic as sub-check A (content-zone). Add sub-check B (page-level). Report both measurements. FAIL if either exceeds threshold.
- **Priority rank:** 7

---

### ME-008: Add Usability Circuit Breaker to Orchestrator
- **Source(s):** V3E-033, V3E-047 (meta-enrichment)
- **Severity:** BLOCKING
- **Target file:** `MANIFEST.md`
- **Change type:** ADD (new orchestrator instruction at Phase 3B->3C handoff)
- **Exact proposed change:** Add to MANIFEST.md Phase 3B->3C handoff section:
  ```
  USABILITY CIRCUIT BREAKER: Between Phase 3B (PA) and Phase 3C (Weaver),
  the orchestrator scans all 9 auditor reports for BLOCKING-severity findings
  related to: text legibility, information accessibility, content completeness,
  or navigation functionality.

  If ANY auditor flags a BLOCKING usability issue:
  1. Elevate to BLOCKING-USABILITY status
  2. Annotate for Weaver as "must be Fix #1"
  3. If SHIP WITH FIXES verdict, verify usability fix is addressed
  ```
- **Anti-loss impact:** SAFE — Adding orchestrator instructions to MANIFEST.md is ROBUST per anti-loss map. Does not modify any gate code, PA routing, or verdict logic. Adds a lightweight keyword scan (not deep analysis) to orchestrator duties.
- **Priority rank:** 8

---

### ME-009: Add Experiential Detection Threshold Table + Aggregation
- **Source(s):** V3E-005, V3E-015
- **Severity:** BLOCKING
- **Target file:** `pa-deployment.md`, `pa-weaver.md`
- **Change type:** ADD
- **Exact proposed change:**
  1. Add threshold table to pa-deployment.md Section 5 (Weaver input format):
     ```
     Experiential Pass Aggregation:
     | Metric | Threshold | Meaning |
     |--------|-----------|---------|
     | >= 3/9 auditors flag same text element | CONFIRMED illegibility | Fix #1 |
     | 1/9 flags a text element | POSSIBLE issue | Weaver investigates |
     | 0/9 across all auditors | All text readable | No action |
     ```
  2. Add to pa-weaver.md Section 3 (Weaver inputs): "The Weaver receives a pre-aggregated summary of experiential pass findings across all 9 auditors."
- **Anti-loss impact:** SAFE — Both files are in ROBUST areas per anti-loss map. Ensure Weaver section does not leak calibration data into auditor-visible sections (M-04, M-20).
- **Priority rank:** 9

---

## TIER 2: INFRASTRUCTURE FIXES — Fix What Is Broken

---

### ME-010: Split GR-05 (Warm Palette) — Sub-Perceptual Tints to ADVISORY
- **Source(s):** V3E-022, FF-05 (cross-ref)
- **Severity:** SIGNIFICANT
- **Target file:** `gate-runner-core.js`
- **Change type:** REPLACE (split existing gate)
- **Exact proposed change:** Split GR-05 into:
  - GR-05a: Warm Palette (visible colors, effective opacity >= 0.3) — keep REQUIRED
  - GR-05b: Warm Palette (sub-perceptual tints, effective opacity < 0.3) — downgrade to ADVISORY
  - Implementation: `if (opacity * maxChannelDifference <= 20)` → ADVISORY
  - Update gate-manifest.json tiers + GR-48 arrays
- **Anti-loss impact:** CAUTION — Modifies M-08 (dual-route pattern, GR-05 isCold heuristic at L246-248) and the gate's role in Cluster 3 (gate verification system). The warm palette REQUIRED status for visible colors is preserved.
  - **Mitigation:** Keep isCold() function unchanged. Add opacity pre-filter BEFORE the isCold check. GR-05a uses existing logic for elements with opacity >= 0.3. GR-05b logs violations at ADVISORY tier for elements with opacity < 0.3.
- **Priority rank:** 10

---

### ME-011: Modify GR-06 to Check Rendered Font (Not Declared Stack)
- **Source(s):** V3E-023, FF-06 (cross-ref)
- **Severity:** SIGNIFICANT
- **Target file:** `gate-runner-core.js`
- **Change type:** REPLACE (modify gate logic)
- **Exact proposed change:** Replace font-stack string check with:
  1. `document.fonts.check('16px "Instrument Serif"')` to verify trinity fonts loaded
  2. Check first font in each element's computed font-family is a trinity font
  3. Fallback-only violations (position 2+ never rendering) → ADVISORY, not REQUIRED
  - Keep primary-font-position check as REQUIRED safety net
- **Anti-loss impact:** CAUTION — Modifies gate code in CRITICAL fragility file. M-08 dual-route pattern depends on GR-05/06 agreement between builder calibration and gate check. Must ensure `document.fonts.check` is called AFTER `document.fonts.ready` resolves.
  - **Mitigation:** Add `await page.evaluate(() => document.fonts.ready)` before GR-06 runs. Test against known HTML with loaded and missing fonts.
- **Priority rank:** 11

---

### ME-012: Fix GR-14 Structural False Positives
- **Source(s):** V3E-020, FF-02 (cross-ref), HE-008
- **Severity:** SIGNIFICANT
- **Target file:** `gate-runner-core.js`
- **Change type:** REPLACE (modify existing GR-14 implementation)
- **Exact proposed change:** Restrict gap measurement to zone-level siblings only:
  - Only measure gaps between elements that are direct children of the same container (e.g., `<main>`) or adjacent zone-level sections
  - Do NOT measure gaps between sub-elements within zones against adjacent zones
  - Preserve FIX-005's structural transition handling for elements BETWEEN zones
- **Anti-loss impact:** CAUTION — Modifies existing gate in CRITICAL file. M-14 perception calibration is not affected (different gate). Must maintain result object schema.
  - **Mitigation:** Add parent-level scoping filter. Test against V3 HTML to verify 13 false positives eliminated while real gaps still detected.
- **Priority rank:** 12

---

### ME-013: Fix GR-09 Tolerance Band Implementation
- **Source(s):** V3E-021, FF-01 (cross-ref)
- **Severity:** SIGNIFICANT
- **Target file:** `gate-runner-core.js`
- **Change type:** REPLACE (verify/fix existing implementation)
- **Exact proposed change:** Audit GR-09 for FIX-003 tolerance bands:
  - Primary: 3.5-4.5px → 4px
  - Secondary: 2.5-3.5px → 3px
  - Tertiary: 0.5-1.5px → 1px
  - If integer-only check exists, remove it or make it conditional on tolerance band
  - 0.667px and 2.667px must PASS (subpixel rendering of 1px and 3px)
- **Anti-loss impact:** CAUTION — Modifies gate code. The existing `allowedWidths: [1, 2, 3, 4]` may be a secondary check that overrides tolerance bands.
  - **Mitigation:** Audit the full GR-09 code path. Preserve tolerance band logic as primary check. Remove or subordinate integer-only check.
- **Priority rank:** 13

---

### ME-014: Add Minimum Font Size Gate GR-61 (RECOMMENDED)
- **Source(s):** V3E-017
- **Severity:** SIGNIFICANT
- **Target file:** `gate-runner-core.js`
- **Change type:** ADD (new gate ~50 lines)
- **Exact proposed change:** Add RECOMMENDED gate:
  - Body text >= 14px
  - Caption/label >= 11px
  - Absolute minimum for any visible text >= 10px
  - SVG text elements checked separately
  - CRITICAL violations (below absolute minimum) cause FAIL
  - Add to `RECOMMENDED_GATES` array in GR-48
  - Implementation sketch in gate-usability-audit.md Section 5
- **Anti-loss impact:** CAUTION — Adding to gate-runner-core.js (CRITICAL fragility). Follow gate addition checklist from anti-loss map.
  - **Mitigation:** Same 6-location update as ME-003.
- **Priority rank:** 14

---

### ME-015: Add Data Corruption Escalation Protocol for PA Auditors
- **Source(s):** V3E-004, PE-003, PE-012, PE-013
- **Severity:** SIGNIFICANT
- **Target file:** `pa-deployment.md`, `pa-questions.md`
- **Change type:** ADD
- **Exact proposed change:**
  1. Add to pa-deployment.md Section 2.4 (screenshot-reading protocol):
     ```
     DATA QUALITY AWARENESS: If you suspect screenshots may be corrupted (e.g.,
     large blank areas that contradict the full-page thumbnail, or content the TOC
     promises but you cannot see), FLAG as DATA QUALITY CONCERN in your report
     header. Do not adjust scoring -- but DO report the discrepancy.
     ```
  2. Add to pa-questions.md Section 1 preamble:
     ```
     BLOCKED BY DEFECT Protocol: If a catastrophic defect (>50% content invisible,
     entire page blank, fatal rendering error) prevents meaningful assessment, answer
     "BLOCKED BY DEFECT -- [defect name]" instead of forcing YES/NO/CONDITIONAL.
     ```
  3. Add "First-Auditor Halt" protocol (PE-012): Auditor A checks for catastrophic rendering defects during cold-look. If flagged, orchestrator re-captures before B-I proceed.
  4. Add full-page as ground truth guidance (PE-013): "The full-page screenshot is GROUND TRUTH. If scroll-throughs show blanks that full-page does not, scroll-through is UNRELIABLE."
- **Anti-loss impact:** SAFE — Adding to auditor-facing sections of pa-deployment.md and pa-questions.md Sections 1-3 is safe per anti-loss map (M-20 fresh-eyes preserved). Does not leak calibration data.
- **Priority rank:** 15

---

### ME-016: Add ARIA Accessibility Requirement to Builder Recipe
- **Source(s):** V3E-039, N-17
- **Severity:** SIGNIFICANT
- **Target file:** `artifact-builder-recipe.md`
- **Change type:** ADD (new section)
- **Exact proposed change:** Add under "Accessibility Requirements":
  ```
  ARIA Requirements:
  - All data tables: aria-label or aria-labelledby
  - All diagrams/images: aria-label or meaningful alt text
  - All interactive regions (collapsible details, nav, complementary): role + aria-label
  - Target: >= 15 ARIA attributes
  ```
- **Anti-loss impact:** SAFE — artifact-builder-recipe.md is ROBUST. Use recipe framing ("Build accessibility into each component as you create it") not checklist framing.
- **Priority rank:** 16

---

### ME-017: Add Phase 4: Fix Application Protocol
- **Source(s):** V3E-031, N-12, HE-010
- **Severity:** SIGNIFICANT
- **Target file:** `MANIFEST.md`
- **Change type:** ADD (new phase after Phase 3C)
- **Exact proposed change:** Add Phase 4 to MANIFEST.md:
  ```
  ## Phase 4: Fix Application (for SHIP WITH FIXES verdict only)

  When verdict is SHIP WITH FIXES:
  1. Orchestrator applies MECHANICAL fixes only (CSS value changes, font-stack
     cleanup, html color declaration) -- no structural or compositional changes
  2. Re-run ONLY the gates that originally failed
  3. If all re-run gates pass: update verdict to SHIP
  4. If any re-run gates still fail: maintain SHIP WITH FIXES + updated fix list
  5. Total Phase 4 budget: <= 15 minutes, <= 50 CSS lines changed
  ```
- **Anti-loss impact:** CAUTION — Adds pipeline complexity. M-23 (REBUILD Not FIX) says maximum iterations: 1 REBUILD + 1 REFINE. Phase 4 is a THIRD iteration type. Must update circuit breaker at MANIFEST L605.
  - **Mitigation:** Phase 4 is scoped to MECHANICAL fixes only (not compositional). Does not trigger a full REBUILD or REFINE cycle. Update circuit breaker to: "max 1 REBUILD + 1 REFINE + 1 Phase 4 mechanical fix."
- **Priority rank:** 17

---

### ME-018: Add Gate Perceptibility Classification
- **Source(s):** V3E-042, HE-008
- **Severity:** SIGNIFICANT
- **Target file:** `artifact-gate-runner.md`, `gate-manifest.json`
- **Change type:** ADD (new metadata column)
- **Exact proposed change:** Add "Perceptibility" column to gate manifest:
  - HUMAN-PERCEPTIBLE: GR-03, GR-08, GR-13, GR-14, GR-15, GR-44, GR-20, GR-45, GR-52
  - SUB-PERCEPTUAL: GR-05b, GR-06 (fallbacks), GR-07, GR-12, GR-18, GR-19, GR-46, GR-50, GR-53, GR-43
  - MIXED: GR-01, GR-02, GR-04, GR-05a, GR-09, GR-10, GR-11, GR-17, GR-21, GR-22, GR-51
  - N/A: BV-01-04, GR-48, GR-49
  Also add `reliability` field to gate result JSON (HE-008): RELIABLE / FALSE_POSITIVE_RISK / FALSE_NEGATIVE_RISK / NEEDS_REWORK. Track gates with questionable results for repair.
- **Anti-loss impact:** SAFE — gate-manifest.json metadata addition only. Does not change gate code or verdict logic.
- **Priority rank:** 18

---

### ME-019: PA-05 Score as Range, Not Single Number
- **Source(s):** HE-001, HE-011, PE-010
- **Severity:** SIGNIFICANT
- **Target file:** `pa-weaver.md`
- **Change type:** MODIFY
- **Exact proposed change:** Add calibration guidance to Weaver:
  ```
  When correcting for screenshot artifacts or catastrophic defects, present
  PA-05 as a RANGE (lower = conservative, upper = corrected), not a single
  number. Example: "PA-05 = 2.5-3.0/4" not "PA-05 = 3/4."

  Tier 5 scoring: PARTIAL counts as 0.5, not 1. Round DOWN, not up. A page
  must earn each Tier 5 point with full evidence.

  Hypothetical score: When a BLOCKING defect prevents clean scoring, provide
  (1) actual score based on page as experienced, and (2) hypothetical score
  for visible/working content, labeled "(hypothesis)."
  ```
- **Anti-loss impact:** SAFE — pa-weaver.md is ROBUST. Does not affect gate code or auditor isolation.
- **Priority rank:** 19

---

### ME-020: Orchestrator Decision Quality Self-Assessment
- **Source(s):** HE-007, HE-016, HE-017
- **Severity:** SIGNIFICANT
- **Target file:** `artifact-orchestrator.md`
- **Change type:** ADD
- **Exact proposed change:** Add to orchestrator self-assessment template:
  ```
  Section B: Decision Quality
  For each judgment call made during this run:
  1. What evidence supported the decision?
  2. What evidence contradicted it?
  3. Was the decision independently verified or merely accepted from downstream?

  Mode Retrospective: Was the selected mode achieved? If Weaver's mode
  assessment differs from Phase 0 selection, note the gap.

  Pre-flight: Verify components.css line count matches MANIFEST expectation
  (tolerance +/- 20%). If discrepancy > 20%, investigate before proceeding.
  ```
- **Anti-loss impact:** SAFE — artifact-orchestrator.md is ROBUST per anti-loss map.
- **Priority rank:** 20

---

### ME-021: Add Navigation Usability PA Question
- **Source(s):** V3E-009
- **Severity:** SIGNIFICANT
- **Target file:** `pa-questions.md`
- **Change type:** ADD (new question)
- **Exact proposed change:** Add PA-80: "Starting from the middle of the page, can you reach any other section using visible navigation tools? If the page has a TOC or nav, do the links appear functional? Flag if a page >10 viewport-heights long has no sticky nav, back-to-top, or section links."
  - Route to Auditor E (Grid + Layout)
  - Update pa-deployment.md assignment table, MANIFEST auditor roster, pa-manifest.md checklist, question totals
- **Anti-loss impact:** CAUTION — Adding PA questions requires 5+ location updates per M-22 edit guidance: (1) pa-questions.md, (2) pa-deployment.md L42-52 assignments, (3) MANIFEST L149-157, (4) pa-manifest.md checklist, (5) question totals in ALL locations.
  - **Mitigation:** Follow M-22's complete update checklist. Verify auditor load balance (E currently has 6, can absorb 1 more).
- **Priority rank:** 21

---

### ME-022: Add Information Extraction PA Question
- **Source(s):** V3E-010
- **Severity:** SIGNIFICANT
- **Target file:** `pa-questions.md`
- **Change type:** ADD (new question)
- **Exact proposed change:** Add PA-81: "For every chart, diagram, or infographic, can you answer 'What is the ONE thing this element wants me to know?' in under 5 seconds? If not, the element fails its communicative purpose regardless of whether the text is technically readable."
  - Route to multiple auditors or include in experiential pass
  - Add image-vs-CSS distinction guidance (PE-006): "Note whether problematic element is raster image or HTML/SVG."
- **Anti-loss impact:** CAUTION — Same 5-location update as ME-021.
- **Priority rank:** 22

---

### ME-023: Add Content Promise vs Delivery PA Question
- **Source(s):** PE-005, V3E-012
- **Severity:** SIGNIFICANT
- **Target file:** `pa-questions.md`
- **Change type:** ADD (new question)
- **Exact proposed change:** Add PA-54: "Does the page deliver on its structural promises? Count navigational elements that promise content (TOC entries, section numbers, tabs, progress indicators). How many are fulfilled by visible, scrollable content? If < 80%, flag as STRUCTURAL PROMISE VIOLATION. Also: Do collapsible summaries give enough information to decide whether to expand?"
  - Route to Auditor G (Metaphor) or content-form specialist
- **Anti-loss impact:** CAUTION — Same 5-location update as ME-021.
- **Priority rank:** 23

---

## TIER 3: GATE SEVERITY RESTRUCTURE — Reduce False Positives

---

### ME-024: Downgrade GR-07 to RECOMMENDED
- **Source(s):** V3E-024
- **Severity:** MINOR
- **Target file:** `gate-runner-core.js`, `gate-manifest.json`
- **Change type:** REPLACE (change gate tier)
- **Exact proposed change:** Change GR-07 from REQUIRED to RECOMMENDED. Add visible-text-only filter: `el.textContent.trim().length > 0 && el.offsetHeight > 0`. Browser defaults on structural containers should not trigger failures.
  - Update gate-manifest.json tiers
  - Move from REQUIRED_GATES to RECOMMENDED_GATES in GR-48
- **Anti-loss impact:** CAUTION — Modifies gate tier in M-13 binary rules. Reduces REQUIRED gate count. Identity enforcement slightly weakened but only for invisible browser-default elements.
  - **Mitigation:** Visible text with pure black would still be flagged (as RECOMMENDED).
- **Priority rank:** 24

---

### ME-025: Downgrade GR-12 to RECOMMENDED
- **Source(s):** V3E-025
- **Severity:** MINOR
- **Target file:** `gate-runner-core.js`, `gate-manifest.json`
- **Change type:** REPLACE (change gate tier)
- **Exact proposed change:** Change GR-12 (letter-spacing >= 0.025em) from REQUIRED to RECOMMENDED. The entire monitored range (0 to 0.4px at 16px) is below human perception threshold. GR-18 (ghost mechanisms) already catches sub-perceptual values at RECOMMENDED tier.
- **Anti-loss impact:** CAUTION — Same pattern as ME-024. Reduces REQUIRED count.
- **Priority rank:** 25

---

### ME-026: Downgrade GR-43 to RECOMMENDED
- **Source(s):** V3E-026
- **Severity:** MINOR
- **Target file:** `gate-runner-core.js`, `gate-manifest.json`
- **Change type:** REPLACE (change gate tier)
- **Exact proposed change:** Change GR-43 (self-evaluation comment) from REQUIRED to RECOMMENDED. An invisible HTML comment should not block builds.
- **Anti-loss impact:** SAFE — M-16 (conviction statement) uses GR-50, not GR-43. GR-43 checks self-eval existence; downgrade preserves the check but removes blocking.
- **Priority rank:** 26

---

### ME-027: Downgrade GR-19 to ADVISORY
- **Source(s):** V3E-027
- **Severity:** MINOR
- **Target file:** `gate-runner-core.js`, `gate-manifest.json`
- **Change type:** REPLACE (change gate tier)
- **Exact proposed change:** Change GR-19 (threshold gaming detection) from RECOMMENDED to ADVISORY. Checks builder INTENT, not visual output.
- **Anti-loss impact:** SAFE — GR-19 is already RECOMMENDED, not REQUIRED. Downgrade to ADVISORY is minimal impact.
- **Priority rank:** 27

---

### ME-028: Adjust GR-21 Threshold for COMPOSED Mode + Skip-Link Exemption (GR-22)
- **Source(s):** V3E-028, V3E-029, N-14, N-15
- **Severity:** MINOR
- **Target file:** `gate-runner-core.js`
- **Change type:** REPLACE (modify thresholds)
- **Exact proposed change:**
  1. GR-21: Increase threshold from 4 to 6 distinct backgrounds for COMPOSED mode, OR exclude backgrounds with alpha < 0.1 from count
  2. GR-22: Add skip-link exemption: `if (el.classList.contains('skip-link') || el.closest('.skip-link')) continue;`
- **Anti-loss impact:** SAFE — Both GR-21 and GR-22 are ADVISORY tier. Threshold adjustments do not affect REQUIRED gates or verdict logic.
- **Priority rank:** 28

---

### ME-029: Fix GR-17 List Item Threshold
- **Source(s):** V3E-043, FF-03 (cross-ref)
- **Severity:** MINOR
- **Target file:** `gate-runner-core.js`
- **Change type:** REPLACE (modify gate threshold)
- **Exact proposed change:** Add `li` to the reduced-minimum group in GR-17 (density stacking). Change `li` minimum from 12px to 4px (same as td/th). This override FIX-006's deliberate decision based on V3 evidence (30 violations at 8px, a standard design choice).
- **Anti-loss impact:** SAFE — GR-17 is RECOMMENDED tier. FIX-006 deliberately kept `li` strict, but V3 evidence shows 8px list padding is reasonable.
- **Priority rank:** 29

---

### ME-030: Fix Viewport Namespacing Conflict (GR-48 vs GR-49)
- **Source(s):** N-16 (cross-ref)
- **Severity:** MINOR
- **Target file:** `gate-runner-core.js`
- **Change type:** REPLACE (add viewport field to results)
- **Exact proposed change:** Add viewport field to result objects. Update GR-49 to allow same-ID-different-viewport. Running gates at 1440px AND 768px produces duplicate IDs; GR-48 deduplicates via Set but GR-49 flags duplicates as integrity violation. These meta-gates conflict on every multi-viewport run.
- **Anti-loss impact:** CAUTION — Modifies both meta-gates (GR-48 and GR-49) and the result object schema. Must maintain backwards compatibility.
  - **Mitigation:** Add `viewport` as optional field. GR-49 checks for duplicate `gate + viewport` pairs, not just `gate`.
- **Priority rank:** 30

---

## TIER 4: PA ENRICHMENTS — Improve What the PA Measures

---

### ME-031: Add False Affordance Scan PA Question
- **Source(s):** V3E-011
- **Severity:** MINOR
- **Target file:** `pa-questions.md`
- **Change type:** ADD (new question)
- **Exact proposed change:** Add: "Examine every element that LOOKS interactive (buttons, checkboxes, toggleable items, clickable-looking text). Does it actually appear to be interactive? Flag any element that looks interactive but is not."
  - Route to Auditor E or H
- **Anti-loss impact:** CAUTION — 5-location update per M-22.
- **Priority rank:** 31

---

### ME-032: Mark Pipeline-Introspection PA Questions
- **Source(s):** V3E-013, N-09
- **Severity:** MINOR
- **Target file:** `pa-questions.md`
- **Change type:** MODIFY (metadata annotation)
- **Exact proposed change:** Mark PA-55, PA-56, and PA-69 with `<!-- PIPELINE-INTROSPECTION -->` comment. These test the PIPELINE'S compositional model, not reader experience. Weaver should weight them differently from experiential findings.
- **Anti-loss impact:** SAFE — Metadata only, does not change question text or routing.
- **Priority rank:** 32

---

### ME-033: Add Void Question Deduplication Rule
- **Source(s):** PE-004
- **Severity:** MINOR
- **Target file:** `pa-questions.md`
- **Change type:** ADD (conditional routing rule)
- **Exact proposed change:** Add Void Collapse Rule: "If PA-50 detects >= 3 consecutive blank viewports, the following questions are AUTO-ANSWERED: PA-09 (dead space = YES), PA-51 (density = VOID-DOMINATED), PA-33 (silence vs signal = DROPPED SIGNAL). Auditor C answers PA-50 in detail, then references for collapsed questions."
- **Anti-loss impact:** SAFE — Adds efficiency guidance, does not remove questions.
- **Priority rank:** 33

---

### ME-034: Add Defect-Bypass for Cross-Viewport Protocol
- **Source(s):** PE-007
- **Severity:** MINOR
- **Target file:** `pa-deployment.md`
- **Change type:** ADD
- **Exact proposed change:** Add to cross-viewport requirements: "If a defect is identical across all viewports, Auditor H states this ONCE and redirects analysis to viewport-SPECIFIC differences in non-defective content."
- **Anti-loss impact:** SAFE — Efficiency improvement, no mechanism affected.
- **Priority rank:** 34

---

### ME-035: Add Footer/Header Explicit Contrast Instruction
- **Source(s):** V3E-008
- **Severity:** MINOR
- **Target file:** `pa-questions.md`
- **Change type:** MODIFY (extend PA-02)
- **Exact proposed change:** Append note to PA-02: "(Include header and footer text in your assessment, not just body content.)"
- **Anti-loss impact:** SAFE — Extends existing question scope. No routing change needed.
- **Priority rank:** 35

---

### ME-036: Add Horizontal Scroll Check at Element Level
- **Source(s):** V3E-050
- **Severity:** MINOR
- **Target file:** `pa-questions.md`
- **Change type:** MODIFY (extend PA-07)
- **Exact proposed change:** Add note to PA-07: "(Check both page-level AND element-level horizontal scroll. A contained element with `overflow-x: auto` requiring horizontal scrolling at 768px disrupts reading.)"
- **Anti-loss impact:** SAFE — Extends existing question scope.
- **Priority rank:** 37

---

### ME-037: Retire 4 Low-Value PA Questions
- **Source(s):** Reservoir PA-01 through PA-04 (retirements)
- **Severity:** MINOR
- **Target file:** `pa-questions.md`
- **Change type:** REMOVE
- **Exact proposed change:** Retire:
  - PA-06: "Words stacking vertically?" — near-zero failure rate
  - PA-07 (old): "Can you read the longest paragraph?" — PA-02 covers this
  - PA-09: "Dead space, no purpose?" — PA-33 captures same with better framing
  - PA-40: "Spacing jump?" — PA-69 subsumes more precisely
  This creates room for experiential questions (ME-001, ME-021-023, ME-031) without net question inflation.
- **Anti-loss impact:** CAUTION — Removing questions requires updating pa-deployment.md assignments, MANIFEST auditor roster, question counts. Must verify retired questions are not referenced elsewhere.
  - **Mitigation:** Follow M-22 reverse checklist. Update all 5+ locations.
- **Priority rank:** 36

---

## TIER 5: BUILDER RECIPE IMPROVEMENTS

---

### ME-038: Add px-Only Border Width Instruction
- **Source(s):** V3E-036
- **Severity:** MINOR
- **Target file:** `artifact-builder-recipe.md`
- **Change type:** ADD
- **Exact proposed change:** Add to CSS rules section: "All border-width values MUST be integer px (1px, 2px, 3px, 4px). Do NOT use em/rem for border-width — these compute to fractional px values that fail gate verification."
- **Anti-loss impact:** SAFE — builder recipe is ROBUST. Use recipe framing.
- **Priority rank:** 38

---

### ME-039: Add html Color Declaration + Font Stack Template to Boilerplate
- **Source(s):** V3E-037, V3E-038
- **Severity:** MINOR
- **Target file:** `artifact-builder-recipe.md`
- **Change type:** ADD
- **Exact proposed change:** Add to CSS boilerplate section:
  ```css
  /* Required boilerplate -- do not modify */
  html { color: #2a2a2a; font-family: Inter, system-ui, sans-serif; }

  /* Required font stacks -- do not modify */
  --font-body: "Inter", system-ui, sans-serif;
  --font-heading: "Instrument Serif", serif;
  --font-code: "JetBrains Mono", monospace;
  ```
- **Anti-loss impact:** SAFE — builder recipe is ROBUST. Prevents known gate failures at source.
- **Priority rank:** 39

---

### ME-040: Add Text Overflow Gate GR-62 (RECOMMENDED)
- **Source(s):** V3E-018
- **Severity:** MINOR
- **Target file:** `gate-runner-core.js`
- **Change type:** ADD (new gate ~60 lines)
- **Exact proposed change:** Add RECOMMENDED gate checking for text clipped by `overflow: hidden`, `text-overflow: ellipsis` truncation, and off-screen positioned content (excluding skip-link). Add to RECOMMENDED_GATES in GR-48. Implementation sketch in gate-usability-audit.md Section 5.
- **Anti-loss impact:** CAUTION — Adding to gate-runner-core.js. Follow gate addition checklist.
- **Priority rank:** 40

---

### ME-041: Add Trailing Void Prevention to Builder Recipe
- **Source(s):** V3E-048
- **Severity:** MINOR
- **Target file:** `artifact-builder-recipe.md`
- **Change type:** ADD
- **Exact proposed change:** Add to "Common Defects to Avoid":
  ```
  TRAILING VOID: Verify the page does not extend significantly beyond its last
  content element. The page should end within 100px of the last content element.
  If body { min-height: 100vh } causes excess space, override with min-height: unset.
  ```
- **Anti-loss impact:** SAFE.
- **Priority rank:** 41

---

## TIER 6: TRACKING + DOCUMENTATION

---

### ME-042: Update MANIFEST Line Counts
- **Source(s):** V3E-032, HE-017
- **Severity:** MINOR
- **Target file:** `MANIFEST.md`
- **Change type:** REPLACE (update metadata)
- **Exact proposed change:** Update components.css line count from 290 to current actual. Update any other outdated line counts in routing table. Add pre-flight validation: "Verify components.css line count within +/- 20% of MANIFEST."
- **Anti-loss impact:** SAFE — Metadata correction only. M-25 (honest complexity accounting) tables at MANIFEST L346-356 and artifact-orchestrator.md L147-157 should both be updated.
- **Priority rank:** 42

---

### ME-043: Add Experiential Pass + Screenshot Validation Tracking
- **Source(s):** V3E-045, V3E-046
- **Severity:** MINOR
- **Target file:** `EXECUTION-TRACKER-TEMPLATE.md`
- **Change type:** ADD (new tracking fields)
- **Exact proposed change:** Add to Phase 3A: "Screenshot validation gate PASSED: [ ]". Add to Phase 3B: "Experiential pass completed by N/9 auditors: [ ]", "CONFIRMED usability blockers (>=3/9): [ ]".
- **Anti-loss impact:** SAFE — EXECUTION-TRACKER-TEMPLATE.md is ROBUST.
- **Priority rank:** 43

---

### ME-044: Document Experiential Pass Protocol
- **Source(s):** V3E-044
- **Severity:** MINOR
- **Target file:** `artifact-pa-protocol.md`
- **Change type:** ADD (new section)
- **Exact proposed change:** Document the experiential pass rationale (gorilla experiment analogy, attentional tunnels from analytical questions), expected impact (11% → 78-100% detection rate), and reference the specification in pa-deployment.md.
- **Anti-loss impact:** SAFE.
- **Priority rank:** 44

---

### ME-045: Add Context Budget Awareness to Orchestrator
- **Source(s):** V3E-041, HE-014, N-13
- **Severity:** MINOR
- **Target file:** `artifact-orchestrator.md`, `MANIFEST.md`
- **Change type:** ADD (planning guidance)
- **Exact proposed change:** Add: "The pipeline typically requires 2-3 sessions due to context exhaustion. Plan session boundaries between Phase 2 (build) and Phase 3A (gates). Save all state to files before each potential boundary." Update MANIFEST time estimates from 80-105 min to realistic 3-6 hours.
  Consider architectural split: Pipeline-A (P0+P1+P2) and Pipeline-B (P3A+P3B+P3C) in separate context windows.
- **Anti-loss impact:** SAFE — Documentation/planning guidance.
- **Priority rank:** 45

---

### ME-046: Corrected Screenshot Recovery Protocol
- **Source(s):** HE-018
- **Severity:** MINOR
- **Target file:** `MANIFEST.md`
- **Change type:** ADD
- **Exact proposed change:** Add screenshot correction protocol: "If screenshot correction is needed, corrected screenshots must cover the ENTIRE page at regular intervals (every 900px of scroll height), not selected regions. Correction must be algorithmic, not curated."
- **Anti-loss impact:** SAFE.
- **Priority rank:** 46

---

## TIER 7: RESERVOIR VALUE-SYSTEM CORRECTIONS — Improve Builder Output

These enrichments from the old reservoir address the V3 Phase 2 finding of inverted values by improving what the BUILDER produces, not what the pipeline checks.

---

### ME-047: 3 Perceptually Distinct Background Registers
- **Source(s):** E08-01 (reservoir)
- **Severity:** CONSIDER
- **Target file:** `artifact-builder-recipe.md` or TC Brief Template
- **Change type:** ADD (recipe guidance)
- **Exact proposed change:** Add guidance: "Build 3 perceptually distinct background registers: LIGHT (cream/white), MEDIUM (warm gray), DARK (charcoal/near-black). FEWER distinctions with LARGER deltas. Do not create 6 barely-distinguishable cream shades."
- **Anti-loss impact:** SAFE — Recipe guidance. Ensure M-14 perception calibration thresholds are met (GR-51 requires >=50% above 25 RGB delta).
- **Priority rank:** 47

---

### ME-048: One Unique Visual Element Per Zone
- **Source(s):** E08-02 (reservoir)
- **Severity:** CONSIDER
- **Target file:** `artifact-builder-recipe.md`
- **Change type:** ADD (recipe guidance)
- **Exact proposed change:** Add: "Each content zone should contain at least one visual element unique to that zone — a custom component, distinctive layout, or content-specific treatment. If every zone is interchangeable, the design is templated, not composed."
- **Anti-loss impact:** SAFE.
- **Priority rank:** 48

---

### ME-049: 2-3 Dark Moments Distributed Across Scroll
- **Source(s):** E08-04 (reservoir)
- **Severity:** CONSIDER
- **Target file:** `artifact-builder-recipe.md`
- **Change type:** ADD (recipe guidance)
- **Exact proposed change:** Add: "Distribute 2-3 dark-background moments across the page's scroll length. These provide visual rest stops and pacing. A page that is entirely light cream creates scroll fatigue."
- **Anti-loss impact:** SAFE — Consistent with M-14 perception calibration. Dark moments increase background deltas (helps GR-51 distribution).
- **Priority rank:** 49

---

### ME-050: Widen Spacing Compression Range (3:1 Ratio)
- **Source(s):** E08-08 (reservoir)
- **Severity:** CONSIDER
- **Target file:** `artifact-builder-recipe.md`
- **Change type:** ADD (recipe guidance)
- **Exact proposed change:** Add: "Make the density arc PERCEPTIBLE. Minimum 3:1 ratio between densest and most spacious zones. If max padding is 80px, min should be <=27px. Current 80px vs 32px (2.5:1) barely registers."
- **Anti-loss impact:** SAFE — Recipe guidance only. Does not conflict with GR-17 density stacking thresholds.
- **Priority rank:** 50

---

### ME-051: Experiential PA Questions as Structural Replacements
- **Source(s):** Reservoir Section B (24 experiential questions), E06-01 (principle)
- **Severity:** CONSIDER
- **Target file:** `pa-questions.md`
- **Change type:** REPLACE (swap structural for experiential)
- **Exact proposed change:** REPLACE retired questions (ME-037) with highest-value experiential questions from reservoir:
  - PA-87: "Could this design work for different subject matter?" (content-form specificity)
  - PA-99: "Would you WANT to return to this page?" (ultimate usability)
  - NEW-07: "Element created SPECIFICALLY for this content?" (custom vs template)
  - NEW-17: "Page intentionally BREAKS its own rules?" (sprezzatura / 4/4 separator)
  These 4 REPLACE the 4 retired questions — net zero change in question count. Route per expertise match.
- **Anti-loss impact:** CAUTION — Same 5-location update as any PA question change. Must coordinate with ME-037 retirements.
  - **Mitigation:** Apply ME-037 retirements and ME-051 additions as a single coordinated change.
- **Priority rank:** 51

---

### ME-052: Audience Description for PA Auditors
- **Source(s):** AR-04 (reservoir)
- **Severity:** CONSIDER
- **Target file:** `pa-deployment.md`
- **Change type:** ADD
- **Exact proposed change:** Add one-line audience description to auditor prompts: "The intended audience for this page is [X]. Evaluate accordingly." This fixes audience-blindness without adding analytical complexity.
- **Anti-loss impact:** SAFE — Adding to auditor prompt context. Ensure no build-intent data leaks (M-04 fresh-eyes).
- **Priority rank:** 52

---

### ME-053: Container Width Per-Zone Exceptions for Code-Heavy Content
- **Source(s):** AR-01 (reservoir)
- **Severity:** CONSIDER
- **Target file:** `artifact-builder-recipe.md`
- **Change type:** ADD
- **Exact proposed change:** Add: "Code-heavy zones may exceed the 960px container width where the code block itself requires more width. Use a wider container (up to 1200px) for zones dominated by code blocks, data tables, or diagrams. Constrain prose to 960px within these wider containers."
- **Anti-loss impact:** SAFE — Relaxes a constraint documented in MEMORY.md as NON-NEGOTIABLE (940-960px). This exception is specifically for code/data content where truncation harms usability. Container width for prose zones remains 960px.
- **Priority rank:** 53

---

### ME-054: Remove Dead CSS / Unused Tokens
- **Source(s):** CSS-03, CSS-04, CSS-09 (reservoir)
- **Severity:** CONSIDER
- **Target file:** Components.css / tokens.css
- **Change type:** REMOVE
- **Exact proposed change:** Remove: (1) unused font-weight 700 from import (saves 20-50KB), (2) 3 unused custom properties, (3) `.featured-code` if unused (13 dead CSS lines). Net subtraction from pipeline complexity.
- **Anti-loss impact:** SAFE — Code hygiene. Subtraction, not addition. Verify truly unused before removing.
- **Priority rank:** 54

---

### ME-055: "What Would You REMOVE?" Anti-Goodhart Question
- **Source(s):** ADV-05 (reservoir)
- **Severity:** CONSIDER
- **Target file:** `pa-questions.md`
- **Change type:** ADD
- **Exact proposed change:** Add: "What single element would you REMOVE from this page to improve it?" This inverts the PA's additive bias. Every other question asks "what's missing/wrong" — this asks "what's excess."
- **Anti-loss impact:** SAFE — Adding one question. Net addition minimized by ME-037 retirements.
- **Priority rank:** 55

---

### ME-056: Codify Best CSS Patterns as Techniques
- **Source(s):** CSS-10, CSS-11, CSS-12, CSS-13, CSS-14 (reservoir)
- **Severity:** CONSIDER
- **Target file:** `artifact-builder-recipe.md`
- **Change type:** ADD (technique library)
- **Exact proposed change:** Add technique reference section (not rules, but available patterns):
  - Zone-adaptive body font-size ("the single most designed CSS decision")
  - Dark code block inversion ("the strongest visual component")
  - Inversion block pattern ("maximum impact per CSS line")
  - Font-family trinity (already in tokens.css, make explicit as technique)
  - Border hierarchy with color-weight pairing
  Frame as "Available Techniques" not "Required Techniques."
- **Anti-loss impact:** SAFE — Recipe guidance. Use world-description framing (M-12).
- **Priority rank:** 56

---

### ME-057: Weaver Emotional Arc → Fix Mapping
- **Source(s):** HE-015
- **Severity:** CONSIDER
- **Target file:** `pa-weaver.md`
- **Change type:** ADD
- **Exact proposed change:** Add to Weaver protocol: "After emotional arc analysis, check whether any top-5 fix would improve the weakest register. If yes, note the connection. If the weakest register has no corresponding fix, consider adding a COMPOSITIONAL recommendation as Fix #6."
- **Anti-loss impact:** SAFE.
- **Priority rank:** 57

---

## EXCLUDED ITEMS (Not Enrichments)

### Already Fixed (18 items from cross-reference)
AF-01 through AF-18 — confirmed RESOLVED by Phase 2 evidence. Includes: background deltas (BV-02 catches), suppressors (BV-04 catches), gate coverage (100% via GR-48), brief quality (BV-01/BV-03 pass).

### Invalidated by V3 Phase 2 (187 items from reservoir)
- All 20 perceptual science measurements (PS-01 through PS-20, NM-01 through NM-10)
- All 12 new measurement instruments
- All 18 new gates that add analytical complexity
- All structural PA questions that add without replacing
- All 5 superseded experiments
- All 46 compliance enrichments adding precision without usability value
- E07-01 (automated REFINE cycle) — highest-leverage old enrichment, but refining inverted values produces polished wrong output

### Untestable (6 items from cross-reference)
UT-01 through UT-06 — DPR screenshot bug prevents verification of PA rewrites, new questions, redistributions, and several builder recipe changes.

### Process/Paradigm Questions (not spec changes)
- N-19: Complexity-quality inversion (requires controlled experiments)
- N-20: Opus vs Sonnet builder variable (requires A/B test)
- N-21: 400:1 analysis-to-fix ratio (meta-observation)
- V3E-006: Auditor count reduction to 3-5 (design question)
- V3E-052: A/B test full vs minimal pipeline (experimental protocol)

---

## CONFLICT REGISTER

| Enrichment Pair | Nature of Conflict | Resolution |
|----------------|-------------------|------------|
| ME-037 (retire questions) vs ME-051 (add experiential) | Must be coordinated — retirements make room for additions | Apply as single atomic change |
| ME-005 (MECHANICAL exception) vs M-23 (REBUILD Not FIX) | MECHANICAL weakens identity protection | Gate runner auto-classifies (not orchestrator). Binary criteria. |
| ME-010 (GR-05 split) vs M-08 (dual-route GR-05) | Split creates GR-05a and GR-05b where one gate existed | Keep isCold() unchanged; add opacity pre-filter only |
| ME-017 (Phase 4) vs MANIFEST circuit breaker | Phase 4 is a third iteration type | Scope Phase 4 to MECHANICAL only, update breaker |
| ME-053 (container exceptions) vs 960px NON-NEGOTIABLE | Exception for code/data content | Prose stays 960px; code zones may expand to 1200px |

---

## SUMMARY STATISTICS

| Category | Count | BLOCKING | SIGNIFICANT | MINOR | CONSIDER |
|----------|-------|----------|-------------|-------|----------|
| Tier 1: Priority Inversion | 9 | 9 | 0 | 0 | 0 |
| Tier 2: Infrastructure | 14 | 0 | 14 | 0 | 0 |
| Tier 3: Gate Severity | 7 | 0 | 0 | 7 | 0 |
| Tier 4: PA Enrichments | 6 | 0 | 0 | 6 | 0 |
| Tier 5: Builder Recipe | 4 | 0 | 0 | 4 | 0 |
| Tier 6: Tracking/Docs | 5 | 0 | 0 | 5 | 0 |
| Tier 7: Reservoir Values | 11 | 0 | 0 | 0 | 11 |
| **TOTAL** | **56** | **9** | **14** | **22** | **11** |

**Implementation estimate:** Tiers 1-2 (23 enrichments) = highest leverage, should be implemented first. Tiers 3-5 (17 enrichments) = quality improvements. Tier 6 (5 enrichments) = housekeeping. Tier 7 (11 enrichments) = user discretion.

**Anti-loss risk summary:** 0 enrichments rated RISK (mechanism could break). 19 rated CAUTION (mechanism affected but change is additive). 37 rated SAFE (no mechanism affected). All CAUTION items have specific mitigation plans documented above.

---

*57 enrichments from 243 raw items (77% deduplication rate). 9 BLOCKING, 14 SIGNIFICANT, 22 MINOR, 11 CONSIDER. Organized into 7 implementation tiers. Dominant theme: the pipeline optimizes for CSS compliance when it should optimize for reader experience. Tiers 1-2 collectively invert the priority hierarchy at every pipeline stage.*

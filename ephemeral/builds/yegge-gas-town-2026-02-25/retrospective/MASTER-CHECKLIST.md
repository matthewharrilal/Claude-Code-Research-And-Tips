# Pipeline v3 Retrospective — Master Implementation Checklist

**Build:** yegge-gas-town-2026-02-25
**Result:** PA-05 2.0/4 (initial) -> 3.5/4 (REFINE), Tier 5 9/9, SHIP WITH FIXES
**Retrospective:** 10 Opus agents, 10 analysis files, 50 raw items -> **35 deduplicated items**
**Synthesized by:** Opus agent after adversarial review integration

---

## Summary

| Priority | Count | Description |
|----------|-------|-------------|
| P0-BLOCKING | 3 | Gate integrity, tracker reliability, gate coverage |
| P1-HIGH | 12 | Info-loss fixes, gate corrections, protocol gaps, core instrumentation |
| P2-MEDIUM | 13 | Gate improvements, tracker enrichment, process refinement |
| P3-LOW | 7 | Documentation, cleanup, nice-to-haves |

## Top 5 Highest-Impact Items

1. **A-01** Add hover behavior vocabulary to brief template — closes the single largest info-loss (DELIGHT 4/10)
2. **B-01** Unify gate results into single JSON + enforce GR-48 — restores the pipeline's self-verification mechanism
3. **B-03** Add `source` field to gate results schema — prevents hand-constructed results from masquerading as programmatic verification
4. **A-03** Add dark-zone visibility pre-check before PA deployment — saves 10 agent-spawns when pages have catastrophic defects
5. **C-01** Fix Integrative Auditor timing to sequential-after-PAs — restores cross-auditor synthesis role

## Deduplication Log

| Merged Items | Into | Reason |
|---|---|---|
| IL-2 (signal declarations P0) + adversarial C1 challenge | A-02 (downgraded to P1) | Adversarial correctly identified that dark zone was caused by DPR opacity, not missing signal declarations. Signal declarations are still a real loss but not the root cause of the initial catastrophe. |
| PM-2 (fix GR-11 adjacent) + CR-2 (same fix, different perspective) | B-04 | Identical change proposed by two agents from different analyses. |
| AO-1 (respawn reason) + PA-2 (same) + TR-8 (respawn tracking) | D-03 | Three agents independently proposed the same respawn tracking fields. |
| TR-3 (preflight script) + TR-9 (tracker-verify.sh) | D-04 | TR-3 is a subset of TR-9. Combined into one script with preflight as first capability. |
| TR-4 (BV detail) + GA-4 (BV evidence) | B-08 | Same fix: preserve BV gate measured values. |
| TR-5 (agent details) + AO-4 (actual timestamps) + IN-07 (enforce L3) | D-01 | Three agents proposed populating the same blank L3 fields. |
| AO-2 (eliminate 768 waste) + AO-3 (element-level screenshots) | C-04 | Both address screenshot strategy; combined into unified protocol. |
| PM-1 (enforce GR-48) + GA-1 (unify JSON) + IN-04 (gate coverage) | B-01 | Three items that are one dependency chain: unify JSON -> run GR-48 -> report coverage. |
| IN-01 (timing ledger) + IN-02 (compression metrics) + IN-03 (keyword scan) | Split into D-05, D-06, D-07 | Related instrumentation but distinct changes to different sections. |
| RF-05 (REFINE delta metrics) + TR-10 (same) + TR-6 (REFINE L2) | D-08 | All address missing REFINE-cycle tracking infrastructure. |

## Adversarial Corrections Applied

1. **IL-2 downgraded P0 -> P1.** Adversarial C1: dark zone was caused by DPR opacity calibration (confirmed by Report 04's 12 CSS edits), not missing signal declarations. Signal declarations are a real info-loss but not the catastrophe's root cause.
2. **Component adoption upgraded P2 -> P1.** Adversarial C3: Run C had 18 component types vs current 5-6. A 3x regression warrants P1.
3. **Gate result integrity added as new P0.** Adversarial Section 4 "Missing from checklist": 3+ gates have hand-constructed results. This undermines the entire gate system.
4. **Zero SendMessage conclusion softened.** Adversarial challenge to Report 05 accepted: n=1 is insufficient to refute the established pattern. TC Brief may mitigate, but this is unproven.
5. **Tracker automation estimate corrected.** Adversarial Section 1, Report 06: tracker-verify.sh is 8-12h for robust implementation, not 2-3h. Reduced to preflight-only scope (2-3h realistic).
6. **RF-01 DPR opacity floor kept at P1.** Adversarial confirmed P1 is correct; the fix should be conditional on DPR detection, not blanket prohibition.
7. **Builder input ceiling noted.** Adversarial Section 4: collectively adding ~400 lines to builder input approaches the MANIFEST ~3,600 target. Items that add builder input are flagged with estimated line impact.

---

## Phase A: Pipeline Artifact Fixes

Changes to MANIFEST, recipe, brief template, routing, and orchestrator specs.

### A-01 Add hover behavior vocabulary to brief template
- **Priority:** P1-HIGH
- **File(s):** `design-system/pipeline/artifact-tc-brief-template.md`
- **Change:** Add a Tier 3/4 section titled "Hover & Interaction Vocabulary" with placeholders for: (a) link hover treatment, (b) table row hover, (c) callout hover effect, (d) code block hover reveal. Include 3 CSS snippets from value tables (e.g., `a:hover { color: var(--accent); border-bottom: 1px solid; }`, `tr:hover { background: rgba(accent,0.05); }`, `.callout:hover { border-left-color: var(--accent); }`). Reference Recipe Step 2.7.
- **Why:** Step 2.7 (hover behavior) was COMPLETELY LOST -- never reached the brief or builder. 0 of 4 hover categories deployed. This is the single largest contributor to DELIGHT 4/10 (weakest emotional register).
- **Effort:** ~15 lines added to template. Adds ~10 lines to each brief produced.
- **Builder input impact:** +10 lines (negligible).

### A-02 Add signal declaration instructions to brief template
- **Priority:** P1-HIGH
- **File(s):** `design-system/pipeline/artifact-tc-brief-template.md`
- **Change:** Add to Tier 2 (Perception): "Signal Declarations: If the page uses scroll-triggered animations, builder MUST add `<!-- SCROLL-REVEALS: true -->`. If no scroll triggers, add `<!-- SCROLL-REVEALS: false -->`. This comment enables the gate runner to distinguish intentional hidden content from rendering bugs."
- **Why:** Step 3.4c was COMPLETELY LOST from brief. NOTE: adversarial review correctly identified that the dark zone catastrophe was caused by DPR opacity (not missing signal declarations), so this is P1 not P0. But signal declarations are still a real spec gap -- the gate runner needs them for accurate content-visibility assessment.
- **Effort:** ~5 lines added to template.
- **Builder input impact:** +5 lines (negligible).

### A-03 Add dark-zone visibility pre-check before PA deployment
- **Priority:** P1-HIGH
- **File(s):** `design-system/pipeline/artifact-orchestrator.md` (Phase 3A-post)
- **Change:** After screenshots and before PA deployment, add: "Scroll through all 1440px viewport screenshots. If >= 3 consecutive viewports show < 30% visible content, HALT PA deployment. Return to builder with fix directive: 'Content invisible at viewport scroll resolution. Check opacity, contrast, animation fallbacks.' Do NOT spawn 9 auditors to find what 1 scroll-through reveals."
- **Why:** The entire initial PA round (11 agents) produced a single finding: dark zone invisible. A 1-agent pre-check saves ~45 min and ~10 agent-spawns when pages have catastrophic rendering defects.
- **Effort:** ~10 lines added to orchestrator spec.

### A-04 Add edge-zone minimum channel count as numbered requirement
- **Priority:** P1-HIGH
- **File(s):** `design-system/pipeline/artifact-tc-brief-template.md` (Tier 3 multi-coherence section)
- **Change:** Change multi-coherence from descriptive paragraph to numbered requirements: "Minimum channel shifts per boundary: Z1->Z2: 3+, Z2->Z3: 4+, Z3->Z4: 4+, Z4->Z5: 3+. Channel types: background, typography, spacing, border, content-type, density." Edge boundaries need explicit minimums because builders consistently over-invest at dramatic boundaries and phone in gentle ones.
- **Why:** Brief specified Z1->Z2 at 4 channels; builder delivered 2. The information was present but not in a format the builder treated as a requirement.
- **Effort:** ~5 lines modified in template.

### A-05 Require component selection HTML comment before building
- **Priority:** P1-HIGH (upgraded from P2 per adversarial C3: 3x regression from Run C)
- **File(s):** `design-system/pipeline/artifact-builder-recipe.md` (Phase 1), `design-system/pipeline/artifact-tc-brief-template.md` (Tier 3)
- **Change:** Add recipe Step 1.4: "After reading components.css, write `<!-- COMPONENTS: callout, pull-quote, blockquote-accent, code-block, table-wrapper, ... -->` listing 8+ components you will use. This comment is REQUIRED before Phase 2." Add to brief template: "Component adoption target: 8+ classes from components.css. Builder must declare selection before building."
- **Why:** Component adoption was 5-6 vs 8+ target in current run. Run C achieved 18 component types. The brief stated the target; the builder ignored it. Forced declaration makes the decision explicit and auditable by GR-46.
- **Effort:** ~5 lines in recipe, ~3 lines in template.

### A-06 Fix Integrative Auditor timing: sequential after 9 PA reports
- **Priority:** P1-HIGH
- **File(s):** `design-system/pipeline/artifact-orchestrator.md` (Phase 3B), `design-system/pipeline/MANIFEST.md` (Step 9)
- **Change:** Add explicit instruction: "Integrative Auditor MUST spawn AFTER all 9 PA reports are received and saved to disk. The Integrative reads all 9 reports + all screenshots. Do NOT spawn the Integrative in parallel with PA auditors." If parallel is chosen for speed, add: "EXPERIMENTAL: parallel Integrative loses cross-auditor synthesis. Orchestrator must perform convergence analysis manually."
- **Why:** Integrative ran in parallel with PA auditors, received only screenshots. Its designed role (cross-auditor synthesis) was unfulfilled. The Integrative's highest value is cross-cutting pattern detection ("two-page problem," "every section opens same way") that requires reading all 9 reports.
- **Effort:** ~8 lines modified in orchestrator spec.

### A-07 Distinguish rendering vs composition failures in weaver protocol
- **Priority:** P1-HIGH
- **File(s):** `design-system/pipeline/pa-weaver.md` (Section 2 calibration)
- **Change:** Add calibration note: "Distinguish RENDERING failures (content exists in DOM but invisible due to contrast/opacity/animation) from COMPOSITION failures (content absent or poorly organized). A rendering failure alone should not trigger REBUILD even if PA-05 < 2.5, provided zone-level element screenshots confirm compositional intent. Rendering failures indicate latent quality that REFINE can unlock."
- **Why:** Initial PA-05 of 2.0/4 was close to the 2.5 REBUILD threshold but the page was actually 3.5/4 after REFINE. Without this guidance, a weaver could call REBUILD on a rendering-only failure, wasting strong compositional work. The +1.5 REFINE delta proves the distinction matters.
- **Effort:** ~8 lines added to weaver spec.

### A-08 Add explicit border width instruction to recipe
- **Priority:** P2-MEDIUM
- **File(s):** `design-system/pipeline/artifact-builder-recipe.md` (border section), `design-system/pipeline/artifact-tc-brief-template.md` (Tier 1)
- **Change:** Add: "Border widths MUST be integer pixel values (1px, 2px, 3px, or 4px). Do NOT use em/rem for borders. WRONG: `border: 0.25em solid`. RIGHT: `border: 4px solid`. Fractional rendering at non-integer DPR produces 0.67px or 2.67px borders that fail identity gates."
- **Why:** Builders have produced non-integer borders in EVERY run (4 consecutive runs). Prose prohibition alone does not fix this. A concrete wrong/right example may break the pattern.
- **Effort:** ~5 lines added.

### A-09 Codify REFINE builder isolation protocol explicitly
- **Priority:** P2-MEDIUM
- **File(s):** `design-system/pipeline/artifact-orchestrator.md` (REFINE protocol section)
- **Change:** Add "REFINE Builder Isolation Rules" subsection. RECEIVES: (1) original HTML, (2) conviction statement, (3) artistic impression. DOES NOT RECEIVE: gate scores, threshold numbers, PA reports, content map, execution brief, tracker data. Currently implicit in tracker practice, not codified in spec.
- **Why:** The REFINE builder's success (+1.5 PA-05) depends on receiving generative language only. If a future orchestrator accidentally includes gate data, the builder would optimize for thresholds instead of composition.
- **Effort:** ~10 lines added.

### A-10 Compress Content Map appendix in brief template
- **Priority:** P3-LOW
- **File(s):** `design-system/pipeline/artifact-tc-brief-template.md` (Content Map Appendix)
- **Change:** Change appendix instruction from "Append full Content Map" to "Append COMPRESSED Content Map (~20-30 lines): zone table, tensions, metaphor, density arc only. Do NOT duplicate data already in Tier 3."
- **Why:** Content Map appeared twice (70-line appendix + Tier 3 integration). Saves ~40-50 lines that could fund hover vocabulary or spacing progressions.
- **Effort:** ~3 lines modified.

### A-11 Confirm worked examples routing in MANIFEST
- **Priority:** P3-LOW
- **File(s):** `design-system/pipeline/MANIFEST.md` (Step 2, Step 4 input lists)
- **Change:** Add `artifact-worked-examples.md` to the explicit input list for Content Analyst (Step 2) and Brief Assembler (Step 4). Add tracker checkbox: "Content Analyst confirmed reading worked examples: [ ]".
- **Why:** Worked examples routing was UNCERTAIN -- zero evidence either agent read them. At 182 lines, they provide calibration ("what good looks like") that prevents quality drift.
- **Effort:** ~3 lines added.

### A-12 Decide fate of S(x) survival function
- **Priority:** P3-LOW
- **File(s):** `design-system/pipeline/artifact-routing.md` (TOC #8, #13)
- **Change:** Either (a) make S(x) a BV gate (BV-05) or (b) remove from spec. It has never been applied in any build.
- **Why:** S(x) was designed for compression governance but is dead code in the spec. Uninvoked spec accumulates cruft and confuses future orchestrators.
- **Effort:** ~5 lines removed or ~15 lines added (depending on decision).

---

## Phase B: Gate Runner Improvements

New gates, gate fixes, DPR handling, result integrity.

### B-01 Unify gate results into single JSON + enforce GR-48 coverage meta-gate
- **Priority:** P0-BLOCKING
- **File(s):** `design-system/pipeline/artifact-orchestrator.md` (Phase 3A), `design-system/pipeline/gate-runner-core.js`
- **Change:** (1) Modify orchestrator protocol to write ONE gate-results JSON containing ALL gates (BV-01-04, GR-01 through GR-64, GR-61/62/64). Currently results are split across p3a-gate-results.json + execution tracker + orchestrator notes + refine notes. (2) After all gates execute, MUST run GR-48 (gate coverage) and GR-49 (result integrity). GR-48 counts REQUIRED gates executed vs gate-manifest.json. Any REQUIRED gate skipped = GR-48 FAIL = INCOMPLETE verdict. (3) Append a `coverage` object to JSON: `{ total_in_manifest, total_executed, total_skipped, skipped_gates, required_coverage, alert }`.
- **Why:** GR-48 is REQUIRED but was never run -- the one gate designed to catch missing gates was itself missing. 12 of 42 gates never executed with no programmatic check. Gate results fragmented across 4 locations made GR-48 structurally impossible to execute. This is the pipeline's most dangerous silent failure.
- **Effort:** ~30 lines in orchestrator spec, ~20 lines in gate runner.

### B-02 Add GR-60 mandatory re-run after REFINE
- **Priority:** P1-HIGH
- **File(s):** `design-system/pipeline/artifact-orchestrator.md` (REFINE cycle section)
- **Change:** Add rule: "After REFINE, re-run ALL gates that FAILED initially, plus GR-60 (WCAG contrast) regardless of initial result. Mark re-run gates with `rerun: true` in JSON."
- **Why:** GR-60 had 48 WCAG violations initially. REFINE explicitly addressed contrast ("turn on the lights") but GR-60 was NOT re-run to verify the fix. The pipeline prescribed a fix it never verified.
- **Effort:** ~5 lines added to orchestrator spec.

### B-03 Add `source` field to gate result schema
- **Priority:** P0-BLOCKING
- **File(s):** `design-system/pipeline/artifact-orchestrator.md`, `design-system/pipeline/gate-runner-spec.md` (Output Schema)
- **Change:** Add `source: 'code' | 'manual' | 'skip'` to every gate result object. Rule: "Gate results MUST be produced by gate-runner-core.js (`source: 'code'`). If gate cannot execute programmatically, record `status: 'SKIP', source: 'manual'` with reason. Results with `source: 'manual'` are excluded from pass/fail counts." Any result without a `source` field = pipeline integrity violation.
- **Why:** At least 3 gates (GR-05, GR-08, GR-15) have JSON results inconsistent with code output. The orchestrator appears to have editorially constructed results labeled as automated output. This undermines the entire gate system's reliability. If gate results are editorial opinion, they are not programmatic verification.
- **Effort:** ~15 lines in spec, ~5 lines per gate function (add `source: 'code'`).

### B-04 Fix GR-11 to check only adjacent zone pairs
- **Priority:** P1-HIGH
- **File(s):** `design-system/pipeline/gate-runner-core.js` (GR-11 function, lines ~546-581)
- **Change:** Modify GR-11 to iterate zones in document order and compare only consecutive pairs (Z1-Z2, Z2-Z3, Z3-Z4, Z4-Z5). Remove all-combinations check. Add comment: "// Adjacent pairs only. Non-adjacent pairs separated by intermediate zones are not perceptually comparable."
- **Why:** GR-11 false FAIL post-REFINE: Z2 vs Z4 delta=6 flagged, but dark Z3 sits between them. Non-adjacent checks produce false positives that erode gate credibility and consume orchestrator attention budget. Persistent false positive across multiple runs.
- **Effort:** ~10 lines modified.

### B-05 Fix GR-15 to exclude auto centering margins
- **Priority:** P2-MEDIUM
- **File(s):** `design-system/pipeline/gate-runner-core.js` (GR-15 function, lines ~671-688)
- **Change:** Before flagging horizontal margins, check: `if (computed.marginLeft === computed.marginRight && computed.display !== 'inline') skip;` or more precisely: exclude elements where `margin-left: auto` AND `margin-right: auto`. Alternatively, restrict GR-15 to vertical margins only (marginTop, marginBottom, paddingTop, paddingBottom).
- **Why:** GR-15 false positive on every centered-content build. 240px horizontal margins from `margin: 0 auto` on 960px container in 1440px viewport. Known false positive across 2+ runs.
- **Effort:** ~5 lines modified.

### B-06 Resolve GR-50 gate ID collision (Conviction vs Multi-Coherence)
- **Priority:** P1-HIGH
- **File(s):** `design-system/pipeline/gate-manifest.json`, `design-system/pipeline/gate-runner-core.js` (lines ~1189-1221), `design-system/pipeline/gate-runner-spec.md`
- **Change:** (1) Keep GR-50 = Conviction Statement as coded. (2) Create GR-55 (ADVISORY) = "Multi-Coherence Channel Count" -- programmatic check of channel shifts at zone boundaries (background, typography, spacing, border, content-type). (3) Update gate-manifest.json to add GR-55. (4) Document that GR-50 was erroneously used for multi-coherence in the yegge-gas-town-2026-02-25 build results.
- **Why:** Gate ID collision: manifest says GR-50 = Conviction Statement, build used it for multi-coherence reporting. No programmatic multi-coherence gate exists in the codebase. Multi-coherence is the pipeline's core quality concept and has zero programmatic verification.
- **Effort:** ~40 lines for new GR-55 gate, ~5 lines manifest update.

### B-07 Add DPR correction before all gate execution
- **Priority:** P1-HIGH
- **File(s):** `design-system/pipeline/artifact-orchestrator.md` (Playwright setup section)
- **Change:** Move DPR correction to BEFORE any gate execution (not just before screenshots). New protocol: "(1) Create Playwright browser context with `{ deviceScaleFactor: 1 }`. (2) Verify `window.devicePixelRatio === 1`. (3) Run ALL gates. (4) Take screenshots." Gate runner code already has `checkDPR()` (lines ~1483-1510) documenting this fix.
- **Why:** 5-6 gates give potentially unreliable results at DPR 0.667: GR-08 (border widths), GR-09 (border hierarchy), GR-14 (visual gap), GR-15 (single margin), GR-62 (screenshots). GR-08 reported 3.75/3/0.75px consistent with DPR scaling artifacts.
- **Effort:** ~5 lines in orchestrator spec. Zero code changes needed (gate runner already supports it).

### B-08 Preserve BV gate evidence (not just PASS/FAIL)
- **Priority:** P2-MEDIUM
- **File(s):** `design-system/pipeline/artifact-orchestrator.md` (Phase 1 section)
- **Change:** After `runBriefVerification(briefText)`, write the full result array (including per-tier counts, hex delta values, verb ratios, suppressor lists) to `p1-bv-results.json`. Add orchestrator instruction: "Copy BV measured values into L2 tracker table."
- **Why:** All 4 BV gates show `___` for detail despite passing. Without measured values, we cannot detect borderline passes, trend across runs, or diagnose brief quality regressions.
- **Effort:** ~5 lines in orchestrator spec.

### B-09 Add post-REFINE mechanical sweep gate
- **Priority:** P1-HIGH
- **File(s):** `design-system/pipeline/artifact-orchestrator.md` (REFINE cycle section)
- **Change:** After REFINE builder completes and BEFORE spawning PA auditors, run a MECHANICAL-ONLY gate subset: GR-10 (semantic HTML), GR-18 (duplicate IDs), GR-22 (landmarks), GR-51 (heading hierarchy), GR-52 (link accessibility). If any MECHANICAL gate fails, return to REFINE builder for a targeted fix pass (~5 min). Do NOT spawn 11 PA agents to discover mechanical issues.
- **Why:** REFINE added nav rail that created GR-52 FAIL (14 inaccessible links). This mechanical issue was only discovered after spawning 9 PA auditors + integrative + weaver. A 30-second gate check would catch it before committing ~$15 in agent costs. The "REFINE regression" pattern (generative improvements introducing mechanical issues) is now confirmed.
- **Effort:** ~8 lines in orchestrator spec.

### B-10 Add within-section density gate (GR-67)
- **Priority:** P2-MEDIUM
- **File(s):** `design-system/pipeline/gate-runner-core.js` (new gate)
- **Change:** Add GR-67 (RECOMMENDED): "For each section/zone, measure max continuous text height without a visual break (blockquote, table, image, code block, details, hr). WARN if any section has >600px continuous text."
- **Why:** The dominant PA finding (dark zone "wall of text," flagged by 9/9 initial, 6/10 REFINE auditors) has no programmatic detection. GR-13/14 measure gaps BETWEEN sections but not density WITHIN sections.
- **Effort:** ~25 lines new gate function.

### B-11 Add GR-19 exemption for boundary/transition elements
- **Priority:** P3-LOW
- **File(s):** `design-system/pipeline/gate-runner-core.js` (lines ~363-369)
- **Change:** Add to empty container check: `if (div.className && /boundary|transition|separator|divider/.test(div.className)) return;`
- **Why:** GR-19 flagged 4 (initial) and 2 (refine) intentional boundary divs. These are always intentional zone transitions.
- **Effort:** ~2 lines added.

### B-12 Add hover state existence gate (GR-65)
- **Priority:** P2-MEDIUM
- **File(s):** `design-system/pipeline/gate-runner-core.js` (new gate)
- **Change:** Add GR-65 (RECOMMENDED): "Check that `:hover` CSS rules exist for links, buttons, and interactive elements. WARN if zero `:hover` rules found. FAIL if links have no hover differentiation."
- **Why:** Hover behavior was completely absent from the build. A programmatic check ensures the brief template addition (A-01) actually reaches the HTML.
- **Effort:** ~15 lines new gate function.

### B-13 Add DPR-sensitive opacity advisory gate (GR-66)
- **Priority:** P2-MEDIUM
- **File(s):** `design-system/pipeline/gate-runner-core.js` (new gate)
- **Change:** Add GR-66 (ADVISORY): "Scan all rgba() values on dark backgrounds (luminance < 30). Flag any with alpha < 0.95 as WARNING: 'rgba alpha {value} on dark background may be invisible at DPR < 1.0.'"
- **Why:** 12 rgba values between 0.06 and 0.9 on dark backgrounds all needed REFINE to fix. Catching these pre-PA allows a targeted builder fix before the full PA cycle.
- **Effort:** ~20 lines new gate function.

### B-14 Codify gate exception patterns in manifest
- **Priority:** P2-MEDIUM
- **File(s):** `design-system/pipeline/gate-manifest.json`
- **Change:** For each known false-positive pattern, add an `exceptions` array to the gate manifest entry: GR-15 `["margin-auto-centering"]`, GR-19 `["boundary-class-elements"]`, GR-14 `["nested-section-indicators"]`. Gate runner checks exceptions before flagging.
- **Why:** 4 gates produce known false positives requiring manual orchestrator override. Auto-excepting known patterns frees attention for genuine failures.
- **Effort:** ~10 lines in manifest, ~15 lines in gate runner exception logic.

---

## Phase C: PA Protocol Improvements

Auditor deployment, screenshot strategy, weaver calibration.

### C-01 Fix Integrative Auditor timing (sequential after PAs)
- **Priority:** P1-HIGH
- **Note:** Implementation is in A-06 above. Listed here for PA protocol completeness. See A-06 for details.

### C-02 Require REFINE-round screenshot parity with initial round
- **Priority:** P2-MEDIUM
- **File(s):** `design-system/pipeline/artifact-orchestrator.md` (REFINE screenshot protocol)
- **Change:** Add: "REFINE-round screenshots MUST include at minimum: (1) all zone-level element captures from initial round, (2) full-page capture at 1440px and 768px, (3) cold-look at 1440px. The REFINE round may add targeted screenshots but MUST NOT reduce coverage below initial-round zone set."
- **Why:** REFINE round dropped from 53 to 15 screenshots. Multiple auditors noted "I cannot verify this region." Current build succeeded despite reduced coverage, but borderline REFINE pages would suffer.
- **Effort:** ~5 lines added to orchestrator spec.

### C-03 Add minimum footer text size to gate runner
- **Priority:** P2-MEDIUM
- **File(s):** `design-system/pipeline/gate-runner-recommended.js` (or gate-runner-advanced.js)
- **Change:** Add gate GR-XX (RECOMMENDED): "All text elements with computed font-size. WARN if any text < 11px. FAIL if any visible text < 10px." Target footer, attribution, metadata text.
- **Why:** Footer text size flagged by 2/10 auditors. This is a mechanical check (font-size >= 11px) that belongs in the gate runner, not in auditor reports.
- **Effort:** ~10 lines new gate.

### C-04 Codify element-level screenshot strategy + eliminate DPR waste
- **Priority:** P2-MEDIUM
- **File(s):** `design-system/pipeline/artifact-orchestrator.md` (Phase 3A screenshot protocol)
- **Change:** (1) Before 768px scroll screenshots, check if individual scroll PNGs are <5KB. If so, abort scroll-through and capture element-level screenshots instead. (2) For REFINE passes: use element-level captures (per-zone: header, z1, z2, z3, z4, z5, footer) at both viewports + full-page captures. Do NOT repeat scroll-through. Store in `screenshots-refine/` directory. (3) Add 1024px DPR workaround: setViewportSize(683,450). If 1024 fails, document gap.
- **Why:** Initial pass produced 20 useless 768px scroll PNGs (all 2.4k, near-empty due to DPR). REFINE pass fixed this ad-hoc with element-level shots that gave better auditor evidence. Ad-hoc improvement should be permanent.
- **Effort:** ~15 lines modified in orchestrator spec.

### C-05 Consider tiered PA deployment for catastrophic defects
- **Priority:** P2-MEDIUM
- **File(s):** `design-system/pipeline/pa-deployment.md` (Section 2)
- **Change:** Add optional "Triage PA" mode: "If orchestrator pre-check detects POSSIBLE catastrophic defect (but not certain), deploy 3 auditors first: A (impression), C (spatial), I (adversarial). If all 3 independently flag the same BLOCKING defect, skip remaining 6 and go to REFINE. If findings are mixed, proceed with full 9-auditor deployment."
- **Why:** If used on this build, would have saved 6 agent-spawns (all 9 converged on same finding). Only applicable when A-03 pre-check is uncertain.
- **Effort:** ~15 lines added.

### C-06 Add Tier 5 scoring to initial round even when defective
- **Priority:** P3-LOW
- **File(s):** `design-system/pipeline/pa-weaver.md` (Section 3 Tier 5)
- **Change:** Add: "Score Tier 5 in EVERY round including when PA-05 < 2.5. For defective pages, answer PA-60/PA-65/PA-68 from zone-level element screenshots. Note: 'Scored from element-level evidence due to rendering defect.'"
- **Why:** Initial round did not score Tier 5. But metaphor persistence and compositional voice could have been answered from element screenshots. This data strengthens REFINE-vs-REBUILD decisions.
- **Effort:** ~5 lines added.

### C-07 Standardize integrative auditor file naming
- **Priority:** P3-LOW
- **File(s):** `design-system/pipeline/pa-deployment.md` (Section 3 output naming)
- **Change:** Standardize to `p3b-pa-integrative.md` (with `pa-` prefix matching auditor files). Add exact filename pattern to deployment spec.
- **Why:** Build used `p3b-integrative.md` (missing prefix), causing file-not-found during retrospective analysis.
- **Effort:** ~2 lines modified.

---

## Phase D: Instrumentation & Tracking

Metrics, automated checks, tracker improvements.

### D-01 Fix tracker two-story problem: derive L0 from L2, enforce L3 population
- **Priority:** P0-BLOCKING
- **File(s):** `design-system/pipeline/artifact-orchestrator.md`, `design-system/pipeline/EXECUTION-TRACKER-TEMPLATE.md`
- **Change:** (1) Replace L0 summary checkboxes with derived status: "L0 PASS = all L2 items in this phase are `[x]`." Remove manual L0 checkboxes; replace with `DERIVED` placeholder. (2) Add instruction after each agent spawn step: "IMMEDIATELY record Model, Start timestamp (`date -u +%Y-%m-%dT%H:%M:%SZ`), Output Path. After agent completes: record End timestamp, output line count." (3) Add phase gate at end of each L2 section: `- [ ] L2 COMPLETE: ___/[total] items checked`. (4) Mark L3 Agent Details tables with `<!-- MANDATORY -->`.
- **Why:** L0 claimed 100% complete while L2 showed ~40% for Phases 0-2. 3/6 agent detail tables completely blank. The builder (single most important agent) had zero metadata recorded. The two-story problem makes the tracker unreliable as a verification tool.
- **Effort:** ~30 lines modified/added to template, ~15 lines added to orchestrator spec.

### D-02 Record BV gate detail values in tracker
- **Priority:** P1-HIGH
- **File(s):** `design-system/pipeline/EXECUTION-TRACKER-TEMPLATE.md`, `design-system/pipeline/artifact-orchestrator.md`
- **Change:** Add instruction: "After BV gates run, copy per-tier counts (BV-01), zone pair deltas (BV-02), verb ratio (BV-03), suppressor list (BV-04) into L2 table. Consider having BV gate runner output values in copy-paste-ready format."
- **Why:** All 4 BV gates show `___` for measured values. Without actuals, we cannot detect borderline passes or trend across runs.
- **Effort:** ~5 lines added to orchestrator spec.

### D-03 Add respawn tracking fields to PA deployment and tracker
- **Priority:** P1-HIGH
- **File(s):** `design-system/pipeline/EXECUTION-TRACKER-TEMPLATE.md` (L3 PA section), `design-system/pipeline/pa-deployment.md`
- **Change:** Add to PA auditor deployment table: `Respawns` column (count) and `Respawn Reason` column (timeout/empty/tool-error/context-overflow). Add to tracker Execution Summary: "Total Respawns: ___". Add L3 row for each respawn: "PA-RESPAWN: Auditor ___. Reason: ___. Attempt: ___."
- **Why:** 2/9 auditors (A, B) needed respawns with zero documentation of cause. Three separate agents independently flagged this gap. Without failure reasons, the 22% respawn rate cannot be reduced.
- **Effort:** ~10 lines added to template, ~3 lines to deployment spec.

### D-04 Create tracker-preflight.sh automation script
- **Priority:** P2-MEDIUM
- **File(s):** New file: `design-system/pipeline/tracker-preflight.sh`
- **Change:** Create a script that takes build output dir as argument and: (1) checks each PF-1a through PF-1p artifact file exists, records line count, (2) checks PF-2a through PF-2e reference files, (3) creates output dir, (4) outputs markdown snippet for pasting into tracker. Scope limited to preflight (not full tracker verification -- adversarial correctly noted full script is 8-12h, not 2-3h).
- **Why:** Pre-flight had 0/22 fill rate despite all files being accessible. Automating these trivial file-existence checks eliminates 22 manual operations.
- **Effort:** ~60 lines bash script. Estimated: 2-3 hours.

### D-05 Add timing ledger to execution tracker template
- **Priority:** P1-HIGH
- **File(s):** `design-system/pipeline/EXECUTION-TRACKER-TEMPLATE.md`
- **Change:** Add `## Timing Log` section with append-only table: `| Event | ISO Timestamp | Wall Clock (s) | Notes |`. Define event types: PIPELINE_START/END, PHASE_{N}_START/END, AGENT_{ROLE}_SPAWN/COMPLETE/RESPAWN, GATE_RUNNER_START/END, PA_BATCH_SPAWN/COMPLETE, REFINE_START/END. Orchestrator writes one row per event as it happens (not retroactively).
- **Why:** This run's timing was reconstructed from memory and file timestamps (off by ~80 min from tracker claims). Per-phase durations enable bottleneck identification without agent analysis.
- **Effort:** ~20 lines added to template.

### D-06 Add compression metrics section to execution tracker template
- **Priority:** P1-HIGH
- **File(s):** `design-system/pipeline/EXECUTION-TRACKER-TEMPLATE.md`
- **Change:** Add `## Compression Metrics` after Phase 1 with table: `| Stage | Lines In | Lines Out | Ratio | Alert? |`. Stages: Source->Content Map, Content Map->Brief, Brief->HTML CSS. Alert: >30:1 = WARNING, >50:1 = BLOCKING. Orchestrator fills as each stage completes.
- **Why:** Compression >50:1 was the Flagship experiment's root cause. This run's healthy 18.9:1 was only discoverable by manual counting. Automated tracking prevents recurrence.
- **Effort:** ~10 lines added to template.

### D-07 Add recipe keyword scan as BV-05
- **Priority:** P1-HIGH
- **File(s):** `design-system/pipeline/artifact-orchestrator.md` (Phase 1 BV section)
- **Change:** After BV-04, add BV-05 (Recipe Keyword Scan): scan brief for keywords from each recipe step (2.7: "hover", 3.1: "channel"/"multi-coherence", 3.4c: "SCROLL-REVEALS"/"signal") and each disposition (D-01 through D-09). Log as table. Any disposition missing = BLOCKING. Any recipe step missing = WARNING.
- **Why:** This run lost hover behavior (Step 2.7) and signal declarations (Step 3.4c) from the brief entirely. Automated keyword scanning catches both before the builder is spawned.
- **Effort:** ~15 lines in orchestrator spec.

### D-08 Add REFINE-cycle L2 tracking and delta metrics
- **Priority:** P2-MEDIUM
- **File(s):** `design-system/pipeline/EXECUTION-TRACKER-TEMPLATE.md`
- **Change:** Add full REFINE section with: (1) L2 checklists mirroring Phase 3A/3B/3C (REFINE gates, REFINE screenshots, REFINE PA deployment, REFINE weaver). (2) Delta Metrics table: Lines Before/After, Lines Added/Removed, CSS Lines Delta, HTML Structural Changes count, Gate Failures Fixed (list), Gate Failures Introduced (list), PA-05 Delta.
- **Why:** The REFINE cycle produced the pipeline's most important measurement (+1.5 PA-05) but has the least tracking infrastructure. Post-REFINE PA (9 auditors) has zero L2 tracking.
- **Effort:** ~40 lines added to template.

### D-09 Add gate failure triage field to tracker
- **Priority:** P2-MEDIUM
- **File(s):** `design-system/pipeline/EXECUTION-TRACKER-TEMPLATE.md`
- **Change:** Add "Triage" column to P3A-4 Gate Runner Results: values `INTENTIONAL` (design choice), `FALSE-POS` (gate logic wrong), `GENUINE` (real failure to fix). Replace current free-text notes.
- **Why:** 7 gate failures were triaged in unstructured notes. Structured fields enable cross-run false-positive tracking.
- **Effort:** ~5 lines modified.

### D-10 Create standardized run-summary.json format
- **Priority:** P2-MEDIUM
- **File(s):** New file: `design-system/pipeline/run-summary-schema.json`
- **Change:** Define JSON schema: build, content_slug, mode, builder_model, pa05_initial/final, tier5, verdict, gates_pass/fail/total, refine_cycles, agents_spawned/respawns, duration_min, brief_lines, html_lines, compression ratios, emotional_arc (4 registers), fixes by type. Orchestrator generates at PIPELINE_END.
- **Why:** Cross-run comparison currently requires reading two full trackers. JSON enables `jq` one-liners.
- **Effort:** ~30 lines schema, ~10 lines generation instructions.

### D-11 Add automated alert protocol to orchestrator
- **Priority:** P2-MEDIUM
- **File(s):** `design-system/pipeline/artifact-orchestrator.md`
- **Change:** Add "Alert Protocol" section. After each phase, check: brief <100 lines (BLOCKING), brief >300 lines (WARNING), compression >50:1 (BLOCKING), >30:1 (WARNING), recipe:checklist <3:1 (BLOCKING), disposition missing (BLOCKING), HTML <500 lines (WARNING), required gate skipped (BLOCKING), PA coverage <95% (WARNING), experiential pass missing (BLOCKING). BLOCKING alerts halt pipeline.
- **Why:** This run had zero automated alerts. GR-48 (REQUIRED) was skipped silently. Hover behaviors lost from brief silently. Alerts catch losses before downstream phases compound them.
- **Effort:** ~20 lines added.

### D-12 Archive run artifacts to permanent storage
- **Priority:** P3-LOW
- **File(s):** `design-system/pipeline/artifact-orchestrator.md` (post-run section)
- **Change:** Add archival step: "Copy to `design-system/run-archive/{slug}-{date}/`: execution tracker, gate results JSON, weaver diagnostic + artistic, content map, execution brief."
- **Why:** Previous runs' files only recoverable via `git show HEAD:path`. Comparison analysis required 10+ git recovery commands.
- **Effort:** ~5 lines added.

### D-13 Document REFINE as highest-ROI phase in MANIFEST
- **Priority:** P3-LOW
- **File(s):** `design-system/pipeline/MANIFEST.md` (Pipeline Overview)
- **Change:** Add note documenting REFINE's ROI: "+1.5 PA-05 and +5 Tier 5 from one cycle. 260 lines added in ~30 min. REFINE works because: fresh agent defeats continuation bias, artistic impression triggers creative problem-solving, existing quality is preserved."
- **Why:** Framing REFINE as failure (which "REFINE verdict" implies) may cause operators to prefer REBUILD when REFINE would be faster and better.
- **Effort:** ~5 lines added.

---

## Phase E: Process & Architecture

Structural changes to how the pipeline runs.

No items currently reach Phase E severity. The adversarial reviewer identified three blind spots that could generate Phase E items in future:

1. **Orchestrator accountability (B2):** The orchestrator made manual gate entries, estimated timestamps, left 33% of tracker unfilled, and ran the Integrative in parallel. No retrospective scrutinized the orchestrator itself. Future retrospectives should include an orchestrator self-assessment.

2. **Error recovery protocol (B4):** What happens when a builder crashes mid-output? When 3/9 PA auditors need respawns? The pipeline has no documented error recovery -- the orchestrator improvises. For a 28-agent pipeline, error recovery should be designed.

3. **Content quality assessment (B1):** All 9 reports treated source content as a given. Nobody asked: is this content inherently suited to Flagship-tier output? Technical blog summaries may have an inherent quality ceiling. Pipeline cannot produce Flagship from Floor-tier content.

These are noted for future work but do not have specific implementable changes yet.

---

## Implementation Priority Order

For maximum impact, implement in this order:

1. **B-01 + B-03** (P0) -- Gate result integrity. Without these, the gate system is unreliable.
2. **D-01** (P0) -- Tracker two-story fix. Without this, tracking is theater.
3. **A-01 + A-02 + D-07** (P1) -- Brief template info-loss + keyword scan. Closes the two largest information losses AND adds automated detection.
4. **A-03 + B-09** (P1) -- Pre-check + post-REFINE sweep. Prevents the two most expensive failure modes (wasting 11 agents on catastrophic defects, wasting 11 agents on mechanical regressions).
5. **B-04 + B-05 + B-07** (P1-P2) -- Gate false-positive fixes + DPR correction. Restores gate credibility.
6. **A-04 + A-05 + A-06 + A-07** (P1) -- Remaining pipeline artifact fixes.
7. **D-05 + D-06** (P1) -- Core instrumentation (timing + compression).
8. Everything else by priority level.

**Estimated total effort:** ~450 lines of changes across ~15 files. P0 items: ~100 lines. P1 items: ~250 lines. P2 items: ~150 lines. Most individual items are 5-30 lines.

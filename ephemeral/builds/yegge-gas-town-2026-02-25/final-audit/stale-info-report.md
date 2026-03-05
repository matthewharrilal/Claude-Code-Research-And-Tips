# Stale Information Report — Pipeline v3/v4 Operational Files

**Date:** 2026-02-25
**Scope:** 20 pipeline files in `ephemeral/va-extraction/` + SKILL.md
**Method:** Cross-referenced claimed values against actual `wc -l` counts, function signature grep, gate-manifest.json canonical counts
**Status:** ALL clear fixes APPLIED. Uncertain items documented but not edited.

---

## Verified Actual Line Counts

Source of truth (`wc -l` output, 2026-02-25):

| File | Actual Lines |
|------|-------------|
| gate-runner-core.js | 2,273 |
| gate-runner-spec.md | 265 |
| gate-runner-preconditions.md | 83 |
| gate-runner-provenance.md | 151 |
| gate-manifest.json | 326 |
| MANIFEST.md | ~1,300 |
| artifact-orchestrator.md | 1,193 |
| pa-questions.md | 431 |
| pa-deployment.md | 376 |
| pa-weaver.md | 466 |
| pa-guardrails.md | 113 |
| pa-guardrails-weaver.md | 59 |
| pa-manifest.md | 89 |
| EXECUTION-TRACKER-TEMPLATE.md | 162 |
| experiment-protocol.md | 51 |
| artifact-builder-recipe.md | 833 |
| artifact-routing.md | 1,056 |
| artifact-value-tables.md | 262 |
| council-verdict.md | 575 |
| artifact-tc-brief-template.md | 235 |
| tokens.css | 183 |
| components.css | 944 |

---

## BLOCKING Findings (3)

### B-01: components.css claimed as 290 lines (actual: 944)

**Files affected:**
- `artifact-orchestrator.md` line 152: "components.css: 290 lines (direct file)" — **FIXED** to "~944 lines"
- `artifact-builder-recipe.md` line 52: "Read components.css (290 lines)" — **FIXED** to "~944 lines"
- `artifact-orchestrator.md` line 147: "Total builder input: ~3,600 lines" — **FIXED** to "~4,250 lines"
- `artifact-orchestrator.md` line 157: Council ruling CF-01 quote updated to match

**Why BLOCKING:** Builder sees this file at spawn time. If a gate or prompt references "290 lines" and the builder encounters 944 lines, the honest complexity accounting is wrong by 654 lines. BV-07 (builder input volume ceiling at 2,500 lines) could silently conflict with actual input sizes.

### B-02: EXECUTION-TRACKER-TEMPLATE.md claimed as ~595 lines (actual: 162)

**File affected:**
- `MANIFEST.md` Appendix D line 941: "~595 lines" — **FIXED** to "~162 lines"

**Why BLOCKING:** Off by 433 lines. An orchestrator verifying file existence might expect a 595-line template and flag the 162-line file as corrupted or incomplete.

### B-03: BV gate count stale across pipeline (BV-01-04 referenced, BV-01-07 exist)

**Files affected:**
- `MANIFEST.md` quickstart step 4a: "BV-01 through BV-04" — **FIXED** to BV-01 through BV-05 (brief-facing) with BV-06/BV-07 noted separately
- `MANIFEST.md` Section 4 Phase 1 step 6: "BV-01 through BV-04" — **FIXED** to BV-01 through BV-05
- `MANIFEST.md` Section 4 Phase 1 Decision Gate: "BV-01 through BV-04" — **FIXED** with BV-06/BV-07 noted
- `MANIFEST.md` Section 3 routing table: "(BV-01–BV-04)" — **FIXED** to "(BV-01–BV-07)"
- `MANIFEST.md` Appendix E Gate Runner section: "9 executable functions" and old execution order — **FIXED** to 22 functions with correct entry points
- `EXECUTION-TRACKER-TEMPLATE.md` line 30: "___/4 PASS" — **FIXED** to "___/7 PASS"
- `gate-runner-preconditions.md` line 81: "BV-01 through BV-04" — **FIXED** to "BV-01 through BV-07"
- `gate-runner-core.js` line 7: "BV-01 through BV-06" — **FIXED** to "BV-01 through BV-07"
- `gate-runner-core.js` line 31: Section header "BV-01 through BV-06" — **FIXED** to "BV-01 through BV-07"

**Why BLOCKING:** Orchestrator following the manifest would only run 4 BV gates, missing BV-05 (recipe keyword scan), BV-06 (anti-regression language scan), and BV-07 (builder input volume ceiling). BV-07 in particular enforces a critical 2,500-line ceiling.

---

## SIGNIFICANT Findings (10)

### S-01: gate-runner-core.js line count stale in MANIFEST.md

- `MANIFEST.md` Appendix D line 936: claimed "~1,626 lines" (actual: 2,273, off by 647) — **FIXED**
- `MANIFEST.md` Section 3 line 251: claimed "~1,654 lines" (actual: 2,273, off by 619) — **FIXED**

### S-02: gate-manifest.json line count stale in MANIFEST.md

- `MANIFEST.md` Appendix D line 940: claimed "~200 lines" (actual: 326, off by 126) — **FIXED**
- `MANIFEST.md` Section 3 line 255: claimed "~200 lines" (actual: 326, off by 126) — **FIXED**

### S-03: gate-runner-spec.md line count stale

- `MANIFEST.md` Appendix D line 937: claimed "~223 lines" (actual: 265, off by 42) — **FIXED**
- `MANIFEST.md` Section 3 line 252: claimed "~223 lines" (actual: 265, off by 42) — **FIXED**
- `SKILL.md` line 47: claimed "~225 lines" (actual: 265, off by 40) — **FIXED**

### S-04: artifact-orchestrator.md line count stale

- `MANIFEST.md` Appendix D line 932: claimed "~1,100 lines" (actual: 1,193, off by 93) — **FIXED**
- `MANIFEST.md` Known Limitations section: "At ~1,100 lines" — **FIXED** to "~1,193 lines"

### S-05: artifact-routing.md line count stale

- `MANIFEST.md` Appendix D line 950: claimed "~900 lines" (actual: 1,056, off by 156) — **FIXED**
- `MANIFEST.md` Section 3 header: "artifact-routing.md (900 lines)" — **FIXED** to "~1,056 lines"

### S-06: pa-deployment.md line count stale

- `MANIFEST.md` Appendix D line 945: claimed "~363 lines" (actual: 376, off by 13) — **FIXED**
- `SKILL.md` line 56: claimed "~355 lines" (actual: 376, off by 21) — **FIXED**

### S-07: pa-weaver.md line count stale

- `MANIFEST.md` Appendix D line 946: claimed "~455 lines" (actual: 466, off by 11) — **FIXED**
- `SKILL.md` line 57: claimed "~449 lines" (actual: 466, off by 17) — **FIXED**

### S-08: artifact-tc-brief-template.md line count stale

- `MANIFEST.md` Appendix D line 952: claimed "~223 lines" (actual: 235, off by 12) — **FIXED**
- `MANIFEST.md` External Dependencies section: claimed "~223 lines" — **FIXED**
- `MANIFEST.md` quickstart prerequisites: "~223 lines" — **FIXED** (via replace_all)
- `MANIFEST.md` Phase 1 Agent Roster: "TC Brief Template (~223 lines)" — **FIXED** (via replace_all)

### S-09: Function count claim stale in SKILL.md

- `SKILL.md` line 46: claimed "9 executable Playwright JS functions" — **FIXED** to "22 executable Playwright JS functions"
- Actual function signatures found via grep: 22 (see list below)

### S-10: gate-runner-provenance.md stale gate count

- `gate-runner-provenance.md` line 128: claimed "Active Playwright gates: 31" with old gate list — **FIXED** to "Active Playwright gates: 52 in-file executable"

---

## MINOR Findings (5)

### M-01: gate-runner-spec.md tier totals were stale

- Line 257: claimed "20 REQUIRED, 10 RECOMMENDED, 9 ADVISORY, 2 DIAGNOSTIC, 5 BRIEF, 1 UTILITY = 47" — **FIXED** to "21 REQUIRED, 13 RECOMMENDED, 10 ADVISORY, 2 DIAGNOSTIC, 7 BV, 1 UTILITY = 54"

### M-02: artifact-builder-recipe.md line count close but not exact

- `MANIFEST.md` Appendix D line 934: claimed "~828 lines" (actual: 833, off by 5) — NOT FIXED (within ~tolerance)

### M-03: MANIFEST.md components.css claimed ~1,195 in design system files table

- Appendix D line 925: claimed "~1,195 lines" (actual: 944, off by 251) — **FIXED** to "~944 lines"

### M-04: gate-runner-provenance.md missing wave logs

- The Wave Change Log section ends at Wave 3. Missing entries for:
  - Wave 0 (convergence reframe)
  - Wave 4 (experiential gates)
  - Pipeline v4 (multi-coherence, component count, footer)
  - Convergence reframe (BV-06, BV-07, GR-78-82)
- **NOT FIXED** — requires historical knowledge to write accurate provenance entries

### M-05: artifact-orchestrator.md item count discrepancy

- Line 3 header: "222 items total"
- Some intro text references "228 items"
- **NOT FIXED** — uncertain which is correct; may reflect reclassification

---

## Files Confirmed Current (No Stale Items Found)

- `pa-questions.md` (431 lines) — 69 questions, all references consistent
- `pa-guardrails.md` (113 lines) — current
- `pa-guardrails-weaver.md` (59 lines) — current
- `pa-manifest.md` (89 lines) — current
- `experiment-protocol.md` (51 lines) — current
- `artifact-value-tables.md` (262 lines) — current
- `council-verdict.md` (575 lines) — static document, no staleness expected
- `gate-manifest.json` (326 lines) — canonical source of truth, internally consistent

---

## Function Inventory (gate-runner-core.js)

22 functions found via `grep "function "`:

| # | Function | Purpose |
|---|----------|---------|
| 1 | `runBriefVerification(briefText)` | Phase 1: BV-01 through BV-07 |
| 2 | `checkAntiRegressionLanguage(manifestText, orchestratorText)` | BV-06 helper |
| 3 | `runGateRunner(page)` | Legacy Phase 3A entry point |
| 4 | `runAntiPatternGates(page)` | Anti-pattern subset |
| 5 | `runWave2Gates(page)` | Wave 2 gate subset |
| 6 | `runGateCoverage(allResults)` | GR-48 meta-gate |
| 7 | `checkGateResultIntegrity(resultFiles, resultData)` | GR-49 integrity |
| 8 | `checkDPR(page)` | GR-61 pre-screenshot DPR |
| 9 | `checkScreenshotQuality(screenshotDir)` | GR-62 post-screenshot |
| 10 | `checkUsabilityPriority(auditorReports, weaverReport)` | GR-64 post-weaver |
| 11 | `checkPredictionSuppression(weaverReport)` | GR-81 prediction suppression |
| 12 | `checkFindingStatusMap(weaverReport, iterationCycle)` | GR-82 finding status |
| 13 | `checkBuilderInputVolume(builderInputFiles)` | BV-07 input ceiling |
| 14 | `checkResidualArtifact(htmlText)` | GR-78 residual artifact |
| 15 | `checkRefineCompletion(outputDir, iterationCycle)` | GR-79 REFINE completion |
| 16 | `checkIterationLogAutoFill(trackerText, ...)` | GR-80 iteration log |
| 17 | `checkVisibleContent(screenshotDir)` | A-03 visible content |
| 18 | `elementLevelScreenshotFallback(page, screenshotDir, viewport)` | Screenshot utility |
| 19 | `runPhase3Gates(page)` | Phase 3A unified entry |
| 20 | `runPostWeaverGates(auditorReports, weaverReport)` | Phase 3C post-weaver |
| 21 | `runMetaGates(allResults)` | Meta: GR-48, GR-49 |
| 22 | `runAllGates(page, briefText)` | Unified wrapper (all 4 phases) |

---

## Summary

| Severity | Found | Fixed | Unfixed |
|----------|-------|-------|---------|
| BLOCKING | 3 | 3 | 0 |
| SIGNIFICANT | 10 | 10 | 0 |
| MINOR | 5 | 3 | 2 |
| **Total** | **18** | **16** | **2** |

**Files edited:**
1. `MANIFEST.md` — 17 edits (line counts in Appendix D, Section 3, Known Limitations, quickstart, routing table, agent roster, Appendix E)
2. `artifact-orchestrator.md` — 3 edits (components.css count, total builder input, council ruling quote)
3. `artifact-builder-recipe.md` — 1 edit (components.css count)
4. `gate-runner-spec.md` — 1 edit (tier totals summary)
5. `gate-runner-provenance.md` — 1 edit (active gate count)
6. `gate-runner-core.js` — 2 edits (BV range in header comment + section header)
7. `gate-runner-preconditions.md` — 1 edit (BV range reference)
8. `EXECUTION-TRACKER-TEMPLATE.md` — 1 edit (BV count)
9. `SKILL.md` — 4 edits (function count, spec lines, pa-deployment lines, pa-weaver lines)

**Unfixed items (need human/contextual judgment):**
- M-04: gate-runner-provenance.md missing wave change log entries for Wave 0, Wave 4, Pipeline v4, and convergence reframe
- M-05: artifact-orchestrator.md item count discrepancy (222 vs 228)

---

## Root Cause

All stale information follows the same pattern: **files grew during Pipeline v4 and convergence reframe additions, but line count claims in referencing files were never updated.** The gate-runner-core.js grew from ~1,626 to 2,273 lines (+647) as Wave 4 experiential gates, Pipeline v4 multi-coherence/component/footer gates, and convergence reframe iteration/anti-regression gates were added. Components.css grew from 290 to 944 lines during component library expansion. The MANIFEST, SKILL, and other referencing files were not updated to reflect these growth events.

**Recommendation:** Consider a line-count verification pass as a standard step in any Wave/Pipeline version change. A simple `wc -l` comparison script against claimed values in MANIFEST.md Appendix D would catch these drifts automatically.

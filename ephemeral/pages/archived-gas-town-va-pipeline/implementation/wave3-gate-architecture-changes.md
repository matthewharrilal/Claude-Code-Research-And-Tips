# Wave 3: Gate Architecture Changes
Date: 2026-02-24
Agent: gate-architect
Implements: FIX-090, FIX-094, FIX-098, FIX-100, FIX-116

---

## Summary

Split the monolithic gate runner (2,410 lines) into 5 operational files and reclassified 6 non-Playwright gates to the orchestrator. Created gate manifest JSON and execution manifest template.

---

## FIX-090: Gate Runner Split (5 files)

**Original:** `artifact-gate-runner.md` (2,410 lines)
**Preserved as:** `artifact-gate-runner-MONOLITHIC.md` (2,410 lines, unchanged)
**Replaced with:** Redirect pointer file (22 lines)

### New Files Created

| File | Lines | Purpose |
|------|-------|---------|
| `gate-runner-core.js` | 1,436 | All executable Playwright JavaScript (6 functions) |
| `gate-runner-preconditions.md` | 83 | Text-based pre-build checks (BV-01-04, GR-23-28 reference) |
| `gate-runner-spec.md` | 188 | Human-readable gate specifications, no code |
| `gate-runner-provenance.md` | 151 | History, traceability, wave change logs, council rulings |
| `gate-manifest.json` | 159 | JSON TOC, tiers, execution order, manifest template |

**Total new file lines:** 2,017 (vs 2,410 monolithic = 84% of original, with redirect and deduplication)

### Functions in gate-runner-core.js

| Function | Gates | Lines |
|----------|-------|-------|
| `runBriefVerification(briefText)` | BV-01 through BV-04 | ~95 |
| `runGateRunner(page)` | GR-01 through GR-15, GR-43, GR-44 | ~630 |
| `runAntiPatternGates(page)` | GR-17 through GR-22 | ~270 |
| `runWave2Gates(page)` | GR-45, GR-46, GR-50, GR-51, GR-52, GR-53 | ~300 |
| `runGateCoverage(allResults)` | GR-48 | ~50 |
| `checkGateResultIntegrity(files, data)` | GR-49 | ~40 |

---

## FIX-094: Gate Reclassification (GR-23 through GR-28)

### Gates Moved to Orchestrator

| Gate | Name | Former Tier | Reason for Reclassification |
|------|------|------------|----------------------------|
| GR-23 | Builder Model = Opus | ADVISORY | Pipeline config check, not DOM inspection |
| GR-24 | Content Heterogeneity | ADVISORY | Phase 0 output check, not DOM inspection |
| GR-25 | Suppressor Count = 0 | RECOMMENDED | Brief text check, not DOM inspection |
| GR-26 | Brief Size Cap | RECOMMENDED | Brief text check, not DOM inspection |
| GR-27 | Builder Gate-Free | RECOMMENDED | Brief text check, not DOM inspection |
| GR-28 | Recipe Format | RECOMMENDED | Brief text check, not DOM inspection |

**Rationale:** These 6 gates verify pipeline configuration and brief content via text parsing. They never needed Playwright and do not inspect the DOM. They belong with the orchestrator's pre-build verification logic.

### Ambiguous Gates (could go either way)

| Gate | Decision | Reasoning |
|------|----------|-----------|
| GR-33 (CSS Naming Mode) | **KEPT in gate-runner** | Requires Playwright to extract CSS custom properties from `<style>` blocks |
| GR-34 (Component Modulation) | **KEPT in gate-runner** | Requires Playwright to compare computed styles across zones |
| BV-01 through BV-04 | **KEPT in gate-runner** | Text parsing but tightly coupled to gate runner execution flow |
| GR-25 vs BV-04 | **Both kept (overlap acknowledged)** | GR-25 runs pre-builder, BV-04 runs pre-build; same regex, different timing |

---

## FIX-098: Orchestrator Section 9 Addition

Added new subsection "Orchestrator Decision Rules (formerly GR-23 through GR-28)" to `artifact-orchestrator.md` Section 7 (Verdict and Decision Tree). Contains:
- 6 gate specifications with check methods, evidence levels, enforcement timing
- Clear distinction: GR-23/24 run during Phase 0/Phase 2 spawning; GR-25-28 run between Phase 1 and Phase 2
- ~42 lines added to orchestrator

**Note:** Added as a subsection of Section 7 rather than a new Section 9 because the orchestrator's Section 9 already exists ("REROUTED VALUES ITEMS"). Section 7 already contained Wave 1 relocated gate logic (GR-29-42), making it the natural home for Wave 3 relocations.

---

## FIX-100: Gate Execution Manifest Template

Embedded in `gate-manifest.json` under the `gateExecutionManifestTemplate` key. Template fields:
- `buildId`, `timestamp`, `viewports`
- `tiersExecuted` (per-tier executed/passed/failed counts)
- `results` array (gateId, tier, status, details)
- `verdict` (PROCEED_TO_PA | REFINE | REBUILD | INCOMPLETE)
- `coverageStatus` (required present count, recommended present count)

~20 lines. Orchestrator produces this JSON after every gate run.

---

## FIX-116: Gate Manifest JSON

Created `gate-manifest.json` (159 lines) containing:
- Version, date, authority
- File references (all 7 gate-related files)
- Tiers with gate arrays: REQUIRED (18), RECOMMENDED (8), ADVISORY (5), BRIEF (4), DIAGNOSTIC (2)
- Verdict logic summary
- 7-step execution order with function names and prerequisites
- Gate execution manifest template (FIX-100)
- Total gate count breakdown
- Explanatory notes (skipped gates, renumbering, reclassifications)

---

## Final Gate Count (Post-Reclassification)

### Gates Remaining in Gate Runner (Playwright-Executable)

| Category | Gates | Count |
|----------|-------|-------|
| Identity (REQUIRED) | GR-01 through GR-10 | 10 |
| Perception (REQUIRED) | GR-11 through GR-15, GR-44 | 6 |
| Output (REQUIRED) | GR-43 | 1 |
| Meta (REQUIRED) | GR-48 | 1 |
| Anti-pattern (RECOMMENDED) | GR-17 through GR-20, GR-45, GR-51 | 6 |
| Meta (RECOMMENDED) | GR-49, GR-52 | 2 |
| Anti-pattern (ADVISORY) | GR-21, GR-22 | 2 |
| Mode Detection (ADVISORY) | GR-33, GR-34 | 2 |
| Accessibility (ADVISORY) | GR-46 | 1 |
| Output (ADVISORY) | GR-50 | 1 |
| Measurement (ADVISORY) | GR-53 | 1 |
| **Subtotal Playwright** | | **33** |
| Brief Verification | BV-01 through BV-04 | 4 |
| **Total in gate-runner scope** | | **37** |

### Gates Moved to Orchestrator

| Category | Gates | Count |
|----------|-------|-------|
| Pre-build config (ADVISORY) | GR-23, GR-24 | 2 |
| Pre-build brief (RECOMMENDED) | GR-25, GR-26, GR-27, GR-28 | 4 |
| **Total in orchestrator scope** | | **6** |

### Tier Breakdown (Gate-Runner Only)

| Tier | Count | Gate IDs |
|------|-------|----------|
| REQUIRED | 18 | GR-01-10, GR-11-15, GR-43, GR-44, GR-48 |
| RECOMMENDED | 8 | GR-17-20, GR-45, GR-49, GR-51, GR-52 |
| ADVISORY | 7 | GR-21, GR-22, GR-33, GR-34, GR-46, GR-50, GR-53 |
| BRIEF | 4 | BV-01, BV-02, BV-03, BV-04 |
| **Total** | **37** | |

---

## Files Modified

| File | Action | Lines Added | Lines Removed |
|------|--------|-------------|---------------|
| `artifact-gate-runner.md` | Replaced with redirect | 22 | 2,410 |
| `artifact-gate-runner-MONOLITHIC.md` | Created (preservation copy) | 2,410 | 0 |
| `gate-runner-core.js` | Created | 1,436 | 0 |
| `gate-runner-preconditions.md` | Created | 83 | 0 |
| `gate-runner-spec.md` | Created | 188 | 0 |
| `gate-runner-provenance.md` | Created | 151 | 0 |
| `gate-manifest.json` | Created | 159 | 0 |
| `artifact-orchestrator.md` | Edited (added GR-23-28 section) | 42 | 0 |

**Net effect:** 7 new files created, 1 file replaced with redirect, 1 file edited. Original content fully preserved in MONOLITHIC copy.

---

## Verification Checklist

- [x] Original preserved as `artifact-gate-runner-MONOLITHIC.md`
- [x] All JavaScript code blocks extracted to `gate-runner-core.js`
- [x] All 6 functions compile-ready with proper signatures
- [x] Precondition checks documented in `gate-runner-preconditions.md`
- [x] Human-readable spec in `gate-runner-spec.md` covers all 37 gate-runner gates
- [x] Provenance file tracks all 3 waves of changes
- [x] JSON manifest with tier breakdown and execution order
- [x] GR-23-28 removed from gate-runner, added to orchestrator
- [x] Orchestrator Section 7 updated with reclassified gates
- [x] Gate execution manifest template included (FIX-100)
- [x] No changes to MANIFEST.md (owned by another agent)
- [x] Change log written with final gate count for manifest-meta-editor

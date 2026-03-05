# Gate Count Consolidation Report

**Date:** 2026-02-25
**Agent:** gate-consolidator (Opus)
**Task:** Establish single source of truth for gate counts across all pipeline files

---

## 1. Canonical Gate Count (from gate-manifest.json)

| Tier | Count | Gate IDs |
|------|-------|----------|
| **REQUIRED** | 20 | GR-01, GR-02, GR-03, GR-04, GR-05, GR-06, GR-08, GR-09, GR-10, GR-11, GR-13, GR-14, GR-15, GR-44, GR-60, GR-61, GR-62, GR-63, GR-64, GR-48 |
| **RECOMMENDED** | 10 | GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52, **GR-67** |
| **ADVISORY** | 9 | GR-05b, GR-19, GR-21, GR-22, GR-46, GR-50, GR-53, GR-55, GR-66 |
| **DIAGNOSTIC** | 2 | GR-33, GR-34 |
| **BRIEF VERIFICATION** | 5 | BV-01, BV-02, BV-03, BV-04, BV-05 |
| **UTILITY** | 1 | A-03 |
| **TOTAL** | **47** | |

**In-file executable (gate-runner-core.js):** 39 GR + 5 BV + 1 A-03 = **45**
(Excludes 2 diagnostic gates GR-33/GR-34 which have no code)

---

## 2. Discrepancies Found

### 2A. GR-67 Tier Classification Conflict

**The core dispute:** GR-67 (Footer Text Size) was classified as ADVISORY in gate-runner-core.js but RECOMMENDED in gate-manifest.json and gate-runner-spec.md.

| Source | GR-67 Tier | RECOMMENDED Count | ADVISORY Count |
|--------|------------|-------------------|----------------|
| gate-manifest.json (tiers arrays) | RECOMMENDED | 10 | 9 listed, **count said 10** (BUG) |
| gate-runner-spec.md (tier table) | RECOMMENDED | 10 | 9 |
| gate-runner-spec.md (individual gate listing) | RECOMMENDED | -- | -- |
| gate-runner-spec.md (execution matrix) | RECOMMENDED | -- | -- |
| gate-runner-core.js (header comment) | **ADVISORY** (WRONG) | 9 | 10 |
| gate-runner-core.js (GR-48 RECOMMENDED_GATES array) | **absent** (WRONG) | 9 | -- |

**Resolution:** GR-67 is **RECOMMENDED**. The gate-manifest.json and gate-runner-spec.md agree (3 data points in spec: tier table, individual listing, execution matrix). The core.js header and GR-48 array were stale from when GR-67 was initially added.

### 2B. gate-manifest.json advisory.count Off By One

The manifest's `tiers.advisory.count` was set to 10 but the `tiers.advisory.gates` array only contained 9 items. This was an internal inconsistency where the count was not updated after GR-67 moved to RECOMMENDED.

### 2C. gate-manifest.json inGateRunner Count

`totalGateCount.inGateRunner` was 40, should be 39. Enumeration of all GR-* IDs with executable code:

- Section 2 (runGateRunner): GR-01, GR-02, GR-03, GR-04, GR-05, GR-05b, GR-06, GR-07, GR-08, GR-09, GR-10, GR-11, GR-13, GR-14, GR-15, GR-60, GR-44, GR-43, GR-63 = **19**
- Section 3 (runAntiPatternGates): GR-17, GR-18, GR-19, GR-20, GR-21, GR-22 = **6**
- Section 4 (runWave2Gates): GR-45, GR-46, GR-50, GR-51, GR-52, GR-53, GR-55, GR-66, GR-67 = **9**
- Section 5 (runGateCoverage + checkGateResultIntegrity): GR-48, GR-49 = **2**
- Section 6 (checkDPR + checkScreenshotQuality + checkUsabilityPriority): GR-61, GR-62, GR-64 = **3**
- **Total: 39** (not 40)

### 2D. Stale "42 gates" References (Pre-Pipeline v4)

The old count was 42. Pipeline v4 added GR-55, GR-66, GR-67, GR-61, GR-62, GR-63, GR-64, BV-05, and A-03 (+9 gates, -4 removed/reclassified = net +5, reaching 47). Multiple files were never updated:

| File | Line(s) | Old Text | New Text |
|------|---------|----------|----------|
| MANIFEST.md | 142 | "42 programmatic gate checks (36 GR + 4 BV + 2 diagnostic)" | "47 programmatic gate checks (see gate-manifest.json)" |
| MANIFEST.md | 142 | "42 gates: PASS/FAIL" | "47 gates: PASS/FAIL" |
| MANIFEST.md | 247 | "42 gate-runner gates" | "47 gate-runner gates" |
| MANIFEST.md | 248 | "42 gate-runner gates (20 REQUIRED + 9 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF VERIFICATION)" | "47 gate-runner gates (20 REQUIRED + 10 RECOMMENDED + 9 ADVISORY + 2 DIAGNOSTIC + 5 BV + 1 UTILITY)" |
| MANIFEST.md | 466 | "42-gate inventory: 20 REQUIRED + 9 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BV" | "47-gate inventory: 20 REQUIRED + 10 RECOMMENDED + 9 ADVISORY + 2 DIAGNOSTIC + 5 BV + 1 UTILITY" |
| MANIFEST.md | 499 | "42 gates: PASS/FAIL" | "47 gates: PASS/FAIL" |
| MANIFEST.md | 785 | "42 gates (20 REQUIRED + 9 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BV)" | "47 gates (20 REQUIRED + 10 RECOMMENDED + 9 ADVISORY + 2 DIAGNOSTIC + 5 BV + 1 UTILITY)" |
| MANIFEST.md | 822 | "All 42 gates in gate-runner-core.js" | "All 47 gates in gate-manifest.json" |
| MANIFEST.md | 856 | "42 gates, executed as Playwright JavaScript" | "47 gates — see gate-manifest.json" |
| SKILL.md | 46 | "42 gates: 20 REQ + 9 REC + 7 ADV + 2 DIAG + 4 BV" | "47 gates — see gate-manifest.json" |
| SKILL.md | 50 | "20 REQUIRED + 9 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF" | "20 REQUIRED + 10 RECOMMENDED + 9 ADVISORY + 2 DIAGNOSTIC + 5 BRIEF + 1 UTILITY = 47" |
| SKILL.md | 76 | "9 functions, 42 gates" | "9 functions, 47 gates — see gate-manifest.json" |

---

## 3. All Fixes Applied

### 3A. gate-manifest.json (CANONICAL SOURCE)
1. Added `_canonical` field at top: "CANONICAL GATE REGISTRY — all other files reference this count"
2. Fixed `advisory.count`: 10 -> 9
3. Fixed `totalGateCount.inGateRunner`: 40 -> 39
4. Added `totalGateCount.utility`: 1
5. Updated note with correct tier breakdown
6. Bumped version: 4.1.0 -> 4.1.1

### 3B. gate-runner-core.js
1. Fixed header: RECOMMENDED (9) -> RECOMMENDED (10), ADVISORY (10) -> ADVISORY (9)
2. Moved GR-67 from ADVISORY to RECOMMENDED in header listing
3. Header now references gate-manifest.json as canonical source
4. Fixed GR-48 `RECOMMENDED_GATES` array: added 'GR-67' (was missing)
5. Updated array comment: "9 RECOMMENDED" -> "10 RECOMMENDED"

### 3C. MANIFEST.md (6 locations)
1. Line 142: "42 programmatic gate checks" -> "47 programmatic gate checks (see gate-manifest.json)"
2. Lines 247-248: Updated gate count and tier breakdown to 47
3. Line 466: "42-gate inventory" -> "47-gate inventory" with updated breakdown
4. Line 499: "42 gates" -> "47 gates"
5. Line 785: Layer coverage table updated to 47
6. Lines 822, 856: Updated verification and routing references

### 3D. SKILL.md (3 locations)
1. Line 46: Gate runner file description updated to "47 gates"
2. Line 50: gate-manifest.json description updated with full tier breakdown
3. Line 76: Execution rules updated to "47 gates"

### 3E. verify-pipeline-structure.js (verification script)
1. GC-01: Updated to check for "47 programmatic gate checks"
2. GC-02: Updated to check for "47 gate-runner gates"
3. GC-04: Updated to check for "10 RECOMMENDED" (was "9 RECOMMENDED")
4. GC-05: Updated to check for "47 gates" (was "42 gates")
5. GC-07: Updated to check for "All 47 gates" (was "All 42 gates")
6. GC-08: Updated to check for gate-manifest.json reference
7. GC-10: Updated to check for RECOMMENDED 10 (was 9)
8. GC-11: Updated to check for ADVISORY 9 (was 7)
9. GC-15: Updated to check for "10 RECOMMENDED" (was "9 RECOMMENDED")
10. GC-18: Updated to check recommended.count = 10 (was 9)
11. Added GC-18b: New check for advisory.count = 9
12. GC-19: Updated to check for "47 gates" (was "42 gates")
13. GC-22: Updated to check for "10 REC" (was "9 REC")

---

## 4. Drift Prevention Strategy

To prevent future drift, the following pattern was established:

1. **gate-manifest.json** has a new `_canonical` field identifying it as the single source of truth
2. **gate-runner-core.js** header now says "see gate-manifest.json for canonical counts"
3. **MANIFEST.md** references now say "see gate-manifest.json" instead of hard-coding numbers where practical
4. **SKILL.md** references now say "see gate-manifest.json for canonical tier breakdown"

Hard-coded counts remain in the gate-runner-spec.md tier table (needed for human readability) and in the GR-48 RECOMMENDED_GATES array (needed for code execution). These two locations are the most likely to drift in future and should be checked whenever gates are added or reclassified.

---

## 5. Files NOT Fixed (Outside Scope)

The following files contain "42 gates" references but are historical/archival documents that describe the pipeline as it existed at a prior point in time. Fixing them would misrepresent the historical record:

- `ephemeral/va-extraction/phase7-final-verification.md` (historical verification report)
- `ephemeral/va-extraction/phase7-adversarial.md` (historical adversarial review)
- `ephemeral/va-extraction/phase7-fix-changelog.md` (historical changelog)
- `ephemeral/va-extraction/phase7-fresh-eyes.md` (historical fresh-eyes review)
- `ephemeral/va-extraction/phase7-flow-simulation.md` (historical flow simulation)
- `ephemeral/va-extraction/meta-buddy-gates.md` (historical buddy review)
- `ephemeral/va-extraction/artifact-worked-examples.md` (historical worked examples)
- `ephemeral/va-extraction/artifact-routing.md` (historical reference)
- `ephemeral/va-extraction/pipeline-structural-manifest.md` (structural checklist -- now outdated by updated verify script)

---

## 6. Final Consolidated Count

```
CANONICAL SOURCE: gate-manifest.json (version 4.1.1)

REQUIRED ........ 20 gates  (ANY FAIL blocks verdict)
RECOMMENDED ..... 10 gates  (3+ FAIL = REBUILD)
ADVISORY ........  9 gates  (Informational only)
DIAGNOSTIC ......  2 gates  (Report-only, no code)
BRIEF ...........  5 gates  (ANY FAIL = return brief)
UTILITY .........  1 gate   (WARNING, no verdict impact)
────────────────────────────
GRAND TOTAL ..... 47 gates

In-file executable (gate-runner-core.js): 39 GR + 5 BV + 1 A-03 = 45
```

All 6 key pipeline files now agree on these numbers. The verification script has been updated to enforce them.

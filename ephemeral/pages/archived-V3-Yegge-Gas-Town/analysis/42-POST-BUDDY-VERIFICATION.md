# Post-Buddy-Review Consistency Verification
Date: 2026-02-25
Scope: `ephemeral/va-extraction/` pipeline spec files
Canonical reference: `gate-manifest.json` (grandTotal.note is authoritative on gate counts)

---

## Executive Summary

**4 of 6 checks PASS. 2 checks FAIL.**

| Check | Result |
|-------|--------|
| 1. Gate counts (REQUIRED=16, RECOMMENDED=9, ADVISORY=7) | PASS |
| 2. "38 gates" total — zero "37" in core spec files | FAIL |
| 3. GR-60 in perception gate lists at ~lines 260, 642, 710 | PASS |
| 4. gate-runner-spec.md tier totals match gate-manifest.json | PARTIAL FAIL |
| 5. SKILL.md line counts match actual file sizes | FAIL |
| 6. EXECUTION-TRACKER-TEMPLATE.md line counts match actual file sizes | PASS |

---

## Check 1: Gate Counts (REQUIRED=16, RECOMMENDED=9, ADVISORY=7)

**Result: PASS**

Verification method: read tier tables in all five files, manual count of gate IDs.

### gate-manifest.json
```
"required": { "count": 16, "gates": ["GR-01","GR-02","GR-03","GR-04","GR-05","GR-06","GR-08","GR-09","GR-10","GR-11","GR-13","GR-14","GR-15","GR-44","GR-60","GR-48"] }
"recommended": { "count": 9, "gates": ["GR-07","GR-17","GR-18","GR-20","GR-43","GR-45","GR-49","GR-51","GR-52"] }
"advisory": { "count": 7, "gates": ["GR-05b","GR-19","GR-21","GR-22","GR-46","GR-50","GR-53"] }
```
PASS — 16/9/7 confirmed.

### gate-runner-spec.md
```
| **REQUIRED**     | GR-01–GR-06, GR-08–GR-11, GR-13–GR-15, GR-44, GR-60, GR-48 | 16 |
| **RECOMMENDED**  | GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52 | 9 |
| **ADVISORY**     | GR-05b, GR-19, GR-21, GR-22, GR-46, GR-50, GR-53 | 7 |
```
PASS — 16/9/7 confirmed.

### MANIFEST.md
Line 246: `38 gate-runner gates (16 REQUIRED + 9 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF VERIFICATION)`
Line 778: `38 gates (16 REQUIRED + 9 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BV)`
PASS — 16/9/7 confirmed.

### gate-runner-core.js (GR-48 REQUIRED_GATES array, lines 1326-1331)
```js
const REQUIRED_GATES = [
  'GR-01','GR-02','GR-03','GR-04','GR-05','GR-06','GR-08','GR-09','GR-10',
  'GR-11','GR-13','GR-14','GR-15',
  'GR-44','GR-60'
]; // 15 REQUIRED gates (not counting GR-48 itself)

const RECOMMENDED_GATES = [
  'GR-07','GR-17','GR-18','GR-20',
  'GR-43','GR-45','GR-49','GR-51','GR-52'
]; // 9 RECOMMENDED gates
```
PASS — 15 in array (+ GR-48 itself = 16 total REQUIRED), 9 RECOMMENDED confirmed.

### EXECUTION-TRACKER-TEMPLATE.md
Tier counts not stated explicitly. Gate table at lines 156–167 tracks gates by category (not by tier label). No 16/9/7 breakdown present — tracker uses operational groupings (Identity, Perception, Anti-Pattern, etc.).
PASS — no incorrect tier counts found.

---

## Check 2: "38 Gates" Total — Zero Instances of "37"

**Result: FAIL**

### MANIFEST.md — PASS
All gate total references in MANIFEST.md correctly use "38":
- Line 142: `38 programmatic gate checks (34 Playwright + 4 BV)`
- Line 246: `38 gate-runner gates`
- Line 495: `Gate runner results (38 gates: PASS/FAIL)`
- Line 778: `38 gates (16 REQUIRED + 9 RECOMMENDED...)`
- Line 815: `All 38 gates in gate-runner-core.js`
- Line 849: `gate-runner-core.js (38 gates, executed as Playwright JavaScript)`

`grep "37" MANIFEST.md` returned zero gate-count matches. PASS.

### gate-manifest.json — PASS
```json
"totalGateCount": {
  "inGateRunner": 32,
  "inOrchestrator": 6,
  "removed": 14,
  "total": 38,
  ...
  "grandTotal": 38
}
```
PASS — "38" used throughout, no "37" present.

### gate-runner-spec.md — PASS (for "38")
Line 186: `Tier totals (gate-runner scope): 16 REQUIRED, 9 RECOMMENDED, 7 ADVISORY, 2 DIAGNOSTIC (GR-33, GR-34), 4 BRIEF = 38 executable gates`
PASS for 38 count. (Internal inconsistency at line 23 flagged in Check 4.)

### gate-runner-core.js — PASS
No "37 gate" or "38 gate" strings appear in gate-runner-core.js.

### EXECUTION-TRACKER-TEMPLATE.md — PASS
No "37 gate" or "38 gate" strings appear in EXECUTION-TRACKER-TEMPLATE.md.

### SKILL.md — FAIL
**SKILL.md contains "37 gates" in two places:**

- Line 46: `gate-runner-core.js | 1,431 lines — 6 executable Playwright JS functions (37 gates)`
- Line 75: `The JS code is in gate-runner-core.js (6 functions, 37 gates).`

The canonical count from gate-manifest.json is **38** (grandTotal). SKILL.md predates the Wave 0 addition of GR-60 and has not been updated. This is a staleness failure in the skill launcher.

**Required fix:** Update SKILL.md lines 46 and 75 to read `38 gates` instead of `37 gates`.

---

## Check 3: GR-60 Appears in Perception Gate Lists in MANIFEST.md

**Result: PASS**

Three target locations verified:

### ~Line 260 (Artifact Routing Table)
```
| "SECTION 2: PERCEPTION GATES" (GR-11–GR-15, GR-44, GR-60) | Gate Runner | Threshold verification... WCAG contrast |
```
GR-60 present. PASS.

### ~Line 642 (Failure Recovery Table)
```
| Perception gate FAIL | Gate Runner GR-11–GR-15, GR-44, GR-60 | REFINE. Targeted CSS edits... |
```
GR-60 present. PASS.

### ~Line 710 (Critical Files Table)
```
| artifact-gate-runner.md | "SECTION 2: PERCEPTION GATES" (GR-11–GR-15, GR-44, GR-60) | ANY fail = REFINE |
```
GR-60 present. PASS.

Additional confirmation: GR-60 is also present in gate-manifest.json verdictLogic (line 59) and gate-runner-core.js perception gate filter array (line 784).

---

## Check 4: gate-runner-spec.md Tier Totals Match gate-manifest.json

**Result: PARTIAL FAIL**

### Tier counts — PASS
gate-runner-spec.md line 18–21 table:
```
REQUIRED:     16
RECOMMENDED:   9
ADVISORY:      7
BRIEF:         4
```
gate-manifest.json:
```json
"required": { "count": 16 }
"recommended": { "count": 9 }
"advisory": { "count": 7 }
"briefVerification": { "count": 4 }
```
PASS — all four tier counts match.

### Total gate count — INTERNAL INCONSISTENCY (FAIL)
gate-runner-spec.md has TWO conflicting total-count statements:

**Line 23:** `Total Playwright-executable gates: 36 (16 REQUIRED + 9 RECOMMENDED + 7 ADVISORY + 4 BRIEF)`

**Line 186:** `Tier totals (gate-runner scope): 16 REQUIRED, 9 RECOMMENDED, 7 ADVISORY, 2 DIAGNOSTIC (GR-33, GR-34), 4 BRIEF = 38 executable gates`

The two lines disagree by 2 (the 2 DIAGNOSTIC gates GR-33 and GR-34). gate-manifest.json grandTotal = **38** (canonical). Line 23's "36" is incorrect — it omits the 2 DIAGNOSTIC gates. Line 186 is correct.

**Required fix:** Update gate-runner-spec.md line 23 from:
```
**Total Playwright-executable gates: 36** (16 REQUIRED + 9 RECOMMENDED + 7 ADVISORY + 4 BRIEF)
```
to:
```
**Total executable gates: 38** (16 REQUIRED + 9 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF)
```

---

## Check 5: SKILL.md Line Counts Match Actual File Sizes

**Result: FAIL**

SKILL.md (at `~/.claude/skills/build-page/SKILL.md`) contains a table of gate runner split files with stated line counts. Comparing stated vs actual:

| File | SKILL.md States | Actual (`wc -l`) | Match? |
|------|----------------|-----------------|--------|
| `gate-runner-core.js` | 1,431 lines | 1,431 | PASS |
| `gate-runner-spec.md` | 194 lines | 194 | PASS |
| `gate-runner-preconditions.md` | (not stated in SKILL.md) | 83 | N/A |
| `gate-manifest.json` | 167 lines | 167 | PASS |
| `pa-questions.md` | 431 lines | 431 | PASS |
| `pa-deployment.md` | 276 lines | 276 | PASS |
| `pa-weaver.md` | 403 lines | 403 | PASS |

All line counts that SKILL.md explicitly states match actual file sizes. PASS for line counts.

However, SKILL.md fails on the gate count (see Check 2):
- Line 46 states `37 gates` (actual: 38)
- Line 75 states `37 gates` (actual: 38)

**Overall Check 5 verdict: FAIL** because "37 gates" is a false count embedded in the SKILL.md line-count table row, making it inconsistent with canonical gate-manifest.json.

---

## Check 6: EXECUTION-TRACKER-TEMPLATE.md Line Counts Match Actual File Sizes

**Result: PASS (with advisory note)**

EXECUTION-TRACKER-TEMPLATE.md line 31 states:
```
- [ ] Gate runner split files accessible: gate-runner-core.js (1,431 lines), gate-runner-spec.md (194 lines), gate-runner-preconditions.md (83 lines), gate-manifest.json (167 lines)
```

Actual file sizes:
| File | TRACKER States | Actual | Match? |
|------|---------------|--------|--------|
| `gate-runner-core.js` | 1,431 | 1,431 | PASS |
| `gate-runner-spec.md` | 194 | 194 | PASS |
| `gate-runner-preconditions.md` | 83 | 83 | PASS |
| `gate-manifest.json` | 167 | 167 | PASS |

EXECUTION-TRACKER-TEMPLATE.md line 28 and 30 state:
```
- [ ] artifact-orchestrator.md accessible (1,060 lines)
- [ ] artifact-builder-recipe.md accessible (959 lines)
```

Actual file sizes:
| File | TRACKER States | Actual | Match? |
|------|---------------|--------|--------|
| `artifact-orchestrator.md` | 1,060 | 1,060 | PASS |
| `artifact-builder-recipe.md` | 959 | 959 | PASS |

All EXECUTION-TRACKER-TEMPLATE.md line counts match actual file sizes. PASS.

**Advisory note (not a failure):** EXECUTION-TRACKER-TEMPLATE.md gate runner results table (lines 156–165) is missing GR-60 from the Perception row:
- Line 159: `Perception (GR-11–GR-15, GR-44) | 6 | ...` — should be `(GR-11–GR-15, GR-44, GR-60) | 7`
- Line 165: `Total | 33 | ...` — should be `Total | 34 |`

This is a functional incompleteness (GR-60 results won't be tracked in the gate summary table) but does not affect file-size line count accuracy, so Check 6 is scored PASS. The GR-60 omission is flagged as a separate issue below.

---

## Additional Findings (Outside Explicit Checks)

### MANIFEST.md File Registry: Stale Line Counts
MANIFEST.md lines 923–938 contain a file registry with line counts that are systematically stale relative to actual files. These appear to be pre-buddy-review snapshots:

| File | MANIFEST.md States | Actual | Delta |
|------|--------------------|--------|-------|
| `artifact-orchestrator.md` | 1,058 (line 923) | 1,060 | -2 |
| `artifact-builder-recipe.md` | 934 (line 925) | 959 | -25 |
| `gate-runner-core.js` | 1,436 (lines 249, 927) | 1,431 | +5 |
| `gate-runner-spec.md` | 188 (lines 250, 928) | 194 | -6 |
| `gate-manifest.json` | 159 (lines 253, 931) | 167 | -8 |
| `EXECUTION-TRACKER-TEMPLATE.md` | 319 (line 932) | 327 | -8 |
| `pa-questions.md` | 412 (line 935) | 431 | -19 |
| `pa-deployment.md` | 237 (line 936) | 276 | -39 |
| `pa-weaver.md` | 376 (line 937) | 403 | -27 |

**Verdict:** MANIFEST.md's file registry is stale. The EXECUTION-TRACKER-TEMPLATE.md and SKILL.md contain the correct current line counts (both updated during buddy reviews). MANIFEST.md was not updated to reflect post-surgery file sizes.

Priority: LOW for execution — agents read the actual files, not the MANIFEST line counts. The MANIFEST line counts are informational orientation. But they create confusion and should be updated.

### MANIFEST.md Wave 3 Split File Lines: Double Stale
MANIFEST.md lines 248–253 also state old line counts matching the same stale values in the file registry (gate-runner-core.js=1,436 lines; gate-runner-spec.md=188 lines; gate-manifest.json=159 lines). Same issue, same fix needed.

---

## Fixes Required

### BLOCKING — Fix before next pipeline run

**FIX-A (SKILL.md "37 gates"):**
File: `~/.claude/skills/build-page/SKILL.md`
- Line 46: Change `1,431 lines — 6 executable Playwright JS functions (37 gates)` → `1,431 lines — 6 executable Playwright JS functions (38 gates)`
- Line 75: Change `The JS code is in gate-runner-core.js (6 functions, 37 gates).` → `The JS code is in gate-runner-core.js (6 functions, 38 gates).`

**FIX-B (gate-runner-spec.md line 23 "36"):**
File: `ephemeral/va-extraction/gate-runner-spec.md`
- Line 23: Change `**Total Playwright-executable gates: 36** (16 REQUIRED + 9 RECOMMENDED + 7 ADVISORY + 4 BRIEF)` → `**Total executable gates: 38** (16 REQUIRED + 9 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF)`

### ADVISORY — Fix when convenient

**FIX-C (EXECUTION-TRACKER GR-60 omission):**
File: `ephemeral/va-extraction/EXECUTION-TRACKER-TEMPLATE.md`
- Line 159: Change `Perception (GR-11–GR-15, GR-44) | 6` → `Perception (GR-11–GR-15, GR-44, GR-60) | 7`
- Line 165: Change `**Total** | **33**` → `**Total** | **34**`

**FIX-D (MANIFEST.md stale file registry):**
File: `ephemeral/va-extraction/MANIFEST.md`
Update all stale line counts in the file registry section (~lines 923–938) and the Wave 3 split file listing (~lines 248–253) to match actual file sizes per the table in Check 5 and the Additional Findings section above.

---

## Check Results Summary

| # | Check | Files Inspected | Result | Fixes |
|---|-------|-----------------|--------|-------|
| 1 | Gate counts (REQ=16, REC=9, ADV=7) | gate-manifest.json, gate-runner-spec.md, MANIFEST.md, gate-runner-core.js, EXECUTION-TRACKER-TEMPLATE.md | **PASS** | None |
| 2 | "38 gates" total, zero "37" in core files | All five spec files + SKILL.md | **FAIL** | FIX-A: SKILL.md lines 46, 75 |
| 3 | GR-60 in perception lists at ~260, ~642, ~710 | MANIFEST.md | **PASS** | None |
| 4 | gate-runner-spec.md tier totals match gate-manifest.json | gate-runner-spec.md, gate-manifest.json | **PARTIAL FAIL** | FIX-B: gate-runner-spec.md line 23 |
| 5 | SKILL.md line counts match actual file sizes | SKILL.md vs actual files | **FAIL** | FIX-A (gate count) |
| 6 | EXECUTION-TRACKER-TEMPLATE.md line counts match actual | EXECUTION-TRACKER-TEMPLATE.md vs actual files | **PASS** | FIX-C advisory: add GR-60 to gate table |

**BLOCKING fixes: 2 (FIX-A, FIX-B)**
**ADVISORY fixes: 2 (FIX-C, FIX-D)**

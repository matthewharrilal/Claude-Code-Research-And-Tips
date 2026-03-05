# 41-SKILL-AUDIT: SKILL.md Stale Reference Audit

**File audited:** `/Users/spacewizardmoneygang/.claude/skills/build-page/SKILL.md`
**Date:** 2026-02-25
**Auditor:** skill-auditor agent

---

## Summary

**7 findings total:** 2 STALE, 5 COSMETIC, 0 BLOCKING.

The SKILL.md is a thin launcher that delegates almost everything to the MANIFEST and its artifact files. Most hardcoded values are in the spec files, not in SKILL.md. However, several values in the gate-manifest.json summary table and the gate-runner-spec.md are stale relative to the actual code in gate-runner-core.js — but those are SPEC FILE issues, not SKILL.md issues. The SKILL.md stale references are limited to the items below.

---

## Finding 1: Gate manifest tier counts in SKILL.md table (STALE)

**Location:** SKILL.md line 50
**Exact text:**
```
| `gate-manifest.json` | 159 lines — JSON TOC, tiers (18 REQUIRED + 8 RECOMMENDED + 5 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF), execution order |
```

**What it says:** 18 REQUIRED + 8 RECOMMENDED + 5 ADVISORY
**What it should say:** 16 REQUIRED + 9 RECOMMENDED + 7 ADVISORY

**Evidence:**
- `gate-manifest.json` (current): `"required": { "count": 16 }`, `"recommended": { "count": 9 }`, `"advisory": { "count": 7 }`
- `gate-runner-core.js` REQUIRED_GATES array (line 1326-1329): 15 gates listed (GR-48 excluded from its own array, +1 = 16 total)
- `gate-runner-core.js` RECOMMENDED_GATES array (line 1332-1334): 9 gates (GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52)
- Advisory gates in gate-manifest.json: 7 (GR-05b, GR-19, GR-21, GR-22, GR-46, GR-50, GR-53)

**Severity:** STALE — the SKILL.md describes this as a summary of `gate-manifest.json` contents, and the actual JSON has been updated, but the SKILL.md description has not been updated to match. The pipeline reads `gate-manifest.json` directly, so this wouldn't cause a runtime failure — it's a description mismatch.

**Fix:**
```
old_string: | `gate-manifest.json` | 159 lines — JSON TOC, tiers (18 REQUIRED + 8 RECOMMENDED + 5 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF), execution order |
new_string: | `gate-manifest.json` | 167 lines — JSON TOC, tiers (16 REQUIRED + 9 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF), execution order |
```

Note: The line count also changed — gate-manifest.json is now 167 lines (verified), not 159.

---

## Finding 2: Gate runner core line count and gate count (STALE)

**Location:** SKILL.md line 46
**Exact text:**
```
| `gate-runner-core.js` | 1,436 lines — 6 executable Playwright JS functions (37 gates) |
```

**What it says:** 1,436 lines, 37 gates
**What it should say:** Needs verification of current line count. The 37 gate count is still plausibly correct (the gate-manifest.json `totalGateCount.total` is 38, `inGateRunner` is 32, plus BV = 36 executable; but the manifest also says `grandTotal: 38`). The "37 gates" text was the old count; with GR-60 added and GR-12 absorbed, the net effect on the executable count depends on how you count. The gate-manifest.json `executionOrder` lists 37 unique gate IDs across all steps (including BV-01–BV-04 and GR-05b).

**Severity:** STALE — line count confirmed different. Actual: 1,431 lines (was 1,436 — net -5 from GR-12 absorption and other Wave 0 changes). The "37 gates" number is still correct: 4 BV + 18 in runGateRunner (including GR-05b) + 6 in runAntiPatternGates + 6 in runWave2Gates + 1 GR-48 + 1 GR-49 = 36 unique gates in code, plus GR-60 in runGateRunner = 37 unique gate results.

**Fix:**
```
old_string: | `gate-runner-core.js` | 1,436 lines — 6 executable Playwright JS functions (37 gates) |
new_string: | `gate-runner-core.js` | 1,431 lines — 6 executable Playwright JS functions (37 gates) |
```

---

## Finding 3: gate-runner-spec.md line count (COSMETIC)

**Location:** SKILL.md line 47
**Exact text:**
```
| `gate-runner-spec.md` | 188 lines — human-readable gate specifications |
```

**What it says:** 188 lines
**What it should say:** gate-runner-spec.md is 189 lines based on current file read (189 lines returned, including trailing blank line). This is close enough to be cosmetic.

**Severity:** COSMETIC — off by ~1 line, no functional impact.

---

## Finding 4: gate-runner-spec.md has stale tier counts (SPEC FILE ISSUE, not SKILL.md)

This is a notable finding about the spec file, NOT the SKILL.md. The `gate-runner-spec.md` itself has stale values:

**Location:** gate-runner-spec.md line 18
```
| **REQUIRED** | GR-01 through GR-15, GR-43, GR-44, GR-48 | 18 | ANY FAIL blocks verdict |
```
This says 18 REQUIRED and lists GR-07 and GR-12 implicitly (via "GR-01 through GR-15"). But GR-07 is now RECOMMENDED, GR-12 is absorbed into GR-18, and GR-60 is a new REQUIRED gate. The count should be 16.

**Location:** gate-runner-spec.md line 19
```
| **RECOMMENDED** | GR-17 through GR-20, GR-45, GR-49, GR-51, GR-52 | 8 | 3+ FAIL = REBUILD |
```
GR-07 and GR-43 should be listed here (now RECOMMENDED). GR-19 moved to ADVISORY. Count should be 9.

**Location:** gate-runner-spec.md line 20
```
| **ADVISORY** | GR-21, GR-22, GR-46, GR-50, GR-53 | 5 | Informational only |
```
GR-05b and GR-19 should be listed. Count should be 7.

**Location:** gate-runner-spec.md line 23
```
**Total Playwright-executable gates: 35** (18 REQUIRED + 8 RECOMMENDED + 5 ADVISORY + 4 BRIEF)
```
Should be 36 (16 REQUIRED + 9 RECOMMENDED + 7 ADVISORY + 4 BRIEF). Plus 2 DIAGNOSTIC = 38 total if including those.

**Location:** gate-runner-spec.md line 130
```
| GR-48 | Gate Coverage | REQUIRED | All 17 REQUIRED gates have results + >= 4/12 RECOMMENDED | OBSERVED |
```
Says "17 REQUIRED" and "4/12 RECOMMENDED" — both wrong. Code says 15 REQUIRED (in coverage array, excluding GR-48 itself = 15+1=16 total) and >=4/9 RECOMMENDED.

**Location:** gate-runner-spec.md lines 148-178 (GATE SUMMARY TABLE)
GR-07 listed as REQUIRED (line 153), should be RECOMMENDED.
GR-12 listed as REQUIRED (line 157), should be removed (absorbed into GR-18).
GR-19 listed as RECOMMENDED (line 163), should be ADVISORY.
GR-43 listed as REQUIRED (line 169), should be RECOMMENDED.
GR-60 is MISSING from the summary table entirely.
GR-05b is MISSING from the summary table entirely.

**Location:** gate-runner-spec.md line 180
```
**Tier totals (gate-runner scope):** 18 REQUIRED, 8 RECOMMENDED, 5 ADVISORY, 2 DIAGNOSTIC (GR-33, GR-34), 4 BRIEF = 37 executable gates
```
Should be: 16 REQUIRED, 9 RECOMMENDED, 7 ADVISORY, 2 DIAGNOSTIC, 4 BRIEF = 38 executable gates

**Severity:** These are ALL in gate-runner-spec.md, NOT in SKILL.md. They are noted here because the SKILL.md points to this file. Flagging for the team lead to coordinate a separate spec file fix.

---

## Finding 5: No mention of MECHANICAL verdict exception (COSMETIC)

**Location:** SKILL.md overall — no mention found
**What it says:** Nothing about MECHANICAL exception
**What it should say:** The SKILL.md is a thin launcher; verdict logic lives in pa-weaver.md and artifact-orchestrator.md. The SKILL.md does not describe verdict logic at all, so the absence of the MECHANICAL exception is not a gap — it's the expected behavior of a thin launcher.

**Severity:** COSMETIC — no functional impact. The SKILL.md correctly delegates to the spec files.

---

## Finding 6: No mention of experiential pass (COSMETIC)

**Location:** SKILL.md overall — no mention found
**What it says:** Nothing about experiential pass
**What it should say:** Same as Finding 5 — the SKILL.md is a thin launcher. The experiential pass is documented in pa-deployment.md Section 2.5, which the pipeline reads directly. No SKILL.md change needed.

**Severity:** COSMETIC — no functional impact.

---

## Finding 7: Builder self-check description (COSMETIC)

**Location:** SKILL.md overall — no mention of "7 self-evaluation questions" or "Q1-Q7"
**What it says:** The SKILL.md does not mention builder self-check questions at all.
**What it should say:** N/A — the builder recipe (artifact-builder-recipe.md) handles this directly. The recipe now has Q0-Q1 legibility checks (Steps 5.1-5.2) and old Q1-Q7 renumbered to Steps 5.3-5.7. Since SKILL.md doesn't reference these, there's no stale reference.

**Severity:** COSMETIC — no functional impact.

---

## Cross-Reference: gate-manifest.json Internal Consistency

The gate-manifest.json has some internal inconsistencies worth flagging:

1. **`coverageStatus.requiredPresent`** (line 138): Says `"15/15"` which is CORRECT for the coverage array (15 gates checked + GR-48 itself = 16 total required).

2. **`coverageStatus.recommendedPresent`** (line 139): Says `"N/9"` which is CORRECT (9 recommended gates).

3. **`tiers.required.count`**: Says 16 — CORRECT.
4. **`tiers.recommended.count`**: Says 9 — CORRECT.
5. **`tiers.advisory.count`**: Says 7 — CORRECT.

So gate-manifest.json is internally consistent and up-to-date. The stale references are in SKILL.md (describing the old JSON) and in gate-runner-spec.md (never updated for Wave 0 changes).

---

## Required Edits (for SKILL.md only)

### Edit 1: Fix gate-manifest.json tier counts description

**File:** `/Users/spacewizardmoneygang/.claude/skills/build-page/SKILL.md`
```
old_string: | `gate-manifest.json` | 159 lines — JSON TOC, tiers (18 REQUIRED + 8 RECOMMENDED + 5 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF), execution order |
new_string: | `gate-manifest.json` | 167 lines — JSON TOC, tiers (16 REQUIRED + 9 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF), execution order |
```

### Edit 2: Fix gate-runner-core.js line count

**File:** `/Users/spacewizardmoneygang/.claude/skills/build-page/SKILL.md`
```
old_string: | `gate-runner-core.js` | 1,436 lines — 6 executable Playwright JS functions (37 gates) |
new_string: | `gate-runner-core.js` | 1,431 lines — 6 executable Playwright JS functions (37 gates) |
```

---

## Recommended Additional Fix: gate-runner-spec.md

The gate-runner-spec.md has 10+ stale references from the Wave 0 surgery. This is a SEPARATE fix from the SKILL.md audit but should be addressed. The stale items are:
- Line 18: REQUIRED gate list and count (18 -> 16, remove GR-07/GR-12, add GR-60)
- Line 19: RECOMMENDED gate list and count (8 -> 9, add GR-07/GR-43, remove GR-19)
- Line 20: ADVISORY gate list and count (5 -> 7, add GR-05b/GR-19)
- Line 23: Total count (35 -> 36 or 38 including diagnostic)
- Line 130: GR-48 description (17 -> 15 required, 12 -> 9 recommended)
- Lines 148-178: Summary table (GR-07 tier, GR-12 presence, GR-19 tier, GR-43 tier, GR-60 missing, GR-05b missing)
- Line 180: Tier totals summary

---

*End of SKILL.md audit. 2 STALE findings in SKILL.md, 10+ stale values in gate-runner-spec.md (separate file).*

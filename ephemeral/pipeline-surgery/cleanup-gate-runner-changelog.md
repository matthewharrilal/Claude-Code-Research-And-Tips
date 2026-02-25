# Gate Runner Cleanup Changelog
Date: 2026-02-25
Agent: gate-runner-fixer (Opus 4.6)
Files: gate-runner-core.js, gate-runner-spec.md, gate-manifest.json

---

## Fix 1: Gate Count Reconciliation (F-14)

**File:** `gate-runner-core.js` line 18
**Before:**
```
// Total executable gates: 37 (in this file) + 4 BV + 2 diagnostic = 43 total pipeline gates
//   REQUIRED (18): GR-01-GR-06, GR-08-GR-11, GR-13-GR-15, GR-44, GR-60, GR-61, GR-62, GR-48
//   RECOMMENDED (11): GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52, GR-63, GR-64
//   ADVISORY (7): GR-05b, GR-19, GR-21, GR-22, GR-46, GR-50, GR-53
```
**After:**
```
// Total executable gates: 36 GR (in this file) + 4 BV (in this file) = 40 in-file executable + 2 diagnostic (GR-33, GR-34, no code) = 42 total pipeline gates
//   REQUIRED (20): GR-01-GR-06, GR-08-GR-11, GR-13-GR-15, GR-44, GR-60, GR-61, GR-62, GR-63, GR-64, GR-48
//   RECOMMENDED (9): GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52
//   ADVISORY (7): GR-05b, GR-19, GR-21, GR-22, GR-46, GR-50, GR-53
```
**Reason:** Three errors in one line: "37" was actually 36 GR gates (verified by grep), "43 total" should be 42 (matches spec/manifest), and BV gates are IN the file but were excluded from the "in this file" count. Ground truth: 36 unique GR-* IDs + 4 BV = 40 in-file + 2 diagnostic (no code) = 42 total.

**Also updated:**
- `gate-manifest.json` `"inGateRunner": 34` -> `36` (was pre-Wave-4, missing GR-61/62/63/64)
- `gate-runner-spec.md` totals updated throughout
- Added clarifying note to `gate-manifest.json` explaining what "inGateRunner" counts

---

## Fix 2: DPR Correction Logic (GR-61) — Adversarial Finding 14

**File:** `gate-runner-core.js` lines 1457-1484
**Before:** Divided viewport dimensions by DPR (`Math.round(viewport.width / dpr)`)
**After:** Returns FAIL immediately with instruction to recreate browser context with `{ deviceScaleFactor: 1 }`
**Reason:** Playwright viewport is already in CSS pixels. Dividing by DPR (e.g., 2 on Retina) would shrink viewport from 1440 to 720, invalidating all spatial gates. The correct fix is setting `deviceScaleFactor: 1` in browser context options, which cannot be changed after context creation.

**Also updated:** `gate-runner-spec.md` GR-61 description to match.

---

## Fix 3: Screenshot Quality Empty Directory (GR-62) — Metacognitive Finding 5

**File:** `gate-runner-core.js` line 1506
**Before:** `if (files.length === 0)` — 0 files = FAIL, but 1-2 files = PASS (no blank screenshots found in 1-2 files)
**After:** `if (files.length < 3)` — each viewport directory must have >= 3 PNG files
**Reason:** With 0 screenshots, "no blank screenshots" technically = PASS. This is a silent false positive. Minimum 3 screenshots per viewport ensures meaningful coverage.

**Also updated:** `gate-runner-spec.md` GR-62 description to mention minimum 3 files.

---

## Fix 4: Tighten GR-63 Regex — Adversarial Finding 01

**File:** `gate-runner-core.js` lines 786-820
**Before:**
- `pass: hasLegibility && hasMinLength`
- `minLength >= 20`
- `hasVisualClarity` computed but NOT in pass condition
- No structural reference check
- No negative-finding detection

**After:**
- `pass: hasLegibility && hasVisualClarity && hasStructuralRef && hasMinLength`
- `minLength >= 100` (20 chars is trivially gameable with "All text is legible and readable")
- `hasVisualClarity` now required for PASS
- Added `hasStructuralRef` — requires zone/section/header/footer/Z1-Z9/S1-S9 reference
- Added `hasNegativeFinding` — tracked but not required (for monitoring)

**Reason:** A Sonnet builder could pass the old GR-63 by inserting `<!-- EXPERIENTIAL-CHECK: All text is legible and readable at arm's length. No issues found. -->` (74 chars, contains "legible" and "readable"). The tightened check requires substantive evidence of genuine assessment.

---

## Fix 5: Promote GR-63 to REQUIRED — Adversarial Finding 07

**Files:** `gate-runner-core.js`, `gate-runner-spec.md`, `gate-manifest.json`
**Before:** GR-63 in RECOMMENDED_GATES array. FAIL does not trigger REBUILD or REFINE.
**After:** GR-63 in REQUIRED_GATES array. FAIL triggers REFINE verdict (send back to builder).
**Reason:** A RECOMMENDED GR-63 allows the builder to skip Step 5.0 entirely with no consequence. The experiential self-check should block the expensive PA audit if not performed.

**Changes across files:**
- `gate-runner-core.js`: Moved GR-63 from RECOMMENDED_GATES to REQUIRED_GATES. Added `experientialFail` check in verdict logic with REFINE action. Updated header tier counts. Updated GR-48 threshold strings (19/19 REQUIRED, 5/9 RECOMMENDED).
- `gate-runner-spec.md`: Updated categorization table (20 REQUIRED, 9 RECOMMENDED). Updated GR-48 threshold. Updated GR-63 tier to REQUIRED. Updated blocking behavior. Updated tier totals.
- `gate-manifest.json`: Updated required gates array and count. Updated recommended gates array and count. Updated verdict logic. Updated coverage template. Updated notes.

---

## Fix 6: Promote GR-64 to REQUIRED + Decision Rule — Adversarial Finding 08

**Files:** `gate-runner-core.js`, `gate-runner-spec.md`, `gate-manifest.json`
**Before:** GR-64 in RECOMMENDED_GATES. No decision rule for FAIL + SHIP combination.
**After:** GR-64 in REQUIRED_GATES. Decision rule added: "If GR-64 FAIL and weaver verdict is SHIP or SHIP WITH FIXES, downgrade to REFINE."
**Reason:** GR-64 runs post-weaver. Without a decision rule, the orchestrator faces an ambiguous situation when the weaver says SHIP but GR-64 says FAIL.

**Changes across files:**
- `gate-runner-core.js`: Moved GR-64 from RECOMMENDED_GATES to REQUIRED_GATES. Added decision rule comment and note in function output.
- `gate-runner-spec.md`: Updated tier and blocking behavior. Added verdict logic rule.
- `gate-manifest.json`: Same propagation as GR-63.

---

## Fix 7: BV-02 False Positive Risk — Metacognitive Finding 5

**File:** `gate-runner-core.js` lines 73-96
**Before:** Scanned ALL hex values in the entire brief text sequentially. Non-background hex values (border colors, accent `#E83025`, code examples) would trigger false pair comparisons.
**After:** Scoped to a "Zone Backgrounds" section of the brief text via regex. Falls back to full brief scan if no such section is found (with a warning in the result).
**Reason:** BV-02 was designed to catch insufficient background deltas, but scanning every hex in the brief produces false failures from non-background color pairs (e.g., `#E83025` accent red followed by a slightly different accent).

**Result object now includes:**
- `scopedToSection: boolean` — whether the Zone Backgrounds section was found
- `note` — warning if fallback to full brief scan

---

## Summary

| Fix | Source Finding | Severity | Files Changed |
|-----|---------------|----------|---------------|
| 1. Gate count reconciliation | F-14 (stale audit) | BLOCKING | core.js, spec.md, manifest.json |
| 2. DPR correction logic | Adversarial F-14 | MINOR | core.js, spec.md |
| 3. Screenshot quality empty dir | Metacognitive F-5/6 | SIGNIFICANT | core.js, spec.md |
| 4. Tighten GR-63 regex | Adversarial F-01 | BLOCKING | core.js |
| 5. Promote GR-63 to REQUIRED | Adversarial F-07 | SIGNIFICANT | core.js, spec.md, manifest.json |
| 6. Promote GR-64 to REQUIRED | Adversarial F-08 | SIGNIFICANT | core.js, spec.md, manifest.json |
| 7. BV-02 false positive scope | Metacognitive F-5 | SIGNIFICANT | core.js |

**Verification:** `node --check gate-runner-core.js` passes. `JSON.parse(gate-manifest.json)` valid.

**New tier totals:** 20 REQUIRED (was 18), 9 RECOMMENDED (was 11), 7 ADVISORY (unchanged), 2 DIAGNOSTIC (unchanged), 4 BRIEF (unchanged) = 42 total (unchanged).

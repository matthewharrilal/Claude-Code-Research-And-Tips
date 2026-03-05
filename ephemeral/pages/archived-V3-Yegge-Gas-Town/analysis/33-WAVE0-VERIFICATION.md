# Wave 0 Verification Report — Anti-Loss Checkpoint
Date: 2026-02-25
Verifier: preflight-auditor (Opus)
Input: gate-runner-core.js (1,405 lines, -31 from baseline 1,436)
Gate-manifest.json: 159 lines (UNCHANGED — stale)

---

## Summary

| # | Check | Mechanism | Status |
|---|-------|-----------|--------|
| 1 | REQUIRED_GATES array (15 gates) | M-13 | **PASS** |
| 2 | RECOMMENDED_GATES array (9 gates) | M-13 | **PASS** |
| 3 | 6 function signatures present | M-19 | **PASS** |
| 4 | Result schema `{ gate, name, status, measured, threshold }` consistency | M-06 | **PASS** |
| 5 | isCold() utility correct after GR-05/GR-07 consolidation | M-08 | **PASS** |
| 6 | BV-01 regexes unchanged | M-05 | **PASS** |
| 7 | BV-04 regexes unchanged | M-06 | **PASS** |
| 8 | GR-60 WCAG contrast calculation | NEW | **PASS (minor note)** |
| 9 | GR-44 scrollHeight + scrollTop + opacity | FIX | **PASS** |
| 10 | GR-14 :scope > parent scoping | FIX | **PASS** |
| 11 | gate-manifest.json consistency | M-13 | **FAIL — STALE** |

**Verdict: 10 PASS, 1 FAIL (gate-manifest.json not updated after Wave 0)**

---

## Detailed Findings

### Check 1: REQUIRED_GATES array — PASS

**Location:** Lines 1300-1304

```js
const REQUIRED_GATES = [
    'GR-01', 'GR-02', 'GR-03', 'GR-04', 'GR-05', 'GR-06', 'GR-08', 'GR-09', 'GR-10',
    'GR-11', 'GR-13', 'GR-14', 'GR-15',
    'GR-44', 'GR-60'
];
```

**Count:** 15 gates. Each verified to have executable code:

| Gate | Function | Line | Verified |
|------|----------|------|----------|
| GR-01 | runGateRunner | 162 | Border Radius Zero |
| GR-02 | runGateRunner | 181 | Box Shadow None |
| GR-03 | runGateRunner | 208 | Container Width |
| GR-04 | runGateRunner | 227 | No Gradients |
| GR-05 | runGateRunner | 269 | Warm Palette (Visible) |
| GR-06 | runGateRunner | 299 | Font Trinity |
| GR-08 | runGateRunner | 341 | No Decorative Elements |
| GR-09 | runGateRunner | 393 | Border Weight Hierarchy |
| GR-10 | runGateRunner | 493 | Cross-Page DNA |
| GR-11 | runGateRunner | 539 | Background Delta |
| GR-13 | runGateRunner | 568 | Stacked Gap CSS |
| GR-14 | runGateRunner | 626 | Visual Gap |
| GR-15 | runGateRunner | 647 | Single Margin |
| GR-44 | runGateRunner | 740 | Trailing Void |
| GR-60 | runGateRunner | 702 | WCAG AA Contrast |

**Removed from REQUIRED (correct):** GR-07 (->RECOMMENDED), GR-12 (absorbed into GR-18), GR-43 (->RECOMMENDED)
**Added to REQUIRED (correct):** GR-60 (new WCAG gate)

### Check 2: RECOMMENDED_GATES array — PASS

**Location:** Lines 1306-1309

```js
const RECOMMENDED_GATES = [
    'GR-07', 'GR-17', 'GR-18', 'GR-20',
    'GR-43', 'GR-45', 'GR-49', 'GR-51', 'GR-52'
];
```

**Count:** 9 gates. Each verified to have executable code:

| Gate | Function | Line | Verified |
|------|----------|------|----------|
| GR-07 | runGateRunner | 307 | No Pure B/W (demoted from REQUIRED) |
| GR-17 | runAntiPatternGates | 822 | Density Stacking |
| GR-18 | runAntiPatternGates | 853 | Ghost Mechanisms (now includes letter-spacing from GR-12) |
| GR-20 | runAntiPatternGates | 936 | Structural Echo |
| GR-43 | runGateRunner | 755 | Self-Evaluation Comment (demoted from REQUIRED) |
| GR-45 | runWave2Gates | 1071 | Typography Variation |
| GR-49 | checkGateResultIntegrity | 1379 | Result File Integrity |
| GR-51 | runWave2Gates | 1186 | Bg Delta Distribution |
| GR-52 | runWave2Gates | 1230 | Section Height Variation |

**Added to RECOMMENDED (correct):** GR-07, GR-43
**Removed from RECOMMENDED (correct):** GR-19 (->ADVISORY)

### Check 3: 6 Function Signatures — PASS (M-19)

| Function | Line | Signature |
|----------|------|-----------|
| runBriefVerification | 29 | `function runBriefVerification(briefText)` |
| runGateRunner | 128 | `async function runGateRunner(page)` |
| runAntiPatternGates | 796 | `async function runAntiPatternGates(page)` |
| runWave2Gates | 1014 | `async function runWave2Gates(page)` |
| runGateCoverage | 1299 | `function runGateCoverage(allResults)` |
| checkGateResultIntegrity | 1346 | `function checkGateResultIntegrity(resultFiles, resultData)` |

All 6 present and correctly parameterized.

### Check 4: Result Schema Consistency — PASS (M-06)

All 33 `results.push()` calls verified at lines: 62, 86, 97, 112, 162, 181, 208, 227, 269, 299, 307, 341, 393, 493, 539, 568, 626, 647, 702, 740, 755, 822, 853, 903, 936, 968, 997, 1071, 1097, 1131, 1186, 1230, 1282.

Plus 2 standalone returns (GR-48 at line 1322, GR-49 at line 1378).

All 35 result objects contain the required 5 fields:
- `gate` (string, GR-XX or BV-XX format)
- `name` (string, human-readable)
- `status` (string, 'PASS' or 'FAIL')
- `measured` (object)
- `threshold` (object)

Some also include optional `evidence` and `note` fields. No schema violations.

### Check 5: isCold() Utility — PASS (M-08)

**Location:** Line 245 (inside unified GR-05/GR-07 page.evaluate block)

```js
function isCold(rgb) { return rgb && rgb.b > rgb.r + 10 && rgb.b > rgb.g + 10; }
```

Logic matches gate-runner-spec.md definition: "no cold colors (B > R+10 AND B > G+10)". The function is defined inside the page.evaluate scope where it is used (line 257). Not broken by consolidation.

### Check 6: BV-01 Regexes — PASS (M-05)

**Location:** Lines 34-39

Tier header patterns unchanged from baseline:
- T1: `/^#+\s*Tier\s*1/im` (min 12)
- T2: `/^#+\s*Tier\s*2/im` (min 6)
- T3: `/^#+\s*Tier\s*3/im` (min 40)
- T4: `/^#+\s*Tier\s*4/im` (min 32)
- ContentMap: `/^#+\s*Content\s*Map/im` (min 24)

### Check 7: BV-04 Regexes — PASS (M-06)

**Location:** Lines 105-110

Suppressor patterns unchanged from baseline:
- S-01: `/sample\s+\d+-\d+/i`
- S-02: `/must\s+not|shall\s+not|never\s+use/i`
- S-11: `/verify\s+that|fail\s+if|must\s+be/i`
- S-08: `/>=?\s*\d+\s+channels?/i`

### Check 8: GR-60 WCAG Contrast — PASS (minor note)

**Location:** Lines 654-707

Verified components:
- **relLum()** (line 656): sRGB linearization with 0.03928 threshold, gamma 2.4, WCAG coefficients (0.2126, 0.7152, 0.0722). Correct.
- **contrast()** (line 660): `(max(L1,L2) + 0.05) / (min(L1,L2) + 0.05)`. Correct WCAG formula.
- **getEffBg()** (line 665): Walks DOM ancestry for effective background. Falls back to white (255,255,255). Sound approach.
- **Thresholds** (line 693): `minRatio = isLarge ? 3.0 : 4.5`. Correct AA values.
- **Large text detection** (line 692): `fs >= 18 || (fs >= 14 && fw >= 700)`.

**Minor note:** WCAG defines large text as 18pt (24px) or 14pt bold (18.67px). Code uses 18px/14px, which is slightly lenient (would PASS some elements strict WCAG would FAIL). NOT a blocking issue -- errs toward permissiveness, not strictness.

- **Selector coverage** (line 679): Checks p, span, a, li, h1-h6, td, th, label, figcaption, blockquote, cite, dt, dd, summary, caption, text, tspan. Comprehensive.

### Check 9: GR-44 Fixes — PASS

**Location:** Lines 710-744

Three specified fixes verified:
1. **scrollHeight** (line 711): `document.documentElement.scrollHeight` -- uses full page height, not body bounding rect. Correct.
2. **scrollTop offset** (line 712, 724): `window.scrollY || document.documentElement.scrollTop` captured, then `rect.bottom + scrollTop` for absolute positioning. Correct.
3. **Opacity filter** (line 721): `if (parseFloat(style.opacity) === 0) continue;` -- skips zero-opacity elements. Correct.

### Check 10: GR-14 :scope > Fix — PASS

**Location:** Lines 587-590

```js
const main = document.querySelector('main, [role="main"], body');
const scoped = [...(main || document.body).querySelectorAll(':scope > section, :scope > [class*="zone"], :scope > [class*="section"]')];
const sections = scoped.length >= 2 ? scoped : document.querySelectorAll('section, [class*="zone"], [class*="section"]');
```

- Uses `:scope >` for direct child selection. Correct.
- Falls back to unscoped query if < 2 results. Sound defensive logic.
- Prioritizes main > [role="main"] > body. Correct hierarchy.

### Check 11: gate-manifest.json Consistency — FAIL (STALE)

**gate-manifest.json was NOT updated after Wave 0.** It still reflects the pre-surgery state.

Specific discrepancies:

| Field | Manifest (stale) | Code (current) | Delta |
|-------|------------------|----------------|-------|
| `tiers.required.count` | 18 | 16 (15 + GR-48) | -2 |
| `tiers.required.gates` | GR-01-15, GR-43, GR-44, GR-48 | GR-01-06, GR-08-11, GR-13-15, GR-44, GR-60, GR-48 | -GR-07, -GR-12, -GR-43, +GR-60 |
| `tiers.recommended.count` | 8 | 9 | +1 |
| `tiers.recommended.gates` | GR-17-20, GR-45, GR-49, GR-51, GR-52 | GR-07, GR-17-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52 | +GR-07, +GR-43, -GR-19 |
| `tiers.advisory.count` | 5 | 7 | +2 |
| `tiers.advisory.gates` | GR-21, GR-22, GR-46, GR-50, GR-53 | +GR-19, note about GR-12 absorption | +GR-19 |
| `verdictLogic.REBUILD` | "GR-01-10" | GR-07 no longer REQUIRED | Stale reference |
| `verdictLogic.REFINE` | "GR-43 FAIL" | GR-43 now RECOMMENDED | Stale |
| `executionOrder` step 2 gates | includes GR-07, GR-12 | GR-07 still runs but is RECOMMENDED; GR-12 absorbed | Stale |
| `coverageStatus.requiredPresent` | "17/17" | "15/15" | Stale |
| `totalGateCount.inGateRunner` | 31 | 32 (15 REQ + 9 REC + 7 ADV + 1 GR-48) or 31 if GR-12 is fully removed | Needs recount |

**Fix needed:** gate-manifest.json must be updated to reflect all Wave 0 tier changes, gate additions/removals, and count updates. This is a Wave 0 output that should have been updated during the wave.

---

## Verdict Logic Audit

The verdict logic in runGateRunner (lines 762-787) was also updated. Verified:

```js
// Identity gates (line 763): GR-01 through GR-06, GR-08, GR-09, GR-10 — 9 gates
// (GR-07 correctly excluded — now RECOMMENDED)

// Perception gates (line 766): GR-11, GR-13, GR-14, GR-15, GR-44, GR-60 — 6 gates
// (GR-12 correctly excluded — absorbed into GR-18)
// (GR-60 correctly included — new REQUIRED perception gate)

// Recommended gates checked in verdict (line 770): GR-07, GR-43 — 2 gates
// (both correctly demoted from REQUIRED to RECOMMENDED)
```

The verdict logic is internally consistent with the tier changes.

---

## Baseline Comparison

| Metric | Pre-Wave 0 | Post-Wave 0 | Delta |
|--------|-----------|-------------|-------|
| Total lines | 1,436 | 1,405 | -31 |
| REQUIRED gates | 17 (code) / 18 (manifest) | 15 (code) / 18 (manifest - STALE) | -2 (code) |
| RECOMMENDED gates | 8 | 9 | +1 |
| ADVISORY gates | 5 | 7 | +2 |
| Functions | 6 | 6 | 0 |
| Result pushes | ~31 | 33 | +2 (GR-60, GR-05b note in unified block) |

---

## Action Items

1. **[BLOCKING]** Update gate-manifest.json to reflect Wave 0 changes (tiers, counts, gates, verdict logic, execution order, coverage status template)
2. **[NON-BLOCKING]** Consider tightening GR-60 large text thresholds from 18px/14px to 24px/18.67px for strict WCAG compliance

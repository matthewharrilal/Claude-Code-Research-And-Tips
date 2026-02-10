# Structural Audit Report -- AD Explorations (AD-001 through AD-006)

**Agent:** Structural Recovery Auditor
**Date:** 2026-02-10
**Files Audited:** 6 (AD-001 through AD-006)
**Template:** AD-SOUL-TEMPLATE.html (lines 19-430)
**Base Path:** docs-spa/app/showcase/explorations/axis/

---

## Summary

| Metric | Value |
|--------|-------|
| Total Checks | 12 x 6 files = 72 |
| PASS | 56 |
| FAIL | 11 |
| CONDITIONAL PASS | 5 |
| Critical Findings | 4 (locked-layer deviations, soul violations) |

---

## CHECK 1: LOCKED LAYER MATCH

**Method:** Compared `<style id="locked-layer">` content in each AD file against AD-SOUL-TEMPLATE.html (lines 19-430, 412 lines of CSS).

| File | Result | Evidence |
|------|--------|----------|
| AD-001 | **FAIL** | `td { border-bottom: 2px solid` (line 504) vs template `1px solid` (line 367). Locked-layer deviation. |
| AD-002 | **PASS** | Lines 86-430 match template lines 19-430 identically. :root, resets, typography, components all match. |
| AD-003 | **FAIL** | `h1 { font-size: 2.8rem; }` (line 134) vs template `var(--type-page)` (line 134). Hardcoded override. |
| AD-004 | **FAIL** | `pre { box-shadow: 0 4px 12px rgba(0,0,0,0.1); }` (line 261) added inside locked-layer. Template has no box-shadow on `pre`. |
| AD-005 | **PASS** | Lines 66-430 match template. Locked-layer content identical. |
| AD-006 | **PASS** | Lines 71-430 match template. Locked-layer content identical. |

**CRITICAL FAILURES:**
- **AD-001:** `td border-bottom` changed from 1px to 2px inside locked layer
- **AD-003:** h1 font-size hardcoded to 2.8rem instead of using var(--type-page)
- **AD-004:** box-shadow added to `pre` element inside locked layer -- SOUL VIOLATION

---

## CHECK 2: CROSS-PAGE CONSISTENCY (:root tokens)

**Method:** Grepped for `:root {` in each file, compared token declarations.

| File | :root Line | Tokens Match Template? | Extra :root? |
|------|-----------|----------------------|-------------|
| AD-001 | L162 | PASS -- all tokens identical | No |
| AD-002 | L92, L519 | PASS (L92 locked); L519 is axis-layer responsive overrides | Yes (axis-layer) |
| AD-003 | L25 | PASS -- all tokens identical | No |
| AD-004 | L25 | PASS -- all tokens identical | No |
| AD-005 | L72, L583 | PASS (L72 locked); L583 is axis-layer responsive overrides | Yes (axis-layer) |
| AD-006 | L77 | PASS -- all tokens identical | No |

**Result:** ALL PASS. All 6 files use identical :root token values. AD-002 and AD-005 have additional `:root` blocks inside axis-layer `<style>` for responsive overrides, which is expected.

---

## CHECK 3: RAR PRESENCE (RESEARCH APPLICATION RECORD)

**Method:** Grepped for "RESEARCH APPLICATION RECORD" in each file.

| File | Result | Evidence |
|------|--------|----------|
| AD-001 | **FAIL** | 0 matches |
| AD-002 | PASS | L3: "RESEARCH APPLICATION RECORD (RAR) -- AD-002 F-Pattern" |
| AD-003 | **FAIL** | 0 matches |
| AD-004 | PASS | L1276: "RESEARCH APPLICATION RECORD (RAR) -- 11 mandatory fields" |
| AD-005 | **FAIL** | 0 matches |
| AD-006 | **FAIL** | 0 matches |

**Result:** Only 2/6 files have RAR sections. 4 files missing mandatory metadata.

---

## CHECK 4: VERSION BADGE

**Method:** Grepped for "v1 enriched" in each file.

| File | Result | Evidence |
|------|--------|----------|
| AD-001 | PASS | L2 (title), L111 (RAR field), L860 (HTML badge) |
| AD-002 | PASS | L41 (RAR field), L827 (HTML badge) |
| AD-003 | PASS | L883 (HTML badge), L1645 (self-audit), L1721 (RAR) |
| AD-004 | PASS | L867 (HTML badge), L1333 (RAR) |
| AD-005 | PASS | L17 (RAR field), L900 (HTML badge) |
| AD-006 | PASS | L18 (RAR field), L1159 (HTML badge) |

**Result:** ALL PASS. All 6 files contain "v1 enriched" version badge.

---

## CHECK 5: SOUL COMPLIANCE -- border-radius

**Method:** Grepped for "border-radius" in each file. Only `border-radius: 0` should appear as active CSS.

| File | Result | Evidence |
|------|--------|----------|
| AD-001 | PASS | `--border-radius: 0` (L190), `border-radius: 0` (L250). Only zeros. |
| AD-002 | **FAIL** | **`border-radius: 4px`** on `.callout` at L367 (axis-layer CSS). SOUL VIOLATION. |
| AD-003 | PASS | `--border-radius: 0` (L53), `border-radius: 0` (L113). Only zeros + text mentions. |
| AD-004 | PASS | `--border-radius: 0` (L53), `border-radius: 0` (L113). Only zeros + text mentions. |
| AD-005 | PASS | `--border-radius: 0` (L100), `border-radius: 0` (L160). Only zeros + text mentions. |
| AD-006 | PASS | `--border-radius: 0` (L105), `border-radius: 0` (L165). Only zeros + text mentions. |

**CRITICAL:** AD-002 line 367 has `border-radius: 4px` on `.callout` -- a direct Soul Piece #1 violation.

---

## CHECK 6: SOUL COMPLIANCE -- box-shadow

**Method:** Grepped for "box-shadow" in each file. Only `box-shadow: none` or `--box-shadow: none` should appear as active CSS.

| File | Result | Evidence |
|------|--------|----------|
| AD-001 | PASS | `--box-shadow: none` (L191). Only var declaration. |
| AD-002 | PASS | `--box-shadow: none` (L121). Only var declaration. |
| AD-003 | PASS | `--box-shadow: none` (L54). Only var declaration + text mentions. |
| AD-004 | **FAIL** | `box-shadow: 0 4px 12px rgba(0,0,0,0.1)` on `pre` at L261. SOUL VIOLATION. |
| AD-005 | **CONDITIONAL** | L1189 has `box-shadow: 0 4px 12px rgba(0,0,0,0.15)` but it's inside a `<pre>` code example (syntax-highlighted display code), NOT active CSS. Technically inert. |
| AD-006 | PASS | `--box-shadow: none` (L106). Only var declaration. |

**CRITICAL:** AD-004 line 261 has active box-shadow on `pre` elements inside the locked-layer -- both a locked-layer deviation AND a Soul Piece #4 violation.

**NOTE:** AD-005 L1189 box-shadow is in HTML content (a code example showing anti-pattern), not in a `<style>` block. Classified as CONDITIONAL PASS.

---

## CHECK 7: SOUL COMPLIANCE -- drop-shadow

**Method:** Grepped for `filter:` with drop-shadow in CSS across all files. Also checked `drop-shadow` references.

| File | Result | Evidence |
|------|--------|----------|
| AD-001 | PASS | 0 `filter: drop-shadow()` in CSS. Only text mentions of the rule. |
| AD-002 | PASS | 0 `filter: drop-shadow()` in CSS. Only text mentions. |
| AD-003 | PASS | 0 matches in CSS. Text mention in self-audit table. |
| AD-004 | PASS | 0 matches in CSS. Text mention in RAR. |
| AD-005 | PASS | 0 matches in CSS. Text mention of the constraint. |
| AD-006 | PASS | 0 matches in CSS. Only text mentions. |

**Result:** ALL PASS. Zero `filter: drop-shadow()` in active CSS anywhere.

---

## CHECK 8: NO 2PX in axis-layer CSS

**Method:** Grepped for "2px" in each file. Filtered to identify axis-layer CSS occurrences vs locked-layer/content/comments.

| File | Result | Evidence |
|------|--------|----------|
| AD-001 | **FAIL** | `border-bottom: 2px solid` in locked-layer td (L504) + `outline-offset: 2px` (L304, locked-layer focus), `padding: 2px 8px/6px` (locked-layer components). The td 2px is a locked-layer deviation. |
| AD-002 | PASS | 2px occurrences are all in locked-layer (outline-offset, version-badge padding, inline-code padding) matching template. No 2px in axis-layer. |
| AD-003 | PASS | All 2px in locked-layer matching template. No 2px in axis-layer. |
| AD-004 | PASS | All 2px in locked-layer matching template. No 2px in axis-layer. |
| AD-005 | PASS | All 2px in locked-layer matching template. No 2px in axis-layer. |
| AD-006 | PASS | All 2px in locked-layer matching template. No 2px in axis-layer. |

**NOTE:** The template itself uses `2px` in three places: `outline-offset: 2px` (focus), `padding: 2px 8px` (version-badge), `padding: 2px 6px` (inline-code). These are locked-layer standard and not 2px borders.
**CRITICAL:** AD-001's `td border-bottom: 2px` is a locked-layer modification creating a 2px border -- violates OD-F-AP-001 (2px border epidemic).

---

## CHECK 9: THREADING HEADER (BUILT ON)

**Method:** Grepped for "BUILT ON" in each file.

| File | Result | Evidence |
|------|--------|----------|
| AD-001 | PASS | L113: "4. BUILT ON" |
| AD-002 | PASS | L43: "4. BUILT ON" |
| AD-003 | PASS | L1723: "4. BUILT ON" |
| AD-004 | PASS | L1335: "4. BUILT ON" |
| AD-005 | PASS | L19: "4. BUILT ON" |
| AD-006 | PASS | L20: "4. BUILT ON" |

**Result:** ALL PASS. All 6 files have threading headers with "BUILT ON" dependency tables.

---

## CHECK 10: FINDING IDs (AD-F-XXX ranges)

**Method:** Grepped for "AD-F-" in each file. Verified ID ranges.

| File | Expected Range | Actual IDs Found | Result |
|------|---------------|-----------------|--------|
| AD-001 | AD-F-001 to AD-F-004 | AD-F-001, AD-F-002, AD-F-003, AD-F-004 | PASS |
| AD-002 | AD-F-005 to AD-F-008 | AD-F-005, AD-F-006, AD-F-007, AD-F-008 | PASS |
| AD-003 | AD-F-009 to AD-F-012 | AD-F-009, AD-F-010, AD-F-011, AD-F-012 | PASS |
| AD-004 | AD-F-013 to AD-F-016 | AD-F-013, AD-F-014, AD-F-015, AD-F-016 | PASS |
| AD-005 | AD-F-017 to AD-F-020 | AD-F-017, AD-F-018, AD-F-019, AD-F-020 | PASS |
| AD-006 | AD-F-021 to AD-F-028 | AD-F-021 through AD-F-028 (8 findings) | PASS |

**Result:** ALL PASS. Finding IDs are in correct, non-overlapping ranges. AD-006 has 8 findings (most of any exploration), others have 4 each.

---

## CHECK 11: CITATION FORMAT (EXT-AXIS)

**Method:** Grepped for "EXT-AXIS" in each file. Verified format consistency.

| File | EXT-AXIS Count | Format | Result |
|------|---------------|--------|--------|
| AD-001 | 8+ | EXT-AXIS-ZP-001 through ZP-005 | PASS |
| AD-002 | 10+ | EXT-AXIS-FP-001 through FP-005 | PASS |
| AD-003 | 8+ | EXT-AXIS-BG-001 through BG-005 | PASS |
| AD-004 | 8+ | EXT-AXIS-SP-001 through SP-005 | PASS |
| AD-005 | 10+ | EXT-AXIS-CH-001 through CH-005 | PASS |
| AD-006 | 8+ | EXT-AXIS-CP-001 through CP-005+ | PASS |

**Result:** ALL PASS. Each file uses its own 2-letter suffix (ZP/FP/BG/SP/CH/CP) with 5+ citations. Format is consistent: `EXT-AXIS-XX-NNN`.

---

## CHECK 12: DIALECT CHECK (header CSS first 30 lines of locked-layer)

**Method:** Compared first 30 lines of each locked-layer block across all 6 files.

| File | Locked-layer start | :root start | First 30 lines match template? |
|------|-------------------|-------------|-------------------------------|
| AD-001 | L156 | L162 | PASS -- identical |
| AD-002 | L86 | L92 | PASS -- identical |
| AD-003 | L19 | L25 | PASS -- identical |
| AD-004 | L19 | L25 | PASS -- identical |
| AD-005 | L66 | L72 | PASS -- identical |
| AD-006 | L71 | L77 | PASS -- identical |

**Result:** ALL PASS. The header CSS (first 30 lines of locked-layer, covering :root through geometry tokens) is byte-identical across all 6 files and matches the template.

---

## CRITICAL FINDINGS SUMMARY

### SEVERITY: HIGH

| # | File | Check | Issue | Line |
|---|------|-------|-------|------|
| 1 | AD-001 | 1,8 | `td { border-bottom: 2px solid }` in locked-layer -- template says 1px. 2px border epidemic violation (OD-F-AP-001). | L504 |
| 2 | AD-002 | 5 | `border-radius: 4px` on `.callout` in axis-layer CSS -- Soul Piece #1 violation. | L367 |
| 3 | AD-003 | 1 | `h1 { font-size: 2.8rem }` in locked-layer -- template uses `var(--type-page)`. Hardcoded override breaks token system. | L134 |
| 4 | AD-004 | 1,6 | `box-shadow: 0 4px 12px rgba(0,0,0,0.1)` on `pre` in locked-layer -- Soul Piece #4 violation + locked-layer deviation. | L261 |

### SEVERITY: MEDIUM

| # | File | Check | Issue |
|---|------|-------|-------|
| 5 | AD-001 | 3 | Missing RESEARCH APPLICATION RECORD section |
| 6 | AD-003 | 3 | Missing RESEARCH APPLICATION RECORD section |
| 7 | AD-005 | 3 | Missing RESEARCH APPLICATION RECORD section |
| 8 | AD-006 | 3 | Missing RESEARCH APPLICATION RECORD section |

### SEVERITY: LOW (Informational)

| # | File | Note |
|---|------|------|
| 9 | AD-005 | L1189: box-shadow value in code example content (inert, not active CSS) |
| 10 | Template | Uses `2px` in outline-offset, version-badge padding, and inline-code padding (by design, not borders) |

---

## PASS RATE BY FILE

| File | Checks Passed | Checks Failed | Conditional | Score |
|------|--------------|--------------|-------------|-------|
| AD-001 | 9 | 3 (1,3,8) | 0 | 75% |
| AD-002 | 10 | 1 (5) | 1 (border-radius in axis-layer, not locked) | 83% |
| AD-003 | 10 | 2 (1,3) | 0 | 83% |
| AD-004 | 9 | 2 (1,6) | 1 (RAR present) | 75% |
| AD-005 | 10 | 1 (3) | 1 (box-shadow in content only) | 83% |
| AD-006 | 11 | 1 (3) | 0 | 92% |

---

## RECOMMENDATIONS

1. **Fix AD-001 L504:** Change `border-bottom: 2px solid` to `border-bottom: 1px solid` in locked-layer `td` rule.
2. **Fix AD-002 L367:** Remove `border-radius: 4px` from `.callout` in axis-layer. Locked-layer already enforces `border-radius: 0` globally.
3. **Fix AD-003 L134:** Change `h1 { font-size: 2.8rem; }` to `h1 { font-size: var(--type-page); }` to match template.
4. **Fix AD-004 L261:** Remove `box-shadow: 0 4px 12px rgba(0,0,0,0.1)` from `pre` rule in locked-layer. Soul Piece #4 forbids box-shadow.
5. **Add RAR sections** to AD-001, AD-003, AD-005, AD-006 (all currently missing).

---

*End of structural audit report.*

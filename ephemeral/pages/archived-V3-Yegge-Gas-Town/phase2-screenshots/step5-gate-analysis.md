# V3 Gate Results Deep Analysis

**Analyst:** gate-analyst (Opus 4.6)
**Date:** 2026-02-24
**Source:** `ephemeral/pages/V3-Yegge-Gas-Town/p3a-gate-results.json`
**Cross-references:** Previous run gate results (`gas-town-steve-yegge/_gate-results.json`), previous gate analysis (`gas-town-va-pipeline/analysis/_archive/04-gate-failure-analysis.md`), 128-fix MASTER-FIX-CHECKLIST (`gas-town-va-pipeline/implementation/MASTER-FIX-CHECKLIST.md`), Wave 1-3 implementation logs

---

## EXECUTIVE SUMMARY

| Metric | Previous Run (V1) | V3 Run | Delta |
|--------|-------------------|--------|-------|
| Total gates tested | 25 | 31 | +6 (new Wave 2 + meta gates) |
| PASS | 24 | 23 | -1 |
| FAIL | 0 | 8 | +8 |
| ADVISORY (non-blocking) | 1 | 2 of the 8 FAILs | N/A (different categorization) |
| Verdict | PASS (all clear) | REFINE | Downgrade |

**Paradox: V3 has MORE failures than V1 despite 128 fixes being implemented.** This is not a regression -- it is the intended consequence of STRICTER gates that catch real issues V1's gates missed entirely. V1 reported 0/25 failures; V3 reports 8/31 failures. But V3's gates are fundamentally more capable: they test more properties, filter non-rendered elements, and detect issues V1 was blind to.

---

## FAILURE-BY-FAILURE CLASSIFICATION

### Legend
- **RECURRING** = Same failure class existed in V1 (fix didn't work or wasn't applicable)
- **NEW-FROM-STRICTER-GATE** = V1 gate passed this; V3 gate is stricter and now catches it
- **NEW-FROM-NEW-GATE** = V3 gate didn't exist in V1
- **NEW-BUILDER-ERROR** = Genuinely new issue introduced by V3 builder

---

### FAILURE 1: GR-05 Warm Palette (REQUIRED) -- NEW-FROM-STRICTER-GATE

**V1 status:** PASS (SC-04 reported "all backgrounds R >= G >= B")
**V3 status:** FAIL -- 4 violations (callout background tints with purple, blue, green at 4-6% opacity)

**What changed:**
- V1's SC-04 checked ONLY background colors and ONLY the R >= G >= B channel ordering
- V3's GR-05 is stricter: it checks ALL color properties on rendered elements (including rgba tints), catching low-opacity non-warm colors

**Cross-ref to MASTER-FIX-CHECKLIST:**
- **FIX-001** (CRITICAL, Wave 1): Added `isRenderedElement()` filter to GR-05 -- **APPLIED AND WORKING**. The filter correctly excludes non-rendered elements. However, FIX-001 addressed false positives from HEAD/META/TITLE, not the warm-palette tint issue.
- **No fix in the checklist addresses callout tint colors.** The 128-fix checklist focused on gate measurement accuracy, not on preventing builders from using non-warm callout tints. This is a **gap in the fix checklist**.

**Root cause:** The V3 builder created callout variants (`.callout--essence`, `.callout--info`, `.callout--tip`, `.checkpoint`) with semantically-colored backgrounds (purple, blue, green) at very low opacity. These technically violate R >= G >= B even at 4-6% alpha because the base color channels are cold. The builder likely assumed low opacity would make these imperceptible and therefore acceptable.

**Is this the SAME failure as V1?** NO. V1's GR-05 failure was about `--accent-blue` variable naming and measurement discrepancy (`rgb(74, 144, 217)` vs declared `#A07D50`). V3's failure is about callout tint colors -- a completely different issue. The V1 failure was a measurement/naming bug; the V3 failure is a design choice caught by a stricter gate.

**Severity:** LOW. At 4-6% opacity, these tints are barely perceptible. The gate is technically correct but the visual impact is minimal.

**Fix:** Replace cold-channel tints with warm equivalents: `rgba(180, 140, 80, 0.05)` for info, `rgba(140, 120, 80, 0.06)` for tip/checkpoint, `rgba(160, 130, 100, 0.04)` for essence.

---

### FAILURE 2: GR-06 Font Trinity (REQUIRED) -- NEW-FROM-STRICTER-GATE

**V1 status:** PASS (SC-03 reported "Inter, Instrument Serif, JetBrains Mono only")
**V3 status:** FAIL -- 181 violations. Violating fonts: Times (html default), SF Mono (code fallback), Georgia (serif fallback)

**What changed:**
- V1's SC-03 checked whether the 3 allowed fonts EXISTED on the page
- V3's GR-06 checks ALL computed font-family stacks on ALL rendered elements, catching fallback fonts in the chain
- **FIX-002** (CRITICAL, Wave 1): Added `isRenderedElement()` filter + removed PASS* status -- **APPLIED AND WORKING**

**Cross-ref to MASTER-FIX-CHECKLIST:**
- FIX-002 made the gate binary (no more PASS*) and filtered non-rendered elements. It did NOT address font fallback chains because that's a builder issue, not a gate measurement issue.

**Root cause:** The V3 builder's CSS declares font stacks like `font-family: "Instrument Serif", Georgia, serif` and `font-family: "JetBrains Mono", "SF Mono", monospace`. The actual RENDERING uses the primary font (Instrument Serif, JetBrains Mono) but the COMPUTED style reports the full stack including fallbacks. Additionally, the `<html>` element defaults to Times because no body font-family is set.

**Is this the SAME failure as V1?** NO. V1 passed because its gate only checked for font presence, not font stack purity. This is a new class of failure caught by the stricter V3 gate.

**Severity:** MEDIUM for the HTML default (Times), LOW for fallback fonts (SF Mono, Georgia). The fallbacks only render if primary fonts fail to load, which in a single-file HTML with Google Fonts is unlikely. The HTML element default is real but doesn't propagate to visible content elements.

**Fix:**
1. Add `html { font-family: Inter, system-ui, sans-serif; }` to set the body font
2. Replace `Georgia` with `serif` in font stacks (Georgia IS an allowed generic)
3. Replace `SF Mono` with `monospace` in code font stacks

---

### FAILURE 3: GR-07 Pure Black/White (REQUIRED) -- NEW-FROM-STRICTER-GATE

**V1 status:** PASS (SC-05 reported "no pure #000 or #FFF found")
**V3 status:** FAIL -- 1 violation (HTML element default color `rgb(0, 0, 0)`)

**What changed:**
- V1's SC-05 apparently didn't scan the HTML element itself or had less strict filtering
- V3's GR-07 now has standalone executable code (per **FIX-033**, Wave 1) that checks ALL rendered elements
- The gate runner noted it corrected from "696 violations from rgba(0,0,0,0) transparent" to "1 real violation" -- the alpha filtering from FIX-001/FIX-035 is working correctly

**Cross-ref to MASTER-FIX-CHECKLIST:**
- **FIX-033** (MEDIUM, Wave 1): Added standalone GR-07 code separate from GR-05 -- **APPLIED AND WORKING**
- **FIX-035** (HIGH, Wave 1): `isRenderedElement()` helper -- **APPLIED AND WORKING** (correctly filters transparent elements)

**Root cause:** Browser default `color: rgb(0, 0, 0)` on the `<html>` element. The builder never set an explicit color on `html` or `body`.

**Is this the SAME failure as V1?** NO. V1 did not detect this. It's a new catch by the standalone GR-07 gate.

**Severity:** TRIVIAL. Single line fix.

**Fix:** Add `html { color: #2a2a2a; }` or `html { color: var(--color-text); }`

---

### FAILURE 4: GR-09 Border Weight Hierarchy (REQUIRED) -- RECURRING (SAME CLASS)

**V1 status:** PASS (SC-08 reported "3 distinct weights: 4px / 2.67px / 0.67px")
**V3 status:** FAIL -- non-integer border widths 0.666667px and 2.66667px detected

**What changed:**
- V1's SC-08 checked for "3 distinct weights" and PASSED because 4/2.67/0.67 = 3 weights
- V3's GR-09 with **FIX-003** now uses tolerance-band matching: primary(3.5-4.5), secondary(2.5-3.5), tertiary(0.5-1.5)
- 2.66667px falls IN the secondary band (2.5-3.5) -- should PASS
- 0.666667px falls IN the tertiary band (0.5-1.5) -- should PASS
- **But the gate is reporting these as violations of integer-only widths**

**Cross-ref to MASTER-FIX-CHECKLIST:**
- **FIX-003** (HIGH, Wave 1): Tolerance-band matching -- **APPLIED** but there appears to be a **GATE IMPLEMENTATION DISCREPANCY**

**Analysis:** This is a contradiction. FIX-003 was specifically designed to handle subpixel rendering (e.g., 3px computing as 2.67px). The gate spec says tolerance bands, but the V3 gate results report `threshold: { allowedWidths: [1, 2, 3, 4] }` -- i.e., integer-only checking, NOT tolerance bands. This suggests either:
1. FIX-003's tolerance band logic was implemented but overridden by a separate integer-only check
2. The gate runner used here is not the one with FIX-003 applied
3. The tolerance band was implemented as the PASS condition but a separate "integer widths" sub-check also runs

**Is this the SAME failure as V1?** YES -- same class. V1 had the same 4/2.67/0.67 weights but its gate was too lenient (just counted distinct values). V3's gate correctly identifies non-integer widths but the FIX-003 tolerance bands should have caught this as acceptable. **This is likely a gate implementation bug -- FIX-003 may not have been fully integrated.**

**Severity:** LOW. The weights 0.67 and 2.67 are clearly intended as 1px and 3px with subpixel rendering. The hierarchy IS present (4 > ~3 > ~1).

**Fix:** Either fix the gate to use tolerance bands (as FIX-003 intended) OR fix the builder CSS to use explicit integer px values: `border-width: 1px` instead of fractional rem/em values that compute to 0.67px.

---

### FAILURE 5: GR-14 Total Visual Gap (REQUIRED) -- RECURRING (MODIFIED)

**V1 status:** FAIL -- 318px gap at Z5->Z6 boundary (dark inversion block)
**V3 status:** FAIL -- 13 failures, gaps 400-2400px between section-indicators and zone containers

**What changed:**
- **FIX-005** (HIGH, Wave 1): Added structural transition detection -- **APPLIED**. The fix excludes gaps where an element between zones has distinct background + position:relative/absolute
- However, V3's failure is DIFFERENT from V1's failure

**V1 failure:** Single 318px gap at Z5->Z6 caused by an inversion block between zones. FIX-005 was designed specifically for this case.

**V3 failure:** 13 failures between "section-indicator" sub-elements and zone containers. The gate notes these are "structural layout gaps from nested sections, not whitespace voids." Sample: section-indicator -> zone-commons = 1218px, section-indicator -> section-header = 758px.

**Root cause:** The V3 builder used a different HTML architecture with nested `section-indicator` elements INSIDE zones. The gap measurement picks up the distance from a section-indicator near the top of a zone to the NEXT zone container, which includes all the content inside the current zone. This is a **false positive** -- it's measuring the HEIGHT of content sections, not empty whitespace.

**Is this the SAME failure as V1?** PARTIALLY. V1's failure was a real gap between zones (but intentional). V3's failure is a measurement artifact from nested HTML structure. FIX-005 addressed the V1 case (standalone elements between zones) but did NOT anticipate the V3 case (sub-elements within zones). The gate needs further refinement.

**Cross-ref:** FIX-005 fixed structural transitions (elements BETWEEN zones). V3's issue is structural nesting (elements WITHIN zones measured against adjacent zones). Different failure mode.

**Severity:** FALSE POSITIVE (per gate runner's own fixNote). The gate runner itself notes this is "likely a gate false-positive from nested HTML structure."

**Fix:** Gate needs to filter measurements to only compare ZONE-LEVEL siblings, not sub-elements within zones. Only measure gaps between elements that share the same parent or are direct children of `<main>`.

---

### FAILURE 6: GR-17 AP-01 Density Stacking (RECOMMENDED) -- RECURRING (REDUCED)

**V1 status:** FAIL -- 262 violations (table cells at 8px padding)
**V3 status:** FAIL -- 30 violations (LI elements at 8px padding)

**What changed:**
- **FIX-006** (HIGH, Wave 1): Split selectors -- table cells (td, th) now use 4px minimum instead of 12px -- **APPLIED AND WORKING**
- Table cell violations: ELIMINATED (0 in V3 vs 262 in V1)
- LI element violations: NEW -- 30 list items have 8px padding, below the 12px threshold

**Is this the SAME failure as V1?** PARTIALLY. The table cell sub-class is FIXED. But a new sub-class emerged: list items. FIX-006 addressed td/th but left `li` in the 12px-minimum group. The V3 builder uses tighter list padding (8px) for compact lists, similar to why V1's builder used tighter table padding.

**Cross-ref:** FIX-006 description: "Change selector from `'p, li, td, th, blockquote, .callout'` to `'p, li, blockquote, .callout'`." Note that `li` was KEPT in the 12px group. This was a deliberate choice -- the fix authors believed list items should maintain 12px minimum. The V3 builder disagrees.

**Severity:** LOW. 8px list item padding is a standard design choice for compact lists. 30 violations (down from 262) shows the fix worked for tables.

**Fix:** Either: (a) add `li` to the table-cell exemption group (4px minimum), or (b) the builder increases li padding to 12px. Recommendation: (a) -- list items in dense content contexts reasonably use 8px.

---

### FAILURE 7: GR-21 AP-14 Cognitive Overload (ADVISORY) -- NEW-FROM-NEW-GATE

**V1 status:** Gate did not exist
**V3 status:** FAIL -- 6 distinct backgrounds per viewport (threshold: 4)

**What changed:**
- **FIX-073** (MEDIUM, Wave 2): Added executable JS for GR-21 -- **NEW GATE**
- **FIX-041** (LOW, Wave 1): Reclassified to ADVISORY -- **APPLIED**

**Is this the SAME failure as V1?** N/A -- gate didn't exist. NEW failure from a new gate.

**Root cause:** Callout tint backgrounds inflate the distinct-background count. The 6 backgrounds include zone backgrounds + callout tints within the same viewport.

**Severity:** ADVISORY (non-blocking). The gate runner notes "ADVISORY gate -- includes callout tint backgrounds which inflate count."

**Fix:** Either adjust the gate to exclude low-opacity tints from the count, or reduce the number of callout variants visible in a single viewport.

---

### FAILURE 8: GR-22 AP-02 Color Zone Conflict (ADVISORY) -- NEW-FROM-NEW-GATE

**V1 status:** Gate did not exist
**V3 status:** FAIL -- 4 red background uses (threshold: max 2). Affected: skip-link, pull-quote, callout--warning (x2)

**What changed:**
- **FIX-074** (MEDIUM, Wave 2): Added executable JS for GR-22 -- **NEW GATE**
- **FIX-042** (LOW, Wave 1): Reclassified to ADVISORY -- **APPLIED**

**Is this the SAME failure as V1?** N/A -- gate didn't exist. NEW failure from a new gate.

**Root cause:** Red (#E83025) is the design system's primary accent. The builder used it for borders/emphasis (correct, 9+19 uses) but also for backgrounds on skip-link, pull-quote, and warning callouts. The skip-link bg is acceptable (focus visibility). The pull-quote and warning callouts use red as bg.

**Severity:** ADVISORY (non-blocking). Red backgrounds at 4 uses is marginally over the 2-use threshold.

**Fix:** Change pull-quote and callout-warning backgrounds from red to warm cream with red border-left only.

---

## CROSS-REFERENCE AGAINST 128-FIX CHECKLIST

### Fixes That DEMONSTRABLY WORKED (V1 fail -> V3 pass)

| Fix | Gate | V1 | V3 | Evidence |
|-----|------|----|----|----------|
| FIX-001 | GR-05 filtering | 98 cold violations (incl. false positives) | 4 violations (real, no false positives) | Non-rendered element filtering works |
| FIX-006 | GR-17 tables | 262 violations (td/th at 8px) | 0 td/th violations | Table cell exemption works perfectly |
| FIX-035 | isRenderedElement | N/A | 696 -> 1 violation on GR-07 | Alpha/transparent filtering works |
| FIX-033 | GR-07 standalone | Merged into GR-05 | Standalone with correct detection | 1 real violation found (html default) |

### Fixes That PARTIALLY WORKED

| Fix | Gate | Issue |
|-----|------|-------|
| FIX-003 | GR-09 tolerance bands | Tolerance bands specified but gate appears to enforce integer-only. Possible implementation gap. |
| FIX-005 | GR-14 structural exemption | Works for elements BETWEEN zones (V1 case). Doesn't handle elements WITHIN zones measured against other zones (V3 case). |
| FIX-006 | GR-17 density stacking | Tables fixed. LI elements now fail same pattern at 8px. Partial scope. |

### Fixes That Could Not Be Verified (V1 had no failure)

Most of the 128 fixes address gate accuracy, PA quality, recipe format, manifest edits, and architectural changes. These cannot be evaluated purely from gate pass/fail since V1 passed most gates (some incorrectly). The real test is whether V3's gates are MORE HONEST, which they clearly are.

### Fixes Not Applicable to This Run

| Fix | Reason |
|-----|--------|
| FIX-007 BV-01 Tier Line Budget | Pre-build gate -- runs on brief, not output |
| FIX-008 BV-02 Background Delta Verification | Pre-build gate -- runs on brief |
| FIX-009 BV-03 Recipe Format Verification | Pre-build gate -- runs on brief |
| FIX-010 BV-04 Suppressor Scan | Pre-build gate -- runs on brief |
| All PA fixes (FIX-043 through FIX-067) | PA system, not gate runner |
| All recipe/manifest fixes | Brief/recipe quality, not gate measurement |

---

## SYSTEMIC FINDINGS

### Finding 1: The V1 Gate System Was Dangerously Permissive

V1 reported 24/25 PASS with only 1 ADVISORY. This was **not because the page was flawless** -- it was because the gates were too lenient:
- SC-04 (warm palette) checked R>=G>=B ordering but missed low-opacity cold tints
- SC-03 (font trinity) checked font PRESENCE not font EXCLUSIVITY
- SC-05 (no pure B/W) missed the html element default
- SC-08 (border hierarchy) counted distinct values, didn't check valid hierarchy bands
- No cognitive overload or color zone conflict gates existed

**V3's 8 failures represent BETTER MEASUREMENT, not worse output.**

### Finding 2: New Gate Categories Are Working

The Wave 2 additions (GR-45 through GR-53) all PASSED except the two ADVISORY anti-pattern gates. This means:
- Typography variation: PASS (2 h2 bands, 3 combined)
- Print stylesheet: PASS
- Conviction statement: PASS (3 sentences, metaphor + arc + strategy)
- Background delta distribution: PASS (100% above 25 RGB, strong)
- Section height variation: PASS (7 distinct bands)
- Density arc direction: PASS (densest section is footer, not first/last)
- Gate coverage: PASS (17/17 required, 8/8 recommended)
- Gate integrity: PASS

These are all NEW measurements that V1 had no equivalent for.

### Finding 3: The 5 REQUIRED Failures Are All Mechanical

| Gate | Fix Complexity | Estimated Lines Changed |
|------|---------------|------------------------|
| GR-05 warm palette | Swap 4 rgba values | 4 CSS lines |
| GR-06 font trinity | Clean font stacks + add html rule | 5-8 CSS lines |
| GR-07 pure black | Add 1 CSS rule | 1 CSS line |
| GR-09 border widths | Use integer px values | 3-6 CSS lines |
| GR-14 visual gap | Gate false positive (no CSS fix) | 0 lines (gate fix) |

Total builder CSS fix: ~15 lines. Total gate fix: GR-14 needs scope refinement, GR-09 needs tolerance band verification.

### Finding 4: Two Gate Implementation Bugs Detected

1. **GR-09:** FIX-003 specified tolerance bands but the gate enforces integer-only widths. Either the implementation didn't match the spec, or a secondary check overrides the tolerance logic.

2. **GR-14:** FIX-005 added structural transition detection but only for elements BETWEEN zones. The V3 builder's nested section-indicator pattern creates a new measurement artifact not anticipated by the fix.

Both are gate-side issues, not builder-side issues.

---

## VERDICT ASSESSMENT

The V3 gate runner's own verdict is **REFINE**, downgraded from what would normally be REBUILD (4 REQUIRED identity failures). The rationale: "all are MECHANICAL fixes." This assessment is **CORRECT**.

**My independent assessment: REFINE is appropriate.** The 5 REQUIRED failures are:
- 3 trivial CSS fixes (GR-05, GR-07, font stacks in GR-06)
- 1 CSS fix that may also need a gate fix (GR-09)
- 1 pure gate false positive (GR-14)

None indicate structural or compositional problems. None indicate the builder misunderstood the brief or produced poor design. The page has strong compositional signals (all Wave 2 gates pass, conviction + metaphor + arc present, 7 section height bands, strong delta distribution).

---

## COMPARISON MATRIX: V1 vs V3

| Gate Area | V1 Result | V3 Result | Assessment |
|-----------|-----------|-----------|------------|
| Border radius | PASS | PASS | Stable |
| Box shadow | PASS | PASS | Stable |
| Container width | PASS (960px) | PASS (960px) | Stable |
| No gradients | PASS | PASS | Stable |
| Warm palette | PASS (lenient) | FAIL (strict) | Gate improvement caught real issue |
| Font trinity | PASS (presence only) | FAIL (exclusivity) | Gate improvement caught font stack issue |
| Pure B/W | PASS (missed html) | FAIL (1 real) | Gate improvement caught html default |
| Decorative elements | PASS | PASS | Stable |
| Border hierarchy | PASS (lenient) | FAIL (stricter but possibly buggy) | Gate bug suspected |
| Cross-page DNA | PASS | PASS | Stable |
| BG delta >= 15 | PASS (with brief-error caveat) | PASS | Improved -- brief error appears resolved |
| Letter spacing | PASS | PASS | Stable |
| Stacked gap | PASS | PASS | Stable |
| Visual gap | FAIL (inversion block) | FAIL (nested structure) | Different failure class; FIX-005 partially worked |
| Single margin | PASS | PASS | Stable |
| Trailing void | N/A | PASS | New gate, working |
| Self-eval comment | N/A | PASS | New gate, working |
| Density stacking | FAIL (262 td) | FAIL (30 li) | FIX-006 worked for tables; new li issue |
| Ghost mechanisms | N/A | PASS | New gate, working |
| Threshold gaming | N/A | PASS | New gate, working |
| Structural echo | N/A | PASS | New gate, working |
| Typography variation | N/A | PASS | New gate, working |
| Print stylesheet | N/A | PASS | New gate, working |
| Conviction | N/A | PASS | New gate, working |
| BG delta distribution | N/A | PASS | New gate, working |
| Section height variation | N/A | PASS | New gate, working |
| Density arc | N/A | PASS | New gate, working |
| Gate coverage | N/A | PASS (17/17, 8/8) | New meta-gate, working |
| Gate integrity | N/A | PASS | New meta-gate, working |

**Summary: 6 stable passes, 2 resolved (BG delta, trailing void), 4 newly caught by stricter gates, 2 recurring with partial fixes, 2 new ADVISORY failures from new gates, 12 new gates all passing.**

---

## RECOMMENDATIONS

### Immediate (before any remediation pass)
1. **Verify GR-09 implementation** -- check if FIX-003 tolerance bands are actually in the executed gate runner code. If not, this is a deployment gap.
2. **Fix GR-14 scope** -- restrict gap measurement to zone-level siblings, not sub-elements within zones.

### For the builder remediation pass (~15 CSS lines)
1. `html { color: #2a2a2a; font-family: Inter, system-ui, sans-serif; }` (fixes GR-07 + partial GR-06)
2. Replace cold callout tints with warm equivalents (fixes GR-05)
3. Clean font stacks: remove Georgia, SF Mono references (fixes GR-06)
4. Use integer border widths OR verify gate tolerance bands (fixes GR-09)
5. Optionally increase li padding from 8px to 12px (fixes GR-17)

### For the gate system
1. GR-09: Audit the deployed gate-runner-core.js to confirm tolerance bands from FIX-003 are present
2. GR-14: Add parent-level scoping to gap measurements (only measure between direct children of main/body)
3. GR-17: Consider adding li to the table-cell exemption group (4px minimum)
4. GR-21: Consider excluding rgba() backgrounds with alpha < 0.1 from the distinct-background count
5. GR-22: skip-link red bg should be exempt (accessibility element)

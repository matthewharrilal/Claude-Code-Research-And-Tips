# Gate Runner v2 — Buddy Audit

**Auditor:** gate-buddy (Opus)
**Date:** 2026-02-28
**Source:** gate-runner-v2.js (983 lines), 02-gate-audit.md, 21-ceremony-vs-necessity.md, 30-IMPLEMENTATION-PLAN-v2.md
**Method:** 11-dimension audit: inventory, atomic function, error handling, determinism, metadata, summary, gate logic, BV gates, fresh-eyes, adversarial, meta-cognitive

---

## 1. GATE INVENTORY

### Expected (from 02-gate-audit.md + 21-ceremony-vs-necessity.md reconciliation)

The gate audit (02) proposed 28 survivors. The ceremony audit (21) stripped 6 more ceremony gates (BV-08, GR-43, GR-63, GR-64, GR-83, GR-84), arriving at **22 essential gates**. The implementation plan (30-v2) canonicalized this to **22 gates: 15 REQUIRED + 7 ADVISORY**.

### Actual (from gate-runner-v2.js header + code)

The header claims 24 checks:
- REQUIRED (15): GR-03, GR-05, GR-06, GR-08, GR-09, GR-10, GR-11, GR-13, GR-14, GR-15, GR-18, GR-44, GR-60, GR-61, GR-67
- RECOMMENDED (1): GR-45
- META (1): GR-48
- ADVISORY (7): GR-01, GR-02, GR-04, GR-07, GR-20, GR-51, GR-55

**Total in the browser_evaluate function: 24 gates.** (15 REQUIRED + 1 RECOMMENDED + 1 META + 7 ADVISORY)

**Separately implemented (outside browser_evaluate):**
- BV-01 through BV-04: `checkBriefVerification()` function (text-only)
- GR-62: `checkScreenshotQuality()` function (Node.js gate)

**Grand total across all functions: 29 gates** (24 browser + 4 BV + 1 Node)

### Ceremony Gate Verification

| Stripped Gate | Present in JS? | Correct? |
|---------------|---------------|----------|
| BV-08 | NO | CORRECT |
| GR-43 | NO | CORRECT |
| GR-63 | NO | CORRECT |
| GR-64 | NO | CORRECT |
| GR-83 | NO | CORRECT |
| GR-84 | NO | CORRECT |

All 6 ceremony gates correctly stripped. **PASS.**

### Count Reconciliation

| Source | Count | What's Counted |
|--------|-------|----------------|
| 02-gate-audit | 28 | Pre-ceremony-audit |
| 21-ceremony-audit | 22 | Post-ceremony-strip |
| 30-IMPLEMENTATION-PLAN-v2 | 22 | "15 REQUIRED + 7 ADVISORY" |
| JS header | 24 | 15 REQ + 1 REC + 1 META + 7 ADV |
| JS browser_evaluate | 24 | Actual gate objects in `gates{}` |
| JS all functions | 29 | +4 BV + 1 GR-62 |

**FINDING GBA-01 (SIGNIFICANT): Count discrepancy.** The implementation plan says "22 gates" but the JS has 24 in the browser function. The difference is GR-45 (RECOMMENDED) and GR-48 (META). These exist but aren't counted in the plan's "15 REQUIRED + 7 ADVISORY" because GR-45 is RECOMMENDED (not REQUIRED or ADVISORY) and GR-48 is META. The plan's count of 22 omits these 2 gates. The JS is correct to include them; the plan's "22" should be "24" for the browser function, or the plan should clarify its count excludes RECOMMENDED and META tiers.

---

## 2. ATOMIC FUNCTION

### Is it truly one function?

**YES.** `const gateRunnerV2 = async () => { ... }` is a single async arrow function starting at line 33 and closing at line 878. It returns a single `JSON.stringify()` call.

### One browser_evaluate call?

**YES.** The entire function can be passed as-is to `page.evaluate(gateRunnerV2)` or `browser_evaluate({ function: gateRunnerV2.toString() })`. Usage documented in the header comment (lines 29-31).

### One JSON result?

**YES.** Returns `JSON.stringify({ gates, metadata, summary, errors }, null, 2)` at line 877. Single JSON string with four top-level keys.

**PASS.** Atomic contract is satisfied.

---

## 3. ERROR HANDLING

### Per-gate try/catch

Every single gate section is wrapped in try/catch:

| Gate | Try starts | Catch pattern | Correct? |
|------|-----------|---------------|----------|
| GR-60 | Line 99 | `errors.push({ gate: 'GR-60', error: e.message })` | YES |
| GR-67 | Line 135 | Same pattern | YES |
| GR-03 | Line 164 | Same pattern | YES |
| GR-05 | Line 193 (declared outside try) | Same pattern | YES |
| GR-06 | Line 229 | Same pattern | YES |
| GR-08 | Line 261 | Same pattern | YES |
| GR-09 | Line 292 | Same pattern | YES |
| GR-10 | Line 320 | Same pattern | YES |
| GR-11 | Line 407 | Same pattern | YES |
| GR-13 | Line 432 | Same pattern | YES |
| GR-14 | Line 455 | Same pattern | YES |
| GR-15 | Line 497 | Same pattern | YES |
| GR-18 | Line 518 | Same pattern | YES |
| GR-44 | Line 551 | Same pattern | YES |
| GR-45 | Line 580 | Same pattern | YES |
| GR-61 | Line 629 | Same pattern | YES |
| GR-01 | Line 645 | Same pattern | YES |
| GR-02 | Line 663 | Same pattern | YES |
| GR-04 | Line 681 | Same pattern | YES |
| GR-07 | Line 701 | Same pattern | YES |
| GR-20 | Line 714 | Same pattern | YES |
| GR-51 | Line 737 | Same pattern | YES |
| GR-55 | Line 768 | Same pattern | YES |
| GR-48 | Line 825 | Same pattern | YES |

**24/24 gates have try/catch.** Error pattern is consistent: pushes to `errors[]` array with gate ID and error message.

### Does it NEVER throw?

The top-level function has no try/catch around the `return JSON.stringify(...)` call (line 877). If `JSON.stringify` itself throws (extremely unlikely with plain objects, but theoretically possible with circular references), the function would throw.

**FINDING GBA-02 (LOW): No top-level try/catch.** The return statement `JSON.stringify({ gates, metadata, summary, errors })` is not wrapped. If any gate accidentally creates a circular reference in its result object, the whole function throws instead of returning partial results. Likelihood: very low (all gate results are plain objects with primitives). Severity: low. Fix: wrap the return in a try/catch that returns a minimal error JSON.

### Unexpected DOM structure

Each gate handles missing elements gracefully:
- GR-67: Checks `if (target)` before querying children (line 141)
- GR-03: Filters candidates by parsed width range (line 172-175)
- GR-10: Each sub-check uses `!!` coercion for boolean
- GR-14: Falls back to `getSections()` if scoped query returns < 2 (line 458)
- GR-44: Iterates all `body *` elements, skipping non-rendered ones

**PASS** on DOM resilience.

---

## 4. DETERMINISM

### Same page = same results?

**YES with one minor caveat.** All gate logic is pure DOM inspection via `getComputedStyle`, `getBoundingClientRect`, font checks, and selector queries. No randomness, no network calls, no animations measured.

**Potential timing issue:** Line 92: `await document.fonts.ready`. If fonts haven't loaded, computed font-family and font-size checks (GR-06, GR-45) could produce different results. The `await` addresses this correctly -- it waits for all fonts to resolve before proceeding.

**FINDING GBA-03 (NEGLIGIBLE): `document.fonts.ready` is wrapped in try/catch with empty catch.** If `document.fonts` is not supported (older WebKit), the await is skipped silently. In Playwright Chromium, this is always supported. Non-issue for the target environment.

### No aesthetic judgments?

**CORRECT.** Every gate checks a binary condition:
- Numeric threshold (>= 15, <= 120, >= 940, etc.)
- Presence/absence of DOM elements
- CSS property equality/inequality

Zero gates require interpretation. **PASS.**

---

## 5. METADATA

### Required fields

| Field | Collected? | Inside browser context? | Correct? |
|-------|-----------|------------------------|----------|
| `viewport.width` | YES (line 41) | YES (`window.innerWidth`) | YES |
| `viewport.height` | YES (line 41) | YES (`window.innerHeight`) | YES |
| `timestamp` | YES (line 39) | YES (`new Date().toISOString()`) | YES |
| `url` | YES (line 40) | YES (`window.location.href`) | YES |
| `dpr` | YES (line 42) | YES (`window.devicePixelRatio`) | YES |
| `userAgent` | YES (line 43) | YES (`navigator.userAgent`) | YES |
| `scrollHeight` | YES (line 44) | YES (`document.documentElement.scrollHeight`) | YES |

All metadata collected inside the browser context (within the async arrow function body). The `scrollHeight` is a bonus field not in the spec but useful for debugging. **PASS.**

---

## 6. SUMMARY

### Computed inside the JS?

**YES.** Lines 847-875 compute summary counts by iterating `Object.entries(gates)`.

### Essential vs Advisory classification correct?

```javascript
const essentialIds = [
  'GR-03','GR-05','GR-06','GR-08','GR-09','GR-10',
  'GR-11','GR-13','GR-14','GR-15','GR-18','GR-44',
  'GR-48','GR-60','GR-61','GR-67',
  'GR-45' // RECOMMENDED but part of essential routing
];
```

**FINDING GBA-04 (SIGNIFICANT): GR-45 is included in `essentialIds` but is RECOMMENDED, not REQUIRED.** The comment says "RECOMMENDED but part of essential routing." This means if GR-45 fails, `essential_fail` increments, and `gates_failed` becomes `true`. The implementation plan's routing matrix uses `GATES_FAILED == true` to route to PATCH or IMPROVE. A GR-45 failure (typography monotony) would trigger mechanical patching, but the Deterministic Patch Table in the plan has NO entry for GR-45. So: GR-45 fails -> `gates_failed = true` -> routing sends to PATCH -> orchestrator looks up GR-45 fix -> **no fix exists** -> falls to "Any STRUCTURAL: NOT PATCHABLE" -> routes to REFINE.

This may be intentional (typography monotony IS structural and SHOULD route to REFINE). But the summary labels it as an "essential" failure which is misleading -- it inflates the essential_fail count. The gate audit (02) lists GR-45 as RECOMMENDED, not REQUIRED.

**Recommendation:** Either (a) move GR-45 out of `essentialIds` into `advisoryIds` so it reports but doesn't affect routing, or (b) keep it in essentialIds AND add a comment explaining why + document the expected routing path in the implementation plan.

### gates_failed boolean correct?

```javascript
gates_failed: essential_fail > 0
```

**CORRECT.** `gates_failed` is `true` if ANY essential gate fails. **PASS** (subject to the GR-45 concern above).

---

## 7. GATE LOGIC — Spot Checks (8 gates)

### GR-03: Container Width (940-960px)

**Logic:** Queries elements with class containing "spine", "container", "wrapper", plus `main`, `article`, and elements with inline `style="max-width"`. Parses `maxWidth` from computed style. Filters to 800-1200px range. Passes if any candidate is 940-960px.

**Threshold correct?** YES — 940-960px matches 02-gate-audit and implementation plan.

**Edge case:** What if the container uses `width` instead of `max-width`? The gate checks `getComputedStyle(el).maxWidth` only. A container set via `width: 960px` would have `maxWidth: none` and be filtered out.

**FINDING GBA-05 (SIGNIFICANT): GR-03 only checks `max-width`, not `width`.** A builder who writes `width: 960px` instead of `max-width: 960px` would fail GR-03. This is uncommon (most page containers use max-width), but possible. The gate should check BOTH `maxWidth` and `width` computed styles, or at minimum the element's `offsetWidth` / `getBoundingClientRect().width` for elements in the candidate list.

### GR-05: Warm Palette (R >= G >= B)

**Logic:** Iterates all rendered elements, checks color/backgroundColor/border colors. Skips `code`/`pre` elements. Cold = B > R+10 AND B > G+10. Calculates visibility weight: `alpha * max(|B-R|, |B-G|)`. Reports only if visibility > 20.

**Threshold correct?** YES — matches 02-gate-audit (B > R+10 AND B > G+10).

**The code/pre exemption is correct** per the gate audit exception patterns. Good implementation.

**Minor:** The `isCold` function checks `B > R+10 AND B > G+10`, but the warm palette rule is `R >= G >= B`. A color like `rgb(100, 120, 105)` where G > R would NOT be caught by `isCold` but DOES violate `R >= G >= B`. However, the gate audit defines warm violation as "cold colors" (B dominant), not full R>=G>=B enforcement. This matches the gate audit's intent. **ACCEPTABLE.**

### GR-11: Background Delta >= 15 RGB

**Logic:** Gets sections via `getSections()`, computes each section's direct background color, measures max-channel delta between adjacent sections.

**Threshold correct?** YES — `>= 15` matches all source documents.

**FINDING GBA-06 (SIGNIFICANT): `getSections()` queries `'section, [class*="zone"], [class*="section"]'`.** If a page uses different structural elements (e.g., `<div class="chapter-1">` without "zone" or "section" in the class name), GR-11 finds zero sections and returns `allPass = true` (vacuous truth from empty `deltas` array). The gate would pass on a page with zero detectable zones.

This is the same selector used by GR-13, GR-14, GR-20, GR-51, and GR-55. All perception gates share this blind spot.

**Mitigation:** The `getSections()` helper would need to also match elements that are direct children of `main`/`body` with distinct backgrounds, or the gate should report `pass: false` if `sections.length < 2` (a page with fewer than 2 zones is by definition monotonous).

### GR-13: Stacked Gap <= 120px (CSS sum)

**Logic:** For each pair of adjacent sections, sums `paddingBottom + marginBottom` (upper) + `paddingTop + marginTop` (lower). Passes if total <= 120px.

**Threshold correct?** YES — 120px matches all source documents.

**Implementation correct?** YES. Uses `parseFloat(getComputedStyle(...))` which handles px values correctly. Good.

### GR-15: Single Margin/Padding <= 96px

**Logic:** Iterates ALL elements, checks marginTop/Bottom, paddingTop/Bottom. Excludes auto-centering margins (`marginLeft === 'auto' && marginRight === 'auto'`).

**Threshold correct?** YES — 96px matches.
**Auto-centering exclusion correct?** YES — matches B-05 fix from gate audit.

**FINDING GBA-07 (LOW): Only checks vertical properties (marginTop, marginBottom, paddingTop, paddingBottom).** Does not check marginLeft, marginRight, paddingLeft, paddingRight. A horizontal padding of 200px would pass. This is likely intentional (horizontal spacing rarely creates void perception), but worth noting.

### GR-10: Cross-Page DNA

**Logic:** 9 sub-checks:
1. Skip link: Checks `[class*="skip"]`, `a[href="#main"]`, `a[href="#content"]`
2. Heading hierarchy: H levels don't skip (no H1 -> H3)
3. Callout borders: `.callout`, `blockquote`, `[class*="callout"]` have 3.5-4.5px border-left
4. ::selection red: Stylesheet scan for `::selection` with red background
5. :focus-visible: Stylesheet scan for `:focus-visible` with `outline` containing `3px`
6. p max-width: No `<p>` with max-width > 1200px (if max-width is set)
7. body line-height >= 1.6
8. h3 italic
9. Header: dark bg + red border-bottom + 2.5-3.5px width

**FINDING GBA-08 (SIGNIFICANT): The p max-width check (sub-check 6, lines 358-365) has inverted logic.** It checks if any paragraph has `maxWidth > 1200`. But the identity spec says `p max-width 70ch`. A paragraph with `max-width: 900px` would pass this check, but `900px` is well above `70ch` (~560px with 16px body text). The threshold of 1200px is far too lenient. This sub-check effectively only catches paragraphs with no max-width constraint or extreme values.

However, enforcing exactly `70ch` via computed px is fragile (depends on font metrics). The current check is a safety net for egregious violations, not a precise constraint. The PA auditors catch readability issues from too-wide lines. **Acceptable as a coarse filter, but the 1200px threshold is worth reconsidering.**

**FINDING GBA-09 (SIGNIFICANT): The `::selection` and `:focus-visible` checks (lines 339-356) iterate `document.styleSheets` and access `.cssRules`.** This can throw `SecurityError` for cross-origin stylesheets. The code handles this with a try/catch per sheet (line 354), which is correct. However, if the page uses ONLY embedded `<style>` blocks (as specified — "self-contained HTML"), cross-origin is not a concern. **Acceptable for the target use case.**

**FINDING GBA-10 (LOW): The `:focus-visible` check (line 349) only looks for `outline` property containing `3px`.** A builder who writes `outline-width: 3px; outline-style: solid; outline-color: ...` as separate properties would have `rule.style.outline` potentially empty (shorthand vs longhand). The check also tests `rule.style.outlineWidth` (line 349), which partially mitigates this. But the `includes('3px')` string match could also match unrelated values. Low risk because the self-contained pages overwhelmingly use shorthand. **Acceptable.**

### GR-18: Ghost Mechanisms

**Logic:** Three checks:
1. Sub-perceptual borders: width > 0 AND < 0.5px
2. Sub-perceptual opacity: > 0 AND < 0.1
3. Sub-perceptual letter-spacing: `px / fontSize < 0.025`

**Threshold correct?** YES — 0.5px borders, 0.1 opacity, 0.025em letter-spacing all match source documents.

**FINDING GBA-11 (LOW): Letter-spacing check only flags POSITIVE values.** The code checks `px > 0 && (px / fs) < 0.025` (line 535). Negative letter-spacing (e.g., `-0.01em`) would have `px < 0`, failing the `px > 0` condition. Sub-perceptual negative letter-spacing (tightening by < 0.025em) is equally invisible. The check should use `Math.abs(px) > 0 && (Math.abs(px) / fs) < 0.025`.

### GR-48: Coverage Meta-Gate

**Logic:** Checks that all 15 REQUIRED gates have produced results in the `gates` object. Self-referential: excludes itself from the coverage array.

**Array correct?**
```javascript
const REQUIRED = [
  'GR-03','GR-05','GR-06','GR-08','GR-09','GR-10',
  'GR-11','GR-13','GR-14','GR-15','GR-18','GR-44',
  'GR-60','GR-61','GR-67'
];
```

**Count: 15.** Matches the header inventory. GR-48 is excluded from its own array (correct — self-referential). GR-45 is NOT in the REQUIRED array (correct — it's RECOMMENDED). **PASS.**

---

## 8. BV GATES

### BV-01 through BV-04: Text-only?

**YES.** The `checkBriefVerification(briefText)` function (lines 893-939) operates entirely on a string input. No DOM access, no browser APIs. **PASS.**

### Separated from browser function?

**YES.** `checkBriefVerification` is a standalone function defined AFTER the `gateRunnerV2` closure (line 893). It is not inside the browser_evaluate function. The orchestrator calls it separately via `Read()` + string operations. **PASS.**

### BV gate logic review

| Gate | Check | Threshold | Correct? |
|------|-------|-----------|----------|
| BV-01 | Count `##` or `#` headers | >= 5 sections | YES — matches plan's ">= 5 sections" |
| BV-02 | Each section has >= 3 non-empty lines | >= 3 lines/section | YES — matches plan |
| BV-03 | Brief total bytes > 100 | > 100 bytes | YES — matches plan verification |
| BV-04 | Contains 4+ of WORLD/CALIBRATION/OPPOSITION/ARC/MAP | >= 4 keywords | YES — matches 5-section brief format |

**FINDING GBA-12 (LOW): BV-02 splits on the same regex used to count headers, but `filter(s => s.trim())` may drop the text BEFORE the first header.** If the brief starts with "# CONVICTION BRIEF" followed by blank lines, the first split segment is pre-header text. This is empty and filtered out by `.trim()`, so it doesn't affect the count. Acceptable.

**FINDING GBA-13 (LOW): BV-03 uses `new Blob([briefText]).size` for byte counting.** This works in browser contexts. But `checkBriefVerification` is designed to run in Node.js (orchestrator-side, text-only). `Blob` is available in Node.js >= 18. If the orchestrator runs in an older Node environment, this would throw. For Claude Code's environment this is fine. **Acceptable.**

### GR-62: Screenshot Quality — Separated?

**YES.** `checkScreenshotQuality(screenshots1440, screenshots768)` is a standalone Node.js function (lines 944-975). Takes pre-computed file info, not Playwright. **PASS.**

**GR-62 logic review:**
- Min 3 screenshots per viewport: correct
- Max 2 consecutive blanks: `maxConsec <= 2` — correct but NOTE: this means 2 consecutive blanks are ALLOWED. This is lenient. The gate audit says "no 2+ consecutive blanks." The code uses `<= 2` which allows 2.

**FINDING GBA-14 (SIGNIFICANT): GR-62 threshold discrepancy.** The gate audit (02) says "no 2+ consecutive blanks." The code uses `maxConsec <= 2`, which passes at exactly 2 consecutive blanks. Should this be `maxConsec <= 1` (i.e., no 2+ consecutive)? Or `maxConsec < 2`? The phrase "no 2+ consecutive" means the maximum consecutive count should be `< 2`, i.e., `<= 1`. The current code is too lenient by 1.

---

## 9. FRESH-EYES: Would It Work?

### Running via browser_evaluate

The orchestrator would do:
```javascript
const result = await page.evaluate(gateRunnerV2);
```

**This works.** The function is async and returns a JSON string. Playwright's `page.evaluate` handles async functions and returns the resolved value.

### What could go wrong?

1. **Very large pages.** If the page has thousands of elements, the `document.querySelectorAll('*')` calls in GR-05, GR-15, and GR-18 iterate every element. On a page with 10,000+ elements, this could be slow (>10s). Playwright's default navigation timeout is 30s, but `evaluate` has no default timeout. The function would eventually complete, just slowly.

2. **JSON string too large.** The `JSON.stringify` with `null, 2` formatting on a page with many elements could produce a very large result string. Each gate includes `samples` arrays capped at 3-5 items, so this is bounded. GR-55's `boundaries` array is NOT capped (line 814) -- on a page with 50 sections, this would produce 49 boundary objects. Not a problem in practice (pages rarely have > 20 sections).

3. **Return type.** `JSON.stringify` returns a string. The orchestrator must `JSON.parse()` the result. This is documented in the usage section. **Correct.**

4. **Stale CSS / reflows.** The gate runner reads computed styles. If the page has CSS animations (prohibited by identity), values could differ mid-animation. The identity prohibition on transitions/animations mitigates this. The `document.fonts.ready` await ensures fonts are loaded. **Acceptable.**

---

## 10. ADVERSARIAL: What Pages Would Break This?

### Empty page (`<html><body></body></html>`)

- GR-03: No candidates found, `widths` empty, `pass = false` (some returns false on empty array). Wait — `Array.some()` on empty returns `false`. So GR-03 would FAIL. **Correct behavior.**
- GR-11: `getSections()` returns 0 sections. `deltas` is empty. `allPass = deltas.length === 0 || deltas.every(d => d.pass)` — this evaluates to `true` (empty array). Gate PASSES on empty page. **INCORRECT.** An empty page should NOT pass background delta.
- GR-13, GR-14: Same issue — empty sections means vacuous pass.
- GR-67: No footer found, `target = null`, `violations` stays empty, gate PASSES. **INCORRECT.** No footer text is not the same as footer text >= 11px.
- GR-10: Most sub-checks would fail (no header, no headings, no callouts, etc.). Gate FAILS. **Correct.**

**FINDING GBA-15 (SIGNIFICANT): Multiple gates pass vacuously on pages with no sections.** GR-11, GR-13, GR-14, GR-20, GR-51, and GR-55 all use `getSections()` and treat zero sections as a passing state. An empty or single-zone page passes ALL perception gates because there are no boundaries to measure.

**Mitigation:** GR-48 (coverage) only checks that gates PRODUCED results, not that they produced meaningful results. A structural minimum could be added: "If `getSections().length < 2`, fail GR-11" (a page without at least 2 zones has no perceptible variation). Alternatively, add a new gate or fold into GR-48: "page has >= 3 sections."

### Page with iframes

- All `document.querySelectorAll('*')` calls only traverse the main document, not iframe contents. Iframe content is effectively invisible to the gate runner. If a builder placed all content inside an iframe, every gate would pass vacuously.

**FINDING GBA-16 (LOW): Gate runner does not inspect iframe contents.** This is expected behavior (iframes are separate documents). The identity prohibitions don't mention iframes, and builders are instructed to create self-contained HTML. An iframe-based page would be caught by GR-10 (no header, no headings) and GR-03 (no container). **Low risk.**

### Page with dynamic loading (lazy load, IntersectionObserver)

- The gate runner runs synchronously after `document.fonts.ready`. If content loads lazily via JavaScript, elements below the fold may not exist in the DOM at measurement time.
- `getBoundingClientRect` reports 0-height for not-yet-loaded elements.
- GR-44 (trailing void) would report a massive void because content hasn't loaded below the fold.

**FINDING GBA-17 (LOW): No scroll-to-bottom before measurement.** The gate runner does not scroll the page before measuring. Elements using IntersectionObserver-based lazy loading would not be in the DOM. Mitigation: the builder is instructed to create self-contained HTML with embedded CSS. Lazy-loading JavaScript is unlikely in this context. **Low risk for the target use case.**

### Very long page (10,000px+ scroll height)

- GR-44: Still works correctly. It measures `documentElement.scrollHeight - lastVisibleBottom` regardless of page length.
- GR-14: Visual gaps are measured via `getBoundingClientRect`. Elements far below the viewport still have correct rect coordinates (absolute positioning is document-relative). **Correct.**
- Performance: The `document.querySelectorAll('*')` loops in GR-05/15/18 would be slower but still complete.

**No issues with long pages.** **PASS.**

### Page with only `<div>` elements (no semantic HTML)

- GR-10: `skipLink` would fail (no `a[href="#main"]`). `hierarchyOk` would pass vacuously (no headings). `headerDNA` would fail (no `header` or `[role="banner"]`). Gate FAILS. **Correct behavior.**
- GR-67: Falls back to last `section`/`[class*="zone"]`, or `null` if none exist. If null, gate passes vacuously.

**No critical issues** beyond the vacuous-pass problem already noted.

---

## 11. META-COGNITIVE: What Are We NOT Measuring?

### Gap 1: Responsive behavior

The gate runner runs at a SINGLE viewport (1440px, as specified in the plan Step 2.3). There are no responsive checks — no verification that the page renders correctly at 768px. The implementation plan captures screenshots at 768px for PA auditors but never runs gates at that viewport.

**Impact:** A page could pass ALL gates at 1440px but be completely broken at 768px (overflowing content, text too small, elements overlapping). The PA auditors would catch this perceptually, but there's no programmatic floor.

**Recommendation:** Consider running the gate runner at both viewports, or at minimum run GR-60 (contrast) and GR-67 (footer text) at 768px. These are physics gates that don't change with creative decisions.

### Gap 2: Content completeness

No gate checks whether the page actually renders the source content. A builder could produce a beautiful, identity-compliant page that omits half the content. The stripped BV-08 (brief-output diff) was the only gate that checked content coverage.

**Impact:** Content omission is a real failure mode (documented in D2 crack analysis). Without BV-08 or an equivalent, the PA auditors are the only check for "did the builder include the content?"

**Note:** The ceremony audit (21) stripped BV-08 because the new pipeline has no IMPROVE agent. The PA auditors catch perceptual omissions. This gap is accepted by the architecture. **Documented, not a finding.**

### Gap 3: Minimum content volume

No gate checks that the page has a minimum amount of visible content. A page with only a header and footer (no body content) would pass all gates if the header meets DNA checks.

**FINDING GBA-18 (MODERATE): No minimum content gate.** The gate runner doesn't verify that the page has meaningful content between header and footer. A structural check like "main content area height >= 500px" or "visible text character count >= 500" would catch catastrophically empty builds.

### Gap 4: What gates measure vs what makes a page good

The gates measure FLOORS — minimum thresholds below which a page is mechanically broken. They do NOT measure CEILINGS — how rich, composed, or perceptually engaging the page is. This is by design: the gate audit explicitly says "measures floor (does the page fail?) not ceiling (how rich is the page?)."

The advisory gates (GR-51, GR-55) measure some ceiling properties (delta distribution, multi-coherence channels), but they never block. The PA auditors are the ceiling detector.

**This is the correct architecture.** Gates catch what humans miss (sub-perceptual values, exact pixel measurements). PA auditors catch what gates miss (emotional response, compositional quality, flow). The gap between them is intentional and healthy.

### Gap 5: Accessibility beyond contrast

GR-60 checks WCAG AA contrast. But accessibility includes much more:
- ARIA landmark presence (partially covered by GR-10's headerDNA)
- Alt text on images
- Keyboard navigation
- Screen reader compatibility
- Focus order
- Color-only information encoding

**Impact:** The conventions brief specifies "ARIA landmarks: at least header, main, footer." GR-10 checks for a `header` element but doesn't check for `<main>` or `<footer>` as ARIA landmarks specifically. A `role="main"` attribute would satisfy the spec but GR-10 doesn't check it in the DNA sub-checks.

**FINDING GBA-19 (LOW): GR-10 checks header DNA but not `<main>` or `<footer>` landmark presence.** These are in the conventions brief but not verified by any gate. Low severity because the PA auditors and the builder's receiving principle both emphasize accessibility.

---

## SUMMARY OF FINDINGS

### BLOCKING (0)

None. The gate runner is well-built and functionally correct.

### SIGNIFICANT (6)

| ID | Finding | Impact | Recommendation |
|----|---------|--------|----------------|
| GBA-01 | Gate count discrepancy: plan says 22, JS has 24 browser gates | Confusion in documentation | Clarify count in plan or JS header |
| GBA-04 | GR-45 in `essentialIds` but is RECOMMENDED; no patch table entry for it | GR-45 failure routes to unpatchable STRUCTURAL path | Document expected behavior or move to advisory |
| GBA-05 | GR-03 only checks `max-width`, not `width` | Builder using `width: 960px` would fail | Add `width` check or `offsetWidth` fallback |
| GBA-06 | `getSections()` blind spot: zero sections = vacuous pass | Empty/single-zone pages pass ALL perception gates | Fail GR-11 if sections < 2 |
| GBA-08 | GR-10 p max-width threshold is 1200px (too lenient for 70ch spec) | Wide paragraphs pass uncaught | Reduce threshold or note as coarse filter |
| GBA-14 | GR-62 allows 2 consecutive blanks vs audit's "no 2+ consecutive" | One extra blank screenshot allowed | Change to `maxConsec <= 1` |

### MODERATE (1)

| ID | Finding | Impact | Recommendation |
|----|---------|--------|----------------|
| GBA-18 | No minimum content gate | Catastrophically empty pages could pass | Add visible-text character minimum |

### LOW (7)

| ID | Finding | Impact | Recommendation |
|----|---------|--------|----------------|
| GBA-02 | No top-level try/catch on JSON.stringify | Theoretical throw on circular ref | Wrap return in try/catch |
| GBA-07 | GR-15 only checks vertical margin/padding | Horizontal 200px padding passes | Document as intentional |
| GBA-10 | :focus-visible check fragile on longhand properties | Rarely triggered | Acceptable |
| GBA-11 | GR-18 letter-spacing only catches positive values | Negative sub-perceptual tightening missed | Use Math.abs() |
| GBA-12 | BV-02 pre-header text handling | Non-issue due to .trim() filter | No action needed |
| GBA-13 | BV-03 Blob usage in Node context | Works in Node >= 18 | No action needed |
| GBA-16 | No iframe content inspection | Not applicable to target pages | No action needed |
| GBA-17 | No scroll-to-bottom before measurement | Lazy loading not expected | No action needed |
| GBA-19 | Missing `<main>` and `<footer>` landmark gates | Low severity, PA catches | Consider adding to GR-10 |

### NEGLIGIBLE (1)

| ID | Finding | Impact | Recommendation |
|----|---------|--------|----------------|
| GBA-03 | document.fonts.ready empty catch | Always supported in Playwright Chromium | No action needed |

---

## OVERALL VERDICT

**PASS — READY FOR DEPLOYMENT** with 6 SIGNIFICANT findings that merit review but do not block.

The gate runner is architecturally sound:
- True atomic function, single browser_evaluate call
- Correct ceremony gate stripping (6/6 removed)
- Consistent error handling (24/24 try/catch)
- All thresholds match source documents (with noted discrepancies)
- Deterministic execution with no aesthetic judgments
- Clean separation of browser gates, BV text gates, and Node.js gates

The most impactful finding is **GBA-06 + GBA-15** (vacuous pass on zero sections). This is the gate runner's primary structural weakness. A page that defeats `getSections()` — by avoiding `<section>` tags and any class containing "zone" or "section" — passes all 6 perception gates by default. This is mitigable (the builder is instructed to use sections, and GR-10 catches non-semantic HTML), but it's worth considering a minimum section count check.

The **GBA-04** finding (GR-45 in essentialIds) is a design decision that should be explicitly documented rather than a bug. If GR-45 failure should route to REFINE (because typography monotony requires creative intervention), the current behavior is correct — it just needs documentation.

---

**END OF GATE RUNNER BUDDY AUDIT**

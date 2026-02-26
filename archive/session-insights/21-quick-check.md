# Middle-Tier Quick Check: 15-Item Gate (30-40 Minutes)

**Date:** 2026-02-15
**Author:** quick-check-creator (checklist-hardening team)
**Purpose:** Rapid pass/fail evaluation of Middle-tier pages before proceeding to full 138-item checklist

---

## PURPOSE STATEMENT

The Quick Check is a **30-40 minute gate evaluation** that identifies instant-fail conditions and core quality signals. It is NOT a full evaluation — it is a screening tool.

**Use this when:**
- You need rapid feedback on whether a page is worth full evaluation
- You want to catch the top 10 failure modes before investing 4-5 hours
- You're testing multiple variants and need to triage quickly

**Do NOT use this when:**
- You need comprehensive mechanism analysis
- You're producing a formal experiment verdict
- The page is borderline and needs detailed comparison

**Verdict logic:**
- **PASS all 15 items:** Proceed to full check only if you need detailed novelty analysis or comparative metrics
- **FAIL any Critical-10 item (items 1-10):** Experiment FAILS immediately. No need for full check.
- **FAIL any Threshold item (items 11-15):** Page is under-designed. Full check will likely yield PARTIAL or FAILURE.

---

## TIME MARKERS

Items are marked with time/complexity indicators:

- **⚡ Instant/Automated:** < 1 minute (regex or computed style check)
- **✓ Quick Binary:** 1-3 minutes (manual measurement with clear threshold)
- **🧠 Judgment:** 5-10 minutes (requires perceptual assessment with structured criteria)

**Estimated total time: 30-40 minutes**

---

## QUICK CHECK ITEMS (15)

### CRITICAL-10: Instant-Fail Gates

These items are NON-NEGOTIABLE. Failure on ANY ONE means the experiment FAILS. Do not proceed to full check.

| # | Item | Type | Pass Condition | Fail Condition | Why Instant-Fail |
|---|------|------|---------------|----------------|------------------|
| **1** | **Container width 940-960px** (B2.1) | ✓ | Computed max-width of main container at 1440px is 940-960px | max-width < 940px OR > 960px | THE #1 Phase D failure mode (4/5 pages violated). M3 makes this NON-NEGOTIABLE. |
| **2** | **border-radius: 0** (B7.1) | ⚡ | No element has border-radius > 0 | Any border-radius > 0 found | Soul constraint #1 (ABSOLUTE). Sharp edges define KortAI identity. |
| **3** | **box-shadow: none** (B7.2) | ⚡ | No element uses box-shadow | Any box-shadow found | Soul constraint #2 (ABSOLUTE). Flat surfaces only. |
| **4** | **No pure black (#000)** (B7.4) | ⚡ | No color value is #000000 or rgb(0,0,0) | Pure black found | Soul constraint. Darkest allowed is deep warm tone. |
| **5** | **No pure white (#FFF)** (B7.5) | ⚡ | No color value is #FFFFFF or rgb(255,255,255) | Pure white found | Soul constraint. Lightest allowed is warm cream. |
| **6** | **All 5 mechanism categories** (B3.6) | ✓ | At least 1 mechanism from EACH of: Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation | Any category has 0 mechanisms | THE core Middle-tier differentiator. Variant B deployed across only 2 categories. Full 5-category coverage is what defines Middle. |
| **7** | **Phases 1-3 skipped** (B1.2) | ✓ | Builder did NOT perform multi-axis questioning (Phase 1), tension derivation (Phase 2), or metaphor collapse (Phase 3) | Builder derived metaphor, performed tension analysis, or ran multi-axis questioning | Defines Middle-tier experiment validity. Running Phases 1-3 means builder is following Ceiling pipeline, not Middle. |
| **8** | **Always-load protocol** (B8.2) | ✓ | Builder read prohibitions.md (353 lines) AND tokens.css (174 lines) BEFORE any design work | Evidence builder started design without reading prohibitions.md and tokens.css | Track 1's Phase D instant fail was caused by skipping always-load. 527 lines mandatory overhead, zero exceptions. |
| **9** | **CPL 45-80** (B9.2) | ✓ | Body text characters per line at 1440px is 45-80 | CPL < 45 or > 80 | CPL > 80 is WCAG 2.1 accessibility violation. Non-negotiable. |
| **10** | **Body line-height >= 1.5** (B9.4) | ⚡ | Body text line-height is at least 1.5 | line-height < 1.5 | WCAG 2.1 SC 1.4.12 accessibility floor. Non-negotiable. |

**CRITICAL-10 VERDICT:**
- If ALL 10 items PASS → Continue to Threshold items
- If ANY 1 item FAILS → **EXPERIMENT FAILS.** Stop here. Page has instant-fail condition.

---

### THRESHOLD ITEMS: Core Quality Gates

These items test whether the page crosses the "designed vs formatted" threshold and performs better than Variant B. If these fail, the page is likely under-designed.

| # | Item | Type | Pass Condition | Fail Condition | Why This Matters |
|---|------|------|---------------|----------------|------------------|
| **11** | **PA-05 composite: Engagement threshold** (C4.5) | 🧠 | 4/4 sub-criteria PASS: **(a)** Non-default layout element count >= 2, **(b)** Padding range ratio >= 2.0x, **(c)** Visual hierarchy ID test, **(d)** Non-framework CSS ratio >= 15% | 0-1 sub-criteria PASS = NO | THE critical question operationalized. All 4 sub-criteria produce measurable data. If page scores 0-1/4, it could not produce 2+ measurable design indicators. Lookup-based mechanism deployment cannot produce engagement threshold without metaphor. |
| **12** | **Token compliance >= 80%** (B8.1) | ⚡ | At least 80% of CSS values reference tokens.css custom properties | Token compliance < 80% | All Track 2 Phase D variants achieved 97-100%. 80% is generous floor. Below this means builder is inventing values instead of using vocabulary. |
| **13** | **Mechanism count 7-12** (B4.1) | ✓ | Total unique mechanisms deployed is 7-12 | < 7 (Floor-tier) or > 12 (Ceiling-tier) | Middle natural landing is 8-10. Floor tier is 5 mechanisms. Middle MUST be > Floor (floor raised to 7). Below 7 = Floor behavior. Above 12 = Ceiling behavior. |
| **14** | **Better than Variant B: mechanism categories** (D1.2) | ✓ | Middle deploys across MORE categories than Variant B (Variant B = 2 categories confirmed) | Middle deploys across <= 2 categories | Variant B deployed across only 2 of 5 categories. If Middle also deploys across only 2, per-category minimum failed. This is the minimum bar for improvement. |
| **15** | **Better than Variant B: comparative verdict** (D2.2) | 🧠 | Clear improvement over Variant B with at least 2 specific observations | Marginal improvement, same quality, or worse than Variant B | Relative improvement over current pipeline output is minimum bar. If Middle isn't better than Variant B, modifications failed. Must be clear improvement, not marginal. |

**THRESHOLD VERDICT:**
- If ALL 5 items PASS → **Quick Check PASS.** Page likely succeeds full evaluation. Proceed to full check only if you need detailed novelty analysis or formal metrics.
- If ANY 1 item FAILS → Page is under-designed or no better than Variant B. Full check will likely yield PARTIAL or FAILURE. Consider stopping here or iterating on the page before full evaluation.

---

## COMPOSITE QUICK CHECK VERDICT

**Structure:**
1. Evaluate Critical-10 first (items 1-10)
2. If all PASS, evaluate Threshold items (items 11-15)
3. Produce verdict

**Possible outcomes:**

| Critical-10 | Threshold | Verdict | Next Step |
|-------------|-----------|---------|-----------|
| ALL PASS | ALL PASS | **QUICK PASS** | Proceed to full check only if borderline or need novelty analysis |
| ALL PASS | 1+ FAIL | **UNDER-DESIGNED** | Page is better than instant-fail but below Middle threshold. Full check will yield PARTIAL or FAILURE. |
| 1+ FAIL | N/A | **INSTANT FAIL** | Experiment FAILS. Do not proceed to full check. Page has soul violation, container width violation, or missing category coverage. |

---

## DETAILED MEASUREMENT INSTRUCTIONS

### Item 1: Container Width (B2.1)

**Measurement procedure (Playwright):**
```javascript
await page.setViewportSize({ width: 1440, height: 900 });
const containerWidth = await page.evaluate(() => {
  const main = document.querySelector('main, [role="main"], .container, #container');
  if (!main) return 0;
  return parseInt(window.getComputedStyle(main).maxWidth);
});

const PASS = containerWidth >= 940 && containerWidth <= 960;
```

**Manual measurement:**
Open page at 1440px viewport. Inspect main content container. Check computed max-width property. Must be 940-960px.

---

### Items 2-5, 10, 12: Soul + Token Compliance (Automated)

**Measurement procedure (regex on CSS file):**
- B7.1: Search CSS for `border-radius:\s*[^0]` → if found, FAIL
- B7.2: Search CSS for `box-shadow:` → if found, FAIL
- B7.4: Search CSS for `#000000|rgb\(0,\s*0,\s*0\)` → if found, FAIL
- B7.5: Search CSS for `#FFFFFF|rgb\(255,\s*255,\s*255\)` → if found, FAIL
- B9.4: Search CSS for body text line-height. Extract computed value. Must be >= 1.5.
- B8.1: Count `var(--` references vs total CSS value count. Ratio must be >= 0.80.

---

### Item 6: All 5 Mechanism Categories (B3.6)

**Measurement procedure:**
Read the page's CSS file. Identify which mechanisms from the catalog are deployed. For each of the 5 categories, check if at least 1 mechanism is present:

**Spatial (need 1+):** #5 Dense/Sparse Alternation, #6 Width Variation, #15 Bento Grid
**Hierarchy (need 1+):** #1 Border-Weight Gradient, #4 Spacing Compression, #11 Typographic Scale Jumping
**Component (need 1+):** #2 2-Zone Component DNA, #9 Confidence Encoding via Color, #10 Border-Left Semantic Signal, #17 Code Block
**Depth/Emphasis (need 1+):** #3 Solid Offset Depth, #7 Zone Background Differentiation, #16 Drop Cap
**Structure/Navigation (need 1+):** #8 Scroll Witness/Sticky TOC, #12 Progressive Disclosure, #13 Dark Header + 3px Border, #14 Footer Mirror, #18 Data Table

PASS if all 5 categories have at least 1 mechanism. FAIL if any category has 0.

---

### Item 7: Phases 1-3 Skipped (B1.2)

**Measurement procedure:**
Review builder's documentation. Check for evidence of:
- Multi-axis questioning (Phase 1): "What is the tension this content creates?" questions
- Tension derivation (Phase 2): Extraction of perceptual tensions
- Metaphor collapse (Phase 3): "This page is like..." metaphor statements

If ANY of the above are present, the builder ran Phases 1-3. FAIL.
If builder went directly to Phase 4.0 (Perceptual Guardrails) with a density pattern selected from the M5 lookup table, PASS.

---

### Item 8: Always-Load Protocol (B8.2)

**Measurement procedure:**
Check builder's documentation or build log. Look for evidence that prohibitions.md and tokens.css were read BEFORE any CSS was written.

PASS: Builder documentation states "Read prohibitions.md (353 lines) and tokens.css (174 lines) before beginning design work."
FAIL: Builder started writing CSS without documenting always-load, or documentation shows CSS written before always-load completed.

---

### Item 9: CPL 45-80 (B9.2)

**Measurement procedure (Playwright):**
```javascript
await page.setViewportSize({ width: 1440, height: 900 });
const cpl = await page.evaluate(() => {
  const bodyText = document.querySelector('p, .body-text');
  if (!bodyText) return 0;
  const style = window.getComputedStyle(bodyText);
  const fontSize = parseFloat(style.fontSize);
  const width = bodyText.offsetWidth;
  // Average English character width ~0.5em for proportional fonts
  return Math.floor(width / (fontSize * 0.5));
});

const PASS = cpl >= 45 && cpl <= 80;
```

**Manual measurement:**
Select a body text paragraph. Measure its width in px. Divide by average character width (~7-9px for 16px body text). Result should be 45-80 characters.

---

### Item 11: PA-05 Engagement Threshold (C4.5)

**This is the only judgment item in the Quick Check.** Evaluate 4 sub-criteria at 1440px:

**PA-05a: Non-default layout element count >= 2**
Count elements that require CUSTOM spatial logic (not achievable by applying a standard grid framework):
- Asymmetric multi-column layouts
- Bento grids with different spans
- Width-constrained blocks narrower than parent
- Full-bleed backgrounds behind constrained content
- Solid-offset depth elements (transform: translate)

PASS if count >= 2. FAIL if count < 2.

**PA-05b: Padding range ratio >= 2.0x**
Extract all major section vertical paddings. Calculate max/min ratio.
PASS if ratio >= 2.0 (e.g., 80px / 32px = 2.5x).
FAIL if ratio < 2.0 (e.g., 48px / 40px = 1.2x).

**PA-05c: Visual hierarchy identification test**
Take a 20px Gaussian-blurred screenshot of the page. Can you identify (1) the PRIMARY content zone and (2) a SECONDARY zone within 3 seconds without reading text?
PASS if both zones are identifiable.
FAIL if zones are indistinguishable (uniform gray rectangle).

**PA-05d: Non-framework CSS ratio >= 15%**
Count CSS declarations that are "compositional" (calc(), pseudo-elements, grid-template, transform, nth-child, semantic selectors) vs total declarations.
PASS if ratio >= 0.15 (15%).
FAIL if ratio < 0.15.

**PA-05 composite:**
- 4/4 sub-criteria PASS → PA-05 = YES → Item 11 PASS
- 2-3/4 sub-criteria PASS → PA-05 = MARGINAL → Item 11 FAIL (threshold not met)
- 0-1/4 sub-criteria PASS → PA-05 = NO → Item 11 FAIL

---

### Item 13: Mechanism Count 7-12 (B4.1)

**Measurement procedure:**
Count unique mechanisms deployed (identified in item 6). Total must be 7-12.
- < 7 → Floor-tier behavior → FAIL
- 7-12 → Middle-tier range → PASS
- > 12 → Ceiling-tier behavior → FAIL

---

### Item 14: Better than Variant B - Categories (D1.2)

**Measurement procedure:**
Variant B deployed across 2 of 5 mechanism categories (confirmed from Phase D analysis).
Middle page must deploy across MORE than 2 categories.

PASS: Middle deploys across 3+ categories (already verified by item 6 if that passes)
FAIL: Middle deploys across 0-2 categories

**Note:** If item 6 (All 5 categories) passes, this item automatically passes. This is a redundancy check.

---

### Item 15: Better than Variant B - Comparative Verdict (D2.2)

**Measurement procedure:**
Load Middle page alongside Variant B. Compare on 2+ dimensions:
- Spatial variety (grid/flex layout count)
- Density rhythm (section padding variation)
- Zone differentiation (background/border treatment)
- Mechanism category coverage (already checked in item 14)
- Overall impression (which feels more "designed"?)

Document at least 2 specific observations. Example:
"Middle has 3 grid layouts vs Variant B's 0. Middle has 80px/32px padding range (2.5x) vs Variant B's 64px/48px (1.3x)."

PASS: Clear improvement with 2+ observations.
FAIL: Marginal improvement ("slightly better spacing"), same quality, or worse.

---

## SELF-CONTAINED USAGE

This Quick Check is designed to be used WITHOUT reading the full 138-item checklist. All necessary context is provided here.

**To use:**
1. Open page at 1440px viewport
2. Run automated checks (items 2-5, 10, 12) via regex on CSS file (~5 min)
3. Measure container width (item 1) via browser inspector (~2 min)
4. Check mechanism categories (item 6) by reading CSS (~5 min)
5. Verify phases skipped (item 7) and always-load (item 8) from documentation (~3 min)
6. Measure CPL (item 9) manually or via Playwright (~2 min)
7. Evaluate PA-05 (item 11) with 4 sub-criteria (~10-15 min)
8. Count mechanisms (item 13) from item 6 data (~2 min)
9. Load Variant B and compare (items 14-15) (~5-10 min)

**Total: 30-40 minutes**

**If PASS:** Page has no instant-fail conditions and crosses engagement threshold. Likely to pass full evaluation. Proceed to full check if you need novelty analysis (D3.1-D3.3) or formal metrics (C1, C2).

**If FAIL on Critical-10:** Experiment FAILS. No need for full check.

**If FAIL on Threshold:** Page is under-designed or no better than Variant B. Full check will yield PARTIAL or FAILURE.

---

**END QUICK CHECK**

*15 items covering: 10 Critical instant-fail gates + 5 Threshold quality signals. Designed to catch 80% of issues in 30-40 minutes. For comprehensive evaluation, use the full 138-item checklist.*

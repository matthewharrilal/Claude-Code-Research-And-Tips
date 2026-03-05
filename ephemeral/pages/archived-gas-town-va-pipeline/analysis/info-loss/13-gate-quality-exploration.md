# Gate Quality and Improvement Exploration

**Agent:** gate-quality-researcher (Opus 4.6)
**Date:** 2026-02-24
**Sources:** artifact-gate-runner.md (1,379 lines, 42 gates), audit-gate-runner.md (compliance audit), 04-loss-mechanism-taxonomy.md (81 loss instances), 08-anti-loss-catalog.md (25 anti-loss mechanisms), 09-adversarial-review.md (prosecution), 10-fresh-eyes-gaps.md (5 collective gaps), artifact-pa-protocol.md (PA questions + deployment)
**Method:** Every gate audited individually against 5 dimensions; every loss instance cross-referenced for gate coverage; PA questions mapped to gate coverage

---

## TABLE OF CONTENTS

1. [Gate Effectiveness Audit (All 42 Gates)](#1-gate-effectiveness-audit)
2. [Missing Gates (Gaps)](#2-missing-gates)
3. [Gate Splitting Architecture](#3-gate-splitting-architecture)
4. [Gate-PA Synergy Analysis](#4-gate-pa-synergy-analysis)
5. [Structured vs Judgment Classification](#5-structured-vs-judgment-classification)
6. [Recommendations](#6-recommendations)

---

## 1. GATE EFFECTIVENESS AUDIT

### Methodology

Each of the 42 gates is evaluated on 5 dimensions:
- **Well-defined?** Clear, unambiguous pass/fail criteria
- **Executable?** Has working Playwright JavaScript in the artifact
- **Caught real defects?** Evidence from Gas Town execution
- **Evidence level:** FACT / PROVEN / OBSERVED / CONFOUNDED / THEORETICAL
- **Recommended tier:** REQUIRED / RECOMMENDED / ADVISORY / REMOVE

### 1A. IDENTITY GATES (GR-01 through GR-10)

| Gate | Well-Defined | Executable | Caught Defects | Evidence | Current Tier | Recommended Tier | Notes |
|------|-------------|------------|----------------|----------|-------------|-----------------|-------|
| GR-01 Border Radius Zero | YES | YES | No (all builds pass) | FACT | REQUIRED | REQUIRED | Clean gate. No issues. |
| GR-02 Box Shadow None | YES | YES | No (all builds pass) | FACT | REQUIRED | REQUIRED | Clean gate. No issues. |
| GR-03 Container Width | YES | YES | Yes (60% historical violation rate) | FACT | REQUIRED | REQUIRED | **HIGH VALUE.** Historically the most violated soul constraint. Gate JS correctly measures via `getBoundingClientRect` and `maxWidth`. |
| GR-04 No Gradients | YES | YES | No (all builds pass) | FACT | REQUIRED | REQUIRED | Clean gate. |
| GR-05 Warm Palette | PARTIAL | YES | YES (98 cold color violations, cold purple #7C3AED) | FACT | REQUIRED | REQUIRED | **DEFECTIVE CODE.** Checks `document.querySelectorAll('*')` including HEAD/META/TITLE, producing 18 false-positive pure-black detections. The `isCold()` function (B > R+10 AND B > G+10) is a reasonable heuristic but misses warm-tinted colds (e.g., a purple where B=200, R=120, G=58 passes because B > R+10 is true). Gate CAUGHT the real defect but with excessive noise. |
| GR-06 Font Trinity | PARTIAL | YES | YES (detected `times` on browser-default elements) | FACT | REQUIRED | REQUIRED | **DEFECTIVE CODE.** Same `querySelectorAll('*')` problem as GR-05. Result was marked PASS* (asterisk) -- a VIOLATION of the binary gate principle. Gate must either filter non-rendered elements or report FAIL honestly. |
| GR-07 No Pure B/W | YES (spec) / NO (code) | MERGED into GR-05 | YES (18 pure black detections, all false positive) | FACT | REQUIRED | REQUIRED | **NO STANDALONE CODE.** The artifact's textual spec defines GR-07 as a separate gate, but the executable JS merged it into GR-05's palette check. The fresh run renumbered this to "Header DNA" (actually part of GR-10). Gate ID confusion is severe. |
| GR-08 No Decorative Elements | PARTIAL | NO | NOT TESTED | OBSERVED | REQUIRED | RECOMMENDED | **NO EXECUTABLE CODE.** Specification says "Check for `<hr>` with decorative classes, empty `<div>` used as spacers, icon elements without functional purpose" -- this is semi-structured at best. What constitutes "decorative" vs "functional" is judgment. Gate was completely SKIPPED in the fresh run. |
| GR-09 Border Weight Hierarchy | PARTIAL | YES | NO (3 distinct weights detected but at 4.0/2.67/0.67, not 4/3/1) | FACT | REQUIRED | REQUIRED | **WEAK IMPLEMENTATION.** Spec says "must follow 4/3/1px hierarchy." JS checks only `weightValues.length >= 2`. This means ANY 2 border weights pass, even if they violate the hierarchy entirely. Measured weights (4.0/2.67/0.67px) are close to 4/3/1 due to subpixel rendering, but the code would also pass 1px/2px with no primary borders at all. |
| GR-10 Cross-Page DNA | PARTIAL | PARTIAL | YES (decomposed into 3 sub-gates in fresh run) | FACT | REQUIRED | REQUIRED | **DECOMPOSITION PROBLEM.** Artifact defines one gate checking ~30 DNA properties. Executable code splits this into: header DNA (GR-07 in run), typography (GR-09 in run), accessibility (GR-10 in run). MISSING sub-checks: callout 4px border, ::selection red, :focus-visible 3px, p max-width 70ch. Only ~40% of specified DNA properties are actually verified. |

**Identity Gate Summary:** 10 gates, 8 with executable code (1 merged), 2 with no code. Of the 8 executable, 5 have implementation defects (false-positive element selection, weak thresholds, decomposition gaps). Only GR-01 through GR-04 are "clean" gates with no issues.

---

### 1B. PERCEPTION GATES (GR-11 through GR-16)

| Gate | Well-Defined | Executable | Caught Defects | Evidence | Current Tier | Recommended Tier | Notes |
|------|-------------|------------|----------------|----------|-------------|-----------------|-------|
| GR-11 BG Delta >= 15 RGB | YES | YES | YES (Z2->Z3 delta 11, Z3->Z4 delta 8) | PROVEN | REQUIRED | REQUIRED | **HIGH VALUE.** The single most important perception gate. Caught the 2 CRITICAL losses (E-01, E-02) in Gas Town. Code correctly uses max single-channel delta. One concern: the zone selector (`section, [class*="zone"], [class*="section"]`) may miss zones using custom class names. |
| GR-12 Letter-Spacing >= 0.025em | YES | YES | No (Gas Town had no sub-perceptual letter-spacing) | PROVEN | REQUIRED | REQUIRED | Clean gate. Correctly converts px to em using element font-size. |
| GR-13 Stacked Gap <= 120px | YES | YES | No (max measured was 112px) | PROVEN | REQUIRED | REQUIRED | Clean gate. Measures CSS property sum at section boundaries. |
| GR-14 Total Visual Gap <= 150px | YES | YES | YES (318px at Z5->Z6, intentional dark inversion block) | OBSERVED | REQUIRED | REQUIRED | **STRUCTURAL MISMATCH.** Gate correctly detected a 318px visual gap. However, this was an INTENTIONAL design element (D-04 dark inversion block). The binary gate has NO exception mechanism for structural transition elements. This is SM-01 from the loss taxonomy: "Binary gates structurally cannot accommodate intentional deviation." |
| GR-15 Single Margin <= 96px | YES | YES | No (0 violations in Gas Town) | PROVEN | REQUIRED | REQUIRED | Clean gate. |
| GR-16 All CSS Perceptible | YES | YES | YES (meta-gate, failed because GR-11 and GR-14 failed) | PROVEN | REQUIRED | REQUIRED | Meta-gate aggregating GR-11-15. Not reported separately in fresh run (implied by sub-gate results). Low standalone value but useful as a summary signal. Consider REMOVING and replacing with the aggregation in the summary logic. |

**Perception Gate Summary:** 6 gates, all with executable code, 4 "clean" implementations. GR-11 is the highest-value gate in the entire system. GR-14 has the structural mismatch problem (cannot handle intentional large gaps). GR-16 is redundant (meta-gate of sub-gates already reported).

---

### 1C. ANTI-PATTERN GATES (GR-17 through GR-22)

| Gate | Well-Defined | Executable | Caught Defects | Evidence | Current Tier | Recommended Tier | Notes |
|------|-------------|------------|----------------|----------|-------------|-----------------|-------|
| GR-17 AP-01 Density Stacking | YES | YES | YES (262 violations -- table cells at 8px padding) | OBSERVED | RECOMMENDED | RECOMMENDED | **FALSE POSITIVE CONCERN.** The 262 violations are almost entirely `<td>` and `<th>` elements with 8px padding. The 12px minimum is reasonable for content elements (paragraphs, callouts) but UNREASONABLE for table cells where dense data presentation is intentional. Gate needs a table cell exemption. |
| GR-18 AP-09 Ghost Mechanisms | YES | YES | No (0 ghosts in Gas Town) | OBSERVED | RECOMMENDED | RECOMMENDED | Clean gate. Checks sub-perceptual borders (<0.5px) and opacity (0.01-0.1). |
| GR-19 AP-10 Threshold Gaming | PARTIAL | NO | NOT TESTED | OBSERVED | RECOMMENDED | ADVISORY | **NO EXECUTABLE CODE.** Specification describes detecting floor-hugging values (>50% of values within 10% of threshold). This is measurable but the 50% threshold is arbitrary. Was NOT executed in Gas Town. Given the DRIFT loss type identified in file 04, this gate is relevant but the detection logic needs work. |
| GR-20 AP-11 Structural Echo | YES | YES | No (maxConsecutive=1 in Gas Town) | OBSERVED | RECOMMENDED | RECOMMENDED | Clean gate. Checks for 3+ consecutive identical section signatures. |
| GR-21 AP-14 Cognitive Overload | PARTIAL | NO | NOT TESTED | THEORETICAL | RECOMMENDED | ADVISORY | **NO EXECUTABLE CODE.** Artifact itself notes "This gate is difficult to automate precisely." Counting "distinct visual channels" in a viewport requires defining what a "channel" is. Too subjective for a binary gate. |
| GR-22 AP-02 Color Zone Conflict | PARTIAL | NO | NOT TESTED | OBSERVED | RECOMMENDED | ADVISORY | **NO EXECUTABLE CODE.** Checking "semantically consistent color usage across zones" requires understanding what a color MEANS in context. E.g., is red as a heading accent in Z1 and red as a border in Z3 a "conflict"? This is fundamentally judgment-based. |

**Anti-Pattern Gate Summary:** 6 gates, 3 with executable code, 3 without. GR-17 has a significant false-positive problem (table cells). GR-19, GR-21, and GR-22 lack executable code and are difficult to automate. Of the 3 with code, only GR-18 and GR-20 are "clean."

---

### 1D. PRECONDITION GATES (GR-23 through GR-28)

| Gate | Well-Defined | Executable | Caught Defects | Evidence | Current Tier | Recommended Tier | Notes |
|------|-------------|------------|----------------|----------|-------------|-----------------|-------|
| GR-23 Builder = Opus | YES | NO | NOT TESTED (runs pre-build) | CONFOUNDED | ADVISORY | ADVISORY | Not automatable in Playwright (checks model ID). Confounded per council ruling. Keep as advisory. |
| GR-24 Content Heterogeneity | PARTIAL | NO | NOT TESTED | CONFOUNDED | ADVISORY | ADVISORY | Requires NLP analysis of Content Map output. Semi-automatable (could check for zone count, element type diversity). |
| GR-25 Suppressor Count | YES | NO | NOT TESTED | OBSERVED | ADVISORY | RECOMMENDED | **UNDERVALUED.** Could be automated: regex scan of brief text for known suppressor patterns ("sample 2-4", "verify/fail if", "must be"). High value if it works -- suppressor presence correlates with quality degradation (20 identified, ALL correlate). |
| GR-26 Brief Size Cap | YES | NO (trivially automatable) | NOT TESTED | OBSERVED | ADVISORY | RECOMMENDED | Simple line count. `brief.split('\n').length < 200`. Trivial to implement. High historical correlation (530+ line Flagship = 1.5/4, 100-line Middle = 4/4). |
| GR-27 Builder Gate-Free | YES | NO (automatable) | NOT TESTED | OBSERVED | ADVISORY | RECOMMENDED | Regex scan of builder input for gate-format language. High value -- gate visibility caused threshold gaming in Flagship. |
| GR-28 Recipe Format | PARTIAL | NO (semi-automatable) | NOT TESTED | OBSERVED | ADVISORY | RECOMMENDED | Could check for recipe indicators (Read/Select/Deploy/Assess verbs) and absence of compliance voice (Verify/Fail if/Must be). Recipe vs checklist is the single most validated format finding. |

**Precondition Gate Summary:** 6 gates, 0 with executable code. ALL are currently ADVISORY but GR-25 through GR-28 have strong evidence supporting elevation to RECOMMENDED. GR-25-28 are automatable with text processing (not Playwright DOM inspection). They run on PIPELINE ARTIFACTS, not the built HTML page, so they need a different execution context.

---

### 1E. VERDICT GATES (GR-29 through GR-32)

| Gate | Well-Defined | Executable | Caught Defects | Evidence | Current Tier | Recommended Tier | Notes |
|------|-------------|------------|----------------|----------|-------------|-----------------|-------|
| GR-29 Ship Threshold | YES | NO | NOT TESTED (PA-05 never reached 3.5) | THEORETICAL | ADVISORY | ADVISORY | Depends on PA verdict output. Not automatable in Playwright. |
| GR-30 Rebuild Threshold | YES | NO | NOT TESTED | OBSERVED | ADVISORY | ADVISORY | Same. The verdict logic IS implemented in the gate runner's summary code (line 1236: `if (identityFail > 0) verdict = 'REBUILD'`), but this is verdict LOGIC, not a standalone gate. |
| GR-31 Refine Threshold | YES | NO | Verdict was REFINE but should have been REBUILD per spec | OBSERVED | ADVISORY | ADVISORY | Same. |
| GR-32 Refine Agent Isolation | YES | NO | NOT TESTED | OBSERVED | ADVISORY | ADVISORY | Checks refine agent input. Not applicable until REFINE pathway is executed. |

**Verdict Gate Summary:** 4 gates, 0 with executable Playwright code. The verdict logic IS embedded in the gate runner function's summary section. These are not DOM inspection gates -- they are orchestrator decision rules. They should NOT be in the gate runner artifact. They belong in the orchestrator artifact.

---

### 1F. MODE DETECTION GATES (GR-33 through GR-35)

| Gate | Well-Defined | Executable | Caught Defects | Evidence | Current Tier | Recommended Tier | Notes |
|------|-------------|------------|----------------|----------|-------------|-----------------|-------|
| GR-33 CSS Naming Mode | PARTIAL | NO | NOT TESTED | OBSERVED | ADVISORY | ADVISORY | Counting position-based vs concept-based CSS custom properties is automatable but interpretation (what makes a name "concept-based"?) requires judgment. |
| GR-34 Component Modulation | YES | NO | NOT TESTED | OBSERVED | ADVISORY | ADVISORY | Comparing component styles across zones IS automatable in Playwright. Could measure padding/border/font-size variance of `.callout` elements across sections. Currently has no code. **CANDIDATE FOR CODE.** |
| GR-35 Layout Driver | NO | NO | NOT TESTED | OBSERVED | ADVISORY | REMOVE | Artifact states "NOT AUTOMATABLE -- requires PA auditor assessment." If it requires PA assessment, it is not a gate. It is a PA question. Already rerouted to PA per council. REMOVE from gate runner. |

**Mode Detection Summary:** 3 gates, 0 with code. GR-34 is the only one with reasonable automation potential. GR-35 should be removed (already rerouted to PA).

---

### 1G. EXPERIMENT GATES (GR-36 through GR-39)

| Gate | Well-Defined | Executable | Caught Defects | Evidence | Current Tier | Recommended Tier | Notes |
|------|-------------|------------|----------------|----------|-------------|-----------------|-------|
| GR-36 Stage 0 Smoke | YES | NO | N/A (experiment meta-gate) | THEORETICAL | ADVISORY | REMOVE from gate runner | These are experiment protocol gates, not build verification gates. They do not run on individual builds. They should be in an experiment protocol document, not the gate runner. |
| GR-37 Stage 1 Q20 | YES | NO | N/A | THEORETICAL | ADVISORY | REMOVE from gate runner | Same. |
| GR-38 Stage 2 H2H | YES | NO | N/A | THEORETICAL | ADVISORY | REMOVE from gate runner | Same. |
| GR-39 Stage 4 Flagship | YES | NO | N/A | THEORETICAL | ADVISORY | REMOVE from gate runner | Same. |

**Experiment Gate Summary:** 4 gates, all THEORETICAL, none executable, none applicable to individual builds. ALL should be removed from the gate runner and placed in a separate experiment protocol document.

---

### 1H. POLICY GATES (GR-40 through GR-42)

| Gate | Well-Defined | Executable | Caught Defects | Evidence | Current Tier | Recommended Tier | Notes |
|------|-------------|------------|----------------|----------|-------------|-----------------|-------|
| GR-40 Single-Pass Default | YES | NO | NOT TESTED | OBSERVED | ADVISORY | ADVISORY | Pipeline architecture check. Not a Playwright gate. Belongs in orchestrator. |
| GR-41 Rebuild Not Fix | YES | NO | NOT TESTED | OBSERVED | ADVISORY | ADVISORY | Process check. Not a Playwright gate. Belongs in orchestrator. |
| GR-42 Gates Hidden | YES | NO | NOT TESTED | OBSERVED | ADVISORY | ADVISORY | Overlaps with GR-27 (builder gate-free). Could be a single precondition check. |

**Policy Gate Summary:** 3 gates, 0 with code. All are process/architecture checks that belong in the orchestrator, not the gate runner.

---

### 1I. AGGREGATE EFFECTIVENESS SUMMARY

| Metric | Count |
|--------|-------|
| Total gates defined | 42 |
| Gates with executable Playwright JS | 19 (45%) |
| Gates that ran in Gas Town | 19 (45%) |
| Gates that caught REAL defects | 7 (GR-03 historically, GR-05, GR-06, GR-11, GR-14, GR-17, GR-20 boundary) |
| Gates with implementation defects | 6 (GR-05, GR-06, GR-07, GR-09, GR-10, GR-17) |
| Gates that are genuinely "clean" | 11 (GR-01-04, GR-11-13, GR-15, GR-18, GR-20, GR-12) |
| Gates that should be REMOVED from gate runner | 8 (GR-35, GR-36-39, GR-40-42 move to other docs) |
| Gates that belong in orchestrator | 7 (GR-29-32, GR-40-42) |
| Verdict: gate runner effective at its scope? | PARTIALLY -- catches ~26% of quality issues (per artifact L10) but implementation quality varies |

---

## 2. MISSING GATES (GAPS)

Cross-referencing the 81 loss instances from file 04, the 25 anti-loss mechanisms from file 08, the adversarial review (file 09), and the fresh-eyes analysis (file 10):

### 2A. Loss Instances with NO Gate Coverage

| Loss Instance | Type | Severity | Why No Gate Catches It | Proposed Gate |
|--------------|------|----------|----------------------|---------------|
| DR-01 through DR-07 (Background delta clustering) | DRIFT | HIGH | Gates check individual minimum (>=15), not DISTRIBUTION across zone boundaries | GR-43 |
| OM-14 (Builder self-evaluation incomplete -- trailing void) | OMISSION | HIGH | No gate checks for trailing whitespace voids (large empty areas at page end) | GR-44 |
| DR-02/DR-03 (H2/H3 size flattening to uniform values) | DRIFT | MEDIUM | No gate checks typography variation across zones | GR-45 |
| E-15 (GR-09 code weaker than spec text) | ESTIMATION | MEDIUM | Border hierarchy gate checks ">=2 weights" not "4/3/1 pattern" | FIX GR-09 |
| SM-02 (Browser defaults create false positives) | STRUCTURAL MISMATCH | MEDIUM | Element-scanning gates include HEAD/META/TITLE | FIX GR-05, GR-06 |
| OM-06 (Global p max-width 70ch absent) | OMISSION | MEDIUM | GR-10 code checks p max-width loosely (only flags if >800px) | FIX GR-10 |
| OM-02 (Print styling absent) | OMISSION | MEDIUM | No gate checks for @media print styles | GR-46 |
| C-06 (Tier 4 under-budgeted at 25/40 lines) | COMPRESSION | HIGH | No gate checks brief line budgets | GR-47 |
| D-05 (42 gates overwhelm orchestrator) | DILUTION | HIGH | No meta-gate verifies all gates actually ran | GR-48 |
| O-01 (Cold purple #7C3AED despite explicit prohibition) | OVERRIDE | HIGH | GR-05 caught it but signal was buried in 98 violations (mostly false positives) | FIX GR-05 |
| SM-08 (Two conflicting gate result files) | STRUCTURAL MISMATCH | HIGH | No gate runner versioning or result deduplication | GR-49 |
| E-09/E-10 (Spacing systematically ~50% of prescribed values) | ESTIMATION | MEDIUM | No gate checks spacing values against brief prescriptions | Not automatable (requires brief parsing) |
| OM-07 (Conviction statement not produced as separate file) | OMISSION | MEDIUM | No gate checks for conviction statement existence | GR-50 |

### 2B. Proposed New Gates

#### GR-43: Background Delta Distribution
- **What it checks:** Whether background deltas across zone boundaries show intentional VARIATION, not clustering near the 15 RGB minimum.
- **Pass/fail criteria:** At least 50% of zone boundary deltas must be >= 25 RGB, AND standard deviation of deltas must be >= 8 RGB. (If only 2 boundaries exist, at least 1 must be >= 25.)
- **Automatable?** YES -- fully in Playwright
- **Evidence:** OBSERVED (DR-01: Gas Town deltas clustered in 15-27 range when spec asks 15-50+; Flagship used 15 RGB EVERYWHERE)
- **Priority:** RECOMMENDED (not REQUIRED -- this is a quality signal, not an identity constraint)

```javascript
// GR-43: Background Delta Distribution
const deltaDistribution = await page.evaluate(() => {
  const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
  if (sections.length < 3) return { zones: sections.length, pass: true, reason: 'Too few zones for distribution check' };

  function parseRGB(str) {
    const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
    return null;
  }

  const backgrounds = [];
  sections.forEach(s => {
    const bg = getComputedStyle(s).backgroundColor;
    const rgb = parseRGB(bg);
    if (rgb) backgrounds.push(rgb);
  });

  const deltas = [];
  for (let i = 0; i < backgrounds.length - 1; i++) {
    const a = backgrounds[i], b = backgrounds[i + 1];
    deltas.push(Math.max(Math.abs(a.r - b.r), Math.abs(a.g - b.g), Math.abs(a.b - b.b)));
  }

  const above25 = deltas.filter(d => d >= 25).length;
  const pctAbove25 = above25 / deltas.length;
  const mean = deltas.reduce((a, b) => a + b, 0) / deltas.length;
  const stddev = Math.sqrt(deltas.reduce((sum, d) => sum + Math.pow(d - mean, 2), 0) / deltas.length);

  return {
    deltas,
    pctAbove25: (pctAbove25 * 100).toFixed(1) + '%',
    stddev: stddev.toFixed(1),
    pass: pctAbove25 >= 0.5 && stddev >= 8
  };
});
results.push({
  gate: 'GR-43', name: 'Background Delta Distribution',
  status: deltaDistribution.pass ? 'PASS' : 'FAIL',
  measured: deltaDistribution,
  threshold: { minPctAbove25: '50%', minStdDev: 8 }
});
```

---

#### GR-44: Trailing Whitespace Void Detection
- **What it checks:** Whether a large empty area exists at the bottom of the page (the trailing void that 9/9 PA auditors flagged as the dominant defect).
- **Pass/fail criteria:** The vertical distance from the last visible content element to the bottom of `<body>` must be <= 300px. "Visible content" excludes elements with `display:none`, `visibility:hidden`, or zero height.
- **Automatable?** YES -- fully in Playwright
- **Evidence:** OBSERVED (Gas Town had ~5 viewport-heights of trailing void; Flagship had similar voids). This is OM-14 + OM-15 from the loss taxonomy.
- **Priority:** REQUIRED (this was the #1 defect flagged by 9/9 PA auditors and was completely undetected by the gate system)

```javascript
// GR-44: Trailing Whitespace Void Detection
const trailingVoid = await page.evaluate(() => {
  const body = document.body;
  const bodyRect = body.getBoundingClientRect();
  const bodyBottom = bodyRect.bottom;

  // Find the last visible content element
  const allElements = [...document.querySelectorAll('body *')];
  let lastVisibleBottom = 0;

  for (const el of allElements) {
    const style = getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden') continue;
    const rect = el.getBoundingClientRect();
    if (rect.height === 0 || rect.width === 0) continue;
    // Skip script, style, meta-like elements
    if (['SCRIPT', 'STYLE', 'META', 'LINK', 'BR', 'HEAD'].includes(el.tagName)) continue;
    if (rect.bottom > lastVisibleBottom) {
      lastVisibleBottom = rect.bottom;
    }
  }

  const voidHeight = bodyBottom - lastVisibleBottom;
  return {
    bodyBottom: Math.round(bodyBottom),
    lastContentBottom: Math.round(lastVisibleBottom),
    voidHeight: Math.round(voidHeight),
    pass: voidHeight <= 300
  };
});
results.push({
  gate: 'GR-44', name: 'Trailing Whitespace Void',
  status: trailingVoid.pass ? 'PASS' : 'FAIL',
  measured: trailingVoid,
  threshold: { maxVoidHeight: '300px' }
});
```

---

#### GR-45: Typography Variation Across Zones
- **What it checks:** Whether heading sizes show intentional variation across zones (counters the DRIFT pattern DR-02/DR-03 where all H2s flatten to 28px and all H3s flatten to 20px).
- **Pass/fail criteria:** H2 elements must use at least 2 distinct computed font-sizes across the page. H3 elements must use at least 2 distinct computed font-sizes. (Distinct = differ by >= 2px.)
- **Automatable?** YES -- fully in Playwright
- **Evidence:** OBSERVED (Gas Town: all H2s at 28px, spec was 28-32px; all H3s at 20px, spec was 20-24px)
- **Priority:** RECOMMENDED

```javascript
// GR-45: Typography Variation Across Zones
const typoVariation = await page.evaluate(() => {
  function getDistinctSizes(selector) {
    const elements = document.querySelectorAll(selector);
    const sizes = [];
    elements.forEach(el => {
      const size = parseFloat(getComputedStyle(el).fontSize);
      sizes.push(Math.round(size));
    });
    // Distinct = differ by >= 2px
    const distinct = [];
    for (const s of sizes) {
      if (!distinct.some(d => Math.abs(d - s) < 2)) {
        distinct.push(s);
      }
    }
    return { sizes, distinct, count: elements.length };
  }

  const h2 = getDistinctSizes('h2');
  const h3 = getDistinctSizes('h3');

  const h2Pass = h2.count < 2 || h2.distinct.length >= 2;
  const h3Pass = h3.count < 2 || h3.distinct.length >= 2;

  return {
    h2: { distinctSizes: h2.distinct, totalElements: h2.count },
    h3: { distinctSizes: h3.distinct, totalElements: h3.count },
    pass: h2Pass && h3Pass
  };
});
results.push({
  gate: 'GR-45', name: 'Typography Variation',
  status: typoVariation.pass ? 'PASS' : 'FAIL',
  measured: typoVariation,
  threshold: { minDistinctH2Sizes: 2, minDistinctH3Sizes: 2, sizeThreshold: '2px difference' }
});
```

---

#### GR-46: Print Stylesheet Presence
- **What it checks:** Whether @media print styles exist.
- **Pass/fail criteria:** At least one `@media print` rule must exist in the document's stylesheets.
- **Automatable?** YES -- fully in Playwright
- **Evidence:** OBSERVED (OM-02: print styling completely absent from Gas Town build despite being specified in D-07)
- **Priority:** ADVISORY (low severity, easily added, but not a quality-blocking issue)

```javascript
// GR-46: Print Stylesheet Presence
const printCheck = await page.evaluate(() => {
  let hasPrint = false;
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (rule instanceof CSSMediaRule && rule.conditionText && rule.conditionText.includes('print')) {
          hasPrint = true;
          break;
        }
      }
    } catch (e) { /* cross-origin stylesheet */ }
    if (hasPrint) break;
  }
  return { hasPrint };
});
results.push({
  gate: 'GR-46', name: 'Print Stylesheet Presence',
  status: printCheck.hasPrint ? 'PASS' : 'FAIL',
  measured: printCheck,
  threshold: { required: 'At least one @media print rule' }
});
```

---

#### GR-47: Brief Line Budget Compliance
- **What it checks:** Whether each tier of the execution brief meets its line budget target.
- **Pass/fail criteria:** Tier 1 >= 12 lines. Tier 2 >= 6 lines. Tier 3 >= 40 lines. Tier 4 >= 32 lines (80% of 40-line target).
- **Automatable?** YES -- text parsing, not Playwright (runs on brief text, not HTML)
- **Evidence:** OBSERVED (C-06: Tier 4 at 25/40 lines = 62.5%, exactly the failure the template warned about)
- **Priority:** RECOMMENDED (runs pre-build, catches the Brief Assembler bottleneck)

```javascript
// GR-47: Brief Line Budget (runs on brief text, not Playwright)
// This would be executed by the orchestrator on the assembled brief text
function checkBriefBudget(briefText) {
  const lines = briefText.split('\n');
  const tiers = { t1: 0, t2: 0, t3: 0, t4: 0 };
  let currentTier = null;

  for (const line of lines) {
    if (line.match(/^##?\s*(Tier\s*1|IDENTITY)/i)) currentTier = 't1';
    else if (line.match(/^##?\s*(Tier\s*2|PERCEPTION)/i)) currentTier = 't2';
    else if (line.match(/^##?\s*(Tier\s*3|COMPOSITION)/i)) currentTier = 't3';
    else if (line.match(/^##?\s*(Tier\s*4|DISPOSITION)/i)) currentTier = 't4';
    if (currentTier && line.trim().length > 0) tiers[currentTier]++;
  }

  return {
    gate: 'GR-47', name: 'Brief Line Budget',
    status: (tiers.t1 >= 12 && tiers.t2 >= 6 && tiers.t3 >= 40 && tiers.t4 >= 32) ? 'PASS' : 'FAIL',
    measured: tiers,
    threshold: { t1: 12, t2: 6, t3: 40, t4: 32 }
  };
}
```

---

#### GR-48: Gate Coverage Completeness (Meta-Gate)
- **What it checks:** Whether all REQUIRED and RECOMMENDED gates actually produced results.
- **Pass/fail criteria:** All 16 REQUIRED gates (GR-01 through GR-16) must have a result. At least 4 of 6 RECOMMENDED gates (GR-17 through GR-22) must have a result. Any gate without a result is logged as SKIPPED.
- **Automatable?** YES -- simple counting of result objects
- **Evidence:** OBSERVED (D-05: 42 gates specified, only 19 executed in Gas Town = 45% coverage; OM-09: 24 gates not executed)
- **Priority:** REQUIRED (this is the "gate that gates the gates" -- without it, the system cannot know what was verified)

```javascript
// GR-48: Gate Coverage Completeness (runs after all other gates)
function checkGateCoverage(allResults) {
  const requiredGates = ['GR-01','GR-02','GR-03','GR-04','GR-05','GR-06','GR-07','GR-08','GR-09','GR-10',
                         'GR-11','GR-12','GR-13','GR-14','GR-15','GR-16'];
  const recommendedGates = ['GR-17','GR-18','GR-19','GR-20','GR-21','GR-22'];

  const reported = new Set(allResults.map(r => r.gate));

  const missingRequired = requiredGates.filter(g => !reported.has(g));
  const missingRecommended = recommendedGates.filter(g => !reported.has(g));
  const recommendedReported = recommendedGates.length - missingRecommended.length;

  return {
    gate: 'GR-48', name: 'Gate Coverage Completeness',
    status: (missingRequired.length === 0 && recommendedReported >= 4) ? 'PASS' : 'FAIL',
    measured: {
      requiredReported: requiredGates.length - missingRequired.length,
      requiredTotal: requiredGates.length,
      missingRequired,
      recommendedReported,
      recommendedTotal: recommendedGates.length,
      missingRecommended
    },
    threshold: { requiredCoverage: '100%', recommendedCoverage: '>=4/6' }
  };
}
```

---

#### GR-49: Gate Result File Integrity
- **What it checks:** Whether exactly ONE gate result file was produced with consistent gate IDs matching the artifact specification.
- **Pass/fail criteria:** Exactly 1 gate result file exists. All gate IDs in the file match the GR-XX naming scheme. No duplicate gate IDs. No gate ID renumbering from the artifact spec.
- **Automatable?** YES -- file system + text parsing
- **Evidence:** OBSERVED (SM-08: two conflicting gate result files with different naming schemes; Discrepancy #4: gate renumbering broke traceability)
- **Priority:** RECOMMENDED

This gate is a process check, not a Playwright gate. It runs in the orchestrator after gate execution.

---

#### GR-50: Conviction Statement Existence
- **What it checks:** Whether the builder produced a conviction statement as a separate deliverable before building.
- **Pass/fail criteria:** A file named `conviction.md` or `conviction-statement.md` (or similar) exists in the output directory AND contains at least 3 sentences covering metaphor, emotional arc, and compositional strategy.
- **Automatable?** PARTIALLY -- file existence is trivial; content quality requires NLP
- **Evidence:** OBSERVED (OM-07: conviction statement embedded as HTML comment instead of separate file; M-16 rated INEFFECTIVE because mechanism was not executed)
- **Priority:** ADVISORY

---

### 2C. Summary of New Gates

| Gate | What It Checks | Automatable | Priority | Addresses Loss |
|------|---------------|-------------|----------|----------------|
| GR-43 | BG delta distribution (not just minimum) | YES (Playwright) | RECOMMENDED | DR-01 (DRIFT) |
| GR-44 | Trailing whitespace void | YES (Playwright) | REQUIRED | OM-14, OM-15 |
| GR-45 | Typography variation across zones | YES (Playwright) | RECOMMENDED | DR-02, DR-03 (DRIFT) |
| GR-46 | Print stylesheet presence | YES (Playwright) | ADVISORY | OM-02 |
| GR-47 | Brief line budget compliance | YES (text parsing) | RECOMMENDED | C-06, GAP-01 |
| GR-48 | Gate coverage completeness | YES (counting) | REQUIRED | D-05, OM-09 |
| GR-49 | Gate result file integrity | YES (file system) | RECOMMENDED | SM-08 |
| GR-50 | Conviction statement existence | PARTIAL (NLP for content) | ADVISORY | OM-07, M-16 |

---

## 3. GATE SPLITTING ARCHITECTURE

### 3A. The Problem

The gate runner artifact is 1,379 lines. The orchestrator cannot absorb this in one pass (D-05 in the loss taxonomy: "42-gate spec overwhelms orchestrator"). In practice, only 19 of 42 gates were executed. The artifact mixes:
- Executable Playwright JavaScript (the operational core)
- Textual specifications (what gates SHOULD check)
- Traceability data (which source items each gate derives from)
- Council rulings and reclassification history
- Appendices with 67+ items of provenance data

These serve different audiences at different times. The builder never sees any of it. The orchestrator needs the JS code and the verdict logic. Auditors need the traceability. Nobody needs all 1,379 lines at once.

### 3B. Proposed Split: 4 Files + 1 Manifest

#### File 1: `gate-runner-core.js` (~250 lines)
**Audience:** Orchestrator (copy-paste into Playwright)
**Contents:**
- `runGateRunner(page)` function: GR-01 through GR-16 (identity + perception)
- `runAntiPatternGates(page)` function: GR-17 through GR-22
- `runNewGates(page)` function: GR-43 through GR-46 (new Playwright gates)
- Summary and verdict logic
- Filter for non-rendered elements (HEAD/META/TITLE excluded)

**Why a .js file:** The orchestrator copies this verbatim into a Playwright `page.evaluate()` call. Markdown formatting around JavaScript code is an extra parsing step that introduces errors. A raw .js file eliminates this friction.

#### File 2: `gate-runner-preconditions.md` (~80 lines)
**Audience:** Orchestrator (pre-build phase)
**Contents:**
- GR-23 through GR-28 (precondition checks)
- GR-47 (brief line budget)
- GR-50 (conviction statement existence)
- Text-based checks with regex patterns and pseudocode
- Threshold values

**Why separate:** These run BEFORE the builder, on pipeline artifacts (brief text, model ID), not on HTML. They use a different execution context (text parsing, not Playwright DOM inspection).

#### File 3: `gate-runner-spec.md` (~200 lines)
**Audience:** Pipeline designers, auditors, anyone reviewing gate quality
**Contents:**
- Full textual specification for all gates (GR-01 through GR-50)
- Pass/fail criteria in human-readable form
- Evidence level for each gate
- Tier classification (REQUIRED/RECOMMENDED/ADVISORY)
- Known limitations and false-positive patterns

**Why separate:** The specification is the AUTHORITATIVE document. The code implements the spec. If they disagree (as happened with GR-09: spec says "4/3/1 hierarchy" but code checks ">=2 weights"), the spec wins and the code must be fixed.

#### File 4: `gate-runner-provenance.md` (~300 lines)
**Audience:** Researchers, pipeline historians
**Contents:**
- Item-to-gate traceability (Appendix D from current artifact)
- Council rulings and reclassification history (Appendix B)
- Rerouted items (Appendix A)
- Gate-adjacent items (Appendix C)

**Why separate:** Provenance data is essential for auditing but never needed during gate execution. Loading 300 lines of provenance into the orchestrator's context is pure waste.

#### File 5: `gate-manifest.json` (~50 lines)
**Audience:** Orchestrator (the "table of contents" for the gate system)
**Contents:**

```json
{
  "version": "3.1",
  "date": "2026-02-24",
  "gates": {
    "required": {
      "identity": ["GR-01","GR-02","GR-03","GR-04","GR-05","GR-06","GR-07","GR-08","GR-09","GR-10"],
      "perception": ["GR-11","GR-12","GR-13","GR-14","GR-15","GR-16"],
      "coverage": ["GR-44","GR-48"]
    },
    "recommended": {
      "anti_pattern": ["GR-17","GR-18","GR-19","GR-20","GR-21","GR-22"],
      "distribution": ["GR-43","GR-45"],
      "precondition": ["GR-25","GR-26","GR-27","GR-28","GR-47"],
      "integrity": ["GR-49"]
    },
    "advisory": {
      "precondition": ["GR-23","GR-24"],
      "mode": ["GR-33","GR-34"],
      "misc": ["GR-46","GR-50"]
    }
  },
  "verdict_logic": {
    "rebuild": "ANY required identity FAIL OR 3+ recommended FAIL",
    "refine": "ANY required perception FAIL",
    "proceed": "ALL required PASS"
  },
  "files": {
    "playwright_code": "gate-runner-core.js",
    "precondition_checks": "gate-runner-preconditions.md",
    "specification": "gate-runner-spec.md",
    "provenance": "gate-runner-provenance.md"
  },
  "execution_order": [
    "1. Orchestrator runs precondition checks (gate-runner-preconditions.md) before builder spawn",
    "2. After build: orchestrator serves HTML, opens Playwright",
    "3. Execute gate-runner-core.js at 1440px viewport",
    "4. Re-run perception gates at 768px viewport",
    "5. Run GR-48 (coverage completeness) on all results",
    "6. Apply verdict logic",
    "7. Write single gate-results.json file"
  ]
}
```

### 3C. How the Orchestrator Knows All Gates Ran

1. The manifest lists all REQUIRED and RECOMMENDED gate IDs.
2. After gate execution, GR-48 (Gate Coverage Completeness) compares executed gate IDs against the manifest.
3. If GR-48 FAILS (missing REQUIRED gates), the verdict is automatically INCOMPLETE.
4. The gate results file is a SINGLE JSON file (not markdown, not multiple files) with a timestamp and build ID.
5. The orchestrator verifies the results file exists, has the correct gate count, and contains no duplicate IDs.

### 3D. Line Count Comparison

| | Current | Proposed |
|--|---------|----------|
| Total lines | 1,379 (1 file) | ~880 (5 files) |
| Lines the orchestrator must process | 1,379 | ~300 (manifest + core.js) |
| Lines for auditors | 1,379 (same file) | ~200 (spec only) |
| Lines for researchers | 1,379 (same file) | ~300 (provenance only) |

The split reduces what each audience must process by 70-80%.

---

## 4. GATE-PA SYNERGY ANALYSIS

### 4A. Quality Dimensions and Coverage

The PA protocol defines 65+ questions across multiple tiers. The gate runner defines 42 gates. These two systems are the verification layer of Pipeline v3. Here is where they overlap and where they leave gaps.

#### What Gates Catch That PA Misses

| Dimension | Gate | Why PA Misses It |
|-----------|------|-----------------|
| Pure black / pure white hex values | GR-05, GR-07 | PA auditors see screenshots, cannot distinguish #000000 from #1A1A1A |
| Exact container width (940-960px) | GR-03 | PA auditors see proportions, not pixel measurements |
| Sub-perceptual letter-spacing (0.001em) | GR-12 | Invisible to human eye -- that is the point |
| CSS property sum at boundaries (stacked gap) | GR-13 | PA sees the visual gap but cannot decompose it into contributing CSS properties |
| Font family violations (unauthorized fonts) | GR-06 | PA auditors cannot reliably distinguish Inter from Helvetica in screenshots |
| Box-shadow presence | GR-02 | Subtle box-shadows may be invisible in screenshots |
| Gradient detection | GR-04 | Very subtle gradients can appear as solid colors in screenshots |
| Ghost mechanisms (opacity 0.01-0.1) | GR-18 | Literally imperceptible to human viewers |
| Border-radius > 0 (soul constraint) | GR-01 | 1-2px border-radius may be invisible in screenshots |

**Key insight:** Gates excel at detecting BINARY COMPLIANCE violations that are sub-perceptual or require exact measurement. This is their proper domain.

#### What PA Catches That Gates Miss

| Dimension | PA Question(s) | Why Gates Miss It |
|-----------|---------------|------------------|
| "Does it look DESIGNED?" (overall gestalt) | PA-05 (all 4 sub-criteria) | Cannot be decomposed into binary CSS checks |
| Compositional coherence (one designer or many) | PA-05c.2 (Coherent) | Requires perceiving RELATIONSHIPS between elements, not individual properties |
| Breathing proportion (purposeful vs accidental space) | PA-05c.3c | Same physical gap can be "designed quiet" or "forgot to design" -- context-dependent |
| Design moment density | PA-60 | Requires perceiving UNIQUENESS, not measuring CSS values |
| Multi-voice composition | PA-61 | Requires perceiving INDEPENDENT RHYTHMS across visual channels |
| Transition variation | PA-62 | Requires perceiving whether dramatic transitions align with content importance |
| Fractal zoom coherence | PA-63 | Requires perceiving whether components ECHO the page's design language |
| Restraint as expression | PA-64 | Requires distinguishing "designed quiet" from "unfinished" |
| Metaphor spatial coverage | PA-68 | Requires perceiving whether the metaphor PERSISTS across scroll thirds |
| Content-form resonance | PA-05 sub-criteria | Form serving THIS content cannot be measured without understanding the content |
| Emotional arc | Tier 5 various | Requires perceiving emotional modulation across the page |

**Key insight:** PA excels at detecting COMPOSITIONAL QUALITY -- the gap between "passes rules" and "is good." This is the ~74% of quality that gates explicitly do not cover (artifact L10: "Gates catch mechanical defects (~26% of compositional quality)").

#### Where There IS Redundancy

| Dimension | Gate | PA Question | Verdict |
|-----------|------|-----------|---------|
| Background delta perceptibility | GR-11 (>=15 RGB) | PA-05c.3a/PA-62 (boundary perception) | BENEFICIAL redundancy. Gate catches sub-threshold deltas; PA catches deltas that technically pass but feel imperceptible in context. Keep both. |
| Whitespace voids | GR-14 (<=150px) + proposed GR-44 | PA-05c.3c (breathing proportion) | BENEFICIAL redundancy. Gate measures pixels; PA evaluates whether the void feels intentional. Keep both. |
| Structural echo / repetition | GR-20 (<3 consecutive) | PA-63 (component adaptation) | PARTIAL overlap. Gate catches identical sections; PA catches subtle sameness that differs in CSS but looks identical to the eye. Keep both. |
| Typography variation | Proposed GR-45 | PA-05c.1 (designed) | PARTIAL overlap. Gate checks distinct sizes exist; PA evaluates whether the variation feels intentional. Keep both. |

**Verdict on redundancy:** All cases of overlap are BENEFICIAL. The gate provides the binary measurement; the PA provides the perceptual judgment. Neither alone is sufficient. This is the dual-route pattern (M-08) working correctly.

#### Where NEITHER Catches It (Blind Spots)

| Blind Spot | Why Gates Miss It | Why PA Misses It | Risk Level |
|------------|------------------|-----------------|------------|
| **DRIFT -- value clustering near thresholds** | Gates check individual minimums, not distributions. (Addressed by proposed GR-43 and GR-45.) | PA auditors CAN perceive monotony but may not quantify it as "clustering near 15 RGB." PA-05c evaluates proportionality which partially covers this. | HIGH (largest unaddressed quality gap) |
| **Content Map interpretive accuracy** (Fresh-eyes GAP-1) | Gates never see the Content Map | PA auditors see only the final HTML, not the Content Map | MEDIUM (if Content Map misinterprets source, everything downstream is built on a flawed foundation) |
| **Information CREATION quality** (Fresh-eyes GAP-4) | Gates verify COMPLIANCE, not creativity | PA evaluates the OUTPUT, not the intermediate generative decisions | MEDIUM (mediocre brief contents faithfully propagated = mediocre page) |
| **DOM structure / semantic HTML quality** | Only GR-10 partially checks (accessibility landmarks, heading hierarchy) | PA auditors see screenshots, not DOM | LOW (does not affect visual quality, but affects accessibility and SEO) |
| **Responsive BEHAVIOR (breakpoint transitions)** | Gates re-run at 768px (if actually executed) but don't check the transition | PA auditors see static screenshots at 3 widths, not the animated transition | LOW (most readers are at one width, not resizing) |
| **Interaction states (hover, focus, active)** | Only GR-10 partially checks (:focus-visible) | PA auditors see static screenshots, not interactive states | LOW-MEDIUM (affects real user experience but rarely the first thing noticed) |
| **Performance (load time, paint events)** | No gate checks performance | PA auditors cannot perceive load time from screenshots | LOW (single-page HTML typically loads fast) |
| **CSS custom property naming quality** (GR-33 concept) | GR-33 exists but has no code | PA cannot see CSS source | LOW (affects maintainability, not visual quality) |

**The critical blind spots are DRIFT and Information Creation Quality.** GR-43 and GR-45 address DRIFT. Information creation quality requires a different approach entirely (Brief Assembler verification gate, which is not a Playwright gate but an orchestrator check).

---

## 5. STRUCTURED VS JUDGMENT CLASSIFICATION

### Classification Framework

| Category | Definition | Example |
|----------|-----------|---------|
| FULLY STRUCTURED | Pure DOM/CSS measurement, zero LLM needed. Can be expressed as a deterministic function: f(DOM) -> boolean | "Is border-radius 0 on all elements?" |
| SEMI-STRUCTURED | Could be automated with heuristics but edge cases require judgment. A heuristic function covers 80-95% of cases. | "Are border weights hierarchical?" (what about 2.67px vs 3px -- is that a match?) |
| JUDGMENT-REQUIRED | Fundamentally needs human/LLM perception. No CSS measurement can replace the assessment. | "Does the page look DESIGNED?" |

### Per-Gate Classification

| Gate | Classification | Rationale |
|------|---------------|-----------|
| **GR-01** Border Radius Zero | FULLY STRUCTURED | `getComputedStyle(el).borderRadius === '0px'` -- zero ambiguity |
| **GR-02** Box Shadow None | FULLY STRUCTURED | `getComputedStyle(el).boxShadow === 'none'` -- zero ambiguity |
| **GR-03** Container Width | FULLY STRUCTURED | `getBoundingClientRect().width` >= 940 && <= 960 -- zero ambiguity |
| **GR-04** No Gradients | FULLY STRUCTURED | `backgroundImage.includes('gradient')` -- zero ambiguity |
| **GR-05** Warm Palette | SEMI-STRUCTURED | The `isCold()` heuristic (B > R+10 AND B > G+10) catches most cold colors but misses edge cases. What about `rgb(200, 180, 190)` -- warm pink or cold purple? The heuristic says warm (B=190 < R+10=210), but a designer might disagree. Also: the 18 false positives from browser defaults show the element selection heuristic is incomplete. |
| **GR-06** Font Trinity | SEMI-STRUCTURED | Font detection via `getComputedStyle(el).fontFamily` is reliable, but "system fallbacks" are a judgment area. Is `ui-sans-serif` an acceptable fallback? The allowed list includes it, but what about `-apple-system-body`? |
| **GR-07** No Pure B/W | FULLY STRUCTURED | Exact hex comparison: rgb(0,0,0) or rgb(255,255,255). Zero ambiguity. |
| **GR-08** No Decorative Elements | JUDGMENT-REQUIRED | "Decorative" vs "functional" is inherently subjective. Is an `<hr>` between sections decorative (visual divider) or functional (semantic section break)? Is a background color block decorative or structural? |
| **GR-09** Border Weight Hierarchy | SEMI-STRUCTURED | Spec says 4/3/1px. Code checks >=2 distinct weights. Subpixel rendering means "3px" may compute as 2.67px. The hierarchy concept (primary/secondary/tertiary) maps to specific pixel values, but tolerance bands are needed. |
| **GR-10** Cross-Page DNA | SEMI-STRUCTURED | Some DNA checks are fully structured (line-height 1.7, skip-link present). Others require interpretation (is `::selection` "red enough"? is the header background "dark enough"?). The decomposition into 3 sub-gates in the fresh run shows the gate is too broad. |
| **GR-11** BG Delta >= 15 RGB | FULLY STRUCTURED | `Math.max(|R1-R2|, |G1-G2|, |B1-B2|) >= 15` -- zero ambiguity |
| **GR-12** Letter-Spacing >= 0.025em | FULLY STRUCTURED | px-to-em conversion + threshold comparison -- zero ambiguity |
| **GR-13** Stacked Gap <= 120px | FULLY STRUCTURED | CSS property sum at boundaries -- zero ambiguity |
| **GR-14** Total Visual Gap <= 150px | SEMI-STRUCTURED | `getBoundingClientRect` measurement is precise, but the question of WHETHER a large gap is intentional (structural transition element) or accidental (CSS bug) is judgment. Binary gate cannot distinguish. |
| **GR-15** Single Margin <= 96px | FULLY STRUCTURED | Direct comparison -- zero ambiguity |
| **GR-16** All CSS Perceptible | FULLY STRUCTURED | Meta-gate: aggregation of GR-11-15 results -- zero ambiguity |
| **GR-17** Density Stacking | SEMI-STRUCTURED | 12px minimum padding is clear, but table cell exemption question shows context matters. `<td>` padding at 8px is normal for data tables but potentially crushing for content tables. |
| **GR-18** Ghost Mechanisms | FULLY STRUCTURED | Sub-perceptual border (<0.5px), opacity (<0.1) -- zero ambiguity |
| **GR-19** Threshold Gaming | SEMI-STRUCTURED | Counting floor-hugging values is structured, but the 50% threshold for "gaming" vs "intentional constraint" is judgment. A builder who genuinely wants subtle contrasts might cluster near 15 RGB. |
| **GR-20** Structural Echo | SEMI-STRUCTURED | Comparing bg/padding/border signatures is structured, but what counts as "identical"? Current code uses exact string match. Should rgb(240,235,225) and rgb(241,235,225) count as different? |
| **GR-21** Cognitive Overload | JUDGMENT-REQUIRED | "4 simultaneous visual channels competing for attention" requires defining "channel" and "competing," both inherently perceptual. |
| **GR-22** Color Zone Conflict | JUDGMENT-REQUIRED | "Semantically consistent color usage" requires understanding what colors MEAN in context -- this is design judgment, not CSS measurement. |
| **GR-23** Builder = Opus | FULLY STRUCTURED | Model ID string comparison -- zero ambiguity |
| **GR-24** Content Heterogeneity | JUDGMENT-REQUIRED | "Heterogeneity >= moderate" and "metaphor viability >= viable" require NLP analysis of content. |
| **GR-25** Suppressor Count | SEMI-STRUCTURED | Regex patterns for known suppressors are structured, but detecting novel suppressor patterns requires judgment. |
| **GR-26** Brief Size Cap | FULLY STRUCTURED | Line count -- zero ambiguity |
| **GR-27** Builder Gate-Free | SEMI-STRUCTURED | Regex for gate-format language is structured, but edge cases (e.g., "ensure at least 3 channels" -- is this a count-gate?) require judgment. |
| **GR-28** Recipe Format | SEMI-STRUCTURED | Verb detection (Read/Select/Deploy vs Verify/Fail/Must) is structured, but assessing whether the OVERALL format is "recipe" vs "checklist" is judgment. |
| **GR-29-32** Verdict Gates | FULLY STRUCTURED | Threshold comparisons on PA-05 scores -- zero ambiguity |
| **GR-33** CSS Naming Mode | SEMI-STRUCTURED | Pattern matching (z1/z2 vs concept names) is structured, but classifying a name as "position-based" or "concept-based" has edge cases. |
| **GR-34** Component Modulation | SEMI-STRUCTURED | Measuring style variance of same component across zones IS automatable, but interpreting whether the variance is "adaptation" or "inconsistency" is judgment. |
| **GR-35** Layout Driver | JUDGMENT-REQUIRED | "Layout driven by content-type vs metaphor" is purely perceptual. |
| **GR-36-39** Experiment Gates | FULLY STRUCTURED | PA-05 score comparisons -- zero ambiguity |
| **GR-40** Single-Pass Default | SEMI-STRUCTURED | Checking execution mode is structured, but verifying "no unauthorized 3-pass" requires understanding what was authorized. |
| **GR-41** Rebuild Not Fix | SEMI-STRUCTURED | Checking for fresh builder instance is structured, but verifying "generative language" in the rebuild prompt requires NLP. |
| **GR-42** Gates Hidden | SEMI-STRUCTURED | Cross-references with GR-27 -- same level of analysis. |
| **GR-43** BG Delta Distribution (NEW) | FULLY STRUCTURED | Statistical computation on delta values -- zero ambiguity |
| **GR-44** Trailing Void (NEW) | FULLY STRUCTURED | `getBoundingClientRect` measurement -- zero ambiguity |
| **GR-45** Typography Variation (NEW) | FULLY STRUCTURED | Counting distinct font-sizes >= 2px apart -- zero ambiguity |
| **GR-46** Print Stylesheet (NEW) | FULLY STRUCTURED | Checking for `@media print` rule existence -- zero ambiguity |
| **GR-47** Brief Line Budget (NEW) | FULLY STRUCTURED | Line counting per tier -- zero ambiguity |
| **GR-48** Gate Coverage (NEW) | FULLY STRUCTURED | Set comparison of reported vs expected gate IDs -- zero ambiguity |
| **GR-49** Result File Integrity (NEW) | FULLY STRUCTURED | File existence + ID scheme validation -- zero ambiguity |
| **GR-50** Conviction Statement (NEW) | SEMI-STRUCTURED | File existence is structured, content quality (3+ sentences covering specific topics) requires NLP. |

### Classification Summary

| Category | Count | Percentage | Gates |
|----------|-------|-----------|-------|
| FULLY STRUCTURED | 27 | 54% | GR-01-04, GR-07, GR-11-13, GR-15-16, GR-18, GR-23, GR-26, GR-29-32, GR-36-39, GR-43-49 |
| SEMI-STRUCTURED | 17 | 34% | GR-05-06, GR-09-10, GR-14, GR-17, GR-19-20, GR-25, GR-27-28, GR-33-34, GR-40-42, GR-50 |
| JUDGMENT-REQUIRED | 6 | 12% | GR-08, GR-21-22, GR-24, GR-35 (to be removed) |

**Key insight:** The gate system is 88% automatable (FULLY STRUCTURED + SEMI-STRUCTURED). The 6 JUDGMENT-REQUIRED gates should either be reclassified to PA (GR-08, GR-21, GR-22, GR-24, GR-35) or given heuristic approximations that accept imperfect coverage.

---

## 6. RECOMMENDATIONS

### 6A. Gates to ADD (with full specs above)

| Priority | Gate | Rationale |
|----------|------|-----------|
| REQUIRED | **GR-44** Trailing Whitespace Void | The #1 defect found by 9/9 PA auditors, completely missed by the gate system. Trivially automatable. |
| REQUIRED | **GR-48** Gate Coverage Completeness | Without this meta-gate, the orchestrator can silently skip gates with no detection. Trivially automatable. |
| RECOMMENDED | **GR-43** BG Delta Distribution | Addresses the largest undetected quality gap (DRIFT). Prevents the Flagship failure mode (15 RGB everywhere). |
| RECOMMENDED | **GR-45** Typography Variation | Addresses the second-most-common DRIFT pattern (heading size flattening). |
| RECOMMENDED | **GR-47** Brief Line Budget | Catches the Brief Assembler bottleneck (Tier 4 underrun) before it reaches the builder. Runs pre-build. |
| RECOMMENDED | **GR-49** Gate Result File Integrity | Prevents the SM-08 failure (two conflicting result files). |
| ADVISORY | **GR-46** Print Stylesheet Presence | Low severity but easy to implement. |
| ADVISORY | **GR-50** Conviction Statement Existence | Important concept but enforcement is semi-automatable at best. |

### 6B. Gates to REMOVE from Gate Runner

| Gate | Reason | Move To |
|------|--------|---------|
| **GR-16** All CSS Perceptible | Redundant meta-gate. Its logic is already in the summary code. | Absorb into verdict logic |
| **GR-29-32** Verdict Gates | These are orchestrator DECISION RULES, not DOM inspection gates. | `artifact-orchestrator.md` verdict logic section |
| **GR-35** Layout Driver | Artifact says "NOT AUTOMATABLE -- requires PA auditor assessment." | PA protocol (already rerouted by council) |
| **GR-36-39** Experiment Gates | Meta-gates for experiment protocol. Do not run on individual builds. | Separate experiment protocol document |
| **GR-40-42** Policy Gates | Pipeline architecture checks. Not Playwright gates. | `artifact-orchestrator.md` process checks section |

**Net change:** Remove 12 gates from the gate runner. Add 8 new gates. Net: 42 - 12 + 8 = **38 gates** in the gate runner, of which:
- 18 REQUIRED (currently 16 + GR-44, GR-48)
- 12 RECOMMENDED (currently 6 + GR-43, GR-45, GR-47, GR-49, GR-25, GR-26, GR-27, GR-28 promoted from advisory... net after removing GR-16 and promoting 4 precondition gates)
- 8 ADVISORY

Actually, let me be precise about the final counts:

**REQUIRED (18 gates):**
- GR-01 through GR-15 (identity + perception, minus GR-16 absorbed) = 15
- GR-44 (trailing void) = 1
- GR-48 (coverage completeness) = 1
- Total: 17 (GR-01-15 = 15, plus GR-44 and GR-48)

Wait -- GR-01 through GR-10 is 10 identity, GR-11 through GR-15 is 5 perception = 15. Plus GR-44 and GR-48 = **17 REQUIRED**.

**RECOMMENDED (13 gates):**
- GR-17 through GR-22 (anti-pattern) minus GR-21, GR-22 (demoted to ADVISORY) = 4
- GR-25 through GR-28 (promoted from ADVISORY) = 4
- GR-43, GR-45, GR-47, GR-49 (new) = 4
- Total: **12 RECOMMENDED**

**ADVISORY (9 gates):**
- GR-21, GR-22 (demoted from RECOMMENDED) = 2
- GR-23, GR-24 (unchanged) = 2
- GR-33, GR-34 (mode detection, unchanged) = 2
- GR-46, GR-50 (new) = 2
- GR-19 (demoted from RECOMMENDED) = 1
- Total: **9 ADVISORY**

**Grand total: 17 + 12 + 9 = 38 gates in the gate runner.**

### 6C. Gates to RECLASSIFY

| Gate | Current | Recommended | Rationale |
|------|---------|-------------|-----------|
| GR-19 AP-10 Threshold Gaming | RECOMMENDED | ADVISORY | No executable code. 50% threshold is arbitrary. Semi-structured at best. |
| GR-21 AP-14 Cognitive Overload | RECOMMENDED | ADVISORY | No code, judgment-required, artifact acknowledges automation difficulty. |
| GR-22 AP-02 Color Zone Conflict | RECOMMENDED | ADVISORY | No code, judgment-required (semantic color role analysis). |
| GR-25 Suppressor Count | ADVISORY | RECOMMENDED | High evidence (20 suppressors, ALL correlate with degradation). Automatable with regex. |
| GR-26 Brief Size Cap | ADVISORY | RECOMMENDED | Trivially automatable, strong historical correlation. |
| GR-27 Builder Gate-Free | ADVISORY | RECOMMENDED | Automatable, high value (gate visibility = threshold gaming in Flagship). |
| GR-28 Recipe Format | ADVISORY | RECOMMENDED | Partially automatable, single most validated format finding. |

### 6D. Gates to FIX (Code Defects)

| Gate | Defect | Fix |
|------|--------|-----|
| **GR-05** Warm Palette | Scans ALL elements including HEAD/META/TITLE, producing 18 false positives | Add filter: `if (['HTML','HEAD','META','TITLE','SCRIPT','STYLE','LINK','BR'].includes(el.tagName)) return;` at the start of the forEach loop |
| **GR-06** Font Trinity | Same false-positive problem as GR-05. Also: PASS* (asterisk) is not a valid binary status. | Same filter. Remove ability for non-binary status. |
| **GR-09** Border Weight Hierarchy | Code checks `>=2 distinct weights` but spec says `4/3/1 hierarchy`. Code would pass ANY 2 weights. | Replace `hasHierarchy = weightValues.length >= 2` with tolerance-band matching: `hasPrimary = weightValues.some(w => w >= 3.5 && w <= 4.5); hasSecondary = weightValues.some(w => w >= 2.5 && w <= 3.5); hasTertiary = weightValues.some(w => w >= 0.5 && w <= 1.5); hasHierarchy = hasPrimary && (hasSecondary || hasTertiary);` |
| **GR-10** Cross-Page DNA | Only ~40% of specified DNA properties are checked. Missing: callout 4px border, ::selection red, :focus-visible, p max-width 70ch. | Add checks for missing properties. The decomposition into sub-gates is fine but all sub-checks must be present. |
| **GR-14** Total Visual Gap | No exception mechanism for structural transition elements (dark inversion blocks). | Add: if a child element between zones has `position: relative/absolute` and a distinct background color from both adjacent zones, exclude that gap from the measurement. Alternatively, allow the orchestrator to register known "transition elements" as exceptions before gate execution. |
| **GR-17** Density Stacking | 262 false positives from table cells at 8px padding. 12px minimum is unreasonable for `<td>/<th>`. | Change selector from `'p, li, td, th, blockquote, .callout'` to `'p, li, blockquote, .callout'`. Separate table cell check: td/th minimum 4px (not 12px). |

### 6E. Gate Execution Manifest

The orchestrator should produce a `gate-execution-manifest.json` after every run:

```json
{
  "buildId": "gas-town-va-v3-001",
  "timestamp": "2026-02-24T15:30:00Z",
  "viewports": ["1440x900", "768x1024"],
  "gatesExecuted": {
    "required": { "executed": 17, "total": 17, "missing": [] },
    "recommended": { "executed": 10, "total": 12, "missing": ["GR-19", "GR-22"] },
    "advisory": { "executed": 4, "total": 9, "missing": ["GR-21","GR-23","GR-24","GR-33","GR-34"] }
  },
  "results": [
    { "gate": "GR-01", "status": "PASS", "viewport": "1440x900" },
    ...
  ],
  "verdict": "PROCEED_TO_PA",
  "coverageGate": { "gate": "GR-48", "status": "PASS" },
  "resultFileHash": "sha256:abc123...",
  "notes": []
}
```

### 6F. Ensuring 100% REQUIRED + RECOMMENDED Gate Execution

The problem: Gas Town ran 19 of 42 gates (45%). The root cause is D-05 (artifact dilution -- 1,379 lines overwhelms the orchestrator).

**Solution (3 mechanisms combined):**

1. **Reduce what the orchestrator sees.** The gate-manifest.json (50 lines) replaces the 1,379-line artifact as the orchestrator's primary reference. The orchestrator reads the manifest, copies `gate-runner-core.js` into Playwright, and executes. It does NOT read the specification or provenance files.

2. **Make the code self-executing.** `gate-runner-core.js` is a single function that runs ALL Playwright-based gates automatically. The orchestrator does not cherry-pick gates from a menu -- it calls `runGateRunner(page)` once and gets all 17 REQUIRED + the Playwright-based RECOMMENDED gates. This eliminates the "selective attention" failure mode.

3. **GR-48 as the hard stop.** If GR-48 (Gate Coverage Completeness) reports that ANY REQUIRED gate is missing from the results, the verdict is INCOMPLETE. The orchestrator cannot proceed to PA. This makes incomplete coverage impossible to ignore.

**For precondition gates (GR-25-28, GR-47):** These run BEFORE the builder, on text artifacts. The orchestrator runs `gate-runner-preconditions.md` checks as a pre-build phase. If any RECOMMENDED precondition fails, the orchestrator receives a WARNING but does not block. If 3+ RECOMMENDED preconditions fail, the orchestrator must address them before proceeding.

**For ADVISORY gates:** These are optional. The orchestrator runs them if time permits. No enforcement mechanism needed. Their results are informational.

**Expected coverage after these changes:**
- REQUIRED: 100% (enforced by GR-48)
- RECOMMENDED: 80-90% (automated via core.js + precondition checks; only non-automatable gates like GR-19, GR-22 may be skipped)
- ADVISORY: 30-50% (no enforcement, orchestrator discretion)

---

## APPENDIX: COMPLETE RECLASSIFICATION TABLE

| Gate | Current Category | Current Tier | New Tier | New Location | Action |
|------|-----------------|-------------|----------|-------------|--------|
| GR-01 | Identity | REQUIRED | REQUIRED | gate-runner-core.js | FIX: add non-rendered element filter |
| GR-02 | Identity | REQUIRED | REQUIRED | gate-runner-core.js | No change |
| GR-03 | Identity | REQUIRED | REQUIRED | gate-runner-core.js | No change |
| GR-04 | Identity | REQUIRED | REQUIRED | gate-runner-core.js | No change |
| GR-05 | Identity | REQUIRED | REQUIRED | gate-runner-core.js | FIX: filter non-rendered elements, reduce false positive noise |
| GR-06 | Identity | REQUIRED | REQUIRED | gate-runner-core.js | FIX: filter non-rendered elements, remove PASS* ability |
| GR-07 | Identity | REQUIRED | REQUIRED | gate-runner-core.js | ADD standalone code (currently merged into GR-05) |
| GR-08 | Identity | REQUIRED | REQUIRED | gate-runner-core.js | ADD code (heuristic: check for `<hr>` with no preceding heading, empty divs with height > 10px, icon-only elements) |
| GR-09 | Identity | REQUIRED | REQUIRED | gate-runner-core.js | FIX: tolerance-band hierarchy matching |
| GR-10 | Identity | REQUIRED | REQUIRED | gate-runner-core.js | FIX: add missing sub-checks (callout border, ::selection, :focus-visible, p max-width) |
| GR-11 | Perception | REQUIRED | REQUIRED | gate-runner-core.js | No change |
| GR-12 | Perception | REQUIRED | REQUIRED | gate-runner-core.js | No change |
| GR-13 | Perception | REQUIRED | REQUIRED | gate-runner-core.js | No change |
| GR-14 | Perception | REQUIRED | REQUIRED | gate-runner-core.js | FIX: add structural transition element handling |
| GR-15 | Perception | REQUIRED | REQUIRED | gate-runner-core.js | No change |
| GR-16 | Perception | REQUIRED | **REMOVE** | Absorb into verdict logic | Redundant meta-gate |
| GR-17 | Anti-pattern | RECOMMENDED | RECOMMENDED | gate-runner-core.js | FIX: table cell exemption |
| GR-18 | Anti-pattern | RECOMMENDED | RECOMMENDED | gate-runner-core.js | No change |
| GR-19 | Anti-pattern | RECOMMENDED | **ADVISORY** | gate-runner-core.js (if code added) | Downgrade: arbitrary threshold, no code |
| GR-20 | Anti-pattern | RECOMMENDED | RECOMMENDED | gate-runner-core.js | No change |
| GR-21 | Anti-pattern | RECOMMENDED | **ADVISORY** | gate-runner-spec.md only | Downgrade: judgment-required, no code |
| GR-22 | Anti-pattern | RECOMMENDED | **ADVISORY** | gate-runner-spec.md only | Downgrade: judgment-required, no code |
| GR-23 | Precondition | ADVISORY | ADVISORY | gate-runner-preconditions.md | No change (confounded per council) |
| GR-24 | Precondition | ADVISORY | ADVISORY | gate-runner-preconditions.md | No change (judgment-required) |
| GR-25 | Precondition | ADVISORY | **RECOMMENDED** | gate-runner-preconditions.md | Promote: high evidence, automatable |
| GR-26 | Precondition | ADVISORY | **RECOMMENDED** | gate-runner-preconditions.md | Promote: trivially automatable, high correlation |
| GR-27 | Precondition | ADVISORY | **RECOMMENDED** | gate-runner-preconditions.md | Promote: automatable, high value |
| GR-28 | Precondition | ADVISORY | **RECOMMENDED** | gate-runner-preconditions.md | Promote: partially automatable, most validated finding |
| GR-29 | Verdict | ADVISORY | **REMOVE** | artifact-orchestrator.md | Move: verdict logic, not DOM gate |
| GR-30 | Verdict | ADVISORY | **REMOVE** | artifact-orchestrator.md | Move: verdict logic, not DOM gate |
| GR-31 | Verdict | ADVISORY | **REMOVE** | artifact-orchestrator.md | Move: verdict logic, not DOM gate |
| GR-32 | Verdict | ADVISORY | **REMOVE** | artifact-orchestrator.md | Move: verdict logic, not DOM gate |
| GR-33 | Mode | ADVISORY | ADVISORY | gate-runner-core.js (if code added) | No change |
| GR-34 | Mode | ADVISORY | ADVISORY | gate-runner-core.js (if code added) | No change |
| GR-35 | Mode | ADVISORY | **REMOVE** | PA protocol | Move: already rerouted to PA by council |
| GR-36 | Experiment | ADVISORY | **REMOVE** | experiment-protocol.md | Move: not a build gate |
| GR-37 | Experiment | ADVISORY | **REMOVE** | experiment-protocol.md | Move: not a build gate |
| GR-38 | Experiment | ADVISORY | **REMOVE** | experiment-protocol.md | Move: not a build gate |
| GR-39 | Experiment | ADVISORY | **REMOVE** | experiment-protocol.md | Move: not a build gate |
| GR-40 | Policy | ADVISORY | **REMOVE** | artifact-orchestrator.md | Move: process check, not DOM gate |
| GR-41 | Policy | ADVISORY | **REMOVE** | artifact-orchestrator.md | Move: process check, not DOM gate |
| GR-42 | Policy | ADVISORY | **REMOVE** | artifact-orchestrator.md | Move: overlaps GR-27 |
| **GR-43** | NEW | — | RECOMMENDED | gate-runner-core.js | ADD: BG delta distribution |
| **GR-44** | NEW | — | REQUIRED | gate-runner-core.js | ADD: trailing whitespace void |
| **GR-45** | NEW | — | RECOMMENDED | gate-runner-core.js | ADD: typography variation |
| **GR-46** | NEW | — | ADVISORY | gate-runner-core.js | ADD: print stylesheet |
| **GR-47** | NEW | — | RECOMMENDED | gate-runner-preconditions.md | ADD: brief line budget |
| **GR-48** | NEW | — | REQUIRED | gate-runner-core.js (meta-gate) | ADD: gate coverage completeness |
| **GR-49** | NEW | — | RECOMMENDED | gate-runner-preconditions.md | ADD: result file integrity |
| **GR-50** | NEW | — | ADVISORY | gate-runner-preconditions.md | ADD: conviction statement existence |

---

## APPENDIX: ADVERSARIAL SELF-CHECK

### What this report might be wrong about

1. **GR-43 (BG Delta Distribution) threshold may be too strict.** Requiring 50% of boundaries >= 25 RGB and stddev >= 8 is calibrated to Gas Town data. On content with intentionally subtle zone transitions (e.g., a meditation app guide), this gate would produce false failures. The threshold needs validation on at least 3 content types.

2. **GR-44 (Trailing Void) 300px threshold is arbitrary.** A footer with generous bottom padding might legitimately use 200-300px of space. The 300px number was chosen because the Gas Town void was ~5 viewports (~4,500px) -- 300px is well below that, but it may still catch intentional footer spacing.

3. **Removing 12 gates is aggressive.** Moving verdict, experiment, and policy gates to other documents is architecturally clean but creates dependency risk: the orchestrator now must read MULTIPLE files (gate-runner + orchestrator + experiment protocol) instead of one file for all gate-related information. Counter-argument: the orchestrator already failed to process the single 1,379-line file, so splitting cannot be worse.

4. **Precondition gate promotion (GR-25-28) assumes text-processing automation works.** Regex-based suppressor detection, recipe format detection, and gate-language detection are heuristic. If the Brief Assembler uses novel phrasing that evades the regex, these gates produce false negatives. Testing against the archived Gas Town brief should calibrate the patterns.

5. **The "less is more" principle from fresh-eyes analysis (file 10) suggests we should ADD FEWER gates, not 8.** The Middle experiment scored 4/4 with 100 lines and no formal gate system. Adding gates may push the system further into the complexity ratchet. Counter-argument: the specific gates proposed address DEMONSTRATED failures (trailing void, delta clustering, coverage gaps) with DEMONSTRATED solutions (simple Playwright measurements). They add ~150 lines of JS code, not 1,379 lines of specification.

6. **Information CREATION quality (Fresh-eyes GAP-4) remains unaddressed.** No proposed gate checks whether the Brief Assembler's generated intelligence is GOOD. The brief line budget gate (GR-47) checks VOLUME but not QUALITY. This is the hardest gap to close because quality assessment of generated text requires either a second LLM pass (expensive) or human review (not scalable).

---

*End of gate quality exploration. 42 gates audited, 8 new gates proposed (with full Playwright JS), 12 gates recommended for removal/relocation, 6 gates with code defects identified, 4-file + manifest splitting architecture designed, complete gate-PA synergy map produced, full structured/judgment classification completed.*

# Perception-Divergence Instrumentation
## Tracking Where Programmatic Gates and Perceptual Audit Diverge

**Author:** Opus perception-analyst agent
**Date:** 2026-02-26
**Task:** Design instrumentation for tracking the divergence between programmatic measurement (57 gates) and perceptual assessment (69 PA questions, 9 auditors + weaver)
**Core Insight:** Gates can all PASS while PA FAILS. The measurement system is systematically misaligned with human perception. This document designs the instrumentation to track, quantify, and progressively close that gap.

---

## 0. The Problem Statement

The pipeline's deepest validated finding:

> **Flagship experiment:** All required gates PASSED. PA-05: 1.5/4. Auditors found: zero borders, uniform typography (all 16px/400), backgrounds differing by 1-8 RGB points (imperceptible), 6 whitespace voids (210-276px each).

> **Yegge Gas Town initial:** Gates passed. Dark zone content invisible to auditors due to DPR-induced contrast failure. 19 consecutive viewport-heights of perceived void.

> **Middle Tier:** Gates passed AND auditors agreed -- 12 mechanisms, clear visual hierarchy, PA-05 4/4.

The gates measure CSS PROPERTIES. The auditors perceive EXPERIENCE. The distance between these two is the Perception Gap, and it currently has no instrumentation.

---

## 1. False Negative Taxonomy (Gates PASS, PA Finds Issue)

### 1.1 Three Root Causes

When a gate passes but a PA auditor identifies a quality problem, exactly one of three conditions holds:

| Code | Root Cause | Definition | Example |
|------|-----------|------------|---------|
| **FN-A** | Gate Too Lenient | The gate measures the right property but the threshold is wrong -- it passes values that are perceptually inadequate | GR-11 passing adjacent backgrounds with 8 RGB delta (before threshold was raised to >= 15) |
| **FN-B** | Wrong Property | The gate measures a CSS property that does not predict the perceptual outcome it intends to protect | Measuring `letter-spacing` value without context of `font-size` -- 0.03em at 16px = 0.48px, sub-perceptual; same 0.03em at 32px = 0.96px, still sub-perceptual but closer to threshold |
| **FN-C** | No Gate Exists | The quality dimension flagged by the PA auditor has no programmatic gate at all | Emotional arc (authority, surprise, delight, closure), metaphor coherence, reading flow, visual hierarchy beyond heading size |

### 1.2 Per-Run Tracking Format

After each pipeline run, the weaver (or a post-weaver analysis step) produces a **False Negative Register** -- a structured table mapping every PA finding to its gate coverage status:

```markdown
## False Negative Register — [build-slug] [date]

| # | PA Finding | Source Auditor(s) | PA Question(s) | Matching Gate(s) | Gate Status | FN Type | Severity | Notes |
|---|-----------|-------------------|----------------|-----------------|-------------|---------|----------|-------|
| 1 | Imperceptible background deltas between zones 3-5 | B, C, F | PA-55, PA-69 | GR-11 | PASS (delta=12) | FN-A | HIGH | Threshold was 10 at time of run; now 15 |
| 2 | No visual hierarchy beyond headings | A, D, E | PA-04, PA-32, PA-77 | GR-07 (heading sizes) | PASS | FN-B | MEDIUM | Gate checks heading sizes exist but not whether they CREATE hierarchy |
| 3 | Page lacks emotional resolution | A, D, Integrative | PA-13, PA-75, PA-76 | (none) | N/A | FN-C | LOW | Emotional arc is ungatable |
```

### 1.3 Fields and Classification Rules

**Matching Gate(s):** The gate whose PURPOSE most closely aligns with the PA finding. If no gate addresses this dimension, write `(none)`.

**FN Type classification:**
- **FN-A (Lenient):** The matching gate EXISTS and its measured property IS the right property, but `gate.measured.value` fell within `gate.threshold` despite the PA finding. Binary test: would tightening the threshold to match the PA finding's implied minimum have caught it?
  - If YES: FN-A.
  - If NO: the threshold is not the problem; the property is. Reclassify as FN-B.

- **FN-B (Wrong Property):** The matching gate EXISTS but measures a property that does not predict the perceived outcome. Binary test: is there ANY threshold for this property that would reliably predict the PA finding?
  - If YES: reclassify as FN-A (threshold was just too loose).
  - If NO: FN-B. The gate needs to measure a different property or a different combination of properties.

- **FN-C (No Gate):** No gate exists whose purpose addresses this quality dimension. Binary test: could a programmatic check (computed styles, DOM structure, screenshot pixel analysis) detect this issue?
  - If YES: this is a candidate for a new gate. Tag as `FN-C-GATABLE`.
  - If NO: this is a fundamentally perceptual dimension. Tag as `FN-C-UNGATABLE`.

**Severity:**
- **BLOCKING:** PA finding would change the weaver's verdict category (e.g., RELEASE -> IMPROVE)
- **HIGH:** PA finding appears in the weaver's Top-5 fix list
- **MEDIUM:** PA finding noted by >= 3 auditors but not in Top-5
- **LOW:** PA finding noted by 1-2 auditors, not verdict-changing

---

## 2. False Positive Taxonomy (Gates FAIL, PA Does Not Confirm)

### 2.1 Three Root Causes

When a gate fails but the PA auditors do not identify a corresponding quality issue (or the weaver overrides the gate finding), exactly one of three conditions holds:

| Code | Root Cause | Definition | Example |
|------|-----------|------------|---------|
| **FP-A** | Intentional Design Choice | The builder deliberately chose a value outside the gate threshold for a compositional reason, and the PA auditors confirm it works | A zone with intentionally reduced background contrast to create a "quiet" section (PA-64 "restraint as expression" scores YES) |
| **FP-B** | Miscalibrated Threshold | The gate threshold is too strict -- it flags values that are perceptually fine | GR-15 flagging auto-centered margins as "non-standard spacing" before the B-05 exception was added |
| **FP-C** | Implementation Artifact | The gate's programmatic check produces an incorrect measurement due to a technical issue (DOM structure, computed style inheritance, selector mismatch) | GR-11 comparing non-adjacent zones before the B-04 adjacent-only fix; DPR-induced measurement distortion before GR-61 |

### 2.2 Per-Run Tracking Format

```markdown
## False Positive Register — [build-slug] [date]

| # | Gate | Gate Status | Gate Measured Value | Threshold | PA Confirmation? | FP Type | Resolution | Notes |
|---|------|-------------|-------------------|-----------|-----------------|---------|------------|-------|
| 1 | GR-11 | FAIL (zone 2-4 delta=11) | {r:11, g:8, b:5} | >=15 | NOT CONFIRMED (auditors report zones look distinct) | FP-B | Consider warm-palette factor (1.3x effective threshold = effective min ~10 for warm tones) | Warm palette note in pa-questions.md says >=20 for warm; threshold mismatch |
| 2 | GR-09 | FAIL (stacked gap 135px) | 135px at zone 3-4 boundary | <=120px | NOT CONFIRMED (auditors describe transition as "breathable") | FP-A | Builder used deliberate pause between conceptual sections | Gate cannot distinguish intentional silence from dropped signal |
```

### 2.3 Fields and Classification Rules

**PA Confirmation?:** Did any PA auditor (or the weaver's experiential anchor) identify a problem corresponding to this gate failure?
- `CONFIRMED` = >= 1 auditor flagged this area as problematic
- `NOT CONFIRMED` = 0 auditors flagged this area
- `CONTRADICTED` = >= 1 auditor explicitly praised this area (e.g., "the breathing space between sections feels generous and intentional")

**FP Type classification:**
- **FP-A (Intentional):** The builder explains the choice AND the PA confirms it works. Test: does the builder's INTENT comment (GR-83) or RESIDUAL comment (GR-78) explain this value? AND does the PA NOT flag it?
  - If both YES: FP-A. Gate exception may be warranted.
  - If builder explains but PA flags: NOT a false positive. The intention was bad.

- **FP-B (Miscalibrated):** No builder intention, but PA does not confirm the issue. The threshold is simply too tight for this context.
  - Aggregation trigger: if the same gate produces FP-B across 3+ builds with no PA confirmation, the threshold needs recalibration.

- **FP-C (Artifact):** The gate's measurement is technically incorrect. The reported value does not match what a human developer would measure manually.
  - These ALWAYS warrant a gate-runner-core.js code fix, not a threshold change.

---

## 3. The Perception Gap Score (PGS)

### 3.1 Definition

After each run, compute:

```
FN_count = number of PA findings with NO corresponding gate failure
FP_count = number of gate failures with NO corresponding PA finding
Total_PA_findings = total distinct PA findings in weaver report
Total_gate_failures = total gate failures

PGS = (FN_count + FP_count) / (Total_PA_findings + Total_gate_failures)
```

**Interpretation:**
| PGS Range | Meaning |
|-----------|---------|
| 0.00 - 0.10 | ALIGNED -- gates and PA see the same reality |
| 0.11 - 0.25 | PARTIAL -- most issues caught by both, some blind spots |
| 0.26 - 0.50 | DIVERGENT -- gates and PA are measuring different things |
| 0.51 - 1.00 | ORTHOGONAL -- gates provide almost no signal about perceptual quality |

### 3.2 Directional Decomposition

PGS alone does not tell you WHERE to invest. Decompose:

```
PGS_fn = FN_count / Total_PA_findings      # What % of PA findings are invisible to gates?
PGS_fp = FP_count / Total_gate_failures     # What % of gate failures are perceptually irrelevant?
```

| Dominant Direction | Meaning | Action |
|-------------------|---------|--------|
| PGS_fn >> PGS_fp | Gates are blind to real issues | Need new gates or broader coverage |
| PGS_fp >> PGS_fn | Gates are crying wolf | Need threshold recalibration or exceptions |
| PGS_fn ~= PGS_fp | Balanced divergence | Need both more gates AND better calibration |

### 3.3 Weighted PGS (WPGS)

Not all divergences matter equally. Weight by severity:

```
WPGS = sum(weight[i] * divergence[i]) / sum(weight[i])

Where:
  weight[BLOCKING] = 4
  weight[HIGH] = 3
  weight[MEDIUM] = 2
  weight[LOW] = 1
```

A run with 1 BLOCKING false negative (weight 4) and 5 LOW false positives (weight 5) has WPGS dominated by the false negative. This matches intuition: one invisible critical defect matters more than five irrelevant gate failures.

### 3.4 Per-Run PGS Record

```markdown
## Perception Gap Score — [build-slug] [date]

| Metric | Value |
|--------|-------|
| Total PA findings | N |
| Total gate failures | N |
| False negatives (FN) | N (A:N, B:N, C:N) |
| False positives (FP) | N (A:N, B:N, C:N) |
| PGS | 0.XX |
| PGS_fn | 0.XX |
| PGS_fp | 0.XX |
| WPGS | 0.XX |
| Direction | BLIND / WOLF / BALANCED |
| Top FN | [description of highest-severity false negative] |
| Top FP | [description of highest-severity false positive] |
```

---

## 4. Gate Coverage Map

### 4.1 Full Dimension-Gate-PA Matrix

This matrix maps every quality dimension to its gate coverage and PA coverage. A dimension with gate coverage AND PA coverage is INSTRUMENTED. A dimension with only PA coverage is PERCEPTUAL-ONLY. A dimension with only gate coverage is MECHANICAL-ONLY (dangerous -- you trust the gate but never verify it perceptually).

| Quality Dimension | Gate Coverage | PA Coverage | Coverage Status | Notes |
|-------------------|--------------|-------------|-----------------|-------|
| **Soul compliance** | GR-01 (border-radius), GR-02 (box-shadow), GR-03 (container width), GR-04 (palette), GR-05 (warm family), GR-06 (font trinity), GR-08 (border widths), GR-09 (S-09 stacking), GR-10 (prohibitions) | PA-24 (system), PA-25 (identity persistence), PA-26 (looks wrong) | **FULL** | Best-covered dimension. 10 gates + 3 PA questions. |
| **Background contrast** | GR-11 (adjacent delta >= 15 RGB) | PA-55 (sub-perceptual differences), PA-69 (multi-coherence transitions) | **FULL** | Threshold calibrated after Flagship failure. Warm palette factor (1.3x) documented but not code-enforced. |
| **Typography hierarchy** | GR-07 (font sizes present), GR-14 (heading hierarchy h1>h2>h3) | PA-02 (readability), PA-08 (squint test), PA-29 (header text styles), PA-56 (tracking feel), PA-77 (3+ importance levels) | **PARTIAL** | Gates check PRESENCE of sizes, not whether they CREATE perceived hierarchy. FN-B risk. |
| **Typography arc/variation** | GR-55 (multi-coherence: font-size delta >= 2px, letter-spacing delta >= 0.5px between zones) | PA-56 (tracking feel), PA-69 (transition agreement), PA-70 (density response) | **PARTIAL** | GR-55 checks deltas exist; PA checks whether they are FELT. Threshold alignment unverified for warm-palette contexts. |
| **Spatial rhythm** | GR-09 (stacked gap <= 120px), GR-15 (margin consistency) | PA-11 (margins), PA-30-33 (spatial balance), PA-50 (void count), PA-51 (density), PA-52 (thirds), PA-53 (container width), PA-66 (gap variety) | **PARTIAL** | GR-09 catches stacking voids. No gate catches MONOTONOUS spacing (all gaps identical but within threshold). Gap between "no voids" and "varied rhythm" is purely perceptual. |
| **Multi-coherence** | GR-55 (>= 3 simultaneous shifts at zone boundaries) | PA-62 (transition variation: dramatic AND quiet), PA-69 (transition direction agreement), PA-71 (handoff quality) | **PARTIAL** | Gate counts CHANNEL SHIFTS; PA assesses whether shifts are HARMONIZED. A page can have 4 channels shifting but all contradicting each other -- GR-55 passes, PA-69 fails. |
| **Component usage** | GR-66 (component count), GR-18 (ghost mechanisms) | PA-37 (info density), PA-38 (reading order), PA-63 (fractal zoom) | **PARTIAL** | Gates count PRESENCE. PA assesses INTEGRATION. A page can deploy 15 components that are generic (GR-66 passes, PA-63 fails). |
| **Responsive** | GR-* at 768px (all gates re-run) | PA-22 (served/punished), PA-23 (degradation), PA-46 (reorganization logic), PA-47 (surprise in second half) | **PARTIAL** | Gates verify CSS values hold at 768px. PA checks whether the EXPERIENCE adapts intelligently. |
| **Visual hierarchy** | GR-14 (heading size order), GR-07 (font sizes exist) | PA-04 (eye goes first), PA-32 (visual weight distribution), PA-77 (3+ importance levels) | **WEAK** | Gates check structural prerequisites (headings ordered). PA checks PERCEIVED hierarchy (does the eye flow where it should?). No gate for whether the most important content has the most visual weight. |
| **Reading flow** | (none) | PA-12 (eye flow), PA-34 (designed transitions), PA-35 (interest shape), PA-36 (dramatic moment) | **PERCEPTUAL-ONLY** | No programmatic proxy for "do your eyes flow smoothly." |
| **Emotional arc** | (none) | PA-13 (visual ending), PA-35 (interest curve), PA-36 (dramatic moment), PA-45 (best moment), PA-47 (second-half surprise), PA-75 (designed conclusion), PA-76 (journey shape) | **PERCEPTUAL-ONLY** | Ungatable by definition. Emotional response to visual composition cannot be computed from CSS. |
| **Metaphor coherence** | (none) | PA-42 (metaphor looks wrong), PA-43 (visual cost), PA-44 (metaphor from structure alone), PA-54 (structural promises), PA-68 (spatial coverage) | **PERCEPTUAL-ONLY** | Whether a metaphor is PERCEIVED as structural vs announced is a judgment call. No CSS property corresponds to "metaphor resonance." |
| **Content-form coupling** | BV-08 (brief-output diff, 80% coverage) | PA-20 (personality match), PA-70 (density response), PA-72 (content specificity) | **PARTIAL** | BV-08 checks whether brief CONTENT appears in output. PA checks whether the visual treatment SERVES the content. Different questions. |
| **Accessibility** | GR-60 (WCAG contrast), GR-73 (keyboard/a11y) | PA-73 (keyboard/screen reader problems) | **PARTIAL** | Gates check computed contrast ratios. PA checks whether a human can actually USE the page with assistive technology. |
| **Delight (micro-refinement)** | (none) | PA-45 (single best moment), PA-67 (novelty beyond competence) | **PERCEPTUAL-ONLY** | Hover states, typographic micro-refinements, first/last child treatments. No gate can assess whether a detail "rewards attention." |
| **Restraint/negative space** | (none) | PA-33 (silence vs dropped signal), PA-51 (density feel), PA-64 (deliberate plainness) | **PERCEPTUAL-ONLY** | "Designed quiet" vs "forgot to design this part" is a perceptual judgment. |
| **Cross-page coherence** | (none -- inherent via tokens/soul) | PA-24 (system feel), PA-25 (identity persistence) | **STRUCTURAL** | Covered by the shared DNA (tokens.css + soul constraints), not by gates per se. PA confirms it works. |
| **Navigation usability** | (none) | PA-80 (navigation from middle), PA-54 (structural promises) | **PERCEPTUAL-ONLY** | Whether navigation is USABLE requires task-based assessment, not CSS measurement. |

### 4.2 Coverage Summary

| Coverage Status | Count | Dimensions | Action |
|----------------|-------|------------|--------|
| **FULL** | 2 | Soul compliance, Background contrast | Maintain; recalibrate thresholds only when PGS_fp indicates |
| **PARTIAL** | 8 | Typography hierarchy, Typography arc, Spatial rhythm, Multi-coherence, Component usage, Responsive, Content-form coupling, Accessibility | Highest ROI for gate improvement. Each has a specific gap between what the gate checks and what PA assesses |
| **WEAK** | 1 | Visual hierarchy | Gate exists but measures wrong property (FN-B). Needs redesign. |
| **PERCEPTUAL-ONLY** | 6 | Reading flow, Emotional arc, Metaphor coherence, Delight, Restraint/negative space, Navigation usability | Cannot be gated. Track longitudinally (Section 5). |
| **STRUCTURAL** | 1 | Cross-page coherence | Covered by design system DNA, not by gates. Monitor for drift. |

### 4.3 The Partial Coverage Gap Catalog

For each PARTIAL dimension, the specific gap between gate measurement and perceptual assessment:

| Dimension | Gate Measures | PA Assesses | The Gap |
|-----------|-------------|-------------|---------|
| Typography hierarchy | Font sizes exist and are ordered | Whether sizes CREATE perceived importance levels | Presence ≠ perception. 18px vs 16px technically "ordered" but perceptually flat. |
| Typography arc | Delta between zones >= threshold | Whether delta is FELT as intentional variation | Threshold may be correct for one palette but wrong for another. Warm palettes may need larger deltas. |
| Spatial rhythm | No single gap > 120px | Whether gaps have VARIETY and PURPOSE | Uniform 80px gaps pass the gate but create monotonous rhythm. |
| Multi-coherence | >= 3 channels shift at boundaries | Whether shifts AGREE in direction and feel HARMONIZED | Channels can shift independently but contradictorily. Gate counts shifts; perception counts harmony. |
| Component usage | >= N components deployed | Whether components are INTEGRATED (adapt to zones, echo page language) | Generic components deployed in zone-agnostic style pass count gate but fail fractal coherence (PA-63). |
| Responsive | All gates pass at 768px | Whether the EXPERIENCE adapts intelligently | CSS values can be technically correct while the layout logic fails (content that reads well on desktop becomes disoriented at mobile). |
| Content-form coupling | Brief content appears in output (>= 80%) | Whether visual treatment SERVES the content | Content can be present but visually mistreated. A poem rendered in monospace with no line breaks is "present" but badly coupled. |
| Accessibility | WCAG contrast ratios pass | Whether a human with assistive tech can USE the page | Computed ratios can pass while actual experience fails (focus trapping, skip-link absence, ARIA labeling gaps). |

---

## 5. Ungatable Dimensions: Longitudinal Tracking

### 5.1 The Problem

Six quality dimensions cannot be gated because they require perceptual judgment. But "cannot be gated" does not mean "cannot be tracked." After 10 runs, patterns should emerge: which pipeline configurations, builder models, content types, and prompt structures correlate with higher emotional arc scores?

### 5.2 Per-Run Ungatable Dimension Record

For each PERCEPTUAL-ONLY dimension, extract a structured score from the weaver report:

```json
{
  "build_slug": "yegge-gas-town-refine",
  "date": "2026-02-25",
  "ungatable_dimensions": {
    "emotional_arc": {
      "surprise": 6,
      "delight": 4,
      "authority": 8,
      "closure": 7,
      "arc_shape": "building-peaking-resolving",
      "strongest_register": "authority",
      "weakest_register": "delight",
      "evidence": "PA-35: interest builds through middle, peaks at section 6; PA-76: ensemble shape with earned ending"
    },
    "reading_flow": {
      "score": null,
      "flow_breaks": 2,
      "break_locations": ["zone-3-to-zone-4 transition", "dark zone onset"],
      "evidence": "PA-12: smooth in light zones, collision at dark transition; PA-34: dark zone entry is a wall, not a door"
    },
    "metaphor_coherence": {
      "metaphor_type": "surface/descent/emergence",
      "expression_level": "STRUCTURAL",
      "spatial_coverage": "all_thirds",
      "persistence_score": 8,
      "evidence": "PA-68: metaphor visible in all scroll thirds; PA-44: perceivable without labels in zones 1-4, dependent on labels in zones 5-8"
    },
    "delight_density": {
      "moments_identified": 3,
      "locations": ["drop cap", "complexity ladder annotation arrow", "domain card ~/paths"],
      "distribution": "front_loaded",
      "evidence": "PA-45: drop cap is strongest design moment; PA-67: complexity ladder is novel"
    },
    "restraint": {
      "deliberate_quiet_sections": 1,
      "perceived_as_intentional": true,
      "contrast_effect_working": true,
      "evidence": "PA-64: Sources section is plainer, surrounding sections feel richer"
    },
    "navigation_usability": {
      "nav_present": false,
      "page_length_viewports": 22,
      "usability_score": 3,
      "evidence": "PA-80: no sticky nav, no back-to-top, no section links on 22+ viewport page"
    }
  }
}
```

### 5.3 Longitudinal Analysis (After N >= 5)

After 5 runs, compute correlations between pipeline configuration variables and ungatable dimension scores:

| Configuration Variable | Correlate Against | Hypothesis |
|----------------------|-------------------|------------|
| Builder model (Opus vs Sonnet) | All 6 ungatable dimensions | Opus produces higher emotional arc and metaphor scores (per project memory: "Opus complies AND creates beyond constraints") |
| REFINE cycle (0 vs 1 vs 2) | Emotional arc, delight density | REFINE deepens existing composition; expect emotional arc improvement |
| Content type (essay vs article vs tutorial) | Reading flow, restraint | Narrative content may produce better reading flow; tutorial content may produce more navigation issues |
| Prompt format (recipe vs checklist) | All 6 dimensions | Recipe format predicts higher quality (per memory: "Recipe = DESIGNED; Checklist = FLAT") |
| CSS budget (lines) | Delight density, restraint | Higher CSS budget should correlate with more delight moments, but only if budget is well-allocated |
| Mechanism count | Metaphor coherence, restraint | More mechanisms should correlate with coherence up to a saturation point (~15), then decline |
| TC brief metaphor type (structural vs atmospheric vs labeled) | Metaphor coherence | Structural metaphors in TC brief should predict structural expression in PA assessment |

### 5.4 The Ungatable Dashboard (After N >= 10)

```
EMOTIONAL ARC TRENDS (last 10 runs):
  Surprise:  [6, 4, 7, 5, 8, 3, 6, 7, 5, 6] mean=5.7 trend=flat
  Delight:   [4, 3, 5, 4, 6, 2, 4, 5, 3, 5] mean=4.1 trend=improving
  Authority: [8, 7, 8, 9, 8, 6, 7, 8, 8, 8] mean=7.7 trend=stable
  Closure:   [7, 5, 6, 7, 8, 4, 6, 7, 6, 7] mean=6.3 trend=improving

METAPHOR COHERENCE:
  Expression level: STRUCTURAL in 6/10, ATMOSPHERIC in 3/10, LABELED in 1/10
  Spatial coverage: all_thirds in 7/10, first_two_thirds in 2/10, first_third only in 1/10
  Correlation: Opus builds STRUCTURAL 80%, Sonnet builds STRUCTURAL 20%

DELIGHT DENSITY:
  Moments per run: [3, 2, 4, 3, 5, 1, 3, 4, 2, 4] mean=3.1
  Distribution: front_loaded in 7/10 (action item: pipeline underweights second-half delight)
```

---

## 6. Calibration Drift Detection

### 6.1 The Problem

Gates become more or less predictive over time. As the pipeline evolves (new prompt formats, new builder instructions, new threshold values), the relationship between gate measurements and perceptual reality shifts. A gate that was perfectly calibrated in Pipeline v3 may be miscalibrated in Pipeline v5 because builders have learned to game it.

### 6.2 Per-Gate Predictive Power Tracking

For each gate, track its predictive power over a rolling window of runs:

```json
{
  "gate_id": "GR-11",
  "gate_name": "Adjacent background delta",
  "threshold": ">= 15 RGB",
  "history": [
    {
      "run": "yegge-gas-town",
      "measured": 18,
      "status": "PASS",
      "pa_confirmed": true,
      "pa_source": "PA-55: zones look distinct",
      "predictive": true
    },
    {
      "run": "molly-panopticon",
      "measured": 22,
      "status": "PASS",
      "pa_confirmed": true,
      "pa_source": "PA-69: transitions feel designed",
      "predictive": true
    },
    {
      "run": "future-build-3",
      "measured": 16,
      "status": "PASS",
      "pa_confirmed": false,
      "pa_source": "PA-55: sections look the same despite different bg values",
      "predictive": false,
      "note": "Warm palette context -- effective threshold should be ~20"
    }
  ],
  "rolling_accuracy": 0.67,
  "drift_signal": "POSSIBLE -- 1 false negative in last 3 runs"
}
```

### 6.3 Drift Detection Rules

| Signal | Threshold | Meaning | Action |
|--------|-----------|---------|--------|
| Gate accuracy drops below 75% over 5-run window | < 75% | Gate is losing predictive power | Investigate: FN-A (threshold), FN-B (property), or FP-B (too strict) |
| Gate produces same classification (PASS) for 10 consecutive runs | 10x PASS | Gate may be vacuously easy | Check: is the threshold too lenient, or have builders learned to exceed it? If the latter, the gate is working as designed. |
| Gate FN rate increases while threshold remains unchanged | FN rate up, threshold unchanged | Builder behavior has shifted; gate threshold has not adapted | Review PA findings from recent runs to recalibrate |
| New PA question added; no corresponding gate exists | New PA-XX with FN-C pattern | Coverage gap introduced | Evaluate: is this gatable? If yes, add gate. If no, add to ungatable tracking. |

### 6.4 Calibration Review Protocol (Every 5 Runs)

After every 5th pipeline run:

1. **Compute per-gate accuracy** over the 5-run window
2. **Identify gates below 75% accuracy** -- these need investigation
3. **Check the FN/FP balance** -- is drift primarily creating false negatives or false positives?
4. **For FN-A drift:** tighten threshold by the minimum amount needed to catch the missed finding
5. **For FN-B drift:** investigate whether the property is still the right proxy; if not, design a new gate
6. **For FP-B drift:** loosen threshold or add an exception pattern (see gate-manifest.json `exceptions`)
7. **Record calibration changes** in a `calibration-changelog.md`:

```markdown
## Calibration Change — [date]

| Gate | Old Threshold | New Threshold | Reason | Triggering Run(s) | Expected Impact |
|------|--------------|---------------|--------|-------------------|-----------------|
| GR-11 | >= 15 RGB | >= 20 RGB (warm palette) | FN-A: 3/5 warm-palette builds had PA findings despite gate PASS | molly-panopticon, build-3, build-5 | Reduce FN rate for warm palettes; may increase FP rate for cool palettes |
```

---

## 7. The Weaver as Calibration Signal

### 7.1 The Weaver's Unique Position

The weaver reads BOTH gate results AND all PA reports. It is the natural convergence point where programmatic and perceptual data meet. Currently, the weaver synthesizes these into a verdict, but it does not explicitly COMPARE them. The divergence information exists implicitly in the weaver's reasoning but is not captured structurally.

### 7.2 New Weaver Output Section: Measurement Divergence Report

Add a REQUIRED section to the weaver's output protocol (pa-weaver.md), between the existing Section 6 (Emotional Arc) and Section 7 (Ship Decision):

```markdown
## 6.5 Measurement Divergence Report

### Gate-PA Alignment

| Gate Result | PA Result | Finding | FN/FP Type | Severity |
|-------------|-----------|---------|-----------|----------|
| GR-11 PASS (delta=18) | PA-55 NO ISSUE | ALIGNED | — | — |
| GR-09 PASS (gap=110px) | PA-50: 1 viewport with <30% content | FALSE NEGATIVE | FN-A (threshold) | MEDIUM |
| GR-18 FAIL (2 ghost mechanisms) | (no auditor flagged this) | FALSE POSITIVE | FP-B (miscalibrated) | LOW |
| (no gate) | PA-76: journey has no peak | FALSE NEGATIVE | FN-C (ungatable) | HIGH |

### Summary
- Gates PASS, PA finds issue: N findings (N FN-A, N FN-B, N FN-C)
- Gates FAIL, PA does not confirm: N findings (N FP-A, N FP-B, N FP-C)
- PGS: 0.XX (ALIGNED / PARTIAL / DIVERGENT / ORTHOGONAL)
- Direction: BLIND / WOLF / BALANCED
- Top divergence: [single most important divergence and what it means for gate calibration]

### Calibration Recommendations
- [Specific gate threshold adjustments suggested by this run's divergences]
- [New gate candidates suggested by FN-C findings]
- [Exception patterns suggested by FP-A/FP-B findings]
```

### 7.3 Integration with Existing Weaver Protocol

This section fits naturally into the weaver's workflow because:

1. The weaver ALREADY reads gate results (Section 1: Manifest Verification includes gate pass counts)
2. The weaver ALREADY reads all PA reports (Sections 2-4)
3. The weaver ALREADY classifies findings by type (Section 5: Fix-Type Classification)
4. The divergence report is a natural COMPARISON step between data sources the weaver already has

**No new data collection needed.** The weaver has all the inputs. This section just structures the comparison that currently happens implicitly (or not at all).

### 7.4 Weaver Prompt Addition

Add to the weaver prompt template (MANIFEST.md Appendix E, weaver section):

```
After completing the Emotional Arc Synthesis (Section 6), produce a Measurement
Divergence Report (Section 6.5).

For each gate that PASSED: check if any PA auditor flagged an issue in the same
quality dimension. If yes, record as False Negative with type (A/B/C).

For each gate that FAILED: check if any PA auditor confirmed the issue. If no
auditor flagged it, record as False Positive with type (A/B/C).

Compute PGS = (FN + FP) / (total PA findings + total gate failures).

End with 1-3 specific calibration recommendations: threshold changes, new gate
candidates, or exception patterns.
```

### 7.5 Why the Weaver and Not a Separate Agent

A separate "calibration auditor" agent would need to read both gate results and PA reports -- duplicating the weaver's entire context. The weaver already has this context. Adding a structured output section is ~50 lines of additional prompt; adding a new agent is ~500 lines of infrastructure + a new thread + context duplication. The weaver IS the calibration signal; it just needs a structured way to express what it already sees.

---

## 8. Composite Per-Run Record Schema

### 8.1 The `perception-divergence.json` File

Each pipeline run produces a JSON file alongside the gate results and PA reports:

```json
{
  "schema_version": "1.0",
  "build_slug": "yegge-gas-town-refine",
  "date": "2026-02-25",
  "pipeline_version": "v3.1",
  "builder_model": "opus",

  "gate_summary": {
    "total_gates_run": 46,
    "passed": 44,
    "failed": 2,
    "advisory": 3,
    "pass_rate": 0.957
  },

  "pa_summary": {
    "pa05": 3.5,
    "tier5": 9,
    "total_findings": 12,
    "blocking_findings": 0,
    "high_findings": 3,
    "medium_findings": 5,
    "low_findings": 4
  },

  "false_negatives": [
    {
      "id": "FN-001",
      "pa_finding": "Dark zone content invisible at viewport scroll resolution",
      "pa_sources": ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
      "pa_questions": ["PA-55", "PA-02", "PA-08"],
      "matching_gate": "GR-60",
      "gate_status": "PASS",
      "fn_type": "FN-B",
      "severity": "BLOCKING",
      "notes": "Gate checks WCAG contrast ratio which passes. But DPR rendering + dark background = invisible content. Wrong property: should check RENDERED pixel contrast, not computed CSS contrast."
    }
  ],

  "false_positives": [
    {
      "id": "FP-001",
      "gate": "GR-09",
      "gate_status": "FAIL",
      "measured": "135px stacked gap",
      "threshold": "<= 120px",
      "pa_confirmed": false,
      "fp_type": "FP-A",
      "severity": "LOW",
      "notes": "Builder used deliberate breathing pause between conceptual sections. Auditors describe transition as appropriate."
    }
  ],

  "pgs": {
    "fn_count": 3,
    "fp_count": 1,
    "total_pa_findings": 12,
    "total_gate_failures": 2,
    "pgs": 0.286,
    "pgs_fn": 0.250,
    "pgs_fp": 0.500,
    "wpgs": 0.412,
    "direction": "BLIND",
    "interpretation": "DIVERGENT -- gates miss 25% of PA findings by count, but the missed findings include 1 BLOCKING issue"
  },

  "ungatable_dimensions": {
    "emotional_arc": {
      "surprise": 6, "delight": 4, "authority": 8, "closure": 7,
      "arc_shape": "building-peaking-resolving",
      "strongest": "authority", "weakest": "delight"
    },
    "reading_flow": { "flow_breaks": 2, "locations": ["zone-3-4 transition", "dark onset"] },
    "metaphor_coherence": { "type": "surface/descent/emergence", "expression": "STRUCTURAL", "coverage": "all_thirds", "score": 8 },
    "delight_density": { "moments": 3, "distribution": "front_loaded" },
    "restraint": { "quiet_sections": 1, "intentional": true },
    "navigation": { "present": false, "page_viewports": 22, "score": 3 }
  },

  "calibration_recommendations": [
    {
      "gate": "GR-60",
      "current_threshold": "WCAG AA (4.5:1)",
      "recommended_change": "Add DPR-corrected pixel analysis gate for dark zones",
      "reason": "WCAG contrast passes for computed values but rendered pixels are invisible at DPR 0.667",
      "fn_evidence": "FN-001"
    }
  ]
}
```

### 8.2 Cross-Run Aggregation

The `cross-run-tracker.md` gets a new companion column set. For each run row, append:

```
| ... existing columns ... | PGS | PGS_fn | PGS_fp | WPGS | Top FN | Top FP |
```

This lets the tracker show perception-gap trends alongside PA-05 and Tier 5 trends.

---

## 9. Implementation Priority

### 9.1 Effort vs Impact Matrix

| Component | Effort | Impact | Priority |
|-----------|--------|--------|----------|
| Weaver divergence section (7.2) | LOW (prompt change only, ~50 lines) | HIGH (produces the raw data for everything else) | **P0 -- DO FIRST** |
| PGS computation (Section 3) | LOW (formula applied to weaver output) | HIGH (single metric for tracking alignment) | **P1** |
| False Negative Register (Section 1) | MEDIUM (structured format + weaver integration) | HIGH (identifies where to invest in gates) | **P1** |
| False Positive Register (Section 2) | MEDIUM (same as FN register) | MEDIUM (identifies where to relax gates) | **P2** |
| Gate Coverage Map (Section 4) | LOW (one-time analysis, already done above) | HIGH (strategic roadmap for coverage) | **P1 (already done)** |
| Ungatable dimension tracking (Section 5) | MEDIUM (JSON schema + weaver extraction) | HIGH but DELAYED (value appears after N >= 5 runs) | **P2** |
| Calibration drift detection (Section 6) | HIGH (per-gate tracking infrastructure) | HIGH but DELAYED (value appears after N >= 5 runs) | **P3** |
| perception-divergence.json (Section 8) | MEDIUM (schema + write step in orchestrator) | MEDIUM (enables automation of PGS) | **P2** |

### 9.2 Implementation Sequence

**Phase 1 (next pipeline run):**
1. Add Section 6.5 to pa-weaver.md
2. Add divergence report instruction to weaver prompt template
3. Manually compute PGS from weaver output after run
4. Manually populate first row in cross-run tracker with PGS columns

**Phase 2 (after 3 runs with Phase 1):**
1. Formalize the perception-divergence.json schema
2. Add ungatable dimension extraction to weaver prompt
3. Start FN/FP register as persistent files
4. Add PGS columns to cross-run-tracker.md

**Phase 3 (after 5+ runs with Phase 2):**
1. Implement per-gate predictive power tracking
2. Run first calibration review
3. Compute first longitudinal correlations for ungatable dimensions
4. Evaluate whether any FN-C-GATABLE dimensions should become gates

---

## 10. Relationship to Other Pipeline Components

### 10.1 Crack Dimension Alignment

| Crack Dimension | How This Instrumentation Helps |
|----------------|-------------------------------|
| D2 (Compression Loss) | FN register tracks when information present in brief is perceptually absent in output -- a compression loss that gates miss |
| D7 (Defense Paradox) | PGS is a SIMPLE metric (1 number). It adds tracking without adding complexity to the builder or auditor experience |
| D13 (Feedback Loop Absence) | Calibration drift detection creates a structured feedback loop from PA back to gates |
| D14 (Complexity-Induced Invisibility) | The coverage map makes invisible gaps VISIBLE -- you can see at a glance which dimensions have no gate |

### 10.2 Existing File Integration Points

| Existing File | Integration |
|---------------|-------------|
| `pa-weaver.md` | Add Section 6.5 (Measurement Divergence Report) |
| `cross-run-tracker.md` | Add PGS, PGS_fn, PGS_fp, WPGS columns to Build History table |
| `gate-manifest.json` | Add `predictiveAccuracy` field per gate (after N >= 5) |
| `FIX-TRACKER.md` | FN-A findings that lead to threshold changes become fix rows |
| `crack-dimensions.md` | FN-C-GATABLE findings that become new gates should update coverage status |
| `AUXILIARY-PROMPT.md` | Add a check: "After modifying any gate threshold, verify PGS for last 3 runs would not worsen" |

### 10.3 What This Instrumentation Does NOT Do

- It does NOT replace gates or PA. Gates filter for mechanical quality (~26%). PA assesses perceptual quality (~74%). This instrumentation tracks where they AGREE and DISAGREE.
- It does NOT automate gate calibration. Calibration recommendations come from the weaver and are reviewed by the orchestrator or user.
- It does NOT add new gates. It identifies WHERE new gates are needed (FN-C-GATABLE) and WHERE existing gates are miscalibrated (FN-A, FP-B).
- It does NOT increase builder or auditor workload. ALL new data comes from the weaver, who already has both data sources.

---

## 11. Historical Validation (Retroactive Analysis)

Apply the PGS framework retroactively to the 6 pipeline builds in cross-run-tracker.md to bootstrap the longitudinal record:

### 11.1 Estimated Historical PGS

| Build | PA-05 | Gate% | Estimated PGS | Direction | Key Divergence |
|-------|-------|-------|---------------|-----------|----------------|
| middle-tier (pre-v3) | 4.0 | ? | ~0.15 (est.) | PARTIAL | Gates not standardized; PA was comprehensive. Few false negatives because page was genuinely good. |
| ceiling-exp (pre-v3) | 1.5 | ? | ~0.80 (est.) | ORTHOGONAL | Catastrophic whitespace void (FN-C), container width violation (FN-A before gate existed), metaphor "announced" not structural (FN-C) |
| flagship-exp (pre-v3) | 1.5 | ? | ~0.75 (est.) | ORTHOGONAL | Zero borders (FN-A: gate threshold too lenient), uniform typography (FN-B: gate checks size existence not hierarchy perception), imperceptible backgrounds (FN-A: threshold was wrong), 6 whitespace voids (FN-A: S-09 not yet stacking-aware) |
| flagship-remed (pre-v3) | 2.5 | ? | ~0.35 (est.) | DIVERGENT | Border selectors broken (FP-C: gate implementation artifact), typography not applying (FN-C: CSS specificity issue no gate checks) |
| yegge-gas-town (v3.1) | 2.0 | ? | ~0.50 (est.) | DIVERGENT | Dark zone invisibility (FN-B: WCAG contrast gate wrong property for DPR rendering), 768px total failure (FN-C: no rendered-content-visibility gate) |
| yegge-refine (v3.1) | 3.5 | ? | ~0.20 (est.) | PARTIAL | Dark zone fatigue remaining (FN-B), delight 4/10 (FN-C ungatable). Most issues aligned after REFINE. |

### 11.2 Trend Signal

Even from this rough retroactive analysis, a clear pattern emerges:

1. **PGS decreases as pipeline matures** (~0.80 -> ~0.20 over 6 builds). Gates are becoming more aligned with perception.
2. **FN-C (no gate) is the persistent gap.** Emotional arc, metaphor, delight -- these never had gates and never will.
3. **FN-A (threshold) issues get fixed once.** Background delta, S-09 stacking, container width -- once the threshold is right, the gate works.
4. **FN-B (wrong property) is the hardest to fix.** WCAG contrast ratio vs rendered pixel visibility is a property mismatch that requires a fundamentally different measurement approach.
5. **REFINE cycles dramatically reduce PGS.** The yegge-gas-town initial had PGS ~0.50; after REFINE, ~0.20. REFINE closes the perception gap that gates cannot.

---

## 12. Open Questions and Future Research

1. **Can screenshot pixel analysis create "perceptual gates"?** Instead of measuring CSS properties, analyze the rendered screenshot for contrast, color distribution, visual weight. This would bridge FN-B gaps where the CSS property is wrong but a pixel-level measurement could be right.

2. **Is PGS a leading or lagging indicator?** If PGS predicts PA-05 trajectory (high PGS = PA-05 will improve with REFINE; low PGS = PA-05 is at its ceiling), PGS becomes a strategic metric, not just a diagnostic one.

3. **Should FN-C-UNGATABLE dimensions get proxy gates?** E.g., "metaphor coherence" cannot be gated directly, but "metaphor keyword presence across all scroll thirds" (checking for metaphor-vocabulary words in section headings throughout the page) is a crude proxy. Is a crude proxy better than nothing?

4. **What is the optimal PGS target?** PGS = 0 is impossible (some dimensions are ungatable). PGS = 0.10 may be the theoretical floor. Is there a "good enough" PGS where additional gate investment has diminishing returns?

5. **Does gate coverage CREATE complacency?** If builders know a dimension is gated, do they spend less creative effort on it (trusting the gate to catch problems)? If so, adding gates for currently-ungatable dimensions could REDUCE quality by shifting builder attention away from composition and toward compliance.

---

*End of perception-divergence instrumentation design. 06-perception-divergence.md. ~650 lines covering 7 commissioned topics + 5 additional topics (coverage map, implementation priority, historical validation, open questions, composite schema).*

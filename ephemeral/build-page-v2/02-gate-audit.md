# Gate Audit: 57 Gates -> 28 Survivors

**Auditor:** gate-auditor (Opus)
**Date:** 2026-02-27
**Source files:** gate-runner-spec.md, gate-manifest.json, gate-runner-core.js, 15-process-adversarial.md (Part 1)
**Framework:** Adversarial review's 5-category classification + documented failure mode evidence

---

## Methodology

For each gate, I evaluated:
1. **Documented failure mode** -- has this specific failure actually occurred in a pipeline run?
2. **Generative prevention** -- would a conviction-driven builder naturally avoid this failure?
3. **Cost of checking** -- trivial (text scan) vs. moderate (Playwright DOM) vs. expensive (multi-step)?
4. **Cost of missing** -- catastrophic (inaccessible page) vs. significant (perceptual failure) vs. cosmetic?

Gates survive if they catch **empirically proven failures that the generative frame cannot prevent**. Gates are stripped if they measure proxies, track process artifacts, or catch failures the conviction brief structurally prevents.

---

## SURVIVING GATES: 28 TOTAL

### Category A: Physics Gates (2 gates) -- KEEP, non-negotiable

| Gate | Name | Current Tier | New Tier | Justification |
|------|------|-------------|----------|---------------|
| **GR-60** | WCAG Contrast | REQUIRED | **REQUIRED** | Gas Town incident: illegible text ranked Fix #5 behind imperceptible CSS. Accessibility law, not design preference. Conviction-driven builders CAN produce beautiful dark aesthetics that fail WCAG. Physics gates are orthogonal to creative intent. |
| **GR-67** | Footer Text Size | RECOMMENDED | **REQUIRED** | Footer text < 11px is a readability failure that builders routinely produce because footer is low-attention. Proven failure. Trivial to check. |

---

### Category B: Identity Gates (6 gates) -- KEEP core, demote cosmetic

| Gate | Name | Current Tier | New Tier | Justification |
|------|------|-------------|----------|---------------|
| **GR-03** | Container Width | REQUIRED | **REQUIRED** | THE primary Phase D failure mode -- 4/5 pages violated 940-960px. Container width is a number, not a sensory experience. The world-description cannot encode it experientially. Proven, repeated failure. |
| **GR-06** | Font Trinity | REQUIRED | **REQUIRED** | Structural pattern that is genuinely non-obvious. A builder CAN inhabit the world and still use 4 typefaces or miss one of the 3 required families. Checks rendered fonts via `document.fonts.check()`. |
| **GR-08** | No Decorative Elements | REQUIRED | **REQUIRED** | No standalone HRs, empty spacer divs, icon-only decorative elements. These are identity-level prohibitions that builders may introduce for convenience. |
| **GR-09** | Border Weight Hierarchy | REQUIRED | **REQUIRED** | 4px/3px/1px hierarchy encodes structural meaning. A builder who inhabits the world can still use 2px borders or inconsistent weights. Non-obvious constraint. |
| **GR-10** | Cross-Page DNA | REQUIRED | **REQUIRED** | Skip link, heading hierarchy, callout borders, ::selection red, :focus-visible, p max-width 70ch, body line-height >= 1.6, h3 italic, header dark bg + red border. These are cross-page consistency markers that no single conviction brief can encode. |
| **GR-05** | Warm Palette | REQUIRED | **REQUIRED** | Cold colors (B > R+10 AND B > G+10) violate the design system's warm identity. While the world-description says "warm," RGB arithmetic is not experiential. Absorbs GR-07 (no pure B/W) per Wave 0. |

---

### Category C: Perception Threshold Gates (6 gates) -- KEEP all, highest-value category

| Gate | Name | Current Tier | New Tier | Justification |
|------|------|-------------|----------|---------------|
| **GR-11** | Background Delta | REQUIRED | **REQUIRED** | Adjacent zone bg delta >= 15 RGB. THE project's defining failure mode: Flagship backgrounds differed by 1-8 RGB points (imperceptible). LLMs cannot perceive CSS -- they write hex values and cannot tell if the difference is visible. Empirically derived threshold. |
| **GR-13** | Stacked Gap (CSS) | REQUIRED | **REQUIRED** | CSS property sum (mb+pb+mt+pt) at boundaries <= 120px. Created specifically for the stacked gap loophole: individual values pass GR-15 but sum to 210-276px voids. Proven failure. |
| **GR-14** | Stacked Gap (Visual) | REQUIRED | **REQUIRED** | getBoundingClientRect gap at boundaries <= 150px. Complementary to GR-13: CSS values can pass while visual measurement exceeds limits. Both needed. |
| **GR-15** | Single Margin | REQUIRED | **REQUIRED** | No single margin/padding > 96px. Catches gross spacing errors. Auto-centering margins excluded (B-05 fix). |
| **GR-44** | Trailing Void | REQUIRED | **REQUIRED** | Distance from last visible content to body bottom <= 300px. Catches pages that end with hundreds of pixels of blank space. |
| **GR-18** | Ghost Mechanisms | REQUIRED | **REQUIRED** | Zero sub-perceptual borders (<0.5px) or opacity (<0.1). Promoted to REQUIRED (SIG-05) because ghost mechanisms are the #1 proven failure mode. Builders spend CSS budget on changes no human can perceive. |

---

### Category D: Anti-Pattern Gates (1 gate) -- KEEP typography, strip proxies

| Gate | Name | Current Tier | New Tier | Justification |
|------|------|-------------|----------|---------------|
| **GR-45** | Typography Variation | RECOMMENDED | **RECOMMENDED** | >= 2 distinct H2 font-size bands. Typography monotony (all 16px/400) was the Flagship's canonical failure. A builder CAN inhabit the world and still use one font-size everywhere. Low-cost check, real failure mode. |

---

### Category E: Experiential Enforcement Gates (3 gates) -- KEEP, Gas Town incident gates

| Gate | Name | Current Tier | New Tier | Justification |
|------|------|-------------|----------|---------------|
| **GR-61** | DPR Validation | REQUIRED | **REQUIRED** | `window.devicePixelRatio === 1` before screenshot capture. Without this, screenshots are at wrong scale and PA auditors see a distorted page. Infrastructure gate, no creative cost. |
| **GR-62** | Screenshot Quality | REQUIRED | **REQUIRED** | Per viewport: min 3 PNGs, no 2+ consecutive blanks, blank ratio <= 20%. Prevents deploying PA auditors on blank/corrupt screenshots. Infrastructure gate. |
| **GR-63** | Builder Experiential Marker | REQUIRED | **REQUIRED** | HTML contains `<!-- EXPERIENTIAL-CHECK: -->` with >= 100 chars mentioning legibility + visual clarity. Evidence the builder actually looked at their own work. Gas Town incident: the builder never self-checked. |

---

### Category F: Meta Gates (2 gates) -- KEEP coverage + usability

| Gate | Name | Current Tier | New Tier | Justification |
|------|------|-------------|----------|---------------|
| **GR-48** | Gate Coverage | REQUIRED | **REQUIRED** | All surviving REQUIRED gates have results. Without this, gates silently not running is worse than them failing. The meta-gate that validates the gate runner itself. Self-referential, excluded from its own coverage array. |
| **GR-64** | Usability Priority Verification | REQUIRED | **REQUIRED** | If >= 3/9 auditors flagged usability issues, Weaver Fix #1 must contain usability term. Ensures usability issues are not buried. In the 2-auditor standard mode, threshold adjusts to >= 1/2. |

---

### Category G: Brief Verification Gates (4 gates) -- KEEP structural checks

| Gate | Name | Current Tier | New Tier | Justification |
|------|------|-------------|----------|---------------|
| **BV-01** | Tier Line Budget | REQUIRED (BV) | **REQUIRED (BV)** | Brief has minimum lines per tier section. Catches truncated or empty briefs before they reach the builder. |
| **BV-02** | Background Delta Verification | REQUIRED (BV) | **REQUIRED (BV)** | Brief-specified background hex values have >= 15 RGB delta between adjacent zones. Catches the perception failure AT THE BRIEF LEVEL before it propagates to HTML. |
| **BV-03** | Forbidden Spec Language | REQUIRED (BV) | **REQUIRED (BV)** | Brief does not contain specification language ("must," "required," "shall") in creative sections. Catches compliance creep in the conviction brief. |
| **BV-04** | Component Reference Validity | REQUIRED (BV) | **REQUIRED (BV)** | Components referenced in brief exist in components.css. Catches briefs that reference nonexistent components. |

---

### Category H: Builder Narration Gates (4 gates) -- KEEP for compression loss defense

| Gate | Name | Current Tier | New Tier | Justification |
|------|------|-------------|----------|---------------|
| **BV-08** | Brief-Output Diff | RECOMMENDED (BV) | **RECOMMENDED** | >= 80% coverage across 6 dimensions comparing brief spec to HTML/CSS output. Catches what the builder dropped during compression. droppedItems array feeds IMPROVE builder. D2 crack was a proven failure mode: builders DROP spec items silently. Despite the adversarial review's philosophical concern about "compliance checking a generative process," this gate catches REAL losses. |
| **GR-83** | INTENT Comment Count | RECOMMENDED | **RECOMMENDED** | >= 15 INTENT comments with disposition coverage. Enables BV-08 to distinguish deliberate omissions from accidental losses. Without this, BV-08 has false positives. |
| **GR-84** | IMPROVEMENTS Comment | RECOMMENDED | **RECOMMENDED** | HTML contains `<!-- IMPROVEMENTS: -->` with >= 5 items, >= 1 HIGH. Builder self-assessment of what needs work. Feeds IMPROVE cycle decision. SIG-01. |
| **GR-43** | Self-Evaluation Comment | RECOMMENDED | **RECOMMENDED** | HTML contains `<!-- SELF-EVALUATION: -->`. Basic builder self-reflection marker. Pairs with GR-63 experiential marker but checks a different dimension (evaluation vs. experiential use). |

---

## SURVIVING GATE SUMMARY

| Category | Gates | Count |
|----------|-------|-------|
| **A: Physics** | GR-60, GR-67 | 2 |
| **B: Identity** | GR-03, GR-05, GR-06, GR-08, GR-09, GR-10 | 6 |
| **C: Perception** | GR-11, GR-13, GR-14, GR-15, GR-18, GR-44 | 6 |
| **D: Anti-Pattern** | GR-45 | 1 |
| **E: Experiential** | GR-61, GR-62, GR-63 | 3 |
| **F: Meta** | GR-48, GR-64 | 2 |
| **G: Brief Verification** | BV-01, BV-02, BV-03, BV-04 | 4 |
| **H: Builder Narration** | BV-08, GR-43, GR-83, GR-84 | 4 |
| **TOTAL SURVIVING** | | **28** |

**Tier breakdown of survivors:**
- REQUIRED: 19 (GR-03, GR-05, GR-06, GR-08, GR-09, GR-10, GR-11, GR-13, GR-14, GR-15, GR-18, GR-44, GR-60, GR-61, GR-62, GR-63, GR-48, GR-64, GR-67)
- RECOMMENDED: 5 (GR-45, GR-43, GR-83, GR-84, BV-08)
- REQUIRED (BV): 4 (BV-01, BV-02, BV-03, BV-04)

---

## DEMOTED TO ADVISORY: 7 GATES

These gates are useful diagnostics but should not fail a build. Run them. Report results. Do NOT block on failure.

| Gate | Name | Current Tier | Reason for Demotion |
|------|------|-------------|---------------------|
| **GR-01** | Border Radius Zero | REQUIRED | The world-description ("every surface is sharp, corners are cut not curved") structurally prevents this. In actual pipeline runs, builders given conviction briefs have NEVER produced border-radius. The gate is catching a failure that the generative frame actively prevents. Diagnostic value only. |
| **GR-02** | Box Shadow None | REQUIRED | Same reasoning as GR-01. "Nothing floats, light falls directly" prevents box-shadow. Theoretical failure mode in practice. |
| **GR-04** | No Gradients | REQUIRED | Same reasoning. Flat surfaces are the world's physics. No builder who inhabits the world reaches for gradients. |
| **GR-07** | No Pure B/W | RECOMMENDED | Already demoted from REQUIRED. Absorbed by GR-05 warm palette check. Redundant. |
| **GR-20** | Structural Echo | RECOMMENDED | < 3 consecutive sections with identical bg+padding+border. A conviction brief that describes a multi-zone arc structurally prevents echo. Diagnostic only. |
| **GR-51** | Bg Delta Distribution | RECOMMENDED | >= 50% of deltas >= 25 RGB. Aspirational quality gate, not failure-prevention. Measures ceiling, not floor. |
| **GR-55** | Multi-Coherence Channel Count | RECOMMENDED | >= 3 perceptible CSS channel differences per boundary. Aspirational quality gate. Promoted to RECOMMENDED in Pipeline v4 but still measures ceiling (how rich is the page?) not floor (does the page fail?). |

---

## STRIPPED: 22 GATES

These gates are removed entirely from the new gate runner. They measure proxies, track process artifacts, or catch failures that either never occur or are better caught by the PA.

### Process-Tracking Meta Gates (9 gates -- STRIPPED)

| Gate | Name | Current Tier | Reason for Stripping |
|------|------|-------------|---------------------|
| **GR-49** | Result File Integrity | RECOMMENDED | Checks for exactly 1 result file, consistent IDs, no duplicates. Process hygiene, not page quality. The new simplified pipeline produces fewer artifacts. |
| **GR-50** | Conviction Statement | ADVISORY | `<!-- CONVICTION: -->` comment with >= 3 sentences. In the new single-window model, the builder derives their own conviction. Checking for a conviction COMMENT in the HTML is ceremony. |
| **GR-78** | Residual Artifact | RECOMMENDED | Validates `<!-- RESIDUAL: -->` comment in IMPROVE builds. Process tracking for the iteration system. With max 1 REFINE cycle as default, this is overhead. |
| **GR-79** | IMPROVE Completion | REQUIRED | Verifies all IMPROVE iteration artifacts exist with correct suffix. Pure process compliance. The orchestrator can check this procedurally without a formal gate. |
| **GR-80** | Iteration Log Auto-Fill | RECOMMENDED | Auto-fills the execution tracker iteration log. Process documentation, not page quality. The tracker is stripped in the new pipeline. |
| **GR-81** | Prediction Suppression | ADVISORY | Flags predictive PA-05 language in weaver reports. Meta-gate checking the Weaver's language. With the Weaver optional (standard builds skip it), this gate has no target. |
| **GR-82** | Finding Status Map | RECOMMENDED | Verifies Finding Status Map in weaver report for cycle >= 2. Process-tracking for multi-cycle iteration. Stripped with multi-cycle default. |
| **BV-06** | Anti-Regression Language | BV | Scans MANIFEST.md + orchestrator for regression language. Checks the SPEC FILES, not the page. A self-referential meta-gate for spec integrity that the new pipeline replaces with a new spec. |
| **BV-07** | Builder Input Budget | BV | Enforces 2,500-line ceiling on builder input. The new single-window model has a different input structure. This gate needs redesign, not carry-forward. |

### Proxy Structural Gates (6 gates -- STRIPPED)

| Gate | Name | Current Tier | Reason for Stripping |
|------|------|-------------|---------------------|
| **GR-52** | Section Height Variation | RECOMMENDED | >= 3 distinct height bands. Proxy measurement: section height variation does NOT mean the page is good. Flat pages with varied section heights still look flat. The PA catches perceptual monotony directly. |
| **GR-53** | Density Arc Direction | ADVISORY | Densest section is not first or last. Theoretical gate with no documented failure. THEORETICAL evidence only. The conviction brief's compositional arc handles this. |
| **GR-66** | Component Class Count | ADVISORY | >= 8 distinct component CSS classes. Component count is a proxy for richness. A page with 12 component classes can still be perceptually flat. The PA catches this. |
| **GR-17** | Density Stacking | RECOMMENDED | Content padding >= 12px, table cell >= 4px. Never documented as a real failure. Padding thresholds are identity-adjacent but catch nothing the perception gates miss. |
| **GR-19** | Threshold Gaming | ADVISORY | < 50% of bg deltas at floor (15-17 RGB). Measures whether backgrounds are BARELY passing GR-11. Interesting diagnostic but ADVISORY was correct. Not worth carrying forward -- BV-08 brief-output diff catches specification compliance more directly. |
| **GR-22** | Color Zone Conflict | ADVISORY | Primary red used for borders, not backgrounds. This is an identity-level concern (red = emphasis, not surface). But the world-description encodes this ("red is the voice of edges"). Cosmetic. |

### Diagnostic-Only Gates (2 gates -- STRIPPED)

| Gate | Name | Current Tier | Reason for Stripping |
|------|------|-------------|---------------------|
| **GR-33** | CSS Naming Mode | DIAGNOSTIC | Reports position-based (Applied) vs. concept-based (Composed) CSS naming. Interesting signal but purely diagnostic. No action attached to result. Information without consequence = ceremony. |
| **GR-34** | Component Modulation | DIAGNOSTIC | Reports whether same component varies across zones. Same reasoning as GR-33. |

### Other Stripped Gates (5 gates)

| Gate | Name | Current Tier | Reason for Stripping |
|------|------|-------------|---------------------|
| **GR-05b** | Sub-Perceptual Cold | ADVISORY | Reports cold colors within sub-perceptual range. Informational-only sub-gate of GR-05. Adds noise without actionable signal. |
| **GR-21** | Cognitive Overload | ADVISORY | <= 6 distinct bg colors per 900px viewport slice. THEORETICAL evidence only. No documented failure. |
| **GR-46** | Print Stylesheet | ADVISORY | >= 1 @media print rule. Nice-to-have, not a quality concern. Ceremony. |
| **BV-05** | Recipe Keyword Scan | REQUIRED (BV) | All 9 dispositions (D-01 through D-09) have >= 1 keyword in brief. The new pipeline restructures the brief format; disposition keywords are an artifact of the old brief architecture. Needs redesign if dispositions survive, not carry-forward. |
| **A-03** | Visible Content Check | UTILITY | No 3+ consecutive screenshots < 5KB. Already covered by GR-62 (screenshot quality). Redundant. |

---

## VERDICT LOGIC (Updated for 28 Gates)

```
RETHINK:
  ANY identity gate FAIL (GR-03, GR-05, GR-06, GR-08, GR-09, GR-10)
  OR 3+ RECOMMENDED gates FAIL

IMPROVE:
  ANY perception gate FAIL (GR-11, GR-13, GR-14, GR-15, GR-18, GR-44, GR-60)
  OR GR-63 FAIL (builder didn't self-check)
  OR GR-64 FAIL + auditor verdict is SHIP
  OR GR-67 FAIL (footer text too small)
  OR BV-08 FAIL (builder dropped spec items -- droppedItems fed to IMPROVE builder)

BLOCK_SCREENSHOTS:
  GR-61 FAIL (DPR not validated)

BLOCK_PA:
  GR-62 FAIL (blank/corrupt screenshots)

INCOMPLETE:
  GR-48 FAIL (missing required gate results)

SHIP/REFINE:
  All required gates PASS + <3 recommended FAIL
  Routing to SHIP vs REFINE decided by PA auditor reports
```

---

## EXECUTION PHASES (Updated)

```
Phase 0: Brief Verification (text-only)
  BV-01, BV-02, BV-03, BV-04
  Input: briefText
  Blocking: ANY FAIL = return brief to assembler

Phase 1: Post-Build Text Scans (no Playwright)
  BV-08, GR-83, GR-84, GR-43
  Input: briefText + htmlText
  Can run in parallel with Playwright setup

Phase 2: Post-Build Playwright Gates
  GR-03, GR-05, GR-06, GR-08, GR-09, GR-10  (Identity)
  GR-11, GR-13, GR-14, GR-15, GR-18, GR-44   (Perception)
  GR-60, GR-67                                  (Physics)
  GR-45                                         (Anti-Pattern)
  GR-63                                         (Experiential)
  Input: Playwright page at 1440px
  Advisory gates (GR-01, GR-02, GR-04, GR-07, GR-20, GR-51, GR-55) run here too if included

Phase 2.5: Pre-Screenshot
  GR-61
  Blocking: FAIL = do NOT capture screenshots

Phase 2.7: Post-Screenshot
  GR-62
  Blocking: FAIL = do NOT deploy PA auditors

Phase 3: Post-Weaver/Post-PA
  GR-64
  Input: auditor reports + weaver/orchestrator report

Phase 4: Meta (AUTOMATIC)
  GR-48
  Input: all previous results
```

---

## NOTES FOR IMPLEMENTATION

1. **Gate count reduction: 57 -> 28 (51% reduction).** The new gate runner is roughly half the size.

2. **Advisory gates remain available.** The 7 demoted gates (GR-01, GR-02, GR-04, GR-07, GR-20, GR-51, GR-55) can be run as diagnostics. They report but never block. They can be included in the gate runner code behind an `includeAdvisory` flag.

3. **BV-05 and BV-07 need redesign.** If the new brief format retains dispositions, BV-05 needs new keywords. If the single-window model changes builder input structure, BV-07 needs a new budget calculation. Neither should be carried forward as-is.

4. **GR-48 coverage array updates.** The coverage array shrinks from 21 REQUIRED gates (excl. self) to 18 REQUIRED gates (excl. self). Update the array.

5. **GR-64 threshold adjusts for 2-auditor standard mode.** Current: >= 3/9 auditors flag usability. New: >= 1/2 auditors flag usability (standard) or >= 3/5 (high-stakes).

6. **Exception patterns carry forward unchanged.** GR-05 code/pre exemption, GR-08 DPR tolerance, GR-11 adjacent-only, GR-15 auto-margin exclusion -- all still apply to surviving gates.

7. **The 28 surviving gates map to ~650 lines of JavaScript** (estimated from gate-runner-core.js proportions). The full gate-runner-core.js is ~2,000 lines; stripping 29 gates and simplifying removes roughly 65%.

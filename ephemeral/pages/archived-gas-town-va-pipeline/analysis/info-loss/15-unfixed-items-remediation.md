# Unfixed Items Remediation: 5 Pipeline v3 Gaps

**Agent:** unfixed-items-remediator (Opus 4.6)
**Date:** 2026-02-24
**Sources:** MANIFEST.md (1,091 lines), 9 artifact files (~6,246 lines total), 02-new-pipeline-architecture.md, 05-propagation-comparison.md, 08-anti-loss-catalog.md, 11-blind-spot-analysis.md
**Scope:** Root cause analysis, concrete fix proposals, and impact assessment for the 5 items Pipeline v3 did NOT fix

---

## Table of Contents

1. [Item 1: Brief-to-HTML Junction (78% Propagation)](#item-1-brief-to-html-junction)
2. [Item 2: L5 VALUES Distribution (226 Lines at 0% Layer Propagation)](#item-2-l5-values-distribution)
3. [Item 3: Gate Runner Execution Coverage (19/42)](#item-3-gate-runner-execution-coverage)
4. [Item 4: Static Routing](#item-4-static-routing)
5. [Item 5: Brief Assembler Verification](#item-5-brief-assembler-verification)
6. [Cross-Cutting Analysis](#cross-cutting-analysis)
7. [Implementation Roadmap](#implementation-roadmap)

---

## Item 1: Brief-to-HTML Junction

**Current State:** 78% propagation at J3 (the weakest junction in Pipeline v3). 50 traceable items in the brief, 39 realized in HTML. 11 items lost or partially lost.

### A. Root Cause Analysis

**Why wasn't this fixed in v3?**

Pipeline v3 dramatically improved this junction relative to v1 (from ~58% estimated to 78% measured), but the remaining 22% loss is STRUCTURAL, not a design gap. The brief-to-HTML junction is fundamentally a GENERATIVE step: the builder creates a new artifact guided by specification, not a TRANSMISSION step where information is copied. Every generative step introduces interpretation variance.

The 22% loss decomposes into four distinct failure modes:

1. **Background color substitution (8 percentage points):** The builder chose different hex values than the brief specified at Z3-Z4 boundaries. The brief specified values with 16 RGB delta (itself an error -- see Item 5), but the builder substituted values with 6-9 RGB delta (below the 15 RGB perception floor). This is a SPECIFICATION CONFLICT: the builder's 80% creative authority (Tier 3) collided with perception threshold requirements (Tier 2). The builder resolved the conflict by prioritizing creative instinct over calibration guidance.

2. **Disposition D-07 partial implementation (5 percentage points):** D-07 (Edge Intentionality) was delivered as prose-only instruction without CSS technique vocabulary. Tier 4 was allocated only 25 lines vs its 40-line budget. D-07 specifically lacked the concrete CSS properties and values that D-04 (Second-Half Moment, at 95% compliance) received.

3. **Component naming divergence (3 percentage points):** The brief specified 8 component class names; the builder used 5 exact names plus 10 adapted variants. Function was preserved but class-name tracking was lost. This is BENIGN loss -- the builder adapted components to zone context as intended.

4. **CSS budget overshoot (6 percentage points):** 1,705 CSS lines vs 800-1,200 target. The builder wrote 42% more CSS than budgeted. This suggests the brief's compositional instructions expanded during interpretation rather than being under-implemented. Not all loss is deficit; some is surplus.

**Is it a design limitation, an execution gap, or a fundamental constraint?**

It is all three, in different proportions:
- **Fundamental constraint (60%):** Generative steps always introduce interpretation variance. The gap between specification and execution IS the space where creativity happens (per blind-spot analysis Paradigm 4). You cannot eliminate this without eliminating the builder's creative contribution.
- **Design limitation (25%):** The specification conflict between creative authority and perception thresholds has no resolution mechanism in the current architecture. The brief says both "you have 80% creative authority" and "backgrounds must differ by 15 RGB" without specifying which wins when they conflict.
- **Execution gap (15%):** Tier 4 under-budgeting is a Brief Assembler quality issue, not an architectural issue.

**Evidence of impact:**
- PA-05 3/4 COMPOSED (not 4/4 DESIGNED) -- the lost 22% likely accounts for the gap
- Background delta violations were the SINGLE largest quality defect in the Gas Town build
- D-07 at 60% is the lowest-scoring individual disposition

### B. Proposed Fix

**Fix 1.1: Specification Conflict Resolution Protocol** (in artifact-tc-brief-template.md and MANIFEST.md)

Add a PRIORITY OVERRIDE rule to the TC Brief Template, after the Tier 2 section:

```
## PRIORITY OVERRIDE
When Tier 3 creative decisions conflict with Tier 2 perception physics:
- Tier 2 WINS for: background deltas, letter-spacing, stacked gaps, single margins
- Tier 3 WINS for: metaphor expression, component selection, layout decisions, color accent choices
- SPECIFICALLY: Zone background hex values specified in Tier 3 MUST satisfy Tier 2 delta requirements.
  If the Brief Assembler specifies a background pair, compute the RGB delta and verify >= 15 before including it.
```

**Files changed:** `artifact-tc-brief-template.md` (add 8 lines after Tier 2 section, line ~55)
**Lines of change:** ~8

**Fix 1.2: Technique Density Guarantee for D-01 through D-08** (in artifact-tc-brief-template.md)

Modify the Tier 4 section header to include a MINIMUM technique density requirement:

```
## TIER 4: DISPOSITION (D-01 through D-08, ~40 lines MINIMUM)

CRITICAL: Each disposition MUST include at least ONE specific CSS property:value pair.
"D-04: Create a second-half moment" = INSUFFICIENT.
"D-04: Create a second-half moment. Technique: dark inversion (background: var(--color-text),
color: var(--bg-primary)) at the zone where argument pivots." = SUFFICIENT.

Brief Assembler: if Tier 4 falls below 35 lines, you are under-specifying technique vocabulary.
```

**Files changed:** `artifact-tc-brief-template.md` (modify Tier 4 header, lines ~114-118)
**Lines of change:** ~12 (replace existing 5 lines with 12)

**Fix 1.3: Background Hex Lock for COMPOSED Mode** (in artifact-tc-brief-template.md Tier 3 section)

In the multi-coherence subsection of Tier 3, add:

```
### Zone Background Assignments (Tier 2 LOCKED)
{For each zone from the Content Map, specify EXACT hex values from artifact-value-tables.md.
These are Tier 2 (non-negotiable), not Tier 3 (creative authority). The builder may modify
accent colors, typography, spacing, and components, but zone background hex values are FIXED.}

Zone 1: {hex_value} ({rgb})
Zone 2: {hex_value} ({rgb}) -- delta from Z1: {N} RGB
[...etc...]

Verify: every adjacent pair has delta >= 15 RGB. Compositional target: >= 25 RGB at 3+ boundaries.
```

**Files changed:** `artifact-tc-brief-template.md` (add ~12 lines to Tier 3 section, after multi-coherence subsection)
**Lines of change:** ~12

### C. Impact on 13 Highly Effective Mechanisms

| # | Mechanism | Impact | Notes |
|---|-----------|--------|-------|
| 1 | MANIFEST structure | PRESERVE | No changes to MANIFEST routing |
| 2 | Artifact separation | PRESERVE | Changes within existing artifacts |
| 3 | Dual-route pattern | STRENGTHEN | Background lock adds a third route (brief-locked + gate-verified) |
| 4 | Fresh-eyes principle | PRESERVE | No changes to PA isolation |
| 5 | Recipe format | PRESERVE | Technique density requirement reinforces recipe format |
| 6 | Gate-hidden-from-builder | PRESERVE | Priority override is in the BRIEF, not in gate format |
| 7 | World-description framing | **RISK** | Background hex lock converts background choice from creative to administrative. MITIGATION: Lock applies ONLY to zone backgrounds; all other color decisions remain creative. Soul remains world-description. |
| 8 | Perception threshold dual-route | STRENGTHEN | Background lock is a THIRD route: brief-locked + builder-calibrated + gate-verified |
| 9 | TC Brief Template | STRENGTHEN | Adds structure that prevents the observed failure |
| 10 | Screenshot pre-capture | PRESERVE | No changes |
| 11 | Content Map | PRESERVE | No changes to content analysis |
| 12 | Tier structure in brief | STRENGTHEN | Priority override clarifies tier hierarchy |
| 13 | Opus model mandate | PRESERVE | No changes |

### D. Implementation Effort

**MEDIUM** (~32 lines across 1 file: artifact-tc-brief-template.md)

### E. Expected Impact on Propagation

- **Current:** 78% at J3 (Brief -> HTML)
- **Expected after fix:** 85-88% at J3
  - Fix 1.1 prevents the specification conflict that caused the 2 CRITICAL losses (E-01, E-02): +4-5 pp
  - Fix 1.2 prevents Tier 4 under-budgeting: +2-3 pp
  - Fix 1.3 eliminates background delta deviation entirely: +3-4 pp
  - Some background loss returns as DIFFERENT creative deviations (generative step variance is irreducible)
- **Confidence:** MODERATE (based on N=1 measurement, root cause analysis is clear, fix addresses identified causes directly)

---

## Item 2: L5 VALUES Distribution

**Current State:** 94 Layer 5 items exist. 34 were rerouted by council (15 to orchestrator, 10 to PA, 9 to documentation). 26 were routed to builder context (via value-tables.md, 226 lines). The remaining ~34 items have unclear routing. Layer 5 as a coherent LAYER is effectively dissolved -- it exists as scattered fragments across multiple agents.

### A. Root Cause Analysis

**Why wasn't this fixed in v3?**

The council's verdict on VALUES (Pattern 5, Contradiction H) deliberately DISSOLVED Layer 5 as a standalone layer. The council reasoned that VALUES items are not a coherent category -- they include calibration ranges (route to builder), quality framework definitions (route to PA), historical data (route to documentation), and planning tools (route to orchestrator). Forcing them into a single layer created a false unity.

This is a DESIGN DECISION, not a design gap. The council explicitly chose distribution over consolidation. The question is whether this decision was correct.

**Evidence of impact:**

The impact is subtle and indirect:
- Value tables (artifact-value-tables.md, 226 lines) reached the builder but were only PARTIALLY EFFECTIVE (M-15 in the anti-loss catalog). The builder exercised 80% creative authority and chose its own values rather than using the pre-computed ones. Only 1/6 boundaries met the >= 25 RGB recommendation.
- The 10 PA-routed VALUES items (quality framework definitions like PA-05 scale, CCS definitions) were NOT incorporated into the PA protocol's question text. PA auditors received questions but not the theoretical framework behind the questions.
- The 15 orchestrator-routed VALUES items (suppressor curves, predicted PA-05 scores, planning data) informed orchestrator decisions but have no traceability -- the orchestrator's mode selection and brief assembly decisions do not explicitly reference these items.

**Is it a design limitation, an execution gap, or a fundamental constraint?**

- **Design decision (70%):** The council made a defensible choice. VALUES is genuinely heterogeneous.
- **Execution gap (30%):** The routing was decided but the RECEIVING artifacts were not updated to fully incorporate the routed items. artifact-pa-protocol.md does not contain the 10 PA-routed quality framework items in its question text. artifact-orchestrator.md does not have a dedicated VALUES integration section for the 15 orchestrator-routed items.

### B. Proposed Fix

**Fix 2.1: VALUES Integration Sections in Receiving Artifacts**

Add a VALUES INTEGRATION section to each receiving artifact, making the rerouted items explicit rather than implicit.

**In artifact-pa-protocol.md** (add after Part 3, before Part 4 auditor assignments):

```
## PART 3.5: QUALITY FRAMEWORK (10 VALUES Items Integrated)

These quality assessment definitions inform how auditors interpret their questions.
They are NOT additional questions -- they are CALIBRATION for existing questions.

PA-05 measures PERCEIVED design quality (not technical compliance).
The 1-4 scale: FLAT (template-generated) / ASSEMBLED (arranged not unified) /
COMPOSED (unified language with intentional transitions) / DESIGNED (every choice
serves THIS content, metaphor is structural).

CCS measures mechanism INTERDEPENDENCE (not count).
Removal test: remove one mechanism -- does quality drop? If yes, mechanisms are
interdependent (high CCS). If no, mechanisms coexist but do not compose (low CCS).
NOTE: CCS is NOT gate-checkable (methodology unstandardized). Use as interpretive
lens only.

Register definitions for compositional assessment:
- Register 1: Identity (the DNA -- tokens, soul constraints)
- Register 2: Composition (the arrangements -- mechanisms, multi-coherence)
- Register 3: Expression (the voice -- metaphor, disposition, emotional arc)
```

**Lines:** ~18 added to artifact-pa-protocol.md

**In artifact-orchestrator.md** (add to Section 0, after master equation):

```
### VALUES Context (15 Planning Items)

These calibrate the orchestrator's expectations and mode decisions:

Historical PA-05 scores (for calibration, not as targets):
- Flagship (checklist, 963 lines, Sonnet builders): 1.5/4
- Middle (recipe, 100 lines, Opus): 4/4 DESIGNED
- CD-006 (collaborative, Opus): ~3/4 COMPOSED (39/40 soul, CEILING tier)
- Gas Town v1 (old pipeline, Opus): 3.5/4

Suppressor removal curve: all 20 suppressors NOW INACTIVE.
Predicted PA-05 with suppressors removed + soul + thresholds: >= 3.0.

Budget expectation: 25-40% of builds may need REFINE or REBUILD (REC-07).
This is NORMAL, not failure.
```

**Lines:** ~16 added to artifact-orchestrator.md

**Fix 2.2: Value Tables Strengthening**

The value tables (226 lines) exist but the builder treats them as optional reference. Strengthen the routing by making value-tables.md an EXPLICIT reference in the builder prompt template (Appendix E of MANIFEST.md), with a specific instruction:

In MANIFEST.md Appendix E, Builder Prompt Template, change:

```
5. Value Tables (artifact-value-tables.md) — CSS reference values (use as REFERENCE, not constraints)
```

to:

```
5. Value Tables (artifact-value-tables.md) — CSS reference values. BACKGROUND COLOR PAIRS are
   Tier 2 LOCKED (see brief). For all OTHER values (spacing, typography, borders): use as
   REFERENCE — your creative judgment applies, but pre-computed values are perceptually validated.
```

**Lines:** ~3 modified in MANIFEST.md

### C. Impact on 13 Highly Effective Mechanisms

| # | Mechanism | Impact | Notes |
|---|-----------|--------|-------|
| 1 | MANIFEST structure | STRENGTHEN | Clarifies routing for previously ambiguous items |
| 2 | Artifact separation | PRESERVE | Items integrated into EXISTING artifacts, not new files |
| 3 | Dual-route pattern | PRESERVE | No change to dual-route architecture |
| 4 | Fresh-eyes principle | PRESERVE | PA quality framework is CALIBRATION, not pipeline context |
| 5 | Recipe format | PRESERVE | No change to recipe format |
| 6 | Gate-hidden-from-builder | PRESERVE | No gate information added to builder-facing content |
| 7 | World-description framing | PRESERVE | No change |
| 8 | Perception threshold dual-route | STRENGTHEN | Value tables strengthened for perception-critical values |
| 9 | TC Brief Template | PRESERVE | No change |
| 10 | Screenshot pre-capture | PRESERVE | No change |
| 11 | Content Map | PRESERVE | No change |
| 12 | Tier structure in brief | PRESERVE | No change |
| 13 | Opus model mandate | PRESERVE | No change |

### D. Implementation Effort

**LOW** (~37 lines across 3 files: artifact-pa-protocol.md, artifact-orchestrator.md, MANIFEST.md)

### E. Expected Impact on Propagation

- **Current:** 0% as a coherent LAYER; individual items at varying rates (value tables PARTIALLY EFFECTIVE per anti-loss catalog)
- **Expected after fix:** 60-70% effective utilization of VALUES items by receiving agents
  - PA quality framework integration improves auditor calibration (hard to measure directly)
  - Orchestrator planning data makes mode selection more evidence-based
  - Background hex lock (from Fix 1.3) converts the critical value-table usage from optional to mandatory
- **Confidence:** LOW-MODERATE (no direct propagation measurement for VALUES items; improvement is inferential)

---

## Item 3: Gate Runner Execution Coverage

**Current State:** 42 gates defined in artifact-gate-runner.md. 19 gates were executed in the Gas Town run. Of the 22 verdict-relevant gates (GR-01 through GR-22), 19 have executable Playwright JavaScript code (86%). The remaining 23 gates (GR-23 through GR-42) are specifications without code, covering preconditions, verdict logic, mode detection, experiments, and policy.

### A. Root Cause Analysis

**Why wasn't this fixed in v3?**

The gate runner coverage issue has TWO distinct causes:

**Cause 1: Category mismatch (fundamental).** 20 of the 23 unexecuted gates are NOT post-build DOM checks. They are:
- **Precondition gates (GR-23 through GR-28):** Check pipeline STATE before building (model = Opus?, content heterogeneous?, brief size cap?, etc.). These cannot be checked with Playwright against the built HTML because they evaluate INPUTS, not OUTPUTS.
- **Verdict gates (GR-29 through GR-32):** These are DECISION RULES, not verification checks. They map PA-05 scores to verdict decisions. They cannot be Playwright code because they operate on PA auditor output, not DOM elements.
- **Mode/Experiment/Policy gates (GR-33 through GR-42):** These are ADVISORY specifications, pipeline meta-rules, and experiment tracking. They are gate-SHAPED but not gate-NATURED.

These 20 gates should never have been in the gate runner specification. They belong in the orchestrator's decision logic (which already implements most of them informally).

**Cause 2: Missing executable code for 3 verdict-relevant gates (execution gap).** GR-19 (threshold gaming), GR-21 (cognitive overload), and GR-22 (color zone conflict) are anti-pattern gates that SHOULD be Playwright-executable but lack code because they are harder to automate:
- GR-19 requires STATISTICAL analysis (">50% of values within 10% of threshold")
- GR-21 requires VIEWPORT ANALYSIS (count distinct visual channels per scroll position)
- GR-22 requires SEMANTIC analysis (is the same color serving conflicting roles?)

**Is it a design limitation, an execution gap, or a fundamental constraint?**

- **Category mismatch (50%):** 20 gates are in the wrong artifact. This is a classification error from the extraction process.
- **Execution gap (30%):** 3 gates need code but lack it due to implementation complexity.
- **Fundamental constraint (20%):** Some gates (GR-21 cognitive overload, GR-22 color zone conflict) resist full automation. Their checks are partially subjective. They will always require hybrid (programmatic + PA) assessment.

**Evidence of impact:**
- Gas Town execution ran only 19 gates but still caught the critical identity and perception issues
- The 3 missing anti-pattern gates (GR-19, GR-21, GR-22) map to OBSERVED failure modes: threshold gaming was the Flagship's dominant defect (ITEM 009, extract-d18-d20.md L1371)
- The gate runner's 68% compliance rating (audit-gate-runner) was inflated by counting unexecutable gates as "non-compliant"

### B. Proposed Fix

**Fix 3.1: Reclassify 20 Non-Executable Gates**

Move GR-23 through GR-42 OUT of artifact-gate-runner.md and INTO artifact-orchestrator.md as "Orchestrator Decision Rules" (not gates). This is a RECLASSIFICATION, not a deletion -- the rules still exist and still govern pipeline behavior, but they are no longer pretending to be Playwright-executable gates.

**In artifact-gate-runner.md:**
- Remove Sections 4-8 (GR-23 through GR-42 definitions): ~225 lines removed
- Update gate summary table: remove 20 rows
- Update header: "42 gates" -> "22 gates (16 REQUIRED + 6 RECOMMENDED)"
- Retain Appendix A (VALUES rerouting) and Appendix B (reclassified items)

**In artifact-orchestrator.md:**
- Add new section "SECTION 9: ORCHESTRATOR DECISION RULES (formerly GR-23 through GR-42)" (~100 lines)
- Organize by execution phase: Pre-Build Checks (GR-23 through GR-28), Verdict Logic (GR-29 through GR-32), Mode Detection (GR-33 through GR-35), Pipeline Policy (GR-36 through GR-42)
- Frame as ORCHESTRATOR LOGIC, not Playwright code

**In MANIFEST.md:**
- Update Section 3 routing table: "42 gates" -> "22 gates" in gate-runner row
- Add "Orchestrator Decision Rules (20)" to orchestrator row
- Update Section 9 coverage verification

**Lines of change:** ~225 removed from artifact-gate-runner.md, ~100 added to artifact-orchestrator.md, ~15 modified in MANIFEST.md. Net: ~110 lines less (simplification).

**Fix 3.2: Write Executable Code for GR-19, GR-21, GR-22**

**GR-19 (Threshold Gaming Detection):**

```javascript
// GR-19: Threshold Gaming Detection
// PASS if values show intentional spread; FAIL if >50% cluster at floor
async function checkThresholdGaming(page) {
  const sections = await page.$$('section, [class*="zone"], [class*="section"]');
  const bgColors = [];
  for (const section of sections) {
    const bg = await section.evaluate(el => getComputedStyle(el).backgroundColor);
    bgColors.push(parseRGB(bg));
  }

  let floorCount = 0;
  let totalPairs = 0;
  for (let i = 0; i < bgColors.length - 1; i++) {
    const delta = maxChannelDelta(bgColors[i], bgColors[i+1]);
    if (delta > 0) { // only count actual transitions
      totalPairs++;
      if (delta >= 15 && delta <= 17) floorCount++; // within 10% of 15 RGB floor
    }
  }

  const floorRatio = totalPairs > 0 ? floorCount / totalPairs : 0;
  return {
    gate: 'GR-19',
    status: floorRatio <= 0.50 ? 'PASS' : 'FAIL',
    measured: { floorRatio, floorCount, totalPairs },
    threshold: { maxFloorRatio: 0.50 },
    evidence: 'OBSERVED'
  };
}
```

**GR-21 (Cognitive Overload -- Simplified):**

```javascript
// GR-21: Cognitive Overload (Simplified)
// Count distinct visual signals within any 900px vertical slice
// PASS if <= 4 distinct background colors per viewport
async function checkCognitiveOverload(page) {
  const viewportHeight = 900;
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  let maxDistinct = 0;

  for (let y = 0; y < pageHeight; y += viewportHeight / 2) {
    const colorsInView = await page.evaluate((scrollY, vh) => {
      const colors = new Set();
      const els = document.querySelectorAll('section, [class*="zone"], header, footer, main');
      els.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < scrollY + vh && rect.bottom > scrollY) {
          colors.add(getComputedStyle(el).backgroundColor);
        }
      });
      return colors.size;
    }, y, viewportHeight);
    maxDistinct = Math.max(maxDistinct, colorsInView);
  }

  return {
    gate: 'GR-21',
    status: maxDistinct <= 4 ? 'PASS' : 'FAIL',
    measured: { maxDistinctBackgrounds: maxDistinct },
    threshold: { maxDistinct: 4 },
    evidence: 'THEORETICAL'
  };
}
```

**GR-22 (Color Zone Conflict -- Simplified):**

```javascript
// GR-22: Color Zone Conflict
// Check if primary red (#E83025) is used consistently (emphasis, not decoration)
async function checkColorZoneConflict(page) {
  const primaryUses = await page.evaluate(() => {
    const primary = '#E83025';
    const primaryRGB = 'rgb(232, 48, 37)';
    const uses = { border: 0, text: 0, background: 0, accent: 0 };

    document.querySelectorAll('*').forEach(el => {
      const style = getComputedStyle(el);
      if (style.color === primaryRGB) uses.text++;
      if (style.backgroundColor === primaryRGB) uses.background++;
      if (style.borderColor.includes('232') ||
          style.borderLeftColor === primaryRGB ||
          style.borderBottomColor === primaryRGB) uses.border++;
    });
    return uses;
  });

  // Primary should be used for borders/emphasis, not backgrounds (except header)
  const bgHeavy = primaryUses.background > 2; // more than header + 1 accent
  return {
    gate: 'GR-22',
    status: bgHeavy ? 'FAIL' : 'PASS',
    measured: primaryUses,
    threshold: { maxBackgroundUses: 2 },
    evidence: 'OBSERVED'
  };
}
```

**Files changed:** artifact-gate-runner.md (add ~90 lines of executable code for 3 gates)
**Lines of change:** ~90 added

**Fix 3.3: Gate Coverage Meta-Check**

Add to the gate runner's execution protocol (top of artifact-gate-runner.md):

```javascript
// Meta-gate: verify all 22 gates produced results
function verifyGateCoverage(results) {
  const expectedGates = Array.from({length: 22}, (_, i) => `GR-${String(i+1).padStart(2, '0')}`);
  const executedGates = results.map(r => r.gate);
  const missing = expectedGates.filter(g => !executedGates.includes(g));

  return {
    gate: 'META-COVERAGE',
    status: missing.length === 0 ? 'PASS' : 'FAIL',
    measured: { executed: executedGates.length, expected: 22, missing },
    threshold: { maxMissing: 0 }
  };
}
```

**Lines of change:** ~15 added to artifact-gate-runner.md

### C. Impact on 13 Highly Effective Mechanisms

| # | Mechanism | Impact | Notes |
|---|-----------|--------|-------|
| 1 | MANIFEST structure | STRENGTHEN | Routing table becomes more accurate (22 gates, not 42) |
| 2 | Artifact separation | STRENGTHEN | Gate runner becomes purely executable code; decision logic goes to orchestrator |
| 3 | Dual-route pattern | PRESERVE | No change |
| 4 | Fresh-eyes principle | PRESERVE | No change |
| 5 | Recipe format | PRESERVE | No change |
| 6 | Gate-hidden-from-builder | PRESERVE | No change |
| 7 | World-description framing | PRESERVE | No change |
| 8 | Perception threshold dual-route | PRESERVE | No change |
| 9 | TC Brief Template | PRESERVE | No change |
| 10 | Screenshot pre-capture | PRESERVE | No change |
| 11 | Content Map | PRESERVE | No change |
| 12 | Tier structure in brief | PRESERVE | No change |
| 13 | Opus model mandate | PRESERVE | No change |

### D. Implementation Effort

**HIGH** (~320 lines: 225 removed + 100 added to orchestrator + 90 added to gate runner + 15 meta-check + 15 MANIFEST updates)

But this is a SIMPLIFICATION, not an addition. The gate runner becomes smaller and more focused. The orchestrator gains explicit decision rules it was already following implicitly.

### E. Expected Impact on Propagation

- **Current:** 19/42 gates executed (45%); 19/22 verdict-relevant gates have code (86%)
- **Expected after fix:** 22/22 gates executable, 22/22 executed per run (100%)
  - Gate coverage meta-check prevents silent skips
  - GR-19 catches threshold gaming (the Flagship's dominant defect)
  - GR-21 catches cognitive overload (prevents zone-boundary confusion)
  - GR-22 catches color semantic conflicts
- **Confidence:** HIGH (the fix is primarily reclassification + code writing; the architectural approach is proven)

---

## Item 4: Static Routing

**Current State:** MANIFEST.md Section 3 contains a FIXED artifact-to-agent routing table. Every pipeline run uses the same routing regardless of content type (PROSE/MIXED/VISUAL), complexity, or mode (APPLIED/COMPOSED). The Content Analyst's output determines mode but does NOT alter which artifacts reach which agents or how much of each artifact is used.

### A. Root Cause Analysis

**Why wasn't this fixed in v3?**

Static routing was a DELIBERATE SIMPLIFICATION. The council's design philosophy prioritized predictability over adaptability. A fixed routing table means every pipeline run follows the same path, making it auditable, debuggable, and reproducible. Dynamic routing would introduce a combinatorial explosion of possible paths, each needing separate validation.

The cost of this simplification is real but bounded:

1. **PROSE content gets the full compositional framework** (Tier 3, ~50 lines of multi-coherence, metaphor, density arc) even when it has low structural heterogeneity and no metaphor viability. This is wasted builder attention for APPLIED-mode content.

2. **VISUAL content gets the same text-focused recipe** (typography emphasis, line-height guidance, paragraph measure limits) when it needs image-handling, gallery layouts, and full-width media treatment. The recipe's PHASE 2 creative decisions are TEXT-centric.

3. **COMPOSED mode receives the same artifact set as APPLIED mode.** COMPOSED should receive MORE compositional intelligence: the full multi-coherence framework, CD-006 as a MANDATORY (not optional) reference, and the zone-modulation examples. Currently, CD-006 is "optional" for all modes.

**Is it a design limitation, an execution gap, or a fundamental constraint?**

- **Design limitation (80%):** The routing table COULD be parameterized by mode and content type. This was not done because Pipeline v3 has N=1 runs and the design system currently produces only PROSE and MIXED content. VISUAL content does not exist yet.
- **Fundamental constraint (20%):** Full dynamic routing requires content-type-specific recipes, which do not exist. You cannot route to "the VISUAL recipe" if no VISUAL recipe has been written.

**Evidence of impact:**

The impact in the Gas Town run was MINIMAL because Gas Town is MIXED content in COMPOSED mode -- the routing table's default case. The impact would be larger for:
- PROSE-only content (pure article, no code blocks): Tier 3 multi-coherence boundary mapping would be wasted attention
- VISUAL content (if it existed): the entire recipe would be mismatched
- APPLIED mode: CD-006 reference is wasted (CD-006 is a COMPOSED artifact)

### B. Proposed Fix

**Fix 4.1: Mode-Conditional Builder Input Set** (in MANIFEST.md Appendix E, Builder Prompt Template)

Rather than full dynamic routing (which requires content-type-specific recipes that do not exist), add a MODE CONDITIONAL to the builder's input set:

In MANIFEST.md Appendix E, Builder Prompt Template:

```
REFERENCE FILES (mode-conditional):
{tokens.css content}
---
{components.css content}
---
{mechanism-catalog.md content}
---
{IF MODE == COMPOSED:
  {value-tables.md content — FULL, including all 20 background pairs}
  ---
  {CD-006 reference HTML — MANDATORY for COMPOSED mode. Study zone modulation patterns.}
}
{IF MODE == APPLIED:
  {value-tables.md content — ABBREVIATED: Section 1 (backgrounds) + Section 2 (spacing) only}
  ---
  {CD-006 reference HTML — OMITTED for APPLIED mode}
}
```

**Files changed:** MANIFEST.md Appendix E (~15 lines modified)

**Fix 4.2: Content-Type Conditional in TC Brief Template** (in artifact-tc-brief-template.md, Tier 3)

Add a content-type conditional to Tier 3 synthesis instructions:

```
### Tier 3 Content-Type Adaptation

{IF CONTENT TYPE == PROSE:
  - Multi-coherence: focus on TYPOGRAPHY and SPACING channels (backgrounds less variable in uniform prose)
  - Metaphor: may be ATMOSPHERIC rather than STRUCTURAL (prose affords mood, not architecture)
  - Density arc: driven by ARGUMENT structure, not content-type shifts
  - Reduce boundary map to 3-4 boundaries (prose has fewer natural section breaks)
}
{IF CONTENT TYPE == MIXED:
  - Full multi-coherence: all 6 channels active
  - Metaphor: aim for STRUCTURAL (mixed content affords architectural metaphor)
  - Density arc: driven by content-type shifts (narrative -> code -> reference)
  - Full boundary map: 4-6 boundaries with per-boundary channel specifications
}
{IF CONTENT TYPE == VISUAL:
  - Multi-coherence: focus on LAYOUT and SPACING channels (image-driven, not typography-driven)
  - Reduce typography guidance; increase layout guidance (gallery, full-width, captions)
  - Components: prioritize image containers, captions, lightbox over callouts, code blocks
}
```

**Files changed:** artifact-tc-brief-template.md (~20 lines added to Tier 3 section)

### C. Impact on 13 Highly Effective Mechanisms

| # | Mechanism | Impact | Notes |
|---|-----------|--------|-------|
| 1 | MANIFEST structure | **RISK** | Mode-conditional routing adds complexity to the routing table. MITIGATION: Conditional is in the PROMPT TEMPLATE, not the routing table itself. Routing table stays fixed; templates have conditionals. |
| 2 | Artifact separation | PRESERVE | No new artifacts created |
| 3 | Dual-route pattern | PRESERVE | No change |
| 4 | Fresh-eyes principle | PRESERVE | No change |
| 5 | Recipe format | PRESERVE | Content-type adaptations are in recipe format |
| 6 | Gate-hidden-from-builder | PRESERVE | No change |
| 7 | World-description framing | PRESERVE | No change |
| 8 | Perception threshold dual-route | PRESERVE | No change |
| 9 | TC Brief Template | STRENGTHEN | Template becomes content-type-aware |
| 10 | Screenshot pre-capture | PRESERVE | No change |
| 11 | Content Map | STRENGTHEN | Content type determination (already in Phase 0) now has downstream routing consequences |
| 12 | Tier structure in brief | PRESERVE | Tier structure unchanged; Tier 3 CONTENT varies by type |
| 13 | Opus model mandate | PRESERVE | No change |

### D. Implementation Effort

**LOW-MEDIUM** (~35 lines across 2 files: MANIFEST.md and artifact-tc-brief-template.md)

### E. Expected Impact on Propagation

- **Current:** Static routing has no measured propagation deficit for MIXED content (the only tested type)
- **Expected after fix:** For MIXED content: negligible improvement (already optimized). For PROSE content (untested): estimated +5-10% from reduced attention waste. For COMPOSED mode specifically: +3-5% from mandatory CD-006 reference (currently optional, frequently omitted).
- **Confidence:** LOW (no empirical data on PROSE or VISUAL content types; improvement estimates are THEORETICAL)

---

## Item 5: Brief Assembler Verification

**Current State:** The Brief Assembler receives Content Map + TC Brief Template + multiple source files (~2,100 lines total) and produces an Execution Brief (~100-165 lines, Gas Town: 174 lines). No mechanism verifies that the brief accurately represents its inputs. The Content-Form Fit Gate (GR-24) exists but is ADVISORY and has no executable code.

### A. Root Cause Analysis

**Why wasn't this fixed in v3?**

The Brief Assembler was treated as a TRUSTED agent. The pipeline architecture assumes that if the Brief Assembler receives the right inputs and the right template, it will produce a correct brief. This assumption was partially validated (Tier 1: 100%, Tier 3: 100% "exceptional") but also partially violated (Tier 4: 62.5%, Content Map appendix: ~12/30-50 lines, RGB delta computation error).

The critical failure was the RGB delta computation: the Brief Assembler specified background color pairs with a CLAIMED delta of 16 RGB but ACTUAL delta of 11 RGB. This error propagated through the builder (who trusted the brief's delta claims) to the final HTML (where gates caught the below-threshold backgrounds). The Brief Assembler's delta computation was never verified.

**Is it a design limitation, an execution gap, or a fundamental constraint?**

- **Design limitation (60%):** The pipeline has no INTERMEDIATE verification step between brief assembly and building. This is the "missing circuit breaker" identified in the blind-spot analysis (Section 4, distributed systems perspective). The compiler analogy: going directly from source to machine code with no intermediate representation verification.
- **Execution gap (30%):** GR-24 (Content-Form Fit Gate) was designed as a brief verification gate but classified as ADVISORY with no code. Writing the code was deferred.
- **Fundamental constraint (10%):** Some brief quality dimensions (compositional synthesis quality, metaphor mapping quality) cannot be verified programmatically. They are judgment calls.

**Evidence of impact:**

The Brief Assembler's unverified errors caused the pipeline's TWO MOST CRITICAL losses:
- E-01: Z3-Z4 background delta 6 RGB (brief claimed ~16, actual ~11, builder produced ~6)
- E-02: Z2-Z3 background delta 9 RGB (brief claimed adequate, actual inadequate)

These two errors accounted for 8 of the 22 percentage points of loss at Junction 3. If the brief's delta claims had been verified, the builder would have received correct background specifications, and J3 propagation would have been ~86% instead of 78%.

### B. Proposed Fix

**Fix 5.1: Brief Verification Gate (Programmatic)**

Add a new gate that runs BETWEEN Phase 1 (Brief Assembly) and Phase 2 (Building). This gate verifies the brief's STRUCTURAL and NUMERIC claims before the builder sees them.

**In artifact-gate-runner.md** (add as new Section 2.5, between Perception Gates and Anti-Pattern Gates):

```
## SECTION 2.5: BRIEF VERIFICATION GATES (Pre-Build)

These run AFTER the Brief Assembler completes (Phase 1) and BEFORE the Builder starts (Phase 2).
They verify the brief's structural completeness and numeric accuracy.

### BV-01: Tier Line Budget Compliance
- Description: Each tier must meet >= 80% of its line budget
- Check method: Parse brief by tier headers ("TIER 1:", "TIER 2:", etc.), count lines per tier
- Thresholds: T1 >= 12 lines, T2 >= 6 lines, T3 >= 40 lines, T4 >= 32 lines, Content Map >= 24 lines
- Pass: All tiers at or above 80% of budget
- Fail: Any tier below 80%
- Action on fail: Return to Brief Assembler with specific under-budget tiers identified

### BV-02: Background Delta Verification
- Description: Every background hex pair specified in the brief must have true delta >= 15 RGB
- Check method: Extract all hex color pairs from the brief's zone background specifications.
  Compute actual RGB delta: max(|R1-R2|, |G1-G2|, |B1-B2|) for each pair.
- Pass: All specified pairs have delta >= 15
- Fail: Any pair has delta < 15
- Action on fail: Replace failing pair with closest valid pair from artifact-value-tables.md

### BV-03: Recipe Format Verification
- Description: Brief must use recipe verbs, not checklist verbs
- Check method: Count recipe indicators ("Build", "Create", "Derive", "Map", "Read", "Select", "Deploy")
  vs checklist indicators ("Verify", "Fail if", "Must be", "Ensure").
  Ratio must be >= 3:1 recipe:checklist.
- Pass: Recipe indicators outnumber checklist indicators 3:1 or more
- Fail: Ratio below 3:1
- Action on fail: Return to Brief Assembler with checklist language highlighted

### BV-04: Suppressor Scan
- Description: Brief must contain zero known suppressor patterns
- Check method: Scan for: "sample 2-4" (S-01), raw prohibition language ("Do NOT", "NEVER",
  "PROHIBITED") outside Tier 1 world-description (S-02), "Verify/Fail if/Must be" in
  builder-facing sections (S-11), count-gates (">=3 channels", ">=14 mechanisms") (S-08)
- Pass: Zero suppressor patterns detected
- Fail: Any suppressor pattern found
- Action on fail: Return to Brief Assembler with suppressor instances identified
```

This is NOT Playwright code (the brief is a text file, not a DOM). These are string-parsing checks executed by the orchestrator as Python/JavaScript after receiving the brief from the Brief Assembler and before spawning the Builder.

**Implementation code:**

```javascript
function verifyBrief(briefText) {
  const results = [];

  // BV-01: Tier line budgets
  const tiers = briefText.split(/^## TIER \d/m);
  const tierBudgets = { 1: 12, 2: 6, 3: 40, 4: 32 };
  // ... parse and count lines per tier

  // BV-02: Background delta verification
  const hexPattern = /#[0-9A-Fa-f]{6}/g;
  const hexPairs = extractAdjacentHexPairs(briefText);
  for (const [a, b] of hexPairs) {
    const delta = maxChannelDelta(parseHex(a), parseHex(b));
    if (delta < 15) {
      results.push({ gate: 'BV-02', status: 'FAIL', pair: [a, b], delta });
    }
  }

  // BV-03: Recipe format
  const recipeVerbs = (briefText.match(/\b(Build|Create|Derive|Map|Read|Select|Deploy|Assess)\b/gi) || []).length;
  const checklistVerbs = (briefText.match(/\b(Verify|Fail if|Must be|Ensure|PROHIBITED)\b/gi) || []).length;

  // BV-04: Suppressor scan
  const suppressors = [];
  if (/sample 2-4/i.test(briefText)) suppressors.push('S-01');
  if (/\b(Do NOT|NEVER|PROHIBITED)\b/.test(briefText.replace(/TIER 1[\s\S]*?TIER 2/m, ''))) suppressors.push('S-02');
  if (/>=?\s*\d+\s*(channels|mechanisms)/i.test(briefText)) suppressors.push('S-08');

  return results;
}
```

**Files changed:** artifact-gate-runner.md (~60 lines of specification + ~40 lines of implementation code)
**Lines of change:** ~100 added

**Fix 5.2: Brief Assembly Feedback Loop**

Add to MANIFEST.md Phase 1 description (Section 4, Phase 1):

```
**CRITICAL ADDITION: Brief Verification Step (between Phase 1 and Phase 2)**

After the Brief Assembler produces the Execution Brief:
1. Orchestrator runs BV-01 through BV-04 (text-parsing checks, NOT Playwright)
2. If ANY BV gate FAILS:
   a. Orchestrator returns the brief to the Brief Assembler with specific failure details
   b. Brief Assembler revises and resubmits
   c. Maximum 2 revision cycles before escalating to human review
3. If ALL BV gates PASS: proceed to Phase 2 (Building)

This step adds ~5 minutes to the pipeline but prevents the #1 and #2 CRITICAL losses observed in Gas Town.
```

**Files changed:** MANIFEST.md Section 4, Phase 1 (~12 lines added)

### C. Impact on 13 Highly Effective Mechanisms

| # | Mechanism | Impact | Notes |
|---|-----------|--------|-------|
| 1 | MANIFEST structure | STRENGTHEN | Adds a verification step that the MANIFEST was missing |
| 2 | Artifact separation | PRESERVE | BV gates are in gate-runner artifact (their natural home) |
| 3 | Dual-route pattern | STRENGTHEN | Adds a THIRD verification point for perception values (brief-level, in addition to builder-calibration and gate-binary) |
| 4 | Fresh-eyes principle | PRESERVE | No change |
| 5 | Recipe format | STRENGTHEN | BV-03 enforces recipe format at the brief level |
| 6 | Gate-hidden-from-builder | PRESERVE | BV gates run BEFORE the builder, on the BRIEF, not on the HTML |
| 7 | World-description framing | PRESERVE | BV-04 prevents suppressor language from reaching builder |
| 8 | Perception threshold dual-route | STRENGTHEN | Adds brief-level delta verification |
| 9 | TC Brief Template | STRENGTHEN | BV-01 enforces the template's line budgets |
| 10 | Screenshot pre-capture | PRESERVE | No change |
| 11 | Content Map | PRESERVE | No change |
| 12 | Tier structure in brief | STRENGTHEN | BV-01 enforces per-tier completeness |
| 13 | Opus model mandate | PRESERVE | No change |

### D. Implementation Effort

**MEDIUM** (~112 lines across 2 files: artifact-gate-runner.md and MANIFEST.md)

### E. Expected Impact on Propagation

- **Current:** 90% at J2 (Content Map -> Brief), but the 90% includes undetected errors (delta miscalculations)
- **Expected after fix:** 95%+ at J2 (verified propagation)
  - BV-02 would have caught the delta miscalculation that caused E-01 and E-02
  - BV-01 would have caught the Tier 4 under-budgeting (25/40 lines)
  - Cascading effect on J3: if brief deltas are correct, builder compliance at J3 improves to ~86%
- **End-to-end impact:** J2 improvement (90% -> 95%) * J3 improvement (78% -> 86%) = Channel 2 propagation from ~67% to ~82%. Blended end-to-end from ~75% to ~82%.
- **Confidence:** HIGH (the fix directly addresses the observed failure mode with a programmatic check)

---

## Cross-Cutting Analysis

### Can Fixes Be Combined?

**YES -- three natural combinations:**

**Combination A (Brief Quality Package): Fix 1.1 + Fix 1.2 + Fix 1.3 + Fix 5.1 + Fix 5.2**

These all address the Brief -> HTML junction by improving brief quality and adding brief verification. They share the same file (artifact-tc-brief-template.md) and the same pipeline phase (Phase 1). Implementing them together is more coherent than implementing them separately.

**Combined lines of change:** ~144 across 3 files (artifact-tc-brief-template.md, artifact-gate-runner.md, MANIFEST.md)
**Combined impact:** J2 from 90% to 95%, J3 from 78% to 86-88%, end-to-end from ~75% to ~82-85%

**Combination B (Gate Runner Cleanup): Fix 3.1 + Fix 3.2 + Fix 3.3**

These all address the gate runner by reclassifying non-executable gates and adding code for missing executable gates. They share the same files (artifact-gate-runner.md, artifact-orchestrator.md, MANIFEST.md).

**Combined lines of change:** ~320 (but net reduction of ~110 lines due to reclassification removing more than code adds)
**Combined impact:** Gate coverage from 45% to 100% of relevant gates

**Combination C (Routing Enhancement): Fix 2.1 + Fix 2.2 + Fix 4.1 + Fix 4.2**

These address information distribution (VALUES items and static routing). They share the goal of getting the right information to the right agent at the right time.

**Combined lines of change:** ~72 across 4 files
**Combined impact:** Indirect -- improves agent calibration and reduces attention waste

### Optimal Implementation Order

```
1. FIRST: Combination A (Brief Quality Package)
   - Highest impact: addresses the weakest junction (J3 at 78%)
   - Prevents the pipeline's #1 and #2 CRITICAL losses
   - Dependency: None (can implement immediately)
   - Time: 2-3 hours

2. SECOND: Fix 5.1 + Fix 5.2 (Brief Verification Gates)
   - Second-highest impact: adds the "missing circuit breaker"
   - Catches errors BEFORE they propagate to the builder
   - Dependency: Combination A should be done first (BV-02 verifies the background hex lock from Fix 1.3)
   - Time: 2-3 hours

3. THIRD: Combination B (Gate Runner Cleanup)
   - High impact on verification completeness
   - Independent of Combinations A and C
   - Time: 3-4 hours (most lines but straightforward reclassification)

4. FOURTH: Combination C (Routing Enhancement)
   - Lower immediate impact (static routing hurt nothing in the N=1 test)
   - Prepares pipeline for content-type diversity
   - Dependency: None, but benefits from having Combination B done (gate runner is cleaner)
   - Time: 1-2 hours
```

### Minimum Viable Fix Set (If We Can Only Fix 2-3)

If resource-constrained, implement these in priority order:

1. **Fix 1.3 (Background Hex Lock)** -- Prevents the #1 CRITICAL loss. 12 lines. Highest ROI.
2. **Fix 5.1 (Brief Verification Gates)** -- Catches errors before they propagate. 100 lines. Prevents error amplification.
3. **Fix 1.1 (Specification Conflict Resolution)** -- Resolves the architectural ambiguity that enables creative-authority-vs-threshold conflicts. 8 lines.

These three fixes total ~120 lines and address approximately 70% of the observed information loss at Junction 3.

### Second-Order Effects

**Fix 1.3 (Background Hex Lock) -> Reduced Builder Creative Authority:**
The builder loses creative authority over zone background colors. This is the visual dimension MOST responsible for zone character. The Brief Assembler becomes the de facto "color designer." Mitigation: The Brief Assembler selects from pre-validated pairs in value-tables.md, not arbitrary choices. The builder retains authority over accent colors, typography, spacing, borders, and components -- all other channels.

**Fix 3.1 (Gate Reclassification) -> Orchestrator Complexity Increase:**
Moving 20 decision rules into artifact-orchestrator.md increases its size from 971 to ~1,071 lines. The orchestrator already has the densest artifact. Mitigation: The new section is organized by phase (pre-build, verdict, mode, policy) and the rules are already followed implicitly -- this makes them explicit.

**Fix 5.1 (Brief Verification) -> Pipeline Latency Increase:**
The verification step adds ~5 minutes per run (text parsing + potential Brief Assembler revision cycle). Maximum additional time: ~15 minutes (if 2 revision cycles are needed). Mitigation: 5 minutes of verification prevents 45+ minutes of wasted builder time on a defective brief.

**Fix 4.2 (Content-Type Conditional) -> Template Complexity:**
The TC Brief Template grows from ~165 to ~185 lines with content-type conditionals. The Brief Assembler must evaluate conditionals during assembly. Mitigation: Conditionals are clearly marked and mutually exclusive (PROSE/MIXED/VISUAL).

### Are There Second-Order Effects Where Fixing One Breaks Another?

**Fix 1.3 + Fix 4.1: Potential conflict.** Fix 1.3 locks background hex values as Tier 2. Fix 4.1 makes CD-006 mandatory for COMPOSED mode. If the Brief Assembler selects background pairs from value-tables.md and the builder sees CD-006's backgrounds (which may differ), the builder faces conflicting signals. **Resolution:** Add to the builder prompt: "Zone backgrounds in the brief are LOCKED. CD-006 is for compositional reference (metaphor, zone modulation, transitions), not for color copying."

**Fix 3.1 + Fix 5.1: No conflict.** Gate reclassification reduces the gate runner's scope; brief verification adds to it. These operate at different pipeline phases.

**Fix 2.1 + Fix 4.2: No conflict.** VALUES integration and content-type routing are orthogonal concerns.

---

## Implementation Roadmap

### Summary Table

| Fix | Files Changed | Lines | Effort | Impact | Priority |
|-----|--------------|-------|--------|--------|----------|
| 1.1 Spec Conflict Resolution | tc-brief-template | +8 | LOW | HIGH | 1 |
| 1.2 Technique Density | tc-brief-template | +7 (net) | LOW | MEDIUM | 3 |
| 1.3 Background Hex Lock | tc-brief-template | +12 | LOW | **CRITICAL** | 1 |
| 2.1 VALUES Integration | pa-protocol, orchestrator | +34 | LOW | MEDIUM | 4 |
| 2.2 Value Tables Strengthening | MANIFEST | +3 | LOW | LOW-MEDIUM | 5 |
| 3.1 Gate Reclassification | gate-runner, orchestrator, MANIFEST | -110 (net) | HIGH | HIGH | 2 |
| 3.2 Missing Gate Code | gate-runner | +90 | MEDIUM | HIGH | 2 |
| 3.3 Coverage Meta-Check | gate-runner | +15 | LOW | MEDIUM | 2 |
| 4.1 Mode-Conditional Inputs | MANIFEST | +15 | LOW | LOW (for now) | 5 |
| 4.2 Content-Type Conditional | tc-brief-template | +20 | LOW | LOW (for now) | 5 |
| 5.1 Brief Verification Gates | gate-runner | +100 | MEDIUM | **CRITICAL** | 1 |
| 5.2 Brief Feedback Loop | MANIFEST | +12 | LOW | HIGH | 1 |

### Total Implementation

- **Lines added:** ~316
- **Lines removed:** ~225 (from gate reclassification)
- **Net change:** ~91 lines added
- **Files modified:** 5 (artifact-tc-brief-template.md, artifact-gate-runner.md, artifact-orchestrator.md, artifact-pa-protocol.md, MANIFEST.md)
- **New files:** 0
- **Estimated total effort:** 8-12 hours across all 12 fixes

### Expected Aggregate Impact

| Metric | Before | After | Delta |
|--------|--------|-------|-------|
| J2 propagation (Content Map -> Brief) | 90% | 95%+ | +5 pp |
| J3 propagation (Brief -> HTML) | 78% | 86-88% | +8-10 pp |
| Gate coverage (verdict-relevant) | 86% (19/22) | 100% (22/22) | +14 pp |
| Gate execution rate | 45% (19/42) | 100% (22/22) | N/A (denominator changed) |
| Blended end-to-end propagation | ~75% | ~82-85% | +7-10 pp |
| L5 VALUES effective utilization | ~30% (estimated) | ~60-70% | +30-40 pp |

### What This Does NOT Fix

The blind-spot analysis (File 11) identified several deeper concerns that these fixes do not address:

1. **The specification paradox:** More specification may reduce quality past the peak of the inverted-U curve. These fixes add ~91 net lines. The pipeline may already be past the peak.

2. **The capability bottleneck:** If the builder lacks the SKILL to create a 4/4 page, no amount of specification improvement will bridge the gap. The fix for this is better EXEMPLARS, not better specifications.

3. **The attention competition problem:** The builder's effective attention is ~150-300 lines. Adding brief verification and background locks does not reduce the builder's cognitive load -- it restructures what demands attention.

4. **The meta-to-output ratio:** These fixes add more infrastructure to a system that already has a high meta-to-output ratio. Each fix is individually justified, but collectively they continue the pattern of infrastructure growth.

5. **The single-writer architecture:** The builder remains a single point of failure. A "best-of-3 builders" architecture would address variance more fundamentally than specification refinement.

These deeper concerns are noted but out of scope for this remediation. They point toward a future architectural decision: when does the pipeline stop adding specifications and start running experiments with simpler variants?

---

*End of unfixed items remediation report. 5 items analyzed, 12 fixes proposed, 13 anti-loss mechanism impacts assessed, implementation roadmap provided.*

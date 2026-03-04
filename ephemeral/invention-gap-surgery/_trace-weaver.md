# T5-WV: Weaver Trace Simulation — Structural Variety Metrics

## Scenario
Gas Town build: 7 zones total, 6 standard vertical, 1 grid (Amazon's 6 mandates). Section 11 had 2 propositions: P1 (mandates grid) ADOPTED, P2 (side-by-side comparison) REJECTED.

## Simulated Section 11 Assessment

**Proposition 1 — Mandates as grid:** ADOPTED. HTML contains a grid section with 6 cells. `/* STRUCTURAL: P1-mandates-grid */` citation present. The grid is visible in screenshots — auditor E-21 noticed "items sit beside each other instead of stacking," E-22 found "the grid arrangement makes me feel the mandates are all equally important," and E-23 described "one intersection where I scan instead of scroll." Three auditor signals converge on the same structural feature.

**Proposition 2 — Comparison as side-by-side:** REJECTED. Builder's `_pass-1-decisions.md` states content was better served by sequential treatment. Rejection reasoning is content-grounded (valid).

## Simulated Structural Variety Metrics

- **Distinct layout types used:** 2 (vertical + grid)
- **Sections with non-standard layout:** 1 / 7
- **Content-form coupling instances:** 1 (the mandates grid — layout embodies "equal weight" meaning)
- **Self-aware components:** 0
- **Assessment:** STRUCTURALLY DIVERSE

## Simulated Summary Line Items

- **Structural variety:** DIVERSE — 2 distinct layout types, 1 non-standard section
- **Section 11 proposition adoption:** 1 ADOPTED / 0 MODIFIED / 1 REJECTED of 2

## Key Finding: Does the Weaver Have Enough Guidance?

**Yes — the weaver prompt works correctly here.** The DIVERSE/UNIFORM classification triggers properly: 2 distinct layout types > 1, so DIVERSE. The auditor inputs from E-21/E-22/E-23 provide experiential grounding that the weaver can cross-reference against the HTML and decisions file.

**One gap:** The DIVERSE/UNIFORM binary is coarse. This scenario (1/7 sections non-standard) and a scenario with 5/7 non-standard both classify as DIVERSE. The weaver has no guidance to distinguish "minimal structural variety" from "rich structural variety." The metrics themselves capture the ratio (1/7), but the classification label loses that nuance. A downstream consumer reading only the summary line would see DIVERSE and assume more variety than exists. This is acceptable for v1.1 — the numeric counts alongside the label provide the real signal — but a future revision could add a graduated scale (UNIFORM / MINIMAL / MODERATE / RICH).

**The content-form coupling metric works well.** E-22's response ("the grid makes me feel the mandates are equally important") directly evidences content-form coupling. The weaver can count this as 1 instance with confidence because the auditor articulated the semantic connection, not just the visual arrangement.

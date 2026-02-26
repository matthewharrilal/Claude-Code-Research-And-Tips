# Cross-Run Score Tracker

**Purpose:** Persistent cross-run memory for trend detection across pipeline builds. Addresses crack dimension D13 (Feedback Loop Absence).
**Update policy:** Append a new row after every pipeline run. Update TRENDS section after every 3rd run.
**Schema version:** 1.0 (2026-02-26)
**Companion files:** `run-summary-schema.json` (machine-readable per-run JSON), `FIX-TRACKER.md` (defect-level tracking)

---

## How to Use This File

### For Orchestrators (after each build)
1. After Phase 3C verdict (or REFINE verdict if REFINE occurred), append a new row to the Build History table
2. Fill ALL columns -- use `?` for genuinely unknown values, never leave blank
3. If REFINE occurred, record the FINAL scores (post-REFINE) in the main row and note the initial scores in Key Defects
4. Update the TRENDS section if this is every 3rd run or if a notable pattern emerges

### For Researchers (analyzing cross-run data)
1. Read the Build History table for raw data
2. Read the TRENDS section for interpreted patterns
3. Cross-reference with `FIX-TRACKER.md` for defect-level detail
4. Cross-reference with per-build execution trackers for full context

### Append Protocol (copy-paste for orchestrators)

After verdict, append a row using this template:

```
| YYYY-MM-DD | slug | type | vN | opus/sonnet | X.X | MODE | X/9 | XX% | NN | NNN | ~NNm | N | +X.X | defects | strengths | path |
```

Column definitions:
- **Date:** Build completion date (YYYY-MM-DD)
- **Slug:** Short identifier for content (kebab-case)
- **Type:** article / essay / research / tutorial / reference
- **PV:** Pipeline version used (v3, v3.1, v4, v5...)
- **Builder:** Model that wrote the HTML/CSS (opus / sonnet)
- **PA-05:** Final PA-05 score (0.0-4.0, one decimal)
- **Mode:** FLAT / COMPOSED / DESIGNED (from PA-05 rubric)
- **T5:** Tier 5 score (X/9, flagship detection questions)
- **Gate%:** Percentage of applicable gates that passed
- **Mechs:** Mechanism count in final artifact
- **CSS:** CSS line count in final artifact
- **Time:** Approximate total build time in minutes
- **REF:** Number of REFINE cycles (0, 1, 2, 3)
- **Delta:** PA-05 improvement from REFINE (+X.X, or n/a if REF=0)
- **Key Defects:** Brief text (top 1-3 issues)
- **Key Strengths:** Brief text (top 1-3 positives)
- **Output:** Relative path to final HTML file

---

## Build History

| Date | Slug | Type | PV | Builder | PA-05 | Mode | T5 | Gate% | Mechs | CSS | Time | REF | Delta | Key Defects | Key Strengths | Output |
|------|------|------|----|---------|-------|------|----|-------|-------|-----|------|-----|-------|-------------|---------------|--------|
| 2026-02-16 | middle-tier | essay | pre-v3 | opus | 4.0 | DESIGNED | n/a | ? | 12 | ~450 | ~35m | 0 | n/a | CPL +2, token compliance 66.5%, missing footer | F-PATTERN layout, 12 mechanisms, PA-05 4/4, 3/3 novelty, container 960px, soul 7/7 | ephemeral/middle-tier-experiment/middle-tier-page.html |
| 2026-02-17 | ceiling-exp | research | pre-v3 | opus | 1.5 | FLAT | n/a | ? | 14 | ~1000 | ~180m | 0 | n/a | Catastrophic whitespace void (70-80% blank), container width violation (2160px?), metaphor "announced" not structural | 9/9 novelty, metaphor-driven architecture, 8/8 soul, 14 mechanisms | ephemeral/ceiling-experiment/ceiling-page.html |
| 2026-02-17 | flagship-exp | research | pre-v3 | opus | 1.5 | FLAT | n/a | ? | ~8 | ~1100 | ~240m | 0 | n/a | Zero borders, uniform typography (all 16px/400), imperceptible bg deltas (1-8 RGB), 6 whitespace voids (210-276px) | Programmatic gates passed, 2034 lines HTML | ephemeral/flagship-experiment/07-intentionality.html |
| 2026-02-18 | flagship-remed | research | pre-v3 | opus | 2.5 | COMPOSED | n/a | ? | ~15 | ~1087 | ~120m | 0 | n/a | Border selectors broken, S9-S12 typography not applying, table class mismatch, bg deltas still low | +1.0 from 1.5, WCAG 2.1 AA, soul 20 PASS / 2 WARNING / 0 FAIL, efficient CSS reallocation | ephemeral/flagship-remediation/output.html |
| 2026-02-25 | yegge-gas-town | article | v3.1 | opus | 2.0 | COMPOSED | ? | ? | ? | ? | ~60m | 1 | +1.5 | Dark zone fatigue (6/10 auditors), DPR workaround caused 8 dark screenshots | Initial build baseline before REFINE | ephemeral/builds/yegge-gas-town-2026-02-25/ |
| 2026-02-25 | yegge-gas-town-refine | article | v3.1 | opus | 3.5 | COMPOSED | 9/9 | ? | ? | ? | ~200m | 1 | +1.5 | Dark zone fatigue (6/10), 5 fixes (3 MECHANICAL + 2 STRUCTURAL, 0 COMPOSITIONAL), delight 4/10 | Largest single-cycle improvement ever (+1.5), authority 8/10, closure 7/10, CEILING tier approaching FLAGSHIP, emotional arc | ephemeral/builds/yegge-gas-town-2026-02-25/ |

### Earlier Experimental Builds (Phase D, pre-pipeline)

These builds predate the structured pipeline and lack standardized metrics. Included for historical completeness.

| Date | Slug | Type | PV | Builder | PA-05 | Mode | Notes |
|------|------|------|----|---------|-------|------|-------|
| 2026-02-15 | phase-d-variant-a | essay | Phase D | sonnet | ? | ? | Skill-only variant |
| 2026-02-15 | phase-d-variant-b | essay | Phase D | sonnet | ? | ? | Weak permission variant -- best of Phase D (18/19 compliance, 4/5 novelty) |
| 2026-02-15 | phase-d-variant-c | essay | Phase D | sonnet | ? | ? | Anti-gravity variant |
| 2026-02-15 | phase-d-variant-d | essay | Phase D | sonnet | ? | ? | Library-first variant |
| 2026-02-15 | phase-d-track-1 | essay | Phase D | sonnet | ? | FLAT | Track 1 assembly -- instant fail (5 critical soul violations, always-load protocol failure) |

---

## TRENDS

> Updated: 2026-02-26 (initial seeding, N=6 pipeline builds + 5 Phase D experiments)

### Score Trajectory
- **PA-05 range:** 1.5 to 4.0 across all builds
- **REFINE is transformative:** The only build with REFINE (yegge-gas-town) showed +1.5 delta, largest single-cycle improvement in project history. REFINE builder isolation (reads conviction + artistic only, never sees gates) appears to be the mechanism.
- **Pre-v3 ceiling:** Without REFINE, Opus builds plateau at PA-05 2.0-2.5 (COMPOSED). The middle-tier experiment (PA-05 4.0) is an outlier -- smaller scope, simpler content.

### Recurring Failure Patterns
1. **Whitespace voids:** Flagged in ceiling-exp (70-80% blank), flagship-exp (6 voids, 210-276px each). S-09 stacking loophole. Partially addressed by v3.1 gates.
2. **Imperceptible CSS:** flagship-exp had backgrounds differing by 1-8 RGB (threshold: >=15). Typography all 16px/400. CSS budget spent on invisible micro-refinements.
3. **Container width:** ceiling-exp violated 960px constraint. Phase D had 4/5 violations. Now enforced by gates.
4. **Dark zone fatigue:** yegge-gas-town REFINE had 6/10 auditors flagging dark zones. DPR workaround (960x600->1440x900) caused 8 dark screenshots.

### Model Observations
- **Opus = all successful builds.** Every PA-05 >= 2.0 build used Opus.
- **Sonnet = Phase D only.** Phase D variants used Sonnet builders. Compliance was high (18/19) but no PA-05 scores were formally captured. Sonnet-for-builders remains the largest unexamined variable.
- **Builder model may be highest-leverage intervention.** CD-006 (CEILING, 39/40) was Opus-built. Flagship (1.5/4) used Opus too, but with checklist-not-recipe format. Recipe format + Opus = success hypothesis.

### Pipeline Version Observations
- **Pre-v3 builds (N=4):** PA-05 range 1.5-4.0, high variance. No REFINE capability. No standardized gates.
- **v3.1 (N=2, same content):** Initial 2.0, REFINE to 3.5. First build with structured REFINE. Gate enforcement active but exact pass rates not yet recorded in tracker.
- **v4 (N=0):** No builds yet. Infrastructure improvements (47 gates, reduced tracker, crack defenses) but composition quality untested. P(PA-05>=3.0 initial) estimated at 20-30%.

### Key Unknowns
- Gate pass percentages not captured for most builds (pre-standardization)
- Mechanism counts and CSS lines missing for v3.1 builds (not extracted from execution trackers)
- Tier 5 scores only available for yegge-gas-town-refine (9/9)
- No builds with new content since pipeline stabilization -- all gas town builds use same content

---

## Derived Metrics (auto-compute when data sufficient)

### When N >= 5 pipeline builds, compute:
- **Mean PA-05 (initial):** Average PA-05 before any REFINE
- **Mean PA-05 (final):** Average PA-05 after REFINE (if applicable)
- **REFINE uplift rate:** % of builds where REFINE improved PA-05 by >= 0.5
- **Gate pass rate trend:** Is gate compliance improving over versions?
- **Mechanism density:** Mechs / CSS lines (higher = more efficient)
- **Time efficiency:** PA-05 / Time (higher = faster quality)

### When N >= 10 pipeline builds, compute:
- **Content-type correlation:** Do certain content types score higher?
- **Pipeline version correlation:** Is each version better than previous?
- **Failure pattern frequency:** Which defects recur most often?
- **REFINE necessity rate:** % of builds requiring REFINE to reach PA-05 >= 3.0

---

## Orchestrator Append Instruction

> **Insert this text into the orchestrator protocol (artifact-orchestrator.md or MANIFEST.md) at the pipeline completion step.**

```markdown
### Post-Verdict: Cross-Run Tracker Update

After Phase 3C verdict (or REFINE verdict if REFINE occurred):

1. Open `design-system/pipeline/cross-run-tracker.md`
2. Append a new row to the Build History table with these values:
   - Date: today (YYYY-MM-DD)
   - Slug: from EXECUTION-TRACKER BUILD_DATE/SLUG fields
   - Type: from Content Map header (article/essay/research/tutorial/reference)
   - PV: pipeline version (check MANIFEST header)
   - Builder: model used for Phase 2 build (opus/sonnet)
   - PA-05: final PA-05 score from Weaver verdict (post-REFINE if applicable)
   - Mode: from Weaver verdict (FLAT/COMPOSED/DESIGNED)
   - T5: Tier 5 score from Weaver (X/9, or n/a if not captured)
   - Gate%: PASS count / (PASS + FAIL) from unified gate JSON
   - Mechs: mechanism count from gate runner or builder self-eval
   - CSS: CSS line count from gate runner (GR-14 or equivalent)
   - Time: TOTAL_DURATION from execution tracker
   - REF: number of REFINE cycles (0/1/2/3)
   - Delta: PA-05 final - PA-05 initial (if REF > 0, else n/a)
   - Key Defects: top 1-3 from Weaver diagnostic
   - Key Strengths: top 1-3 from Weaver artistic impression
   - Output: relative path to final HTML
3. If this is every 3rd run (count rows), update the TRENDS section
4. Save the file
```

---

## Integration Points

### run-summary-schema.json
Each pipeline run should also produce a JSON file conforming to `run-summary-schema.json`. The JSON captures machine-readable detail; this tracker captures human-readable trends. Both should be updated.

### FIX-TRACKER.md
Defect-level tracking lives in `FIX-TRACKER.md`. This tracker captures build-level scores. Cross-reference by slug + date.

### Execution Tracker (per-build)
Each build's execution tracker (from `EXECUTION-TRACKER-TEMPLATE.md`) contains the full per-build detail. This file is the cross-build summary.

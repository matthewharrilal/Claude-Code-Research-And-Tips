# Pipeline Observability: Comprehensive Instrumentation Design

**Author:** pipeline-observability-architect (Opus 4.6)
**Date:** 2026-02-19
**Scope:** Full instrumentation for the `/build-page` pipeline (stages 1-10)
**Goal:** After EVERY run, answer: what happened, where did quality degrade, and why?

---

## TABLE OF CONTENTS

1. [Stage Health Manifest](#1-stage-health-manifest)
2. [Builder Absorption Protocol](#2-builder-absorption-protocol)
3. [Gate Diagnostic Format](#3-gate-diagnostic-format)
4. [PA Traceability Matrix](#4-pa-traceability-matrix)
5. [Cross-Run Comparison Schema](#5-cross-run-comparison-schema)
6. [Root Cause Trace Protocol](#6-root-cause-trace-protocol)
7. [Compression Loss Metrics](#7-compression-loss-metrics)
8. [Master Prompt Enrichments](#8-master-prompt-enrichments)

---

## 1. STAGE HEALTH MANIFEST

Every pipeline run produces `_run-manifest.json` in the output directory alongside `output.html`. The orchestrator writes this file incrementally -- each stage appends its entry on completion.

### 1.1 Top-Level Structure

```json
{
  "run_id": "run-2026-02-19-143022",
  "content_source": "design-system/research/RESEARCH-SYNTHESIS.md",
  "tier": "Flagship",
  "started_at": "2026-02-19T14:30:22Z",
  "completed_at": "2026-02-19T17:12:45Z",
  "total_duration_seconds": 9743,
  "outcome": "SHIPPED" | "SHIPPED_WITH_FIXES" | "ESCALATED",
  "fix_cycles_used": 2,
  "max_fix_cycles": 3,
  "stages": [ /* array of StageEntry objects */ ],
  "handoffs": [ /* array of HandoffEntry objects */ ],
  "final_scores": {
    "pa_05": 3.5,
    "pa_05_sub": { "designed": true, "coherent": true, "proportionate": true, "polished": true },
    "tier_5_score": "7/8",
    "gates_passed": 21,
    "gates_total": 21
  }
}
```

### 1.2 StageEntry Schema

Each stage in the pipeline writes exactly one StageEntry:

```json
{
  "stage_id": "S01_ORCHESTRATOR_INIT",
  "stage_name": "Orchestrator reads SKILL.md and classifies tier",
  "agent_model": "opus-4-6",
  "agent_role": "orchestrator",
  "start_time_iso": "2026-02-19T14:30:22Z",
  "end_time_iso": "2026-02-19T14:31:05Z",
  "duration_seconds": 43,
  "input_files": [
    { "path": "~/.claude/skills/build-page/SKILL.md", "line_count": 350 }
  ],
  "output_files": [
    { "path": "_build-plan.json", "line_count": 45 }
  ],
  "input_total_lines": 350,
  "output_total_lines": 45,
  "compression_ratio": 7.78,
  "status": "COMPLETE",
  "notes": "Classified as Flagship tier. Content: 4,200 words, prose-dominant."
}
```

### 1.3 Stage ID Registry

Every stage has a fixed ID. This enables cross-run alignment:

| Stage ID | Stage Name | Expected Agent | Inputs | Outputs |
|----------|-----------|----------------|--------|---------|
| `S01_ORCHESTRATOR_INIT` | Read SKILL.md, classify tier | Orchestrator | SKILL.md (~350 lines) | _build-plan.json |
| `S02_BUILDER_SPAWN` | Spawn Opus builder with 6 reference files | Orchestrator | 6 files (~1,000+ lines) | Builder agent context |
| `S03_BUILDER_EXECUTE` | Builder produces HTML + build log + cascade table | Builder (Opus) | Recipe + refs (~1,650 lines) | output.html, _build-log.md, _cascade-value-table.md |
| `S04_GATE_RUN` | 21 programmatic gates via Playwright | Gate runner | output.html | _gate-results.json |
| `S05_GATE_FIX` | Builder fixes gate failures (conditional) | Builder (Opus) | Gate failures + output.html | output.html (updated) |
| `S06_SCREENSHOT_CAPTURE` | Screenshots at 1440px, 1024px, 768px | Orchestrator | output.html | 3+ screenshot files |
| `S07_PA_AUDIT` | 9 Opus auditors evaluate screenshots | 9 PA auditors | Screenshots + PA questions | 9 PA report files |
| `S08_WEAVER_SYNTHESIS` | Weaver synthesizes 9 reports into verdict | Weaver (Opus) | 9 PA reports | _pa-verdict.json |
| `S09_PA_FIX` | Builder fixes PA issues (conditional) | Builder (Opus) | TOP-3 issues + output.html | output.html (updated) |
| `S10_FINAL_VERIFICATION` | Re-run gates + PA after fixes | Gate runner + PA | output.html | Updated gate + PA results |

### 1.4 Timing Budgets and Alerts

Each stage has an expected duration range. Deviations are flagged:

```json
{
  "timing_budget": {
    "S01_ORCHESTRATOR_INIT": { "expected_min_s": 20, "expected_max_s": 120, "alert_threshold_s": 180 },
    "S02_BUILDER_SPAWN": { "expected_min_s": 5, "expected_max_s": 30, "alert_threshold_s": 60 },
    "S03_BUILDER_EXECUTE": { "expected_min_s": 600, "expected_max_s": 3600, "alert_threshold_s": 5400 },
    "S04_GATE_RUN": { "expected_min_s": 30, "expected_max_s": 120, "alert_threshold_s": 300 },
    "S05_GATE_FIX": { "expected_min_s": 60, "expected_max_s": 600, "alert_threshold_s": 900 },
    "S06_SCREENSHOT_CAPTURE": { "expected_min_s": 15, "expected_max_s": 90, "alert_threshold_s": 180 },
    "S07_PA_AUDIT": { "expected_min_s": 120, "expected_max_s": 900, "alert_threshold_s": 1200 },
    "S08_WEAVER_SYNTHESIS": { "expected_min_s": 60, "expected_max_s": 300, "alert_threshold_s": 600 },
    "S09_PA_FIX": { "expected_min_s": 120, "expected_max_s": 900, "alert_threshold_s": 1200 },
    "S10_FINAL_VERIFICATION": { "expected_min_s": 60, "expected_max_s": 600, "alert_threshold_s": 900 }
  }
}
```

---

## 2. BUILDER ABSORPTION PROTOCOL

The builder receives ~1,650 lines across 6 files (conventions brief ~230 lines, prohibitions ~353 lines, tokens.css ~174 lines, mechanism catalog ~300+ lines, operational recipe ~650 lines, build plan ~45 lines). Research shows builders effectively absorb ~75 lines (13.4%). This protocol verifies what the builder actually used.

### 2.1 Mandatory Builder Output: `_build-log.md`

The builder MUST write `_build-log.md` alongside `output.html`. This is not optional instrumentation -- it is the primary absorption verification artifact. The build log has a mandatory structure:

```markdown
# Build Log: [Page Title]
## Run: [run_id]

### SECTION A: Reference File Acknowledgment

For each of the 6 reference files, the builder writes:

| File | Lines Read | Key Extractions | Applied In |
|------|-----------|-----------------|------------|
| conventions-brief.md (230 lines) | 230/230 | Container: 960px, Warm palette R>=G>=B, Bookend header/footer pattern, 3 transition types, 15 RGB delta | Phase 0 zone plan, Phase 2 container, Phase 3 backgrounds |
| prohibitions.md (353 lines) | 353/353 | border-radius: 0, box-shadow: none, no gradients, no text-shadow | Phase 2 soul enforcement |
| tokens.css (174 lines) | 174/174 | --color-primary: #E83025, --font-display, spacing scale | Phase 2 CSS reset |
| mechanism-catalog.md (300+ lines) | 300/300 | Selected: S-gradient-mapping, T-reading-pace, M-border-weight, B-grid-density, R-transition-typing | Phase 4-6 mechanism deployment |
| operational-recipe.md (650 lines) | 650/650 | All 9 phases followed in sequence | Full build |
| _build-plan.json (45 lines) | 45/45 | Tier: Flagship, Zones: 4, Pattern: CRESCENDO | Phase 0 architecture |

### SECTION B: Convention Mapping Table

For EACH of the 15 convention sections in conventions-brief.md, the builder
records whether and where it manifested in the output:

| Convention Section | Brief Line Range | Applied? | Where in output.html | CSS Evidence |
|-------------------|-----------------|----------|---------------------|--------------|
| 1. Container Width | Lines 1-12 | YES | .page-container { max-width: 960px } | Line 47 |
| 2. Warm Palette | Lines 13-28 | YES | All zone backgrounds, header, footer | Lines 52-89 |
| 3. Soul Constraints | Lines 29-41 | YES | * { border-radius: 0 !important } | Line 44 |
| 4. Typography Stack | Lines 42-58 | YES | font-family declarations across zones | Lines 51, 63, 78 |
| 5. Zone Architecture | Lines 59-78 | YES | 4 zones with distinct bg, type, spacing | Lines 90-145 |
| 6. Transition Types | Lines 79-95 | YES | 2 smooth, 1 bridge, 1 breathing | Lines 146-162 |
| 7. Component Library | Lines 96-112 | PARTIAL | Used callout--info, callout--gotcha; missed table-compact | Lines 180-210 |
| 8. Bookend Pattern | Lines 113-125 | YES | Dark header + footer with red accent | Lines 35-42, 230-245 |
| 9. Spacing Scale | Lines 126-140 | YES | All spacing from 4px scale | Throughout |
| 10. Perception Thresholds | Lines 141-160 | YES | Min 18 RGB bg delta, 3px font-size delta | Lines 90-92 |
| 11. Heading Hierarchy | Lines 161-172 | YES | h1 42px > h2 28px > h3 20px | Lines 51, 63, 71 |
| 12. Accessibility | Lines 173-188 | YES | Skip link, ARIA landmarks, role attrs | HTML lines 3, 12-15 |
| 13. Grid Requirements | Lines 189-200 | YES | 2 grid sections (S3, S7) | Lines 165-178 |
| 14. Stacking Limits | Lines 201-215 | YES | Max stacked gap: 108px (S4-S5 boundary) | Divider margins |
| 15. Mechanism Minimums | Lines 216-230 | YES | S:2 T:1 M:2 B:2 R:1 = 8 mechanisms | See Section D |

### SECTION C: Creative Rationale

For each key decision, the builder explains WHY:

| Decision | Rationale | Alternative Considered | Why Rejected |
|----------|-----------|----------------------|--------------|
| 4 zones (not 3) | 4,200 words = 4 zones per recipe table | 3 zones | Content arc has 4 distinct movements |
| CRESCENDO pattern | Content builds from overview to deep analysis | F-PATTERN | Content lacks parallel-entry structure |
| Grid in S3 | Comparison section pairs gotcha/tip callouts | Single column | 2 contrasting elements = natural pair |
| Breathing divider at S5-S6 | Major structural pivot (theory to practice) | Bridge | Strongest content shift in the piece |

### SECTION D: Mechanism Deployment Log

| # | Mechanism | Category | Deployed In | CSS Implementation | Perception Check |
|---|-----------|----------|-------------|-------------------|-----------------|
| 1 | S-gradient-mapping | Spatial | Zones 1-4 bg colors | #FEF9F5 -> #F5EFE7 -> #EDE5D8 -> #F0EBE3 | Delta: 22, 18, 15 RGB -- all >= 15 PASS |
| 2 | T-reading-pace | Temporal | Section font sizes | Z1: 17px, Z2: 16px, Z3: 15px, Z4: 16px | Delta: 1-2px -- meets 2px minimum at boundaries |
| 3 | M-border-weight | Material | Section dividers | Smooth: 1px, Bridge: 2px, Breathing: 4px | All visible -- PASS |
| ... | ... | ... | ... | ... | ... |
```

### 2.2 Absorption Score Computation

The orchestrator computes an absorption score from the build log:

```json
{
  "absorption_score": {
    "convention_sections_applied": 14,
    "convention_sections_total": 15,
    "convention_coverage_pct": 93.3,
    "partial_sections": ["Component Library"],
    "missed_sections": [],
    "mechanisms_deployed": 8,
    "mechanism_categories_covered": 5,
    "mechanism_categories_total": 5,
    "category_distribution": { "S": 2, "T": 1, "M": 2, "B": 2, "R": 1 },
    "creative_rationale_entries": 4,
    "files_acknowledged": 6,
    "files_total": 6
  }
}
```

### 2.3 Absorption Red Flags

The orchestrator checks the build log for these red flags and writes them to `_run-manifest.json`:

| Red Flag | Detection Method | Severity |
|----------|-----------------|----------|
| Missing convention section | Convention Mapping Table has NO entry for a section | BLOCKING |
| Convention acknowledged but not evidenced | "Applied? = YES" but "CSS Evidence" column is empty | SIGNIFICANT |
| Zero mechanisms from a category | Mechanism deployment has 0 entries for S, T, M, B, or R | BLOCKING |
| No creative rationale | Section C is empty or has fewer than 3 entries | SIGNIFICANT |
| Build log absent entirely | `_build-log.md` file does not exist | BLOCKING -- fail the run |
| Convention coverage below 80% | Fewer than 12/15 sections applied | SIGNIFICANT |
| Reference file not acknowledged | A file appears in "Lines Read = 0" or is missing from table | BLOCKING |

---

## 3. GATE DIAGNOSTIC FORMAT

Currently the gate runner produces PASS/FAIL. This is insufficient for trend analysis and near-miss detection. The enhanced format captures measured values and delta-from-threshold.

### 3.1 Enhanced Gate Result Schema: `_gate-results.json`

```json
{
  "run_id": "run-2026-02-19-143022",
  "gate_run_timestamp": "2026-02-19T15:45:12Z",
  "cycle": 1,
  "total_cycles": 3,
  "pass_count": 19,
  "fail_count": 2,
  "gates": [
    {
      "gate_id": "SC-01",
      "gate_name": "Container Width",
      "result": "PASS",
      "threshold": { "min": 940, "max": 960, "unit": "px" },
      "measured_value": 960,
      "delta_from_threshold": { "from_min": 20, "from_max": 0 },
      "margin_pct": 0.0,
      "elements_checked": [".page-container"],
      "measurement_method": "getComputedStyle(el).maxWidth",
      "raw_measurements": { ".page-container": "960px" }
    },
    {
      "gate_id": "SC-02",
      "gate_name": "Soul Enforcement",
      "result": "PASS",
      "threshold": { "border_radius": 0, "box_shadow": "none" },
      "measured_value": { "max_border_radius": 0, "box_shadow_violations": 0 },
      "delta_from_threshold": { "border_radius_delta": 0, "shadow_violations": 0 },
      "margin_pct": 100.0,
      "elements_checked": ["*"],
      "violations": []
    },
    {
      "gate_id": "SC-09",
      "gate_name": "Background Delta",
      "result": "FAIL",
      "threshold": { "min_rgb_delta": 15, "unit": "RGB points" },
      "measured_value": { "min_delta": 12, "min_delta_pair": ["zone-s3", "zone-s4"] },
      "delta_from_threshold": { "shortfall": -3 },
      "margin_pct": -20.0,
      "elements_checked": ["[class^='zone-s']"],
      "measurement_method": "Compare max(|R1-R2|, |G1-G2|, |B1-B2|) for adjacent zone backgrounds",
      "zone_background_map": {
        "zone-s1": { "color": "#FEF9F5", "rgb": [254, 249, 245] },
        "zone-s2": { "color": "#F5EFE7", "rgb": [245, 239, 231] },
        "zone-s3": { "color": "#F0EBE3", "rgb": [240, 235, 227] },
        "zone-s4": { "color": "#EDE5D8", "rgb": [237, 229, 216] }
      },
      "pairwise_deltas": [
        { "pair": ["zone-s1", "zone-s2"], "max_channel_delta": 14, "channels": { "R": 9, "G": 10, "B": 14 } },
        { "pair": ["zone-s2", "zone-s3"], "max_channel_delta": 8, "channels": { "R": 5, "G": 4, "B": 4 } },
        { "pair": ["zone-s3", "zone-s4"], "max_channel_delta": 12, "channels": { "R": 3, "G": 6, "B": 11 } }
      ]
    },
    {
      "gate_id": "SC-10",
      "gate_name": "Stacked Gap",
      "result": "PASS",
      "threshold": { "max_stacked_gap": 120, "kill_at": 192, "unit": "px" },
      "measured_value": { "max_stacked_gap": 108, "location": "S4-S5 boundary" },
      "delta_from_threshold": { "headroom": 12, "headroom_from_kill": 84 },
      "margin_pct": 10.0,
      "boundary_measurements": [
        {
          "boundary": "S1-S2",
          "components": { "padding_bottom": 32, "divider_margin_top": 16, "divider_height": 1, "divider_margin_bottom": 16, "padding_top": 24 },
          "total": 89,
          "transition_type": "smooth"
        },
        {
          "boundary": "S4-S5",
          "components": { "padding_bottom": 32, "divider_margin_top": 24, "divider_height": 4, "divider_margin_bottom": 24, "padding_top": 24 },
          "total": 108,
          "transition_type": "breathing"
        }
      ]
    }
  ]
}
```

### 3.2 Full Gate Registry (21 Gates)

| Gate ID | Gate Name | Threshold | Measured Value Type | Margin Computation |
|---------|----------|-----------|--------------------|--------------------|
| SC-01 | Container Width | 940-960px | Integer (px) | Distance to nearest bound |
| SC-02 | Soul Enforcement | border-radius: 0, box-shadow: none | Count of violations | 0 = 100% margin |
| SC-03 | Font Stack | Instrument Serif / Inter / JetBrains Mono | Boolean: all 3 loaded | Pass or fail |
| SC-04 | Warm Palette | R >= G >= B for all backgrounds | Count of violations + worst offender | 0 = 100% margin |
| SC-05 | Heading Hierarchy | h1 > h2 > h3, no skips | Boolean: valid nesting | Pass or fail |
| SC-06 | ARIA Landmarks | >= 3 | Integer count | Count minus 3 |
| SC-07 | Skip-to-Content | Present | Boolean | Present or absent |
| SC-08 | Component Library Usage | Standard class names | Count standard / count total | Ratio |
| SC-09 | Background Delta | >= 15 RGB between adjacent zones | Min delta (RGB points) | Measured minus 15 |
| SC-10 | Stacked Gap | <= 120px target, <= 192px kill | Max total gap (px) | 120 minus measured |
| SC-11 | Font-Size Zones | >= 2px between zone groups | Min delta (px) | Measured minus 2 |
| SC-12 | Zone Count | 2-5 zones | Integer count | Count in range? |
| SC-13 | CPL (Characters Per Line) | 45-80 | Max CPL measured | Distance to 80 |
| SC-14 | Line Height Body | >= 1.5 | Float | Measured minus 1.5 |
| SC-15 | Content-to-Viewport Ratio | 65-80% at 1440px | Percentage | Distance to nearest bound |
| SC-16 | Header Proportion | <= 20% of first viewport (288px at 1440px) | Height (px) | 288 minus measured |
| SC-17 | Footer Presence | Footer element with visible content | Boolean | Present or absent |
| SC-18 | Grid Section Count | >= 2 non-single-column sections | Integer count | Count minus 2 |
| SC-19 | Void Detection | No 2+ consecutive viewport-heights with < 30% content | Count of void runs | 0 = pass |
| SC-20 | Warm Palette (Text Colors) | No pure black (#000), no pure white (#FFF) | Count of violations | 0 = pass |
| SC-21 | Accessibility Contrast | WCAG AA (4.5:1 normal text, 3:1 large text) | Min contrast ratio | Ratio minus threshold |

### 3.3 Trend Tracking Across Fix Cycles

When gates are re-run after fixes, the result file captures cycle progression:

```json
{
  "cycle_comparison": [
    {
      "gate_id": "SC-09",
      "cycle_1": { "result": "FAIL", "measured": 12 },
      "cycle_2": { "result": "PASS", "measured": 18 },
      "delta": "+6 RGB points",
      "direction": "IMPROVED"
    },
    {
      "gate_id": "SC-10",
      "cycle_1": { "result": "PASS", "measured": 108 },
      "cycle_2": { "result": "PASS", "measured": 96 },
      "delta": "-12px gap reduction",
      "direction": "IMPROVED"
    }
  ]
}
```

---

## 4. PA TRACEABILITY MATRIX

The weaver currently synthesizes 9 reports into PA-05 score + TOP-3 issues. Findings 4-30 are lost. The traceability matrix preserves the COMPLETE auditor response set.

### 4.1 Per-Auditor Report Schema

Each auditor writes a structured JSON alongside their markdown report:

```json
{
  "auditor_id": "A",
  "auditor_role": "Impression+Emotion",
  "questions_assigned": ["PA-01", "PA-04", "PA-05", "PA-18", "PA-19", "PA-20", "PA-45"],
  "viewport": "1440px",
  "cold_look": {
    "gut_reaction": "Warm, confident, professional. Header dominates but in a good way.",
    "worst_thing": "Section 6 table feels cramped compared to generous surrounding prose.",
    "best_thing": "The breathing divider at S5-S6 is exactly where the content pivots.",
    "ship_verdict": "YES WITH RESERVATIONS"
  },
  "responses": [
    {
      "question_id": "PA-01",
      "question_text": "What's the first thing that bothers you?",
      "answer": "YES",
      "finding": "Table in S6 has tight cell padding, competing with generous margins elsewhere.",
      "severity": "SIGNIFICANT",
      "location": "Section 6, table element",
      "confidence": "HIGH"
    },
    {
      "question_id": "PA-05",
      "question_text": "Would you put your name on this?",
      "answer": "YES WITH RESERVATIONS",
      "sub_criteria": {
        "designed": { "pass": true, "note": "Multi-scale coherence visible across zones." },
        "coherent": { "pass": true, "note": "One visual language throughout." },
        "proportionate": { "pass": true, "note": "No voids, no cramping." },
        "polished": { "pass": false, "note": "Table styling incomplete." }
      },
      "pa_05_score": 3,
      "severity": "SIGNIFICANT",
      "location": "Full page",
      "confidence": "HIGH"
    }
  ],
  "additional_observations": [
    "Scroll momentum stays strong through S1-S5 but dips at S6 (table breaks the reading flow rhythm).",
    "Footer feels slightly underweight compared to the commanding header."
  ]
}
```

### 4.2 The Full Traceability Matrix: `_pa-matrix.json`

The weaver (or orchestrator, post-weaving) assembles ALL auditor responses into a single matrix:

```json
{
  "run_id": "run-2026-02-19-143022",
  "matrix_timestamp": "2026-02-19T16:45:00Z",
  "auditors": ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
  "questions_evaluated": 56,
  "question_results": {
    "PA-01": {
      "assigned_to": ["A"],
      "responses": {
        "A": { "answer": "YES", "severity": "SIGNIFICANT", "finding": "Table in S6..." }
      },
      "cross_auditor_mentions": {
        "C": "Also noted S6 table tightness under spatial proportion review.",
        "E": "Flagged S6 table as grid/layout concern."
      },
      "consensus": "FLAGGED_BY_3_OF_9",
      "agreement_rate": 1.0
    },
    "PA-05": {
      "assigned_to": ["A"],
      "responses": {
        "A": { "answer": "YES WITH RESERVATIONS", "pa_05_score": 3, "sub": { "designed": true, "coherent": true, "proportionate": true, "polished": false } }
      },
      "cross_auditor_mentions": {
        "B": "Would ship with font-size fix in S8.",
        "F": "Rhythm slightly metronomic but acceptable."
      },
      "consensus": "PASS_WITH_RESERVATIONS",
      "agreement_rate": 0.78
    },
    "PA-09": {
      "assigned_to": ["C"],
      "responses": {
        "C": { "answer": "NO", "finding": "No dead space detected. All negative space serves pacing." }
      },
      "cross_auditor_mentions": {},
      "consensus": "PASS",
      "agreement_rate": 1.0
    }
  },
  "agreement_summary": {
    "full_agreement_count": 42,
    "partial_agreement_count": 11,
    "disagreement_count": 3,
    "overall_agreement_rate": 0.82,
    "most_contested_questions": ["PA-17", "PA-35", "PA-42"]
  },
  "finding_inventory": {
    "total_findings": 27,
    "by_severity": { "BLOCKING": 0, "SIGNIFICANT": 8, "MINOR": 14, "OBSERVATION": 5 },
    "top_3_transmitted_to_builder": ["PA-05d_polished_table_styling", "PA-17_metronomic_rhythm", "PA-35_engagement_dip_s6"],
    "findings_4_through_27_lost": [
      { "rank": 4, "question": "PA-40", "finding": "Spacing jump between S3-S4 not content-justified" },
      { "rank": 5, "question": "PA-44", "finding": "Metaphor partially implicit -- would benefit from stronger structural encoding" }
    ]
  }
}
```

### 4.3 Inter-Auditor Agreement Metrics

The weaver computes agreement metrics for the matrix:

```json
{
  "agreement_analysis": {
    "by_auditor_pair": [
      { "pair": ["A", "C"], "questions_overlapping": 3, "agreed": 3, "rate": 1.0 },
      { "pair": ["B", "F"], "questions_overlapping": 2, "agreed": 1, "rate": 0.5 }
    ],
    "by_question_tier": {
      "tier_1_mandatory": { "questions": 5, "avg_agreement": 0.93 },
      "tier_2_standard": { "questions": 20, "avg_agreement": 0.81 },
      "tier_3_deep": { "questions": 15, "avg_agreement": 0.74 },
      "tier_4_void": { "questions": 4, "avg_agreement": 0.88 },
      "tier_5_flagship": { "questions": 8, "avg_agreement": 0.72 }
    },
    "chronic_disagreement_questions": [
      {
        "question_id": "PA-42",
        "description": "Metaphor-driven compromise",
        "disagreement_rate_across_runs": 0.45,
        "note": "Inherently subjective -- consider splitting into more specific sub-questions"
      }
    ]
  }
}
```

### 4.4 Tier 5 (Flagship-Specific) Question Tracking

The 8 Tier 5 questions get their own section in the matrix because they represent the gap between COMPOSED (3/4) and DESIGNED (4/4):

```json
{
  "tier_5_results": {
    "score": "6/8",
    "questions": [
      { "id": "T5-01", "text": "[Tier 5 question text]", "result": "PASS", "auditor": "A", "note": "..." },
      { "id": "T5-02", "text": "[Tier 5 question text]", "result": "FAIL", "auditor": "G", "note": "..." }
    ],
    "threshold": "6/8 for Flagship ship",
    "margin": 0
  }
}
```

---

## 5. CROSS-RUN COMPARISON SCHEMA

Every run produces a standardized summary that can be diffed against any other run.

### 5.1 Run Summary Record: `_run-summary.json`

```json
{
  "schema_version": "1.0",
  "run_id": "run-2026-02-19-143022",
  "content_hash": "sha256:a1b2c3d4...",
  "content_source": "design-system/research/RESEARCH-SYNTHESIS.md",
  "content_word_count": 4200,
  "tier": "Flagship",
  "builder_model": "opus-4-6",

  "timing": {
    "total_seconds": 9743,
    "build_seconds": 2400,
    "gate_seconds": 90,
    "pa_seconds": 720,
    "fix_seconds": 600,
    "overhead_seconds": 5933
  },

  "build_metrics": {
    "html_lines": 485,
    "css_lines": 620,
    "total_lines": 1105,
    "zones": 4,
    "sections": 11,
    "grid_sections": 3,
    "mechanisms_deployed": 8,
    "mechanism_categories": { "S": 2, "T": 1, "M": 2, "B": 2, "R": 1 },
    "components_used": ["callout--info", "callout--gotcha", "callout--tip", "table-compact", "essence-pullquote"],
    "transitions": { "smooth": 6, "bridge": 2, "breathing": 2 },
    "convention_coverage_pct": 93.3
  },

  "gate_scores": {
    "passed": 21,
    "failed": 0,
    "total": 21,
    "near_misses": [
      { "gate": "SC-09", "margin_pct": 20.0, "measured": 18, "threshold": 15 }
    ],
    "comfortable_passes": [
      { "gate": "SC-01", "margin_pct": 0.0, "note": "Exactly 960px" }
    ]
  },

  "pa_scores": {
    "pa_05_overall": 3.5,
    "pa_05_designed": true,
    "pa_05_coherent": true,
    "pa_05_proportionate": true,
    "pa_05_polished": true,
    "tier_5_score": "7/8",
    "total_findings": 27,
    "blocking_findings": 0,
    "significant_findings": 8,
    "agreement_rate": 0.82
  },

  "fix_cycles": {
    "count": 2,
    "cycle_1": {
      "trigger": "GATE_FAILURE",
      "gates_fixed": ["SC-09"],
      "pa_improvement": null
    },
    "cycle_2": {
      "trigger": "PA_BELOW_BAR",
      "top_3_issues": ["table_styling", "rhythm_variation", "footer_weight"],
      "pa_improvement": { "before": 3.0, "after": 3.5 }
    }
  },

  "compression_metrics": {
    "brief_to_output_pct": 93.3,
    "pa_findings_transmitted_pct": 11.1,
    "total_reference_lines": 1650,
    "output_css_lines": 620,
    "reference_to_output_ratio": 2.66
  }
}
```

### 5.2 Cross-Run Diff Format

Given two `_run-summary.json` files, the orchestrator produces a `_run-diff.json`:

```json
{
  "run_a": "run-2026-02-19-143022",
  "run_b": "run-2026-02-20-091500",
  "content_same": true,
  "content_hash_match": true,

  "score_deltas": {
    "pa_05_overall": { "a": 3.5, "b": 3.75, "delta": "+0.25", "direction": "IMPROVED" },
    "tier_5_score": { "a": "7/8", "b": "8/8", "delta": "+1", "direction": "IMPROVED" },
    "gates_passed": { "a": 21, "b": 21, "delta": 0, "direction": "STABLE" },
    "agreement_rate": { "a": 0.82, "b": 0.87, "delta": "+0.05", "direction": "IMPROVED" }
  },

  "metric_deltas": {
    "mechanisms_deployed": { "a": 8, "b": 10, "delta": "+2" },
    "css_lines": { "a": 620, "b": 680, "delta": "+60" },
    "convention_coverage_pct": { "a": 93.3, "b": 100.0, "delta": "+6.7" },
    "fix_cycles_used": { "a": 2, "b": 1, "delta": "-1" },
    "total_seconds": { "a": 9743, "b": 8200, "delta": "-1543" }
  },

  "gate_movement": [
    { "gate": "SC-09", "a_margin": 20.0, "b_margin": 33.3, "direction": "MORE_COMFORTABLE" },
    { "gate": "SC-10", "a_margin": 10.0, "b_margin": 8.0, "direction": "TIGHTER" }
  ],

  "pa_movement": [
    { "question": "PA-17", "a": "FAIL", "b": "PASS", "note": "Rhythm variation improved with alternating spacing" },
    { "question": "PA-35", "a": "PARTIAL", "b": "PASS", "note": "Engagement sustained through S6 after table restyle" }
  ],

  "interventions": [
    {
      "description": "Added table-featured class to S6 table",
      "affected_gates": [],
      "affected_pa": ["PA-01", "PA-35", "PA-37"],
      "pa_05_contribution": "+0.15 (estimated from sub-criteria movement)"
    }
  ]
}
```

### 5.3 Run Registry

A persistent `_run-registry.json` lives in the pipeline output root directory. It accumulates across all runs:

```json
{
  "runs": [
    {
      "run_id": "run-2026-02-19-143022",
      "date": "2026-02-19",
      "content": "RESEARCH-SYNTHESIS.md",
      "tier": "Flagship",
      "pa_05": 3.5,
      "tier_5": "7/8",
      "gates_passed": 21,
      "fix_cycles": 2,
      "outcome": "SHIPPED"
    }
  ],
  "aggregate_stats": {
    "total_runs": 1,
    "avg_pa_05": 3.5,
    "avg_gates_passed": 21,
    "avg_fix_cycles": 2,
    "worst_pa_05": 3.5,
    "best_pa_05": 3.5,
    "chronic_gate_failures": [],
    "chronic_pa_failures": []
  }
}
```

---

## 6. ROOT CAUSE TRACE PROTOCOL

When PA-05 scores below target, trace backward through the chain: PA finding --> gate result --> builder decision --> reference file section --> compression loss.

### 6.1 Causal Chain Format: `_root-cause-trace.json`

Each PA finding that scores below threshold gets a full backward trace:

```json
{
  "run_id": "run-2026-02-19-143022",
  "traces": [
    {
      "trace_id": "RCT-001",
      "origin": {
        "type": "PA_FINDING",
        "question": "PA-05d",
        "sub_criterion": "polished",
        "finding": "Table in S6 has tight cell padding, unfinished styling",
        "auditor": "A",
        "severity": "SIGNIFICANT"
      },
      "gate_evidence": {
        "relevant_gates": ["SC-08"],
        "sc_08_result": "PASS",
        "sc_08_detail": "Component library usage: 5/6 standard classes. table-compact used but table-featured would be more appropriate.",
        "gate_caught_this": false,
        "note": "Gate SC-08 checks class presence, not appropriateness. This is a gap."
      },
      "builder_decision": {
        "build_log_section": "C",
        "decision": "Used table-compact for S6 comparison table",
        "rationale": "Content has 4 columns -- compact seemed right for density",
        "alternative_considered": "table-featured",
        "why_rejected": "Thought featured was for single-highlight tables only",
        "convention_brief_reference": "Section 7: Component Library, line 102"
      },
      "reference_gap": {
        "conventions_brief_line": 102,
        "brief_says": "Table variants: table-compact, table-featured, table-light, table-warning, table-data",
        "brief_missing": "No guidance on WHEN to use each variant. Builder had to guess.",
        "compression_point": "CONVENTIONS_BRIEF_TO_BUILDER",
        "information_lost": "Table variant selection criteria"
      },
      "root_cause": "Conventions brief lists table variants but provides no selection heuristic. Builder defaulted to compact for dense content. Fix: add table variant selection guide to conventions brief.",
      "recommended_fix": {
        "file": "design-system/pipeline/conventions-brief.md",
        "action": "Add after line 102: 'Use table-compact for data tables (5+ rows, 3+ columns). Use table-featured for comparison tables (2-4 items, highlight key differences). Use table-light for inline reference tables. Use table-warning for constraint/limit tables. Use table-data for raw data.'",
        "estimated_pa_impact": "+0.1 on PA-05d (polished)"
      }
    },
    {
      "trace_id": "RCT-002",
      "origin": {
        "type": "PA_FINDING",
        "question": "PA-17",
        "finding": "Spacing rhythm slightly metronomic -- consistent but not varied",
        "auditor": "F",
        "severity": "MINOR"
      },
      "gate_evidence": {
        "relevant_gates": ["SC-10", "SC-11"],
        "sc_10_result": "PASS",
        "sc_10_detail": "Max stacked gap 108px (within 120px). But ALL boundaries within 89-108px range.",
        "sc_11_result": "PASS",
        "gate_caught_this": false,
        "note": "Gates measure compliance. They do not measure VARIATION. All boundaries pass individually but the RANGE is only 19px (89-108). This is the gate's blind spot."
      },
      "builder_decision": {
        "build_log_section": "D",
        "decision": "Applied transition types as specified: smooth (16px margins), bridge (24px margins), breathing (24px margins)",
        "rationale": "Followed recipe Phase 0.6 transition type table exactly",
        "convention_brief_reference": "Section 6: Transition Types"
      },
      "reference_gap": {
        "conventions_brief_line": 85,
        "brief_says": "3 transition types with specific margin values",
        "brief_missing": "The 3 types produce only 89px vs 106px vs 108px = narrow 19px range. Perceptual rhythm requires wider variation.",
        "compression_point": "RECIPE_TO_OUTPUT",
        "information_lost": "The recipe constrains transitions to 3 types. The mechanism catalog has 5+ transition patterns. Recipe compressed catalog."
      },
      "root_cause": "Recipe transition types produce insufficient spacing variation for perceptible rhythm. Bridge (106px) and breathing (108px) are only 2px apart -- below the 24px perception threshold for spacing differences.",
      "recommended_fix": {
        "file": "design-system/pipeline/conventions-brief.md",
        "action": "Widen breathing transition margins: divider-margin-top: 32px, divider-margin-bottom: 32px (total: 124px vs bridge 106px = 18px gap, still below ideal but improved). OR: add a 4th transition type.",
        "estimated_pa_impact": "+0.05 on PA-17 (rhythm)"
      }
    }
  ]
}
```

### 6.2 Trace Trigger Rules

Root cause traces are generated ONLY when:

| Trigger | Threshold | Trace Depth |
|---------|-----------|-------------|
| PA-05 overall < 3.5 | Below Flagship ship bar | Full trace for ALL PA-05 sub-criteria that fail |
| Tier 5 < 6/8 | Below Flagship ship bar | Full trace for each failing Tier 5 question |
| Any gate fails 2+ cycles | Persistent gate failure | Full trace for that gate |
| PA finding with BLOCKING severity | Any blocking finding | Full trace |
| Same PA question fails across 3+ runs | Chronic failure pattern | Full trace + cross-run analysis |

### 6.3 Trace Chain Taxonomy

Every root cause falls into one of these categories:

| Category | Description | Fix Location |
|----------|------------|-------------|
| `BRIEF_GAP` | Conventions brief is missing information the builder needed | conventions-brief.md |
| `RECIPE_GAP` | Operational recipe step is too vague or missing | operational-recipe.md |
| `GATE_BLIND_SPOT` | Gate checks compliance but misses quality dimension | gate-runner.md |
| `PA_QUESTION_GAP` | No PA question targets this failure mode | perceptual-auditing SKILL.md |
| `COMPRESSION_LOSS` | Information existed in references but didn't reach builder | Handoff protocol |
| `BUILDER_MISINTERPRETATION` | Builder read the reference but drew wrong conclusion | Conventions brief clarity |
| `WEAVER_COMPRESSION` | 9 PA reports compressed to TOP-3; this finding was #4-30 | Weaver protocol |
| `NOVEL_FAILURE` | First occurrence, no existing reference covers this | New reference needed |

---

## 7. COMPRESSION LOSS METRICS

Compression loss is the pipeline's fundamental failure mode. At every handoff, information degrades. These metrics quantify that degradation.

### 7.1 Handoff Points

The pipeline has 5 critical handoff points where compression occurs:

| Handoff | From | To | Input | Output | Risk |
|---------|------|-----|-------|--------|------|
| H1 | 6 reference files (~1,650 lines) | Builder context window | Full files | Builder's working memory | HIGHEST -- 13.4% visibility cap |
| H2 | Builder decisions (~620 CSS lines) | Gate runner | Full CSS | 21 binary measurements | Measurement coverage |
| H3 | Screenshots + PA questions | 9 auditor reports | Visual experience | 9 text reports (200-400 lines each) | Perceptual-to-textual translation |
| H4 | 9 PA reports (~2,700 lines total) | Weaver verdict | Full analyses | TOP-3 + score (~100 lines) | 96% loss (findings 4-30 dropped) |
| H5 | Weaver feedback (~100 lines) | Builder fix context | TOP-3 issues | Builder's fix actions | Builder may not understand context |

### 7.2 Compression Measurement for Each Handoff

#### H1: References --> Builder

Measured via the Builder Absorption Protocol (Section 2). Key metrics:

```json
{
  "handoff": "H1_REFERENCES_TO_BUILDER",
  "input": {
    "files": 6,
    "total_lines": 1650,
    "conventions_brief_sections": 15,
    "mechanism_catalog_entries": 18,
    "token_variables": 42,
    "prohibition_rules": 22,
    "recipe_phases": 9
  },
  "output": {
    "conventions_applied": 14,
    "conventions_total": 15,
    "mechanisms_deployed": 8,
    "mechanisms_available": 18,
    "tokens_used": 28,
    "tokens_available": 42,
    "prohibitions_followed": 22,
    "prohibitions_total": 22,
    "recipe_phases_executed": 9,
    "recipe_phases_total": 9
  },
  "compression_metrics": {
    "convention_retention_pct": 93.3,
    "mechanism_utilization_pct": 44.4,
    "token_utilization_pct": 66.7,
    "prohibition_compliance_pct": 100.0,
    "recipe_execution_pct": 100.0,
    "overall_retention_pct": 80.9
  },
  "specific_losses": [
    {
      "item": "Component Library Section 7: table variant selection",
      "status": "PARTIALLY_APPLIED",
      "what_was_lost": "Selection heuristic for table variants",
      "impact": "Builder used table-compact where table-featured was more appropriate"
    }
  ]
}
```

#### H2: Builder --> Gates

```json
{
  "handoff": "H2_BUILDER_TO_GATES",
  "input": {
    "css_lines": 620,
    "html_lines": 485,
    "css_properties_set": 284,
    "css_unique_values": 156
  },
  "output": {
    "gates_evaluated": 21,
    "properties_checked": 47,
    "properties_total": 284
  },
  "compression_metrics": {
    "property_coverage_pct": 16.5,
    "unchecked_properties": 237,
    "note": "Gates check 47 of 284 CSS properties. 237 properties are verified ONLY by PA."
  },
  "coverage_gaps": [
    "Letter-spacing values: gates do not verify minimum perceptible threshold",
    "Padding variation: gates check max stacked, not variation range",
    "Component-internal spacing: gates do not check cell padding, grid gaps per component"
  ]
}
```

#### H3: Screenshots --> PA Reports

```json
{
  "handoff": "H3_SCREENSHOTS_TO_PA",
  "input": {
    "screenshots": 36,
    "viewports": [1440, 1024, 768],
    "scroll_positions_per_viewport": 12,
    "total_visual_information": "36 screenshots at 1440x900+ resolution"
  },
  "output": {
    "auditor_reports": 9,
    "total_report_lines": 2700,
    "findings_generated": 27,
    "questions_answered": 56
  },
  "compression_metrics": {
    "screenshots_per_auditor": 4,
    "avg_findings_per_auditor": 3.0,
    "visual_to_text_ratio": "36 images to 2,700 lines of text"
  },
  "known_gaps": [
    "Auditors may miss details in screenshots they did not receive",
    "Scroll-through impressions are subjective and non-reproducible",
    "Visual density judgments vary between auditors"
  ]
}
```

#### H4: PA Reports --> Weaver Verdict

This is the HIGHEST-LOSS handoff by confirmed data:

```json
{
  "handoff": "H4_PA_TO_WEAVER",
  "input": {
    "auditor_reports": 9,
    "total_lines": 2700,
    "total_findings": 27,
    "by_severity": { "BLOCKING": 0, "SIGNIFICANT": 8, "MINOR": 14, "OBSERVATION": 5 }
  },
  "output": {
    "verdict_lines": 100,
    "top_3_findings": 3,
    "pa_05_score": 3.5,
    "tier_5_score": "7/8"
  },
  "compression_metrics": {
    "line_retention_pct": 3.7,
    "finding_retention_pct": 11.1,
    "significant_findings_transmitted": 3,
    "significant_findings_total": 8,
    "significant_loss_pct": 62.5,
    "minor_findings_transmitted": 0,
    "minor_findings_lost": 14,
    "observations_lost": 5
  },
  "what_was_lost": [
    { "rank": 4, "question": "PA-40", "severity": "SIGNIFICANT", "finding": "Spacing jump at S3-S4" },
    { "rank": 5, "question": "PA-44", "severity": "SIGNIFICANT", "finding": "Metaphor partially implicit" },
    { "rank": 6, "question": "PA-35", "severity": "SIGNIFICANT", "finding": "Engagement dip in second half" },
    { "rank": 7, "question": "PA-47", "severity": "SIGNIFICANT", "finding": "Visual novelty decay after S5" },
    { "rank": 8, "question": "PA-29", "severity": "SIGNIFICANT", "finding": "Header has 4 text styles competing" }
  ],
  "mitigation": "The _pa-matrix.json preserves ALL findings. The weaver protocol should include: 'Findings 4-N are preserved in _pa-matrix.json for root cause analysis.'"
}
```

#### H5: Weaver Feedback --> Builder Fix

```json
{
  "handoff": "H5_WEAVER_TO_BUILDER_FIX",
  "input": {
    "top_3_issues": [
      "Table styling in S6 (PA-05d polished)",
      "Rhythm metronomic (PA-17)",
      "Footer underweight (PA-13)"
    ],
    "feedback_lines": 100,
    "context_provided": "TOP-3 with brief description + PA-05 sub-criteria breakdown"
  },
  "output": {
    "builder_fix_actions": [
      "Changed table-compact to table-featured in S6",
      "Widened breathing divider margins by 8px",
      "Added footer-closing paragraph with Instrument Serif"
    ]
  },
  "compression_metrics": {
    "issues_transmitted": 3,
    "issues_total": 27,
    "transmission_pct": 11.1,
    "builder_fix_accuracy": "3/3 issues addressed correctly"
  },
  "known_gaps": [
    "Builder does not receive the full PA report context",
    "Builder may fix symptom (table class) without understanding cause (missing selection heuristic)",
    "Issues 4-27 persist into the shipped artifact"
  ]
}
```

### 7.3 Aggregate Compression Dashboard

The orchestrator computes this summary at end of run:

```json
{
  "compression_dashboard": {
    "pipeline_total_input_lines": 4350,
    "pipeline_total_output_lines": 1105,
    "overall_ratio": 3.94,
    "handoff_ratios": {
      "H1_refs_to_builder": { "in": 1650, "out": 1105, "ratio": 1.49, "retention": 80.9 },
      "H2_builder_to_gates": { "in": 1105, "out": 21, "ratio": 52.6, "retention": 16.5 },
      "H3_screenshots_to_pa": { "in": "36 images", "out": 2700, "ratio": "N/A" },
      "H4_pa_to_weaver": { "in": 2700, "out": 100, "ratio": 27.0, "retention": 11.1 },
      "H5_weaver_to_builder": { "in": 100, "out": 3, "ratio": 33.3, "retention": 11.1 }
    },
    "highest_loss_handoff": "H4_PA_TO_WEAVER",
    "total_pa_findings_generated": 27,
    "total_pa_findings_reaching_builder": 3,
    "end_to_end_pa_retention_pct": 11.1,
    "recommendations": [
      "H4 is the bottleneck. Consider transmitting TOP-5 instead of TOP-3.",
      "H1 retention at 80.9% is acceptable but convention coverage gap in Section 7 needs brief update.",
      "H2 coverage at 16.5% is inherent to binary gates. PA serves as the complementary quality layer."
    ]
  }
}
```

---

## 8. MASTER PROMPT ENRICHMENTS

These are the EXACT additions to the pipeline files that implement all instrumentation above. Each enrichment specifies: what to add, where, and what it produces.

### 8.1 Additions to `~/.claude/skills/build-page/SKILL.md`

**Location:** After the existing "Step 4: Build Execution" section (estimated ~line 180).
**What to add:** Instrumentation initialization and manifest writing.

```markdown
### Step 4.0: Initialize Run Manifest

Before spawning the builder, the orchestrator creates `_run-manifest.json` in the
output directory with run_id, content_source, tier, and start time:

```python
# Pseudocode -- the orchestrator writes this file
manifest = {
  "run_id": f"run-{datetime.now().strftime('%Y-%m-%d-%H%M%S')}",
  "content_source": content_path,
  "tier": classified_tier,
  "started_at": datetime.now().isoformat() + "Z",
  "stages": [],
  "handoffs": []
}
write_json("_run-manifest.json", manifest)
```

At each stage completion, the orchestrator appends a StageEntry (schema defined
in pipeline-instrumentation/01-instrumentation-design.md, Section 1.2) to the
`stages` array. The StageEntry includes: stage_id, start/end timestamps,
input/output file lists with line counts, and compression_ratio.

**The manifest is the pipeline's flight recorder.** If the build fails at any
stage, the manifest shows exactly where and when.
```

**Location:** After the existing builder spawn prompt (estimated ~line 210).
**What to add:** Builder output requirements.

```markdown
### Builder Output Requirements (MANDATORY)

The builder MUST produce 3 files:
1. `output.html` -- the page
2. `_build-log.md` -- absorption verification (see format below)
3. `_cascade-value-table.md` -- zone CSS values

The build log has 4 MANDATORY sections:
- **Section A: Reference File Acknowledgment** -- table with 6 rows (one per reference
  file), columns: File, Lines Read, Key Extractions, Applied In
- **Section B: Convention Mapping Table** -- table with 15 rows (one per convention
  section in conventions-brief.md), columns: Convention Section, Brief Line Range,
  Applied?, Where in output.html, CSS Evidence
- **Section C: Creative Rationale** -- minimum 3 entries explaining key design decisions
  with alternatives considered
- **Section D: Mechanism Deployment Log** -- table with one row per mechanism deployed,
  columns: Mechanism Name, Category (S/T/M/B/R), Deployed In, CSS Implementation,
  Perception Check (measured delta)

**If the builder does not write _build-log.md, the run FAILS automatically.**
This is not a suggestion -- it is a hard gate (DG-BUILD-LOG).
```

### 8.2 Additions to Gate Runner Specification (`design-system/pipeline/gate-runner.md`)

**Location:** Replace the existing gate output format section.
**What to add:** Enhanced gate result schema.

```markdown
### Gate Output Format

The gate runner writes `_gate-results.json` (not just console output). Every gate
produces a structured result object:

```json
{
  "gate_id": "SC-XX",
  "gate_name": "Human-readable name",
  "result": "PASS" | "FAIL",
  "threshold": { /* gate-specific threshold object */ },
  "measured_value": /* gate-specific measured value */,
  "delta_from_threshold": /* how far from the boundary */,
  "margin_pct": /* positive = headroom, negative = shortfall */,
  "elements_checked": [ /* CSS selectors evaluated */ ],
  "measurement_method": "description of how the measurement was taken",
  "raw_measurements": { /* selector: value pairs */ }
}
```

**Gate SC-09 (Background Delta) additionally writes:**
- `zone_background_map`: object mapping each zone class to its hex color and RGB tuple
- `pairwise_deltas`: array of adjacent zone pairs with per-channel RGB deltas

**Gate SC-10 (Stacked Gap) additionally writes:**
- `boundary_measurements`: array of section boundaries with component breakdown
  (padding_bottom, divider_margin_top, divider_height, divider_margin_bottom, padding_top)
  and total, plus transition_type

**Cycle tracking:** When gates run multiple times (fix cycles), the results file
includes a `cycle_comparison` array showing per-gate movement across cycles
with direction indicators (IMPROVED, WORSENED, STABLE).

### Near-Miss Alert Threshold

Any gate passing with margin_pct < 15% is flagged as a NEAR_MISS in the results.
Near-misses are surfaced in `_run-manifest.json` for trend analysis.
```

### 8.3 Additions to PA Auditor Prompt (within `build-page/SKILL.md`)

**Location:** In the PA auditor spawn prompt section (estimated ~line 280).
**What to add:** Structured output requirement for each auditor.

```markdown
### PA Auditor Output Format

Each auditor writes TWO files:
1. `_pa-report-{auditor_letter}.md` -- human-readable markdown report (existing format)
2. `_pa-response-{auditor_letter}.json` -- structured data for the traceability matrix

The JSON file has this structure:

```json
{
  "auditor_id": "{letter}",
  "auditor_role": "{role name}",
  "questions_assigned": ["PA-XX", ...],
  "viewport": "{width}px",
  "cold_look": {
    "gut_reaction": "one sentence",
    "worst_thing": "one element or area",
    "best_thing": "one element",
    "ship_verdict": "YES | YES WITH RESERVATIONS | NO"
  },
  "responses": [
    {
      "question_id": "PA-XX",
      "answer": "YES | NO | PARTIAL",
      "finding": "description if answer reveals an issue",
      "severity": "BLOCKING | SIGNIFICANT | MINOR | OBSERVATION",
      "location": "where on the page",
      "confidence": "HIGH | MEDIUM | LOW"
    }
  ],
  "additional_observations": ["any findings outside assigned questions"]
}
```

For PA-05, the response includes `sub_criteria` with pass/fail for each of:
designed, coherent, proportionate, polished.

**This JSON is the auditor's MACHINE-READABLE output.** The markdown report is for
human reading. Both are required.
```

### 8.4 Additions to Weaver Prompt (within `build-page/SKILL.md`)

**Location:** In the weaver spawn prompt section (estimated ~line 310).
**What to add:** Matrix assembly and compression measurement.

```markdown
### Weaver Output: Full Matrix + Verdict

The weaver produces 3 files:
1. `_pa-verdict.json` -- the existing verdict (PA-05 score, Tier 5 score, TOP-3)
2. `_pa-matrix.json` -- the FULL traceability matrix (ALL 56 questions x 9 auditors)
3. `_pa-verdict.md` -- human-readable verdict report (existing format)

#### Assembling `_pa-matrix.json`

The weaver reads all 9 `_pa-response-{X}.json` files and assembles them into a
single matrix. For each PA question:

1. Record the primary auditor's response
2. Scan ALL other auditors' `additional_observations` for mentions of the same
   issue (cross-auditor mentions)
3. Compute agreement rate: how many auditors who evaluated this area agree?
4. Record consensus: PASS, FAIL, CONTESTED

After assembling per-question results:

1. Compute `agreement_summary`: full agreement count, partial, disagreements,
   overall rate, most contested questions
2. Build `finding_inventory`: total findings by severity, TOP-3 transmitted to
   builder, and the COMPLETE list of findings 4-N that will NOT reach the builder
3. Add `compression_metrics`: input lines (sum of all 9 reports), output lines
   (verdict), finding retention percentage

**The matrix is the pipeline's memory.** Without it, findings 4-30 vanish. With
it, root cause tracing (Section 6) can connect PA failures to builder decisions.
```

### 8.5 Additions to Orchestrator Post-Run Protocol

**Location:** At the end of `build-page/SKILL.md`, after the fix cycle / ship decision.
**What to add:** Post-run analysis and manifest finalization.

```markdown
### Step 9: Finalize Run Manifest

After the pipeline completes (shipped, shipped-with-fixes, or escalated), the
orchestrator finalizes instrumentation:

1. **Complete `_run-manifest.json`:** Fill in completed_at, total_duration_seconds,
   outcome, fix_cycles_used, and final_scores.

2. **Compute absorption score:** Read `_build-log.md` and compute:
   - convention_coverage_pct (convention sections applied / 15)
   - mechanism_utilization_pct (mechanisms deployed / mechanisms available)
   - files_acknowledged (count of reference files with Lines Read > 0)
   - Red flag check (see Builder Absorption Protocol, Section 2.3)

3. **Compute compression dashboard:** For each of the 5 handoff points (H1-H5),
   compute input/output line counts, retention percentage, and specific losses.
   Write to `_compression-dashboard.json`.

4. **Run root cause traces (conditional):** If PA-05 < 3.5 OR Tier 5 < 6/8 OR
   any BLOCKING PA finding exists OR any gate failed 2+ cycles, generate
   `_root-cause-trace.json` with full backward traces per Section 6.

5. **Update run registry:** Append this run's summary to `_run-registry.json`
   in the pipeline output root. Recompute aggregate_stats.

6. **Generate run summary:** Write `_run-summary.json` with the standardized
   cross-run comparison schema (Section 5.1).

7. **Cross-run diff (conditional):** If a previous run exists for the same content
   (same content_hash), generate `_run-diff.json` comparing this run to the most
   recent prior run.

### File Inventory per Run

Every completed run should produce these files in the output directory:

| File | Producer | Purpose | Required? |
|------|----------|---------|-----------|
| `output.html` | Builder | The page | YES |
| `_build-log.md` | Builder | Absorption verification | YES (hard gate) |
| `_cascade-value-table.md` | Builder | Zone CSS values | YES |
| `_run-manifest.json` | Orchestrator | Stage health + timing | YES |
| `_gate-results.json` | Gate runner | Enhanced gate diagnostics | YES |
| `_pa-response-{A-I}.json` | 9 PA auditors | Structured PA responses | YES (Flagship) |
| `_pa-report-{A-I}.md` | 9 PA auditors | Human-readable PA reports | YES (Flagship) |
| `_pa-matrix.json` | Weaver | Full traceability matrix | YES (Flagship) |
| `_pa-verdict.json` | Weaver | Score + TOP-3 | YES |
| `_pa-verdict.md` | Weaver | Human-readable verdict | YES |
| `_compression-dashboard.json` | Orchestrator | Compression metrics | YES |
| `_run-summary.json` | Orchestrator | Cross-run comparison data | YES |
| `_root-cause-trace.json` | Orchestrator | Backward causal traces | CONDITIONAL |
| `_run-diff.json` | Orchestrator | Cross-run delta | CONDITIONAL |
| `screenshots/*.png` | Orchestrator | PA audit input | YES |
```

### 8.6 Additions to `~/.claude/skills/tension-composition/SKILL.md`

**Location:** At the end of Phase 4 (mechanism selection), estimated ~line 750.
**What to add:** Build plan output instrumentation.

```markdown
### Phase 4 Output: Structured Build Plan

When TC Phase 4 completes, write `_build-plan.json` (not just prose):

```json
{
  "tier": "Ceiling",
  "pattern": "CRESCENDO",
  "metaphor": "RIVER DELTA",
  "zone_count": 4,
  "zone_semantics": [
    { "zone": 1, "temperature": "warm", "density": "open", "voice": "expansive", "weight": "light" },
    { "zone": 2, "temperature": "neutral", "density": "compressed", "voice": "tight", "weight": "heavy" }
  ],
  "section_count": 11,
  "section_to_zone_map": { "S1": 1, "S2": 1, "S3": 1, "S4": 2, "S5": 2 },
  "mechanism_selections": {
    "spatial": ["S-gradient-mapping", "S-compression-ratio"],
    "temporal": ["T-reading-pace"],
    "material": ["M-border-weight", "M-surface-texture"],
    "behavioral": ["B-grid-density", "B-hover-reveal"],
    "relational": ["R-transition-typing"]
  },
  "mechanism_count": 8,
  "mechanism_per_category": { "S": 2, "T": 1, "M": 2, "B": 2, "R": 1 },
  "transition_types": [
    { "boundary": "S1-S2", "type": "smooth" },
    { "boundary": "S3-S4", "type": "bridge" },
    { "boundary": "S5-S6", "type": "breathing" }
  ],
  "isomorphism_table": [
    { "metaphor_property": "river width", "css_expression": "padding variation", "zone": "all" },
    { "metaphor_property": "delta branching", "css_expression": "grid column count", "zone": 3 }
  ],
  "builder_warnings": ["W-DEADZONE: Watch S7-S8 spacing", "W-OVERLABEL: S4 has 3 callouts"]
}
```

This build plan is consumed by the builder AND captured in `_run-manifest.json`
for compression loss analysis (how much of the plan manifested in the output).
```

### 8.7 Additions to `~/.claude/skills/perceptual-auditing/SKILL.md`

**Location:** At the end of Mode 4 specification, after the task graph (~line 512).
**What to add:** Structured output requirement.

```markdown
### Mode 4 Structured Output (MANDATORY)

In addition to the existing markdown report, each Mode 4 auditor writes a
`_pa-response-{letter}.json` file with the schema defined in the build-page
pipeline instrumentation (Section 4.1).

The structured response enables:
1. **Automated matrix assembly** -- weaver reads JSON, not markdown parsing
2. **Cross-run comparison** -- question-level results can be diffed across runs
3. **Agreement computation** -- auditor responses are machine-comparable
4. **Root cause tracing** -- PA findings can be linked back to builder decisions

The JSON is the MACHINE interface. The markdown is the HUMAN interface. Both are
mandatory. If the auditor writes only markdown, the weaver must parse it into
structured format before matrix assembly -- adding latency and error risk.
```

### 8.8 New Orchestrator Utility: `_compute-absorption-score.js`

**Purpose:** Automated computation of builder absorption metrics from `_build-log.md`.
**Location:** Referenced in orchestrator post-run protocol; implemented as inline Playwright evaluate.

```javascript
// Pseudocode for absorption score computation
// The orchestrator runs this after the builder completes

function computeAbsorptionScore(buildLog) {
  const sections = parseBuildLogSections(buildLog);

  // Section A: Reference File Acknowledgment
  const filesAcknowledged = sections.A.filter(row => row.linesRead > 0).length;
  const filesTotal = 6;

  // Section B: Convention Mapping
  const conventionsApplied = sections.B.filter(row => row.applied === "YES").length;
  const conventionsPartial = sections.B.filter(row => row.applied === "PARTIAL").length;
  const conventionsTotal = 15;
  const conventionCoverage = (conventionsApplied + conventionsPartial * 0.5) / conventionsTotal;

  // Section D: Mechanism Deployment
  const mechanismsDeployed = sections.D.length;
  const categories = new Set(sections.D.map(row => row.category));
  const categoriesCovered = categories.size;

  // Red flags
  const redFlags = [];
  if (!buildLog) redFlags.push({ flag: "BUILD_LOG_ABSENT", severity: "BLOCKING" });
  if (filesAcknowledged < filesTotal) redFlags.push({ flag: "REFERENCE_NOT_ACKNOWLEDGED", severity: "BLOCKING" });
  if (categoriesCovered < 5) redFlags.push({ flag: "MECHANISM_CATEGORY_MISSING", severity: "BLOCKING" });
  if (conventionCoverage < 0.8) redFlags.push({ flag: "LOW_CONVENTION_COVERAGE", severity: "SIGNIFICANT" });
  if (sections.C.length < 3) redFlags.push({ flag: "INSUFFICIENT_RATIONALE", severity: "SIGNIFICANT" });

  return {
    files_acknowledged: filesAcknowledged,
    files_total: filesTotal,
    convention_coverage_pct: (conventionCoverage * 100).toFixed(1),
    conventions_applied: conventionsApplied,
    conventions_partial: conventionsPartial,
    conventions_missed: conventionsTotal - conventionsApplied - conventionsPartial,
    mechanisms_deployed: mechanismsDeployed,
    mechanism_categories_covered: categoriesCovered,
    creative_rationale_entries: sections.C.length,
    red_flags: redFlags,
    score: redFlags.filter(f => f.severity === "BLOCKING").length === 0 ? "PASS" : "FAIL"
  };
}
```

---

## APPENDIX A: IMPLEMENTATION PRIORITY

| Priority | What | Effort | Impact |
|----------|------|--------|--------|
| 1 | Builder `_build-log.md` mandatory format | ~30 min (add to builder prompt) | Unlocks absorption verification |
| 2 | Enhanced `_gate-results.json` format | ~60 min (modify gate runner) | Unlocks trend analysis + near-miss detection |
| 3 | PA auditor `_pa-response-{X}.json` format | ~30 min (add to auditor prompt) | Unlocks traceability matrix |
| 4 | Weaver `_pa-matrix.json` assembly | ~45 min (add to weaver prompt) | Unlocks finding retention + agreement metrics |
| 5 | `_run-manifest.json` stage health tracking | ~45 min (add to orchestrator) | Unlocks timing + stage health |
| 6 | Post-run `_compression-dashboard.json` | ~30 min (add to orchestrator) | Unlocks compression loss quantification |
| 7 | `_run-summary.json` + `_run-registry.json` | ~30 min (add to orchestrator) | Unlocks cross-run comparison |
| 8 | `_root-cause-trace.json` conditional generation | ~60 min (add to orchestrator) | Unlocks causal chain analysis |
| 9 | `_run-diff.json` cross-run delta | ~30 min (add to orchestrator) | Unlocks intervention tracking |

**Total estimated implementation effort:** ~6 hours across 9 priorities.

**Total instrumentation overhead per run:** ~15-25 minutes added (builder log: ~5 min, enhanced gates: ~2 min, structured PA: ~5 min per auditor but parallel so ~5 min, weaver matrix: ~5 min, orchestrator post-run: ~5 min).

---

## APPENDIX B: FILE INVENTORY PER RUN

After a fully instrumented Flagship run, the output directory contains:

```
output-dir/
  output.html                        (Builder -- the page)
  _build-log.md                      (Builder -- absorption verification)
  _cascade-value-table.md            (Builder -- zone CSS values)
  _build-plan.json                   (TC / Orchestrator -- structured build plan)
  _run-manifest.json                 (Orchestrator -- stage health + timing)
  _gate-results.json                 (Gate runner -- enhanced diagnostics)
  _pa-response-A.json                (Auditor A -- structured response)
  _pa-response-B.json                (Auditor B)
  _pa-response-C.json                (Auditor C)
  _pa-response-D.json                (Auditor D)
  _pa-response-E.json                (Auditor E)
  _pa-response-F.json                (Auditor F)
  _pa-response-G.json                (Auditor G)
  _pa-response-H.json                (Auditor H)
  _pa-response-I.json                (Auditor I)
  _pa-report-A.md                    (Auditor A -- human-readable)
  _pa-report-B.md through I.md       (Auditors B-I)
  _pa-matrix.json                    (Weaver -- full traceability matrix)
  _pa-verdict.json                   (Weaver -- score + TOP-3)
  _pa-verdict.md                     (Weaver -- human-readable verdict)
  _compression-dashboard.json        (Orchestrator -- compression metrics)
  _run-summary.json                  (Orchestrator -- cross-run comparison)
  _root-cause-trace.json             (Orchestrator -- conditional)
  _run-diff.json                     (Orchestrator -- conditional)
  screenshots/
    1440-full.png
    1440-scroll-01.png through N.png
    1024-full.png
    1024-scroll-01.png through N.png
    768-full.png
    768-scroll-01.png through N.png

pipeline-root/
  _run-registry.json                 (Orchestrator -- persistent across runs)
```

**Total instrumentation files per run:** 24-26 (depending on conditionals).
**Total instrumentation lines per run:** ~2,000-4,000 lines of structured data.

---

## APPENDIX C: ANTI-GAMING CONSIDERATIONS

The instrumentation itself creates incentives. Guard against these:

| Risk | How It Manifests | Mitigation |
|------|-----------------|------------|
| Build log fabrication | Builder writes "YES" for all conventions without actually applying them | Cross-validate Section B against output.html CSS (orchestrator scans for CSS evidence cited in build log) |
| Metric optimization | Builder targets exactly 15 RGB delta (minimum) instead of perceptually optimal values | Gates report margin_pct; flag values within 10% of threshold as NEAR_MISS |
| Agreement inflation | Auditors converge on "safe" answers | Fresh-eyes protocol (zero context) prevents convergence. Auditors are information-isolated. |
| Root cause avoidance | Orchestrator skips trace generation for borderline cases | Trigger rules are mechanical: PA-05 < 3.5 OR Tier 5 < 6/8. No judgment. |
| Registry manipulation | Previous runs edited to make current run look better | Each run's `_run-summary.json` is written once and never modified. Registry appends only. |

---

**END OF INSTRUMENTATION DESIGN**

**Document statistics:**
- Sections: 8 major + 3 appendices
- Data structures defined: 14 JSON schemas
- Gate coverage: 21 gates with enhanced diagnostics
- PA coverage: 56 questions x 9 auditors (504 cells in full matrix)
- Handoff points instrumented: 5
- Files produced per run: 24-26
- Implementation effort: ~6 hours across 9 priorities
- Per-run overhead: ~15-25 minutes
- Lines: 598

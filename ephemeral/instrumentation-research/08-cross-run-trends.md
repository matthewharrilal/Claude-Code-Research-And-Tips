# Cross-Run Trend Analysis and Pipeline Learning System

**Agent:** Opus (trend analyst)
**Date:** 2026-02-26
**Scope:** Design the complete cross-run trend analysis system — registry, trend detection, regression alerts, content correlation, pipeline version comparison, pattern library, predictive modeling, comparison reports, and visualizations.

---

## Table of Contents

1. [Run Registry Schema](#1-run-registry-schema)
2. [Trend Detection](#2-trend-detection)
3. [Regression Detection](#3-regression-detection)
4. [Content Type Correlation](#4-content-type-correlation)
5. [Pipeline Version Effectiveness](#5-pipeline-version-effectiveness)
6. [Pattern Library](#6-pattern-library)
7. [Predictive Model](#7-predictive-model)
8. [Cross-Run Comparison Report](#8-cross-run-comparison-report)
9. [Data Visualization Formats](#9-data-visualization-formats)
10. [Implementation Specification](#10-implementation-specification)
11. [Statistical Rigor with Small N](#11-statistical-rigor-with-small-n)

---

## 1. Run Registry Schema

### 1.1 Design Principles

The run registry is the SINGLE SOURCE OF TRUTH for cross-run analysis. It replaces the human-readable `cross-run-tracker.md` table (which remains for quick orchestrator reference) with a machine-readable JSON database that enables programmatic trend detection.

**Key requirements:**
- Append-only (never delete or modify historical entries)
- Every field has a defined source (auto vs manual) and capture point (which pipeline phase)
- Schema versioned (breaking changes increment major version)
- Backward-compatible (new fields default to `null`, old entries remain valid)

### 1.2 `run-registry.json` — Full Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Pipeline Run Registry",
  "description": "Master cross-run database. Append one entry per pipeline run.",
  "type": "object",
  "required": ["schemaVersion", "runs"],
  "properties": {
    "schemaVersion": { "type": "string", "const": "2.0" },
    "lastUpdated": { "type": "string", "format": "date-time" },
    "runs": {
      "type": "array",
      "items": { "$ref": "#/$defs/RunEntry" }
    }
  },
  "$defs": {
    "RunEntry": {
      "type": "object",
      "required": ["id", "slug", "date", "pipelineVersion", "verdict"],
      "properties": {

        "id": {
          "type": "string",
          "description": "Unique run ID: RUN-YYYYMMDD-NNN (NNN = sequential per day)",
          "pattern": "^RUN-\\d{8}-\\d{3}$"
        },

        "identification": {
          "type": "object",
          "properties": {
            "slug": { "type": "string" },
            "date": { "type": "string", "format": "date" },
            "pipelineVersion": {
              "type": "string",
              "description": "Exact pipeline version: pre-v3, v3, v3.1, v4, v5...",
              "enum": ["pre-v3", "v3", "v3.1", "v4", "v5"]
            },
            "builderModel": {
              "type": "string",
              "enum": ["opus", "sonnet"]
            },
            "refineBuilderModel": {
              "type": ["string", "null"],
              "enum": ["opus", "sonnet", null]
            },
            "outputPath": { "type": "string" },
            "isRerun": {
              "type": "boolean",
              "description": "True if this run uses content from a previous run"
            },
            "previousRunId": {
              "type": ["string", "null"],
              "description": "If isRerun, link to the previous run ID for same content"
            },
            "experimentalConditions": {
              "type": ["string", "null"],
              "description": "Free text noting any non-standard conditions (e.g., 'Sonnet builder test', 'recipe-only prompt')"
            }
          }
        },

        "content": {
          "type": "object",
          "description": "Content fingerprint — enables cross-run content correlation",
          "properties": {
            "sourcePath": { "type": "string" },
            "contentType": {
              "type": "string",
              "enum": ["article", "essay", "research", "tutorial", "reference", "mixed"]
            },
            "wordCount": { "type": "integer", "description": "Source markdown word count" },
            "sectionCount": { "type": "integer", "description": "Number of H2/H3 sections in source" },
            "heterogeneity": {
              "type": "string",
              "enum": ["LOW", "MEDIUM", "HIGH"],
              "description": "LOW = prose-only, MEDIUM = prose + some structured data, HIGH = prose + tables + code + lists"
            },
            "metaphorViability": {
              "type": "string",
              "enum": ["NATIVE", "IMPOSED", "AMBIGUOUS"],
              "description": "NATIVE = content naturally suggests metaphors, IMPOSED = metaphor must be forced, AMBIGUOUS = unclear"
            },
            "metaphorChosen": {
              "type": ["string", "null"],
              "description": "The actual metaphor selected by TC pipeline (e.g., 'Factory/Refinery')"
            },
            "zoneCount": { "type": "integer" },
            "narrativeComplexity": {
              "type": "string",
              "enum": ["LINEAR", "BRANCHING", "CIRCULAR", "ARGUMENTATIVE"],
              "description": "LINEAR = chronological/sequential, BRANCHING = multiple threads, CIRCULAR = returns to opening, ARGUMENTATIVE = thesis-evidence-conclusion"
            },
            "contentFingerprint": {
              "type": "string",
              "description": "SHA-256 hash of source markdown (enables exact same-content detection)"
            }
          }
        },

        "quality": {
          "type": "object",
          "description": "Primary quality metrics",
          "properties": {
            "pa05Initial": {
              "type": ["number", "null"],
              "minimum": 0, "maximum": 4,
              "description": "PA-05 score before any REFINE/IMPROVE cycles"
            },
            "pa05Final": {
              "type": ["number", "null"],
              "minimum": 0, "maximum": 4,
              "description": "PA-05 score after all cycles"
            },
            "pa05Mode": {
              "type": ["string", "null"],
              "enum": ["FLAT", "COMPOSED", "DESIGNED", null]
            },
            "tier5Score": {
              "type": ["number", "null"],
              "minimum": 0, "maximum": 9
            },
            "soulViolations": { "type": "integer", "default": 0 },
            "emotionalArc": {
              "type": ["object", "null"],
              "properties": {
                "authority": { "type": "integer", "minimum": 0, "maximum": 10 },
                "closure": { "type": "integer", "minimum": 0, "maximum": 10 },
                "surprise": { "type": "integer", "minimum": 0, "maximum": 10 },
                "delight": { "type": "integer", "minimum": 0, "maximum": 10 }
              }
            },
            "paConvergenceCount": {
              "type": ["integer", "null"],
              "description": "Number of auditors (out of 9) who flagged the same dominant finding"
            },
            "dominantFinding": {
              "type": ["string", "null"],
              "description": "The finding flagged by convergenceCount auditors (e.g., 'dark zone fatigue')"
            }
          }
        },

        "gates": {
          "type": "object",
          "properties": {
            "totalExecuted": { "type": "integer" },
            "totalPass": { "type": "integer" },
            "totalFail": { "type": "integer" },
            "totalSkip": { "type": "integer" },
            "requiredPass": { "type": "integer" },
            "requiredFail": { "type": "integer" },
            "requiredTotal": { "type": "integer" },
            "passRate": {
              "type": "number",
              "description": "totalPass / (totalPass + totalFail), 0.0-1.0"
            },
            "requiredPassRate": {
              "type": "number",
              "description": "requiredPass / requiredTotal, 0.0-1.0"
            },
            "gr48Status": { "type": "string", "enum": ["PASS", "FAIL", "SKIP"] },
            "failedGateIds": {
              "type": "array",
              "items": { "type": "string" }
            },
            "falsePositiveGateIds": {
              "type": "array",
              "items": { "type": "string" },
              "description": "Gates triaged as FALSE-POS"
            },
            "genuineFailGateIds": {
              "type": "array",
              "items": { "type": "string" },
              "description": "Gates triaged as GENUINE"
            }
          }
        },

        "iteration": {
          "type": "object",
          "properties": {
            "totalCycles": {
              "type": "integer",
              "description": "1 = initial only, 2 = initial + 1 REFINE, etc."
            },
            "refineCycles": { "type": "integer" },
            "refineType": {
              "type": ["string", "null"],
              "enum": ["R-A", "R-C", null],
              "description": "R-A = Pass B only, R-C = Pass A + new Pass B"
            },
            "pa05Trajectory": {
              "type": "array",
              "items": { "type": "number" },
              "description": "PA-05 at each measurement point: [initial, after-refine-1, after-refine-2, ...]"
            },
            "pa05DeltaPerCycle": {
              "type": "array",
              "items": { "type": "number" },
              "description": "Delta per cycle: [refine1 - initial, refine2 - refine1, ...]"
            },
            "verdictTrajectory": {
              "type": "array",
              "items": { "type": "string" },
              "description": "Verdict at each stage: ['IMPROVE', 'SHIP WITH FIXES']"
            }
          }
        },

        "build": {
          "type": "object",
          "properties": {
            "htmlLines": { "type": ["integer", "null"] },
            "cssLines": { "type": ["integer", "null"] },
            "mechanismCount": { "type": ["integer", "null"] },
            "componentTypes": { "type": ["integer", "null"] },
            "channelShifts": { "type": ["integer", "null"] },
            "gridLayouts": { "type": ["integer", "null"] },
            "breakpointCount": { "type": ["integer", "null"] },
            "cssBudgetAllocation": {
              "type": ["object", "null"],
              "description": "CSS lines by category",
              "properties": {
                "typography": { "type": "integer" },
                "spacing": { "type": "integer" },
                "color": { "type": "integer" },
                "layout": { "type": "integer" },
                "responsive": { "type": "integer" },
                "animation": { "type": "integer" },
                "other": { "type": "integer" }
              }
            },
            "convictionPresent": { "type": "boolean" },
            "selfEvalPresent": { "type": "boolean" }
          }
        },

        "cost": {
          "type": "object",
          "properties": {
            "wallClockMinutes": { "type": ["number", "null"] },
            "agentCount": { "type": ["integer", "null"] },
            "agentRespawns": { "type": ["integer", "null"] },
            "screenshotCount": { "type": ["integer", "null"] },
            "bvRevisionCycles": { "type": ["integer", "null"] },
            "sessions": {
              "type": ["integer", "null"],
              "description": "Number of separate Claude Code sessions needed"
            },
            "estimatedTokensInput": {
              "type": ["integer", "null"],
              "description": "Rough estimate of total input tokens across all agents"
            },
            "estimatedTokensOutput": {
              "type": ["integer", "null"],
              "description": "Rough estimate of total output tokens"
            }
          }
        },

        "brief": {
          "type": "object",
          "description": "Execution brief quality metrics",
          "properties": {
            "briefLines": { "type": ["integer", "null"] },
            "recipeVerbCount": { "type": ["integer", "null"] },
            "checklistVerbCount": { "type": ["integer", "null"] },
            "recipeChecklistRatio": { "type": ["number", "null"] },
            "dispositionsPresent": { "type": ["integer", "null"] },
            "dispositionsTotal": { "type": ["integer", "null"] },
            "backgroundHexLocked": { "type": ["boolean", "null"] },
            "compressionSourceToMap": { "type": ["number", "null"] },
            "compressionMapToBrief": { "type": ["number", "null"] }
          }
        },

        "pa": {
          "type": "object",
          "description": "Perceptual audit operational metrics",
          "properties": {
            "questionsCovered": { "type": ["integer", "null"] },
            "questionsTotal": { "type": ["integer", "null"] },
            "auditorCount": { "type": ["integer", "null"] },
            "experientialPassRate": { "type": ["number", "null"], "description": "0.0-1.0" },
            "uniqueFindings": { "type": ["integer", "null"] },
            "respawnCount": { "type": ["integer", "null"] }
          }
        },

        "verdict": {
          "type": "string",
          "enum": ["SHIP", "SHIP WITH FIXES", "IMPROVE", "RETHINK", "REBUILD"]
        },

        "fixes": {
          "type": ["object", "null"],
          "properties": {
            "mechanical": { "type": "integer" },
            "structural": { "type": "integer" },
            "compositional": { "type": "integer" }
          }
        },

        "defects": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": { "type": "string" },
              "description": { "type": "string" },
              "severity": { "type": "string", "enum": ["BLOCKING", "SIGNIFICANT", "MINOR"] },
              "category": { "type": "string", "enum": ["MECHANICAL", "STRUCTURAL", "COMPOSITIONAL"] },
              "gateId": { "type": ["string", "null"] },
              "recurringFrom": {
                "type": ["string", "null"],
                "description": "If this defect appeared in a previous run, link to that run ID"
              }
            }
          }
        },

        "strengths": {
          "type": "array",
          "items": { "type": "string" },
          "description": "Top 3 positive qualities from weaver/artistic assessment"
        },

        "notes": {
          "type": ["string", "null"],
          "description": "Free text for anything that doesn't fit structured fields"
        }
      }
    }
  }
}
```

### 1.3 Field Source Map

Every field must have a defined capture source. This prevents "who fills this in?" ambiguity.

| Field Group | Auto-Capture Source | Manual Fields | Capture Phase |
|-------------|-------------------|---------------|---------------|
| identification | Preflight script + MANIFEST header | experimentalConditions | Phase 0 |
| content | Content Map + SHA-256 hash | metaphorViability, narrativeComplexity | Phase 0 |
| quality | Weaver reports | emotionalArc (from weaver artistic) | Phase 3C |
| gates | gate-runner JSON output | falsePositiveGateIds (from triage) | Phase 3A |
| iteration | Iteration Log in tracker | refineType (orchestrator decision) | Phase IMPROVE |
| build | gate-runner metrics (GR-14, GR-55, etc.) | cssBudgetAllocation (post-run analysis) | Phase 3A |
| cost | Timing ledger + agent spawn log | sessions, token estimates | Phase END |
| brief | BV gate output | none (all auto from BV gates) | Phase 1 |
| pa | PA batch metadata | none (all auto from PA manifest) | Phase 3B |
| verdict | Weaver verdict | none | Phase 3C |
| fixes | Weaver diagnostic | none | Phase 3C |
| defects | Weaver diagnostic + gate triage | recurringFrom (cross-run lookup) | Phase END |

### 1.4 Relationship to Existing Infrastructure

| Existing File | Purpose After Registry | Relationship |
|---------------|----------------------|--------------|
| `cross-run-tracker.md` | Human-readable summary (KEEP) | Registry is the authority; tracker is a VIEW |
| `run-summary-schema.json` | DEPRECATED — replaced by run-registry.json schema | Registry subsumes this |
| `FIX-TRACKER.md` | Defect-level tracking (KEEP) | Registry links defects; FIX-TRACKER tracks remediation |
| `EXECUTION-TRACKER-TEMPLATE.md` | Per-run detailed tracking (KEEP) | Registry extracts from tracker at pipeline end |
| Per-run `run-summary.json` | Still produced per-build (KEEP) | Registry appends from this; per-run file is archive copy |

---

## 2. Trend Detection

### 2.1 When Trends Become Detectable

| N (runs) | Detectable | Not Yet Detectable |
|----------|------------|-------------------|
| 3 | Direction (improving/declining/stable), extreme outliers | Correlation strength, confidence intervals |
| 5 | Simple moving average, content-type grouping starts | Statistical significance, regression models |
| 8 | Content-quality correlation (if 3+ content types), gate false-positive accumulation rate | Predictive accuracy, cost-efficiency trends |
| 10 | Pipeline version comparison (if 3+ versions with 3+ runs each), pattern library seeding | Multi-variable regression |
| 15+ | Confidence intervals, seasonal/temporal effects, builder model comparison | Causal attribution |

### 2.2 Trend Metrics (computed after every run)

#### T-01: PA-05 Trend Line

```
Compute: Linear regression on pa05Final over run index (chronological order)
Slope interpretation:
  slope > +0.15 per run  → IMPROVING
  -0.15 <= slope <= +0.15 → STABLE
  slope < -0.15 per run  → DECLINING
Display: Scatter plot with regression line + R² value
Minimum N: 3 runs
```

**Why +/- 0.15:** PA-05 is a 4-point scale. A slope of 0.15 means gaining ~1 full PA-05 point every 7 runs. Below that threshold, noise dominates signal.

#### T-02: Gate Pass Rate Evolution

```
Compute: requiredPassRate per run, plotted chronologically
Alert: If latest run's requiredPassRate < median of previous runs
Minimum N: 3 runs
Confound: Gate count changes across pipeline versions (normalize by counting REQUIRED only)
```

#### T-03: IMPROVE/REFINE Effectiveness Trend

```
Compute: pa05DeltaPerCycle[0] (first REFINE delta) per run that had REFINE
Plot: Delta values over time
Alert: If delta < +0.5 for 2 consecutive runs (REFINE may be losing effectiveness)
Minimum N: 3 runs with REFINE
```

#### T-04: Cost Efficiency Trend

```
Compute: pa05Final / wallClockMinutes (quality per hour)
         pa05Final / agentCount (quality per agent)
Plot: Both over time
Alert: If quality/hour drops 20%+ from previous run
Minimum N: 4 runs (need 3+ with timing data)
```

#### T-05: Defect Recurrence Rate

```
Compute: For each defect in current run, check if defect.recurringFrom is non-null
Rate: recurring_defects / total_defects
Plot: Recurrence rate over time
Alert: If recurrence rate > 50% for 2 consecutive runs (same bugs keep coming back)
Minimum N: 3 runs
```

#### T-06: Brief Quality Trend

```
Compute: recipeChecklistRatio per run
Plot: Ratio over time
Alert: If ratio drops below 3:1 (recipe format degrading into checklist)
Minimum N: 3 runs
```

#### T-07: Gate False Positive Accumulation

```
Compute: |falsePositiveGateIds| per run
Plot: Count over time
Alert: If count > 3 (orchestrator attention budget consumed by false positives)
Minimum N: 4 runs
```

### 2.3 Trend Update Protocol

After every run:
1. Append run entry to `run-registry.json`
2. Compute all applicable trend metrics (skip those below minimum N)
3. Generate trend summary (Section 8 template)
4. If any alert fires, mark it in the comparison report

After every 3rd run:
1. Update the TRENDS section of `cross-run-tracker.md`
2. Review pattern library (Section 6) for new patterns
3. Review predictive model (Section 7) accuracy

---

## 3. Regression Detection

### 3.1 Per-Run Regression Checks

Execute these checks IMMEDIATELY after appending a new run to the registry. Each check compares the new run against the PREVIOUS run (same content if available, otherwise most recent).

| ID | Check | Condition | Severity | Action |
|----|-------|-----------|----------|--------|
| REG-01 | PA-05 regression | pa05Final < previous.pa05Final AND same content | WARNING | Log + highlight in comparison report |
| REG-02 | PA-05 collapse | pa05Final < previous.pa05Final - 1.0 | BLOCKING | Immediate investigation before next run |
| REG-03 | Gate pass rate regression | passRate < previous.passRate - 0.10 | WARNING | Review new/changed gates for false positives |
| REG-04 | Required gate regression | requiredPassRate < previous.requiredPassRate | WARNING | Investigate |
| REG-05 | REFINE ineffectiveness | pa05DeltaPerCycle[0] < +0.3 | WARNING | REFINE builder may need different input |
| REG-06 | Cost escalation | wallClockMinutes > previous.wallClockMinutes * 1.5 AND pa05Final <= previous.pa05Final | WARNING | Process overhead may be growing |
| REG-07 | Defect recurrence | defect.recurringFrom is non-null for > 50% of defects | WARNING | Fixes are not sticking |
| REG-08 | Brief degradation | recipeChecklistRatio < 3.0 | BLOCKING | Brief assembler producing checklists not recipes |
| REG-09 | PA coverage regression | questionsCovered / questionsTotal < 0.90 | WARNING | PA deployment may have gaps |
| REG-10 | Soul violation introduction | soulViolations > 0 AND previous.soulViolations == 0 | BLOCKING | Identity constraint breached |

### 3.2 Cross-Content Regression (Same Pipeline Version)

When comparing runs on DIFFERENT content but the SAME pipeline version:

```
Expected: pa05Final should be within ±0.5 of average for that pipeline version
Alert: If pa05Final < (avgForVersion - 0.75), flag as CONTENT-SENSITIVE REGRESSION
Interpretation: Either the content is unusually challenging, or the pipeline regressed
Disambiguation: Check content.heterogeneity and content.metaphorViability
```

### 3.3 Cross-Version Regression (Same Content)

When `content.contentFingerprint` matches between two runs on different pipeline versions:

```
Expected: Later version should score >= earlier version
Alert: If laterVersion.pa05Final < earlierVersion.pa05Final
Interpretation: Pipeline change may have introduced a regression
Action: Compare gates.failedGateIds to identify which gates changed behavior
```

### 3.4 Regression Report Format

When a regression is detected, auto-generate a regression block:

```markdown
## REGRESSION DETECTED: REG-XX

**Current run:** RUN-20260226-001 (yegge-gas-town, v5)
**Previous run:** RUN-20260225-001 (yegge-gas-town, v4)

**Metric:** PA-05 Final
**Previous value:** 3.5
**Current value:** 2.5
**Delta:** -1.0

**Possible causes (auto-analyzed):**
1. Pipeline version change (v4 → v5): Check gates added/removed
2. Builder model change: [same / different]
3. Content fingerprint: [same / different]
4. Brief quality: recipeChecklistRatio [previous] → [current]
5. REFINE applied: [previous: yes/no] → [current: yes/no]

**Disambiguation steps:**
1. If content same + version same → builder variance (re-run recommended)
2. If content same + version different → pipeline regression (investigate gates)
3. If content different + version same → content difficulty (check fingerprint)
```

---

## 4. Content Type Correlation

### 4.1 Content Fingerprint

The content fingerprint enables three types of comparison:
1. **Exact match** (`contentFingerprint` SHA-256 identical): Same content, different pipeline versions
2. **Type match** (`contentType` identical): Different articles of same type
3. **Feature match** (heterogeneity + metaphorViability + narrativeComplexity): Structurally similar content

### 4.2 Content Feature Dimensions

| Dimension | Values | Expected Quality Impact | Minimum N to Test |
|-----------|--------|------------------------|--------------------|
| contentType | article / essay / research / tutorial / reference | tutorial/reference may score lower (less metaphor-rich) | 3 per type |
| heterogeneity | LOW / MEDIUM / HIGH | HIGH should score higher (more visual variety possible) | 5 total (2+ per level) |
| metaphorViability | NATIVE / IMPOSED / AMBIGUOUS | NATIVE should score higher (content-driven metaphor) | 5 total |
| narrativeComplexity | LINEAR / BRANCHING / CIRCULAR / ARGUMENTATIVE | ARGUMENTATIVE may score highest (natural tension) | 8 total (2+ per type) |
| wordCount | continuous | Expected: inverted-U (too short = no room, too long = fatigue) | 8 total |
| sectionCount | continuous | Expected: 4-7 optimal for zone mapping | 8 total |

### 4.3 Content-Quality Correlation Analysis

After N >= 8 runs with diverse content:

```
For each content dimension:
  1. Group runs by dimension value
  2. Compute mean + stdev of pa05Final per group
  3. If stdev_between_groups > stdev_within_groups → dimension predicts quality
  4. Rank dimensions by predictive power
```

**Output:** Content Difficulty Rating

```json
{
  "contentDifficultyRating": {
    "slug": "new-article-xyz",
    "estimatedPA05Range": [2.5, 3.5],
    "basedOn": [
      { "dimension": "heterogeneity", "value": "HIGH", "historicalMean": 3.2 },
      { "dimension": "metaphorViability", "value": "NATIVE", "historicalMean": 3.5 },
      { "dimension": "narrativeComplexity", "value": "ARGUMENTATIVE", "historicalMean": 3.1 }
    ],
    "confidence": "LOW (N < 10 for all dimensions)",
    "closestPreviousRun": "RUN-20260225-001"
  }
}
```

### 4.4 Content Similarity Index

For comparing how "alike" two pieces of content are:

```
similarity(A, B) = (
  0.3 * (A.contentType == B.contentType ? 1 : 0) +
  0.2 * (A.heterogeneity == B.heterogeneity ? 1 : 0) +
  0.2 * (A.metaphorViability == B.metaphorViability ? 1 : 0) +
  0.15 * (A.narrativeComplexity == B.narrativeComplexity ? 1 : 0) +
  0.15 * (1 - |A.wordCount - B.wordCount| / max(A.wordCount, B.wordCount))
)

Range: 0.0 (completely different) to 1.0 (identical profile)
```

This index enables finding the "most similar previous run" for any new content, providing the best available quality prediction.

---

## 5. Pipeline Version Effectiveness

### 5.1 The Confound Problem

The pipeline has been run 6 times (in registry terms). Variables that change between runs:
- Pipeline version (pre-v3, v3, v3.1, v4, v5)
- Content (though some runs share content)
- Builder model (all Opus so far)
- REFINE (present in some runs, absent in others)
- Prompt format (recipe vs checklist evolved over time)

With N=6, we cannot isolate pipeline version as the sole variable. The approach must be:
1. **Same-content comparison** (strongest signal): When the same content is run on different versions
2. **Matched-content comparison** (medium signal): Content with similar fingerprints across versions
3. **Aggregated comparison** (weakest signal): All runs on a version, regardless of content

### 5.2 Same-Content Version Comparison

The Yegge Gas Town content has been run 4+ times across versions. This is the gold standard:

```markdown
## Same-Content Pipeline Comparison: yegge-gas-town

| Version | Date | PA-05 Init | PA-05 Final | REFINE | Gate% | Key Change |
|---------|------|------------|-------------|--------|-------|------------|
| pre-v3 (C) | 02-20 | ? | 3.5 | 0 | ? | Baseline |
| v3 pre-wave3 (B) | 02-23 | ? | 3.0 | 0 | 74% | Structured gates |
| v3.1 wave3 (A) | 02-24 | ~2.0 | 3.0 | 1 | 74% | Gate split, PA split |
| v3.1 (current) | 02-25 | 2.0 | 3.5 | 1 | ~73% | Hex lock, DPR fix |

Delta (latest - first): 0.0 (both 3.5)
Delta (latest initial - first): -1.5 (2.0 vs assumed ~3.0)
```

**Interpretation framework:**
- If pa05Final improves across versions → pipeline version helps
- If pa05Initial stays flat but pa05Final improves → REFINE is the variable, not pipeline
- If pa05Final stays flat but cost decreases → efficiency improves (same quality, less work)

### 5.3 Controlled Experiment Design

To properly attribute quality to pipeline version:

```
Experiment: Pipeline Version A/B Test

Control variables:
  - Same content (identical contentFingerprint)
  - Same builder model (Opus)
  - Same REFINE policy (either both get REFINE or neither)
  - Same PA protocol (same questions, same auditor count)

Independent variable:
  - Pipeline version (e.g., v4 vs v5)

Dependent variables:
  - pa05Initial (pre-REFINE quality — measures pipeline prompt quality)
  - pa05Final (post-REFINE quality — measures overall system quality)
  - wallClockMinutes (efficiency)
  - agentCount (resource usage)

Sample size needed:
  - For detecting PA-05 difference of >=0.5 with 80% confidence: N=5 per version
  - For detecting PA-05 difference of >=1.0 with 80% confidence: N=3 per version

Practical recommendation:
  - Run each version on 3 different content pieces (9 runs total per comparison)
  - Include 1 same-content run per version for direct comparison
```

### 5.4 Version Effectiveness Score

After 3+ runs per version, compute:

```
VersionScore(v) = {
  meanPA05Initial: mean(runs.filter(r => r.pipelineVersion == v).pa05Initial),
  meanPA05Final: mean(runs.filter(r => r.pipelineVersion == v).pa05Final),
  meanWallClock: mean(runs.filter(r => r.pipelineVersion == v).wallClockMinutes),
  meanGatePassRate: mean(runs.filter(r => r.pipelineVersion == v).passRate),
  qualityPerHour: meanPA05Final / (meanWallClock / 60),
  N: count(runs.filter(r => r.pipelineVersion == v)),
  confidence: N >= 5 ? "MODERATE" : "LOW"
}
```

### 5.5 Version Changelog Impact Analysis

For each pipeline version change, track which modifications had observable impact:

```json
{
  "versionChanges": {
    "v3.1": {
      "changes": [
        { "id": "D-09", "description": "Background hex lock in brief", "expectedImpact": "Eliminate adjacent bg delta failures" },
        { "id": "GATE-SPLIT", "description": "Monolithic gate runner → 5 files", "expectedImpact": "Better maintainability, no quality impact" }
      ],
      "observedImpact": {
        "D-09": "CONFIRMED — zero adjacent bg delta failures in v3.1 runs vs 40% failure rate in v3",
        "GATE-SPLIT": "CONFIRMED — no quality impact, maintenance improved"
      }
    }
  }
}
```

---

## 6. Pattern Library

### 6.1 Pattern Schema

After each run, check if any new patterns can be derived or existing patterns validated.

```json
{
  "patterns": [
    {
      "id": "PAT-001",
      "name": "REFINE adds approximately +1.0-1.5 PA-05 per cycle",
      "type": "RATE",
      "confidence": "MODERATE",
      "supportingRuns": ["RUN-20260225-001"],
      "contradictingRuns": [],
      "firstObserved": "2026-02-25",
      "lastValidated": "2026-02-25",
      "N": 1,
      "formula": "pa05DeltaPerCycle[0] ≈ 1.0-1.5",
      "conditions": "Opus builder, generative REFINE (not damage control), isolation from gate scores",
      "useCase": "Estimate post-REFINE quality before committing to REFINE"
    }
  ]
}
```

### 6.2 Seed Patterns (from existing data)

These patterns are derived from the 6 historical runs. Each needs validation as N grows.

| ID | Pattern | Current Evidence | Confidence | Min N to Confirm |
|----|---------|-----------------|------------|-----------------|
| PAT-001 | REFINE adds +1.0-1.5 PA-05 per cycle | 1 clean REFINE (+1.5), 1 corrupted (+1.0?) | LOW (N=1 clean) | 3 REFINE runs |
| PAT-002 | Opus builder required for PA-05 >= 2.0 | All PA-05 >= 2.0 builds are Opus | LOW (no Sonnet comparison) | 2 Sonnet builds |
| PAT-003 | Recipe format produces higher PA-05 than checklist | Middle (recipe, 4.0) vs Flagship (checklist, 1.5) | LOW (confounded) | 3 matched pairs |
| PAT-004 | pa05Initial plateaus at 2.0-2.5 without REFINE | Middle 4.0 is outlier; v3 runs: 2.0, ~2.0 | LOW (N=2 clean) | 5 non-REFINE runs |
| PAT-005 | NATIVE metaphor viability predicts higher PA-05 | Gas Town (NATIVE, 3.5) vs Flagship (research, 1.5) | LOW (confounded by content) | 5 with diverse viability |
| PAT-006 | 5 zones optimal (fewer = concentrated, more = diluted) | 5 zones (3.5) vs 6 zones (3.0) on same content | VERY LOW (N=1) | 5 with zone variation |
| PAT-007 | Dark inversion (light→dark→light) creates strongest single-zone impact | 2 runs with dark Z3 scored highest for authority | VERY LOW | 4 with/without inversion |
| PAT-008 | Gate false positives accumulate at ~1 per 3 runs | C: 0 FP, B: 1, A: 2, current: 3 (on same content across versions) | MODERATE (4 data points) | 6 total runs |
| PAT-009 | Same content, different metaphor → different quality profile | Factory (3.5) vs Settlement (3.0) on identical content | VERY LOW (N=1 pair) | 3 pairs |
| PAT-010 | D-09 hex lock eliminates adjacent bg delta failures | Pre-D09: 40% bg delta fail. Post-D09: 0% | MODERATE (2 vs 2) | 5 post-D09 runs |

### 6.3 Pattern Lifecycle

```
HYPOTHESIZED → OBSERVED (N=1) → SUPPORTED (N=3, no contradictions) → CONFIRMED (N=5+)
                                → CONTESTED (N=3 with contradictions) → REVISED or RETIRED
```

Every 5th run, review all patterns:
- CONFIRMED patterns with contradictions → downgrade to SUPPORTED
- OBSERVED patterns still at N=1 after 5 runs → mark STALE
- New patterns from data that don't match any existing → add as HYPOTHESIZED

### 6.4 Pattern Application

Patterns at SUPPORTED or higher are actionable:

| Pattern Confidence | How It's Used |
|-------------------|---------------|
| CONFIRMED | Include in pre-run predictions, cite in comparison reports |
| SUPPORTED | Mention in predictions with caveat, use for planning |
| OBSERVED | Note in reports but do not use for decisions |
| HYPOTHESIZED | Track only, do not surface to orchestrator |

---

## 7. Predictive Model

### 7.1 Pre-Run Quality Prediction

Before each run, generate a quality prediction based on available patterns and content analysis.

```markdown
## Pre-Run Quality Prediction: {slug}

### Content Analysis
- Type: {contentType}
- Heterogeneity: {heterogeneity}
- Metaphor viability: {metaphorViability}
- Narrative complexity: {narrativeComplexity}
- Word count: {wordCount}

### Closest Previous Runs (by content similarity index)
1. {run1.slug} (similarity: 0.85) — PA-05: {run1.pa05Final}
2. {run2.slug} (similarity: 0.72) — PA-05: {run2.pa05Final}
3. {run3.slug} (similarity: 0.60) — PA-05: {run3.pa05Final}

### Predicted Quality Range

| Metric | Predicted | Confidence | Basis |
|--------|-----------|------------|-------|
| PA-05 Initial | 2.0-2.5 | LOW | PAT-004 (N=2) + content similarity |
| PA-05 Post-REFINE | 3.0-3.5 | LOW | PAT-001 (N=1) + similar content precedent |
| Tier 5 | 7-9/9 | LOW | Only 1 data point with T5 scoring |
| Gate Pass Rate | 70-80% | MODERATE | 4 runs with gate data |
| Wall Clock | 150-250 min | LOW | High variance in historical data |

### Risk Factors
- {contentType} has never been run before → prediction may be unreliable
- Metaphor viability is IMPOSED → historical mean for IMPOSED: N/A (insufficient data)
- Word count {wordCount} is outside observed range ({min}-{max}) → extrapolation risk

### Recommendation
{PROCEED / CAUTION / INVESTIGATE}
```

### 7.2 Prediction Accuracy Tracking

After each run, compare prediction to actual:

```json
{
  "predictions": [
    {
      "runId": "RUN-20260226-001",
      "predicted": { "pa05Initial": [2.0, 2.5], "pa05Final": [3.0, 3.5] },
      "actual": { "pa05Initial": 2.5, "pa05Final": 3.0 },
      "accuracy": {
        "pa05InitialInRange": true,
        "pa05FinalInRange": true,
        "pa05InitialError": 0.0,
        "pa05FinalError": 0.0
      }
    }
  ],
  "overallAccuracy": {
    "pa05InitialHitRate": 0.75,
    "pa05FinalHitRate": 0.60,
    "meanAbsoluteError": 0.3
  }
}
```

### 7.3 Model Evolution

| N (runs) | Prediction Method | Expected Accuracy |
|----------|------------------|-------------------|
| < 5 | Nearest-neighbor (closest content similarity) | Very low (+-1.0 PA-05) |
| 5-10 | Group mean by content features + pattern overlay | Low-moderate (+-0.5 PA-05) |
| 10-20 | Simple linear regression on top 3 predictive features | Moderate (+-0.3 PA-05) |
| 20+ | Multi-variable regression with confidence intervals | Moderate-high (+-0.2 PA-05) |

### 7.4 Variables With Expected Predictive Power

Ranked by expected impact (to be validated with data):

1. **REFINE applied (yes/no):** Binary, expected +1.0-1.5 PA-05 when yes
2. **Builder model (Opus/Sonnet):** Binary, expected significant (but unvalidated — PAT-002)
3. **Metaphor viability (NATIVE/IMPOSED):** Expected moderate impact
4. **Content heterogeneity (LOW/MED/HIGH):** Expected moderate impact
5. **Pipeline version (ordinal):** Expected small positive trend (each version slightly better)
6. **Brief recipeChecklistRatio:** Expected positive correlation with quality
7. **Word count:** Expected inverted-U (too short or too long = lower quality)
8. **Zone count:** Expected inverted-U (4-6 optimal)

---

## 8. Cross-Run Comparison Report

### 8.1 Report Template

Auto-generated after every run. Sections expand as N grows.

```markdown
# Cross-Run Comparison Report: {current_slug} ({current_date})

## Run Identification
| Field | Value |
|-------|-------|
| Run ID | {id} |
| Pipeline Version | {pipelineVersion} |
| Builder Model | {builderModel} |
| Content Type | {contentType} |
| Content Fingerprint | {contentFingerprint[:12]}... |
| Previous Runs on Same Content | {count} ({list of run IDs}) |

---

## 1. Quality Summary

| Metric | This Run | Previous Run | Best Ever | Worst Ever | Mean (all) |
|--------|----------|-------------|-----------|------------|------------|
| PA-05 Initial | {pa05Initial} | {prev.pa05Initial} | {best.pa05Initial} | {worst.pa05Initial} | {mean.pa05Initial} |
| PA-05 Final | {pa05Final} | {prev.pa05Final} | {best.pa05Final} | {worst.pa05Final} | {mean.pa05Final} |
| PA-05 Mode | {pa05Mode} | {prev.pa05Mode} | — | — | — |
| Tier 5 | {tier5Score} | {prev.tier5Score} | {best.tier5Score} | {worst.tier5Score} | {mean.tier5Score} |
| Soul Violations | {soulViolations} | {prev.soulViolations} | {best.soulViolations} | — | — |
| Verdict | {verdict} | {prev.verdict} | — | — | — |

### Quality Trajectory (all runs, chronological)
{pa05Final values in chronological order as inline sparkline or list}
Direction: {IMPROVING / STABLE / DECLINING} (slope = {slope})

---

## 2. Gate Analysis

| Metric | This Run | Previous | Trend |
|--------|----------|---------|-------|
| Pass Rate | {passRate}% | {prev.passRate}% | {delta}% |
| Required Pass Rate | {requiredPassRate}% | {prev.requiredPassRate}% | {delta}% |
| Failed Gates | {failedGateIds.length} | {prev} | — |
| False Positives | {falsePositiveGateIds.length} | {prev} | — |
| GR-48 | {gr48Status} | {prev} | — |

### New Gate Failures (not in previous run)
{list of gateIds in current.failedGateIds but not in previous.failedGateIds}

### Resolved Gate Failures (in previous but not current)
{list of gateIds in previous.failedGateIds but not in current.failedGateIds}

### Persistent Gate Failures (in both)
{intersection}

---

## 3. REFINE Effectiveness
{if iteration.refineCycles > 0}

| Metric | This Run | Historical Mean | Best Delta |
|--------|----------|----------------|------------|
| REFINE Delta | {pa05DeltaPerCycle[0]} | {mean of all deltas} | {max delta} |
| REFINE Type | {refineType} | — | — |
| Gates Fixed by REFINE | {count} | {mean} | — |
| Gates Broken by REFINE | {count} | {mean} | — |

{else}
No REFINE cycle in this run.
{endif}

---

## 4. Content Comparison (if same content exists)
{if previousRunsOnSameContent.length > 0}

| Metric | {run1.date} ({run1.pipelineVersion}) | {run2.date} ({run2.pipelineVersion}) | This Run |
|--------|-------|-------|----------|
| PA-05 Final | {run1.pa05Final} | {run2.pa05Final} | {pa05Final} |
| Metaphor | {run1.metaphorChosen} | {run2.metaphorChosen} | {metaphorChosen} |
| Zone Count | {run1.zoneCount} | {run2.zoneCount} | {zoneCount} |
| CSS Lines | {run1.cssLines} | {run2.cssLines} | {cssLines} |
| Mechanisms | {run1.mechanismCount} | {run2.mechanismCount} | {mechanismCount} |

{endif}

---

## 5. Cost Analysis

| Metric | This Run | Previous | Mean |
|--------|----------|---------|------|
| Wall Clock | {wallClockMinutes}m | {prev}m | {mean}m |
| Agents | {agentCount} | {prev} | {mean} |
| Respawns | {agentRespawns} | {prev} | {mean} |
| Quality/Hour | {qualityPerHour} | {prev} | {mean} |
| Sessions | {sessions} | {prev} | {mean} |

---

## 6. Regressions

{For each REG-XX check that fires, include the regression block from Section 3.4}

{If no regressions}: No regressions detected.

---

## 7. Pattern Validation

{For each pattern in the library, note whether this run supports or contradicts it}

| Pattern | This Run | Status |
|---------|----------|--------|
| PAT-001: REFINE adds +1.0-1.5 | +{delta} → {SUPPORTS/CONTRADICTS} | N={N} |
| PAT-002: Opus required for PA-05 >= 2.0 | {builderModel}, PA-05={pa05Final} → {SUPPORTS/CONTRADICTS} | N={N} |
...

---

## 8. Predictions vs Actuals (if prediction was made)

{Compare pre-run prediction to actual results}

| Metric | Predicted Range | Actual | In Range? |
|--------|----------------|--------|-----------|
| PA-05 Initial | [{low}, {high}] | {actual} | {YES/NO} |
| PA-05 Final | [{low}, {high}] | {actual} | {YES/NO} |

Prediction accuracy (cumulative): {hitRate}%

---

## 9. Recommendations for Next Run

{Auto-generated based on patterns and regressions}

1. {If REFINE was not applied but PAT-001 suggests it would help}: Consider REFINE — historical data shows +{mean_delta} improvement
2. {If gate false positives > 3}: Address gate false positives before next run: {list}
3. {If defect recurrence > 50%}: Persistent defects {list} — consider structural fix
4. {If this is best run ever}: New high-water mark! Consider archiving as reference.
```

### 8.2 Compact Report (for cross-run-tracker.md TRENDS section)

The full report goes to a per-run file. The compact version updates the TRENDS section:

```markdown
### Run {N}: {slug} ({date}, {pipelineVersion})
PA-05: {pa05Initial} → {pa05Final} ({verdict})
vs Previous: {delta} ({BETTER/SAME/WORSE})
Regressions: {count} ({list or "none"})
New patterns: {list or "none"}
```

---

## 9. Data Visualization Formats

Since these visualizations will be rendered in HTML pages or terminal, I specify both the data structure and display format.

### 9.1 Run-Over-Run Quality Trend

**Purpose:** Is the pipeline getting better over time?

**Data structure:**
```json
{
  "chart": "quality_trend",
  "xAxis": "Run Index (chronological)",
  "series": [
    { "name": "PA-05 Initial", "values": [null, null, null, null, 2.0, 2.0], "color": "#c49052" },
    { "name": "PA-05 Final", "values": [4.0, 1.5, 1.5, 2.5, 2.0, 3.5], "color": "#2a7d7d" }
  ],
  "annotations": [
    { "index": 0, "label": "Middle (pre-v3)" },
    { "index": 4, "label": "v3.1 + REFINE starts" }
  ],
  "trendLine": { "slope": 0.12, "r2": 0.15, "direction": "STABLE" }
}
```

**ASCII display (for terminal/markdown):**
```
PA-05 Over Runs
4.0 |  *                                         PA-05 Final
    |                                             PA-05 Initial
3.5 |                                    *
3.0 |
2.5 |              *
2.0 |                        *    o----→*
1.5 |     *    *
1.0 |
    +----+----+----+----+----+----
     MT   CEI  FLG  REM  YGT  YGT-R
    pre-v3              v3.1
```

**HTML rendering:** Line chart using CSS `clip-path` polygons or inline SVG. Each data point is a circle; hover shows details. Trend line as dashed overlay.

### 9.2 Cost vs Quality Scatter Plot

**Purpose:** Is more time/agents producing better results?

**Data structure:**
```json
{
  "chart": "cost_quality_scatter",
  "xAxis": "Wall Clock (minutes)",
  "yAxis": "PA-05 Final",
  "points": [
    { "x": 35, "y": 4.0, "label": "Middle", "version": "pre-v3" },
    { "x": 180, "y": 1.5, "label": "Ceiling", "version": "pre-v3" },
    { "x": 240, "y": 1.5, "label": "Flagship", "version": "pre-v3" },
    { "x": 120, "y": 2.5, "label": "Remed", "version": "pre-v3" },
    { "x": 200, "y": 3.5, "label": "YGT", "version": "v3.1" }
  ],
  "quadrants": {
    "topLeft": "HIGH EFFICIENCY (good quality, low cost)",
    "topRight": "JUSTIFIED COST (good quality, high cost)",
    "bottomLeft": "CHEAP MISS (low quality, low cost)",
    "bottomRight": "WASTE (low quality, high cost)"
  }
}
```

**Key insight this reveals:** The Middle Tier experiment (35 min, 4.0) is the efficiency champion. Flagship (240 min, 1.5) is in the WASTE quadrant. This scatter plot makes the case for REFINE (moderate cost, big quality delta) vs longer initial builds.

### 9.3 Pipeline Version Comparison Bars

**Purpose:** Did v3→v4→v5 improve outcomes?

**Data structure:**
```json
{
  "chart": "version_comparison",
  "groups": [
    { "version": "pre-v3", "meanPA05Final": 2.375, "N": 4, "range": [1.5, 4.0] },
    { "version": "v3.1", "meanPA05Final": 2.75, "N": 2, "range": [2.0, 3.5] }
  ],
  "barColor": "#4a7c9b",
  "rangeWhiskers": true
}
```

**Display:** Grouped bar chart. Each bar = mean PA-05 Final for that version. Whiskers show range. N displayed below each bar.

**Warning label:** "N < 5 for all versions — treat as directional only, not statistically significant"

### 9.4 Content Type Quality Distribution

**Purpose:** Do certain content types produce better results?

**Data structure:**
```json
{
  "chart": "content_quality_dist",
  "groups": [
    { "type": "article", "runs": [{ "pa05": 3.5, "slug": "ygt" }] },
    { "type": "essay", "runs": [{ "pa05": 4.0, "slug": "middle" }] },
    { "type": "research", "runs": [{ "pa05": 1.5, "slug": "ceiling" }, { "pa05": 1.5, "slug": "flagship" }, { "pa05": 2.5, "slug": "remed" }] }
  ]
}
```

**Display:** Box plot or strip plot per content type. Each dot = one run. Mean line overlay.

**Current data reveals:** "research" type has mean 1.83 PA-05 vs "article" 3.5 and "essay" 4.0. But N=1 for article and essay — not enough to conclude content type matters.

### 9.5 REFINE Cycle Effectiveness Across Runs

**Purpose:** How much does each REFINE cycle add?

**Data structure:**
```json
{
  "chart": "refine_effectiveness",
  "runs": [
    { "slug": "ygt-a", "initial": 2.0, "cycle1": 3.0, "delta": 1.0, "type": "corrupted" },
    { "slug": "ygt", "initial": 2.0, "cycle1": 3.5, "delta": 1.5, "type": "clean" }
  ],
  "meanDelta": 1.25,
  "annotations": ["Only 2 REFINE runs available"]
}
```

**Display:** Waterfall chart. Starting bar = PA-05 Initial. Second bar (green) = REFINE delta. Total = PA-05 Final. One column per run.

### 9.6 Defect Recurrence Heat Map

**Purpose:** Which defects keep coming back?

**Data structure:**
```json
{
  "chart": "defect_recurrence",
  "defectTypes": ["bg_delta", "border_width", "whitespace_void", "typography_uniform", "container_width", "contrast", "dark_fatigue"],
  "runs": ["middle", "ceiling", "flagship", "remed", "ygt-init", "ygt-refine"],
  "matrix": [
    [0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1],
    [0, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1]
  ]
}
```

**Display:** Grid with runs as columns, defect types as rows. Color intensity = presence (red = present, white = absent). Row totals show most persistent defects.

### 9.7 Composite Dashboard

**Purpose:** Single-page overview combining all visualizations.

**Layout (for HTML generation):**

```
┌─────────────────────────────────────────────────┐
│ PIPELINE HEALTH DASHBOARD — as of {date}        │
│ Total Runs: {N} | Latest PA-05: {score}         │
│ Trend: {IMPROVING/STABLE/DECLINING}             │
├───────────────────────┬─────────────────────────┤
│ 9.1 Quality Trend     │ 9.2 Cost vs Quality     │
│ (line chart)          │ (scatter plot)          │
├───────────────────────┼─────────────────────────┤
│ 9.3 Version Compare   │ 9.4 Content Type Dist   │
│ (bar chart)           │ (strip plot)            │
├───────────────────────┼─────────────────────────┤
│ 9.5 REFINE Effect     │ 9.6 Defect Recurrence   │
│ (waterfall)           │ (heat map)              │
├───────────────────────┴─────────────────────────┤
│ 9.7 Key Metrics Summary                         │
│ Mean PA-05: {x} | Mean Time: {y}m | Hit Rate: {z}% │
│ Active Patterns: {n} | Open Regressions: {n}    │
│ Next Prediction: PA-05 {range}                   │
└─────────────────────────────────────────────────┘
```

---

## 10. Implementation Specification

### 10.1 Files to Create

| File | Location | Purpose | Lines (est) |
|------|----------|---------|-------------|
| `run-registry.json` | `design-system/pipeline/` | Master cross-run database | Grows per run (~50 lines per entry) |
| `pattern-library.json` | `design-system/pipeline/` | Validated and emerging patterns | ~100-200 lines |
| `COMPARISON-REPORT-TEMPLATE.md` | `design-system/pipeline/` | Template for post-run comparison reports | ~200 lines |
| `prediction-log.json` | `design-system/pipeline/` | Pre-run predictions and accuracy tracking | Grows per run (~20 lines per entry) |

### 10.2 Files to Modify

| File | Modification | Impact |
|------|-------------|--------|
| `EXECUTION-TRACKER-TEMPLATE.md` | Add "Post-Run Export" section with registry append protocol | +15 lines |
| `cross-run-tracker.md` | Add reference to run-registry.json as machine-readable authority | +5 lines |
| `run-summary-schema.json` | Deprecation notice pointing to run-registry.json | +3 lines |

### 10.3 Orchestrator Integration

Add to the pipeline's post-verdict protocol (after cross-run-tracker.md update):

```markdown
### Post-Verdict: Registry and Trend Update

1. Export current run data to `run-registry.json`:
   - Read execution tracker fields
   - Read gate results JSON
   - Read weaver verdict
   - Construct RunEntry object and append to runs array
2. Run regression checks (REG-01 through REG-10)
3. Update pattern library (validate/contradict existing patterns)
4. Generate comparison report from COMPARISON-REPORT-TEMPLATE.md
5. If prediction was made pre-run, compute accuracy
6. Save comparison report to build output directory
```

### 10.4 Data Extraction Points

| Data | Extraction Point | Method |
|------|-----------------|--------|
| Build metadata | Pipeline start | Preflight script |
| Content fingerprint | Phase 0 | SHA-256 of source file |
| Content metrics | Phase 0 (Content Map) | Parse Content Map header |
| Brief metrics | Phase 1 (BV output) | Parse BV gate results |
| Build metrics | Phase 3A (gate runner) | Parse gate JSON (GR-14 CSS lines, GR-55 mechanisms) |
| Gate results | Phase 3A | Parse unified gate JSON |
| PA metrics | Phase 3B | Count PA reports, question coverage |
| Quality scores | Phase 3C | Parse weaver verdict + artistic |
| REFINE metrics | IMPROVE phase | Compare pre/post gate JSON + PA scores |
| Cost metrics | Pipeline end | Timing ledger aggregate |

### 10.5 Crack Dimension Safety

This design interacts with these crack dimensions:

| Crack | Risk | Mitigation |
|-------|------|-----------|
| D4 (Recording divergence) | Registry could have wrong values | All auto-capture fields have defined extraction sources; manual fields clearly marked |
| D7 (Defense paradox) | New tracking = more complexity | Registry is APPEND-ONLY; comparison report is AUTO-GENERATED (no orchestrator judgment needed) |
| D13 (Feedback loop absence) | THIS IS THE CURE — registry enables the feedback loop | Trend detection + regression alerts close this loop |
| D14 (Complexity invisibility) | Pattern library could grow unbounded | Pattern lifecycle (Section 6.3) includes STALE detection and retirement |

---

## 11. Statistical Rigor with Small N

### 11.1 The Fundamental Constraint

With N=6 runs (and only 2 with REFINE, only 1 pipeline version with >1 run), we cannot claim statistical significance for anything. The system must be HONEST about this while still being USEFUL.

### 11.2 Confidence Language Rules

| N | Language Allowed | Language Prohibited |
|---|-----------------|---------------------|
| 1 | "observed in one run" | "the pipeline does X" |
| 2-3 | "preliminary pattern" | "correlation" |
| 4-6 | "emerging trend", "directional evidence" | "significant", "proven" |
| 7-10 | "moderate evidence", "consistent pattern" | "causal", "proven" |
| 10+ | "strong evidence", "reliable pattern" | "proven" (without CI) |
| 20+ | "statistically supported" (with CI) | — |

### 11.3 Effect Size Considerations

PA-05 is a 4-point scale. The minimum detectable difference that matters is 0.5 points (the boundary between adjacent modes like FLAT → COMPOSED).

For a paired t-test with power=0.80 and alpha=0.05 to detect a 0.5 PA-05 difference:
- If stdev = 0.5: need N=10 per group
- If stdev = 1.0: need N=34 per group
- If stdev = 0.3: need N=5 per group

**Reality check:** With estimated stdev ~0.8 across all runs, we need ~20 runs per comparison group for formal statistical significance. We will not reach this for years.

**Practical approach:** Use effect size (Cohen's d) rather than p-values:
- d < 0.5: SMALL (likely noise)
- 0.5 <= d < 0.8: MEDIUM (probably real)
- d >= 0.8: LARGE (very likely real)

### 11.4 Bayesian Alternative

Given small N, a Bayesian approach is more appropriate than frequentist:

```
Prior: PA-05 ~ Normal(2.5, 1.0)  [based on all 6 runs]
Likelihood: New run PA-05 | version, content
Posterior: Updated belief about PA-05 for this version/content combination

Advantage: Can incorporate prior knowledge (patterns, expert judgment)
Disadvantage: Prior selection is subjective
```

This is noted for future implementation when a more formal statistical engine is warranted (N > 15).

### 11.5 What We CAN Say with N=6

Despite small N, some observations are robust because they are BINARY, not continuous:

| Observation | Type | Robust? | Why |
|------------|------|---------|-----|
| Opus is the only builder model that has reached PA-05 >= 2.0 | Binary absence of counterexample | YES (but Sonnet untested) | 0 Sonnet runs with PA-05 available |
| REFINE always improves PA-05 | Binary (never decreased) | Weak (N=1 clean) | Only 1 clean REFINE run |
| D-09 hex lock eliminated bg delta failures | Binary before/after | MODERATE | 2 runs before (40% fail), 2 after (0% fail) |
| Gate false positives increase over time | Monotonic increase | MODERATE | 4 sequential observations: 0, 1, 2, 3 |

---

## 12. Summary: What This System Enables

### Short Term (now, with N=6)

1. **Structured recording** — every future run adds to a machine-readable database instead of prose
2. **Immediate regression detection** — 10 automated checks after every run
3. **Seed patterns** — 10 patterns ready for validation as N grows
4. **Comparison reports** — auto-generated, not hand-crafted by 10 agents

### Medium Term (N=10-15)

5. **Content-quality correlation** — which content features predict quality
6. **Pipeline version effectiveness** — does each version actually help
7. **REFINE ROI** — quantified delta per cycle across diverse content
8. **Prediction accuracy** — pre-run estimates with tracked accuracy

### Long Term (N=20+)

9. **Statistical confidence** — real confidence intervals on quality predictions
10. **Causal attribution** — which variables actually drive quality
11. **Pipeline learning** — automatic pattern discovery and retirement
12. **Cost optimization** — spend the right amount on the right content

### Key Design Decisions

1. **Append-only registry** — never modify historical data, only add
2. **Honest confidence language** — never overstate what small N supports
3. **Pattern lifecycle** — patterns can be retired, not just accumulated (anti-complexity-ratchet)
4. **Auto-generated reports** — reduce orchestrator burden, not increase it
5. **Content fingerprint** — SHA-256 enables exact same-content detection for version comparison
6. **Regression checks are binary** — fire or don't, no judgment needed
7. **Predictions track accuracy** — the system measures its own reliability

---

*Cross-run trend analysis and pipeline learning system design complete.*

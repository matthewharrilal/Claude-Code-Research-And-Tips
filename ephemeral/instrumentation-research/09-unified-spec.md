# Pipeline Instrumentation — Unified Specification

**Synthesized from:** 8 research reports + original 10-dimension design
**Author:** Opus synthesizer agent
**Date:** 2026-02-26
**Status:** IMPLEMENTABLE

---

## 1. Executive Summary

### What We're Building

A post-hoc instrumentation system that extracts structured data from existing pipeline artifacts and transforms every post-run conversation from "let me read 20 files and guess what happened" into "the data shows X caused Y, and here's what to change."

### Why

The pipeline currently produces ~30 files per run. Nobody reads them systematically. Post-run conversations cost 10+ agents ($5-8) just to reconstruct what happened. The same questions get re-derived from scratch every time. With instrumentation, a fresh Claude instance reads ONE file (RUN-DIGEST.md, ~300 lines) and immediately holds a productive diagnostic conversation grounded in data.

### What It Costs to Implement

| Priority | Effort | What You Get |
|----------|--------|-------------|
| P0 (Build First) | 1 session (~4h) | RUN-DIGEST.md + run-summary.json + 3 extraction scripts. Transforms post-run conversations immediately. |
| P1 (Build Next) | 1 session (~3h) | loss-ledger.json + run-registry.json + intervention-registry.json. Enables causal diagnosis and cross-run comparison. |
| P2 (Build Later) | 2 sessions (~6h) | Perception Gap Score + agent behavior metrics + pattern library + weaver divergence section. Enables gate calibration and pipeline learning. |

### What It Costs Per Run

ZERO runtime cost. All extraction runs AFTER the pipeline completes. One command: `node extract-metrics.js <build-dir>`. Adds ~5 minutes of post-pipeline time. Produces ~400 lines of structured output.

### The Design Axiom

**Every instrumentation component must be post-hoc extraction from existing artifacts by deterministic scripts.** No agent prompt modifications. No orchestrator burden during the build. No prose instructions for builders to ignore. If an LLM cannot avoid adding it during runtime, it does not exist.

---

## 2. Architecture Overview

### Three Layers, Zero Runtime Cost

```
PIPELINE RUN (unchanged — zero instrumentation awareness)
    |
    v
[Existing Artifacts: 16 types]
    |
    v  (post-pipeline, one command)
LAYER 1: Extraction Scripts (7 deterministic extractors)
    |       Read existing files → produce JSON
    v
LAYER 2: Derived Metrics (5 computed from Layer 1)
    |       Read JSON → compute ratios/indices
    v
LAYER 3: Conversation Package
    |       Assemble summary.json + RUN-DIGEST.md
    v
[Post-Run Conversation]
    Fresh Claude reads RUN-DIGEST.md → data-driven dialogue
```

### Why Scripts, Not Agents

| Property | Script | Agent |
|----------|--------|-------|
| Instruction compliance | 100% | ~72% (C-01) |
| Attention degradation | None | Yes (C-02) |
| Prompt bloat risk | None | Yes (C-03) |
| Continuation bias | None | Yes (C-05) |
| Cost | ~$0.00 | ~$0.40-2.00 |

The ONLY place an LLM is involved is the conversation that READS the metrics. Extraction is deterministic.

### What Runs When

```
Phase 0-3C: Pipeline runs normally (no changes)
Phase END:  Orchestrator runs extract-metrics.js (1 command)
Post-run:   User starts conversation; Claude reads RUN-DIGEST.md
```

### Artifact Inventory (What Already Exists)

The pipeline produces 16 artifact types per run. Instrumentation reads ALL of them and writes NONE during the build:

| Artifact | Format | Key Data Points |
|----------|--------|-----------------|
| Content Map | Markdown | Content type, metaphor viability, sections, density arc |
| Execution Brief | Markdown | Zone specs, multi-coherence, recipe keywords, dispositions |
| Pass A/B HTML | HTML | CSS, conviction, self-eval, mechanisms, components |
| Gate Results | JSON | 47 gates: PASS/FAIL with measured values |
| 9 PA Reports | Markdown | Per-question scores, severity, experiential findings |
| Integrative Report | Markdown | Cross-auditor synthesis |
| Weaver Diagnostic | Markdown | PA-05, Tier 5, verdict, fix types, emotional arc |
| Weaver Artistic | Markdown | Experiential assessment, generative language |
| Execution Tracker | Markdown | Timestamps, routing, gate results, iteration log |
| Screenshots | PNG | Visual state at 3 viewports |

---

## 3. Prioritized Implementation Plan

### P0: Build First (Target: 1 session, ~4 hours)

The minimum viable instrumentation that transforms post-run conversations.

#### P0-A: run-summary.json (the structured data backbone)

**What:** A single JSON file per run containing ~60 structured fields extracted from existing artifacts. Every metric, every downstream report, every cross-run comparison starts from this file.

**Files to create:** `design-system/pipeline/instrumentation/extract-run-summary.js`

**Estimated effort:** 2 hours (read + parse gate JSON, weaver diagnostic, execution tracker, content map, HTML)

**Conversations it enables:**
- "What happened in this run?" — instant structured answer
- "How does this compare to last run?" — field-by-field diff
- "What's the cost per quality point?" — derived from timing + PA-05

**Schema:** See Section 4.

#### P0-B: RUN-DIGEST.md (the conversation starter)

**What:** A 200-400 line human-readable document generated from run-summary.json. Any fresh Claude instance reads this ONE file and can immediately hold a productive diagnostic conversation. It references deeper artifacts by path but does not duplicate them.

**Files to create:** `design-system/pipeline/instrumentation/generate-digest.js`

**Estimated effort:** 1.5 hours (template rendering from summary JSON)

**Conversations it enables:**
- "Why did this run produce this result?" — Sections 3-6 provide diagnostic chain
- "What should we investigate?" — Section 10 seeds data-driven questions
- "Where can I read more?" — Section 9 links to specific artifacts

**Template:** See Section 5.

#### P0-C: Three Core Extraction Scripts

**What:** The three highest-value extractors that populate run-summary.json.

| Script | Source Artifacts | Output | Effort |
|--------|-----------------|--------|--------|
| E-02: Quality Trajectory | Gate JSON + Weaver diagnostic | `_metrics/quality-trajectory.json` | 30 min |
| E-03: CSS Composition | HTML `<style>` content | `_metrics/css-composition.json` | 30 min |
| E-05: Gate-PA Divergence | Gate JSON + Weaver diagnostic | `_metrics/gate-pa-divergence.json` | 30 min |

**Conversations it enables:**
- "Where did CSS budget go?" — E-03 categorizes every CSS line
- "Did the gates catch what the PA caught?" — E-05 maps divergences
- "How much did REFINE help?" — E-02 tracks per-cycle deltas

### P1: Build Next (Target: after 3 runs with P0, ~3 hours)

High-value additions that enable causal diagnosis and cross-run trending.

#### P1-A: loss-ledger.json (the causal chain)

**What:** A structured diff that traces every piece of information from source content through content map, brief, HTML, and PA — documenting WHERE information was lost and WHY.

**Files to create:** `design-system/pipeline/instrumentation/extract-loss-ledger.js`

**How it works:**
1. Parse recipe step keywords from `artifact-builder-recipe.md`
2. Search each keyword in `p1-execution-brief.md` → status: PRESENT / ABSENT
3. For ABSENT keywords, identify the loss mechanism (template slot absence, compression, position effect)
4. Map each loss to a crack dimension (1-14)
5. Link to downstream quality impact via PA findings

**Estimated effort:** 2 hours (keyword extraction + brief parsing + PA finding correlation)

**Conversations it enables:**
- "Why was delight 4/10?" → `recipe step 2.7 (hover vocabulary) → ABSENT in brief → template slot absence → Crack Dimension 1`
- "Is this a new problem or recurring?" → Compare loss-ledger across runs
- "What would fix it?" → Crack dimension → known fix category

#### P1-B: run-registry.json (cross-run database)

**What:** A persistent append-only JSON file that accumulates one entry per run. The single source of truth for all cross-run analysis.

**Files to create:** `design-system/pipeline/instrumentation/run-registry.json` (data) + append logic in extract script

**Estimated effort:** 30 min (append run-summary entry to persistent file + compute trends)

**Conversations it enables:**
- "Are we making progress?" — PA-05 trajectory across runs
- "Which gates keep failing?" — Persistent failure streaks
- "Is this content harder than usual?" — Content-type comparison

#### P1-C: intervention-registry.json (what's been tried)

**What:** A persistent file tracking every pipeline change, when introduced, and its measured effect.

**Files to create:** `design-system/pipeline/instrumentation/intervention-registry.json`

**Estimated effort:** 30 min initial (create schema + seed with known interventions like D-09 hex lock, REFINE-with-artistic)

**Conversations it enables:**
- "Did the hex lock help?" → measured_effect.before vs .after
- "Has this been tried before?" → prevents re-proposing failed interventions
- "What has the best ROI?" → rank by measured effectiveness

### P2: Build Later (Target: after 5+ runs, ~6 hours across 2 sessions)

Advanced analytics requiring a data history.

#### P2-A: Weaver Divergence Section (~50 lines added to weaver prompt)

Add a structured "Section 6.5: Measurement Divergence Report" to the weaver protocol. The weaver already reads both gate results and all PA reports — this section just structures the comparison that currently happens implicitly.

**Conversations it enables:** Perception Gap Score (PGS) tracking, gate calibration recommendations, false negative/positive registers.

**Estimated effort:** 1 hour (prompt addition + PGS computation logic)

#### P2-B: Pattern Library (persistent, grows with N)

A structured JSON file of validated pipeline patterns with lifecycle tracking (HYPOTHESIZED → OBSERVED → SUPPORTED → CONFIRMED). 10 seed patterns from current data.

**Estimated effort:** 1 hour initial + 15 min per run to update

#### P2-C: Agent Metadata Block (optional, 8 prompt lines)

A small YAML block at the end of each agent's output: files_read, screenshots_examined, key_decisions, confidence. Makes all text-parsing-based metrics trivially extractable.

**Estimated effort:** 30 min (add to agent prompts, YAML parser)

**Risk mitigation:** Make optional for first 2 runs, compare output quality with/without.

#### P2-D: Full Extractor Suite (E-01, E-04, E-06, E-07)

Complete the 7-extractor set. E-01 (Timing), E-04 (PA Convergence), E-06 (Agent Routing), E-07 (Build Identity).

**Estimated effort:** 2 hours total

---

## 4. The Run Summary Schema

This is the single most important artifact. Every post-run conversation starts from this file.

```json
{
  "schemaVersion": "1.0",
  "generatedAt": "2026-02-26T14:30:00Z",
  "extractionTimeMs": 3200,

  "identity": {
    "slug": "yegge-gas-town",
    "date": "2026-02-25",
    "pipelineVersion": "v3.1",
    "builderModel": "opus",
    "refineBuilderModel": "opus",
    "mode": "COMPOSED",
    "contentType": "article",
    "contentWords": 5270,
    "contentHeterogeneity": "HIGH",
    "metaphorViability": "NATIVE",
    "metaphor": "Factory/Refinery",
    "zoneCount": 5,
    "outputPath": "ephemeral/builds/yegge-gas-town-2026-02-25/"
  },

  "quality": {
    "pa05Initial": 2.0,
    "pa05Final": 3.5,
    "pa05Delta": 1.5,
    "pa05Sub": {
      "designed": true,
      "coherent": true,
      "proportionate": true,
      "polished": true
    },
    "tier5": 9,
    "soulViolations": 0,
    "verdict": "SHIP WITH FIXES",
    "classification": "CEILING",
    "emotionalArc": {
      "authority": 8,
      "closure": 7,
      "surprise": 6,
      "delight": 4
    }
  },

  "gates": {
    "totalExecuted": 30,
    "totalPass": 22,
    "totalFail": 7,
    "totalSkip": 1,
    "requiredPassRate": 0.78,
    "failedGateIds": ["GR-08", "GR-09", "GR-52", "GR-55", "GR-60", "GR-66", "GR-73"],
    "persistentFailures": []
  },

  "iteration": {
    "totalCycles": 2,
    "refineCycles": 1,
    "pa05Trajectory": [2.0, 3.5],
    "verdictTrajectory": ["REFINE", "SHIP WITH FIXES"],
    "fixTypes": {"mechanical": 3, "structural": 2, "compositional": 0}
  },

  "timing": {
    "totalMinutes": 200,
    "p0Minutes": 10,
    "p1Minutes": 15,
    "p2Minutes": 35,
    "p3aMinutes": 20,
    "p3bMinutes": 25,
    "p3cMinutes": 10,
    "refineBuildMinutes": 25,
    "refineAuditMinutes": 40,
    "agentsSpawned": 40,
    "agentRespawns": 2,
    "sessions": 3
  },

  "build": {
    "htmlLines": 2931,
    "cssLines": 1100,
    "mechanismCount": 14,
    "componentTypes": 6,
    "channelShifts": 4,
    "cssBudget": {
      "layout": 220,
      "typography": 195,
      "color": 165,
      "spacing": 187,
      "borders": 88,
      "responsive": 132,
      "animation": 0,
      "other": 113
    },
    "convictionPresent": true,
    "selfEvalPresent": true
  },

  "compression": {
    "sourceLines": 1324,
    "contentMapLines": 71,
    "briefLines": 272,
    "sourceToMapRatio": 18.6,
    "recipeKeywordSurvivalPct": 85
  },

  "pa": {
    "auditorCount": 9,
    "questionsCovered": 48,
    "questionsTotal": 48,
    "convergenceCount": 9,
    "convergenceTopic": "dark zone content invisible",
    "screenshotsTotal": 68
  },

  "economics": {
    "estimationMethod": "proxy-v1",
    "totalEstimatedCost": 13.10,
    "costPerPa05Point": 3.74,
    "paAuditCostShare": 0.54,
    "refineMarginalROI": 0.258
  },

  "derived": {
    "qualityVelocity": 1.05,
    "marginalQualityVelocity": 0.86,
    "complexityQualityIndex": 0.65,
    "buildAuditRatio": 0.63,
    "cssPerMechanism": 78.6,
    "refineMultiplier": 1.36
  }
}
```

**Design decisions:**

1. **Flat-ish structure over deep nesting.** Three levels max. Enables simple `summary.quality.pa05Final` access.

2. **Nullable everywhere.** Pre-v3 runs lack gate data, timing data, Tier 5. Schema must handle missing fields gracefully.

3. **Derived metrics computed at extraction time.** Not recomputed by the conversation agent. One source of truth.

4. **Economics are estimates.** Marked with `estimationMethod: "proxy-v1"` so future calibration can update the formula without invalidating historical data.

5. **No per-auditor breakdown in summary.** Per-auditor data lives in E-04 (PA Convergence extractor). Summary has aggregate only to stay under 80 fields.

---

## 5. The RUN-DIGEST.md Template

### Purpose

A 200-400 line document that any fresh Claude instance reads to immediately hold a productive diagnostic conversation. It is a MAP, not a TERRITORY — it tells you where to look, not what to think.

### Template

```markdown
# Run Digest: {slug} ({date})

## 1. Result (5 lines)
PA-05: {pa05Initial}/4 -> {pa05Final}/4 ({pa05Delta})
Tier 5: {tier5}/9
Verdict: {verdictTrajectory joined by " -> "}
Classification: {classification}
Pipeline: v{pipelineVersion} | Builder: {builderModel} | Mode: {mode}

## 2. Build Identity (10-15 lines)
Content: {slug} ({contentWords} words, {contentType}, heterogeneity {contentHeterogeneity})
Metaphor: "{metaphor}" (viability: {metaphorViability})
Zone architecture: {zoneCount} zones
  Z1: {name} ({hex}) -- {role}
  Z2: {name} ({hex}) -- {role}
  ...
Mechanisms: {mechanismCount} | Components: {componentTypes} types | Channel shifts: {channelShifts}
CSS: {cssLines} lines | HTML: {htmlLines} lines
Duration: {totalMinutes}m ({sessions} sessions, {agentsSpawned} agents)

## 3. Compression Chain (10 lines)
Source: {sourceLines} lines
  -> Content Map: {contentMapLines} lines [{sourceToMapRatio}:1]
  -> Brief: {briefLines} lines
  -> HTML: {htmlLines} lines, {cssLines} CSS
Recipe keyword survival: {recipeKeywordSurvivalPct}%
  Missing: {list of recipe steps not found in brief, from loss-ledger}
Alert: {any compression > 30:1 flagged here}

## 4. Gate Results (20-30 lines)
Total: {totalPass}/{totalExecuted} PASS ({requiredPassRate}%)
Failed: {failedGateIds as table with one-line descriptions}

### Persistent Failures (across runs)
{gates that failed in 2+ consecutive runs with streak count}

## 5. PA Consensus Map (30 lines)
### Convergence Findings ({convergenceCount}/9 auditors agree)
{dominant finding with auditor count and severity}

### PA-05 Sub-Criteria
| Criterion | Status | Anchor Quote |
|-----------|--------|--------------|
| DESIGNED | {Y/N/CONDITIONAL} | "{quote}" |
| COHERENT | {Y/N/CONDITIONAL} | "{quote}" |
| PROPORTIONATE | {Y/N/CONDITIONAL} | "{quote}" |
| POLISHED | {Y/N/CONDITIONAL} | "{quote}" |

### Emotional Arc
| Register | Score | Note |
|----------|-------|------|
| Authority | {N}/10 | {1-line} |
| Closure | {N}/10 | {1-line} |
| Surprise | {N}/10 | {1-line} |
| Delight | {N}/10 | {1-line} |

## 6. Information Loss Trace (15-20 lines, from loss-ledger)
| Loss | Source | Junction | Crack Dim | Impact |
|------|--------|----------|-----------|--------|
| {e.g., Hover vocabulary} | Recipe Step 2.7 | Brief template no slot | D-01 | DELIGHT 4/10 |

## 7. REFINE Analysis (15 lines, if applicable)
Initial: {pa05Initial}/4 -> Post-REFINE: {pa05Final}/4 (delta: {pa05Delta})
REFINE multiplier: {refineMultiplier}x (quality per unit investment)
REFINE builder saw: {list}
REFINE builder did NOT see: {list}
Key changes: {fix descriptions}
What REFINE could NOT fix: {list}

## 8. Economics (5 lines)
Estimated total: ${totalEstimatedCost}
Cost per PA-05 point: ${costPerPa05Point}
PA audit share: {paAuditCostShare}%
REFINE ROI: {refineMarginalROI} PA-05 points per dollar

## 9. Cross-Run Delta (10 lines)
| Metric | Previous | Current | Delta |
|--------|----------|---------|-------|
| PA-05 (final) | {prev} | {curr} | {delta} |
| Tier 5 | {prev} | {curr} | {delta} |
| Gate % | {prev}% | {curr}% | {delta}% |
| CSS lines | {prev} | {curr} | {delta} |
| Duration | {prev}m | {curr}m | {delta}m |

Trend: {IMPROVING / STABLE / DECLINING} (last {N} runs: {trajectory})

## 10. Artifact Manifest (8 lines)
| File | Path | For Deeper Analysis |
|------|------|---------------------|
| Gate Results | p3a-gate-results.json | Individual gate data |
| PA Reports | p3b-pa-auditor-{A-I}.md | Per-dimension findings |
| Weaver Diagnostic | p3c-weaver-diagnostic.md | Score derivation |
| Weaver Artistic | p3c-weaver-artistic.md | Experiential assessment |
| Loss Ledger | _metrics/loss-ledger.json | Full causal chain |

## 11. Open Questions (3-5 lines)
- {Data-driven question from pattern detection}
- {e.g., "3rd consecutive run with D-07 partial loss -- systemic template issue?"}
- {e.g., "REFINE delta increasing (+1.0, +1.5) -- initial build declining or REFINE improving?"}
```

### Worked Example

For the Yegge Gas Town 2026-02-25 run, Section 1 would read:

```
## 1. Result
PA-05: 2.0/4 -> 3.5/4 (+1.5)
Tier 5: 9/9
Verdict: REFINE -> SHIP WITH FIXES
Classification: CEILING (approaching Flagship)
Pipeline: v3.1 | Builder: Opus | Mode: COMPOSED
```

And Section 11 (Open Questions) would read:

```
## 11. Open Questions
- Hover vocabulary (Recipe Step 2.7) absent in brief -- 2nd consecutive run. Template slot
  issue or deliberate omission?
- REFINE delta +1.5 is largest ever. Is the initial build getting worse or REFINE getting
  better? Trend: [null, null, +1.0, +1.5]
- GR-48 meta-gate REQUIRED but never run -- 3rd consecutive skip. Crack Dimension 3 streak.
- Delight 4/10 is lowest emotional register. Correlated with hover vocabulary loss?
```

---

## 6. The Run Registry Schema

`run-registry.json` is the persistent cross-run database. Append-only. Schema-versioned. Backward-compatible.

```json
{
  "schemaVersion": "1.0",
  "lastUpdated": "2026-02-26T14:30:00Z",
  "runs": [
    {
      "id": "RUN-20260225-001",
      "slug": "yegge-gas-town",
      "date": "2026-02-25",
      "pipelineVersion": "v3.1",
      "builderModel": "opus",
      "contentType": "article",
      "contentWords": 5270,
      "contentHeterogeneity": "HIGH",
      "metaphorViability": "NATIVE",
      "metaphor": "Factory/Refinery",
      "zoneCount": 5,
      "mode": "COMPOSED",

      "pa05Initial": 2.0,
      "pa05Final": 3.5,
      "pa05Delta": 1.5,
      "tier5": 9,
      "verdict": "SHIP WITH FIXES",
      "classification": "CEILING",

      "emotionalArc": {"authority": 8, "closure": 7, "surprise": 6, "delight": 4},

      "gatesExecuted": 30,
      "gatesPass": 22,
      "gatesFail": 7,
      "requiredPassRate": 0.78,
      "failedGateIds": ["GR-08", "GR-09", "GR-52", "GR-55", "GR-60", "GR-66", "GR-73"],

      "refineCycles": 1,
      "refineType": "R-A",
      "pa05Trajectory": [2.0, 3.5],

      "totalMinutes": 200,
      "agentsSpawned": 40,
      "sessions": 3,
      "htmlLines": 2931,
      "cssLines": 1100,
      "mechanismCount": 14,

      "estimatedCost": 13.10,
      "costPerPa05Point": 3.74,

      "fixes": {"mechanical": 3, "structural": 2, "compositional": 0},

      "strengths": [
        "Factory/Refinery metaphor structurally expressed across all zones",
        "Tier 5 perfect (9/9)",
        "Largest single-cycle REFINE improvement in history (+1.5)"
      ],

      "outputPath": "ephemeral/builds/yegge-gas-town-2026-02-25/"
    }
  ],

  "trends": {
    "pa05Trajectory": [3.5, 3.0, 3.0, 3.5],
    "direction": "STABLE",
    "persistentGateFailures": {
      "GR-08": {"streak": 4, "firstSeen": "2026-02-20"},
      "GR-09": {"streak": 3, "firstSeen": "2026-02-23"}
    }
  }
}
```

**Design decisions:**

1. **Flat fields over nested objects in registry entries.** Deep nesting makes cross-run queries harder. `run.pa05Final` is simpler than `run.quality.pa05.final`.

2. **Trends computed at append time.** Each time a run is added, trends are recomputed over the full history. No lazy evaluation.

3. **Persistent gate failures tracked automatically.** When a gate appears in `failedGateIds` for consecutive runs, the streak counter increments.

4. **Strengths captured as free text (max 3).** Sourced from weaver artistic impression. This is the one qualitative field — everything else is structured.

5. **Historical runs can be backfilled.** Pre-v3 runs with incomplete data use `null` for missing fields. The schema accommodates this.

---

## 7. Automation Spec

### File Structure

```
design-system/pipeline/instrumentation/
  extract-metrics.js          # Master orchestrator — runs all extractors
  extractors/
    e01-timing.js             # File timestamps → phase durations
    e02-quality-trajectory.js # Gate JSON + weaver → per-cycle quality
    e03-css-composition.js    # HTML <style> → categorized CSS budget
    e04-pa-convergence.js     # 9 PA reports → convergence patterns
    e05-gate-pa-divergence.js # Gate JSON + weaver → false neg/pos map
    e06-agent-routing.js      # Execution tracker → who received what
    e07-build-identity.js     # Content map + brief + HTML → identity record
  generators/
    generate-digest.js        # summary.json → RUN-DIGEST.md
    generate-loss-ledger.js   # Recipe + brief + HTML → causal chain
  schemas/
    run-summary-schema.json   # JSON Schema for validation
    run-registry-schema.json  # JSON Schema for registry
```

### The 7 Extractors

| ID | Name | Input | Output | Difficulty | Priority |
|----|------|-------|--------|------------|----------|
| E-01 | Timing | Execution tracker + `stat` timestamps | `_metrics/timing.json` | LOW | P2 |
| E-02 | Quality Trajectory | Gate JSON + weaver diagnostic | `_metrics/quality-trajectory.json` | LOW | **P0** |
| E-03 | CSS Composition | HTML `<style>` content | `_metrics/css-composition.json` | MEDIUM | **P0** |
| E-04 | PA Convergence | 9 PA reports + integrative | `_metrics/pa-convergence.json` | MEDIUM | P2 |
| E-05 | Gate-PA Divergence | Gate JSON + weaver diagnostic | `_metrics/gate-pa-divergence.json` | MEDIUM | **P0** |
| E-06 | Agent Routing | Execution tracker routing sections | `_metrics/agent-routing.json` | LOW | P2 |
| E-07 | Build Identity | Content map + brief + HTML conviction | `_metrics/build-identity.json` | LOW | P2 |

### Execution Protocol

```bash
# After pipeline completes:
node design-system/pipeline/instrumentation/extract-metrics.js \
  ephemeral/builds/yegge-gas-town-2026-02-25/

# This sequentially:
# 1. Runs E-01 through E-07 (each reads files, writes JSON to _metrics/)
# 2. Computes derived metrics (D-01 through D-05)
# 3. Assembles _metrics/summary.json
# 4. Generates RUN-DIGEST.md
# 5. If loss-ledger extractor exists, generates _metrics/loss-ledger.json
# 6. Appends to run-registry.json (if exists)
# 7. Writes _metrics/_meta.json (self-measurement)
```

### What Requires Post-Hoc Analysis Agent (Not Script)

Two components cannot be fully automated with deterministic scripts:

1. **Loss Ledger — junction 2-3 (brief-to-HTML):** Determining whether a brief disposition "reached" the HTML requires semantic judgment, not keyword matching. A recipe step like "edge intentionality" might manifest as `::selection` styling, `tabular-nums`, and `hover` states — no single keyword search finds all of these. **Decision:** Implement keyword-based matching (covers ~70% of losses) and flag the rest as "NEEDS REVIEW" for the conversation agent.

2. **Perception Gap Score — false negative/positive classification:** Determining whether a gate PASS with a PA finding is FN-A (threshold too lenient), FN-B (wrong property), or FN-C (no gate) requires understanding the gate's purpose. **Decision:** Implement with a static gate-purpose mapping table. Each gate gets a pre-defined "quality dimension" tag; the script matches PA findings to dimensions, not to individual gates.

---

## 8. Crack Safety Certification

Every component assessed against all 14 crack dimensions.

### Assessment Summary

| Component | IMMUNE | SAFE | RISK | PROPAGATES |
|-----------|--------|------|------|------------|
| 7 extraction scripts | 84 | 14 | 0 | 0 |
| 5 derived metrics | 70 | 0 | 0 | 0 |
| RUN-DIGEST.md generation | 14 | 0 | 0 | 0 |
| loss-ledger.json generation | 12 | 2 | 0 | 0 |
| run-registry.json | 14 | 0 | 0 | 0 |
| intervention-registry.json | 12 | 2 | 0 | 0 |
| **TOTAL** | **206** | **18** | **0** | **0** |

**Zero RISK. Zero PROPAGATES.** All 18 SAFE cells are in the interpretation layer (how metrics are presented), not the extraction layer.

### Per-Crack Assessment

| Crack | Status | Why |
|-------|--------|-----|
| C-01: Prose compliance (~72%) | IMMUNE | Zero prose instructions added. All extraction is deterministic code. |
| C-02: Orchestrator attention degradation | IMMUNE | One command after pipeline. Zero during-pipeline burden. |
| C-03: Agent prompt bloat | IMMUNE | Zero agent prompt modifications (except optional P2-C metadata block: 8 lines). |
| C-04: Compression loss at junctions | IMMUNE | Instrumentation never passes through agent handoffs. Raw artifacts read directly. |
| C-05: Continuation bias | IMMUNE | No LLM self-assessment. Scripts extract data; conversation agent interprets. |
| C-06: Recipe vs checklist format | SAFE | Quality trajectory reports SCORES (checklist-like). Mitigated by RUN-DIGEST narrative format. |
| C-07: Guardrail-to-playbook ratio | SAFE | Metrics report WHAT happened. Conversation layer must pair with directional guidance. |
| C-08: Builder visibility cap | IMMUNE | Instrumentation outputs are for post-run conversation, not builders. |
| C-09: Inverted quality routing | IMMUNE | E-06 MEASURES routing; doesn't route anything. |
| C-10: CSS budget misallocation | SAFE | E-03 categorizes CSS by type, detecting misallocation rather than propagating it. |
| C-11: S-09 stacking loophole | SAFE | E-05 detects gate-PA divergence including stacking cases. |
| C-12: Sonnet vs Opus gap | IMMUNE | Builder model recorded in summary. Correlated in cross-run analysis. |
| C-13: Meta-to-output ratio | SAFE | Self-measured via D-05 + _meta.json. ~900 lines added to meta corpus (<2%). |
| C-14: Complexity accumulation | SAFE | Self-sunset protocol: metrics unused for 3 consecutive runs are flagged for removal. |

### Self-Sunset Protocol

Every metric has a usage counter in `_meta.json`. After each post-run conversation, the counter is updated based on whether the metric was referenced. Three consecutive zeros trigger a sunset flag:

```json
{
  "metric_usage": {
    "quality_trajectory": {"consecutive_unused": 0},
    "css_composition": {"consecutive_unused": 2},
    "build_identity": {"consecutive_unused": 3, "SUNSET_CANDIDATE": true}
  }
}
```

The conversation agent presents sunset candidates to the user. The instrumentation deck SHRINKS by default.

---

## 9. Cross-Cutting Findings

Eight insights that emerged across multiple reports, representing high-confidence conclusions:

### Finding 1: Gate-PA Divergence Is the Core Problem (reports 01, 02, 06)

All three reports independently identified that programmatic gates and perceptual audit measure fundamentally different things. The Perception Gap Score (PGS) is the single most important new metric. Historical PGS estimate: 0.80 (pathological) in early builds → 0.20 (acceptable) after REFINE in latest build. Gates get better over time (FN-A threshold fixes), but FN-C (ungatable dimensions) will always exist.

**Decision:** PGS is P2 priority (not P0) because it requires the weaver divergence section, which is a prompt change. But it should be the FIRST P2 item implemented.

### Finding 2: REFINE Is the Highest-ROI Phase (reports 04, 05)

Both economics and quality trajectory analyses converge: REFINE at $5.81 produces +1.5 PA-05 points (marginal ROI = 0.26 points/$). Initial build at $7.29 produces 2.0 PA-05 points (marginal ROI = 0.27 points/$). REFINE is nearly as efficient as the initial build at producing quality, and it addresses the exact gaps the PA found.

**Decision:** Instrument REFINE heavily. Track REFINE multiplier, MQV, per-cycle delta decay. Stop criterion: MQV < 0.3 OR delta < 0.5 OR cycle >= 3.

### Finding 3: CSS Budget Allocation Predicts Quality (reports 01, 07)

The Flagship failure spent 22% of CSS on imperceptible micro-typography. CD-006 spent those lines on 11 components and 5 grids. E-03 (CSS Composition Extractor) directly detects this by categorizing every CSS line.

**Decision:** E-03 is P0 priority. Healthy allocation: Typography 15-20%, Layout 15-25%, Spacing 15-20%, Color 10-15%, Responsive 10-15%. Flag Typography > 30%.

### Finding 4: Theme Propagation Is the Information Bottleneck (report 07)

Content tensions identified in the Content Map propagate to HTML at ~50% rate (2/4 tensions visible in Yegge Gas Town). Section survival is ~100%, but thematic survival is ~50%. The pipeline preserves STRUCTURE but loses MEANING.

**Decision:** Track as IP-02 (Theme Propagation) in agent behavior metrics. P2 priority because it requires keyword-based extraction that needs validation.

### Finding 5: Content Type Determines Quality Ceiling (report 05)

Research content has consistently scored lowest (mean 1.83 across 3 builds). Essay content scored highest (4.0, N=1). Article content in the middle (3.5 after REFINE, N=1). Research content triggers over-engineering and has lower metaphor viability.

**Decision:** Include `contentType` in run-registry.json. After N >= 3 per type, compute per-type quality baselines. Set expectations BEFORE the run starts.

### Finding 6: 9 PA Auditors Are Worth the Cost (reports 04, 06)

PA audit is 48-54% of total cost (~$7/run with REFINE). But reducing to 2 auditors MISSED the catastrophic whitespace void that 9/9 caught. The breadth of perspectives is the value, not the depth per auditor.

**Decision:** 9 auditors for all production builds. Consider 5 for rapid iteration only. Never fewer than 5. Track per-auditor contribution (P2) to validate this over time.

### Finding 7: Opus Builder Is Cost-Saving Despite Higher Token Price (reports 04, 05)

Opus at $1.04/build vs Sonnet at ~$0.32/build. But Sonnet historically needs MORE REFINE cycles (each costing $5.81). One saved REFINE cycle pays for 8 Opus builds.

**Decision:** Track builder model in run-registry.json. After N >= 3 Sonnet builds (if any), validate this pattern empirically.

### Finding 8: The Pipeline's Self-Measurement Gap Is Systematic (reports 02, 03, 08)

The pipeline currently produces artifacts but does not measure itself. Execution tracker fields are ~50% populated. GR-48 (meta-gate) is REQUIRED but skipped in 3 consecutive runs. The pattern library has 10 seed patterns but no validation infrastructure.

**Decision:** Instrumentation IS the fix. The extraction scripts populate what the tracker leaves blank. The run-registry replaces manual tracking. The pattern library replaces ad-hoc retrospectives.

---

## 10. Open Questions

### Resolved by This Spec

| Question | Resolution |
|----------|-----------|
| What data enables post-run conversations? | run-summary.json + RUN-DIGEST.md (Sections 4-5) |
| How to avoid adding runtime cost? | Post-hoc extraction only. One command after pipeline. (Section 2) |
| How to prevent instrumentation from propagating cracks? | 206/224 cells IMMUNE, 18 SAFE, 0 RISK. (Section 8) |
| How to prevent metric bloat? | Self-sunset protocol: 3-run unused = flagged for removal. (Section 8) |
| What does a pipeline run cost? | ~$13 with 1 REFINE. PA is 54%. (Section 4, economics field) |

### Requires Experimentation (N >= 5 runs with instrumentation)

1. **Does REFINE delta decay within a single build?** We have N=2 first-REFINE data points but zero second-REFINE data points. Need a build with 2+ REFINE cycles to estimate decay rate.

2. **Does content type actually predict PA-05, or are research builds confounded with over-engineering?** Need 3+ runs each on essay, article, research content with the SAME pipeline version.

3. **Does the Perception Gap Score predict REFINE effectiveness?** Hypothesis: higher PGS (more gate-PA divergence) predicts larger REFINE delta (more "obvious" things to fix). Need PGS data from 5+ runs.

4. **Can pre-run quality prediction work with N < 10?** Nearest-neighbor by content similarity index may work. Need to track prediction accuracy from the start to calibrate the model.

5. **Is the 50% theme propagation rate fixable?** If themes are lost at the content-map-to-brief junction, adding theme-specific template slots in the brief template would fix it. But this is a pipeline change, not an instrumentation change. Instrumentation can only DETECT the loss.

### Requires N >= 10 Runs

6. **Per-gate predictive power tracking.** Which gates have > 75% alignment with PA findings? Which are crying wolf?

7. **Builder self-evaluation accuracy.** If builders can accurately predict 60%+ of PA findings, the PA protocol could be optimized.

8. **Prompt evolution effectiveness.** Do prompt changes produce corresponding agent behavior changes? Requires cross-run storage and comparison.

### Explicitly Deferred

9. **Real-time dashboards.** Rejected: adds C-02 (orchestrator attention) during pipeline.

10. **Per-agent token tracking.** Rejected: requires API-level instrumentation not available in current SDK.

11. **Automated A/B testing within a single run.** Rejected: doubles runtime. A/B testing ACROSS runs (via run-registry comparison) is the correct approach.

12. **Screenshot pixel analysis for perceptual gates.** Interesting but high-effort, low-urgency. Deferred to P3+.

---

*Unified instrumentation specification complete. 10 sections, ~600 lines. Covers architecture, schemas, implementation priority, automation spec, crack safety certification, and open questions. P0 implementation target: 1 session, 3 scripts, 2 generated files, transforms post-run conversations from day one.*

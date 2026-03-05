# Pipeline v3 Retrospective — Instrumentation Design

**Agent:** Opus (instrumentation specialist)
**Date:** 2026-02-25
**Scope:** What metrics/logging/tracking to add so the next retrospective requires data review, not 10 agents guessing.

---

## 1. The Core Problem

This run's retrospective required 10+ agents to reconstruct what happened because the pipeline produces artifacts but not metrics. We have the execution tracker (manual checkboxes), gate results (structured JSON), and PA reports (prose). We do NOT have: timing per phase, compression ratios, brief quality metrics, agent resource usage, or a cross-run comparison format.

**Goal:** Instrument the pipeline so a single post-run script generates a one-page summary equivalent to what 10 agents produced.

---

## 2. Timing Instrumentation

**Where:** EXECUTION-TRACKER-TEMPLATE.md (new `## Timing Log` section after Build Metadata)

Append-only ledger with one row per event:

| Event | ISO Timestamp | Wall Clock (s) | Notes |
|-------|---------------|----------------|-------|

15 event types: `PIPELINE_START`, `PHASE_{N}_START/END`, `AGENT_{ROLE}_SPAWN/COMPLETE/RESPAWN`, `GATE_RUNNER_START/END`, `PA_BATCH_SPAWN/COMPLETE`, `REFINE_START/END`, `PIPELINE_END`.

Derived post-run: total wall clock, per-phase duration, longest agent, respawn count, PA batch parallelism window.

---

## 3. Compression Ratio Tracking

**Where:** EXECUTION-TRACKER-TEMPLATE.md (new `## Compression Metrics` after Brief Verification)

| Stage | Lines In | Lines Out | Ratio | Alert? |
|-------|----------|-----------|-------|--------|
| Source -> Content Map | 1,324 | 70 | 18.9:1 | NO (< 30:1) |
| Content Map -> Brief | 70 | 272 | 0.26:1 (expansion) | NO |
| Brief -> HTML (CSS lines) | 272 | ~1,100 | 0.25:1 (expansion) | NO |

**Alert:** >30:1 = WARNING. >50:1 = BLOCKING.

---

## 4. Information Loss Detection

**Where:** artifact-orchestrator.md (new BV-05 after BV-04)

After brief assembly, scan for recipe keyword coverage:

| Recipe Step | Keywords | Found? | Lines |
|-------------|----------|--------|-------|
| Step 2.7 | hover | NO | 0 |
| Step 3.1 | channel, multi-coherence | YES | 3 |
| Step 3.4c | SCROLL-REVEALS, signal | NO | 0 |
| D-01 | container, 940, 960 | YES | 1 |

**Alert:** Recipe step missing = WARNING. Disposition missing = BLOCKING.

---

## 5. Gate Coverage Tracking

**Where:** gate-runner-core.js + p3a-gate-results.json

Append a `coverage` object to gate JSON:

```json
{
  "coverage": {
    "total_in_manifest": 42, "total_executed": 30, "total_skipped": 12,
    "skipped_gates": ["GR-07", "GR-33", "GR-34", "GR-48", "GR-49", "GR-05b"],
    "required_coverage": "15/20 (75%)",
    "alert": "GR-48 REQUIRED gate SKIPPED"
  }
}
```

**Alert:** REQUIRED gate skipped = BLOCKING. Required coverage < 90% = WARNING.

---

## 6. PA Quality Metrics

**Where:** EXECUTION-TRACKER-TEMPLATE.md (new `## PA Metrics` after Phase 3B)

| Auditor | Questions | Answered | Word Count | Experiential Pass? | Unique Findings | Respawns |
|---------|-----------|----------|------------|-------------------|-----------------|----------|
| A | 9 | 9 | 5,400 | YES | 7 | 1 |
| TOTAL | 69 | 69 | ~48,000 | 9/9 | ~52 | 2 |

**Derived:** question coverage %, experiential pass rate, convergence count.
**Alert:** Coverage < 95% = WARNING. Experiential rate < 100% = BLOCKING.

---

## 7. Brief Quality Metrics

**Where:** EXECUTION-TRACKER-TEMPLATE.md (extend BV section)

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| Total lines | 272 | 100-165 | OVER (positive) |
| Recipe verbs | 18 | >= 12 | PASS |
| Checklist verbs | 3 | <= 4 | PASS |
| Recipe:Checklist ratio | 6:1 | >= 3:1 | PASS |
| Background hexes matching value tables | 5/5 | 100% | PASS |
| Dispositions present | 9/9 | 9/9 | PASS |

---

## 8. Agent Metrics

**Where:** EXECUTION-TRACKER-TEMPLATE.md (enforce existing L3 tables + new summary)

Two changes: (1) orchestrator fills L3 tables AS EACH AGENT completes; (2) add summary table:

| Agent | Model | Input Files | Input ~Lines | Output Lines | Duration | Respawns |
|-------|-------|-------------|-------------|-------------|----------|----------|
| Content Analyst | Opus | 1 | 1,324 | 70 | 4m | 0 |
| Builder | Opus | 5 | ~2,850 | 2,671 | 22m | 0 |

---

## 9. Cross-Run Comparison Format

**Where:** New `run-summary.json` in each build output directory.

Standardized JSON: build, content_slug, content_words, mode, builder_model, pa05_initial/final, tier5_score, verdict_initial/final, gates_pass/fail/total, bv_revision_cycles, refine_cycles, agents_spawned/respawns, total_duration_min, brief_lines, html_lines, css_lines_est, screenshots_total, pa_question_coverage, experiential_convergence, compression_source_to_map, emotional_arc (4 registers), fixes_by_type.

Enables: `jq -s '.[] | [.build, .pa05_final, .verdict_final]' */run-summary.json`

---

## 10. Automated Alerts

**Where:** artifact-orchestrator.md (new "Alert Protocol" section)

| Condition | Severity | Phase |
|-----------|----------|-------|
| Brief < 100 lines | BLOCKING | Phase 1 |
| Brief > 300 lines | WARNING | Phase 1 |
| Compression > 30:1 | WARNING | Phase 1 |
| Compression > 50:1 | BLOCKING | Phase 1 |
| Recipe:checklist < 3:1 | BLOCKING | Phase 1 |
| Disposition missing | BLOCKING | Phase 1 |
| HTML < 500 lines | WARNING | Phase 2 |
| Gate coverage < 80% | WARNING | Phase 3A |
| REQUIRED gate skipped | BLOCKING | Phase 3A |
| PA coverage < 95% | WARNING | Phase 3B |
| Experiential pass missing | BLOCKING | Phase 3B |

Alerts logged to timing ledger as `ALERT_WARNING` or `ALERT_BLOCKING` events.

---

## 11. Post-Run Summary Template

**Where:** New `POST-RUN-SUMMARY-TEMPLATE.md` adjacent to tracker template.

```
# Run Summary: {SLUG} ({DATE})
## Result
PA-05: {score}/4 | Tier 5: {score}/9 | Verdict: {verdict}
## Timeline
Total: {duration} | Phases: PF({n}m) P0({n}m) P1({n}m) P2({n}m) P3({n}m)
## Compression
Source({n}) -> Map({n}) [{ratio}:1] -> Brief({n}) [expansion] -> HTML({n})
## Gates
{pass}/{total} PASS | {fail} FAIL | Skipped: {list}
## PA
69 questions | {coverage}% | {convergence}/9 convergence
Strongest: {register} ({score}/10) | Weakest: {register} ({score}/10)
## Fixes
{mechanical} MECHANICAL | {structural} STRUCTURAL | {compositional} COMPOSITIONAL
## Alerts
{list of WARNING/BLOCKING alerts}
## Delta from Previous Run
PA-05: {prev} -> {curr} ({delta}) | Gates: {prev_pass} -> {curr_pass}
```

Replaces 10-agent retrospective when nothing went wrong.

---

## Summary: 11 Additions Across 4 Files + 2 New Templates

| ID | Addition | File | Priority |
|----|----------|------|----------|
| IN-01 | Timing ledger | EXECUTION-TRACKER-TEMPLATE.md | P1-HIGH |
| IN-02 | Compression metrics | EXECUTION-TRACKER-TEMPLATE.md | P1-HIGH |
| IN-03 | Recipe keyword scan (BV-05) | artifact-orchestrator.md | P1-HIGH |
| IN-04 | Gate coverage summary | gate-runner-core.js | P0-BLOCKING |
| IN-05 | PA quality metrics | EXECUTION-TRACKER-TEMPLATE.md | P2-MEDIUM |
| IN-06 | Brief quality metrics | EXECUTION-TRACKER-TEMPLATE.md | P2-MEDIUM |
| IN-07 | Enforce L3 population | artifact-orchestrator.md | P1-HIGH |
| IN-08 | run-summary.json schema | New file | P2-MEDIUM |
| IN-09 | Post-run summary template | New file | P2-MEDIUM |
| IN-10 | Automated alert protocol | artifact-orchestrator.md | P1-HIGH |
| IN-11 | Agent metrics summary | EXECUTION-TRACKER-TEMPLATE.md | P3-LOW |

*Instrumentation design complete.*

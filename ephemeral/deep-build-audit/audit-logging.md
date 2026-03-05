# Audit: Logging + Instrumentation

**Auditor:** audit-logging agent
**Date:** 2026-02-28
**Files audited:**
- `tools/deep-build/src/logging/logger.ts` (109 lines)
- `tools/deep-build/src/logging/cost-tracker.ts` (75 lines)
- `tools/deep-build/src/instrumentation/metrics.ts` (63 lines)
- `tools/deep-build/src/instrumentation/report.ts` (203 lines)
- `tools/deep-build/src/types/report.ts` (73 lines)
- `tools/deep-build/src/types/state.ts` (CostTracker, PassRecord)
- `tools/deep-build/src/types/errors.ts` (ErrorCategory, ErrorRecord)
- `tools/deep-build/src/types/pass.ts` (PassResult)

**Plan references:**
- Lines 866-947: Instrumentation Dimensions + run-report.json Schema
- Lines 1194-1196: Checklist E (E.1 logger, E.2 cost-tracker)
- GAP-I01: 6 log files in doc 08 reduced to 4 destinations
- GAP-G01: Cost estimate + budget thresholds ($150 warning, $250 cap)

---

## 1. Log Destinations (Plan: 6 destinations)

### Plan requirement (E.1):
> 6 destinations: console (human status), run.log (full human log), passes.jsonl (per-pass structured), errors.jsonl (all errors), decisions.jsonl (routing decisions), quality.jsonl (PA scores, verifier sentiment, conviction density per checkpoint)

### GAP-I01 resolution:
> Implement 4 log destinations: run.log (human), passes.jsonl (per-pass structured), errors.jsonl (all errors), cost.jsonl (per-invocation)

### Implementation (logger.ts):

| Destination | Status | Notes |
|-------------|--------|-------|
| **Console** (human status) | **IMPLEMENTED** | `status()` method writes to stdout (with TTY-aware line clearing). `warn()` and `error()` also write to stderr. |
| **run.log** (full human log) | **IMPLEMENTED** | `appendLog()` writes timestamped `[LEVEL]` lines to `run.log`. All methods (info, warn, error, status) route through it. Format: `[ISO-timestamp] [LEVEL] message`. |
| **passes.jsonl** (per-pass structured) | **IMPLEMENTED** | `pass()` method calls `appendJsonl()` with full PassRecord. |
| **errors.jsonl** (all errors) | **IMPLEMENTED** | `logError()` method calls `appendJsonl()` with ErrorRecord. |
| **decisions.jsonl** (routing decisions) | **IMPLEMENTED** | `decision()` method accepts arbitrary object, adds timestamp, appends via JSONL. |
| **quality.jsonl** (PA scores, verifier sentiment) | **IMPLEMENTED** | `quality()` method accepts arbitrary object, adds timestamp, appends via JSONL. |

**Verdict: IMPLEMENTED (6/6)**

Note: The plan checklist E.1 lists 6 destinations. GAP-I01 reduced this to 4 (dropping decisions.jsonl and quality.jsonl, adding cost.jsonl). However, the implementation went with the FULL 6 destinations from E.1 and does NOT have a separate `cost.jsonl`. Cost data is instead embedded in passes.jsonl (via PassRecord.cost) and in state.json (via CostTracker). This is a reasonable architectural choice -- no separate cost.jsonl file, but cost data is fully tracked in-memory and written to passes.jsonl per-pass and run-report.json at completion. The GAP-I01 resolution is SUPERSEDED by the implementation choosing the richer E.1 spec.

---

## 2. Budget Warning at $150

### Plan requirement (GAP-G01):
> Budget warning at $150

### Implementation (cost-tracker.ts line 37, state.ts line 186):

```typescript
// cost-tracker.ts:37-39
if (!cost.warningThresholdHit && cost.totalCostUsd >= cost.budgetWarningThresholdUsd) {
  cost.warningThresholdHit = true;
}

// state.ts:186 (default)
budgetWarningThresholdUsd: config.budgetWarning ?? 150,
```

**Verdict: IMPLEMENTED**

The threshold is configurable with a default of $150. The `warningThresholdHit` boolean flips once. `checkBudget()` returns a `BudgetStatus` with a human-readable warning message including remaining budget.

### Minor gap:
The warning flag is SET but the logger is NOT called from `updateCost()` or `checkBudget()` -- the orchestrator must check `checkBudget()` and log accordingly. This is acceptable (separation of concerns) but there is no guarantee the warning appears in run.log or console unless the orchestrator calls it. The cost-tracker module is purely a calculator; it does not emit log output itself.

---

## 3. Budget Hard Cap at $250

### Plan requirement (GAP-G01):
> Hard cap at $250

### Implementation (cost-tracker.ts line 40, state.ts line 187):

```typescript
// cost-tracker.ts:40-42
if (!cost.hardCapHit && cost.totalCostUsd >= cost.budgetHardCapUsd) {
  cost.hardCapHit = true;
}

// state.ts:187 (default)
budgetHardCapUsd: config.budgetCap ?? 250,
```

**Verdict: IMPLEMENTED**

`checkBudget()` returns `exceeded: true` with message `"Pipeline must pause."`. The `BudgetExceededError` class (errors.ts:81-91) exists for throwing when the cap is hit. The report generator (report.ts:23-24) uses `hardCapHit` to set finalVerdict to `'BUDGET_CAP'`.

---

## 4. RunReport Interface vs Plan Schema

### Plan schema (lines 885-947):

| Field | Plan | Implementation (types/report.ts) | Status |
|-------|------|----------------------------------|--------|
| `meta.runId` | string | string | MATCH |
| `meta.contentPath` | string | string | MATCH |
| `meta.slug` | string | string | MATCH |
| `meta.startedAt` | string | string | MATCH |
| `meta.completedAt` | string | string | MATCH |
| `meta.totalDurationMs` | number | number | MATCH |
| `meta.totalDurationHuman` | string (e.g. "14h 23m 47s") | string | MATCH |
| `meta.totalPasses` | number | number | MATCH |
| `meta.totalCostUsd` | number | number | MATCH |
| `meta.paCycles` | number | number | MATCH |
| `meta.finalVerdict` | `'SHIP' \| 'REFINE' \| 'RETHINK' \| 'FAILED' \| 'BUDGET_CAP'` | identical union | MATCH |
| `costBreakdown.perSubset` | `Record<string, number>` | `Record<string, number>` | MATCH |
| `costBreakdown.perRole` | `Record<string, number>` | `Record<string, number>` | MATCH |
| `costBreakdown.perPhase` | `{ A: number; B: number }` | `{ A: number; B: number }` | MATCH |
| `costBreakdown.tokenTotals` | `{ input, output, cacheRead, cacheWrite }` | identical 4 fields | MATCH |
| `artifactEvolution.initialSize` | number | number | MATCH |
| `artifactEvolution.finalSize` | number | number | MATCH |
| `artifactEvolution.peakSize` | number | number | MATCH |
| `artifactEvolution.sizeHistory` | `number[]` | `number[]` | MATCH |
| `artifactEvolution.subsetDeltas` | `number[]` | `number[]` | MATCH |
| `verifierSignal.observations` | `string[]` | `string[]` | MATCH |
| `verifierSignal.sentimentArc` | `('improving' \| 'stable' \| 'regressing')[]` | identical union array | MATCH |
| `verifierSignal.concerns` | `string[]` | `string[]` | MATCH |
| `rotationAnalysis.filesPerSubset` | `Record<string, string[]>` | `Record<string, string[]>` | MATCH |
| `rotationAnalysis.positionHistory` | `Record<string, ('primacy' \| 'valley' \| 'recency')[]>` | identical | MATCH |
| `paResults` | optional | optional (`?`) | MATCH |
| `paResults.cycles` | number | number | MATCH |
| `paResults.finalPa05` | number | number | MATCH |
| `paResults.pa05Trajectory` | `number[]` | `number[]` | MATCH |
| `paResults.tier5Scores` | `number[]` | `number[]` | MATCH |
| `paResults.auditorConvergence` | `Record<string, number>` | `Record<string, number>` | MATCH |
| `paResults.fixCategories` | `{ mechanical, structural, compositional }` | identical | MATCH |
| `paResults.finalVerdict` | string | string | MATCH |
| `qualityTrajectory.checkpoints` | `Array<{ subset, artifactSize, verifierSentiment, convictionCount, discoveryCount, pa05? }>` | identical | MATCH |
| `errors.total` | number | number | MATCH |
| `errors.recovered` | number | number | MATCH |
| `errors.unrecovered` | number | number | MATCH |
| `errors.byCategory` | `Record<ErrorCategory, number>` | `Partial<Record<ErrorCategory, number>>` | MINOR DIFF |

**Verdict: IMPLEMENTED (35/36 exact match, 1 minor difference)**

The only difference: `errors.byCategory` is `Partial<Record<ErrorCategory, number>>` in the implementation vs `Record<ErrorCategory, number>` in the plan. The `Partial` is actually more correct -- not every error category will have a count. This is a refinement, not a deviation.

---

## 5. Per-Pass Metrics Recorded

### Plan requirement (line 868):
> Every pass records metrics.

### Plan dimensions tracked per-pass:
> Input/output/cache-read/cache-write tokens per pass. USD per pass. Artifact size changes. Conviction additions. Discovery additions.

### Implementation (metrics.ts + state.ts PassRecord):

| Metric | Status | Where |
|--------|--------|-------|
| **Input tokens** | IMPLEMENTED | PassRecord.inputTokens |
| **Output tokens** | IMPLEMENTED | PassRecord.outputTokens |
| **Cache read tokens** | IMPLEMENTED | PassRecord.cacheReadTokens |
| **Cache write tokens** | IMPLEMENTED | PassRecord.cacheWriteTokens |
| **USD cost** | IMPLEMENTED | PassRecord.cost |
| **Artifact size before** | IMPLEMENTED | PassRecord.artifactSizeBefore |
| **Artifact size after** | IMPLEMENTED | PassRecord.artifactSizeAfter |
| **Artifact hash** | IMPLEMENTED | PassRecord.artifactHash |
| **Conviction addition flag** | IMPLEMENTED | PassRecord.hasConvictionAddition |
| **Discovery addition flag** | IMPLEMENTED | PassRecord.hasDiscoveryAddition |
| **Corpus files loaded** | IMPLEMENTED | PassRecord.corpusFilesLoaded |
| **Reference files loaded** | IMPLEMENTED | PassRecord.referenceFilesLoaded |
| **Rotation index** | IMPLEMENTED | PassRecord.rotationIndex |
| **Timing (start/end)** | IMPLEMENTED | PassRecord.startedAt, PassRecord.completedAt |
| **Retry count** | IMPLEMENTED | PassRecord.retryCount |
| **Success flag** | IMPLEMENTED | PassRecord.success |
| **Error** | IMPLEMENTED | PassRecord.error (optional) |

**Verdict: IMPLEMENTED (17/17 fields)**

`recordPassMetrics()` in metrics.ts additionally logs quality signals (verifier observations, conviction additions, discovery entries) to quality.jsonl, and prints a concise status line to console showing pass number, subset, role, cumulative cost, and size delta.

---

## 6. Cost Tracking Per-Role and Per-Subset

### Plan requirement (line 872):
> USD per pass, per subset, per role, per phase, cumulative.

### Implementation:

| Tracking dimension | Status | Where |
|-------------------|--------|-------|
| **Per-pass** | IMPLEMENTED | PassRecord.cost in passes.jsonl |
| **Per-subset** | IMPLEMENTED | CostTracker.perSubset (Record<number, number>) |
| **Per-role** | IMPLEMENTED | CostTracker.perRole (Record<string, number>) |
| **Per-phase** | IMPLEMENTED | RunReport.costBreakdown.perPhase (A/B split) |
| **Cumulative** | IMPLEMENTED | CostTracker.totalCostUsd |

**Verdict: IMPLEMENTED (5/5)**

`updateCost()` accumulates all dimensions atomically. Both `perSubset` and `perRole` are computed in real-time during the run (state.ts) AND also recomputed from passes at report-generation time (report.ts lines 41-52), providing redundant verification.

---

## 7. Human-Readable run.log Format

### Plan requirement (E.1):
> run.log (full human log)

### Implementation (logger.ts lines 35-38):

```typescript
private appendLog(level: string, message: string): void {
  const line = `[${this.timestamp()}] [${level}] ${message}\n`;
  fs.appendFileSync(this.logPath, line, 'utf-8');
}
```

Format example: `[2026-02-28T12:34:56.789Z] [INFO] P14/56 S2 builder — $23.45 — +1234b`

**Verdict: IMPLEMENTED**

Human-readable with ISO timestamp, level tag, and descriptive message. All log methods (info, warn, error, status, pass, logError) write to run.log. The status line additionally goes to stdout for live monitoring.

---

## 8. JSONL Format for Structured Logs

### Plan requirement:
> One JSON per line (JSONL format)

### Implementation (utils.ts lines 131-133):

```typescript
export function appendJsonl(filePath: string, record: Record<string, unknown>): void {
  const line = JSON.stringify(record) + '\n';
  fs.appendFileSync(filePath, line, 'utf-8');
}
```

**Verdict: IMPLEMENTED**

Correct JSONL format (one JSON object per line, newline-terminated). Used by all four structured log files: passes.jsonl, errors.jsonl, decisions.jsonl, quality.jsonl.

---

## Summary

| Requirement | Verdict |
|-------------|---------|
| 6 log destinations (console, run.log, passes.jsonl, errors.jsonl, decisions.jsonl, quality.jsonl) | **IMPLEMENTED** |
| Budget warning at $150 | **IMPLEMENTED** |
| Budget hard cap at $250 | **IMPLEMENTED** |
| RunReport interface matches plan schema | **IMPLEMENTED** (35/36 exact, 1 `Partial` refinement) |
| Per-pass metrics recorded (tokens, cost, artifact size delta, timing) | **IMPLEMENTED** (17/17 fields) |
| Cost tracking per-role and per-subset | **IMPLEMENTED** (5/5 dimensions) |
| Human-readable run.log format | **IMPLEMENTED** |
| JSONL format for structured logs | **IMPLEMENTED** |

**Overall: 8/8 IMPLEMENTED, 0 PARTIAL, 0 MISSING, 0 WRONG**

---

## Notes / Observations

1. **GAP-I01 superseded:** GAP-I01 resolved to 4 destinations (dropping decisions.jsonl and quality.jsonl, adding cost.jsonl). The implementation chose the richer E.1 spec with all 6 destinations and no separate cost.jsonl. Cost data is tracked through CostTracker in state and per-pass in passes.jsonl. This is a better design -- cost.jsonl would duplicate data already in passes.jsonl.

2. **Logging is passive, not proactive:** The Logger class provides METHODS (decision(), quality()) but does not DECIDE when to call them. The orchestrator is responsible for calling `logger.decision(...)` on routing decisions and `logger.quality(...)` on quality signals. If the orchestrator omits a call, the data is silently lost. This is standard separation of concerns but worth noting for integration testing.

3. **No atomic write for run.log:** `appendJsonl` in utils.ts uses `appendFileSync` (not write-to-tmp-then-rename per GAP-I02). For JSONL files this is acceptable (each line is independent, a truncated last line is recoverable). For run.log it's also fine (human-readable, append-only). The atomic write pattern from GAP-I02 is more critical for state.json, not log files.

4. **Report generation is comprehensive:** `generateReport()` in report.ts (194 lines) computes all RunReport fields from PipelineState. The only stub fields are `rotationAnalysis.filesPerSubset` and `rotationAnalysis.positionHistory`, which are marked with comments indicating the orchestrator populates them. This is consistent with the rotation data being computed at a higher level.

5. **Sentiment arc heuristic is simplistic:** The verifier sentiment arc (report.ts lines 72-84) uses artifact size delta (>100 bytes = improving, <-100 = regressing) as a proxy for sentiment. The plan says "Sentiment arc: improving/stable/regressing per observation" which implies semantic analysis of verifier text. The size-based heuristic is a reasonable first approximation but may misclassify size-neutral quality changes. This is a MINOR concern, not blocking.

6. **Error categories match plan:** All 14 error categories from doc 08 are present in errors.ts (model-overload, rate-limit, timeout, invalid-response, html-extraction-failed, validation-failed, state-corruption, config-mismatch, budget-exceeded, playwright-error, file-not-found, permission-denied, network-error, unknown). Specialized error classes exist for the most common categories.

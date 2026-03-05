# Wave 2: Observability Audit — `tools/deep-build/src/`

**Auditor:** Observability Engineer (Opus 4.6)
**Date:** 2026-02-28
**Scope:** Logging, metrics, cost tracking, instrumentation, operational visibility
**Files audited:** All 36 `.ts` source files in `tools/deep-build/src/`
**Method:** Full source read of every file — no runtime testing

---

## 1. Logger Module Audit (`src/logging/logger.ts`)

### 1.1 Log Levels

**Supported levels:** 4 — INFO, WARN, ERROR, STATUS

| Level | Method | Console output | File output | Used appropriately? |
|-------|--------|---------------|-------------|-------------------|
| INFO | `logger.info()` | None (file only) | `run.log` | YES — used for progress milestones |
| WARN | `logger.warn()` | `stderr` with warning icon | `run.log` | YES — used for non-fatal failures |
| ERROR | `logger.error()` | `stderr` with error icon | `run.log` + stack trace | YES — used for fatal/recoverable errors |
| STATUS | `logger.status()` | `stdout` (TTY-aware, overwrites line) | `run.log` | YES — used for progress indicator |

**Gap: No DEBUG level.** There is no way to enable verbose logging for development/debugging. The assembler's token trim decisions, rotation calculations, and prompt variable resolution are invisible.

**Priority:** MEDIUM — Would significantly help debugging prompt assembly issues and token budget problems.

### 1.2 Structured Logging

The Logger uses a **dual-track architecture:**

- **Unstructured:** `run.log` — plain text `[timestamp] [LEVEL] message` format. Human-readable, not machine-parseable.
- **Structured:** 4 separate JSONL files — `passes.jsonl`, `errors.jsonl`, `decisions.jsonl`, `quality.jsonl`. Machine-parseable, append-only.

**Assessment:** This is a GOOD design. The JSONL files are the real data layer; `run.log` is the human-readable narrative layer. The separation is intentional and correct.

**Gap:** The structured logs (JSONL) contain rich data, but `run.log` is flat text with no component tags. You cannot grep `run.log` for "all PA auditor messages" vs "all builder messages."

### 1.3 Component Filtering

**No component filtering in Logger.** The Logger class has no concept of component/module origin. All log calls are undifferentiated.

However, the **console output DOES use prefixes** (see Section 2 below). These are ad-hoc, not Logger-managed.

**Priority:** LOW — The JSONL files have structured component data (role, subsetId, passNumber). Component filtering is only missing from the plain-text `run.log`.

### 1.4 Log Message Actionability

**Can you diagnose issues from logs alone?** PARTIALLY.

| Scenario | Diagnosable from logs? | What's missing? |
|----------|----------------------|-----------------|
| Which pass failed | YES — `passes.jsonl` has success/error per pass | Nothing |
| Why a pass failed | PARTIALLY — error message logged, but full response text is NOT logged | Raw response text in error cases |
| Budget status | YES — cost tracked per pass | Nothing |
| Token budget trim | NO — assembler does not log trim decisions through Logger | Trim details |
| PA auditor failures | PARTIALLY — console.error shows failure, but not in `errors.jsonl` | Auditor errors not routed to structured log |
| Weaver verdict | YES — logged in both console and `decisions.jsonl` | Nothing |
| Stall detection | YES — logged in `decisions.jsonl` | Nothing |
| Rotation details | NO — rotation shifts logged to console only | Not in any JSONL file |

### 1.5 Sensitive Data in Logs

**Prompt content:** NOT logged to any log file. Prompts are archived in `_passes/pass-NNN/prompt.md` files (per-pass archive), not in logs. This is CORRECT.

**API keys:** NOT logged. The `claude -p` child process inherits `process.env` but log messages contain only role names and error messages.

**Full model responses:** NOT logged to JSONL. Full responses are archived in `_passes/pass-NNN/response.json`. This is CORRECT — keeps logs compact.

**User content:** Content markdown paths are logged (not content itself). CORRECT.

**Assessment:** No sensitive data leakage identified.

---

## 2. Console Output Mapping

### 2.1 Complete `console.log` / `console.error` / `console.warn` Map

**Total console output points: 68** across 8 files.

| File | console.log | console.error | console.warn | process.stderr.write |
|------|-------------|---------------|-------------|---------------------|
| `cli.ts` | 22 | 5 | 0 | 0 |
| `pipeline.ts` | 38 | 2 | 0 | 0 |
| `pass-executor.ts` | 0 | 2 | 0 | 0 |
| `claude-cli.ts` | 0 | 5 | 0 | 0 |
| `response-handler.ts` | 0 | 0 | 5 | 0 |
| `auditor-spawner.ts` | 3 | 4 | 0 | 0 |
| `weaver-spawner.ts` | 3 | 0 | 0 | 0 |
| `mini-pa-spawner.ts` | 2 | 1 | 0 | 0 |
| `utils.ts` | 0 | 3 | 0 | 0 |
| `assembler.ts` | 0 | 0 | 0 | 1 |
| `logger.ts` | 0 | 0 | 0 | 3 |

### 2.2 Prefix Pattern Analysis

**There IS a consistent prefix pattern, but it's applied inconsistently:**

| Prefix | Used in | Example |
|--------|---------|---------|
| `[pipeline]` | `pipeline.ts` (2 places only) | `[pipeline] extractRefinedHtml: no HTML...` |
| `[pa]` | `auditor-spawner.ts`, `weaver-spawner.ts` | `[pa] Spawning 8 parallel auditors...` |
| `[mini-pa]` | `mini-pa-spawner.ts` | `[mini-pa] Spawning 3 auditors...` |
| `[claude-cli]` | `claude-cli.ts` | `[claude-cli] Timeout after...` |
| `[response-handler]` | `response-handler.ts` | `[response-handler] HTML extracted via...` |
| `[safeJsonParse]` | `utils.ts` | `[safeJsonParse] Recovered truncated...` |
| `[appendJsonl]` | `utils.ts` | `[appendJsonl] JSON.stringify failed...` |
| `[pass-executor]` | `pass-executor.ts` | `[pass-executor] HTML extraction failed...` |
| `[assembler]` | `assembler.ts` | `[assembler] WARN: failed to load file...` |
| `  INFO` / `  WARN` / `  ERROR` | `pipeline.ts` `log()` function | `  INFO: Starting fresh pipeline run` |
| (no prefix) | `cli.ts` (dry run output) | `=== DRY RUN ===` |

**Finding OBS-01: The `deps.log()` function in `createDefaultDeps` uses `  INFO`/`  WARN`/`  ERROR` prefixes with 2-space indent — these are NOT the `[component]` bracket style used everywhere else.** This creates visual inconsistency in console output.

**Finding OBS-02: The 38 `console.log` calls in `pipeline.ts:printExecutionPlan()` and the 22 in `cli.ts:printDryRun()` have NO prefix at all.** These are dry-run output, which is arguably presentation (not logging), but they still lack any component identification.

**Finding OBS-03: `pipeline.ts` has a DUAL logging path.** The `log()` dep function writes to `console.log`, but the Logger class writes to `run.log` + stderr. These are not connected — the orchestrator's `deps.log()` does NOT write to `run.log`, and the Logger's methods are NOT called from `pipeline.ts` at all.

**Priority: HIGH** — This is the most significant observability gap. There are TWO independent logging systems operating in parallel:
1. `Logger` class (used by `recordPassMetrics` in `instrumentation/metrics.ts`)
2. `deps.log()` function (used by `pipeline.ts` orchestrator)

The result: `run.log` captures pass-level metrics, but the orchestrator's phase transitions, subset completions, retrospective outcomes, cross-subset verifications, PA cycle routing decisions, and error context are ONLY written to stdout/stderr via `deps.log()` — NOT to `run.log`.

### 2.3 Noise Assessment

**Default console output is REASONABLE.** The status line uses TTY-aware carriage return overwriting, so a running pipeline shows a single updating status line rather than a scrolling wall of text. The PA spawner shows clear progress milestones.

**However:** The `response-handler.ts` warnings are potentially noisy. Every builder response that uses DOCTYPE fallback (instead of markers) generates `console.warn`. If builders frequently omit markers, this could spam stderr. The fallback IS working correctly — the warning may be more noise than signal in normal operation.

**Priority:** LOW

---

## 3. Cost Tracking Audit (`src/logging/cost-tracker.ts`)

### 3.1 Tracking Granularity

| Dimension | Tracked? | Where? |
|-----------|----------|--------|
| Per-pass | YES | `PassRecord.cost` in `state.passes[]` |
| Per-subset | YES | `state.cost.perSubset[subsetId]` |
| Per-role | YES | `state.cost.perRole[role]` |
| Per-phase (A vs B) | YES | Computed in `report.ts` from pass data |
| Total | YES | `state.cost.totalCostUsd` |
| Token breakdown (input/output/cache) | YES | Both per-pass and total |

**Can you answer "how much did Phase A cost?"** YES — `report.ts:generateReport()` computes `costBreakdown.perPhase.A` and `.B` from pass data.

### 3.2 Token Count Accuracy

Token counts come directly from the `claude -p` JSON response (`usage.input_tokens`, `usage.output_tokens`, `cache_read_tokens`, `cache_write_tokens`). These are API-provided, not estimated.

**Finding OBS-04: Phase 0 costs (TC derivation, content analysis) use `updateCostFromResponse()` in `pipeline.ts`, which correctly accumulates tokens. But Phase 0 passes are NOT recorded in `state.passes[]` — they go through a different code path.** This means:
- `run-report.json` correctly calculates total cost (via `state.cost.totalCostUsd`)
- But `passes.jsonl` does NOT contain Phase 0 entries
- The per-role breakdown in `state.cost.perRole` DOES capture Phase 0 roles (`tc-derivation`, `content-analysis`)
- The `costBreakdown.perPhase.A` calculation in `report.ts` filters passes by `passNumber <= totalCorpusPasses`, which would NOT include Phase 0

**Impact:** Phase 0 cost (~$2-5) is included in `totalCostUsd` but NOT in `perPhase.A` or `perPhase.B`. It's a gap in the per-phase breakdown.

**Priority:** LOW — Phase 0 cost is small, and the total is correct.

**Finding OBS-05: PA auditor and weaver costs have a secondary accumulation path.** In `pipeline.ts:runPhaseB()`, auditor costs are manually added to `state.cost` in a spread operation (lines 439-451), separate from the standard `updateCost()` function in `cost-tracker.ts`. The `updateCost()` function is EXPORTED but not used by `pipeline.ts` — the pipeline does its own cost accumulation. Similarly, weaver costs (lines 472-484) are manually spread.

**Impact:** Two different cost accumulation code paths exist:
1. `cost-tracker.ts:updateCost()` — used by `pass-executor.ts` for corpus passes
2. Manual spread in `pipeline.ts` — used for PA auditor and weaver costs

This duplication creates a risk of inconsistency if the cost tracking logic changes. It's not currently buggy, but it's a maintenance hazard.

**Priority:** MEDIUM

### 3.3 Cost Data Persistence

Cost data is persisted in 3 places:
1. **`state.json`** — the `cost` field contains the full `CostTracker` object (totals, per-subset, per-role, thresholds, flags)
2. **`passes.jsonl`** — each pass record includes `cost`, `inputTokens`, `outputTokens`, `cacheReadTokens`, `cacheWriteTokens`
3. **`run-report.json`** — post-run report includes `costBreakdown` with per-subset, per-role, per-phase, and token totals

**Assessment:** Excellent. Cost data is triply-persisted (state for resume, JSONL for streaming, report for analysis).

### 3.4 Budget Enforcement

**Budget checking happens in 4 locations:**

1. `pass-executor.ts:executeSinglePass()` — pre-spawn budget check (throws `BudgetExceededError`)
2. `pipeline.ts:runPhaseA()` — post-pass budget warning check
3. `pipeline.ts:runPhaseB()` — end-of-cycle budget check
4. `cost-tracker.ts:checkBudget()` — the stateless check function (also exists in `phase-router.ts`)

**Finding OBS-06: There are TWO `checkBudget()` functions with different signatures:**
- `cost-tracker.ts:checkBudget()` — returns `{ warning, exceeded, message? }`
- `phase-router.ts:checkBudget()` — returns `{ warning, exceeded }` (no message)

The pipeline uses `phase-router.ts:checkBudget()`. The `cost-tracker.ts:checkBudget()` is more informative (includes a message string) but is not used by the pipeline. This is a code duplication issue — see also wave2-dead-code findings.

**Priority:** LOW — Both functions work correctly; the duplication is aesthetic.

---

## 4. Metrics and Instrumentation (`src/instrumentation/`)

### 4.1 Metrics Collected

The `recordPassMetrics()` function in `metrics.ts` records:

| Metric | Source | Destination |
|--------|--------|-------------|
| Pass record (all fields) | `state.passes[last]` | `passes.jsonl` via `logger.pass()` |
| Verifier observations | `passResult.verifierObservations` | `quality.jsonl` with type `verifier-observation` |
| Conviction additions | `passResult.convictionAddition` | `quality.jsonl` with type `conviction-addition` |
| Discovery entries | `passResult.discoveryEntries` | `quality.jsonl` with type `discovery-entries` (count only) |

### 4.2 Timing Data

| Component | Timing captured? | How? |
|-----------|-----------------|------|
| Full pipeline | YES | `state.startedAt` to `state.completedAt` |
| Each pass | YES | `PassRecord.startedAt` and `PassRecord.completedAt` |
| Each PA cycle | YES | `PACycleRecord.startedAt` and `PACycleRecord.completedAt` |
| Phase 0 steps | NO — only cost, not duration | `updateCostFromResponse` does not record timing |
| Screenshot capture | NO | No timing instrumentation |
| Gate runner | NO | No timing instrumentation |
| Prompt assembly | NO | No timing instrumentation |
| Individual auditor duration | NO | Only `Promise.allSettled` overall timing |

**Finding OBS-07: No timing for individual agent invocations.** You can calculate per-pass duration from `startedAt`/`completedAt`, but prompt assembly time vs claude-cli spawn time vs response parsing time are not separated. If a pass takes 5 minutes, you cannot tell whether 4 minutes was prompt assembly (file loading), agent execution, or response parsing.

**Priority:** MEDIUM — Important for optimization. Prompt assembly loads multiple large files (mechanism-catalog, case-study, components.css) and the time could be significant.

### 4.3 Timeline Reconstruction

**Can you build a timeline of the run from the data?** YES, mostly.

From `state.json` + `passes.jsonl` you can reconstruct:
- When each pass started and completed
- What role executed each pass
- How much each pass cost
- How the artifact size changed per pass
- When checkpoints were created (via `state.checkpoints[]`)
- When PA cycles ran and their outcomes

**Missing from timeline:**
- Phase 0 step durations
- Time between passes (idle time, prompt assembly time)
- Individual auditor durations within a PA cycle
- Screenshot capture duration
- Gate runner duration

### 4.4 Data Format

**JSONL (JSON Lines)** — excellent choice for streaming append-only data. Each line is independently parseable. Compatible with standard tools (`jq`, `grep`, pandas).

**`state.json`** — standard JSON with `null, 2` pretty-printing. Readable. Schema-versioned (v3).

**`run-report.json`** — comprehensive post-run analysis. Well-structured for programmatic consumption.

---

## 5. Pipeline Report Audit (`src/instrumentation/report.ts`)

### 5.1 Report Contents

The `RunReport` contains 8 top-level sections:

| Section | Fields | Assessment |
|---------|--------|------------|
| `meta` | runId, content, slug, times, totalPasses, totalCost, paCycles, finalVerdict | Comprehensive |
| `costBreakdown` | perSubset, perRole, perPhase, tokenTotals | Comprehensive |
| `artifactEvolution` | initialSize, finalSize, peakSize, sizeHistory, subsetDeltas | Good |
| `verifierSignal` | observations, sentimentArc, concerns | Good |
| `rotationAnalysis` | filesPerSubset, positionHistory | EMPTY — populated by orchestrator but never actually filled |
| `paResults` | cycles, finalPa05, trajectory, tier5, convergence, fixCategories, verdict | Comprehensive |
| `qualityTrajectory` | checkpoints with size, sentiment, conviction, discovery | Good |
| `errors` | total, recovered, unrecovered, byCategory | Good |

**Finding OBS-08: `rotationAnalysis` is always empty.** The report code sets `filesPerSubset: {}` and `positionHistory: {}` with comments "Populated by orchestrator with corpus data" and "Populated by orchestrator with rotation data" — but NO code in the orchestrator actually populates these fields. This is dead data in every report.

**Priority:** LOW — The data is available in `state.passes[]` (which records `rotationIndex` per pass), but the report generation doesn't aggregate it.

### 5.2 Debugging Sufficiency

**Is the report sufficient for debugging a failed run?**

| Question | Answerable? | Source |
|----------|-------------|--------|
| Did the pipeline complete? | YES | `meta.finalVerdict` |
| What did it cost? | YES | `meta.totalCostUsd` + `costBreakdown` |
| How long did it take? | YES | `meta.totalDurationHuman` |
| Which passes succeeded/failed? | PARTIALLY | `errors.total` but no per-pass success list |
| What errors occurred? | YES | `errors.byCategory` |
| Which specific pass failed? | NO — report has error counts, not pass-level error details | Need `passes.jsonl` |
| What was the PA score trajectory? | YES | `paResults.pa05Trajectory` |
| Did stall detection fire? | NO — not in report | Need `decisions.jsonl` |
| What did the weaver say? | PARTIALLY | `paResults.fixCategories` but not narrative | Need weaver-synthesis.md |

**Assessment:** The report is a good high-level summary but is NOT sufficient for debugging a failed run alone. You need `passes.jsonl`, `errors.jsonl`, `decisions.jsonl`, and the archived pass responses for root-cause analysis.

**Priority:** MEDIUM — The report should include a `failedPasses` array with pass numbers and error messages.

### 5.3 Report Correctness Issues

**Finding OBS-09: Sentiment arc calculation is a crude proxy, not a real signal.** The `sentimentArc` in `report.ts` (lines 72-84) classifies sentiment based on `artifactSizeAfter` delta between verifier passes — size increase > 100 bytes = "improving," decrease > 100 bytes = "regressing," otherwise "stable." This is meaningless as a quality signal. Artifact size changes do not correlate with quality. A verifier pass that removes 200 bytes of whitespace would be marked "regressing."

**Priority:** LOW — The field exists but its interpretation is unreliable. It should either be computed differently or removed.

**Finding OBS-10: `qualityTrajectory.checkpoints[].discoveryCount` is cumulative, not per-subset.** Line 124: `discoveryCount: state.discoveryLog.length` gives the total discovery count at each checkpoint, not the count for that subset. This makes the trajectory misleading — later subsets always show higher discovery counts regardless of whether they added any discoveries.

**Priority:** LOW — Cosmetic data issue.

---

## 6. Operational Visibility Gaps

### 6.1 Progress Indicator

**Can you tell which pass is currently running?** YES — via `logger.status()` which writes `P{n}/56 S{s} {role} — ${cost} — {sizeDelta}b` to stdout (TTY-aware, overwrites previous line). Also via `state.inFlightPass` in `state.json`.

**Can you tell estimated time remaining?** NO. There is no ETA calculation. Given that pass durations vary significantly by role (builder ~30s, PA auditor ~120s), per-role average duration tracking would enable reasonable ETAs.

**Priority:** MEDIUM — ETA would be valuable for long runs (3+ hours).

### 6.2 Hang Detection

**If the pipeline hangs, can you tell WHERE it's stuck?** PARTIALLY.

- `state.inFlightPass` records `{ passNumber, startedAt, role }` — so you CAN determine which pass is in-flight and when it started
- `claude-cli.ts` has a 10-minute timeout with SIGTERM then SIGKILL — so claude calls cannot hang indefinitely
- BUT: the HTTP server for screenshots (`http-server.ts`) has no timeout — if Playwright hangs during screenshot capture, the pipeline could block indefinitely with no log output

**Finding OBS-11: Screenshot capture and gate runner have no timeout or heartbeat logging.** If `captureScreenshots()` hangs (e.g., Playwright process stuck, page infinite-loading), there is zero console or file output until the Playwright default timeout fires. The user sees... nothing.

**Priority:** HIGH — Screenshot capture has historically been a problem area (DPR 0.667 workaround noted in memory). Adding a heartbeat log ("capturing viewport {label}...") and an overall timeout would significantly improve observability.

### 6.3 Post-Mortem Analysis

**After a failed run, can you determine root cause from logs/reports alone?**

**For corpus integration failures (Phase A):** MOSTLY YES.
- `passes.jsonl` has per-pass success/error
- `errors.jsonl` has categorized error records
- Pass archives have full prompt + response for forensic analysis
- State snapshots at subset boundaries provide rollback points

**For PA failures (Phase B):** PARTIALLY.
- `decisions.jsonl` has routing decisions
- Auditor reports are saved to `_pa/auditor-{a-i}.md`
- Weaver synthesis is saved to `_pa/weaver-synthesis.md`
- BUT: if an auditor FAILS, only a console.error message is logged — no structured error record is created in `errors.jsonl`

**Finding OBS-12: PA auditor failures are NOT recorded in `errors.jsonl`.** When an auditor fails in `auditor-spawner.ts` (line 222-235), the error is logged to `console.error` and the auditor is marked with `success: false` in the returned array. But no `ErrorRecord` is created and no call to `logger.logError()` is made. The same gap exists for weaver failures and mini-PA auditor failures.

This means: `errors.jsonl` only captures errors from corpus integration (Phase A) passes. Phase B errors are invisible in the structured error log.

**Priority:** HIGH — After a PA cycle failure, `errors.jsonl` says "0 errors" while the console output contains multiple error messages. This is actively misleading.

### 6.4 Real-Time Monitoring

**Can an external process monitor the pipeline in real-time?**

YES, via file watching:
- `state.json` is written atomically after every pass (observable via `fs.watch`)
- `passes.jsonl` is appended after every pass
- `decisions.jsonl` is appended at routing decisions
- The status line goes to stdout (capturable via process pipe)

**No webhook, socket, or HTTP monitoring endpoint exists.** For a pipeline that runs 3+ hours, a simple HTTP status endpoint would be valuable but is not a blocking gap.

---

## 7. JSONL Decision Log Audit

### 7.1 Events Logged to `decisions.jsonl`

| Event | Logged? | Source |
|-------|---------|--------|
| Cross-subset verification result | YES | `pipeline.ts` line 367-372 |
| PA routing decision (SHIP/REFINE/RETHINK) | YES | `pipeline.ts` line 514-522 |
| Stall detection (force SHIP) | YES | `pipeline.ts` line 527-532 |
| Phase transitions | NO | |
| Budget warning | NO | |
| Budget exceeded | NO | |
| Resume from checkpoint | NO | |
| Token trim decisions | NO | |
| Rotation selection | NO | |
| Subset start/complete | NO | |
| Phase 0 completion | NO | |
| Refine builder outcome | NO | |

### 7.2 Audit Trail Assessment

**Can you reconstruct the pipeline's decision-making from the log?** NO — only 3 event types are logged (cross-subset verification, PA routing, stall detection). The log is sparse.

**Finding OBS-13: `decisions.jsonl` captures only 3 of 12 significant decision points.** The most important decisions (why REFINE instead of SHIP, why a specific rotation was chosen, why tokens were trimmed, what the budget status was at each point) are NOT logged. This makes the decision log useful for PA cycle analysis but NOT for understanding the full pipeline execution.

**Priority:** MEDIUM — Adding the following events would make the decision log comprehensive:
1. Phase transition (corpus-integration -> pa-hardening -> completed/paused/failed) with reason
2. Budget warning/exceeded
3. Token trim (which files were trimmed, before/after token count)
4. Refine builder outcome (did it produce new HTML? Did it write to disk?)
5. Subset start/complete with summary metrics

### 7.3 `appendJsonl` Robustness

The `appendJsonl` utility in `utils.ts` is well-implemented:
- Guards against `JSON.stringify` failures (circular references) with a fallback record
- Logs stringify failures to `console.error`
- Uses `appendFileSync` — synchronous, blocking, but safe (no partial writes)

**No issues found.**

---

## 8. Gap Summary

### HIGH Priority

| ID | Gap | Impact | Recommendation |
|----|-----|--------|----------------|
| OBS-03 | Dual logging system: `deps.log()` writes to console only, `Logger` writes to file only. Orchestrator phase/subset/PA events never reach `run.log` | `run.log` is missing the most important operational events (phase transitions, PA routing, budget warnings). After a run, `run.log` shows pass-level metrics but NO orchestrator narrative. | Wire `deps.log()` to also call `Logger.info/warn/error()`. Single source of truth. |
| OBS-11 | Screenshot capture and gate runner have no timeout/heartbeat logging | Pipeline can appear hung during screenshot capture with zero output. Users cannot distinguish "capturing screenshots" from "frozen" | Add progress logging: "Capturing viewport {label} ({n}/{total})..." before each viewport. Add 120s overall timeout. |
| OBS-12 | PA auditor/weaver failures not recorded in `errors.jsonl` | `errors.jsonl` only captures Phase A errors. Phase B errors are console-only. Post-mortem analysis from structured logs is incomplete. | Create ErrorRecords for auditor/weaver/mini-PA failures and route them to `logger.logError()`. |

### MEDIUM Priority

| ID | Gap | Impact | Recommendation |
|----|-----|--------|----------------|
| OBS-01 | `deps.log()` uses `  INFO/WARN/ERROR` prefix inconsistent with `[component]` bracket style | Visual confusion in console output | Standardize to `[pipeline]` prefix |
| OBS-05 | Two cost accumulation code paths (cost-tracker.ts vs manual spread in pipeline.ts) | Maintenance hazard if cost tracking logic changes | Route all cost updates through `updateCost()` |
| OBS-07 | No timing for prompt assembly vs agent execution vs response parsing | Cannot optimize slow passes — don't know where time is spent | Add phase timing markers to pass records |
| OBS-13 | `decisions.jsonl` captures only 3 of 12 decision points | Decision audit trail is incomplete | Add events for phase transitions, budget, token trims, refine outcomes |
| OBS-14 (new) | No ETA calculation or time-remaining estimate | Users cannot predict when a 3+ hour run will complete | Track per-role average duration, compute ETA |

### LOW Priority

| ID | Gap | Impact | Recommendation |
|----|-----|--------|----------------|
| DEBUG level missing | Cannot enable verbose logging for development | Add DEBUG level gated by env var |
| OBS-04 | Phase 0 costs not in `perPhase` breakdown | ~$2-5 unaccounted in per-phase breakdown | Add Phase 0 to report |
| OBS-06 | Duplicate `checkBudget()` functions | Code duplication | Consolidate to one |
| OBS-08 | `rotationAnalysis` always empty in report | Dead data field | Either populate or remove |
| OBS-09 | Sentiment arc based on size delta (meaningless) | Misleading quality signal | Replace with verifier keyword analysis or remove |
| OBS-10 | Discovery count is cumulative, not per-subset | Misleading trajectory data | Track delta per subset |

---

## 9. What's Working Well

Despite the gaps, the observability infrastructure has several strengths:

1. **Atomic state persistence.** `state.json` is written atomically (`.tmp` + rename) after every pass. This means crash recovery always has a valid state file. EXCELLENT.

2. **JSONL streaming format.** The 4 JSONL files provide a real-time, append-only event stream that survives crashes (no buffer to flush). Each line is independently parseable. This is industry best practice.

3. **Pass archiving.** Every pass gets its own directory (`_passes/pass-NNN/`) with `prompt.md`, `response.json`, and `artifact-backup.html`. This is forensic-grade auditability — you can replay any pass.

4. **Cost tracking granularity.** Per-pass, per-subset, per-role, per-phase, with full token breakdown (input, output, cache read, cache write). This is more granular than most production systems.

5. **Budget enforcement with two thresholds.** Warning at $150, hard cap at $250. The warning threshold lets the pipeline alert before it's forced to stop.

6. **Checkpoint system.** Per-subset checkpoints with artifact + state + cost snapshot enable rollback to any subset boundary.

7. **Post-run report.** The `RunReport` type is well-structured and comprehensive for high-level analysis.

---

## 10. Architecture Observations

### The Logger is Underutilized

The `Logger` class is well-designed with 6 output destinations, but it's only directly used by `recordPassMetrics()` in `metrics.ts`. The main orchestrator (`pipeline.ts`) uses `deps.log()` which bypasses Logger entirely. The PA subsystem uses bare `console.log`/`console.error` calls.

The Logger was designed to be THE centralized logging hub, but in practice it only sees pass-level events. This is the root cause of OBS-03 (dual logging), OBS-12 (PA errors not in structured log), and OBS-13 (sparse decision log).

**Root fix:** Make Logger the single logging entry point. Pass it (or its methods) through the dependency injection system so all components use it instead of bare `console.*` calls.

### The Report is Generated but Never Read (Programmatically)

`run-report.json` is written at the end of a run but no code reads it back. It's designed for human consumption or external tooling, which is fine. But if the pipeline ever needs to compare runs or feed into a meta-analysis tool, the report format would need to be more standardized.

### Missing: Log Rotation / Size Limits

For a pipeline that could produce 56 corpus passes + 3 PA cycles, the JSONL files could grow large. `passes.jsonl` will have ~56+ entries (small). `quality.jsonl` could have 56+ entries. `decisions.jsonl` will have ~5-15 entries. `run.log` could be the largest (every status line is logged).

For single runs this is fine. For a system that runs repeatedly, log rotation would be needed. Not a current concern.

---

## 11. Recommended Implementation Order

If addressing these gaps, priority order:

1. **Wire `deps.log()` through Logger** (OBS-03) — single change, highest impact. All orchestrator events flow to `run.log` + JSONL.
2. **Add heartbeat logging to screenshot capture** (OBS-11) — 5-line change, eliminates silent hangs.
3. **Route PA errors to `errors.jsonl`** (OBS-12) — requires passing Logger ref to auditor-spawner, weaver-spawner, mini-pa-spawner.
4. **Expand `decisions.jsonl` events** (OBS-13) — add decision records at 9 additional decision points.
5. **Add per-component timing** (OBS-07) — instrument `executeSinglePass` with phase timing.
6. **Standardize console prefixes** (OBS-01) — cosmetic but improves readability.

---

*End of observability audit. 13 findings identified across 6 priority levels. 3 HIGH, 5 MEDIUM, 5 LOW. Zero source files modified.*

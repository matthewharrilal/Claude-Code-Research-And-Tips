# Pipeline Monitoring Approach Synthesis — Ranked Recommendation

**Date:** 2026-02-28
**Task:** Compare all approaches on reliability, real-time visibility, intervention ability, complexity, and robustness. Produce a ranked recommendation with a concrete implementation plan.
**Source documents:** bash-tool-mechanics.md, wave2-observability.md, wave2-architecture.md, wave2-synthesis-verification.md

---

## Problem Statement

The deep-build orchestrator runs for 3+ hours, spawning 56-104 `claude -p` child processes in sequence. An operator (human or orchestrating agent) needs to:

1. **Know** what is happening in real time (which pass, which phase, cost so far, any failures)
2. **Detect** problems early (hung pass, budget exceeded, PA cycle stuck, stall)
3. **Intervene** if needed (cancel a pass, force a routing decision, resume from checkpoint)

The approaches differ in how they satisfy these three needs.

---

## Approach Definitions

Six approaches were investigated for monitoring and intervening in a running deep-build pipeline:

| ID | Name | Mechanism | Notes |
|----|------|-----------|-------|
| A | Stdout Pipe | Capture stdout/stderr of the `deep-build` process via process pipe or tee | Exists: status line via `logger.status()` |
| B | File Watch (state.json) | `fs.watch` on state.json — pipeline writes atomically after every pass | Exists: atomic write confirmed |
| C | JSONL Streaming | Tail `passes.jsonl`, `decisions.jsonl`, `errors.jsonl` — append-only log files | Partially exists: JSONL files are planned but CURRENTLY DEAD CODE (logging not wired) |
| D | HTTP Status Endpoint | Embedded HTTP server in the pipeline exposing `/status` | Does not exist; must be built |
| E | Agent SDK Messaging | Use SendMessage/TeamCreate to receive updates from sub-agents mid-run | Available in Claude Code agent context; requires pipeline changes |
| F | Bash Tool (run_in_background) | Launch pipeline via `run_in_background`; read output file mid-execution | Fully documented in bash-tool-mechanics.md |

---

## Dimension Ratings

Each approach rated 1 (poor) to 5 (excellent) on each dimension.

### Reliability
*Does the mechanism work consistently across passes, phases, and failure modes?*

| Approach | Score | Reasoning |
|----------|-------|-----------|
| A — Stdout Pipe | 3 | Status line is written to stdout by `logger.status()`, which IS wired in the pipeline. However, stdout pipe is lossy if the consumer disconnects or buffer fills. TTY-aware carriage return overwriting means historical status lines are not preserved. |
| B — File Watch (state.json) | 5 | Atomic write (`.tmp` + rename) means state.json is ALWAYS in a valid state. `fs.watch` is a kernel-level mechanism that will not miss writes. State contains all current information: phase, pass count, cost, inFlightPass, checkpoints. |
| C — JSONL Streaming | 1 | CURRENTLY DEAD CODE. The Logger class is implemented but never instantiated by the pipeline. `passes.jsonl`, `errors.jsonl`, `quality.jsonl`, `decisions.jsonl` are NEVER WRITTEN during actual runs (CONV-2 finding confirmed by 4 audit agents). Rating assumes pre-wiring fix. After fix: 4/5. |
| D — HTTP Endpoint | 3 | Must be built. If built with in-process HTTP server (like the existing PA HTTP server), it would be reliable within a run but adds complexity and a new failure mode. |
| E — Agent SDK Messaging | 2 | Depends on the pipeline explicitly calling `SendMessage` at each decision point — currently zero such calls. Requires significant pipeline changes and introduces external dependency on the Agent SDK's message delivery. If the pipeline agent crashes, no messages arrive. |
| F — Bash Tool (run_in_background) | 4 | Background output file is live-appendable and persists after process completion. No exit code propagation means failure must be detected via sentinel patterns. The pipeline's stdout (including status lines) is captured in the output file. Confirmed: partial reads work mid-execution. |

### Real-Time Visibility
*How current and complete is the information available without polling delays?*

| Approach | Score | Reasoning |
|----------|-------|-----------|
| A — Stdout Pipe | 3 | Status line is updated every pass. Includes pass number, subset, role, cost, size delta. But it's a single line overwritten in place — no history, no phase context, no cost breakdowns. |
| B — File Watch (state.json) | 4 | state.json contains full runtime state after every pass. `inFlightPass` shows which pass is currently running. Cost totals current. All PA cycle records present. `fs.watch` fires within milliseconds of the write. Limitation: state.json is a snapshot, not a stream — gap information between passes is not captured. |
| C — JSONL Streaming | 5 | Once wired, JSONL is the best visibility mechanism. Each event is appended as it happens (not batched). `tail -f passes.jsonl` gives a real-time event stream with full per-pass metadata. `decisions.jsonl` gives routing decisions as they happen. This is industry best practice for long-running pipeline observability. |
| D — HTTP Endpoint | 5 | An in-process `/status` endpoint could expose live state (including inFlightPass, current cost, current PA cycle) at any moment without file I/O. Would be the most real-time option. But must be built. |
| E — Agent SDK Messaging | 4 | If wired, messages arrive immediately at routing decisions. But coverage depends on which events trigger messages. Between messages, the observer has no visibility (unlike file watching which can check state.json at any time). |
| F — Bash Tool | 3 | Output file can be read mid-execution. However, the pipeline writes status lines with carriage return overwrite — in a file, these appear as overlapping lines (the CR does not clear previous content in a file, only on TTY). Effective visibility requires parsing the file content, not just reading it. Pipeline's stdout is captured but format is TTY-optimized, not file-optimized. |

### Intervention Ability
*Can the operator act on the pipeline based on what they see? How quickly and precisely?*

| Approach | Score | Reasoning |
|----------|-------|-----------|
| A — Stdout Pipe | 1 | Observation only. No intervention mechanism. Cannot signal the pipeline to skip a pass, change routing, or abort without killing the whole process. |
| B — File Watch (state.json) | 3 | Indirect intervention only: write a signal file that the pipeline checks between passes (requires pipeline change), or modify state.json directly between passes (fragile, race-prone, requires knowledge of schema). The pipeline does not poll for external signals between passes today. |
| C — JSONL Streaming | 1 | Read-only stream. No intervention mechanism. |
| D — HTTP Endpoint | 5 | A `/control` endpoint could accept POST requests to: pause after current pass, force SHIP verdict, skip current subset, change budget cap. This is the cleanest intervention model. Must be built. |
| E — Agent SDK Messaging | 5 | Bidirectional communication. The pipeline agent can receive `message` events from the team lead and act on them between passes. This is the most natural intervention model in the Agent SDK context — operator sends "force SHIP" message, pipeline reads it at next pass boundary and acts. Requires pipeline changes to check inbox between passes. |
| F — Bash Tool | 3 | Intervention via signal files or named pipes (both confirmed working by bash-tool-mechanics.md). The pipeline would need to poll a signal file between passes. Implementation: write `/tmp/deep-build-signal` with a command string; pipeline reads and acts. Not elegant but works with minimal pipeline changes. |

### Complexity
*How hard is it to implement and maintain?*

| Approach | Score | Reasoning |
|----------|-------|-----------|
| A — Stdout Pipe | 5 | Already exists. Zero implementation cost. Just pipe the process stdout to `tee` or read from Bash output file. |
| B — File Watch (state.json) | 5 | Already exists (atomic state.json). Observer just needs `fs.watch` + `JSON.parse`. Single-file read. No pipeline changes required. |
| C — JSONL Streaming | 3 | Requires wiring the Logger into the pipeline (replacing `console.log` deps with Logger calls — significant but not complex). Once wired, the JSONL files maintain themselves. Observer uses `tail -f` or file reading. Medium complexity to fix; zero complexity to use. |
| D — HTTP Endpoint | 2 | Requires building a new HTTP server in the pipeline (server lifecycle, port management, thread safety, shutdown). The pipeline already has one HTTP server (for PA screenshots); adding a second is feasible but adds complexity and potential port conflicts. Medium-high implementation cost. |
| E — Agent SDK Messaging | 2 | Requires: (1) pipeline modifications to check inbox at pass boundaries, (2) defining a message protocol, (3) operator-side tooling to send messages. Medium complexity but introduces Agent SDK as a dependency for pipeline reliability. |
| F — Bash Tool | 4 | `run_in_background` works today with zero pipeline changes. Reading the output file mid-execution is simple. Adding signal file support requires minimal pipeline change (5-10 lines at pass boundary). |

### Robustness
*Does the mechanism survive failures — crashes, hangs, partial runs, resume scenarios?*

| Approach | Score | Reasoning |
|----------|-------|-----------|
| A — Stdout Pipe | 2 | If the pipeline process is killed, the pipe is closed. Historical output is lost unless captured to a file. Does not survive crash/resume scenarios. |
| B — File Watch (state.json) | 5 | state.json survives crashes (atomic write, always valid). Resume uses state.json as the authority. On resume, the last state is exactly what was written. No data loss. The file persists across crashes and is the pipeline's own crash-recovery mechanism. |
| C — JSONL Streaming | 4 | JSONL files are append-only with `appendFileSync` (synchronous, no buffering) — each entry is flushed immediately. Survive crashes. On resume, new entries append after the old ones. Complete history preserved. Minor risk: if the write is interrupted mid-line, the last line may be malformed (standard JSONL risk — use `ndjson` parsers that handle this). |
| D — HTTP Endpoint | 2 | HTTP server dies with the pipeline process. On crash, no status is available until resume. Historical data is not preserved (in-memory). Requires the pipeline to be running to be useful. |
| E — Agent SDK Messaging | 2 | Messages are push-based — on crash, in-flight messages are lost. The observer only knows what was explicitly messaged. No persistence of pipeline state through messages. |
| F — Bash Tool | 4 | Output file persists after the background process terminates (crash or normal completion). The file contains all stdout captured up to the moment of crash. On resume, a new background process would write to a new output file (different task ID). Signal files survive but the pipeline process reading them is gone. |

---

## Summary Comparison Table

| Approach | Reliability | Real-Time | Intervention | Complexity | Robustness | **Total** |
|----------|-------------|-----------|--------------|------------|------------|-----------|
| A — Stdout Pipe | 3 | 3 | 1 | 5 | 2 | **14** |
| B — File Watch (state.json) | 5 | 4 | 3 | 5 | 5 | **22** |
| C — JSONL Streaming | 1* | 5 | 1 | 3 | 4 | **14*** |
| D — HTTP Endpoint | 3 | 5 | 5 | 2 | 2 | **17** |
| E — Agent SDK Messaging | 2 | 4 | 5 | 2 | 2 | **15** |
| F — Bash Tool | 4 | 3 | 3 | 4 | 4 | **18** |

*C scored as dead code (current state). After wiring the Logger: 4/5/1/3/4 = **17***

---

## Ranked Recommendation

### Rank 1: File Watch on state.json (Approach B) — USE NOW

**Score: 22/25. No pipeline changes required.**

state.json is the pipeline's authoritative runtime state. It is written atomically after every pass and contains everything an observer needs: current phase, pass number, subset, cost, inFlightPass (which pass is running), PA cycle records, checkpoints, and error counts.

**Why it wins:** It already works, it's robust to crashes, it has complete information, and it requires zero changes to the pipeline. An observer can poll state.json every 5 seconds or use `fs.watch` for event-driven updates.

**Limitation:** Read-only. Intervention requires a separate mechanism.

---

### Rank 2: Bash Tool (Approach F) — USE NOW for operator-as-Claude-agent context

**Score: 18/25. Zero pipeline changes for observation; 5-10 lines for signal file intervention.**

When the pipeline is launched from a Claude Code agent context (as it typically is), `run_in_background` provides the most natural integration. The operator agent can:
1. Launch via `Bash(run_in_background=true): node dist/cli.js --content ...`
2. Read the output file at any time for status
3. Combine with Approach B (poll state.json separately) for structured data

**Signal file intervention pattern** (minimal change to pipeline):
```typescript
// Add at pass boundary in pipeline.ts:
const signalFile = path.join(config.outputDir, '.pipeline-signal');
if (fs.existsSync(signalFile)) {
  const signal = fs.readFileSync(signalFile, 'utf-8').trim();
  fs.unlinkSync(signalFile);
  if (signal === 'FORCE_SHIP') { /* act */ }
  if (signal === 'ABORT') { /* act */ }
}
```

Operator writes signal: `Bash: echo "FORCE_SHIP" > <outputDir>/.pipeline-signal`

---

### Rank 3: Wire JSONL + File Watch (Approaches C + B combined) — IMPLEMENT NEXT

**Score: 17/25 (post-fix), combined with B's 22/25 robustness = best long-term system.**

The Logger class is fully implemented (6 destinations, 4 JSONL files) but never wired into the pipeline. This is the single highest-leverage observability fix:

**Fix:** Replace `deps.log()` in pipeline.ts with Logger method calls. Estimated 50-80 lines of changes across pipeline.ts and the PA spawner files.

Once wired:
- `passes.jsonl`: complete per-pass record (role, cost, tokens, success/fail, timing)
- `decisions.jsonl`: PA routing, stall detection, cross-subset verification
- `errors.jsonl`: ALL errors including PA auditor failures (currently Phase B errors are invisible)
- `quality.jsonl`: verifier observations, conviction additions, discovery entries

This enables `tail -f passes.jsonl | jq .` for real-time streaming during a run, and full forensic analysis after.

**Concrete wiring plan:**
1. In `createDefaultDeps()` (pipeline.ts ~line 720): instantiate `new Logger(config.outputDir)` and assign to `deps.logger`
2. Replace the `log: (level, msg) => console.log(...)` lambda with Logger method dispatch
3. In `auditor-spawner.ts`, `weaver-spawner.ts`, `mini-pa-spawner.ts`: pass logger reference and call `logger.logError()` on failure
4. At pipeline completion: call `generateReport(state, config)` and write `run-report.json`
5. Expand `decisions.jsonl` events: add phase transitions, budget warnings, token trims, refine outcomes (5 new event types)

---

### Rank 4: Agent SDK Messaging (Approach E) — IMPLEMENT IF AGENT ORCHESTRATION IS THE PRIMARY USE CASE

**Score: 15/25, but 5/5 on intervention.**

If the primary operator is always a Claude Code agent (team lead / orchestrator), Agent SDK messaging provides the cleanest bidirectional channel. The pipeline agent can send structured updates to the team lead, and the team lead can send commands back.

**Implementation plan:**
1. Add `checkInbox()` function to pipeline.ts that reads pending messages at each pass boundary
2. Define 5 message types the pipeline respects: `FORCE_SHIP`, `ABORT`, `SKIP_SUBSET`, `CHANGE_BUDGET`, `STATUS_REQUEST`
3. Define 5 outbound event types: `PASS_COMPLETE`, `SUBSET_COMPLETE`, `PA_CYCLE_RESULT`, `BUDGET_WARNING`, `PIPELINE_COMPLETE`
4. Add `sendUpdate(event)` calls at 6 key points in the orchestration loop

**When to choose:** If the deep-build pipeline is always invoked by another agent (not run manually by a human), and bidirectional control is needed. When combined with Approach B (file watch for persistence), this is the best architecture for a multi-agent system.

**When NOT to choose:** If the pipeline is ever run manually or in non-agent contexts. Agent SDK messaging requires both the sender and receiver to be running — if either crashes, communication stops.

---

### Rank 5: HTTP Status Endpoint (Approach D) — DEFER

**Score: 17/25. High visibility and intervention, but significant build cost for current usage patterns.**

An HTTP endpoint would give the best combination of real-time visibility and intervention. But the pipeline already has one HTTP server (for PA screenshots) and adding a second introduces port management complexity. Given that file watching (Approach B) provides equivalent visibility with zero build cost, the HTTP endpoint only adds value for its intervention capability — which the signal file pattern (Approach F) also provides more simply.

**Defer until:** Multiple operators need to monitor the same run, or a web-based dashboard is wanted.

---

### Rank 6: Stdout Pipe only (Approach A) — REJECT as primary mechanism

**Score: 14/25. No intervention, no persistence, loses historical context.**

The stdout status line is useful as a secondary signal but should not be the primary monitoring mechanism. It provides no structured data, no history, and no way to intervene. Use it as a human-readable progress indicator only, complementing file watch.

---

## Concrete Implementation Plan

### Phase 1: Zero-change monitoring (TODAY)

**No pipeline modifications needed.**

```bash
# Launch pipeline (from Claude Code agent or terminal)
node tools/deep-build/dist/cli.js --content <path> &
PIPELINE_PID=$!

# Monitor state.json (poll every 10 seconds)
while kill -0 $PIPELINE_PID 2>/dev/null; do
  jq '{phase: .currentPhase, pass: .completedPasses, cost: .cost.totalCostUsd, inFlight: .inFlightPass}' \
    <output-dir>/state.json 2>/dev/null
  sleep 10
done

# Or in Claude Code agent context:
# Bash(run_in_background=true): node dist/cli.js --content ...
# Then: Bash: cat <output-file-path>   (mid-execution)
# And:  Bash: jq ... state.json         (structured status)
```

**What you can see:**
- Current phase, completed pass count, cost
- Which pass is in-flight and when it started
- PA cycle records and verdicts
- Error counts

**What you cannot do:** intervene.

---

### Phase 2: Add signal file intervention (30 min, 10 lines of code)

**In `orchestrator/pipeline.ts`, at the pass boundary loop (after `saveState`, before next pass):**

```typescript
// Signal file check — allows external intervention between passes
const signalPath = path.join(config.outputDir, '.pipeline-control');
if (fs.existsSync(signalPath)) {
  const signal = fs.readFileSync(signalPath, 'utf-8').trim();
  fs.unlinkSync(signalPath);  // consume signal
  deps.log('warn', `External signal received: ${signal}`);
  if (signal === 'ABORT') {
    state.currentPhase = 'paused';
    await saveState(state, config);
    deps.log('info', 'Pipeline paused by external signal. Resume with --resume.');
    return state;
  }
  if (signal === 'FORCE_SHIP') {
    // Set flag that Phase B weaver will read
    state.forceShip = true;
    await saveState(state, config);
  }
}
```

**Usage:**
```bash
# Force immediate SHIP verdict at next PA cycle evaluation
echo "FORCE_SHIP" > <output-dir>/.pipeline-control

# Graceful abort after current pass completes
echo "ABORT" > <output-dir>/.pipeline-control
```

---

### Phase 3: Wire the Logger (2-4 hours, ~80 lines changed)

This is the highest-leverage observability fix. The Logger, cost-tracker, metrics, and report modules are fully built but never called.

**Wiring checklist:**

```typescript
// 1. pipeline.ts — createDefaultDeps() (~line 720):
const logger = new Logger(config.outputDir);  // ADD THIS

// 2. Replace deps.log lambda:
log: (level, msg) => {
  if (level === 'info') logger.info(msg);
  else if (level === 'warn') logger.warn(msg);
  else if (level === 'error') logger.error(msg);
  else logger.info(msg);  // STATUS level
},  // REPLACE EXISTING LAMBDA

// 3. Pass logger to recordPassMetrics():
await recordPassMetrics(pass, passResult, logger);  // ADD logger arg
// (metrics.ts already calls logger.pass() — just needs the instance)

// 4. auditor-spawner.ts — on auditor failure (~line 222):
logger.logError({ type: 'pa-auditor-failure', ... });  // ADD

// 5. At pipeline completion:
const report = generateReport(state, config);
fs.writeFileSync(path.join(config.outputDir, 'run-report.json'), JSON.stringify(report, null, 2));

// 6. decisions.jsonl — add 5 new events:
// - phase-transition (corpus-integration -> pa-hardening)
// - budget-warning (cost > warningThreshold)
// - token-trim (files trimmed, before/after count)
// - refine-outcome (HTML extracted or not)
// - subset-complete (summary metrics at subset boundary)
```

**After wiring, monitoring becomes:**
```bash
# Real-time event stream:
tail -f <output-dir>/passes.jsonl | jq '{pass: .passNumber, role: .role, cost: .cost}'

# PA cycle results as they happen:
tail -f <output-dir>/decisions.jsonl | jq .

# Error stream:
tail -f <output-dir>/errors.jsonl | jq .

# Post-run summary:
cat <output-dir>/run-report.json | jq '{total: .meta.totalCostUsd, verdict: .meta.finalVerdict}'
```

---

## Decision Matrix: Which Approach for Which Situation

| Situation | Recommended Approach |
|-----------|---------------------|
| Human watching pipeline from terminal | A (stdout) + B (state.json polling) |
| Claude agent watching pipeline it launched | F (Bash background) + B (state.json polling) |
| Need to intervene / cancel gracefully | Phase 2 signal file (10 lines, works today) |
| Need full forensic record after run | Phase 3: wire Logger (JSONL + run-report.json) |
| Agent-to-agent bidirectional control | E (Agent SDK) — requires pipeline changes |
| Web dashboard or multi-operator monitoring | D (HTTP endpoint) — defer |

---

## Summary: What to Do

1. **Today (zero changes):** Use state.json polling + Bash background output file for observation.
2. **This week (30 min):** Add signal file intervention to pipeline.ts. 10 lines, enables graceful abort and force-ship.
3. **Next sprint (2-4 hrs):** Wire the Logger. Highest-leverage observability fix. Produces passes.jsonl, errors.jsonl, decisions.jsonl, run-report.json on every run.
4. **If multi-agent orchestration:** Add Agent SDK messaging (Approach E) at the same time as Logger wiring — they complement each other well.
5. **Defer:** HTTP endpoint until there's a specific need for it.

The file watch approach (B) should be the foundation of all monitoring because it requires zero pipeline changes, is crash-safe, and provides complete state. Everything else builds on top of it.

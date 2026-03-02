# Error Flow Audit: Deterministic Orchestrator

**Auditor:** Opus 4.6 (Error Flow Auditor)
**Date:** 2026-02-28
**Sources:** Plan file (sorted-finding-honey.md, 963 lines), Doc 08 (08-state-management.md, 1,975 lines), Doc 02 (02-orchestrator-architecture.md, 2,443 lines), Doc 06 (06-adversarial-review.md, 805 lines)
**Method:** For each of the 14 error categories, trace the exact module call chain, error type, handler, recovery action, state mutation, and user-visible output. Then trace 8 specific failure scenarios end-to-end. Finally catalog every UNHANDLED error path.

---

## Part 1: The 14 Error Categories — Full Trace

### EC-01: `claude-p-exit-nonzero`

| Property | Value |
|----------|-------|
| **Originates in** | `agents/claude-cli.ts` — `spawnClaude()` function. The `child_process.spawn()` process emits `close` event with non-zero exit code. |
| **Caught by** | `agents/claude-cli.ts` retry loop (doc 02 lines 1117-1149). Checks `exitCode !== 0`. |
| **Recovery** | RETRY with exponential backoff. Standard: 3 attempts, 5s/10s/20s delays. If stderr matches rate-limit patterns (`/rate.?limit|429|overloaded|capacity/i`), reclassified as `rate-limit` with extended config (5 attempts, 60s base, 300s max). |
| **State change** | On each retry: `ErrorRecord` appended to `state.errorHistory` with `recovered: true`, `recoveredAtAttempt: N`. After all retries exhausted: `inFlightPass` remains set (not cleared — this is the crash-recovery signal), state saved, `PassExecutionError` thrown. |
| **User sees** | Console: `WARN: claude -p exited with code {N}. Retrying...` per attempt. On exhaustion: `ERROR: Pass {N} failed after all retries.` + `State saved. Resume with the same configuration to retry from pass {N}.` Process exits. |
| **Log entries** | `errors.jsonl`: one entry per attempt. `decisions.jsonl`: `retry-pass` decision. `orchestrator.log`: WARN per retry, ERROR on exhaustion. |

### EC-02: `claude-p-timeout`

| Property | Value |
|----------|-------|
| **Originates in** | `agents/claude-cli.ts` — timeout timer on `spawn()`. Default: 10 minutes per pass (configurable via `config.passTimeoutMs`). |
| **Caught by** | `agents/claude-cli.ts` timeout handler (doc 08 section 4.3.2). |
| **Recovery** | SIGTERM child process, then SIGKILL after 5s if still alive. Save partial output for forensics. Retry with same timeout for attempts 1-2. On attempt 3: retry with 1.5x timeout. After all retries exhausted: `PassExecutionError` thrown. |
| **State change** | `ErrorRecord` appended with category `claude-p-timeout`. Partial output saved to `pass-{NNN}/raw-output-FAILED.txt`. On exhaustion: same as EC-01. |
| **User sees** | Console: timeout warning with duration. On exhaustion: same fatal message as EC-01. |
| **Log entries** | `errors.jsonl`: one per attempt with `category: 'claude-p-timeout'`. `orchestrator.log`: WARN per retry with elapsed time. |

### EC-03: `claude-p-spawn-failed`

| Property | Value |
|----------|-------|
| **Originates in** | `agents/claude-cli.ts` — `child_process.spawn()` emits `error` event (doc 02 lines 1297-1299). Common cause: `claude` binary not in PATH. |
| **Caught by** | `agents/claude-cli.ts` process `error` event handler. Rejects the promise with `Failed to spawn claude: {err.message}`. |
| **Recovery** | Falls into the general retry loop `catch` block (doc 02 line 1136-1140). Retries with backoff. |
| **State change** | Same as EC-01. `ErrorRecord` appended. |
| **User sees** | `ERROR: Invocation error: Failed to spawn claude: {message}` per attempt. On exhaustion: fatal pass failure. |
| **Log entries** | Same pattern as EC-01. |
| **GAP IDENTIFIED:** The spawn failure is treated as a transient error and retried. But `claude` not being in PATH is PERMANENT — retrying 3 times is useless. There is no classification of "permanent spawn failures" that should immediately abort rather than retry. |

### EC-04: `output-truncated`

| Property | Value |
|----------|-------|
| **Originates in** | `agents/response-handler.ts` — `detectTruncation()` function (doc 08 section 4.3.3). Detected when output contains `<html` or `<!DOCTYPE` but no `</html>`. |
| **Caught by** | `orchestrator/pass-executor.ts` validation step (doc 02 line 1183-1193). |
| **Recovery** | STRUCTURAL error — retry once with output repair. The truncated artifact is NOT saved to `state.currentArtifactPath`. The pre-pass artifact remains "current." After `maxAttempts`: record error, flag pass as failed, CONTINUE TO NEXT PASS. The verifier will catch the issue. |
| **State change** | `ErrorRecord` appended. `PassRecord` created with `success: false`. `state.lastCompletedCorpusPass` still incremented (pass is counted as "attempted"). Previous artifact hash unchanged. |
| **User sees** | `WARN: Output truncated at {length} chars (no </html> found)`. If all retries fail: `WARN: Pass {N} failed after retries — continuing to next pass.` |
| **Log entries** | `errors.jsonl`: truncation entry. `quality.jsonl`: truncation event. `passes.jsonl`: pass with `validationPassed: false`. |
| **GAP IDENTIFIED:** The plan says "CONTINUE TO THE NEXT PASS" after truncation retries fail. But what does `lastCompletedCorpusPass` become? The pass executor must decide: does a truncation-failed pass count as "completed" (so resume skips it) or "not completed" (so resume retries it)? Doc 08 section 4.3.3 says continue to next pass, implying it's counted as completed. But the state schema shows `lastCompletedCorpusPass` is described as "last COMPLETED corpus pass" — a failed pass isn't completed. This is an AMBIGUITY that will cause resume bugs. |

### EC-05: `output-empty`

| Property | Value |
|----------|-------|
| **Originates in** | `agents/response-handler.ts` — parsing step. The `result` field in JSON response is empty string or null. |
| **Caught by** | `agents/response-handler.ts` → `orchestrator/pass-executor.ts`. |
| **Recovery** | Classified as STRUCTURAL. Retry once. After retries: same as truncated — skip pass, continue. |
| **State change** | `ErrorRecord` appended with `category: 'output-empty'`. |
| **User sees** | `WARN: claude -p returned empty output.` |
| **Log entries** | `errors.jsonl` + `quality.jsonl`. |

### EC-06: `output-no-artifact`

| Property | Value |
|----------|-------|
| **Originates in** | `agents/response-handler.ts` — `extractHtmlArtifact()` (doc 02 lines 1340-1370). Builder output contains no HTML artifact (no `<!DOCTYPE html` pattern). |
| **Caught by** | `orchestrator/pass-executor.ts` (doc 02 lines 1187-1193). Logs error: "FAILED to extract HTML artifact from builder output." |
| **Recovery** | STRUCTURAL error. Retry once. If still fails: record error, continue to next pass. Previous artifact unchanged. |
| **State change** | `ErrorRecord` appended. Raw output saved to `pass-{NNN}/raw-output-FAILED.txt`. |
| **User sees** | `ERROR: FAILED to extract HTML artifact from builder output.` Then: `WARN: Pass {N} skipped — no artifact extracted.` |
| **Log entries** | `errors.jsonl`, `orchestrator.log` ERROR entry. |

### EC-07: `output-no-modification`

| Property | Value |
|----------|-------|
| **Originates in** | `validation/diff-checker.ts` — `diffArtifact(before, after)`. Builder output HTML is byte-identical to input artifact. |
| **Caught by** | `orchestrator/pass-executor.ts` — after extraction, compares hash of extracted HTML against `state.currentArtifactHash`. |
| **Recovery** | SOFT FAILURE. Log and continue. Do NOT retry (retrying produces same result). |
| **State change** | `PassRecord` created with `success: true` (it's a completed pass, just with no changes). No artifact hash change. `ErrorRecord` NOT created — this is logged to `quality.jsonl` instead as `type: 'no-modification'`. Decision logged to `decisions.jsonl` as `accept-no-modification`. |
| **User sees** | `WARN: Builder pass produced artifact identical to input.` |
| **Log entries** | `decisions.jsonl`: `accept-no-modification`. `quality.jsonl`: `no-modification` event. `passes.jsonl`: normal entry with artifact size unchanged. |

### EC-08: `validation-failed`

| Property | Value |
|----------|-------|
| **Originates in** | `validation/html-validator.ts` — `validateHtml(html)`. Checks: doctype present, `<head>+<body>`, no `<script>` injection, size > 0, valid UTF-8. |
| **Caught by** | `orchestrator/pass-executor.ts` (doc 02 line 1158-1161). |
| **Recovery** | SOFT FAILURE. Log warning, continue with the artifact (it may be "bad" but recoverable by next builder pass). Validation WARNINGS do not halt the pipeline (doc 08 Section 10, Invariant 9). |
| **State change** | `PassRecord.validationPassed = false`. `PassRecord.validationDetails` captures which checks failed. The artifact IS still saved (unlike truncation). |
| **User sees** | `WARN: Validation FAILED: {failed-checks}` |
| **Log entries** | `quality.jsonl`: validation failure. `passes.jsonl`: `validationPassed: false`. |
| **GAP IDENTIFIED:** There is no distinction between CRITICAL validation failures (no doctype, no `<body>`) and WARNING validation failures (short artifact). A `<script>` injection should abort, not warn. The plan says `html-validator.ts` checks for `<script>` injection, but the recovery strategy treats ALL validation failures as soft failures. A malicious/corrupted artifact with injected scripts would be PRESERVED and passed to the next builder. |

### EC-09: `screenshot-failed`

| Property | Value |
|----------|-------|
| **Originates in** | `pa/screenshot-capture.ts` — `captureScreenshots()`. Playwright browser launch, HTTP server spawn, or screenshot capture fails. |
| **Caught by** | `pa/screenshot-capture.ts` — `captureScreenshotsWithRecovery()` wrapper (doc 08 section 4.3.5). |
| **Recovery** | 3 attempts with linear backoff (5s, 10s, 15s). On "browser not found": attempt `npx playwright install chromium` (120s timeout). On port conflict: try different port. After all 3 attempts: DEGRADE GRACEFULLY — continue PA without screenshots. Auditors receive HTML source only. |
| **State change** | `ErrorRecord` appended per attempt. `PACycleRecord.screenshotCount` = 0 if degraded. |
| **User sees** | `WARN: Screenshot capture failed: {message}`. After degradation: `WARN: PA quality may be degraded — running source-only evaluation.` |
| **Log entries** | `errors.jsonl`: per-attempt entries. `decisions.jsonl`: `degrade-screenshots` decision. |

### EC-10: `rate-limit`

| Property | Value |
|----------|-------|
| **Originates in** | `agents/claude-cli.ts` — detected via stderr parsing in `classifyExitCode()` (doc 08 section 4.3.1). Patterns: `/rate.?limit|429|overloaded|capacity/i`. |
| **Caught by** | Same as EC-01 but with extended retry config. |
| **Recovery** | 5 attempts (not 3), 60s base delay (not 5s), 300s max delay, 2.0 multiplier. Jitter added (0-20%). Sequence: 60s → 120s → 240s → 300s → 300s. |
| **State change** | Same as EC-01. `ErrorRecord.category = 'rate-limit'`. |
| **User sees** | Same as EC-01 but with rate-limit-specific messaging and longer waits. |
| **Log entries** | Same as EC-01. |
| **NOTE:** Doc 08 also mentions "model-overload" as a distinct term, and the plan's ErrorCategory type (line 424) includes `'model-overload'` as a separate category. But `classifyExitCode()` in doc 08 maps overload to rate-limit handling. This is a CATEGORY MISMATCH between the plan's type definition and doc 08's handler. |

### EC-11: `budget-exceeded`

| Property | Value |
|----------|-------|
| **Originates in** | `logging/cost-tracker.ts` — `checkBudget()` (doc 08 section 4.3.6). Called after every pass in `pass-executor.ts`. |
| **Caught by** | `orchestrator/pipeline.ts` main loop — checks return value of cost tracker. |
| **Recovery** | WARNING threshold ($150): log warning, continue. HARD CAP ($250): PAUSE pipeline. Set `state.currentPhase = 'paused'`, `state.phaseReason = 'budget-threshold'`. Save state. Exit gracefully (exit code 0). |
| **State change** | `cost.warningThresholdHit = true` or `cost.hardCapHit = true`. Phase changes to `'paused'`. All progress preserved. |
| **User sees** | Warning: prominent cost warning in terminal display. Hard cap: `Pipeline paused: budget exceeded ($250.00). All progress saved. Increase budget in config and resume.` |
| **Log entries** | `decisions.jsonl`: `pause-pipeline` with reason `budget-threshold`. `orchestrator.log`: prominent message. `cost.jsonl`: entry with `cumulativeCostUsd` at cap. |

### EC-12: `file-io`

| Property | Value |
|----------|-------|
| **Originates in** | Multiple modules — any `fs.readFile`, `fs.writeFile`, `fs.rename`, `fs.copyFile` call. |
| **Caught by** | Individual module try-catch blocks. |
| **Recovery** | Depends on context. State write failure: FATAL (doc 08 section 3.3 — if .tmp write fails or verification fails, throws). Corpus file read failure: FATAL (`readFileOrThrow` in doc 02 line 2130-2136). Log file write: would silently fail (append-only logs have no recovery mechanism specified). |
| **State change** | Depends on what failed. State write failure leaves state unchanged (old state still valid). |
| **User sees** | `ERROR: Failed to read file: {path} — {message}` for missing files. For state corruption: process crash. |
| **GAP IDENTIFIED:** Log file write failures have NO handler. If `orchestrator.log` or `passes.jsonl` can't be appended to (disk full, permissions), the pipeline silently loses forensic data. The plan specifies 6 log files but no error handling for log writes themselves. |

### EC-13: `state-corruption`

| Property | Value |
|----------|-------|
| **Originates in** | `state/resume.ts` — `resolveResumeState()` (doc 08 section 3.1). Detected during resume: state.json unreadable, invalid JSON, wrong schema version, or artifact hash mismatch with no valid backup. |
| **Caught by** | `state/resume.ts` — each step in the 6-step resume algorithm. |
| **Recovery** | Schema mismatch: attempt migration, archive old state if migration fails, fresh start. Config hash mismatch: archive old state, fresh start. Artifact corruption with no backup: FATAL — set `currentPhase = 'failed'`, `phaseReason = 'Artifact corrupted... Manual recovery needed.'` Save state. Return `failed-needs-decision`. |
| **State change** | State archived to `_orchestrator/archives/run-{uuid}-{timestamp}/`. New state initialized. Or state frozen in `failed` phase if unrecoverable. |
| **User sees** | On archive: `Config changed. Archived old state. Starting fresh.` On fatal corruption: `Artifact corrupted at pass {N} and backup restoration failed. Manual recovery needed.` |
| **Log entries** | Resume warnings in `orchestrator.log`. |

### EC-14: `config-mismatch`

| Property | Value |
|----------|-------|
| **Originates in** | `state/resume.ts` — Step 2 of resume algorithm. `hashConfig(config)` produces different hash than `state.configHash`. |
| **Caught by** | `state/resume.ts`. |
| **Recovery** | Archive existing state + logs + conviction + discovery. Initialize fresh state with new config hash. Start from pass 1. |
| **State change** | Old state archived. New state created. All previous progress lost (but archived for forensics). |
| **User sees** | `Config changed (old: {hash}, new: {hash}). Archived old state. Starting fresh.` |
| **Log entries** | `orchestrator.log`: archive message. |

---

## Part 2: The 8 Specific Scenario Traces

### Scenario 1: Pass 37 (mid-subset S5) — `is_error: true` with "model-overload"

**Module call chain:**
```
pipeline.ts:runCorpusIntegration()
  → pass-executor.ts:executeSinglePass(state, pass-37)
    → assembler.ts:constructPrompt() → prompt built
    → state-manager.ts:saveState() → inFlightPass set
    → claude-cli.ts:spawnClaude(prompt, opts)
      → child_process.spawn('claude', [...args])
      → claude -p returns JSON with is_error: true
    → response-handler.ts:parseResponse(json)
```

**Error detection:**
`response-handler.ts` checks `json.is_error === true`. The JSON `result` field contains the error message "model-overload".

**CRITICAL GAP:** The plan mentions `is_error` checking (doc 02 line 250, plan line 250: "ALWAYS check this — can be true even with subtype 'success'"). But the actual handler code in doc 02 (lines 1117-1149) checks `exitCode !== 0`, NOT `is_error`. If `claude -p` returns exit code 0 but `is_error: true`, the response-handler must detect this. There is no explicit code path showing `is_error` check in the retry loop — it only checks exit codes.

**Assuming `is_error` IS detected** (by `response-handler.ts`):
1. `parseResponse()` returns an error result
2. `pass-executor.ts` treats this as a transient failure
3. `classifyExitCode()` is NOT called (exit code was 0). There is NO equivalent `classifyErrorMessage()` for `is_error: true` cases
4. Falls into general retry with standard backoff (3 attempts, 5s/10s/20s)

**But "model-overload" is a rate-limit-class error.** It should use the extended retry config (5 attempts, 60s base). Because the rate-limit detection is in `classifyExitCode()` which only fires on non-zero exit codes, model-overload via `is_error: true` with exit code 0 gets the WRONG retry strategy.

**State mutations:**
- `ErrorRecord` appended: `{ context: 'pass-37', category: 'model-overload' (or 'unknown'?), message: 'model-overload', recovered: <depends> }`
- If retries succeed: `inFlightPass` cleared, `PassRecord` created, `lastCompletedCorpusPass = 37`
- If retries fail: `inFlightPass` remains set, state saved, `PassExecutionError` thrown

**User sees:**
- Per retry: `WARN: claude -p returned is_error. Retrying...`
- On exhaustion: `FATAL: Pass 37 failed after all retries.`

**GAPS:**
1. **`is_error: true` with exit code 0 bypasses `classifyExitCode()`.** Rate-limit-class errors get wrong retry config.
2. **"model-overload" maps to which ErrorCategory?** The plan's type (line 424) has `'model-overload'` but doc 08's type (line 347) does NOT — it has `'claude-p-exit-nonzero'` and `'rate-limit'` as separate categories. Category mismatch between plan and doc 08.
3. **No code path for `is_error` detection in the retry loop.** The loop checks `exitCode` but not `response.is_error`.

---

### Scenario 2: Pass 8 (end of S1) — artifact HTML extraction fails

**Module call chain:**
```
pipeline.ts:runCorpusIntegration()
  → pass-executor.ts:executeSinglePass(state, pass-8)
    → claude-cli.ts:spawnClaude() → returns JSON with result text
    → response-handler.ts:parseResponse(json) → json.is_error === false
    → response-handler.ts:extractHtmlArtifact(json.result) → returns null
```

**Error detection:**
`extractHtmlArtifact()` (doc 02 lines 1340-1370) searches for `<!DOCTYPE html` or `<html` in the `result` string. If not found, returns `null`.

**Recovery flow:**
1. `pass-executor.ts` (doc 02 line 1187-1193) logs: `ERROR: FAILED to extract HTML artifact from builder output`
2. Classified as STRUCTURAL error — retry once with same prompt
3. If retry also fails: record error, continue to next pass (but there IS no next pass — pass 8 is the LAST pass of subset S1)
4. After pass 8: `pipeline.ts` creates checkpoint `cp-S1`

**State mutations:**
- `ErrorRecord` appended: `{ context: 'pass-8', category: 'output-no-artifact', recovered: false }`
- `PassRecord` created with `success: false`, `artifactHash: null`, `artifactPath: null`
- `lastCompletedCorpusPass = 8` (pass attempted, even if failed)
- Artifact unchanged (previous pass 7's artifact remains current)
- Checkpoint `cp-S1` created with the pass-7 artifact

**User sees:**
- `ERROR: FAILED to extract HTML artifact from builder output`
- `WARN: Pass 8 skipped — continuing to subset S2`
- Checkpoint notification: `cp-S1 created`

**GAPS:**
1. **This is pass 8 — the last builder pass before a verifier.** Wait, actually pass 8 is Rotation C builder. But what if this was the verifier pass (passes 2, 5, 8 have verifiers)? The plan says pass 8 has a verifier. The verifier receives the current artifact. If pass 8 builder fails, the verifier runs on pass 7's artifact. This is probably fine — but the plan doesn't explicitly address "what if the LAST pass of a subset fails."
2. **Checkpoint quality.** The `cp-S1` checkpoint captures an artifact that's missing pass 8's integration. The quality snapshot will show `validationFailureCount: 1`. But there's no mechanism to detect that a checkpoint has degraded quality and warn the user.

---

### Scenario 3: PA auditor 3 of 8 — timeout after 10 minutes

**Module call chain:**
```
pipeline.ts → Phase B loop
  → pa/screenshot-capture.ts:captureScreenshots() → screenshots saved
  → pa/auditor-spawner.ts:spawnAuditors()
    → Promise.all([
        spawnClaude(auditor-A), spawnClaude(auditor-B),
        spawnClaude(auditor-C),  ← THIS ONE TIMES OUT
        spawnClaude(auditor-D), ..., spawnClaude(auditor-H)
      ])
```

**Error detection:**
`claude-cli.ts` timeout fires for auditor-C after 10 minutes. Child process receives SIGTERM → SIGKILL.

**Recovery flow:**
1. `spawnClaude()` for auditor-C enters retry loop. 3 attempts with backoff.
2. Meanwhile: all other 7 auditors complete (they are parallel `Promise.all`)
3. `Promise.all` REJECTS on first failure (auditor-C's final timeout)

**CRITICAL GAP: `Promise.all` vs `Promise.allSettled`**

The plan specifies "spawn 8 PA auditors (A-H) in PARALLEL via claude -p" and "Wait for all 8 to complete." `Promise.all` rejects on FIRST failure. If auditor-C fails after 3 retries (30+ minutes of retrying), ALL auditor results are lost — even the 7 that succeeded.

The plan does NOT specify `Promise.allSettled`. Doc 08 section 4.3.5 (Playwright section) handles partial failure, but doc 05 and the plan's auditor-spawner don't address the `Promise.all` vs `Promise.allSettled` choice.

**If `Promise.allSettled` is used (the CORRECT choice):**
1. Auditor-C times out after 3 attempts
2. Other 7 complete successfully
3. `auditor-spawner.ts` has 7 of 8 reports
4. Integrative auditor (I) is spawned with the 7 available reports
5. Weaver receives 7 of 9 reports (7 + integrative)

**State mutations:**
- `ErrorRecord` appended: `{ context: 'pa-cycle-1-auditor-C', category: 'claude-p-timeout', recovered: false }`
- `PACycleRecord.auditors` array has 7 entries (C is missing)
- Weaver verdict based on partial data

**User sees:**
- `WARN: PA auditor C timed out after 3 attempts. Continuing with 7 of 8 auditors.`
- PA score may be less reliable

**GAPS:**
1. **`Promise.all` vs `Promise.allSettled` not specified.** This is a BLOCKING gap. Using `Promise.all` would discard all successful auditor results on a single failure.
2. **Partial PA scoring.** The weaver receives 7/9 reports. Does the PA-05 score formula account for missing auditors? The weaver synthesis (doc 07 template) expects all 9 reports. Missing data may skew the score.
3. **No timeout specified for PA auditors specifically.** The plan gives `--max-turns 15` for auditors but no wall-clock timeout. The 10-minute default is for builder passes. PA auditors may need different timeouts (they use tools like Read, Glob, Grep which add latency).

---

### Scenario 4: State write — crash between .tmp write and rename

**Module call chain:**
```
state-manager.ts:saveState(state)
  → fs.writeFile(tempPath, json)     ← succeeds
  → fs.readFile(tempPath) + JSON.parse()  ← verification succeeds
  → fs.rename(tempPath, statePath)   ← CRASH HERE (process killed)
```

**Recovery flow:**
The .tmp file exists on disk. The old `state.json` is still intact (rename never happened).

On next run:
1. `resume.ts:resolveResumeState()` calls `loadState()`
2. `loadState()` reads `state.json` — finds the OLD state (pre-crash)
3. Resume proceeds from the OLD state's `lastCompletedCorpusPass`

**The orphaned .tmp file:**
- File: `state.json.tmp.{timestamp}`
- Nobody cleans it up. `loadState()` only reads `state.json`.
- Over many crash/resume cycles, orphaned .tmp files accumulate.

**State mutations:**
- None — the crash happened before state was saved. The pass that just completed is LOST. It will be re-executed on resume.
- `inFlightPass` in the old state.json may or may not be set depending on timing:
  - If `inFlightPass` was set before the pass started (it should be): resume detects in-flight pass, checks artifact integrity, retries.
  - If `inFlightPass` was already cleared (impossible in normal flow — it's cleared AFTER state save): clean resume from last completed pass.

**User sees:**
Nothing at crash time. On resume: `Detected in-flight pass {N} — process likely crashed during execution.`

**GAPS:**
1. **Orphaned .tmp files never cleaned up.** Over a long run with multiple crashes, `.tmp.{timestamp}` files accumulate. No `cleanupOrphanedTmpFiles()` in resume algorithm.
2. **The crash window between .tmp verification and rename is the EXACT window where data loss occurs.** The pass completed, the state reflects completion, but the rename failed so the state on disk is stale. The pass will be re-executed. This is SAFE (idempotent) but wasteful.
3. **What if the CRASH happens during the .tmp WRITE itself?** The `saveState()` function writes, then reads back and verifies JSON parse. If process dies during write, the .tmp file is corrupt but `state.json` is still valid. This is handled correctly.

---

### Scenario 5: Budget — cumulative cost hits $250 during Phase B weaver call

**Module call chain:**
```
pipeline.ts → Phase B loop → PA cycle 2
  → pa/weaver-spawner.ts:spawnWeaver(reports, ...) → returns WeaverVerdict
  → cost-tracker.ts:updateCost(state, weaverCost)
  → cost-tracker.ts:checkBudget(state) → returns 'exceeded'
```

**Recovery flow:**
1. The weaver call COMPLETES (budget check is AFTER the call, not during)
2. `updateCost()` adds weaver cost to `state.cost.totalEstimatedCostUsd`
3. `checkBudget()` detects `totalEstimatedCostUsd >= budgetHardCapUsd`
4. `pipeline.ts` sets `state.currentPhase = 'paused'`, `state.phaseReason = 'budget-threshold'`
5. State saved atomically
6. Process exits with code 0

**State mutations:**
- `cost.hardCapHit = true`
- `currentPhase = 'paused'`
- `phaseReason = 'budget-threshold'`
- The weaver's verdict IS saved (the call completed before the budget check)
- `PACycleRecord` is partially populated: has auditor reports + weaver, but NO refine pass (budget paused before refine could start)

**User sees:**
- Terminal: `Pipeline paused: budget exceeded ($250.00). All progress saved.`
- `Weaver PA-05: 3.0/4. Verdict: REFINE. But budget exceeded — paused before refinement.`
- `Increase budget in config and resume.`

**On resume (with increased budget):**
1. `resolveResumeState()` returns `action: 'paused'`
2. User must change `state.currentPhase` back to `'pa-hardening'` or pipeline must handle resume from paused state
3. Pipeline resumes from the PA cycle that was interrupted: has weaver verdict, needs to route (SHIP/REFINE) and execute

**GAPS:**
1. **Partial PA cycle on resume.** The PA cycle has auditor reports and weaver verdict but no refine pass. On resume, does the pipeline re-run the entire PA cycle, or pick up at the routing step? The resume algorithm (doc 08 section 3.1) handles `'pa-hardening'` resume as "resume from `completedPACycles + 1`". But this PA cycle is NOT completed — it's PARTIAL. If `completedPACycles` wasn't incremented (weaver completed but refine didn't), resume will re-run the entire cycle, re-calling all 9 auditors and weaver. That's $30+ wasted.
2. **Budget check timing.** Budget is checked AFTER each call. A single weaver call could push cost from $240 to $260, overshooting by $10. There's no pre-call budget estimation. The hard cap is soft — it can be exceeded by the cost of one call.
3. **Resume from paused state.** Doc 08 section 3.1 returns `action: 'paused'` and says "Log pause reason. Wait for user input to continue." But HOW does the user continue? The CLI spec (doc 08 section 9) shows `node orchestrator.js resume --output-dir ...`. But this calls `resolveResumeState()` which will again return `'paused'`. The user must manually edit `state.json` to change `currentPhase`. This is fragile and not documented.

---

### Scenario 6: Resume — state.json has inFlightPass for pass 42, artifact hash doesn't match

**Module call chain:**
```
cli.ts → pipeline.ts:runPipeline(config)
  → resume.ts:resolveResumeState(config)
    → state-manager.ts:loadState() → reads state.json
    → Step 2: configHash matches ✓
    → Step 3: schemaVersion === 3 ✓
    → Step 4: inFlightPass !== null → pass 42, role: 'builder'
    → Step 5a: verifyArtifactIntegrity()
      → computeFileHash(artifactPath) → 'abc123'
      → compare with state.currentArtifactHash → 'def456'
      → MISMATCH
```

**Recovery flow:**
1. `resolveResumeState()` detects artifact mismatch (doc 08 lines 642-651)
2. Calls `restoreFromBackup(outputDir, state)`
3. `restoreFromBackup()` (doc 08 section 3.5):
   a. Gets last backup from `state.artifactBackups[-1]`
   b. Computes hash of backup file
   c. Compares with `state.currentArtifactHash` (the pre-pass-42 hash)
   d. If MATCH: copies backup over artifact. Returns true.
   e. If MISMATCH: iterates older backups. If none match: returns false.

**If backup matches (happy path):**
- Artifact restored to pre-pass-42 state
- `inFlightPass` cleared to null
- State saved
- Resume from pass 42 (re-execute it)

**If NO backup matches (catastrophic):**
- `restoreFromBackup()` returns false
- `existing.currentPhase = 'failed'`
- `existing.phaseReason = 'Artifact corrupted at pass 42 and backup restoration failed. Manual recovery needed.'`
- State saved in `failed` phase
- Returns `action: 'failed-needs-decision'`

**State mutations:**
- Happy path: `inFlightPass = null`, artifact restored, hash verified
- Catastrophic: `currentPhase = 'failed'`, `phaseReason` set

**User sees:**
- Happy path: `Detected in-flight pass 42 (builder). Artifact partially modified. Restoring from backup. Safe to retry.`
- Catastrophic: `FATAL: Artifact corrupted at pass 42 and backup restoration failed. Manual recovery needed.`

**GAPS:**
1. **Backup hash should match pre-pass-42 hash, NOT `currentArtifactHash`.** Wait — `currentArtifactHash` IS the pre-pass hash, because pass 42 never completed (it's in-flight). The hash was last updated when pass 41 completed. So the backup (taken before pass 42 started) should match. This is CORRECT.
2. **But what if pass 42 was a VERIFIER?** Verifiers don't modify artifacts, so `currentArtifactHash` matches the file. But `inFlightPass.agentRole === 'verifier'` triggers the "safe to retry" path (doc 08 line 629-631), skipping integrity checks entirely. This is correct.
3. **What about the backup itself being corrupted?** If the backup file exists but is corrupted (partial disk write), `computeFileHash()` will produce a hash that doesn't match `currentArtifactHash`. The function then tries older backups. If ALL backups are corrupted (e.g., filesystem corruption event), the pipeline enters `failed` state. This is the correct terminal state.

---

### Scenario 7: CLAUDECODE env var not unset, nested claude -p hangs

**Module call chain:**
```
pipeline.ts:runPipeline()
  → pass-executor.ts:executeSinglePass()
    → claude-cli.ts:spawnClaude(prompt, opts)
      → child_process.spawn('claude', args, { env: { ...process.env, CLAUDECODE: undefined } })
      → IF CLAUDECODE is NOT unset: claude -p detects it's nested inside Claude Code
      → claude -p enters interactive mode OR hangs waiting for parent context
```

**The BLOCKING gap (GAP-A06/E01):**
Every `child_process.spawn()` must unset `CLAUDECODE`. The plan resolves this: `env: { ...process.env, CLAUDECODE: undefined }` (plan line 61, doc 02 line 234).

**But what if the fix is NOT implemented?**
1. `claude -p` detects `CLAUDECODE` env var
2. Enters a mode where it tries to communicate with the parent Claude Code session
3. Hangs indefinitely (no stdin/stdout exchange with parent)
4. `claude-cli.ts` timeout fires after 10 minutes
5. SIGTERM → SIGKILL the process
6. Enters retry loop — same hang on retry
7. After 3 retries (30+ minutes wasted): `PassExecutionError` thrown

**State mutations:**
- 3 `ErrorRecord` entries: `{ category: 'claude-p-timeout', diagnostics: 'Process hung — possible CLAUDECODE env leak' }`
- `inFlightPass` set but never cleared (pass never completed)

**User sees:**
- 3 timeout warnings over 30+ minutes
- `FATAL: Pass {N} failed after all retries.`

**GAPS:**
1. **No specific detection for the CLAUDECODE hang.** The plan identifies it as BLOCKING and provides the fix, but there's no DIAGNOSTIC that detects "this is probably the CLAUDECODE issue." The error shows as generic timeout. A defensive check could verify `CLAUDECODE` is unset BEFORE spawning and log an explicit error if it's still present.
2. **No pre-flight check.** The plan's dry-run mode (plan line 763) validates corpus paths and token estimates but does NOT verify `CLAUDECODE` bypass. A pre-flight check that spawns a minimal `claude -p "say hi"` with the intended env would catch this before the 12-hour run begins.

---

### Scenario 8: Playwright — screenshot capture fails (browser not installed)

**Module call chain:**
```
pipeline.ts → Phase B → PA cycle 1
  → pa/screenshot-capture.ts:captureScreenshotsWithRecovery()
    → captureScreenshots()
      → Playwright: chromium.launch() → THROWS "browser not found"
    → CATCH: error.message includes 'browser' and 'not found'
    → execSync('npx playwright install chromium', { timeout: 120_000 })
    → Retry captureScreenshots()
```

**Recovery flow (doc 08 section 4.3.5):**
1. Attempt 1: `chromium.launch()` fails with "browser not found"
2. Handler detects keyword match → runs `npx playwright install chromium` (120s timeout)
3. Attempt 2: retry `captureScreenshots()` with freshly installed browser
4. If install succeeded: screenshots captured. `{ paths: [...], degraded: false }`
5. If install ALSO failed: attempt 3 after 15s delay
6. If all 3 fail: `{ paths: [], degraded: true }` — PA runs without screenshots

**State mutations:**
- `ErrorRecord` per attempt: `{ context: 'screenshot-capture', category: 'screenshot-failed', recovered: true|false }`
- `PACycleRecord.screenshotCount = 0` if degraded
- PA auditor prompts modified: receive ONLY HTML, no screenshot paths

**User sees:**
- Attempt 1: `WARN: Screenshot capture failed: browser not found. Installing chromium...`
- Attempt 2 (if install succeeded): `INFO: Screenshots captured at 3 viewports.`
- Attempt 2 (if install failed): `WARN: Screenshot capture failed again. Retrying...`
- After degradation: `WARN: PA quality may be degraded — running source-only evaluation.`

**GAPS:**
1. **`npx playwright install chromium` in doc 08 uses `require('child_process').execSync`.** But the orchestrator is TypeScript with `"type": "module"`. `require()` won't work in ESM. Must use `import { execSync } from 'child_process'` or dynamic `import()`. This is a build-time error.
2. **The 120s timeout for browser installation.** On slow networks, Playwright browser download can exceed 120s. The timeout is tight. No fallback to `playwright install --with-deps` for Linux systems.
3. **HTTP server lifecycle.** `screenshot-capture.ts` must start an HTTP server, capture screenshots, then kill it. If the server fails to start (port conflict), that's a different error from browser-not-found. The plan mentions "try different port" but doc 08's code only handles browser-not-found with the keyword check. Port conflict errors have different messages and would fall through to the generic retry path.

---

## Part 3: UNHANDLED Error Paths

These are error scenarios with NO defined handler in the plan or source docs.

### UH-01: JSON parsing failure of claude -p output

**Scenario:** `claude -p --output-format json` returns invalid JSON (truncated, binary garbage, or non-JSON text).

**Current handling:** `response-handler.ts:parseResponse()` calls `JSON.parse()`. If it throws, there's no documented catch block. Doc 02 line 1310 mentions "If parsing fails, returns estimates based on character counts" but this refers to TOKEN parsing, not JSON parsing.

**Impact:** Unhandled exception. `pass-executor.ts` would catch it as a generic error in the retry loop, but the error category would be `'unknown'` and no specific recovery exists.

**Fix needed:** `parseResponse()` must wrap `JSON.parse()` in try-catch, classify as `'invalid-response'`, and include the raw output in `diagnostics` for forensics.

### UH-02: Disk full during any write operation

**Scenario:** Filesystem is full. `fs.writeFile()` throws `ENOSPC`.

**Current handling:** None specific. Generic `catch` blocks will catch it, but retrying a disk-full error is pointless. The plan mentions "disk full mid-run" in the adversarial-breaker prompt (plan line 801) but provides no handler.

**Impact:** Retries waste time. State may not be saveable. Pipeline enters an unrecoverable state where it can't save progress.

**Fix needed:** Pre-flight disk space check. `ENOSPC` errors should immediately pause the pipeline with a specific message: "Disk full. Free space and resume."

### UH-03: Concurrent pipeline instances on same output directory

**Scenario:** User accidentally runs two `node dist/cli.js` instances pointing at the same output directory.

**Current handling:** None. Both instances read the same `state.json`, both compute the same resume point, both attempt the same pass. Race condition on state writes.

**Impact:** State corruption. Artifact overwrites. Cost duplication.

**Fix needed:** PID lock file in `_orchestrator/pipeline.lock`. Check on startup, write PID, delete on exit. Stale lock detection (PID no longer running).

### UH-04: claude -p returns structured_output instead of result

**Scenario:** If `--json-schema` is ever used (or the behavior changes), structured data appears in `structured_output` field, not `result`.

**Current handling:** Plan line 256 notes the GOTCHA but no defensive code. `response-handler.ts` extracts from `result`. If `result` is empty but `structured_output` has data, the artifact extraction fails.

**Impact:** Classified as `output-no-artifact`, retried (won't help), pass skipped.

**Fix needed:** `parseResponse()` should check `structured_output` as fallback if `result` is empty/missing.

### UH-05: Artifact grows beyond token limit

**Scenario:** After 40+ builder passes, the artifact is 3,000+ lines. Combined with corpus files, the prompt exceeds 120K tokens, hitting the ~120K client-side limit (GAP-B01).

**Current handling:** `assembler.ts` has a token estimator with pre-flight check. If >100K tokens: trim conviction layer first, then trim valley-position corpus files. But what if even AFTER trimming, it's still >100K? No handler for "cannot reduce below limit."

**Impact:** `claude -p` rejects the prompt. Exit code non-zero. Retries with same prompt fail identically. 3 failed retries → pipeline stops.

**Fix needed:** If prompt exceeds limit AFTER all trimming, SPLIT the pass: send only the artifact + most relevant corpus files. Or paginate the artifact (send only the sections relevant to the current subset). Add an explicit error category `'prompt-too-large'` with a specific recovery strategy.

### UH-06: Log file corruption during append

**Scenario:** `passes.jsonl` has a partial JSON line (crash during append). On restart, the log file is not valid JSONL.

**Current handling:** Doc 08 section 2.1 notes JSONL is "resilient to partial writes (a corrupt last line = only the last entry is lost)." But no code validates or repairs JSONL files on restart. Log consumers (report generator, quality analyzer) would choke on the corrupt line.

**Impact:** Post-run analysis tools fail on corrupt JSONL. No data loss (state.json is the source of truth) but forensic capability is degraded.

**Fix needed:** JSONL reader should skip lines that fail `JSON.parse()`. Add a note in the resume algorithm to validate log files.

### UH-07: HTTP server for screenshots fails to bind

**Scenario:** Port 8080 (or whatever the default is) is already in use. The HTTP server for Playwright cannot start.

**Current handling:** Doc 08 section 4.3.5 mentions "If port conflict: try a different port (increment from base port)." But the `captureScreenshotsWithRecovery()` code does NOT show port increment logic. The actual recovery code only handles `browser not found` via keyword matching.

**Impact:** All 3 screenshot attempts fail with "address in use." Pipeline degrades to source-only PA.

**Fix needed:** Implement the port increment in `captureScreenshots()`. Use port 0 (OS-assigned random port) as the most robust solution.

### UH-08: Session token expiry during 12-20hr run

**Scenario:** The Claude Code subscription session token expires mid-run.

**Current handling:** Listed as MEDIUM gap (plan line 97: "session token expiry during long runs"). No resolution specified.

**Impact:** All subsequent `claude -p` calls fail with authentication errors. Retries don't help (token is expired, not rate-limited). Pipeline burns through retries for every remaining pass, then stops.

**Fix needed:** Detect authentication failure in stderr (`/authentication|unauthorized|401|token.*expir/i`). On detection: pause pipeline with specific message "Session expired. Re-authenticate and resume." Do NOT retry — authentication failures are permanent until user action.

### UH-09: Conviction marker extraction fails silently

**Scenario:** Builder output has no `<!-- CONVICTION_ADDITION_START -->` / `<!-- CONVICTION_ADDITION_END -->` markers.

**Current handling:** Documented as SOFT FAILURE. Log warning, continue. But: is the warning in `orchestrator.log` only, or also in `quality.jsonl`? The plan shows logging to both (EC-07 pattern), but conviction extraction failure is NOT an error category in the 14-category enum.

**Impact:** Conviction layer stops growing. Later builders get stale conviction context. Quality degradation is silent and cumulative.

**Fix needed:** This IS handled (soft failure), but should be tracked as a quality metric. If conviction additions drop below 50% rate (fewer than half of builder passes produce entries), emit a WARNING about creative tissue starvation.

### UH-10: Checkpoint creation fails

**Scenario:** `createCheckpoint()` (doc 08 section 5.3) fails during `fs.mkdir()` or `fs.copyFile()`.

**Current handling:** None visible. `createCheckpoint()` uses `await` for all operations but has no try-catch. An `fs` error would propagate up to `pipeline.ts` as an unhandled exception.

**Impact:** Pipeline crashes after completing a full subset's 8 passes. The subset's work is saved in state.json (passes recorded, artifact updated), but the checkpoint snapshot is missing. Resume would work, but reverting to this subset boundary is impossible.

**Fix needed:** Wrap `createCheckpoint()` in try-catch. Log error but DO NOT abort — checkpoints are valuable but not essential. The pipeline should continue without the checkpoint.

---

## Part 4: Summary Matrix

### Error Category Coverage

| Category | Origin Module | Handler Module | Recovery | State Change | Gaps |
|----------|--------------|----------------|----------|--------------|------|
| `claude-p-exit-nonzero` | claude-cli.ts | claude-cli.ts | Retry 3x | ErrorRecord + inFlightPass | None |
| `claude-p-timeout` | claude-cli.ts | claude-cli.ts | Retry 3x (1.5x on 3rd) | ErrorRecord | None |
| `claude-p-spawn-failed` | claude-cli.ts | claude-cli.ts (generic) | Retry 3x | ErrorRecord | **Permanent failures not distinguished** |
| `output-truncated` | response-handler.ts | pass-executor.ts | Retry 1x, then skip | ErrorRecord, skip pass | **Pass counting ambiguity** |
| `output-empty` | response-handler.ts | pass-executor.ts | Retry 1x, then skip | ErrorRecord | None |
| `output-no-artifact` | response-handler.ts | pass-executor.ts | Retry 1x, then skip | ErrorRecord | None |
| `output-no-modification` | diff-checker.ts | pass-executor.ts | Soft (continue) | Quality log | None |
| `validation-failed` | html-validator.ts | pass-executor.ts | Soft (continue) | PassRecord.validationPassed=false | **No critical/warning split** |
| `screenshot-failed` | screenshot-capture.ts | screenshot-capture.ts | Retry 3x, degrade | ErrorRecord, degraded PA | **Port conflict not handled, ESM require()** |
| `rate-limit` | claude-cli.ts | claude-cli.ts | Retry 5x, 60s base | ErrorRecord | **is_error:true bypass** |
| `budget-exceeded` | cost-tracker.ts | pipeline.ts | Pause | Phase→paused | **Partial PA cycle, resume UX** |
| `file-io` | Various | Various (generic) | Depends | Depends | **Log write failures unhandled** |
| `state-corruption` | resume.ts | resume.ts | Archive+fresh or FATAL | Archive or failed phase | None |
| `config-mismatch` | resume.ts | resume.ts | Archive+fresh | Archive old state | None |

### Unhandled Error Count: 10

| ID | Severity | Description |
|----|----------|-------------|
| UH-01 | HIGH | JSON parse failure of claude -p output |
| UH-02 | HIGH | Disk full (`ENOSPC`) during writes |
| UH-03 | HIGH | Concurrent pipeline instances on same directory |
| UH-04 | MEDIUM | `structured_output` vs `result` field confusion |
| UH-05 | HIGH | Prompt exceeds token limit after all trimming |
| UH-06 | LOW | JSONL log corruption during append |
| UH-07 | MEDIUM | HTTP server port already in use |
| UH-08 | HIGH | Session token expiry during long run |
| UH-09 | LOW | Cumulative conviction extraction failure |
| UH-10 | MEDIUM | Checkpoint creation failure |

### Cross-Scenario Gaps (found during tracing)

| ID | Gap | Severity | Found In |
|----|-----|----------|----------|
| XG-01 | `is_error: true` with exit code 0 bypasses rate-limit detection | HIGH | Scenario 1 |
| XG-02 | `Promise.all` vs `Promise.allSettled` for parallel auditors not specified | BLOCKING | Scenario 3 |
| XG-03 | Category mismatch: plan has `model-overload`, doc 08 doesn't | MEDIUM | Scenario 1 / EC-10 |
| XG-04 | Pass counting for failed-but-continued passes is ambiguous | MEDIUM | Scenario 2 / EC-04 |
| XG-05 | Orphaned .tmp files never cleaned up | LOW | Scenario 4 |
| XG-06 | Partial PA cycle loses auditor+weaver work on resume | HIGH | Scenario 5 |
| XG-07 | Resume from `paused` state requires manual state.json edit | MEDIUM | Scenario 5 |
| XG-08 | No pre-flight CLAUDECODE bypass check | MEDIUM | Scenario 7 |
| XG-09 | `require()` in ESM module for Playwright install | LOW | Scenario 8 |
| XG-10 | No authentication failure detection for session expiry | HIGH | UH-08 |
| XG-11 | `<script>` injection validation treated as soft failure | HIGH | EC-08 |
| XG-12 | No lock file for concurrent instance protection | HIGH | UH-03 |
| XG-13 | Budget check is post-call (can overshoot by one call's cost) | LOW | Scenario 5 |

---

## Part 5: Recommendations (Priority Order)

### BLOCKING (must fix before Wave 2 implementation)

1. **XG-02: Specify `Promise.allSettled` for PA auditor spawning.** If even ONE auditor of 8 fails, `Promise.all` discards all results. This must be `Promise.allSettled` with partial-result handling in the weaver.

2. **XG-01: Add `is_error` detection INSIDE the retry loop.** Currently rate-limit detection is only in `classifyExitCode()` which requires non-zero exit code. An `is_error: true` response with exit code 0 bypasses all classification. Add `classifyErrorResponse(json)` that checks `is_error` and parses `result` for error messages.

3. **UH-01: Wrap JSON.parse in response-handler.** A `claude -p` call that returns garbage must not crash the pipeline. Classify as `'invalid-response'` and retry.

### HIGH (should fix before Wave 3 integration)

4. **XG-06: Track partial PA cycle state.** Add `inFlightPACycle` to state schema, parallel to `inFlightPass`. Record which PA sub-steps completed (screenshots, auditors, weaver, routing, refine). On resume, pick up from the incomplete sub-step rather than re-running the entire cycle.

5. **UH-03: Add PID lock file.** Two instances on the same directory will corrupt state. Add `_orchestrator/pipeline.lock` with PID and startup timestamp.

6. **XG-11: Split validation into CRITICAL and WARNING.** `<script>` injection, missing `<body>`, or zero-length artifact should be CRITICAL (abort pass, do NOT save artifact). Missing sections or short length should be WARNING (save artifact, continue).

7. **UH-08: Detect authentication failures.** Parse stderr for auth patterns. Pause immediately rather than burning through 3 retries per remaining pass.

8. **UH-02: Detect ENOSPC.** If any write throws ENOSPC, pause pipeline with "Disk full" message. Do not retry.

9. **UH-05: Handle prompt-too-large after trimming.** If prompt exceeds limit even after trimming conviction + valley files, either split the pass or skip the subset with a clear error.

### MEDIUM (fix during Wave 5 hardening)

10. **XG-03: Reconcile ErrorCategory enums between plan and doc 08.** The plan has `model-overload`, doc 08 has `claude-p-exit-nonzero` and `rate-limit`. Choose one canonical enum.

11. **XG-04: Define pass counting for failed passes.** Explicitly: does a failed pass increment `lastCompletedCorpusPass`? Recommendation: NO. A failed pass should NOT increment the counter. Resume should retry it.

12. **XG-07: Add `--resume --force` CLI flag** that resets `currentPhase` from `paused` to the appropriate active phase without manual state.json editing.

13. **XG-08: Pre-flight CLAUDECODE check.** In dry-run mode, spawn a minimal `claude -p "echo hi"` with the intended env. Verify it completes in <30s.

14. **UH-07: Use port 0 for HTTP server.** Let the OS assign a random available port. Eliminates all port conflict issues.

15. **UH-10: Wrap checkpoint creation in try-catch.** Log failure, continue pipeline.

### LOW (nice-to-have)

16. **XG-05: Clean up orphaned .tmp files during resume.**
17. **XG-09: Use `import { execSync }` instead of `require()` in ESM.**
18. **XG-13: Add pre-call budget estimation** to avoid overshoot.
19. **UH-06: JSONL reader should skip corrupt lines.**
20. **UH-09: Track conviction extraction rate** as a quality metric.

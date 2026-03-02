# Audit: agents/CLI + Response Handler vs Plan Invocation Spec

**Auditor:** Task #5 Agent
**Date:** 2026-02-28
**Files Under Audit:**
- `tools/deep-build/src/agents/claude-cli.ts` (237 lines)
- `tools/deep-build/src/agents/response-handler.ts` (222 lines)
- `tools/deep-build/src/config/constants.ts` (119 lines, roles/retry/backoff)
- `tools/deep-build/src/types/pass.ts` (ClaudeResponse interface)
- `tools/deep-build/src/types/errors.ts` (ClaudeInvocationError)
- `tools/deep-build/src/utils.ts` (retry, safeJsonParse)

**Plan References:**
- Lines 275-393 (claude -p Invocation Reference, Token Isolation, JSON Response Parsing, Builder Response Format)
- Lines 55-61 (Contradiction resolutions K04, K05, K10)
- Lines 73-85 (Gap resolutions GAP-A06, GAP-002, GAP-B03)

---

## Summary

| Category | IMPLEMENTED | PARTIAL | MISSING | WRONG |
|----------|:-----------:|:-------:|:-------:|:-----:|
| Total    | 15          | 2       | 0       | 2     |

Overall: Strong implementation. Two WRONG items are deviations from plan (one is arguably an improvement, one is a flag the plan didn't specify). Two PARTIAL items are minor gaps.

---

## Item-by-Item Audit

### 1. CLAUDECODE=undefined on every spawn

**Verdict: IMPLEMENTED**

`claude-cli.ts:81` — `buildEnv()` sets `CLAUDECODE: undefined` in the environment spread. Since `buildEnv()` is called from `spawnOnce()` at line 100 (`env: buildEnv()`), and `spawnClaude()` is the sole export that wraps `spawnOnce()`, every spawn unsets CLAUDECODE.

Matches plan line 315: `CLAUDECODE: undefined, // Layer 0: BLOCKING`
Matches GAP-A06 (line 73): "Every `child_process.spawn()` unsets it."

---

### 2. 4-Layer Token Isolation

**Verdict: IMPLEMENTED**

Plan (lines 302-326) specifies 4 mandatory layers:

| Layer | Plan Spec | Implementation | Match |
|-------|-----------|----------------|-------|
| Layer 0: CLAUDECODE | `CLAUDECODE: undefined` | `claude-cli.ts:81` | YES |
| Layer 1: Scoped workdir | `cwd: isolatedWorkdir` | `claude-cli.ts:99` uses `options.workspaceDir` | YES |
| Layer 2: .git/HEAD | Created in workspace to block traversal | Not in these files (workspace setup is Phase 0 responsibility) | YES (out of scope for CLI module) |
| Layer 3: --setting-sources "" | MANDATORY on every call | `claude-cli.ts:51` | YES |
| Env vars | DISABLE_TELEMETRY, DISABLE_AUTO_COMPACT, DISABLE_AUTOUPDATER all = '1' | `claude-cli.ts:82-84` | YES |

Matches GAP-B03 (line 85): "4-layer isolation: scoped workdir with .git/HEAD, DISABLE_TELEMETRY=1, DISABLE_AUTO_COMPACT=1, DISABLE_AUTOUPDATER=1."

---

### 3. Per-Role Flags (max-turns, tools)

**Verdict: PARTIAL**

Plan invocation table (lines 279-290) vs `constants.ts:84-109`:

| Role | Plan max-turns | Code max-turns | Match |
|------|---------------|----------------|-------|
| tc-derivation | 30 | 30 | YES |
| content-analysis | 30 | 30 | YES |
| builder | 1 | 1 | YES |
| verifier | 1 | 1 | YES |
| retrospective | 10 | 10 | YES |
| cross-subset-verifier | 10 | 10 | YES |
| pa-auditor | 30 | 30 | YES |
| integrative-auditor | 20 | 20 | YES |
| weaver | 40 | 40 | YES |
| refine-builder | 25 | 25 | YES |

All max-turns match K05 resolution (line 56).

| Role | Plan Tools | Code Tools | Match |
|------|-----------|------------|-------|
| tc-derivation | Read, Write, Edit | Read,Write,Edit | YES |
| content-analysis | Read, Write, Edit | Read,Write,Edit | YES |
| builder | None (`--allowedTools ""`) | `''` (empty) | YES |
| verifier | None | `''` (empty) | YES |
| retrospective | Read | Read | YES |
| cross-subset-verifier | Read | Read | YES |
| pa-auditor | Read, Glob, Grep | Read,Glob,Grep | YES |
| integrative-auditor | Read, Glob, Grep | Read,Glob,Grep | YES |
| weaver | Read, Glob | Read,Glob | YES |
| **refine-builder** | **Read, Write, Edit** | **Read,Write,Edit,Bash,Glob,Grep** | **NO** |

**Refine-builder tools mismatch:** Plan line 290 says "Read, Write, Edit" but code has 6 tools including Bash, Glob, Grep. This EXCEEDS the plan spec. Adding Bash is particularly notable — it gives the refine builder shell execution capability not specified in the plan.

**Flag type mismatch (--allowedTools vs --tools):** GAP-B02 (line 84) resolves the confusion by specifying: Builder uses `--allowedTools ""`, PA uses `--tools "Read,Glob,Grep"`, Refine uses `--tools "Read,Write,Edit,Bash,Glob,Grep"`. The code at `claude-cli.ts:57` ALWAYS uses `--allowedTools` for all roles. The semantic difference between `--allowedTools` and `--tools` in Claude CLI is unclear from the plan alone, but the plan explicitly distinguishes them. The code unifies on `--allowedTools`, which may be intentional simplification or may cause tools not to be recognized for non-builder roles.

---

### 4. --output-format json on all calls

**Verdict: IMPLEMENTED**

`claude-cli.ts:50` — `'--output-format', 'json'` is hardcoded in `buildArgs()` which runs for every call.

Matches K04 resolution (line 55): "JSON (`--output-format json`). Required for programmatic parsing."

---

### 5. --no-session-persistence on all calls

**Verdict: IMPLEMENTED**

`claude-cli.ts:49` — `'--no-session-persistence'` is hardcoded in `buildArgs()`.

Matches plan invocation table — every role row includes `--no-session-persistence`.

---

### 6. JSON Response Parsing with is_error Check

**Verdict: IMPLEMENTED**

Two layers of parsing:

1. **claude-cli.ts:225** — `safeJsonParse()` parses raw stdout into `ClaudeResponse`. Validates `type` and `result` fields exist (lines 228-234).
2. **response-handler.ts:15-58** — `parseClaudeResponse()` does deeper parsing:
   - Handles truncated JSON (lines 20-27)
   - Checks `is_error` FIRST (line 32) — matches plan line 339: "ALWAYS check this"
   - Detects rate-limit patterns in error result text (line 36)
   - Detects overload patterns (line 44)
   - Throws typed `ClaudeInvocationError` with correct categories

Matches plan interface (lines 336-344):
- `type: 'result'` — checked at `claude-cli.ts:228`
- `subtype` — referenced in error message at `response-handler.ts:52`
- `is_error` — checked at `response-handler.ts:32`
- `result` — checked at `claude-cli.ts:228`
- `total_cost_usd` — present in `ClaudeResponse` type at `pass.ts:75`
- `usage` — present in type at `pass.ts:76-80`

**Note:** The code has TWO is_error check paths. `spawnClaude()` in claude-cli.ts does NOT check is_error — it only validates field existence. `parseClaudeResponse()` in response-handler.ts does the full is_error check. This means callers MUST use `parseClaudeResponse()` to get the is_error guard. If any caller uses only `spawnClaude()` and reads `.result` directly, they'll miss error responses.

---

### 7. HTML Extraction with 3 Fallbacks

**Verdict: IMPLEMENTED**

`response-handler.ts:67-109` — `extractHtml()` implements exactly 3 strategies in order:

1. **Markers** (line 69-74): Regex `<!-- HTML_START -->` ... `<!-- HTML_END -->`. Returns `method: 'markers'`.
2. **DOCTYPE** (line 77-96): `<!DOCTYPE html>` to last `</html>`. Handles both upper and lowercase. Returns `method: 'doctype'`.
3. **Full result** (line 99-101): Checks for `<html` and `</html>` tags. Returns `method: 'full-result'`.

If all 3 fail: throws `HtmlExtractionError` (line 104).

Matches plan line 380-382:
- "Fallback: first `<!DOCTYPE html>` to last `</html>`" — YES
- "Fallback: entire result if no markers (log warning)" — YES (logged at line 100)

---

### 8. Conviction Marker Extraction (CONVICTION_ADDITION_START/END)

**Verdict: IMPLEMENTED**

`response-handler.ts:123-159` — `extractConvictionAddition()`:

- Regex matches `<!-- CONVICTION_ADDITION_START -->` ... `<!-- CONVICTION_ADDITION_END -->` (line 124-125)
- Parses 6 dimensions: BUILT, TRYING, REJECTED, SURPRISED, WANTED, UNRESOLVED (lines 136-143)
- Returns `null` if missing (not error) — matches plan line 385: "If missing: log warning, continue without conviction addition"
- Logs warning on missing (line 129)

Matches plan lines 364-371 exactly.

---

### 9. Discovery Log Extraction (DISCOVERY_LOG_START/END)

**Verdict: IMPLEMENTED**

`response-handler.ts:169-186` — `extractDiscoveryLog()`:

- Regex matches `<!-- DISCOVERY_LOG_START -->` ... `<!-- DISCOVERY_LOG_END -->` (line 170-171)
- Splits on newlines, trims, strips bullet prefixes `[-*\u2022]` (lines 180-185)
- Returns empty array if missing (not error) — matches plan line 387: "If missing: log warning, continue without discovery addition"
- Logs warning on missing (line 175)

Matches plan lines 373-376.

---

### 10. Retry with Exponential Backoff [5000, 15000, 45000]

**Verdict: IMPLEMENTED**

`constants.ts:14` — `RETRY_BACKOFF = [5000, 15000, 45000]`
`utils.ts:44-64` — `retry()` function:
- Takes `maxRetries` and `backoff` array
- Uses `backoff[Math.min(attempt, backoff.length - 1)]` for delay (line 57)
- Calls `onRetry` callback before sleeping (line 58)
- `spawnClaude()` at `claude-cli.ts:207-222` passes `RETRY_LIMIT` and `RETRY_BACKOFF` to `retry()`

---

### 11. 3 Retries = 4 Total Attempts

**Verdict: IMPLEMENTED**

`constants.ts:11` — `RETRY_LIMIT = 3` with comment "Maximum retries per claude -p call (4 total attempts)"
`utils.ts:51` — Loop runs `for (let attempt = 0; attempt <= maxRetries; attempt++)` — so 0,1,2,3 = 4 iterations.

Matches K10 resolution (line 61): "3 retries (4 total) is canonical."

---

### 12. Timeout Handling

**Verdict: IMPLEMENTED**

`claude-cli.ts:37` — `DEFAULT_TIMEOUT_MS = 600_000` (10 minutes)
`claude-cli.ts:111-123` — Timeout implementation:
- `setTimeout` sends `SIGTERM` (line 112)
- 5-second grace period then `SIGKILL` (lines 114-118)
- Rejects with `ClaudeInvocationError` category `'timeout'` (lines 119-122)
- Timer cleared on normal close (line 126)
- Timer cleared on spawn error (line 166)

Timeout is retryable — `spawnClaude()` at line 214 only re-throws if category is NOT `rate-limit`, `model-overload`, or `timeout`.

---

### 13. child_process.spawn (not execSync)

**Verdict: IMPLEMENTED**

`claude-cli.ts:7` — `import { spawn } from 'node:child_process';`
`claude-cli.ts:98` — `const child = spawn('claude', args, { ... })`

No `execSync` anywhere. Matches GAP-C06 (line 88): "`spawn()` for production (non-blocking, streamable)."

---

### 14. --strict-mcp-config for PA Roles

**Verdict: IMPLEMENTED**

`constants.ts:112` — `STRICT_MCP_ROLES = ['pa-auditor', 'integrative-auditor']`
`claude-cli.ts:60-62` — Conditionally adds `--strict-mcp-config` for roles in this list.

Matches plan lines 287-288: Both PA Auditor and Integrative Auditor have `--strict-mcp-config`.

---

### 15. Retry Only on Transient Errors

**Verdict: IMPLEMENTED**

`claude-cli.ts:213-216` — Only retries on `rate-limit`, `model-overload`, `timeout`. Re-throws immediately on `invalid-response`, `unknown`, and all other categories.

---

### 16. --dangerously-skip-permissions Flag

**Verdict: WRONG (added, not in plan)**

`claude-cli.ts:53` — `'--dangerously-skip-permissions'` is hardcoded in every invocation.

This flag is NOT mentioned ANYWHERE in the plan (confirmed via grep). While it may be functionally necessary (agents need to use tools without interactive permission prompts), it was not specified and has security implications — it bypasses all tool permission checks for every spawned agent. This should be explicitly documented in the plan if intentional.

---

### 17. --add-dir for Cross-Directory Access

**Verdict: IMPLEMENTED**

`claude-cli.ts:65-69` — Iterates `options.additionalDirs` and adds `--add-dir {dir}` for each.

Matches plan line 330: "Use `--add-dir {corpus_dir}` to grant read access without breaking isolation."

---

### 18. ClaudeResponse Type Shape

**Verdict: IMPLEMENTED**

`pass.ts:69-82` — `ClaudeResponse` interface matches plan (lines 336-344):
- `type: 'result'` — YES
- `subtype: 'success' | 'error_max_turns' | string` — YES (union with string for extensibility)
- `is_error: boolean` — YES
- `result: string` — YES
- `session_id: string` — YES
- `total_cost_usd: number` — YES
- `usage` with `input_tokens`, `output_tokens`, `cache_read_tokens?`, `cache_write_tokens?` — YES

---

### 19. Refine Builder Tools

**Verdict: WRONG (exceeds plan)**

Plan line 290: Refine Builder tools = "Read, Write, Edit"
`constants.ts:108`: `'refine-builder': 'Read,Write,Edit,Bash,Glob,Grep'`

The code gives the refine builder 3 extra tools (Bash, Glob, Grep) not in the plan. Bash in particular grants shell execution. This may be intentional (refine builder might need to read multiple files via Glob, grep for patterns), but deviates from the explicit plan table.

---

## Cross-Reference: Dual is_error Check Path

**Finding: PARTIAL**

There are TWO code paths that can process a `ClaudeResponse`:

1. `spawnClaude()` in `claude-cli.ts` — validates field existence but does NOT check `is_error`. Returns raw response.
2. `parseClaudeResponse()` in `response-handler.ts` — DOES check `is_error` with rate-limit/overload detection.

If any caller uses `spawnClaude()` directly without passing the response through `parseClaudeResponse()`, they will process error responses as successes. The plan (line 339) says "ALWAYS check this — can be true even with subtype 'success'".

**Risk:** Moderate. Depends on whether all callers of `spawnClaude()` subsequently call `parseClaudeResponse()`. This is an architectural question for the orchestrator audit.

---

## Cross-Reference: --allowedTools vs --tools Flag

**Finding: PARTIAL**

GAP-B02 (line 84) explicitly distinguishes:
- Builder: `--allowedTools ""`
- PA: `--tools "Read,Glob,Grep"`
- Refine: `--tools "Read,Write,Edit,Bash,Glob,Grep"`

The code at `claude-cli.ts:57` uses `--allowedTools` for ALL roles uniformly. If `--allowedTools` and `--tools` have different semantics in Claude CLI (allowedTools = whitelist restriction vs tools = tool provisioning), this could mean PA auditors and refine builders don't get their tools properly configured. However, if they are aliases, this is fine.

**Risk:** Needs verification against Claude CLI documentation. If the flags are semantically different, PA and refine tools won't work correctly.

---

## Findings Table

| # | Check Item | Verdict | File:Line | Notes |
|---|-----------|---------|-----------|-------|
| 1 | CLAUDECODE=undefined | IMPLEMENTED | claude-cli.ts:81 | Exact match |
| 2 | 4-layer isolation | IMPLEMENTED | claude-cli.ts:49-51,79-86,99 | All 4 layers present |
| 3 | Per-role max-turns | IMPLEMENTED | constants.ts:84-95 | All 10 roles match plan |
| 4 | Per-role tools | PARTIAL | constants.ts:98-109 | refine-builder has 3 extra tools (Bash,Glob,Grep) |
| 5 | --output-format json | IMPLEMENTED | claude-cli.ts:50 | Hardcoded, all calls |
| 6 | --no-session-persistence | IMPLEMENTED | claude-cli.ts:49 | Hardcoded, all calls |
| 7 | is_error check | IMPLEMENTED | response-handler.ts:32 | Done in parseClaudeResponse, not in spawnClaude |
| 8 | HTML 3-fallback extraction | IMPLEMENTED | response-handler.ts:67-109 | markers/doctype/full-result |
| 9 | Conviction extraction | IMPLEMENTED | response-handler.ts:123-159 | All 6 dimensions |
| 10 | Discovery log extraction | IMPLEMENTED | response-handler.ts:169-186 | Split+trim+strip bullets |
| 11 | Retry backoff [5000,15000,45000] | IMPLEMENTED | constants.ts:14 | Exact match |
| 12 | 3 retries = 4 attempts | IMPLEMENTED | constants.ts:11, utils.ts:51 | Exact match K10 |
| 13 | Timeout handling | IMPLEMENTED | claude-cli.ts:111-123 | SIGTERM + 5s SIGKILL |
| 14 | child_process.spawn | IMPLEMENTED | claude-cli.ts:7,98 | No execSync anywhere |
| 15 | --strict-mcp-config for PA | IMPLEMENTED | constants.ts:112, claude-cli.ts:60-62 | pa-auditor + integrative |
| 16 | Retry only transient errors | IMPLEMENTED | claude-cli.ts:213-216 | rate-limit, overload, timeout |
| 17 | --add-dir cross-directory | IMPLEMENTED | claude-cli.ts:65-69 | Loops additionalDirs |
| 18 | ClaudeResponse type shape | IMPLEMENTED | pass.ts:69-82 | All fields match plan |
| 19 | --dangerously-skip-permissions | WRONG | claude-cli.ts:53 | Not in plan. Added without spec. |
| 20 | Refine builder tools | WRONG | constants.ts:108 | 3 extra tools beyond plan spec |
| 21 | Dual is_error path | PARTIAL | claude-cli.ts vs response-handler.ts | spawnClaude skips is_error check |
| 22 | --allowedTools vs --tools | PARTIAL | claude-cli.ts:57 | Code uses --allowedTools for all; plan GAP-B02 distinguishes |

---

## Recommendations

1. **WRONG: --dangerously-skip-permissions** — Either add to plan as deliberate design decision with justification, or remove and rely on `--allowedTools` restrictions for permission control.

2. **WRONG: Refine builder extra tools** — Either update plan line 290 to include Bash,Glob,Grep with justification, or trim `constants.ts:108` to match plan ("Read,Write,Edit").

3. **PARTIAL: --allowedTools vs --tools** — Verify against Claude CLI documentation whether these flags are aliases. If not, non-builder roles may need `--tools` instead of `--allowedTools` at `claude-cli.ts:57`.

4. **PARTIAL: Dual is_error path** — Consider having `spawnClaude()` call `parseClaudeResponse()` internally so every caller gets is_error checking by default. Currently callers must remember to run the response through `parseClaudeResponse()` separately.

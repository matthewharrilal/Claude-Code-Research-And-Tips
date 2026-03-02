# JSON Resilience Audit — Findings and Fixes

Date: 2026-02-28
Scope: All JSON parsing, serialization, and recovery paths in `tools/deep-build/src/`

## Summary

8 issues found across 5 files. 6 FIXED in code, 2 documented as acceptable risks.

---

## Issue 1: Truncation at escape boundary in `recoverTruncatedClaudeResponse` [FIXED]

**File:** `src/utils.ts` lines 195-207
**Severity:** HIGH — production-reachable

**Problem:** When truncation happens right after a backslash (`\`), the code did `i += 2` which reads past the end of the string. While JS returns `undefined` (no crash), the resulting `rawResult` contains a trailing `\` that the manual unescape (`replace(/\\\\/g, '\\')`) won't clean up correctly. This produces a malformed string with a dangling backslash.

**Concrete example:**
```
Input:  {"type":"result","result":"hello world\
```
The walker hits `\` at position N, does `i += 2`, exits loop. `rawResult = "hello world\"` — the trailing `\` is preserved, and `replace(/\\"/g, '"')` turns it into a bare `"`, corrupting downstream parsing.

**Fix:** Added boundary check before `i += 2`:
```typescript
if (i + 1 >= text.length) break; // Truncation happened mid-escape
i += 2;
```

Also added `stripTrailingPartialEscape()` function (called on the truncated path) that:
- Detects trailing unmatched `\` (odd count of consecutive trailing backslashes)
- Detects incomplete unicode escapes (`\u`, `\uX`, `\uXX`, `\uXXX` at end of string)
- Strips the incomplete escape before manual unescape runs

---

## Issue 2: Incomplete unicode escape `\uXXXX` truncation [FIXED]

**File:** `src/utils.ts` (new `stripTrailingPartialEscape` function)
**Severity:** MEDIUM — production-reachable but rare

**Problem:** If truncation occurs mid-unicode escape like `\u00`, the walker's `i += 2` only skips past `\u`, then `0` and `0` are iterated as normal chars (not a crash). But the manual unescape on the truncated path (`replace(/\\n/g, '\n')...`) doesn't handle `\u00` — it gets passed through verbatim as the literal characters `\u00`, creating garbled output.

**Concrete example:**
```
Input:  {"type":"result","result":"caf\u00
```
After recovery: `rawResult = "caf\\u00"` → manual unescape produces `"caf\u00"` (literal text, not the intended e-acute).

**Fix:** `stripTrailingPartialEscape()` detects `\u` followed by 0-3 hex digits at end of string and strips the entire incomplete sequence.

---

## Issue 3: `response-handler.ts` double truncation conflicting with `safeJsonParse` [FIXED]

**File:** `src/agents/response-handler.ts` lines 15-29
**Severity:** MEDIUM — data loss risk

**Problem:** `parseClaudeResponse` performed its own `lastIndexOf('}')` truncation BEFORE passing to `safeJsonParse`, which ALSO does `lastIndexOf('}')`. This creates two failure modes:

1. If the JSON contains `}` inside a string value (e.g., `"result":"some } here"`), the pre-truncation can cut at the wrong brace, then `safeJsonParse` receives already-damaged input and its recovery paths see corrupted data.

2. The pre-truncation silently discards everything after the last `}`, including data that `safeJsonParse`'s third-stage recovery (`recoverTruncatedClaudeResponse`) needs — specifically the `"result":"..."` structure.

**Concrete example:**
```
Input:  {"type":"result","result":"data with } inside","usage":{"input_tokens":
```
Pre-truncation cuts to: `{"type":"result","result":"data with }`
This parses as malformed JSON, and `safeJsonParse`'s recovery can't find the proper structure.

**Fix:** Removed the pre-truncation from `parseClaudeResponse`. Now passes `rawJson.trim()` directly to `safeJsonParse`, which has proper three-stage fallback: normal parse, lastIndexOf('}'), truncated response recovery.

---

## Issue 4: `cli.ts:84` raw `JSON.parse` bypasses `safeJsonParse` [FIXED]

**File:** `src/cli.ts` line 84
**Severity:** LOW — state.json is locally written, unlikely to be truncated

**Problem:** The `--resume` code path used `JSON.parse(stateRaw)` instead of `safeJsonParse`. If `state.json` were corrupted (process killed during write, disk full), this would throw an unhelpful `SyntaxError` instead of the descriptive error from `safeJsonParse`.

**Fix:** Changed to `safeJsonParse<Record<string, unknown>>(stateRaw, '--resume state(...)')`. Also added `import { safeJsonParse }` to the import list.

---

## Issue 5: `pipeline.ts` greedy regex for weaver verdict JSON [FIXED]

**File:** `src/orchestrator/pipeline.ts` line 640
**Severity:** MEDIUM — can cause parse failure with verbose weaver responses

**Problem:** The regex `/\{[\s\S]*"pa05Score"[\s\S]*\}/` used greedy quantifiers (`*` not `*?`). For weaver text like:
```
Here is my analysis {...pa05Score...}

And some final thoughts with a {footnote}.
```
The greedy match spans from the first `{` to the very last `}` (the footnote brace), capturing all intervening text including markdown. `JSON.parse` then fails on the expanded match.

**Fix:** Two improvements:
1. Added fenced block extraction first: `/```json\s*\n([\s\S]*?)\n\s*```/` (matches the weaver's expected output format)
2. Changed brace regex to non-greedy: `/\{[\s\S]*?"pa05Score"[\s\S]*?\}/`

This prefers the structured fenced block (which `weaver-spawner.ts` already instructs the weaver to produce), falling back to the non-greedy brace match.

---

## Issue 6: `appendJsonl` unprotected against `JSON.stringify` failure [FIXED]

**File:** `src/utils.ts` line 225
**Severity:** LOW — current callers are unlikely to pass circular refs

**Problem:** `JSON.stringify(record)` throws `TypeError: Converting circular structure to JSON` if the record contains circular references. The `Logger.decision()` and `Logger.quality()` methods accept arbitrary `object` parameters, making this possible.

If `JSON.stringify` throws, the JSONL line is never written and the error propagates up, potentially disrupting the pipeline for what should be a non-critical logging operation.

**Fix:** Wrapped `JSON.stringify` in try/catch. On failure, writes a fallback record with `_serializationError`, `_keys`, and `_timestamp` — preserving the diagnostic intent without crashing.

---

## Issue 7: `weaver-spawner.ts` `parseWeaverVerdict` — truncated JSON block [NOT FIXED — ACCEPTABLE]

**File:** `src/pa/weaver-spawner.ts` lines 135-165
**Severity:** LOW

**Problem:** If the weaver's response is truncated mid-JSON block (no closing `` ``` ``), the regex `/```json\s*\n([\s\S]*?)\n\s*```/g` won't match, and the function throws.

**Assessment:** This is CORRECT behavior. A truncated WeaverVerdict cannot be trusted for routing decisions (SHIP vs REFINE vs RETHINK). The weaver is the final decision-maker — acting on partial data would be worse than failing. The error message is clear and the caller (pipeline orchestrator) handles the exception. No fix needed.

---

## Issue 8: `state-manager.ts` `loadState` — corrupted state.json [NOT FIXED — ALREADY HANDLED]

**File:** `src/state/state-manager.ts` lines 21-40
**Severity:** NONE

**Problem originally asked about:** Does `loadState` handle corrupted/truncated state.json?

**Assessment:** YES, it does:
1. `readFileChecked` throws `FileNotFoundError` if file missing
2. `safeJsonParse` handles truncation with three-stage recovery
3. `schemaVersion` check catches version mismatches
4. `validateState()` checks 12 required fields with specific type assertions
5. `StateCorruptionError` is thrown with descriptive messages

The `atomicWriteFile` pattern (write to `.tmp` then rename) also prevents partial writes from corrupting state.json in the first place. No fix needed.

---

## Files Modified

| File | Changes |
|------|---------|
| `src/utils.ts` | Added `stripTrailingPartialEscape()`, fixed escape boundary in recovery, hardened `appendJsonl` |
| `src/cli.ts` | Replaced raw `JSON.parse` with `safeJsonParse`, added import |
| `src/orchestrator/pipeline.ts` | Fixed greedy regex, added fenced block preference |
| `src/agents/response-handler.ts` | Removed conflicting pre-truncation, delegated fully to `safeJsonParse` |

## Verification

`npx tsc --noEmit` passes with zero errors after all fixes.

## Remaining JSON parse paths (audited, no fixes needed)

- `src/pa/weaver-spawner.ts:151` — `JSON.parse(lastMatch)` inside try/catch, throws descriptive error
- `src/state/checkpoint.ts:93` — uses `safeJsonParse` correctly
- `src/state/state-manager.ts:23` — uses `safeJsonParse` correctly
- `src/agents/claude-cli.ts:242` — uses `safeJsonParse` correctly
- All `JSON.stringify` calls in report.ts, checkpoint.ts, state-manager.ts, pass-executor.ts — serializing known structures, not user input

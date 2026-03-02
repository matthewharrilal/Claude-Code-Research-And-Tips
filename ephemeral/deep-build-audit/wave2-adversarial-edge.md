# Wave 2: Adversarial Edge Cases & Failure Modes

**Scope:** `tools/deep-build/src/` — all 37 TypeScript source files
**Method:** Code-traced analysis of 24 adversarial scenarios
**Status:** Research only — zero source files modified

---

## Category 1: Content File Input Edge Cases

### EC-01: Content file is 0 bytes (empty)

**Code path:** `cli.ts:94-96`
```typescript
if (contentStat.size === 0) {
  throw new Error('Content file is empty (0 bytes)');
}
```

**Verdict: HANDLED (gracefully).** The CLI checks `contentStat.size === 0` before any other processing. Throws a clear error message. Exit code 1. No data corruption possible.

**Severity: NONE**

---

### EC-02: Content file is 5MB (maximum boundary)

**Code path:** `cli.ts:97-99`
```typescript
if (contentStat.size > 5_000_000) {
  throw new Error(`Content file too large...`);
}
```

**Verdict: HANDLED but with a boundary precision issue.** A file that is exactly 5,000,000 bytes passes the check (the condition is `>`, not `>=`). This is fine — the limit is arbitrary anyway. However, the real downstream risk is not file size but *token count*. A 5MB markdown file is ~1.25M tokens (at 4 chars/token). The TOKEN_LIMIT is 100K tokens. What happens?

**Downstream trace:** `assembler.ts:resolveBuilderVariables` loads the content via `loadFileOrEmpty(resolveAbsPath(config.contentPath, pr))` and places it in the `CONTENT_MARKDOWN` variable. Then `trimIfNeeded` checks estimated tokens. If above TOKEN_TRIM (95K), it trims conviction layer and valley corpus files — but NOT the content markdown itself. A 1.25M-token content file will blow past TOKEN_FAIL (105K) with just the content alone. The `trimIfNeeded` function only throws `ValidationError` when `removed >= Math.ceil(fileCount * 0.5) && tokens > TOKEN_FAIL` — but this logic is inside the corpus-trim branch. If corpus trimming alone can't get below TOKEN_FAIL, the function just returns the over-limit text with `wasTrimmed: true`.

**What actually happens:** The over-limit prompt gets sent to `claude -p`. Claude accepts it (its context window is larger than 100K tokens). The pipeline continues, but the builder may produce lower-quality output due to context window saturation.

**Severity: LOW.** The token limit is a soft guardrail, not a hard gate. Claude handles the large prompt. But the trimming logic has a gap: content markdown is never trimmed, only conviction and corpus files. A 5MB content file makes all trimming irrelevant.

**Suggested fix:** Add content markdown truncation as a Phase 3 trim strategy in `trimIfNeeded`. Or lower the file size limit to ~400KB (~100K tokens).

---

### EC-03: Content file contains only whitespace

**Code path:** `cli.ts:93-103`. The size check passes (file is not 0 bytes). The binary check passes (whitespace is not null bytes). The content is then used throughout the pipeline.

**Downstream trace:** `workspace-setup.ts:61` copies whitespace-only content to `_content.md`. TC derivation receives a whitespace prompt. The Claude agent will receive a valid prompt with whitespace content and will likely produce either an error response or attempt to build from nothing.

**Verdict: UNHANDLED.** No validation that content is semantically non-empty.

**Severity: LOW.** The pipeline won't crash — it will just waste money producing nothing useful. TC derivation will return something, content analysis will return something, and builders will build a page with no content. The pipeline may complete successfully with a SHIP verdict on a contentless page.

**Suggested fix:** Add `if (contentSample.trim().length === 0) throw new Error('Content file contains only whitespace')` after the binary check in `cli.ts`.

---

### EC-04: Content file contains binary data (not text)

**Code path:** `cli.ts:100-103`
```typescript
const contentSample = fs.readFileSync(contentPath, { encoding: 'utf-8' }).slice(0, 1000);
if (contentSample.includes('\x00')) {
  throw new Error('Content file appears to be binary...');
}
```

**Verdict: PARTIALLY HANDLED.** The null-byte check catches many binary formats (images, compiled code) but NOT all. Some binary formats (e.g., compressed text, some PDFs) may not have null bytes in their first 1000 bytes. Also, the check only reads the first 1000 bytes — a text file with binary data after byte 1000 will pass.

**Severity: LOW.** A binary file that passes this check will be treated as garbage text by Claude. Claude will produce output (not crash), but it will be semantically meaningless. Money wasted but no corruption.

---

### EC-05: Content file path has spaces, unicode, or special characters

**Code path:** `cli.ts:88` resolves to absolute path via `path.resolve(args.content)`. All subsequent usage is via `fs.readFileSync(contentPath, 'utf-8')`, `path.join(config.outputDir, '_content.md')`, etc.

**Slug generation:** `utils.ts:70-77`
```typescript
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/\.md$/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}
```

**Verdict: HANDLED.** Node.js fs handles paths with spaces and unicode natively. The slug is sanitized — unicode characters become dashes. The output directory uses the slug, not the raw filename. `path.resolve` correctly handles all path characters on macOS/Linux.

**Edge case within edge case:** A filename that is ALL unicode (e.g., `日本語.md`) would slugify to an empty string after `replace(/[^a-z0-9]+/g, '-')` and `replace(/^-+|-+$/g, '')`. The slug would be `""`. Output dir would be `ephemeral/builds/-2026-02-28/` (leading dash from date join).

**Severity: LOW.** Functional but produces ugly directory names. The pipeline will still work. An all-unicode filename producing an empty slug would create a directory starting with a dash, which is unusual but valid on POSIX filesystems.

**Suggested fix:** Add fallback to slugify: `if (result.length === 0) return 'untitled'`.

---

### EC-06: Content file is a symlink

**Code path:** `cli.ts:89` uses `fs.existsSync(contentPath)` which follows symlinks. `cli.ts:93` uses `fs.statSync(contentPath)` which also follows symlinks. The file is then read with `fs.readFileSync`.

**Verdict: HANDLED.** Node.js follows symlinks transparently. The size, binary check, and read all operate on the target file. If the symlink is dangling (target deleted), `fs.existsSync` returns false and the pipeline reports "Content file not found."

**Severity: NONE.**

---

### EC-07: Two pipeline runs on the same content simultaneously

**Code path:** `cli.ts:109-110`
```typescript
const dateStr = new Date().toISOString().slice(0, 10);
const outputDir = path.join(projectRoot, 'ephemeral', 'builds', `${slug}-${dateStr}`);
```

Both runs get the SAME output directory (`slug-2026-02-28`). Then `workspace-setup.ts:createWorkspace` calls `ensureDir(config.outputDir)` and `ensureDir(config.workspaceDir)` — both will succeed (recursive mkdir is idempotent).

**Race conditions:**
1. **state.json:** Both runs create initial state via `atomicWriteFile` at the same path. Last writer wins. The losing run will then read the other run's state, which has a different `runId` and `configHash`. However, the winning run also overwrites the state — they'll thrash.
2. **artifact.html:** Both runs write to the same `output.html` via `atomicWriteFile`. They will alternate overwriting each other's artifact.
3. **_passes/ archives:** Pass numbering is based on global pass number from state. If both runs are at pass 1, they write to the same archive directory.
4. **Port contention:** `http-server.ts:findAvailablePort` starts at 8765 and scans upward. Two runs will get different ports (the second finds 8765 occupied and takes 8766). No conflict.
5. **Playwright:** Both runs launch separate Chromium instances. No contention.

**Verdict: UNHANDLED — silent data corruption.** Two concurrent runs silently corrupt each other's state, artifact, and archives. No lock file, no PID check, no output directory uniqueness.

**Severity: MEDIUM.** This is a realistic scenario (user starts a run, forgets about it, starts another). The corruption is silent — the pipeline won't crash, but both runs produce unusable output.

**Suggested fix:** Add a lock file (`outputDir/.lock`) with PID check before starting. Or append a short random suffix to the output directory name.

---

## Category 2: Claude -p Response Edge Cases

### EC-08: Response is valid JSON but type is "error" not "result"

**Code path:** `claude-cli.ts:346`
```typescript
if (typeof response.type !== 'string' || typeof response.result !== 'string') {
  throw new ClaudeInvocationError(...)
}
```

And `response-handler.ts:23-46` checks `response.is_error`.

**Verdict: PARTIALLY HANDLED.** The `spawnClaude` function in `claude-cli.ts` does NOT check `is_error`. It only validates that `type` is a string and `result` is a string. If `type` is `"error"` and `result` is a string, the response passes validation and is returned to the caller.

The `parseClaudeResponse` in `response-handler.ts` DOES check `is_error`, but this function is NOT used in the main `spawnClaude` flow! Looking at `claude-cli.ts:343`, after `safeJsonParse`, it goes directly to the type/result field check. `parseClaudeResponse` is a dead function — it's never imported by anything except possibly tests.

**What happens:** If Claude returns `{"type":"result","subtype":"error_max_turns","is_error":true,"result":"I ran out of turns..."}`, `spawnClaude` returns this as a successful response. The pipeline treats the error message as builder output, tries to extract HTML from it (fails), records a pass failure with "Failed to extract HTML from builder response", and continues.

**Severity: LOW.** The pipeline handles this gracefully via the HTML extraction failure path. But it's semantically wrong — an `is_error` response should be retried or reported as a distinct error category, not treated as a successful response with bad output.

**Suggested fix:** Add `if (response.is_error) throw new ClaudeInvocationError(...)` in `spawnClaude` after parsing, before the type/result check.

---

### EC-09: Response is valid JSON but result is empty string

**Code path:** `claude-cli.ts:346` — `typeof response.result !== 'string'` checks type but not emptiness. An empty string IS a string. The check passes.

**Downstream:** `pass-executor.ts:99` — `const resultText = rawResponse.result ?? ''`. For builder passes, `extractHtml(resultText)` is called with `""`, which throws `HtmlExtractionError` ("No HTML found in builder response"). This is caught and the pass is recorded as failed.

**Verdict: HANDLED (through downstream error recovery).** The empty result flows through to HTML extraction, which fails gracefully. The pass is recorded as failed, and the pipeline continues to the next pass.

**Severity: NONE.**

---

### EC-10: Response contains literal `{CURRENT_ARTIFACT}` or other template variables (V-05 injection)

**Code path:** `assembler.ts:206-211`
```typescript
// Escape any {UPPER_CASE} patterns in the value to prevent
// content markdown from injecting template variables
const safeValue = value.replace(/\{([A-Z_]{2,})\}/g, '⟨$1⟩');
text = text.replaceAll(`{${name}}`, safeValue);
```

**Verdict: HANDLED (V-05 defense present).** Template variable values are escaped before substitution — `{CURRENT_ARTIFACT}` in content becomes `⟨CURRENT_ARTIFACT⟩`. This prevents content from injecting template variables that would be expanded in a second substitution pass.

However, there's a subtle gap: the substitution uses `replaceAll` which is a single-pass operation. But if the template itself contains `{VARIABLE_A}` whose value contains `{VARIABLE_B}`, and VARIABLE_B hasn't been substituted yet, the escape handles this because the value is escaped BEFORE substitution.

**But what about the Claude RESPONSE?** If a builder's response text contains `{CURRENT_ARTIFACT}`, this is NOT re-substituted — it's only extracted as HTML. The template substitution only runs once during prompt assembly, not on responses. So V-05 injection via response is not applicable.

**Severity: NONE.** Well-defended.

---

### EC-11: Response is exactly MAX_STDOUT_BYTES (50MB boundary)

**Code path:** `claude-cli.ts:217-226`
```typescript
if (stdoutBytes > MAX_STDOUT_BYTES) {
  if (!stdoutOverflow) {
    stdoutOverflow = true;
    forceKill();
  }
  return; // Stop accumulating
}
stdoutChunks.push(chunk);
```

**Verdict: HANDLED with precision issue.** The check is `>` not `>=`. A response that is exactly 50MB (52,428,800 bytes) passes. A response that is 50MB + 1 byte triggers overflow. This is fine — the limit is arbitrary.

The boundary behavior depends on chunk sizes. If the 50MB arrives in chunks, the check happens per-chunk. The accumulated `stdoutBytes` crosses the boundary mid-chunk. The last chunk that crosses the boundary is NOT pushed to `stdoutChunks`, but all previous chunks are. So the actual data collected is slightly LESS than 50MB (missing the last chunk). When the response is reassembled from `Buffer.concat(stdoutChunks)`, it's missing the tail.

**Wait — that's NOT what happens.** Re-reading: when `stdoutOverflow` is set, `forceKill()` is called and the process is killed. The `trySettle` function checks `if (stdoutOverflow)` and rejects with `ClaudeInvocationError`. So the entire response is discarded, not truncated.

**What about `safeJsonParse` truncation recovery?** It's never reached — the overflow path rejects before any JSON parsing.

**Severity: NONE.** Clean handling. The response is rejected entirely, not silently truncated.

---

### EC-12: claude binary not found on PATH

**Code path:** `claude-cli.ts:121` — `spawn('claude', args, ...)`. If `claude` is not on PATH, the `spawn` emits an `error` event.

`claude-cli.ts:256-261`:
```typescript
child.on('error', (err) => {
  settle({ reject: new ClaudeInvocationError(
    `claude -p spawn failed (role: ${options.role}): ${err.message}`,
    'unknown',
  )});
});
```

**Verdict: HANDLED.** The spawn error is caught and wrapped in `ClaudeInvocationError` with category `unknown`. The retry logic in `spawnClaude` does NOT retry `unknown` errors (line 332: `if (category !== 'rate-limit' && ... !== 'network-error') { throw error; }`). The error propagates to the caller, which eventually exits with code 1.

**Severity: NONE.** Clean error message, fast fail, no retries on a clearly non-transient error.

---

### EC-13: claude returns exit code 0 but stderr has warnings

**Code path:** `claude-cli.ts:174-212`. The `trySettle` function checks `processExitCode !== 0` first. If exit code is 0, it skips all error classification (rate-limit, overload, network) and goes to the empty-stdout check. If stdout is non-empty, it resolves successfully.

**Verdict: HANDLED (stderr warnings are ignored).** This is CORRECT behavior. Claude outputs diagnostic info to stderr (progress messages, token counts, etc.) even on success. The pipeline ignores stderr when exit code is 0. Stderr is only used for error classification when exit code is non-zero.

**Severity: NONE.**

---

## Category 3: Pipeline State Edge Cases

### EC-14: state.json exists but has wrong schemaVersion

**Code path:** `state-manager.ts:25-29`
```typescript
if (state.schemaVersion !== 3) {
  throw new StateCorruptionError(
    `Schema version mismatch: expected 3, got ${state.schemaVersion}.`
  );
}
```

**Verdict: HANDLED.** Clear error message, throws `StateCorruptionError`, pipeline exits with code 1.

**Severity: NONE.**

---

### EC-15: Disk fills up during pipeline run

**atomicWriteFile path:** `utils.ts:15-18`
```typescript
export function atomicWriteFile(filePath: string, data: string): void {
  const tmpPath = filePath + '.tmp';
  fs.writeFileSync(tmpPath, data, 'utf-8');
  fs.renameSync(tmpPath, filePath);
}
```

**Scenario 1: writeFileSync fails (no space for .tmp).** Node throws `ENOSPC`. This propagates up to the caller. If the caller catches it (e.g., `archivePass` in `pass-executor.ts:373` catches and logs), the pipeline continues. If it's in a critical path (e.g., `saveState`), the error propagates to `main()` which catches it and exits with code 1.

**Scenario 2: writeFileSync succeeds but renameSync fails.** On POSIX, rename is atomic and doesn't require additional disk space (it's a metadata operation). This scenario is essentially impossible on the same filesystem. However, if the .tmp and target are on different filesystems (shouldn't happen since they're in the same directory), rename falls back to copy+delete, which could fail.

**Scenario 3: Disk fills up between successful writes.** The pipeline writes state, then writes archive. If disk fills between state write and archive write, the archive write fails (caught and logged as non-fatal), but state is already saved. On resume, the pipeline skips the archived pass and moves on. No corruption.

**Verdict: PARTIALLY HANDLED.** Fatal writes (state.json) will crash the pipeline cleanly. Non-fatal writes (archives) are caught. But there's no proactive disk space check — the pipeline keeps running until a write fails, which could be mid-pass after spending $ on Claude calls.

**Severity: LOW.** The failure mode is clean (no corruption), but money is wasted. A pre-run disk space check would be helpful.

---

### EC-16: --resume pointing to state.json from different content file

**Code path:** `cli.ts:81-86`
```typescript
if (args.resume) {
  const stateRaw = fs.readFileSync(args.resume, 'utf-8');
  const state = safeJsonParse<Record<string, unknown>>(stateRaw, ...);
  contentPath = state.contentPath as string;
  slug = state.slug as string;
}
```

Then `resume.ts:52-59` checks config hash:
```typescript
const currentConfigHash = computeConfigHash(config as unknown as Record<string, unknown>);
if (state.configHash !== currentConfigHash) {
  throw new ConfigMismatchError(...);
}
```

**BUT WAIT:** The resume flow in `cli.ts` is separate from `resume.ts`. Looking at `pipeline.ts:120-123`:
```typescript
if (config.resume) {
  deps.log('info', 'Resuming pipeline from existing state...');
  state = await deps.loadState(config);
  // ... validates Phase 0 outputs exist
}
```

And `createDefaultDeps` wires `loadState` to `state-manager.ts:loadState`, which only checks schemaVersion and field validation — NOT config hash.

**The resume.ts module with config hash checking is NOT used in the main pipeline flow!** It exists as a standalone module but is never imported by `pipeline.ts` or `cli.ts`.

**Verdict: UNHANDLED.** You can resume with a state.json from a completely different content file. The pipeline will use the old content path from the state, and the old output directory from the config (which is computed from the NEW content file's slug). This creates a mismatch: the state points to old content, but the output directory is for the new content.

**Actually, re-reading cli.ts:81-86:** When resuming, `contentPath` and `slug` are extracted FROM the state file, not from CLI args. And the output dir is computed from `slug` + date. So the pipeline uses the OLD content path and OLD slug from the state. If the old content file still exists at that path, the pipeline resumes correctly with the old content. If the old content was deleted, the pipeline will fail when trying to read it.

**Revised verdict: PARTIALLY HANDLED.** The content path comes from state, so mismatched content is not the issue. The real issue is that config hash validation (resume.ts) is dead code — not wired into the pipeline. A user could resume a state.json that was created with different pipeline constants (different model, different budget, etc.) and the pipeline would silently use the new constants with the old state.

**Severity: MEDIUM.** Config drift during resume could cause unexpected behavior (e.g., resuming a budget-paused run after increasing BUDGET_CAP — this is actually desirable, so maybe LOW).

---

### EC-17: --resume but output directory was deleted

**Code path:** If the output directory was deleted, `loadState` tries to read `path.join(cfg.outputDir, '_orchestrator', 'state.json')` — but `cfg.outputDir` is computed from the slug (which comes from the state file's path). Wait — `--resume` takes the state.json PATH, not a content path. Let me re-trace.

`cli.ts:81-86`: Resume reads the state.json at the user-provided path, extracts `contentPath` and `slug`. Then `cli.ts:109-111`: `outputDir` is computed from `slug + date`. If the original run was yesterday and today is different, the output dir changes!

**Then `pipeline.ts:120-123`:** `deps.loadState(config)` reads from `path.join(cfg.outputDir, '_orchestrator', 'state.json')` — which is the NEW computed output dir, not the user-provided resume path!

**This is a bug:** The user passes `--resume /path/to/old/state.json`, but the pipeline tries to read state from a DIFFERENT path computed from the slug+date. If the date changed, the state won't be found.

**Actually, wait.** Looking more carefully at `cli.ts:109-110`:
```typescript
const dateStr = new Date().toISOString().slice(0, 10);
const outputDir = path.join(projectRoot, 'ephemeral', 'builds', `${slug}-${dateStr}`);
```

If the original run was on 2026-02-27 and resume is on 2026-02-28, the output dir changes from `slug-2026-02-27` to `slug-2026-02-28`. The state.json the user passed lives in the old dir, but `loadState` reads from the new dir. The new dir doesn't exist. `readFileChecked` throws `FileNotFoundError`.

**Verdict: BUG — date-dependent resume breakage.** Resume only works if resumed on the same calendar day. Resuming the next day creates a new output directory and fails to find state.

**Severity: HIGH.** A long-running pipeline that gets interrupted overnight cannot be resumed. The user sees "File not found" with no guidance. The state.json they pointed to with --resume is ignored after extracting contentPath and slug.

**Suggested fix:** When `--resume` is provided, derive `outputDir` from the STATE FILE'S parent directory (grandparent of the state file, since it's at `outputDir/_orchestrator/state.json`), not from slug+date.

---

### EC-18: Pipeline runs for 24+ hours

**Code path:** `claude-cli.ts:37` — `DEFAULT_TIMEOUT_MS = 600_000` (10 minutes per call). There's no TOTAL pipeline timeout.

**What happens:** Each Claude call times out after 10 minutes. If Claude is slow but responds within 10 minutes, the pipeline continues. 56 corpus passes + 3 PA cycles at 10 min each = ~560 minutes (9.3 hours). With retries and PA auditors (8 parallel + 1 sequential per cycle), a maximal run could take 20+ hours.

**Issues with 24+ hour runs:**
1. **No heartbeat/watchdog.** If the pipeline hangs (e.g., Playwright deadlock), there's nothing to detect it.
2. **Date-based output dir.** If the run crosses midnight, the date changes but the output dir was computed at startup. This is fine — the dir was already created.
3. **Budget accumulation.** 24+ hours of Opus calls would cost well above the $250 cap. Budget checks happen between passes (`phase-router.ts:checkBudget`), so the pipeline would pause after exceeding the cap.
4. **Memory.** State is immutable — each mutation creates a new object with spread. After 56 passes, the state object contains 56 PassRecord entries, each with arrays and strings. Estimated memory: ~500KB. Not a problem.

**Verdict: MOSTLY HANDLED.** Budget cap prevents runaway spending. Individual calls timeout. State is saved between passes for resume. The only gap is no watchdog for hangs.

**Severity: LOW.**

---

## Category 4: Concurrency Edge Cases

### EC-19: 8 auditors + 1 integrative all writing to _pa/ directory simultaneously

**Code path:** `auditor-spawner.ts:182-209`. All 8 auditors are spawned via `Promise.allSettled`. Each writes to a unique file: `auditor-a.md`, `auditor-b.md`, etc.

**File system safety:** Each auditor writes to its OWN uniquely-named file. There's no shared file. `fs.writeFileSync` is atomic for small files on most filesystems (written in a single system call).

**Directory creation:** `ensureDir(paDir)` is called ONCE before spawning, not per-auditor. `mkdirSync({recursive: true})` is idempotent.

**Verdict: HANDLED.** No shared file contention. Each auditor writes to a distinct path. The directory is pre-created.

**Severity: NONE.**

---

### EC-20: forceKill sends SIGKILL to a PID that was recycled

**Code path:** `claude-cli.ts:149-157`
```typescript
function forceKill(): void {
  try {
    if (child.pid) process.kill(-child.pid, 'SIGKILL');
  } catch {
    try { child.kill('SIGKILL'); } catch { /* already dead */ }
  }
}
```

**PID recycling scenario:** The Claude child process exits. Its PID is recycled by the OS for a new, unrelated process. Then `forceKill` is called (e.g., from the timeout handler which runs 5 seconds after SIGTERM).

**Analysis:** `process.kill(-child.pid, 'SIGKILL')` sends SIGKILL to the process GROUP, not just the PID. If the PID was recycled, the new process is likely in a DIFFERENT process group (new processes get their own group unless explicitly joining another). So `kill(-pid)` would fail with ESRCH (no such process group) and be caught silently.

**But:** What if the recycled PID happened to be in a process group that's still alive? This is extremely unlikely on macOS (PIDs increment monotonically and wrap around at ~99999). The time window between child exit and forceKill is 5 seconds (the grace period timer). PID recycling within 5 seconds requires ~99999 process creations in 5 seconds, which is not realistic.

**Additional safety:** The `activeChildren` set tracks child processes. When the child exits (via `close` event), `trySettle` calls `settle` which calls `activeChildren.delete(child)`. But `forceKill` doesn't check `activeChildren` — it acts on the `child` object directly.

**Verdict: THEORETICALLY VULNERABLE but practically safe.** The PID recycling window is too small. The `child.pid` check prevents null PIDs. The catch blocks prevent crashes. On Linux, the risk is slightly higher (PID namespace recycling is faster), but still negligible.

**Severity: NEGLIGIBLE.** Not worth fixing.

---

### EC-21: Ctrl+C during file write (atomicWriteFile guarantees)

**Code path:** `utils.ts:15-18`
```typescript
export function atomicWriteFile(filePath: string, data: string): void {
  const tmpPath = filePath + '.tmp';
  fs.writeFileSync(tmpPath, data, 'utf-8');
  fs.renameSync(tmpPath, filePath);
}
```

**Ctrl+C behavior:** SIGINT is delivered to the process. `claude-cli.ts:57` has a handler:
```typescript
process.on('SIGINT', () => { cleanup(); process.exit(130); });
```

The cleanup kills child processes. Then `process.exit(130)` terminates immediately. If SIGINT arrives between `writeFileSync` and `renameSync`:
- The `.tmp` file exists with the new data
- The original file still has the old data
- The `.tmp` file is orphaned on disk

On next run, the `.tmp` file is harmlessly overwritten. The original file is intact.

**If SIGINT arrives during `writeFileSync`:** The write is interrupted. The `.tmp` file may be partially written. The original file is intact. On next run, the partial `.tmp` is overwritten.

**If SIGINT arrives during `renameSync`:** On POSIX, `rename` is atomic. It either completes or doesn't. The original file is either old or new, never corrupted.

**Verdict: HANDLED.** The atomic write pattern provides exactly the guarantee needed. Ctrl+C at any point leaves either the old file or the new file, never a corrupted intermediate.

**One caveat:** The orphaned `.tmp` files consume disk space. Over many interrupted runs, they accumulate. But each is overwritten by the next successful write, so only one `.tmp` per file can exist.

**Severity: NONE.**

---

## Category 5: Resource Exhaustion

### EC-22: 100+ conviction entries (FIFO cap)

**Code path:** `conviction-manager.ts:32-57`
```typescript
export function addConviction(state, newEntry) {
  let layer = [...state.convictionLayer, entry];
  if (layer.length > MAX_CONVICTION_ENTRIES) {
    layer.sort(...)
    layer = layer.slice(layer.length - MAX_CONVICTION_ENTRIES);
  }
  return { ...state, convictionLayer: layer, convictionEntryCount: state.convictionEntryCount + 1 };
}
```

`MAX_CONVICTION_ENTRIES` is 10. The layer is capped at 10 entries. But `convictionEntryCount` is a monotonically increasing counter — it tracks TOTAL entries ever added, not current count.

**History concern:** The `convictionEntryCount` grows unboundedly, but it's just a number (8 bytes). No array accumulation. The `convictionLayer` array is capped at 10.

**Downstream:** `formatConvictionLayer` iterates the layer (max 10 entries). `trimIfNeeded` trims to half (5 entries) if over token budget. All O(1) or O(10).

**Verdict: HANDLED.** The FIFO cap works correctly. Old entries are dropped. No unbounded growth.

**Severity: NONE.**

**Side note:** The `discoveryLog` array (state.discoveryLog) has `MAX_DISCOVERY_ENTRIES = 100` defined in constants but is NEVER enforced in code. Looking at `pass-executor.ts:233-239`:
```typescript
state = {
  ...state,
  discoveryLog: [...state.discoveryLog, ...discoveryEntries],
  discoveryEntryCount: state.discoveryEntryCount + discoveryEntries.length,
};
```

No cap is applied. Over 56 passes, if each pass produces 5 discovery entries, the log grows to 280 entries. This is serialized to state.json on every save. At ~100 chars per entry, that's ~28KB — negligible.

**Discovery log cap bug severity: NEGLIGIBLE.** The constant exists but isn't enforced. The actual growth is bounded by the number of passes (56 max in Phase A).

---

### EC-23: 50+ PA cycles (stall detection verification)

**Code path:** `constants.ts:23` — `MAX_PA_CYCLES = 3`. The Phase B loop in `pipeline.ts:394`:
```typescript
for (let cycle = state.completedPACycles + 1; cycle <= MAX_PA_CYCLES; cycle++) {
```

**Verdict: IMPOSSIBLE.** The loop is bounded by `MAX_PA_CYCLES` (3). Even if stall detection fails, the loop exits after 3 iterations.

**Stall detection itself:** `phase-router.ts:65-83`
```typescript
export function detectStall(paCycleRecords: PACycleRecord[]): boolean {
  if (paCycleRecords.length < STALL_THRESHOLD + 1) return false;
  // ... checks last STALL_THRESHOLD records against baseline
}
```

`STALL_THRESHOLD` is 2. Stall requires 3+ records (2 baseline + 2 window). With MAX_PA_CYCLES=3, stall can trigger on cycle 3 (records from cycles 1, 2, 3). If triggered, forces SHIP.

**Verdict: DOUBLE-BOUNDED.** Max cycles + stall detection both prevent infinite PA loops.

**Severity: NONE.**

---

### EC-24: Template substitution with 200KB+ variable values

**Code path:** `assembler.ts:184-218`. `substituteTemplate` iterates placeholder patterns and calls `text.replaceAll()`. If a variable value is 200KB, the final prompt could be very large.

**Token check:** `trimIfNeeded` is called after substitution. It estimates tokens and attempts trimming if over TOKEN_TRIM (95K tokens = ~380KB). The trim removes conviction entries and valley corpus files. If the oversized variable is CONTENT_MARKDOWN or CASE_STUDY, trimming won't help (those aren't trimmed).

**What happens with a 200KB CASE_STUDY?** The case study (CD-006-pilot-migration.html) is loaded unconditionally via `loadFileOrEmpty`. If it's 200KB (~50K tokens), and content is another 50K tokens, plus corpus files (~30K tokens), the total exceeds TOKEN_FAIL. But `trimIfNeeded` only throws if it's removed 50%+ of corpus files AND still over TOKEN_FAIL. If trimming corpus gets it below TOKEN_FAIL, it proceeds. If not, the function returns the over-limit text WITHOUT throwing.

**The TOKEN_FAIL check is incomplete:** Look at `assembler.ts:302-308`:
```typescript
if (removed >= Math.ceil(fileCount * 0.5) && tokens > TOKEN_FAIL) {
  throw new ValidationError(...);
}
```

This only throws if BOTH conditions are true. If trimming removes 50%+ files but gets below TOKEN_FAIL: fine. If trimming removes less than 50% files but is still above TOKEN_FAIL: NO THROW — the over-limit prompt is used.

**Verdict: PARTIALLY HANDLED.** Very large variable values can exceed token limits. The trim logic has a gap where it returns over-limit text without throwing. The prompt is sent to Claude anyway (Claude can handle it, just suboptimally).

**Severity: LOW.** Claude handles large prompts. The token budget is a quality optimization, not a hard constraint.

---

## Category 6: Additional Discovered Edge Cases

### EC-25: CROSS-SUBSET VERIFY AFTER = [2, 4, 6] with --subset filter

**Code path:** `pipeline.ts:358`:
```typescript
if (shouldRunCrossSubsetVerification(subsetId)) {
```

`cross-subset-verifier.ts` checks if `subsetId` is in `CROSS_SUBSET_VERIFY_AFTER`. If `--subset 2` is used, the pipeline runs ONLY subset 2. After subset 2, it checks for cross-subset verification and finds subsetId=2 in the array. It runs cross-subset verification with only 1 subset's data.

**Verdict: HANDLED but suboptimal.** The cross-subset verifier will receive only 1 checkpoint (S2) instead of 2 (S1, S2). It will still run and produce output, but the "cross-subset" aspect is meaningless with only 1 subset. Money wasted (~$5).

**Severity: NEGLIGIBLE.**

---

### EC-26: readFileChecked on artifact before first builder pass

**Code path:** `pass-executor.ts:67-69`:
```typescript
if (pass.passNumber > 1 && fs.existsSync(state.artifactPath)) {
  currentArtifact = fs.readFileSync(state.artifactPath, 'utf-8');
}
```

For pass 1, `currentArtifact` stays as empty string. This is correct — the first builder creates the artifact from scratch.

**But:** `pipeline.ts:776-781` (verifier diff path):
```typescript
if (pass.passNumber > 1) {
  const prevPassDir = path.join(cfg.outputDir, '_passes', `pass-${String(pass.passNumber - 1).padStart(3, '0')}`);
  const prevBackup = path.join(prevPassDir, 'artifact-backup.html');
  prevArtifact = readFileChecked(prevBackup) ?? '';
}
```

Wait, `readFileChecked` throws `FileNotFoundError` if the file doesn't exist — it doesn't return null. The `?? ''` never applies because the function throws before returning.

Pass 2 is a verifier. It tries to read the backup from pass 1 (`_passes/pass-001/artifact-backup.html`). If pass 1 succeeded, this file exists. If pass 1 failed (no HTML extracted), no backup was written. `readFileChecked` throws.

**Verdict: BUG.** If pass 1 fails (no HTML produced), pass 2 (verifier) crashes trying to read pass 1's backup. The error propagates up and the entire pipeline fails.

**Severity: MEDIUM.** A single failed builder pass cascades to crash the next verifier. The fix should use `loadFileOrEmpty` or catch `FileNotFoundError`.

---

### EC-27: HTTP server serves stale HTML during PA cycle

**Code path:** `pipeline.ts:846-856`:
```typescript
async captureScreenshots(artifactPath, outputDir, cfg) {
  const server = await startArtifactServer(artifactPath);
  try {
    const manifests = await capture(server.url, outputDir);
    return manifests.map(m => m.path);
  } finally {
    server.kill();
  }
}
```

`http-server.ts:44`:
```typescript
const html = fs.readFileSync(htmlPath, 'utf-8');
```

The HTML is read ONCE when the server starts and served from memory. If the artifact file changes on disk while the server is running (e.g., another process writes to it), the server serves stale content.

**Is this a real scenario?** During PA, no other process should be writing to the artifact. The pipeline is single-threaded and PA happens after corpus integration. But with EC-07 (concurrent runs), this could happen.

**Verdict: HANDLED for single-run case.** The server reads the artifact once and serves it consistently across all viewport screenshots. This ensures all screenshots are from the same artifact version.

**Severity: NONE (for single runs).** Actually a FEATURE — consistent snapshots across viewports.

---

### EC-28: Weaver produces no JSON block

**Code path:** `weaver-spawner.ts:136-200`. `parseWeaverVerdict` searches for ` ```json ``` ` blocks. If none found:
```typescript
if (candidates.length === 0) {
  throw new OrchestratorError(
    'Weaver response does not contain a ```json block with WeaverVerdict',
    'invalid-response',
  );
}
```

This propagates to `pipeline.ts:466-468`:
```typescript
} catch (error) {
  deps.log('error', `Weaver failed: ${error}`);
  throw error;
}
```

The weaver failure is FATAL — it's not caught at the PA cycle level. The pipeline crashes.

**Verdict: PARTIALLY HANDLED.** The error is detected but crashes the pipeline instead of gracefully handling it (e.g., defaulting to REFINE or retrying the weaver).

**Severity: MEDIUM.** A single weaver formatting error (common with LLMs) terminates the entire pipeline. This could happen after $100+ of corpus integration work. The weaver should be retried at least once.

---

## Summary Table

| ID | Scenario | Handled? | Severity | Category |
|----|----------|----------|----------|----------|
| EC-01 | Empty content file | YES | NONE | Input |
| EC-02 | 5MB content file | PARTIAL | LOW | Input |
| EC-03 | Whitespace-only content | NO | LOW | Input |
| EC-04 | Binary content | PARTIAL | LOW | Input |
| EC-05 | Special chars in path | YES | LOW | Input |
| EC-06 | Symlink content | YES | NONE | Input |
| EC-07 | Concurrent runs | NO | MEDIUM | Input |
| EC-08 | is_error response | PARTIAL | LOW | Response |
| EC-09 | Empty result string | YES | NONE | Response |
| EC-10 | Template variable injection | YES | NONE | Response |
| EC-11 | MAX_STDOUT boundary | YES | NONE | Response |
| EC-12 | claude not on PATH | YES | NONE | Response |
| EC-13 | stderr with exit 0 | YES | NONE | Response |
| EC-14 | Wrong schema version | YES | NONE | State |
| EC-15 | Disk full | PARTIAL | LOW | State |
| EC-16 | Resume mismatched content | PARTIAL | MEDIUM | State |
| EC-17 | Resume deleted output dir | BUG | HIGH | State |
| EC-18 | 24+ hour run | MOSTLY | LOW | State |
| EC-19 | Parallel auditor writes | YES | NONE | Concurrency |
| EC-20 | PID recycling on forceKill | THEORETICAL | NEGLIGIBLE | Concurrency |
| EC-21 | Ctrl+C during write | YES | NONE | Concurrency |
| EC-22 | 100+ conviction entries | YES | NONE | Resource |
| EC-23 | 50+ PA cycles | IMPOSSIBLE | NONE | Resource |
| EC-24 | 200KB+ variable values | PARTIAL | LOW | Resource |
| EC-25 | Cross-subset with --subset | SUBOPTIMAL | NEGLIGIBLE | Additional |
| EC-26 | Verifier after failed builder | BUG | MEDIUM | Additional |
| EC-27 | Stale HTTP server content | YES (feature) | NONE | Additional |
| EC-28 | Weaver produces no JSON | PARTIAL | MEDIUM | Additional |

---

## Top 5 Issues by Severity

1. **EC-17 (HIGH): Resume is date-dependent.** Output directory includes today's date, so `--resume` breaks if resumed the next day. The state.json the user passes is only used for content path extraction — state is re-loaded from a date-dependent path.

2. **EC-07 (MEDIUM): Concurrent runs silently corrupt.** No lock file or unique output directory suffix. Two runs on the same content on the same day produce silent data corruption.

3. **EC-26 (MEDIUM): Verifier crashes after failed builder.** If builder pass N fails, verifier pass N+1 crashes trying to read the missing artifact backup. `readFileChecked` throws instead of returning fallback.

4. **EC-28 (MEDIUM): Weaver formatting error is fatal.** A single missing JSON block in the weaver response terminates the entire pipeline after potentially $100+ of work. No retry, no fallback.

5. **EC-16 (MEDIUM): resume.ts config validation is dead code.** The `resumePipeline` function with config hash checking is never called from the main pipeline flow. Config drift during resume is undetected.

---

## Defenses That Worked Well

1. **atomicWriteFile** — Clean crash recovery, no corruption on Ctrl+C
2. **V-05 template injection defense** — Proper escaping of variable values
3. **FIFO conviction cap** — Bounded growth, correct sort order
4. **MAX_PA_CYCLES hard cap** — Loop cannot run away
5. **stdout overflow protection** — 50MB cap with clean rejection
6. **Per-auditor unique filenames** — No write contention in parallel PA
7. **Content binary detection** — Null byte check catches most binary formats
8. **Retry with category filtering** — Only retries transient errors, not permanent ones

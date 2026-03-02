# Spawn Lifecycle Bug Fixes — claude-cli.ts

**File:** `tools/deep-build/src/agents/claude-cli.ts`
**Date:** 2026-02-28
**TypeScript verification:** `npx tsc --noEmit` passes clean

---

## Bug 1: stdin pipe errors — no error handler, no backpressure

**Before (line 191):**
```ts
child.stdin.write(options.prompt);
child.stdin.end();
```

**Failure scenario:** If the child process exits or crashes before reading all of stdin (common during startup failures), Node emits an `EPIPE` error on `child.stdin`. With no error handler attached, this triggers an uncaught exception and crashes the entire pipeline — not just the one spawn. Additionally, for very large prompts (100K+ chars), `write()` can return `false` indicating the kernel buffer is full, but this was ignored.

**Fix:**
```ts
// Handle stdin errors — EPIPE expected if child dies before consuming input
child.stdin.on('error', (err) => {
  console.error(`[claude-cli] stdin write error (role: ${options.role}): ${err.message}`);
});

// Backpressure handling for large prompts
const canContinue = child.stdin.write(options.prompt);
if (!canContinue) {
  child.stdin.once('drain', () => child.stdin.end());
} else {
  child.stdin.end();
}
```

The stdin error handler logs but does NOT settle the promise — the real exit reason comes from `close` or `error` on the child process itself. The backpressure check prevents memory doubling when prompts exceed the kernel pipe buffer (~65KB on macOS).

---

## Bug 2: Timeout race condition — double settlement and wrong kill check

**Before (lines 161-173):**
```ts
const timer = setTimeout(() => {
  child.kill('SIGTERM');
  setTimeout(() => {
    if (!child.killed) {        // <-- BUG: child.killed means "we sent a signal", NOT "process is dead"
      child.kill('SIGKILL');
    }
  }, 5000);
  settled = true;               // <-- BUG: raw flag mutation, no clearTimeout
  reject(...);
}, timeout);
```

**Failure scenario:**
1. `child.killed` is set to `true` by Node immediately when `kill('SIGTERM')` is called — it does NOT mean the process actually exited. So the SIGKILL fallback **never fires** because `child.killed` is always `true` after SIGTERM.
2. Setting `settled = true` and calling `reject()` directly bypasses `clearTimeout(timer)` — the timer is already firing so this is technically fine, but the pattern is fragile. If `trySettle()` races in before `settled = true` is read (not possible in single-threaded JS, but the code shape is misleading).

**Fix:**
```ts
const timer = setTimeout(() => {
  if (settled) return;
  try { child.kill('SIGTERM'); } catch { /* already dead */ }
  setTimeout(() => {
    if (child.exitCode === null) {  // <-- CORRECT: exitCode is null until process actually exits
      forceKill();
    }
  }, 5000);
  settle({ reject: new ClaudeInvocationError(...) });
}, timeout);
```

Using `child.exitCode === null` correctly tests whether the process is still running. The `settle()` function is now the single settlement path (see consolidation below).

---

## Bug 3: Orphan processes — no cleanup on parent exit

**Before:** No tracking. If the pipeline process crashed or got killed, spawned `claude` children would continue running indefinitely, consuming API credits and machine resources.

**Fix:** Added module-level process tracking:
```ts
const activeChildren = new Set<ChildProcess>();

let cleanupRegistered = false;
function registerCleanup(): void {
  if (cleanupRegistered) return;
  cleanupRegistered = true;
  const cleanup = () => {
    for (const child of activeChildren) {
      try { child.kill('SIGKILL'); } catch { /* best effort */ }
    }
  };
  process.on('exit', cleanup);
  process.on('SIGTERM', () => { cleanup(); process.exit(143); });
  process.on('SIGINT', () => { cleanup(); process.exit(130); });
}
```

Every spawned child is added to `activeChildren` on creation and removed on settlement. The `exit` handler fires on normal exit, `SIGTERM` on graceful shutdown, `SIGINT` on Ctrl+C. Exit codes 143 (128+15) and 130 (128+2) follow Unix conventions.

---

## Bug 4: Missing transient error categories

**Before:** Only `rate-limit`, `model-overload`, and `timeout` triggered retries. Network-level transient errors like `ECONNRESET`, `502`, `ECONNREFUSED`, `socket hang up` were classified as `unknown` and aborted the retry loop immediately.

**Fix:** Added `isTransientNetworkError()`:
```ts
function isTransientNetworkError(text: string): boolean {
  const lower = text.toLowerCase();
  return lower.includes('econnreset') ||
    lower.includes('econnrefused') ||
    lower.includes('etimedout') ||
    lower.includes('connection reset') ||
    lower.includes('502') ||
    lower.includes('bad gateway') ||
    lower.includes('socket hang up') ||
    lower.includes('epipe');
}
```

Classification priority in `trySettle()`: rate-limit > overload > network-error > unknown.

Retry logic updated to include `network-error` in retryable categories.

---

## Bug 5: Unbounded stdout buffer — potential OOM

**Before (line 154):**
```ts
child.stdout.on('data', (chunk: Buffer) => stdoutChunks.push(chunk));
```

**Failure scenario:** If `claude -p` produces runaway output (e.g., tool loop generating megabytes of debug output), the buffer accumulates without limit. At 100MB+, Node's heap would be exhausted, crashing the entire pipeline (not just this one spawn).

**Fix:** Added a 50MB cap:
```ts
const MAX_STDOUT_BYTES = 50 * 1024 * 1024;

child.stdout.on('data', (chunk: Buffer) => {
  stdoutBytes += chunk.length;
  if (stdoutBytes > MAX_STDOUT_BYTES) {
    if (!stdoutOverflow) {
      stdoutOverflow = true;
      forceKill();
    }
    return; // Stop accumulating
  }
  stdoutChunks.push(chunk);
});
```

50MB is generous — typical `claude -p` JSON output is under 500KB. The overflow flag triggers `invalid-response` error on settlement, which does NOT retry (correct: if output is too large, retrying would just produce the same oversized output).

---

## Bug 6: `child.kill()` doesn't kill descendants + process group handling

**Before (lines 162/165):**
```ts
child.kill('SIGTERM');
// ...
child.kill('SIGKILL');
```

**Failure scenario:** `claude` may spawn its own child processes (sub-agents, tool runners). `child.kill()` only signals the direct child, not its descendants. Zombie subprocess trees accumulate. Also, `child.kill()` returns `false` if the signal can't be delivered, but this was silently ignored.

**Fix:**
1. Spawn with `detached: true` to create a process group:
```ts
const child = spawn('claude', args, { ..., detached: true });
```

2. Use process group kill (`kill(-pid)`) for force-kill:
```ts
function forceKill(): void {
  try {
    if (child.pid) process.kill(-child.pid, 'SIGKILL');
  } catch {
    try { child.kill('SIGKILL'); } catch { /* already dead */ }
  }
}
```

`process.kill(-pid, signal)` sends the signal to every process in the process group. Falls back to direct `child.kill()` if the group kill fails (e.g., on Windows where process groups work differently).

---

## Structural fix: Settlement consolidation

**Before:** `settled = true` was set in 3 places (`trySettle`, timeout handler, error handler) with `clearTimeout` and `reject`/`resolve` scattered across them. This made reasoning about the settlement state machine difficult and created potential for subtle bugs.

**Fix:** Introduced a single `settle()` function that encapsulates the entire settlement logic:
```ts
function settle(result: { resolve: string } | { reject: Error }): void {
  if (settled) return;
  settled = true;
  clearTimeout(timer);
  activeChildren.delete(child);
  if ('resolve' in result) resolve(result.resolve);
  else reject(result.reject);
}
```

Every code path now calls `settle()` instead of directly manipulating `settled`/`clearTimeout`/`reject`/`resolve`. This makes it impossible to forget `clearTimeout` or `activeChildren.delete`, and guarantees exactly-once settlement.

---

## Summary of changes

| Issue | Severity | Type | Lines changed |
|-------|----------|------|---------------|
| stdin EPIPE crash | **Critical** | Missing error handler | +8 |
| Timeout SIGKILL never fires | **High** | Logic bug (`child.killed` vs `child.exitCode`) | ~15 |
| Orphan process leak | **High** | Missing cleanup | +20 |
| Network errors not retried | **Medium** | Missing category | +15 |
| Unbounded stdout OOM | **Medium** | Missing bounds check | +12 |
| Kill doesn't reach descendants | **Medium** | Missing `detached` + process group kill | +10 |
| Settlement consolidation | **Low** | Structural improvement | refactored |

Total: ~80 lines added/changed, 0 lines of dead code introduced. `npx tsc --noEmit` passes clean.

# PA Subsystem Bug Fixes

**Files examined:** 6 PA files + 5 supporting files + pipeline.ts orchestration layer
**Files modified:** 5 (http-server.ts, screenshot-capture.ts, auditor-spawner.ts, weaver-spawner.ts, pipeline.ts, mini-pa-spawner.ts)
**TypeScript verification:** `npx tsc --noEmit` passes cleanly after all fixes

---

## Issue 1: HTTP Server Lifecycle — Connection Leak on Kill

**File:** `src/pa/http-server.ts`

**Problem:** `server.close()` only stops accepting new connections. Existing keep-alive connections (from Playwright, which uses HTTP/1.1 with keep-alive by default) remain open, causing the server port to stay bound. If the pipeline proceeds to `runGates` which starts another server, `findAvailablePort` will skip over the "closed" port, but the old server process may hang.

**Fix:** Track all active socket connections via `server.on('connection')`. On `kill()`, destroy all connections before calling `server.close()`. This ensures the port is freed immediately.

**Port conflict analysis:** `captureScreenshots` and `runGates` each start their own HTTP server, but they run sequentially in `runPhaseB` (lines 379-397 and 393-400 in pipeline.ts), so no actual port conflict occurs in practice. `findAvailablePort` starts from 8765 and probes up to 8864, which provides sufficient range.

---

## Issue 2: Screenshot Capture — Missing Error Recovery

**File:** `src/pa/screenshot-capture.ts`

**Problems:**
1. If `page.goto()` fails, the browser context was not closed before re-throwing, causing a context leak.
2. `page.evaluate(() => document.fonts.ready)` has no timeout and could hang indefinitely on malformed HTML.
3. `page.screenshot()` had no explicit timeout.

**Fixes:**
1. Close context before re-throwing navigation errors.
2. Wrap `document.fonts.ready` in try/catch — font load timeout is non-fatal (proceed with screenshot).
3. Add `timeout: 30_000` to `page.screenshot()` call, with proper context cleanup on timeout.

**Playwright not installed:** Already handled — `chromium.launch()` is wrapped in try/catch that throws `PlaywrightError` with the original error message.

---

## Issue 3: Auditor Success Validation — Empty Reports Count as Success

**File:** `src/pa/auditor-spawner.ts`

**Problem:** An auditor that returns via `spawnClaude` without error but produces empty or trivially short output (e.g., "I'll analyze this...") is counted as `success: true`. With `MIN_SUCCESSFUL_AUDITORS = 5`, if 5 auditors return garbage and 3 fail, the weaver proceeds with 5 worthless reports.

**Fix:** Added `substantiveCount` validation: reports shorter than 100 chars are flagged as low-quality. The minimum threshold check now uses `substantiveCount` instead of `successCount`, ensuring the weaver receives at least 5 reports with actual content.

---

## Issue 4: Weaver AuditorId Hardcoded to 'A' [CRITICAL BUG]

**File:** `src/orchestrator/pipeline.ts` (spawnWeaver dep, ~line 942)

**Problem:** All auditor reports were constructed with `auditorId: 'A' as const`, meaning the weaver received 9 reports all labeled "Auditor A." The weaver prompt says "Auditor A: Soul & Identity" for every report. The weaver cannot:
- Distinguish which auditor found which issue
- Build a convergence map (all sources show "A")
- Identify cross-cutting patterns by auditor domain
- Populate `auditorSources` in `top5Fixes` correctly

Additionally, `focusArea` was empty string and `reportText` was empty string (the weaver was expected to re-read from disk, but the prompt embeds the reports inline from `auditorReports.filter(r => r.success)`).

**Fix:** Reconstruct `AuditorReport` objects from filenames. The filename pattern `auditor-{id}.md` (e.g., `auditor-a.md`, `auditor-i.md`) contains the auditor ID. Extract it, look up the focus area from `AUDITOR_FOCUS`, and read the actual report text from disk. This gives the weaver correctly attributed reports.

---

## Issue 5: Weaver JSON Parsing — Multi-Block Ambiguity

**File:** `src/pa/weaver-spawner.ts`

**Problem:** `parseWeaverVerdict` always takes the LAST ```json block. If the weaver outputs:
1. A draft/planning JSON block (e.g., partial calculations)
2. A different JSON block (e.g., example or reference)
3. The final WeaverVerdict

...it correctly picks #3. But if the weaver outputs the verdict first and then a correction or addendum JSON, it would pick the addendum. More critically, if the last JSON block is NOT a WeaverVerdict (e.g., it's a gate summary), the function would fail with confusing "missing field" errors.

**Fix:** Search candidates from last to first, but validate each candidate actually contains `verdict` and `pa05Score` fields before accepting it. This ensures we find the actual WeaverVerdict even if other JSON blocks appear later in the response. If no candidate matches, fall through with a clear error listing found keys vs expected fields.

---

## Issue 6: guardrailsPath — Hardcoded Path with No Existence Check

**File:** `src/orchestrator/pipeline.ts` (spawnAuditors dep, line 852)

**Problem:** `guardrailsPath` is `path.join(cfg.projectRoot, 'ephemeral', 'va-extraction', 'pa-guardrails.md')`. If this file doesn't exist (e.g., VA extraction was never run, or the file was moved), `readFileChecked` inside `buildAuditorPrompt` throws for ALL 8 auditors simultaneously. Since they're in `Promise.allSettled`, all 8 return rejected, and the pipeline throws with "All 8 parallel auditors failed."

The actual error message is buried: "File not found: /path/to/pa-guardrails.md" repeated 8 times in stderr, but the thrown error just says "all failed." Very confusing.

**Fix:** Added an explicit existence check with a clear error message BEFORE spawning auditors. The error now says exactly what's missing and suggests running VA extraction first.

---

## Issue 7: Screenshot Path Access — Missing --add-dir for Screenshot Directory

**Files:** `src/pa/auditor-spawner.ts`, `src/pa/mini-pa-spawner.ts`

**Problem:** Screenshots are saved to `{outputDir}/_screenshots/cycle-{N}/` but auditors' `additionalDirs` only included `outputDir` (the `_pa` subdirectory) and `path.dirname(htmlPath)`. The screenshot directory is a sibling under the main output directory, not a subdirectory of either `additionalDirs` entry.

With `--add-dir`, Claude CLI grants read access to the specified directories. If screenshots are in a directory not covered by any `--add-dir` entry, the spawned auditor cannot read them with the `Read` tool, causing all screenshot reading to fail silently (auditor proceeds without seeing any screenshots).

**Fix:** Extract unique directories from `screenshotPaths[].path`, add them to `additionalDirs`. Applied to both full PA (auditor-spawner.ts) and mini-PA (mini-pa-spawner.ts), and to the integrative auditor as well.

---

## Additional Finding: Dead Code — pa-router.ts

**File:** `src/pa/pa-router.ts`

`pa-router.ts` contains `routePA` and `detectStall` functions that are duplicates of `routePhaseB` and `detectStall` in `src/orchestrator/phase-router.ts`. No file imports from `pa-router.ts`. This is dead code, likely an earlier version before the logic was moved to `phase-router.ts`. Not fixed (not a bug), but noted for cleanup.

---

## Summary of Changes

| File | Change | Risk |
|------|--------|------|
| `pa/http-server.ts` | Track+destroy connections on kill | Low — strictly more thorough cleanup |
| `pa/screenshot-capture.ts` | Context cleanup on error, font timeout, screenshot timeout | Low — adds resilience, no behavior change on happy path |
| `pa/auditor-spawner.ts` | Substantive report validation, screenshot dir in additionalDirs | Low — only affects edge case (short/empty reports) |
| `pa/weaver-spawner.ts` | Validate JSON blocks contain verdict fields before accepting | Low — same result when there's exactly 1 JSON block |
| `orchestrator/pipeline.ts` | Fix auditorId reconstruction from filenames, guardrails existence check | **Medium** — changes weaver input data (was broken before) |
| `pa/mini-pa-spawner.ts` | Screenshot dir in additionalDirs | Low — adds missing directory access |

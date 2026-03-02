# Pipeline Improvements Tracker

Running list of improvements across all dimensions, maintained during the full pipeline run.

## Logging & Observability

1. **Phase/step progress indicators** — Currently just `INFO:` prefix. Should have timestamps, elapsed time, % progress, and clear visual separators between phases.
2. **Cost tracking per phase** — TC derivation reports $0.00 (Max subscription), but should still track token usage per call for budgeting.
3. **Prompt size warnings** — The assembler logs chars/tokens but doesn't warn when approaching context limits. Should flag when >80% of estimated window.
4. **Pass outcome summary table** — At end of each subset, print a table: Pass | Role | Status | Cost | Duration | Artifact Size
5. **Structured JSON log alongside human log** — For programmatic analysis of pipeline runs.

## Execution Robustness

6. **Supervisor pipe issue** — `| tee` in supervisor.sh breaks when run via Claude Code background tasks. The pipe doesn't buffer correctly. Fix: redirect to file directly, tail separately.
7. **Fresh directory auto-suffix** — IMPLEMENTED: Now appends `-2`, `-3` etc when output dir exists and not resuming.
8. **Artifact-via-disk** — IMPLEMENTED: Builder reads artifact from disk via Read tool instead of having 67KB embedded in prompt. Saves ~67K chars.
9. **Content chunking** — IMPLEMENTED: Large content split by h2 boundaries into ~12K char chunks, one per builder pass.
10. **Max-turns calibration** — Builder at 15, verifier at 3. May need adjustment based on actual turn counts observed.
11. **Timeout calibration** — 30-minute timeout may be too generous or too tight depending on pass complexity.
12. **Rate limit recovery** — Pipeline crashes on rate limits. Should implement exponential backoff at the pass level, not just the individual call level.

## Output Quality

13. **Verifier prompt context** — Verifier currently sees full artifact in prompt (via `CURRENT_ARTIFACT`). May also need disk-read approach for consistency.
14. **Builder instruction clarity** — The `ARTIFACT_INSTRUCTIONS` tell the builder to Read then Write. Should be even more explicit about preserving all existing sections.
15. **Chunk boundary coherence** — When builder adds chunk 2, does it properly integrate with chunk 1's CSS? Need to verify cross-chunk style consistency.
16. **Zone transition tracking** — No mechanism to verify that builder maintains zone architecture across chunks.

## Architecture

17. **Single-subset vs full-pipeline testing** — Need `--subset 1` test to pass before attempting all 7 subsets.
18. **Checkpoint reliability** — Checkpoints between subsets should be robust enough for resume.
19. **Phase B prerequisites** — Screenshot capture requires Playwright chromium installed. Should auto-check and install.
20. **Error classification** — Pipeline should distinguish recoverable errors (rate limit, timeout) from fatal errors (missing files, type errors).

## Instrumentation

21. **Token usage per call** — Track input/output tokens for each `claude -p` call to understand context window usage.
22. **Artifact growth curve** — Log artifact file size after each builder pass to track growth.
23. **Pass timing** — Log wall-clock time per pass for performance profiling.
24. **Prompt-to-output ratio** — Track how much of the prompt was "used" (influenced output) vs overhead.

## Visual/UX

25. **Progress bar** — For long runs, a simple progress indicator (pass X of 56, ~Y% complete).
26. **Phase banners** — Clear visual separation between phases with ASCII art or box-drawing characters.
27. **Color-coded log levels** — INFO in default, WARN in yellow, ERROR in red (when output supports ANSI).
28. **Run summary on completion** — Total cost, total time, passes completed, artifact final size, pass success rate.

---

## Fixes Applied This Session

### Fix 1: Artifact-via-disk (builder prompt size)
- **Problem:** Builder prompt embedded 67K+ HTML artifact inline → ~415K char prompt → exceeded context window
- **Fix:** Builder gets Read/Write/Edit tools, reads artifact from disk via `{ARTIFACT_INSTRUCTIONS}`
- **Result:** Prompt reduced from ~415K to ~324K chars (~81K tokens)
- **Files:** `assembler.ts`, `builder-corpus.md`, `constants.ts`

### Fix 2: Verifier CURRENT_ARTIFACT
- **Problem:** Verifier template uses `{CURRENT_ARTIFACT}` but variable wasn't being set after artifact-via-disk change
- **Fix:** Restored `CURRENT_ARTIFACT` in `resolveBuilderVariables()` — verifier still gets it inline (no tools), builder uses `ARTIFACT_INSTRUCTIONS` instead
- **Files:** `assembler.ts`

### Fix 3: error_max_turns recovery
- **Problem:** When builder hits max-turns, `result` is undefined → claude-cli threw error → pass counted as total failure even though builder may have written valid HTML to disk via tool calls
- **Fix:** Detect `error_max_turns` subtype → return response with empty result string → let pass-executor's disk fallback recover the artifact
- **Files:** `claude-cli.ts`

### Fix 4: Builder Edit tool + higher max-turns
- **Problem:** Builder with only Write tool had to output entire 100K+ HTML file in one Write call, exceeding 32K max output tokens. Even with 15 turns, it ran out.
- **Fix:** Added Edit tool to builder's allowed tools. Builder can now make surgical edits (add sections, update CSS) without rewriting the whole file. Max-turns increased to 30.
- **Files:** `constants.ts`, `assembler.ts` (artifact instructions updated to recommend Edit)

### Fix 6: Weaver verdict truncation fallback
- **Problem:** Weaver response truncated at ~8K bytes (claude -p JSON output limit). The verdict JSON block at the end of the response gets cut off. `parseWeaverVerdict()` throws fatal error.
- **Fix:** Added `extractVerdictFromPartialText()` regex fallback that extracts verdict, pa05Score, tier5, and mode from truncated text. Defaults to REFINE if nothing found (conservative).
- **Files:** `weaver-spawner.ts`

### Fix 7: CURRENT_ARTIFACT restored for verifier
- **Problem:** After artifact-via-disk change, verifier template's `{CURRENT_ARTIFACT}` was unresolved. Verifier said "no artifact to read."
- **Fix:** Restored `CURRENT_ARTIFACT` variable in `resolveBuilderVariables()` — loaded inline for verifier, while builder uses separate `ARTIFACT_INSTRUCTIONS`.
- **Files:** `assembler.ts`

### Fix 5: Fresh directory auto-suffix
- **Problem:** Pipeline reused existing output directory → stale artifacts from failed runs
- **Fix:** When output dir exists and not resuming, append `-2`, `-3` etc for unique directory
- **Files:** `cli.ts`

### Fix 8: Double-nested _pa directory
- **Problem:** Weaver report saved to `_pa/_pa/weaver-synthesis.md` instead of `_pa/weaver-synthesis.md`. Pipeline couldn't find weaver report for refine builder, fell back to truncated narrative summary.
- **Root cause:** `pipeline.ts` passes `path.join(cfg.outputDir, '_pa')` as `outputDir` to `spawnWeaver()` and `spawnAuditors()`. Both functions then did `path.join(outputDir, '_pa')` internally → double nesting.
- **Fix:** Changed both `weaver-spawner.ts` and `auditor-spawner.ts` to use `outputDir` directly as `paDir` since it's already the `_pa` directory.
- **Files:** `weaver-spawner.ts`, `auditor-spawner.ts`

### Fix 9: Disk fallback after failed HTML validation
- **Problem:** Pass 7 builder wrote valid HTML to disk via Edit/Write tools, but response text contained only a truncated HTML fragment. Extraction succeeded (DOCTYPE fallback) but validation failed (missing `<head>`, `<body>`). Disk artifact was never checked.
- **Root cause:** Disk fallback only triggered when `html` was null (no extraction at all). When extraction produced invalid HTML, it went straight to validation failure without checking disk.
- **Fix:** After validation failure, check if disk artifact is valid and larger than pre-pass artifact. If so, use disk version.
- **Files:** `pass-executor.ts`

### Fix 10: Gate runner execution model
- **Problem:** Gate runner injected 3,185 lines of JS into browser via `page.evaluate(script)`. Script defined functions using Playwright's Page API (`page.evaluate()`, `page.$()`) which don't exist in browser context. Result: `undefined`.
- **Root cause:** Gate functions were designed to run from Node.js (calling Playwright APIs), not inside the browser. `page.evaluate()` injection was the wrong execution model.
- **Fix:** Use `vm.runInContext()` to load gate functions in Node.js, then call `runGateRunner(page)` passing the real Playwright page object. Added proper sandbox with `console`, `Promise`, etc.
- **Files:** `gate-runner.ts`

### Fix 11 (deferred): Gate runner Array.isArray cross-context
- **Problem:** Gate runner returns `object` instead of expected array. `vm.createContext` arrays from sandbox fail `Array.isArray()` from outer context.
- **Fix:** Handle array-like objects and wrapped `{ results: [...] }` objects. Convert sandbox arrays to outer-context arrays via `Array.from()`. Better error messages with key inspection.
- **Files:** `gate-runner.ts`
- **Status:** Fixed, awaiting next run to verify

### Fix 12b: Weaver mode regex mismatch
- **Problem:** `extractVerdictFromPartialText()` regex matched modes `FLAT|POLISHED|DESIGNED|FLAGSHIP` but valid WeaverVerdict modes are `FLOOR|COMPOSED|DESIGNED|CEILING|FLAGSHIP`. Could miss valid modes.
- **Fix:** Updated regex to match valid mode enum values.
- **Files:** `weaver-spawner.ts`

### Fix 12: Refine builder context window overflow
- **Problem:** Refine builder prompt was 430K chars (~107K tokens) — embedded CURRENT_ARTIFACT (240K) + CASE_STUDY (100K+) + content + catalogs. Exceeded context window → exit code 1.
- **Fix:** (a) Use artifact-via-disk pattern for refine builder (reads from disk via Read tool). (b) Omit case study, mechanism catalog, components CSS, and tokens CSS for refine pass (not needed for polish). (c) Updated refine-builder.md template to use ARTIFACT_INSTRUCTIONS and Edit tool.
- **Result:** Prompt reduced from ~430K to ~160K chars
- **Files:** `assembler.ts`, `templates/refine-builder.md`

---

## Observations During Run

### Truncation is systemic
ALL `claude -p --output-format json` responses truncate at ~8,146 bytes. This affects:
- 7/9 PA auditor reports (truncated mid-report)
- Integrative auditor (truncated)
- Weaver (verdict JSON block cut off)
- Refine builder (may be truncated too)

The `recoverTruncatedClaudeResponse()` function handles the JSON parsing, but content quality suffers. Auditor reports lose their second half — analysis, scores, recommendations. The weaver loses its structured verdict. This is the single biggest quality bottleneck.

**Potential fix:** Use `--output-format text` instead of JSON, or write responses to a file via tool use. Alternatively, increase the output limit if it's configurable.

### Cost tracking shows $0.00 for everything
Pipeline shows `$0.00` for all calls. This is because the user has a Max subscription and the API reports zero cost. Token counts are more useful for tracking — should log them prominently.

### Refine builder prompt is massive
430K chars (~107K tokens) for the refine builder. This is close to context limits. The refine builder prompt includes the full weaver report + conviction brief + builder reflection + all creative context. May need similar artifact-via-disk approach for the refine builder.

---

## Run Results Comparison

### Run 4 (v4, before fixes)
- Phase A: 6/8 passes (pass 7 failed validation, pass 8 skipped)
- Refine builder cycle 1: CRASHED (430K prompt)
- Refine builder cycle 2: Ran with unresolved vars
- Final: Force-SHIP (stall detected), PA-05: 3.0, 2h 10m, $23.45
- Artifact: 240K bytes, never refined

### Run 5 (v5, all fixes applied)
- Phase A: 8/8 passes ALL PASSED
- Refine builder cycle 1: SUCCESS ($1.80, wrote to disk)
- Refine builder cycle 2: SUCCESS ($1.65, wrote to disk)
- Final: SHIP verdict, PA-05: 4.3, Tier5: 6/8, 1h 40m, $28.79
- Artifact: 252K bytes, successfully refined twice
- PA score trajectory: 3.9 → 3.0 (truncated fallback) → 4.3

### Improvements from fixes
- Pass 7/8 now succeed (disk fallback after validation failure)
- Refine builder works (artifact-via-disk, 430K → 67K prompt)
- Weaver reports saved correctly (_pa fix)
- Full 3-cycle PA hardening with real refinement
- SHIP verdict vs force-SHIP

---

*This document is updated as issues are discovered during the pipeline run.*

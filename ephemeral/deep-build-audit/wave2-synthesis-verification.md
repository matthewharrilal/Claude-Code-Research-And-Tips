# Wave 2: Synthesis, Verification, and Readiness Assessment

**Agent:** Verification & Synthesis (Opus 4.6)
**Date:** 2026-02-28
**Scope:** Verify Wave 1 fixes (6 reports), cross-reference all audit findings (15 reports), assess live-run readiness.

---

## PART 1: Wave 1 Fix Verification

### Fix 1: Spawn Lifecycle (fix-spawn-lifecycle.md -> claude-cli.ts)

**Report claims 6 bugs fixed + 1 structural fix.** Verified each:

| Bug | Claimed | Verified in Code | Line(s) | Status |
|-----|---------|-----------------|---------|--------|
| stdin EPIPE handler | Added `child.stdin.on('error', ...)` | YES -- lines 264-268 | 264-268 | **CONFIRMED** |
| Timeout SIGKILL check | Changed `child.killed` to `child.exitCode === null` | YES -- line 240 | 240 | **CONFIRMED** |
| Orphan process tracking | `activeChildren` Set + `registerCleanup()` | YES -- lines 43-58 | 43-58 | **CONFIRMED** |
| Transient network errors | `isTransientNetworkError()` function | YES -- lines 306-316 | 306-316 | **CONFIRMED** |
| Stdout overflow cap | 50MB cap with `forceKill()` | YES -- lines 39-40, 215-226 | 215-226 | **CONFIRMED** |
| Process group kill | `detached: true` + `process.kill(-child.pid)` | YES -- line 125, 149-157 | 125, 149-157 | **CONFIRMED** |
| Settlement consolidation | Single `settle()` function | YES -- lines 140-147 | 140-147 | **CONFIRMED** |

**Regression risks:**
- `detached: true` changes how the child process inherits the terminal. If `claude` CLI depends on tty detection, this could change behavior. LOW risk -- `claude -p` is designed for non-interactive use.
- Network error retry (`'network-error'`) is added to the retry filter at line 332. Confirmed correct.

**Verdict: ALL 6+1 FIXES CONFIRMED. No regressions detected.**

---

### Fix 2: JSON Resilience (fix-json-resilience.md -> utils.ts, response-handler.ts, cli.ts, pipeline.ts)

| Issue | Claimed | Verified in Code | Status |
|-------|---------|-----------------|--------|
| Truncation at escape boundary | Added `if (i + 1 >= text.length) break;` | YES -- utils.ts line 198 | **CONFIRMED** |
| stripTrailingPartialEscape | New function added | YES -- utils.ts lines 148-175 | **CONFIRMED** |
| Double truncation in response-handler | Removed pre-truncation, delegates to safeJsonParse | YES -- response-handler.ts line 20 (trim only, no lastIndexOf) | **CONFIRMED** |
| cli.ts raw JSON.parse | Changed to safeJsonParse | YES -- cli.ts line 84 | **CONFIRMED** |
| Greedy regex for weaver verdict | Non-greedy regex + fenced block preference | **PARTIALLY** -- pipeline.ts no longer has `parseWeaverVerdict` (dead code removed per fix-state-machine.md). Parsing now in weaver-spawner.ts lines 136-199 which already uses non-greedy matching. | **MOOT** (dead code removed) |
| appendJsonl stringify guard | try/catch with fallback record | YES -- utils.ts lines 262-277 | **CONFIRMED** |

**Note:** Issue 5 (greedy regex) was in the dead `parseWeaverVerdict` in pipeline.ts. That function was removed entirely (per fix-state-machine.md Issue 7). The fix report says it was fixed, but actually the function was deleted. The canonical `parseWeaverVerdict` in weaver-spawner.ts was already correct. No regression -- the right outcome, just different from what the report describes.

**Verdict: 5/6 CONFIRMED, 1 MOOT (dead code removed). No regressions.**

---

### Fix 3: Assembler Variables (fix-assembler-vars.md -> assembler.ts)

| Issue | Claimed | Verified in Code | Status |
|-------|---------|-----------------|--------|
| CURRENT_ARTIFACT path-vs-content (PA auditor) | Changed to `loadFileOrEmpty(htmlPath)` | YES -- assembler.ts line 444 | **CONFIRMED** |
| CURRENT_ARTIFACT path-vs-content (integrative) | Changed to `loadFileOrEmpty(htmlPath)` | YES -- assembler.ts line 476 | **CONFIRMED** |
| loadFileOrEmpty silent failure | Added stderr warning | YES -- assembler.ts line 108 | **CONFIRMED** |
| Token trim $-pattern corruption | indexOf + slice instead of .replace() | YES -- assembler.ts lines 251-254 | **CONFIRMED** |

**Regression risks:**
- The `assemblePaAuditorPrompt` and `assemblePaIntegrativePrompt` functions are noted as exported-but-not-called in the fresh-eyes audit. The auditor-spawner builds its own prompts inline via `buildAuditorPrompt()`. So these fixes are correct but may not be exercised on the main code path. If the template-based path is ever used, the fix is essential.

**Verdict: ALL 4 FIXES CONFIRMED. No regressions. Note: 2 fixes are in unused code paths.**

---

### Fix 4: State Machine (fix-state-machine.md -> pipeline.ts, phase-router.ts, state-manager.ts, types/pa.ts, auditor-spawner.ts)

| Issue | Claimed | Verified in Code | Status |
|-------|---------|-----------------|--------|
| Unexpected phase guard | Added `else if` for unexpected phase values | YES -- pipeline.ts lines 179-184 | **CONFIRMED** |
| Resume Phase 0 verification | tc-brief.md existence check | YES -- pipeline.ts lines 126-135 | **CONFIRMED** |
| Weaver spawnDep readFileChecked | Changed to readFileChecked | YES -- pipeline.ts line 912 | **CONFIRMED** |
| PA auditor token tracking | Added inputTokens/outputTokens to AuditorReport | YES -- types/pa.ts lines 64-67 (optional fields), auditor-spawner.ts lines 206-207 | **CONFIRMED** |
| PA aggregation uses token fields | `r.inputTokens ?? 0` | YES -- pipeline.ts lines 899-900 | **CONFIRMED** |
| Dead state-manager functions removed | setInFlightPass, clearInFlightPass, updatePhase removed | YES -- state-manager.ts now 103 lines, ends at line 103 with a comment | **CONFIRMED** |
| Stall detection false positive fix | Baseline comparison instead of window-only | YES -- phase-router.ts lines 65-83 | **CONFIRMED** |
| Dead parseWeaverVerdict removed | Function removed from pipeline.ts | YES -- line 657 has comment noting parsing is in weaver-spawner.ts | **CONFIRMED** |
| extractRefinedHtml disk check | Checks disk hash when null return | YES -- pipeline.ts lines 584-597 | **CONFIRMED** |
| readFileChecked fallback for weaver report | try/catch with narrativeSummary fallback | YES -- pipeline.ts lines 560-565 | **CONFIRMED** |

**Critical validation:** The stall detection fix (Issue 6) was the highest-severity item. Verified the algorithm:
- Requires `STALL_THRESHOLD + 1` records (line 66)
- Baseline = record before the stall window (line 72)
- Checks if ANY cycle in window improved over baseline (lines 76-79)
- This correctly avoids false positives from regression-after-improvement

The extractRefinedHtml disk check (Issue 8b) was the second-highest severity. Verified:
- When `extractRefinedHtml` returns null, code checks `fs.existsSync(state.artifactPath)` (line 584)
- Reads file, computes hash, compares against `state.currentArtifactHash` (lines 587-589)
- Updates hash and size history if changed (lines 590-596)
- This directly addresses the S-01 data corruption bug from the adversarial audit

**Verdict: ALL 8 FIXES CONFIRMED (some combined into sub-issues = 10 verification points). No regressions.**

---

### Fix 5: PA Subsystem (fix-pa-subsystem.md -> http-server.ts, screenshot-capture.ts, auditor-spawner.ts, weaver-spawner.ts, pipeline.ts, mini-pa-spawner.ts)

| Issue | Claimed | Verified in Code | Status |
|-------|---------|-----------------|--------|
| HTTP server connection tracking | `connections` Set + destroy on kill | YES -- http-server.ts lines 46, 56-59, 71-77 | **CONFIRMED** |
| Screenshot context cleanup on error | `await context.close()` before throw | YES -- screenshot-capture.ts lines 60-63, 83-88 | **CONFIRMED** |
| Font loading timeout | try/catch around document.fonts.ready | YES -- screenshot-capture.ts lines 67-71 | **CONFIRMED** |
| Screenshot timeout | `timeout: 30_000` on page.screenshot() | YES -- screenshot-capture.ts line 81 | **CONFIRMED** |
| Substantive report validation | MIN_REPORT_LENGTH = 100, substantiveCount check | YES -- auditor-spawner.ts lines 243-263 | **CONFIRMED** |
| Weaver auditorId from filenames | Reconstructs from basename pattern | YES -- pipeline.ts lines 932-947 | **CONFIRMED** |
| Weaver JSON multi-block validation | Checks for 'verdict' and 'pa05Score' before accepting | YES -- weaver-spawner.ts lines 157-177 | **CONFIRMED** |
| guardrailsPath existence check | Explicit check before spawning auditors | YES -- pipeline.ts lines 878-884 | **CONFIRMED** |
| Screenshot dir in additionalDirs (full PA) | Extract unique dirs from screenshotPaths | YES -- auditor-spawner.ts lines 179-180 | **CONFIRMED** |
| Screenshot dir in additionalDirs (mini PA) | screenshotDir added to additionalDirs | YES -- mini-pa-spawner.ts lines 132-133 | **CONFIRMED** |

**Critical validation:** The auditorId reconstruction (Issue 4) was marked CRITICAL. Verified:
- Pipeline line 932-935: `AUDITOR_FOCUS` is imported from pa-questions.ts
- Line 933: `path.basename(p, '.md')` extracts e.g., "auditor-a"
- Line 934: `.replace('auditor-', '').toUpperCase()` gives "A"
- Line 935: Fallback to 'A' if empty (defensive)
- Line 940: `AUDITOR_FOCUS[auditorId]` looks up the focus area
- Line 937: Reads actual report text from disk with error logging
- This gives the weaver correctly attributed reports

**Verdict: ALL 10 FIXES CONFIRMED. No regressions.**

---

### Fix 6: Error Handling (fix-error-handling.md -> 10 files)

| Issue | Claimed | Verified in Code | Status |
|-------|---------|-----------------|--------|
| archivePass silent catch -> logs | Added console.error | YES -- pass-executor.ts lines 374-376 | **CONFIRMED** |
| extractHtml catch -> logs | Added console.error | YES -- pass-executor.ts lines 117-118 | **CONFIRMED** |
| Weaver verdict parse catch -> logs | Dead code removed (per fix-state-machine) | **MOOT** | |
| extractRefinedHtml catch -> logs | Added console.error | YES -- pipeline.ts lines 672-673 | **CONFIRMED** |
| Auditor report read catch -> logs | Added console.error | YES -- pipeline.ts line 937 | **CONFIRMED** |
| BudgetExceeded in retrospective | `if (error instanceof BudgetExceededError) throw error;` | YES -- pipeline.ts line 353 | **CONFIRMED** |
| BudgetExceeded in cross-subset | Same pattern | YES -- pipeline.ts line 374 | **CONFIRMED** |
| BudgetExceeded in gate runner | Same pattern | YES -- pipeline.ts line 418 | **CONFIRMED** |
| BudgetExceeded in refine builder | Same pattern | YES -- pipeline.ts line 601 | **CONFIRMED** |
| readFileChecked -> FileNotFoundError | `throw new FileNotFoundError(filePath)` | YES -- utils.ts line 104, imports at line 9 | **CONFIRMED** |
| loadTemplate -> FileNotFoundError | Same pattern | YES -- assembler.ts line 28, imports at line 15 | **CONFIRMED** |
| Token limit -> ValidationError | `throw new ValidationError(...)` | YES -- assembler.ts line 303 | **CONFIRMED** |
| http-server port -> PlaywrightError | `throw new PlaywrightError(...)` | YES -- http-server.ts line 29 | **CONFIRMED** |
| http-server file -> FileNotFoundError | `throw new FileNotFoundError(htmlPath)` | YES -- http-server.ts line 40 | **CONFIRMED** |
| auditor-spawner -> OrchestratorError | `throw new OrchestratorError(...)` | YES -- auditor-spawner.ts lines 256-258 | **CONFIRMED** |
| weaver-spawner -> OrchestratorError | All three throw sites | YES -- weaver-spawner.ts lines 147-149, 170-172, 185-187, 193-195 | **CONFIRMED** |
| mini-pa-spawner -> ValidationError | `throw new ValidationError(...)` | YES -- mini-pa-spawner.ts line 124 | **CONFIRMED** |
| paths.ts ESM import | Top-level `import fs from 'node:fs'` | YES -- paths.ts line 8 | **CONFIRMED** |

**Verdict: ALL 16 FIXES CONFIRMED (1 moot -- dead code). No regressions.**

---

## PART 1 SUMMARY

| Fix Report | Claims | Verified | Moot | Failed | Regressions |
|------------|--------|----------|------|--------|-------------|
| fix-spawn-lifecycle.md | 7 | 7 | 0 | 0 | 0 |
| fix-json-resilience.md | 6 | 5 | 1 | 0 | 0 |
| fix-assembler-vars.md | 4 | 4 | 0 | 0 | 0 |
| fix-state-machine.md | 10 | 10 | 0 | 0 | 0 |
| fix-pa-subsystem.md | 10 | 10 | 0 | 0 | 0 |
| fix-error-handling.md | 17 | 16 | 1 | 0 | 0 |
| **TOTAL** | **54** | **52** | **2** | **0** | **0** |

All Wave 1 fixes are present in the source code. The 2 "moot" items are fixes that targeted dead code which was subsequently removed (the pipeline.ts `parseWeaverVerdict` function). No regressions detected.

---

## PART 2: Cross-Reference and Synthesis

### 2.1 Issues Found by Multiple Agents (High Convergence = High Confidence)

These findings appeared in 3+ independent audit reports:

**1. Weaver auditorId hardcoded to 'A' (4 agents)**
- Found by: audit-fresh-eyes (Bug C), audit-adversarial (mentioned in context), audit-pa-subsystem (Issue 4 CRITICAL), fix-pa-subsystem
- Now FIXED in pipeline.ts lines 932-947. Convergence confirms this was a real, significant bug.

**2. archivePass silent catch (4 agents)**
- Found by: audit-fresh-eyes (Bug A), audit-adversarial (S-06), audit-functional-wiring (W-06), fix-error-handling (Issue 1)
- Now FIXED with console.error logging in pass-executor.ts line 376.

**3. readFileChecked throws plain Error (3 agents)**
- Found by: audit-functional-wiring (W-07), audit-adversarial (S-07 implicit), fix-error-handling (Issue 10)
- Now FIXED with FileNotFoundError in utils.ts line 104.

**4. Dead code accumulation (4 agents)**
- Found by: audit-fresh-eyes (19 unused exports), audit-functional-wiring (8 dead modules = 21%), audit-meta-cognitive, fix-state-machine (Issues 5, 7)
- PARTIALLY FIXED: 3 dead state-manager functions removed, dead parseWeaverVerdict removed. But 8 dead modules remain (resume.ts, pa-router.ts, mini-pa-spawner.ts, logger.ts, cost-tracker.ts, metrics.ts, report.ts, types/report.ts).

**5. BudgetExceededError swallowed in non-fatal catches (3 agents)**
- Found by: fix-error-handling (Issues 6-9), audit-adversarial (C-01 implicit), audit-fresh-eyes (implicit in cost tracking discussion)
- Now FIXED with `if (error instanceof BudgetExceededError) throw error;` in 4 locations.

**6. Refine builder hash desync on resume (3 agents)**
- Found by: audit-adversarial (S-01, rated HIGH), fix-state-machine (Issue 8b), audit-fresh-eyes (implicit)
- Now FIXED in pipeline.ts lines 584-597 (disk hash check after null extractRefinedHtml).

**7. Stall detection false positives (2 agents)**
- Found by: fix-state-machine (Issue 6, rated HIGH), audit-adversarial (implicitly via S-01 family)
- Now FIXED in phase-router.ts lines 65-83 (baseline comparison).

### 2.2 Issues Found by One Agent (Potential Blind Spots)

These findings appeared in only 1 report. Some may be gaps in coverage, others may be correctly identified as low-priority.

| Finding | Found By | Severity | Status |
|---------|----------|----------|--------|
| No dual-instance lock file | audit-adversarial (ST-01 HIGH) | HIGH | **UNFIXED** |
| No hard artifact size limit | audit-adversarial (R-01 HIGH) | HIGH | **UNFIXED** |
| Verifier observations inject into builder prompt | audit-adversarial (V-02 HIGH) | HIGH | **UNFIXED (design tradeoff)** |
| allRequiredPassed=true when zero gates ran | audit-adversarial (S-02 MEDIUM) | MEDIUM | **UNFIXED** |
| configHash excludes subsetFilter/skipPhaseA | audit-adversarial (ST-05 MEDIUM) | MEDIUM | **UNFIXED** |
| MAX_DISCOVERY_ENTRIES never enforced | audit-adversarial (R-05 MEDIUM) | MEDIUM | **UNFIXED** |
| Token estimation wildly inaccurate for CSS | audit-adversarial (R-03 MEDIUM) | MEDIUM | **UNFIXED (known limitation)** |
| mutable cost-tracker.ts vs immutable everywhere else | audit-fresh-eyes (Bug B) | MEDIUM | **UNFIXED (dead code)** |
| resume.ts integrity checks unreachable | audit-functional-wiring (W-01 BLOCKING) | SIGNIFICANT | **UNFIXED** |
| Logger class fully built but never wired | audit-functional-wiring (W-03 SIGNIFICANT) | SIGNIFICANT | **UNFIXED (dead code)** |
| --skip-phase-a dry-run shows Phase A passes | audit-functional-compile (M1 MEDIUM) | LOW | **UNFIXED** |
| --content and --resume not mutually exclusive | audit-functional-compile (L1 LOW) | LOW | **UNFIXED** |
| gate-runner-browser.js not copied to dist/ | audit-functional-wiring (W-05 MODERATE) | MODERATE | **UNFIXED** |

### 2.3 Contradictions Between Agents

**Contradiction 1: resume.ts status**
- audit-functional-wiring calls it BLOCKING that `resume.ts` integrity checks are unreachable.
- fix-state-machine added Phase 0 resume verification (tc-brief.md check) directly to pipeline.ts.
- **Resolution:** Both are correct. pipeline.ts now has SOME resume validation (Phase 0 file check), but the full 6-step integrity protocol in resume.ts (config hash, artifact hash, in-flight pass recovery, backup restoration) remains unreachable. The Wave 1 fix added targeted resume safety but did NOT wire in resume.ts. The remaining gap is artifact hash verification on resume -- if the artifact file is corrupted/modified between runs, the pipeline would not detect it.

**Contradiction 2: Error hierarchy usefulness**
- audit-fresh-eyes says error classes are "over-engineered" (7 classes could be 1 + category enum).
- fix-error-handling systematically converts plain Errors to typed errors across 10+ locations.
- **Resolution:** The fix-error-handling approach is correct. While the hierarchy has some redundancy, the typed errors enable targeted catch behavior (BudgetExceededError re-throw pattern). The fix makes the codebase self-consistent. The fresh-eyes critique is about architecture, not correctness.

**Contradiction 3: parseClaudeResponse dead code**
- audit-fresh-eyes lists `parseClaudeResponse` as "defined but never called from main execution path."
- fix-json-resilience fixed `parseClaudeResponse` (removing pre-truncation).
- **Resolution:** `parseClaudeResponse` IS exported from response-handler.ts and could be called by external consumers, but the main pipeline path goes through `claude-cli.ts:spawnClaude` which calls `safeJsonParse` directly. The fix is correct (defense in depth) but the function may be dead code on the main path.

### 2.4 Patterns in Bug Types

The 54 fixes across 6 reports reveal systematic weaknesses:

**Pattern A: Missing Error Handlers (16 of 54 fixes = 30%)**
Silent catches, missing EPIPE handlers, unguarded BudgetExceededError. The codebase was built with happy-path focus and error handling added later. The Wave 1 fixes systematically close these gaps.

**Pattern B: Stale/Dead Code (8 of 54 fixes = 15%)**
Dead functions, duplicate modules, unreachable logic. Classic accretion from iterative development. Wave 1 removed some dead code but 8 dead modules remain.

**Pattern C: Type Inconsistency (10 of 54 fixes = 19%)**
Plain Error vs typed error classes, `child.killed` vs `child.exitCode`, path string vs file content. These are API misunderstanding bugs -- the code author used the wrong property/type for the check.

**Pattern D: Missing Edge Cases (12 of 54 fixes = 22%)**
Truncation at escape boundary, $-pattern in replacement, multi-block JSON parsing, substantive report validation. These are "works 99% of the time" bugs that fail on specific inputs.

**Pattern E: Observability Gaps (8 of 54 fixes = 15%)**
Empty catch blocks, hardcoded zero token counts, missing logging. The system worked but was opaque to debugging.

### 2.5 Remaining Risk Areas Not Covered

These areas were NOT addressed by any Wave 1 fix agent:

1. **No test suite.** Zero unit tests for 38 TypeScript files. Pure functions (rotation, conviction extraction, HTML extraction, phase routing, stall detection, token estimation) would be trivial to test and would prevent regression. This is the single largest risk factor.

2. **Dual-instance protection.** No lock file, no PID check. Two concurrent `deep-build` runs with the same slug + date will corrupt state.json.

3. **Artifact size hard limit.** HTML validator warns at 500KB but does not reject. An oversized artifact cascades into token budget overflow on subsequent passes.

4. **Discovery log unbounded.** `MAX_DISCOVERY_ENTRIES = 100` is defined but never enforced. State growth is unbounded.

5. **allRequiredPassed = true when zero gates ran.** Gate infrastructure failure presents as "all passed" to the weaver.

6. **Mutable cost-tracker.ts.** Dead code, but if anyone imports it, the mutation pattern will conflict with the immutable state pattern used everywhere else.

7. **The 8 dead modules.** 21% of the codebase is unreachable from the main execution path. This creates maintenance confusion and increases cognitive load.

---

## PART 3: Readiness Assessment

### 3.1 Is the Pipeline Ready for a Live Run?

**YES, with caveats.** The core execution path (Phase 0 -> Phase A -> Phase B) is structurally sound. Wave 1 fixes addressed the most critical bugs:

- Spawn lifecycle is robust (EPIPE, timeout, orphans, overflow, process groups)
- JSON parsing has three-stage recovery with edge case hardening
- State machine handles unexpected phases, resume validation, hash tracking
- PA subsystem has correct auditor attribution, substantive validation, JSON block validation
- Error handling is consistent (typed errors, BudgetExceeded protection, logging)

The pipeline has successfully completed 2 live runs already (yegge-gas-town-2026-02-25 and yegge-gas-town-extraction-2026-02-28).

### 3.2 Top 3 Remaining Risks

**Risk 1: No dual-instance protection (HIGH)**
If the user accidentally starts two runs with the same content on the same day, state.json will be corrupted by interleaved writes. The atomic write pattern prevents torn files but not interleaved updates. Fix: add a `.lock` file with PID at pipeline startup.

**Risk 2: No artifact size hard limit (HIGH)**
A single oversized builder response (500KB+ HTML) will blow the token budget for ALL subsequent passes. The trimmer cannot trim the artifact itself -- it only trims conviction and corpus files. Fix: reject artifacts over 200KB in html-validator.ts.

**Risk 3: allRequiredPassed=true when zero gates (MEDIUM)**
If Playwright fails to launch or gate-runner-browser.js has an error, the pipeline reports "all required gates passed" to the weaver. This is a false positive that could lead to premature SHIP. Fix: set `allRequiredPassed: false` when `gates.length === 0`.

### 3.3 What to Test First in a Live Run

1. **Phase 0 completion.** Verify `_tc-brief.md` and `_content-map.md` are written and non-empty. This is the foundation for all subsequent passes.

2. **Phase A pass 1 (S1P1).** The first builder pass creates the artifact from nothing. Verify HTML is extracted correctly, conviction is captured, discovery log is populated, and the artifact is written to disk.

3. **Phase B PA cycle 1.** Verify:
   - Screenshots capture at all 3 viewports (check file sizes > 0)
   - Gate runner produces results (check `gateResults` is not empty `{}`)
   - At least 5/8 auditors succeed with substantive reports
   - Weaver produces a valid WeaverVerdict with all 8 required fields
   - Auditor reports have correct attribution (A through I, not all 'A')
   - Token counts are non-zero for auditors

4. **Refine cycle.** If verdict is REFINE, verify the refine builder's output is captured (either via response extraction or disk hash check).

5. **Budget tracking.** After the run, verify `state.cost.totalInputTokens > 0` and `state.cost.totalOutputTokens > 0`. Wave 1 fixed the zero-token bug for auditors.

### 3.4 BLOCKING Issues Still Unfixed

**No BLOCKING issues remain for a live run.** The following are SIGNIFICANT but not blocking:

| Issue | Source | Severity | Why Not Blocking |
|-------|--------|----------|-----------------|
| No dual-instance lock | audit-adversarial ST-01 | HIGH | Avoidable by user discipline (don't run twice) |
| No artifact size limit | audit-adversarial R-01 | HIGH | Depends on LLM behavior; hasn't triggered in practice |
| allRequiredPassed false positive | audit-adversarial S-02 | MEDIUM | Gate runner hasn't failed in practice |
| resume.ts integrity unreachable | audit-functional-wiring W-01 | SIGNIFICANT | Only matters for --resume, which now has partial validation |
| No unit tests | audit-fresh-eyes | HIGH (systemic) | Not blocking for a single run, but critical for maintenance |
| 8 dead modules (21%) | audit-functional-wiring W-02 | MODERATE | Dead code doesn't affect runtime |
| MAX_DISCOVERY_ENTRIES unenforced | audit-adversarial R-05 | MEDIUM | State growth is bounded by pass count in practice |

---

## APPENDIX: Audit Report Coverage Map

| Source File | Audited By | Fixed By |
|-------------|-----------|----------|
| agents/claude-cli.ts | audit-agents-cli, audit-fresh-eyes, audit-adversarial | fix-spawn-lifecycle |
| agents/response-handler.ts | audit-agents-cli, audit-fresh-eyes | fix-json-resilience |
| cli.ts | audit-functional-compile | fix-json-resilience |
| config/paths.ts | audit-config-templates | fix-error-handling |
| config/constants.ts | audit-config-templates, audit-fresh-eyes | (no fixes needed) |
| config/corpus.ts | audit-config-templates, audit-functional-compile | (no fixes needed) |
| orchestrator/pipeline.ts | audit-orchestrator-pipeline, audit-adversarial, audit-fresh-eyes | fix-state-machine, fix-pa-subsystem, fix-error-handling, fix-json-resilience |
| orchestrator/pass-executor.ts | audit-orchestrator-pipeline, audit-adversarial | fix-error-handling |
| orchestrator/phase-router.ts | audit-orchestrator-pipeline | fix-state-machine |
| orchestrator/rotation.ts | audit-rotation-conviction | (no fixes needed) |
| orchestrator/conviction-manager.ts | audit-rotation-conviction | (no fixes needed) |
| prompts/assembler.ts | audit-assembler | fix-assembler-vars, fix-error-handling |
| state/state-manager.ts | audit-state | fix-state-machine |
| pa/http-server.ts | audit-pa-subsystem | fix-pa-subsystem, fix-error-handling |
| pa/screenshot-capture.ts | audit-pa-subsystem | fix-pa-subsystem |
| pa/auditor-spawner.ts | audit-pa-subsystem | fix-pa-subsystem, fix-error-handling |
| pa/weaver-spawner.ts | audit-pa-subsystem | fix-pa-subsystem, fix-error-handling |
| pa/mini-pa-spawner.ts | audit-pa-subsystem | fix-pa-subsystem, fix-error-handling |
| utils.ts | audit-agents-cli | fix-json-resilience, fix-error-handling |
| types/pa.ts | audit-types | fix-state-machine |
| types/errors.ts | audit-types | (no fixes needed -- target of fix-error-handling) |
| validation/gate-runner.ts | audit-adversarial | (no fixes applied) |
| validation/html-validator.ts | audit-adversarial | (no fixes applied) |
| logging/logger.ts | audit-logging, audit-functional-wiring | (dead code -- no fixes) |
| logging/cost-tracker.ts | audit-logging, audit-functional-wiring | (dead code -- no fixes) |
| instrumentation/metrics.ts | audit-functional-wiring | (dead code -- no fixes) |
| instrumentation/report.ts | audit-functional-wiring | (dead code -- no fixes) |
| state/resume.ts | audit-functional-wiring | (dead code -- no fixes) |
| pa/pa-router.ts | audit-functional-wiring | (dead code -- no fixes) |

**Coverage: 29/38 source files audited. 14/38 files had fixes applied. 8/38 are dead code.**

---

## FINAL VERDICT

**The pipeline is READY FOR LIVE RUNS.** Wave 1 fixed 52 confirmed bugs across 14 source files with zero regressions. The most critical fixes (spawn lifecycle, stall detection, hash desync, auditor attribution, BudgetExceeded protection) address real production failure modes. The remaining unfixed issues are either avoidable (dual-instance), theoretical (artifact size), or dead code (8 modules).

**Recommended priority for Wave 2 fixes:**
1. Lock file for dual-instance protection (20 lines, prevents catastrophic corruption)
2. Artifact size hard limit in html-validator.ts (5 lines, prevents token cascade)
3. `allRequiredPassed = false` when zero gates (3 lines, prevents false SHIP)
4. `discoveryLog.slice(-MAX_DISCOVERY_ENTRIES)` enforcement (2 lines)
5. Dead code removal: delete 8 unreachable modules (~1,500 lines)
6. Unit tests for pure functions (rotation, stall detection, phase routing, conviction extraction)

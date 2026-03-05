# Functional Wiring & Import Chain Audit

**Auditor:** functional-wiring agent
**Date:** 2026-02-28
**Scope:** Integration wiring, import chains, dead code, error type propagation, module configuration

---

## 1. Full Import Chain: cli.ts -> pipeline.ts -> ... -> state-manager.ts

### Primary Chain (verified)

```
cli.ts
  -> utils.js (slugify)
  -> config/constants.js (TOTAL_SUBSETS, PASSES_PER_SUBSET, TOTAL_CORPUS_PASSES, MAX_PA_CYCLES, MODEL)
  -> types/pipeline.js (type PipelineConfig)
  -> types/errors.js (BudgetExceededError) [dynamic import in catch]
  -> orchestrator/pipeline.js (runPipeline, createDefaultDeps) [dynamic import]

orchestrator/pipeline.ts
  -> types/pipeline.js (type PipelineConfig)
  -> types/state.js (type PipelineState, type WeaverVerdict)
  -> types/pass.js (type PassDefinition, type ClaudeResponse, PASS_ROLES, getRotationIndex)
  -> types/errors.js (BudgetExceededError)
  -> config/constants.js (PASSES_PER_SUBSET, TOTAL_SUBSETS, MAX_PA_CYCLES, PA_THRESHOLD, TIER5_MINIMUM, RETHINK_THRESHOLD, BUDGET_WARNING, BUDGET_CAP)
  -> config/corpus.js (CORPUS_SUBSETS)
  -> utils.js (atomicWriteFile, sha256, readFileChecked, formatDuration)
  -> orchestrator/rotation.js (computeRotation)
  -> orchestrator/pass-executor.js (executeSinglePass, type PassExecutorDeps)
  -> orchestrator/phase-router.js (routePhaseB, detectStall, checkBudget)
  -> orchestrator/workspace-setup.js (createWorkspace, createSubsetCheckpointDir)
  -> orchestrator/cross-subset-verifier.js (shouldRunCrossSubsetVerification, buildCrossSubsetVerifierPrompt)
  -> agents/response-handler.js (extractHtml)

  createDefaultDeps() dynamic imports:
    -> agents/claude-cli.js (spawnClaude)
    -> validation/html-validator.js (validateHtml)
    -> state/state-manager.js (saveState, loadState)
    -> utils.js (appendJsonl)
    -> prompts/assembler.js (assembleBuilderPrompt, assembleVerifierPrompt, assembleTcDerivationPrompt, assembleContentAnalysisPrompt, assembleRetrospectivePrompt, assembleRefineBuilderPrompt)
    -> validation/diff-checker.js (diffArtifact)
    -> pa/http-server.js (startArtifactServer)
    -> pa/screenshot-capture.js (captureScreenshots)
    -> validation/gate-runner.js (runGates)
    -> pa/auditor-spawner.js (spawnAuditors)
    -> pa/weaver-spawner.js (spawnWeaver)
    -> config/constants.js (VIEWPORTS)

orchestrator/pass-executor.ts
  -> types/pipeline.js (type PipelineConfig)
  -> types/state.js (type PipelineState, type PassRecord, type ConvictionEntry)
  -> types/pass.js (type PassDefinition, type PassResult, type ClaudeResponse)
  -> types/errors.js (BudgetExceededError)
  -> utils.js (atomicWriteFile, sha256)
  -> orchestrator/conviction-manager.js (addConviction, extractConvictionFromResponse)
  -> orchestrator/phase-router.js (checkBudget)
  -> orchestrator/workspace-setup.js (createPassArchiveDir)
  -> agents/response-handler.js (extractHtml, extractDiscoveryLog)

prompts/assembler.ts
  -> types/prompts.js (type PromptTemplate, type PromptVariableName, type AssembledPrompt)
  -> types/state.js (type PipelineState, type ConvictionEntry)
  -> types/pass.js (type PassDefinition)
  -> types/pipeline.js (type PipelineConfig)
  -> config/paths.js (TEMPLATES_DIR)
  -> config/corpus.js (CORPUS_SUBSETS)
  -> config/constants.js (TOKEN_TRIM, TOKEN_FAIL, MAX_CONVICTION_ENTRIES)
  -> utils.js (estimateTokens, readFileChecked)
  -> orchestrator/rotation.js (computeRotation)

agents/claude-cli.ts
  -> types/pass.js (type ClaudeResponse)
  -> types/errors.js (ClaudeInvocationError)
  -> utils.js (retry, safeJsonParse)
  -> config/constants.js (MODEL, MAX_TURNS, ALLOWED_TOOLS, STRICT_MCP_ROLES, RETRY_LIMIT, RETRY_BACKOFF)

agents/response-handler.ts
  -> types/pass.js (type ClaudeResponse, type ConvictionAdditionRaw)
  -> types/errors.js (ClaudeInvocationError, HtmlExtractionError)
  -> utils.js (safeJsonParse)

state/state-manager.ts
  -> types/state.js (type PipelineState, type InFlightPass)
  -> utils.js (atomicWriteFile, readFileChecked, safeJsonParse)
  -> types/errors.js (StateCorruptionError)
```

**RESULT: Chain is COMPLETE. No broken links.**

### Circular Dependency Analysis

**Potential circular path identified but SAFE:**

```
prompts/assembler.ts -> orchestrator/rotation.js (computeRotation)
orchestrator/pipeline.ts -> prompts/assembler.js (dynamic import inside createDefaultDeps)
```

This is NOT a circular dependency because:
1. `assembler.ts` imports from `rotation.ts` (a leaf module)
2. `pipeline.ts` imports `assembler.ts` only via dynamic `import()` inside function bodies
3. There is no module-level circular import chain

**No circular dependencies found.**

---

## 2. Dead Code Module Analysis

### All 38 source modules mapped:

| Module | Imported By | Status |
|--------|-------------|--------|
| `cli.ts` | Entry point (node dist/cli.js) | LIVE |
| `orchestrator/pipeline.ts` | cli.ts (dynamic) | LIVE |
| `orchestrator/pass-executor.ts` | pipeline.ts | LIVE |
| `orchestrator/rotation.ts` | pipeline.ts, assembler.ts | LIVE |
| `orchestrator/conviction-manager.ts` | pass-executor.ts | LIVE |
| `orchestrator/cross-subset-verifier.ts` | pipeline.ts | LIVE |
| `orchestrator/workspace-setup.ts` | pipeline.ts, pass-executor.ts | LIVE |
| `orchestrator/phase-router.ts` | pipeline.ts, pass-executor.ts | LIVE |
| `prompts/assembler.ts` | pipeline.ts (dynamic) | LIVE |
| `agents/claude-cli.ts` | pipeline.ts (dynamic), auditor-spawner.ts, weaver-spawner.ts, mini-pa-spawner.ts | LIVE |
| `agents/response-handler.ts` | pipeline.ts, pass-executor.ts | LIVE |
| `state/state-manager.ts` | pipeline.ts (dynamic), checkpoint.ts, resume.ts | LIVE |
| `state/checkpoint.ts` | resume.ts | LIVE |
| `state/resume.ts` | **NEVER IMPORTED** | DEAD |
| `validation/gate-runner.ts` | pipeline.ts (dynamic) | LIVE |
| `validation/gate-runner-browser.js` | gate-runner.ts (fs.readFileSync) | LIVE (loaded as text) |
| `validation/diff-checker.ts` | pipeline.ts (dynamic) | LIVE |
| `validation/html-validator.ts` | pipeline.ts (dynamic) | LIVE |
| `pa/http-server.ts` | pipeline.ts (dynamic) | LIVE |
| `pa/screenshot-capture.ts` | pipeline.ts (dynamic) | LIVE |
| `pa/auditor-spawner.ts` | pipeline.ts (dynamic) | LIVE |
| `pa/weaver-spawner.ts` | pipeline.ts (dynamic) | LIVE |
| `pa/pa-router.ts` | **NEVER IMPORTED** | DEAD |
| `pa/mini-pa-spawner.ts` | **NEVER IMPORTED** | DEAD |
| `config/constants.ts` | 12+ modules | LIVE |
| `config/paths.ts` | assembler.ts | LIVE |
| `config/corpus.ts` | pipeline.ts, assembler.ts, workspace-setup.ts | LIVE |
| `config/pa-questions.ts` | auditor-spawner.ts, mini-pa-spawner.ts | LIVE |
| `utils.ts` | 10+ modules | LIVE |
| `logging/logger.ts` | **NEVER IMPORTED** | DEAD |
| `logging/cost-tracker.ts` | **NEVER IMPORTED** | DEAD |
| `instrumentation/metrics.ts` | **NEVER IMPORTED** | DEAD |
| `instrumentation/report.ts` | **NEVER IMPORTED** | DEAD |
| `types/errors.ts` | 8+ modules | LIVE |
| `types/pipeline.ts` | 8+ modules | LIVE |
| `types/state.ts` | 10+ modules | LIVE |
| `types/pass.ts` | 8+ modules | LIVE |
| `types/pa.ts` | 5+ modules | LIVE |
| `types/report.ts` | instrumentation/report.ts only | DEAD (parent dead) |
| `types/prompts.ts` | assembler.ts | LIVE |

### Dead Modules Summary

| Module | Severity | Notes |
|--------|----------|-------|
| `state/resume.ts` | SIGNIFICANT | Full 6-step resume algorithm implemented but never called. `pipeline.ts` handles resume via `deps.loadState()` directly (line 123), bypassing the integrity verification in `resume.ts`. The `--resume` flag in CLI creates config and calls `runPipeline()` which just calls `deps.loadState()`. **Resume integrity verification (config hash, artifact hash, in-flight pass recovery) is UNREACHABLE.** |
| `pa/pa-router.ts` | MODERATE | Duplicates `orchestrator/phase-router.ts`. Has `routePA()` and `detectStall()` -- same logic exists in `phase-router.ts` as `routePhaseB()` and `detectStall()`. The orchestrator uses `phase-router.ts`, not this file. |
| `pa/mini-pa-spawner.ts` | LOW | Designed for mini-PA between refinement passes. Not yet wired into the pipeline. May be a planned-but-not-connected feature. |
| `logging/logger.ts` | SIGNIFICANT | Full structured logging class with 6 log destinations (run.log, passes.jsonl, errors.jsonl, decisions.jsonl, quality.jsonl). **Completely unused.** The pipeline uses inline `console.log` via `deps.log()` instead. All logging infrastructure is dead code. |
| `logging/cost-tracker.ts` | MODERATE | Duplicates cost tracking logic that exists inline in `pass-executor.ts` (lines 319-351) and `pipeline.ts` (lines 587-612). Also has a `checkBudget()` that duplicates `phase-router.ts`. |
| `instrumentation/metrics.ts` | MODERATE | `recordPassMetrics()` references `Logger` class which is never instantiated. Dead. |
| `instrumentation/report.ts` | LOW | `generateReport()` and `writeReport()` for post-run analysis. Never called by pipeline. |
| `types/report.ts` | LOW | Only imported by `instrumentation/report.ts` which is itself dead. |

**Total: 8 dead modules (21% of codebase)**

---

## 3. Error Type Propagation

### Error classes defined in `types/errors.ts`:
- `OrchestratorError` (base, with `category: ErrorCategory`)
- `ValidationError` extends OrchestratorError
- `ClaudeInvocationError` extends OrchestratorError
- `StateCorruptionError` extends OrchestratorError
- `BudgetExceededError` extends OrchestratorError
- `HtmlExtractionError` extends OrchestratorError
- `PlaywrightError` extends OrchestratorError
- `FileNotFoundError` extends OrchestratorError
- `ConfigMismatchError` extends OrchestratorError

### Error usage in catch blocks:

| Location | Catch Pattern | Correct Type? | Notes |
|----------|--------------|---------------|-------|
| `cli.ts:230` | `error instanceof BudgetExceededError` | YES | Correctly checks specific error type |
| `pipeline.ts:200-203` | `catch (error)` -> rethrow | OK | Phase 0, raw rethrow |
| `pipeline.ts:287-300` | `error instanceof BudgetExceededError` | YES | Correct specific check |
| `pipeline.ts:334-336` | `catch (error)` -> warn | OK | Retrospective failure, non-fatal |
| `pipeline.ts:353-356` | `catch (error)` -> warn | OK | Cross-subset verification, non-fatal |
| `pipeline.ts:558-561` | `catch (error)` -> warn | OK | Refine builder failure, non-fatal |
| `pass-executor.ts:79-96` | `catch (error)` generic | WEAK | Should check for `ClaudeInvocationError` specifically to handle rate-limit vs unknown differently. Currently treats all spawn failures identically. |
| `claude-cli.ts:211-221` | `error instanceof ClaudeInvocationError` | YES | Correctly checks category for retry logic |
| `gate-runner.ts:66-70` | `error instanceof PlaywrightError` | YES | Correctly re-throws PlaywrightError, wraps others |
| `response-handler.ts:36-55` | No catch (throws directly) | OK | Throws `ClaudeInvocationError` with appropriate categories |
| `state-manager.ts:25-37` | Throws `StateCorruptionError` | YES | Correct |
| `workspace-setup.ts:98` | Throws `FileNotFoundError` | YES | Correct |

### Error propagation issues:

1. **FINDING: `pass-executor.ts:79-96` uses generic catch** -- When `deps.spawnClaude()` fails, the catch block creates a generic `PassResult` with `error: error.message`. It loses the `ClaudeInvocationError.category` which could distinguish rate-limit (transient) from invalid-response (permanent). However, this is partially mitigated because `claude-cli.ts` already handles retries internally, so by the time the error reaches `pass-executor.ts`, retries are exhausted.

2. **FINDING: `pass-executor.ts:371` silent catch in `archivePass()`** -- Empty catch block silently swallows all errors during pass archiving. Should at minimum log a warning. Non-fatal is correct, but completely silent is not.

3. **FINDING: Inconsistent error wrapping** -- `assembler.ts:106-108` catches file read errors and returns empty string (silent). `utils.ts:101-105` throws a plain `Error` (not `FileNotFoundError`) from `readFileChecked()`. These should use `FileNotFoundError` for consistency.

**Overall error type usage: MOSTLY CORRECT (7/10 correct, 3 weak)**

---

## 4. Module Configuration

### package.json

```json
{
  "type": "module"  // CORRECT -- enables ESM
}
```
**PASS**

### tsconfig.json

```json
{
  "module": "nodenext",           // CORRECT -- ESM with .js extensions
  "moduleResolution": "nodenext"  // CORRECT -- matches module setting
}
```
**PASS**

All imports use `.js` extension (e.g., `'./utils.js'`, `'../types/pass.js'`) which is required for NodeNext module resolution.

---

## 5. gate-runner-browser.js

**EXISTS:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/tools/deep-build/src/validation/gate-runner-browser.js`

This is a plain JavaScript file (not TypeScript), which is intentional -- it's injected into the Playwright browser context via `page.evaluate(browserScript)` at `gate-runner.ts:48`. It cannot be TypeScript because Playwright's `page.evaluate()` requires raw JavaScript.

The `.js` file is in `src/validation/` alongside `gate-runner.ts`. The TypeScript compiler (`tsconfig.json`) includes `src/**/*` but `*.js` files won't be compiled -- they will need to be copied to `dist/` separately. The `gate-runner.ts` has a fallback path resolution:
1. First tries relative to compiled output: `path.dirname(import.meta.url)` + `gate-runner-browser.js`
2. Falls back to `../../src/validation/gate-runner-browser.js`

**ISSUE:** The build script (`tsc`) does NOT copy `.js` files from `src/` to `dist/`. The fallback at line 25 resolves this for development, but a production build would need a copy step or the JS file placed in a static location. The current fallback works because the project runs from the repo root, but it's fragile.

---

## 6. SKILL.md

**EXISTS:** `/Users/spacewizardmoneygang/.claude/skills/deep-build/SKILL.md`

**Path in SKILL.md:**
```
node /Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/tools/deep-build/dist/cli.js --content {CONTENT_PATH}
```

**Analysis:**
- Points to `dist/cli.js` -- this requires running `tsc` first (build step)
- The `package.json` has `"start": "node dist/cli.js"` which matches
- The `package.json` also has `"dev": "tsx src/cli.ts"` for development use
- The SKILL.md path is CORRECT assuming a build has been run

**POTENTIAL ISSUE:** If `dist/` doesn't exist yet (no build), the skill command will fail. The dev path (`tsx src/cli.ts`) would work without a build, but the SKILL.md points to the production path.

---

## 7. Orchestrator Import Verification

Does `pipeline.ts` properly import and use all expected orchestrator modules?

| Module | Imported? | Used? | How? |
|--------|-----------|-------|------|
| `rotation.ts` | YES (line 32) | YES | `computeRotation()` in Phase A loop and dry-run |
| `conviction-manager.ts` | NO (not directly) | INDIRECT | Used via `pass-executor.ts` which imports it |
| `cross-subset-verifier.ts` | YES (line 37) | YES | `shouldRunCrossSubsetVerification()` and `buildCrossSubsetVerifierPrompt()` in Phase A |
| `workspace-setup.ts` | YES (line 36) | YES | `createWorkspace()` in Phase 0, `createSubsetCheckpointDir()` in Phase A |
| `phase-router.ts` | YES (line 35) | YES | `routePhaseB()`, `detectStall()`, `checkBudget()` in Phase B |
| `pass-executor.ts` | YES (line 33-34) | YES | `executeSinglePass()` in Phase A loop |

**All 6 orchestrator modules properly imported and used by the pipeline.**

---

## 8. Type Import Resolution

Every `import type` checked against the actual exported types in each module:

| Import | Source File | Type Exists? |
|--------|-----------|--------------|
| `PipelineConfig` | types/pipeline.ts | YES (line 39) |
| `PipelineState` | types/state.ts | YES (line 9) |
| `PassDefinition` | types/pass.ts | YES (line 7) |
| `PassResult` | types/pass.ts | YES (line 33) |
| `ClaudeResponse` | types/pass.ts | YES (line 69) |
| `ConvictionEntry` | types/state.ts | YES (line 101) |
| `PassRecord` | types/state.ts | YES (line 50) |
| `InFlightPass` | types/state.ts | YES (line 44) |
| `WeaverVerdict` | types/state.ts | YES (line 109) |
| `CostTracker` | types/state.ts | YES (line 87) |
| `PACycleRecord` | types/state.ts | YES (line 131) |
| `AgentRole` | types/state.ts | YES (line 75) |
| `ErrorCategory` | types/errors.ts | YES (line 6) |
| `ErrorRecord` | types/errors.ts | YES (line 22) |
| `PromptTemplate` | types/prompts.ts | YES (line 5) |
| `PromptVariableName` | types/prompts.ts | YES (line 14) |
| `AssembledPrompt` | types/prompts.ts | YES (line 56) |
| `CorpusFile` | types/pipeline.ts | YES (line 13) |
| `CorpusSubset` | types/pipeline.ts | YES (line 22) |
| `ViewportConfig` | types/pipeline.ts | YES (line 33) |
| `RotationSchedule` | types/pass.ts | YES (line 22) |
| `ConvictionAdditionRaw` | types/pass.ts | YES (line 60) |
| `AuditorId` | types/pa.ts | YES (line 7) |
| `ScreenshotManifest` | types/pa.ts | YES (line 9) |
| `GateVerdict` | types/pa.ts | YES (line 33) |
| `GateResult` | types/pa.ts | YES (line 20) |
| `AuditorReport` | types/pa.ts | YES (line 48) |
| `MiniPAResult` | types/pa.ts | YES (line 67) |
| `RunReport` | types/report.ts | YES (line 7) |

**All 29 type imports resolve correctly. No dangling type references.**

---

## Summary

### PASS (no issues)
- Import chain cli.ts -> pipeline.ts -> pass-executor.ts -> assembler.ts -> claude-cli.ts -> response-handler.ts -> state-manager.ts: COMPLETE, no breaks
- No circular dependencies
- package.json `"type": "module"`: CORRECT
- tsconfig.json `"module": "nodenext"`: CORRECT
- gate-runner-browser.js EXISTS
- SKILL.md EXISTS and points to correct `dist/cli.js` path
- All 6 orchestrator modules (rotation, conviction-manager, cross-subset-verifier, workspace-setup, phase-router, pass-executor) properly imported and used
- All 29 type imports resolve correctly

### FINDINGS (issues identified)

| # | Severity | Finding |
|---|----------|---------|
| W-01 | **BLOCKING** | `state/resume.ts` is dead code. The full 6-step resume integrity verification (config hash check, artifact hash verification, in-flight pass recovery, backup restoration) is NEVER CALLED. `pipeline.ts` uses `deps.loadState()` directly, which only validates schema version. The `--resume` flag bypasses all integrity checks. |
| W-02 | **SIGNIFICANT** | 8 dead modules (21% of codebase): `state/resume.ts`, `pa/pa-router.ts`, `pa/mini-pa-spawner.ts`, `logging/logger.ts`, `logging/cost-tracker.ts`, `instrumentation/metrics.ts`, `instrumentation/report.ts`, `types/report.ts`. |
| W-03 | **SIGNIFICANT** | `logging/logger.ts` provides structured logging to 6 destinations but is completely unused. Pipeline uses inline `console.log` via `deps.log()`. This means: no `passes.jsonl`, no `errors.jsonl`, no `quality.jsonl` are ever written during actual pipeline runs. |
| W-04 | **SIGNIFICANT** | `pa/pa-router.ts` duplicates `orchestrator/phase-router.ts`. Both export `routePA()`/`routePhaseB()` and `detectStall()` with identical logic. Only `phase-router.ts` is used. |
| W-05 | **MODERATE** | `gate-runner-browser.js` in `src/` won't be copied to `dist/` by `tsc`. The fallback path in `gate-runner.ts:25` works during development but is fragile for production builds. |
| W-06 | **MODERATE** | `pass-executor.ts:371` has a completely silent `catch {}` block in `archivePass()`. Should at minimum emit a warning. |
| W-07 | **LOW** | `utils.ts:101-105` `readFileChecked()` throws plain `Error` instead of `FileNotFoundError` from `types/errors.ts`. Inconsistent with the error hierarchy. |
| W-08 | **LOW** | `assembler.ts:103-108` `loadFileOrEmpty()` silently returns empty string on file errors. This means a missing corpus file would produce a subtly degraded prompt without any warning. |

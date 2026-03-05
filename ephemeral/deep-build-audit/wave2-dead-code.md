# Dead Code Audit: `tools/deep-build/src/`

**Auditor:** Opus 4.6 (fresh-eyes, zero prior context)
**Date:** 2026-02-28
**Method:** Exhaustive grep of every export against all imports (static + dynamic) across 38 .ts files. No test files exist, so src/ is the sole consumer.

---

## Summary

| Category | Count | Est. Lines |
|----------|-------|------------|
| CERTAIN dead exports (zero refs) | 20 | ~490 |
| LIKELY dead (only self-ref) | 3 | ~25 |
| Dead entire files (all exports dead) | 5 | ~430 |
| Dead constants | 4 | ~4 |
| Dead types/interfaces | 5 | ~30 |

**Total estimated dead lines: ~520** (of ~4,800 total src/ lines = ~11%)

---

## CERTAIN Dead Code (Zero References Outside Definition)

### 1. Entire file: `logging/cost-tracker.ts` (75 lines)

**File:** `src/logging/cost-tracker.ts`
**Lines:** 1-76
**What's dead:** ALL exports -- `updateCost()`, `BudgetStatus`, `checkBudget()`
**Confidence:** CERTAIN -- zero imports from this file anywhere in the codebase
**Evidence:** `grep 'from.*cost-tracker' src/` = 0 results. The pipeline uses `checkBudget()` and `updateCostTracker()` from `orchestrator/phase-router.ts` and `orchestrator/pass-executor.ts` respectively (different implementations with same names).
**Risk of removal:** NONE -- completely superseded by phase-router.ts and pass-executor.ts implementations
**Note:** This is the most clear-cut dead file. It contains a MUTABLE cost tracker (`cost.totalInputTokens += ...`) while the rest of the codebase uses an immutable pattern.

### 2. Entire file: `state/resume.ts` (200 lines)

**File:** `src/state/resume.ts`
**Lines:** 1-200
**What's dead:** ALL exports -- `ResumePoint`, `ResumeResult`, `resumePipeline()`
**Confidence:** CERTAIN -- zero imports from this file anywhere
**Evidence:** `grep 'from.*resume' src/` = 0 results; `grep 'resumePipeline' src/` = only definition. Pipeline.ts handles resume inline (lines 120-137) via its own `loadState` dep.
**Risk of removal:** NONE -- resume logic is fully implemented inline in pipeline.ts

### 3. Entire file: `state/checkpoint.ts` (95 lines)

**File:** `src/state/checkpoint.ts`
**Lines:** 1-95
**What's dead:** ALL exports -- `createCheckpoint()`, `listCheckpoints()`, `loadCheckpointState()`
**Confidence:** CERTAIN for `createCheckpoint()` and `loadCheckpointState()` -- zero imports anywhere. LIKELY for `listCheckpoints()` -- only imported by `state/resume.ts` which is itself dead.
**Evidence:** `grep 'from.*checkpoint' src/` = only `state/resume.ts:12`. Pipeline.ts handles checkpointing inline (lines 328-343) using `createSubsetCheckpointDir()` from workspace-setup.ts.
**Risk of removal:** NONE -- checkpoint logic reimplemented inline in pipeline.ts

### 4. Entire file: `instrumentation/metrics.ts` (63 lines)

**File:** `src/instrumentation/metrics.ts`
**Lines:** 1-63
**What's dead:** ALL exports -- `recordPassMetrics()`
**Confidence:** CERTAIN -- zero imports from this file anywhere
**Evidence:** `grep 'recordPassMetrics' src/` = only definition. Pass-executor.ts records metrics directly to state without calling this function.
**Risk of removal:** NONE -- metrics recording is done inline by pass-executor.ts

### 5. Entire file: `instrumentation/report.ts` (203 lines)

**File:** `src/instrumentation/report.ts`
**Lines:** 1-203
**What's dead:** ALL exports -- `generateReport()`, `writeReport()`
**Confidence:** CERTAIN -- zero imports from this file anywhere
**Evidence:** `grep 'generateReport\|writeReport' src/` = only definitions. No post-run report generation is wired into the pipeline.
**Risk of removal:** LOW -- this is useful functionality that SHOULD be wired in but currently isn't. It represents intended-but-unconnected code.

### 6. `response-handler.ts`: `parseClaudeResponse()`

**File:** `src/agents/response-handler.ts:15`
**What's dead:** `parseClaudeResponse()` function (35 lines)
**Confidence:** CERTAIN -- zero refs outside definition
**Evidence:** `grep 'parseClaudeResponse' src/` = only line 15. The `claude-cli.ts` does its own JSON parsing via `safeJsonParse` (line 343) and error checking inline. This function is an earlier design that was superseded.
**Risk of removal:** NONE

### 7. `response-handler.ts`: `extractConvictionAddition()`

**File:** `src/agents/response-handler.ts:114`
**What's dead:** `extractConvictionAddition()` function (37 lines)
**Confidence:** CERTAIN -- zero refs outside definition
**Evidence:** `grep 'extractConvictionAddition' src/` = only line 114. The pass-executor uses `extractConvictionFromResponse()` from `conviction-manager.ts` instead.
**Risk of removal:** NONE -- superseded by conviction-manager.ts implementation

### 8. `response-handler.ts`: `extractVerifierObservations()`

**File:** `src/agents/response-handler.ts:184`
**What's dead:** `extractVerifierObservations()` function (8 lines)
**Confidence:** CERTAIN -- zero refs outside definition
**Evidence:** `grep 'extractVerifierObservations' src/` = only line 184. Pass-executor assigns verifier observations directly: `verifierObservations = resultText` (line 168).
**Risk of removal:** NONE

### 9. `conviction-manager.ts`: `parseConvictionBlock()`

**File:** `src/orchestrator/conviction-manager.ts:112`
**What's dead:** `parseConvictionBlock()` function (17 lines)
**Confidence:** CERTAIN -- zero refs outside definition
**Evidence:** `grep 'parseConvictionBlock' src/` = only line 112. The docstring says "Used by response-handler as an intermediate format" but response-handler.ts has its own `extractConvictionAddition()` (which is ALSO dead). Neither calls this function.
**Risk of removal:** NONE

### 10. `assembler.ts`: `loadAllTemplates()`

**File:** `src/prompts/assembler.ts:37`
**What's dead:** `loadAllTemplates()` function (10 lines)
**Confidence:** CERTAIN -- zero refs outside definition
**Evidence:** All template loading goes through `loadTemplate()` with specific names. `loadAllTemplates()` loads all .md files from templates/ but nobody calls it.
**Risk of removal:** NONE

### 11. `assembler.ts`: `assemblePaAuditorPrompt()`

**File:** `src/prompts/assembler.ts:431`
**What's dead:** `assemblePaAuditorPrompt()` function (26 lines)
**Confidence:** CERTAIN -- zero refs outside definition
**Evidence:** `grep 'assemblePaAuditorPrompt' src/` = only definition. The auditor-spawner.ts builds prompts directly via its own `buildAuditorPrompt()` function (line 23).
**Risk of removal:** NONE -- superseded by auditor-spawner.ts inline prompt building

### 12. `assembler.ts`: `assemblePaIntegrativePrompt()`

**File:** `src/prompts/assembler.ts:458`
**What's dead:** `assemblePaIntegrativePrompt()` function (23 lines)
**Confidence:** CERTAIN -- zero refs outside definition
**Evidence:** `grep 'assemblePaIntegrativePrompt' src/` = only definition. The auditor-spawner.ts builds the integrative prompt via its own `buildIntegrativePrompt()` (line 96).
**Risk of removal:** NONE

### 13. `assembler.ts`: `assembleWeaverPrompt()`

**File:** `src/prompts/assembler.ts:482`
**What's dead:** `assembleWeaverPrompt()` function (30 lines)
**Confidence:** CERTAIN -- zero refs outside definition
**Evidence:** `grep 'assembleWeaverPrompt' src/` = only definition. The weaver-spawner.ts builds the weaver prompt via its own `buildWeaverPrompt()` (line 20).
**Risk of removal:** NONE

### 14. `pa/mini-pa-spawner.ts`: `spawnMiniPA()` (entire file)

**File:** `src/pa/mini-pa-spawner.ts` (198 lines)
**What's dead:** `spawnMiniPA()` and all internal functions
**Confidence:** CERTAIN -- zero imports from this file anywhere
**Evidence:** `grep 'spawnMiniPA\|mini-pa-spawner' src/` = only definitions and self-refs. Mini-PA was designed for directional signal between refinement passes but the pipeline never calls it. The Phase B loop in pipeline.ts goes: screenshots -> gates -> auditors -> weaver -> refine, with no mini-PA step.
**Risk of removal:** LOW -- represents planned-but-unconnected functionality. The mini-PA concept may be wanted in the future.

### 15. `config/paths.ts`: Multiple dead exports

**File:** `src/config/paths.ts`
**Dead exports:**
- **`SRC_ROOT`** (line 17) -- CERTAIN dead, zero refs. Confidence: CERTAIN. Risk: NONE.
- **`TESTS_DIR`** (line 23) -- CERTAIN dead, zero refs (no test files exist). Risk: NONE.
- **`resolveProjectRoot()`** (line 29) -- CERTAIN dead, zero refs. `cli.ts` has its own `resolveProjectRoot()` (line 49) that uses a different algorithm. Risk: NONE.
- **`resolveProjectPaths()`** (line 45) -- CERTAIN dead, zero refs. The pipeline uses `config.projectRoot` + inline `path.join()` instead. Risk: NONE.
- **`buildOutputDir()`** (line 66) -- CERTAIN dead, zero refs. `cli.ts` builds the output dir path inline (line 110). Risk: NONE.

Only `PACKAGE_ROOT` and `TEMPLATES_DIR` are actually used from this file.

### 16. Constants: 4 dead constants in `config/constants.ts`

**File:** `src/config/constants.ts`
- **`MAX_DISCOVERY_ENTRIES`** (line 38) -- CERTAIN dead, zero refs. Discovery log entries are appended without limit checking. Risk: NONE.
- **`TOKEN_LIMIT`** (line 41) -- CERTAIN dead, zero refs. Only `TOKEN_TRIM` and `TOKEN_FAIL` are used in assembler.ts. Risk: NONE.
- **`TOKEN_WARNING`** (line 44) -- CERTAIN dead, zero refs. Only `TOKEN_TRIM` is checked in the trimming logic. Risk: NONE.
- **`MINI_PA_VIEWPORT_INDEX`** (line 81) -- CERTAIN dead, zero refs. Mini-PA spawner hardcodes `viewport.label === 'desktop'` search instead of using this index. Risk: NONE.

### 17. Types: 5 dead type exports

- **`PAQuestionDef`** (`config/pa-questions.ts:9`) -- CERTAIN dead, zero refs. The interface is defined but never used as a type annotation anywhere. Risk: NONE.
- **`PromptVariable`** (`types/prompts.ts:49`) -- CERTAIN dead, zero refs. The assembler uses `Map<PromptVariableName, string>` instead of this interface. Risk: NONE.
- **`PipelinePhase`** (`types/pipeline.ts:5`) -- CERTAIN dead, zero refs. The `currentPhase` field in `PipelineState` uses an inline union type instead of referencing this type alias. Risk: NONE.
- **`HtmlValidationResult`** (`validation/html-validator.ts:6`) -- CERTAIN dead as an import. It IS used as the return type of `validateHtml()` but TypeScript infers this. Nobody imports `HtmlValidationResult` by name. Risk: NONE (but removing the export keyword means callers can't type-annotate if they ever want to).
- **`DiffResult`** (`validation/diff-checker.ts:6`) -- same situation as HtmlValidationResult. Used as return type, never imported by name. Risk: NONE.

---

## LIKELY Dead Code (Only Self-References or Dead-Chain References)

### 18. `logging/logger.ts`: `Logger` class (109 lines)

**File:** `src/logging/logger.ts`
**What:** `Logger` class with 8 methods
**Confidence:** LIKELY dead -- only imported by `instrumentation/metrics.ts` (which is itself CERTAIN dead)
**Evidence:** `grep 'from.*logger' src/` = only `instrumentation/metrics.ts:8`. Pipeline.ts uses `deps.log()` (simple function) and `deps.recordDecision()` instead of the Logger class.
**Risk of removal:** LOW -- the Logger class provides structured multi-file logging (run.log, passes.jsonl, errors.jsonl, decisions.jsonl, quality.jsonl) that is more sophisticated than the current console.log approach. Could be wanted if the pipeline matures.

### 19. `PA_QUESTION_ASSIGNMENTS` in `config/pa-questions.ts`

**File:** `src/config/pa-questions.ts:35`
**What:** The assignments record (exported const)
**Confidence:** LIKELY dead as a direct import -- only referenced by `getQuestionsForAuditor()` in the same file (line 51). Nobody imports `PA_QUESTION_ASSIGNMENTS` directly.
**Risk of removal:** NONE as an export. Still needed internally by `getQuestionsForAuditor()`. Could be un-exported (made const without export).

### 20. `INFRASTRUCTURE_FILES` in `config/corpus.ts`

**File:** `src/config/corpus.ts:23`
**What:** Infrastructure files array (exported const)
**Confidence:** LIKELY dead as a direct import -- only referenced within corpus.ts itself (used inline in CORPUS_SUBSETS). Nobody imports `INFRASTRUCTURE_FILES` directly.
**Risk of removal:** NONE as an export. Still needed internally. Could be un-exported.

---

## NOT Dead (Verified Used -- Common False Positive Candidates)

These looked suspicious but are actually used:

| Export | Where Used |
|--------|-----------|
| `formatConvictionLayer` | assembler.ts internal (lines 156, 248, 249, 382) |
| `formatDiscoveryLog` | assembler.ts internal (line 157) |
| `formatPassContext` | assembler.ts internal (line 158) |
| `formatSubsetSummaries` | assembler.ts internal (line 159) |
| `loadTemplate` | assembler.ts internal (lines 345, 356, etc.) |
| `validateState` | state-manager.ts:32 |
| `listCheckpoints` | state/resume.ts:12 (but resume.ts is itself dead -- see chain) |
| `ClaudeSpawnOptions` | claude-cli.ts internal (lines 63, 114, 324) |
| `WeaverResult` | weaver-spawner.ts internal (line 233 return type) |
| `BUDGET_WARNING` | pipeline.ts:27, 751 |
| `BUDGET_CAP` | pipeline.ts:28, 752 |
| `InFlightPass` | state.ts:39 (used in PipelineState interface) |

---

## Duplicate/Redundant Logic (Not Dead but Wasteful)

These are NOT dead code but represent duplicated implementations that could be consolidated:

### D-1. Two `resolveProjectRoot()` functions

- `cli.ts:49` -- walks up looking for `design-system/`
- `config/paths.ts:29` -- walks up looking for `.git/`
- Only `cli.ts` version is used. The `paths.ts` version is dead.

### D-2. Two `checkBudget()` functions

- `orchestrator/phase-router.ts:90` -- returns `{ warning: boolean; exceeded: boolean }` (USED)
- `logging/cost-tracker.ts:56` -- returns `BudgetStatus` with optional message (DEAD)
- Similar logic, different return types.

### D-3. Two conviction extraction approaches

- `conviction-manager.ts:extractConvictionFromResponse()` -- used by pass-executor.ts
- `response-handler.ts:extractConvictionAddition()` -- dead, never called
- Both parse the same markers with slightly different regex patterns.

---

## Removal Priority

### Phase 1: Zero-Risk Removal (~430 lines)

These have zero references and no chance of breaking anything:

1. **`logging/cost-tracker.ts`** -- delete entire file (75 lines)
2. **`state/resume.ts`** -- delete entire file (200 lines)
3. **`state/checkpoint.ts`** -- delete entire file (95 lines)
4. **`instrumentation/metrics.ts`** -- delete entire file (63 lines)
5. 4 dead constants from `config/constants.ts` (4 lines)
6. `parseClaudeResponse()` from response-handler.ts (35 lines)
7. `extractConvictionAddition()` from response-handler.ts (37 lines)
8. `extractVerifierObservations()` from response-handler.ts (8 lines)
9. `parseConvictionBlock()` from conviction-manager.ts (17 lines)
10. `loadAllTemplates()` from assembler.ts (10 lines)
11. 5 dead exports from `config/paths.ts` (~35 lines)

### Phase 2: Low-Risk Removal (~270 lines)

These represent unconnected features that may be wanted later:

1. **`instrumentation/report.ts`** -- delete entire file (203 lines)
2. **`pa/mini-pa-spawner.ts`** -- delete entire file (198 lines, but keep if mini-PA is planned)
3. **`logging/logger.ts`** -- delete entire file (109 lines, but keep if structured logging is planned)
4. `assemblePaAuditorPrompt()` from assembler.ts (26 lines)
5. `assemblePaIntegrativePrompt()` from assembler.ts (23 lines)
6. `assembleWeaverPrompt()` from assembler.ts (30 lines)
7. 5 dead type exports (can remove `export` keyword)

### Phase 3: Un-export Only

Make these `const` (not `export const`) since they're only used internally:
1. `PA_QUESTION_ASSIGNMENTS` in pa-questions.ts
2. `INFRASTRUCTURE_FILES` in corpus.ts

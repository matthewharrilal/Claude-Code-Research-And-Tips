# Types Audit: Code vs Plan State Schema v3

**Auditor:** audit-types agent
**Date:** 2026-02-28
**Scope:** All 7 files in `tools/deep-build/src/types/` against plan lines 566-690 (State Schema v3) + lines 883-947 (RunReport) + lines 1152-1159 (Checklist B)

---

## Summary

| Verdict | Count |
|---------|-------|
| IMPLEMENTED | 118 |
| PARTIAL | 3 |
| MISSING | 0 |
| WRONG | 0 |
| CODE ADDITIONS (beyond plan) | 11 |

**Overall:** PASS. All plan-specified fields are present with correct types. No BLOCKING gaps. 3 minor deviations (all defensible). 11 code additions that extend the plan without contradicting it.

---

## B.2: `types/state.ts` — PipelineState v3

### PipelineState (33 fields)

| Plan Field | Plan Type | Code Status | Notes |
|------------|-----------|-------------|-------|
| `schemaVersion` | `3` | IMPLEMENTED | Literal `3` |
| `runId` | `string` | IMPLEMENTED | |
| `configHash` | `string` | IMPLEMENTED | |
| `contentPath` | `string` | IMPLEMENTED | |
| `slug` | `string` | IMPLEMENTED | |
| `startedAt` | `string` | IMPLEMENTED | |
| `completedAt?` | `string` | IMPLEMENTED | Optional |
| `currentPhase` | `'corpus-integration' \| 'pa-hardening' \| 'paused' \| 'completed' \| 'failed'` | IMPLEMENTED | Exact match |
| `phaseReason?` | `string` | IMPLEMENTED | Optional |
| `currentSubsetId` | `number` | IMPLEMENTED | |
| `currentPass` | `number` | IMPLEMENTED | |
| `totalCorpusPasses` | `number` | IMPLEMENTED | |
| `lastCompletedCorpusPass` | `number` | IMPLEMENTED | |
| `completedPACycles` | `number` | IMPLEMENTED | |
| `maxPACycles` | `number` | IMPLEMENTED | |
| `lastPAScore?` | `number` | IMPLEMENTED | Optional |
| `paScoreThreshold` | `number` | IMPLEMENTED | |
| `artifactPath` | `string` | IMPLEMENTED | |
| `currentArtifactHash` | `string` | IMPLEMENTED | |
| `artifactSizeHistory` | `number[]` | IMPLEMENTED | |
| `passes` | `PassRecord[]` | IMPLEMENTED | |
| `convictionLayer` | `ConvictionEntry[]` | IMPLEMENTED | |
| `convictionEntryCount` | `number` | IMPLEMENTED | |
| `discoveryLog` | `string[]` | IMPLEMENTED | |
| `discoveryEntryCount` | `number` | IMPLEMENTED | |
| `verifierObservations` | `string[]` | IMPLEMENTED | |
| `cost` | `CostTracker` | IMPLEMENTED | |
| `checkpoints` | `string[]` | IMPLEMENTED | |
| `paCycleRecords` | `PACycleRecord[]` | IMPLEMENTED | |
| `inFlightPass?` | `{ passNumber; startedAt; role }` | PARTIAL | See finding F-01 |
| `errorHistory` | `ErrorRecord[]` | IMPLEMENTED | |
| `status` | `'running' \| 'paused' \| 'completed' \| 'failed'` | IMPLEMENTED | |

**Finding F-01 (LOW):** Plan defines `inFlightPass` as inline `{ passNumber: number; startedAt: string; role: string }`. Code extracts it to a named `InFlightPass` interface (lines 44-48) with identical fields. Functionally equivalent, structurally cleaner. **Verdict: PARTIAL but defensible.**

### PassRecord (22 fields)

| Plan Field | Plan Type | Code Status | Notes |
|------------|-----------|-------------|-------|
| `passNumber` | `number` | IMPLEMENTED | |
| `subsetId` | `number` | IMPLEMENTED | |
| `passWithinSubset` | `number` | IMPLEMENTED | |
| `role` | 7-member string union | PARTIAL | See finding F-02 |
| `rotationIndex` | `number` | IMPLEMENTED | |
| `startedAt` | `string` | IMPLEMENTED | |
| `completedAt` | `string` | IMPLEMENTED | |
| `inputTokens` | `number` | IMPLEMENTED | |
| `outputTokens` | `number` | IMPLEMENTED | |
| `cacheReadTokens` | `number` | IMPLEMENTED | |
| `cacheWriteTokens` | `number` | IMPLEMENTED | |
| `cost` | `number` | IMPLEMENTED | |
| `artifactSizeBefore` | `number` | IMPLEMENTED | |
| `artifactSizeAfter` | `number` | IMPLEMENTED | |
| `artifactHash` | `string` | IMPLEMENTED | |
| `retryCount` | `number` | IMPLEMENTED | |
| `hasConvictionAddition` | `boolean` | IMPLEMENTED | |
| `hasDiscoveryAddition` | `boolean` | IMPLEMENTED | |
| `corpusFilesLoaded` | `string[]` | IMPLEMENTED | |
| `referenceFilesLoaded` | `string[]` | IMPLEMENTED | |
| `success` | `boolean` | IMPLEMENTED | |
| `error?` | `string` | IMPLEMENTED | |

**Finding F-02 (LOW):** Plan's `role` type is inline 7-member union: `'builder' | 'verifier' | 'retrospective' | 'pa-auditor' | 'integrative-auditor' | 'weaver' | 'refine-builder'`. Code uses `AgentRole` type alias which includes the same 7 PLUS 3 additional roles: `'cross-subset-verifier' | 'tc-derivation' | 'content-analysis'`. All 3 additions are explicitly referenced elsewhere in the plan (lines 746, 779-780) as roles with dedicated templates. The plan's inline union was incomplete; the code correctly captures all roles. **Verdict: PARTIAL but the CODE is more correct than the plan's inline schema.**

### AgentRole (10 members)

| Plan Member | Code Status | Notes |
|-------------|-------------|-------|
| `'builder'` | IMPLEMENTED | |
| `'verifier'` | IMPLEMENTED | |
| `'retrospective'` | IMPLEMENTED | |
| `'pa-auditor'` | IMPLEMENTED | |
| `'integrative-auditor'` | IMPLEMENTED | |
| `'weaver'` | IMPLEMENTED | |
| `'refine-builder'` | IMPLEMENTED | |
| `'cross-subset-verifier'` | CODE ADDITION | Plan references this role at line 746 but omits from schema union |
| `'tc-derivation'` | CODE ADDITION | Plan references this role at line 779 but omits from schema union |
| `'content-analysis'` | CODE ADDITION | Plan references this role at line 780 but omits from schema union |

### CostTracker (10 fields)

| Plan Field | Plan Type | Code Status | Notes |
|------------|-----------|-------------|-------|
| `totalInputTokens` | `number` | IMPLEMENTED | |
| `totalOutputTokens` | `number` | IMPLEMENTED | |
| `totalCacheReadTokens` | `number` | IMPLEMENTED | |
| `totalCacheWriteTokens` | `number` | IMPLEMENTED | |
| `totalCostUsd` | `number` | IMPLEMENTED | |
| `perSubset` | `Record<number, number>` | IMPLEMENTED | |
| `perRole` | `Record<string, number>` | IMPLEMENTED | |
| `budgetWarningThresholdUsd` | `number` | IMPLEMENTED | |
| `budgetHardCapUsd` | `number` | IMPLEMENTED | |
| `warningThresholdHit` | `boolean` | IMPLEMENTED | |
| `hardCapHit` | `boolean` | IMPLEMENTED | |

### ConvictionEntry (5 fields)

| Plan Field | Plan Type | Code Status | Notes |
|------------|-----------|-------------|-------|
| `passNumber` | `number` | IMPLEMENTED | |
| `subsetId` | `number` | IMPLEMENTED | |
| `dimension` | 6-member union | IMPLEMENTED | Exact match |
| `content` | `string` | IMPLEMENTED | |
| `addedAt` | `string` | IMPLEMENTED | |

### WeaverVerdict (8 fields + nested)

| Plan Field | Plan Type | Code Status | Notes |
|------------|-----------|-------------|-------|
| `pa05Score` | `number` | IMPLEMENTED | |
| `tier5` | `number` | IMPLEMENTED | |
| `top5Fixes` | `Array<{rank, category, description, auditorSources, convergenceCount}>` | IMPLEMENTED | All 5 sub-fields match |
| `top5Fixes[].rank` | `number` | IMPLEMENTED | |
| `top5Fixes[].category` | `'MECHANICAL' \| 'STRUCTURAL' \| 'COMPOSITIONAL'` | IMPLEMENTED | |
| `top5Fixes[].description` | `string` | IMPLEMENTED | |
| `top5Fixes[].auditorSources` | `string[]` | IMPLEMENTED | |
| `top5Fixes[].convergenceCount` | `number` | IMPLEMENTED | |
| `emotionalArc` | `{authority, closure, surprise, delight}` | IMPLEMENTED | All 4 sub-fields `number` |
| `soulViolations` | `string[]` | IMPLEMENTED | |
| `verdict` | `'SHIP' \| 'REFINE' \| 'RETHINK'` | IMPLEMENTED | |
| `mode` | `'FLOOR' \| 'COMPOSED' \| 'DESIGNED' \| 'CEILING' \| 'FLAGSHIP'` | IMPLEMENTED | |
| `narrativeSummary` | `string` | IMPLEMENTED | |

### PACycleRecord (7 fields)

| Plan Field | Plan Type | Code Status | Notes |
|------------|-----------|-------------|-------|
| `cycleNumber` | `number` | IMPLEMENTED | |
| `startedAt` | `string` | IMPLEMENTED | |
| `completedAt` | `string` | IMPLEMENTED | |
| `screenshotPaths` | `string[]` | IMPLEMENTED | |
| `gateResults` | `Record<string, boolean>` | IMPLEMENTED | |
| `auditorReportPaths` | `string[]` | IMPLEMENTED | |
| `weaverVerdict` | `WeaverVerdict` | IMPLEMENTED | |
| `routingDecision` | `'SHIP' \| 'REFINE' \| 'RETHINK'` | IMPLEMENTED | |
| `cost` | `number` | IMPLEMENTED | |

### ErrorCategory (14 members)

| Plan Member | Code Status |
|-------------|-------------|
| `'model-overload'` | IMPLEMENTED |
| `'rate-limit'` | IMPLEMENTED |
| `'timeout'` | IMPLEMENTED |
| `'invalid-response'` | IMPLEMENTED |
| `'html-extraction-failed'` | IMPLEMENTED |
| `'validation-failed'` | IMPLEMENTED |
| `'state-corruption'` | IMPLEMENTED |
| `'config-mismatch'` | IMPLEMENTED |
| `'budget-exceeded'` | IMPLEMENTED |
| `'playwright-error'` | IMPLEMENTED |
| `'file-not-found'` | IMPLEMENTED |
| `'permission-denied'` | IMPLEMENTED |
| `'network-error'` | IMPLEMENTED |
| `'unknown'` | IMPLEMENTED |

### createInitialState factory function

Code includes a `createInitialState()` factory (lines 143-196) not in the plan schema section. Default values match plan comments:
- `maxPACycles`: default 3 (matches plan comment)
- `paScoreThreshold`: default 3.5 (matches plan comment)
- `budgetWarningThresholdUsd`: default 150 (matches plan `$150`)
- `budgetHardCapUsd`: default 250 (matches plan `$250`)

**All defaults verified correct.**

---

## B.1: `types/pipeline.ts` — PipelineConfig, CorpusSubset, CorpusFile, PipelinePhase

### PipelinePhase

| Plan Phase | Code Status | Notes |
|------------|-------------|-------|
| `'corpus-integration'` | IMPLEMENTED | |
| `'pa-hardening'` | IMPLEMENTED | |
| `'paused'` | IMPLEMENTED | |
| `'completed'` | IMPLEMENTED | |
| `'failed'` | IMPLEMENTED | |
| `'pre-pipeline'` | CODE ADDITION | Not in plan's PipelineState.currentPhase union, but reasonable for Phase 0 |

**Finding F-03 (LOW):** `PipelinePhase` type includes `'pre-pipeline'` which is NOT in the plan's `currentPhase` union. However, the plan describes Phase 0 (workspace setup, tc-derivation, content-analysis) as occurring before corpus-integration. Adding `'pre-pipeline'` as a distinct phase is a defensible code addition. Note: `PipelineState.currentPhase` inline union does NOT include `'pre-pipeline'` -- it only exists in the standalone `PipelinePhase` type. This is an inconsistency between the two types in the code. **Severity: LOW but should be reconciled.**

### PipelineConfig (14 fields)

Plan doesn't provide a formal PipelineConfig interface. Checklist B.1 just says "PipelineConfig". Code implements reasonable fields. All fields align with CLI flags mentioned in plan (--content, --dry-run, --resume, --subset, --skip-phase-a). **IMPLEMENTED.**

### CorpusSubset (4 fields)

| Code Field | Status | Notes |
|------------|--------|-------|
| `id` | IMPLEMENTED | Plan says subsets 1-7 |
| `name` | IMPLEMENTED | Plan mentions "Research Core" etc. |
| `files` | IMPLEMENTED | CorpusFile[] for rotating files |
| `infrastructureFiles` | IMPLEMENTED | Plan mentions mechanism catalog, components, tokens as always-loaded |

### CorpusFile (3 fields)

| Code Field | Status | Notes |
|------------|--------|-------|
| `path` | IMPLEMENTED | |
| `name` | IMPLEMENTED | |
| `approximateLines` | IMPLEMENTED | For token estimation |

### ViewportConfig (3 fields)

Plan checklist B.6 places `ViewportConfig` under `pa.ts`, but code defines it in `pipeline.ts` and imports it in `pa.ts`. This is a file placement difference, not a missing type.

| Code Field | Status | Notes |
|------------|--------|-------|
| `width` | IMPLEMENTED | |
| `height` | IMPLEMENTED | |
| `label` | IMPLEMENTED | |

**Finding F-04 (LOW):** `ViewportConfig` is defined in `pipeline.ts` but plan checklist B.6 lists it under `pa.ts`. The code's placement is arguably better (viewports are general pipeline config, not PA-specific). `pa.ts` correctly imports it. **No functional impact.**

---

## B.3: `types/pass.ts` — PassDefinition, AgentRole, RotationSchedule, PassResult

### PassDefinition (6 fields)

Plan doesn't provide a formal PassDefinition interface. Checklist B.3 just names it. Code implements:

| Code Field | Type | Status | Notes |
|------------|------|--------|-------|
| `passNumber` | `number` | IMPLEMENTED | |
| `subsetId` | `number` | IMPLEMENTED | |
| `passWithinSubset` | `number` | IMPLEMENTED | |
| `role` | `AgentRole` | IMPLEMENTED | |
| `rotationIndex` | `number` | IMPLEMENTED | |
| `isVerifier` | `boolean` | IMPLEMENTED | Convenience field |

### RotationSchedule (4 fields)

| Code Field | Type | Status | Notes |
|------------|------|--------|-------|
| `rotationIndex` | `number` | IMPLEMENTED | |
| `shift` | `number` | IMPLEMENTED | |
| `rotatedFiles` | `string[]` | IMPLEMENTED | |
| `description` | `string` | IMPLEMENTED | |

### PassResult (10 fields)

| Code Field | Type | Status | Notes |
|------------|------|--------|-------|
| `success` | `boolean` | IMPLEMENTED | |
| `html?` | `string` | IMPLEMENTED | Builder output |
| `convictionAddition?` | `ConvictionAdditionRaw` | IMPLEMENTED | |
| `discoveryEntries?` | `string[]` | IMPLEMENTED | |
| `verifierObservations?` | `string` | IMPLEMENTED | |
| `rawResponse` | `ClaudeResponse` | IMPLEMENTED | |
| `cost` | `number` | IMPLEMENTED | |
| `inputTokens` | `number` | IMPLEMENTED | |
| `outputTokens` | `number` | IMPLEMENTED | |
| `cacheReadTokens` | `number` | IMPLEMENTED | |
| `cacheWriteTokens` | `number` | IMPLEMENTED | |
| `error?` | `string` | IMPLEMENTED | |

### ClaudeResponse (plan lines 336-344)

| Plan Field | Plan Type | Code Status | Notes |
|------------|-----------|-------------|-------|
| `type` | `'result'` | IMPLEMENTED | |
| `subtype` | `'success' \| 'error_max_turns' \| 'error_...'` | IMPLEMENTED | Code uses `string` union with explicit values |
| `is_error` | `boolean` | IMPLEMENTED | |
| `result` | `string` | IMPLEMENTED | |
| `session_id` | `string` | IMPLEMENTED | |
| `total_cost_usd` | `number` | IMPLEMENTED | |
| `usage.input_tokens` | `number` | IMPLEMENTED | |
| `usage.output_tokens` | `number` | IMPLEMENTED | |
| `usage.cache_read_tokens?` | `number` | IMPLEMENTED | Optional |
| `usage.cache_write_tokens?` | `number` | IMPLEMENTED | Optional |

### ConvictionAdditionRaw (6 fields)

Not formally defined in plan but maps to ConvictionEntry dimensions. All 6 dimensions present as optional string fields: `built`, `trying`, `rejected`, `surprised`, `wanted`, `unresolved`. **CODE ADDITION, correct.**

### PASS_ROLES constant

Plan (line 171): `P1=builder, P2=verifier, P3=builder, P4=builder, P5=verifier, P6=builder, P7=builder, P8=verifier`. Code (lines 89-98): exact match. **IMPLEMENTED.**

### getRotationIndex function

Plan describes rotation A (passes 1-3), B (passes 4-6), C (passes 7-8). Code (lines 106-110): exact match. **IMPLEMENTED.**

---

## B.4: `types/prompts.ts` — PromptTemplate, PromptVariable, AssembledPrompt

### PromptTemplate (3 fields)

| Code Field | Type | Status |
|------------|------|--------|
| `name` | `string` | IMPLEMENTED |
| `content` | `string` | IMPLEMENTED |
| `filePath` | `string` | IMPLEMENTED |

### PromptVariableName (27 members)

Plan has a Prompt Variable Reference section. Code defines a comprehensive 27-member union. All plan-referenced variables are present.

### PromptVariable (3 fields)

| Code Field | Type | Status |
|------------|------|--------|
| `name` | `PromptVariableName` | IMPLEMENTED |
| `value` | `string` | IMPLEMENTED |
| `estimatedTokens` | `number` | IMPLEMENTED |

### AssembledPrompt (6 fields)

| Code Field | Type | Status |
|------------|------|--------|
| `text` | `string` | IMPLEMENTED |
| `estimatedTokens` | `number` | IMPLEMENTED |
| `resolvedVariables` | `PromptVariableName[]` | IMPLEMENTED |
| `unresolvedVariables` | `string[]` | IMPLEMENTED |
| `wasTrimmed` | `boolean` | IMPLEMENTED |
| `trimDetails?` | `string` | IMPLEMENTED |

---

## B.5: `types/errors.ts` — 14 error categories, OrchestratorError base class

### ErrorCategory (14 members)

All 14 plan-specified categories present. See table above under State Schema section. **IMPLEMENTED.**

### ErrorRecord (8 fields)

Plan references `ErrorRecord[]` in PipelineState but never defines the interface. Code defines it:

| Code Field | Type | Status | Notes |
|------------|------|--------|-------|
| `category` | `ErrorCategory` | CODE ADDITION | Reasonable |
| `message` | `string` | CODE ADDITION | Reasonable |
| `passNumber?` | `number` | CODE ADDITION | Context |
| `subsetId?` | `number` | CODE ADDITION | Context |
| `role?` | `string` | CODE ADDITION | Context |
| `timestamp` | `string` | CODE ADDITION | Necessary |
| `recovered` | `boolean` | CODE ADDITION | Matches plan retry semantics |
| `retryAttempt?` | `number` | CODE ADDITION | Matches plan retry semantics |
| `stack?` | `string` | CODE ADDITION | Debug info |

### Error subclasses

Plan mentions OrchestratorError base class. Code implements:
- `OrchestratorError` (base) with `category`, `recovered`, and `toRecord()` method
- `ValidationError` extends OrchestratorError
- `ClaudeInvocationError` extends OrchestratorError
- `StateCorruptionError` extends OrchestratorError
- `BudgetExceededError` extends OrchestratorError (with `currentCost`, `budgetCap` fields)
- `HtmlExtractionError` extends OrchestratorError
- `PlaywrightError` extends OrchestratorError
- `FileNotFoundError` extends OrchestratorError (with `filePath` field)
- `ConfigMismatchError` extends OrchestratorError

Plan checklist B.5 mentions: "OrchestratorError, ValidationError, ClaudeInvocationError, StateCorruptionError, BudgetExceededError". Code adds 4 more subclasses (HtmlExtractionError, PlaywrightError, FileNotFoundError, ConfigMismatchError). All are reasonable extensions mapping to existing ErrorCategory values. **IMPLEMENTED + EXTENDED.**

---

## B.6: `types/pa.ts` — ViewportConfig, ScreenshotManifest, GateResult, GateVerdict, AuditorReport

### AuditorId type

Code adds `AuditorId = 'A' | 'B' | ... | 'I'` (9 auditors). Plan specifies 9 auditors A-I. **CODE ADDITION, correct.**

### ScreenshotManifest (4 fields)

| Code Field | Type | Status |
|------------|------|--------|
| `viewport` | `ViewportConfig` | IMPLEMENTED |
| `path` | `string` | IMPLEMENTED |
| `capturedAt` | `string` | IMPLEMENTED |
| `fullPage` | `boolean` | IMPLEMENTED |

### GateResult (5 fields)

| Code Field | Type | Status |
|------------|------|--------|
| `gateId` | `string` | IMPLEMENTED |
| `passed` | `boolean` | IMPLEMENTED |
| `description` | `string` | IMPLEMENTED |
| `message?` | `string` | IMPLEMENTED |
| `tier` | `'REQUIRED' \| 'RECOMMENDED' \| 'ADVISORY' \| 'DIAGNOSTIC' \| 'BRIEF'` | IMPLEMENTED |

### GateVerdict (6 fields)

| Code Field | Type | Status |
|------------|------|--------|
| `gates` | `GateResult[]` | IMPLEMENTED |
| `passedCount` | `number` | IMPLEMENTED |
| `failedCount` | `number` | IMPLEMENTED |
| `requiredFailures` | `number` | IMPLEMENTED |
| `allRequiredPassed` | `boolean` | IMPLEMENTED |
| `evaluatedAt` | `string` | IMPLEMENTED |

### AuditorReport (7 fields)

| Code Field | Type | Status |
|------------|------|--------|
| `auditorId` | `AuditorId` | IMPLEMENTED |
| `focusArea` | `string` | IMPLEMENTED |
| `reportText` | `string` | IMPLEMENTED |
| `questionsAnswered` | `string[]` | IMPLEMENTED |
| `reportPath` | `string` | IMPLEMENTED |
| `success` | `boolean` | IMPLEMENTED |
| `cost` | `number` | IMPLEMENTED |
| `error?` | `string` | IMPLEMENTED |

### MiniPAResult (4 fields)

Not formally defined in plan schema but referenced in plan (lines 219-221, 767). Code adds:

| Code Field | Type | Status |
|------------|------|--------|
| `auditorIds` | `AuditorId[]` | CODE ADDITION |
| `reports` | `AuditorReport[]` | CODE ADDITION |
| `trend` | `'improving' \| 'stable' \| 'regressing'` | CODE ADDITION |
| `cost` | `number` | CODE ADDITION |

**Reasonable extension for mini-PA feature described in plan.**

---

## B.7: `types/report.ts` — RunReport interface

### RunReport.meta (11 fields)

| Plan Field | Plan Type | Code Status |
|------------|-----------|-------------|
| `runId` | `string` | IMPLEMENTED |
| `contentPath` | `string` | IMPLEMENTED |
| `slug` | `string` | IMPLEMENTED |
| `startedAt` | `string` | IMPLEMENTED |
| `completedAt` | `string` | IMPLEMENTED |
| `totalDurationMs` | `number` | IMPLEMENTED |
| `totalDurationHuman` | `string` | IMPLEMENTED |
| `totalPasses` | `number` | IMPLEMENTED |
| `totalCostUsd` | `number` | IMPLEMENTED |
| `paCycles` | `number` | IMPLEMENTED |
| `finalVerdict` | `'SHIP' \| 'REFINE' \| 'RETHINK' \| 'FAILED' \| 'BUDGET_CAP'` | IMPLEMENTED |

### RunReport.costBreakdown (4 nested)

| Plan Field | Code Status |
|------------|-------------|
| `perSubset` | IMPLEMENTED |
| `perRole` | IMPLEMENTED |
| `perPhase` | IMPLEMENTED |
| `tokenTotals` (input/output/cacheRead/cacheWrite) | IMPLEMENTED |

### RunReport.artifactEvolution (5 fields)

| Plan Field | Code Status |
|------------|-------------|
| `initialSize` | IMPLEMENTED |
| `finalSize` | IMPLEMENTED |
| `peakSize` | IMPLEMENTED |
| `sizeHistory` | IMPLEMENTED |
| `subsetDeltas` | IMPLEMENTED |

### RunReport.verifierSignal (3 fields)

| Plan Field | Code Status |
|------------|-------------|
| `observations` | IMPLEMENTED |
| `sentimentArc` | IMPLEMENTED |
| `concerns` | IMPLEMENTED |

### RunReport.rotationAnalysis (2 fields)

| Plan Field | Code Status |
|------------|-------------|
| `filesPerSubset` | IMPLEMENTED |
| `positionHistory` | IMPLEMENTED |

### RunReport.paResults? (7 fields)

| Plan Field | Code Status |
|------------|-------------|
| `cycles` | IMPLEMENTED |
| `finalPa05` | IMPLEMENTED |
| `pa05Trajectory` | IMPLEMENTED |
| `tier5Scores` | IMPLEMENTED |
| `auditorConvergence` | IMPLEMENTED |
| `fixCategories` | IMPLEMENTED |
| `finalVerdict` | IMPLEMENTED |

### RunReport.qualityTrajectory (1 field, nested)

| Plan Field | Code Status |
|------------|-------------|
| `checkpoints` array with all 5 sub-fields | IMPLEMENTED |

### RunReport.errors (4 fields)

| Plan Field | Plan Type | Code Status | Notes |
|------------|-----------|-------------|-------|
| `total` | `number` | IMPLEMENTED | |
| `recovered` | `number` | IMPLEMENTED | |
| `unrecovered` | `number` | IMPLEMENTED | |
| `byCategory` | `Record<ErrorCategory, number>` | PARTIAL | See F-05 |

**Finding F-05 (LOW):** Plan uses `Record<ErrorCategory, number>` (all 14 keys required). Code uses `Partial<Record<ErrorCategory, number>>` (keys optional). The code version is more practical -- a run likely won't encounter all 14 error categories. **Verdict: PARTIAL but code is more correct for real usage.**

---

## Findings Summary

| ID | Severity | Description | Classification |
|----|----------|-------------|----------------|
| F-01 | LOW | `inFlightPass` extracted to named `InFlightPass` interface vs inline type in plan | Structurally cleaner, functionally identical |
| F-02 | LOW | `AgentRole` has 10 members vs plan's inline 7. Extra 3 (`cross-subset-verifier`, `tc-derivation`, `content-analysis`) are all plan-referenced roles | Code is more complete than plan schema |
| F-03 | LOW | `PipelinePhase` includes `'pre-pipeline'` not in plan's `currentPhase` union. Also creates inconsistency between `PipelinePhase` and `PipelineState.currentPhase` | Should reconcile the two types |
| F-04 | LOW | `ViewportConfig` in `pipeline.ts` not `pa.ts` as checklist states | Better placement, imported correctly |
| F-05 | LOW | `RunReport.errors.byCategory` uses `Partial<Record>` vs plan's `Record` | Code is more practical |

### BLOCKING: 0
### HIGH: 0
### MEDIUM: 0
### LOW: 5

---

## Code Additions Beyond Plan (Not Findings)

These are types/constructs the code adds that the plan doesn't specify but doesn't contradict:

1. **`InFlightPass` named interface** -- extracted from inline type
2. **`AgentRole` as standalone type** -- plan uses inline union
3. **3 extra `AgentRole` members** -- `cross-subset-verifier`, `tc-derivation`, `content-analysis`
4. **`PipelinePhase` standalone type** with `'pre-pipeline'`
5. **`ErrorRecord` interface** -- plan references but never defines
6. **6 error subclasses beyond plan's 4** -- HtmlExtractionError, PlaywrightError, FileNotFoundError, ConfigMismatchError
7. **`ConvictionAdditionRaw` interface** -- raw extraction format
8. **`ClaudeResponse` interface** -- matches plan's code example exactly
9. **`MiniPAResult` interface** -- for mini-PA feature
10. **`AuditorId` type alias** -- 'A' through 'I'
11. **`createInitialState()` factory** -- with correct defaults

---

## Checklist B Status

| Item | Status | Notes |
|------|--------|-------|
| B.1 `types/pipeline.ts` | PASS | PipelineConfig, CorpusSubset, CorpusFile, PipelinePhase all present |
| B.2 `types/state.ts` | PASS | ALL v3 fields present, PACycleRecord, WeaverVerdict complete |
| B.3 `types/pass.ts` | PASS | PassDefinition, AgentRole, RotationSchedule, PassResult all present |
| B.4 `types/prompts.ts` | PASS | PromptTemplate, PromptVariable, AssembledPrompt all present |
| B.5 `types/errors.ts` | PASS | 14 error categories, OrchestratorError base class + 8 subclasses |
| B.6 `types/pa.ts` | PASS | ScreenshotManifest, GateResult, GateVerdict, AuditorReport present. ViewportConfig in pipeline.ts (imported) |
| B.7 `types/report.ts` | PASS | RunReport matches plan schema (1 Partial field: byCategory) |

**Overall Checklist B: 7/7 PASS**

---

## Recommendation

No action required. All plan-specified types are implemented correctly. The 5 LOW findings are all defensible deviations where the code improves on the plan's inline definitions. The only item worth considering for cleanup is F-03 (reconciling `PipelinePhase` standalone type with `PipelineState.currentPhase` inline union to include or exclude `'pre-pipeline'` consistently).

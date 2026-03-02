# Wave 2: Code Quality & Best Practices Audit

**Auditor:** Senior TypeScript Code Quality Auditor (Opus 4.6)
**Scope:** `tools/deep-build/src/` — 38 TypeScript files, ~3,900 SLOC
**Date:** 2026-02-28
**Mode:** Research only, zero source modifications

---

## Executive Summary

The codebase is a well-structured pipeline orchestrator with strong foundations: zero `any` types, `strict` mode enabled, excellent error taxonomy, and clean dependency injection. The architecture is coherent for its purpose — orchestrating multi-pass LLM builds with PA auditing. Key concerns: duplicated cost-tracking logic across three locations, a 240-line DI factory that conflates wiring with domain logic, insufficient test infrastructure (1 fixture file, 0 test files), and several `as unknown as` casts that bypass type safety.

**Overall Rating: 7.0/10** — Solid for a v1 orchestrator. Needs tests, DI extraction, and cost-tracker consolidation to reach production-grade.

---

## Dimension 1: TypeScript Usage Quality — Rating: 8/10

### Strictness Configuration

`tsconfig.json` line 6: `"strict": true` — CONFIRMED. This enables all strict checks:
- `strictNullChecks`
- `strictFunctionTypes`
- `strictBindCallApply`
- `strictPropertyInitialization`
- `noImplicitAny`
- `noImplicitThis`
- `alwaysStrict`

No `skipDefaultLibCheck` or other weakening flags. `forceConsistentCasingInFileNames: true` is present. **Excellent.**

### Any Types

Zero instances of explicit `any` across all 38 files. Confirmed via regex search for `: any`, `<any>`, and `any[`. **Zero — best possible.**

### Type Casts (`as`)

Total `as` casts found: 17 substantive instances (excluding `as const` and import aliases).

**Legitimate casts (acceptable):**
- `src/utils.ts:117,124,136` — `JSON.parse(text) as T` in generic `safeJsonParse<T>`. Unavoidable; `JSON.parse` returns `unknown` in strict mode.
- `src/config/constants.ts:78` — `as const` assertion for tuple. Correct pattern.
- `src/orchestrator/conviction-manager.ts:22` — `as const` on dimension array. Correct.
- `src/orchestrator/rotation.ts:14` — `as const` on labels. Correct.
- `src/orchestrator/pipeline.ts:921` — `'REQUIRED' as const`. Correct narrowing.

**Problematic casts (should be fixed):**

| Location | Cast | Issue | Severity |
|----------|------|-------|----------|
| `cli.ts:85-86` | `state.contentPath as string`, `state.slug as string` | JSON parsed with `Record<string, unknown>`, then cast. Should use a type guard or parse with `PipelineState`. | MODERATE |
| `pipeline.ts:935` | `(idChar \|\| 'A') as AuditorId` | Silently defaults to 'A' if parsing fails. The `\|\|` fallback masks bugs — if auditor ID extraction fails, the auditor is misidentified. | SIGNIFICANT |
| `resume.ts:52` | `config as unknown as Record<string, unknown>` | Double-cast (`as unknown as`) — the most dangerous TypeScript pattern. Bypasses the type system entirely. Should create a `toRecord()` helper on PipelineConfig. | SIGNIFICANT |
| `logger.ts:62,70,79,87` | `record as unknown as Record<string, unknown>` | Four instances of double-cast. PassRecord, ErrorRecord, and object types all force-cast. Should make `appendJsonl` generic or accept `unknown`. | MODERATE |
| `weaver-spawner.ts:175,199` | `parsed as unknown as WeaverVerdict` | Double-cast on parsed JSON. After field validation, should construct the WeaverVerdict explicitly rather than cast. | MODERATE |
| `mini-pa-spawner.ts:129` | `[...MINI_PA_AUDITORS] as AuditorId[]` | Safe spread from const tuple, but the cast is unnecessary — the spread already produces `('A' \| 'C' \| 'G')[]` which satisfies `AuditorId[]`. | MINOR |
| `assembler.ts:205,211` | `name as PromptVariableName` | Cast from string to union type. The `seen` Set contains arbitrary regex matches from template content. If a template has `{UNKNOWN_VAR}`, the cast succeeds but the variable won't resolve — silently falls to `unresolved`. This is by design but the cast obscures it. | MINOR |
| `report.ts:96` | `fix.category.toLowerCase() as keyof typeof fixCategories` | Dangerous: `toLowerCase()` could produce any string, cast trusts the weaver's JSON. If weaver outputs `"mechanical"` (lowercase), it works; `"Mechanical"` (mixed case) would also pass the cast but produce undefined behavior on object access. | MODERATE |

### Generics

Used appropriately in two places:
- `utils.ts:45` — `retry<T>` for generic retry logic. Clean.
- `utils.ts:114` — `safeJsonParse<T>` for generic JSON parsing. Clean.

No over-engineering. No under-use (all type-variable positions are warranted). **Good.**

### Union Type Exhaustiveness

- `types/errors.ts:6-20` — `ErrorCategory` union (14 members). Used in switch at `response-handler.ts` (rate-limit/overload patterns) but **NOT exhaustively** — no `never` check at `default` case.
- `types/state.ts:75-85` — `AgentRole` union (10 members). Used in `constants.ts` Record lookups (MAX_TURNS, ALLOWED_TOOLS). Not exhaustively matched anywhere — roles looked up via `Record<string, ...>` with `??` fallback rather than `Record<AgentRole, ...>`.
- `types/pipeline.ts:5-11` — `PipelinePhase` union (6 members). Exhaustiveness partially checked via `validPhases` array in `state-manager.ts:67` — but using `includes()` on a string array, not a discriminated union switch.

**Recommendation:** Use `Record<AgentRole, number>` instead of `Record<string, number>` for `MAX_TURNS` and `ALLOWED_TOOLS` in `constants.ts:84,98`. This makes the compiler enforce that every role has a configuration entry.

---

## Dimension 2: Function Design — Rating: 7/10

### Functions Over 50 Lines

| Function | File:Line | Lines | Decomposition Recommendation |
|----------|-----------|-------|------------------------------|
| `createDefaultDeps` | `pipeline.ts:760-998` | **238** | **CRITICAL.** This is the DI factory. It contains 15 async implementations for pipeline deps, each with domain logic (path resolution, file reading, report construction). Should be split into separate factory functions per concern: `createPhase0Deps()`, `createPhaseADeps()`, `createPhaseBDeps()`. |
| `runPhaseB` | `pipeline.ts:387-625` | **238** | Large but well-structured with clear step numbering. Each PA cycle step is distinct. Could extract `executePACycle()` as a sub-function, but the current structure with numbered steps is readable. |
| `runPhaseA` | `pipeline.ts:243-382` | **139** | Contains nested loops (subsets x passes). The inner loop body (pass execution + budget check) could be extracted to `executeSubsetPass()` but it's not critical — the loop body is sequential and linear. |
| `executeSinglePass` | `pass-executor.ts:37-261` | **224** | Has 18 numbered steps. Each step is small (5-15 lines), and the numbering makes the flow traceable. The function's length is a consequence of its sequential nature — extracting sub-functions would scatter the flow without reducing complexity. **Acceptable.** |
| `spawnOnce` | `claude-cli.ts:114-280` | **166** | Promise constructor with process management. The complexity is inherent to child process lifecycle management (stdout/stderr streams, timeout, kill groups, backpressure). Extracting sub-functions would complicate the closure-based state management. **Acceptable.** |
| `trimIfNeeded` | `assembler.ts:230-315` | **85** | Two trim phases (conviction, corpus). Well-commented. Each phase is independent. Could extract `trimConviction()` and `trimValleyFiles()` but gain would be marginal. |
| `spawnAuditors` | `auditor-spawner.ts:165-311` | **146** | Two-phase spawn (parallel A-H, sequential I). Clear phase separation with console logging. Could extract `spawnIntegrativeAuditor()` but the sequential dependency makes inline clearer. |

### Functions With 5+ Parameters

| Function | File:Line | Params | Recommendation |
|----------|-----------|--------|----------------|
| `updateCostTracker` | `pass-executor.ts:321-353` | 7 | Should accept `{ cost, inputTokens, outputTokens, cacheReadTokens, cacheWriteTokens }` from `PassResult` directly. |
| `buildWeaverPrompt` | `weaver-spawner.ts:20-130` | 6 | Should use an options object: `{ auditorReports, gateResults, screenshotPaths, convictionBrief, builderReflection, htmlPath }`. |
| `spawnWeaver` | `weaver-spawner.ts:224-278` | 8 | Should use an options object. This is the worst case — 8 positional parameters. |
| `assembleWeaverPrompt` | `assembler.ts:482-511` | 8 | Same issue. 8 positional string parameters — easy to swap two strings and get a subtle bug with no compiler error. |
| `assembleRefineBuilderPrompt` | `assembler.ts:513-542` | 5 | Borderline. Could use options object but the types are distinct enough (string, string, PipelineState, PipelineConfig, optional string). |

### Side Effects Not Obvious From Name

| Function | File:Line | Hidden Side Effect |
|----------|-----------|-------------------|
| `computeConfigHash` | `utils.ts:253` | Name suggests pure function. It IS pure. **Good.** |
| `addConviction` | `conviction-manager.ts:32` | Returns new state (immutable). Name suggests mutation. **Minor naming issue.** |
| `checkBudget` | `phase-router.ts:90` | Pure function despite "check" name. **Good.** |
| `checkBudget` | `cost-tracker.ts:56` | **Duplicate.** Same name, different file, different implementation. The one in `cost-tracker.ts` reads from `cost.hardCapHit` (which is mutated); the one in `phase-router.ts` compares `totalCostUsd` against thresholds. See Dimension 3 for impact. |

### Pure vs Impure Separation

Generally good. Pure functions:
- All `types/` — pure data
- `orchestrator/rotation.ts` — pure
- `orchestrator/phase-router.ts` — pure
- `validation/diff-checker.ts` — pure
- `validation/html-validator.ts` — pure
- `orchestrator/conviction-manager.ts` — pure (returns new state)
- `config/pa-questions.ts` — pure
- `prompts/assembler.ts` — impure (reads filesystem), but all I/O is through `readFileChecked`/`loadFileOrEmpty` helpers

Impure functions are concentrated in: `cli.ts`, `state/`, `agents/`, `pa/`, `logging/`, `instrumentation/`. **Good separation.**

---

## Dimension 3: Error Handling Patterns — Rating: 7/10

### Custom Error Types

9 custom error classes, all extending `OrchestratorError`:

| Error Class | File:Line | Category | Domain |
|-------------|-----------|----------|--------|
| `OrchestratorError` | `errors.ts:34` | (base) | Generic orchestrator errors |
| `ValidationError` | `errors.ts:60` | `validation-failed` | HTML/config validation |
| `ClaudeInvocationError` | `errors.ts:67` | configurable | CLI spawn failures |
| `StateCorruptionError` | `errors.ts:74` | `state-corruption` | State integrity |
| `BudgetExceededError` | `errors.ts:81` | `budget-exceeded` | Cost cap breaches |
| `HtmlExtractionError` | `errors.ts:93` | `html-extraction-failed` | Response parsing |
| `PlaywrightError` | `errors.ts:100` | `playwright-error` | Browser automation |
| `FileNotFoundError` | `errors.ts:107` | `file-not-found` | Filesystem |
| `ConfigMismatchError` | `errors.ts:117` | `config-mismatch` | Resume validation |

**Coverage is excellent.** Every error category from the 14-category taxonomy has a corresponding class or is covered by `OrchestratorError` with an explicit category.

### Error Context Preservation

**Good patterns:**
- `OrchestratorError.toRecord()` at `errors.ts:45` — converts to structured `ErrorRecord` with passNumber, subsetId, role, retryAttempt, and stack trace. Context-rich.
- `pass-executor.ts:90-96` — failed spawns capture the error message and create a structured `PassResult` with error field.
- `resume.ts:39-73` — 6-step resume with detailed error messages including paths, hashes, and recovery suggestions.

**Bad patterns:**
- `pipeline.ts:218-221` — `TC derivation failed: ${error}` logs the error but does NOT preserve context before re-throwing. The `error` object is stringified (losing stack), then the raw error is re-thrown. The log line will show `[object Object]` for non-Error values.
- `auditor-spawner.ts:222-236` — Failed auditors create a report with `error: errorMsg` but lose the error category/type. Was it a rate limit? Timeout? Unknown. The error message is a flat string.
- `pipeline.ts:937` — `catch { console.error(...) }` in auditor report reading — catches ALL errors silently, including permission errors and encoding errors, not just "file missing."

### Logged AND Re-thrown (Double Reporting)

| Location | Pattern | Issue |
|----------|---------|-------|
| `pipeline.ts:218-221` | `log('error', ...) + throw error` | Logs then re-throws. Caller in `runPipeline` will also catch and may log again. |
| `pipeline.ts:226-233` | `log('error', ...) + throw error` | Same pattern for content analysis. |
| `pipeline.ts:407-410` | `log('error', ...) + throw error` | Screenshot capture. |
| `pipeline.ts:433-436` | `log('error', ...) + throw error` | Auditor spawning. |
| `pipeline.ts:466-468` | `log('error', ...) + throw error` | Weaver failure. |

This is a systematic pattern: Phase 0 and Phase B steps log errors then re-throw. The top-level `runPipeline` or `main()` in `cli.ts` will catch and log again. Result: **every fatal error is logged twice** — once at the call site and once at the catch boundary.

**Fix:** Either log OR throw, not both. Let the outermost catch handle logging.

### Inconsistent Error Handling Between Cost Trackers

There are THREE cost-tracking implementations:

1. `pass-executor.ts:321-353` — `updateCostTracker()` — immutable, returns new state
2. `pipeline.ts:630-655` — `updateCostFromResponse()` — immutable, returns new state
3. `cost-tracker.ts:13-45` — `updateCost()` — **MUTATES `state.cost` in place** and returns the mutated object

The comment at `cost-tracker.ts:12` says "Also mutates state.cost in place" — this CONTRADICTS the immutable pattern used everywhere else. However, `cost-tracker.ts:updateCost()` appears to be **dead code** — it's never imported by any other module. The pipeline uses `updateCostFromResponse()` and `updateCostTracker()` instead.

Similarly, `cost-tracker.ts:checkBudget()` is a **duplicate** of `phase-router.ts:checkBudget()` with different logic (checks `hardCapHit` flag vs. comparing `totalCostUsd`). Only `phase-router.ts` is used.

**Verdict:** `logging/cost-tracker.ts` is dead code that also has a mutation bug. See Dimension 6 for dead code analysis.

---

## Dimension 4: Naming Conventions — Rating: 8/10

### Case Conventions

| Convention | Expected | Actual | Compliance |
|-----------|----------|--------|------------|
| Functions | camelCase | camelCase | 100% |
| Types/Interfaces | PascalCase | PascalCase | 100% |
| Constants | UPPER_SNAKE | UPPER_SNAKE | 100% |
| File names | kebab-case | kebab-case | 100% |
| Enum-like unions | PascalCase | Mixed — some string literals | 95% |

### Abbreviation Consistency

| Abbreviation | Usage | Consistent? |
|-------------|-------|-------------|
| `cfg` vs `config` | Both used. `cfg` in `createDefaultDeps` closures, `config` everywhere else | NO — should standardize on `config` |
| `dir` vs `directory` | `outputDir`, `workspaceDir`, `paDir` — always `dir` suffix | YES |
| `PA` vs `pa` | Type names use `PA` (PascalCase); variables and file paths use `pa` (lowercase) | YES — follows convention |
| `pr` for `projectRoot` | Used in `assembler.ts` only. Unclear. | NO — should be `projectRoot` |
| `vp` for viewport | `screenshot-capture.ts:29,44`. Unclear. | MINOR — used in tight loop, acceptable |

### Function Names Accurately Describe Behavior

**Accurate:**
- `atomicWriteFile` — writes via .tmp then renames. Name matches.
- `extractConvictionFromResponse` — extracts conviction from response text. Precise.
- `checkBudget` — returns budget status without side effects. Accurate.
- `computeRotation` — computes rotation without I/O. Pure as name suggests.

**Misleading:**
- `addConviction` (`conviction-manager.ts:32`) — returns new state, doesn't mutate. Should be `withConviction` or `addConvictionEntry` to signal immutability.
- `recordPassFailure` (`pass-executor.ts:269`) — returns new state (immutable) despite "record" implying mutation.
- `createDefaultDeps` (`pipeline.ts:760`) — not just creating deps; it also wires up 15 async implementations with significant domain logic (path resolution, file reading, report construction). Name understates complexity.

---

## Dimension 5: Code Organization — Rating: 7/10

### Module Structure

```
src/
  agents/          # claude-cli.ts, response-handler.ts (CLI interaction)
  config/          # constants.ts, corpus.ts, pa-questions.ts, paths.ts (configuration)
  instrumentation/ # metrics.ts, report.ts (post-run analysis)
  logging/         # cost-tracker.ts, logger.ts (logging + dead cost tracker)
  orchestrator/    # pipeline.ts, pass-executor.ts, phase-router.ts, etc. (core loop)
  pa/              # auditor-spawner.ts, weaver-spawner.ts, etc. (PA subsystem)
  prompts/         # assembler.ts (template loading + variable resolution)
  state/           # state-manager.ts, checkpoint.ts, resume.ts (persistence)
  types/           # errors.ts, pa.ts, pass.ts, pipeline.ts, prompts.ts, report.ts, state.ts
  validation/      # diff-checker.ts, gate-runner.ts, html-validator.ts
  cli.ts           # Entry point
  utils.ts         # Shared utilities
```

**Organization is intuitive.** A new developer would understand the structure immediately. The module boundaries map cleanly to domain concepts.

### Public API vs Internal

There is NO explicit public API boundary. All modules export everything. No `index.ts` barrel files. No `@internal` annotations. The entry point (`cli.ts`) imports from `utils.ts` and `config/constants.ts` directly, then dynamically imports `orchestrator/pipeline.ts`.

**Impact:** Any module can import from any other module. The DI pattern in `pipeline.ts` mitigates this for the core loop (pass-executor only sees `PassExecutorDeps`), but the PA subsystem, prompts, and validation modules are free to cross-reference.

### Circular Dependencies

**No circular dependencies found.** The import graph is a DAG:

```
cli.ts → orchestrator/pipeline.ts → {pass-executor, phase-router, rotation, workspace-setup, cross-subset-verifier}
  ↓
orchestrator/* → {agents/*, prompts/*, state/*, validation/*, pa/*}
  ↓
agents/*, prompts/*, state/*, validation/*, pa/* → {config/*, types/*, utils.ts}
  ↓
config/* → types/*
types/* → (no imports except cross-type references)
```

`agents/response-handler.ts` imports from `utils.ts` and `types/`. `orchestrator/pass-executor.ts` imports from `agents/response-handler.ts`. No cycles.

**However:** `prompts/assembler.ts:16` imports from `orchestrator/rotation.ts` — a cross-boundary import from `prompts/` into `orchestrator/`. This is the only cross-boundary import and it's for the pure `computeRotation` function. Not a cycle, but it violates the layering (prompts should depend on config/types, not orchestrator).

### File Organization for New Developers

**Strengths:**
- Every file has a JSDoc header comment explaining its purpose
- File names match their primary export
- `types/` directory is comprehensive — every interface is defined
- `config/` clearly separates constants from corpus definitions

**Weaknesses:**
- `logging/cost-tracker.ts` is dead code that will confuse new developers. It exports `updateCost` and `checkBudget` which are never used. The REAL cost tracking is in `pass-executor.ts` and `pipeline.ts`. A developer would waste time understanding the wrong module.
- `cli.ts:49-62` duplicates `resolveProjectRoot()` from `config/paths.ts:29-40` with different logic (one checks `.git`, the other checks `design-system/`). A developer won't know which is canonical.
- Two `printDryRun` functions exist: `cli.ts:129` and `pipeline.ts:681` (`printExecutionPlan`). Both produce dry-run output. The one in `cli.ts` is called; the one in `pipeline.ts` is called from `runPipeline` when `config.dryRun` is true. They produce different output.

---

## Dimension 6: Testability Assessment — Rating: 3/10

### Current Test Coverage

**Test files:** 0
**Test fixtures:** 1 (`tests/fixtures/sample-content.md`)
**Test framework:** None installed (no jest, vitest, mocha, or node:test in package.json)
**Test scripts:** None in package.json

**Effective test coverage: 0%.**

### Dependency Injection — Enabling Testability

The DI pattern in `pass-executor.ts` is well-designed:

```typescript
export interface PassExecutorDeps {
  assemblePrompt(...): Promise<string>;
  spawnClaude(...): Promise<ClaudeResponse>;
  validateHtml(html: string): { valid: boolean; errors: string[] };
  saveState(...): Promise<void>;
}
```

This makes `executeSinglePass` fully testable with mock deps. **Excellent.**

The DI pattern extends to `PipelineDeps` in `pipeline.ts:44-95` which adds 12 more injectable operations. All pipeline logic can be tested without spawning real Claude processes. **Excellent.**

### Modules Hardest to Test

| Module | Difficulty | Why |
|--------|-----------|-----|
| `agents/claude-cli.ts` | HARD | Spawns real child processes, manages process groups, uses timers. Would need `child_process.spawn` mock. |
| `pa/screenshot-capture.ts` | HARD | Requires Playwright browser. Would need Playwright's test fixtures or a mock browser. |
| `validation/gate-runner.ts` | HARD | Requires Playwright + a browser-side JS file. Would need browser mock. |
| `pa/http-server.ts` | MEDIUM | Starts real HTTP server. Would need port management in tests. |
| `prompts/assembler.ts` | MEDIUM | Reads filesystem extensively. Would need a fixture directory with all template and corpus files. |

| Module | Difficulty | Why |
|--------|-----------|-----|
| `orchestrator/phase-router.ts` | EASY | Pure functions, zero I/O. |
| `orchestrator/rotation.ts` | EASY | Pure function, zero I/O. |
| `orchestrator/conviction-manager.ts` | EASY | Pure functions, zero I/O. |
| `validation/diff-checker.ts` | EASY | Pure function, zero I/O. |
| `validation/html-validator.ts` | EASY | Pure function, zero I/O. |
| `utils.ts` | EASY | Most functions are pure. Only `atomicWriteFile`, `readFileChecked`, `appendJsonl` touch filesystem. |
| `types/state.ts:createInitialState` | EASY | Pure factory function. |

### Top 5 Functions That MOST Need Tests

1. **`executeSinglePass`** (`pass-executor.ts:37-261`) — The core inner loop. 18 steps, multiple failure paths (spawn failure, HTML extraction failure, validation failure). DI is already set up. A test suite with ~10 cases (happy path, spawn failure, empty HTML, invalid HTML, budget exceeded, conviction extraction, discovery extraction, verifier pass, first pass with empty artifact, archive failure) would catch regressions in the most critical code path.

2. **`safeJsonParse` + `recoverTruncatedClaudeResponse`** (`utils.ts:114-248`) — Handles truncated JSON from Claude CLI. This is the most fragile parser in the system — it has three recovery stages and manually parses JSON escape sequences. Edge cases: truncated mid-unicode-escape, truncated mid-result-string, multiple JSON objects in output, empty input. The `stripTrailingPartialEscape` helper is particularly tricky (odd-backslash counting).

3. **`extractHtml`** (`response-handler.ts:58-100`) — Three fallback strategies for HTML extraction. Should test: marker-based extraction, DOCTYPE fallback, lowercase doctype, full-result fallback, no HTML at all, nested HTML comments, malformed markers.

4. **`routePhaseB` + `detectStall`** (`phase-router.ts:25-83`) — Deterministic routing logic that controls pipeline outcomes (SHIP/REFINE/RETHINK). Edge cases: exactly at threshold, below rethink on first cycle vs second, stall with improving baseline, stall with flat scores.

5. **`computeRotation`** (`rotation.ts:23-56`) — Determines file ordering for every pass. Rotation correctness is critical for attention bias mitigation. Edge cases: SHIFT_TABLE fallback for unknown file counts, rotation index clamping, shift modulo with edge values (0, fileCount-1, fileCount).

### Framework Recommendation

Given the ESM module system (`"type": "module"`) and zero existing test infrastructure:

- **vitest** — native ESM support, fast, zero-config for TypeScript via `vitest.config.ts`
- Add to package.json: `"vitest": "^3.0.0"` in devDependencies
- Add script: `"test": "vitest run"`, `"test:watch": "vitest"`

---

## Dimension 7: Performance Concerns — Rating: 8/10

### Synchronous File I/O on Hot Paths

| Function | File:Line | I/O Type | Hot Path? | Concern |
|----------|-----------|----------|-----------|---------|
| `atomicWriteFile` | `utils.ts:15-19` | Sync write + rename | YES (every pass) | Uses `writeFileSync` + `renameSync`. On the hot path (called after every pass for state save + artifact write + archive). For a ~100KB artifact and ~50KB state, this blocks the event loop for ~1-2ms per call. **Acceptable** — the pipeline is inherently sequential (waits for Claude), so blocking the event loop doesn't matter. |
| `readFileChecked` | `utils.ts:102-107` | Sync read | YES (every pass) | Used in `assembleBuilderPrompt` to load 5+ corpus files, 3 infrastructure files, conviction brief, content markdown, content map, current artifact. That's ~10 sync reads per pass. Each file is <1MB. **Acceptable** for the same reason — pipeline is sequential. |
| `appendJsonl` | `utils.ts:262-277` | Sync append | YES (every pass) | `appendFileSync` for JSONL logging. Small records (~200 bytes). **Acceptable.** |
| `saveState` | `state-manager.ts:13-16` | Via atomicWriteFile | YES | State file grows to ~50-100KB. One write per pass. **Acceptable.** |
| `Logger.appendLog` | `logger.ts:35-38` | `appendFileSync` | YES | Single line per call. **Acceptable.** |
| `fs.writeFileSync` in checkpoint | `checkpoint.ts:28-62` | Sync write x4 | NO (per-subset) | Writes artifact, hash, state, observations, cost. Only runs 7 times total. **Not a concern.** |

**Verdict:** All sync I/O is on paths that are inherently blocked by Claude CLI calls (5-10 minutes each). No real performance impact.

### Memory Concerns

| Concern | Location | Analysis |
|---------|----------|----------|
| Max stdout guard | `claude-cli.ts:40` | `MAX_STDOUT_BYTES = 50MB`. Prevents OOM from runaway Claude output. **Good.** |
| Prompt assembly | `assembler.ts` | Loads all corpus files + infrastructure files into memory simultaneously. With 5 corpus files (~500 lines each) + 3 infra files (~1800 lines total) + artifact (~3000 lines) + conviction/discovery, peak memory for a single prompt assembly is ~2-3MB. **Not a concern.** |
| State accumulation | `pipeline.ts` | `state.passes` array grows by one record per pass (56 corpus + PA passes). Each record is ~500 bytes. Total: ~30KB. **Not a concern.** |
| Auditor reports in memory | `pipeline.ts:932-947` | In `spawnWeaver` dep, all 9 auditor reports are read into memory simultaneously. Each is ~5-20KB. Total: ~100-200KB. **Not a concern.** |
| Process group tracking | `claude-cli.ts:43` | `activeChildren` Set tracks child processes. Never grows beyond 1-2 (pipeline is sequential). **Not a concern.** |

**No memory leaks identified.**

### String Operations

| Pattern | Location | Analysis |
|---------|----------|----------|
| Template substitution | `assembler.ts:204-217` | Uses `replaceAll()` in a loop over variable names. The loop iterates ~15-20 times for builder prompts. Each `replaceAll` scans the full prompt (~100K chars). Total: ~2M character scans. Runs once per pass. **Acceptable.** |
| Response parsing | `response-handler.ts` | Regex matching on response text (~10-50K chars). Single-pass regex. **Acceptable.** |
| JSON truncation recovery | `utils.ts:181-248` | Manual character-by-character scan for quote/backslash. Worst case: full scan of response (~50K chars). **Acceptable.** |

### HTTP Server Resource Management

`pa/http-server.ts:46-78`:
- Tracks active connections via `connections` Set
- `kill()` destroys all connections before `server.close()`
- Used with `try/finally` pattern in `createDefaultDeps` (`pipeline.ts:849-856`)

**Good resource management.** No leaked servers.

### Playwright Resource Management

`pa/screenshot-capture.ts:33-101`:
- Browser launched in `try`, closed in `finally`
- Per-viewport context created and closed within the loop
- **Potential issue:** If `context.close()` throws (line 97), the loop continues but the browser might be in a bad state. The `finally` at line 99-101 will still close the browser.

`validation/gate-runner.ts:34-74`:
- Browser launched, then closed in `finally` with `.catch(() => {})`
- **Good:** The catch prevents unhandled rejection if browser is already dead.

---

## Cross-Cutting Findings

### Finding 1: Dead Code in `logging/cost-tracker.ts`

The entire file (`cost-tracker.ts`, 76 lines) is dead code:
- `updateCost()` is never imported anywhere
- `checkBudget()` duplicates `phase-router.ts:checkBudget()` — only the phase-router version is used
- `BudgetStatus` interface is never imported anywhere

The file also contains the ONLY mutation-based cost update in the codebase (`cost-tracker.ts:20-26` mutates `state.cost` in place), contradicting the immutable pattern used by `pass-executor.ts:321-353` and `pipeline.ts:630-655`.

**Recommendation:** Delete `logging/cost-tracker.ts` entirely.

### Finding 2: Duplicated `resolveProjectRoot()`

Two implementations exist:
1. `config/paths.ts:29-40` — walks up looking for `.git` directory
2. `cli.ts:49-62` — walks up looking for `design-system/` directory

These use different heuristics and could return different results. Both have fallback logic.

**Recommendation:** Use `config/paths.ts:resolveProjectRoot()` everywhere. Delete the duplicate in `cli.ts`.

### Finding 3: Duplicated Cost Update Logic

Three implementations of cost aggregation:
1. `pass-executor.ts:321-353` — `updateCostTracker()` — used for corpus passes
2. `pipeline.ts:630-655` — `updateCostFromResponse()` — used for Phase 0 and Phase B roles
3. `pipeline.ts:439-451, 473-484` — inline cost updates in Phase B for auditors and weaver

All three follow the same pattern: spread cost, add to perRole/perSubset, update thresholds. The inline updates in Phase B (auditor/weaver cost tracking) don't update cache token counters, creating an accounting gap.

**Recommendation:** Consolidate into a single `updateCost(state, { cost, inputTokens, outputTokens, cacheReadTokens, cacheWriteTokens, role, subsetId? })` function. The one in `cost-tracker.ts` attempted this but got the immutability wrong.

### Finding 4: `assembler.ts` Imports From `orchestrator/`

`prompts/assembler.ts:16` imports `computeRotation` from `orchestrator/rotation.ts`. This creates a dependency from the "prompts" layer to the "orchestrator" layer:

```
prompts/assembler.ts → orchestrator/rotation.ts → config/constants.ts
```

This means prompts depend on orchestrator internals. If rotation logic changes, prompt assembly is affected.

**Recommendation:** Move `computeRotation` to `config/rotation.ts` (it's a pure function that depends only on `config/constants.ts`). Then both `orchestrator/` and `prompts/` can import from `config/`.

### Finding 5: Template Variable Injection Defense

`assembler.ts:208-209` has a V-05 injection defense:
```typescript
const safeValue = value.replace(/\{([A-Z_]{2,})\}/g, '⟨$1⟩');
```

This replaces `{VARIABLE}` patterns in variable values with `⟨VARIABLE⟩` (Unicode angle brackets) to prevent content markdown from injecting template variables. **Good security practice.** However:

- The replacement is one-way — `⟨...⟩` characters will appear in the final prompt. If content markdown legitimately contains `{SOMETHING}`, it gets mangled.
- The regex requires 2+ uppercase letters with underscores. A single-letter variable `{X}` would NOT be escaped.
- There's no test verifying this defense works.

### Finding 6: Logger Uses Emoji in Error Output

`logger.ts:46` — `process.stderr.write(`⚠ ${message}\n`);`
`logger.ts:55` — `process.stderr.write(`✗ ${detail}\n`);`

These emit Unicode emoji to stderr. In non-UTF-8 terminals or CI environments, these may render as garbage. The rest of the codebase uses `[ERROR]` and `[WARN]` text prefixes.

### Finding 7: Conviction Extraction Regex Duplication

Two places extract conviction dimensions from response text:
1. `conviction-manager.ts:86-103` — `extractConvictionFromResponse()` — uses `^LABEL:` with multiline regex
2. `response-handler.ts:114-150` — `extractConvictionAddition()` — uses `LABEL:` with newline lookahead regex

Both parse the same markers (`CONVICTION_ADDITION_START/END`) and the same 6 dimensions. They use slightly different regex patterns. `pass-executor.ts` calls (1) at line 162; `response-handler.ts` exports (2) but it's only used by `pipeline.ts:extractRefinedHtml` path which doesn't actually call it.

The `response-handler.ts` version uses per-dimension patterns (6 specific regexes) while `conviction-manager.ts` uses a single generic pattern. They could disagree on edge cases (e.g., `BUILT:` appearing inside another dimension's content).

**Recommendation:** Use one canonical extraction. `conviction-manager.ts` is the one actually called in the hot path.

---

## Verification Checklist (per verification-before-completion skill)

Before claiming this audit is complete, I verify:

- [x] Read ALL 38 `.ts` files in `src/` — confirmed
- [x] Read `tsconfig.json` — confirmed `strict: true`
- [x] Read `package.json` — confirmed zero test framework
- [x] Searched for `any` types — confirmed zero
- [x] Searched for `as` casts — found and categorized all 17
- [x] Checked test directory — confirmed only 1 fixture, 0 test files
- [x] Checked for circular imports — confirmed none
- [x] Identified dead code — `cost-tracker.ts` + duplicate `resolveProjectRoot`
- [x] All file:line references verified against actual source

---

## Summary Ratings

| Dimension | Rating | Key Finding |
|-----------|--------|------------|
| 1. TypeScript Usage | 8/10 | Zero `any`, `strict: true`. 6 double-casts (`as unknown as`) need attention. |
| 2. Function Design | 7/10 | `createDefaultDeps` (238 lines) is the critical decomposition target. 5 functions with 5+ params need options objects. |
| 3. Error Handling | 7/10 | Excellent error taxonomy (9 classes, 14 categories). Systematic log-and-rethrow double-reporting. 3 cost-tracking implementations. |
| 4. Naming Conventions | 8/10 | Consistent casing. 2 abbreviation inconsistencies (`cfg`/`config`, `pr`/`projectRoot`). 3 misleading function names. |
| 5. Code Organization | 7/10 | Clean module structure. No circular deps. Dead code in `cost-tracker.ts`. Cross-layer import in `assembler.ts`. |
| 6. Testability | 3/10 | DI pattern is excellent. Zero tests exist. Zero test framework. 5 critical functions identified. |
| 7. Performance | 8/10 | All sync I/O is on inherently blocked paths. Good resource management. No memory leaks. |

**Composite: 7.0/10**

---

## Top 10 Recommendations (Priority Order)

1. **Add test framework (vitest) and write tests for top 5 functions** — The DI pattern makes this straightforward. The codebase is designed for testability but has zero tests. This is the single highest-leverage improvement.

2. **Delete `logging/cost-tracker.ts`** — Dead code with a mutation bug. Confuses new developers. Zero imports.

3. **Consolidate cost-tracking into one function** — Three implementations (`updateCostTracker`, `updateCostFromResponse`, inline auditor/weaver updates) should be unified.

4. **Extract `createDefaultDeps` into per-concern factories** — Split the 238-line DI factory into `createPhase0Deps()`, `createCorpusDeps()`, `createPADeps()`. Each becomes ~50-80 lines.

5. **Fix double-reporting (log + rethrow)** — Remove `deps.log('error', ...)` calls that immediately precede `throw`. Let the outermost catch handle error logging.

6. **Replace 6 `as unknown as` double-casts** — Create proper type guards or explicit constructors (especially `weaver-spawner.ts:175,199` and `resume.ts:52`).

7. **Use `Record<AgentRole, ...>` for MAX_TURNS and ALLOWED_TOOLS** — Compiler will enforce completeness when new roles are added.

8. **Convert 5+ parameter functions to options objects** — Priority: `spawnWeaver` (8 params), `assembleWeaverPrompt` (8 params).

9. **Move `computeRotation` from `orchestrator/` to `config/`** — Fixes the cross-layer dependency from `prompts/assembler.ts`.

10. **Deduplicate `resolveProjectRoot`** — Use `config/paths.ts` version everywhere. Delete duplicate in `cli.ts`.

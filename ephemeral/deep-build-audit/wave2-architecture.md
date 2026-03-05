# Wave 2: Architecture & Design Patterns Audit

**Auditor:** Opus architecture agent (zero prior context)
**Scope:** `tools/deep-build/src/` -- 38 TypeScript files, ~7,215 lines
**Date:** 2026-02-28

---

## 1. Dependency Graph

### Full Import Map

```
                            ┌─────────────────────────────────┐
                            │            cli.ts (244)          │
                            │  Entry point, arg parsing        │
                            └──────────┬──────────────────────┘
                                       │ dynamic import
                                       v
                     ┌─────────────────────────────────────────────┐
                     │         orchestrator/pipeline.ts (998)       │
                     │  Top-level loop: Phase 0 / A / B             │
                     │  Defines PipelineDeps (extends PassExecDeps) │
                     │  createDefaultDeps() -- 240 lines inline     │
                     └────┬──────┬──────┬──────┬──────┬────────────┘
                          │      │      │      │      │
          ┌───────────────┘      │      │      │      └───────────────┐
          v                      v      v      v                      v
  pass-executor.ts (421)  rotation.ts  phase-router.ts  workspace-setup.ts  cross-subset-verifier.ts
  PassExecutorDeps iface   (56)         (98)             (128)               (91)
  conviction-manager.ts                                  conviction-manager.ts
  (131)
          │
          v
  ┌───────────────────────────────────────────────────────┐
  │                prompts/assembler.ts (542)               │
  │  10 public assemble*() functions                        │
  │  Template loading, variable resolution, token trimming  │
  └──────────┬──────────────────────────────────────────────┘
             │ loads templates from disk
             v
     templates/*.md (10 files)

  ┌──────────────────────────────────────────────┐
  │          agents/claude-cli.ts (355)           │
  │  spawnClaude(): spawn child_process           │
  │  retry logic, backpressure, cleanup, timeout  │
  └──────────────────────────────────────────────┘
             ^
             │ called by pipeline.ts deps AND pa/*.ts spawners
             │
  ┌──────────┼──────────────────────────────────────┐
  │  pa/auditor-spawner.ts (311)                     │
  │  pa/weaver-spawner.ts (278)                      │
  │  pa/mini-pa-spawner.ts (198)                     │
  │  pa/screenshot-capture.ts (104) -- Playwright    │
  │  pa/http-server.ts (79) -- localhost server      │
  └──────────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────────┐
  │  agents/response-handler.ts (212)                 │
  │  extractHtml(), extractConvictionAddition(),      │
  │  extractDiscoveryLog(), parseClaudeResponse()     │
  └──────────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────────┐
  │  validation/                                      │
  │    gate-runner.ts (75) -- Playwright gates        │
  │    html-validator.ts (66) -- structural checks    │
  │    diff-checker.ts (76) -- artifact diff          │
  └──────────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────────┐
  │  state/                                           │
  │    state-manager.ts (103) -- save/load/validate   │
  │    checkpoint.ts (94) -- subset snapshots          │
  │    resume.ts (199) -- 6-step resume algorithm      │
  └──────────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────────┐
  │  logging/                                         │
  │    logger.ts (109) -- 6-destination structured    │
  │    cost-tracker.ts (75) -- budget enforcement     │
  └──────────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────────┐
  │  instrumentation/                                 │
  │    metrics.ts (63) -- per-pass recording          │
  │    report.ts (203) -- post-run RunReport          │
  └──────────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────────┐
  │  types/ -- pure type definitions + error classes  │
  │    pipeline.ts (64), state.ts (196), pass.ts (110)│
  │    pa.ts (80), prompts.ts (69), report.ts (73),   │
  │    errors.ts (122)                                 │
  │  config/ -- constants + corpus + paths + questions │
  │    constants.ts (119), corpus.ts (154),            │
  │    paths.ts (69), pa-questions.ts (52)             │
  └──────────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────────┐
  │  utils.ts (277) -- shared pure utilities          │
  │    atomicWriteFile, sha256, retry, slugify,       │
  │    safeJsonParse, recoverTruncatedClaudeResponse, │
  │    estimateTokens, appendJsonl                    │
  └──────────────────────────────────────────────────┘
```

### Layering Assessment

The codebase has a clear layering:

```
Layer 0: types/ + config/     (pure types, constants, no I/O)
Layer 1: utils.ts             (pure utilities, minimal I/O)
Layer 2: state/, logging/     (state persistence, structured logging)
Layer 3: agents/, validation/ (external process interaction, Playwright)
Layer 4: prompts/             (template loading + variable resolution)
Layer 5: orchestrator/        (pipeline control flow)
Layer 6: pa/                  (PA subsystem -- depends on agents, state)
Layer 7: cli.ts               (entry point, depends on everything)
```

**Verdict: Mostly clean.** The layers are respected with one exception noted below.

### Circular Dependencies

**None detected.** The codebase carefully avoids circular imports through dependency injection (PassExecutorDeps, PipelineDeps interfaces). `pass-executor.ts` does not import `pipeline.ts`; instead it defines `PassExecutorDeps` and `pipeline.ts` extends it with `PipelineDeps`.

One subtle near-circular pattern: `assembler.ts` imports from `orchestrator/rotation.ts`, which means `prompts/` depends on `orchestrator/`. This is a minor layering violation -- `rotation.ts` is really a pure function that could live in `utils/` or `config/`.

### Coupling Hotspot

**Most depended-on modules (by import count):**

| Module | Dependents | Risk |
|--------|-----------|------|
| `types/errors.ts` | 14+ files | LOW (pure types + error classes) |
| `utils.ts` | 12+ files | MEDIUM (utility grab-bag) |
| `config/constants.ts` | 10+ files | LOW (read-only constants) |
| `types/state.ts` | 10+ files | MEDIUM (large interface) |
| `agents/claude-cli.ts` | 4 files | HIGH (external process, side effects) |

`claude-cli.ts` is the most dangerous coupling -- 4 direct consumers (pipeline.ts deps, auditor-spawner, weaver-spawner, mini-pa-spawner) all directly call `spawnClaude()`. This is mitigated by the DI pattern in pipeline.ts but NOT mitigated in the PA spawners, which import and call `spawnClaude` directly.

---

## 2. Design Patterns In Use

### 2.1 Dependency Injection (createDefaultDeps)

**Where:** `pipeline.ts:760-998` (238 lines)

**Assessment: Inconsistently applied.**

- **Phase A (corpus integration):** Fully injected. `executeSinglePass()` receives `PassExecutorDeps` with assemblePrompt, spawnClaude, validateHtml, saveState. This is textbook DI -- testable, mockable, clean.

- **Phase B (PA hardening):** Partially injected. The pipeline.ts `PipelineDeps` interface defines `spawnAuditors`, `spawnWeaver`, `spawnRefineBuilder` as injectable. Good.

- **PA spawners:** NOT injected. `auditor-spawner.ts`, `weaver-spawner.ts`, and `mini-pa-spawner.ts` directly import and call `spawnClaude` from `agents/claude-cli.ts`. They are not testable without mocking the module system. This is a consistency violation -- the same function (`spawnClaude`) is injected in one path and directly imported in another.

**Recommendation:** Extract a `SpawnClaudeFn` type and pass it to PA spawners, or create a `createPADeps()` factory.

### 2.2 Immutable State

**Where:** Throughout `pass-executor.ts`, `pipeline.ts`, `conviction-manager.ts`, `phase-router.ts`

**Assessment: Consistently applied with one VIOLATION.**

Every state mutation in the pipeline uses the spread pattern:
```typescript
state = { ...state, currentPhase: 'pa-hardening' };
state = { ...state, cost: { ...state.cost, totalCostUsd: newTotal } };
```

**VIOLATION: `logging/cost-tracker.ts:updateCost()` MUTATES state.cost in place.**

```typescript
// cost-tracker.ts line 20-42
export function updateCost(state, passResult, role, subsetId) {
  const cost = state.cost;
  cost.totalInputTokens += passResult.inputTokens;  // MUTATION!
  cost.totalOutputTokens += passResult.outputTokens; // MUTATION!
  // ...
}
```

This function directly mutates `state.cost` properties. However, this function appears to be **unused** -- the actual cost tracking in `pass-executor.ts` and `pipeline.ts` uses the immutable spread pattern. `cost-tracker.ts` is likely dead code from an earlier implementation.

**Verdict:** The live code is consistently immutable. The `cost-tracker.ts:updateCost()` is dead code with a mutation pattern.

### 2.3 Factory Pattern (createDefaultDeps)

**Assessment: Factory is too large.**

`createDefaultDeps()` is 238 lines of inline function definitions. It contains:
- 15 method implementations
- Dynamic imports for 8 modules
- Inline prompt assembly logic
- Auditor report reconstruction logic (lines 930-947)
- Gate result reshaping (lines 916-928)

This factory does too much data transformation. The `spawnAuditors` dep (lines 874-906) and `spawnWeaver` dep (lines 909-969) contain significant data reshaping/reconstruction logic that should be in dedicated adapter functions.

### 2.4 Strategy Pattern -- Missing

**pass-executor.ts** currently has two hardcoded branches:

```typescript
if (pass.role === 'builder') {
  // extract HTML, validate, write artifact, extract conviction, extract discovery
} else if (pass.role === 'verifier') {
  // store observations
}
```

A Strategy pattern would allow extending to new roles (retrospective, refine-builder) without modifying pass-executor internals. Currently, adding a new pass role to Phase A requires editing pass-executor's main function.

### 2.5 Observer Pattern -- Tightly Coupled Logging

The `Logger` class exists in `logging/logger.ts` but is **never used** by the pipeline. The actual pipeline uses:
- `deps.log()` -- a simple function that calls `console.log` with a prefix
- `deps.recordDecision()` -- appends to decisions.jsonl via `appendJsonl`

The Logger class has 6 structured destinations (run.log, passes.jsonl, errors.jsonl, decisions.jsonl, quality.jsonl) and structured methods (pass, logError, decision, quality, status). None of these are wired into the pipeline.

**This is a significant gap.** The structured logger was designed but never integrated. The pipeline uses ad-hoc console.log/console.error instead.

### 2.6 Template Method Pattern

The prompt assembler uses a consistent template method:
1. Load template from disk (`loadTemplate()`)
2. Build variables map (`resolveBuilderVariables()`)
3. Substitute template (`substituteTemplate()`)
4. Trim if needed (`trimIfNeeded()`)

This is cleanly factored through `buildAssembledPrompt()`. Each public `assemble*()` function provides its own variable map and delegates to the common template method.

---

## 3. Single Responsibility Principle

### 3.1 pipeline.ts (998 lines)

**Does it do too much? YES.**

Current responsibilities:
1. Phase 0 execution (TC derivation + content analysis)
2. Phase A execution (corpus integration loop)
3. Phase B execution (PA hardening loop)
4. Cost tracking helper (`updateCostFromResponse`)
5. HTML extraction for refinement (`extractRefinedHtml`)
6. Dry-run printing (`printExecutionPlan`)
7. Dependency injection factory (`createDefaultDeps` -- 238 lines)

**Recommended split:**

| Extracted Module | Lines | Responsibility |
|-----------------|-------|---------------|
| `orchestrator/deps-factory.ts` | ~250 | createDefaultDeps() |
| `orchestrator/phase-a.ts` | ~140 | runPhaseA() |
| `orchestrator/phase-b.ts` | ~240 | runPhaseB() |
| `orchestrator/phase-zero.ts` | ~40 | runPhase0() |
| `orchestrator/pipeline.ts` | ~200 | runPipeline() + dry-run |

This would reduce pipeline.ts from 998 to ~200 lines, with each phase independently testable.

### 3.2 createDefaultDeps (238 lines inline)

**Should these be separate modules? YES.**

The factory contains:
- 4 simple delegate wrappers (assemblePrompt, spawnClaude, validateHtml, saveState)
- 4 Phase 0 implementations (runTcDerivation, runContentAnalysis, etc.)
- 5 Phase B implementations (captureScreenshots, runGates, spawnAuditors, spawnWeaver, spawnRefineBuilder)
- 2 utility implementations (loadState, log, recordDecision)

The Phase B implementations contain 30-60 lines of data transformation each. These should be adapter functions in their own files.

### 3.3 assembler.ts (542 lines)

**Should it be split by role? MAYBE.**

Currently handles 8 prompt types:
1. `assembleBuilderPrompt` -- corpus builder
2. `assembleVerifierPrompt` -- corpus verifier
3. `assembleRetrospectivePrompt` -- retrospective
4. `assembleTcDerivationPrompt` -- TC derivation
5. `assembleContentAnalysisPrompt` -- content analysis
6. `assemblePaAuditorPrompt` -- PA auditor
7. `assemblePaIntegrativePrompt` -- PA integrative
8. `assembleWeaverPrompt` -- PA weaver
9. `assembleRefineBuilderPrompt` -- refine builder

However, these share substantial infrastructure:
- Template loading (shared)
- Variable substitution (shared)
- Token management (shared)
- Formatting helpers (shared)

Splitting by role would require either duplicating the infrastructure or creating a base module + role modules. Given the shared code, the current single-file approach is acceptable but at the upper limit. The file could be split into `assembler-core.ts` (template loading, substitution, trimming) + `assembler-corpus.ts` (builder/verifier/retrospective) + `assembler-pa.ts` (auditor/integrative/weaver/refine).

---

## 4. Open/Closed Principle

### 4.1 Adding a New Agent Role

**Files that need changing (VERIFIED):**

| File | Change Required |
|------|----------------|
| `types/state.ts` | Add to `AgentRole` union type |
| `config/constants.ts` | Add entry to `MAX_TURNS` record |
| `config/constants.ts` | Add entry to `ALLOWED_TOOLS` record |
| `prompts/assembler.ts` | Add new `assemble*Prompt()` function |
| `orchestrator/pipeline.ts` | Add to `createDefaultDeps()` and call site |

**Total: 4 files, 5 edits.** This matches the previous audit's finding.

### 4.2 Adding a New PA Question

**Files that need changing:**

| File | Change Required |
|------|----------------|
| `config/pa-questions.ts` | Add question ID to `PA_QUESTION_ASSIGNMENTS` array |

**Total: 1 file.** This is good -- the question routing is data-driven.

### 4.3 Adding a New Gate

**Files that need changing:**

| File | Change Required |
|------|----------------|
| `validation/gate-runner-browser.js` | Add gate check function (browser-side JS) |

**Total: 1 file.** Gates are fully encapsulated in the browser script. Good.

### 4.4 Changing Pipeline Phases

**Files that need changing:**

| File | Change Required |
|------|----------------|
| `types/pipeline.ts` | Update `PipelinePhase` union |
| `types/state.ts` | Update `currentPhase` union literal |
| `state/state-manager.ts` | Update `validPhases` array in `validateState` |
| `orchestrator/pipeline.ts` | Add new phase execution block in `runPipeline()` |

**Total: 4 files.** The phase set is hardcoded in 3 places (type, state type, validation).

### 4.5 PASS_CONFIG Registry Pattern

A registry pattern would reduce the "add new role" operation to 1 file:

```typescript
// config/pass-config.ts
interface PassConfig {
  role: AgentRole;
  maxTurns: number;
  allowedTools: string;
  strictMcp: boolean;
  assemblePrompt: (state, pass, config) => AssembledPrompt;
}

const PASS_REGISTRY: Map<AgentRole, PassConfig> = new Map([
  ['builder', { maxTurns: 1, allowedTools: '', strictMcp: false, assemblePrompt: assembleBuilderPrompt }],
  ['verifier', { maxTurns: 1, allowedTools: '', strictMcp: false, assemblePrompt: assembleVerifierPrompt }],
  // ...
]);
```

**Assessment: Appropriate but not urgent.** With 10 roles currently, the current approach is manageable. If roles grow beyond 15, the registry becomes essential.

---

## 5. Separation of Concerns

### 5.1 Prompt Construction vs Prompt Execution

**Well separated.**

- Prompt construction: `prompts/assembler.ts` -- loads templates, resolves variables, manages tokens
- Prompt execution: `agents/claude-cli.ts` -- spawns child process, handles I/O, retries

These never cross boundaries. The assembler produces a string, the CLI consumer receives a string.

### 5.2 State Management vs Business Logic

**Partially separated.**

- State persistence: `state/state-manager.ts` (save/load/validate) -- clean
- State mutations: Inline in `pass-executor.ts` and `pipeline.ts` -- these contain significant business logic mixed with state mutation

Example of mixing (pipeline.ts lines 439-451):
```typescript
// Business logic (cost calculation) mixed with state mutation
state = {
  ...state,
  cost: {
    ...state.cost,
    totalCostUsd: state.cost.totalCostUsd + auditorResult.totalCost,
    // ...
  },
};
```

This is acceptable for the immutable pattern but means you can't test cost tracking without instantiating full pipeline state.

### 5.3 I/O vs Computation

**Mostly separated, with notable exceptions:**

Pure computation (no I/O):
- `rotation.ts` -- pure function
- `phase-router.ts` -- pure routing logic
- `conviction-manager.ts` -- pure state transformations (extraction does string parsing)
- `diff-checker.ts` -- pure diff analysis
- `html-validator.ts` -- pure validation

Mixed I/O + computation:
- `assembler.ts` -- mixes template loading (I/O) with variable resolution (computation) and token management (computation). The I/O is contained in `loadTemplate()` and `loadFileOrEmpty()`, but they're called inline within computation functions.
- `pipeline.ts` -- extensively mixes file system I/O with control flow
- `pass-executor.ts` -- mixes file reads/writes with pass orchestration

---

## 6. Scalability Concerns

### 6.1 What happens with 20 corpus subsets instead of 7?

**Linear scaling, no structural issues.**

- `TOTAL_SUBSETS` constant controls the outer loop
- `CORPUS_SUBSETS` array is data-driven
- Total passes: 20 x 8 = 160 (vs current 56)
- State array growth: `state.passes[]` would have 160 entries (JSON serialization cost)
- Checkpoint directories: 20 x `S{N}/` directories

**Potential problem:** `formatSubsetSummaries()` in `assembler.ts` reads ALL retrospective files from ALL prior checkpoints and concatenates them into the prompt. With 20 subsets, by subset 20 you'd be loading 19 retrospective files into context. This could blow the token budget.

**Potential problem:** `state.artifactSizeHistory` grows by 1 per pass. With 160 passes, this array is 160 entries. Minor but worth noting for JSON serialization.

### 6.2 What happens with 16 PA auditors instead of 8?

**`Promise.allSettled` handles parallelism, but:**

- `PARALLEL_AUDITORS` array is hardcoded to `['A'..'H']`
- `AuditorId` type is a literal union: `'A' | 'B' | 'C' | ... | 'I'`
- `PA_QUESTION_ASSIGNMENTS` maps 8 auditors (A-H) to question sets
- Adding auditors J-P requires changes to types, config, and question assignments

**Concurrency concern:** 16 simultaneous `claude -p` processes would each consume significant memory and API rate limit capacity. The current system has no concurrency limiter -- it fires all 8 (or N) in parallel via `Promise.allSettled`. A semaphore or pool pattern would be needed.

**Prompt size concern:** The integrative auditor (I) receives ALL 8 auditor reports in its prompt. With 16 auditors, the integrative prompt would roughly double. Token budget risk.

### 6.3 What happens with 20 passes per subset instead of 8?

**Structural issues:**

- `PASS_ROLES` record only defines roles for passes 1-8. Passes 9-20 would get `undefined`, falling back to `'builder'` via `?? 'builder'`.
- `getRotationIndex()` handles 3 rotations (passes 1-3, 4-6, 7-8). Passes 9-20 would all get rotation index 2 (last case in the if-else chain).
- The conviction layer cap (`MAX_CONVICTION_ENTRIES = 10`) would be hit much earlier, causing FIFO eviction of early-subset data.

**These are hardcoded for the 8-pass rhythm and would need redesign for >8.**

---

## 7. API Surface Audit

### 7.1 Public API

The package has a single entry point:

```
cli.ts -> main() -> runPipeline(config, deps)
```

**Exported functions from pipeline.ts:**
- `runPipeline(config, deps)` -- the main orchestration function
- `createDefaultDeps(config)` -- the DI factory

**These are the only two intended public APIs.** Everything else is internal.

### 7.2 Is the CLI the only entry point?

**Yes.** `package.json` defines:
- `start`: `node dist/cli.js`
- `dev`: `tsx src/cli.ts`

There is no library entry point (no `index.ts`, no `main` field in package.json).

### 7.3 Could this be used as a library? Should it be?

**Could it?** Technically yes -- `runPipeline` and `createDefaultDeps` are exported. A consumer could import and call them.

**Should it?** No, not in its current state:
1. `createDefaultDeps` has hardcoded file paths and dynamic imports
2. No clean way to customize the corpus or template set
3. Side effects in module loading (process.on handlers in claude-cli.ts)
4. Playwright dependency is unconditional (even for non-PA usage)

**If library usage is desired:**
- Add an `index.ts` with curated exports
- Make corpus/templates configurable via config
- Lazy-load Playwright only when PA is needed
- Separate process lifecycle from pipeline logic

---

## 8. Comparison to Known Patterns

### 8.1 vs Turborepo/Nx

**Similarities:**
- Task graph execution (subsets -> passes -> phases)
- Caching/checkpointing (checkpoint dirs, state.json)
- Parallel execution (PA auditors via Promise.allSettled)

**Differences:**
- Turborepo uses a DAG of independent tasks; deep-build uses a strictly sequential state machine with embedded parallel steps
- No dependency-based invalidation -- the pipeline is always run forward
- No remote caching -- checkpoints are local only

### 8.2 State Machine vs DAG-Based Approach

**Current approach: Linear state machine.**

```
Phase 0 -> Phase A (S1P1..S7P8) -> Phase B (Cycle 1..3)
```

The pipeline is fundamentally sequential: each pass reads and writes the SAME artifact file. There is no opportunity for DAG-based parallelism within Phase A because pass N+1 depends on the artifact from pass N.

Phase B has internal parallelism (8 auditors), but the cycle structure is sequential (each cycle depends on the previous cycle's refinement).

**Verdict: The state machine is the correct pattern for this workload.** A DAG approach would only help if subsets could be built in parallel (they can't -- they share one artifact) or if PA auditors wrote to different artifacts (they don't -- they're read-only evaluators).

### 8.3 Could async generators simplify the pipeline flow?

**Marginally, for Phase A.**

Phase A is a nested loop (subsets x passes) with checkpoints and cross-subset verification at certain boundaries. An async generator could yield pass results:

```typescript
async function* phaseAPasses(config, deps) {
  for (const subset of subsets) {
    for (const pass of passes) {
      yield executeSinglePass(state, pass, config, deps);
    }
    yield checkpoint(state, subset);
  }
}
```

However, the consumer would still need to manage state, cost tracking, and budget checks between iterations. The control flow is already clear in the current `for` loop structure. Generators would add abstraction without significant clarity benefit.

**Phase B** would not benefit because each cycle has complex internal branching (SHIP/REFINE/RETHINK routing, stall detection, refine builder spawning).

**Verdict: Not recommended.** The current loop structure is more readable for this specific pipeline.

---

## 9. Architecture Diagram

### Module Relationships

```
┌──────────────────────────────────────────────────────────────────────┐
│                          CLI LAYER                                    │
│  cli.ts                                                              │
│  - Argument parsing                                                  │
│  - Config construction                                               │
│  - Dynamic import of pipeline                                        │
└─────────────────────────────────┬────────────────────────────────────┘
                                  │
┌─────────────────────────────────▼────────────────────────────────────┐
│                     ORCHESTRATION LAYER                               │
│  pipeline.ts  ──┬── pass-executor.ts  ── conviction-manager.ts       │
│                 ├── phase-router.ts    (pure routing logic)           │
│                 ├── workspace-setup.ts (directory + state init)       │
│                 ├── cross-subset-verifier.ts (prompt builder)         │
│                 └── rotation.ts       (pure carousel math)           │
│                                                                      │
│  createDefaultDeps() wires everything together                       │
└───────┬──────────────────┬───────────────────┬───────────────────────┘
        │                  │                   │
┌───────▼──────┐  ┌────────▼───────┐  ┌───────▼──────────────────────┐
│   PROMPTS    │  │    AGENTS      │  │    PA SUBSYSTEM              │
│ assembler.ts │  │ claude-cli.ts  │  │ auditor-spawner.ts           │
│ 10 templates │  │ response-      │  │ weaver-spawner.ts            │
│              │  │ handler.ts     │  │ mini-pa-spawner.ts           │
│              │  │                │  │ screenshot-capture.ts        │
│              │  │                │  │ http-server.ts               │
└──────────────┘  └────────────────┘  └──────────────────────────────┘
        │                  │                   │
┌───────▼──────────────────▼───────────────────▼─────────────────────┐
│                      VALIDATION LAYER                               │
│  gate-runner.ts  │  html-validator.ts  │  diff-checker.ts           │
└─────────────────────────────────────────────────────────────────────┘
        │
┌───────▼─────────────────────────────────────────────────────────────┐
│                        STATE LAYER                                   │
│  state-manager.ts  │  checkpoint.ts  │  resume.ts                    │
└─────────────────────────────────────────────────────────────────────┘
        │
┌───────▼─────────────────────────────────────────────────────────────┐
│                    INFRASTRUCTURE LAYER                               │
│  logging/logger.ts  │  logging/cost-tracker.ts                       │
│  instrumentation/metrics.ts  │  instrumentation/report.ts            │
└─────────────────────────────────────────────────────────────────────┘
        │
┌───────▼─────────────────────────────────────────────────────────────┐
│                      FOUNDATION LAYER                                │
│  utils.ts  │  types/*.ts  │  config/*.ts                             │
└─────────────────────────────────────────────────────────────────────┘
```

### Data Flow

```
Content.md ──► cli.ts ──► buildConfig()
                              │
                              ▼
                        createWorkspace()
                              │
                              ▼
              ┌───── Phase 0 ─────┐
              │ TC Derivation     │──► _tc-brief.md
              │ Content Analysis  │──► _content-map.md
              └───────────────────┘
                              │
                              ▼
              ┌───── Phase A ─────────────────────────────┐
              │ For each subset S1-S7:                     │
              │   For each pass P1-P8:                     │
              │     assemblePrompt() ──► prompt string     │
              │     spawnClaude(prompt) ──► ClaudeResponse  │
              │     extractHtml(response) ──► HTML          │
              │     validateHtml(HTML) ──► ok/fail          │
              │     atomicWriteFile(artifact.html)          │
              │     extractConviction(response) ──► state   │
              │     archivePass(pass-NNN/)                  │
              │   After subset: checkpoint + retrospective  │
              │   After S2/S4/S6: cross-subset verification │
              └───────────────────────────────────────────┘
                              │
                              ▼
              ┌───── Phase B ─────────────────────────────┐
              │ For each PA cycle (max 3):                 │
              │   startArtifactServer() ──► localhost URL   │
              │   captureScreenshots() ──► PNG files        │
              │   runGates() ──► GateVerdict                │
              │   spawnAuditors(8 parallel) ──► reports     │
              │   spawnIntegrative(1 seq) ──► synthesis     │
              │   spawnWeaver() ──► WeaverVerdict           │
              │   routePhaseB(verdict) ──► SHIP/REFINE/... │
              │   If REFINE: spawnRefineBuilder()           │
              └───────────────────────────────────────────┘
                              │
                              ▼
                         state.json
                         run-report.json
                         output.html (artifact)
```

### Control Flow

```
cli.main()
  ├── parseArgs()
  ├── buildConfig()
  ├── if dryRun: printDryRun() → exit
  ├── import pipeline
  ├── createDefaultDeps(config)
  └── runPipeline(config, deps)
        ├── if resume: loadState()
        ├── if skipPhaseA: createWorkspace() + copy seed
        ├── else: createWorkspace() + runPhase0()
        │         ├── deps.runTcDerivation()
        │         └── deps.runContentAnalysis()
        ├── runPhaseA(state, config, deps)
        │   └── for subset in S1..S7:
        │       └── for pass in P1..P8:
        │           ├── executeSinglePass()
        │           │   ├── checkBudget()
        │           │   ├── set inFlightPass
        │           │   ├── assemblePrompt()
        │           │   ├── spawnClaude()
        │           │   ├── extractHtml() / extract observations
        │           │   ├── validateHtml()
        │           │   ├── atomicWriteFile(artifact)
        │           │   ├── extractConviction()
        │           │   ├── extractDiscoveryLog()
        │           │   ├── updateCostTracker()
        │           │   ├── clear inFlightPass
        │           │   └── archivePass()
        │           └── checkBudget()
        │       ├── createCheckpoint()
        │       ├── runRetrospective()
        │       └── if S2/S4/S6: runCrossSubsetVerifier()
        └── runPhaseB(state, config, deps)
            └── for cycle in 1..MAX_PA_CYCLES:
                ├── captureScreenshots()
                ├── runGates()
                ├── spawnAuditors(8 parallel + 1 integrative)
                ├── spawnWeaver()
                ├── routePhaseB(verdict)
                ├── detectStall()
                ├── if SHIP: return completed
                ├── if RETHINK: return paused
                ├── if REFINE: spawnRefineBuilder()
                └── checkBudget()
```

---

## 10. Summary of Findings

### Strengths (Architectural)

1. **Clean DI pattern for Phase A** -- PassExecutorDeps makes the inner loop fully testable
2. **No circular dependencies** -- careful use of interface segregation
3. **Clear layering** -- types -> config -> utils -> state -> agents -> orchestrator -> cli
4. **Immutable state pattern** -- consistent spread-based mutations in live code
5. **Pure functions where appropriate** -- rotation, phase-router, diff-checker, html-validator
6. **Comprehensive error class hierarchy** -- 8 specific error types with categories
7. **Template variable injection defense** -- V-05 protection against content-injected variables
8. **Robust JSON recovery** -- 3-stage fallback for truncated claude responses
9. **Process lifecycle management** -- child process tracking, SIGTERM/SIGKILL, backpressure

### Weaknesses (Architectural)

| # | Finding | Severity | Location |
|---|---------|----------|----------|
| A-01 | pipeline.ts does too much (998 lines, 7 responsibilities) | SIGNIFICANT | `orchestrator/pipeline.ts` |
| A-02 | createDefaultDeps is 238 lines of inline logic, not a simple factory | SIGNIFICANT | `orchestrator/pipeline.ts:760-998` |
| A-03 | PA spawners bypass DI -- directly import spawnClaude | MODERATE | `pa/auditor-spawner.ts`, `pa/weaver-spawner.ts`, `pa/mini-pa-spawner.ts` |
| A-04 | Logger class designed but never integrated | MODERATE | `logging/logger.ts` (unused) |
| A-05 | cost-tracker.ts:updateCost() mutates state in place (violates immutability) | MODERATE | `logging/cost-tracker.ts` (likely dead code) |
| A-06 | 5 files to edit for new agent role (no registry pattern) | MINOR | Multiple files |
| A-07 | Phase set hardcoded in 3 places (type, state type, validation) | MINOR | `types/pipeline.ts`, `types/state.ts`, `state/state-manager.ts` |
| A-08 | assembler.ts imports from orchestrator/rotation.ts (layer violation) | MINOR | `prompts/assembler.ts` |
| A-09 | No concurrency limiter for parallel auditor spawning | MINOR | `pa/auditor-spawner.ts` |
| A-10 | Pass role schedule hardcoded for 8 passes only | MINOR | `types/pass.ts:PASS_ROLES` |
| A-11 | formatSubsetSummaries() loads all prior retrospectives -- token risk at scale | MINOR | `prompts/assembler.ts:82-94` |
| A-12 | Duplicate resolveProjectRoot() -- one in cli.ts, one in config/paths.ts | MINOR | `cli.ts:49`, `config/paths.ts:29` |

### Top 3 Recommended Refactors

1. **Extract createDefaultDeps into a dedicated deps-factory.ts module** (A-01, A-02)
   - Move the 238-line factory to `orchestrator/deps-factory.ts`
   - Extract data transformation logic into adapter functions
   - Reduces pipeline.ts by ~240 lines
   - Estimated effort: 2-3 hours

2. **Inject spawnClaude into PA spawners via a deps parameter** (A-03)
   - Add `ClaudeSpawner` type to PA spawner function signatures
   - Pass it through from createDefaultDeps
   - Makes PA subsystem fully testable without module mocking
   - Estimated effort: 1-2 hours

3. **Wire the structured Logger into the pipeline** (A-04)
   - Replace `deps.log()` with Logger instance
   - Replace `deps.recordDecision()` with Logger.decision()
   - Add Logger.pass() calls in pass-executor
   - Gives structured JSONL output for post-run analysis
   - Estimated effort: 2-3 hours

### Architecture Health Score

| Dimension | Score | Notes |
|-----------|-------|-------|
| Layering | 8/10 | Clean except assembler->rotation cross-layer |
| DI consistency | 6/10 | Good in Phase A, missing in PA subsystem |
| SRP adherence | 5/10 | pipeline.ts is a God module |
| Open/closed | 6/10 | Data-driven for gates/questions, hardcoded for roles |
| State management | 8/10 | Immutable pattern consistently applied in live code |
| Testability | 6/10 | Phase A testable via DI; PA subsystem not testable |
| Error handling | 7/10 | Good class hierarchy, inconsistent application |
| Scalability | 6/10 | Works for current scale, several hardcoded limits |
| **Overall** | **6.5/10** | Solid foundations, needs targeted refactoring |

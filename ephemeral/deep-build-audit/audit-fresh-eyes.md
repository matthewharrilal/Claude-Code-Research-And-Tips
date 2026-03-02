# Fresh-Eyes Code Review: deep-build

**Reviewer context:** Zero prior knowledge. Never seen this project or any planning documents. Read ONLY the code, templates, package.json, and tsconfig.json.

---

## 1. Can I understand what this system does from reading the code?

**Yes, to about 80%.** The architecture is legible. Here is what I can piece together:

**What it is:** A multi-pass HTML page builder that uses Claude CLI (`claude -p`) as its execution engine. It takes a markdown content file and produces a designed HTML page by running the content through a "design system" corpus in multiple waves, then auditing the result perceptually.

**The pipeline has 3 phases:**
- **Phase 0:** Pre-pipeline setup. Two preparatory agent calls: (1) TC derivation produces a "conviction brief" -- a creative direction document, and (2) content analysis produces a "content map" -- structural analysis of the input markdown. These are consumed by all subsequent passes.
- **Phase A:** Corpus integration. 7 subsets x 8 passes = 56 total passes. Each pass spawns a `claude -p` process that receives the content, a subset of "corpus" files (design system research, case studies, guidelines), the current HTML artifact, and accumulated creative state (conviction layer, discovery log, verifier observations). Passes alternate between "builder" (produces HTML) and "verifier" (produces observations about integration quality). The corpus files rotate across passes so every file gets primacy/valley/recency positions (counteracting transformer attention bias). After each subset: checkpoint + retrospective. After subsets 2/4/6: cross-subset verification.
- **Phase B:** PA hardening. Up to 3 cycles. Each cycle: capture screenshots via Playwright at 3 viewports, run programmatic gates (browser-side JS checks), spawn 8 parallel PA auditors (each gets screenshots + HTML + questions + guardrails, but NO build context), then 1 sequential integrative auditor (reads all 8 reports), then a "weaver" (sees everything: auditor reports + builder intent + gate results). The weaver produces a structured verdict (SHIP/REFINE/RETHINK). If REFINE: spawn a refine builder that gets the weaver's creative direction and produces an improved artifact. Loop until SHIP, RETHINK, stall, or budget exhaustion.

**Where I'm confused:**

1. **The domain is opaque without the corpus.** What is "KortAI"? What are these 18 compositional mechanisms? What are "soul constraints" and "prohibitions"? The code references these constantly but they live in `design-system/` which is outside the tool. The world-description template tells me it's a sharp-edged, warm-palette, zero-border-radius design system, but the full vocabulary is tribal knowledge.

2. **The conviction system is clear mechanically but unclear philosophically.** I can see it has 6 dimensions (BUILT/TRYING/REJECTED/SURPRISED/WANTED/UNRESOLVED) and works as a FIFO queue with cap 10. But WHY these 6 dimensions? Why not 4 or 8? The names suggest creative introspection, but the code treats them as plain strings. The system is clearly designed to carry "creative intent" across independent Claude instances (which cannot share memory), but the naming rationale is undocumented.

3. **The relationship between `pa/pa-router.ts` and `orchestrator/phase-router.ts` is confusing.** Both export `routePA`/`routePhaseB` and `detectStall` functions with nearly identical logic. Which one is canonical? The orchestrator imports from `phase-router.ts`, so `pa-router.ts` appears to be dead code.

4. **What is a "gate"?** The gate-runner loads `gate-runner-browser.js` (a 2700+ line file) and evaluates it in a Playwright browser context. The code assumes it returns `GateResult[]` but I can't understand what gates exist without reading that JS file in detail. The TypeScript types define gate tiers (REQUIRED/RECOMMENDED/ADVISORY/DIAGNOSTIC/BRIEF) but the actual gate definitions live in untyped JavaScript.

---

## 2. What would a new developer need explained first?

In priority order:

1. **The domain model.** What is this design system? What are "mechanisms", "zones", "multi-coherence", "density arcs"? The code assumes deep familiarity with a compositional design vocabulary that has no glossary in the codebase. The templates are beautiful creative writing, but they assume the reader already knows the KortAI world.

2. **The execution model.** Each `claude -p` call is a fully independent stateless process. The orchestrator is the ONLY thing that carries state between calls. The conviction layer, discovery log, and verifier observations exist because Claude instances cannot talk to each other. Understanding this explains every design decision.

3. **The prompt assembly system.** Templates in `templates/` use `{VARIABLE}` placeholders. The assembler in `prompts/assembler.ts` resolves these from a combination of filesystem reads, state objects, and computed values. There is a token trimming system that removes oldest conviction entries and valley-position corpus files when the assembled prompt exceeds ~95K tokens. This is the most complex module and has the most implicit knowledge.

4. **The workspace isolation model.** The system creates a fake `.git/HEAD` and empty `.claude/settings.json` in the workspace directory. This blocks Claude CLI's upward CLAUDE.md traversal, preventing user settings from contaminating agent behavior. This is clever but completely undocumented in the code beyond a one-line comment.

5. **Why 7 subsets, why 8 passes per subset, why 3 rotations.** These numbers are presented as constants but their rationale is invisible. Are they empirically derived? Theoretically justified? Arbitrary? The SHIFT_TABLE values `{4: [0,2,3], 5: [0,2,4], 6: [0,2,4]}` look carefully chosen but there is no explanation of why these specific shifts.

---

## 3. What looks over-engineered? What looks under-engineered?

### Over-engineered

1. **The error class hierarchy (7 custom error classes).** `OrchestratorError`, `ValidationError`, `ClaudeInvocationError`, `StateCorruptionError`, `BudgetExceededError`, `HtmlExtractionError`, `PlaywrightError`, `FileNotFoundError`, `ConfigMismatchError`. Most of these could be a single `OrchestratorError` with a category enum (which already exists as `ErrorCategory`). The classes add `toRecord()` and custom properties, but only `BudgetExceededError` is actually distinguished at the catch site (in `cli.ts`). The rest are caught generically.

2. **The RunReport type.** 73 lines of deeply nested interfaces with `rotationAnalysis`, `qualityTrajectory`, `sentimentArc`, etc. But the `rotationAnalysis` fields are never populated (hardcoded empty objects in `report.ts:182-183`). The sentiment arc is computed from artifact size delta, not actual sentiment analysis. This type encodes aspirational reporting that the implementation doesn't yet deliver.

3. **The `resume.ts` module.** 200 lines implementing a 6-step integrity verification algorithm with artifact hash checking, backup recovery from last pass archive, and checkpoint fallback. But the main pipeline (`pipeline.ts`) doesn't actually use `resume.ts` -- it has its own simpler resume logic via `loadState`. The `resumePipeline` function is defined but appears unused from the main execution path.

4. **Dual implementations of cost tracking and budget checking.** `logging/cost-tracker.ts` has `updateCost()` and `checkBudget()`. `orchestrator/phase-router.ts` also has `checkBudget()`. `orchestrator/pass-executor.ts` has its own `updateCostTracker()`. `orchestrator/pipeline.ts` has `updateCostFromResponse()`. Four different places that accumulate costs, with slightly different signatures and patterns. The `cost-tracker.ts` module MUTATES state in place (`cost.totalInputTokens += ...`) while everything else uses immutable spread patterns. This inconsistency is a bug waiting to happen.

### Under-engineered

1. **No test suite.** The `tests/` directory contains only a `fixtures/` folder. Zero test files. For a system that costs $150-250 per run, the lack of unit tests for critical pure functions (rotation, conviction extraction, HTML extraction, phase routing, stall detection) is concerning. These are all pure functions that would be trivial to test.

2. **No configuration file.** All configuration is hardcoded in `config/constants.ts`. There is no `.env`, no `config.json`, no CLI flags for budget thresholds, model selection, viewport sizes, or pass counts. The `--subset` flag exists but budget/threshold values are unchangeable without code modification.

3. **The prompt injection defense is minimal.** The assembler escapes `{UPPER_CASE}` patterns in variable values (line 207: `value.replace(/\{([A-Z_]{2,})\}/g, '...')`) but this only prevents accidental template variable expansion. User-supplied markdown content is injected directly into builder prompts. A content file with embedded `<!-- HTML_START -->` markers or `<!-- CONVICTION_ADDITION_START -->` markers could confuse the response extraction. The HTML validator blocks `<script>` and inline event handlers, which is good, but there's no input sanitization.

4. **Logging is not wired into the pipeline.** The `Logger` class in `logging/logger.ts` is fully implemented (6 log destinations, structured JSONL output, TTY-aware status lines). But `createDefaultDeps()` in `pipeline.ts` uses bare `console.log` for its `log()` method. The Logger class and `recordPassMetrics()` are never instantiated or called from the main execution path. They exist but are disconnected.

5. **No graceful shutdown.** If the process is killed during a `claude -p` call (which can take 10+ minutes), the in-flight pass marker is set but there's no signal handler to save state. The resume system can theoretically recover from this via `inFlightPass`, but there's no `process.on('SIGINT', ...)` or `process.on('SIGTERM', ...)` handler.

---

## 4. What's the bus factor?

**Bus factor: 2.** Possibly 1.

**Could someone maintain this?** Yes, with significant ramp-up time. The code is well-structured (clear module boundaries, dependency injection, immutable state pattern, TypeScript types throughout). A competent TypeScript developer could follow the control flow.

**Could someone EXTEND this?** Harder. The system embeds deep implicit knowledge:

- **The 6 conviction dimensions** are not explained anywhere in the code.
- **The 7 corpus subsets** are carefully curated with specific file groupings and rationale that only appears in code comments.
- **The SHIFT_TABLE values** are unexplained magic numbers.
- **The template content** (especially `builder-corpus.md` at 277 lines and `refine-builder.md` at 200 lines) contains the entire creative philosophy. These templates ARE the product -- the TypeScript is just the plumbing. Someone who understands TypeScript but not the design system domain would break the system by "improving" the templates.
- **The prompt assembly pipeline** has implicit ordering constraints (conviction before discovery, verifier observations only on passes 3 and 6, corpus files in rotation order) that are scattered across multiple functions.
- **The PA auditor question assignments** (PA-01 through PA-55) reference questions defined in an external `pa-questions.md` file. The code assigns question IDs to auditors but the question text is never in the TypeScript -- it lives in the corpus.

The biggest bus factor risk is the templates. They encode years of iterative creative research (the conviction dimensions, the "seven lenses", the builder recipe, the weaver synthesis protocol) in natural language that looks like documentation but IS the system's core IP.

---

## 5. Top 3 modules I'd refactor first

### 1. `orchestrator/pipeline.ts` -- `createDefaultDeps()` (lines 755-974)

**Why:** This 220-line function is the entire dependency injection container. It's a massive inline function that mixes async imports, lambda definitions, and complex object construction. Every "dep" is an inline async function with its own imports. This makes the function impossible to test, impossible to read, and a magnet for bugs.

**What I'd do:** Extract each dep into its own module function. Create a `deps/` directory with `tc-derivation-dep.ts`, `auditor-dep.ts`, `weaver-dep.ts`, etc. Each one exports a factory function. `createDefaultDeps` becomes a simple composition.

### 2. Consolidate cost tracking into a single module

**Why:** Four different implementations of cost accumulation (`cost-tracker.ts:updateCost`, `phase-router.ts:checkBudget`, `pass-executor.ts:updateCostTracker`, `pipeline.ts:updateCostFromResponse`). One mutates in place, three use immutable patterns. The duplication creates inconsistency risk and makes it unclear which is canonical.

**What I'd do:** Delete `logging/cost-tracker.ts` (it mutates state, which violates the codebase's immutable pattern). Keep `updateCostFromResponse` in `pipeline.ts` (or extract to a shared module). Have `phase-router.ts:checkBudget` be the single source for budget checking.

### 3. Delete or integrate dead code: `pa/pa-router.ts`, `state/resume.ts`, unused assembler functions

**Why:** `pa/pa-router.ts` duplicates `orchestrator/phase-router.ts`. `state/resume.ts` is a complete 200-line module that is never called from the main pipeline path. `parseClaudeResponse` in `response-handler.ts` duplicates parsing logic already in `claude-cli.ts`. `extractConvictionAddition` in `response-handler.ts` duplicates logic in `conviction-manager.ts`. Several assembler functions (`assemblePaAuditorPrompt`, `assemblePaIntegrativePrompt`, `assembleWeaverPrompt`) are exported but never imported -- the PA spawners build their own prompts inline.

**What I'd do:** Delete `pa-router.ts`. Either integrate `resume.ts` into the main pipeline or mark it as explicitly future/experimental. Delete the unused assembler functions and response-handler duplicates.

---

## 6. Does this feel like a WORKING system or a SCAFFOLD with TODOs?

**This is a working system.** There are zero TODOs, zero FIXMEs, zero HACKs, zero empty function bodies, zero placeholder returns. Every function does something real. The control flow is complete from CLI entry through Phase 0, Phase A (56 passes), and Phase B (PA cycles with SHIP/REFINE/RETHINK routing).

Evidence it has actually run:
- The error handling is specific and informed (rate-limit detection, model overload detection, truncated JSON recovery, artifact hash verification).
- The prompt templates show deep iterative refinement (the builder recipe has specific CSS values, the verifier template warns against CSS terminology, the weaver template has calibration tables).
- The workspace isolation pattern (fake .git/HEAD to block CLAUDE.md traversal) is a learned behavior -- someone discovered the problem and built a specific countermeasure.
- The budget caps ($150 warning, $250 hard cap) suggest real-world cost experience.

**However, it has accretions from iteration:**
- Dead code modules (pa-router.ts, resume.ts partially, several response-handler functions)
- Duplicate logic (cost tracking in 4 places, stall detection in 2 places, conviction extraction in 2 places)
- Disconnected infrastructure (Logger class fully built but not wired in, report generator ready but not called)
- Assembler functions that were built for a template-based PA flow but then bypassed by inline prompt construction in the spawner modules

The codebase reads like a system that started with a clean architecture, was iterated rapidly through production use, and accumulated implementation drift as features were added alongside (rather than replacing) earlier approaches.

---

## Specific Findings

### Hardcoded values that should be configurable

| Value | Location | Current | Should be |
|-------|----------|---------|-----------|
| Budget warning | `constants.ts:17` | $150 | CLI flag or config |
| Budget cap | `constants.ts:20` | $250 | CLI flag or config |
| Model | `constants.ts:8` | `claude-opus-4-6` | CLI flag |
| Max PA cycles | `constants.ts:23` | 3 | CLI flag |
| PA threshold | `constants.ts:26` | 3.5 | CLI flag |
| Timeout per call | `claude-cli.ts:37` | 600,000ms | Per-role config |
| Server start port | `http-server.ts:42` | 8765 | Config |
| Token limits | `constants.ts:41-50` | 100K/90K/95K/105K | Config |

### Missing error handling

1. **`http-server.ts`**: The server reads the HTML file once at startup (`line 43: const html = fs.readFileSync(htmlPath, 'utf-8')`) and serves that cached copy. If the file changes between server start and screenshot capture, stale content is served. Not a bug per se, but fragile if the flow is ever reordered.

2. **`gate-runner.ts`**: `page.evaluate(browserScript)` (`line 48`) treats the entire gate-runner-browser.js file as code to evaluate. If the script throws, the error message will be a Playwright evaluation error, not a gate-specific error. No try/catch around individual gate evaluations.

3. **`pass-executor.ts` line 371**: `archivePass` catches all errors silently (`catch {}`). If disk is full, archive silently fails. The pass appears successful but its prompt/response/artifact are lost. Worth at minimum a `console.warn`.

### Inconsistent patterns between modules

1. **Mutability:** `cost-tracker.ts:updateCost` mutates `state.cost` in place. Every other state update in the codebase uses immutable spread patterns (`{ ...state, cost: { ...state.cost, ... } }`). This is a latent bug -- if anyone calls `updateCost` expecting immutability, they get mutation.

2. **Import style:** Most modules use static imports. `pipeline.ts:createDefaultDeps` uses dynamic `await import()` throughout to keep `cli.ts` lightweight for `--help`/`--dry-run`. This is defensible but creates a pattern where the import graph differs between static analysis and runtime.

3. **Project root resolution:** `cli.ts:resolveProjectRoot()` walks up looking for `design-system/`. `config/paths.ts:resolveProjectRoot()` walks up looking for `.git/`. These could find different directories. The CLI version is used for the actual pipeline; the paths.ts version is not called from the main pipeline path.

### Functions defined but never called (from the main execution path)

| Function | Module | Note |
|----------|--------|------|
| `parseClaudeResponse` | `response-handler.ts` | Parsing happens in `claude-cli.ts` instead |
| `extractConvictionAddition` | `response-handler.ts` | Extraction happens in `conviction-manager.ts` instead |
| `extractVerifierObservations` | `response-handler.ts` | Verifier result used directly as string |
| `routePA` | `pa/pa-router.ts` | Duplicate of `phase-router.ts:routePhaseB` |
| `detectStall` | `pa/pa-router.ts` | Duplicate of `phase-router.ts:detectStall` |
| `setInFlightPass` | `state/state-manager.ts` | Inline spread in `pass-executor.ts` instead |
| `clearInFlightPass` | `state/state-manager.ts` | Inline spread in `pass-executor.ts` instead |
| `updatePhase` | `state/state-manager.ts` | Inline spread in `pipeline.ts` instead |
| `updateCost` | `logging/cost-tracker.ts` | 4 other cost-update implementations used instead |
| `recordPassMetrics` | `instrumentation/metrics.ts` | Logger not wired into pipeline |
| `generateReport` | `instrumentation/report.ts` | Not called from pipeline |
| `writeReport` | `instrumentation/report.ts` | Not called from pipeline |
| `createCheckpoint` | `state/checkpoint.ts` | Pipeline does its own inline checkpoint |
| `loadCheckpointState` | `state/checkpoint.ts` | Only imported by resume.ts |
| `resumePipeline` | `state/resume.ts` | Not called from pipeline |
| `assemblePaAuditorPrompt` | `prompts/assembler.ts` | Auditor spawner builds prompts inline |
| `assemblePaIntegrativePrompt` | `prompts/assembler.ts` | Auditor spawner builds prompts inline |
| `assembleWeaverPrompt` | `prompts/assembler.ts` | Weaver spawner builds prompts inline |
| `spawnMiniPA` | `pa/mini-pa-spawner.ts` | Not called from Phase B loop |
| `parseConvictionBlock` | `conviction-manager.ts` | Not imported by any module |

That is **19 exported functions** that are defined but not called from the main execution path. Some may be intended for future use or testing, but there is no indication of this.

### 3 Potential Bugs

**A. Silent archive failure (pass-executor.ts:371)**
```typescript
} catch {
  // Archive failures are non-fatal -- log but don't throw
}
```
The comment says "log but don't throw" but the catch body is empty -- it doesn't log anything. If the archive fails (disk full, permissions), the orchestrator continues with no indication that pass artifacts were lost.

**B. Mutable cost tracker (cost-tracker.ts:13-44)**
`updateCost()` mutates `state.cost` in place (`cost.totalInputTokens += passResult.inputTokens`). If this function were ever called alongside the immutable cost-tracking in `pass-executor.ts:updateCostTracker()`, the same cost could be double-counted -- once via mutation, once via spread. Currently they are not used together, but this is fragile.

**C. Weaver auditor ID hardcoding (pipeline.ts:918-919)**
```typescript
auditorReportPaths.map(p => ({
  auditorId: 'A' as const,
```
When constructing `AuditorReport` objects for the weaver, ALL reports get `auditorId: 'A'`. The weaver receives 9 reports all claiming to be from Auditor A. The weaver spawner reads report text from files (so the actual content is correct), but the metadata is wrong. The weaver's convergence analysis could be affected if it uses auditorId for attribution.

---

## Summary Assessment

| Dimension | Rating | Notes |
|-----------|--------|-------|
| Code clarity | 8/10 | Clean TypeScript, good DI, clear module boundaries |
| Architecture | 7/10 | Sound Phase 0/A/B structure, but dead code accumulation |
| Completeness | 7/10 | All phases implemented, but Logger/Report/Resume disconnected |
| Testability | 4/10 | DI enables testing, but zero tests exist |
| Maintainability | 6/10 | Good for someone who understands the domain; hard for a newcomer |
| DRY | 5/10 | 19 unused exports, 4 cost-tracking implementations, 2 routing modules |
| Safety | 7/10 | Good error classes, budget caps, atomic writes; missing shutdown handler |
| First-run confidence | 6/10 | Would probably work, but dead code and disconnected infrastructure suggest some paths are untested |

**Verdict:** This is a real, working pipeline that has been through production iterations. Its core execution path (Phase 0 -> Phase A -> Phase B) is solid. Its biggest liabilities are: (1) accumulated dead code from iterative development, (2) no test suite for a system with $250 budget exposure, and (3) disconnected infrastructure modules (Logger, Report, Resume) that were built but never wired in.

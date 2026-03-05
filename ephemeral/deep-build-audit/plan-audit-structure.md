# Plan Audit: File Structure and Module Contracts

**Auditor:** structure-auditor (Opus)
**Scope:** File/Folder Structure, Master Implementation Checklist, Module Dependencies, TypeScript Interfaces (doc 02)
**Date:** 2026-02-28

---

## 1. Dependency Graph (Actual, Traced from Code)

```
                    cli.ts
                      |
                      | parseArgs → PipelineConfig
                      v
              pipeline.ts (runPipeline)
               /      |       \
              /       |        \
             v        v         v
    rotation.ts  pass-executor.ts  phase-router.ts
    (pure math)       |              (SHIP/REFINE/RETHINK)
                      |
          +-----------+-----------+
          |           |           |
          v           v           v
    assembler.ts  claude-cli.ts  state-manager.ts
    (prompt build)  (spawn)      (save/load)
          |           |               |
          |           v               |
          |    response-handler.ts    |
          |    (parse JSON/HTML)      |
          |                           |
          v                           v
    [reads files    checkpoint.ts  resume.ts
     from disk]     (snapshots)    (6-step verify)

  validation/                   pa/
    html-validator.ts             screenshot-capture.ts
    gate-runner.ts                auditor-spawner.ts ──> claude-cli.ts
    gate-runner-browser.js        weaver-spawner.ts ──> claude-cli.ts
    diff-checker.ts               pa-router.ts

  instrumentation/              logging/
    metrics.ts                    logger.ts
    report.ts                     cost-tracker.ts

  config/                       utils.ts
    corpus.ts                   (atomicWrite, sha256, etc.)
    constants.ts
    paths.ts

  types/
    pipeline.ts  state.ts  pass.ts  prompts.ts  errors.ts
```

### Dependency Adjacency List

| Module | Depends On | Depended On By |
|--------|-----------|----------------|
| `cli.ts` | config/*, types/pipeline, pipeline.ts | (entry point) |
| `pipeline.ts` | pass-executor, rotation, phase-router, state-manager, checkpoint, resume, logger, cost-tracker, config/*, types/* | cli.ts |
| `pass-executor.ts` | assembler, claude-cli, response-handler, state-manager, html-validator, diff-checker, logger, metrics, types/* | pipeline.ts |
| `assembler.ts` | config/paths, utils (readFile), types/prompts | pass-executor.ts |
| `claude-cli.ts` | utils (retry), types/errors, config/constants | pass-executor.ts, auditor-spawner.ts, weaver-spawner.ts |
| `response-handler.ts` | types/errors | pass-executor.ts |
| `state-manager.ts` | utils (atomicWrite), types/state | pipeline.ts, pass-executor.ts, checkpoint.ts, resume.ts |
| `checkpoint.ts` | state-manager, utils | pipeline.ts |
| `resume.ts` | state-manager, utils (sha256) | pipeline.ts |
| `rotation.ts` | types/pass | pipeline.ts, pass-executor.ts |
| `phase-router.ts` | types/state, cost-tracker | pipeline.ts |
| `html-validator.ts` | (none) | pass-executor.ts |
| `gate-runner.ts` | playwright | pipeline.ts (Phase B) |
| `gate-runner-browser.js` | (browser context, no imports) | gate-runner.ts |
| `diff-checker.ts` | (none) | pass-executor.ts |
| `screenshot-capture.ts` | playwright, utils | pipeline.ts (Phase B) |
| `auditor-spawner.ts` | claude-cli, config/constants | pipeline.ts (Phase B) |
| `weaver-spawner.ts` | claude-cli, config/constants | pipeline.ts (Phase B) |
| `pa-router.ts` | types/state, cost-tracker | pipeline.ts (Phase B) |
| `metrics.ts` | utils, types/pass | pass-executor.ts |
| `report.ts` | types/state | pipeline.ts (final) |
| `logger.ts` | utils (ensureDir) | (nearly everything) |
| `cost-tracker.ts` | types/state | pass-executor.ts, phase-router.ts, pipeline.ts |
| `config/corpus.ts` | types/pipeline | cli.ts, assembler.ts |
| `config/constants.ts` | (none) | (many modules) |
| `config/paths.ts` | (none) | assembler.ts, cli.ts |
| `utils.ts` | (node builtins only) | (many modules) |

---

## 2. Can the Primary Call Chain Work?

**Claimed chain:** `cli.ts` -> `pipeline.ts` -> `pass-executor.ts` -> `assembler.ts` -> `claude-cli.ts` -> `response-handler.ts` -> `state-manager.ts`

### Trace

1. **cli.ts -> pipeline.ts**: `cli.ts` parses args into `PipelineConfig`, calls `runPipeline(config)`. Types: `PipelineConfig` defined in `types/pipeline.ts`. The function returns `Promise<PipelineState>`. **WORKS** -- types align.

2. **pipeline.ts -> pass-executor.ts**: `runCorpusIntegration` iterates `PassDefinition[]` (from `computeAllPasses`), calls `executePass(pass, config, state)`. Types: `PassDefinition` from `types/pass.ts`, returns `Promise<PipelineState>`. **WORKS** -- types align.

3. **pass-executor.ts -> assembler.ts**: `executePass` calls `constructPrompt(pass, config, state)` returning `Promise<string>`. Types: input is `PassDefinition` + `PipelineConfig` + `PipelineState`, output is a string. **WORKS** -- but see ISSUE-01 below.

4. **assembler.ts -> claude-cli.ts**: NOT DIRECT. `pass-executor.ts` calls `assembler.ts` to get the prompt string, then separately calls `invokeClaudeP(prompt, config)` from `claude-cli.ts`. The chain is `pass-executor -> assembler (get prompt) -> pass-executor -> claude-cli (invoke)`. **The plan's linear chain description is misleading** -- pass-executor is the coordinator, not a passthrough.

5. **claude-cli.ts -> response-handler.ts**: Again NOT DIRECT. `claude-cli.ts` returns `ClaudePResult` (output string + exitCode + tokens). Then `pass-executor.ts` calls response-handler functions (`extractHTMLArtifact`, `extractAccumulation`, `validatePassOutput`) on that output. **The response-handler is called BY pass-executor, not by claude-cli.** Same coordination pattern.

6. **response-handler.ts -> state-manager.ts**: NOT DIRECT. `pass-executor.ts` takes validated results and calls `saveState(outputDir, state)` from `state-manager.ts`. **Again, pass-executor coordinates.**

### Verdict on Call Chain

The stated chain `cli -> pipeline -> pass-executor -> assembler -> claude-cli -> response-handler -> state-manager` **implies a linear pipeline where each module calls the next**. In reality, `pass-executor.ts` is a **hub** that calls assembler, claude-cli, response-handler, and state-manager in sequence. The actual topology is a **star centered on pass-executor**, not a chain.

**This is not a bug** -- the star pattern is correct architecturally. But the plan's description is misleading and could confuse implementers into thinking assembler.ts should import claude-cli.ts (it should not).

**FINDING-01 (MEDIUM):** Plan describes a linear chain; actual architecture is a star with `pass-executor.ts` as hub. Clarify in plan to prevent wrong imports.

---

## 3. Circular Dependency Analysis

Traced every import relationship. **No circular dependencies found** in the designed architecture. The module graph is a strict DAG (directed acyclic graph). Key property ensuring this:

- Types files (`types/*`) are leaf nodes -- they import nothing.
- Utils is a leaf node -- imports only Node builtins.
- Config files depend only on types.
- All "leaf" modules (validators, diff-checker) depend only on types/utils.
- All "mid" modules (assembler, claude-cli, response-handler, state-manager) depend on leaf + types.
- "Hub" modules (pass-executor, pipeline) depend on mid + leaf.
- cli.ts is the root, depending only on pipeline + config.

**However**, there is one subtle near-circular risk:

**FINDING-02 (LOW):** `pipeline.ts` imports `state-manager.ts` (for `saveState`), and `pass-executor.ts` also imports `state-manager.ts`. If `pipeline.ts` were to also import `pass-executor.ts` (which it does), and `pass-executor.ts` were to import `pipeline.ts` for any reason (e.g., accessing pipeline config helpers), that would create a cycle. The current design avoids this by keeping `pass-executor` unaware of `pipeline`, but no enforcement exists. Consider adding an eslint `no-restricted-imports` or a comment guard.

---

## 4. Missing Modules Analysis

### Modules in the Plan File/Folder Structure (27 source files)

| # | Module | In Plan | In Architecture (doc 02) | In Checklist | Status |
|---|--------|---------|--------------------------|--------------|--------|
| 1 | cli.ts | Yes | No (not detailed) | C.1 | OK |
| 2 | types/pipeline.ts | Yes | Yes (Section 2.6) | B.1 | OK |
| 3 | types/state.ts | Yes | Yes (Section 2.4) | B.2 | OK |
| 4 | types/pass.ts | Yes | Yes (Section 2.3) | B.3 | OK |
| 5 | types/prompts.ts | Yes | No | B.4 | OK |
| 6 | types/errors.ts | Yes | No (implied) | B.5 | OK |
| 7 | orchestrator/pipeline.ts | Yes | Yes (Section 4.1, 4.8) | C.2 | OK |
| 8 | orchestrator/pass-executor.ts | Yes | Yes (Section 4.4) | C.3 | OK |
| 9 | orchestrator/rotation.ts | Yes | Yes (Section 4.2) | C.4 | OK |
| 10 | orchestrator/phase-router.ts | Yes | Partially (Section 5) | C.5 | OK |
| 11 | prompts/assembler.ts | Yes | Yes (Section 4.3) | C.6 | OK |
| 12 | agents/claude-cli.ts | Yes | Yes (Section 4.5) | C.7 | OK |
| 13 | agents/response-handler.ts | Yes | Yes (Section 4.6) | C.8 | OK |
| 14 | validation/html-validator.ts | Yes | Yes (Section 4.6) | C.9 | OK |
| 15 | validation/gate-runner.ts | Yes | Partially | C.10 | OK |
| 16 | validation/gate-runner-browser.js | Yes | Partially | C.11 | OK |
| 17 | validation/diff-checker.ts | Yes | Mentioned | C.12 | OK |
| 18 | state/state-manager.ts | Yes | Yes (Section 4.7) | C.13 | OK |
| 19 | state/checkpoint.ts | Yes | Yes (doc 08) | C.14 | OK |
| 20 | state/resume.ts | Yes | Yes (doc 08) | C.15 | OK |
| 21 | pa/screenshot-capture.ts | Yes | Yes (Section 5) | D.1 | OK |
| 22 | pa/auditor-spawner.ts | Yes | Partially (Section 5) | D.2 | OK |
| 23 | pa/weaver-spawner.ts | Yes | Partially (Section 5) | D.3 | OK |
| 24 | pa/pa-router.ts | Yes | Partially | D.4 | OK |
| 25 | instrumentation/metrics.ts | Yes | No (implied) | C.16 | OK |
| 26 | instrumentation/report.ts | Yes | Yes (RunReport) | C.17 | OK |
| 27 | utils.ts | Yes | Implied | C.18 | OK |
| 28 | logging/logger.ts | Yes | Yes (Section 6) | E.1 | OK |
| 29 | logging/cost-tracker.ts | Yes | Implied | E.2 | OK |
| 30 | config/corpus.ts | Yes | Yes (Section 3) | F.1 | OK |
| 31 | config/constants.ts | Yes | Implied | F.2 | OK |
| 32 | config/paths.ts | Yes | Implied | F.3 | OK |

**Module count:** 32 source files (27 .ts in plan's structure + 5 types/ = matches plan's "~27 source files" if counting types separately). The plan says "18 files" for Core Modules (C.1-C.18) + 4 PA + 2 Logging + 3 Config + 5 Types = **32 total**.

### MISSING Modules

**FINDING-03 (HIGH):** The architecture doc (doc 02) describes several functions in Section 5 (PA Hardening) that live INLINE in the runPAHardening function: `buildPAAuditorPrompts()`, `buildPAWeaverPrompt()`, `buildRefinePrompt()`, `extractPAScore()`. The plan assigns these to `pa/*.ts` files, but the architecture doc writes them as standalone functions with no module assignment. These need explicit homes:

| Function | Probable Home | Currently Specified? |
|----------|---------------|---------------------|
| `buildPAAuditorPrompts()` | `auditor-spawner.ts` or `assembler.ts` | No -- ambiguous |
| `buildPAWeaverPrompt()` | `weaver-spawner.ts` or `assembler.ts` | No -- ambiguous |
| `buildRefinePrompt()` | `assembler.ts` (it's prompt construction) | No -- ambiguous |
| `extractPAScore()` | `response-handler.ts` or `pa-router.ts` | No -- ambiguous |
| `startLocalServer()` | `screenshot-capture.ts` (plan says it) | Implied but not in checklist |

The plan needs to assign these functions to specific modules. The most natural split: prompt construction in `assembler.ts`, score extraction in `response-handler.ts`, HTTP server in `screenshot-capture.ts`.

**FINDING-04 (MEDIUM):** No `index.ts` / barrel files mentioned. With 32 files across 8 directories, the import paths will be verbose (`import { X } from '../../../agents/claude-cli.js'`). The plan should decide: barrel exports per directory, or direct imports. Both work, but this must be explicit for implementers to avoid inconsistency.

**FINDING-05 (LOW):** No mention of a `types/index.ts` re-export barrel. Each module importing 3-5 type files separately will produce noisy import blocks. Consider `types/index.ts` that re-exports all.

---

## 5. Module Responsibility Overlap Analysis

### Clear, Non-Overlapping Responsibilities

| Module | Single Responsibility | Overlap Risk |
|--------|----------------------|--------------|
| `cli.ts` | Parse CLI args, validate, invoke pipeline | Clean |
| `pipeline.ts` | Orchestrate Phase A + Phase B sequencing | Clean |
| `pass-executor.ts` | Execute ONE pass (assemble, invoke, validate, record) | Clean |
| `rotation.ts` | Pure math: compute file rotation | Clean |
| `phase-router.ts` | SHIP/REFINE/RETHINK routing decision | Clean |
| `assembler.ts` | Construct prompts from templates + variables | **OVERLAP RISK** (see below) |
| `claude-cli.ts` | Spawn `claude -p`, handle process lifecycle | Clean |
| `response-handler.ts` | Parse LLM output: extract HTML, conviction, validate | **OVERLAP RISK** (see below) |
| `html-validator.ts` | Structural HTML validation | Clean |
| `gate-runner.ts` | Playwright wrapper for browser gates | Clean |
| `diff-checker.ts` | Compare artifact versions | Clean |
| `state-manager.ts` | Atomic state persistence | Clean |
| `checkpoint.ts` | Subset boundary snapshots | Clean |
| `resume.ts` | 6-step resume integrity verification | Clean |
| `screenshot-capture.ts` | Playwright screenshot automation | Clean |
| `auditor-spawner.ts` | Spawn 8+1 PA auditor claude -p calls | Clean |
| `weaver-spawner.ts` | Spawn weaver claude -p call | Clean |
| `pa-router.ts` | PA score threshold routing | **OVERLAP with phase-router** |
| `metrics.ts` | Record per-pass metrics | Clean |
| `report.ts` | Generate final run report | Clean |
| `logger.ts` | Multi-destination logging | Clean |
| `cost-tracker.ts` | Budget tracking and warnings | Clean |

### Overlap Issues

**FINDING-06 (MEDIUM): `assembler.ts` responsibility creep.**
The plan assigns it: "loads template file, resolves all {VARIABLES}, concatenates corpus files, estimates token count, trims if >100K." That is 4 distinct responsibilities:
1. Template loading (I/O)
2. Variable resolution (string manipulation)
3. Token estimation (heuristic computation)
4. Token budget trimming (decision logic)

The plan says "Single file (split if >400 lines)." Given the 20+ variables listed in the Prompt Variable Reference, this file will almost certainly exceed 400 lines. The contingency plan exists but the threshold should be decided upfront to avoid mid-build refactoring.

**FINDING-07 (MEDIUM): `response-handler.ts` vs `html-validator.ts` overlap.**
Doc 02 Section 4.6 puts `validatePassOutput()` function in the same code section as `extractHTMLArtifact()` and `extractAccumulation()`. The plan separates these into `response-handler.ts` (extraction) and `html-validator.ts` (validation). But `validatePassOutput()` in doc 02 does BOTH: it extracts HTML (to check it exists) AND validates it (container width, completeness). This function needs to be split across two modules or clearly assigned to one.

The plan's checklist item C.8 says response-handler does "JSON parse, is_error, HTML extraction, conviction extraction" and C.9 says html-validator does "structural checks." But `validatePassOutput()` as written in doc 02 also checks HTML structure. Who owns the container-width check? Who owns "output contains observation sections" for verifiers?

**Recommendation:** `response-handler.ts` owns extraction (HTML, conviction, discovery). `html-validator.ts` owns all validation (including pass-output validation that currently lives in `validatePassOutput`). The `validatePassOutput` function moves to `html-validator.ts` and imports `extractHTMLArtifact` from `response-handler.ts`.

**FINDING-08 (LOW): `pa-router.ts` vs `phase-router.ts` overlap.**
Both perform routing decisions. `phase-router.ts` does Phase A->B transitions, stall detection, and budget checks. `pa-router.ts` does SHIP/REFINE/RETHINK based on PA scores. The descriptions in the plan are:
- `phase-router.ts`: "SHIP/REFINE/RETHINK logic. Stall detection. Budget check."
- `pa-router.ts`: "deterministic routing. SHIP if pa05 >= 3.5 AND tier5 >= 6/8. REFINE if pa05 >= 2.0. RETHINK otherwise. Stall detection."

Both mention stall detection. Both mention the SHIP/REFINE/RETHINK decision. These are describing the **same function**. Either consolidate into one module, or draw a crisp boundary: `pa-router.ts` = pure score-based routing (no state), `phase-router.ts` = stateful routing (budget, stall detection across cycles, phase transitions).

---

## 6. Directory Structure Naming Consistency

### Conventions Audit

| Convention | Consistent? | Examples |
|-----------|-------------|---------|
| **All lowercase** | YES | `src/`, `config/`, `types/`, `logging/` |
| **Kebab-case for filenames** | YES | `pass-executor.ts`, `state-manager.ts`, `claude-cli.ts`, `html-validator.ts`, `cost-tracker.ts` |
| **Single-word directory names** | YES (7/8) | `types`, `config`, `orchestrator`, `prompts`, `agents`, `validation`, `state`, `pa`, `instrumentation`, `logging` |
| **No abbreviations in dirs** | YES (9/10) | Exception: `pa/` -- but PA is a well-established project abbreviation |
| **.ts extension** | YES (all TypeScript) | One exception: `gate-runner-browser.js` (intentionally JS for browser context) |
| **Template naming** | YES | All kebab-case `.md` in `templates/` |
| **Output dir naming** | YES | Kebab-case slugs: `{slug}-{date}/` |

**FINDING-09 (NITS):** Naming is highly consistent. Two minor notes:
- `pa/` is the only abbreviated directory name. Consider `perceptual-audit/` for discoverability, but `pa/` is acceptable given project convention.
- `gate-runner-browser.js` breaks the `.ts` convention, but this is intentionally JS (browser context for `page.evaluate()`). This is correct.

---

## 7. Master Implementation Checklist Completeness

### Cross-Reference: Plan Modules vs Checklist Items

| Plan Module | Checklist Item | Accounted? |
|-------------|---------------|------------|
| cli.ts | C.1 | YES |
| types/pipeline.ts | B.1 | YES |
| types/state.ts | B.2 | YES |
| types/pass.ts | B.3 | YES |
| types/prompts.ts | B.4 | YES |
| types/errors.ts | B.5 | YES |
| orchestrator/pipeline.ts | C.2 | YES |
| orchestrator/pass-executor.ts | C.3 | YES |
| orchestrator/rotation.ts | C.4 | YES |
| orchestrator/phase-router.ts | C.5 | YES |
| prompts/assembler.ts | C.6 | YES |
| agents/claude-cli.ts | C.7 | YES |
| agents/response-handler.ts | C.8 | YES |
| validation/html-validator.ts | C.9 | YES |
| validation/gate-runner.ts | C.10 | YES |
| validation/gate-runner-browser.js | C.11 | YES |
| validation/diff-checker.ts | C.12 | YES |
| state/state-manager.ts | C.13 | YES |
| state/checkpoint.ts | C.14 | YES |
| state/resume.ts | C.15 | YES |
| instrumentation/metrics.ts | C.16 | YES |
| instrumentation/report.ts | C.17 | YES |
| utils.ts | C.18 | YES |
| pa/screenshot-capture.ts | D.1 | YES |
| pa/auditor-spawner.ts | D.2 | YES |
| pa/weaver-spawner.ts | D.3 | YES |
| pa/pa-router.ts | D.4 | YES |
| logging/logger.ts | E.1 | YES |
| logging/cost-tracker.ts | E.2 | YES |
| config/corpus.ts | F.1 | YES |
| config/constants.ts | F.2 | YES |
| config/paths.ts | F.3 | YES |
| templates/* (9 files) | G.1-G.9 | YES |

**All 32 source modules + 9 templates accounted for in checklist.**

### Missing Checklist Items

**FINDING-10 (MEDIUM):** The checklist has no items for:

1. **The HTTP server for screenshots** -- `screenshot-capture.ts` needs to start a local HTTP server. This is mentioned in the architecture ("Start a local HTTP server serving the artifact") and the PA Hardening section, but `startLocalServer()` has no checklist item verifying it works.

2. **Cross-subset verifier pass** -- The Pipeline Architecture section says "Cross-subset verifier (every 2 subsets): check early patterns still visible." This is a special verifier pass that runs after S2, S4, S6. No checklist item verifies this feature exists. It is mentioned in GAP-G02 resolution but not tracked in checklist.

3. **Retrospective pass** -- The plan mentions retrospective agent between subsets ("`--max-turns 10`, Read tool"). Template G.3 covers the template, but no checklist item covers the orchestrator code that spawns retrospective passes.

4. **Cross-subset context summaries** -- Variable `{PREVIOUS_SUBSET_SUMMARIES}` grows from S1->S7. GAP-D02 resolution specifies "3-sentence summaries from S1..S(N-1)." No checklist item tracks implementation of summary generation.

5. **Conviction layer FIFO merge** -- GAP-C02 says "Cap at 10 entries. FIFO merge with relevance weighting. Merge runs in orchestrator code." No checklist item. This is non-trivial logic.

---

## 8. State Schema Contradiction

**FINDING-11 (HIGH): Two incompatible PipelineState schemas.**

Doc 02 defines `PipelineState` with `version: 2`:
```typescript
interface PipelineState {
  version: 2;
  passRecords: Record<number, PassRecord>;   // keyed by number
  currentArtifactPath: string;
  artifactBackups: string[];
  convictionLayerPath: string;               // file path
  discoveryLogPath: string;                  // file path
  cost: CostTracker;                         // has byRole/bySubset
  // ...
}
```

The plan's "State Schema v3" section (from doc 08) defines:
```typescript
interface PipelineState {
  schemaVersion: 3;
  passes: PassRecord[];                      // ARRAY not Record
  artifactPath: string;                      // renamed
  convictionLayer: ConvictionEntry[];        // INLINE not file path
  discoveryLog: string[];                    // INLINE not file path
  cost: CostTracker;                         // DIFFERENT fields
  paCycleRecords: PACycleRecord[];           // NEW
  inFlightPass?: { ... };                    // NEW
  errorHistory: ErrorRecord[];               // NEW
  // ...
}
```

The plan resolves this in contradiction K01/GAP-001: "Doc 08 v3 canonical." But the doc 02 code (Sections 4.1 through 4.8) still uses the v2 schema everywhere. The `initializeState()` function in doc 02 returns `{ version: 2, ... }`. The `loadState()` function checks `state.version !== 2`.

**Risk:** If implementers read doc 02 code (which they will -- it has the complete function implementations), they will implement v2. If they read the plan's State Schema section, they will implement v3. The Wave 0 schema-reconciler agent is supposed to resolve this, but the plan's own code examples are inconsistent with its own resolution.

**Recommendation:** The plan should note that ALL doc 02 code examples using v2 state fields are SUPERSEDED by v3. Add a boxed warning.

---

## 9. The "Zero Issues Is Suspicious" Analysis

I found 11 issues. That is a healthy number for a plan of this complexity (~960 lines of plan text covering 32 modules). Here is why I trust this count:

**Why the plan is MOSTLY solid:**
- Module responsibilities are genuinely well-separated (star pattern with pass-executor hub is correct architecture)
- No circular dependencies -- the DAG is clean by construction (types are leaves, config depends only on types, everything flows downward)
- Naming conventions are consistent -- someone clearly cared about this
- The checklist covers every module in the file structure

**Why finding zero issues WOULD have been suspicious:**
- The state schema contradiction (v2 vs v3) is a known contradiction that the plan itself acknowledges but doesn't fully resolve in its code examples
- The PA prompt construction functions have no assigned homes
- The linear call chain description is genuinely misleading
- Two routing modules with overlapping stall-detection responsibility is a real design smell
- Missing checklist items for 5 distinct features (HTTP server, cross-subset verifier, retrospective, summaries, conviction FIFO) represent real implementation gaps

**What I might be missing:**
- I did not trace the full PA Hardening data flow as deeply as the Phase A flow. The PA subsystem in doc 02 Section 5 is less detailed than Phase A, and the plan's PA section (D.1-D.4) is the sparsest checklist section. This is the highest-risk area for hidden gaps.
- I did not verify that the `types/prompts.ts` interfaces (`PromptTemplate`, `PromptVariable`, `AssembledPrompt`) are actually used anywhere in doc 02's architecture code. They appear only in the plan's type list, not in any function signature. They may be phantom types.

---

## Summary of Findings

| ID | Severity | Finding |
|----|----------|---------|
| FINDING-01 | MEDIUM | Call chain is actually a star (pass-executor hub), not a linear chain. Clarify to prevent wrong imports. |
| FINDING-02 | LOW | Near-circular risk between pipeline.ts and pass-executor.ts. No enforcement against future cycle. |
| FINDING-03 | HIGH | 5 PA-related functions have no assigned module. `buildPAAuditorPrompts`, `buildPAWeaverPrompt`, `buildRefinePrompt`, `extractPAScore`, `startLocalServer` need explicit module assignment. |
| FINDING-04 | MEDIUM | No barrel files / re-export strategy decided. Will cause import inconsistency across 32 files. |
| FINDING-05 | LOW | No `types/index.ts` re-export. Every module will have 3-5 separate type imports. |
| FINDING-06 | MEDIUM | `assembler.ts` has 4 responsibilities and will exceed 400-line threshold. Pre-split recommended. |
| FINDING-07 | MEDIUM | `response-handler.ts` vs `html-validator.ts` overlap on `validatePassOutput()`. Need clear ownership. |
| FINDING-08 | LOW | `pa-router.ts` vs `phase-router.ts` both claim stall detection and SHIP/REFINE/RETHINK routing. |
| FINDING-09 | NITS | `pa/` is only abbreviated dir name; `gate-runner-browser.js` is intentionally non-.ts. Both acceptable. |
| FINDING-10 | MEDIUM | 5 features have no checklist items: HTTP server, cross-subset verifier, retrospective pass, cross-subset summaries, conviction FIFO merge. |
| FINDING-11 | HIGH | State schema v2 (doc 02 code) vs v3 (plan text) contradiction. Doc 02 code examples will mislead implementers. |

### Risk Assessment

**HIGH items (2):** FINDING-03 and FINDING-11 will cause confusion during Wave 2 implementation if not resolved before code is written. Both are resolvable in Wave 0/1.

**MEDIUM items (5):** FINDING-01, -04, -06, -07, -10 are design decisions that should be made explicit. They won't block the build but will cause inconsistency if each implementer makes their own choice.

**LOW items (3):** FINDING-02, -05, -08 are architectural nits. Address during review, not upfront.

---

*Audit complete. 11 findings (2 HIGH, 5 MEDIUM, 3 LOW, 1 NITS). No circular dependencies found. All 32 modules accounted for in checklist. Primary structural concern: PA subsystem functions are unassigned and state schema code examples contradict the canonical schema.*

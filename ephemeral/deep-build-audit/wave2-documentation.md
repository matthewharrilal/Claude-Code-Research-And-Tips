# Documentation Completeness Audit — Deep Build Orchestrator

**Audit Date:** 2026-02-28
**Auditor:** Documentation Specialist (Wave 2)
**Scope:** All 37 source files in `tools/deep-build/src/`, 10 templates, top-level docs
**Method:** Read every source file, template, and config file; assessed each against 7 documentation dimensions

---

## Executive Summary

The codebase has **good module-level JSDoc** across most files but significant gaps in five areas: (1) **no README or getting-started guide exists**, (2) **magic numbers and non-obvious constants lack rationale**, (3) **template variables have no reference documentation**, (4) **complex algorithms are under-documented**, and (5) **no troubleshooting guide exists**. The inline documentation is adequate for someone already familiar with the system but insufficient for onboarding a new developer.

**Overall Documentation Score: 5/10**

Strongest: Type documentation (7/10), module-level JSDoc (7/10)
Weakest: README/onboarding (0/10), template variable reference (1/10), operational guide (1/10)

---

## 1. Inline Documentation Audit

### 1.1 Module-Level JSDoc

Every `.ts` file has a module-level JSDoc comment. Quality varies:

| File | Has Module JSDoc | Quality | Notes |
|------|:---:|:---:|-------|
| `cli.ts` | YES | GOOD | Includes usage examples and options in the JSDoc header |
| `config/constants.ts` | YES | FAIR | One-liner "Pipeline constants" — each constant has inline comment but rationale is absent for most |
| `config/corpus.ts` | YES | GOOD | Documents subset design rationale, filesystem verification, carousel rotation purpose |
| `config/pa-questions.ts` | YES | GOOD | Documents source (pa-questions.md, pa-deployment.md) |
| `config/paths.ts` | YES | FAIR | Brief path resolution description |
| `orchestrator/pipeline.ts` | YES | GOOD | Phase 0/A/B flow described, supports list |
| `orchestrator/pass-executor.ts` | YES | GOOD | 7-step flow enumerated in JSDoc |
| `orchestrator/rotation.ts` | YES | GOOD | Explains carousel rotation purpose (attention bias counteraction) |
| `orchestrator/phase-router.ts` | YES | GOOD | SHIP/REFINE/RETHINK criteria documented inline |
| `orchestrator/conviction-manager.ts` | YES | GOOD | 6 dimensions listed, FIFO behavior documented, cap documented |
| `orchestrator/cross-subset-verifier.ts` | YES | FAIR | Brief description |
| `orchestrator/workspace-setup.ts` | YES | GOOD | 6-step setup enumerated, isolation mechanisms explained |
| `agents/claude-cli.ts` | YES | GOOD | 4-layer isolation documented, token isolation flags listed |
| `agents/response-handler.ts` | YES | FAIR | Brief, but function-level docs cover extraction strategies |
| `prompts/assembler.ts` | YES | FAIR | One-liner module doc, but function docs are adequate |
| `pa/auditor-spawner.ts` | YES | GOOD | Phase 1 (parallel) and Phase 2 (sequential) documented |
| `pa/http-server.ts` | YES | GOOD | Explains why HTTP server is needed (Playwright blocks file://) |
| `pa/screenshot-capture.ts` | YES | FAIR | Mentions sequential capture to avoid contention |
| `pa/weaver-spawner.ts` | YES | GOOD | Lists what weaver sees (screenshots, reports, conviction, gates) |
| `pa/mini-pa-spawner.ts` | YES | GOOD | Documents cost comparison ($5 vs $25 for full PA) |
| `state/checkpoint.ts` | YES | FAIR | Brief description |
| `state/resume.ts` | YES | GOOD | 6-step resume algorithm documented |
| `state/state-manager.ts` | YES | FAIR | Brief, mentions immutable pattern |
| `types/errors.ts` | YES | FAIR | "14 error categories from doc 08" — references external doc |
| `types/pa.ts` | YES | FAIR | Brief one-liner |
| `types/pass.ts` | YES | FAIR | Brief one-liner |
| `types/pipeline.ts` | YES | FAIR | Brief one-liner |
| `types/state.ts` | YES | GOOD | Documents schema authority ("doc 08 CANONICAL") |
| `types/prompts.ts` | YES | FAIR | Brief one-liner |
| `types/report.ts` | YES | FAIR | Brief one-liner |
| `utils.ts` | YES | FAIR | Brief one-liner |
| `instrumentation/metrics.ts` | YES | FAIR | "Hot path" note is helpful |
| `instrumentation/report.ts` | YES | FAIR | Brief description |
| `logging/logger.ts` | YES | GOOD | 6 log destinations enumerated |
| `logging/cost-tracker.ts` | YES | FAIR | Brief description |
| `validation/gate-runner.ts` | YES | FAIR | Mentions gate-runner-browser.js dependency |
| `validation/html-validator.ts` | YES | FAIR | Brief description |
| `validation/diff-checker.ts` | YES | FAIR | Brief description |

**Priority: SHOULD-HAVE** — Upgrade FAIR modules to include "why this module exists" + "how it fits in the pipeline"

### 1.2 Exported Function Documentation

| Finding | Priority |
|---------|----------|
| `runPipeline()` — has JSDoc with supports list | OK |
| `executeSinglePass()` — has JSDoc with @param for all params, explains DI rationale | GOOD |
| `computeRotation()` — has @param/@returns | GOOD |
| `routePhaseB()` — has detailed routing criteria in JSDoc | GOOD |
| `detectStall()` — has example walkthrough showing old vs new logic | EXCELLENT |
| `spawnClaude()` — has JSDoc listing retry behavior | GOOD |
| `assembleBuilderPrompt()` — NO JSDoc (just function name) | **SHOULD-HAVE** |
| `assembleVerifierPrompt()` — NO JSDoc | **SHOULD-HAVE** |
| `assembleRetrospectivePrompt()` — NO JSDoc | **SHOULD-HAVE** |
| `assembleTcDerivationPrompt()` — NO JSDoc | **SHOULD-HAVE** |
| `assembleContentAnalysisPrompt()` — NO JSDoc | **SHOULD-HAVE** |
| `assemblePaAuditorPrompt()` — NO JSDoc | **SHOULD-HAVE** |
| `assemblePaIntegrativePrompt()` — NO JSDoc | **SHOULD-HAVE** |
| `assembleWeaverPrompt()` — NO JSDoc | **SHOULD-HAVE** |
| `assembleRefineBuilderPrompt()` — NO JSDoc | **SHOULD-HAVE** |
| `trimIfNeeded()` — has partial JSDoc but strategy description is brief | **SHOULD-HAVE** — explain Phase 1 (conviction) vs Phase 2 (valley-position) trim order rationale |
| `substituteTemplate()` — NO JSDoc, but has inline V-05 defense comment | **NICE-TO-HAVE** |
| `validateState()` — NO @returns JSDoc (what does the errors array contain?) | **NICE-TO-HAVE** |
| `resumePipeline()` — has excellent 6-step algorithm doc | GOOD |
| `generateReport()` — NO JSDoc | **SHOULD-HAVE** |
| `createDefaultDeps()` — brief JSDoc, but this 200-line function is the DI wiring center and deserves more | **MUST-HAVE** |

### 1.3 Complex Algorithm Documentation

| Algorithm | File | Documented? | Priority |
|-----------|------|:-----------:|----------|
| Carousel rotation (SHIFT_TABLE) | `rotation.ts` | PARTIAL — explains *what* rotation does but not *why* these specific shift values (0,2,3 for 4 files; 0,2,4 for 5-6 files) | **MUST-HAVE** |
| Stall detection (baseline comparison) | `phase-router.ts:64-83` | GOOD — example walkthrough explains old-vs-new logic | OK |
| Conviction FIFO merge | `conviction-manager.ts:31-57` | GOOD — drop oldest first, cap at MAX_CONVICTION_ENTRIES | OK |
| Token trimming strategy | `assembler.ts:226-315` | PARTIAL — Phase 1/Phase 2 mentioned but no rationale for why conviction trimmed before corpus, or why valley positions specifically | **SHOULD-HAVE** |
| Truncated JSON recovery | `utils.ts:181-248` | PARTIAL — the `recoverTruncatedClaudeResponse` function has no JSDoc explaining when/why truncation happens or the expected format | **SHOULD-HAVE** |
| Template variable injection defense (V-05) | `assembler.ts:203-209` | GOOD — inline comment explains the threat model | OK |
| Artifact integrity verification | `resume.ts:80-103` | FAIR — missing doc on what "recovery" means to the user | **NICE-TO-HAVE** |
| Cross-subset pattern persistence check | `cross-subset-verifier.ts` | FAIR — the prompt explains what, not why this check is needed | **NICE-TO-HAVE** |
| Process group killing (-pid) | `claude-cli.ts:149-157` | NO doc on why process group kill is necessary (child spawns grandchildren) | **SHOULD-HAVE** |
| Stdin backpressure handling | `claude-cli.ts:270-278` | GOOD — inline comment explains the FIX | OK |

### 1.4 Magic Numbers

| Number | File:Line | Documented? | Priority |
|--------|-----------|:-----------:|----------|
| `50 * 1024 * 1024` (50MB) | `claude-cli.ts:40` | YES — inline comment "prevents OOM from runaway output" | OK |
| `8765` (start port) | `http-server.ts:43` | NO — `findAvailablePort(8765)`, no explanation of why 8765 | **NICE-TO-HAVE** |
| `5000` (grace period) | `claude-cli.ts:239-244` | PARTIAL — `setTimeout(..., 5000)` has a preceding comment "Grace period" but no rationale for 5 seconds specifically | **NICE-TO-HAVE** |
| `100` (port range) | `http-server.ts:16` | NO — `port < startPort + 100`, no doc on why 100 ports is enough | **NICE-TO-HAVE** |
| `30_000` (page load timeout) | `screenshot-capture.ts:58` | NO — implicit standard | **NICE-TO-HAVE** |
| `500` (min artifact size) | `html-validator.ts:51` | NO — what's the reasoning for 500 bytes as "very small"? | **NICE-TO-HAVE** |
| `500_000` (max artifact size) | `html-validator.ts:54` | NO — what's the reasoning for 500KB as "very large"? | **NICE-TO-HAVE** |
| `5_000_000` (max content size) | `cli.ts:97-98` | YES — "Maximum: 5MB" | OK |
| `100` (min report length) | `auditor-spawner.ts:243` | YES — `MIN_REPORT_LENGTH` constant with usage context | OK |
| `5` (min successful auditors) | `auditor-spawner.ts:18` | YES — `MIN_SUCCESSFUL_AUDITORS` constant | OK |
| `1.5` (trend threshold) | `mini-pa-spawner.ts:96-97` | NO — why 1.5x ratio for improving/regressing classification? | **NICE-TO-HAVE** |
| `80` (slug max length) | `utils.ts:76` | NO — `.slice(0, 80)`, no doc on why 80 | **NICE-TO-HAVE** |
| `4` (chars per token) | `constants.ts:53` | YES — `CHARS_PER_TOKEN` named constant | OK |

### 1.5 Non-Obvious Decisions ("Why Not X?" Comments)

The codebase has very few "why not" comments. Notable absences:

| Decision | Location | Priority |
|----------|----------|----------|
| Why `--dangerously-skip-permissions` instead of per-tool allow lists? | `claude-cli.ts:74` | **MUST-HAVE** — security-sensitive flag with no rationale |
| Why `--setting-sources ''` (empty string) blocks CLAUDE.md traversal? | `claude-cli.ts:72` | **SHOULD-HAVE** — non-obvious behavior |
| Why `detached: true` for child processes? | `claude-cli.ts:125` | YES — "Create process group so we can kill child + its descendants" | OK |
| Why verifier passes at positions 2, 5, 8 specifically? | `pass.ts:88-98` | NO doc — PASS_ROLES is just a lookup table | **SHOULD-HAVE** |
| Why 3 rotations (A, B, C) and not 2 or 5? | `rotation.ts` | NO doc | **SHOULD-HAVE** |
| Why cross-subset verification after 2, 4, 6 and not every subset? | `constants.ts:72` | NO doc | **SHOULD-HAVE** |
| Why MAX_PA_CYCLES is 3? | `constants.ts:23` | NO doc | **SHOULD-HAVE** |
| Why conviction cap is 10 entries? | `constants.ts:35` | NO doc | **SHOULD-HAVE** |
| Why token limit is 100K? | `constants.ts:41` | NO doc | **SHOULD-HAVE** |
| Why builder gets max-turns=1 but refine-builder gets 25? | `constants.ts:87,94` | NO doc — massive behavioral difference undocumented | **MUST-HAVE** |
| Why builder gets NO tools but refine-builder gets Read/Write/Edit/Bash/Glob/Grep? | `constants.ts:101,108` | NO doc — critical architectural difference | **MUST-HAVE** |
| Why STRICT_MCP_ROLES only for PA auditors? | `constants.ts:112` | NO doc on what strict MCP does or why only auditors need it | **SHOULD-HAVE** |
| Why immutable state pattern (new objects) instead of mutation? | `state-manager.ts` | PARTIAL — mentioned in header but not explained (why?) | **NICE-TO-HAVE** |

---

## 2. README / Top-Level Docs

### Finding: **NO README EXISTS**

The `tools/deep-build/` directory has **zero** top-level markdown documentation. No README.md, no CONTRIBUTING.md, no ARCHITECTURE.md. The `docs/` directory exists but is empty.

Existing top-level `.md` files are audit outputs from other agents, not user documentation:
- `AUDIT-ERROR-RECOVERY.md` — error recovery audit findings
- `PROMPT-INJECTION-AUDIT.md` — security audit findings
- `TEMPLATE-VARIABLE-AUDIT.md` — template variable audit findings

### 2.1 What's Missing

| Document | Priority | Content Needed |
|----------|----------|----------------|
| **README.md** | **MUST-HAVE** | Project description, prerequisites, quick start, architecture overview, file layout |
| **Getting-started guide** | **MUST-HAVE** | Step-by-step first run walkthrough (install deps, prepare content, dry run, full run) |
| **CLI reference** | **MUST-HAVE** | All flags documented with examples (partially exists in `cli.ts` JSDoc but not as standalone docs) |
| **Architecture overview** | **MUST-HAVE** | Phase 0/A/B flow diagram, module dependency graph, data flow description |
| **Pipeline flow** | **SHOULD-HAVE** | For new developers: what happens from `deep-build --content foo.md` to `output.html` |
| **CONTRIBUTING.md** | **NICE-TO-HAVE** | How to add a new pass role, how to add a gate, how to modify templates |

---

## 3. Type Documentation

### 3.1 Key Interface Documentation

| Interface | File | Documented? | Notes |
|-----------|------|:-----------:|-------|
| `PipelineState` | `types/state.ts` | PARTIAL | Schema version + authority documented, but individual fields lack JSDoc (40+ fields, zero field-level JSDoc) |
| `PipelineConfig` | `types/pipeline.ts` | GOOD | Every field has inline JSDoc comment |
| `PipelineDeps` | `orchestrator/pipeline.ts` | GOOD | Every method has inline JSDoc |
| `PassExecutorDeps` | `orchestrator/pass-executor.ts` | GOOD | Every method has inline JSDoc |
| `WeaverVerdict` | `types/state.ts` | PARTIAL | Field types defined but no JSDoc on individual fields — what does pa05Score 3.5 *mean*? What does tier5=6 *mean*? |
| `CostTracker` | `types/state.ts` | NO field-level JSDoc | What are the units? How are perSubset/perRole keyed? |
| `ConvictionEntry` | `types/state.ts` | NO field-level JSDoc | What are the 6 dimension values? (defined elsewhere in conviction-manager) |
| `PassRecord` | `types/state.ts` | NO field-level JSDoc | 18 fields, zero JSDoc |
| `PACycleRecord` | `types/state.ts` | NO field-level JSDoc | |
| `ClaudeResponse` | `types/pass.ts` | PARTIAL | Missing doc on what `subtype` values mean |
| `AuditorReport` | `types/pa.ts` | GOOD | Every field has inline JSDoc |
| `GateResult` | `types/pa.ts` | GOOD | Every field has inline JSDoc |
| `GateVerdict` | `types/pa.ts` | GOOD | Every field has inline JSDoc |
| `ScreenshotManifest` | `types/pa.ts` | GOOD | Every field has inline JSDoc |
| `PromptTemplate` | `types/prompts.ts` | GOOD | Every field has inline JSDoc |
| `AssembledPrompt` | `types/prompts.ts` | GOOD | Every field has inline JSDoc |
| `RunReport` | `types/report.ts` | NO field-level JSDoc | Deeply nested structure with zero documentation |
| `Logger` | `logging/logger.ts` | GOOD | Method-level JSDoc present |
| `ErrorRecord` | `types/errors.ts` | NO field-level JSDoc | |
| `HtmlValidationResult` | `validation/html-validator.ts` | NO field-level JSDoc | |
| `DiffResult` | `validation/diff-checker.ts` | NO field-level JSDoc | |

**Priority: SHOULD-HAVE** — `PipelineState`, `WeaverVerdict`, `CostTracker`, `PassRecord`, `RunReport` need field-level JSDoc. These are the core data structures.

### 3.2 Enum/Union Documentation

| Type | File | Documented? | Notes |
|------|------|:-----------:|-------|
| `AuditorId = 'A' \| ... \| 'I'` | `types/pa.ts` | NO — no doc on why A-I specifically (9 auditors), or why `I` is special | **SHOULD-HAVE** |
| `AgentRole` (10 roles) | `types/state.ts` | NO — no doc on what each role does | **SHOULD-HAVE** |
| `PipelinePhase` (6 phases) | `types/pipeline.ts` | NO — no doc on phase transition rules | **SHOULD-HAVE** |
| `ErrorCategory` (14 categories) | `types/errors.ts` | NO — "14 error categories from doc 08" references external doc but doesn't explain them | **SHOULD-HAVE** |
| `PromptVariableName` (32 variables) | `types/prompts.ts` | NO — the variable NAMES are self-documenting but no doc on what each CONTAINS at runtime | **MUST-HAVE** (see Section 5) |

---

## 4. Configuration Documentation

### 4.1 Constants Documentation (constants.ts)

| Constant | Inline Comment | Rationale Documented? | Priority |
|----------|:-:|:-:|----------|
| `MODEL` | YES | NO — why claude-opus-4-6 specifically? | **NICE-TO-HAVE** |
| `RETRY_LIMIT` = 3 | YES ("4 total attempts") | NO — why 3 retries? | **NICE-TO-HAVE** |
| `RETRY_BACKOFF` = [5000, 15000, 45000] | YES ("Exponential backoff delays") | NO — why these specific delays? | **NICE-TO-HAVE** |
| `BUDGET_WARNING` = 150 | YES ("Budget warning threshold in USD") | NO — why $150? | **SHOULD-HAVE** |
| `BUDGET_CAP` = 250 | YES ("Budget hard cap in USD") | NO — why $250? What's the expected cost range? | **SHOULD-HAVE** |
| `MAX_PA_CYCLES` = 3 | YES | NO — why 3? What happens at 4+? | **SHOULD-HAVE** |
| `PA_THRESHOLD` = 3.5 | YES ("PA-05 score threshold for SHIP") | NO — why 3.5 out of 5? | **SHOULD-HAVE** |
| `RETHINK_THRESHOLD` = 2.0 | YES | NO — why 2.0? | **SHOULD-HAVE** |
| `TIER5_MINIMUM` = 6 | YES ("out of 8") | NO — why 6/8? | **SHOULD-HAVE** |
| `MAX_CONVICTION_ENTRIES` = 10 | YES | NO — why 10? | **SHOULD-HAVE** |
| `MAX_DISCOVERY_ENTRIES` = 100 | YES | NO — why 100? | **NICE-TO-HAVE** |
| `TOKEN_LIMIT` = 100,000 | YES ("~100K tokens") | NO — why 100K? What model constraint? | **SHOULD-HAVE** |
| `TOKEN_WARNING/TRIM/FAIL` | YES | NO — why these specific thresholds? | **NICE-TO-HAVE** |
| `PASSES_PER_SUBSET` = 8 | YES | NO — why 8? B V B B V B B V pattern undocumented here | **MUST-HAVE** |
| `TOTAL_SUBSETS` = 7 | YES | NO — why 7? | **SHOULD-HAVE** |
| `CROSS_SUBSET_VERIFY_AFTER` = [2,4,6] | YES | NO — why these three? | **SHOULD-HAVE** |
| `STALL_THRESHOLD` = 2 | YES | NO — why 2 consecutive cycles? | **NICE-TO-HAVE** |
| `MINI_PA_AUDITORS` = ['A','C','G'] | YES | NO — why these 3 auditors specifically? Soul, Coherence, Typography? | **SHOULD-HAVE** |
| `MAX_TURNS` per role | YES | NO — why builder=1 but weaver=40? CRITICAL behavioral difference | **MUST-HAVE** |
| `ALLOWED_TOOLS` per role | YES | NO — why builder gets NO tools? Why refine-builder gets Bash? | **MUST-HAVE** |
| `STRICT_MCP_ROLES` | YES | NO — what does "strict MCP" mean? | **SHOULD-HAVE** |
| `SHIFT_TABLE` | YES ("Rotation shift lookup table") | NO — why these specific shift values? How were they derived? | **MUST-HAVE** |

### 4.2 Corpus Subset Documentation (corpus.ts)

**GOOD**: Subset design rationale is documented in the module-level JSDoc:
```
* Subset design rationale:
* - S1-S2: Research documents (theory + foundations)
* - S3-S4: Case studies (compositional examples + deep dives)
* ...
```

**MISSING**: No documentation on:
- Why these specific file groupings (why R3+R4+R5+SYNTHESIS in S1 but R1+R2 in S2?)
- What each file contributes conceptually
- Why `approximateLines` is tracked (token estimation)
- What `INFRASTRUCTURE_FILES` are and why they're loaded every pass

**Priority: SHOULD-HAVE**

### 4.3 PA Question Assignments (pa-questions.ts)

**GOOD**: Auditor focus areas are documented:
```typescript
A: 'Soul & Identity',
B: 'Perception & Spatial',
...
```

**MISSING**: No documentation on:
- Why these specific question-to-auditor assignments
- What PA-01 through PA-55 questions actually ask (referenced by ID only)
- Why integrative auditor (I) receives no pre-assigned questions
- Source: references `pa-questions.md` and `pa-deployment.md` but these are in `ephemeral/va-extraction/` which may not be obvious

**Priority: SHOULD-HAVE** — At minimum, inline the question text or provide a reference path

---

## 5. Template Documentation

### 5.1 Template Files (10 templates in `templates/`)

| Template | Size | Variable Count | Variables Documented? |
|----------|------|:-:|:-:|
| `builder-corpus.md` | 13K | 14 | NO |
| `content-analysis.md` | 2.4K | 3 | NO |
| `pa-auditor.md` | 6.2K | 6 | NO |
| `pa-integrative.md` | 4.3K | 4 | NO |
| `pa-weaver.md` | 10K | 8 | NO |
| `refine-builder.md` | 8.7K | 12 | NO |
| `retrospective.md` | 2.6K | 4 | NO |
| `tc-derivation.md` | 3.8K | 3 | NO |
| `verifier-corpus.md` | 4.4K | 7 | NO |
| `world-description.md` | 1.5K | 0 | N/A (static content) |

**CRITICAL GAP: No template variable reference exists.**

The `PromptVariableName` type in `types/prompts.ts` lists 32 variable names, but there is ZERO documentation on:
- What each variable CONTAINS at runtime (e.g., `{CONVICTION_BRIEF}` = the TC derivation output from Phase 0 Step 1)
- Expected format (markdown? HTML? JSON?)
- Approximate token budget per variable
- Which template uses which variables
- Which variables are optional vs required

The only way to understand what `{CORPUS_FILES_CONCATENATED}` contains is to read `assembler.ts:136-147`, trace it back to `corpus.ts`, understand the rotation logic, and mentally assemble the result.

**Priority: MUST-HAVE** — A template variable reference table would dramatically improve developer onboarding

### 5.2 Template-to-Assembler Mapping

No documentation maps which assembler function populates which template:

| Assembler Function | Template | Documented? |
|-------------------|----------|:-:|
| `assembleBuilderPrompt` | `builder-corpus.md` | NO — inferred from `loadTemplate('builder-corpus.md')` |
| `assembleVerifierPrompt` | `verifier-corpus.md` | NO |
| `assembleRetrospectivePrompt` | `retrospective.md` | NO |
| `assembleTcDerivationPrompt` | `tc-derivation.md` | NO |
| `assembleContentAnalysisPrompt` | `content-analysis.md` | NO |
| `assemblePaAuditorPrompt` | `pa-auditor.md` | NO |
| `assemblePaIntegrativePrompt` | `pa-integrative.md` | NO |
| `assembleWeaverPrompt` | `pa-weaver.md` | NO |
| `assembleRefineBuilderPrompt` | `refine-builder.md` | NO |

**Priority: SHOULD-HAVE** — A mapping table would help developers trace prompt assembly

---

## 6. Error Documentation

### 6.1 Custom Error Types

| Error Class | When Thrown | Documented? | Priority |
|-------------|-----------|:-----------:|----------|
| `OrchestratorError` | Base class for all pipeline errors | NO — no JSDoc on when to use base vs subclass | **NICE-TO-HAVE** |
| `ValidationError` | Token limit exceeded, HTML validation failed | NO | **NICE-TO-HAVE** |
| `ClaudeInvocationError` | Claude CLI spawn/response failures | PARTIAL — category field hints at when thrown | **NICE-TO-HAVE** |
| `StateCorruptionError` | Schema mismatch, artifact hash mismatch, resume failures | NO | **NICE-TO-HAVE** |
| `BudgetExceededError` | Cost exceeds BUDGET_CAP | YES — constructor documents both fields | OK |
| `HtmlExtractionError` | No HTML found in builder response | NO | **NICE-TO-HAVE** |
| `PlaywrightError` | Browser launch, navigation, screenshot failures | NO | **NICE-TO-HAVE** |
| `FileNotFoundError` | Corpus file, template, state file missing | YES — filePath field documented | OK |
| `ConfigMismatchError` | Config changed between resume attempts | NO | **NICE-TO-HAVE** |

### 6.2 Troubleshooting Guide

**NO TROUBLESHOOTING GUIDE EXISTS.**

Common scenarios that need documentation:

| Scenario | Where to Look | Priority |
|----------|--------------|----------|
| `claude` binary not found (ENOENT) | `agents/claude-cli.ts` — NOT distinguished from other spawn errors (see AUDIT-ERROR-RECOVERY.md) | **MUST-HAVE** |
| Budget exceeded — what to do? | `phase-router.ts` — pipeline pauses, but no doc on how to continue | **MUST-HAVE** |
| Resume fails with "config changed" | `state/resume.ts` — mentions `--force-restart` which doesn't exist | **MUST-HAVE** |
| Artifact hash mismatch on resume | `state/resume.ts` — recovery logic exists but not documented for users | **SHOULD-HAVE** |
| Rate limiting / overload errors | `agents/claude-cli.ts` — retried automatically, but what if max retries exceeded? | **SHOULD-HAVE** |
| Screenshots are dark/blank | Known issue from pipeline runs — no troubleshooting entry | **SHOULD-HAVE** |
| Corpus file path not found | `workspace-setup.ts:93-101` — throws but error message is clear | **NICE-TO-HAVE** |
| Gate runner browser.js missing | `gate-runner.ts:18-31` — fallback logic exists but error path unclear | **NICE-TO-HAVE** |

---

## 7. Operational Documentation

### 7.1 Runtime Information

| Question | Documented? | Where? | Priority |
|----------|:-----------:|--------|----------|
| How long does a typical run take? | NO | Should be in README | **MUST-HAVE** |
| What's the expected cost range? | NO | Budget constants exist ($150 warn/$250 cap) but no "typical run costs $X-$Y" | **MUST-HAVE** |
| What are the prerequisites? | NO | `claude` CLI, Node.js version, `playwright` browser install | **MUST-HAVE** |
| How does `--resume` work? | PARTIAL | `resume.ts` has 6-step algorithm doc but no user-facing doc | **MUST-HAVE** |
| How does `--dry-run` work? | YES | `cli.ts` USAGE text | OK |
| How does `--subset N` work? | YES | `cli.ts` USAGE text | OK |
| How does `--skip-phase-a` work? | YES | `cli.ts` USAGE text, but no doc on when/why to use it | **SHOULD-HAVE** |
| What's in the output directory? | NO | `_orchestrator/`, `_checkpoints/`, `_passes/`, `_screenshots/`, `_pa/` undocumented | **MUST-HAVE** |
| What does `state.json` contain? | PARTIAL | `types/state.ts` has the schema, but no user-facing description | **SHOULD-HAVE** |
| How to interpret `run-report.json`? | NO | `types/report.ts` has the type but no usage guide | **SHOULD-HAVE** |
| What model is used? | YES | `constants.ts:8` — `claude-opus-4-6` | OK |
| Can I change the model? | NO | MODEL is a constant, not configurable via CLI | **NICE-TO-HAVE** |

### 7.2 Installation/Setup

No documentation exists for:

1. **`npm install`** — required, not documented
2. **`npx playwright install chromium`** — required for screenshots/gates, not documented
3. **Corpus file paths** — all 38 corpus files must exist at their defined paths relative to project root, or workspace setup fails. No doc on how to verify.
4. **Design system directory** — must exist at `{projectRoot}/design-system/`, auto-detected by walking up from package root. No doc on what happens if it's missing.

**Priority: MUST-HAVE**

---

## 8. Summary: Prioritized Gap List

### MUST-HAVE (13 items — documentation failures that block onboarding or cause confusion)

1. **README.md** — No project documentation exists at all
2. **Getting-started guide** — No first-run walkthrough
3. **CLI reference** — Flags exist in `cli.ts` JSDoc but not as standalone docs
4. **Architecture overview** — Phase 0/A/B flow, module dependencies, data flow
5. **Template variable reference** — 32 variables, zero documentation on what they contain
6. **`createDefaultDeps()` documentation** — 200-line DI wiring center with no JSDoc
7. **`SHIFT_TABLE` rationale** — Core rotation algorithm with no explanation of shift values
8. **`MAX_TURNS` per role rationale** — builder=1 vs weaver=40 is a critical behavioral difference
9. **`ALLOWED_TOOLS` per role rationale** — builder=no tools vs refine-builder=6 tools is critical
10. **`PASSES_PER_SUBSET` = 8 rationale** — B V B B V B B V pattern undocumented
11. **`--dangerously-skip-permissions` rationale** — Security-sensitive flag with no justification
12. **Output directory structure** — What each subdirectory contains
13. **Prerequisites documentation** — Required software, setup steps

### SHOULD-HAVE (20 items — improve understanding for working developers)

1. Assemble*Prompt() function JSDoc (9 functions)
2. Field-level JSDoc for `PipelineState` (40+ fields)
3. Field-level JSDoc for `WeaverVerdict`, `CostTracker`, `PassRecord`
4. `AgentRole` union — what each role does
5. `AuditorId` — why 9 auditors (A-I), why I is integrative
6. `ErrorCategory` — what each of the 14 categories means
7. `PipelinePhase` — phase transition rules
8. Verifier pass positions (2, 5, 8) rationale
9. 3 rotations (A, B, C) rationale
10. Cross-subset verification timing rationale
11. Budget thresholds rationale ($150/$250)
12. PA scoring thresholds rationale (3.5/2.0/6)
13. Mini-PA auditor selection rationale (A, C, G)
14. Token trimming strategy rationale
15. `STRICT_MCP_ROLES` explanation
16. Truncated JSON recovery explanation
17. Process group killing rationale
18. Corpus subset grouping rationale
19. Template-to-assembler mapping
20. `--resume` user-facing documentation

### NICE-TO-HAVE (18 items — polish)

1. Port number 8765 rationale
2. Grace period 5000ms rationale
3. Magic number explanations (500 bytes, 500KB, etc.)
4. Slug max length 80 rationale
5. Trend threshold 1.5x rationale
6. MODEL choice documentation
7. Retry limit/backoff rationale
8. Immutable state pattern explanation
9. Error class hierarchy documentation
10. `substituteTemplate()` JSDoc
11. `validateState()` return type documentation
12. Recovery semantics documentation
13. Cross-subset verification purpose
14. Error troubleshooting guide entries (7 scenarios)
15. CONTRIBUTING.md
16. `run-report.json` interpretation guide
17. `state.json` user-facing description
18. `--skip-phase-a` use cases

---

## 9. What Works Well

To be fair, several areas have strong documentation:

1. **Module-level JSDoc** — Every file has one. Quality varies but coverage is 100%.
2. **DI pattern documentation** — `PassExecutorDeps` and `PipelineDeps` interfaces have method-level JSDoc explaining each dependency.
3. **Stall detection algorithm** — `detectStall()` in `phase-router.ts` has an excellent walkthrough with old-vs-new logic comparison.
4. **Workspace isolation** — `workspace-setup.ts` clearly documents the 6-step setup process and why each step exists.
5. **Resume algorithm** — `resume.ts` documents the 6-step integrity verification.
6. **PA subsystem types** — `types/pa.ts` has thorough field-level JSDoc on `AuditorReport`, `GateResult`, `GateVerdict`, `ScreenshotManifest`.
7. **Pipeline config** — `types/pipeline.ts` `PipelineConfig` has JSDoc on every field.
8. **CLI help text** — `cli.ts` has a well-formatted usage block with all flags, exit codes.
9. **Corpus subset rationale** — `corpus.ts` explains the 7-subset grouping strategy.
10. **gate-runner-browser.js header** — Comprehensive 30-line header documenting architecture, exported functions, gate counts, and phases.

---

## 10. Recommendations

### Phase 1 (Immediate — unblocks onboarding)
1. Write `README.md` with: description, prerequisites, installation, quick start, architecture diagram, file layout
2. Add a `## Template Variables` reference table in README or a separate `docs/template-variables.md`
3. Document the `MAX_TURNS` and `ALLOWED_TOOLS` rationale in `constants.ts` — these are the most confusing undocumented decisions

### Phase 2 (Near-term — improves maintainability)
4. Add `constants.ts` rationale comments (budget, thresholds, pass pattern, rotation)
5. Add field-level JSDoc to `PipelineState`, `WeaverVerdict`, `PassRecord`
6. Add JSDoc to all 9 `assemble*Prompt()` functions
7. Create troubleshooting section in README

### Phase 3 (Polish)
8. Add CONTRIBUTING.md
9. Document error hierarchy
10. Add output directory structure reference

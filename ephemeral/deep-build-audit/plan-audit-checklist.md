# Checklist Completeness Audit

**Auditor:** Opus 4.6 (Checklist Auditor)
**Date:** 2026-02-28
**Scope:** Cross-reference the plan's Master Implementation Checklist against ALL 9 source docs (00-08) to find missing items
**Method:** Built an independent checklist from source docs, then diffed against the plan's checklist

---

## 1. Methodology

I constructed my own master checklist by reading all 9 source documents (00-08) and the plan's File/Folder Structure section, extracting every implementation requirement regardless of whether it appeared in the plan's checklist. I then diffed my checklist against the plan's sections A-I.

---

## 2. Plan's Checklist (Sections A-I) — What It Covers

| Section | Items | Scope |
|---------|-------|-------|
| A. Project Setup | A.1-A.8 (8 items) | Directory, package.json, tsconfig, gitignore, SKILL.md, dirs, npm install/build |
| B. TypeScript Types | B.1-B.5 (5 files) | pipeline.ts, state.ts, pass.ts, prompts.ts, errors.ts |
| C. Core Modules | C.1-C.18 (18 files) | cli, orchestrator/*, prompts/*, agents/*, validation/*, state/*, instrumentation/*, utils |
| D. PA Subsystem | D.1-D.4 (4 files) | screenshot-capture, auditor-spawner, weaver-spawner, pa-router |
| E. Logging | E.1-E.2 (2 files) | logger, cost-tracker |
| F. Config | F.1-F.3 (3 files) | corpus, constants, paths |
| G. Prompt Templates | G.1-G.9 (9 files) | builder, verifier, retrospective, tc-derivation, content-analysis, pa-auditor, pa-weaver, refine-builder, world-description |
| H. Integration | H.1-H.4 (4 items) | Wiring, circular deps, error propagation, build success |
| I. Verification | I.1-I.9 (9 items) | Dry-run, paths, templates, E2E, resume, cost, gate-runner, state atomicity, CLAUDECODE |

**Total plan checklist items: 62**

---

## 3. Independent Checklist Derived from Source Docs

### 3A. Project Setup (from plan + doc 04)

| # | Requirement | Source | In Plan? |
|---|------------|--------|----------|
| MY-A.1 | Create `tools/deep-build/` directory | Plan | YES (A.1) |
| MY-A.2 | package.json with type:module, private:true, playwright dep | Plan | YES (A.2) |
| MY-A.3 | tsconfig.json module:nodenext, strict, outDir:dist | Plan | YES (A.3) |
| MY-A.4 | .gitignore (node_modules, dist, *.js.map) | Plan | YES (A.4) |
| MY-A.5 | SKILL.md at `~/.claude/skills/deep-build/` | Plan | YES (A.5) |
| MY-A.6 | All src/ subdirectories | Plan | YES (A.6) |
| MY-A.7 | npm install succeeds | Plan | YES (A.7) |
| MY-A.8 | npm run build succeeds | Plan | YES (A.8) |
| MY-A.9 | `templates/` directory created with 9 template slots | Plan file structure | **NO** |
| MY-A.10 | `tests/` directory created (even if deferred) | Plan file structure | **NO** |
| MY-A.11 | `docs/` directory created | Plan file structure | **NO** |

### 3B. TypeScript Types (from doc 02 + doc 05 + doc 08)

| # | Requirement | Source | In Plan? |
|---|------------|--------|----------|
| MY-B.1 | pipeline.ts: PipelineConfig, CorpusSubset, CorpusFile, PipelinePhase | Doc 02 S2.1+S2.6 | YES (B.1) |
| MY-B.2 | state.ts: PipelineState v3 (ALL fields from doc 08 S1.1) | Doc 08 S1.1 | YES (B.2) |
| MY-B.3 | pass.ts: PassDefinition, AgentRole, RotationSchedule, PassResult | Doc 02 S2.2+S2.3 | YES (B.3) |
| MY-B.4 | prompts.ts: PromptTemplate, PromptVariable, AssembledPrompt | Doc 07 | YES (B.4) |
| MY-B.5 | errors.ts: 14 error categories, OrchestratorError base class | Doc 08 S6 | YES (B.5) |
| MY-B.6 | state.ts: PAHardeningState, PACycleRecord, AuditorReport, WeaverVerdict | Doc 05 S1.3 | **PARTIAL** — B.2 says "ALL v3 fields" but does not explicitly list PA types |
| MY-B.7 | state.ts: CostTracker interface | Doc 02 S2.4 | **IMPLICIT** in B.2 |
| MY-B.8 | state.ts: ConvictionEntry type | Plan file structure | **IMPLICIT** in B.2 |
| MY-B.9 | pass.ts: ViewportConfig type | Doc 05 S2.3 | **NO** |
| MY-B.10 | pass.ts: ScreenshotManifest type | Doc 05 S2.2 | **NO** |
| MY-B.11 | pass.ts: GateResult, GateRunnerResult types | Doc 05 S3.2 | **NO** |
| MY-B.12 | pass.ts: GateVerdict type (5 variants) | Doc 05 S3.3 | **NO** |
| MY-B.13 | state.ts: RunReport interface (from instrumentation) | Plan S601 | **NO** |
| MY-B.14 | state.ts: ValidationResult, ValidationCheck interfaces | Doc 02 S2.5 | **IMPLICIT** in B.2 |

### 3C. Core Modules (from plan file structure + docs 02/05/08)

| # | Requirement | Source | In Plan? |
|---|------------|--------|----------|
| MY-C.1 | cli.ts: parseArgs, --content, --dry-run, --resume, --subset, --help | Plan | YES (C.1) |
| MY-C.2 | orchestrator/pipeline.ts: main loop, phase transitions | Doc 02 S4 | YES (C.2) |
| MY-C.3 | orchestrator/pass-executor.ts: single pass execution | Doc 02 S5 | YES (C.3) |
| MY-C.4 | orchestrator/rotation.ts: pure rotation math | Doc 02 S2.2 | YES (C.4) |
| MY-C.5 | orchestrator/phase-router.ts: SHIP/REFINE/RETHINK + stall/budget | Doc 05 S6 | YES (C.5) |
| MY-C.6 | prompts/assembler.ts: template + variables + corpus + token check | Plan | YES (C.6) |
| MY-C.7 | agents/claude-cli.ts: spawn, CLAUDECODE bypass, timeout, retry | Doc 04 | YES (C.7) |
| MY-C.8 | agents/response-handler.ts: JSON parse, HTML extraction | Doc 04 S4 | YES (C.8) |
| MY-C.9 | validation/html-validator.ts: structural checks | Doc 02 S2.5 | YES (C.9) |
| MY-C.10 | validation/gate-runner.ts: Playwright wrapper | Doc 05 S3 | YES (C.10) |
| MY-C.11 | validation/gate-runner-browser.js: browser-context gates | Existing codebase | YES (C.11) |
| MY-C.12 | validation/diff-checker.ts: artifact comparison | Plan | YES (C.12) |
| MY-C.13 | state/state-manager.ts: atomic read/write | Doc 08 S3.3 | YES (C.13) |
| MY-C.14 | state/checkpoint.ts: subset boundary snapshots | Doc 08 S7 | YES (C.14) |
| MY-C.15 | state/resume.ts: 6-step integrity verification | Doc 08 S3.1 | YES (C.15) |
| MY-C.16 | instrumentation/metrics.ts: per-pass collection | Plan | YES (C.16) |
| MY-C.17 | instrumentation/report.ts: run-report.json generation | Plan | YES (C.17) |
| MY-C.18 | utils.ts: atomicWrite, ensureDir, sha256, retry, slugify, estimateTokens | Plan | YES (C.18) |
| MY-C.19 | HTTP server for Playwright (serves HTML locally since Playwright blocks file://) | Doc 04 S8.1, Doc 05 S2.2 | **NO** — screenshot-capture.ts mentions it but no dedicated module |
| MY-C.20 | Conviction layer merge logic (FIFO, cap at 10 entries, relevance weighting) | Plan GAP-C02 | **NO** — should be in pass-executor or its own module |
| MY-C.21 | Discovery log extraction (append-only, marker-based from builder output) | Doc 08 S1.1 | **NO** — response-handler.ts mentions "extract conviction markers" but discovery log extraction not explicitly itemized |
| MY-C.22 | Token estimator pre-flight check (>100K tokens → trim conviction then valley files) | Plan GAP-B01 | **IMPLICIT** in C.6 but deserves own item |

### 3D. PA Subsystem (from doc 05)

| # | Requirement | Source | In Plan? |
|---|------------|--------|----------|
| MY-D.1 | pa/screenshot-capture.ts: HTTP server + Playwright + 3 viewports | Doc 05 S2 | YES (D.1) |
| MY-D.2 | pa/auditor-spawner.ts: 8 parallel + 1 sequential | Doc 05 S4 | YES (D.2) |
| MY-D.3 | pa/weaver-spawner.ts: WeaverVerdict structured output | Doc 05 S5 | YES (D.3) |
| MY-D.4 | pa/pa-router.ts: deterministic routing logic | Doc 05 S6 | YES (D.4) |
| MY-D.5 | DPR check (GR-61) as pre-screenshot safety net | Doc 05 S2.5 | **NO** |
| MY-D.6 | Screenshot validation (GR-62): blank detection, <5KB, <20% blank | Doc 05 S2.4 | **NO** |
| MY-D.7 | Mini-PA mode (1440px only, 3 auditors, for inter-refinement checks) | Doc 05 S1.1 / Doc 00 line 279 | **NO** |
| MY-D.8 | Experiential scan / cold-look step (Step 3 from doc 00/05) | Doc 00 line 211-215 | **NO** |
| MY-D.9 | Stall detection within PA cycles (2 consecutive no-improvement) | Doc 05 S1.2 | **IMPLICIT** in C.5 but should be D-specific |
| MY-D.10 | PA cycle termination conditions (RELEASE/STALLED/MAX/ABORT) | Doc 05 S1.2 | **IMPLICIT** in D.4 |

### 3E. Logging (from doc 08 S2)

| # | Requirement | Source | In Plan? |
|---|------------|--------|----------|
| MY-E.1 | logging/logger.ts: 4 destinations (console, run.log, passes.jsonl, errors.jsonl) | Plan | YES (E.1) |
| MY-E.2 | logging/cost-tracker.ts: per-pass cost, budget warning/cap | Plan | YES (E.2) |
| MY-E.3 | **decisions.jsonl** log destination | Doc 08 S2.3 | **NO** |
| MY-E.4 | **quality.jsonl** log destination | Doc 08 S2.6 | **NO** |
| MY-E.5 | **cost.jsonl** log destination | Doc 08 S2.5 | **PARTIAL** — mentioned in plan file structure but not in checklist E section |
| MY-E.6 | Log archive on config hash mismatch (old logs preserved) | Doc 08 S2.8/S3.2 | **NO** |

### 3F. Config (from plan + doc 02)

| # | Requirement | Source | In Plan? |
|---|------------|--------|----------|
| MY-F.1 | config/corpus.ts: 7 subset definitions, 38 verified paths | Doc 02 S3, Doc 03 | YES (F.1) |
| MY-F.2 | config/constants.ts: all thresholds and defaults | Plan | YES (F.2) |
| MY-F.3 | config/paths.ts: portable path resolution | Plan | YES (F.3) |
| MY-F.4 | Reference files config (mechanism-catalog, components.css, tokens.css, world-description) | Doc 02 S2.6 | **IMPLICIT** in F.1 or F.3, not explicit |
| MY-F.5 | Config hash computation for resume validation | Doc 08 S3.1 | **IMPLICIT** in F.2 or state module |

### 3G. Prompt Templates (from doc 07)

| # | Requirement | Source | In Plan? |
|---|------------|--------|----------|
| MY-G.1 | templates/builder-corpus.md | Doc 07 Template 1 | YES (G.1) |
| MY-G.2 | templates/verifier-corpus.md | Doc 07 Template 2 | YES (G.2) |
| MY-G.3 | templates/retrospective.md (NEW) | Plan | YES (G.3) |
| MY-G.4 | templates/tc-derivation.md (NEW) | Plan | YES (G.4) |
| MY-G.5 | templates/content-analysis.md (NEW) | Plan | YES (G.5) |
| MY-G.6 | templates/pa-auditor.md | Doc 07 Template 3 | YES (G.6) |
| MY-G.7 | templates/pa-weaver.md | Doc 07 Template 4 | YES (G.7) |
| MY-G.8 | templates/refine-builder.md | Doc 07 Template 5 | YES (G.8) |
| MY-G.9 | templates/world-description.md (NEW) | Plan | YES (G.9) |
| MY-G.10 | Template 5a: Integrative auditor template (supplementary) | Doc 07 Template 5a | **NO** — doc 07 defines 6 templates (1, 2, 3, 4, 5, 5a), plan has 9 templates but different breakdown |
| MY-G.11 | PA auditor question assignments (which questions to which auditor letter) | Doc 05 S4.2-4.3 | **IMPLICIT** in G.6 but no explicit data file |

### 3H. Integration (from plan)

| # | Requirement | Source | In Plan? |
|---|------------|--------|----------|
| MY-H.1 | All modules wired via imports | Plan | YES (H.1) |
| MY-H.2 | No circular dependencies | Plan | YES (H.2) |
| MY-H.3 | Error types propagate correctly | Plan | YES (H.3) |
| MY-H.4 | npm run build zero errors | Plan | YES (H.4) |
| MY-H.5 | Config hash computed at start, stored in state | Doc 08 S3.1 | **IMPLICIT** |
| MY-H.6 | Atomic state writes tested | Doc 08 S3.3 | **IMPLICIT** in I.8 |

### 3I. Verification (from plan + docs)

| # | Requirement | Source | In Plan? |
|---|------------|--------|----------|
| MY-I.1 | Dry-run mode (execution plan, exit 0) | Plan | YES (I.1) |
| MY-I.2 | 38 corpus paths resolve | Plan | YES (I.2) |
| MY-I.3 | 9 templates load, zero missing variables | Plan | YES (I.3) |
| MY-I.4 | E2E: 1 subset, 8 passes with real claude -p | Plan | YES (I.4) |
| MY-I.5 | Resume test: kill mid-pass, restart | Plan | YES (I.5) |
| MY-I.6 | Cost tracking matches JSON output | Plan | YES (I.6) |
| MY-I.7 | Gate-runner-browser.js executes in Playwright | Plan | YES (I.7) |
| MY-I.8 | State.json atomic writes survive crash | Plan | YES (I.8) |
| MY-I.9 | CLAUDECODE bypass works from Claude Code | Plan | YES (I.9) |
| MY-I.10 | Budget cap enforcement test (set to $0.01, verify stop) | Plan Verification #12 | **YES** in Verification table but **NO** in I checklist |
| MY-I.11 | Token estimate per-subset, none exceeds 100K | Plan Verification #3 | **YES** in Verification table but **NO** in I checklist |
| MY-I.12 | PA screenshot capture at 3 viewports | Doc 05 | **NO** |
| MY-I.13 | 9 PA auditors spawn and produce reports | Doc 05 | **NO** |
| MY-I.14 | Weaver produces valid WeaverVerdict JSON | Doc 05 | **NO** |
| MY-I.15 | Stall detection triggers forced SHIP | Doc 05 S1.2 | **NO** |
| MY-I.16 | Checkpoint creation and restoration | Doc 08 S7 | **NO** |
| MY-I.17 | Log files written to correct locations (6 destinations) | Doc 08 S2 | **NO** |
| MY-I.18 | Rotation produces correct file orderings | Doc 02 S2.2 | **NO** |

---

## 4. MISSING Items Analysis

### 4.1 Log Destinations: 6 in doc 08 vs 4 in plan (BLOCKING)

Doc 08 Section 2 specifies **6 log files**:
1. `orchestrator.log` (human-readable) -- Plan maps to E.1 as "run.log"
2. `decisions.jsonl` (decision forensics) -- **MISSING from plan checklist entirely**
3. `errors.jsonl` (all errors) -- Plan has this in E.1
4. `cost.jsonl` (per-invocation) -- Plan mentions in file structure but NOT in E checklist
5. `quality.jsonl` (quality signals) -- **MISSING from plan checklist entirely**
6. `passes.jsonl` (per-pass summary) -- Plan has this in E.1

**Plan E.1** says "4 destinations (console, run.log, passes.jsonl, errors.jsonl)". This DROPS:
- `decisions.jsonl` -- critical for debugging routing decisions
- `quality.jsonl` -- critical for PA score trajectory
- `cost.jsonl` -- listed in file structure (line 556) but not in E checklist

**Severity: HIGH.** The plan acknowledges the gap at GAP-I01 ("6 log files in doc 08 vs 2-3 in plan") and resolves it with "Implement 4 log destinations" — but this explicitly drops 2 of 6. The plan's own gap analysis identified the discrepancy and then only partially fixed it.

### 4.2 Error Handling Items (PRESENT but distributed)

The plan covers error handling through:
- B.5: 14 error categories in `errors.ts`
- C.7: `claude-cli.ts` with retry logic and exponential backoff
- C.8: `response-handler.ts` with truncated JSON handling
- C.5: `phase-router.ts` with budget check
- F.2: `constants.ts` with retryLimit, retryBackoff, budgetCap values

**What's missing from checklist:**
- No explicit item for the CLAUDECODE bypass code (mentioned in C.7 but not as separate verification)
- No explicit item for retry with exponential backoff parameters [5000, 15000, 45000] matching constants
- No explicit item for budget hard cap enforcement as separate from budget tracking

The plan addresses these implicitly but a builder could miss the retry backoff array or the budget enforcement logic without an explicit checklist line.

### 4.3 Instrumentation Items (MOSTLY PRESENT)

- C.16: `metrics.ts` -- present
- C.17: `report.ts` and `run-report.json` -- present
- Plan Section "Instrumentation Dimensions" documents 10 measurement dimensions -- present
- Plan Section "run-report.json Schema" provides full TypeScript interface -- present

**What's missing:**
- No checklist item for the RunReport TypeScript interface itself (lives in types but B section doesn't call it out)
- No checklist item for `_passes/` directory creation per pass (prompt.md + response.json + artifact-backup.html)
- No checklist item for per-pass prompt archival (the plan file structure shows `_passes/pass-001/prompt.md` but no checklist item ensures prompts are saved)

### 4.4 File/Folder Cross-Reference: Checklist vs File Structure

Files in the plan's File/Folder Structure that lack explicit checklist items:

| File/Dir | In Structure? | Checklist Item? | Gap? |
|----------|--------------|-----------------|------|
| `templates/` directory | YES (line 496) | NO | **MINOR** -- implicitly created with G items |
| `tests/` directory | YES (line 506, "deferred") | NO | **MINOR** -- deferred |
| `docs/ARCHITECTURE.md` | YES (line 508) | NO | **MISSING** -- Wave 5 deliverable with no checklist item |
| `docs/CONFIGURATION.md` | YES (line 509) | NO | **MISSING** -- Wave 5 deliverable with no checklist item |
| `docs/RESUME.md` | YES (line 510) | NO | **MISSING** -- Wave 5 deliverable with no checklist item |
| `dist/` directory | YES (line 511) | NO | OK -- gitignored, auto-created |
| Build output dirs (ephemeral/builds/) | YES (line 547) | NO | **MISSING** -- no checklist item for output directory creation logic |
| `_orchestrator/` state dir | YES (line 551) | NO | **IMPLICIT** in C.13 |
| `_checkpoints/` dir | YES (line 558) | NO | **IMPLICIT** in C.14 |
| `_passes/` per-pass archive | YES (line 562) | NO | **MISSING** -- no checklist item |
| `_screenshots/` dir | YES (line 563) | NO | **IMPLICIT** in D.1 |
| `_pa/` reports dir | YES (line 564) | NO | **IMPLICIT** in D.2 |
| `_content.md` frozen copy | YES (line 549) | NO | **MISSING** -- no item for freezing input content |
| `_tc-brief.md` conviction brief | YES (line 550) | NO | **MISSING** -- no item for TC derivation output storage |

### 4.5 Prompt Template Cross-Reference

Doc 07 defines **6 templates**: Builder (T1), Verifier (T2), PA Auditor (T3), Weaver (T4), Refinement Builder (T5), Integrative Auditor (T5a).

Plan defines **9 templates**: builder-corpus, verifier-corpus, retrospective, tc-derivation, content-analysis, pa-auditor, pa-weaver, refine-builder, world-description.

**Mapping:**
| Doc 07 Template | Plan Template | Match? |
|-----------------|---------------|--------|
| T1: Builder | G.1: builder-corpus.md | YES |
| T2: Verifier | G.2: verifier-corpus.md | YES |
| T3: PA Auditor | G.6: pa-auditor.md | YES |
| T4: Weaver | G.7: pa-weaver.md | YES |
| T5: Refinement Builder | G.8: refine-builder.md | YES |
| T5a: Integrative Auditor | ??? | **MISSING** -- no G item |
| N/A | G.3: retrospective.md | NEW (not in doc 07) |
| N/A | G.4: tc-derivation.md | NEW |
| N/A | G.5: content-analysis.md | NEW |
| N/A | G.9: world-description.md | NEW |

**Gap:** The Integrative Auditor template (T5a) from doc 07 has no corresponding G checklist item. Doc 05 Section 4.1 says PA-I (Integrative) spawns AFTER A-H complete with a different prompt. The plan's D.2 says "8 parallel + 1 sequential" -- the sequential one IS the integrative auditor. But there's no template for it in the G section.

Possible resolution: The pa-auditor.md template (G.6) handles all 9 via `{AUDITOR_ID}` variable, and the integrative auditor just gets different `{ASSIGNED_QUESTIONS}` (none -- free-form). But this should be explicit.

### 4.6 Verification Cross-Reference: Checklist I vs Verification Table

The plan has BOTH a checklist section I (I.1-I.9) and a Verification table (#1-#12). They partially overlap:

| Verification # | In I Checklist? | Gap? |
|----------------|----------------|------|
| #1: Compiles | YES (H.4, I implied) | OK |
| #2: Dry run | YES (I.1) | OK |
| #3: Token estimates per subset, none >100K | **NO** | **MISSING from I** |
| #4: Templates load, 9 with 0 warnings | YES (I.3) | OK |
| #5: Corpus paths validated | YES (I.2) | OK |
| #6: CLAUDECODE bypass | YES (I.9) | OK |
| #7: E2E 1 subset | YES (I.4) | OK |
| #8: Resume test | YES (I.5) | OK |
| #9: State atomicity | YES (I.8) | OK |
| #10: Cost tracking | YES (I.6) | OK |
| #11: Gate runner | YES (I.7) | OK |
| #12: Budget cap enforcement ($0.01 test) | **NO** | **MISSING from I** |

Two verification items (#3 and #12) exist in the Verification table but NOT in the I checklist. A builder following only the I checklist would miss them.

---

## 5. Missing Sections Analysis

The plan has sections A-I. Are any major functional areas missing as sections?

| Potential Section | Coverage | Missing? |
|-------------------|----------|----------|
| A. Setup | Complete | NO |
| B. Types | Complete (with implicit PA types) | MINOR gaps |
| C. Core Modules | Complete (18 items) | MINOR gaps (conviction merge, HTTP server) |
| D. PA Subsystem | Complete (4 files) | MINOR gaps (DPR check, GR-62, mini-PA) |
| E. Logging | Incomplete (4 of 6 log destinations) | **YES -- decisions.jsonl and quality.jsonl missing** |
| F. Config | Complete | MINOR (reference files implicit) |
| G. Prompts | Complete (9 templates) | MINOR (integrative auditor T5a missing) |
| H. Integration | Complete | OK |
| I. Verification | Incomplete (missing 2 from Verification table) | MINOR |
| **J. Documentation** | **ABSENT** | **YES -- 3 docs files listed in structure but no checklist section** |
| **K. Build Output Structure** | **ABSENT** | **YES -- no section for creating/managing output dirs** |
| **L. PA Question Assignments** | **ABSENT** | **YES -- which questions go to which auditor is defined in doc 05 but no checklist item maps the data** |

---

## 6. Consolidated Gap List (Severity-Ranked)

### BLOCKING (must fix before Wave 2)

| # | Gap | Source | Severity |
|---|-----|--------|----------|
| GAP-CK-01 | **decisions.jsonl** log destination missing from E section | Doc 08 S2.3 | HIGH |
| GAP-CK-02 | **quality.jsonl** log destination missing from E section | Doc 08 S2.6 | HIGH |
| GAP-CK-03 | **cost.jsonl** listed in file structure but NOT in E checklist | Doc 08 S2.5 | HIGH |
| GAP-CK-04 | Verification #3 (token estimates <100K) not in I checklist | Plan's own Verification table | HIGH |
| GAP-CK-05 | Verification #12 (budget cap $0.01 test) not in I checklist | Plan's own Verification table | HIGH |

### SIGNIFICANT (should fix)

| # | Gap | Source | Severity |
|---|-----|--------|----------|
| GAP-CK-06 | Integrative Auditor template (T5a from doc 07) has no G item | Doc 07 | MEDIUM |
| GAP-CK-07 | No section J for documentation files (ARCHITECTURE, CONFIGURATION, RESUME) | Plan file structure | MEDIUM |
| GAP-CK-08 | PA types (PAHardeningState, PACycleRecord, AuditorReport, WeaverVerdict) not explicitly listed in B section | Doc 05 S1.3 | MEDIUM |
| GAP-CK-09 | ViewportConfig, ScreenshotManifest, GateResult, GateVerdict types not in B section | Doc 05 | MEDIUM |
| GAP-CK-10 | RunReport interface not in B section | Plan S601 | MEDIUM |
| GAP-CK-11 | No checklist item for `_passes/` per-pass archive directory (prompt + response + backup) | Plan file structure | MEDIUM |
| GAP-CK-12 | No checklist item for frozen content copy (`_content.md`) | Plan file structure | MEDIUM |
| GAP-CK-13 | No checklist item for TC brief output storage (`_tc-brief.md`) | Plan file structure | MEDIUM |
| GAP-CK-14 | Conviction layer merge logic (FIFO, cap 10, relevance weighting) not an explicit C item | Plan GAP-C02 | MEDIUM |
| GAP-CK-15 | HTTP server for Playwright (file:// blocked) not an explicit module | Doc 04, Doc 05 | MEDIUM |

### MINOR (nice to have)

| # | Gap | Source | Severity |
|---|-----|--------|----------|
| GAP-CK-16 | DPR check (GR-61) not explicit in D section | Doc 05 S2.5 | LOW |
| GAP-CK-17 | Screenshot validation (GR-62) not explicit in D section | Doc 05 S2.4 | LOW |
| GAP-CK-18 | Mini-PA mode not explicit in D section | Doc 05/00 | LOW |
| GAP-CK-19 | Experiential scan / cold-look step not explicit | Doc 00 | LOW |
| GAP-CK-20 | PA E2E verification (screenshots + auditors + weaver) not in I section | Doc 05 | LOW |
| GAP-CK-21 | Rotation correctness test not in I section | Doc 02 | LOW |
| GAP-CK-22 | Log archive on config hash mismatch not explicit | Doc 08 S3.2 | LOW |
| GAP-CK-23 | templates/ and docs/ directory creation not in A section | Plan | LOW |
| GAP-CK-24 | PA question assignment data (which auditor gets which questions) not explicit | Doc 05 | LOW |

---

## 7. Why a Perfect Match Would Be Suspicious

If my independent checklist matched the plan's checklist perfectly, that would indicate either:
1. I was reading the plan's checklist and reverse-engineering to match it (confirmation bias)
2. The plan was so comprehensive that a 62-item checklist covered 100% of requirements across 11,253 lines of source docs (statistically implausible)

My independent construction found **24 gaps** (5 BLOCKING, 10 SIGNIFICANT, 9 MINOR). This is a reasonable gap rate for a 62-item checklist against ~11K lines of source material.

The fact that the plan's OWN Verification table (#3 and #12) is not fully reflected in the I checklist (GAP-CK-04, GAP-CK-05) is the strongest signal that the checklist was constructed separately from the verification section and never fully reconciled.

The log destination discrepancy (GAP-CK-01 through CK-03) is the most architecturally significant gap: the plan identifies this in GAP-I01, explicitly acknowledges doc 08 says 6 log files, and then deliberately reduces to 4 -- but does so incompletely (cost.jsonl appears in the file structure section but not in the E checklist).

---

## 8. Recommendations

1. **Add GAP-CK-01/02/03:** Either implement all 6 log destinations from doc 08, or explicitly document WHY decisions.jsonl and quality.jsonl are dropped. If dropped, state where their content goes (merged into passes.jsonl? quality signals in state.json?).

2. **Sync I checklist with Verification table:** Add I.10 (token estimates) and I.11 (budget cap test) to the I section.

3. **Add B.6-B.13:** Explicitly list PA types, gate types, viewport types, and RunReport in the B section. These are distinct from the "state v3" types.

4. **Add G.10:** Explicitly address the integrative auditor template -- either as a separate file or document that G.6's `{AUDITOR_ID}` variable handles it.

5. **Add section J (Documentation):** 3 docs files are in the structure but have no checklist items.

6. **Add C.19/C.20:** HTTP server module and conviction merge logic as explicit items.

7. **Add D.5-D.8:** DPR check, screenshot validation, mini-PA mode, and experiential scan as sub-items of the PA section.

---

## 9. Summary

| Category | Plan Items | My Items | Gaps Found |
|----------|-----------|----------|-----------|
| A. Setup | 8 | 11 | 3 MINOR |
| B. Types | 5 | 14 | 5-8 (types implicit) |
| C. Modules | 18 | 22 | 4 |
| D. PA | 4 | 10 | 4-6 |
| E. Logging | 2 | 6 | **3 (BLOCKING)** |
| F. Config | 3 | 5 | 2 MINOR |
| G. Prompts | 9 | 11 | 1-2 |
| H. Integration | 4 | 6 | 2 MINOR |
| I. Verification | 9 | 18 | **2 (BLOCKING)** + 7 MINOR |
| J. Documentation | 0 | 3 | **NEW SECTION NEEDED** |
| **TOTAL** | **62** | **~106** | **24 gaps (5 BLOCKING, 10 SIGNIFICANT, 9 MINOR)** |

The plan's checklist covers the CORE implementation well (all 18 source modules, all 9 templates, all 5 type files). The gaps are predominantly in:
- **Peripheral infrastructure** (log destinations, output directories, documentation)
- **PA subsystem details** (DPR, screenshot validation, mini-PA, question assignments)
- **Cross-section consistency** (Verification table vs I checklist, file structure vs E checklist)
- **Type completeness** (PA-specific types not explicitly itemized in B)

None of the gaps would prevent a working build, but the log destination gaps (CK-01 through CK-03) would produce an orchestrator that cannot answer the debugging questions doc 08 was designed to support.

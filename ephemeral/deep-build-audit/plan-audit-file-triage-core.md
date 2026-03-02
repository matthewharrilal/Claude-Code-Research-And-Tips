# File Triage: Core Specs, Research, and README

**Agent:** file-triage-core (Opus 4.6)
**Date:** 2026-02-28
**Method:** Read at least first 100-150 lines of every file in `_deterministic-orchestration/` (9 files), `_research/` (11 files), and `README.md`. Cross-referenced against the build plan at `sorted-finding-honey.md` (963 lines) to determine what the plan already absorbed vs. what remains independently useful.

---

## Key Finding: The Plan Already Absorbed 80-90% of the Spec Value

The build plan (`sorted-finding-honey.md`) is a 963-line synthesis that already incorporates the canonical decisions, interfaces, gap resolutions, and architecture from the 9 spec docs. It resolves 8 cross-document contradictions (K01-K08), catalogs 66 gaps, defines the full state schema v3, lists all file/module contracts, and includes complete wave/team architecture. **Most spec docs are now REDUNDANT for implementation** -- their value was consumed during plan creation. Exceptions noted below.

---

## Section 1: `_deterministic-orchestration/` (9 files, 11,253 lines)

| # | File | Lines | Verdict | What's Extractable for the Build | What's Superseded or Irrelevant |
|---|------|-------|---------|----------------------------------|-------------------------------|
| 00 | `00-PIPELINE-DIAGRAM.md` | 456 | **PARTIAL** | ASCII diagrams of Phase A subsets 1-7 (visual reference during implementation), Phase B PA cycle step diagram (Steps 1-5), information isolation rules, the 9-auditor parallel+sequential layout. Useful as a **visual quick-reference** when implementing `pipeline.ts` and `auditor-spawner.ts`. | Subset compositions, pass counts, rotation formulas, viewport configs -- all absorbed into plan. The narrative descriptions of what each pass does are generic filler. |
| 01 | `01-cli-capabilities.md` | 955 | **USEFUL** | **THE canonical CLI reference.** Complete flag documentation with tested examples. Sections the plan DOES NOT fully replicate: `--input-format stream-json` multi-turn pattern (Section 2.2), `--effort` flag options (Section 2.4), system prompt flags interaction rules (Section 2.5 -- replacement vs append, mutual exclusivity), `--disallowed-tools` (Section 2.6), `--strict-mcp-config` vs `--mcp-config` (Section 2.9), `--debug-file` (Section 2.11), `--setting-sources ""` for settings isolation. **Wave 0 CLI verification agents and Wave 2 `impl-agents` builder MUST read this file.** | The plan already absorbed per-role flag tables, JSON response format, the `CLAUDECODE` bypass pattern, and `--fallback-model`. |
| 02 | `02-orchestrator-architecture.md` | 2,443 | **PARTIAL** | TypeScript interfaces (CorpusFile, CorpusSubset, RotationSchedule, PassDefinition, PipelineState v2) -- but **v2 is SUPERSEDED by doc 08's v3 and the plan's v3**. The `rotateFiles()` function implementation (lines 160-163) is a clean, tested pure function -- useful as a starting point. `constructPrompt()` function signature and variable assembly logic (useful for `assembler.ts`). The main execution loop pseudo-code shows the builder-verifier pass interleaving. | **Most of this doc is superseded.** The plan's State Schema v3, module contracts, file structure, and gap resolutions all override doc 02. The subset definitions here differ from doc 03 (doc 03 is canonical per K03). The v2 state schema has different field names. The cost tracking is simpler than doc 08/plan v3. |
| 03 | `03-pipeline-mapping.md` | 803 | **USEFUL** | **THE canonical corpus file registry.** Every file path verified against filesystem (2026-02-28). 38 rotating files across 7 subsets with exact line counts. 4 infrastructure files (MCAT, COMP, TOK, PROH). 4 grammar/guideline files (CSL, MC, CR, SR). 3 visual case studies. 9 primary case studies. This is the **ground truth for `corpus.ts`** implementation. Wave 2 `impl-config` builder MUST use this as the definitive path list. | The text integration model (output as `corpus-integration-S{N}.md`) is superseded per K01 -- HTML artifact is canonical. The "95 files, 85,525 lines" header count is misleading (38 unique rotating). |
| 04 | `04-claude-code-integration.md` | 749 | **USEFUL** | **Empirical proof of every critical capability.** Verified with actual command execution: CLAUDECODE bypass (lines 19-32), JSON output format with actual response object (lines 68-100), structured output with `--json-schema` and the `structured_output` vs `result` field distinction (lines 111-131), `--strict-mcp-config` MCP isolation (lines 278-283), Playwright contention confirmed (lines 293-298), `--dangerously-skip-permissions` requirement (lines 179-181), `--add-dir` for cross-directory access (lines 192-195), `--no-session-persistence` behavior (lines 213-217), `--append-system-prompt` vs `--system-prompt` (lines 222-242), `--max-budget-usd` (lines 247-250). **Wave 0 `cli-buddy` agent and Wave 2 `impl-agents` builder MUST read this.** | Some findings overlap with doc 01, but doc 04 has the EMPIRICAL evidence (actual output, not just flag descriptions). They serve different purposes: doc 01 = flag reference, doc 04 = tested behavior proof. |
| 05 | `05-pa-integration.md` | 1,935 | **USEFUL** | **THE canonical Phase B specification.** Data structures unique to this doc that the plan only partially reproduces: `PAHardeningState` (cycle-level resume), `PAHardeningConfig` (min/max cycles, thresholds), `AuditorReport.completionManifest`, `WeaverVerdict.pa05SubCriteria` (primary/crossValidator/resolved pattern), `WeaverVerdict.emotionalArc` (5 dimensions). Screenshot capture implementation with DPR-1 enforcement (lines 154-227), scroll-through at 80% viewport steps, GR-62 screenshot validation logic. Gate runner execution order (Step 1.8 through Step 6). PA auditor prompt with question assignment. Weaver prompt with experiential anchor protocol. Routing decision tree with 4 outcomes (RELEASE/POLISH/IMPROVE/RETHINK) and 3 routing decisions (SHIP/REFINE/REBUILD). **Wave 2 `impl-pa` builder MUST read this file end-to-end.** | The plan absorbed the high-level PA cycle steps, auditor counts, and SHIP/REFINE/RETHINK thresholds. But doc 05's detailed implementations (screenshot capture code, gate runner execution sequence, auditor prompt templates, weaver structured output) are NOT in the plan. |
| 06 | `06-adversarial-review.md` | 805 | **PARTIAL** | 14 risk dimensions with severity ratings. The cost-benefit analysis (Section 1) is the most useful section -- it calculates per-pass costs, provides the Middle-Tier counterexample ($10-15 for PA-05 4/4), and derives the cost circuit breaker recommendation ($100 threshold). The attention degradation analysis (Section 2) identifies the conviction layer unbounded growth problem and recommends cap at 10 entries. The verifier reliability section (Section 3) raises confirmation bias risk. | **The plan already resolved most of these risks.** Conviction cap at 10 = in plan (GAP-C02). Budget cap at $250 = in plan (GAP-G01). Per-role cost calculations = in plan. The cost-benefit "FATAL" rating is OVERSTATED -- it doesn't account for the circuit breaker the plan added. The adversarial also uses 3 PA auditors for cost estimates (doc 06 internal inconsistency per K06; plan uses 9). Sections 4-14 are risk dimensions that the plan's 66-gap registry addresses more specifically. |
| 07 | `07-prompt-templates.md` | 1,133 | **USEFUL** | **THE canonical prompt template source.** 5 complete templates with full text (builder, verifier, PA auditor, weaver, refine builder). Variable source mappings per template. Pass context table (what `{PASS_CONTEXT}` resolves to for each of 8 subset passes). Expected output formats per role. Allowed tools per role. Token estimates per template. The builder template (lines 39-187) includes the Seven Lenses, material constraints, conviction/discovery marker extraction format, and is written in RECIPE format ("Read/Build/Let/Name" verbs, not "Verify/Must/Fail if"). **Wave 1 `prompt-architect` and Wave 4 `prompt-deepener-*` agents MUST start from these templates.** | The plan lists 9 templates needed but only doc 07 has 5. The 4 missing templates (retrospective, tc-derivation, content-analysis, world-description) must be created from scratch per GAP-H01. The plan already absorbed the variable source mapping table and per-role tool configs. |
| 08 | `08-state-management.md` | 1,974 | **USEFUL** | **THE canonical state management specification.** State schema v3 with every field justified (lines 15-187) -- more detailed than the plan's version (includes `lastSavedAt`, `currentSubsetId` as string not number, `artifactBackups` array, `convictionLayerPath`/`discoveryLogPath` as files not inline, `checkpoints` as `CheckpointRecord[]`). PassRecord v3 with artifact paths and validation details (lines 190-246). PACycleRecord with auditor/weaver/refine sub-records (lines 249-295). CheckpointRecord (lines 297-325). ErrorRecord with 14 error categories (lines 327-382). CostTracker (lines 384-430). Resume algorithm with 9 integrity checks (more than plan's 6). Multi-destination logging (4 log files). Atomic write specification. Real-time TUI spec. **Wave 0 `schema-reconciler`, Wave 1 `type-architect`, and Wave 2 `impl-state` builders MUST read this.** | The plan absorbed the v3 schema at a high level but simplified some fields (e.g., plan uses `passNumber` instead of `globalPassNumber`, plan uses inline conviction entries instead of file paths). The plan's version is the CANONICAL resolution when fields conflict, but doc 08 has the RATIONALE for each field that builders need to understand. |

### Implementation Reading Priority for `_deterministic-orchestration/`

**Must-read (full file):**
- `03-pipeline-mapping.md` -- for `corpus.ts` path registry
- `05-pa-integration.md` -- for `pa/` subsystem implementation
- `07-prompt-templates.md` -- for `templates/` creation
- `08-state-management.md` -- for `types/state.ts` and `state/` modules

**Must-read (specific sections):**
- `01-cli-capabilities.md` -- Sections 2.2, 2.4, 2.5, 2.6, 2.9, 2.11 (flags not fully in plan)
- `04-claude-code-integration.md` -- Sections 1-8 (empirical proof of each capability)

**Reference-only (skim for visual understanding):**
- `00-PIPELINE-DIAGRAM.md` -- ASCII diagrams as visual aid
- `02-orchestrator-architecture.md` -- Only for `rotateFiles()` function and `constructPrompt()` logic
- `06-adversarial-review.md` -- Only Section 1 (cost-benefit) and Section 2 (attention degradation)

---

## Section 2: `_research/` (11 files, 2,810 lines)

| # | File | Lines | Verdict | What's Extractable for the Build | What's Superseded or Irrelevant |
|---|------|-------|---------|----------------------------------|-------------------------------|
| 01 | `01-ideology-extraction.md` | 236 | **NOISE** | The creation-vs-extraction paradigm, conviction-vs-compliance framing, 53-vs-3774 finding, multi-window architecture concept, 6-dimension handoff tissue concept. | **All of this is pre-deterministic-orchestration thinking.** The paradigm is already embedded in the prompt templates (doc 07) and the plan's creative tissue specification. Reading this file will not change any implementation decision. It is the PHILOSOPHICAL ORIGIN of decisions already made. Implementers don't need the philosophy -- they need the resulting specifications. |
| 02 | `02-implementation-audit.md` | 326 | **NOISE** | Architectural portrait of the CURRENT `/build-page` SKILL.md (v2, 956 lines). Documents the 3-window pipeline, file types, Step 0-8 flow, what each file does for the builder. | **Describes the OLD pipeline that the orchestrator REPLACES.** None of this is relevant to building the deterministic orchestrator. The orchestrator is a fundamentally different architecture (56 passes vs 1 build, code-controlled vs instruction-dependent). Understanding the old pipeline is interesting but does not inform the new build. |
| 03 | `03-file-characterization.md` | 207 | **PARTIAL** | Per-file creative energy analysis of 7 builder input files: world-description.md (17 lines, "single most effective file"), prohibitions.md (419 lines, 85% negative framing), tokens.css (183 lines, "dictionary"), mechanism-catalog.md (751 lines, "most creatively alive library file"), components.css (944 lines, "assembly mindset"), semantic-rules.md (529 lines, NOT currently loaded). | **Useful for Wave 4 prompt deepening only.** The file characterizations describe HOW each file affects builder psychology. This is directly relevant for `prompt-deepener-builder` (Wave 4) and `prompt-quality-buddy` (Wave 1) agents who need to evaluate whether the prompt templates create the right processing mode. NOT relevant for any TypeScript implementation work. Read sections on `world-description.md` and `mechanism-catalog.md` only. |
| 04 | `04-corpus-map.md` | 272 | **PARTIAL** | Complete map of ALL files that COULD enter a builder's context (560 files, ~266,649 lines). Shows what Window 1/2/3 builders currently receive. The critical finding: "Builders currently see 1.2% of the available corpus." The content type landscape table (creative knowledge vs reference vs rules vs case study vs research vs exploration vs identity) with percentage breakdown. Window 1 ratio: 45.7% rules, 53.7% reference, 0.5% creative knowledge. | **Most of this describes the OLD pipeline's window composition.** The deterministic orchestrator loads DIFFERENT content (corpus subsets via 56 passes). The specific file lists and window compositions are superseded. BUT the content type taxonomy and the ratio analysis are useful for Wave 4 prompt deepening agents to understand the philosophical context of prompt design. |
| 05 | `05-context-budget.md` | 286 | **PARTIAL** | Token budget analysis for Opus 4.6: 200K context window, ~32K max output, ~9,500 tokens fixed foundation (system prompt + tools + CLAUDE.md), ~150K working canvas. Per-file token estimates for all reference files. Window 1 = ~43,700 tokens (29% of working canvas). Window 3 (REFINE) = ~71,000 tokens (47%). Four possible compositions (A-D) with different file mixes. | **The specific window compositions are for the OLD pipeline.** BUT the per-file token estimates are useful for the plan's `assembler.ts` token estimation -- the plan's GAP-B01 requires a token estimator, and these empirical estimates (e.g., mechanism-catalog = ~7,171 tokens, components.css = ~7,494 tokens) are directly usable as calibration data. Extract the token-per-file table for `constants.ts` or `corpus.ts` reference data. |
| 06 | `06-handoff-tissue.md` | 257 | **PARTIAL** | Traces how the 6 dimensions of creative tissue survive context boundaries in an actual build (Gas Town). Dimension-by-dimension survival quality: What I Built = RICH, What I Was Trying to Achieve = RICH, What I Rejected = MODERATE, What Surprised Me = THIN, What I Wanted But Couldn't = MODERATE-RICH, What's Unresolved = MODERATE. The structural tension: REFINE builder reads Weaver direction BEFORE reading what was already tried and rejected. | **Directly relevant for prompt template design.** The conviction extraction format (`CONVICTION_ADDITION_START/END`, `DISCOVERY_LOG_START/END`) in doc 07's builder template is the IMPLEMENTATION of this analysis. Wave 4 `prompt-deepener-builder` agents should read this to understand WHY the builder template asks for 6-dimension reflection. Also relevant for Wave 2 `impl-agents` builder who implements conviction marker extraction in `response-handler.ts`. |
| 07 | `07-tc-comparison.md` | 229 | **NOISE** | Compares TC skill prescriptions vs what the Gas Town builder actually wrote. The "conviction vs specification territory" bifurcation finding. The "Creative Conditions" section was missing entirely from the Gas Town brief. Six lenses on the gap between TC vision and builder practice. | **Describes the OLD single-window TC+BUILD pattern.** The deterministic orchestrator has a separate TC derivation step (Window 1). This analysis of how TC and BUILD interact in a COMBINED window is not relevant to the separated architecture. May have marginal value for Wave 4 prompt work on `tc-derivation.md` template (one of the 4 templates created from scratch), but the plan doesn't reference this doc. |
| 08 | `08-adversarial.md` | 254 | **PARTIAL** | 12 adversarial challenges to the multi-window ideology. Key contrarian: "the best result ever (PA-05 3.5/4) came from focused direction, not diffuse material." "File RELEVANCE matters more than file TYPE." "N=2 is insufficient for any conclusion." "The 53-vs-3774 finding compares apples to oranges." "If NOTHING carries understanding, then every window starts from zero regardless of inputs." | **The adversarial challenges are already absorbed into the plan's design decisions.** The plan uses both focused direction (conviction brief) AND diffuse material (corpus subsets) -- the resolution of the core tension. The contrarian points about N=2 sample size and cost-benefit are addressed by the plan's circuit breakers and staged verification. However, this file is useful for Wave 5 `adversarial-breaker` and `adversarial-cost` agents as BACKGROUND -- they should know what adversarial ground has already been covered. |
| 09 | `09-timeline.md` | 184 | **NOISE** | Chronological arc of the original conversation: "Something Is Wrong" -> "Moving Through vs Squeezing Into" -> "Understanding Lives in Processing" -> "The Boundary Question" -> "The Merger: Best Engine, Best Transmission" -> "The 6 Dimensions" -> "The Architecture." | **Pure conversation history.** This is the story of how the IDEAS evolved, not any specification or interface. Zero implementation value. Of possible interest to a future historian of the project, but no builder agent needs this. |
| 10 | `10-pipeline-remnant-audit.md` | 305 | **NOISE** | Archaeology of the `/build-page` SKILL.md showing where old pipeline thinking "still lives." Classifies each element as "Serves creation," "Inherited from pipeline," "Mixed," or "Depends on framing." Identifies the header tension (description matches old architecture, philosophy matches new). Traces how the 7 builder input files serve creation vs compliance. | **Describes the OLD pipeline.** The deterministic orchestrator doesn't use the SKILL.md that this doc audits. The orchestrator has its own prompt templates (doc 07) with its own variable assembly. The remnant audit is an archaeological artifact OF the archaeological artifact. No implementation value. |
| 11 | `11-blind-spot-analysis.md` | 254 | **PARTIAL** | Cross-report tension analysis from all 10 research agents. Key insights: "The REFINE Builder Is Where Quality Lives" (W1 = PA-05 2.0, W3 = PA-05 3.5), "The Content File Is Invisible" (no agent examined content quality as a variable), "The Weaver's Quality Is Treated as Reliable" (fragility question), "The DPR Problem Gets Annotated, Not Solved," circular reasoning in "understanding is a processing state." | **The blind spots identified here shaped the plan's design.** The REFINE builder emphasis is reflected in the plan's Phase B refinement architecture. The DPR problem is addressed by forced DPR-1 in doc 05's screenshot capture. The Weaver fragility is partially addressed by the 9-auditor breadth. BUT the "Content File Is Invisible" finding remains unaddressed -- the plan doesn't vary its approach based on content type. Useful for Wave 5 `fresh-eyes-code` and `fresh-eyes-prompts` agents as orientation material. |

### Implementation Reading Priority for `_research/`

**Must-read for specific roles:**
- `03-file-characterization.md` -- Wave 1 `prompt-quality-buddy`, Wave 4 `prompt-deepener-*` agents only (lines 1-100: world-description and mechanism-catalog characterizations)
- `05-context-budget.md` -- Wave 2 `impl-prompts` builder only (per-file token estimates for assembler calibration)
- `06-handoff-tissue.md` -- Wave 2 `impl-agents` builder only (conviction marker extraction rationale), Wave 4 prompt agents

**Reference for adversarial/fresh-eyes agents:**
- `08-adversarial.md` -- Wave 5 adversarial agents (background on prior challenges)
- `11-blind-spot-analysis.md` -- Wave 5 fresh-eyes agents (orientation)

**Skip entirely:**
- `01-ideology-extraction.md` -- Philosophy already embedded in specs
- `02-implementation-audit.md` -- Describes old pipeline
- `04-corpus-map.md` -- Old pipeline window compositions (unless Wave 4 needs the content type taxonomy)
- `07-tc-comparison.md` -- Old combined TC+BUILD analysis
- `09-timeline.md` -- Conversation history
- `10-pipeline-remnant-audit.md` -- Archaeology of old pipeline

---

## Section 3: `README.md` (142 lines)

| File | Lines | Verdict | What's Extractable | What's Superseded |
|------|-------|---------|--------------------|--------------------|
| `README.md` | 142 | **PARTIAL** | The 7 Evaluation Lenses table (lines 27-35) -- these lenses are referenced in the builder template (doc 07, "Seven Lenses") and the plan ("Seven lenses: Creative evaluation compass"). The lenses define the quality standard for creative output. The "Core Tension" resolution (lines 39-48) -- direction tells WHERE, raw material gives WHAT TO BUILD WITH. The 4-window architecture summary (lines 53-62). The 6-dimension handoff protocol summary (lines 64-70). The "Reading Order" section (lines 84-142) maps the research investigation structure. | **Most content is a summary of the research.** The 7 lenses are the only implementation-relevant content (they appear in prompt templates). The reading order is useful for understanding the research but not for building code. The architecture description is superseded by the plan. |

### Implementation Reading Priority for `README.md`

**Extract only:** Lines 27-35 (7 Evaluation Lenses table) for prompt template reference.

---

## Summary: File Value Distribution

### Files an Implementer MUST Read (by wave)

**Wave 0 (Research & Foundation):**
| Agent | Must Read |
|-------|-----------|
| `schema-reconciler` | `08-state-management.md` (full) + plan State Schema section |
| `cli-capabilities-verifier` | `01-cli-capabilities.md` (full) + `04-claude-code-integration.md` (full) |
| `prompt-evaluator` | `07-prompt-templates.md` (full) + `README.md` (lines 27-35 only) |

**Wave 1 (Architecture & Contracts):**
| Agent | Must Read |
|-------|-----------|
| `type-architect` | `08-state-management.md` (lines 1-430) + `02-orchestrator-architecture.md` (lines 67-202 only, data structures) |
| `prompt-architect` | `07-prompt-templates.md` (full) + `06-handoff-tissue.md` (for 6-dimension rationale) |
| `prompt-quality-buddy` | `03-file-characterization.md` (lines 1-100) |

**Wave 2 (Implementation):**
| Agent | Must Read |
|-------|-----------|
| `impl-config` | `03-pipeline-mapping.md` (full) -- THE ground truth for corpus paths |
| `impl-agents` | `01-cli-capabilities.md` (full) + `04-claude-code-integration.md` (full) |
| `impl-pa` | `05-pa-integration.md` (full) |
| `impl-state` | `08-state-management.md` (full) |
| `impl-prompts` | `07-prompt-templates.md` (full) + `05-context-budget.md` (token estimates only) |

**Wave 4 (Prompt Deepening):**
| Agent | Must Read |
|-------|-----------|
| `prompt-deepener-builder` | `07-prompt-templates.md` (builder template) + `03-file-characterization.md` + `06-handoff-tissue.md` |

**Wave 5 (Hardening):**
| Agent | Must Read |
|-------|-----------|
| `adversarial-*` | `06-adversarial-review.md` + `08-adversarial.md` (background) |
| `fresh-eyes-*` | `11-blind-spot-analysis.md` (orientation only) |

### Files Safe to Ignore for ALL Implementation Agents

1. `_research/01-ideology-extraction.md` -- Philosophy, not specification
2. `_research/02-implementation-audit.md` -- Old pipeline portrait
3. `_research/07-tc-comparison.md` -- Old TC+BUILD analysis
4. `_research/09-timeline.md` -- Conversation history
5. `_research/10-pipeline-remnant-audit.md` -- Archaeology of old pipeline

### The Critical Insight for Implementation

The plan (`sorted-finding-honey.md`) is the PRIMARY source of truth. The spec docs are SUPPLEMENTS that provide implementation detail the plan condensed. When the plan and a spec doc disagree (state schema fields, subset compositions, CLI flags, PA thresholds), **the plan is canonical**. The spec docs are useful for:

1. **Implementation detail** the plan intentionally omitted (function bodies, screenshot capture code, gate execution sequences)
2. **Empirical evidence** the plan references but doesn't reproduce (doc 04's tested CLI behaviors)
3. **Rationale** the plan compressed (doc 08's field-by-field justifications)
4. **Prompt text** the plan points to but doesn't contain (doc 07's complete templates)

The research files are almost entirely NOISE for implementation. Their value was consumed during the ideology -> architecture -> specification -> plan pipeline. The exceptions are narrow: file characterizations for prompt quality work, token estimates for assembler calibration, and adversarial/blind-spot analysis for hardening agents.

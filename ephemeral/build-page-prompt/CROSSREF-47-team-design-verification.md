# CROSSREF-47: Team Design vs Proven Patterns Verification

**Agent:** crossref-agent (Opus 4.6)
**Task:** #47
**Date:** 2026-02-19
**Inputs:** 16-team-architecture.md, 04-orchestrator-research.md, 15-orchestrator-cross-ref.md, memory/agent-team-lessons.md, memory/MEMORY.md

---

## EXECUTIVE SUMMARY

The team architecture in `16-team-architecture.md` describes **two distinct teams** that must not be conflated:

1. **The BUILD-PAGE-PROMPT team** (this session): 11 agents across 4 waves that WRITE the `/build-page` skill and supporting files. This is a file-writing pipeline.
2. **The /build-page runtime team** (future invocations): 11-17 agents (1 builder + 9 PA auditors + 1 weaver + fix cycles) that EXECUTE the pipeline at runtime to build actual pages.

This cross-reference evaluates BOTH team designs against proven patterns.

**Overall Verdict: MATCHES WITH 4 FINDINGS (1 BLOCKING, 2 SIGNIFICANT, 1 MINOR)**

---

## PART A: BUILD-PAGE-PROMPT TEAM (This Session -- Writing the Files)

### Pattern Comparison Table

| # | Pattern | Team Design Says | Proven Pattern | Match? | Risk if Mismatched |
|---|---------|-----------------|---------------|--------|-------------------|
| 1 | **TEAM SIZE** | 11 agents across 4 waves | 8-16 agents succeeded; 19+ had coordination overhead; 58 worked with hierarchy | **MATCH** | N/A -- 11 is well within proven range |
| 2 | **AGENT ROLES: Clear Deliverable** | All 11 agents have explicit output files in task descriptions. "MUST write the file" emphasis in every TaskCreate. | Workers without file-writing emphasis = no output (confirmed Teams 1, 4, 8, 13). File-writing emphasis must be in ALL worker prompts. | **MATCH** | N/A -- design explicitly addresses this |
| 3 | **TOPOLOGY** | Flat with file-bus. Wave 1 agents write to permanent files. Wave 2 reads those files. Team lead monitors via TaskList. | Flat file-bus = proven (Middle, Remediation, Phase D). | **MATCH** | N/A |
| 4 | **COMMUNICATION** | File-bus primary. SendMessage ONLY for blocking issues. 4 specific SendMessage triggers listed. | Zero SendMessage = fast (35 min) but B+ quality. File-bus sufficient when agents have independent deliverables. | **MATCH** | Minimal -- agents writing independent files don't need messaging. SendMessage needed only for contention/ambiguity. |
| 5 | **PLAYWRIGHT** | No Playwright usage in this team. All agents are file writers/editors. | N/A -- no Playwright needed. | **MATCH** | N/A |
| 6 | **SCREENSHOT PRE-CAPTURE** | N/A -- no screenshots in this phase. Wave 4 validation-runner handles its own screenshots. | N/A for file-writing team. | **MATCH** | N/A |
| 7 | **OPUS FOR BUILDERS** | Opus for build-page-skill-writer (#4), cross-reference-verifier (#8), quality-auditor (#9), validation-runner (#11). Sonnet for transcription/edit tasks (#1, #2, #3, #5, #6, #7, #10). | Opus needed for creative composition. Sonnet cost-effective for structured tasks. | **MATCH** | See Finding S-01 below re: conventions-brief-writer |
| 8 | **FIX CYCLE** | Wave 3 fix-executor (Sonnet) applies targeted fixes from verification reports. Max 2 fix cycles. | Fix-executor applying explicit fix lists is proven (Remediation). | **MATCH** | N/A |
| 9 | **FILE CONTENTION** | pa-skill-editor (#6) and pa-questions-writer (#3) both edit the same file. Design resolves with Wave 1.5 sequencing. | Per-file ownership = zero contention (confirmed 6+ teams). | **MATCH** | N/A -- correctly identified and sequenced |

### Build-Page-Prompt Team: Additional Checks

| Check | Status | Evidence |
|-------|--------|----------|
| **Exact prompts for each agent?** | **YES** | Section 4 has full TaskCreate descriptions for all 11 agents with exact file paths, read orders, and acceptance criteria |
| **Model specified for each agent?** | **YES** | Section 9 has complete model selection table with rationale per agent |
| **Agent death/respawn handling?** | **PARTIAL** | Section 8 covers quality-auditor rewrite scenario. Section 6 covers fix cycles. No explicit respawn protocol for Wave 1 agent death. |
| **Task dependencies?** | **YES** | Section 7 has full dependency graph. Wave 1.5 blocked by #6. Wave 2 blocked by all Wave 1+1.5. Wave 3 conditional on Wave 2 findings. Wave 4 depends on Wave 3 or Wave 2. |

---

## PART B: /BUILD-PAGE RUNTIME TEAM (Future -- Building Actual Pages)

This is the team that gets spawned when a user runs `/build-page content.md`. Extracted from 16-team-architecture.md Sections 1-3 + 04-orchestrator-research.md full pipeline.

### Pattern Comparison Table

| # | Pattern | Team Design Says | Proven Pattern | Match? | Risk if Mismatched |
|---|---------|-----------------|---------------|--------|-------------------|
| 1 | **TEAM SIZE** | 11 agents min (1 builder + 9 PA + 1 weaver). 13 with 1 fix cycle. Max 17 with 3 fix cycles. | Mode 4 PA: 12 (1 lead + 1 contextualizer + 9 auditors + 1 weaver). Remediation: 16+. Middle: 8. | **MATCH** | 11-17 is within proven range. |
| 2 | **AGENT ROLES: Clear Deliverable** | Builder: output.html + _build-log.md + _cascade-value-table.md. PA Auditors: pa-auditor-X.md each. Weaver: _pa-report.md. | All agents must have file output. | **MATCH** | Builder has 3 output files (proven by Remediation). Auditors have 1 each (proven by Mode 4 PA). |
| 3 | **TOPOLOGY** | Fat Core: single builder, no separate planner. Orchestrator is thin routing. PA auditors all parallel, file-bus to weaver. | CD-006: single builder. Middle: lead built directly. Linear pipeline (Flagship) FAILED. Fat Core MATCHES success pattern. | **MATCH** | Fat Core eliminates the compression loss that caused Flagship failure. |
| 4 | **COMMUNICATION** | "No inter-agent communication during build" (Section 10, point 3). File-bus only between phases. SendMessage not used during build. | Zero SendMessage = fast but B+ quality. File-bus sufficient for independent phases. | **CONCERN** -- see Finding S-02 | The design explicitly rejects messaging during build, citing CD-006 and Middle as evidence. But MEMORY.md says "Agent communication is essential for quality" and "Missing footer = smoking gun (builder couldn't ask planner)." |
| 5 | **PLAYWRIGHT** | Sequential only. Orchestrator runs gates via Playwright (Step 2). Orchestrator captures screenshots (Step 3). PA auditors never touch Playwright. | Sequential = zero contention (confirmed 6+ teams). Pre-capture = zero contention for auditors (Mode 4 PA). | **EXACT MATCH** | This is the most validated operational detail across ALL teams. |
| 6 | **SCREENSHOT PRE-CAPTURE** | "Screenshots are taken by the team lead AFTER the build completes" (Section 10, point 4). 3 viewports (1440/1024/768). Auditors read saved images. | Mode 4 PA: 102 screenshots pre-captured, 9 auditors read files, zero contention. | **EXACT MATCH** | |
| 7 | **OPUS FOR BUILDER** | "ALWAYS Opus. No Sonnet for builders." (04-orchestrator-research.md, Section 1.1). PA Auditors: Opus. Weaver: Opus. | CD-006: Opus builder = 39/40. Flagship: Sonnet builders = 1.5/4. MEMORY.md: "Opus complies AND creates beyond constraints." | **EXACT MATCH** | Non-negotiable. Most empirically validated model selection. |
| 8 | **FIX CYCLE: Same Builder** | "Same Opus agent that built the page performs fixes" (04-orchestrator-research.md, Section 6.1). Max 3 cycles. | Remediation: same builder, +1.0 PA-05 improvement. MEMORY.md: "Compositional memory preserved." | **MATCH** | Proven in 1 deployment. 3-cycle limit is unproven but reasonable. |
| 9 | **PA DEPLOYMENT** | 9 Opus auditors + 1 weaver. Question assignments by domain (A-I). 56 questions (48 standard + 8 Tier 5). Fresh-eyes, zero build context. CSS vocabulary blocked. | Mode 4 PA: 9 Opus auditors + weaver, question assignments, 48 questions, fresh-eyes, CSS block = EXACT match. Remediation PA: same pattern. | **EXACT MATCH** | Most proven component of the entire architecture. |

---

## FINDINGS

### B-01 (BLOCKING): Conventions-Brief-Writer Model Should Be Opus, Not Sonnet

**What the design says:** conventions-brief-writer (#1) is Sonnet. Rationale: "Transcription + formatting from existing research. No creative composition needed."

**What proven patterns say:** The conventions brief is THE most critical file in the entire pipeline. It is what the Opus builder reads as its PRIMARY GUIDANCE. MEMORY.md identifies format as the #1 success/failure factor: "Recipe = DESIGNED; Checklist = FLAT."

**Why this is BLOCKING:**
- The brief is NOT simple transcription. It must SYNTHESIZE 6+ research inputs into a coherent recipe with sequenced steps, imperative verbs, and compositional intelligence transfer.
- 04-orchestrator-research.md explicitly states the brief must be "80% world description, 20% constraint" with a "tone spectrum" spanning 8 distinct tones across 10 sections.
- 15-orchestrator-cross-ref.md Warning 1: "If the 225-line brief reads as a checklist, it will produce 1.5/4. If it reads as a recipe with sequenced steps, it can produce 4/4. This is THE critical format question."
- Sonnet excels at structured transcription. Opus excels at creative synthesis. The brief requires creative synthesis.
- The design itself assigns Opus to the build-page-skill-writer (#4) with the rationale "Must synthesize 6+ research reports into a coherent recipe." The conventions-brief-writer has the SAME challenge (synthesize research into a recipe) but is assigned Sonnet.

**Recommendation:** Change conventions-brief-writer from Sonnet to **Opus**. This is the second-most important file (after the build-page skill itself) and the format quality directly determines whether the runtime builder produces 1.5/4 or 4/4.

**Cost impact:** +$3-5 for one Opus agent. Negligible compared to the risk of a Sonnet-written checklist causing every future `/build-page` run to produce flat output.

---

### S-01 (SIGNIFICANT): Runtime Team Missing Lock Sheet Generation

**What the design says:** Section 10 lists what the architecture does NOT include. Lock sheet is not mentioned. The PA auditors receive gate diagnostic summary as "ORIENTATION context, not instructions" (04-orchestrator-research.md, Section 4.3).

**What proven patterns say:** 15-orchestrator-cross-ref.md Amendment 1 (BLOCKING): "Add lock sheet generation step between gate runner and PA deployment. Orchestrator generates lock sheet from builder's _build-log.md." Mode 4 PA had a contextualizer agent that prepared the lock sheet. Remediation PA had lock sheet classifying findings as LOCKED/CHALLENGEABLE/CONVENTION.

**Why this is SIGNIFICANT:**
- Without a lock sheet, PA auditors may flag INTENTIONAL design choices as defects. Example: if the builder intentionally uses a restrained section (PA-64), auditors without lock sheet context may flag it as "empty/sparse."
- The lock sheet goes to the WEAVER only (not auditors) -- so it does not compromise fresh-eyes.
- Both successful Mode 4 PA deployments included this mechanism.

**Recommendation:** Add Step 3.5 to the runtime pipeline: generate lock sheet from _build-log.md. Builder's override log and metaphor commitment become LOCKED classifications. Feed to weaver only.

---

### S-02 (SIGNIFICANT): Communication Tension Between Build and Runtime Teams

**What the design says:** Section 10, point 3: "No inter-agent communication during build." Section 5: "SendMessage is ONLY for blocking issues" (4 specific triggers).

**What MEMORY.md says:** "Agent communication is essential for quality. Zero SendMessage = fast execution (35 min) but B+ quality. CD-006 WITH messaging = 39/40. Missing footer = smoking gun (builder couldn't ask planner)."

**Analysis:**
- For the BUILD-PAGE-PROMPT team (this session): Zero messaging is CORRECT. These are independent file writers with no shared creative decisions. File-bus is sufficient.
- For the RUNTIME team: The tension is real but the design resolves it correctly. Fat Core has a SINGLE builder with no one to message during the build (there is no separate planner). The "missing footer" failure came from a multi-agent pipeline where the builder needed to ask the planner. Fat Core eliminates this by making the builder IS the planner.
- The communication gap surfaces only between the builder and orchestrator. If the builder encounters ambiguity in the conventions brief, it has no one to ask. The design mitigates this with the creative authority clause ("you may override ANY non-soul value if you log the override").

**Recommendation:** The design is CORRECT for Fat Core architecture. However, add ONE communication channel: allow the builder to SendMessage the orchestrator if it encounters a contradiction between the conventions brief and reference files. Currently, the builder has no recourse except to log an override. Adding a single "AMBIGUITY" message type costs nothing and prevents silent misinterpretation.

---

### M-01 (MINOR): Wave 4 Validation Runner Conflates Two Distinct Operations

**What the design says:** validation-runner (#11) "Runs the actual /build-page skill against RESEARCH-SYNTHESIS.md content. Serves the page via HTTP, takes screenshots, does a lightweight PA (team lead + 2 quick auditors)."

**What proven patterns say:** Validation builds are the right idea, but the validation-runner is asked to:
1. Execute the /build-page pipeline (orchestrating builder + gates + PA)
2. Evaluate whether the pipeline mechanically works (gates run, screenshots capture, PA auditors produce output)

These are two different jobs. Job 1 requires spawning sub-agents (builder, PA auditors) which means the validation-runner becomes a mini team-lead. This is a captain->worker hierarchy within a worker -- the pattern agent-team-lessons.md identifies as risky ("Recovery agents doing work directly are MORE reliable than captain->worker hierarchies").

**Recommendation:** Either:
- (A) The TEAM LEAD runs the validation directly (reading the skill and executing steps), OR
- (B) The validation-runner spawns sub-agents but is explicitly designated as a secondary team-lead with full orchestration authority

Option (A) is simpler and matches proven patterns (Middle experiment: lead built directly).

---

## DETAILED PATTERN MATRIX: BUILD-PAGE-PROMPT TEAM

| Pattern | Team Design Says | Proven Pattern | Match? | Risk if Mismatched |
|---------|-----------------|---------------|--------|-------------------|
| Team size: 11 agents | 11 roles, 11 spawns + conditional respawns | 8-16 proven range | MATCH | None |
| All agents have named output files | YES -- each TaskCreate specifies exact output path | File-writing emphasis in ALL prompts = success | MATCH | None |
| "MUST write the file" in prompts | YES -- every TaskCreate includes this | Workers without emphasis = 80% file-write failure | MATCH | None |
| Flat topology | YES -- all agents report to team lead | Flat file-bus proven (6+ teams) | MATCH | None |
| Per-file ownership | YES -- each agent owns distinct files | Per-file = zero contention (6+ teams) | MATCH | None |
| File contention detected | YES -- #3 and #6 both edit PA skill | Per-file ownership violated | RESOLVED via Wave 1.5 sequencing | None |
| Wave structure | 4 waves with explicit dependencies | Wave execution proven (Middle, Phase D, Remediation) | MATCH | None |
| Sonnet for transcription | 7 Sonnet agents for structured tasks | Sonnet cost-effective for structured tasks | MATCH except B-01 | See B-01 re: conventions brief |
| Opus for creative tasks | 4 Opus agents for synthesis/judgment | Opus needed for creative composition | MATCH | None |
| Fix cycle protocol | Wave 3 fix-executor, max 2 cycles, escalate | Fix-executor with explicit fix list proven (Remediation) | MATCH | None |
| Agent death handling | Quality-auditor rewrite scenario covered | Respawn protocol needed for all critical agents | PARTIAL | Low risk -- Wave 2 catches Wave 1 failures |

## DETAILED PATTERN MATRIX: /BUILD-PAGE RUNTIME TEAM

| Pattern | Team Design Says | Proven Pattern | Match? | Risk if Mismatched |
|---------|-----------------|---------------|--------|-------------------|
| Single Opus builder | YES -- Fat Core, always Opus | CD-006 (Opus) = 39/40; Flagship (Sonnet) = 1.5/4 | EXACT MATCH | None |
| Builder reads mechanism-catalog.md | YES -- in 6-file manifest | Inverted quality routing (catalog to planner not builder) was #1 Flagship failure cause. Routing to builder FIXES this. | EXACT MATCH (fix applied) | None |
| Recipe format conventions brief | YES -- "Recipe, NOT checklist" in TaskCreate | Recipe = DESIGNED; Checklist = FLAT | MATCH (format intent correct) | B-01: model selection may undermine intent |
| Creative authority clause | YES -- Section 7 of conventions brief | "Without this clause: recipe ceiling = 3/4" | MATCH | None |
| 4 builder self-checkpoints | YES -- after HTML, after zones, after borders, after typography | Binary self-checks at phase boundaries proven (Remediation) | MATCH | None |
| 21 programmatic gates | YES -- Flagship thresholds | Middle: ~16 gates. All 21 address documented failures. | MATCH (justified extension) | None |
| Gate failures produce CSS recipes | YES -- JSON with measured values + specific CSS fix | Remediation: structured fix spec produced +1.0 improvement | MATCH | None |
| Sequential Playwright | YES -- orchestrator only, never PA auditors | Sequential = zero contention (6+ teams) | EXACT MATCH | None |
| Screenshot pre-capture | YES -- 3 viewports, lead captures before spawning auditors | Mode 4 PA: 102 screenshots, 9 parallel auditors, zero contention | EXACT MATCH | None |
| 3 viewports (1440/1024/768) | YES | Mode 4 PA: same 3 viewports | EXACT MATCH | None |
| document.fonts.ready | Referenced in 04-orchestrator-research.md | CRITICAL before measuring computed styles | MATCH | None |
| Disable animations | Referenced in 04-orchestrator-research.md | animation: none !important; opacity: 1 !important | MATCH | None |
| 9 PA auditors + 1 weaver | YES -- question assignments by domain (A-I) | Mode 4 PA + Remediation: exact same structure | EXACT MATCH | None |
| Fresh-eyes principle | YES -- "zero build context" for auditors | Fresh-eyes find what research-loaded agents miss | EXACT MATCH | None |
| CSS vocabulary block | YES -- "describe in perceptual language, not CSS terms" | Proven in Mode 4 PA | EXACT MATCH | None |
| 56 questions (48+8 Tier 5) | YES -- Tier 5 only if PA-05 >= 3/4 | 48 standard proven; 8 Tier 5 are NEW (untested) | MATCH with caveat | Tier 5 threshold unproven but has fallback (SHIP WITH RESERVATION) |
| Same builder for fix cycle | YES -- compositional memory preserved | Remediation: +1.0 with same builder | MATCH | None |
| Max 3 fix cycles then escalate | YES | Unproven (1 cycle proven). Escalation clause correct. | REASONABLE | Low risk |
| Structured fix feedback | YES -- gate JSON + PA direction (not prescription) | "Gate failures get CSS recipes. PA issues get directional guidance." Proven in Remediation. | MATCH | None |
| Lock sheet for weaver | NOT INCLUDED | Mode 4 PA + Remediation: both had lock sheets | **MISSING** -- see S-01 | Auditors may flag intentional choices as defects |
| Success bar: PA-05 >= 3.5 + Tier 5 >= 6/8 | YES | CD-006 ~3.5. Middle 4/4. Tier 5 is NEW. | CALIBRATED | Tier 5 untested but fallback exists |

---

## SUMMARY OF CROSS-REFERENCE FINDINGS

### Findings by Severity

| ID | Severity | Finding | Action Required |
|----|----------|---------|-----------------|
| **B-01** | **BLOCKING** | conventions-brief-writer should be Opus, not Sonnet. The brief is the #1 format-sensitive file; Sonnet produces checklists, not recipes. | Change model from Sonnet to Opus for agent #1 |
| **S-01** | SIGNIFICANT | Runtime team missing lock sheet generation step between gates and PA. Both proven PA deployments included this. | Add Step 3.5 to runtime pipeline in build-page SKILL.md |
| **S-02** | SIGNIFICANT | No builder->orchestrator communication channel for ambiguity resolution. Fat Core eliminates planner but builder may still encounter contradictions. | Add single AMBIGUITY message type for builder |
| **M-01** | MINOR | Wave 4 validation-runner conflates pipeline execution with pipeline evaluation. Captain->worker within worker is risky pattern. | Consider team lead running validation directly |

### Pattern Match Summary

- **EXACT MATCH (highest confidence):** 13 patterns
  - Opus builder, screenshot pre-capture, 3 viewports, 9 PA auditors + weaver, question assignments, fresh-eyes, CSS vocabulary block, sequential Playwright, file-bus topology, per-file ownership, same-builder fix cycle, document.fonts.ready, disable animations

- **MATCH (good confidence):** 8 patterns
  - Team size (11), all agents have deliverables, wave structure, gate count (21), creative authority, builder self-checks, structured fix feedback, success bar

- **PARTIAL/MISSING:** 3 patterns
  - Lock sheet (missing -- S-01), agent death protocol (partial), communication during build (tension resolved by Fat Core but missing ambiguity channel -- S-02)

- **MISMATCH:** 1 pattern
  - Conventions-brief-writer model (B-01)

### Overall Confidence Assessment

The team architecture is **well-designed and closely aligned with proven patterns**. Of 25 patterns checked:
- 84% (21/25) are EXACT MATCH or MATCH
- 12% (3/25) are PARTIAL (fixable with minor additions)
- 4% (1/25) is a MISMATCH requiring model change

The single BLOCKING finding (B-01) is a model selection issue that costs ~$3-5 to fix. The two SIGNIFICANT findings (S-01, S-02) require additions to the runtime pipeline spec but do not affect the build-page-prompt team structure.

**Verdict: APPROVED WITH 1 BLOCKING FIX + 2 SIGNIFICANT AMENDMENTS**

---

**END OF CROSS-REFERENCE VERIFICATION**

**Document statistics:**
- Patterns verified: 25 (11 build-team + 14 runtime-team)
- Reference architectures compared: 4 (CD-006, Middle, Remediation, Mode 4 PA)
- Findings: 4 (1 BLOCKING, 2 SIGNIFICANT, 1 MINOR)
- Exact matches: 13/25
- Total matches (including good confidence): 21/25
- Lines: ~280

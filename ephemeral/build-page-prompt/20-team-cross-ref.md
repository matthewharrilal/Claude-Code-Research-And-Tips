# 20 -- TEAM ARCHITECTURE CROSS-REFERENCE: Design vs. Proven Team Patterns

**Agent:** metacog-analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** #47 — Cross-reference master prompt team design against every team that worked (and failed) in this project
**Inputs:** 16-team-architecture.md (562 lines), 04-orchestrator-research.md (831 lines), 07-INPUT-SPEC.md (689 lines), 08-VERIFICATION-SPEC.md (620 lines), MEMORY.md (agent team management patterns, phase history)

---

## REFERENCE TEAMS (What Actually Worked)

| Team | Result | Agents | Topology | Communication | Key Lessons |
|------|--------|--------|----------|---------------|-------------|
| **CD-006 Build** | 39/40, ~PA-05 3.5 (CEILING, not Flagship) | 1 | Single node | N/A | Opus + rich reference = highest quality. No pipeline overhead. |
| **Middle Experiment** | PA-05 4/4 DESIGNED | 8 | Flat file-bus | Zero SendMessage | 100-line recipe, Opus planner + builder, ~35 min. File-bus communication worked. |
| **Remediation Execution** | PA-05 2.5/4 (+1.0) | 16+ | Hub-spoke | File + messaging | 4 Wave 1 prep + 1 Opus builder + 3 verifiers + 9 PA auditors + 1 weaver. Same builder for fix cycle. |
| **Mode 4 PA** | 48 Qs answered, 9/9 convergent | 12 | Fan-out (lead -> 9 auditors -> weaver) | File only (screenshots) | Screenshot pre-capture (102 images), zero Playwright contention, fresh-eyes. |

## REFERENCE TEAMS (What Failed)

| Team | Result | Agents | Topology | Key Failure |
|------|--------|--------|----------|-------------|
| **Flagship Experiment** | PA-05 1.5/4 | 19 | Multi-layer | Inverted quality routing (catalog to planner not builder), 530-line prompt compressed to 75 lines for builder, checklist format, zero inter-agent messaging |
| **Ceiling Experiment** | PA-05 1.5/4 (downgraded from 3/4) | 12 | Multi-layer | Metaphor announced not structural, 70-80% whitespace void, zero inter-agent messaging |

---

## CROSS-REFERENCE: AGENT COUNT

| Team | Agents | Outcome |
|------|--------|---------|
| CD-006 | 1 | 39/40 |
| Middle | 8 | 4/4 |
| Mode 4 PA | 12 | Successful audit |
| Remediation | 16+ | 2.5/4 |
| Flagship | 19 | 1.5/4 |
| **Team architecture** | **11** | **UNTESTED** |

**Assessment:** 11 agents sits between Middle (8) and Mode 4 PA (12), both successful. The inverse correlation between agent count and page quality is likely confounded (content complexity varied), but the team architecture avoids the 16-19 range associated with failures.

**Verdict: MATCH.** Agent count is reasonable. Not bloated like Flagship (19), not minimal like CD-006 (1). The 11 agents have distinct, non-overlapping roles.

---

## CROSS-REFERENCE: MODEL SELECTION

### Team Architecture's Selection

| Agent | Model | Role Type |
|-------|-------|-----------|
| conventions-brief-writer | Sonnet | Transcription |
| gate-runner-writer | Sonnet | Code generation |
| pa-questions-writer | Sonnet | Transcription |
| **build-page-skill-writer** | **Opus** | **Creative synthesis** |
| tc-skill-editor | Sonnet | Deletion/editing |
| pa-skill-editor | Sonnet | Deletion/editing |
| claude-md-editor | Sonnet | Pre-specified edits |
| **cross-reference-verifier** | **Opus** | **Multi-file reasoning** |
| **quality-auditor** | **Opus** | **Abstract evaluation** |
| fix-executor | Sonnet | Targeted edits |
| **validation-runner** | **Opus** | **Pipeline orchestration** |

### Cross-Reference Against Proven Patterns

**MEMORY.md lesson:** "Sonnet model agents cost-effective for all roles; Opus only needed for creative composition (Track 2)"

| Pattern | Proven In | Team Architecture | Match? |
|---------|-----------|-------------------|--------|
| Opus for creative/compositional work | CD-006 (Opus builder), Middle (Opus planner + builder) | Opus for build-page-skill-writer | **MATCH** |
| Sonnet for transcription/editing | Remediation (Sonnet lock-sheet), multiple teams | Sonnet for 7 of 11 roles | **MATCH** |
| Opus for verification/auditing | Mode 4 PA (9 Opus auditors), Remediation (Opus verifiers) | Opus for cross-ref-verifier + quality-auditor | **MATCH** |
| Opus for orchestration | Mode 4 PA (Opus weaver), Remediation (Opus lead) | Opus for validation-runner | **MATCH** |

**Verdict: FULL MATCH.** The 4 Opus / 7 Sonnet split correctly reserves Opus for creative synthesis, multi-file reasoning, abstract evaluation, and pipeline orchestration. Sonnet handles transcription, code generation, and targeted editing. This exactly matches the proven pattern.

**One concern:** The conventions-brief-writer is Sonnet, but this file is THE most important input the Opus builder receives. If the brief drifts to checklist format, it reproduces the Flagship failure. The quality-auditor (Opus) catches this in Wave 2, but the damage is done — a Wave 3 rewrite costs time.

**Recommendation:** Consider Opus for conventions-brief-writer. This is the ONE file where recipe vs checklist distinction matters most. The cost difference is ~$3-5. The risk mitigation is worth it. However, the current design's Wave 2 quality audit provides a safety net — this is a "nice to have," not a "must fix."

---

## CROSS-REFERENCE: COMMUNICATION PROTOCOL

### Team Architecture's Protocol

- **Primary:** File-bus (agents write to files, downstream agents read files)
- **Secondary:** SendMessage ONLY for blocking issues (4 specific cases)
- **Team lead monitoring:** TaskList + glob checks

### Cross-Reference Against Proven Patterns

| Pattern | Proven In | Team Architecture | Match? |
|---------|-----------|-------------------|--------|
| File-bus as primary communication | Middle (zero SendMessage, file-bus only, PA-05 4/4) | File-bus is primary | **MATCH** |
| SendMessage for blocking issues only | MEMORY.md: "TOPOLOGY (flat) is fine; COMMUNICATION PROTOCOL (file-only) must change" | SendMessage reserved for 4 blocking cases | **PARTIAL MATCH** — see analysis |
| No inter-agent messaging during build | CD-006 (single agent), Middle (zero messaging) | No messaging during build | **MATCH for BUILD phase** |

**Analysis of the PARTIAL MATCH:**

MEMORY.md has two seemingly contradictory entries:
1. "Zero SendMessage = fast execution (35 min) but B+ quality" (Middle experiment)
2. "Agent communication is essential for quality. Zero SendMessage = quality cost." (Retro-Analysis finding)
3. "CD-006 WITH messaging = 39/40. Missing footer = smoking gun (builder couldn't ask planner)." (But CD-006 was a SINGLE agent — no messaging needed because no handoffs)

The team architecture resolves this correctly: the BUILD phase has no inter-agent messaging (single Opus builder, matching CD-006), while the VERIFICATION phase uses file-bus (matching Mode 4 PA). The only messaging is for blocking issues during the PIPELINE CONSTRUCTION phase (Wave 1-3), not during page building.

**Verdict: MATCH.** The communication protocol correctly distinguishes between pipeline construction (Wave 1-3, where file-bus + blocking-only SendMessage is appropriate) and page building (Wave 4/validation, where single-agent-with-reference-files is the proven pattern).

**One nuance:** The "missing footer" finding from the Retro-Analysis was about a builder being unable to ask a planner for clarification. Fat Core eliminates this problem structurally (no planner to ask — builder has all reference material). The team architecture preserves this structural advantage.

---

## CROSS-REFERENCE: TASK GRANULARITY

### Team Architecture's Task Structure

- Wave 1: 6 agents, each producing ONE file. Clear per-file ownership.
- Wave 1.5: 1 agent, appending to one file.
- Wave 2: 2 agents, each producing ONE verification report.
- Wave 3: 1 agent, applying fixes across files.
- Wave 4: 1 agent, running validation pipeline.

### Cross-Reference Against Proven Patterns

| Pattern | Proven In | Team Architecture | Match? |
|---------|-----------|-------------------|--------|
| Per-file builder ownership = zero contention | MEMORY.md: "confirmed 6+ teams" | Wave 1: each agent owns exactly one file | **FULL MATCH** |
| File-writing emphasis in ALL worker prompts | MEMORY.md: "workers frequently complete WITHOUT writing files" | Every task description ends with "MUST write the file" | **FULL MATCH** |
| One fix agent to avoid contention | Remediation (single builder for fixes) | Wave 3: single fix-executor | **FULL MATCH** |
| Recovery agents > captain->worker hierarchies | MEMORY.md lesson | Wave 3 fix-executor works directly, no sub-delegation | **MATCH** |

**Verdict: FULL MATCH.** Task granularity is excellent. Each Wave 1 agent has one file, one purpose, clear instructions, and an explicit "MUST write the file" mandate. The file contention between pa-skill-editor and pa-questions-writer is explicitly resolved via Wave 1.5 sequencing.

---

## CROSS-REFERENCE: WAVE STRUCTURE

### Team Architecture's Waves

```
Wave 1: 6 parallel agents (no dependencies)
Wave 1.5: 1 sequential agent (depends on #6)
Wave 2: 2 parallel agents (depends on all Wave 1/1.5)
Wave 3: 1 sequential agent (depends on Wave 2, conditional)
Wave 4: 1 sequential agent (depends on Wave 3 or Wave 2)
```

### Cross-Reference Against Proven Patterns

| Pattern | Proven In | Team Architecture | Match? |
|---------|-----------|-------------------|--------|
| Parallel agents for independent work | Multiple teams (Enrichment 6 parallel, PA 9 parallel) | Wave 1: 6 parallel, Wave 2: 2 parallel | **MATCH** |
| Sequential for dependencies | Wave 1.5 sequencing, Mode 4 PA (screenshots before auditors) | Wave 1.5 (after #6), Wave 3 (after Wave 2), Wave 4 (after Wave 3) | **MATCH** |
| Verification AFTER production | Remediation (builders then verifiers), Mode 4 PA (build then audit) | Wave 2 verification after Wave 1 production | **MATCH** |
| Fix cycle after verification | Remediation (PA -> fix -> re-PA) | Wave 3 fixes after Wave 2 verification | **MATCH** |
| Validation as final step | Multiple teams (fresh-eyes agent as final check) | Wave 4 validation build | **MATCH** |

**Verdict: FULL MATCH.** The 4-wave structure replicates the proven production -> verification -> fix -> validation sequence. The conditional Wave 3 is particularly well-designed: it only runs if verification finds BLOCKING issues, avoiding unnecessary fix cycles.

---

## CROSS-REFERENCE: FILE OWNERSHIP AND CONTENTION

### Potential Contention Points

| File | Agents That Touch It | Waves | Contention Risk |
|------|---------------------|-------|-----------------|
| `~/.claude/skills/perceptual-auditing/SKILL.md` | pa-skill-editor (#6) + pa-questions-writer (#3) | Wave 1 then Wave 1.5 | **IDENTIFIED AND MITIGATED** — Wave 1.5 sequencing |
| `design-system/CLAUDE.md` | claude-md-editor (#7) | Wave 1 only | **NONE** — single owner |
| `design-system/compositional-core/CLAUDE.md` | claude-md-editor (#7) | Wave 1 only | **NONE** — single owner (same agent owns both CLAUDE.md files) |
| All other files | Single owner each | Wave 1 only | **NONE** |

**Cross-Reference:** MEMORY.md: "Per-file builder ownership = zero contention (confirmed 6+ teams)"

**Verdict: FULL MATCH.** The only contention point (PA skill file) is explicitly mitigated. All other files have single owners. The claude-md-editor owns both CLAUDE.md files, which is fine since they're edited by the same agent sequentially.

---

## CROSS-REFERENCE: PLAYWRIGHT SCHEDULING

### Team Architecture's Playwright Usage

- **Wave 1-3:** Zero Playwright (all file writing/editing)
- **Wave 4 validation:** Single agent uses Playwright (serve HTML, run gates, take screenshots)
- **PA auditors in Wave 4:** Read saved screenshots via Read tool, zero Playwright

### Cross-Reference Against Proven Patterns

| Pattern | Proven In | Team Architecture | Match? |
|---------|-----------|-------------------|--------|
| Sequential Playwright (2 concurrent safe, 4+ contention) | Mode 4 PA, MEMORY.md | Single agent uses Playwright in Wave 4 | **MATCH** — 0-1 concurrent |
| Screenshot pre-capture before spawning auditors | Mode 4 PA (102 screenshots), Remediation (36) | Validation runner captures screenshots before PA | **MATCH** |
| Auditors read saved images via Read tool | Mode 4 PA, Remediation | PA auditors in validation use Read tool | **MATCH** |
| `document.fonts.ready` before screenshot | MEMORY.md: "CRITICAL before checking computed font" | Not explicitly stated in team architecture | **GAP** — should be specified in validation-runner task description |

**Verdict: STRONG MATCH with one gap.** The `document.fonts.ready` wait is missing from the Wave 4 validation-runner task description. This should be added. However, the build-page SKILL.md (written by build-page-skill-writer in Wave 1) should contain this instruction, and the validation-runner executes the skill — so the gap may be covered indirectly.

**Recommendation:** Add `document.fonts.ready` explicitly to the validation-runner task description as a belt-and-suspenders measure.

---

## CROSS-REFERENCE: FIX CYCLE MANAGEMENT

### Team Architecture's Fix Cycles

- **Pipeline fixes (Wave 3):** Single fix-executor, max 2 cycles, team lead re-runs verification
- **Page quality fixes (Wave 4):** Same builder, max 3 PA cycles (per build-page SKILL.md design)

### Cross-Reference Against Proven Patterns

| Pattern | Proven In | Team Architecture | Match? |
|---------|-----------|-------------------|--------|
| Same builder for fix cycles (preserves compositional memory) | Remediation (PA-05 1.5 -> 2.5 with same builder) | Same builder for page quality fixes (Wave 4) | **MATCH** |
| Max cycle limit | Not explicitly limited in proven teams | Max 2 pipeline fix cycles, max 3 PA fix cycles | **REASONABLE ADDITION** |
| Single fix agent for pipeline fixes | Remediation (single builder), MEMORY.md lesson | Wave 3: single fix-executor | **MATCH** |
| Fix priority ordering | Remediation (BLOCKING -> SIGNIFICANT -> MINOR) | Specified: file paths -> thresholds -> IDs -> navigation | **MATCH** |

**Verdict: FULL MATCH.** Fix cycle management replicates the Remediation pattern (same builder, structured feedback, priority ordering) and adds reasonable cycle limits.

---

## CROSS-REFERENCE: AGAINST FAILURE PATTERNS

### Flagship Experiment Failure Modes (Must NOT Reproduce)

| Failure Mode | Flagship | Team Architecture | Reproduced? |
|-------------|----------|-------------------|-------------|
| Inverted quality routing (catalog to planner, not builder) | Mechanism catalog sent to TC planner, builder got zero catalog access | Fat Core: builder reads mechanism-catalog.md directly (no planner exists) | **NOT REPRODUCED** — structural elimination |
| Checklist format (constraint verbs, unordered rules) | 71-line checklist with "Verify/Fail if/Must be" | Recipe format mandated for conventions-brief; quality-auditor checks in Wave 2 | **MITIGATED** — not structurally prevented, but detected |
| 530-line prompt compressed to 75 lines for builder | Multi-boundary compression (50:1) | Single-boundary: builder reads ~315 effective lines directly | **NOT REPRODUCED** — structural elimination |
| Zero inter-agent messaging during build | 19 agents, zero SendMessage | Single builder (no agents to message), messaging reserved for blocking issues | **NOT REPRODUCED** — different context (Fat Core has no handoffs during build) |
| Sonnet as builder | Sonnet builders in Flagship | Opus for build-page-skill-writer and validation-runner (who orchestrates the Opus builder) | **NOT REPRODUCED** |
| Sub-perceptual CSS (letter-spacing 0.001-0.01em, 1-8 RGB backgrounds) | 22% of CSS budget spent on imperceptible values | Perception thresholds in conventions-brief (>=15 RGB, >=0.5px, >=24px) + gate runner verifies programmatically | **MITIGATED** — thresholds specified as hard numbers |
| Whitespace voids (210-276px stacked gaps) | S-09 stacking loophole (individual values pass, total fails) | S-09 stacking in gate runner (total gap <=96px) | **MITIGATED** — gate catches this programmatically |

**Verdict: NO FLAGSHIP FAILURE MODES REPRODUCED.** 4 are structurally eliminated by Fat Core architecture; 3 are mitigated by explicit specifications and verification.

### Ceiling Experiment Failure Modes

| Failure Mode | Ceiling Exp | Team Architecture | Reproduced? |
|-------------|-------------|-------------------|-------------|
| Metaphor announced not structural | 40% required labels to understand | Tier 5 question PA-63 (fractal) and PA-67 (novelty) assess this; success bar requires metaphor STRUCTURAL | **MITIGATED** — but see note below |
| 70-80% whitespace void | Catastrophic blank space | S-09 stacking gate + spacing maxima in conventions-brief | **MITIGATED** |
| Zero inter-agent messaging | Build agents didn't communicate | Fat Core: single builder (no agents to communicate with during build) | **STRUCTURALLY DIFFERENT** — single agent doesn't need messaging |
| Container width violation | Likely 960px not 2160px (contradicted) | Container gate: 940-960px (Tier A composition-critical) | **MITIGATED** |

**Note on metaphor STRUCTURAL:** My previous report (19-orchestrator-cross-ref.md) flagged the metaphor STRUCTURAL binary gate as HIGH risk because the best build to date was downgraded from structural to announced. The team architecture includes this in the success bar but doesn't have a separate mitigation strategy. This remains the highest-risk quality criterion.

---

## CROSS-REFERENCE: TIMING

### Team Architecture's Estimate

- Wave 1: 20-30 min (6 parallel agents)
- Wave 1.5: 10-15 min (1 sequential agent)
- Wave 2: 15-20 min (2 parallel agents)
- Wave 3: 10-20 min (1 agent, conditional)
- Wave 4: 30-45 min (1 agent, full pipeline run)
- **Total: 75-130 min (without validation) or 105-175 min (with validation)**

### Cross-Reference Against Proven Timings

| Team | Agents | Time | Time/Agent |
|------|--------|------|------------|
| Middle | 8 | ~35 min | ~4.4 min |
| Remediation | 16+ | ~120 min | ~7.5 min |
| Mode 4 PA | 12 | ~90 min | ~7.5 min |
| **Team architecture** | **11** | **105-175 min** | **9.5-15.9 min** |

**Assessment:** The per-agent time is slightly higher than proven teams, which is reasonable — Wave 4 (validation build) includes a full /build-page execution which is itself a multi-step process. Without Wave 4, the estimate (75-130 min for 10 agents = 7.5-13 min/agent) is in line with Remediation and Mode 4 PA.

**Verdict: REASONABLE.** Timing estimates are realistic based on proven team performance.

---

## CROSS-REFERENCE: COST

### Team Architecture's Estimate

- 4 Opus agents: ~$20-30
- 7 Sonnet agents: ~$3-5
- **Total: ~$23-35**

### Cross-Reference

| Team | Estimated Cost | Outcome |
|------|---------------|---------|
| Middle | ~$10-15 | PA-05 4/4 |
| Remediation | ~$30-50 | PA-05 2.5/4 |
| Mode 4 PA | ~$25-35 | Successful audit |
| **Team architecture** | **~$23-35** | **UNTESTED** |

**Verdict: REASONABLE.** Cost is in line with proven teams. The Wave 4 validation will add ~$15-25 more (Opus builder + lightweight PA), bringing total to ~$38-60 — comparable to Remediation.

---

## OVERALL VERDICT

### Pattern Match Summary

| Pattern Category | Match? | Details |
|-----------------|--------|---------|
| Agent count | MATCH | 11 agents, reasonable for scope |
| Model selection | FULL MATCH | Opus for creative/verification, Sonnet for transcription/editing |
| Communication protocol | MATCH | File-bus primary, SendMessage for blocking only |
| Task granularity | FULL MATCH | Per-file ownership, "MUST write file" mandate |
| Wave structure | FULL MATCH | Production -> verification -> fix -> validation |
| File ownership/contention | FULL MATCH | Single owner per file, PA skill contention mitigated |
| Playwright scheduling | STRONG MATCH | Zero concurrent, screenshot pre-capture, one gap (fonts.ready) |
| Fix cycle management | FULL MATCH | Same builder, priority ordering, cycle limits |
| Flagship failure avoidance | NOT REPRODUCED | 4 structurally eliminated, 3 mitigated |
| Ceiling failure avoidance | MITIGATED | Gates + PA + conventions brief |
| Timing | REASONABLE | 105-175 min, consistent with proven teams |
| Cost | REASONABLE | $23-35 base, $38-60 with validation |

### Score: 11/12 categories MATCH or STRONG MATCH. 1 gap (document.fonts.ready in validation task).

---

## GAPS AND RECOMMENDATIONS

### Gap 1: `document.fonts.ready` Missing from Validation Task
**Severity:** MINOR (likely covered by build-page SKILL.md instructions)
**Fix:** Add to validation-runner task description: "Wait for `document.fonts.ready` before taking screenshots."

### Gap 2: Conventions Brief Format Risk
**Severity:** SIGNIFICANT (mitigated by Wave 2 quality audit)
**Current mitigation:** Quality-auditor checks recipe vs checklist in Wave 2
**Enhancement:** Consider Opus for conventions-brief-writer, or add a mini-check: after Wave 1, team lead quickly reads first 10 lines of conventions-brief.md to verify imperative verbs are present before proceeding to Wave 1.5.

### Gap 3: Metaphor STRUCTURAL Gate Achievability
**Severity:** SIGNIFICANT (highest-risk quality criterion, N=0 as formal gate)
**Current status:** In success bar but no mitigation strategy
**Recommendation:** As noted in 19-orchestrator-cross-ref.md, soften from binary gate to scoring dimension within PA-05. Or add to conventions-brief: specific metaphor deployment instructions (how to make metaphor structural without labels).

### Gap 4: No Rollback Strategy
**Severity:** MINOR
**Current status:** Max cycle limits prevent infinite loops, but no strategy for "what if Wave 1 agent produces an empty/corrupt file?"
**Recommendation:** Team lead glob-checks file existence AND minimum line count before proceeding to next wave. Add to monitoring protocol: "If any Wave 1 output is <50 lines, re-spawn that agent."

### Gap 5: Wave 4 Validation Scope Ambiguity
**Severity:** MINOR
**Current status:** Validation-runner runs "lightweight PA (3 auditors, not 9)" — but the build-page SKILL.md specifies 9 auditors. The validation-runner must decide: follow the skill exactly (costly) or abbreviate (faster but doesn't test the full pipeline).
**Recommendation:** Clarify in task description: "Run the FULL pipeline as specified in build-page SKILL.md, including 9 auditors. This is a validation of the PIPELINE, not a cost-saving exercise."

---

## FINAL ASSESSMENT

The team architecture is a faithful, well-reasoned application of proven patterns from this project's history. It correctly:

1. **Replicates** the CD-006 pattern (single Opus + rich reference) for the page builder
2. **Replicates** the Mode 4 PA pattern (screenshot pre-capture + 9 parallel Opus auditors + weaver) for verification
3. **Replicates** the Remediation pattern (same builder for fix cycles) for quality improvement
4. **Avoids** all 7 Flagship failure modes (4 structurally, 3 via specification)
5. **Applies** per-file ownership, file-bus communication, and wave-based sequencing — all confirmed across 6+ prior teams

The 5 gaps identified are minor to significant, not blocking. The architecture is **READY FOR EXECUTION** with the recommended enhancements.

**Confidence that this team design will successfully produce the /build-page pipeline files:** 80-85% (high confidence in file production; lower confidence that the resulting pipeline produces Flagship 4/4 pages, which is a separate question with 30-45% probability).

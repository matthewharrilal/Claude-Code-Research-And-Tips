# 07 — PV2 Architecture Alignment Audit

**Author:** Cross-Reference Auditor (Agent 07)
**Date:** 2026-02-20
**Task:** Compare current pipeline implementation against Pipeline v2 (PV2) architecture design and File 42 (operational recipe)
**Verdict:** SIGNIFICANT DIVERGENCE — 4 of 10 PV2 files created, 0 of 6 edits applied, architectural philosophy shifted from recipe to world-model

---

## Section 1: PV2 Architecture Alignment

### Summary

PV2 designed a 3-component architecture: thin orchestrator (~350 lines) + operational recipe (~650 lines) + 8 surgical edits to existing files. The current implementation took a DIFFERENT architectural path: a larger orchestrator (~470 lines) + a conventions brief (~547 lines, world-model format) + inline gates. The core separation of concerns (route/think/build/verify/check) is preserved, but the BUILD component's guidance philosophy diverged fundamentally.

### File-by-File Alignment Table

| PV2 Designed File | Status | Current Equivalent | Gap |
|---|---|---|---|
| `build-page/SKILL.md` (~350 lines) | CREATED but DIVERGED | `~/.claude/skills/build-page/SKILL.md` (~470 lines) | +120 lines over target. No tier routing. Builder reads conventions-brief instead of operational-recipe. 16 gates vs 12 designed. |
| `operational-recipe.md` (~650 lines) | NOT CREATED | `design-system/pipeline/conventions-brief.md` (~547 lines) serves a DIFFERENT purpose | conventions-brief is a world model ("learn the scales, improvise"). PV2 designed a sequential 9-phase recipe ("write this CSS block in this order"). Fundamentally different builder guidance philosophy. |
| `perception-thresholds.md` (~80 lines) | NOT CREATED | Thresholds scattered across conventions-brief.md (Section 2, lines ~35-65) and SKILL.md gate definitions | No single-source-of-truth file. Values are embedded in 2+ locations with no canonical reference. PV2 designed this as the FIRST priority (Priority 1). |
| `gate-runner.js` (~250 lines) | NOT CREATED | Gates are inline in SKILL.md (Step 4, lines ~200-350) | PV2 designed standalone JS for portability and testing. Current gates are embedded in orchestrator prompt text, not executable code. |
| TC `SKILL.md` edits (+72 lines) | NOT APPLIED | `~/.claude/skills/tension-composition/SKILL.md` (1,878 lines) | Missing: recipe-framing header, tier-routing awareness, output contract for builder handoff. TC still outputs full compositional analysis without builder-specific formatting. |
| PA `SKILL.md` edits (+56 lines) | NOT APPLIED | `~/.claude/skills/perceptual-auditing/SKILL.md` (774 lines) | Missing: embedded perception thresholds, programmatic pre-screen step, tier-adjusted question routing. |
| `compositional-core/CLAUDE.md` edits (+89 lines) | NOT APPLIED | `design-system/compositional-core/CLAUDE.md` | Missing: PV2 routing table, tier definitions, operational-recipe pointer. |
| `design-system/CLAUDE.md` edits (+27 lines) | NOT APPLIED | `design-system/CLAUDE.md` | Missing: PV2 section in navigation, operational-recipe in file inventory. |
| `tokens.css` edits (+6 lines) | NOT APPLIED | `design-system/compositional-core/vocabulary/tokens.css` | Missing: `--space-max-stacked: 192px` token. S-09 stacking enforcement has no token backing. |
| `semantic-rules.md` edits (+25 lines) | NOT APPLIED | `design-system/compositional-core/guidelines/semantic-rules.md` | Missing: expanded S-09 stacking rule measuring TOTAL gap at boundaries, not per-property. |

### Alignment Score: 2/10

- 1 file CREATED and partially aligned (SKILL.md orchestrator)
- 1 file serves as an ALTERNATIVE to a PV2 file (conventions-brief vs operational-recipe)
- 2 files NEVER CREATED (perception-thresholds.md, gate-runner.js)
- 6 edits to existing files NEVER APPLIED
- Core 3-component architecture (route/think/build) is PRESERVED in spirit
- Separation of TC thinking from builder execution is PRESERVED
- PA deployment with 9 auditors + weaver is PRESERVED and enhanced (56 questions vs 48)

### Structural Observations

**What the current pipeline DOES have that PV2 designed:**
- TC invocation as separate agent (SKILL.md Step 2)
- Builder as separate agent reading TC output (SKILL.md Step 3)
- Programmatic gate verification (SKILL.md Step 4, 16 gates)
- Screenshot capture + lock sheet (SKILL.md Step 5)
- 9-auditor PA deployment with weaver (SKILL.md Step 6)
- Fix cycle protocol (SKILL.md Step 7, max 3 cycles)

**What the current pipeline DOES NOT have that PV2 designed:**
- Tier routing (Floor/Middle/Ceiling/Flagship) — always Flagship
- Operational recipe (sequential 9-phase build guide with exact CSS)
- Standalone perception thresholds file
- Standalone gate runner (JS, testable independently)
- Inter-agent communication protocol
- TC-to-builder output contract (structured handoff format)
- Per-tier agent architecture (different agent counts per tier)

---

## Section 2: File 42 Integration

### What File 42 Is

File 42 (`ephemeral/pipeline-analysis/42-OPERATIONAL-RECIPE.md`, 1,747 lines) is a content-agnostic 9-phase page-building recipe. It contains:

- **9 sequential phases:** Phase 0 (Content Analysis) through Phase 8 (Verification)
- **Exact CSS blocks:** Copy-paste ready code per phase (e.g., Phase 3 zone backgrounds with specific hex values and perception checks)
- **Perception checks after every phase:** Binary pass/fail with exact thresholds
- **0.32:1 constraint-to-action ratio:** For every ~3 rules, ~10 concrete steps. This is the RECIPE format that the middle-tier experiment proved successful.
- **Team architecture (Part 2):** Defines agent roles and handoff points
- **Conviction layer (Part 3):** Embeds soul/identity checkpoints
- **Appendices A-D:** Perception thresholds, deallocation protocol, quick reference, provenance

### How File 42 Was Supposed to Integrate (per PV2)

PV2 designed File 42 to be DISTILLED into `operational-recipe.md` (~650 lines), which would:
1. Strip Part 2 (team architecture — moved to orchestrator)
2. Strip Part 3 (conviction — moved to TC brief)
3. Strip Appendices B-D (reference material — moved to standalone files)
4. Keep Part 1 (the 9-phase recipe) + Appendix A (thresholds)
5. Be the PRIMARY document the builder agent reads

Source: `ephemeral/pipeline-analysis/_meta-cognitive/pipeline-v2-architecture.md` lines 145-180, Priority 3 specification.

### Current State of Integration

**File 42 is NOT integrated.** The operational-recipe.md was never created. Instead, the builder reads `conventions-brief.md`, which is a WORLD MODEL document with a fundamentally different philosophy:

| Dimension | File 42 (Operational Recipe) | conventions-brief.md (Current) |
|---|---|---|
| **Philosophy** | "Write this CSS block in this order" | "Learn the scales, then improvise" |
| **Format** | Sequential phases with exact CSS | Conceptual sections with principles |
| **Constraint-to-action ratio** | 0.32:1 (recipe) | ~3:1 (world model) |
| **CSS specificity** | Exact hex values, px values, property names | Ranges, principles, "at least N" |
| **Phase structure** | 9 phases in build order | 14 sections by topic |
| **Perception checks** | After every phase, binary | Section 2 describes "physics" conceptually |
| **Builder experience** | Follow steps, check results | Absorb world, make decisions |
| **Proven result** | Recipe format → PA-05 DESIGNED (middle-tier) | World model format → PA-05 1.5/4 (flagship) |

### File 42 Validation Status

Per `ephemeral/pipeline-analysis/_meta-cognitive/file42-validation.md`:
- 7 failure modes FULLY ADDRESSED by File 42
- 4 PARTIALLY ADDRESSED (agent comms, Sonnet-for-builders, content-form, scale saturation)
- 4 MISSING (continuation bias, constraint ambiguity, ambient overload, file architecture)
- 5 CONTESTED (recipe universality N=2, threshold values N=1, sub-perceptual zero, CD-006 benchmark, recipe-only sufficiency)
- Verdict: READY FOR V2 WITH 12 REVISIONS

### Integration Gap Assessment: BLOCKING

The absence of operational-recipe.md is the SINGLE LARGEST gap between PV2 design and current implementation. This is the document PV2 identified as the fix for the guardrail-factory problem (7.9:1 guardrail-to-playbook ratio). Without it, builders continue receiving world-model guidance that requires judgment calls — the exact failure mode identified in the flagship experiment.

File 42 validation identified 12 revisions needed before integration. These are:
- 4 Priority 1: perception threshold calibration, phase transition criteria, agent comm integration, deallocation scope
- 4 Priority 2: content-form analysis depth, scale implementation, conviction placement, CSS vocabulary completeness
- 4 Priority 3: universality testing (N>2), Sonnet compatibility, ambient overload mitigation, provenance freshness

---

## Section 3: 7 Contradictions Resolution Status

PV2 identified 7 contradictions (C1-C7) between competing agent proposals. Here is the resolution status in the current implementation:

### C1: Orchestrator Yes/No
- **PV2 Resolution:** YES — thin orchestrator as `/build-page` skill
- **Current Status:** RESOLVED ALIGNED — `~/.claude/skills/build-page/SKILL.md` exists and serves as orchestrator
- **Gap:** Orchestrator is ~470 lines vs ~350 target (+34% over budget)

### C2: Recipe Location (Standalone vs Embedded in TC)
- **PV2 Resolution:** Standalone `operational-recipe.md` in `design-system/compositional-core/guidelines/`
- **Current Status:** NOT RESOLVED — operational-recipe.md never created. Builder reads conventions-brief.md instead
- **Gap:** BLOCKING. The recipe-vs-checklist finding was the #1 insight from pipeline analysis. PV2 resolved this by designing a standalone recipe. Current implementation reverted to world-model guidance.

### C3: Stacking Gap Threshold (96px / 120px / 192px)
- **PV2 Resolution:** 120px TARGET, 192px HARD GATE, new `--space-max-stacked` token
- **Current Status:** PARTIALLY RESOLVED — SKILL.md gate SC-09 checks stacking but uses the pre-PV2 formulation. `--space-max-stacked` token NOT added to tokens.css. The 3-tier threshold (target/warning/gate) is not implemented.
- **Gap:** SIGNIFICANT. S-09 stacking loophole (individual values pass, stacked values create 210-276px voids) was identified as a root cause in flagship failure. The 3-tier fix exists in PV2 design but was never applied.

### C4: Background Delta (10 RGB vs 15 RGB)
- **PV2 Resolution:** >=15 RGB canonical
- **Current Status:** RESOLVED ALIGNED — conventions-brief.md Section 2 (Perception) states >=15 RGB. SKILL.md gates check this value.
- **Gap:** None for the value itself. However, the value lives in 2+ locations without a canonical source (perception-thresholds.md was never created).

### C5: Tier Routing Location (Orchestrator vs TC)
- **PV2 Resolution:** Orchestrator determines tier, TC receives tier as input parameter
- **Current Status:** DIVERGED — Tier routing was REMOVED ENTIRELY from current implementation. SKILL.md always deploys Flagship architecture (1 Opus TC + 1 Opus builder + 16 gates + 9 PA auditors + weaver). No Floor/Middle/Ceiling paths exist.
- **Gap:** SIGNIFICANT for efficiency (Flagship architecture for simple pages = waste) but NOT BLOCKING for quality (Flagship is the highest-quality path). PV2 designed tier routing for the migration pipeline where 40-50% of pages are Middle tier. Current pipeline only builds showcase pages, so always-Flagship is defensible.

### C6: Transition Types (3 vs 5x5 Matrix)
- **PV2 Resolution:** 3 base types (gradient, border, spacing) with 5x5 combination matrix for Ceiling+
- **Current Status:** PARTIALLY RESOLVED — conventions-brief.md describes transition grammar (Section 7) with base types. The 5x5 combination matrix for higher tiers is not present.
- **Gap:** MINOR. The 3-type base is sufficient for current usage. The 5x5 matrix is a Ceiling+ enhancement.

### C7: TC Phase 4 Trimming
- **PV2 Resolution:** Trim TC output to builder-relevant subset (tier, pattern, metaphor, zone_plan, mechanism_selection, builder_warnings, isomorphism_table)
- **Current Status:** NOT DONE — TC outputs full compositional analysis. Builder receives the complete _tc-brief.md file. No structured handoff contract.
- **Gap:** SIGNIFICANT. TC output is ~2,000-4,000 lines. Builder must self-select relevant portions. PV2 designed a structured output contract to ensure builders get exactly what they need. This relates to the "75-line builder visibility cap" finding — builders can only absorb ~75 lines of guidance effectively.

### Resolution Summary

| Contradiction | PV2 Resolution | Current Status | Severity |
|---|---|---|---|
| C1: Orchestrator | YES | ALIGNED | None |
| C2: Recipe location | Standalone | NOT DONE | BLOCKING |
| C3: Stacking gap | 120/192px | PARTIAL | SIGNIFICANT |
| C4: Background delta | >=15 RGB | ALIGNED | None (source scattered) |
| C5: Tier routing | Orchestrator routes | REMOVED | SIGNIFICANT (efficiency) |
| C6: Transitions | 3 base + 5x5 | PARTIAL | MINOR |
| C7: TC trimming | Structured contract | NOT DONE | SIGNIFICANT |

**Score: 2 ALIGNED, 2 PARTIAL, 2 NOT DONE, 1 DIVERGED**

---

## Section 4: Communication Protocol

### PV2 Design (from `pv2-comms-protocol.md`)

PV2 designed a comprehensive inter-agent communication protocol with:

**5 Message Types:**
1. **CHECKPOINT** (builder→planner): "Phase N complete. [gate results]. Proceeding to Phase N+1." Sent after each build phase.
2. **APPROVAL** (planner→builder): "Phase N approved. [adjustments for next phase]." Confirms builder can proceed.
3. **FIX** (verifier→builder): "[gate ID] failed: [metric]. Fix: [specific instruction]." Directs remediation.
4. **QUERY** (builder→planner): "[decision point]. Options: A, B, C. Recommendation: [X]." Requests guidance at ambiguous points.
5. **ESCALATE** (any→team-lead): "[blocker description]. Cannot proceed without [resource/decision]." Emergency path.

**6 Banned Message Types:**
1. Status updates without gate results
2. Judgment questions ("does this look good?")
3. CSS dumps (>20 lines of raw code)
4. Meta-discussion about process
5. Acknowledgment-only messages
6. Messages exceeding 200 words

**Tier-Specific Schedules:**
- Floor: 0 messages (builder autonomous)
- Middle: 0 messages (builder autonomous)
- Ceiling: 5-10 messages (checkpoints at Phase 3, 5, 8)
- Flagship: 13-23 messages (checkpoints after every phase)

**Dual Channel Architecture:**
- File-bus: file IS the content (write to shared directory)
- SendMessage: notification IS the alert ("Phase 3 complete, see _phase3-checkpoint.md")
- Rule: never duplicate content across channels

### Current State

**The current pipeline has ZERO inter-agent communication protocol.**

`~/.claude/skills/build-page/SKILL.md` defines agent roles (TC agent, builder agent, PA auditors, weaver) but NO communication between them during execution:

- TC agent writes `_tc-brief.md` → builder reads it (file-bus only, no notification)
- Builder writes HTML file → gate runner checks it (no builder notification of results)
- Gate runner results go to orchestrator → orchestrator decides next step (builder not informed)
- PA auditors write reports → weaver reads them (file-bus only)
- Weaver writes verdict → orchestrator reads it (no builder notification)

The ONLY communication path is: orchestrator spawns agent with instructions → agent writes file → orchestrator reads file. There is no mid-build communication, no checkpoint system, no query mechanism, no escalation path.

### Gap Assessment: SIGNIFICANT

The absence of communication protocol was identified as a root cause in BOTH the flagship experiment failure AND the ceiling experiment. Key evidence:

1. **Zero inter-agent messaging in flagship** — builders operated autonomously without checkpoint feedback. Result: imperceptible CSS, whitespace voids, uniform typography.
2. **CD-006 (39/40 crown jewel) used inter-agent messaging** — the highest-quality artifact in the entire project used communication between agents.
3. **Missing footer = smoking gun** — in middle-tier experiment, builder couldn't ask planner about footer requirements. Result: missing footer.
4. **"Zero SendMessage = quality cost"** — retro-analysis team CORRECTED the initial finding. Communication IS correlated with quality.

However, the communication protocol is NOT BLOCKING for the current always-Flagship pipeline. It is BLOCKING for tier routing (Ceiling/Flagship builds need checkpoints) and for quality improvement beyond PA-05 2.5/4.

### Recommended Priority

Communication protocol should be implemented AFTER operational-recipe.md (C2) and perception-thresholds.md, but BEFORE tier routing (C5). The recipe fixes the builder's guidance; communication fixes the builder's feedback loop.

---

## Section 5: BLOCKING Gaps

### Gap 1: operational-recipe.md NOT CREATED (BLOCKING)

**PV2 Source:** `pipeline-v2-architecture.md` lines 145-180, Priority 3
**Design:** ~650 lines, distilled from File 42's 1,747 lines. 9-phase sequential recipe with exact CSS per phase. 0.32:1 constraint-to-action ratio.
**Current State:** Does not exist. Builder reads conventions-brief.md (world-model format, ~3:1 constraint-to-action ratio).
**Impact:** This is the recipe-vs-checklist gap. The middle-tier experiment proved recipe format produces PA-05 DESIGNED. The flagship experiment proved world-model format produces PA-05 1.5/4. Without this file, the core PV2 insight is unimplemented.
**Fix:** Distill File 42 into operational-recipe.md with the 12 revisions from file42-validation.md. Place in `design-system/compositional-core/guidelines/operational-recipe.md`.
**Effort:** ~4-6 hours (distillation + 12 revisions + validation)

### Gap 2: perception-thresholds.md NOT CREATED (BLOCKING)

**PV2 Source:** `pipeline-v2-architecture.md` lines 100-120, Priority 1
**Design:** ~80 lines, single-source-of-truth for all perception thresholds. Background >=15 RGB, font-size >=2px, letter-spacing >=0.025em, padding >=24px, stacked gap <=120px target / <=192px gate.
**Current State:** Thresholds scattered across conventions-brief.md (Section 2), SKILL.md (gate definitions), and TC SKILL.md. No canonical source. Values may drift between locations.
**Impact:** Without canonical source, threshold values could diverge across files. Gate runner, builder guidance, and PA auditors may reference different values. This was PV2 Priority 1 — the FIRST file to create.
**Fix:** Create `design-system/compositional-core/guidelines/perception-thresholds.md` with all thresholds in one location. Update all references to point here.
**Effort:** ~1-2 hours

### Gap 3: gate-runner.js NOT CREATED (SIGNIFICANT)

**PV2 Source:** `pv2-file-structure.md` lines 180-250, Priority 2
**Design:** ~250 lines, standalone JavaScript executing 12 gates (SC-01 through SC-12) against built HTML. Testable independently, portable, version-controlled.
**Current State:** 16 gates defined as prose instructions in SKILL.md Step 4. Orchestrator agent runs gates by reading HTML and evaluating conditions. Not executable code.
**Impact:** Gates cannot be tested independently. Gate definitions mix prose description with evaluation criteria. Adding/modifying gates requires editing the orchestrator prompt. However, the current approach WORKS — programmatic gates passed in both flagship and remediation experiments.
**Fix:** Extract gate logic into standalone JS. SKILL.md invokes gate-runner.js instead of defining gates inline.
**Effort:** ~3-4 hours

### Gap 4: 6 Edits to Existing Files NOT APPLIED (SIGNIFICANT)

**PV2 Source:** `pv2-file-structure.md`, 6 edit specifications
**Edits NOT applied:**
1. TC SKILL.md: +72 lines (recipe-framing header, tier routing, output contract) — `~/.claude/skills/tension-composition/SKILL.md`
2. PA SKILL.md: +56 lines (embedded thresholds, programmatic pre-screen, tier routing) — `~/.claude/skills/perceptual-auditing/SKILL.md`
3. compositional-core/CLAUDE.md: +89 lines (PV2 routing table, tier definitions) — `design-system/compositional-core/CLAUDE.md`
4. design-system/CLAUDE.md: +27 lines (PV2 navigation section) — `design-system/CLAUDE.md`
5. tokens.css: +6 lines (`--space-max-stacked: 192px`) — `design-system/compositional-core/vocabulary/tokens.css`
6. semantic-rules.md: +25 lines (S-09 stacking total-gap rule) — `design-system/compositional-core/guidelines/semantic-rules.md`
**Impact:** These edits connect PV2 into the existing design system. Without them, the design system has no awareness of PV2, tier routing, or the stacking fix.
**Fix:** Apply edits per `pv2-file-structure.md` specifications.
**Effort:** ~2-3 hours total

### Gap 5: Communication Protocol ABSENT (SIGNIFICANT)

**PV2 Source:** `pv2-comms-protocol.md` (509 lines)
**Design:** 5 message types, 6 banned types, tier-specific schedules, dual file-bus + SendMessage channel.
**Current State:** Zero inter-agent communication. Agents operate autonomously via file-bus only.
**Impact:** Quality ceiling without feedback loops. Builder cannot ask planner for clarification. Verifier cannot direct builder to specific fixes. Relates to "zero SendMessage = quality cost" finding.
**Fix:** Add communication protocol to SKILL.md. Define message types, checkpoint phases, escalation path.
**Effort:** ~2-3 hours

### Gap 6: Tier Routing REMOVED (SIGNIFICANT for efficiency, NOT BLOCKING for quality)

**PV2 Source:** `pipeline-v2-architecture.md` lines 55-95
**Design:** Orchestrator routes to Floor/Middle/Ceiling/Flagship based on content analysis. Each tier has different agent count, gate count, PA depth, and build time.
**Current State:** Always Flagship (1 Opus TC + 1 Opus builder + 16 gates + 9 PA auditors + weaver).
**Impact:** Every page gets Flagship treatment regardless of complexity. For migration pipeline where 40-50% are Middle tier, this wastes significant resources. For current showcase-only usage, always-Flagship is defensible.
**Fix:** Add tier routing to SKILL.md Step 1 (content analysis determines tier) with per-tier agent architecture.
**Effort:** ~4-6 hours

### Priority Order

1. **perception-thresholds.md** (Gap 2) — PV2 Priority 1, smallest effort, highest dependency (all other files reference it)
2. **operational-recipe.md** (Gap 1) — PV2 Priority 3, highest impact on build quality, requires File 42 distillation
3. **gate-runner.js** (Gap 3) — PV2 Priority 2, enables independent gate testing
4. **6 edits** (Gap 4) — connects PV2 into design system
5. **communication protocol** (Gap 5) — enables builder feedback loops
6. **tier routing** (Gap 6) — enables efficient multi-tier builds

### Implementation Dependency Chain

```
perception-thresholds.md (Gap 2)
    └─→ operational-recipe.md (Gap 1) [references thresholds]
        └─→ gate-runner.js (Gap 3) [enforces thresholds + recipe phases]
            └─→ 6 edits (Gap 4) [connects everything into design system]
                └─→ communication protocol (Gap 5) [requires routing awareness]
                    └─→ tier routing (Gap 6) [requires all above]
```

---

## Appendix: Source Files Read

| File | Lines | Location |
|---|---|---|
| pipeline-v2-architecture.md | 625 | `ephemeral/pipeline-analysis/_meta-cognitive/pipeline-v2-architecture.md` |
| pv2-file-structure.md | 676 | `ephemeral/pipeline-analysis/_meta-cognitive/pv2-file-structure.md` |
| pv2-comms-protocol.md | 509 | `ephemeral/pipeline-analysis/_meta-cognitive/pv2-comms-protocol.md` |
| pv2-cross-validation.md | 527 | `ephemeral/pipeline-analysis/_meta-cognitive/pv2-cross-validation.md` |
| 42-OPERATIONAL-RECIPE.md | 1,747 | `ephemeral/pipeline-analysis/42-OPERATIONAL-RECIPE.md` |
| file42-validation.md | 439 | `ephemeral/pipeline-analysis/_meta-cognitive/file42-validation.md` |
| pv2-file42-integration.md | 352 | `ephemeral/pipeline-analysis/_meta-cognitive/pv2-file42-integration.md` |
| build-page/SKILL.md | ~470 | `~/.claude/skills/build-page/SKILL.md` |
| conventions-brief.md | ~547 | `design-system/pipeline/conventions-brief.md` |

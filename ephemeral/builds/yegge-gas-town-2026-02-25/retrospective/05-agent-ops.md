# Agent Operations Analysis

**Build:** yegge-gas-town-2026-02-25
**Pipeline:** v3 with REFINE cycle
**Total wall-clock time:** ~3h 20m (18:00-21:20 UTC per tracker; file timestamps: 14:47-16:20 local)

---

## 1. Agent Census

### Pipeline Agents (Core)

| Phase | Agent | Model | Count |
|-------|-------|-------|-------|
| P0 | Content Analyst | Opus | 1 |
| P1 | Brief Assembler | Opus | 1 |
| P2 | Builder | Opus | 1 |
| P3A | Gate Runner | N/A (JS) | 0 (orchestrator code) |
| P3B | PA Auditors A-I | Opus | 9 |
| P3B | Integrative Auditor | Opus | 1 |
| P3C | Weaver | Opus | 1 |
| P3B | Respawns (A, B) | Opus | 2 |
| **Subtotal Initial** | | | **16 LLM agents** (15 unique + 2 respawns) |

### REFINE Cycle Agents

| Phase | Agent | Model | Count |
|-------|-------|-------|-------|
| R-Build | REFINE Builder | Opus | 1 |
| R-PA | REFINE PA Auditors A-I | Opus | 9 |
| R-PA | REFINE Integrative | Opus | 1 |
| R-Verdict | REFINE Weaver | Opus | 1 |
| **Subtotal REFINE** | | | **12 LLM agents** |

### Post-Pipeline (Flagship Analysis)

| Phase | Agent | Model | Count |
|-------|-------|-------|-------|
| Analysis | 8 Opus researchers | Opus | 8 |
| **Subtotal Post** | | | **8 LLM agents** |

### Grand Total: 36 LLM agent spawns

- Pipeline core: 28 (16 initial + 12 REFINE)
- Post-pipeline: 8 (flagship analysis)
- Manifest expected: 15 per pass = 30 for a REFINE run (content analyst + brief assembler reused, not respawned)
- Actual vs expected: 28 vs ~26 (2 extra from A/B respawns)

---

## 2. Model Compliance

**ALL agents were Opus.** Zero Sonnet agents detected. This matches the MANIFEST mandate: Opus STRONG recommendation for Builder, Opus recommended for all others. Full compliance.

This is notable because previous builds (Flagship Experiment) used Sonnet for builder agents. The all-Opus decision adds cost but the PA-05 result (2.0 -> 3.5 after REFINE) suggests the model quality contributed.

---

## 3. Respawn Analysis

**2 respawns needed: Auditors A and B.**

| Auditor | Specialty | Initial Spawn Result | Respawn Result |
|---------|-----------|---------------------|----------------|
| A | Impression + Emotion | Failed (unknown cause) | COMPLETE (27k, 362 lines) |
| B | Readability + Typography | Failed (unknown cause) | COMPLETE (24k, 338 lines) |

- Respawn rate: 2/9 = 22% of PA auditors
- Both respawns were successful on second attempt
- A and B finished at 15:35 and 15:34 (vs 15:24-15:25 for C-I), suggesting the respawns added ~10 minutes
- Cause not documented in tracker (blank L3 agent details for PA auditors)

**Finding: PA auditor respawn causes are undocumented.** The tracker has no field for failure reason. Without knowing WHY respawns were needed, the same failures will recur.

---

## 4. Team Topology

**FLAT topology confirmed.** Orchestrator spawned all agents sequentially (content analyst -> brief assembler -> builder -> [screenshots + gates in parallel] -> 9 PA auditors in parallel -> integrative -> weaver).

- PA auditors all spawned in a single message (line 376: "all 10 agents in single message"), confirming parallel deployment
- Agents communicated via FILES only (no SendMessage observed)
- The "zero SendMessage = quality cost" concern from previous builds appears mitigated here because the TC Brief pre-computes the "conversation" -- the builder received a 272-line execution brief instead of needing to ask questions

---

## 5. Playwright Contention

**ZERO contention.** Screenshot pre-capture pattern used correctly:

- Initial pass: Orchestrator took 53 screenshots (15:12-15:16 local) BEFORE spawning any PA auditors (first PA report at 15:24)
- REFINE pass: Orchestrator took 23 screenshots (15:50-15:58 local) BEFORE spawning REFINE PA auditors (first REFINE PA report at 16:06)
- PA auditors read screenshots via Read tool (file paths to saved PNGs)
- Gate runner ran as orchestrator-executed JS, no contention with screenshots

The REFINE screenshot strategy shifted from scroll-through to element-level screenshots (per-zone captures: z0-header, z1-orientation, z2-mental-model, etc.). This is a smart adaptation that gave auditors more targeted visual evidence.

---

## 6. Timing Analysis

### Phase Timing (from file timestamps)

| Phase | Start | End | Duration | Notes |
|-------|-------|-----|----------|-------|
| P0: Content Analysis | 14:47 | 14:47 | ~5 min | Single file output |
| P1: Brief Assembly | 14:47 | 14:52 | ~5 min | Zero BV revision cycles |
| P2: Build | 14:52 | ~15:09 | ~17 min | 2,671-line HTML. Fast for Opus. |
| P3A: Screenshots + Gates | 15:09 | 15:16 | ~7 min | 53 screenshots + 30 gates |
| P3B: PA Audit (9 parallel) | 15:16 | 15:35 | ~19 min | A/B respawns added ~10 min |
| P3B: Integrative | 15:25 | 15:25 | ~5 min | Waited for all 9 |
| P3C: Weaver | 15:25 | 15:33 | ~8 min | REFINE verdict |
| **Initial pass total** | **14:47** | **15:33** | **~46 min** | |
| REFINE: Build | ~15:35 | ~15:47 | ~12 min | HTML grew 2,671 -> 2,931 lines |
| REFINE: Screenshots + Gates | 15:47 | 15:58 | ~11 min | 23 element screenshots + 25 gates |
| REFINE: PA Audit (9 parallel) | 15:58 | 16:09 | ~11 min | Zero respawns |
| REFINE: Integrative | 16:06 | 16:07 | ~5 min | |
| REFINE: Weaver | 16:07 | 16:16 | ~9 min | SHIP WITH FIXES |
| Tracker update | 16:16 | 16:20 | ~4 min | |
| **REFINE total** | **~15:35** | **~16:20** | **~45 min** | |
| **Pipeline total** | **14:47** | **16:20** | **~93 min** | |

### Post-Pipeline (Flagship Analysis)

| Phase | Start | End | Duration |
|-------|-------|-----|----------|
| 8 analysis agents | 16:20 | 16:45 | ~25 min |

### Total wall-clock: ~118 min (~2h)

**Discrepancy with tracker:** The tracker claims ~3h 20m (18:00-21:20 UTC). File timestamps show ~2h (14:47-16:45 local, which is 20:47-22:45 UTC if Pacific). The UTC timestamps in the tracker appear to be estimates, not actual. The 3h 20m figure overestimates by ~80 minutes.

---

## 7. Idle Time and Parallelization

**Minimal idle time detected:**

- PA auditors ran in true parallel (C-I all finished within 15:24-15:25, A/B at 15:34-15:35 due to respawns)
- REFINE PA auditors: even tighter parallel (B-I at 16:06, A at 16:09, H at 16:07)
- The only serialization bottleneck is between phases (build must finish before screenshots, screenshots before PA)
- No evidence of agents waiting on other agents within a phase

**Potential improvement:** The Integrative Auditor spawned AFTER all 9 PA reports in both passes. The manifest says it receives "all 9 audit reports + all screenshots." However, the Integrative could START with screenshots-only and begin its gestalt impression while PA reports trickle in. This could save ~5 min per pass.

---

## 8. Communication Patterns

**Zero inter-agent messaging.** All agents communicated via files:
- Content Map (P0 -> P1)
- Execution Brief (P1 -> P2)
- HTML (P2 -> P3A)
- Screenshots (P3A -> P3B)
- PA Reports (P3B -> P3B Integrative -> P3C)
- Artistic Impression (P3C -> REFINE Builder)

The file-bus communication worked well for this pipeline because the TC Brief pre-computes the "conversation." The REFINE builder received the artistic impression (33 lines initial, 41 lines refine) as generative language -- not gate scores or thresholds.

Previous finding: "zero SendMessage = quality cost." This build appears to refute that. PA-05 went from 2.0 to 3.5 without any messaging. The quality came from the REFINE mechanism itself (artistic impression -> fresh builder), not from inter-agent chat.

---

## 9. Cost Analysis (Estimated)

### Token Estimates by Agent Type

| Agent Type | Count | Est. Input Tokens | Est. Output Tokens | Total Est. |
|------------|-------|-------------------|-------------------|------------|
| Content Analyst | 1 | ~15k | ~3k | ~18k |
| Brief Assembler | 1 | ~30k | ~10k | ~40k |
| Builder (x2) | 2 | ~80k each | ~40k each | ~240k |
| Gate Runner | 0 | N/A | N/A | N/A (JS) |
| PA Auditors (initial) | 11 (9+2 respawns) | ~50k each | ~15k each | ~715k |
| PA Auditors (refine) | 9 | ~40k each | ~12k each | ~468k |
| Integrative (x2) | 2 | ~60k each | ~10k each | ~140k |
| Weaver (x2) | 2 | ~80k each | ~15k each | ~190k |
| Flagship Analysis | 8 | ~100k each | ~20k each | ~960k |
| **Total** | **36** | | | **~2.77M tokens** |

**Disproportionate consumers:** The 8 flagship analysis agents consumed an estimated ~960k tokens (35% of total) but were outside the core pipeline. Within the pipeline, PA auditors at 20 spawns consumed ~1.18M tokens (43% of pipeline total). This is expected -- the Mode 4 PA is the pipeline's most expensive component.

---

## 10. File Production

### Output by Phase

| Category | Files | Lines | Size |
|----------|-------|-------|------|
| Content Map | 1 | 70 | 5.7k |
| Execution Brief | 1 | 272 | 21k |
| HTML Artifact | 1 | 2,931 | 98k |
| Gate Results | 2 | 121 | 11.6k |
| PA Reports (initial) | 9 | 2,734 | ~233k |
| Integrative (initial) | 1 | 217 | 21k |
| Weaver (initial) | 2 | 334 | 34.5k |
| PA Reports (refine) | 9 | 2,048 | ~204k |
| Integrative (refine) | 1 | 148 | 19k |
| Weaver (refine) | 2 | 347 | 29.3k |
| Gate Runner JS (copied) | 1 | 1,654 | 73k |
| Execution Tracker | 1 | 637 | 29k |
| Screenshots | 76 | N/A | ~5.5M |
| Flagship Analysis | 8 | 4,149 | ~274k |
| **Total** | **116** | **~15,836 lines** | **8.3M** |

### Files Produced But Potentially Under-Read

- `gate-runner-core.js` (1,654 lines, 73k): Copied into build dir but executed by orchestrator. Not read by any spawned agent.
- `screenshots/768-scroll-*.png` (20 files, all 2.4k each): DPR artifacts -- these are near-empty images due to the DPR 0.667 issue. Produced and presumably sent to PA auditors but contained no useful visual information. Waste of ~48k disk + auditor context tokens.
- `screenshots/1440/` and `screenshots/1024/`: Empty subdirectories (screenshots stored in parent).

---

## Key Findings

1. **All-Opus compliance achieved.** 36/36 agents were Opus. First fully compliant build.
2. **REFINE doubled the pipeline duration** but delivered +1.5 PA-05 (2.0 -> 3.5). The cost was 12 additional agent spawns (~45 min). High ROI.
3. **Respawn causes undocumented.** 2/9 PA auditors needed respawns with no recorded reason.
4. **DPR workaround created waste.** 20 useless 768px scroll screenshots (2.4k each) still captured and likely sent to auditors. REFINE pass improved by switching to element-level screenshots.
5. **Tracker timestamps are estimates, not actuals.** L3 agent detail fields (Start/End) are blank for most agents. Total duration claim (3h 20m) is ~80 min over actual.
6. **Zero Playwright contention.** Screenshot pre-capture pattern worked perfectly across both passes.
7. **File-bus communication sufficient** when TC Brief pre-computes the conversation. Zero SendMessage did not degrade quality.
8. **REFINE screenshot strategy improvement** (scroll-through -> element-level) was a smart ad-hoc adaptation that should be codified.

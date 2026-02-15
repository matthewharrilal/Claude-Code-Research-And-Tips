# Team Topology Design: Skill Enrichment Execution

## TeamCreate Specification

**Team Name:** `skill-enrichment-wave1`

**Description:** Execute Phase 0 (prerequisites) + Phase 1 (Wave 1 skill modifications) + Phase 2 (documentation changes) of the skill enrichment plan. Delivers checkpoint-ready state for Middle-tier experiment.

**Mission:** Transform the tension-composition skill from Floor-only capability to tier-aware routing (Floor/Middle/Ceiling/Flagship), preventing the #1 Phase D failure mode (container width violations), and establishing infrastructure for post-experiment vocabulary expansion.

---

## Agent Roster

| Agent Name | Type | Model | Responsibility | Files Owned |
|------------|------|-------|----------------|-------------|
| `prereq-executor` | worker | sonnet | Execute PRE-1 (category labels) + PRE-3 (staleness fixes) | `mechanism-catalog.md`, 3 staleness files |
| `skill-modifier` | worker | sonnet | Execute M2, M3, M5, M8 sequentially on SKILL.md | `tension-composition/SKILL.md` |
| `doc-writer-1` | worker | sonnet | Execute DOC-1 (extraction provenance) | `mechanism-catalog.md` |
| `doc-writer-2` | worker | sonnet | Execute DOC-2 (combination catalog) | `mechanism-combinations.md` (NEW) |
| `doc-writer-3` | worker | sonnet | Execute DOC-3 (case studies README) + DOC-4 (CSS example) | 2 files in compositional-core |
| `doc-writer-4` | worker | sonnet | Execute DOC-5 (entry point confusions) + DOC-6 (semantic framework) | 2 files in doc-enrichment + guidelines |
| `integration-validator` | worker | sonnet | Post-execution integration check: line count, tier consistency, cross-references | Read-only verification |
| `fresh-eyes-verifier` | worker | sonnet | Zero-context binary location test: can a fresh agent find tier routing, container width, per-category minimum in <30 sec? | Read-only verification |

**Total:** 8 agents (all Sonnet)

---

## Task Structure with Dependencies

```
PHASE 0: Prerequisites (Sequential)
├─ T1: PRE-3 Staleness Fixes (prereq-executor)
│   └─ Files: design-system/CLAUDE.md, pipeline/05-COMPLETE-ROADMAP.md, pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md
│
└─ T2: PRE-1 Category Labels (prereq-executor) [BLOCKS Wave 1]
    └─ File: mechanism-catalog.md
    └─ Output: 18 labeled headings + summary table after line 49

PHASE 1: Wave 1 Skill Modifications (Sequential — single file contention)
├─ T3: M2 Fractal Gate (skill-modifier) [BLOCKED BY T2]
│   └─ Replace lines 1071-1080 + add sunset clause
│
├─ T4: M3 Container Width (skill-modifier) [BLOCKED BY T3]
│   └─ Insert after line ~756 (compression/density guardrails)
│
├─ T5: M5 Tier Routing (skill-modifier) [BLOCKED BY T4]
│   └─ Insert new Step 0D, rename current 0D→0E, add hybrid content note
│
└─ T6: M8 Tier Framing (skill-modifier) [BLOCKED BY T5]
    └─ Insert at 2 locations + add hypothesis language

PHASE 2: Documentation Changes (Parallel — different files, no contention)
├─ T7: DOC-1 Extraction Provenance (doc-writer-1) [BLOCKED BY T2]
│   └─ File: mechanism-catalog.md (depends on PRE-1 completing first)
│
├─ T8: DOC-2 Combination Catalog (doc-writer-2) [NO BLOCKER]
│   └─ NEW file: grammar/mechanism-combinations.md
│   └─ Source: ephemeral/session-insights/06-enrichment-actions.md
│
├─ T9: DOC-3 Case Studies README (doc-writer-3) [NO BLOCKER]
│   └─ File: case-studies/README.md
│
├─ T10: DOC-4 CSS Example (doc-writer-3) [NO BLOCKER]
│   └─ File: compositional-core/CLAUDE.md
│
├─ T11: DOC-5 Entry Point Confusions (doc-writer-4) [NO BLOCKER]
│   └─ File: doc-enrichment/03-ENTRY-POINT.md
│   └─ INCLUDES: category name evolution note (HANDOFF vs master prompt taxonomy)
│
└─ T12: DOC-6 Semantic Framework (doc-writer-4) [NO BLOCKER]
    └─ File: guidelines/semantic-rules.md

PHASE 3: Integration Validation (Sequential)
├─ T13: Integration Check (integration-validator) [BLOCKED BY T6 + all T7-T12]
│   └─ Verify: line count <1,700, tier consistency, cross-references, formatting
│
└─ T14: Fresh-Eyes Binary Test (fresh-eyes-verifier) [BLOCKED BY T13]
    └─ Zero-context test: locate tier routing, container width, skip path in <30 sec
    └─ This agent receives ONLY SKILL.md, NO plan context

CHECKPOINT DELIVERY
└─ T15: Status Report to User (integration-validator)
    └─ Summary: what completed, line count delta, what's ready for experiment
    └─ Flags: any issues found, line count approaching budget (1,700)
```

---

## Execution Flow Diagram

```
                 START
                   │
         ┌─────────┴─────────┐
         │                   │
    T1: Staleness       T8: DOC-2 (parallel)
         │
    T2: PRE-1 ───────┬───────┼───── T9: DOC-3 (parallel)
         │           │       │
         │           │       └───── T10: DOC-4 (parallel)
         │           │
         │           └─ T7: DOC-1  ─┬─ T11: DOC-5 (parallel)
         │              (waits      │
         │               for PRE-1) └─ T12: DOC-6 (parallel)
         │                           │
         │                           │
    ┌────┴────┐                     │
    │         │                     │
T3: M2   (SEQUENTIAL CHAIN)         │
    │         │                     │
T4: M3   (one file, one owner)      │
    │         │                     │
T5: M5   (no parallelization)       │
    │         │                     │
T6: M8        │                     │
    │         │                     │
    └────┬────┘                     │
         │                           │
         └──────────┬────────────────┘
                    │
            T13: Integration Check
                    │
          T14: Fresh-Eyes Test
                    │
          T15: Checkpoint Report
                    │
                  USER
```

**Key Flow Properties:**
- **Wave 1 (T3-T6) is 100% sequential** — single file prevents parallelization
- **Documentation (T7-T12) is 95% parallel** — only DOC-1 waits for PRE-1 (same file)
- **PRE-1 is the critical path bottleneck** — blocks Wave 1 + DOC-1
- **Estimated time:** PRE-1 (30 min) → Wave 1 serial (90-120 min) → DOC parallel (30 min) → Validation (15 min) = **2.5-3 hours total**

---

## Wave Sequencing: Parallel vs Sequential

### Sequential Execution (MANDATORY)
- **Phase 0 → Phase 1 → Phase 3:** PRE-1 must complete before M2-M8. Integration must wait for all modifications.
- **T3 → T4 → T5 → T6:** M2 → M3 → M5 → M8 MUST execute in order. Same file, same owner. Each modification reads surrounding context before/after to verify formatting.

### Parallel Execution (SAFE)
- **Phase 2 documentation (T8-T12):** 5 different files, no shared state. Can all run concurrently.
- **T7 (DOC-1) runs after PRE-1 completes** but can parallel with T3-T6 since DOC-1 modifies `mechanism-catalog.md` and Wave 1 modifies `SKILL.md`.

### Hybrid Approach (OPTIMAL)
```
Timeline:
00:00 - T1 starts (staleness)
00:10 - T1 completes, T2 starts (PRE-1)
00:40 - T2 completes
        ├─ T3 starts (M2)
        ├─ T7 starts (DOC-1) [parallel]
        └─ T8, T9, T10, T11, T12 start (DOC-2 through DOC-6) [parallel]
01:00 - Documentation wave completes (T7-T12)
01:40 - T3 completes, T4 starts (M3)
02:00 - T4 completes, T5 starts (M5)
02:30 - T5 completes, T6 starts (M8)
03:00 - T6 completes, T13 starts (integration)
03:15 - T13 completes, T14 starts (fresh-eyes)
03:30 - T14 completes, T15 reports to user
```

**Parallelization savings:** ~60 minutes (documentation wave) vs sequential execution of all 15 tasks.

---

## Checkpoint Protocol

### Delivery Format
When T15 completes, `integration-validator` sends to user:

**Subject:** "Wave 1 Skill Enrichment — Checkpoint Ready"

**Contents:**
1. **Execution Summary**
   - Tasks completed: 14/14 (T1-T14)
   - Files modified: 9 files
   - SKILL.md line count: [before] → [after] (budget: 1,700)
   - Net delta: +[X] lines

2. **What's Ready**
   - ✓ Tier-based pipeline routing (Middle skips Phases 1-3)
   - ✓ Container width enforcement (940-960px gate)
   - ✓ Fractal coherence gate (binary, tier-calibrated)
   - ✓ Per-category mechanism labels (18 mechanisms tagged)
   - ✓ Combination catalog vocabulary (new file)
   - ✓ Semantic framework documentation

3. **Fresh-Eyes Test Results**
   - Can locate tier routing in <30 sec? [YES/NO]
   - Can identify Middle-tier skip path? [YES/NO]
   - Can find container width rule? [YES/NO]

4. **Issues Found (if any)**
   - Line count approaching budget? [flag if >1,600]
   - Cross-reference breaks? [list any]
   - Formatting errors? [list any]

5. **Next Steps**
   - Middle-tier experiment can proceed with enriched skill
   - Wave 2 (M1, M6, M7) DEFERRED until experiment results
   - Wave 3 (M4, M9-M11) DEFERRED until experiment results
   - Decision matrix ready for experiment outcomes (4 scenarios)

6. **Files Modified**
   - List absolute paths of all 9 modified files
   - Flag any new files created (mechanism-combinations.md)

### User Decision Point
After checkpoint, user can:
- **Approve → proceed to Middle-tier experiment** (recommended)
- **Request changes → revise Wave 1 modifications**
- **Abort → rollback all changes**

---

## EXACT MARKDOWN TEXT FOR PLAN (First Section)

```markdown
# Execution Plan: Skill Enrichment Wave 1

## Team Topology

This plan uses a **TeamCreate-based agent team** to execute Phase 0 (prerequisites), Phase 1 (Wave 1 skill modifications), and Phase 2 (documentation changes). The team delivers a checkpoint-ready state for the Middle-tier experiment.

### Team Specification
- **Team Name:** `skill-enrichment-wave1`
- **Size:** 8 agents (all Sonnet model)
- **Execution Time:** Estimated 2.5-3 hours
- **Deliverable:** Tier-aware skill with infrastructure for post-experiment vocabulary expansion

### Agent Roles

1. **prereq-executor** — Executes PRE-1 (category labels) + PRE-3 (staleness fixes)
   - Owns: `mechanism-catalog.md`, 3 staleness files
   - Critical path: PRE-1 blocks Wave 1

2. **skill-modifier** — Executes M2, M3, M5, M8 sequentially on SKILL.md
   - Owns: `tension-composition/SKILL.md` (exclusive ownership)
   - Sequential execution: M2 → M3 → M5 → M8 (no parallelization due to single-file contention)

3. **doc-writer-1** — Executes DOC-1 (extraction provenance)
   - Owns: `mechanism-catalog.md` (waits for PRE-1)

4. **doc-writer-2** — Executes DOC-2 (combination catalog)
   - Owns: `mechanism-combinations.md` (NEW file)
   - Parallel: no blockers

5. **doc-writer-3** — Executes DOC-3 (case studies README) + DOC-4 (CSS example)
   - Owns: 2 files in compositional-core
   - Parallel: no blockers

6. **doc-writer-4** — Executes DOC-5 (entry point confusions) + DOC-6 (semantic framework)
   - Owns: 2 files (doc-enrichment + guidelines)
   - Parallel: no blockers
   - Special: includes category name evolution note

7. **integration-validator** — Post-execution integration check
   - Verifies: line count <1,700, tier consistency, cross-references, formatting
   - Read-only verification

8. **fresh-eyes-verifier** — Zero-context binary location test
   - Tests: can a fresh agent locate tier routing, container width, skip path in <30 seconds?
   - Receives ONLY SKILL.md, NO plan context

### Execution Flow

**Phase 0: Prerequisites (Sequential)**
- T1: PRE-3 Staleness Fixes → T2: PRE-1 Category Labels
- T2 BLOCKS Wave 1 and DOC-1

**Phase 1: Wave 1 Skill Modifications (Sequential — single file)**
- T3: M2 Fractal Gate → T4: M3 Container Width → T5: M5 Tier Routing → T6: M8 Tier Framing
- Runs parallel with documentation wave (different files)

**Phase 2: Documentation Changes (Parallel — 6 different files)**
- T7: DOC-1 (waits for PRE-1) | T8: DOC-2 | T9: DOC-3 | T10: DOC-4 | T11: DOC-5 | T12: DOC-6
- 5 of 6 can start immediately

**Phase 3: Validation (Sequential)**
- T13: Integration Check → T14: Fresh-Eyes Test → T15: Checkpoint Report

**Critical Path:** PRE-1 (30 min) → M2→M3→M5→M8 (90-120 min) → Integration (15 min) = **2.5-3 hours**

### Checkpoint Delivery

After validation, `integration-validator` delivers:
1. Execution summary (14 tasks, 9 files, line count delta)
2. What's ready (tier routing, container width, fractal gate, etc.)
3. Fresh-eyes test results (binary YES/NO for 3 location tests)
4. Issues found (line count, cross-references, formatting)
5. Next steps (experiment-ready, Wave 2/3 deferred)

User can then **approve → experiment**, **request changes**, or **abort**.
```

---

## Design Rationale

### Why This Topology?

1. **Per-file ownership eliminates contention**
   - `skill-modifier` owns SKILL.md exclusively → no coordination overhead
   - 4 doc-writers own different files → zero contention
   - Matches project history: "Per-file builder ownership = zero contention (confirmed 6+ teams)"

2. **Sequential Wave 1 is unavoidable**
   - M2 modifies lines 1071-1080, M3 inserts after ~756, M5 inserts in Phase 0, M8 inserts in 2 locations
   - Each modification needs accurate surrounding context → must execute in order
   - Attempting parallelization would require complex merge conflict resolution

3. **Documentation parallelization captures 60 min savings**
   - 6 documentation tasks × 30 min each = 180 min sequential
   - 6 tasks parallel = 30 min wall time (longest task)
   - Savings: 150 min (83% reduction)

4. **Fresh-eyes verifier exploits zero-context property**
   - Project history: "Fresh-eyes zero-context agents find issues research-loaded agents miss entirely"
   - This agent receives ONLY SKILL.md, tests binary locatability
   - If a zero-context agent can't find tier routing in 30 seconds, NEITHER CAN A BUILDER

5. **Recovery pattern over captain-worker**
   - All agents are workers doing direct work, no hierarchical captain
   - Matches project history: "Recovery agents (doing work directly) are MORE reliable than captain->worker hierarchies"

6. **Sonnet for all roles**
   - Wave 1 modifications are surgical edits with exact line numbers → precision, not creativity
   - Documentation is templated content from source files → structured assembly
   - Project history: "Sonnet model agents cost-effective for all roles; Opus only needed for creative composition (Track 2)"

7. **File-writing emphasis in prompts**
   - Per project history: "File-writing emphasis must be in ALL worker prompts (workers frequently complete WITHOUT writing files)"
   - Each agent's prompt will end with: "YOUR OUTPUT MUST BE WRITTEN TO [file]. Reading and reporting is NOT completion."

### Alternative Topologies Considered (and rejected)

**Alt 1: Single "skill-enrichment-executor" agent**
- PRO: Simple, no coordination
- CON: Loses parallelization savings (60 min), single point of failure, no fresh-eyes verification
- REJECTED: Leaves time on the table

**Alt 2: Captain + 4 workers (prereq, skill, docs, validation)**
- PRO: Hierarchical clarity
- CON: Project history shows captains are LESS reliable, adds coordination overhead
- REJECTED: Goes against confirmed pattern

**Alt 3: Parallel SKILL.md writers (4 agents, one per modification)**
- PRO: Theoretical parallelization
- CON: Impossible — single file, sequential dependencies, merge conflict nightmare
- REJECTED: Violates per-file ownership pattern

**Alt 4: User-as-integrator (no integration-validator)**
- PRO: Fewer agents
- CON: User receives 9 modified files with no verification → high cognitive load
- REJECTED: Checkpoint should be delivery-ready, not inspection-ready

---

## Success Metrics

### Team Performance
- **Execution time:** <3 hours (target: 2.5 hours)
- **File contention incidents:** 0 (per-file ownership should eliminate)
- **Fresh-eyes test:** 3/3 binary location tests pass
- **Line count:** SKILL.md remains <1,700 (leaves 100-line buffer for Wave 2/3)

### Quality Gates
- **Integration check:** No cross-reference breaks, tier names consistent, formatting valid
- **Complexity budget:** Net delta +200-300 lines (documented in checkpoint)
- **User confidence:** Checkpoint report enables informed experiment approval

---

## Files to Create/Modify (Reference)

| File | Action | Agent | Task |
|------|--------|-------|------|
| `~/.claude/skills/tension-composition/SKILL.md` | MODIFY | skill-modifier | T3, T4, T5, T6 |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | MODIFY | prereq-executor, doc-writer-1 | T2, T7 |
| `design-system/compositional-core/grammar/mechanism-combinations.md` | CREATE | doc-writer-2 | T8 |
| `design-system/compositional-core/case-studies/README.md` | MODIFY | doc-writer-3 | T9 |
| `design-system/compositional-core/CLAUDE.md` | MODIFY | prereq-executor, doc-writer-3 | T1, T10 |
| `design-system/compositional-core/guidelines/semantic-rules.md` | MODIFY | doc-writer-4 | T12 |
| `design-system/pipeline/05-COMPLETE-ROADMAP.md` | MODIFY | prereq-executor | T1 |
| `design-system/pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md` | MODIFY | prereq-executor | T1 |
| `ephemeral/doc-enrichment/03-ENTRY-POINT.md` | MODIFY | doc-writer-4 | T11 |

**Total:** 8 modified files + 1 new file = 9 files

---

## END OF TOPOLOGY DESIGN

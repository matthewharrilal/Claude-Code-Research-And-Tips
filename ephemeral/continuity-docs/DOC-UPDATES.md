# Documentation Updates Required

**Date:** 2026-02-15
**Author:** final-integrator (continuity-docs team)
**Source:** doc-auditor report (03-documentation-audit.md) + adversarial review (05-adversarial-review.md)

---

## PRIORITY LEGEND

- **BLOCKING:** Must be done before any new instance starts work. Stale content actively misleads.
- **IMPORTANT:** Should be done soon. Missing context reduces effectiveness.
- **NICE-TO-HAVE:** Would improve completeness but absence is not harmful.

---

## BLOCKING UPDATES (3)

### UPDATE-1: design-system/CLAUDE.md Phase D Status

**File:** `design-system/CLAUDE.md`
**Priority:** BLOCKING
**Reason:** Auto-loaded on directory entry. THE most impactful file. Currently says Phase D has not started when it is COMPLETE.

**Change 1a — Line 9:**
```
CURRENT: **Current Phase:** Phase D Extraction Validation (NEXT — not yet started)
REPLACE: **Current Phase:** Phase D COMPLETE (CONDITIONAL PASS). Richness + rigidity research COMPLETE. Phase E next.
```

**Change 1b — Lines 232-244:**
```
CURRENT:
### CURRENT PHASE: Phase D Extraction Validation (NEXT)

**Status:** NOT YET STARTED
**Predecessor:** Phase C Extraction (COMPLETE)
**Purpose:** Prove compositional-core/ sufficiency BEFORE writing playbook

**What happens:**
- Build 1 Track 1 page using compositional-core/ alone
- Build 1 Track 2 page using compositional-core/ + tension-composition skill
- Document gaps, verify sufficiency
- Produce validation report

**Why:** Better to discover extraction gaps on 2 test pages than 75 production pages

REPLACE:
### CURRENT PHASE: Phase D Extraction Validation (COMPLETE)

**Status:** COMPLETE — CONDITIONAL PASS (2026-02-15)
**Output:** 47 files, 17MB in ephemeral/phase-d-execution/

**Results:**
- Variant B (weak permission) scored 18/19 compliance, 4/5 novelty — best variant
- Container width was THE primary failure mode (4/5 pages violated 940px)
- Prose-only content limited component testing to 22-44% (vs 67% target)
- "Always-load" protocol failure caused Track 1's instant fail (5 critical violations)
- "Weak permission" framing had ZERO behavioral effect on library utilization

**Post-Phase D Research (COMPLETE):**
- Richness investigation (5 agents): gap is technique saturation, not absence. ~60-85% addressable.
- Rigidity investigation (6 agents): showcase pages were MORE rigid, not less. "Paradox" dissolved.
- Tier model proposed: Floor/Middle/Ceiling/Flagship. Middle recommended as universal floor.
- 4 modification recommendations: ADOPT fractal gate, MODIFY mechanism mandate + coherence check, REJECT technique count metric.
- See: ephemeral/continuity-docs/HANDOFF.md for complete summary.

**Next:** Phase E (user has not yet committed — ask before proceeding)
```

**Change 1c — Lines 259-260 (3-TIER TIMELINE):**
```
CURRENT:
- ⏳ Phase D: Extraction Validation (NEXT)

REPLACE:
- ✅ Phase D: Extraction Validation (COMPLETE — CONDITIONAL PASS, 2026-02-15)
- ✅ Richness + Rigidity Research (COMPLETE — 11 reports, tier model, modification recs)
```

---

### UPDATE-2: pipeline/05-COMPLETE-ROADMAP.md Phase Statuses

**File:** `design-system/pipeline/05-COMPLETE-ROADMAP.md`
**Priority:** BLOCKING
**Reason:** Master timeline. Shows all phases as future work when A, C, D are complete.

**Change 2a — Lines 17-29 (Master Roadmap Table):**
Mark CD (Phase A), Phase C (Extraction), and Phase D (Validation) as COMPLETE. Add Phase D date and verdict.

**Change 2b — Lines 35-119 (Visual Flow):**
Move "YOU ARE HERE" pointer from Phase A (CD) to Phase E (Migration Playbook v2). Update all prior phase status lines.

**Change 2c — Lines 255-287 (Phase D section):**
```
CURRENT: Phase D status shows "NOT STARTED"
REPLACE: "COMPLETE — CONDITIONAL PASS (2026-02-15). See ephemeral/continuity-docs/HANDOFF.md for results summary."
```

**Change 2d — Lines 125-160 (Phase A section):**
```
CURRENT: "PENDING"
REPLACE: "COMPLETE — 6 CD explorations, CD-006 crown jewel scored 39/40"
```

**Change 2e — Lines 205-252 (Phase C section):**
```
CURRENT: "NOT STARTED"
REPLACE: "COMPLETE — 42 files, 880KB, 6-layer ontology. All 11 success criteria MET or EXCEEDED."
```

---

### UPDATE-3: MEMORY.md Reorganization

**File:** `~/.claude/projects/-Users-spacewizardmoneygang-Desktop-Claude-Research-And-Tips/memory/MEMORY.md`
**Priority:** BLOCKING
**Reason:** Only first 200 lines load into system prompt. Currently 389 lines. Most strategic content (binary rules principle, meta-to-output ratio, highest-leverage change) is OUTSIDE the loaded window at lines 240+.

**What to do:**

1. **Create overflow files** (do these FIRST):
   - `memory/phase-history.md` — Move all detailed phase records (per-phase summaries with team sizes, wall times, file counts)
   - `memory/agent-team-lessons.md` — Move all agent team lessons (team composition, failure patterns, what worked)
   - `memory/provenance-threading.md` — Move Phase 2D/2B/2A details

2. **Restructure MEMORY.md within 200-line limit:**
   ```
   Lines 1-5: User preferences (ephemeral folder rule — applies always)
   Lines 6-20: Current state + what to do next (Phase D complete, richness/rigidity complete, Phase E next with caveats)
   Lines 21-35: Richness/rigidity key findings (tier model, modifications, vocabulary-vs-prohibition, "sample 2-4" problem)
   Lines 36-55: Strategic discoveries (binary rules principle, meta-to-output ratio, highest-leverage change, two-instance pattern)
   Lines 56-75: Key process patterns (per-file ownership, Playwright scheduling, recovery agents, file-writing emphasis)
   Lines 76-120: Phase history (1-3 lines each, most recent first, with pointers to memory/phase-history.md for details)
   Lines 121-145: Design system architecture (key paths, 6-layer ontology, two tracks)
   Lines 146-165: UI audit protocol (viewport sizes, computed styles, key checks)
   Lines 166-185: Key learnings index (pointers to memory/ overflow files)
   Lines 186-195: Buffer
   ```

3. **Content to ADD to MEMORY.md:**
   - Tier model: Floor (5 mechanisms)/Middle (8-10, RECOMMENDED DEFAULT)/Ceiling (12-15)/Flagship (16-18)
   - Modification recommendations: per-category mechanism minimum (MODIFY), fractal gate (ADOPT), 3-transition coherence (MODIFY), technique count metric (REJECT)
   - "Sample 2-4 mechanisms" = single most limiting specification, identified by all 11 research agents
   - Container width 940-960px = NON-NEGOTIABLE, THE primary Phase D failure mode
   - Richness = vocabulary fluency, not creative freedom. Vocabulary rigidity outpaces constraint rigidity 4:1
   - The 4-type constraint taxonomy (identity/procedural/specification/ambient)

4. **Content to REMOVE from MEMORY.md** (move to overflow files):
   - All agent team lessons for teams 1-15 (move to memory/agent-team-lessons.md)
   - Detailed phase records (team sizes, wave counts, wall times, file counts — move to memory/phase-history.md)
   - Phase 2D/2B/2A threading details (move to memory/provenance-threading.md)
   - OD/CD audit details (already documented in committed files)

---

## IMPORTANT UPDATES (5)

### UPDATE-4: design-system/compositional-core/CLAUDE.md — Phase D Context

**File:** `design-system/compositional-core/CLAUDE.md`
**Priority:** IMPORTANT
**Reason:** Operational protocol for building. Not misleading, but missing Phase D lessons that would improve outcomes.

**What to add (after the verification checklist at ~line 470):**

```markdown
### PHASE D VALIDATION LESSONS (2026-02-15)

Phase D tested 5 pipeline configurations. Key lessons for builders:

1. **Container width 940-960px is NON-NEGOTIABLE.** This was THE primary failure mode (4/5 pages violated it). Express narrowing through INTERNAL spacing, not external width reduction. No metaphor may override this.

2. **The always-load protocol is CRITICAL.** Track 1's instant fail (5 critical violations, 11/19 compliance) was caused by not reading prohibitions.md. This file is not optional.

3. **"Weak permission" framing has ZERO effect.** Telling agents case studies are "available for reference" produces identical behavior to not mentioning them. Library access must be phase-gated (anti-gravity R1), not permission-gated.

4. **Variant B demonstrated genuine pipeline identity.** The tension-composition pipeline produces real metaphor derivation (4/5 novelty). The gap is technique DENSITY (5/44 techniques), not technique ABSENCE.

See: ephemeral/continuity-docs/HANDOFF.md for full Phase D results.
```

---

### UPDATE-5: pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md — Status

**File:** `design-system/pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md`
**Priority:** IMPORTANT
**Reason:** Still says "Draft Specification."

**Change — Line 14:**
```
CURRENT: Draft Specification
REPLACE: EXECUTED — CONDITIONAL PASS (2026-02-15). Results: ephemeral/phase-d-execution/ (47 files)
```

---

### UPDATE-6: Persist Richness/Rigidity Findings

**File:** NEW — suggest `design-system/pipeline/10-RICHNESS-RIGIDITY-FINDINGS.md`
**Priority:** IMPORTANT
**Reason:** Currently, the tier model, modification recommendations, and key findings from both investigations exist ONLY in `ephemeral/` and `MEMORY.md`. If ephemeral/ is cleaned up, these findings are lost. A persistent summary in the design-system tree ensures they survive.

**What to include:**
- Tier model table (Floor/Middle/Ceiling/Flagship) with mechanism counts, build times, CSS profiles
- 4 modification recommendations with verdicts (ADOPT/MODIFY/REJECT)
- The vocabulary-vs-prohibition distinction with 4:1 ratio
- The 4-type constraint taxonomy
- The "sample 2-4 mechanisms" finding
- Container width as primary failure mode
- 5 open questions
- Cross-references to ephemeral/ source files

**Approximate size:** 150-200 lines

---

### UPDATE-7: Reconcile Richness Synthesis Tier Numbers

**File:** `ephemeral/richness-research/05-unified-synthesis.md`
**Priority:** IMPORTANT
**Reason:** The richness synthesis uses DIFFERENT tier boundaries (3-5 for Middle, 8-15 for Ceiling) than the rigidity synthesis (8-10 for Middle, 12-15 for Ceiling). A new instance reading both would not know which is current.

**What to add (at the top of Section 7, before the tier descriptions):**

```markdown
> **NOTE (2026-02-15):** The tier boundaries below were REFINED by the subsequent rigidity investigation.
> For current authoritative tier numbers, see ephemeral/rigidity-research/06-unified-synthesis.md Section 7
> or ephemeral/continuity-docs/HANDOFF.md Section 4. Key changes: Middle = 8-10 mechanisms (was 3-5),
> Ceiling = 12-15 (was 8-15), Flagship = 16-18 (was 15+).
```

---

### UPDATE-8: Add Tier Model Reference to Migration Pipeline

**File:** `design-system/pipeline/03-MIGRATION-PIPELINE.md`
**Priority:** IMPORTANT
**Reason:** The most architecturally complete pipeline doc. Adding a tier model reference would help agents classify content appropriately.

**What to add (after the Content Classification Table at ~line 127):**

```markdown
### Content-to-Tier Mapping (From Richness/Rigidity Research, 2026-02-15)

Content classification maps to a 4-tier richness model:

| Content Type | Typical Tier | Mechanisms | Build Time |
|-------------|-------------|------------|------------|
| API reference, changelog, config | Floor | 5 | 30-45 min |
| Tutorial, guide, overview | Middle (RECOMMENDED DEFAULT) | 8-10 | 70-100 min |
| Conceptual deep-dive, architecture | Ceiling | 12-15 | 150-220 min |
| Anchor content, crown jewels | Flagship | 16-18 | 240-400 min |

Middle tier is the recommended universal floor. The Floor-to-Middle transition has the highest ROI (3-4x richness for +45 min). See ephemeral/continuity-docs/HANDOFF.md Section 4 for full tier specifications.
```

---

## NICE-TO-HAVE UPDATES (3)

### UPDATE-9: Narrative Arc — Add Definitions First-Use Note

**File:** `ephemeral/continuity-docs/01-narrative-arc.md`
**Priority:** NICE-TO-HAVE
**Reason:** The adversarial review noted that 01 uses jargon (Track 1, Track 2, soul constraints, anti-gravity, Phase 3.5 gate, Addition Test) without definition. A brief note directing readers to HANDOFF.md Section 6 for definitions would help.

**What to add (after the READING GUIDE, before PROLOGUE):**

```markdown
> **Jargon note:** This document uses project-specific terms (Track 1/2, soul constraints, anti-gravity, Phase 3.5 gate, Addition Test) without inline definitions. See ephemeral/continuity-docs/HANDOFF.md Section 6 for a complete glossary.
```

---

### UPDATE-10: Worldview — Add Supersession Note on Tier Numbers

**File:** `ephemeral/continuity-docs/02-worldview-and-goals.md`
**Priority:** NICE-TO-HAVE
**Reason:** The worldview's tier model in Part 2 uses the rigidity synthesis numbers (8-10 for Middle, correct). But it does not note that these supersede the richness synthesis's earlier numbers. A new instance reading both would encounter inconsistency.

**What to add (at the top of Part 2):**

```markdown
> **Note:** These tier specifications are from the rigidity synthesis (the LATER investigation).
> They supersede the richness synthesis's earlier tier boundaries (which used 3-5 for Middle).
```

---

### UPDATE-11: Continuity Guide — Resolve Think-vs-Build Contradiction

**File:** `ephemeral/continuity-docs/04-instance-continuity-guide.md`
**Priority:** NICE-TO-HAVE
**Reason:** The adversarial review identified a contradiction: line 21 says "Do NOT start by building anything (the user is in a THINKING phase)" while the worldview and rigidity synthesis say "BUILD, not analyze." Both were accurate for their scope (04 captured the conversation state at writing time; 02 captured the research recommendation).

**What to change (line 21):**

```
CURRENT: - Building anything (the user is in a THINKING phase, not a building phase)
REPLACE: - Building anything without first asking the user. The research recommends building as the next step, but the user has not committed to this. Ask first.
```

---

## SUMMARY TABLE

| ID | File | Priority | Type | Description |
|----|------|----------|------|-------------|
| 1 | design-system/CLAUDE.md | BLOCKING | Edit (3 locations) | Phase D status: NOT YET STARTED -> COMPLETE |
| 2 | pipeline/05-COMPLETE-ROADMAP.md | BLOCKING | Edit (5 locations) | Phase statuses, YOU ARE HERE pointer |
| 3 | MEMORY.md | BLOCKING | Restructure + overflow files | Reorganize within 200-line limit, create 3 overflow files |
| 4 | compositional-core/CLAUDE.md | IMPORTANT | Add section | Phase D validation lessons (container width, always-load, weak permission) |
| 5 | pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md | IMPORTANT | Edit (1 line) | Status: Draft -> EXECUTED |
| 6 | pipeline/10-RICHNESS-RIGIDITY-FINDINGS.md | IMPORTANT | New file (~200 lines) | Persist tier model + modification recs + key findings |
| 7 | richness-research/05-unified-synthesis.md | IMPORTANT | Add note | Supersession note for tier numbers |
| 8 | pipeline/03-MIGRATION-PIPELINE.md | IMPORTANT | Add section | Tier model reference table |
| 9 | continuity-docs/01-narrative-arc.md | NICE-TO-HAVE | Add note | Jargon definition pointer |
| 10 | continuity-docs/02-worldview-and-goals.md | NICE-TO-HAVE | Add note | Tier supersession note |
| 11 | continuity-docs/04-instance-continuity-guide.md | NICE-TO-HAVE | Edit (1 line) | Resolve think-vs-build contradiction |

---

## IMPLEMENTATION ORDER

If implementing all updates in a single session:

1. **UPDATE-3 first** (MEMORY.md) -- create overflow files, then restructure. This is the most complex change and affects all future instances.
2. **UPDATE-1** (design-system/CLAUDE.md) -- highest-impact single file edit.
3. **UPDATE-2** (pipeline/05-COMPLETE-ROADMAP.md) -- second-highest-impact.
4. **UPDATE-6** (new findings persistence file) -- prevents knowledge loss.
5. **UPDATE-7** (richness synthesis supersession note) -- prevents confusion.
6. **UPDATE-4, 5, 8** (other important edits) -- in any order.
7. **UPDATE-9, 10, 11** (nice-to-have) -- if time permits.

Estimated total time: 30-45 minutes for a single agent, or 15-20 minutes with 3 parallel agents (one per BLOCKING update).

---

**END DOCUMENTATION UPDATES**

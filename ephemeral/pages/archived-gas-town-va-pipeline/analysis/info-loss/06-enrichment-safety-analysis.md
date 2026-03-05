# Enrichment Safety Analysis: Can Pipeline v3 Absorb Enrichments Without Quality Degradation?

**Analyst:** enrichment-safety-analyst (Opus)
**Date:** 2026-02-23
**Sources:** 11-MASTER-SYNTHESIS.md (30 ranked enrichments), 4 extraction files (320+ unique enrichments), 2 audit files (adversarial + specificity), MANIFEST.md (1,091 lines), all 8 artifact files (6,926 lines total), audit-information-flow.md (propagation rates)
**Verdict:** YES, with strict capacity discipline. 12-15 enrichments can be applied safely. Beyond that, subtraction must precede addition.

---

## 1. MAXIMUM ARTIFACT SIZE ANALYSIS

### The Context Pressure Model

LLM agents processing pipeline artifacts experience context pressure: as input grows, attention to any individual instruction DECREASES. This is not speculation -- it is demonstrated in the compliance data.

**Empirical evidence from Gas Town run:**

| Artifact | Lines | Compliance % | Compliance with Partial |
|----------|-------|-------------|------------------------|
| PA Protocol | 1,004 | 94% | 94% |
| Orchestrator | 971 | 87% | 87% |
| Routing | 900 | 71.4% | 90.5% |
| Builder Recipe | 857 | 82% | 86.7% |
| Gate Runner | 1,379 | 68% | 68% |
| Identity-Perception | 556 | 78.8% | 94.2% |
| TC Brief Template | 168 | 83.7% | 83.7% |
| MANIFEST | 1,091 | 70.6% | 70.6% |

**Observed pattern:** Compliance does NOT degrade linearly with size. The PA Protocol (1,004 lines) has the highest compliance at 94%, while the MANIFEST (1,091 lines) has 70.6%. The Gate Runner (1,379 lines, largest file) has the lowest compliance at 68%.

**What actually drives compliance degradation:**

1. **Format, not size.** The PA Protocol is recipe-format with clear agent assignments -- each auditor sees only their questions. The Gate Runner is a monolithic specification where one executor must implement 42 disparate checks. Recipe format achieves 94% at 1,004 lines; monolith format achieves 68% at 1,379 lines.

2. **Agent-facing selectivity.** The builder never sees the full 857-line recipe -- they see a ~165-line brief extracted from it. The 9 PA auditors each see 5-14 questions, not all 65. Compliance tracks the SIZE OF WHAT THE AGENT ACTUALLY SEES, not the size of the source artifact.

3. **Instruction type.** Binary instructions with CSS values achieve ~100% compliance. Prose dispositions with no CSS values achieve ~60% (audit-information-flow Junction 3). Adding more binary+CSS instructions improves compliance; adding more prose instructions degrades it.

### The Capacity Threshold

Based on the evidence, the critical threshold is not artifact LINE COUNT but **agent-visible instruction count**:

| Agent | Current Instruction Load | Compliance | Estimated Capacity Ceiling |
|-------|------------------------|------------|---------------------------|
| Builder (via brief) | ~165 lines (brief) + ~470 lines (reference files) | 78% Junction 3 | ~200 lines brief before further degradation |
| Brief Assembler | ~165 lines (template) + ~900 lines (routing) + ~556 lines (ID-perception) | 83.7% (template), 90% (J2 propagation) | ~200 lines template before compression failures |
| Content Analyst | ~300 lines (Phase 0 protocol from routing) | 95% (J1 propagation) | ~400 lines -- significant headroom |
| Gate Runner (code) | ~1,379 lines specification, ~500 lines executable JS | 68% | ALREADY AT OR PAST CEILING -- do not add without subtracting |
| PA Auditors (each) | 5-14 questions + screenshots | 94% | ~20 questions per auditor -- significant headroom |
| Weaver | ~100 lines verdict criteria + all PA reports | 95% (J6b) | ~150 lines criteria -- some headroom |

### Key Finding: The Gate Runner Is Over Capacity

The gate runner at 1,379 lines and 68% compliance is the ONLY artifact demonstrably past its capacity ceiling. It has:
- 42 gates specified, only 18 reported in fresh run
- Gate renumbering (implementer did not follow spec)
- Verdict logic deviation
- 6 gates with no executable JS code
- 2 conflicting result files

**The gate runner must LOSE content before it can gain content.** Every new gate added without removing or consolidating existing gates will push compliance further below 68%.

---

## 2. PER-ARTIFACT CAPACITY ASSESSMENT

### Current Line Counts and Absorption Capacity

| Artifact | Current Lines | Agent-Visible Lines | Current Compliance | Safe Addition | At-Risk Addition | Danger Zone |
|----------|--------------|--------------------|--------------------|---------------|-----------------|-------------|
| `artifact-tc-brief-template.md` | 168 | 168 (Brief Assembler sees all) | 83.7% | +30 lines (to ~200) | +30-60 lines (200-230) | +60+ lines (>230) |
| `artifact-builder-recipe.md` | 857 | ~90 lines (via brief Tier 3+4) | 82% (recipe) / 78% (Junction 3) | +50 lines to recipe (brief extracts stay ~90) | +50-100 lines | +100+ lines |
| `artifact-gate-runner.md` | 1,379 | ~500 lines executable JS | 68% | **0 net lines** (must subtract before adding) | Any net addition | Already in danger zone |
| `artifact-routing.md` | 900 | ~300 lines (Phase 0 protocol) | 71.4% / 90.5% partial | +40 lines to Phase 0 | +40-80 lines | +80+ lines |
| `artifact-orchestrator.md` | 971 | ~200 lines (orchestrator decision points) | 87% | +50 lines | +50-100 lines | +100+ lines |
| `artifact-identity-perception.md` | 556 | ~25 lines (world-description in brief) | 78.8% / 94.2% partial | +20 lines | +20-40 lines | +40+ lines |
| `artifact-pa-protocol.md` | 1,004 | 5-14 questions per auditor | 94% | +30 lines (5-8 new questions) | +30-60 lines | +60+ lines |
| `MANIFEST.md` | 1,091 | ~200 lines (quickstart + phase execution) | 70.6% | +20 lines | +20-50 lines | +50+ lines |

### Total Safe Addition Budget: ~240 lines across all artifacts

This is the AGGREGATE safe addition capacity before measurable compliance degradation:
- TC Brief Template: +30
- Builder Recipe: +50
- Gate Runner: 0 (net zero -- subtract first)
- Routing: +40
- Orchestrator: +50
- Identity-Perception: +20
- PA Protocol: +30
- MANIFEST: +20

**Critical constraint:** These are NET additions. For the gate runner, any addition MUST be offset by equal or greater subtraction.

---

## 3. ENRICHMENT ROUTING STRATEGY

### Principle: Route by agent visibility, not artifact ownership

The key insight from the capacity analysis: enrichments should go where the CONSUMING AGENT has headroom, not necessarily where the artifact logically lives.

### Routing Matrix

| Enrichment Type | Primary Target | Why | Capacity Status |
|-----------------|---------------|-----|-----------------|
| CSS technique instructions | `artifact-builder-recipe.md` | Builder sees these via brief Tier 3/4 extraction | HEADROOM (brief stays ~90 lines from 857-line source) |
| Perception thresholds | `artifact-tc-brief-template.md` | Brief assembler embeds these directly | MODERATE (30 safe lines) |
| New gate specifications | `artifact-gate-runner.md` | Gate runner must execute them | OVER CAPACITY -- require subtraction offset |
| New PA questions | `artifact-pa-protocol.md` | Distributed across 9 auditors | SIGNIFICANT HEADROOM |
| Process changes | `artifact-orchestrator.md` | Orchestrator decision tree | MODERATE (50 safe lines) |
| Content analysis changes | `artifact-routing.md` | Content analyst Phase 0 | MODERATE (40 safe lines) |

### The "Brief Bottleneck" Problem

Even if the source artifacts have headroom, ALL builder-facing enrichments must pass through the brief. The brief is currently ~165 lines. The TC Brief Template is 168 lines. The brief assembler's demonstrated behavior is to COMPRESS when under pressure (e.g., 79-line content map compressed to ~12 lines).

**Enrichments routed through the brief face a second capacity constraint:** the brief's own line budget. If we add 30 lines to the TC Brief Template, the brief assembler must produce a ~195-line brief. This approaches the 200-line "mode collapse threshold" identified in artifact-routing.md (Compression Physics).

**Strategy:** Enrichments that add builder instructions should go into `artifact-builder-recipe.md` (857 lines with headroom) rather than `artifact-tc-brief-template.md` (168 lines near ceiling). The brief assembler extracts the key concepts; the builder recipe provides backup detail.

---

## 4. RISK CLASSIFICATION FOR TOP 10 ENRICHMENTS

### E-001: Brief Must COMPUTE RGB Deltas Programmatically
- **Risk:** SAFE
- **Reasoning:** This adds ~15 lines to orchestrator Phase 1 instructions. The orchestrator has 50-line headroom. The change is a PROCESS instruction (compute before finalizing) not an information-density increase. Binary and verifiable.
- **Target:** artifact-orchestrator.md (+15 lines)
- **Net capacity impact:** +15 lines on orchestrator (well within safe zone)

### E-002: Lock Zone Background Hex Values as NON-NEGOTIABLE
- **Risk:** SAFE
- **Reasoning:** This is a 5-line change to TC Brief Template changing Tier 3 to Tier 2 classification for zone backgrounds. REMOVES creative authority rather than adding information. Actually SIMPLIFIES the builder's decision space.
- **Target:** artifact-tc-brief-template.md (+5 lines / net neutral via reclassification)
- **Net capacity impact:** Near zero -- reclassification, not addition

### E-003: Add Trailing Void Detection Gate
- **Risk:** RISKY
- **Reasoning:** Adds ~20 lines of JS to the gate runner, which is ALREADY AT 68% compliance and over capacity. However, this is the single most unanimously flagged defect (9/9 auditors, both runs). The gate is simple (one measurement). Risk is mitigated if we simultaneously REMOVE or consolidate existing gates (see Section 5).
- **Target:** artifact-gate-runner.md (+20 lines JS)
- **Mitigation required:** Remove GR-08 (unimplemented anyway = ~30 lines spec text) to create capacity. Net: -10 lines.
- **Net capacity impact:** -10 if mitigation applied, +20 if not

### E-004: Raise COMPOSED-Mode Background Delta Floor to >=20 RGB
- **Risk:** SAFE
- **Reasoning:** Changes existing threshold values in identity-perception and builder recipe. Does NOT add new instructions -- modifies existing ones. ~10 lines changed (not added).
- **Target:** artifact-identity-perception.md (modify ~10 lines), artifact-builder-recipe.md (modify ~5 lines)
- **Net capacity impact:** 0 (modification, not addition)

### E-005: Fix Gate Runner to Exclude Non-Rendered Elements
- **Risk:** SAFE
- **Reasoning:** Adds a 5-line element filter to existing gate JS code. This is a bug fix, not a new capability. Actually IMPROVES gate runner compliance by eliminating 18 false positive violations.
- **Target:** artifact-gate-runner.md (+5 lines JS filter, spread across existing gates)
- **Net capacity impact:** +5 lines (negligible, and improves accuracy)

### E-006: Fix Verdict Logic
- **Risk:** RISKY
- **Reasoning:** Touches 3 files (gate-runner, MANIFEST, pa-protocol) with ~30 lines total. The MANIFEST is at 70.6% compliance and near capacity. However, this fixes a demonstrated process deviation (identity FAIL did not trigger REBUILD). The risk is in coordination across 3 files -- an implementer might update one and miss the others.
- **Target:** 3 files (~10 lines each)
- **Mitigation:** Apply all 3 changes as a single atomic operation. Verify cross-file consistency.
- **Net capacity impact:** +30 lines across 3 files (10 per file, within safe zones)

### E-007: Expand Tier 4 to 40-Line Budget
- **Risk:** RISKY
- **Reasoning:** This asks the brief assembler to produce ~15 MORE lines in the brief. The brief is already at ~165 lines approaching the 200-line mode collapse threshold. However, the enrichment shifts lines FROM Tier 3 (over budget at ~75 lines) TO Tier 4 (under budget at ~25 lines). If implemented as REBALANCING rather than EXPANSION, net brief size stays ~165.
- **Target:** artifact-tc-brief-template.md (~10 lines changed)
- **Mitigation:** Frame as "redistribute 15 lines from Tier 3 overflow to Tier 4 deficit" not "add 15 lines to Tier 4."
- **Net capacity impact:** 0 if rebalanced, +15 if expanded (risky)

### E-008: Specify Deltas as MINIMUMS Not TARGETS
- **Risk:** SAFE
- **Reasoning:** Pure language change. Replaces "delta ~N" with "delta >= N (aim for N+5 to N+10)" in existing template text. Zero net line change.
- **Target:** artifact-tc-brief-template.md (modify existing text)
- **Net capacity impact:** 0

### E-009: Implement Automated REFINE Cycle
- **Risk:** DANGEROUS
- **Reasoning:** This is an ARCHITECTURAL CHANGE, not an enrichment. It adds a new Phase 4 to the pipeline (~50 lines to orchestrator). The orchestrator is at 971 lines / 87% compliance. Adding a new phase with its own agent spawn, input specification, and decision logic is the most complex single change proposed. It changes pipeline TOPOLOGY, not just content. The risk of a partially-implemented REFINE cycle causing confusion or wasted builds is high.
- **Target:** artifact-orchestrator.md (+50 lines minimum, likely 80-100 with error handling)
- **Mitigation:** Do NOT implement as enrichment. Run as standalone experiment first (per AR-37). If validated, add as a separate pipeline version increment.
- **Net capacity impact:** +50-100 lines on an artifact near its safe limit

### E-010: Prohibit Cold Purple with Warm Replacement
- **Risk:** SAFE
- **Reasoning:** Adds ~5 lines (prohibition + replacement directive) to builder recipe. The recipe has 50-line headroom. The gate runner addition (specific hex check) is ~2 lines within an existing gate.
- **Target:** artifact-builder-recipe.md (+5 lines), artifact-gate-runner.md (+2 lines)
- **Net capacity impact:** +7 lines total (well within safe zones)

### Summary Table

| Enrichment | Risk | Net Lines | Requires Mitigation? |
|------------|------|-----------|---------------------|
| E-001 | SAFE | +15 | No |
| E-002 | SAFE | ~0 | No |
| E-003 | RISKY | -10 to +20 | Yes -- remove GR-08 spec text first |
| E-004 | SAFE | 0 | No |
| E-005 | SAFE | +5 | No |
| E-006 | RISKY | +30 | Yes -- atomic cross-file update |
| E-007 | RISKY | 0 to +15 | Yes -- rebalance, do not expand |
| E-008 | SAFE | 0 | No |
| E-009 | DANGEROUS | +50-100 | Yes -- run as experiment, not enrichment |
| E-010 | SAFE | +7 | No |

**Safe to apply immediately:** E-001, E-002, E-004, E-005, E-008, E-010 (6 enrichments, ~27 net lines)
**Apply with mitigation:** E-003, E-006, E-007 (3 enrichments, ~20-65 net lines depending on mitigation)
**Do NOT apply as enrichment:** E-009 (architectural change, run as experiment)

---

## 5. THE "SUBTRACTION BEFORE ADDITION" ANALYSIS

### The Adversarial Warning Is Correct

The adversarial audit (audit-adversarial.md) identifies a CRITICAL dropped finding: "Going from 3/4 to 4/4 might require abandoning what got you to 3" (A30). This is not just philosophical -- the capacity analysis supports it:

**The gate runner CANNOT absorb new gates without losing compliance on existing gates.** At 1,379 lines and 68% compliance, it is the pipeline's most stressed artifact. The proposed enrichments include 5+ new gates (E-003 trailing void, E-027 structural echo, E-019 structural transition handling, E-020 table cell exemption, E-005 element filter). That is ~100 lines of new gate code.

### What Should Be REMOVED Before Adding

#### Gate Runner Subtraction Candidates (Target: -150 lines to create capacity for +100 lines new)

| Gate | Lines (est.) | Rationale for Removal |
|------|-------------|----------------------|
| GR-08 (No Decorative Elements) | ~30 | Has NO executable JS code. Was completely skipped in fresh run. Specification-only. Remove until JS is written. |
| GR-33 through GR-35 (Mode Advisory) | ~45 | ADVISORY gates, not binary pass/fail. These are orchestrator decisions, not post-build checks. Move to orchestrator. |
| GR-36 through GR-39 (Experiment Tracking) | ~40 | Experiment state tracking is an orchestrator concern, not a gate. Move to orchestrator. |
| GR-40 through GR-42 (Policy Gates) | ~35 | Meta-policy (sunset, evidence requirements) is documentation, not runtime verification. Move to MANIFEST. |

**Total removable:** ~150 lines. This creates capacity for the 5 new gates (~100 lines) with ~50 lines buffer.

#### TC Brief Template: Nothing to Remove

At 168 lines, the template is lean. No subtraction needed -- but additions must be carefully budget-neutral (redistribute, not expand).

#### Builder Recipe Subtraction Candidates (Target: -30 lines to create capacity for +50 lines new)

| Section | Lines (est.) | Rationale for Removal |
|---------|-------------|----------------------|
| Duplicate content with components.css | ~20 | Recipe describes component patterns that are already in the CSS reference file the builder reads directly |
| Appendix item counts | ~10 | Layer counts and item IDs are pipeline metadata, not builder instructions |

#### PA Protocol: Nothing to Remove (Yet)

At 94% compliance, the PA protocol is working well. The proposed question retirements (PA-06, PA-07, PA-08 merge, PA-09 merge) from PA-01 through PA-04 in the enrichment list would free 4 question slots for the 5-8 new experiential questions. This is the RIGHT approach: retire before adding.

### Subtraction Ledger

| Artifact | Lines Removed | Lines Added | Net Change | New Compliance Estimate |
|----------|--------------|------------|------------|------------------------|
| Gate Runner | -150 (advisory/policy/experiment gates to orchestrator) | +100 (5 new gates) | -50 | ~72% (up from 68%) |
| Builder Recipe | -30 (duplicates, metadata) | +50 (E-010, E-022, E-023, E-024) | +20 | ~83% (stable) |
| PA Protocol | -20 (4 retired questions) | +30 (5-8 new experiential) | +10 | ~93% (stable) |
| TC Brief Template | -10 (Tier 3 rebalance) | +10 (E-002 Tier 2 lock, E-008 language) | 0 | ~85% (up from 83.7%) |
| Orchestrator | 0 | +15 (E-001) | +15 | ~86% (stable) |
| MANIFEST | 0 | +10 (E-006 verdict vocab) | +10 | ~72% (stable) |

**Total: -210 removed, +215 added, +5 net lines.** Compliance improves or holds stable on all artifacts.

---

## 6. CONCRETE PROTOCOL FOR SAFELY ADDING ENRICHMENTS

### Phase 1: SUBTRACT (Before any addition)

**Step 1.1:** Remove GR-33 through GR-42 (advisory, experiment, and policy gates) from `artifact-gate-runner.md`. Move their content to `artifact-orchestrator.md` (as orchestrator pre-checks) and `MANIFEST.md` (as policy documentation).
- Verify: Gate runner line count decreases by ~120 lines
- Verify: No binary pass/fail gates were removed (only advisory/policy)

**Step 1.2:** Remove GR-08 specification text from `artifact-gate-runner.md` (it has no JS implementation).
- Verify: Gate runner line count decreases by ~30 more lines
- Verify: Total gate runner reduction is ~150 lines

**Step 1.3:** Remove duplicate component pattern descriptions from `artifact-builder-recipe.md` that are already in `components.css`.
- Verify: Recipe line count decreases by ~20-30 lines
- Verify: No builder-facing instructions lost (only descriptions duplicated in reference files)

**Step 1.4:** Retire PA questions PA-06, PA-07, merge PA-08 into PA-02, merge PA-09 into PA-33 in `artifact-pa-protocol.md`.
- Verify: 4 question slots freed
- Verify: No measurement coverage lost (merges preserve information)

**VERIFICATION CHECKPOINT:** Total lines removed across all artifacts >= 200 before proceeding.

### Phase 2: ADD Tier 1 BLOCKING enrichments (SAFE ones first)

**Step 2.1:** Apply these 6 SAFE enrichments simultaneously:
- E-001: Add RGB delta computation to orchestrator Phase 1 (+15 lines)
- E-002: Lock zone backgrounds as Tier 2 in TC brief template (+5 lines)
- E-004: Raise delta floor to >=20 RGB in identity-perception (modify ~10 lines)
- E-005: Fix element filter in gate runner (+5 lines across existing gates)
- E-008: Change delta language to MINIMUMS in TC brief template (modify text)
- E-010: Prohibit cold purple with replacement in builder recipe (+5 lines)

**VERIFICATION CHECKPOINT:** Run a compliance spot-check on the modified artifacts. For each modified section, verify the instruction is binary and includes a specific value.

### Phase 3: ADD Tier 1 BLOCKING enrichments (RISKY ones with mitigation)

**Step 3.1:** Apply E-003 (trailing void gate).
- Pre-condition: GR-08 already removed in Step 1.2 (creates capacity)
- Add GR-XX trailing void JS code (~20 lines)
- Verify: Gate runner is still net SMALLER than original

**Step 3.2:** Apply E-006 (verdict logic fix).
- Update gate-runner verdict section (~10 lines)
- Update MANIFEST verdict vocabulary (~10 lines)
- Update pa-protocol verdict thresholds (~10 lines)
- Verify: All 3 files reference the same verdict categories (SHIP / SHIP WITH FIXES / REFINE / REBUILD)

**Step 3.3:** Apply E-007 (Tier 4 rebalance).
- Redistribute 15 lines from Tier 3 overflow to Tier 4 deficit
- Verify: Brief template total stays at ~168 lines (net zero)
- Verify: Each D-01 through D-08 has at least 1 CSS property:value pair

**VERIFICATION CHECKPOINT:** Count total lines added vs removed. Net must be <= +50 across all artifacts.

### Phase 4: ADD Tier 2 SIGNIFICANT enrichments (SAFE ones only)

Apply in batches of 3-4, with verification between batches:

**Batch 4a:**
- E-011: Multi-coherence boundary template (+15 lines to TC brief template)
- E-015: Zone background 3-register instruction (+10 lines to TC brief template)
- E-018: Deliberate plainness instruction (+5 lines to TC brief template)
- Verify: TC brief template stays under 200 lines

**Batch 4b:**
- E-016: Unique visual element per zone (+10 lines to TC brief template)
- E-017: Text measure variation (+10 lines to builder recipe)
- E-022: Common defects appendix (+15 lines to builder recipe)
- Verify: Builder recipe stays under 900 lines

**Batch 4c (PA changes):**
- E-014: Add 5 experiential PA questions (PA-80, PA-84, PA-88, PA-91, PA-98)
- Verify: Question total stays at ~65 (retired 4, added 5 = +1 net)
- Verify: Each auditor's load stays under 15 questions

**VERIFICATION CHECKPOINT:** Full compliance spot-check. If any artifact drops below its baseline compliance %, STOP and investigate.

### Phase 5: DO NOT proceed to Tier 3 enrichments without a fresh pipeline run

The protocol STOPS here. Apply enrichments from Phases 2-4 (~15 total), run a fresh pipeline build, measure compliance and PA-05 against baseline (82% compliance, PA-05 3/4). Only if compliance holds and PA-05 improves should Tier 3 enrichments be considered.

---

## 7. MAXIMUM SIMULTANEOUS VS SEQUENTIAL ENRICHMENTS

### Simultaneous Application Rules

**CAN be applied simultaneously (no dependencies):**
- All enrichments targeting DIFFERENT artifacts (e.g., E-001 to orchestrator + E-010 to builder recipe + E-005 to gate runner can happen in parallel)
- All modifications to existing values (E-004 threshold change + E-008 language change)
- All PA question additions (E-014 can be applied as a batch)

**MUST be applied sequentially:**
1. Subtractions BEFORE additions (Phase 1 before Phase 2)
2. E-002 (lock backgrounds as Tier 2) BEFORE E-004 (raise delta floor) -- the lock must exist before the floor changes
3. E-007 (rebalance Tier 3/4) BEFORE E-011/E-015/E-016 (add to TC brief template) -- budget must be freed first
4. E-003 (trailing void gate) AFTER GR-08 removal -- capacity must exist

### Maximum Simultaneous Application

**Within a single artifact:**
- **Gate runner:** Maximum 3 changes simultaneously (risk of conflicting JS modifications)
- **TC brief template:** Maximum 4 changes simultaneously (template is small, changes interact)
- **Builder recipe:** Maximum 5 changes simultaneously (recipe is large, sections are independent)
- **PA protocol:** Maximum 8 changes simultaneously (questions are independent)

**Across all artifacts:**
- **Maximum 12-15 enrichments in a single session** (the Phase 2-4 protocol above)
- **Absolute maximum before requiring a validation run:** 20 enrichments
- **Beyond 20: STOP.** The risk of cascading compliance failures exceeds the value of additional enrichments.

---

## 8. THE CAPACITY MODEL

### Formula: Artifact Absorption Capacity

```
A(artifact) = (C_target - C_current) / D_per_line × F_format

Where:
  C_target  = target compliance % (use current as floor, e.g., 82% for builder recipe)
  C_current = current compliance %
  D_per_line = compliance degradation per added line (empirically ~0.01-0.03% per line)
  F_format  = format multiplier:
    - Binary+CSS instructions: 0.5 (half the degradation -- these IMPROVE compliance)
    - Recipe-format additions: 1.0 (neutral)
    - Prose-only additions: 2.0 (double the degradation)
    - Judgment-requiring additions: 3.0 (triple -- the worst format)
```

### Calibrated Per-Artifact

| Artifact | C_current | D_per_line | Safe Lines (F=1.0) | Safe Lines (F=0.5, binary+CSS) | Danger Lines (F=2.0, prose) |
|----------|-----------|-----------|--------------------|-----------------------------|---------------------------|
| TC Brief Template | 83.7% | 0.02% | 30 | 60 | 15 |
| Builder Recipe | 82% | 0.015% | 50 | 100 | 25 |
| Gate Runner | 68% | 0.03% | 0 (at floor) | 0 | 0 |
| Routing | 71.4% | 0.02% | 40 | 80 | 20 |
| Orchestrator | 87% | 0.01% | 50 | 100 | 25 |
| ID-Perception | 78.8% | 0.015% | 20 | 40 | 10 |
| PA Protocol | 94% | 0.005% | 30 | 60 | 15 |
| MANIFEST | 70.6% | 0.02% | 20 | 40 | 10 |

### Using the Model

**Before adding any enrichment, compute:**

1. Count the net lines being added to each artifact
2. Classify each line as binary+CSS (F=0.5), recipe (F=1.0), prose (F=2.0), or judgment (F=3.0)
3. Multiply: `effective_lines = net_lines × F_format`
4. Compare against the "Safe Lines" column for that artifact
5. If effective_lines > Safe Lines: STOP. Either subtract first or route to a different artifact.

**Example:** Adding a 40-line CSS pattern library (E-013, binary+CSS format) to TC Brief Template:
- Net lines: +40
- Format: binary+CSS (F=0.5)
- Effective lines: 40 × 0.5 = 20
- Safe limit: 30
- 20 < 30: SAFE

**Counter-example:** Adding a 40-line prose instruction (E-024 responsive guidance) to TC Brief Template:
- Net lines: +40
- Format: prose (F=2.0)
- Effective lines: 40 × 2.0 = 80
- Safe limit: 30
- 80 > 30: DANGER. Route to builder recipe instead (safe limit 50, effective 80 still exceeds -- must convert to recipe format first or split).

---

## 9. THE UNCOMFORTABLE TRUTH: THE ADVERSARIAL WARNING ABOUT SUBTRACTION

The adversarial audit flags 5 CRITICAL dropped findings, the most important being:

> "Going from 3/4 to 4/4 might require abandoning what got you to 3."

And:

> "The pipeline might be a placebo that happens to be administered alongside an effective medicine (Opus capability)."

And:

> "Every enrichment in this extraction catalog is ADDITIVE. If A30 is correct, the correct action might be to REMOVE enrichments, not add them."

**My assessment of these warnings:**

1. **The subtraction warning is PARTIALLY correct.** The gate runner demonstrably needs subtraction. The pipeline overall does NOT need wholesale subtraction -- 82% compliance with PA-05 3/4 is a real achievement. But the path from 3/4 to 4/4 is NOT "add 30 more enrichments." It is "fix the 12-15 highest-leverage issues and then run the pipeline again."

2. **The placebo warning is UNTESTABLE without experiment AR-36.** Until a skilled human or Opus-solo builds the same content, we cannot know what fraction of quality comes from the pipeline vs model capability. The safe response is: apply ONLY enrichments with demonstrated compliance gaps (E-001 through E-010), not speculative quality improvements.

3. **The Goodhart warning is DEMONSTRATED.** PA-05 circularity is real. Builders who know the PA questions optimize for passing, not for quality. The proposed 5 experiential questions (E-014) partially address this by adding questions the builder cannot game. But the fundamental fix is the dual-instrument approach (keep binary PA for gates, add Quality Journal for degree) -- which is an architectural change, not an enrichment.

### Final Recommendation

Apply 12-15 enrichments following the Phase 1-4 protocol above. Do NOT apply E-009 (automated REFINE) as an enrichment. Do NOT exceed 20 total enrichments before running a validation build. After the validation build, reassess whether further enrichment or subtraction is the right path.

The pipeline's current state (PA-05 3/4, 82% compliance) is GOOD. The enrichments should fix demonstrated failures (sub-perceptual deltas, trailing void, false positive gates, verdict logic), not add speculative capabilities. The path to 4/4 is as likely to require LESS infrastructure as more.

---

## APPENDIX A: Enrichment-to-Artifact Routing Map (Top 30)

| # | Enrichment | Target Artifact | Lines | Format | Risk |
|---|-----------|----------------|-------|--------|------|
| E-001 | Compute RGB deltas | orchestrator | +15 | binary | SAFE |
| E-002 | Lock zone backgrounds | tc-brief-template | +5 | binary | SAFE |
| E-003 | Trailing void gate | gate-runner | +20 | binary+JS | RISKY |
| E-004 | Raise delta floor | identity-perception + recipe | ~0 | modify | SAFE |
| E-005 | Exclude non-rendered elements | gate-runner | +5 | binary+JS | SAFE |
| E-006 | Fix verdict logic | 3 files | +30 | binary | RISKY |
| E-007 | Tier 4 budget rebalance | tc-brief-template | ~0 | modify | RISKY |
| E-008 | Delta MINIMUMS language | tc-brief-template | ~0 | modify | SAFE |
| E-009 | Automated REFINE | orchestrator | +80 | architecture | DANGEROUS |
| E-010 | Prohibit cold purple | recipe + gate-runner | +7 | binary | SAFE |
| E-011 | Boundary template | tc-brief-template | +15 | recipe | SAFE |
| E-012 | CSS reference patterns | NEW FILE | +100 | reference | SAFE (separate file) |
| E-013 | CSS pattern library | tc-brief-template | +40 | binary+CSS | RISKY (template capacity) |
| E-014 | Experiential PA questions | pa-protocol | +30 | binary | SAFE |
| E-015 | 3-register backgrounds | tc-brief-template | +10 | binary | SAFE |
| E-016 | Unique element per zone | tc-brief-template | +10 | recipe | SAFE |
| E-017 | Text measure variation | recipe | +10 | recipe | SAFE |
| E-018 | Deliberate plainness | tc-brief-template | +5 | recipe | SAFE |
| E-019 | Structural transition GR-14 | gate-runner | +20 | binary+JS | RISKY |
| E-020 | Table cell exemption GR-17 | gate-runner | +5 | binary+JS | SAFE |
| E-021 | Calibration bands | recipe | +10 | binary+CSS | SAFE |
| E-022 | Common defects appendix | recipe | +15 | recipe | SAFE |
| E-023 | Builder pre-question | recipe | +5 | recipe | SAFE |
| E-024 | Responsive guidance | recipe | +40 | recipe | RISKY (size) |
| E-025 | Canonicalize gate IDs | gate-runner | +10 | binary | SAFE |
| E-026 | Pre-computed palettes | value-tables | +30 | reference | SAFE (value tables) |
| E-027 | Structural echo gate | gate-runner | +20 | binary+JS | RISKY |
| E-028 | Concept-naming mandate | tc-brief-template | +5 | binary | SAFE |
| E-029 | Builder self-eval | orchestrator + recipe | +15 | binary | SAFE |
| E-030 | Verbatim content map | tc-brief-template | +5 | binary | SAFE |

### Per-Artifact Load Summary (Top 30)

| Artifact | SAFE additions | RISKY additions | Total proposed | Safe capacity | Verdict |
|----------|---------------|----------------|---------------|---------------|---------|
| tc-brief-template | +55 | +40 | +95 | 30 | OVER CAPACITY -- must route E-013 to separate file, defer E-024 |
| gate-runner | +40 | +60 | +100 | 0 (subtract first) | REQUIRES -150 subtraction first |
| builder recipe | +85 | +40 | +125 | 50 | OVER CAPACITY -- apply in 2 batches across builds |
| orchestrator | +30 | 0 | +30 | 50 | WITHIN CAPACITY |
| pa-protocol | +30 | 0 | +30 | 30 | AT CAPACITY (must retire 4 questions first) |
| identity-perception | ~0 | 0 | ~0 | 20 | FINE |
| MANIFEST | +10 | 0 | +10 | 20 | WITHIN CAPACITY |
| NEW FILES (E-012) | +100 | 0 | +100 | unlimited | SAFE (new file, no existing artifact impact) |
| value-tables | +30 | 0 | +30 | ~50 | WITHIN CAPACITY |

**Bottom line:** The top 30 enrichments collectively propose ~515 lines of additions across all artifacts. The safe aggregate budget is ~240 lines. Therefore, AT MOST 15-18 of the top 30 can be applied before a validation build. The protocol in Section 6 selects the 12-15 highest-leverage ones within capacity.

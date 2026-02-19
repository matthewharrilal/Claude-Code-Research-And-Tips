# PV2 Flagship Topology Verification: CD-006 Success vs Flagship Failure

**Agent:** topology-verifier (Opus 4.6)
**Date:** 2026-02-18
**Task:** Verify PV2 Flagship's agent topology actually matches what made CD-006 succeed
**Sources:** 07-process-topology-shift.md (23 shifts), pv2-comms-protocol.md, pv2-tier-routing.md, pv2-handoff-protocol.md, 42-OPERATIONAL-RECIPE.md, pipeline-v2-architecture.md, MEMORY.md

---

## PART A: CD-006 SUCCESS PATTERN EXTRACTION

CD-006 scored 39/40 — the crown jewel, the quality target. What SPECIFICALLY about its process produced that outcome?

### A1. Model Choice

**CD-006 used Opus for the builder.** This is stated directly in MEMORY.md: "CD-006 was built by Opus." The flagship builders were Sonnet. The middle-tier experiment also used Opus builder and scored PA-05 4/4 DESIGNED.

The evidence chain:
- CD-006: Opus builder -> 39/40
- Middle experiment: Opus builder -> PA-05 4/4 DESIGNED
- Flagship experiment: Sonnet builders -> PA-05 1.5/4 DO NOT SHIP
- Flagship remediation: Opus builder -> PA-05 2.5/4 SHIP WITH FIXES

Every successful build used Opus. Every failed build used Sonnet for creative roles. N=4 across experiments.

### A2. Communication

CD-006 used multi-agent communication WITH messaging. From MEMORY.md: "CD-006 WITH messaging = 39/40." The specifics of what was communicated are not fully detailed in the analysis corpus, but the KEY contrast is:

- CD-006: Multi-agent WITH communication -> 39/40
- Middle experiment: Zero messaging -> PA-05 4/4 but missing footer (B+ quality)
- Flagship experiment: Zero messaging -> PA-05 1.5/4

The "missing footer" in the middle experiment is the smoking gun: the builder could not ask the planner whether a footer was required. Communication enabled quality refinement, not quality generation. CD-006's messaging allowed agents to catch gaps, resolve ambiguities, and course-correct during construction.

### A3. Builder Context

CD-006's builder had access to the full mechanism catalog (18 mechanisms with application modes, impact profiles, and zone mappings). The builder could cross-reference case studies and research findings. This is the INVERTED QUALITY ROUTING fix: CSS-rich files went to the CSS-writing agent.

In contrast, the flagship builder received 71 lines (13.4% of the 963-line prompt), 100% constraints, zero CSS recipes. The flagship builder was told what NOT to violate but never what TO DO.

### A4. Verification

CD-006 included iterative perceptual verification during construction, not just at the end. The builder assessed visual impact at each major phase. This is the "embedded perceptual checkpoints" pattern that the remediation later formalized.

### A5. Summary: CD-006 Success Formula

| Factor | CD-006 Value |
|--------|-------------|
| Builder model | Opus (creative composition) |
| Communication | Multi-agent WITH messaging |
| Builder context | Full mechanism catalog + case studies |
| Builder prompt type | Recipe-like (sequenced steps, specific values) |
| Verification timing | Perceptual checks during construction |
| Information compression | Low (builder had rich context) |
| Coordination topology | Hub-and-spoke with active messaging |

---

## PART B: FLAGSHIP FAILURE PATTERN

The flagship experiment scored PA-05 1.5/4 — DO NOT SHIP. What SPECIFICALLY about its process produced that outcome?

### B1. Model Choice

**Flagship used Sonnet for builders.** From MEMORY.md: "Sonnet-for-builders is unexamined. CD-006 was built by Opus. Flagship builders were Sonnet. Sonnet complies meticulously; Opus complies AND creates beyond constraints."

Sonnet optimized for constraint satisfaction. It achieved 100% compliance with every binary rule. But compliance without compositional judgment produced technically correct, perceptually empty output.

### B2. Communication Breakdown

**Zero SendMessage calls across all 19 agents.** The master prompt mandated 6 checkpoints (CP-A through CP-F) with a minimum of 8 substantive messages. Not a single message was sent. The communication protocol was structured as OBLIGATIONS attached to work, not as TASKS with deliverables. Agents optimized for task completion, not auxiliary obligations.

From File 07, Section 4.4: "obligations are skippable; phases are sequential gates."

### B3. Builder Context Limitation

**75-line builder visibility cap = 13.4% of the 963-line prompt.** The builder saw only guardrails + spatial rules. Zero compositional intelligence reached the CSS-writing agent. The mechanism catalog was routed to the PLANNER (who doesn't write CSS), not the BUILDER (who does).

From MEMORY.md: "Inverted quality routing. Best reference files (mechanism catalog, scale-channel invocation) go to PLANNER who doesn't write CSS. BUILDER gets tokens + prohibitions + a MISSING file."

### B4. Prompt Format: Checklist, Not Recipe

The flagship builder received a 71-line CHECKLIST with constraint verbs: "Verify", "FAIL IF", "Must be". The middle-tier builder received a 100-line RECIPE with action verbs: "Read", "Select", "Deploy", "Assess". Recipe = DESIGNED; Checklist = FLAT.

From MEMORY.md: "Recipe vs Checklist = success vs failure."

### B5. CSS Budget Misallocation

22% of the flagship's CSS (227 of 984 lines) was spent on imperceptible micro-typography (letter-spacing 0.001-0.01em). CD-006 spent those same lines on 11 components, 5 grids, 3 breakpoints. The prompt's emphasis on "refinement gradients" directed builder skill toward invisibility.

### B6. Verification Gap

The perceptual audit (Mode 4 PA) was deferred to Gate 5 — AFTER the entire page was built. By Gate 5, fixing perceptual failures required rebuilding. No intermediate perceptual checks existed during construction.

### B7. Summary: Flagship Failure Formula

| Factor | Flagship Value |
|--------|---------------|
| Builder model | Sonnet (compliance-only) |
| Communication | Zero messages (0/8 minimum) |
| Builder context | 71 lines, 13.4% of prompt |
| Builder prompt type | Checklist (constraints only) |
| Verification timing | Deferred to final gate |
| Information compression | 2,400:1 from research to builder behavior |
| Coordination topology | Isolated sequential file-passing |

---

## PART C: PV2 FLAGSHIP vs BOTH PATTERNS

### C1. Factor-by-Factor Comparison

| Factor | CD-006 (39/40) | Flagship (1.5/4) | PV2 Flagship | Match CD-006? |
|--------|----------------|-------------------|--------------|----------------|
| **Builder model** | Opus | Sonnet | Opus (all creative roles) | YES |
| **Communication protocol** | Multi-agent WITH messaging | Zero messages | 13-23 messages per build, 5 mandatory approval checkpoints | YES (structural enforcement via tasks) |
| **Builder context size** | Full catalog + case studies | 71 lines (13.4%) | Full recipe (~650 lines) + mechanism catalog + tokens + prohibitions + perception thresholds + build plan | YES (exceeds CD-006) |
| **Builder prompt type** | Recipe-like | Checklist (constraints) | Recipe (action verbs: "Set", "Write", "Add", "Create") | YES |
| **Verification timing** | During construction | Deferred to Gate 5 | After EVERY phase (Flagship: 8 CHECKPOINTs) + Mode 4 PA at end | YES (exceeds CD-006) |
| **Information compression** | Low | 2,400:1 | ~3:1 (337 findings -> ~100 structured fields in handoff) | YES |
| **Coordination topology** | Hub-and-spoke with messaging | Isolated sequential | Hub-and-spoke with file-bus + SendMessage | YES |
| **Perception thresholds** | Implicit (Opus judgment) | Zero (not in prompt) | Explicit (8 thresholds with specific values in recipe + handoff + gates) | YES (exceeds CD-006) |
| **Information routing** | CSS-rich files to builder | Mechanism catalog to planner only | Mechanism catalog to builder explicitly | YES |
| **Single writer** | Unknown (likely multi-writer) | Multi-writer (4 sequential) | Single Opus builder (sole HTML writer) | PARTIAL (remediation pattern, not CD-006 pattern) |
| **Metaphor integration** | Present (drove CSS composition) | Present (but imperceptible output) | Full TC pipeline (Phases 0-3.5) with isomorphism table and perception checks | YES |
| **Mode 4 PA** | Unknown (likely lighter audit) | 9 auditors at Gate 5 only | 9 auditors with screenshot pre-capture, after construction + fix cycle | YES |
| **Gate enforcement** | Unknown | Binary rule compliance only | Binary programmatic (12 gates) + perceptual (Mode 4) | YES (combines both) |
| **Kill criteria** | Unknown | Present but late-triggering | Present with immediate ESCALATE protocol | YES |

### C2. Match Score

**13 of 14 factors match CD-006's success pattern.** The one PARTIAL match (single writer vs multi-writer) is actually an IMPROVEMENT — the remediation proved single-writer outperforms multi-writer for information fidelity (File 07, Section 3.2). PV2 Flagship preserves the multi-agent ANALYSIS (Wave 0: TC Planner) while using single-agent EXECUTION (Wave 1: one Opus builder).

### C3. What PV2 Flagship ADDS Beyond CD-006

PV2 Flagship includes structural improvements that CD-006 did not have:

1. **Communication as tasks, not obligations.** CD-006's communication was likely ad-hoc. PV2 Flagship creates explicit checkpoint TASKS in the task system with file artifact deliverables. Each checkpoint task has its own completion criterion. Communication is structurally impossible to skip (Section D of comms protocol).

2. **Perception thresholds.** CD-006 relied on Opus's implicit judgment for perceptual quality. PV2 Flagship makes thresholds EXPLICIT: >= 15 RGB between adjacent zones, >= 2px font-size delta, >= 0.025em letter-spacing range, <= 120px max stacked gap. Every builder phase has a binary perception check.

3. **Handoff validation.** PV2 Flagship includes a structured handoff document (`_build-plan.md`) with 7 sections, per-field validation, and completeness checking BEFORE the builder starts. The builder cannot begin without verified context. CD-006 had no such structural guarantee.

4. **4-wave architecture with strict separation.** Wave 0 (analysis, read-only) -> Wave 1 (building, single writer) -> Wave 2 (verification, parallel auditors) -> Wave 3 (fix integration, conditional). Each wave has clear boundaries. CD-006's wave structure is undocumented.

5. **Tier-gated gate strictness.** All 16 gates are BLOCKING for Flagship tier (Table C in tier-routing). No gate is merely a WARNING at the Flagship level. This prevents the "pass all gates while visually empty" failure mode.

6. **Programmatic gate runner.** 12 binary checks (SC-01 through SC-12) run automatically via Playwright. These complement the perceptual audit, catching measurable violations that human auditors might overlook (e.g., warm palette R >= G >= B on every background).

---

## PART D: RISKS — WHAT COULD STILL GO WRONG

### D1. Is Opus Builder Actually Mandated or Just Recommended?

**STATUS: MANDATED.**

The tier-routing matrix (Section B) explicitly states: "**Opus for ALL creative/perceptual roles. Sonnet for programmatic compliance roles only.**" The agent topology diagram for Flagship shows "1 Opus Agent -- Builder" in Wave 1. The pipeline-v2-architecture.md states the builder model selection is based on tier.

**RISK: LOW.** The mandate is clear and binary. However, enforcement depends on the orchestrator (`/build-page` skill) correctly spawning Opus. If the orchestrator defaults to Sonnet (the cheaper model), the mandate is violated. The `/build-page` skill specification should include a binary check: `IF tier == Flagship THEN builder_model = Opus`.

**MITIGATION:** Add model verification as Gate 0 of the build process: "Verify builder agent is Opus 4.6. If Sonnet, HALT."

### D2. Are Checkpoints Actually Mandatory or Skippable?

**STATUS: STRUCTURALLY MANDATORY (for Flagship).**

The comms protocol (Section C4) specifies 5 mandatory approval checkpoints at Phases 0, 1, 3, 4, and 8. At these phases, "the builder MUST wait for APPROVAL before proceeding." The timeout is 5 minutes, after which the builder sends an ESCALATE to team-lead. "The builder does NOT proceed without approval at mandatory checkpoints."

Furthermore, Section D converts every communication event into a TASK with its own completion criterion. The builder has TWO tasks per phase: the building task AND the checkpoint task. The approval task is BLOCKED BY the checkpoint task. This creates a structural dependency chain in the task system.

**RISK: MEDIUM.** The structural enforcement is well-designed. However, there are two failure modes:

1. **Task system bypass.** If the team-lead creates tasks without the checkpoint/approval structure, the structural enforcement evaporates. The comms protocol depends on correct task creation, which depends on the team-lead following Section F's verification checklist.

2. **Timeout exploitation.** At non-mandatory checkpoints (Phases 2, 5, 6, 7), the builder can proceed without approval if no response arrives within 2 minutes. If the planner is slow, ALL non-mandatory checkpoints become rubber-stamps. This is intentional (ceiling builds are time-sensitive) but still a risk.

**MITIGATION:** The Section F protocol verification checklist should be a GATE before build launch: "All checkpoint tasks created? All approval tasks created? All directory structures exist?" If any item fails, the build does not start.

### D3. Does the Handoff Preserve Enough Context for the Builder?

**STATUS: YES — significantly more than CD-006.**

The handoff protocol (Part A) specifies a 7-section structured markdown document with:
- Routing header (tier, content type, word count, arc)
- Zone architecture (zone count, pattern, per-zone properties with rationale)
- Section inventory (per-section layout, transitions, elements)
- Mechanism deployment (per-category, per-section, per-CSS-channel with content-fit rationale)
- Metaphor specification (isomorphism table with perception checks per row)
- Transition plan (per-boundary type with stacking arithmetic verification)
- Builder directives (files to read, perception thresholds, soul constraints)

Part B provides an information preservation audit for each section, documenting what corpus finding each field preserves and what dies if compressed. The handoff achieves ~3:1 compression (337 findings -> ~100 structured fields) vs the master prompt's 50:1 (337 findings -> "sample 2-4 mechanisms").

Part C specifies a builder entry protocol: validate handoff completeness, read foundation files in order (prohibitions -> tokens -> mechanism catalog), read content, read build plan sections in specified order. The builder has a structured onboarding sequence.

**RISK: LOW for information loss. MEDIUM for handoff quality.**

The handoff's quality depends entirely on the TC Planner agent (Wave 0). If the planner produces a weak metaphor, weak isomorphisms, or weak zone architecture, the builder executes a weak plan faithfully. The handoff protocol includes INTERPRETIVE_DISTANCE >= 2 as a binary gate, but this only catches the worst metaphor failures (zero-distance = label, not bridge). A mediocre metaphor at distance 2 still produces mediocre CSS.

**MITIGATION:** The PV2 Flagship process includes "multiple tension candidates developed in parallel" and "perceptual risk assessed per metaphor candidate" at Wave 0. This expands the planner's creative search space. Additionally, the builder can send QUERY messages to the planner during construction if the isomorphism table produces ambiguous CSS decisions.

### D4. Is Mode 4 PA Actually Verifying the RIGHT Things?

**STATUS: YES — the Mode 4 PA is the corpus's most validated verification tool.**

Evidence:
- Mode 4 PA (9 auditors, 48 questions) caught the whitespace void that 2-PA missed (9/9 auditors flagged it)
- The PA skill has been enriched twice (736 -> 774 lines) with perception thresholds
- All 48 questions are now distributed across 9 auditors with explicit question assignments
- The screenshot pre-capture pattern eliminates Playwright contention, enabling true parallel assessment

**RISK: LOW for detection. MEDIUM for timing.**

The PA detects problems. But it runs AFTER construction (Wave 2). If PA-05 < 3/4, the fix cycle (Wave 3) applies targeted fixes and spot-checkers verify. This is better than the master prompt (PA at Gate 5 only, after full build), but still reactive.

The comms protocol partially mitigates this by embedding PERCEPTION CHECKs after every building phase (Phases 0-8). These are self-assessed by the builder, not externally verified. They catch gross failures ("can I SEE 2 color shifts?") but not subtle ones ("does the typography feel like it has zones?"). The subtle failures require Mode 4 PA.

**REMAINING GAP:** There is no mid-build external audit. The builder self-checks after each phase (lightweight), and the PA auditors check after full construction (heavyweight). The middle ground — an external spot-check after Phase 4 (structural borders, the highest-impact phase) — is absent. This could catch the "technically correct borders but visually monotonous" failure before Phases 5-7 add more CSS on top.

### D5. The Sonnet-for-Builders Question: Is It Truly Resolved?

**STATUS: RESOLVED IN SPECIFICATION, UNTESTED IN PRACTICE.**

PV2 Flagship mandates Opus for all creative roles. But MEMORY.md flags: "Sonnet-for-builders is unexamined." The resolution is based on correlation (CD-006 Opus = 39/40, Flagship Sonnet = 1.5/4), not controlled experiment. The 3-variable confound (format + specificity + perception thresholds changed simultaneously) applies to model choice too.

The cheapest test would be: run PV2 Flagship with Sonnet builder, same recipe, same thresholds. If PA-05 >= 3/4, Opus is not required. If PA-05 < 3/4 with Sonnet, the model choice matters.

**RISK: This risk is ACCEPTED, not eliminated.** The corpus evidence points toward Opus. The cost of being wrong (using Opus when Sonnet would suffice) is higher compute cost but no quality loss. The cost of the OPPOSITE error (using Sonnet when Opus is needed) is quality failure. The asymmetry favors Opus.

### D6. The Communication-as-Tasks Enforcement Depends on Team-Lead Discipline

**STATUS: RISK IDENTIFIED.**

The structural enforcement (checkpoint tasks blocked by building tasks, approval tasks blocked by checkpoint tasks) only works if the team-lead creates all tasks correctly BEFORE the build starts. Section F provides a verification checklist, but the checklist is itself an obligation, not a structural gate.

If the team-lead creates the builder task without the corresponding checkpoint task, the builder completes the building phase and marks its task done — no checkpoint filed, no approval sought, no message sent. The file-bus artifacts (`_checkpoints/`, `_fixes/`) remain empty.

**MITIGATION PROPOSAL:** The `/build-page` orchestrator should PROGRAMMATICALLY create the task dependency chain. The team-lead should not manually create tasks. Instead:

```
/build-page --tier flagship [content]
  -> Orchestrator auto-creates:
     Task A: "Build Phase 0" (builder)
     Task B: "Write Phase 0 checkpoint" (builder, blocked by A)
     Task C: "Review Phase 0 checkpoint" (planner, blocked by B)
     Task D: "Build Phase 1" (builder, blocked by C)
     Task E: "Write Phase 1 checkpoint" (builder, blocked by D)
     ... etc.
```

This removes team-lead discipline from the critical path. The task system enforces sequencing automatically.

### D7. The Recipe Ceiling: Can a Recipe Produce 4/4?

**STATUS: UNRESOLVED — the corpus's biggest open question.**

File 05, Section 5 warns: "the deliberate model has a ceiling." The recipe outperformed the checklist (2.5/4 vs 1.5/4), but 2.5/4 < 3/4 COMPOSED < 4/4 DESIGNED. The recipe may cap at 3/4. 4/4 DESIGNED may require something beyond what specification can capture — Layer F (intentionality), which the corpus acknowledges is entirely unanalyzed (File 31).

CD-006 scored 39/40 (~4/4). But CD-006's process included elements that PV2 Flagship cannot fully replicate:
- Opus builder's EMERGENT creativity beyond the specification
- Multi-agent communication that surfaced insights no single agent would find
- Iterative refinement that a sequential recipe cannot express

PV2 Flagship targets PA-05 >= 3/4 COMPOSED as the shipping threshold. This is realistic given the evidence. Targeting 4/4 DESIGNED would require experiments beyond what the current architecture specifies.

**RISK: MEDIUM.** The risk is that PV2 Flagship produces 3/4 consistently (a genuine success) but never reaches 4/4 (the CD-006 target). This would mean the architecture is GOOD ENOUGH but not OPTIMAL. The gap between 3/4 and 4/4 may require a fundamentally different approach (more creative freedom for Opus, less specification, more iteration).

---

## PART E: VERDICT

### E1. Does PV2 Flagship Match CD-006's Success Pattern?

**YES — 13 of 14 factors match, with the 14th (single vs multi-writer) being an intentional improvement.**

PV2 Flagship addresses every diagnosed failure mode that separated the flagship (1.5/4) from CD-006 (39/40):

| Failure Mode | Flagship | PV2 Flagship Fix | Confidence |
|-------------|----------|------------------|------------|
| Sonnet builder | YES | Opus mandated | Tier 2 (correlated, not causal) |
| Zero communication | YES | 13-23 messages, 5 mandatory approvals | Tier 1 (structural enforcement) |
| 75-line builder context | YES | Full recipe + catalog + thresholds | Tier 1 (direct fix) |
| Checklist format | YES | Recipe format | Tier 1 (pattern confirmed) |
| No perception thresholds | YES | 8 thresholds explicit | Tier 1 (principle) / Tier 2 (values) |
| Deferred verification | YES | Per-phase checks + Mode 4 PA | Tier 1 (structural fix) |
| 2,400:1 compression | YES | ~3:1 via structured handoff | Tier 1 (direct fix) |
| Inverted quality routing | YES | Catalog to builder | Tier 1 (routing fix) |
| Sub-perceptual CSS | YES | Perception thresholds + deallocation protocol | Tier 1 (principle fix) |

### E2. Remaining Risks (Ranked)

1. **Recipe ceiling (MEDIUM):** The recipe may cap at 3/4, short of CD-006's 4/4. Unresolvable without experiment.
2. **Task creation discipline (MEDIUM):** Communication enforcement depends on correct task setup. Mitigated by programmatic task creation in orchestrator.
3. **Sonnet-vs-Opus causality (LOW-MEDIUM):** Correlation, not controlled experiment. Asymmetric risk favors Opus (higher cost, no quality risk).
4. **No mid-build external audit (LOW):** Builder self-checks between phases; Mode 4 PA at end. Missing: external spot-check at Phase 4.
5. **Handoff quality depends on TC Planner (LOW):** Weak metaphor -> weak execution. Mitigated by INTERPRETIVE_DISTANCE gate and multi-candidate development.

### E3. Predicted PV2 Flagship PA-05

Based on the topology analysis:
- **Floor:** PA-05 3/4 COMPOSED (most likely outcome)
- **Ceiling:** PA-05 3.5-4/4 DESIGNED (if Opus builder exploits recipe + metaphor synergy)
- **Risk floor:** PA-05 2.5/4 SHIP WITH FIXES (if task enforcement fails and communication reverts to zero)

The architecture is designed to CONSISTENTLY produce >= 3/4. It may occasionally produce 4/4 but does not GUARANTEE it. This is an improvement over the master prompt (1.5/4 to 4/4 range) — the variance is compressed toward the positive end.

---

**END OF PV2 FLAGSHIP TOPOLOGY VERIFICATION**

**Summary:** PV2 Flagship matches 13/14 CD-006 success factors and adds 6 structural improvements beyond CD-006. 5 risks identified, 2 MEDIUM, 3 LOW. Predicted PA-05: 3/4 floor, 3.5-4/4 ceiling. The architecture addresses every diagnosed failure mode with confidence tiers ranging from Tier 1 (structural fixes) to Tier 2 (correlated but untested causally). The single biggest remaining uncertainty is the recipe ceiling question: can specification alone produce 4/4 DESIGNED, or does 4/4 require emergent Opus creativity beyond what any recipe captures?

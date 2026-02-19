# Prompt Craftsmanship Evolution: Master -> Remediation -> Auxiliary

**Agent:** prompt-craftsmanship (Opus 4.6)
**Date:** 2026-02-18
**Sources:** FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md (963 lines), 12-ENHANCED-REMEDIATION-SPEC.md (1,025 lines), AUXILIARY-EXECUTION-WRAPPER.md (398 lines), 00-CONVERSATION-JOURNEY-CONTEXT.md

---

## 1. LANGUAGE REGISTER ANALYSIS

### 1.1 Constraint Language vs Action Language

**Constraint language** = words that define boundaries: "must be", "must not", "verify", "shall not", "FAIL IF", "NON-NEGOTIABLE", "never", "prohibited", "gate", "kill".

**Action language** = words that direct construction: "write", "insert", "replace", "add", "delete", "find", "open", "scroll", "check", "compare", "measure".

#### Master Prompt Counts (963 lines)

| Category | Occurrences | Examples |
|----------|-------------|---------|
| MUST / MUST NOT | 68 | "MUST recur", "MUST exist", "MUST NOT be first" |
| FAIL IF | 23 | "FAIL IF container width outside 940-1100px" |
| NON-NEGOTIABLE | 4 | "NON-NEGOTIABLE identity", "Non-negotiable" |
| verify/verification | 19 | "Verify: querySelector(...)" |
| never/prohibited | 9 | "NEVER target 6+ scales", "PROHIBITED" |
| gate/kill | 18 | "Gate 0", "Kill at 25%", "kill criteria" |
| **CONSTRAINT TOTAL** | **141** | |
| | | |
| Write/produce | 7 | "Write down X", "Produces: 01-content-assessment.md" |
| Add/insert/replace | 3 | Minimal direct construction language |
| Check/run/measure | 12 | "Run B10 self-check", "Run mentally" |
| Read/receive | 14 | "reads mechanism-catalog.md" |
| Send/message | 11 | "SendMessage to planner" |
| **ACTION TOTAL** | **47** | |

**Ratio: 3.0:1 constraint-to-action.** The master prompt tells agents what boundaries exist 3x more than telling them what to DO.

#### Remediation Spec Counts (1,025 lines)

| Category | Occurrences | Examples |
|----------|-------------|---------|
| MUST / should | 5 | "MUST produce perceptible changes" |
| FAIL IF / gate | 3 | Checkpoint language, not FAIL IF |
| NON-NEGOTIABLE | 0 | |
| verify/check | 8 | "Verify borders visible", "Perception check" |
| never/prohibited | 0 | |
| Do NOT | 7 | "Do NOT change container width" |
| **CONSTRAINT TOTAL** | **23** | |
| | | |
| Find/locate | 14 | "Find this block:", "Find the `:root` block" |
| Delete/remove | 19 | "DELETE EVERYTHING from...", "DELETE this rule" |
| Replace/change | 12 | "Replace ALL THREE", "Replace with callout family" |
| Add/insert | 18 | "Add skip link", "Add `role=note`", "add:" |
| Open/scroll/compare | 9 | "Open at 1440px", "Scroll S1 to S5" |
| Write/produce | 0 | Agent writes CSS directly, not artifacts |
| **ACTION TOTAL** | **72** | |

**Ratio: 0.32:1 constraint-to-action.** The remediation spec uses action verbs 3x MORE than constraint verbs. This is an almost perfect INVERSION of the master prompt's ratio.

#### Auxiliary Wrapper Counts (398 lines)

| Category | Occurrences | Examples |
|----------|-------------|---------|
| MUST / mandatory | 22 | "MUST SendMessage", "MANDATORY extraction artifact" |
| FAIL IF / gate | 8 | "GATE 0: Team-lead verifies" |
| NON-NEGOTIABLE | 2 | "NON-NEGOTIABLE" |
| verify/checkpoint | 9 | "CHECKPOINT: You MUST have 11 extraction files" |
| never/prohibited | 2 | "ZERO build context, ZERO CSS source" |
| **CONSTRAINT TOTAL** | **43** | |
| | | |
| Read/read | 24 | "Read the enriched master execution prompt" |
| Write/produce | 15 | "Write to 00-prohibitions-extract.md" |
| Extract/list/note | 18 | "EXTRACT: List all 22 prohibitions" |
| Spawn/create | 8 | "Spawn 9 auditors IN PARALLEL" |
| Send/message | 7 | "CP-A: After builder reads plan -> Builder sends" |
| **ACTION TOTAL** | **72** | |

**Ratio: 0.60:1 constraint-to-action.** The auxiliary sits between the master's constraint dominance and the remediation's action dominance. It DIRECTS more than it CONSTRAINS, but it also carries forward critical constraints.

### 1.2 What the Ratio Reveals

| Document | Constraint:Action | Character |
|----------|------------------|-----------|
| Master prompt | 3.0:1 | Regulator |
| Auxiliary wrapper | 0.6:1 | Director |
| Remediation spec | 0.3:1 | Instructor |

The evolution follows a clear trajectory: **from telling agents what NOT to do, to telling agents what TO do.** This is not a philosophical shift -- it is a response to empirical failure. The master prompt's constraint-dominant language produced a page where 23.7% of CSS was sub-perceptual (233 invisible lines). Agents followed every constraint but produced nothing visible. The remediation's action-dominant language ("Find this block. DELETE it. Add this exact CSS.") produced visible, measurable changes at every step.

The auxiliary learned both lessons: it DIRECTS action ("Read this file. Write this extraction.") while carrying forward CRITICAL constraints ("ZERO build context. NON-NEGOTIABLE.") -- but only the constraints that empirically matter.

---

## 2. SPECIFICITY GRADIENT

### 2.1 Abstract vs Concrete Directives

**Abstract** = qualitative, requires judgment: "warm palette", "generous spacing", "authoritative feel", "unhurried", "designed moment".

**Concrete** = quantitative or literal: "#FAF8F5", "940-1100px", "16px", ">= 0.30", "12-14 mechanisms".

#### Master Prompt

| Type | Count | Examples |
|------|-------|---------|
| Abstract | 47 | "Warm. Authoritative. Unhurried." (A1), "confident intention at every scale" (A1), "semantic density" (A3), "cognitive choreography" (A4), "designed silence zones" (C-13), "atmosphere test" (B10) |
| Concrete | 89 | "940-1100px" (S-01), "CPL 45-80" (S-07), ">= 0.30 CCS" (MC-01), "288px at 1440px" (S-03), ">= 12/18 rubric" (MG-01) |
| Hybrid | 31 | "signal-to-silence ratio: 0.6-0.8:1" (number + concept), "density arc: peak NOT first" (concept + position) |

**Abstract:Concrete ratio: 0.53:1.** The master prompt is MOSTLY concrete but carries significant abstract load, particularly in Section A (Conviction Layer) and the emergent-quality language throughout.

#### Remediation Spec

| Type | Count | Examples |
|------|-------|---------|
| Abstract | 6 | "warm peach cream" (Phase 2 comment), "analytical compression" (Phase 4 comment), "generous reading" (Phase 4 comment) |
| Concrete | 143 | "#FEF5EB" (Phase 2), "17px" (Phase 4), "0.02em" (Phase 4), "3px solid var(--color-border)" (Phase 3), "1fr 1fr" (Phase 3.5) |
| Hybrid | 4 | "perceptible delta >= 10 RGB" (threshold + concept) |

**Abstract:Concrete ratio: 0.04:1.** The remediation spec is almost ENTIRELY concrete. Abstract language appears only in CSS comments and perception check descriptions -- never in directives.

#### Auxiliary Wrapper

| Type | Count | Examples |
|------|-------|---------|
| Abstract | 12 | "warm, authoritative, unhurried" (reminder), "crown jewel" (reminder), "beauty, not compliance" (reminder) |
| Concrete | 38 | "530 lines" (reading directive), "11 extraction files" (checkpoint), "3 viewports: 1440px, 768px, 480px" (PA setup), "00-prompt-digest.md" (file names) |
| Hybrid | 8 | "PA-05 >= 3/4 DESIGNED" (number + concept) |

**Abstract:Concrete ratio: 0.32:1.** The auxiliary carries forward abstract language from the master, but only as REMINDERS (Section: "Critical Reminders"), never as directives.

### 2.2 What the Gradient Reveals

The specificity gradient across the three documents follows a clear trajectory:

```
Master:       Abstract ████████████████████████ Concrete ████████████████████████████████████████████
Auxiliary:    Abstract ██████████ Concrete █████████████████████████████████████
Remediation:  Abstract ██ Concrete ████████████████████████████████████████████████████████████████████
```

**The master prompt's abstract language was aspirational but unactionable.** "Warm. Authoritative. Unhurried." -- these are GOALS, not instructions. An LLM agent cannot reliably execute "warm." It CAN execute "#FEF5EB" (and did: the remediation's zone backgrounds were applied exactly as specified).

**The remediation discovered that abstraction belongs in comments, not directives.** Phase 4's CSS comments say "Zone 1: Generous reading" and "Zone 2: Analytical compression" -- these are explanatory notes on WHY the concrete values exist, not directives the agent must interpret. The agent executes `.zone-s1 p { font-size: 17px; }`, not "make Zone 1 feel generous."

**The auxiliary threaded the needle:** it put abstract language in "Critical Reminders" (last section, recency position) for human comprehension, while keeping all agent directives concrete ("Read this file. Write this extraction. Spawn this agent.").

---

## 3. INFORMATION ARCHITECTURE

### 3.1 Rule Distribution Patterns

#### Master Prompt: Scattered-Thematic

The master prompt organizes rules by DOMAIN (Spatial, Soul, Compositional, Multi-Coherence, Scale-Channel, Metaphor, Process). Within each domain, rules are numbered sequentially. But rules from different domains interact constantly:

- S-12 (spatial void) references S-09 (max spacing) and S-11 (CSS limits) and C-09 (designed moments)
- MC-01 (CCS) references C-01 (mechanism minimums) and MC-02 (reinforcing pairs)
- Gate 3 references rules from B1, B3, B4, and B5 simultaneously

**Cross-referencing load:** An agent at Gate 3 must check rules from 4 different sections. The information needed to pass one gate is SCATTERED across the document.

#### Remediation Spec: Phase-Concentrated

The remediation organizes rules by EXECUTION PHASE. Phase 3 (Structural Borders) contains everything needed for borders: the CSS to write, where to write it, what it replaces, and a perception check. An agent working on Phase 3 never needs to look at Phase 5 material.

**Cross-referencing load:** Near zero. Each phase is self-contained. The only forward references are "Phase 5 supersedes this" notes in Phase 0 deletions.

#### Auxiliary Wrapper: Chronological-Gate

The auxiliary organizes information in EXECUTION ORDER: Phase 0 (reading), Phase 1 (deep reading), Phase 2 (team creation), Phase 3 (communication), Phase 4 (anti-skimming), Phase 5 (failure recovery). Within Phase 2, agents are listed in their execution sequence (Pass 0 -> Pass 1 -> ... -> Pass 5).

**Cross-referencing load:** Low within the wrapper itself. But the wrapper DELEGATES to the master prompt and enrichment files, creating a 2-layer lookup: wrapper tells you WHAT to do, master prompt tells you HOW to verify.

### 3.2 Comprehension Impact

| Document | Architecture | Agent Working Memory Load | Comprehension Risk |
|----------|-------------|--------------------------|-------------------|
| Master | Thematic scatter | HIGH: must cross-reference 4+ sections per gate | Rule interaction blindness (agent sees S-09 but misses S-11) |
| Remediation | Phase concentration | LOW: each phase is self-contained | Phase isolation blindness (agent misses cross-phase dependencies) |
| Auxiliary | Chronological + delegation | MEDIUM: clear sequence but requires external lookups | Delegation blindness (agent reads wrapper but skims delegated docs) |

**The master prompt's architecture was optimized for COMPLETENESS (every rule exists) at the cost of COMPREHENSION (agents can't find the rules they need when they need them).** This is a documentation-first architecture: great for auditing, terrible for execution.

**The remediation's architecture was optimized for EXECUTION (every step is where you need it) at the cost of COMPLETENESS (some cross-cutting concerns like soul compliance are stated only in the Appendix: Constraints section, not reinforced per-phase).** This is a recipe architecture: great for execution, requires trust that the recipe is right.

**The auxiliary's architecture was optimized for ORCHESTRATION (when does what happen, with what inputs and outputs) at moderate cost to both.** It trades the master's completeness for the remediation's actionability, but adds a third dimension: ACCOUNTABILITY (artifact chains, checkpoints, communication protocols).

---

## 4. TONE ANALYSIS

### 4.1 Tone Categories

**Authoritative/Motivational** = conviction, vision, inspiration: "The mission is beauty, not compliance." "Beauty = confident intention at every scale." "STOP ANALYZING. START BUILDING."

**Operational/Procedural** = step-by-step instructions: "Find this block. DELETE it." "Open at 1440px. Scroll S1 to S5."

**Didactic/Explanatory** = teaching the WHY: "CD-006 WORKED EXAMPLE -- why these interactions produce 39/40." "Every value in this block is below the 0.5px perception threshold."

**Empirical/Evidence-Based** = citing data: "Middle at 2 scales: PA-05 4/4. Ceiling at 4 scales: PA-05 1.5/4." "23.7% of CSS was sub-perceptual."

#### Distribution by Document

| Tone | Master % | Remediation % | Auxiliary % |
|------|---------|---------------|------------|
| Authoritative/Motivational | 25% (Section A + D = ~92 lines) | 2% (scattered) | 15% (Phase 0 + Critical Reminders) |
| Operational/Procedural | 35% (Sections B+C execution rules) | 75% (Phases 0-7 recipes) | 55% (Phases 1-3 instructions) |
| Didactic/Explanatory | 20% (A5 worked examples, B-section rationale) | 15% (perception check explanations, root cause matrix) | 10% (reading protocol rationale) |
| Empirical/Evidence-Based | 20% (A3 anti-scale, A6 laws, parameter table) | 8% (risk assessment, PA-05 predictions) | 20% (Critical Reminders, calibration data) |

### 4.2 Tone-to-Compliance Correlation

**Authoritative/Motivational tone produced ZERO measurable compliance improvement.** Section A of the master prompt ("Warm. Authoritative. Unhurried.") is cited by 0/0 builder agents in their self-checks. The conviction sandwich (A opens, D closes) was designed to create psychological buy-in, but agents don't have psychology. They have context windows.

Evidence: The flagship experiment used the full conviction layer. Result: DO NOT SHIP. The middle-tier experiment had ZERO conviction language. Result: PA-05 4/4 DESIGNED.

**Operational/Procedural tone produced the highest compliance.** The remediation's "Find X. Replace with Y." language was executed with near-100% fidelity. The 3 BLOCKING bugs in the remediation execution (border selectors, S9-S12 typography, table class mismatch) were all agent interpretation errors on ambiguous instructions -- NOT failures to follow clear recipes.

**Didactic/Explanatory tone produced selective compliance.** When the WHY was adjacent to the WHAT (e.g., "DELETE the per-zone heading color block -- 27 lines, all under 15 net RGB delta"), agents followed the instruction. When WHY was separated from WHAT (as in the master prompt's conviction-to-execution gap), agents read the WHY but forgot it by the time they reached the WHAT.

**Empirical/Evidence-Based tone was the most reliable constraint language.** "Middle at 2 scales = 4/4. Ceiling at 4 scales = 1.5/4. Do NOT over-engineer." This format -- historical evidence + binary directive -- was the only abstract language that agents reliably followed. The auxiliary's Critical Reminders section uses this format exclusively.

### 4.3 Which Tone Produces Better Agent Compliance?

**Verdict: Procedural > Empirical > Didactic > Motivational.**

Motivational language wastes tokens. Empirical language works ONLY when converted to a binary directive ("Do NOT exceed 3 scales"). Didactic language works ONLY when co-located with its action. Procedural language works unconditionally.

The evolution path: Master (25% motivational) -> Auxiliary (15% motivational) -> Remediation (2% motivational). The learning: motivational language is for HUMANS reading the prompt, not for AGENTS executing it. The auxiliary knew this and segregated motivational content into "Critical Reminders" -- positioned for the human orchestrator, not the spawned agents.

---

## 5. REDUNDANCY STRATEGY

### 5.1 Master Prompt: Triple-Reinforcement

Critical rules in the master prompt appear in 3+ locations:

**Container width (940-1100px):**
1. S-01 (Section B1, FAIL IF)
2. B10 self-check item 1 (Section B10)
3. Parameter table row 1 (Appendix)
4. Kill criteria KB-04 -> SP-01 (Gate sequence)

**CCS >= 0.30:**
1. MC-01 (Section B4)
2. B10 self-check item 13 (Section B10)
3. Parameter table row 17 (Appendix)
4. Gate 3 Crown Jewel check item 1 (Section C3)
5. A5 negative example: "Ceiling deployed 14 mechanisms with CCS ~0.05" (Section A)

**Content-to-void >= 60:40:**
1. S-02 (Section B1, FAIL IF)
2. S-14 graduated (Section B1)
3. B10 self-check item 3 (Section B10)
4. Gate 0 (Section C3)
5. Gate 1 (Section C3)
6. P-08 spatial re-check (Section B7)
7. Parameter table (Appendix)

**Average: 4.3 mentions per critical rule.**

### 5.2 Remediation Spec: Single-Location with Checkpoints

Critical rules in the remediation appear ONCE in their execution context, then again ONCE in the verification phase:

**Zone backgrounds:**
1. Phase 2 (the recipe: exact hex values)
2. Phase 8E item 1 (verification: "Can you SEE color change without zooming?")

**Max gap <= 120px:**
1. Phase 3.2 (the fix: reduced divider margins)
2. Phase 8B (verification: measure every inter-section gap)

**Average: 2.0 mentions per critical rule.**

### 5.3 Auxiliary Wrapper: Forward-Reference Redundancy

The auxiliary mentions critical rules ONCE, but always with a forward reference to where the rule is defined in the master prompt:

**Container width:**
1. B10 self-check reference ("S-01: container width via getBoundingClientRect()")
2. Delegates to master prompt Section B1

### 5.4 Which Approach Prevents More Failures?

| Strategy | Theory | Empirical Result |
|----------|--------|-----------------|
| Master's triple-reinforcement | Repetition overcomes skimming | Flagship: container width STILL violated (960px specified, 2160px built). Repetition did NOT prevent failure. |
| Remediation's single-location | Right information at point of use | Remediation execution: container width preserved (960px). Zero violations on items stated at point of use. |
| Auxiliary's forward-reference | Tell WHEN to check, delegate WHAT to check | Unknown (auxiliary invoked the master prompt, which failed on other dimensions) |

**Paradoxical finding: MORE repetition correlated with MORE failures.** The most-repeated rules in the master prompt (container width, content-to-void) were the ones that failed most spectacularly in the flagship. Why?

**Hypothesis: Redundancy creates attention diffusion.** When an agent encounters "container width" for the 4th time, each encounter carries less weight. The self-check says "S-01: Container 940-1100px" but the agent has already read S-01 three times -- it feels like review, not action. The remediation's single-statement approach ("Container max-width: 960px" in Appendix: Constraints) creates a single clear commitment.

**Counter-hypothesis: The master prompt's redundancy prevented DIFFERENT failures.** Container width failed not because of redundancy but because of the spatial void cascade (whitespace pushed content to fill the screen). The rules that succeeded (soul compliance 10/10) were also repeated 3+ times. Redundancy helps for SIMPLE rules (U-01: border-radius: 0) and fails for COMPLEX rules (S-02: content-to-void >= 60:40) because complex rules have interaction effects that repetition doesn't address.

**Verdict: Redundancy is effective for simple binary checks (border-radius = 0) and counterproductive for complex systemic checks (content-to-void >= 60%). The remediation's approach -- state once at point of use, verify once at end -- works for both.**

---

## 6. INCLUSION VS OMISSION ANALYSIS

### 6.1 What the Master Prompt Includes That the Remediation Omits

| Content Type | Master Lines | Remediation Lines | Effect |
|-------------|-------------|-------------------|--------|
| Conviction / thesis | ~82 (Section A) | 0 | Master: sets aspirational frame. Remediation: trusts the spec speaks for itself. |
| Experiential laws | ~8 (A6) | 0 | Master: codifies lessons from 4 experiments. Remediation: embeds lessons into recipes instead. |
| Quality exemplar (CD-006 CSS) | ~12 (A7) | 0 | Master: shows what good looks like. Remediation: shows what to TYPE. |
| Anti-scale model formula | ~12 (A3) | 0 | Master: explains WHY restraint matters. Remediation: enforces restraint through specific values. |
| Reader journey (5-act) | ~8 (A8) | 0 | Master: describes ideal scroll experience. Remediation: creates it through section padding/typography recipes. |
| Motivational closing | ~10 (Section D) | 0 | Master: "The mission is beauty, not compliance." Remediation: ends with perception thresholds table. |
| Parameter table (30 params) | ~40 (Appendix) | 0 | Master: authoritative reference. Remediation: values embedded in recipes. |
| Enrichment traceability | ~20 (Appendix) | 0 | Master: audit trail for prompt creation. Remediation: irrelevant to execution. |
| Integration log (39 entries) | ~80 (Appendix) | 0 | Master: changelog. Remediation: irrelevant to execution. |
| **TOTAL OMITTED** | **~272 lines** | **0** | **28% of master prompt is backstory that the remediation drops entirely** |

### 6.2 What the Remediation Includes That the Master Omits

| Content Type | Master Lines | Remediation Lines | Effect |
|-------------|-------------|-------------------|--------|
| Delete recipes (Phase 0) | 0 | ~75 | Remediation: "Find X. Delete Y." with exact CSS blocks to remove. |
| HTML restructuring recipes | 0 | ~140 | Remediation: exact HTML changes with before/after examples. |
| Exact CSS code blocks | 0 (references var() but never provides CSS recipes) | ~310 | Remediation: copy-paste-ready CSS for every change. |
| Perception thresholds table | 0 | ~20 | Remediation: minimum delta for each CSS property to be visible. |
| Root cause resolution matrix | 0 | ~25 | Remediation: maps each fix to the root cause it addresses. |
| Risk assessment / honest PA-05 prediction | 0 | ~35 | Remediation: "Enhanced spec, Sonnet builder: 3/4" -- sets realistic expectations. |
| Phase 0 deallocation | 0 | ~75 | Remediation: strategic DELETION before addition. Master only adds. |
| **TOTAL ADDED** | **0** | **~680 lines** | **66% of remediation is actionable content the master lacks** |

### 6.3 Does Backstory Help or Hinder Execution?

**Finding: Backstory HELPED human understanding but HINDERED agent execution.**

The master prompt's Section A conviction layer (82 lines) serves a critical purpose: it gives a HUMAN reader the context to understand WHY the rules in Section B exist. Without Section A, Section B reads as arbitrary constraints. With Section A, Section B reads as principled engineering.

But agents are not human readers. For agents:
- Section A consumed ~82 lines of context window (~9% of prompt length)
- Section A contained 47 abstract terms that agents cannot directly execute
- Section A's worked examples (CD-006 CSS) showed what quality LOOKS like but not how to PRODUCE it
- Section D's motivational closing ("STOP ANALYZING. START BUILDING.") is literally the opposite of what most agents need (agents don't over-analyze; they under-plan)

**The remediation proved that omitting backstory costs nothing for agent execution.** Zero agents in the remediation execution asked "why are we deleting the typographic convergence gradient?" They just deleted it. The WHY was in the CSS comment ("0.064-0.16px values = invisible") -- 5 words of explanation adjacent to the action, not 82 lines of philosophical preamble.

**The auxiliary threaded this distinction perfectly.** It includes backstory for the HUMAN orchestrator (Phase 0: "22 agents across 5 research passes produced 758,000 lines") but routes ONLY action language to spawned agents (Phase 2: "Reads: X. Executes: Y. Produces: Z.").

**Verdict: Backstory belongs in ORCHESTRATOR prompts (read by humans or hub agents), not EXECUTOR prompts (read by worker agents). The master prompt collapsed these two audiences into one document.**

---

## 7. THE AUXILIARY PROMPT: A THIRD SPECIES

### 7.1 Structural Differences

The auxiliary wrapper (~398 lines) is structurally distinct from BOTH the master prompt and the remediation spec:

| Dimension | Master Prompt | Remediation Spec | Auxiliary Wrapper |
|-----------|--------------|------------------|-------------------|
| Primary verb | VERIFY | DO | READ then SPAWN |
| Audience | All agents equally | Single builder agent | Team-lead orchestrator |
| Time horizon | Atemporal (rules that always apply) | Sequential (Phase 0 -> Phase 8) | Pre-execution setup |
| Artifact production | References artifacts | Is itself the recipe for artifacts | Defines the artifact CHAIN |
| Relationship to other docs | Self-contained (with appendices) | Self-contained (with constraints appendix) | WRAPPER: delegates to master prompt + enrichment files |

### 7.2 What the Auxiliary Learned from the Master Prompt

1. **Conviction has a place -- but that place is LAST.** The master opens with conviction (Section A). The auxiliary closes with it ("Critical Reminders" in recency position). This respects the finding that recency position has higher compliance than primacy position for motivational content, because agents process instructions sequentially and the last thing read is freshest in context.

2. **Rule IDs are essential.** The auxiliary inherits the master's rule ID system ("S-01: container width via getBoundingClientRect()") and makes it an enforcement mechanism: "If an agent cannot cite the rule ID, they haven't read the rule." This transforms IDs from organizational tools into COMPLIANCE TESTS.

3. **Gate sequences structure execution.** The auxiliary preserves the master's 6-gate sequence (Gate 0 through Gate 5) exactly, adding only an operational log format: "GATE [N] at [timestamp]: [Rule ID]: [value] -> PASS/FAIL."

4. **Communication protocols prevent quality collapse.** The auxiliary carries forward CP-A through CP-E verbatim from the master, with the added enforcement: "Zero messages at Gate 1 = PAUSE BUILD."

### 7.3 What the Auxiliary Learned from the Remediation Spec

1. **Reading must produce ARTIFACTS, not comprehension.** The master says "read mechanism-catalog.md." The remediation says "Find this block. Delete it." The auxiliary synthesizes: "Read mechanism-catalog.md. EXTRACT: List all 18 mechanisms with impact profiles. Write to 00-mechanisms-extract.md." Reading is NOT sufficient; WRITING proves reading occurred.

2. **Checkpoints are BINARY, not evaluative.** The remediation's "CHECKPOINT AFTER PHASE 0: Open the page. It should look IDENTICAL. If anything changed, restore it." The auxiliary adopts the same pattern: "CHECKPOINT: You MUST have 11 extraction files PLUS the prompt digest before proceeding to Phase 2." Binary pass/fail, not judgment.

3. **Audience separation is critical.** The remediation works because it has ONE audience: the builder. The auxiliary works because it explicitly ROUTES content to different audiences: "TEAM-LEAD reads: [4 files]. METAPHOR AGENT reads: [3 files]. PA AUDITORS lead reads: [2 files]." This routing pattern was absent from the master prompt.

### 7.4 What the Auxiliary Invented That Neither Had

1. **Mandatory extraction artifacts.** Neither the master prompt nor the remediation spec requires PROOF OF READING. The auxiliary invents a new pattern: "Read X. Write extraction Y. Cannot proceed until Y exists." This transforms the passive act of reading into an active, verifiable act of extraction.

2. **Anti-skimming enforcement protocol.** The auxiliary dedicates an entire phase (Phase 4) to enforcing that agents actually read the master prompt. Techniques: rule ID citation requirements, conviction quotes from Opus agents, completed self-check before file write, "NO FINDING" requirement for PA. The master prompt had anti-skimming TECHNIQUES (numbered rules, code blocks, checkboxes); the auxiliary has anti-skimming ENFORCEMENT.

3. **Failure recovery as first-class concern.** The master prompt mentions recovery in 4 rules (RP-01 through RP-04). The auxiliary dedicates Phase 5 to failure recovery with specific decision trees: "If Gate fails: Cycle 1 -> Cycle 2 -> ABORT -> Ship at lower tier." This treats failure as EXPECTED, not exceptional.

4. **The "prompt digest" concept.** Before any execution begins, the auxiliary requires the team-lead to write a digest of the master prompt, listing ALL rule IDs, ALL parameters, ALL enrichments. This is a COMPREHENSION GATE that has no equivalent in either source document. It transforms the prompt from a document agents receive to a document agents DEMONSTRATE they have internalized.

---

## 8. THE TEACHING CHAIN: HOW EACH PROMPT TAUGHT THE NEXT

### 8.1 Master Prompt -> Remediation Spec: What Was Learned

The master prompt was written by 22+ agents synthesizing 758,000 lines of analysis. It was the most thoroughly researched prompt in the project's history. And it produced DO NOT SHIP.

**Lesson 1: Completeness is not comprehension.** The master prompt contained 97 rule IDs, 30 parameters, 11 enrichments, 6 gates, 5 communication checkpoints. It was EXHAUSTIVE. But exhaustiveness created a document that no single agent could hold in working memory. The remediation's response: reduce to 9 sequential phases, each self-contained.

**Lesson 2: Constraint language requires action translation.** "FAIL IF container width outside 940-1100px" is a CONSTRAINT. "Find `.page-container { max-width: 960px }`. Do not change it." is an ACTION. The master prompt specified WHAT must be true; the remediation specified HOW to make it true. Agents need HOW.

**Lesson 3: Backstory occupies context that recipes need.** The master prompt's 272 lines of backstory (conviction, exemplars, laws, parameter tables, integration logs) consumed 28% of the document. The remediation reclaimed that 28% for 310 lines of CSS recipes.

**Lesson 4: Perception thresholds are MORE useful than quality rubrics.** The master prompt defined quality through rubrics (PA-05 scoring, MG-01 >= 12/18, CCS >= 0.30). The remediation defined quality through perception thresholds ("if a human cannot SEE the difference without a color picker, do NOT write the CSS"). The perception threshold is both simpler AND more actionable.

**Lesson 5: Deletion is a design action.** The master prompt is entirely additive -- it describes what to BUILD. The remediation starts with Phase 0: DEALLOCATION -- what to DELETE. The discovery that 23.7% of existing CSS was sub-perceptual was a finding the master prompt's framework could never have generated, because the master prompt's framework assumed building from scratch.

### 8.2 Master Prompt + Remediation -> Auxiliary Wrapper: What Was Learned

The auxiliary wrapper was written AFTER both the master prompt was created and the remediation spec was complete. It had access to both documents and the knowledge of what each got right and wrong.

**Lesson 6: Separate the orchestrator from the executor.** The master prompt addressed ALL agents equally. The remediation addressed a single builder. The auxiliary realized that the ORCHESTRATOR (team-lead) needs different information than EXECUTORS (worker agents). It provides orchestration protocol to the team-lead and delegates execution rules to spawned agents via file routing.

**Lesson 7: Reading is not doing -- demand proof.** The master prompt assumed agents would read their reference files. The remediation assumed a single agent would follow its recipe. The auxiliary assumed NOTHING and required written proof of comprehension (extraction artifacts, prompt digest) before allowing execution to begin.

**Lesson 8: Carry forward ONLY the constraints that matter.** The master prompt has 97 rules. The auxiliary carries forward approximately 25 of them -- the ones that are binary, verifiable, and historically correlated with failure. The other 72 rules are delegated to the master prompt document itself, which agents read but the auxiliary doesn't re-enforce.

**Lesson 9: Position motivational content for humans, not agents.** The master prompt opens with conviction for agents. The auxiliary positions conviction at the END ("Critical Reminders") for the human orchestrator who reads the whole document, then routes only procedural content to spawned agents.

**Lesson 10: Make the artifact chain the accountability mechanism.** Neither the master nor the remediation tracked artifact production systematically. The auxiliary defines a 15-file artifact chain (00-prompt-digest through 12-final-verdict) where MISSING artifacts prove INCOMPLETE phases.

---

## 9. SYNTHESIS: THE THREE PROMPT ARCHETYPES

These three documents represent three distinct prompt archetypes, each with characteristic strengths and weaknesses:

### Archetype 1: THE REGULATORY PROMPT (Master)

**Metaphor:** A building code document.

| Strength | Weakness |
|----------|----------|
| Exhaustive coverage of every constraint | Too many rules to hold in working memory |
| Binary verifiable rules (97 rule IDs) | Scattered across domains, not phases |
| Rich backstory enables human understanding | Backstory wastes agent context |
| Triple-reinforcement of critical rules | Redundancy diffuses attention |
| Conviction layer creates shared vision | Vision is unactionable for agents |

**Best used for:** AUDITING a completed artifact. The master prompt is an exceptional ASSESSMENT tool -- its rules map directly to verification checks. As an EXECUTION tool, it fails because it tells agents what the world should look like, not how to build it.

### Archetype 2: THE RECIPE PROMPT (Remediation)

**Metaphor:** A cookbook recipe.

| Strength | Weakness |
|----------|----------|
| Sequential phases with self-contained instructions | Cross-phase dependencies may be missed |
| Concrete values (hex codes, px values, CSS blocks) | Specificity makes it non-transferable to other pages |
| Action verbs (Find, Delete, Add, Replace) | Requires existing artifact to modify |
| Phase 0 deallocation (strategic deletion) | Deletion recipes are page-specific |
| Perception thresholds as quality gates | Thresholds are empirically derived, may not generalize |

**Best used for:** MODIFYING an existing artifact toward a known quality target. The remediation excels when the problem is well-defined (these 15 root causes) and the solution is specific (these exact CSS changes). It fails when the problem requires creative judgment (which the master's conviction layer was designed to provide).

### Archetype 3: THE ORCHESTRATION PROMPT (Auxiliary)

**Metaphor:** A stage director's script.

| Strength | Weakness |
|----------|----------|
| Audience separation (orchestrator vs executor) | Requires 2-layer reading (wrapper + delegated docs) |
| Comprehension gates (extraction artifacts) | Extraction artifacts add process overhead |
| Anti-skimming enforcement | Enforcement mechanisms are themselves skimmable |
| Failure recovery as first-class concern | Recovery protocols add complexity |
| Artifact chain accountability | Chain becomes busywork if phases are trivial |

**Best used for:** MANAGING a multi-agent team executing a complex prompt. The auxiliary excels when multiple agents with different roles must coordinate on a shared artifact. It fails as a standalone execution document (it delegates too much to external files).

### 9.1 The Ideal Prompt

The three archetypes suggest an ideal prompt structure:

```
Layer 0: ORCHESTRATION (Auxiliary-style)
  - Team topology, agent roles, file routing
  - Comprehension gates (extraction artifacts)
  - Artifact chain and checkpoints
  - Failure recovery protocols
  - Position: WRAPPER around execution spec

Layer 1: EXECUTION (Remediation-style)
  - Sequential phases, each self-contained
  - Concrete values, copy-paste CSS
  - Action verbs: Find, Delete, Add, Replace
  - Perception checks after each phase
  - Position: THE CORE of what agents execute

Layer 2: VERIFICATION (Master-style)
  - Binary rule IDs for post-build audit
  - Parameter table for threshold verification
  - Gate sequence for quality checkpoints
  - Position: APPENDIX, read by auditor agents only

Layer 3: CONTEXT (Master A-section, condensed)
  - Empirical evidence (not motivation)
  - 5-10 lines of "why" per phase (not 82 lines of vision)
  - Position: CSS COMMENTS within execution phases, not separate section
```

This layered architecture uses each archetype where it excels and avoids using it where it fails.

---

## 10. QUANTITATIVE SUMMARY

| Metric | Master Prompt | Remediation Spec | Auxiliary Wrapper |
|--------|--------------|------------------|-------------------|
| Total lines | 963 | 1,025 | 398 |
| Constraint:Action ratio | 3.0:1 | 0.32:1 | 0.60:1 |
| Abstract:Concrete ratio | 0.53:1 | 0.04:1 | 0.32:1 |
| Backstory/motivation lines | ~272 (28%) | ~20 (2%) | ~60 (15%) |
| Actionable recipe lines | ~0 (0%) | ~680 (66%) | ~0 (0%) |
| Rule IDs defined | 97 | 0 | 0 (references master's) |
| CSS code blocks | 2 (exemplar only) | 18 (copy-paste ready) | 0 |
| Perception checks | 0 | 6 (one per major phase) | 0 |
| Cross-reference load | HIGH (4+ sections per gate) | LOW (self-contained phases) | MEDIUM (delegates to external) |
| Audience | All agents equally | Single builder | Team-lead orchestrator |
| Redundancy per critical rule | 4.3x | 2.0x | 1.0x (delegates) |
| Empirical outcome | PA-05 1.5/4 (DO NOT SHIP) | PA-05 2.5/4 (up from 1.5) | Structured the invocation of both |

---

**END OF ANALYSIS**

The craftsmanship evolution across these three documents traces a clear developmental arc: from regulatory completeness (master) to actionable specificity (remediation) to orchestrated accountability (auxiliary). Each document learned from its predecessor's failures and preserved its strengths. The master taught us what quality LOOKS LIKE; the remediation taught us how to PRODUCE it; the auxiliary taught us how to ORGANIZE the production. The ideal prompt -- which none of the three achieves alone -- would layer all three approaches: orchestration wrapper, execution recipe core, verification appendix, and empirical context as inline comments.

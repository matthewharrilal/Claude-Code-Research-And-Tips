# Workflow as Formal Information System: Deep Architecture Analysis

## Preamble

This analysis treats the Create-Revise-Execute workflow as a formal information system, applying concepts from information theory, control systems theory, and distributed systems architecture. The system under analysis operates within Claude Code's context window constraints (~200K tokens, quality degradation at 60-70%), orchestrating multi-instance, multi-session work on a design system with 490+ files and 17,084 lines of planning infrastructure.

The analysis draws on concrete artifacts: EXECUTION-STATE.md (542 lines), MASTER-STATE.md (398 lines), FIX-STATE.md (89 lines), AUDIT-STATE.md (25 lines), OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md (537 lines), OD-RETROSPECTIVE-AND-PROTOCOL-v2.md (589 lines), OD-EXECUTION-PROTOCOL.md (2,154+ lines), CURRENT-STATE.md (126 lines), the showcase/CLAUDE.md (500+ lines), and the project CLAUDE.md (234 lines).

---

## A. Information Flow Topology

### Directed Graph Structure

The system forms a directed acyclic graph with feedback loops at specific junctures. Here is the topology:

```
INFORMATION SOURCES (Entry Points)
├── S1: User domain knowledge (design intent, KortAI identity)
├── S2: External research (web resources, design patterns)
├── S3: Source reference files (T1 synthesis: 6 files, ~94K)
├── S4: Previous execution artifacts (OD HTML files, DD files)
├── S5: Tool outputs (Playwright screenshots, DOM evaluations)

TRANSFORMS (Processing Nodes)
├── T1: Instance A — Exploration + Plan Creation
│   Input:  S1 + S2 + S3 + S4 (loaded into context)
│   Output: Plan document (1,000-6,000 lines)
│   Transform: Expands tacit knowledge into explicit procedural specification
│
├── T2: Instance B — Cross-Reference Revision
│   Input:  T1 output + S3 (source documents)
│   Output: Revision tracker (56+ items)
│   Transform: Gap detection between plan intent and source constraints
│
├── T3: Instance C — Agent Team Execution
│   Input:  T2 output (revised plan) + S3 (subset)
│   Output: Product artifacts (HTML files) + Execution logs
│   Transform: Plan decomposition into parallel agent tasks
│   Sub-transforms:
│   ├── T3a: Builder agents (HTML production)
│   ├── T3b: Weaver agent (cross-reference maintenance)
│   ├── T3c: Auditor agents (verification)
│   └── T3d: Synthesizer agent (report compilation)
│
├── T4: Retrospective Synthesis
│   Input:  T3 execution logs + T3 product artifacts + observed failures
│   Output: Retrospective document (500-600 lines)
│   Transform: Experience compression into transferable rules
│
├── T5: Memory Distillation
│   Input:  T4 output
│   Output: MEMORY.md entries (10-25 lines per phase)
│   Transform: Lossy compression of operational lessons into heuristics

SINKS (Consumption Points)
├── K1: Product artifacts (6 HTML files, ~11,980 lines) — TERMINAL SINK
├── K2: MEMORY.md — PERSISTENT SINK (survives session boundaries)
├── K3: Retrospective docs — SEMI-PERSISTENT SINK (survives within project)
├── K4: Plan documents — EPHEMERAL SINK (consumed once, then archived)
├── K5: STATE files — VOLATILE SINK (overwritten each phase)
├── K6: Inline threading headers — EMBEDDED SINK (lives inside product files)

FEEDBACK LOOPS (see Section F for detailed analysis)
├── F1: T4 → T1 (retrospective informs next plan)
├── F2: T2 → T1 (revision informs plan structure)
├── F3: T3.failure → T5 → T1 (execution failure → hard rule)
├── F4: T5 → T3 (MEMORY.md → agent prompt constraints)
├── F5: K6 → T3 (threading headers → modification guards)
```

### Information Duplication Map

Information enters once but replicates across the system:

| Original Fact | CLAUDE.md | MEMORY.md | Plan Doc | STATE File | Threading Header | Retrospective |
|---------------|-----------|-----------|----------|------------|-----------------|---------------|
| "border-radius: 0 always" | YES | NO | YES | NO | YES (in 490 files) | YES |
| "Lead never runs Playwright" | NO | YES | YES | NO | NO | YES |
| "Weaver is infrastructure" | NO | YES | YES | NO | NO | YES |
| "Soul checklist = 10 lines" | NO | YES | YES | NO | NO | YES |
| Phase completion status | YES | YES | YES | YES | NO | YES |
| Agent team size guidance | NO | YES | YES | NO | NO | YES |
| Token values (CSS variables) | NO | NO | YES | YES | YES | NO |

Key observation: Phase completion status appears in 5 of 6 locations. This is the most duplicated fact class.

### Where Information Is Consumed

The critical asymmetry: information flows broadly during creation but is consumed narrowly during execution. The 2,154-line OD-EXECUTION-PROTOCOL.md was consumed by Instance C (the executor), but agents within that instance consumed only their individual prompt (50-100 lines extracted from the plan). The plan's audience is actually the lead orchestrator, not the executing agents.

---

## B. Entropy Analysis

Entropy in this system manifests as information degradation -- loss of fidelity, context, or recoverability. Five primary entropy sources and two secondary ones are identified.

### Entropy Source 1: Context Window Compaction

**What gets lost:** Working memory -- the accumulated understanding built through file reads, reasoning chains, and intermediate conclusions. The retrospective documents this explicitly: "Recovery after context compaction requires 15-25 minutes of file reading."

**What causes it:** The 200K token limit with quality degradation starting at 60-70%. Reading 5-15 reference files (each 500-6,000 lines) to build context consumes 30-50% of the window before any work begins. The plan document itself (40-300KB, approximately 4,000-30,000 tokens) then consumes another 5-15%.

**Current mitigation:** 5-layer memory hierarchy (CLAUDE.md, MEMORY.md, STATE files, journal files, inline headers). The system's retrospective notes: "the 12-step recovery protocol was designed to survive compaction, and the DESIGN of the protocol contributed to success." The mitigation is prophylactic rather than reactive.

**Residual entropy:** The "mental model" -- the integrated understanding of WHY decisions were made -- cannot be fully externalized. The CURRENT-STATE.md file attempts this with Section 4 ("What's the current mental model?"), but admits this is necessarily incomplete. After compaction, a fresh instance can know WHAT happened and WHAT to do next, but cannot fully reconstruct the reasoning trajectory that led to the current state.

### Entropy Source 2: Agent Termination Boundary

**What gets lost:** Agent-internal reasoning, partial results, and observations that weren't persisted to disk before the agent terminated.

**What causes it:** Parallel agents are one-shot (they produce output and terminate). The retrospective documents this directly: "OD-001 and OD-003 external research was conducted by agents that terminated or whose sessions crashed before persisting results as standalone documents."

**Current mitigation:** Hard rule: "Research agents MUST write to file BEFORE returning." The v3 retrospective confirms: "All agents wrote to file incrementally, with compaction-safe summaries" resulting in "zero data loss despite 17 agents."

**Residual entropy:** The reasoning behind why an agent chose a particular approach (vs. alternatives considered and rejected) is lost even when the output is persisted. Agent reports capture conclusions but not deliberation.

### Entropy Source 3: Compression Across Memory Layers

**What gets lost:** Nuance, edge cases, conditional applicability, and contextual qualifiers. See Section C for quantitative analysis.

**What causes it:** Each memory layer has a size constraint that forces lossy compression: 500-line report to 50-line summary to 25-line STATE entry to 10-line MEMORY entry.

**Current mitigation:** Multiple compression paths preserve different facets. The retrospective captures process lessons; the STATE file captures position; MEMORY.md captures hard rules. The same event is compressed differently in each, creating a rough holographic encoding.

**Residual entropy:** The specific circumstances that generated a rule are lost. MEMORY.md says "Per-file ownership eliminates all contention" but doesn't preserve the specific contention incident that proved it. Future instances must trust the rule without being able to evaluate whether their current situation matches the original context.

### Entropy Source 4: Inter-Instance Transfer Gap

**What gets lost:** The conversational context, clarifications, and implicit agreements built between user and Instance A that Instance B and Instance C never witness.

**What causes it:** Each instance starts fresh. The plan document is the ONLY transfer medium between instances. User intent that wasn't explicitly written into the plan is lost.

**Current mitigation:** The Create-Revise pattern (Instance B cross-referencing the plan against source documents) catches explicit gaps. The 56 revisions found in one case demonstrate this mechanism's effectiveness at catching factual omissions.

**Residual entropy:** Intent misalignment -- cases where the plan accurately describes what to do but fails to convey why, leading to correct execution of the wrong thing. The v2 retrospective captures this: "First-plan iterations always need revision despite having all source material loaded." The revision process catches structural gaps but not intent gaps.

### Entropy Source 5: Temporal Decay of STATE Files

**What gets lost:** Historical state transitions. STATE files are overwritten, not appended. The CURRENT-STATE shows only the current snapshot, not the trajectory.

**What causes it:** Design decision to keep STATE files small (25-89 lines) for fast loading after compaction. Appending would cause unbounded growth.

**Current mitigation:** Execution journals capture the timeline (CURRENT-STATE.md Section 6 is an execution log with timestamps). But these journals are per-session, not per-project.

**Residual entropy:** The sequence of decisions that produced the current state is distributed across session journals, retrospectives, and MEMORY.md. Reconstructing the full decision history requires reading multiple documents -- which itself consumes context.

### Secondary Entropy Sources

**Entropy Source 6: Prompt-to-Execution Fidelity Gap.** The 2,154-line audit prompt specified 17 sub-checks with exact JavaScript evaluation patterns. Agents executed approximately one-third of the described work. The v3 retrospective quantifies this: "The prompt's ambition-to-capacity ratio was approximately 3:1." The entropy is in what gets silently dropped -- there is no error signal when an agent skips a check.

**Entropy Source 7: Governance Document Non-Enforcement.** The showcase/CLAUDE.md mandates a 5-step research grounding loop. The v2 retrospective confirms: "None of the builder agents followed it." Information encoded in governance documents that aren't loaded into agent prompts has zero enforcement, creating a gap between the system's declared constraints and its actual constraints. The effective constraint set is the intersection of (what's written) and (what's loaded into context at execution time).

---

## C. Compression Theory

The system exhibits a 5-stage compression pipeline. Each stage is analyzed for compression ratio, lossy/lossless characteristics, and irrecoverable information.

### Stage 1: Agent Output to Report

**Input:** 500-line agent analysis file (e.g., `visual-audit-003.md` at 294 lines, `systematic-audit-004.md` at 481 lines)
**Output:** 50-line section in the synthesized audit report
**Compression ratio:** ~10:1
**Lossy/lossless split:** ~85% lossy / 15% lossless

**What's preserved (lossless):**
- Finding IDs and severity classifications
- Pass/fail verdicts
- Specific CSS property violations with values
- Cross-agent confirmation counts

**What's lost (lossy):**
- The reasoning chain that led to each finding
- Alternative interpretations the agent considered and rejected
- The visual observations that preceded programmatic verification
- Confidence qualifiers ("probably," "in most viewports")
- Interaction effects between findings (finding A might explain finding B)

**Irrecoverable after this stage:** The agent's perceptual experience. When a visual auditor writes "this feels heavy," the synthesized report might capture "border-width: 2px, should be 3px" -- the measurement survives but the felt quality that motivated the measurement does not.

### Stage 2: Report to STATE File

**Input:** 688-line audit report (`OD-GRANULAR-AUDIT-RESULTS.md`)
**Output:** 25-line state file (`AUDIT-STATE.md`)
**Compression ratio:** ~28:1
**Lossy/lossless split:** ~95% lossy / 5% lossless

**What's preserved (lossless):**
- Phase completion status (boolean)
- Agent count
- Finding count by severity
- Soul violation count (the single most critical metric)

**What's lost (lossy):**
- All 89 individual findings and their descriptions
- All adversarial debates and verdicts
- Cross-reference analysis
- Nuanced findings like the "3 dialects" observation
- Recommendations and fix priorities

**Irrecoverable after this stage:** Everything that makes the audit useful beyond "did it happen and how many issues were found." The STATE file is a receipt, not a reference. Recovery from this file alone would tell you an audit occurred but not what it found.

### Stage 3: STATE File + Retrospective to MEMORY.md

**Input:** 25-line STATE file + 537-line retrospective + 589-line protocol v2
**Output:** ~40-line MEMORY.md section (the "Phase 2.2" and "Phase 2.3" entries)
**Compression ratio:** ~29:1 (from the combined inputs)
**Lossy/lossless split:** ~90% lossy / 10% lossless

**What's preserved (lossless):**
- Commit hash
- File count and line count
- Key metrics (fixes applied, tests passed)
- Hard rules (numbered list of battle-tested constraints)
- Team structure decisions

**What's lost (lossy):**
- Open questions and avenues of exploration
- Nuanced analysis of what worked partially
- The cost-value assessment
- Specific agent behavior observations
- Playwright contention workarounds
- The meta-insights about epistemological limits of agent auditing

**Irrecoverable after this stage:** The v3 retrospective's most valuable content -- Part 7's Open Questions and Avenues of Exploration -- is entirely lost. These represent the system's generative frontier: the questions it hasn't answered yet. MEMORY.md preserves what was learned but not what remains unknown.

### Stage 4: MEMORY.md to Agent Prompt Constraints

**Input:** ~40-line MEMORY.md section
**Output:** 10-line embedded constraint block in agent prompt
**Compression ratio:** ~4:1
**Lossy/lossless split:** ~70% lossy / 30% lossless

**What's preserved (lossless):**
- Binary rules ("NEVER run Playwright," "ALWAYS write to file")
- Team architecture requirements ("Weaver is mandatory")
- Numeric constraints ("10-12 agents is the sweet spot")

**What's lost (lossy):**
- Context for why each rule exists
- Conditional applicability ("for auditing" vs "for building")
- The distinction between proven rules and provisional heuristics

**Irrecoverable after this stage:** The experiential basis of each constraint. An agent following "Lead stays THIN" doesn't know that this rule emerged from observing a lead agent crash at 77% context utilization after running Playwright screenshots. Without that grounding, the rule is followed mechanically rather than understood adaptively.

### Stage 5: Agent Prompt Constraints to Execution Behavior

**Input:** 10-line constraint block
**Output:** Agent behavior (not a document -- a behavioral change)
**Compression ratio:** N/A (transforms modality from text to behavior)
**Lossy/lossless split:** Depends on agent compliance

**What's preserved:** The constraints that are absolute and binary (border-radius: 0) achieve 100% behavioral compliance. The retrospective confirms: "Zero violations across 3,479+ elements."

**What's lost:** Spectrum constraints that require judgment degrade significantly. The retrospective documents: "'1-2px borders signal uncertainty' did not [propagate] -- 108 CSS declarations with thin borders exist because the rule requires judgment."

**The fundamental finding:** Binary constraints survive 5-stage compression with 100% fidelity. Judgment-dependent constraints degrade at each stage and achieve approximately 0% fidelity by stage 5.

### Compression Pipeline Summary

```
Agent Output    →    Report    →    STATE    →    MEMORY    →    Prompt    →    Behavior
(500 lines)     (50 lines)    (25 lines)    (40 lines)    (10 lines)     (binary: yes/no)
     ↓               ↓              ↓             ↓             ↓              ↓
   10:1            28:1           29:1          4:1           N/A
   85% lossy       95% lossy      90% lossy     70% lossy     100% for binary
                                                               ~0% for spectrum
```

Total compression from agent output to behavioral change: approximately 50:1 for content that makes it through, with ~99.8% of the original information lost. The 0.2% that survives is the set of absolute binary rules.

---

## D. Signal-to-Noise in Plans

### The Infrastructure Ratio

Plans in this system serve two audiences with conflicting needs:

1. **The executing agent** needs: what to build, what constraints to honor, what constitutes done.
2. **The recovery system** needs: how to resume after compaction, where state lives, what was already done.

Analysis of the OD-EXECUTION-PROTOCOL.md (2,154+ lines):

| Section Type | Approximate Lines | Percentage | Audience |
|-------------|-------------------|------------|----------|
| Recovery protocol | 76 (lines 17-93) | 3.5% | Recovery system |
| Paradigm shift / philosophy | ~200 | 9.3% | Planning/context |
| Inline section creation rules | ~300 | 13.9% | Process enforcement |
| Research grounding mandate | ~200 | 9.3% | Agents (aspirational) |
| Actual build instructions | ~500 | 23.2% | Agents (operational) |
| Quality checklists | ~300 | 13.9% | Verification agents |
| Agent team architecture | ~400 | 18.6% | Lead orchestrator |
| Tracking/logging templates | ~178 | 8.3% | Process maintenance |

By this breakdown:
- **Operational signal** (what to build + how to verify): ~37% (800 lines)
- **Process infrastructure** (recovery + tracking + enforcement): ~35% (754 lines)
- **Contextual framing** (philosophy + paradigm): ~28% (600 lines)

The recovery infrastructure grew from 15% to 40% across three plan generations. This is documented in the user's characterization and confirmed by comparing earlier and later plan structures.

### Is Tracking Infrastructure Signal or Noise?

From the perspective of the executing agent, the tracking infrastructure is definitionally noise -- it does not contribute to building the product artifact. A builder agent creating OD-004 has no use for the recovery protocol or the logging templates.

However, from the perspective of the system as a whole, the tracking infrastructure is signal for a different channel: the coordination channel. The system has two information channels operating simultaneously:

1. **Product channel:** Source knowledge --> Plan --> Agent --> Product artifact
2. **Coordination channel:** System state --> STATE files --> Recovery protocol --> Resumed execution

The tracking infrastructure is signal on the coordination channel but noise on the product channel. The problem is that both channels share the same medium (the plan document) and the same capacity constraint (the context window).

### Minimal Viable Plan

A minimal viable plan for agent execution would contain:

```
MINIMAL VIABLE PLAN (estimated ~200 lines):

1. IDENTITY BLOCK (10 lines)
   - Soul checklist (binary rules only)
   - Locked token values (:root CSS block)

2. TASK SPECIFICATION (50 lines per agent, ~150 for 3 agents)
   - What to build (file name, content topic)
   - DD pattern pairing
   - Research findings to apply (by ID)
   - Acceptance criteria (measurable)

3. DONE CRITERIA (20 lines)
   - Soul compliance checklist
   - File output requirements
   - Threading header template

4. COORDINATION (20 lines)
   - File ownership map (which agent writes which file)
   - Shared files and lock protocol
   - Report format
```

This 200-line plan represents approximately 9% of the current 2,154-line plan. The remaining 91% serves the coordination channel, the recovery system, and the philosophical framing.

The question of whether to trim the plan depends on compaction probability. If compaction never occurs, the 91% is pure overhead. If compaction occurs once during execution, the recovery protocol saves 15-25 minutes. Over 6+ sessions with "multiple context limit crashes" (as documented in the v2 retrospective), the recovery infrastructure pays for itself several times over.

The paradox identified by the user is real: the recovery infrastructure prevented the crashes that would have required recovery. This is the prophylactic principle in action. The system cannot know whether it would have crashed without the infrastructure, because the infrastructure changed the behavior that would have caused the crash (specifically, by forcing agents to write incrementally and keeping the lead thin).

---

## E. The Duplication Cost

### Fact Duplication Map

Specific facts that appear in 3 or more locations:

**Fact 1: "border-radius: 0 always"**
- `MASTER-STATE.md` (locked design tokens section, line 317)
- `DESIGN-TOKEN-SUMMARY.md` (T1 synthesis)
- `SOUL-DEFINITION.md` (soul principle #6)
- `PRODUCTION-RULES.md` (implementation rule)
- `ANTI-PATTERNS-REGISTRY.md` (anti-pattern: rounded corners)
- `showcase/CLAUDE.md` (soul verification checklist)
- Agent prompt embedded soul block (10-line extraction)
- 490 inline threading headers (embedded in product files)
- **Count: 8+ canonical locations + 490 embedded copies**

**Fact 2: Phase completion status (e.g., "DD explorations: 6/6 INCLUDE")**
- `MASTER-STATE.md` (state machine diagram)
- `MEMORY.md` (distilled phase summary)
- `CLAUDE.md` (project CLAUDE.md session work section)
- `CURRENT-STATE.md` (execution journal)
- `MASTER-PLAYBOOK.md` (phase status table)
- **Count: 5 locations**

**Fact 3: Agent team architecture rules (e.g., "Lead stays THIN")**
- `MEMORY.md` (hard rules section)
- `OD-RETROSPECTIVE-AND-PROTOCOL-v2.md` (Part 3.1)
- `OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md` (Part 8, rule 4)
- `OD-EXECUTION-PROTOCOL.md` (agent team section)
- `OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md`
- **Count: 5 locations**

**Fact 4: "Weaver is infrastructure, not experimental"**
- `MEMORY.md` (first team lessons + second team lessons)
- `OD-RETROSPECTIVE-AND-PROTOCOL-v2.md` (Part 2.2)
- `OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md` (Part 2.3 + Part 8, rule 13)
- **Count: 4 locations (mentioned 5 times)**

**Fact 5: CSS token values (the full :root block)**
- `DESIGN-TOKEN-SUMMARY.md` (canonical source)
- `MASTER-STATE.md` (quick reference section)
- `css/variables.css` (production CSS)
- Plan documents (embedded for agent reference)
- **Count: 4+ locations**

### Cost of Duplication

**Context cost:** Each duplicated fact consumes tokens in every document that contains it. The CSS token block is approximately 20 lines / 400 tokens. Appearing in 4 documents costs 1,600 tokens. The 490 inline threading headers, each approximately 15-30 lines, represent approximately 7,350-14,700 lines of header content across the codebase.

**Staleness cost:** When a fact changes (e.g., a phase completes), all locations must be updated. The system documents this risk: "Must be updated after EVERY major action -- stale state = dangerous state." In practice, MASTER-STATE.md was not updated after OD-001 through OD-006 were completed (it still shows "OD-001 next" while the ODs are built and audited). Staleness is the primary failure mode of duplication.

**Coherence cost:** When duplicated facts diverge, the system must have a precedence order to resolve conflicts. This exists implicitly (T1 synthesis files are authoritative, CLAUDE.md is derived) but is only partially documented in SOURCE-OF-TRUTH-REGISTRY.md.

### Value of Duplication

**Compaction survival:** When context is lost, the most recently loaded document determines what the system knows. Duplication ensures that critical facts (token values, phase status, binary rules) can be recovered from ANY of their locations, not just the canonical one.

**Load-time optimization:** Reading MASTER-STATE.md (398 lines) loads both position state AND token values, avoiding a second file read to DESIGN-TOKEN-SUMMARY.md. This saves context in a resource-constrained environment.

**Failure isolation:** If one file is corrupted, deleted, or moved, the fact survives in other locations. The system explicitly documents supersession chains: "ANTI-PATTERNS.md -- SUPERSEDED by T1 ANTI-PATTERNS-REGISTRY.md."

**Net assessment:** Duplication is a rational strategy in a system where the primary failure mode is information loss (compaction). The cost of maintaining coherence across 5 copies is lower than the cost of losing a critical fact when the only copy is in a file that wasn't loaded before compaction. The 490 inline headers are the most extreme form of this -- embedding provenance metadata directly in product files ensures it survives any system-level reorganization.

---

## F. Feedback Loop Analysis

### Loop F1: Execution to Retrospective to Next Plan (Reinforcing)

```
Execution → Observed Failures → Retrospective → Hard Rules → Next Plan → Next Execution
```

**Latency:** 1 phase boundary (hours to days). The retrospective is written at the end of each phase; the next plan incorporates its rules.

**What survives:** Binary rules ("Lead stays THIN"), team architecture patterns ("Weaver is infrastructure"), numeric constraints ("10-12 agents"). These are the highest-fidelity survivors because they're stated absolutely.

**What's lost:** Contextual reasoning, uncertainty about causation, open questions. The retrospective's Part 7 (Open Questions) represents the system's generative frontier, but it doesn't cross phase boundaries in any compressed form.

**Loop type:** Reinforcing. Each phase produces more rules, making the next plan larger and more constrained. The plan grew from generation 1 to generation 3. The constraint set is monotonically increasing -- rules are added but never removed.

**Risk:** Constraint accumulation. As the system learns more rules, plans grow, consuming more context, leaving less room for actual work. The recovery infrastructure growing from 15% to 40% of plan content is evidence of this reinforcing dynamic.

### Loop F2: Revision to Creation (Balancing)

```
Instance A Plan → Instance B Review → Revision List → Revised Plan
```

**Latency:** 1 instance boundary (minutes to hours).

**What survives:** Factual gaps (missing file references, incorrect counts, omitted constraints). The 56 revisions found in one case were predominantly of this type.

**What's lost:** Structural or strategic issues. Instance B cross-references against source documents, catching cases where the plan contradicts or omits source material. But it cannot catch cases where the plan's overall strategy is suboptimal, because it has no reference point for "better strategy."

**Loop type:** Balancing. It corrects errors without amplifying them. The revision process converges (fewer revisions in later iterations) rather than diverging.

### Loop F3: Failure to Hard Rule (Reinforcing, One-Way)

```
Execution Failure → Root Cause Analysis → Hard Rule Added to MEMORY.md → All Future Executions
```

**Latency:** 1 phase boundary.

**What survives:** The rule itself. "SendMessage is the ONLY way teammates hear you" emerged from agents sending messages into the text stream instead of using the tool. The failure mode is fully captured in the rule.

**What's lost:** The frequency and severity of the failure. A rule from a one-time minor inconvenience has the same weight as a rule from a catastrophic data loss event. There is no severity metadata on hard rules.

**Loop type:** Reinforcing, one-way ratchet. Rules are added but never removed, even when the underlying cause is fixed. This is intentional -- the system treats rules as permanent because the failure they prevent is costly relative to the overhead of following the rule.

**Risk:** Rule fossilization. The MEMORY.md entry "Sessions processing 50+ files in serial hit context wall -- use parallel agents" was learned in a specific context. If context windows expand to 1M tokens, this rule becomes unnecessary but won't be automatically retired.

### Loop F4: MEMORY.md to Agent Prompts (Feed-Forward)

```
MEMORY.md → Lead reads at session start → Lead embeds rules in agent prompts → Agent behavior
```

**Latency:** 0 (synchronous within session start).

**What survives:** Rules that are simple enough to embed in a 10-line prompt block.

**What's lost:** Rules that require context or judgment. The v3 retrospective identifies this precisely: "Simple, absolute, zero-tolerance rules propagate reliably through agent teams. Complex, contextual, judgment-dependent guidelines do not."

**Loop type:** Feed-forward (not a loop -- one-directional from MEMORY to execution with no return path). Agent behavior does not update MEMORY.md.

### Loop F5: Soul Compliance (Self-Reinforcing Success)

```
Soul Checklist (10 lines) → Embedded in every agent prompt → 100% compliance → Validates checklist → Checklist retained unchanged
```

**Latency:** 0 (instantaneous within execution).

**What survives:** The 5 binary constraints (border-radius: 0, box-shadow: none, no drop-shadow filter, locked palette, locked typography).

**What's lost:** Nothing -- this is the system's only lossless feedback loop. The binary nature of the constraints means they either propagate perfectly or not at all. Across 3,479+ DOM elements, they propagated perfectly.

**Loop type:** Self-reinforcing success loop. Success validates the mechanism, which reinforces its use, which continues producing success. This is the system's most efficient information channel.

---

## G. Critical Path Analysis

### Minimum Viable Information Flow

The critical path from creation to execution -- the absolute minimum information that must transfer to produce product artifacts -- is:

```
CRITICAL PATH (estimated ~150 lines of information):

1. Soul constraints (10 lines)
   - The 5 binary rules + locked CSS token block
   - MANDATORY: without this, product violates design system

2. Content specification (30 lines per OD, ~180 for 6 ODs)
   - Topic assignment
   - DD pattern pairing
   - Research finding IDs to apply
   - Content requirements
   - MANDATORY: without this, agents don't know what to build

3. File ownership (10 lines)
   - Which agent writes which file
   - MANDATORY: without this, agents have write conflicts

4. Done criteria (10 lines)
   - Soul compliance verification
   - Output format (inline header template)
   - MANDATORY: without this, agents don't know when to stop
```

**Critical path content: approximately 210 lines.**

### Percentage Analysis

| Category | Lines | % of 17,084 | On Critical Path? |
|----------|-------|-------------|-------------------|
| Soul constraints | 50 | 0.3% | YES |
| Content specifications | 300 | 1.8% | YES |
| File ownership | 30 | 0.2% | YES |
| Done criteria | 50 | 0.3% | YES |
| Agent team architecture | 600 | 3.5% | PARTIALLY (team structure yes, communication protocol optional) |
| Quality checklists | 500 | 2.9% | PARTIALLY (soul verification yes, deep audit optional for initial pass) |
| Recovery protocols | 1,500 | 8.8% | NO (insurance) |
| Research grounding | 2,000 | 11.7% | NO (aspirational -- proven not followed by agents) |
| Inline section rules | 3,000 | 17.6% | NO (process enforcement, not product creation) |
| Philosophical framing | 2,000 | 11.7% | NO (context for humans, not agents) |
| Tracking/logging | 2,000 | 11.7% | NO (coordination channel) |
| Retrospective content | 3,000 | 17.6% | NO (future-facing, not current-execution) |
| Session history | 2,054 | 12.0% | NO (archival) |

**Critical path: approximately 430 lines (2.5% of 17,084)**
**Insurance (valuable but not on critical path): approximately 5,100 lines (29.9%)**
**Coordination overhead: approximately 7,000 lines (41.0%)**
**Archival/philosophical: approximately 4,554 lines (26.7%)**

The finding: **2.5% of planning content is on the critical execution path.** The remaining 97.5% serves coordination, recovery, philosophy, and archival purposes.

This does NOT mean the 97.5% is waste. The retrospective documents that recovery infrastructure prevented crashes, coordination overhead enabled parallel execution, and philosophical framing aligned human-AI intent. But it does mean the system has a planning-to-execution efficiency of approximately 2.5% when measured by critical path content.

---

## H. Bottleneck Identification

### Bottleneck 1: Human Routing Between Instances (Throughput Bottleneck)

**Location:** The transition points Instance A to Instance B to Instance C.

**Nature:** The user manually starts each instance, loads the plan document, and provides the initial prompt. This is a serial bottleneck in an otherwise parallelizable system.

**Impact:** Each transition takes 5-15 minutes for the user to initiate and 15-25 minutes for the instance to absorb context. Total transition cost: 40-80 minutes across the three-instance pipeline.

**Why it persists:** Claude Code instances cannot spawn other Claude Code instances at the top level. The user is the only agent with cross-instance coordination authority.

**Possible mitigation:** Automated instance chaining where Instance A's output file triggers Instance B's startup with a pre-defined prompt. This would require tooling outside Claude Code's current capabilities.

### Bottleneck 2: Context Window Capacity (Bandwidth Bottleneck)

**Location:** Every instance, but most acute in Instance C (the executor) and Instance A (the creator).

**Nature:** The 200K token window with 60-70% quality degradation creates a hard upper bound on how much information any single instance can process simultaneously. The system's total information (17,084 lines of plans alone, plus source files) exceeds this by a factor of 5-10x.

**Impact:** Forces sequential file reading, prioritized loading, and lossy compression. The 12-step recovery protocol exists specifically because the system cannot load everything at once.

**Why it persists:** Hardware/model constraint. The context window is a property of the model, not the workflow.

**Possible mitigation:**
- More aggressive pre-filtering (load only the critical 2.5% on the critical path)
- RAG-style retrieval instead of full document loading
- Structured handoff documents optimized for token efficiency (tables instead of prose)

### Bottleneck 3: MEMORY.md Size Constraint (Capacity Bottleneck)

**Location:** The MEMORY.md file, which the user notes has a practical limit of approximately 200 lines.

**Nature:** MEMORY.md is the only information that persists across ALL sessions. Its capacity constraint forces extreme compression (50:1 from source material). Every new lesson either replaces an old one or isn't captured.

**Impact:** The system's long-term learning rate is bounded by MEMORY.md's capacity. With ~200 lines and entries averaging ~5 lines per lesson, the system can hold approximately 40 lessons. The project has already generated more than 40 lessons across its three retrospectives.

**Why it persists:** MEMORY.md is loaded at session start, so it competes for context window space with everything else. Larger MEMORY.md means less room for actual work.

**Possible mitigation:**
- Tiered memory: "always load" (20 lines) + "load on demand" (200 lines)
- External memory tools (mem0, which the user hasn't adopted)
- Phase-specific memory files loaded only when relevant

### Bottleneck 4: Playwright Contention (Resource Bottleneck)

**Location:** Multiple agents sharing a single browser instance.

**Nature:** When multiple agents attempt Playwright operations simultaneously, they interfere with each other (navigating tabs away, competing for page state). The v3 retrospective documents: "Visual-first-a reported: 'Playwright contention prevented me from capturing OD-002 screenshots.'"

**Impact:** Reduces effective parallelism of visual auditing. Agents compensate by retrying or skipping, but throughput is reduced.

**Why it persists:** Single browser instance shared across all agents in a session.

**Possible mitigation:** Multiple HTTP ports (each OD on its own port), sequential pairs within waves, or separate browser instances per agent.

### Bottleneck 5: Stale Governance Documents (Coherence Bottleneck)

**Location:** CLAUDE.md, MASTER-STATE.md, and other "always loaded" documents.

**Nature:** These documents are loaded at session start but not always updated during or after sessions. MASTER-STATE.md still shows "OD-001 next" even though all 6 ODs have been built, audited, and fixed. CLAUDE.md's "Current Session Work" section references 2026-01-26 work while the actual current work is 2026-02-07.

**Impact:** New instances loading these documents get stale state, potentially making incorrect decisions based on outdated information. This is the coherence cost of duplication identified in Section E.

**Why it persists:** Updating governance documents is a manual step that competes with actual work for the user's and the agent's attention. The v2 retrospective's rule "Must be updated after EVERY major action" is honored more in the breach than the observance.

**Possible mitigation:** Automated staleness detection (compare timestamps across related documents), or consolidation to fewer documents with a single source of truth per fact class.

---

## Synthesis: The System's Fundamental Character

This information system exhibits three defining characteristics:

**1. Prophylactic Dominance.** The system invests heavily in preventing failures (compaction, data loss, constraint violation) rather than recovering from them. This investment has proven effective -- the OD audit ran 17 agents in 45 minutes with zero crashes and zero data loss. But the prophylactic infrastructure now consumes more resources (context tokens, human attention, document maintenance) than the production work it protects.

**2. Binary Rule Supremacy.** The system has empirically proven that binary constraints (border-radius: 0, "Lead never runs Playwright") propagate perfectly through multi-agent pipelines, while spectrum constraints ("1-2px borders signal uncertainty") fail completely. This suggests the system should aggressively convert spectrum constraints into binary ones, even at the cost of expressiveness.

**3. Compression-Driven Amnesia.** The 50:1 compression from agent output to behavioral constraint means the system retains approximately 2% of what it learns. The 98% that's lost includes the generative frontier (open questions), the experiential grounding of rules, and the conditional applicability of lessons. The system knows WHAT to do but progressively forgets WHY.

The fundamental tension is between **completeness** (documenting everything to prevent loss) and **capacity** (having room in context to actually work). The system currently resolves this tension through the 5-layer memory hierarchy, but each layer introduces its own maintenance cost and coherence risk. The optimal resolution would be a system where information is stored once, indexed for retrieval, and loaded on demand -- essentially, a database with semantic retrieval, rather than a forest of markdown documents competing for a shared context window.

# Two-Instance Workflow Pattern Analysis

## The Observed System

This analysis examines a workflow where a human user employs two (or more) Claude Code instances in a deliberate division of labor: one instance creates plans, prompts, and architectural documents; another instance executes those plans or revises them. The evidence comes from the `knowledge-architecture/` directory of the Claude-Research-And-Tips repository, which contains the complete artifact trail of this workflow across multiple phases of a design system project.

### Key Artifacts Examined

| File | Role in the Pattern |
|------|---------------------|
| `OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md` | Architecture document (creation instance output, 3900+ lines) |
| `OD-EXECUTION-PROTOCOL.md` | Execution protocol (creation instance output, 3600+ lines) |
| `PLAN-REVISION-TRACKER.md` | Revision document (revision instance output, 2200+ lines, 56 revisions) |
| `OD-FIX-EXECUTION-PROMPT.md` | Execution prompt (creation instance output, given to execution instance) |
| `OD-GRANULAR-AUDIT-PROMPT.md` | Audit prompt (creation instance output, 2000+ lines) |
| `OD-RETROSPECTIVE-AND-PROTOCOL-v2.md` | Retrospective (creation instance output, informing next cycle) |
| `OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md` | Retrospective v3 (further iteration) |
| `MEMORY.md` | Cross-session persistent state (user-maintained, informs all instances) |

---

## 1. The Two-Instance Pattern: Information Flow

### The Core Loop

The workflow is not a simple "create then execute" handoff. It is a **three-phase cycle** with a human as the router:

```
PHASE A: CREATION INSTANCE
  - Absorbs project context (CLAUDE.md, MEMORY.md, prior artifacts)
  - Produces architectural documents (ARCH) and/or execution protocols (PROTO)
  - Produces retrospectives analyzing what worked and failed
  - Output: standalone documents that encode institutional knowledge

PHASE B: REVISION INSTANCE (sometimes the same session, sometimes separate)
  - Receives BOTH source documents (ARCH + PROTO)
  - Cross-references line-by-line
  - Identifies gaps, contradictions, wrong agent counts, missing protocols
  - Output: PLAN-REVISION-TRACKER.md with 56 numbered revisions

PHASE C: EXECUTION INSTANCE
  - Receives the finalized plan (e.g., OD-FIX-EXECUTION-PROMPT.md)
  - Executes using agent teams (7 agents in the fix execution case)
  - Produces results + retrospective
  - Retrospective feeds back into PHASE A for the next cycle
```

### What Gets Passed Between Instances

The PLAN-REVISION-TRACKER.md reveals exactly what information crosses the boundary:

**From creation to revision:**
- The full text of source documents (ARCH at 3900+ lines, PROTO at 3600+ lines)
- Line numbers referenced explicitly (e.g., "ARCH lines 1392-1507", "PROTO lines 729-777")
- The complete conceptual vocabulary (accumulated identity, traverser subagent, Guardian validation, etc.)

**From revision back to creation (or directly to execution):**
- 56 specific revisions, each structured as:
  - What the plan says (quoted)
  - What the source actually says (quoted with line numbers)
  - The specific revision required (concrete action items)
- A dependency map showing which revisions supersede others
- A coverage matrix ensuring every section of both source documents is mapped

**From execution back to creation (via retrospective):**
- What worked and why (with specific examples)
- What failed and why (with root cause analysis)
- Hard rules for next time (e.g., "Lead does NOTHING except: create tasks, assign them, process verdicts")
- Agent team lessons (e.g., "Per-file ownership eliminates all contention")
- Performance metrics (e.g., "7 agents, ~25 min wall time, 16/16 fixes applied")

### The Human's Role

The human serves as the **router** between instances. They:
1. Provide the initial context by maintaining CLAUDE.md and MEMORY.md
2. Copy/paste or reference documents from one instance to the next
3. Decide when to create, when to revise, and when to execute
4. Maintain MEMORY.md as the cross-session persistent state that all instances can access

---

## 2. The Prompt-as-Document Pattern

### Structure of an Executable Prompt

The OD-FIX-EXECUTION-PROMPT.md (1001 lines) is the clearest example of a prompt structured as a standalone document. Its structure reveals a deliberate pattern:

```
1. FIRST ACTIONS — Immediate steps, ordered, before anything else
2. TEAM ARCHITECTURE — Who does what, with ownership matrix
3. THE 17 FIX ITEMS — Complete specifications with code examples
4. PHASE EXECUTION SEQUENCE — Temporal ordering of all work
5. PER-AGENT PROMPT TEMPLATES — Copy-paste prompts for each agent
6. ADVERSARIAL VERIFICATION PROTOCOL — How to verify fixes
7. COMPACTION SURVIVAL INFRASTRUCTURE — Recovery mechanisms
8. HARD RULES — Non-negotiable constraints from retrospective
9. INLINE THREADING HEADER ABSORPTION PROTOCOL — Context loading
10. SOUL COMPLIANCE QUICK REFERENCE — Design constraints
APPENDIX A: FILE PATHS
APPENDIX B: EXPECTED TIMELINE
APPENDIX C: SUCCESS CRITERIA
```

### Design Principles of Executable Prompts

1. **Self-contained**: Every piece of information the executing instance needs is IN the document. File paths are absolute. CSS code is provided verbatim. Line numbers are given. The document assumes the reader has zero prior context.

2. **Imperative ordering**: "Do these in order BEFORE spawning any agents" (line 32). The document is organized as a sequence of commands, not a description. Every section tells the reader what to DO, not what IS.

3. **Embedded sub-prompts**: Section 5 contains complete prompt templates for each agent. These are copy-paste ready: "You are Fixer-A on the od-fix team. You own TWO files..." The creation instance pre-composes the messages the execution instance will send.

4. **State file bootstrapping**: The FIX-STATE.md initial content is provided in full (lines 43-89). The executing instance creates this file as its first act, establishing the state tracking infrastructure.

5. **Failure anticipation**: Section 7 (Compaction Survival) explicitly addresses what happens when context is lost. Section 8 (Hard Rules) encodes lessons from previous failures. The document is designed to survive partial execution.

6. **Verification criteria**: APPENDIX C defines exactly 8 conditions that must be true for the execution to be considered COMPLETE. There is no ambiguity about what "done" means.

### The OD-GRANULAR-AUDIT-PROMPT.md Variant

The audit prompt (2000+ lines) takes the same pattern further with a philosophical frame:

- **Section 0**: Establishes an "adversarial operating mode" -- not just instructions but a LENS through which all subsequent instructions should be interpreted
- **Structured Debate Protocol**: A formal 5-step process (Prosecution Opens, Defense Responds, Cross-Examination, Defense Rebuts or Concedes, Verdict)
- **Fresh Eyes Protocol**: Explicitly instructions to deploy agents WITHOUT accumulated context to catch what builder blindness hides
- **15 pixel-level checks**: Section 13 defines what "granular" actually means at the implementation level

The audit prompt demonstrates that executable prompts can encode not just WHAT to do but HOW TO THINK while doing it.

---

## 3. The Revision Cycle

### How Revision Works

The PLAN-REVISION-TRACKER.md reveals the most sophisticated part of this workflow. A Claude instance was given TWO source documents (ARCH + PROTO) and asked to cross-reference them against a Claude-generated plan. The result is 56 revisions organized in 5 batches:

```
Batch 1: Foundational Architecture Mismatches (Revisions 1.1-1.10)
  - Wrong agent count (plan says 5, ARCH says 3)
  - Missing agents (Weaver not in plan)
  - Wrong agent types (Researcher should be subagent, not agent)
  - Missing concepts (Execution Journal, Accumulated Identity)

Batch 2: Per-OD Execution Loop, Iteration, Scoring (Revisions 2.1-2.10)
  - Wrong loop structure (plan misses 9 of 17 steps)
  - Underspecified visual audit protocol
  - Missing scoring rubric details
  - Missing 12-step per-iteration template

Batch 3: Philosophy, Cross-OD Synthesis, Architecture Deep Structure (Revisions 3.1-3.15)
  - Missing recovery protocol
  - Missing paradigm shift concept
  - Missing foundation status tables
  - Missing research bidirectional flow

Batch 4: Integration Points, Failure Modes, Success Criteria (Revisions 4.1-4.15)
  - Missing 8 inline section update triggers
  - Missing 5 Auditor deployment triggers
  - Missing 20+ failure modes table
  - Missing team spawning protocol with exact prompts

Batch 5: Final Coherence Sweep (Revisions 5.1-5.6)
  - Cross-revision self-corrections
  - Coverage verification (every section of both docs mapped)
  - Dependency map between all 56 revisions
```

### What Gets Revised

The revision instance catches three categories of issues:

**Category 1: Structural errors** -- Things that are factually wrong
- Plan says 5 agents, source says 3 teammates + 3 subagent protocols (Revision 1.1)
- Plan says Guardian has 4 checks, source says 5 (Revision 3.14, correcting earlier revisions)
- Plan says "Context Digest ~2K file", source says "Accumulated Identity" which is dynamic and evolving (Revision 1.7)

**Category 2: Missing content** -- Things the source specifies that the plan omits entirely
- No Weaver agent in the plan (Revision 1.3)
- No Execution Journal concept (Revision 1.6)
- No post-build pipeline (Guardian -> Build Audit -> Weaver -> Thread Audit -> Traverser) (Revision 2.6)
- No failure mode table (Revision 4.5)
- No team spawning protocol with exact prompts (Revision 4.13)

**Category 3: Conceptual misattribution** -- Things assigned to the wrong entity or framed incorrectly
- Visual audit assigned to Auditor, should be Builder (Revision 2.2)
- Research deployment attributed to Lead, should be Builder direct (Revision 2.9)
- Perceptual deepening framed as template to fill, should be perceptual technique to apply (Revision 3.5)

### Revision Criteria

The revision instance uses the source documents themselves as the standard. Every revision follows the same format:

1. **Quote what the plan says** (identifying the specific section)
2. **Quote what the source actually says** (with line numbers)
3. **State the specific revision** (concrete action items)

The criteria are not subjective quality judgments. They are mechanical cross-references: "Does the plan say what the source says?" When it does not, a revision is generated. This makes the revision process reproducible.

---

## 4. Version Evolution (v1 -> v2 -> v3 -> v4)

### What Triggers a New Version

The evidence shows the OD-EXECUTION-AGENT-TEAM-ARCHITECTURE evolved through at least 4 versions. The v4 document itself explains why (lines 456-520):

- **v3 had 7 agents**, which was "intellectually rigorous" but operationally wasteful
- **v4 reduced to 3 teammates** based on the principle: "A teammate is justified when the role requires sustained autonomous work"
- **v4 added the Auditor subagent** (new in v4) because "v3.0 had no independent verification"
- **v4 added the Execution Journal** (new in v4) because contextual state was being lost on compaction

### Evolution Pattern

Each version appears to follow this pattern:

1. **Execute the previous version's plan** (or attempt to)
2. **Write a retrospective** documenting what worked and what failed
3. **Create a new version** that addresses the failures while preserving what worked

The OD-RETROSPECTIVE-AND-PROTOCOL-v2.md (the retrospective for the first agent team execution) explicitly states this cycle:

> "First-ever agent team execution (Phase 2.2 OD Explorations)"
> "Purpose: Reference document for AD/CD phases -- or OD re-execution at higher standard"

The retrospective identified specific failures:
- "The Lead Was Too Fat" (3.1) -> v4 adds THIN lead principle
- "The Refinement Loop Was Dropped" (3.2) -> v4 adds mandatory iteration protocol
- "Message Routing Confusion" (3.3) -> v4 adds explicit communication patterns
- "Large MCP Responses in Lead Context" (3.4) -> v4 adds "Lead NEVER runs Playwright"

Each failure becomes a hard rule in the next version. The system learns through structured failure analysis.

### Version Archaeology

The document naming reveals the lineage:
- `OD-RETROSPECTIVE-AND-PROTOCOL-v2.md` -- retrospective from first execution
- `OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md` -- retrospective from audit execution
- `OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md` -- architecture incorporating all learnings
- `OD-EXECUTION-PROTOCOL.md` -- protocol that complements v4

Each version is explicitly versioned and the lineage is traceable. The v4 document references v3 decisions and explains why they changed.

---

## 5. Cross-Instance Knowledge Transfer

### What Is Assumed vs. Explicitly Stated

**Explicitly stated (in the prompt documents):**
- Every file path (absolute, never relative)
- Every CSS property and value (verbatim code blocks)
- Every line number reference
- Every agent role and responsibility
- Every verification criterion
- Every phase sequence
- Every failure mode and recovery procedure

**Assumed (relying on project-level context):**
- The overall project purpose (Claude Code research knowledge base)
- The design system vocabulary ("soul pieces", "fractal self-similarity", "KortAI")
- The existence and location of CLAUDE.md files
- The ability to use Claude Code tools (Playwright, Task tool, TeamCreate)
- Familiarity with the agent team primitives

### The MEMORY.md Bridge

MEMORY.md serves as the explicit cross-instance knowledge bridge. It is maintained in the user's project-specific memory directory (`.claude/projects/.../memory/MEMORY.md`) and is automatically loaded by Claude Code at session start. It contains:

- **Current phase status** with specific outcomes
- **Agent team lessons** from each execution (3 teams documented)
- **Process patterns** learned across sessions
- **Key learnings** per phase

This is the ONLY mechanism that persists across instances without manual copy-paste. Everything else must be explicitly referenced or included in the prompt.

### The Ramp-Up Cost

The OD-EXECUTION-PROTOCOL.md explicitly acknowledges the ramp-up problem with a 12-step recovery protocol estimated at **15-25 minutes** of file reading before any work can begin. The protocol reads 12+ files across 4 phases:

```
RECOVERY PHASE 1: ORIENTATION (5 min) -- 3 files
RECOVERY PHASE 2: STATE RESTORATION (5 min) -- 3 files
RECOVERY PHASE 3: CONSTRAINT LOADING (5 min) -- 3 files
RECOVERY PHASE 4: SKILL + VISUAL STATE (5 min) -- 3 files
```

The v4 architecture adds a 3-layer state persistence system specifically to reduce ramp-up cost:
- **Layer 1: THE WEB** (permanent) -- inline sections, CONSUMED BY tables
- **Layer 2: THE CHECKPOINT** (structural) -- position, scores, status
- **Layer 3: THE JOURNAL** (contextual) -- WHY decisions were made, mental model

The journal (Layer 3) was added in v4 because earlier versions found that structural recovery (knowing WHERE you are) was insufficient without contextual recovery (knowing WHY you are there).

---

## 6. The Ramp-Up Problem in Detail

### The Three Kinds of Context Loss

The v4 architecture (Section 1.4) explicitly categorizes what gets lost:

```
STRUCTURAL STATE:    Where we are (recoverable from checkpoint)
ACCUMULATED IDENTITY: What constraints apply (recoverable from web traversal)
CONTEXTUAL STATE:     WHY we chose this path (NOT recoverable without journal)
```

The MEMORY.md captures this distinction in practice:
> "The difference between recovering to 'OD-003 is done, OD-004 is next' and recovering to 'OD-003 taught us that organizational density IS fundamentally about spacing hierarchies...'"

### Cost Mitigation Strategies

The system uses four strategies to reduce ramp-up cost:

1. **Pre-composed prompts**: The creation instance front-loads context into copy-paste ready prompts (Section 5 of OD-FIX-EXECUTION-PROMPT.md), eliminating the need for the execution instance to discover context.

2. **State file bootstrapping**: FIX-STATE.md, CURRENT-STATE.md, and checkpoint files are pre-defined with exact templates, so the execution instance creates them mechanically rather than designing them.

3. **Compaction survival infrastructure**: Documents explicitly plan for context loss with recovery protocols, file-based state persistence, and "every agent writes to file BEFORE returning" rules.

4. **MEMORY.md as persistent state**: The user manually maintains MEMORY.md with key learnings and phase status, providing ~200 lines of concentrated context that loads automatically.

### The Cost Is Real

Despite these mitigations, the evidence shows the cost is substantial:
- The revision instance needed to read 7,500+ lines of source material (ARCH + PROTO)
- The execution instance (OD-FIX-EXECUTION-PROMPT.md) needed to read a 1001-line prompt plus the 688-line audit results
- Recovery after compaction requires 15-25 minutes of pure file reading
- The MEMORY.md documents "multiple context limit crashes" and "sessions processing 50+ files in serial hit context wall"

---

## 7. Quality Control: How the Revision Instance Catches What the Creation Instance Missed

### The Adversarial Structure

The revision instance operates as a systematic adversary to the creation instance. Its method is mechanical:

1. **Take a statement from the plan**
2. **Find the corresponding statement in the source documents**
3. **Compare them literally**
4. **If they differ, generate a revision**

This catches three categories of errors the creation instance makes:

**Compression errors**: The creation instance summarizes a 100-line protocol as "verify the chain." The revision instance catches this because it reads the actual 100 lines and finds 15 specific steps that "verify the chain" omits.

Example (Revision 1.10):
> "Phase 0.5 has the 'Reader' verify provenance chain intact"
> vs. PROTO which defines a DETAILED, MANDATORY pre-flight protocol with 4 specific steps, diagnostic questions, and a pre-populated constraint summary.

**Conflation errors**: The creation instance merges two distinct concepts into one. The revision instance catches this because it reads both source descriptions separately.

Example (Revision 1.5):
> Plan conflates (1) Auditor subagent (fresh-eyes verification) with (2) Perceptual Deepening (visual auditing done BY the Builder). These are "two different things."

**Omission errors**: The creation instance simply leaves things out, either because of context limits or because it judged them less important. The revision instance catches this through exhaustive coverage checking.

Example (Revision 5.6):
> A complete section-by-section coverage matrix verifying that every section of both ARCH (3900+ lines, 28 sections) and PROTO (3600+ lines, 38 sections) has at least one revision referencing it.

### The Self-Correction Mechanism

Revision 5.5 is particularly notable: it is the revision instance correcting its OWN earlier revisions. It identifies 6 cases where earlier revisions contained errors:

> "Revisions 1.2, 1.5, 1.6 reference '4-check enforcement loop' for Guardian. Revision 3.14 CORRECTS this to '5-check enforcement loop.' ACTION for plan updater: use the CORRECTED 5-check count from Revision 3.14."

This demonstrates that the revision process itself is iterative. The revision instance reads its own prior output and finds inconsistencies, then generates correction notes.

### The Dependency Map

Revision 5.5 also provides a complete dependency map between all 56 revisions:

```
1.1 (agent count) -> 1.2 (Traverser) -> 1.3 (Weaver) -> 1.4 (Research) -> 1.5 (Auditor)
1.6 (journal) -> 5.1 (checkpoint distinction) -> 5.2 (journal protocol)
2.1 (17-step flow) -> 2.6 (post-build pipeline) -> 4.4 (gate checklists)
...
```

This map ensures that anyone applying the revisions does so in an order that avoids contradictions. It is metadata about the revision process itself -- a quality control mechanism for the quality control mechanism.

---

## Synthesis: The Emergent Architecture

### What This Workflow Actually Is

This is not simply "use one Claude to check another Claude's work." It is a **distributed knowledge refinement system** with three distinct cognitive roles:

1. **The Architect** (creation instance): Synthesizes broad context into coherent frameworks. Produces documents that are comprehensive but may compress, conflate, or omit details.

2. **The Critic** (revision instance): Performs mechanical cross-referencing. Catches errors through exhaustive comparison. Operates without creative judgment -- its job is to ask "does this match that?" for every statement.

3. **The Executor** (execution instance): Follows instructions. Spawns agents. Reports results. Produces the retrospective that feeds the next creation cycle.

### The Human as System Architect

The user designed this system. They:
- Maintain MEMORY.md as the cross-session knowledge bus
- Route documents between instances
- Decide when to create vs. revise vs. execute
- Maintain the version numbering (v1, v2, v3, v4)
- Commit results and update project state

The user does not write the plans, execute the audits, or generate the revisions. They orchestrate the orchestrators. Their contribution is the META-ARCHITECTURE: the decision that creation, revision, and execution are distinct cognitive tasks best served by separate instances with separate context windows.

### The Cost-Benefit Tradeoff

**Costs:**
- Each instance must ramp up on project context (15-25 minutes of file reading)
- Documents are extraordinarily long (ARCH: 3900+ lines, PROTO: 3600+ lines, PLAN-REVISION-TRACKER: 2200+ lines)
- The revision process itself is expensive (56 revisions, each with quoted text from both sources)
- Multiple context limit crashes documented in MEMORY.md

**Benefits:**
- The revision instance caught 56 errors in the creation instance's output, including 10 missing concepts, 5 wrong agent assignments, and 3 structural errors
- The execution produced measurably better results (0 soul violations, 187 programmatic tests PASS, 12 visual screenshots PASS)
- Each cycle produces a retrospective that prevents repeating failures
- The system learns: v4 is demonstrably better than v3, which was better than v2

### The Key Insight

The most valuable property of this workflow is that **different instances have different blind spots**. The creation instance compresses and conflates because it is synthesizing. The revision instance catches these because it is comparing. The execution instance discovers practical failures because it is implementing. No single instance can perform all three roles well because each role requires a different cognitive stance: synthesis vs. analysis vs. execution.

The user's workflow exploits this by treating Claude instances as specialized workers rather than general-purpose assistants. The same model, given the same tools, produces fundamentally different outputs depending on whether it is asked to create, criticize, or execute. The two-instance pattern (really a three-instance pattern) is an architectural decision to match cognitive roles to fresh context windows.

---

## Files Referenced in This Analysis

All paths are absolute:

- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/docs-spa/app/showcase/knowledge-architecture/OD-FIX-EXECUTION-PROMPT.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/docs-spa/app/showcase/knowledge-architecture/OD-GRANULAR-AUDIT-PROMPT.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/docs-spa/app/showcase/knowledge-architecture/OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/docs-spa/app/showcase/knowledge-architecture/OD-EXECUTION-PROTOCOL.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/docs-spa/app/showcase/knowledge-architecture/PLAN-REVISION-TRACKER.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/docs-spa/app/showcase/knowledge-architecture/OD-RETROSPECTIVE-AND-PROTOCOL-v2.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/docs-spa/app/showcase/knowledge-architecture/OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md`
- `/Users/spacewizardmoneygang/.claude/projects/-Users-spacewizardmoneygang-Desktop-Claude-Research-And-Tips/memory/MEMORY.md`

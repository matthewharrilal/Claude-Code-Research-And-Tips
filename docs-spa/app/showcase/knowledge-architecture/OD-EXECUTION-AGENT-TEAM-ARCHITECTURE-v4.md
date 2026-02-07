# OD EXECUTION AGENT TEAM ARCHITECTURE v4.0
## The Compounding Pipeline: A Living Research System Built on Agent Teams Primitives

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║   This is a PIPELINE that GROWS A MESH.                                      ║
║                                                                               ║
║   The EXECUTION is sequential: each exploration enriches the next.           ║
║   The KNOWLEDGE STRUCTURE is a mesh: bidirectional links, no single root.    ║
║                                                                               ║
║   Three agents. Three subagent protocols. One compounding loop.               ║
║                                                                               ║
║   LEAD — orchestrates, validates, checkpoints, journals, coordinates         ║
║   BUILDER — creates explorations, visually audits, deploys research          ║
║   WEAVER — threads new output into the web, maintains bidirectional links    ║
║   AUDITOR — fresh-eyes verification after every output, zero context bias    ║
║   JOURNAL — execution journal captures WHY, not just WHAT, across compacts  ║
║                                                                               ║
║   The pipeline BREATHES:                                                      ║
║   - Inward: Lead deploys Traverser subagent to absorb inline sections        ║
║   - Create: Builder constructs with accumulated identity                     ║
║   - Outward: Builder deploys Research subagents into external validation     ║
║   - Return: Weaver integrates findings, updates inline sections              ║
║   - Loop: Each cycle adds density; knowledge compounds, never just           ║
║           accumulates                                                         ║
║                                                                               ║
║   WHY THREE, NOT SEVEN:                                                       ║
║   Agent Teams are heavyweight — each teammate is a full Claude instance      ║
║   with its own context window, token budget, and async lifecycle.            ║
║   Roles that read files and return data → subagents (one call, one return).  ║
║   Roles that write a single file → tool calls, not agents.                   ║
║   Roles that do sustained creative work or multi-file updates → teammates.  ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

---

# PART I: THE CORE PARADIGM

Everything in this section is foundational. Every protocol, every agent behavior, every
template in this document flows from these three principles. If an agent's action doesn't
serve one of these principles, that action is wrong.

## 1.1 Why Bidirectional Matters

### The Anti-Pattern (What We're Avoiding):

```
Agent reads file → Agent does work → Agent creates output → Done
                                     ↓
                        (Output is orphan. No provenance.
                         No one knows it exists.
                         Next phase can't find it.
                         Knowledge is lost.)
```

This is what happens when agents treat files as inputs and outputs. The file system becomes
a graveyard of disconnected artifacts. Each phase starts from scratch because nothing
links back.

### The Pattern (What We're Enforcing):

```
Lead deploys Traverser subagent → Subagent absorbs inline sections →
    ↓
Returns accumulated identity to Lead →
    ↓
Lead transfers identity to Builder →
    ↓
Builder constructs WITH that identity →
    ↓
Builder deploys Research subagents WITH that identity into external research →
    ↓
Research subagents return findings WITH integration paths →
    ↓
Builder iterates with enriched context →
    ↓
Builder completes → Lead validates (Guardian checks) →
    ↓
Lead deploys Auditor subagent (fresh eyes, no accumulated context bias) →
    ↓
Auditor independently verifies output against constraints →
    ↓
Lead assigns Weaver: "Thread this into the web" →
    ↓
Weaver completes threading →
    ↓
Lead deploys Auditor subagent again (fresh eyes on threading) →
    ↓
Auditor independently verifies all links are real, no noise created →
    ↓
Weaver creates inline section for output (inherits accumulated context) →
    ↓
Weaver updates source files' CONSUMED BY tables (web knows about new node) →
    ↓
Weaver updates RESEARCH-ACTIVE.md (findings have home) →
    ↓
Lead deploys Traverser subagent again → Finds MORE accumulated context →
    ↓
LOOP CONTINUES (knowledge compounds)
```

Every output is born connected. Every source knows about its consumers. Every finding has
a home. The web grows denser with every cycle.

## 1.2 The Identity Transfer Principle

**You are not just passing information. You are transferring IDENTITY.**

When the Traverser subagent reads an inline section, it doesn't just extract facts.
It absorbs:

* **What this file IS** (purpose, unique value)
* **What it BUILT ON** (provenance chain — what came before, what was consumed)
* **What it MUST HONOR** (constraints with consequences — not suggestions, LAWS)
* **What BREAKS if it changes** (blast radius — who depends on this, what shatters)
* **What CONSUMES it** (who downstream depends on it, what they extract)
* **What it DOESN'T KNOW** (research debt — honest uncertainty, not false confidence)

This accumulated identity is what gets transferred through the entire pipeline:
- Lead receives it from Traverser subagent
- Lead transfers it to Builder via message
- Builder carries it into every design decision
- Builder embeds it in every research subagent prompt
- Weaver receives it to create properly threaded inline sections
- The NEXT Traverser subagent finds it enriched in the updated web

**An agent without accumulated identity is generic.**
**An agent with accumulated identity produces work that INTEGRATES.**

The difference between "build a task-based documentation layout" and "build a task-based
documentation layout knowing that ISLANDS need 48px sparse surround, FRACTAL structure
must be self-similar at all scales, border-radius is 0 everywhere because that's how
this system expresses precision, and R1-015 only has 65% confidence so we should validate
before committing" — that difference IS the identity transfer principle.

## 1.3 The Compounding Loop

This is the core value proposition. This is WHY the sequential pipeline is correct
and WHY parallelism is the exception, not the rule.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                        THE KNOWLEDGE COMPOUNDING LOOP                       │
│                                                                             │
│  ┌──────────────┐                                                          │
│  │ DD inline    │──→ Lead deploys Traverser subagent                       │
│  │ sections     │    Subagent absorbs DD-001, DD-003, DD-006 findings      │
│  └──────────────┘    + constraints + debt                                  │
│         ↑            Returns ACCUMULATED IDENTITY v0 to Lead               │
│         │                          │                                        │
│         │                          ▼                                        │
│         │              ┌──────────────────────────────────┐                │
│         │              │ Lead now holds IDENTITY:         │                │
│         │              │ - PULSE rhythm                   │                │
│         │              │ - ISLANDS clustering             │                │
│         │              │ - Fractal self-similarity        │                │
│         │              │ - 5 soul pieces                  │                │
│         │              │ - R1-015 uncertainty (small n)   │                │
│         │              │                                  │                │
│         │              │ Lead runs Guardian validation:   │                │
│         │              │ All constraints registered? ✓    │                │
│         │              │ Research debt tracked? ✓         │                │
│         │              └──────────────────────────────────┘                │
│         │                          │                                        │
│         │              Lead transfers identity to Builder                   │
│         │                          │                                        │
│         │                          ▼                                        │
│         │              ┌──────────────────────────────────┐                │
│         │              │ Builder creates OD-003 iter 1    │                │
│         │              │ Score: 31/40                     │                │
│         │              │ Weakness: clusters too uniform   │                │
│         │              │                                  │                │
│         │              │ Builder deploys Research subagent│                │
│         │              │ WITH accumulated identity:       │                │
│         │              │ "Find external validation for    │                │
│         │              │ task-based org (R1-015). I know  │                │
│         │              │ ISLANDS need sparse surround.    │                │
│         │              │ What spacing is optimal?"        │                │
│         │              └──────────────────────────────────┘                │
│         │                          │                                        │
│         │                          ▼                                        │
│         │              ┌──────────────────────────────────┐                │
│         │              │ Research subagent returns:       │                │
│         │              │ EXTERNAL-V-007                   │                │
│         │              │ Pirolli validates task-based,    │                │
│         │              │ 48-64px optimal cluster spacing  │                │
│         │              └──────────────────────────────────┘                │
│         │                          │                                        │
│         │                          ▼                                        │
│         │              ┌──────────────────────────────────┐                │
│         │              │ Builder iterates with enriched   │                │
│         │              │ identity:                        │                │
│         │              │ - Previous + 48px spacing        │                │
│         │              │ - R1-015 now +15% confidence     │                │
│         │              │ Score: 35/40 (was 31/40)         │                │
│         │              │                                  │                │
│         │              │ Builder messages Lead:           │                │
│         │              │ "OD-003 complete. 35/40.         │                │
│         │              │  EXTERNAL-V-007 integrated."     │                │
│         │              └──────────────────────────────────┘                │
│         │                          │                                        │
│         │              Lead validates (Guardian checks)                     │
│         │                          │                                        │
│         │              Lead deploys Auditor subagent                        │
│         │              (FRESH EYES — no accumulated context)                │
│         │              Auditor checks: constraints honored?                 │
│         │              soul pieces actually visible? noise created?         │
│         │                          │                                        │
│         │              Auditor returns: PASS ✓                              │
│         │              (or: FAIL with specific issues for Builder)          │
│         │                          │                                        │
│         │              Lead assigns Weaver via TaskList                     │
│         │                          │                                        │
│         │                          ▼                                        │
│         │              ┌──────────────────────────────────┐                │
│  ┌──────┴───────┐      │ Weaver threads into web:        │                │
│  │ INTEGRATE:   │←─────│ - Creates OD-003 inline section │                │
│  │ DD-003 now   │      │ - Updates DD-003 CONSUMED BY    │                │
│  │ lists OD-003 │      │ - Updates RESEARCH-ACTIVE.md    │                │
│  │ in its       │      │ - Verifies all threading        │                │
│  │ CONSUMED BY  │      │                                 │                │
│  │ table        │      │ Weaver messages Lead:           │                │
│  └──────────────┘      │ "Threading complete. ✓"         │                │
│         ↑              └──────────────────────────────────┘                │
│         │                          │                                        │
│         │              Lead deploys Auditor subagent AGAIN                  │
│         │              (FRESH EYES on threading work)                       │
│         │              Auditor checks: CONSUMED BY entries                  │
│         │              actually exist? inline section complete?             │
│         │              RESEARCH-ACTIVE.md actually updated?                 │
│         │              No broken links? No duplicate entries?               │
│         │                          │                                        │
│         │              Auditor returns: PASS ✓                              │
│         │                          │                                        │
│         │              Lead writes checkpoint                               │
│         │                          │                                        │
│         │              Lead deploys Traverser subagent AGAIN                │
│         │              Subagent now finds OD-003 in the web                 │
│         │                          │                                        │
│         └──────────────────────────┘                                        │
│                                                                             │
│   LOOP CONTINUES: AD starts with MORE than OD started with                 │
│   Each phase INHERITS accumulated identity from previous                    │
│   Knowledge COMPOUNDS, not just accumulates                                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Why this is a pipeline, not a mesh:**
The execution is strictly sequential. OD-003 MUST benefit from OD-001 and OD-002's
accumulated identity. You cannot build OD-003 and OD-004 simultaneously if OD-004
depends on OD-003's findings. The compounding IS the value — and compounding is
inherently serial.

**Why the pipeline GROWS a mesh:**
But the KNOWLEDGE STRUCTURE that this pipeline produces IS a mesh. DD-003 points to
OD-003 (CONSUMED BY). OD-003 points back to DD-003 (BUILT ON). EXTERNAL-V-007 points
to both R1-015 and DD-003 (VALIDATES). organizational-patterns.md points to all six
OD explorations. Every node has bidirectional links. No single root. The pipeline
grows a web.

**The exception — genuine parallelism:**
When two explorations test INDEPENDENT hypotheses that don't depend on each other's
findings (only on shared DD foundation), they CAN be built in parallel by two Builder
teammates. The Lead determines which pairs are independent. This is the ONE place
where Agent Teams' parallelism adds genuine value to the execution flow.
See Part III, Section 3.2 for the full parallelism protocol.

## 1.4 The Execution Journal — Why Context Must Survive Compaction

The compounding loop (1.3) only works if continuity of thought is maintained. The
identity transfer principle (1.2) ensures knowledge transfers between agents. The
bidirectional web (1.1) ensures knowledge is findable. But NONE of these capture the
most fragile and most valuable thing: **the thought process.**

### The Problem:

When context compacts — and it WILL compact, in every long session — three things are
lost:

```
STRUCTURAL STATE:    Where we are (OD-003, iteration 2, score 35/40)
                     → RECOVERABLE from OD-CHECKPOINT.md ✓

ACCUMULATED IDENTITY: What constraints, sources, soul pieces apply
                      → RECOVERABLE from the web (Traverser re-absorbs) ✓

CONTEXTUAL STATE:     WHY we chose this hypothesis, what alternatives were
                      rejected, what we learned from iteration 1 that
                      changed our mental model, what pattern we're sensing
                      across explorations, what we expect OD-004 to reveal
                      → NOT RECOVERABLE. This lives ONLY in context windows.
                      When context compacts, this DISAPPEARS. ✗
```

The web stores what was BUILT. The checkpoint stores what NUMBER we're on. But
neither stores **why we built what we built**, what alternatives we considered and
rejected, what insights are forming across explorations, or what the mental model is.

This is the difference between:
- Recovering to "OD-003 is done, OD-004 is next, here are the constraints"
- Recovering to "OD-003 taught us that organizational density IS fundamentally
  about spacing hierarchies, not visual weight. This is why we chose OD-004's
  hypothesis about hierarchical navigation — we expect spacing principles to
  apply vertically. If OD-004 confirms, we have a unified spacing theory that
  changes how AD approaches layout."

The first is structural recovery. The second is **contextual recovery**. Without
the second, every compaction resets the team's understanding to baseline. The
compounding loop degrades into a REPEATING loop.

### The Solution: The Execution Journal

```
_execution-journal/
├── CURRENT-STATE.md      # THE read-first file. Always current.
│                         # Lead OVERWRITES (not appends) after every
│                         # significant operation.
│                         # Answers: Where are we? What are we doing?
│                         # WHY are we doing it? What's the mental model?
│                         # What comes next and WHY?
│
├── lead-log.md           # Lead appends after each gate, decision, deployment
│                         # WHY this hypothesis was chosen
│                         # WHY this gate passed/failed
│                         # WHAT pattern is emerging
│
├── builder-log.md        # Builder appends after each iteration
│                         # WHAT worked and WHAT didn't
│                         # WHY the score changed
│                         # WHAT research revealed and HOW it changed thinking
│
├── weaver-log.md         # Weaver appends after each threading operation
│                         # WHAT edge cases were found
│                         # WHAT surprised and WHY
│                         # WHICH files were harder than expected
│
└── decisions.md          # Lead appends for significant decision points
                          # WHAT was the choice
                          # WHAT alternatives existed
                          # WHY this alternative was chosen
                          # WHAT consequences are expected
```

### How the Journal Relates to Existing State:

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                    THREE LAYERS OF STATE PERSISTENCE                         │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  LAYER 1: THE WEB (permanent, bidirectional)                                │
│  ────────────────────────────────────────                                    │
│  What: Inline sections, CONSUMED BY tables, RESEARCH-ACTIVE.md              │
│  Stores: WHAT was built, WHAT it was built on, WHAT consumes it             │
│  Survives: Everything. This IS the permanent record.                        │
│  Maintained by: Weaver                                                       │
│                                                                              │
│  LAYER 2: THE CHECKPOINT (structural, recoverable)                          │
│  ────────────────────────────────────────                                    │
│  What: OD-CHECKPOINT.md                                                      │
│  Stores: WHERE we are (exploration number, score, iteration, threading)     │
│  Survives: Everything. Recovery protocol rebuilds from here.                │
│  Maintained by: Lead                                                         │
│                                                                              │
│  LAYER 3: THE JOURNAL (contextual, ephemeral, essential)                    │
│  ────────────────────────────────────────                                    │
│  What: _execution-journal/ folder                                            │
│  Stores: WHY decisions were made, WHAT alternatives were rejected,          │
│          WHAT the mental model is, WHAT patterns are emerging,              │
│          WHERE the thinking is heading                                       │
│  Survives: Compaction. Does NOT need to survive phase completion.           │
│  Maintained by: Lead (CURRENT-STATE + decisions + lead-log),                │
│                 Builder (builder-log), Weaver (weaver-log)                  │
│                                                                              │
│  Without Layer 1: No permanent record. Knowledge dies.                      │
│  Without Layer 2: Can't find where we are. Must re-count.                   │
│  Without Layer 3: Can resume but can't recover FRAME OF MIND.              │
│          Every compaction resets understanding to baseline.                  │
│          Compounding degrades to repeating.                                  │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Ephemeral by Design:

The journal is working memory, not permanent record. The `_` prefix signals
"ephemeral." After a phase completes (all 6 OD explorations done, AD handoff
complete), the journal can be archived or deleted. The permanent record is in the
web (Layer 1). The journal exists ONLY to bridge compactions within a phase.

It does NOT add noise to the codebase because:
- It lives in a dedicated `_execution-journal/` folder, separate from explorations
- It uses a clear naming convention (role-log.md, CURRENT-STATE.md, decisions.md)
- It is explicitly temporary — deleted or archived after phase completion
- No exploration, no inline section, no web node references journal files
- The web is the permanent record; the journal is the working memory

### Every Agent Writes to the Journal:

This is critical. The journal is not a Lead-only artifact. Every agent contributes
what only IT knows:

- **Lead** knows WHY a hypothesis was chosen, WHY a gate passed/failed, WHAT
  pattern is emerging across explorations. Lead writes CURRENT-STATE.md (always
  current), lead-log.md, and decisions.md.

- **Builder** knows WHAT iteration approach worked, WHY the score changed between
  iterations, WHAT the research subagent revealed that changed understanding. Builder
  writes builder-log.md.

- **Weaver** knows WHAT threading edge cases were found, WHICH files were harder
  than expected, WHAT surprised about the web state. Weaver writes weaver-log.md.

The Auditor does NOT write to the journal (it's a subagent — its results are
captured in the Lead's log when the Lead processes audit results).

### The CURRENT-STATE.md Contract:

CURRENT-STATE.md is the single most important file after compaction. It is:
- **Always overwritten** (not appended) — it's a snapshot of NOW
- **Always current** — Lead updates it after every significant operation
- **Self-sufficient** — reading ONLY this file should restore enough context
  to resume work without re-reading the entire journal

It answers five questions:

```
1. WHERE ARE WE?
   → Structural position (links to OD-CHECKPOINT.md for details)

2. WHAT ARE WE DOING AND WHY?
   → Current activity with rationale (not just "building OD-004")

3. WHAT KEY DECISIONS GOT US HERE?
   → Decision trail (links to decisions.md for details)

4. WHAT'S THE CURRENT MENTAL MODEL?
   → The frame of reference. The emergent understanding.
   → "We are discovering that organizational density IS spacing hierarchy."

5. WHAT COMES NEXT AND WHY?
   → Not just "OD-005" but WHY OD-005's hypothesis matters given what we've learned
```

See Section 2.11 for the full journal protocol. See Appendix F for templates.

---

---

# PART II: THE AGENT TEAM STRUCTURE

## 2.1 Why Three Agents, Not Seven

v3.0 mapped 7 conceptual roles to 7 Agent Team teammates. This was intellectually
rigorous — every role was clearly defined, every interaction specified. But Agent Teams
are heavyweight primitives. Each teammate is a full Claude instance with its own context
window, its own token budget, and its own async lifecycle. The overhead is justified
ONLY when the role requires sustained autonomous work.

Here is the honest analysis of each v3.0 role:

```
┌───────────────────────────┬─────────────────────────────────────────────┬───────────────────────────────────┐
│ v3.0 Role                 │ What It Actually Does                       │ v4.0 Mapping                      │
├───────────────────────────┼─────────────────────────────────────────────┼───────────────────────────────────┤
│ Primary Orchestrator      │ Sequencing, gate management,               │ THE LEAD itself.                  │
│                           │ coordinating other agents                   │ This IS the team lead role.       │
│                           │                                             │ No separate agent needed.         │
├───────────────────────────┼─────────────────────────────────────────────┼───────────────────────────────────┤
│ Context Guardian          │ 4-step validation checklist                 │ EMBEDDED IN LEAD.                 │
│                           │ against accumulated identity                │ It's a checklist, not sustained   │
│                           │                                             │ creative work. Lead runs it       │
│                           │                                             │ after each gate.                  │
├───────────────────────────┼─────────────────────────────────────────────┼───────────────────────────────────┤
│ Inline Section Traverser  │ Reads files, produces structured           │ SUBAGENT (Task tool).             │
│                           │ accumulated identity output                 │ One call, one return.             │
│                           │                                             │ Read-only. No iteration.          │
│                           │                                             │ Perfect subagent shape.           │
├───────────────────────────┼─────────────────────────────────────────────┼───────────────────────────────────┤
│ Exploration Builder       │ Creates HTML explorations,                  │ BUILDER TEAMMATE.                 │
│                           │ iterates to quality bar,                    │ This is where the real work       │
│                           │ heavy creative work                         │ happens. Sustained, creative,     │
│                           │                                             │ iterative. Justifies a full       │
│                           │                                             │ Claude instance.                  │
├───────────────────────────┼─────────────────────────────────────────────┼───────────────────────────────────┤
│ Research Orchestrator     │ Deploys sub-agents for web search           │ MERGED INTO BUILDER.              │
│                           │                                             │ Agent Teams prohibit nested       │
│                           │                                             │ teams. Research Orchestrator      │
│                           │                                             │ would use Task tool subagents —   │
│                           │                                             │ same as Builder doing it directly.│
│                           │                                             │ Builder knows its own weakness    │
│                           │                                             │ best. No indirection needed.      │
├───────────────────────────┼─────────────────────────────────────────────┼───────────────────────────────────┤
│ Inline Section Updater    │ Creates inline sections, updates            │ WEAVER TEAMMATE.                  │
│                           │ CONSUMED BY tables, updates                 │ Touches 5-10+ files per           │
│                           │ RESEARCH-ACTIVE.md, verifies                │ exploration. Mechanical but       │
│                           │ bidirectional threading                     │ multi-file. Can work WHILE Lead   │
│                           │                                             │ pre-loads context for next        │
│                           │                                             │ exploration. Keeps Lead's context │
│                           │                                             │ lean.                             │
├───────────────────────────┼─────────────────────────────────────────────┼───────────────────────────────────┤
│ Checkpoint Manager        │ Writes OD-CHECKPOINT.md                     │ EMBEDDED IN LEAD.                 │
│                           │                                             │ Writing a single file is a tool   │
│                           │                                             │ call, not an agent. Lead writes   │
│                           │                                             │ the checkpoint after each gate.   │
├───────────────────────────┼─────────────────────────────────────────────┼───────────────────────────────────┤
│ [not in v3.0]             │ Execution Journal: captures WHY,           │ EMBEDDED IN ALL AGENTS.           │
│                           │ thought processes, decision rationale,      │ Lead: CURRENT-STATE.md,           │
│                           │ mental model, alternatives considered       │ lead-log, decisions.md.           │
│                           │                                             │ Builder: builder-log.md.          │
│                           │                                             │ Weaver: weaver-log.md.            │
│                           │                                             │ File writes, not agents.          │
│                           │                                             │ See Section 2.11.                 │
└───────────────────────────┴─────────────────────────────────────────────┴───────────────────────────────────┘
```

**The principle:** A teammate is justified when the role requires sustained autonomous
work that benefits from its own context window. A subagent is correct when the role is
one-shot (call → work → return). An embedded function is correct when the role is a
checklist or a single file write.

**The Auditor — a third subagent protocol (NEW in v4.0):**

v3.0 had no independent verification. The Guardian (now embedded in Lead) validated
based on teammate REPORTS. But the Lead accumulates context throughout the pipeline
and develops blind spots — it might trust "Weaver says CONSUMED BY updated" without
checking whether DD-003's Section 8 *actually contains* the OD-003 entry.

The Auditor subagent solves this. Deployed FRESH for every verification (no context
carryover), it reads the ACTUAL FILES and checks what EXISTS, not what's CLAIMED.
The Guardian validates reports. The Auditor validates reality.

```
┌─────────────────────────┬───────────────────────────────────────────────────┐
│ Guardian (embedded)     │ Auditor (subagent)                                │
├─────────────────────────┼───────────────────────────────────────────────────┤
│ Checks teammate REPORTS │ Checks actual FILE CONTENTS                       │
│ Runs inside Lead's      │ Runs in fresh context window                      │
│ context (may have bias) │ (zero accumulated bias)                           │
│ Fast (checklist)        │ Thorough (reads and verifies)                     │
│ Gates the pipeline      │ Catches what the gate missed                      │
│ "Did Builder say it     │ "Does the HTML actually have border-radius: 0     │
│  honored constraints?"  │  on every element? Let me check."                 │
└─────────────────────────┴───────────────────────────────────────────────────┘
```

**Token efficiency:** 3 teammates + 3 subagent protocols (Traverser, Research, Auditor)
+ 3 embedded functions (Guardian, Checkpoint, Journal) vs 7 teammates means significantly
fewer tokens burned on idle context windows. The Auditor subagent is particularly
efficient: each deployment is fresh, focused, and short-lived. No persistent context to
maintain. The concepts from all v3.0 roles are FULLY PRESERVED. The Auditor ADDS
verification depth and the Journal ADDS contextual persistence that v3.0 lacked.

## 2.2 Team Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                    OD EXECUTION AGENT TEAM                                  │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                         THE LEAD                                    │   │
│  │     (Orchestration + Guardian + Checkpointing + Journal)            │   │
│  │                                                                     │   │
│  │   Owns: Execution sequence, gate enforcement, constraint registry  │   │
│  │   Deploys: Traverser subagents (Task tool, read-only)              │   │
│  │   Runs: Guardian validation checklist at every gate                 │   │
│  │   Writes: OD-CHECKPOINT.md after each significant operation        │   │
│  │   Writes: _execution-journal/CURRENT-STATE.md (always current)     │   │
│  │   Manages: TaskList for Builder and Weaver assignments             │   │
│  │   Determines: Which explorations can be parallelized               │   │
│  │                                                                     │   │
│  │   ┌──────────────────────────────────────┐                          │   │
│  │   │ EMBEDDED: Guardian Validation        │                          │   │
│  │   │ (4-check enforcement loop)           │                          │   │
│  │   └──────────────────────────────────────┘                          │   │
│  │   ┌──────────────────────────────────────┐                          │   │
│  │   │ EMBEDDED: Checkpoint Manager         │                          │   │
│  │   │ (state persistence via file writes)  │                          │   │
│  │   └──────────────────────────────────────┘                          │   │
│  │   ┌──────────────────────────────────────┐                          │   │
│  │   │ EMBEDDED: Execution Journal          │                          │   │
│  │   │ (contextual state: CURRENT-STATE.md, │                          │   │
│  │   │  lead-log.md, decisions.md)          │                          │   │
│  │   └──────────────────────────────────────┘                          │   │
│  │                                                                     │   │
│  └────────┬──────────────────────────────┬─────────────────────────────┘   │
│           │                              │                                  │
│     Subagent calls                 Task assignments                        │
│     (Task tool)                    (TaskList + messages)                    │
│           │                              │                                  │
│  ┌────────▼────────┐            ┌────────▼──────────────────────────────┐  │
│  │ TRAVERSER       │            │                                       │  │
│  │ SUBAGENT        │            │  ┌──────────────┐  ┌──────────────┐  │  │
│  │ (Absorptive     │            │  │   BUILDER    │  │   WEAVER     │  │  │
│  │  Reading)       │            │  │  (Teammate)  │  │  (Teammate)  │  │  │
│  │                 │            │  │              │  │              │  │  │
│  │ One call →      │            │  │ Creates      │  │ Threads      │  │  │
│  │ Returns         │            │  │ explorations │  │ output into  │  │  │
│  │ accumulated     │            │  │ with identity│  │ the web      │  │  │
│  │ identity        │            │  │              │  │              │  │  │
│  │                 │            │  │ Deploys own  │  │ Creates      │  │  │
│  │ Read-only.      │            │  │ Research     │  │ inline       │  │  │
│  │ No file edits.  │            │  │ subagents    │  │ sections     │  │  │
│  │ No iteration.   │            │  │              │  │              │  │  │
│  │                 │            │  │ Iterates to  │  │ Updates      │  │  │
│  │                 │            │  │ quality bar  │  │ CONSUMED BY  │  │  │
│  │                 │            │  │              │  │              │  │  │
│  └─────────────────┘            │  │ Scores and   │  │ Updates      │  │  │
│                                 │  │ reports back │  │ RESEARCH-    │  │  │
│  ┌─────────────────┐            │  │              │  │ ACTIVE.md    │  │  │
│  │ RESEARCH        │            │  │              │  │              │  │  │
│  │ SUBAGENT(S)     │◄───────────│  │ Deploys ──►  │  │ Verifies     │  │  │
│  │ (Web Search)    │            │  │ these        │  │ threading    │  │  │
│  │                 │            │  │              │  │              │  │  │
│  │ Deployed BY     │            │  │ Writes to    │  │ Writes to    │  │  │
│  │ Builder with    │            │  │ builder-log  │  │ weaver-log   │  │  │
│  │ context-rich    │            │  │              │  │              │  │  │
│  │ prompts         │            │  └──────────────┘  └──────────────┘  │  │
│  │                 │            │       TEAMMATES                      │  │
│  │ Returns         │            │  (Full Claude instances,             │  │
│  │ EXTERNAL-V/E/G  │            │   sustained autonomous work,         │  │
│  │ findings        │            │   each writes to execution journal)  │  │
│  │                 │            │                                       │  │
│  └─────────────────┘            └───────────────────────────────────────┘  │
│                                                                             │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │ _execution-journal/  (EPHEMERAL — contextual state)                   │ │
│  │                                                                        │ │
│  │  CURRENT-STATE.md  — THE read-first file (Lead overwrites each op)    │ │
│  │  lead-log.md       — Lead's decisions + rationale (append)            │ │
│  │  builder-log.md    — Builder's iterations + insights (append)         │ │
│  │  weaver-log.md     — Weaver's threading + edge cases (append)        │ │
│  │  decisions.md      — Decision register: alternatives + rationale      │ │
│  │                                                                        │ │
│  │  Bridges compactions. Deleted after phase completion.                  │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│                                 OPTIONAL: Second Builder (Builder-B)      │
│                                 for independent exploration pairs.        │
│                                 See Section 3.2.                          │
│                                                                             │
│  ┌─────────────────┐                                                      │
│  │ AUDITOR         │            Deployed by Lead AFTER each output.       │
│  │ SUBAGENT        │            FRESH context window every time.          │
│  │ (Fresh-Eyes     │            Receives: output + validation protocol    │
│  │  Verification)  │            Does NOT receive: accumulated identity    │
│  │                 │            narrative that led to the output.          │
│  │ Two audit types:│                                                      │
│  │ - Build Audit   │            Checks: Do constraints ACTUALLY hold      │
│  │   (after Builder│            in the HTML? Are soul pieces ACTUALLY      │
│  │    completes)   │            visible? Was noise created?                │
│  │ - Thread Audit  │                                                      │
│  │   (after Weaver │            Checks: Do CONSUMED BY entries ACTUALLY   │
│  │    completes)   │            exist in source files? Is the inline      │
│  │                 │            section ACTUALLY complete?                 │
│  │ Returns:        │            Is RESEARCH-ACTIVE.md ACTUALLY updated?   │
│  │ PASS/FAIL with  │                                                      │
│  │ specific issues │            The Guardian checks CLAIMS.               │
│  └─────────────────┘            The Auditor checks REALITY.               │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**CRITICAL RELATIONSHIPS:**

```
• Lead deploys Traverser subagent → receives accumulated identity
• Lead transfers accumulated identity to Builder via message
• Builder deploys Research subagents with context-rich prompts (Task tool)
• Builder reports completion + score + findings to Lead via message
• Lead validates (Guardian checks)
• Lead deploys Auditor subagent (BUILD AUDIT — fresh eyes on exploration)
• Auditor reads actual output, checks constraints in reality → reports to Lead
• Lead assigns Weaver via TaskList (only after Auditor PASS)
• Lead transfers accumulated identity + exploration details to Weaver via message
• Weaver threads into web → reports threading status to Lead via message
• Lead deploys Auditor subagent (THREAD AUDIT — fresh eyes on threading)
• Auditor reads actual source files, checks entries exist → reports to Lead
• Lead writes checkpoint → updates _execution-journal/CURRENT-STATE.md
• Lead appends to _execution-journal/lead-log.md (gate result, rationale, emerging patterns)
• Lead deploys Traverser subagent again (enriched web)
• LOOP: Next exploration starts with richer accumulated identity
```

**COMMUNICATION PATTERN:**

Agent Teams are asynchronous. Teammates go idle after every turn. Messages queue.
There is no guaranteed response ordering. This architecture embraces async:

```
Lead creates task in TaskList → Builder claims task → Builder works autonomously →
Builder sends completion message → Lead processes when ready →
Lead creates threading task → Weaver claims task → Weaver works autonomously →
Weaver sends completion message → Lead processes and checkpoints
```

This is NOT RPC (call → wait → response). This is task-based coordination:
- Lead creates well-defined tasks with all context included
- Teammates work autonomously with full accumulated identity
- Completion is signaled via messages, not return values
- Lead processes results and advances the pipeline

## 2.3 Agent 1: THE LEAD

**Role:** Orchestration, Guardian validation, checkpointing, journaling, traversal coordination

The Lead is the team lead agent. It does NOT build explorations or thread inline sections.
It coordinates the pipeline, enforces quality gates, maintains structural AND contextual
state, and ensures every output honors accumulated identity.

### Responsibilities:

* Maintain execution sequence across the full OD pipeline
* Enforce blocking relationships (no build before traversal, no threading before validation)
* Deploy Traverser subagents to absorb inline sections and produce accumulated identity
* Transfer accumulated identity to Builder and Weaver via messages
* Run Guardian validation (4-check enforcement loop) at every gate
* Write OD-CHECKPOINT.md after each significant operation (structural state)
* Overwrite _execution-journal/CURRENT-STATE.md after each significant operation (contextual state)
* Append to _execution-journal/lead-log.md with gate results, rationale, emerging patterns
* Append to _execution-journal/decisions.md for significant decision points
* Manage TaskList: create tasks, assign to Builder and Weaver
* Track phase completion and gate passage
* Manage iteration cycles (when Builder signals weakness, coordinate research cycle)
* Determine which exploration pairs can be parallelized (see Section 3.2)
* Coordinate handoff to AD phase when OD is complete

### DOES NOT:

* Build explorations (assigns to Builder)
* Thread inline sections or update CONSUMED BY (assigns to Weaver)
* Deploy research subagents directly (Builder handles its own research)
* Read inline sections directly for absorption (deploys Traverser subagent)

### The Lead's Communication Pattern:

```
═══════════════════════════════════════════════════════════════
PRE-EXECUTION:
═══════════════════════════════════════════════════════════════

Lead deploys Traverser subagent (Task tool, read-only):
  "Absorb inline sections from: DD-001, DD-003, DD-006,
   MASTER-SOUL-SYNTHESIS, R1-015, DESIGN-TOKEN-SUMMARY.
   Return structured accumulated identity."

Traverser subagent returns: ACCUMULATED IDENTITY v0
  (See Section 2.6 for exact format)

Lead runs Guardian validation on identity v0:
  CHECK 1: All constraints registered? ✓
  CHECK 2: Research debt tracked? ✓
  CHECK 3: Soul alignment requirements captured? ✓
  (See Section 2.8 for full Guardian protocol)

Lead writes initial checkpoint:
  OD-CHECKPOINT.md → Phase: OD, Status: INITIALIZED

Lead creates _execution-journal/ folder:
  Writes CURRENT-STATE.md:
    "Phase OD initialized. 6 explorations planned.
     Starting with OD-001: [hypothesis].
     Mental model: Organizational density explores how content
     arrangement patterns scale to documentation-level layouts.
     DD foundation provides: PULSE rhythm, ISLANDS clustering,
     FRACTAL self-similarity. These are the building blocks."

  Writes lead-log.md:
    "[timestamp] OD Phase Initialized.
     Traverser absorbed N files. Identity v0 captured.
     Guardian validated: all constraints registered.
     Starting exploration sequence."

  Writes decisions.md:
    "[timestamp] DEC-001: Exploration Ordering
     Choice: OD-001 first (Conversational hypothesis)
     Alternatives: Could start with Progressive Disclosure or Task-Based
     Rationale: [specific reasoning for why this ordering]
     Expected consequence: OD-001 establishes baseline for interaction density"

═══════════════════════════════════════════════════════════════
PER-EXPLORATION:
═══════════════════════════════════════════════════════════════

Lead creates task in TaskList:
  Subject: "Build OD-003 iteration 1"
  Description: [includes full accumulated identity]
  Assigned to: Builder

Lead sends message to Builder:
  "Build OD-003: task-based organization exploration.
   ACCUMULATED IDENTITY attached below.
   [full structured identity from Traverser]
   Quality bar: ≥ 34.5/40.
   Deploy research subagents for any weakness you identify.
   Report: score, weakness areas, research findings integrated,
   research debt identified."

Builder works autonomously...
Builder sends message to Lead:
  "OD-003 complete. Score: 35/40.
   EXTERNAL-V-007 integrated (48px spacing from Pirolli).
   Research debt: API reference untested, mobile viewport untested.
   File: explorations/organizational/OD-003-task-based.html"

Lead runs Guardian validation on OD-003:
  CHECK 1: Provenance? Builder cited DD-003, DD-006, R1-015, EXTERNAL-V-007 ✓
  CHECK 2: Constraints honored? 48px spacing applied, soul pieces visible ✓
  CHECK 3: Research debt acknowledged? API + mobile noted ✓
  CHECK 4: Ready for threading? All sources identified ✓
  (See Section 2.8 for full protocol)

Lead deploys Auditor subagent (BUILD AUDIT — Task tool, fresh context):
  "Read OD-003-task-based.html with FRESH EYES.
   You have NO context about how this was built.
   Check against these criteria:
   - border-radius: 0 on every element? (read the actual CSS)
   - box-shadow: none everywhere? (read the actual CSS)
   - Spacing between clusters ≥ 48px? (measure actual values)
   - Self-similar structure at page/section/component? (inspect structure)
   - Soul pieces visible? (check each SP#1-5 against the HTML)
   - File in correct location? (explorations/organizational/)
   - No extraneous files created? (check directory)
   - HTML valid and renderable? (check structure)
   Report: PASS/FAIL with specific issues."

Auditor subagent returns: "PASS ✓ — all criteria met.
  Note: cluster spacing is 52px (above 48px minimum). Valid."
  (OR: "FAIL — border-radius: 8px found on .card-header line 247.
  Must be 0. Constraint violation from DESIGN-TOKEN-SUMMARY.")

IF FAIL: Lead messages Builder with Auditor's specific findings.
  Builder fixes and re-submits.
  Lead re-deploys Auditor (fresh instance, fresh eyes).
IF PASS: Lead proceeds to Weaver.

Lead creates task in TaskList:
  Subject: "Thread OD-003 into web"
  Description: [includes exploration details + accumulated identity]
  Assigned to: Weaver

Lead sends message to Weaver:
  "Thread OD-003 into the web.
   File: explorations/organizational/OD-003-task-based.html
   BUILT ON: DD-003, DD-006, R1-015, EXTERNAL-V-007, MASTER-SOUL-SYNTHESIS
   Score: 35/40
   Research findings: EXTERNAL-V-007 (Pirolli, 48px spacing)
   Research debt: API reference untested (→ CD), mobile viewport (→ AD)
   Create Tier B inline section.
   Update all source CONSUMED BY tables.
   Update RESEARCH-ACTIVE.md.
   Verify bidirectional threading.
   Report: threading status."

Weaver works autonomously...
Weaver sends message to Lead:
  "Threading complete. ✓
   - OD-003 inline section created (Tier B)
   - DD-003 CONSUMED BY updated
   - DD-006 CONSUMED BY updated
   - RESEARCH-ACTIVE.md updated with OD-F-003 + EXTERNAL-V-007
   - MASTER-SOUL-SYNTHESIS: LOCKED (noted in checkpoint)
   - Bidirectional threading verified."

Lead deploys Auditor subagent (THREAD AUDIT — fresh context):
  "Verify OD-003 threading with FRESH EYES.
   Read ACTUAL FILES and check:
   - DD-003 Section 8 ACTUALLY contains OD-003?
   - DD-006 Section 8 ACTUALLY contains OD-003?
   - OD-003 has complete 10-section inline header?
   - RESEARCH-ACTIVE.md has OD-F-003 + EXTERNAL-V-007?
   - No broken paths, no duplicates, no noise?
   Report: PASS/FAIL with file:line evidence."

Auditor returns: PASS ✓ (or FAIL → Lead messages Weaver to fix)

Lead writes checkpoint:
  OD-CHECKPOINT.md → Current: OD-003, Score: 35/40, Threading: COMPLETE
  Auditor: Build PASS, Thread PASS

Lead updates journal:
  Overwrites CURRENT-STATE.md:
    "OD-003 COMPLETE. Threading verified. Score: 35/40.
     Key insight: 48px cluster spacing (validated by Pirolli) works.
     Emerging pattern: Spacing hierarchy IS the organizing principle.
     Next: OD-004 (hierarchical nav) — testing if spacing principles
     apply vertically. If yes, unified spacing theory for AD.
     Mental model update: Organizational density is NOT about
     visual weight — it's about spatial relationships between
     content zones. This changes how we approach remaining
     explorations."

  Appends to lead-log.md:
    "[timestamp] OD-003 complete. Build Audit PASS, Thread Audit PASS.
     Key learning: Spacing hierarchy > visual weight. This reframes
     OD-004 through OD-006.
     Research debt forwarded: API ref → CD, mobile → AD.
     Pattern emerging: All 3 completed explorations converge on
     spatial relationships as primary organizing principle."

═══════════════════════════════════════════════════════════════
NEXT EXPLORATION:
═══════════════════════════════════════════════════════════════

Lead deploys Traverser subagent again:
  "Absorb inline sections from: [all previous files + OD-003]
   Return ACCUMULATED IDENTITY v[N+1]"

Traverser now finds OD-003 in the web. Identity is RICHER.
Loop continues.
```

### Quality Gate (Lead's Responsibility):

Before proceeding to next exploration, Lead verifies ALL of these:

```
□ Previous exploration has inline section (confirmed by Weaver)
□ All source CONSUMED BY tables updated (confirmed by Weaver)
□ All findings logged to RESEARCH-ACTIVE.md (confirmed by Weaver)
□ Research debt acknowledged (verified by Guardian validation)
□ Score meets quality bar (≥ 34.5/40) (reported by Builder)
□ Checkpoint updated (written by Lead)
□ Journal updated: CURRENT-STATE.md reflects current mental model
□ Journal updated: lead-log.md has gate results + rationale
□ Accumulated identity ready for re-traversal (Lead coordinates)
```

## 2.4 Agent 2: THE BUILDER (Teammate)

**Role:** Creating explorations WITH accumulated identity, VISUALLY AUDITING every
iteration, deploying research subagents, iterating to quality bar

The Builder is where the creative work happens. It receives accumulated identity from
the Lead, constructs HTML explorations that honor every constraint, **visually inspects
every iteration using the Perceptual Deepening skill**, deploys its own research
subagents when it identifies weaknesses, iterates until the quality bar is met,
and reports results back to Lead.

**CRITICAL: The Builder does NOT just check CSS values. The Builder LOOKS at its work.**
After EVERY iteration, the Builder takes a screenshot and performs visual inspection.
After the FINAL iteration, the Builder invokes the full Perceptual Deepening skill
(`/soul-audit`) to verify soul alignment PERCEPTUALLY, not just structurally.

### Responsibilities:

* Build HTML explorations for each OD hypothesis
* Apply accumulated constraints from Lead's identity transfer
* Honor soul alignment requirements in every element
* **VISUALLY AUDIT every iteration** — take screenshot, squint test, feel the output
* **Invoke Perceptual Deepening skill** (`/soul-audit`) after final iteration
* **Deploy zone sub-agents** (Typography, Spacing, Containers, Hierarchy, Composition)
  for thorough visual analysis when the exploration feels "off"
* Deploy Research subagents (Task tool) with context-rich prompts when weakness identified
* Iterate based on scores, research findings, visual observations, and enriched context
* Score each iteration against the quality matrix
* Report completion to Lead: score, weakness, findings, debt, **visual audit results**
* Identify research debt honestly — what was NOT tested
* Append to _execution-journal/builder-log.md after each iteration:
  what worked, what didn't, what research revealed, how understanding changed,
  **what the visual audit revealed perceptually**

### DOES NOT:

* Read inline sections for absorption (Lead provides accumulated identity)
* Thread inline sections or update CONSUMED BY (Weaver handles)
* Write checkpoints (Lead handles)
* Write CURRENT-STATE.md or decisions.md (Lead handles)
* Determine exploration sequencing (Lead handles)

### Critical Behavior — The Builder NEVER Works Without Accumulated Identity:

```
WRONG:
  Builder → "I'll create OD-003 for task-based organization"
          → [builds generic task-based layout]
          → [no provenance, no constraints, no soul]

RIGHT:
  Builder → "I have accumulated identity from Lead"
          → "I know: ISLANDS need 48px spacing, FRACTAL at all scales, 5 soul pieces"
          → "R1-015 confidence is 65%, I should deploy Research subagent to validate"
          → [builds with full provenance]
          → [every element honors constraints]
          → [soul pieces visible in every component]
          → [research debt acknowledged]
```

If the Builder receives a task WITHOUT accumulated identity, it MUST message the Lead
and request it. Building without identity produces orphans.

### The Builder's Iteration Protocol:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                    BUILDER ITERATION LOOP                                   │
│                                                                             │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ ITERATION 1: Build with accumulated identity                      │    │
│   │                                                                   │    │
│   │ INPUT: Accumulated identity from Lead (via message)               │    │
│   │ PROCESS: Apply constraints, honor soul, build exploration         │    │
│   │ OUTPUT: OD-003 iteration 1 (HTML file)                            │    │
│   │ SCORE: 31/40                                                      │    │
│   │ WEAKNESS: Clusters too uniform, can't distinguish task groups     │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ VISUAL AUDIT: Builder LOOKS at the iteration output               │    │
│   │                                                                   │    │
│   │ Builder takes screenshot (Playwright MCP) and INSPECTS:           │    │
│   │ 1. SQUINT TEST — blur vision, feel the gestalt                    │    │
│   │    "Does this feel like KortAI? Sharp? Precise? Archival?"        │    │
│   │    OR: "This feels soft/generic/uncertain — soul violation."      │    │
│   │                                                                   │    │
│   │ 2. SOUL PIECE CHECK — visual, not structural:                     │    │
│   │    SP#1: Do the edges feel SHARP? (not: is border-radius 0?)      │    │
│   │    SP#2: Does the wisdom text feel DIFFERENT? (not: is it serif?) │    │
│   │    SP#3: Do callouts feel like FAMILY? (not: do they have zones?) │    │
│   │    SP#4: Does depth come from EDGES? (not: is box-shadow 0?)      │    │
│   │    SP#5: Do markers feel SQUARE? (not: are list-style squares?)   │    │
│   │                                                                   │    │
│   │ 3. ZONE QUICK-CHECK — if something feels wrong:                   │    │
│   │    Identify which zone: Typography? Spacing? Containers?          │    │
│   │    Hierarchy? Composition? → feeds into weakness assessment       │    │
│   │                                                                   │    │
│   │ This is NOT optional. The Builder MUST look at every iteration.   │    │
│   │ The Perceptual Deepening skill (perceptual-deepening/) provides   │    │
│   │ the protocol. Use /squint for quick checks, /zones for deep.      │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ DECISION: Score < 34.5 OR visual audit reveals soul violation?    │    │
│   │                                                                   │    │
│   │ YES + weakness → Deploy Research subagent (see Section 2.7)       │    │
│   │ YES + soul violation → Deploy zone sub-agents (/zones) for        │    │
│   │                        targeted visual analysis (Sec. 3.2, W4)   │    │
│   │ NO  → If score ≥ 34.5 AND visual audit clean: proceed to /soul-  │    │
│   │        audit (full Perceptual Deepening) before signaling Lead    │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ RESEARCH: Builder deploys subagent with context-rich prompt       │    │
│   │                                                                   │    │
│   │ Builder uses Task tool to deploy Research subagent:               │    │
│   │ "Validate R1-015 task-based organization.                         │    │
│   │  Context: ISLANDS pattern, PULSE rhythm, 31/40 score.             │    │
│   │  Clusters feel too uniform. What spacing creates distinct         │    │
│   │  patches in information foraging?"                                │    │
│   │                                                                   │    │
│   │ (See Section 2.7 for full context-rich prompt protocol)           │    │
│   │                                                                   │    │
│   │ Builder can deploy MULTIPLE research subagents in parallel        │    │
│   │ for different weakness areas. This is genuine parallelism.        │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ CONTEXT UPDATE: Accumulated identity enriched by research         │    │
│   │                                                                   │    │
│   │ Research subagent returned EXTERNAL-V-007:                        │    │
│   │   Pirolli & Card, 1999 — 48-64px optimal cluster spacing          │    │
│   │   VALIDATES R1-015 (+15% confidence)                              │    │
│   │   VALIDATES DD-003 (+10% confidence)                              │    │
│   │                                                                   │    │
│   │ NEW KNOWLEDGE: 48-64px cluster spacing is optimal                 │    │
│   │ NEW CONSTRAINT: Apply 48px minimum cluster gap                    │    │
│   │ CONFIDENCE BOOST: R1-015 now +15% (externally validated)          │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ ITERATION 2: Build with ENRICHED accumulated identity             │    │
│   │                                                                   │    │
│   │ INPUT: Original identity + EXTERNAL-V-007 findings                │    │
│   │ PROCESS: Apply 48px spacing, maintain all other constraints       │    │
│   │ OUTPUT: OD-003 iteration 2 (overwrites iteration 1)               │    │
│   │ SCORE: 35/40                                                      │    │
│   │ IMPROVEMENT: +4 points, clusters now distinct                     │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ CHECK: Score ≥ 34.5? (Quality bar)                                │    │
│   │                                                                   │    │
│   │ 35 ≥ 34.5 → PASS (structural)                                     │    │
│   │                                                                   │    │
│   │ ──────────────────────────────────────────────────────────────    │    │
│   │ FINAL VISUAL AUDIT: /soul-audit (MANDATORY before completion)     │    │
│   │ ──────────────────────────────────────────────────────────────    │    │
│   │                                                                   │    │
│   │ Builder invokes Perceptual Deepening skill (/soul-audit):         │    │
│   │                                                                   │    │
│   │ 1. Take FINAL screenshot of exploration                           │    │
│   │ 2. Deploy zone sub-agents IN PARALLEL (5 zones):                  │    │
│   │    - ZONE-TYPOGRAPHY: Font feel, letter endings, hierarchy         │    │
│   │    - ZONE-SPACING: Whitespace generosity, content-to-chrome       │    │
│   │    - ZONE-CONTAINERS: Borders trapped vs floating, frames         │    │
│   │    - ZONE-HIERARCHY: What dominates, visual order                  │    │
│   │    - ZONE-COMPOSITION: Tension, opposition, energy                 │    │
│   │                                                                   │    │
│   │ 3. Synthesize zone reports — do all 5 soul pieces manifest?       │    │
│   │    SP#1: Edges feel SHARP in visual inspection?                    │    │
│   │    SP#2: Wisdom text feels DIFFERENT (archival, serif presence)?   │    │
│   │    SP#3: Callouts feel like FAMILY (DNA structure)?                │    │
│   │    SP#4: Depth comes from EDGES, not shadows?                      │    │
│   │    SP#5: Markers feel SQUARE throughout?                           │    │
│   │                                                                   │    │
│   │ 4. IF any soul piece not perceptually manifest:                    │    │
│   │    → This is a VISUAL FAIL even if structural score ≥ 34.5        │    │
│   │    → Builder makes targeted single change (one change per iter)   │    │
│   │    → Re-screenshot, re-audit                                       │    │
│   │    → Continue until soul pieces are PERCEPTUALLY visible           │    │
│   │                                                                   │    │
│   │ 5. Document in builder-log.md:                                     │    │
│   │    "Soul audit: N zones checked, N soul pieces verified.           │    │
│   │     Visual observations: [perceptual terms, not CSS]"              │    │
│   │                                                                   │    │
│   │ This ensures EVERY exploration is visually verified before it      │    │
│   │ leaves the Builder. Not just structurally correct — LOOKS right.  │    │
│   │ ──────────────────────────────────────────────────────────────    │    │
│   │                                                                   │    │
│   │ Builder appends to _execution-journal/builder-log.md:               │    │
│   │ "[timestamp] OD-003 iteration 2 complete.                          │    │
│   │  Iter 1 scored 31/40 — clusters too uniform.                       │    │
│   │  Deployed Research subagent: Pirolli returned 48-64px optimal.     │    │
│   │  Key insight: spacing creates distinct patches, not borders.       │    │
│   │  Applied 48px gaps → score jumped to 35/40.                        │    │
│   │  Understanding shift: spacing > visual weight for org density."    │    │
│   │                                                                   │    │
│   │ Builder messages Lead:                                             │    │
│   │ "OD-003 complete. Score: 35/40.                                    │    │
│   │  Iterations: 2.                                                    │    │
│   │  External findings integrated: EXTERNAL-V-007.                     │    │
│   │  Visual audit: /soul-audit PASS. All 5 soul pieces manifest.      │    │
│   │    Squint test: feels sharp, archival, precise — matches soul.     │    │
│   │    Zone reports: Typography ✓ Spacing ✓ Containers ✓               │    │
│   │                  Hierarchy ✓ Composition ✓                         │    │
│   │  Research debt: API reference untested (→ CD),                     │    │
│   │                 mobile viewport untested (→ AD).                   │    │
│   │  File: explorations/organizational/OD-003-task-based.html"         │    │
│   │                                                                   │    │
│   │ IF score still < 34.5 after max iterations:                        │    │
│   │ Builder messages Lead:                                             │    │
│   │ "OD-003 stalled at [score]/40 after [N] iterations.                │    │
│   │  Weakness: [specific]. Research subagents did not resolve.          │    │
│   │  Recommend: [specific action or SKIP decision]."                   │    │
│   │ Lead decides: iterate more, adjust hypothesis, or flag.            │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Why the Builder Owns Research (Not a Separate Agent):

In v3.0, the Research Orchestrator was a separate agent that deployed sub-agents for
web search. But Agent Teams explicitly prohibit nested teams. The Research Orchestrator
would need to use the Task tool to deploy subagents — which is exactly what the Builder
can do directly.

More importantly: the Builder is the agent that KNOWS what weakness needs research.
The Builder scored 31/40 and identified "clusters too uniform." Having a separate
Research Orchestrator introduces indirection — the Builder would message Lead, Lead
would message Research Orchestrator, Research Orchestrator would deploy subagent,
receive results, message Lead, Lead would message Builder. That's 6 hops for what
should be 2: Builder deploys subagent → subagent returns.

The Builder carries accumulated identity. It knows the constraints. It knows the
weakness. It can build the context-rich prompt directly (see Section 2.7 for the
exact protocol). No intermediary needed.

**Research parallelism within Builder:** The Builder CAN deploy multiple Research
subagents simultaneously via parallel Task tool calls. If OD-003 has two weaknesses
(spacing AND hierarchy), the Builder deploys two subagents at once:

```
Builder deploys in parallel:
  Research subagent 1: "Validate spacing for task clusters (R1-015)"
  Research subagent 2: "Validate hierarchical depth limits (R1-022)"

Both return → Builder synthesizes → Iteration 2 addresses both
```

This is genuine parallelism that requires NO additional teammates.

## 2.5 Agent 3: THE WEAVER (Teammate)

**Role:** Bidirectional threading, web maintenance, inline section creation

The Weaver is responsible for the RETURN breath of the pipeline. When the Builder
completes an exploration, the Weaver threads it into the knowledge web — creating
its inline section, updating every source file's CONSUMED BY table, logging findings
to RESEARCH-ACTIVE.md, and verifying that all bidirectional links are complete.

### Why a Teammate, Not a Subagent or Embedded Function:

The Weaver touches 5-10+ files per exploration. It's not a one-shot read-only call
(subagent) or a single file write (embedded function). It's sustained multi-file
editing work that benefits from its own context window. And critically: the Weaver
can work WHILE the Lead pre-loads context for the next exploration, creating a genuine
parallelism window (see Section 3.2).

### Responsibilities:

* Create Tier B inline sections for new explorations (full 10-section format)
* Update source files' CONSUMED BY tables (bidirectional link completion)
* Update RESEARCH-ACTIVE.md with new findings and external validations
* Handle T1 LOCKED files: note pending updates in checkpoint instead of editing
* Verify bidirectional threading is complete (threading checklist)
* Report threading status to Lead via message
* Append to _execution-journal/weaver-log.md after each threading operation:
  what edge cases were found, what surprised, which files were harder than expected

### DOES NOT:

* Build explorations (Builder handles)
* Deploy research subagents (Builder handles)
* Run Guardian validation (Lead handles)
* Write checkpoints or CURRENT-STATE.md (Lead handles)
* Determine exploration sequencing (Lead handles)

### The Weaver's Bidirectional Update Protocol:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                    BIDIRECTIONAL UPDATE PROTOCOL                            │
│                                                                             │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ TRIGGER: Lead assigns "Thread OD-003 into web" via TaskList       │    │
│   │                                                                   │    │
│   │ INPUT (from Lead's message):                                      │    │
│   │ - OD-003 file path                                                │    │
│   │ - Accumulated identity (what sources were consumed)               │    │
│   │ - Score: 35/40                                                    │    │
│   │ - External findings used: EXTERNAL-V-007                          │    │
│   │ - Research debt identified: API ref (→ CD), mobile (→ AD)         │    │
│   │ - BUILT ON list: DD-003, DD-006, R1-015, EXTERNAL-V-007, SOUL    │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ STEP 1: Create inline section for OD-003                          │    │
│   │                                                                   │    │
│   │ (See Appendix A for full Tier B template)                         │    │
│   │                                                                   │    │
│   │ Weaver reads OD-003 to understand its content, then creates       │    │
│   │ the full 10-section inline threading header:                      │    │
│   │                                                                   │    │
│   │ 1. WHY THIS EXISTS — purpose from exploration brief + results     │    │
│   │ 2. THE QUESTION THIS ANSWERS — the driving question               │    │
│   │ 3. STATUS — ACTIVE | LOCKED | size                                │    │
│   │ 4. SOUL ALIGNMENT — how each soul piece manifests                 │    │
│   │ 5. BUILT ON — full provenance table (from Lead's message)         │    │
│   │ 6. MUST HONOR — constraints inherited from sources                │    │
│   │ 7. WHAT BREAKS IF THIS CHANGES — downstream consumers            │    │
│   │ 8. CONSUMED BY — initialized with known consumers                 │    │
│   │ 9. RESEARCH DEBT — honest uncertainties forwarded                 │    │
│   │ 10. DIAGNOSTIC QUESTIONS — questions before modifying             │    │
│   │                                                                   │    │
│   │ Inline section is inserted at the top of OD-003's HTML file.      │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ STEP 2: Update source files' CONSUMED BY tables                   │    │
│   │                                                                   │    │
│   │ FOR EACH source in BUILT ON:                                      │    │
│   │                                                                   │    │
│   │   IF source is NOT T1 LOCKED:                                     │    │
│   │     → Read source file                                            │    │
│   │     → Find Section 8 (CONSUMED BY)                                │    │
│   │     → Add: "OD-003 | Extracts [what] for [purpose]"               │    │
│   │     → Write updated source file                                   │    │
│   │                                                                   │    │
│   │   ELSE IF source IS T1 LOCKED:                                    │    │
│   │     → Note in Lead's checkpoint message:                          │    │
│   │       "T1 file [path] should list OD-003 as consumer (LOCKED)"    │    │
│   │                                                                   │    │
│   │ SPECIFIC UPDATES:                                                  │    │
│   │                                                                   │    │
│   │ DD-003-islands.html (Section 8):                                  │    │
│   │   + | OD-003 | Extracts ISLANDS for task cluster spacing |        │    │
│   │                                                                   │    │
│   │ DD-006-fractal.html (Section 8):                                  │    │
│   │   + | OD-003 | Applies fractal to task structure at all scales |  │    │
│   │                                                                   │    │
│   │ R1-015 entry (if has inline section):                             │    │
│   │   + | OD-003 | Tests task-based hypothesis |                      │    │
│   │                                                                   │    │
│   │ EXTERNAL-V-007 entry in RESEARCH-ACTIVE.md:                       │    │
│   │   + "Applied in: OD-003"                                          │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ STEP 3: Update RESEARCH-ACTIVE.md                                 │    │
│   │                                                                   │    │
│   │ ADD to "OD Outbound" section:                                     │    │
│   │                                                                   │    │
│   │ ### OD-F-003: Task Clusters Need 48px Minimum Gap                 │    │
│   │ - **Source:** OD-003 iterations 1-2                               │    │
│   │ - **Provenance:** R1-015 + EXTERNAL-V-007 + DD-003 ISLANDS        │    │
│   │ - **Finding:** Task clusters must have 48px minimum gap to        │    │
│   │   function as distinct ISLANDS. Validated by external research    │    │
│   │   (Pirolli Information Foraging) and iteration testing (+4 pts).  │    │
│   │ - **Confidence:** 80% (external validation + testing)             │    │
│   │ - **Applies to:** AD (axis geometry), CD (component combinations) │    │
│   │                                                                   │    │
│   │ UPDATE "External Findings" section:                               │    │
│   │                                                                   │    │
│   │ ### EXTERNAL-V-007                                                │    │
│   │ - **Source:** Pirolli & Card, 1999, "Information Foraging"        │    │
│   │ - **Finding:** Task-based organization mirrors foraging;          │    │
│   │   clear patches need clear boundaries (48-64px optimal)           │    │
│   │ - **Validates:** R1-015, DD-003                                   │    │
│   │ - **Confidence Impact:** R1-015 +15%, DD-003 +10%                 │    │
│   │ - **Applied in:** OD-003 iteration 2                              │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ STEP 4: Verify bidirectional threading complete                   │    │
│   │                                                                   │    │
│   │ THREADING CHECKLIST:                                              │    │
│   │                                                                   │    │
│   │ □ OD-003 has inline section                                       │    │
│   │   → YES (created in Step 1)                                       │    │
│   │                                                                   │    │
│   │ □ OD-003 BUILT ON lists all sources                               │    │
│   │   → YES (DD-003, DD-006, R1-015, EXTERNAL-V-007, SOUL)            │    │
│   │                                                                   │    │
│   │ □ All sources' CONSUMED BY lists OD-003                           │    │
│   │   → DD-003: YES                                                   │    │
│   │   → DD-006: YES                                                   │    │
│   │   → R1-015: YES (or noted if no inline section)                   │    │
│   │   → EXTERNAL-V-007: YES (in RESEARCH-ACTIVE.md)                   │    │
│   │   → MASTER-SOUL-SYNTHESIS: LOCKED (noted in checkpoint)           │    │
│   │                                                                   │    │
│   │ □ Findings logged to RESEARCH-ACTIVE.md                           │    │
│   │   → YES (OD-F-003 added)                                          │    │
│   │                                                                   │    │
│   │ □ External findings integrated                                    │    │
│   │   → YES (EXTERNAL-V-007 entry complete)                           │    │
│   │                                                                   │    │
│   │ THREADING STATUS: COMPLETE ✓                                      │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ STEP 5: Log to execution journal                                  │    │
│   │                                                                   │    │
│   │ Weaver appends to _execution-journal/weaver-log.md:               │    │
│   │ "[timestamp] Threading OD-003 complete.                            │    │
│   │  Updated 3 source files (DD-003, DD-006, R1-015).                  │    │
│   │  LOCKED: MASTER-SOUL-SYNTHESIS — noted for T1 maintainer.          │    │
│   │  Edge case: R1-015 had no inline section — added CONSUMED BY       │    │
│   │  as standalone table at end of file.                               │    │
│   │  Surprise: DD-006 already had 4 consumers — web is getting dense.  │    │
│   │  Insight: Files with >3 consumers may need threading verification  │    │
│   │  sub-protocol to avoid table overflow."                            │    │
│   │                                                                   │    │
│   │ STEP 6: Report to Lead                                            │    │
│   │                                                                   │    │
│   │ Weaver sends message to Lead:                                     │    │
│   │ "Threading complete for OD-003. ✓                                  │    │
│   │  - Inline section created (Tier B, 10 sections)                   │    │
│   │  - Sources updated: DD-003, DD-006, R1-015                         │    │
│   │  - LOCKED sources noted: MASTER-SOUL-SYNTHESIS                    │    │
│   │  - RESEARCH-ACTIVE.md: OD-F-003 + EXTERNAL-V-007 entries added    │    │
│   │  - Bidirectional threading verified: ALL COMPLETE                  │    │
│   │                                                                   │    │
│   │  Future traversals will now find:                                  │    │
│   │  OD-003 inline section + OD-F-003 finding + EXTERNAL-V-007        │    │
│   │  AD phase will inherit this enriched context."                     │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 2.6 Subagent Protocol: TRAVERSER

**Role:** Absorptive reading, identity extraction, context accumulation
**Primitive:** Task tool subagent (read-only, one call, one return)

This is the most critical PROTOCOL in the architecture. It was an agent in v3.0.
In v4.0, it is a subagent — because traversal is a one-shot read-only operation.
The Lead deploys it, it reads files absorptively, it returns structured accumulated
identity, it's done. No iteration. No file editing. No sustained work.

But the PROTOCOL is unchanged. The Absorptive Reading Protocol is preserved in full.

### Why Subagent, Not Teammate:

A teammate persists between tasks. It has its own context window that accumulates.
But the Traverser's job is stateless by design — each deployment reads the CURRENT
state of the web and returns a fresh accumulated identity. There's no value in the
Traverser remembering its previous traversal; in fact, that would be harmful because
the web has changed since then (Weaver added new inline sections).

A fresh subagent reads the current web with fresh eyes. That's exactly right.

### The Absorptive Reading Protocol (PRESERVED IN FULL):

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                    INLINE SECTION ABSORPTION PROTOCOL                       │
│                                                                             │
│   For each inline section, do NOT just extract facts.                       │
│   ABSORB the identity. BUILD understanding.                                 │
│                                                                             │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ STEP 1: Read WHY THIS EXISTS                                      │    │
│   │                                                                   │    │
│   │ - What is this file's UNIQUE contribution?                        │    │
│   │ - What question does someone ask that leads them here?            │    │
│   │ - What would be MISSING from the system without this file?        │    │
│   │                                                                   │    │
│   │ OUTPUT: Purpose statement that downstream agents can reference    │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ STEP 2: Read BUILT ON table                                       │    │
│   │                                                                   │    │
│   │ - What is the provenance chain?                                   │    │
│   │ - What specific values/findings does this file consume?           │    │
│   │ - Do I need to traverse those source files too?                   │    │
│   │                                                                   │    │
│   │ OUTPUT: Provenance map showing what this file inherits            │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ STEP 3: Read MUST HONOR table                                     │    │
│   │                                                                   │    │
│   │ - What constraints are NON-NEGOTIABLE?                            │    │
│   │ - What are the CONSEQUENCES of violation?                         │    │
│   │ - Add each constraint to the accumulated constraint registry      │    │
│   │                                                                   │    │
│   │ OUTPUT: Constraints that will govern all downstream work          │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ STEP 4: Read SOUL ALIGNMENT                                       │    │
│   │                                                                   │    │
│   │ - How does this file manifest each soul piece?                    │    │
│   │ - Are there CANDIDATE soul pieces?                                │    │
│   │ - How must downstream work honor these same soul pieces?          │    │
│   │                                                                   │    │
│   │ OUTPUT: Soul alignment requirements for all outputs               │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ STEP 5: Read RESEARCH DEBT                                        │    │
│   │                                                                   │    │
│   │ - What does this file NOT know?                                   │    │
│   │ - What assumptions are untested?                                  │    │
│   │ - Should any of this be validated via Research subagent?          │    │
│   │                                                                   │    │
│   │ OUTPUT: Research questions for potential subagent deployment       │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ STEP 6: Read CONSUMED BY                                          │    │
│   │                                                                   │    │
│   │ - Who depends on this file?                                       │    │
│   │ - What do they extract from it?                                   │    │
│   │ - Will the current exploration become a consumer? (Note for later)│    │
│   │                                                                   │    │
│   │ OUTPUT: Dependency map showing who this file serves               │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ FINAL: Synthesize into ACCUMULATED IDENTITY                       │    │
│   │                                                                   │    │
│   │ Return to Lead:                                                   │    │
│   │                                                                   │    │
│   │ ACCUMULATED IDENTITY = {                                          │    │
│   │   purposes: [purpose statements from each file],                  │    │
│   │   provenance: [full chain of what is inherited],                  │    │
│   │   constraints: [all MUST HONOR from all files],                   │    │
│   │   soul_requirements: [all soul alignment requirements],           │    │
│   │   research_debt: [all unknowns, uncertainties],                   │    │
│   │   validation_candidates: [debt items suitable for subagent],      │    │
│   │   consumers_to_update: [files to update when done]                │    │
│   │ }                                                                 │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Traverser Subagent Prompt Template (What Lead Sends):

```
## TRAVERSER SUBAGENT MISSION

Read the following files ABSORPTIVELY (not extractively).
For each file, follow the 6-step Absorption Protocol.
Return a single structured ACCUMULATED IDENTITY.

### Files to Traverse:
1. showcase/explorations/density/DD-001-pulse.html
2. showcase/explorations/density/DD-003-islands.html
3. showcase/explorations/density/DD-006-fractal.html
4. MASTER-SOUL-SYNTHESIS.md
5. DESIGN-TOKEN-SUMMARY.md
6. RESEARCH-ACTIVE.md (for R1-015 entry)
[+ any OD files completed so far]

### Absorption Protocol:
For EACH file:
  Step 1: WHY THIS EXISTS → purpose statement
  Step 2: BUILT ON → provenance map
  Step 3: MUST HONOR → constraints with consequences
  Step 4: SOUL ALIGNMENT → soul piece requirements
  Step 5: RESEARCH DEBT → unknowns and uncertainties
  Step 6: CONSUMED BY → dependency map

### Output Format:
Return the ACCUMULATED IDENTITY in the format specified below.
(See Appendix C for exact template)

### Do Not:
- Skip any inline section field
- Summarize constraints (list them all)
- Ignore research debt items
- Miss CONSUMED BY entries
```

### Traverser Output Format (Returned to Lead):

```
## ACCUMULATED IDENTITY FROM TRAVERSAL

### Files Traversed
1. DD-001-pulse.html (PULSE rhythm)
2. DD-003-islands.html (ISLANDS clustering)
3. DD-006-fractal.html (Fractal self-similarity)
4. MASTER-SOUL-SYNTHESIS.md (5 soul pieces)
5. R1-015 (task-based organization hypothesis)
6. DESIGN-TOKEN-SUMMARY.md (locked tokens)

### What I Now Know (Accumulated Knowledge)
- PULSE: Information must breathe. Expand-contract-expand rhythm.
- ISLANDS: Task clusters need 48-64px sparse surrounding.
- FRACTAL: Structure at page must mirror structure at section must mirror component.
- SOUL: Sharp edges (0 radius), Archivist Serif for wisdom, Callout DNA, no shadows, squares.
- R1-015: "Task-based outperforms feature-based" BUT confidence only 65% (small sample).
- TOKENS: border-radius: 0 is LOCKED.

### What I Must Honor (Active Constraints)
| Constraint | Source | Consequence |
|------------|--------|-------------|
| Questions ≥2x whitespace of answers | DD-001 MUST HONOR | Rhythm collapses |
| Cluster boundaries visually crisp | DD-003 MUST HONOR | Tasks merge |
| Pattern at macro appears at micro | DD-006 MUST HONOR | Navigation fails |
| border-radius: 0 everywhere | DESIGN-TOKEN-SUMMARY | Soul violation |
| 5 soul pieces in every element | MASTER-SOUL-SYNTHESIS | Identity breaks |

### What I Don't Know (Research Debt)
- [ ] Is R1-015 validated by external research? (Candidate for Research subagent)
- [ ] What spacing makes clusters feel like distinct ISLANDS? (Candidate for Research subagent)
- [ ] Does task-based work for API reference? (Unknown, forwards to CD)
- [ ] Mobile viewport behavior? (Untested)

### Validation Candidates for Research Subagent Deployment
1. **Priority HIGH:** Validate R1-015 (task-based organization)
   - Question: "Does external research support task-based > feature-based?"
   - Context to carry: ISLANDS pattern, PULSE rhythm, initial score
   - Integration path: VALIDATES → boost R1-015 confidence, CHALLENGES → reassess

2. **Priority MEDIUM:** Optimal cluster spacing
   - Question: "What spacing creates clear 'patch' boundaries in information foraging?"
   - Context to carry: DD-003 ISLANDS, visual grouping principles
   - Integration path: Specific value → apply in iteration 2

### Files to Update When Done (Consumers List)
- DD-003-islands.html → CONSUMED BY (add OD-[N])
- DD-006-fractal.html → CONSUMED BY (add OD-[N])
- R1-015 → CONSUMED BY (add OD-[N])
- RESEARCH-ACTIVE.md → Add any new findings
```

## 2.7 Subagent Protocol: RESEARCH

**Role:** External validation, extension, gap-filling with accumulated context
**Primitive:** Task tool subagent (deployed BY BUILDER, not by Lead)

This protocol was the Research Orchestrator agent in v3.0. In v4.0, it is a subagent
protocol that the Builder executes directly. The Builder identifies a weakness, builds
a context-rich prompt carrying accumulated identity, deploys the subagent, and receives
findings formatted for integration.

### Why Deployed by Builder, Not Lead:

The Builder is the agent that:
1. Knows what weakness needs research (it scored the exploration)
2. Carries the accumulated identity (received from Lead)
3. Will USE the findings in its next iteration
4. Can deploy MULTIPLE research subagents in parallel

Having the Lead mediate (Builder → Lead → Research → Lead → Builder) adds 4 extra
message hops with no value. The Builder has the context and the need. It deploys directly.

### The Context-Rich Sub-Agent Deployment Protocol (PRESERVED IN FULL):

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                    RESEARCH SUBAGENT DEPLOYMENT PROTOCOL                    │
│                                                                             │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ STEP 1: Builder identifies weakness from iteration scoring        │    │
│   │                                                                   │    │
│   │ WEAKNESS: Clusters too uniform, can't distinguish task groups     │    │
│   │ RELATED DEBT: R1-015 has low confidence (small sample)            │    │
│   │ INTEGRATION NEED: Specific spacing value for iteration 2          │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ STEP 2: Build context-rich prompt FROM accumulated identity       │    │
│   │                                                                   │    │
│   │ DO NOT: "Search for task-based vs feature-based documentation"    │    │
│   │ (This is generic. Results can't integrate.)                       │    │
│   │                                                                   │    │
│   │ DO: Build prompt that carries accumulated identity into search    │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ CONTEXT-RICH SUBAGENT PROMPT                                      │    │
│   │ (See Appendix B for full template)                                │    │
│   │                                                                   │    │
│   │ ## Mission                                                        │    │
│   │ Validate or challenge R1-015's claim that task-based              │    │
│   │ documentation organization outperforms feature-based.             │    │
│   │                                                                   │    │
│   │ ## Context I Carry (From Inline Section Traversal)                │    │
│   │                                                                   │    │
│   │ **What I Know:**                                                  │    │
│   │ - R1-015 claims task-based > feature-based (single study, n=23)   │    │
│   │ - DD-003 ISLANDS: task clusters need sparse surrounding space     │    │
│   │ - DD-006 FRACTAL: task structure must be self-similar at scales   │    │
│   │ - OD-003 iteration 1 scored 31/40; clusters felt too uniform      │    │
│   │ - Soul Piece #1: Sharp edges = precision = trust                  │    │
│   │                                                                   │    │
│   │ **What I'm Uncertain About:**                                     │    │
│   │ - Is R1-015's finding replicable? (small sample concern)          │    │
│   │ - What spacing makes clusters feel like distinct ISLANDS?         │    │
│   │ - Does task-based work for reference docs, not just tutorials?    │    │
│   │                                                                   │    │
│   │ **Constraints Active:**                                           │    │
│   │ - Clusters must be ISLANDS with sparse surrounding (DD-003)       │    │
│   │ - Structure must be fractal at all scales (DD-006)                │    │
│   │                                                                   │    │
│   │ ## Your Task                                                      │    │
│   │                                                                   │    │
│   │ Search for external research on:                                  │    │
│   │ 1. Task-based vs feature-based documentation organization         │    │
│   │ 2. Information foraging theory applied to documentation           │    │
│   │ 3. Optimal spacing/clustering for visual task grouping            │    │
│   │                                                                   │    │
│   │ ## Output Format                                                  │    │
│   │                                                                   │    │
│   │ | Source | Finding | Relationship | Confidence Impact |           │    │
│   │ |--------|---------|--------------|-------------------|           │    │
│   │ | [cite] | [find]  | VALIDATES/CHALLENGES/EXTENDS | +/-% |        │    │
│   │                                                                   │    │
│   │ ## Integration Path                                               │    │
│   │                                                                   │    │
│   │ **If VALIDATES R1-015:**                                          │    │
│   │ - Assign ID: EXTERNAL-V-###                                       │    │
│   │ - Note confidence impact for R1-015                               │    │
│   │ - Provide specific values to apply in next iteration              │    │
│   │                                                                   │    │
│   │ **If CHALLENGES R1-015:**                                         │    │
│   │ - Assign ID: EXTERNAL-V-### with CHALLENGES flag                  │    │
│   │ - Explain what specifically is challenged                         │    │
│   │ - Recommend: continue, modify, or abandon hypothesis              │    │
│   │                                                                   │    │
│   │ **If EXTENDS (new insight):**                                     │    │
│   │ - Assign ID: EXTERNAL-E-###                                       │    │
│   │ - Evaluate applicability to current and future phases             │    │
│   │                                                                   │    │
│   │ ## Do Not                                                         │    │
│   │ - Return generic cognitive load articles without integration path │    │
│   │ - Skip the integration assignment                                 │    │
│   │ - Return findings that can't link to accumulated identity         │    │
│   │ - Create orphan findings without home                             │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ STEP 3: Deploy subagent (Task tool, web search capability)        │    │
│   │                                                                   │    │
│   │ Builder uses Task tool with subagent_type appropriate for         │    │
│   │ web search (general-purpose agent with WebSearch access).         │    │
│   │                                                                   │    │
│   │ Builder can deploy MULTIPLE subagents in parallel:                │    │
│   │ - Research subagent 1: spacing validation                         │    │
│   │ - Research subagent 2: hierarchy depth validation                 │    │
│   │ - Research subagent 3: foraging theory validation                 │    │
│   │                                                                   │    │
│   │ All run simultaneously. All return with integration-ready output. │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ STEP 4: Receive and integrate findings                            │    │
│   │                                                                   │    │
│   │ SUBAGENT RETURNS:                                                 │    │
│   │                                                                   │    │
│   │ EXTERNAL-V-007:                                                   │    │
│   │   source: Pirolli & Card, 1999, "Information Foraging"            │    │
│   │   finding: Task-based mirrors foraging; 48-64px optimal spacing   │    │
│   │   validates: [R1-015, DD-003]                                     │    │
│   │   confidence_impact: {R1-015: +15%, DD-003: +10%}                 │    │
│   │   integration:                                                    │    │
│   │     - Apply 48px in next iteration                                │    │
│   │     - Note for Weaver: update RESEARCH-ACTIVE.md                  │    │
│   │     - Note for Weaver: update R1-015 BUILT ON                     │    │
│   │     - Note for Weaver: update DD-003 BUILT ON                     │    │
│   │                                                                   │    │
│   │ Builder incorporates findings into next iteration.                │    │
│   │ Builder includes findings in completion report to Lead.           │    │
│   │ Lead passes findings to Weaver for threading.                     │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Research Subagent Types (PRESERVED):

| Type | ID Pattern | Purpose | Integration Path |
|------|------------|---------|------------------|
| Validation | EXTERNAL-V-### | Confirm/deny internal findings | Boosts/lowers confidence |
| Extension | EXTERNAL-E-### | Add new insight to existing | Extends scope of finding |
| Gap-Fill | EXTERNAL-G-### | Answer specific question | Fills identified debt |

## 2.8 Guardian Validation (Embedded in Lead)

**Role:** Identity enforcement, constraint validation, debt tracking
**Primitive:** Embedded checklist in Lead (not a separate agent)

In v3.0, the Context Guardian was a separate agent. In v4.0, it is a validation protocol
that the Lead executes at every gate. The Guardian's logic is a 4-check enforcement loop
— it's a structured checklist with pass/fail gates, not sustained creative work. It
doesn't need its own context window or token budget.

But the PROTOCOL is unchanged. Every check, every consequence, every block action is
preserved in full.

### Why Embedded, Not Separate:

The Guardian's job is: receive output → check 4 things → pass or block. This is
synchronous validation that takes seconds. A separate Claude instance for this would
spend 99% of its time idle, waiting for the next validation request. The Lead can run
the same checklist after receiving each teammate's completion message.

### The Guardian Enforcement Loop (PRESERVED IN FULL):

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                    GUARDIAN ENFORCEMENT LOOP                                │
│                    (Executed by Lead at every gate)                         │
│                                                                             │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ INPUT: Any agent output (exploration, finding, inline section)    │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ CHECK 1: Does output reference accumulated identity?              │    │
│   │                                                                   │    │
│   │ - Does it cite the inline sections it consumed?                   │    │
│   │ - Does it acknowledge constraints from MUST HONOR tables?         │    │
│   │ - Does it show provenance chain in BUILT ON?                      │    │
│   │                                                                   │    │
│   │ FAIL → BLOCK.                                                     │    │
│   │ Lead messages Builder: "Output lacks provenance.                   │    │
│   │ You must cite sources from accumulated identity.                   │    │
│   │ Re-iterate with explicit provenance."                              │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ CHECK 2: Does output violate any MUST HONOR constraints?          │    │
│   │                                                                   │    │
│   │ - Compare output against every constraint in accumulated identity │    │
│   │ - Check soul piece compliance (5 soul pieces)                     │    │
│   │ - Verify density pattern adherence (PULSE, ISLANDS, FRACTAL)      │    │
│   │                                                                   │    │
│   │ FAIL → BLOCK.                                                     │    │
│   │ Lead messages Builder: "Constraint violation: [specific].          │    │
│   │ Consequence: [from MUST HONOR table]. Fix required.                │    │
│   │ Re-iterate honoring [constraint]."                                 │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ CHECK 3: Does output acknowledge what it doesn't know?            │    │
│   │                                                                   │    │
│   │ - Is research debt identified?                                    │    │
│   │ - Are untested assumptions flagged?                               │    │
│   │ - Are questions forwarded to appropriate phases?                  │    │
│   │                                                                   │    │
│   │ FAIL → BLOCK.                                                     │    │
│   │ Lead messages Builder: "Output claims certainty without evidence.  │    │
│   │ You must acknowledge: [specific uncertainty].                      │    │
│   │ Add research debt for: [items]."                                   │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ CHECK 4: Is output ready for threading?                           │    │
│   │                                                                   │    │
│   │ - Are all sources identified (for BUILT ON)?                      │    │
│   │ - Are all consumers identified (for CONSUMED BY)?                 │    │
│   │ - Can Weaver create a complete inline section from this?          │    │
│   │                                                                   │    │
│   │ FAIL → BLOCK.                                                     │    │
│   │ Lead messages Builder: "Output cannot be threaded.                 │    │
│   │ Missing: [specific sources/consumers].                             │    │
│   │ Provide complete provenance for Weaver."                           │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ CHECK 5: Did Builder perform visual audit?                        │    │
│   │                                                                   │    │
│   │ - Did Builder's completion message include visual audit results?  │    │
│   │ - Did Builder invoke /soul-audit (Perceptual Deepening)?          │    │
│   │ - Are zone reports (Typography, Spacing, Containers, Hierarchy,  │    │
│   │   Composition) included in the completion report?                 │    │
│   │ - Are all 5 soul pieces confirmed PERCEPTUALLY, not just          │    │
│   │   structurally?                                                   │    │
│   │                                                                   │    │
│   │ FAIL → BLOCK.                                                     │    │
│   │ Lead messages Builder: "Visual audit incomplete.                   │    │
│   │ You MUST invoke /soul-audit and include zone reports.              │    │
│   │ Looking at the output is not optional.                             │    │
│   │ Re-run with full Perceptual Deepening and report results."        │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                  │                                          │
│                                  ▼                                          │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │ PASS: Output is identity-compliant AND visually verified.         │    │
│   │ Proceed to Auditor (Build Audit) and then Weaver.                 │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Constraint Registry (Maintained by Lead):

The Lead maintains the active constraint registry throughout the OD phase.
This registry is built from the Traverser's accumulated identity output and
updated as new constraints are discovered.

```
## ACTIVE CONSTRAINTS (Accumulated from Inline Sections)

### From DD-001 (PULSE)
| Constraint | Consequence of Violation |
|------------|--------------------------|
| Breathing rhythm at all scales | Information dumps without pause cause cognitive overload |
| Questions create expansion | Dense Q+A without breathing room fails comprehension tests |

### From DD-003 (ISLANDS)
| Constraint | Consequence of Violation |
|------------|--------------------------|
| Task clusters surrounded by sparse space | Clusters merge into undifferentiated mass |
| Cluster boundaries must be visually crisp | Reader can't identify task groupings |

### From DD-006 (FRACTAL)
| Constraint | Consequence of Violation |
|------------|--------------------------|
| Self-similarity at page/section/component | Structure feels inconsistent, breaks mental model |
| Pattern at macro must appear at micro | Reader's navigation intuition fails |

### From MASTER-SOUL-SYNTHESIS
| Constraint | Consequence of Violation |
|------------|--------------------------|
| SP#1: Sharp edges everywhere | System looks generic, not distinctive |
| SP#2: Archivist Serif for wisdom | Voice differentiation collapses |
| SP#3: Callout family DNA | Components feel unrelated |
| SP#4: No shadows | Depth language becomes muddy |
| SP#5: Squares always | Visual rhythm breaks |

### Research Debt Active
| Debt Item | Source | Status | Forwarded To |
|-----------|--------|--------|--------------|
| R1-007 small sample (n=23) | DD-001 RESEARCH DEBT | OPEN | Research subagent |
| Mobile viewport untested | OD-001 RESEARCH DEBT | OPEN | AD testing |
| API reference not tested | OD-003 RESEARCH DEBT | OPEN | CD exploration |
```

### Gate Locations (Where Lead Runs Guardian Checks):

```
GATE 1: Before exploration build
  Lead runs after Traverser subagent returns accumulated identity.
  □ Accumulated identity loaded?
  □ All MUST HONOR constraints registered?
  □ Research debt acknowledged?
  FAIL → Re-deploy Traverser subagent with corrected file list.

GATE 2: After exploration build
  Lead runs after Builder reports completion.
  □ Exploration honors all constraints?
  □ Soul pieces visible in output?
  □ Score meets quality bar?
  □ Research findings properly integrated?
  FAIL → Lead messages Builder: "Re-iterate with [specific fix]."

GATE 3: After inline section creation
  Lead runs after Weaver reports threading complete.
  □ BUILT ON table complete?
  □ MUST HONOR inherited from sources?
  □ CONSUMED BY initialized?
  □ All source CONSUMED BY tables updated?
  FAIL → Lead messages Weaver: "Threading incomplete. Fix [specific]."

GATE 4: Before handoff to next exploration
  Lead runs after all updates confirmed.
  □ All source CONSUMED BY tables updated?
  □ RESEARCH-ACTIVE.md updated?
  □ Threading checklist complete?
  □ Checkpoint written?
  FAIL → Lead completes missing items before proceeding.

GATE 5: Before handoff to AD phase
  Lead runs after ALL explorations complete.
  □ All explorations have inline sections?
  □ All findings logged?
  □ Pattern catalogue complete?
  □ Accumulated identity comprehensive?
  □ organizational-patterns.md created with Tier A inline section?
  FAIL → Lead identifies and assigns remaining work.

GATE 5.5: Comprehensive Audit (Auditor — full system verification)
  Lead deploys Auditor for FINAL verification of entire OD output.
  □ All 6 explorations exist with complete inline sections?
  □ All CSS constraints honored across all files (spot-check each)?
  □ All CONSUMED BY tables complete?
  □ No broken paths, no duplicates, no noise?
  FAIL → Lead assigns fixes, deploys new Auditor after fixes.
  PASS → AD handoff approved.
```

## 2.9 Checkpointing (Embedded in Lead)

**Role:** STRUCTURAL state persistence, recovery support
**Primitive:** File writes by Lead (not a separate agent)

Writing OD-CHECKPOINT.md is a single file write. It does not require a separate
Claude instance. The Lead writes the checkpoint after each significant operation.

**CRITICAL DISTINCTION — Checkpoint vs Journal:**

The checkpoint (OD-CHECKPOINT.md) stores STRUCTURAL state: what exploration number,
what score, what threading status. This is recoverable even without the checkpoint
because the web itself contains this information (Traverser can re-extract it).

The journal (_execution-journal/) stores CONTEXTUAL state: why decisions were made,
what the mental model is, what patterns are emerging. This is NOT recoverable from
the web. If the journal is lost AND context compacts, contextual understanding
resets to baseline. See Section 1.4 and 2.11 for the full journal protocol.

The checkpoint and journal are written TOGETHER — every checkpoint write is
accompanied by a CURRENT-STATE.md overwrite and a lead-log.md append. They are
two views of the same moment: structural position + contextual understanding.

### Checkpoint Structure (PRESERVED):

```markdown
# OD-CHECKPOINT.md

## Current State
- **Phase:** OD
- **Current Exploration:** OD-003
- **Current Iteration:** 2
- **Last Score:** 35/40
- **Status:** BUILDING
- **Team:** Lead + Builder + Weaver (active)

## Completed Explorations
| OD | Hypothesis | Final Score | INCLUDE? | Inline Section? | Threaded? |
|----|------------|-------------|----------|-----------------|-----------|
| OD-001 | Conversational | 35/40 | YES | YES | YES |
| OD-002 | Progressive Disclosure | 34/40 | BORDERLINE | YES | YES |

## Active Research
- **Validation in Progress:** None
- **Pending Research Subagent Deployments:**
  - OD-004 will need spacing validation for hierarchical layout

## Accumulated Identity Snapshot
(See Appendix C for full JSON format)

## Threading Status
| File | Inline Section | Sources Updated | RESEARCH-ACTIVE | Build Audit | Thread Audit |
|------|---------------|-----------------|-----------------|-------------|--------------|
| OD-001 | ✓ | ✓ | ✓ | PASS | PASS |
| OD-002 | ✓ | ✓ | ✓ | PASS | PASS |
| OD-003 | ✓ | ✓ | ✓ | PASS | PASS |

## T1 LOCKED Files — Pending Updates
| File | Pending Update | Reason |
|------|---------------|--------|
| MASTER-SOUL-SYNTHESIS.md | Add OD-001, OD-002, OD-003 as consumers | T1 LOCKED |

## Recovery Protocol
If context lost:
1. Lead reads this checkpoint
2. Lead deploys Traverser subagent for files in "Completed Explorations"
3. Traverser rebuilds ACCUMULATED IDENTITY from current web state
4. Lead resumes from "Current Exploration" at "Current Iteration"
5. Verify: Threading status matches checkpoint
   → If mismatch: Lead assigns Weaver to complete missing updates
```

## 2.10 Subagent Protocol: AUDITOR

**Role:** Independent, fresh-eyes verification of every major output
**Primitive:** Task tool subagent (FRESH context window every deployment — this is the point)

The Auditor is v4.0's answer to a fundamental blind spot in v3.0: nobody independently
verified that outputs ACTUALLY matched what was CLAIMED. The Guardian (embedded in Lead)
validates based on teammate reports. But the Lead has been accumulating context for
hours — it has assumptions, it trusts patterns, it might not notice a border-radius: 8px
buried on line 247 because it "knows" the Builder honored that constraint.

The Auditor has NO accumulated context. It gets a fresh context window every time.
It receives ONLY the output to check and the criteria to check against. It reads the
ACTUAL FILES and verifies what EXISTS, not what's CLAIMED.

**VISUAL INSPECTION (v4.0 enhancement):** The Auditor doesn't just check CSS values
programmatically. It also TAKES A SCREENSHOT of the exploration (via Playwright MCP)
and performs a visual squint test — "Does this LOOK like it has sharp edges? Does
the wisdom text FEEL different? Do callouts FEEL like family?" This catches issues
that pass structural validation but fail perceptual inspection. A border-radius: 0
can still look rounded if the container is too small. A serif font can still feel
generic if the weight or contrast is wrong. The Auditor uses the Perceptual Deepening
skill's `/squint` comparison protocol for this visual check.

### Why Subagent, Not Teammate:

A teammate accumulates context over time. After 3 audits, a teammate would start
developing the same blind spots the Lead has — familiarity, pattern-matching, trust.
The entire value of the Auditor is FRESH EYES. Every deployment must be independent.
A subagent gets a clean context window every time. That's the design requirement.

### Two Audit Types:

**BUILD AUDIT** — Deployed after Builder completes, before Weaver starts threading.

```
PURPOSE: Verify the exploration ACTUALLY honors constraints and soul pieces.

WHAT IT RECEIVES:
- The exploration HTML file path
- The constraint registry (what MUST be true)
- The soul piece checklist (what must be visible)
- The file location expectations (where it should be)

WHAT IT DOES NOT RECEIVE:
- The accumulated identity that led to the exploration
- The Builder's reasoning or iteration history
- The Lead's context or previous observations
- Any prior audit results

WHAT IT CHECKS:
□ CSS: border-radius: 0 on EVERY element (read actual CSS, not trust claims)
□ CSS: box-shadow: none EVERYWHERE (read actual CSS)
□ CSS: Colors match locked token values (compare actual values)
□ CSS: Typography uses correct font families (check actual declarations)
□ Spacing: Cluster gaps meet minimum thresholds (measure actual values)
□ Structure: Self-similarity at page/section/component levels (inspect DOM)
□ Soul: Each SP#1-5 has visible manifestation (identify specific elements)
□ Location: File is in correct directory
□ Noise: No extraneous files created (check directory listing)
□ HTML: Valid structure, no broken references
□ Provenance: BUILT ON sources are cited in the content (not just header)

RETURNS:
  PASS — all criteria met, with specific evidence for each
  FAIL — specific violations with file:line references
```

**THREAD AUDIT** — Deployed after Weaver completes, before Lead proceeds.

```
PURPOSE: Verify the web was ACTUALLY updated correctly.

WHAT IT RECEIVES:
- List of files that SHOULD have been updated
- What entries SHOULD exist in each file
- The newly created inline section file path

WHAT IT DOES NOT RECEIVE:
- The Weaver's process or reasoning
- The Lead's context or previous observations
- Any prior audit results

WHAT IT CHECKS:
□ Inline section: All 10 sections present and non-empty?
□ Inline section: BUILT ON table has ≥5 entries (for explorations)?
□ Inline section: MUST HONOR table has ≥3 constraints?
□ Source files: Each CONSUMED BY table ACTUALLY contains the new entry?
  (Read each source file. Find Section 8. Check for the specific entry.)
□ RESEARCH-ACTIVE.md: New findings ACTUALLY have entries?
□ RESEARCH-ACTIVE.md: External findings ACTUALLY have entries?
□ Bidirectional: Every BUILT ON source has matching CONSUMED BY entry?
□ No duplicates: No entry appears twice in any table?
□ No broken paths: Every file path in every table actually exists?
□ No noise: No unexpected file modifications?

RETURNS:
  PASS — all entries verified with file:line evidence
  FAIL — specific missing/incorrect entries with file:line evidence
```

### Auditor Subagent Prompt Templates:

**Build Audit Prompt:**

```markdown
## AUDITOR MISSION: Build Audit for OD-003

You are an INDEPENDENT VERIFIER. You have NO context about how this
exploration was built. You have FRESH EYES.

### File to Audit
explorations/organizational/OD-003-task-based.html

### Constraint Checklist (From Design System)
| Constraint | Check Method |
|------------|-------------|
| border-radius: 0 everywhere | Search for border-radius in CSS, verify all values are 0 |
| box-shadow: none everywhere | Search for box-shadow in CSS, verify none/0 |
| Cluster spacing ≥ 48px | Identify cluster elements, check gap/margin values |
| Self-similar structure | Compare page-level, section-level, component-level patterns |
| SP#1 Sharp Edges | Look for visual crispness, no rounded corners |
| SP#2 Archivist Serif | Check font-family declarations for Cormorant Garamond |
| SP#3 Callout DNA | Check for 2-zone structure in callout elements |
| SP#4 No Shadows | Confirm zero box-shadow and zero text-shadow |
| SP#5 Squares | Check bullet/marker shapes are square |

### File Location Check
Expected: explorations/organizational/OD-003-task-based.html
Check: Is it there? Are there extraneous files in the directory?

### Output Format
For each check:
  [PASS/FAIL] [Constraint] — [Evidence with file path and line number]

Final verdict: PASS (all checks pass) or FAIL (list all failures)
```

**Thread Audit Prompt:**

```markdown
## AUDITOR MISSION: Thread Audit for OD-003

You are an INDEPENDENT VERIFIER. You have NO context about the
threading process. You have FRESH EYES.

### Expected Updates
The following files SHOULD have been updated:

| File | Section | Expected Entry |
|------|---------|----------------|
| DD-003-islands.html | Section 8 (CONSUMED BY) | "OD-003" |
| DD-006-fractal.html | Section 8 (CONSUMED BY) | "OD-003" |
| R1-015 entry | Section 8 (CONSUMED BY) | "OD-003" |
| RESEARCH-ACTIVE.md | OD Outbound | "OD-F-003" entry |
| RESEARCH-ACTIVE.md | External Findings | "EXTERNAL-V-007" entry |

### New Inline Section Check
File: explorations/organizational/OD-003-task-based.html
Expected: Complete inline threading header with all 10 sections.

### Verification Protocol
For EACH expected update:
1. Read the actual file
2. Find the specific section
3. Check if the expected entry EXISTS
4. Note the exact line number where found (or note MISSING)

### Output Format
For each expected update:
  [FOUND at line X / MISSING] [File] [Section] [Entry]

Additional checks:
  [PASS/FAIL] No duplicate entries in any table
  [PASS/FAIL] No broken file paths
  [PASS/FAIL] No unexpected modifications to files

Final verdict: PASS or FAIL with specific evidence
```

### Integration with Lead's Pipeline:

The Auditor creates TWO additional gate checks in the pipeline:

```
GATE 2.5: BUILD AUDIT (between Guardian validation and Weaver assignment)
  Lead runs Guardian checks (fast, report-based) → PASS
  Lead deploys Auditor subagent (thorough, file-based) → PASS/FAIL
  IF FAIL: Lead messages Builder with Auditor's findings → Builder fixes → re-audit
  IF PASS: Lead proceeds to assign Weaver

GATE 4.5: THREAD AUDIT (between Weaver completion and checkpoint)
  Lead runs Guardian checks on Weaver's report → PASS
  Lead deploys Auditor subagent (thorough, file-based) → PASS/FAIL
  IF FAIL: Lead messages Weaver with Auditor's findings → Weaver fixes → re-audit
  IF PASS: Lead writes checkpoint and journal → proceeds
```

## 2.11 The Execution Journal Protocol (Embedded in All Agents)

**Role:** Contextual state persistence across context compactions
**Primitive:** File writes by Lead (CURRENT-STATE, lead-log, decisions) + Builder
(builder-log) + Weaver (weaver-log). Not a separate agent.

The checkpoint (2.9) stores WHERE we are structurally. The journal stores WHERE
we are MENTALLY — what we understand, why we chose this path, what we expect.
Without the journal, compaction recovery rebuilds position but not understanding.

### Why This Matters — The Compaction Failure Mode:

```
WITHOUT JOURNAL:
  Context compacts → Lead reads OD-CHECKPOINT.md
  → "We're on OD-004. Score target: ≥34.5. Identity v3."
  → Lead deploys Traverser → gets structural identity
  → Lead assigns Builder: "Build OD-004"
  → Builder builds... but doesn't know WHY OD-004 was chosen,
     doesn't know what OD-001 through OD-003 TAUGHT us,
     doesn't know the emerging spacing-hierarchy insight
  → Builder produces a GENERIC OD-004 instead of one that
     builds on accumulated understanding
  → COMPOUNDING IS BROKEN. We're just repeating, not compounding.

WITH JOURNAL:
  Context compacts → Lead reads CURRENT-STATE.md
  → "We're on OD-004. OD-003 taught us that organizational
     density IS spacing hierarchy. We chose OD-004's hypothesis
     (hierarchical nav) because we expect spacing principles to
     apply vertically. If confirmed, unified spacing theory for AD."
  → Lead reads lead-log.md → sees pattern across 3 explorations
  → Lead sends Builder the FULL context including mental model
  → Builder produces an OD-004 that BUILDS ON accumulated insight
  → COMPOUNDING CONTINUES across the compaction boundary.
```

This is the difference between a team that resumes work and a team that
resumes UNDERSTANDING.

### Folder Structure:

```
_execution-journal/
│
├── CURRENT-STATE.md
│   ├── OVERWRITTEN (not appended) after every significant operation
│   ├── Lead is the ONLY writer
│   ├── Contains: position, rationale, mental model, decisions, next steps
│   └── If you read ONLY ONE file after compaction, read this one
│
├── lead-log.md
│   ├── APPENDED (newest entry at top) by Lead
│   ├── Gate results + rationale + emerging patterns
│   ├── Includes: why hypotheses were chosen/rejected
│   └── Includes: what the Guardian/Auditor found and what it means
│
├── builder-log.md
│   ├── APPENDED (newest entry at top) by Builder
│   ├── Iteration results + what worked/failed + research insights
│   ├── Includes: how score changed between iterations and WHY
│   └── Includes: what research revealed that changed understanding
│
├── weaver-log.md
│   ├── APPENDED (newest entry at top) by Weaver
│   ├── Threading edge cases + surprises + file difficulties
│   ├── Includes: which files were harder than expected and why
│   └── Includes: web density observations (consumer counts, etc.)
│
└── decisions.md
    ├── APPENDED (newest entry at top) by Lead
    ├── Formal decision records for significant choices
    ├── Format: Context → Alternatives → Choice → Rationale → Expected consequence
    └── Includes: hypothesis ordering, research priorities, skip decisions
```

### Journal Entry Format (Log Files):

```markdown
## [ISO timestamp] — [OPERATION SUMMARY]

**What:** [What happened — factual]
**Why:** [Why we did this — rationale]
**Key Insight:** [What we learned — the most important takeaway]
**Decision:** [If a decision was made — what and why]
**Result:** [What the outcome was — score, status, findings]
**Frame Update:** [How this changes our mental model — the contextual shift]
**Next:** [What comes next and why it follows from this result]
```

### Journal Entry Format (decisions.md):

```markdown
## [ISO timestamp] — DEC-[NNN]: [Decision Title]

**Context:** [What situation required a decision]
**Alternatives:**
1. [Option A] — [pros/cons]
2. [Option B] — [pros/cons]
3. [Option C] — [pros/cons]

**Choice:** [Which option was chosen]
**Rationale:** [Why this option over the others — specific reasoning]
**Expected Consequence:** [What we expect to happen as a result]
**Actual Consequence:** [Filled in LATER when the consequence is known]
```

### Who Writes What:

```
┌────────────────────┬──────────────────────────────────────────────────────┐
│ Agent              │ Writes To                                            │
├────────────────────┼──────────────────────────────────────────────────────┤
│ Lead               │ CURRENT-STATE.md (overwrite after each operation)   │
│                    │ lead-log.md (append: gates, decisions, patterns)     │
│                    │ decisions.md (append: significant decision points)   │
├────────────────────┼──────────────────────────────────────────────────────┤
│ Builder            │ builder-log.md (append: iterations, insights)        │
│                    │ DOES NOT write CURRENT-STATE or decisions            │
├────────────────────┼──────────────────────────────────────────────────────┤
│ Weaver             │ weaver-log.md (append: threading, edge cases)        │
│                    │ DOES NOT write CURRENT-STATE or decisions            │
├────────────────────┼──────────────────────────────────────────────────────┤
│ Auditor            │ DOES NOT write to journal                            │
│                    │ (results captured in Lead's log when processed)     │
├────────────────────┼──────────────────────────────────────────────────────┤
│ Traverser          │ DOES NOT write to journal                            │
│                    │ (results captured in Lead's log when processed)     │
└────────────────────┴──────────────────────────────────────────────────────┘
```

### When to Write (Triggers):

```
LEAD writes CURRENT-STATE.md (overwrite):
  → After pipeline initialization (pre-execution complete)
  → After each exploration completion (Builder done + Auditor PASS)
  → After each threading completion (Weaver done + Auditor PASS)
  → After each checkpoint write
  → After any significant decision (hypothesis change, skip, priority shift)
  → Before any planned compaction (if possible)

LEAD appends to lead-log.md:
  → After each Guardian validation (pass or fail, with rationale)
  → After each Auditor result processing (what it found, what it means)
  → After each hypothesis selection (why this one, what we expect)
  → After each gate passage (what was verified, what pattern is emerging)
  → After each decision point (links to decisions.md entry)

BUILDER appends to builder-log.md:
  → After each iteration (what changed, why, score delta)
  → After each research subagent return (what was found, how it shifts understanding)
  → After completion (synthesis of what this exploration taught)

WEAVER appends to weaver-log.md:
  → After each threading operation (what was easy, what was surprising)
  → After each edge case (LOCKED files, files with many consumers, missing sections)
  → After completion (observation about web density, growing patterns)

LEAD appends to decisions.md:
  → When choosing exploration ordering
  → When choosing to skip an exploration
  → When choosing between research priorities
  → When resolving Auditor FAIL vs Guardian PASS discrepancies
  → When deciding to spawn Builder-B for parallel work
  → When any significant fork in the pipeline occurs
```

### Lifecycle:

```
CREATION:
  Lead creates _execution-journal/ folder at pipeline initialization (Step 3
  in Section 3.1). Creates all 5 files with initial entries.

DURING EXECUTION:
  Every agent writes to their log file after each operation.
  Lead overwrites CURRENT-STATE.md after each significant operation.
  Files grow throughout the phase.

AFTER PHASE COMPLETION:
  Journal can be archived (moved to _execution-journal-archive/) or deleted.
  The permanent record is in the web (inline sections, CONSUMED BY, RESEARCH-ACTIVE).
  The journal is working memory. It bridged compactions. Its job is done.
```

### Anti-Noise Guarantees:

The journal does NOT add noise to the codebase because:

1. **Dedicated folder** — `_execution-journal/` is clearly separate from explorations
2. **`_` prefix** — signals ephemeral content (convention from Next.js, Jekyll, etc.)
3. **No web references** — no inline section, no CONSUMED BY table, no BUILT ON entry
   ever points to journal files. The web does not know the journal exists.
4. **No code imports** — no source file imports from the journal folder
5. **Explicit lifecycle** — created at phase start, deleted at phase end
6. **5 files only** — no proliferation. Fixed structure. Predictable.
7. **Append-only logs** — no editing existing entries. Only adding new ones.

---

# PART III: THE PIPELINE IN MOTION

## 3.1 Full Execution Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                    COMPLETE EXECUTION FLOW (3-AGENT MODEL)                  │
│                                                                             │
│  ═══════════════════════════════════════════════════════════════════════════ │
│  PHASE: PRE-EXECUTION                                                       │
│  ═══════════════════════════════════════════════════════════════════════════ │
│                                                                             │
│  1. Lead deploys Traverser subagent (Task tool, read-only):                │
│     "Absorb DD-001, DD-003, DD-006, R1-***, SOUL, TOKENS"                  │
│     └─→ Traverser reads absorptively, returns ACCUMULATED IDENTITY v0      │
│                                                                             │
│  2. Lead runs Guardian validation on identity v0:                           │
│     └─→ CHECK 1: Constraints registered? ✓                                 │
│     └─→ CHECK 2: Research debt tracked? ✓                                  │
│     └─→ CHECK 3: Soul alignment captured? ✓                                │
│                                                                             │
│  3. Lead writes initial checkpoint: OD-CHECKPOINT.md                        │
│                                                                             │
│  3.5 Lead creates _execution-journal/ folder:                               │
│      └─→ Writes CURRENT-STATE.md (initial mental model + first hypothesis) │
│      └─→ Writes lead-log.md (initialization entry)                         │
│      └─→ Writes decisions.md (DEC-001: exploration ordering + rationale)   │
│      └─→ Creates empty builder-log.md and weaver-log.md                    │
│                                                                             │
│  4. Lead creates tasks in TaskList for first exploration                    │
│                                                                             │
│  ═══════════════════════════════════════════════════════════════════════════ │
│  PHASE: EXPLORATION LOOP (for each OD-001 through OD-006)                  │
│  ═══════════════════════════════════════════════════════════════════════════ │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ ITERATION LOOP (within single exploration)                          │   │
│  │                                                                     │   │
│  │ 5. Lead creates task → assigns to Builder:                          │   │
│  │    "Build OD-[N] with accumulated identity v[X]"                    │   │
│  │    Lead sends message to Builder with full accumulated identity     │   │
│  │                                                                     │   │
│  │ 6. Builder works autonomously:                                      │   │
│  │    └─→ Builds exploration using accumulated identity                │   │
│  │    └─→ Scores: [score]/40                                           │   │
│  │    └─→ Identifies weakness (if any)                                 │   │
│  │                                                                     │   │
│  │ 7. IF weakness identified AND score < 34.5:                         │   │
│  │    └─→ Builder deploys Research subagent(s) (Task tool)             │   │
│  │        └─→ Context-rich prompt with accumulated identity            │   │
│  │        └─→ Can deploy MULTIPLE in parallel for different weaknesses │   │
│  │    └─→ Research subagent(s) return EXTERNAL-[V/E/G]-###            │   │
│  │    └─→ Builder integrates findings into accumulated identity        │   │
│  │    └─→ Builder builds next iteration with enriched context          │   │
│  │    └─→ [Return to step 6 scoring]                                   │   │
│  │                                                                     │   │
│  │ 8. LOOP until score ≥ 34.5 or max iterations reached               │   │
│  │                                                                     │   │
│  │ 8.5 Builder appends to _execution-journal/builder-log.md:           │   │
│  │     └─→ Iteration history + key insights + research findings        │   │
│  │     └─→ How understanding changed through this exploration          │   │
│  │     └─→ What this exploration TAUGHT (not just what it scored)      │   │
│  │                                                                     │   │
│  │ 9. Builder messages Lead:                                           │   │
│  │    "OD-[N] complete. Score: [X]/40.                                  │   │
│  │     External findings: [list].                                      │   │
│  │     Research debt: [list].                                           │   │
│  │     File: [path]."                                                  │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  10. Lead runs Guardian validation on OD-[N]:                               │
│      └─→ CHECK 1: Provenance? ✓/✗                                          │
│      └─→ CHECK 2: Constraints? ✓/✗                                         │
│      └─→ CHECK 3: Research debt? ✓/✗                                       │
│      └─→ CHECK 4: Threading ready? ✓/✗                                     │
│      └─→ IF FAIL: Lead messages Builder with specific fix request           │
│      └─→ IF PASS: Continue to Auditor                                       │
│                                                                             │
│  10.5 Lead deploys Auditor subagent (BUILD AUDIT — fresh context):          │
│       └─→ Auditor reads ACTUAL output file with zero prior context          │
│       └─→ Checks: CSS constraints, soul pieces, structure, noise            │
│       └─→ Returns: PASS with evidence / FAIL with file:line issues          │
│       └─→ IF FAIL: Lead messages Builder → fix → re-deploy Auditor          │
│       └─→ IF PASS: Continue to Weaver                                       │
│                                                                             │
│  11. Lead creates task → assigns to Weaver:                                 │
│      "Thread OD-[N] into web"                                               │
│      Lead sends message to Weaver with exploration details                  │
│                                                                             │
│  12. Weaver works autonomously:                                             │
│      └─→ Creates inline section (Tier B, 10 sections)                       │
│      └─→ Updates source files' CONSUMED BY tables                           │
│      └─→ Updates RESEARCH-ACTIVE.md                                         │
│      └─→ Notes T1 LOCKED files in report                                    │
│      └─→ Verifies bidirectional threading                                   │
│      └─→ Appends to _execution-journal/weaver-log.md                        │
│          (edge cases, surprises, web density observations)                  │
│                                                                             │
│  13. Weaver messages Lead:                                                  │
│      "Threading complete for OD-[N]. [status details]"                      │
│                                                                             │
│  14. Lead runs Guardian validation on threading:                            │
│      └─→ CHECK: All sources updated? ✓/✗                                   │
│      └─→ CHECK: RESEARCH-ACTIVE.md updated? ✓/✗                            │
│      └─→ CHECK: Threading checklist complete? ✓/✗                           │
│      └─→ IF FAIL: Lead messages Weaver with specific fix                    │
│                                                                             │
│  14.5 Lead deploys Auditor subagent (THREAD AUDIT — fresh context):         │
│       └─→ Auditor reads ACTUAL source files with zero prior context         │
│       └─→ Checks: CONSUMED BY entries exist, inline section complete,       │
│           RESEARCH-ACTIVE.md entries exist, no broken paths, no noise       │
│       └─→ Returns: PASS with file:line evidence / FAIL with specifics       │
│       └─→ IF FAIL: Lead messages Weaver → fix → re-deploy Auditor          │
│       └─→ IF PASS: Continue to checkpoint                                   │
│                                                                             │
│  15. Lead writes checkpoint: OD-CHECKPOINT.md updated                       │
│                                                                             │
│  15.5 Lead updates execution journal:                                       │
│       └─→ Overwrites CURRENT-STATE.md (current mental model + next steps)  │
│       └─→ Appends to lead-log.md (gate results, pattern observations)      │
│       └─→ Appends to decisions.md if significant fork occurred             │
│                                                                             │
│  16. Lead deploys Traverser subagent:                                       │
│      "Absorb all files including OD-[N]"                                    │
│      └─→ Returns ACCUMULATED IDENTITY v[X+1]                               │
│      └─→ Identity now RICHER — includes OD-[N] findings                    │
│                                                                             │
│  17. [LOOP: Next exploration OD-[N+1] — return to step 5]                  │
│                                                                             │
│  ═══════════════════════════════════════════════════════════════════════════ │
│  PHASE: SYNTHESIS                                                           │
│  ═══════════════════════════════════════════════════════════════════════════ │
│                                                                             │
│  18. Lead deploys Traverser subagent:                                       │
│      "Absorb ALL OD inline sections"                                        │
│      └─→ Returns full OD accumulated identity                              │
│                                                                             │
│  19. Lead assigns Builder:                                                  │
│      "Create OD-SYNTHESIS.md"                                               │
│      └─→ Builder synthesizes: score matrix, pattern catalogue, lessons      │
│                                                                             │
│  20. Lead assigns Weaver:                                                   │
│      "Create organizational-patterns.md"                                    │
│      └─→ Weaver creates Tier A inline section                               │
│      └─→ Weaver updates all OD files' CONSUMED BY                           │
│                                                                             │
│  21. Lead runs Guardian final validation:                                   │
│      All constraints honored across all explorations                        │
│                                                                             │
│  22. Lead writes final checkpoint: Ready for AD                             │
│                                                                             │
│  ═══════════════════════════════════════════════════════════════════════════ │
│  PHASE: HANDOFF TO AD                                                       │
│  ═══════════════════════════════════════════════════════════════════════════ │
│                                                                             │
│  AD's Traverser subagent will find:                                         │
│  - OD-001 through OD-006 inline sections (BUILT ON + CONSUMED BY)          │
│  - organizational-patterns.md inline section (Tier A)                       │
│  - RESEARCH-ACTIVE.md with all OD findings + external validations          │
│  - Full provenance chain back to DD phase                                   │
│                                                                             │
│  AD starts with RICHER accumulated identity than OD started with.          │
│  Knowledge COMPOUNDS.                                                       │
│                                                                             │
│  Lead writes final CURRENT-STATE.md:                                        │
│  "OD PHASE COMPLETE. 6 explorations done. AD handoff ready.                │
│   Key insight from OD phase: [overall synthesis of what was learned].       │
│   Unified theory: [the emergent understanding].                             │
│   AD should start with: [specific guidance based on OD findings].           │
│   Journal can be archived — permanent record is in the web."               │
│                                                                             │
│  Lead archives _execution-journal/ (or deletes if AD creates its own).     │
│  Lead sends shutdown requests to Builder and Weaver.                        │
│  (Or reassigns them for AD phase with fresh context.)                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 3.2 Where Parallelism Genuinely Exists

The OD pipeline is fundamentally sequential — each exploration enriches the next.
But there ARE genuine parallelism opportunities. This section identifies EVERY one
and specifies how to exploit them using Agent Teams primitives.

### Parallelism Window 1: Research Subagents Within Builder

**When:** Builder identifies multiple weaknesses in a single exploration.
**How:** Builder deploys multiple Research subagents simultaneously via parallel
Task tool calls.
**Value:** HIGH. 3 research queries that would take 3 serial minutes take 1 minute
in parallel.

```
Builder iteration 1 → Score: 28/40
  Weakness 1: Clusters too uniform (spacing)
  Weakness 2: Hierarchy too deep (cognitive load)
  Weakness 3: Soul piece #3 not visible (callout DNA)

Builder deploys in parallel:
  Task 1: Research subagent → "Optimal cluster spacing for information foraging"
  Task 2: Research subagent → "Cognitive load limits for navigation hierarchy depth"
  Task 3: Research subagent → "Callout/aside design patterns in documentation systems"

All 3 return → Builder synthesizes → Iteration 2 addresses all three weaknesses
```

This requires NO additional teammates. The Builder uses the Task tool.

### Parallelism Window 2: Weaver + Lead Overlap

**When:** Weaver is threading OD-[N] into the web while Lead pre-loads context for
OD-[N+1].
**How:** Lead deploys Traverser subagent for DD foundation files (which haven't
changed) WHILE Weaver is still finishing the CONSUMED BY updates.
**Value:** MODERATE. Saves the traversal time for foundation files. But the Traverser
subagent deployed at this point will NOT include OD-[N]'s inline section (Weaver
hasn't created it yet). A SECOND Traverser deployment is needed after Weaver
finishes to capture OD-[N]'s contribution.

```
TIMELINE:
────────────────────────────────────────────────────────────────
Lead:    [validates OD-002] → [deploys Traverser for DD files] → [waits for Weaver]
                                                                        ↓
                                                              [deploys Traverser again
                                                               now including OD-002]
                                                                        ↓
                                                              [sends to Builder for OD-003]
Weaver:  [threads OD-002] ─────────────────────────────────→ [reports complete]
Builder: [idle — waiting for next assignment]
────────────────────────────────────────────────────────────────

NET SAVINGS: Foundation traversal time (maybe 30-60 seconds)
COST: Extra Traverser subagent deployment (tokens)
VERDICT: Worth it when foundation file set is large (>6 files)
```

### Parallelism Window 3: Independent Exploration Pairs (OPTIONAL SECOND BUILDER)

**When:** Two explorations test independent hypotheses that don't depend on each
other's findings — only on shared DD foundation.
**How:** Lead spawns a second Builder teammate (Builder-B). Both Builders work on
different explorations simultaneously.
**Value:** HIGH when applicable. Two explorations built in the time of one.

**CRITICAL CONSTRAINT:** This ONLY works for genuinely independent explorations.
If OD-003's task-based layout depends on OD-002's progressive disclosure findings,
they CANNOT be parallelized.

**The Lead determines independence by checking:** Does exploration OD-[X]'s hypothesis
require knowledge from OD-[Y]'s findings? If NO for both directions → independent.

```
INDEPENDENCE CHECK:
OD-001 (Conversational) ←→ OD-002 (Progressive Disclosure)
  Does OD-001 need OD-002's findings? → Check hypothesis
  Does OD-002 need OD-001's findings? → Check hypothesis
  IF both NO → INDEPENDENT → Can parallelize

PARALLEL EXECUTION:
────────────────────────────────────────────────────────────────
Lead:      [traverses DD foundation] → [sends identity to both Builders]
Builder-A: [builds OD-001] ──────────────────→ [reports: 35/40]
Builder-B: [builds OD-002] ──────────────────→ [reports: 34/40]
Lead:      [validates both] → [assigns Weaver: thread both]
Weaver:    [threads OD-001] → [threads OD-002]
Lead:      [re-traverses with both new nodes] → [OD-003 has BOTH]
────────────────────────────────────────────────────────────────

TEAM SIZE: Temporarily 4 (Lead + Builder-A + Builder-B + Weaver)
NET SAVINGS: One full exploration build cycle
COST: Extra Builder teammate tokens
VERDICT: Use when exploration pairs are genuinely independent
```

**After parallel build completes:** The sequential pipeline resumes. OD-003 benefits
from BOTH OD-001 AND OD-002's accumulated identity (compounding from two sources).

### Parallelism Window 4: Perceptual Deepening — Visual Auditing

**When:** Builder invokes the Perceptual Deepening skill (`/soul-audit`, `/zones`)
on a completed exploration. This happens EVERY TIME an exploration reaches score ≥ 34.5.
It is NOT optional. It is NOT a one-off. It happens for EVERY exploration.

**How:** Builder deploys 5 perceptual zone sub-agents in parallel, following the
Perceptual Deepening skill protocol (see `~/.claude/skills/perceptual-deepening/`):

  - **ZONE-TYPOGRAPHY:** Font feel, letter endings, stroke contrast, hierarchy,
    rhythm. Does Archivist Serif (SP#2) FEEL different from body text? Not
    "is it Cormorant Garamond?" but "does it carry the archival voice?"

  - **ZONE-SPACING:** Whitespace generosity, content-to-chrome ratio. Do clusters
    FEEL like islands (sparse surround)? Is the PULSE rhythm perceptible?

  - **ZONE-CONTAINERS:** Borders — trapped vs floating. Do callouts FEEL like
    family (SP#3)? Are edges SHARP (SP#1)? Does depth come from edges, not
    shadows (SP#4)?

  - **ZONE-HIERARCHY:** What dominates, what recedes, visual order. Is the
    fractal self-similarity visible at page/section/component scales?

  - **ZONE-COMPOSITION:** Tension, opposition, energy. Does the whole page
    FEEL like KortAI — precise, archival, intentional? Or generic?

**Value:** HIGH. 5 visual analysis lenses that would take 5 serial passes take 1
pass in parallel. Combined with the structural score, this gives the Builder
a PERCEPTUAL score alongside the structural score.

```
Builder → OD-003 iteration 2 complete → Structural Score: 35/40
Builder takes screenshot (Playwright MCP)
Builder deploys in parallel (Task tool — /zones invocation):
  Task 1: ZONE-TYPOGRAPHY → "Examine OD-003 screenshot. Focus on typography FEEL."
  Task 2: ZONE-SPACING   → "Examine OD-003 screenshot. Focus on spacing FEEL."
  Task 3: ZONE-CONTAINERS→ "Examine OD-003 screenshot. Focus on containers FEEL."
  Task 4: ZONE-HIERARCHY → "Examine OD-003 screenshot. Focus on hierarchy FEEL."
  Task 5: ZONE-COMPOSITION→ "Examine OD-003 screenshot. Focus on overall composition."

All 5 return → Builder synthesizes:
  - Soul pieces manifest? SP#1 ✓ SP#2 ✓ SP#3 ✓ SP#4 ✓ SP#5 ✓
  - Squint test: "Feels sharp, archival, precise — matches soul" ✓
  - Any perceptual issues? "Hierarchy zone reports header dominance is too strong"
  → If issue found: Builder makes ONE targeted change, re-screenshots, re-audits
  → If clean: Builder reports to Lead with visual audit results included
```

**The Perceptual Deepening skill provides the full protocol:**
- `/soul [component]` — Full 5+ iteration deepening loop (use when something feels wrong)
- `/soul-audit [component]` — Post-build verification against soul pieces (use after every build)
- `/squint [ref] [attempt]` — Quick comparison between reference and attempt (use between iterations)
- `/zones [component]` — Parallel 5-zone analysis (use for the final comprehensive check)

**How often the Builder visually audits:**

```
EVERY ITERATION (quick):
  Builder takes screenshot → squint test → "Does this feel right?"
  If something feels wrong → identify which zone → deploy zone sub-agent for that zone
  This takes seconds. It's a HABIT, not a ceremony.

AFTER FINAL ITERATION (thorough):
  Builder invokes /soul-audit → full 5-zone parallel deployment
  Each zone reports perceptual observations, not CSS measurements
  Builder synthesizes → all soul pieces perceptually confirmed
  This takes 1-2 minutes. It's MANDATORY before reporting completion.

WHEN SOMETHING FEELS OFF (deep):
  Builder invokes /soul → full perceptual deepening loop
  Minimum 5 iterations of visual discovery
  One change per iteration, screenshot after each
  Captures soul discoveries in perceptual terms
  This takes 5-10 minutes. Used when quick checks aren't enough.
```

This requires NO additional teammates. The Builder uses the Task tool for zone
sub-agents. The Perceptual Deepening skill orchestrates the visual audit.

### Parallelism Window 5: Auditor During Pre-Load

**When:** Lead deploys Auditor (Thread Audit) for OD-[N] while simultaneously
deploying Traverser subagent to pre-load DD foundation files for OD-[N+1].
**How:** Both are subagent calls (Task tool). Both can run in parallel.
**Value:** MODERATE. Saves the Auditor's verification time from the critical path.

```
TIMELINE:
────────────────────────────────────────────────────────────────
Lead:    [Guardian check ✓] → deploys Auditor + Traverser IN PARALLEL
Auditor:    [verifies threading] ──────→ [returns PASS]
Traverser:  [absorbs DD files] ────────→ [returns identity]
Lead:    [both return] → writes checkpoint → proceeds
────────────────────────────────────────────────────────────────
```

**Note:** The Traverser at this point only absorbs FOUNDATION files (DD-*).
It cannot absorb OD-[N]'s inline section because the Auditor hasn't confirmed
the Weaver's work yet. A second Traverser deployment after Auditor PASS absorbs
the complete web.

### Parallelism Summary:

```
┌────────────────────────────────┬──────────────┬─────────────────────────┐
│ Parallelism Window             │ Uses         │ Value                   │
├────────────────────────────────┼──────────────┼─────────────────────────┤
│ 1. Research subagents          │ Task tool    │ HIGH — always available │
│    (Builder deploys multiple)  │ (parallel)   │ No extra teammates      │
├────────────────────────────────┼──────────────┼─────────────────────────┤
│ 2. Weaver + Lead overlap       │ Async work   │ MODERATE — small window │
│    (threading while pre-load)  │              │ Saves traversal time    │
├────────────────────────────────┼──────────────┼─────────────────────────┤
│ 3. Independent exploration     │ 2nd Builder  │ HIGH — when applicable  │
│    pairs (optional Builder-B)  │ teammate     │ Saves full build cycle  │
├────────────────────────────────┼──────────────┼─────────────────────────┤
│ 4. Perceptual deepening        │ Task tool    │ HIGH — always available │
│    (5 lens subagents)          │ (parallel)   │ No extra teammates      │
├────────────────────────────────┼──────────────┼─────────────────────────┤
│ 5. Auditor + Traverser overlap │ Task tool    │ MODERATE — saves audit  │
│    (verify while pre-loading)  │ (parallel)   │ time from critical path │
└────────────────────────────────┴──────────────┴─────────────────────────┘
```

**Journal writes and parallelism:** Journal writes (builder-log, weaver-log,
lead-log, CURRENT-STATE) do NOT create contention or dependencies. Each agent
writes to its OWN log file (no shared writes). CURRENT-STATE.md is overwritten
only by the Lead, and only after other agents have reported. Journal writes can
happen in parallel with any other operation without coordination.

## 3.3 The Refinement Loop Visualized

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                THE COMPOUNDING PIPELINE WITH FEEDBACK                       │
│                                                                             │
│               ┌───────────────────┐                                        │
│               │ TRAVERSE          │                                        │
│               │ (Lead deploys     │                                        │
│               │ Traverser subagent│                                        │
│               │ to absorb inline  │                                        │
│               │ sections)         │                                        │
│               └─────────┬─────────┘                                        │
│                         │                                                   │
│                         ▼                                                   │
│  ┌──────────────────────────────────────────────────────────────────┐      │
│  │ ACCUMULATED IDENTITY (held by Lead, transferred to teammates)    │      │
│  │ ┌────────────────────────────────────────────────────────────┐   │      │
│  │ │ What I know (findings, constraints, patterns)              │   │      │
│  │ │ What I must honor (MUST HONOR from sources)                │   │      │
│  │ │ What I don't know (research debt)                          │   │      │
│  │ │ What validates my knowledge (external findings)            │   │      │
│  │ └────────────────────────────────────────────────────────────┘   │      │
│  └──────────────────────────────────────────────────────────────────┘      │
│                         │                                                   │
│              ┌──────────┼──────────┐                                       │
│              │          │          │                                        │
│              ▼          ▼          ▼                                        │
│  ┌────────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐                     │
│  │ BUILD      │ │ RESEARCH │ │ VALIDATE │ │ AUDIT    │                     │
│  │ (Builder   │ │ (Builder │ │ (Lead    │ │ (Fresh   │                     │
│  │ teammate   │ │ deploys  │ │ runs     │ │ subagent │                     │
│  │ creates    │ │ Research │ │ Guardian │ │ checks   │                     │
│  │ with       │ │ subagents│ │ loop)    │ │ REALITY) │                     │
│  │ identity)  │ │          │ │          │ │          │                     │
│  └─────┬──────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘                     │
│         │              │              │                                     │
│         │              │              │                                     │
│         └──────┬───────┴──────┬───────┘                                    │
│                │              │                                             │
│                ▼              ▼                                             │
│  ┌────────────────┐ ┌────────────────┐                                    │
│  │ NEW OUTPUT     │ │ EXTERNAL       │                                    │
│  │ (Exploration   │ │ FINDING        │                                    │
│  │ from Builder)  │ │ (From Research │                                    │
│  │                │ │ subagent)      │                                    │
│  └────────┬───────┘ └────────┬───────┘                                    │
│           │                  │                                              │
│           └──────┬───────────┘                                             │
│                  │                                                          │
│                  ▼                                                          │
│  ┌────────────────────┐                                                    │
│  │ THREAD             │                                                    │
│  │ (Weaver teammate   │                                                    │
│  │ creates/edits      │                                                    │
│  │ inline sections,   │                                                    │
│  │ updates CONSUMED   │                                                    │
│  │ BY, updates        │                                                    │
│  │ RESEARCH-ACTIVE)   │                                                    │
│  └────────┬───────────┘                                                    │
│           │                                                                 │
│           ▼                                                                 │
│  ┌────────────────────┐ ┌────────────────────┐                             │
│  │ WEB GROWS          │ │ JOURNAL            │                             │
│  │ (New nodes         │ │ (All agents write  │                             │
│  │ threaded,          │ │ to their log files,│                             │
│  │ sources updated,   │ │ Lead overwrites    │                             │
│  │ bidirectional      │ │ CURRENT-STATE.md   │                             │
│  │ links complete)    │ │ with mental model) │                             │
│  └────────┬───────────┘ └────────────────────┘                             │
│           │                                                                 │
│    ┌──────┴──────────────────┐                                             │
│    │                         │                                              │
│    ▼                         │                                              │
│  ┌────────────────────┐      │                                             │
│  │ TRAVERSE           │◄─────┘                                             │
│  │ (Lead deploys      │         THE LOOP CONTINUES                         │
│  │ Traverser subagent │         Knowledge compounds                        │
│  │ to re-absorb       │         Identity deepens                           │
│  │ enriched web)      │         Research validates                         │
│  └────────────────────┘         Web strengthens                            │
│                                 Journal preserves WHY across compactions   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Each cycle:**
1. The web has more nodes than before
2. The accumulated identity is richer than before
3. The constraints are more validated than before
4. The research debt is smaller than before
5. The next exploration starts with MORE context

**The pipeline grows a mesh.** The execution is linear. The knowledge structure is not.

---

---

# PART IV: CRITICAL INTEGRATION POINTS

## 4.1 Inline Section Update Triggers

**Every significant action triggers inline section updates.** The Weaver handles ALL
of these. The Lead coordinates by assigning Weaver tasks at the right moments.

| Trigger | What Gets Updated | Who Does It |
|---------|-------------------|-------------|
| New exploration created | Create new inline section (Tier B) | Weaver |
| Exploration consumes source | Source's CONSUMED BY table | Weaver |
| External finding integrated | RESEARCH-ACTIVE.md + source BUILT ON | Weaver (on Lead's instruction) |
| New finding discovered | RESEARCH-ACTIVE.md entry | Weaver |
| Score improves from iteration | Update exploration's inline PURPOSE | Weaver (after final iteration) |
| Research debt identified | Source's RESEARCH DEBT section | Weaver |
| Constraint violated (fixed) | Note in relevant inline's MUST HONOR | Weaver (on Lead's instruction) |
| Pattern validated | organizational-patterns.md + source CONSUMED BY | Weaver |

**Key difference from v3.0:** In v3.0, multiple agents could trigger updates. In v4.0,
ALL update triggers flow through the Weaver. The Builder and Lead report what needs
updating; the Weaver does the actual file editing. This prevents concurrent write
conflicts and keeps threading responsibility in one place.

## 4.2 Auditor Subagent Deployment Triggers

**The Lead deploys Auditor subagents at these points — NO EXCEPTIONS:**

| Trigger | Audit Type | What Auditor Checks |
|---------|------------|---------------------|
| Builder reports exploration complete | BUILD AUDIT | CSS constraints, soul pieces, structure, noise |
| Weaver reports threading complete | THREAD AUDIT | CONSUMED BY entries, inline section, RESEARCH-ACTIVE |
| Builder-B reports complete (parallel) | BUILD AUDIT | Same as Builder, independent instance |
| Weaver reports synthesis threading done | THREAD AUDIT | Tier A section, all OD CONSUMED BY entries |
| Before AD handoff (final gate) | COMPREHENSIVE AUDIT | All 6 explorations + all threading + full web integrity |

**The Auditor is NOT optional.** It is a BLOCKING gate. The pipeline does not advance
until the Auditor returns PASS. If the Auditor returns FAIL, the responsible teammate
fixes the issue, and the Lead deploys a NEW Auditor instance (fresh eyes again).

**The comprehensive audit before AD handoff** is the most thorough: a single Auditor
subagent reads ALL 6 exploration files, ALL source CONSUMED BY tables, the complete
RESEARCH-ACTIVE.md, and the organizational-patterns.md. This is the final quality gate
before the knowledge compounds into the next phase.

## 4.3 Research Subagent Deployment Triggers (Builder's Decision)

**When to deploy Research subagents with accumulated context.** The Builder makes these
decisions during its iteration loop. The Lead does NOT mediate research deployment.

| Trigger | Subagent Type | Priority |
|---------|---------------|----------|
| Research debt marked "small sample" | VALIDATION (EXTERNAL-V-###) | HIGH |
| Constraint has low confidence | VALIDATION (EXTERNAL-V-###) | HIGH |
| Iteration score stuck < 34.5 | GAP-FILL (EXTERNAL-G-###) | HIGH |
| Finding has no external support | VALIDATION (EXTERNAL-V-###) | MEDIUM |
| New hypothesis needs grounding | EXTENSION (EXTERNAL-E-###) | MEDIUM |
| Question forwards to future phase | GAP-FILL (mark for later, don't deploy) | LOW |

**The Builder's decision process:**

```
After iteration scoring:
  IF score < 34.5 AND weakness identified:
    1. Can I fix this with existing accumulated identity?
       → YES: Iterate without research
       → NO: Continue to 2

    2. Is this weakness addressable by external research?
       → YES: Deploy Research subagent with context-rich prompt
       → NO: Flag to Lead as structural issue

    3. Are there MULTIPLE independent weaknesses?
       → YES: Deploy multiple Research subagents IN PARALLEL
       → NO: Deploy single Research subagent

  IF score ≥ 34.5:
    → Report completion to Lead (no research needed)
```

## 4.4 Threading Verification Points

**The Lead runs Guardian checks at each gate. These are the specific verification
checklists.**

```
GATE 1: Before exploration build
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Lead runs after Traverser subagent returns accumulated identity.

□ Accumulated identity loaded and structured?
  → Traverser returned valid output with all 7 fields?
□ All MUST HONOR constraints registered in Lead's constraint registry?
  → Every constraint from every source file captured?
□ Research debt acknowledged and categorized?
  → HIGH/MEDIUM/LOW priorities assigned?
  → Validation candidates identified for Builder?

FAIL → Re-deploy Traverser subagent with corrected file list.
       Or: Lead manually supplements missing context.

GATE 2: After exploration build (Guardian — report-based)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Lead runs after Builder reports completion.

□ Exploration honors all MUST HONOR constraints?
  → Lead checks Builder's report against constraint registry
□ Soul pieces visible in output?
  → Builder's report describes soul manifestation
□ Score meets quality bar (≥ 34.5/40)?
  → If not, Lead decides: more iterations or structural change
□ Research findings properly integrated?
  → EXTERNAL-V/E/G IDs assigned? Integration paths specified?
□ Research debt for this exploration identified?
  → New unknowns documented? Phase forwarding specified?

FAIL → Lead messages Builder: "Re-iterate with [specific fix]."
       Builder receives message, resumes work.

GATE 2.5: Build Audit (Auditor — file-based AND visual, fresh eyes)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Lead deploys Auditor subagent after Guardian PASS.

STRUCTURAL CHECKS:
□ CSS constraints ACTUALLY honored in the HTML file?
  → Auditor reads actual CSS, checks every border-radius, box-shadow
□ File in correct location?
  → Auditor checks directory listing

VISUAL CHECKS (Perceptual Deepening — /squint protocol):
□ Auditor takes SCREENSHOT of the exploration (Playwright MCP)
□ Auditor performs SQUINT TEST with fresh eyes:
  → "Does this FEEL sharp, archival, precise — like KortAI?"
  → OR: "This feels soft/generic/rounded/shadowy — perceptual violation"
□ Soul pieces ACTUALLY visible in the output — PERCEPTUALLY?
  → SP#1: Do edges FEEL sharp? (not just: is border-radius 0?)
  → SP#2: Does wisdom text FEEL different? (not just: is it serif?)
  → SP#3: Do callouts FEEL like family? (not just: do they have zones?)
  → SP#4: Does depth come from EDGES? (not just: is box-shadow none?)
  → SP#5: Do markers FEEL square? (not just: is list-style square?)
□ No noise created?
  → Auditor checks for extraneous files, broken references
□ Structure ACTUALLY self-similar?
  → Auditor inspects page/section/component patterns

FAIL → Lead messages Builder with Auditor's specific file:line findings.
       Builder fixes. Lead deploys NEW Auditor instance (fresh eyes).
PASS → Lead proceeds to Weaver assignment.

GATE 3: After inline section creation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Lead runs after Weaver reports threading complete.

□ OD-[N] has complete inline section (all 10 sections)?
  → BUILT ON table lists all sources?
  → MUST HONOR inherits from sources?
  → CONSUMED BY initialized?
□ All source CONSUMED BY tables updated?
  → Each source in BUILT ON has matching CONSUMED BY entry?
  → T1 LOCKED sources noted in checkpoint?
□ RESEARCH-ACTIVE.md updated?
  → New findings have entries?
  → External findings have entries?
  → Confidence impacts noted?

FAIL → Lead messages Weaver: "Threading incomplete. Fix [specific]."
       Weaver receives message, completes missing updates.

GATE 3.5: Thread Audit (Auditor — file-based, fresh eyes)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Lead deploys Auditor subagent after Guardian PASS on threading.

□ CONSUMED BY entries ACTUALLY exist in source files?
  → Auditor reads each source file, finds Section 8, checks entries
□ Inline section ACTUALLY complete (all 10 sections)?
  → Auditor reads the file, checks each section exists and is non-empty
□ RESEARCH-ACTIVE.md ACTUALLY has the new entries?
  → Auditor reads the file, searches for specific entry IDs
□ No duplicate entries anywhere?
  → Auditor checks for repeated lines in tables
□ No broken file paths in any table?
  → Auditor verifies each referenced path exists

FAIL → Lead messages Weaver with Auditor's specific file:line findings.
       Weaver fixes. Lead deploys NEW Auditor instance (fresh eyes).
PASS → Lead proceeds to checkpoint.

GATE 4: Before handoff to next exploration
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Lead runs after all Gate 3/3.5 issues resolved.

□ All source CONSUMED BY tables updated (confirmed by Auditor)?
□ RESEARCH-ACTIVE.md fully updated (confirmed by Auditor)?
□ Threading checklist ALL COMPLETE?
□ Checkpoint written with current state (includes Auditor results)?
□ Journal updated: CURRENT-STATE.md reflects current mental model?
□ Journal updated: lead-log.md has gate results + emerging patterns?
□ Journal updated: decisions.md has any significant decisions from this cycle?
□ Builder-log and weaver-log updated by their respective agents?
□ Accumulated identity ready for re-traversal?

FAIL → Lead identifies and resolves remaining items before proceeding.
       Does NOT start next exploration with incomplete threading.
       Does NOT proceed without updating CURRENT-STATE.md.

GATE 5: Before handoff to AD phase
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Lead runs after ALL explorations complete and synthesized.

□ All 6 explorations have Tier B inline sections?
□ All explorations score ≥ 34.5/40?
□ organizational-patterns.md has Tier A inline section?
□ OD-SYNTHESIS.md captures all lessons?
□ All findings logged to RESEARCH-ACTIVE.md?
□ All research debt forwarded to appropriate phases?
□ Full provenance chain back to DD phase intact?
□ Checkpoint ready for AD phase handoff?
□ Accumulated identity comprehensive and recoverable?
□ Journal CURRENT-STATE.md has final OD synthesis (mental model, unified theory)?
□ Journal ready for archival (or handoff to AD's new journal)?

FAIL → Lead identifies remaining work, assigns to Builder or Weaver.
       Does NOT hand off to AD with incomplete web.

GATE 5.5: COMPREHENSIVE AUDIT (Auditor — full system verification, fresh eyes)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Lead deploys Auditor subagent for FINAL verification of EVERYTHING.
This is the most thorough audit — fresh eyes on the entire OD output.

□ All 6 exploration files exist and have complete 10-section inline headers?
□ Spot-check CSS constraints in each exploration (border-radius, box-shadow)?
□ All source CONSUMED BY tables list their OD consumers?
□ organizational-patterns.md has complete Tier A inline section?
□ RESEARCH-ACTIVE.md has entries for ALL findings + ALL external?
□ No broken file paths across the entire web?
□ No duplicate entries across the entire web?
□ No noise — no extraneous files created during the phase?
□ All explorations in correct directories?

FAIL → Lead identifies remaining work, assigns to Builder or Weaver.
       After fixes, Lead deploys NEW Auditor instance (fresh eyes).
       Does NOT hand off to AD until Auditor returns PASS.
PASS → AD handoff approved. Lead proceeds.
```

---

# PART V: FAILURE MODES AND RECOVERY

## 5.1 Common Failure Modes

| Failure | Detection | Recovery | Who Acts |
|---------|-----------|----------|----------|
| Traverser subagent skips inline section | Lead: constraint missing from identity | Lead re-deploys Traverser with explicit file list | Lead |
| Builder ignores constraint | Lead (Guardian check): "Output violates MUST HONOR" | Lead messages Builder: "Re-iterate honoring [constraint]" | Lead → Builder |
| Builder deploys generic research prompt | Research results can't integrate (no IDs, no paths) | Builder re-deploys with context-rich prompt (see Section 2.7) | Builder |
| Weaver forgets CONSUMED BY update | Lead (Guardian check): "Threading incomplete" | Lead messages Weaver: "Complete bidirectional update for [file]" | Lead → Weaver |
| Checkpoint stale after compaction | Lead: state mismatch when resuming | Follow recovery protocol (see 5.2) | Lead |
| Builder score stuck below quality bar | Builder reports after max iterations | Lead evaluates: adjust hypothesis, skip exploration, or research differently | Lead |
| Weaver can't access T1 LOCKED file | Weaver reports: "LOCKED file, noted in checkpoint" | Lead notes in checkpoint, defers to T1 maintainer | Lead |
| Builder goes idle mid-exploration | Lead notices no completion message | Lead sends message to Builder checking status | Lead |
| Weaver goes idle mid-threading | Lead notices no completion message | Lead sends message to Weaver checking status | Lead |
| Auditor finds constraint violation Builder missed | Auditor FAIL on Build Audit | Lead messages Builder with file:line evidence, Builder fixes, Lead deploys NEW Auditor | Lead → Builder |
| Auditor finds missing CONSUMED BY entry Weaver missed | Auditor FAIL on Thread Audit | Lead messages Weaver with file:line evidence, Weaver fixes, Lead deploys NEW Auditor | Lead → Weaver |
| Auditor finds noise (extraneous files created) | Auditor FAIL on noise check | Lead investigates, removes extraneous files, re-deploys Auditor | Lead |
| Guardian passes but Auditor fails (discrepancy) | Different results on same output | Auditor is authoritative (reads files, not reports). Lead trusts Auditor. | Lead |
| Auditor subagent returns incomplete results | Missing checks in Auditor output | Lead deploys new Auditor with more explicit prompt | Lead |
| CURRENT-STATE.md not updated after operation | Lead forgets journal write | Auditor or teammate notices stale state | Lead writes immediately — every checkpoint MUST have journal update |
| Builder/Weaver forgets log entry | Log file doesn't reflect recent work | Lead notices gap when reviewing after compaction | Lead messages agent: "Update your log for [operation]" |
| decisions.md missing for significant fork | Decision not recorded | Lead or Auditor notices undocumented decision | Lead writes retroactive decision record immediately |
| Journal grows too large (>500 lines per log) | Log files slow to read | Lead archives older entries to `_execution-journal/archive/` | Lead |
| Context compacts without CURRENT-STATE.md update | Mental model lost | This is the WORST failure — Lead reads stale CURRENT-STATE.md | Prevention: Lead updates CURRENT-STATE.md BEFORE any planned break |

## 5.2 Compaction Recovery Protocol

Agent Teams teammates can lose context due to compaction. The checkpoint system
AND the execution journal enable recovery.

```
IF any agent's context compacted:

═══════════════════════════════════════════════════════════════
PHASE 1: CONTEXTUAL RECOVERY (read journal — restore mental model)
═══════════════════════════════════════════════════════════════

1. Lead reads _execution-journal/CURRENT-STATE.md
   → Gets: WHERE we are, WHAT we're doing, WHY we're doing it,
            WHAT the mental model is, WHAT decisions got us here,
            WHAT comes next and WHY
   → This is the MOST IMPORTANT step. Without it, you resume
     position but not understanding.

2. Lead reads _execution-journal/lead-log.md (recent entries)
   → Gets: Pattern observations, gate results, decision rationale
   → Reconstructs: The THOUGHT PROCESS behind recent operations
   → Identifies: Emerging patterns across explorations

3. Lead reads _execution-journal/decisions.md (recent entries)
   → Gets: What alternatives were considered, why this path was chosen
   → Reconstructs: The REASONING behind the current direction

═══════════════════════════════════════════════════════════════
PHASE 2: STRUCTURAL RECOVERY (read checkpoint — restore position)
═══════════════════════════════════════════════════════════════

4. Lead reads OD-CHECKPOINT.md
   → Gets: Current state, completed explorations, threading status,
            accumulated identity snapshot

═══════════════════════════════════════════════════════════════
PHASE 3: IDENTITY RECOVERY (traverse web — restore accumulated identity)
═══════════════════════════════════════════════════════════════

5. Lead deploys Traverser subagent:
   "Absorb all files listed in checkpoint's 'Completed Explorations'"
   → Rebuilds: ACCUMULATED IDENTITY from current web state
   → This is why the web matters: identity is IN the files, not in memory

6. Lead rebuilds constraint registry from accumulated identity:
   → Every MUST HONOR from every traversed file re-registered

═══════════════════════════════════════════════════════════════
PHASE 4: RESUMPTION (combine all three layers — resume with full context)
═══════════════════════════════════════════════════════════════

7. Lead resumes from last checkpoint:
   → Current exploration at noted iteration
   → Sends accumulated identity to Builder (or re-assigns)
   → INCLUDES contextual framing from CURRENT-STATE.md in the message:
     "We are building OD-004 because OD-003 showed that spacing
      hierarchy is the organizing principle. OD-004 tests whether
      this applies vertically to hierarchical navigation."
   → This framing is what CURRENT-STATE.md provides that the
     checkpoint alone CANNOT.

8. Lead verifies threading status matches checkpoint:
   → If mismatch: assigns Weaver to complete missing updates
   → If match: continues pipeline

9. Lead verifies journal is current:
   → If CURRENT-STATE.md seems stale: Lead updates it immediately
   → If builder-log has gaps: Lead messages Builder to update
   → If decisions.md is missing recent forks: Lead writes retroactively

═══════════════════════════════════════════════════════════════
RECOVERY ORDER MATTERS:
═══════════════════════════════════════════════════════════════

  Journal FIRST (mental model) → Checkpoint SECOND (position) →
  Web THIRD (accumulated identity) → Resume FOURTH (with full context)

  NOT: Checkpoint → Web → Resume (this loses mental model)

CRITICAL: The recovery protocol works BECAUSE:
- The WEB stores identity (what was built, what it was built on)
- The CHECKPOINT stores position (what number, what score, what status)
- The JOURNAL stores understanding (why we built what we built,
  what we expect, what patterns we're seeing)
All three layers are needed for FULL recovery. Without the journal,
recovery is structural but not contextual — the team resumes
position but not understanding.
```

## 5.3 Teammate Lifecycle Management

Agent Teams teammates go idle after every turn. This is normal. The Lead manages
the lifecycle:

```
SPAWNING:
  Lead spawns Builder and Weaver at session start (or as needed).
  Both receive their role descriptions in their initial prompts.
  Both are told: "Check TaskList for assignments. Message Lead when done."

ASSIGNMENT:
  Lead creates tasks in TaskList.
  Lead sends messages to teammates with full context.
  Teammates claim tasks and work autonomously.

IDLE:
  After each turn, teammates go idle. This is expected.
  Lead does NOT treat idle as an error.
  Lead sends messages when there's new work.

OPTIONAL SECOND BUILDER:
  Lead spawns Builder-B only when independent exploration pairs identified.
  Builder-B is shut down after parallel build completes.
  Default team size: 3 (Lead + Builder + Weaver).

SHUTDOWN:
  When OD phase is complete, Lead sends shutdown requests.
  Teammates confirm shutdown.
  Lead cleans up team resources.
  (Or: Lead reassigns teammates for AD phase with fresh prompts.)
```

---

# PART VI: SUCCESS CRITERIA

## 6.1 The Pipeline is Working When:

**Every output has provenance:**
- Every exploration has BUILT ON table listing all sources consumed
- Every finding links to source explorations by ID
- Every external finding links to internal findings it validates/challenges/extends
- No orphan outputs exist anywhere in the web

**Every output updates the web:**
- Every new file triggers CONSUMED BY updates in source files
- Every finding appears in RESEARCH-ACTIVE.md with provenance
- Every pattern appears in organizational-patterns.md with source explorations
- Weaver's threading checklist passes for every exploration

**Research compounds, not just accumulates:**
- Each exploration's accumulated identity is RICHER than the previous
- External findings enrich accumulated identity (not just stored as data)
- Builder's iterations show measurable score improvement from research integration
- AD inherits richer context than OD started with (provable via traversal comparison)

**Constraints are enforced, not just documented:**
- Lead's Guardian checks BLOCK outputs that violate MUST HONOR
- Every Guardian check failure results in specific corrective action
- Research debt is tracked and addressed (or explicitly forwarded)
- Soul pieces visible in every component (auditable via Soul Documenter subagent)

**The loop never stops until the phase is done:**
- Lead continuously deploys Traverser subagents to absorb the growing web
- Builder continuously receives enriched context for each new exploration
- Builder continuously deploys Research subagents for weakness validation
- Weaver continuously threads new nodes into the web
- Checkpoint reflects current structural state after every significant operation
- Journal reflects current contextual state (mental model, rationale, patterns)

**Every output is visually audited — consistently, not just once:**
- Builder performs squint test after EVERY iteration (quick visual check)
- Builder invokes full /soul-audit (Perceptual Deepening) after FINAL iteration
- Builder deploys 5 zone sub-agents in parallel for thorough perceptual analysis
- All 5 soul pieces confirmed PERCEPTUALLY, not just structurally
- Builder's completion report includes visual audit results and zone reports
- Guardian CHECK 5 BLOCKS outputs without visual audit results
- Visual auditing is a HABIT embedded in the iteration loop, not a ceremony at the end

**Every output is independently verified with fresh eyes:**
- Every Builder output passes Build Audit (structural AND visual) before threading
- Auditor takes SCREENSHOT and performs fresh-eyes squint test (Perceptual Deepening /squint)
- Auditor checks soul pieces PERCEPTUALLY — "does this FEEL right?" not just "is the CSS correct?"
- Every Weaver output passes Thread Audit before pipeline advances
- Auditor reads ACTUAL FILES, not teammate reports
- Auditor has ZERO accumulated context — pure fresh-eyes verification
- Guardian (report-based) and Auditor (file-based + visual) provide two-layer validation
- When Guardian passes but Auditor fails, Auditor is authoritative
- Comprehensive Audit before AD handoff catches system-wide issues
- No noise tolerated — extraneous files, broken paths, duplicates all caught

**Context survives compaction:**
- CURRENT-STATE.md is ALWAYS current — Lead overwrites after every significant operation
- lead-log.md captures WHY decisions were made, not just WHAT was decided
- builder-log.md captures WHAT worked and failed during iterations, and WHY
- weaver-log.md captures edge cases and web density observations
- decisions.md records alternatives considered and rationale for choices
- Recovery reads journal FIRST (mental model) → checkpoint SECOND (position) → web THIRD (identity)
- The team can resume not just POSITION but UNDERSTANDING after compaction

**Agent Teams primitives are used efficiently:**
- 3 teammates (Lead + Builder + Weaver) — no unnecessary agents
- 3 subagent protocols (Traverser, Research, Auditor) — fresh context each time
- Embedded functions for checklists, file writes, and journal — no agent overhead
- Parallelism exploited where genuine (research, perceptual deepening, independent pairs, audit+traversal overlap)
- Sequential pipeline where compounding requires it (default behavior)

## 6.2 Final Verification Checklist

Before declaring OD complete:

```
□ All 6 explorations have Tier B inline sections
□ All explorations score ≥ 34.5/40
□ organizational-patterns.md has Tier A inline section
□ All DD files' CONSUMED BY list their OD consumers
□ All external findings integrated into RESEARCH-ACTIVE.md
□ All findings have provenance chains (no orphans)
□ OD-SYNTHESIS.md captures lessons for AD
□ Research debt forwarded to appropriate phases
□ Threading checklist complete for every file
□ Checkpoint ready for AD phase handoff
□ Accumulated identity comprehensive and recoverable
□ All T1 LOCKED pending updates documented
□ Lead's constraint registry matches web state
□ All Build Audits passed — structural AND visual (one per exploration)
□ All /soul-audit invocations completed (one per exploration, Builder)
□ All 5 zone reports (Typography, Spacing, Containers, Hierarchy, Composition)
  confirmed for every exploration
□ All squint tests passed — every exploration FEELS like KortAI
□ All Thread Audits passed (one per exploration)
□ Comprehensive Audit passed (final gate before AD handoff)
□ CURRENT-STATE.md has final OD synthesis (unified theory, lessons for AD)
□ lead-log.md complete — all gates, decisions, patterns documented
□ builder-log.md complete — all iterations, insights, research learnings
□ weaver-log.md complete — all threading operations, edge cases
□ decisions.md complete — all significant decision points with rationale
□ Journal archived or ready for AD phase handoff
□ Builder and Weaver shut down (or reassigned)
□ Team resources cleaned up
```

---

---

# APPENDIX A: INLINE SECTION TEMPLATE (TIER B — EXPLORATIONS)

This template is UNCHANGED from v3.0. The Weaver uses this template to create
inline sections for every exploration. Every field is mandatory.

```html
<!-- ═══════════════════════════════════════════════════════════════════════
     INLINE THREADING HEADER — Phase 2B
     File: [EXACT relative path from repo root]
     Tier: B | Batch: OD | Generated: [YYYY-MM-DD]
     ═══════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS
[2-4 sentences. What this exploration tests. What unique insight it provides.
Final score and key finding.]

2. THE QUESTION THIS ANSWERS
"[Single question that leads someone to this file]"

3. STATUS
[ACTIVE/SUPERSEDED] | [LOCKED/EDITABLE] | [line count, size]

4. SOUL ALIGNMENT
- SP#1 Sharp Edges: [specific manifestation in this exploration]
- SP#2 Archivist Serif: [specific manifestation or N/A]
- SP#3 Callout Family DNA: [specific manifestation or N/A]
- SP#4 No Shadows: [specific manifestation]
- SP#5 Squares: [specific manifestation or N/A]
[CANDIDATE soul pieces if discovered]

5. BUILT ON
| Source | Role | Key Values | Path |
|--------|------|------------|------|
| [file] | [role: constraint/input/methodology/authority] | [specific values used] | [path] |
[Minimum 5 entries for explorations]

6. MUST HONOR
| Constraint | Source | Consequence of Violation |
|------------|--------|--------------------------|
| [specific constraint] | [source file] | [VISCERAL consequence] |
[Minimum 3 constraints for explorations]

7. WHAT BREAKS IF THIS CHANGES
- **[file]** — [specific breakage]
- **Blast radius:** [scope assessment]

8. CONSUMED BY
| Consumer | How It Uses This File |
|----------|----------------------|
| [file] | [specific extraction/usage] |

9. RESEARCH DEBT
- [Debt item with specifics]
- [Forwards to: phase]

10. DIAGNOSTIC QUESTIONS
Q1: [Understanding purpose]
Q2: [Understanding constraints]
Q3: [Understanding dependencies]
Q4: [Understanding what breaks]
Q5: [Specific to this exploration]

     ═══════════════════════════════════════════════════════════════════════
     END INLINE THREADING HEADER
     ═══════════════════════════════════════════════════════════════════════ -->
```

---

# APPENDIX B: CONTEXT-RICH RESEARCH SUBAGENT PROMPT TEMPLATE

This template is used by the Builder when deploying Research subagents. It carries
accumulated identity INTO the external search so that findings can integrate BACK
into the web. Every section is mandatory — generic prompts produce orphan findings.

```markdown
## RESEARCH SUBAGENT MISSION: [Specific mission statement]

### CONTEXT I CARRY (From Inline Section Traversal)

**What I Know:**
- [Finding 1 with source and confidence]
- [Finding 2 with source and confidence]
- [Constraint with source]
- [Pattern with validation status]

**What I'm Uncertain About:**
- [Uncertainty 1 — why it matters]
- [Uncertainty 2 — why it matters]

**Constraints Active:**
- [Constraint from MUST HONOR table]
- [Constraint from MUST HONOR table]

### YOUR TASK

Search for external research on:
1. [Specific search target]
2. [Specific search target]
3. [Specific search target]

### OUTPUT FORMAT

| Source | Finding | Relationship | Confidence Impact | Integration |
|--------|---------|--------------|-------------------|-------------|
| [cite] | [finding] | VALIDATES/CHALLENGES/EXTENDS [internal] | +/-% | [how to integrate] |

### INTEGRATION PATH

**If VALIDATES:**
- ID: EXTERNAL-V-###
- Update [internal finding] confidence
- Add to [exploration] BUILT ON
- Apply in [iteration/phase]

**If CHALLENGES:**
- ID: EXTERNAL-V-### with CHALLENGES
- Add to RESEARCH-ACTIVE.md under "Challenged"
- Reassess [hypothesis] before continuing

**If EXTENDS:**
- ID: EXTERNAL-E-###
- Evaluate applicability to [phases]
- Add to RESEARCH-ACTIVE.md under "Extensions"

### DO NOT

- Return generic articles without integration path
- Skip ID assignment
- Return findings that can't link to accumulated identity
- Create orphan findings without home
```

---

# APPENDIX C: ACCUMULATED IDENTITY SNAPSHOT TEMPLATE

This is the structured format for accumulated identity. The Traverser subagent
returns this to the Lead. The Lead stores a snapshot in OD-CHECKPOINT.md for
structural recovery, and contextualizes it in _execution-journal/CURRENT-STATE.md
for contextual recovery. This format is used throughout the pipeline.

```json
{
  "snapshot_version": "2.0",
  "generated_at": "[ISO timestamp]",
  "phase": "OD",
  "current_exploration": "OD-003",
  "current_iteration": 2,
  "architecture_version": "v4.0",
  "team": {
    "lead": "active",
    "builder": "active",
    "weaver": "active",
    "builder_b": "not_spawned"
  },

  "traversed_files": [
    {
      "path": "showcase/explorations/density/DD-001-pulse.html",
      "purpose": "PULSE rhythm foundation",
      "key_values": ["breathing rhythm", "expand-contract-expand"],
      "constraints_extracted": 2,
      "research_debt_items": 1
    },
    {
      "path": "showcase/explorations/density/DD-003-islands.html",
      "purpose": "ISLANDS clustering pattern",
      "key_values": ["task clusters", "sparse surrounding", "48-64px spacing"],
      "constraints_extracted": 2,
      "research_debt_items": 0
    },
    {
      "path": "showcase/explorations/density/DD-006-fractal.html",
      "purpose": "Fractal self-similarity constraint",
      "key_values": ["macro mirrors micro", "page/section/component"],
      "constraints_extracted": 2,
      "research_debt_items": 0
    },
    {
      "path": "MASTER-SOUL-SYNTHESIS.md",
      "purpose": "Soul authority — 5 non-negotiable soul pieces",
      "key_values": ["sharp edges", "Archivist Serif", "callout DNA", "no shadows", "squares"],
      "constraints_extracted": 5,
      "research_debt_items": 0
    },
    {
      "path": "DESIGN-TOKEN-SUMMARY.md",
      "purpose": "Locked design tokens",
      "key_values": ["border-radius: 0", "color palette locked"],
      "constraints_extracted": 1,
      "research_debt_items": 0
    }
  ],

  "active_constraints": [
    {
      "constraint": "Questions ≥2x whitespace of answers",
      "source": "DD-001 MUST HONOR",
      "consequence": "Rhythm collapses"
    },
    {
      "constraint": "Cluster boundaries visually crisp",
      "source": "DD-003 MUST HONOR",
      "consequence": "Tasks merge"
    },
    {
      "constraint": "Pattern at macro must appear at micro",
      "source": "DD-006 MUST HONOR",
      "consequence": "Navigation intuition fails"
    },
    {
      "constraint": "border-radius: 0 everywhere",
      "source": "DESIGN-TOKEN-SUMMARY",
      "consequence": "Soul violation — system looks generic"
    },
    {
      "constraint": "SP#1: Sharp edges everywhere",
      "source": "MASTER-SOUL-SYNTHESIS",
      "consequence": "System looks generic, not distinctive"
    },
    {
      "constraint": "SP#2: Archivist Serif for wisdom",
      "source": "MASTER-SOUL-SYNTHESIS",
      "consequence": "Voice differentiation collapses"
    },
    {
      "constraint": "SP#3: Callout family DNA",
      "source": "MASTER-SOUL-SYNTHESIS",
      "consequence": "Components feel unrelated"
    },
    {
      "constraint": "SP#4: No shadows",
      "source": "MASTER-SOUL-SYNTHESIS",
      "consequence": "Depth language becomes muddy"
    },
    {
      "constraint": "SP#5: Squares always",
      "source": "MASTER-SOUL-SYNTHESIS",
      "consequence": "Visual rhythm breaks"
    }
  ],

  "research_debt": [
    {
      "item": "R1-007 small sample (n=23)",
      "source": "DD-001",
      "status": "VALIDATED by EXTERNAL-V-007",
      "confidence_change": "+15%"
    },
    {
      "item": "Mobile viewport untested",
      "source": "OD-001",
      "status": "OPEN",
      "forwards_to": "AD"
    },
    {
      "item": "API reference not tested",
      "source": "OD-003",
      "status": "OPEN",
      "forwards_to": "CD"
    }
  ],

  "external_findings_integrated": [
    {
      "id": "EXTERNAL-V-007",
      "source": "Pirolli & Card 1999",
      "validates": ["R1-015", "DD-003"],
      "key_contribution": "48-64px optimal spacing",
      "applied_in": ["OD-003 iteration 2"],
      "deployed_by": "Builder (Task tool subagent)"
    }
  ],

  "soul_alignment": {
    "SP1_sharp_edges": "border-radius: 0 everywhere",
    "SP2_archivist_serif": "Cormorant Garamond for wisdom",
    "SP3_callout_dna": "2-zone structure maintained",
    "SP4_no_shadows": "Zero box-shadow",
    "SP5_squares": "Square bullets and markers"
  },

  "findings_generated": [
    {
      "id": "OD-F-003",
      "finding": "Task clusters need 48px minimum gap",
      "provenance": ["R1-015", "EXTERNAL-V-007", "DD-003", "OD-003"],
      "confidence": "80%",
      "applies_to": ["AD", "CD"]
    }
  ],

  "threading_status": {
    "files_with_inline_sections": ["OD-001", "OD-002", "OD-003"],
    "sources_updated": ["DD-001", "DD-003", "DD-006"],
    "sources_locked_pending": ["MASTER-SOUL-SYNTHESIS.md"],
    "research_active_entries": 7
  }
}
```

---

# APPENDIX D: TEAM SPAWNING PROTOCOL

This appendix specifies exactly how the Lead spawns and configures the Agent Team
using Claude Code Agent Teams primitives. This is new in v4.0 — v3.0 did not
specify the concrete spawning mechanism.

## Team Creation

```
Lead uses TeamCreate:
  team_name: "od-execution"
  description: "OD Execution Pipeline — 6 explorations with compounding identity"
```

## Spawning Builder

```
Lead uses Task tool:
  name: "builder"
  subagent_type: "general-purpose"
  team_name: "od-execution"
  mode: "plan"  (requires Lead approval before major actions)

  prompt: |
    You are the BUILDER for the OD Execution Pipeline.

    YOUR ROLE:
    You create HTML explorations for organizational density hypotheses.
    You receive accumulated identity from Lead. You build with that identity.
    You deploy Research subagents (Task tool) when you identify weaknesses.
    You iterate until your score meets the quality bar (≥ 34.5/40).
    You report completion to Lead with: score, findings, research debt.

    YOUR CONSTRAINTS:
    - NEVER build without accumulated identity from Lead
    - ALWAYS honor MUST HONOR constraints from accumulated identity
    - ALWAYS manifest soul pieces in every element
    - ALWAYS VISUALLY AUDIT every iteration (screenshot + squint test)
    - ALWAYS invoke /soul-audit (Perceptual Deepening) before reporting completion
    - ALWAYS acknowledge research debt honestly
    - ALWAYS deploy Research subagents with context-rich prompts (see protocol)
    - ALWAYS report: score, weakness, external findings, research debt, visual audit
    - ALWAYS write to _execution-journal/builder-log.md after each iteration

    VISUAL AUDITING PROTOCOL:
    You have the Perceptual Deepening skill at ~/.claude/skills/perceptual-deepening/
    You MUST use it. Visual auditing is NOT optional.

    After EVERY iteration:
    - Take a screenshot (Playwright MCP)
    - Squint test: "Does this FEEL like KortAI? Sharp? Precise? Archival?"
    - Check 5 soul pieces PERCEPTUALLY (feel, not measurement)
    - If something feels wrong: deploy zone sub-agents (/zones)

    After FINAL iteration (before reporting to Lead):
    - Full /soul-audit invocation
    - Deploy 5 zone sub-agents in parallel (Typography, Spacing, Containers,
      Hierarchy, Composition)
    - All 5 soul pieces must be confirmed PERCEPTUALLY
    - Include zone reports and squint test results in completion message

    YOUR WORKFLOW:
    1. Check TaskList for assignments
    2. Read Lead's message with accumulated identity
    3. Build exploration iteration
    4. Take screenshot → squint test → quick soul piece check (EVERY iteration)
    5. Score against quality matrix
    6. If soul violation found visually: fix targeted single change, re-screenshot
    7. If weakness AND score < 34.5: deploy Research subagent(s)
    8. Iterate with enriched context
    9. When score ≥ 34.5: invoke /soul-audit (full Perceptual Deepening)
    10. Deploy 5 zone sub-agents in parallel for final perceptual verification
    11. Append to _execution-journal/builder-log.md:
        - What worked, what didn't, what research revealed
        - How understanding changed through iterations
        - Visual audit observations (perceptual terms, not CSS)
        - What this exploration TAUGHT (not just scored)
    12. Message Lead with completion report (includes visual audit results)
    13. Check TaskList for next assignment

    RESEARCH SUBAGENT DEPLOYMENT:
    When deploying Research subagents, use the context-rich prompt format
    specified in Appendix B. Carry accumulated identity INTO the prompt.
    Generic prompts produce orphan findings that can't integrate.
```

## Spawning Weaver

```
Lead uses Task tool:
  name: "weaver"
  subagent_type: "general-purpose"
  team_name: "od-execution"
  mode: "default"

  prompt: |
    You are the WEAVER for the OD Execution Pipeline.

    YOUR ROLE:
    You thread completed explorations into the knowledge web.
    You receive exploration details from Lead. You create inline sections.
    You update source files' CONSUMED BY tables. You update RESEARCH-ACTIVE.md.
    You verify bidirectional threading is complete.
    You report threading status to Lead.

    YOUR CONSTRAINTS:
    - ALWAYS create full 10-section inline headers (see template)
    - ALWAYS update EVERY source's CONSUMED BY table
    - ALWAYS handle T1 LOCKED files by noting in report (not editing)
    - ALWAYS update RESEARCH-ACTIVE.md with new findings
    - ALWAYS verify bidirectional threading before reporting complete
    - ALWAYS write to _execution-journal/weaver-log.md after each threading op
    - NEVER create inline sections without exploration details from Lead

    YOUR WORKFLOW:
    1. Check TaskList for assignments
    2. Read Lead's message with exploration details + accumulated identity
    3. Read the completed exploration file
    4. Create Tier B inline section (10-section format)
    5. Update all source files' CONSUMED BY tables
    6. Update RESEARCH-ACTIVE.md
    7. Append to _execution-journal/weaver-log.md:
       - Edge cases found, surprises, files harder than expected
       - Web density observations (consumer counts, pattern notes)
    8. Run threading checklist
    9. Message Lead with threading status report
    10. Check TaskList for next assignment

    INLINE SECTION TEMPLATE:
    Use the template from Appendix A. Every field is mandatory.
    The BUILT ON table must list every source from Lead's message.
    The MUST HONOR table must inherit constraints from sources.
```

## Deploying Auditor Subagent (Build Audit)

```
Lead uses Task tool (after EVERY Builder completion):
  name: "auditor-build-od-[N]"
  subagent_type: "general-purpose"
  mode: "default"

  prompt: |
    You are an INDEPENDENT AUDITOR. You have FRESH EYES.
    You have NO context about how this exploration was built.
    You are checking what ACTUALLY EXISTS in the files AND what
    ACTUALLY LOOKS RIGHT visually, not what was CLAIMED in reports.

    FILE TO AUDIT: [path to exploration HTML]

    ═══ STRUCTURAL CHECKS (read the actual code) ═══

    CONSTRAINT CHECKLIST:
    □ border-radius: 0 on every element (search CSS, verify ALL values)
    □ box-shadow: none everywhere (search CSS, verify none/0)
    □ Colors match: [list locked color values]
    □ Typography: [list expected font families]
    □ Cluster spacing ≥ 48px (identify cluster elements, check values)
    □ Self-similar structure at page/section/component

    ═══ VISUAL CHECKS (look at the actual output) ═══

    Take a screenshot of the exploration file using Playwright MCP.
    Then perform a SQUINT TEST with your fresh eyes:

    □ SQUINT TEST: Look at the screenshot with blurred focus.
      → Does the overall gestalt feel SHARP, PRECISE, ARCHIVAL?
      → Or does it feel SOFT, GENERIC, UNCERTAIN?
      → Report your honest perceptual impression.

    □ SOUL PIECE VISUAL CHECK (perception, not measurement):
      SP#1 Sharp Edges: Do edges FEEL crisp and intentional?
      SP#2 Archivist Serif: Does wisdom text FEEL archival and different?
      SP#3 Callout DNA: Do callouts FEEL like a family with shared DNA?
    □ SP#4 No Shadows: zero box-shadow AND zero text-shadow
    □ SP#5 Squares: square bullets and markers

    LOCATION CHECK:
    Expected directory: [expected path]
    Check: File exists? No extraneous files in directory?

    OUTPUT FORMAT:
    For each check:
      [PASS/FAIL] [Constraint] — [Evidence with file path and line number]
    Final verdict: PASS or FAIL
```

## Deploying Auditor Subagent (Thread Audit)

```
Lead uses Task tool (after EVERY Weaver completion):
  name: "auditor-thread-od-[N]"
  subagent_type: "general-purpose"
  mode: "default"

  prompt: |
    You are an INDEPENDENT AUDITOR. You have FRESH EYES.
    You have NO context about the threading process.
    You are checking what ACTUALLY EXISTS in the files, not
    what was CLAIMED in reports.

    EXPECTED UPDATES:
    | File | Section | Expected Entry |
    |------|---------|----------------|
    | [source 1 path] | Section 8 (CONSUMED BY) | "OD-[N]" |
    | [source 2 path] | Section 8 (CONSUMED BY) | "OD-[N]" |
    | RESEARCH-ACTIVE.md | OD Outbound | "OD-F-[N]" |
    | RESEARCH-ACTIVE.md | External Findings | "[EXTERNAL-V-###]" |

    NEW INLINE SECTION CHECK:
    File: [path to OD-[N]]
    Expected: Complete 10-section inline threading header.

    VERIFICATION PROTOCOL:
    For EACH expected update:
    1. Read the actual file
    2. Find the specific section
    3. Check if the expected entry EXISTS
    4. Note the exact line number (or note MISSING)

    ADDITIONAL CHECKS:
    □ No duplicate entries in any table
    □ No broken file paths in any table
    □ No unexpected modifications to other files

    OUTPUT FORMAT:
    For each expected update:
      [FOUND at line X / MISSING] [File] [Section] [Entry]
    Final verdict: PASS or FAIL
```

## Deploying Auditor Subagent (Comprehensive Audit — Before AD Handoff)

```
Lead uses Task tool (once, after ALL explorations complete):
  name: "auditor-comprehensive-od"
  subagent_type: "general-purpose"
  mode: "default"

  prompt: |
    You are an INDEPENDENT AUDITOR performing a COMPREHENSIVE
    AUDIT of the entire OD phase output. You have FRESH EYES.

    EXPLORATIONS TO VERIFY:
    1. OD-001: [path]
    2. OD-002: [path]
    3. OD-003: [path]
    4. OD-004: [path]
    5. OD-005: [path]
    6. OD-006: [path]

    FOR EACH EXPLORATION:
    □ File exists at expected path?
    □ Has complete 10-section inline header?
    □ BUILT ON has ≥5 entries?
    □ MUST HONOR has ≥3 constraints?
    □ Spot-check: border-radius: 0 in CSS?
    □ Spot-check: box-shadow: none in CSS?

    SOURCE FILES TO VERIFY:
    [List of DD files that should have CONSUMED BY entries]
    FOR EACH: Read Section 8, check all expected OD consumers listed.

    SYSTEM FILES TO VERIFY:
    □ organizational-patterns.md exists with Tier A inline section?
    □ OD-SYNTHESIS.md exists?
    □ RESEARCH-ACTIVE.md has entries for all OD findings?
    □ OD-CHECKPOINT.md reflects complete state?

    NOISE CHECK:
    □ No extraneous files in explorations/organizational/
    □ No broken paths in any BUILT ON or CONSUMED BY table
    □ No duplicate entries anywhere

    OUTPUT: Full report with PASS/FAIL per item and file:line evidence.
```

## Spawning Optional Builder-B (For Independent Exploration Pairs)

```
Lead uses Task tool (only when independent pairs identified):
  name: "builder-b"
  subagent_type: "general-purpose"
  team_name: "od-execution"
  mode: "plan"

  prompt: [Same as Builder prompt above]

After parallel build completes:
  Lead sends shutdown_request to builder-b
  Team returns to default size: 3 (Lead + Builder + Weaver)
```

---

# APPENDIX E: v3.0 → v4.0 MIGRATION MAP

For reference: how every element of v3.0 maps to v4.0.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         v3.0 → v4.0 MIGRATION MAP                          │
├─────────────────────────────┬───────────────────────────────────────────────┤
│ v3.0 Element                │ v4.0 Location                                │
├─────────────────────────────┼───────────────────────────────────────────────┤
│ PART I: Core Paradigm       │ PART I: Core Paradigm (PRESERVED)            │
│  1.1 Why Bidirectional      │  1.1 Why Bidirectional (updated flow diagram)│
│  1.2 Identity Transfer      │  1.2 Identity Transfer (PRESERVED VERBATIM)  │
│  1.3 Compounding Loop       │  1.3 Compounding Loop (updated for 3 agents) │
├─────────────────────────────┼───────────────────────────────────────────────┤
│ PART II: Agent Structure    │ PART II: Agent Structure (RESTRUCTURED)      │
│  Agent 1: Orchestrator      │  2.3 THE LEAD (absorbs Orchestrator role)    │
│  Agent 2: Context Guardian  │  2.8 Guardian Validation (embedded in Lead)  │
│  Agent 3: Traverser         │  2.6 Traverser Subagent Protocol             │
│  Agent 4: Builder           │  2.4 THE BUILDER (teammate, absorbs Research)│
│  Agent 5: Research Orch.    │  2.7 Research Subagent Protocol (in Builder) │
│  Agent 6: Updater           │  2.5 THE WEAVER (teammate, renamed)          │
│  Agent 7: Checkpoint Mgr    │  2.9 Checkpointing (embedded in Lead)       │
├─────────────────────────────┼───────────────────────────────────────────────┤
│ PART III: Mesh in Motion    │ PART III: Pipeline in Motion (RESTRUCTURED)  │
│  3.1 Full Execution Flow    │  3.1 Full Execution Flow (3-agent model)     │
│  3.2 Refinement Loop        │  3.3 Refinement Loop (updated diagram)       │
│  [not in v3.0]              │  3.2 Parallelism Windows (NEW — 4 windows)   │
├─────────────────────────────┼───────────────────────────────────────────────┤
│ PART IV: Integration Points │ PART IV: Integration Points (ADJUSTED)       │
│  4.1 Update Triggers        │  4.1 Update Triggers (all via Weaver)        │
│  4.2 Sub-Agent Triggers     │  4.2 Research Triggers (Builder decides)     │
│  4.3 Threading Verification │  4.3 Threading Verification (Lead runs)      │
├─────────────────────────────┼───────────────────────────────────────────────┤
│ PART V: Failure Modes       │ PART V: Failure Modes (ADJUSTED)             │
│  5.1 Common Failures        │  5.1 Common Failures (3-agent model)         │
│  5.2 Compaction Recovery     │  5.2 Compaction Recovery (PRESERVED)         │
│  [not in v3.0]              │  5.3 Teammate Lifecycle (NEW)                │
├─────────────────────────────┼───────────────────────────────────────────────┤
│ PART VI: Success Criteria   │ PART VI: Success Criteria (ADJUSTED)         │
│  6.1 Working When           │  6.1 Working When (+ efficiency criteria)    │
│  6.2 Final Checklist        │  6.2 Final Checklist (+ team cleanup)        │
├─────────────────────────────┼───────────────────────────────────────────────┤
│ Appendix A: Inline Template │ Appendix A: Inline Template (PRESERVED)      │
│ Appendix B: Sub-Agent Prompt│ Appendix B: Research Prompt (PRESERVED)      │
│ Appendix C: Identity JSON   │ Appendix C: Identity JSON (PRESERVED + team)│
│ [not in v3.0]               │ 2.10 Auditor Subagent Protocol (NEW)          │
│ [not in v3.0]               │ Gate 2.5: Build Audit (NEW)                  │
│ [not in v3.0]               │ Gate 3.5: Thread Audit (NEW)                 │
│ [not in v3.0]               │ Gate 5.5: Comprehensive Audit (NEW)          │
│ [not in v3.0]               │ Appendix D: Team Spawning Protocol (NEW)     │
│ [not in v3.0]               │ Appendix E: v3.0 → v4.0 Migration Map (NEW) │
│ [not in v3.0]               │ 1.4 Execution Journal Principle (NEW)        │
│ [not in v3.0]               │ 2.11 Execution Journal Protocol (NEW)        │
│ [not in v3.0]               │ Appendix F: Journal Templates (NEW)          │
│ [not in v3.0]               │ _execution-journal/ folder system (NEW)      │
└─────────────────────────────┴───────────────────────────────────────────────┘
```

### What Changed:

1. **7 agents → 3 agents + 3 subagent protocols + 2 embedded functions**
   - Orchestrator → Lead (team lead)
   - Context Guardian → Lead's embedded validation checklist
   - Traverser → Subagent protocol (Task tool, read-only)
   - Builder → Builder teammate (unchanged concept, absorbs Research deployment)
   - Research Orchestrator → Subagent protocol deployed BY Builder
   - Updater → Weaver teammate (renamed for clarity)
   - Checkpoint Manager → Lead's file writes
   - [NEW] Auditor → Subagent protocol (fresh-eyes verification, zero context bias)

2. **"Mesh" → "Pipeline that grows a mesh"**
   - Execution is honestly sequential (compounding requires it)
   - Knowledge structure IS a mesh (bidirectional links)
   - Both are correct; the architecture serves both

3. **Synchronous RPC → Async task-based coordination**
   - TaskList for task assignment and tracking
   - Messages for context transfer and status reporting
   - No guaranteed response ordering — teammates work autonomously

4. **Parallelism explicitly identified and specified**
   - Window 1: Research subagents within Builder (Task tool, always available)
   - Window 2: Weaver + Lead overlap (small but real)
   - Window 3: Independent exploration pairs (optional Builder-B)
   - Window 4: Perceptual deepening lenses (Task tool, always available)
   - Window 5: Auditor + Traverser overlap (audit while pre-loading)

5. **Team spawning protocol added**
   - Concrete Task tool calls for spawning each teammate
   - Role descriptions embedded in spawn prompts
   - Lifecycle management specified (spawning, idle, shutdown)

6. **Auditor subagent added (addresses v3.0 blind spot)**
   - v3.0 had no independent verification — Guardian validated based on reports
   - v4.0 Auditor reads ACTUAL FILES with fresh eyes (zero context bias)
   - Two audit types: Build Audit (after Builder) + Thread Audit (after Weaver)
   - Comprehensive Audit before AD handoff (full system verification)
   - Three new gates: 2.5 (Build), 3.5 (Thread), 5.5 (Comprehensive)
   - When Guardian passes but Auditor fails, Auditor is authoritative

7. **Execution Journal added (addresses compaction context loss)**
   - v3.0 had no mechanism to preserve thought processes across compactions
   - v4.0 Execution Journal captures WHY, not just WHAT and WHERE
   - Three layers of state: web (permanent) + checkpoint (structural) + journal (contextual)
   - CURRENT-STATE.md: single read-first file after compaction
   - Per-agent logs: each agent captures its own insights and reasoning
   - decisions.md: formal decision records with alternatives and rationale
   - Recovery protocol reads journal FIRST, then checkpoint, then web
   - Ephemeral by design: deleted after phase completion

### What Did NOT Change:

- Identity Transfer Principle — PRESERVED VERBATIM
- Absorptive Reading Protocol — PRESERVED VERBATIM (now in subagent)
- Context-Rich Sub-Agent Deployment Protocol — PRESERVED VERBATIM (now in Builder)
- Bidirectional Update Protocol — PRESERVED VERBATIM (now in Weaver)
- Guardian Enforcement Loop — PRESERVED VERBATIM (now in Lead)
- All templates — PRESERVED (Appendices A, B, C)
- All constraint registries — PRESERVED
- Compounding Loop — PRESERVED (core value proposition unchanged)
- All failure modes — PRESERVED (adjusted for 3-agent model)
- All success criteria — PRESERVED (+ efficiency criteria added)
- All gate locations and checklists — PRESERVED (assigned to Lead, + journal checks added)

---

# APPENDIX F: EXECUTION JOURNAL TEMPLATES

These templates are used by the Lead, Builder, and Weaver to maintain the
execution journal. The journal is NEW in v4.0 — v3.0 had no mechanism to
preserve thought processes across context compactions.

## CURRENT-STATE.md Template (Lead overwrites after each operation)

```markdown
# CURRENT STATE — [Phase] Pipeline

**Last Updated:** [ISO timestamp]
**Updated By:** Lead

## Where We Are

- **Phase:** OD (Organizational Density)
- **Current Exploration:** OD-[N]
- **Current Step:** [Building / Threading / Auditing / Between explorations]
- **Checkpoint Reference:** OD-CHECKPOINT.md (for full structural state)

## What We Are Doing and WHY

[2-4 sentences describing the current activity and the REASONING behind it.
Not just "building OD-004" but "building OD-004 because OD-003 demonstrated
that spacing hierarchy is the fundamental organizing principle. OD-004 tests
whether this principle applies vertically to hierarchical navigation."]

## Key Decisions That Got Us Here

| Decision | What We Chose | Why | Reference |
|----------|---------------|-----|-----------|
| DEC-001 | Exploration ordering | [rationale] | decisions.md |
| DEC-002 | [decision] | [rationale] | decisions.md |
| [latest] | [decision] | [rationale] | decisions.md |

## Current Mental Model

[This is the most important section. Describe the EMERGENT UNDERSTANDING — the
pattern or insight that is forming across explorations. This is what gets lost
during compaction and what this file exists to preserve.]

Example: "After 3 explorations, we're discovering that organizational density is
NOT about visual weight (our initial assumption). It IS about spatial hierarchy —
the relationship between spacing zones at different scales. ISLANDS clustering
(DD-003) predicted this, but OD-001 through OD-003 confirmed it empirically.
This changes how we approach the remaining explorations."

## What Comes Next and WHY

- **Next exploration:** OD-[N+1]
- **Hypothesis:** [what we're testing]
- **Why this hypothesis NOW:** [how it follows from what we've learned]
- **What we expect:** [prediction based on current mental model]
- **What would surprise us:** [what would challenge the mental model]

## Recovery Instructions

If you're reading this after compaction:
1. You've just read the most important file. You now have the mental model.
2. Read OD-CHECKPOINT.md for structural position details.
3. Read lead-log.md (recent entries) for pattern observations.
4. Deploy Traverser subagent for accumulated identity.
5. Resume with BOTH structural position AND contextual understanding.
```

## Log Entry Template (used by lead-log, builder-log, weaver-log)

```markdown
## [ISO timestamp] — [OPERATION SUMMARY]

**What:** [What happened — factual, concise]
**Why:** [Why we did this — rationale, context]
**Key Insight:** [The most important takeaway from this operation]
**Decision:** [If a decision was made — what was chosen and why]
**Result:** [Outcome — score, status, pass/fail, specific findings]
**Frame Update:** [How this changes our mental model, if at all]
**Next:** [What follows from this result and why]
```

### Example Lead Log Entry:

```markdown
## 2026-02-07T14:30:00Z — OD-003 Build Audit + Thread Audit Complete

**What:** Builder completed OD-003 at 35/40. Auditor PASS on build and threading.
**Why:** OD-003 tests task-based organization — extending ISLANDS to org scale.
**Key Insight:** 48px cluster spacing (from Pirolli research) is the organizing
principle, not visual weight. Spacing creates distinct zones; borders don't.
**Decision:** Proceeding to OD-004 (hierarchical nav) based on spacing insight.
**Result:** Build Audit PASS (all constraints), Thread Audit PASS (all links verified).
Emerging pattern across OD-001/002/003: spatial hierarchy > visual hierarchy.
**Frame Update:** Our mental model has shifted. "Density" in this context means
"spacing relationships between content zones" not "amount of content per viewport."
This reframes OD-004 through OD-006 — we should test spacing at different scales.
**Next:** OD-004 (hierarchical nav). Testing: does the spacing-hierarchy principle
apply vertically (nested navigation levels)? If yes, we have a unified theory.
```

### Example Builder Log Entry:

```markdown
## 2026-02-07T14:15:00Z — OD-003 Complete (2 iterations)

**What:** Built OD-003 (task-based organization). 2 iterations, final score 35/40.
**Why:** Testing whether ISLANDS clustering extends to organizational-scale layouts.
**Key Insight:** Iteration 1 (31/40) failed because I treated clusters as visual
groups (borders, background colors). Research subagent returned Pirolli & Card
(48-64px spacing). Iteration 2 used SPACING instead of borders → immediately
clear separation. The "cluster" is defined by its SURROUNDING SPACE, not by a
containing element. This is the ISLANDS principle at work.
**Decision:** Applied 48px minimum gap between task clusters, 24px within.
**Result:** Score jumped from 31 to 35. +4 points from spacing change alone.
Research debt: API reference layout untested (→ CD), mobile viewport (→ AD).
EXTERNAL-V-007 integrated (Pirolli, validates R1-015 at +15%).
**Frame Update:** "Density" means "spacing relationships." Not "visual weight."
This is a significant mental model shift — it should inform all remaining OD work.
**Next:** Expect Lead to assign threading, then OD-004 (hierarchical nav).
```

### Example Weaver Log Entry:

```markdown
## 2026-02-07T14:25:00Z — OD-003 Threading Complete

**What:** Threaded OD-003 into the web. Updated 3 source files + RESEARCH-ACTIVE.
**Why:** Bidirectional threading for OD-003 after Build Audit PASS.
**Key Insight:** DD-006 (fractal) now has 5 consumers — it's becoming the most
connected node in the web. This makes sense: fractal self-similarity is referenced
by almost everything. Consider: should it get a Tier A inline section upgrade?
**Decision:** No decision needed — standard threading operation.
**Result:** DD-003 CONSUMED BY ✓, DD-006 CONSUMED BY ✓, R1-015 noted (no inline
section — added standalone consumer table). MASTER-SOUL-SYNTHESIS LOCKED (noted).
RESEARCH-ACTIVE updated with OD-F-003 + EXTERNAL-V-007.
Edge case: R1-015 had no inline section format, so I added a minimal CONSUMED BY
table at the end of the file. Lead should verify this is acceptable format.
**Frame Update:** Web density is increasing faster than expected. Files with >4
consumers may need a consumer management sub-protocol to avoid table bloat.
**Next:** Awaiting next threading assignment from Lead.
```

## Decision Record Template (decisions.md)

```markdown
## [ISO timestamp] — DEC-[NNN]: [Decision Title]

**Context:** [What situation required this decision — what fork in the road]

**Alternatives:**
1. [Option A] — [description, pros, cons]
2. [Option B] — [description, pros, cons]
3. [Option C] — [description, pros, cons]

**Choice:** [Which option was chosen]

**Rationale:** [Specific reasoning — why this option over the others.
Not just "it seemed better" but "because OD-002's results showed that
progressive disclosure works for simple content but creates cognitive
overhead for complex tasks, and OD-004 specifically tests complex tasks."]

**Expected Consequence:** [What we predict will happen as a result of this choice]

**Actual Consequence:** [FILLED IN LATER when the consequence is known.
This creates a feedback loop — we can look back and see whether our
predictions were correct, which improves future decision-making.]
```

### Example Decision Record:

```markdown
## 2026-02-07T12:00:00Z — DEC-003: Skip OD-005 Hypothesis Change

**Context:** Original hypothesis for OD-005 was "timeline-based density" but
OD-001 through OD-003 have consistently shown that spatial hierarchy dominates.
Timeline-based approaches may be testing the wrong axis entirely.

**Alternatives:**
1. Keep original OD-005 hypothesis (timeline-based)
   - Pro: Tests diversity of approaches
   - Con: Based on assumption (visual weight) we now believe is wrong
2. Replace with "nested spatial zones" hypothesis
   - Pro: Directly extends the spatial hierarchy insight from OD-001-003
   - Con: Narrows the exploration space
3. Keep timeline but frame through spatial hierarchy lens
   - Pro: Tests original idea WITH new understanding
   - Con: Hybrid approach may produce muddy results

**Choice:** Option 3 — Keep timeline but reframe through spatial hierarchy

**Rationale:** We want to test whether the spatial hierarchy principle is
UNIVERSAL (works even for timeline-based layouts) or only applies to certain
content organizations. OD-001-003 all used spatial clustering; testing with
temporal organization tells us if the principle generalizes.

**Expected Consequence:** If spatial hierarchy works for timeline: unified
theory confirmed. If not: spatial hierarchy is layout-dependent, not universal.

**Actual Consequence:** [To be filled after OD-005 completes]
```

---

# END OF DOCUMENT

This architecture ensures the compounding pipeline operates as a living system where:
- **Knowledge compounds** through sequential exploration with enriched identity
- **Identity transfers** through every message, every subagent prompt, every inline section
- **Research validates** through context-rich subagent deployment that integrates back
- **The web grows** through the Weaver's bidirectional threading
- **Quality is enforced** through the Lead's Guardian validation at every gate
- **Quality is VERIFIED** through the Auditor's fresh-eyes file inspection at every gate
- **No blind spots** — Guardian checks claims, Auditor checks reality, two layers
- **Context survives compaction** — the execution journal preserves WHY, not just WHAT
  and WHERE. CURRENT-STATE.md is always current. Recovery reads journal → checkpoint → web.
  The team resumes UNDERSTANDING, not just position.
- **Agent Teams primitives are respected** — teammates for sustained work, subagents for
  one-shot queries, embedded functions for checklists, file writes, and journal
- **Parallelism is exploited where genuine** — research subagents, perceptual deepening,
  independent exploration pairs, audit+traversal overlap — without pretending the
  pipeline is something it's not

**Three agents. Three subagent protocols. One compounding loop.**
**Three layers of state: web (permanent) + checkpoint (structural) + journal (contextual).**
**The Guardian checks claims. The Auditor checks reality. The Journal preserves WHY.**
**The Builder LOOKS at every iteration. The Auditor LOOKS with fresh eyes.**
**Visual auditing is a habit, not a ceremony. Perceptual Deepening is always invoked.**
**The pipeline grows a mesh. The journal bridges compactions.**

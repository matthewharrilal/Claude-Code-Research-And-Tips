# Agent Pattern Vocabulary

**The Complete Lexicon of Agentic Development Patterns**

This document defines precise meanings for every term used in the agent pattern language. Each entry provides a definition, syntax where applicable, usage context, and canonical examples from the research corpus.

---

## Table of Contents

1. [Loop Constructs](#loop-constructs)
2. [State Containers](#state-containers)
3. [Quality Gates](#quality-gates)
4. [Agent Types](#agent-types)
5. [Communication Primitives](#communication-primitives)
6. [Isolation Mechanisms](#isolation-mechanisms)
7. [Control Structures](#control-structures)
8. [Memory Patterns](#memory-patterns)
9. [Monitoring Constructs](#monitoring-constructs)
10. [Failure Modes](#failure-modes)
11. [Tool Categories](#tool-categories)
12. [Architecture Roles](#architecture-roles)
13. [Execution Modes](#execution-modes)
14. [Vocabulary Reference Card](#vocabulary-reference-card)

---

## Loop Constructs

### while-loop
**Definition:** Bash construct for indefinite iteration until an external condition is satisfied.

**Syntax:**
```bash
while :; do <command>; done
```

**Use:** Autonomous execution until completion signal detected.

**Example:** Original Ralph pattern - `while :; do cat PROMPT.md | claude ; done`

**Characteristics:**
- No inherent termination condition
- Requires external signal (grep for COMPLETE)
- Dangerous without safety bounds

---

### for-loop
**Definition:** Bounded iteration with explicit maximum iterations.

**Syntax:**
```bash
for (( i=1; i<=$MAX_ITERATIONS; i++ )); do <command>; done
```

**Use:** Safe autonomous execution with guaranteed termination.

**Example:** Ryan Carson's Ralph - `for (( i=1; i<=25; i++ )); do claude ... ; done`

**Characteristics:**
- Predictable maximum cost
- Safe default for production
- Fails gracefully at limit

---

### iteration
**Definition:** A single pass through the Ralph loop, from fresh context to commit/exit.

**Structure:**
1. Read state files (prd.json, progress.txt)
2. Pick next unpassed story
3. Implement feature
4. Run quality gates
5. Commit if passing
6. Update state files
7. Check for COMPLETE or loop

**Key Property:** Each iteration spawns a NEW agent instance with NO memory of previous iterations.

---

### fresh-context
**Definition:** The principle that each iteration starts with zero accumulated context, relying on external state for continuity.

**Rationale:** Prevents context rot, lossy compaction, and quality degradation over long runs.

**Contrast:** Long-running sessions accumulate context until quality degrades at 85%+ usage.

---

### stop-condition
**Definition:** The signal that terminates the loop, indicating all work is complete.

**Canonical Form:** `<promise>COMPLETE</promise>`

**Detection:**
```bash
if grep -q "<promise>COMPLETE</promise>" output.txt; then break; fi
```

**Variants:** `PROMISE COMPLETE HERE`, `ALL TASKS DONE`, custom strings

---

## State Containers

### progress.txt
**Definition:** Append-only session memory file that accumulates learnings across iterations.

**Structure:**
```markdown
# Progress Log - Append Only

## Codebase Patterns
- [Discovered pattern 1]
- [Discovered pattern 2]

---

## [Date] - [Story ID]
- What was implemented
- Files changed
- **Learnings:**
  - Patterns discovered
  - Gotchas encountered
```

**Rules:**
- APPEND ONLY - never edit previous entries
- Patterns section at TOP for cross-session learning
- Each iteration adds dated entry

**Use:** Inter-iteration memory, pattern accumulation, debugging audit trail

---

### prd.json
**Definition:** JSON task tracking file with machine-readable task states.

**Structure:**
```json
{
  "project": "ProjectName",
  "branchName": "ralph/feature-name",
  "userStories": [
    {
      "id": "US-001",
      "title": "Task description",
      "acceptanceCriteria": ["Criterion 1", "typecheck passes"],
      "priority": 1,
      "passes": false,
      "notes": ""
    }
  ]
}
```

**Key Fields:**
- `passes: boolean` - Task completion status
- `priority: number` - Lower = first (ordering)
- `acceptanceCriteria: string[]` - Verifiable requirements

**Use:** Kanban-style task management, deterministic task selection

---

### AGENTS.md
**Definition:** Permanent learnings document for humans and future agents.

**Structure:**
```markdown
# AGENTS.md

## Patterns
- [Reusable pattern 1]
- [Reusable pattern 2]

## Gotchas
- [Known issue 1]
- [Known issue 2]

## Conventions
- [Project-specific convention 1]
```

**Distinction from progress.txt:**
- progress.txt: Session-specific, ephemeral notes
- AGENTS.md: Permanent, curated, project-level documentation

---

### CLAUDE.md
**Definition:** Project context file that onboards stateless agents to the codebase.

**Structure:**
```markdown
# Project: Name

## Tech Stack
- [Technologies]

## Commands
- `npm run dev` - Description
- `npm test` - Description

## Conventions
- [Convention 1]

## Known Gotchas
- [Gotcha 1]
```

**Best Practices:**
- Under 500 tokens
- Essential information only
- Verifiable facts over opinions

---

### handoff-file
**Definition:** JSON file enabling explicit context transfer between agents.

**Structure:**
```json
{
  "from": "agent-id",
  "to": "target-agent-id",
  "timestamp": "ISO-8601",
  "context": {
    "completed": ["Task 1"],
    "next_steps": ["Task 2"],
    "blockers": [],
    "notes": "Additional context"
  }
}
```

**Use:** Domain-isolated agents (Panopticon), file-based coordination

---

## Quality Gates

### typecheck
**Definition:** Type system validation via static analysis.

**Commands:**
- TypeScript: `npm run typecheck` or `tsc --noEmit`
- Python: `mypy .`
- Go: `go build` (implicit)

**Use:** Catch type errors before commit, mandatory acceptance criterion.

---

### test-suite
**Definition:** Automated test execution for functional verification.

**Commands:**
- `npm test`
- `pytest`
- `go test ./...`

**Use:** Verify functionality, regression prevention, acceptance verification.

---

### lint
**Definition:** Code style and quality checking.

**Commands:**
- `eslint .`
- `ruff check .`
- `golint ./...`

**Use:** Enforce conventions, catch common errors.

---

### ci-green
**Definition:** All CI pipeline checks passing, typically: typecheck + test + lint.

**Use:** Gate for commits, PR merges, deployment.

---

### acceptance-criteria
**Definition:** Explicit, verifiable conditions that define task completion.

**Good Examples:**
- "Add email column with unique constraint"
- "Return 401 on invalid credentials"
- "npm run typecheck passes"

**Bad Examples (anti-patterns):**
- "Works correctly"
- "Good UX"
- "Handles edge cases"

**Rule:** If you can't automate verification, it's not acceptance criteria.

---

### browser-verification
**Definition:** Visual confirmation of UI changes via screenshot or browser automation.

**Tools:**
- Playwright MCP
- dev-browser skill
- Browserbase cloud browsers

**Use:** "Not complete until verified with screenshot"

---

## Agent Types

### orchestrator
**Definition:** Coordinating agent that distributes tasks but never executes.

**Characteristics:**
- NEVER writes code
- NEVER runs bash commands
- NEVER explores codebases directly
- Uses: Read (1-2 files), Task*, AskUserQuestion

**Metaphor:** "The conductor. Your agents play the instruments."

**Model Selection:** Opus (complex reasoning, strategy)

---

### worker
**Definition:** Executing agent that implements tasks but never coordinates.

**Characteristics:**
- ALWAYS writes code
- Uses: Read, Write, Edit, Bash, Glob, Grep, WebFetch
- NEVER spawns sub-agents
- NEVER modifies task definitions

**Constraints (Worker Preamble):**
```
CONTEXT: You are a WORKER agent, not an orchestrator.
RULES:
- Complete ONLY the task described below
- Use tools directly
- Do NOT spawn sub-agents
- Do NOT call TaskCreate/TaskUpdate
```

**Model Selection:** Sonnet (balanced cost/capability)

---

### errand-runner
**Definition:** Lightweight worker for simple, fast tasks.

**Use Cases:**
- File lookups
- Simple grep operations
- Quick transformations

**Model Selection:** Haiku (cheap, fast, parallel-friendly)

**Pattern:** Spawn 5-10 in parallel for research phases

---

### subagent
**Definition:** Short-lived agent spawned by parent for specific isolated task.

**Characteristics:**
- Own isolated context window
- Returns summary to parent
- Context doesn't pollute parent
- Ephemeral - terminates after task

**Invocation:** `Task(description=..., run_in_background=True|False)`

---

### polecat
**Definition:** Named persistent worker with specific expertise (Gas Town terminology).

**Characteristics:**
- Long-lived
- Has identity and specialization
- Assigned recurring responsibilities

**Contrast:** Crew (ephemeral workers for one-off tasks)

---

### crew
**Definition:** Ephemeral workers spawned for one-off tasks (Gas Town terminology).

**Characteristics:**
- Short-lived
- No persistent identity
- Created for specific task, discarded after

---

### witness
**Definition:** Per-rig observer agent that maintains audit trail (Gas Town terminology).

**Use:** Monitoring, logging, debugging, accountability

---

### deacon
**Definition:** Monitoring agent that handles handshakes between other agents (Gas Town terminology).

**Use:** Health checks, coordination, agent lifecycle management

---

### dogs
**Definition:** Quality gate enforcement agents (Gas Town terminology).

**Use:** Watchdog functions, enforcement, blocking bad changes

---

### refinery
**Definition:** Task decomposition agent that breaks features into atomic stories (Gas Town terminology).

**Use:** PRD generation, story breakdown, dependency analysis

---

### mayor
**Definition:** Town-level coordination agent (Gas Town terminology).

**Use:** Cross-rig coordination, resource allocation, conflict resolution

---

### overseer
**Definition:** The human operator with inbox-based interaction (Gas Town terminology).

**Role:** Final authority, escalation target, strategic direction

---

## Communication Primitives

### git-history
**Definition:** The sequence of commits as long-term external memory.

**Use:**
- Context for new iterations
- Rollback capability
- Progress narrative

**Access:**
```bash
git log --oneline -10
git diff main..HEAD
```

---

### file-handoff
**Definition:** JSON file-based context transfer between agents.

**Pattern:** Write to shared location, recipient reads on next iteration.

**Use:** Panopticon domain handoffs, async coordination

---

### event-bus
**Definition:** File-based event publishing system for agent coordination.

**Structure:**
```
/tmp/agent-events/
├── task-complete-*.json
├── conflict-detected-*.json
└── checkpoint-*.json
```

**Use:** Event-driven architectures, loose coupling

---

### mcp-agent-mail
**Definition:** Email-like messaging between agents via MCP protocol.

**Characteristics:**
- Async by default
- Natural agent village behavior
- No special training needed

**Source:** Steve Yegge's Gas Town

---

### task-tool
**Definition:** Native Claude Code tool for spawning subagents.

**Syntax:** `Task(description=..., run_in_background=True|False)`

**Use:** Worker delegation, parallel research, adversarial validation

---

## Isolation Mechanisms

### directory-isolation
**Definition:** Each agent operates in its own filesystem directory.

**Example (Panopticon):**
```
~/nox        # Company/product
~/metrics    # Analytics
~/trades     # Finance
```

**Benefit:** No context pollution, clear ownership, simple coordination

---

### branch-isolation
**Definition:** Each agent works on its own git branch.

**Pattern:**
```bash
git checkout -b feature-auth   # Agent 1
git checkout -b feature-pay    # Agent 2
```

**Merge:** Human reviews and merges via PR

---

### worktree-isolation
**Definition:** Git worktrees create isolated working directories sharing the same repo.

**Setup:**
```bash
git worktree add ../wt-feature feature-branch
```

**Benefit:** Full directory isolation with shared git history

---

### container-isolation
**Definition:** Each agent runs in its own Docker container.

**Benefits:**
- Complete environment isolation
- Per-container resource limits
- Shared volumes for communication

---

### context-isolation
**Definition:** Subagents have their own context windows, isolated from parent.

**Benefit:** Expensive operations don't pollute main context

---

## Control Structures

### max-iterations
**Definition:** Hard limit on loop iterations as safety mechanism.

**Syntax:** `./ralph.sh 25`

**Use:** Cost control, guaranteed termination, prevent runaway loops

---

### promise-complete
**Definition:** The completion signal that terminates the loop.

**Form:** `<promise>COMPLETE</promise>`

**Detection:** grep in output file

---

### priority-ordering
**Definition:** Lower priority number = execute first.

**In prd.json:**
```json
"priority": 1  // First
"priority": 2  // Second
```

**Use:** Dependency-respecting task ordering

---

### passes-boolean
**Definition:** Task completion flag in prd.json.

**Values:**
- `false` - Task incomplete, eligible for work
- `true` - Task complete, skip

**Update:** Agent sets to true after verification passes

---

### story-sizing
**Definition:** The practice of making tasks small enough to complete in one iteration.

**Rule of Thumb:** "If you can't describe it in 2-3 sentences, it's too big."

**Right-sized:**
- Add a database column
- Implement one endpoint
- Create one component

**Too big (split these):**
- "Build the entire dashboard"
- "Add authentication"

---

## Memory Patterns

### append-only
**Definition:** Data structure that only permits additions, never modifications.

**Example:** progress.txt - only append new entries, never edit old ones

**Benefit:** Audit trail, no lossy overwrites, safe for concurrent access

---

### external-state
**Definition:** All persistent state stored in files, not agent memory.

**Philosophy:** "The agent remembers nothing. The filesystem remembers everything."

**Implements:** Stateless agent, stateful environment

---

### compaction
**Definition:** Lossy compression of context to extend working capacity.

**Command:** `/compact`

**Warning:** Details get summarized - may lose critical information

**Prefer:** Fresh context via Ralph loops over repeated compaction

---

### context-rot
**Definition:** Degradation of agent quality as context window fills.

**Symptoms:**
- Repetition of earlier statements
- Forgetting recent changes
- Instructions ignored
- Hallucinated files

**Thresholds:**
- 60%: Monitor closely
- 70%: Consider compacting
- 85%: Quality compromised
- 90%+: Failure mode

---

### hierarchical-memory
**Definition:** Multi-layer memory architecture with different scopes.

**Layers:**
1. Enterprise Policy (`/Library/.../CLAUDE.md`)
2. Project Memory (`./CLAUDE.md`)
3. Modular Rules (`./.claude/rules/*.md`)
4. Personal/Local (`~/.claude/CLAUDE.md`, `./CLAUDE.local.md`)

---

## Monitoring Constructs

### claude-hud
**Definition:** Plugin for real-time context and tool visibility.

**Display:**
```
[Opus 4.5] ████████░░ 35% | 1 MCPs | ⏳ 1m
✓ Read x2 | ✓ Edit x1
```

**Use:** Context monitoring, tool tracking, subagent visibility

---

### rpai
**Definition:** TUI for monitoring multiple AI agents across tmux panes.

**Install:** `cargo install rpai`

**Use:** Multi-agent status overview, quick navigation

---

### heartbeat
**Definition:** Periodic signal indicating agent is alive and working.

**Use:** Health monitoring, stale agent detection

---

### audit-log
**Definition:** Append-only record of all agent actions.

**Format:** JSON Lines (`.jsonl`)

**Use:** Debugging, accountability, pattern analysis

---

## Failure Modes

### context-overflow
**Definition:** Context window exceeded, causing failures or quality collapse.

**Prevention:** Task sizing, fresh context, monitoring

---

### recursion-explosion
**Definition:** Workers spawning sub-workers creating uncontrolled nesting.

**Prevention:** Iron Law - workers NEVER spawn sub-agents

---

### scope-creep
**Definition:** Task expanding beyond original definition during execution.

**Prevention:** Explicit acceptance criteria, atomic stories

---

### verification-bypass
**Definition:** Marking tasks complete without running quality gates.

**Prevention:** Separate orchestrator (marks complete) from worker (implements)

---

### dead-letter
**Definition:** Tasks that repeatedly fail and are moved to holding queue.

**Threshold:** 3+ failures typically triggers dead-letter

**Resolution:** Human review required

---

### circuit-breaker
**Definition:** Pattern that stops attempting operations after repeated failures.

**States:**
- CLOSED: Normal operation
- OPEN: Failing fast (after N failures)
- HALF_OPEN: Testing recovery

---

## Tool Categories

### reading-tools
**Definition:** Tools that retrieve information without modification.

**Members:** Read, Glob, Grep, WebFetch, WebSearch

**Ownership:** Available to all agent types

---

### writing-tools
**Definition:** Tools that modify the filesystem.

**Members:** Write, Edit

**Ownership:** Workers only, never orchestrators

---

### execution-tools
**Definition:** Tools that run commands.

**Members:** Bash

**Ownership:** Workers only, with security gates

---

### coordination-tools
**Definition:** Tools that manage tasks and subagents.

**Members:** Task, TaskCreate, TaskUpdate, TaskList, TaskGet

**Ownership:** Orchestrators only, never workers

---

### user-tools
**Definition:** Tools for human interaction.

**Members:** AskUserQuestion

**Ownership:** Primarily orchestrators

---

## Architecture Roles

### hub-and-spoke
**Definition:** Central orchestrator with peripheral workers.

**Structure:**
```
       Orchestrator
           |
    +------+------+
    |      |      |
  Worker Worker Worker
```

**Use:** Clear decomposition, predictable workflow

---

### peer-to-peer
**Definition:** Agents communicate directly without central coordinator.

**Structure:**
```
Agent <---> Agent
  |           |
  +---Agent---+
```

**Use:** Emergent collaboration, resilient systems

---

### factory-pattern
**Definition:** System that produces specialized agents on demand.

**Example:** Gas Town - produces polecats, crew, witnesses as needed

**Characteristics:**
- Role-based specialization
- Dynamic scaling
- Named and ephemeral workers

---

### kanban-pattern
**Definition:** Single agent operates against task board, completing one at a time.

**Flow:** Pick -> Work -> Complete -> Return -> Loop

**Implementation:** prd.json as task board

---

## Execution Modes

### yolo-mode
**Definition:** Permissive mode that auto-accepts tool use.

**Command:** `claude --dangerously-skip-permissions`

**Requirement:** Run on isolated VM, NEVER on local machine with sensitive data

---

### interactive-mode
**Definition:** Default mode requiring human approval for each tool use.

**Use:** Learning, exploration, sensitive operations

---

### background-execution
**Definition:** Subagent runs without blocking parent.

**Syntax:** `Task(..., run_in_background=True)`

**Use:** Parallel research, long-running operations

---

### cron-scheduled
**Definition:** Agent invocation via system scheduler.

**Example:**
```bash
0 6 * * * cd ~/trades && claude "Morning brief"
```

**Use:** Automated reports, scheduled maintenance

---

## Vocabulary Reference Card

### Core Loop Terms
| Term | One-Line Definition |
|------|---------------------|
| `while-loop` | Indefinite iteration until external signal |
| `for-loop` | Bounded iteration with max limit |
| `iteration` | Single pass from fresh context to commit |
| `fresh-context` | Zero accumulated context per iteration |
| `stop-condition` | Signal terminating the loop |

### State Files
| Term | One-Line Definition |
|------|---------------------|
| `progress.txt` | Append-only learning log |
| `prd.json` | JSON task tracking with passes boolean |
| `AGENTS.md` | Permanent project learnings |
| `CLAUDE.md` | Project context onboarding |
| `handoff-file` | Inter-agent context transfer |

### Quality Gates
| Term | One-Line Definition |
|------|---------------------|
| `typecheck` | Static type validation |
| `test-suite` | Automated functional tests |
| `lint` | Code style enforcement |
| `ci-green` | All pipeline checks passing |
| `acceptance-criteria` | Verifiable completion conditions |

### Agent Types
| Term | One-Line Definition |
|------|---------------------|
| `orchestrator` | Coordinates but never executes |
| `worker` | Executes but never coordinates |
| `errand-runner` | Fast lightweight lookup agent |
| `subagent` | Isolated task agent spawned by parent |
| `polecat` | Named persistent worker (Gas Town) |
| `crew` | Ephemeral one-off worker (Gas Town) |

### Isolation Types
| Term | One-Line Definition |
|------|---------------------|
| `directory-isolation` | Separate filesystem directories |
| `branch-isolation` | Separate git branches |
| `worktree-isolation` | Git worktrees for full isolation |
| `container-isolation` | Docker container separation |
| `context-isolation` | Subagent's separate context window |

### Control Structures
| Term | One-Line Definition |
|------|---------------------|
| `max-iterations` | Hard limit on loop iterations |
| `promise-complete` | Loop termination signal |
| `priority-ordering` | Lower number = execute first |
| `passes-boolean` | Task completion flag |
| `story-sizing` | Tasks completable in one iteration |

### Memory Patterns
| Term | One-Line Definition |
|------|---------------------|
| `append-only` | Only additions, never modifications |
| `external-state` | All state in files, not agent memory |
| `compaction` | Lossy context compression |
| `context-rot` | Quality degradation as context fills |

### Failure Modes
| Term | One-Line Definition |
|------|---------------------|
| `context-overflow` | Context window exceeded |
| `recursion-explosion` | Uncontrolled subagent spawning |
| `scope-creep` | Task expanding beyond definition |
| `verification-bypass` | Skipping quality gates |
| `dead-letter` | Repeatedly failed task queue |
| `circuit-breaker` | Stop after repeated failures |

### Architecture Patterns
| Term | One-Line Definition |
|------|---------------------|
| `hub-and-spoke` | Central orchestrator + peripheral workers |
| `peer-to-peer` | Direct agent-to-agent communication |
| `factory-pattern` | System that produces agents on demand |
| `kanban-pattern` | Agent works task board sequentially |

---

## The Iron Law

```
╔═══════════════════════════════════════════════════════════════════╗
║                    THE IRON LAW                                    ║
╠═══════════════════════════════════════════════════════════════════╣
║                                                                    ║
║  An agent that ORCHESTRATES must NEVER directly EXECUTE.          ║
║  An agent that EXECUTES must NEVER directly ORCHESTRATE.          ║
║                                                                    ║
╚═══════════════════════════════════════════════════════════════════╝
```

Mixing these roles leads to:
- Context pollution
- Scope creep
- Verification bypass
- Uncontrolled recursion

---

## Model Selection Matrix

| Task Type | Model | Rationale |
|-----------|-------|-----------|
| Strategy, architecture, orchestration | Opus | Complex reasoning |
| Implementation, testing, structured work | Sonnet | Balanced cost/capability |
| Lookups, simple transforms, bulk parallel | Haiku | Cheap and fast |

---

## Sources

This vocabulary was synthesized from:
- Ralph Wiggum pattern (Geoffrey Huntley, @mattpocockuk, @ryancarson)
- CC Mirror multi-agent (@nummanali)
- Gas Town factory (@steve_yegge)
- Personal Panopticon (@mollycantillon)
- Infinite Orchestra (@0xSero)
- Claude Code official documentation
- 40+ community research extractions

---

## Tags

`#vocabulary` `#grammar` `#patterns` `#definitions` `#reference` `#ralph` `#orchestration` `#multi-agent` `#loop-constructs` `#state-containers` `#quality-gates` `#agent-types`

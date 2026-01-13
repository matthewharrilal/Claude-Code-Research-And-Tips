# Agent Architecture Taxonomy

**A Comprehensive Classification of Agent Patterns for Claude Code and AI-Assisted Development**

**Generated:** 2026-01-09
**Sources:** 15+ primary extractions from community innovations, production implementations, and Anthropic guidance

---

## Table of Contents

1. [Single Agent Patterns](#1-single-agent-patterns)
2. [Multi-Agent Patterns](#2-multi-agent-patterns)
3. [Orchestrator/Worker Separation](#3-orchestratorworker-separation)
4. [Swarm Architectures](#4-swarm-architectures)
5. [Hierarchical Structures](#5-hierarchical-structures)
6. [Architecture Comparison Matrix](#6-architecture-comparison-matrix)
7. [The Iron Law of Worker Separation](#7-the-iron-law-of-worker-separation)
8. [Communication Patterns](#8-communication-patterns)
9. [Isolation Strategies](#9-isolation-strategies)
10. [Production Deployment Patterns](#10-production-deployment-patterns)

---

## 1. Single Agent Patterns

### 1.1 Interactive Session Pattern

**Description:** The baseline pattern - human interacts with a single Claude Code instance in a conversational loop.

**Architecture:**
```
Human <---> Claude Code <---> Codebase
              |
              +---> Tools (Read, Write, Bash, etc.)
```

**Characteristics:**
- Synchronous, turn-based interaction
- Full context available to single agent
- Human remains in the loop for decisions
- No coordination overhead

**Use Cases:**
- Exploratory development
- Debugging sessions
- Code review
- Learning and experimentation

**Limitations:**
- Single context window constraint
- Human bandwidth bottleneck
- No parallelization

---

### 1.2 Loop-Based Autonomous Pattern (Ralph Wiggum)

**Source:** Geoffrey Huntley, popularized by @mattpocockuk, @ryancarson

**Description:** A bash loop that runs Claude Code repeatedly with fresh context until a completion condition is met. Each iteration gets a clean slate but has access to git history and file-based memory.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│                    RALPH LOOP PATTERN                         │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐                                            │
│  │  PRD.json    │  ← Task definitions with passes: true/false │
│  │  progress.txt│  ← Append-only learnings log               │
│  └──────┬───────┘                                            │
│         │                                                     │
│         ▼                                                     │
│  ┌──────────────────────────────────────────────────────┐   │
│  │             ITERATION N (Fresh Context)                │   │
│  │  1. Read prd.json, progress.txt                       │   │
│  │  2. Pick next unpassed story                          │   │
│  │  3. Implement feature                                 │   │
│  │  4. Run tests                                         │   │
│  │  5. If passing: commit, update prd.json passes: true  │   │
│  │  6. Append learnings to progress.txt                  │   │
│  │  7. Output PROMISE COMPLETE if all done               │   │
│  └──────────────────────────────────────────────────────┘   │
│         │                                                     │
│         ▼                                                     │
│  ┌──────────────┐                                            │
│  │ All complete?│────YES───► EXIT                            │
│  └──────┬───────┘                                            │
│         │ NO                                                  │
│         └──────────────► LOOP (new iteration, fresh context) │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Implementation:**
```bash
#!/bin/bash
MAX_ITERATIONS=${1:-10}

for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  echo "Iteration $i / $MAX_ITERATIONS"

  claude "Review plans/prd.json and plans/progress.txt.
    Mark the right PRD items as passes: true.
    Append your progress to progress.txt.
    Make a git commit of that feature.
    Only work on a single feature.
    If PRD is complete, output PROMISE COMPLETE HERE." | tee output.txt

  if grep -q "PROMISE COMPLETE HERE" output.txt; then
    break
  fi
done
```

**Key Principles:**
1. **Fresh context per iteration** - avoids context rot
2. **External memory** - git history + progress.txt
3. **Verifiable completion** - tests must pass
4. **Small task sizing** - each story completable in one context window

**Variants:**
| Variant | Source | Enhancement |
|---------|--------|-------------|
| **Marathon Ralph** | @stephen_rayner | Full SDLC with E2E tests |
| **Dr. Ralph** | @MikeEndale | Confidence thresholds (80%+) |
| **Lisa** | @petruarakiss | Logging + progress tracking |
| **Zeroshot** | @Eivind1384955 | Next-gen version |

**Actionability:** Medium Lift - Requires PRD setup

---

### 1.3 Subagent-Spawning Pattern

**Description:** Single parent agent spawns ephemeral child agents for specific tasks, then absorbs their results.

**Architecture:**
```
┌────────────────────────────────────────────────────┐
│                 PARENT AGENT                        │
│  (Maintains overall context)                        │
├────────────────────────────────────────────────────┤
│                                                     │
│  Task(subagent_type="researcher", ...)              │
│         │                                           │
│         ▼                                           │
│  ┌─────────────────────┐                            │
│  │   CHILD AGENT       │  ← Isolated context       │
│  │   (Short-lived)     │  ← Returns result to      │
│  │   Research files... │    parent                 │
│  └─────────────────────┘                            │
│         │                                           │
│         ▼                                           │
│  Result incorporated into parent context            │
│                                                     │
└────────────────────────────────────────────────────┘
```

**Use Cases:**
- Exploratory research that would pollute main context
- Parallel investigation of multiple approaches
- Adversarial validation (critic subagent challenges design)
- Specialized skill delegation

**Benefits:**
- Isolated context prevents pollution
- Can run in background
- Results summarized for parent

**Anti-Patterns:**
- Spawning subagents for simple lookups
- Deep nesting (>2 levels)
- Subagents modifying shared state without coordination

---

### 1.4 Cron-Scheduled Autonomous Pattern

**Source:** @mollycantillon (Personal Panopticon)

**Description:** Scheduled Claude Code invocations that run at specified times without human intervention.

**Architecture:**
```
┌─────────────────────────────────────────────────────┐
│                  CRON SCHEDULER                      │
├─────────────────────────────────────────────────────┤
│                                                      │
│  0 6 * * * cd ~/trades && claude "Morning brief"    │
│      │                                               │
│      └──► Runs at 6 AM daily                        │
│                                                      │
│  0 22 * * * cd ~/metrics && claude "Daily report"   │
│      │                                               │
│      └──► Runs at 10 PM daily                       │
│                                                      │
│  Output written to files, notifications sent        │
│                                                      │
└─────────────────────────────────────────────────────┘
```

**Examples:**
- Morning market brief generation
- Nightly analytics summarization
- Scheduled inbox processing
- Automated report generation

**Prerequisites:**
- `caffeinate -i` to keep system awake
- Output capture to files
- Error handling for failed runs

---

## 2. Multi-Agent Patterns

### 2.1 Hub-and-Spoke Pattern (CC Mirror)

**Source:** @nummanali

**Description:** Central orchestrator delegates to specialized workers. Orchestrator NEVER writes code directly - only coordinates.

**Architecture:**
```
╔═══════════════════════════════════════════════════════════════╗
║  YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS.              ║
║  YOU DO NOT EXPLORE CODEBASES.                                ║
║  You are the CONDUCTOR. Your agents play the instruments.     ║
╚═══════════════════════════════════════════════════════════════╝

         ┌─────────────────┐
         │   ORCHESTRATOR  │
         │   (Opus 4.5)    │
         └────────┬────────┘
                  │
                  │ Task(description=..., run_in_background=True)
                  │
    ┌─────────────┼─────────────┐
    │             │             │
    ▼             ▼             ▼
┌───────┐   ┌───────┐   ┌───────┐
│ Coder │   │ Tester│   │ Docs  │
│(Sonnet)│   │(Sonnet)│   │(Haiku)│
└───────┘   └───────┘   └───────┘
```

**Tool Ownership:**

| Role | Tools Used | Tools NEVER Used |
|------|-----------|------------------|
| **Orchestrator** | Read (1-2 files), TaskCreate/Update/List/Get, AskUserQuestion, Task | Write, Edit, Bash, Glob, Grep |
| **Worker** | Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch, LSP | Task, TaskCreate, sub-spawning |

**Worker Preamble Template:**
```
CONTEXT: You are a WORKER agent, not an orchestrator.

RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report your results with absolute file paths

TASK:
[Your specific task here]
```

**Native Task Management:**
```
TaskCreate  → Create with subject, description, acceptance criteria
TaskList    → Filter: status='open', no owner, not blocked
TaskGet     → Full context: description, comments, dependencies
TaskUpdate  → Claim (set owner), add comments, resolve, link references

Dependency Management:
  addBlocks     → This task blocks another
  addBlockedBy  → This task is blocked by another
```

**Actionability:** Medium Lift - Requires CC Mirror setup

---

### 2.2 Factory Pattern (Gas Town)

**Source:** @steve_yegge

**Description:** Not just agents, but an **agent factory** with a full "town" of specialized roles, persistent workers, and ephemeral crews.

**Architecture:**
```
Gas Town (~/.gt)
├── HQ (town-level management)
├── Rigs (project repos)
│   └── Witness (per-rig observer)
├── Workers
│   ├── Mayor (town coordination)
│   ├── Deacon (monitoring/handshakes)
│   ├── Dogs (quality gates)
│   ├── Refinery (task decomposition)
│   ├── Polecat (named persistent workers)
│   └── Crew (ephemeral workers)
└── Overseer (YOU - human with inbox)
```

**The 7 Specialized Roles:**

| Role | Function | Persistence |
|------|----------|-------------|
| **Mayor** | Town-level coordination, resource allocation | Persistent |
| **Deacon** | Monitoring, health checks, handshakes between agents | Persistent |
| **Dogs** | Quality gates, watchdogs, enforcement | Persistent |
| **Refinery** | Task decomposition, story breakdown | On-demand |
| **Polecat** | Named persistent workers with specific expertise | Persistent |
| **Crew** | Ephemeral workers for one-off tasks | Ephemeral |
| **Witness** | Per-rig observer, audit trail | Persistent |

**Philosophy:**
> "You just make up features, design them, file the implementation plans, and sling work around to your polecats and crew."

**Production Requirements:**
- Stage 7+ in dev evolution (10+ agents, hand-managed)
- Significant budget (multiple Claude accounts)
- Comfort with chaos
- tmux expertise

**Related Tools:**
- **gtgui:** Gas Town GUI
- **Roughneck:** Multi Gas Town management
- **Station:** Nats-based coordination layer

**Actionability:** Deep Dive - Heavy investment required

---

### 2.3 Kanban Loop Pattern

**Description:** Single agent operates against a task board, picking one task at a time, completing it, and returning for the next.

**Architecture:**
```
┌─────────────────────────────────┐
│         TASK BOARD               │
│  ┌─────┐ ┌─────┐ ┌─────┐        │
│  │TODO │ │IN   │ │DONE │        │
│  │     │ │PROG │ │     │        │
│  │ T1  │ │     │ │     │        │
│  │ T2  │ │     │ │     │        │
│  │ T3  │ │     │ │     │        │
│  └─────┘ └─────┘ └─────┘        │
└────────────┬────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│  Pick task from TODO            │
│         ↓                       │
│  Move to IN PROGRESS            │
│         ↓                       │
│  Complete task                  │
│         ↓                       │
│  Move to DONE                   │
│         ↓                       │
│  All done? → Exit               │
│  Not done? → Loop               │
└─────────────────────────────────┘
```

**Key Insight (Matt Pocock):**
> "Focus on WHAT it should do at the end, not HOW to get there."

**Implementation:** Can use prd.json with `passes: true/false` as the board.

---

### 2.4 Parallel Branch Pattern

**Description:** Multiple agents work on separate git branches simultaneously. Human merges.

**Architecture:**
```
                    main
                      │
         ┌────────────┼────────────┐
         │            │            │
         ▼            ▼            ▼
    feature-auth  feature-pay  feature-ui
         │            │            │
     Agent 1      Agent 2      Agent 3
    (Terminal 1) (Terminal 2) (Terminal 3)
         │            │            │
         └────────────┼────────────┘
                      │
                      ▼
               Human PR Review
                      │
                      ▼
                    main
```

**Implementation:**
```bash
# Terminal 1
git checkout -b feature-auth
claude "Implement authentication"

# Terminal 2
git checkout -b feature-payments
claude "Implement payment processing"
```

**Conflict Strategy:**
- Each agent owns its branch exclusively
- Human reviews and merges via PR
- No real-time coordination between agents

---

### 2.5 Domain-Isolated Parallel Pattern (Panopticon)

**Source:** @mollycantillon

**Description:** Run 8 parallel Claude Code instances, each owning a life domain, achieving "self-legibility" through comprehensive personal automation.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────────┐
│                    PERSONAL PANOPTICON                            │
│              (8 Domain-Isolated Agent Instances)                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ~/nox        ← Company/product development                      │
│  ~/metrics    ← Analytics/data processing                        │
│  ~/email      ← Communications automation                        │
│  ~/growth     ← Marketing/acquisition                            │
│  ~/trades     ← Personal finance/trading                         │
│  ~/health     ← Fitness/sleep/wellness                           │
│  ~/writing    ← Content creation                                 │
│  ~/personal   ← Life admin                                       │
│                                                                   │
│  Each instance:                                                   │
│  - Operates independently (no cross-contamination)              │
│  - Reads/writes to its directory as persistent memory           │
│  - Can spawn short-lived subagents                              │
│  - Exchanges context through file-based handoffs                │
│  - Falls back to GUI injection when no API exists               │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Unique Value:**
> Frames multi-agent as personal surveillance reversal - you surveilling yourself across all life domains rather than institutions surveilling you.

**Real-World Applications:**
- Customer support: Fully autonomous department
- A/B testing: Auto-generates winning copy
- Email: Inbox zero with auto-drafted replies
- Finances: Overnight brokerage scraping to morning briefs
- Product: Cron pulls Amplitude, cross-refs GitHub, surfaces what needs building

**Actionability:** Deep Dive - Comprehensive life automation

---

## 3. Orchestrator/Worker Separation

### 3.1 The Fundamental Dichotomy

The most critical architectural pattern in multi-agent systems is the **strict separation between orchestration and execution**.

**Two Distinct Roles:**

| Aspect | Orchestrator | Worker |
|--------|--------------|--------|
| **Primary Function** | Coordinate, delegate, monitor | Execute, implement, verify |
| **Code Writing** | NEVER | ALWAYS |
| **Tool Usage** | Task*, Read (minimal) | Read, Write, Edit, Bash, etc. |
| **Context Scope** | Project-wide strategy | Task-specific focus |
| **Spawning** | Spawns workers | Never spawns sub-agents |
| **Model Choice** | Opus (complex reasoning) | Sonnet/Haiku (execution) |

### 3.2 Orchestrator Responsibilities

```
╔════════════════════════════════════════════════════════════════╗
║                    ORCHESTRATOR DUTIES                          ║
╠════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  1. TASK DECOMPOSITION                                          ║
║     - Break features into atomic, verifiable chunks             ║
║     - Define acceptance criteria                                ║
║     - Establish dependencies                                    ║
║                                                                  ║
║  2. WORKER DISPATCH                                              ║
║     - Select appropriate worker type (coder, tester, docs)     ║
║     - Craft clear prompts with context                         ║
║     - Choose run_in_background vs synchronous                  ║
║                                                                  ║
║  3. PROGRESS MONITORING                                          ║
║     - Track task completion status                              ║
║     - Detect blocked tasks                                      ║
║     - Handle worker failures                                    ║
║                                                                  ║
║  4. INTEGRATION                                                  ║
║     - Synthesize worker outputs                                 ║
║     - Resolve conflicts between workers                         ║
║     - Ensure end-to-end coherence                               ║
║                                                                  ║
║  5. HUMAN INTERFACE                                              ║
║     - Report progress                                           ║
║     - Escalate decisions                                        ║
║     - Request clarification via AskUserQuestion                ║
║                                                                  ║
╚════════════════════════════════════════════════════════════════╝
```

### 3.3 Worker Responsibilities

```
╔════════════════════════════════════════════════════════════════╗
║                      WORKER DUTIES                               ║
╠════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  1. TASK EXECUTION                                               ║
║     - Implement exactly what's specified                        ║
║     - Stay within defined scope                                 ║
║     - Use appropriate tools                                     ║
║                                                                  ║
║  2. VERIFICATION                                                 ║
║     - Run tests before reporting complete                       ║
║     - Check type safety                                         ║
║     - Validate against acceptance criteria                      ║
║                                                                  ║
║  3. REPORTING                                                    ║
║     - Return results with absolute file paths                   ║
║     - Document any blockers discovered                          ║
║     - Note learnings for future agents                          ║
║                                                                  ║
║  4. CONSTRAINTS                                                  ║
║     - NEVER spawn sub-agents                                    ║
║     - NEVER modify task definitions                             ║
║     - NEVER work outside assigned scope                         ║
║                                                                  ║
╚════════════════════════════════════════════════════════════════╝
```

### 3.4 Model Selection by Role

| Model | Best Role | Rationale |
|-------|-----------|-----------|
| **Opus 4.5** | Orchestrator | Complex reasoning, strategy, ambiguity handling |
| **Sonnet** | Primary Worker | Good balance of capability and cost |
| **Haiku** | Errand Runner | Fast, cheap lookups and simple transforms |

**Rule of Thumb:**
- Use Haiku for tasks describable in one sentence
- Use Sonnet for implementation following clear patterns
- Use Opus for architecture decisions and ambiguous requirements

---

## 4. Swarm Architectures

### 4.1 The Infinite Orchestra Pattern

**Source:** @0xSero

**Description:** A self-improving orchestrator that runs 24/7 in Docker, with specialized worker profiles and continuous self-improvement loops.

**Architecture:**
```
Central Orchestrator
  └─ Monitors idle + activity
  └─ Triggers self-improvement
         │
         ▼
Specialized Workers (Profiles)
  ├─ Coder → Implementation
  ├─ Architect → Design decisions
  ├─ Research → Find solutions
  ├─ Vision → Visual analysis
  ├─ Docs → Documentation
  └─ Memory → Persistent context
         │
         ▼
Docker Container
  └─ Isolation from host
  └─ 24/7 operation
  └─ Resource limits
```

**Worker Profiles:**
```json
{
  "profiles": [
    { "id": "vision", "purpose": "Visual analysis" },
    { "id": "docs", "purpose": "Documentation research" },
    { "id": "research", "purpose": "Deep investigation" },
    { "id": "coder", "purpose": "Implementation" },
    { "id": "memory", "purpose": "Context persistence" },
    { "id": "architect", "purpose": "System design" }
  ]
}
```

**Caveats:**
- Sequential only (no parallelization yet)
- Conflicts with 5+ agents with 5 subagents each
- No checkpointing - crashes lose progress

---

### 4.2 Container-Isolated Parallel Pattern (AI-Maestro)

**Description:** Run Claude Code instances in isolated Docker containers with shared volumes for communication.

**Architecture:**
```
┌─────────────────────────────────────────┐
│              AI-Maestro                 │
├─────────────────────────────────────────┤
│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │Container│ │Container│ │Container│   │
│  │ Claude1 │ │ Claude2 │ │ Claude3 │   │
│  │ Branch A│ │ Branch B│ │ Branch C│   │
│  └─────────┘ └─────────┘ └─────────┘   │
│       │           │           │         │
│       └───────────┼───────────┘         │
│                   │                     │
│          Shared Docker Volume           │
│         (file-based messaging)          │
└─────────────────────────────────────────┘
```

**Benefits:**
- No branch/file conflicts
- Per-container firewalls
- Persistent caches
- Reproducibility

---

### 4.3 Git Worktree Swarm Pattern

**Description:** Git worktrees create isolated working directories sharing the same repo, enabling parallel agent work.

**Architecture:**
```
Main repo
~/project/
  ├── .git/           # Shared git database
  └── src/            # Main working directory

Worktrees (parallel agent checkouts)
~/project-worktrees/
  ├── feature-a/      # Agent 1's isolated directory
  ├── feature-b/      # Agent 2's isolated directory
  └── bugfix-c/       # Agent 3's isolated directory
```

**Implementation:**
```bash
#!/bin/bash
# spawn-agent.sh - Create worktree and launch agent

BRANCH_NAME=$1
WORKTREE_DIR="../worktrees/$BRANCH_NAME"

# Create branch if doesn't exist
git branch $BRANCH_NAME 2>/dev/null || true

# Create worktree
git worktree add $WORKTREE_DIR $BRANCH_NAME

# Launch Claude in worktree
cd $WORKTREE_DIR && claude "$2"
```

**Worktree + Ralph Combination:**
```bash
# Spawn parallel Ralph loops in worktrees
for feature in auth payments notifications; do
  git worktree add ../wt-$feature $feature-branch
  (cd ../wt-$feature && ./ralph.sh 20) &
done
wait
```

---

### 4.4 Task Queue Swarm Pattern

**Description:** Agents claim tasks from a shared queue, enabling dynamic scaling and load balancing.

**Architecture:**
```
┌─────────────────────────────────────────────────────────┐
│                    TASK QUEUE                            │
│  ┌─────────────────────────────────────────────────┐    │
│  │ Priority 1: Schema changes                       │    │
│  │ Priority 2: API implementation                   │    │
│  │ Priority 3: UI components                        │    │
│  └─────────────────────────────────────────────────┘    │
└────────────────────────┬────────────────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
         ▼               ▼               ▼
    ┌─────────┐    ┌─────────┐    ┌─────────┐
    │ Agent 1 │    │ Agent 2 │    │ Agent 3 │
    │ claims  │    │ claims  │    │ claims  │
    │ & works │    │ & works │    │ & works │
    └─────────┘    └─────────┘    └─────────┘
```

**Features:**
- Atomic task claiming
- Priority ordering
- Dead letter queue for failed tasks
- Auto-scaling based on queue depth

---

## 5. Hierarchical Structures

### 5.1 Two-Level Hierarchy (Orchestrator + Workers)

The most common production pattern:

```
          ┌─────────────────────┐
          │   ORCHESTRATOR       │
          │   (Strategic Level)  │
          └──────────┬──────────┘
                     │
     ┌───────────────┼───────────────┐
     │               │               │
     ▼               ▼               ▼
┌─────────┐   ┌─────────┐   ┌─────────┐
│ Worker  │   │ Worker  │   │ Worker  │
│   A     │   │   B     │   │   C     │
└─────────┘   └─────────┘   └─────────┘
```

---

### 5.2 Three-Level Hierarchy (Gas Town Model)

**Source:** Steve Yegge's Gas Town

```
                ┌─────────────────────┐
                │     OVERSEER        │  ← Human (inbox-based)
                │    (YOU)            │
                └──────────┬──────────┘
                           │
                ┌──────────┴──────────┐
                │       MAYOR         │  ← Town coordination
                └──────────┬──────────┘
                           │
     ┌─────────────────────┼─────────────────────┐
     │                     │                     │
     ▼                     ▼                     ▼
┌─────────┐         ┌─────────┐         ┌─────────┐
│ DEACON  │         │ REFINERY│         │  DOGS   │
│(Monitor)│         │(Decomp) │         │(Quality)│
└────┬────┘         └────┬────┘         └────┬────┘
     │                   │                   │
     ▼                   ▼                   ▼
┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│  POLECATS   │   │    CREW     │   │  WITNESS    │
│ (Persistent)│   │ (Ephemeral) │   │  (Observe)  │
└─────────────┘   └─────────────┘   └─────────────┘
```

---

### 5.3 N-Level Hierarchies (Anti-Pattern Warning)

**Deep nesting (>2 levels) is generally an anti-pattern because:**
- Context passing becomes lossy
- Coordination overhead multiplies
- Debugging becomes extremely difficult
- Latency compounds

**Rule:** If you need 3+ levels, reconsider your decomposition strategy.

---

## 6. Architecture Comparison Matrix

| Pattern | Complexity | Parallelism | Context Isolation | Cost | Use Case |
|---------|------------|-------------|-------------------|------|----------|
| **Interactive Session** | Low | None | N/A | Low | Exploration, debugging |
| **Ralph Loop** | Low-Medium | None (sequential) | Per-iteration | Medium | Overnight feature shipping |
| **Subagent Spawning** | Medium | Limited | Per-subagent | Medium | Research, validation |
| **Hub-and-Spoke** | Medium-High | High | Per-worker | Medium-High | Team projects |
| **Factory (Gas Town)** | Very High | Very High | Per-worker | High | Enterprise scale |
| **Panopticon** | High | High | Per-domain | High | Personal automation |
| **Worktree Swarm** | Medium | High | Per-worktree | Medium | Parallel features |
| **Container Swarm** | High | Very High | Per-container | High | CI/CD integration |
| **Task Queue** | Medium | Scalable | Per-task | Variable | Variable workload |

### Selection Guide

| Scenario | Recommended Pattern |
|----------|---------------------|
| Single feature, overnight | Ralph Loop |
| Multiple life domains | Panopticon (isolated directories) |
| Team project, parallel features | Git worktrees + branch discipline |
| Complex architecture work | Hub-and-Spoke with specialized workers |
| Production app with dependencies | CC Mirror native orchestration |
| Massive scale (10+ agents) | Gas Town factory |
| Content/marketing | Ralph Wiggum Marketer |
| Self-improving system | Infinite Orchestra |
| CI/CD integration | Container-Isolated Parallel |

---

## 7. The Iron Law of Worker Separation

### The Principle

```
╔═══════════════════════════════════════════════════════════════════╗
║                    THE IRON LAW                                    ║
╠═══════════════════════════════════════════════════════════════════╣
║                                                                    ║
║  An agent that ORCHESTRATES must NEVER directly EXECUTE.          ║
║  An agent that EXECUTES must NEVER directly ORCHESTRATE.          ║
║                                                                    ║
║  Mixing these roles leads to:                                     ║
║  - Context pollution                                              ║
║  - Scope creep                                                    ║
║  - Verification bypass                                            ║
║  - Uncontrolled recursion                                         ║
║                                                                    ║
╚═══════════════════════════════════════════════════════════════════╝
```

### Why This Matters

**Problem 1: Context Pollution**

When an orchestrator writes code, it fills its context with implementation details, losing strategic perspective.

```
BAD:
  Orchestrator: "I'll just quickly write this function..."
               [Context now filled with code, loses project overview]

GOOD:
  Orchestrator: "Spawning Sonnet worker to implement login function..."
               [Context remains strategic, worker handles details]
```

**Problem 2: Verification Bypass**

When the implementer is also the verifier, they tend to skip thorough testing.

```
BAD:
  Same Agent: Write code → "Looks good" → Mark complete
              [No independent verification]

GOOD:
  Worker: Write code → Commit
  Orchestrator: Spawn tester worker → Verify → Then mark complete
```

**Problem 3: Uncontrolled Recursion**

Workers that spawn sub-workers create nested contexts that become impossible to track.

```
BAD:
  Worker A → spawns Worker B → spawns Worker C → spawns...
  [Exponential context explosion, coordination nightmare]

GOOD:
  Orchestrator → spawns Worker A (flat)
              → spawns Worker B (flat)
              → spawns Worker C (flat)
  [All workers report directly to orchestrator]
```

### Enforcement Patterns

**1. Explicit Role Declaration in Prompts:**
```
CONTEXT: You are a WORKER agent, not an orchestrator.
RULES:
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Complete ONLY the task described below
```

**2. Tool Restriction by Role:**
```
Orchestrator: Task*, Read (minimal), AskUserQuestion
Worker: Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch
```

**3. Model-Based Separation:**
```
Orchestrator: Opus (expensive, careful use)
Worker: Sonnet (balanced cost/capability)
Errands: Haiku (cheap, fast)
```

---

## 8. Communication Patterns

### 8.1 File-Based Handoffs

**Source:** Panopticon Pattern

Agents communicate through the filesystem:

```
~/shared/
  ├── handoff-agent1-to-agent2.json
  ├── handoff-agent2-to-agent3.json
  └── status.json
```

**Handoff Format:**
```json
{
  "from": "agent1",
  "to": "agent2",
  "timestamp": "2026-01-09T10:30:00Z",
  "context": {
    "completed": ["API schema", "Database models"],
    "next_steps": ["Implement REST endpoints"],
    "blockers": [],
    "notes": "Using FastAPI, see docs in /api/README.md"
  }
}
```

### 8.2 Git-Based Handoffs

**Source:** Ralph Pattern

Progress persists in files, git history provides context:

- **progress.txt** - Append-only learnings log
- **prd.json** - Task status with passes: true/false
- **Git commits** - Each iteration commits, future agents see history

```bash
# Future agent can understand what happened
git log --oneline
git diff HEAD~5
```

### 8.3 Event-Driven Communication

```
┌─────────────────────────────────────────────────────────────┐
│                    Event Bus (File-based)                    │
│  /tmp/agent-events/                                          │
│  ├── task-complete-*.json                                    │
│  ├── conflict-detected-*.json                                │
│  ├── resource-requested-*.json                               │
│  └── checkpoint-*.json                                       │
└─────────────────────────────────────────────────────────────┘
        │                    │                    │
        ▼                    ▼                    ▼
   ┌─────────┐         ┌─────────┐         ┌─────────┐
   │ Agent A │         │ Agent B │         │ Agent C │
   │ watches │         │ watches │         │ watches │
   └─────────┘         └─────────┘         └─────────┘
```

### 8.4 MCP Agent Mail

**Source:** Steve Yegge's Gas Town

Agents collaborate via email-like interfaces:
- No training needed
- Natural "agent village" behavior
- Async by default
- Built on MCP protocol

---

## 9. Isolation Strategies

### 9.1 Directory Isolation

Each agent owns specific directories:

```
agent-frontend/ → Only frontend agent touches
agent-backend/  → Only backend agent touches
shared/         → Read-only for all, write via handoff protocol
```

### 9.2 Branch Isolation

Each agent works on its own branch:

```bash
# Agent 1
git checkout -b feature-auth
claude "Implement auth..."

# Agent 2 (different terminal)
git checkout -b feature-payments
claude "Implement payments..."

# Human merges
git checkout main
git merge feature-auth
git merge feature-payments
```

### 9.3 Worktree Isolation

Git worktrees provide full directory isolation with shared history:

```bash
git worktree add ../feature-auth feature-auth
cd ../feature-auth && claude "..."
```

### 9.4 Container Isolation

Docker containers provide complete environment isolation:

```yaml
services:
  agent-1:
    build: ./agent
    volumes:
      - ./project:/workspace
      - agent-1-data:/data
  agent-2:
    build: ./agent
    volumes:
      - ./project:/workspace
      - agent-2-data:/data
```

### 9.5 Context Window Isolation

Subagents inherently have isolated context windows:

```
Parent Agent Context: [Project overview, strategy]
                     │
                     ▼ Task(...)
Child Agent Context: [Fresh start, task-specific]
                     │
                     ▼ Returns result
Parent Agent: [Receives summary, not full child context]
```

---

## 10. Production Deployment Patterns

### 10.1 Requirements by Scale

| Scale | Agents | Requirements | Example Pattern |
|-------|--------|--------------|-----------------|
| **Solo** | 1-3 | Single machine, tmux | Ralph Loop |
| **Team** | 3-10 | Shared repo, branch discipline | Hub-and-Spoke |
| **Department** | 10-50 | Task queues, monitoring | Gas Town |
| **Enterprise** | 50+ | Container orchestration, central control | Kubernetes + Custom |

### 10.2 Monitoring Tools

| Tool | Function | Install |
|------|----------|---------|
| **Claude HUD** | Context usage, tool activity | `/plugin install claude-hud` |
| **rpai** | tmux agent monitoring TUI | `cargo install rpai` |
| **CC Mirror CLI** | Background task status | Built into CC Mirror |
| **Gas Town Dashboard** | Town-wide agent status | Part of Gas Town |

### 10.3 Cost Control Strategies

**Per-Iteration Limits:**
```bash
./ralph.sh 25  # Maximum 25 iterations
```

**Model Selection by Task:**
```
Architecture decisions: Opus ($$$$)
Implementation: Sonnet ($$)
Simple lookups: Haiku ($)
```

**Budget Caps:**
```json
{
  "budgetLimits": {
    "perStory": 5.00,
    "perPhase": 25.00,
    "total": 100.00
  }
}
```

### 10.4 Failure Recovery

**Checkpointing Protocol:**
```json
{
  "checkpoint": {
    "lastCompleted": "US-003",
    "currentAttempt": "US-004",
    "attemptCount": 2,
    "gitCommit": "abc123f"
  }
}
```

**Graceful Degradation:**
```
Level 1: Retry with backoff (transient errors)
Level 2: Fallback model (Opus → Sonnet)
Level 3: Requeue task (context corruption)
Level 4: Human escalation (repeated failures)
Level 5: Safe shutdown (quota exhausted)
```

---

## Appendix A: Quick Reference Commands

```bash
# Ralph Loop
./ralph.sh 25

# Git Worktree
git worktree add ../feature-branch feature-branch

# CC Mirror
npx cc-mirror quick --provider mirror --name mclaude

# Claude HUD
/plugin install claude-hud

# rpai (tmux manager)
cargo install rpai && rpai

# Gas Town
go install github.com/steveyegge/gastown/cmd/gt@latest
```

---

## Appendix B: Pattern Decision Tree

```
START: "I need to automate development work"
  │
  ├─ Single task, one session?
  │   └─ YES → Interactive Session
  │
  ├─ Multiple sequential tasks, overnight?
  │   └─ YES → Ralph Loop
  │
  ├─ Need parallel work on different features?
  │   ├─ Same repo? → Git Worktrees
  │   └─ Different domains? → Panopticon
  │
  ├─ Complex decomposition needed?
  │   ├─ 2-5 workers → Hub-and-Spoke (CC Mirror)
  │   └─ 10+ workers → Factory (Gas Town)
  │
  ├─ Need specialized roles?
  │   ├─ 2-3 roles → Subagent Spawning
  │   └─ 7+ roles → Gas Town with full cast
  │
  └─ CI/CD integration?
      └─ YES → Container-Isolated Parallel
```

---

## Appendix C: Sources and References

### Primary Sources (From Extractions)

1. **Personal Panopticon** - @mollycantillon
2. **Ralph Wiggum Loop** - Geoffrey Huntley, @mattpocockuk, @ryancarson
3. **CC Mirror Multi-Agent** - @nummanali
4. **Gas Town** - @steve_yegge
5. **Infinite Orchestra** - @0xSero
6. **rpai** - @radoslav11
7. **Sub-Agents Directory** - @shydev69

### Official Documentation

- Anthropic Claude Code: github.com/anthropics/claude-code
- Official Ralph Plugin: github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum
- Claude Code Sub-Agents: docs.anthropic.com/en/docs/claude-code/sub-agents

### Community Tools

- CC Mirror: github.com/numman-ali/cc-mirror
- Gas Town: github.com/steveyegge/gastown
- Orchestra: github.com/0xSero/orchestra
- Claude HUD: github.com/jarrodwatts/claude-hud

---

## Tags

`#architecture` `#taxonomy` `#multi-agent` `#orchestration` `#swarm` `#hierarchy` `#patterns` `#ralph-loop` `#gas-town` `#cc-mirror` `#panopticon` `#hub-and-spoke` `#factory` `#worker-separation` `#iron-law`

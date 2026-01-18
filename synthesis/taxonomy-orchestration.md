---
**DEPRECATED** (2026-01-18)

This content has been superseded by D-FINAL synthesis.

**Replacement:** See D-FINAL-architecture Section 2 for current content.
**Reason:** Content fully covered in D-FINAL with production validation.
**Original preserved below for reference.**

---

# Orchestration Pattern Taxonomy

A comprehensive taxonomy of AI agent orchestration patterns, extracted from community innovations, production implementations, and research documentation.

---

## Table of Contents

1. [Major Pattern Categories](#major-pattern-categories)
   - [Loop-Based Patterns](#1-loop-based-patterns)
   - [Multi-Agent Patterns](#2-multi-agent-patterns)
   - [Isolation Patterns](#3-isolation-patterns)
   - [Communication Patterns](#4-communication-patterns)
   - [Architecture Patterns](#5-architecture-patterns)
   - [Memory Patterns](#6-memory-patterns)
   - [Verification Patterns](#7-verification-patterns)
   - [Monitoring Patterns](#8-monitoring-patterns)
   - [Failure Recovery Patterns](#9-failure-recovery-patterns)
   - [Resource Management Patterns](#10-resource-management-patterns)
2. [Pattern Relationships Map](#pattern-relationships-map)
3. [Completeness Check](#completeness-check)

---

## Major Pattern Categories

### 1. Loop-Based Patterns

#### 1.1 Ralph Wiggum (Core Pattern)
**Source:** Geoffrey Huntley (ghuntley.com/ralph)
**Popularized by:** @mattpocockuk, @ryancarson

**Core Mechanism:**
A bash loop that runs Claude Code repeatedly with fresh context until a completion condition is met. Each iteration gets a clean slate but has access to git history and file-based memory.

```bash
for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  claude "Review prd.json... If complete, output PROMISE COMPLETE HERE"
  if grep -q "PROMISE COMPLETE HERE" output.txt; then break; fi
done
```

**Key Principles:**
- Fresh context per iteration (avoids "context rot")
- External memory via git history + progress.txt
- Verifiable completion (tests must pass)
- Small task sizing (each story completable in one context window)
- Hard stop condition (`<promise>COMPLETE</promise>`)

**Files Required:**
- `ralph.sh` - The loop script
- `prompt.md` - Instructions for each iteration
- `prd.json` - Task list with user stories
- `progress.txt` - Learnings and patterns

**Best For:** Overnight feature shipping, autonomous development pipelines

---

#### 1.2 Compounding Ralph
**Source:** @ryancarson

**Core Mechanism:**
Extension of Ralph that references archived PRDs and learnings from previous runs, creating compounding improvements across sessions.

**Architecture:**
```
archives/
├── run-2026-01-05/
│   ├── prd.json
│   ├── progress.txt
│   └── learnings.md
├── run-2026-01-06/...
```

**Key Enhancement:**
Each run reviews previous archives to learn what worked/failed, applying those learnings to current implementation.

**Relationships:**
- Builds on: Ralph Wiggum (Core)
- Enables: Cross-session learning, parallel Ralph instances

---

#### 1.3 Marathon Ralph
**Source:** @stephen_rayner
**Repo:** github.com/gruckion/marathon-ralph

**Core Mechanism:**
Extended Ralph for building entire apps with unit and E2E tests following full SDLC methodology.

**Key Difference:** Focus on complete application delivery vs. feature-level work.

---

#### 1.4 Dr. Ralph
**Source:** @MikeEndale

**Core Mechanism:**
Multi-phase version with confidence thresholds (80%+ before advancing to next phase).

**Key Enhancement:** Quality gates between phases prevent propagation of low-confidence work.

---

#### 1.5 Lisa
**Source:** @petruarakiss
**Repo:** github.com/Arakiss/lisa

**Core Mechanism:**
Ralph fork with enhanced logging and progress tracking capabilities.

---

#### 1.6 Zeroshot
**Source:** @Eivind1384955
**Repo:** github.com/covibes/zeroshot

**Core Mechanism:**
"Next gen version" of Ralph loops with streamlined execution.

---

#### 1.7 Kanban Loop Pattern
**Source:** Derived from Ralph principles

**Core Mechanism:**
Single agent picks from a task board, completes task, returns to board until empty.

```
Pick task → Complete task → Back to board → All done? → Exit/Loop
```

**Key Insight:** Focus on WHAT it should do at the end, not HOW to get there.

---

### 2. Multi-Agent Patterns

#### 2.1 Personal Panopticon
**Source:** @mollycantillon

**Core Mechanism:**
Run 8+ parallel isolated Claude Code instances, each owning a life/work domain, to achieve "self-legibility" across all personal data.

**Architecture:**
```
~/nox        # Company/product
~/metrics    # Analytics/data
~/email      # Communications
~/growth     # Marketing/acquisition
~/trades     # Personal finance/trading
~/health     # Fitness/sleep/wellness
~/writing    # Content creation
~/personal   # Life admin
```

**Key Features:**
- **Isolation:** Each instance operates independently, no cross-contamination
- **Subagents:** Spawn short-lived agents for specific tasks
- **Handoffs:** Exchange context through explicit file-based handoffs
- **Filesystem as Memory:** Read/write to their directory as persistent memory
- **GUI fallback:** Inject mouse/keystroke events for desktop app control

**Unique Value:** Frames multi-agent as personal surveillance reversal.

---

#### 2.2 CC Mirror (Hub-and-Spoke Orchestration)
**Source:** @nummanali
**Repo:** github.com/numman-ali/cc-mirror

**Core Mechanism:**
Central orchestrator that delegates to specialized worker agents, never touching code directly.

**Philosophy:**
```
╔═══════════════════════════════════════════════════════════════╗
║  YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS.              ║
║  YOU DO NOT EXPLORE CODEBASES.                                ║
║  You are the CONDUCTOR. Your agents play the instruments.     ║
╚═══════════════════════════════════════════════════════════════╝
```

**Tool Ownership:**
| Role | Tools |
|------|-------|
| Orchestrator | Read (1-2 files), Task*, AskUserQuestion |
| Workers | Read, Write, Edit, Bash, Glob, Grep, WebFetch, LSP |

**Task Management:**
```
TaskCreate  → Create with subject, description, acceptance criteria
TaskList    → Filter by status, owner, blocked state
TaskGet     → Full context with dependencies
TaskUpdate  → Claim ownership, add comments, resolve, link
```

**Dependency Features:**
- `addBlocks` - This task blocks another
- `addBlockedBy` - This task is blocked by another

**Domain Reference Loading:**
| Task Type | Reference |
|-----------|-----------|
| Feature, bug, refactor | software-development.md |
| PR review, security | code-review.md |
| Codebase exploration | research.md |
| Test generation | testing.md |

---

#### 2.3 Gas Town (Agent Factory)
**Source:** @steve_yegge
**Repo:** github.com/steveyegge/gastown

**Core Mechanism:**
Not just agents, but an **agent factory** with specialized roles and town-level coordination.

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

**Role Definitions:**
| Role | Purpose |
|------|---------|
| Mayor | Town-wide coordination |
| Deacon | Monitoring and handshakes between agents |
| Dogs | Quality gates and watchdogs |
| Refinery | Task decomposition |
| Polecat | Named persistent workers |
| Crew | Ephemeral workers |
| Witness | Per-rig observer |
| Overseer | Human with inbox |

**Philosophy:** "You just make up features, design them, file the implementation plans, and sling work around to your polecats and crew."

**Requirements:**
- Stage 7+ in dev evolution (10+ agents, hand-managed)
- Comfort with chaos
- Significant budget
- tmux proficiency

---

#### 2.4 Infinite Orchestra
**Source:** @0xSero
**Repo:** github.com/0xSero/orchestra

**Core Mechanism:**
Self-improving orchestrator running 24/7 in Docker with specialized worker profiles.

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

#### 2.5 Parallel Task Executor
**Source:** @LLMJunky

**Core Mechanism:**
Parse plan file, extract tasks, execute in parallel using subagents.

**Process:**
1. Read plan file (extract phase tasks)
2. For each task: Launch background subagent
3. Prompt template: "You are a focused task agent..."
4. Monitor for completion
5. Report all results

---

#### 2.6 AI-Maestro (Container-Isolated Parallelism)
**Source:** Derived from community patterns

**Core Mechanism:**
Run Claude Code instances in isolated Docker containers for heavy parallel work.

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
│          Shared Docker Volume           │
│         (file-based messaging)          │
└─────────────────────────────────────────┘
```

**Benefits:** No branch/file conflicts, per-container firewalls, persistent caches, reproducibility

---

#### 2.7 Adversarial Speccing Pattern
**Source:** Derived from CC Mirror

**Core Mechanism:**
Two subagents debate complex features:
1. **Architect** subagent proposes design
2. **Critic** subagent challenges from specific persona

**Critic Personas:**
- DHH (simplicity, convention over configuration)
- Security engineer (attack vectors, data protection)
- Performance engineer (latency, resource usage)
- UX advocate (user experience implications)

**Process:**
1. Architect proposes
2. Critic finds flaws
3. Architect addresses
4. Iterate until critic approves

---

#### 2.8 AutoGen-Style Group Chat
**Source:** Microsoft AutoGen patterns adapted for Claude Code

**Core Mechanism:**
Multiple agents share a conversation thread, taking turns based on round-robin, topic relevance, or orchestrator direction.

**Use Cases:**
- Architecture design reviews
- Bug investigation with multiple perspectives
- Requirements disambiguation

---

#### 2.9 CrewAI-Style Role Definitions
**Source:** CrewAI patterns adapted for Claude Code

**Core Mechanism:**
Agents defined with explicit roles, goals, and backstories.

```yaml
agents:
  - role: "Senior Software Architect"
    goal: "Design scalable, maintainable system architectures"
    backstory: |
      You have 15 years of experience designing systems at
      companies like Google and Stripe...
    tools: ["read", "websearch", "write"]
```

---

#### 2.10 LangGraph State Machine Pattern
**Source:** LangGraph patterns adapted for Claude Code

**Core Mechanism:**
Model multi-agent workflows as state machines with explicit transitions.

```
┌─────────┐     ┌─────────┐     ┌─────────┐
│  PLAN   │────▶│  CODE   │────▶│  TEST   │
└─────────┘     └─────────┘     └─────────┘
                     │               │
                ┌─────────┐          │
                │ REVIEW  │◀─────────┘
                └─────────┘
                     │
              Pass   │  Fail → back to CODE
                     ▼
               ┌─────────┐
               │  DONE   │
               └─────────┘
```

---

### 3. Isolation Patterns

#### 3.1 Domain-Isolated Parallel Instances
**Source:** Panopticon pattern

**Core Mechanism:**
Run separate Claude Code processes in different directories, each specializing in a domain.

```bash
# Terminal 1
cd ~/project/frontend && claude

# Terminal 2
cd ~/project/backend && claude

# Terminal 3
cd ~/project/docs && claude
```

**Key Insight:** Filesystem isolation prevents context pollution between agents.

---

#### 3.2 Branch-Based Parallel Work
**Source:** Boris Cherny's workflow philosophy

**Core Mechanism:**
Each agent works on its own git branch.

```bash
git checkout -b feature-auth
claude "Implement authentication"

# In another terminal
git checkout -b feature-payments
claude "Implement payment processing"
```

**Merge Strategy:** Human reviews and resolves conflicts during PR.

---

#### 3.3 Git Worktree Isolation
**Source:** Community innovation

**Core Mechanism:**
Git worktrees create isolated working directories sharing the same repo.

```bash
# Main repo
~/project/
  ├── .git/           # Shared git database
  └── src/            # Main working directory

# Worktrees (parallel agent checkouts)
~/project-worktrees/
  ├── feature-a/      # Agent 1's isolated directory
  ├── feature-b/      # Agent 2's isolated directory
  └── bugfix-c/       # Agent 3's isolated directory
```

**Lifecycle Management:**
- Creation with automatic cleanup tracking
- Stale worktree detection (24+ hours old)
- Atomic merge back to main
- Shared symlinks for common configuration

**Worktree + Ralph Combination:**
```bash
for feature in auth payments notifications; do
  git worktree add ../wt-$feature $feature-branch
  (cd ../wt-$feature && ./ralph.sh 20) &
done
wait
```

---

#### 3.4 Directory Ownership Pattern
**Source:** Conflict resolution strategies

**Core Mechanism:**
Each agent owns specific directories exclusively.

```
agent-frontend/ → Only frontend agent touches
agent-backend/  → Only backend agent touches
shared/         → Read-only for all, write via handoff protocol
```

---

### 4. Communication Patterns

#### 4.1 File-Based Handoffs
**Source:** Panopticon pattern

**Core Mechanism:**
Agents communicate through the filesystem.

```json
// handoff-agent1-to-agent2.json
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

---

#### 4.2 Git-Based Handoffs
**Source:** Ralph pattern

**Core Mechanism:**
Progress persists in files, git history provides context.

**Components:**
- **progress.txt** - Append-only learnings log
- **prd.json** - Task status with passes: true/false
- **Git commits** - Each iteration commits, future agents see history

---

#### 4.3 Docker Volume Handoffs
**Source:** AI-Maestro pattern

**Core Mechanism:**
```
Agent 1 writes → /shared/agent1-output.json
Agent 2 reads  ← /shared/agent1-output.json
```

Lightweight, no external dependencies, not real-time.

---

#### 4.4 MCP Agent Mail
**Source:** Steve Yegge's Gas Town
**Repo:** github.com/Dicklesworthstone/mcp_agent_mail

**Core Mechanism:**
Agents collaborate via email-like interfaces.
- No training needed
- Natural "agent village" behavior
- Async by default

---

#### 4.5 Message Queue Pattern (FIFO Pipes)
**Source:** Advanced patterns research

**Core Mechanism:**
Lightweight message passing using FIFO pipes for real-time coordination.

```bash
AGENT_INBOX="/tmp/agent-$AGENT_ID-inbox"
mkfifo "$AGENT_INBOX"

# Send: echo message > /tmp/agent-target-inbox
# Receive: read message < "$AGENT_INBOX"
```

---

#### 4.6 Event-Driven Architecture
**Source:** Advanced patterns research

**Core Mechanism:**
File-based event bus with agents watching for specific event types.

```
Event Bus: /tmp/agent-events/
├── task-complete-*.json
├── conflict-detected-*.json
├── resource-requested-*.json
└── checkpoint-*.json
```

**Event Types:**
- task-complete
- conflict-detected
- resource-requested
- checkpoint

---

#### 4.7 Consensus Protocol
**Source:** Advanced patterns research

**Core Mechanism:**
Multiple agents must agree on decisions (architecture, design choices).

**Process:**
1. Orchestrator broadcasts decision request
2. Each agent writes proposal to /proposals/agent-{id}.json
3. Deadline expires or all respond
4. Orchestrator aggregates
5. Consensus (>66%) → proceed; No consensus → escalate

---

### 5. Architecture Patterns

#### 5.1 Hub-and-Spoke
**Core Mechanism:**
Central orchestrator delegates to specialized workers.

```
         ┌─────────────────┐
         │   Orchestrator  │
         └────────┬────────┘
                  │
    ┌─────────────┼─────────────┐
    │             │             │
    ▼             ▼             ▼
┌───────┐   ┌───────┐   ┌───────┐
│ Coder │   │ Tester│   │ Docs  │
└───────┘   └───────┘   └───────┘
```

**Best For:** Clear task decomposition, predictable workflow, centralized monitoring

**Examples:** CC Mirror, Gas Town (Deacon role)

---

#### 5.2 Peer-to-Peer
**Core Mechanism:**
Agents communicate directly without central coordinator.

```
┌───────┐     ┌───────┐
│Agent 1│◄───►│Agent 2│
└───────┘     └───────┘
    ▲             ▲
    └──────┬──────┘
           ▼
      ┌───────┐
      │Agent 3│
      └───────┘
```

**Best For:** Emergent collaboration, flexible workflows, resilience

**Challenges:** Harder to monitor, potential for deadlocks

---

#### 5.3 Factory Pattern
**Source:** Gas Town

**Core Mechanism:**
Not just agents, but an agent factory that produces specialized workers on demand.

**Characteristics:**
- Named persistent workers (Polecats)
- Ephemeral workers (Crew)
- Role-based specialization
- Town-level coordination

---

### 6. Memory Patterns

#### 6.1 Hierarchical Memory Architecture
**Source:** Claude Code native implementation

**Layers:**
```
Layer 1: Enterprise Policy
  /Library/Application Support/ClaudeCode/CLAUDE.md
  Organization-wide security policies, compliance

Layer 2: Project Memory
  ./CLAUDE.md or ./.claude/CLAUDE.md
  Architecture decisions, coding standards, team workflows

Layer 3: Modular Rules
  ./.claude/rules/*.md
  Path-specific rules with frontmatter targeting

Layer 4: Personal + Local
  ~/.claude/CLAUDE.md (user global)
  ./CLAUDE.local.md (project local, gitignored)
  Agent-specific context, sandbox URLs, credentials
```

---

#### 6.2 Dynamic Memory with File Imports
**Source:** CC Mirror pattern

**Core Mechanism:**
CLAUDE.md dynamically imports context files.

```markdown
## Standard References
@docs/architecture.md
@docs/api-conventions.md

## Multi-Agent Context (dynamic)
@.agent-status/current-assignments.md
@.agent-status/blocked-files.md
@.agent-status/handoff-queue.md
```

---

#### 6.3 Artifact-Based Persistence
**Source:** Ralph patterns

**Components:**
- **progress.txt** — Session memory for Ralph iterations
- **AGENTS.md** — Permanent docs for humans and future agents
- **Git history** — Long-term state
- **prd.json** — Current task state

---

#### 6.4 Shared Rules, Agent-Specific Context
**Source:** Multi-agent patterns research

**Pattern:**
- Shared CLAUDE.md for all agents
- Agent-specific CLAUDE.local.md per worktree/agent

```markdown
# Agent: Coder-1
ID: coder-1-abc123
Worktree: ../worktrees/feature-auth
Focus: Authentication module only

# Do Not Touch
- src/api/payments/* (owned by coder-2)
```

---

### 7. Verification Patterns

#### 7.1 CI Green Enforcement
**Source:** Ralph patterns

**Core Mechanism:**
Tests + types must pass every commit. No broken code inheritance.

**Requirements:**
1. Type checking: `npm run typecheck`
2. Unit tests: `npm test`
3. Lint: `npm run lint`
4. CI green on every commit

---

#### 7.2 Browser Automation Verification
**Source:** @mattpocockuk, @weswinder

**Core Mechanism:**
Use Playwright MCP for UI verification. Not complete until verified with screenshot.

```bash
# Playwright verification
npx playwright test
# Or use dev-browser skill for visual verification
```

---

#### 7.3 Multi-Phase Verification Protocol
**Source:** Dr. Ralph pattern

**Core Mechanism:**
80%+ confidence threshold before advancing phases.

---

#### 7.4 Cross-Agent Verification
**Source:** Multi-agent patterns research

**Process:**
1. Per-agent: Type check, unit tests, lint, self-review
2. Cross-agent: Integration tests after merge
3. Human checkpoints for: DB migrations, API breaking changes, security-sensitive code

---

### 8. Monitoring Patterns

#### 8.1 Claude HUD Plugin
**Source:** @jarrodwatts
**Repo:** github.com/jarrodwatts/claude-hud

**Features:**
- Context remaining (color-coded bar)
- What tools are executing
- Which subagents are running
- To-do list progress

**Output Example:**
```
[Opus 4.5] ████████░░ 35% | 1 MCPs | ⏳ 1m
✓ Read x2 | ✓ WebFetch x1 | ✓ Skill x1 | ✓ Edit x1
```

---

#### 8.2 rpai - tmux Multi-Agent Manager
**Source:** @radoslav11
**Repo:** cargo install rpai

**Features:**
- Scans tmux panes for running AI agents
- TUI with agent list, status, output previews
- Jump to any agent with selection
- Monitor all agents from one view

---

#### 8.3 Agent Health Metrics
**Source:** Advanced patterns research

**Metrics Collected:**
- Heartbeat timestamp
- Status (running/stopped)
- Context usage percentage
- Tokens consumed
- Tasks completed
- Current task
- Error count
- Git branch
- Uncommitted changes
- Memory usage

---

#### 8.4 Distributed Tracing
**Source:** Advanced patterns research

**Core Mechanism:**
Trace context propagation across multi-agent workflows with span tracking.

**Trace Format:**
```
Trace ID: abc123
├─ Span: Parse requirements        [0ms - 500ms]
├─ Span: Decompose tasks           [500ms - 1200ms]
├─ Span: Agent-Architect           [1200ms - 15000ms]
│   ├─ Read: src/config.ts
│   └─ Write: docs/architecture.md
└─ Span: Agent-Coder-1             [15000ms - 45000ms]
```

---

#### 8.5 Anomaly Detection
**Source:** Advanced patterns research

**Anomaly Types:**
- **Resource:** Context >90% without completion, 3x normal token consumption
- **Behavioral:** Circular edits, increasing test failures, excessive subagents
- **Coordination:** Deadlocks, conflicting edits, unconsumed handoffs

**Response Actions:** Alert → Throttle → Checkpoint → Terminate → Escalate

---

### 9. Failure Recovery Patterns

#### 9.1 Checkpointing
**Source:** Advanced patterns research

**Core Mechanism:**
Periodic save of agent state for recovery.

**Saved State:**
- Git state (stash ref, commit ref, staged/unstaged diffs)
- Agent state (progress.txt, prd.json, status)

**Auto-checkpoint:** Every N iterations

---

#### 9.2 Graceful Degradation
**Source:** Advanced patterns research

**Levels:**
1. **Retry with Backoff** - Transient errors, rate limiting
2. **Fallback Model** - Opus → Sonnet → Haiku
3. **Requeue Task** - Context corruption, invalid state
4. **Human Escalation** - Repeated failures, conflicts
5. **Safe Shutdown** - Quota exhausted, infrastructure failure

---

#### 9.3 Dead Letter Queue
**Source:** Advanced patterns research

**Core Mechanism:**
Tasks that repeatedly fail (3+ times) move to dead letter queue for human review.

---

#### 9.4 Circuit Breaker
**Source:** Advanced patterns research

**States:**
- CLOSED - Normal operation
- OPEN - Failing fast (after N failures)
- HALF_OPEN - Testing recovery (after timeout)

---

#### 9.5 Semantic Merge for Conflicts
**Source:** Advanced patterns research

**Core Mechanism:**
Use Claude to resolve merge conflicts by understanding intent of both changes.

**Process:**
1. Detect conflict markers
2. Analyze both versions semantically
3. Consider dependencies and side effects
4. Provide merged result with explanation

---

#### 9.6 Optimistic Locking
**Source:** Advanced patterns research

**Core Mechanism:**
Record expected file version before editing, check validity before commit.

---

### 10. Resource Management Patterns

#### 10.1 Model Selection Optimization
**Source:** Multi-agent patterns research

**Decision Matrix:**
| Task Characteristic | Recommended Model |
|---------------------|-------------------|
| File lookup, simple grep | Haiku |
| Code generation with patterns | Sonnet |
| Architecture decisions | Opus |
| Test generation | Sonnet |
| Security review | Opus |
| Documentation | Haiku/Sonnet |
| Debugging complex issues | Opus |

---

#### 10.2 Task Queue with Priority
**Source:** Advanced patterns research

**Core Mechanism:**
Priority queue for agent task distribution.

```
Queue directories:
├── pending/      # Waiting tasks (priority-sorted)
├── in-progress/  # Claimed by agents
├── completed/    # Finished tasks
└── failed/       # Error tasks
```

---

#### 10.3 Dynamic Agent Scaling
**Source:** Advanced patterns research

**Core Mechanism:**
Auto-scale agent pool based on queue depth.

- Scale up when queue depth > threshold
- Scale down when queue depth < threshold
- Maintain min/max agent limits

---

#### 10.4 Resource-Aware Scheduling
**Source:** Advanced patterns research

**Agent Profiles:**
| Profile | Model | Max Tokens | Concurrent | Use Case |
|---------|-------|------------|------------|----------|
| Light | Haiku | 4K | 10 | Lookups, simple transforms |
| Medium | Sonnet | 16K | 5 | Implementation, testing |
| Heavy | Opus | 32K+ | 2 | Architecture, complex reasoning |

---

#### 10.5 Caching Strategies
**Source:** Advanced patterns research

**Core Mechanism:**
Cache expensive operations (codebase analysis, web searches) with TTL.

---

#### 10.6 Token Usage Tracking
**Source:** Advanced patterns research

**Tracked Metrics:**
- Input tokens per agent
- Output tokens per agent
- Cost per model (Opus: $15/$75 per 1M, Sonnet: $3/$15, Haiku: $0.25/$1.25)
- Daily/weekly reports

---

## Pattern Relationships Map

```
                    ┌─────────────────────────────┐
                    │        BASE PATTERNS        │
                    └─────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐   ┌───────────────────┐   ┌─────────────────┐
│  RALPH LOOP   │   │  MULTI-AGENT      │   │  ISOLATION      │
│  (Single)     │   │  (Parallel)       │   │  PATTERNS       │
└───────┬───────┘   └─────────┬─────────┘   └────────┬────────┘
        │                     │                      │
        │    ┌────────────────┼───────────────┐      │
        │    │                │               │      │
        ▼    ▼                ▼               ▼      ▼
┌─────────────────┐  ┌─────────────┐  ┌─────────────────┐
│ Compounding     │  │ CC Mirror   │  │ Git Worktrees   │
│ Ralph           │  │ Hub-Spoke   │  │                 │
└────────┬────────┘  └──────┬──────┘  └────────┬────────┘
         │                  │                   │
         │                  ▼                   │
         │         ┌─────────────────┐          │
         │         │    Gas Town     │          │
         │         │    (Factory)    │          │
         │         └────────┬────────┘          │
         │                  │                   │
         └──────────────────┼───────────────────┘
                            │
                            ▼
            ┌─────────────────────────────┐
            │    SUPPORT PATTERNS         │
            ├─────────────────────────────┤
            │ • Communication (Handoffs)  │
            │ • Memory (Hierarchical)     │
            │ • Verification (CI Green)   │
            │ • Monitoring (HUD, Tracing) │
            │ • Recovery (Checkpoint)     │
            │ • Resources (Scaling)       │
            └─────────────────────────────┘
```

### Relationship Types

#### Builds-On Relationships
| Pattern | Builds On |
|---------|-----------|
| Compounding Ralph | Ralph Wiggum Core |
| Marathon Ralph | Ralph Wiggum Core |
| Dr. Ralph | Ralph Wiggum Core |
| Lisa | Ralph Wiggum Core |
| Zeroshot | Ralph Wiggum Core |
| CC Mirror | Hub-and-Spoke Architecture |
| Gas Town | CC Mirror + Factory Pattern |
| AI-Maestro | Container Isolation + Parallelism |

#### Enables Relationships
| Pattern | Enables |
|---------|---------|
| Ralph Wiggum | Overnight shipping, AFK development |
| Compounding Ralph | Cross-session learning |
| Git Worktrees | Parallel Ralph instances |
| CC Mirror | Task dependency management |
| Gas Town | Massive scale (10+ agents) |
| Checkpointing | Failure recovery |
| Anomaly Detection | Proactive intervention |

#### Conflicts-With Relationships
| Pattern A | Pattern B | Conflict |
|-----------|-----------|----------|
| Peer-to-Peer | Hub-and-Spoke | Architectural incompatibility |
| Fresh Context (Ralph) | Long Context | Memory strategy clash |
| Parallel Editing | File Locking | Concurrency model |

#### Combines-Well-With
| Pattern A | Pattern B | Synergy |
|-----------|-----------|---------|
| Ralph | Git Worktrees | Parallel feature development |
| CC Mirror | Adversarial Speccing | Quality architecture |
| Any Multi-Agent | Distributed Tracing | Observability |
| Any Loop | Checkpointing | Reliability |
| Any Pattern | CI Green Enforcement | Quality gates |

---

## Agent Specialization Reference

| Role | Purpose | Tools/Skills |
|------|---------|--------------|
| **Researcher** | Deep investigation, codebase exploration | Glob, Grep, Read, WebSearch |
| **Coder** | Implementation | Write, Edit, Bash |
| **Tester** | Verification, test generation | Bash (test runners), Read |
| **Reviewer** | Code review, security analysis | Read, Grep, LSP |
| **Architect** | System design, decisions | Read, WebSearch |
| **Docs** | Documentation, README generation | Write, Read |
| **Vision** | Visual analysis (screenshots, UI) | Browser tools |
| **Memory** | Context persistence across sessions | SQLite, file operations |

---

## Task Sizing Guidelines

| Size | Characteristics | Example |
|------|-----------------|---------|
| Too Small | Overhead exceeds value | "Add a comment to line 42" |
| Just Right | One context window, verifiable | "Implement User model with these fields" |
| Too Large | Context collapse risk | "Build the entire backend" |

**Sweet Spot:**
- ~100-500 lines of code change
- ~1-3 files modified
- ~30-60 minutes equivalent human time
- Clear success criteria

---

## Completeness Check

### Patterns Fully Documented
- [x] Ralph Wiggum (Core)
- [x] Compounding Ralph
- [x] Marathon Ralph
- [x] Dr. Ralph
- [x] Lisa
- [x] Zeroshot
- [x] Kanban Loop
- [x] Personal Panopticon
- [x] CC Mirror
- [x] Gas Town
- [x] Infinite Orchestra
- [x] Parallel Task Executor
- [x] AI-Maestro
- [x] Adversarial Speccing
- [x] All Architecture Patterns
- [x] All Communication Patterns
- [x] All Isolation Patterns
- [x] All Memory Patterns
- [x] All Verification Patterns
- [x] All Monitoring Patterns
- [x] All Recovery Patterns
- [x] All Resource Management Patterns

### Patterns Mentioned But Less Detailed
| Pattern | Source | Notes |
|---------|--------|-------|
| Roughneck | github.com/mjtechguy/roughneck | Multi Gas Town management |
| Station | github.com/cloudshipai/station | Nats-based coordination |
| Gas Town GUI | github.com/TRIBE-INC/gtgui | GUI for Gas Town |
| Aider Architect Mode | github.com/paul-gauthier/aider | Planning before implementation |
| OpenCode / Open Orchestra | 0xSero | Orchestra runs on OpenCode |
| Cursor CLI Port | @agrimsingh | Ralph ported to Cursor |

### Tools and Extensions Referenced
| Tool | Purpose | Source |
|------|---------|--------|
| Claude HUD | Context monitoring | github.com/jarrodwatts/claude-hud |
| Claude Mem | Persistent memory | github.com/thedotmack/claude-mem |
| rpai | tmux agent manager | cargo install rpai |
| MCP Agent Mail | Agent communication | github.com/Dicklesworthstone/mcp_agent_mail |

### Research Papers Referenced
- "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation" (Microsoft)
- "MetaGPT: Meta Programming for Multi-Agent Collaborative Framework" (DeepWisdom)
- "CAMEL: Communicative Agents for Mind Exploration of Large Language Model Society"

---

## Quick Reference Commands

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

## Pattern Selection Guide

| Scenario | Recommended Pattern |
|----------|---------------------|
| Single feature, overnight | Ralph Loop |
| Multiple life domains | Panopticon (isolated directories) |
| Team project, parallel features | Git worktrees + branch discipline |
| Complex architecture work | Hub-and-spoke with specialized workers |
| Production app with dependencies | CC Mirror native orchestration |
| Massive scale (10+ agents) | Gas Town factory |
| Content/marketing | Ralph Wiggum Marketer |
| Self-improving system | Infinite Orchestra |
| High-stakes decisions | Adversarial Speccing |
| Long-running production | Containerized Agent Pools + Kubernetes |

---

## Tags Index

`#ralph-wiggum` `#cc-mirror` `#gas-town` `#panopticon` `#infinite-orchestra` `#hub-and-spoke` `#peer-to-peer` `#factory-pattern` `#git-worktrees` `#file-handoffs` `#mcp-agent-mail` `#event-driven` `#consensus` `#hierarchical-memory` `#ci-green` `#playwright` `#claude-hud` `#rpai` `#distributed-tracing` `#anomaly-detection` `#checkpointing` `#circuit-breaker` `#dead-letter-queue` `#autoscaling` `#model-selection` `#token-tracking`

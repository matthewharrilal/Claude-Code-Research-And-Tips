# Multi-Agent Architecture: Complete Mastery Guide

> **The definitive guide to multi-agent orchestration with Claude Code.** Synthesized from CC Mirror, Gas Town, Infinite Orchestra, community patterns, and production deployments.

---

## Table of Contents

1. [The Iron Law of Worker Separation](#the-iron-law-of-worker-separation)
2. [Architecture Comparison](#architecture-comparison)
   - [CC Mirror (Hub-and-Spoke)](#cc-mirror-hub-and-spoke)
   - [Gas Town (Agent Factory)](#gas-town-agent-factory)
   - [Infinite Orchestra (Self-Improving)](#infinite-orchestra-self-improving)
   - [Ralph Wiggum (Iterative Loop)](#ralph-wiggum-iterative-loop)
   - [Parallel Swarms (Worktrees)](#parallel-swarms-worktrees)
3. [Architecture Selection Guide](#architecture-selection-guide)
4. [Common Multi-Agent Pitfalls](#common-multi-agent-pitfalls)
5. [Scaling Considerations](#scaling-considerations)
6. [Quick Reference Commands](#quick-reference-commands)
7. [Production Deployment Patterns](#production-deployment-patterns)

---

## The Iron Law of Worker Separation

```
+===============================================================+
|                                                               |
|   ORCHESTRATORS COORDINATE. WORKERS EXECUTE. NEVER MIX.      |
|                                                               |
|   You are the CONDUCTOR. Your agents play the instruments.   |
|                                                               |
+===============================================================+
```

This is the foundational principle of all multi-agent architecture. Violating it causes:
- **Worker recursion** (agents spawning infinite sub-agents)
- **Context explosion** (workers consuming orchestrator context)
- **Coordination failures** (no central authority tracking state)

### The Separation in Practice

| Role | What They Do | What They DON'T Do |
|------|-------------|-------------------|
| **Orchestrator** | Decompose tasks, assign workers, track progress, synthesize results | Write code, run commands, explore codebases |
| **Workers** | Execute specific tasks using tools, report results | Spawn sub-agents, manage task graphs, make architectural decisions |

### Tool Ownership

**Orchestrator Uses Directly:**
- `Read` (references, guides, agent outputs - 1-2 files max)
- `TaskCreate`, `TaskUpdate`, `TaskGet`, `TaskList`
- `AskUserQuestion`
- `Task` (to spawn workers)

**Workers Use Directly:**
- `Read`, `Write`, `Edit`, `Bash`
- `Glob`, `Grep`, `WebFetch`, `WebSearch`, `LSP`
- **CAN'T:** Spawn sub-agents or manage task graph

### The Worker Preamble Template

Every worker must receive explicit boundaries:

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

---

## Architecture Comparison

### Architecture Spectrum

```
SIMPLE <-----------------------------------------> COMPLEX

[Ralph Loop]    [CC Mirror]    [Orchestra]    [Gas Town]
     |               |              |              |
Single agent    Multi-agent    Self-improving  Agent factory
Retry loop      Task-based     Docker-based    Role-based
Bash script     Native CC      Specialized     Full system
```

---

### CC Mirror (Hub-and-Spoke)

**Source:** @nummanali (Numman Ali)
**Repo:** github.com/numman-ali/cc-mirror

#### What It Is

CC Mirror unlocks Claude Code's disabled native multi-agent orchestration in an isolated environment. It exposes hidden task management primitives.

#### How It Works

```
           +------------------+
           |   Orchestrator   |
           +--------+---------+
                    |
    +---------------+---------------+
    |               |               |
    v               v               v
+-------+       +-------+       +-------+
| Coder |       | Tester|       | Docs  |
+-------+       +-------+       +-------+
```

The orchestrator:
1. Receives high-level goals
2. Decomposes into tasks with `TaskCreate`
3. Sets dependencies with `addBlocks`/`addBlockedBy`
4. Spawns workers for each task
5. Monitors completion with `TaskList`
6. Synthesizes results

#### Task Management API

```
TaskCreate  -> Create with subject, description, acceptance criteria
TaskList    -> Filter: status='open', no owner, not blocked
TaskGet     -> Full context: description, comments, dependencies
TaskUpdate  -> Claim (set owner), add comments, resolve, link references
```

**Dependency Management:**
```
addBlocks     -> This task blocks another
addBlockedBy  -> This task is blocked by another
```

**Demo Output:**
```
Tasks:
[done] #1 Design API architecture
[ ]    #2 Create project structure
[ ]    #3 Implement data models
[wait] #4 Implement REST API endpoints (blocked by #3)
[wait] #5 Write integration tests (blocked by #4)
```

#### Quick Start

```bash
# Step 1: Create isolated variant
npx cc-mirror quick --provider mirror --name mclaude

# Step 2: Launch it
mclaude

# Step 3: In the terminal
"Load the orchestration skill and initiate"
```

---

#### Checkpoint: After CC Mirror Quick Start

**Where you are:** You have an isolated Claude variant with multi-agent orchestration enabled.
**What this enables:** Native task management (TaskCreate, TaskList, TaskUpdate) for coordinating worker agents.

**Verify your state:**
```bash
# Check mclaude exists
which mclaude

# Test it launches
mclaude --version
```

**You should see:**
```
/usr/local/bin/mclaude                    ← mclaude is installed
Claude Code version X.X.X                 ← Version prints successfully
```

**In the mclaude session, test orchestration:**
```
You: "List available task management commands"

Claude should mention: TaskCreate, TaskList, TaskGet, TaskUpdate
```

**If you don't see this:**
- Check: Did `npx cc-mirror quick` complete without errors?
- Check: Is Node.js installed? (`node --version`)
- Check: Try `npx cc-mirror` to see available commands
- Go back to: Step 1

**This connects to:** Task decomposition → Worker spawning → 80% of multi-agent use cases covered

---

#### Model Selection for Workers

| Model | Use Case |
|-------|----------|
| **Haiku** | Errand runner: fetch files, grep, simple lookups. Spawn 5-10 in parallel |
| **Sonnet** | Capable worker: structured implementation, following patterns, test gen |
| **Opus** | Complex reasoning, architecture decisions, ambiguous tasks |

#### When to Use CC Mirror

- **Best for:** Task-based workflows with clear dependencies
- **Setup time:** 5 minutes
- **Cost:** Single provider account
- **Complexity:** Medium
- **Coverage:** "80% of use cases with zero effort"

#### Caveats

- Beta/disabled feature - may change
- Relies on editing minified JS via CC Mirror
- Production may need custom observability
- Enable auto-compact beta feature to prevent context collapse

---

### Gas Town (Agent Factory)

**Source:** @steve_yegge (Steve Yegge) - 40-year veteran, ex-Google/Amazon/Sourcegraph
**Repo:** github.com/steveyegge/gastown

#### What It Is

Gas Town is a **factory for agents**, not a better single agent. It's designed for developers at Stage 7+ of AI evolution (10+ agents, hand-managed).

> "Claude Code is the world's biggest fuckin' ant. Everyone is focused on making their ant run longer... when nature prefers colonies."

#### The 8 Stages of Dev Evolution

| Stage | Description |
|-------|-------------|
| 1 | Zero/near-zero AI |
| 2 | Agent in IDE, permissions on |
| 3 | Agent in IDE, YOLO mode |
| 4 | Agent fills screen, code is just diffs |
| 5 | CLI single agent, YOLO |
| 6 | CLI multi-agent (3-5 parallel) |
| 7 | 10+ agents, hand-managed |
| **8** | **Building your own orchestrator** |

**Warning:** If you're not at Stage 7, you'll get your face ripped off by superintelligent chimpanzees.

#### The 7 Worker Roles

```
+===============================================================+
|                      GAS TOWN HIERARCHY                        |
+===============================================================+
|                                                                |
|  TOWN LEVEL (Global)                                           |
|  +---------+  +---------+  +---------+                        |
|  |  MAYOR  |  | DEACON  |  |  DOGS   |                        |
|  |  coord  |  | monitor |  |  gates  |                        |
|  +---------+  +---------+  +---------+                        |
|       |                                                        |
|       v                                                        |
|  RIG LEVEL (Per-Project)                                       |
|  +----------+  +----------+  +----------+                     |
|  | REFINERY |  | WITNESS  |  | POLECAT  |                     |
|  | decompose|  | observe  |  |  named   |                     |
|  +----------+  +----------+  +----------+                     |
|                                   |                            |
|                                   v                            |
|                             +----------+                       |
|                             |   CREW   |                       |
|                             |ephemeral |                       |
|                             +----------+                       |
|                                                                |
|  HUMAN LEVEL                                                   |
|  +-------------------------------------------+                |
|  |               OVERSEER (YOU)               |                |
|  |  Product Manager - Decision Maker - Boss   |                |
|  +-------------------------------------------+                |
|                                                                |
+===============================================================+
```

| Role | Function |
|------|----------|
| **Mayor** | Town-level coordination |
| **Deacon** | Monitoring/handshakes |
| **Dogs** | Quality gates/watchdogs |
| **Refinery** | Task decomposition |
| **Polecat** | Named persistent workers |
| **Witness** | Per-rig observer |
| **Crew** | Ephemeral workers |
| **Overseer** | Human boss with inbox |

#### Quick Start

```bash
# Install
go install github.com/steveyegge/gastown/cmd/gt@latest

# Initialize town
gt init

# Add rig
gt rig add <repo-path>

# Launch roles
gt mayor up
gt refinery up beads
gt polecat up beads alice
```

---

#### Checkpoint: After Gas Town Installation

**Where you are:** Gas Town CLI is installed and you've initialized your first town with a rig.
**What this enables:** Factory-scale agent orchestration. Mayor coordinates, Refinery decomposes, Polecats execute.

**Verify your state:**
```bash
# Check gt is installed
which gt
gt --version

# Check town initialized
ls -la ~/.gastown/

# Check rig was added
gt rig list
```

**You should see:**
```
/Users/you/go/bin/gt                      ← gt CLI installed
gastown version X.X.X                     ← Version displays

~/.gastown:
drwxr-xr-x  config/
-rw-r--r--  town.yaml                     ← Town configuration

Rigs:
  beads: /path/to/your/repo               ← Your rig is registered
```

**Test role launch:**
```bash
gt mayor up
# In another terminal:
gt status
```

**You should see:**
```
Town: default
Roles running:
  - Mayor: UP (pid: 12345)
```

**If you don't see this:**
- Check: Is Go installed? (`go version`, needs 1.21+)
- Check: Is `$GOPATH/bin` in your PATH?
- Check: Did `gt init` complete without errors?
- Go back to: Installation step

**This connects to:** Adding Polecats → Task decomposition via Refinery → Full factory operation

---

#### Supporting Infrastructure

**Beads** (Data Plane):
- Git-backed universal context management
- ~225K lines of Go, vibe-coded
- github.com/steveyegge/beads

**MCP Agent Mail** (Communication):
- Agents collaborate via email-like interfaces
- No training needed
- Natural "agent village" behavior
- github.com/Dicklesworthstone/mcp_agent_mail

#### When to Use Gas Town

- **Best for:** Stage 7+ developers, maximum throughput, chaos tolerance
- **Setup time:** Hours/days
- **Cost:** Multiple Claude accounts, "expensive as hell"
- **Complexity:** High
- **Prerequisites:** tmux proficiency, Go environment

#### Community Extensions

- **GTGUI:** Age of Empires style GUI - github.com/TRIBE-INC/gtgui
- **Roughneck:** Run multiple Gas Towns - github.com/mjtechguy/roughneck
- **Station:** Nats-based alternative - github.com/cloudshipai/station

#### Caveats

- Code is 3 weeks old, "100% vibe-coded"
- Steve has never looked at the code
- "If you have any doubt whatsoever, then you can't use it"

---

### Infinite Orchestra (Self-Improving)

**Source:** @0xSero - AI developer at Thrive Protocol
**Repo:** github.com/0xSero/orchestra

#### What It Is

A self-improving orchestrator that keeps itself working 24/7 in a Docker environment. When told to "improve itself," it added Docker containerization to prevent destroying the host machine.

#### Architecture

```
+---------------------------------------+
|  Central Orchestrator                 |
|  - Monitors idle + activity           |
|  - Triggers self-improvement          |
+---------------------------------------+
              |
              v
+---------------------------------------+
|  Specialized Workers                  |
|  +- Coder -> Implementation           |
|  +- Architect -> Design decisions     |
|  +- Research -> Find solutions        |
|  +- Memory -> Persistent context      |
+---------------------------------------+
              |
              v
+---------------------------------------+
|  Docker Container                     |
|  - Isolation from host                |
|  - 24/7 operation                     |
|  - Resource limits                    |
+---------------------------------------+
```

#### Worker Profiles (orchestrator.json)

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

#### Self-Improvement Loop

1. Orchestrator monitors for idle state
2. Triggers self-improvement workflow
3. Agents research and implement fixes
4. Example: Detected resource issues -> added Docker

#### When to Use Infinite Orchestra

- **Best for:** Experimental, self-evolving systems, 24/7 operation
- **Setup time:** Medium (OpenCode + Docker)
- **Cost:** Moderate
- **Complexity:** Medium

#### Caveats

- Sequential only (no parallelization yet)
- Conflicts with 5+ agents with 5 subagents each
- No checkpointing - crashes lose progress
- Auto-updates unreliable in Docker

---

### Ralph Wiggum (Iterative Loop)

**Source:** Geoffrey Huntley (ghuntley.com/ralph/), popularized by @mattpocockuk, @ryancarson
**Official Plugin:** github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum

#### What It Is

A bash loop that runs Claude Code repeatedly with fresh context until a completion condition is met. Each iteration gets a clean slate but has access to git history and file-based memory.

Named after Ralph Wiggum from The Simpsons - the simple-minded child who persists in tasks regardless of obstacles.

#### Core Mechanism

At its absolute simplest:
```bash
while :; do cat PROMPT.md | claude ; done
```

#### How It Works

```
+---------------------------------------------+
|  1. Start with fresh context                |
|            |                                |
|  2. Read task state from files              |
|     (prd.json, progress.txt, git history)   |
|            |                                |
|  3. Pick highest priority incomplete task   |
|            |                                |
|  4. Implement task                          |
|            |                                |
|  5. Run verification (tests, typecheck)     |
|            |                                |
|  6. If pass: commit, update prd.json        |
|     If fail: log learnings, try again       |
|            |                                |
|  7. Append to progress.txt                  |
|            |                                |
|  8. Check completion condition              |
|     All done? -> Output promise -> EXIT     |
|     Not done? -> Loop continues             |
+---------------------------------------------+
```

#### PRD Format

```json
{
  "project": "MyApp",
  "branchName": "feature/user-auth",
  "userStories": [
    {
      "id": "US-001",
      "title": "Create login endpoint",
      "acceptanceCriteria": [
        "POST /api/auth/login accepts email + password",
        "Returns JWT on success",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": false
    }
  ]
}
```

#### Basic Script

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

---

#### Checkpoint: After Ralph Script Setup

**Where you are:** You have a Ralph loop script ready to run autonomous iterations.
**What this enables:** Overnight development. Launch at 11pm, wake up to completed features.

**Verify your state:**
```bash
# Check script exists and is executable
ls -la ralph.sh
head -5 ralph.sh

# Check PRD file exists
cat plans/prd.json | jq '.userStories | length'

# Check progress file exists
ls -la plans/progress.txt
```

**You should see:**
```
-rwxr-xr-x  1 you  staff  450 Jan 10 10:00 ralph.sh  ← Executable
#!/bin/bash                                          ← Bash script
MAX_ITERATIONS=${1:-10}                              ← Default iterations

3                                                    ← Number of user stories

-rw-r--r--  1 you  staff  0 Jan 10 10:00 progress.txt
```

**Your folder should look like:**
```
project/
├── ralph.sh          ← YOU JUST CREATED THIS
├── plans/
│   ├── prd.json      ← Task definitions (passes: true/false)
│   └── progress.txt  ← Iteration learning log
└── CLAUDE.md         ← Project context
```

**Test run (single iteration):**
```bash
./ralph.sh 1
```

**If you don't see this:**
- Check: Is script executable? (`chmod +x ralph.sh`)
- Check: Does prd.json have valid JSON? (`jq . plans/prd.json`)
- Check: Are you in the project root directory?
- Go back to: Create the plans/ directory structure

**This connects to:** Running overnight → Compounding iterations → Shipping while you sleep

---

#### Official Plugin Command

```bash
/ralph-loop "Build a REST API for todos. Requirements: CRUD operations, input validation, tests. Output <promise>COMPLETE</promise> when done." --completion-promise "COMPLETE" --max-iterations 50
```

#### When to Use Ralph

- **Best for:** Well-defined goals, mechanical tasks, overnight builds
- **Setup time:** Minutes
- **Cost:** Single agent (moderate)
- **Complexity:** Low

#### Ralph Variants

| Variant | Purpose |
|---------|---------|
| **Marathon Ralph** | Full SDLC with unit and E2E tests |
| **Dr. Ralph** | Multi-phase with confidence thresholds (80%+) |
| **Lisa** | Fork with logging + progress tracking |
| **Ralph Wiggum Marketer** | Self-critiquing content loop |

---

### Parallel Swarms (Worktrees)

**Pattern:** Git worktree isolation for parallel agent work

#### What It Is

Running separate Claude Code instances in isolated git worktrees, each working on independent features that merge via standard git workflow.

#### Architecture

```
Main Repo
~/project/
  +-- .git/           # Shared git database
  +-- src/            # Main working directory

Worktrees (parallel agent checkouts)
~/project-worktrees/
  +-- feature-a/      # Agent 1's isolated directory
  +-- feature-b/      # Agent 2's isolated directory
  +-- bugfix-c/       # Agent 3's isolated directory
```

#### Setup

```bash
# Create worktree for parallel agent
git worktree add ../feature-auth feature-auth

# Agent 1 works in main checkout
cd ~/project && claude

# Agent 2 works in worktree
cd ~/feature-auth && claude
```

---

#### Checkpoint: After Worktree Setup

**Where you are:** You have isolated git worktrees for parallel agent work without file conflicts.
**What this enables:** True parallelism. Multiple agents writing code simultaneously. No merge hell during work.

**Verify your state:**
```bash
# List all worktrees
git worktree list

# Check worktree directory exists
ls -la ../feature-auth/

# Verify it's on the right branch
cd ../feature-auth && git branch --show-current
```

**You should see:**
```
/Users/you/project       abc1234 [main]
/Users/you/feature-auth  def5678 [feature-auth]  ← New worktree

../feature-auth:
total 24
drwxr-xr-x  8 you  staff   256 Jan 10 10:00 .
drwxr-xr-x  4 you  staff   128 Jan 10 10:00 ..
-rw-r--r--  1 you  staff    50 Jan 10 10:00 .git  ← Links to main repo
drwxr-xr-x  5 you  staff   160 Jan 10 10:00 src
...

feature-auth                                      ← On correct branch
```

**Test parallel agents:**
```bash
# Terminal 1:
cd ~/project && claude "Work on main branch task"

# Terminal 2:
cd ../feature-auth && claude "Work on feature-auth task"
```

**If you don't see this:**
- Check: Does the branch exist? (`git branch -a | grep feature-auth`)
- Check: Did worktree creation succeed without errors?
- Check: Are you in a git repository?
- Go back to: Create branch first (`git checkout -b feature-auth`)

**This connects to:** Parallel Ralph loops → Merge workflow → Team-scale development

---

#### Automation Script

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

#### Worktree + Ralph Combination

```bash
# Spawn parallel Ralph loops in worktrees
for feature in auth payments notifications; do
  git worktree add ../wt-$feature $feature-branch
  (cd ../wt-$feature && ./ralph.sh 20) &
done
wait
```

#### When to Use Worktrees

- **Best for:** Parallel feature development, team projects
- **Setup time:** Quick
- **Cost:** Multiplied by number of agents
- **Complexity:** Low (if you know git)

#### Caveats

- Merge conflicts must be resolved by human
- Each worktree needs its own Claude session
- Resource usage multiplied

---

## Architecture Selection Guide

### Decision Tree

```
START: What's your experience level?

Stage 1-4 (Single agent in IDE)
    -> STOP. Use single Claude Code. Learn the basics first.

Stage 5 (CLI single agent, YOLO)
    |
    +-- Want overnight autonomous work?
    |   -> Ralph Wiggum Loop
    |
    +-- Want quick multi-agent test?
        -> CC Mirror (3 commands, done)

Stage 6 (3-5 parallel agents)
    |
    +-- Need task dependencies?
    |   -> CC Mirror Native Orchestration
    |
    +-- Building a product?
    |   -> Ralph + Playwright
    |
    +-- Self-improving system?
        -> Infinite Orchestra

Stage 7+ (10+ agents, hand-managed)
    |
    +-- Cost-sensitive?
    |   -> Enhanced Ralph with Haiku workers
    |
    +-- Want structure + chaos tolerance?
    |   -> GAS TOWN
    |
    +-- Multiple clients/projects?
        -> Gas Town + Roughneck
```

### Quick Comparison Matrix

| Architecture | Setup | Cost | Parallelism | Dependencies | Use Case |
|--------------|-------|------|-------------|--------------|----------|
| **Ralph Loop** | 5 min | $ | None (serial) | Via PRD | Overnight builds |
| **CC Mirror** | 5 min | $$ | Native | TaskCreate | 80% of projects |
| **Worktrees** | 10 min | $$$ | Full isolation | Git branches | Parallel features |
| **Orchestra** | 1 hr | $$ | Sequential* | Profiles | 24/7 self-improvement |
| **Gas Town** | Days | $$$$ | Full factory | Role-based | Stage 7+ scale |

*Orchestra parallelism coming via worktrees

### The 80/20 Rule

> "CC Mirror covers 80% of use cases with zero effort. Gas Town for the remaining 20%."
> -- @nummanali

---

## Common Multi-Agent Pitfalls

### 1. Worker Recursion

**Symptom:** Infinite agent spawning, runaway costs
**Cause:** Workers not properly restricted from spawning sub-agents
**Prevention:** Always use the worker preamble template

```
RULES:
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
```

### 2. Context Explosion

**Symptom:** Agents get "stupider" over time, lose track of goals
**Cause:** Too much context accumulated, no compaction
**Prevention:**
- Enable auto-compact beta feature
- Use fresh context per iteration (Ralph pattern)
- Put expensive tools in subagents (Playwright, browser)

> "Context rot: LLMs get stupider with more tokens."
> -- @mattpocockuk

### 3. Coordination Failures

**Symptom:** Conflicting edits, lost work, race conditions
**Cause:** Multiple agents touching same files without locking
**Prevention:**
- Use git worktrees for isolation
- Implement file ownership per agent
- Branch-based parallel work with human merge

### 4. Dependency Inversion

**Symptom:** Agent tries to build UI before schema exists
**Cause:** Wrong task ordering in PRD
**Prevention:** Always order: Schema -> Backend -> Frontend

### 5. Verification Bypass

**Symptom:** "Complete" features that don't work
**Cause:** No verification in acceptance criteria
**Prevention:**
- Always include `npm run typecheck passes`
- Add browser automation for UI verification
- Keep CI green

> "Without verification, Ralph produces garbage."
> -- @mattpocockuk

### 6. Model Mismatch

**Symptom:** Expensive failures on simple tasks, weak output on complex tasks
**Cause:** Using Opus for grep, Haiku for architecture
**Prevention:** Match model to task complexity

| Task | Model |
|------|-------|
| File lookup, grep | Haiku |
| Implementation, testing | Sonnet |
| Architecture, complex reasoning | Opus |

### 7. Cost Explosion

**Symptom:** $500 bills for simple features
**Cause:** Runaway crew, no budget limits
**Prevention:**
- Set `crew.max_per_rig`
- Use `--max-iterations` with Ralph
- Track token usage

---

## Scaling Considerations

### From 2 Agents to 10+ Agents

#### Phase 1: 2-3 Agents (Dipping Toes)

```
Setup: Git worktrees or simple parallel terminals
Coordination: Manual human oversight
Cost: ~$20-50/day
Tools: Basic Claude Code
```

**Pattern:**
```bash
# Terminal 1
cd ~/project && claude "Work on authentication"

# Terminal 2
cd ~/project-ui && claude "Work on dashboard UI"
```

#### Phase 2: 4-6 Agents (Getting Serious)

```
Setup: CC Mirror or structured worktrees
Coordination: Task dependencies via TaskCreate
Cost: ~$50-150/day
Tools: CC Mirror, rpai for monitoring
```

**Pattern:**
```bash
# Use CC Mirror for task orchestration
npx cc-mirror quick --provider mirror --name mclaude
mclaude
"Load orchestration skill. Decompose: Build e-commerce checkout"
```

#### Phase 3: 7-10 Agents (Factory Floor)

```
Setup: Gas Town or custom orchestration
Coordination: Role-based hierarchy
Cost: ~$200-500/day
Tools: Gas Town, Beads, tmux, rpai
```

**Pattern:**
```bash
gt mayor up
gt polecat up shop alice
gt polecat up shop bob
gt polecat up shop carol
gt crew spawn shop --task "Quick fix: button color"
```

#### Phase 4: 10+ Agents (Full Factory)

```
Setup: Gas Town + Roughneck (multi-town)
Coordination: Multi-level hierarchy, quality gates
Cost: $500-2000/day
Tools: Full Gas Town stack, GTGUI, custom dashboards
```

### Cost Management at Scale

#### Model Tiering by Role

| Role | Model | Cost/Hour |
|------|-------|-----------|
| Mayor, Refinery | Opus | $15-20 |
| Polecats, Dogs | Sonnet | $5-10 |
| Crew, Deacon, Witness | Haiku | $1-3 |

#### Budget Formula

```
Base Cost = Mayor($18) + Deacon($1.5) + Dogs($7)
Per-Rig = Witness($2) + Refinery($18)
Workers = Polecats($7.5 x count) + Crew($1 x count)
```

**Example: 1 Town, 2 Rigs, 3 Polecats, 5 Crew**
```
= $26.5 + (2 x $20) + (3 x $7.5) + (5 x $1)
= $26.5 + $40 + $22.5 + $5
= ~$94/hour
```

### Monitoring at Scale

#### Claude HUD

```bash
/plugin install claude-hud
```

Shows:
- Context remaining (color-coded bar)
- What tools are executing
- Which subagents are running
- Todo list progress

#### rpai (tmux Agent Manager)

```bash
cargo install rpai
rpai  # Run in any tmux session
```

Features:
- Scans tmux panes for running AI agents
- Displays TUI with agent list, status, output previews
- Jump to any agent with selection

---

## Quick Reference Commands

### CC Mirror

```bash
# Quick setup
npx cc-mirror quick --provider mirror --name mclaude
mclaude
"Load the orchestration skill and initiate"

# Task management (within session)
TaskCreate "subject", "description", ["criteria"]
TaskList status='open'
TaskUpdate id, addBlocks=["other-id"]
```

### Gas Town

```bash
# Installation
go install github.com/steveyegge/gastown/cmd/gt@latest

# Initialization
gt init
gt rig add /path/to/repo

# Role management
gt mayor up
gt deacon up
gt dogs up
gt witness up <rig>
gt refinery up <rig>
gt polecat up <rig> <name>
gt crew spawn <rig> --task "..."

# Monitoring
gt status
gt inbox
gt inbox respond <id> --approve
```

### Ralph Wiggum

```bash
# Official plugin
/ralph-loop "prompt" --completion-promise "COMPLETE" --max-iterations 10
/cancel-ralph

# Bash script
./ralph.sh 25  # 25 max iterations
```

### Git Worktrees

```bash
# Create worktree
git worktree add ../feature-branch feature-branch

# List worktrees
git worktree list

# Remove worktree
git worktree remove ../feature-branch
```

### Monitoring Tools

```bash
# Claude HUD
/plugin install claude-hud

# rpai
cargo install rpai && rpai

# Claude Mem (persistent memory)
/plugin install claude-mem
```

---

## Production Deployment Patterns

### Solo Founder Setup

```
Hardware: MacBook Pro + Cloud VM ($7/day)
Budget: ~$500/month
Stack:
  - 1 Town (or CC Mirror)
  - 2 Rigs (main product, side project)
  - 3 Polecats (Sonnet)
  - 5 max Crew (Haiku)

Workflow:
  - Morning: File work via inbox or PRD
  - Day: Mobile monitoring via Tailscale
  - Evening: Review, merge, deploy

Results:
  - 3-5x feature velocity
  - 10-20% rework rate
  - ~$15-25/day API cost
```

### Startup Tech Team Setup

```
Hardware: Cloud Kubernetes or VMs
Budget: $5000-10000/month
Stack:
  - 1 Main Town
  - Multiple rigs (frontend, backend, infra, mobile)
  - Team members as additional Overseers
  - Shared inbox with assignment routing

Workflow:
  - Sprint planning -> Refinery decomposition
  - Daily standup: Review overnight progress
  - Parallel feature development
  - Dogs gate all PRs

Results:
  - Replaces 2-3 junior developers
  - Quality via Dogs
  - 24/7 development capability
```

### The Panopticon (8 Parallel Domains)

**Source:** @mollycantillon

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

Each instance operates independently:
- Filesystem isolation prevents context pollution
- Handoffs through explicit file-based protocols
- GUI fallback via mouse/keystroke injection when no API exists

---

## Summary: The Multi-Agent Mental Model

```
+===============================================================+
|                                                               |
|  Multi-agent orchestration is about:                          |
|                                                               |
|  1. SEPARATION - Orchestrators coordinate, workers execute    |
|  2. ISOLATION - Fresh context, worktrees, containers          |
|  3. VERIFICATION - Tests, typecheck, browser automation       |
|  4. PERSISTENCE - Git, PRD, progress.txt                      |
|  5. EVOLUTION - Ralph loops, self-improvement, iteration      |
|                                                               |
+===============================================================+
```

### The Philosophy

> "View AI agents as persistent, file-memory-based loops where AI acts as an autonomous worker, breaking projects into small, verifiable stories that compound over iterations--emphasizing eventual consistency over perfect first attempts."

### Choose Your Level

| If You Are... | Start With... |
|---------------|---------------|
| Learning Claude Code | Single agent, no orchestration |
| Building one feature | Ralph Wiggum loop |
| Managing small project | CC Mirror |
| Running multiple projects | Gas Town |
| Building the future | Your own orchestrator |

---

## Resources

### Official

- Anthropic Claude Code: github.com/anthropics/claude-code
- Official Ralph Plugin: github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum

### Community Tools

- CC Mirror: github.com/numman-ali/cc-mirror
- Gas Town: github.com/steveyegge/gastown
- Orchestra: github.com/0xSero/orchestra
- Beads: github.com/steveyegge/beads
- Claude HUD: github.com/jarrodwatts/claude-hud
- rpai: cargo install rpai

### Ralph Variants

- Marathon Ralph: github.com/gruckion/marathon-ralph
- Lisa: github.com/Arakiss/lisa
- Zeroshot: github.com/covibes/zeroshot
- Ralph Marketer: github.com/muratcankoylan/ralph-wiggum-marketer

### Gas Town Extensions

- GTGUI: github.com/TRIBE-INC/gtgui
- Roughneck: github.com/mjtechguy/roughneck
- Station: github.com/cloudshipai/station

### Sub-Agent Resources

- Sub-Agents Directory: sub-agents.directory
- VoltAgent Collection: github.com/VoltAgent/awesome-claude-code-subagents

---

## Troubleshooting

### Worker Separation Issues

#### Problem: "Workers spawning infinite sub-agents"
**Symptoms:** Runaway costs, nested agent chains, resource exhaustion
**Cause:** Workers not restricted from spawning sub-agents
**Solution:**
```markdown
# Add to EVERY worker preamble:
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
**Prevention:** ALWAYS use the worker preamble template for every worker

---

#### Problem: "Workers consuming orchestrator context"
**Symptoms:** Orchestrator running out of context, losing track of task graph
**Cause:** Workers sharing context with orchestrator, no isolation
**Solution:**
```bash
# Use subagents for isolation (forked context)
# Workers run in their own context window

# Or use git worktrees for filesystem isolation
git worktree add ../worker-1 task-1-branch
cd ../worker-1 && claude

# Each worker gets its own:
# - Context window
# - Filesystem view
# - Git state
```
**Prevention:** Workers MUST run in isolated contexts

---

#### Problem: "Coordination failures - no central authority"
**Symptoms:** Conflicting edits, duplicated work, race conditions
**Cause:** Workers acting independently without orchestrator oversight
**Solution:**
```
# Enforce strict separation:
Orchestrator uses: TaskCreate, TaskList, TaskGet, TaskUpdate, Task (spawn)
Workers use: Read, Write, Edit, Bash, Glob, Grep

# Orchestrator tracks ALL state
# Workers report completion, never self-manage

# For file conflicts: use ownership rules
"Worker 1: only touch src/api/"
"Worker 2: only touch src/ui/"
```
**Prevention:** Orchestrator coordinates, workers execute - NEVER mix

---

### CC Mirror Issues

#### Problem: "Orchestration skill not loading"
**Symptoms:** TaskCreate/TaskUpdate commands not recognized
**Cause:** CC Mirror not properly installed, or wrong session
**Solution:**
```bash
# Exit and restart mclaude
exit
mclaude

# Try explicit load
"Load the orchestration skill"

# If still failing, reinstall
rm -rf ~/.mclaude
npx cc-mirror quick --provider mirror --name mclaude
```
**Prevention:** Always verify skill is loaded before starting orchestration

---

#### Problem: "Task dependencies not being respected"
**Symptoms:** Blocked tasks starting early, dependency graph ignored
**Cause:** Dependencies not set correctly during TaskCreate
**Solution:**
```
# Verify dependency setup
"List all tasks with their dependencies"

# Correct dependency commands:
TaskUpdate 4, addBlockedBy=["3"]  # Task 4 waits for Task 3
TaskUpdate 3, addBlocks=["4"]     # Task 3 blocks Task 4

# Both methods work - use consistently

# Verify blocked state
# Should show: [wait] #4 (blocked by #3)
```
**Prevention:** Always explicitly set dependencies when creating related tasks

---

### Gas Town Issues

#### Problem: "go install fails for gastown"
**Symptoms:** Installation errors, missing dependencies
**Cause:** Go not installed, or wrong version
**Solution:**
```bash
# Install Go (1.21+ required)
# macOS
brew install go

# Verify
go version

# Install gastown
go install github.com/steveyegge/gastown/cmd/gt@latest

# Add to PATH if needed
export PATH="$PATH:$(go env GOPATH)/bin"
```
**Prevention:** Keep Go updated, add GOPATH/bin to PATH

---

#### Problem: "Roles not communicating properly"
**Symptoms:** Mayor not receiving updates, inbox empty, agents isolated
**Cause:** MCP Agent Mail not configured, or roles not properly connected
**Solution:**
```bash
# Verify all required roles are running
gt status

# Should show:
# Mayor: UP
# Deacon: UP
# Refinery: UP (per rig)
# etc.

# If roles disconnected, restart in order:
gt mayor down && gt mayor up
gt deacon down && gt deacon up
# Then rig-level roles

# Check inbox connectivity
gt inbox
```
**Prevention:** Start roles in order: mayor first, then supporting roles

---

#### Problem: "Cost explosion - $500+ bills"
**Symptoms:** Unexpected high costs, runaway crew
**Cause:** No budget limits, too many crew, wrong model selection
**Solution:**
```bash
# Set crew limits
# In gastown config:
crew.max_per_rig = 5

# Use appropriate models per role:
# Mayor, Refinery: Opus ($15-20/hr)
# Polecats, Dogs: Sonnet ($5-10/hr)
# Crew, Deacon: Haiku ($1-3/hr)

# Monitor costs
gt status --show-costs

# Kill runaway crew
gt crew stop all
```
**Budget formula:**
```
Base = Mayor($18) + Deacon($1.5) + Dogs($7)
Per-Rig = Witness($2) + Refinery($18)
Workers = Polecats($7.5 x count) + Crew($1 x count)
```
**Prevention:** Set hard limits, use Haiku for routine tasks

---

### Parallel Agent Issues

#### Problem: "Agents modifying same files - conflicts"
**Symptoms:** Merge conflicts, overwritten changes, lost work
**Cause:** No file isolation between parallel agents
**Solution:**
```bash
# Option 1: Git worktrees (recommended)
git worktree add ../agent-1 feature-1
git worktree add ../agent-2 feature-2

# Each agent works in complete isolation
cd ../agent-1 && claude
cd ../agent-2 && claude

# Merge when both complete
git merge agent-1 agent-2

# Option 2: File ownership rules
# Specify in task description:
"Only modify files in src/api/ - do not touch other directories"
```
**Prevention:** ALWAYS isolate parallel agents via worktrees or file ownership

---

#### Problem: "Race conditions in shared resources"
**Symptoms:** Database locks, port conflicts, test failures
**Cause:** Multiple agents accessing same resources simultaneously
**Solution:**
```bash
# Use separate ports per agent
# Agent 1: PORT=3001
# Agent 2: PORT=3002

# Use separate test databases
# Agent 1: DATABASE_URL=...agent_1
# Agent 2: DATABASE_URL=...agent_2

# Coordinate resource access via orchestrator
# Not parallel access to same resource
```
**Prevention:** Design tasks to use non-overlapping resources

---

### Context Management in Multi-Agent

#### Problem: "Orchestrator running out of context"
**Symptoms:** Orchestrator forgetting tasks, losing state
**Cause:** Too many worker outputs accumulated in context
**Solution:**
```bash
# Have workers return summaries only, not full output
"Complete task and return: file paths modified, key decisions, next steps"

# Keep orchestrator context lean:
# - Task graph in external file (prd.json)
# - Worker outputs summarized
# - Historical context in git

# Compact orchestrator when needed
/compact

# Or restart with fresh context
exit
mclaude
"Read task state from prd.json and resume orchestration"
```
**Prevention:** Workers return summaries, orchestrator stays lean

---

#### Problem: "Workers getting wrong context"
**Symptoms:** Workers implementing wrong features, missing requirements
**Cause:** Task description unclear, context not passed correctly
**Solution:**
```markdown
# Include full context in task assignment:
TASK: Implement login form

CONTEXT:
- This is for the web application at src/web/
- Use existing Button and Input components from src/components/
- Follow styling conventions in styles/theme.ts

ACCEPTANCE CRITERIA:
- Email/password fields
- Validation using Zod
- npm run typecheck passes

CONSTRAINTS:
- Only modify src/web/auth/
- Do not change shared components
```
**Prevention:** Include all necessary context in task description

---

### Verification Issues

#### Problem: "Features marked complete that don't work"
**Symptoms:** Passing tests but broken functionality, false positives
**Cause:** Verification not actually running, or criteria too weak
**Solution:**
```bash
# Always include explicit verification in acceptance criteria:
"npm run typecheck passes"
"npm run test passes"
"Verify at localhost:3000/feature using browser"

# Add hooks to enforce verification
# ~/.claude/settings.json
{
  "hooks": {
    "PostToolUse": {
      "matcher": "Edit|Write",
      "command": "npm run typecheck && npm run test"
    }
  }
}
```
**Prevention:** Make verification mandatory and automated

---

#### Problem: "Browser verification not working"
**Symptoms:** UI claims verified but visually broken
**Cause:** Playwright/browser not configured, screenshots not checked
**Solution:**
```bash
# Ensure Playwright installed
npm install -D playwright

# Use browser verification in acceptance criteria
"Take screenshot of /login page and verify form elements visible"

# Or use Claude Chrome extension (Boris's approach)
# Enables visual verification of UI changes
```
**Prevention:** Include visual verification for all UI changes

---

### When NOT to Use Multi-Agent

| Scenario | Problem | Use Instead |
|----------|---------|-------------|
| Single small feature | Orchestration overhead not worth it | Single Claude Code session |
| Learning Claude Code | Too complex to start | Master single agent first |
| Stage 1-4 developer | "Get your face ripped off by chimpanzees" | Build to Stage 5+ first |
| Simple sequential tasks | No parallelism benefit | Ralph loop |
| Cost-constrained project | Multi-agent is expensive | Single agent, careful |
| Need guaranteed stability | Community tools are beta | Official features only |

### Known Limitations

1. **CC Mirror relies on editing minified JS** - May break with Claude Code updates
2. **Gas Town is "100% vibe-coded"** - Steve hasn't looked at the code
3. **No standardized multi-agent protocol** - Each system is different
4. **Costs scale linearly with agents** - 10 agents = 10x cost
5. **Coordination overhead is real** - Sometimes faster to do sequentially
6. **Windows support varies** - CC Mirror has known issues
7. **Monitoring tools are immature** - rpai is a "weekend project"
8. **Context isolation isn't perfect** - State can leak between agents

### Emergency Recovery

#### Multi-agent system completely stuck
```bash
# Nuclear option: kill all agents
pkill -f claude

# For Gas Town
gt mayor down
gt deacon down
gt dogs down
# Kill all rig-level roles

# Verify clean state
gt status  # Should show all DOWN

# Restart from scratch
gt mayor up
# Then other roles in order
```

#### Lost track of which agent is doing what
```bash
# For tmux-based setup
tmux list-panes -a -F "#{session_name}:#{window_index}.#{pane_index} - #{pane_current_command}"

# For CC Mirror
"List all tasks with status and owner"

# For Gas Town
gt status --verbose
gt inbox
```

#### Need to stop everything and start over
```bash
# Save current state first
git add -A && git commit -m "WIP: saving state before reset"

# Kill all agents
pkill -f claude
pkill -f mclaude
gt mayor down  # If using Gas Town

# Start fresh
git status
# Assess what's done vs not done
# Begin with single agent to stabilize
```

#### Cost runaway - emergency stop
```bash
# Immediate: kill everything
pkill -f claude

# Check damage
# Review API usage dashboard

# Restart with limits
# Set max-iterations on Ralph
# Set crew limits on Gas Town
# Use Haiku for routine tasks
```

---

## Tags

`#multi-agent` `#orchestration` `#cc-mirror` `#gas-town` `#infinite-orchestra` `#ralph-wiggum` `#parallel-agents` `#git-worktrees` `#hub-and-spoke` `#agent-factory` `#task-decomposition` `#worker-separation` `#context-management` `#production-deployment`

---

*Synthesized 2026-01-09 from CC Mirror, Gas Town, Infinite Orchestra, Ralph Wiggum, and multi-agent patterns research.*

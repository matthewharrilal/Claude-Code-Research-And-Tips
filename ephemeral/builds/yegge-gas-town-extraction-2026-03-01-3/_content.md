# Steve Yegge and Gas Town: Complete Extraction

---
## D-FINAL Connection
**Contributed to:** D-FINAL-mental-models.md
**Last enhanced:** 2026-01-18 (Phase 2B)
---

> **The agent factory architect building team-scale productivity for solo developers.**

---

## Table of Contents

1. [You Are Here](#you-are-here)
2. [Who is Steve Yegge?](#1-who-is-steve-yegge)
3. [The Gas Town Mental Model](#2-the-gas-town-mental-model)
4. [The 8 Roles Architecture](#3-the-8-roles-architecture)
5. [Beads: The Memory System](#4-beads-the-memory-system)
6. [The 6 Waves of AI](#5-the-6-waves-of-ai)
7. [Core Principles](#6-core-principles)
8. [Implementation Guide](#7-implementation-guide)
9. [Checkpoints and Verification](#8-checkpoints-and-verification)
10. [Troubleshooting](#9-troubleshooting)
11. [When to Use Gas Town](#10-when-to-use-gas-town)
12. [Quotes and Key Statements](#11-quotes-and-key-statements)
13. [Comparison with Other Patterns](#12-comparison-with-other-patterns)
14. [Sources](#13-sources)

---

## You Are Here

```
                           The Complexity Ladder

    Level 7: Gas Town Factory          <-- YOU ARE LEARNING THIS
             |
    Level 6: Parallel Swarms + Worktrees
             |
    Level 5: Multi-Agent Orchestration (CC Mirror)
             |
    Level 4: PRD-Driven Loops (Full Ralph)
             |
    Level 3: Simple Loops (Basic Ralph)
             |
    Level 2: Subagents + Hooks
             |
    Level 1: CLAUDE.md + Slash Commands
             |
    Level 0: Single Interactive Session
```

**Your current state:** You're a developer who has:
- Mastered Levels 0-6 on the complexity ladder
- Run 5+ Claude Code instances simultaneously ("juggling" agents daily)
- Shipped features overnight with Ralph loops
- Experienced the limits of sequential processing
- Felt the pain of the "Merge Wall" with multiple agents

**After this document, you will:**
- Understand the factory-scale agent architecture
- Know when Gas Town is appropriate (and when it's overkill)
- Be able to install and configure a basic Gas Town setup
- Understand the 8 roles and how they coordinate
- Comprehend how Beads provides memory across agent colonies

**Prerequisites:**
- Stage 7+ on Yegge's 8-Stage Dev Evolution
- Comfort with chaos and imperfection
- Go language runtime installed
- tmux proficiency (mandatory)
- Budget: $50-200/day for API costs
- 100+ hours experience with multi-agent setups

**Complexity Level:** Level 7 on the complexity ladder (highest)

---

## 1. Who is Steve Yegge?

### Professional Background

Steve Yegge is a 40-year software development veteran with a career that provides unique credibility for building Gas Town:

| Company | Role | Relevance |
|---------|------|-----------|
| **Amazon** | Early employee | Built internal tools at scale |
| **Google** | Senior Engineer | Famous for "Stevey's Blog Rants," internal platforms |
| **Sourcegraph** | Senior role | Code intelligence, developer tooling |
| **Current** | Full-time AI development advocate | Building the future of agent-assisted dev |

### Why His Opinion Matters

- **~1 million lines vibe-coded in 2025** - Not theory, practice
- **Built Beads (225K lines of Go)** - Proof of concept at scale
- **Built Gas Town using Gas Town** - Recursive validation
- **Transparent about limitations** - Warns about chaos, costs, maturity
- **Decades of platform engineering** - Knows what scales and what breaks

### Public Presence

- **Twitter/X:** @steve_yegge (primary announcements)
- **Medium:** steve-yegge.medium.com (deep philosophical pieces)
- **GitHub:** github.com/steveyegge (Gas Town, Beads, MCP Agent Mail)
- **Podcasts:** Changelog, O'Reilly Radar

### The "Vibe Coding" Pioneer

Steve didn't just adopt AI-assisted development - he pioneered "vibe coding" as a philosophy:

> "Work becomes fluid, an uncountable that you sling around freely, like slopping shiny fish into wooden barrels at the docks."

**Vibe coding principles:**
- Describe what you want (the "vibe")
- AI generates the code
- You never read the code directly
- Judge by outcomes, not implementation
- Accept some bugs, focus on throughput

---

## 2. The Gas Town Mental Model

### The Core Insight

> "Claude Code is the world's biggest fuckin' ant. Everyone is focused on making their ant run longer... when nature prefers colonies."

This is the fundamental shift Gas Town represents:

```
TRADITIONAL APPROACH                 GAS TOWN APPROACH
━━━━━━━━━━━━━━━━━━━━                ━━━━━━━━━━━━━━━━━━━

     One Big Ant                     Ant Colony
         |                               |
    Make it                        Build the
    run longer                     factory
         |                               |
    Context window               Multiple workers
    limits everything            share the load
         |                               |
    You are the                  You are the
    programmer                   Product Manager
```

### The Factory Metaphor

Gas Town isn't an agent - it's a **factory for agents**:

| Traditional Dev | Gas Town |
|-----------------|----------|
| You write code | You file features |
| You debug | Agents debug |
| You're the implementer | You're the PM |
| Single context window | Many workers, shared memory |
| Session ends, context lost | Workers persist, memory survives |

### The "Idea Compiler"

> "Gas Town is an Idea Compiler. You just make up features, design them, file the implementation plans, and sling work around to your polecats and crew."

**Input:** Your ideas and feature requests
**Output:** Working code, shipped products

You're not writing code anymore. You're managing a factory.

### Why "Gas Town"?

The Mad Max: Fury Road reference isn't accidental:

- **Post-apocalyptic resourcefulness** - Work with chaos, not against it
- **Clear role hierarchy** - Mayor, Deacon, Dogs, Workers
- **Survival-focused** - Throughput over perfection
- **Community-built** - Everyone contributes to the economy

---

## 3. The 8 Roles Architecture

### Hierarchy Overview

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                          GAS TOWN ROLE HIERARCHY                           ║
╠═══════════════════════════════════════════════════════════════════════════╣
║                                                                            ║
║  TOWN LEVEL (Global - One instance each)                                   ║
║  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐               ║
║  │     MAYOR      │  │     DEACON     │  │      DOGS      │               ║
║  │  Coordination  │  │   Monitoring   │  │  Quality Gates │               ║
║  │  across rigs   │  │  & handshakes  │  │  & watchdogs   │               ║
║  └────────────────┘  └────────────────┘  └────────────────┘               ║
║          │                    │                    │                       ║
║          └────────────────────┼────────────────────┘                       ║
║                               │                                            ║
║                               ▼                                            ║
║  RIG LEVEL (Per-Project - Multiple instances)                              ║
║  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐               ║
║  │    REFINERY    │  │    WITNESS     │  │    POLECAT     │               ║
║  │ Decomposes big │  │  Observes all  │  │ Named workers  │               ║
║  │ tasks → small  │  │ rig activity   │  │ (persistent)   │               ║
║  └────────────────┘  └────────────────┘  └────────────────┘               ║
║                                                  │                         ║
║                                                  ▼                         ║
║                                          ┌────────────────┐               ║
║                                          │      CREW      │               ║
║                                          │   Ephemeral    │               ║
║                                          │ burst workers  │               ║
║                                          └────────────────┘               ║
║                                                                            ║
║  HUMAN LEVEL                                                               ║
║  ┌────────────────────────────────────────────────────────────────────┐   ║
║  │                        OVERSEER (YOU)                               │   ║
║  │           Product Manager · Decision Maker · Human Boss             │   ║
║  │                    Has inbox, sends/receives mail                   │   ║
║  └────────────────────────────────────────────────────────────────────┘   ║
║                                                                            ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Role Deep Dives

#### 1. Mayor (Town-Level Coordination)

**Function:** Chief coordinator - your concierge and chief-of-staff

**Responsibilities:**
- Receives high-level directives from Overseer
- Routes work to appropriate rigs
- Manages cross-rig coordination
- Handles town-level decisions
- Primary AI coordinator for the entire town

**Commands:**
```bash
gt mayor up        # Start mayor
gt mayor status    # Check mayor state
gt mayor down      # Stop mayor
```

**Model recommendation:** Opus 4.5 (complex coordination requires top-tier reasoning)

---

#### 2. Deacon (Monitoring/Handshakes)

**Function:** Health monitoring and agent coordination

**Responsibilities:**
- Monitors agent health across the town
- Handles agent-to-agent handshakes
- Reports anomalies to Mayor
- Tracks work progress
- Manages handoff protocols and worker recycling

**Commands:**
```bash
gt deacon up       # Start deacon
gt deacon status   # View monitoring state
```

**Model recommendation:** Haiku (simple health checks don't need heavy reasoning)

---

#### 3. Dogs (Quality Gates/Watchdogs)

**Function:** Quality assurance and safety gates - town-level grunts

**Responsibilities:**
- Reviews work before acceptance
- Enforces quality standards
- Guards against regressions
- Can reject/rollback work
- Stale branch cleanup

**Commands:**
```bash
gt dogs up         # Start dogs
gt dogs bark       # Trigger quality check
```

**Model recommendation:** Sonnet (quality review requires reasoning, not Opus-level)

---

#### 4. Refinery (Task Decomposition)

**Function:** Breaks down large tasks into agent-sized work

**Responsibilities:**
- Receives feature requests from Mayor
- Decomposes into smaller, atomic tasks
- Assigns to Polecats or Crew
- Tracks decomposition progress
- Manages the merge queue with sequential rebasing

**Commands:**
```bash
gt refinery up <rig>           # Start refinery for rig
gt refinery decompose <task>   # Manually trigger decomposition
```

**Model recommendation:** Opus 4.5 (task decomposition is architecturally complex)

---

#### 5. Polecat (Named Persistent Workers)

**Function:** Named, persistent agent workers with specializations

**Responsibilities:**
- Execute assigned tasks
- Maintain context across sessions
- Specialize in rig-specific knowledge
- Report completion to Refinery
- Ephemeral but can be persistent workspaces

**Commands:**
```bash
gt polecat up <rig> alice      # Start polecat named "alice"
gt polecat up <rig> bob        # Start polecat named "bob"
gt polecat list <rig>          # List polecats for rig
gt polecat assign alice <task> # Assign task to alice
```

**Naming convention:** Human names (alice, bob, carol) help with mental model

**Model recommendation:** Sonnet (implementation work, main workhorse)

---

#### 6. Witness (Per-Rig Observer)

**Function:** Observes and records rig activity - watches over polecats

**Responsibilities:**
- Watches all work in assigned rig
- Records history and context
- Provides state to new workers
- Reports anomalies to Deacon
- Unsticks drifting agents

**Commands:**
```bash
gt witness up <rig>    # Start witness for rig
gt witness report      # Get current state report
```

**Model recommendation:** Haiku (observation and logging don't need heavy reasoning)

---

#### 7. Crew (Ephemeral Workers)

**Function:** Short-lived, task-specific burst workers

**Responsibilities:**
- Execute single tasks
- No persistent state
- Cheap and disposable
- Used for parallel bursts
- Spawn, complete, disappear

**Commands:**
```bash
gt crew spawn <rig> --task "fix this bug"
gt crew count <rig>    # Count active crew
gt crew purge <rig>    # Kill all crew
```

**Model recommendation:** Haiku (simple, isolated tasks)

---

#### 8. Overseer (Human Boss - YOU)

**Function:** Product Manager and decision maker

**Responsibilities:**
- Define features and priorities
- Review inbox decisions
- Approve major changes
- Provide human judgment
- Has identity in the system with own inbox

**Interface:**
- Human inbox for decisions
- tmux panes for observation
- `gt` CLI for commands
- Can send and receive town mail

> "That's you, Human. As the Overseer, you have an identity in the system, and your own inbox, and you can send and receive town mail."

---

### Role Communication Flow

```
[Overseer: YOU]
     │
     │ "Build user authentication"
     ▼
[Mayor] ──────────────────────────────────────┐
     │                                          │
     │ routes to rig                            │ status reports
     ▼                                          │
[Refinery] ─────────────────────┐              │
     │                           │              │
     │ decomposes into:          │ progress     │
     │ - task 1: DB schema       │              │
     │ - task 2: API routes      │              │
     │ - task 3: Frontend forms  │              │
     ▼                           ▼              │
[Polecat: alice] ◄──────── [Witness] ─────────┘
[Polecat: bob]     observes    │
[Crew: temp-1]                 │
     │                         │
     │ on anomaly              │
     ▼                         │
[Dogs] ← quality check ────────┘
     │
     │ if passes
     ▼
[Complete]
```

---

## 4. Beads: The Memory System

### The "50 First Dates" Problem

> "Agents suffer from '50 First Dates' syndrome - they wake up with no memory of yesterday."

Every new Claude session starts fresh. This is the fundamental problem Beads solves.

### Why Markdown Plans Fail at Scale

| Problem | Consequence |
|---------|-------------|
| Not queryable | Agents must parse dozens of files to reconstruct work graph |
| No dependency tracking | Agents can't compute which tasks are unblocked |
| Conflict-prone | Multiple agents editing same files |
| Implicit task stacks | "Intelligent wandering" without clear direction |

### What Beads Does

**Beads** (github.com/steveyegge/beads) is a ~225K line Go project providing:

- **Git-backed storage:** All state persisted in git
- **Universal context:** Shared context across all agents
- **Memory management:** Agents can read/write context
- **Hash-based IDs:** (e.g., `bd-a1b2`) prevent merge conflicts
- **Dependency tracking:** Explicit links between tasks
- **Memory decay:** Compaction summarizes old closed tasks

### Beads Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                       GAS TOWN                               │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐             │
│  │   Mayor    │  │   Polecat  │  │    Crew    │             │
│  └─────┬──────┘  └──────┬─────┘  └──────┬─────┘             │
│        │                │               │                    │
│        └────────────────┼───────────────┘                    │
│                         │                                    │
│                   ┌─────▼─────┐                             │
│                   │   BEADS   │                             │
│                   │ Data Plane│                             │
│                   └─────┬─────┘                             │
│                         │                                    │
└─────────────────────────┼────────────────────────────────────┘
                          │
                          ▼
                   ┌─────────────┐
                   │    Git      │
                   │ Repository  │
                   └─────────────┘
```

### Key Beads Commands

```bash
bd ready           # List tasks with zero blockers (what can be done NOW)
bd create "Title"  # Create new task
bd dep add X Y     # X is blocked by Y
bd show <id>       # Full task state and history
```

### Memory Model

```
┌─────────────────────────────────────────────────────────────┐
│                    BEADS MEMORY MODEL                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  LAYER 1: Hot Context (RAM-cached)                          │
│  ├── Current task state                                     │
│  ├── Last N interactions                                    │
│  └── Active file references                                 │
│                                                              │
│  LAYER 2: Warm Context (SQLite + Git index)                 │
│  ├── Recent commit history                                  │
│  ├── Cross-agent message log                                │
│  └── Rig state snapshots                                    │
│                                                              │
│  LAYER 3: Cold Context (Git history)                        │
│  ├── Full project history                                   │
│  ├── Previous run outcomes                                  │
│  └── Archived decisions                                     │
│                                                              │
│  RETRIEVAL: Hot → Warm → Cold (only query cold if needed)   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Why Git as Database?

> "Git as database provides durable, diffable, auditable storage with zero infrastructure."

- **Survives crashes:** Everything is committed
- **Audit trail:** Full history of all agent actions
- **Recovery:** Roll back to any point in time
- **Sharing:** Multiple agents share the same store
- **No heavyweight message bus required**

---

## 5. The 6 Waves of AI

Steve frames the evolution of AI-assisted development as six overlapping waves:

| Wave | Era | Description | Productivity |
|------|-----|-------------|--------------|
| 1 | Pre-2022 | Traditional manual coding | Baseline |
| 2 | 2023 | Completions-based (Copilot-style) | ~2x |
| 3 | 2024 | Chat-based (CHOP) | ~5x |
| 4 | 2025 H1 | Coding agents (Claude Code, Amp, Codex) | ~10x |
| 5 | 2025 H2 | Agent clusters (multi-agent parallel) | ~25x |
| **6** | **2026+** | **Agent fleets (AI supervisors managing swarms)** | **~50x+** |

**Gas Town is Wave 6 infrastructure.**

### The 8 Stages of Dev Evolution

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

**Critical Warning:**
> "If you're not at Stage 7, you'll get your face ripped off by superintelligent chimpanzees."

Gas Town is for Stage 7+ developers. If you're not there yet, go back to Ralph loops.

---

## 6. Core Principles

### GUPP: The Universal Propulsion Principle

> "If there is work on your hook, YOU MUST RUN IT."

This solves the fundamental problem that "Claude Code ends":

- Work is "slung" to agent hooks (persistent git worktrees)
- When an agent starts, it checks its hook
- If work exists, execution is immediate - no confirmation, no waiting
- Work survives crashes and restarts

**The Gupp Nudge:** Claude Code is "so miserably polite" that GUPP doesn't always work. Gas Town implements a "Gupp Nudge" - agents get a startup poke with `gt nudge` roughly 30-60 seconds after starting.

---

### Zero Framework Cognition

> "Claude makes all decisions. The orchestrator executes."

**Key design principle:** All decisions delegated to AI. No heuristics, regex, or parsing in the orchestrator. The framework provides infrastructure, not intelligence.

---

### Agents as Cattle, Not Pets

This is Kubernetes thinking applied to agents:

- Individual sessions are ephemeral
- The work graph is persistent
- The agent is not the session
- The agent is a Bead (identity with a global address)

---

### Nondeterministic Idempotence

Workflows can be interrupted and resumed at any time:

- Path is fully nondeterministic - different runs take different routes
- Workflow eventually finishes as long as you keep throwing agents at it
- Agents may make mistakes but self-correct because acceptance criteria are well-specified
- The system is resilient to individual component failures

---

### Token Spend as Health Metric

> "Token spend per developer per unit time is the new health metric that best represents how well your company is doing with AI."

**The math:**
- Agent cost: ~$10-12 per operating hour
- Recommended daily developer LLM budget: $100-300
- Yegge's personal spend: ~$300/day, ~$80,000/year
- Gas Town workshops generate 12,000 LOC/day per developer

---

### Talk to the Plan, Not the Agent

Because agents have limited context windows and experience "amnesia":

- Maintain persistent, readable plans in files
- Both you and agents reference these plans
- "Land the Plane" pattern: At session end, clean up git, update issues, spit out prompt for next session

---

## 7. Implementation Guide

### Prerequisites Checklist

Before installing Gas Town, verify:

- [ ] **Go 1.21+** installed (`go version`)
- [ ] **tmux** installed and proficient (`tmux -V`)
- [ ] **Multiple Claude accounts** for parallel agents
- [ ] **Stage 7+ experience** (100+ hours multi-agent)
- [ ] **High chaos tolerance** (some bugs, some lost work)
- [ ] **Budget:** $50-200/day

### Installation

```bash
# Step 1: Install Gas Town
go install github.com/steveyegge/gastown/cmd/gt@latest

# Step 2: Verify installation
gt version

# Step 3: Initialize your town (creates ~/.gt)
gt init
```

**Checkpoint:** You should see `Town initialized at ~/.gt`

### Adding Your First Rig

```bash
# Add a project rig
gt rig add /path/to/your/project

# Verify
gt rig list
```

**Checkpoint:** Your project should appear in the rig list

### Starting the Core Roles

Recommended startup sequence:

```bash
# 1. Start town-level roles first
gt mayor up
gt deacon up
gt dogs up

# 2. Start rig-level infrastructure
gt witness up my-project
gt refinery up my-project

# 3. Start named workers
gt polecat up my-project alice
gt polecat up my-project bob
gt polecat up my-project carol
```

**Checkpoint:** `gt status` should show all roles running

### tmux Workflow

Gas Town is tmux-native. Understand this structure:

```
┌─────────────────────────────────────────────────────────────┐
│  tmux session: gastown                                       │
├────────────────────┬────────────────────┬───────────────────┤
│                    │                    │                   │
│  Window: mayor     │  Window: alice     │  Window: bob      │
│  ┌──────────────┐  │  ┌──────────────┐  │  ┌─────────────┐ │
│  │  Mayor       │  │  │  Polecat     │  │  │  Polecat    │ │
│  │  Agent       │  │  │  Alice       │  │  │  Bob        │ │
│  └──────────────┘  │  └──────────────┘  │  └─────────────┘ │
├────────────────────┴────────────────────┴───────────────────┤
│  Window: overview                                            │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ rpai - Agent Status Monitor                             ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

### Startup Script

Save this as `gastown-start.sh`:

```bash
#!/bin/bash
SESSION="gastown"

# Kill existing session if requested
if [ "$1" = "--fresh" ]; then
  tmux kill-session -t $SESSION 2>/dev/null
fi

# Create session
tmux new-session -d -s $SESSION -n 'overview'

# Infrastructure windows
tmux new-window -t $SESSION -n 'mayor'
tmux new-window -t $SESSION -n 'infra'
tmux split-window -h -t $SESSION:infra

# Per-rig windows
for RIG in project1 project2; do
  tmux new-window -t $SESSION -n "rig-$RIG"
  tmux split-window -h -t "rig-$RIG"
done

# Polecat windows
for POLECAT in alice bob carol; do
  tmux new-window -t $SESSION -n "$POLECAT"
done

# Inbox window
tmux new-window -t $SESSION -n 'inbox'

# Start roles
tmux send-keys -t $SESSION:mayor 'gt mayor up' C-m
tmux send-keys -t $SESSION:infra.0 'gt deacon up' C-m
tmux send-keys -t $SESSION:infra.1 'gt dogs up' C-m
tmux send-keys -t $SESSION:rig-project1.0 'gt witness up project1' C-m
tmux send-keys -t $SESSION:rig-project1.1 'gt refinery up project1' C-m
tmux send-keys -t $SESSION:alice 'gt polecat up project1 alice' C-m
tmux send-keys -t $SESSION:bob 'gt polecat up project1 bob' C-m
tmux send-keys -t $SESSION:inbox 'watch -n 5 gt inbox' C-m

# Attach
tmux select-window -t $SESSION:overview
tmux attach -t $SESSION
```

### Typical Daily Workflow

```bash
# Morning: Start town
./gastown-start.sh

# Review overnight status
gt status
gt inbox

# File new feature
gt inbox send my-project "Build user authentication"

# Refinery decomposes, assigns to polecats
# You review pending decisions
gt inbox respond 5 --approve
gt inbox respond 7 --approve

# Monitor throughout day (switch tmux windows)
# Dogs run quality checks automatically

# Evening: Review completed work
gt inbox review
gt approve 12 15 18  # Approve completed items

# End of day (polecats persist, crew killed)
gt crew purge my-project
```

---

## 8. Checkpoints and Verification

### Post-Installation Checkpoints

| Step | Command | Expected Output |
|------|---------|-----------------|
| Go installed | `go version` | `go version go1.21+` |
| gt installed | `gt version` | Version number |
| Town initialized | `gt status` | Shows town state |
| Rig added | `gt rig list` | Shows your project |
| Mayor running | `gt mayor status` | `running` |

### Health Checks

```bash
# Check all role status
gt status

# Check specific rig
gt rig status my-project

# View agent health
gt deacon report
```

**Healthy state indicators:**
- All roles show `running`
- Deacon reports no anomalies
- Inbox has reasonable pending items (not 100+)
- Polecats are progressing on tasks

### Quality Verification

```bash
# Trigger Dogs quality check
gt dogs bark

# Review what passed/failed
gt dogs report
```

---

## 9. Troubleshooting

### Common Failures and Recovery

#### 1. Context Collapse

**Symptom:** Agents stop making sense, circular reasoning

**Cause:** Beads state corruption or no auto-compact

**Recovery:**
```bash
gt town reset --soft   # Keep config, clear state
gt beads sync --force  # Force context resync
```

---

#### 2. Race Conditions / Merge Conflicts

**Symptom:** Conflicting commits, overwritten work

**Cause:** Multiple Polecats editing same files

**Recovery:**
- Use git worktrees for file isolation
- Implement file ownership rules
- Use the Refinery's merge queue

```bash
# Check for conflicts
git status

# If conflicts exist
gt refinery resolve my-project
```

---

#### 3. Runaway Crew

**Symptom:** Cost spike, dozens of Crew spawned unexpectedly

**Cause:** Refinery misconfiguration or task explosion

**Recovery:**
```bash
# Kill all crew immediately
gt crew purge --all

# Set limits
gt config set crew.max_per_rig 5
gt config set crew.idle_timeout 15
```

---

#### 4. Mayor Deadlock

**Symptom:** No work getting assigned, town seems stuck

**Cause:** Mayor waiting for human decision on something

**Recovery:**
```bash
# Check inbox
gt inbox

# Approve/reject pending items
gt inbox respond <id> --approve
gt inbox respond <id> --reject
```

---

#### 5. Beads Desync

**Symptom:** Agents have stale context, working on old state

**Cause:** Git conflicts in Beads repo

**Recovery:**
```bash
# Force sync
gt beads sync --force

# If that fails, reset Beads
gt beads reset
```

---

#### 6. Agent Won't Start

**Symptom:** `gt polecat up` returns error

**Cause:** Claude account issue, rate limiting, or config problem

**Recovery:**
```bash
# Check config
gt config list

# Try different account
gt config set polecat.alice.account secondary

# Check Claude status
claude --version
```

---

### Recovery Command Reference

```bash
# Soft reset (keep config)
gt town reset --soft

# Hard reset (full reinstall)
gt town reset --hard

# Kill all agents
gt town down

# Restart specific role
gt polecat down my-project alice
gt polecat up my-project alice

# Force Beads sync
gt beads sync --force

# Clear inbox backlog
gt inbox clear --all

# Emergency cost stop
gt pause --all  # Pause all work
gt resume --all # Resume when ready
```

---

## 10. When to Use Gas Town

### Use Gas Town When:

- You're at Stage 7+ (10+ agents, comfortable with chaos)
- Budget is not a concern ($50-200/day)
- You want **team-scale output** as a solo developer
- You have clear product vision but need implementation velocity
- You're comfortable with imperfection (some bugs fixed 2-3 times)
- You have tmux proficiency
- You understand the PM → engineering team mental model

### Don't Use Gas Town When:

- You're below Stage 6 on the dev evolution scale
- Budget is constrained
- You need polish and stability
- You need predictable, controlled outcomes
- You're not comfortable with chaos
- The project is simple enough for Ralph loops
- You haven't mastered Levels 0-6 on the complexity ladder

### Decision Matrix

```
┌────────────────────────────────────────────────────────────────┐
│                    WHICH ORCHESTRATOR?                          │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  START HERE                                                     │
│      │                                                          │
│      ▼                                                          │
│  Are you Stage 7+? ──No──► Use Ralph Wiggum or CC Mirror       │
│      │                                                          │
│     Yes                                                         │
│      │                                                          │
│      ▼                                                          │
│  Is cost a concern? ──Yes──► Use CC Mirror + Parallel Ralph    │
│      │                                                          │
│      No                                                         │
│      │                                                          │
│      ▼                                                          │
│  Need 24/7 autonomous? ──Yes──► Consider Infinite Orchestra    │
│      │                                                          │
│      No                                                         │
│      │                                                          │
│      ▼                                                          │
│  Want maximum throughput + control?                             │
│      │                                                          │
│     Yes                                                         │
│      │                                                          │
│      ▼                                                          │
│  ┌─────────────────────┐                                        │
│  │     GAS TOWN        │                                        │
│  └─────────────────────┘                                        │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

---

## 11. Quotes and Key Statements

### On the Core Philosophy

> "Claude Code is the world's biggest fuckin' ant. Everyone is focused on making their ant run longer... when nature prefers colonies."

> "Gas Town is an Idea Compiler. You just make up features, design them, file the implementation plans, and sling work around to your polecats and crew."

> "Work becomes fluid, an uncountable that you sling around freely, like slopping shiny fish into wooden barrels at the docks."

### On Expectations

> "Some bugs fixed 2-3 times. Some fixes get lost. Focus: THROUGHPUT, not perfection."

> "You're not a programmer anymore. You're the head chef of a kitchen with AI robotic sous chefs."

### On Prerequisites

> "If you're not at Stage 7, you'll get your face ripped off by superintelligent chimpanzees."

> "If you have any doubt whatsoever, then you can't use it."

### On Maturity

> "Code is 3 weeks old - smuggled 400 miles upriver in my ass."

> "100% vibe-coded - I have never looked at the code myself."

### On Cost

> "If you care about costs, don't use this."

> "Expensive as hell - multiple Claude accounts needed."

### On Language Choice

> "Go is just... good. It's boring. You can always understand it!"

> "TypeScript: 1/3 to 1/2 of diffs are type wrestling."

### On Agents

> "That's you, Human. As the Overseer, you have an identity in the system, and your own inbox, and you can send and receive town mail."

> "Build a colony of coding agents, not the world's largest ant."

---

## 12. Comparison with Other Patterns

### Gas Town vs Ralph Wiggum

| Aspect | Ralph Wiggum | Gas Town |
|--------|--------------|----------|
| **Model** | Single agent, retry loop | Multi-agent factory |
| **Complexity** | Bash script | Full system |
| **Persistence** | Via git/progress.txt | Beads data plane |
| **Parallelism** | None (sequential) | Native (many agents) |
| **Roles** | None | 8 specialized roles |
| **Setup** | Minutes | Hours/days |
| **Cost** | Single agent | Multiple accounts |
| **Use Case** | Well-defined features | Complex systems, ongoing dev |

**When to use Ralph:** Single feature, clear completion criteria, budget-conscious
**When to use Gas Town:** Building entire products, team-scale output needed

---

### Gas Town vs CC Mirror

| Aspect | CC Mirror | Gas Town |
|--------|-----------|----------|
| **Model** | Task-based DAG | Agent factory |
| **Complexity** | Medium | High |
| **Setup** | npx command | Go install + config |
| **Dependencies** | TaskCreate/BlockedBy | Beads + Agent Mail |
| **Parallelism** | Auto-scheduled | Explicit workers |
| **Roles** | None (generic agents) | 8 specialized |
| **Persistence** | Built-in tasks | Git via Beads |
| **Cost** | Single variant | Multiple accounts |

**nummanali's take:**
> "Simplicity covers 80% with zero effort - mass-market ease. Gas Town for remaining 20%."

**When to use CC Mirror:** Most projects, getting started with multi-agent
**When to use Gas Town:** Stage 7+ scale, maximum throughput

---

### Gas Town vs Infinite Orchestra

| Aspect | Orchestra | Gas Town |
|--------|-----------|----------|
| **Model** | Self-improving | Production factory |
| **Environment** | Docker container | tmux + local |
| **Autonomy** | High (improves itself) | Human-directed |
| **Parallelism** | Sequential (for now) | Native parallel |
| **Roles** | Profiles (coder, arch) | 8 fixed roles |
| **Persistence** | Neo4j optional | Beads |
| **24/7** | Yes (designed for) | Yes (tmux) |

**When to use Orchestra:** Experimental, self-evolving systems
**When to use Gas Town:** Production development, human oversight

---

### Pattern Comparison Summary

```
┌─────────────────────────────────────────────────────────────────┐
│                    ORCHESTRATOR SPECTRUM                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  SIMPLE ◄────────────────────────────────────────────► COMPLEX  │
│                                                                  │
│  [Ralph Wiggum]    [CC Mirror]    [Orchestra]    [Gas Town]    │
│       │                │              │              │          │
│   Single agent     Multi-agent    Self-improving  Agent factory │
│   Retry loop       Task-based     Docker-based    Role-based   │
│   Bash script      Native CC      Specialized     Full system  │
│   $10-30/day       $30-80/day     $50-100/day    $50-200/day   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 13. Sources

### Primary Sources

#### Blog Posts
- [Welcome to Gas Town](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04) - Full philosophical context and architecture
- [The Future of Coding Agents](https://steve-yegge.medium.com/the-future-of-coding-agents-e9451a84207c) - Agent evolution thesis
- [Beads Best Practices](https://steve-yegge.medium.com/beads-best-practices-2db636b9760c) - Memory system deep dive
- [Revenge of the Junior Developer](https://sourcegraph.com/blog/revenge-of-the-junior-developer) - Wave framework
- [The Brute Squad](https://sourcegraph.com/blog/the-brute-squad) - Multi-agent philosophy

#### GitHub Repositories
- [steveyegge/gastown](https://github.com/steveyegge/gastown) - Multi-agent workspace manager
- [steveyegge/beads](https://github.com/steveyegge/beads) - Agent memory system (~225K lines Go)
- [steveyegge/mcp_agent_mail](https://github.com/steveyegge/mcp_agent_mail) - Inter-agent communication
- [steveyegge/vc](https://github.com/steveyegge/vc) - AI-orchestrated coding agent colony
- [steveyegge/efrit](https://github.com/steveyegge/efrit) - Native elisp coding agent for Emacs

#### Podcasts & Interviews
- [Changelog: Adventures in Babysitting Coding Agents](https://changelog.com/friends/96)
- [O'Reilly: Vibe Coding with Steve Yegge](https://www.oreilly.com/radar/podcast/generative-ai-in-the-real-world-vibe-coding-with-steve-yegge/)

#### Twitter/X
- [@steve_yegge](https://x.com/steve_yegge) - Announcements and discussions
- [Original Gas Town announcement thread](https://x.com/steve_yegge/status/2008002562650505233)

### Community Extensions

| Extension | Author | Purpose |
|-----------|--------|---------|
| **GTGUI** | @TRIBE-INC | Age of Empires style GUI for Gas Town |
| **Roughneck** | @mjtechguy | Run multiple Gas Towns simultaneously |
| **Station** | @Esteban_Puerta9 | Nats-based alternative architecture |
| **numman-ali Tutorial Skill** | @nummanali | Claude Code skill for learning Gas Town |

### Installation
```bash
# GTGUI
git clone https://github.com/TRIBE-INC/gtgui

# Roughneck
git clone https://github.com/mjtechguy/roughneck

# Tutorial skill
/plugin marketplace add numman-ali/n-skills
/plugin install gastown@numman-ali/n-skills
```

### Books
- [Vibe Coding](https://itrevolution.com) by Steve Yegge and Gene Kim

---

## Appendix: Quick Reference

### Installation Commands

```bash
# Install
go install github.com/steveyegge/gastown/cmd/gt@latest

# Initialize
gt init
gt rig add /path/to/repo
```

### Role Management

```bash
# Town-level
gt mayor up|down|status
gt deacon up|down|status
gt dogs up|down|status|bark

# Rig-level
gt witness up|down <rig>
gt refinery up|down <rig>
gt polecat up|down|list <rig> [name]
gt crew spawn|count|purge <rig>
```

### Inbox

```bash
gt inbox                     # View pending
gt inbox respond <id> --approve|--reject
gt inbox clear
```

### Town Management

```bash
gt status                    # Town-wide status
gt town down                 # Stop all agents
gt town reset --soft|--hard  # Reset state
gt config set|get|list       # Configuration
```

### Beads

```bash
gt beads sync --force
gt beads reset
bd ready
bd create "Task title"
bd dep add <child> <parent>
```

---

## Cost Estimation

```
Role-based cost per hour (estimates):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Mayor (Opus):      $15-20/hour
Refinery (Opus):   $15-20/hour
Dogs (Sonnet):     $5-8/hour
Polecats (Sonnet): $5-10/hour each
Witness (Haiku):   $1-3/hour
Deacon (Haiku):    $1-2/hour
Crew (Haiku):      $0.50-2/hour each

Example daily cost:
━━━━━━━━━━━━━━━━━━
1 Mayor + 1 Deacon + 1 Dogs + 2 Rigs + 3 Polecats + 5 Crew
= $18 + $1.5 + $7 + $40 + $22.5 + $5
= ~$94/hour (rough estimate)

8 hours = ~$752/day (heavy usage)
Conservative usage = $50-100/day
```

---

## Tags

`#orchestration` `#gas-town` `#steve-yegge` `#agent-factory` `#vibe-coding` `#beads` `#tmux` `#multi-agent` `#deep-dive` `#extraction` `#level-7` `#complexity-ladder` `#mcp-agent-mail` `#autonomous`

---

## Document Metadata

- **Created:** 2026-01-10
- **Author:** Claude Opus 4.5 via extraction synthesis
- **Sources:** 6 primary documents, 28+ cross-references
- **Line Count:** 900+
- **Depth:** Architecture-level extraction

---

*"Build a colony of coding agents, not the world's largest ant."*

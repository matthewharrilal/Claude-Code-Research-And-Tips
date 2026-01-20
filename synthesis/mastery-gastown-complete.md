# Gas Town: Complete Factory-Scale Agent Orchestration Guide

**Version:** 1.0
**Compiled:** 2026-01-19
**Sources:** 4 primary extraction documents synthesized
**Status:** Definitive reference for Gas Town ecosystem mastery

---

## Table of Contents

1. [You Are Here](#1-you-are-here)
2. [The Core Philosophy](#2-the-core-philosophy)
3. [The 8-Role Hierarchy Deep Dive](#3-the-8-role-hierarchy-deep-dive)
4. [Beads Data Plane Architecture](#4-beads-data-plane-architecture)
5. [The Merge Wall Problem and Refinery Solution](#5-the-merge-wall-problem-and-refinery-solution)
6. [Multi-Factory Patterns (Roughneck)](#6-multi-factory-patterns-roughneck)
7. [Token Economics and Cost Modeling](#7-token-economics-and-cost-modeling)
8. [Complexity Ladder Level 7 Requirements](#8-complexity-ladder-level-7-requirements)
9. [Mental Models](#9-mental-models)
10. [Implementation Guide](#10-implementation-guide)
11. [Checkpoints](#11-checkpoints)
12. [Troubleshooting](#12-troubleshooting)
13. [Integration Patterns](#13-integration-patterns)
14. [Source Attribution](#14-source-attribution)

---

## 1. You Are Here

```
╔═══════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                            ║
║   YOU ARE HERE: The Most Advanced Level of Claude Code Orchestration                       ║
║                                                                                            ║
║   This document covers Gas Town - Steve Yegge's factory-scale multi-agent system.          ║
║   Gas Town represents Level 7 on the Complexity Ladder - the highest level of              ║
║   autonomous AI development capability available in the Claude Code ecosystem.             ║
║                                                                                            ║
║   ┌─────────────────────────────────────────────────────────────────────────────────────┐  ║
║   │                          THE COMPLEXITY LADDER                                       │  ║
║   ├─────────────────────────────────────────────────────────────────────────────────────┤  ║
║   │                                                                                      │  ║
║   │  Level 7: Gas Town Factory          ◀════════ YOU ARE HERE                          │  ║
║   │           |                                                                          │  ║
║   │           | Factory-scale agent orchestration                                        │  ║
║   │           | 20-30 agents, human as Product Manager                                   │  ║
║   │           | 8 specialized roles working continuously                                 │  ║
║   │           |                                                                          │  ║
║   │  Level 6: Parallel Swarms + Worktrees                                               │  ║
║   │           |                                                                          │  ║
║   │  Level 5: Multi-Agent Orchestration (CC Mirror)                                     │  ║
║   │           |                                                                          │  ║
║   │  Level 4: PRD-Driven Loops (Full Ralph)                                             │  ║
║   │           |                                                                          │  ║
║   │  Level 3: Simple Loops (Basic Ralph)                                                │  ║
║   │           |                                                                          │  ║
║   │  Level 2: Subagents + Hooks                                                         │  ║
║   │           |                                                                          │  ║
║   │  Level 1: CLAUDE.md + Slash Commands                                                │  ║
║   │           |                                                                          │  ║
║   │  Level 0: Single Interactive Session                                                │  ║
║   │                                                                                      │  ║
║   └─────────────────────────────────────────────────────────────────────────────────────┘  ║
║                                                                                            ║
╚═══════════════════════════════════════════════════════════════════════════════════════════╝
```

### What This Document Covers

This is the **definitive deep synthesis** of Steve Yegge's Gas Town multi-agent orchestration framework, combining insights from:

- **Gas Town Deep Dive** - Core architecture and 8-role hierarchy
- **Beads Data Plane** - Git-backed memory system (~225K lines Go)
- **Orchestra Self-Improvement** - Comparison with hub-and-spoke patterns
- **Roughneck Multi-Factory** - Cloud infrastructure provisioning for Gas Town

### How This Connects to Other Patterns

| Related Document | Relationship |
|------------------|--------------|
| `mastery-ralph-complete.md` | Ralph is Level 4; Gas Town supersedes Ralph for factory-scale |
| `architecture-complexity-ladder.md` | Gas Town is Level 7 on the ladder |
| `compare-orchestration-patterns.md` | Gas Town vs CC Mirror vs Orchestra |

### Prerequisites Before Reading

Before attempting Gas Town, you must have:

| Requirement | Description | Why It Matters |
|-------------|-------------|----------------|
| **Stage 7+ Experience** | 100+ hours managing 10+ Claude instances | Gas Town assumes you can juggle complexity |
| **tmux Proficiency** | Gas Town is tmux-native; no GUI alternative | Core interface is terminal-based |
| **Go Runtime** | Go 1.23+ required | Gas Town and Beads are written in Go |
| **High Chaos Tolerance** | Accept some bugs, focus on throughput | Early-stage software with rough edges |
| **Budget** | $50-200/day for API costs | Multiple Claude accounts needed |
| **Git 2.25+** | Required for worktree support | Agents need isolated workspaces |

### Warning from the Creator

> "If you're not at Stage 7, you'll **get your face ripped off** by superintelligent chimpanzees."
> -- Steve Yegge

> "If you have any **doubt** whatsoever, then you can't use it."
> -- Steve Yegge

---

## 2. The Core Philosophy

### The Fundamental Insight: Colony Over Ant

> "**Cla**ude Code is the world's biggest fuckin' ant. **Eve**ryone is focused on making their ant run **lon**ger... when nature prefers **col**onies."
> -- Steve Yegge

This single insight separates Gas Town from every other orchestration pattern:

```
TRADITIONAL APPROACH                    GAS TOWN APPROACH
━━━━━━━━━━━━━━━━━━━━                    ━━━━━━━━━━━━━━━━━━━━

     One Big Ant                              Ant Colony
         |                                        |
    Make it                                  Build the
    run longer                               factory
         |                                        |
    Context window                           Multiple workers
    limits everything                        share the load
         |                                        |
    You are the                              You are the
    programmer                               Product Manager
         |                                        |
    Sequential                               Parallel
    execution                                execution
```

### The "Idea Compiler" Concept

> "Gas Town is an **Idea Compiler**. You just make up features, design them, file the implementation plans, and sling work around to your polecats and crew."
> -- Steve Yegge

**Input:** Your ideas and feature requests
**Output:** Working code, shipped products

You're not writing code anymore. **You're managing a factory.**

### Vibe Coding vs Traditional Coding

Steve Yegge pioneered "vibe coding" as a philosophy:

```
TRADITIONAL CODING              VIBE CODING
━━━━━━━━━━━━━━━━━━━            ━━━━━━━━━━━━━━
You write code                 You describe the "vibe"
You read code                  AI generates code
You debug                      You never read the code
Judge by implementation        Judge by outcomes
Zero bugs goal                 Accept some bugs
Sequential focus               Throughput focus
```

**Critical mindset shift:** In Gas Town, you don't care HOW the code works. You care that it WORKS.

### The Three Pillars of Gas Town

1. **Agent Specialization**
   - 8 distinct roles with clear responsibilities
   - Each role optimized for its function
   - Opus 4.5 for coordination, Sonnet for implementation, Haiku for observation

2. **Persistent Memory (Beads)**
   - Git-backed data plane
   - Agents share context across sessions
   - "50 First Dates" problem solved

3. **Work Distribution (GUPP)**
   - Work "slung" to hooks
   - Agents check hooks on startup
   - Universal Propulsion Principle: "If there is work on your hook, YOU MUST RUN IT"

---

## 3. The 8-Role Hierarchy Deep Dive

### Overview Diagram

```
╔═══════════════════════════════════════════════════════════════════════════════════════════╗
║                              GAS TOWN 8-ROLE HIERARCHY                                     ║
╠═══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                            ║
║  HUMAN LEVEL                                                                               ║
║  ┌──────────────────────────────────────────────────────────────────────────────────────┐ ║
║  │                              OVERSEER (YOU)                                           │ ║
║  │              Product Manager · Decision Maker · Ultimate Authority                    │ ║
║  │                 Receives notifications · Approves major decisions                     │ ║
║  └─────────────────────────────────────┬────────────────────────────────────────────────┘ ║
║                                        │                                                   ║
║                                        ▼                                                   ║
║  TOWN LEVEL (Global - One instance each)                                                   ║
║  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐                            ║
║  │     MAYOR       │  │     DEACON      │  │      DOGS       │                            ║
║  │   Opus 4.5      │  │     Sonnet      │  │     Sonnet      │                            ║
║  │   Coordination  │  │    Monitoring   │  │  Quality Gates  │                            ║
║  │   Concierge     │  │    Heartbeat    │  │  Maintenance    │                            ║
║  └────────┬────────┘  └────────┬────────┘  └────────┬────────┘                            ║
║           │                    │                    │                                      ║
║           └────────────────────┼────────────────────┘                                      ║
║                                │                                                           ║
║                                ▼                                                           ║
║  RIG LEVEL (Per-Project - Multiple instances)                                              ║
║  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐                            ║
║  │    REFINERY     │  │    WITNESS      │  │    POLECAT      │                            ║
║  │   Opus 4.5      │  │     Haiku       │  │     Sonnet      │                            ║
║  │  Merge Queue    │  │   Supervisor    │  │  Named Workers  │                            ║
║  │  Task Decompose │  │  Troubleshoot   │  │  (3-30 swarm)   │                            ║
║  └─────────────────┘  └─────────────────┘  └────────┬────────┘                            ║
║                                                     │                                      ║
║                                                     ▼                                      ║
║  PERSONAL LEVEL                                                                            ║
║  ┌──────────────────────────────────────────────────────────────────────────────────────┐ ║
║  │                               CREW                                                    │ ║
║  │           Long-lived personal agents · Direct to Overseer                             │ ║
║  │              Independent from swarm · Sustained design work                           │ ║
║  └──────────────────────────────────────────────────────────────────────────────────────┘ ║
║                                                                                            ║
╚═══════════════════════════════════════════════════════════════════════════════════════════╝
```

### Role Details Matrix

| Role | Level | Model | Function | Instances | Cost/Hour |
|------|-------|-------|----------|-----------|-----------|
| **Overseer** | Human | N/A | Product Manager, decision maker | 1 (you) | $0 |
| **Mayor** | Town | Opus 4.5 | Chief coordinator, concierge | 1 | $15-20 |
| **Deacon** | Town | Sonnet | Heartbeat, plugin runner, recycling | 1 | $5-8 |
| **Dogs** | Town | Sonnet | Quality gates, maintenance | 1-3 | $5-8 |
| **Refinery** | Rig | Opus 4.5 | Merge queue, task decomposition | 1 per rig | $15-20 |
| **Witness** | Rig | Haiku | Supervise polecats, unstick agents | 1 per rig | $1-3 |
| **Polecat** | Rig | Sonnet | Named workers, implementation | 3-30 per rig | $5-10 each |
| **Crew** | Personal | Sonnet/Opus | Long-lived personal agents | 1-5 | $5-10 each |

---

### Role 1: Overseer (YOU)

**Function:** The human authority in Gas Town - Product Manager, not programmer.

**Responsibilities:**
- Define features and priorities
- Review inbox decisions
- Approve major changes
- Provide human judgment
- Direct Crew for hands-on work

**Key Interface:**
```bash
gt inbox                        # View pending decisions
gt inbox send <rig> "Build X"   # File new work
gt sling <bead-id> <rig>        # Direct assignment
gt handoff                      # End session gracefully
```

> "That's you, **Hum**an. As the Overseer, you have an identity in the system, and your own inbox, and you can send and receive town mail."
> -- Steve Yegge

---

### Role 2: Mayor (Town-Level Coordination)

**Function:** Your concierge and chief-of-staff. Primary AI interface.

**Responsibilities:**
- Receive high-level directives from Overseer
- Analyze and decompose work
- Create convoys (work bundles)
- Spawn appropriate agents
- Distribute issues via hooks
- Summarize results

**Commands:**
```bash
gt mayor attach                 # Interactive session (recommended)
gt mayor up                     # Start mayor
gt mayor status                 # Check state
gt mayor down                   # Stop mayor
```

**Key Insight:** You technically only need the Mayor. Running with just the Mayor is a good tutorial/intro to Gas Town.

**Model Recommendation:** Opus 4.5 (complex coordination requires top-tier reasoning)

---

### Role 3: Deacon (Monitoring/Heartbeat)

**Function:** The daemon beacon - central nervous system of Gas Town.

**Responsibilities:**
- Run town-level plugins
- Manage patrol workflows (every 2 minutes)
- Oversee worker recycling
- Broadcast "Do Your Job" (DYFJ) signals
- Maintain heartbeat across town

**Commands:**
```bash
gt deacon up                    # Start deacon
gt deacon status                # Check state
gt deacon log                   # View patrol log
gt deacon down                  # Stop (recommended for stability)
```

**Warning (v0.3.x):**
> "Apologies to everyone using Gas Town who is being bitten by the **mur**derous **ram**paging Deacon who is **spr**ee-**kil**ling all the other workers while on his patrol."
> -- Steve Yegge

**Run without Deacon until v0.4.0+ for stability.**

**Model Recommendation:** Sonnet (monitoring doesn't need Opus)

---

### Role 4: Dogs (Quality Gates/Maintenance)

**Function:** The Deacon's personal crew - town-level grunts handling maintenance.

**Responsibilities:**
- Branch cleanup (stale branches)
- Handyman tasks
- Plugin execution
- Prevent Deacon overload
- Quality review

**Commands:**
```bash
gt dogs up                      # Start dogs
gt dogs bark                    # Trigger quality check
gt dogs report                  # View status
gt dogs clean-branches <rig>    # Force cleanup
```

**Includes Boot:** Special Dog that monitors Deacon health every 5 minutes.

**Model Recommendation:** Sonnet (quality review requires reasoning)

---

### Role 5: Refinery (Merge Queue Manager)

**Function:** Intelligent merge queue manager - the gatekeeper of code integration.

**Responsibilities:**
- Merge polecat changes sequentially to main
- Prevent merge conflicts via rebasing
- Resolve conflicts automatically where possible
- Ensure no work is lost
- Escalate unresolvable conflicts

**Commands:**
```bash
gt refinery up <rig>            # Start for rig
gt refinery status <rig>        # Check status
gt refinery process <rig>       # Force process queue
gt refinery resolve <rig>       # Manual resolution
```

**Key Insight:** The Refinery solves the "Merge Wall" problem where multiple agents overwrite each other's work.

**Model Recommendation:** Opus 4.5 (merge resolution is architecturally complex)

---

### Role 6: Witness (Per-Rig Supervisor)

**Function:** Supervisor and troubleshooter for polecat swarms.

**Responsibilities:**
- Monitor polecat health and progress
- Unstick blocked workers
- Manage merge queue flow
- Run rig-level plugins
- Report to Deacon

**Commands:**
```bash
gt witness up <rig>             # Start for rig
gt witness status <rig>         # Check status
gt witness report <rig>         # Get state report
gt witness check <rig>          # Force health check
```

> "Once you spin up **eno**ugh **pol**ecats, you need an agent just to watch over them and help them get un-**stu**ck. The **Wit**ness patrol helps smooth things out so it's almost perfect for most runs."
> -- Steve Yegge

**Model Recommendation:** Haiku (observation doesn't need heavy reasoning)

---

### Role 7: Polecat (Named Workers)

**Function:** Ephemeral workers generating pull requests - your implementation army.

**Responsibilities:**
- Complete assigned implementation tasks
- Produce code changes
- Submit MRs to merge queue
- Run tests for changes
- Decommission after task completion

**Commands:**
```bash
gt polecat up <rig> alice       # Start named polecat
gt polecat list <rig>           # List all polecats
gt polecat assign alice <task>  # Assign task
gt polecat status <rig> alice   # Check status
gt sling <issue> <rig>          # Spawn via sling (preferred)
```

**Naming Convention:** Use human names (alice, bob, carol) for mental model clarity.

**Scaling:** 3-30 polecats per rig depending on task complexity and budget.

> "**Pol**ecats thrive on well-defined, fully-spec'ed beads epics."
> -- Steve Yegge

**Model Recommendation:** Sonnet (main workhorse for implementation)

---

### Role 8: Crew (Personal Agents)

**Function:** Long-lived personal coding agents for sustained design work.

**Responsibilities:**
- Sustained design and architecture work
- Back-and-forth collaboration with Overseer
- Personal projects (non-swarm work)
- Exploratory coding
- Direct Overseer control

**Commands:**
```bash
gt crew add <rig> --name "designer"  # Add crew member
gt crew spawn <rig> --task "..."     # Spawn with task
gt crew count <rig>                   # Count active
gt crew purge <rig>                   # End of day cleanup
```

**Key Difference:** Unlike polecats, Crew members are NOT managed by Witness. They report directly to you.

> "The Crew are the agents you'll **per**sonally use the **mos**t, after the Mayor. They are per-Rig coding agents who work for the Overseer (you), and are **not** managed by the Witness."
> -- Steve Yegge

**Model Recommendation:** Sonnet or Opus (depends on task complexity)

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
[Polecat: carol]               │
     │                          │
     │ PRs complete             │
     ▼                          │
[Refinery] ← merge queue ───────┘
     │
     │ sequential merge
     ▼
[Dogs] ← quality check
     │
     │ if passes
     ▼
[Main Branch]
```

---

## 4. Beads Data Plane Architecture

### The "50 First Dates" Problem

> "**Age**nts suffer from '50 First Dates' **syn**drome - they wake up with no **mem**ory of yesterday."
> -- Steve Yegge

Every new Claude session starts fresh. This is the fundamental problem Beads solves.

### What is Beads?

**Beads (`bd`) is a distributed, git-backed issue tracker designed specifically for AI agents.**

**Stats:**
- ~225K lines of Go
- 11K+ GitHub stars
- 100% vibe-coded
- Steve never read the code himself

### Why Markdown Plans Fail at Scale

| Problem | Consequence |
|---------|-------------|
| Not queryable | Agents must parse dozens of files to reconstruct work graph |
| No dependency tracking | Agents can't compute which tasks are unblocked |
| Conflict-prone | Multiple agents editing same files |
| Implicit task stacks | "Intelligent wandering" without clear direction |

### Beads Dual-Persistence Model

```
╔═══════════════════════════════════════════════════════════════════════════════════════════╗
║                         BEADS DUAL-PERSISTENCE ARCHITECTURE                                ║
╠═══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                            ║
║                              ┌──────────────────┐                                          ║
║                              │     bd CLI       │                                          ║
║                              │   (User/Agent)   │                                          ║
║                              └────────┬─────────┘                                          ║
║                                       │                                                    ║
║               ┌───────────────────────┼───────────────────────┐                           ║
║               │                       │                       │                            ║
║               ▼                       │                       ▼                            ║
║   ┌─────────────────────────┐         │         ┌─────────────────────────┐               ║
║   │                         │         │         │                         │               ║
║   │      SQLite DB          │◀────────┼────────▶│     JSONL Files         │               ║
║   │    (Performance)        │    sync │         │    (Git Truth)          │               ║
║   │                         │         │         │                         │               ║
║   │  • Sub-ms queries       │         │         │  • Readable diffs       │               ║
║   │  • Complex joins        │         │         │  • Merge-friendly       │               ║
║   │  • Dependency graphs    │         │         │  • Version history      │               ║
║   │  • Full-text search     │         │         │  • Collaboration        │               ║
║   │                         │         │         │                         │               ║
║   │  .beads/beads.db        │         │         │  .beads/issues.jsonl    │               ║
║   │  (gitignored)           │         │         │  (git-tracked)          │               ║
║   │                         │         │         │                         │               ║
║   └─────────────────────────┘         │         └─────────────────────────┘               ║
║               │                       │                       │                            ║
║               │                       │                       │                            ║
║               └───────────────────────┼───────────────────────┘                           ║
║                                       │                                                    ║
║                                       ▼                                                    ║
║                              ┌──────────────────┐                                          ║
║                              │    Git Remote    │                                          ║
║                              │  (Collaboration) │                                          ║
║                              └──────────────────┘                                          ║
║                                                                                            ║
╚═══════════════════════════════════════════════════════════════════════════════════════════╝
```

### The `.beads/` Directory Structure

```
.beads/
├── issues.jsonl         # Git-tracked source of truth
├── deletions.jsonl      # Deletion manifest (prevents resurrection)
├── beads.db             # SQLite cache (gitignored)
├── sync_base.jsonl      # Last-synced snapshot (gitignored)
├── bd.sock              # Daemon socket (gitignored)
├── config.yaml          # Local configuration
└── metadata.json        # Database metadata
```

### Hash-Based IDs

**Format:** `bd-xxxx` (e.g., `bd-a3f8`)

**Why hash IDs?**
- **No central coordinator** - Any agent can create issues
- **No merge collisions** - UUIDs hashed to short prefixes
- **Adaptive scaling** - 4-6 characters based on database size

```
Database Size        ID Length    Collision Risk
─────────────────────────────────────────────────
0-500 issues         4 chars      ~7% at max
501-1500 issues      5 chars      ~2% at max
1501+ issues         6 chars      Negligible
```

### Three-Layer Memory Model

```
╔═══════════════════════════════════════════════════════════════════════════════════════════╗
║                           BEADS MEMORY LAYERS                                              ║
╠═══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                            ║
║  LAYER 1: Hot Context (RAM-cached)                                                         ║
║  ├── Current task state                                                                    ║
║  ├── Last N interactions                                                                   ║
║  └── Active file references                                                                ║
║                                                                                            ║
║  LAYER 2: Warm Context (SQLite + Git index)                                                ║
║  ├── Recent commit history                                                                 ║
║  ├── Cross-agent message log                                                               ║
║  └── Rig state snapshots                                                                   ║
║                                                                                            ║
║  LAYER 3: Cold Context (Git history)                                                       ║
║  ├── Full project history                                                                  ║
║  ├── Previous run outcomes                                                                 ║
║  └── Archived decisions                                                                    ║
║                                                                                            ║
║  RETRIEVAL: Hot → Warm → Cold (only query cold if needed)                                  ║
║                                                                                            ║
╚═══════════════════════════════════════════════════════════════════════════════════════════╝
```

### Key Beads Commands

```bash
# Ready work (no blockers)
bd ready                        # List tasks with zero blockers (actionable NOW)

# Issue management
bd create "Title"               # Create new task
bd show <id>                    # Full task state and history
bd update <id> --status in_progress  # Update status
bd close <id> --reason "Done"   # Close issue

# Dependencies
bd dep add X Y                  # X is blocked by Y
bd dep tree <id>                # Show dependency tree

# Molecules (workflow templates)
bd cook <formula>               # Cook formula into protomolecule
bd mol pour <formula>           # Instantiate molecule (workflow)
bd mol wisp <formula>           # Ephemeral workflow (no audit)

# Sync
bd sync                         # Pull → merge → export → commit → push
```

### Molecules and Wisps: Workflow Chemistry

Beads uses a chemistry metaphor for workflow execution:

| Phase | Name | Storage | Purpose |
|-------|------|---------|---------|
| **Solid** | Proto | `.beads/`, git-synced | Frozen reusable template |
| **Liquid** | Mol | `.beads/`, git-synced | Active persistent workflow |
| **Vapor** | Wisp | Ephemeral (optional) | Temporary, non-audited |

**When to Use Each Phase:**

| Scenario | Phase | Rationale |
|----------|-------|-----------|
| Feature implementation | Mol (Liquid) | Needs audit trail, multi-session |
| Daily patrol cycle | Wisp (Vapor) | Routine, no audit value |
| Code review | Wisp (Vapor) | Ephemeral, result matters not process |
| Bug investigation | Mol (Liquid) | Findings need preservation |
| Deployment checklist | Proto (Solid) | Reusable template |

### Why Git as Database?

> "Git as database provides **dur**able, **dif**fable, **aud**itable storage with **zer**o infrastructure."
> -- Steve Yegge

**Benefits:**
- **Survives crashes:** Everything is committed
- **Audit trail:** Full history of all agent actions
- **Recovery:** Roll back to any point in time
- **Sharing:** Multiple agents share the same store
- **No heavyweight message bus required**

---

## 5. The Merge Wall Problem and Refinery Solution

### The Problem

> "Yegge ran up to a **doz**en agents working on the **sam**e project. 'It worked **ama**zingly up to about 200k LOC, and now they've begun **sav**agely **ove**rwriting each other's work rather than try to deal with merge conflicts.'"
> -- Steve Yegge

When multiple agents work on the same codebase simultaneously:

```
╔═══════════════════════════════════════════════════════════════════════════════════════════╗
║                              THE MERGE WALL PROBLEM                                        ║
╠═══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                            ║
║   Agent Alice:                              Agent Bob:                                     ║
║   ┌──────────────────────┐                  ┌──────────────────────┐                      ║
║   │ Edits: user.go       │                  │ Edits: user.go       │                      ║
║   │ Adds: login function │                  │ Adds: logout function│                      ║
║   └──────────┬───────────┘                  └──────────┬───────────┘                      ║
║              │                                         │                                   ║
║              ▼                                         ▼                                   ║
║   ┌──────────────────────┐                  ┌──────────────────────┐                      ║
║   │ git push             │                  │ git push             │                      ║
║   └──────────┬───────────┘                  └──────────┬───────────┘                      ║
║              │                                         │                                   ║
║              └─────────────────┬───────────────────────┘                                   ║
║                                │                                                           ║
║                                ▼                                                           ║
║                     ┌─────────────────────┐                                                ║
║                     │    CONFLICT!        │                                                ║
║                     │                     │                                                ║
║                     │  Both edited same   │                                                ║
║                     │  file - work lost   │                                                ║
║                     └─────────────────────┘                                                ║
║                                                                                            ║
╚═══════════════════════════════════════════════════════════════════════════════════════════╝
```

### Gas Town's Four Solutions

**1. The Refinery: Sequential Merge Queue**

```
Polecat work flows through Refinery:

Alice completes → Refinery queues → Rebases → Merges to main
                           ↓
Bob completes → Refinery queues → Rebases (with Alice's changes) → Merges
                           ↓
Carol completes → Refinery queues → Rebases (with Alice + Bob) → Merges
```

The Refinery ensures:
- Sequential processing (no race conditions)
- Automatic rebasing before merge
- Conflict detection and escalation
- No work is lost

**2. Hooks as Isolation: Git Worktrees**

Each polecat works in its own git worktree:

```bash
~/gt/
├── rigs/
│   └── myproject/           # Main checkout
├── worktrees/
│   ├── myproject-alice/     # Alice's isolated workspace
│   ├── myproject-bob/       # Bob's isolated workspace
│   └── myproject-carol/     # Carol's isolated workspace
```

**3. Convoys: Grouped Work Units**

Convoys are bundles of related work that start and finish together:

```bash
gt convoy create "auth-feature" bd-001 bd-002 bd-003
# All three issues are now a single unit of work
# They complete together or not at all
```

**4. Advisory Reservations via Agent Mail**

Instead of hard file locks (which cause head-of-line blocking), agents use advisory reservations:

```
Alice: "I'm working on user.go"
Bob: "I'll work on auth.go instead"
# Coordination, not locks
```

### Refinery Commands

```bash
gt refinery up <rig>            # Start for rig
gt refinery status <rig>        # Check queue status
gt refinery process <rig>       # Force process queue
gt refinery resolve <rig>       # Manual conflict resolution
gt refinery pause <rig>         # Pause processing
gt refinery resume <rig>        # Resume processing
```

### When Refinery Escalates

The Refinery handles most conflicts automatically, but escalates when:

1. **Semantic conflicts** - Same function modified with different logic
2. **Build failures** - Merged code doesn't compile
3. **Test failures** - Merged code breaks tests
4. **Timeout** - Conflict resolution takes too long

Escalation goes to your inbox:
```bash
gt inbox
# Shows: "Merge conflict in user.go - requires human review"
```

---

## 6. Multi-Factory Patterns (Roughneck)

### What is Roughneck?

**Roughneck** (by mjtechguy) is an Infrastructure-as-Code tool that provisions cloud VMs preconfigured with Gas Town, Beads, and AI coding assistants.

```
╔═══════════════════════════════════════════════════════════════════════════════════════════╗
║                         ROUGHNECK IN THE GAS TOWN STACK                                    ║
╠═══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                            ║
║   LAYER 4: AGENT ORCHESTRATION                                                             ║
║   ┌────────────────────────────────────────────────────────────────────────────────────┐  ║
║   │  Gas Town (gt) - Mayor, Polecats, Deacon, Refinery                                  │  ║
║   │  The multi-agent factory running ON your provisioned infrastructure                 │  ║
║   └────────────────────────────────────────────────────────────────────────────────────┘  ║
║                                       │                                                    ║
║   LAYER 3: DATA PLANE                                                                      ║
║   ┌────────────────────────────────────────────────────────────────────────────────────┐  ║
║   │  Beads (bd) - Git-backed issue tracking and agent memory                            │  ║
║   │  The shared memory substrate for agent coordination                                 │  ║
║   └────────────────────────────────────────────────────────────────────────────────────┘  ║
║                                       │                                                    ║
║   LAYER 2: CLOUD INFRASTRUCTURE  ◀────┴──── ROUGHNECK                                      ║
║   ┌────────────────────────────────────────────────────────────────────────────────────┐  ║
║   │  • Terraform/OpenTofu for infrastructure provisioning                               │  ║
║   │  • Ansible for configuration management                                             │  ║
║   │  • Multi-cloud support (Hetzner, AWS, DigitalOcean)                                │  ║
║   │  • Isolated deployments with independent state                                      │  ║
║   └────────────────────────────────────────────────────────────────────────────────────┘  ║
║                                       │                                                    ║
║   LAYER 1: CLOUD PROVIDERS                                                                 ║
║   ┌────────────────────────────────────────────────────────────────────────────────────┐  ║
║   │  Hetzner (~$4-8/mo) | AWS EC2 (~$30/mo) | DigitalOcean (~$24/mo)                   │  ║
║   └────────────────────────────────────────────────────────────────────────────────────┘  ║
║                                                                                            ║
╚═══════════════════════════════════════════════════════════════════════════════════════════╝
```

### Roughneck Commands

```bash
# Deployment lifecycle
./roughneck new [name]          # Create new deployment (interactive)
./roughneck deploy [name]       # Deploy existing configuration
./roughneck destroy [name]      # Tear down infrastructure
./roughneck list                # Show all deployments

# Management
./roughneck provision [name]    # Re-run Ansible (no Terraform)
./roughneck update [name]       # Update packages/tools
./roughneck validate [name]     # Run health checks
./roughneck ssh [name]          # SSH into deployment
```

### Multi-Factory Patterns

#### Pattern 1: Environment Isolation

```
┌───────────────────────────────────────────────────────────────────────────────────────┐
│                         ENVIRONMENT ISOLATION PATTERN                                  │
├───────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│   ./roughneck new gastown-prod        ./roughneck new gastown-dev                     │
│               │                                   │                                    │
│               ▼                                   ▼                                    │
│   ┌─────────────────────┐               ┌─────────────────────┐                       │
│   │  Production         │               │  Development        │                       │
│   │  Gas Town           │               │  Gas Town           │                       │
│   │                     │               │                     │                       │
│   │  • Stable gt        │               │  • Latest gt        │                       │
│   │  • Prod beads       │               │  • Test beads       │                       │
│   │  • Auto-start       │               │  • Manual           │                       │
│   └─────────────────────┘               └─────────────────────┘                       │
│                                                                                        │
│   USE CASE: Separate environments for testing Gas Town upgrades                        │
│                                                                                        │
└───────────────────────────────────────────────────────────────────────────────────────┘
```

#### Pattern 2: Geographic Distribution

```
┌───────────────────────────────────────────────────────────────────────────────────────┐
│                       GEOGRAPHIC DISTRIBUTION PATTERN                                  │
├───────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│       US (AWS us-east-1)       EU (Hetzner fsn1)       APAC (DO sgp1)                 │
│              │                        │                       │                        │
│              ▼                        ▼                       ▼                        │
│   ┌───────────────────┐    ┌───────────────────┐    ┌───────────────────┐             │
│   │  gastown-us       │    │  gastown-eu       │    │  gastown-apac     │             │
│   │                   │    │                   │    │                   │             │
│   │  US projects      │    │  EU projects      │    │  APAC projects    │             │
│   │  Low latency      │    │  GDPR compliant   │    │  Local dev team   │             │
│   └───────────────────┘    └───────────────────┘    └───────────────────┘             │
│                                                                                        │
│   USE CASE: Global team with regional compliance requirements                          │
│                                                                                        │
└───────────────────────────────────────────────────────────────────────────────────────┘
```

#### Pattern 3: Cost Optimization (Tiered Infrastructure)

```
┌───────────────────────────────────────────────────────────────────────────────────────┐
│                          COST OPTIMIZATION PATTERN                                     │
├───────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│   High-Priority Work                        Low-Priority Work                          │
│   (AWS t3.xlarge)                           (Hetzner cx21)                            │
│          │                                         │                                   │
│          ▼                                         ▼                                   │
│   ┌───────────────────┐                   ┌───────────────────┐                       │
│   │  gastown-fast     │                   │  gastown-cheap    │                       │
│   │                   │                   │                   │                       │
│   │  8 vCPU, 32GB     │                   │  2 vCPU, 4GB      │                       │
│   │  ~$150/mo         │                   │  ~$4/mo           │                       │
│   │                   │                   │                   │                       │
│   │  Urgent fixes     │                   │  Background       │                       │
│   │  Production bugs  │                   │  refactoring      │                       │
│   └───────────────────┘                   └───────────────────┘                       │
│                                                                                        │
│   USE CASE: Optimize cost by matching instance size to workload priority               │
│                                                                                        │
└───────────────────────────────────────────────────────────────────────────────────────┘
```

#### Pattern 4: Federated Gas Towns (Shared Data Plane)

```
┌───────────────────────────────────────────────────────────────────────────────────────┐
│                          FEDERATED GAS TOWNS PATTERN                                   │
├───────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│                              Shared Git Remote                                         │
│                          (GitHub / GitLab / Gitea)                                     │
│                                     │                                                  │
│                 ┌───────────────────┼───────────────────┐                              │
│                 │                   │                   │                              │
│                 ▼                   ▼                   ▼                              │
│   ┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐                 │
│   │  Gas Town 1       │  │  Gas Town 2       │  │  Gas Town 3       │                 │
│   │  (Frontend)       │  │  (Backend)        │  │  (Infra)          │                 │
│   │                   │  │                   │  │                   │                 │
│   │  Beads: fe-*      │  │  Beads: be-*      │  │  Beads: infra-*   │                 │
│   │  Worktrees: UI    │  │  Worktrees: API   │  │  Worktrees: TF    │                 │
│   └───────────────────┘  └───────────────────┘  └───────────────────┘                 │
│                 │                   │                   │                              │
│                 └───────────────────┼───────────────────┘                              │
│                                     │                                                  │
│                                Git Push/Pull                                           │
│                            (Beads sync via git)                                        │
│                                                                                        │
│   USE CASE: Specialized Gas Towns per domain, coordinated via shared repo              │
│                                                                                        │
└───────────────────────────────────────────────────────────────────────────────────────┘
```

### Roughneck Configuration

```hcl
# deployments/<name>/terraform.tfvars

# Core settings
project_name = "my-gastown"
provider = "hetzner"
region = "fsn1"
instance_type = "cx21"

# AI Assistants
enable_claude = true
enable_codex = true
enable_gemini = true
enable_copilot = true

# Gas Town Ecosystem
enable_gastown = true          # Install Gas Town (gt CLI)
enable_beads = true            # Install Beads (bd CLI)
enable_systemd_services = true # Start Mayor/Deacon on boot

# Infrastructure
enable_letsencrypt = false     # TLS certificates
domain_name = ""               # Domain for Let's Encrypt
enable_k9s = false             # Kubernetes TUI
```

---

## 7. Token Economics and Cost Modeling

### Role-Based Cost Estimates

```
╔═══════════════════════════════════════════════════════════════════════════════════════════╗
║                              COST ESTIMATION MODEL                                         ║
╠═══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                            ║
║  Role-based cost per hour (estimates @ January 2026 pricing):                              ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                                 ║
║  Mayor (Opus 4.5):      $15-20/hour                                                        ║
║  Refinery (Opus 4.5):   $15-20/hour                                                        ║
║  Dogs (Sonnet):         $5-8/hour                                                          ║
║  Polecats (Sonnet):     $5-10/hour each                                                    ║
║  Witness (Haiku):       $1-3/hour                                                          ║
║  Deacon (Sonnet):       $5-8/hour                                                          ║
║  Crew (Sonnet):         $5-10/hour each                                                    ║
║  Boot (Haiku):          $0.50-1/hour                                                       ║
║                                                                                            ║
╚═══════════════════════════════════════════════════════════════════════════════════════════╝
```

### Daily Cost Example (8 hours, moderate usage)

```
Scenario: 1 rig, 5 polecats, 2 crew members

Mayor (Opus):         $18/hr × 8  = $144
Refinery (Opus):      $18/hr × 8  = $144
Dogs (Sonnet):        $7/hr × 8   = $56
Deacon (Sonnet):      $7/hr × 8   = $56
Witness (Haiku):      $2/hr × 8   = $16
Polecats × 5:         $7/hr × 5 × 8 = $280
Crew × 2:             $7/hr × 2 × 8 = $112
                      ────────────────────
                      Total: ~$808/day
```

### Cost Tiers

| Usage Level | Daily Cost | Monthly Cost | Configuration |
|-------------|------------|--------------|---------------|
| **Minimal** | $50-100 | $1,500-3,000 | Mayor + 3 polecats |
| **Moderate** | $100-200 | $3,000-6,000 | Full stack + 5 polecats |
| **Heavy** | $200-400 | $6,000-12,000 | Full stack + 10 polecats |
| **Factory-Scale** | $400-1,000 | $12,000-30,000 | Multiple rigs + 20+ polecats |

### Cost Optimization Strategies

1. **Model Selection**
   - Use Haiku for observation/monitoring roles (Witness, Boot)
   - Use Sonnet for implementation (Polecats, Crew)
   - Reserve Opus for coordination and complex decisions (Mayor, Refinery)

2. **Temporal Optimization**
   - Run heavy workloads overnight (lower rates)
   - Batch work into focused bursts
   - Spin down Deacon during low activity

3. **Infrastructure**
   - Use Hetzner (~$4-8/mo) vs AWS (~$30/mo) for equivalent compute
   - Scale down between heavy usage periods
   - Use spot/preemptible instances for non-critical work

4. **Task Sizing**
   - Well-defined tasks = fewer iterations = lower cost
   - Invest time in Beads issue decomposition
   - Avoid "exploring" tasks for polecats

> "If you **car**e about **cos**ts, don't use this."
> -- Steve Yegge

---

## 8. Complexity Ladder Level 7 Requirements

### Prerequisites Matrix

| Category | Requirement | Why It Matters | How to Verify |
|----------|-------------|----------------|---------------|
| **Experience** | 100+ hours managing 10+ Claude instances | Pattern recognition for agent behavior | Track your hours |
| **Technical** | Go 1.23+ | Gas Town/Beads are Go-based | `go version` |
| **Technical** | Git 2.25+ | Worktree support | `git --version` |
| **Technical** | tmux 3.0+ | Primary UI | `tmux -V` |
| **Financial** | $50-200/day budget | Multiple Claude accounts | Budget planning |
| **Psychological** | Chaos tolerance | Bugs, lost work, imperfection | Self-assessment |
| **Skill** | Product management mindset | You're PM, not programmer | Mental shift |

### Evolution Path

```
Level 4 (Ralph) → Level 5 (CC Mirror) → Level 6 (Worktrees) → Level 7 (Gas Town)

At each level, you should demonstrate:

Level 4: Successfully shipped 5+ features overnight using Ralph
Level 5: Orchestrated 5+ agents on a single complex task
Level 6: Ran 3+ parallel Ralph loops with merge coordination
Level 7: Ready for Gas Town
```

### Level 7 Capabilities Unlocked

| Capability | Description | Practical Outcome |
|------------|-------------|-------------------|
| **Factory Production** | Continuous agent output | 10-50x individual throughput |
| **Named Agents** | Persistent specialization | Polecats remember their domain |
| **Self-Improvement** | System evolves capabilities | Better over time |
| **Product Management** | Human as PM, not coder | Strategic focus |
| **24/7 Operation** | Agents work while you sleep | True async development |

### Comparison: Gas Town vs Lower Levels

| Aspect | Level 4 (Ralph) | Level 5 (CC Mirror) | Level 7 (Gas Town) |
|--------|----------------|---------------------|-------------------|
| **Model** | Single agent, retry loop | Task-based DAG | Agent factory |
| **Parallelism** | None (sequential) | Auto-scheduled | Native (many agents) |
| **Roles** | None | None (generic agents) | 8 specialized roles |
| **Persistence** | Via git/progress.txt | Built-in tasks | Beads data plane |
| **Setup Time** | Minutes | Hours | Days |
| **Cost** | $10-30/day | $30-80/day | $50-200/day |

---

## 9. Mental Models

### Mental Model 1: The Factory Floor

```
╔═══════════════════════════════════════════════════════════════════════════════════════════╗
║                           FACTORY FLOOR MENTAL MODEL                                       ║
╠═══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                            ║
║   Traditional Software Company         Gas Town Equivalent                                 ║
║   ━━━━━━━━━━━━━━━━━━━━━━━━━━━          ━━━━━━━━━━━━━━━━━━━━━━━━━                           ║
║                                                                                            ║
║   CEO / Product Manager                 Overseer (YOU)                                     ║
║   Chief of Staff / COO                  Mayor                                              ║
║   IT / DevOps                           Deacon                                             ║
║   QA Team                               Dogs                                               ║
║   Tech Lead / Architect                 Refinery                                           ║
║   Team Lead / Manager                   Witness                                            ║
║   Senior Developers                     Polecats                                           ║
║   Staff Engineer / Consultant           Crew                                               ║
║                                                                                            ║
║   JIRA / Linear / Notion                Beads                                              ║
║   Slack / Email                         MCP Agent Mail                                     ║
║   Git Repository                        Still Git Repository                               ║
║                                                                                            ║
╚═══════════════════════════════════════════════════════════════════════════════════════════╝
```

**The insight:** You're not learning a new system. You're automating a familiar organizational structure.

### Mental Model 2: The Restaurant Kitchen

```
╔═══════════════════════════════════════════════════════════════════════════════════════════╗
║                          RESTAURANT KITCHEN MENTAL MODEL                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                            ║
║   > "You're not a programmer anymore. You're the head chef of a kitchen                    ║
║   >  with AI robotic sous chefs."                                                          ║
║   > -- Steve Yegge                                                                         ║
║                                                                                            ║
║   Kitchen Role                          Gas Town Role                                      ║
║   ━━━━━━━━━━━━━━                        ━━━━━━━━━━━━━━━━━━                                 ║
║                                                                                            ║
║   Restaurant Owner                      Overseer (YOU)                                     ║
║   Head Chef                             Mayor                                              ║
║   Kitchen Manager                       Deacon                                             ║
║   Health Inspector                      Dogs                                               ║
║   Prep Kitchen                          Refinery (decomposes orders)                       ║
║   Expediter                             Witness                                            ║
║   Line Cooks                            Polecats                                           ║
║   Sous Chef                             Crew                                               ║
║                                                                                            ║
║   Ticket System                         Beads                                              ║
║   Kitchen Communication                 MCP Agent Mail                                     ║
║                                                                                            ║
║   Orders come in (features) → Tickets created (beads issues) → Slung to line cooks        ║
║                                                                                            ║
╚═══════════════════════════════════════════════════════════════════════════════════════════╝
```

**The insight:** Work becomes "fluid, an uncountable that you sling around freely, like slopping shiny fish into wooden barrels at the docks."

### Mental Model 3: The Three-Layer Stack

```
╔═══════════════════════════════════════════════════════════════════════════════════════════╗
║                            THREE-LAYER STACK MODEL                                         ║
╠═══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                            ║
║  ┌───────────────────────────────────────────────────────────────────────────────────────┐║
║  │  LAYER 3: ORCHESTRATION                                                                │║
║  │  ┌─────────────────────────────────────────────────────────────────────────────────┐  │║
║  │  │  Gas Town - Manages agents, assigns work, coordinates                            │  │║
║  │  │  "The factory floor operations"                                                  │  │║
║  │  │                                                                                  │  │║
║  │  │  Questions it answers:                                                           │  │║
║  │  │  - Who should do this work?                                                      │  │║
║  │  │  - When should work be merged?                                                   │  │║
║  │  │  - Is the system healthy?                                                        │  │║
║  │  └─────────────────────────────────────────────────────────────────────────────────┘  │║
║  └───────────────────────────────────────────────────────────────────────────────────────┘║
║  ┌───────────────────────────────────────────────────────────────────────────────────────┐║
║  │  LAYER 2: DATA PLANE                                                                   │║
║  │  ┌─────────────────────────────────────────────────────────────────────────────────┐  │║
║  │  │  Beads - Tracks issues, dependencies, agent memory                               │  │║
║  │  │  "The work order and memory system"                                              │  │║
║  │  │                                                                                  │  │║
║  │  │  Questions it answers:                                                           │  │║
║  │  │  - What work needs to be done?                                                   │  │║
║  │  │  - What is blocked by what?                                                      │  │║
║  │  │  - What did we learn yesterday?                                                  │  │║
║  │  └─────────────────────────────────────────────────────────────────────────────────┘  │║
║  └───────────────────────────────────────────────────────────────────────────────────────┘║
║  ┌───────────────────────────────────────────────────────────────────────────────────────┐║
║  │  LAYER 1: INFRASTRUCTURE                                                               │║
║  │  ┌─────────────────────────────────────────────────────────────────────────────────┐  │║
║  │  │  Roughneck - Provisions VMs, installs software                                   │  │║
║  │  │  "The construction company"                                                      │  │║
║  │  │                                                                                  │  │║
║  │  │  Questions it answers:                                                           │  │║
║  │  │  - Where do agents run?                                                          │  │║
║  │  │  - How is the environment configured?                                            │  │║
║  │  │  - How do I add more capacity?                                                   │  │║
║  │  └─────────────────────────────────────────────────────────────────────────────────┘  │║
║  └───────────────────────────────────────────────────────────────────────────────────────┘║
║                                                                                            ║
╚═══════════════════════════════════════════════════════════════════════════════════════════╝
```

**The insight:** Each layer has a clear responsibility. Don't conflate them.

---

## 10. Implementation Guide

### Phase 1: Prerequisites Verification

```bash
# Check Go version
go version
# Expected: go1.23.x or higher

# Check tmux
tmux -V
# Expected: tmux 3.x

# Check git
git --version
# Expected: git 2.25+

# Verify Claude Code CLI
claude --version
```

### Phase 2: Installation

```bash
# Install Gas Town
go install github.com/steveyegge/gastown/cmd/gt@latest

# Verify installation
gt version

# Install Beads
go install github.com/steveyegge/beads/cmd/bd@latest

# Verify
bd version

# Initialize workspace
gt install ~/gt --git
```

### Phase 3: Add Your First Rig

```bash
# Navigate to town
cd ~/gt

# Add a project rig
gt rig add myproject /path/to/your/repo
# OR: gt rig add myproject https://github.com/you/repo

# Verify
gt rig list
```

### Phase 4: Initialize Beads in Your Project

```bash
cd /path/to/your/repo

# Initialize Beads
bd init

# Create first issue
bd create "Setup project structure" -p 0

# View ready work
bd ready
```

### Phase 5: Start Core Roles

Recommended startup sequence (in separate tmux windows):

```bash
# Terminal 1: Mayor (interactive - your primary interface)
gt mayor attach

# Terminal 2: Infrastructure
gt deacon up    # (optional, may be unstable in v0.3.x)
gt dogs up

# Terminal 3: Rig-level roles
gt witness up myproject
gt refinery up myproject

# Terminal 4-6: Named workers
gt polecat up myproject alice
gt polecat up myproject bob
gt polecat up myproject carol
```

### Phase 6: First Work Assignment

```bash
# Via Mayor (interactive)
# In Mayor session: "Build user authentication with email/password"

# OR via sling (direct assignment)
bd create "Build user authentication"
# Note the bead ID (e.g., bd-xyz123)
gt sling bd-xyz123 myproject
```

### tmux Workflow Script

Save as `gastown-start.sh`:

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
tmux send-keys -t $SESSION:mayor 'gt mayor attach' C-m
tmux send-keys -t $SESSION:infra.0 'gt deacon up' C-m
tmux send-keys -t $SESSION:infra.1 'gt dogs up' C-m
tmux send-keys -t $SESSION:rig-project1.0 'gt witness up project1' C-m
tmux send-keys -t $SESSION:rig-project1.1 'gt refinery up project1' C-m
tmux send-keys -t $SESSION:alice 'gt polecat up project1 alice' C-m
tmux send-keys -t $SESSION:bob 'gt polecat up project1 bob' C-m
tmux send-keys -t $SESSION:carol 'gt polecat up project1 carol' C-m
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
gt mayor attach
# "Build OAuth2 integration for authentication"

# Refinery decomposes, assigns to polecats
# You review pending decisions
gt inbox respond 5 --approve
gt inbox respond 7 --approve

# Monitor throughout day (switch tmux windows)
# Ctrl-b n/p to cycle windows
# Dogs run quality checks automatically

# Evening: Review completed work
gt inbox review
gt approve 12 15 18  # Approve completed items

# End of day (polecats persist, crew killed)
gt crew purge myproject
```

---

## 11. Checkpoints

### Checkpoint 1: Installation Complete

**Where you are:** Gas Town and Beads are installed and accessible.

**Verify your state:**
```bash
gt version
bd version
```

**You should see:**
```
Gas Town v0.x.x
Beads v0.x.x
```

**If you don't see this:**
- Check: Is Go installed? `go version`
- Check: Is `$GOPATH/bin` in your PATH?
- Try: `export PATH="$HOME/go/bin:$PATH"`

---

### Checkpoint 2: Workspace Initialized

**Where you are:** Gas Town workspace exists at ~/gt

**Verify your state:**
```bash
ls -la ~/gt
gt status
```

**You should see:**
```
~/gt/
├── .beads/
├── .claude/
├── config.yaml
└── (your rigs when added)
```

**If you don't see this:**
- Check: Did you run `gt install ~/gt --git`?
- Check: Do you have write permissions to ~/gt?

---

### Checkpoint 3: First Rig Added

**Where you are:** Your project is connected as a Gas Town rig.

**Verify your state:**
```bash
gt rig list
```

**You should see:**
```
NAME        PATH                           STATUS
myproject   /path/to/your/repo            active
```

**If you don't see this:**
- Check: Does the path exist and contain a git repository?
- Check: Did you run `gt rig add myproject /path/to/repo`?

---

### Checkpoint 4: Beads Initialized in Project

**Where you are:** Beads is tracking issues in your project.

**Verify your state:**
```bash
cd /path/to/your/repo
bd ready
bd list
```

**You should see:**
```
READY WORK:
bd-xxxx  Setup project structure  Priority: 0
```

**If you don't see this:**
- Check: Did you run `bd init` in the project directory?
- Check: Does `.beads/` directory exist?

---

### Checkpoint 5: Core Roles Running

**Where you are:** Mayor, Witness, and Refinery are active.

**Verify your state:**
```bash
gt status
```

**You should see:**
```
TOWN STATUS:
Mayor:     running (pid: 12345)
Deacon:    stopped (optional)
Dogs:      running (pid: 12346)

RIG: myproject
Witness:   running (pid: 12347)
Refinery:  running (pid: 12348)
Polecats:  3 active (alice, bob, carol)
```

**If you don't see this:**
- Check: Are you running in separate tmux windows?
- Check: Is Claude Code CLI authenticated?
- Try: Kill and restart each role

---

### Checkpoint 6: First Work Completed

**Where you are:** A polecat has successfully completed and merged work.

**Verify your state:**
```bash
git log --oneline -5
bd list --status closed
```

**You should see:**
```
abc1234 feat(myproject): Implement bd-xxxx - Setup project structure
...

CLOSED ISSUES:
bd-xxxx  Setup project structure  closed
```

**Signs of healthy Gas Town operation:**
- [ ] At least one issue marked closed in Beads
- [ ] Git commit from polecat in history
- [ ] No stuck or failed roles in `gt status`
- [ ] Inbox has reasonable pending items (not 100+)

---

### Checkpoint 7: Multi-Agent Coordination

**Where you are:** Multiple polecats are working in parallel without conflicts.

**Verify your state:**
```bash
gt polecat list myproject
gt refinery status myproject
```

**You should see:**
```
POLECATS (myproject):
alice    running   bd-001   Implement login form
bob      running   bd-002   Add API endpoints
carol    idle      -        Waiting for work

REFINERY QUEUE (myproject):
Position  Issue    Author   Status
1         bd-003   alice    pending merge
2         bd-004   bob      rebasing
```

**Healthy indicators:**
- Polecats assigned to different issues
- Refinery processing queue sequentially
- No merge conflicts blocking queue

---

## 12. Troubleshooting

### Common Failures and Recovery

| Problem | Symptom | Cause | Solution |
|---------|---------|-------|----------|
| **Context Collapse** | Agents stop making sense | Beads state corruption | `gt town reset --soft` |
| **Race Conditions** | Conflicting commits | Multiple agents on same files | Use worktrees, file ownership |
| **Runaway Crew** | Cost spike, dozens spawned | Refinery misconfiguration | `gt crew purge --all`, set limits |
| **Mayor Deadlock** | No work assigned | Waiting for human decision | Check inbox, approve pending |
| **Beads Desync** | Agents have stale context | Git conflicts in Beads | `gt beads sync --force` |
| **Agent Won't Start** | `gt polecat up` fails | Rate limiting, config issue | Check `gt config list`, try different account |
| **Deacon Killing Workers** | Workers dying randomly | Known v0.3.x bug | `gt deacon down` until v0.4.0 |

### Error: Mayor won't start

**Symptoms:**
```
$ gt mayor attach
Error: Failed to initialize mayor session
```

**Solutions:**
1. Check Claude Code CLI is authenticated: `claude --version`
2. Check API key is set: `echo $ANTHROPIC_API_KEY`
3. Check existing mayor process: `ps aux | grep gt.*mayor`
4. Kill stale process: `pkill -f "gt.*mayor"`
5. Restart: `gt mayor attach`

---

### Error: Beads sync conflict

**Symptoms:**
```
$ bd sync
Error: Merge conflict in .beads/issues.jsonl
```

**Solutions:**
```bash
# Check conflict
git status

# Option 1: Accept local version
git checkout --ours .beads/issues.jsonl
bd sync --force

# Option 2: Accept remote version
git checkout --theirs .beads/issues.jsonl
rm .beads/beads.db  # Force rebuild from JSONL
bd sync

# Option 3: Manual resolution
# Edit .beads/issues.jsonl to resolve conflicts
# Then:
bd sync --force
```

---

### Error: Polecat stuck in loop

**Symptoms:**
- Polecat repeating same task
- No commits being made
- Resource usage high

**Solutions:**
```bash
# Check polecat status
gt polecat status myproject alice

# Get debug output
gt polecat log myproject alice

# Diagnose the issue
bd show <issue-id>  # Check the issue

# Intervention options:
# 1. Kill and restart polecat
gt polecat down myproject alice
gt polecat up myproject alice

# 2. Reassign the issue
gt sling <issue-id> myproject --polecat bob

# 3. Mark issue as blocked
bd update <issue-id> --status blocked --notes "Requires human review"
```

---

### Error: Refinery queue blocked

**Symptoms:**
```
$ gt refinery status myproject
QUEUE: BLOCKED
Reason: Merge conflict unresolvable
```

**Solutions:**
```bash
# Check what's blocking
gt refinery status myproject --verbose

# Option 1: Skip problematic PR
gt refinery skip myproject <pr-id>

# Option 2: Manual resolution
gt refinery resolve myproject
# Opens interactive merge resolution

# Option 3: Nuke and restart queue
gt refinery reset myproject
```

---

### Error: High costs unexpectedly

**Symptoms:**
- API bill much higher than expected
- Multiple accounts hitting limits

**Solutions:**
```bash
# Check active agents
gt status

# Kill unnecessary agents
gt crew purge --all
gt polecat down myproject --all

# Set limits in config
gt config set max_polecats 5
gt config set max_crew 2

# Use cheaper models for appropriate roles
gt config set witness_model haiku
gt config set polecat_model sonnet
```

---

### Recovery Commands

```bash
# Soft reset (keep config, clear state)
gt town reset --soft

# Hard reset (full reinstall)
gt town reset --hard

# Kill all agents
gt town down

# Restart specific role
gt polecat down myproject alice
gt polecat up myproject alice

# Force Beads sync
bd sync --force

# Clear inbox backlog
gt inbox clear --all

# Emergency cost stop
gt pause --all        # Pause all work
gt resume --all       # Resume when ready
```

---

### Health Checks

```bash
# Check all role status
gt status

# Check specific rig
gt rig status myproject

# View agent health
gt deacon report

# Trigger Dogs quality check
gt dogs bark

# Check Beads health
bd doctor
bd doctor --fix  # Auto-fix common issues
```

**Healthy state indicators:**
- All roles show `running`
- Deacon reports no anomalies
- Inbox has reasonable pending items (not 100+)
- Polecats are progressing on tasks
- Refinery queue is processing

---

### Error: Witness not unsticking polecats

**Symptoms:**
- Polecats stuck but Witness not intervening
- Work not progressing despite healthy Witness status

**Solutions:**
```bash
# Check Witness patrol frequency
gt witness status myproject --verbose

# Verify Witness has visibility into polecat state
gt witness check myproject

# Manual unstick
gt polecat unstick myproject alice

# Restart Witness with increased verbosity
gt witness down myproject
gt witness up myproject --verbose
```

---

### Error: MCP Agent Mail not working

**Symptoms:**
- Agents not coordinating
- File reservation requests ignored
- Messages not delivered between agents

**Solutions:**
```bash
# Check MCP Agent Mail status
gt mail status

# Verify mail configuration
gt config get mail_enabled

# Test message delivery
gt mail send alice bob "Test message"
gt mail inbox bob

# Restart mail service
gt mail restart
```

---

### Error: tmux session management issues

**Symptoms:**
- Lost connection to Gas Town session
- Windows not responding
- Session crashed

**Solutions:**
```bash
# List existing sessions
tmux ls

# Reattach to existing session
tmux attach -t gastown

# If session corrupted, kill and restart
tmux kill-session -t gastown
./gastown-start.sh --fresh

# Check for zombie processes
ps aux | grep "gt\|claude" | grep -v grep

# Kill zombies
pkill -f "gt.*mayor"
pkill -f "gt.*polecat"
```

---

### Error: Git worktree corruption

**Symptoms:**
- Polecat worktree in inconsistent state
- Git operations failing
- Unable to merge from worktree

**Solutions:**
```bash
# List all worktrees
git worktree list

# Check worktree health
git worktree prune --dry-run

# Remove corrupted worktree
git worktree remove ../wt-myproject-alice --force

# Recreate worktree
git worktree add ../wt-myproject-alice alice-branch

# Restart polecat in clean worktree
gt polecat up myproject alice
```

---

### Error: Beads database corruption

**Symptoms:**
- `bd list` returns errors
- SQLite database locked or corrupted
- Agents unable to read/write issues

**Solutions:**
```bash
# Check database integrity
bd doctor

# Rebuild SQLite from JSONL (source of truth)
rm .beads/beads.db
bd sync

# If JSONL also corrupted, restore from git
git checkout HEAD~1 -- .beads/issues.jsonl
bd sync --force

# Verify recovery
bd list
bd ready
```

---

### Known Limitations

**Current version (v0.3.x) limitations:**

1. **Deacon Instability**
   - Deacon may kill workers during patrol
   - Workaround: Run without Deacon until v0.4.0

2. **Scale Ceiling**
   - Tested up to ~200K LOC before merge wall issues
   - Beyond this, consider multiple rigs

3. **Cost Visibility**
   - No built-in cost tracking
   - Workaround: Use API dashboard for monitoring

4. **Windows Support**
   - Gas Town is Linux/macOS native
   - Windows users: Use WSL2

5. **Single Machine**
   - Gas Town designed for single machine
   - Distributed: Use Roughneck + multiple factories

---

### Emergency Procedures

**Complete System Failure:**
```bash
# 1. Kill everything
pkill -f "gt\|claude"
tmux kill-server

# 2. Check git state
git status
git log --oneline -5

# 3. Sync Beads
bd sync --force

# 4. Verify Beads
bd doctor --fix

# 5. Clean restart
./gastown-start.sh --fresh
```

**Cost Emergency (Runaway Spending):**
```bash
# 1. Immediate pause
gt pause --all

# 2. Check what's running
gt status

# 3. Kill expensive roles
gt town down

# 4. Review what happened
gt inbox
bd list --status in_progress

# 5. Fix configuration
gt config set max_polecats 3
gt config set max_crew 1

# 6. Careful restart
gt mayor attach  # Start with just Mayor
```

**Data Loss Prevention:**
```bash
# Before any risky operation
git stash
bd sync
git commit -am "Pre-operation checkpoint"

# After recovery
git stash pop
bd sync
```

---

## 13. Integration Patterns

### Gas Town + Ralph

Use Ralph loops for focused feature work, Gas Town for ongoing development:

```
╔═══════════════════════════════════════════════════════════════════════════════════════════╗
║                              GAS TOWN + RALPH INTEGRATION                                  ║
╠═══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                            ║
║   When to Use Ralph (within Gas Town):                                                     ║
║   • Well-defined feature with clear acceptance criteria                                    ║
║   • Single polecat assignment                                                              ║
║   • Overnight completion expected                                                          ║
║                                                                                            ║
║   Integration Pattern:                                                                     ║
║   1. Create Beads issue with full PRD                                                      ║
║   2. Sling to dedicated polecat                                                            ║
║   3. Polecat runs internal Ralph loop                                                      ║
║   4. Results merge through Refinery                                                        ║
║                                                                                            ║
║   ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐                     ║
║   │  Beads Issue    │ ──► │  Polecat Alice  │ ──► │   Refinery      │                     ║
║   │  (PRD)          │     │  (Ralph Loop)   │     │   (Merge)       │                     ║
║   └─────────────────┘     └─────────────────┘     └─────────────────┘                     ║
║                                                                                            ║
╚═══════════════════════════════════════════════════════════════════════════════════════════╝
```

### Gas Town + CC Mirror

CC Mirror can be used as a lightweight alternative for specific rigs:

| Scenario | Use Gas Town | Use CC Mirror |
|----------|--------------|---------------|
| Factory-scale production | Yes | No |
| Quick multi-agent task | Maybe | Yes |
| Persistent named agents | Yes | No |
| Minimal setup | No | Yes |
| Cost optimization | No | Yes |

### Gas Town + Orchestra

Orchestra provides self-improving hub-and-spoke patterns that complement Gas Town:

```
╔═══════════════════════════════════════════════════════════════════════════════════════════╗
║                            GAS TOWN vs ORCHESTRA                                           ║
╠═══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                            ║
║   Aspect              Gas Town                    Orchestra                                ║
║   ━━━━━━━━━━━━━━━━    ━━━━━━━━━━━━━━━━━━━━━       ━━━━━━━━━━━━━━━━━━━━━━━━                ║
║   Architecture        Factory with roles          Hub-and-spoke coordinator               ║
║   Workers             8 specialized types         6 specialized profiles                   ║
║   Memory              Beads (Git-backed)          Neo4j (optional)                        ║
║   Self-Improvement    Via iteration               Memory recording + workflow              ║
║   Complexity          High                        Medium                                   ║
║   Deployment          Standalone + Roughneck      OpenCode plugin                         ║
║                                                                                            ║
║   When to use Gas Town: Factory-scale, named agents, maximum throughput                    ║
║   When to use Orchestra: Hub-and-spoke, structured workflows, Neo4j memory                 ║
║                                                                                            ║
╚═══════════════════════════════════════════════════════════════════════════════════════════╝
```

### Combination Matrix

| Combination | Complexity | Value | Use Case |
|-------------|------------|-------|----------|
| **Gas Town alone** | High | Very High | Production AI factory |
| **Gas Town + Roughneck** | Very High | Very High | Multi-cloud factories |
| **Gas Town + Ralph** | High | High | Focused overnight features |
| **Gas Town + CC Mirror** | Medium | Medium | Hybrid lightweight orchestration |
| **Beads alone** | Low | High | Issue tracking without full factory |
| **Roughneck alone** | Medium | Medium | Cloud dev environments (no Gas Town) |

---

## 14. Source Attribution

### Primary Sources

| Source File | Content | Lines | Quality |
|-------------|---------|-------|---------|
| `extractions/orchestration/022-gas-town-deep-dive.md` | Core architecture, 8 roles, implementation | 1390 | Comprehensive |
| `extractions/orchestration/023-beads-data-plane.md` | Beads architecture, sync, molecules | 1438 | Comprehensive |
| `extractions/orchestration/027-orchestra-self-improve.md` | Hub-and-spoke comparison, workflows | 1437 | Comprehensive |
| `extractions/orchestration/036-roughneck-multi-gastown.md` | Multi-factory patterns, IaC | 1092 | Comprehensive |

### Key Repositories

| Repository | Author | Purpose | Stars |
|------------|--------|---------|-------|
| [steveyegge/gastown](https://github.com/steveyegge/gastown) | Steve Yegge | Multi-agent workspace manager | ~5K |
| [steveyegge/beads](https://github.com/steveyegge/beads) | Steve Yegge | Agent memory system | ~11K |
| [steveyegge/mcp_agent_mail](https://github.com/steveyegge/mcp_agent_mail) | Steve Yegge | Inter-agent communication | - |
| [mjtechguy/roughneck](https://github.com/mjtechguy/roughneck) | mjtechguy | Gas Town cloud provisioning | - |

### Key Blog Posts

- [Welcome to Gas Town](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04) - Full philosophical context
- [The Future of Coding Agents](https://steve-yegge.medium.com/the-future-of-coding-agents-e9451a84207c) - Agent evolution thesis
- [Beads Best Practices](https://steve-yegge.medium.com/beads-best-practices-2db636b9760c) - Memory system deep dive

### Podcasts

- [Changelog: Adventures in Babysitting Coding Agents](https://changelog.com/friends/96)
- [O'Reilly: Vibe Coding with Steve Yegge](https://www.oreilly.com/radar/podcast/generative-ai-in-the-real-world-vibe-coding-with-steve-yegge/)

### Community Extensions

| Extension | Author | Purpose |
|-----------|--------|---------|
| **GTGUI** | @TRIBE-INC | Age of Empires style GUI for Gas Town |
| **Station** | @Esteban_Puerta9 | Nats-based alternative architecture |
| **Tutorial Skill** | @nummanali | Claude Code skill for learning Gas Town |

### Cross-References in This Repository

- `synthesis/mastery-ralph-complete.md` - Level 4 Ralph pattern
- `synthesis/architecture-complexity-ladder.md` - Full complexity ladder
- `synthesis/compare-orchestration-patterns.md` - Pattern comparison
- `extractions/deep/boris-cherny-extraction.md` - Claude Code creator philosophy

---

## The Bottom Line

Gas Town represents a fundamental shift in how we think about AI-assisted development:

| Old Mindset | Gas Town Mindset |
|-------------|------------------|
| You are a programmer | You are a Product Manager |
| Claude is your assistant | Claude agents are your team |
| Focus on code quality | Focus on throughput |
| Manual control | Factory production |
| Sequential work | Parallel execution |
| Context window limits | Beads memory solves |
| One agent at a time | 8 roles, 30 agents |

> "Build a **col**ony of coding agents, not the world's **lar**gest ant."
> -- Steve Yegge

The transformation is clear:

```
╔═══════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                            ║
║   BEFORE GAS TOWN:                     AFTER GAS TOWN:                                     ║
║   ━━━━━━━━━━━━━━━━                     ━━━━━━━━━━━━━━━━                                    ║
║                                                                                            ║
║   You: Write code                       You: Define features                               ║
║   Claude: Assist                        Polecats: Implement                                ║
║   Time: 8 hours coding                  Time: 30 min planning                              ║
║   Output: 1 feature                     Output: 10 features                                ║
║   Night: Sleep                          Night: Factory works                               ║
║   Morning: Continue coding              Morning: Review completed work                     ║
║                                                                                            ║
╚═══════════════════════════════════════════════════════════════════════════════════════════╝
```

Gas Town enables "ship while you sleep" at factory scale. The pattern is complex, expensive, and chaotic - but for those at Stage 7+, it unlocks team-scale output from a single person.

---

## Quick Reference Card

### Installation
```bash
go install github.com/steveyegge/gastown/cmd/gt@latest
go install github.com/steveyegge/beads/cmd/bd@latest
gt install ~/gt --git
gt rig add myproject <repo-url>
```

### Role Management
```bash
# Town-level
gt mayor attach           # Interactive (primary)
gt mayor up|down|status
gt deacon up|down|status
gt dogs up|down|status|bark

# Rig-level
gt witness up|down <rig>
gt refinery up|down <rig>
gt polecat up|down|list <rig> [name]
gt crew spawn|count|purge <rig>
```

### Work Assignment
```bash
gt sling <bead-id> <rig>
gt convoy create "name" <ids>
gt convoy list
gt handoff
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
gt town up|down              # Start/stop all
gt town reset --soft|--hard  # Reset state
gt config set|get|list       # Configuration
gt pause|resume --all        # Emergency control
```

### Beads
```bash
bd ready                     # List actionable tasks
bd create "Title"            # New task
bd dep add <child> <parent>  # Add dependency
bd show <id>                 # Full state
bd sync                      # Sync to remote
```

### tmux Navigation
```bash
Ctrl-b n    # Next window
Ctrl-b p    # Previous window
Ctrl-b <N>  # Jump to window N
Ctrl-b z    # Zoom pane
Ctrl-b d    # Detach
```

---

## Tags

`#orchestration` `#gas-town` `#steve-yegge` `#agent-factory` `#vibe-coding` `#beads` `#tmux` `#multi-agent` `#level-7` `#complexity-ladder` `#mcp-agent-mail` `#autonomous` `#8-roles` `#mayor` `#deacon` `#dogs` `#refinery` `#witness` `#polecat` `#crew` `#overseer` `#roughneck` `#multi-factory` `#merge-wall` `#data-plane` `#mastery-guide`

---

## Document Metadata

| Field | Value |
|-------|-------|
| **Created** | 2026-01-19 |
| **Author** | Claude Opus 4.5 |
| **Sources** | 4 primary extraction documents |
| **Lines** | 2,200+ |
| **Depth** | Factory-scale mastery guide |
| **Cross-References** | mastery-ralph-complete.md, architecture-complexity-ladder.md |
| **Version** | Gas Town v0.3.x, Beads v0.44.0+ |

---

*"Work becomes fluid, an uncountable that you sling around freely, like slopping shiny fish into wooden barrels at the docks."*
-- Steve Yegge

# Gas Town Complete Architecture: All 8 Roles Deep Dive

---
## D-FINAL Connection

**This source contributed to:**
- D-FINAL-architecture.md: Sections 2.4, 2.5 (8 roles covered, GUPP framework, Beads integration)

**Coverage in D-FINAL:** 85%
**High-value unique content:** Complete technical specification of all 8 roles (Overseer, Mayor, Deacon, Dogs, Refinery, Witness, Polecat, Crew), detailed scaling guidance (20-30 agents), cost implications at scale, troubleshooting by role

**Journey references:**
- synthesis/mastery-ralph-complete.md#gas-town-roles
- html-site/patterns/orchestration/gas-town.html#8-roles

**Last enhanced:** 2026-01-18 (Phase 2B)

---

> **The definitive technical reference for Steve Yegge's factory-scale agent orchestration system.**

---

## Table of Contents

1. [You Are Here](#you-are-here)
2. [Architecture Overview](#architecture-overview)
3. [The 8 Roles: Complete Documentation](#the-8-roles-complete-documentation)
   - [1. Overseer (YOU)](#1-overseer-you)
   - [2. Mayor](#2-mayor)
   - [3. Deacon](#3-deacon)
   - [4. Dogs](#4-dogs)
   - [5. Refinery](#5-refinery)
   - [6. Witness](#6-witness)
   - [7. Polecat](#7-polecat)
   - [8. Crew](#8-crew)
4. [Role Coordination Patterns](#role-coordination-patterns)
5. [Scaling Gas Town (20-30 Agents)](#scaling-gas-town-20-30-agents)
6. [Cost Implications at Scale](#cost-implications-at-scale)
7. [Six Waves Framework Context](#six-waves-framework-context)
8. [MEOW Stack Integration](#meow-stack-integration)
9. [Troubleshooting by Role](#troubleshooting-by-role)
10. [Sources](#sources)

---

## You Are Here

```
                           The Complexity Ladder

    Level 7: Gas Town Factory          <-- THIS DOCUMENT
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

**What this document covers:** Complete technical specification of all 8 Gas Town roles - their responsibilities, autonomy levels, implementation details, interaction patterns, and operational commands.

**Prerequisites:**
- Stage 7+ on Yegge's 8-Stage Dev Evolution
- 100+ hours multi-agent experience
- tmux proficiency
- Go runtime installed
- Budget: $50-200/day

---

## Architecture Overview

### The Hierarchy at a Glance

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                          GAS TOWN ROLE HIERARCHY                               ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                                 ║
║  HUMAN LEVEL                                                                    ║
║  ┌─────────────────────────────────────────────────────────────────────────┐   ║
║  │                        OVERSEER (YOU)                                    │   ║
║  │           Product Manager · Decision Maker · Ultimate Authority          │   ║
║  │              Receives notifications · Approves major decisions           │   ║
║  └─────────────────────────────────────────────────────────────────────────┘   ║
║                                      │                                          ║
║                                      ▼                                          ║
║  TOWN LEVEL (Global - One instance each)                                       ║
║  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐                    ║
║  │     MAYOR      │  │     DEACON     │  │      DOGS      │                    ║
║  │   Concierge    │  │ Daemon Beacon  │  │  Maintenance   │                    ║
║  │ Chief-of-Staff │  │ Central Pulse  │  │    Helpers     │                    ║
║  └────────────────┘  └────────────────┘  └────────────────┘                    ║
║          │                    │                    │                            ║
║          │                    └────────┬───────────┘                            ║
║          │                             │                                        ║
║          │                             ▼                                        ║
║          │               ┌────────────────┐                                    ║
║          │               │      BOOT      │                                    ║
║          │               │ (Special Dog)  │                                    ║
║          │               │ Deacon Monitor │                                    ║
║          │               └────────────────┘                                    ║
║          │                                                                      ║
║          └───────────────────────┬──────────────────────────────────────────   ║
║                                  ▼                                              ║
║  RIG LEVEL (Per-Project - Multiple instances)                                  ║
║  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐                    ║
║  │    REFINERY    │  │    WITNESS     │  │    POLECAT     │                    ║
║  │  Merge Queue   │  │   Supervisor   │  │ Ephemeral PRs  │                    ║
║  │   Manager      │  │  Troubleshoot  │  │   Workers      │                    ║
║  └────────────────┘  └────────────────┘  └────────────────┘                    ║
║                                                  │                              ║
║                                                  │ (Swarms of 3-30)             ║
║                                                  ▼                              ║
║  PERSONAL LEVEL                                                                 ║
║  ┌─────────────────────────────────────────────────────────────────────────┐   ║
║  │                             CREW                                         │   ║
║  │         Long-lived personal agents · Direct to Overseer                  │   ║
║  │            Independent from swarm · Sustained design work                │   ║
║  └─────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                 ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

### Key Insight

> "Claude Code is the world's biggest fuckin' ant. Everyone is focused on making their ant run longer... when nature prefers colonies."
> — Steve Yegge

Gas Town transforms the development paradigm:
- **You** are the Product Manager, not the programmer
- **Agents** are your engineering team
- **Code** is an output, not an activity

---

## The 8 Roles: Complete Documentation

---

### 1. Overseer (YOU)

#### Overview

| Attribute | Value |
|-----------|-------|
| **Type** | Human operator |
| **Scope** | Town-wide |
| **Autonomy Level** | FULL CONTROL |
| **Instances** | 1 (you) |

#### Responsibility and Scope

The Overseer is the human authority in Gas Town. You are:
- The Product Manager defining what gets built
- The decision-maker for escalations
- The owner of the inbox system
- The ultimate arbiter of quality

**You are NOT:**
- The programmer (agents do that)
- The code reviewer (Dogs handle that)
- The merge manager (Refinery handles that)

#### Key Responsibilities

1. **Define Features** - File high-level work requests to Mayor
2. **Approve Decisions** - Review inbox items requiring human judgment
3. **Monitor Progress** - Watch tmux windows for agent activity
4. **Manage Budgets** - Track token spend and agent costs
5. **Handle Escalations** - Resolve issues agents can't fix
6. **Direct Crew** - Personal coding agents for hands-on work

#### When to Deploy This Role

Always active. You ARE the Overseer by running Gas Town.

#### Commands and Interface

```bash
# View your inbox
gt inbox

# Respond to inbox items
gt inbox respond <id> --approve
gt inbox respond <id> --reject

# File new work
gt inbox send <rig> "Build user authentication"

# Direct sling work to specific agents
gt sling <issue> <rig>

# Handoff (graceful session end)
gt handoff

# Town-wide control
gt town up
gt town down
gt status
gt pause --all
gt resume --all
```

#### Interaction with Other Roles

| Interacts With | How |
|----------------|-----|
| Mayor | Primary agent interface; receives status, sends directives |
| Crew | Direct personal agents for sustained design work |
| Deacon | Receives heartbeat status |
| All Roles | Can intervene in any role via commands |

#### Example Daily Workflow

```bash
# Morning
./gastown-start.sh
gt status
gt inbox              # Review overnight completions

# Working Hours
gt inbox send my-project "Add OAuth2 support"
gt inbox respond 12 --approve
gt inbox respond 15 --approve

# Monitor via tmux windows (C-b n/p to cycle)
# Dogs run quality checks automatically

# Evening
gt inbox review
gt crew purge my-project  # Kill ephemeral workers
```

#### Mindset Shift

> "You're not a programmer anymore. You're the head chef of a kitchen with AI robotic sous chefs."

---

### 2. Mayor

#### Overview

| Attribute | Value |
|-----------|-------|
| **Type** | AI Agent |
| **Scope** | Town-level |
| **Autonomy Level** | HIGH |
| **Instances** | 1 |
| **Model Recommendation** | Opus 4.5 |

#### Responsibility and Scope

The Mayor is your **concierge and chief-of-staff**. They:
- Receive high-level directives from the Overseer
- Analyze and decompose work
- Create convoys (work bundles)
- Spawn appropriate agents
- Distribute issues via hooks
- Summarize results upon completion

**The Mayor is your primary AI interface.**

#### Key Responsibilities

1. **Work Analysis** - Understand what needs building
2. **Task Decomposition** - Break features into agent-sized chunks
3. **Convoy Creation** - Bundle related issues together
4. **Agent Spawning** - Launch polecats and crew as needed
5. **Progress Tracking** - Monitor convoy completion
6. **Status Reporting** - Keep Overseer informed

#### When to Deploy This Role

**Always.** The Mayor is the minimum viable Gas Town. You can run with just the Mayor for learning.

> "You technically only need the Mayor. Running with just the Mayor is a good tutorial/intro to Gas Town."
> — Steve Yegge

#### How to Implement

```bash
# Start Mayor
gt mayor up

# Attach to Mayor (interactive)
gt mayor attach

# Check Mayor status
gt mayor status

# Stop Mayor
gt mayor down
```

#### Commands and Prompts

When attached to Mayor:
```
# File a feature
"Build user authentication with OAuth2 support"

# Create convoy
"Create a convoy for the auth feature with these issues: bd-a1b2, bd-c3d4, bd-e5f6"

# Spawn workers
"Spawn 3 polecats to work on the auth convoy"

# Check status
"What's the status of convoy auth-feature?"
```

#### Interaction with Other Roles

| Role | Relationship |
|------|--------------|
| Overseer | Receives directives, reports status |
| Refinery | Routes merge work after polecat completion |
| Polecats | Spawns and assigns work to them |
| Witness | Receives health reports |
| Deacon | Coordinates with town-level daemon |
| Crew | Can spawn crew for Overseer's direct work |

#### Example Configuration

```json
{
  "mayor": {
    "model": "claude-opus-4-5-20251101",
    "autonomy": "high",
    "inbox_notify": true,
    "convoy_auto_create": true
  }
}
```

---

### 3. Deacon

#### Overview

| Attribute | Value |
|-----------|-------|
| **Type** | AI Agent (Patrol) |
| **Scope** | Town-level |
| **Autonomy Level** | VERY HIGH |
| **Instances** | 1 |
| **Model Recommendation** | Sonnet |

#### Responsibility and Scope

The Deacon is the **daemon beacon** - the central heartbeat of Gas Town. Named after the Dennis Hopper character from Waterworld (Lord Humungus lineage), the Deacon:
- Runs town-level plugins
- Manages patrol workflows
- Oversees worker recycling
- Maintains Gas Town's heartbeat
- Broadcasts "Do Your Job" (DYFJ) signals

**The Deacon is Gas Town's central nervous system.**

#### Key Responsibilities

1. **Patrol Loop** - Execute patrol workflows every 2 minutes
2. **Town Plugins** - Run town-level maintenance plugins
3. **Worker Recycling** - Manage session timeouts and restarts
4. **DYFJ Broadcasts** - Signal all agents to continue work
5. **Health Monitoring** - Track overall town health
6. **Delegation to Dogs** - Hand off complex work

#### When to Deploy This Role

For towns with 5+ agents. Optional for simple setups.

**Warning (as of v0.3.x):**
> "Apologies to everyone using Gas Town who is being bitten by the murderous rampaging Deacon who is spree-killing all the other workers while on his patrol."
> — Steve Yegge, January 2026

Run without Deacon until v0.4.0+ for stability.

#### How to Implement

```bash
# Start Deacon
gt deacon up

# Check Deacon status
gt deacon status

# View Deacon's patrol log
gt deacon log

# Stop Deacon (recommended for stability)
gt deacon down
```

#### Patrol Workflow

```
Deacon Patrol Loop (every 2 minutes):
┌─────────────────┐
│  Wake Up        │
└────────┬────────┘
         ▼
┌─────────────────┐
│ Run Town Plugins│
└────────┬────────┘
         ▼
┌─────────────────┐
│ Check All Rigs  │
└────────┬────────┘
         ▼
┌─────────────────┐
│ Recycle Stale   │
│   Sessions      │
└────────┬────────┘
         ▼
┌─────────────────┐
│ Broadcast DYFJ  │
└────────┬────────┘
         ▼
┌─────────────────┐
│ Delegate to Dogs│
│  if overloaded  │
└────────┬────────┘
         ▼
┌─────────────────┐
│  Sleep 2 min    │
└─────────────────┘
```

#### Interaction with Other Roles

| Role | Relationship |
|------|--------------|
| Boot | Receives health checks from Boot every 5 min |
| Dogs | Delegates complex maintenance work |
| Witness | Receives rig-level reports |
| Refinery | Monitors merge queue health |
| Polecats | Broadcasts DYFJ to keep working |
| Mayor | Coordinates town-level activities |

#### Known Issues

- **Spree-killing workers** - Deacon can accidentally kill other agents
- **Patrol instability** - Complex patrol got too aggressive
- **Workaround:** Run without Deacon until v0.4.0

---

### 4. Dogs

#### Overview

| Attribute | Value |
|-----------|-------|
| **Type** | AI Agent (Workers) |
| **Scope** | Town-level |
| **Autonomy Level** | MODERATE |
| **Instances** | 1-3 |
| **Model Recommendation** | Sonnet |

#### Responsibility and Scope

The Dogs are **the Deacon's personal crew** - town-level grunts handling maintenance. Named after the MI5 internal security characters in Mick Herron's Slow Horses series.

Dogs handle:
- Branch cleanup (stale branches)
- Handyman tasks
- Plugin execution
- Preventing Deacon overload

**The Dogs handle the grungy operational details.**

#### Key Responsibilities

1. **Branch Cleanup** - Remove stale feature branches
2. **Maintenance Tasks** - Handle routine housekeeping
3. **Plugin Execution** - Run assigned plugins
4. **Deacon Support** - Take overflow work from Deacon
5. **Investigation** - Handle complex issues escalated by Deacon

#### When to Deploy This Role

When running Deacon. Dogs are optional but help with:
- Large towns (10+ agents)
- Projects with frequent branching
- Heavy maintenance needs

#### How to Implement

```bash
# Start Dogs
gt dogs up

# Check Dogs status
gt dogs status

# Trigger manual quality check
gt dogs bark

# View Dogs report
gt dogs report

# Stop Dogs
gt dogs down
```

#### Including Boot (Special Dog)

Boot is a **special Dog** that monitors the Deacon:

```bash
# Boot runs automatically with Dogs
# Wakes every 5 minutes to check Deacon

Boot Behavior:
┌─────────────────┐
│  Wake Up (5min) │
└────────┬────────┘
         ▼
┌─────────────────┐
│ Check Deacon    │
│   Status        │
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
Healthy?   Unhealthy?
    │         │
    ▼         ▼
Sleep     Nudge or Restart
```

#### Interaction with Other Roles

| Role | Relationship |
|------|--------------|
| Deacon | Receives work assignments, reports completion |
| Overseer | Can be directly commanded for maintenance |
| Refinery | Assists with branch cleanup |
| Boot | Special Dog monitoring Deacon health |

#### Example Commands

```bash
# Force branch cleanup
gt dogs clean-branches my-project

# Run quality check
gt dogs bark

# View cleanup report
gt dogs report --branches
```

---

### 5. Refinery

#### Overview

| Attribute | Value |
|-----------|-------|
| **Type** | AI Agent (Patrol) |
| **Scope** | Rig-level (per-project) |
| **Autonomy Level** | HIGH |
| **Instances** | 1 per rig |
| **Model Recommendation** | Opus 4.5 |

#### Responsibility and Scope

The Refinery is the **intelligent merge queue manager**. It:
- Merges all polecat changes sequentially to main
- Prevents merge conflicts
- Resolves rebasing issues
- Ensures no work is lost
- Escalates unresolvable conflicts

**The Refinery is the gatekeeper of code integration.**

> "The Refinery was brand-new and untested at the time of Python Gas Town."
> — Steve Yegge

#### Key Responsibilities

1. **Sequential Merging** - One merge at a time, in order
2. **Conflict Resolution** - Handle rebasing automatically
3. **Quality Gates** - Ensure PRs meet standards before merge
4. **No Work Lost** - Every PR either merges or escalates
5. **Patrol Loop** - Continuous merge queue processing

#### When to Deploy This Role

When running parallel polecats. Essential for:
- 3+ polecats generating PRs
- Projects with frequent code changes
- Preventing the "Merge Wall"

#### How to Implement

```bash
# Start Refinery for a rig
gt refinery up <rig>

# Check Refinery status
gt refinery status <rig>

# Force process queue
gt refinery process <rig>

# Resolve stuck merge
gt refinery resolve <rig>

# Stop Refinery
gt refinery down <rig>
```

#### Patrol Workflow

```
Refinery Patrol Loop:
┌─────────────────┐
│    Preflight    │
│  Check queue    │
└────────┬────────┘
         ▼
┌─────────────────┐
│   Merge Loop    │
│ Process PRs one │
│   at a time     │
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
Success?   Conflict?
    │         │
    ▼         ▼
Continue   Attempt rebase
              │
         ┌────┴────┐
         ▼         ▼
      Resolved?  Escalate
         │
         ▼
┌─────────────────┐
│   Postflight    │
│  Update status  │
└────────┬────────┘
         ▼
┌─────────────────┐
│ Sleep (backoff) │
└─────────────────┘
```

#### Interaction with Other Roles

| Role | Relationship |
|------|--------------|
| Polecats | Receives completed PRs for merging |
| Witness | Reports merge queue health |
| Deacon | Receives patrol coordination signals |
| Dogs | Hands off stale branch cleanup |
| Overseer | Escalates unresolvable conflicts |

#### Configuration

```json
{
  "refinery": {
    "model": "claude-opus-4-5-20251101",
    "max_retries": 3,
    "conflict_escalation": true,
    "auto_rebase": true,
    "patrol_interval_seconds": 60
  }
}
```

---

### 6. Witness

#### Overview

| Attribute | Value |
|-----------|-------|
| **Type** | AI Agent (Patrol) |
| **Scope** | Rig-level (per-project) |
| **Autonomy Level** | HIGH |
| **Instances** | 1 per rig |
| **Model Recommendation** | Haiku |

#### Responsibility and Scope

The Witness is the **supervisor and troubleshooter** for polecat swarms. It:
- Monitors polecat health and progress
- Unsticks blocked workers
- Manages merge queue flow
- Runs rig-level plugins
- Peeks in on the Deacon

**The Witness smooths out swarm operations.**

> "Once you spin up enough polecats, you need an agent just to watch over them and help them get un-stuck. The Witness patrol helps smooth things out so it's almost perfect for most runs."
> — Steve Yegge

#### Key Responsibilities

1. **Polecat Monitoring** - Watch all polecats in the rig
2. **Unsticking** - Help blocked agents recover
3. **Health Reporting** - Send status to Deacon
4. **Plugin Execution** - Run rig-level plugins
5. **Refinery Checks** - Verify merge queue is flowing
6. **Deacon Peek** - Ensure Deacon isn't stuck

#### When to Deploy This Role

When running 3+ polecats. Essential for:
- Swarm operations
- Preventing stuck agents
- Maintaining flow

#### How to Implement

```bash
# Start Witness for a rig
gt witness up <rig>

# Check Witness status
gt witness status <rig>

# Get current state report
gt witness report <rig>

# Force health check
gt witness check <rig>

# Stop Witness
gt witness down <rig>
```

#### Patrol Workflow

```
Witness Patrol Loop:
┌─────────────────┐
│  Check Polecats │
│  Are they stuck?│
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
  OK?      Stuck?
    │         │
    ▼         ▼
Continue    Nudge/Assist
              │
              ▼
┌─────────────────┐
│ Check Refinery  │
│  Queue flowing? │
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
Flowing?   Stuck?
    │         │
    ▼         ▼
Continue    Alert
              │
              ▼
┌─────────────────┐
│  Run Rig Plugins│
└────────┬────────┘
         ▼
┌─────────────────┐
│  Report to      │
│     Deacon      │
└────────┬────────┘
         ▼
┌─────────────────┐
│ Sleep (backoff) │
└─────────────────┘
```

#### Interaction with Other Roles

| Role | Relationship |
|------|--------------|
| Polecats | Monitors and assists when stuck |
| Refinery | Checks merge queue health |
| Deacon | Reports rig status |
| Mayor | Receives overall direction |
| Overseer | Escalates persistent issues |

---

### 7. Polecat

#### Overview

| Attribute | Value |
|-----------|-------|
| **Type** | AI Agent (Ephemeral Workers) |
| **Scope** | Rig-level (per-project) |
| **Autonomy Level** | MODERATE |
| **Instances** | 3-30 per rig |
| **Model Recommendation** | Sonnet |

#### Responsibility and Scope

Polecats are **ephemeral workers** generating pull requests. They:
- Complete assigned implementation tasks
- Produce code changes
- Submit MRs to merge queue
- Decommission after task completion

**Polecats are your implementation army.**

> "Polecats thrive on well-defined, fully-spec'ed beads epics."
> — Steve Yegge

#### Key Responsibilities

1. **Implementation** - Write code for assigned issues
2. **PR Creation** - Generate merge requests
3. **Test Execution** - Run tests for their changes
4. **Handoff** - Submit completed work to Refinery
5. **Self-Termination** - Exit cleanly after completion

#### When to Deploy This Role

For any implementation work. Scale based on:
- Task complexity (more tasks = more polecats)
- Budget ($5-10/hour per polecat with Sonnet)
- Desired velocity

#### How to Implement

```bash
# Start named polecat
gt polecat up <rig> alice
gt polecat up <rig> bob
gt polecat up <rig> carol

# List polecats for rig
gt polecat list <rig>

# Assign task to polecat
gt polecat assign alice <task>

# Check polecat status
gt polecat status <rig> alice

# Stop specific polecat
gt polecat down <rig> alice

# Spawn via sling (preferred)
gt sling <issue> <rig>
```

#### Naming Convention

Use human names for mental model clarity:
- alice, bob, carol, dave, eve
- Max ~30 names before recycling

#### Lifecycle

```
Polecat Lifecycle:
┌─────────────────┐
│     Spawn       │
│  (gt polecat up)│
└────────┬────────┘
         ▼
┌─────────────────┐
│  Receive Task   │
│  (via hook)     │
└────────┬────────┘
         ▼
┌─────────────────┐
│   Implement     │
│  Write Code     │
└────────┬────────┘
         ▼
┌─────────────────┐
│   Run Tests     │
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
  Pass?     Fail?
    │         │
    ▼         ▼
Create PR  Fix & Retry
    │
    ▼
┌─────────────────┐
│  Submit to      │
│   Refinery      │
└────────┬────────┘
         ▼
┌─────────────────┐
│  Decommission   │
│  (terminate)    │
└─────────────────┘
```

#### Interaction with Other Roles

| Role | Relationship |
|------|--------------|
| Mayor | Receives spawning commands |
| Refinery | Submits completed PRs |
| Witness | Monitored for health |
| Dogs | May receive cleanup help |
| Overseer | Can be directly commanded |

#### Example Swarm Configuration

```json
{
  "polecats": {
    "model": "claude-3-5-sonnet-20241022",
    "max_per_rig": 10,
    "auto_spawn": true,
    "timeout_minutes": 60,
    "naming": "human_names"
  }
}
```

---

### 8. Crew

#### Overview

| Attribute | Value |
|-----------|-------|
| **Type** | AI Agent (Persistent Personal) |
| **Scope** | Personal to Overseer |
| **Autonomy Level** | HIGH |
| **Instances** | 1-5 |
| **Model Recommendation** | Sonnet or Opus |

#### Responsibility and Scope

The Crew are your **long-lived personal coding agents**. Unlike polecats, they:
- Have persistent identities
- Work directly for the Overseer
- Are independent from swarm management
- Handle sustained design work
- Support back-and-forth collaboration

**The Crew replaces your traditional Claude Code usage.**

> "The Crew are the agents you'll personally use the most, after the Mayor. They are per-Rig coding agents who work for the Overseer (you), and are not managed by the Witness."
> — Steve Yegge

#### Key Responsibilities

1. **Sustained Design** - Long-running design and architecture work
2. **Collaboration** - Back-and-forth with Overseer
3. **Personal Projects** - Non-swarm work
4. **Direct Control** - Respond to Overseer commands
5. **Context Retention** - Maintain knowledge across sessions

#### When to Deploy This Role

For work requiring:
- Human collaboration
- Design iteration
- Architectural decisions
- Exploratory coding
- Non-parallelizable tasks

#### How to Implement

```bash
# Add crew member to rig
gt crew add <rig> --name "designer"

# Spawn crew
gt crew spawn <rig> --task "design the auth system"

# Count active crew
gt crew count <rig>

# Purge all crew (end of day)
gt crew purge <rig>
```

#### tmux Integration

Crew members get dedicated tmux windows:
```bash
# Cycle through crew
C-b n    # Next window (next crew member)
C-b p    # Previous window (previous crew member)
C-b s    # Session overview
C-b [    # Enter copy mode (scroll history)
```

#### Interaction with Other Roles

| Role | Relationship |
|------|--------------|
| Overseer | Direct reports, personal agents |
| Mayor | Can request crew spawning |
| Witness | NOT managed by Witness (independent) |
| Polecats | Separate from swarm |

#### Example Workflow

```bash
# Morning: Start personal crew
gt crew add my-project --name "architect"
gt crew add my-project --name "reviewer"

# Work with architect on design
# (switch to architect's tmux window)
"Let's design the authentication system..."

# Later: Hand off implementation to swarm
gt inbox send my-project "Implement auth per architect's design"
# Mayor spawns polecats

# Reviewer checks completed work
# (switch to reviewer's tmux window)
"Review the auth implementation PRs..."

# End of day
gt crew purge my-project
```

---

## Role Coordination Patterns

### Pattern 1: Mayor-Only (Minimal)

For learning or simple projects:

```
[Overseer]
     │
     ▼
[Mayor] ──► [Polecats] ──► [Main Branch]
```

### Pattern 2: Full Town (Production)

For complex, multi-project work:

```
[Overseer]
     │
     ▼
[Mayor] ◄────────────────────┐
     │                        │
     ├──► [Deacon] ──► [Dogs] │
     │         │              │
     │         ├──► [Boot]    │
     │         │              │
     │         ▼              │
     │    [Witness] ◄─────────┤
     │         │              │
     │         ▼              │
     └──► [Refinery]          │
              │               │
              ▼               │
         [Polecats] ──────────┘
              │
              ▼
         [Main Branch]

[Crew] ──── (independent) ──── [Overseer]
```

### Pattern 3: Convoy Flow

For feature delivery:

```
1. Overseer defines feature
2. Mayor analyzes and decomposes
3. Mayor creates convoy (issue bundle)
4. Mayor spawns polecats
5. Polecats implement (in parallel)
6. Polecats submit PRs to Refinery
7. Refinery merges sequentially
8. Witness monitors and assists
9. Deacon maintains heartbeat
10. Mayor summarizes to Overseer
```

### Communication Protocols

#### DYFJ (Do Your Job)

```
Deacon broadcasts every 2 minutes:
    "Do your job"
         │
    ┌────┴────┬────────┬────────┐
    ▼         ▼        ▼        ▼
Witness   Refinery  Polecats  Dogs
```

#### GUPP (Universal Propulsion Principle)

```
If work on hook → MUST RUN IT

Agent Restart:
    ┌─────────────────┐
    │  Session Start  │
    └────────┬────────┘
             ▼
    ┌─────────────────┐
    │  Check Hook     │
    │  (git worktree) │
    └────────┬────────┘
             │
        ┌────┴────┐
        ▼         ▼
    Has Work?   Empty?
        │         │
        ▼         ▼
    EXECUTE    Wait for
    IMMEDIATELY  assignment
```

#### GUPP Nudge

Claude Code is "miserably polite" - GUPP alone doesn't always work. Gas Town implements automatic nudges:

```bash
# Automatic nudge 30-60 seconds after start
gt nudge <agent>

# Forces agent to check hook and execute
```

---

## Scaling Gas Town (20-30 Agents)

### Architecture for Scale

```
Town: 20-30 Agents Example
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TOWN LEVEL (4 agents)
├── Mayor (1x Opus)
├── Deacon (1x Sonnet)
├── Dogs (1x Sonnet)
└── Boot (1x Haiku)

RIG 1: Backend (9 agents)
├── Refinery (1x Opus)
├── Witness (1x Haiku)
└── Polecats (7x Sonnet)

RIG 2: Frontend (9 agents)
├── Refinery (1x Opus)
├── Witness (1x Haiku)
└── Polecats (7x Sonnet)

RIG 3: Infrastructure (5 agents)
├── Refinery (1x Opus)
├── Witness (1x Haiku)
└── Polecats (3x Sonnet)

PERSONAL (3 agents)
└── Crew (3x Sonnet)

Total: ~30 agents
```

### Operational Requirements

| Requirement | Details |
|-------------|---------|
| **Experience** | Stage 7+ (100+ hours multi-agent) |
| **Accounts** | 2-3 Claude accounts minimum |
| **Budget** | $100-300/day |
| **Hardware** | 16GB+ RAM, SSD storage |
| **tmux Proficiency** | Essential for monitoring |
| **Chaos Tolerance** | HIGH - expect breakage |

### Scaling Guidelines

1. **Start Small** - Begin with Mayor + 3 polecats
2. **Add Witness** - When polecats get stuck
3. **Add Refinery** - When merge conflicts appear
4. **Add Deacon** - For 10+ agents (but careful with v0.3.x)
5. **Add Dogs** - For maintenance overflow
6. **Add Rigs** - For multi-project work
7. **Add Crew** - For personal design work

### Token Velocity Constraint

The primary constraint is **token velocity**, not agent count:
- Single account rate limits hit quickly
- Multiple accounts required for scale
- Budget scales with agents

> "My projected token burn rate triples my account needs weekly."
> — Steve Yegge

---

## Cost Implications at Scale

### Per-Role Cost Estimates

| Role | Model | Est. Cost/Hour |
|------|-------|----------------|
| Mayor | Opus 4.5 | $15-20 |
| Refinery | Opus 4.5 | $15-20 |
| Deacon | Sonnet | $5-8 |
| Dogs | Sonnet | $5-8 |
| Witness | Haiku | $1-3 |
| Polecats | Sonnet | $5-10 each |
| Crew | Sonnet | $5-10 each |
| Boot | Haiku | $0.50-1 |

### Example Daily Costs

#### Minimal Setup (Learning)
```
Mayor (Opus): 4 hours × $17.50 = $70
Polecats (3x Sonnet): 4 hours × $22.50 = $90
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total: ~$160/day (4 hours active)
```

#### Full Town (Production)
```
Town Level:
  Mayor (Opus): 8 hours × $17.50 = $140
  Deacon (Sonnet): 8 hours × $6.50 = $52
  Dogs (Sonnet): 8 hours × $6.50 = $52
  Boot (Haiku): 8 hours × $0.75 = $6

Rig Level (2 rigs):
  Refineries (2x Opus): 8 hours × $35 = $280
  Witnesses (2x Haiku): 8 hours × $4 = $32
  Polecats (10x Sonnet): 8 hours × $75 = $600

Personal:
  Crew (2x Sonnet): 4 hours × $15 = $60
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total: ~$1,222/day (heavy 8-hour usage)
```

#### Conservative Estimate
```
Light usage (4 hours, minimal agents): $50-100/day
Medium usage (6 hours, 10 agents): $150-250/day
Heavy usage (8 hours, 20+ agents): $300-500/day
Maximum (full town, 8 hours): $500-1,000+/day
```

### Cost Warnings

> "If you care about costs, don't use this."
> "Expensive as hell - multiple Claude accounts needed."
> — Steve Yegge

### Cost Management Tips

1. **Use Haiku** for monitoring roles (Witness, Boot)
2. **Use Sonnet** for implementation (Polecats, Dogs)
3. **Reserve Opus** for complex reasoning (Mayor, Refinery)
4. **Purge Crew** at end of day
5. **Pause** when not actively working
6. **Set timeouts** for idle agents

```bash
# Cost control commands
gt config set crew.idle_timeout 15
gt config set polecat.max_per_rig 5
gt pause --all
gt resume --all
```

---

## Six Waves Framework Context

Gas Town exists in the context of Steve Yegge's **Six Waves of AI** evolution:

### The Six Waves

| Wave | Era | Description | Productivity | Tool Example |
|------|-----|-------------|--------------|--------------|
| 1 | Pre-2022 | Manual coding | Baseline | IDEs |
| 2 | 2023 | Completions-based | ~2x | Copilot |
| 3 | 2024 | Chat-based (CHOP) | ~5x | Cursor, ChatGPT |
| 4 | 2025 H1 | Coding agents | ~10x | Claude Code, Amp |
| 5 | 2025 H2 | Agent clusters | ~25x | Parallel agents |
| **6** | **2026+** | **Agent fleets** | **~50x+** | **Gas Town** |

### The 8 Stages of Developer Evolution

| Stage | Description | Tool Usage |
|-------|-------------|------------|
| 1 | Zero/near-zero AI | Traditional IDEs |
| 2 | Agent in IDE, permissions on | Copilot with auth |
| 3 | Agent in IDE, YOLO mode | Copilot auto-accept |
| 4 | Agent fills screen, code is diffs | Cursor-style |
| 5 | CLI single agent, YOLO | Claude Code CLI |
| 6 | CLI multi-agent (3-5 parallel) | Multiple instances |
| 7 | 10+ agents, hand-managed | tmux + scripts |
| **8** | **Building your own orchestrator** | **Gas Town creator** |

### Gas Town Requirements

**Gas Town is for Stage 7+ developers.**

> "If you're not at Stage 7, you'll get your face ripped off by superintelligent chimpanzees."
> — Steve Yegge

### The Paradigm Shift

```
Wave 1-4: Developer writes code
          ↓
Wave 5:   Developer manages agents
          ↓
Wave 6:   Developer is Product Manager
          AI manages AI
```

---

## MEOW Stack Integration

Gas Town is built on the **MEOW Stack (Mayor-Enhanced Orchestration Workflow)**:

### The 5 Layers

```
Layer 5: FORMULAS
         TOML workflow definitions
         Composable, macro-expandable
              │
              ▼
Layer 4: PROTOMOLECULES
         Template workflows
         Variable substitution
              │
              ▼
Layer 3: MOLECULES
         Chained bead workflows
         Multi-step sequences
              │
              ▼
Layer 2: EPICS
         Parent-child beads
         Hierarchical work
              │
              ▼
Layer 1: BEADS
         Atomic work units
         Git-backed JSON
```

### Wisps (Ephemeral Beads)

Wisps enable high-velocity orchestration without Git pollution:
- Exist in database with hash IDs
- Don't persist to Git
- "Burned" at workflow end
- Optional squash into summary commit

```
Patrol Agents (Refinery, Witness, Deacon, Polecats):
├── Create wisps for every patrol run
├── Ensure transactional workflow completion
└── Prevent Git pollution from orchestration noise
```

### Key Beads Commands

```bash
# List ready tasks (zero blockers)
bd ready

# Create new task
bd create "Task title"

# Add dependency
bd dep add <child> <parent>

# Show full task state
bd show <id>

# Cook formula into protomolecule
bd cook <formula>

# Instantiate molecule
bd mol pour <formula>
```

---

## Troubleshooting by Role

### Mayor Issues

| Symptom | Cause | Recovery |
|---------|-------|----------|
| Mayor unresponsive | Session timeout | `gt mayor down && gt mayor up` |
| No convoy creation | Analysis paralysis | Provide clearer directive |
| Wrong agent spawning | Miscommunication | Re-state requirements |

### Deacon Issues

| Symptom | Cause | Recovery |
|---------|-------|----------|
| Killing workers | Bug in v0.3.x | `gt deacon down` until v0.4.0 |
| No heartbeat | Deacon stuck | Boot should restart |
| Patrol failing | Plugin error | Check `gt deacon log` |

### Refinery Issues

| Symptom | Cause | Recovery |
|---------|-------|----------|
| Merge queue stuck | Unresolvable conflict | `gt refinery resolve <rig>` |
| Lost work | Merge failure | Check escalation inbox |
| Slow merging | Large queue | Add second rig |

### Witness Issues

| Symptom | Cause | Recovery |
|---------|-------|----------|
| Polecats still stuck | Witness overwhelmed | Reduce polecat count |
| No health reports | Witness down | `gt witness up <rig>` |
| Plugin failures | Bad rig plugin | Check plugin logs |

### Polecat Issues

| Symptom | Cause | Recovery |
|---------|-------|----------|
| Stuck on task | Context overflow | Kill and respawn |
| Bad code quality | Underspecified task | Improve issue description |
| PR rejected | Failed tests | Review test output |

### Crew Issues

| Symptom | Cause | Recovery |
|---------|-------|----------|
| Crew unresponsive | Session timeout | `gt crew spawn <rig>` |
| Context lost | Long session | Handoff and restart |
| Wrong direction | Miscommunication | Clear conversation history |

### Recovery Command Reference

```bash
# Town-wide
gt town reset --soft    # Keep config, clear state
gt town reset --hard    # Full reset
gt town down            # Stop all agents
gt pause --all          # Emergency stop
gt resume --all         # Resume work

# Per-role
gt mayor down && gt mayor up
gt deacon down
gt refinery resolve <rig>
gt witness up <rig>
gt polecat down <rig> <name>
gt crew purge <rig>

# Beads
gt beads sync --force
gt beads reset
```

---

## Sources

### Primary Sources

#### Steve Yegge's Blog Posts
- [Welcome to Gas Town](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04) - Complete architecture and philosophy
- [The Future of Coding Agents](https://steve-yegge.medium.com/the-future-of-coding-agents-e9451a84207c) - Evolution thesis
- [Gas Town Emergency User Manual](https://steve-yegge.medium.com/gas-town-emergency-user-manual-cf0e4556d74b) - Operational guide

#### GitHub Repositories
- [steveyegge/gastown](https://github.com/steveyegge/gastown) - Multi-agent workspace manager
- [steveyegge/beads](https://github.com/steveyegge/beads) - Agent memory system (~225K lines Go)
- [steveyegge/mcp_agent_mail](https://github.com/steveyegge/mcp_agent_mail) - Inter-agent communication

#### Twitter/X
- [@steve_yegge](https://x.com/steve_yegge) - Announcements and updates
- [Deacon bug notice](https://x.com/Steve_Yegge/status/2009108074062041255) - v0.3.x warning

#### Community Analysis
- [Johnny Clem: Industrialization of the Merge Queue](https://medium.com/@johnnyclem/then-god-told-steve-yegge-to-build-an-ark-gastown-and-the-industrialization-of-the-merge-queue-0b7ad30e17f6)
- [TurinTech: The Agentic Shift](https://www.turintech.ai/blog/the-agentic-shift-1-from-code-writers-to-agent-orchestrators)
- [Scribe.rip Mirror](https://scribe.rip/welcome-to-gas-town-4f25ee16dd04)

#### Podcasts
- [Changelog: Adventures in Babysitting Coding Agents](https://changelog.com/friends/96)
- [O'Reilly: Vibe Coding with Steve Yegge](https://www.oreilly.com/radar/podcast/generative-ai-in-the-real-world-vibe-coding-with-steve-yegge/)

---

## Document Metadata

- **Created:** 2026-01-13
- **Author:** Claude Opus 4.5 via Agent T5
- **Sources:** 15+ primary documents
- **Line Count:** 1400+
- **Depth:** Complete role documentation
- **Version:** Gas Town v0.3.x (Deacon issues noted)

---

## Tags

`#gas-town` `#steve-yegge` `#8-roles` `#mayor` `#deacon` `#dogs` `#refinery` `#witness` `#polecat` `#crew` `#overseer` `#meow-stack` `#beads` `#orchestration` `#multi-agent` `#factory-scale` `#level-7` `#six-waves`

---

*"Build a colony of coding agents, not the world's largest ant."*

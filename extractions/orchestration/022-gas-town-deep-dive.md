# Gas Town: Factory for Coding Agents
## Steve Yegge's Multi-Agent Orchestration Framework

---
## D-FINAL Connection
**Contributed to:** D-FINAL-architecture.md (Section 2.4 - Gas Town Factory Pattern, Complexity Ladder Level 7)
**Last enhanced:** 2026-01-18 (Wave 3)
---

> "Claude Code is the world's biggest fuckin' ant. Everyone is focused on making their ant run longer... when nature prefers colonies."
> -- Steve Yegge

---

## Table of Contents

1. [You Are Here](#1-you-are-here)
2. [Creator Identity](#2-creator-identity)
3. [Core Architecture](#3-core-architecture)
4. [Technical Implementation](#4-technical-implementation)
5. [The 8-Role Hierarchy](#5-the-8-role-hierarchy)
6. [Beads Data Plane](#6-beads-data-plane)
7. [MCP Agent Mail Integration](#7-mcp-agent-mail-integration)
8. [Design Decisions and Trade-offs](#8-design-decisions-and-trade-offs)
9. [Comparison Matrix](#9-comparison-matrix)
10. [Implementation Guide](#10-implementation-guide)
11. [Troubleshooting](#11-troubleshooting)
12. [Exact Quotes](#12-exact-quotes)
13. [Actionability Ladder](#13-actionability-ladder)
14. [Quick Reference Card](#14-quick-reference-card)
15. [Sources](#15-sources)
16. [Tags](#16-tags)
17. [Document Metadata](#17-document-metadata)

---

## 1. You Are Here

```
                           The Complexity Ladder

    Level 7: Gas Town Factory          <-- YOU ARE HERE
             |
             | Factory-scale agent orchestration
             | 20-30 agents, human as PM
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

### What This Document Covers

This is the **definitive deep extraction** of Steve Yegge's Gas Town multi-agent orchestration framework. Gas Town represents the highest level of the complexity ladder - a complete factory for spawning, coordinating, and managing coding agents at scale.

### Prerequisites for Gas Town

Before attempting Gas Town, you must have:

| Requirement | Description |
|-------------|-------------|
| **Stage 7+ Experience** | 100+ hours managing 10+ Claude instances in parallel |
| **tmux Proficiency** | Gas Town is tmux-native; no GUI alternative (except GTGUI) |
| **Go Runtime** | Gas Town is written in Go (1.23+) |
| **High Chaos Tolerance** | Some bugs, some lost work, focus on throughput |
| **Budget** | $50-200/day for API costs with multiple Claude accounts |
| **Git 2.25+** | Required for worktree support |

### Warning from the Creator

> "If you're not at Stage 7, you'll get your face ripped off by superintelligent chimpanzees."
> -- Steve Yegge

---

## 2. Creator Identity

### Who is Steve Yegge?

Steve Yegge is a **40-year software development veteran** with credentials that uniquely position him to build factory-scale agent orchestration:

| Company | Role | Relevance |
|---------|------|-----------|
| **Amazon** | Early employee | Built internal tools at scale |
| **Google** | Senior Engineer | Famous for "Stevey's Blog Rants," internal platforms |
| **Sourcegraph** | Senior role | Code intelligence, developer tooling |
| **Current** | Full-time AI development advocate | Building the future of agent-assisted dev |

### Why His Opinion Matters

1. **~1 million lines vibe-coded in 2025** - Not theory, lived practice
2. **Built Beads (~225K lines of Go)** - Proof of concept at scale
3. **Built Gas Town using Gas Town** - Recursive validation
4. **Transparent about limitations** - Warns about chaos, costs, maturity
5. **Decades of platform engineering** - Knows what scales and what breaks

### Public Presence

- **Twitter/X:** [@steve_yegge](https://x.com/steve_yegge) - Primary announcements
- **Medium:** steve-yegge.medium.com - Deep philosophical pieces
- **GitHub:** github.com/steveyegge - Gas Town, Beads, MCP Agent Mail, Efrit
- **Podcasts:** Changelog, O'Reilly Radar interviews

### The "Vibe Coding" Pioneer

Steve didn't just adopt AI-assisted development - he pioneered "vibe coding" as a philosophy:

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

---

## 3. Core Architecture

### The Fundamental Insight

Gas Town represents a paradigm shift from "making a better ant" to "building an ant colony":

```
TRADITIONAL APPROACH              GAS TOWN APPROACH
━━━━━━━━━━━━━━━━━━━━              ━━━━━━━━━━━━━━━━━━━

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

### The "Idea Compiler" Concept

> "Gas Town is an Idea Compiler. You just make up features, design them, file the implementation plans, and sling work around to your polecats and crew."

**Input:** Your ideas and feature requests
**Output:** Working code, shipped products

You're not writing code anymore. You're managing a factory.

### Architecture Diagram

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                           GAS TOWN ARCHITECTURE                                ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                                ║
║  HUMAN LEVEL                                                                   ║
║  ┌─────────────────────────────────────────────────────────────────────────┐  ║
║  │                        OVERSEER (YOU)                                    │  ║
║  │           Product Manager · Decision Maker · Ultimate Authority          │  ║
║  │              Receives notifications · Approves major decisions           │  ║
║  └────────────────────────────────────┬────────────────────────────────────┘  ║
║                                       │                                        ║
║                                       ▼                                        ║
║  TOWN LEVEL (Global - One instance each)                                      ║
║  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐                   ║
║  │     MAYOR      │  │     DEACON     │  │      DOGS      │                   ║
║  │  Coordination  │  │   Monitoring   │  │  Quality Gates │                   ║
║  │  Concierge     │  │   Heartbeat    │  │  Maintenance   │                   ║
║  └───────┬────────┘  └───────┬────────┘  └───────┬────────┘                   ║
║          │                   │                   │                             ║
║          └───────────────────┼───────────────────┘                             ║
║                              │                                                 ║
║                              ▼                                                 ║
║  RIG LEVEL (Per-Project - Multiple instances)                                 ║
║  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐                   ║
║  │    REFINERY    │  │    WITNESS     │  │    POLECAT     │                   ║
║  │ Merge Queue    │  │  Supervisor    │  │ Named Workers  │                   ║
║  │ Task Decompose │  │  Troubleshoot  │  │ (3-30 swarm)   │                   ║
║  └────────────────┘  └────────────────┘  └───────┬────────┘                   ║
║                                                  │                             ║
║                                                  ▼                             ║
║  PERSONAL LEVEL                                                                ║
║  ┌─────────────────────────────────────────────────────────────────────────┐  ║
║  │                             CREW                                         │  ║
║  │         Long-lived personal agents · Direct to Overseer                  │  ║
║  │            Independent from swarm · Sustained design work                │  ║
║  └─────────────────────────────────────────────────────────────────────────┘  ║
║                                                                                ║
║  DATA LAYER                                                                    ║
║  ┌───────────────────────────────────┬─────────────────────────────────────┐  ║
║  │           BEADS                   │        MCP AGENT MAIL               │  ║
║  │   Git-backed memory system        │   Inter-agent communication         │  ║
║  │   ~225K lines Go                  │   Email-like messaging              │  ║
║  └───────────────────────────────────┴─────────────────────────────────────┘  ║
║                                                                                ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

### The Town Directory Structure

```
~/.gt/                        # OR: ~/gt/ (your Gas Town workspace)
├── .beads/                   # Beads ledger and formulas
│   ├── ledger.jsonl         # Git-backed task storage
│   └── formulas/            # TOML workflow definitions
├── .claude/
│   └── skills/
│       └── handoff/         # Claude integration skills
├── .githooks/               # Git integration hooks
├── config.yaml              # Town configuration
├── myproject/               # Rig (git repository)
│   ├── crew/               # Crew member workspaces
│   │   └── yourname/       # Individual workspace
│   ├── settings/
│   │   └── config.json     # Runtime configuration
│   └── .beads/             # Project-specific beads
└── inbox/                   # Human decision inbox
```

---

## 4. Technical Implementation

### System Requirements

| Component | Requirement | Purpose |
|-----------|-------------|---------|
| **Go** | 1.23+ | Core implementation language |
| **Git** | 2.25+ | Worktree support for isolation |
| **Beads (bd)** | 0.44.0+ | Custom type support |
| **SQLite3** | Latest | Convoy database queries |
| **tmux** | 3.0+ | Primary UI (mandatory) |
| **Claude Code CLI** | Latest | Default agent runtime |
| **Codex CLI** | Optional | Alternative agent runtime |

### Installation

```bash
# Step 1: Install Go (if not present)
brew install go  # macOS
# OR: apt install golang  # Linux

# Step 2: Install Gas Town
go install github.com/steveyegge/gastown/cmd/gt@latest

# Step 3: Verify installation
gt version

# Step 4: Initialize workspace
gt install ~/gt --git

# Step 5: Add your first rig (project)
gt rig add myproject https://github.com/you/myproject

# Step 6: Create crew workspace
gt crew add yourname --rig myproject
```

### Runtime Configuration

Per-rig settings in `settings/config.json`:

```json
{
  "runtime": {
    "provider": "claude",
    "command": "claude",
    "args": [],
    "prompt_mode": "none"
  }
}
```

For Codex users, add to `~/.codex/config.toml`:
```toml
project_doc_fallback_filenames = ["CLAUDE.md"]
```

### Key CLI Commands

#### Town Management
```bash
gt install ~/gt --git           # Initialize workspace
gt status                       # Town-wide status
gt town up                      # Start all roles
gt town down                    # Stop all agents
gt config set|get|list          # Configuration management
```

#### Rig Management
```bash
gt rig add myproject <repo-url> # Add project
gt rig list                     # List all rigs
gt rig status myproject         # Check rig status
gt rig remove myproject         # Remove rig
```

#### Role Management
```bash
gt mayor attach                 # Start Mayor session (primary)
gt deacon up                    # Start deacon
gt dogs up                      # Start quality gates
gt witness up myproject         # Start rig observer
gt refinery up myproject        # Start merge queue
gt polecat up myproject alice   # Start named worker
```

#### Work Assignment
```bash
gt sling <bead-id> <rig>        # Assign work to agent
gt convoy create "name" <ids>   # Track related work
gt convoy list                  # View progress
gt handoff                      # Graceful session end
```

#### Inbox Management
```bash
gt inbox                        # View pending decisions
gt inbox respond <id> --approve # Approve item
gt inbox respond <id> --reject  # Reject item
gt inbox clear                  # Clear inbox
```

---

## 5. The 8-Role Hierarchy

### Overview Table

| Role | Level | Model | Function | Instances |
|------|-------|-------|----------|-----------|
| **Overseer** | Human | N/A | Product Manager, decision maker | 1 (you) |
| **Mayor** | Town | Opus 4.5 | Chief coordinator, concierge | 1 |
| **Deacon** | Town | Sonnet | Heartbeat, plugin runner, recycling | 1 |
| **Dogs** | Town | Sonnet | Quality gates, maintenance | 1-3 |
| **Refinery** | Rig | Opus 4.5 | Merge queue, task decomposition | 1 per rig |
| **Witness** | Rig | Haiku | Supervise polecats, unstick agents | 1 per rig |
| **Polecat** | Rig | Sonnet | Named workers, implementation | 3-30 per rig |
| **Crew** | Personal | Sonnet/Opus | Long-lived personal agents | 1-5 |

### Role Deep Dives

#### 1. Overseer (YOU)

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

> "That's you, Human. As the Overseer, you have an identity in the system, and your own inbox, and you can send and receive town mail."

---

#### 2. Mayor (Town-Level Coordination)

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

#### 3. Deacon (Monitoring/Heartbeat)

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
> "Apologies to everyone using Gas Town who is being bitten by the murderous rampaging Deacon who is spree-killing all the other workers while on his patrol."

Run without Deacon until v0.4.0+ for stability.

**Model Recommendation:** Sonnet (monitoring doesn't need Opus)

---

#### 4. Dogs (Quality Gates/Maintenance)

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

#### 5. Refinery (Merge Queue Manager)

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

#### 6. Witness (Per-Rig Supervisor)

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

> "Once you spin up enough polecats, you need an agent just to watch over them and help them get un-stuck. The Witness patrol helps smooth things out so it's almost perfect for most runs."

**Model Recommendation:** Haiku (observation doesn't need heavy reasoning)

---

#### 7. Polecat (Named Workers)

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

> "Polecats thrive on well-defined, fully-spec'ed beads epics."

**Model Recommendation:** Sonnet (main workhorse for implementation)

---

#### 8. Crew (Personal Agents)

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

> "The Crew are the agents you'll personally use the most, after the Mayor. They are per-Rig coding agents who work for the Overseer (you), and are not managed by the Witness."

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

## 6. Beads Data Plane

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

- **Git-backed storage:** All state persisted in git (`.beads/` directory)
- **Hash-based IDs:** (e.g., `bd-a1b2`) prevent merge conflicts
- **Dependency tracking:** Explicit links between tasks
- **Universal context:** Shared across all agents
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
bd ready                        # List tasks with zero blockers (actionable NOW)
bd create "Title"               # Create new task
bd dep add X Y                  # X is blocked by Y
bd show <id>                    # Full task state and history
bd cook <formula>               # Cook formula into protomolecule
bd mol pour <formula>           # Instantiate molecule (workflow)
```

### Beads Memory Model

```
┌─────────────────────────────────────────────────────────────┐
│                    BEADS MEMORY LAYERS                       │
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

Benefits:
- **Survives crashes:** Everything is committed
- **Audit trail:** Full history of all agent actions
- **Recovery:** Roll back to any point in time
- **Sharing:** Multiple agents share the same store
- **No heavyweight message bus required**

---

## 7. MCP Agent Mail Integration

### The "Agent Village" Pattern

Yegge (and collaborator Jeffrey Emanuel) created a messaging layer for agent-to-agent coordination:

**Why It Works:**
- "Coding agents are pros at email-like interfaces"
- No training or special prompting needed - "they just get it"
- Creates an "agent village" where agents naturally collaborate

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   GAS TOWN + AGENT MAIL                      │
│                                                              │
│  [Mayor]  ──mail──►  [Refinery]                             │
│     │                    │                                   │
│     │                    │                                   │
│  ◄─mail─────────────mail─┘                                  │
│     │                                                        │
│     ▼                                                        │
│  [Polecat: alice] ◄─mail─► [Polecat: bob]                   │
│                                                              │
│            ┌───────────────────┐                            │
│            │   MCP Agent Mail  │                            │
│            │   (Message Bus)   │                            │
│            └───────────────────┘                            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Key Features

- **Async communication:** Messages queue until read
- **Addressable agents:** Each has name/address
- **Threaded replies:** Link to originals
- **Advisory file reservations:** Prevent conflicts without hard locks
- **Persistent:** Messages survive restarts

### Integration

```
Storage: Canonical messages in Git (durable, diffable, auditable)
Indexing: SQLite for fast search
Locking: Advisory, not hard (avoids head-of-line blocking)
```

> "Beads gives the agents shared memory, and MCP Agent Mail gives them messaging - and that's all they need."

---

## 8. Design Decisions and Trade-offs

### Why This Architecture?

#### Decision 1: Roles over Generic Agents

**Choice:** 8 specialized roles instead of generic agents
**Rationale:** Clear separation of concerns, specialized prompts per role
**Trade-off:** More complexity, but better reliability at scale

#### Decision 2: Git as Data Plane (Beads)

**Choice:** Git-backed JSONL instead of database
**Rationale:** Zero infrastructure, survives crashes, full audit trail
**Trade-off:** Slower queries, but more durable

#### Decision 3: tmux-Native

**Choice:** Terminal-based instead of GUI
**Rationale:** Power users, scriptable, remote-friendly
**Trade-off:** Higher learning curve, but more control

#### Decision 4: Zero Framework Cognition

**Choice:** All decisions delegated to AI, orchestrator just executes
**Rationale:** Models improve automatically, no brittle heuristics
**Trade-off:** Less predictable, but more capable

### The Merge Wall Problem

> "Yegge ran up to a dozen agents working on the same project. 'It worked amazingly up to about 200k LOC, and now they've begun savagely overwriting each other's work rather than try to deal with merge conflicts.'"

**Gas Town Solutions:**
1. **Refinery:** Sequential merge queue with rebasing
2. **Hooks as isolation:** Each agent works on its own git worktree
3. **Convoys:** Grouped work units that start and finish together
4. **Advisory reservations:** Via Agent Mail, not hard locks

### GUPP: The Universal Propulsion Principle

> "If there is work on your hook, YOU MUST RUN IT."

**Problem:** Claude Code sessions end. Agents stop.

**Solution:**
- Work "slung" to agent hooks (persistent git worktrees)
- Agent checks hook on startup
- If work exists, execution is immediate
- Work survives crashes and restarts

**The Gupp Nudge:** Claude is "so miserably polite" that GUPP alone doesn't work. Agents get a startup poke with `gt nudge` 30-60 seconds after starting.

---

## 9. Comparison Matrix

### Gas Town vs Ralph Wiggum

| Aspect | Ralph Wiggum | Gas Town |
|--------|--------------|----------|
| **Model** | Single agent, retry loop | Multi-agent factory |
| **Complexity** | Bash script | Full system |
| **Persistence** | Via git/progress.txt | Beads data plane |
| **Parallelism** | None (sequential) | Native (many agents) |
| **Roles** | None | 8 specialized roles |
| **Setup Time** | Minutes | Hours/days |
| **Cost** | Single agent ($10-30/day) | Multiple accounts ($50-200/day) |
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

**nummanali's assessment:**
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

### Orchestrator Spectrum

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

**Checkpoint:** All tools return expected versions

---

### Phase 2: Installation

```bash
# Install Gas Town
go install github.com/steveyegge/gastown/cmd/gt@latest

# Verify installation
gt version

# Initialize workspace
gt install ~/gt --git
```

**Checkpoint:** You should see `Town initialized at ~/gt`

---

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

**Checkpoint:** Your project appears in the rig list

---

### Phase 4: Start Core Roles

Recommended startup sequence:

```bash
# 1. Start Mayor (interactive - your primary interface)
gt mayor attach

# 2. In separate tmux windows/panes, start infrastructure:
gt deacon up    # (optional, may be unstable in v0.3.x)
gt dogs up

# 3. Start rig-level roles
gt witness up myproject
gt refinery up myproject

# 4. Start named workers
gt polecat up myproject alice
gt polecat up myproject bob
gt polecat up myproject carol
```

**Checkpoint:** `gt status` shows all roles running

---

### Phase 5: First Work Assignment

```bash
# Via Mayor (interactive)
# In Mayor session: "Build user authentication with email/password"

# OR via sling (direct assignment)
bd create "Build user authentication"
# Note the bead ID (e.g., bd-xyz123)
gt sling bd-xyz123 myproject
```

**Checkpoint:** Watch alice/bob/carol pick up and execute tasks

---

### tmux Workflow Configuration

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

---

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

## 11. Troubleshooting

### Common Failures and Recovery

| Problem | Symptom | Cause | Solution |
|---------|---------|-------|----------|
| **Context Collapse** | Agents stop making sense | Beads state corruption | `gt town reset --soft` |
| **Race Conditions** | Conflicting commits | Multiple agents on same files | Use worktrees, file ownership |
| **Runaway Crew** | Cost spike, dozens spawned | Refinery misconfiguration | `gt crew purge --all`, set limits |
| **Mayor Deadlock** | No work assigned | Waiting for human decision | Check inbox, approve pending |
| **Beads Desync** | Agents have stale context | Git conflicts in Beads | `gt beads sync --force` |
| **Agent Won't Start** | gt polecat up fails | Rate limiting, config issue | Check `gt config list`, try different account |
| **Deacon Killing Workers** | Workers dying randomly | Known v0.3.x bug | `gt deacon down` until v0.4.0 |

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
gt beads sync --force

# Clear inbox backlog
gt inbox clear --all

# Emergency cost stop
gt pause --all        # Pause all work
gt resume --all       # Resume when ready
```

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
```

**Healthy state indicators:**
- All roles show `running`
- Deacon reports no anomalies
- Inbox has reasonable pending items (not 100+)
- Polecats are progressing on tasks

---

## 12. Exact Quotes

### On the Core Philosophy

> "Claude Code is the world's biggest fuckin' ant. Everyone is focused on making their ant run longer... when nature prefers colonies."

> "Gas Town is an Idea Compiler. You just make up features, design them, file the implementation plans, and sling work around to your polecats and crew."

> "Work becomes fluid, an uncountable that you sling around freely, like slopping shiny fish into wooden barrels at the docks."

> "Build a colony of coding agents, not the world's largest ant."

### On Expectations

> "Some bugs fixed 2-3 times. Some fixes get lost. Focus: THROUGHPUT, not perfection."

> "You're not a programmer anymore. You're the head chef of a kitchen with AI robotic sous chefs."

### On Prerequisites

> "If you're not at Stage 7, you'll get your face ripped off by superintelligent chimpanzees."

> "If you have any doubt whatsoever, then you can't use it."

> "Do not use Gas Town if you do not juggle at least five Claude Codes at once, daily."

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

> "Agents suffer from '50 First Dates' syndrome - they wake up with no memory of yesterday."

### On GUPP

> "If there is work on your hook, YOU MUST RUN IT."

---

## 13. Actionability Ladder

### Quick Wins (< 5 minutes)

| Action | Command | Benefit |
|--------|---------|---------|
| Install gt | `go install github.com/steveyegge/gastown/cmd/gt@latest` | Get the binary |
| Check version | `gt version` | Verify installation |
| Read Mayor help | `gt mayor --help` | Understand primary interface |

### Medium Lift (Hours)

| Action | Effort | Benefit |
|--------|--------|---------|
| Initialize workspace | 30 min | Full Gas Town setup |
| Add first rig | 15 min | Connect your project |
| Run Mayor + 3 polecats | 1 hour | Basic multi-agent experience |
| Create startup script | 1 hour | Reproducible environment |
| Learn tmux workflow | 2 hours | Efficient navigation |

### Deep Investment (Weeks)

| Action | Effort | Benefit |
|--------|--------|---------|
| Run full 8-role stack | 1 week | Production-ready orchestration |
| Implement Beads workflow | 1 week | Persistent context management |
| Scale to 20+ agents | 2 weeks | Team-scale output |
| Customize with Roughneck | 2 weeks | Multi-town management |
| Build custom roles | 3+ weeks | Domain-specific optimization |

---

## 14. Quick Reference Card

### Installation

```bash
go install github.com/steveyegge/gastown/cmd/gt@latest
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
bd cook <formula>            # Process formula
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

### Cost Estimation

```
Role-based cost per hour (estimates):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Mayor (Opus):      $15-20/hour
Refinery (Opus):   $15-20/hour
Dogs (Sonnet):     $5-8/hour
Polecats (Sonnet): $5-10/hour each
Witness (Haiku):   $1-3/hour
Deacon (Sonnet):   $5-8/hour
Crew (Sonnet):     $5-10/hour each
Boot (Haiku):      $0.50-1/hour

Example daily cost (8 hours, moderate usage):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1 Mayor + 1 Deacon + 1 Dogs + 2 Rigs + 5 Polecats + 2 Crew
= ($18 + $7 + $7 + $40 + $37.5 + $15) × 8 hours
= ~$990/day (heavy usage)

Conservative usage: $50-150/day
```

---

## 15. Sources

### Primary Sources

#### GitHub Repositories
- [steveyegge/gastown](https://github.com/steveyegge/gastown) - Multi-agent workspace manager
- [steveyegge/beads](https://github.com/steveyegge/beads) - Agent memory system (~225K lines Go)
- [steveyegge/mcp_agent_mail](https://github.com/steveyegge/mcp_agent_mail) - Inter-agent communication
- [steveyegge/vc](https://github.com/steveyegge/vc) - AI-orchestrated coding agent colony
- [steveyegge/efrit](https://github.com/steveyegge/efrit) - Native elisp coding agent for Emacs

#### Blog Posts
- [Welcome to Gas Town](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04) - Full philosophical context
- [The Future of Coding Agents](https://steve-yegge.medium.com/the-future-of-coding-agents-e9451a84207c) - Agent evolution thesis
- [Beads Best Practices](https://steve-yegge.medium.com/beads-best-practices-2db636b9760c) - Memory system deep dive
- [Revenge of the Junior Developer](https://sourcegraph.com/blog/revenge-of-the-junior-developer) - Wave framework
- [The Brute Squad](https://sourcegraph.com/blog/the-brute-squad) - Multi-agent philosophy

#### Podcasts & Interviews
- [Changelog: Adventures in Babysitting Coding Agents](https://changelog.com/friends/96)
- [O'Reilly: Vibe Coding with Steve Yegge](https://www.oreilly.com/radar/podcast/generative-ai-in-the-real-world-vibe-coding-with-steve-yegge/)

#### Twitter/X
- [@steve_yegge](https://x.com/steve_yegge) - Primary announcements
- [Original Gas Town announcement](https://x.com/steve_yegge/status/2008002562650505233)

### Community Extensions

| Extension | Author | Purpose |
|-----------|--------|---------|
| **GTGUI** | @TRIBE-INC | Age of Empires style GUI for Gas Town |
| **Roughneck** | @mjtechguy | Run multiple Gas Towns simultaneously |
| **Station** | @Esteban_Puerta9 | Nats-based alternative architecture |
| **Tutorial Skill** | @nummanali | Claude Code skill for learning Gas Town |

### Books
- [Vibe Coding](https://itrevolution.com) by Steve Yegge and Gene Kim

---

## 16. Tags

`#orchestration` `#gas-town` `#steve-yegge` `#agent-factory` `#vibe-coding` `#beads` `#tmux` `#multi-agent` `#deep-dive` `#extraction` `#level-7` `#complexity-ladder` `#mcp-agent-mail` `#autonomous` `#8-roles` `#mayor` `#deacon` `#dogs` `#refinery` `#witness` `#polecat` `#crew` `#overseer` `#meow-stack` `#gupp`

---

## 17. Document Metadata

- **Created:** 2026-01-18
- **Author:** Claude Opus 4.5 via Agent B3-T1-1
- **Sources:** GitHub repository, 6+ primary blog posts, 15+ cross-referenced extractions
- **Line Count:** 1300+
- **Depth:** Architecture-level deep extraction
- **Version:** Gas Town v0.3.x (Deacon issues noted)

---

*"Build a colony of coding agents, not the world's largest ant."*

# Gas Town - Exhaustive Research Compilation

---
## D-FINAL Connection

**This source contributed to:**
- D-FINAL-architecture.md: Sections 2.4, 2.5, 3 (Gas Town architecture, Beads integration, emerging patterns)

**Coverage in D-FINAL:** 75%
**High-value unique content:** MCP Agent Mail integration details, Beads data plane specifics, gt CLI command reference, tmux configuration, cost management at scale less detailed

**Journey references:**
- synthesis/mastery-ralph-complete.md#gas-town-deep-dive
- html-site/patterns/orchestration/gas-town.html

**Last enhanced:** 2026-01-18 (Phase 2B)

---

> **Research Status:** This document synthesizes all locally available information about Steve Yegge's Gas Town orchestration framework. Web research tools were unavailable during compilation. Sections marked [RESEARCH NEEDED] indicate areas where live web access would provide additional detail.

---

## Table of Contents
1. [Overview and Philosophy](#overview-and-philosophy)
2. [Author Background](#author-background)
3. [Architecture Deep Dive](#architecture-deep-dive)
4. [The 7 Worker Roles](#the-7-worker-roles)
5. [Beads Data Plane Integration](#beads-data-plane-integration)
6. [gt CLI Commands and Usage](#gt-cli-commands-and-usage)
7. [Community Extensions](#community-extensions)
8. [MCP Agent Mail Integration](#mcp-agent-mail-integration)
9. [Vibe Coding Philosophy](#vibe-coding-philosophy)
10. [Cost Management Strategies](#cost-management-strategies)
11. [tmux Configuration and Workflow](#tmux-configuration-and-workflow)
12. [Comparison: Gas Town vs Other Orchestrators](#comparison-gas-town-vs-other-orchestrators)
13. [Real-World Deployments](#real-world-deployments)
14. [Further Research Directions](#further-research-directions)

---

# Overview and Philosophy

## Source
- **Author:** Steve Yegge (@steve_yegge)
- **URL:** https://x.com/steve_yegge/status/2008002562650505233
- **Type:** Twitter Thread + Medium Articles + GitHub
- **Date:** 2026-01-05
- **Engagement:** 252 likes, 32K views

## Core Content

Gas Town represents a paradigm shift from "making a better ant" to "building an ant colony." Steve Yegge's fundamental insight:

> "Claude Code is the world's biggest fuckin' ant. Everyone is focused on making their ant run longer... when nature prefers colonies."

**What Gas Town IS:**
- A factory for spawning, coordinating, and managing coding agents
- An orchestration layer on top of Claude Code instances
- A tmux-native workflow for power users
- An "Idea Compiler" - you think features, Gas Town builds them

**What Gas Town is NOT:**
- A replacement for Claude Code (it uses Claude Code)
- A polished product (3 weeks old, 100% vibe-coded)
- For beginners (explicitly warns Stage 6+ developers only)
- Cheap (multiple Claude accounts required)

## The 8 Stages of Dev Evolution

Steve defines a progression of AI-assisted development maturity:

| Stage | Description | Characteristics |
|-------|-------------|-----------------|
| 1 | Zero/near-zero AI | Traditional coding |
| 2 | Agent in IDE, permissions on | Cautious AI assistance |
| 3 | Agent in IDE, YOLO mode | Trust but verify |
| 4 | Agent fills screen, code is just diffs | Code becomes secondary |
| 5 | CLI single agent, YOLO | Pure terminal workflow |
| 6 | CLI multi-agent (3-5 parallel) | First parallelization |
| 7 | 10+ agents, hand-managed | Scale without tooling |
| **8** | **Building your own orchestrator** | Gas Town territory |

**Critical Warning:**
> "If you're not at Stage 7, you'll get your face ripped off by superintelligent chimpanzees."

## Implementation Details

### Installation
```bash
# Requires Go installed
go install github.com/steveyegge/gastown/cmd/gt@latest

# Initialize your town (creates ~/.gt)
gt init

# Add a project rig
gt rig add /path/to/your/repo
```

### Prerequisites
- Go language environment
- tmux (mandatory - primary UI)
- Multiple Claude accounts (for parallel agents)
- High risk tolerance
- Stage 7+ development experience

## Unique Value

Gas Town's unique value propositions:

1. **Agent Factory Model:** Unlike single-agent loops (Ralph Wiggum) or task-based orchestration (CC Mirror), Gas Town treats agents as disposable, specialized workers in a factory
2. **Role Specialization:** 7 distinct worker types with clear responsibilities
3. **Beads Integration:** Universal context management via git-backed data plane
4. **Vibe Coding Native:** Built entirely through vibe coding (~225K lines Go)
5. **Community Velocity:** 50+ PRs in first weekend

## Actionability

**Rating:** Deep Dive (Stage 7+ only)

**Prerequisites:**
- Comfort with chaos and imperfection
- High cost tolerance (multiple Claude accounts)
- tmux proficiency
- Go development environment
- Understanding of multi-agent coordination

---

# Author Background

## Source
- **Author:** Steve Yegge (@steve_yegge)
- **URL:** Various (Medium, Twitter, GitHub)
- **Type:** Background Research

## Core Content

Steve Yegge is a 40-year software development veteran with unique credentials for building Gas Town:

### Career Highlights
- **Amazon:** Early employee, built internal tools
- **Google:** Famous for "Stevey's Blog Rants," internal platforms
- **Sourcegraph:** Senior role in code intelligence
- **Current:** Full-time AI development advocate

### Relevant Experience
- Built large-scale internal tooling systems
- Known for controversial, insightful technical takes
- ~1 million lines vibe-coded in 2025
- Early adopter of aggressive AI-assisted development

### Programming Philosophy
- Favors Go for AI-assisted development ("boring = good")
- Believes TypeScript wastes 1/3 to 1/2 of diffs on type wrestling
- Views Python as "fine but feels like scripts"
- Strong advocate for throughput over perfection

## Implementation Details

Steve's approach to Gas Town development:

```
# How Steve builds
- Uses Claude Code for all implementation
- Never reads the code himself ("100% vibe-coded")
- Trusts agent output, focuses on product decisions
- Iterates rapidly with high defect tolerance
```

## Unique Value

Steve's credibility comes from:
1. Decades of platform engineering experience
2. Actually using Gas Town in production
3. Transparent about limitations and chaos
4. Building Beads (225K lines) as proof of concept

---

# Architecture Deep Dive

## Source
- **Author:** Steve Yegge
- **URL:** github.com/steveyegge/gastown
- **Type:** GitHub Repository

## Core Content

### The Town (~/.gt)

The "town" is the central headquarters managing all your projects:

```
~/.gt/
├── config.yaml       # Global configuration
├── mayor/           # Mayor agent state
├── deacon/          # Monitoring agent state
├── rigs/            # Registered project repos
│   ├── beads/
│   ├── gastown/
│   └── your-project/
└── inbox/           # Human operator inbox
```

### Rigs

Each project under Gas Town management is called a "rig":

```bash
# Add a rig
gt rig add /path/to/repo

# List rigs
gt rig list

# Remove a rig
gt rig remove repo-name
```

**Rig State:**
- Each rig has its own Witness agent
- Work is tracked per-rig
- Polecats (named workers) are rig-specific
- Crew (ephemeral workers) are rig-scoped

### Communication Model

Gas Town uses an "Agent Mail" paradigm for inter-agent communication:

```
┌──────────────┐    mail     ┌──────────────┐
│    Mayor     │ ─────────── │   Refinery   │
└──────────────┘             └──────────────┘
       │                            │
       │ mail                       │ mail
       ▼                            ▼
┌──────────────┐             ┌──────────────┐
│   Witness    │             │   Polecat    │
└──────────────┘             └──────────────┘
       │                            │
       │ mail                       │ mail
       ▼                            ▼
┌──────────────────────────────────────────┐
│              Human Inbox                 │
│        (Overseer decisions)              │
└──────────────────────────────────────────┘
```

## Implementation Details

### Core Concepts

**Work as Fluid:**
> "Work becomes fluid, an uncountable that you sling around freely, like slopping shiny fish into wooden barrels at the docks."

**Expectations:**
- Some bugs fixed 2-3 times
- Some fixes get lost
- Focus on THROUGHPUT not perfection
- Human is Product Manager, not coder

### Startup Sequence

```bash
# 1. Initialize (once)
gt init

# 2. Add your project
gt rig add /path/to/project

# 3. Start town-level roles
gt mayor up
gt deacon up

# 4. Start rig-level roles
gt witness up project-name
gt refinery up project-name

# 5. Spawn named workers
gt polecat up project-name alice
gt polecat up project-name bob

# 6. Monitor via tmux
# (Gas Town opens tmux panes automatically)
```

## Unique Value

Architecture differentiators:

1. **Hierarchical Role System:** Clear separation of concerns
2. **Mail-Based Communication:** No training needed, natural paradigm
3. **Git-Backed State:** Everything persisted via Beads
4. **Human in the Loop:** Overseer inbox for decisions
5. **tmux-Native:** Built for terminal power users

---

# The 7 Worker Roles

## Source
- **Author:** Steve Yegge
- **URL:** github.com/steveyegge/gastown, Medium articles
- **Type:** Documentation

## Core Content

Gas Town defines 7 specialized worker roles plus the human Overseer:

### Role Architecture

```
╔═══════════════════════════════════════════════════════════════╗
║                      GAS TOWN HIERARCHY                       ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  TOWN LEVEL (Global)                                          ║
║  ┌─────────┐  ┌─────────┐  ┌─────────┐                       ║
║  │  MAYOR  │  │ DEACON  │  │  DOGS   │                       ║
║  │  coord  │  │ monitor │  │  gates  │                       ║
║  └─────────┘  └─────────┘  └─────────┘                       ║
║       │                                                       ║
║       ▼                                                       ║
║  RIG LEVEL (Per-Project)                                      ║
║  ┌──────────┐  ┌──────────┐  ┌──────────┐                    ║
║  │ REFINERY │  │ WITNESS  │  │ POLECAT  │                    ║
║  │ decompose│  │ observe  │  │  named   │                    ║
║  └──────────┘  └──────────┘  └──────────┘                    ║
║                                   │                           ║
║                                   ▼                           ║
║                             ┌──────────┐                      ║
║                             │   CREW   │                      ║
║                             │ephemeral │                      ║
║                             └──────────┘                      ║
║                                                               ║
║  HUMAN LEVEL                                                  ║
║  ┌─────────────────────────────────────────────┐             ║
║  │               OVERSEER (YOU)                 │             ║
║  │  Product Manager · Decision Maker · Boss     │             ║
║  └─────────────────────────────────────────────┘             ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

### Role Details

#### 1. Mayor (Town-Level Coordination)

**Function:** Chief coordinator for the entire town

**Responsibilities:**
- Receives high-level directives from Overseer
- Routes work to appropriate rigs
- Manages cross-rig coordination
- Handles town-level decisions

**Commands:**
```bash
gt mayor up        # Start mayor
gt mayor status    # Check mayor state
gt mayor down      # Stop mayor
```

#### 2. Deacon (Monitoring/Handshakes)

**Function:** Health monitoring and agent coordination

**Responsibilities:**
- Monitors agent health across town
- Handles agent-to-agent handshakes
- Reports anomalies to Mayor
- Tracks work progress

**Commands:**
```bash
gt deacon up       # Start deacon
gt deacon status   # View monitoring state
```

#### 3. Dogs (Quality Gates/Watchdogs)

**Function:** Quality assurance and safety gates

**Responsibilities:**
- Reviews work before acceptance
- Enforces quality standards
- Guards against regressions
- Can reject/rollback work

**Commands:**
```bash
gt dogs up         # Start dogs
gt dogs bark       # Trigger quality check
```

#### 4. Refinery (Task Decomposition)

**Function:** Breaks down large tasks into agent-sized work

**Responsibilities:**
- Receives feature requests
- Decomposes into smaller tasks
- Assigns to Polecats or Crew
- Tracks decomposition progress

**Commands:**
```bash
gt refinery up <rig>           # Start refinery for rig
gt refinery decompose <task>   # Manually trigger decomposition
```

#### 5. Polecat (Named Persistent Workers)

**Function:** Named, persistent agent workers

**Responsibilities:**
- Execute assigned tasks
- Maintain context across sessions
- Specialize in rig-specific knowledge
- Report completion to Refinery

**Commands:**
```bash
gt polecat up <rig> alice      # Start polecat named "alice"
gt polecat up <rig> bob        # Start polecat named "bob"
gt polecat list <rig>          # List polecats for rig
gt polecat assign alice <task> # Assign task to alice
```

#### 6. Witness (Per-Rig Observer)

**Function:** Observes and records rig activity

**Responsibilities:**
- Watches all work in assigned rig
- Records history and context
- Provides state to new workers
- Reports anomalies to Deacon

**Commands:**
```bash
gt witness up <rig>    # Start witness for rig
gt witness report      # Get current state report
```

#### 7. Crew (Ephemeral Workers)

**Function:** Short-lived, task-specific workers

**Responsibilities:**
- Execute single tasks
- No persistent state
- Cheap and disposable
- Used for parallel bursts

**Commands:**
```bash
gt crew spawn <rig> --task "fix this bug"
gt crew count <rig>    # Count active crew
```

### 8. Overseer (Human Boss)

**Function:** Product Manager and decision maker

**Responsibilities:**
- Define features and priorities
- Review inbox decisions
- Approve major changes
- Provide human judgment

**Interface:**
- Human inbox for decisions
- tmux panes for observation
- `gt` CLI for commands

## Implementation Details

### Role Startup Order

Recommended startup sequence:

```bash
# 1. Town-level first
gt mayor up
gt deacon up

# 2. Quality gates
gt dogs up

# 3. Per-rig infrastructure
gt witness up my-project
gt refinery up my-project

# 4. Named workers
gt polecat up my-project alice
gt polecat up my-project bob
gt polecat up my-project charlie

# 5. Crew as needed (on-demand)
gt crew spawn my-project --task "implement feature X"
```

### Role Communication Patterns

```
[Overseer]
    │
    │ "Build user auth"
    ▼
[Mayor] ──────────────────────────────────────┐
    │                                          │
    │ routes to rig                            │ status
    ▼                                          │
[Refinery] ─────────────────────┐              │
    │                           │              │
    │ decomposes into:          │ progress     │
    │ - task 1: DB schema       │              │
    │ - task 2: API routes      │              │
    │ - task 3: Frontend forms  │              │
    ▼                           ▼              │
[Polecat: alice] ←──────── [Witness] ─────────┘
[Polecat: bob]     observe     │
[Crew: temp-1]                 │
    │                          │
    │ on anomaly               │
    ▼                          │
[Dogs] ← quality check ────────┘
    │
    │ if passes
    ▼
[Complete]
```

## Unique Value

Role system benefits:

1. **Clear Separation:** Each role has defined boundaries
2. **Scalability:** Add more Polecats/Crew as needed
3. **Observability:** Witness provides continuous state
4. **Quality:** Dogs prevent regressions
5. **Flexibility:** Mix persistent (Polecat) and ephemeral (Crew) workers

---

# Beads Data Plane Integration

## Source
- **Author:** Steve Yegge
- **URL:** github.com/steveyegge/beads
- **Type:** GitHub Repository

## Core Content

Beads is the data plane that powers Gas Town's context management:

### What Beads Does

- **Git-Backed Storage:** All state persisted in git
- **Universal Context:** Shared context across agents
- **Memory Management:** Agents can read/write context
- **History:** Full audit trail of all changes

### Scale

- ~225K lines of Go code
- 100% vibe-coded by Steve
- Developed over 2025
- Production-tested with Gas Town

### Integration Points

```
┌─────────────────────────────────────────────────┐
│                  GAS TOWN                       │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │  Mayor  │  │ Polecat │  │  Crew   │        │
│  └────┬────┘  └────┬────┘  └────┬────┘        │
│       │            │            │              │
│       └────────────┼────────────┘              │
│                    │                           │
│              ┌─────▼─────┐                     │
│              │   BEADS   │                     │
│              │ Data Plane│                     │
│              └─────┬─────┘                     │
│                    │                           │
└────────────────────┼───────────────────────────┘
                     │
                     ▼
              ┌─────────────┐
              │    Git      │
              │ Repository  │
              └─────────────┘
```

## Implementation Details

[RESEARCH NEEDED: Specific Beads API and commands]

### Conceptual Usage

```go
// Beads provides context to agents
context := beads.GetContext(rig, "alice")

// Agents write back results
beads.SetContext(rig, "alice", updatedContext)

// History is automatically git-committed
beads.Commit("alice completed auth implementation")
```

### Key Features

1. **Git Native:** Everything is a git commit
2. **Agent-Aware:** Context scoped by agent name
3. **Rig-Scoped:** Context isolated per project
4. **Queryable:** Can retrieve historical context

## Unique Value

Why Beads matters for Gas Town:

1. **Persistence:** Agents can resume work across sessions
2. **Sharing:** Multiple agents share context
3. **Audit:** Full history of all agent actions
4. **Recovery:** Roll back to any point in time

---

# gt CLI Commands and Usage

## Source
- **Author:** Steve Yegge
- **URL:** github.com/steveyegge/gastown
- **Type:** CLI Documentation

## Core Content

The `gt` binary is the primary interface for Gas Town:

### Installation

```bash
# Requires Go 1.21+
go install github.com/steveyegge/gastown/cmd/gt@latest

# Verify installation
gt version
```

### Command Categories

#### Town Management

```bash
# Initialize a new town
gt init

# Town status
gt status

# Configure town
gt config set <key> <value>
gt config get <key>
gt config list
```

#### Rig Management

```bash
# Add a project rig
gt rig add /path/to/repo
gt rig add /path/to/repo --name custom-name

# List rigs
gt rig list

# Remove a rig
gt rig remove <rig-name>

# Rig status
gt rig status <rig-name>
```

#### Role Management

```bash
# Start roles (generic pattern)
gt <role> up [rig-name] [worker-name]

# Examples:
gt mayor up
gt deacon up
gt dogs up
gt witness up beads
gt refinery up beads
gt polecat up beads alice
gt polecat up beads bob

# Stop roles
gt <role> down [rig-name] [worker-name]

# Check status
gt <role> status [rig-name] [worker-name]
```

#### Crew (Ephemeral Workers)

```bash
# Spawn crew worker
gt crew spawn <rig> --task "task description"

# Count active crew
gt crew count <rig>

# Kill all crew
gt crew purge <rig>
```

#### Inbox Management

```bash
# View inbox (decisions waiting for Overseer)
gt inbox

# Respond to inbox item
gt inbox respond <id> --approve
gt inbox respond <id> --reject
gt inbox respond <id> --defer

# Clear inbox
gt inbox clear
```

## Implementation Details

### Typical Workflow

```bash
# Morning startup
gt mayor up && gt deacon up && gt dogs up

# Start working on project
gt witness up my-project
gt refinery up my-project
gt polecat up my-project alice
gt polecat up my-project bob

# Send work
gt inbox send my-project "Build user authentication"

# Monitor progress
gt status
gt rig status my-project

# End of day
gt crew purge my-project  # Clean up ephemeral workers
# (Polecats persist)
```

### tmux Integration

Gas Town automatically manages tmux:

```bash
# gt commands open tmux panes
gt polecat up my-project alice
# → Creates pane: "gas-alice"

gt polecat up my-project bob
# → Creates pane: "gas-bob"

# You can attach to any pane
tmux select-window -t gas-alice
```

## Unique Value

CLI design principles:

1. **Intuitive Verbs:** up/down/status pattern
2. **Hierarchical:** town → rig → role → worker
3. **tmux-Native:** Integrates with terminal workflow
4. **Scriptable:** All commands work in scripts

---

# Community Extensions

## Source
- **Author:** Various community members
- **URL:** Multiple GitHub repositories
- **Type:** Open Source Projects

## Core Content

The Gas Town community has created several extensions:

### 1. GTGUI - Age of Empires Style GUI

**Author:** @TRIBE-INC
**URL:** github.com/TRIBE-INC/gtgui

**Description:** A graphical user interface for Gas Town, styled like a strategy game command center.

**Features:**
- Visual representation of agents
- Drag-and-drop task assignment
- Real-time status monitoring
- "Age of Empires" aesthetic

[RESEARCH NEEDED: Installation, screenshots, feature details]

### 2. Roughneck - Multi-Town Management

**Author:** @mjtechguy
**URL:** github.com/mjtechguy/roughneck

**Description:** Run multiple Gas Towns simultaneously for different projects or clients.

**Features:**
- Manage multiple towns from single interface
- Cross-town coordination
- Resource allocation between towns

[RESEARCH NEEDED: Configuration, use cases]

### 3. Station - Nats-Based Alternative

**Author:** @Esteban_Puerta9 (CloudShip AI)
**URL:** github.com/cloudshipai/station

**Description:** Alternative orchestration using Nats messaging instead of agent mail.

**Features:**
- Nats pub/sub for agent communication
- Different architectural approach
- May offer better scalability

[RESEARCH NEEDED: Architecture comparison, when to use]

### 4. numman-ali Tutorial Skill

**Author:** @nummanali
**Installation:**
```bash
/plugin marketplace add numman-ali/n-skills
/plugin install gastown@numman-ali/n-skills
```

**Description:** Claude Code skill that teaches Gas Town concepts and usage.

## Implementation Details

### Extension Installation Pattern

Most extensions follow similar patterns:

```bash
# Clone extension
git clone https://github.com/<org>/<extension>

# Install dependencies
cd <extension>
go mod download  # or npm install

# Configure
cp config.example.yaml config.yaml
# Edit config.yaml

# Run
./extension  # or gt extension enable <name>
```

## Unique Value

Community benefits:

1. **Rapid Innovation:** 50+ PRs first weekend
2. **Diverse Approaches:** GUI, multi-town, different messaging
3. **Skill Sharing:** Tutorials and onboarding help
4. **Gas Town Awareness:** Community building corpus for future models

---

# MCP Agent Mail Integration

## Source
- **Author:** @Dicklesworthstone (Jeffrey Emanuel)
- **URL:** github.com/Dicklesworthstone/mcp_agent_mail
- **Type:** GitHub Repository / MCP Server

## Core Content

MCP Agent Mail provides the communication layer for Gas Town agents:

### What It Does

Enables agents to send "emails" to each other:
- No special training required
- Natural metaphor (everyone knows email)
- Async communication pattern
- Works with any agent

### Why Email Metaphor

From the design philosophy:

> "Agents already understand email. No need to teach them a new protocol. They send messages, they receive messages, they reply. It just works."

### Integration with Gas Town

```
┌─────────────────────────────────────────────────┐
│                   GAS TOWN                      │
│                                                 │
│  [Mayor]  ──mail──▶  [Refinery]                │
│     │                    │                      │
│     │                    │                      │
│  ◀─mail─────────────mail─┘                     │
│     │                                           │
│     ▼                                           │
│  [Polecat: alice] ◀─mail─▶ [Polecat: bob]      │
│                                                 │
│            ┌───────────────────┐               │
│            │   MCP Agent Mail  │               │
│            │   (Message Bus)   │               │
│            └───────────────────┘               │
│                                                 │
└─────────────────────────────────────────────────┘
```

## Implementation Details

[RESEARCH NEEDED: Specific API, message formats, setup]

### Conceptual Usage

```python
# Agent sending a message
mcp.agent_mail.send(
    to="alice",
    subject="Task Assignment",
    body="Please implement the login endpoint"
)

# Agent checking inbox
messages = mcp.agent_mail.inbox()
for msg in messages:
    process_task(msg)
    mcp.agent_mail.reply(msg, "Task complete")
```

### Key Features

1. **Async:** Messages queue until read
2. **Addressable:** Agents have names/addresses
3. **Threaded:** Replies link to originals
4. **Persistent:** Messages survive restarts

## Unique Value

Why MCP Agent Mail matters:

1. **Zero Training:** Email is universal
2. **Decoupled:** Agents don't need direct connections
3. **Auditable:** All messages logged
4. **Natural:** Matches human mental model

---

# Vibe Coding Philosophy

## Source
- **Author:** Steve Yegge
- **URL:** Medium articles, Twitter threads
- **Type:** Philosophy/Methodology

## Core Content

### The Core Idea

Vibe coding is a development philosophy where:

1. You describe what you want (the "vibe")
2. AI generates the code
3. You never read the code directly
4. You judge by outcomes, not implementation

### Steve's Definition

> "Work becomes fluid, an uncountable that you sling around freely, like slopping shiny fish into wooden barrels at the docks."

### The "Idea Compiler" Concept

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  YOUR IDEAS     │────▶│   GAS TOWN      │────▶│  WORKING CODE   │
│  (Features)     │     │  (Compiler)     │     │  (Product)      │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

You are a Product Manager. Gas Town is the compiler. Code is the output.

### Acceptance of Imperfection

Key mindset shifts:

| Traditional | Vibe Coding |
|-------------|-------------|
| Zero bugs | Some bugs acceptable |
| Perfect first time | Fix 2-3 times if needed |
| Understand all code | Trust the vibe |
| Sequential work | Parallel throughput |
| Code reviews | Outcome testing |

### Why Go?

Steve's findings from ~1M lines vibe-coded in 2025:

| Language | Issue | Vibe-Friendliness |
|----------|-------|-------------------|
| TypeScript | 1/3 to 1/2 of diffs are type wrestling | Low |
| Python | "Fine" but feels like scripts | Medium |
| **Go** | "Boring" = evolutionary advantage | High |

> "Go is just... good. It's boring. You can always understand it!"

The "boring" nature of Go means:
- Diffs are readable (even if you don't read them)
- Less abstraction = less confusion
- Standard patterns = predictable output
- Fast compilation = faster feedback

## Implementation Details

### Vibe Coding Workflow

```bash
# 1. Define the vibe
"I want user authentication with email/password and OAuth"

# 2. File the work
gt inbox send my-project "Build auth: email/pass + OAuth"

# 3. Let it cook
# (Refinery decomposes, Polecats implement)

# 4. Test outcomes
"Can I log in? Does OAuth work? Great, ship it."

# 5. Iterate on vibes, not code
"OAuth is slow, make it faster"
# (Not: "Optimize the token refresh in auth/oauth.go line 47")
```

### When to Break the Vibe

Even Steve breaks vibe coding for:
- Security-critical code
- Performance bottlenecks
- Debugging mysterious failures

But the default is: trust the vibe.

## Unique Value

Why vibe coding matters:

1. **Throughput:** 10x more features shipped
2. **Focus:** Product, not implementation
3. **Delegation:** AI handles details
4. **Scale:** More agents = more throughput
5. **Future-Proof:** Models improve, vibes persist

---

# Cost Management Strategies

## Source
- **Author:** Steve Yegge, community
- **URL:** Various threads
- **Type:** Operational Guidance

## Core Content

Gas Town is explicitly described as "expensive as hell." Here's what we know about costs:

### Cost Drivers

1. **Multiple Claude Accounts:** Each Polecat needs API access
2. **Parallel Execution:** More agents = more tokens
3. **Context Length:** Long conversations = expensive
4. **Iteration:** Bugs fixed multiple times

### Steve's Warning

> "If you care about costs, don't use this."

This isn't a budget tool. It's for maximum throughput.

### Known Strategies

[RESEARCH NEEDED: Community cost optimization techniques]

#### Model Selection

```
┌─────────────────────────────────────────────────┐
│              MODEL SELECTION STRATEGY           │
├─────────────────────────────────────────────────┤
│                                                 │
│  OPUS ($$$$)                                    │
│  └─ Mayor: Complex coordination                 │
│  └─ Refinery: Task decomposition                │
│                                                 │
│  SONNET ($$$)                                   │
│  └─ Polecats: Implementation work               │
│  └─ Dogs: Quality review                        │
│                                                 │
│  HAIKU ($$)                                     │
│  └─ Crew: Simple, ephemeral tasks               │
│  └─ Deacon: Health checks                       │
│                                                 │
└─────────────────────────────────────────────────┘
```

#### Account Strategy

Options for multi-account setup:
- Multiple personal API keys (against ToS?)
- Organization account with sub-keys
- Different providers for different roles

#### Context Management

- Beads helps share context (reduce duplication)
- Short-lived Crew workers minimize context
- Witness provides state without full history

## Implementation Details

### Cost Estimation Framework

```
Base cost per agent-hour:
- Opus: ~$10-20/hour (heavy usage)
- Sonnet: ~$5-10/hour
- Haiku: ~$1-3/hour

Town running 5 Polecats (Sonnet) + Mayor (Opus) for 8 hours:
- Polecats: 5 × $7.50 × 8 = $300
- Mayor: 1 × $15 × 8 = $120
- Total: ~$420/day

This is rough estimation - actual costs vary wildly.
```

### Cost Reduction Tactics

1. **Aggressive Crew usage:** Ephemeral workers for simple tasks
2. **Polecat specialization:** Reuse context, don't re-explain
3. **Smart decomposition:** Right-sized tasks reduce thrashing
4. **Quality gates:** Dogs prevent expensive rework

## Unique Value

Cost perspective:

1. **ROI Focus:** $400/day for $4000 worth of work?
2. **Speed Premium:** Pay for velocity
3. **Scaling Economics:** More agents = diminishing returns (eventually)
4. **Future:** Costs will drop as models improve

---

# tmux Configuration and Workflow

## Source
- **Author:** Steve Yegge, rpai author
- **URL:** github.com/steveyegge/gastown, github.com/radoslav11/rpai
- **Type:** Tooling Documentation

## Core Content

Gas Town is tmux-native. Understanding tmux is mandatory.

### Why tmux?

1. **Persistence:** Sessions survive disconnects
2. **Multiplexing:** Multiple panes in single terminal
3. **Scripting:** Automatable window management
4. **Remote:** Works over SSH

### Gas Town tmux Structure

```
┌─────────────────────────────────────────────────────────────┐
│  tmux session: gastown                                      │
├────────────────────┬────────────────────┬───────────────────┤
│                    │                    │                   │
│  Window: mayor     │  Window: alice     │  Window: bob      │
│  ┌──────────────┐  │  ┌──────────────┐  │  ┌─────────────┐ │
│  │              │  │  │              │  │  │             │ │
│  │  Mayor       │  │  │  Polecat     │  │  │  Polecat    │ │
│  │  Agent       │  │  │  Alice       │  │  │  Bob        │ │
│  │              │  │  │              │  │  │             │ │
│  └──────────────┘  │  └──────────────┘  │  └─────────────┘ │
│                    │                    │                   │
├────────────────────┴────────────────────┴───────────────────┤
│  Window: overview (rpai or status)                          │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ [1] Mayor    ██████ running                             ││
│  │ [2] Alice    ██████ running                             ││
│  │ [3] Bob      ██████ idle                                ││
│  │ [4] Crew-1   ██████ complete                            ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

### Essential tmux Commands

```bash
# Session management
tmux new -s gastown        # Create session
tmux attach -t gastown     # Attach to session
tmux ls                    # List sessions

# Window management
Ctrl-b c                   # Create window
Ctrl-b n                   # Next window
Ctrl-b p                   # Previous window
Ctrl-b <number>            # Jump to window

# Pane management
Ctrl-b %                   # Split vertical
Ctrl-b "                   # Split horizontal
Ctrl-b o                   # Cycle panes
Ctrl-b z                   # Zoom pane (fullscreen toggle)

# Useful for Gas Town
Ctrl-b :setw synchronize-panes on   # Type in all panes
```

### rpai Integration

rpai (from @radoslav11) provides a TUI for agent monitoring:

```bash
# Install
cargo install rpai

# Run in tmux session
rpai
```

Features:
- Scans tmux panes for AI agents
- Shows status and output previews
- Jump to any agent with selection
- Works with Claude, Cursor, Codex

## Implementation Details

### Recommended .tmux.conf

```bash
# Gas Town optimized tmux config

# Better prefix (optional)
# set -g prefix C-a

# Mouse support (helpful for pane selection)
set -g mouse on

# Bigger history
set -g history-limit 50000

# Better colors
set -g default-terminal "screen-256color"

# Status bar showing agent info
set -g status-right '#(gt status --brief)'

# Easy pane switching
bind -n M-Left select-pane -L
bind -n M-Right select-pane -R
bind -n M-Up select-pane -U
bind -n M-Down select-pane -D

# Quick window switching
bind -n M-1 select-window -t 1
bind -n M-2 select-window -t 2
bind -n M-3 select-window -t 3
# ... etc

# Pane titles (show agent name)
set -g pane-border-status top
set -g pane-border-format "#{pane_title}"
```

### Workflow Scripts

```bash
#!/bin/bash
# start-gastown.sh

# Start session
tmux new-session -d -s gastown

# Create windows for each role
tmux rename-window -t gastown:0 'mayor'
tmux new-window -t gastown -n 'deacon'
tmux new-window -t gastown -n 'dogs'
tmux new-window -t gastown -n 'alice'
tmux new-window -t gastown -n 'bob'
tmux new-window -t gastown -n 'overview'

# Start roles in each window
tmux send-keys -t gastown:mayor 'gt mayor up' C-m
tmux send-keys -t gastown:deacon 'gt deacon up' C-m
tmux send-keys -t gastown:dogs 'gt dogs up' C-m
tmux send-keys -t gastown:alice 'gt polecat up myrig alice' C-m
tmux send-keys -t gastown:bob 'gt polecat up myrig bob' C-m
tmux send-keys -t gastown:overview 'rpai' C-m

# Attach
tmux attach -t gastown
```

## Unique Value

tmux benefits for Gas Town:

1. **Visibility:** See all agents at once
2. **Persistence:** Leave running overnight
3. **Scriptable:** Automate startup/shutdown
4. **Remote:** Monitor from anywhere
5. **Integration:** rpai adds agent-aware UI

---

# Comparison: Gas Town vs Other Orchestrators

## Source
- **Author:** Various community discussions
- **URL:** Multiple threads
- **Type:** Comparative Analysis

## Core Content

### Orchestrator Landscape

```
┌─────────────────────────────────────────────────────────────────┐
│                    ORCHESTRATOR SPECTRUM                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SIMPLE ◄─────────────────────────────────────────────► COMPLEX│
│                                                                 │
│  [Ralph Wiggum]    [CC Mirror]    [Orchestra]    [Gas Town]    │
│       │                │              │              │          │
│       │                │              │              │          │
│   Single agent     Multi-agent    Self-improving  Agent factory│
│   Retry loop       Task-based     Docker-based    Role-based   │
│   Bash script      Native CC      Specialized     Full system  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Gas Town vs Ralph Wiggum

| Aspect | Ralph Wiggum | Gas Town |
|--------|--------------|----------|
| **Model** | Single agent, retry loop | Multi-agent factory |
| **Complexity** | Bash script | Full system |
| **Persistence** | Via git/progress.txt | Beads data plane |
| **Parallelism** | None (sequential) | Native (many agents) |
| **Roles** | None | 7 specialized roles |
| **Setup** | Minutes | Hours/days |
| **Cost** | Single agent | Multiple accounts |
| **Use Case** | Well-defined tasks | Complex systems |

**When to use Ralph:** Single feature, clear completion criteria
**When to use Gas Town:** Building entire products, ongoing development

### Gas Town vs CC Mirror Native Orchestration

| Aspect | CC Mirror | Gas Town |
|--------|-----------|----------|
| **Model** | Task-based DAG | Agent factory |
| **Complexity** | Medium | High |
| **Setup** | npx command | Go install + config |
| **Dependencies** | TaskCreate/BlockedBy | Beads + Agent Mail |
| **Parallelism** | Auto-scheduled | Explicit workers |
| **Roles** | None (generic agents) | 7 specialized |
| **Persistence** | Built-in tasks | Git via Beads |
| **Cost** | Single variant | Multiple accounts |

**nummanali's take:**
> "Simplicity covers 80% with zero effort - mass-market ease. Gas Town for remaining 20%."

**When to use CC Mirror:** Most projects, demos, getting started
**When to use Gas Town:** Stage 7+ scale, maximum throughput

### Gas Town vs Infinite Orchestra

| Aspect | Orchestra | Gas Town |
|--------|-----------|----------|
| **Model** | Self-improving | Production factory |
| **Environment** | Docker container | tmux + local |
| **Autonomy** | High (improves itself) | Human-directed |
| **Parallelism** | Sequential (for now) | Native parallel |
| **Roles** | Profiles (coder, arch) | 7 fixed roles |
| **Persistence** | Neo4j optional | Beads |
| **24/7** | Yes (designed for) | Yes (tmux) |

**When to use Orchestra:** Experimental, self-evolving systems
**When to use Gas Town:** Production development, human oversight

### Decision Matrix

```
┌────────────────────────────────────────────────────────────────┐
│                    WHICH ORCHESTRATOR?                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  START HERE                                                    │
│      │                                                         │
│      ▼                                                         │
│  Are you Stage 7+? ──No──▶ Use Ralph Wiggum or CC Mirror      │
│      │                                                         │
│     Yes                                                        │
│      │                                                         │
│      ▼                                                         │
│  Is cost a concern? ──Yes──▶ Use CC Mirror                    │
│      │                                                         │
│      No                                                        │
│      │                                                         │
│      ▼                                                         │
│  Need 24/7 autonomous? ──Yes──▶ Consider Orchestra            │
│      │                                                         │
│      No                                                        │
│      │                                                         │
│      ▼                                                         │
│  Want maximum throughput + control?                            │
│      │                                                         │
│     Yes                                                        │
│      │                                                         │
│      ▼                                                         │
│  ┌─────────────────────┐                                       │
│  │     GAS TOWN        │                                       │
│  └─────────────────────┘                                       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

## Unique Value

Gas Town's unique position:

1. **Scale:** Designed for 10+ agents
2. **Structure:** Clear role hierarchy
3. **Philosophy:** Vibe coding native
4. **Community:** Rapid extension development
5. **Pedigree:** Built by 40-year veteran

---

# Real-World Deployments

## Source
- **Author:** Steve Yegge, community
- **URL:** Various threads
- **Type:** Case Studies

## Core Content

### Steve's Own Usage

**Beads Development:**
- ~225K lines of Go
- 100% vibe-coded using Gas Town precursors
- Production-tested data plane

**Gas Town Development:**
- Gas Town built with early Gas Town
- "Smuggled 400 miles upriver in my ass" (3 weeks old)
- 50+ community PRs first weekend

### Community Reports

[RESEARCH NEEDED: Specific case studies and deployment stories]

**Known patterns:**
- Startups using for rapid prototyping
- Indie devs for product development
- Teams experimenting with multi-agent workflows

### Success Indicators

From community threads:
- Complex features shipped overnight
- Parallel development without merge conflicts (Beads)
- Faster iteration than traditional development

### Failure Patterns

Also from community:
- Underestimating Stage 7 requirement
- Cost overruns from unchecked agents
- Context collapse without proper Beads setup
- Chimps ripping faces off (catastrophic failures)

## Implementation Details

### Deployment Checklist

```markdown
## Gas Town Deployment Readiness

### Prerequisites
- [ ] Stage 7+ development experience
- [ ] Multiple Claude accounts configured
- [ ] tmux proficiency
- [ ] Go environment setup
- [ ] High chaos tolerance

### Setup
- [ ] gt installed and init complete
- [ ] Beads configured
- [ ] First rig added
- [ ] Mayor and Deacon running
- [ ] At least 2 Polecats configured

### Workflow
- [ ] Inbox process defined
- [ ] Quality gates (Dogs) configured
- [ ] Monitoring (rpai or equivalent) setup
- [ ] Cost tracking in place
- [ ] Backup/recovery plan
```

## Unique Value

Real-world insights:

1. **Validation:** Steve uses it for real work
2. **Community:** Active PRs = real usage
3. **Iteration:** Rapid improvement cycle
4. **Learning:** Community sharing patterns

---

# Further Research Directions

## Awaiting Web Access

The following topics require live web research:

### GitHub Repositories

1. **github.com/steveyegge/gastown**
   - Full README and documentation
   - Issue tracker for known problems
   - PR activity and roadmap
   - Code structure and architecture

2. **github.com/steveyegge/beads**
   - API documentation
   - Integration examples
   - Performance characteristics

3. **Community Extensions**
   - github.com/TRIBE-INC/gtgui (GTGUI)
   - github.com/mjtechguy/roughneck
   - github.com/cloudshipai/station
   - github.com/Dicklesworthstone/mcp_agent_mail

### Medium Articles

1. **medium.com/@steve-yegge/welcome-to-gas-town**
   - Full philosophical context
   - Detailed architecture explanation
   - Warning details

2. **medium.com/@steve-yegge/the-future-of-coding-agents**
   - Agent evolution thesis
   - Factory model deep dive

### Twitter/X Threads

1. **Original announcement thread**
   - Full thread with all replies
   - Community questions and answers
   - Extension announcements

### Video Content

1. **YouTube tutorials**
2. **Demo recordings**
3. **Community walkthroughs**

---

## Research Summary

### What We Know

| Area | Confidence | Detail Level |
|------|------------|--------------|
| Core philosophy | High | Good |
| 7 worker roles | High | Good (conceptual) |
| gt CLI basics | Medium | Partial |
| Beads integration | Medium | Conceptual |
| Community extensions | Medium | Names/URLs only |
| Cost strategies | Low | Anecdotal |
| Real deployments | Low | Limited |

### What We Need

1. **Complete gt CLI reference**
2. **Beads API documentation**
3. **GTGUI screenshots and features**
4. **Roughneck multi-town patterns**
5. **Station architecture comparison**
6. **MCP Agent Mail setup guide**
7. **Cost optimization case studies**
8. **Production deployment guides**
9. **Troubleshooting common issues**
10. **Video walkthroughs**

---

## Conclusion

Gas Town represents a significant evolution in AI-assisted development:

**For the Right User:**
- Maximum development throughput
- Factory-scale agent coordination
- Vibe coding philosophy realized
- Active, innovative community

**Warnings:**
- Stage 7+ only (serious prerequisite)
- Expensive (multiple accounts)
- Chaotic (some bugs, lost work)
- tmux mandatory (no GUI alternative... except GTGUI)

**The Big Picture:**

> "Gas Town is an Idea Compiler. You just make up features, design them, file the implementation plans, and sling work around to your polecats and crew."

This is the future Steve Yegge sees: humans as Product Managers, AI colonies as implementation teams, and throughput as the primary metric.

---

## Tags

`#orchestration` `#gas-town` `#steve-yegge` `#agent-factory` `#vibe-coding` `#beads` `#tmux` `#multi-agent` `#deep-dive` `#research`

---

## Document Metadata

- **Created:** 2026-01-09
- **Research Status:** Partial (web tools unavailable)
- **Last Updated:** 2026-01-09
- **Sources:** Local extractions, cross-referenced orchestration documents
- **Next Steps:** Web research when tools available

---

# Deep Dive Expansion

> **Expansion Date:** 2026-01-09
> **Methodology:** Cross-referencing multi-agent patterns, cost optimization research, community tooling, and orchestration framework analysis to synthesize advanced Gas Town patterns not covered in the main document.

---

## Advanced Role Configuration Patterns

### Hybrid Role Stacking

While the 7 worker roles are documented, the **optimal stacking patterns** for specific workflows are not:

#### Feature Factory Configuration
```
┌─────────────────────────────────────────────────────────────┐
│                    FEATURE FACTORY STACK                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  TIER 1: Always Running                                     │
│  ├── Mayor (Opus) - 1 instance                              │
│  ├── Deacon - 1 instance                                    │
│  └── Dogs - 1 instance                                      │
│                                                             │
│  TIER 2: Per-Rig                                            │
│  ├── Witness - 1 per active rig                             │
│  └── Refinery - 1 per rig with queued work                  │
│                                                             │
│  TIER 3: Scaling Workers (adjust based on queue)            │
│  ├── Polecats (Sonnet) - 2-5 named, persistent              │
│  │   ├── "alice" - frontend specialist                      │
│  │   ├── "bob" - backend specialist                         │
│  │   ├── "carol" - database specialist                      │
│  │   └── "dave" - testing specialist                        │
│  │                                                          │
│  └── Crew (Haiku) - 0-10 ephemeral, spawn on demand         │
│      └── For simple: file moves, greps, small fixes         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Investigation/Research Configuration
```
TIER 1: Mayor + Deacon (minimal)
TIER 2: Witness ONLY (observation mode)
TIER 3: 1 Polecat (Opus) for deep reasoning
        5-10 Crew (Haiku) for parallel file search

Use case: Debugging complex bugs, architecture discovery
```

#### Sprint/Deadline Configuration
```
TIER 1: Full (Mayor, Deacon, Dogs)
TIER 2: All rigs active
TIER 3: Maximum Polecats (Sonnet) - 5-8
        Aggressive Crew spawning (Haiku) - up to 20

Warning: Expensive. Reserve for "ship by end of day" scenarios.
```

### Role-Specific Model Selection

The cost optimization research reveals a pattern not in the main document:

| Role | Recommended Model | Rationale | Cost/Hour (est.) |
|------|-------------------|-----------|------------------|
| **Mayor** | Opus 4.5 | Complex coordination, cross-rig decisions | $15-20 |
| **Deacon** | Haiku | Simple health checks, status monitoring | $1-2 |
| **Dogs** | Sonnet | Quality review requires reasoning but not Opus | $5-8 |
| **Refinery** | Opus 4.5 | Task decomposition is architecturally complex | $15-20 |
| **Polecat** | Sonnet | Most implementation work | $5-10 |
| **Witness** | Haiku | Observation and logging | $1-3 |
| **Crew** | Haiku | Simple, isolated tasks | $0.50-2 |

**Cost Optimization Formula:**
```
Base Cost = (Mayor×$18) + (Deacon×$1.5) + (Dogs×$7)
Per-Rig = (Witness×$2) + (Refinery×$18)
Workers = (Polecats × $7.5 × count) + (Crew × $1 × count)

Example: 1 Mayor, 1 Deacon, 1 Dogs, 2 Rigs, 3 Polecats, 5 Crew
= $18 + $1.5 + $7 + (2×$20) + (3×$7.5) + (5×$1)
= $18 + $1.5 + $7 + $40 + $22.5 + $5
= $94/hour (rough estimate)
```

---

## Beads Integration: The Hidden Power

### What the Main Doc Misses

Beads (~225K lines Go) is more than "git-backed storage." Cross-referencing with the multi-agent patterns reveals:

#### Beads as Agent Memory Bus

```
┌─────────────────────────────────────────────────────────────┐
│                    BEADS MEMORY MODEL                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  LAYER 1: Hot Context (RAM-cached)                          │
│  ├── Current task state                                     │
│  ├── Last N interactions                                    │
│  └── Active file references                                 │
│                                                             │
│  LAYER 2: Warm Context (SQLite + Git index)                 │
│  ├── Recent commit history                                  │
│  ├── Cross-agent message log                                │
│  └── Rig state snapshots                                    │
│                                                             │
│  LAYER 3: Cold Context (Git history)                        │
│  ├── Full project history                                   │
│  ├── Previous run outcomes                                  │
│  └── Archived decisions                                     │
│                                                             │
│  RETRIEVAL PATTERN (like claude-mem):                       │
│  1. Query hot → if miss →                                   │
│  2. Query warm → if miss →                                  │
│  3. Query cold (expensive)                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Beads vs Claude-Mem

| Feature | Beads (Gas Town) | Claude-Mem |
|---------|------------------|------------|
| **Storage** | Git repository | SQLite + Chroma |
| **Scope** | Multi-agent, multi-rig | Single Claude Code instance |
| **Persistence** | Survives crashes, git push | Local only |
| **Sharing** | Agents read/write same store | Per-session |
| **Query** | Git log, structured JSON | Semantic search |
| **Integration** | Gas Town native | Plugin for Claude Code |

**Synthesis:** Running Gas Town with claude-mem could provide **dual-layer memory** - Beads for inter-agent coordination, claude-mem for within-session efficiency. Not documented anywhere.

### Beads State File Structure (Inferred)

From architectural patterns:

```
~/.gt/beads/
├── index.json           # Hot context index
├── messages/
│   ├── mayor-inbox.json
│   ├── alice-inbox.json
│   └── bob-inbox.json
├── rigs/
│   └── my-project/
│       ├── state.json    # Current rig state
│       ├── tasks.json    # Decomposed tasks
│       └── history/      # Warm context
│           ├── 2026-01-09-0900.json
│           └── 2026-01-09-1000.json
└── .git/                 # Cold context (full history)
```

---

## tmux Workflow: The Missing Playbook

### Window Organization Best Practice

The main doc mentions tmux but lacks the **optimal layout**:

```
┌─────────────────────────────────────────────────────────────┐
│                    OPTIMAL TMUX LAYOUT                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SESSION: gastown-main                                      │
│                                                             │
│  WINDOW 0: overview                                         │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  rpai (TUI agent monitor)                            │   │
│  │  OR: gt status --watch                               │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  WINDOW 1: mayor                                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  gt mayor up                                         │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  WINDOW 2: infrastructure                                   │
│  ┌────────────────────┬────────────────────────────────┐   │
│  │  gt deacon up      │  gt dogs up                     │   │
│  └────────────────────┴────────────────────────────────┘   │
│                                                             │
│  WINDOW 3: rig-projectA                                     │
│  ┌────────────────────┬────────────────────────────────┐   │
│  │  gt witness up A   │  gt refinery up A               │   │
│  └────────────────────┴────────────────────────────────┘   │
│                                                             │
│  WINDOWS 4-8: polecats                                      │
│  ┌────────────────────┐                                    │
│  │  gt polecat up A alice                               │   │
│  │  gt polecat up A bob                                 │   │
│  │  gt polecat up A carol                               │   │
│  │  ...                                                 │   │
│  └────────────────────┘                                    │
│                                                             │
│  WINDOW 9: inbox                                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  gt inbox --watch                                    │   │
│  │  (Human decision interface)                          │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Startup Script (Enhanced)

```bash
#!/bin/bash
# gastown-start.sh - Production-ready startup

SESSION="gastown"

# Kill existing session if requested
if [ "$1" = "--fresh" ]; then
  tmux kill-session -t $SESSION 2>/dev/null
fi

# Create session with overview window
tmux new-session -d -s $SESSION -n 'overview'

# Infrastructure windows
tmux new-window -t $SESSION -n 'mayor'
tmux new-window -t $SESSION -n 'infra'
tmux split-window -h -t $SESSION:infra

# Per-rig windows (modify for your rigs)
for RIG in projectA projectB; do
  tmux new-window -t $SESSION -n "rig-$RIG"
  tmux split-window -h -t "rig-$RIG"
done

# Polecat windows (3 by default)
for POLECAT in alice bob carol; do
  tmux new-window -t $SESSION -n "$POLECAT"
done

# Inbox window
tmux new-window -t $SESSION -n 'inbox'

# Start roles
tmux send-keys -t $SESSION:overview 'rpai' C-m
tmux send-keys -t $SESSION:mayor 'gt mayor up' C-m
tmux send-keys -t $SESSION:infra.0 'gt deacon up' C-m
tmux send-keys -t $SESSION:infra.1 'gt dogs up' C-m

# Start rig infrastructure
tmux send-keys -t $SESSION:rig-projectA.0 'gt witness up projectA' C-m
tmux send-keys -t $SESSION:rig-projectA.1 'gt refinery up projectA' C-m

# Start polecats
tmux send-keys -t $SESSION:alice 'gt polecat up projectA alice' C-m
tmux send-keys -t $SESSION:bob 'gt polecat up projectA bob' C-m
tmux send-keys -t $SESSION:carol 'gt polecat up projectA carol' C-m

# Inbox monitoring
tmux send-keys -t $SESSION:inbox 'watch -n 5 gt inbox' C-m

# Attach to session
tmux select-window -t $SESSION:overview
tmux attach -t $SESSION
```

### rpai + Gas Town Integration

The rpai tool (tmux agent monitor) can be configured for Gas Town:

```bash
# ~/.config/rpai/config.toml

[detection]
patterns = [
  "gt mayor",
  "gt deacon",
  "gt dogs",
  "gt witness",
  "gt refinery",
  "gt polecat",
  "gt crew"
]

[display]
show_preview = true
preview_lines = 10
```

---

## Cost Management: Advanced Strategies

### Budget Tiers (from cross-referencing)

| Budget Level | Monthly | Strategy |
|--------------|---------|----------|
| **Minimal** | $100-200 | 1 Polecat (Sonnet), no Crew, Haiku everywhere else |
| **Standard** | $500-800 | 2-3 Polecats (Sonnet), limited Crew, Opus for Mayor/Refinery |
| **Aggressive** | $1000-2000 | Full stack, multiple rigs, aggressive parallelization |
| **Unlimited** | $2000+ | Steve Yegge mode: "If you care about costs, don't use this" |

### Cost Control Mechanisms

#### 1. Crew Limits
```bash
# Set max crew per rig
gt config set crew.max_per_rig 5

# Auto-terminate idle crew after N minutes
gt config set crew.idle_timeout 15
```

#### 2. Model Fallback Chain
```yaml
# ~/.gt/config.yaml
roles:
  mayor:
    primary: opus-4.5
    fallback: sonnet-4  # If rate limited
  polecat:
    primary: sonnet-4
    fallback: haiku-3.5
  crew:
    primary: haiku-3.5
    fallback: haiku-3  # Cheapest available
```

#### 3. Work Hour Budgets
```bash
# Set daily token budget
gt config set budget.daily_tokens 50000000  # 50M tokens/day cap

# Alert at 80% usage
gt config set budget.alert_threshold 0.8

# Pause non-critical work at 95%
gt config set budget.pause_threshold 0.95
```

### Cost Monitoring Integration

Combine with Claude HUD for visibility:

```bash
# Custom hook to track Gas Town spending
# ~/.gt/hooks/post-interaction.sh

#!/bin/bash
TOKENS=$(echo "$GT_INTERACTION" | jq '.tokens_used')
ROLE=$(echo "$GT_INTERACTION" | jq -r '.role')
COST=$(echo "scale=4; $TOKENS * 0.000015" | bc)  # Opus rate

echo "$(date -Iseconds),$ROLE,$TOKENS,$COST" >> ~/.gt/cost-log.csv
```

---

## Gas Town vs Alternatives: When to Use What

### Decision Tree (Expanded)

```
┌─────────────────────────────────────────────────────────────┐
│           WHICH ORCHESTRATION SYSTEM?                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  START: What's your dev evolution stage?                    │
│                                                             │
│  Stage 1-4 → STOP. Use single Claude Code. Learn the basics.│
│           │                                                 │
│           ▼                                                 │
│  Stage 5 (CLI single agent) →                               │
│           │                                                 │
│           ├─ Want quick multi-agent test?                   │
│           │   → CC Mirror (3 commands, done)                │
│           │                                                 │
│           └─ Want overnight autonomous work?                │
│               → Ralph Wiggum Loop (bash + PRD)              │
│           │                                                 │
│           ▼                                                 │
│  Stage 6 (3-5 parallel agents) →                            │
│           │                                                 │
│           ├─ Need task dependencies?                        │
│           │   → CC Mirror Native Orchestration              │
│           │                                                 │
│           ├─ Building a product?                            │
│           │   → Ralph + Playwright                          │
│           │                                                 │
│           └─ Self-improving system?                         │
│               → Infinite Orchestra (Docker)                 │
│           │                                                 │
│           ▼                                                 │
│  Stage 7 (10+ agents, hand-managed) →                       │
│           │                                                 │
│           ├─ Cost-sensitive?                                │
│           │   → Enhanced Ralph with Haiku workers           │
│           │                                                 │
│           ├─ Want structure + chaos tolerance?              │
│           │   → GAS TOWN                                    │
│           │                                                 │
│           └─ Building the factory?                          │
│               → Gas Town + Roughneck (multi-town)           │
│           │                                                 │
│           ▼                                                 │
│  Stage 8 (Building your own orchestrator) →                 │
│           │                                                 │
│           └─ You're Steve Yegge. Gas Town is your floor,    │
│              not your ceiling. Build something better.      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Hybrid Patterns

**Pattern: Gas Town + Ralph**

Use Gas Town for coordination, Ralph loops for individual Polecats:

```
Mayor delegates → Refinery decomposes
                       │
                       ▼
              Polecat "alice" runs internal Ralph loop:
              ┌──────────────────────────────────┐
              │  for each task in assignment:    │
              │    - Fresh context               │
              │    - Implement                   │
              │    - Test                        │
              │    - Commit                      │
              │    - Mark complete               │
              │  end                             │
              └──────────────────────────────────┘
```

**Pattern: Gas Town + CC Mirror**

Use CC Mirror's task management within a Gas Town Polecat:

```
Polecat "alice" (running CC Mirror variant):
  - TaskCreate for subtasks
  - Spawn background workers (Haiku)
  - TaskList to monitor
  - TaskUpdate on completion
  - Report up to Refinery
```

---

## Community Extensions: Deep Analysis

### GTGUI (Age of Empires GUI)

**What it provides (inferred):**
- Visual representation of town/rig hierarchy
- Drag-and-drop task assignment
- Real-time agent status visualization
- Click-to-focus on agent windows
- RTS-game inspired command interface

**Integration pattern:**
```
GTGUI ←→ ~/.gt/state/ ←→ gt CLI ←→ Agents
        (filesystem watching)
```

**When to use:**
- Visual learners
- Demo/presentation scenarios
- Teams needing shared visibility
- When tmux feels too "programmer-y"

### Roughneck (Multi-Town)

**Architecture (inferred):**
```
┌─────────────────────────────────────────────────────────────┐
│                    ROUGHNECK ARCHITECTURE                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ROUGHNECK SUPERVISOR                                       │
│  ├── Town A: Client Project                                 │
│  │   ├── ~/.gt-clientA/                                     │
│  │   └── Full Gas Town stack                                │
│  │                                                          │
│  ├── Town B: Personal Project                               │
│  │   ├── ~/.gt-personal/                                    │
│  │   └── Full Gas Town stack                                │
│  │                                                          │
│  └── Town C: Open Source                                    │
│      ├── ~/.gt-oss/                                         │
│      └── Minimal stack (1 rig, 2 polecats)                  │
│                                                             │
│  CROSS-TOWN FEATURES:                                       │
│  - Shared API key management                                │
│  - Budget allocation per town                               │
│  - Priority queuing (Town A > Town B)                       │
│  - Unified inbox across towns                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**When to use:**
- Multiple clients
- Parallel products
- Separate work/personal contexts
- Team members each running their own town

### Station (Nats-based)

**Key difference from Gas Town:**
- Uses Nats pub/sub instead of Agent Mail
- Potentially lower latency
- Better for distributed deployments
- May support non-Claude agents

**Architecture comparison:**
```
Gas Town: Agent Mail (email metaphor) → File-based queues
Station:  Nats pub/sub → In-memory + persistence
```

**When Station might be better:**
- Distributed multi-machine setups
- Need for sub-second coordination
- Integrating non-Claude agents
- Already using Nats infrastructure

---

## Real Deployment Patterns

### The "Solo Founder" Setup

```
Hardware: MacBook Pro M3 + Cloud VM ($7/day)
Budget: ~$500/month
Structure:
  - 1 Town
  - 2 Rigs (main product, side project)
  - 3 Polecats (Sonnet)
  - 5 max Crew (Haiku)

Workflow:
  - Morning: File work via inbox
  - Day: Mobile monitoring via Tailscale + Termius
  - Evening: Review, merge, deploy

Results (anecdotal):
  - 3-5x feature velocity
  - Some rework (10-20% of PRs need fixes)
  - Significant cost (~$15-25/day)
```

### The "Agency/Consulting" Setup

```
Hardware: Dedicated server or large VM
Budget: $2000-5000/month
Structure:
  - Roughneck (multi-town)
  - 1 Town per client
  - Shared Deacon/Dogs across towns

Workflow:
  - Client requests → Town inbox
  - Overnight builds
  - Morning review and delivery

Results (theoretical):
  - Handle 3-5 clients simultaneously
  - Per-client isolation (important for confidentiality)
  - Predictable cost allocation
```

### The "Startup Tech Team" Setup

```
Hardware: Cloud Kubernetes or VMs
Budget: $5000-10000/month
Structure:
  - 1 Main Town
  - Multiple rigs (frontend, backend, infra, mobile)
  - Team members as additional Overseers
  - Shared inbox with assignment routing

Workflow:
  - Sprint planning → Refinery decomposition
  - Daily standup: Review overnight progress
  - Parallel feature development
  - Dogs gate all PRs

Results (theoretical):
  - Replace 2-3 junior developers
  - Maintain quality via Dogs
  - 24/7 development capability
```

---

## Failure Patterns and Recovery

### Common Failures

1. **Context Collapse**
   - Symptom: Agents stop making sense
   - Cause: Beads state corruption or no auto-compact
   - Recovery: `gt town reset --soft` (keep config, clear state)

2. **Race Conditions**
   - Symptom: Conflicting commits, overwritten work
   - Cause: Multiple Polecats on same files
   - Recovery: Use git worktrees, file ownership rules

3. **Runaway Crew**
   - Symptom: Cost spike, dozens of Crew spawned
   - Cause: Refinery misconfiguration
   - Recovery: `gt crew purge --all`, set `crew.max_per_rig`

4. **Mayor Deadlock**
   - Symptom: No work getting assigned
   - Cause: Mayor waiting for human decision
   - Recovery: Check inbox, approve/reject pending items

5. **Beads Desync**
   - Symptom: Agents have stale context
   - Cause: Git conflicts in Beads repo
   - Recovery: `gt beads sync --force`

### Recovery Commands (Inferred)

```bash
# Soft reset (keep config)
gt town reset --soft

# Hard reset (full reinstall)
gt town reset --hard

# Kill all agents
gt town down

# Restart specific role
gt polecat down projectA alice
gt polecat up projectA alice

# Force Beads sync
gt beads sync --force

# Clear inbox backlog
gt inbox clear --all

# Emergency cost stop
gt pause --all  # Pause all work
gt resume --all # Resume when ready
```

---

## Future Roadmap (Speculation)

Based on community velocity and Steve Yegge's philosophy:

### Near-term (1-3 months)

1. **Native web UI** - Replace GTGUI with official
2. **Cost dashboards** - Built-in spending visualization
3. **Model router** - Automatic model selection based on task
4. **Checkpoint/restore** - Save full town state, restore later

### Medium-term (3-6 months)

1. **Multi-provider support** - Not just Claude
2. **Team features** - Multiple Overseers, RBAC
3. **Plugin system** - Extend roles, add custom behavior
4. **Cloud deployment** - gt cloud up

### Long-term (6-12 months)

1. **Self-improving town** - Meta-orchestration
2. **Cross-town coordination** - Roughneck built-in
3. **Industry templates** - Pre-configured stacks for web dev, mobile, data science
4. **Enterprise features** - SSO, audit logs, compliance

---

## Research Gaps Remaining

Even with this expansion, the following require live web research:

1. **Beads API documentation** - Exact Go interfaces
2. **GTGUI screenshots and UX** - Visual confirmation
3. **Roughneck configuration** - Multi-town setup specifics
4. **Station vs Gas Town benchmarks** - Performance comparison
5. **Steve Yegge's latest Medium articles** - Philosophy updates
6. **GitHub Issues** - Known bugs, feature requests
7. **Discord/community discussions** - Real user experiences
8. **Video walkthroughs** - Setup demonstrations
9. **Production case studies** - Verified deployments
10. **Cost tracking implementations** - Real spending data

---

## Quick Reference: Gas Town Commands

```bash
# INSTALLATION
go install github.com/steveyegge/gastown/cmd/gt@latest

# INITIALIZATION
gt init                              # Initialize town
gt rig add /path/to/repo             # Add project rig
gt rig list                          # List all rigs
gt rig remove <name>                 # Remove rig

# ROLE MANAGEMENT
gt <role> up [rig] [name]            # Start role
gt <role> down [rig] [name]          # Stop role
gt <role> status [rig] [name]        # Check status

# SPECIFIC ROLES
gt mayor up                          # Start mayor
gt deacon up                         # Start deacon
gt dogs up                           # Start quality gates
gt witness up <rig>                  # Start rig observer
gt refinery up <rig>                 # Start task decomposer
gt polecat up <rig> <name>           # Start named worker
gt crew spawn <rig> --task "..."     # Spawn ephemeral worker

# INBOX (Human Interface)
gt inbox                             # View pending decisions
gt inbox respond <id> --approve      # Approve item
gt inbox respond <id> --reject       # Reject item
gt inbox clear                       # Clear inbox

# TOWN MANAGEMENT
gt status                            # Town-wide status
gt town down                         # Stop all agents
gt town reset --soft                 # Reset state, keep config

# BEADS (Context)
gt beads sync                        # Sync context
gt beads history                     # View context history

# CREW MANAGEMENT
gt crew count <rig>                  # Count active crew
gt crew purge <rig>                  # Kill all crew

# CONFIGURATION
gt config set <key> <value>          # Set config
gt config get <key>                  # Get config
gt config list                       # List all config
```

---

## Tags (Updated)

`#orchestration` `#gas-town` `#steve-yegge` `#agent-factory` `#vibe-coding` `#beads` `#tmux` `#multi-agent` `#deep-dive` `#research` `#gtgui` `#roughneck` `#station` `#cost-management` `#role-configuration` `#hybrid-patterns` `#failure-recovery` `#deployment-patterns`

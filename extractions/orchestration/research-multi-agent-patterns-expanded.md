# Multi-Agent Patterns for Claude Code: Exhaustive Research

---
## D-FINAL Connection

**This source contributed to:**
- D-FINAL-architecture.md: Sections 2.1-2.8, 4, 6 (foundational multi-agent patterns, git worktrees, subagent coordination, conflict resolution)

**Coverage in D-FINAL:** 85%
**High-value unique content:** This is a comprehensive synthesis; most content incorporated. Alternative AI tool patterns (Section 12) less detailed in D-FINAL

**Journey references:**
- synthesis/mastery-multi-agent.md (canonical reference)
- synthesis/taxonomy-orchestration.md
- html-site/patterns/orchestration/multi-agent-patterns.html

**Last enhanced:** 2026-01-18 (Phase 2B)

---

This document consolidates all known multi-agent patterns, architectures, and best practices for Claude Code, synthesized from community innovations, production implementations, and Anthropic's official guidance.

---

## Table of Contents

1. [Foundational Patterns](#1-foundational-patterns)
2. [Parallel Agent Strategies](#2-parallel-agent-strategies)
3. [Git Worktrees for Isolation](#3-git-worktrees-for-isolation)
4. [Subagent Coordination Patterns](#4-subagent-coordination-patterns)
5. [Task Tool Usage Patterns](#5-task-tool-usage-patterns)
6. [Agent-to-Agent Handoffs](#6-agent-to-agent-handoffs)
7. [Architecture Patterns](#7-architecture-patterns)
8. [Agent Specialization](#8-agent-specialization)
9. [Conflict Resolution](#9-conflict-resolution)
10. [Monitoring and Observability](#10-monitoring-and-observability)
11. [Production Multi-Agent Setups](#11-production-multi-agent-setups)
12. [Alternative AI Tool Patterns](#12-alternative-ai-tool-patterns)
13. [Anthropic Official Guidance](#13-anthropic-official-guidance)

---

## 1. Foundational Patterns

### 1.1 The Personal Panopticon (Molly Cantillon)

**Source:** [@mollycantillon](https://x.com/mollycantillon/status/2008918474006122936)
**Type:** Twitter Thread
**Engagement:** 2.4K likes, 418K views, 3.8K bookmarks

#### Core Content

Run Claude Code as a swarm of 8 parallel isolated instances, each owning a life domain, to achieve "self-legibility" and reverse the data asymmetry institutions have over you.

#### Architecture

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

#### Implementation Details

- **Isolation:** Each instance operates independently, no cross-contamination
- **Subagents:** Spawn short-lived agents for specific tasks
- **Handoffs:** Exchange context through explicit file-based handoffs
- **Filesystem:** Read/write to their directory as persistent memory
- **GUI fallback:** When no API exists, inject mouse/keystroke events to control desktop apps directly

```bash
# Keep system awake during long runs
caffeinate -i

# Simple alias for natural language CLI
alias c='claude'

# Cron jobs for scheduled runs
0 6 * * * cd ~/trades && claude "Generate morning brief" > brief.md
```

#### Unique Value

Frames multi-agent as a personal surveillance reversal - you surveilling yourself across all life domains rather than institutions surveilling you.

#### Actionability: 🔴 Deep Dive

---

### 1.2 The Ralph Wiggum Loop

**Source:** [Geoffrey Huntley](https://ghuntley.com/ralph/), popularized by [@mattpocockuk](https://x.com/mattpocockuk/status/2007924876548637089), [@ryancarson](https://x.com/ryancarson/status/2008950489904472501)
**Type:** Blog/GitHub/Twitter
**Engagement:** 2440+ likes, 193K+ views

#### Core Content

A bash loop that runs Claude Code repeatedly with fresh context until a completion condition is met. Each iteration gets a clean slate but has access to git history and file-based memory.

#### Implementation Details

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

#### PRD Structure

```json
{
  "delete_video_shows_confirmation": {
    "description": "Delete video shows confirmation dialog before deleting",
    "passes": true
  },
  "beats_display": {
    "description": "Beats display as three orange ellipses dots below clip",
    "details": "Add beat to clip, verify 3 orange dots appear",
    "passes": false
  }
}
```

#### Key Principles

1. **Fresh context per iteration** - avoids context rot
2. **External memory** - git history + progress.txt
3. **Verifiable completion** - tests must pass
4. **Small task sizing** - each story completable in one context window

#### Unique Value

Enables overnight feature shipping with autonomous dev pipelines.

#### Actionability: 🟡 Medium Lift

---

### 1.3 The Infinite Orchestra (0xSero)

**Source:** [@0xSero](https://x.com/0xSero/status/2007860398863564960)
**Type:** GitHub/Twitter
**Repo:** github.com/0xSero/orchestra

#### Core Content

A self-improving orchestrator that runs 24/7 in Docker, with specialized worker profiles.

#### Implementation Details

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

#### Architecture

```
Central Orchestrator
  └─ Monitors idle + activity
  └─ Triggers self-improvement
         │
         ▼
Specialized Workers
  ├─ Coder → Implementation
  ├─ Architect → Design decisions
  ├─ Research → Find solutions
  └─ Memory → Persistent context
         │
         ▼
Docker Container
  └─ Isolation from host
  └─ 24/7 operation
  └─ Resource limits
```

#### Caveats

- Sequential only (no parallelization yet)
- Conflicts with 5+ agents with 5 subagents each
- No checkpointing - crashes lose progress

#### Actionability: 🟡 Medium Lift

---

## 2. Parallel Agent Strategies

### 2.1 Domain-Isolated Parallel Instances

From the Panopticon pattern: run separate Claude Code processes in different directories, each specializing in a domain.

```bash
# Terminal 1
cd ~/project/frontend && claude

# Terminal 2
cd ~/project/backend && claude

# Terminal 3
cd ~/project/docs && claude
```

**Key insight:** Filesystem isolation prevents context pollution between agents.

### 2.2 Branch-Based Parallel Work

From Boris Cherny's workflow philosophy:

```bash
# Each agent works on its own branch
git checkout -b feature-auth
claude "Implement authentication"

# In another terminal
git checkout -b feature-payments
claude "Implement payment processing"
```

**Merge strategy:** Human reviews and resolves conflicts during PR.

### 2.3 Container-Isolated Parallelism (AI-Maestro Pattern)

For heavy parallel work, run Claude Code instances in isolated Docker containers:

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

## 3. Git Worktrees for Isolation

### 3.1 Basic Worktree Setup

Git worktrees create isolated working directories sharing the same repo:

```bash
# Create worktree for parallel agent
git worktree add ../feature-auth feature-auth

# Agent 1 works in main checkout
cd ~/project && claude

# Agent 2 works in worktree
cd ~/feature-auth && claude
```

### 3.2 Multi-Worktree Architecture

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

### 3.3 Automation Script

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

### 3.4 Worktree + Ralph Combination

From @0xSero's mention:
> "I should add git worktrees as a feature [for parallelization]"

Combining Ralph loops with worktrees enables parallel feature development:

```bash
# Spawn parallel Ralph loops in worktrees
for feature in auth payments notifications; do
  git worktree add ../wt-$feature $feature-branch
  (cd ../wt-$feature && ./ralph.sh 20) &
done
wait
```

---

## 4. Subagent Coordination Patterns

### 4.1 Hub-and-Spoke Model (CC Mirror)

**Source:** [@nummanali](https://x.com/nummanali/status/2007849823756575084)

The orchestrator delegates to specialized workers:

```
╔═══════════════════════════════════════════════════════════════╗
║  YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS.              ║
║  YOU DO NOT EXPLORE CODEBASES.                                ║
║  You are the CONDUCTOR. Your agents play the instruments.     ║
╚═══════════════════════════════════════════════════════════════╝
```

#### Tool Ownership

**Orchestrator uses directly:**
- `Read` (references, guides - 1-2 files max)
- `TaskCreate`, `TaskUpdate`, `TaskGet`, `TaskList`
- `AskUserQuestion`
- `Task` (to spawn workers)

**Workers use directly:**
- `Read`, `Write`, `Edit`, `Bash`
- `Glob`, `Grep`, `WebFetch`, `WebSearch`, `LSP`
- **CAN'T:** Spawn sub-agents or manage task graph

### 4.2 Worker Preamble Template

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

### 4.3 Model Selection for Subagents

| Model | Use Case |
|-------|----------|
| **Haiku** | Errand runner: fetch files, grep, simple lookups. Spawn 5-10 in parallel |
| **Sonnet** | Capable worker: structured implementation, following patterns, test gen |
| **Opus** | Complex reasoning, architecture decisions, ambiguous tasks |

### 4.4 Spawning Example

```python
Task(
  subagent_type="general-purpose",
  description="Implement auth routes",
  prompt="""CONTEXT: You are a WORKER agent...
TASK:
Create src/routes/auth.ts with:
- POST /login - verify credentials, return JWT
- POST /signup - create user, hash password
- Use bcrypt for hashing, jsonwebtoken for tokens
- Follow existing patterns in src/routes/
""",
  run_in_background=True
)
```

---

## 5. Task Tool Usage Patterns

### 5.1 Native Task Management (CC Mirror Enabled)

**Source:** [@nummanali](https://x.com/nummanali/status/2007768692659015877)

```
TaskCreate  → Create with subject, description, acceptance criteria
TaskList    → Filter: status='open', no owner, not blocked
TaskGet     → Full context: description, comments, dependencies
TaskUpdate  → Claim (set owner), add comments, resolve, link references
```

#### Dependency Management

```
addBlocks     → This task blocks another
addBlockedBy  → This task is blocked by another
```

#### Demo Output

```
Agent #1 completed! It chose FastAPI (Python)

Tasks:
☑ #1 Design API architecture
☐ #2 Create project structure
☐ #3 Implement data models
🟠 #4 Implement REST API endpoints (blocked by #3)
🟠 #5 Write integration tests (blocked by #4)
🟠 #6 Create API documentation (blocked by #4)
```

### 5.2 Task vs TodoWrite

| Feature | TaskCreate | TodoWrite |
|---------|------------|-----------|
| Persistence | Survives sessions | Ephemeral |
| Owners | Agent IDs | None |
| Dependencies | blocks/blockedBy | None |
| Team visibility | Yes | No |

**Use TodoWrite for:** Single-session, personal, linear tasks

### 5.3 Parallel Task Executor Pattern

From @LLMJunky:

```markdown
# Parallel Task Executor

You are a task orchestration agent.
Parse plan file, extract tasks, execute in parallel using subagents.

## Execution Process
1. Read plan file (extract phase tasks)
2. For each task: Launch background subagent
3. Prompt template: "You are a focused task agent..."
4. Monitor for completion
5. Report all results
```

---

## 6. Agent-to-Agent Handoffs

### 6.1 File-Based Handoffs (Panopticon Pattern)

Agents communicate through the filesystem:

```
~/shared/
  ├── handoff-agent1-to-agent2.json
  ├── handoff-agent2-to-agent3.json
  └── status.json
```

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

### 6.2 Git-Based Handoffs (Ralph Pattern)

Progress persists in files, git history provides context:

- **progress.txt** - Append-only learnings log
- **prd.json** - Task status with passes: true/false
- **Git commits** - Each iteration commits, future agents see history

```bash
# Future agent can understand what happened
git log --oneline
git diff HEAD~5
```

### 6.3 Docker Volume Handoffs (AI-Maestro)

```
Agent 1 writes → /shared/agent1-output.json
Agent 2 reads  ← /shared/agent1-output.json
```

Not real-time, but lightweight and requires no external dependencies.

### 6.4 MCP Agent Mail

**Source:** Steve Yegge's Gas Town
**Repo:** github.com/Dicklesworthstone/mcp_agent_mail

Agents collaborate via email-like interfaces:
- No training needed
- Natural "agent village" behavior
- Async by default

---

## 7. Architecture Patterns

### 7.1 Hub-and-Spoke

**Description:** Central orchestrator delegates to specialized workers.

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

**Best for:**
- Clear task decomposition
- Predictable workflow
- Centralized monitoring

**Examples:** CC Mirror, Gas Town (Deacon role)

### 7.2 Peer-to-Peer

**Description:** Agents communicate directly without central coordinator.

```
┌───────┐     ┌───────┐
│Agent 1│◄───►│Agent 2│
└───────┘     └───────┘
    ▲             ▲
    │             │
    └──────┬──────┘
           │
           ▼
      ┌───────┐
      │Agent 3│
      └───────┘
```

**Best for:**
- Emergent collaboration
- Flexible workflows
- Resilience (no single point of failure)

**Challenges:** Harder to monitor, potential for deadlocks

### 7.3 Factory Pattern (Gas Town)

**Source:** [@steve_yegge](https://x.com/steve_yegge/status/2008002562650505233)

Not just agents, but an **agent factory**:

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

**Philosophy:**
> "You just make up features, design them, file the implementation plans, and sling work around to your polecats and crew."

### 7.4 Kanban Loop (Ralph)

**Description:** Single agent picks from a board, completes task, returns.

```
┌─────────────────────────────┐
│  Pick task from board       │
│         ↓                   │
│  Complete task              │
│         ↓                   │
│  Back to board              │
│         ↓                   │
│  All done? → Exit           │
│  Not done? → Loop           │
└─────────────────────────────┘
```

**Key shift:** Focus on WHAT it should do at the end, not HOW to get there.

---

## 8. Agent Specialization

### 8.1 Common Specializations

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

### 8.2 Adversarial Speccing Pattern

Use two subagents in debate for complex features:

1. **Architect** subagent proposes design
2. **Critic** subagent challenges from specific persona

**Example Critic Personas:**
- DHH (simplicity, convention over configuration)
- Security engineer (attack vectors, data protection)
- Performance engineer (latency, resource usage)
- UX advocate (user experience implications)

**Process:**
1. Architect proposes
2. Critic finds flaws
3. Architect addresses
4. Iterate until critic approves

### 8.3 Domain Reference Loading

From CC Mirror skill:

| Task Type | Reference |
|-----------|-----------|
| Feature, bug, refactor | software-development.md |
| PR review, security | code-review.md |
| Codebase exploration | research.md |
| Test generation | testing.md |
| Docs, READMEs | documentation.md |
| CI/CD, deployment | devops.md |
| Data analysis | data-analysis.md |
| Project planning | project-management.md |

---

## 9. Conflict Resolution

### 9.1 Branch Isolation (Primary Strategy)

> "Parallel agents cause merge conflicts—use serial" - Matt Pocock

**Best practice:** Each agent works on its own branch. Human merges.

### 9.2 File-Level Locking

For agents working in the same directory:

```bash
# Agent acquires lock before editing
if [ ! -f "$FILE.lock" ]; then
  touch "$FILE.lock"
  # do work
  rm "$FILE.lock"
else
  echo "File locked, waiting..."
fi
```

### 9.3 Directory Ownership

Each agent owns specific directories:

```
agent-frontend/ → Only frontend agent touches
agent-backend/  → Only backend agent touches
shared/         → Read-only for all, write via handoff protocol
```

### 9.4 Transactional File Operations

Agents write to temp files, then atomic rename:

```bash
# Safe write pattern
echo "content" > file.tmp
mv file.tmp file.actual
```

### 9.5 Git-Based Conflict Detection

```bash
# Before starting work, check for conflicts
git fetch origin
if git merge-base --is-ancestor HEAD origin/main; then
  echo "Safe to proceed"
else
  echo "Conflicts detected, need rebase"
fi
```

---

## 10. Monitoring and Observability

### 10.1 Claude HUD Plugin

**Source:** [@jarrodwatts](https://x.com/jarrodwatts/status/2007579355762045121)
**Repo:** github.com/jarrodwatts/claude-hud

Shows:
- Context remaining (color-coded bar)
- What tools are executing
- Which subagents are running
- To-do list progress

```bash
/plugin marketplace add jarrodwatts/claude-hud
/plugin install claude-hud
```

Sample output:
```
[Opus 4.5] ████████░░ 35% | 1 MCPs | ⏳ 1m
✓ Read x2 | ✓ WebFetch x1 | ✓ Skill x1 | ✓ Edit x1
```

### 10.2 rpai - tmux Multi-Agent Manager

**Source:** [@radoslav11](https://x.com/alexocheema/status/2008161206541123769)

```bash
cargo install rpai
rpai  # Run in any tmux session
```

Features:
- Scans tmux panes for running AI agents
- Displays TUI with agent list, status, output previews
- Jump to any agent with selection
- Monitor all agents from one view

### 10.3 CC Mirror Agent Monitoring

Built-in CLI for monitoring parallel agents:

```
Background Tasks: 1 active

Async agents (6):
> Implement data models (running)
  Create API documentation (completed)
  Write integration tests (completed)
  Implement REST API endpoints (completed)
  Create project structure (completed)
  Design API architecture (completed)
```

Navigate with:
- ↑/↓ select agent
- Enter view details
- k kill agent
- Esc exit

### 10.4 Gas Town Monitoring Roles

**Deacon:** Monitoring and handshakes between agents
**Dogs:** Quality gates and watchdogs
**Witness:** Per-rig observer

### 10.5 Context Auto-Compact

From @nummanali:
> "This is using a new beta feature for Claude Code. Just make sure auto compact is on."

Critical for preventing context collapse in long-running orchestration.

---

## 11. Production Multi-Agent Setups

### 11.1 Gas Town Production Setup

**Source:** Steve Yegge
**Warnings:**
- Code is 3 weeks old
- 100% vibe-coded
- Expensive (multiple Claude accounts)
- Requires tmux
- "If you have any doubt whatsoever, then you can't use it"

**Requirements:**
- Stage 7+ in dev evolution (10+ agents, hand-managed)
- Comfort with chaos
- Significant budget

### 11.2 CC Mirror + GLM-4.7

> "GLM handles the multi-agent coordination very well"

Production-ready for:
- Generic demos
- Standard web app development
- 80% of use cases with zero effort

**Limitations per @nelsonpadil_:**
- Production needs: state control, business logic, custom observability, evals

### 11.3 Boris Cherny's Multi-Session Workflow

Claude Code creator's approach:
- Run 5-10 parallel sessions across terminal, web, and mobile
- Use Opus 4.5 with thinking mode enabled
- Shared CLAUDE.md in Git for team consistency
- Leverage slash commands, subagents, and hooks

### 11.4 Real-World Shipping

From Molly Cantillon's setup:
- Customer support: Fully autonomous department
- A/B testing: Auto-generates winning copy
- Email: Inbox zero with auto-drafted replies
- Finances: Overnight brokerage scraping → morning briefs
- Product: Cron pulls Amplitude → cross-refs GitHub → surfaces what needs building

---

## 12. Alternative AI Tool Patterns

### 12.1 Aider Multi-File Editing

**Repo:** github.com/paul-gauthier/aider

Aider's approach to multi-agent patterns:
- **Architect mode:** High-level planning before implementation
- **Editor mode:** Focused code changes
- **Git-aware:** Automatic commits with meaningful messages

**Transferable to Claude Code:**
- Separate planning from implementation
- Auto-commit each logical change
- Use git history as memory

### 12.2 OpenCode / Open Orchestra

**Source:** 0xSero's Orchestra runs on OpenCode

Key patterns:
- Worker profiles defined in JSON
- Self-improvement loops
- Docker containerization for isolation

### 12.3 Cursor Parallel Agents

From @agrimsingh's Cursor port:
> "PRD approach has been great for me. Here's a port using cursor cli"

- Let it make mistakes
- Tune like a guitar
- Context is memory

### 12.4 Marathon Ralph

**Repo:** github.com/gruckion/marathon-ralph
**Source:** @stephen_rayner

Build entire apps with unit and E2E tests following SDLC.

### 12.5 Dr. Ralph

**Source:** @MikeEndale

Multi-phase version with confidence thresholds (80%+ before advancing).

### 12.6 Lisa

**Repo:** github.com/Arakiss/lisa
**Source:** @petruarakiss

Fork with logging + progress tracking.

### 12.7 Zeroshot

**Repo:** github.com/covibes/zeroshot/
**Source:** @Eivind1384955

"Next gen version" of Ralph loops.

---

## 13. Anthropic Official Guidance

### 13.1 Claude Code's Native Task Tool

From the GitHub README feature flags:
- `copilot_swe_agent_use_subagents` - SWE agent support for subagents
- `copilot_agent_task_list_v2` - Task list management (version 2)
- Various task button integrations

### 13.2 Official Ralph Wiggum Plugin

**Repo:** github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum

Commands:
```bash
/ralph-loop "prompt" --completion-promise "COMPLETE" --max-iterations 10
```

Features:
- Stop hook for loop persistence
- Completion promise detection
- Max iteration safety

### 13.3 Subagent Best Practices

From Boris Cherny's philosophy:
- **Subagents have isolated context** - don't pollute main conversation
- **Use for multi-step reasoning workflows**
- **Use for tasks requiring specialized context**
- **Use for parallel processing**
- **Use for adversarial validation**

### 13.4 Verification Loops

Anthropic best practices:
> "Claude's tendency to mark features complete without proper testing... did much better at verifying end-to-end once explicitly prompted to use browser automation tools"

**Always include feedback loops:**
1. Type checking: `npm run typecheck`
2. Unit tests: `npm test`
3. CI green: Every commit must pass
4. Browser automation: Playwright MCP for UI verification

### 13.5 PRD Format

Anthropic's recommended approach:
- JSON file of user stories with `passes: false/true`
- Scopes work effectively
- Uses small part of context window
- Avoids "context rot"

---

## Summary: Pattern Selection Guide

| Scenario | Recommended Pattern |
|----------|---------------------|
| **Single feature, overnight** | Ralph Loop |
| **Multiple life domains** | Panopticon (isolated directories) |
| **Team project, parallel features** | Git worktrees + branch discipline |
| **Complex architecture work** | Hub-and-spoke with specialized workers |
| **Production app with dependencies** | CC Mirror native orchestration |
| **Massive scale (10+ agents)** | Gas Town factory |
| **Content/marketing** | Ralph Wiggum Marketer |
| **Self-improving system** | Infinite Orchestra |

---

## Quick Reference: Commands

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

# Claude Mem (persistent memory)
/plugin install claude-mem

# Gas Town
go install github.com/steveyegge/gastown/cmd/gt@latest
```

---

## Resources

### Official
- Anthropic Claude Code: github.com/anthropics/claude-code
- Official Ralph Plugin: github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum

### Community Tools
- CC Mirror: github.com/numman-ali/cc-mirror
- Gas Town: github.com/steveyegge/gastown
- Orchestra: github.com/0xSero/orchestra
- Ralph implementations: github.com/snarktank/ralph
- Claude HUD: github.com/jarrodwatts/claude-hud
- Claude Mem: github.com/thedotmack/claude-mem
- rpai: cargo install rpai

### Extensions
- Marathon Ralph: github.com/gruckion/marathon-ralph
- Lisa: github.com/Arakiss/lisa
- Zeroshot: github.com/covibes/zeroshot
- Gas Town GUI: github.com/TRIBE-INC/gtgui
- Roughneck (multi Gas Town): github.com/mjtechguy/roughneck
- Station (Nats-based): github.com/cloudshipai/station

---

## Tags

`#multi-agent` `#orchestration` `#parallel-agents` `#git-worktrees` `#subagents` `#task-tool` `#handoffs` `#hub-and-spoke` `#conflict-resolution` `#monitoring` `#production` `#ralph-loop` `#gas-town` `#cc-mirror` `#panopticon`

---

## Deep Dive Expansion

This section expands on topics from the main document with deeper technical detail, additional patterns, and advanced implementation strategies.

---

### 14. Advanced Git Worktree Patterns

#### 14.1 Worktree Lifecycle Management

The basic worktree setup in Section 3 covers creation but misses lifecycle management critical for long-running multi-agent systems.

```bash
#!/bin/bash
# worktree-manager.sh - Full lifecycle management

WORKTREE_BASE="../worktrees"
MAX_WORKTREES=10
STALE_HOURS=24

# Create with automatic cleanup tracking
create_worktree() {
  local branch=$1
  local worktree_path="$WORKTREE_BASE/$branch"

  # Check if we're at capacity
  local count=$(git worktree list --porcelain | grep -c "worktree")
  if [ $count -ge $MAX_WORKTREES ]; then
    echo "At capacity ($MAX_WORKTREES worktrees). Cleaning stale..."
    cleanup_stale_worktrees
  fi

  git worktree add "$worktree_path" -b "$branch" 2>/dev/null || \
    git worktree add "$worktree_path" "$branch"

  # Track creation time
  date +%s > "$worktree_path/.worktree-created"
  echo "$worktree_path"
}

# Remove stale worktrees
cleanup_stale_worktrees() {
  local cutoff=$(($(date +%s) - STALE_HOURS * 3600))

  for wt in $(git worktree list --porcelain | grep "^worktree" | cut -d' ' -f2); do
    local created_file="$wt/.worktree-created"
    if [ -f "$created_file" ]; then
      local created=$(cat "$created_file")
      if [ $created -lt $cutoff ]; then
        echo "Removing stale worktree: $wt"
        git worktree remove --force "$wt"
      fi
    fi
  done
}

# Atomic merge back to main
merge_worktree() {
  local branch=$1
  local worktree_path="$WORKTREE_BASE/$branch"

  cd "$worktree_path" || exit 1

  # Ensure clean state
  if [ -n "$(git status --porcelain)" ]; then
    echo "Uncommitted changes in $branch"
    return 1
  fi

  # Rebase on latest main
  git fetch origin main
  git rebase origin/main || {
    echo "Rebase conflict in $branch - manual resolution needed"
    return 1
  }

  # Return to main and merge
  cd - > /dev/null
  git checkout main
  git merge --ff-only "$branch"

  # Cleanup
  git worktree remove "$worktree_path"
  git branch -d "$branch"
}
```

#### 14.2 Worktree-Aware Agent Spawning

Enhance agent spawning with worktree isolation and automatic resource allocation:

```bash
#!/bin/bash
# spawn-isolated-agent.sh

spawn_agent() {
  local task_id=$1
  local prompt=$2
  local model=${3:-"sonnet"}

  # Create isolated worktree
  local branch="agent-$task_id-$(date +%s)"
  local wt_path=$(create_worktree "$branch")

  # Set up agent environment
  export CLAUDE_AGENT_ID="$task_id"
  export CLAUDE_WORKTREE="$wt_path"

  # Create agent-specific CLAUDE.local.md
  cat > "$wt_path/CLAUDE.local.md" << EOF
# Agent $task_id Context

## Working Directory
This is an isolated worktree for agent $task_id.
Branch: $branch

## Constraints
- Only modify files in this worktree
- Commit frequently with descriptive messages
- Do not push directly - orchestrator handles merge

## Task
$prompt
EOF

  # Launch agent with output capture
  (
    cd "$wt_path"
    claude --model "$model" "$prompt" 2>&1 | tee ".agent-output.log"
    echo $? > ".agent-exit-code"
  ) &

  echo $!  # Return PID for monitoring
}
```

#### 14.3 Worktree Synchronization Patterns

For agents that need shared state while maintaining isolation:

```
Main Repo
  └── .shared/           # Symlinked into all worktrees
      ├── config.json    # Shared configuration
      ├── schemas/       # Type definitions
      └── interfaces/    # Contracts between agents

Worktree A               Worktree B
  └── .shared → ../.shared (symlink)
```

```bash
# Create shared symlink in each worktree
ln -s "$(pwd)/.shared" "$WORKTREE_PATH/.shared"
```

---

### 15. Agent Communication Patterns (Extended)

#### 15.1 Message Queue Pattern

Beyond file-based handoffs, implement a lightweight message queue for real-time coordination:

```bash
# Using FIFO pipes for lightweight message passing
AGENT_INBOX="/tmp/agent-$AGENT_ID-inbox"
mkfifo "$AGENT_INBOX" 2>/dev/null

# Sender (another agent)
send_message() {
  local target_agent=$1
  local message=$2
  local target_inbox="/tmp/agent-$target_agent-inbox"

  echo "{\"from\":\"$AGENT_ID\",\"ts\":$(date +%s),\"msg\":\"$message\"}" > "$target_inbox"
}

# Receiver (in agent loop)
check_messages() {
  if read -t 0.1 message < "$AGENT_INBOX"; then
    echo "Received: $message"
    # Process message...
  fi
}
```

#### 15.2 Event-Driven Agent Architecture

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
   │ events  │         │ events  │         │ events  │
   └─────────┘         └─────────┘         └─────────┘
```

```bash
# Event publisher
publish_event() {
  local event_type=$1
  local payload=$2
  local event_file="/tmp/agent-events/${event_type}-${AGENT_ID}-$(date +%s%N).json"

  echo "{\"type\":\"$event_type\",\"agent\":\"$AGENT_ID\",\"ts\":$(date +%s),\"data\":$payload}" > "$event_file"
}

# Event watcher (fswatch/inotify)
watch_events() {
  local pattern=$1  # e.g., "task-complete-*"

  fswatch -0 /tmp/agent-events | while read -d "" event_file; do
    if [[ "$event_file" == *$pattern* ]]; then
      process_event "$event_file"
    fi
  done
}
```

#### 15.3 Consensus Protocols for Multi-Agent Decisions

When multiple agents must agree (e.g., architecture decisions):

```markdown
# Agent Voting Protocol

## Use Case
Multiple agents propose solutions, orchestrator collects votes.

## Process
1. Orchestrator broadcasts decision request to all agents
2. Each agent writes proposal to /proposals/agent-{id}.json
3. Deadline expires (or all agents respond)
4. Orchestrator aggregates proposals
5. If consensus (>66% agreement): proceed
6. If no consensus: escalate to human or run adversarial debate

## Proposal Format
{
  "agent_id": "architect-1",
  "decision_id": "db-schema-v2",
  "proposal": "Use PostgreSQL with normalized schema",
  "confidence": 0.85,
  "reasoning": "Performance requirements, ACID compliance...",
  "alternatives_considered": ["MongoDB", "SQLite"],
  "votes_for": [],  # Filled by other agents
  "votes_against": []
}
```

---

### 16. Advanced Conflict Resolution

#### 16.1 Semantic Merge for Code Conflicts

Beyond file-level locking, use semantic understanding:

```bash
#!/bin/bash
# semantic-merge.sh - Use Claude to resolve merge conflicts

resolve_conflict() {
  local file=$1
  local conflict_content=$(cat "$file")

  claude --print "You are a merge conflict resolver.

Given this file with merge conflict markers:
\`\`\`
$conflict_content
\`\`\`

Analyze both versions semantically. Consider:
1. Intent of each change
2. Potential semantic conflicts (not just textual)
3. Dependencies and side effects
4. Test implications

Provide the merged result with no conflict markers.
Explain your merge decision briefly."
}

# Auto-resolve trivial conflicts
auto_resolve_conflicts() {
  git diff --name-only --diff-filter=U | while read file; do
    if is_trivial_conflict "$file"; then
      resolve_conflict "$file" > "$file.resolved"
      mv "$file.resolved" "$file"
      git add "$file"
    else
      echo "Complex conflict in $file - escalating to human"
    fi
  done
}
```

#### 16.2 Optimistic Locking with Conflict Detection

```bash
# Each agent maintains a version vector
VERSION_FILE=".agent-versions.json"

acquire_optimistic_lock() {
  local file=$1
  local current_hash=$(git hash-object "$file" 2>/dev/null || echo "new")

  # Record expected version
  jq --arg file "$file" --arg hash "$current_hash" \
    '.[$file] = $hash' "$VERSION_FILE" > tmp && mv tmp "$VERSION_FILE"
}

check_lock_validity() {
  local file=$1
  local expected_hash=$(jq -r --arg file "$file" '.[$file]' "$VERSION_FILE")
  local current_hash=$(git hash-object "$file" 2>/dev/null || echo "new")

  if [ "$expected_hash" != "$current_hash" ]; then
    echo "CONFLICT: $file was modified by another agent"
    return 1
  fi
  return 0
}
```

#### 16.3 Three-Way Merge with Agent Context

```
     Base (main)
         │
    ┌────┴────┐
    ▼         ▼
Agent A    Agent B
 change     change
    │         │
    └────┬────┘
         ▼
   Merge Agent
   (understands both
    agent contexts)
```

```bash
# merge-coordinator.sh
three_way_agent_merge() {
  local base_branch=$1
  local agent_a_branch=$2
  local agent_b_branch=$3

  # Get agent context files
  local context_a=$(cat "../worktrees/$agent_a_branch/CLAUDE.local.md")
  local context_b=$(cat "../worktrees/$agent_b_branch/CLAUDE.local.md")

  # Create merge branch
  git checkout -b "merge-$agent_a_branch-$agent_b_branch" "$base_branch"

  # Attempt merge
  if ! git merge "$agent_a_branch" --no-commit; then
    # Conflicts exist - use context-aware resolution
    claude "You are merging work from two agents.

Agent A context: $context_a
Agent B context: $context_b

Conflicts:
$(git diff --diff-filter=U)

Resolve preserving both agents' intent. If truly incompatible,
prioritize based on which agent had the primary responsibility."
  fi

  git merge "$agent_b_branch" --no-commit
  # Similar conflict resolution...
}
```

---

### 17. Monitoring and Observability (Extended)

#### 17.1 Agent Health Metrics

```bash
#!/bin/bash
# agent-metrics.sh - Collect and expose agent health metrics

METRICS_DIR="/tmp/agent-metrics"
mkdir -p "$METRICS_DIR"

# Heartbeat
emit_heartbeat() {
  local metrics_file="$METRICS_DIR/$AGENT_ID.json"

  cat > "$metrics_file" << EOF
{
  "agent_id": "$AGENT_ID",
  "timestamp": $(date +%s),
  "status": "running",
  "context_usage_pct": $(get_context_usage),
  "tokens_consumed": $TOKENS_CONSUMED,
  "tasks_completed": $TASKS_COMPLETED,
  "current_task": "$CURRENT_TASK",
  "errors": $ERROR_COUNT,
  "git_branch": "$(git branch --show-current)",
  "uncommitted_changes": $(git status --porcelain | wc -l),
  "memory_mb": $(ps -o rss= -p $$ | awk '{print $1/1024}')
}
EOF
}

# Run heartbeat every 30 seconds
while true; do
  emit_heartbeat
  sleep 30
done &
HEARTBEAT_PID=$!
```

#### 17.2 Distributed Tracing for Multi-Agent Workflows

```
┌────────────────────────────────────────────────────────────────┐
│ Trace ID: abc123                                               │
├────────────────────────────────────────────────────────────────┤
│ Orchestrator                                                   │
│ ├─ Span: Parse requirements        [0ms - 500ms]               │
│ ├─ Span: Decompose tasks           [500ms - 1200ms]            │
│ │   └─ Agent-Architect spawned                                 │
│ ├─ Span: Agent-Architect           [1200ms - 15000ms]          │
│ │   ├─ Read: src/config.ts                                     │
│ │   ├─ WebSearch: "FastAPI best practices"                     │
│ │   └─ Write: docs/architecture.md                             │
│ ├─ Span: Agent-Coder-1             [15000ms - 45000ms]         │
│ │   ├─ Read: docs/architecture.md                              │
│ │   ├─ Write: src/api/routes.ts (15 edits)                     │
│ │   └─ Bash: npm test (passed)                                 │
│ └─ Span: Agent-Coder-2             [15000ms - 38000ms]         │
│     ├─ Read: docs/architecture.md                              │
│     └─ Write: src/models/user.ts (8 edits)                     │
└────────────────────────────────────────────────────────────────┘
```

```bash
# Trace context propagation
export TRACE_ID=$(uuidgen)
export PARENT_SPAN_ID="orchestrator"

spawn_traced_agent() {
  local task=$1
  local span_id="agent-$(uuidgen | cut -c1-8)"

  # Pass trace context to subagent
  TRACE_ID=$TRACE_ID PARENT_SPAN_ID=$span_id \
    claude "$task" 2>&1 | while read line; do
      # Log with trace context
      echo "{\"trace_id\":\"$TRACE_ID\",\"span_id\":\"$span_id\",\"ts\":$(date +%s%N),\"log\":\"$line\"}" >> /tmp/traces.jsonl
    done
}
```

#### 17.3 Anomaly Detection for Agent Behavior

```markdown
# Agent Anomaly Signals

## Resource Anomalies
- Context usage >90% without task completion
- Token consumption rate 3x normal
- Stuck on same file for >10 iterations

## Behavioral Anomalies
- Circular edit patterns (editing same lines repeatedly)
- Test failure rate increasing
- Spawning excessive subagents (>5 depth)

## Coordination Anomalies
- Deadlock detection (agents waiting on each other)
- Conflicting edits to same file within 60s
- Handoff files not being consumed

## Response Actions
1. Alert: Log warning, continue monitoring
2. Throttle: Reduce agent's rate limit
3. Checkpoint: Force save state, pause agent
4. Terminate: Kill agent, rollback changes
5. Escalate: Notify human with full context
```

---

### 18. Load Balancing Across Agents

#### 18.1 Task Queue with Priority

```bash
#!/bin/bash
# task-queue.sh - Priority queue for agent task distribution

QUEUE_DIR="/tmp/agent-queue"
mkdir -p "$QUEUE_DIR"/{pending,in-progress,completed,failed}

# Add task to queue
enqueue_task() {
  local priority=$1  # 1=high, 5=low
  local task_json=$2
  local task_id=$(uuidgen)

  echo "$task_json" > "$QUEUE_DIR/pending/${priority}-${task_id}.json"
  echo "$task_id"
}

# Agent claims next task
claim_task() {
  local agent_id=$1

  # Get highest priority unclaimed task
  local task_file=$(ls -1 "$QUEUE_DIR/pending/" 2>/dev/null | sort | head -1)

  if [ -z "$task_file" ]; then
    echo "NO_TASKS"
    return 1
  fi

  # Atomic claim (move to in-progress with agent ID)
  local claimed_name="${task_file%.json}-${agent_id}.json"
  mv "$QUEUE_DIR/pending/$task_file" "$QUEUE_DIR/in-progress/$claimed_name" 2>/dev/null

  if [ $? -eq 0 ]; then
    cat "$QUEUE_DIR/in-progress/$claimed_name"
  else
    # Another agent claimed it - try again
    claim_task "$agent_id"
  fi
}

# Complete task
complete_task() {
  local task_file=$1
  local result=$2

  mv "$QUEUE_DIR/in-progress/$task_file" "$QUEUE_DIR/completed/"
  echo "$result" > "$QUEUE_DIR/completed/${task_file%.json}-result.json"
}
```

#### 18.2 Dynamic Agent Scaling

```bash
#!/bin/bash
# agent-autoscaler.sh

MIN_AGENTS=2
MAX_AGENTS=8
SCALE_UP_THRESHOLD=5   # Queue depth
SCALE_DOWN_THRESHOLD=1

current_agent_count() {
  pgrep -f "claude.*--agent" | wc -l
}

queue_depth() {
  ls -1 "$QUEUE_DIR/pending/" 2>/dev/null | wc -l
}

autoscale() {
  local current=$(current_agent_count)
  local depth=$(queue_depth)

  if [ $depth -gt $SCALE_UP_THRESHOLD ] && [ $current -lt $MAX_AGENTS ]; then
    echo "Scaling up: queue=$depth, agents=$current"
    spawn_agent "worker-$(date +%s)" &
  fi

  if [ $depth -lt $SCALE_DOWN_THRESHOLD ] && [ $current -gt $MIN_AGENTS ]; then
    echo "Scaling down: queue=$depth, agents=$current"
    # Signal oldest idle agent to terminate gracefully
    kill -USR1 $(pgrep -f "claude.*--agent" | head -1)
  fi
}

# Run autoscaler every 60 seconds
while true; do
  autoscale
  sleep 60
done
```

#### 18.3 Resource-Aware Scheduling

```markdown
# Agent Resource Profiles

| Profile | Model | Max Tokens | Concurrent | Use Case |
|---------|-------|------------|------------|----------|
| **Light** | Haiku | 4K | 10 | Lookups, simple transforms |
| **Medium** | Sonnet | 16K | 5 | Implementation, testing |
| **Heavy** | Opus | 32K+ | 2 | Architecture, complex reasoning |

## Scheduling Rules
1. Match task complexity to agent profile
2. Prefer Light agents for parallelizable subtasks
3. Reserve Heavy agents for blocking decisions
4. Degrade gracefully: Heavy->Medium if Opus unavailable
```

---

### 19. Production Deployment Patterns

#### 19.1 Containerized Agent Pools

```dockerfile
# Dockerfile.claude-agent
FROM ubuntu:22.04

RUN apt-get update && apt-get install -y \
    curl git nodejs npm tmux \
    && npm install -g @anthropic-ai/claude-code

# Agent configuration
ENV AGENT_POOL_SIZE=4
ENV AGENT_MODEL=sonnet
ENV QUEUE_URL=redis://queue:6379

COPY agent-entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
```

```yaml
# docker-compose.yml
version: '3.8'

services:
  orchestrator:
    build:
      context: .
      dockerfile: Dockerfile.orchestrator
    volumes:
      - ./project:/workspace
      - agent-shared:/shared
    environment:
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
      - AGENT_POOL_URL=http://agent-pool:8080

  agent-pool:
    build:
      context: .
      dockerfile: Dockerfile.claude-agent
    deploy:
      replicas: 4
      resources:
        limits:
          memory: 2G
    volumes:
      - ./project:/workspace:ro
      - agent-shared:/shared
    environment:
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}

  queue:
    image: redis:7-alpine
    volumes:
      - queue-data:/data

volumes:
  agent-shared:
  queue-data:
```

#### 19.2 Kubernetes Agent Operator

```yaml
# claude-agent-pool.yaml
apiVersion: agents.claude.ai/v1
kind: AgentPool
metadata:
  name: code-agents
spec:
  minReplicas: 2
  maxReplicas: 10
  scaleTargetRef:
    kind: TaskQueue
    name: development-tasks
  agents:
    - name: architect
      model: opus
      replicas: 1
      resources:
        requests:
          memory: "4Gi"
          cpu: "1"
    - name: coder
      model: sonnet
      replicas: 3
      resources:
        requests:
          memory: "2Gi"
          cpu: "500m"
    - name: tester
      model: haiku
      replicas: 2
      resources:
        requests:
          memory: "1Gi"
          cpu: "250m"
  communication:
    type: SharedVolume
    volumeClaimTemplate:
      spec:
        accessModes: ["ReadWriteMany"]
        resources:
          requests:
            storage: 10Gi
```

#### 19.3 Circuit Breaker for Agent Failures

```bash
#!/bin/bash
# circuit-breaker.sh

FAILURE_THRESHOLD=3
RECOVERY_TIMEOUT=300  # seconds
HALF_OPEN_REQUESTS=1

declare -A circuit_state  # CLOSED, OPEN, HALF_OPEN
declare -A failure_count
declare -A last_failure_time

call_agent() {
  local agent_type=$1
  local task=$2

  case ${circuit_state[$agent_type]:-CLOSED} in
    OPEN)
      local now=$(date +%s)
      local last=${last_failure_time[$agent_type]}
      if [ $((now - last)) -gt $RECOVERY_TIMEOUT ]; then
        circuit_state[$agent_type]="HALF_OPEN"
        echo "Circuit half-open for $agent_type, testing..."
      else
        echo "Circuit OPEN for $agent_type - failing fast"
        return 1
      fi
      ;;
    HALF_OPEN)
      echo "Circuit half-open for $agent_type - limited requests"
      ;;
  esac

  # Attempt agent call
  if spawn_agent "$agent_type" "$task"; then
    # Success
    if [ "${circuit_state[$agent_type]}" = "HALF_OPEN" ]; then
      circuit_state[$agent_type]="CLOSED"
      failure_count[$agent_type]=0
      echo "Circuit CLOSED for $agent_type"
    fi
    return 0
  else
    # Failure
    ((failure_count[$agent_type]++))
    last_failure_time[$agent_type]=$(date +%s)

    if [ ${failure_count[$agent_type]} -ge $FAILURE_THRESHOLD ]; then
      circuit_state[$agent_type]="OPEN"
      echo "Circuit OPEN for $agent_type after ${failure_count[$agent_type]} failures"
    fi
    return 1
  fi
}
```

---

### 20. Patterns from Other AI Tools

#### 20.1 AutoGen-Style Group Chat

Microsoft's AutoGen introduces a "group chat" pattern where agents converse with each other:

```markdown
# Group Chat Pattern

## Concept
Multiple agents share a conversation thread, taking turns based on:
- Round-robin
- Topic relevance (agent self-selects)
- Orchestrator direction

## Implementation in Claude Code

```bash
# group-chat.sh
CHAT_LOG="/tmp/group-chat.log"
AGENTS=("architect" "coder" "reviewer" "tester")

group_chat() {
  local topic=$1
  local max_turns=20

  echo "[TOPIC] $topic" >> "$CHAT_LOG"

  for ((turn=1; turn<=max_turns; turn++)); do
    for agent in "${AGENTS[@]}"; do
      local response=$(claude --model sonnet "You are the $agent in a group discussion.

Chat history:
$(tail -50 "$CHAT_LOG")

Topic: $topic

Contribute your perspective as $agent. Keep it brief (2-3 sentences).
If the topic is resolved, say 'CONSENSUS REACHED'.")

      echo "[$agent] $response" >> "$CHAT_LOG"

      if [[ "$response" == *"CONSENSUS REACHED"* ]]; then
        echo "Group chat concluded after $turn turns"
        return 0
      fi
    done
  done
}
```

## Use Cases
- Architecture design reviews
- Bug investigation with multiple perspectives
- Requirements disambiguation
```

#### 20.2 CrewAI-Style Role Definitions

CrewAI defines agents with explicit roles, goals, and backstories:

```yaml
# crew-config.yaml
agents:
  - role: "Senior Software Architect"
    goal: "Design scalable, maintainable system architectures"
    backstory: |
      You have 15 years of experience designing systems at
      companies like Google and Stripe. You prioritize
      simplicity and hate premature optimization.
    tools: ["read", "websearch", "write"]

  - role: "Security Engineer"
    goal: "Identify and prevent security vulnerabilities"
    backstory: |
      You've worked on red teams and found critical CVEs.
      You're paranoid by nature and always assume the worst.
    tools: ["read", "grep", "bash"]

  - role: "Junior Developer"
    goal: "Implement features while learning best practices"
    backstory: |
      You're eager to learn and ask good questions.
      You catch issues that seniors overlook because
      you don't make assumptions.
    tools: ["read", "write", "edit", "bash"]
```

```bash
# Apply role to Claude prompt
load_agent_role() {
  local role=$1
  local config=$(yq -r ".agents[] | select(.role == \"$role\")" crew-config.yaml)

  local goal=$(echo "$config" | yq -r '.goal')
  local backstory=$(echo "$config" | yq -r '.backstory')

  cat << EOF
You are a ${role}.

GOAL: $goal

BACKSTORY:
$backstory

Approach every task with this perspective. Your responses should
reflect your experience and priorities.
EOF
}
```

#### 20.3 LangGraph State Machine Patterns

LangGraph models multi-agent workflows as state machines:

```
┌─────────┐     ┌─────────┐     ┌─────────┐
│  PLAN   │────▶│  CODE   │────▶│  TEST   │
└─────────┘     └─────────┘     └─────────┘
     │               │               │
     │               ▼               │
     │         ┌─────────┐           │
     │         │ REVIEW  │◀──────────┘
     │         └─────────┘
     │               │
     │        Pass   │  Fail
     │               ▼
     │         ┌─────────┐
     └────────▶│  DONE   │
               └─────────┘
```

```bash
# state-machine-agent.sh
STATE="PLAN"
MAX_ITERATIONS=10

run_state_machine() {
  local task=$1
  local iteration=0

  while [ "$STATE" != "DONE" ] && [ $iteration -lt $MAX_ITERATIONS ]; do
    ((iteration++))
    echo "State: $STATE (iteration $iteration)"

    case $STATE in
      PLAN)
        result=$(run_agent "architect" "Create implementation plan for: $task")
        if [ $? -eq 0 ]; then STATE="CODE"; else STATE="PLAN"; fi
        ;;
      CODE)
        result=$(run_agent "coder" "Implement according to plan")
        if [ $? -eq 0 ]; then STATE="TEST"; else STATE="CODE"; fi
        ;;
      TEST)
        result=$(run_agent "tester" "Run tests and report results")
        if [ $? -eq 0 ]; then STATE="REVIEW"; else STATE="CODE"; fi
        ;;
      REVIEW)
        result=$(run_agent "reviewer" "Review implementation quality")
        if [[ "$result" == *"APPROVED"* ]]; then
          STATE="DONE"
        else
          STATE="CODE"  # Back to coding with review feedback
        fi
        ;;
    esac
  done
}
```

---

### 21. Claude Code Memory Hierarchy for Multi-Agent

#### 21.1 Hierarchical Memory Architecture

Claude Code implements a four-tier memory system that enables sophisticated multi-agent coordination:

```
┌─────────────────────────────────────────────────────────────────┐
│ Layer 1: Enterprise Policy                                      │
│ /Library/Application Support/ClaudeCode/CLAUDE.md               │
│ Organization-wide security policies, compliance requirements     │
├─────────────────────────────────────────────────────────────────┤
│ Layer 2: Project Memory                                          │
│ ./CLAUDE.md or ./.claude/CLAUDE.md                               │
│ Architecture decisions, coding standards, team workflows         │
├─────────────────────────────────────────────────────────────────┤
│ Layer 3: Modular Rules                                           │
│ ./.claude/rules/*.md                                             │
│ Path-specific rules with frontmatter targeting                   │
├─────────────────────────────────────────────────────────────────┤
│ Layer 4: Personal + Local                                        │
│ ~/.claude/CLAUDE.md (user global)                                │
│ ./CLAUDE.local.md (project local, gitignored)                    │
│ Agent-specific context, sandbox URLs, test credentials           │
└─────────────────────────────────────────────────────────────────┘
```

#### 21.2 Multi-Agent Memory Patterns

```markdown
# Pattern: Shared Rules, Agent-Specific Context

## Project CLAUDE.md (shared by all agents)
```markdown
# Project Architecture
- Use FastAPI for all new endpoints
- PostgreSQL for persistence
- Redis for caching

# Multi-Agent Coordination
- Agents write status to .agent-status/
- Conflicts escalate to orchestrator
- All file edits must be atomic (write to .tmp, then mv)
```

## Agent-Specific CLAUDE.local.md
```markdown
# Agent: Coder-1
ID: coder-1-abc123
Worktree: ../worktrees/feature-auth
Focus: Authentication module only

# My Current Task
Implement JWT refresh token logic
Blocked: Waiting for coder-2 to finish User model

# Do Not Touch
- src/api/payments/* (owned by coder-2)
- src/models/product.ts (frozen for review)
```
```

#### 21.3 Dynamic Memory with File Imports

```markdown
# CLAUDE.md with dynamic imports

## Standard References
@docs/architecture.md
@docs/api-conventions.md

## Multi-Agent Context (dynamic)
@.agent-status/current-assignments.md
@.agent-status/blocked-files.md
@.agent-status/handoff-queue.md
```

---

### 22. Anthropic Multi-Agent Best Practices (Extended)

#### 22.1 Official Subagent Guidance

From Anthropic's documentation and Boris Cherny's workflows:

```markdown
# When to Use Subagents

## Good Use Cases
- **Isolated context tasks**: Research that would pollute main context
- **Parallel exploration**: Try multiple approaches simultaneously
- **Specialized skills**: Security review, performance analysis
- **Adversarial validation**: Challenge your own decisions

## Anti-Patterns
- Spawning subagents for simple lookups (use tools directly)
- Deep nesting (>2 levels) without explicit need
- Subagents modifying shared state without coordination

## Subagent Context Rules
1. Subagents have isolated context (fresh conversation)
2. They inherit CLAUDE.md files but not conversation history
3. Results must be explicitly returned to parent
4. Background subagents can outlive parent request
```

#### 22.2 Verification Loop Standards

```markdown
# Multi-Agent Verification Protocol

## Per-Agent Verification
Every agent must verify its work before reporting complete:
1. Type check: `npm run typecheck` (or equivalent)
2. Unit tests: `npm test -- --related`
3. Lint: `npm run lint -- --fix`
4. Self-review: Read diffs, check for obvious issues

## Cross-Agent Verification
Orchestrator verifies agent outputs:
1. Integration tests after merge
2. E2E tests for user-facing features
3. Security scan for sensitive changes
4. Performance benchmark for critical paths

## Human Checkpoints
Require human approval for:
- Database migrations
- API breaking changes
- Security-sensitive code
- Production deployments
```

#### 22.3 Task Sizing Guidelines

```markdown
# Right-Sizing Tasks for Agents

## Too Small (inefficient)
- "Add a comment to line 42"
- "Rename variable x to count"
→ Overhead of spawning exceeds task value

## Just Right (sweet spot)
- "Implement the User model with these fields..."
- "Add authentication middleware with JWT validation"
- "Write tests for the payment processing module"
→ Completable in one context window, verifiable

## Too Large (context collapse risk)
- "Build the entire backend"
- "Refactor the whole codebase to TypeScript"
→ Break into smaller, sequential tasks with handoffs

## Sizing Heuristics
- ~100-500 lines of code change
- ~1-3 files modified
- ~30-60 minutes equivalent human time
- Clear success criteria (tests pass, feature works)
```

---

### 23. Failure Recovery Patterns

#### 23.1 Checkpointing for Long-Running Agents

```bash
#!/bin/bash
# checkpoint.sh - Save and restore agent state

CHECKPOINT_DIR=".checkpoints"

save_checkpoint() {
  local agent_id=$1
  local checkpoint_id=$(date +%s)
  local checkpoint_path="$CHECKPOINT_DIR/${agent_id}-${checkpoint_id}"

  mkdir -p "$checkpoint_path"

  # Save git state
  git stash create > "$checkpoint_path/stash-ref"
  git rev-parse HEAD > "$checkpoint_path/commit-ref"
  git diff --cached > "$checkpoint_path/staged.diff"
  git diff > "$checkpoint_path/unstaged.diff"

  # Save agent state
  cp progress.txt "$checkpoint_path/"
  cp prd.json "$checkpoint_path/"
  cp .agent-status.json "$checkpoint_path/"

  echo "$checkpoint_path"
}

restore_checkpoint() {
  local checkpoint_path=$1

  # Restore git state
  git reset --hard $(cat "$checkpoint_path/commit-ref")
  git apply "$checkpoint_path/staged.diff" && git add -A
  git apply "$checkpoint_path/unstaged.diff"

  # Restore agent state
  cp "$checkpoint_path/progress.txt" .
  cp "$checkpoint_path/prd.json" .
  cp "$checkpoint_path/.agent-status.json" .
}

# Auto-checkpoint every N iterations
CHECKPOINT_INTERVAL=5
iteration=0

while true; do
  ((iteration++))

  # Run agent iteration
  run_agent_iteration

  if [ $((iteration % CHECKPOINT_INTERVAL)) -eq 0 ]; then
    save_checkpoint "$AGENT_ID"
    echo "Checkpoint saved at iteration $iteration"
  fi
done
```

#### 23.2 Graceful Degradation

```markdown
# Agent Failure Hierarchy

## Level 1: Retry with Backoff
- Transient API errors
- Rate limiting
- Timeout (< 2 min)
→ Retry 3x with exponential backoff

## Level 2: Fallback Model
- Opus unavailable → Try Sonnet
- Sonnet unavailable → Try Haiku (for simple tasks)
→ Log degradation, may affect quality

## Level 3: Requeue Task
- Context corruption
- Invalid state
→ Checkpoint, terminate agent, requeue task to fresh agent

## Level 4: Human Escalation
- Repeated failures (>3)
- Conflicting requirements detected
- Security-sensitive decision needed
→ Alert human, pause pipeline

## Level 5: Safe Shutdown
- API quota exhausted
- Critical infrastructure failure
→ Checkpoint all agents, commit safe state, stop all work
```

#### 23.3 Dead Letter Queue for Failed Tasks

```bash
# Handle tasks that repeatedly fail
DEAD_LETTER_DIR="/tmp/dead-letter-queue"

handle_failed_task() {
  local task_file=$1
  local failure_count=$(jq -r '.failure_count // 0' "$task_file")
  local max_retries=3

  ((failure_count++))

  if [ $failure_count -ge $max_retries ]; then
    # Move to dead letter queue
    jq --argjson count $failure_count '.failure_count = $count | .status = "dead_letter"' \
      "$task_file" > "$DEAD_LETTER_DIR/$(basename $task_file)"
    rm "$task_file"

    # Alert
    echo "Task moved to dead letter queue: $task_file"
    notify_human "Task failed $failure_count times: $(jq -r '.description' "$task_file")"
  else
    # Requeue with incremented failure count
    jq --argjson count $failure_count '.failure_count = $count' "$task_file" > tmp
    mv tmp "$QUEUE_DIR/pending/"
  fi
}
```

---

### 24. Testing Multi-Agent Systems

#### 24.1 Agent Simulation Framework

```bash
#!/bin/bash
# test-multi-agent.sh - Simulate multi-agent scenarios

# Mock agent that records actions instead of executing
mock_agent() {
  local agent_id=$1
  local task=$2

  # Record invocation
  echo "{\"agent\":\"$agent_id\",\"task\":\"$task\",\"ts\":$(date +%s)}" >> test-log.jsonl

  # Simulate based on scenario
  case $TEST_SCENARIO in
    "happy_path")
      echo "COMPLETE"
      return 0
      ;;
    "conflict")
      echo "CONFLICT: file.ts modified by another agent"
      return 1
      ;;
    "timeout")
      sleep 120
      ;;
    "partial_failure")
      if [ $((RANDOM % 3)) -eq 0 ]; then
        return 1
      else
        return 0
      fi
      ;;
  esac
}

# Test scenarios
run_test_suite() {
  for scenario in happy_path conflict timeout partial_failure; do
    echo "Testing scenario: $scenario"
    TEST_SCENARIO=$scenario run_orchestrator

    # Verify expectations
    case $scenario in
      "happy_path")
        assert_all_tasks_complete
        ;;
      "conflict")
        assert_conflict_resolution_triggered
        ;;
      "timeout")
        assert_timeout_handling
        ;;
      "partial_failure")
        assert_retry_logic_executed
        ;;
    esac
  done
}
```

#### 24.2 Chaos Testing for Resilience

```markdown
# Multi-Agent Chaos Tests

## Test: Agent Crash Recovery
1. Start 5 parallel agents
2. Randomly kill one agent mid-task
3. Verify: Orchestrator detects failure within 60s
4. Verify: Task is requeued to surviving agent
5. Verify: No data loss or corruption

## Test: Network Partition
1. Start orchestrator and agent pool
2. Simulate network partition (drop traffic to API)
3. Verify: Agents enter backoff mode
4. Restore network
5. Verify: Agents resume without duplicate work

## Test: Conflicting Edits
1. Assign same file to two agents
2. Both agents edit simultaneously
3. Verify: Conflict detected before merge
4. Verify: Resolution strategy executed
5. Verify: Final state is semantically correct

## Test: Resource Exhaustion
1. Start agents until hitting limit
2. Queue more tasks than agents can handle
3. Verify: Queue grows, no agents crash
4. Verify: Priority ordering maintained
5. Verify: Autoscaler responds appropriately
```

---

### 25. Cost Optimization for Multi-Agent Systems

#### 25.1 Token Usage Tracking

```bash
#!/bin/bash
# cost-tracker.sh

COST_LOG="/tmp/agent-costs.jsonl"

# Model pricing (per 1M tokens, approximate)
declare -A INPUT_COST=(
  ["opus"]=15.00
  ["sonnet"]=3.00
  ["haiku"]=0.25
)

declare -A OUTPUT_COST=(
  ["opus"]=75.00
  ["sonnet"]=15.00
  ["haiku"]=1.25
)

log_tokens() {
  local agent_id=$1
  local model=$2
  local input_tokens=$3
  local output_tokens=$4

  local input_cost=$(echo "scale=6; $input_tokens * ${INPUT_COST[$model]} / 1000000" | bc)
  local output_cost=$(echo "scale=6; $output_tokens * ${OUTPUT_COST[$model]} / 1000000" | bc)
  local total_cost=$(echo "scale=6; $input_cost + $output_cost" | bc)

  echo "{\"agent\":\"$agent_id\",\"model\":\"$model\",\"input_tokens\":$input_tokens,\"output_tokens\":$output_tokens,\"cost\":$total_cost,\"ts\":$(date +%s)}" >> "$COST_LOG"
}

# Daily cost report
daily_report() {
  local today=$(date +%Y-%m-%d)
  local total=$(jq -s "map(select(.ts >= $(date -d $today +%s))) | map(.cost) | add" "$COST_LOG")
  local by_model=$(jq -s "group_by(.model) | map({model: .[0].model, cost: (map(.cost) | add)})" "$COST_LOG")
  local by_agent=$(jq -s "group_by(.agent) | map({agent: .[0].agent, cost: (map(.cost) | add)})" "$COST_LOG")

  echo "Daily Cost Report: $today"
  echo "Total: \$$total"
  echo "By Model: $by_model"
  echo "By Agent: $by_agent"
}
```

#### 25.2 Model Selection Optimization

```markdown
# Smart Model Selection

## Decision Matrix

| Task Characteristic | Recommended Model | Rationale |
|---------------------|-------------------|-----------|
| File lookup, simple grep | Haiku | Fast, cheap |
| Code generation with patterns | Sonnet | Good quality/cost balance |
| Architecture decisions | Opus | Needs deep reasoning |
| Test generation | Sonnet | Pattern-based |
| Security review | Opus | High stakes, nuanced |
| Documentation | Haiku/Sonnet | Lower complexity |
| Debugging complex issues | Opus | Requires understanding |

## Dynamic Downgrade Rules
1. If Opus task takes >5 min without progress, try Sonnet
2. If task fails with Opus, don't auto-retry with Opus
3. Parallelize with multiple Haiku before single Opus when possible
```

#### 25.3 Caching Strategies

```bash
# Cache expensive operations
CACHE_DIR="/tmp/agent-cache"

cache_get() {
  local key=$1
  local cache_file="$CACHE_DIR/$(echo $key | md5sum | cut -d' ' -f1)"

  if [ -f "$cache_file" ]; then
    local age=$(($(date +%s) - $(stat -c %Y "$cache_file")))
    local max_age=${2:-3600}  # Default 1 hour

    if [ $age -lt $max_age ]; then
      cat "$cache_file"
      return 0
    fi
  fi
  return 1
}

cache_set() {
  local key=$1
  local value=$2
  local cache_file="$CACHE_DIR/$(echo $key | md5sum | cut -d' ' -f1)"

  echo "$value" > "$cache_file"
}

# Example: Cache codebase analysis
analyze_codebase() {
  local cache_key="codebase-analysis-$(git rev-parse HEAD)"

  if cached=$(cache_get "$cache_key"); then
    echo "$cached"
  else
    result=$(claude "Analyze this codebase structure...")
    cache_set "$cache_key" "$result"
    echo "$result"
  fi
}
```

---

### Quick Reference: Deep Dive Commands

```bash
# Worktree lifecycle
./worktree-manager.sh create feature-x
./worktree-manager.sh merge feature-x
./worktree-manager.sh cleanup

# Agent monitoring
./agent-metrics.sh --dashboard
./agent-metrics.sh --agent coder-1 --trace

# Load balancing
./task-queue.sh enqueue 1 '{"type":"implement","file":"auth.ts"}'
./task-queue.sh status
./agent-autoscaler.sh --dry-run

# Failure recovery
./checkpoint.sh save agent-123
./checkpoint.sh restore .checkpoints/agent-123-1704820800
./checkpoint.sh list

# Testing
./test-multi-agent.sh --scenario conflict
./test-multi-agent.sh --chaos

# Cost tracking
./cost-tracker.sh daily-report
./cost-tracker.sh by-agent --top 5
```

---

### Additional Resources

#### Research Papers
- "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation" (Microsoft)
- "MetaGPT: Meta Programming for Multi-Agent Collaborative Framework" (DeepWisdom)
- "CAMEL: Communicative Agents for Mind Exploration of Large Language Model Society"

#### Community Implementations
- MCP Agent Mail: github.com/Dicklesworthstone/mcp_agent_mail
- Station (Nats-based coordination): github.com/cloudshipai/station
- AutoGPT: github.com/Significant-Gravitas/AutoGPT

#### Official Documentation
- Claude Code Subagents: code.claude.com/docs/en/sub-agents
- Claude Code Hooks: code.claude.com/docs/en/hooks
- Claude Code Memory: code.claude.com/docs/en/memory

---

### Deep Dive Tags

`#worktree-lifecycle` `#agent-communication` `#message-queues` `#event-driven` `#consensus` `#semantic-merge` `#optimistic-locking` `#three-way-merge` `#distributed-tracing` `#anomaly-detection` `#load-balancing` `#autoscaling` `#containerization` `#kubernetes` `#circuit-breaker` `#autogen-patterns` `#crewai-patterns` `#langgraph-patterns` `#memory-hierarchy` `#checkpointing` `#graceful-degradation` `#dead-letter-queue` `#chaos-testing` `#cost-optimization` `#model-selection` `#caching`

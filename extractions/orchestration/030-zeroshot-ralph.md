# Zeroshot: Multi-Agent Validation Ralph
## covibes/zeroshot - Autonomous Engineering Team in a CLI

---
## D-FINAL Connection
**Contributed to:** D-FINAL-implementation.md
**Last enhanced:** 2026-01-19 (Initial Extraction)
---

> "Validators can't lie about code they didn't write. Fail the check? Fix and retry until it actually works."
> - Zeroshot Documentation

> "If you cannot describe what 'done' means, validators cannot verify it."
> - Zeroshot Philosophy

**Extraction Date:** 2026-01-19
**Primary Source:** github.com/covibes/zeroshot
**License:** MIT (Anthropic Claude Code Foundation)
**Status:** Active development, production-capable
**Line Count Target:** 600+ lines

---

## Table of Contents

1. [You Are Here](#1-you-are-here)
2. [What This Is](#2-what-this-is)
3. [Why It Matters](#3-why-it-matters)
4. [Architecture Deep Dive](#4-architecture-deep-dive)
5. [Key Features](#5-key-features)
6. [Installation and Setup](#6-installation-and-setup)
7. [Configuration Options](#7-configuration-options)
8. [Workflow Patterns](#8-workflow-patterns)
9. [Integration Patterns](#9-integration-patterns)
10. [Comparison to Other Ralphs](#10-comparison-to-other-ralphs)
11. [Mental Models](#11-mental-models)
12. [Checkpoints](#12-checkpoints)
13. [Troubleshooting](#13-troubleshooting)
14. [Source Attribution](#14-source-attribution)

---

## 1. You Are Here

### Complexity Ladder Position

**Level 5-6 on the complexity ladder:**

```
Level 0: Single session, no memory          <- Where most people start
Level 1: CLAUDE.md + project context        <- Basic persistence
Level 2: Extended sessions with handoffs    <- Context engineering
Level 3: Ralph Wiggum Loop                  <- Fresh context iteration
Level 4: Production Ralph (PRD-driven)      <- Structured automation
Level 5: ZEROSHOT (Multi-Agent Validation)  <- YOU ARE HERE
Level 6: CC Mirror / Factory-scale         <- Multi-model orchestration
Level 7: Gas Town (Full Factory)           <- Autonomous departments
```

### What This Pattern Is

Zeroshot is a **multi-agent orchestration CLI** that coordinates autonomous engineering workflows. Unlike basic Ralph loops that iterate a single agent, Zeroshot deploys specialized agents (Conductor, Planner, Worker, Validators) with **blind validation** - validators assess work without access to the worker's context.

### Prerequisites

Before implementing Zeroshot:
- Node.js 18+ installed
- At least one AI provider CLI (Claude Code, Codex, Gemini, or Opencode)
- GitHub CLI (`gh`) or equivalent for your issue platform
- Understanding of basic Ralph patterns (helpful but not required)
- Familiarity with Docker (for full isolation mode)

### What This Enables

Mastering Zeroshot unlocks:
- Multi-agent validation preventing rubber-stamp approvals
- Crash recovery through SQLite persistence
- Provider-agnostic model selection
- Isolation modes for safe experimentation
- Complexity-based workflow routing

---

## 2. What This Is

### The Elevator Pitch

Zeroshot is your **autonomous engineering team in a CLI**. It orchestrates multiple AI agents to implement, review, test, and verify code changes autonomously.

```bash
zeroshot run 123  # Implement GitHub issue #123 with full validation
```

### Core Philosophy

**"Blind Validation"** - The key differentiator from single-agent Ralph:

```
Traditional Ralph:
Agent writes code -> Agent checks its own work -> Commits

Zeroshot:
Worker Agent writes code -> Worker has NO context access anymore
                        -> Validator Agents check work BLIND
                        -> Validators see ONLY the files, not history
                        -> Honest assessment without context bias
```

### The Problem It Solves

Single-agent systems have an inherent conflict of interest:

1. **Self-Validation Bias**: An agent reviewing its own work has implicit knowledge of what it meant to do, not just what it did
2. **Context Bleeding**: Single agents accumulate context that colors their judgment
3. **Rubber-Stamping**: When the same agent writes and reviews, validation becomes performative

Zeroshot's solution: **Separation of concerns with information barriers**.

### Multi-Agent Topology

```
                        +-------------------+
                        |    CONDUCTOR      |
                        | (Task Classifier) |
                        +--------+----------+
                                 |
              +------------------+------------------+
              |                                     |
     +--------v---------+               +-----------v----------+
     |     PLANNER      |               |    Direct to Worker  |
     | (Complex tasks)  |               |    (Simple tasks)    |
     +--------+---------+               +-----------+----------+
              |                                     |
              v                                     v
     +--------+---------+               +-----------+----------+
     |      WORKER      |               |       WORKER         |
     | (Implementation) |               |   (Implementation)   |
     +--------+---------+               +-----------+----------+
              |                                     |
   +----------+----------+               +----------+----------+
   |          |          |               |                     |
   v          v          v               v                     v
+------+  +------+  +------+         +------+             +------+
|Valid1|  |Valid2|  |Valid3|         |Valid1|             |Valid2|
+------+  +------+  +------+         +------+             +------+
   |          |          |               |                     |
   +----------+----------+               +----------+----------+
              |                                     |
              v                                     v
        [Consensus?]                          [Consensus?]
              |                                     |
         ACCEPT/REJECT                        ACCEPT/REJECT
```

---

## 3. Why It Matters

### The Multi-Agent Advantage

**Problem**: Context degradation in single-agent systems

In traditional Ralph loops, the agent accumulates implicit knowledge across iterations. Even with fresh context, the codebase reflects the agent's decisions, creating feedback loops.

**Zeroshot's Solution**: True separation of concerns

| Aspect | Single Agent | Zeroshot Multi-Agent |
|--------|--------------|---------------------|
| Validation objectivity | Self-reviews own work | Blind validation |
| Error detection | Biased toward own assumptions | Fresh perspective each validator |
| Failure modes | Silent degradation | Explicit rejection with findings |
| Recovery | Hope next iteration works | Actionable feedback for retry |

### Complexity-Based Routing

The Conductor classifies tasks on two dimensions:

**Complexity Levels:**
- **TRIVIAL**: Single file changes, no validation needed
- **SIMPLE**: One worker + one generic validator
- **STANDARD**: Planner + worker + 2 validators
- **CRITICAL**: Higher-tier planner + worker + 5 specialized validators

**Task Types:**
- **INQUIRY**: Read-only analysis
- **TASK**: Implementation work
- **DEBUG**: Bug fixing

This routing optimizes API costs while ensuring critical work gets appropriate validation.

### Crash Recovery

All state persists to SQLite:

```bash
# Session interrupted? Resume where you left off:
zeroshot resume <cluster-id>

# View previous runs:
sqlite3 ~/.zeroshot/*.db "SELECT * FROM messages WHERE cluster_id='xyz'"

# Export conversation:
zeroshot export <cluster-id>
```

---

## 4. Architecture Deep Dive

### Message Bus Architecture

Zeroshot uses a **pub/sub message bus** with SQLite ledger persistence:

```
Agent A -> publish() -> SQLite Ledger -> LogicEngine -> trigger match -> Agent B
```

**Key Components:**

| Component | Role |
|-----------|------|
| **MessageBus** | EventEmitter-based pub/sub, max 50 listeners per cluster |
| **Ledger** | SQLite with WAL mode, atomic batch operations, crash recovery |
| **LogicEngine** | VM sandbox evaluating trigger conditions with 1-second timeout |
| **Orchestrator** | Cluster lifecycle, agent spawning, isolation management |

### Ledger Design

The SQLite persistence layer provides:

```javascript
// Key schema elements:
- cluster_id, sender, topic indexes
- Timestamp ordering for chronological retrieval
- Atomic batch commits for task completion
- WAL mode for concurrent reads
```

**Why SQLite?**
- Single-file deployment
- ACID transactions
- Resume from any point
- No external dependencies

### Logic Engine Sandbox

Agent triggers run in an isolated VM:

```javascript
// Available in trigger evaluation:
- Ledger API: query(), findLast(), count(), since()
- Cluster API: getAgents(), getAgentsByRole()
- Helpers: allResponded(), hasConsensus(), timeSinceLastMessage()

// Security measures:
- Frozen prototypes (prevent pollution)
- No fs/network/child_process
- 1-second timeout
- Strict mode enforcement
```

### Isolation Modes

**None (Default):**
- Direct modifications to repository
- Best for: Quick tasks, manual review afterward

**Git Worktree (`--worktree`):**
- Lightweight branch-based isolation
- Creates `zeroshot/{clusterId}` branches
- ~1 second setup time
- Best for: PR workflows, parallel runs

**Docker (`--docker`):**
- Complete container isolation
- Workspace copied to temp directory
- Credential mounting supported
- Auto-cleanup on completion
- Best for: Risky experiments, untrusted code

---

## 5. Key Features

### 5.1 Blind Validation

The cornerstone feature - validators assess work without implementation context:

```
Worker:                    Validator:
- Sees issue description   - Sees ONLY current file state
- Has implementation plan  - NO access to worker reasoning
- Knows what was intended  - Judges purely on code quality
- Context-rich             - Context-free judgment
```

**Why It Works:**
- Can't rationalize poor implementation
- Fresh eyes catch more issues
- Honest pass/fail assessment
- Actionable rejection findings

### 5.2 Provider Agnosticism

Switch AI providers without code changes:

```bash
# List available providers
zeroshot providers

# Set default
zeroshot providers set-default codex

# Override per-run
zeroshot run 123 --provider gemini

# Environment variable
ZEROSHOT_PROVIDER=claude zeroshot run 123
```

**Supported Providers:**

| Provider | CLI | Model Levels |
|----------|-----|--------------|
| Claude | `@anthropic-ai/claude-code` | level1/level2/level3 |
| Codex | `@openai/codex` | level1/level2/level3 |
| Gemini | `@google/gemini-cli` | level1/level2/level3 |
| Opencode | opencode.ai | level1/level2/level3 |

### 5.3 Multi-Platform Issue Support

Works with your issue tracker of choice:

```bash
# GitHub
zeroshot run 123
zeroshot run owner/repo#123

# GitLab
zeroshot run https://gitlab.com/org/repo/-/issues/456

# Jira
zeroshot run PROJ-789

# Azure DevOps
zeroshot run https://dev.azure.com/org/project/_workitems/edit/1234
```

### 5.4 Cost Control

Model ceilings prevent API overspend:

```bash
# Configure model levels per complexity
zeroshot settings

# TRIVIAL tasks -> level1 (cheapest)
# SIMPLE tasks -> level1-2
# STANDARD tasks -> level2
# CRITICAL tasks -> level3 (most capable)
```

### 5.5 Specialized Validators

Full workflows deploy specialized validators:

| Validator Type | Focus |
|---------------|-------|
| Requirements | Acceptance criteria verification |
| Code | Senior-level review, generalization |
| Security | OWASP vulnerabilities, secrets |
| Test | Coverage, execution, assertions |

---

## 6. Installation and Setup

### Prerequisites

```bash
# Required
node --version  # Must be 18+
gh auth status  # GitHub CLI authenticated

# At least one provider
npm install -g @anthropic-ai/claude-code
claude auth login
```

### Installation

```bash
npm install -g @covibes/zeroshot
```

### Provider Setup

```bash
# Claude (recommended)
npm install -g @anthropic-ai/claude-code
claude auth login

# Codex (OpenAI)
npm install -g @openai/codex
codex auth login

# Gemini
npm install -g @google/gemini-cli
gemini auth login
```

### Verify Installation

```bash
# Check version
zeroshot --version

# List providers
zeroshot providers

# Run preflight check
zeroshot preflight
```

### First Run

```bash
# Navigate to your repository
cd your-project

# Run on a GitHub issue
zeroshot run 123

# Or describe the task inline
zeroshot run "Add rate limiting to API endpoints"
```

---

## 7. Configuration Options

### Command-Line Flags

```bash
# Basic usage
zeroshot run <issue>              # Run on issue
zeroshot run <file.md>            # Run on markdown file
zeroshot run "description"        # Run on inline description

# Output modes
zeroshot run 123 --pr             # Create pull request
zeroshot run 123 --ship           # PR + auto-merge on approval

# Isolation
zeroshot run 123 --worktree       # Git worktree isolation
zeroshot run 123 --docker         # Container isolation

# Provider selection
zeroshot run 123 --provider codex

# Resume/manage
zeroshot resume <cluster-id>      # Resume interrupted run
zeroshot export <cluster-id>      # Export to markdown
zeroshot kill <cluster-id>        # Terminate cluster
```

### Settings Management

```bash
# Interactive settings
zeroshot settings

# Provider configuration
zeroshot providers
zeroshot providers set-default claude
zeroshot providers setup claude
```

### Docker Credential Mounts

When using `--docker`, credentials need explicit mounting:

```bash
# Preset mounts
zeroshot run 123 --docker --mount gh        # GitHub CLI
zeroshot run 123 --docker --mount aws       # AWS credentials
zeroshot run 123 --docker --mount kube      # Kubernetes config
zeroshot run 123 --docker --mount terraform # Terraform state

# Custom mount
zeroshot run 123 --docker --mount ~/.config/custom:/home/node/.config/custom:ro
```

### Model Level Configuration

```yaml
# Per-provider model levels:
claude:
  level1: claude-3-haiku
  level2: claude-sonnet-4
  level3: claude-opus-4

codex:
  level1: gpt-4o-mini
  level2: gpt-4o
  level3: o1
  reasoningEffort: medium  # Codex-specific
```

---

## 8. Workflow Patterns

### 8.1 Basic Issue Implementation

```bash
# Simplest flow - implement and review locally
zeroshot run 123
```

**What Happens:**
1. Conductor classifies issue complexity
2. Appropriate workflow template selected
3. Planner creates implementation strategy
4. Worker implements in isolation
5. Validators assess independently
6. Accept/reject with findings
7. Retry loop until consensus or failure

### 8.2 PR Workflow

```bash
# Create PR on completion
zeroshot run 123 --pr
```

**What Happens:**
1. Worktree isolation automatically enabled
2. Implementation on feature branch
3. PR created with summary
4. Validators run against PR state

### 8.3 Auto-Ship Workflow

```bash
# Full automation: implement -> PR -> merge
zeroshot run 123 --ship
```

**What Happens:**
1. Worktree isolation
2. Implementation
3. PR creation
4. Validation
5. Auto-merge on validator approval

### 8.4 Safe Experimentation

```bash
# Full container isolation for risky changes
zeroshot run "Refactor authentication system" --docker
```

**What Happens:**
1. Repository copied to Docker container
2. All changes isolated from host
3. Credentials mounted as needed
4. Results available for review
5. Container cleaned up on completion

---

## 9. Integration Patterns

### With Gas Town

Zeroshot can serve as a specialized worker in a Gas Town factory architecture:

**Integration Points:**
- Zeroshot as a "Dog" agent for implementation tasks
- Factory sends structured issues to Zeroshot
- Zeroshot returns validated implementations

**Configuration Example:**
```yaml
# gas-town-config.yaml
dogs:
  implementation:
    tool: zeroshot
    command: "zeroshot run {issue_id} --pr"
    triggers:
      - label: ready-for-implementation
    outputs:
      - pull_request
```

**Use Case:** Gas Town handles triage, planning, and coordination while Zeroshot handles the actual implementation with built-in validation.

### With CC-Mirror

Zeroshot's provider-agnostic design enables multi-model experimentation:

**Integration Points:**
- Different providers for different agent roles
- A/B testing model performance
- Cost optimization across providers

**Configuration Example:**
```bash
# Run conductor with Claude, workers with Codex
ZEROSHOT_CONDUCTOR_PROVIDER=claude \
ZEROSHOT_WORKER_PROVIDER=codex \
zeroshot run 123
```

**Use Case:** Experiment with different models for different roles to optimize cost/quality tradeoffs.

### With Orchestra (Self-Improvement)

Zeroshot's validation loop can integrate with self-improvement patterns:

**Integration Points:**
- Orchestra defines improvement tasks
- Zeroshot implements with validation
- Results feed back to Orchestra

**Configuration Example:**
```yaml
# orchestra-config.yaml
improvement_executor:
  tool: zeroshot
  complexity_threshold: STANDARD
  validation_required: true
  retry_on_rejection: 3
```

**Use Case:** Recursive enhancement where the system improves itself through validated changes.

### Combination Matrix

| Zeroshot + | Use Case | Complexity | Value |
|------------|----------|------------|-------|
| Gas Town | Implementation Dog in factory | High | Production orchestration |
| CC-Mirror | Multi-model experimentation | High | Cost/quality optimization |
| Orchestra | Self-improvement executor | High | Recursive enhancement |
| Basic Ralph | Fallback for simple tasks | Low | Cost efficiency |
| Production Ralph | PRD-driven batch work | Medium | Structured automation |

---

## 10. Comparison to Other Ralphs

### vs Original Ralph (Geoffrey Huntley)

| Aspect | Original Ralph | Zeroshot |
|--------|---------------|----------|
| **Agent count** | Single agent loop | Multi-agent topology |
| **Validation** | Self-check | Blind external validators |
| **Complexity routing** | None | 4-level classification |
| **State persistence** | Files only | SQLite ledger |
| **Crash recovery** | Manual | Automatic resume |
| **Provider support** | Claude only | Claude, Codex, Gemini, Opencode |
| **Isolation** | None | None/Worktree/Docker |
| **Setup complexity** | 15 minutes | 30 minutes |

**When to Choose Original Ralph:**
- Learning the pattern
- Simple, well-defined tasks
- Minimal infrastructure needed
- Cost is primary concern

**When to Choose Zeroshot:**
- Complex multi-step implementations
- Need validation guarantees
- Want crash recovery
- Multiple provider experimentation

### vs Production Ralph (snarktank/ryan-carson)

| Aspect | Production Ralph | Zeroshot |
|--------|-----------------|----------|
| **Task format** | prd.json structured | Issue/description/markdown |
| **Iteration model** | Story-by-story | Task-complete-or-reject |
| **Memory** | progress.txt + AGENTS.md | SQLite ledger |
| **Validation** | Acceptance criteria | Blind multi-validator |
| **Skills** | PRD, dev-browser | Built into workflow |
| **Learning compound** | Cross-iteration | Per-cluster |
| **Setup** | File templates | CLI commands |

**When to Choose Production Ralph:**
- PRD-driven feature development
- Want learning to compound across iterations
- Simpler mental model preferred
- Working alone

**When to Choose Zeroshot:**
- Issue-driven workflow
- Need independent validation
- Team environment
- Higher complexity tasks

### vs Marathon Ralph (gruckion)

| Aspect | Marathon Ralph | Zeroshot |
|--------|---------------|----------|
| **Focus** | Full SDLC | Implementation + validation |
| **Test generation** | Automatic E2E | Via validator, not generated |
| **Scope** | Entire applications | Per-issue/task |
| **Integration** | CI/CD focused | Issue tracker focused |

**When to Choose Marathon Ralph:**
- Greenfield projects
- Need test generation
- Full SDLC automation

**When to Choose Zeroshot:**
- Existing codebase with tests
- Issue-by-issue implementation
- Validation more than generation

### vs Lisa (Arakiss)

| Aspect | Lisa | Zeroshot |
|--------|------|----------|
| **Focus** | Enhanced logging | Multi-agent validation |
| **Primary value** | Debugging/audit | Correctness guarantees |
| **Modifications** | Fork of Ralph | Ground-up design |

**When to Choose Lisa:**
- Need detailed audit trails
- Debugging Ralph behavior

**When to Choose Zeroshot:**
- Need validation guarantees
- Want multi-agent architecture

### Decision Framework

```
Is your task well-defined with clear "done" criteria?
  |
  NO -> Define criteria first, then consider Zeroshot
  |
  YES -> Do you need independent validation?
           |
           NO -> Is it PRD-driven with multiple stories?
           |      |
           |      YES -> Production Ralph
           |      NO -> Original Ralph
           |
           YES -> Is complexity STANDARD or above?
                   |
                   YES -> ZEROSHOT
                   NO -> Consider cost: Zeroshot vs simpler Ralph
```

---

## 11. Mental Models

### 11.1 Blind Validation

**The Courtroom Analogy:**

```
Traditional Ralph = Judge is also the defendant
- "Did I commit the crime? Let me think... No, I don't think so."
- Conflict of interest inherent in self-assessment

Zeroshot = Separation of prosecution and defense
- Worker presents the case (implementation)
- Validators judge without knowing the reasoning
- Verdict based purely on evidence (code state)
```

### 11.2 Complexity Routing

**The Hospital Triage Analogy:**

```
TRIVIAL  = Band-aid station     (single file, no validation)
SIMPLE   = Urgent care          (worker + 1 validator)
STANDARD = Emergency room       (planner + worker + 2 validators)
CRITICAL = Operating theater    (senior planner + worker + 5 specialists)
```

Resources match severity. Don't waste an OR on a papercut.

### 11.3 Message Bus Coordination

**The Restaurant Kitchen Analogy:**

```
MessageBus = The ticket wheel
Ledger     = The ticket history
Agents     = Kitchen stations (prep, grill, salad, expo)
Triggers   = "Fire when X is ready"

One ticket triggers multiple stations
Each station works independently
Expo (orchestrator) coordinates final output
```

### 11.4 Zero-Shot Learning Concept

The name "Zeroshot" evokes machine learning's zero-shot learning:

**In ML:** Classifying without prior examples of that class
**In Zeroshot CLI:** Validators assess without prior context of implementation

The validator receives:
- Current file state
- Acceptance criteria
- NO implementation history
- NO worker reasoning

This is "zero-shot validation" - judging from the result alone.

---

## 12. Checkpoints

### After Installation

**You should see:**
```bash
$ zeroshot --version
@covibes/zeroshot v1.x.x

$ zeroshot providers
Available providers:
  * claude (default)
    codex
    gemini
```

**If you don't see this:**
- Check Node.js version (`node --version` should be 18+)
- Reinstall: `npm install -g @covibes/zeroshot`
- Check PATH includes npm global bin

### After First Run

**You should see:**
- Conductor classification output
- Workflow template selection
- Agent spawn messages
- Validation results (ACCEPT/REJECT)
- Final status

**If run hangs:**
- Check provider authentication
- Check issue exists and is accessible
- Try with `--verbose` flag

### After PR Creation

**You should see:**
- Git worktree creation message
- Implementation commits
- PR URL in output
- Validation summary

**If PR fails:**
- Check `gh auth status`
- Ensure branch push permissions
- Check for protected branch rules

---

## 13. Troubleshooting

### Common Problems

| Problem | Cause | Solution |
|---------|-------|----------|
| "No providers configured" | Missing provider CLI | `npm install -g @anthropic-ai/claude-code && claude auth login` |
| "Rate limited" | Too many API calls | Wait 60s, consider model level reduction |
| "Context overflow" | Task too complex | Use STANDARD/CRITICAL complexity, or split task |
| Validator always rejects | Vague acceptance criteria | Make criteria specific and verifiable |
| Docker fails | Missing Docker daemon | Start Docker Desktop/daemon |
| Worktree conflict | Branch exists | `git worktree prune` then retry |
| Resume fails | Cluster state corrupted | `zeroshot kill <id>` and start fresh |
| "Agents receive no context" | Known issue #140 | Check for updates, use latest version |
| Windows errors | Platform not fully supported | Use WSL2 or Linux/macOS |

### Debugging Commands

```bash
# View cluster state
sqlite3 ~/.zeroshot/*.db "SELECT * FROM messages WHERE cluster_id='<id>' ORDER BY timestamp"

# Export for analysis
zeroshot export <cluster-id> > debug.md

# Check agent logs
zeroshot logs <cluster-id>

# Verbose mode
zeroshot run 123 --verbose

# Kill stuck cluster
zeroshot kill <cluster-id>
```

### Recovery Procedures

**Interrupted Run:**
```bash
# Find cluster ID
zeroshot list

# Resume
zeroshot resume <cluster-id>
```

**Corrupted State:**
```bash
# Kill and restart
zeroshot kill <cluster-id>
zeroshot run <original-issue>
```

**Stale Worktrees:**
```bash
# Clean up git worktrees
git worktree prune
git branch -D zeroshot/*  # Clean up branches
```

---

## 14. Source Attribution

### Primary Source

| Field | Value |
|-------|-------|
| Repository | github.com/covibes/zeroshot |
| License | MIT |
| Foundation | Anthropic Claude Code |
| Documentation | README.md, CLAUDE.md, AGENTS.md |
| Community | Discord: discord.gg/PdZ3UEXB |

### Key Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Installation, basic usage |
| `CLAUDE.md` | Architecture, cluster schemas, agent primitives |
| `AGENTS.md` | Multi-agent coordination overview |
| `CONTRIBUTING.md` | Development setup, testing |
| `docs/providers.md` | Provider setup, model levels |
| `cluster-templates/` | Workflow configurations |

### Related Patterns

| Pattern | Relationship |
|---------|-------------|
| Original Ralph | Foundational concept (simpler) |
| Production Ralph | Alternative approach (PRD-driven) |
| Gas Town | Can integrate as factory worker |
| CC Mirror | Multi-model experimentation |

---

## Tags

`#orchestration` `#zeroshot` `#multi-agent` `#blind-validation` `#covibes` `#provider-agnostic` `#crash-recovery` `#isolation` `#complexity-routing` `#level-5` `#sqlite-ledger` `#message-bus`

---

## Document Metadata

| Field | Value |
|-------|-------|
| Extraction ID | 030-zeroshot-ralph |
| Created | 2026-01-19 |
| Agent | B3-T2-7 |
| Primary Source | github.com/covibes/zeroshot |
| Line Count | 750+ |
| Status | Complete |
| Reliability | High (public repo, active development) |
| Complexity Level | 5-6 (Multi-Agent Validation) |

---

## The Bottom Line

Zeroshot represents an evolution in AI coding agent orchestration:

**From:** Single agent validates its own work
**To:** Specialized agents with information barriers

**The Core Innovation:**
1. **Complexity Classification** - Route tasks to appropriate resources
2. **Blind Validation** - Validators can't rationalize poor work
3. **Crash Recovery** - SQLite persistence enables resume
4. **Provider Agnosticism** - Switch models without code changes
5. **Isolation Options** - Safe experimentation in containers

**Best For:**
- Complex implementations requiring validation guarantees
- Teams wanting independent code review
- Multi-provider cost/quality optimization
- Crash-resistant autonomous workflows

**Not Ideal For:**
- Simple tasks (overhead not justified)
- Exploratory work (needs clear "done" criteria)
- Cost-constrained scenarios (multi-agent = more API calls)

> "If you cannot describe what 'done' means, validators cannot verify it."

The pattern is powerful. The discipline is in knowing when to use it.

---

*Zeroshot by covibes - Multi-agent validation for autonomous engineering.*

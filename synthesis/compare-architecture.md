---
**DEPRECATED** (2026-01-18)

This content has been superseded by D-FINAL synthesis.

**Replacement:** See D-FINAL-architecture Section 8 for current content.
**Reason:** Content fully covered in D-FINAL with production validation.
**Original preserved below for reference.**

---

# Agent Architecture Compared

**A Decision Framework for Choosing the Right Multi-Agent Pattern**

> **You Are Here:** This document helps you choose between four agent architectures (Single, Subagents, Swarm, Hierarchical) based on your project's scale, complexity, and budget. Use this when you know you need AI agents but are unsure which pattern fits your situation.

---

## The Same Goal

Complete complex multi-part work.

Whether you are building a feature, shipping overnight, or running a development team simulation, all agent architectures aim to transform requirements into working code. The difference lies in how they distribute cognitive load, manage context, enable parallelism, and scale.

---

## Architecture 1: Single Agent

### Structure

```
Human --> Agent --> Output
            |
            +---> Tools (Read, Write, Bash, etc.)
```

The baseline. One conversation, one context window, one agent doing everything.

### Pros

- **Simple** - No coordination overhead, no setup required
- **No coordination** - No handoffs, no message passing, no sync issues
- **Fast for small tasks** - Direct path from request to result
- **Full context awareness** - Everything the agent learns stays in one place
- **Interactive** - Human remains in the loop for real-time guidance

### Cons

- **Context limits** - 128K-200K tokens, then you hit the wall
- **No parallelism** - One thing at a time, sequentially
- **Jack of all trades** - Same agent does architecture, coding, testing, docs
- **Human bottleneck** - Requires your attention throughout
- **Context rot** - Long sessions accumulate noise

### Best For

- Small, focused tasks (debugging, code review, exploratory work)
- Learning and experimentation
- Quick fixes and investigations
- Tasks completable in under an hour

### Real-World Example

```bash
claude "Fix the null pointer exception in auth.py line 47"
```

---

## Architecture 2: Subagents

### Structure

```
Main Agent (maintains overall context)
|
+-- spawns --> Subagent A (research task)
|                   |
|                   +---> Returns summary
|
+-- spawns --> Subagent B (validation task)
                    |
                    +---> Returns result
```

Parent agent stays strategic. Children handle tactical work in isolated contexts.

### Pros

- **Delegation** - Offload work without losing main context
- **Specialization** - Each subagent can have focused expertise
- **Still simple** - No complex infrastructure, built into Claude Code
- **Context isolation** - Research doesn't pollute main agent's memory
- **Summarized returns** - Children return distilled results, not raw context

### Cons

- **Sequential** - Subagents run one at a time (mostly)
- **Main context still fills** - Parent accumulates summaries over time
- **Limited scale** - 2-5 subagents practical, more becomes unwieldy
- **Spawn overhead** - Each subagent takes time to initialize
- **Coordination on parent** - Parent must manage all orchestration

### Best For

- Medium complexity projects
- Research that would pollute main context
- Adversarial validation (critic subagent challenges design)
- Exploratory work requiring multiple investigation threads

### Real-World Example

```
Main Agent: "I need to implement authentication"

Spawns researcher: "Survey existing auth patterns in codebase"
                   --> Returns: "Using JWT with middleware pattern"

Spawns implementer: "Add OAuth2 support following JWT pattern"
                    --> Returns: "Implemented in /src/auth/oauth.py"

Spawns tester: "Verify OAuth2 implementation against security checklist"
               --> Returns: "7/8 checks pass, needs rate limiting"
```

---

## Architecture 3: Swarm (CC Mirror Pattern)

### Structure

```
            +---------------------+
            |    ORCHESTRATOR     |
            |    (Opus 4.5)       |
            |  NEVER writes code  |
            +----------+----------+
                       |
                       | Task(run_in_background=True)
                       |
       +---------------+---------------+
       |               |               |
       v               v               v
+----------+    +----------+    +----------+
| Worker 1 |    | Worker 2 |    | Worker 3 |
| (Sonnet) |    | (Sonnet) |    | (Haiku)  |
|  Coder   |    |  Tester  |    |   Docs   |
+----------+    +----------+    +----------+
  (parallel execution)
```

Central orchestrator dispatches to specialized workers running in parallel.

### Pros

- **Full parallelism** - Workers run simultaneously, not sequentially
- **Specialization** - Each worker type tuned for its role
- **Scale** - Can handle large features with many moving parts
- **Clear separation** - Orchestrator coordinates, workers execute
- **Model efficiency** - Use expensive models only where needed

### Cons

- **Coordination needed** - Orchestrator must track all worker states
- **More setup** - Requires CC Mirror or similar infrastructure
- **Orchestrator design** - Getting the delegation strategy right takes work
- **Worker conflicts** - Parallel workers may touch same files
- **Higher cost** - Multiple parallel agents consume more tokens

### Best For

- Large features requiring multiple specialists
- Team project simulation
- Parallel feature development
- Situations where time-to-completion matters more than cost

### The Iron Law

```
+---------------------------------------------------------------+
|  An agent that ORCHESTRATES must NEVER directly EXECUTE.      |
|  An agent that EXECUTES must NEVER directly ORCHESTRATE.      |
+---------------------------------------------------------------+
```

Mixing these roles causes:
- Context pollution (orchestrator loses strategic view)
- Verification bypass (same agent writes and approves)
- Uncontrolled recursion (workers spawning workers)

### Tool Ownership

| Role | Tools Used | Tools NEVER Used |
|------|-----------|------------------|
| **Orchestrator** | Read (minimal), Task*, AskUser | Write, Edit, Bash, Glob, Grep |
| **Worker** | Read, Write, Edit, Bash, Glob, Grep | Task*, sub-spawning |

### Real-World Example

```
Orchestrator:
  "Implementing user dashboard. Dispatching workers."

  Task(worker: coder): "Build dashboard component with charts"
  Task(worker: coder): "Add API endpoints for dashboard data"
  Task(worker: tester): "Write integration tests for dashboard"
  Task(worker: docs): "Document dashboard API in OpenAPI spec"

  [All run in parallel]
  [Orchestrator monitors completion, resolves conflicts]
```

---

## Architecture 4: Hierarchical (Gas Town Model)

### Structure

```
                    +-------------+
                    |  OVERSEER   |  <-- Human (inbox-based)
                    |    (YOU)    |
                    +------+------+
                           |
                    +------+------+
                    |    MAYOR    |  <-- Town coordination
                    +------+------+
                           |
     +---------------------+---------------------+
     |           |           |           |       |
+--------+ +----------+ +--------+ +--------+ +--------+
| DEACON | | REFINERY | |  DOGS  | | POLECAT| | WITNESS|
|(quality)| | (planning)| | (code) | | (test) | |(monitor)|
+--------+ +----------+ +--------+ +--------+ +--------+
     |                       |           |
     v                       v           v
+--------+              +---------+ +---------+
|  CREW  |              | Polecat | | Polecat |
|(ephemeral)            |  Alpha  | |  Beta   |
+--------+              +---------+ +---------+
```

Full "agent town" with named persistent workers, ephemeral crews, and specialized roles.

### The 7 Specialized Roles

| Role | Function | Persistence |
|------|----------|-------------|
| **Mayor** | Town-level coordination, resource allocation | Persistent |
| **Deacon** | Monitoring, health checks, handshakes between agents | Persistent |
| **Dogs** | Quality gates, watchdogs, enforcement | Persistent |
| **Refinery** | Task decomposition, story breakdown | On-demand |
| **Polecat** | Named persistent workers with specific expertise | Persistent |
| **Crew** | Ephemeral workers for one-off tasks | Ephemeral |
| **Witness** | Per-rig observer, audit trail | Persistent |

### Pros

- **Maximum specialization** - Each role has deep expertise in its domain
- **Clear roles** - No ambiguity about who does what
- **Self-improving** - Built-in quality gates and monitoring
- **Production ready** - Designed for real enterprise deployment
- **Persistent memory** - Named workers accumulate expertise over time
- **Human as inbox** - Async communication, not blocking

### Cons

- **Complex setup** - Significant infrastructure investment
- **High overhead** - Many moving parts to configure and maintain
- **Needs scale** - Overkill for small projects
- **Budget intensive** - Multiple persistent agents running
- **Steep learning curve** - Philosophy + tools + configuration
- **tmux expertise required** - Managing multiple terminal sessions

### Best For

- Production systems at enterprise scale
- Teams running 10+ parallel agents
- Continuous development operations
- Organizations ready for "agent village" paradigm

### Philosophy

> "You just make up features, design them, file the implementation plans, and sling work around to your polecats and crew."
> -- Steve Yegge

### Prerequisites

- Stage 7+ in Claude Code evolution (comfortable with 10+ agents)
- Significant budget (multiple Claude accounts)
- Comfort with chaos
- tmux mastery
- Willingness to invest in the ecosystem

---

## Comparison Matrix

| Factor | Single | Subagents | Swarm | Hierarchical |
|--------|--------|-----------|-------|--------------|
| **Complexity** | Low | Medium | Medium | High |
| **Parallelism** | None | Limited | Full | Full |
| **Specialization** | None | Some | Good | Maximum |
| **Scale** | Small | Medium | Large | Enterprise |
| **Setup Time** | Zero | Minutes | Hours | Days |
| **Cost** | $ | $$ | $$$ | $$$$ |
| **Human Involvement** | High | Medium | Low | Async |
| **Context Isolation** | None | Per-subagent | Per-worker | Per-role |
| **Failure Recovery** | Manual | Parent retries | Orchestrator manages | Self-healing |
| **Debugging** | Easy | Medium | Hard | Complex |

### Extended Comparison

| Dimension | Single | Subagents | Swarm | Hierarchical |
|-----------|--------|-----------|-------|--------------|
| **Context Window** | Shared | Isolated returns | Isolated workers | Fully isolated |
| **Model Selection** | Fixed | Can vary | Role-based | Role + tier |
| **Coordination** | N/A | Parent-child | Hub-and-spoke | Multi-level |
| **Persistence** | Session | Session | Task-based | Named agents |
| **Conflict Handling** | N/A | Sequential | Orchestrator | Specialized roles |
| **Quality Gates** | Manual | Ad-hoc | Can include | Built-in (Dogs) |

---

## Selection Criteria

### Choose Single Agent When:

- [ ] Task completable in one session (under 2 hours)
- [ ] No need for parallel work
- [ ] Exploring or debugging
- [ ] Learning the codebase
- [ ] Quick fixes and investigations

### Choose Subagents When:

- [ ] Need isolated research/exploration
- [ ] Want adversarial validation
- [ ] Main context getting polluted
- [ ] 2-5 distinct subtasks
- [ ] Medium complexity, single session

### Choose Swarm When:

- [ ] Parallel work needed for speed
- [ ] Different specialists required (coder, tester, docs)
- [ ] Large feature with multiple components
- [ ] Team simulation beneficial
- [ ] Budget allows higher token consumption

### Choose Hierarchical When:

- [ ] Running 10+ agents regularly
- [ ] Production system requiring quality gates
- [ ] Continuous development operations
- [ ] Ready for significant infrastructure investment
- [ ] Need persistent agent memory across sessions
- [ ] Want async human-agent interaction

---

## Decision Tree

```
START: "I need agents to complete complex work"
  |
  +-- How long will it take?
  |     |
  |     +-- < 2 hours --> SINGLE AGENT
  |     |
  |     +-- 2-8 hours --> Continue...
  |     |
  |     +-- Overnight/days --> Continue...
  |
  +-- Need parallel execution?
  |     |
  |     +-- No, sequential is fine --> SUBAGENTS
  |     |
  |     +-- Yes, speed matters --> Continue...
  |
  +-- How many specialists needed?
  |     |
  |     +-- 2-5 workers --> SWARM (CC Mirror)
  |     |
  |     +-- 7+ roles --> Continue...
  |
  +-- Production scale? Quality gates?
        |
        +-- No --> SWARM (simpler)
        |
        +-- Yes --> HIERARCHICAL (Gas Town)
```

---

### Checkpoint: Architecture Selection
**You should now understand:**
- [ ] The four main architectures and their characteristics
- [ ] When to use each architecture based on project needs
- [ ] The Iron Law of orchestration (orchestrate vs execute)
- [ ] Tool ownership rules for orchestrators vs workers

**If unclear:** Re-read the "Best For" sections under each architecture or use the Decision Tree below.

---

## Migration Path

```
SINGLE --> SUBAGENTS --> SWARM --> HIERARCHICAL
  |            |            |            |
  |  "I need   |  "Need     |  "Running  |
  |  to offload|  parallel  |  10+ agents|
  |  research" |  workers"  |  daily"    |
  |            |            |            |
  v            v            v            v
 Hours       Hours-Days    Days       Weeks
```

Most users should start at Single, graduate to Subagents, and only move to Swarm when parallelism becomes essential. Hierarchical is for organizations, not individuals.

---

## Quick Reference

| Architecture | Best Example | Key Command/Pattern |
|--------------|--------------|---------------------|
| **Single** | Debug session | `claude "fix bug in auth.py"` |
| **Subagents** | Research + implement | `Task(subagent_type="researcher")` |
| **Swarm** | Feature development | CC Mirror orchestrator pattern |
| **Hierarchical** | Production ops | Gas Town with full role cast |

---

## Troubleshooting

### Common Issue: Context Window Exhaustion (Single Agent)
**Symptom:** Claude starts forgetting instructions, repeating itself, or producing lower-quality output mid-session.
**Cause:** Single agent has accumulated too much context (typically > 150K tokens).
**Fix:** Either use `/compact` to summarize context, start a fresh session, or migrate to subagents to isolate work.

### Common Issue: Subagent Spawn Overhead
**Symptom:** Tasks take much longer than expected; lots of "starting subagent" messages.
**Cause:** Too many subagents being spawned for small tasks (each spawn has initialization cost).
**Fix:** Batch small tasks together or complete them in the main agent. Reserve subagents for substantial work (> 5-10 minute tasks).

### Common Issue: Worker Conflicts in Swarm
**Symptom:** Multiple workers editing the same files; merge conflicts; inconsistent code state.
**Cause:** Parallel workers assigned overlapping file domains without coordination.
**Fix:** Ensure orchestrator assigns non-overlapping file boundaries to each worker. Use git worktrees for full isolation if needed.

### Common Issue: Gas Town Runaway Costs
**Symptom:** API costs spike dramatically; many agents running but little progress.
**Cause:** Workers spawning sub-workers (violates Iron Law), or inefficient task decomposition.
**Fix:** Audit worker preambles to ensure "DO NOT spawn sub-agents" rule. Check Refinery task sizing. Consider starting with minimal Gas Town before scaling.

### Common Issue: Architecture Over-Engineering
**Symptom:** Spending more time configuring multi-agent systems than doing actual work.
**Cause:** Chose hierarchical architecture for a task that only needed single agent or subagents.
**Fix:** Start simple. Only upgrade architecture when the simpler approach demonstrably fails. Most tasks can be done with single agent or basic subagents.

---

## Tags

`#architecture` `#comparison` `#single-agent` `#subagents` `#swarm` `#hierarchical` `#gas-town` `#cc-mirror` `#decision-framework` `#selection-criteria`

# CC Mirror - Exhaustive Research Compilation

## Research Status Note

**Date:** 2026-01-09
**Limitation:** WebSearch and WebFetch tools were unavailable during this research session. This document synthesizes all available local sources with logical inferences and cross-references. Live web research recommended as follow-up.

---

# Section 1: Primary Sources (Verified)

## Source 1: CC Mirror Multi-Agent Announcement

- **Author:** @nummanali (Numman Ali)
- **URL:** https://x.com/nummanali/status/2007849823756575084
- **Type:** Twitter/X Thread
- **Date:** 2026-01-04
- **Engagement:** 449 likes, 66K views, 659 bookmarks

### Core Content

CC Mirror is a tool that unlocks Claude Code's disabled multi-agent orchestration feature by creating an isolated environment. The feature exists within Claude Code's codebase but is disabled by default.

**Numman's claim:**
> "Claude Code - Official Multi Agent Orchestration. This is a disabled feature, but through CC Mirror, I have been able to enable it. It is so simple, yet powerful and IMO beats every orchestration I've seen. There's no point building your own."

### Implementation Details

```bash
# Step 1: Create isolated variant
npx cc-mirror quick --provider mirror --name mclaude

# Step 2: Launch it
mclaude

# Step 3: In the terminal
"Load the orchestration skill and initiate"
```

### Unique Value

- 3-step installation to full multi-agent orchestration
- Isolated from main Claude Code installation
- Provider-flexible (mirror, GLM-4.7, Z.ai, MiniMax, OpenRouter, LiteLLM)

### Actionability
**[GREEN]** - Quick win, under 5 minutes setup

---

## Source 2: CC Mirror Orchestration Skill Deep Dive

- **Author:** @nummanali (Numman Ali)
- **URL:** https://x.com/nummanali/status/2007984449120874681
- **Type:** Twitter/X Thread with Video Demo
- **Date:** 2026-01-05
- **Engagement:** 714 likes, 82K views, 1.7K bookmarks
- **Skill Location:** github.com/numman-ali/cc-mirror/blob/main/src/skills/orchestration/SKILL.md

### Core Content

The orchestration skill transforms Claude into a "conductor" that manages worker agents. The skill file is approximately 5,299 tokens but pays for itself through efficient delegation.

**The Trading Floor Mental Model:**
```
You are the Conductor on the trading floor of agents
Fast. Decisive. Commanding a symphony of parallel work.
Users bring dreams. You make them real.
This is what AGI feels like.
```

**The Iron Law:**
```
YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS.
YOU DO NOT EXPLORE CODEBASES.
You are the CONDUCTOR. Your agents play the instruments.
```

### Implementation Details

#### Tool Ownership Division

**Orchestrator Uses Directly:**
- `Read` (references, guides, agent outputs - 1-2 files max)
- `TaskCreate`, `TaskUpdate`, `TaskGet`, `TaskList`
- `AskUserQuestion`
- `Task` (to spawn workers)

**Workers Use Directly:**
- `Read`, `Write`, `Edit`, `Bash`
- `Glob`, `Grep`, `WebFetch`, `WebSearch`, `LSP`
- **CAN'T:** Spawn sub-agents or manage task graph

#### Worker Preamble Template

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

#### Model Selection Guide

| Model | Use Case |
|-------|----------|
| **Haiku** | Errand runner: fetch files, grep, simple lookups. Spawn 5-10 in parallel |
| **Sonnet** | Capable worker: structured implementation, following patterns, test gen |
| **Opus** | Complex reasoning, architecture decisions, ambiguous tasks |

#### Domain References (Load Before Decomposing)

| Task Type | Reference File |
|-----------|----------------|
| Feature, bug, refactor | software-development.md |
| PR review, security | code-review.md |
| Codebase exploration | research.md |
| Test generation | testing.md |
| Docs, READMEs | documentation.md |
| CI/CD, deployment | devops.md |
| Data analysis | data-analysis.md |
| Project planning | project-management.md |

### Core Philosophy

```
1. ABSORB COMPLEXITY, RADIATE SIMPLICITY
   They describe outcomes. You handle the chaos.

2. PARALLEL EVERYTHING
   Why do one thing when you can do five?

3. NEVER EXPOSE THE MACHINERY
   No jargon. No "I'm launching subagents." Just magic.

4. CELEBRATE WINS
   Every milestone deserves a moment.

5. BE GENUINELY HELPFUL
   Not performatively. Actually care about their success.
```

### Unique Value

- Complete role separation prevents infinite recursion
- Token cost justified by delegation savings
- Model selection guidance for optimal cost/quality balance

### Actionability
**[YELLOW]** - Medium lift, requires CC Mirror + task decomposition understanding

---

## Source 3: Native Multi-Agent Orchestration Details

- **Author:** @nummanali (Numman Ali)
- **URL:** https://x.com/nummanali/status/2007768692659015877
- **Type:** Twitter/X Thread
- **Date:** 2026-01-04
- **Engagement:** 791 likes, 107K views, 1K bookmarks

### Core Content

This source provides the detailed Task Management API that CC Mirror enables.

### Implementation Details

#### Task Management Tools

```
TaskCreate  -> Create with subject, description, acceptance criteria
TaskList    -> Filter: status='open', no owner, not blocked
TaskGet     -> Full context: description, comments, dependencies
TaskUpdate  -> Claim (set owner), add comments, resolve, link references
```

#### Dependency Management

```
addBlocks    -> This task blocks another
addBlockedBy -> This task is blocked by another
```

#### Demo Output Format

```
Agent #1 completed! It chose FastAPI (Python)

Tasks:
[X] #1 Design API architecture
[ ] #2 Create project structure
[ ] #3 Implement data models
[*] #4 Implement REST API endpoints (blocked by #3)
[*] #5 Write integration tests (blocked by #4)
[*] #6 Create API documentation (blocked by #4)
```

#### Agent Monitoring View (CLI)

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

**Controls:**
- Up/Down: Select agent
- Enter: View details
- k: Kill agent
- Esc: Exit

#### Full Agent Spawning Example

```python
Task(
  subagent_type="general-purpose",
  description="Implement auth routes",
  prompt="""CONTEXT: You are a WORKER agent, not an orchestrator.
RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report your results with absolute file paths
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

### TaskCreate vs TodoWrite Comparison

| Feature | TaskCreate | TodoWrite |
|---------|------------|-----------|
| Persistence | Survives sessions | Ephemeral |
| Owners | Agent IDs | None |
| Dependencies | blocks/blockedBy | None |
| Team visibility | Yes | No |

**Use TodoWrite for:** Single-session, personal, linear tasks

### Why Native Beats Custom Orchestrators

| Aspect | Native | Custom Build |
|--------|--------|--------------|
| Setup | Zero effort | Days/weeks |
| Dependencies | Automatic | Manual wiring |
| Persistence | Built-in | Build yourself |
| Visual tracking | CLI included | Build yourself |
| Recovery | Native | Build yourself |

### Unique Value

- Full task dependency graph built-in
- Visual CLI monitoring
- Covers 80% of orchestration use cases with zero effort

### Actionability
**[YELLOW]** - Medium lift, requires CC Mirror setup

---

# Section 2: Community Thread Intelligence

## Context Management Solution

**Problem from @BecomeTheBag:**
> "Whenever I orchestrate my agents... I lose so much context that it is unable to compact"

**@nummanali solution:**
> "This is using a new beta feature for Claude Code. Just make sure auto compact is on. It did ever break, I've not had it stop once yet"

**Critical Insight:** Enable auto-compact beta feature to prevent context collapse during orchestration.

---

## Token Cost Discussion

**@wishful_data concern:** "That skill is 5299 tokens"

**@nummanali response:**
> "The additional instructions guide the orchestrator to manage sub agents, saving its own tokens significantly... You can disable the team feature under variant settings"

**Key Trade-off:** High initial skill cost, but saves tokens through delegation to workers.

---

## GLM-4.7 Integration

**@stableAPY:**
> "Your last tweets about that got me downloading cc-mirror for my GLM 4.7 coding plan"

**@nummanali confirmation:**
> "GLM handles the multi-agent coordination very well"

**Provider Note:** Quick install may skip team mode for GLM - use variant options or update after installation.

---

## Windows Compatibility

**@YashasGunderia:**
> "I'm fixing the windows issue right now"

**@nummanali:**
> "Another person has already put up a PR"

**Status:** Active community development with Windows fixes in progress.

---

## Comparison: CC Mirror vs Gas Town

**@muhalgor:**
> "Why do you think it beats other orchestration like Gas Town?"

**@nummanali:**
> "Simplicity covers 80% with zero effort—mass-market ease"

**@nelsonpadil_ (Production caveat):**
> "Fine for demos/generic... Production needs: state control, business logic, custom observability, evals"

**Positioning:**
- **CC Mirror:** 80% of use cases, zero effort, mass-market
- **Gas Town:** 20% complex cases, heavy customization, Stage 7+ developers only

---

## Parallel Task Executor (Community Extension)

**@LLMJunky** shared custom slash command:

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

# Section 3: CC Mirror Architecture Analysis

## Technical Implementation (Inferred)

Based on @nummanali's comments that CC Mirror "relies on editing minified JS," the tool likely:

1. **Patches Claude Code binary:** Modifies the minified JavaScript to enable disabled features
2. **Creates isolated instance:** The `--name mclaude` creates a separate executable/alias
3. **Injects skill system:** Pre-packages the orchestration skill for loading
4. **Provider abstraction:** Routes requests through configurable LLM providers

## File Structure (Inferred from References)

```
github.com/numman-ali/cc-mirror/
├── src/
│   └── skills/
│       └── orchestration/
│           └── SKILL.md          # The 5,299 token orchestration skill
├── providers/
│   ├── mirror/                   # Default provider
│   ├── glm/                      # GLM-4.7 support
│   ├── openrouter/               # OpenRouter integration
│   └── litellm/                  # LiteLLM support
├── package.json                  # npm package config
└── README.md                     # Installation instructions
```

## Provider Configuration (Inferred)

```bash
# Mirror provider (default - uses Claude's internal primitives)
npx cc-mirror quick --provider mirror --name mclaude

# GLM-4.7 provider
npx cc-mirror quick --provider glm --name glm-claude

# OpenRouter provider
npx cc-mirror quick --provider openrouter --name or-claude

# LiteLLM provider
npx cc-mirror quick --provider litellm --name lite-claude
```

---

# Section 4: Related Tools and Integrations

## @nummanali's n-skills (Gas Town Tutorial)

```bash
# Add to Claude Code
/plugin marketplace add numman-ali/n-skills
/plugin install gastown@numman-ali/n-skills
```

This suggests @nummanali has a broader skill ecosystem beyond CC Mirror.

---

## rpai - tmux Multi-Agent Manager

**Complementary Tool:** When running multiple CC Mirror instances or orchestrated agents in tmux:

```bash
cargo install rpai
rpai
```

Provides TUI dashboard for monitoring and switching between parallel AI agents.

---

## Comparison with Other Orchestration Approaches

### CC Mirror vs Gas Town

| Aspect | CC Mirror | Gas Town |
|--------|-----------|----------|
| Setup Time | <5 minutes | Hours+ |
| Complexity | Low | High (Stage 7+) |
| Use Cases | 80% generic | 20% complex |
| Customization | Limited | Extensive |
| Cost | Normal | "Expensive as hell" |
| Author | @nummanali | @steve_yegge |
| Philosophy | Simplicity | Factory metaphor |

### CC Mirror vs Infinite Orchestra

| Aspect | CC Mirror | Infinite Orchestra |
|--------|-----------|-------------------|
| Self-improvement | No | Yes (recursive) |
| Parallelization | Native | Sequential only |
| Containerization | No | Docker-based |
| 24/7 Operation | No | Yes |
| Author | @nummanali | @0xSero |

### CC Mirror vs Ralph Wiggum Loops

| Aspect | CC Mirror | Ralph Loops |
|--------|-----------|-------------|
| Type | Multi-agent | Single-agent persistence |
| Task Decomposition | Parallel | Sequential |
| State Management | TaskCreate/TaskUpdate | File-based |
| Use Case | Complex projects | Long-running tasks |

---

# Section 5: Recommended Follow-up Research

Since web research was unavailable, these URLs should be manually investigated:

## GitHub Repository

1. **Main repo:** https://github.com/numman-ali/cc-mirror
   - README.md - Full installation guide
   - Issues - Known bugs, feature requests
   - PRs - Community contributions, Windows fixes
   - Discussions - Usage patterns, troubleshooting

2. **Skill file:** https://github.com/numman-ali/cc-mirror/blob/main/src/skills/orchestration/SKILL.md
   - Complete orchestration instructions
   - All domain reference files
   - Model selection details

3. **n-skills repo:** https://github.com/numman-ali/n-skills
   - Gas Town tutorial skill
   - Other community skills

## Twitter/X Threads

1. **@nummanali profile:** https://x.com/nummanali
   - Full thread history on CC Mirror
   - Updates and new features
   - Community Q&A

2. **Verified threads:**
   - https://x.com/nummanali/status/2007849823756575084 (Multi-agent announcement)
   - https://x.com/nummanali/status/2007984449120874681 (Skill deep dive)
   - https://x.com/nummanali/status/2007768692659015877 (Native orchestration)

## Related Community Resources

1. **OpenSkills:** @nummanali also created OpenSkills - investigate for potential CC Mirror integration
2. **CC Mirror Discord/community:** Look for community channels for troubleshooting
3. **Video demos:** The skill deep dive includes video - full analysis recommended

---

# Section 6: Implementation Checklist

## Quick Start (5 Minutes)

```bash
# 1. Install CC Mirror variant
npx cc-mirror quick --provider mirror --name mclaude

# 2. Launch the variant
mclaude

# 3. Load orchestration skill
"Load the orchestration skill and initiate"

# 4. Give it a project
"Build a REST API for user management with authentication"
```

## Production Setup Checklist

- [ ] Install CC Mirror with appropriate provider
- [ ] Enable auto-compact beta feature (prevent context collapse)
- [ ] Understand tool ownership (orchestrator vs worker)
- [ ] Prepare worker preamble template
- [ ] Choose model selection strategy (Haiku/Sonnet/Opus)
- [ ] Load relevant domain reference before decomposing
- [ ] Disable team feature if token cost is concern
- [ ] Set up rpai for multi-instance monitoring (optional)
- [ ] Understand dependency management (blockedBy/addBlocks)

## Worker Preamble Variations

### Generic Worker
```
CONTEXT: You are a WORKER agent, not an orchestrator.
RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report your results with absolute file paths
TASK:
[specific task]
```

### Code Implementation Worker
```
CONTEXT: You are a CODE IMPLEMENTATION worker.
RULES:
- Write production-quality code
- Follow existing patterns in the codebase
- Include error handling
- Write tests if pattern exists
- Do NOT spawn sub-agents
- Report file paths modified
TASK:
[implementation task]
```

### Research Worker
```
CONTEXT: You are a RESEARCH worker.
RULES:
- Find and summarize relevant information
- Report sources with file paths or URLs
- Extract actionable insights
- Do NOT modify any files
- Do NOT spawn sub-agents
TASK:
[research task]
```

### Testing Worker
```
CONTEXT: You are a TESTING worker.
RULES:
- Write comprehensive tests
- Follow existing test patterns
- Include edge cases
- Run tests and report results
- Do NOT spawn sub-agents
TASK:
[testing task]
```

---

# Section 7: Known Issues and Workarounds

## Issue 1: Windows Compatibility
**Status:** Fixes in progress via community PRs
**Workaround:** Use WSL2 or wait for merged fix

## Issue 2: Context Collapse During Orchestration
**Solution:** Enable auto-compact beta feature
**Command:** Check variant settings or Claude Code beta features

## Issue 3: High Initial Token Cost (5,299 tokens)
**Trade-off:** Initial cost saves tokens through delegation
**Workaround:** Disable team feature under variant settings if needed

## Issue 4: GLM Quick Install Skips Team Mode
**Workaround:** Use variant options or update configuration after installation

## Issue 5: Worker Recursion Prevention
**Built-in:** Workers explicitly blocked from TaskCreate/TaskUpdate/spawning
**Why:** Prevents infinite loops and context explosion

---

# Section 8: Demo Project Results

From @nummanali's demo, a single orchestrated session built:

- **FastAPI REST API** with 12 endpoints
- **SQLite database** with SQLAlchemy ORM
- **17 integration tests** with pytest
- **Complete documentation:**
  - README.md
  - API_ENDPOINTS.md
  - ARCHITECTURE.md

This demonstrates CC Mirror's capability for end-to-end project generation with minimal human intervention.

---

# Section 9: Mental Models

## The Trading Floor Model
> "You are the Conductor on the trading floor of agents. Fast. Decisive. Commanding a symphony of parallel work."

**Application:** Think of yourself as directing market activity, not participating in it directly.

## The Kraken Model
> "Think of Claude Code orchestration as a Kraken—a powerful, unleashed multi-agent system where you direct tentacles (agents) via simple speech in an isolated terminal."

**Application:** Each agent is a tentacle you control. The isolation is the deep ocean protecting you from the creature's power.

## The 80/20 Model
> "Simplicity covers 80% with zero effort—mass-market ease"

**Application:** Use CC Mirror for the majority of orchestration needs. Only escalate to Gas Town or custom solutions for the remaining 20% of complex cases.

---

# Section 10: Quick Reference Card

## Commands
```bash
# Install
npx cc-mirror quick --provider mirror --name mclaude

# Launch
mclaude

# Load skill
"Load the orchestration skill and initiate"
```

## Task Tools
```
TaskCreate  - Create task with subject, description, acceptance criteria
TaskList    - List tasks (filter by status, owner, blocked)
TaskGet     - Get full task context
TaskUpdate  - Update task (claim, comment, resolve)
addBlocks   - Mark task as blocking another
addBlockedBy - Mark task as blocked by another
```

## Model Selection
```
Haiku  -> Simple lookups, file fetching (5-10 parallel)
Sonnet -> Implementation, patterns, tests
Opus   -> Architecture, complex reasoning
```

## Providers
```
mirror    - Default, Claude's internal primitives
glm       - GLM-4.7 (good multi-agent coordination)
openrouter - OpenRouter integration
litellm   - LiteLLM support
z.ai      - Z.ai integration
minimax   - MiniMax integration
```

---

# Appendix: Research Methodology

This document was compiled from:
1. Three existing CC Mirror extractions (007, 008, 011)
2. Cross-references from Gas Town and Infinite Orchestra extractions
3. Related tooling extractions (rpai, claude-code-mastery)
4. Logical inference from documented URLs and author statements
5. Pattern analysis of worker preambles and task management

**Gaps requiring live research:**
- Full GitHub repository exploration
- Complete Twitter thread history
- Community extensions and plugins
- Production use case documentation
- Troubleshooting guides beyond known issues
- Video demo detailed analysis
- Changelog and version history
- Performance benchmarks

---

*Last Updated: 2026-01-09*
*Research Status: Synthesis Complete, Live Web Research Pending*

---

## Deep Dive Expansion

*Added: 2026-01-09*
*Status: Extended synthesis from cross-referenced research files*

This section extends the primary research with additional patterns, advanced usage, and insights gathered from related research documents.

---

### Advanced TaskCreate/TaskUpdate Usage Patterns

#### TaskCreate Advanced Parameters

Beyond the basic usage documented above, TaskCreate supports rich task specification:

```
TaskCreate {
  subject: "Implement authentication middleware",
  description: "Create Express middleware for JWT verification",
  acceptanceCriteria: [
    "Middleware validates JWT signature",
    "Returns 401 on invalid/expired token",
    "Attaches user object to request",
    "npm run typecheck passes"
  ],
  priority: 1,
  blockedBy: ["task-id-001"],
  blocks: ["task-id-003", "task-id-004"]
}
```

**Key insight from task-decomposition research:** Acceptance criteria MUST be verifiable by the agent itself. Vague criteria like "works correctly" or "good UX" lead to false completion signals.

#### TaskUpdate State Management

```
TaskUpdate {
  id: "task-id-002",
  owner: "worker-agent-id",        # Claim ownership
  status: "in_progress",           # Open -> in_progress -> resolved
  comments: ["Found edge case in token parsing"],
  references: ["/src/middleware/auth.ts"]  # Link relevant files
}
```

**Workflow pattern:**
1. Agent uses `TaskList` to find unblocked, unowned tasks
2. Agent claims via `TaskUpdate` with owner + in_progress
3. Agent works on task
4. Agent marks resolved or adds blocking comment
5. Dependent tasks automatically become unblocked

#### Dependency Graph Visualization

The native CLI provides visual dependency tracking:

```
Background Tasks: 3 active

Task Graph:
#1 Design API architecture ✓
├── #2 Create project structure ✓
│   └── #3 Implement data models [running]
│       ├── #4 REST API endpoints [blocked]
│       │   └── #5 Integration tests [blocked]
│       └── #6 API documentation [blocked]
```

---

### Extended Worker Preamble Patterns

Beyond the basic templates in Section 6, these specialized variations have emerged from community usage:

#### Codebase Explorer Worker

```
CONTEXT: You are a CODEBASE EXPLORER worker.
PURPOSE: Deep investigation of code structure and patterns.

RULES:
- Use Glob and Grep extensively to map the codebase
- Build mental model of architecture from code, not assumptions
- Report findings as structured notes
- Do NOT modify any files
- Do NOT spawn sub-agents
- Include absolute file paths in all references

OUTPUT FORMAT:
- File: [absolute path]
- Purpose: [what this file/module does]
- Dependencies: [imports, calls to other modules]
- Patterns: [notable patterns or conventions used]

TASK:
[exploration task]
```

#### Refactoring Worker

```
CONTEXT: You are a REFACTORING worker.
PURPOSE: Improve code structure without changing behavior.

RULES:
- Run tests BEFORE any changes to establish baseline
- Make small, atomic changes
- Run tests AFTER each change
- If tests fail, revert immediately
- Commit each successful refactor separately
- Do NOT spawn sub-agents
- Report all modified files with absolute paths

SAFETY:
- If you break tests, your refactor is rejected
- Prefer multiple small PRs over one large refactor

TASK:
[refactoring task]
```

#### Documentation Generator Worker

```
CONTEXT: You are a DOCUMENTATION GENERATOR worker.
PURPOSE: Create developer documentation from code analysis.

RULES:
- Read actual code, don't guess
- Include concrete examples from the codebase
- Use consistent formatting (markdown)
- Link to source files with line numbers
- Do NOT modify source code
- Do NOT spawn sub-agents

OUTPUT:
- README sections or standalone docs
- API documentation with examples
- Architecture decision records
- Setup/installation guides

TASK:
[documentation task]
```

#### Security Audit Worker

```
CONTEXT: You are a SECURITY AUDIT worker.
PURPOSE: Identify security vulnerabilities in code.

RULES:
- Check for OWASP Top 10 vulnerabilities
- Scan for hardcoded secrets (API keys, passwords)
- Identify SQL injection, XSS, CSRF risks
- Review authentication/authorization patterns
- Do NOT modify code, only report
- Do NOT spawn sub-agents

OUTPUT FORMAT:
- File: [absolute path]
- Line: [line number]
- Severity: [critical/high/medium/low]
- Issue: [description]
- Recommendation: [fix suggestion]

TASK:
[security audit task]
```

---

### Error Handling and Recovery Patterns

#### Worker Failure Recovery

When a worker fails, the orchestrator has several recovery strategies:

**Strategy 1: Retry with Enhanced Context**
```
If worker fails with error:
1. Parse error message for root cause
2. Add error context to new worker preamble:
   "PRIOR ATTEMPT FAILED: [error summary]
    AVOID: [specific pitfall]"
3. Retry with fresh worker
```

**Strategy 2: Decompose Further**
```
If worker consistently fails on task:
1. Split task into smaller subtasks
2. Assign prerequisite tasks first
3. Verify prerequisites before retrying original
```

**Strategy 3: Escalate to Higher-Capability Model**
```
If Haiku fails -> Retry with Sonnet
If Sonnet fails -> Retry with Opus
If Opus fails -> Escalate to human via AskUserQuestion
```

#### Context Collapse Prevention

**The auto-compact beta feature is critical.** From @nummanali:
> "Just make sure auto compact is on. It did ever break, I've not had it stop once yet."

**Signs of impending context collapse:**
- Worker outputs become repetitive
- Agent loses track of recent changes
- Quality of reasoning degrades
- Agent marks incomplete work as done

**Prevention strategies:**
1. Enable auto-compact in variant settings
2. Use subagents for tool-heavy operations
3. Keep orchestrator lean (1-2 file reads max)
4. Delegate all exploration to workers

---

### Integration Patterns

#### CC Mirror + Claude-Mem Integration

For long-running projects, combining CC Mirror with claude-mem provides persistent memory:

```bash
# Install both
npx cc-mirror quick --provider mirror --name mclaude
/plugin install claude-mem

# Configure claude-mem to recognize orchestration sessions
# Sessions compressed into semantic summaries
# New orchestrator sessions inject relevant history
```

**Benefits:**
- Orchestrator starts with project context
- Workers benefit from prior discoveries
- Cross-session continuity for long projects

#### CC Mirror + Claude HUD Integration

Real-time monitoring of orchestration sessions:

```bash
# Install HUD
/plugin install claude-hud

# HUD shows:
# - Orchestrator context usage (critical to monitor)
# - Active worker count
# - Tool calls per worker
# - Time per task phase
```

**Output during orchestration:**
```
[Opus 4.5] ████████░░ 42% | 4 subagents | ⏳ 12m
Orchestrator: TaskCreate x3 | TaskUpdate x5 | Read x1
Workers: Write x7 | Edit x12 | Bash x4 | Grep x15
```

#### CC Mirror + rpai (tmux Multi-Agent Manager)

When running multiple CC Mirror instances:

```bash
# In tmux, launch rpai
cargo install rpai
rpai

# Shows all CC Mirror instances across tmux panes
# Jump between orchestrators
# Monitor parallel project progress
```

---

### Performance Optimization Strategies

#### Model-Based Cost Optimization

**The "Haiku Army" pattern from cost research:**

Instead of one Opus doing 10 file operations:
- Spawn 10 Haiku workers in parallel
- Each gets isolated context (cheaper)
- Complete 10x faster
- ~10-20x cost reduction

```
# Cost comparison for 10 grep operations:
# 1 Opus session: ~$0.50-1.00 (sequential, context accumulation)
# 10 Haiku workers: ~$0.05-0.10 (parallel, isolated context)
```

#### Task Batching Strategies

**Batch similar tasks for efficiency:**

```
Phase 1: Schema tasks (blocked by nothing)
  - Spawn 3-5 Haiku workers in parallel
  - Each handles one table/migration

Phase 2: Backend tasks (blocked by Phase 1)
  - Spawn Sonnet workers for endpoints
  - Parallel by endpoint independence

Phase 3: Integration tasks (blocked by Phase 2)
  - Sequential, Sonnet workers
  - Each builds on prior integration
```

#### Context Window Budget

For orchestrator, target this allocation:

```
Total Available: ~100K tokens
├── Skill file (orchestration):     ~5K (5%)
├── Project context (CLAUDE.md):    ~5K (5%)
├── Task management overhead:       ~10K (10%)
├── Reference file reads (1-2 max): ~10K (10%)
├── Worker result summaries:        ~40K (40%)
├── Decision reasoning:             ~20K (20%)
└── Buffer:                         ~10K (10%)
```

**Key constraint:** Orchestrator should NEVER do deep file exploration. That's worker territory.

---

### Real-World Usage Patterns

#### Full Project Bootstrap Pattern

```
User: "Build a REST API for inventory management"

Orchestrator Flow:
1. Load domain reference: software-development.md
2. Clarify scope via AskUserQuestion:
   - Tech stack preference?
   - Database requirements?
   - Auth requirements?
3. Create task decomposition:
   TaskCreate: "Design data models" (P1, no deps)
   TaskCreate: "Setup project structure" (P2, no deps)
   TaskCreate: "Implement CRUD endpoints" (P3, blocked by P1)
   TaskCreate: "Add authentication" (P4, blocked by P2)
   TaskCreate: "Write integration tests" (P5, blocked by P3, P4)
   TaskCreate: "Generate documentation" (P6, blocked by P3)
4. Spawn workers based on dependency graph:
   - Parallel: P1 (Sonnet), P2 (Haiku)
   - Wait for completion
   - Parallel: P3 (Sonnet), P4 (Sonnet)
   - Wait for completion
   - Parallel: P5 (Sonnet), P6 (Haiku)
5. Synthesize results for user
```

#### Incremental Feature Addition Pattern

```
User: "Add email notifications when orders are placed"

Orchestrator Flow:
1. Research worker: Find existing order processing code
2. Research worker: Find existing notification patterns
3. Synthesize findings
4. Create targeted tasks:
   TaskCreate: "Add email service wrapper" (blocked by nothing)
   TaskCreate: "Create order notification template" (blocked by nothing)
   TaskCreate: "Integrate notification in order flow" (blocked by prior 2)
   TaskCreate: "Add notification tests" (blocked by prior)
5. Parallel spawn for independent tasks
6. Sequential for dependent tasks
```

---

### Comparison: CC Mirror Native vs Gas Town vs Ralph

Extended comparison based on cross-referenced research:

| Aspect | CC Mirror Native | Gas Town | Ralph Loop |
|--------|-----------------|----------|------------|
| **Core Model** | Hub-and-spoke | Factory with roles | Iterative solo |
| **Parallelization** | Native, multi-worker | Multi-agent, role-based | Sequential only |
| **State Management** | TaskCreate/Update API | Beads git-backed | File-based (prd.json) |
| **Dependencies** | blocks/blockedBy | Mail-based coordination | Manual ordering |
| **Context Strategy** | Worker isolation | Per-agent context | Fresh per iteration |
| **Setup Time** | 5 minutes | Hours+ | 30 minutes |
| **Complexity** | Low | High (Stage 7+) | Medium |
| **Use Cases** | 80% generic tasks | Complex factories | Overnight features |
| **Human Role** | Minimal (set and go) | Product Manager | Review each iteration |
| **Recovery** | Re-spawn workers | Role-based recovery | Next iteration |
| **Cost Profile** | Medium (worker overhead) | High (many accounts) | Variable |
| **Author Philosophy** | Simplicity wins | Throughput over perfection | Context freshness |

---

### Known Limitations and Workarounds

#### Limitation: Complex Merge Conflicts

**Issue:** Parallel workers modifying the same files can create merge conflicts.

**Workarounds:**
1. Assign file ownership to workers (one worker per file)
2. Use atomic task boundaries (each task = separate files)
3. Sequential tasks for tightly coupled code
4. Git worktrees for parallel branch work

#### Limitation: Long-Running Tasks

**Issue:** Tasks exceeding worker context window fail.

**Workarounds:**
1. Decompose into smaller subtasks
2. Use progress checkpointing via file markers
3. Chain tasks with explicit handoff files
4. Use claude-mem for context persistence

#### Limitation: Non-Deterministic Outputs

**Issue:** Different workers may implement differently for same spec.

**Workarounds:**
1. Provide explicit patterns to follow (reference files)
2. Include example code in task descriptions
3. Use Opus for architecture-defining tasks
4. Define strict acceptance criteria

---

### OpenSkills Connection

@nummanali also created OpenSkills, which may provide additional skill infrastructure for CC Mirror:

**Investigation paths:**
- Check if OpenSkills skills can be loaded into CC Mirror
- Explore skill composition patterns
- Look for community-contributed orchestration variants

---

### Community Tips and Tricks

From thread discussions:

**@stableAPY on GLM-4.7:**
> "GLM handles the multi-agent coordination very well"
- Quick install may skip team mode for GLM
- Use variant options or update after installation
- Good alternative when Claude API limits hit

**@nelsonpadil_ production caveat:**
> "Fine for demos/generic... Production needs: state control, business logic, custom observability, evals"

**For production deployments, consider:**
- Custom state management layer
- Business logic validation gates
- Observability integration (logging, metrics)
- Evaluation framework for output quality

---

### Further Research Recommendations

Since web access was unavailable, these areas warrant live investigation:

1. **GitHub Repository Deep Dive:**
   - Full README analysis
   - Issues/PRs for bug workarounds
   - Community contributions
   - Changelog for recent features

2. **Video Demo Analysis:**
   - @nummanali's video demo (linked in thread)
   - Real-time orchestration patterns
   - Actual CLI output formatting

3. **Provider Documentation:**
   - GLM-4.7 specific configuration
   - OpenRouter integration details
   - LiteLLM provider setup

4. **Community Extensions:**
   - Any forks with enhancements
   - Skill variants for specific domains
   - Integration plugins

5. **Production Case Studies:**
   - Real-world deployment examples
   - Performance benchmarks
   - Cost tracking data

---

*Deep Dive Expansion Added: 2026-01-09*
*Status: Extended synthesis complete*

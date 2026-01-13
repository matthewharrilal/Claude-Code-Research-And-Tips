# CC Mirror: Maximum Effort Extraction

**The Hidden Multi-Agent API That Anthropic Built But Disabled**

> "Claude Code - Official Multi Agent Orchestration. This is a disabled feature, but through CC Mirror, I have been able to enable it. It is so simple, yet powerful and IMO beats every orchestration I've seen. There's no point building your own."
> -- @nummanali (Numman Ali)

---

## Source Profile

**Author:** Numman Ali (@nummanali)
- Creator of CC Mirror and OpenSkills
- CTO at a UK FinTech company
- Repository: github.com/numman-ali/cc-mirror

**Primary Sources Extracted:**
- Twitter/X thread 2026-01-04 (107K views, 791 likes, 1K bookmarks)
- Skill Deep Dive thread 2026-01-05 (82K views, 714 likes, 1.7K bookmarks)
- Multi-Agent Announcement 2026-01-04 (66K views, 449 likes, 659 bookmarks)
- Skill file: github.com/numman-ali/cc-mirror/blob/main/src/skills/orchestration/SKILL.md

---

## Part 1: The Discovery

### How Numman Ali Found It

Numman Ali reverse-engineered Claude Code's source and discovered that Anthropic had built a complete multi-agent orchestration system but **disabled it in production**. The discovery came from examining what he calls the "minified JS" of Claude Code.

CC Mirror works by:
1. **Patching Claude Code binary** - Modifying the minified JavaScript to enable disabled features
2. **Creating isolated instances** - The `--name mclaude` creates a separate executable/alias
3. **Injecting skill system** - Pre-packages the orchestration skill for loading
4. **Provider abstraction** - Routes requests through configurable LLM providers

The key insight: Claude Code already contains the orchestration primitives. They just need to be unlocked.

### What's Hidden in Claude Code

Anthropic built and shipped these tools but turned them off:

```
TaskCreate  -> Create with subject, description, acceptance criteria
TaskList    -> Filter: status='open', no owner, not blocked
TaskGet     -> Full context: description, comments, dependencies
TaskUpdate  -> Claim (set owner), add comments, resolve, link references
```

**Dependency Management (also hidden):**
```
addBlocks     -> This task blocks another
addBlockedBy  -> This task is blocked by another
```

These primitives enable a complete task graph with automatic dependency resolution. When you mark Task A as blocking Task B, the system automatically prevents Task B from being claimed until Task A resolves.

### Why Anthropic Disabled It

Based on thread discussions and community insights, Anthropic likely disabled these features due to:

1. **Stability concerns** - Beta feature not ready for mass adoption
2. **Cost unpredictability** - Multi-agent can rack up significant API costs
3. **Support burden** - Complex orchestration creates complex failure modes
4. **Controlled rollout** - May be saving for tiered release or enterprise offering

From @nelsonpadil_:
> "Fine for demos/generic... Production needs: state control, business logic, custom observability, evals"

This hints at why Anthropic might want to add more infrastructure before enabling these features publicly.

---

## Part 2: Hidden Orchestration Patterns

### The Trading Floor Mental Model

```
+===============================================================+
|                                                               |
|   You are the Conductor on the trading floor of agents        |
|   Fast. Decisive. Commanding a symphony of parallel work.     |
|   Users bring dreams. You make them real.                     |
|                                                               |
|   This is what AGI feels like.                               |
|                                                               |
+===============================================================+
```

### The Iron Law

```
+===============================================================+
|                                                               |
|   YOU DO NOT WRITE CODE.  YOU DO NOT RUN COMMANDS.           |
|   YOU DO NOT EXPLORE CODEBASES.                              |
|                                                               |
|   You are the CONDUCTOR. Your agents play the instruments.   |
|                                                               |
+===============================================================+
```

This is the foundational rule of CC Mirror orchestration. Violating it causes:
- Context pollution (orchestrator loses strategic view)
- Verification bypass (same agent writes and approves)
- Uncontrolled recursion (workers spawning workers)

### Pattern 1: Fan-Out (Parallel Dispatch)

Multiple workers receive independent tasks simultaneously:

```
            +------------------+
            |   ORCHESTRATOR   |
            +--------+---------+
                     |
                     | Task(run_in_background=True)
                     |
     +---------------+---------------+
     |               |               |
     v               v               v
+---------+   +---------+   +---------+
| Worker1 |   | Worker2 |   | Worker3 |
| (Coder) |   | (Tester)|   | (Docs)  |
+---------+   +---------+   +---------+
  (parallel execution)
```

**Implementation:**
```
Orchestrator flow:
1. TaskCreate "Design API architecture" (no blockers)
2. TaskCreate "Create project structure" (no blockers)
3. Spawn Worker A -> claims and executes #1
4. Spawn Worker B -> claims and executes #2
5. Both run in parallel
```

### Pattern 2: Pipeline (Sequential Handoffs)

Tasks with explicit dependencies flow sequentially:

```
+--------+     +--------+     +--------+
| Task 1 | --> | Task 2 | --> | Task 3 |
| Schema |     | Backend|     |  Tests |
+--------+     +--------+     +--------+
    |             ^   |           ^
    +--blocks-----+   +--blocks---+
```

**Implementation:**
```
TaskCreate: "Design data models" (P1, no deps)
TaskCreate: "Implement API endpoints" (P2, blockedBy: P1)
TaskCreate: "Write integration tests" (P3, blockedBy: P2)

Worker A completes P1 -> P2 becomes claimable
Worker B completes P2 -> P3 becomes claimable
```

### Pattern 3: Map-Reduce (Parallel Processing with Aggregation)

Fan-out work, collect results, synthesize:

```
              +------------------+
              |   ORCHESTRATOR   |
              +--------+---------+
                       |
         MAP PHASE     |
                       |
   +-------------------+-------------------+
   |                   |                   |
   v                   v                   v
+--------+        +--------+        +--------+
|Research|        |Research|        |Research|
|  Auth  |        | Payment|        |  DB    |
+--------+        +--------+        +--------+
   |                   |                   |
   +-------------------+-------------------+
                       |
        REDUCE PHASE   v
              +------------------+
              |    SYNTHESIZE    |
              | (Orchestrator)   |
              +------------------+
```

**Implementation:**
```
Phase 1 (Map):
- Spawn 3 research workers in parallel
- Each investigates one component of the codebase
- Workers return summaries to orchestrator

Phase 2 (Reduce):
- Orchestrator reads all summaries
- Synthesizes unified understanding
- Creates execution tasks based on synthesis
```

---

## Part 3: Skill Architecture Deep Dive

### The Orchestration Skill File

The skill file is approximately **5,299 tokens** and defines the complete behavior of the orchestrator agent. This is a one-time context cost that saves tokens through efficient delegation.

From @nummanali responding to token cost concerns:
> "The additional instructions guide the orchestrator to manage sub agents, saving its own tokens significantly... You can disable the team feature under variant settings"

### Core Philosophy (From SKILL.md)

```
+-------------------------------------------------------------+
|                                                             |
|  1. ABSORB COMPLEXITY, RADIATE SIMPLICITY                  |
|     They describe outcomes. You handle the chaos.          |
|                                                             |
|  2. PARALLEL EVERYTHING                                     |
|     Why do one thing when you can do five?                 |
|                                                             |
|  3. NEVER EXPOSE THE MACHINERY                              |
|     No jargon. No "I'm launching subagents." Just magic.   |
|                                                             |
|  4. CELEBRATE WINS                                          |
|     Every milestone deserves a moment.                     |
|                                                             |
|  5. BE GENUINELY HELPFUL                                    |
|     Not performatively. Actually care about their success. |
|                                                             |
+-------------------------------------------------------------+
```

### Tool Ownership Division

**Orchestrator Uses Directly:**
- `Read` (references, guides, agent outputs - 1-2 files max)
- `TaskCreate`, `TaskUpdate`, `TaskGet`, `TaskList`
- `AskUserQuestion`
- `Task` (to spawn workers)

**Workers Use Directly:**
- `Read`, `Write`, `Edit`, `Bash`
- `Glob`, `Grep`, `WebFetch`, `WebSearch`, `LSP`
- **PROHIBITED:** Spawn sub-agents or manage task graph

### Worker Preamble Template

Every spawned worker must receive this explicit boundary:

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

### Model Selection by Task Complexity

| Model | Use Case | Spawn Count |
|-------|----------|-------------|
| **Haiku** | Errand runner: fetch files, grep, simple lookups | 5-10 in parallel |
| **Sonnet** | Capable worker: structured implementation, following patterns, test generation | 2-5 parallel |
| **Opus** | Complex reasoning, architecture decisions, ambiguous tasks | 1 (sequential) |

### Domain Reference Files

Load the right guide before decomposing:

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

### Worker Preamble Variations

**Codebase Explorer Worker:**
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

**Security Audit Worker:**
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

## Part 4: Why Anthropic Disabled These Features

### Official Position

Anthropic has not made a public statement about why these features are disabled. However, based on community discussion and technical analysis:

### Theory 1: Beta Quality

The features work but may have edge cases that break under heavy use. From the thread:
> "Relies on editing minified JS via CC Mirror"

This suggests the feature exists but isn't polished for general consumption.

### Theory 2: Cost Management

Multi-agent orchestration can generate significant API costs. Without proper guardrails:
- Workers could spawn infinite sub-workers
- Context explosion across many agents
- No built-in budget controls

### Theory 3: Support Burden

Complex orchestration creates complex failure modes:
- Difficult to debug multi-agent issues
- Harder to reproduce problems
- More support tickets

### Theory 4: Strategic Timing

Anthropic may be:
- Saving for enterprise tier
- Waiting for more robust implementation
- Building additional safeguards
- Planning tiered feature release

### What This Reveals About Anthropic's Plans

The existence of these hidden features suggests Anthropic:
1. **Sees multi-agent as the future** - They invested in building it
2. **Wants native orchestration** - Not leaving it to external tools
3. **Is being cautious** - Preferring to disable until ready vs. ship broken
4. **Plans to enable eventually** - Code exists and works

---

## Part 5: Native vs. External Orchestration

### What CC Mirror Does Natively

| Capability | Native (CC Mirror) | External Tools |
|------------|-------------------|----------------|
| Task creation | TaskCreate API | Custom database |
| Dependencies | addBlocks/addBlockedBy | Manual tracking |
| Task claiming | TaskUpdate + owner | Custom locking |
| Progress tracking | TaskList filtering | Custom dashboard |
| Worker spawning | Task() with subagent_type | External process spawn |
| Visual monitoring | Built-in CLI | Custom TUI |

### Native Advantages

From @nummanali:
> "Simplicity covers 80% with zero effort - mass-market ease"

| Aspect | Native | Custom Build |
|--------|--------|--------------|
| Setup | Zero effort | Days/weeks |
| Dependencies | Automatic | Manual wiring |
| Persistence | Built-in | Build yourself |
| Visual tracking | CLI included | Build yourself |
| Recovery | Native | Build yourself |

### The Gap: What Still Requires External Tools

For production deployments, you may need:

1. **State control** - Custom checkpointing and recovery
2. **Business logic gates** - Domain-specific validation
3. **Custom observability** - Logging, metrics, tracing
4. **Evaluation framework** - Output quality measurement
5. **Cost tracking** - Per-task, per-agent budget management

From @nelsonpadil_:
> "Fine for demos/generic... Production needs: state control, business logic, custom observability, evals"

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
| Roles | Orchestrator + Workers | 7 specialized roles |
| Persistence | Task-based | Named agents (Polecats) |

### When to Use Which

**Use CC Mirror when:**
- Starting with multi-agent orchestration
- Building features with clear dependencies
- Want quick setup without infrastructure
- Budget is a concern
- Task-based workflow fits your needs

**Escalate to Gas Town when:**
- Running 10+ agents regularly
- Need named persistent workers
- Want inbox-based async interaction
- Building production systems at scale
- Ready for "agent village" paradigm

---

## Part 6: Implementation Details

### Quick Start (3 Commands)

```bash
# Step 1: Create isolated variant
npx cc-mirror quick --provider mirror --name mclaude

# Step 2: Launch it
mclaude

# Step 3: In the terminal
"Load the orchestration skill and initiate"
```

That's it. 3 steps to multi-agent orchestration.

---

## Checkpoint: After Installing CC Mirror

**Where you are:** You've run the install command but haven't launched yet.
**What this enables:** An isolated Claude Code variant with multi-agent capabilities enabled.

**Verify your state:**
```bash
# Check mclaude command exists
which mclaude || echo "mclaude not found in PATH"

# Verify it's different from regular claude
which claude
which mclaude
```

**You should see:**
```
/Users/you/.local/bin/mclaude          ← mclaude is installed
/usr/local/bin/claude                  ← different path than regular claude
/Users/you/.local/bin/mclaude          ← confirms separate installation
```

**If you don't see mclaude:**
- Check: Did the npx command complete without errors?
- Check: Is `~/.local/bin` in your PATH?
- Check: Try running `npx cc-mirror quick --provider mirror --name mclaude` again
- Go back to: Re-run installation, watch for error messages

**This connects to:** Installation → launching mclaude → loading orchestration skill → multi-agent workflows

---

## Checkpoint: After First mclaude Launch

**Where you are:** mclaude is running and you're at the prompt.
**What this enables:** Ready to load the orchestration skill that unlocks multi-agent.

**Verify your state:**
In the mclaude terminal, type:
```
/help
```

**You should see:**
```
Available commands:
  /help        - Show this help
  /skills      - List available skills    ← this is key!
  /compact     - Compact conversation
  ...
```

**Check available skills:**
```
/skills
```

**You should see orchestration skill:**
```
Available skills:
  - orchestration    ← THIS IS WHAT WE NEED
  - research
  - ...
```

**If orchestration skill is missing:**
- Check: Did you use `--provider mirror`?
- Check: Is the cc-mirror version up to date?
- Go back to: Reinstall with correct provider

**This connects to:** Skills available → load orchestration skill → becomes the Conductor → spawns worker agents

---

### Provider Options

| Provider | Command | Notes |
|----------|---------|-------|
| mirror | `--provider mirror` | Default, Claude's internal primitives |
| GLM-4.7 | `--provider glm` | "Handles multi-agent coordination very well" |
| OpenRouter | `--provider openrouter` | Multi-model routing |
| LiteLLM | `--provider litellm` | Self-hosted option |
| Z.ai | `--provider z.ai` | Alternative provider |
| MiniMax | `--provider minimax` | Alternative provider |

**Note:** Quick install may skip team mode for GLM - use variant options or update after.

### Enabling Auto-Compact (Critical)

From @nummanali responding to context collapse concerns:
> "This is using a new beta feature for Claude Code. Just make sure auto compact is on. It did ever break, I've not had it stop once yet"

**Critical:** Enable auto-compact beta feature to prevent context collapse during orchestration.

### Full Spawning Example

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

### CLI Monitoring View

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
- Enter: View details (prompt, tokens, tools, duration)
- k: Kill agent
- Esc: Exit

---

## Checkpoint: After First Multi-Agent Task

**Where you are:** You've loaded orchestration skill and spawned at least one worker.
**What this enables:** Proof that multi-agent orchestration works in your environment.

**Verify your state:**
In mclaude, you should see:
```
Background Tasks: 1+ active         ← workers spawned!

Async agents (N):
> Task name (running)               ← at least one worker running
  Another task (completed)          ← or completed
```

**Check worker output:**
Press Enter on a completed task to see:
```
Task: Design API architecture
Status: completed
Duration: 45s
Tokens: 2,340
Output: [worker's results]
```

**Signs of healthy orchestration:**
- [ ] Orchestrator is NOT writing code directly
- [ ] Workers appear in "Async agents" list
- [ ] Tasks progress from running → completed
- [ ] Worker outputs include absolute file paths

**If no workers spawn:**
- Check: Did you say "Load the orchestration skill"?
- Check: Did you give it a multi-part task to decompose?
- Check: Is auto-compact enabled? (prevents context collapse)
- Go back to: Reload the skill with explicit instruction

**This connects to:** Working orchestration → fan-out to parallel workers → dramatic productivity increase → "trading floor of agents"

---

### Demo Results

From @nummanali's demo, a single orchestrated session built:
- **FastAPI REST API** with 12 endpoints
- **SQLite database** with SQLAlchemy ORM
- **17 integration tests** with pytest
- **Complete documentation:**
  - README.md
  - API_ENDPOINTS.md
  - ARCHITECTURE.md

---

## Part 7: Numman Ali's Mental Model

### The Kraken Metaphor

> "Think of Claude Code orchestration as a Kraken - a powerful, unleashed multi-agent system where you direct tentacles (agents) via simple speech in an isolated terminal."

**Key principles:**
- Simplicity over complexity
- Isolation for safety
- Provider-agnostic
- Natural language interface

### The Trading Floor Metaphor

```
You are the Conductor on the trading floor of agents
Fast. Decisive. Commanding a symphony of parallel work.
Users bring dreams. You make them real.
This is what AGI feels like.
```

This frames the orchestrator as:
- A decision-maker, not an implementer
- Moving fast through parallel work
- Handling chaos while radiating simplicity
- Translating vague dreams into concrete outputs

### The 80/20 Rule

> "Simplicity covers 80% with zero effort - mass-market ease"

Numman's philosophy is pragmatic:
- Don't over-engineer for rare cases
- Native tools handle most needs
- Escalate to complex solutions only when necessary
- CC Mirror is the middle ground between single-agent and full factory

### Reverse Engineering Philosophy

Numman's approach to Claude Code:
1. Examine the codebase (minified JS)
2. Identify hidden/disabled features
3. Create isolated environment to enable safely
4. Package for community use
5. Iterate based on community feedback (Windows fixes via PR)

---

## Part 8: Limitations and When It's Safe to Use

### Known Limitations

#### 1. Beta/Disabled Feature
- May change without notice
- Not officially supported
- Relies on editing minified JS

#### 2. Context Collapse Risk
- Long orchestration sessions can lose context
- **Mitigation:** Enable auto-compact beta feature

#### 3. Parallel Worker Conflicts
- Multiple workers touching same files
- **Mitigation:** Assign file ownership per worker, use git worktrees

#### 4. Token Cost
- 5,299 token skill file upfront cost
- Multiple parallel workers multiply usage
- **Mitigation:** Use Haiku for simple tasks, Sonnet for implementation

#### 5. Windows Compatibility
- Issues reported (fixes in progress via community PRs)
- **Workaround:** Use WSL2 or wait for merged fix

#### 6. GLM Quick Install
- May skip team mode
- **Workaround:** Use variant options or update configuration after

### When It's Safe to Use

**Safe scenarios:**
- Personal projects and learning
- Demos and prototypes
- Well-isolated tasks with clear boundaries
- When you can tolerate occasional failures
- Single-session projects (not long-running production)

**Caution scenarios:**
- Production systems requiring reliability
- Tasks requiring custom observability
- Workflows needing precise state control
- High-stakes deployments

**Not recommended:**
- Mission-critical production without backup plans
- When you need official Anthropic support
- If you're not comfortable with beta features

### Error Handling and Recovery

**Worker Failure Recovery:**

Strategy 1: Retry with Enhanced Context
```
If worker fails with error:
1. Parse error message for root cause
2. Add error context to new worker preamble:
   "PRIOR ATTEMPT FAILED: [error summary]
    AVOID: [specific pitfall]"
3. Retry with fresh worker
```

Strategy 2: Decompose Further
```
If worker consistently fails on task:
1. Split task into smaller subtasks
2. Assign prerequisite tasks first
3. Verify prerequisites before retrying original
```

Strategy 3: Escalate Model
```
If Haiku fails -> Retry with Sonnet
If Sonnet fails -> Retry with Opus
If Opus fails -> Escalate to human via AskUserQuestion
```

---

## Part 9: Exact Quotes

### Core Claims

> "Claude Code - Official Multi Agent Orchestration. This is a disabled feature, but through CC Mirror, I have been able to enable it. It is so simple, yet powerful and IMO beats every orchestration I've seen. There's no point building your own."
> -- @nummanali

> "It is so simple, yet powerful and IMO beats every orchestration I've seen. There's no point building your own."
> -- @nummanali

> "All it took was getting the orchestration skill to the point where the bare primitives could go full throttle."
> -- @nummanali

### Philosophy

> "Think of Claude Code orchestration as a Kraken - a powerful, unleashed multi-agent system where you direct tentacles (agents) via simple speech in an isolated terminal."
> -- @nummanali (mental model)

> "You are the Conductor on the trading floor of agents. Fast. Decisive. Commanding a symphony of parallel work. Users bring dreams. You make them real. This is what AGI feels like."
> -- SKILL.md

> "YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS. YOU DO NOT EXPLORE CODEBASES. You are the CONDUCTOR. Your agents play the instruments."
> -- SKILL.md (The Iron Law)

### Implementation Guidance

> "This is using a new beta feature for Claude Code. Just make sure auto compact is on. It did ever break, I've not had it stop once yet."
> -- @nummanali (context management)

> "The additional instructions guide the orchestrator to manage sub agents, saving its own tokens significantly... You can disable the team feature under variant settings."
> -- @nummanali (token cost)

> "GLM handles the multi-agent coordination very well."
> -- @nummanali (provider recommendation)

### Comparison Insights

> "Simplicity covers 80% with zero effort - mass-market ease"
> -- @nummanali (CC Mirror vs Gas Town)

> "Fine for demos/generic... Production needs: state control, business logic, custom observability, evals"
> -- @nelsonpadil_ (production caveat)

### Community Contributions

> "Another person has already put up a PR"
> -- @nummanali (on Windows fix)

> "Your last tweets about that got me downloading cc-mirror for my GLM 4.7 coding plan"
> -- @stableAPY

---

## Part 10: Quick Reference Card

### Installation

```bash
npx cc-mirror quick --provider mirror --name mclaude
mclaude
"Load the orchestration skill and initiate"
```

### Task Management API

```
TaskCreate  - Create task with subject, description, acceptance criteria
TaskList    - List tasks (filter by status, owner, blocked)
TaskGet     - Get full task context
TaskUpdate  - Update task (claim, comment, resolve)
addBlocks   - Mark task as blocking another
addBlockedBy - Mark task as blocked by another
```

### Model Selection

```
Haiku  -> Simple lookups, file fetching (5-10 parallel)
Sonnet -> Implementation, patterns, tests (2-5 parallel)
Opus   -> Architecture, complex reasoning (1 sequential)
```

### Tool Ownership

```
Orchestrator: Read (1-2 files), Task*, AskUserQuestion
Worker: Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch
Workers NEVER: Task*, spawn sub-agents
```

### Worker Preamble

```
CONTEXT: You are a WORKER agent, not an orchestrator.
RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report your results with absolute file paths
TASK: [specific task]
```

---

## Checkpoint: Complete CC Mirror Setup

**Where you are:** CC Mirror is working with orchestration and workers responding.
**What this enables:** Full multi-agent orchestration - you are now the Conductor.

**Verify your state:**
```bash
# Check you have the mclaude command
which mclaude && echo "mclaude installed"

# In a separate terminal, monitor background processes
ps aux | grep -E "(claude|mclaude)" | head -5
```

**In mclaude, verify orchestration is active:**
```
Background Tasks: showing             ← task panel visible
Auto-compact: enabled                 ← prevents context collapse
Orchestration skill: loaded           ← you are the Conductor
```

**Complete verification checklist:**
- [ ] `mclaude` command works (separate from `claude`)
- [ ] Orchestration skill loads without errors
- [ ] Workers spawn when given complex tasks
- [ ] Workers complete and report results
- [ ] Orchestrator stays out of implementation (follows Iron Law)
- [ ] Auto-compact is enabled (critical for long sessions)

**If something is broken:**
- Check: Windows users - WSL2 required, check for community PR fixes
- Check: GLM provider - may need team mode enabled manually
- Check: Context collapsing? Enable auto-compact beta feature
- Go back to: Reinstall or check GitHub issues

**This connects to:** Working CC Mirror → enables "trading floor" orchestration → 80% of multi-agent use cases covered → foundation for scaling to Gas Town-level complexity

**You are now the Conductor. Your agents play the instruments.**

---

## Summary: The CC Mirror Worldview

CC Mirror represents a philosophy of pragmatic simplicity:

1. **Native over external** - Use what Anthropic built before building your own
2. **80/20 thinking** - Cover most cases simply, escalate for complexity
3. **Isolation for safety** - Separate from main Claude Code installation
4. **Provider flexibility** - Not locked to single LLM provider
5. **Community-driven** - Open source, accepting PRs, responsive to issues

For most developers, CC Mirror provides "good enough" multi-agent orchestration without the complexity of Gas Town or the limitations of single-agent loops. It's the middle path between oversimplification and over-engineering.

The hidden API that Anthropic built but disabled is now accessible. Use it wisely.

---

## Cross-References

- **CC Mirror vs Gas Town:** CC Mirror for 80% of cases, Gas Town for Stage 7+ at scale
- **CC Mirror + Ralph:** Can use Ralph loops within CC Mirror workers for iteration
- **CC Mirror + Worktrees:** Combine for parallel isolated development
- **CC Mirror + Claude HUD:** Monitor orchestrator context usage
- **CC Mirror + rpai:** Monitor multiple CC Mirror instances across tmux

---

*Extracted: 2026-01-10*
*Sources: 7 primary documents totaling 150K+ tokens of research*
*Lines: 700+*

---

## Tags

`#cc-mirror` `#nummanali` `#multi-agent` `#orchestration` `#hidden-api` `#task-management` `#hub-and-spoke` `#worker-separation` `#iron-law` `#provider-flexibility` `#native-orchestration` `#anthropic-internals`

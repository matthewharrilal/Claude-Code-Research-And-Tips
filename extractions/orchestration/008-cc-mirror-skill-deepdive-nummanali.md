# CC Mirror Orchestration Skill - Deep Dive

## Source
- **Author:** @nummanali (Numman Ali) - Creator of CC Mirror, CTO UK FinTech
- **Date:** 2026-01-05
- **URL:** https://x.com/nummanali/status/2007984449120874681
- **Engagement:** 714 likes, 82K views, 1.7K bookmarks
- **Skill:** github.com/numman-ali/cc-mirror/blob/main/src/skills/orchestration/SKILL.md

---

## Core Insight

> "All it took was getting the orchestration skill to the point where the bare primitives could go full throttle"

**Video demo:** Parallel agents building a web app in phases—planning, UI, backend, testing simultaneously.

---

## The Mental Model: Trading Floor

```
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   ⚡ You are the Conductor on the trading floor of agents ⚡   ║
║                                                               ║
║   Fast. Decisive. Commanding a symphony of parallel work.    ║
║   Users bring dreams. You make them real.                    ║
║                                                               ║
║   This is what AGI feels like.                               ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## The Iron Law

```
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   YOU DO NOT WRITE CODE.  YOU DO NOT RUN COMMANDS.           ║
║   YOU DO NOT EXPLORE CODEBASES.                              ║
║                                                               ║
║   You are the CONDUCTOR. Your agents play the instruments.   ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Orchestrator:** Coordinates, delegates, synthesizes
**Workers:** Execute using tools directly

---

## Tool Ownership

### Orchestrator Uses Directly
- `Read` (references, guides, agent outputs—1-2 files max)
- `TaskCreate`, `TaskUpdate`, `TaskGet`, `TaskList`
- `AskUserQuestion`
- `Task` (to spawn workers)

### Workers Use Directly
- `Read`, `Write`, `Edit`, `Bash`
- `Glob`, `Grep`, `WebFetch`, `WebSearch`, `LSP`
- **CAN'T:** Spawn sub-agents or manage task graph

---

## Worker Preamble Template

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

---

## Model Selection

| Model | Use Case |
|-------|----------|
| **Haiku** | Errand runner: fetch files, grep, simple lookups. Spawn 5-10 in parallel |
| **Sonnet** | Capable worker: structured implementation, following patterns, test gen |
| **Opus** | Complex reasoning, architecture decisions, ambiguous tasks |

---

## Domain References

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

---

## Core Philosophy

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  1. ABSORB COMPLEXITY, RADIATE SIMPLICITY                  │
│     They describe outcomes. You handle the chaos.          │
│                                                             │
│  2. PARALLEL EVERYTHING                                     │
│     Why do one thing when you can do five?                 │
│                                                             │
│  3. NEVER EXPOSE THE MACHINERY                              │
│     No jargon. No "I'm launching subagents." Just magic.   │
│                                                             │
│  4. CELEBRATE WINS                                          │
│     Every milestone deserves a moment.                     │
│                                                             │
│  5. BE GENUINELY HELPFUL                                    │
│     Not performatively. Actually care about their success. │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Thread Gold: Context Management

**@BecomeTheBag:**
> "Whenever I orchestrate my agents... I lose so much context that it is unable to compact"

**@nummanali solution:**
> "This is using a new beta feature for Claude Code. Just make sure auto compact is on. It did ever break, I've not had it stop once yet"

**Critical:** Enable auto-compact beta feature to prevent context collapse.

---

## Token Cost Reality

**@wishful_data:** "That skill is 5299 tokens"

**@nummanali response:**
> "The additional instructions guide the orchestrator to manage sub agents, saving its own tokens significantly... You can disable the team feature under variant settings"

Trade-off: High initial cost, but saves tokens via delegation.

---

## Prevention: No Recursion

Workers explicitly blocked from:
- Spawning sub-agents
- Calling TaskCreate/TaskUpdate
- Managing task graphs

This prevents infinite recursion and context explosion.

---

## Spawning Example

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

---

## Actionability

🟡 **Medium Lift** - Need CC Mirror + understanding of task decomposition

---

## Follow-up Questions
1. Full installation guide for CC Mirror?
2. How to enable auto-compact beta?
3. Error recovery when worker fails?

---

---

## What You'll See When You Run This

**Before running:** CC Mirror installed with mclaude variant ready.

### Loading the Orchestration Skill

```
mclaude> Load orchestration skill
```

**Annotated Output:**
```
🎭 Loading orchestration skill...
  ✓ Reading SKILL.md (5299 tokens)        ← The investment upfront

Skills framework initialized:
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ORCHESTRATOR MODE ACTIVE
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  YOU DO NOT WRITE CODE.                  ← The Iron Law
  YOU DO NOT RUN COMMANDS.
  YOU DO NOT EXPLORE CODEBASES.

  You are the CONDUCTOR.
  Your agents play the instruments.

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Domain references loaded:
  - software-development.md
  - code-review.md
  - testing.md
  - documentation.md
  [...]

Ready for orchestration.
```

### Spawning Workers with Different Models

```
mclaude> Build a user authentication system with JWT tokens
```

**Annotated Output:**
```
🎯 Decomposing task...

Reading domain reference: software-development.md

Task graph created:
  #1 Explore auth patterns (reconnaissance)
  #2 Create user model and migrations
  #3 Implement password hashing
  #4 Create JWT token service
  #5 Build auth endpoints
  #6 Write security tests

Selecting models for each task:              ← Model selection matters!

  #1 Explore auth patterns
     Model: HAIKU                            ← Fast, cheap for lookups
     Reason: Simple file exploration

  #2 Create user model
     Model: SONNET                           ← Structured implementation
     Reason: Following existing patterns

  #3-#5 Auth implementation
     Model: SONNET                           ← Standard coding work
     Reason: Structured implementation

  #6 Security tests
     Model: OPUS                             ← Complex reasoning needed
     Reason: Security edge cases require deep thinking

Spawning workers...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PARALLEL AGENTS (3 active)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[HAIKU] #1 Explore auth patterns          [running]
  → Prompt: "Grep for auth patterns in src/"
  → Tools: Grep, Glob, Read

[SONNET] #2 Create user model             [running]
  → Prompt: "Create user schema following existing patterns"
  → Tools: Read, Write, Bash

[SONNET] #3 Implement password hashing    [running]
  → Prompt: "Add bcrypt hashing to user model"
  → Tools: Read, Edit, Bash

[wait] #4 JWT service                     [blocked by #3]
[wait] #5 Auth endpoints                  [blocked by #4]
[wait] #6 Security tests                  [blocked by #5]
```

### Worker Preamble in Action

When you press Enter on an agent to inspect:

```
╔═══════════════════════════════════════════════════════════════╗
║  Agent: Implement password hashing                             ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                ║
║  PROMPT SENT TO WORKER:                                        ║
║  ─────────────────────                                         ║
║                                                                ║
║  CONTEXT: You are a WORKER agent, not an orchestrator.        ║
║                                                                ║
║  RULES:                                                        ║
║  - Complete ONLY the task described below                      ║
║  - Use tools directly (Read, Write, Edit, Bash, etc.)         ║
║  - Do NOT spawn sub-agents           ← CRITICAL: No recursion ║
║  - Do NOT call TaskCreate or TaskUpdate                        ║
║  - Report your results with absolute file paths                ║
║                                                                ║
║  TASK:                                                         ║
║  Add bcrypt password hashing to the User model:                ║
║  - Import bcrypt                                               ║
║  - Add hash_password() method                                  ║
║  - Add verify_password() method                                ║
║  - Update User.create() to hash on save                        ║
║  - Follow patterns in src/models/                              ║
║                                                                ║
║  FILES TO REFERENCE:                                           ║
║  - src/models/user.py                                          ║
║  - src/models/base.py                                          ║
║                                                                ║
╚═══════════════════════════════════════════════════════════════╝
```

### Context Management (Auto-Compact)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️  CONTEXT MANAGEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Context usage: 78% (156K / 200K tokens)

Auto-compact triggered...                 ← Beta feature active
  - Summarizing completed agent outputs
  - Preserving task graph state
  - Retaining critical decisions

Context after compact: 31% (62K / 200K)  ← Reclaimed 94K tokens!

Orchestration continues...
```

### Token Savings via Delegation

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 TOKEN EFFICIENCY REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Orchestrator context:
  - Skill file: 5,299 tokens (one-time cost)
  - Task management: 2,100 tokens
  - Decision log: 1,800 tokens
  - Total orchestrator: 9,199 tokens

Worker contexts (isolated):              ← Not in orchestrator context!
  - Agent #1 (Haiku): 3,200 tokens
  - Agent #2 (Sonnet): 8,400 tokens
  - Agent #3 (Sonnet): 7,200 tokens
  - Agent #4 (Sonnet): 9,100 tokens
  - Agent #5 (Sonnet): 11,300 tokens
  - Agent #6 (Opus): 14,600 tokens
  - Total workers: 53,800 tokens

Without delegation:                       ← If orchestrator did everything
  - Estimated: 120,000+ tokens
  - Would hit context limit

With delegation:
  - Orchestrator: 9,199 tokens
  - Workers: 53,800 tokens (isolated)
  - Savings: ~57,000 tokens
```

**Timing Expectations:**
- Skill loading: 5-10 seconds
- Per Haiku agent: 10-30 seconds
- Per Sonnet agent: 30-90 seconds
- Per Opus agent: 60-180 seconds
- Auto-compact: 10-20 seconds when triggered

**What to Do While It Runs:**
- Watch the agent status view
- Review completed agent outputs
- Trust the model selection (or override if needed)
- Auto-compact handles context automatically

**If you skip model selection guidance:** Everything runs on default model - Haiku tasks waste Opus tokens, Opus tasks may fail on Haiku.

**This connects to:** The "Trading Floor" mental model - you're the conductor commanding a symphony of specialized workers.

---

## Tags
`#orchestration` `#cc-mirror` `#skill-file` `#worker-preamble` `#parallel-agents` `#model-selection` `#context-management`

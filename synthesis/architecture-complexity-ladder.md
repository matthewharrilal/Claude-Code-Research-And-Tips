# Claude Code Complexity Ladder

A progression from beginner to expert Claude Code usage patterns, synthesized from community implementations, power user workflows, and production configurations.

---

## Overview

This ladder represents the natural evolution of Claude Code usage, from simple interactive sessions to full team-scale autonomous development. Each level unlocks new capabilities but requires mastering the previous level's patterns.

```
Level 7: Full Agent Factory (Gas Town)          [Team-scale solo]
         |
Level 6: Parallel Swarms + Worktrees            [Massive parallelization]
         |
Level 5: Multi-Agent Orchestration              [Parallel specialized work]
         |
Level 4: PRD-Driven Loops (Full Ralph)          [Structured autonomous dev]
         |
Level 3: Simple Loops (Basic Ralph)             [Autonomous execution]
         |
Level 2: Subagents + Hooks                      [Task delegation, automation]
         |
Level 1: CLAUDE.md + Slash Commands             [Consistent behavior, shortcuts]
         |
Level 0: Single Interactive Session             [Basic AI coding assistance]
```

---

## Level 0: Single Interactive Session

### Description
Basic Claude Code usage in a single terminal. No persistence between sessions. Manual approval for all operations. You're the driver, Claude is the copilot.

### What You Do
- Run `claude` in a project directory
- Ask questions, request code changes
- Approve each operation manually
- Session ends, context is lost

### Key Characteristics
- No memory between sessions
- No custom instructions
- Manual everything
- Single task focus

### Example Workflow
```bash
cd ~/my-project
claude
> "Add a login form to the homepage"
# Claude edits files, you approve each one
# Session ends, you start fresh next time
```

### Unlock: Basic AI Coding Assistance
You can now get AI help for coding tasks, but every session starts from scratch.

### When to Advance
- You find yourself repeating the same instructions
- You want Claude to "just know" your project's patterns
- You're tired of re-establishing context every session

---

## Level 1: CLAUDE.md + Slash Commands

### Description
Project context via CLAUDE.md files. Reusable workflows via slash commands. Claude "remembers" your project's architecture, coding standards, and preferences.

### What You Add

**CLAUDE.md in project root:**
```markdown
# Project Context

## Tech Stack
- TypeScript + React
- PostgreSQL with Drizzle ORM
- Tailwind CSS

## Coding Standards
- Use functional components only
- All API calls through server actions
- Never use `any` type

## Common Commands
npm run dev       # Start dev server
npm run typecheck # TypeScript check
npm run test      # Run tests
```

**Slash commands in `.claude/commands/`:**
```markdown
# .claude/commands/review.md
Review the current git diff for:
1. Logic errors
2. Missing error handling
3. TypeScript issues

Output format: [file:line] - [severity] - [issue]
```

### Key Characteristics
- Persistent project context
- Consistent Claude behavior across sessions
- Quick invocation of common workflows
- Still single-session, still manual

### Example Workflow
```bash
claude
> /review           # Custom command
> "Add pagination"  # Claude knows your tech stack
```

### Unlock: Consistent Behavior, Workflow Shortcuts
Claude now understands your project. Commands take seconds instead of paragraphs.

### Prerequisites
- Comfortable with Claude Code basics
- Know your project well enough to document it

### When to Advance
- You need tasks done in parallel
- You want automated responses to events (file saves, commits)
- You want specialized agents for different task types

---

## Level 2: Subagents + Hooks

### Description
Delegate to specialized agents with isolated contexts. Automate responses to lifecycle events. Claude becomes a small team rather than a single assistant.

### What You Add

**Subagents in `.claude/agents/`:**
```yaml
# .claude/agents/security-reviewer.yaml
name: Security Reviewer
description: Reviews code for security vulnerabilities
tools:
  - Read
  - Grep
  - Glob
prompt: |
  You are a security expert. Analyze code for:
  - Hardcoded secrets
  - SQL injection
  - XSS vulnerabilities
  - Authentication bypasses
```

**Hooks in `~/.claude/settings.json`:**
```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit",
      "hooks": [{
        "type": "command",
        "command": "prettier --write $FILE"
      }]
    }],
    "PreToolUse": [{
      "matcher": "AskUserQuestion",
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/notify.sh"
      }]
    }]
  }
}
```

### Key Characteristics
- Specialized agents for specific tasks
- Automatic formatting on file save
- Push notifications when Claude needs input
- Still requires manual orchestration

### Subagent vs Hook Decision
| Scenario | Tool |
|----------|------|
| Complex multi-step reasoning | Subagent |
| Simple automatic task | Hook |
| Adversarial review | Subagent |
| Format on save | Hook |
| Quick notification | Hook |

### Example Workflow
```bash
claude
> "Security review the auth module"
# Claude spawns security-reviewer subagent
# Returns isolated analysis without polluting main context

# Meanwhile, hooks auto-format every file Claude edits
```

### Unlock: Task Delegation, Automated Workflows
You now have a small AI team. Subagents handle specialized work. Hooks handle automation.

### Prerequisites
- Level 1 mastery
- Understand your common specialized needs
- Basic shell scripting for hooks

### When to Advance
- You want overnight feature development
- You want Claude to work without your presence
- You need iterative self-improvement on tasks

---

## Level 3: Simple Loops (Basic Ralph)

### Description
Claude Code runs in a loop until a task is complete. Each iteration gets fresh context. External memory via git and files. Named after Geoffrey Huntley's "Ralph Wiggum" pattern.

### What You Add

**The core loop:**
```bash
#!/bin/bash
# ralph-simple.sh
while :; do
  claude "Check progress.txt, complete next task, update progress" | tee output.txt

  if grep -q "ALL TASKS COMPLETE" output.txt; then
    break
  fi

  sleep 5
done
```

**External memory files:**
```
progress.txt    # What's done, what's next
AGENTS.md       # Learnings for future iterations
```

### Key Characteristics
- Fresh context each iteration
- Memory persists in files and git
- Simple completion condition
- Single task list

### Example Workflow
```bash
# Set up tasks
echo "TODO: Add login form" >> progress.txt
echo "TODO: Add password validation" >> progress.txt

# Run Ralph
./ralph-simple.sh
# Claude iterates, updating progress.txt after each task
# Commits after each completion
# Exits when all TODOs are DONEs
```

### Unlock: Autonomous Execution
Claude can now work without you watching. Come back to find tasks completed.

### Prerequisites
- Level 2 mastery
- Comfort with Claude running unattended
- Clear, verifiable tasks

### When to Advance
- You need structured acceptance criteria
- You want automatic quality gates
- You need to track complex multi-story features

---

## Level 4: PRD-Driven Loops (Full Ralph)

### Description
JSON-based task tracking with acceptance criteria, priority ordering, and quality gates. Full product requirement documents drive autonomous development.

### What You Add

**prd.json structure:**
```json
{
  "branchName": "ralph/auth-feature",
  "userStories": [
    {
      "id": "US-001",
      "title": "Create login form component",
      "acceptanceCriteria": [
        "Email/password fields render",
        "Validates email format",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-002",
      "title": "Add form submission handler",
      "acceptanceCriteria": [
        "Calls auth API on submit",
        "Shows error on failure",
        "Redirects on success",
        "npm run typecheck passes"
      ],
      "priority": 2,
      "passes": false,
      "notes": ""
    }
  ]
}
```

**prompt.md (agent instructions):**
```markdown
# Ralph Agent Instructions

1. Read prd.json and progress.txt
2. Pick highest priority story where passes: false
3. Implement that ONE story
4. Run typecheck and tests
5. If passing: commit, update prd.json (passes: true)
6. Append learnings to progress.txt

## Stop Condition
If ALL stories pass, output: <promise>COMPLETE</promise>
```

**Enhanced loop script:**
```bash
#!/bin/bash
MAX_ITERATIONS=${1:-25}

for i in $(seq 1 $MAX_ITERATIONS); do
  echo "=== Iteration $i ==="

  OUTPUT=$(cat prompt.md | claude --dangerously-skip-permissions 2>&1 | tee /dev/stderr)

  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo "All stories complete!"
    exit 0
  fi

  sleep 2
done

echo "Max iterations reached"
```

### Key Characteristics
- Structured user stories with explicit criteria
- Automatic quality gates (typecheck, tests)
- Priority ordering (dependencies first)
- Commit per story for clean history

### Story Sizing Rules
- **Too big:** "Build the entire auth system"
- **Just right:** "Add login form component"
- **Rule:** If you can't describe it in 2-3 sentences, split it

### Example Workflow
```bash
# 1. Create PRD
claude "Create a prd.json for adding user authentication"

# 2. Run Ralph
./ralph.sh 25

# 3. Go to sleep
# 4. Wake up to 15 commits, all tests passing
```

### Unlock: Structured Autonomous Development
Real features shipped overnight. Learnings compound across iterations.

### Prerequisites
- Level 3 mastery
- Skills in PRD/story writing
- Good test coverage in your project

### When to Advance
- You want multiple agents working simultaneously
- You want agents coordinating on complex tasks
- You're hitting limits of sequential processing

---

## Level 5: Multi-Agent Orchestration

### Description
Central orchestrator delegates to specialized workers. Hub-and-spoke architecture. Agents coordinate via task management and file-based handoffs. Powered by CC Mirror or similar tools.

### What You Add

**CC Mirror setup:**
```bash
npx cc-mirror quick --provider mirror --name mclaude
mclaude
> "Load the orchestration skill and initiate"
```

**Orchestration skill (from CC Mirror):**
```markdown
# Orchestrator Mental Model

YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS.
You are the CONDUCTOR. Your agents play the instruments.

## Tool Ownership
### Orchestrator Uses:
- Read (1-2 files max for reference)
- TaskCreate, TaskUpdate, TaskList
- Task (to spawn workers)

### Workers Use:
- Read, Write, Edit, Bash
- Glob, Grep, WebFetch
- CAN'T spawn sub-agents
```

**Worker preamble template:**
```markdown
CONTEXT: You are a WORKER agent, not an orchestrator.

RULES:
- Complete ONLY the task below
- Use tools directly (Read, Write, Edit, Bash)
- Do NOT spawn sub-agents
- Report results with absolute file paths

TASK: [specific task here]
```

### Architecture
```
         Orchestrator
              |
    +---------+---------+
    |         |         |
 Coder     Tester    Docs
 Agent     Agent     Agent
```

### Key Characteristics
- Clear role separation
- Parallel task execution
- Centralized coordination
- Task dependency tracking

### Model Selection for Workers
| Model | Use Case |
|-------|----------|
| **Haiku** | File lookups, simple transforms. Spawn 5-10 parallel. |
| **Sonnet** | Implementation, test generation. Main workhorse. |
| **Opus** | Architecture decisions, ambiguous tasks. Reserve for complex. |

### Example Workflow
```
> "Build a REST API for user management"

Orchestrator spawns:
  - Architect agent (Opus) → design decisions
  - Coder-1 (Sonnet) → user model
  - Coder-2 (Sonnet) → routes
  - Tester (Sonnet) → integration tests
  - Docs (Haiku) → API documentation

All work in parallel, orchestrator tracks progress
```

### Unlock: Parallel Specialized Work
Multiple agents working simultaneously on coordinated tasks.

### Prerequisites
- Level 4 mastery
- CC Mirror or equivalent setup
- Comfort with agent coordination

### When to Advance
- You need truly parallel work on the same codebase
- You want git worktree isolation
- You're managing 5+ simultaneous agents

---

## Level 6: Parallel Swarms + Worktrees

### Description
Git worktrees provide complete isolation for parallel agents. Multiple Ralph loops running simultaneously. Merge orchestration handles conflicts.

### What You Add

**Git worktree setup:**
```bash
# Create isolated worktrees for parallel agents
git worktree add ../wt-auth feature-auth
git worktree add ../wt-payments feature-payments
git worktree add ../wt-notifications feature-notifications
```

**Parallel Ralph spawner:**
```bash
#!/bin/bash
# spawn-parallel-ralph.sh

for feature in auth payments notifications; do
  git worktree add ../wt-$feature $feature-branch 2>/dev/null
  (
    cd ../wt-$feature
    ./ralph.sh 20
  ) &
done

wait
echo "All features complete"
```

**Merge coordinator:**
```bash
#!/bin/bash
# merge-all.sh

git checkout main

for feature in auth payments notifications; do
  git merge $feature-branch --no-commit

  if [ $? -ne 0 ]; then
    echo "Conflict in $feature - semantic merge required"
    # Use Claude to resolve conflicts semantically
    claude "Resolve merge conflicts in $(git diff --name-only --diff-filter=U)"
  fi

  git commit -m "Merge $feature"
done
```

### Architecture
```
Main Repo
    |
    +---> Worktree: auth (Agent 1)
    |         |
    |         +-> Ralph loop running
    |
    +---> Worktree: payments (Agent 2)
    |         |
    |         +-> Ralph loop running
    |
    +---> Worktree: notifications (Agent 3)
              |
              +-> Ralph loop running
```

### Key Characteristics
- Complete file isolation (no conflicts during work)
- True parallel development
- Merge handled after completion
- Linear scale with workload

### Example Workflow
```bash
# Morning: Plan features, create PRDs
claude "Create prd.json for auth, payments, and notifications features"

# Spawn parallel workers
./spawn-parallel-ralph.sh

# Evening: Merge results
./merge-all.sh

# Three features, one day, minimal human intervention
```

### Unlock: Massive Parallelization
10x productivity through true parallel development.

### Prerequisites
- Level 5 mastery
- Git worktree familiarity
- Merge conflict resolution strategies

### When to Advance
- You want a persistent team of specialized agents
- You want self-improving systems
- You're ready for team-scale operations solo

---

## Level 7: Full Agent Factory (Gas Town)

### Description
Factory architecture for agent production. 7+ specialized roles working continuously. Self-improving systems that add capabilities. Human becomes Product Manager, agents become the engineering team.

### What You Add

**Gas Town installation:**
```bash
go install github.com/steveyegge/gastown/cmd/gt@latest
gt init
gt rig add ~/my-project
```

**The 7 Roles:**
| Role | Function |
|------|----------|
| **Mayor** | Town-level coordination across all projects |
| **Deacon** | Monitoring, health checks, handshakes |
| **Dogs** | Quality gates, watchdogs, linting |
| **Refinery** | Task decomposition from high-level specs |
| **Polecat** | Named persistent workers (specialized) |
| **Witness** | Per-project observer |
| **Crew** | Ephemeral workers for burst tasks |
| **Overseer (YOU)** | Human boss with inbox |

**The Inbox Pattern:**
```
You just make up features, design them,
file the implementation plans, and sling
work around to your polecats and crew.
```

### Architecture
```
Gas Town (~/.gt)
    |
    +---> HQ (Mayor, Deacon, Dogs)
    |
    +---> Rig: Project A
    |         +---> Witness
    |         +---> Polecat: Alice (frontend)
    |         +---> Polecat: Bob (backend)
    |         +---> Crew (as needed)
    |
    +---> Rig: Project B
              +---> Witness
              +---> Polecat: Charlie (full-stack)
              +---> Crew (as needed)
```

### Key Characteristics
- Persistent named agents with specializations
- Self-improvement loops (agents can improve themselves)
- MCP Agent Mail for inter-agent communication
- tmux-based UI for monitoring
- Expensive (multiple API accounts)

### Mental Model Shift
> "You're a Product Manager. Gas Town is an Idea Compiler. You file features, agents build them."

### Example Workflow
```bash
# Morning standup
gt status

# File new feature
gt feature add "Build invoice generation system"

# Refinery decomposes into tasks
# Assigns to appropriate polecats
# You review in your inbox

# Polecats work throughout the day
# Dogs run quality checks
# Deacon monitors health

# Evening: Review completed work
gt inbox review
gt approve 5 7 12  # Approve completed items
```

### Unlock: Team-Scale Productivity Solo
One person with Gas Town = small engineering team output.

### Prerequisites
- Level 6 mastery
- Significant API budget
- Comfort with chaos
- Experience managing real teams (the patterns transfer)

### Warnings (from Steve Yegge)
- "Code is 3 weeks old, smuggled 400 miles upriver"
- "100% vibe-coded - never looked at the code myself"
- "If you have any doubt whatsoever, you can't use it"
- "Expensive as hell"
- "Requires tmux"

---

## Progression Guide

### Moving Up Each Level

| From | To | Key Steps |
|------|-----|-----------|
| 0 | 1 | Create CLAUDE.md, make 3 slash commands for common tasks |
| 1 | 2 | Add one subagent for security/review, add format-on-save hook |
| 2 | 3 | Write a simple bash loop, let it run unattended for one task |
| 3 | 4 | Create your first prd.json, run Ralph on a real feature |
| 4 | 5 | Set up CC Mirror, orchestrate 3 agents on one task |
| 5 | 6 | Use worktrees, run 3 parallel Ralph loops on related features |
| 6 | 7 | Install Gas Town, create your first rig, name your first polecat |

### Time Investment by Level

| Level | Setup Time | Mastery Time |
|-------|------------|--------------|
| 0 | 0 | 1 day |
| 1 | 30 min | 1 week |
| 2 | 2 hours | 2 weeks |
| 3 | 1 hour | 1 week |
| 4 | 4 hours | 2 weeks |
| 5 | 4 hours | 2 weeks |
| 6 | 2 hours | 1 week |
| 7 | 1 day | 1+ month |

### Cost Implications

| Level | API Cost/Month (Active Use) |
|-------|----------------------------|
| 0-1 | $20-50 |
| 2-3 | $50-100 |
| 4 | $100-200 |
| 5 | $200-400 |
| 6 | $400-800 |
| 7 | $800+ (multiple accounts) |

---

## Prerequisites by Level

### Level 0
- Claude Code installed
- Basic terminal familiarity

### Level 1
- Good understanding of your project's architecture
- Ability to document patterns and standards
- Markdown familiarity

### Level 2
- Shell scripting basics
- Understanding of Claude's tool system
- Comfort with automation running in background

### Level 3
- Trust in unattended operation
- Good test coverage
- Clear task decomposition skills

### Level 4
- PRD/user story writing experience
- Strong acceptance criteria skills
- Quality gate infrastructure (typecheck, tests)

### Level 5
- Multi-agent mental model
- Orchestration tool setup (CC Mirror)
- Comfort with parallel coordination

### Level 6
- Git worktree proficiency
- Merge conflict resolution strategies
- Infrastructure for parallel execution

### Level 7
- Go runtime for Gas Town
- tmux proficiency
- Significant budget
- Product management mindset
- Comfort with chaos and imperfection

---

## Anti-Patterns at Each Level

### Level 0
- Asking Claude to "just build everything"
- Not learning from Claude's explanations

### Level 1
- Overloading CLAUDE.md with everything (keep it focused)
- Creating too many slash commands (quality over quantity)

### Level 2
- Spawning subagents for simple lookups (use tools directly)
- Complex logic in hooks (keep them simple)

### Level 3
- Stories too large for one context window
- No external memory (loops forget everything)

### Level 4
- Vague acceptance criteria ("works correctly")
- Skipping the typecheck quality gate

### Level 5
- Workers spawning sub-agents (recursion chaos)
- Orchestrator doing implementation work

### Level 6
- Not isolating worktrees properly
- Ignoring merge conflicts

### Level 7
- Trying Gas Town without Level 6 mastery
- Expecting polish and stability
- Underbudgeting for API costs

---

## Quick Reference: Key Tools by Level

| Level | Primary Tools |
|-------|---------------|
| 0 | `claude` |
| 1 | CLAUDE.md, `.claude/commands/` |
| 2 | `.claude/agents/`, `~/.claude/settings.json` hooks |
| 3 | bash loop, progress.txt |
| 4 | prd.json, prompt.md, ralph.sh |
| 5 | CC Mirror, orchestration skill, Task tool |
| 6 | `git worktree`, parallel bash, merge scripts |
| 7 | Gas Town (`gt`), tmux, MCP Agent Mail |

---

## Resources

### Official
- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [Claude Code Plugins](https://github.com/anthropics/claude-code/tree/main/plugins)

### Community
- [CC Mirror](https://github.com/numman-ali/cc-mirror) - Multi-agent orchestration
- [Ralph](https://github.com/snarktank/ralph) - PRD-driven loops
- [Gas Town](https://github.com/steveyegge/gastown) - Agent factory
- [Claude HUD](https://github.com/jarrodwatts/claude-hud) - Session visibility
- [Sub-Agents Directory](https://sub-agents.directory) - 200+ ready-to-use agents

### Originators to Follow
- @ryancarson - Ralph implementations
- @nummanali - CC Mirror, orchestration skills
- @steve_yegge - Gas Town, vibe coding philosophy
- @mollycantillon - Panopticon pattern
- @mattpocockuk - Ralph popularization
- @GeoffreyHuntley - Original Ralph concept

---

## The Bottom Line

> "Given excellent upfront specification, we can already achieve meaningful unattended software production in 2026."
> - Ryan Carson

Start at Level 0. Master each level before advancing. By Level 4, you're shipping features overnight. By Level 7, you're running a solo engineering department.

The ladder is real. Climb it.

---

## Tags

`#complexity-ladder` `#progression` `#claude-md` `#slash-commands` `#subagents` `#hooks` `#ralph` `#prd` `#cc-mirror` `#orchestration` `#worktrees` `#gas-town` `#multi-agent` `#autonomous` `#synthesis`

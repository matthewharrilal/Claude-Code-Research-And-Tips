# Claude Code Judgment Guide

**Purpose:** Decision support for selecting the right patterns, tools, and approaches
**Philosophy:** Start simple, add complexity only when simpler approaches demonstrably fail

---

## Quick Decision Trees

### "Which Orchestration Pattern Should I Use?"

```
Is this a simple, single task?
|
+-- Yes --> Single interactive session
|
+-- No --> Do you need to walk away (AFK)?
    |
    +-- No --> Multiple distinct domains?
    |   |
    |   +-- Yes --> CC Mirror (hub-and-spoke)
    |   |
    |   +-- No --> Single session with subagents
    |
    +-- Yes --> Can you write clear acceptance criteria?
        |
        +-- No --> Not ready for autonomous (refine requirements first)
        |
        +-- Yes --> Need parallelism across features?
            |
            +-- Yes --> Need deep specialization (10+ agents)?
            |   |
            |   +-- Yes --> Gas Town (agent factory)
            |   |
            |   +-- No --> Parallel Ralph + Git Worktrees
            |
            +-- No --> PRD-driven Ralph loop
```

---

### "Which Memory Pattern Should I Use?"

```
How long does this need to persist?
|
+-- Just this session --> No special setup needed
|
+-- Across sessions in one project --> CLAUDE.md
|   |
|   +-- Team knowledge? --> Git-tracked CLAUDE.md
|   +-- Personal/secrets? --> CLAUDE.local.md (gitignored)
|
+-- Within an autonomous loop --> progress.txt + prd.json + git
|
+-- Across many projects --> Claude-Mem (semantic memory)
|
+-- Across multiple life domains --> Panopticon (isolated directories)
```

---

### "When Should I Go Autonomous?"

```
Can you define "done" in verifiable terms?
|
+-- No --> Stay interactive (refine requirements)
|
+-- Yes --> Do you have test coverage?
    |
    +-- No --> Add tests first, then go autonomous
    |
    +-- Yes --> Can tasks fit in one context window each?
        |
        +-- No --> Split tasks smaller
        |
        +-- Yes --> Is this security-critical code?
            |
            +-- Yes --> Use HOTL Ralph (human on the loop)
            |
            +-- No --> READY FOR RALPH
                |
                +-- Setup: prd.json + ralph.sh + progress.txt
                +-- Run: ./ralph.sh 25
                +-- Go: Sleep / Do something else
```

---

### "What Model Should This Task Use?"

```
What type of work is this?
|
+-- Simple lookup, file search, formatting --> Haiku ($0.25/$1.25 per 1M)
|
+-- Implementation, test generation, standard coding --> Sonnet ($3/$15 per 1M)
|
+-- Architecture, complex reasoning, ambiguous decisions --> Opus ($15/$75 per 1M)
|
+-- Security review, critical system design --> Opus (worth the cost)
```

---

## Pattern Selection by Scenario

### Scenario: "Ship a feature overnight"

| Factor | Recommendation |
|--------|----------------|
| **Pattern** | PRD-driven Ralph |
| **Why** | Fresh context each iteration, quality gates, autonomous |
| **Setup time** | 30-60 minutes |
| **Success rate** | High (with good PRD) |
| **Prerequisites** | Clear acceptance criteria, test coverage |
| **Cost** | $10-30 depending on complexity |

**Quick start:**
```bash
# 1. Create prd.json with 5-10 atomic stories
# 2. Each story: 2-3 sentence description, verifiable criteria
# 3. Include "npm run typecheck passes" in every story
./scripts/ralph/ralph.sh 25
```

---

### Scenario: "Build a complex multi-domain feature"

| Factor | Recommendation |
|--------|----------------|
| **Pattern** | CC Mirror (hub-and-spoke) |
| **Why** | Parallelism, specialization, cost optimization |
| **Setup time** | 1-2 hours |
| **Success rate** | Medium (coordination overhead) |
| **Prerequisites** | Comfort with multi-agent mental model |
| **Cost** | $30-80/day |

**Architecture:**
```
         Orchestrator (YOU DO NOT WRITE CODE)
                     |
     +---------------+---------------+
     |               |               |
  Coder          Tester           Docs
  (Sonnet)       (Sonnet)         (Haiku)
```

---

### Scenario: "Parallel features on separate branches"

| Factor | Recommendation |
|--------|----------------|
| **Pattern** | Ralph + Git Worktrees |
| **Why** | True file isolation, shared git history |
| **Setup time** | 30 minutes |
| **Success rate** | High (no conflicts during work) |
| **Prerequisites** | Git worktree familiarity |
| **Cost** | 2-3x single Ralph cost |

**Quick start:**
```bash
for feature in auth payments notifications; do
  git worktree add ../wt-$feature $feature-branch
  (cd ../wt-$feature && ./ralph.sh 20) &
done
wait
```

---

### Scenario: "Life automation across multiple domains"

| Factor | Recommendation |
|--------|----------------|
| **Pattern** | Panopticon (isolated directories) |
| **Why** | Complete domain isolation, no cross-contamination |
| **Setup time** | 4-8 hours |
| **Success rate** | High (simplicity in isolation) |
| **Prerequisites** | Cron job setup, directory discipline |
| **Cost** | Variable (depends on activity per domain) |

**Structure:**
```
~/nox        # Company work
~/metrics    # Analytics
~/trades     # Finance
~/health     # Wellness
~/writing    # Content
```

---

### Scenario: "10+ agents, team-scale output solo"

| Factor | Recommendation |
|--------|----------------|
| **Pattern** | Gas Town (agent factory) |
| **Why** | Self-improving, persistent workers, factory production |
| **Setup time** | 8+ hours |
| **Success rate** | Variable (requires Stage 7+ experience) |
| **Prerequisites** | Go runtime, tmux, $50-200/day budget |
| **Cost** | $50-200/day |

**Warning signs you're not ready:**
- Fewer than 100 hours with multi-agent setups
- Uncomfortable with emergence and chaos
- Need predictable, controlled outcomes
- Budget-constrained

---

## Common Mistakes and Fixes

### Mistake: Tasks too large

**Symptom:** Context overflows, quality degrades, agent loses track

**Diagnosis:** Task takes more than one context window

**Fix:** Apply the 2-3 sentence rule
```
BAD:  "Build the entire authentication system"
GOOD: "Add login form component with email/password fields"
```

**Sweet spot sizing:**
- 100-500 lines of code change
- 1-3 files modified
- 15-60 minutes equivalent human time
- Clear "done" definition

---

### Mistake: Skipping verification

**Symptom:** Errors compound, broken code accumulates, future iterations inherit bugs

**Quote:** "If you don't do this, you're hamstringing future agent runs with bad code"

**Fix:** Quality gates on EVERY commit
```json
"acceptanceCriteria": [
  "Implementation complete",
  "npm run typecheck passes",   // <-- ALWAYS
  "npm run test passes"         // <-- ALWAYS
]
```

---

### Mistake: Vague acceptance criteria

**Symptom:** Agent marks tasks complete prematurely, Claude claims done without proof

**Bad:**
```json
"acceptanceCriteria": ["Works correctly", "Good UX", "Handles edge cases"]
```

**Good:**
```json
"acceptanceCriteria": [
  "Login form renders at /login",
  "Email validation rejects 'notanemail'",
  "Submit button disabled when form invalid",
  "npm run typecheck passes"
]
```

---

### Mistake: Context rot in long sessions

**Symptom:** Quality drops after 60-70% context, Claude forgets earlier decisions

**Fix:** Use fresh context pattern (Ralph)
- Each iteration = new Claude instance
- Memory lives in external files
- No accumulated confusion

**Alternative:** Amp auto-handoff at 90% context
```json
{
  "amp.experimental.autoHandoff": {
    "context": 90
  }
}
```

---

### Mistake: progress.txt overwriting instead of appending

**Symptom:** Learnings lost between iterations

**Fix:** Use the word "APPEND" explicitly
```markdown
APPEND to progress.txt (never update or overwrite previous entries):
```

---

### Mistake: Workers spawning sub-agents

**Symptom:** Recursion chaos, runaway costs, coordination breakdown

**Fix:** Clear role separation
```
Orchestrator: Can spawn workers via Task tool
Workers: CANNOT spawn sub-agents, use tools directly
```

---

### Mistake: UI verification without browser

**Symptom:** Visual bugs, rendering issues, Claude claims complete but UI broken

**Fix:** Add Playwright verification
```json
"acceptanceCriteria": [
  "Verify at localhost:3000/login using Playwright screenshot"
]
```

---

### Mistake: Jumping to complexity too fast

**Symptom:** Setup overhead exceeds value, debugging difficulty, frustration

**The progression to follow:**
```
Level 0: Single session (master this first)
Level 1: CLAUDE.md + slash commands
Level 2: Subagents + hooks
Level 3: Simple Ralph loops
Level 4: PRD-driven Ralph
Level 5: CC Mirror multi-agent
Level 6: Parallel swarms + worktrees
Level 7: Gas Town factory
```

**Rule:** Master each level before advancing. Don't skip.

---

## The Judgment Framework

### Step 1: Assess Complexity

| Complexity | Indicators | Typical Pattern |
|------------|-----------|-----------------|
| **Simple** | One task, < 30 min, exploratory | Single session |
| **Medium** | Multi-part, defined end state | Ralph loop |
| **High** | Multi-domain, needs parallelism | CC Mirror |
| **Very High** | 10+ agents, team-scale | Gas Town |

---

### Step 2: Check Constraints

| Constraint | Impact on Pattern Selection |
|------------|---------------------------|
| **Budget limited** | Stick to Haiku/Sonnet, avoid Gas Town |
| **Must walk away** | Need Ralph (autonomous) pattern |
| **Security-critical** | Use HOTL (human on the loop) |
| **No test coverage** | Cannot go autonomous safely |
| **Exploratory work** | Stay interactive, no loops |

---

### Step 3: Select Pattern

Use the decision trees above, or this quick matrix:

| Scenario | Pattern | Setup | Cost/Day |
|----------|---------|-------|----------|
| Quick task | Interactive | 0 | $5-10 |
| Feature overnight | PRD-Ralph | 30 min | $10-30 |
| Multi-domain feature | CC Mirror | 1-2 hr | $30-80 |
| Parallel features | Ralph + Worktrees | 30 min | $30-90 |
| Life automation | Panopticon | 4-8 hr | Variable |
| Team-scale solo | Gas Town | 8+ hr | $50-200 |

---

### Step 4: Configure Appropriately

**For Ralph loops:**
- Max iterations: 25 (default reasonable)
- Task size: 2-3 sentence rule
- Always include typecheck in criteria
- Use `--dangerously-skip-permissions` for unattended

**For multi-agent:**
- Clear role boundaries
- Model selection per role (Haiku for lookups, Sonnet for code, Opus for architecture)
- File ownership rules if parallel

**For memory:**
- CLAUDE.md for project standards
- progress.txt for session learning (append-only)
- prd.json for task state
- Git for everything else

---

### Step 5: Monitor and Adapt

**Watch for:**
- Stuck loops (same commit for 3+ iterations)
- Context warnings (approaching limits)
- Quality degradation (tests failing after passing)
- Cost spikes (unexpected token usage)

**Adapt when:**
- Tasks consistently too large: Split further
- Loop always hitting max: Increase max or improve PRD
- Quality dropping: Add verification steps
- Cost too high: Switch to cheaper models for simple tasks

---

## When to Break the Rules

### Exploration Mode

Rules to break: Structured PRD, defined completion, verification gates

Why: Discovery needs freedom. You don't know what "done" looks like yet.

Instead: Interactive session, let Claude explore, document findings as you go.

---

### Prototyping

Rules to break: Test coverage, quality gates, careful task sizing

Why: Speed over correctness. Throw it away anyway.

Instead: Single session, rapid iteration, accept technical debt.

---

### Learning

Rules to break: Autonomous execution, efficiency optimization

Why: The goal is understanding, not output.

Instead: HOTL (human on the loop), review every step, ask "why" frequently.

---

### Debugging Complex Issues

Rules to break: Fresh context per iteration, atomic tasks

Why: Context continuity helps trace causation.

Instead: Long interactive session, follow the thread, let context accumulate (just know quality will degrade).

---

## Quick Reference: Pattern Costs

| Pattern | Setup | Daily Cost | Break-even |
|---------|-------|------------|------------|
| Single session | 0 | $5-20 | Immediate |
| CLAUDE.md + commands | 30 min | $5-20 | 1 week |
| Ralph loops | 1-2 hr | $10-50 | 1 week |
| CC Mirror | 2-4 hr | $30-80 | 2 weeks |
| Parallel Ralph | 2-4 hr | $50-100 | 2 weeks |
| Panopticon | 8+ hr | Variable | 1 month |
| Gas Town | 1+ day | $50-200 | 2+ months |

---

## Quick Reference: The Complexity Ladder

```
Level 7: Gas Town Factory           [$800+/mo]   <- Team-scale solo
         |
Level 6: Parallel Swarms            [$400-800]   <- Massive parallelization
         |
Level 5: CC Mirror                  [$200-400]   <- Coordinated multi-agent
         |
Level 4: PRD-driven Ralph           [$100-200]   <- Structured autonomous
         |
Level 3: Simple Ralph loops         [$50-100]    <- Basic autonomous
         |
Level 2: Subagents + hooks          [$50-100]    <- Task delegation
         |
Level 1: CLAUDE.md + commands       [$20-50]     <- Consistent behavior
         |
Level 0: Single session             [$20-50]     <- Basic assistance
```

**Mastery time per level:** 1-4 weeks
**Rule:** Don't skip levels. Master each before advancing.

---

## The Bottom Line

**The best pattern is the simplest one that meets your needs.**

Complexity has costs:
- Setup time
- Debugging difficulty
- Cognitive overhead
- Actual dollars

Start simple. Add complexity only when the simpler approach demonstrably fails.

> "Given excellent upfront specification, we can already achieve meaningful unattended software production in 2026."

The capability is real. The judgment is knowing when and how to deploy it.

---

## Checklist: Before Going Autonomous

- [ ] Tasks are atomic (2-3 sentence rule)
- [ ] Dependencies ordered by priority
- [ ] Acceptance criteria are verifiable (not subjective)
- [ ] Tests exist or will be created
- [ ] Typecheck included in every story
- [ ] Git branch created
- [ ] progress.txt initialized
- [ ] Max iterations set
- [ ] Verification commands work (`npm test`, etc.)
- [ ] Budget for expected iterations calculated

**If any item is missing:** Stay interactive until ready.

---

*Judgment Guide compiled from synthesis of orchestration, memory, and architecture patterns. Use as decision support, not prescription.*

---
**DEPRECATED** (2026-01-18)

This content has been superseded by D-FINAL synthesis.

**Replacement:** See D-FINAL-mental-models Part 7 for current content.
**Reason:** Content fully covered in D-FINAL with production validation.
**Original preserved below for reference.**

---

# Deriving Patterns from First Principles

> **You Are Here:** This is the "teach a person to fish" guide - how to CREATE new patterns rather than just use existing ones. Read this after mastering `principles-core.md` and several existing patterns. This doc transforms you from a pattern consumer into a pattern creator.

**Purpose:** Teach the derivation process so you can invent new patterns, not just copy existing ones.

**Philosophy:** Every major Claude Code pattern emerged from someone applying a few core principles to a specific constraint. Understanding this process is more valuable than memorizing patterns.

---

## Table of Contents

1. [The Core Principles](#the-core-principles)
2. [The Derivation Process](#the-derivation-process)
3. [The Primitives Catalog](#the-primitives-catalog)
4. [Worked Examples](#worked-examples)
5. [DIY Pattern Derivation](#diy-pattern-derivation)
6. [Practice Problems](#practice-problems)
7. [Validation Checklist](#validation-checklist)

---

## The Core Principles

Before deriving any pattern, internalize these foundational truths:

### Principle 1: Context Is the Primary Constraint

> "Context rot: LLMs get stupider with more tokens"
> -- @mattpocockuk

The ~200K token context window (effective ~100K for quality work) is a **hard ceiling** that shapes every architectural decision. Quality degrades predictably:

| Context Level | Effect |
|--------------|--------|
| 0-50% | Full capability |
| 50-70% | Slight degradation |
| 70-85% | Noticeable quality loss |
| 85%+ | Instruction amnesia, hallucinations |

**Implication:** Any pattern that doesn't respect context limits will eventually fail.

### Principle 2: External State > Internal Memory

> "Each iteration spawns a NEW instance with NO memory of previous work. Continuity comes from: Git history, prd.json, progress.txt"
> -- Ryan Carson

The agent is stateless. All durable state must exist in the filesystem or version control.

**Implication:** Memory is files. Not conversation. Not summaries. Files.

### Principle 3: Verification Is Non-Negotiable

Tests, type checks, and quality gates prevent error propagation. A task isn't complete until it's verified.

**Implication:** Any autonomous pattern must include verification steps, or errors compound.

### Principle 4: Separation of Concerns

> "YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS. You are the CONDUCTOR."
> -- CC Mirror philosophy

Planning and execution are fundamentally different modes. Mixing them causes context pollution, scope creep, and verification bypass.

**Implication:** Orchestrators orchestrate. Workers execute. Never mix.

### Principle 5: Structured Data Beats Natural Language

> "You're a few .md files from outperforming 99% of people"
> -- @gregisenberg

JSON parses deterministically. Markdown has conventions. Natural language is ambiguous.

**Implication:** Store state in structured formats (JSON, YAML) for machine consumption, Markdown for human context.

### Principle 6: Fresh Context Beats Extended Sessions

New agent instances with external state beat long conversations with internal memory. Compaction is lossy; files are not.

**Implication:** Prefer iteration loops over single long sessions.

### Principle 7: Isolation Enables Parallelism

Agents that share state conflict. Agents in isolated environments (branches, worktrees, containers) can work in parallel.

**Implication:** Design for isolation first, coordination second.

### Checkpoint: Core Principles Understanding
**You should now understand:**
- [ ] All 7 core principles and their implications
- [ ] Why context is the PRIMARY constraint that shapes all other decisions
- [ ] The relationship between external state and fresh context
- [ ] How isolation enables parallelism while separation enables clarity

**If unclear:** See `principles-core.md` for detailed explanation of each principle before proceeding.

---

## The Derivation Process

Every pattern follows this derivation sequence:

```
┌─────────────────────────────────────────────────────────────────┐
│                    THE DERIVATION PROCESS                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Step 1: IDENTIFY THE CONSTRAINT                                 │
│          What limitation or requirement are you solving for?     │
│          • Context exhaustion?                                   │
│          • Need parallelism?                                     │
│          • Long-running work?                                    │
│          • Quality degradation?                                  │
│                                                                   │
│  Step 2: APPLY RELEVANT PRINCIPLES                               │
│          Which core principles address this constraint?          │
│          • External state for memory?                            │
│          • Fresh context for quality?                            │
│          • Separation for clarity?                               │
│          • Isolation for parallelism?                            │
│                                                                   │
│  Step 3: COMPOSE PRIMITIVES                                      │
│          What building blocks combine to implement?              │
│          • Loops, JSON state, file handoffs?                     │
│          • Task tool, model selection, preambles?                │
│          • Git worktrees, branches, hooks?                       │
│                                                                   │
│  Step 4: VALIDATE COMPOSITION                                    │
│          Does the pattern actually work?                         │
│          • Does it respect context limits?                       │
│          • Is state recoverable on failure?                      │
│          • Are there verification steps?                         │
│          • Can humans intervene when needed?                     │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## The Primitives Catalog

These are the building blocks you compose into patterns:

### Execution Primitives

| Primitive | What It Does | When To Use |
|-----------|--------------|-------------|
| `claude "..."` | Single Claude invocation | Atomic task execution |
| `for` loop | Repeated invocations | Sequential iteration |
| `&` (background) | Parallel execution | Independent tasks |
| `Task()` tool | Spawn subagent | Delegated work |
| Git worktree | Isolated directory | Parallel branches |
| Docker container | Isolated environment | Maximum isolation |

### State Primitives

| Primitive | What It Does | When To Use |
|-----------|--------------|-------------|
| `progress.txt` | Append-only log | Cross-iteration memory |
| `prd.json` | Task state tracking | Pass/fail status |
| `CLAUDE.md` | Project context | Onboarding/constraints |
| Git commit | Checkpoint | State preservation |
| Handoff JSON | Agent communication | Multi-agent coordination |
| `status.json` | Current state | Live monitoring |

### Control Primitives

| Primitive | What It Does | When To Use |
|-----------|--------------|-------------|
| Completion signal | `<promise>COMPLETE</promise>` | Loop termination |
| Hooks | Lifecycle automation | Notifications, formatting |
| Quality gates | Tests/types before commit | Verification enforcement |
| Timeout | Max iterations | Safety limits |
| Worker preamble | Role enforcement | Orchestrator/worker separation |

### Communication Primitives

| Primitive | What It Does | When To Use |
|-----------|--------------|-------------|
| File handoff | JSON between agents | Async coordination |
| Shared volume | Docker communication | Container patterns |
| Git branch | Merge-based sync | Feature isolation |
| TaskList/TaskGet | Native task API | CC Mirror orchestration |

---

## Worked Examples

### Example 1: Deriving Ralph Wiggum from Principles

**Step 1: Identify the Constraint**

> "I need autonomous execution without quality degradation over time"

The constraint is: **long-running autonomous work that doesn't get stupider.**

**Step 2: Apply Relevant Principles**

Which principles address this?

- **Context Is Primary Constraint** → Quality degrades with context usage
- **Fresh Context > Extended Sessions** → New instances don't accumulate context pollution
- **External State > Internal Memory** → State must persist outside conversation
- **Verification Is Non-Negotiable** → Each iteration must verify its work

**Step 3: Compose Primitives**

| Principle | Primitive Implementation |
|-----------|-------------------------|
| Fresh context | Bash loop spawning new Claude instances |
| External memory | `progress.txt` (append-only), `prd.json` (task state) |
| Verification | Tests + types must pass before marking complete |
| Termination | `<promise>COMPLETE</promise>` signal for loop exit |

**Step 4: Validate Composition**

```bash
# The resulting pattern
for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  claude "Review prd.json. Pick ONE task with passes: false.
          Implement it. Run tests.
          If passing, mark passes: true, commit.
          Append learnings to progress.txt.
          If ALL complete, output: <promise>COMPLETE</promise>"

  if grep -q "<promise>COMPLETE</promise>" output.txt; then
    break
  fi
done
```

**Validation Questions:**
- Context limits respected? Yes - fresh instance each iteration
- State recoverable? Yes - git commits + files persist
- Verification steps? Yes - tests must pass before commit
- Human intervention? Yes - can CTRL+C, edit files, restart

**Result:** Ralph Wiggum pattern

### Checkpoint: Ralph Derivation
**You should now understand:**
- [ ] How to identify the constraint (long-running autonomy without degradation)
- [ ] Which principles address that constraint (context, fresh context, external state, verification)
- [ ] How to select primitives that implement those principles
- [ ] The validation questions that confirm a pattern works

**If unclear:** Re-trace the 4 steps above for Ralph before moving to the next example.

---

### Example 2: Deriving CC Mirror from Principles

**Step 1: Identify the Constraint**

> "I need multiple agents working in parallel without chaos"

The constraint is: **parallelism without coordination failures.**

**Step 2: Apply Relevant Principles**

- **Separation of Concerns** → Planning and execution must be separate roles
- **Isolation Enables Parallelism** → Workers need isolated contexts
- **External State > Internal Memory** → Coordination via files/APIs, not conversation
- **Verification Is Non-Negotiable** → Each worker's output must be checked

**Step 3: Compose Primitives**

| Principle | Primitive Implementation |
|-----------|-------------------------|
| Separation | Orchestrator (Opus) + Workers (Sonnet/Haiku) |
| Isolation | Task tool spawns isolated subagents |
| External state | TaskCreate/TaskUpdate API for coordination |
| Verification | Acceptance criteria in task definitions |

**Step 4: Validate Composition**

```
Orchestrator:
  - Tools: Task*, AskUserQuestion, Read (minimal)
  - NEVER: Write, Edit, Bash

Worker Preamble:
  CONTEXT: You are a WORKER agent, not an orchestrator.
  RULES:
  - Complete ONLY the task described below
  - Do NOT spawn sub-agents
  - Do NOT call TaskCreate or TaskUpdate
  TASK: [specific work]
```

**Validation Questions:**
- Context limits respected? Yes - workers have isolated contexts
- State recoverable? Yes - tasks tracked in native Task API
- Verification steps? Yes - acceptance criteria checked
- Human intervention? Yes - can adjust tasks, cancel workers

**Result:** CC Mirror (Hub-and-Spoke Orchestration) pattern

---

### Example 3: Deriving Git Worktree Parallelism from Principles

**Step 1: Identify the Constraint**

> "I need multiple features developed simultaneously without file conflicts"

The constraint is: **parallel work on shared codebase without conflicts.**

**Step 2: Apply Relevant Principles**

- **Isolation Enables Parallelism** → Each agent needs its own working directory
- **External State > Internal Memory** → Git history is shared, files are isolated
- **Fresh Context > Extended** → Each worktree gets fresh agent instances

**Step 3: Compose Primitives**

| Principle | Primitive Implementation |
|-----------|-------------------------|
| Isolation | Git worktrees create separate directories |
| Shared history | Same .git database across worktrees |
| Independent execution | Separate Claude instance per worktree |
| Merge coordination | Human reviews and merges PRs |

**Step 4: Validate Composition**

```bash
# Create isolated worktrees
git worktree add ../wt-feature-auth feature-auth
git worktree add ../wt-feature-payments feature-payments

# Run parallel agents
(cd ../wt-feature-auth && claude "Implement auth") &
(cd ../wt-feature-payments && claude "Implement payments") &
wait

# Human merges
git checkout main
git merge feature-auth
git merge feature-payments
```

**Validation Questions:**
- Context limits respected? Yes - separate instances
- File conflicts? No - isolated directories
- State recoverable? Yes - each branch has full history
- Human intervention? Yes - merge conflicts resolved by human

**Result:** Git Worktree Parallelism pattern

---

### Example 4: Deriving File-Based Handoffs from Principles

**Step 1: Identify the Constraint**

> "Agents need to pass context to each other without conversation"

The constraint is: **inter-agent communication without shared memory.**

**Step 2: Apply Relevant Principles**

- **External State > Internal Memory** → Communication via filesystem
- **Structured Data > Natural Language** → JSON for machine parsing
- **Context Is Primary** → Handoffs should be compact, not full dumps

**Step 3: Compose Primitives**

| Principle | Primitive Implementation |
|-----------|-------------------------|
| External state | JSON files in shared directory |
| Structured data | Schema: from, to, context, completed, next_steps |
| Compact context | Summary of relevant work, not full history |

**Step 4: Validate Composition**

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

**Validation Questions:**
- Parseable? Yes - valid JSON
- Compact? Yes - summary not full history
- Auditable? Yes - timestamped files persist
- Extensible? Yes - add fields as needed

**Result:** File-Based Handoff pattern

---

### Example 5: Deriving Adversarial Speccing from Principles

**Step 1: Identify the Constraint**

> "I need to stress-test designs before implementation"

The constraint is: **catching design flaws before they become code.**

**Step 2: Apply Relevant Principles**

- **Separation of Concerns** → Proposer and critic are different roles
- **Verification Is Non-Negotiable** → Designs should be verified, not just code
- **Isolation Enables Parallelism** → Subagents have isolated contexts

**Step 3: Compose Primitives**

| Principle | Primitive Implementation |
|-----------|-------------------------|
| Separation | Architect subagent proposes, Critic subagent challenges |
| Verification | Iterate until critic approves |
| Isolation | Each subagent has fresh context |
| Structured personas | DHH, Security Engineer, Performance Engineer |

**Step 4: Validate Composition**

```
Process:
1. Architect proposes design
2. Critic (persona: DHH) challenges for simplicity
3. Architect addresses concerns
4. Critic (persona: Security Engineer) challenges for security
5. Architect addresses concerns
6. Iterate until all critics approve
7. Proceed to implementation
```

**Validation Questions:**
- Catches flaws early? Yes - before code is written
- Multiple perspectives? Yes - different critic personas
- Terminates? Yes - explicit approval required
- Traceable? Yes - each iteration documented

**Result:** Adversarial Speccing pattern

---

## DIY Pattern Derivation

Use this worksheet when facing a new problem:

### Step 1: State Your Constraint

```
I need to: _________________________________________________

The core challenge is: _____________________________________

This is hard because: ______________________________________
```

### Step 2: Identify Applicable Principles

| Principle | Applies? | How? |
|-----------|----------|------|
| Context is primary constraint | | |
| External state > internal memory | | |
| Verification is non-negotiable | | |
| Separation of concerns | | |
| Structured data > natural language | | |
| Fresh context > extended sessions | | |
| Isolation enables parallelism | | |

### Step 3: Select Primitives

**Execution:** Which execution primitives?
```
[ ] Single invocation  [ ] Loop  [ ] Parallel  [ ] Subagent  [ ] Worktree  [ ] Container
```

**State:** Which state primitives?
```
[ ] progress.txt  [ ] prd.json  [ ] CLAUDE.md  [ ] Git commits  [ ] Handoff JSON  [ ] status.json
```

**Control:** Which control primitives?
```
[ ] Completion signal  [ ] Hooks  [ ] Quality gates  [ ] Timeout  [ ] Worker preamble
```

**Communication:** Which communication primitives?
```
[ ] File handoff  [ ] Shared volume  [ ] Git branch  [ ] Task API
```

### Step 4: Compose and Validate

**Your Pattern:**
```
[Describe the composed pattern here]
```

**Validation Checklist:**
- [ ] Respects context limits?
- [ ] State recoverable on failure?
- [ ] Verification steps included?
- [ ] Human can intervene?
- [ ] Terminates reliably?
- [ ] Scales as needed?

---

## Practice Problems

### Problem 1: The Documentation Gap

**Constraint:** You need to generate comprehensive documentation for a large codebase, but reading the entire codebase would exhaust context.

**Hints:**
- What principle addresses context exhaustion?
- How can you process the codebase in chunks?
- How should documentation state accumulate?

**Your Derivation:**
```
1. Constraint: _______________________________________________
2. Principles: _______________________________________________
3. Primitives: _______________________________________________
4. Composition: ______________________________________________
```

<details>
<summary>One Possible Solution</summary>

**Principles Applied:**
- Context is primary → Process in chunks
- External state → Accumulate docs in files
- Fresh context → New instance per module

**Primitives:**
- Loop over modules
- Per-module doc file
- Aggregation step at end

**Pattern:**
```bash
for module in $(find src -type d -maxdepth 1); do
  claude "Document $module only. Write to docs/${module}.md"
done
claude "Synthesize docs/*.md into docs/README.md"
```
</details>

---

### Problem 2: The Security Audit

**Constraint:** You need multiple security perspectives reviewing code (OWASP, crypto, injection, etc.) but a single agent can't hold all expertise.

**Hints:**
- What principle addresses multiple perspectives?
- How do specialists work without conflicting?
- How are findings aggregated?

**Your Derivation:**
```
1. Constraint: _______________________________________________
2. Principles: _______________________________________________
3. Primitives: _______________________________________________
4. Composition: ______________________________________________
```

<details>
<summary>One Possible Solution</summary>

**Principles Applied:**
- Separation of concerns → Specialized reviewers
- Isolation → Each reviewer has own context
- External state → Findings in shared files

**Primitives:**
- Parallel subagents with security personas
- Findings files per reviewer
- Aggregation pass

**Pattern:**
```
Spawn in parallel:
- OWASP reviewer → findings/owasp.md
- Crypto reviewer → findings/crypto.md
- Injection reviewer → findings/injection.md

Then: Aggregator synthesizes findings/security-report.md
```
</details>

---

### Problem 3: The Living Specification

**Constraint:** Requirements change during development. How do you prevent the PRD from becoming stale?

**Hints:**
- What principle addresses state management?
- When should the spec update?
- How do you prevent drift between spec and code?

**Your Derivation:**
```
1. Constraint: _______________________________________________
2. Principles: _______________________________________________
3. Primitives: _______________________________________________
4. Composition: ______________________________________________
```

<details>
<summary>One Possible Solution</summary>

**Principles Applied:**
- External state → PRD is source of truth
- Verification → Code must match spec
- Separation → Spec updates are explicit

**Primitives:**
- Hooks to validate PRD-code alignment
- Git commits track spec versions
- Separate "spec update" vs "implement" modes

**Pattern:**
```
PostToolUse hook on Edit:
  If modifying behavior → Prompt: "Does this change require PRD update?"

Before each Ralph iteration:
  Validate: Current code matches PRD assertions

Explicit PRD update mode:
  "Update PRD for new requirement: [X]"
  Regenerate affected user stories
```
</details>

---

### Problem 4: The Cost Optimizer

**Constraint:** You're running expensive Opus calls but many tasks don't need that capability. How do you minimize cost while maintaining quality?

**Hints:**
- What principle addresses separation?
- How do you classify task complexity?
- What triggers model escalation?

**Your Derivation:**
```
1. Constraint: _______________________________________________
2. Principles: _______________________________________________
3. Primitives: _______________________________________________
4. Composition: ______________________________________________
```

<details>
<summary>One Possible Solution</summary>

**Principles Applied:**
- Separation → Different models for different tasks
- Verification → Escalate on failure
- Structured data → Task metadata includes complexity

**Primitives:**
- Task classification in prd.json
- Model selection rules
- Escalation on failure

**Pattern:**
```json
{
  "task": "Implement login",
  "complexity": "simple",  // simple → Haiku, medium → Sonnet, complex → Opus
  "escalated": false
}

If simple task fails twice:
  Set escalated: true
  Retry with Sonnet

If Sonnet fails:
  Escalate to Opus

Complexity heuristics:
- File lookup: simple
- Pattern implementation: medium
- Architecture decision: complex
```
</details>

---

### Problem 5: The Overnight Orchestrator

**Constraint:** You want to run CC Mirror-style multi-agent work overnight, but need to handle failures gracefully and notify you of critical issues.

**Hints:**
- Combine which existing patterns?
- What triggers human notification?
- How does work resume after failure?

**Your Derivation:**
```
1. Constraint: _______________________________________________
2. Principles: _______________________________________________
3. Primitives: _______________________________________________
4. Composition: ______________________________________________
```

<details>
<summary>One Possible Solution</summary>

**Principles Applied:**
- External state → Checkpoint frequently
- Verification → Catch failures early
- Fresh context → Restart workers on failure
- Isolation → Workers can fail independently

**Primitives:**
- CC Mirror orchestration
- Ralph-style iteration loop
- Hooks for notifications
- Checkpoint files

**Pattern:**
```
Outer Ralph loop:
  Inner CC Mirror orchestration:
    Workers with:
      - Max retry = 3
      - Checkpoint after each task
      - Notification hook on repeated failure

  If orchestrator exits cleanly:
    Check all tasks complete → exit loop
    Else → continue next iteration

  If orchestrator fails:
    Notification hook → Poke/Pushover
    Wait for human input or timeout
    Resume from checkpoint
```
</details>

---

## Validation Checklist

Before deploying any derived pattern, verify:

### Context Management
- [ ] Maximum context usage estimated and acceptable
- [ ] Fresh context strategy if long-running
- [ ] No unbounded state accumulation

### State Durability
- [ ] All state persisted to filesystem or git
- [ ] Can resume from any checkpoint
- [ ] State format is parseable (JSON/YAML/structured MD)

### Error Handling
- [ ] Failures detected and logged
- [ ] Retry strategy defined
- [ ] Escalation path for repeated failures
- [ ] Human notification for critical issues

### Verification
- [ ] Quality gates (tests/types) in workflow
- [ ] No marking complete without verification
- [ ] Cross-checking for multi-agent outputs

### Human Oversight
- [ ] Can pause at any point
- [ ] State is inspectable
- [ ] Overrides are possible
- [ ] Audit trail exists

### Termination
- [ ] Clear completion criteria
- [ ] Maximum iterations/timeout defined
- [ ] Graceful shutdown preserves state

---

## The Meta-Principle

> Patterns are not gospel. They are crystalized solutions to specific constraints.

When your constraint changes, derive a new pattern. When principles evolve, revisit existing patterns. The derivation skill matters more than pattern memorization.

**The progression:**
1. Learn existing patterns → Immediate productivity
2. Understand the principles → Know when patterns apply
3. Master derivation → Create patterns for novel constraints

You are now at step 3.

---

## Quick Reference: Principle → Pattern Mapping

| When You Need | Apply Principle | Consider Pattern |
|---------------|-----------------|------------------|
| Long-running autonomy | Fresh context + External state | Ralph Loop |
| Parallel work | Isolation + Separation | CC Mirror, Worktrees |
| Quality consistency | Verification | CI Green Enforcement |
| Multi-perspective | Separation + Isolation | Adversarial Speccing |
| Persistent memory | External state | progress.txt, Claude-Mem |
| Human oversight | External state + Hooks | Notification patterns |
| Cost optimization | Separation | Model selection matrix |
| Recovery | External state + Verification | Checkpointing |

---

## Troubleshooting

### Common Issue: Derived Pattern Fails in Practice
**Symptom:** Pattern looks correct on paper but fails when executed
**Cause:** Usually a missed validation question or incomplete primitive selection
**Fix:**
1. Re-run the validation checklist rigorously:
   - [ ] Respects context limits?
   - [ ] State recoverable on failure?
   - [ ] Verification steps included?
   - [ ] Human can intervene?
   - [ ] Terminates reliably?
2. Check for missing primitives (often: external memory, termination condition)
3. Test with a trivial example before scaling

### Common Issue: Can't Identify the Right Principles
**Symptom:** Constraint is clear but unsure which principles apply
**Cause:** Incomplete understanding of principle implications
**Fix:** Use this mapping:
- Long-running work? → P1 (Context), P3 (Fresh), P2 (External)
- Quality degradation? → P3 (Fresh), P6 (Verification)
- Parallel work? → P7 (Isolation), P4 (Separation)
- Coordination needed? → P4 (Separation), P2 (External)

### Common Issue: Primitives Don't Compose Cleanly
**Symptom:** Primitives work individually but conflict when combined
**Cause:** Incompatible primitives or missing "glue" primitive
**Fix:**
1. Check the compatibility matrix in `architecture-composition-rules.md`
2. Add handoff mechanisms between incompatible primitives
3. Consider if you need a wrapper/coordinator primitive

### Common Issue: Pattern Too Complex
**Symptom:** Derived pattern has 10+ primitives; hard to understand
**Cause:** Over-engineering; trying to solve too many constraints at once
**Fix:**
1. Decompose into smaller patterns that compose
2. Start with minimal viable pattern, add primitives incrementally
3. Ask: "What's the simplest pattern that addresses the primary constraint?"

### Common Issue: Reinventing Existing Patterns
**Symptom:** Spend time deriving a pattern that already exists
**Cause:** Not checking existing pattern catalog first
**Fix:**
1. Before deriving, search existing patterns in `architecture-composition-rules.md`
2. Ask: "Is my constraint similar to one that led to Ralph/CC Mirror/etc.?"
3. Consider adapting an existing pattern rather than creating from scratch

### Common Issue: Derivation Feels Too Abstract
**Symptom:** Understand theory but can't apply to real problem
**Cause:** Need more concrete practice
**Fix:**
1. Work through all 5 practice problems in this guide
2. Pick a real constraint from your work and derive a pattern
3. Compare your derivation to how community experts solved similar problems

---

## Tags

`#derivation` `#first-principles` `#pattern-design` `#meta-guide` `#constraint-analysis` `#composition` `#primitives` `#validation`

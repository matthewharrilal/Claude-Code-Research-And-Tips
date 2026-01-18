# Ralph Wiggum - Matt Pocock's Detailed Text Thread

---
## D-FINAL Connection

**This source contributed to:**
- D-FINAL-architecture.md: Section 2.1 (Ralph method articulation)
- D-FINAL-implementation.md: Section 3.3 (stop conditions, progress tracking, CI enforcement)

**Coverage in D-FINAL:** 75%
**High-value unique content:** Detailed stop condition patterns, "append" verb for progress.txt, CI green enforcement rationale, PRD approach problem/solution framing

**Journey references:**
- synthesis/mastery-ralph-complete.md#progress-tracking
- synthesis/architecture-complexity-ladder.md#level-4

**Last enhanced:** 2026-01-18 (Phase 2B)

---

## Source
- **Author:** @mattpocockuk (Matt Pocock) - TypeScript expert, Total TypeScript, AI Hero
- **Date:** 2026-01-04
- **URL:** https://x.com/mattpocockuk/status/2007924876548637089
- **Engagement:** 2440 likes, 193K views, 4853 bookmarks

---

## Core Insight

> "There's an AI coding approach that lets you run seriously long-running AI agents (hours, days) that ship code while you sleep. I've tried it, and I'm not going back."

**The Ralph Wiggum approach:** Run a coding agent with a clean slate, again and again until a stop condition is met.

---

## The Method

### The Bash Script

1. Set up a bash for loop that runs a set number of times (e.g., 10) - finite to prevent infinite runs
2. Inside the loop, get the coding agent to work on a single feature until done
3. Prompt it to say "if, after implementing, there is no further work to be done, reply with `<promise>COMPLETE</promise>`"
4. Check for `<promise>COMPLETE</promise>` inside the loop and exit early if it exists

### Stop Conditions

Multiple approaches:
- **Raw Prompting:** Pass a very clear stop condition to the prompt
- **TODO list:** Give the agent a TODO list to complete
- **PRD (Preferred):** JSON file of user stories with `passes: false`

### Progress Reports

**Critical:** Tell the agent to:
1. **Commit its work** - allows future agents to navigate via git history
2. **Append progress to progress.txt** - standard long-running agent practice

Use verb "append" to make sure it doesn't update previous entries.

### Keep CI Green

Each commit MUST pass all tests and types. Prompt the agent to run typechecks and tests on each commit.

> "If you don't do this, you're hamstringing future agent runs with bad code, and they'll need to bisect to find bugs. Super nasty."

Building healthy feedback loops is CRITICAL to Ralph's success.

---

## The PRD Approach

### Two Problems It Solves

1. **Agent picks tasks too large** - runs out of context window, fails
2. **Agent doesn't know when to stop**

### The Solution

- PRD as JSON file of user stories with `passes: false`
- Prompt agent to pick highest priority feature and ONLY work on that
- Agent updates passing status at end
- Scopes work effectively, uses small part of context window
- Avoids "context rot"

### Stop Condition

> "When all test cases in the PRD pass, emit `<promise>COMPLETE</promise>`"

---

## Thread Gold

### @maurice_kleine - jq Loop Condition

```bash
while jq '.tasks[] | select(.passes == false)' claude-tasks.json | grep -q .; do
  claude --chrome -p echo "[YOUR PROMPT]"
done
```

Uses the `passes` property to end the loop - assumes agent always marks as `true` after a run.

### @amorriscode - Official Plugin

> "The Claude Code team published a Ralph Wiggum plugin"
> github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum

Commands:
- `/ralph-loop "prompt" --completion-promise "COMPLETE" --max-iterations 10`
- `stop-hook` for loop persistence

### @mattpocockuk - Plugin Status

> "Sadly it's broken"

(Note: May be fixed post-Jan 4, 2026)

### @agrimsingh - Cursor Port

> "PRD approach has been great for me. Here's a port using cursor cli"

Emphasizes: Let it make mistakes, tune like a guitar, context is memory.

---

## Summary Checklist

- Bash script with finite iterations
- JSON-based PRD with `passes: false/true`
- progress.txt (append-only)
- Keep CI green (tests + types)
- Feedback loops

> "You'll have an AI coding setup that can ship while you kip."

---

## Links & Resources

- **Official Plugin:** github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum
- **Guide:** awesomeclaude.ai/ralph-wiggum
- **More Content:** aihero.dev/newsletter

---

## Mental Model

View AI coding agents as:
- Short-lived, forgetful workers (clean slate each iteration)
- Rely on external "memory" (git, progress.txt, PRD) for continuity
- Like a persistent child retrying until success

**Key principles:**
- Scope tasks small to fit context
- Commit incrementally with verification
- Append (don't overwrite) progress
- Use verifiable stop conditions over subjective ones
- Build feedback loops (tests/CI) to self-correct

---

## Caveats

- Set finite max iterations to prevent infinite runs
- Without green CI, future iterations inherit bugs
- Plugin may be broken (check latest GitHub)
- Don't overwrite progress.txt - always append
- Poorly defined PRD may cause early/late stops

---

## Actionability

🟡 **Medium Lift** - Requires PRD setup and bash scripting

---

## What You'll See When You Run This

**Before running:** You have a JSON-based PRD (prd.json) and a progress.txt file in your project.

### Basic Bash Loop

```bash
$ for i in {1..10}; do claude "Complete next task from prd.json" | tee output.txt; done
```

**Annotated Output:**
```
=== Loop iteration 1 ===

[Claude starting...]                   ← Fresh context begins

Reading prd.json...
Found 5 tasks:
  auth_login: passes = false          ← Will pick this one
  auth_logout: passes = false
  user_profile: passes = false
  settings_page: passes = false
  dashboard: passes = false

Working on: auth_login

Creating src/auth/login.ts...
Adding route handler...
Writing tests...

Running typecheck... ✓
Running tests... ✓

Updating prd.json:
  auth_login: passes = true           ← Marked complete

Committing: feat: Add login functionality

Appending to progress.txt:
  - Completed auth_login
  - Pattern: Use bcrypt for password hashing

=== Loop iteration 2 ===

[Claude starting...]                   ← Completely fresh context

Reading prd.json...
Found 5 tasks:
  auth_login: passes = true           ← Previous work visible via file
  auth_logout: passes = false         ← Will pick this one
  ...

Working on: auth_logout

[...]                                  ← Continues through tasks

=== Loop iteration 4 ===

Reading prd.json...
  All tasks: passes = true!

No more tasks to complete.
PROMISE COMPLETE HERE                  ← Stop signal

Loop terminated - all tasks done!
```

### Maurice Kleine's jq Loop Condition

```bash
$ while jq '.tasks[] | select(.passes == false)' claude-tasks.json | grep -q .; do
    claude --chrome -p echo "[YOUR PROMPT]"
  done
```

**Annotated Output:**
```
[jq check]                             ← Checks for incomplete tasks
Found incomplete tasks, continuing...

[Claude starting iteration 1...]

Completing: auth_login
✓ Committed

[jq check]                             ← Checks again
Found incomplete tasks, continuing...

[Claude starting iteration 2...]

Completing: auth_logout
✓ Committed

[jq check]
Found incomplete tasks, continuing...

[Claude starting iteration 3...]

Completing: user_profile
✓ Committed

[jq check]
No incomplete tasks found!            ← All tasks have passes: true
Loop ended automatically.             ← jq condition failed, loop stops
```

**Why jq-based is elegant:**
- No need to parse Claude's output for "COMPLETE"
- Directly queries the data structure
- Loop ends when JSON says all tasks done

### Official Plugin Command

```bash
$ /ralph-loop "Build a REST API with CRUD operations" --completion-promise "COMPLETE" --max-iterations 10
```

**Annotated Output:**
```
🚀 Ralph Loop Starting
   Prompt: Build a REST API with CRUD operations
   Max iterations: 10
   Completion promise: "COMPLETE"

=== Iteration 1 / 10 ===

[Claude analyzing request...]

Planning API structure:
  - POST /items (create)
  - GET /items (read all)
  - GET /items/:id (read one)
  - PUT /items/:id (update)
  - DELETE /items/:id (delete)

Creating routes/items.ts...
Creating models/Item.ts...

Running typecheck... ✓

[Exit intercepted by stop-hook]       ← The magic!
[Same prompt fed back with file state]

=== Iteration 2 / 10 ===

[Claude seeing its previous work...]

Continuing implementation...
Adding validation middleware...
Adding error handling...

Running tests... ✓

COMPLETE                               ← Promise found in output!

=== Ralph Loop Finished ===
Iterations used: 2 of 10
Total time: 3m 42s
```

**The Stop Hook Magic:**
The key mechanism is the stop hook - it intercepts Claude's session exit and feeds the same prompt back with updated file state, creating the iteration effect.

**Timing Expectations:**
- Simple tasks: 2-5 iterations (3-10 minutes)
- Medium features: 5-15 iterations (15-30 minutes)
- Complex features: 15-30 iterations (30-60 minutes)
- Overnight runs: 50+ iterations possible

**What to Do While It Runs:**
- Git commits happen automatically
- Check `git log --oneline` for progress
- Check progress.txt for learnings
- Don't edit files Claude is working on

**If you skip the progress.txt approach:** Claude can't learn from previous iterations - each run starts from scratch with no accumulated knowledge.

**This connects to:** The principle of "external memory" - Claude is short-lived and forgetful, so persist everything to files.

---

## Tags
`#orchestration` `#ralph-wiggum` `#bash-loop` `#prd` `#long-running` `#external-memory` `#progress-tracking`

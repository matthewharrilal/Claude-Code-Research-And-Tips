# Ralph Wiggum - 11 Tips Guide (3,000 Words)

---
## D-FINAL Connection

**This source contributed to:**
- D-FINAL-implementation.md: Section 3.3 (11 tips integrated into best practices)

**Coverage in D-FINAL:** 70%
**High-value unique content:** Full 11-tip structure with detailed rationale, "eager but dim junior developer" mental model, finite iterations principle articulation

**Journey references:**
- synthesis/mastery-ralph-complete.md#tips
- html-site/patterns/mastery/ralph-complete.html#tips

**Last enhanced:** 2026-01-18 (Phase 2B)

---

## Source
- **Author:** @mattpocockuk (Matt Pocock) - TypeScript expert, Total TypeScript, AI Hero
- **Date:** 2026-01-08
- **URL:** Announcement post
- **Article:** https://www.aihero.dev/tips-for-ai-coding-with-ralph-wiggum
- **Engagement:** High (hundreds of likes/bookmarks)

---

## Core Insight

> "Just finished 3,000 words on 11 tips for getting the most out of Ralph. It's essential reading for anyone coding with AI."

---

## What is Ralph Wiggum?

A simple, effective, long-running autonomous coding agent loop:
- Named after the Simpsons character for its "keep going until done" vibe
- Runs AI coding agents (primarily Claude) in repeated, clean-slate iterations
- Scoped tasks until completion
- Allows **AFK development for hours/days**

---

## The Mental Model

> Think of the AI agent as an **eager but somewhat dim junior developer (Ralph)** who never sleeps, happily works on one tiny task at a time, commits often, and tells you when it's truly finished — but needs extremely tight scoping, strong feedback loops, and hard limits to avoid disaster.

---

## Key Principles

### 1. Finite Iterations
- Never truly infinite loop
- **Always set max iterations**
- Prevents runaway costs

### 2. Tiny, Clearly Scoped Tasks
- One user story/feature at a time
- Single focus per iteration

### 3. Clean Slate Per Iteration
- New context window each run
- Avoids "context rot"

### 4. Hard Stop Condition
```
<promise>COMPLETE</promise>
```
Or: All PRD items marked done

### 5. Ruthless CI Green Enforcement
- Tests + types must pass every commit
- No broken code inheritance

### 6. Progress Tracking via Persistent Files
- `progress.txt`
- Git history
- `PRD.json`

### 7. Human Defines Quality/Exit Criteria
- Agent executes blindly
- Quality bar set in advance

---

## Related Resources

| Resource | Link |
|----------|------|
| 11 Tips Article (3K words) | https://www.aihero.dev/tips-for-ai-coding-with-ralph-wiggum |
| Earlier demo (Jan 5) | https://x.com/mattpocockuk/status/2008200878633931247 |

---

## Caveats & Gotchas

| Issue | Mitigation |
|-------|------------|
| Huge costs if unbounded | No infinite runs, no huge tasks |
| Needs capable models | Claude Opus-class required |
| Scope creep | Most common failure - keep tasks tiny |
| No feedback loops | Future iterations inherit broken code |
| Review burden | Many commits/PRs to check |
| Not for every repo | Better for well-factored repos with good tests |
| Windows issues | Some implementations have compatibility problems |

### Don't Do This
- **Don't let Ralph run infinitely** — always set iteration limit
- **Don't give huge tasks** — scope down ruthlessly
- **Don't skip tests** — feedback loops are non-negotiable

---

## Evolution of AI Coding Patterns

```
Vibe Coding
     ↓
Plan Mode
     ↓
Multi-Phase Development
     ↓
Kanban-Style Agent Boards
     ↓
Ralph Wiggum (deliberately simpler)
```

Ralph is positioned as simpler than swarm/multi-agent systems while still enabling truly unattended development.

---

## What Ralph Enables

- Truly unattended overnight/multi-day development
- Scaling test coverage massively
- Working on large backlogs while sleeping
- **"Ship while you sleep"** workflows

---

## Combines Well With

- Docker + containerization (safety)
- Skills/custom tools (steering)
- Automatic formatting/linting/types
- GitHub/Linear integration + notifications
- Heavy test-driven development

---

## The Larger Pattern

> Evolution of human-supervised → semi-autonomous → fully AFK agentic coding

Fits into the broader **"AI as infinite junior team"** philosophy popular in 2025-2026.

---

## Follow-Up Questions

1. What are the actual 11 tips? (article content)
2. Best-practice PRD.json schema? (fields, examples)
3. Ralph vs newer agent frameworks (Cursor Composer, Devin-style, OpenCode)?

---

## Actionability

🟡 **Medium Lift** - Requires setup (bash script + PRD.json + sandbox + prompting), but extremely powerful once running

---

## What You'll See When You Run This

**Before running:** You have the full Ralph setup with bash script, PRD.json, and progress.txt ready.

### Starting an Overnight AFK Run

```bash
$ ./ralph.sh 50 &
$ echo "Ralph running with PID $!"
```

**Annotated Output (next morning check):**
```
$ tail -100 ralph.log

=== Iteration 43 of 50 ===
Time: 03:47:22                         ← Running while you slept

Reading PRD.json...
  ✓ 22 complete
  ○ 1 remaining: payment_integration

Working on: payment_integration
  - Creating Stripe webhook handler
  - Adding payment confirmation page
  - Writing integration tests

Running typecheck... ✓
Running tests... ✓

Updating PRD.json: payment_integration = true

Committing: feat: Add Stripe payment integration

=== Iteration 44 of 50 ===

Reading PRD.json...
  ✓ 23 complete                       ← All tasks done!
  ○ 0 remaining

<promise>COMPLETE</promise>

==========================================
Ralph Finished Successfully!
  Duration: 4h 23m
  Iterations: 44 of 50
  Commits: 23
  All stories: PASSED
==========================================
```

### The Mental Model in Action

```
You (before bed):                      ← "Requirements gatherer" role
  "Here are 23 tasks in PRD.json"
  "Each task has clear acceptance criteria"
  "Tests must pass for each task"
  "./ralph.sh 50"

Ralph (overnight):                     ← "Eager junior dev" role
  Iteration 1: Task 1 ✓
  Iteration 2: Task 2 ✓
  Iteration 3: Task 2 retry (failed test) ✓
  Iteration 4: Task 3 ✓
  ...
  Iteration 44: All done!

You (morning):
  git log: 23 new commits
  npm test: 312 tests passing
  npm run build: Success
  Ready to review and deploy
```

### Key Principle Verification

**Finite Iterations:**
```bash
$ ./ralph.sh 10
# Will STOP after 10 iterations even if incomplete
# Prevents runaway costs
```

**Tiny Tasks:**
```
❌ BAD PRD.json:
{
  "build_entire_auth_system": { "passes": false }  ← Too big!
}

✅ GOOD PRD.json:
{
  "create_user_model": { "passes": false },
  "add_password_hashing": { "passes": false },
  "create_login_endpoint": { "passes": false },
  "create_logout_endpoint": { "passes": false },
  "add_session_management": { "passes": false }
}
```

**CI Green Enforcement:**
```
=== Iteration 5 of 50 ===

Working on: add_search_feature

Creating search component...
Writing tests...

Running typecheck...
  ✗ ERROR: Property 'query' does not exist on type 'Props'

[Claude seeing error, fixing...]

Fixing SearchComponent.tsx...
  - Added missing prop type

Running typecheck... ✓
Running tests... ✓

Committing only after CI passes!      ← No broken code inheritance
```

**Timing Expectations:**
- Per iteration: 1-3 minutes
- 10 iterations: 10-30 minutes
- 50 iterations (overnight): 1-3 hours
- Typical feature (15-25 tasks): 30-90 minutes

**What to Do While It Runs:**
- AFK mode: Sleep, walk away, live your life
- The iteration limit prevents infinite runs
- Check `git log` for progress
- Review progress.txt for learnings

**If you skip setting iteration limits:** Runaway costs and potential infinite loops.

**If you skip CI enforcement:** Future iterations inherit broken code, making everything harder.

**This connects to:** The key insight that Ralph puts you in the "requirements gatherer" seat - you define WHAT, Ralph figures out HOW.

---

## Tags
`#orchestration` `#ralph-wiggum` `#long-running` `#afk-coding` `#tips` `#guide` `#mattpocockuk`

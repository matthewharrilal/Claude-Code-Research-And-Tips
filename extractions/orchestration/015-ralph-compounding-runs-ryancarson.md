# Ralph Compounding Runs - Learning Across Sessions

## Source
- **Author:** @ryancarson (Ryan Carson) - Builder in Residence @Ampcode
- **Date:** 2026-01-08
- **URL:** https://x.com/ryancarson/status/2009088247410856124

---

## Core Insight

> "What's amazing is I can ask it to look at previous runs to learn what worked or didn't work (I archive each PRD and user story JSON). So every time I run Ralph, it gets better and better."

---

## The Pattern

### Traditional Ralph
Each run starts fresh, memory via:
- progress.txt
- git commits
- Current prd.json

### Compounding Ralph
Same as above PLUS:
- **Archived PRDs from previous runs**
- **Archived user story JSONs**
- Agent references past successes/failures

---

## Workflow

```
Run 1: Initial attempt
  → Archive prd.json, learnings

Run 2: References Run 1 archives
  → Better prompts, fewer failures
  → Archive this run too

Run 3: References Runs 1+2
  → Even better performance
  → Continues compounding...
```

### Time Investment
- **25-30 minutes** planning user stories
- **Sleep** while agent works
- **Morning** review + ship

---

## Archive Structure

```
archives/
├── run-2026-01-05/
│   ├── prd.json
│   ├── progress.txt
│   └── learnings.md
├── run-2026-01-06/
│   ├── prd.json
│   ├── progress.txt
│   └── learnings.md
└── run-2026-01-08/
    └── ...
```

---

## Prompt Strategy

In `prompt.md`, instruct the agent:

```markdown
## Learning from Previous Runs

Before starting, review archives in `archives/` folder:
- What patterns worked well?
- What caused failures?
- What shortcuts were discovered?

Apply these learnings to current implementation.
```

---

## Parallel Execution

Later posts show Ryan running **3 simultaneous Ralph instances**:
- Different branches
- Different features
- All overnight

---

## Mental Model

> Think of AI coding as an extremely persistent but context-limited junior developer who works 24/7. You become the product manager/architect.

### Key Principles

1. **Heavy upfront planning** pays massive dividends
2. **Persistence > perfection** in single prompt (iterate many times)
3. **Memory via artifacts** (JSON, git, logs) > relying on long context
4. **Compounding returns** — each run makes the next better
5. **Parallelization** — run multiple Ralphs simultaneously

---

## The Transformation

```
Human Role          →    AI Role
─────────────────────────────────────
Product Manager          Implementation Army
Architect                Tireless Executor
25-30 min planning       8 hours grinding
Morning review           Overnight shipping
```

---

## Caveats & Gotchas

| Issue | Notes |
|-------|-------|
| PRD quality critical | Garbage in → garbage out overnight |
| Still generates defects | Identifiable, fixable with better prompts |
| Cost adds up | Amp credits/tokens accumulate |
| Can get stuck | May need intervention on catastrophic failures |
| Name is silly | Don't let "Ralph Wiggum" distract from the power |

---

## Related Concepts

**Builds on:**
- Basic Ralph loop
- Git as memory
- Artifact-based persistence

**Enables:**
- Sleep-shipping features
- Massive parallel development (3+ features at once)
- Replacing chunks of junior/mid outsourcing
- 10x-100x faster iteration for solo devs

---

## Follow-Up Questions

1. What does Ryan's exact prompt.md look like for archive reference?
2. Real overnight cost (tokens) for medium feature?
3. Success rate without morning fixes?

---

## Synthesis Hooks

**Combines well with:**
- Strong product thinking
- Detailed user story writing
- Git-based workflows
- Test-driven development

**Part of larger pattern:**
> "Human as orchestrator → AI as tireless implementation army"
> Day = planning/retrospectives/design
> Night = autonomous dev sprints (agile/scrum at machine speed)

---

## Actionability

🟡 **Medium Lift** - Setup + learning good PRD structure, then extremely high leverage

---

---

## What You'll See When You Run This

**Before running:** You have archives from previous Ralph runs, and a new feature to build.

### Setting Up Archives

```bash
$ ls archives/
```

**Output:**
```
run-2026-01-05/    ← Previous runs archived
run-2026-01-06/
run-2026-01-07/
```

### Running with Archive Reference

```bash
$ ./scripts/ralph/ralph.sh 10
```

**Annotated Output:**
```
🚀 Starting Ralph

═══ Iteration 1 ═══

Reading scripts/ralph/prd.json...
  New feature: Payment integration (4 stories)

Reading scripts/ralph/progress.txt...
  Current patterns: 5 entries

Reading archives/...                  ← New! Checking past runs
  run-2026-01-05: 8 stories, 12 learnings
  run-2026-01-06: 6 stories, 9 learnings
  run-2026-01-07: 13 stories, 15 learnings

Analyzing prior learnings...          ← Compounding begins!
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📚 CROSS-RUN LEARNING SUMMARY
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Successful patterns:
    - IF NOT EXISTS for migrations (used 14 times, 0 failures)
    - Server action pattern (used 22 times, 2 failures)
    - useRef<Timeout|null> for debounce (used 5 times, 0 failures)

  Common failure modes:
    - Interactive prompts (3 failures) → Use echo | command
    - Schema cascading (2 failures) → Check all references

  Project-specific knowledge:
    - Database uses drizzle ORM
    - Frontend uses Tailwind + shadcn/ui
    - Tests in vitest

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Selecting: PAY-001 - Add Stripe webhook handler

[Working with accumulated knowledge...]

Creating webhook handler...
  - Using server action pattern (proven)
  - Using IF NOT EXISTS migration (proven)
  - Avoiding interactive prompt (learned failure mode)

Running typecheck... ✓
Running tests... ✓

Committing: feat: PAY-001 - Add Stripe webhook handler

═══ Iteration 2 ═══
[...]

═══ Iteration 5 ═══

All payment stories complete!
<promise>COMPLETE</promise>

✅ Done!
  Iterations: 5 of 10 (efficient due to learnings!)
  New patterns discovered: 2
    - Stripe signature verification pattern
    - Webhook idempotency key handling

Archiving this run...
  → archives/run-2026-01-08/
```

### Parallel Ralph Runs

**Terminal 1:**
```bash
$ cd ~/project && ./scripts/ralph/ralph.sh 25 > logs/payments.log 2>&1 &
```

**Terminal 2:**
```bash
$ cd ~/project-worktree-auth && ./scripts/ralph/ralph.sh 25 > logs/auth.log 2>&1 &
```

**Terminal 3:**
```bash
$ cd ~/project-worktree-dashboard && ./scripts/ralph/ralph.sh 25 > logs/dashboard.log 2>&1 &
```

**Annotated Output (checking progress):**
```
$ jobs
[1]   Running    ./scripts/ralph/ralph.sh 25 > logs/payments.log
[2]   Running    ./scripts/ralph/ralph.sh 25 > logs/auth.log
[3]   Running    ./scripts/ralph/ralph.sh 25 > logs/dashboard.log

$ tail -1 logs/*.log
==> logs/auth.log <==
═══ Iteration 12 ═══ [US-008 complete]

==> logs/dashboard.log <==
═══ Iteration 7 ═══ [DASH-004 in progress]

==> logs/payments.log <==
═══ Iteration 5 ═══ <promise>COMPLETE</promise>  ← First one done!
```

### Morning Review

```bash
$ git log --oneline --all --since="8 hours ago"
```

**Output:**
```
abc1234 (payments) feat: PAY-004 - Payment confirmation page
def5678 (payments) feat: PAY-003 - Handle payment failures
ghi9012 (payments) feat: PAY-002 - Process webhook events
jkl3456 (payments) feat: PAY-001 - Add Stripe webhook handler
mno7890 (auth) feat: AUTH-008 - Password reset flow
pqr1234 (auth) feat: AUTH-007 - Email verification
...
xyz9999 (dashboard) feat: DASH-006 - Widget persistence
```

**Result:** 18 commits across 3 features while you slept!

**Timing Expectations:**
- First run: Slower (building knowledge base)
- Subsequent runs: 30-50% faster
- 3 parallel runs overnight: 3 features shipped
- Archive accumulation: 3-5 new patterns per run

**What to Do While It Runs:**
- Sleep! (That's the point)
- Morning: Review commits, merge good branches
- Add any manual fixes as new archive learnings

**If you skip archiving:** Each run starts fresh - you lose the compounding benefit of accumulated knowledge.

**This connects to:** The transformation from "developer" to "product manager" - you plan, AI executes, learnings compound.

---

## Tags
`#orchestration` `#ralph-wiggum` `#compounding` `#archives` `#learning` `#parallel` `#overnight` `#ryancarson`

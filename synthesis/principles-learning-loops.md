---
**DEPRECATED** (2026-01-18)

This content has been superseded by D-FINAL synthesis.

**Replacement:** See D-FINAL-mental-models Model 9 for current content.
**Reason:** Content fully covered in D-FINAL with production validation.
**Original preserved below for reference.**

---

# Learning & Feedback Loop Engineering

> **You Are Here:** This guide shows how to make each run better than the last through systematic learning accumulation. Read this after understanding basic patterns (Ralph, fresh context) to learn how to capture and compound learnings across sessions, runs, and projects. The key insight: systems that learn outperform systems that start fresh.

**Status:** Definitive Reference
**Synthesized:** 2026-01-09
**Sources:** Ryan Carson's Compounding Ralph, Boris Cherny's Creator Workflow, Matt Pocock's Ralph Tips, Claude-Mem, and 30+ research extractions

---

## The Compounding Knowledge Pattern

The most powerful insight from Claude Code practitioners: **systems that learn from previous runs outperform systems that start fresh every time.**

### Ryan Carson's Key Insight

> "What's amazing is I can ask it to look at previous runs to learn what worked or didn't work (I archive each PRD and user story JSON). So every time I run Ralph, it gets better and better."

This is the **Compounding Ralph** pattern:

```
Run 1: Initial attempt
  -> Archive prd.json, learnings

Run 2: References Run 1 archives
  -> Better prompts, fewer failures
  -> Archive this run too

Run 3: References Runs 1+2
  -> Even better performance
  -> Continues compounding...
```

### Why Compounding Works

Traditional Ralph starts fresh each session. Compounding Ralph adds:
- Archived PRDs from previous runs
- Archived user story JSONs
- Agent references past successes AND failures
- Patterns discovered in one run inform the next

### Checkpoint: Compounding Knowledge Pattern
**You should now understand:**
- [ ] The difference between fresh-start runs and compounding runs
- [ ] How archived PRDs and learnings inform future runs
- [ ] Why compounding is more valuable than single-run optimization
- [ ] The multiplicative benefit: Run 10 is dramatically better than Run 1

**If unclear:** Re-read Ryan Carson's insight above - this is the core idea of the entire document.

---

## Feedback Loop Types

### 1. Within-Session Learning

**Mechanism:** progress.txt accumulation

Each iteration within a Ralph loop builds on the previous:

```markdown
# Progress Log

## Codebase Patterns
- Migrations: Use IF NOT EXISTS
- React: useRef<Timeout | null>(null)
- Zod: Always use .optional() explicitly

---

## 2026-01-09 - US-001
- Implemented: Tool skeleton with Zod schema
- Learned: Use orange (#FF6B35) for dark backgrounds
- Files: src/tools/upsert.ts

---

## 2026-01-09 - US-002
- Implemented: Category mapping
- Learned: Schema needed adjustment for optional fields
- Pattern added to Codebase Patterns section above
```

**The Codebase Patterns Section:**
- Lives at TOP of progress.txt
- Accumulates reusable patterns
- Agent reads this FIRST each iteration
- By story 10, Ralph knows patterns from stories 1-9

**Critical Rules:**
- APPEND ONLY - never edit previous entries
- Patterns discovered go to the top section
- Learnings compound across iterations

### 2. Cross-Session Learning

**Mechanism:** CLAUDE.md and AGENTS.md

For knowledge that persists beyond a single Ralph loop:

#### CLAUDE.md - Project-Level Knowledge

```markdown
# Project: MyApp

## Tech Stack
- Next.js 14, TypeScript, Prisma, PostgreSQL

## Commands
- `npm run dev` - Dev server (port 3000)
- `npm test` - Run Jest tests

## Conventions
- All API routes in src/api/
- Use Zod for validation
- Repository pattern for data access

## Known Gotchas
- Migrations need DEFAULT for existing data
- Use .optional() for nullable Zod fields
```

**When to Update CLAUDE.md:**
- Permanent patterns discovered
- Critical gotchas that apply to all future work
- Conventions that shouldn't change

#### AGENTS.md - Agent-Specific Documentation

Per Boris Cherny's workflow:
```
Good additions:
- "When modifying X, also update Y"
- "This module uses pattern Z"
- "Tests require dev server running"

Don't add:
- Story-specific details
- Temporary notes
- Info already in progress.txt
```

#### Git History as Memory

The ultimate persistent memory:
- Commits as checkpoints
- Diff as context (what changed)
- History as narrative
- Rollback as safety net

```bash
# Agent reads history for context
git log --oneline -10
git diff main..HEAD
```

### 3. Cross-Run Learning (Compounding Ralph)

**Mechanism:** Archives and references

The pattern that makes each run better than the last:

#### Archive Structure

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

#### Prompt Strategy for Cross-Run Learning

In `prompt.md`, instruct the agent:

```markdown
## Learning from Previous Runs

Before starting, review archives in `archives/` folder:
- What patterns worked well?
- What caused failures?
- What shortcuts were discovered?

Apply these learnings to current implementation.
```

#### What Gets Archived

| Artifact | Purpose |
|----------|---------|
| prd.json | What was attempted, what passed |
| progress.txt | Session learnings, patterns discovered |
| learnings.md | Synthesized insights (optional) |
| git commits | Actual code changes |

### 4. Cross-Project Learning (Semantic Memory)

**Mechanism:** Claude-Mem plugin

For knowledge that spans multiple projects:

```
┌─────────────────────────────────────────────┐
│  Claude Code Session                        │
│  └─ Lifecycle Hooks                         │
│       └─ Capture events                     │
└─────────────────────────────────────────────┘
              │
              v
┌─────────────────────────────────────────────┐
│  Worker Service                             │
│  ├─ SQLite DB (raw data)                    │
│  ├─ Chroma Vector DB (embeddings)           │
│  └─ Claude Agent SDK (compression)          │
└─────────────────────────────────────────────┘
              │
              v
┌─────────────────────────────────────────────┐
│  Future Session                             │
│  └─ Auto-inject relevant context            │
└─────────────────────────────────────────────┘
```

**How It Works:**
1. **Capture:** Lifecycle hooks log all session events to SQLite
2. **Compress:** Agent-SDK generates semantic summaries (~50-100 tokens)
3. **Retrieve:** 3-layer system (search -> timeline -> full details)
4. **Inject:** Relevant context auto-injected into new sessions

**Configuration:**
```json
{
  "context_injection_rules": {
    "auto_inject": true,
    "max_tokens": 5000
  }
}
```

### Checkpoint: Feedback Loop Types
**You should now understand:**
- [ ] The 4 levels: within-session, cross-session, cross-run, cross-project
- [ ] progress.txt with Codebase Patterns section for within-session
- [ ] CLAUDE.md and AGENTS.md for cross-session
- [ ] Archives for cross-run; Claude-Mem for cross-project

**If unclear:** Focus on mastering levels 1-3 before attempting level 4 (Claude-Mem).

---

## Implementing Feedback Loops

### The Progress.txt Pattern

The heart of within-session learning:

```markdown
# Progress Log - Append Only (NEVER UPDATE)

## Codebase Patterns
- [Accumulated patterns here - grows over time]
- Migrations: IF NOT EXISTS
- React: useRef<Timeout | null>(null)
- Zod: .optional() for nullable fields

## Key Files
- db/schema.ts
- app/auth/actions.ts

---

## 2026-01-09 - US-001
- **What:** Created tool skeleton with Zod schema
- **Files:** src/tools/upsert.ts
- **Learnings:**
  - Use orange for visibility on dark backgrounds
  - Pattern: Validate inputs before database operations

---

## 2026-01-09 - US-002
- **What:** Added category mapping
- **Files:** src/tools/categories.ts, src/types/index.ts
- **Issue:** Zod schema needed adjustment for optional fields
- **Pattern:** Added ".optional() for nullable" to Codebase Patterns
```

### The Archive Pattern

End-of-run archival for cross-run learning:

```bash
#!/bin/bash
# archive-run.sh - Run after Ralph completes

DATE=$(date +%Y-%m-%d)
RUN_ID=$(date +%H%M%S)
ARCHIVE_DIR="archives/run-$DATE-$RUN_ID"

mkdir -p "$ARCHIVE_DIR"

# Copy artifacts
cp plans/prd.json "$ARCHIVE_DIR/"
cp plans/progress.txt "$ARCHIVE_DIR/"

# Generate learnings summary
echo "# Learnings from Run $DATE-$RUN_ID" > "$ARCHIVE_DIR/learnings.md"
echo "" >> "$ARCHIVE_DIR/learnings.md"
echo "## Patterns Discovered" >> "$ARCHIVE_DIR/learnings.md"
head -20 plans/progress.txt | grep -A 100 "## Codebase Patterns" >> "$ARCHIVE_DIR/learnings.md"

# Git log for this run
git log --oneline --since="$(date -v-1d +%Y-%m-%d)" >> "$ARCHIVE_DIR/commits.log"

echo "Archived to $ARCHIVE_DIR"
```

### The Reference Pattern

How the agent uses archives in subsequent runs:

```markdown
# prompt.md - Instructions for Ralph

## Before You Start

1. Review `archives/` folder for recent runs
2. Look at `learnings.md` for patterns that worked
3. Check what failed and why
4. Apply these insights to current work

## Archive Analysis Checklist
- What database patterns were used?
- What validation approaches worked?
- Were there any repeated failures?
- What gotchas were discovered?

## Current Task
[Your PRD here]
```

### The CLAUDE.md Update Pattern

Promoting learnings from session to permanent:

```
progress.txt (session)
        │
        v  "This pattern is reusable"
        │
CLAUDE.md (permanent)
```

**Criteria for Promotion:**
- Pattern applies to future work (not just this task)
- Gotcha will affect future developers
- Convention should be followed project-wide

**Process:**
1. Review progress.txt at end of feature
2. Identify patterns worth keeping
3. Add to CLAUDE.md in appropriate section
4. Remove redundancy from future progress.txt

---

## Measuring Improvement

### Metrics That Matter

| Metric | How to Measure | Good Signal |
|--------|----------------|-------------|
| Iterations per task | Count Ralph loops | Decreasing over time |
| First-attempt success rate | Tasks passing first try | Increasing |
| Time to completion | Wall clock time | Decreasing |
| Pattern reuse | References to Codebase Patterns | Increasing |
| Failure repetition | Same error appearing | Decreasing |

### Tracking Progress

**Simple Approach:**
```markdown
# Run Statistics

## Run 2026-01-05
- Tasks: 5
- Iterations: 12
- First-try passes: 2/5 (40%)
- Time: 45 min

## Run 2026-01-08
- Tasks: 6
- Iterations: 8
- First-try passes: 4/6 (67%)
- Time: 30 min

## Trend: Improving
```

### Signs of Successful Compounding

1. **Fewer iterations per task** - Agent solves faster
2. **Reduced failures** - Known patterns avoid mistakes
3. **Faster completion** - Less exploration needed
4. **Pattern references** - Agent cites previous learnings
5. **Smaller progress.txt additions** - Less new to discover

---

## Anti-patterns in Learning

### 1. Not Archiving

**The Problem:**
Every run starts from zero. No compounding. Same mistakes repeated.

**The Fix:**
Archive after every significant run:
```bash
./archive-run.sh
```

### 2. Not Referencing Prior Work

**The Problem:**
Agent doesn't read archives. Knowledge exists but isn't used.

**The Fix:**
Explicitly instruct archive review in prompt.md:
```markdown
## Required: Review Prior Runs
Before implementing, read:
1. archives/*/learnings.md
2. Most recent progress.txt
```

### 3. Over-relying on Session Memory

**The Problem:**
Using context compaction instead of external files. Lossy. Detail lost.

**The Fix:**
Externalize everything:
- progress.txt for learnings
- prd.json for state
- git for code changes
- CLAUDE.md for permanent knowledge

### 4. Bloated CLAUDE.md

**The Problem:**
Everything promoted to CLAUDE.md. Context window filled with irrelevant history.

**The Fix:**
Keep CLAUDE.md under 500 tokens:
- Only truly permanent patterns
- Essential gotchas only
- Prune regularly

### 5. Progress.txt Editing

**The Problem:**
Editing previous entries. History lost. Can't trace what happened when.

**The Fix:**
APPEND ONLY. Never modify. The log is the log.

### 6. No Verification Loop

**The Problem:**
Agent marks tasks complete without testing. False completion compounds.

**The Fix:**
Always include verification in acceptance criteria:
```json
{
  "acceptanceCriteria": [
    "Feature works as specified",
    "npm run typecheck passes",
    "npm run test passes"
  ]
}
```

---

## The Compounding Development Lifecycle

### Daily Cycle

```
Morning: Review overnight Ralph output
    |
    v
Midday: Update CLAUDE.md with new learnings
    |
    v
Afternoon: Plan next Ralph run
    |
    v
Evening: Write PRD, start Ralph
    |
    v
Night: Ralph runs autonomously
    |
    v
[Repeat]
```

### Weekly Cycle

```
Monday: Review week's archives
    |
    v
Tuesday-Thursday: Run features
    |
    v
Friday: Consolidate learnings
    |
    v
Weekend: Archive cleanup, pattern synthesis
    |
    v
[Next Week: Reference this week's learnings]
```

### The Mental Model

> "Think of AI coding as an extremely persistent but context-limited junior developer who works 24/7. You become the product manager/architect. Each run should benefit from all previous runs."

### Key Principles

1. **Heavy upfront planning** pays massive dividends
2. **Persistence > perfection** in single prompt (iterate many times)
3. **Memory via artifacts** (JSON, git, logs) > relying on long context
4. **Compounding returns** - each run makes the next better
5. **Parallelization** - run multiple Ralphs simultaneously

---

## The Verification Imperative

Per Boris Cherny (Claude Code creator):

> "Verification feedback loop -> 2-3x quality"

Without verification, learning is corrupted:
- False completions pollute progress.txt
- Bad patterns get archived
- Future runs learn from failures, not successes

### Verification Hierarchy

| Priority | Method | Use Case |
|----------|--------|----------|
| 1 | Type checking | `pnpm typecheck` - Always |
| 2 | Unit tests | `pnpm test` - For logic |
| 3 | CI green | Every commit must pass |
| 4 | Browser automation | Playwright for UI |
| 5 | Manual spot-check | Human at milestones |

### Verification in PRD

```json
{
  "acceptanceCriteria": [
    "Dropdown renders with options: All, Active, Inactive",
    "Selecting option filters list correctly",
    "npm run typecheck passes",
    "npm run test passes",
    "Visual verification via Playwright screenshot"
  ]
}
```

---

## Advanced: Learning Architecture

### The Full Stack

```
┌─────────────────────────────────────────────────────────────┐
│                    SEMANTIC MEMORY                           │
│  (Claude-Mem: Cross-project patterns, long-term knowledge)  │
└─────────────────────────────────────────────────────────────┘
                              ^
                              |
┌─────────────────────────────────────────────────────────────┐
│                    CROSS-RUN ARCHIVES                        │
│  (archives/: PRDs, progress logs, synthesized learnings)    │
└─────────────────────────────────────────────────────────────┘
                              ^
                              |
┌─────────────────────────────────────────────────────────────┐
│                    CROSS-SESSION STATE                       │
│  (CLAUDE.md, AGENTS.md, git history)                        │
└─────────────────────────────────────────────────────────────┘
                              ^
                              |
┌─────────────────────────────────────────────────────────────┐
│                    WITHIN-SESSION LEARNING                   │
│  (progress.txt: append-only, Codebase Patterns section)     │
└─────────────────────────────────────────────────────────────┘
                              ^
                              |
┌─────────────────────────────────────────────────────────────┐
│                    INSTANT FEEDBACK                          │
│  (Tests, typecheck, CI, browser automation)                 │
└─────────────────────────────────────────────────────────────┘
```

### Flow Direction

```
Instant Feedback (tests pass/fail)
        |
        v  "This approach works"
Within-Session (progress.txt pattern)
        |
        v  "This pattern is reusable"
Cross-Session (CLAUDE.md update)
        |
        v  "Archive this run's learnings"
Cross-Run Archives
        |
        v  "Query for similar situations"
Semantic Memory (future sessions)
```

---

## Quick Reference: Learning Loop Checklist

### Before Each Run
- [ ] Review recent archives
- [ ] Check CLAUDE.md for relevant patterns
- [ ] Write PRD with explicit verification criteria

### During Each Run
- [ ] progress.txt updated after each iteration
- [ ] Codebase Patterns section maintained
- [ ] Git commits after each passing task

### After Each Run
- [ ] Archive PRD, progress, learnings
- [ ] Promote key patterns to CLAUDE.md
- [ ] Clean up temporary notes

### Weekly Review
- [ ] Consolidate archives
- [ ] Synthesize cross-run patterns
- [ ] Prune CLAUDE.md if bloated
- [ ] Update prompt.md with new instructions

---

## Summary: The Learning Commandments

1. **Archive everything.** Runs that disappear teach nothing.

2. **Reference archives.** Knowledge unused is knowledge wasted.

3. **Append, never edit.** progress.txt is sacred history.

4. **Verify before logging.** False completions corrupt learning.

5. **Promote patterns.** Session learnings -> permanent knowledge.

6. **Prune regularly.** Context is finite; keep only what matters.

7. **Measure improvement.** If you can't track it, you can't improve it.

8. **Compound daily.** Each run should benefit from all previous runs.

9. **External over internal.** Files outlast context windows.

10. **The agent is stateless.** Memory is architecture, not magic.

---

## Troubleshooting

### Common Issue: progress.txt Becomes Too Large
**Symptom:** Agent spends excessive time reading progress.txt; context fills quickly
**Cause:** Unbounded accumulation without pruning
**Fix:**
1. Promote stable patterns to CLAUDE.md, then remove from progress.txt
2. Archive old entries to `archives/` after each significant run
3. Keep progress.txt focused on current session + recent patterns only
4. Target: progress.txt should stay under 2000 tokens

### Common Issue: Archives Not Being Referenced
**Symptom:** Runs repeat the same mistakes despite archived learnings
**Cause:** Prompt doesn't explicitly instruct archive review
**Fix:** Add explicit archive instruction to prompt.md:
```markdown
## Before Starting
1. Review `archives/` folder for recent runs
2. Read `learnings.md` from most recent 2-3 runs
3. Note patterns that worked AND failed
4. Apply these insights to current implementation
```

### Common Issue: CLAUDE.md Becomes Bloated
**Symptom:** CLAUDE.md exceeds 500 tokens; context budget consumed by instructions
**Cause:** Promoting too many patterns without pruning
**Fix:**
1. CLAUDE.md is for permanent, project-wide patterns ONLY
2. If a pattern is session-specific, keep it in progress.txt
3. Prune quarterly: remove patterns that are now obvious or obsolete
4. Use imports (`@docs/...`) for detailed references, not inline content

### Common Issue: Verification Failures Corrupt Learning
**Symptom:** False completions in archives; agent learns wrong patterns
**Cause:** Marking complete without actual verification
**Fix:**
1. Every PRD item MUST include testable acceptance criteria
2. Include `npm run typecheck passes` and `npm run test passes`
3. If verification fails, learnings should note the FAILURE, not success
4. Manual review archives periodically for corrupted learnings

### Common Issue: Compounding Not Working (No Improvement Over Runs)
**Symptom:** Run 10 is no better than Run 1
**Cause:** Usually missing one of: archiving, referencing, or pattern promotion
**Fix:** Verify the full cycle:
1. [ ] Are you archiving after each run? (`./archive-run.sh`)
2. [ ] Does prompt instruct agent to READ archives?
3. [ ] Are learnings being promoted to Codebase Patterns section?
4. [ ] Is agent ACTUALLY reading the files (check context usage)?

### Common Issue: Cross-Project Learning Not Transferring
**Symptom:** Claude-Mem configured but no cross-project benefit
**Cause:** Retrieval not matching or injection not happening
**Fix:**
1. Verify Claude-Mem is capturing: check SQLite DB for entries
2. Verify retrieval: manually query for relevant patterns
3. Check injection rules in config: is `auto_inject: true`?
4. Consider if patterns are truly cross-project or project-specific

---

## Resources

### Essential Patterns
- ghuntley.com/ralph/ - Original Ralph pattern
- github.com/snarktank/ralph - Ryan Carson's implementation
- github.com/thedotmack/claude-mem - Persistent memory plugin

### Key Practitioners
- @ryancarson - Compounding runs, overnight development
- @mattpocockuk - Context rot awareness, PRD strategies
- @bcherny - Creator workflow, verification loops
- @ghuntley - Ralph pattern creator

### Articles
- aihero.dev/tips-for-ai-coding-with-ralph-wiggum - Matt Pocock's 11 tips

---

## Tags

`#learning-loops` `#feedback-engineering` `#compounding-ralph` `#progress-tracking` `#archives` `#cross-session` `#within-session` `#verification` `#claude-mem` `#external-memory` `#pattern-accumulation`

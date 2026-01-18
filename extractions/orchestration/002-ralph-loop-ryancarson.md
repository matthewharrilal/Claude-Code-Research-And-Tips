# The Ralph Loop - Autonomous Feature Development

---
## D-FINAL Connection

**This source contributed to:**
- D-FINAL-architecture.md: Section 2.1 (Ralph pattern core architecture)
- D-FINAL-implementation.md: Sections 3.2-3.4 (production loop implementation, prd.json schema)

**Coverage in D-FINAL:** 90%
**High-value unique content:** Core loop fully incorporated; original bash script and flow diagram serve as canonical reference

**Journey references:**
- synthesis/mastery-ralph-complete.md#core-implementation
- html-site/patterns/orchestration/ralph-research.html

**Last enhanced:** 2026-01-18 (Phase 2B)

---

## Source
- **Author:** @ryancarson (Ryan Carson) - 3x founder, Builder in Residence at Amp Code
- **Date:** 2026-01-07
- **URL:** https://x.com/ryancarson/status/2008950489904472501
- **Engagement:** 2K likes, 203K views, 3.5K bookmarks
- **Origin:** Based on Geoffrey Huntley's original Ralph pattern (ghuntley.com/ralph/)

---

## Core Insight

**One-liner:** Ralph runs iterative, clean-context AI sessions to implement small user stories from a PRD until all tasks pass—shipped a feature in 14 iterations.

**The Problem It Solves:** Long AI coding sessions hit context limits and degrade. Ralph breaks features into atomic stories, runs fresh instances per story, and uses external memory (git, files) for continuity.

---

## The Architecture

### How Ralph Works
```
┌─────────────────────────────────────────────────────┐
│  PRD.md  →  prd.json  →  Ralph Loop  →  Shipped    │
│                              ↓                      │
│            ┌────────────────────────────┐          │
│            │  Iteration 1 (fresh Amp)   │          │
│            │  → Pick next story         │          │
│            │  → Implement               │          │
│            │  → Test (typecheck/npm)    │          │
│            │  → Commit if passing       │          │
│            │  → Update prd.json         │          │
│            │  → Log to progress.txt     │          │
│            └────────────────────────────┘          │
│                        ↓ repeat                    │
│            ┌────────────────────────────┐          │
│            │  Iteration N               │          │
│            │  → All stories pass?       │          │
│            │  → COMPLETE                │          │
│            └────────────────────────────┘          │
└─────────────────────────────────────────────────────┘
```

### Key Principle: Fresh Context Per Iteration
Each iteration spawns a NEW Amp instance with NO memory of previous work. Continuity comes from:
- **Git history** - Code changes persist
- **prd.json** - Task status (passes: true/false)
- **progress.txt** - Learnings, patterns, gotchas

---

## Implementation

### Start Ralph
```bash
./scripts/ralph/ralph.sh 25  # max 25 iterations
```

### The Script
```bash
#!/bin/bash
MAX_ITERATIONS=${1:-10}
CURRENT_ITERATION=1

PRD_FILE="prd.json"
PROGRESS_FILE="progress.txt"

# Create feature branch
BRANCH_NAME=$(jq -r '.branchName' $PRD_FILE)
git checkout main && git pull
git checkout -b $BRANCH_NAME || git checkout $BRANCH_NAME

while [ $CURRENT_ITERATION -le $MAX_ITERATIONS ]; do
  echo "Starting Ralph iteration $CURRENT_ITERATION"

  amp @prompt.md

  # Check completion
  if grep -q "<promise>COMPLETE</promise>" amp_output.txt; then
    echo "All stories complete!"
    break
  fi

  CURRENT_ITERATION=$((CURRENT_ITERATION + 1))
done
```

### prd.json Structure
```json
{
  "project": "Untangle",
  "branchName": "ralph/legal-agent-income-upsert",
  "description": "Legal Agent Income Upsert Tool",
  "userStories": [
    {
      "id": "US-001",
      "title": "Create upsertIncome tool skeleton with input schema",
      "description": "As a developer, I need the tool skeleton with Zod schema",
      "acceptanceCriteria": [
        "Zod schema matches PRD",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    }
  ]
}
```

### Amp Auto-Handoff Config
```json
// ~/.config/amp/settings.json
{
  "amp.experimental.autoHandoff": {
    "context": 90
  }
}
```

---

## The #1 Rule: Story Size

**Each story must be completable in ONE iteration (~one context window)**

### Right-sized stories:
- Add a database column + migration
- Add a UI component to an existing page
- Update a server action with new logic
- Add a filter dropdown to a list

### Too big (split these):
- "Build the entire dashboard" → schema, queries, UI, filters
- "Add authentication" → schema, middleware, login UI, sessions
- "Refactor the API" → one story per endpoint

**Rule of thumb:** If you can't describe it in 2-3 sentences, it's too big.

---

## Story Ordering: Dependencies First

```
1. Schema/database changes (migrations)
2. Server actions / backend logic
3. UI components that use the backend
4. Dashboard/summary views that aggregate
```

Wrong: UI component (depends on schema that doesn't exist yet) before schema change.

---

## Acceptance Criteria: Must Be Verifiable

### Good (verifiable):
- "Add investorType column with default 'cold'"
- "Filter dropdown has options: All, Cold, Friend"
- "npm run typecheck passes"
- "Verify in browser using dev-browser skill"

### Bad (vague):
- "Works correctly"
- "Good UX"
- "Handles edge cases"

**Always include:** `"npm run typecheck passes"` as final criterion.

---

## File Structure
```
scripts/ralph/
├── ralph.sh         # The loop script
├── prompt.md        # Instructions for each iteration
├── prd.json         # Task tracking
└── progress.txt     # Learnings/patterns

~/.config/amp/skills/
├── prd/             # PRD generation skill
└── ralph/           # JSON conversion skill
```

---

## Workflow

1. **Create PRD:** `"Load the prd skill and create a PRD for [feature]"`
2. **Convert to JSON:** `"Load the ralph skill and convert tasks/prd-feature.md to prd.json"`
3. **Run Ralph:** `./scripts/ralph/ralph.sh 25`
4. **Manual test** when complete
5. **Quick fixes** for edge cases

---

## Real Example: 14 Iterations

Ryan shipped a "Legal Agent Income Upsert Tool" for a divorce app:
- Tool skeleton with Zod schema
- Category mapping
- Duplicate detection
- Database operations
- UI components
- Validation logic

Each iteration: implement → test → commit → update status → log learnings.

---

## Caveats & Gotchas

- **Stories too large** → context overflow, broken code
- **Weak tests** → errors compound across iterations
- **Frontend changes** → require browser verification (dev-browser skill)
- **Non-idempotent migrations** → may need manual SQL edits
- **Duplicate detection** → needs agent confirmation to avoid false positives
- **E2E tests** → can fail due to environment (ports, DB state)

---

## Contrast with Panopticon Pattern

| Aspect | Ralph (Carson) | Panopticon (Cantillon) |
|--------|----------------|------------------------|
| **Structure** | Sequential iterations | Parallel instances |
| **Context** | Fresh per iteration | Persistent per domain |
| **Memory** | External (git, files) | Filesystem + handoffs |
| **Use case** | Feature development | Life automation |
| **Duration** | Minutes to hours | Always running |

Both are orchestration patterns. Ralph = task completion. Panopticon = domain management.

---

## Resources

- **Ralph repo:** github.com/snarktank/ralph
- **PRD templates:** github.com/snarktank/ai-dev-tasks
- **Amp skills:** github.com/snarktank/amp-skills
- **Original pattern:** ghuntley.com/ralph/
- **Amp docs:** ampcode.com/manual

---

## Actionability

🟡 **Medium Lift** - Need to set up scripts, skills, understand PRD format

### Quick Start
1. Clone github.com/snarktank/ralph
2. Install Amp + jq
3. Create your first PRD
4. Run `./ralph.sh 10`
5. Watch it work

---

## What You'll See When You Run This

**Before running:** You have a prd.json with user stories marked `passes: false`, and you're on the correct git branch.

**What this does:** Starts the autonomous Ralph loop that picks up tasks, implements them, verifies, and commits.

```bash
$ ./scripts/ralph/ralph.sh 25
```

**Annotated Output:**
```
🚀 Starting Ralph Wiggum Loop          ← Ralph is initializing
   Max iterations: 25                  ← Your safety limit (won't run forever)
   PRD file: prd.json                  ← Found your task list
   Branch: ralph/legal-agent-income    ← Working on this feature branch

=== Iteration 1 of 25 ===              ← First iteration starting

[Amp/Claude starting...]              ← Agent is loading
                                        (takes 5-10 seconds)

Reading scripts/ralph/prd.json...     ← Agent found your PRD
Found 6 user stories                  ← Total tasks in your list
  ✓ 0 complete                        ← None done yet
  ○ 6 remaining                       ← All 6 need work

Reading scripts/ralph/progress.txt... ← Checking for prior learnings
  (No prior learnings found)          ← Fresh start

Selecting: US-001                     ← Picked first incomplete task
  "Create upsertIncome tool skeleton" ← Task description
  Priority: 1                         ← Highest priority

[Working on US-001...]                ← Claude is now coding
                                        (this takes 30-90 seconds)

Creating file: src/tools/upsertIncome.ts
  - Added Zod schema                  ← Claude describing its work
  - Added tool skeleton
  - Following patterns from src/tools/

Running: npm run typecheck            ← Verification step
✓ Typecheck passed                    ← SUCCESS - code is valid

Running: npm run test                 ← Running tests
✓ All tests passed                    ← SUCCESS - tests pass

Updating prd.json...                  ← Marking task complete
  US-001: passes = true               ← Task is now done!

Committing changes...                 ← Saving to git
  git add .
  git commit -m "feat: US-001 - Create upsertIncome tool skeleton"
  [ralph/legal-agent 7a3f8c2] feat: US-001 - Create upsertIncome tool skeleton

Appending to progress.txt...          ← Recording learnings
  - Pattern: Use Zod .optional() for nullable fields
  - File: src/tools/upsertIncome.ts

=== Iteration 2 of 25 ===              ← Loop continues automatically

Reading scripts/ralph/prd.json...
Found 6 user stories
  ✓ 1 complete                        ← US-001 now shows complete
  ○ 5 remaining

Selecting: US-002                     ← Next task
  "Add category mapping"

[Working on US-002...]
                                        ... (continues for each story)

=== Iteration 7 of 25 ===

Reading scripts/ralph/prd.json...
Found 6 user stories
  ✓ 6 complete                        ← All tasks done!
  ○ 0 remaining

All stories complete!
<promise>COMPLETE</promise>            ← Ralph signals completion

✅ Ralph finished successfully!        ← You can review the work now
   Duration: 12 minutes
   Iterations used: 7 of 25
   Commits made: 6
```

**Timing Expectations:**
- Each iteration: 30-90 seconds (depends on task complexity)
- Simple task (add column): 30-45 seconds
- Complex task (new component): 60-90 seconds
- Full 6-story feature: 5-15 minutes
- Overnight run (25 iterations): 20-45 minutes

**What to Do While It Runs:**
- You can walk away completely (it's autonomous)
- Check progress: `git log --oneline -10`
- Check learnings: `cat scripts/ralph/progress.txt`
- Check remaining tasks: `jq '.userStories[] | select(.passes == false)' prd.json`
- DON'T edit files the agent is working on (causes conflicts)

**If you skip this:** You'll have to manually implement each feature, run tests, commit, track progress - the loop automates all of this.

**This connects to:** The broader "autonomous overnight coding" pattern - set up tasks before bed, wake up to shipped features.

---

## Follow-up Questions
1. How to handle parallel stories that don't strictly depend on each other?
2. What's the success rate / cost per iteration in practice?
3. Can this work with Claude Code directly instead of Amp?

---

## Synthesis Hooks
- **Combines with:** ai-dev-tasks for PRD generation, dev-browser for UI verification
- **Part of pattern:** "Clean slate per task" - avoid context pollution
- **Enables:** Overnight feature shipping, autonomous dev pipelines

---

## Tags
`#orchestration` `#ralph-loop` `#iterative-agent` `#prd-driven` `#external-memory` `#fresh-context` `#automated-verification` `#amp`

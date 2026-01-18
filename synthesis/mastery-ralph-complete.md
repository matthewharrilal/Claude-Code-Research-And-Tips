---
**DEPRECATED** (2026-01-18)

This content has been superseded by D-FINAL synthesis.

**Replacement:** See D-FINAL-implementation Section 3 for current content.
**Reason:** Content fully covered in D-FINAL with production validation.
**Original preserved below for reference.**

---

# Ralph Wiggum Pattern: Complete Mastery Guide

**Version:** 1.0
**Compiled:** 2026-01-09
**Sources:** 10 extraction documents synthesized
**Status:** Definitive reference for Ralph loop orchestration

---

## Table of Contents

1. [The Core Mental Model](#the-core-mental-model)
2. [History and Origin](#history-and-origin)
3. [The Basic Implementation](#the-basic-implementation)
4. [All Ralph Variants](#all-ralph-variants)
5. [Critical Success Factors](#critical-success-factors)
6. [Common Failure Modes and Fixes](#common-failure-modes-and-fixes)
7. [Real Results and Case Studies](#real-results-and-case-studies)
8. [When NOT to Use Ralph](#when-not-to-use-ralph)
9. [Combinations That Enhance Ralph](#combinations-that-enhance-ralph)
10. [Complete Reference Materials](#complete-reference-materials)

---

## The Core Mental Model

### What Ralph IS at Its Essence

> "Think of the AI agent as an **eager but somewhat dim junior developer (Ralph)** who never sleeps, happily works on one tiny task at a time, commits often, and tells you when it's truly finished — but needs extremely tight scoping, strong feedback loops, and hard limits to avoid disaster."
> — Matt Pocock

Ralph Wiggum is a **persistence pattern for AI coding agents**. At its absolute core:

```bash
while :; do cat PROMPT.md | claude ; done
```

Everything else—PRDs, progress files, verification—is scaffolding around this fundamental loop.

### The Philosophy in Three Principles

1. **Fresh Context Beats Accumulated Context**
   - Each iteration spawns a NEW Claude instance with NO memory
   - Avoids "context rot" (LLMs degrade with token accumulation)
   - Memory lives in external artifacts, not the model

2. **Failure Is Data, Not Defeat**
   - "Deterministically bad" failures are predictable and informative
   - Each failure refines the next attempt
   - Persistence + learning = eventual success

3. **Small + Verifiable = Reliable**
   - Tasks must fit in one context window
   - Every task has explicit, testable acceptance criteria
   - No subjective goals, no ambiguous endpoints

### The Kanban vs Multi-Phase Insight

**Old Way (Multi-Phase Plans):**
```
Phase 1 → Phase 2 → Phase 3 → Phase 4
```
Problems: Hard to add tasks, rigid, requires human orchestration.

**Ralph Way (Kanban Loop):**
```
┌─────────────────────────────────┐
│  Pick task from board           │
│         ↓                       │
│  Complete task                  │
│         ↓                       │
│  Back to board                  │
│         ↓                       │
│  All done? → Exit               │
│  Not done? → Loop               │
└─────────────────────────────────┘
```
Focus on WHAT it should do at the end, not HOW to get there.

---

## History and Origin

### The Creator: Geoffrey Huntley

Ralph Wiggum was pioneered by **Geoffrey Huntley** (ghuntley.com/ralph/). The pattern gets its name from The Simpsons character—the simple-minded child who persists at tasks regardless of obstacles.

Key philosophical contributions:
- **Iteration over perfection:** Don't aim for perfect on first try
- **Operator skill matters:** Success depends on writing good prompts, not just having good models
- **External memory architecture:** Rely on files, not context windows

### Community Adoption Timeline

- **Geoffrey Huntley:** Original concept and name
- **Matt Pocock (@mattpocockuk):** Viral video demos, 11 tips guide, PRD format standardization
- **Ryan Carson (@ryancarson):** Complete implementation guides, Amp integration, compounding runs
- **Arvid Kahl (@arvidkahl):** Comprehensive thread documenting variants
- **Muratcan Koylan (@koylanai):** Ralph Wiggum Marketer (content generation variant)
- **Wes Winder (@weswinder):** Opus 4.5 + Ralph + Playwright stack

### Official Recognition

Anthropic published an official Claude Code plugin:
- **Repo:** github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum
- **Commands:** `/ralph-loop`, `/cancel-ralph`
- **Architecture:** Stop hook creates self-referential feedback loop

---

## The Basic Implementation

### File Structure

```
project/
├── scripts/ralph/           # Or plans/ - naming varies
│   ├── ralph.sh             # The loop script
│   ├── prompt.md            # Instructions for each iteration
│   ├── prd.json             # Task list with user stories
│   └── progress.txt         # Append-only learnings
└── CLAUDE.md                # Optional: Project context
```

---

## Checkpoint: After Creating Directory Structure

**Where you are:** You have created the folder structure for Ralph but no files yet.
**What this enables:** A clean organizational foundation that Ralph scripts will expect to find.

**Verify your state:**
```bash
ls -la scripts/ralph/
```

**You should see:**
```
total 0
drwxr-xr-x  2 user  staff  64 Jan  9 10:00 .    ← directory exists
drwxr-xr-x  3 user  staff  96 Jan  9 10:00 ..   ← parent exists
```

**Your folder should look like:**
```
project/
├── scripts/
│   └── ralph/           ← YOU JUST CREATED THIS
└── CLAUDE.md            ← optional, may not exist yet
```

**If you don't see this:**
- Check: Did you run `mkdir -p scripts/ralph/` from your project root?
- Check: Are you in the correct project directory?
- Go back to: Create the directory with `mkdir -p scripts/ralph/`

**This connects to:** Next you'll create ralph.sh (the loop engine) → which enables autonomous iteration → which is the core of "ship while you sleep"

---

### ralph.sh - The Core Loop

**Ryan Carson's Complete Implementation:**

```bash
#!/bin/bash
set -e

MAX_ITERATIONS=${1:-10}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Starting Ralph"

for i in $(seq 1 $MAX_ITERATIONS); do
  echo "=== Iteration $i ==="

  OUTPUT=$(cat "$SCRIPT_DIR/prompt.md" \
    | claude --dangerously-skip-permissions 2>&1 \
    | tee /dev/stderr) || true

  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo "Done!"
    exit 0
  fi

  sleep 2
done

echo "Max iterations reached"
exit 1
```

**Make executable:**
```bash
chmod +x scripts/ralph/ralph.sh
```

**Run:**
```bash
./scripts/ralph/ralph.sh 25  # max 25 iterations
```

---

## Checkpoint: After Creating ralph.sh

**Where you are:** You have the loop script created and executable.
**What this enables:** The automation engine that will drive repeated Claude iterations without your intervention.

**Verify your state:**
```bash
# Check file exists and is executable
ls -la scripts/ralph/ralph.sh

# Quick syntax check
bash -n scripts/ralph/ralph.sh && echo "Syntax OK"
```

**You should see:**
```
-rwxr-xr-x  1 user  staff  892 Jan  9 10:05 scripts/ralph/ralph.sh  ← note the 'x' for executable
Syntax OK                                                           ← no syntax errors
```

**Your folder should look like:**
```
scripts/ralph/
├── ralph.sh        ← YOU JUST CREATED THIS (executable)
├── prompt.md       ← coming next
├── prd.json        ← coming next
└── progress.txt    ← coming next
```

**If you don't see this:**
- Check: Did you copy the entire script including `#!/bin/bash`?
- Check: Did you run `chmod +x scripts/ralph/ralph.sh`?
- Check: File permissions should show `rwx` for owner
- Go back to: Recreate the file and set permissions

**This connects to:** The script needs prompt.md to tell Claude WHAT to do each iteration → which needs prd.json to track WHICH tasks → which together create the "external memory" architecture

---

### prompt.md - Agent Instructions

```markdown
# Ralph Agent Instructions

## Your Task

1. Read `scripts/ralph/prd.json`
2. Read `scripts/ralph/progress.txt` (check Codebase Patterns first)
3. Check you're on the correct branch
4. Pick highest priority story where `passes: false`
5. Implement that ONE story
6. Run typecheck and tests
7. Commit: `feat: [ID] - [Title]`
8. Update prd.json: `passes: true`
9. Append learnings to progress.txt

## Progress Format

APPEND to progress.txt:

---
## [Date] - [Story ID]
- What was implemented
- Files changed
- **Learnings:**
  - Patterns discovered
  - Gotchas encountered

## Stop Condition

If ALL stories pass, reply:
<promise>COMPLETE</promise>

Otherwise end normally.
```

### prd.json - Task Tracking

**Standard Format:**

```json
{
  "project": "Project Name",
  "branchName": "ralph/feature-name",
  "description": "Feature description",
  "userStories": [
    {
      "id": "US-001",
      "title": "Add login form",
      "description": "As a user, I need a login form",
      "acceptanceCriteria": [
        "Email/password fields render",
        "Validates email format",
        "Shows error on failure",
        "npm run typecheck passes",
        "npm run test passes"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-002",
      "title": "Add authentication server action",
      "description": "Backend logic for login",
      "acceptanceCriteria": [
        "Checks credentials against database",
        "Returns session token on success",
        "npm run typecheck passes"
      ],
      "priority": 2,
      "passes": false,
      "notes": ""
    }
  ]
}
```

**Matt Pocock's Simpler Format:**

```json
{
  "delete_video_shows_confirmation": {
    "description": "Delete video shows confirmation dialog before deleting",
    "passes": true
  },
  "beats_display": {
    "description": "Beats display as three orange ellipses dots below clip",
    "details": "Add beat to clip, verify 3 orange dots appear",
    "passes": false
  }
}
```

---

## Checkpoint: After Creating prd.json

**Where you are:** You have the task tracking file that tells Ralph which stories to work on.
**What this enables:** External task state that persists across iterations - this IS Ralph's memory of what's done/pending.

**Verify your state:**
```bash
# Check valid JSON syntax
cat scripts/ralph/prd.json | jq . > /dev/null && echo "Valid JSON"

# Count user stories
cat scripts/ralph/prd.json | jq '.userStories | length'
```

**You should see:**
```
Valid JSON                    ← no JSON parse errors
7                            ← (or however many stories you defined)
```

**You should be able to run:**
```bash
# List incomplete stories
cat scripts/ralph/prd.json | jq '.userStories[] | select(.passes == false) | .title'
```

**Expected output:**
```
"Add login form"             ← all your stories with passes: false
"Add validation schema"
"Create server action"
...
```

**Your folder should look like:**
```
scripts/ralph/
├── ralph.sh        ← created earlier
├── prompt.md       ← created earlier
├── prd.json        ← YOU JUST CREATED THIS
└── progress.txt    ← coming next
```

**If you don't see this:**
- Check: Is your JSON valid? Common errors: trailing commas, missing quotes
- Check: Does every story have `"passes": false`?
- Check: Are priorities set correctly (1 = highest)?
- Go back to: Use a JSON validator like `jq .` or jsonlint.com

**This connects to:** Ralph reads prd.json FIRST each iteration to find work → completes one story → marks it `passes: true` → this is how progress compounds across context-free iterations

---

### progress.txt - External Memory

```markdown
# Ralph Progress Log
Started: 2026-01-09

## Codebase Patterns
- Migrations: Use IF NOT EXISTS
- Zod: Always use .optional() for nullable
- React: useRef<Timeout | null>(null)

## Key Files
- db/schema.ts
- app/auth/actions.ts

---

## 2026-01-09 10:00 - US-001
- Completed: Login form skeleton
- Files: src/components/LoginForm.tsx
- Learnings: Use Tailwind for form styling

---

## 2026-01-09 10:15 - US-002
- Completed: Auth server action
- Files: app/auth/actions.ts, db/schema.ts
- Issue: Had to add explicit nullable type
- Pattern: Export types from actions.ts

---
```

**Critical Rule:** APPEND only, never UPDATE. The word "append" in instructions is essential.

---

## Checkpoint: Complete Ralph Setup (Pre-Flight)

**Where you are:** All 4 files exist. You're ready to run Ralph for the first time.
**What this enables:** Everything needed for autonomous development - loop script, instructions, task board, and learning log.

**Verify your state:**
```bash
# Check all files exist
ls -la scripts/ralph/

# Verify ralph.sh is executable
test -x scripts/ralph/ralph.sh && echo "ralph.sh is executable"

# Verify prd.json has incomplete tasks
cat scripts/ralph/prd.json | jq '.userStories[] | select(.passes == false) | .id' | head -3
```

**You should see:**
```
-rwxr-xr-x  ralph.sh         ← executable
-rw-r--r--  prompt.md        ← readable
-rw-r--r--  prd.json         ← readable
-rw-r--r--  progress.txt     ← readable (may be empty)

ralph.sh is executable

"US-001"                      ← tasks waiting
"US-002"
"US-003"
```

**Your complete folder structure:**
```
scripts/ralph/
├── ralph.sh        ← The loop engine (executable)
├── prompt.md       ← Instructions for each iteration
├── prd.json        ← Task board with user stories
└── progress.txt    ← Learnings log (starts empty/minimal)
```

**Pre-flight checklist:**
- [ ] `ralph.sh` has shebang (`#!/bin/bash`) and is executable
- [ ] `prompt.md` includes the `<promise>COMPLETE</promise>` stop condition
- [ ] `prd.json` is valid JSON with all `passes: false`
- [ ] `progress.txt` exists (can be empty or have header)
- [ ] Git branch created for this feature
- [ ] Tests can run (`npm test` or your test command)
- [ ] Typecheck works (`npm run typecheck` or equivalent)

**If you're missing anything:**
- Check: Each file against the templates above
- Check: JSON validity with `jq .`
- Check: Bash syntax with `bash -n ralph.sh`
- Go back to: The specific file creation step

**This connects to:** Running `./scripts/ralph/ralph.sh 25` → which starts autonomous iterations → which implements your feature while you sleep → which is the whole point of the Ralph pattern

**Ready to launch?**
```bash
# The moment of truth
./scripts/ralph/ralph.sh 25
```

---

## All Ralph Variants

### Basic Ralph

**What it is:** The foundational loop pattern.

**Use case:** Standard feature development with clear acceptance criteria.

**Implementation:** See [Basic Implementation](#the-basic-implementation) above.

**Actionability:** Medium lift - requires PRD setup + bash scripting.

---

### AFK Ralph (Away From Keyboard)

**What it is:** Full autonomous loop designed to run overnight.

**What makes it different:**
- Runs for hours/days without human intervention
- Requires bulletproof feedback loops (tests, typecheck, CI)
- Wake up to completed work

**Key requirements:**
- All acceptance criteria must be programmatically verifiable
- Max iterations set high (50-100)
- Robust error handling

**Quote:**
> "KISS approach to AI coding that lets you ship while you sleep"
> — Matt Pocock

---

### HOTL Ralph (Human On The Loop)

**What it is:** Single-iteration variant with human review between runs.

**Script (ralph-hotl.sh):**

```bash
#!/bin/bash
# Single iteration with review

claude "Review plans/prd.json and plans/progress.txt.
  Pick ONE feature marked passes: false.
  Implement it.
  Run tests.
  If passing, mark passes: true and commit.
  Append learnings to progress.txt.
  Output what you completed."

# Show diff for review
echo "=== Changes made ==="
git diff HEAD~1 --stat

echo "=== PRD Status ==="
jq '.userStories[] | select(.passes == false) | .title' plans/prd.json

read -p "Continue to next iteration? (y/n) " -n 1 -r
if [[ $REPLY =~ ^[Yy]$ ]]; then
  ./ralph-hotl.sh
fi
```

**When to use:**
- Security-sensitive code
- Learning a new codebase
- Debugging stuck loops
- Training PRD format

---

### Marathon Ralph

**Creator:** @stephen_rayner / @gruckion

**Repo:** github.com/gruckion/marathon-ralph

**What it adds:**
- Full software development lifecycle integration
- Comprehensive test suite generation
- E2E test automation
- Build entire apps with unit and E2E tests

**Use case:** When you want complete SDLC compliance, not just feature completion.

**Actionability:** Medium lift.

---

### Dr. Ralph

**Creator:** @MikeEndale

**What it adds:**
- Multi-phase version with confidence thresholds
- Agent reports confidence percentage
- Only advances when 80%+ confident

**Key innovation:** Better for complex, uncertain tasks where simple pass/fail isn't enough.

**Example criteria:**
```json
{
  "id": "US-003",
  "title": "Implement payment flow",
  "confidenceThreshold": 80,
  "phases": [
    {"name": "schema", "confidence": 0},
    {"name": "backend", "confidence": 0},
    {"name": "frontend", "confidence": 0}
  ]
}
```

**Actionability:** Medium lift.

---

### Compounding Ralph

**Creator:** @ryancarson

**What it adds:**
- Archives PRDs from previous runs
- Agent references past successes/failures
- Each run makes the next better

**Archive structure:**
```
archives/
├── run-2026-01-05/
│   ├── prd.json
│   ├── progress.txt
│   └── learnings.md
├── run-2026-01-06/
│   └── ...
└── run-2026-01-08/
    └── ...
```

**Prompt addition:**
```markdown
## Learning from Previous Runs

Before starting, review archives in `archives/` folder:
- What patterns worked well?
- What caused failures?
- What shortcuts were discovered?

Apply these learnings to current implementation.
```

**Quote:**
> "What's amazing is I can ask it to look at previous runs to learn what worked or didn't work. So every time I run Ralph, it gets better and better."
> — Ryan Carson

**Actionability:** Medium lift - setup + archive management.

---

### Parallel Ralph

**What it is:** Multiple Ralph instances running simultaneously on different features/branches.

**Implementation with Git Worktrees:**

```bash
# Spawn parallel Ralph loops in separate worktrees
for feature in auth payments notifications; do
  git worktree add ../wt-$feature $feature-branch
  (cd ../wt-$feature && ./ralph.sh 20) &
done
wait

# Merge results
for feature in auth payments notifications; do
  git merge wt-$feature
done
```

**From Ryan Carson:**
> Later posts show Ryan running **3 simultaneous Ralph instances**:
> - Different branches
> - Different features
> - All overnight

**Key requirements:**
- True isolation between agents
- No file conflicts
- Shared git history
- Consider running on separate machines

**Actionability:** Medium-high lift.

---

### Ralph Wiggum Marketer

**Creator:** @koylanai (Muratcan Koylan)

**Repo:** github.com/muratcankoylan/ralph-wiggum-marketer

**What it is:** Self-critiquing content loop for marketing copy.

**Key innovations:**
- **Separation of Discovery vs Synthesis:** Pre-populate SQLite DB with content—AI synthesizes, doesn't discover
- **Self-critique loop:** "Would founder publish?" iterates until YES
- **Voice matching:** Scores output against writing samples

**The Loop:**
```
DISCOVER → LEARN → RESEARCH → IDEATE → WRITE → CRITIQUE
                                                   ↓
                                          "Would founder publish?"
                                                   ↓
                                            No → ITERATE
                                            Yes → PUBLISH
```

**Commands:**
```
/ralph-init      # Initialize project
/ralph-marketer  # Start the loop
/ralph-status    # Check progress
/ralph-cancel    # Stop
```

**Critical insight from author:**
> "Ralph doesn't have the LLM 'discover' things on its own. Its discovery is a database-driven input system... The agent's job is synthesis."

**Translation:** Don't let AI discover facts—it hallucinates. Give it facts, let it synthesize.

**Actionability:** Medium lift - need to install plugin, seed DB.

---

### Lisa

**Creator:** @petruarakiss / Arakiss

**Repo:** github.com/Arakiss/lisa

**What it adds:**
- Enhanced logging capabilities
- Better progress visualization
- Debugging support

**Use case:** When you need more observability into Ralph's behavior.

**Actionability:** Quick win.

---

### Rate-Limited Ralph

**Creator:** @ghuntley

**Repo:** github.com/ghuntley/ralph-claude-code

**What it adds:**
- Backoff strategies for rate limits
- Cost tracking
- Rate limit awareness

**Implementation:**

```bash
#!/bin/bash
RATE_LIMIT_SLEEP=5

while [ $CURRENT_ITERATION -le $MAX_ITERATIONS ]; do
  # Check rate limit before proceeding
  if [ -f /tmp/ralph-rate-limited ]; then
    echo "Rate limited, waiting..."
    sleep 60
    rm /tmp/ralph-rate-limited
  fi

  claude @prompt.md 2>&1 | tee output.txt

  # Check for rate limit response
  if grep -q "rate_limit" output.txt; then
    touch /tmp/ralph-rate-limited
  fi

  # Check completion
  if grep -q "<promise>COMPLETE</promise>" output.txt; then
    break
  fi

  sleep $RATE_LIMIT_SLEEP
  CURRENT_ITERATION=$((CURRENT_ITERATION + 1))
done
```

**Actionability:** Quick win.

---

### Zeroshot

**Creator:** @Eivind1384955 / covibes

**Repo:** github.com/covibes/zeroshot/

**What it is:** "Next gen version" of Ralph.

**Actionability:** Medium lift.

---

## Critical Success Factors

### 1. Task Sizing (THE Most Critical Factor)

**The Golden Rule:**
> Each task must be completable in ONE iteration (~one context window).

**Right-sized tasks:**
- Add a database column + migration
- Add a UI component to an existing page
- Update a server action with new logic
- Add a filter dropdown to a list
- Write tests for one module
- Implement one API endpoint

**Too big (split these):**
- "Build the entire dashboard" → Split: schema, queries, UI, filters
- "Add authentication" → Split: schema, middleware, login UI, sessions
- "Refactor the API" → Split: one story per endpoint
- "Create e-commerce flow" → Split: cart, checkout, payment, confirmation

**Rule of thumb:**
> "If you can't describe it in 2-3 sentences, it's too big."
> — Ryan Carson

**Context budget considerations:**
- Task implementation: ~2000-10000 tokens
- Verification: ~500-2000 tokens
- Leave room for MCP tools if needed
- Include overhead for commit and progress logging

---

### 2. Story Ordering (Dependencies First)

```
1. Schema/database changes (migrations)
2. Server actions / backend logic
3. UI components that use the backend
4. Dashboard/summary views that aggregate
```

**Wrong:** UI component before the schema it depends on.

---

### 3. Acceptance Criteria (Must Be Verifiable)

**Good (verifiable):**
```json
"acceptanceCriteria": [
  "Add investorType column with default 'cold'",
  "Filter dropdown has options: All, Cold, Friend",
  "Clicking filter updates list correctly",
  "npm run typecheck passes",
  "npm run test passes"
]
```

**Bad (vague):**
```json
"acceptanceCriteria": [
  "Works correctly",
  "Good UX",
  "Handles edge cases"
]
```

**Always include:** `"npm run typecheck passes"` as criterion.

---

### 4. Feedback Loops (Non-Negotiable)

**Without verification, Ralph produces garbage.**

| Priority | Method | Use Case |
|----------|--------|----------|
| 1 | Type checking | `npm run typecheck` - Always |
| 2 | Unit tests | `npm test` - For logic |
| 3 | CI green | Every commit must pass |
| 4 | Browser automation | Playwright MCP for UI |
| 5 | Manual spot-check | Human review at milestones |

**Quote:**
> "Claude's tendency to mark features complete without proper testing... did much better at verifying end-to-end once explicitly prompted to use browser automation tools"
> — Anthropic best practices

---

### 5. Fresh Context Per Iteration

**Why it matters:**
- LLMs degrade with accumulated context ("context rot")
- Quality drops as tokens accumulate
- Agent loses track of goals

**How Ralph solves it:**
- Each iteration = new Claude instance
- Memory lives in external artifacts
- Git history for code changes
- prd.json for task status
- progress.txt for learnings

---

### 6. Explicit Completion Signals

**The promise pattern:**
```
If ALL stories pass, reply:
<promise>COMPLETE</promise>
```

**Loop detection:**
```bash
if grep -q "<promise>COMPLETE</promise>" output.txt; then
  echo "Done!"
  exit 0
fi
```

**Alternative (jq-based):**
```bash
while jq '.tasks[] | select(.passes == false)' prd.json | grep -q .; do
  claude @prompt.md
done
```

---

### 7. Max Iterations (Safety Net)

**Always set a limit:**
```bash
MAX_ITERATIONS=${1:-10}
```

**Prevents:**
- Runaway costs
- Infinite loops on stuck tasks
- Token budget overruns

---

### 8. Learnings Compound

**Two places for learnings:**

1. **progress.txt** — Session memory for Ralph iterations
2. **AGENTS.md** — Permanent docs for humans and future agents

**What to add to AGENTS.md:**
- "When modifying X, also update Y"
- "This module uses pattern Z"
- "Tests require dev server running"

**What NOT to add:**
- Story-specific details
- Temporary notes
- Info already in progress.txt

---

## Common Failure Modes and Fixes

### 1. Stories Too Large

**Symptom:** Context overflow, broken code, agent loses track.

**Diagnosis:** Task takes more than one context window to complete.

**Fix:** Split into smaller stories (2-3 sentence rule).

**Example:**
```
BAD: "Build entire auth system"

GOOD:
- "Add users table migration"
- "Add auth middleware"
- "Add login form component"
- "Add session management"
```

---

### 2. Weak Tests / No Verification

**Symptom:** Errors compound across iterations; future iterations inherit broken code.

**Quote:**
> "If you don't do this, you're hamstringing future agent runs with bad code, and they'll need to bisect to find bugs. Super nasty."
> — Matt Pocock

**Fix:** Require typecheck + tests in EVERY acceptance criteria.

---

### 3. Frontend Without Browser Verification

**Symptom:** UI changes claimed complete but visually broken.

**Fix:** Add Playwright/browser verification:
```
"Verify at localhost:3000/login using dev-browser skill"
```

**Browser testing example:**
```bash
cd ~/.config/amp/skills/dev-browser && npx tsx <<'EOF'
import { connect, waitForPageLoad } from "@/client.js";

const client = await connect();
const page = await client.page("test");
await page.goto("http://localhost:3000/login");
await waitForPageLoad(page);
await page.screenshot({ path: "tmp/screenshot.png" });
await client.disconnect();
EOF
```

---

### 4. Non-Idempotent Migrations

**Symptom:** Database in inconsistent state; migration fails on re-run.

**Fix:** Use idempotent SQL:
```sql
ADD COLUMN IF NOT EXISTS email TEXT;
```

---

### 5. Progress Overwriting (Not Appending)

**Symptom:** Learnings lost between iterations.

**Fix:** Use the word "APPEND" explicitly in prompt:
```
APPEND to progress.txt (never update or overwrite):
```

---

### 6. Stuck Detection

**Symptom:** Ralph repeats same task without progress.

**Detection script:**
```bash
STUCK_THRESHOLD=3
LAST_COMMIT=""
STUCK_COUNT=0

while [ $CURRENT_ITERATION -le $MAX_ITERATIONS ]; do
  claude @prompt.md | tee output.txt

  CURRENT_COMMIT=$(git rev-parse HEAD 2>/dev/null)

  if [ "$CURRENT_COMMIT" = "$LAST_COMMIT" ]; then
    STUCK_COUNT=$((STUCK_COUNT + 1))
    if [ $STUCK_COUNT -ge $STUCK_THRESHOLD ]; then
      echo "WARNING: Stuck for $STUCK_COUNT iterations"
      exit 1
    fi
  else
    STUCK_COUNT=0
    LAST_COMMIT=$CURRENT_COMMIT
  fi

  CURRENT_ITERATION=$((CURRENT_ITERATION + 1))
done
```

**Manual intervention:**
1. Set `passes: false` on problematic story
2. Add notes field with context
3. Reduce acceptance criteria scope
4. Run Ralph again

---

### 7. E2E Test Environment Issues

**Symptom:** Tests fail due to ports, DB state, not code issues.

**Fix:** Reset environment between iterations, use fixtures.

---

### 8. Interactive Prompts Blocking

**Symptom:** Script hangs waiting for user input.

**Fix:**
```bash
echo -e "\n\n\n" | npm run db:generate
```

Or use `--yes` flags where available.

---

### 9. Context Overflow on Single Task

**Symptom:** Quality degrades mid-task.

**Diagnosis:** Task too complex for single context window.

**Fix:** Split task further, or use Amp auto-handoff:
```json
// ~/.config/amp/settings.json
{
  "amp.experimental.autoHandoff": {
    "context": 90
  }
}
```

---

## Real Results and Case Studies

### Case Study 1: Ryan Carson's 14-Iteration Feature

**Project:** Untangle Legal Agent
**Feature:** Income Upsert Tool
**Iterations:** 14
**Time:** ~2 hours autonomous
**Cost:** ~$10-15 estimate

**What was built:**
- Tool skeleton with Zod schema
- Category mapping
- Duplicate detection
- Database operations
- UI components
- Validation logic

**Key learnings:**
- Started with 6 well-defined user stories
- Each story had specific acceptance criteria
- Used Zod schemas for validation
- All stories completed by morning

**Quote:**
> "Learnings compound. By story 10, Ralph knew our patterns."

---

### Case Study 2: Matt Pocock's Video Editor

**Project:** AI Hero Video Editor
**Feature:** Beats display system
**Outcome:** Visual feature completed with Playwright verification

**What was built:**
- BeatIndicator component
- Three orange dots below clips
- Tests passing
- Visual verification via Playwright screenshot

**Quote:**
> "The beats display as three orange ellipses dots below clip - Claude used Playwright to verify the UI actually rendered correctly."

---

### Case Study 3: Evaluation System Build

**Stories:** 13 user stories
**Iterations:** ~15
**Time per iteration:** 2-5 minutes
**Total time:** ~1 hour

**Key insight:** Given excellent upfront specification, meaningful unattended software production is achievable in 2026.

---

### Case Study 4: Molly Cantillon's Jmail

**Project:** Jmail (Epstein files search)
**Result:** 18M users, built overnight

**Approach:**
- Parsed documents using overnight Ralph loops
- Built search index autonomously
- Deployed to production next morning
- Example of "autonomous department" pattern

---

## When NOT to Use Ralph

### Anti-Patterns (Do Not Use Ralph For)

1. **Subjective tasks**
   - "Make this pretty" has no verifiable completion
   - "Improve the UX" is not measurable

2. **Security-critical code**
   - Needs human review, not autonomous loops
   - Use HOTL Ralph at minimum

3. **Ambiguous requirements**
   - "Build something cool" will waste tokens
   - If you can't define "done", Ralph won't help

4. **One-shot operations**
   - No need for loops if it's a single task
   - Overhead not justified

5. **Exploratory work**
   - No defined end state
   - Use HOTL Ralph instead

6. **Design decisions**
   - Ralph implements, humans decide
   - Architecture choices need human judgment

7. **Complex debugging**
   - Often needs human intuition
   - May require domain knowledge

8. **Legacy code without tests**
   - No verification = no Ralph
   - Feedback loops are non-negotiable

9. **Third-party API integrations**
   - Often need manual testing
   - External dependencies unpredictable

10. **Production deployments**
    - Always review before shipping
    - No autonomous deploys

### Quote Collection on Anti-Patterns

> "A word of warning that it doesn't take the place of good planning and context engineering phases... why burn tokens on brute force"
> — @seltzergenius

> "My concern: loops without review. Works until it builds something broken in ways you don't notice. What's your verification layer?"
> — @f_butz

> "Curious what type of task that would be useful for... those without well defined completion criteria aren't good candidates"
> — @Killian_Kirk

---

## Combinations That Enhance Ralph

### Ralph + Opus 4.5 + Playwright = "AGI"

**Source:** @weswinder

**The Stack:**

| Component | Role |
|-----------|------|
| **Opus 4.5** | Strong underlying model for reasoning |
| **Ralph Wiggum** | Iterative loop that persists through failures |
| **Playwright** | Browser automation for real-world verification |

**Why it works:**
- Ralph feeds the same prompt repeatedly
- Playwright enables web-based verification
- Opus 4.5 provides reasoning power (fewer iterations needed)

**Critical optimization (@TendiesOfWisdom):**
> "The feedback loop is everything, but put costly tools like browser control in subagents to protect your main context window tokens"

---

### Ralph + PRD Generation Tools

**Combine with:**
- ai-dev-tasks repo (github.com/snarktank/ai-dev-tasks)
- /prd skill in Amp
- Claude to generate prd.json from requirements

**Workflow:**
1. Describe feature in natural language
2. Claude generates PRD with stories
3. Review and adjust
4. Run Ralph

---

### Ralph + Git Worktrees (Parallel Execution)

**Purpose:** True isolation between parallel agents.

**Implementation:**
```bash
git worktree add ../wt-feature1 feature1-branch
git worktree add ../wt-feature2 feature2-branch

(cd ../wt-feature1 && ./ralph.sh 20) &
(cd ../wt-feature2 && ./ralph.sh 20) &
wait
```

**Benefits:**
- No file conflicts
- Shared git history
- Can run on separate machines

---

### Ralph + Mobile Notifications

**Purpose:** Get notified when Ralph needs input or completes.

**Implementation (from Nader Dabit's mobile setup):**

```json
// ~/.claude/settings.json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "AskUserQuestion",
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/notify-ralph-question.sh"
      }]
    }]
  }
}
```

```bash
#!/bin/bash
# ~/.claude/hooks/notify-ralph-question.sh
QUESTION=$(echo "$EVENT_DATA" | jq -r '.tool_input.questions[0].question')
curl -X POST "$POKE_WEBHOOK" -d "{\"message\": \"Ralph needs input: $QUESTION\"}"
```

---

### Ralph + CC Mirror Orchestration

**Purpose:** Multi-agent coordination with Ralph as the task executor.

**Architecture:**
1. Use CC Mirror for task decomposition
2. Each agent uses Ralph for its assigned task
3. TaskCreate/TaskUpdate for coordination
4. Parallel Ralph loops on separate branches

---

### Ralph + Claude-Mem (Persistent Memory)

**Purpose:** Combine fresh context with relevant memory retrieval.

```bash
for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  # claude-mem automatically injects relevant context
  claude "Load relevant context from memory, then: $(cat prompt.md)" | tee output.txt

  if grep -q "COMPLETE" output.txt; then
    break
  fi
done
```

---

### Ralph + Docker (Safety)

**Purpose:** Isolated execution environment.

**Benefits:**
- Consistent environment
- No local filesystem risk
- Easy cleanup
- Reproducible

---

### Ralph + TDD

**Purpose:** Test-driven development within Ralph loop.

**PRD structure:**
```json
{
  "id": "T-001",
  "title": "Add user endpoint tests",
  "acceptanceCriteria": [
    "Unit tests for happy path",
    "Unit tests for error cases",
    "Coverage > 80%"
  ],
  "priority": 1,
  "passes": false
},
{
  "id": "T-002",
  "title": "Implement user endpoint",
  "dependsOn": ["T-001"],
  "acceptanceCriteria": [
    "All T-001 tests pass"
  ],
  "passes": false
}
```

---

## Complete Reference Materials

### Official Resources

| Resource | URL |
|----------|-----|
| Original Ralph | ghuntley.com/ralph/ |
| Official Plugin | github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum |
| Ryan Carson's Ralph | github.com/snarktank/ralph |
| PRD Templates | github.com/snarktank/ai-dev-tasks |
| Amp Skills | github.com/snarktank/amp-skills |

### Community Implementations

| Repo | Author | Purpose |
|------|--------|---------|
| marathon-ralph | @stephen_rayner | SDLC integration |
| lisa | @petruarakiss | Logging fork |
| zeroshot | @Eivind1384955 | Next gen version |
| ralph-wiggum-marketer | @koylanai | Content generation |
| ralph-orchestrator | @mikeyobrien | Multi-agent coordination |
| ralph-claude-code | @ghuntley | Rate limiting |

### Key Articles and Videos

- **Matt Pocock 11 Tips:** aihero.dev/tips-for-ai-coding-with-ralph-wiggum
- **Video Demo:** youtube.com/watch?v=O2bBWDoxO4s
- **Awesome Claude AI:** awesomeclaude.ai/ralph-wiggum

### Cost Estimates

| Iterations | Tokens (est.) | Cost @ $15/M |
|------------|---------------|--------------|
| 10 | 30K-150K | $0.45-$2.25 |
| 25 | 75K-375K | $1.13-$5.63 |
| 50 | 150K-750K | $2.25-$11.25 |
| 100 | 300K-1.5M | $4.50-$22.50 |

**Real examples:**
- 14-iteration feature: ~$10-15
- Overnight app build (50 iterations): $50-100

### Actionability Summary

| Approach | Lift | Best For |
|----------|------|----------|
| Official Plugin | Quick | Standard Ralph workflows |
| Bash Script | Quick | Custom control |
| Marathon Ralph | Medium | Full SDLC |
| Ralph Marketer | Medium | Content generation |
| Ralph + Playwright | Medium | UI features |
| Parallel Ralph | Medium-High | Multi-feature overnight |
| CC Mirror + Ralph | Deep | Multi-agent coordination |

---

## Quick Start Checklist

### Minimal Setup

1. Create `plans/` directory
2. Add ralph.sh script
3. Create prd.json with small tasks
4. Create empty progress.txt
5. Run `./plans/ralph.sh 10`

---

## Checkpoint: After First Successful Ralph Run

**Where you are:** Ralph has completed at least one iteration successfully.
**What this enables:** Proof that the pattern works in YOUR codebase with YOUR setup.

**Verify your state:**
```bash
# Check git for commits from Ralph
git log --oneline -5

# Check prd.json for completed stories
cat plans/prd.json | jq '.userStories[] | select(.passes == true) | .id'

# Check progress.txt has entries
tail -20 plans/progress.txt
```

**You should see:**
```
a1b2c3d feat: US-001 - Add login form       ← Ralph's commit!
...

"US-001"                                      ← at least one story complete

---
## Iteration 1 - US-001 - 2026-01-09          ← progress entry
- **Completed:** Created LoginForm component
- **Learnings:** Project uses shadcn/ui
```

**Signs of healthy Ralph operation:**
- [ ] At least one story marked `passes: true`
- [ ] Git commit with `feat: US-XXX` format
- [ ] progress.txt has new entries (appended, not replaced)
- [ ] Tests still pass (`npm test`)
- [ ] No infinite loops or stuck iterations

**If Ralph failed:**
- Check: Did it find `<promise>COMPLETE</promise>` too early?
- Check: Did tests fail? Read the output for errors
- Check: Is the task too big? Split it further
- Check: Is acceptance criteria verifiable?
- Go back to: Review failure modes section below

**This connects to:** One successful run proves the pattern works → Now you can trust it for overnight runs → Which unlocks "ship while you sleep" productivity

---

### Pre-Flight Checks

- [ ] Tasks are small enough (2-3 sentence rule)
- [ ] Dependencies ordered correctly
- [ ] Acceptance criteria are verifiable
- [ ] Tests exist or will be created
- [ ] Git branch created
- [ ] progress.txt initialized
- [ ] Max iterations set
- [ ] Verification commands work (`npm test`, etc.)

### The Complete Mental Model

```
                    ┌─────────────────────────────────────┐
                    │         RALPH MENTAL MODEL          │
                    └─────────────────────────────────────┘
                                      │
              ┌───────────────────────┴───────────────────────┐
              │                                               │
              ▼                                               ▼
    ┌─────────────────┐                             ┌─────────────────┐
    │  EXTERNAL MEMORY │                             │   FRESH CONTEXT │
    │                  │                             │                 │
    │  • Git history   │                             │  • No rot       │
    │  • prd.json      │◄───── Continuity ──────────►│  • Clean slate  │
    │  • progress.txt  │                             │  • Full capacity│
    │  • File system   │                             │                 │
    └─────────────────┘                             └─────────────────┘
              │                                               │
              └───────────────────────┬───────────────────────┘
                                      │
                                      ▼
                         ┌─────────────────────┐
                         │   SMALL, VERIFIABLE │
                         │       TASKS         │
                         │                     │
                         │ • 2-3 sentence rule │
                         │ • One context window│
                         │ • Clear criteria    │
                         └─────────────────────┘
                                      │
                                      ▼
                         ┌─────────────────────┐
                         │   FEEDBACK LOOPS    │
                         │                     │
                         │ • Tests must pass   │
                         │ • Typecheck green   │
                         │ • CI validates      │
                         │ • Browser verifies  │
                         └─────────────────────┘
                                      │
                                      ▼
                         ┌─────────────────────┐
                         │   EXPLICIT SIGNALS  │
                         │                     │
                         │ • <promise>COMPLETE │
                         │ • passes: true      │
                         │ • Max iterations    │
                         └─────────────────────┘
```

---

## The Bottom Line

Ralph Wiggum is not about making the agent smarter. It is about:

1. **Working around context limitations** through fresh starts
2. **Leveraging persistence** through external memory
3. **Building feedback loops** that catch errors
4. **Compounding progress** across iterations
5. **Accepting imperfection** while achieving eventual consistency

> "Given excellent upfront specification, we can already achieve meaningful unattended software production in 2026."

The transformation is clear:

| Human Role | AI Role |
|------------|---------|
| Product Manager | Implementation Army |
| Architect | Tireless Executor |
| 25-30 min planning | 8 hours grinding |
| Morning review | Overnight shipping |

Ralph enables "ship while you sleep" workflows. The pattern is simple, powerful, and proven.

---

## Troubleshooting

### Script Issues

#### Error: "ralph.sh: Permission denied"
**Symptoms:** Cannot execute the Ralph script
**Cause:** Script lacks execute permission
**Solution:**
```bash
# Add execute permission
chmod +x scripts/ralph/ralph.sh

# Or run with bash explicitly
bash scripts/ralph/ralph.sh 10
```
**Prevention:** Always run `chmod +x` after creating scripts

---

#### Error: "claude: command not found"
**Symptoms:** Script runs but can't find Claude Code
**Cause:** Claude Code not installed or not in PATH
**Solution:**
```bash
# Install Claude Code
npm install -g @anthropic-ai/claude-code

# Verify installation
which claude
claude --version

# If still not found, add npm global to PATH
export PATH="$PATH:$(npm bin -g)"
```
**Prevention:** Add PATH export to shell profile

---

#### Error: "set -e causing immediate exit"
**Symptoms:** Script exits on first minor error
**Cause:** Bash strict mode (`set -e`) treating warnings as errors
**Solution:**
```bash
# Option 1: Remove strict mode
# Change: set -e
# To: (remove or comment out)

# Option 2: Handle expected failures
claude "..." 2>&1 | tee /dev/stderr || true

# Option 3: Only strict on critical parts
set +e  # Disable
claude "..."
set -e  # Re-enable
```
**Prevention:** Use `|| true` after commands that might fail non-fatally

---

### PRD Issues

#### Error: "jq: parse error"
**Symptoms:** Ralph can't read prd.json, script fails
**Cause:** Invalid JSON in prd.json
**Solution:**
```bash
# Validate JSON
cat plans/prd.json | jq .

# Common errors:
# - Trailing commas: {"key": "value",}
# - Missing quotes: {key: "value"}
# - Unclosed braces: {"key": "value"

# Fix with jsonlint or manual editing
# Rebuild if necessary:
claude "Regenerate prd.json from current project state"
```
**Prevention:** Always validate JSON after editing manually

---

#### Problem: "Task too large for single iteration"
**Symptoms:** Context overflow, incomplete work, timeouts
**Cause:** User story too big to complete in one iteration
**Solution:**
Split the story:
```json
// BAD: Too large
{
  "id": "US-001",
  "title": "Build authentication system",
  "passes": false
}

// GOOD: Right-sized
{
  "id": "US-001",
  "title": "Create users table schema",
  "passes": false
},
{
  "id": "US-002",
  "title": "Add auth middleware",
  "passes": false
},
{
  "id": "US-003",
  "title": "Create login form component",
  "passes": false
}
```
**Rule of thumb:** If you can't describe it in 2-3 sentences, split it

---

#### Problem: "Dependencies in wrong order"
**Symptoms:** Agent tries to build UI before schema exists
**Cause:** Task priority not respecting dependencies
**Solution:**
Order tasks correctly:
```json
{
  "userStories": [
    { "id": "US-001", "title": "Database schema", "priority": 1 },
    { "id": "US-002", "title": "API endpoints", "priority": 2 },
    { "id": "US-003", "title": "UI components", "priority": 3 }
  ]
}
```
**Correct order:** Schema → Backend → Frontend
**Prevention:** Always review task order before starting Ralph

---

### Iteration Issues

#### Problem: "Ralph stuck repeating same task"
**Symptoms:** Same task attempted repeatedly, no progress
**Cause:** Task failing verification, impossible criteria, or loop detection failure
**Solution:**
```bash
# Check what's happening
cat plans/progress.txt | tail -30
jq '.userStories[] | select(.passes == false)' plans/prd.json

# Diagnose the root cause:
# - Tests failing? Fix the test or implementation
# - Criteria impossible? Revise them
# - Task too big? Split it

# Manual intervention:
# Edit prd.json to add notes or reduce scope
# Add to progress.txt: "BLOCKER: [description]"
```
**Stuck detection script:**
```bash
LAST_COMMIT=""
STUCK_COUNT=0

# In loop:
CURRENT_COMMIT=$(git rev-parse HEAD)
if [ "$CURRENT_COMMIT" = "$LAST_COMMIT" ]; then
  STUCK_COUNT=$((STUCK_COUNT + 1))
  if [ $STUCK_COUNT -ge 3 ]; then
    echo "STUCK! Investigate manually."
    exit 1
  fi
fi
LAST_COMMIT=$CURRENT_COMMIT
```
**Prevention:** Include stuck detection in ralph.sh

---

#### Problem: "Loop continues after all tasks done"
**Symptoms:** All stories pass but Ralph doesn't exit
**Cause:** Completion promise not being output or not detected
**Solution:**
```bash
# Check prompt.md has correct format:
"If ALL stories pass, reply exactly:
<promise>COMPLETE</promise>"

# Check ralph.sh has correct grep:
if grep -q "<promise>COMPLETE</promise>" output.txt; then
  echo "Done!"
  exit 0
fi

# Test detection manually:
echo "<promise>COMPLETE</promise>" > test.txt
grep -q "<promise>COMPLETE</promise>" test.txt && echo "Match works"
```
**Prevention:** Test completion detection before long runs

---

#### Problem: "progress.txt being overwritten"
**Symptoms:** Previous iteration learnings lost
**Cause:** Agent not using append mode
**Solution:**
```markdown
# In prompt.md, be EXPLICIT with caps:
"APPEND to progress.txt (NEVER overwrite or update previous content):

---
## [Date] - [Task ID]
..."
```
**The word "APPEND" in caps is critical** - models recognize this instruction
**Prevention:** Always use explicit "APPEND" instruction

---

### Verification Issues

#### Problem: "Tests failing but Ralph claims success"
**Symptoms:** Tasks marked complete despite broken tests
**Cause:** Acceptance criteria not including test verification
**Solution:**
```json
{
  "acceptanceCriteria": [
    "Feature X implemented",
    "npm run typecheck passes",  // ADD THIS
    "npm run test passes"        // AND THIS
  ]
}
```
**Always include:** `"npm run typecheck passes"` in every story
**Prevention:** Make typecheck/test part of every acceptance criteria

---

#### Problem: "UI changes not being verified"
**Symptoms:** Visual bugs despite Ralph marking complete
**Cause:** No browser verification configured
**Solution:**
```markdown
# In prompt.md:
"For UI changes, verify at localhost:3000 using dev-browser skill"

# Or in acceptance criteria:
"Verify login form renders correctly at /login"
"Take screenshot and confirm 3 orange dots visible"
```
**For comprehensive UI verification:**
- Install Playwright MCP
- Use dev-browser skill
- Add visual verification to criteria

**Prevention:** Include browser verification for all UI stories

---

### Rate Limiting Issues

#### Problem: "API rate limits causing failures"
**Symptoms:** Script exits with rate limit errors
**Cause:** Too many requests too quickly
**Solution:**
```bash
# Add sleep between iterations
sleep 5  # 5 seconds between iterations

# Add rate limit handling
RATE_LIMIT_SLEEP=5
if grep -q "rate_limit" output.txt; then
  echo "Rate limited, waiting..."
  sleep 60
fi
```
**Prevention:** Always include delays and rate limit handling

---

#### Problem: "Unexpected high costs"
**Symptoms:** API bills much higher than expected
**Cause:** Too many iterations, tasks too large, or runaway loops
**Solution:**
```bash
# Set strict iteration limits
MAX_ITERATIONS=10  # Start small

# Add cost awareness to prompt:
"Be concise. Complete ONE task per iteration only.
Maximum budget: $20 for this entire run."

# Monitor in real-time:
# Check API dashboard during run
```
**Cost estimates:**
| Iterations | Approx Cost |
|------------|-------------|
| 10 | $0.50-$2 |
| 25 | $1-$5 |
| 50 | $2-$10 |

**Prevention:** Start with low max-iterations, increase only as needed

---

### Environment Issues

#### Problem: "Interactive prompts blocking Ralph"
**Symptoms:** Script hangs waiting for user input
**Cause:** Some commands prompt for confirmation
**Solution:**
```bash
# Use auto-confirm flags
npm run db:generate --yes

# Or pipe empty input
echo -e "\n\n\n" | npm run db:generate

# Or use expect scripts for complex interactions
```
**Common culprits:**
- `npm run db:generate` (Drizzle)
- `npx prisma migrate` (Prisma)
- Package installers
**Prevention:** Test all commands for interactivity before Ralph run

---

#### Problem: "E2E tests failing in Ralph"
**Symptoms:** Tests pass manually but fail in Ralph loop
**Cause:** Port conflicts, database state, environment differences
**Solution:**
```bash
# Reset environment between iterations
# In prompt.md:
"Before running tests:
1. Reset test database
2. Ensure port 3000 is free
3. Run dev server if needed"

# Or in ralph.sh before each iteration:
pkill -f "node.*next"  # Kill leftover processes
npm run db:reset:test  # Reset test database
```
**Prevention:** Include environment reset in each iteration

---

### When NOT to Use Ralph

| Scenario | Problem | Use Instead |
|----------|---------|-------------|
| Subjective tasks | "Make it pretty" has no verifiable end | Human review |
| Security-critical code | Needs human oversight | HOTL Ralph |
| Ambiguous requirements | "Build something cool" wastes tokens | Define concrete specs first |
| One-shot operations | Loop overhead not justified | Single Claude session |
| Exploratory work | No defined end state | HOTL Ralph |
| Design decisions | Ralph implements, humans decide | Discuss first, then Ralph |
| Legacy code without tests | No verification possible | Add tests first |
| Third-party API integrations | External dependencies unpredictable | Manual testing |
| Production deployments | Always review before shipping | Human deployment process |

### Known Limitations

1. **Requires upfront investment** - PRD setup and task decomposition take time
2. **Tasks must be verifiable** - Subjective goals don't work
3. **Model limitations apply** - Ralph can't do what Claude can't do
4. **Not a silver bullet** - Bad prompts produce bad results
5. **Costs accumulate** - 100 iterations = significant API spend
6. **Environment must be stable** - Flaky tests break Ralph
7. **Fresh context has overhead** - Each iteration re-reads state
8. **Human review still needed** - Ralph produces, humans verify quality

### Emergency Recovery

#### Ralph completely stuck
```bash
# Kill the running script
Ctrl+C

# Check state
git log --oneline -10
cat plans/prd.json | jq '.userStories[] | select(.passes == false)'
cat plans/progress.txt | tail -20

# Manual intervention
# Edit prd.json to fix/simplify stuck task
# Add notes to progress.txt explaining the issue

# Restart
./scripts/ralph/ralph.sh 10
```

#### Ralph made bad changes
```bash
# Undo last Ralph commit
git reset --soft HEAD~1

# Or revert to before Ralph run
git log --oneline -20
git reset --hard abc123  # Last known good commit

# Fix and restart
```

#### PRD corrupted
```bash
# Restore from git
git checkout HEAD -- plans/prd.json

# Or regenerate
claude "Based on progress.txt and git history, regenerate prd.json"
```

#### Need to abort overnight run
```bash
# Find the process
ps aux | grep ralph

# Kill it
kill <PID>

# Or kill all Claude processes
pkill -f claude

# Check state before resuming
git status
git log --oneline -10
cat plans/progress.txt | tail -30
```

---

*Compiled from 10 extraction documents. Sources: @ryancarson, @mattpocockuk, @arvidkahl, @koylanai, @weswinder, Geoffrey Huntley, and community contributions.*

---

## Tags

`#orchestration` `#ralph-wiggum` `#ralph-loop` `#mastery-guide` `#autonomous-agent` `#prd-driven` `#fresh-context` `#feedback-loops` `#afk-coding` `#ship-while-sleep`

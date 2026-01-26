# Transformation: Single Session to Persistent Autonomous

> **You Are Here:** This document shows the most important paradigm shift in Claude Code mastery: moving from single interactive sessions to autonomous overnight development. If you're tired of babysitting Claude and watching quality degrade after an hour, this transformation is for you. This connects to Level 2 (Ralph Wiggum Loop) on the complexity ladder and unlocks the ability to ship features while you sleep.

**The Paradigm Shift:** From "human babysitting AI" to "AI working while human sleeps"

---

## D-FINAL Integration

**Validates invariants:** INV-1 (Context is constraint), INV-2 (External state over internal memory), INV-3 (Fresh context beats extended), INV-4 (Verification as trust boundary), INV-9 (Learning must compound)
**Maps to complexity ladder:** Level 1 (Single Session) → Level 2 (Ralph Wiggum Loop)
**Cross-references:**
- D-FINAL-architecture.md Section 2.1 (Ralph Wiggum Loop Pattern)
- D-FINAL-implementation.md Section 3 (Complete Ralph Implementation)
- D-FINAL-mental-models.md Model 11 (The Ralph Mindset)
**Journey link:** journey-implementation.md (Ralph setup walkthrough)
**Last updated:** 2026-01-18 (Phase 2B)

---

## The Task

Build a user authentication feature with:
- Login form component
- Email validation
- Server action for authentication
- Unit tests

This is a real, multi-part feature that would typically take 1-2 hours of focused development.

---

## BEFORE: Single Interactive Session

### The Approach

Start Claude Code, prompt iteratively, manually manage context, stop when tired or context degrades.

### The Interaction

```bash
# Session start
$ claude

You: Build a login form for my Next.js app

Claude: I'll create a login form component...
[Writes LoginForm.tsx with email/password fields]
[500 tokens used]

You: Now add client-side email validation

Claude: I'll add email validation to the form...
[Updates LoginForm.tsx with regex validation]
[1,200 tokens used]

You: Actually, let's use Zod for validation instead

Claude: Good idea. I'll refactor to use Zod...
[Rewrites validation logic, adds schema]
[2,100 tokens used]

You: Now create the server action

Claude: I'll create an auth server action...
[Creates auth/actions.ts]
[3,400 tokens used]

You: The server action needs to hash passwords with bcrypt

Claude: I'll add bcrypt for password hashing...
[Updates actions.ts]
[4,200 tokens used]

You: Now wire it up to the database

Claude: I'll add the database queries...
[Adds Prisma queries, updates schema]
[5,800 tokens used]

# 30 minutes in, context at 40%...

You: Write tests for the login functionality

Claude: I'll create comprehensive tests...
[Writes test file]
[7,500 tokens used]

You: The tests are failing

Claude: Let me check...
[Reads files, debugging]
[9,200 tokens used]

# 45 minutes in, context at 55%...

You: There's a type error in the server action

Claude: I see the issue... wait, let me re-read the schema...
[Re-reads files already read, context building]
[11,400 tokens used]

# 60 minutes in, context at 65%...
# Claude starts forgetting earlier decisions

You: Why did you change the validation back to regex?

Claude: I apologize, let me check what we decided...
[Has lost track of Zod decision]
[13,000 tokens used]

# 75 minutes in, context at 75%...
# Quality visibly degrading

You: The login form isn't rendering correctly

Claude: I'll fix the rendering...
[Makes changes that conflict with earlier work]
[15,500 tokens used]

# 90 minutes in, context at 85%...
# You're tired, Claude is confused

You: Just... run the tests again

Claude: Running tests... 3 failed, 2 passed
[Tests fail for reasons related to earlier context loss]

You: I give up for today
# Session ends with incomplete, buggy feature
```

### The Problems

| Issue | Impact |
|-------|--------|
| **Context degradation** | Quality drops after 60-70% context usage |
| **Human must stay engaged** | 90+ minutes of active participation |
| **No persistence** | Session ends, state lost |
| **Quality drops over time** | Late-session code worse than early |
| **Cumulative confusion** | Earlier decisions forgotten |
| **No recoverability** | Hard to resume where you left off |
| **Manual testing** | Human must verify each step |

### What Context Degradation Looks Like

```
Context Level    Quality Impact
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
0-50%            Full capability
50-70%           Slight degradation possible
70-85%           Noticeable quality loss
85-95%           Instructions forgotten, contradictions
95%+             Hallucinations, false completions
```

---

## Checkpoint: Decision Point - Is Ralph Right For This Task?

**Where you are:** You've seen the pain of single-session context degradation. Now decide if Ralph is appropriate.
**What this enables:** Avoiding wasted setup time on tasks that don't benefit from autonomous loops.

**Ask yourself:**

| Question | If YES | If NO |
|----------|--------|-------|
| Does task have 3+ discrete steps? | Ralph candidate | Single session OK |
| Will it take > 30 min total? | Ralph candidate | Single session OK |
| Do you have clear "done" criteria? | Ralph candidate | Need more planning |
| Can each step be verified programmatically? | Ralph candidate | Need manual review |
| Are you okay walking away? | Ralph candidate | Use HOTL Ralph |

**Quick decision flowchart:**
```
Task > 30 min AND has discrete parts AND verifiable?
    YES → Use Ralph (continue below)
    NO  → Stick with single session
```

**If choosing Ralph, verify you have:**
- [ ] Clear feature goal (not exploratory)
- [ ] Existing test infrastructure (`npm test` works)
- [ ] Typecheck setup (`npm run typecheck` works)
- [ ] Git repository initialized

**This connects to:** Ralph setup requires upfront investment (PRD, scripts) → only worth it for multi-step tasks → this decision saves you time

---

## AFTER: Persistent Autonomous (Ralph Pattern)

### The Approach

1. Create `prd.json` with small, atomic user stories
2. Set up `ralph.sh` automation script
3. Start the loop and walk away
4. Wake up to completed feature

### Files Created

#### prd.json - The Task Board

```json
{
  "project": "UserAuth",
  "branchName": "feat/user-auth",
  "description": "User authentication with login form, validation, and tests",
  "userStories": [
    {
      "id": "US-001",
      "title": "Create login form component with email/password fields",
      "description": "Basic login form UI with styled inputs",
      "acceptanceCriteria": [
        "LoginForm component exists in components/auth/",
        "Has email input with type='email'",
        "Has password input with type='password'",
        "Has submit button",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-002",
      "title": "Add Zod schema for login validation",
      "description": "Client-side validation using Zod",
      "acceptanceCriteria": [
        "loginSchema defined with email and password fields",
        "Email validates format with .email()",
        "Password requires minimum 8 characters",
        "Schema exported from lib/validations/auth.ts",
        "npm run typecheck passes"
      ],
      "priority": 2,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-003",
      "title": "Integrate validation into login form",
      "description": "Wire Zod schema to form with error display",
      "acceptanceCriteria": [
        "Form uses react-hook-form with zodResolver",
        "Validation errors display below inputs",
        "Submit disabled when form invalid",
        "npm run typecheck passes"
      ],
      "priority": 3,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-004",
      "title": "Create auth server action",
      "description": "Server action for login authentication",
      "acceptanceCriteria": [
        "loginAction in app/auth/actions.ts",
        "Accepts email and password",
        "Uses bcrypt for password comparison",
        "Returns success/error response",
        "npm run typecheck passes"
      ],
      "priority": 4,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-005",
      "title": "Wire form to server action",
      "description": "Connect form submission to auth action",
      "acceptanceCriteria": [
        "Form calls loginAction on submit",
        "Loading state during submission",
        "Error messages from server displayed",
        "Redirect on success",
        "npm run typecheck passes"
      ],
      "priority": 5,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-006",
      "title": "Write unit tests for validation schema",
      "description": "Test Zod schema edge cases",
      "acceptanceCriteria": [
        "Tests in __tests__/auth/validation.test.ts",
        "Tests valid email formats",
        "Tests invalid email rejection",
        "Tests password length requirements",
        "npm run test passes"
      ],
      "priority": 6,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-007",
      "title": "Write unit tests for server action",
      "description": "Test loginAction logic",
      "acceptanceCriteria": [
        "Tests in __tests__/auth/actions.test.ts",
        "Tests successful login",
        "Tests invalid credentials",
        "Tests missing user",
        "Mocks database calls",
        "npm run test passes"
      ],
      "priority": 7,
      "passes": false,
      "notes": ""
    }
  ]
}
```

**Why this structure works:**
- Each story is atomic (one context window)
- Dependencies are ordered by priority
- Acceptance criteria are verifiable
- `passes: true/false` tracks completion state

---

#### Checkpoint: After prd.json Creation

**Where you are:** You have a machine-readable task board with atomic user stories and acceptance criteria.
**What this enables:** Claude knows exactly what to work on. Each story fits in one iteration. Progress is trackable.

**Verify your state:**
```bash
# Check prd.json exists and is valid
jq . scripts/ralph/prd.json

# Count user stories
jq '.userStories | length' scripts/ralph/prd.json

# Check first story structure
jq '.userStories[0] | keys' scripts/ralph/prd.json
```

**You should see:**
```
{
  "project": "UserAuth",
  "branchName": "feat/user-auth",
  ...
}

7                                        ← 7 atomic stories

["acceptanceCriteria", "description", "id", "notes", "passes", "priority", "title"]
```

**Your PRD should have:**
- Each story completable in ~5-10 minutes
- Clear, verifiable acceptance criteria
- `npm run typecheck passes` in every story
- `passes: false` for all stories initially

**If you don't see this:**
- Check: Is it valid JSON? (`jq . scripts/ralph/prd.json`)
- Check: Do all stories have acceptanceCriteria arrays?
- Check: Are priorities unique and sequential (1, 2, 3...)?
- Go back to: PRD template structure

**This connects to:** ralph.sh automation → Iteration loop → Overnight completion

---

#### ralph.sh - The Automation Loop

```bash
#!/bin/bash
set -e

MAX_ITERATIONS=${1:-25}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

echo "========================================"
echo "  Ralph - Autonomous Development Loop"
echo "========================================"
echo "Max iterations: $MAX_ITERATIONS"
echo "Project root: $PROJECT_ROOT"
echo ""

cd "$PROJECT_ROOT"

for i in $(seq 1 $MAX_ITERATIONS); do
  echo ""
  echo "════════════════════════════════════════"
  echo "  Iteration $i of $MAX_ITERATIONS"
  echo "════════════════════════════════════════"
  echo ""

  # Run Claude with fresh context each iteration
  OUTPUT=$(claude --dangerously-skip-permissions <<'PROMPT' 2>&1 | tee /dev/stderr) || true
# Ralph Agent Instructions

## Your Context
You are one iteration in an autonomous development loop. You have NO memory of previous iterations.
Your memory comes from: git history, prd.json, and progress.txt.

## Your Task

1. Read `scripts/ralph/prd.json` to see all user stories
2. Read `scripts/ralph/progress.txt` for learnings from previous iterations
3. Verify you're on the correct git branch (create if needed)
4. Find the highest priority story where `passes: false`
5. Implement that ONE story completely
6. Run verification: `npm run typecheck` and `npm run test`
7. If passing:
   - Commit with message: `feat: [US-XXX] - [title]`
   - Update prd.json: set `passes: true` for this story
   - Append learnings to progress.txt
8. If failing:
   - Fix the issues
   - Try again (up to 3 attempts)
   - If still failing, log the blocker and move on

## Progress Log Format

APPEND to progress.txt (never edit previous entries):

---
## Iteration [N] - [Story ID] - [Date/Time]
- **Completed:** [what was done]
- **Files changed:** [list]
- **Learnings:** [patterns, gotchas discovered]
- **Blockers:** [any issues for next iteration]
---

## Stop Condition

If ALL stories in prd.json have `passes: true`, output exactly:
<promise>COMPLETE</promise>

Otherwise, end your response normally after completing one story.
PROMPT

  # Check for completion signal
  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo ""
    echo "========================================"
    echo "  ALL STORIES COMPLETE!"
    echo "========================================"
    echo ""

    # Summary
    echo "Final status:"
    cat scripts/ralph/prd.json | jq '.userStories[] | {id, title, passes}'

    exit 0
  fi

  # Brief pause between iterations
  sleep 2
done

echo ""
echo "========================================"
echo "  Max iterations reached"
echo "========================================"
echo "Some stories may be incomplete. Check prd.json for status."
exit 1
```

---

#### Checkpoint: After ralph.sh Creation

**Where you are:** You have an automation loop that spawns fresh Claude instances for each iteration.
**What this enables:** Context never degrades. Work compounds overnight. Human can sleep.

**Verify your state:**
```bash
# Check script exists and is executable
ls -la scripts/ralph/ralph.sh
head -10 scripts/ralph/ralph.sh

# Dry run check (won't actually run Claude)
bash -n scripts/ralph/ralph.sh && echo "Syntax OK"
```

**You should see:**
```
-rwxr-xr-x  scripts/ralph/ralph.sh      ← Must be executable

#!/bin/bash                             ← Correct shebang
set -e                                  ← Exit on error
MAX_ITERATIONS=${1:-25}                 ← Default iterations

Syntax OK                               ← No bash syntax errors
```

**Your folder should look like:**
```
project/
├── scripts/ralph/
│   ├── ralph.sh      ← YOU JUST CREATED THIS
│   ├── prd.json      ← Task definitions
│   └── progress.txt  ← Will be created during runs
├── CLAUDE.md
└── src/
```

**Test single iteration:**
```bash
cd /path/to/project
./scripts/ralph/ralph.sh 1  # Run exactly 1 iteration
```

**If you don't see this:**
- Check: Is script executable? (`chmod +x scripts/ralph/ralph.sh`)
- Check: Is `claude` in PATH? (`which claude`)
- Check: Are you in the project root?
- Go back to: Script creation step

**This connects to:** progress.txt learning → Execution flow → Autonomous overnight work

---

#### progress.txt - The Learning Log

```markdown
# Ralph Progress Log
Project: UserAuth
Started: 2026-01-09

## Codebase Patterns
(Ralph updates this section with reusable patterns)

## Key Files
- components/auth/LoginForm.tsx
- lib/validations/auth.ts
- app/auth/actions.ts
- __tests__/auth/

---

## Iteration 1 - US-001 - 2026-01-09 02:15
- **Completed:** Created LoginForm component
- **Files changed:** components/auth/LoginForm.tsx
- **Learnings:** Project uses Tailwind, shadcn/ui components available
- **Blockers:** None

---

## Iteration 2 - US-002 - 2026-01-09 02:18
- **Completed:** Added Zod validation schema
- **Files changed:** lib/validations/auth.ts
- **Learnings:** Use .optional() for nullable fields in Zod
- **Blockers:** None

---
(Ralph continues appending...)
```

---

#### CLAUDE.md - Project Context (Compact)

```markdown
# UserAuth Project

## Stack
Next.js 14, TypeScript, Prisma, PostgreSQL, Tailwind, shadcn/ui

## Commands
- `npm run dev` - Dev server (port 3000)
- `npm run typecheck` - TypeScript check
- `npm run test` - Jest tests

## Conventions
- Server actions in app/[feature]/actions.ts
- Validation schemas in lib/validations/
- Tests in __tests__/ mirroring src structure

## Ralph Files
- PRD: scripts/ralph/prd.json
- Progress: scripts/ralph/progress.txt
```

---

### Execution

```bash
# Make script executable
chmod +x scripts/ralph/ralph.sh

# Start Ralph with 25 max iterations
./scripts/ralph/ralph.sh 25

# Output:
# ════════════════════════════════════════
#   Iteration 1 of 25
# ════════════════════════════════════════
# [Claude implements US-001...]
# [Commits, updates prd.json, logs to progress.txt]
#
# ════════════════════════════════════════
#   Iteration 2 of 25
# ════════════════════════════════════════
# [Fresh Claude instance, reads state from files...]
# [Implements US-002...]
#
# ... (iterations continue) ...
#
# ════════════════════════════════════════
#   ALL STORIES COMPLETE!
# ════════════════════════════════════════

# Go to sleep at 11pm
# Wake up at 7am to:
# - 7 commits in git history
# - All tests passing
# - Complete authentication feature
```

---

#### Checkpoint: After First Complete Run

**Where you are:** Ralph has completed at least one full iteration. Progress is being logged. Work is committing.
**What this enables:** Confidence to run overnight. Verified that the loop works. Ready for autonomous operation.

**Verify your state:**
```bash
# Check progress.txt has entries
cat scripts/ralph/progress.txt | head -20

# Check prd.json has some passes: true
jq '.userStories[] | select(.passes==true) | .id' scripts/ralph/prd.json

# Check git commits were made
git log --oneline -5
```

**You should see:**
```
# Ralph Progress Log
Project: UserAuth
...
## Iteration 1 - US-001 - 2026-01-09 02:15
- **Completed:** Created LoginForm component    ← Work logged

"US-001"                                        ← At least one story passed

abc1234 feat: US-001 - Create login form       ← Commits appearing
def5678 feat: US-002 - Add Zod schema
```

**Run status check:**
```bash
# Quick status of all stories
jq '.userStories | map({id, passes})' scripts/ralph/prd.json
```

**If you don't see this:**
- Check: Did ralph.sh exit with error? (check terminal output)
- Check: Did Claude encounter permission issues?
- Check: Is `--dangerously-skip-permissions` in the script?
- Go back to: Run single iteration manually to debug

**This connects to:** Running overnight → Waking up to completed feature → Paradigm shift achieved

---

### What Happens Under the Hood

```
Iteration 1 (2:00 AM)
├── Fresh Claude instance spawns
├── Reads: prd.json, progress.txt, CLAUDE.md
├── Picks: US-001 (highest priority, passes: false)
├── Implements: LoginForm.tsx
├── Verifies: npm run typecheck (passes)
├── Commits: "feat: US-001 - Create login form component"
├── Updates: prd.json (US-001.passes = true)
├── Appends: progress.txt with learnings
└── Exits (context cleared)

Iteration 2 (2:05 AM)
├── Fresh Claude instance spawns (NO MEMORY)
├── Reads: prd.json (sees US-001 done)
├── Reads: progress.txt (learns about Tailwind/shadcn)
├── Picks: US-002 (next priority)
├── Implements: Zod schema
├── Verifies: npm run typecheck (passes)
├── Commits: "feat: US-002 - Add Zod schema"
└── Exits (context cleared)

... (pattern repeats) ...

Iteration 7 (2:35 AM)
├── Fresh Claude instance spawns
├── Reads: prd.json (all passes: true!)
├── Outputs: <promise>COMPLETE</promise>
└── Script exits with success

You wake up at 7:00 AM to a complete feature.
```

---

### The Benefits

| Benefit | How It Works |
|---------|--------------|
| **Fresh context each iteration** | New Claude instance, 0% context usage |
| **Quality maintained throughout** | No degradation from context buildup |
| **No human babysitting** | Runs autonomously for hours |
| **Overnight execution** | Start at 11pm, done by 2am |
| **Recoverable state** | All progress in git + files |
| **Compounding learnings** | progress.txt grows smarter |
| **Verifiable progress** | Each story has acceptance criteria |
| **Safe rollback** | Each commit is atomic |

---

## Side-by-Side Comparison

| Aspect | Before (Single Session) | After (Ralph/Autonomous) |
|--------|------------------------|--------------------------|
| **Context** | Degrades over 90 min | Fresh each 5-min iteration |
| **Human** | Must stay engaged entire time | Can leave after setup |
| **Quality** | Drops after 60% context | Maintained throughout |
| **Duration** | 90 min + human present | 30 min + human asleep |
| **Memory** | Lost when session ends | Persists in git + files |
| **Recoverability** | Start over if session dies | Resume from last commit |
| **Verification** | Manual after each step | Automated (typecheck/test) |
| **Errors** | Compound in context | Isolated to one iteration |
| **Debugging** | Hard (context pollution) | Easy (clean git history) |

---

## The Mental Model Shift

### Before: AI as Pair Programmer
```
Human ←→ AI (continuous conversation)
        ↓
    Context fills
        ↓
    Quality drops
        ↓
    Human frustration
```

### After: AI as Factory Worker
```
Human → PRD → [Iteration 1] → [Iteration 2] → ... → Complete
                   ↓               ↓
               Fresh context   Fresh context
                   ↓               ↓
             Verified commit  Verified commit
```

---

## When to Use Which

### Use Single Session When:
- Task is small (< 30 minutes)
- Exploratory/discovery work
- You need to guide every decision
- Learning a new codebase together

### Use Ralph/Autonomous When:
- Feature has multiple discrete parts
- Work can span hours
- You want to sleep/do other things
- Quality must remain consistent
- You have clear acceptance criteria

---

## The Transformation Summary

**What Changed:**
1. **Decomposition** - One big task became 7 atomic stories
2. **External state** - Memory moved from context to files
3. **Automation** - Loop script replaces human prompting
4. **Verification** - Automated tests replace manual checking
5. **Mindset** - "Help me build" became "Build this for me"

**The Core Insight:**

> "Each iteration spawns a NEW instance with NO memory of previous work.
> Continuity comes from: Git history, prd.json, progress.txt."
>
> The agent is stateless. Memory is external. This is the architecture
> that enables reliability over time.

---

## Quick Start: Transform Your Workflow

1. **Take your feature request**
2. **Break it into 5-10 atomic stories** (each ~5 min of work)
3. **Write acceptance criteria for each** (must be verifiable)
4. **Create prd.json with priorities**
5. **Set up ralph.sh**
6. **Run and walk away**

```bash
# The one command that replaces 90 minutes of babysitting
./ralph.sh 25
```

---

## Checkpoint: Transformation Complete

**Where you are:** You've gone from single-session pair programming to autonomous overnight development.
**What this enables:** The paradigm shift - AI works while you sleep, quality maintained, progress compounding.

**Verify your transformation:**
```bash
# Check all stories completed
jq '.userStories | map(select(.passes==false)) | length' scripts/ralph/prd.json
# Should return: 0 (all complete)

# Check commits from overnight run
git log --oneline --since="yesterday" | wc -l
# Should show: 7+ commits (one per story)

# Check tests still pass
npm test
# Should: all pass
```

**You should see:**
```
0                                   ← no incomplete stories
7                                   ← 7 commits overnight
All tests pass                      ← code quality maintained
```

**The transformation is complete when:**
- [ ] All stories have `passes: true`
- [ ] Git history shows clean, atomic commits
- [ ] Tests pass (no quality degradation)
- [ ] Feature works as specified
- [ ] You did something else while it ran (slept, worked on other things)

**If the feature is incomplete:**
- Check: Did max iterations trigger? (increase limit)
- Check: Are stories too big? (split further)
- Check: Did tests fail? (review progress.txt for learnings)
- Go back to: Adjust PRD, reset `passes: false`, run again

**What you've achieved:**
```
BEFORE                          AFTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
90 min active work       →      30 min setup + sleep
Context degradation      →      Fresh context each iteration
Manual verification      →      Automated tests
Lost state on crash      →      Recoverable from git
Quality drops over time  →      Consistent quality throughout
Human bottleneck         →      Autonomous scaling
```

**This connects to:** You've completed the transformation → you now understand the Ralph pattern → next step is combining with other patterns (Compounding, Parallel, CC Mirror) → Level 4+ on the complexity ladder

**Congratulations. You've shipped while you slept.**

---

## Troubleshooting

### Common Issue: Ralph Exits After First Iteration

**Symptom:** Script runs once, then stops. Terminal shows completion but only 1 commit in git log.

**Cause:** The `<promise>COMPLETE</promise>` signal was emitted incorrectly, or all stories were marked `passes: true` when they shouldn't be.

**Fix:**
```bash
# Check prd.json for premature completion
jq '.userStories | map(select(.passes==true)) | length' scripts/ralph/prd.json

# If all marked true but shouldn't be, reset:
jq '.userStories |= map(.passes = false)' scripts/ralph/prd.json > tmp.json && mv tmp.json scripts/ralph/prd.json

# Rerun with verbose output
./scripts/ralph/ralph.sh 5 2>&1 | tee ralph-debug.log
```

---

### Common Issue: Claude Gets Stuck in Retry Loop

**Symptom:** Same story keeps failing, iteration count climbing without progress.

**Cause:** Story has acceptance criteria that can't pass (missing dependency, impossible test, wrong assumption).

**Fix:**
```bash
# Check which story is stuck
jq '.userStories | map(select(.passes==false)) | .[0]' scripts/ralph/prd.json

# Check progress.txt for error patterns
grep -A5 "Blockers:" scripts/ralph/progress.txt | tail -20

# If story is truly blocked, split it or add missing dependency:
# 1. Edit prd.json to split large story into smaller parts
# 2. Or add new story for the missing prerequisite
# 3. Reset iteration count: ./scripts/ralph/ralph.sh 25
```

---

### Common Issue: Tests Pass Locally But Story Marked Failed

**Symptom:** `npm test` shows green but prd.json still has `passes: false`.

**Cause:** Claude didn't update prd.json after verification passed (incomplete prompt following).

**Fix:**
```bash
# Manually verify tests pass
npm run typecheck && npm run test

# If passing, manually update prd.json
jq '.userStories |= map(if .id == "US-XXX" then .passes = true else . end)' scripts/ralph/prd.json > tmp.json && mv tmp.json scripts/ralph/prd.json

# Continue from next story
./scripts/ralph/ralph.sh 25
```

---

### Common Issue: Permission Denied Errors

**Symptom:** Script fails with "permission denied" or Claude can't write files.

**Cause:** Missing `--dangerously-skip-permissions` flag or script not executable.

**Fix:**
```bash
# Make script executable
chmod +x scripts/ralph/ralph.sh

# Verify the flag is in the script
grep "dangerously-skip-permissions" scripts/ralph/ralph.sh

# If missing, add to the claude invocation:
# claude --dangerously-skip-permissions <<'PROMPT'
```

---

### Common Issue: Context Too Large for Single Story

**Symptom:** Iteration completes but work is incomplete. Output mentions "running out of space" or changes seem truncated.

**Cause:** User story is too large for one context window. Single iteration should be ~5-10 minutes of work.

**Fix:**
```bash
# Check story size (acceptance criteria count)
jq '.userStories[] | {id, criteria_count: (.acceptanceCriteria | length)}' scripts/ralph/prd.json

# If any story has >5 acceptance criteria, split it:
# US-002 (8 criteria) → US-002a (4 criteria) + US-002b (4 criteria)

# Add dependencies: US-002b depends on US-002a
```

---

### Common Issue: Git Commits Not Appearing

**Symptom:** Work is done in progress.txt but `git log` shows no new commits.

**Cause:** Claude didn't commit, or commits are on wrong branch.

**Fix:**
```bash
# Check current branch
git branch --show-current

# Check if on the expected feature branch
git branch -a | grep $(jq -r '.branchName' scripts/ralph/prd.json)

# If work exists but not committed:
git status
git add -A && git commit -m "feat: manual catchup commit"

# If on wrong branch, stash and move:
git stash
git checkout $(jq -r '.branchName' scripts/ralph/prd.json)
git stash pop
```

---

## Tags

`#transformation` `#single-session` `#autonomous` `#ralph-pattern` `#fresh-context` `#external-memory` `#overnight-development` `#paradigm-shift`

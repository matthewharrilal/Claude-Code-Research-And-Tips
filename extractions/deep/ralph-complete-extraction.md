# Ralph Wiggum Pattern: Complete Extraction

---
## D-FINAL Connection
**Contributed to:** D-FINAL-mental-models.md
**Last enhanced:** 2026-01-18 (Phase 2B)
---

**Extraction Date:** 2026-01-10
**Sources:** 14 documents synthesized (10 primary extractions + 4 synthesis documents)
**Status:** Definitive reference - THE foundational orchestration pattern
**Line Count Target:** 600+ lines

---

## Table of Contents

1. [Origin Story](#origin-story)
2. [The Core Pattern](#the-core-pattern)
3. [All Ralph Variants](#all-ralph-variants)
4. [Matt Pocock's 11 Tips](#matt-pococks-11-tips)
5. [Ryan Carson's Compounding Innovation](#ryan-carsons-compounding-innovation)
6. [Exact File Formats](#exact-file-formats)
7. [Failure Modes](#failure-modes)
8. [Mental Model](#mental-model)
9. [Combinations](#combinations)
10. [Quotes from Each Originator](#quotes-from-each-originator)

---

## Origin Story

### The Creator: Geoffrey Huntley

The Ralph Wiggum pattern was pioneered by **Geoffrey Huntley** at ghuntley.com/ralph/. The pattern gets its name from The Simpsons character - the simple-minded child who persists at tasks regardless of obstacles.

> "It's a 'we learn from failure'-centric approach. You define your goal condition and let the agent loop over and over until it has verifiably reached that promised goal."
> - @arvidkahl describing Huntley's concept

### Why "Ralph Wiggum"?

The metaphor is precise: Ralph Wiggum (the character) is:
- Persistent despite setbacks
- Simple in approach but effective through repetition
- Unaware of "failure" as a stopping condition
- Eventually accomplishes goals through sheer persistence

This maps perfectly to the pattern's philosophy:
- **Iteration over perfection** - Don't aim for perfect on first try
- **Failures are data** - "Deterministically bad" failures are predictable and informative
- **Operator skill matters** - Success depends on writing good prompts, not just having good models
- **Persistence wins** - Keep trying until success; the loop handles retry logic automatically

### The Problem It Was Designed to Solve

Long AI coding sessions hit context limits and degrade. Geoffrey Huntley observed:
- Context windows fill up over extended sessions
- Quality drops as tokens accumulate ("context rot")
- The model loses track of goals
- Errors compound without fresh perspective

**The Insight:** Instead of one long session, run many short sessions with external memory.

### When and How It Emerged

Ralph emerged from the practical realization that Claude Code (and similar tools) work best with fresh context but need continuity for complex tasks. The solution: externalize memory to files and git, let each session start fresh but informed.

### Community Adoption Timeline

- **Geoffrey Huntley:** Original concept and name (ghuntley.com/ralph/)
- **Matt Pocock (@mattpocockuk):** Viral video demos (409K views, 8K bookmarks), 11 tips guide, PRD format standardization
- **Ryan Carson (@ryancarson):** Complete implementation guides, Amp integration, compounding runs
- **Arvid Kahl (@arvidkahl):** Comprehensive thread documenting variants
- **Muratcan Koylan (@koylanai):** Ralph Wiggum Marketer (content generation variant)
- **Wes Winder (@weswinder):** Opus 4.5 + Ralph + Playwright stack ("AGI")

### Official Recognition

Anthropic published an official Claude Code plugin:
- **Repository:** github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum
- **Commands:** `/ralph-loop`, `/cancel-ralph`
- **Mechanism:** Stop hook creates self-referential feedback loop

---

## The Core Pattern

### The Fundamental Loop

At its absolute simplest:

```bash
while :; do cat PROMPT.md | claude ; done
```

**Everything else is scaffolding around this pattern.**

### The Complete Mechanism

```
+-------------------------------------------------------------+
|  1. Start with fresh context                                 |
|           |                                                  |
|  2. Read task state from files                               |
|     (prd.json, progress.txt, git history)                    |
|           |                                                  |
|  3. Pick highest priority incomplete task                    |
|           |                                                  |
|  4. Implement task                                           |
|           |                                                  |
|  5. Run verification (tests, typecheck)                      |
|           |                                                  |
|  6. If pass: commit, update prd.json                         |
|     If fail: log learnings, try again                        |
|           |                                                  |
|  7. Append to progress.txt                                   |
|           |                                                  |
|  8. Check completion condition                               |
|     All done? -> Output promise -> EXIT                      |
|     Not done? -> Loop continues                              |
+-------------------------------------------------------------+
```

### The Fresh Context Principle (WHY This Is Critical)

**Each iteration spawns a NEW Claude instance with NO memory of previous work.**

This is the key insight. Why does it matter?

1. **Context rot is real** - LLMs degrade with accumulated tokens
2. **Quality drops** - The more context, the worse the output
3. **Lossy compaction** - Internal summarization loses detail
4. **Fresh perspective** - Each iteration can see the problem anew

**Continuity comes entirely from:**
- **Git history** - Code changes persist across sessions
- **prd.json** - Task status (passes: true/false)
- **progress.txt** - Learnings, patterns, gotchas discovered
- **File system** - The codebase itself

### PRD -> Iteration -> Check -> Repeat

The core workflow:

1. **PRD defines tasks** - Small, verifiable user stories
2. **Iteration picks one** - Highest priority with passes: false
3. **Agent implements** - One story, one context window
4. **Verification runs** - typecheck, tests, browser automation
5. **State updates** - prd.json marked passes: true
6. **Learning appended** - progress.txt gets new insights
7. **Check completion** - All stories pass? Emit completion signal
8. **Repeat or exit** - Loop continues or terminates

### External State Architecture

The agent is stateless. Memory is architecture, not magic.

| Artifact | Purpose | Lifespan |
|----------|---------|----------|
| prd.json | Task tracking, completion status | Per-feature |
| progress.txt | Session learnings, patterns | Per-feature |
| CLAUDE.md | Permanent project knowledge | Project-wide |
| AGENTS.md | Agent-specific documentation | Project-wide |
| Git history | Code changes, implicit context | Forever |
| Archives | Previous run learnings | Cross-run |

### Stop Conditions

Multiple approaches work:

**1. Raw Prompting:**
```markdown
If all tasks are complete, output:
<promise>COMPLETE</promise>
```

**2. PRD-Based:**
```bash
while jq '.tasks[] | select(.passes == false)' prd.json | grep -q .; do
  claude @prompt.md
done
```

**3. Max Iterations (Safety Net):**
```bash
MAX_ITERATIONS=${1:-10}
for i in $(seq 1 $MAX_ITERATIONS); do
  # ... loop body
done
```

Always combine with max iterations to prevent runaway.

---

## All Ralph Variants

### Basic Ralph

**What it is:** The foundational loop pattern as created by Geoffrey Huntley.

**Implementation:**
```bash
#!/bin/bash
set -e
MAX_ITERATIONS=${1:-10}

for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  echo "Iteration $i / $MAX_ITERATIONS"

  claude "Review plans/prd.json and plans/progress.txt.
    Pick ONE feature marked passes: false.
    Implement it. Run tests.
    If passing, mark passes: true and commit.
    Append learnings to progress.txt.
    If PRD complete, output PROMISE COMPLETE HERE." | tee output.txt

  if grep -q "PROMISE COMPLETE HERE" output.txt; then
    echo "Done!"
    break
  fi
done
```

**Use case:** Standard feature development with clear acceptance criteria.

**Actionability:** Medium lift - requires PRD setup + bash scripting.

---

## Checkpoint: After Setting Up Basic Ralph

**Where you are:** You have the basic Ralph script ready but haven't run it yet.
**What this enables:** The foundation for all Ralph variants - every advanced pattern builds on this.

**Verify your state:**
```bash
# Check script syntax
bash -n your-ralph-script.sh && echo "Syntax OK"

# Verify you have required files
ls -la plans/prd.json plans/progress.txt 2>/dev/null || echo "Missing files!"
```

**You should see:**
```
Syntax OK
-rw-r--r--  plans/prd.json        ← task board exists
-rw-r--r--  plans/progress.txt    ← learning log exists
```

**Your setup should have:**
```
project/
├── plans/
│   ├── ralph.sh          ← YOUR SCRIPT
│   ├── prd.json          ← task definitions
│   └── progress.txt      ← starts empty or with header
```

**If you don't see this:**
- Check: Did you create the plans/ directory?
- Check: Is prd.json valid JSON with `passes: false` entries?
- Check: Does progress.txt exist (can be empty)?
- Go back to: Create the missing files

**This connects to:** Basic Ralph is the foundation → All variants (Compounding, Marathon, Parallel) build on this → Master this before adding complexity

---

### Compounding Ralph (Ryan Carson)

**What it adds:** References archived PRDs and learnings from previous runs, creating compounding improvements across sessions.

**The Innovation:**
> "What's amazing is I can ask it to look at previous runs to learn what worked or didn't work (I archive each PRD and user story JSON). So every time I run Ralph, it gets better and better."
> - Ryan Carson

**Archive Structure:**
```
archives/
  run-2026-01-05/
    prd.json
    progress.txt
    learnings.md
  run-2026-01-06/
    prd.json
    progress.txt
    learnings.md
```

**Prompt Addition:**
```markdown
## Learning from Previous Runs

Before starting, review archives in `archives/` folder:
- What patterns worked well?
- What caused failures?
- What shortcuts were discovered?

Apply these learnings to current implementation.
```

**The Workflow:**
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

**Time Investment:**
- 25-30 minutes planning user stories
- Sleep while agent works
- Morning review + ship

---

## Checkpoint: After Setting Up Compounding Ralph

**Where you are:** You've upgraded from Basic to Compounding Ralph with archive support.
**What this enables:** Cross-session learning - each Ralph run gets smarter based on previous runs.

**Verify your state:**
```bash
# Check archives directory exists
ls -la archives/

# After first run, you should have archived run
ls -la archives/run-$(date +%Y-%m-%d)/ 2>/dev/null || echo "No archives yet (run Ralph first)"
```

**You should see (after at least one run):**
```
archives/
├── run-2026-01-05/
│   ├── prd.json            ← copy of completed PRD
│   ├── progress.txt        ← learnings from that run
│   └── learnings.md        ← synthesized insights
```

**Your prompt.md should now include:**
```markdown
## Learning from Previous Runs

Before starting, review archives in `archives/` folder:
- What patterns worked well?
- What caused failures?
- What shortcuts were discovered?
```

**If you don't see this:**
- Check: Did you add the archive directory creation to your script?
- Check: Did you add the "Learning from Previous Runs" section to prompt.md?
- Check: Is the archive path correct in your script?
- Go back to: Add archive logic to ralph.sh

**This connects to:** Compounding Ralph → enables learning across sessions → each run is smarter than the last → this is how you build towards truly autonomous development

---

### Marathon Ralph (Stephen Rayner)

**Repository:** github.com/gruckion/marathon-ralph

**What it adds:**
- Full software development lifecycle integration
- Comprehensive test suite generation
- E2E test automation
- Build entire apps with unit and E2E tests

**Use case:** When you want complete SDLC compliance, not just feature completion.

---

### Dr. Ralph (Mike Endale)

**What it adds:**
- Multi-phase version with confidence thresholds
- Agent reports confidence percentage
- Only advances when 80%+ confident

**Key Innovation:** Better for complex, uncertain tasks where simple pass/fail isn't enough.

**Example Criteria:**
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

---

### Panopticon Ralph (Molly Cantillon)

**What it is:** Run 8+ parallel isolated Claude Code instances, each owning a life/work domain.

**Directory Structure:**
```
~/nox        # Company/product
~/metrics    # Analytics/data
~/email      # Communications
~/growth     # Marketing/acquisition
~/trades     # Personal finance/trading
~/health     # Fitness/sleep/wellness
~/writing    # Content creation
~/personal   # Life admin
```

**Key Features:**
- **Isolation:** Each instance operates independently, no cross-contamination
- **Subagents:** Spawn short-lived agents for specific tasks
- **Handoffs:** Exchange context through explicit file-based handoffs
- **Filesystem as Memory:** Read/write to their directory as persistent memory

**Unique Value:** Frames multi-agent as personal surveillance reversal - "self-legibility" across all personal data.

---

### Ralph Wiggum Marketer (Muratcan Koylan)

**Repository:** github.com/muratcankoylan/ralph-wiggum-marketer

**What it is:** Self-critiquing content loop for marketing copy.

**Key Innovations:**

1. **Separation of Discovery vs Synthesis:**
> "Ralph doesn't have the LLM 'discover' things on its own. Its discovery is a database-driven input system... The agent's job is synthesis."

Don't let AI discover (hallucinates). Pre-populate SQLite DB with content, then AI synthesizes.

2. **Self-critique loop:**
```
DISCOVER -> LEARN -> RESEARCH -> IDEATE -> WRITE -> CRITIQUE
                                                       |
                                              "Would founder publish?"
                                                       |
                                                No -> ITERATE
                                               Yes -> PUBLISH
```

3. **Voice matching:** Scores output against your writing samples

**The Critique Output:**
```
Voice match score: 7/10
Passes founder test: NO
Weaknesses identified: 5
  - Opening could be more provocative
  - CTA too soft
  - Section 3 too lengthy
Recommendations: [list]
```

**Commands:**
```
/ralph-init      # Initialize project
/ralph-marketer  # Start the loop
/ralph-status    # Check progress
/ralph-cancel    # Stop
```

**DB Schema:**
```sql
trends (topic, description, source, relevance_score, status)
research (title, summary, key_findings, data_points, category, status)
communications (type, title, details, key_messages, target_audience, priority, status)
content_plan (content_type, title, brief, target_keywords, status)
drafts (plan_id, version, content, word_count, feedback)
published (plan_id, final_content, meta_description)
agent_log (action, details, created_at)
```

---

### AFK Ralph vs HOTL Ralph

**AFK Ralph (Away From Keyboard):**
- Full loop, runs overnight
- Wake up to completed work
- Requires bulletproof feedback loops
- Max iterations set high (50-100)

**HOTL Ralph (Human On The Loop):**
```bash
#!/bin/bash
# ralph-hotl.sh - Single iteration with review

claude "Review plans/prd.json and plans/progress.txt.
  Pick ONE feature marked passes: false.
  Implement it. Run tests.
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

**When to use HOTL:**
- Security-sensitive code
- Learning a new codebase
- Debugging stuck loops
- Training PRD format

---

### Parallel Ralph (Git Worktrees)

**What it is:** Multiple Ralph instances running simultaneously on different features/branches.

**Implementation:**
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

**Key Benefits:**
- True isolation between agents
- No file conflicts
- Shared git history
- Can run on separate machines

From Ryan Carson: Later posts show him running **3 simultaneous Ralph instances** overnight on different branches.

---

## Checkpoint: After Setting Up Parallel Ralph

**Where you are:** You have git worktrees configured for parallel Ralph execution.
**What this enables:** Multiple features developed simultaneously - 3x the overnight output.

**Verify your state:**
```bash
# List existing worktrees
git worktree list

# Check branches exist for parallel work
git branch -a | grep -E "(auth|payments|notifications)"
```

**You should see:**
```
/Users/you/project                  a1b2c3d [main]
/Users/you/wt-auth                  d4e5f6g [auth-branch]
/Users/you/wt-payments              h7i8j9k [payments-branch]
/Users/you/wt-notifications         l0m1n2o [notifications-branch]
```

**Each worktree should have:**
```
wt-auth/
├── plans/
│   ├── ralph.sh          ← dedicated to auth feature
│   ├── prd.json          ← auth-specific tasks
│   └── progress.txt
├── src/                  ← full copy of codebase
└── ...
```

**Pre-flight for parallel runs:**
- [ ] Each worktree has its own prd.json (different features!)
- [ ] No file overlap between features (no conflicts)
- [ ] All branches exist and are checked out in worktrees
- [ ] Each worktree can run tests independently

**If you don't see this:**
- Check: Did you create branches first? `git branch auth-branch`
- Check: Is worktree path correct? Should be outside main project
- Check: Do you have write access to parent directory?
- Go back to: Create branches then worktrees

**This connects to:** Parallel Ralph → 3x features overnight → requires more planning but massively increases throughput → advanced pattern for when you have multiple independent features

---

### Other Variants

**Lisa (@petruarakiss):** github.com/Arakiss/lisa - Enhanced logging + progress visualization

**Zeroshot (@Eivind1384955):** github.com/covibes/zeroshot - "Next gen version" of Ralph

**Rate-Limited Ralph (@ghuntley):** github.com/ghuntley/ralph-claude-code - Handles API rate limits gracefully

**Ralph Orchestrator (@mikeyobrien):** github.com/mikeyobrien/ralph-orchestrator - Multi-agent coordination layer

---

## Matt Pocock's 11 Tips

From his 3,000-word guide at aihero.dev/tips-for-ai-coding-with-ralph-wiggum:

### Tip 1: Finite Iterations
- Never truly infinite loop
- **Always set max iterations**
- Prevents runaway costs
- Safety net against stuck loops

### Tip 2: Tiny, Clearly Scoped Tasks
- One user story/feature at a time
- Single focus per iteration
- **If you can't describe it in 2-3 sentences, it's too big**

### Tip 3: Clean Slate Per Iteration
- New context window each run
- Avoids "context rot"
- Fresh perspective on problems

### Tip 4: Hard Stop Condition
```
<promise>COMPLETE</promise>
```
Or: All PRD items marked passes: true

### Tip 5: Ruthless CI Green Enforcement
- Tests + types must pass every commit
- No broken code inheritance
- **Quote:** "If you don't do this, you're hamstringing future agent runs with bad code"

### Tip 6: Progress Tracking via Persistent Files
- progress.txt (append-only)
- Git history (commits as checkpoints)
- prd.json (task status)

### Tip 7: Human Defines Quality/Exit Criteria
- Agent executes blindly
- Quality bar set in advance
- No subjective goals

### Common Mistakes Each Tip Prevents

| Tip | Prevents |
|-----|----------|
| 1 - Finite iterations | Infinite loops, runaway costs |
| 2 - Tiny tasks | Context overflow, broken code |
| 3 - Clean slate | Context rot, degraded quality |
| 4 - Hard stop | Premature exit, missed work |
| 5 - CI green | Error compound, bug inheritance |
| 6 - Persistent files | Lost progress, repeated work |
| 7 - Human criteria | Subjective drift, no completion |

---

## Ryan Carson's Compounding Innovation

### The Core Insight

> "What's amazing is I can ask it to look at previous runs to learn what worked or didn't work (I archive each PRD and user story JSON). So every time I run Ralph, it gets better and better."

### How Learning Compounds

Traditional Ralph starts fresh each session. Compounding Ralph adds:
- Archived PRDs from previous runs
- Archived user story JSONs
- Agent references past successes AND failures
- Patterns discovered in one run inform the next

### The Progress.txt Evolution

**Within a single run:**
```markdown
# Progress Log - APPEND ONLY

## Codebase Patterns
- Migrations: IF NOT EXISTS
- Zod: Always use .optional() for nullable
- React: useRef<Timeout | null>(null)

## Key Files
- db/schema.ts
- app/auth/actions.ts

---

## 2026-01-09 - US-001
- Completed: Tool skeleton with Zod schema
- Learned: Use orange (#FF6B35) for dark backgrounds

---

## 2026-01-09 - US-002
- Completed: Category mapping
- Issue: Schema needed adjustment for optional fields
- Pattern: Added to Codebase Patterns above
```

**The Codebase Patterns Section:**
- Lives at TOP of progress.txt
- Accumulates reusable patterns
- Agent reads this FIRST each iteration
- By story 10, Ralph knows patterns from stories 1-9

### Real Results

**Case Study: 14-Iteration Feature**
- **Project:** Untangle Legal Agent
- **Feature:** Income Upsert Tool
- **Iterations:** 14
- **Time:** ~2 hours autonomous
- **Cost:** ~$10-15 estimate

What was built:
- Tool skeleton with Zod schema
- Category mapping
- Duplicate detection
- Database operations
- UI components
- Validation logic

> "Learnings compound. By story 10, Ralph knew our patterns."

**Case Study: Evaluation System**
- **Stories:** 13 user stories
- **Iterations:** ~15
- **Time per iteration:** 2-5 minutes
- **Total time:** ~1 hour

### Parallel Execution

Ryan runs 3 simultaneous Ralph instances:
- Different branches
- Different features
- All overnight
- Morning merge and review

---

## Exact File Formats

### prd.json Schema

**Full Schema (Ryan Carson style):**
```json
{
  "project": "Project Name",
  "branchName": "ralph/feature-name",
  "description": "Feature description",
  "userStories": [
    {
      "id": "US-001",
      "title": "Task title",
      "description": "As a [user], I need [what]",
      "acceptanceCriteria": [
        "Criterion 1",
        "Criterion 2",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    }
  ]
}
```

**Minimal Schema (Matt Pocock style):**
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

**Key Fields:**
| Field | Purpose | Required |
|-------|---------|----------|
| id | Unique identifier | Yes |
| title | Short task name | Yes |
| description | What to build | Yes |
| acceptanceCriteria | How to verify | Strongly recommended |
| priority | Lower = first | Recommended |
| passes | false = incomplete | Yes |
| notes | Agent learnings | Optional |
| branchName | Git branch | Recommended |

### progress.txt Structure

**Header Section:**
```markdown
# Ralph Progress Log
Started: 2026-01-09

## Codebase Patterns
- Migrations: Use IF NOT EXISTS
- Zod: Always use .optional() for nullable fields
- React: useRef<Timeout | null>(null)

## Key Files
- db/schema.ts
- app/auth/actions.ts
```

**Entry Format:**
```markdown
---

## [Date] [Time] - [Story ID]
- **What:** What was implemented
- **Files:** Files changed
- **Learnings:**
  - Patterns discovered
  - Gotchas encountered
- **Next:** Suggestions for next iteration
```

**Critical Rules:**
1. APPEND ONLY - never edit previous entries
2. Patterns go to the TOP section
3. The word "append" must be in instructions
4. History is sacred

### prompt.md Structure

```markdown
# Ralph Agent Instructions

## Your Task

1. Read `scripts/ralph/prd.json`
2. Read `scripts/ralph/progress.txt` (check Codebase Patterns first)
3. Check you're on the correct branch
4. Pick highest priority story where `passes: false`
5. Implement that ONE story
6. Run typecheck and tests
7. Update AGENTS.md with learnings
8. Commit: `feat: [ID] - [Title]`
9. Update prd.json: `passes: true`
10. Append learnings to progress.txt

## Progress Format

APPEND to progress.txt:

---
## [Date] - [Story ID]
- What was implemented
- Files changed
- **Learnings:**
  - Patterns discovered
  - Gotchas encountered

## Codebase Patterns

Add reusable patterns to the TOP of progress.txt:

## Codebase Patterns
- Migrations: Use IF NOT EXISTS
- React: useRef<Timeout | null>(null)

## Stop Condition

If ALL stories pass, reply:
<promise>COMPLETE</promise>

Otherwise end normally.
```

### Stop Condition Detection

**grep-based:**
```bash
if grep -q "<promise>COMPLETE</promise>" output.txt; then
  echo "Done!"
  exit 0
fi
```

**jq-based (Maurice Kleine):**
```bash
while jq '.tasks[] | select(.passes == false)' prd.json | grep -q .; do
  claude @prompt.md
done
```

The jq approach:
- No need to parse output files
- Directly queries data structure
- Exits cleanly when all tasks pass
- Works with any JSON task format

### Error Handling Patterns

**Test failure recovery:**
```bash
MAX_TEST_RETRIES=3

run_with_test_recovery() {
  local test_failures=0

  while [ $test_failures -lt $MAX_TEST_RETRIES ]; do
    claude @prompt.md | tee output.txt

    if npm run test 2>&1 | grep -q "passed"; then
      return 0
    else
      test_failures=$((test_failures + 1))
      echo "Test failure $test_failures/$MAX_TEST_RETRIES"
      echo "---" >> progress.txt
      echo "Test failure at $(date). Retrying..." >> progress.txt
    fi
  done
  return 1
}
```

**Stuck detection:**
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

---

## Failure Modes

### 1. Stories Too Large

**Symptom:** Context overflow, broken code, agent loses track

**Diagnosis:** Task takes more than one context window to complete

**Fix:** Split into smaller stories (2-3 sentence rule)

**Example:**
```
BAD: "Build entire auth system"

GOOD:
- "Add users table migration"
- "Add auth middleware"
- "Add login form component"
- "Add session management"
```

### 2. Weak Tests / No Verification

**Symptom:** Errors compound across iterations; future iterations inherit broken code

**Quote:**
> "If you don't do this, you're hamstringing future agent runs with bad code, and they'll need to bisect to find bugs. Super nasty."
> - Matt Pocock

**Fix:** Require typecheck + tests in EVERY acceptance criteria

### 3. Context Rot Within Ralph

**Symptom:** Quality degrades mid-task even within single iteration

**Diagnosis:** Too much exploration before implementation

**Fix:**
- Task sizing discipline
- Use Amp auto-handoff at 90% context
- Split complex tasks further

### 4. PRD Drift

**Symptom:** Agent interprets tasks differently than intended

**Diagnosis:** Vague acceptance criteria

**Fix:** Be explicit. Not "works correctly" but "filter dropdown has options: All, Cold, Friend"

### 5. False Completion Signals

**Symptom:** Agent marks passes: true but feature is broken

**Diagnosis:** No verification step

**Fix:** Always include programmatic checks:
```json
{
  "acceptanceCriteria": [
    "Feature works as specified",
    "npm run typecheck passes",
    "npm run test passes",
    "Visual verification via Playwright screenshot"
  ]
}
```

### 6. Stop Condition Failures

**Types:**
- **Premature stop:** Agent declares complete before all work done
- **No stop:** Agent never emits completion signal
- **Infinite loop:** Max iterations not set

**Prevention:**
1. Clear promise format: `<promise>COMPLETE</promise>`
2. Max iterations always set
3. jq-based completion check as backup
4. Human checkpoint at milestones

### 7. Progress Overwriting

**Symptom:** Learnings lost between iterations

**Diagnosis:** Agent editing instead of appending progress.txt

**Fix:** Use the word "APPEND" explicitly in prompt

### 8. Non-Idempotent Migrations

**Symptom:** Database in inconsistent state across iterations

**Fix:**
```sql
ADD COLUMN IF NOT EXISTS email TEXT;
```

### 9. Frontend Without Browser Verification

**Symptom:** UI changes claimed complete but visually broken

**Quote:**
> "Claude's tendency to mark features complete without proper testing... did much better at verifying end-to-end once explicitly prompted to use browser automation tools"
> - Anthropic best practices

**Fix:** Add Playwright verification to acceptance criteria

---

## Mental Model

### "Stateless Agent, Persistent State"

The agent is stateless. Memory is architecture, not magic.

**The agent:**
- Has no memory of previous iterations
- Starts fresh every time
- Only knows what it reads from files

**The state:**
- Lives in prd.json, progress.txt, git
- Persists across iterations
- Is the only source of continuity

### Why Fresh Context Beats Long Sessions

| Long Sessions | Fresh Context (Ralph) |
|---------------|----------------------|
| Context fills up | Always starts at 0% |
| Quality degrades | Peak quality each iteration |
| Errors compound | Each iteration can self-correct |
| Hard to recover | Easy to resume from any point |
| Lossy compaction | Full external history preserved |

### The Microservices Analogy

Ralph applies microservices thinking to AI agents:
- **Stateless:** Each iteration is independent
- **Externalized state:** Files and git are the database
- **Small units:** Each task is atomic
- **Failure isolation:** One bad iteration doesn't corrupt the system
- **Scalability:** Can run multiple instances in parallel

### The Kanban Mental Model

**Old Way (Multi-Phase Plans):**
```
Phase 1 -> Phase 2 -> Phase 3 -> Phase 4
```
Problems: Hard to add tasks, rigid, requires human orchestration

**Ralph Way (Kanban Loop):**
```
Pick task -> Complete task -> Back to board -> All done? -> Exit/Loop
```

Focus on WHAT it should do at the end, not HOW to get there.

### The Junior Developer Analogy

> "Think of the AI agent as an eager but somewhat dim junior developer (Ralph) who never sleeps, happily works on one tiny task at a time, commits often, and tells you when it's truly finished - but needs extremely tight scoping, strong feedback loops, and hard limits to avoid disaster."
> - Matt Pocock

### The Transformation

```
Human Role         ->    AI Role
---------------------------------
Product Manager         Implementation Army
Architect               Tireless Executor
25-30 min planning      8 hours grinding
Morning review          Overnight shipping
```

---

## Combinations

### Ralph + Playwright

**The Stack (per @weswinder):**

| Component | Role |
|-----------|------|
| Opus 4.5 | Strong reasoning |
| Ralph Wiggum | Iterative persistence |
| Playwright | Browser verification |

> "opus 4.5 with ralph wiggum and playwright is agi"

**Why it works:**
- Ralph feeds the same prompt repeatedly
- Playwright enables real-world verification
- Opus provides reasoning (fewer iterations needed)

**Critical Optimization (@TendiesOfWisdom):**
> "The feedback loop is everything, but put costly tools like browser control in subagents to protect your main context window tokens"

### Ralph + Hooks

Pre/post-iteration hooks for automation:

**Pre-iteration:**
- Pull latest changes
- Reset test environment
- Clear caches

**Post-iteration:**
- Run additional verification
- Send notifications
- Archive progress

**Example:**
```bash
pre_iteration() {
  git pull origin main
  npm run db:reset
}

post_iteration() {
  if npm run test; then
    curl -X POST "$WEBHOOK" -d '{"status": "iteration complete"}'
  fi
}
```

### Ralph + Subagents

For expensive operations, spawn subagents:

```markdown
## When You Need Browser Verification

Use the dev-browser skill to spawn a subagent:
1. Subagent takes screenshots
2. Subagent reports results
3. Main Ralph context stays clean
```

**Benefits:**
- Protects main context window
- Expensive operations isolated
- Cleaner history

### Ralph + CC Mirror (Ralph Colonies)

Combine Ralph's iteration with multi-agent coordination:

1. CC Mirror orchestrator decomposes feature
2. Each worker runs its own Ralph loop
3. Workers on separate branches
4. Parallel Ralph loops on separate worktrees
5. Orchestrator coordinates merges

**Architecture:**
```
                 CC Mirror Orchestrator
                         |
          +--------------+--------------+
          |              |              |
      Ralph-1        Ralph-2        Ralph-3
    (worktree-1)   (worktree-2)   (worktree-3)
     backend        frontend        tests
```

---

## Quotes from Each Originator

### Geoffrey Huntley (Creator)

From ghuntley.com/ralph/:
- Pioneered the "deterministically bad" failures concept
- Emphasized operator skill over model capability
- External memory architecture philosophy

### Matt Pocock (Evangelist)

> "KISS approach to AI coding that lets you ship while you sleep"

> "Ralph puts you in the seat of the requirements gatherer... instead of focusing on how it's going to be done, just focus on what it needs to do and how it should behave once complete."

> "The dev branch is always wackier than the main branch. We are experimenting. Some works, some doesn't."

> "If you don't do this, you're hamstringing future agent runs with bad code, and they'll need to bisect to find bugs. Super nasty."

> "Adjust the PRD, set passes to 'false', run Ralph again" - on handling wrong decisions

### Ryan Carson (Evolver)

> "What's amazing is I can ask it to look at previous runs to learn what worked or didn't work (I archive each PRD and user story JSON). So every time I run Ralph, it gets better and better."

> "Learnings compound. By story 10, Ralph knew our patterns."

> "If you can't describe it in 2-3 sentences, it's too big." - on task sizing

### Arvid Kahl (Documenter)

> "It's a 'we learn from failure'-centric approach. You define your goal condition and let the agent loop over and over until it has verifiably reached that promised goal."

> "It might take 2 minutes or a day. But the loop continues to experiment and look at prior work to ultimately get there."

> "I've been seeing solid results with that. Takes some massaging and setting things up right (mostly for there not to be any interruptions), but when it works, it WORKS."

### Muratcan Koylan (Domain Adapter)

> "Ralph doesn't have the LLM 'discover' things on its own. Its discovery is a database-driven input system... The agent's job is synthesis."

> "View Claude Code as a persistent, file-memory-based loop where AI acts as an autonomous copywriter, breaking projects into small, verifiable stories that compound over iterations - emphasizing eventual consistency over perfect first attempts."

### Wes Winder (Stack Builder)

> "opus 4.5 with ralph wiggum and playwright is agi"

The combination creates a "cartoon child clicking buttons without giving up."

### Community Warnings

**@seltzergenius:**
> "A word of warning that it doesn't take the place of good planning and context engineering phases... why burn tokens on brute force"

**@f_butz:**
> "My concern: loops without review. Works until it builds something broken in ways you don't notice. What's your verification layer?"

**@Killian_Kirk:**
> "Curious what type of task that would be useful for... those without well defined completion criteria aren't good candidates"

**@TendiesOfWisdom:**
> "The feedback loop is everything, but put costly tools like browser control in subagents to protect your main context window tokens"

---

## Quick Start Checklist

### Minimal Setup (15 minutes)

1. Create `plans/` directory
2. Add ralph.sh script (copy from above)
3. Create prd.json with small tasks
4. Create empty progress.txt
5. Run `./plans/ralph.sh 10`

---

## Checkpoint: Quick Start Complete

**Where you are:** You've done the 15-minute minimal setup and are ready to run Ralph.
**What this enables:** Your first autonomous development loop - the moment of truth!

**Verify your state:**
```bash
# Full verification in one command
ls plans/ralph.sh plans/prd.json plans/progress.txt && \
bash -n plans/ralph.sh && \
cat plans/prd.json | jq '.userStories | length' && \
echo "Ready to run!"
```

**You should see:**
```
plans/ralph.sh  plans/prd.json  plans/progress.txt   ← all files exist
5                                                     ← number of stories
Ready to run!
```

**The moment of truth:**
```bash
# Start with conservative max iterations
./plans/ralph.sh 10
```

**Watch for in first iteration:**
```
════════════════════════════════════════
  Iteration 1 of 10
════════════════════════════════════════
[Claude reading prd.json...]           ← confirms files found
[Claude implementing US-001...]        ← working on first task
[Running typecheck... PASS]            ← verification works
[Committing...]                        ← git integration works
```

**If first iteration fails:**
- Check: Is Claude Code installed and authenticated?
- Check: Does `claude --version` work?
- Check: Are verification commands correct for your project?
- Go back to: Test `claude` command manually first

**This connects to:** First successful iteration → proves the pattern works → unlocks overnight runs → enables "ship while you sleep" workflow

---

### Pre-Flight Checks

- [ ] Tasks are small enough (2-3 sentence rule)
- [ ] Dependencies ordered correctly (schema -> backend -> frontend)
- [ ] Acceptance criteria are verifiable (not "works correctly")
- [ ] Tests exist or will be created
- [ ] Git branch created
- [ ] progress.txt initialized with Codebase Patterns section
- [ ] Max iterations set
- [ ] Verification commands work (`npm test`, `npm run typecheck`)

### File Structure

```
scripts/ralph/
  ralph.sh         # The loop script
  prompt.md        # Instructions for each iteration
  prd.json         # Task tracking
  progress.txt     # Learnings/patterns
```

---

## Resources

### Official
- ghuntley.com/ralph/ - Original pattern
- github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum - Official plugin

### Ryan Carson
- github.com/snarktank/ralph - Complete implementation
- github.com/snarktank/ai-dev-tasks - PRD templates
- github.com/snarktank/amp-skills - Amp skills collection

### Community
- github.com/gruckion/marathon-ralph - SDLC integration
- github.com/Arakiss/lisa - Logging fork
- github.com/covibes/zeroshot - Next gen version
- github.com/muratcankoylan/ralph-wiggum-marketer - Content generation
- github.com/mikeyobrien/ralph-orchestrator - Multi-agent coordination
- github.com/ghuntley/ralph-claude-code - Rate limiting

### Articles
- aihero.dev/tips-for-ai-coding-with-ralph-wiggum - Matt Pocock's 11 tips
- awesomeclaude.ai/ralph-wiggum - Guide

### Videos
- youtube.com/watch?v=O2bBWDoxO4s - Ralph demo

---

## The Bottom Line

Ralph Wiggum is not about making the agent smarter. It is about:

1. **Working around context limitations** through fresh starts
2. **Leveraging persistence** through external memory
3. **Building feedback loops** that catch errors
4. **Compounding progress** across iterations
5. **Accepting imperfection** while achieving eventual consistency

> "Given excellent upfront specification, we can already achieve meaningful unattended software production in 2026."

The pattern is simple. The power is in the discipline.

---

## Tags

`#orchestration` `#ralph-wiggum` `#ralph-loop` `#deep-extraction` `#autonomous-agent` `#prd-driven` `#fresh-context` `#feedback-loops` `#afk-coding` `#ship-while-sleep` `#compounding-ralph` `#huntley` `#pocock` `#carson`

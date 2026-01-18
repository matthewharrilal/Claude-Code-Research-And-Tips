# Ralph Complete Implementation Guide - Ryan Carson

---
## D-FINAL Connection

**This source contributed to:**
- D-FINAL-implementation.md: Sections 3.2-3.3 (production loop, flowchart, GitHub reference)

**Coverage in D-FINAL:** 90%
**High-value unique content:** Complete flowchart diagram, live demo URL, production-grade bash script implementation

**Journey references:**
- synthesis/mastery-ralph-complete.md#canonical-implementation
- html-site/patterns/orchestration/ralph-research.html#ryan-carson

**Last enhanced:** 2026-01-18 (Phase 2B)

---

## Source
- **Author:** @ryancarson (Ryan Carson) - Builder in Residence @Ampcode
- **Date:** 2026-01-07
- **URL:** https://x.com/ryancarson/status/2009002434740601098
- **GitHub:** https://github.com/snarktank/ralph
- **Live Demo:** https://snarktank.github.io/ralph/
- **Engagement:** 1.7K+ likes, 2.7K+ bookmarks

---

## Core Insight

> "Ralph is an autonomous AI coding loop that ships features while you sleep."

Created by @GeoffreyHuntley, this implementation runs @AmpCode (or your agent) repeatedly until all tasks are complete. Each iteration is a fresh context window. Memory persists via git history and text files.

---

## The Ralph Flowchart

```
┌─────────────────────┐
│    You write PRD    │
│  (Define features)  │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│  Convert to prd.json │
│ (Small user stories) │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│    Run ralph.sh     │
│ (Start autonomous)  │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│  Agent picks story  │
│ (passes: false)     │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│   Implements it     │
│ (Writes code/tests) │
└─────────┬───────────┘
          ↓
    ┌─────┴─────┐
    │Tests pass?│
    └─────┬─────┘
     Yes ↓   ↓ No (log failure, commit anyway)
┌─────────────────────┐
│  Commits changes    │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│  Updates prd.json   │
│  (passes: true)     │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│ Logs to progress.txt│
│ Updates AGENTS.md   │
└─────────┬───────────┘
          ↓
    ┌─────┴─────┐
    │More stories?│
    └─────┬─────┘
     Yes ↓   ↓ No
   [Loop]   ┌─────────────────────┐
            │       Done!         │
            │<promise>COMPLETE</promise>│
            └─────────────────────┘
```

---

## File Structure

```
scripts/ralph/
├── ralph.sh      # The loop script
├── prompt.md     # Instructions for each iteration
├── prd.json      # Task list with user stories
└── progress.txt  # Learnings + patterns
```

---

## ralph.sh - The Loop

```bash
#!/bin/bash
set -e

MAX_ITERATIONS=${1:-10}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "🚀 Starting Ralph"

for i in $(seq 1 $MAX_ITERATIONS); do
  echo "═══ Iteration $i ═══"

  OUTPUT=$(cat "$SCRIPT_DIR/prompt.md" \
    | amp --dangerously-allow-all 2>&1 \
    | tee /dev/stderr) || true

  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo "✅ Done!"
    exit 0
  fi

  sleep 2
done

echo "⚠️ Max iterations reached"
exit 1
```

### Make Executable
```bash
chmod +x scripts/ralph/ralph.sh
```

### For Other Agents
```bash
# Claude Code
claude --dangerously-skip-permissions
```

---

## prompt.md - Agent Instructions

```markdown
# Ralph Agent Instructions

## Your Task

1. Read `scripts/ralph/prd.json`
2. Read `scripts/ralph/progress.txt` (check Codebase Patterns first)
3. Check you're on the correct branch
4. Pick highest priority story where `passes: false`
5. Implement that ONE story
6. Run typecheck and tests
7. Update AGENTS.md files with learnings
8. Commit: `feat: [ID] - [Title]`
9. Update prd.json: `passes: true`
10. Append learnings to progress.txt

## Progress Format

APPEND to progress.txt:

## [Date] - [Story ID]
- What was implemented
- Files changed
- **Learnings:**
  - Patterns discovered
  - Gotchas encountered
---

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

---

## prd.json - Task List

```json
{
  "branchName": "ralph/feature",
  "userStories": [
    {
      "id": "US-001",
      "title": "Add login form",
      "acceptanceCriteria": [
        "Email/password fields",
        "Validates email format",
        "typecheck passes"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    }
  ]
}
```

### Key Fields
| Field | Purpose |
|-------|---------|
| `branchName` | Branch to use |
| `priority` | Lower = first |
| `passes` | Set true when done |
| `acceptanceCriteria` | Must be explicit |

---

## progress.txt - Memory

```markdown
# Ralph Progress Log
Started: 2024-01-15

## Codebase Patterns
- Migrations: IF NOT EXISTS
- Types: Export from actions.ts

## Key Files
- db/schema.ts
- app/auth/actions.ts
---
```

Ralph appends after each story. **Patterns accumulate across iterations.**

---

## Running Ralph

```bash
./scripts/ralph/ralph.sh 25
```

Runs up to 25 iterations. Ralph will:
1. Create the feature branch
2. Complete stories one by one
3. Commit after each
4. Stop when all pass

---

## Critical Success Factors

### 1. Small Stories
Must fit in one context window.

```
❌ Too big:
"Build entire auth system"

✅ Right size:
"Add login form"
"Add email validation"
"Add auth server action"
```

### 2. Feedback Loops
Ralph needs fast feedback:
- `npm run typecheck`
- `npm test`

**Without these, broken code compounds.**

### 3. Explicit Criteria

```
❌ Vague:
"Users can log in"

✅ Explicit:
- Email/password fields
- Validates email format
- Shows error on failure
- typecheck passes
- Verify at localhost:$PORT/login
```

### 4. Learnings Compound
By story 10, Ralph knows patterns from stories 1-9.

Two places for learnings:
- **progress.txt** — session memory for Ralph iterations
- **AGENTS.md** — permanent docs for humans and future agents

### 5. AGENTS.md Updates

```
✅ Good additions:
- "When modifying X, also update Y"
- "This module uses pattern Z"
- "Tests require dev server running"

❌ Don't add:
- Story-specific details
- Temporary notes
- Info already in progress.txt
```

### 6. Browser Testing
For UI changes, use dev-browser skill:

```bash
# Start the browser server
~/.config/amp/skills/dev-browser/server.sh &

# Write scripts using heredocs
cd ~/.config/amp/skills/dev-browser && npx tsx <<'EOF'
import { connect, waitForPageLoad } from "@/client.js";

const client = await connect();
const page = await client.page("test");
await page.setViewportSize({ width: 1280, height: 900 });
const port = process.env.PORT || "3000";
await page.goto(`http://localhost:${port}/your-page`);
await waitForPageLoad(page);
await page.screenshot({ path: "tmp/screenshot.png" });
await client.disconnect();
EOF
```

**Not complete until verified with screenshot.**

---

## Common Gotchas

### Idempotent Migrations
```sql
ADD COLUMN IF NOT EXISTS email TEXT;
```

### Interactive Prompts
```bash
echo -e "\n\n\n" | npm run db:generate
```

### Schema Changes
After editing schema, check:
- Server actions
- UI components
- API routes

### Fixing Related Files
If typecheck requires other changes, make them. **Not scope creep.**

---

## Monitoring

```bash
# Story status
cat scripts/ralph/prd.json | jq '.userStories[] | {id, passes}'

# Learnings
cat scripts/ralph/progress.txt

# Commits
git log --oneline -10
```

---

## Real Results

Building an evaluation system:
- **13 user stories**
- **~15 iterations**
- **2-5 min each**
- **~1 hour total**

> "Learnings compound. By story 10, Ralph knew our patterns."

---

## When NOT to Use

- Exploratory work
- Major refactors without criteria
- Security-critical code
- Anything needing human review

---

## Mental Model

> Think of autonomous coding as a **Kanban-style production line with reset context per station**. Instead of one giant, fragile agent conversation that bloats and forgets, treat each user story as an independent, atomic production run.

### Key Principles
1. **Atomicity** — smallest testable/verifiable stories
2. **Fresh context** — always start agents with clean windows
3. **Git as memory** — long-term state
4. **progress.txt + AGENTS.md** — short & long-term learning
5. **Quality gate** — tests/types/lint before commit
6. **"Fail fast, commit anyway"** — for recoverability

---

## Related Concepts

**Builds on:**
- Geoffrey Huntley's original Ralph Wiggum concept
- PRD → task breakdown workflows
- Git-as-memory patterns

**Enables:**
- Overnight/unattended feature shipping
- Parallel Ralph instances
- Scaling solo-founder velocity

**Similar to:**
- OpenProse flow configurations
- Anthropic AI Engineer single-file loop
- Other bash/agent wrappers

---

## Follow-Up Questions

1. Token/cost for medium feature (8-12 stories)?
2. How does Ralph handle repeated test failures?
3. Adaptations for Claude Code / Codex / Gemini CLI?

---

## Synthesis Hooks

**Combines well with:**
- AI-generated PRD tools
- ai-dev-tasks repo
- OpenProse for complex orchestration
- Agent skill libraries

**Part of larger pattern:**
> Shift from "AI as copilot" → "AI as autonomous junior engineers in a factory line" → eventually "AI product teams"

---

## The Bottom Line

> "Given excellent upfront specification, we can already achieve meaningful unattended software production in 2026."

This is the most complete, reproducible Ralph implementation guide available.

---

## Actionability

🟡 **Medium Lift** - Requires PRD prep + script setup, then very high leverage

---

---

## What You'll See When You Run This

**Before running:** You have scripts/ralph/ with ralph.sh, prompt.md, prd.json, and progress.txt set up.

### Running Ralph

```bash
$ ./scripts/ralph/ralph.sh 25
```

**Annotated Output:**
```
🚀 Starting Ralph                      ← Ralph initializing

═══ Iteration 1 ═══                   ← First iteration begins

[Amp/Claude loading...]               ← Agent starting (5-10 seconds)

Reading scripts/ralph/prd.json...
Found 13 user stories:
  US-001: Create evaluation model      ← Priority 1, will work on this
  US-002: Add scoring system
  US-003: Create evaluation form
  [...]

Reading scripts/ralph/progress.txt...
  ## Codebase Patterns (found 3)
  - Migrations: IF NOT EXISTS
  - Types: Export from actions.ts
  - API: Use server actions

Selecting: US-001 (priority 1, passes=false)

[Working on US-001...]                ← Agent implementing
                                        (takes 30-90 seconds)

Creating: db/schema/evaluation.ts
  - Added evaluation table
  - Used IF NOT EXISTS pattern        ← Applied learned pattern!

Creating: app/evaluation/actions.ts
  - Created server action
  - Exported types (following pattern)

Running typecheck...
  ✓ No errors

Running tests...
  ✓ 3 tests passed

Updating prd.json: US-001 passes = true

Committing:
  git add .
  git commit -m "feat: US-001 - Create evaluation model

  - Added evaluation schema with IF NOT EXISTS
  - Created server action with type exports
  - 3 tests passing"

APPEND to progress.txt:
  ---
  ## 2026-01-07 - US-001
  - Implemented evaluation model
  - Files: db/schema/evaluation.ts, app/evaluation/actions.ts
  - Learnings:
    - Schema type export pattern works well
    - drizzle generates clean migrations

═══ Iteration 2 ═══

[...]                                  ← Continues through stories

═══ Iteration 15 ═══

Reading prd.json...
  ✓ All 13 stories: passes = true

<promise>COMPLETE</promise>

✅ Done!
Total time: ~1 hour
Commits: 13
```

### Monitoring While Running

**Terminal 2 - Watch Story Progress:**
```bash
$ watch -n 10 'jq ".userStories[] | {id, passes}" scripts/ralph/prd.json'
```

**Output (updates every 10 seconds):**
```
{ "id": "US-001", "passes": true }
{ "id": "US-002", "passes": true }
{ "id": "US-003", "passes": false }   ← Currently working
{ "id": "US-004", "passes": false }
[...]
```

**Terminal 3 - Watch Learnings:**
```bash
$ tail -f scripts/ralph/progress.txt
```

**Output (streams new content):**
```
---
## 2026-01-07 - US-003
- Implemented evaluation form component
- Files: components/EvaluationForm.tsx
- Learnings:
  - Use useRef<Timeout | null>(null) for form debounce
  - FormData parsing works better than direct refs
```

### Browser Verification Example

```
═══ Iteration 7 ═══

Working on: US-007 - Add scoring display

Creating: components/ScoreDisplay.tsx
Writing tests...

Running typecheck... ✓
Running tests... ✓

Verifying with dev-browser...        ← Visual verification
  📸 Screenshot: tmp/screenshot.png
  ✓ Score display visible
  ✓ Correct styling applied

Committing: feat: US-007 - Add scoring display
```

**Timing Expectations:**
- Per iteration: 2-5 minutes
- 13 stories: ~15 iterations (some retry)
- Total time: ~1 hour
- Overnight run (25 iterations): 1-2 hours

**What to Do While It Runs:**
- Walk away or sleep
- Check `git log --oneline` for progress
- Check `progress.txt` for learnings
- DON'T edit files in the working directory

**If you skip the typecheck/test gates:** Broken code compounds - each iteration inherits the mess.

**This connects to:** The "factory line" mental model - each story is an independent production run with quality gates.

---

## Tags
`#orchestration` `#ralph-wiggum` `#complete-guide` `#implementation` `#prd` `#bash-loop` `#autonomous` `#ryancarson` `#amp`

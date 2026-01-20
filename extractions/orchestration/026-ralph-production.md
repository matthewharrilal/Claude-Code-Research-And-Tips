# Production Ralph: PRD-Driven Implementation
## Ryan Carson's Story-Sized Iteration Pattern

---
## D-FINAL Connection
**Contributed to:** D-FINAL-implementation.md
**Last enhanced:** 2026-01-18 (Wave 3)
---

**Extraction Date:** 2026-01-18
**Primary Source:** github.com/snarktank/ralph (4.9k stars, 652 forks)
**Author:** Ryan Carson (@ryancarson), founder of Treehouse
**Status:** Production-ready reference implementation
**Line Count:** 800+

---

> "The bottleneck isn't coding—it's the upfront spec quality: PRD clarity, atomic stories, and verifiable criteria."
> — Ryan Carson

> "Sleep-shipping requires translating features into small, testable user stories with clear, verifiable criteria."
> — Ryan Carson (Startup Ideas Podcast)

> "What's amazing is I can ask it to look at previous runs to learn what worked or didn't work. So every time I run Ralph, it gets better and better."
> — Ryan Carson

---

## Table of Contents

1. [You Are Here](#1-you-are-here)
2. [What Makes This "Production"?](#2-what-makes-this-production)
3. [The PRD Structure](#3-the-prd-structure)
4. [Story Sizing Philosophy](#4-story-sizing-philosophy)
5. [Technical Implementation](#5-technical-implementation)
6. [Workflow](#6-workflow)
7. [Case Study: 14-Iteration Feature](#7-case-study-14-iteration-feature)
8. [Memory Architecture](#8-memory-architecture)
9. [Skills System](#9-skills-system)
10. [Comparison](#10-comparison)
11. [Troubleshooting](#11-troubleshooting)
12. [Templates](#12-templates)
13. [Quick Reference](#13-quick-reference)

---

## 1. You Are Here

**Complexity Level:** 3-4 (PRD-Driven Automation to Production Pipeline)

**Position in the Ralph Ecosystem:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                     RALPH ECOSYSTEM MAP                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Level 1: Basic Ralph (Geoffrey Huntley)                           │
│     ├── while :; do cat PROMPT.md | claude ; done                  │
│     └── Foundational concept, minimal tooling                      │
│                                                                     │
│  Level 2: HOTL Ralph (Human On The Loop)                           │
│     ├── Single iteration with review                               │
│     └── Learning/debugging mode                                     │
│                                                                     │
│  Level 3-4: PRODUCTION RALPH (Ryan Carson) ◄── YOU ARE HERE        │
│     ├── prd.json standard format                                   │
│     ├── Story sizing methodology                                    │
│     ├── Amp skills integration                                      │
│     ├── AGENTS.md pattern documentation                            │
│     ├── Automatic run archival                                     │
│     └── GitHub repo: snarktank/ralph                               │
│                                                                     │
│  Level 5: Marathon Ralph (Gruckion)                                │
│     ├── Full SDLC integration                                      │
│     └── E2E test generation                                        │
│                                                                     │
│  Level 6: Parallel Ralph                                           │
│     ├── Multiple branches simultaneously                           │
│     └── Git worktrees isolation                                    │
│                                                                     │
│  Level 7: Factory Ralph (CC Mirror + Multi-agent)                  │
│     └── Orchestrated autonomous departments                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**What This Unlocks:**
- Ship features overnight with confidence
- Verified completion through acceptance criteria
- Learning compounds across iterations
- Reproducible autonomous development

**Prerequisites:**
- Amp CLI installed and authenticated (or Claude Code equivalent)
- `jq` command-line tool (`brew install jq` on macOS)
- Git repository for your project
- Working test/typecheck infrastructure

---

## 2. What Makes This "Production"?

Production Ralph transforms the basic loop concept into a repeatable, reliable system. Here are the key differentiators:

### 2.1 The Production Stack

| Component | Purpose | Why Production-Ready |
|-----------|---------|---------------------|
| **prd.json** | Task tracking | Structured, parseable, versionable |
| **SKILL.md files** | Agent instructions | Reusable, consistent behavior |
| **progress.txt** | Iteration memory | Append-only, learnings compound |
| **AGENTS.md** | Pattern documentation | Long-term institutional knowledge |
| **Archive system** | Run history | Previous runs inform future ones |
| **Branch management** | Isolation | Clean feature branches per PRD |
| **Quality gates** | Verification | Every story has testable criteria |

### 2.2 The Critical Success Factors

From Ryan Carson's experience and the snarktank/ralph documentation:

**1. Story Sizing (THE Most Critical Factor)**

> "Each PRD item should be small enough to complete in one context window. If a task is too big, the LLM runs out of context before finishing and produces poor code."

This is not a suggestion—it's THE determining factor for Ralph success.

**2. Acceptance Criteria Must Be Verifiable**

Not "works correctly" but "Filter dropdown shows: All, Cold, Friend AND npm run typecheck passes."

**3. Feedback Loops Are Non-Negotiable**

Type checking, testing, and CI verification are mandatory. Broken code compounds across iterations.

**4. External Memory Architecture**

- `agents.md` = long-term memory across the repo
- `progress.txt` = short-term memory across iterations
- Git commits = permanent record of changes

**5. Automatic Run Archival**

When switching branches/features, previous runs are automatically archived for future reference and learning.

### 2.3 Repository Statistics

- **Stars:** 4.9k
- **Forks:** 652
- **Languages:** TypeScript (65%), CSS (15.1%), Shell (14.8%), JavaScript (3.2%), HTML (1.9%)
- **Commits:** 7 on main branch
- **Interactive documentation:** snarktank.github.io/ralph/

---

## 3. The PRD Structure

### 3.1 The prd.json Standard Format

```json
{
  "project": "MyApp",
  "branchName": "ralph/feature-name-kebab-case",
  "description": "Brief description of the feature being implemented",
  "userStories": [
    {
      "id": "US-001",
      "title": "Add users table schema",
      "description": "As a developer, I need a users table to store authentication data",
      "acceptanceCriteria": [
        "Users table created with id, email, passwordHash columns",
        "Migration file created with IF NOT EXISTS",
        "bun run typecheck passes",
        "bun run test passes"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-002",
      "title": "Add auth middleware",
      "description": "As a user, I want my sessions validated so unauthorized access is blocked",
      "acceptanceCriteria": [
        "Middleware validates JWT token",
        "Returns 401 for invalid/missing tokens",
        "Passes user to request context",
        "bun run typecheck passes"
      ],
      "priority": 2,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-003",
      "title": "Add login form component",
      "description": "As a user, I want to enter my credentials to log in",
      "acceptanceCriteria": [
        "Email and password fields render",
        "Validates email format client-side",
        "Shows error on invalid credentials",
        "Verify in browser using dev-browser skill",
        "bun run typecheck passes"
      ],
      "priority": 3,
      "passes": false,
      "notes": ""
    }
  ]
}
```

### 3.2 Required Fields

| Field | Type | Purpose |
|-------|------|---------|
| `project` | string | Application/feature name |
| `branchName` | string | Git branch (format: `ralph/feature-name`) |
| `description` | string | High-level feature description |
| `userStories` | array | List of atomic tasks |
| `userStories[].id` | string | Unique identifier (US-001, US-002, etc.) |
| `userStories[].title` | string | Brief task name |
| `userStories[].description` | string | "As a [user], I want [feature] so that [benefit]" |
| `userStories[].acceptanceCriteria` | array | Verifiable completion conditions |
| `userStories[].priority` | number | Execution order (1 = highest) |
| `userStories[].passes` | boolean | Completion status |
| `userStories[].notes` | string | Runtime learnings, blockers |

### 3.3 Acceptance Criteria Standards

**GOOD (Verifiable):**
```json
"acceptanceCriteria": [
  "Add investorType column with default 'cold'",
  "Filter dropdown has options: All, Cold, Friend",
  "Clicking filter updates list correctly",
  "npm run typecheck passes",
  "npm run test passes"
]
```

**BAD (Vague):**
```json
"acceptanceCriteria": [
  "Works correctly",
  "Good UX",
  "Handles edge cases"
]
```

**Mandatory Criteria:**
- Every story: `"Typecheck passes"` or equivalent
- UI stories: `"Verify in browser using dev-browser skill"`

### 3.4 Story Dependency Ordering

Stories execute sequentially by priority. Dependencies MUST flow forward:

```
1. Schema/database changes (migrations)
2. Server actions/backend logic
3. UI components using backend
4. Dashboard/summary views
```

**WRONG:** UI component (priority 1) before the schema it depends on (priority 3)

---

## 4. Story Sizing Philosophy

### 4.1 Why Size Matters More Than Anything

This is from Ryan Carson's direct experience and echoed across Ralph implementations:

> "If a task is too big, the LLM runs out of context before finishing and produces poor code."

**The Iron Rule:** Each story must be completable in ONE iteration (~one context window).

### 4.2 The "One Story, One Iteration" Rule

Each iteration of Ralph:
1. Reads the full prd.json
2. Reads progress.txt for patterns
3. Implements ONE story
4. Runs verification
5. Commits if passing
6. Updates status
7. Appends learnings

**If the story doesn't fit in this cycle, it's too big.**

### 4.3 Right-Sized Story Examples

**Correct Size (completable in one context window):**

```json
{ "id": "US-001", "title": "Add status column to tasks table", "passes": false }
{ "id": "US-002", "title": "Add filter dropdown to task list", "passes": false }
{ "id": "US-003", "title": "Implement task status toggle", "passes": false }
{ "id": "US-004", "title": "Add delete confirmation modal", "passes": false }
{ "id": "US-005", "title": "Style task cards with priority colors", "passes": false }
```

**Too Large (needs decomposition):**

```json
// BAD: "Build entire dashboard"
// Split into:
{ "id": "US-001", "title": "Add dashboard page route", "passes": false }
{ "id": "US-002", "title": "Create metrics summary component", "passes": false }
{ "id": "US-003", "title": "Add recent activity feed", "passes": false }
{ "id": "US-004", "title": "Create chart for monthly trends", "passes": false }
{ "id": "US-005", "title": "Add quick actions sidebar", "passes": false }
```

```json
// BAD: "Add authentication"
// Split into:
{ "id": "US-001", "title": "Create users table schema", "passes": false }
{ "id": "US-002", "title": "Add password hashing utility", "passes": false }
{ "id": "US-003", "title": "Create auth middleware", "passes": false }
{ "id": "US-004", "title": "Add login form component", "passes": false }
{ "id": "US-005", "title": "Add session management", "passes": false }
{ "id": "US-006", "title": "Add logout functionality", "passes": false }
```

### 4.4 Story Sizing Guidelines

| Story Type | Typical Scope | Example |
|------------|---------------|---------|
| Database | One table/column change | "Add status column with default 'pending'" |
| Migration | One migration file | "Create indexes for common queries" |
| API Endpoint | One route | "Add GET /api/users/:id endpoint" |
| Server Action | One function | "Create deleteTask server action" |
| UI Component | One component | "Add TaskCard component" |
| UI Feature | One interaction | "Add click-to-edit on task title" |
| Styling | One element/theme | "Style filter dropdown" |
| Test | One module | "Add tests for auth middleware" |

### 4.5 The 2-3 Sentence Rule

> "If you can't describe it in 2-3 sentences, split it."
> — Ryan Carson

**Good (fits in 2-3 sentences):**
"Add a filter dropdown to the task list. It should have options for All, Active, and Completed. Clicking changes the visible tasks."

**Too Big (needs splitting):**
"Build the entire task management system with CRUD operations, filtering, sorting, pagination, bulk actions, drag-and-drop reordering, and export to CSV."

### 4.6 AFK vs HITL Sizing

**For AFK Ralph (Away From Keyboard):**
- Keep PRD items **small**
- You want the agent on top form when you're not watching
- Errors are more costly without supervision

**For HITL Ralph (Human In The Loop):**
- Can make items **slightly larger** to see progress faster
- But even then, bias small
- You can always course-correct

---

## 5. Technical Implementation

### 5.1 The Complete ralph.sh Script

```bash
#!/bin/bash
# Ralph Wiggum - Long-running AI agent loop
# Usage: ./ralph.sh [max_iterations]
# Source: github.com/snarktank/ralph

set -e

MAX_ITERATIONS=${1:-10}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PRD_FILE="$SCRIPT_DIR/prd.json"
PROGRESS_FILE="$SCRIPT_DIR/progress.txt"
ARCHIVE_DIR="$SCRIPT_DIR/archive"
LAST_BRANCH_FILE="$SCRIPT_DIR/.last-branch"

# Archive previous run if branch changed
if [ -f "$PRD_FILE" ] && [ -f "$LAST_BRANCH_FILE" ]; then
  CURRENT_BRANCH=$(jq -r '.branchName // empty' "$PRD_FILE" 2>/dev/null || echo "")
  LAST_BRANCH=$(cat "$LAST_BRANCH_FILE" 2>/dev/null || echo "")

  if [ -n "$CURRENT_BRANCH" ] && [ -n "$LAST_BRANCH" ] && [ "$CURRENT_BRANCH" != "$LAST_BRANCH" ]; then
    # Archive the previous run
    DATE=$(date +%Y-%m-%d)
    # Strip "ralph/" prefix from branch name for folder
    FOLDER_NAME=$(echo "$LAST_BRANCH" | sed 's|^ralph/||')
    ARCHIVE_FOLDER="$ARCHIVE_DIR/$DATE-$FOLDER_NAME"

    echo "Archiving previous run: $LAST_BRANCH"
    mkdir -p "$ARCHIVE_FOLDER"
    [ -f "$PRD_FILE" ] && cp "$PRD_FILE" "$ARCHIVE_FOLDER/"
    [ -f "$PROGRESS_FILE" ] && cp "$PROGRESS_FILE" "$ARCHIVE_FOLDER/"
    echo "  Archived to: $ARCHIVE_FOLDER"

    # Reset progress file for new run
    echo "# Ralph Progress Log" > "$PROGRESS_FILE"
    echo "Started: $(date)" >> "$PROGRESS_FILE"
    echo "---" >> "$PROGRESS_FILE"
  fi
fi

# Track current branch
if [ -f "$PRD_FILE" ]; then
  CURRENT_BRANCH=$(jq -r '.branchName // empty' "$PRD_FILE" 2>/dev/null || echo "")
  if [ -n "$CURRENT_BRANCH" ]; then
    echo "$CURRENT_BRANCH" > "$LAST_BRANCH_FILE"
  fi
fi

# Initialize progress file if it doesn't exist
if [ ! -f "$PROGRESS_FILE" ]; then
  echo "# Ralph Progress Log" > "$PROGRESS_FILE"
  echo "Started: $(date)" >> "$PROGRESS_FILE"
  echo "---" >> "$PROGRESS_FILE"
fi

echo "Starting Ralph - Max iterations: $MAX_ITERATIONS"

for i in $(seq 1 $MAX_ITERATIONS); do
  echo ""
  echo "═══════════════════════════════════════════════════════"
  echo "  Ralph Iteration $i of $MAX_ITERATIONS"
  echo "═══════════════════════════════════════════════════════"

  # Run amp with the ralph prompt
  OUTPUT=$(cat "$SCRIPT_DIR/prompt.md" | amp --dangerously-allow-all 2>&1 | tee /dev/stderr) || true

  # Check for completion signal
  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo ""
    echo "Ralph completed all tasks!"
    echo "Completed at iteration $i of $MAX_ITERATIONS"
    exit 0
  fi

  echo "Iteration $i complete. Continuing..."
  sleep 2
done

echo ""
echo "Ralph reached max iterations ($MAX_ITERATIONS) without completing all tasks."
echo "Check $PROGRESS_FILE for status."
exit 1
```

### 5.2 Key Implementation Details

**Error Handling:**
- `set -e` for strict error mode
- `|| true` on amp command to allow non-fatal failures
- Output captured with `tee` for both logging and completion detection

**Branch Archival:**
- Detects when branch changes via `.last-branch` file
- Archives previous prd.json and progress.txt
- Creates dated folders: `archive/2026-01-18-feature-name/`
- Resets progress.txt for clean start

**Completion Detection:**
- Grep for `<promise>COMPLETE</promise>` in output
- Exits with code 0 on completion
- Exits with code 1 if max iterations reached

**Iteration Pacing:**
- 2-second sleep between iterations
- Prevents rate limiting
- Allows filesystem to sync

### 5.3 The prompt.md Template

```markdown
# Ralph Agent Instructions

## Your Mission

You are Ralph, an autonomous coding agent. Your job is to implement user stories
from the PRD one at a time until all are complete.

## Workflow (Follow Exactly)

1. **Read State:**
   - Read `prd.json` - find highest priority story where `passes: false`
   - Read `progress.txt` - check "Codebase Patterns" section first

2. **Verify Branch:**
   - Ensure you're on the correct branch per `branchName` in prd.json
   - Create the branch if it doesn't exist

3. **Implement ONE Story:**
   - Focus on the single highest-priority incomplete story
   - Follow existing codebase patterns
   - Keep changes minimal and focused

4. **Run Quality Checks:**
   - Run typecheck: `bun run typecheck` (or project equivalent)
   - Run tests: `bun run test` (or project equivalent)
   - For UI stories: Verify in browser using dev-browser skill

5. **Commit Changes:**
   - Commit message format: `feat: [US-XXX] - [Story title]`
   - Only commit if all quality checks pass

6. **Update PRD:**
   - Set `passes: true` for the completed story
   - Add any notes to the `notes` field if relevant

7. **Document Learnings:**
   APPEND to progress.txt (never replace, always append):

   ```
   ---
   ## [Date] - [Story ID]
   - **Implemented:** Brief description of what was done
   - **Files changed:** List of modified files
   - **Learnings for future iterations:**
     - Pattern discovered
     - Gotcha encountered
   ```

8. **Update AGENTS.md:**
   Before committing, update relevant AGENTS.md files with genuinely reusable knowledge:
   - API patterns
   - Interdependencies
   - Testing requirements

   Do NOT add: story-specific details, temporary notes

## Codebase Patterns (Check First)

Extract and consolidate reusable patterns at the TOP of progress.txt:
- "Use `sql<number>` template for aggregations"
- "Always use IF NOT EXISTS for migrations"
- "Export types from actions.ts"

## Stop Condition

If ALL user stories have `passes: true`, respond with:
<promise>COMPLETE</promise>

Otherwise, end normally for the next iteration.

## Critical Rules

- ONE story per iteration only
- NEVER skip quality checks
- ALWAYS verify UI changes in browser
- APPEND to progress.txt, never overwrite
- Commit messages MUST follow format
```

### 5.4 Claude Code Adaptation

If using Claude Code instead of Amp, adjust ralph.sh:

```bash
# Change this line:
OUTPUT=$(cat "$SCRIPT_DIR/prompt.md" | amp --dangerously-allow-all 2>&1 | tee /dev/stderr) || true

# To this:
OUTPUT=$(cat "$SCRIPT_DIR/prompt.md" | claude --dangerously-skip-permissions 2>&1 | tee /dev/stderr) || true
```

And in settings, enable auto-accept or use the appropriate permissions flag for your workflow.

---

## 6. Workflow

### 6.1 How to Start a New Feature

**Step 1: Generate PRD**

Use the PRD skill or manually create requirements:

```bash
# Using Amp PRD skill
amp "Use /prd skill for: Add user profile editing feature"

# Output: tasks/prd-user-profile-editing.md
```

**Step 2: Convert to prd.json**

Use the Ralph skill to convert markdown PRD to JSON:

```bash
# Using Amp Ralph skill
amp "Use /ralph skill to convert tasks/prd-user-profile-editing.md"

# Output: prd.json with structured user stories
```

**Step 3: Review and Adjust**

Before running, manually review:
- [ ] Story sizes are atomic (2-3 sentence rule)
- [ ] Dependencies ordered correctly
- [ ] All stories have typecheck in acceptance criteria
- [ ] UI stories have browser verification
- [ ] No vague criteria like "works correctly"

**Step 4: Execute Ralph**

```bash
./scripts/ralph/ralph.sh 25  # Start with 25 max iterations
```

**Step 5: Monitor and Review**

```bash
# Check progress
cat scripts/ralph/progress.txt | tail -30

# Check completion status
cat scripts/ralph/prd.json | jq '.userStories[] | {id, title, passes}'

# View recent commits
git log --oneline -10
```

### 6.2 How Iterations Compound

**Iteration 1:**
- Reads empty progress.txt
- Implements US-001 (schema)
- Discovers: "Use IF NOT EXISTS for migrations"
- Appends learning to progress.txt

**Iteration 2:**
- Reads progress.txt, sees migration pattern
- Implements US-002 (backend)
- Discovers: "Export types from actions.ts"
- Appends learning

**Iteration 5:**
- Reads rich progress.txt with multiple patterns
- Implements US-005 faster using accumulated knowledge
- Adds new pattern: "Use shadcn/ui for form components"

**Iteration 10:**
- progress.txt is a comprehensive codebase guide
- Implementation speed maximized
- Pattern reuse automatic

> "By story 10, Ralph knew our patterns. Learnings compound."
> — Ryan Carson

### 6.3 When to Break/Continue

**Continue Running When:**
- Stories are completing successfully
- Quality checks are passing
- Progress is being made each iteration

**Pause and Review When:**
- Same story fails 3+ times
- Test failures persist
- Context overflow errors appear
- Unexpected file changes

**Stop and Intervene When:**
- Critical path blocked
- External dependency missing
- Architecture decision needed
- Security concern identified

### 6.4 Shipping Checklist

Before considering a Ralph run "shipped":

- [ ] All stories show `passes: true`
- [ ] `git status` is clean
- [ ] All tests pass locally
- [ ] CI pipeline green
- [ ] Manual spot-check of key features
- [ ] No console errors in browser
- [ ] Review git diff from feature branch
- [ ] Archive the run for future reference

---

## 7. Case Study: 14-Iteration Feature

### 7.1 Context

Ryan Carson posted about shipping a feature using Ralph that went viral (690,000+ views). He then provided a detailed case study.

**Project:** Application with task management
**Stories:** 6 well-defined user stories
**Max iterations set:** 25
**Actual iterations:** 14
**Result:** Feature complete with minor edge cases found in manual testing

### 7.2 The PRD

The feature was decomposed into atomic stories following the sizing methodology:

```json
{
  "project": "TaskApp",
  "branchName": "ralph/task-filters",
  "userStories": [
    {
      "id": "US-001",
      "title": "Add task status enum",
      "priority": 1,
      "passes": false
    },
    {
      "id": "US-002",
      "title": "Add status column to tasks table",
      "priority": 2,
      "passes": false
    },
    {
      "id": "US-003",
      "title": "Create filter dropdown component",
      "priority": 3,
      "passes": false
    },
    {
      "id": "US-004",
      "title": "Wire filter to task list",
      "priority": 4,
      "passes": false
    },
    {
      "id": "US-005",
      "title": "Add visual indicator for status",
      "priority": 5,
      "passes": false
    },
    {
      "id": "US-006",
      "title": "Persist filter selection",
      "priority": 6,
      "passes": false
    }
  ]
}
```

### 7.3 How It Unfolded

**Iterations 1-2:** Schema and migration completed smoothly
**Iterations 3-5:** Filter component built with some iteration on styling
**Iterations 6-8:** Wiring required multiple attempts due to state management
**Iterations 9-11:** Visual indicators and edge cases
**Iterations 12-14:** Final polish, persistent selection, cleanup

### 7.4 What Worked

- **Atomic story sizing** - Each story was truly one context window
- **Typecheck in every criterion** - Caught issues early
- **Browser verification** - UI stories verified visually
- **Compounding learnings** - progress.txt accumulated patterns
- **AGENTS.md updates** - Future iterations benefited from documented patterns

### 7.5 Post-Run Findings

After Ralph completed, manual testing found:
- 2-3 edge case bugs (e.g., filter reset on page refresh)
- Minor styling inconsistency

These were quickly fixed with targeted Amp prompts (not full Ralph runs).

### 7.6 Key Lessons

1. **Story size was THE success factor** - Atomic decomposition enabled completion
2. **14 iterations for 6 stories** - Some stories took multiple iterations
3. **Learnings compounded** - Later stories implemented faster
4. **Manual testing still needed** - Ralph doesn't catch all edge cases
5. **Quick fixes after** - Edge cases fixable without full Ralph runs

---

## 8. Memory Architecture

### 8.1 The Two Memory Layers

Production Ralph uses two distinct memory systems:

**Long-term Memory (AGENTS.md):**
- Lives permanently in the codebase
- Read automatically by Amp/Claude
- Contains: API patterns, interdependencies, testing requirements
- Updated by Ralph with genuinely reusable knowledge
- Benefits both AI and human developers

**Short-term Memory (progress.txt):**
- Lives for the duration of a feature run
- Contains: iteration-by-iteration learnings
- Append-only to preserve history
- Archived when feature completes
- Scoped to current PRD

### 8.2 progress.txt Structure

```markdown
# Ralph Progress Log
Started: 2026-01-18

## Codebase Patterns
- Use IF NOT EXISTS for all migrations
- Export types from actions.ts files
- Use shadcn/ui for form components
- Always validate with Zod before DB operations

## Key Files
- db/schema.ts - Database schema definitions
- app/actions/ - Server actions
- components/ui/ - Shared UI components

---

## 2026-01-18 09:15 - US-001
- **Implemented:** Added tasks table schema with status enum
- **Files changed:** db/schema.ts, migrations/001_add_tasks.sql
- **Learnings:**
  - Use `sql<number>` template for numeric aggregations
  - Drizzle requires explicit enum definition

---

## 2026-01-18 09:32 - US-002
- **Implemented:** Added filter dropdown with All/Active/Complete options
- **Files changed:** components/FilterDropdown.tsx, app/tasks/page.tsx
- **Learnings:**
  - shadcn/ui Select component requires Portal for proper z-index
  - Filter state should live in URL params for persistence

---
```

### 8.3 AGENTS.md Pattern

```markdown
# agents.md

## Overview
Ralph is an autonomous AI agent loop that runs Amp repeatedly until all PRD items are complete.

## Core Files
- `ralph.sh` - Spawns fresh Amp instances in sequence
- `prompt.md` - Instructions given to each agent iteration
- `prd.json.example` - Product requirements format

## Patterns for This Codebase

### Database
- Always use IF NOT EXISTS for migrations
- Use `sql<number>` for numeric aggregations
- Define enums explicitly in schema.ts

### API
- Export types from all actions.ts files
- Validate with Zod before database operations
- Return { success, data, error } format consistently

### UI
- Use shadcn/ui for form components
- Filter state should persist in URL params
- Use dev-browser skill to verify visual changes

## Common Gotchas
- Drizzle migrations need explicit transaction wrapping
- Server actions must be async functions
- Client components can't import server modules directly
```

### 8.4 Archive System

When Ralph detects a branch change, it archives:

```
archive/
├── 2026-01-15-auth-feature/
│   ├── prd.json
│   └── progress.txt
├── 2026-01-17-task-filters/
│   ├── prd.json
│   └── progress.txt
└── 2026-01-18-user-profiles/
    ├── prd.json
    └── progress.txt
```

**Why This Matters:**
- Reference previous successful implementations
- Learn from past failures
- Pattern library grows over time
- Can ask Ralph to "review archives for similar features"

---

## 9. Skills System

### 9.1 The PRD Skill

Located at `skills/prd/SKILL.md`:

**Purpose:** Generate structured PRDs through guided conversation.

**Process:**
1. Receive feature description
2. Ask 3-5 clarifying questions with lettered options
3. Generate structured PRD
4. Save to `tasks/prd-[feature-name].md`

**Question Areas:**
- "What problem does this solve?"
- "What are the key actions?"
- "What should it NOT do?"
- "How do we know it's done?"

**Output Structure:**
- Introduction/Overview
- Goals (measurable)
- User Stories with acceptance criteria
- Functional Requirements (numbered)
- Non-Goals (explicit exclusions)
- Success Metrics

### 9.2 The Ralph Skill

Located at `skills/ralph/SKILL.md`:

**Purpose:** Convert PRD markdown to prd.json format.

**Critical Rule - Story Sizing:**
> "Each story must be completable in one Ralph iteration. The system spawns fresh instances per iteration with no memory of previous work, so oversized stories cause context overflow and broken code."

**Sizing Examples from Skill:**

Right-sized:
- Database column additions
- UI component updates
- Server action modifications
- Filter implementations

Too large (split these):
- "Build entire dashboard"
- "Add authentication"
- "Refactor the API"

**Dependency Ordering:**
1. Schema/database changes
2. Server actions/backend logic
3. UI components using backend
4. Dashboard/summary views

**Pre-Save Checklist:**
- [ ] Previous runs archived
- [ ] Stories are atomic
- [ ] Dependency ordering correct
- [ ] All stories include "Typecheck passes"
- [ ] UI stories include browser verification
- [ ] Criteria are verifiable
- [ ] No forward dependencies

### 9.3 The Dev-Browser Skill

Referenced in acceptance criteria for UI verification.

**Purpose:** Verify UI changes visually before marking stories complete.

**Usage:**
```
"Verify in browser using dev-browser skill"
```

**What It Does:**
- Launches browser to specified URL
- Takes screenshots for verification
- Enables visual confirmation of UI stories

---

## 10. Comparison

### 10.1 Production Ralph vs Basic Ralph

| Aspect | Basic Ralph | Production Ralph |
|--------|-------------|------------------|
| Task format | Free-form PROMPT.md | Structured prd.json |
| Memory | progress.txt only | progress.txt + AGENTS.md + archives |
| Story sizing | Implicit | Explicit methodology |
| Branch management | Manual | Automatic with archival |
| Verification | Optional | Required (typecheck + tests + browser) |
| Skills | None | PRD + Ralph + dev-browser |
| Learning | Per-run | Cross-run via archives |
| Documentation | Minimal | Comprehensive SKILL.md files |

**Choose Basic Ralph When:**
- Quick one-off tasks
- Experimenting with the pattern
- Simple single-file changes

**Choose Production Ralph When:**
- Multi-story features
- Team environments
- Need reproducibility
- Building production features

### 10.2 Production Ralph vs Marathon Ralph

| Aspect | Production Ralph | Marathon Ralph |
|--------|------------------|----------------|
| Creator | Ryan Carson | @stephen_rayner / @gruckion |
| Focus | Feature completion | Full SDLC compliance |
| Tests | Required in criteria | Generated automatically |
| E2E | Via dev-browser | Integrated E2E generation |
| Scope | Single feature | Entire applications |
| Complexity | Medium | Higher |

**Choose Production Ralph When:**
- You have existing test infrastructure
- Feature-focused development
- Want simpler setup

**Choose Marathon Ralph When:**
- Building from scratch
- Need comprehensive test generation
- Want full SDLC automation

### 10.3 When to Choose Production Ralph

**Best For:**
- Teams adopting Ralph for the first time
- Projects with existing test infrastructure
- Feature-level development (not greenfield)
- Need reproducible, documented process
- Want learning to compound over time

**Not Ideal For:**
- One-off tasks (use basic Ralph)
- Greenfield with no tests (use Marathon Ralph)
- Exploratory work (use HOTL Ralph)
- Security-critical code (needs human review)

---

## 11. Troubleshooting

### 11.1 Common Problems

| Problem | Cause | Solution |
|---------|-------|----------|
| Story takes multiple iterations | Story too large | Split into smaller stories (2-3 sentence rule) |
| Same story fails repeatedly | Impossible criteria or missing dependency | Review criteria, check if earlier story needed |
| Tests pass but feature broken | Incomplete acceptance criteria | Add specific, verifiable criteria |
| UI claimed complete but wrong | No browser verification | Add "Verify in browser using dev-browser skill" |
| progress.txt overwritten | Prompt doesn't say APPEND | Use explicit "APPEND (never overwrite)" in prompt |
| Ralph doesn't exit on completion | Completion signal not detected | Check grep for `<promise>COMPLETE</promise>` |
| Branch not created | Missing branchName in prd.json | Ensure branchName field is set |
| Archives not created | First run or same branch | Archive only triggers on branch change |
| Rate limiting | Too fast iteration | Increase sleep between iterations |
| Context overflow | Story too complex | Split story or use Amp auto-handoff |

### 11.2 Debugging Commands

```bash
# View story completion status
cat prd.json | jq '.userStories[] | {id, title, passes}'

# Review previous iteration insights
cat progress.txt | tail -50

# Check recent commits
git log --oneline -10

# View incomplete stories
cat prd.json | jq '.userStories[] | select(.passes == false) | .title'

# Count remaining stories
cat prd.json | jq '[.userStories[] | select(.passes == false)] | length'

# Validate JSON syntax
cat prd.json | jq . > /dev/null && echo "Valid JSON" || echo "Invalid JSON"

# Check branch status
git branch -v

# View archive contents
ls -la scripts/ralph/archive/
```

### 11.3 Recovery Procedures

**Story Stuck (3+ failures):**
1. Stop Ralph
2. Review progress.txt for pattern
3. Simplify acceptance criteria
4. Add notes field with context
5. Restart Ralph

**Bad Commit Made:**
```bash
# Undo last commit but keep changes
git reset --soft HEAD~1

# Or fully revert
git reset --hard HEAD~1
```

**prd.json Corrupted:**
```bash
# Restore from git
git checkout HEAD -- prd.json

# Or restore from archive
cp scripts/ralph/archive/2026-01-18-feature/prd.json scripts/ralph/prd.json
```

**Need to Restart Clean:**
```bash
# Archive current state manually
mkdir -p scripts/ralph/archive/$(date +%Y-%m-%d)-interrupted
cp scripts/ralph/prd.json scripts/ralph/archive/$(date +%Y-%m-%d)-interrupted/
cp scripts/ralph/progress.txt scripts/ralph/archive/$(date +%Y-%m-%d)-interrupted/

# Reset for fresh start
git checkout HEAD -- scripts/ralph/prd.json
echo "# Ralph Progress Log\nStarted: $(date)\n---" > scripts/ralph/progress.txt
```

---

## 12. Templates

### 12.1 prd.json Template

```json
{
  "project": "[PROJECT_NAME]",
  "branchName": "ralph/[feature-name-kebab-case]",
  "description": "[Brief description of the feature]",
  "userStories": [
    {
      "id": "US-001",
      "title": "[Brief task name]",
      "description": "As a [user type], I want [capability] so that [benefit]",
      "acceptanceCriteria": [
        "[Specific verifiable criterion 1]",
        "[Specific verifiable criterion 2]",
        "[Specific verifiable criterion 3]",
        "bun run typecheck passes",
        "bun run test passes"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    }
  ]
}
```

### 12.2 prompt.md Template

```markdown
# Ralph Agent Instructions

## Context
You are Ralph, an autonomous coding agent implementing user stories from prd.json.

## Workflow
1. Read prd.json - find highest priority story where passes: false
2. Read progress.txt - check Codebase Patterns section first
3. Verify correct git branch (create if needed)
4. Implement ONE story only
5. Run quality checks (typecheck, tests)
6. For UI: Verify in browser using dev-browser skill
7. Commit: `feat: [US-XXX] - [Title]`
8. Update prd.json: passes: true
9. APPEND to progress.txt (never overwrite)
10. Update relevant AGENTS.md with reusable patterns

## Progress Entry Format
---
## [Date] - [Story ID]
- **Implemented:** [What was done]
- **Files changed:** [List]
- **Learnings:** [Patterns/gotchas discovered]

## Stop Condition
If ALL stories have passes: true, respond:
<promise>COMPLETE</promise>

## Critical Rules
- ONE story per iteration
- NEVER skip quality checks
- ALWAYS verify UI in browser
- APPEND to progress.txt, never overwrite
```

### 12.3 Story Template

```json
{
  "id": "US-XXX",
  "title": "[Brief, specific title - 5-10 words]",
  "description": "As a [user type], I want [specific capability] so that [clear benefit]",
  "acceptanceCriteria": [
    "[Specific, verifiable criterion with exact expected behavior]",
    "[Another specific criterion - not 'works correctly']",
    "[Include expected values, states, or behaviors]",
    "bun run typecheck passes",
    "bun run test passes"
  ],
  "priority": [number - 1 is highest],
  "passes": false,
  "notes": ""
}
```

### 12.4 UI Story Template

```json
{
  "id": "US-XXX",
  "title": "[UI component or feature]",
  "description": "As a [user], I want [visual/interactive capability] so that [benefit]",
  "acceptanceCriteria": [
    "[Visual requirement - colors, layout, spacing]",
    "[Interactive requirement - clicks, hovers, states]",
    "[Data display requirement - what shows where]",
    "Verify in browser using dev-browser skill",
    "bun run typecheck passes"
  ],
  "priority": [number],
  "passes": false,
  "notes": ""
}
```

### 12.5 Database Story Template

```json
{
  "id": "US-XXX",
  "title": "[Table/column/migration name]",
  "description": "As a [developer/system], I need [data structure] to [purpose]",
  "acceptanceCriteria": [
    "[Exact column name, type, constraints]",
    "Migration uses IF NOT EXISTS for idempotency",
    "[Index requirements if any]",
    "[Default values if any]",
    "bun run typecheck passes",
    "bun run db:push succeeds"
  ],
  "priority": [number - usually 1-2 for schema],
  "passes": false,
  "notes": ""
}
```

---

## 13. Quick Reference

### 13.1 File Structure

```
project/
├── scripts/ralph/
│   ├── ralph.sh           # The loop script (executable)
│   ├── prompt.md          # Instructions for each iteration
│   ├── prd.json           # Task list with user stories
│   ├── progress.txt       # Append-only learnings
│   ├── .last-branch       # Branch tracking (auto-generated)
│   └── archive/           # Previous runs
│       └── YYYY-MM-DD-feature-name/
├── AGENTS.md              # Long-term codebase patterns
└── tasks/                 # PRD markdown files
    └── prd-feature-name.md
```

### 13.2 Essential Commands

```bash
# Start Ralph with 25 max iterations
./scripts/ralph/ralph.sh 25

# Check story status
cat prd.json | jq '.userStories[] | {id, title, passes}'

# View recent learnings
cat progress.txt | tail -30

# View incomplete stories only
cat prd.json | jq '.userStories[] | select(.passes == false) | .title'

# Count remaining
cat prd.json | jq '[.userStories[] | select(.passes == false)] | length'

# View archives
ls scripts/ralph/archive/
```

### 13.3 Story Sizing Checklist

- [ ] Can describe in 2-3 sentences
- [ ] Fits in one context window
- [ ] Has specific, verifiable criteria
- [ ] Includes typecheck requirement
- [ ] UI stories have browser verification
- [ ] Dependencies in correct order

### 13.4 Pre-Flight Checklist

- [ ] prd.json is valid JSON
- [ ] All stories have `passes: false`
- [ ] Stories ordered by dependency
- [ ] Branch name set in prd.json
- [ ] Quality checks work locally
- [ ] progress.txt initialized
- [ ] ralph.sh is executable

### 13.5 The Iron Rules

1. **One story = One iteration** - Never bigger
2. **Typecheck in every story** - Non-negotiable
3. **Browser verify UI** - Don't trust tests alone
4. **APPEND to progress.txt** - Never overwrite
5. **Update AGENTS.md** - For genuinely reusable patterns only
6. **Archive on branch change** - Automatic via script
7. **Set max iterations** - Safety net against runaway

---

## Sources

| Source | URL | Type |
|--------|-----|------|
| snarktank/ralph | github.com/snarktank/ralph | Primary repository |
| Ryan Carson Twitter | x.com/ryancarson | Author, case studies |
| Startup Ideas Podcast | Episode with Ryan Carson | Workflow explanation |
| Lalit Mishra Substack | lmishra.substack.com/p/ralph-autonomous-coding-with-claude | Implementation guide |
| Ralph TUI | ralph-tui.com/docs/cli/create-prd | PRD creation documentation |
| Claude Fast | claudefa.st/blog/guide/mechanics/ralph-wiggum-technique | Technical mechanics |
| DEV Community | dev.to/sivarampg/the-ralph-wiggum-approach | Comprehensive overview |
| Geoffrey Huntley | ghuntley.com/ralph | Original pattern |

---

## Tags

`#orchestration` `#ralph-wiggum` `#production-ralph` `#prd-driven` `#ryan-carson` `#snarktank` `#story-sizing` `#autonomous-agent` `#afk-coding` `#amp-integration` `#external-memory` `#verification-loops` `#level-3-4`

---

## Document Metadata

| Field | Value |
|-------|-------|
| Extraction ID | 026-ralph-production |
| Created | 2026-01-18 |
| Author | Agent B3-T1-5 |
| Primary Source | github.com/snarktank/ralph |
| Line Count | 800+ |
| Status | Complete |
| Reliability | High (well-documented public repo) |
| Complexity Level | 3-4 (PRD-Driven to Production Pipeline) |

---

*This extraction focuses specifically on Ryan Carson's production-ready implementation of the Ralph pattern. For the foundational pattern, see `ralph-complete-extraction.md`. For the complete mastery guide, see `synthesis/mastery-ralph-complete.md`.*

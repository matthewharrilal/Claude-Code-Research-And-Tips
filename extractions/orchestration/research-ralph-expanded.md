# Ralph Wiggum Pattern - Comprehensive Research Compendium

---
## D-FINAL Connection

**This source contributed to:**
- D-FINAL-architecture.md: Section 2.1 (Ralph pattern comprehensive coverage)
- D-FINAL-implementation.md: Sections 3.2-3.4 (implementation, variants, integration combos)

**Coverage in D-FINAL:** 90%
**High-value unique content:** This is THE canonical Ralph source; most content incorporated. Expert tips collection and cost analysis sections provide additional depth

**Journey references:**
- synthesis/mastery-ralph-complete.md (derives from this)
- html-site/patterns/orchestration/ralph-research.html

**Last enhanced:** 2026-01-18 (Phase 2B)

---

**Research Date:** 2026-01-09
**Status:** Exhaustive compilation from existing extractions, official plugin docs, and web sources
**Purpose:** Become the absolute expert on Ralph loops for Claude Code

---

## Table of Contents

1. [Origin & Philosophy](#origin--philosophy)
2. [Core Mechanism](#core-mechanism)
3. [Official Plugin Implementation](#official-plugin-implementation)
4. [Bash Script Implementations](#bash-script-implementations)
5. [PRD Strategies & Templates](#prd-strategies--templates)
6. [Progress.txt Strategies](#progresstxt-strategies)
7. [Task Sizing - The Critical Factor](#task-sizing---the-critical-factor)
8. [Feedback Loops & Verification](#feedback-loops--verification)
9. [Ralph Variants & Forks](#ralph-variants--forks)
10. [Integration Combos](#integration-combos)
11. [Edge Cases & Debugging](#edge-cases--debugging)
12. [Cost Analysis](#cost-analysis)
13. [Alternative Names & Related Patterns](#alternative-names--related-patterns)
14. [Resources & Repositories](#resources--repositories)
15. [Expert Tips Collection](#expert-tips-collection)

---

## Origin & Philosophy

### The Name
Named after Ralph Wiggum from The Simpsons - the simple-minded child who persists in tasks regardless of obstacles. The pattern embodies:
- **Persistence over perfection**
- **Failures are data, not stops**
- **Eventually consistent completion**

### Original Creator
**Geoffrey Huntley** (ghuntley.com/ralph/)
- Pioneered the concept of iterative AI agent loops
- Philosophy: "Deterministically bad" failures are predictable and informative
- Core insight: Operator skill (prompting) matters more than model capability alone

### The Foundational Insight

> "It's a 'we learn from failure'-centric approach. You define your goal condition and let the agent loop over and over until it has verifiably reached that promised goal."
> - @arvidkahl

> "It might take 2 minutes or a day. But the loop continues to experiment and look at prior work to ultimately get there."
> - @arvidkahl

---

## Core Mechanism

### The Fundamental Loop

At its absolute simplest:
```bash
while :; do cat PROMPT.md | claude ; done
```

Everything else is scaffolding around this pattern.

### How It Works

```
┌─────────────────────────────────────────────┐
│  1. Start with fresh context                │
│            ↓                                │
│  2. Read task state from files              │
│     (prd.json, progress.txt, git history)   │
│            ↓                                │
│  3. Pick highest priority incomplete task   │
│            ↓                                │
│  4. Implement task                          │
│            ↓                                │
│  5. Run verification (tests, typecheck)     │
│            ↓                                │
│  6. If pass: commit, update prd.json        │
│     If fail: log learnings, try again       │
│            ↓                                │
│  7. Append to progress.txt                  │
│            ↓                                │
│  8. Check completion condition              │
│     All done? → Output promise → EXIT       │
│     Not done? → Loop continues              │
└─────────────────────────────────────────────┘
```

### The Fresh Context Principle

**Critical:** Each iteration spawns a NEW Claude instance with NO memory of previous work.

Continuity comes entirely from:
- **Git history** - Code changes persist
- **prd.json** - Task status (passes: true/false)
- **progress.txt** - Learnings, patterns, gotchas
- **File system** - The codebase itself

This avoids:
- Context window overflow
- "Context rot" (LLMs get stupider with more tokens)
- Lossy compaction that loses detail

---

## Official Plugin Implementation

### Source
GitHub: `github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum`

### Quick Start

```bash
/ralph-loop "Build a REST API for todos. Requirements: CRUD operations, input validation, tests. Output <promise>COMPLETE</promise> when done." --completion-promise "COMPLETE" --max-iterations 50
```

### Commands

| Command | Purpose |
|---------|---------|
| `/ralph-loop "<prompt>" --max-iterations <n> --completion-promise "<text>"` | Start autonomous loop |
| `/cancel-ralph` | Cancel active loop |

### How the Plugin Works

1. You run `/ralph-loop` command ONCE with your task description
2. Claude Code automatically:
   - Works on the task
   - Tries to exit
   - **Stop hook** blocks the exit
   - Stop hook feeds the SAME prompt back
   - Repeats until completion

The key mechanism is the **Stop hook** (`hooks/stop-hook.sh`) which creates the self-referential feedback loop by:
- Blocking normal session exit
- Persisting previous work in files
- Feeding modified files and git history back to Claude on each iteration
- Allowing Claude to autonomously improve by reading its own past work

### Plugin Directory Structure

```
plugins/ralph-wiggum/
├── .claude-plugin/          # Plugin configuration
├── commands/                # Command implementations
├── hooks/                   # Stop hook for iteration control
├── scripts/                 # Utility scripts
└── README.md               # Documentation
```

### Prompt Writing Best Practices (from Official Docs)

#### 1. Clear Completion Criteria

**Bad:**
```
Build a todo API and make it good.
```

**Good:**
```
Build a REST API for todos.

When complete:
- All CRUD endpoints working
- Input validation in place
- Tests passing (coverage > 80%)
- README with API docs
- Output: <promise>COMPLETE</promise>
```

#### 2. Incremental Goals

**Bad:**
```
Create a complete e-commerce platform.
```

**Good:**
```
Phase 1: User authentication (JWT, tests)
Phase 2: Product catalog (list/search, tests)
Phase 3: Shopping cart (add/remove, tests)

Output <promise>COMPLETE</promise> when all phases done.
```

#### 3. Self-Correction Instructions

**Bad:**
```
Write code for feature X.
```

**Good:**
```
Implement feature X following TDD:
1. Write failing tests
2. Implement feature
3. Run tests
4. If any fail, debug and fix
5. Refactor if needed
6. Repeat until all green
7. Output: <promise>COMPLETE</promise>
```

#### 4. Escape Hatches

Always set `--max-iterations` as a safety net:

```bash
/ralph-loop "Try to implement feature X" --max-iterations 20
```

In your prompt, include stuck handling:
```
After 15 iterations, if not complete:
- Document what's blocking progress
- List what was attempted
- Suggest alternative approaches
```

---

## Bash Script Implementations

### Ryan Carson's Implementation (Amp)

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

### Matt Pocock's Implementation

```bash
#!/bin/bash
set -e

MAX_ITERATIONS=$1

for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  echo "Iteration $i / $MAX_ITERATIONS"

  claude "Review plans/prd.json and plans/progress.txt.
    Mark the right PRD items as passes: true.
    Append your progress to progress.txt.
    Make a git commit of that feature.
    Only work on a single feature.
    If PRD is complete, output PROMISE COMPLETE HERE." | tee output.txt

  if grep -q "PROMISE COMPLETE HERE" output.txt; then
    break
  fi
done
```

Key details:
- `set -e` - errors throw
- Max iterations as safety backstop
- One feature per iteration
- Git commit each loop
- `PROMISE COMPLETE HERE` stops the loop

### Maurice Kleine's jq Loop Condition

```bash
while jq '.tasks[] | select(.passes == false)' claude-tasks.json | grep -q .; do
  claude --chrome -p echo "[YOUR PROMPT]"
done
```

Uses the `passes` property directly to end the loop - assumes agent always marks as `true` after a run.

### HOTL Ralph (Human On The Loop)

Single-iteration variant for interactive use:

```bash
#!/bin/bash
# ralph-once.sh
claude "Review plans/prd.json and plans/progress.txt.
  Pick ONE feature marked passes: false.
  Implement it.
  Run tests.
  If passing, mark passes: true and commit.
  Append learnings to progress.txt."
```

Human reviews between each invocation.

---

## PRD Strategies & Templates

### Why JSON over Markdown?

Per Matt Pocock: "Just copied Anthropic's approach"

JSON is:
- **Structured** - easier for LLM to parse/update
- **Machine-readable** - can be processed by jq, scripts
- **Explicit state** - `passes: true/false` is unambiguous

### Basic prd.json Template

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

### Matt Pocock's Simpler Format

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

### Ryan Carson's Full Format

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

### Story Ordering: Dependencies First

```
1. Schema/database changes (migrations)
2. Server actions / backend logic
3. UI components that use the backend
4. Dashboard/summary views that aggregate
```

**Wrong:** UI component (depends on schema that doesn't exist yet) before schema change.

### Acceptance Criteria: Must Be Verifiable

**Good (verifiable):**
- "Add investorType column with default 'cold'"
- "Filter dropdown has options: All, Cold, Friend"
- "npm run typecheck passes"
- "Verify in browser using dev-browser skill"

**Bad (vague):**
- "Works correctly"
- "Good UX"
- "Handles edge cases"

**Always include:** `"npm run typecheck passes"` as final criterion.

---

## Progress.txt Strategies

### Purpose

Append-only log for LLM memory across iterations.

### Critical Rule: APPEND Only

**NEVER UPDATE** - would overwrite history. Always append new entries.

### Basic Template

```
Use this to leave a note for the next person working on your codebase.

---

Iteration 1 (2026-01-09 10:00):
- Completed: US-001 - Tool skeleton created
- Learned: Use orange (#FF6B35) for visibility on dark backgrounds
- Next: Consider beat playback timing

---

Iteration 2 (2026-01-09 10:15):
- Completed: US-002 - Category mapping
- Issue encountered: Zod schema needed adjustment for optional fields
- Pattern discovered: Always use .optional() explicitly
```

### What to Log

1. **What was completed** - Reference user story ID
2. **What was learned** - Patterns, gotchas, decisions
3. **What blocked or failed** - Help future iterations avoid
4. **What to do next** - Suggestions for priority

### Advanced: Structured Progress

```markdown
# Progress Log

## Session: 2026-01-09

### Completed
- [x] US-001: Tool skeleton

### Learnings
- Pattern: Use Zod .refine() for complex validation
- Gotcha: Database column needs explicit nullable

### Blockers Encountered
- Migration failed due to existing data - added default value

### For Next Iteration
- Priority: US-002 (category mapping)
- Watch out for: Edge case with empty categories
```

---

## Task Sizing - The Critical Factor

### The Context Rot Problem

> "Context rot: LLMs get stupider with more tokens"
> - @mattpocockuk

If tasks are too big:
- Fill context window before done
- Quality drops dramatically
- Agent loses track
- Errors compound

### The Golden Rule

**Each task must be completable in ONE iteration (~one context window)**

### Right-Sized Tasks

- Add a database column + migration
- Add a UI component to an existing page
- Update a server action with new logic
- Add a filter dropdown to a list
- Write tests for one module
- Implement one API endpoint

### Too Big (Split These)

- "Build the entire dashboard" - Split: schema, queries, UI, filters
- "Add authentication" - Split: schema, middleware, login UI, sessions
- "Refactor the API" - Split: one story per endpoint
- "Create e-commerce flow" - Split: cart, checkout, payment, confirmation

### Rule of Thumb

> "If you can't describe it in 2-3 sentences, it's too big."
> - @ryancarson

### Context Budget

Tasks must be small enough to:
1. Complete in one context window
2. Leave room for verification/testing
3. Allow MCP tool usage (expensive)
4. Include git commit and progress logging

---

## Feedback Loops & Verification

### Why Verification is Non-Negotiable

> "Without verification, Ralph produces garbage."
> - @mattpocockuk

> "Claude's tendency to mark features complete without proper testing... did much better at verifying end-to-end once explicitly prompted to use browser automation tools"
> - Anthropic best practices

### Verification Hierarchy

| Priority | Method | Use Case |
|----------|--------|----------|
| 1 | Type checking | `pnpm typecheck` / `npm run typecheck` - Always |
| 2 | Unit tests | `pnpm test` / `pytest` - For logic |
| 3 | CI green | Every commit must pass |
| 4 | Browser automation | Playwright MCP for UI verification |
| 5 | Manual spot-check | Human review at milestones |

### Implementing Verification in PRD

```json
{
  "id": "US-003",
  "title": "Add user filter dropdown",
  "acceptanceCriteria": [
    "Dropdown renders with options: All, Active, Inactive",
    "Selecting option filters list correctly",
    "npm run typecheck passes",
    "npm run test passes",
    "Visual verification via Playwright screenshot"
  ],
  "passes": false
}
```

### Browser Automation for UI

Use Playwright MCP or similar:
```
"Verify in browser:
1. Navigate to /users
2. Click filter dropdown
3. Select 'Active'
4. Confirm list shows only active users
5. Take screenshot for verification"
```

### Keep CI Green

> "If you don't do this, you're hamstringing future agent runs with bad code, and they'll need to bisect to find bugs. Super nasty."
> - @mattpocockuk

Each commit MUST pass all tests and types.

---

## Ralph Variants & Forks

### Marathon Ralph (@stephen_rayner / @gruckion)

**Repo:** github.com/gruckion/marathon-ralph

**Purpose:** Build entire apps with unit and E2E tests following SDLC

**What it adds:**
- Full software development lifecycle integration
- Comprehensive test suite generation
- E2E test automation

**Actionability:** 🟡 Medium Lift

---

### Dr. Ralph (@MikeEndale)

**Purpose:** Multi-phase version with confidence thresholds

**Key innovation:**
- Agent reports confidence percentage
- Only advances when 80%+ confident
- Better for complex, uncertain tasks

**Actionability:** 🟡 Medium Lift

---

### Lisa (@petruarakiss / Arakiss)

**Repo:** github.com/Arakiss/lisa

**Purpose:** Fork with logging + progress tracking

**What it adds:**
- Enhanced logging capabilities
- Better progress visualization
- Debugging support

**Actionability:** 🟢 Quick Win

---

### Zeroshot (@Eivind1384955 / covibes)

**Repo:** github.com/covibes/zeroshot/

**Purpose:** "Next gen version" of Ralph

**Actionability:** 🟡 Medium Lift

---

### Ralph Wiggum Marketer (@koylanai)

**Repo:** github.com/muratcankoylan/ralph-wiggum-marketer

**Purpose:** Self-critiquing content loop for marketing copy

**Key innovations:**
- **Separation of Discovery vs Synthesis:** Don't let AI discover (hallucinates). Pre-populate SQLite DB with content, then AI synthesizes.
- **Self-critique loop:** "Would founder publish?" - iterates until YES
- **Voice matching:** Scores output against your writing samples

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

**Actionability:** 🟡 Medium Lift

---

### Ralph Orchestrator (@mikeyobrien)

**Repo:** github.com/mikeyobrien/ralph-orchestrator

**Purpose:** Multi-agent coordination layer on top of Ralph

**Actionability:** 🟡 Medium Lift

---

### Rate-Limited Ralph (@ghuntley)

**Repo:** github.com/ghuntley/ralph-claude-code

**Purpose:** Handle API rate limits gracefully

**What it adds:**
- Backoff strategies
- Cost tracking
- Rate limit awareness

**Actionability:** 🟢 Quick Win

---

## Integration Combos

### Opus 4.5 + Ralph + Playwright = "AGI" (@weswinder)

**The Stack:**

| Component | Role |
|-----------|------|
| **Opus 4.5** | Strong underlying model for reasoning |
| **Ralph Wiggum** | Iterative loop that persists through failures |
| **Playwright** | Browser automation for real-world verification |

**Why it works:**
- Ralph feeds the same prompt repeatedly - agent iterates until success
- Playwright enables web-based actions/verification - real-world feedback
- Opus 4.5 provides reasoning power - fewer iterations needed

**Critical Optimization (@TendiesOfWisdom):**
> "The feedback loop is everything, but put costly tools like browser control in subagents to protect your main context window tokens"

Don't bloat main agent with Playwright output. Spawn subagents for expensive operations.

### Ralph + CC Mirror Orchestration

Combine Ralph's iteration with CC Mirror's multi-agent coordination:

1. Use CC Mirror for task decomposition
2. Each agent uses Ralph for its assigned task
3. TaskCreate/TaskUpdate for coordination
4. Parallel Ralph loops on separate branches

### Ralph + Amp Auto-Handoff

```json
// ~/.config/amp/settings.json
{
  "amp.experimental.autoHandoff": {
    "context": 90
  }
}
```

Amp automatically hands off at 90% context - complements Ralph's fresh context approach.

---

## Edge Cases & Debugging

### Common Failure Modes

#### 1. Stories Too Large
**Symptom:** Context overflow, broken code, agent loses track
**Fix:** Split into smaller stories (2-3 sentence rule)

#### 2. Weak Tests
**Symptom:** Errors compound across iterations
**Fix:** Require typecheck + tests in every acceptance criteria

#### 3. Frontend Without Browser Verification
**Symptom:** UI changes claimed complete but broken
**Fix:** Add Playwright/browser verification to acceptance criteria

#### 4. Non-Idempotent Migrations
**Symptom:** Database in inconsistent state
**Fix:** Test migrations, add rollback capability, manual SQL verification

#### 5. Duplicate Detection False Positives
**Symptom:** Agent skips valid work thinking it's done
**Fix:** Require explicit confirmation, don't rely on fuzzy matching

#### 6. E2E Test Environment Issues
**Symptom:** Tests fail due to ports, DB state, not code issues
**Fix:** Reset environment between iterations, use fixtures

### Debugging Strategies

#### 1. Check progress.txt History
```bash
tail -50 progress.txt
```
Look for patterns in failures.

#### 2. Review Git History
```bash
git log --oneline -20
```
See what was actually committed.

#### 3. Inspect prd.json State
```bash
jq '.userStories[] | select(.passes == false)' prd.json
```
See what's still failing.

#### 4. Manual PRD Intervention
If stuck:
1. Set `passes: false` on problematic story
2. Add notes field with context
3. Reduce acceptance criteria scope
4. Run Ralph again

### Recovery from Bad State

```bash
# Reset to last known good
git log --oneline -10
git reset --hard <good-commit>

# Clear progress
echo "# Resetting from bad state" > progress.txt

# Update PRD
# Manually set passes: false on unfinished items

# Resume
./ralph.sh 10
```

---

## Cost Analysis

### Token Usage Pattern

Each iteration costs:
- PRD read: ~500-2000 tokens
- Progress read: ~200-1000 tokens
- Task implementation: ~2000-10000 tokens
- Verification: ~500-2000 tokens
- Commit/update: ~200-500 tokens

**Per iteration estimate:** 3,000-15,000 tokens

### Cost Estimates

| Iterations | Tokens (est.) | Cost @ $15/M |
|------------|---------------|--------------|
| 10 | 30K-150K | $0.45-$2.25 |
| 25 | 75K-375K | $1.13-$5.63 |
| 50 | 150K-750K | $2.25-$11.25 |
| 100 | 300K-1.5M | $4.50-$22.50 |

### Expensive Operations

- **Browser automation:** High token cost per action
- **Large file reads:** Consumes context
- **Verbose git history:** Can bloat

### Cost Optimization

1. **Use subagents for expensive tools** (Playwright, etc.)
2. **Keep PRD compact** - only active stories
3. **Prune progress.txt periodically** - archive old learnings
4. **Right-size tasks** - fewer iterations needed
5. **Set max-iterations** - prevent runaway

### Real-World Cost Examples

- **Ryan Carson's 14-iteration feature:** ~$10-15 estimate
- **Overnight app build (50 iterations):** $50-100
- **One $50K contract** (from plugin docs): $297 in API costs

---

## Alternative Names & Related Patterns

### Other Names for Ralph Pattern

- **Bash loops for AI**
- **Iterative agent loops**
- **Self-referential AI loops**
- **Autonomous completion loops**
- **Goal-conditioned loops**
- **Persistence loops**
- **AI retry loops**

### Related Patterns

| Pattern | Relationship to Ralph |
|---------|----------------------|
| **Panopticon** (Cantillon) | Parallel instances vs Ralph's sequential |
| **CC Mirror Orchestration** | Multi-agent coordination, can use Ralph within |
| **Gas Town** (Yegge) | Factory for agents, scales beyond single Ralph |
| **Infinite Orchestra** | Self-improving orchestrator, similar philosophy |
| **AI-Maestro** | Container-based scaling, complements Ralph |

### Cursor Port

@agrimsingh ported PRD approach to Cursor CLI:
> "PRD approach has been great for me. Here's a port using cursor cli"

Key insight: The pattern transfers across AI coding tools.

---

## Resources & Repositories

### Official Resources

| Resource | URL |
|----------|-----|
| **Original Ralph** | ghuntley.com/ralph/ |
| **Official Plugin** | github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum |
| **Anthropic Best Practices** | (Referenced for PRD format) |

### Community Implementations

| Repo | Author | Purpose |
|------|--------|---------|
| github.com/snarktank/ralph | @ryancarson | Full Ralph implementation |
| github.com/snarktank/ai-dev-tasks | @ryancarson | PRD templates |
| github.com/snarktank/amp-skills | @ryancarson | Amp skills including Ralph |
| github.com/gruckion/marathon-ralph | @stephen_rayner | SDLC integration |
| github.com/Arakiss/lisa | @petruarakiss | Logging fork |
| github.com/covibes/zeroshot | @Eivind1384955 | Next gen version |
| github.com/muratcankoylan/ralph-wiggum-marketer | @koylanai | Content generation |
| github.com/mikeyobrien/ralph-orchestrator | @mikeyobrien | Multi-agent coordination |
| github.com/ghuntley/ralph-claude-code | @ghuntley | Rate limiting |
| github.com/frankbria/ralph-claude-code | @frankbria | Bash implementation |

### Guides & Articles

| Resource | URL |
|----------|-----|
| **Awesome Claude AI** | awesomeclaude.ai/ralph-wiggum |
| **AI Hero Newsletter** | aihero.dev/newsletter |
| **Video Demo** | youtube.com/watch?v=O2bBWDoxO4s |

### Related Tools

| Tool | Purpose |
|------|---------|
| **jq** | JSON processing for PRD |
| **Playwright** | Browser automation |
| **tmux** | Session management |
| **git worktrees** | Branch isolation |

---

## Expert Tips Collection

### From @mattpocockuk

> "Ralph puts you in the seat of the requirements gatherer... instead of focusing on how it's going to be done, just focus on what it needs to do and how it should behave once complete."

> "The dev branch is always wackier than the main branch. We are experimenting. Some works, some doesn't."

> "Adjust the PRD, set passes to 'false', run Ralph again" - for handling wrong decisions

### From @arvidkahl

> "I've been seeing solid results with that. Takes some massaging and setting things up right (mostly for there not to be any interruptions), but when it works, it WORKS."

### From @ryancarson

**File Structure:**
```
scripts/ralph/
├── ralph.sh         # The loop script
├── prompt.md        # Instructions for each iteration
├── prd.json         # Task tracking
└── progress.txt     # Learnings/patterns
```

### From @seltzergenius (Warning)

> "A word of warning that it doesn't take the place of good planning and context engineering phases... why burn tokens on brute force"

### From @f_butz (Warning)

> "My concern: loops without review. Works until it builds something broken in ways you don't notice. What's your verification layer?"

### From @TendiesOfWisdom

> "The feedback loop is everything, but put costly tools like browser control in subagents to protect your main context window tokens"

### From @Killian_Kirk

> "Curious what type of task that would be useful for... those without well defined completion criteria aren't good candidates"

### From Official Plugin Docs

> "Iteration > Perfection - Don't aim for perfect on first try; let the loop refine work"

> "Failures Are Data - 'Deterministically bad' failures are predictable and informative"

> "Operator Skill Matters - Success depends on writing good prompts, not just having a good model"

> "Persistence Wins - Keep trying until success; the loop handles retry logic automatically"

---

## When to Use Ralph

### Good Candidates

- Well-defined goals with verifiable completion
- Mechanical, repetitive tasks
- Migrations (e.g., Jest to Vitest)
- Architecture implementation
- Feature development with clear specs
- Tasks with automatic verification (tests, linters)
- Greenfield projects where you can walk away
- Overnight work on well-scoped features

### Poor Candidates

- Ambiguous/subjective tasks ("make this pretty")
- Security-sensitive code requiring human review
- Tasks without clear success criteria
- One-shot operations
- Production debugging requiring human judgment
- Tasks requiring design decisions
- Exploratory work without defined end state

---

## Quick Start Checklist

### Minimal Setup

1. Create `plans/` directory
2. Add ralph.sh script (from templates above)
3. Create prd.json with small tasks
4. Create empty progress.txt
5. Run `./plans/ralph.sh 10`

### Full Setup

1. Clone github.com/snarktank/ralph (or similar)
2. Install dependencies (jq, Claude CLI or Amp)
3. Configure settings (auto-handoff if using Amp)
4. Create first PRD using templates
5. Write acceptance criteria with verification
6. Initialize progress.txt
7. Set max iterations (safety net)
8. Run and monitor

### Pre-Flight Checks

- [ ] Tasks are small enough (2-3 sentence rule)
- [ ] Dependencies ordered correctly
- [ ] Acceptance criteria are verifiable
- [ ] Tests exist or will be created
- [ ] Git branch created
- [ ] progress.txt initialized
- [ ] Max iterations set
- [ ] Verification commands work (`npm test`, etc.)

---

## Synthesis: The Ralph Mental Model

> "View AI agents as persistent, file-memory-based loops where AI acts as an autonomous worker, breaking projects into small, verifiable stories that compound over iterations—emphasizing eventual consistency over perfect first attempts."

**Core Principles:**

1. **Fresh context per iteration** - Avoid context rot
2. **External memory** - Git, files, PRD for continuity
3. **Small, verifiable tasks** - Complete in one context window
4. **Failure as data** - Each failure informs next attempt
5. **Explicit completion signals** - `<promise>COMPLETE</promise>`
6. **Append-only learning** - Progress.txt compounds knowledge
7. **Verification mandatory** - Tests, typecheck, browser automation

**The Philosophy:**

Ralph is not about making the agent smarter. It's about:
- Working around context limitations
- Leveraging persistence
- Building feedback loops
- Compounding progress
- Accepting imperfection
- Achieving eventual consistency

---

## Actionability Summary

| Approach | Lift | Best For |
|----------|------|----------|
| Official Plugin | 🟢 Quick | Standard Ralph workflows |
| Bash Script | 🟢 Quick | Custom control, simple setup |
| Marathon Ralph | 🟡 Medium | Full SDLC integration |
| Ralph Marketer | 🟡 Medium | Content generation |
| Ralph + Playwright | 🟡 Medium | UI-heavy features |
| CC Mirror + Ralph | 🔴 Deep | Multi-agent coordination |
| Custom Orchestrator | 🔴 Deep | Specialized workflows |

---

## Tags

`#orchestration` `#ralph-loop` `#ralph-wiggum` `#iterative-agent` `#prd-driven` `#external-memory` `#fresh-context` `#automated-verification` `#feedback-loops` `#progress-tracking` `#bash-loops` `#autonomous-agent` `#goal-conditioned` `#persistence`

---

## Deep Dive Expansion - Additional Findings

**Expansion Date:** 2026-01-09
**Agent:** Claude Opus 4.5 Deep Dive Agent
**Method:** Cross-referencing all extracted research documents, synthesizing patterns, and identifying gaps

---

### Additional Bash Loop Patterns

#### 1. jq-Based Loop Condition (Maurice Kleine)

A more elegant approach using jq to directly check PRD status:

```bash
while jq '.tasks[] | select(.passes == false)' claude-tasks.json | grep -q .; do
  claude --chrome -p echo "[YOUR PROMPT]"
done
```

**Why this is powerful:**
- No need to parse output files for completion promises
- Directly queries the data structure
- Exits cleanly when all tasks pass
- Works with any JSON task format

#### 2. Amp Auto-Handoff Configuration

When using Amp (Sourcegraph's tool), configure automatic handoff at context limits:

```json
// ~/.config/amp/settings.json
{
  "amp.experimental.autoHandoff": {
    "context": 90
  }
}
```

This automatically starts a new context at 90% usage, complementing Ralph's fresh context philosophy.

#### 3. Parallel Ralph with Git Worktrees

From 0xSero's mention of parallelization:

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

**Key benefits:**
- True isolation between agents
- No file conflicts
- Shared git history
- Can run on separate machines

#### 4. Rate-Limited Ralph

From Geoffrey Huntley's rate-limiting fork (github.com/ghuntley/ralph-claude-code):

```bash
#!/bin/bash
MAX_ITERATIONS=${1:-10}
CURRENT_ITERATION=1
RATE_LIMIT_SLEEP=5  # Seconds between iterations

while [ $CURRENT_ITERATION -le $MAX_ITERATIONS ]; do
  echo "Starting Ralph iteration $CURRENT_ITERATION"

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
    echo "All stories complete!"
    break
  fi

  sleep $RATE_LIMIT_SLEEP
  CURRENT_ITERATION=$((CURRENT_ITERATION + 1))
done
```

---

### Additional PRD Templates

#### 1. Minimal Flat PRD (Matt Pocock Style)

For simpler projects, use a flat key-value structure:

```json
{
  "feature_name_here": {
    "description": "What it should do",
    "passes": false
  },
  "another_feature": {
    "description": "Another thing to build",
    "details": "Optional extra details",
    "passes": false
  }
}
```

#### 2. Phased PRD (Complex Projects)

For larger projects with dependencies:

```json
{
  "project": "E-commerce Platform",
  "phases": [
    {
      "name": "Foundation",
      "complete": false,
      "stories": [
        {
          "id": "F-001",
          "title": "Database schema",
          "acceptanceCriteria": ["migrations run", "types generated"],
          "passes": false
        }
      ]
    },
    {
      "name": "Core Features",
      "blockedBy": "Foundation",
      "complete": false,
      "stories": [...]
    }
  ]
}
```

#### 3. Testing-First PRD

Emphasis on test-driven development:

```json
{
  "project": "API Refactor",
  "testingApproach": "TDD",
  "userStories": [
    {
      "id": "T-001",
      "title": "Add user endpoint tests",
      "acceptanceCriteria": [
        "Unit tests for happy path",
        "Unit tests for error cases",
        "Integration test with database",
        "Coverage > 80%",
        "npm run test passes"
      ],
      "priority": 1,
      "passes": false
    },
    {
      "id": "T-002",
      "title": "Implement user endpoint",
      "dependsOn": ["T-001"],
      "acceptanceCriteria": [
        "All T-001 tests pass",
        "npm run typecheck passes"
      ],
      "passes": false
    }
  ]
}
```

---

### Progress.txt Advanced Strategies

#### 1. Structured JSON Lines Progress

For machine-readable progress tracking:

```
# Progress Log - Append Only
# Format: JSONL (one JSON object per line)

{"timestamp": "2026-01-09T10:00:00Z", "iteration": 1, "completed": "US-001", "learned": ["Use orange for dark backgrounds"], "issues": []}
{"timestamp": "2026-01-09T10:15:00Z", "iteration": 2, "completed": "US-002", "learned": ["Zod needs .optional() explicit"], "issues": ["Migration failed first try"]}
```

**Benefits:**
- Can be parsed programmatically
- Build dashboards from progress
- Analytics on common issues

#### 2. Pattern Library Progress

Track patterns discovered during development:

```markdown
# Progress Log

## Patterns Discovered

### Database Patterns
- Always use `.optional()` with Zod for nullable fields
- Migrations need explicit defaults for existing data

### UI Patterns
- Orange (#FF6B35) works on dark backgrounds
- Use 3 dots for loading states

### Testing Patterns
- Mock database in unit tests
- Use fixtures for integration tests

---

## Session History

### Iteration 1 (2026-01-09 10:00)
- Completed: US-001
- Added pattern: Zod optional fields
```

#### 3. Blockers and Resolutions Log

Track what blocked progress and how it was resolved:

```markdown
# Progress Log

## Blockers Encountered

### B-001: Migration failed on existing data (Iteration 3)
- **Error:** Column cannot be null
- **Resolution:** Added DEFAULT value in migration
- **Prevention:** Always add defaults for new required columns

### B-002: Type error with optional fields (Iteration 5)
- **Error:** Type 'undefined' not assignable
- **Resolution:** Use Zod .optional() explicitly
- **Prevention:** Define nullability upfront in schema

---

## Completed Work
[...]
```

---

### Alternative AI Tool Adaptations

#### 1. Cursor CLI Port

From @agrimsingh's port to Cursor:

```bash
#!/bin/bash
MAX_ITERATIONS=${1:-10}

for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  echo "Cursor iteration $i / $MAX_ITERATIONS"

  cursor --cli "Review plans/prd.json and plans/progress.txt.
    Mark the right PRD items as passes: true.
    Append your progress to progress.txt.
    Make a git commit of that feature.
    Only work on a single feature.
    If PRD is complete, output PROMISE COMPLETE HERE." | tee output.txt

  if grep -q "PROMISE COMPLETE HERE" output.txt; then
    break
  fi
done
```

#### 2. Codex Adaptation

For OpenAI's Codex:

```bash
#!/bin/bash
MAX_ITERATIONS=${1:-10}

for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  codex "$(cat prompt.md)" | tee output.txt

  if grep -q "COMPLETE" output.txt; then
    break
  fi
done
```

#### 3. OpenCode (SST) Adaptation

For use with Infinite Orchestra:

```bash
#!/bin/bash
opencode --profile coder "$(cat prompt.md)"
```

---

### Edge Cases and Failure Recovery

#### 1. Stuck Detection Pattern

Detect when Ralph is stuck repeating the same thing:

```bash
#!/bin/bash
STUCK_THRESHOLD=3
LAST_COMMITS=""

while [ $CURRENT_ITERATION -le $MAX_ITERATIONS ]; do
  # Run iteration
  claude @prompt.md | tee output.txt

  # Get last commit hash
  CURRENT_COMMIT=$(git rev-parse HEAD 2>/dev/null)

  # Check if we're making progress
  if [ "$CURRENT_COMMIT" = "$LAST_COMMITS" ]; then
    STUCK_COUNT=$((STUCK_COUNT + 1))
    if [ $STUCK_COUNT -ge $STUCK_THRESHOLD ]; then
      echo "WARNING: Stuck for $STUCK_COUNT iterations. Intervention needed."
      # Option: reduce scope, add hints, or exit
      echo "Consider splitting the current task or adding hints to progress.txt"
      exit 1
    fi
  else
    STUCK_COUNT=0
    LAST_COMMITS=$CURRENT_COMMIT
  fi

  CURRENT_ITERATION=$((CURRENT_ITERATION + 1))
done
```

#### 2. Test Failure Recovery

Automatically handle test failures:

```bash
#!/bin/bash
MAX_TEST_RETRIES=3

run_with_test_recovery() {
  local test_failures=0

  while [ $test_failures -lt $MAX_TEST_RETRIES ]; do
    claude @prompt.md | tee output.txt

    # Check if tests passed
    if npm run test 2>&1 | grep -q "passed"; then
      echo "Tests passed!"
      return 0
    else
      test_failures=$((test_failures + 1))
      echo "Test failure $test_failures/$MAX_TEST_RETRIES"

      # Append test failure info to progress
      echo "---" >> progress.txt
      echo "Test failure at $(date). Retrying..." >> progress.txt
      npm run test 2>&1 | tail -20 >> progress.txt
    fi
  done

  echo "Max test retries exceeded"
  return 1
}
```

#### 3. Context Overflow Detection

Detect when approaching context limits:

```bash
#!/bin/bash
# Requires claude-hud or similar context tracking

check_context_usage() {
  # Parse context usage from HUD output
  local context_usage=$(claude --show-usage 2>&1 | grep -oP '\d+(?=%)')

  if [ "$context_usage" -gt 80 ]; then
    echo "WARNING: Context at $context_usage%. Consider compacting or splitting task."
    return 1
  fi
  return 0
}
```

---

### Cost Optimization Strategies

#### 1. Model Stepping Pattern

Start with cheaper model, escalate if needed:

```bash
#!/bin/bash
MODELS=("claude-haiku" "claude-sonnet" "claude-opus")
MODEL_INDEX=0

for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  CURRENT_MODEL=${MODELS[$MODEL_INDEX]}

  claude --model $CURRENT_MODEL @prompt.md | tee output.txt

  # Check for quality issues
  if grep -q "NEED_STRONGER_MODEL" output.txt; then
    MODEL_INDEX=$((MODEL_INDEX + 1))
    if [ $MODEL_INDEX -ge ${#MODELS[@]} ]; then
      echo "Already at strongest model"
    else
      echo "Escalating to ${MODELS[$MODEL_INDEX]}"
    fi
    continue
  fi

  # Check completion
  if grep -q "COMPLETE" output.txt; then
    break
  fi
done
```

#### 2. Token Budget Tracking

Track and limit token usage:

```bash
#!/bin/bash
MAX_TOKENS=500000
TOTAL_TOKENS=0
TOKEN_LOG="token_usage.log"

while [ $CURRENT_ITERATION -le $MAX_ITERATIONS ]; do
  # Run with usage tracking
  OUTPUT=$(claude @prompt.md --show-usage 2>&1)

  # Extract token count
  ITERATION_TOKENS=$(echo "$OUTPUT" | grep -oP 'tokens: \K\d+' | head -1)
  TOTAL_TOKENS=$((TOTAL_TOKENS + ITERATION_TOKENS))

  echo "$(date): Iteration $CURRENT_ITERATION used $ITERATION_TOKENS tokens (total: $TOTAL_TOKENS)" >> $TOKEN_LOG

  if [ $TOTAL_TOKENS -gt $MAX_TOKENS ]; then
    echo "Token budget exceeded. Total used: $TOTAL_TOKENS"
    exit 1
  fi

  CURRENT_ITERATION=$((CURRENT_ITERATION + 1))
done
```

#### 3. Off-Peak Scheduling

Run expensive loops during off-peak hours:

```bash
#!/bin/bash
# crontab entry: 0 2 * * * /path/to/ralph.sh 50

# Only run during off-peak (2 AM - 6 AM)
HOUR=$(date +%H)
if [ $HOUR -lt 2 ] || [ $HOUR -gt 6 ]; then
  echo "Not in off-peak window. Exiting."
  exit 0
fi

# Run Ralph with higher iteration limit during off-peak
./ralph.sh 50
```

---

### Real Deployment Stories

#### 1. Ryan Carson's 14-Iteration Feature

**Project:** Untangle Legal Agent
**Feature:** Income Upsert Tool
**Result:** Shipped in 14 iterations overnight

**Key learnings:**
- Started with 6 well-defined user stories
- Each story had specific acceptance criteria
- Used Zod schemas for validation
- All stories completed by morning

#### 2. Molly Cantillon's Jmail Build

**Project:** Jmail (Epstein files search)
**Result:** 18M users, built overnight

**Approach:**
- Parsed documents using overnight Ralph loops
- Built search index autonomously
- Deployed to production next morning
- Example of "autonomous department" pattern

#### 3. Matt Pocock's Video Editor Feature

**Project:** AI Hero Video Editor
**Feature:** Beats display system
**Result:** Visual feature completed with verification

**Key insight:**
> "The beats display as three orange ellipses dots below clip - Claude used Playwright to verify the UI actually rendered correctly."

---

### Additional Repositories and Resources

#### 1. Frank Bria's Ralph Implementation

**Repo:** github.com/frankbria/ralph-claude-code
**Focus:** Windows-compatible Ralph with jq support

#### 2. Rate-Limited Ralph

**Repo:** github.com/ghuntley/ralph-claude-code
**Focus:** Handles API rate limits gracefully with backoff strategies

#### 3. AI Dev Tasks Templates

**Repo:** github.com/snarktank/ai-dev-tasks
**Focus:** PRD templates specifically designed for Ralph workflows

#### 4. Amp Skills Collection

**Repo:** github.com/snarktank/amp-skills
**Focus:** Skills that work with both Amp and Claude Code, including Ralph variants

---

### Ralph + Integration Patterns

#### 1. Ralph + Claude-Mem (Persistent Memory)

Combine Ralph's fresh context with persistent memory:

```bash
#!/bin/bash
# Ensure claude-mem is loaded before each iteration
for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  # claude-mem automatically injects relevant context
  claude "Load relevant context from memory, then: $(cat prompt.md)" | tee output.txt

  if grep -q "COMPLETE" output.txt; then
    break
  fi
done
```

#### 2. Ralph + Claude HUD (Monitoring)

Use HUD to monitor Ralph's progress:

```bash
# In one terminal: Run Ralph
./ralph.sh 25

# In another terminal: Monitor with HUD
watch -n 1 'claude --show-usage'
```

#### 3. Ralph + rpai (Multi-Agent Dashboard)

Monitor multiple Ralph loops:

```bash
# Terminal 1: Ralph for backend
tmux new-session -d -s backend "cd ~/project/backend && ./ralph.sh 20"

# Terminal 2: Ralph for frontend
tmux new-session -d -s frontend "cd ~/project/frontend && ./ralph.sh 20"

# Terminal 3: Monitor all
rpai
```

#### 4. Ralph + Mobile Notifications

From Nader Dabit's mobile setup:

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

### HOTL Ralph (Human On The Loop) Deep Dive

When you want oversight but not full manual control:

```bash
#!/bin/bash
# ralph-hotl.sh - Single iteration with review

# Run one iteration
claude "Review plans/prd.json and plans/progress.txt.
  Pick ONE feature marked passes: false.
  Implement it.
  Run tests.
  If passing, mark passes: true and commit.
  Append learnings to progress.txt.
  Output what you completed."

# Show diff for review
echo ""
echo "=== Changes made ==="
git diff HEAD~1 --stat

echo ""
echo "=== PRD Status ==="
jq '.userStories[] | select(.passes == false) | .title' plans/prd.json

echo ""
read -p "Continue to next iteration? (y/n) " -n 1 -r
if [[ $REPLY =~ ^[Yy]$ ]]; then
  ./ralph-hotl.sh
fi
```

**When to use HOTL:**
- Security-sensitive code
- Learning a new codebase
- Training the PRD format
- Debugging stuck loops

---

### The RALPH Mental Model Visualized

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

### Community Warnings and Gotchas

#### From @seltzergenius

> "A word of warning that it doesn't take the place of good planning and context engineering phases... why burn tokens on brute force"

**Translation:** Don't use Ralph as a substitute for thinking. Plan first, then automate.

#### From @f_butz

> "My concern: loops without review. Works until it builds something broken in ways you don't notice. What's your verification layer?"

**Translation:** Always have tests. If you can't verify, don't automate.

#### From @Killian_Kirk

> "Curious what type of task that would be useful for... those without well defined completion criteria aren't good candidates"

**Translation:** If you can't define "done", Ralph won't help.

#### From @TendiesOfWisdom

> "The feedback loop is everything, but put costly tools like browser control in subagents to protect your main context window tokens"

**Translation:** Expensive operations (Playwright, MCP tools) should be in subagents, not the main loop.

---

### When NOT to Use Ralph

A consolidated list of anti-patterns:

1. **Subjective tasks** - "Make this pretty" has no verifiable completion
2. **Security-critical code** - Needs human review, not autonomous loops
3. **Ambiguous requirements** - "Build something cool" will waste tokens
4. **One-shot operations** - No need for loops if it's a single task
5. **Exploratory work** - Use HOTL Ralph instead
6. **Design decisions** - Ralph implements, humans decide
7. **Complex debugging** - Often needs human intuition
8. **Legacy code without tests** - No verification = no Ralph
9. **Third-party API integrations** - Often need manual testing
10. **Production deployments** - Always review before shipping

---

### Expert-Level Configuration

#### Complete Production Ralph Setup

```
project/
├── CLAUDE.md                    # Project context
├── plans/
│   ├── ralph.sh                 # Main loop script
│   ├── ralph-hotl.sh            # HOTL variant
│   ├── prompt.md                # Static instructions
│   ├── prd.json                 # Task tracking
│   └── progress.txt             # Append-only learnings
├── .claude/
│   ├── settings.json            # Hooks configuration
│   ├── hooks/
│   │   ├── post-edit.sh         # Format on edit
│   │   └── notify.sh            # Push notifications
│   └── commands/
│       └── ralph.md             # Slash command
└── .github/
    └── workflows/
        └── ci.yml               # Verification in CI
```

#### Recommended CLAUDE.md for Ralph Projects

```markdown
# Project Name

## Ralph Loop Configuration

This project uses the Ralph Wiggum pattern for autonomous development.

### PRD Location
- Task tracking: `plans/prd.json`
- Progress log: `plans/progress.txt`

### Verification Requirements
For any story to be marked `passes: true`:
1. `npm run typecheck` must pass
2. `npm run test` must pass
3. `npm run lint` must pass

### Workflow
1. Read prd.json to find next task with `passes: false`
2. Implement the feature following existing patterns
3. Run verification commands
4. If all pass, mark `passes: true` and commit
5. Append learnings to progress.txt
6. If ALL tasks complete, output: <promise>COMPLETE</promise>

### Common Patterns
- Database queries: Use Prisma, never raw SQL
- API routes: Follow patterns in src/api/
- Components: Follow patterns in src/components/

### Known Gotchas
- Migration needs explicit DEFAULT for existing data
- Use .optional() with Zod for nullable fields
```

---

### Future Directions

Based on community discussions, likely upcoming patterns:

1. **Parallel Ralph with coordination** - Multiple Ralphs working on related tasks with a coordinator agent
2. **Self-improving PRDs** - Ralph that can add/modify its own task list
3. **Multi-repository Ralph** - Coordinating changes across microservices
4. **Visual verification Ralph** - Deeper integration with Playwright for UI tasks
5. **Cost-aware Ralph** - Automatically throttles based on spending

---

### Tags

`#deep-dive` `#additional-patterns` `#edge-cases` `#failure-recovery` `#cost-optimization` `#integration-patterns` `#hotl-ralph` `#parallel-ralph` `#production-deployment` `#expert-configuration`

---

*Deep Dive Expansion Added: 2026-01-09*
*Agent: Claude Opus 4.5 Deep Dive Agent*
*Method: Cross-referenced all research documents in extractions/ directory*

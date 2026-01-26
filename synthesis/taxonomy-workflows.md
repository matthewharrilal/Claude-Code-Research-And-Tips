---
**DEPRECATED** (2026-01-18)

This content has been superseded by D-FINAL synthesis.

**Replacement:** See D-FINAL-implementation Section 3 for current content.
**Reason:** Content fully covered in D-FINAL with production validation.
**Original preserved below for reference.**

---

# Workflow Pattern Taxonomy

> **You Are Here:** This is the **complete workflow reference** for Claude Code usage patterns. If you're deciding how to structure your development workflow (PRD-driven, Kanban, goal-conditioned, hybrid), verification patterns (tests, browser, screenshots), or stop conditions, this document covers every pattern with decision guides. **Note:** This file is DEPRECATED - for current content, see `D-FINAL-implementation.md` Section 3.

**Comprehensive Classification of AI Agent Workflow Patterns**

**Compiled:** 2026-01-09
**Source:** All files in `/extractions/` directory
**Purpose:** Exhaustive reference for workflow orchestration with Claude Code and similar AI coding agents

---

## Table of Contents

1. [Task Management Approaches](#task-management-approaches)
2. [Verification Patterns](#verification-patterns)
3. [Workflow Progression Spectrum](#workflow-progression-spectrum)
4. [External Memory Systems](#external-memory-systems)
5. [Context Management Strategies](#context-management-strategies)
6. [Multi-Agent Coordination Patterns](#multi-agent-coordination-patterns)
7. [Feedback Loop Architectures](#feedback-loop-architectures)
8. [Stop Condition Patterns](#stop-condition-patterns)
9. [Task Sizing Heuristics](#task-sizing-heuristics)
10. [Error Recovery Workflows](#error-recovery-workflows)
11. [Cost Optimization Workflows](#cost-optimization-workflows)
12. [Hybrid Human-AI Workflows](#hybrid-human-ai-workflows)
13. [Decision Guide](#decision-guide)

---

## Task Management Approaches

### 1. PRD-Driven Development

The dominant pattern for structured, multi-task autonomous work.

#### Core Concept
Use a JSON Product Requirements Document to define all tasks with explicit state tracking.

#### prd.json Format (Ryan Carson / Anthropic)

```json
{
  "project": "MyProject",
  "branchName": "feature/my-feature",
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

#### Matt Pocock's Simplified Format

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

#### Why JSON Over Markdown

| Aspect | JSON | Markdown |
|--------|------|----------|
| Parsing | Deterministic | Ambiguous |
| Updates | Structured | Risk of malformed edits |
| State tracking | `passes: true/false` | Manual checkboxes |
| LLM reliability | Higher | Lower |

#### Key Principles

1. **Tasks must be small** - Completable in one context window
2. **Acceptance criteria must be verifiable** - Agent can check without human
3. **Always include typecheck** - `npm run typecheck passes` as final criterion
4. **Dependencies ordered correctly** - Schema -> Backend -> Frontend

#### Sources
- `002-ralph-loop-ryancarson.md`
- `005-ralph-comprehensive-arvidkahl.md`
- `research-ralph-expanded.md`

---

### 2. Kanban-Style Mental Model

#### Core Concept
Treat tasks as cards on a virtual board. Agent picks from "todo", moves to "doing", then "done".

#### The Mental Model

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│    TODO     │    │    DOING    │    │    DONE     │
├─────────────┤    ├─────────────┤    ├─────────────┤
│  US-003     │    │  US-002     │    │  US-001     │
│  US-004     │    │             │    │             │
│  US-005     │    │             │    │             │
└─────────────┘    └─────────────┘    └─────────────┘
```

#### Matt Pocock's Description

> "Pick task from board -> Complete -> Back to board -> All done? Exit : Loop"

#### Implementation

```markdown
Agent workflow:
1. Read prd.json
2. Find story with `passes: false` and highest priority
3. Skip if blocked by unfinished dependencies
4. Implement story
5. Run verification
6. If pass: set `passes: true`, commit
7. If fail: add notes, try again or move to next
8. Repeat until all `passes: true`
```

#### Key Difference from Traditional Kanban
- No "blocked" column - dependencies are implicit in ordering
- No "review" stage - verification is automated
- Single agent = single "doing" item at a time

#### Sources
- `006-ralph-video-breakdown-mattpocockuk.md`
- `012-ralph-text-thread-mattpocockuk.md`

---

### 3. Goal-Conditioned Loops

#### Core Concept
Define the end state, let agent loop until it reaches it.

#### The Promise Pattern

```bash
claude "Build a REST API for todos. When complete, output: <promise>COMPLETE</promise>"
```

Agent continues iterating until it outputs the completion promise.

#### Ralph Wiggum Implementation

```bash
#!/bin/bash
while :; do
  output=$(claude @prompt.md)
  if echo "$output" | grep -q "<promise>COMPLETE</promise>"; then
    echo "Goal reached!"
    break
  fi
done
```

#### jq-Based Loop Condition (Maurice Kleine)

```bash
while jq '.tasks[] | select(.passes == false)' prd.json | grep -q .; do
  claude @prompt.md
done
```

#### Key Principles

1. **Clear stop condition** - Explicit signal (promise tag, JSON state)
2. **Max iterations** - Safety backstop to prevent runaway
3. **Fresh context per iteration** - Avoid context rot
4. **External state persistence** - Files, not LLM memory

#### Escape Hatches

Always set `--max-iterations`:
```bash
/ralph-loop "Try to implement feature X" --max-iterations 20
```

Include stuck handling in prompts:
```
After 15 iterations, if not complete:
- Document what's blocking progress
- List what was attempted
- Suggest alternative approaches
```

#### Sources
- `research-ralph-expanded.md`
- `014-ralph-complete-implementation-ryancarson.md`

---

### 4. Phase-Based Development

#### Core Concept
Break large features into sequential phases with gates.

#### Epic PRD Structure

```json
{
  "epic": "User Authentication System",
  "phases": [
    {
      "phase": 1,
      "name": "Database Foundation",
      "prd_file": "plans/auth-phase1.json",
      "estimated_iterations": 5,
      "gate": ["Schema exists", "Migrations run"]
    },
    {
      "phase": 2,
      "name": "Backend Logic",
      "prd_file": "plans/auth-phase2.json",
      "blockedBy": "phase1",
      "gate": ["All API endpoints return expected status codes"]
    },
    {
      "phase": 3,
      "name": "Frontend Integration",
      "prd_file": "plans/auth-phase3.json",
      "blockedBy": "phase2",
      "gate": ["E2E login flow passes"]
    }
  ],
  "total_budget": "$50"
}
```

#### When to Use
- Features requiring 10+ iterations
- Cross-cutting concerns (auth, payments)
- Team handoffs between phases
- Budget tracking per phase

#### Sources
- `research-task-decomposition-expanded.md`

---

### 5. TodoWrite (Native Ephemeral)

#### Core Concept
Claude Code's built-in todo list for single-session tracking.

#### Best For
- Single-session work
- Personal, linear tasks
- Quick tracking within one context
- No external dependencies

#### Limitations
- Ephemeral (does not persist across sessions)
- No owners/team visibility
- No dependency tracking
- No blocking relationships

#### Hybrid Approach

Use both:
```json
// prd.json - project level
{
  "US-001": { "title": "Add user auth", "passes": false }
}

// Within Claude session - TodoWrite for subtasks
[
  { "content": "Create login endpoint", "status": "completed" },
  { "content": "Add tests", "status": "in_progress" },
  { "content": "Update CLAUDE.md", "status": "pending" }
]
```

#### Sources
- `research-task-decomposition-expanded.md`

---

### 6. TaskCreate (Native Multi-Agent)

#### Core Concept
Claude Code's disabled beta features for multi-agent coordination.

#### Commands (CC Mirror Enabled)

```
TaskCreate  -> Create with blockedBy/blocks relationships
TaskList    -> View all tasks across agents
TaskGet     -> Get specific task details
TaskUpdate  -> Update status, addBlocks, addBlockedBy
```

#### Visual Output

```
Tasks:
 #1 Design API architecture
 #2 Create project structure
 #3 Implement data models
 #4 Implement REST endpoints (blocked by #3)
 #5 Write integration tests (blocked by #4)
 #6 Create documentation (blocked by #4)
```

#### When to Use
- Multiple agents working in parallel
- Complex dependency graphs
- Formal project management
- Team visibility requirements

#### Sources
- `011-cc-mirror-native-orchestration-nummanali.md`
- `007-cc-mirror-multiagent-nummanali.md`

---

### Checkpoint: Task Management
**You should now understand:**
- [ ] The 6 task management approaches (PRD-Driven, Kanban, Goal-Conditioned, Phase-Based, TodoWrite, TaskCreate)
- [ ] Why JSON over Markdown for PRD files
- [ ] The 2-3 sentence test for task sizing
- [ ] The difference between TodoWrite (ephemeral) and TaskCreate (multi-agent)

**If unclear:** Re-read Section 1 or see `mastery-ralph-complete.md` for PRD-driven workflow

**Terminal verification:**
```bash
# Test your PRD is valid JSON
cat plans/prd.json | jq '.userStories | length'
# You should see: number of stories in your PRD
```

---

## Verification Patterns

### Verification Hierarchy

| Priority | Method | Use Case | Tool |
|----------|--------|----------|------|
| 1 | Type checking | Always | `npm run typecheck` |
| 2 | Unit tests | Logic verification | `npm test`, `pytest` |
| 3 | Integration tests | API verification | `npm run test:integration` |
| 4 | E2E tests | Full flow | Playwright, Cypress |
| 5 | CI green | All commits | GitHub Actions |
| 6 | Browser automation | UI verification | Playwright MCP |
| 7 | Manual spot-check | Milestones | Human review |

---

### 1. Test-Driven Verification

#### Core Pattern

```json
{
  "acceptanceCriteria": [
    "npm run typecheck passes",
    "npm run test passes",
    "npm run lint passes"
  ]
}
```

#### Why It Works

> "Without verification, Ralph produces garbage."
> -- @mattpocockuk

> "Keep CI green. If you don't, you're hamstringing future agent runs with bad code, and they'll need to bisect to find bugs."
> -- @mattpocockuk

---

### 2. Browser Verification (Playwright MCP)

#### Core Pattern

```json
{
  "acceptanceCriteria": [
    "Navigate to /users",
    "Click filter dropdown",
    "Select 'Active'",
    "Confirm list shows only active users",
    "Take screenshot for verification"
  ]
}
```

#### Why It's Critical

> "Claude's tendency to mark features complete without proper testing... did much better at verifying end-to-end once explicitly prompted to use browser automation tools"
> -- Anthropic Best Practices

#### Implementation (Wes Winder Stack)

| Component | Role |
|-----------|------|
| **Opus 4.5** | Strong reasoning model |
| **Ralph Wiggum** | Iterative loop persistence |
| **Playwright** | Real-world browser verification |

---

### 3. Screenshot Validation

#### Core Concept
Capture visual state for UI verification.

#### Use Cases
- Confirm UI rendered correctly
- Document visual state for progress.txt
- Regression detection for UI changes

#### Command Pattern

```
1. Navigate to target page
2. Wait for page load
3. playwright.screenshot({ path: 'verification.png' })
4. Compare to expected state
5. Log result to progress.txt
```

---

### 4. Negative Verification

#### Core Pattern

Always include "don't break" criteria:

```json
{
  "negativeCriteria": [
    "Does not modify files outside {directory}",
    "Does not add new dependencies without approval note",
    "Does not increase bundle size > 5KB",
    "Does not break existing public API",
    "Does not log sensitive data",
    "No console errors"
  ]
}
```

---

### 5. Property-Based Verification

#### For Mathematical/Data Tasks

```json
{
  "testStrategy": "property-based",
  "properties": [
    "Output array length equals input length",
    "All items from input appear in output",
    "Adjacent items satisfy: a.date <= b.date",
    "Idempotent: sort(sort(x)) === sort(x)"
  ],
  "acceptanceCriteria": [
    "npm run test:property -- sortByDate passes 1000 cases"
  ]
}
```

---

### 6. Approval Testing

#### For Complex Output

```json
{
  "testStrategy": "approval",
  "workflow": [
    "Generate output to docs/api-generated.md",
    "Compare to docs/api-approved.md",
    "If match: pass",
    "If diff: present diff for human approval",
    "If approved: update approved file, mark pass"
  ]
}
```

---

### Checkpoint: Verification Patterns
**You should now understand:**
- [ ] The 6 verification methods and their priority order
- [ ] Why browser verification is critical for UI work
- [ ] Negative verification (what NOT to break)
- [ ] Property-based testing for mathematical/data tasks

**If unclear:** Re-read the Verification Patterns section or see Anthropic's best practices documentation

---

## Workflow Progression Spectrum

### The Continuum

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    WORKFLOW PROGRESSION SPECTRUM                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  SINGLE-SHOT ──► INTERACTIVE ──► AUTONOMOUS ──► MULTI-AGENT ──► SWARM  │
│                                                                          │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌────────┐│
│  │One prompt│   │Back-and- │   │Ralph     │   │CC Mirror │   │Gas Town││
│  │One task  │   │forth     │   │loops     │   │TaskCreate│   │Factory ││
│  │Immediate │   │dialogue  │   │Overnight │   │Parallel  │   │10+ agen││
│  │result    │   │Human-    │   │operations│   │agents    │   │ts      ││
│  │          │   │guided    │   │          │   │          │   │        ││
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘   └────────┘│
│                                                                          │
│  Low complexity                                        High complexity   │
│  High oversight                                        Low oversight     │
│  Low cost                                              High cost         │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### 1. Single-Shot Workflow

#### Characteristics
- One prompt, one response
- Immediate result
- Human reviews before proceeding
- No iteration or loops

#### When to Use
- Simple, well-defined tasks
- Bug fixes with clear solution
- Documentation updates
- Quick questions

#### Example

```bash
claude "Add a comment to the calculateTotal function explaining what it does"
```

---

### 2. Interactive Workflow

#### Characteristics
- Back-and-forth dialogue
- Human guides direction
- Incremental refinement
- High oversight

#### When to Use
- Exploration and discovery
- Design decisions
- Code review
- Learning new codebases

#### Pattern

```
Human: "Show me how authentication works in this codebase"
Claude: [Explains, shows files]
Human: "Now add rate limiting to the login endpoint"
Claude: [Implements]
Human: "Write tests for this"
Claude: [Tests]
```

---

### 3. Autonomous Workflow (Ralph Loops)

#### Characteristics
- Agent works independently
- Multiple iterations
- External state persistence
- Completion signals

#### When to Use
- Well-defined features
- Overnight operations
- Mechanical, repetitive tasks
- Clear success criteria

#### The Loop

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

---

### 4. Multi-Agent Parallel Workflow

#### Characteristics
- Multiple agents simultaneously
- Task coordination
- Branch isolation
- Merge at completion

#### When to Use
- Large features with independent parts
- Multiple team members
- Time-sensitive projects
- Resource availability

#### Patterns

**Git Worktrees for Isolation**

```bash
for feature in auth payments notifications; do
  git worktree add ../wt-$feature $feature-branch
  (cd ../wt-$feature && ./ralph.sh 20) &
done
wait
```

**CC Mirror Coordination**

```
Agent 1: Works on backend (TaskCreate #1)
Agent 2: Works on frontend (TaskCreate #2, blockedBy #1)
Agent 3: Works on tests (TaskCreate #3, blockedBy #1)
```

---

### 5. Swarm Workflow (Gas Town)

#### Characteristics
- 10+ parallel agents
- Hub-and-spoke architecture
- Factory-like scaling
- Heavy investment

#### Steve Yegge's Gas Town

```
┌─────────────────────────────────────────────────────────────────────────┐
│                            GAS TOWN FACTORY                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌──────────┐                                                           │
│  │ REFINERY │ ◄── Task decomposition, quality control                   │
│  └─────┬────┘                                                           │
│        │                                                                │
│        ▼                                                                │
│  ┌──────────────────────────────────────────────────────────────┐      │
│  │                       WORKER POOL                             │      │
│  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐     │      │
│  │  │Worker 1│ │Worker 2│ │Worker 3│ │Worker 4│ │Worker N│     │      │
│  │  │(Sonnet)│ │(Sonnet)│ │(Sonnet)│ │(Sonnet)│ │(Sonnet)│     │      │
│  │  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘     │      │
│  └──────────────────────────────────────────────────────────────┘      │
│                                                                          │
│  Requirements: Stage 7+ developer, significant infrastructure           │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

#### When to Use
- Enterprise-scale refactoring
- Mass migrations
- Large greenfield projects
- Dedicated infrastructure

---

## External Memory Systems

### The Fresh Context Principle

> "Each iteration spawns a NEW Claude instance with NO memory of previous work."

Continuity comes entirely from external sources:

| State Type | Storage | Update Pattern |
|------------|---------|----------------|
| Code changes | Git history | Commit each iteration |
| Task status | prd.json | Update `passes: true/false` |
| Learnings | progress.txt | APPEND only |
| Context | CLAUDE.md | Rarely updated |
| Project structure | File system | Modified as needed |

---

### 1. progress.txt Pattern

#### Purpose
Append-only log for LLM memory across iterations.

#### Critical Rule
**NEVER UPDATE** - would overwrite history. Always append new entries.

#### Basic Template

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

#### What to Log

1. **What was completed** - Reference user story ID
2. **What was learned** - Patterns, gotchas, decisions
3. **What blocked or failed** - Help future iterations avoid
4. **What to do next** - Suggestions for priority

---

### 2. CLAUDE.md Pattern

#### Purpose
Project-level context that persists across all sessions.

#### Recommended Structure for Ralph Projects

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

### 3. Git History as Memory

#### Pattern
Each commit is a checkpoint agent can reference.

#### Commit Message Format

```
feat(US-001): Add user authentication schema

- Created users table with email, password_hash
- Added migration for existing data
- Typecheck passes

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

#### Debugging with Git

```bash
# See what was committed
git log --oneline -20

# See what's still failing
jq '.userStories[] | select(.passes == false)' prd.json

# Reset to last known good
git reset --hard <good-commit>
```

---

### 4. Checkpoint System

#### For Crash Recovery

```json
{
  "checkpoint": {
    "enabled": true,
    "frequency": "per_story",
    "storage": "plans/checkpoints/",
    "format": {
      "timestamp": "2026-01-09T10:30:00Z",
      "lastCompleted": "US-003",
      "currentAttempt": "US-004",
      "attemptCount": 2,
      "gitCommit": "abc123f"
    }
  }
}
```

---

## Context Management Strategies

### The Context Rot Problem

> "Context rot: LLMs get stupider with more tokens. If tasks are too big, fill context window before done, quality drops dramatically, agent loses track."
> -- @mattpocockuk

---

### Token Budget Framework

**Recommended Allocation (100K effective):**

```
├── 10K System/CLAUDE.md (fixed)
├── 20K Codebase context (per task)
├── 40K Working memory (implementation)
├── 15K Tool outputs (verification)
└── 15K Buffer (retries, exploration)
```

**Task must fit in working memory allocation (40K) or split.**

---

### Signs of Context Overflow

- Agent repeats earlier statements
- Agent forgets recent changes
- Quality of output degrades
- Agent "hallucinates" non-existent code
- Agent marks incomplete work as done

---

### Context Protection Strategies

#### 1. Subagents for Expensive Operations

> "The feedback loop is everything, but put costly tools like browser control in subagents to protect your main context window tokens"
> -- @TendiesOfWisdom

Spawn subagents for:
- Playwright browser automation
- Large file reads
- MCP tool calls
- Verbose git operations

#### 2. Fresh Context Per Iteration

Ralph pattern: Kill session, start fresh, read state from files.

#### 3. Compact PRD

Only include active stories, archive completed ones.

#### 4. Prune Progress.txt

Periodically archive old learnings to `progress-archive.txt`.

---

### Auto-Handoff Pattern (Amp)

```json
{
  "amp.experimental.autoHandoff": {
    "context": 90
  }
}
```

Automatically starts new context at 90% usage.

---

## Multi-Agent Coordination Patterns

### 1. Hub-and-Spoke (Gas Town)

```
        ┌─────────┐
        │   HUB   │ (Orchestrator)
        └────┬────┘
             │
    ┌────────┼────────┐
    │        │        │
    ▼        ▼        ▼
┌──────┐ ┌──────┐ ┌──────┐
│Spoke1│ │Spoke2│ │Spoke3│ (Workers)
└──────┘ └──────┘ └──────┘
```

- Hub decomposes tasks
- Spokes execute independently
- Hub merges results

---

### 2. Peer-to-Peer (CC Mirror)

```
┌──────────┐     ┌──────────┐
│  Agent 1 │◄───►│  Agent 2 │
└────┬─────┘     └─────┬────┘
     │                 │
     └────────┬────────┘
              │
              ▼
        ┌──────────┐
        │  Agent 3 │
        └──────────┘
```

- Agents communicate via TaskCreate/TaskUpdate
- Blocking relationships coordinated
- No central orchestrator

---

### 3. Assembly Line (Sequential Handoff)

```
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│ Design  │───►│ Develop │───►│  Test   │───►│ Deploy  │
└─────────┘    └─────────┘    └─────────┘    └─────────┘
```

- Each agent specializes
- Output becomes next input
- Clear handoff points

---

### 4. Parallel Ralph with Worktrees

```bash
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

- True isolation
- No file conflicts
- Shared git history

---

### 5. The Infinite Orchestra (0xSero)

```
┌─────────────────────────────────────────────────────────────────┐
│                    INFINITE ORCHESTRA                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌────────────────┐                                             │
│  │  ORCHESTRATOR  │ (Self-improving, learns from runs)          │
│  └───────┬────────┘                                             │
│          │                                                       │
│          ▼                                                       │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                    WORKER CONTAINERS                        │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │ │
│  │  │ Coder    │  │ Reviewer │  │ Tester   │  │ Deployer │   │ │
│  │  │ Profile  │  │ Profile  │  │ Profile  │  │ Profile  │   │ │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  24/7 operation, Docker-based, self-improvement loops           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Feedback Loop Architectures

### 1. Tight Loop (Within Iteration)

```
Code Change → Typecheck → Fix → Typecheck → Pass → Commit
```

- Immediate feedback
- Same context window
- Quick corrections

---

### 2. Medium Loop (Across Iterations)

```
Iteration 1: Attempt task → Fail → Log to progress.txt
Iteration 2: Read progress.txt → Try different approach → Pass
```

- Fresh context
- Learned from history
- Pattern recognition

---

### 3. Loose Loop (Across Sessions)

```
Session 1: Build foundation → Checkpoint
Session 2: Continue from checkpoint → Build features
Session 3: Complete and ship
```

- Long-running projects
- Human checkpoints between
- Major milestone reviews

---

### 4. Self-Critique Loop (Ralph Marketer)

```
DISCOVER → LEARN → RESEARCH → IDEATE → WRITE → CRITIQUE
                                                   ↓
                                          "Would founder publish?"
                                                   ↓
                                            No → ITERATE
                                            Yes → PUBLISH
```

- Quality gate before completion
- Subjective evaluation
- Domain-specific criteria

---

## Stop Condition Patterns

### 1. Promise Tag

```bash
if grep -q "<promise>COMPLETE</promise>" output.txt; then
  break
fi
```

### 2. JSON State Check

```bash
while jq '.tasks[] | select(.passes == false)' prd.json | grep -q .; do
  # continue
done
```

### 3. Max Iterations

```bash
MAX_ITERATIONS=25
while [ $CURRENT_ITERATION -le $MAX_ITERATIONS ]; do
  # work
done
```

### 4. Budget Cap

```bash
if [ $TOTAL_TOKENS -gt $MAX_TOKENS ]; then
  echo "Token budget exceeded"
  exit 1
fi
```

### 5. Stuck Detection

```bash
STUCK_THRESHOLD=3
if [ "$CURRENT_COMMIT" = "$LAST_COMMIT" ]; then
  STUCK_COUNT=$((STUCK_COUNT + 1))
  if [ $STUCK_COUNT -ge $STUCK_THRESHOLD ]; then
    echo "Stuck - intervention needed"
    exit 1
  fi
fi
```

### 6. Time-Based

```bash
START_TIME=$(date +%s)
MAX_SECONDS=3600  # 1 hour

while true; do
  ELAPSED=$(($(date +%s) - START_TIME))
  if [ $ELAPSED -gt $MAX_SECONDS ]; then
    echo "Time limit exceeded"
    break
  fi
  # work
done
```

---

## Task Sizing Heuristics

### The Golden Rule

> "Each story must be completable in ONE iteration (~one context window)"

### The 2-3 Sentence Test

> "If you can't describe the task in 2-3 sentences, it's too big."

---

### Right-Sized Tasks

| Size | Lines of Code | Files | Iterations | Example |
|------|---------------|-------|------------|---------|
| XS | 1-20 | 1 | 1 | Add column, fix typo |
| S | 20-100 | 1-2 | 1 | New component, endpoint |
| M | 100-300 | 2-5 | 1-2 | Feature piece, integration |
| L | 300-1000 | 5-10 | 3-5 | Small feature, refactor |
| XL | 1000+ | 10+ | 5+ | Full feature (MUST SPLIT) |

---

### Cognitive Load Factors

| Factor | Weight | Example |
|--------|--------|---------|
| Novel patterns | 3x | First time using a library |
| Cross-boundary | 2x | Frontend + Backend + DB |
| Undocumented | 2x | Legacy code without tests |
| State complexity | 2x | Concurrent operations |
| External API | 1.5x | Third-party service calls |
| Standard CRUD | 1x | Simple data operations |

**Formula:**
```
Effective Size = Base Size * max(Cognitive Weights)
```

---

### Split Triggers

Split task if:
- **> 40K tokens** estimated for implementation
- **> 10 files** need modification
- **> 5 test runs** expected
- **> 3 MCP tool sequences** required
- Can't describe in 2-3 sentences

---

## Error Recovery Workflows

### 1. Test Failure Recovery

```bash
run_with_test_recovery() {
  local test_failures=0

  while [ $test_failures -lt $MAX_TEST_RETRIES ]; do
    claude @prompt.md

    if npm run test 2>&1 | grep -q "passed"; then
      return 0
    else
      test_failures=$((test_failures + 1))
      echo "Test failure $test_failures/$MAX_TEST_RETRIES"
      npm run test 2>&1 | tail -20 >> progress.txt
    fi
  done

  return 1
}
```

### 2. Git Rollback Recovery

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

### 3. Stuck Detection Recovery

```markdown
## Rollback Decision Tree

1. **Test failure after code change?**
   - Revert last commit: `git reset --hard HEAD~1`
   - Retry same story with fresh context

2. **Multiple failures on same story (3+)?**
   - Split story into smaller pieces
   - Add notes to progress.txt about blocker
   - Move to next unblocked story

3. **Context degradation detected?**
   - Save progress to checkpoint
   - Kill current session
   - Start fresh with checkpoint context

4. **Budget exceeded?**
   - Stop loop
   - Document incomplete work
   - Notify human for review
```

---

## Cost Optimization Workflows

### Token Usage Per Iteration

| Activity | Approximate Tokens |
|----------|-------------------|
| PRD read | 500-2000 |
| Progress read | 200-1000 |
| Task implementation | 2000-10000 |
| Verification | 500-2000 |
| Commit/update | 200-500 |

**Per iteration estimate:** 3,000-15,000 tokens

---

### Cost Estimates

| Iterations | Tokens (est.) | Cost @ $15/M |
|------------|---------------|--------------|
| 10 | 30K-150K | $0.45-$2.25 |
| 25 | 75K-375K | $1.13-$5.63 |
| 50 | 150K-750K | $2.25-$11.25 |
| 100 | 300K-1.5M | $4.50-$22.50 |

---

### Model Stepping Pattern

```bash
MODELS=("claude-haiku" "claude-sonnet" "claude-opus")
MODEL_INDEX=0

for iteration in {1..50}; do
  CURRENT_MODEL=${MODELS[$MODEL_INDEX]}

  output=$(claude --model $CURRENT_MODEL @prompt.md)

  # Escalate if needed
  if echo "$output" | grep -q "NEED_STRONGER_MODEL"; then
    MODEL_INDEX=$((MODEL_INDEX + 1))
  fi

  # Check completion
  if echo "$output" | grep -q "COMPLETE"; then
    break
  fi
done
```

---

### Cost Optimization Strategies

1. **Subagents for expensive tools** - Playwright, MCP in subagents
2. **Compact PRD** - Only active stories
3. **Prune progress.txt** - Archive old learnings
4. **Right-size tasks** - Fewer iterations needed
5. **Set max-iterations** - Prevent runaway
6. **Model stepping** - Start cheap, escalate if needed
7. **Off-peak scheduling** - Run overnight

---

## Hybrid Human-AI Workflows

### 1. HOTL Ralph (Human On The Loop)

Single-iteration variant with human review:

```bash
#!/bin/bash
# ralph-once.sh

claude "Review plans/prd.json and plans/progress.txt.
  Pick ONE feature marked passes: false.
  Implement it.
  Run tests.
  If passing, mark passes: true and commit.
  Append learnings to progress.txt."

# Human review
echo "=== Changes made ==="
git diff HEAD~1 --stat

read -p "Continue? (y/n) " -n 1 -r
if [[ $REPLY =~ ^[Yy]$ ]]; then
  ./ralph-once.sh
fi
```

### When to Use HOTL
- Security-sensitive code
- Learning a new codebase
- Training the PRD format
- Debugging stuck loops

---

### 2. Panopticon Pattern (Molly Cantillon)

> "Spawn 5+ parallel Claude sessions"

Human as observer of multiple agents:
- Start multiple agents on related tasks
- Monitor progress across all
- Intervene when needed
- Merge results at end

---

### 3. Planning + Execution Separation (Codex)

**Phase 1: Human-Guided Planning**
- Define architecture
- Set acceptance criteria
- Create PRD

**Phase 2: Autonomous Execution**
- Ralph loops
- Overnight operation
- Minimal intervention

**Phase 3: Human Review**
- Code review
- Merge approval
- Production deployment

---

### 4. Mobile Monitoring Workflow

From Nader Dabit's mobile setup:

```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "AskUserQuestion",
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/notify.sh"
      }]
    }]
  }
}
```

Agent runs autonomously, human receives push notifications when intervention needed.

---

## Decision Guide

### Workflow Selection Matrix

| Scenario | Recommended Workflow | Key Factors |
|----------|---------------------|-------------|
| Simple bug fix | Single-shot | Clear solution, low risk |
| Explore codebase | Interactive | Discovery, learning |
| Well-defined feature | Ralph loop | Clear criteria, testable |
| Multi-component feature | PRD phases | Dependencies, milestones |
| Team collaboration | CC Mirror + TaskCreate | Coordination, visibility |
| Enterprise migration | Gas Town | Scale, resources |
| Security-sensitive | HOTL Ralph | Human review required |
| Time-sensitive | Parallel Ralph | Speed over efficiency |
| Budget-constrained | Model stepping | Cost optimization |

---

### Task Type to Workflow Mapping

| Task Type | Best Workflow | Why |
|-----------|---------------|-----|
| Add single endpoint | Single-shot | Simple, isolated |
| Implement feature | Ralph loop | Multiple steps, testable |
| Refactor codebase | Phased PRD | Large scope, milestones |
| Fix bug | Interactive | Investigation needed |
| Write documentation | Single-shot | Human review anyway |
| Database migration | Careful Ralph | Reversibility critical |
| UI component | Ralph + Playwright | Browser verification |
| API integration | HOTL Ralph | External dependencies |

---

### Verification Method Selection

| Code Type | Primary Verification | Secondary |
|-----------|---------------------|-----------|
| Business logic | Unit tests | Integration tests |
| API endpoints | Integration tests | E2E tests |
| UI components | Playwright | Screenshot comparison |
| Database | Migration status | Data integrity checks |
| Types | Typecheck | Lint |
| Security | Manual review | Automated scans |

---

### Red Flags - When NOT to Use Autonomous Workflows

1. **Subjective tasks** - "Make this pretty" has no verifiable completion
2. **Security-critical code** - Needs human review
3. **Ambiguous requirements** - "Build something cool" wastes tokens
4. **One-shot operations** - No loop needed
5. **Exploratory work** - Use HOTL or interactive
6. **Design decisions** - Agent implements, humans decide
7. **Complex debugging** - Often needs human intuition
8. **Legacy code without tests** - No verification possible
9. **Third-party API integrations** - Often need manual testing
10. **Production deployments** - Always review before shipping

---

## Quick Reference

### Minimal Ralph Setup

```
project/
├── plans/
│   ├── ralph.sh         # Loop script
│   ├── prompt.md        # Instructions
│   ├── prd.json         # Tasks
│   └── progress.txt     # Learnings
└── CLAUDE.md            # Context
```

### Essential Bash Script

```bash
#!/bin/bash
MAX_ITERATIONS=${1:-10}

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

### Pre-Flight Checklist

- [ ] Tasks are small enough (2-3 sentence rule)
- [ ] Dependencies ordered correctly (schema -> backend -> frontend)
- [ ] Acceptance criteria are verifiable
- [ ] Tests exist or will be created
- [ ] Git branch created
- [ ] progress.txt initialized
- [ ] Max iterations set
- [ ] Verification commands work

---

## Summary: The Workflow Philosophy

> "View AI agents as persistent, file-memory-based loops where AI acts as an autonomous worker, breaking projects into small, verifiable stories that compound over iterations -- emphasizing eventual consistency over perfect first attempts."

### Core Principles

1. **Fresh context per iteration** - Avoid context rot
2. **External memory** - Git, files, PRD for continuity
3. **Small, verifiable tasks** - Complete in one context window
4. **Failure as data** - Each failure informs next attempt
5. **Explicit completion signals** - `<promise>COMPLETE</promise>`
6. **Append-only learning** - progress.txt compounds knowledge
7. **Verification mandatory** - Tests, typecheck, browser automation

### The Mental Model

Ralph is not about making the agent smarter. It's about:
- Working around context limitations
- Leveraging persistence
- Building feedback loops
- Compounding progress
- Accepting imperfection
- Achieving eventual consistency

---

## Troubleshooting

### Common Issue: Agent Marks Task Complete But It's Not Done
**Symptom:** Story marked `passes: true` but feature doesn't work
**Cause:** Missing verification steps, or acceptance criteria too vague
**Fix:**
1. Always include `npm run typecheck passes` in acceptance criteria
2. Add specific, testable criteria: "Response contains user email" not "Works correctly"
3. Use browser verification for UI tasks
4. Add negative criteria: "No console errors"
5. If using Playwright, include screenshot step for proof

### Common Issue: Loop Gets Stuck on Same Story
**Symptom:** Same story attempted repeatedly across iterations
**Cause:** Tests failing, or criteria impossible to meet
**Fix:**
```bash
# 1. Check progress.txt for failure pattern
grep -A3 "STORY-ID" plans/progress.txt

# 2. Verify tests actually work
npm run test -- --grep "story name"

# 3. Check if story is too large (split if needed)
# Good: "Add login button to header"
# Bad: "Build authentication system"

# 4. Add stuck handling to prompt:
# "After 3 failed attempts on same story, add BLOCKED note and move to next"
```

### Common Issue: Cost Spiraling Out of Control
**Symptom:** Ralph loop consuming much more than expected
**Cause:** Too many iterations, wrong model, or tasks too large
**Fix:**
1. Set max iterations: `./ralph.sh 25` (not unlimited)
2. Use model stepping: start Haiku, escalate to Sonnet/Opus only if needed
3. Right-size tasks (see Task Sizing Heuristics section)
4. Use subagents for expensive operations (Playwright, MCP)
5. Track costs: `claude --print-cost` after sessions

### Common Issue: Verification Passes But Production Fails
**Symptom:** All tests green, but bug in deployed code
**Cause:** Test coverage gap, or environment differences
**Fix:**
1. Add integration tests that match production environment
2. Include E2E tests for critical paths
3. Use property-based testing for edge cases
4. Add staging environment verification step
5. Include "don't break existing" negative criteria

### Common Issue: Human Can't Keep Up with Parallel Agents
**Symptom:** Multiple agents running, human overwhelmed
**Cause:** Too many agents without proper monitoring
**Fix:**
1. Start with 2-3 agents max (Personal Panopticon recommendation)
2. Use push notifications (Pushover/ntfy) for attention-needed events
3. Set up Claude HUD or rpai for visibility
4. Have agents write progress to shared location
5. Schedule review checkpoints, don't try real-time monitoring

### Common Issue: Fresh Context Loses Important Information
**Symptom:** New iteration doesn't know critical context from previous
**Cause:** Not capturing learnings in progress.txt or CLAUDE.md
**Fix:**
1. End each iteration with progress.txt update:
   - What was completed (reference story ID)
   - What was learned (patterns, gotchas)
   - What to do next
2. Update CLAUDE.md with discovered patterns
3. Use meaningful git commit messages
4. Include "read progress.txt first" in prompt

---

## Sources

### Primary Sources (Repository Extractions)

1. `extractions/orchestration/002-ralph-loop-ryancarson.md`
2. `extractions/orchestration/005-ralph-comprehensive-arvidkahl.md`
3. `extractions/orchestration/006-ralph-video-breakdown-mattpocockuk.md`
4. `extractions/orchestration/007-cc-mirror-multiagent-nummanali.md`
5. `extractions/orchestration/009-gas-town-steve-yegge.md`
6. `extractions/orchestration/010-infinite-orchestra-0xsero.md`
7. `extractions/orchestration/011-cc-mirror-native-orchestration-nummanali.md`
8. `extractions/orchestration/research-ralph-expanded.md`
9. `extractions/orchestration/research-task-decomposition-expanded.md`
10. `extractions/orchestration/research-multi-agent-patterns-expanded.md`
11. `extractions/philosophy/002-planning-execution-separation-codex.md`
12. `extractions/philosophy/004-creator-workflow-bcherny.md`
13. `extractions/tooling/001-rpai-tmux-agent-manager.md`
14. `extractions/mobility/001-mobile-claude-code-dabit3.md`

### External References

- ghuntley.com/ralph/ (Original Ralph pattern)
- github.com/anthropics/claude-code (Official plugin)
- github.com/steveyegge/gastown (Gas Town factory)
- github.com/0xSero/orchestra (Infinite Orchestra)

---

## Tags

`#workflow-taxonomy` `#task-management` `#prd-driven` `#kanban-style` `#goal-conditioned` `#ralph-loop` `#verification-patterns` `#external-memory` `#context-management` `#multi-agent` `#feedback-loops` `#stop-conditions` `#task-sizing` `#error-recovery` `#cost-optimization` `#hybrid-workflows`

---

*Compiled: 2026-01-09*
*Wave-3 Enhanced: 2026-01-19*
*Source: All files in `/extractions/` directory*
*Agent: Claude Opus 4.5*

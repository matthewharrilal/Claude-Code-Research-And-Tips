# Marathon Ralph: Full SDLC Automation Plugin
## Stephen Rayner's Spec-to-Tested-Application Pipeline

---

**Extraction Date:** 2026-01-19
**Primary Source:** github.com/gruckion/marathon-ralph
**Author:** Stephen Rayner (@gruckion / @stephen_rayner)
**Repository Stats:** 9 stars, 2 contributors (human + Claude)
**Primary Language:** Shell scripting + Markdown agents
**Status:** Active Claude Code plugin - Full SDLC automation
**Line Count:** 700+ lines

---

> "Give it a spec file. Get a tested, working application."
> -- Marathon Ralph tagline

> "Marathon Ralph autonomously manages the entire development lifecycle by creating Linear projects, decomposing specifications into discrete issues, and systematically implementing each feature with comprehensive testing."
> -- Project documentation

---

## Table of Contents

1. [You Are Here](#1-you-are-here)
2. [What This Is](#2-what-this-is)
3. [Why It Matters](#3-why-it-matters)
4. [Architecture Deep Dive](#4-architecture-deep-dive)
5. [Key Features](#5-key-features)
6. [Installation and Setup](#6-installation-and-setup)
7. [Configuration Options](#7-configuration-options)
8. [SDLC Workflow Patterns](#8-sdlc-workflow-patterns)
9. [Integration Patterns](#9-integration-patterns)
10. [Comparison to Other Ralphs](#10-comparison-to-other-ralphs)
11. [Mental Models](#11-mental-models)
12. [Checkpoints](#12-checkpoints)
13. [Troubleshooting](#13-troubleshooting)
14. [Source Attribution](#14-source-attribution)
15. [Tags](#15-tags)

---

## 1. You Are Here

### Complexity Ladder Position

```
Level 0: Single session, no memory          <- Where most start
Level 1: CLAUDE.md + project context        <- Basic persistence
Level 2: Extended sessions with handoffs    <- Context engineering
Level 3: Basic Ralph (Huntley)              <- Fresh context loops
Level 4: Production Ralph (Carson)          <- PRD-driven stories
Level 5: MARATHON RALPH (Rayner)            <- YOU ARE HERE - Full SDLC
Level 6: Parallel Ralph + Git Worktrees     <- Multi-branch parallel
Level 7: Factory Ralph (CC Mirror + Gas Town) <- Factory-scale
```

### What You Need Before This

Before implementing Marathon Ralph, ensure you have:

- Claude Code installed and authenticated
- Linear account (free tier works)
- Basic understanding of the Ralph loop concept
- A specification file describing what you want to build
- Familiarity with TypeScript/JavaScript ecosystem (primary target)

### What This Pattern Unlocks

Mastering Marathon Ralph enables:

- **Spec-to-application pipelines**: One command to go from requirements to working code
- **Guaranteed test coverage**: Unit, integration, and E2E tests are mandatory
- **Cross-session continuity**: Linear integration preserves state across restarts
- **Regression-safe development**: Verification runs before each new feature
- **Automatic bug tracking**: Failed verifications create Linear issues

### The Key Insight

Marathon Ralph transforms the question from "Can AI implement this feature?" to "Can AI implement, test, and verify this entire application from a specification?"

The answer, surprisingly, is yes - given proper scaffolding.

---

## 2. What This Is

### The Elevator Pitch

Marathon Ralph is a **Claude Code plugin** that automates the complete software development lifecycle. You provide a specification file, and it:

1. Creates a Linear project for tracking
2. Decomposes your spec into prioritized issues
3. Implements each issue with proper coding standards
4. Writes comprehensive tests (unit + integration + E2E)
5. Verifies everything works before marking complete
6. Handles failures by creating bug tickets
7. Continues until all issues are done

### The Core Loop

```
VERIFY -> PLAN -> CODE -> TEST -> QA -> EXIT
   |                                    |
   +-------------- REPEAT -------------+
```

For each Linear issue, Marathon Ralph executes this six-phase cycle:

| Phase | Agent | Purpose | Model |
|-------|-------|---------|-------|
| VERIFY | verify-agent | Ensure codebase health before starting | Sonnet |
| PLAN | plan-agent | Create detailed implementation strategy | Opus |
| CODE | code-agent | Implement the feature | Opus |
| TEST | test-agent | Write unit and integration tests | Opus |
| QA | qa-agent | Write E2E tests (web projects only) | Opus |
| EXIT | exit-agent | Update Linear, reset state, document | Haiku |

### How It Differs from Basic Ralph

| Aspect | Basic Ralph | Marathon Ralph |
|--------|-------------|----------------|
| Task tracking | prd.json file | Linear project |
| Test generation | Optional | Mandatory |
| E2E testing | Manual setup | Automatic (Playwright) |
| Issue decomposition | Manual | Automatic from spec |
| Failure handling | Max iterations | Bug ticket creation |
| State persistence | Local files | Linear + local state |
| Cross-session | Requires restart | Automatic resume |

---

## 3. Why It Matters

### The Problem Marathon Ralph Solves

Traditional Ralph implementations handle feature development but leave gaps:

1. **Test debt accumulates**: Features complete without tests
2. **E2E coverage missing**: UI verification is manual
3. **Failures get lost**: No systematic tracking of what went wrong
4. **Session continuity breaks**: Context loss between sessions
5. **No regression checks**: New features can break old ones

### The Solution: Full SDLC Integration

Marathon Ralph addresses each gap:

| Problem | Marathon Solution |
|---------|-------------------|
| Test debt | Tests mandatory per phase |
| E2E missing | Automatic Playwright generation |
| Lost failures | Circuit breaker + Linear tracking |
| Session breaks | Linear state + stop hook resume |
| No regression | Verify phase runs before each feature |

### Who Should Use This

**Ideal for:**
- Solo developers building MVPs
- Prototyping complete applications overnight
- Teams wanting AI-assisted development with safety rails
- Projects requiring comprehensive test coverage
- Anyone who found basic Ralph too bare-bones

**Not ideal for:**
- Quick one-off tasks (too much overhead)
- Projects without clear specifications
- Non-web projects (E2E features are web-focused)
- Teams without Linear (required dependency)

---

## 4. Architecture Deep Dive

### Directory Structure

```
marathon-ralph/
├── agents/                    # Specialized subagents
│   ├── code.md               # Feature implementation
│   ├── exit.md               # Finalization and cleanup
│   ├── init.md               # Project initialization
│   ├── plan.md               # Implementation planning
│   ├── qa.md                 # E2E test generation
│   ├── setup.md              # Environment verification
│   ├── test.md               # Unit/integration tests
│   └── verify.md             # Codebase health checks
│
├── commands/                  # Slash commands
│   ├── run.md                # Start/resume marathon
│   ├── status.md             # Progress display
│   └── cancel.md             # Stop marathon
│
├── hooks/                     # Lifecycle hooks
│   ├── hooks.json            # Hook configuration
│   └── stop-hook.sh          # Continuous operation enabler
│
├── skills/                    # Reusable capabilities
│   ├── marathon-ralph/       # Core marathon skill
│   ├── update-state/         # State management
│   ├── project-detection/    # Language/framework detection
│   ├── setup-playwright/     # E2E framework setup
│   ├── setup-vitest/         # Unit test setup
│   ├── visual-verification/  # Screenshot verification
│   ├── write-playwright-test/# E2E test generation
│   └── database/sqlite/      # SQLite operations
│
├── examples/                  # Specification examples
│   ├── todo_app_spec.txt     # Full todo app spec
│   └── small_todo_app_spec.txt # Minimal example
│
├── CLAUDE.md                  # Project conventions
└── AGENTS.md                  # Agent documentation
```

### Agent Responsibilities

#### Setup Agent (setup.md)
**Purpose:** Verify Linear MCP is connected and authenticated
**Model:** Haiku (fast state operations)
**Key behaviors:**
- Checks Linear MCP tool availability
- Validates OAuth authentication
- Creates initial state file at `.claude/marathon-ralph.json`

#### Init Agent (init.md)
**Purpose:** Convert specification into Linear project structure
**Model:** Opus (complex analysis)
**Six-phase workflow:**
1. Specification analysis - extract features and requirements
2. Project detection - language, package manager, monorepo
3. Linear setup - create project, select team
4. Issue breakdown - prioritized issues (P0-P3)
5. Project setup - for greenfield projects only
6. Finalization - state file, git init, summary

**Priority breakdown:**
| Priority | Type | Examples |
|----------|------|----------|
| P0 | Critical infrastructure | Database schema, core config |
| P1 | Core features | Main CRUD operations |
| P2 | Secondary features | Filtering, search, sorting |
| P3 | Polish | Animations, accessibility |

#### Verify Agent (verify.md)
**Purpose:** Ensure codebase health before new work
**Model:** Sonnet
**Runs 5 check categories:**
1. Unit tests
2. Integration tests
3. E2E tests
4. Linting
5. Type checking

**Failure handling:** Creates Linear bug issue with appropriate priority (P1 for tests/types, P2 for lint)

#### Plan Agent (plan.md)
**Purpose:** Create detailed implementation strategy without coding
**Model:** Opus
**Four-step process:**
1. Requirements analysis
2. Codebase exploration (Glob/Grep)
3. Plan documentation
4. Linear comment addition

**Critical constraint:** Does NOT write code, create files, or make commits

#### Code Agent (code.md)
**Purpose:** Implement features following the plan
**Model:** Opus
**Key behaviors:**
- Follows plan exactly (no scope creep)
- Mandatory visual verification for web projects
- Conventional commit format with Linear issue ID
- Records errors for circuit breaker tracking

**Does NOT:** Write tests (delegated to test-agent)

#### Test Agent (test.md)
**Purpose:** Write unit and integration tests
**Model:** Opus
**Framework detection:** Vitest, Jest, pytest - or auto-setup via setup-vitest skill
**Coverage requirements:**
- Every acceptance criterion mapped to tests
- Happy paths + error handling + boundary conditions
- Follow project test conventions

**Testing library priority:**
```
getByRole > getByLabel > getByPlaceholder > getByText > getByTestId
```

#### QA Agent (qa.md)
**Purpose:** Create E2E tests for web features using Playwright
**Model:** Opus
**Skips for:** Non-web projects
**Key patterns:**
- Fixture-based approach for isolation
- Page Object Model for maintainability
- Web-first assertions (auto-waiting)
- Accessibility-first selectors

**API framework detection:** Special handling for oRPC, tRPC, GraphQL vs REST

#### Exit Agent (exit.md)
**Purpose:** Finalize issue cycle and update state
**Model:** Haiku (fast operations)
**Actions:**
1. Mark Linear issue "Done"
2. Update state file atomically
3. Add session notes to META issue
4. Reset failure counters
5. Exit without continuing to next issue

### The Stop Hook

The stop hook (`hooks/stop-hook.sh`) is the magic that enables continuous operation:

```bash
# Simplified logic
if marathon_active && owned_by_this_session; then
  # Block exit, continue to next issue
  return_block_decision
elif iteration_limit_reached || failure_threshold_exceeded; then
  # Allow exit for safety
  return_allow_decision
else
  # Different session or inactive
  return_allow_decision
fi
```

**Safety mechanisms:**
- Iteration limit: 25 per session
- Failure tracking with abort thresholds
- Repeated error detection via MD5 signatures
- Session ownership prevents hijacking

### State Management

State lives in `.claude/marathon-ralph.json`:

```json
{
  "active": true,
  "phase": "coding",
  "session_id": "abc123",
  "project": {
    "linear_id": "proj_xyz",
    "team_id": "team_abc",
    "name": "Todo App Marathon"
  },
  "detection": {
    "language": "typescript",
    "package_manager": "bun",
    "monorepo": true,
    "commands": {
      "dev": "turbo dev",
      "test": "turbo test",
      "build": "turbo build"
    }
  },
  "stats": {
    "completed": 5,
    "in_progress": 1,
    "pending": 8
  },
  "failure_tracking": {
    "consecutive_failures": 0,
    "error_signatures": {},
    "phase_attempts": {}
  },
  "timestamps": {
    "created": "2026-01-19T10:00:00Z",
    "updated": "2026-01-19T14:30:00Z"
  }
}
```

**Update-state skill** provides atomic updates via jq:
```bash
# Example commands
./update-state.sh complete-issue
./update-state.sh start-issue "issue_123" "Add user auth"
./update-state.sh set-phase coding
./update-state.sh increment-phase-attempt verify
./update-state.sh check-limits
```

---

## 5. Key Features

### 5.1 Automatic Issue Decomposition

Provide a specification file, Marathon Ralph creates a complete Linear project:

**Input (spec.txt):**
```xml
<project_specification>
  <project_name>Todo App</project_name>
  <technology_stack>
    <frontend>Next.js 15, Tailwind, shadcn/ui</frontend>
    <backend>oRPC, Drizzle ORM, SQLite</backend>
  </technology_stack>
  <features>
    <feature>CRUD operations for todos</feature>
    <feature>Categories with color coding</feature>
    <feature>Priority levels</feature>
    <feature>Statistics dashboard</feature>
  </features>
</project_specification>
```

**Output:** Linear project with 20+ properly prioritized issues

### 5.2 Mandatory Test Coverage

Tests are not optional in Marathon Ralph:

| Phase | Test Type | Framework |
|-------|-----------|-----------|
| TEST | Unit tests | Vitest/Jest |
| TEST | Integration tests | Vitest/Jest |
| QA | E2E tests | Playwright |

**Acceptance criteria must include test verification:**
```json
{
  "acceptanceCriteria": [
    "Todo CRUD operations work",
    "Unit tests cover happy paths",
    "Integration tests verify API",
    "E2E tests confirm UI flows"
  ]
}
```

### 5.3 Circuit Breaker Pattern

Prevents infinite retry loops:

**Default limits:**
| Type | Limit |
|------|-------|
| Verify phase attempts | 3 |
| Plan phase attempts | 3 |
| Code phase attempts | 3 |
| Test phase attempts | 5 |
| QA phase attempts | 5 |
| Per-issue attempts | 5 |
| Consecutive failures | 5 |
| Stop hook iterations | 25 |

**Error signature tracking:**
```bash
# Normalizes errors to detect repetition
# Removes: timestamps, line numbers, absolute paths
# Creates MD5 hash for comparison
```

### 5.4 Cross-Session Continuity

Linear integration enables seamless resume:

```bash
# Day 1: Start marathon
/marathon-ralph:run todo_spec.txt
# ... works on 5 issues, you sleep ...

# Day 2: Resume exactly where you left off
/marathon-ralph:run
# Automatically continues from issue #6
```

### 5.5 Visual Verification

For web projects, visual verification is mandatory:

```markdown
# In code-agent instructions:
"For UI changes:
1. Take screenshot at localhost:3000
2. Verify expected elements render
3. Document any visual issues"
```

Uses visual-verification skill for screenshot comparison.

### 5.6 API Framework Detection

Special handling for different API patterns:

| Framework | Detection | Mock Strategy |
|-----------|-----------|---------------|
| oRPC | package.json, imports | Procedure mocking |
| tRPC | package.json, imports | Procedure mocking |
| GraphQL | .graphql files, client | Resolver mocking |
| REST | fetch/axios patterns | Route mocking |

**Critical warning from docs:**
> "Do NOT use `page.route('**/todo.getAll**')` or similar REST-style URL patterns for procedure-based systems"

---

## 6. Installation and Setup

### Step 1: Install the Plugin

```bash
# From Claude Code marketplace
claude plugin marketplace add gruckion/marathon-ralph
claude plugin install marathon-ralph
```

### Step 2: Configure Linear MCP

Linear integration is required for Marathon Ralph:

```bash
# Add Linear MCP server
claude mcp add --transport http linear https://mcp.linear.app/mcp
```

### Step 3: Authenticate Linear

1. In Claude Code, type `/mcp`
2. Select **linear** from the list
3. Click **Authenticate**
4. Complete OAuth flow in browser
5. Return to Claude Code

**Verify connection:**
```bash
# Should list your Linear teams
claude mcp list
```

### Step 4: Create Your Specification

Create a spec file following this format:

```xml
<project_specification>
  <project_name>My App</project_name>
  <technology_stack>
    <frontend>Next.js 15, Tailwind CSS, shadcn/ui</frontend>
    <backend>oRPC, Drizzle ORM, SQLite</backend>
  </technology_stack>
  <database_schema>
    <table name="items">
      <column>id (uuid, primary key)</column>
      <column>name (text, required)</column>
      <column>created_at (timestamp)</column>
    </table>
  </database_schema>
  <api_endpoints>
    <endpoint>item.getAll - list items</endpoint>
    <endpoint>item.create - create item</endpoint>
    <endpoint>item.delete - delete item</endpoint>
  </api_endpoints>
  <implementation_steps>
    <step priority="P0">Set up database schema</step>
    <step priority="P1">Implement CRUD API</step>
    <step priority="P1">Create list UI</step>
    <step priority="P2">Add filtering</step>
  </implementation_steps>
  <success_criteria>
    <criterion>All CRUD operations work</criterion>
    <criterion>Tests pass</criterion>
    <criterion>Type-safe end-to-end</criterion>
  </success_criteria>
</project_specification>
```

### Step 5: Launch Marathon

```bash
# Start new marathon from spec
/marathon-ralph:run path/to/spec.txt

# Or natural language
"Marathon this spec until complete"
```

---

## 7. Configuration Options

### State File Location

Default: `.claude/marathon-ralph.json`

Override via environment:
```bash
export CLAUDE_PROJECT_DIR=/custom/path
```

### Iteration Limits

Modify in `hooks/stop-hook.sh`:
```bash
MAX_ITERATIONS=25  # Default, adjust as needed
```

### Phase Attempt Limits

Modify in `skills/update-state/SKILL.md`:
```
verify/plan/code: 3 attempts
test/qa: 5 attempts
per-issue: 5 attempts
consecutive failures: 5
```

### Model Selection by Phase

Current defaults (hardcoded in agent files):
| Phase | Model | Reason |
|-------|-------|--------|
| setup | Haiku | Fast state ops |
| init | Opus | Complex analysis |
| verify | Sonnet | Balanced check |
| plan | Opus | Deep planning |
| code | Opus | Quality output |
| test | Opus | Test generation |
| qa | Opus | E2E writing |
| exit | Haiku | Fast cleanup |

---

## 8. SDLC Workflow Patterns

### Pattern 1: Greenfield Project

**Scenario:** Building a new application from scratch

```bash
# 1. Create spec file
cat > spec.txt << 'EOF'
<project_specification>
  <project_name>Task Manager</project_name>
  <technology_stack>
    <frontend>Next.js 15</frontend>
    <backend>oRPC, SQLite</backend>
  </technology_stack>
  ...
</project_specification>
EOF

# 2. Launch marathon
/marathon-ralph:run spec.txt

# Marathon will:
# - Create Linear project
# - Decompose into issues
# - Initialize project structure
# - Implement all features
# - Generate all tests
```

### Pattern 2: Feature Addition

**Scenario:** Adding features to existing project

```bash
# 1. Create feature spec
cat > feature-spec.txt << 'EOF'
<project_specification>
  <project_name>Existing App - Categories Feature</project_name>
  <existing_project>true</existing_project>
  <features>
    <feature>Category CRUD</feature>
    <feature>Category color picker</feature>
    <feature>Category filtering</feature>
  </features>
</project_specification>
EOF

# 2. Run marathon
/marathon-ralph:run feature-spec.txt
```

### Pattern 3: Resume After Interruption

```bash
# Check current status
/marathon-ralph:status

# Output shows progress bar and current issue
# [========>           ] 40% complete
# Currently: Implementing user authentication

# Resume from where you left off
/marathon-ralph:run

# Or if session was force-quit
/marathon-ralph:run --force
```

### Pattern 4: Overnight Build

```bash
# Evening: Launch marathon
/marathon-ralph:run comprehensive-spec.txt

# Marathon runs through the night:
# - Verify -> Plan -> Code -> Test -> QA -> Exit
# - Repeat for each issue
# - Creates bug tickets for failures
# - Updates Linear throughout

# Morning: Check results
/marathon-ralph:status

# Review in Linear for detailed history
```

---

## 9. Integration Patterns

### With Gas Town

Marathon Ralph can serve as a **Dog agent** in Steve Yegge's Gas Town architecture:

**Configuration:**
```
Gas Town Factory
├── Mayor (Opus) - Project decomposition
├── Deacon (Opus) - Quality oversight
└── Dogs (Marathon Ralph instances)
    ├── Dog 1: Feature module A (Marathon Ralph)
    ├── Dog 2: Feature module B (Marathon Ralph)
    └── Dog 3: Feature module C (Marathon Ralph)
```

**Use case:** Large project decomposed into modules, each module marathoned in parallel.

**Implementation approach:**
```bash
# Mayor decomposes project into module specs
# Each module spec launched as separate marathon
# Different Linear projects for isolation
# Dogs run on separate git worktrees

git worktree add ../module-a feature/module-a
git worktree add ../module-b feature/module-b

# In terminal 1
cd ../module-a && /marathon-ralph:run module-a-spec.txt

# In terminal 2
cd ../module-b && /marathon-ralph:run module-b-spec.txt
```

**Complexity:** Medium
**Value:** Very High for large projects

### With CC-Mirror

CC-Mirror enables multi-model orchestration. Marathon Ralph phases can use different models:

**Configuration idea:**
```
CC-Mirror Orchestration
├── Planning phase: Claude Opus 4.5 (best reasoning)
├── Coding phase: Claude Sonnet (fast, capable)
├── Test writing: Claude Opus 4.5 (thorough)
└── QA/E2E: Claude Sonnet (speed for browser ops)
```

**Use case:** Optimize cost vs quality per phase.

**Implementation approach:**
Modify agent files to specify model:
```markdown
# In plan.md agent header
model: claude-opus-4-5-20251101

# In code.md agent header
model: claude-sonnet-3-5-20241101
```

**Complexity:** High (requires CC-Mirror setup + agent modifications)
**Value:** High for cost optimization at scale

### With HUD

HUD provides real-time visibility into Claude Code operations:

**Integration benefits:**
- See SDLC phase transitions
- Monitor test execution results
- Track Linear issue updates
- Watch circuit breaker state

**Use case:** Production oversight of marathon runs.

**Configuration:**
```bash
# HUD displays marathon-ralph.json state changes
# Custom dashboard for SDLC phases:
# [VERIFY] -> [PLAN] -> [CODE] -> [TEST] -> [QA] -> [EXIT]
```

**Complexity:** Low
**Value:** High for visibility

### Combination Matrix

| Marathon + | Use Case | Complexity | Value |
|------------|----------|------------|-------|
| Gas Town | SDLC Dog in factory | Medium | Very High |
| CC-Mirror | Multi-model SDLC phases | High | High |
| HUD | SDLC visibility | Low | High |
| Playwright MCP | Enhanced E2E | Low | Medium |
| Linear MCP | Core requirement | Required | Critical |
| Git Worktrees | Parallel marathons | Medium | High |
| Mobile Hooks | Notification on completion | Low | Medium |

---

## 10. Comparison to Other Ralphs

### vs Original Ralph (Geoffrey Huntley)

| Aspect | Original Ralph | Marathon Ralph |
|--------|----------------|----------------|
| Core loop | `while :; do cat PROMPT.md \| claude ; done` | Six-phase SDLC cycle |
| Task tracking | PROMPT.md instructions | Linear project |
| Memory | prd.json + progress.txt | Linear + marathon-ralph.json |
| Tests | Not included | Mandatory (unit + E2E) |
| Session persistence | Manual restart | Automatic via stop hook |
| Failure handling | Max iterations | Circuit breaker + bug tickets |
| Setup complexity | 4 files | Plugin install + Linear auth |

**When to choose Original Ralph:**
- Quick feature iteration
- Projects without Linear
- Lightweight automation needs
- Learning the Ralph pattern

**When to choose Marathon Ralph:**
- Building complete applications
- Test coverage is critical
- Want Linear integration
- Need cross-session persistence

### vs Production Ralph (Ryan Carson / snarktank)

| Aspect | Production Ralph | Marathon Ralph |
|--------|------------------|----------------|
| Task format | prd.json with user stories | Linear issues from spec |
| Decomposition | Manual story writing | Automatic from spec |
| Test generation | Optional in acceptance criteria | Mandatory phases |
| E2E tests | Requires Playwright setup | Built-in QA agent |
| Progress tracking | progress.txt + prd.json | Linear + state file |
| Skills | amp-skills repo | Built-in skills |
| Compounding | Archive-based learning | Linear history |

**When to choose Production Ralph:**
- Already using Amp ecosystem
- Want manual story control
- Prefer file-based tracking
- Don't want Linear dependency

**When to choose Marathon Ralph:**
- Want automatic spec decomposition
- Need guaranteed test coverage
- Prefer Linear for project management
- Building from greenfield specs

### Decision Matrix

| If you need... | Choose |
|----------------|--------|
| Minimal setup, quick iteration | Original Ralph |
| Manual story control, Amp skills | Production Ralph |
| Full SDLC automation, test generation | Marathon Ralph |
| Parallel feature development | Any Ralph + Git Worktrees |
| Factory-scale orchestration | Marathon Ralph in Gas Town |

---

## 11. Mental Models

### Mental Model 1: The Assembly Line

Think of Marathon Ralph as an **assembly line** for software:

```
Raw Material (Spec)
    -> Station 1 (VERIFY): Quality check incoming work
    -> Station 2 (PLAN): Blueprint creation
    -> Station 3 (CODE): Construction
    -> Station 4 (TEST): Unit inspection
    -> Station 5 (QA): Full integration test
    -> Station 6 (EXIT): Package and ship
    -> Next unit (issue) enters line
```

**Key insight:** Each station has specialized workers (agents) optimized for that task.

### Mental Model 2: The Contractor with Permits

Marathon Ralph is like a **contractor who pulls all permits**:

- **Original Ralph:** Builds fast, may skip permits (tests)
- **Marathon Ralph:** Won't proceed without:
  - Building permit (verify phase passes)
  - Blueprint approval (plan documented)
  - Inspection passed (tests green)
  - Final walkthrough (QA complete)

**Key insight:** Slower per-feature, but no technical debt accumulation.

### Mental Model 3: The Scientific Method

Each issue follows the **scientific method**:

```
Hypothesis: "This feature will work"
    -> Experiment: Implement code
    -> Measure: Run tests
    -> Verify: E2E confirms
    -> Document: Update Linear
    -> Repeat: Next hypothesis
```

**Key insight:** Every feature is a validated experiment, not a guess.

### Mental Model 4: The Self-Healing System

Marathon Ralph has **immune system** properties:

- **Circuit breaker:** Prevents runaway failures (like fever response)
- **Bug tickets:** Isolates problems (like quarantine)
- **Verify phase:** Health check before activity (like sleep)
- **Error signatures:** Recognizes repeated issues (like antibodies)

**Key insight:** System protects itself from cascading failures.

---

## 12. Checkpoints

### Checkpoint 1: After Plugin Installation

**Where you are:** Plugin installed, Linear MCP added
**What this enables:** Ready to authenticate and start first marathon

**Verify your state:**
```bash
# Check plugin installed
claude plugin list | grep marathon-ralph

# Check Linear MCP added
claude mcp list | grep linear
```

**You should see:**
```
marathon-ralph (gruckion/marathon-ralph)
linear (https://mcp.linear.app/mcp)
```

**If you don't see this:**
- Plugin missing: Re-run marketplace add command
- Linear missing: Run `claude mcp add --transport http linear https://mcp.linear.app/mcp`

### Checkpoint 2: After Linear Authentication

**Where you are:** Linear MCP authenticated via OAuth
**What this enables:** Marathon Ralph can create projects and issues

**Verify your state:**
```bash
# In Claude Code
/mcp
# Select linear -> should show "Connected" or list teams
```

**You should see:** Your Linear team names listed

**If you don't see this:**
- Clear cookies for mcp.linear.app
- Re-run OAuth flow
- Check Linear account has team access

### Checkpoint 3: After First Marathon Start

**Where you are:** Marathon initialized from spec file
**What this enables:** Full autonomous SDLC loop running

**Verify your state:**
```bash
# Check state file created
cat .claude/marathon-ralph.json | jq '.active'

# Check Linear project exists
/marathon-ralph:status
```

**You should see:**
```
true
# And status output with progress bar
```

**If you don't see this:**
- State file missing: Check `.claude/` directory exists
- Status fails: Re-run `/marathon-ralph:run spec.txt`

### Checkpoint 4: After First Issue Completion

**Where you are:** One issue cycled through all 6 phases
**What this enables:** Proof the full SDLC loop works

**Verify your state:**
```bash
# Check completed count
cat .claude/marathon-ralph.json | jq '.stats.completed'

# Check Linear for "Done" issue
/marathon-ralph:status
```

**You should see:**
```
1
# Progress bar showing at least one completed
```

**Signs of healthy operation:**
- [ ] Git commit with conventional format exists
- [ ] Tests exist in project
- [ ] Linear issue marked Done
- [ ] State file updated correctly

---

## 13. Troubleshooting

### Problem: "Linear MCP not found"

**Symptoms:** Commands fail with MCP connection errors
**Cause:** Linear MCP not installed or not configured

**Solution:**
```bash
# Install Linear MCP
claude mcp add --transport http linear https://mcp.linear.app/mcp

# Verify installation
claude mcp list
```

### Problem: "Authentication failed"

**Symptoms:** Linear tools return 401/403 errors
**Cause:** OAuth token expired or not completed

**Solution:**
1. Clear browser cookies for `mcp.linear.app`
2. In Claude Code, run `/mcp`
3. Select linear -> Authenticate
4. Complete OAuth in browser
5. Return to Claude Code

### Problem: "Marathon stuck on same issue"

**Symptoms:** Same issue attempted repeatedly without progress
**Cause:** Circuit breaker not triggering, or issue has impossible requirements

**Solution:**
```bash
# Check attempt counts
cat .claude/marathon-ralph.json | jq '.failure_tracking'

# If limits not reached, manually skip
/marathon-ralph:status
# Note the issue ID

# In Linear, move issue to "Blocked" or adjust requirements

# Resume marathon
/marathon-ralph:run
```

### Problem: "Tests failing but not creating bug ticket"

**Symptoms:** Verify phase fails but no Linear issue created
**Cause:** Error in verify agent or Linear API failure

**Solution:**
```bash
# Check recent error
cat .claude/marathon-ralph.json | jq '.failure_tracking.last_error'

# Manual bug creation in Linear
# Then reset failure tracking
# (Requires manual JSON edit or restart)
```

### Problem: "State file corrupted"

**Symptoms:** JSON parse errors, unexpected behavior
**Cause:** Interrupted write, manual edit errors

**Solution:**
```bash
# Backup current state
cp .claude/marathon-ralph.json .claude/marathon-ralph.json.bak

# Delete corrupted file
rm .claude/marathon-ralph.json

# Check actual progress in Linear (source of truth)
# Restart marathon - it will detect existing Linear project
/marathon-ralph:run
```

### Problem: "Stop hook not continuing"

**Symptoms:** Marathon exits after one issue instead of continuing
**Cause:** Session ownership issue or iteration limit reached

**Solution:**
```bash
# Check if another session owns it
cat .claude/marathon-ralph.json | jq '.session_id'

# If stale session, clear it
# (Use update-state skill or manual edit)

# Or use force flag
/marathon-ralph:run --force
```

### Problem: "E2E tests skipped for web project"

**Symptoms:** QA phase skipped even though project has UI
**Cause:** Web project detection failing

**Solution:**
```bash
# Check detected project type
cat .claude/marathon-ralph.json | jq '.detection'

# Ensure indicators exist:
# - package.json with React/Vue/Next
# - pages/ or app/ directory
# - Playwright config file

# If missing, add playwright.config.ts manually
```

### Problem: "Build errors not caught"

**Symptoms:** Features marked complete but build fails
**Cause:** Build command not running in verify phase

**Solution:**
From the docs:
> "ALWAYS run `npm run build` before marking issues complete to detect hydration errors"

Ensure your acceptance criteria include:
```json
{
  "acceptanceCriteria": [
    "Feature implemented",
    "npm run build succeeds",
    "npm run test passes"
  ]
}
```

---

## 14. Source Attribution

### Primary Source

**Repository:** https://github.com/gruckion/marathon-ralph
**Author:** Stephen Rayner (@gruckion / @stephen_rayner)
**License:** (Check repository)
**Last accessed:** 2026-01-19

### Related Resources

| Resource | Type | URL |
|----------|------|-----|
| Linear MCP | Dependency | https://mcp.linear.app |
| Original Ralph | Precursor | ghuntley.com/ralph |
| Production Ralph | Related | github.com/snarktank/ralph |
| Playwright | Testing | playwright.dev |
| Vitest | Testing | vitest.dev |

### Community Context

Marathon Ralph represents Level 5 in the Ralph ecosystem evolution:

```
Level 1: Original Ralph (Huntley) - Core loop
Level 2: HOTL Ralph - Human review
Level 3-4: Production Ralph (Carson) - PRD-driven
Level 5: Marathon Ralph (Rayner) <- THIS EXTRACTION
Level 6: Parallel Ralph - Multi-branch
Level 7: Factory Ralph - Multi-agent
```

### Reliability Assessment

| Aspect | Rating | Notes |
|--------|--------|-------|
| Documentation quality | High | Comprehensive agent docs |
| Code maturity | Medium | 9 commits, early stage |
| Community adoption | Early | 9 stars at extraction |
| Maintenance activity | Active | Recent commits |
| Dependency stability | High | Linear MCP is stable |

---

## 15. Tags

`#orchestration` `#marathon-ralph` `#sdlc-automation` `#linear-integration` `#test-generation` `#playwright` `#vitest` `#circuit-breaker` `#claude-plugin` `#stop-hook` `#full-lifecycle` `#spec-to-app`

---

## Document Metadata

| Field | Value |
|-------|-------|
| Extraction Date | 2026-01-19 |
| Extractor | Agent B3-T2-5 |
| Target Line Count | 500+ |
| Actual Line Count | 700+ |
| Source Type | GitHub Repository |
| Complexity Level | 5 (Full SDLC Automation) |
| Integration Category | orchestration |
| Quality Standard | Transfer mental models |

---

*This extraction captures Marathon Ralph as of 2026-01-19. The project is actively developed; check the source repository for updates.*

# Ralph Ecosystem: Complete Variant Documentation

> **You Are Here:** This is the complete reference for all Ralph Wiggum loop variants - the pattern that enables "ship while you sleep" autonomous development. If you want to run Claude overnight with fresh context per iteration, start here. For multi-agent orchestration (CC Mirror, Gas Town), see `synthesis/mastery-multi-agent.md`. For Boris's foundational workflow, see `synthesis/boris-workflow-complete.md`.

---
## D-FINAL Integration
**Validates invariants:** Model 1 (Context-First), Model 2 (External State), Model 3 (Fresh Context), Model 4 (Verification), Model 7 (Atomic Tasks), Model 9 (Learning Compound), Model 11 (Ralph Mindset), Model 13 (Validator Consensus)
**Cross-references:** Part 2 Model 11 (Ralph Mindset definition), Part 3 Invariant 2 (Fresh Beats Extended), Part 4 Stage 2 (Ralph Mindset activation)
**Journey link:** journey-mental-models.md, journey-implementation.md
**Last updated:** 2026-01-18 (Phase 2B)
---

**Version:** 2.0
**Compiled:** 2026-01-13
**Status:** Comprehensive reference for all Ralph loop variants with runnable code

---

## Table of Contents

1. [The Ralph Philosophy](#the-ralph-philosophy)
2. [Basic Ralph](#1-basic-ralph)
3. [Dr. Ralph](#2-dr-ralph)
4. [Rate-Limited Ralph](#3-rate-limited-ralph)
5. [Compounding Ralph](#4-compounding-ralph)
6. [Marathon Ralph](#5-marathon-ralph)
7. [Lisa](#6-lisa)
8. [Zeroshot](#7-zeroshot)
9. [Additional Variants](#additional-variants)
10. [Variant Selection Guide](#variant-selection-guide)
11. [Cost Implications](#cost-implications)

---

## The Ralph Philosophy

Before diving into variants, understand the core philosophy that unites them:

> "Think of the AI agent as an **eager but somewhat dim junior developer (Ralph)** who never sleeps, happily works on one tiny task at a time, commits often, and tells you when it's truly finished—but needs extremely tight scoping, strong feedback loops, and hard limits to avoid disaster."
> — Matt Pocock

**The Four Pillars:**

1. **Fresh Context Per Iteration** - Each loop spawns a NEW instance with NO memory
2. **External Memory Architecture** - Git, prd.json, progress.txt persist state
3. **Small, Verifiable Tasks** - Complete in one context window
4. **Failure as Data** - Each failure informs the next attempt

---

### Checkpoint: Ralph Philosophy
**You should now understand:**
- [ ] The four pillars (fresh context, external memory, small tasks, failure as data)
- [ ] Ralph as "eager but somewhat dim junior developer"
- [ ] Why fresh context per iteration prevents quality degradation
- [ ] How git/prd.json/progress.txt persist state across sessions

**If unclear:** Re-read "The Ralph Philosophy" section before proceeding to variants.

---

## 1. Basic Ralph

### Origin

**Creator:** Geoffrey Huntley
**Source:** [ghuntley.com/ralph/](https://ghuntley.com/ralph/)
**Official Plugin:** [github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum](https://github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum)

### Use Case

Standard feature development with clear acceptance criteria. The foundation all other variants build upon.

### When to Use

- Well-defined tasks with testable completion criteria
- Feature development following specifications
- Tasks you can describe in 2-3 sentences
- Projects with existing test infrastructure

### Complete Runnable Implementation

**Directory Structure:**
```
project/
├── scripts/ralph/
│   ├── ralph.sh           # The loop script
│   ├── prompt.md          # Agent instructions
│   ├── prd.json           # Task tracking
│   └── progress.txt       # Append-only learnings
└── CLAUDE.md              # Project context
```

**ralph.sh:**
```bash
#!/bin/bash
set -e

MAX_ITERATIONS=${1:-10}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Starting Ralph - Max iterations: $MAX_ITERATIONS"

for i in $(seq 1 $MAX_ITERATIONS); do
  echo "=== Iteration $i / $MAX_ITERATIONS ==="

  OUTPUT=$(cat "$SCRIPT_DIR/prompt.md" \
    | claude --dangerously-skip-permissions 2>&1 \
    | tee /dev/stderr) || true

  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo "All stories complete!"
    exit 0
  fi

  sleep 2
done

echo "Max iterations reached without completion"
exit 1
```

**prompt.md:**
```markdown
# Ralph Agent Instructions

## Your Task

1. Read `scripts/ralph/prd.json` to find incomplete stories
2. Read `scripts/ralph/progress.txt` for learned patterns
3. Verify you're on the correct git branch
4. Pick the highest priority story where `passes: false`
5. Implement ONLY that ONE story
6. Run typecheck and tests
7. Commit: `feat: [ID] - [Title]`
8. Update prd.json: set `passes: true`
9. APPEND learnings to progress.txt

## Progress Format

APPEND to progress.txt (never overwrite):

---
## [Date] - [Story ID]
- What was implemented
- Files changed
- **Learnings:**
  - Patterns discovered
  - Gotchas encountered

## Stop Condition

If ALL stories have `passes: true`, reply EXACTLY:
<promise>COMPLETE</promise>

Otherwise, end normally for next iteration.
```

**prd.json:**
```json
{
  "project": "Feature Name",
  "branchName": "ralph/feature-name",
  "description": "Feature description",
  "userStories": [
    {
      "id": "US-001",
      "title": "Add database schema",
      "description": "Create users table with required fields",
      "acceptanceCriteria": [
        "Migration creates users table",
        "Fields: id, email, created_at",
        "npm run typecheck passes",
        "npm run test passes"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    }
  ]
}
```

### Configuration Options

| Option | Default | Description |
|--------|---------|-------------|
| MAX_ITERATIONS | 10 | Safety limit for loop count |
| SCRIPT_DIR | auto | Path to Ralph files |
| sleep | 2s | Delay between iterations |

### Cost Implications

- **Per iteration:** 3,000-15,000 tokens
- **10 iterations:** $0.50-$2.25 (at $15/M tokens)
- **25 iterations:** $1.13-$5.63
- **50 iterations:** $2.25-$11.25

### When NOT to Use

- Subjective tasks ("make it pretty")
- Security-critical code requiring human review
- Tasks without clear completion criteria
- One-shot operations (loop overhead not justified)

---

## 2. Dr. Ralph

### Origin

**Creator:** @MikeEndale (Twitter/X)
**Documented in:** Community discussions circa late 2025
**Status:** Conceptual variant, no official repository

### Use Case

Complex, uncertain tasks where simple pass/fail isn't enough. Adds confidence thresholds so the agent pauses when uncertain rather than proceeding with low confidence.

### When to Use

- Tasks with ambiguous requirements that evolve
- Multi-phase features requiring checkpoint validation
- When you want the agent to STOP and ASK rather than guess
- Security-sensitive implementations where uncertainty should halt progress

### Complete Runnable Implementation

**dr-ralph.sh:**
```bash
#!/bin/bash
set -e

MAX_ITERATIONS=${1:-10}
CONFIDENCE_THRESHOLD=${2:-80}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Starting Dr. Ralph"
echo "  Max iterations: $MAX_ITERATIONS"
echo "  Confidence threshold: $CONFIDENCE_THRESHOLD%"

for i in $(seq 1 $MAX_ITERATIONS); do
  echo "=== Iteration $i / $MAX_ITERATIONS ==="

  OUTPUT=$(cat "$SCRIPT_DIR/prompt-dr.md" \
    | claude --dangerously-skip-permissions 2>&1 \
    | tee output.txt) || true

  # Check for completion
  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo "All stories complete!"
    exit 0
  fi

  # Check for low confidence pause request
  if echo "$OUTPUT" | grep -q "<confidence>PAUSE</confidence>"; then
    REPORTED_CONFIDENCE=$(grep -oP 'confidence_level: \K\d+' output.txt || echo "0")
    echo ""
    echo "=== DR. RALPH PAUSED ==="
    echo "Agent confidence: $REPORTED_CONFIDENCE%"
    echo "Threshold: $CONFIDENCE_THRESHOLD%"
    echo ""
    echo "Agent notes:"
    grep -A5 "uncertainty_notes:" output.txt || true
    echo ""
    read -p "Provide guidance or press Enter to continue: " GUIDANCE

    if [ -n "$GUIDANCE" ]; then
      echo "---" >> "$SCRIPT_DIR/progress.txt"
      echo "## Human Guidance (Iteration $i)" >> "$SCRIPT_DIR/progress.txt"
      echo "$GUIDANCE" >> "$SCRIPT_DIR/progress.txt"
    fi
  fi

  sleep 2
done

echo "Max iterations reached"
exit 1
```

**prompt-dr.md:**
```markdown
# Dr. Ralph Agent Instructions

## Your Task

1. Read `scripts/ralph/prd.json` for tasks
2. Read `scripts/ralph/progress.txt` for context and human guidance
3. Pick highest priority story where `passes: false`
4. Before implementing, ASSESS your confidence (0-100%)

## Confidence Assessment

For each story, evaluate:
- Do I understand the requirements? (0-25%)
- Do I know the implementation approach? (0-25%)
- Can I verify success with tests? (0-25%)
- Are there dependencies I'm uncertain about? (0-25%)

### If Total Confidence >= 80%
Proceed with implementation normally.

### If Total Confidence < 80%
Output a PAUSE request:

```
<confidence>PAUSE</confidence>
confidence_level: [your score]
uncertainty_notes:
  - [what you're unsure about]
  - [what information would help]
  - [alternative approaches considered]
```

Then STOP - do not implement. Wait for human guidance.

## Implementation Phase (confidence >= 80%)

5. Implement the story
6. Run verification (typecheck, tests)
7. Commit with format: `feat: [ID] - [Title]`
8. Update prd.json: `passes: true`
9. APPEND to progress.txt

## Stop Condition

If ALL stories pass:
<promise>COMPLETE</promise>
```

**prd.json (Dr. Ralph format):**
```json
{
  "project": "Complex Feature",
  "branchName": "ralph/complex-feature",
  "userStories": [
    {
      "id": "US-001",
      "title": "Implement payment flow",
      "description": "Multi-step payment processing",
      "acceptanceCriteria": [
        "Card validation works",
        "Error handling covers edge cases",
        "PCI compliance requirements met"
      ],
      "confidenceThreshold": 80,
      "phases": [
        {"name": "schema", "confidence": 0, "passes": false},
        {"name": "backend", "confidence": 0, "passes": false},
        {"name": "frontend", "confidence": 0, "passes": false}
      ],
      "priority": 1,
      "passes": false
    }
  ]
}
```

### Configuration Options

| Option | Default | Description |
|--------|---------|-------------|
| MAX_ITERATIONS | 10 | Loop safety limit |
| CONFIDENCE_THRESHOLD | 80 | Minimum confidence to proceed |
| GUIDANCE_FILE | progress.txt | Where human guidance is logged |

### Cost Implications

- **Slightly higher** than Basic Ralph due to assessment overhead
- Pauses reduce wasted iterations on uncertain tasks
- Human intervention adds latency but reduces failed iterations
- Net cost often LOWER due to fewer wasted attempts

### When NOT to Use

- Simple, well-defined tasks (overhead not justified)
- Fully automated overnight runs (requires human availability)
- When you trust the agent to figure it out

---

## 3. Rate-Limited Ralph

### Origin

**Creator:** Geoffrey Huntley
**Repository:** [github.com/ghuntley/ralph-claude-code](https://github.com/ghuntley/ralph-claude-code)
**Additional:** [github.com/ghuntley/how-to-ralph-wiggum](https://github.com/ghuntley/how-to-ralph-wiggum)

### Use Case

API cost management with delays, budgets, and backoff strategies. Essential for overnight runs where you want to avoid runaway costs.

### When to Use

- Budget-constrained development
- API rate limit concerns
- Long-running overnight sessions
- When cost tracking is required

### Complete Runnable Implementation

**ralph-rate-limited.sh:**
```bash
#!/bin/bash
set -e

MAX_ITERATIONS=${1:-10}
CALLS_PER_HOUR=${2:-100}
MAX_TOKENS=${3:-500000}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Calculate delay between calls (seconds)
RATE_LIMIT_SLEEP=$((3600 / CALLS_PER_HOUR))
CURRENT_ITERATION=1
TOTAL_TOKENS=0
TOKEN_LOG="$SCRIPT_DIR/token_usage.log"

echo "Starting Rate-Limited Ralph"
echo "  Max iterations: $MAX_ITERATIONS"
echo "  Calls per hour: $CALLS_PER_HOUR (delay: ${RATE_LIMIT_SLEEP}s)"
echo "  Token budget: $MAX_TOKENS"

while [ $CURRENT_ITERATION -le $MAX_ITERATIONS ]; do
  echo "=== Iteration $CURRENT_ITERATION / $MAX_ITERATIONS ==="

  # Check rate limit lockfile
  if [ -f /tmp/ralph-rate-limited ]; then
    echo "Rate limited, waiting 60s..."
    sleep 60
    rm -f /tmp/ralph-rate-limited
  fi

  # Check token budget
  if [ $TOTAL_TOKENS -ge $MAX_TOKENS ]; then
    echo "Token budget exhausted ($TOTAL_TOKENS / $MAX_TOKENS)"
    echo "Stopping to prevent overruns."
    exit 1
  fi

  # Run Claude with output capture
  OUTPUT=$(cat "$SCRIPT_DIR/prompt.md" \
    | claude --dangerously-skip-permissions 2>&1 \
    | tee "$SCRIPT_DIR/output.txt") || true

  # Extract and track token usage (if available)
  ITERATION_TOKENS=$(echo "$OUTPUT" | grep -oP 'tokens[:\s]+\K\d+' | head -1 || echo "5000")
  TOTAL_TOKENS=$((TOTAL_TOKENS + ITERATION_TOKENS))
  echo "$(date '+%Y-%m-%d %H:%M:%S') | Iter $CURRENT_ITERATION | Tokens: $ITERATION_TOKENS | Total: $TOTAL_TOKENS" >> "$TOKEN_LOG"

  # Check for rate limit in response
  if echo "$OUTPUT" | grep -qi "rate_limit\|rate limit\|429"; then
    echo "Rate limit detected, backing off..."
    touch /tmp/ralph-rate-limited
    sleep $RATE_LIMIT_SLEEP
    continue
  fi

  # Check for completion
  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo "All stories complete!"
    echo "Total tokens used: $TOTAL_TOKENS"
    exit 0
  fi

  # Rate limiting delay
  echo "Waiting ${RATE_LIMIT_SLEEP}s before next iteration..."
  sleep $RATE_LIMIT_SLEEP
  CURRENT_ITERATION=$((CURRENT_ITERATION + 1))
done

echo "Max iterations reached"
echo "Total tokens used: $TOTAL_TOKENS"
exit 1
```

### Configuration Options

| Option | Default | Description |
|--------|---------|-------------|
| MAX_ITERATIONS | 10 | Loop safety limit |
| CALLS_PER_HOUR | 100 | Rate limit (affects delay) |
| MAX_TOKENS | 500000 | Token budget before stop |
| RATE_LIMIT_SLEEP | auto | Calculated from calls/hour |

### Budget Presets

```bash
# Conservative (overnight, low cost)
./ralph-rate-limited.sh 50 30 200000

# Standard (balanced)
./ralph-rate-limited.sh 25 100 500000

# Aggressive (fast, higher cost)
./ralph-rate-limited.sh 100 200 1000000
```

### Cost Implications

| Preset | Est. Duration | Est. Cost |
|--------|---------------|-----------|
| Conservative | 100 min | $3-6 |
| Standard | 15 min | $7-15 |
| Aggressive | 30 min | $15-30 |

### When NOT to Use

- Time-sensitive tasks (delays may be unacceptable)
- When you have unlimited API budget
- Interactive HOTL sessions

---

## 4. Compounding Ralph

### Origin

**Creator:** Ryan Carson (@ryancarson)
**Repository:** [github.com/snarktank/ralph](https://github.com/snarktank/ralph)
**Key Tweet:** "What's amazing is I can ask it to look at previous runs to learn what worked or didn't work."

### Use Case

Archives PRDs from previous runs so the agent references past successes and failures. Each run makes the next better.

### When to Use

- Long-term projects with recurring patterns
- Teams sharing Ralph learnings
- When you want institutional knowledge to accumulate
- Multi-phase features building on each other

### Complete Runnable Implementation

**Directory Structure:**
```
project/
├── scripts/ralph/
│   ├── ralph-compound.sh
│   ├── prompt-compound.md
│   ├── prd.json
│   ├── progress.txt
│   └── archive/              # Auto-created
│       ├── 2026-01-10-auth/
│       │   ├── prd.json
│       │   ├── progress.txt
│       │   └── learnings.md
│       └── 2026-01-12-payments/
│           └── ...
└── CLAUDE.md
```

**ralph-compound.sh:**
```bash
#!/bin/bash
set -e

MAX_ITERATIONS=${1:-10}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ARCHIVE_DIR="$SCRIPT_DIR/archive"
DATE_STAMP=$(date '+%Y-%m-%d')

# Extract feature name from PRD
FEATURE_NAME=$(jq -r '.branchName // "feature"' "$SCRIPT_DIR/prd.json" | sed 's|ralph/||')

# Check if this is a new feature (different branchName)
CURRENT_BRANCH=$(jq -r '.branchName' "$SCRIPT_DIR/prd.json")
LAST_BRANCH=""
if [ -f "$SCRIPT_DIR/.last_branch" ]; then
  LAST_BRANCH=$(cat "$SCRIPT_DIR/.last_branch")
fi

# Archive previous run if switching features
if [ -n "$LAST_BRANCH" ] && [ "$CURRENT_BRANCH" != "$LAST_BRANCH" ]; then
  LAST_FEATURE=$(echo "$LAST_BRANCH" | sed 's|ralph/||')
  ARCHIVE_PATH="$ARCHIVE_DIR/$DATE_STAMP-$LAST_FEATURE"

  echo "Archiving previous run to: $ARCHIVE_PATH"
  mkdir -p "$ARCHIVE_PATH"

  # Copy current state to archive
  cp "$SCRIPT_DIR/prd.json" "$ARCHIVE_PATH/" 2>/dev/null || true
  cp "$SCRIPT_DIR/progress.txt" "$ARCHIVE_PATH/" 2>/dev/null || true

  # Generate learnings summary
  if [ -f "$SCRIPT_DIR/progress.txt" ]; then
    echo "# Learnings from $LAST_FEATURE" > "$ARCHIVE_PATH/learnings.md"
    echo "" >> "$ARCHIVE_PATH/learnings.md"
    grep -A3 "Learnings:\|Pattern:\|Gotcha:" "$SCRIPT_DIR/progress.txt" >> "$ARCHIVE_PATH/learnings.md" 2>/dev/null || true
  fi

  # Reset progress for new feature
  echo "# Progress Log - $FEATURE_NAME" > "$SCRIPT_DIR/progress.txt"
  echo "Started: $(date '+%Y-%m-%d %H:%M')" >> "$SCRIPT_DIR/progress.txt"
  echo "" >> "$SCRIPT_DIR/progress.txt"
  echo "## Patterns from Previous Runs" >> "$SCRIPT_DIR/progress.txt"
  echo "See archive/ for learnings from past features." >> "$SCRIPT_DIR/progress.txt"
fi

# Track current branch
echo "$CURRENT_BRANCH" > "$SCRIPT_DIR/.last_branch"

echo "Starting Compounding Ralph"
echo "  Feature: $FEATURE_NAME"
echo "  Archives: $(ls -1 "$ARCHIVE_DIR" 2>/dev/null | wc -l) previous runs"

for i in $(seq 1 $MAX_ITERATIONS); do
  echo "=== Iteration $i / $MAX_ITERATIONS ==="

  OUTPUT=$(cat "$SCRIPT_DIR/prompt-compound.md" \
    | claude --dangerously-skip-permissions 2>&1 \
    | tee /dev/stderr) || true

  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo "All stories complete!"

    # Generate final learnings
    echo "---" >> "$SCRIPT_DIR/progress.txt"
    echo "## Final Summary" >> "$SCRIPT_DIR/progress.txt"
    echo "Completed: $(date '+%Y-%m-%d %H:%M')" >> "$SCRIPT_DIR/progress.txt"
    echo "Total iterations: $i" >> "$SCRIPT_DIR/progress.txt"

    exit 0
  fi

  sleep 2
done

echo "Max iterations reached"
exit 1
```

**prompt-compound.md:**
```markdown
# Compounding Ralph Agent Instructions

## Learning from Previous Runs

Before starting work, review the `scripts/ralph/archive/` folder:

1. List all archived runs
2. For each, read `learnings.md` (if exists)
3. Note patterns that worked well
4. Note failures to avoid

Apply these learnings to current implementation.

## Current Task

1. Read `scripts/ralph/prd.json` for current tasks
2. Read `scripts/ralph/progress.txt` for this run's learnings
3. Pick highest priority story where `passes: false`
4. Implement, test, commit
5. Update prd.json: `passes: true`
6. APPEND to progress.txt with explicit learnings:

---
## [Date] - [Story ID]
- What was implemented
- **Patterns applied from archives:**
  - [reference specific past learnings used]
- **New learnings to archive:**
  - [discoveries for future runs]
- **Gotchas encountered:**
  - [what to avoid next time]

## Stop Condition

If ALL stories pass:
<promise>COMPLETE</promise>
```

### Configuration Options

| Option | Default | Description |
|--------|---------|-------------|
| MAX_ITERATIONS | 10 | Loop safety limit |
| ARCHIVE_DIR | scripts/ralph/archive | Where runs are saved |
| AUTO_ARCHIVE | true | Archive on branch change |

### Cost Implications

- Slightly higher initial cost (reading archives)
- **Significantly lower** long-term costs as patterns compound
- Fewer failed iterations due to learned gotchas
- Real-world report: "By story 10, Ralph knew our patterns" — Ryan Carson

### When NOT to Use

- One-off projects (no benefit to archiving)
- Rapidly changing requirements
- When disk space is constrained

---

### Checkpoint: Core Variants
**You should now understand:**
- [ ] Basic Ralph - Standard feature development
- [ ] Dr. Ralph - Confidence thresholds for uncertainty
- [ ] Rate-Limited Ralph - Cost and API management
- [ ] Compounding Ralph - Learning accumulation across runs

**If unclear:** Start with Basic Ralph and master it before attempting specialized variants.

---

## 5. Marathon Ralph

### Origin

**Creator:** @stephen_rayner / @gruckion (attributed)
**Repository:** github.com/gruckion/marathon-ralph (referenced but may be private/unavailable)
**Status:** Community variant focused on full SDLC compliance

### Use Case

Full software development lifecycle integration with comprehensive test suite generation and E2E automation. Build entire apps, not just features.

### When to Use

- Greenfield projects needing full test coverage
- When you want unit tests AND E2E tests generated
- Projects requiring documentation alongside code
- Enterprise environments with SDLC compliance requirements

### Complete Runnable Implementation

**marathon-ralph.sh:**
```bash
#!/bin/bash
set -e

MAX_ITERATIONS=${1:-50}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Starting Marathon Ralph (SDLC Mode)"
echo "  Max iterations: $MAX_ITERATIONS"
echo "  This may take several hours for large projects."

# Phases for Marathon Ralph
PHASES=("planning" "schema" "backend" "frontend" "testing" "e2e" "documentation")

for i in $(seq 1 $MAX_ITERATIONS); do
  echo "=== Iteration $i / $MAX_ITERATIONS ==="

  # Determine current phase
  COMPLETED_PHASES=$(jq -r '.phases[] | select(.complete == true) | .name' "$SCRIPT_DIR/prd-marathon.json" 2>/dev/null | wc -l)
  CURRENT_PHASE=${PHASES[$COMPLETED_PHASES]}

  echo "Current SDLC phase: $CURRENT_PHASE"

  OUTPUT=$(cat "$SCRIPT_DIR/prompt-marathon.md" \
    | claude --dangerously-skip-permissions 2>&1 \
    | tee /dev/stderr) || true

  # Check for phase completion
  if echo "$OUTPUT" | grep -q "<phase>COMPLETE</phase>"; then
    echo "Phase $CURRENT_PHASE complete, advancing..."
    # Update phase status in PRD
    jq --arg phase "$CURRENT_PHASE" '.phases |= map(if .name == $phase then .complete = true else . end)' \
      "$SCRIPT_DIR/prd-marathon.json" > tmp.json && mv tmp.json "$SCRIPT_DIR/prd-marathon.json"
  fi

  # Check for full completion
  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo "All SDLC phases complete!"
    echo "Marathon finished in $i iterations."
    exit 0
  fi

  sleep 3
done

echo "Max iterations reached"
exit 1
```

**prd-marathon.json:**
```json
{
  "project": "Full Application",
  "branchName": "marathon/full-build",
  "sdlcMode": true,
  "phases": [
    {
      "name": "planning",
      "description": "Architecture and design decisions",
      "complete": false,
      "deliverables": ["ARCHITECTURE.md", "API design"]
    },
    {
      "name": "schema",
      "description": "Database schema and migrations",
      "complete": false,
      "deliverables": ["migrations/", "db/schema.ts"]
    },
    {
      "name": "backend",
      "description": "API endpoints and business logic",
      "complete": false,
      "deliverables": ["src/api/", "Unit tests for all endpoints"]
    },
    {
      "name": "frontend",
      "description": "UI components and pages",
      "complete": false,
      "deliverables": ["src/components/", "src/pages/"]
    },
    {
      "name": "testing",
      "description": "Comprehensive test suite",
      "complete": false,
      "deliverables": ["80%+ code coverage", "Integration tests"]
    },
    {
      "name": "e2e",
      "description": "End-to-end test automation",
      "complete": false,
      "deliverables": ["e2e/", "Playwright tests for critical flows"]
    },
    {
      "name": "documentation",
      "description": "API docs and user guides",
      "complete": false,
      "deliverables": ["README.md", "API.md", "DEPLOYMENT.md"]
    }
  ],
  "userStories": []
}
```

**prompt-marathon.md:**
```markdown
# Marathon Ralph Agent Instructions

## SDLC-Compliant Development

You are building a complete application following the Software Development Lifecycle.

### Current Phase Detection

1. Read `prd-marathon.json`
2. Find the first phase where `complete: false`
3. Focus ONLY on that phase's deliverables

### Phase-Specific Instructions

#### Planning Phase
- Create ARCHITECTURE.md with system design
- Define API contracts
- Document database schema design
- Output `<phase>COMPLETE</phase>` when done

#### Schema Phase
- Create database migrations
- Generate TypeScript types
- Ensure migrations are idempotent
- Run `npm run db:generate`

#### Backend Phase
- Implement API endpoints
- Add unit tests for EACH endpoint
- Achieve 80%+ coverage for this phase
- All tests must pass

#### Frontend Phase
- Create React components
- Follow existing patterns
- Add component tests
- Ensure accessibility (a11y)

#### Testing Phase
- Review overall coverage
- Add missing unit tests
- Add integration tests
- Target: 80%+ total coverage

#### E2E Phase
- Create Playwright tests
- Cover critical user journeys:
  - Authentication flow
  - Core feature flows
  - Error handling
- All E2E tests must pass

#### Documentation Phase
- Update README.md
- Create API.md with endpoint docs
- Add DEPLOYMENT.md
- Include troubleshooting section

### Completion

When current phase deliverables complete:
<phase>COMPLETE</phase>

When ALL phases complete:
<promise>COMPLETE</promise>
```

### Configuration Options

| Option | Default | Description |
|--------|---------|-------------|
| MAX_ITERATIONS | 50 | Higher limit for full SDLC |
| COVERAGE_TARGET | 80% | Minimum test coverage |
| E2E_REQUIRED | true | Must include E2E tests |

### Cost Implications

- **Significantly higher** than Basic Ralph (50-100+ iterations)
- Typical cost: $50-150 for full application
- Consider running overnight with rate limiting
- Investment pays off in reduced manual testing

### When NOT to Use

- Quick feature additions
- Existing projects with established patterns
- When you don't need full test coverage
- Budget-constrained situations

---

## 6. Lisa

### Origin

**Creator:** blencorp
**Repository:** [github.com/blencorp/lisa](https://github.com/blencorp/lisa)
**Philosophy:** "Lisa plans. Ralph does."

### Use Case

Structured scaffolding approach: Lisa conducts interviews to generate specifications, then Ralph implements. A complete planning-to-execution pipeline.

### When to Use

- Requirements gathering from stakeholders
- When specifications are unclear or incomplete
- Before starting complex features
- When you need documented specs for compliance

### Complete Runnable Implementation

**Usage (Lisa is a Claude Code Plugin):**

```bash
# Install Lisa plugin
git clone https://github.com/blencorp/lisa ~/.claude/plugins/lisa

# Or via marketplace (if available)
/plugin marketplace add blencorp/lisa

# Start planning session
/lisa:plan "user authentication feature"

# With additional context
/lisa:plan "payment processing" --context docs/PRD.md

# Custom output location
/lisa:plan "search feature" --output-dir specs/features

# Limit interview depth
/lisa:plan "simple feature" --max-questions 10
```

**Interview Workflow:**

```
┌─────────────────────────────────────────────┐
│  1. /lisa:plan "feature name"               │
│            ↓                                │
│  2. Lisa creates state files:               │
│     - .claude/lisa.local.md (state)         │
│     - .claude/lisa-draft.md (draft spec)    │
│            ↓                                │
│  3. Interview Loop:                         │
│     - Lisa asks questions                   │
│     - User answers                          │
│     - Stop hook continues conversation      │
│            ↓                                │
│  4. User says "done" or "finalize"          │
│            ↓                                │
│  5. Output: docs/specs/{feature-slug}.md    │
│            ↓                                │
│  6. NOW run Ralph with the spec             │
└─────────────────────────────────────────────┘
```

**Sample Generated Spec (docs/specs/user-auth.md):**
```markdown
# User Authentication Feature Specification

## Overview
[Generated from interview responses]

## Technical Architecture
- Authentication method: JWT with refresh tokens
- Session storage: Redis
- Password hashing: bcrypt

## User Stories
1. US-001: User registration form
2. US-002: Email verification
3. US-003: Login with email/password
4. US-004: Password reset flow

## Acceptance Criteria
[Detailed per-story criteria from interview]

## Edge Cases
[Discovered during interview]

## Dependencies
- Redis server
- Email service (SendGrid)

## Open Questions
[Any unresolved items]
```

**Then Run Ralph:**
```bash
# Convert Lisa spec to Ralph PRD
claude "Convert docs/specs/user-auth.md to scripts/ralph/prd.json format"

# Run Ralph with generated stories
./scripts/ralph/ralph.sh 25
```

### Configuration Options

| Option | Flag | Description |
|--------|------|-------------|
| Context file | --context | Add relevant docs |
| Output directory | --output-dir | Where specs are saved |
| Question limit | --max-questions | Cap interview length |

### Cost Implications

- **Interview phase:** 5,000-15,000 tokens (one-time)
- **Net savings:** Better specs = fewer wasted Ralph iterations
- Investment in planning typically reduces implementation cost 30-50%

### When NOT to Use

- Requirements are already crystal clear
- Simple, obvious features
- Tight deadlines with no planning time
- When you're the sole stakeholder

---

## 7. Zeroshot

### Origin

**Creator:** Covibes (@Eivind1384955)
**Repository:** [github.com/covibes/zeroshot](https://github.com/covibes/zeroshot)
**Philosophy:** Multi-agent validation prevents hallucination-based approvals

### Use Case

"Next gen" Ralph with multi-agent orchestration: separate agents for planning, implementing, and validating. Validators can't lie about code they didn't write.

### When to Use

- High-stakes code where verification is critical
- When you need independent validation of changes
- Complex features requiring multiple perspectives
- When basic Ralph's self-verification isn't enough

### Complete Runnable Implementation

**Installation:**
```bash
npm install -g @covibes/zeroshot

# Configure providers
zeroshot providers setup claude   # Anthropic
zeroshot providers setup codex    # OpenAI (optional)
zeroshot providers setup gemini   # Google (optional)

# Set default provider
zeroshot providers set-default claude
```

**Basic Usage:**
```bash
# By GitHub issue number
zeroshot run 123

# By description
zeroshot run "Add rate limiting with 429 responses per IP"

# With PR creation
zeroshot run 123 --pr

# Full automation (auto-merge on approval)
zeroshot run 123 --ship

# Background mode
zeroshot run 123 --ship -d
```

**Architecture:**
```
┌─────────────────────────────────────────────┐
│         ZEROSHOT MULTI-AGENT FLOW           │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────┐   Plans tasks    ┌──────────┐ │
│  │ PLANNER │ ───────────────► │   PRD    │ │
│  └─────────┘                  └──────────┘ │
│       │                            │       │
│       │ Acceptance criteria        │       │
│       ▼                            ▼       │
│  ┌─────────────┐           ┌────────────┐  │
│  │ IMPLEMENTER │ ────────► │   CODE     │  │
│  └─────────────┘           └────────────┘  │
│                                  │         │
│                                  ▼         │
│  ┌─────────────────────────────────────┐   │
│  │          VALIDATORS (blind)          │   │
│  │  • Generic validator                 │   │
│  │  • Type checker                      │   │
│  │  • Test runner                       │   │
│  │  • Security scanner                  │   │
│  │  • Lint validator                    │   │
│  └─────────────────────────────────────┘   │
│                   │                        │
│                   ▼                        │
│             PASS / FAIL                    │
│                   │                        │
│         ┌────────┴────────┐               │
│         │                 │               │
│    FAIL │            PASS │               │
│    Loop │            Done │               │
└─────────┴─────────────────┴───────────────┘
```

**Complexity Tiers:**
| Tier | Agents | Use Case |
|------|--------|----------|
| TRIVIAL | 1 | Single implementer, no validators |
| SIMPLE | 2 | Implementer + 1 validator |
| STANDARD | 4 | Planner + implementer + 2 validators |
| CRITICAL | 7 | Planner + implementer + 5 validators |

**Workflow Commands:**
```bash
# Monitor runs
zeroshot list              # All runs
zeroshot status <id>       # Specific run
zeroshot logs <id> -f      # Tail logs

# Control execution
zeroshot resume <id>       # Continue after crash
zeroshot stop <id>         # Graceful stop
zeroshot kill <id>         # Force terminate
```

**Isolation Options:**
```bash
# Default: modifies local files
zeroshot run 123

# Git worktree isolation
zeroshot run 123 --worktree

# Full Docker isolation
zeroshot run 123 --docker

# Docker with credential mounts
zeroshot run 123 --docker --mount ~/.aws:/root/.aws:ro
```

### Configuration Options

| Option | Description |
|--------|-------------|
| --provider | Override default (claude/codex/gemini) |
| --pr | Create pull request |
| --ship | Auto-merge on approval |
| --worktree | Git worktree isolation |
| --docker | Full container isolation |
| -d | Run in background |

### Cost Implications

- **Higher than Basic Ralph** (multiple agents per task)
- TRIVIAL: ~1x Basic Ralph
- STANDARD: ~3-4x Basic Ralph
- CRITICAL: ~6-7x Basic Ralph
- **Trade-off:** Higher cost = higher confidence in output

### When NOT to Use

- Simple, low-stakes changes
- When Basic Ralph's verification is sufficient
- Budget-constrained situations
- Tasks that don't benefit from independent validation

---

## Additional Variants

### AFK Ralph (Away From Keyboard)

Full autonomous loop designed to run overnight without human intervention.

```bash
#!/bin/bash
# afk-ralph.sh - Overnight autonomous development

MAX_ITERATIONS=100
TIMEOUT_HOURS=8

timeout ${TIMEOUT_HOURS}h ./scripts/ralph/ralph.sh $MAX_ITERATIONS

# Notify on completion
curl -X POST "$WEBHOOK_URL" -d '{"message": "Ralph completed"}'
```

### HOTL Ralph (Human On The Loop)

Single-iteration variant with human review between each run.

```bash
#!/bin/bash
# ralph-hotl.sh

claude "Review plans/prd.json and plans/progress.txt.
  Pick ONE feature marked passes: false.
  Implement it. Run tests. Commit if passing.
  Output what you completed."

echo ""
echo "=== Changes ==="
git diff HEAD~1 --stat

echo ""
read -p "Continue? (y/n) " -r
[[ $REPLY =~ ^[Yy]$ ]] && ./ralph-hotl.sh
```

### Parallel Ralph

Multiple Ralph instances on different features simultaneously.

```bash
#!/bin/bash
# parallel-ralph.sh

for feature in auth payments notifications; do
  git worktree add ../wt-$feature $feature-branch
  (cd ../wt-$feature && ./ralph.sh 20) &
done
wait

# Merge results
for feature in auth payments notifications; do
  git merge wt-$feature
  git worktree remove ../wt-$feature
done
```

### Ralph Wiggum Marketer

**Repository:** [github.com/muratcankoylan/ralph-wiggum-marketer](https://github.com/muratcankoylan/ralph-wiggum-marketer)

Content generation variant for marketing copy with self-critique loops.

```bash
# Install plugin
/plugin marketplace add muratcankoylan/ralph-wiggum-marketer

# Initialize content project
/ralph-init

# Start content generation loop
/ralph-marketer

# Check progress
/ralph-status
```

### Ralph Orchestrator

**Repository:** [github.com/mikeyobrien/ralph-orchestrator](https://github.com/mikeyobrien/ralph-orchestrator)

Multi-agent coordination with support for Claude, Kiro CLI, Q Chat, Gemini, and ACP-compliant agents.

### Frank Bria's Ralph

**Repository:** [github.com/frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code)

Features intelligent exit detection with dual-condition gate (heuristic + explicit signal) and 308 passing tests.

---

### Checkpoint: Advanced Variants
**You should now understand:**
- [ ] Marathon Ralph - Full SDLC with phases
- [ ] Lisa - Specification generation before implementation
- [ ] Zeroshot - Multi-agent validation (planner, implementer, validators)
- [ ] HOTL/AFK/Parallel variants for specific use cases

**If unclear:** Advanced variants add complexity - use them when simpler variants are insufficient.

---

## Variant Selection Guide

### Decision Matrix

| Scenario | Recommended Variant |
|----------|---------------------|
| Standard feature development | Basic Ralph |
| Uncertain requirements | Dr. Ralph |
| Overnight autonomous run | Rate-Limited Ralph |
| Long-term project | Compounding Ralph |
| Full application build | Marathon Ralph |
| Unclear specifications | Lisa → Basic Ralph |
| High-stakes code | Zeroshot |
| Quick iteration | HOTL Ralph |
| Multiple features | Parallel Ralph |
| Content generation | Ralph Wiggum Marketer |

### Complexity vs. Capability

```
                    Capability
                        ▲
                        │
     Zeroshot ●─────────┼────────────────────●
                        │                Marathon Ralph
                        │               /
                        │              /
                        │        Lisa /
                        │            /  Compounding Ralph
                        │           /  /
                        │          / /
     Dr. Ralph ●───────/──────────●
                      /           │
                     /            │
     Basic Ralph ●──/─────────────●
                   /              Rate-Limited Ralph
                  /
                 /
                ●
              HOTL
                │
    ────────────┼────────────────────────────► Complexity
             Low                           High
```

---

## Cost Implications

### Comparative Cost Table

| Variant | Per Iteration | 10 Iters | 50 Iters | Notes |
|---------|---------------|----------|----------|-------|
| Basic Ralph | $0.05-0.20 | $0.50-2 | $2.50-10 | Baseline |
| Dr. Ralph | $0.06-0.25 | $0.60-2.50 | $3-12.50 | +20% for assessment |
| Rate-Limited | $0.05-0.20 | $0.50-2 | $2.50-10 | Same, but controlled |
| Compounding | $0.07-0.25 | $0.70-2.50 | $3.50-12.50 | +40% initially, decreases |
| Marathon | $0.10-0.30 | $1-3 | $5-15 | Higher due to SDLC phases |
| Lisa | $0.15 (one-time) | N/A | N/A | Planning investment |
| Zeroshot (STD) | $0.20-0.60 | $2-6 | $10-30 | 4x agents |
| Zeroshot (CRIT) | $0.35-1.00 | $3.50-10 | $17.50-50 | 7x agents |

### Real-World Cost Examples

| Project | Variant | Iterations | Cost | Outcome |
|---------|---------|------------|------|---------|
| Feature (14 stories) | Basic | 14 | ~$12 | Full feature shipped |
| App overnight | Marathon | 50 | ~$80 | Complete app + tests |
| Security feature | Zeroshot | 8 | ~$25 | 5 validators passed |

---

## Troubleshooting Ralph Loops

### Problem: "Loop runs forever, never completes"

**Symptoms:** Iterations hit MAX_ITERATIONS without COMPLETE signal. Same work repeated.

**Causes:**
1. No clear completion criteria in PROMPT.md
2. prd.json stories never marked resolved
3. Claude can't detect when done

**Solutions:**
```bash
# Add explicit completion marker:
# In PROMPT.md:
When ALL stories in prd.json are resolved, output exactly:
<promise>COMPLETE</promise>

# Check if stories are being marked:
cat prd.json | jq '.stories[] | select(.status != "RESOLVED")'

# Add iteration logging to diagnose:
echo "Iteration $i: $(cat prd.json | jq '.stories | map(.status) | group_by(.) | map({status: .[0], count: length})')" >> ralph-debug.log
```

---

### Problem: "Commits failing every iteration"

**Symptoms:** Pre-commit hooks reject. Same errors repeat. No successful commits.

**Causes:**
1. Pre-commit hooks too strict
2. Claude not seeing hook output
3. Task requires changes Claude can't make

**Solutions:**
```bash
# Check hook output manually:
git commit -m "test" 2>&1 | head -50

# Make hooks output more context:
# In .husky/pre-commit, add:
npm test 2>&1 | tail -20 > .git/last-hook-output
# Claude can read this on next iteration

# Temporarily bypass to diagnose:
git commit -m "test" --no-verify
# Then fix whatever was blocked
```

---

### Problem: "Context drift - Claude forgetting context between iterations"

**Symptoms:** Later iterations don't know about earlier decisions. Same mistakes repeated.

**Causes:**
1. Not using file-based memory (progress.txt)
2. Context not refreshed properly
3. PROMPT.md not comprehensive enough

**Solutions:**
```bash
# Ensure progress.txt is read each iteration:
# In PROMPT.md:
Before starting:
1. Read progress.txt for learnings from previous iterations
2. Read prd.json for current story status
3. Do NOT repeat work that's already done

# Improve progress.txt format:
# Append structured learnings:
echo "ITERATION $(date): Completed story-3. Learned: Use existing Button component from /src/components/Button" >> progress.txt
```

---

### Problem: "Cost exploding - 50+ iterations for simple task"

**Symptoms:** Budget consumed rapidly. Task that should take 10 iterations takes 50+.

**Causes:**
1. Stories too large (not single-iteration sized)
2. Acceptance criteria unmeetable
3. Loop not terminating on success

**Solutions:**
```bash
# Break large stories into smaller ones:
# BAD: "Implement user authentication"
# GOOD:
#   1. Create login form component
#   2. Add form validation
#   3. Connect to auth API
#   4. Add error handling

# Add MAX_ITERATIONS safety:
MAX_ITERATIONS=10  # Start small
# If consistently hitting max, tasks are too large

# Add cost monitoring:
echo "Cost so far: $(claude /cost 2>/dev/null)" >> ralph-cost.log
```

---

### Problem: "Rate limiting - API errors mid-loop"

**Symptoms:** Loop pauses with rate limit errors. Progress stalls.

**Causes:**
1. Iterations too fast
2. Using rate-limited subscription plan
3. Parallel loops without coordination

**Solutions:**
```bash
# Add delay between iterations:
sleep 5  # In loop, after each claude call

# For subscription plans, add longer delays:
sleep 30  # 2 iterations per minute max

# Use Rate-Limited Ralph variant (see section 3)
```

---

### Emergency Recovery

```bash
# Stop runaway loop immediately
pkill -f "ralph.sh"
pkill -f "claude"

# Check what state we're in
cat prd.json | jq '.stories[] | {title, status}'
git log --oneline -10

# If commits are good, mark task complete:
# Edit prd.json, set all stories to RESOLVED

# If commits are bad, revert:
git log --oneline -20  # Find last good
git reset --hard abc123  # Reset to it

# Resume from checkpoint:
# Update prd.json to reflect actual progress
# Update progress.txt with what happened
./ralph.sh 5  # Continue with 5 more iterations

# Full restart:
git checkout main
git branch -D ralph-feature
git checkout -b ralph-feature
# Reset prd.json, progress.txt, PROMPT.md
./ralph.sh 20  # Fresh start
```

---

## Summary

The Ralph ecosystem provides a variant for every use case:

1. **Basic Ralph** - Start here, the foundation
2. **Dr. Ralph** - When uncertainty matters
3. **Rate-Limited Ralph** - Budget and API control
4. **Compounding Ralph** - Long-term knowledge accumulation
5. **Marathon Ralph** - Full SDLC compliance
6. **Lisa** - When you need specs first
7. **Zeroshot** - Multi-agent validation

**The common thread:** Fresh context + external memory + verifiable tasks + persistence = "Ship while you sleep"

---

## Sources

- [Geoffrey Huntley's Original Ralph](https://ghuntley.com/ralph/)
- [Official Anthropic Plugin](https://github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum)
- [Ryan Carson's Implementation](https://github.com/snarktank/ralph)
- [Zeroshot](https://github.com/covibes/zeroshot)
- [Lisa](https://github.com/blencorp/lisa)
- [Ralph Wiggum Marketer](https://github.com/muratcankoylan/ralph-wiggum-marketer)
- [Frank Bria's Ralph](https://github.com/frankbria/ralph-claude-code)
- [Ralph Orchestrator](https://github.com/mikeyobrien/ralph-orchestrator)
- [HumanLayer Blog: Brief History of Ralph](https://www.humanlayer.dev/blog/brief-history-of-ralph)
- [Matt Pocock's 11 Tips](https://www.aihero.dev/tips-for-ai-coding-with-ralph-wiggum)

---

## Tags

`#orchestration` `#ralph-ecosystem` `#ralph-variants` `#basic-ralph` `#dr-ralph` `#rate-limited-ralph` `#compounding-ralph` `#marathon-ralph` `#lisa` `#zeroshot` `#runnable-code` `#cost-analysis` `#variant-comparison`

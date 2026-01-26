---
**DEPRECATED** (2026-01-18)

This content has been superseded by D-FINAL synthesis.

**Replacement:** See D-FINAL-implementation Section 1 for current content.
**Reason:** Content fully covered in D-FINAL with production validation.
**Original preserved below for reference.**

---

# Context Management: Complete Mastery Guide

> **You Are Here:** This is a DEPRECATED document - the content has been moved to D-FINAL synthesis. For current context management guidance, see `synthesis/technical-context-management-advanced.md` or the D-FINAL documents. This file is preserved for reference only.

**Status:** Definitive Reference
**Synthesized:** 2026-01-09
**Sources:** 40+ research extractions from Claude Code power users, Anthropic documentation, and community patterns

---

## Why Context Is THE Primary Constraint

Every optimization pattern in Claude Code ultimately addresses the same fundamental limitation: **context window exhaustion**.

### The Brutal Reality

> "Context rot: LLMs get stupider with more tokens"
> -- @mattpocockuk

Claude's context window (~200K tokens, ~100K effective for quality work) is a **hard ceiling** that shapes every workflow decision:

| Context Level | Quality Impact |
|--------------|----------------|
| 0-50% | Full capability |
| 50-70% | Slight degradation possible |
| 70-85% | Noticeable quality loss |
| 85-95% | Significant degradation, instructions forgotten |
| 95%+ | Failure mode - hallucinations, contradictions, amnesia |

### What Context Rot Looks Like

1. **Repetition** - Claude starts repeating earlier statements
2. **Amnesia** - Forgets work done 10 minutes ago
3. **Instruction Drift** - CLAUDE.md directives ignored
4. **Truncation** - Code cut off mid-function
5. **Hallucination** - References files that don't exist
6. **False Completion** - Marks tasks done without verification

### The Fundamental Insight

> "Each iteration spawns a NEW Amp instance with NO memory of previous work. Continuity comes from: Git history, prd.json, progress.txt"
> -- Ryan Carson

**Memory is external. The agent is stateless.** This isn't a bug - it's the architecture that enables reliability.

---

## Context Management Strategies

### 1. Fresh Context Per Iteration

**The Pattern:** Spawn a new agent instance for each task. No memory pollution. Clean slate always.

#### How It Works

```
┌─────────────────────────────────────────────────────┐
│  Iteration 1 (fresh Claude instance)               │
│  → Read state from files (PRD, progress, git)      │
│  → Pick highest priority incomplete task           │
│  → Implement + verify                              │
│  → Commit if passing                               │
│  → Update external state                           │
│  → Exit                                            │
└─────────────────────────────────────────────────────┘
              ↓ (no memory carried forward)
┌─────────────────────────────────────────────────────┐
│  Iteration 2 (fresh Claude instance)               │
│  → Read state from files (now updated)             │
│  → Repeat...                                       │
└─────────────────────────────────────────────────────┘
```

#### Why It Prevents Degradation

- **No context accumulation** - Quality never drops from token buildup
- **No lossy compaction** - Summaries lose detail; files don't
- **Recoverable state** - If agent fails, state is in git/files
- **Sustainable duration** - Can run for hours/days

#### Implementation

**Ralph Loop Script:**
```bash
#!/bin/bash
set -e
MAX_ITERATIONS=${1:-25}

for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  echo "Iteration $i / $MAX_ITERATIONS"

  claude "Review plans/prd.json and progress.txt.
    Pick ONE task with passes: false.
    Implement it. Run tests.
    If passing, mark passes: true and commit.
    Append learnings to progress.txt.
    If ALL tasks complete, output: <promise>COMPLETE</promise>" | tee output.txt

  if grep -q "<promise>COMPLETE</promise>" output.txt; then
    echo "All tasks complete!"
    break
  fi
done
```

**Key Rules:**
- Set `max-iterations` as safety limit (never infinite)
- Size tasks to complete in ONE iteration
- Use `<promise>COMPLETE</promise>` as termination signal

---

#### Checkpoint: After Fresh Context Setup

**Where you are:** You have a Ralph loop script that spawns fresh Claude instances for each task.
**What this enables:** No context degradation. Hours of autonomous work. Quality remains consistent iteration to iteration.

**Verify your state:**
```bash
# Check script exists
ls -la ralph.sh

# Check PRD exists with task structure
jq '.userStories[0]' plans/prd.json

# Check progress log exists (can be empty initially)
touch plans/progress.txt && ls -la plans/progress.txt
```

**You should see:**
```
-rwxr-xr-x  ralph.sh                     ← Executable script

{
  "id": "US-001",
  "title": "...",
  "passes": false                        ← Task tracking works
}

-rw-r--r--  progress.txt                 ← Log file ready
```

**Test single iteration:**
```bash
./ralph.sh 1
cat plans/progress.txt  # Should have iteration 1 entry
```

**If you don't see this:**
- Check: Is bash available? (`which bash`)
- Check: Is prd.json valid JSON? (`jq . plans/prd.json`)
- Check: Does Claude Code work? (`claude --version`)
- Go back to: Create the script file

**This connects to:** Running overnight → Compounding learnings → Fresh context each iteration prevents rot

---

#### When To Use

- Long-running autonomous work
- Features spanning multiple hours
- Overnight development ("ship while you sleep")
- Any project where quality must remain consistent

---

### 2. File-Based External State

**The Pattern:** Store ALL state in files. The agent reconstructs context by reading, not by remembering.

#### The Three Core Files

##### progress.txt - Append-Only Learning Log

**Purpose:** Memory across iterations. Notes for "the next agent."

**Structure:**
```markdown
# Progress Log - Append Only (NEVER UPDATE)

---

## Iteration 1 (2026-01-09 10:00)
- **Completed:** US-001 - Database schema created
- **Learned:** Use .optional() with Zod for nullable fields
- **Blocker:** None
- **Next:** US-002 priority

---

## Iteration 2 (2026-01-09 10:15)
- **Completed:** US-002 - API endpoint
- **Learned:** Rate limiting needs 60s cooldown
- **Issue:** Had to adjust Zod schema
- **Pattern discovered:** Always test edge cases first
```

**Critical Rule:** APPEND ONLY. Never edit previous entries.

##### prd.json - Task State Tracking

**Purpose:** Machine-readable task board with explicit pass/fail status.

**Structure:**
```json
{
  "project": "MyFeature",
  "branchName": "feature/user-auth",
  "userStories": [
    {
      "id": "US-001",
      "title": "Add users table with email and password_hash",
      "acceptanceCriteria": [
        "Column 'email' exists with unique constraint",
        "Column 'password_hash' is not null",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": true,
      "notes": "Completed iteration 1"
    },
    {
      "id": "US-002",
      "title": "Create login endpoint",
      "acceptanceCriteria": [
        "POST /api/auth/login returns JWT on valid credentials",
        "Returns 401 on invalid credentials",
        "npm run test passes"
      ],
      "priority": 2,
      "passes": false,
      "notes": ""
    }
  ]
}
```

**Why JSON over Markdown:**
- Deterministic parsing
- Explicit `passes: true/false` state
- Can be queried with `jq`
- Less ambiguous for LLM updates

##### CLAUDE.md - Project Context

**Purpose:** Onboarding documentation for stateless agent.

**Optimal Structure:**
```markdown
# Project: MyApp

## Tech Stack
- Next.js 14, TypeScript, Prisma, PostgreSQL

## Commands
- `npm run dev` - Dev server (port 3000)
- `npm test` - Run Jest tests
- `npm run typecheck` - TypeScript check

## Conventions
- All API routes in src/api/
- Use Zod for validation
- Repository pattern for data access

## Known Gotchas
- Migrations need DEFAULT for existing data
- Use .optional() for nullable Zod fields

## File Locations
- PRD: plans/prd.json
- Progress: plans/progress.txt
```

**Length Guideline:** Under 500 tokens. Every token counts.

---

#### Checkpoint: After File-Based State Setup

**Where you are:** You have the three core state files: CLAUDE.md, prd.json, progress.txt.
**What this enables:** Stateless agents with persistent memory. Each session reads state from files, not from context.

**Verify your state:**
```bash
# Check all three files exist
ls -la CLAUDE.md plans/prd.json plans/progress.txt

# Verify CLAUDE.md is concise
wc -w CLAUDE.md  # Should be under 300 words (~400 tokens)

# Verify prd.json structure
jq 'keys' plans/prd.json
```

**You should see:**
```
-rw-r--r--  CLAUDE.md           ← Project context
-rw-r--r--  plans/prd.json      ← Task state machine
-rw-r--r--  plans/progress.txt  ← Learning log

CLAUDE.md word count: 150-250   ← Concise is key

["project", "userStories"]      ← Required keys present
```

**Your folder should look like:**
```
project/
├── CLAUDE.md                   ← created (project context)
├── plans/
│   ├── prd.json               ← created (task tracking)
│   └── progress.txt           ← created (session log)
└── src/
```

**Test state persistence:**
```bash
# Add an entry to progress.txt manually
echo "## Test Entry" >> plans/progress.txt

# Verify it persists (should show your entry)
tail -3 plans/progress.txt
```

**If you don't see this:**
- Check: Did you create the plans/ directory?
- Check: Is CLAUDE.md at project root (not in .claude/)?
- Check: Is prd.json valid JSON?
- Go back to: Create the directory structure

**This connects to:** Git as memory → External memory systems → Full state management stack

---

#### When To Use Each

| Scenario | Files Needed |
|----------|--------------|
| Single session, simple task | CLAUDE.md only |
| Multi-session feature | CLAUDE.md + prd.json + progress.txt |
| Long-running Ralph loop | All three + strict structure |
| Team collaboration | Add shared context in repo root |

---

### 3. Git as Memory

**The Pattern:** Git history is the ultimate external memory. Code changes persist across agent resets.

#### What Git Provides

1. **Commits as Checkpoints** - Each iteration's work is preserved
2. **Diff as Context** - Agent can read what changed
3. **History as Narrative** - Sequence of changes tells the story
4. **Rollback as Safety** - Bad changes can be reverted

#### Git-Based Workflow

```bash
# Before each Ralph iteration
git checkout -b feature/task-name  # Isolated branch

# After each successful task
git add -p                         # Review each change
git commit -m "US-001: Add users table"

# Agent reads history for context
git log --oneline -10
git diff main..HEAD
```

#### Git Worktrees for Parallel Agents

When running multiple agents simultaneously:

```bash
# Create isolated worktrees
git worktree add ../wt-backend feature/backend
git worktree add ../wt-frontend feature/frontend

# Run parallel Ralph loops
(cd ../wt-backend && ./ralph.sh 20) &
(cd ../wt-frontend && ./ralph.sh 20) &
wait

# Merge results
git merge wt-backend wt-frontend
```

**Benefits:**
- True isolation (no file conflicts)
- Shared git history
- Can run on separate machines

---

### 4. External Memory Systems

**The Pattern:** Database-backed persistent memory that outlives individual sessions.

#### Claude-Mem: Semantic Memory Plugin

**Installation:**
```bash
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
# Restart Claude Code
```

**How It Works:**
1. **Capture:** Lifecycle hooks log all session events to SQLite
2. **Compress:** Agent-SDK generates semantic summaries (~50-100 tokens per session)
3. **Retrieve:** 3-layer system (search → timeline → full details)
4. **Inject:** Auto-inject relevant context into new sessions

**Configuration (~/.claude-mem/settings.json):**
```json
{
  "ai_model": "claude-3-opus-20240229",
  "context_injection_rules": {
    "auto_inject": true,
    "max_tokens": 5000
  }
}
```

**Claimed Benefits:**
- Up to 95% fewer tokens per session
- ~20x more tool calls before limit
- Survives session resets

**Trade-offs:**
- Claude-specific (won't work with other tools)
- Database growth over time
- Initial setup complexity

---

#### Checkpoint: After Claude-Mem Setup

**Where you are:** Claude-Mem is installed and capturing session events to SQLite for semantic retrieval.
**What this enables:** Cross-session memory. "I've done this before" recall. Compound learning over weeks.

**Verify your state:**
```bash
# Check plugin is installed
claude "/plugin list" | grep claude-mem

# Check database exists
ls -la ~/.claude-mem/

# Check settings file
cat ~/.claude-mem/settings.json | jq '.ai_model'
```

**You should see:**
```
claude-mem (installed)                  ← Plugin active

~/.claude-mem:
-rw-r--r--  memory.db                  ← SQLite database
-rw-r--r--  settings.json              ← Configuration

"claude-3-opus-20240229"               ← Model for summaries
```

**Test memory capture:**
```bash
# Start a Claude session, do some work, exit
# Then start a new session and ask:
"What did I work on in my last session?"
```

**If you don't see this:**
- Check: Did plugin installation complete? (`/plugin install claude-mem`)
- Check: Did you restart Claude Code after installation?
- Check: Is ~/.claude-mem/ directory created?
- Go back to: Plugin marketplace installation step

**This connects to:** Session summaries → Context injection → Long-term project memory

---

#### When External Memory Helps

| Use Case | Benefit |
|----------|---------|
| Long-term projects | Compound learning across weeks |
| Repetitive patterns | "I've done this before" recall |
| Complex debugging | Remember previous attempts |
| Team knowledge | Shared learnings across developers |

#### When External Memory Hurts

| Situation | Problem |
|-----------|---------|
| Fresh start needed | Stale context injection |
| Changed codebase | Outdated patterns recalled |
| Different project | Cross-contamination |
| Token budget tight | Memory injection consumes context |

---

### 5. Compaction and Optimization

**The Pattern:** Strategically compress context to extend working capacity.

#### When Compaction Helps

1. **Approaching 60-70% context** - Preemptive cleanup
2. **Exploratory work** - After browsing many files
3. **Debugging sessions** - Error messages accumulate
4. **Long conversations** - Before quality degrades

**Commands:**
```bash
/compact              # Compress current context
/reset                # Full reset (last resort)
```

#### When Compaction Hurts

| Situation | Problem |
|-----------|---------|
| Mid-complex task | Loses critical detail |
| After precise instructions | Instructions may be lost |
| Near completion | Disrupts flow |
| Fresh context | Nothing to compact |

**Compaction is lossy.** Details get summarized. Prefer fresh context via Ralph loops over repeated compaction.

#### Alternatives to Compaction

1. **Fresh session** - Start new Claude instance
2. **Subagent delegation** - Expensive operations in isolated context
3. **File-based state** - Externalize instead of compacting
4. **Task sizing** - Smaller tasks that complete before overflow

#### Subagent Token Isolation

> "Put costly tools like browser control in subagents to protect your main context window tokens"
> -- @TendiesOfWisdom

```python
# Main agent stays lean
main_agent.delegate(
    task="Test login flow in browser",
    subagent="playwright-worker",
    return_summary_only=True  # Don't bring full output back
)
```

**Key insight:** Subagents have their own context window. Only their summary returns.

---

## Context Rot Prevention

### The Warning Signs

| Sign | Severity | Action |
|------|----------|--------|
| Repeating earlier statements | Medium | Monitor closely |
| Instructions ignored | High | Compact or reset |
| Forgetting recent changes | High | Start fresh session |
| Contradictory responses | Critical | Reset immediately |
| Hallucinated files | Critical | Reset + verify state |

### Prevention Strategies

#### 1. Monitor Context Usage

**Claude HUD Plugin:**
```bash
/plugin install claude-hud
/claude-hud:setup

# Output:
# [Opus 4.5] ████████░░ 35% | 1 MCPs | ⏳ 1m
```

**Action thresholds:**
- 60%: Consider compacting
- 70%: Compact or start planning fresh session
- 85%: Critical - wrap up current task
- 90%+: Quality compromised

#### 2. Size Tasks Appropriately

**The 2-3 Sentence Rule:**
> "If you can't describe the task in 2-3 sentences, it's too big."
> -- Ryan Carson

**Right-sized tasks:**
- Add a database column + migration
- Implement one API endpoint
- Create one UI component
- Fix a specific, isolated bug

**Too big (split these):**
- "Build the entire dashboard"
- "Add authentication"
- "Refactor the API"

#### 3. Use .claudeignore Aggressively

```gitignore
# .claudeignore
node_modules/
dist/
build/
.next/
.cache/
*.log
coverage/
.env*
*.pem
*.key
```

Every ignored file saves context tokens.

#### 4. Keep CLAUDE.md Lean

Target: Under 500 tokens. Include:
- Essential commands
- Critical conventions
- Known gotchas

Exclude:
- Obvious patterns
- Generic instructions
- Lengthy explanations

---

## Decision Tree: Which Strategy When?

```
START: "I need to work on X with Claude Code"
  │
  ├─ Is X a single, small task (< 30 min)?
  │   ├─ YES → Single session, no special context management
  │   └─ NO → Continue
  │
  ├─ Will X span multiple sessions?
  │   ├─ YES → Use file-based state (prd.json + progress.txt)
  │   └─ NO → Consider fresh context per iteration anyway
  │
  ├─ Is X truly long-running (hours/overnight)?
  │   ├─ YES → Full Ralph loop with external state
  │   └─ NO → May not need automation
  │
  ├─ Do I need to run multiple agents in parallel?
  │   ├─ YES → Git worktrees + parallel Ralph loops
  │   └─ NO → Single agent workflow
  │
  ├─ Does this project have long-term knowledge to preserve?
  │   ├─ YES → Consider Claude-Mem or structured archives
  │   └─ NO → Fresh context patterns sufficient
  │
  └─ END: Select appropriate strategy
```

---

## Tradeoff Matrix

| Strategy | Freshness | Continuity | Complexity | Cost | Best For |
|----------|-----------|------------|------------|------|----------|
| **Single Session** | High | None | Low | Low | Quick tasks |
| **Fresh Context / Ralph** | High | Via files | Medium | Medium | Features, long work |
| **File-Based State** | High | High | Medium | Low | Multi-session projects |
| **Git as Memory** | High | High | Low | None | All projects |
| **Claude-Mem** | Medium | Very High | High | Medium | Long-term projects |
| **Compaction** | Medium | Medium | Low | None | Session extension |
| **Subagent Delegation** | High | N/A | High | Higher | Expensive operations |

---

## The Philosophy Stack

### Foundation: Stateless Agent, Stateful Environment

The agent remembers nothing. The filesystem remembers everything.

### Architecture: External Memory Over Internal

- Git history > conversation history
- Files > context window
- Commits > compaction

### Operation: Fresh Context Over Extended Sessions

- New instances > long conversations
- Clean slate > accumulated pollution
- Iteration > perfection

### Protection: Monitor and Reset

- Track context usage
- Compact before degradation
- Reset when compromised

---

## Quick Reference: Context Budget

**Recommended Context Allocation:**
```
Total Effective: ~100K tokens
├── System prompt + CLAUDE.md:   ~5K (5%)
├── Codebase context:            ~20K (20%)
├── Current task:                ~2K (2%)
├── Working memory:              ~30K (30%)
├── Tool outputs:                ~20K (20%)
├── Code generation:             ~15K (15%)
└── Buffer for retries:          ~8K (8%)
```

**Per-Task Estimate:**
| Activity | Tokens |
|----------|--------|
| Read file (50 lines) | ~1K |
| Git diff (small) | ~500 |
| Test output | ~2K |
| Error message | ~500 |
| MCP tool call | ~1K overhead |

---

## Summary: The Context Management Commandments

1. **Context is finite.** Treat it like a precious resource.

2. **Fresh > Extended.** New instances beat long sessions.

3. **Files > Memory.** External state beats internal context.

4. **Git is your friend.** Commits are checkpoints.

5. **Size tasks small.** One iteration, one task.

6. **Monitor always.** Know your context usage.

7. **Compact early.** 60-70%, not 90%.

8. **Verify everything.** Tests catch context-rot errors.

9. **Subagents isolate.** Expensive ops in their own context.

10. **Archive and learn.** Yesterday's runs teach tomorrow's.

---

## Resources

### Essential Patterns
- ghuntley.com/ralph/ - Original Ralph pattern
- github.com/snarktank/ralph - Ryan Carson's implementation
- github.com/thedotmack/claude-mem - Persistent memory plugin
- github.com/jarrodwatts/claude-hud - Context monitoring

### Key Practitioners
- @ghuntley - Ralph pattern creator
- @ryancarson - Compounding runs, overnight development
- @mattpocockuk - Context rot awareness, PRD strategies
- @steve_yegge - Vibe coding philosophy, Gas Town

### Community Resources
- github.com/anthropics/claude-code/discussions
- r/ClaudeAI
- AI Hero newsletter (aihero.dev)

---

## Changelog

| Date | Update |
|------|--------|
| 2026-01-09 | Initial synthesis from 40+ research extractions |

---

## Troubleshooting

### Context Rot Issues

#### Problem: "Claude repeating earlier statements"
**Symptoms:** Responses echo previous content, feels like conversation looping
**Severity:** Medium - early warning sign
**Cause:** Context accumulation causing model confusion
**Solution:**
```bash
# Check context usage if using Claude HUD
# If at 50-60%+, consider action

# Option 1: Compact
/compact

# Option 2: Start fresh (better for quality)
exit
claude
"Continue from where we left off. Check git log for recent work."
```
**Prevention:** Monitor context usage, take action before 60%

---

#### Problem: "Claude forgetting recent changes"
**Symptoms:** Asks about files just modified, doesn't remember previous commits
**Severity:** High - quality already degraded
**Cause:** Context window full, older memories being pushed out
**Solution:**
```bash
# Immediate: Write state to file
"Before we continue, write a summary of all changes so far to progress.txt"

# Then start fresh
exit
claude
"Read progress.txt and git log to understand current state"
```
**Prevention:** Use file-based external state from the beginning

---

#### Problem: "CLAUDE.md instructions being ignored"
**Symptoms:** Claude violates documented conventions, asks questions answered in CLAUDE.md
**Severity:** High - critical degradation
**Cause:** CLAUDE.md content pushed out of effective context
**Solution:**
```bash
# Force context refresh
/reset

# Or start completely fresh
exit
claude

# Verify CLAUDE.md is being read
"What does CLAUDE.md say about our test conventions?"
```
**Prevention:** Keep CLAUDE.md under 500 tokens, use Ralph pattern for long work

---

#### Problem: "Claude contradicting itself"
**Symptoms:** Says one thing, then opposite, logic breaks down
**Severity:** Critical - session compromised
**Cause:** Context severely polluted
**Solution:**
```bash
# Immediate session reset required
/reset

# If still having issues
exit
claude

# Verify clean state
"Start fresh. Read CLAUDE.md and the current file structure."
```
**Prevention:** Never let context exceed 85%

---

#### Problem: "Hallucinated files or references"
**Symptoms:** Claude references files that don't exist, cites fake documentation
**Severity:** Critical - trust broken
**Cause:** Extreme context pressure causing confabulation
**Solution:**
```bash
# Full reset, verify state
/reset

# Always verify claims
ls -la path/to/claimed/file
git log --oneline | head -20

# Start fresh and be explicit
exit
claude
"List all files in src/ before making any changes."
```
**Prevention:** Never work in critically degraded context, always verify

---

### File-Based State Issues

#### Problem: "progress.txt being overwritten instead of appended"
**Symptoms:** Previous learnings disappearing, history lost
**Cause:** Agent using update instead of append operation
**Solution:**
```markdown
# In prompt.md, be EXPLICIT:
"APPEND to progress.txt (NEVER overwrite or update previous content):

---
## [Date] - [Task]
..."

# Use the literal word "append" - models recognize this
```
**Prevention:** Include "APPEND" in caps in all instructions about progress.txt

---

#### Problem: "prd.json in inconsistent state"
**Symptoms:** Tasks marked done that aren't, passes field not updating
**Cause:** JSON parsing/writing issues, or agent confusion
**Solution:**
```bash
# Validate JSON
cat plans/prd.json | jq .

# If invalid, fix manually or regenerate
# Check specific task:
jq '.userStories[] | select(.id == "US-003")' plans/prd.json

# Manually fix if needed:
jq '.userStories[2].passes = true' plans/prd.json > tmp.json && mv tmp.json plans/prd.json
```
**Prevention:** Use JSON (not markdown) for machine-readable task state

---

#### Problem: "Git history not being used as context"
**Symptoms:** Agent doesn't know what was already done, repeats work
**Cause:** Not instructed to read git history, or history too large
**Solution:**
```markdown
# Add to prompt.md:
"Before starting:
1. Run: git log --oneline -10
2. Run: git diff HEAD~3
3. Understand what was recently changed
4. Don't repeat already-completed work"
```
**Prevention:** Make git history reading part of every iteration start

---

### Compaction Issues

#### Problem: "Compaction lost critical details"
**Symptoms:** After /compact, Claude missing key information
**Cause:** Compaction is lossy by design - details get summarized
**Solution:**
```bash
# Before compacting, externalize important state
"Write all critical decisions and current state to a file before we compact"

# Only then compact
/compact

# Re-load critical context
"Read the state file we just created"
```
**Prevention:** Externalize before compacting, or prefer fresh context over compaction

---

#### Problem: "When to compact vs fresh session"
**Symptoms:** Uncertain about best approach
**Decision guide:**
```
Use /compact when:
- Mid-task and context is 60-70%
- Want to continue same conversation
- Already have good momentum

Use fresh session when:
- Context >80% (compaction won't help enough)
- Quality already degraded (repeating, contradictions)
- Starting a new task
- After completing a milestone
```
**The Ralph pattern avoids this entirely:** Fresh context per iteration

---

### Ralph Loop Issues

#### Problem: "Ralph stuck in infinite loop"
**Symptoms:** Same task attempted repeatedly, no progress, max iterations hit
**Cause:** Task too large, criteria impossible, or verification failing
**Solution:**
```bash
# Check why task is failing
cat plans/progress.txt | tail -30
jq '.userStories[] | select(.passes == false)' plans/prd.json

# Diagnose:
# - Is the task too big? Split it.
# - Are criteria impossible? Revise them.
# - Is verification broken? Fix test setup.

# Manually intervene
# Edit prd.json to reduce scope or add notes
# Then restart Ralph
```
**Prevention:** Size tasks to complete in ONE iteration

---

#### Problem: "Ralph not detecting completion"
**Symptoms:** All tasks done but loop continues
**Cause:** Promise pattern not being output, or grep not matching
**Solution:**
```bash
# Check promise format in prompt.md:
"If ALL stories pass, reply exactly:
<promise>COMPLETE</promise>"

# Verify grep in ralph.sh:
if grep -q "<promise>COMPLETE</promise>" output.txt; then

# Test manually:
echo "<promise>COMPLETE</promise>" > test.txt
grep -q "<promise>COMPLETE</promise>" test.txt && echo "Match" || echo "No match"
```
**Prevention:** Test completion detection before long runs

---

#### Problem: "Ralph consuming too many tokens/cost"
**Symptoms:** High API bills, more iterations than expected
**Cause:** Tasks too large, too many iterations, or model chatty
**Solution:**
```bash
# Add cost awareness to prompt:
"Be concise. Complete ONE task per iteration.
Maximum 50 iterations allowed."

# Reduce iterations
./ralph.sh 10  # Instead of 25

# Check if tasks are right-sized
# Each should complete in ONE iteration
```
**Cost estimates:**
| Iterations | Approx Cost |
|------------|-------------|
| 10 | $0.50-$2 |
| 25 | $1-$5 |
| 50 | $2-$10 |

**Prevention:** Start with low max-iterations, increase only if needed

---

### External Memory Issues

#### Problem: "Claude-Mem injecting stale context"
**Symptoms:** Old patterns suggested, outdated information surfacing
**Cause:** Database has old project state, hasn't been cleaned
**Solution:**
```bash
# Check claude-mem database
ls -la ~/.claude-mem/

# Clear if needed (nuclear option)
rm -rf ~/.claude-mem/memory.db

# Or selectively clean
# (Check claude-mem documentation for management commands)
```
**Prevention:** Periodically review what claude-mem has stored

---

#### Problem: "External memory consuming too much context"
**Symptoms:** Fresh sessions already at 30%+ context
**Cause:** claude-mem injecting too much history
**Solution:**
```json
// ~/.claude-mem/settings.json
{
  "context_injection_rules": {
    "auto_inject": true,
    "max_tokens": 2000  // Reduce from 5000
  }
}
```
**Prevention:** Configure reasonable injection limits

---

### When NOT to Use These Patterns

| Pattern | Skip When... | Use Instead |
|---------|--------------|-------------|
| Ralph loop | Single quick task | Direct Claude Code session |
| File-based state | Short conversation | Just use Claude directly |
| prd.json | Exploratory work | No tracking needed |
| Claude-Mem | Fresh project, no history | Default ephemeral memory |
| Git worktrees | Solo, single feature | Normal git branching |
| Compaction | Already degraded | Fresh session |

### Known Limitations

1. **200K context is theoretical, 100K is practical** - Quality degrades before hard limit
2. **Compaction is lossy** - Details will be lost, always externalize first
3. **Claude-Mem adds complexity** - Not worth it for short projects
4. **Fresh context has overhead** - Reading state from files takes tokens
5. **Ralph requires upfront investment** - PRD setup time is real
6. **Git as memory requires commits** - Uncommitted work is invisible
7. **Token estimates are rough** - Actual usage varies by content

### Emergency Recovery

#### Session completely unusable
```bash
# Nuclear reset
/reset

# If still broken, full restart
exit
claude

# Verify clean state
"What is 2+2? What project are we working on?"
# Should give fresh, coherent answers
```

#### Lost track of project state
```bash
# Reconstruct from git
git log --oneline -20
git status
git diff HEAD

# Check file-based state
cat plans/prd.json | jq '.userStories[] | {id, title, passes}'
cat plans/progress.txt | tail -50

# Start Claude fresh
exit
claude
"Read git log, prd.json, and progress.txt to understand current state"
```

#### PRD corrupted beyond repair
```bash
# Rebuild from git history
git log --oneline --all
# Find last good commit
git show abc123:plans/prd.json > plans/prd.json

# Or regenerate
claude
"Based on git history and existing code, regenerate prd.json with remaining tasks"
```

---

## Tags

`#context-management` `#ralph-loop` `#fresh-context` `#external-memory` `#context-rot` `#compaction` `#file-based-state` `#git-memory` `#claude-mem` `#token-budgeting` `#mastery-guide`

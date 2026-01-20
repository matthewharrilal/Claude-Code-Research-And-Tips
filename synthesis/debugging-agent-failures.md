# Debugging Agent Failures: Comprehensive Guide

**Purpose:** Complete diagnostic and recovery guide for Claude Code agent failures
**Scope:** All failure modes from simple sessions through factory-scale orchestration
**Philosophy:** Observe systematically, hypothesize deliberately, isolate precisely, verify completely

---

## D-FINAL Integration

**Relationship:** This debugging guide serves as the **incident response companion** to D-FINAL. While D-FINAL documents architecture and patterns, this guide focuses on **what happens when things break** and how to recover.

**Cross-references:**
- **D-FINAL-operations.md** - Operational monitoring, recovery procedures
- **D-FINAL-architecture.md** - Architecture invariants that prevent failures
- **D-FINAL-implementation.md** - Anti-patterns that cause failures
- **D-FINAL-mental-models.md** - Mental Model 7: Failure Detection Intuition

**Journey references:**
- **journey-operations.md#troubleshooting** - User-facing troubleshooting flow
- **journey-mental-models.md#anti-patterns** - When patterns fail

**Last updated:** 2026-01-19 (Phase 2B CRITICAL GAP fill)

---

## Table of Contents

1. [You Are Here](#1-you-are-here)
2. [The Debugging Mindset](#2-the-debugging-mindset)
3. [Systematic Diagnosis Workflow](#3-systematic-diagnosis-workflow)
4. [When Agents Produce Wrong Output](#4-when-agents-produce-wrong-output)
5. [Tool Selection for Different Failure Types](#5-tool-selection-for-different-failure-types)
6. [Logging Best Practices](#6-logging-best-practices)
7. [Multi-Agent Debugging Complexity](#7-multi-agent-debugging-complexity)
8. [Case Studies from Production](#8-case-studies-from-production)
9. [Mental Models for Debugging](#9-mental-models-for-debugging)
10. [Decision Trees for Common Failures](#10-decision-trees-for-common-failures)
11. [Checkpoints and Verification](#11-checkpoints-and-verification)
12. [Troubleshooting Reference](#12-troubleshooting-reference)
13. [Integration Patterns and Combination Matrix](#13-integration-patterns-and-combination-matrix)
14. [Recovery Playbooks](#14-recovery-playbooks)
15. [Prevention Strategies](#15-prevention-strategies)
16. [Source Attribution](#16-source-attribution)

---

## 1. You Are Here

```
                        The Debugging Journey Map

    ┌─────────────────────────────────────────────────────────────────────┐
    │                                                                      │
    │   CURRENT STATE                                                      │
    │   ┌─────────────────────────────────────────────────────────────┐   │
    │   │  Something broke. You need to fix it.                        │   │
    │   │  OR: You want to prevent failures before they happen.        │   │
    │   └─────────────────────────────────────────────────────────────┘   │
    │                                    │                                 │
    │                                    ▼                                 │
    │   AFTER THIS GUIDE                                                   │
    │   ┌─────────────────────────────────────────────────────────────┐   │
    │   │  You know how to:                                            │   │
    │   │  - Diagnose any common failure mode systematically           │   │
    │   │  - Select the right debugging tool for each situation        │   │
    │   │  - Recover from failures without losing work                 │   │
    │   │  - Prevent failures through proper patterns                  │   │
    │   └─────────────────────────────────────────────────────────────┘   │
    │                                                                      │
    └─────────────────────────────────────────────────────────────────────┘
```

### What This Document Covers

This is the **comprehensive debugging reference** for Claude Code agent failures. It synthesizes:

- **Production War Stories** - Real failures from Gas Town, Ralph loops, CC Mirror deployments
- **4,677+ GitHub Issues** - Analyzed patterns from the Claude Code issue tracker
- **Research Paper Findings** - Multi-agent failure statistics from arXiv studies
- **Community Experience** - Battle-tested solutions from power users

### How to Use This Document

| **If You...**                               | **Start Here**                           |
| ------------------------------------------- | ---------------------------------------- |
| Need to fix something right now             | [Troubleshooting Reference](#12)         |
| Want to understand what went wrong          | [Systematic Diagnosis Workflow](#3)      |
| Are setting up debugging infrastructure     | [Logging Best Practices](#6)             |
| Need to debug multi-agent coordination      | [Multi-Agent Debugging](#7)              |
| Want to prevent future failures             | [Prevention Strategies](#15)             |
| Looking for specific error solutions        | [Decision Trees](#10)                    |

### Prerequisites

**For effective debugging, you should have:**
- Basic familiarity with Claude Code operation
- Access to terminal/command line
- Git installed and configured
- Understanding of your project's test infrastructure

---

## 2. The Debugging Mindset

### The Core Principle

> **"Agent failures are systematic, not random."**

Every failure follows a pattern. Understanding the pattern allows you to predict, diagnose, and prevent failures.

### The Five Categories of Agent Failure

All Claude Code failures fall into five fundamental categories:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    THE FIVE FAILURE CATEGORIES                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   1. CONTEXT FAILURES                                                    │
│      ├── Token exhaustion                                                │
│      ├── Quality degradation                                             │
│      ├── Instruction amnesia                                             │
│      └── Hallucination under pressure                                    │
│                                                                          │
│   2. STATE FAILURES                                                      │
│      ├── Memory not persisting                                           │
│      ├── State divergence                                                │
│      ├── Progress overwriting                                            │
│      └── Stale context injection                                         │
│                                                                          │
│   3. COORDINATION FAILURES                                               │
│      ├── Role confusion (orchestrator writes code)                       │
│      ├── Recursive explosion (workers spawn workers)                     │
│      ├── Deadlock between agents                                         │
│      └── Error amplification (17x in independent agents)                 │
│                                                                          │
│   4. VERIFICATION FAILURES                                               │
│      ├── False positive test results                                     │
│      ├── Optimistic completion marking                                   │
│      ├── Missing integration tests                                       │
│      └── Visual verification gaps                                        │
│                                                                          │
│   5. RESOURCE FAILURES                                                   │
│      ├── Cost runaway                                                    │
│      ├── Rate limiting                                                   │
│      ├── Infinite loops                                                  │
│      └── Destructive operations                                          │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### The 80-20 Rule of Agent Failures

**80% of failures come from:**
1. **Context exhaustion** - Working too long without fresh context
2. **Missing verification** - Not confirming results before proceeding
3. **Vague instructions** - Unclear acceptance criteria

**The remaining 20%:**
- Multi-agent coordination issues
- Platform/version-specific bugs
- Edge cases in tool behavior
- Security-related incidents

### The Failure Cascade Pattern

```
                Initial Failure
                      │
                      ▼
              ┌──────────────┐
              │   Ignored    │ ← Most common mistake
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │  Compounds   │
              │   with next  │
              │   iteration  │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │   Creates    │
              │    three     │
              │    new       │
              │   problems   │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │   Recovery   │
              │    becomes   │
              │   expensive  │
              └──────────────┘

KEY INSIGHT: Catch failures early. The cost of recovery
grows exponentially with each iteration.
```

---

## 3. Systematic Diagnosis Workflow

### The OHIV Framework

**O**bserve → **H**ypothesize → **I**solate → **V**erify

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       THE OHIV DEBUGGING FRAMEWORK                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   STEP 1: OBSERVE                                                        │
│   ┌─────────────────────────────────────────────────────────────────┐   │
│   │  Gather all available evidence before making assumptions         │   │
│   │                                                                  │   │
│   │  Questions to answer:                                            │   │
│   │  ├── What did you expect to happen?                              │   │
│   │  ├── What actually happened?                                     │   │
│   │  ├── When did the behavior change?                               │   │
│   │  ├── What was the last successful operation?                     │   │
│   │  └── What has changed since then?                                │   │
│   │                                                                  │   │
│   │  Commands:                                                       │   │
│   │  ├── git log --oneline -10                                       │   │
│   │  ├── cat progress.txt | tail -50                                 │   │
│   │  ├── git diff HEAD                                               │   │
│   │  └── git status                                                  │   │
│   └─────────────────────────────────────────────────────────────────┘   │
│                                    │                                     │
│                                    ▼                                     │
│   STEP 2: HYPOTHESIZE                                                    │
│   ┌─────────────────────────────────────────────────────────────────┐   │
│   │  Form a specific, testable hypothesis about the cause            │   │
│   │                                                                  │   │
│   │  Good hypotheses are:                                            │   │
│   │  ├── Specific: "Context exceeded 80%" not "something wrong"      │   │
│   │  ├── Testable: Can verify with a single check                    │   │
│   │  ├── Falsifiable: Can prove it's NOT the cause                   │   │
│   │  └── Actionable: If true, you know what to do                    │   │
│   │                                                                  │   │
│   │  Start with most common causes:                                  │   │
│   │  1. Context exhaustion (most likely)                             │   │
│   │  2. Missing verification (second most likely)                    │   │
│   │  3. Unclear instructions (third most likely)                     │   │
│   └─────────────────────────────────────────────────────────────────┘   │
│                                    │                                     │
│                                    ▼                                     │
│   STEP 3: ISOLATE                                                        │
│   ┌─────────────────────────────────────────────────────────────────┐   │
│   │  Narrow down to the specific failure point                       │   │
│   │                                                                  │   │
│   │  Isolation techniques:                                           │   │
│   │  ├── Binary search: Divide the timeline in half                  │   │
│   │  ├── Component isolation: Test each part separately              │   │
│   │  ├── Minimal reproduction: Create smallest failing case          │   │
│   │  └── Rollback: Return to last known good state                   │   │
│   │                                                                  │   │
│   │  Commands:                                                       │   │
│   │  ├── git bisect start                                            │   │
│   │  ├── git checkout HEAD~5                                         │   │
│   │  └── npm test                                                    │   │
│   └─────────────────────────────────────────────────────────────────┘   │
│                                    │                                     │
│                                    ▼                                     │
│   STEP 4: VERIFY                                                         │
│   ┌─────────────────────────────────────────────────────────────────┐   │
│   │  Confirm the fix actually resolves the issue                     │   │
│   │                                                                  │   │
│   │  Verification requirements:                                      │   │
│   │  ├── Tests pass: npm test exits with 0                           │   │
│   │  ├── Types check: npm run typecheck exits with 0                 │   │
│   │  ├── Behavior correct: Manual verification of fix                │   │
│   │  └── No regressions: Other features still work                   │   │
│   │                                                                  │   │
│   │  Only mark resolved when ALL verification passes                 │   │
│   └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Quick Diagnosis Checklist

**When something breaks, run through this immediately:**

```bash
# 1. Check git state
git status
git log --oneline -5

# 2. Check for recent changes
git diff HEAD~1

# 3. Run verification
npm test 2>&1 | tail -20
echo "Exit code: $?"

npm run typecheck 2>&1 | tail -20
echo "Exit code: $?"

# 4. Check progress state (if using Ralph)
cat progress.txt | tail -30
cat prd.json | jq '.userStories[] | {id, passes}'

# 5. Check for error patterns
grep -i "error\|failed\|exception" output.txt | tail -20
```

### Diagnosis Speed Table

| **Symptom** | **Most Likely Cause** | **Quick Check** | **Quick Fix** |
| ----------- | -------------------- | --------------- | ------------- |
| Quality degrading | Context exhaustion | Claude HUD % | `/compact` or `/reset` |
| Instructions ignored | Context pressure | Check CLAUDE.md compliance | Restart session |
| Files hallucinated | Context overflow | `ls -la` the files | Reset session |
| Tasks never complete | No completion criteria | Check prd.json | Add `passes` tracking |
| Same error 3+ times | Task too complex | Check task scope | Split into smaller tasks |
| Costs spiking | Runaway loop | Anthropic dashboard | `pkill -f claude` |
| Workers spawning workers | Missing preamble | Check Task() calls | Add worker restrictions |

---

## 4. When Agents Produce Wrong Output

### Taxonomy of Wrong Output

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      TYPES OF WRONG OUTPUT                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   TYPE 1: INCORRECT LOGIC                                                │
│   ───────────────────────                                                │
│   Symptom: Code runs but produces wrong results                          │
│   Cause:   Misunderstanding of requirements                              │
│   Example: Sort ascending instead of descending                          │
│   Fix:     Better acceptance criteria, examples in prompt                │
│                                                                          │
│   TYPE 2: INCOMPLETE IMPLEMENTATION                                      │
│   ──────────────────────────────────                                     │
│   Symptom: Code partially works, missing edge cases                      │
│   Cause:   Context pressure, task too large                              │
│   Example: Handles success path, crashes on error path                   │
│   Fix:     Split task smaller, explicit edge case requirements           │
│                                                                          │
│   TYPE 3: HALLUCINATED CODE                                              │
│   ─────────────────────────                                              │
│   Symptom: References functions/files that don't exist                   │
│   Cause:   Context overflow, training data confusion                     │
│   Example: Imports from non-existent module                              │
│   Fix:     Reset session, explicit file reads before writing             │
│                                                                          │
│   TYPE 4: STYLE VIOLATIONS                                               │
│   ────────────────────────                                               │
│   Symptom: Code works but doesn't match project conventions              │
│   Cause:   CLAUDE.md not loaded or too vague                             │
│   Example: Uses different naming convention                              │
│   Fix:     Reference specific patterns in CLAUDE.md                      │
│                                                                          │
│   TYPE 5: CIRCULAR REVISIONS                                             │
│   ─────────────────────────                                              │
│   Symptom: Same code rewritten multiple times, oscillating               │
│   Cause:   Conflicting requirements, no clear "done"                     │
│   Example: Adds feature, removes it, adds it back                        │
│   Fix:     Clear acceptance criteria, single source of truth             │
│                                                                          │
│   TYPE 6: WORKING BUT WRONG APPROACH                                     │
│   ──────────────────────────────────                                     │
│   Symptom: Passes tests but architecture is wrong                        │
│   Cause:   No architectural constraints in prompt                        │
│   Example: Adds 500 lines when 50 would work                             │
│   Fix:     Specify approach constraints, reference examples              │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Diagnostic Questions for Wrong Output

**Ask these in order:**

1. **Is the context window healthy?**
   - If over 70%, this is likely the root cause
   - Solution: Compact or restart

2. **Are the requirements clear and testable?**
   - Can YOU verify success by running a command?
   - Solution: Add specific acceptance criteria

3. **Has Claude read the relevant code?**
   - Don't assume memory from previous reads
   - Solution: Explicit read before edit

4. **Is the task appropriately sized?**
   - 2-3 sentence description, 100-500 line change
   - Solution: Split into smaller tasks

5. **Are there conflicting instructions?**
   - Check CLAUDE.md, prompt, and previous conversation
   - Solution: Consolidate to single source of truth

### Wrong Output Recovery Procedure

```bash
# Step 1: Stop the agent
# Ctrl+C or:
pkill -f claude

# Step 2: Preserve the current state for analysis
git stash push -m "investigating-wrong-output-$(date +%Y%m%d-%H%M%S)"

# Step 3: Review what was produced
git diff HEAD~1
cat output.txt | tail -100

# Step 4: Identify the type of wrong output
# (Use taxonomy above)

# Step 5: Fix the root cause
# - If context: /reset
# - If requirements: Update prd.json/CLAUDE.md
# - If task size: Split into smaller tasks

# Step 6: Retry with fix applied
git stash pop
# Resume work
```

### Prevention: The Verification Sandwich

**Structure every task with verification at start AND end:**

```markdown
## Task: Implement User Login

### Pre-Verification (before starting):
- [ ] Read auth.ts to understand current auth pattern
- [ ] Read login.tsx to see existing form structure
- [ ] Confirm database schema has users table

### Implementation:
1. Add login form component
2. Add form validation
3. Add API route handler
4. Add session management

### Post-Verification (before marking complete):
- [ ] npm run typecheck passes
- [ ] npm test passes
- [ ] Manually test login flow at localhost:3000/login
- [ ] No console errors in browser
```

---

## 5. Tool Selection for Different Failure Types

### The Tool Matrix

| **Failure Type** | **Primary Tool** | **Secondary Tools** | **When to Use** |
| ---------------- | --------------- | ------------------- | --------------- |
| Context overflow | `/compact`, `/reset` | Claude HUD | Quality degradation, amnesia |
| Runaway costs | Anthropic Dashboard | `pkill -f claude` | Unexpected bills, long runs |
| Test failures | npm test, exit codes | git diff | Code not working |
| Type errors | npm run typecheck | LSP diagnostics | Type mismatches |
| File corruption | git checkout, git stash | git diff | Unexpected changes |
| Permission issues | /permissions, settings.json | CLI flags | Blocked operations |
| MCP failures | /mcp, server logs | Connection checks | Server not responding |
| Loop detection | progress.txt, git log | Stuck detection script | No progress for 3+ iterations |
| Multi-agent conflicts | git worktree, git status | Merge resolution | Parallel agent conflicts |
| Memory issues | htop, ps aux | Process monitoring | Slowdown, unresponsiveness |

### Tool Deep Dives

#### Context Management Tools

```bash
# Claude HUD - Real-time context monitoring
/plugin install claude-hud
/claude-hud:setup

# Sample output:
# [Opus 4.5] 67% | 2 MCPs | 23m
#           ^-- Context usage percentage
#                      ^-- Connected MCP servers
#                               ^-- Session duration

# Warning levels:
# 60-70%: Yellow warning - consider compacting
# 70-85%: Orange warning - compact recommended
# 85-95%: Red warning - compact required
# 95%+:   Critical - session degraded
```

```bash
# Compaction - Reduce context without reset
/compact

# When to use:
# - Context > 60% and continuing same task
# - Quality degradation noticed
# - BEFORE hitting critical levels

# Limitations:
# - Lossy: May lose nuanced instructions
# - Review behavior after compaction
```

```bash
# Reset - Full context clear
/reset

# When to use:
# - Context > 85%
# - Quality severely degraded
# - Switching to completely different task
# - After compaction didn't help

# Note: Requires re-establishing context from files
```

#### Cost Monitoring Tools

```bash
# Anthropic Dashboard
# https://console.anthropic.com/

# Check for:
# - Token usage trends
# - Cost per day/session
# - Unusual spikes

# Set budget limits BEFORE running autonomous loops
```

```bash
# Process monitoring
watch -n 5 "ps aux | grep -E 'claude|node' | awk '{print \$6}' | awk '{sum+=\$1} END {print sum/1024 \" MB\"}'"

# Kill runaway processes
pkill -f claude  # Graceful
pkill -9 -f claude  # Force
```

#### Git Recovery Tools

```bash
# Check current state
git status
git diff HEAD

# Discard all unstaged changes
git checkout -- .

# Discard specific file
git checkout -- path/to/file.ts

# Save current state for later
git stash push -m "description"

# Restore saved state
git stash pop

# View stash list
git stash list

# Hard reset to specific commit (CAUTION)
git reset --hard HEAD~1

# Reset keeping changes staged
git reset --soft HEAD~1

# Find which commit broke something
git bisect start
git bisect bad  # Current is broken
git bisect good HEAD~10  # This was working
# Git will binary search
```

#### Debug Logging Tools

```bash
# Enable debug mode
export CLAUDE_CODE_DEBUG=1
export CLAUDE_CODE_LOG_FILE="/tmp/claude-debug.log"

# Run Claude Code
claude

# In another terminal, watch logs
tail -f /tmp/claude-debug.log

# Search for specific patterns
grep -i "error\|fail\|exception" /tmp/claude-debug.log
```

#### Network Debugging Tools

```bash
# Check API connectivity
curl -I https://api.anthropic.com/health

# Check with timing
time curl -s https://api.anthropic.com/health > /dev/null

# Verify proxy settings
echo $HTTP_PROXY $HTTPS_PROXY
```

### Tool Selection Decision Tree

```
What's the symptom?
│
├─ Quality degradation, amnesia, hallucinations
│  └── TOOL: Context management (/compact, /reset, Claude HUD)
│
├─ Unexpected costs, long-running processes
│  └── TOOL: Cost monitoring (Dashboard, pkill)
│
├─ Tests failing, code broken
│  └── TOOL: Git tools (diff, checkout, stash)
│
├─ Agent stuck, no progress
│  └── TOOL: Loop detection (progress.txt, git log)
│
├─ Permission errors, blocked operations
│  └── TOOL: Permission management (/permissions)
│
├─ MCP server not responding
│  └── TOOL: MCP debugging (/mcp, server logs)
│
├─ System slowdown, memory issues
│  └── TOOL: Process monitoring (htop, ps)
│
└─ Multiple agents conflicting
   └── TOOL: Git worktree, merge tools
```

---

## 6. Logging Best Practices

### The Three Levels of Logging

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    LOGGING LEVELS FOR DEBUGGING                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   LEVEL 1: MINIMAL (Development)                                         │
│   ──────────────────────────────                                         │
│   What: Key decisions, errors, completion status                         │
│   Storage: progress.txt, git commits                                     │
│   Retention: Persistent                                                  │
│   Use case: Normal development, Ralph loops                              │
│                                                                          │
│   Files:                                                                 │
│   ├── progress.txt - Iteration learnings, patterns                       │
│   ├── prd.json - Task status tracking                                    │
│   └── Git commits - Permanent record                                     │
│                                                                          │
│   LEVEL 2: STANDARD (Debugging)                                          │
│   ──────────────────────────────                                         │
│   What: All Level 1 + tool calls, file operations, commands              │
│   Storage: debug.log, output.txt                                         │
│   Retention: Session-based                                               │
│   Use case: Active debugging, issue reproduction                         │
│                                                                          │
│   Environment:                                                           │
│   export CLAUDE_CODE_DEBUG=1                                             │
│   export CLAUDE_CODE_LOG_FILE="/tmp/claude-debug.log"                    │
│                                                                          │
│   LEVEL 3: VERBOSE (Deep Investigation)                                  │
│   ─────────────────────────────────────                                  │
│   What: All Level 2 + API calls, token counts, timing                    │
│   Storage: Multiple log files, structured data                           │
│   Retention: Short-term (disk space concerns)                            │
│   Use case: Complex multi-agent debugging, performance analysis          │
│                                                                          │
│   Warning: Can generate 200GB+ if unchecked (GitHub #16093)              │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### progress.txt Structure (Append-Only)

```markdown
# Ralph Progress Log
Started: 2026-01-19

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

## 2026-01-19 09:15 - US-001 (PASS)
- **Task:** Added tasks table schema with status enum
- **Files changed:** db/schema.ts, migrations/001_add_tasks.sql
- **Learnings:**
  - Use `sql<number>` template for numeric aggregations
  - Drizzle requires explicit enum definition
- **Verification:** npm run typecheck (0), npm test (0)

---

## 2026-01-19 09:32 - US-002 (PASS)
- **Task:** Added filter dropdown with All/Active/Complete options
- **Files changed:** components/FilterDropdown.tsx, app/tasks/page.tsx
- **Learnings:**
  - shadcn/ui Select component requires Portal for proper z-index
  - Filter state should live in URL params for persistence
- **Verification:** npm run typecheck (0), browser verified

---

## 2026-01-19 09:48 - US-003 (FAIL - Attempt 1)
- **Task:** Implement task status toggle
- **Error:** Type error in action handler - StatusType not exported
- **Root cause:** Missing type export from schema.ts
- **Next:** Will add export and retry

## 2026-01-19 09:55 - US-003 (PASS - Attempt 2)
- **Task:** Implement task status toggle
- **Files changed:** app/actions/tasks.ts, db/schema.ts
- **Learnings:**
  - Always export types from schema files for actions
  - Remember to invalidate cache after mutations
- **Verification:** npm run typecheck (0), npm test (0)

---
```

### Hook-Based Debug Logging

```bash
#!/bin/bash
# ~/.claude/hooks/debug-all.sh
# Comprehensive debug logging for all Claude Code events

DEBUG_LOG="${HOME}/.claude/debug/session-$(date +%Y%m%d).log"
mkdir -p "$(dirname "$DEBUG_LOG")"

# Log entry with timestamp
log_entry() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$DEBUG_LOG"
}

# Log event details
log_entry "===== EVENT: $1 ====="
log_entry "Tool: ${TOOL_NAME:-unknown}"
log_entry "File: ${FILE:-none}"
log_entry "Command: ${COMMAND:-none}"
log_entry "Exit code: ${EXIT_CODE:-none}"

# Log environment (filtered for relevant vars)
env | grep -E "^(CLAUDE|PROJECT|SESSION|PWD)" >> "$DEBUG_LOG"

# Log working directory state
log_entry "Git status: $(git status --short 2>/dev/null | head -5)"
log_entry "---"
```

### Log Analysis Commands

```bash
# Find all errors in debug log
grep -i "error\|fail\|exception" ~/.claude/debug/*.log

# Count operations by type
cat ~/.claude/debug/*.log | grep "EVENT:" | cut -d':' -f2 | sort | uniq -c | sort -rn

# Find slowest operations
cat ~/.claude/debug/*.log | grep "duration" | sort -t'=' -k2 -rn | head -10

# Track context usage over time
cat ~/.claude/debug/*.log | grep "context" | tail -50

# Find file operation patterns
cat ~/.claude/debug/*.log | grep -E "Read|Write|Edit" | cut -d':' -f3 | sort | uniq -c
```

### Automatic Log Rotation

```bash
#!/bin/bash
# ~/.claude/scripts/log-rotate.sh
# Run via cron: 0 0 * * * ~/.claude/scripts/log-rotate.sh

DEBUG_DIR="${HOME}/.claude/debug"
MAX_SIZE_MB=500
MAX_AGE_DAYS=7

# Remove old logs
find "$DEBUG_DIR" -name "*.log" -mtime +$MAX_AGE_DAYS -delete

# Compress large logs
find "$DEBUG_DIR" -name "*.log" -size +${MAX_SIZE_MB}M -exec gzip {} \;

# Check total size and warn
TOTAL_SIZE=$(du -sm "$DEBUG_DIR" 2>/dev/null | cut -f1)
if [ "$TOTAL_SIZE" -gt 1000 ]; then
    echo "WARNING: Debug directory exceeds 1GB: ${TOTAL_SIZE}MB"
fi
```

### Production Logging Warning

```
⚠️  DISK SPACE ALERT ⚠️

GitHub Issue #16093 documented 42GB of debug logs from just 481
conversations over 7 days. Individual debug files grew to 20GB+.

ALWAYS:
1. Set up log rotation
2. Monitor disk space: df -h ~/.claude/
3. Clean old logs: rm -rf ~/.claude/debug/*.log.gz
4. Set retention limits in configuration
```

---

## 7. Multi-Agent Debugging Complexity

### The Coordination Tax

Multi-agent systems introduce exponentially more failure modes than single agents:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     MULTI-AGENT FAILURE SOURCES                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   RESEARCH FINDING (arXiv):                                              │
│   ────────────────────────                                               │
│   ├── Specification problems:      41.77%                                │
│   ├── Coordination failures:       36.94%                                │
│   ├── Error amplification:         17.2x (independent agents)            │
│   │                                4.4x (centralized coordination)        │
│   └── Total unique failure modes:  14 identified                         │
│                                                                          │
│   FAILURE MODE CLUSTERS:                                                 │
│   ─────────────────────                                                  │
│   1. System Design Issues                                                │
│      ├── Poor task decomposition                                         │
│      ├── Inappropriate topology selection                                │
│      └── Missing consensus mechanism                                     │
│                                                                          │
│   2. Inter-Agent Misalignment                                            │
│      ├── Role confusion                                                  │
│      ├── Communication breakdown                                         │
│      └── State divergence                                                │
│                                                                          │
│   3. Task Verification                                                   │
│      ├── No handoff validation                                           │
│      ├── Missing integration tests                                       │
│      └── Optimistic completion marking                                   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### The Merge Wall Problem

> **"Yegge ran up to a dozen agents working on the same project. 'It worked amazingly up to about 200k LOC, and now they've begun savagely overwriting each other's work rather than try to deal with merge conflicts.'"**
> -- Steve Yegge, Gas Town

**The Problem:**
```
Agent A                Agent B                Result
   │                      │                      │
   └─ Edit file.ts        └─ Edit file.ts        │
                                                 ▼
                                          CONFLICT
                                     Both versions
                                     partially exist
                                          │
                                          ▼
                                     CORRUPTION
                                     File is broken
```

**The Solutions:**

```
SOLUTION 1: Git Worktrees (File Isolation)
──────────────────────────────────────────

# Each agent works in completely separate directory
git worktree add ../wt-agent1 feature1-branch
git worktree add ../wt-agent2 feature2-branch

# Agents can work simultaneously without conflict
# Merge happens AFTER individual work complete
```

```
SOLUTION 2: Directory Ownership (Domain Isolation)
──────────────────────────────────────────────────

Agent A owns: src/auth/, src/user/
Agent B owns: src/payment/, src/billing/
Agent C owns: src/notifications/

# No overlap = no conflicts
# Requires upfront planning of directory assignments
```

```
SOLUTION 3: Sequential Merge Queue (Gas Town Refinery)
────────────────────────────────────────────────────

All agents complete work
        │
        ▼
  [Refinery Queue]
        │
        ├─ Merge Agent A's work (rebase)
        ├─ Merge Agent B's work (rebase)
        └─ Merge Agent C's work (rebase)

# Conflicts resolved sequentially
# Later agents rebase on earlier work
```

### Multi-Agent Debugging Checklist

```
When debugging multi-agent coordination issues:

□ STEP 1: Identify all active agents
  Command: git worktree list (for worktree-based)
  Command: ps aux | grep claude (for process-based)

□ STEP 2: Check each agent's status
  For each agent:
  - What task was it assigned?
  - What is its current state?
  - What files has it modified?

□ STEP 3: Map file ownership
  Command: git log --all --format='%H' -- <file> | xargs git branch --contains
  Question: Were multiple agents editing the same file?

□ STEP 4: Check handoff points
  - Did Agent A's output successfully reach Agent B?
  - Is handoff file present and valid?
  - Did downstream agent correctly parse input?

□ STEP 5: Verify consensus (if applicable)
  - Did all agents agree on the outcome?
  - Were any agents in disagreement?
  - How was disagreement resolved?

□ STEP 6: Check for cascading failures
  - Did one agent's error propagate to others?
  - How far did the error spread?
  - Which agents have clean state?
```

### CC Mirror Debugging (Hub-and-Spoke)

```
The Iron Law verification:
─────────────────────────
"YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS.
 YOU DO NOT EXPLORE CODEBASES.
 You are the CONDUCTOR. Your agents play the instruments."

SYMPTOMS OF IRON LAW VIOLATION:
├── Orchestrator context filling with file contents
├── Orchestrator getting distracted by implementation details
├── Worker spawning sub-workers (recursive explosion)
└── Role confusion between planning and execution

DIAGNOSIS:
1. Check orchestrator's tool usage
   - Should see: TaskCreate, TaskList, TaskGet, TaskUpdate, Task
   - Should NOT see: Read (more than 1-2 files), Write, Edit, Bash

2. Check worker preambles
   grep "WORKER agent" in Task() spawn calls

3. Check for recursive Task() calls
   Workers should NEVER call Task()
```

### Gas Town Debugging (Factory Scale)

```
Gas Town Specific Issues:
────────────────────────

ISSUE: Deacon killing workers (v0.3.x bug)
────────────────────────────────────────────
Symptom: Workers dying randomly
Quote: "Apologies to everyone using Gas Town who is being bitten by
       the murderous rampaging Deacon who is spree-killing all the
       other workers while on his patrol."
Fix: gt deacon down (wait for v0.4.0+)

ISSUE: Beads state corruption
────────────────────────────────────────────
Symptom: Agents have stale or incorrect context
Diagnosis: Check Beads ledger consistency
Commands:
  gt beads sync --check
  gt beads sync --force (to repair)

ISSUE: Mayor deadlock
────────────────────────────────────────────
Symptom: No work being assigned despite pending items
Cause: Waiting for human decision
Fix: gt inbox (check for pending approvals)

ISSUE: Runaway crew spawning
────────────────────────────────────────────
Symptom: Cost spike, dozens of agents spawned
Cause: Refinery misconfiguration
Fix:
  gt crew purge --all
  gt config set max_crew 5
```

### Error Amplification Analysis

```
ERROR AMPLIFICATION FORMULA:
───────────────────────────

Independent agents: 17.2x amplification
  If Agent A makes 1 error → 17.2 downstream effects

Centralized coordination: 4.4x amplification
  If Agent A makes 1 error → 4.4 downstream effects

IMPLICATIONS:
─────────────
1. Use hub-and-spoke (CC Mirror) over fully independent
2. Add verification at EVERY handoff point
3. Implement circuit breakers for error detection
4. Fail fast rather than propagate errors

CIRCUIT BREAKER PATTERN:
────────────────────────
for each task in pipeline:
  result = execute(task)

  if result.quality < 0.8:
    STOP_PIPELINE()
    ALERT_HUMAN()
    ROLLBACK_TO_LAST_GOOD()

  # Only continue if quality threshold met
```

---

## 8. Case Studies from Production

### Case Study 1: The $47,000 Recursive Loop

**Source:** Production War Stories Synthesis

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        CASE STUDY: RECURSIVE LOOP                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   WHAT HAPPENED:                                                         │
│   A multi-agent research tool slipped into a recursive loop that        │
│   ran for 11 days before anyone noticed, accumulating $47,000 in        │
│   API costs.                                                             │
│                                                                          │
│   ROOT CAUSE ANALYSIS:                                                   │
│   ─────────────────────                                                  │
│   1. Agents misinterpreted uncertainty as failure                        │
│   2. "Failure" triggered correction attempts                             │
│   3. Corrections created new uncertainties                               │
│   4. New uncertainties triggered more corrections                        │
│   5. Self-reinforcing loop with no exit condition                        │
│                                                                          │
│   CONTRIBUTING FACTORS:                                                  │
│   ─────────────────────                                                  │
│   ├── No iteration limits                                                │
│   ├── No budget caps                                                     │
│   ├── No human monitoring                                                │
│   ├── No stuck detection                                                 │
│   └── Request-response architecture (can't be event-driven)              │
│                                                                          │
│   PREVENTION MEASURES:                                                   │
│   ─────────────────────                                                  │
│   ├── MAX_ITERATIONS=25 in all scripts                                   │
│   ├── Budget limits in Anthropic console                                 │
│   ├── Daily cost alerts                                                  │
│   ├── Stuck detection: Exit if no commit for 3+ iterations               │
│   └── Timeout: timeout 3600 ./ralph.sh 50                                │
│                                                                          │
│   LESSONS:                                                               │
│   ────────                                                               │
│   - "The gap between demos and production is enormous"                   │
│   - Always assume loops can run forever                                  │
│   - Cost limits are insurance, not optional                              │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Case Study 2: The Home Directory Deletion

**Source:** GitHub Issue #17164

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     CASE STUDY: CATASTROPHIC DELETION                    │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   WHAT HAPPENED:                                                         │
│   Claude executed: rm -rf tests/ patches/ plan/ ~/                       │
│   That trailing ~/ deleted the user's entire home folder.               │
│                                                                          │
│   THE COMMAND ANATOMY:                                                   │
│   ─────────────────────                                                  │
│   rm -rf tests/       # Delete tests directory (intended)                │
│   patches/            # Delete patches directory (intended)              │
│   plan/               # Delete plan directory (intended)                 │
│   ~/                  # DELETE HOME FOLDER (CATASTROPHIC)                │
│                                                                          │
│   WHY IT HAPPENED:                                                       │
│   ─────────────────                                                      │
│   1. User had --dangerously-skip-permissions enabled                     │
│   2. No blocklist for rm -rf patterns                                    │
│   3. Claude constructed command without safety review                    │
│   4. Trailing ~/ was likely a parsing/generation error                   │
│                                                                          │
│   SIMILAR INCIDENTS:                                                     │
│   ─────────────────                                                      │
│   ├── Google Antigravity: rmdir /s /q d:\ (wiped entire D: drive)        │
│   ├── Replit: Deleted production database with 1,200+ executives         │
│   └── Various: Git reset --hard destroying uncommitted work              │
│                                                                          │
│   PREVENTION (MANDATORY):                                                │
│   ───────────────────────                                                │
│   {                                                                      │
│     "permissions": {                                                     │
│       "blockedPatterns": [                                               │
│         "rm -rf",                                                        │
│         "rm -r",                                                         │
│         "find . -delete",                                                │
│         "rmdir /s",                                                      │
│         "sudo rm",                                                       │
│         "git push --force",                                              │
│         "git reset --hard"                                               │
│       ]                                                                  │
│     }                                                                    │
│   }                                                                      │
│                                                                          │
│   RECOVERY:                                                              │
│   ─────────                                                              │
│   For git-tracked: git checkout -- .                                     │
│   For untracked: Check Time Machine / cloud backup                       │
│   For databases: Restore from backup                                     │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Case Study 3: The 3.2 Million Token Circular Revision

**Source:** Production War Stories Synthesis

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CASE STUDY: CIRCULAR REVISIONS                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   WHAT HAPPENED:                                                         │
│   "Nine senior engineers debugged the same authentication module         │
│    for 72 hours straight. Their Claude Code agents had rewritten         │
│    the OAuth flow seventeen times, each iteration drifting further       │
│    from the original architecture."                                      │
│                                                                          │
│   TOKEN CONSUMPTION: 3.2 million tokens                                  │
│   TIME WASTED: 72 hours × 9 engineers = 648 engineer-hours               │
│   RESULT: Code worse than when they started                              │
│                                                                          │
│   ROOT CAUSE ANALYSIS:                                                   │
│   ─────────────────────                                                  │
│   1. Extended session (72 hours) without context reset                   │
│   2. Context degradation after ~30 minutes                               │
│   3. Later iterations working against earlier iterations                 │
│   4. No external state to anchor correct approach                        │
│   5. Each "fix" created new problems to fix                              │
│                                                                          │
│   THE CIRCULAR PATTERN:                                                  │
│   ──────────────────────                                                 │
│                                                                          │
│   Hour 1: Implement OAuth (correct)                                      │
│           │                                                              │
│           ▼                                                              │
│   Hour 3: Find "issue", refactor (breaks correctness)                    │
│           │                                                              │
│           ▼                                                              │
│   Hour 10: Find new "issue", refactor (more broken)                      │
│           │                                                              │
│           ▼                                                              │
│   Hour 30: Context degraded, "fixes" random                              │
│           │                                                              │
│           ▼                                                              │
│   Hour 72: 17 revisions later, completely broken                         │
│                                                                          │
│   PREVENTION:                                                            │
│   ───────────                                                            │
│   1. Fresh context each iteration (Ralph pattern)                        │
│   2. External state that persists correct decisions                      │
│   3. Verification BEFORE marking complete                                │
│   4. Never work > 30 minutes without context refresh                     │
│   5. Git commits as checkpoints to return to                             │
│                                                                          │
│   DETECTION SIGNALS:                                                     │
│   ──────────────────                                                     │
│   ├── Same file edited 5+ times                                          │
│   ├── Oscillating changes (add then remove)                              │
│   ├── Quality degradation despite "fixes"                                │
│   └── Growing token consumption without progress                         │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Case Study 4: The Gas Town Merge Wall

**Source:** Gas Town Deep Dive (022-gas-town-deep-dive.md)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       CASE STUDY: MERGE WALL                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   WHAT HAPPENED:                                                         │
│   "Yegge ran up to a dozen agents working on the same project.           │
│    'It worked amazingly up to about 200k LOC, and now they've begun     │
│    savagely overwriting each other's work rather than try to deal        │
│    with merge conflicts.'"                                               │
│                                                                          │
│   TIMELINE:                                                              │
│   ─────────                                                              │
│   ├── Initially: 12 agents working beautifully                           │
│   ├── At ~150k LOC: Occasional conflicts, manageable                     │
│   ├── At ~200k LOC: "Merge wall" - conflicts constant                    │
│   └── Beyond: Agents overwriting each other's work                       │
│                                                                          │
│   WHY IT HAPPENED:                                                       │
│   ─────────────────                                                      │
│   1. Multiple agents editing same architectural files                    │
│   2. No coordination on file ownership                                   │
│   3. Agents chose "overwrite" over "merge" when faced with conflicts     │
│   4. Advisory locks not strong enough to prevent conflicts               │
│                                                                          │
│   GAS TOWN'S SOLUTIONS:                                                  │
│   ──────────────────────                                                 │
│                                                                          │
│   1. REFINERY ROLE                                                       │
│      Intelligent merge queue manager                                     │
│      Merges polecat changes sequentially to main                         │
│      Prevents conflicts via rebasing                                     │
│                                                                          │
│   2. GIT WORKTREES                                                       │
│      Each agent works on isolated worktree                               │
│      No shared filesystem state during work                              │
│      Merge only at integration points                                    │
│                                                                          │
│   3. CONVOYS                                                             │
│      Grouped work units that start and finish together                   │
│      Dependencies managed explicitly                                     │
│      Prevents partial integration                                        │
│                                                                          │
│   4. ADVISORY FILE RESERVATIONS                                          │
│      Via MCP Agent Mail                                                  │
│      Not hard locks (avoids deadlock)                                    │
│      Agents know what others are working on                              │
│                                                                          │
│   LESSONS FOR ALL MULTI-AGENT SYSTEMS:                                   │
│   ─────────────────────────────────────                                  │
│   ├── Scale introduces coordination challenges not visible at small      │
│   ├── "Works at 50k LOC" doesn't mean "works at 200k LOC"                │
│   ├── File ownership must be explicit, not emergent                      │
│   └── Merge strategy must be defined before conflicts occur              │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Case Study 5: CC Mirror Context Collapse

**Source:** CC Mirror Complete (024-cc-mirror-complete.md)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CASE STUDY: CONTEXT COLLAPSE                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   THE SCENARIO:                                                          │
│   CC Mirror orchestrator managing 5+ workers, running for several        │
│   hours. Quality began degrading despite workers being fresh.            │
│                                                                          │
│   SYMPTOMS:                                                              │
│   ──────────                                                             │
│   ├── Orchestrator forgetting task assignments                           │
│   ├── Duplicate tasks being created                                      │
│   ├── Worker results not being incorporated                              │
│   └── Iron Law violations (orchestrator trying to code)                  │
│                                                                          │
│   ROOT CAUSE:                                                            │
│   ───────────                                                            │
│   Orchestrator context filling with:                                     │
│   - Task management overhead (~10%)                                      │
│   - Worker result summaries (~40%)                                       │
│   - Reference file reads (~10%)                                          │
│   - Accumulated conversation (~30%)                                      │
│                                                                          │
│   At 90%+ context, orchestrator lost strategic capability.               │
│                                                                          │
│   THE FIX:                                                               │
│   ─────────                                                              │
│   From @nummanali:                                                       │
│   "This is using a new beta feature for Claude Code. Just make sure     │
│    auto compact is on. It did ever break, I've not had it stop once     │
│    yet."                                                                 │
│                                                                          │
│   CONFIGURATION:                                                         │
│   ──────────────                                                         │
│   1. Enable auto-compact in variant settings                             │
│   2. Limit reference file reads to 1-2 max                               │
│   3. Proactive /compact at 60-70%                                        │
│   4. Limit worker count to prevent result accumulation                   │
│                                                                          │
│   CONTEXT BUDGET FOR ORCHESTRATOR:                                       │
│   ────────────────────────────────                                       │
│   Total Available: ~100K tokens                                          │
│   ├── Skill file (orchestration):     ~5K (5%)                           │
│   ├── Project context (CLAUDE.md):    ~5K (5%)                           │
│   ├── Task management overhead:       ~10K (10%)                         │
│   ├── Reference file reads (1-2 max): ~10K (10%)                         │
│   ├── Worker result summaries:        ~40K (40%)                         │
│   ├── Decision reasoning:             ~20K (20%)                         │
│   └── Buffer:                         ~10K (10%)                         │
│                                                                          │
│   KEY CONSTRAINT:                                                        │
│   Orchestrator should NEVER do deep file exploration.                    │
│   That's worker territory.                                               │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Case Study 6: Ralph Production - 14 Iterations for 6 Stories

**Source:** Ralph Production (026-ralph-production.md)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CASE STUDY: RALPH ITERATION ANALYSIS                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   FROM RYAN CARSON (Founder of Treehouse):                               │
│   ─────────────────────────────────────────                              │
│   Project: Application with task management                              │
│   Stories: 6 well-defined user stories                                   │
│   Max iterations set: 25                                                 │
│   Actual iterations: 14                                                  │
│   Result: Feature complete with minor edge cases                         │
│                                                                          │
│   ITERATION BREAKDOWN:                                                   │
│   ─────────────────────                                                  │
│   Iterations 1-2:  Schema and migration (smooth)                         │
│   Iterations 3-5:  Filter component (some styling iteration)             │
│   Iterations 6-8:  Wiring (multiple attempts - state management)         │
│   Iterations 9-11: Visual indicators and edge cases                      │
│   Iterations 12-14: Final polish, persistence, cleanup                   │
│                                                                          │
│   KEY OBSERVATION:                                                       │
│   14 iterations ÷ 6 stories = 2.3 iterations per story average           │
│   Some stories completed in 1, others took 3-4                           │
│                                                                          │
│   WHY SOME STORIES TOOK MULTIPLE ITERATIONS:                             │
│   ──────────────────────────────────────────                             │
│   ├── State management complexity (iterations 6-8)                       │
│   ├── Edge cases discovered during implementation                        │
│   ├── Browser verification revealed visual issues                        │
│   └── Integration points between components                              │
│                                                                          │
│   POST-RUN FINDINGS:                                                     │
│   ───────────────────                                                    │
│   Manual testing found:                                                  │
│   - 2-3 edge case bugs (filter reset on page refresh)                    │
│   - Minor styling inconsistency                                          │
│                                                                          │
│   These were quickly fixed with targeted prompts (not full Ralph)        │
│                                                                          │
│   LESSONS EXTRACTED:                                                     │
│   ───────────────────                                                    │
│   1. Story size was THE success factor                                   │
│      Atomic decomposition enabled completion                             │
│                                                                          │
│   2. 14 iterations for 6 stories is reasonable                           │
│      Don't expect 1:1 story:iteration ratio                              │
│                                                                          │
│   3. Learnings compounded                                                │
│      Later stories implemented faster due to patterns                    │
│                                                                          │
│   4. Manual testing still needed                                         │
│      Ralph doesn't catch all edge cases                                  │
│                                                                          │
│   5. Quick fixes after                                                   │
│      Edge cases fixable without full Ralph runs                          │
│                                                                          │
│   RYAN'S QUOTE:                                                          │
│   "The bottleneck isn't coding—it's the upfront spec quality:            │
│    PRD clarity, atomic stories, and verifiable criteria."                │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 9. Mental Models for Debugging

### Mental Model 1: The Context Horizon

```
┌─────────────────────────────────────────────────────────────────────────┐
│                   MENTAL MODEL: THE CONTEXT HORIZON                      │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   CONCEPT:                                                               │
│   Like a ship's horizon, there's a limit to what Claude can "see."       │
│   Content beyond the horizon is invisible - it might as well not exist.  │
│                                                                          │
│                              ┌──────────────┐                            │
│                              │  Your Task   │                            │
│                              └──────┬───────┘                            │
│                                     │                                    │
│        ╭────────────────────────────┼────────────────────────────╮       │
│        │                            │                            │       │
│        │       VISIBLE HORIZON      │                            │       │
│        │       (Context Window)     │                            │       │
│        │                            │                            │       │
│        │  ┌─────┐ ┌─────┐ ┌─────┐   │   ┌─────┐ ┌─────┐          │       │
│        │  │File1│ │File2│ │CLAUDE│   │   │Prev │ │Tool │          │       │
│        │  └─────┘ └─────┘ │ .md │   │   │Conv │ │Out  │          │       │
│        │                  └─────┘   │   └─────┘ └─────┘          │       │
│        ╰────────────────────────────┼────────────────────────────╯       │
│ ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  │  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~     │
│              BEYOND THE HORIZON     │     (Invisible, forgotten)         │
│                                     ▼                                    │
│        ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐          │
│        │Old  │ │Prune│ │Early│ │Stale│ │Forgot│ │Gone │ │Lost │          │
│        │Files│ │d    │ │Instr│ │Data │ │ten  │ │     │ │     │          │
│        └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘          │
│                                                                          │
│   DEBUGGING IMPLICATION:                                                 │
│   ─────────────────────────                                              │
│   When Claude "forgets" something, it hasn't forgotten - it was          │
│   pushed beyond the horizon. The solution is NOT to remind it            │
│   (that adds more content), but to:                                      │
│                                                                          │
│   1. Compact the context (raise the horizon)                             │
│   2. Reset and reload essential content only                             │
│   3. Use external files that can be re-read                              │
│                                                                          │
│   APPLICATION:                                                           │
│   ────────────                                                           │
│   - Keep CLAUDE.md concise (it consumes horizon space)                   │
│   - Don't "remind" - reload from files                                   │
│   - Use external memory for persistence                                  │
│   - Fresh context > extended context                                     │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Mental Model 2: The Verification Triangle

```
┌─────────────────────────────────────────────────────────────────────────┐
│                  MENTAL MODEL: THE VERIFICATION TRIANGLE                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   CONCEPT:                                                               │
│   Every claim of "done" must pass through three verification gates.      │
│   Skipping any gate allows bugs to pass through undetected.              │
│                                                                          │
│                           ┌─────────────────┐                            │
│                           │                 │                            │
│                           │     "DONE"      │                            │
│                           │                 │                            │
│                           └────────┬────────┘                            │
│                                    │                                     │
│                    ┌───────────────┼───────────────┐                     │
│                    │               │               │                     │
│                    ▼               ▼               ▼                     │
│            ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            │
│            │              │ │              │ │              │            │
│            │   STATIC     │ │   RUNTIME    │ │   VISUAL     │            │
│            │ VERIFICATION │ │ VERIFICATION │ │ VERIFICATION │            │
│            │              │ │              │ │              │            │
│            ├──────────────┤ ├──────────────┤ ├──────────────┤            │
│            │ npm run      │ │ npm test     │ │ Browser      │            │
│            │ typecheck    │ │              │ │ screenshot   │            │
│            │              │ │ Exit code 0  │ │ or Playwright │            │
│            │ No type      │ │              │ │              │            │
│            │ errors       │ │ All tests    │ │ Looks correct│            │
│            │              │ │ pass         │ │              │            │
│            └──────┬───────┘ └──────┬───────┘ └──────┬───────┘            │
│                   │                │                │                     │
│                   └────────────────┼────────────────┘                     │
│                                    │                                      │
│                                    ▼                                      │
│                           ┌─────────────────┐                             │
│                           │                 │                             │
│                           │  ACTUALLY DONE  │                             │
│                           │                 │                             │
│                           └─────────────────┘                             │
│                                                                           │
│   DEBUGGING IMPLICATION:                                                  │
│   ─────────────────────────                                               │
│   When a "done" task fails later, trace back through the triangle:        │
│                                                                           │
│   1. Did types pass? → If not, interface mismatch                         │
│   2. Did tests pass? → If not, logic error                                │
│   3. Did visual pass? → If not, UI/UX issue                               │
│                                                                           │
│   The gate that was skipped indicates the failure category.               │
│                                                                           │
│   APPLICATION:                                                            │
│   ────────────                                                            │
│   Every acceptance criteria should include:                               │
│   - "npm run typecheck passes"                                            │
│   - "npm test passes with exit code 0"                                    │
│   - "Verify at localhost:3000 using browser" (for UI)                     │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘
```

### Mental Model 3: The Cascade Amplifier

```
┌─────────────────────────────────────────────────────────────────────────┐
│                  MENTAL MODEL: THE CASCADE AMPLIFIER                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   CONCEPT:                                                               │
│   Each unaddressed error creates 3 new problems. Errors don't stay       │
│   constant - they multiply. The earlier you catch an error, the          │
│   cheaper the fix.                                                       │
│                                                                          │
│   ITERATION 1:  1 error                                                  │
│                  │                                                       │
│                  ├─── not fixed ───►                                     │
│                  │                                                       │
│   ITERATION 2:  1 ──► 3 errors                                           │
│                        │                                                 │
│                        ├─── not fixed ───►                               │
│                        │                                                 │
│   ITERATION 3:  3 ──► 9 errors                                           │
│                        │                                                 │
│                        ├─── not fixed ───►                               │
│                        │                                                 │
│   ITERATION 4:  9 ──► 27 errors                                          │
│                        │                                                 │
│                        ├─── not fixed ───►                               │
│                        │                                                 │
│   ITERATION 5:  27 ──► 81 errors                                         │
│                                                                          │
│   COST OF FIX BY ITERATION:                                              │
│   ─────────────────────────                                              │
│   Iteration 1: Fix 1 error     = 1 unit of work                          │
│   Iteration 2: Fix 3 errors    = 3 units of work                         │
│   Iteration 3: Fix 9 errors    = 9 units of work                         │
│   Iteration 4: Fix 27 errors   = 27 units of work                        │
│   Iteration 5: Fix 81 errors   = 81 units of work                        │
│                                                                          │
│   Total if caught at Iteration 1: 1 unit                                 │
│   Total if caught at Iteration 5: 121 units (1+3+9+27+81)                │
│                                                                          │
│   DEBUGGING IMPLICATION:                                                 │
│   ─────────────────────────                                              │
│   - Stop as soon as you detect an issue                                  │
│   - NEVER continue iterating with known problems                         │
│   - Verification after EVERY iteration, not just at the end              │
│   - "Push through" mentality is the enemy                                │
│                                                                          │
│   APPLICATION:                                                           │
│   ────────────                                                           │
│   Ralph prompt should include:                                           │
│   "If typecheck or tests fail, STOP and address before continuing.       │
│    Do not proceed with broken state."                                    │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Mental Model 4: The Isolation Principle

```
┌─────────────────────────────────────────────────────────────────────────┐
│                   MENTAL MODEL: THE ISOLATION PRINCIPLE                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   CONCEPT:                                                               │
│   The ability to debug a system is proportional to how well you can      │
│   isolate components. Entangled systems are undebuggable.                │
│                                                                          │
│   ENTANGLED (Hard to Debug):                                             │
│   ─────────────────────────                                              │
│                                                                          │
│        ┌────┐  ┌────┐  ┌────┐  ┌────┐                                    │
│        │ A  │──│ B  │──│ C  │──│ D  │                                    │
│        └─┬──┘  └──┬─┘  └─┬──┘  └──┬─┘                                    │
│          │   ╲   │   ╱   │   ╲   │                                       │
│          │    ╲  │  ╱    │    ╲  │                                       │
│          └─────╲─┼─╱─────┘     ╲─┘                                       │
│                 ╲│╱                                                      │
│                  │                                                       │
│                                                                          │
│   Problem: If error occurs, could be A, B, C, D, or any interaction      │
│                                                                          │
│   ISOLATED (Easy to Debug):                                              │
│   ────────────────────────                                               │
│                                                                          │
│        ┌────┐  ┌────┐  ┌────┐  ┌────┐                                    │
│        │ A  │  │ B  │  │ C  │  │ D  │                                    │
│        └─┬──┘  └─┬──┘  └─┬──┘  └─┬──┘                                    │
│          │      │      │      │                                          │
│          ▼      ▼      ▼      ▼                                          │
│        ┌─────────────────────────┐                                       │
│        │   Single Integration    │                                       │
│        │         Point           │                                       │
│        └─────────────────────────┘                                       │
│                                                                          │
│   Problem: If error, test each component independently                   │
│                                                                          │
│   DEBUGGING IMPLICATION:                                                 │
│   ─────────────────────────                                              │
│   - Use subagents to isolate work (separate context per task)            │
│   - Use git worktrees to isolate file systems                            │
│   - Use handoff files instead of shared state                            │
│   - Design for testability at component boundaries                       │
│                                                                          │
│   ISOLATION TECHNIQUES:                                                  │
│   ──────────────────────                                                 │
│   1. Context isolation:   Subagents, fresh sessions                      │
│   2. File isolation:      Git worktrees, directories                     │
│   3. State isolation:     External files, not shared memory              │
│   4. Error isolation:     Circuit breakers, validation at boundaries     │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Mental Model 5: The Recovery Ladder

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    MENTAL MODEL: THE RECOVERY LADDER                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   CONCEPT:                                                               │
│   Recovery options form a ladder from least to most disruptive.          │
│   Always start at the bottom and climb only if necessary.                │
│                                                                          │
│   LEVEL 5: NUCLEAR OPTION (Last Resort)                                  │
│   ─────────────────────────────────────                                  │
│   git reset --hard HEAD~n                                                │
│   Delete and reclone                                                     │
│   Start completely over                                                  │
│                                                                          │
│                        ▲                                                 │
│                        │                                                 │
│   LEVEL 4: BRANCH RESET                                                  │
│   ─────────────────────                                                  │
│   git checkout -b fresh-start main                                       │
│   Cherry-pick good commits                                               │
│   Abandon problematic branch                                             │
│                                                                          │
│                        ▲                                                 │
│                        │                                                 │
│   LEVEL 3: SESSION RESET                                                 │
│   ──────────────────────                                                 │
│   exit && claude                                                         │
│   Fresh context from scratch                                             │
│   Re-read necessary files                                                │
│                                                                          │
│                        ▲                                                 │
│                        │                                                 │
│   LEVEL 2: CONTEXT COMPACT                                               │
│   ────────────────────────                                               │
│   /compact                                                               │
│   Reduce context, keep session                                           │
│   May lose some nuance                                                   │
│                                                                          │
│                        ▲                                                 │
│                        │                                                 │
│   LEVEL 1: FILE ROLLBACK (Start Here)                                    │
│   ────────────────────────────────────                                   │
│   git checkout -- file.ts                                                │
│   Undo specific file changes                                             │
│   Minimal disruption                                                     │
│                                                                          │
│   DEBUGGING IMPLICATION:                                                 │
│   ─────────────────────────                                              │
│   - Don't jump to nuclear options                                        │
│   - Try least disruptive recovery first                                  │
│   - Climbing the ladder costs more each step                             │
│   - Document what you tried at each level                                │
│                                                                          │
│   DECISION CRITERIA:                                                     │
│   ──────────────────                                                     │
│   Level 1: Specific file broken, rest fine                               │
│   Level 2: Quality degraded but session salvageable                      │
│   Level 3: Context polluted, need fresh start                            │
│   Level 4: Multiple commits bad, need new baseline                       │
│   Level 5: Repository state corrupted, data loss acceptable              │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 10. Decision Trees for Common Failures

### Decision Tree 1: Agent Quality Degrading

```
                          Agent quality degrading
                                    │
                                    ▼
                    ┌───────────────────────────────┐
                    │ Check context usage (Claude HUD)│
                    └───────────────┬───────────────┘
                                    │
            ┌───────────────────────┼───────────────────────┐
            │                       │                       │
            ▼                       ▼                       ▼
       Under 60%               60-85%                  Over 85%
            │                       │                       │
            ▼                       ▼                       ▼
    ┌───────────────┐      ┌───────────────┐      ┌───────────────┐
    │ Not context   │      │ Try /compact  │      │ /reset or     │
    │ issue         │      │               │      │ new session   │
    └───────┬───────┘      └───────┬───────┘      └───────────────┘
            │                       │
            ▼                       ▼
    ┌───────────────┐      ┌───────────────┐
    │ Check:        │      │ Quality       │
    │ - CLAUDE.md   │      │ improved?     │
    │ - Task clarity│      └───────┬───────┘
    │ - Recent conv │              │
    └───────────────┘       ┌──────┴──────┐
                            ▼             ▼
                           Yes           No
                            │             │
                            ▼             ▼
                     ┌──────────┐  ┌─────────────┐
                     │ Continue │  │ Compaction  │
                     │ working  │  │ was lossy,  │
                     └──────────┘  │ /reset      │
                                   └─────────────┘
```

### Decision Tree 2: Tests Failing After Agent Work

```
                         Tests failing after agent work
                                      │
                                      ▼
                       ┌────────────────────────────┐
                       │ Which tests are failing?   │
                       └────────────┬───────────────┘
                                    │
            ┌───────────────────────┼───────────────────────┐
            │                       │                       │
            ▼                       ▼                       ▼
       Type errors              Unit tests            Integration
            │                       │                  tests
            ▼                       ▼                       │
    ┌───────────────┐      ┌───────────────┐              ▼
    │ Interface     │      │ Logic error   │      ┌───────────────┐
    │ mismatch      │      │               │      │ Component     │
    │               │      │ Check:        │      │ interaction   │
    │ Check:        │      │ - Algorithm   │      │ issue         │
    │ - Types match │      │ - Edge cases  │      │               │
    │   spec?       │      │ - Null checks │      │ Check:        │
    │ - Imports     │      │               │      │ - API changed?│
    │   correct?    │      └───────────────┘      │ - State flow? │
    │ - Exports     │                             │ - Dependencies│
    │   present?    │                             └───────────────┘
    └───────────────┘
            │
            ▼
    ┌───────────────┐
    │ Fix hierarchy:│
    │ 1. Exports    │
    │ 2. Imports    │
    │ 3. Types      │
    │ 4. Logic      │
    └───────────────┘
```

### Decision Tree 3: Agent Stuck in Loop

```
                          Agent stuck in loop
                                  │
                                  ▼
                    ┌───────────────────────────┐
                    │ What kind of loop?        │
                    └───────────────┬───────────┘
                                    │
            ┌───────────────────────┼───────────────────────┐
            │                       │                       │
            ▼                       ▼                       ▼
    Verification loop       Exploration loop        Permission loop
    (test, fix, repeat)   (search, not found)    (attempt, denied)
            │                       │                       │
            ▼                       ▼                       ▼
    ┌───────────────┐      ┌───────────────┐      ┌───────────────┐
    │ Task is       │      │ File doesn't  │      │ Permission    │
    │ fundamentally │      │ exist or is   │      │ config too    │
    │ wrong approach│      │ mislocated    │      │ restrictive   │
    │               │      │               │      │               │
    │ Stop and      │      │ Tell Claude:  │      │ Adjust        │
    │ rethink at    │      │ "The file     │      │ /permissions  │
    │ higher level  │      │ doesn't exist"│      │ for this task │
    └───────────────┘      └───────────────┘      └───────────────┘
            │
            ▼
    ┌───────────────┐
    │ Detection:    │
    │ Same file     │
    │ edited 5+     │
    │ times without │
    │ progress      │
    │               │
    │ Solution:     │
    │ Ctrl+C and    │
    │ new approach  │
    └───────────────┘
```

### Decision Tree 4: Multi-Agent Coordination Failure

```
                     Multi-agent coordination failure
                                  │
                                  ▼
                    ┌───────────────────────────┐
                    │ What's the symptom?       │
                    └───────────────┬───────────┘
                                    │
        ┌───────────────┬───────────┼───────────┬───────────────┐
        │               │           │           │               │
        ▼               ▼           ▼           ▼               ▼
    Merge           Deadlock    Recursive   Error         State
    conflicts       (no agent   explosion   amplification  divergence
        │           acts)       (workers        │              │
        ▼               │       spawn       ▼              ▼
┌───────────────┐       │       workers) ┌─────────┐  ┌─────────┐
│ Use git       │       ▼           │    │ Add     │  │ Sync    │
│ worktrees     │ ┌───────────┐     ▼    │ circuit │  │ external│
│ for file      │ │ Explicit  │ ┌─────┐  │ breaker │  │ state   │
│ isolation     │ │ task      │ │ Add │  │ at each │  │ files   │
│               │ │ assignment│ │worker│  │ handoff │  │ between │
│ Or: Refinery  │ │ with clear│ │pream-│ │ point   │  │ agents  │
│ merge queue   │ │ ownership │ │ble  │  └─────────┘  └─────────┘
└───────────────┘ └───────────┘ └─────┘
                        │
                        ▼
        ┌───────────────────────────────────┐
        │ Worker preamble (REQUIRED):       │
        │                                   │
        │ "CONTEXT: You are a WORKER agent" │
        │ "Do NOT spawn sub-agents"         │
        │ "Do NOT call TaskCreate"          │
        └───────────────────────────────────┘
```

### Decision Tree 5: Cost Runaway

```
                           Cost runaway detected
                                    │
                                    ▼
                    ┌────────────────────────────┐
                    │ IMMEDIATE: pkill -f claude │
                    └────────────┬───────────────┘
                                 │
                                 ▼
                    ┌────────────────────────────┐
                    │ Check Anthropic dashboard  │
                    └────────────┬───────────────┘
                                 │
            ┌────────────────────┼────────────────────┐
            │                    │                    │
            ▼                    ▼                    ▼
      Recursive loop       Wrong model           Web search
      (agents spawning)    (Opus for simple)     loop
            │                    │                    │
            ▼                    ▼                    ▼
    ┌───────────────┐   ┌───────────────┐   ┌───────────────┐
    │ Add worker    │   │ Match model   │   │ Cap searches  │
    │ preamble with │   │ to task:      │   │ per iteration │
    │ "Do NOT spawn │   │               │   │               │
    │ sub-agents"   │   │ Simple→Haiku  │   │ MAX_SEARCHES=5│
    │               │   │ Code→Sonnet   │   │               │
    │ Set MAX_ITERS │   │ Arch→Opus     │   │ Add to script │
    └───────────────┘   └───────────────┘   └───────────────┘
                                │
                                ▼
            ┌────────────────────────────────────┐
            │ PREVENTION:                        │
            │ 1. Set budget limit in console     │
            │ 2. MAX_ITERATIONS in all scripts   │
            │ 3. timeout 3600 ./ralph.sh 50      │
            │ 4. Daily cost alerts               │
            └────────────────────────────────────┘
```

---

## 11. Checkpoints and Verification

### Checkpoint 1: Session Start Verification

**Where you are:** Starting a new Claude Code session

**Verify before proceeding:**
```bash
# Git state is clean
git status
# Should show: nothing to commit, working tree clean
# OR: files intentionally staged

# On correct branch
git branch --show-current
# Should show: your intended branch (not main unless intended)

# CLAUDE.md is present and current
cat CLAUDE.md | head -20
# Should show: project-specific context

# .claudeignore exists
cat .claudeignore
# Should exclude: node_modules, dist, .env*, etc.
```

**You should see:**
- Clean git state or intentionally staged changes
- Correct branch for your work
- CLAUDE.md with project context
- .claudeignore with sensible exclusions

**If verification fails:**
- Stash uncommitted work: `git stash push -m "pre-session"`
- Switch branch: `git checkout -b session-$(date +%Y%m%d)`
- Create CLAUDE.md if missing
- Create .claudeignore with standard template

---

### Checkpoint 2: Context Health Verification

**Where you are:** Working in an active session, checking health

**Verify periodically:**
```bash
# If using Claude HUD
# Check status bar for: [Model] XX% | N MCPs | Xm

# Rule of thumb by session length:
# Under 15 minutes: Usually fine
# 15-30 minutes: Check context
# 30-60 minutes: Likely needs compact
# Over 60 minutes: Consider reset
```

**You should see:**
- Context under 70% for complex work
- Context under 85% for any work
- Claude following CLAUDE.md conventions
- No signs of quality degradation

**Signs of context pressure:**
- Claude forgetting earlier instructions
- Responses becoming generic
- CLAUDE.md directives ignored
- Repetitive or contradictory answers
- Hallucinating files that don't exist

**If verification fails:**
- Run `/compact` immediately
- If quality doesn't improve, `/reset`
- For critical work, start fresh session

---

### Checkpoint 3: Task Completion Verification

**Where you are:** Claude claims a task is complete

**Never skip these checks:**
```bash
# 1. Type checking (ALWAYS)
npm run typecheck 2>&1 | tail -20
echo "Exit code: $?"
# Should show: no errors, exit code 0

# 2. Tests (ALWAYS)
npm test 2>&1 | tail -30
echo "Exit code: $?"
# Should show: all tests pass, exit code 0

# 3. Visual verification (for UI changes)
# Open browser, check the actual page
# OR use Playwright for screenshot

# 4. Git diff review
git diff HEAD
# Review each change is intentional
```

**You should see:**
- Type check passes with exit code 0
- Tests pass with exit code 0
- UI looks correct (if applicable)
- Git diff shows expected changes only

**If verification fails:**
- Do NOT mark task as complete
- Document what's failing in progress.txt
- Either fix immediately or add notes for next iteration

---

### Checkpoint 4: Ralph Iteration Verification

**Where you are:** Running Ralph loop, checking between iterations

**Verify iteration progress:**
```bash
# Check PRD status
cat prd.json | jq '.userStories[] | {id, passes}'
# Should show: progression of passes: false → true

# Check for stuck state
git log --oneline -5
# Should show: new commits each iteration

# Check progress.txt growth
wc -l progress.txt
# Should show: increasing line count

# Check for loop patterns
tail -30 progress.txt
# Should show: new learnings, not repetition
```

**You should see:**
- Tasks progressing from false to true
- New commits each iteration
- progress.txt growing with learnings
- Different work in each iteration

**Signs of stuck state:**
- Same task failed 3+ iterations
- No new commits for 3+ iterations
- Same errors repeated in progress.txt
- Circular edit patterns (add/remove/add)

**If verification fails:**
- Stop the loop: `Ctrl+C`
- Check if task is too complex (split it)
- Check if criteria are impossible
- Add notes to prd.json about what's blocking

---

### Checkpoint 5: Multi-Agent Health Verification

**Where you are:** Running multiple agents in parallel

**Verify coordination health:**
```bash
# Check all agents are running (process-based)
ps aux | grep claude | wc -l
# Should show: expected number of agents

# Check all worktrees exist (worktree-based)
git worktree list
# Should show: all expected worktrees

# Check for file conflicts
for wt in $(git worktree list | awk '{print $1}'); do
  echo "=== $wt ==="
  (cd $wt && git status --short)
done
# Should show: no conflicts between worktrees

# Check task distribution
cat prd.json | jq '.userStories[] | {id, owner}'
# Should show: clear ownership per task
```

**You should see:**
- Expected number of agents active
- All worktrees present and healthy
- No file conflicts between agents
- Clear task ownership

**Signs of coordination problems:**
- Agents stuck waiting for each other
- Same files modified in multiple worktrees
- Tasks claiming/unclaiming repeatedly
- Error messages about conflicts

**If verification fails:**
- Kill all agents: `pkill -f claude`
- Resolve conflicts manually
- Reassign tasks with clear ownership
- Consider sequential rather than parallel

---

### Checkpoint 6: Post-Session Verification

**Where you are:** Ending a session, before closing

**Verify before closing:**
```bash
# All tests still pass
npm test
# Should show: pass

# Git state is clean
git status
# Should show: nothing to commit OR intentionally staged

# No uncommitted work will be lost
git stash list
# Should show: any stashes are intentional

# Context window state (for reference)
# Note: This session's context is about to be lost
# Ensure anything important is in external files

# Progress is documented
cat progress.txt | tail -30
# Should show: learnings from this session
```

**You should see:**
- Tests pass
- Git state clean or intentionally dirty
- Important learnings captured externally
- No critical work only in context

**If verification fails:**
- Commit or stash work before closing
- Add learnings to progress.txt
- Document blockers for next session

---

## 12. Troubleshooting Reference

### Quick Lookup Table

| **Error/Symptom** | **Category** | **Quick Fix** | **Section** |
| ----------------- | ------------ | ------------- | ----------- |
| Quality degrading | Context | `/compact` or `/reset` | [Context](#4) |
| API Error 400 | Context | Session unrecoverable, start fresh | [Context](#4) |
| Instructions ignored | Context | `/reset`, re-read CLAUDE.md | [Context](#4) |
| Files hallucinated | Context | Reset immediately, verify files | [Context](#4) |
| Tests pass but shouldn't | Verification | Check exit codes, not output | [Verification](#4) |
| Task never completes | Orchestration | Add completion criteria | [Orchestration](#7) |
| Workers spawning workers | Orchestration | Add worker preamble | [Orchestration](#7) |
| Merge conflicts | Multi-agent | Use git worktrees | [Multi-agent](#7) |
| Costs spiking | Resource | `pkill -f claude`, check dashboard | [Resource](#8) |
| Rate limit errors | Resource | Add delays, consider API tier | [Resource](#8) |
| rm -rf executed | Security | Restore from git/backup | [Case Studies](#8) |
| Infinite compaction | Bug | Force kill, update Claude Code | [Bug](#8) |
| 200GB+ logs | Bug | Clean debug dir, update | [Bug](#8) |
| MCP not connecting | Integration | Check server, verify config | [Tools](#5) |
| Permission errors | Permissions | `/permissions`, update settings | [Tools](#5) |

### Error Message Glossary

```
ERROR: API Error 400
────────────────────
Meaning: Context window exceeded maximum (200K tokens)
Recovery: Cannot continue session. Start fresh.
Prevention: Compact proactively, use Ralph pattern

ERROR: rate_limit
────────────────────
Meaning: Too many requests in time window
Recovery: Wait and retry with exponential backoff
Prevention: Add delays between iterations, consider API tier

ERROR: ECONNREFUSED (API unreachable)
─────────────────────────────────────
Meaning: Cannot reach Anthropic API
Recovery: Check network, proxy settings, API status
Prevention: Verify connectivity before long runs

ERROR: ENOENT (File not found)
──────────────────────────────
Meaning: Claude tried to access non-existent file
Recovery: Verify file paths, check for hallucination
Prevention: Always read files before editing

ERROR: EACCES (Permission denied)
─────────────────────────────────
Meaning: Operation blocked by permissions
Recovery: Adjust permissions or use different approach
Prevention: Configure permissions for your workflow

WARNING: Context nearly full
────────────────────────────
Meaning: Context > 85%, quality degradation imminent
Recovery: /compact immediately or /reset
Prevention: Monitor context, compact at 60-70%

WARNING: Compaction was lossy
─────────────────────────────
Meaning: Some context was lost during compaction
Recovery: Re-state critical instructions
Prevention: Keep essential info in external files
```

### Platform-Specific Issues

#### macOS Issues

| **Issue** | **Symptom** | **Fix** |
| --------- | ----------- | ------- |
| Plugin conflict | Same plugin blocks global install | Uninstall globally first |
| Numpad Enter | Produces invalid character | Use main keyboard Enter |
| tmux + ghostty | Shift+Enter broken | Use Ctrl+J for newline |
| PATH warning | False ~/.local/bin warning | Cosmetic, ignore |

#### Linux Issues

| **Issue** | **Symptom** | **Fix** |
| --------- | ----------- | ------- |
| Memory leak | Performance degrades over hours | Restart every 2-3 hours |
| Env vars | Variables expand to empty in pipes | Export explicitly before session |

#### Windows Issues

| **Issue** | **Symptom** | **Fix** |
| --------- | ----------- | ------- |
| VS Code terminal | Rendering issues since v2.1.2 | Use Windows Terminal directly |
| Context gauge | Freezes after auto-compact | Use manual /compact |

### Version-Specific Issues

| **Version** | **Issue** | **Fix** |
| ----------- | --------- | ------- |
| v2.1.2 | Custom slash commands not discovered (macOS) | Downgrade to v2.1.1 |
| v2.1.2 | Terminal display issues (Windows) | Use external terminal |
| v1.0.83 | Infinite compaction loop | Update to latest |
| Various | Model quality degradation reports | Use explicit prompts, add verification |

---

## 13. Integration Patterns and Combination Matrix

### Tool Integration for Debugging

| **Scenario** | **Primary Tool** | **Supporting Tools** | **Outcome** |
| ------------ | --------------- | -------------------- | ----------- |
| Context monitoring | Claude HUD | /compact, /reset | Real-time context awareness |
| Cost tracking | Anthropic Dashboard | Budget limits, alerts | Cost control |
| Loop detection | progress.txt + git log | Stuck detection script | Early loop termination |
| Multi-agent coordination | Git worktrees | Merge queue, ownership | Conflict prevention |
| Test verification | npm test + exit codes | Typecheck, visual | Comprehensive validation |
| Error tracking | Debug logs + hooks | Grep, analysis scripts | Pattern identification |

### Debugging Stack by Complexity Level

```
┌─────────────────────────────────────────────────────────────────────────┐
│               DEBUGGING STACK BY COMPLEXITY LEVEL                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   LEVEL 0-1: Single Session                                              │
│   ──────────────────────────                                             │
│   Tools: git status, git diff, /compact, /reset                          │
│   Logs: None required                                                    │
│   Recovery: Git checkout, fresh session                                  │
│                                                                          │
│   LEVEL 2-3: Basic Automation (Ralph)                                    │
│   ─────────────────────────────────────                                  │
│   Tools: progress.txt, prd.json, Claude HUD, git log                     │
│   Logs: progress.txt (append-only)                                       │
│   Recovery: Check PRD status, review progress, restart loop              │
│                                                                          │
│   LEVEL 4-5: Multi-Agent (CC Mirror)                                     │
│   ──────────────────────────────────                                     │
│   Tools: TaskList, task inspection, worker status                        │
│   Logs: Task comments, handoff files, debug hooks                        │
│   Recovery: Kill all agents, clear tasks, restart coordination           │
│                                                                          │
│   LEVEL 6-7: Factory Scale (Gas Town)                                    │
│   ─────────────────────────────────────                                  │
│   Tools: gt status, gt inbox, Beads inspection, Witness reports          │
│   Logs: Per-role logs, Beads ledger, Agent Mail                          │
│   Recovery: gt town reset --soft, Beads sync, role-by-role restart       │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Combination Matrix: Debugging Patterns

| **Pattern A** | **Pattern B** | **Combined Use Case** | **Synergy** |
| ------------- | ------------- | -------------------- | ----------- |
| Claude HUD | Ralph | Monitor context during autonomous runs | High |
| Git worktrees | Parallel Ralph | Isolated debugging per feature | High |
| Debug hooks | Claude HUD | Comprehensive session logging | Medium |
| CC Mirror tasks | Git worktrees | Multi-agent with file isolation | High |
| Progress.txt | Git commits | Verify claims against actual work | High |
| Anthropic Dashboard | Iteration limits | Cost control during debugging | High |
| Stuck detection | Timeout | Multiple safety nets for loops | High |
| /compact | Claude HUD | Proactive vs reactive context management | High |

### Integration Anti-Patterns

| **Anti-Pattern** | **Why It's Bad** | **Better Approach** |
| ---------------- | --------------- | ------------------- |
| Debugging without git | No recovery baseline | Always have clean git state |
| Multiple debuggers on same session | Conflicting information | Use one primary tool |
| Logging without rotation | Disk space exhaustion | Set up automatic rotation |
| Debugging in production | Risk of additional damage | Use isolated test environment |
| Skipping verification after fix | May not actually be fixed | Always verify with tests |
| Ignoring context warnings | Leads to cascade failures | Act immediately on warnings |

---

## 14. Recovery Playbooks

### Playbook 1: Context Overflow Recovery

**Trigger:** Context > 85%, quality degrading, API Error 400

```bash
# STEP 1: Preserve current state
git add -A && git stash push -m "context-overflow-$(date +%Y%m%d-%H%M%S)"

# STEP 2: Document what you were working on
echo "Task: [describe current task]" > /tmp/recovery-notes.txt
echo "Last good state: [describe]" >> /tmp/recovery-notes.txt
echo "Files modified: $(git diff --name-only HEAD~1)" >> /tmp/recovery-notes.txt

# STEP 3: Try compaction first (if not API Error 400)
/compact
# Check if quality improves

# STEP 4: If compaction doesn't help, or API Error 400
exit
claude  # Fresh session

# STEP 5: Reload minimal essential context
# Claude reads CLAUDE.md automatically
# Explicitly read only files you need

# STEP 6: Resume work
git stash pop
# Continue from where you left off
```

**Recovery time:** 5-10 minutes
**Data loss risk:** Low (git preserves all work)

---

### Playbook 2: Infinite Loop Recovery

**Trigger:** Agent running indefinitely, same errors repeating, no commits

```bash
# STEP 1: Stop the loop
# Try graceful first:
Ctrl+C

# If that doesn't work:
Ctrl+\

# If still running:
pkill -9 -f claude

# STEP 2: Check what was accomplished
git log --oneline -5
cat progress.txt | tail -30
cat prd.json | jq '.userStories[] | select(.passes == true) | .id'

# STEP 3: Identify the stuck task
cat prd.json | jq '.userStories[] | select(.passes == false) | {id, title}'
# This is likely where it got stuck

# STEP 4: Analyze why it's stuck
# Check the task description - is it too large?
# Check acceptance criteria - are they satisfiable?
# Check progress.txt - what errors occurred?

# STEP 5: Fix the root cause
# Option A: Split task smaller
# Option B: Simplify acceptance criteria
# Option C: Add context/notes about blockers

# STEP 6: Add safeguards before restarting
# Edit ralph.sh to add stuck detection:
STUCK_THRESHOLD=3
if [ $ITERATIONS_WITHOUT_COMMIT -ge $STUCK_THRESHOLD ]; then
  echo "Stuck for $STUCK_COUNT iterations, exiting"
  exit 1
fi

# STEP 7: Restart with safeguards
./ralph.sh 25  # With max iterations
```

**Recovery time:** 15-30 minutes
**Data loss risk:** Low (git preserves commits)

---

### Playbook 3: Cost Runaway Recovery

**Trigger:** Unexpected API costs, long-running processes

```bash
# STEP 1: IMMEDIATE - Stop all Claude processes
pkill -f claude

# STEP 2: Check damage
# Open Anthropic dashboard
open https://console.anthropic.com/

# Note:
# - Total spend today
# - Token usage
# - When the spike started

# STEP 3: Set budget limits (if not already)
# In console: Set daily/monthly limits

# STEP 4: Identify the cause
# Check for:
cat output.txt | tail -100
# Look for:
# - Recursive Task() calls (workers spawning workers)
# - Web search loops (100+ searches)
# - Same operation repeated

# STEP 5: Fix the root cause
# If recursive agents:
#   Add worker preamble with "Do NOT spawn sub-agents"
#
# If web search loop:
#   Add MAX_SEARCHES=5 limit
#
# If repeated operations:
#   Add iteration limits

# STEP 6: Add monitoring before restarting
# Set up cost alerts
# Add timeout: timeout 3600 ./ralph.sh 50

# STEP 7: Resume with safeguards
./ralph.sh 25  # Conservative limit
```

**Recovery time:** 10-20 minutes
**Data loss risk:** None (only costs)

---

### Playbook 4: File Corruption Recovery

**Trigger:** Claude made unwanted changes, files corrupted

```bash
# STEP 1: Stop immediately
Ctrl+C

# STEP 2: Assess damage
git status
git diff HEAD

# STEP 3: Decide recovery scope
# Option A: Specific file(s) only
git checkout -- path/to/file.ts

# Option B: All uncommitted changes
git checkout -- .

# Option C: Last N commits bad
git reset --hard HEAD~N  # CAUTION: loses commits

# STEP 4: If work was stashed
git stash list
git stash show stash@{0}
# Selectively apply:
git stash show -p stash@{0} -- path/to/file.ts | git apply

# STEP 5: Verify recovery
npm run typecheck
npm test
# Confirm files are restored correctly

# STEP 6: Add prevention
# Update permissions to block dangerous commands
# Update .claudeignore if needed
```

**Recovery time:** 5-15 minutes
**Data loss risk:** Depends on backup strategy

---

### Playbook 5: Multi-Agent Chaos Recovery

**Trigger:** Agents conflicting, merge wall, coordination breakdown

```bash
# STEP 1: Kill all agent processes
pkill -f claude

# STEP 2: Check status of each workspace
git worktree list
for wt in $(git worktree list | awk '{print $1}'); do
  echo "=== $wt ==="
  (cd $wt && git status --short && git log --oneline -3)
done

# STEP 3: Identify conflicts
git checkout main
for branch in $(git branch | grep -v main); do
  echo "=== Merge test: $branch ==="
  git merge --no-commit $branch 2>&1 | head -5
  git merge --abort 2>/dev/null
done

# STEP 4: Resolve conflicts
# Option A: Sequential merge (preferred)
for branch in branch1 branch2 branch3; do
  git checkout main
  git merge $branch
  # Resolve conflicts if any
  npm test  # Verify before next merge
done

# Option B: Cherry-pick specific commits
git log --oneline branch1
git cherry-pick <commit-hash>

# STEP 5: Clean up worktrees
git worktree remove ../wt-feature1 --force
git worktree remove ../wt-feature2 --force

# STEP 6: Restart with better isolation
# Assign clear directory ownership before spawning agents
# Use sequential work if conflicts are common
```

**Recovery time:** 30-60 minutes
**Data loss risk:** Medium (some work may be lost in merge resolution)

---

### Playbook 6: Authentication Issues Recovery

**Trigger:** API authentication failing, token expired

```bash
# STEP 1: Re-authenticate
claude auth logout
claude auth login

# STEP 2: If that fails, clear credentials
rm -rf ~/.claude/credentials
claude auth login

# STEP 3: If OAuth issues, try API key
export ANTHROPIC_API_KEY="sk-ant-..."
claude

# STEP 4: Verify authentication works
claude "Say hello"

# STEP 5: If still failing, check:
# - Account status (billing, suspension)
# - API key validity
# - Rate limit status
# - Network/proxy issues

# STEP 6: For automation, prefer API key
# OAuth can expire, API keys are stable
echo 'export ANTHROPIC_API_KEY="sk-ant-..."' >> ~/.bashrc
source ~/.bashrc
```

**Recovery time:** 5-15 minutes
**Data loss risk:** None

---

## 15. Prevention Strategies

### The Prevention Hierarchy

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     THE PREVENTION HIERARCHY                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   LEVEL 1: STRUCTURAL PREVENTION (Best)                                  │
│   ─────────────────────────────────────                                  │
│   Patterns that make failures impossible by design                       │
│                                                                          │
│   Examples:                                                              │
│   ├── Fresh context per iteration (Ralph pattern)                        │
│   ├── Git worktrees for file isolation                                   │
│   ├── Worker preambles preventing sub-agent spawning                     │
│   ├── Permissions blocking dangerous commands                            │
│   └── .claudeignore preventing secret exposure                           │
│                                                                          │
│   LEVEL 2: DETECTIVE PREVENTION (Good)                                   │
│   ────────────────────────────────────                                   │
│   Monitoring that catches failures early                                 │
│                                                                          │
│   Examples:                                                              │
│   ├── Claude HUD for context monitoring                                  │
│   ├── Stuck detection in Ralph scripts                                   │
│   ├── Budget alerts in Anthropic console                                 │
│   ├── Git hooks for verification                                         │
│   └── progress.txt review between iterations                             │
│                                                                          │
│   LEVEL 3: REACTIVE PREVENTION (Acceptable)                              │
│   ──────────────────────────────────────────                             │
│   Fast recovery when failures occur                                      │
│                                                                          │
│   Examples:                                                              │
│   ├── Git checkpoints for easy rollback                                  │
│   ├── Max iterations as safety net                                       │
│   ├── Timeout around scripts                                             │
│   ├── Budget limits in console                                           │
│   └── Recovery playbooks documented                                      │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Prevention Checklists

#### Pre-Session Prevention Checklist

```
□ Git state clean (or intentionally dirty)
  Command: git status

□ On dedicated branch (not main)
  Command: git branch --show-current

□ CLAUDE.md exists and is current
  Command: cat CLAUDE.md | head -20

□ .claudeignore excludes sensitive files
  Must include: .env*, node_modules/, dist/, *.pem, *.key

□ Dangerous commands blocked in permissions
  Must block: rm -rf, sudo, git push --force, git reset --hard

□ Context monitoring available
  Plugin: Claude HUD or manual awareness

□ Max iterations set for loops
  Variable: MAX_ITERATIONS in ralph.sh

□ Budget limits configured
  Location: Anthropic console
```

#### Pre-Ralph Prevention Checklist

```
□ PRD is properly structured
  Check: cat prd.json | jq .

□ Tasks are atomically sized (2-3 sentences each)
  Check: Each task fits in one context window

□ All tasks have verification criteria
  Must include: "npm run typecheck passes", "npm test passes"

□ UI tasks have browser verification
  Must include: "Verify at localhost:3000 using browser"

□ Dependencies are correctly ordered
  Flow: Schema → Backend → Frontend → Dashboard

□ progress.txt initialized
  Command: echo "# Ralph Progress Log\nStarted: $(date)\n---" > progress.txt

□ Completion promise format correct
  Format: <promise>COMPLETE</promise>

□ ralph.sh is executable
  Command: chmod +x ralph.sh
```

#### Pre-Multi-Agent Prevention Checklist

```
□ Worker preambles include restrictions
  Must include: "Do NOT spawn sub-agents"

□ File ownership assigned
  Each agent knows which files/directories are theirs

□ Git worktrees created (if needed)
  Command: git worktree add ../wt-<name> <branch>

□ Handoff format documented
  Workers know how to report results

□ Error handling defined
  What happens if a worker fails?

□ Consensus mechanism selected (if needed)
  For critical decisions requiring agreement

□ Resource limits set
  Max agents, max iterations per agent, total budget

□ Monitoring in place
  Can track all agents' status
```

### Common Prevention Patterns

#### Pattern 1: The Fresh Context Guarantee

```bash
#!/bin/bash
# Every iteration gets fresh context

for i in $(seq 1 $MAX_ITERATIONS); do
  # Each iteration is a NEW Claude session
  # No accumulated context pollution
  OUTPUT=$(cat prompt.md | claude 2>&1)

  # Result written to external file
  echo "$OUTPUT" >> output.txt

  # Decision based on external state, not context memory
  if grep -q "COMPLETE" output.txt; then
    exit 0
  fi
done
```

#### Pattern 2: The Verification Gate

```json
{
  "acceptanceCriteria": [
    "Feature implemented as specified",
    "npm run typecheck passes with exit code 0",
    "npm test passes with exit code 0",
    "No console errors in browser",
    "Verified at localhost:3000/<route>"
  ]
}
```

**Prompt instruction:**
```
CRITICAL: Do NOT mark task complete until ALL acceptance criteria verified.
For each criterion, show the verification command output and exit code.
```

#### Pattern 3: The Worker Preamble

```markdown
CONTEXT: You are a WORKER agent, not an orchestrator.

RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report your results with absolute file paths

TASK:
[specific task description]
```

#### Pattern 4: The Budget Circuit Breaker

```bash
#!/bin/bash
# Check costs before continuing

MAX_DAILY_COST=50
CURRENT_COST=$(get_daily_cost)  # Implement based on your monitoring

if [ $(echo "$CURRENT_COST > $MAX_DAILY_COST" | bc) -eq 1 ]; then
  echo "BUDGET EXCEEDED: $CURRENT_COST > $MAX_DAILY_COST"
  pkill -f claude
  exit 1
fi
```

#### Pattern 5: The Stuck Detection Safety

```bash
#!/bin/bash
# Exit if no progress for 3 iterations

STUCK_THRESHOLD=3
LAST_COMMIT=""
STUCK_COUNT=0

for i in $(seq 1 $MAX_ITERATIONS); do
  # Run iteration
  cat prompt.md | claude 2>&1 | tee output.txt

  # Check for progress
  CURRENT_COMMIT=$(git rev-parse HEAD 2>/dev/null)

  if [ "$CURRENT_COMMIT" = "$LAST_COMMIT" ]; then
    STUCK_COUNT=$((STUCK_COUNT + 1))
    if [ $STUCK_COUNT -ge $STUCK_THRESHOLD ]; then
      echo "STUCK for $STUCK_COUNT iterations, exiting"
      exit 1
    fi
  else
    STUCK_COUNT=0
    LAST_COMMIT=$CURRENT_COMMIT
  fi
done
```

---

## 16. Source Attribution

### Primary Extraction Sources

| **File** | **Content Type** | **Key Contributions** |
| -------- | ---------------- | -------------------- |
| `022-gas-town-deep-dive.md` | Gas Town architecture | Merge wall, role debugging, Beads issues |
| `024-cc-mirror-complete.md` | CC Mirror orchestration | Iron Law, context collapse, worker preambles |
| `026-ralph-production.md` | Ralph implementation | Story sizing, completion promises, stuck detection |
| `031-claude-flow-enterprise.md` | Enterprise orchestration | Consensus failures, swarm debugging |
| `003-production-war-stories-synthesis.md` | Production incidents | $47K loop, file deletion, cost runaway |
| `research-edge-cases-expanded.md` | Edge cases & anti-patterns | GitHub issues, platform bugs, version issues |
| `failure-modes-extraction.md` | Complete failure catalog | All failure categories, recovery playbooks |

### Research Statistics

- **GitHub Issues Analyzed:** 4,677+
- **Production Incidents Documented:** 15+
- **Platform-Specific Issues:** 12+
- **Recovery Playbooks:** 6 detailed procedures
- **Prevention Patterns:** 5 reusable templates
- **Case Studies:** 6 deep dives

### Community Contributors

| **Contributor** | **Contribution Area** |
| --------------- | -------------------- |
| Steve Yegge | Gas Town, merge wall insights, factory-scale patterns |
| Numman Ali | CC Mirror, hidden APIs, Iron Law pattern |
| Ryan Carson | Ralph production, story sizing, verification loops |
| Boris Cherny | Context-first philosophy, external state patterns |
| Anthropic Team | Official documentation, troubleshooting guides |

### Reliability Assessment

| **Source Type** | **Reliability** | **Notes** |
| --------------- | -------------- | --------- |
| Official Anthropic docs | HIGH | Primary reference |
| GitHub issue tracker | HIGH | Empirical evidence |
| Production war stories | HIGH | Real-world validation |
| Community patterns | MEDIUM-HIGH | Battle-tested but evolving |
| arXiv research | HIGH | Peer-reviewed findings |

---

## Tags

`#debugging` `#failure-modes` `#recovery` `#troubleshooting` `#context-management` `#multi-agent` `#orchestration` `#verification` `#cost-optimization` `#prevention` `#war-stories` `#production` `#ralph` `#gas-town` `#cc-mirror` `#mental-models` `#decision-trees` `#playbooks` `#deep-dive` `#synthesis`

---

## Document Metadata

| Field | Value |
| ----- | ----- |
| **Extraction ID** | synthesis/debugging-agent-failures |
| **Created** | 2026-01-19 |
| **Author** | Claude Opus 4.5 |
| **Line Count** | 2,400+ |
| **Sections** | 16 major sections |
| **Case Studies** | 6 detailed |
| **Mental Models** | 5 |
| **Decision Trees** | 5 |
| **Recovery Playbooks** | 6 |
| **Gap Addressed** | CRITICAL (0% prior coverage) |
| **D-FINAL Integration** | Complete |

---

*This synthesis fills a CRITICAL gap in the knowledge base. Previously, debugging content was fragmented across multiple files with 0% dedicated coverage. This document provides comprehensive, systematic debugging guidance synthesized from all available sources.*

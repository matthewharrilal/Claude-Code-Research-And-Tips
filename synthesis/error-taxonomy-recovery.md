# Error Taxonomy and Recovery Patterns

## Complete Guide to Claude Code Failure Modes, Recovery Strategies, and Error Prevention

---

## You Are Here

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        KNOWLEDGE BASE ARCHITECTURE                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   SOURCE-INDEX.md                                                            │
│        │                                                                     │
│        ├── claude-code-mastery.md                                            │
│        │                                                                     │
│        ├── extractions/                                                      │
│        │   ├── orchestration/     ← Error patterns from Ralph, CC Mirror    │
│        │   ├── cross-cutting/     ← Production war stories, edge cases      │
│        │   └── deep/              ← Failure modes catalog                   │
│        │                                                                     │
│        └── synthesis/                                                        │
│            ├── MASTER-PLAYBOOK.md                                            │
│            ├── mastery-ralph-complete.md                                     │
│            └── ERROR-TAXONOMY-RECOVERY.md   ← YOU ARE HERE                   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**What this document is:**
This is your **comprehensive error recovery reference** for Claude Code workflows. It synthesizes failure patterns from production war stories, community experiences, and documented incidents across 4,677+ GitHub issues and multiple orchestration implementations.

**Who this is for:**
- Developers experiencing errors in Claude Code sessions
- Teams setting up error prevention strategies
- Orchestration implementers building robust systems
- Anyone who wants to understand "what can go wrong"

**How to use this document:**
- **Active error?** Use Cmd+F to search for your symptom
- **Prevention planning?** Read the Error Types taxonomy and Prevention sections
- **Recovery needed?** Jump to the Recovery Playbooks section
- **Understanding patterns?** Start with the Mental Models section

**What you need to know first:**
- Basic familiarity with Claude Code
- Understanding of context windows and tokens
- For orchestration errors: familiarity with the pattern you're using (Ralph, CC Mirror, etc.)

---

## Table of Contents

1. [Error Types Taxonomy](#1-error-types-taxonomy)
2. [Deterministic vs Non-Deterministic Failures](#2-deterministic-vs-non-deterministic-failures)
3. [Recovery Patterns](#3-recovery-patterns)
4. [Decision Tree: "This Error, What Do I Do?"](#4-decision-tree-this-error-what-do-i-do)
5. [Cross-Pattern Error Handling Examples](#5-cross-pattern-error-handling-examples)
6. [Rollback and Retry Strategies](#6-rollback-and-retry-strategies)
7. [Mental Models for Error Handling](#7-mental-models-for-error-handling)
8. [Integration Patterns with Combination Matrix](#8-integration-patterns-with-combination-matrix)
9. [Checkpoints for Error Prevention](#9-checkpoints-for-error-prevention)
10. [Troubleshooting Accordions](#10-troubleshooting-accordions)
11. [Source Attribution and References](#11-source-attribution-and-references)

---

## 1. Error Types Taxonomy

### 1.1 **Con**text **Win**dow Errors

**Con**text window errors are the **most common failure category**, accounting for the majority of quality degradation in Claude Code sessions.

#### 1.1.1 Context Overflow

**Error Type:** DETERMINISTIC
**Severity:** HIGH
**Frequency:** Very Common

**Symptoms:**
- `API Error 400` messages
- Quality degradation after 30+ minutes
- Claude forgetting earlier instructions
- Truncated code outputs (functions cut off mid-definition)
- CLAUDE.md directives being ignored

**Root Cause:**
Context window (200K tokens) has exceeded capacity. Performance degradation begins at 60-70% capacity and becomes critical above 90%.

**Context Level Impact Table:**

| Level | Impact | Recovery Action |
|-------|--------|-----------------|
| 0-50% | Full capability | Continue normal operation |
| 50-70% | Slight degradation possible | Proactive /compact recommended |
| 70-85% | Noticeable quality loss | Compact immediately |
| 85-95% | Significant degradation | Reset session |
| 95%+ | Failure mode | Session unrecoverable, start fresh |

**Documentation:** GitHub Issues, Community Reports
**Prevention:** Use Ralph pattern (fresh context), Claude HUD monitoring

---

#### 1.1.2 Context Rot (Quality Degradation)

**Error Type:** NON-DETERMINISTIC
**Severity:** MEDIUM-HIGH
**Frequency:** Common

**Symptoms:**
- Responses become generic or repetitive
- Errors start compounding
- Claude claims it did something it didn't
- Circular edits to the same file
- Same mistake repeated despite corrections

**Root Cause:**
Token accumulation without compaction causes LLM performance degradation. Unlike overflow (hard limit), rot is gradual quality decay.

**Quote from Community:**
> "Beyond three turns, AI becomes unreliable without proper memory, summarization, and state handling."

**Documentation:** `extractions/cross-cutting/003-production-war-stories-synthesis.md`
**Prevention:** Fresh context per iteration (Ralph), external memory files

---

#### 1.1.3 Context Pollution (Wrong Data Loaded)

**Error Type:** DETERMINISTIC
**Severity:** MEDIUM
**Frequency:** Common

**Symptoms:**
- Context fills immediately after "read all files" command
- No room left for actual work
- Simple tasks become impossible
- Thousands of tokens consumed by irrelevant content

**Root Cause:**
Over-eager exploration. Commands like "Read all files in src/" consume entire context budget with files not needed for the task.

**Example Anti-Pattern:**
```markdown
# BAD
"Read all the files in src/ to understand the architecture"

# GOOD
"Read src/index.ts and src/config.ts to understand the entry point"
```

**Documentation:** `extractions/cross-cutting/research-edge-cases-expanded.md`
**Prevention:** `.claudeignore` file, targeted file reads, subagents for exploration

---

#### 1.1.4 Compaction Loss

**Error Type:** NON-DETERMINISTIC
**Severity:** MEDIUM
**Frequency:** Occasional

**Symptoms:**
- Post-compaction behavior changes unexpectedly
- Specific instructions no longer followed
- Context from early conversation lost
- Edge cases suddenly forgotten

**Root Cause:**
Compaction is lossy. The model must decide what's "important" without knowing your actual priorities. Important instructions may be discarded.

**Recovery:**
1. Re-state critical instructions explicitly
2. Reference CLAUDE.md again
3. If behavior significantly degraded, start fresh session

**Documentation:** `extractions/deep/failure-modes-extraction.md`
**Prevention:** External state in files (progress.txt, prd.json), compact proactively at 60-70%

---

### 1.2 **Mer**ge and **Ver**sion Control Errors

#### 1.2.1 Merge Conflicts Between Parallel Agents

**Error Type:** DETERMINISTIC
**Severity:** HIGH
**Frequency:** Common in multi-agent setups

**Symptoms:**
- Git conflicts at merge time
- `<<<<<<<`, `=======`, `>>>>>>>` markers in source files
- Work overwritten by parallel agents
- Race conditions on shared files

**Root Cause:**
Multiple agents editing same files without isolation. No coordination mechanism for file ownership.

**Quote from Community:**
> "If both agents work on the same file, all hell breaks loose. They'll overwrite each other's edits and manipulate the other agent's context."

**Documentation:** `extractions/cross-cutting/003-production-war-stories-synthesis.md`
**Prevention:** Git worktrees for complete isolation, directory ownership per agent

---

#### 1.2.2 Destructive Git Operations

**Error Type:** DETERMINISTIC
**Severity:** CRITICAL
**Frequency:** Rare but Catastrophic

**Symptoms:**
- Uncommitted work permanently destroyed
- `git reset --hard` executed without warning
- History rewritten unexpectedly

**Root Cause:**
Claude Code uses `git reset --hard` instead of safe `git checkout` for rollbacks.

**GitHub Issue:** #17190

**Prevention:**
```bash
# Before any Claude Code session
git stash push -m "pre-claude-backup"
# Or work on a dedicated branch
git checkout -b claude-work
```

**Documentation:** `extractions/cross-cutting/research-edge-cases-expanded.md`

---

#### 1.2.3 Merge Conflict Injection

**Error Type:** DETERMINISTIC
**Severity:** MEDIUM
**Frequency:** Occasional

**Symptoms:**
- Conflict markers appear in source files
- `<<<<<<<`, `=======`, `>>>>>>>` in code
- Syntax errors from malformed merges

**Detection:**
```bash
grep -r "<<<<<<" src/
```

**Recovery:**
Manually remove markers or revert with `git checkout -- file.ts`

---

### 1.3 **Val**idation and **Ver**ification Errors

#### 1.3.1 False Positive Test Results

**Error Type:** NON-DETERMINISTIC
**Severity:** HIGH
**Frequency:** Common

**Symptoms:**
- Claude reports tests pass but tests are actually broken
- Test framework not installed
- Tests running in wrong directory
- Exit codes ignored

**Root Cause:**
Claude saw output and assumed success without verifying exit code.

**Detection:**
```bash
npm test 2>&1 | tail -20
echo "Exit code: $?"
```

**Prevention:**
Always include exit code verification:
```bash
npm test 2>&1 | tail -20
echo "Exit code: $?"
# Script should fail if exit code != 0
```

**Documentation:** `extractions/deep/failure-modes-extraction.md`

---

#### 1.3.2 Features Marked Complete Without Testing

**Error Type:** NON-DETERMINISTIC
**Severity:** HIGH
**Frequency:** Very Common

**Symptoms:**
- Tasks marked "done" without verification
- No test output in logs
- Features fail in production
- End-to-end paths broken

**Quote from Anthropic:**
> "Claude's tendency to mark features complete without proper testing... did much better at verifying end-to-end once explicitly prompted to use browser automation tools"

**Prevention:**
```json
"acceptanceCriteria": [
  "Feature implemented",
  "npm run typecheck passes with exit code 0",
  "npm run test passes with exit code 0",
  "Verify at localhost:3000/feature using Playwright screenshot"
]
```

**Documentation:** `extractions/deep/failure-modes-extraction.md`

---

#### 1.3.3 PRD Status Not Matching Reality

**Error Type:** DETERMINISTIC
**Severity:** MEDIUM
**Frequency:** Common

**Symptoms:**
- Tasks marked `passes: true` but code is broken
- Tasks marked `passes: false` but actually working
- Circular work on "completed" tasks

**Root Cause:**
PRD updates not tied to verification. Agent marked tasks complete without running tests.

**Detection:**
```bash
# Check actual test status
npm test

# Compare to PRD claims
cat prd.json | jq '.userStories[] | select(.passes == true) | .title'
```

---

### 1.4 **Rat**e Limit and **API** Errors

#### 1.4.1 Rate Limit Errors

**Error Type:** DETERMINISTIC
**Severity:** MEDIUM
**Frequency:** Common with heavy automation

**Symptoms:**
- `rate_limit` errors in output
- API requests rejected
- Agent stuck waiting
- Workflow blocked

**Root Cause:**
Exceeding API rate limits. Anthropic introduced rate limits in August 2025 targeting "people running multiple instances, automating them to run 24/7."

**Recovery:**
```bash
#!/bin/bash
RATE_LIMIT_SLEEP=5

# Check for rate limit and wait
if grep -q "rate_limit" output.txt; then
  echo "Rate limited, waiting..."
  sleep 60
fi

sleep $RATE_LIMIT_SLEEP  # Always pause between iterations
```

**Documentation:** `extractions/deep/failure-modes-extraction.md`

---

#### 1.4.2 Authentication Failures

**Error Type:** DETERMINISTIC
**Severity:** MEDIUM
**Frequency:** Occasional

**Symptoms:**
- 401/403 errors
- Token/session expiration too frequent
- Requiring constant re-login

**GitHub Issue:** #17189

**Recovery:**
```bash
# Re-authenticate
claude auth logout
claude auth login

# Or use API key instead
export ANTHROPIC_API_KEY="sk-ant-..."
```

---

### 1.5 **Inf**inite **Loo**p Errors

#### 1.5.1 Verification Loop

**Error Type:** NON-DETERMINISTIC
**Severity:** HIGH
**Frequency:** Common

**Symptoms:**
- Same file edited 5+ times without progress
- Claude runs tests, finds failure, makes change, tests fail differently, repeat
- Token consumption without meaningful progress

**Root Cause:**
Fundamental approach is wrong, not just implementation details. Claude is trying to fix symptoms, not root cause.

**Detection:**
- Same file edited 5+ times
- Circular edit patterns
- No commits for 3+ iterations

**Break Pattern:**
1. Interrupt: `Ctrl+C`
2. Rethink approach at higher level
3. Split task into smaller pieces
4. Add blocking dependency on simpler tasks

---

#### 1.5.2 Exploration Loop

**Error Type:** DETERMINISTIC
**Severity:** LOW-MEDIUM
**Frequency:** Common

**Symptoms:**
- Claude searches for file, doesn't find it
- Searches again with different pattern
- Multiple grep/glob calls with no results

**Root Cause:**
File doesn't exist or is in unexpected location.

**Break Pattern:**
Explicitly tell Claude the file doesn't exist:
```
"The file auth.ts does not exist. You need to create it."
```

---

#### 1.5.3 Permission Loop

**Error Type:** DETERMINISTIC
**Severity:** LOW
**Frequency:** Occasional

**Symptoms:**
- Claude attempts action, denied
- Attempts slightly different action
- Repeats without making progress

**Root Cause:**
Permission configuration too restrictive for the task.

**Fix:**
Review and adjust permissions with `/permissions` UI, or whitelist the required command.

---

#### 1.5.4 Ralph Loop Runaway

**Error Type:** NON-DETERMINISTIC
**Severity:** CRITICAL (Cost)
**Frequency:** Occasional

**Symptoms:**
- Completion promise never found
- Loop runs to max iterations every time
- Tasks actually complete but loop continues
- Massive token consumption

**Root Cause:**
Completion promise either not output by Claude or not detected by script.

**The $47,000 Incident:**
> "A multi-agent research tool slipped into a recursive loop that ran for 11 days before anyone noticed, accumulating $47,000 in costs."

**Prevention:**
```bash
# Always set max iterations
MAX_ITERATIONS=${1:-25}

# Include timeout
timeout 3600 ./ralph.sh 50  # 1 hour max

# Stuck detection
STUCK_THRESHOLD=3
if [ "$CURRENT_COMMIT" = "$LAST_COMMIT" ]; then
  STUCK_COUNT=$((STUCK_COUNT + 1))
  if [ $STUCK_COUNT -ge $STUCK_THRESHOLD ]; then
    echo "WARNING: Stuck for $STUCK_COUNT iterations"
    exit 1
  fi
fi
```

**Documentation:** `extractions/orchestration/028-marathon-ralph.md`

---

### 1.6 **Cos**t and **Res**ource Errors

#### 1.6.1 Cost Runaway

**Error Type:** DETERMINISTIC (once loop starts)
**Severity:** CRITICAL
**Frequency:** Occasional but Devastating

**Symptoms:**
- API costs far exceed expectations
- Token usage in millions
- Budget blown in hours
- "Expensive as hell" outcomes

**Documented Incidents:**
- $47,000 from 11-day recursive loop
- 3.2 million tokens on circular revisions
- $500+ bills on simple features

**Model Cost Awareness:**

| Model | Input | Output | Relative Cost |
|-------|-------|--------|---------------|
| Haiku | $0.25/1M | $1.25/1M | 1x |
| Sonnet | $3/1M | $15/1M | 12x |
| Opus | $15/1M | $75/1M | 60x |

**Prevention:**
- Always set iteration limits
- Use timeouts
- Match model to task complexity
- Monitor with Claude HUD or API dashboard

**Documentation:** `extractions/cross-cutting/003-production-war-stories-synthesis.md`

---

#### 1.6.2 Tool Overhead Costs

**Error Type:** DETERMINISTIC
**Severity:** MEDIUM
**Frequency:** Common (Hidden)

**Symptoms:**
- Simple tasks costing more than expected
- Tool calls adding hidden tokens
- Search costs accumulating

**Hidden Tool Overhead:**
- Bash tool: +245 input tokens per call
- Text editor: +700 input tokens typical
- Web search: $10 per 1,000 searches
- Code execution: $0.05 per session-hour

**Quote:**
> "If a loop calls web search 100 times, that's $1 in search alone—before tokens."

**Prevention:**
```bash
# Cap search iterations per turn
MAX_SEARCHES=5
```

---

### 1.7 **Sec**urity and **Per**mission Errors

#### 1.7.1 Catastrophic File Deletion

**Error Type:** DETERMINISTIC
**Severity:** CRITICAL
**Frequency:** Rare but Devastating

**Documented Incidents:**
- `rm -rf tests/ patches/ plan/ ~/` - Deleted user's entire home folder (GitHub Issue #17164)
- `rmdir /s /q d:\` - Deleted entire D: drive (Google Antigravity incident)
- Replit deleting production database with 1,200+ executives' data

**Root Cause:**
`--dangerously-skip-permissions` used without safeguards. No blocklist for destructive commands.

**Prevention:**
```json
{
  "permissions": {
    "blockedPatterns": [
      "rm -rf",
      "rmdir /s",
      "find . -delete",
      "git push --force",
      "git reset --hard",
      "sudo rm",
      "chmod -R 777"
    ]
  }
}
```

**Never Whitelist:**
- `rm -rf`
- `sudo *`
- `git push --force`
- `git reset --hard`
- `find . -delete`

**Documentation:** `extractions/cross-cutting/003-production-war-stories-synthesis.md`, `extractions/cross-cutting/research-edge-cases-expanded.md`

---

#### 1.7.2 Credentials Exposure

**Error Type:** DETERMINISTIC
**Severity:** CRITICAL
**Frequency:** Occasional

**Symptoms:**
- API keys visible in conversation
- Passwords in logs
- `.env` contents displayed
- Secrets in git history

**Root Cause:**
No `.claudeignore`. Sensitive files readable by Claude.

**Prevention:**
```gitignore
# .claudeignore - REQUIRED
.env*
*.pem
*.key
credentials.json
secrets/
.aws/
.ssh/
*.keychain
```

**Recovery:**
1. Rotate ALL exposed credentials immediately
2. Remove secrets from git history: `git filter-branch`
3. Add files to .claudeignore
4. Never cat .env in Claude Code

---

#### 1.7.3 Path Traversal

**Error Type:** DETERMINISTIC
**Severity:** HIGH
**Frequency:** Rare

**Symptoms:**
- Claude accessing files outside project
- Reading ~/.ssh/id_rsa
- Accessing ~/.aws/credentials
- Reading /etc/passwd

**GitHub Issue:** #17192 (Path-based permission rules bypass)

**Prevention:**
```json
{
  "permissions": {
    "paths": {
      "deny": ["../**", "/etc/**", "~/.ssh/**", "~/.aws/**", "~/.gnupg/**"]
    }
  }
}
```

---

#### 1.7.4 Memory Injection Attacks

**Error Type:** NON-DETERMINISTIC
**Severity:** HIGH
**Frequency:** Emerging Threat

**Symptoms:**
- Agent develops false beliefs
- Defends incorrect information
- Security policies ignored
- Vendor relationships fabricated

**Root Cause:**
Poisoned data sources. Indirect prompt injection via external content.

**Research Finding:**
> "A single compromised agent poisoned 87% of downstream decision-making within 4 hours."

**Prevention:**
- Validate external data before injection
- Use trusted sources only
- Implement data integrity checks
- Regular audits of agent beliefs

**Documentation:** `extractions/deep/failure-modes-extraction.md`

---

### 1.8 **Orc**hestration and **Mul**ti-Agent Errors

#### 1.8.1 Recursive Agent Explosion

**Error Type:** DETERMINISTIC
**Severity:** CRITICAL
**Frequency:** Common without proper preambles

**Symptoms:**
- Subagent depth exceeds 2-3 levels
- Context usage spikes unexpectedly
- Tasks taking 10x longer than expected
- Runaway API costs

**Root Cause:**
Workers not properly restricted. A worker agent spawns subagents, which spawn more subagents, creating exponential context explosion.

**Prevention - Worker Preamble:**
```markdown
CONTEXT: You are a WORKER agent, not an orchestrator.

RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report your results with absolute file paths
```

**Documentation:** `extractions/orchestration/024-cc-mirror-complete.md`

---

#### 1.8.2 Orchestrator Role Violation

**Error Type:** NON-DETERMINISTIC
**Severity:** MEDIUM
**Frequency:** Common

**Symptoms:**
- Orchestrator gets distracted by implementation details
- Role confusion between planning and execution
- Scope creep within orchestrator context
- Orchestrator context filling with file contents

**Root Cause:**
Mixing concerns. The orchestrator should think at coordination level, not get lost in file edits.

**The Iron Law (CC Mirror):**
```
YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS.
YOU DO NOT EXPLORE CODEBASES.
You are the CONDUCTOR. Your agents play the instruments.
```

**Tool Ownership Separation:**
- **Orchestrator uses:** TaskCreate, TaskList, TaskGet, TaskUpdate, AskUserQuestion, Task (to spawn workers), Read (1-2 references max)
- **Workers use:** Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch, LSP
- **Workers NEVER use:** Task*, spawn sub-agents

**Documentation:** `extractions/orchestration/024-cc-mirror-complete.md`

---

#### 1.8.3 Multi-Agent Error Amplification

**Error Type:** NON-DETERMINISTIC
**Severity:** HIGH
**Frequency:** Common in decentralized setups

**Symptoms:**
- Small errors multiply across agents
- Downstream decisions based on bad data
- Quality collapse

**Research Statistics:**

| Failure Mode | Percentage |
|--------------|------------|
| Specification problems | 41.77% |
| Coordination failures | 36.94% |
| Error amplification (independent agents) | 17.2x |
| Error amplification (centralized) | 4.4x |

**Quote:**
> "Independent agents amplify errors 17.2x, while centralized coordination contains this to 4.4x."

**Prevention:**
- Use hub-and-spoke (CC Mirror) over fully decentralized
- Add verification at every handoff point
- Implement circuit breakers for error detection

**Documentation:** `extractions/cross-cutting/003-production-war-stories-synthesis.md`

---

#### 1.8.4 Agent Deadlock

**Error Type:** DETERMINISTIC
**Severity:** MEDIUM
**Frequency:** Occasional

**Symptoms:**
- Agents refuse to act
- Each assumes another agent should lead
- No progress despite multiple agents running
- Circular waiting

**Root Cause:**
No clear coordination. Agents waiting for each other without explicit handoff.

**Prevention:**
- Use `addBlocks` / `addBlockedBy` in task management
- Enforce serial execution for dependent tasks
- Clear ownership assignment per task

---

### 1.9 **Fil**e **Sys**tem and Platform Errors

#### 1.9.1 Partial Write Corruption

**Error Type:** DETERMINISTIC
**Severity:** HIGH
**Frequency:** Occasional

**Symptoms:**
- File contains partial content
- Syntax invalid
- Session interrupted mid-write

**Prevention:**
Always commit before long Claude operations.

**Recovery:**
`git checkout -- file.ts`

---

#### 1.9.2 Infinite Loop in Compaction

**Error Type:** DETERMINISTIC (Version-specific)
**Severity:** CRITICAL
**Frequency:** Rare (Bug)

**Symptoms:**
- Claude stuck attempting to "compact" conversations
- No progress on any task
- System basically unusable

**Root Cause:**
Claude Code v1.0.83 bug causing infinite compaction attempts.

**GitHub Issue:** #6004

**Recovery:**
1. Force kill: `pkill -9 -f claude`
2. Update Claude Code to latest version
3. Restart with fresh session

---

#### 1.9.3 Disk Space Exhaustion from Debug Logs

**Error Type:** DETERMINISTIC
**Severity:** HIGH
**Frequency:** Rare (Bug)

**Symptoms:**
- Disk space filling rapidly
- `.claude/debug` directory massive (42GB+ from 481 conversations)
- Individual files 20GB+

**GitHub Issue:** #16093

**Detection:**
```bash
du -sh ~/.claude/debug/
find ~/.claude/debug -size +1G
```

**Recovery:**
```bash
rm -rf ~/.claude/debug/*
```

---

## 2. Deterministic vs Non-Deterministic Failures

Understanding whether a failure is **deterministic** or **non-deterministic** fundamentally changes your recovery strategy.

### 2.1 Deterministic Failures

**Definition:** Given the same inputs, these failures will occur every time. The cause is identifiable and reproducible.

**Characteristics:**
- Root cause is clear and verifiable
- Same input always produces same failure
- Fix once, fixed forever
- Prevention is reliable

**Examples:**
| Error | Why Deterministic |
|-------|-------------------|
| Context overflow (API 400) | Hard token limit exceeded |
| Rate limit errors | API quota exhausted |
| File deletion | Command executed as specified |
| Merge conflicts | Git state conflict detected |
| Path traversal | Path pattern matched blocklist |
| Permission denied | Permission rule violated |

**Recovery Strategy:**
1. Identify exact trigger condition
2. Fix root cause (not symptoms)
3. Add prevention mechanism
4. Verify fix by reproducing scenario

---

### 2.2 Non-Deterministic Failures

**Definition:** These failures may or may not occur given the same inputs. They depend on model state, timing, or accumulated context.

**Characteristics:**
- Root cause is probabilistic
- Same input may produce different outcomes
- "It worked yesterday" syndrome
- Requires multiple defense layers

**Examples:**
| Error | Why Non-Deterministic |
|-------|----------------------|
| Quality degradation | Depends on accumulated context, model variability |
| False test passes | Model interpretation varies |
| Feature marked complete | Model optimism varies |
| Verification loops | Problem-solving path varies |
| Memory injection effects | Depends on data source timing |
| Recursive explosion | Depends on task complexity interpretation |

**Recovery Strategy:**
1. Add multiple checkpoints
2. Implement verification layers
3. Use fresh context when possible
4. Design for graceful degradation
5. Accept some failure rate, plan for retry

---

### 2.3 Recovery Strategy Matrix

| Failure Type | Primary Strategy | Secondary Strategy | Prevention Focus |
|--------------|-----------------|-------------------|------------------|
| **Deterministic** | Fix root cause | Add guardrails | Hard limits, blocklists |
| **Non-Deterministic** | Multiple defense layers | Fresh context restart | Verification, monitoring |
| **Mixed** | Layer both strategies | Circuit breakers | Combination approach |

---

## 3. Recovery Patterns

### 3.1 Pattern: **Res**tart with Fresh Context

**When to Use:**
- Context rot symptoms
- Quality degradation
- Post-compaction issues
- API 400 errors

**Implementation:**
```bash
# 1. Save current work state
git add -A && git stash

# 2. Document what you were working on
echo "Working on: [describe task]" > /tmp/recovery-notes.txt

# 3. Try compaction first (may salvage session)
/compact

# 4. If quality doesn't improve, reset
/reset

# 5. If still bad, exit completely
exit

# 6. Start fresh session
claude

# 7. Restore context from files
cat CLAUDE.md  # Claude will see this automatically

# 8. Resume work
git stash pop
```

**Key Insight:**
> "Fresh context beats accumulated context. When in doubt, start over."

---

### 3.2 Pattern: **Res**ume from External State

**When to Use:**
- Progress lost between iterations
- Session interrupted
- Need to continue after restart

**Implementation:**
```bash
# Ralph pattern - state lives in files, not context

# Check current state
cat prd.json | jq '.userStories[] | select(.passes == false) | .title'
cat progress.txt | tail -20
git log --oneline -5

# Resume by reading state
claude "Read prd.json and progress.txt, continue from where we left off"
```

**Key Files:**
| File | Purpose | Update Rule |
|------|---------|-------------|
| `progress.txt` | Append-only learning log | APPEND ONLY, never overwrite |
| `prd.json` | Task state with passes | Update on verification |
| `CLAUDE.md` | Project context | Update on architecture changes |

---

### 3.3 Pattern: **Esc**alate to Simpler Model

**When to Use:**
- Complex task failing repeatedly
- Budget constraints
- Task may be simpler than initially assessed

**Implementation:**
```bash
# Haiku for simple lookups (5-10 parallel)
# Sonnet for implementation (2-5 parallel)
# Opus for complex reasoning (1 sequential)

# If Haiku fails → Retry with Sonnet
# If Sonnet fails → Retry with Opus
# If Opus fails → Escalate to human via AskUserQuestion
```

**Model Selection Guide:**

| Task Complexity | Model | Parallel Count | Cost per 1M tokens |
|-----------------|-------|----------------|-------------------|
| File lookup, grep | Haiku | 5-10 | $0.25 |
| Implementation, testing | Sonnet | 2-5 | $3 |
| Architecture, complex reasoning | Opus | 1 | $15 |

---

### 3.4 Pattern: **Dec**ompose Further

**When to Use:**
- Task too complex for single iteration
- Context overflow on single task
- Stuck loop (same commit for 3+ iterations)

**Implementation:**
```json
// BAD: Task too large
{
  "title": "Build entire auth system",
  "description": "Add login, signup, password reset, OAuth, 2FA..."
}

// GOOD: Decomposed tasks
[
  {
    "title": "Add users table migration",
    "description": "Create users table with email, password_hash, created_at",
    "priority": 1
  },
  {
    "title": "Implement password hashing",
    "description": "Add bcrypt hashing in src/auth/password.ts",
    "priority": 2
  },
  {
    "title": "Create login endpoint",
    "description": "POST /api/login that validates credentials",
    "priority": 3,
    "blockedBy": ["1", "2"]
  }
]
```

**Task Sizing Rules:**
- **Too big:** If you can't describe it in 2-3 sentences, split it
- **Just right:** 100-500 lines of code change per task
- **Scope:** 1-3 files modified per task

---

### 3.5 Pattern: **Rol**lback and Retry

**When to Use:**
- File corruption detected
- Wrong approach taken
- Need to undo recent changes

**Implementation:**
```bash
# Check what changed
git status
git diff

# Discard changes to specific file
git checkout -- path/to/file.ts

# Or revert all changes
git checkout -- .

# If uncommitted work was stashed
git stash pop

# For more drastic recovery
git reset --hard HEAD

# Check file integrity after recovery
cat path/to/file.ts | head -20
```

**Rollback Decision Tree:**

```
Was the change committed?
├── Yes: git revert <commit-hash>
└── No: Were multiple files changed?
    ├── Yes: git checkout -- .
    └── No: git checkout -- <specific-file>
```

---

### 3.6 Pattern: **Cir**cuit Breaker

**When to Use:**
- Preventing infinite loops
- Cost containment
- Quality threshold enforcement

**Implementation (Marathon Ralph):**

```bash
# Circuit breaker limits from Marathon Ralph
VERIFY_ATTEMPTS=3
PLAN_ATTEMPTS=3
CODE_ATTEMPTS=3
TEST_ATTEMPTS=5
QA_ATTEMPTS=5
PER_ISSUE_ATTEMPTS=5
CONSECUTIVE_FAILURES=5
STOP_HOOK_ITERATIONS=25

# Error signature tracking (normalized)
# Removes: timestamps, line numbers, absolute paths
# Creates MD5 hash for comparison

# If same error signature appears 3+ times, break circuit
if [ "$ERROR_COUNT" -ge 3 ]; then
  echo "Circuit breaker triggered: repeated error detected"
  exit 1
fi
```

**Circuit Breaker Thresholds:**

| Phase | Default Limit | Trigger Action |
|-------|---------------|----------------|
| Verify | 3 attempts | Create bug ticket |
| Plan | 3 attempts | Escalate to human |
| Code | 3 attempts | Decompose task |
| Test | 5 attempts | Review test setup |
| QA | 5 attempts | Skip E2E for non-web |
| Per-issue | 5 attempts | Mark blocked |
| Consecutive failures | 5 | Stop entire marathon |

**Documentation:** `extractions/orchestration/028-marathon-ralph.md`

---

## 4. Decision Tree: "This Error, What Do I Do?"

### 4.1 Master Decision Tree

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         ERROR ENCOUNTERED                                    │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
            ┌───────────────────────────────────────────────┐
            │         Is this an emergency?                  │
            │  (data loss, runaway costs, security breach)   │
            └───────────────────────────────────────────────┘
                       │                    │
                      YES                  NO
                       │                    │
                       ▼                    ▼
              ┌────────────────┐   ┌────────────────────────┐
              │ EMERGENCY STOP │   │ Identify error category │
              │ pkill -f claude│   └────────────────────────┘
              │ Check damage   │              │
              └────────────────┘              ▼
                                  ┌──────────────────────────────┐
                                  │ Is the error deterministic?   │
                                  └──────────────────────────────┘
                                         │           │
                                        YES         NO
                                         │           │
                                         ▼           ▼
                              ┌─────────────┐ ┌─────────────────┐
                              │ Fix root    │ │ Add defense     │
                              │ cause       │ │ layers          │
                              └─────────────┘ └─────────────────┘
                                         │           │
                                         └─────┬─────┘
                                               │
                                               ▼
                                  ┌──────────────────────────────┐
                                  │ Can you continue this session?│
                                  └──────────────────────────────┘
                                         │           │
                                        YES         NO
                                         │           │
                                         ▼           ▼
                              ┌─────────────┐ ┌─────────────────┐
                              │ Apply fix,  │ │ Save state,     │
                              │ continue    │ │ fresh session   │
                              └─────────────┘ └─────────────────┘
```

---

### 4.2 Quick Reference: Error to Recovery Mapping

| Error Symptom | Category | Recovery Pattern |
|---------------|----------|------------------|
| "API Error 400" | Context Overflow | Restart with fresh context |
| Quality degrading | Context Rot | /compact or fresh session |
| Same file edited 5+ times | Verification Loop | Decompose further |
| Tests pass but shouldn't | Validation | Add exit code verification |
| $500+ bill unexpected | Cost Runaway | Circuit breaker, kill process |
| rate_limit errors | Rate Limit | Exponential backoff |
| Files deleted | Security | Restore from git, add blocklist |
| Credentials visible | Security | Rotate immediately, add .claudeignore |
| Agents spawning agents | Orchestration | Add worker preamble |
| Merge conflicts | Multi-Agent | Use git worktrees |
| No commits for 3+ iterations | Stuck Loop | Decompose or skip task |
| Claude references non-existent files | Hallucination | Reset session immediately |

---

### 4.3 Context-Based Decision Paths

#### Path A: Context Issues

```
Quality degrading or context > 70%?
├── Try /compact
│   ├── Quality improves → Continue
│   └── Quality same → Fresh session needed
│       ├── Save state to files
│       ├── Exit session
│       └── Restart, load state from files
```

#### Path B: Infinite Loop

```
Same task failing repeatedly?
├── Check iteration count
│   ├── < 3 → Retry with different approach
│   └── >= 3 → Circuit breaker triggered
│       ├── Task too complex? → Decompose
│       ├── Task impossible? → Mark blocked
│       └── Unknown? → Escalate to human
```

#### Path C: Cost Emergency

```
Unexpected cost spike detected?
├── Kill all processes immediately
│   └── pkill -f claude
├── Check API dashboard
├── Set hard budget limit
└── Review what caused spike
    ├── Recursive loop? → Add worker preamble
    ├── Wrong model? → Match model to task
    └── Infinite loop? → Add max iterations
```

#### Path D: Data Loss Risk

```
Files deleted or corrupted?
├── STOP immediately (Ctrl+C)
├── Check git status
├── Is it committed?
│   ├── Yes → git revert
│   └── No → git checkout -- .
└── Is it in stash?
    └── Yes → git stash pop
```

---

## 5. Cross-Pattern Error Handling Examples

### 5.1 Ralph Loop Error Handling

**Basic Ralph with Error Recovery:**

```bash
#!/bin/bash
# ralph-with-recovery.sh

set -e

MAX_ITERATIONS=${1:-25}
STUCK_THRESHOLD=3
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

LAST_COMMIT=""
STUCK_COUNT=0
CURRENT_ITERATION=0

echo "Starting Ralph with error recovery"

while [ $CURRENT_ITERATION -lt $MAX_ITERATIONS ]; do
  CURRENT_ITERATION=$((CURRENT_ITERATION + 1))
  echo "=== Iteration $CURRENT_ITERATION ==="

  # Run Claude and capture output
  OUTPUT=$(cat "$SCRIPT_DIR/prompt.md" \
    | claude --dangerously-skip-permissions 2>&1 \
    | tee /dev/stderr) || true

  # Check for completion
  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo "Done!"
    exit 0
  fi

  # Check for rate limiting
  if echo "$OUTPUT" | grep -q "rate_limit"; then
    echo "Rate limited, waiting 60 seconds..."
    sleep 60
    continue
  fi

  # Stuck detection
  CURRENT_COMMIT=$(git rev-parse HEAD 2>/dev/null)
  if [ "$CURRENT_COMMIT" = "$LAST_COMMIT" ]; then
    STUCK_COUNT=$((STUCK_COUNT + 1))
    echo "WARNING: No progress, stuck count: $STUCK_COUNT"

    if [ $STUCK_COUNT -ge $STUCK_THRESHOLD ]; then
      echo "ERROR: Stuck for $STUCK_COUNT iterations, breaking"
      echo "Consider decomposing the current task"
      exit 1
    fi
  else
    STUCK_COUNT=0
    LAST_COMMIT=$CURRENT_COMMIT
    echo "Progress made: $CURRENT_COMMIT"
  fi

  sleep 2
done

echo "Max iterations reached"
exit 1
```

---

### 5.2 CC Mirror Error Handling

**Orchestrator with Error Recovery:**

```markdown
# Orchestrator Error Handling Protocol

## When Worker Fails

STRATEGY 1: Retry with Enhanced Context
If worker fails with error:
1. Parse error message for root cause
2. Add error context to new worker preamble:
   "PRIOR ATTEMPT FAILED: [error summary]
    AVOID: [specific pitfall]"
3. Retry with fresh worker

STRATEGY 2: Decompose Further
If worker consistently fails on task:
1. Split task into smaller subtasks
2. Assign prerequisite tasks first
3. Verify prerequisites before retrying original

STRATEGY 3: Escalate Model
If Haiku fails → Retry with Sonnet
If Sonnet fails → Retry with Opus
If Opus fails → Escalate to human via AskUserQuestion

## Worker Preamble with Error Context

CONTEXT: You are a WORKER agent, not an orchestrator.
PRIOR ATTEMPT FAILED: [Previous error message here]
AVOID: [Specific thing that caused failure]

RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report your results with absolute file paths

TASK: [specific task here]
```

---

### 5.3 Marathon Ralph Error Handling

**Full SDLC with Circuit Breakers:**

```json
{
  "failure_tracking": {
    "consecutive_failures": 0,
    "error_signatures": {},
    "phase_attempts": {
      "verify": 0,
      "plan": 0,
      "code": 0,
      "test": 0,
      "qa": 0
    },
    "limits": {
      "verify": 3,
      "plan": 3,
      "code": 3,
      "test": 5,
      "qa": 5,
      "per_issue": 5,
      "consecutive": 5,
      "stop_hook": 25
    }
  }
}
```

**Phase Failure Handling:**

| Phase | On Failure | Action |
|-------|------------|--------|
| VERIFY | Tests/types fail | Create Linear bug issue (P1 for tests/types, P2 for lint) |
| PLAN | Can't create plan | Decompose task, escalate if still fails |
| CODE | Implementation fails | Record error, retry with context |
| TEST | Tests fail to write | Setup testing framework first |
| QA | E2E fails | Skip for non-web projects |
| EXIT | Can't update Linear | Manual state recovery |

**Documentation:** `extractions/orchestration/028-marathon-ralph.md`

---

### 5.4 Claude-Flow Enterprise Error Handling

**Byzantine Fault Tolerance:**

```typescript
// For critical operations, require consensus
const criticalTask = await executeWithConsensus({
  task: 'Deploy to production',
  agents: ['deployer-1', 'deployer-2', 'deployer-3', 'deployer-4'],
  consensus: {
    algorithm: 'byzantine',
    threshold: 0.75,  // Need 3/4 agreement
    timeout: 30000
  },
  onDisagreement: 'escalate-to-human'
});

// Scenario: 3 of 8 agents give wrong output
// Byzantine Consensus:
// 1. All agents vote on outcome
// 2. Supermajority (66%) required for acceptance
// 3. Faulty agents isolated and flagged
// 4. Correct result propagates to system
```

**Documentation:** `extractions/orchestration/031-claude-flow-enterprise.md`

---

## 6. Rollback and Retry Strategies

### 6.1 Git-Based Rollback Strategies

#### Strategy: Checkpoint-Based Recovery

```bash
#!/bin/bash
# checkpoint-recovery.sh

# Before any Claude session
checkpoint_create() {
  git stash push -m "pre-claude-checkpoint-$(date +%Y%m%d-%H%M%S)"
  echo "Checkpoint created"
}

# After successful work
checkpoint_commit() {
  git add -A
  git commit -m "$1"
  echo "Progress committed: $1"
}

# On failure - revert to last checkpoint
checkpoint_restore() {
  git checkout -- .
  git stash pop 2>/dev/null || echo "No stash to restore"
}

# On catastrophic failure - full reset
checkpoint_nuclear() {
  git reset --hard HEAD
  git clean -fd
  echo "Nuclear reset complete"
}
```

#### Strategy: Branch-Based Isolation

```bash
# Work on isolated branch
git checkout -b claude-session-$(date +%Y%m%d-%H%M%S)

# Do work...

# If successful
git checkout main
git merge claude-session-...

# If failed
git checkout main
git branch -D claude-session-...
```

---

### 6.2 State File Rollback

**progress.txt Recovery:**

```bash
# If progress.txt was overwritten (not appended)
git checkout HEAD~1 -- progress.txt

# Add current iteration's learnings manually
echo "---" >> progress.txt
echo "Iteration $(date): [description]" >> progress.txt
```

**prd.json Recovery:**

```bash
# Verify PRD matches reality
npm test
npm run typecheck

# If mismatch, reset PRD status
cat prd.json | jq '.userStories[] |= .passes = false' > prd.json.tmp
mv prd.json.tmp prd.json
```

---

### 6.3 Retry Strategies

#### Exponential Backoff for API Errors

```bash
#!/bin/bash
# exponential-backoff.sh

MAX_RETRIES=5
RETRY_DELAY=5

for i in $(seq 1 $MAX_RETRIES); do
  echo "Attempt $i..."

  if OUTPUT=$(claude "$PROMPT" 2>&1); then
    echo "Success"
    break
  fi

  if echo "$OUTPUT" | grep -q "rate_limit"; then
    DELAY=$((RETRY_DELAY * 2 ** (i - 1)))
    echo "Rate limited, waiting ${DELAY}s..."
    sleep $DELAY
  else
    echo "Error (not rate limit): $OUTPUT"
    exit 1
  fi
done
```

#### Progressive Model Escalation

```bash
#!/bin/bash
# model-escalation.sh

TASK="$1"
MODELS=("haiku" "sonnet" "opus")

for MODEL in "${MODELS[@]}"; do
  echo "Trying with $MODEL..."

  if OUTPUT=$(claude --model "claude-$MODEL" "$TASK" 2>&1); then
    echo "Success with $MODEL"
    break
  fi

  echo "Failed with $MODEL, escalating..."
done
```

---

### 6.4 Rollback Decision Framework

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         ROLLBACK DECISION FRAMEWORK                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   What needs to be rolled back?                                              │
│   │                                                                          │
│   ├── Single file                                                            │
│   │   └── git checkout -- <file>                                             │
│   │                                                                          │
│   ├── Multiple files (uncommitted)                                           │
│   │   └── git checkout -- .                                                  │
│   │                                                                          │
│   ├── Last commit (keep changes)                                             │
│   │   └── git reset --soft HEAD~1                                            │
│   │                                                                          │
│   ├── Last commit (discard changes)                                          │
│   │   └── git reset --hard HEAD~1                                            │
│   │                                                                          │
│   ├── Specific commit                                                        │
│   │   └── git revert <commit-hash>                                           │
│   │                                                                          │
│   ├── State files (progress.txt, prd.json)                                   │
│   │   └── git checkout HEAD~N -- <state-file>                                │
│   │                                                                          │
│   └── Everything (nuclear option)                                            │
│       └── git reset --hard HEAD && git clean -fd                             │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Mental Models for Error Handling

### 7.1 Mental Model: The Checkpoint Climber

**The Metaphor:**
Mountain climbing with fixed checkpoints. Each checkpoint is a git commit. If you fall (error), you only fall back to the last checkpoint, not to the base.

```
Summit (Task Complete)
    △
    │
  ──┼── Checkpoint 4 (git commit)
    │
    │   ← You fall here
    │
  ──┼── Checkpoint 3 (git commit) ← You land here
    │
  ──┼── Checkpoint 2 (git commit)
    │
  ──┼── Checkpoint 1 (git commit)
    │
Base Camp (Initial state)
```

**Application:**
- Commit early and often
- Each working state is a checkpoint
- Rollback is cheap and fast
- Never climb too far without a checkpoint

**Key Insight:**
> "If something works, save it with a git commit. It's your safety net."

---

### 7.2 Mental Model: The Circuit Breaker

**The Metaphor:**
Electrical circuit breakers prevent house fires by cutting power when current exceeds safe levels. Claude Code circuit breakers prevent cost fires by stopping execution when failures exceed safe levels.

```
┌────────────────────────────────────────────────────────────────┐
│                      CIRCUIT BREAKER STATES                     │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│   CLOSED (Normal Operation)                                     │
│   ├── Requests flow through                                     │
│   ├── Failures counted                                          │
│   └── If failures > threshold → OPEN                            │
│                                                                 │
│   OPEN (Protection Mode)                                        │
│   ├── Requests blocked                                          │
│   ├── Cooling period starts                                     │
│   └── After timeout → HALF-OPEN                                 │
│                                                                 │
│   HALF-OPEN (Testing)                                           │
│   ├── Limited requests allowed                                  │
│   ├── If success → CLOSED                                       │
│   └── If failure → OPEN                                         │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

**Application:**
- Set failure thresholds before starting
- When threshold exceeded, stop immediately
- Don't retry immediately - add cooling period
- Test with limited scope before resuming full operation

**Marathon Ralph Implementation:**
| Threshold | Count | Action |
|-----------|-------|--------|
| Phase attempts | 3-5 | Try different approach |
| Consecutive failures | 5 | Stop marathon |
| Error signature repeat | 3 | Skip this task |

---

### 7.3 Mental Model: The Immune System

**The Metaphor:**
Your body has multiple layers of defense: skin, immune cells, antibodies, fever response. Claude Code error handling should have multiple layers too.

```
┌────────────────────────────────────────────────────────────────┐
│                     DEFENSE IN DEPTH                            │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Layer 1: Prevention (Skin)                                    │
│   ├── .claudeignore (blocks sensitive files)                    │
│   ├── Permission blocklist (blocks dangerous commands)          │
│   └── CLAUDE.md (sets expectations)                             │
│                                                                 │
│   Layer 2: Detection (Immune Cells)                             │
│   ├── Context monitoring (Claude HUD)                           │
│   ├── Stuck detection (no commits for N iterations)             │
│   └── Cost monitoring (API dashboard)                           │
│                                                                 │
│   Layer 3: Response (Antibodies)                                │
│   ├── Circuit breakers (automatic stop)                         │
│   ├── Rollback mechanisms (git checkout)                        │
│   └── Fresh context restart                                     │
│                                                                 │
│   Layer 4: Recovery (Healing)                                   │
│   ├── State restoration (progress.txt, prd.json)                │
│   ├── Resume from checkpoint                                    │
│   └── Learnings captured for future                             │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

**Application:**
- Don't rely on a single defense
- Each layer catches what previous layers missed
- Recovery is part of the system, not an afterthought
- Learn from each incident to strengthen defenses

---

### 7.4 Mental Model: The Assembly Line Inspector

**The Metaphor:**
Factory assembly lines have quality inspectors at each station. They catch defects early before they compound.

```
┌────────────────────────────────────────────────────────────────┐
│                   VERIFICATION AT EVERY STAGE                   │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Stage 1: Plan          → Verify: Plan makes sense?            │
│       ↓                                                         │
│   Stage 2: Code          → Verify: npm run typecheck passes?    │
│       ↓                                                         │
│   Stage 3: Test          → Verify: npm run test passes?         │
│       ↓                                                         │
│   Stage 4: Integration   → Verify: E2E tests pass?              │
│       ↓                                                         │
│   Stage 5: Deploy        → Verify: Health checks pass?          │
│                                                                 │
│   RULE: Never proceed to next stage with verification failure   │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

**Application:**
- Verify at each stage, not just at the end
- Small defects caught early are cheap to fix
- Large defects caught late are expensive to fix
- Acceptance criteria must be verifiable

**Quote from Anthropic:**
> "Claude's tendency to mark features complete without proper testing... did much better at verifying end-to-end once explicitly prompted to use browser automation tools"

---

## 8. Integration Patterns with Combination Matrix

### 8.1 Error Handling Integration Matrix

| Pattern + | Error Handling Enhancement | Implementation |
|-----------|---------------------------|----------------|
| **Ralph + Claude HUD** | Context monitoring | Monitor before overflow |
| **Ralph + Circuit Breaker** | Cost protection | Stop before runaway |
| **CC Mirror + Worker Preamble** | Recursion prevention | Enforce role boundaries |
| **CC Mirror + Retry with Context** | Learning from failures | Pass error info to retry |
| **Marathon Ralph + Linear** | Bug tracking | Auto-create issues on failure |
| **Claude-Flow + Consensus** | Byzantine tolerance | Survive faulty agents |
| **Any Pattern + Git Worktrees** | Isolation | Prevent merge conflicts |

---

### 8.2 Error Recovery by Pattern Level

| Complexity Level | Error Recovery Strategy |
|------------------|------------------------|
| **Level 0-1** (Basic) | Manual recovery, git checkout |
| **Level 2** (Subagents) | Subagent isolation prevents contamination |
| **Level 3-4** (Ralph) | Fresh context per iteration, circuit breakers |
| **Level 5** (CC Mirror) | Worker preambles, centralized coordination |
| **Level 6** (Worktrees) | Complete isolation, merge-time resolution |
| **Level 7** (Gas Town) | Witness agents, human overseer escalation |

---

### 8.3 Combined Error Prevention Stack

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    COMPLETE ERROR PREVENTION STACK                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   LAYER 1: CONFIGURATION                                                     │
│   ├── .claudeignore (sensitive files)                                        │
│   ├── Permission blocklist (dangerous commands)                              │
│   ├── CLAUDE.md (project context)                                            │
│   └── Max iterations configured                                              │
│                                                                              │
│   LAYER 2: MONITORING                                                        │
│   ├── Claude HUD (context usage)                                             │
│   ├── Stuck detection (no commits)                                           │
│   ├── Cost monitoring (API dashboard)                                        │
│   └── Error signature tracking                                               │
│                                                                              │
│   LAYER 3: CIRCUIT BREAKERS                                                  │
│   ├── Iteration limits                                                       │
│   ├── Failure thresholds                                                     │
│   ├── Timeout constraints                                                    │
│   └── Budget caps                                                            │
│                                                                              │
│   LAYER 4: RECOVERY AUTOMATION                                               │
│   ├── Auto-rollback on failure                                               │
│   ├── State preservation (external files)                                    │
│   ├── Resume capability                                                      │
│   └── Bug tracking integration                                               │
│                                                                              │
│   LAYER 5: VERIFICATION                                                      │
│   ├── Exit code checking                                                     │
│   ├── Acceptance criteria validation                                         │
│   ├── Visual verification (Playwright)                                       │
│   └── Integration testing                                                    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 9. Checkpoints for Error Prevention

### Checkpoint 1: Pre-Session Setup

**Where you are:** About to start a Claude Code session.
**What this enables:** Error prevention from the start.

**Verify your state:**
```bash
# Check git status
git status
# Should show: clean working directory or stashed changes

# Check .claudeignore exists
cat .claudeignore 2>/dev/null || echo "WARNING: No .claudeignore"

# Check CLAUDE.md exists
cat CLAUDE.md 2>/dev/null | head -5 || echo "WARNING: No CLAUDE.md"

# Check permissions configured
cat ~/.claude/settings.json 2>/dev/null | jq '.permissions' || echo "No custom permissions"
```

**You should see:**
```
On branch main
nothing to commit, working tree clean
# Contents of .claudeignore
# Contents of CLAUDE.md
# Permissions object
```

**Checklist:**
- [ ] Git working directory clean or stashed?
- [ ] On dedicated branch (not main/master)?
- [ ] .claudeignore excludes sensitive files?
- [ ] .claudeignore excludes build outputs?
- [ ] CLAUDE.md updated with current context?
- [ ] Dangerous commands blocked in permissions?
- [ ] Correct model selected for task complexity?

**If you don't see this:**
- Run: `git stash push -m "pre-claude-backup"`
- Create: `.claudeignore` with standard exclusions
- Create: `CLAUDE.md` with project context

---

### Checkpoint 2: Mid-Session Monitoring

**Where you are:** Active Claude Code session.
**What this enables:** Catch problems before they become critical.

**Warning Signs to Watch:**

| Red Flag | Severity | Action |
|----------|----------|--------|
| Same file edited 5+ times | High | Stop, review, simplify task |
| Multiple grep/glob with no results | Medium | Change search strategy |
| Context >70% | High | Compact immediately |
| Context >90% | Critical | Stop, save state, fresh session |
| Token consumption 3x normal | High | Check for runaway loops |
| Circular edit patterns | Medium | Task may be impossible as specified |
| Claude referencing non-existent files | Critical | Reset session immediately |
| Claude forgetting recent instructions | High | Context rot, compact or reset |
| Subagent depth > 2 | High | Check worker preambles |
| No commits for 3+ iterations | Medium | Check for stuck task |

**Monitoring Commands:**
```bash
# If using Claude HUD
# Watch for: [Opus 4.5] 87% | WARNING: Context nearly full

# Check recent commits
git log --oneline -5

# Check cost (requires API dashboard access)
# Look for unexpected spikes
```

---

### Checkpoint 3: Post-Session Verification

**Where you are:** Claude session completed or paused.
**What this enables:** Verify work before considering it done.

**Verify your state:**
```bash
# Check all changes
git diff

# Run verification suite
npm run typecheck && echo "Typecheck: PASS" || echo "Typecheck: FAIL"
npm test && echo "Tests: PASS" || echo "Tests: FAIL"

# Check for sensitive data
grep -r "sk-" . --include="*.ts" && echo "WARNING: API key found"
grep -r "password=" . --include="*.ts" && echo "WARNING: Password found"
```

**Checklist:**
- [ ] All changes reviewed via `git diff`?
- [ ] Tests passing: `npm test` exit code 0?
- [ ] Type checking passing: `npm run typecheck`?
- [ ] No security issues introduced?
- [ ] No credentials in code or context?
- [ ] Session costs within budget?
- [ ] Learnings captured in progress.txt?
- [ ] PRD status matches reality?
- [ ] No files deleted unexpectedly?

---

### Checkpoint 4: Recovery Readiness

**Where you are:** Need to recover from an error or prepare for potential errors.
**What this enables:** Quick recovery when needed.

**Verify your recovery capability:**
```bash
# Check git history is recoverable
git log --oneline -10

# Check stash contains backups
git stash list

# Check API dashboard accessibility
# (Manual check in browser)

# Verify kill command works
which pkill && echo "pkill available"
```

**Recovery Readiness Checklist:**
- [ ] Backups exist for critical files?
- [ ] Git history is clean and recoverable?
- [ ] Know how to restore from stash?
- [ ] Know how to force kill processes?
- [ ] Know where to check API costs?
- [ ] Have credentials rotation plan?

---

## 10. Troubleshooting Accordions

### Problem: Context Overflow - API Error 400

<details>
<summary>Symptoms and Solutions</summary>

**Symptoms:**
- `API Error 400` messages
- Claude becomes "completely unusable"
- Requests fail to process

**Cause:** Conversation has exceeded maximum context window (200K tokens).

**Solution:**
1. You cannot continue this session
2. Save any uncommitted work: `git stash`
3. Exit Claude Code: `exit`
4. Start fresh session
5. Load essential context only

**Prevention:**
- Never work more than 2-3 hours without fresh context
- Use Ralph pattern for long-running work
- Compact proactively, not reactively
- Use .claudeignore to exclude unnecessary files

</details>

---

### Problem: Infinite Loop - No Progress

<details>
<summary>Symptoms and Solutions</summary>

**Symptoms:**
- Same file edited repeatedly
- No commits for 3+ iterations
- Claude making no visible progress
- Token consumption without output

**Cause:** Task is blocked, broken, or has unsatisfiable criteria.

**Solution:**
```bash
# 1. Interrupt
Ctrl+C

# 2. If that doesn't work
Ctrl+\

# 3. If still running
pkill -9 -f claude

# 4. Check what was accomplished
git log --oneline -5

# 5. Check for stuck task
cat prd.json | jq '.userStories[] | select(.passes == false) | .title'

# 6. Break the loop
echo "PROMISE COMPLETE HERE" >> progress.txt

# 7. Or fix the stuck task by simplifying it
```

**Prevention:**
- Always set MAX_ITERATIONS
- Include timeout: `timeout 3600 ./ralph.sh 50`
- Add stuck detection to your scripts

</details>

---

### Problem: Cost Runaway

<details>
<summary>Symptoms and Solutions</summary>

**Symptoms:**
- API costs far exceed expectations
- Token usage in millions
- Budget blown in hours

**Cause:** No iteration limits, using Opus for everything, runaway loops.

**Solution:**
```bash
# 1. Kill all Claude processes immediately
pkill -f claude

# 2. Check Anthropic dashboard
open https://console.anthropic.com/

# 3. Set hard budget limit in console if not already set

# 4. Review what caused high usage
cat output.txt | tail -100
cat progress.txt | tail -50

# 5. Identify the problem
# - Was it recursive agents?
# - Wrong model selection?
# - Infinite loop?

# 6. Fix the underlying issue before resuming
```

**Prevention:**
- Always set iteration limits
- Use timeouts
- Match model to task complexity (Haiku for simple, Sonnet for medium, Opus for complex)
- Monitor with Claude HUD or API dashboard

</details>

---

### Problem: File Corruption or Deletion

<details>
<summary>Symptoms and Solutions</summary>

**Symptoms:**
- Files contain partial content
- Syntax invalid
- Files deleted unexpectedly
- Entire directories gone

**Cause:** Session interrupted mid-write, destructive command executed.

**Solution:**
```bash
# 1. Stop immediately
Ctrl+C

# 2. Check what changed
git status
git diff

# 3. Discard changes to specific file
git checkout -- path/to/file.ts

# 4. Or revert all changes
git checkout -- .

# 5. If uncommitted work was stashed
git stash pop

# 6. For more drastic recovery
git reset --hard HEAD

# 7. Check file integrity after recovery
cat path/to/file.ts | head -20
```

**Prevention:**
- Commit before long operations
- Use git worktrees for isolation
- Add destructive commands to blocklist
- Never use `--dangerously-skip-permissions` without safeguards

</details>

---

### Problem: Credentials Exposed

<details>
<summary>Symptoms and Solutions</summary>

**Symptoms:**
- API keys visible in conversation
- Passwords in logs
- `.env` contents displayed

**Cause:** No `.claudeignore`, sensitive files readable by Claude.

**Solution:**
1. **IMMEDIATELY** rotate ALL exposed credentials
2. Remove secrets from git history:
   ```bash
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch path/to/secret-file" \
     --prune-empty --tag-name-filter cat -- --all
   ```
3. Add files to .claudeignore
4. Never cat .env in Claude Code

**Prevention:**
```gitignore
# .claudeignore - REQUIRED
.env*
*.pem
*.key
credentials.json
secrets/
.aws/
.ssh/
*.keychain
```

</details>

---

### Problem: Workers Spawning Workers (Recursive Explosion)

<details>
<summary>Symptoms and Solutions</summary>

**Symptoms:**
- Subagent depth exceeds 2-3 levels
- Context usage spikes unexpectedly
- Tasks taking 10x longer than expected
- Runaway API costs

**Cause:** Workers not properly restricted.

**Solution:**
```bash
# 1. Kill all Claude processes
pkill -f claude

# 2. Review what was actually accomplished
git status

# 3. Revert incomplete changes
git checkout -- .

# 4. Restart with proper worker preamble
```

**Prevention - Always use worker preamble:**
```markdown
CONTEXT: You are a WORKER agent, not an orchestrator.

RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report your results with absolute file paths
```

</details>

---

### Problem: Merge Conflicts Between Parallel Agents

<details>
<summary>Symptoms and Solutions</summary>

**Symptoms:**
- Git conflicts at merge time
- File corruption
- Race conditions on shared files
- Work overwritten

**Cause:** Multiple agents editing same files without isolation.

**Solution:**
```bash
# 1. Use git three-way merge
git merge --no-commit branch1
git merge --no-commit branch2

# 2. Resolve conflicts manually
# Or use Claude to help:
claude "Resolve merge conflicts in $(git diff --name-only --diff-filter=U)"

# 3. Complete merge
git commit -m "Merged feature branches"
```

**Prevention:**
```bash
# Use git worktrees for complete isolation
git worktree add ../wt-feature1 feature1-branch
git worktree add ../wt-feature2 feature2-branch

# Each agent works in isolated worktree
# Merge only after both complete
```

</details>

---

### Problem: PRD Status Doesn't Match Reality

<details>
<summary>Symptoms and Solutions</summary>

**Symptoms:**
- Tasks marked `passes: true` but code is broken
- Tasks marked `passes: false` but actually working
- Agent confused about what's left to do

**Cause:** PRD updates not tied to verification.

**Solution:**
```bash
# 1. Run all verification commands
npm test
npm run typecheck

# 2. Reset PRD to match reality
# Mark all as false
cat prd.json | jq '.userStories[] |= .passes = false' > prd.json.tmp
mv prd.json.tmp prd.json

# 3. Re-run verification for each item
# Update PRD based on actual test results
```

**Prevention:**
Require verification in acceptance criteria:
```json
"acceptanceCriteria": [
  "Feature implemented",
  "npm run typecheck passes with exit code 0",
  "npm run test passes with exit code 0"
]
```

</details>

---

### Problem: Tests Pass But Shouldn't

<details>
<summary>Symptoms and Solutions</summary>

**Symptoms:**
- Claude reports tests pass
- But tests are actually broken, not running, or trivially passing
- Exit codes ignored

**Cause:** Claude saw output and assumed success.

**Solution:**
```bash
# 1. Run tests and capture both output and exit code
npm test 2>&1 | tail -20
echo "Exit code: $?"

# 2. Verify test framework exists
npm list jest || npm list vitest || npm list mocha

# 3. Check test file count
find . -name "*.test.*" -o -name "*.spec.*" | wc -l

# 4. Fix test configuration if needed
```

**Prevention:**
Always include exit code verification:
```bash
npm test 2>&1 | tail -20
echo "Exit code: $?"
# Script should fail if exit code != 0
```

</details>

---

### Problem: Rate Limiting

<details>
<summary>Symptoms and Solutions</summary>

**Symptoms:**
- `rate_limit` errors
- API requests rejected
- Agent stuck waiting

**Cause:** Exceeding API rate limits from heavy automation.

**Solution:**
```bash
# 1. Implement exponential backoff
RETRY_DELAY=5
if grep -q "rate_limit" output.txt; then
  DELAY=$((RETRY_DELAY * 2))
  echo "Rate limited, waiting ${DELAY}s..."
  sleep $DELAY
fi

# 2. Always pause between iterations
sleep $RATE_LIMIT_SLEEP
```

**Prevention:**
- Add delays between iterations
- Implement exponential backoff
- Consider API tier upgrade
- Don't run multiple instances 24/7

</details>

---

## 11. Source Attribution and References

### Primary Extraction Sources

| File | Content | Key Errors Documented |
|------|---------|----------------------|
| `extractions/orchestration/028-marathon-ralph.md` | Marathon Ralph full SDLC | Circuit breakers, phase failures, stop hook |
| `extractions/orchestration/024-cc-mirror-complete.md` | CC Mirror orchestration | Worker preambles, recursion prevention, Iron Law |
| `extractions/cross-cutting/003-production-war-stories-synthesis.md` | Production incidents | $47K loop, file deletion, cost horror stories |
| `extractions/cross-cutting/research-edge-cases-expanded.md` | GitHub issues analysis | 4,677+ issues, platform bugs, configuration errors |
| `extractions/deep/failure-modes-extraction.md` | Complete failure catalog | All error categories, recovery playbooks |
| `extractions/orchestration/031-claude-flow-enterprise.md` | Enterprise patterns | Byzantine tolerance, consensus, SONA |

### Community Sources

| Source | Contributor | Key Insight |
|--------|-------------|-------------|
| GitHub Issue #6004 | Community | Compaction death spiral |
| GitHub Issue #16093 | Community | 200GB+ debug log accumulation |
| GitHub Issue #17164 | Community | Home directory deletion |
| GitHub Issue #17190 | Community | Destructive git reset --hard |
| GitHub Issue #17192 | Community | Path-based permission bypass |
| arXiv - Multi-Agent Failures | Research | 14 failure modes, 41.77% spec problems |

### Key Statistics

| Statistic | Source | Implication |
|-----------|--------|-------------|
| 80%+ AI projects fail | Production war stories | Architecture > model capability |
| 4,677 open issues | GitHub tracker | Many edge cases to handle |
| $47,000 recursive loop | Community report | Circuit breakers are essential |
| 17.2x error amplification | arXiv research | Centralized coordination reduces errors |
| 3.2M tokens circular revisions | Community report | Fresh context beats extended sessions |
| 35% security incidents from simple prompts | Security research | Input validation critical |

### Related Synthesis Documents

| Document | Relationship |
|----------|--------------|
| `synthesis/MASTER-PLAYBOOK.md` | Capability progression guide |
| `synthesis/mastery-ralph-complete.md` | Ralph pattern with error handling |
| `synthesis/architecture-complexity-ladder.md` | Level-appropriate error strategies |
| `synthesis/principles-anti-patterns.md` | Anti-patterns to avoid |

---

## Summary: The Golden Rules of Error Prevention

### Rule 1: Fresh Context Beats Extended Sessions

> "When in doubt, start over."

Context rot is inevitable. Fresh context per iteration (Ralph pattern) eliminates accumulated errors.

### Rule 2: External State Beats Internal Memory

> "If it's not in a file, it doesn't exist."

Memory lives in progress.txt, prd.json, and git history - not in the conversation.

### Rule 3: Verification Is Non-Negotiable

> "If you can't test it, don't mark it done."

Always verify with tests, typechecks, and exit codes before considering anything complete.

### Rule 4: Iteration Limits Are Insurance

> "Always set max iterations."

Circuit breakers prevent $47,000 runaway loops.

### Rule 5: Model Matching Saves Money

> "Haiku for lookups, Sonnet for code, Opus for architecture."

Using Opus for file searches is 60x more expensive than necessary.

### Rule 6: Isolation Prevents Chaos

> "Worktrees for parallel agents."

Multiple agents on same files = merge conflict hell.

### Rule 7: Permissions Prevent Disasters

> "Blocklist destructive commands."

Never whitelist `rm -rf`, `sudo`, or `git push --force`.

### Rule 8: Backups Save Careers

> "Git commit often. Stash before experiments."

Every checkpoint is a potential recovery point.

---

## Error Severity Quick Reference

| Severity | Examples | Action Timeframe |
|----------|----------|------------------|
| **CRITICAL** | Data loss, security breach, runaway costs | IMMEDIATE - stop everything |
| **HIGH** | Context overflow, verification failures, infinite loops | Within minutes |
| **MEDIUM** | Rate limits, configuration errors, quality degradation | Within session |
| **LOW** | Cosmetic warnings, minor performance issues | When convenient |

---

## Document Metadata

| Field | Value |
|-------|-------|
| **Document ID** | synthesis/error-taxonomy-recovery.md |
| **Category** | Synthesis |
| **Target Line Count** | 1,500+ |
| **Actual Line Count** | 1,800+ |
| **Created** | 2026-01-19 |
| **Purpose** | Fill critical gap (50% missing failure handling) |
| **Input Sources** | 6 primary extraction documents |
| **Cross-References** | 4 related synthesis documents |
| **Error Categories** | 9 major, 35+ specific |
| **Recovery Patterns** | 6 primary patterns |
| **Mental Models** | 4 frameworks |
| **Checkpoints** | 4 verification stages |
| **Troubleshooting Entries** | 11 common problems |

---

## Tags

`#error-taxonomy` `#recovery` `#failure-modes` `#troubleshooting` `#context-management` `#circuit-breakers` `#security` `#cost-optimization` `#orchestration` `#ralph` `#cc-mirror` `#production` `#diagnostics` `#prevention` `#verification`

---

*Error taxonomy synthesized from production war stories, GitHub issue analysis, community experiences, and orchestration pattern documentation. Compiled 2026-01-19.*

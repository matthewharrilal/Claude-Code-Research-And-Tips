# Claude Code Failure Modes: Complete Catalog

> **Everything that can go wrong, why it happens, and how to recover.**

---

## You Are Here

**Your current state:** Something broke and you need to fix it, OR you want to prevent failures before they happen.

**After this document:** You'll know how to diagnose and recover from any common failure mode in Claude Code workflows.

**How to use this document:**
- **Searching for a specific error?** Use Cmd+F to search for your error message or symptom
- **Browsing by category?** Use the Table of Contents to jump to relevant sections
- **Preventive reading?** Read the Prevention sections to avoid these failures entirely

---

## Table of Contents

1. [Context Window Failures](#1-context-window-failures)
2. [Orchestration Failures](#2-orchestration-failures)
3. [Memory/State Failures](#3-memorystate-failures)
4. [Verification Failures](#4-verification-failures)
5. [Permission/Security Failures](#5-permissionsecurity-failures)
6. [Resource/Cost Failures](#6-resourcecost-failures)
7. [Ralph Loop Failures](#7-ralph-loop-failures)
8. [Multi-Agent Coordination Failures](#8-multi-agent-coordination-failures)
9. [File System Failures](#9-file-system-failures)
10. [Recovery Playbooks](#10-recovery-playbooks)
11. [Failure Detection Checklist](#11-failure-detection-checklist)

---

## 1. Context Window Failures

Context window management is the single most important factor in Claude Code success. These failures account for the majority of quality degradation.

---

### Symptom: Quality Degrades After 30+ Minutes

**What you see:**
- Claude forgets earlier instructions
- Responses become generic or repetitive
- Errors start compounding
- Claude claims it did something it didn't
- CLAUDE.md directives being ignored
- Truncated code outputs (functions cut off mid-definition)

**Root cause:** Context window filled beyond 60-70% capacity. At this point, performance degradation begins.

**Context Level Impact:**
| Level | Quality Impact |
|-------|----------------|
| 0-50% | Full capability |
| 50-70% | Slight degradation possible |
| 70-85% | Noticeable quality loss |
| 85-95% | Significant degradation, instructions forgotten |
| 95%+ | Failure mode - hallucinations, contradictions, amnesia |

**Diagnosis:**
```bash
# If using Claude HUD plugin
# Look for context indicator in status bar

# Check approximate usage by conversation length
# Long conversations (100+ turns) = likely context issues
```

**Recovery:**
1. Save current state to external files immediately
2. Document what you were working on
3. Run `/compact` if you want to try salvaging the session
4. If quality doesn't improve, run `/reset` or start fresh session
5. Load context from saved files

**Prevention:**
- Use Ralph pattern (fresh context each iteration)
- Keep sessions under 30 minutes for complex work
- Use external memory (prd.json, progress.txt)
- Run `/compact` proactively at 60-70% usage
- Monitor context with Claude HUD plugin

**If you skip recovery:** Errors compound exponentially. Each bad output feeds the next iteration, leading to circular revisions and wasted tokens.

---

### Symptom: Claude References Files That Don't Exist

**What you see:**
- Claude claims to have read a file that doesn't exist
- File paths are fabricated or mixed up
- Claude describes contents that don't match the actual file

**Root cause:** Context exhaustion causing hallucinations. The model is filling gaps with training data patterns rather than actual file contents.

**Diagnosis:**
```bash
# Verify the file exists
ls -la /path/to/claimed/file

# Compare Claude's description with actual contents
cat /path/to/file.ts | head -50
```

**Recovery:**
1. Stop the current task immediately
2. Do NOT commit any changes from this session
3. Reset session: `/reset`
4. Re-read the actual files you need
5. Continue with fresh context

**Prevention:**
- Always have Claude read files explicitly before working on them
- Don't rely on "as we discussed" or memory of previous reads
- Use explicit file references in prompts

**If you skip recovery:** Claude will continue building on false assumptions, creating code that references non-existent functions, types, or modules.

---

### Symptom: API Error 400 / Context Limit Exceeded

**What you see:**
- `API Error 400` messages
- Claude becomes "completely unusable"
- Requests fail to process

**Root cause:** Conversation has exceeded maximum context window (200K tokens).

**Diagnosis:**
```bash
# Check conversation history length
# If you've been working for hours without reset, this is likely the cause
```

**Recovery:**
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

**If you skip recovery:** The session is unrecoverable. Any continued attempts will fail with the same error.

---

### Symptom: Compaction Lost Critical Instructions

**What you see:**
- Post-compaction behavior changes
- Specific instructions no longer followed
- Context from early conversation lost
- Edge cases suddenly forgotten

**Root cause:** Compaction is lossy. The model must decide what's "important" without knowing your actual priorities.

**Diagnosis:**
- Compare behavior before and after compaction
- Check if CLAUDE.md directives are still being followed
- Look for missing nuance in responses

**Recovery:**
1. Re-state critical instructions explicitly
2. Reference CLAUDE.md again if it contains the instructions
3. If behavior is significantly degraded, start fresh session

**Prevention:**
- Maintain external state manually (reflection files, progress logs)
- Use explicit instruction files (CLAUDE.md) that survive compaction
- Compact proactively at 60-70% rather than waiting for auto-compact at 95%
- Review behavior immediately after compaction

**If you skip recovery:** Subtle but critical requirements will be missed, leading to code that works but doesn't meet actual specifications.

---

### Symptom: Filling Context with Entire Codebase

**What you see:**
- Claude reads thousands of files
- Context fills immediately
- No room left for actual work
- Simple tasks become impossible

**Root cause:** Over-eager exploration. "Read all files in src/" consumes entire context budget.

**Diagnosis:**
```bash
# Count files that would be read
find src/ -type f | wc -l

# Estimate token count
find src/ -type f -exec cat {} \; | wc -c
# Divide by 4 for rough token estimate
```

**Recovery:**
1. Reset session immediately
2. Be specific about which files to read
3. Use targeted prompts: "Read src/index.ts and src/config.ts"

**Prevention:**
- Use `.claudeignore` aggressively
- Request targeted reads (specific files for specific tasks)
- Use subagents for exploration (isolated context)
- Let Claude search with Glob/Grep rather than loading everything upfront

**.claudeignore example:**
```gitignore
node_modules/
dist/
build/
.next/
.cache/
*.log
coverage/
__pycache__/
*.pyc
.git/
```

**If you skip recovery:** Session is unusable for productive work. All future queries will fail or produce garbage.

---

## 2. Orchestration Failures

Orchestration failures occur when the coordination between agents breaks down, or when agents violate their intended roles.

---

### Symptom: Workers Spawning Workers (Recursive Explosion)

**What you see:**
- Subagent depth exceeds 2-3 levels
- Context usage spikes unexpectedly
- Tasks taking 10x longer than expected
- Runaway API costs
- Agents lose sight of original task

**Root cause:** Workers not properly restricted. A worker agent spawns subagents, which spawn more subagents, creating exponential context explosion.

**Diagnosis:**
```bash
# Check API usage dashboard for unexpected spikes
# Look for nested "Task" tool calls in logs
```

**Recovery:**
1. Kill all Claude processes: `pkill -f claude`
2. Review what was actually accomplished
3. Revert incomplete changes: `git checkout -- .`
4. Restart with proper worker preamble

**Prevention:** Always include the worker preamble pattern:
```markdown
CONTEXT: You are a WORKER agent, not an orchestrator.

RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report your results with absolute file paths
```

**If you skip recovery:** Costs will continue escalating. One documented case hit $47,000 from an 11-day recursive loop.

---

### Symptom: Orchestrator Writing Code Directly

**What you see:**
- Orchestrator gets distracted by implementation details
- Role confusion between planning and execution
- Scope creep within orchestrator context
- Orchestrator context filling with file contents

**Root cause:** Mixing concerns. The orchestrator should think at the coordination level, not get lost in file edits.

**Recovery:**
1. Stop the orchestrator
2. Review what it produced
3. Separate completed work from orchestration artifacts
4. Restart with clear role boundaries

**Prevention:** CC Mirror principle:
```
YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS.
YOU DO NOT EXPLORE CODEBASES.
You are the CONDUCTOR. Your agents play the instruments.
```

**Tool ownership separation:**
- **Orchestrator uses:** TaskCreate, TaskList, TaskGet, TaskUpdate, AskUserQuestion, Task (to spawn workers), Read (references only, 1-2 max)
- **Workers use:** Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch, LSP

**If you skip recovery:** Orchestrator context will fill with implementation details, losing ability to coordinate effectively.

---

### Symptom: Agents Run Indefinitely (No Completion Detection)

**What you see:**
- Agents run for hours without completing
- API budget draining with no visible progress
- No clear stopping point
- Infinite loops consuming tokens

**Root cause:** No explicit completion criteria. Without knowing when to stop, agents have no way to know the task is done.

**Diagnosis:**
```bash
# Check if there's a completion signal defined
grep -r "COMPLETE" scripts/ralph/ || echo "No completion signal found"

# Check iteration count
grep "MAX_ITERATIONS" scripts/ralph/ralph.sh
```

**Recovery:**
1. Interrupt the loop: `Ctrl+C`
2. Force kill if needed: `pkill -9 -f claude`
3. Add completion signal to prompt
4. Restart with proper termination conditions

**Prevention:** Completion promise pattern:
```bash
if grep -q "<promise>COMPLETE</promise>" output.txt; then
  echo "Done!"
  break
fi
```

Or use testable completion criteria:
- All PRD items have `passes: true`
- Tests pass: `npm test` exits 0
- Build succeeds: `npm run build` exits 0

**If you skip recovery:** The loop will run until max iterations, external intervention, or API budget exhaustion.

---

### Symptom: Sequential Tasks When Parallel Is Possible

**What you see:**
- Independent tasks running one at a time
- Total time = sum of all tasks (not max)
- Resources underutilized
- 3x slower than necessary

**Root cause:** Not recognizing parallelism opportunities. Tasks that could run simultaneously are executed sequentially.

**Diagnosis:**
- Review task dependencies
- Identify tasks with no shared file requirements
- Check if agents are waiting for each other unnecessarily

**Recovery:**
1. Map task dependencies
2. Group independent tasks
3. Use git worktrees for file isolation
4. Restart with parallel execution

**Prevention:**
```bash
# Spawn multiple background subagents for independent tasks
for feature in auth payments notifications; do
  git worktree add ../wt-$feature $feature-branch
  (cd ../wt-$feature && ./ralph.sh 20) &
done
wait
```

**If you skip recovery:** You'll spend 3-10x more time than necessary on parallelizable work.

---

## 3. Memory/State Failures

Memory failures occur when the external state management that enables Claude Code's effectiveness breaks down.

---

### Symptom: Progress Lost Between Iterations

**What you see:**
- Each iteration starts from scratch
- Learnings not carried forward
- Same mistakes repeated
- Patterns discovered but forgotten

**Root cause:** No external memory. State exists only in conversation context, which resets each iteration.

**Diagnosis:**
```bash
# Check if progress file exists and has content
cat progress.txt
wc -l progress.txt

# Check if PRD is being updated
cat prd.json | jq '.userStories[] | select(.passes == true)'
```

**Recovery:**
1. Review git history for actual progress
2. Manually document current state
3. Create/update progress.txt with learnings
4. Update prd.json with actual completion status

**Prevention:** The three core files:
1. **progress.txt** - Append-only learning log
2. **prd.json** - Task state with `passes: true/false`
3. **CLAUDE.md** - Project context and conventions

**If you skip recovery:** Each iteration will repeat work already done, wasting tokens and time.

---

### Symptom: progress.txt Being Overwritten (Not Appended)

**What you see:**
- Previous entries disappearing
- Only most recent iteration preserved
- Historical context lost
- Patterns not compounding

**Root cause:** Agent updating instead of appending. The word "append" was not explicit enough in the prompt.

**Diagnosis:**
```bash
# Check file modification history
git log --oneline -10 -- progress.txt

# Look at current content - should have multiple dated entries
cat progress.txt | head -50
```

**Recovery:**
1. Restore from git: `git checkout HEAD~1 -- progress.txt`
2. Add current iteration's learnings manually
3. Update prompt to be explicit about appending

**Prevention:** Use explicit language:
```markdown
APPEND to progress.txt (never update or overwrite previous entries):
```

**Critical rule:** APPEND ONLY. Never edit previous entries.

**If you skip recovery:** All compounding benefits of Ralph pattern are lost. Each iteration operates in isolation.

---

### Symptom: PRD Status Not Matching Reality

**What you see:**
- Tasks marked `passes: true` but code is broken
- Tasks marked `passes: false` but actually working
- Agent confused about what's left to do
- Circular work on "completed" tasks

**Root cause:** PRD updates not tied to verification. Agent marked tasks complete without running tests.

**Diagnosis:**
```bash
# Check actual test status
npm test

# Compare to PRD claims
cat prd.json | jq '.userStories[] | select(.passes == true) | .title'

# Run typecheck
npm run typecheck
echo "Exit code: $?"
```

**Recovery:**
1. Run all verification commands
2. Update PRD to match actual state
3. Add verification to prompt instructions

**Prevention:** Require verification before marking complete:
```json
"acceptanceCriteria": [
  "Feature implemented",
  "npm run typecheck passes",  // <-- ALWAYS
  "npm run test passes"        // <-- ALWAYS
]
```

**If you skip recovery:** Future iterations will skip "completed" tasks that are actually broken.

---

### Symptom: Stale Context Injection

**What you see:**
- Claude using outdated patterns
- References to code that's been refactored
- Conflicts with current state
- progress.txt claims don't match git history

**Root cause:** External memory diverged from actual codebase state.

**Diagnosis:**
```bash
# Compare progress.txt claims to actual commits
git log --oneline -10

# Check for drift
diff <(cat progress.txt | grep "Completed") <(git log --oneline -20)
```

**Recovery:**
1. Re-validate state at iteration start
2. Run tests to verify PRD item status
3. Compare progress.txt claims to actual git history
4. Update external files to match reality

**Prevention:**
- Always run verification at start of iteration
- Use git as source of truth for what's done
- progress.txt is for learnings, not status

**If you skip recovery:** Agent will make decisions based on false premises, leading to conflicts and wasted work.

---

## 4. Verification Failures

Verification failures allow bugs to accumulate and compound, making future work progressively harder.

---

### Symptom: Tests Pass But Shouldn't

**What you see:**
- Claude reports tests pass
- But tests are broken, not running, or trivially passing
- Exit codes ignored
- Test framework not installed
- Tests in wrong directory

**Root cause:** Exit code not verified. Claude saw output and assumed success.

**Diagnosis:**
```bash
# Run tests and capture both output and exit code
npm test 2>&1 | tail -20
echo "Exit code: $?"

# Verify test framework exists
npm list jest || npm list vitest || npm list mocha

# Check test file count
find . -name "*.test.*" -o -name "*.spec.*" | wc -l
```

**Recovery:**
1. Fix test configuration
2. Ensure tests actually run
3. Verify exit code handling
4. Re-run verification

**Prevention:**
```bash
npm test 2>&1 | tail -20
echo "Exit code: $?"
```
Always include exit code verification in scripts.

**If you skip recovery:** Broken code accumulates under the false impression of test coverage.

---

### Symptom: Features Marked Complete Without Testing

**What you see:**
- Tasks marked "done" without verification
- No test output in logs
- Features fail in production
- End-to-end paths broken

**Root cause:** Claude's tendency to optimistically mark features complete. "It compiles" is treated as "it works."

**Quote from Anthropic:**
> "Claude's tendency to mark features complete without proper testing... did much better at verifying end-to-end once explicitly prompted to use browser automation tools"

**Diagnosis:**
```bash
# Check if tests were actually run
grep "PASS\|FAIL" output.txt

# Look for verification in progress.txt
grep "verified\|tested\|confirmed" progress.txt
```

**Recovery:**
1. Un-mark task as complete in prd.json
2. Add explicit verification criteria
3. Re-run with Playwright/browser verification for UI
4. Require test output in completion report

**Prevention:**
```json
"acceptanceCriteria": [
  "Feature implemented",
  "Verify at localhost:3000/feature using Playwright screenshot",
  "npm run test passes with exit code 0"
]
```

**If you skip recovery:** Production bugs discovered by users instead of tests. Reputation and trust damage.

---

### Symptom: Unit Tests Pass But Integration Fails

**What you see:**
- All unit tests green
- But components don't work together
- API endpoints fail when called from frontend
- Database transactions incomplete

**Root cause:** Single-point verification. Unit tests pass in isolation but integrations fail.

**Diagnosis:**
```bash
# Run integration tests specifically
npm run test:integration

# Test actual API endpoints
curl http://localhost:3000/api/endpoint

# Check database state
npm run db:check
```

**Recovery:**
1. Add integration test coverage
2. Test actual user flows
3. Verify database state after operations
4. Add E2E tests for critical paths

**Prevention:** Layered verification:
| Priority | Method | Catches |
|----------|--------|---------|
| 1 | Type check | Interface mismatches |
| 2 | Unit tests | Logic errors |
| 3 | Integration tests | Component interaction bugs |
| 4 | E2E tests | User journey issues |

**If you skip recovery:** Bugs surface only when multiple components interact, making them harder to diagnose.

---

### Symptom: UI Changes Claimed Complete But Visually Broken

**What you see:**
- Code changes look correct
- Tests pass
- But UI is visually wrong
- Layout broken, colors wrong, elements missing

**Root cause:** No browser verification. Claude assumed the code would render correctly.

**Diagnosis:**
```bash
# Take a screenshot
cd ~/.config/amp/skills/dev-browser && npx tsx <<'EOF'
import { connect, waitForPageLoad } from "@/client.js";
const client = await connect();
const page = await client.page("test");
await page.goto("http://localhost:3000/page");
await waitForPageLoad(page);
await page.screenshot({ path: "tmp/screenshot.png" });
await client.disconnect();
EOF

# Manually verify
open tmp/screenshot.png
```

**Recovery:**
1. Add Playwright MCP for UI verification
2. Include screenshot verification in acceptance criteria
3. Re-run with visual confirmation

**Prevention:**
```json
"acceptanceCriteria": [
  "Component renders at /page",
  "Verify layout using Playwright screenshot",
  "Compare to design spec"
]
```

**If you skip recovery:** UI bugs ship to production. Users see broken interfaces.

---

## 5. Permission/Security Failures

Security failures can result in data loss, credential exposure, or system compromise.

---

### Symptom: Catastrophic File Deletion

**What you see:**
- Entire directories deleted
- Home folder wiped
- Production database dropped
- Critical files gone

**Documented incidents:**
- `rm -rf tests/ patches/ plan/ ~/` - Deleted user's entire home folder
- `rmdir /s /q d:\` - Deleted entire D: drive
- Replit deleting production database with 1,200+ executives' data

**Root cause:** `--dangerously-skip-permissions` used without safeguards. No blocklist for destructive commands.

**Diagnosis:**
```bash
# Check what files exist
ls -la

# Look at git history for what was deleted
git status

# Check recent commands in history
history | tail -20
```

**Recovery:**
1. **STOP** - Do not continue the session
2. Check backups immediately
3. For git-tracked files: `git checkout -- .`
4. For untracked files: Check Time Machine / backup
5. For databases: Restore from backup

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

**Never whitelist:**
- `rm -rf`
- `sudo *`
- `git push --force`
- `git reset --hard`
- `find . -delete`

**If you skip recovery:** Data loss is permanent. There is no "undo" for deleted files outside version control.

---

### Symptom: Credentials Exposed in Context

**What you see:**
- API keys visible in conversation
- Passwords in logs
- `.env` contents displayed
- Secrets in git history

**Root cause:** No `.claudeignore`. Sensitive files readable by Claude.

**Diagnosis:**
```bash
# Check if .env was read
grep "sk-" ~/.claude/debug/*.log
grep "password" ~/.claude/debug/*.log

# Check git for exposed secrets
git log -p | grep -i "api_key\|password\|secret"
```

**Recovery:**
1. Rotate ALL exposed credentials immediately
2. Remove secrets from git history: `git filter-branch`
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

**If you skip recovery:** Credentials remain exposed. Potential for unauthorized access to systems.

---

### Symptom: Path Traversal Accessing Sensitive Files

**What you see:**
- Claude accessing files outside project
- Reading ~/.ssh/id_rsa
- Accessing ~/.aws/credentials
- Reading /etc/passwd

**Root cause:** Permission rules have bypass mechanisms. Path traversal not blocked.

**Diagnosis:**
```bash
# Check what files were accessed
grep "Read.*\.ssh\|\.aws\|/etc" ~/.claude/debug/*.log
```

**Recovery:**
1. Stop session immediately
2. Rotate any accessed credentials
3. Add path restrictions to permissions

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

**If you skip recovery:** Sensitive system files may be logged or exposed in Claude's context.

---

### Symptom: Claude Modifying Its Own Instructions

**What you see:**
- CLAUDE.md content changed
- Behavior shifts unexpectedly
- Permission rules modified
- Self-referential manipulation

**Root cause:** CLAUDE.md is writable. Prompt injection or accidental modification can alter agent behavior.

**Diagnosis:**
```bash
# Check git diff for CLAUDE.md changes
git diff CLAUDE.md

# Check file permissions
ls -la CLAUDE.md
```

**Recovery:**
1. Restore CLAUDE.md from git: `git checkout -- CLAUDE.md`
2. Make read-only: `chmod 444 CLAUDE.md`
3. Review any behavioral changes

**Prevention:**
```bash
# Make CLAUDE.md read-only
chmod 444 CLAUDE.md

# Version control all configuration
git add CLAUDE.md && git commit -m "Lock CLAUDE.md"
```

**If you skip recovery:** Agent behavior may drift in unpredictable ways based on self-modifications.

---

### Symptom: Memory Injection Attacks

**What you see:**
- Agent develops false beliefs
- Defends incorrect information
- Security policies ignored
- Vendor relationships fabricated

**Root cause:** Poisoned data sources. Indirect prompt injection via external content.

**Source:** Lakera AI research demonstrated agents developing "persistent false beliefs" about security policies when fed poisoned data.

**Diagnosis:**
- Check external data sources for tampering
- Review agent's claims against known facts
- Look for unexpected behavioral changes

**Recovery:**
1. Reset session completely
2. Verify all external data sources
3. Remove compromised memory/context
4. Restart with clean state

**Prevention:**
- Validate external data before injection
- Use trusted sources only
- Implement data integrity checks
- Regular audits of agent beliefs

**If you skip recovery:** Research found "a single compromised agent poisoned 87% of downstream decision-making within 4 hours."

---

## 6. Resource/Cost Failures

Cost failures can result in unexpected bills of hundreds or thousands of dollars.

---

### Symptom: $500+ Bill for Simple Feature

**What you see:**
- API costs far exceed expectations
- Token usage in millions
- Budget blown in hours
- "Expensive as hell" outcomes

**Root cause:** No iteration limits, using Opus for everything, runaway loops.

**Documented incidents:**
- $47,000 from 11-day recursive loop
- 3.2 million tokens on circular revisions
- $500+ bills on simple features

**Diagnosis:**
```bash
# Check Anthropic dashboard for usage
# Look at token counts per session
# Identify cost spikes
```

**Recovery:**
1. Kill all Claude processes: `pkill -f claude`
2. Check Anthropic dashboard immediately
3. Set hard budget limits
4. Review what caused high usage

**Prevention:**
```bash
# Always set iteration limits
MAX_ITERATIONS=${1:-25}

# Use timeouts
timeout 3600 ./ralph.sh 50  # 1 hour max
```

**Model cost awareness:**
| Model | Input | Output | Relative Cost |
|-------|-------|--------|---------------|
| Haiku | $0.25/1M | $1.25/1M | 1x |
| Sonnet | $3/1M | $15/1M | 12x |
| Opus | $15/1M | $75/1M | 60x |

**If you skip recovery:** Costs continue escalating. Some users have reported $500-2000/day burns.

---

### Symptom: Rate Limit Errors

**What you see:**
- `rate_limit` errors
- API requests rejected
- Agent stuck waiting
- Workflow blocked

**Root cause:** Exceeding API rate limits. Heavy automation, account sharing, or 24/7 operation.

**Source:** Anthropic introduced rate limits in August 2025 targeting "people running multiple instances, automating them to run 24/7."

**Diagnosis:**
```bash
# Check output for rate limit messages
grep "rate_limit" output.txt

# Look at request timing
```

**Recovery:**
1. Implement exponential backoff
2. Add delays between iterations
3. Consider API tier upgrade

**Prevention:**
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

**If you skip recovery:** Continued rate limit errors. Workflow becomes unpredictable.

---

### Symptom: Tool Overhead Consuming Budget

**What you see:**
- Simple tasks costing more than expected
- Tool calls adding hidden tokens
- Search costs accumulating
- Context bloat from tool outputs

**Root cause:** Hidden tool overhead. Each tool call has token costs beyond the visible input/output.

**Tool overhead costs:**
- Bash tool: +245 input tokens per call
- Text editor: +700 input tokens typical
- Web search: $10 per 1,000 searches
- Code execution: $0.05 per session-hour

**Diagnosis:**
```bash
# Count tool calls in session
grep "Tool:" output.txt | wc -l

# Estimate hidden costs
```

**Recovery:**
1. Reduce tool call frequency
2. Batch operations where possible
3. Cache results for repeatable calls
4. Cap search iterations

**Prevention:**
> "I cap search iterations per turn to stop runaway bills... That bias has kept my Claude Code bills boring—and boring is profitable."

```bash
# Limit searches per iteration
MAX_SEARCHES=5
```

**If you skip recovery:** "If a loop calls web search 100 times, that's $1 in search alone—before tokens."

---

### Symptom: Opus Used for Simple Lookups

**What you see:**
- $15/M tokens for file searches
- Complex model doing simple tasks
- Massive bills for routine work
- No task/model matching

**Root cause:** Not matching model to task complexity. Using premium model for everything.

**Diagnosis:**
- Review what tasks are running
- Check if simple tasks could use cheaper models
- Calculate cost per task type

**Recovery:**
1. Implement model tiering
2. Use Haiku for simple tasks
3. Reserve Opus for complex reasoning

**Prevention:**
| Task Type | Model | Cost |
|-----------|-------|------|
| File lookup, grep | Haiku | $0.25/M |
| Implementation, testing | Sonnet | $3/M |
| Architecture, complex reasoning | Opus | $15/M |

**If you skip recovery:** 60x cost premium for tasks that don't benefit from it.

---

## 7. Ralph Loop Failures

Ralph-specific failures that undermine the autonomous iteration pattern.

---

### Symptom: Completion Promise Never Found

**What you see:**
- Loop runs to max iterations every time
- Tasks are actually complete but loop continues
- Massive token consumption
- Never terminates naturally

**Root cause:** Completion promise either not outputted by Claude or not detected by script.

**Diagnosis:**
```bash
# Check if promise appears in output
grep "COMPLETE" output.txt

# Check script detection pattern
grep "promise" ralph.sh
```

**Recovery:**
1. Verify task is actually complete
2. Check if promise format matches script expectation
3. Manually add signal: `echo "PROMISE COMPLETE HERE" >> output.txt`
4. Break loop

**Prevention:**
- Ensure completion promise format is exact: `<promise>COMPLETE</promise>`
- Test detection pattern before running overnight
- Include timeout as safety: `timeout 3600 ./ralph.sh 50`

**If you skip recovery:** Loop burns tokens until max iterations with no productive work.

---

### Symptom: PRD Items Too Complex for Single Iteration

**What you see:**
- Same task worked on for multiple iterations
- Context overflow mid-task
- Quality degradation
- Partial implementations that break

**Root cause:** Task doesn't fit in one context window. Violates the 2-3 sentence rule.

**Diagnosis:**
```bash
# Check task description length
cat prd.json | jq '.userStories[] | select(.passes == false) | .description | length'

# Look at acceptance criteria count
cat prd.json | jq '.userStories[] | select(.passes == false) | .acceptanceCriteria | length'
```

**Recovery:**
1. Split large tasks into smaller ones
2. Each sub-task should be 2-3 sentences
3. 100-500 lines of code change per task
4. 1-3 files modified per task

**Prevention:**

**BAD:**
```json
{
  "title": "Build entire auth system",
  "description": "Add login, signup, password reset, OAuth, 2FA, session management..."
}
```

**GOOD:**
```json
{
  "title": "Add users table migration",
  "description": "Create users table with email, password_hash, created_at columns"
}
```

**If you skip recovery:** Task will never complete. Each iteration starts fresh and can't finish.

---

### Symptom: Stuck Loop (Same Commit for 3+ Iterations)

**What you see:**
- No new commits for multiple iterations
- Same task being worked on repeatedly
- Agent making no visible progress
- Token consumption without output

**Root cause:** Task is blocked, broken, or has unsatisfiable criteria.

**Diagnosis:**
```bash
# Check recent commits
git log --oneline -5

# Check what's being worked on
cat prd.json | jq '.userStories[] | select(.passes == false) | .title'

# Look at progress.txt for errors
tail -50 progress.txt
```

**Recovery:**
1. Set `passes: false` on problematic story
2. Add notes field with context about what's blocking
3. Reduce acceptance criteria scope
4. Consider manual intervention to unblock

**Stuck detection script:**
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

**If you skip recovery:** Loop will continue burning tokens without progress.

---

### Symptom: Interactive Prompts Blocking Script

**What you see:**
- Script hangs indefinitely
- Waiting for user input
- npm/yarn prompts not answered
- Database migrations paused

**Root cause:** Commands expecting interactive input in non-interactive context.

**Diagnosis:**
```bash
# Check what process is waiting
ps aux | grep -E "npm|yarn|node"

# Look at recent output
tail output.txt
```

**Recovery:**
1. Kill the waiting process
2. Add `--yes` flags or pipe input
3. Restart with non-interactive alternatives

**Prevention:**
```bash
# Auto-answer yes to prompts
echo -e "\n\n\n" | npm run db:generate

# Or use flags
npm install --yes
yarn add --non-interactive
```

**If you skip recovery:** Script will hang indefinitely, wasting time and potentially blocking CI.

---

## 8. Multi-Agent Coordination Failures

Failures specific to running multiple agents in parallel.

---

### Symptom: Merge Conflicts Between Parallel Agents

**What you see:**
- Git conflicts at merge time
- File corruption
- Race conditions on shared files
- Work overwritten

**Root cause:** Multiple agents editing same files without isolation.

**Source:** "If both agents work on the same file, all hell breaks loose. They'll overwrite each other's edits and manipulate the other agent's context."

**Diagnosis:**
```bash
# Check for conflicts
git status

# See which files were modified by multiple branches
git log --all --format='%H' -- path/to/file | xargs git branch --contains
```

**Recovery:**
1. Use git three-way merge
2. Manual conflict resolution
3. Pick one version and reapply other changes

**Prevention:**
- Use git worktrees for complete isolation
- Assign directory ownership per agent
- Use branch-based parallel work

```bash
# Worktree isolation
git worktree add ../wt-feature1 feature1-branch
git worktree add ../wt-feature2 feature2-branch
```

**If you skip recovery:** Merged code will be corrupted or missing changes from one branch.

---

### Symptom: Deadlock Between Agents

**What you see:**
- Agents refuse to act
- Each assumes another agent should lead
- No progress despite multiple agents running
- Circular waiting

**Root cause:** No clear coordination. Agents waiting for each other without explicit handoff.

**Diagnosis:**
- Check each agent's status
- Look for "waiting for" patterns
- Review task dependencies

**Recovery:**
1. Explicitly assign tasks to specific agents
2. Break circular dependencies
3. Use TaskUpdate to claim ownership
4. Restart with clear assignments

**Prevention:**
- Use `addBlocks` / `addBlockedBy` in task management
- Enforce serial execution for dependent tasks
- Clear ownership assignment per task

**If you skip recovery:** System stays deadlocked until intervention.

---

### Symptom: Error Amplification (17x in Independent Agents)

**What you see:**
- Small errors multiply across agents
- Downstream decisions based on bad data
- 4.4x to 17.2x error amplification
- Quality collapse

**Root cause:** Independent agents amplify errors because they don't share context for error correction.

**Source:** Research shows "independent agents amplify errors 17.2x, while centralized coordination contains this to 4.4x."

**Diagnosis:**
- Check error rates in each agent
- Trace error propagation
- Compare centralized vs distributed outcomes

**Recovery:**
1. Centralize coordination
2. Add error checking at agent boundaries
3. Implement validation before cross-agent handoffs

**Prevention:**
- Use hub-and-spoke (CC Mirror) over fully decentralized
- Add verification at every handoff point
- Implement "circuit breakers" for error detection

**If you skip recovery:** Errors compound until system output is unusable.

---

### Symptom: Agent Communication Via Context Pollution

**What you see:**
- Agents trying to pass information through shared conversation
- Context filling with inter-agent messages
- Information not actually reaching other agents
- Confusion about state

**Root cause:** Subagent contexts are isolated. Information must be explicitly passed through files or return values.

**Diagnosis:**
- Check if agents are trying to "talk" to each other
- Look for context pollution patterns
- Verify file-based handoffs are working

**Recovery:**
1. Use file-based handoffs: `handoff-agent1-to-agent2.json`
2. Git-based handoffs: commit history visible to future agents
3. Explicit return values from subagents

**Prevention:**
- Never rely on context for inter-agent communication
- Always use files as communication medium
- Document handoff format clearly

**If you skip recovery:** Agents will continue trying to communicate through ineffective channels.

---

## 9. File System Failures

Failures related to file operations and the Infinite Loop bugs.

---

### Symptom: Infinite Loop in Compaction

**What you see:**
- Claude stuck attempting to "compact" conversations
- No progress on any task
- System basically unusable
- Cannot complete multi-step tasks

**Root cause:** Claude Code v1.0.83 bug causing infinite compaction attempts.

**Source:** GitHub Issue #6004

**Diagnosis:**
- Check if output contains repeated "compacting" messages
- Look for no progress despite running

**Recovery:**
1. Force kill: `pkill -9 -f claude`
2. Update Claude Code to latest version
3. Restart with fresh session

**Prevention:**
- Keep Claude Code updated
- Report bugs to GitHub issues
- Have backup workflow for critical work

**If you skip recovery:** Session is unrecoverable without killing the process.

---

### Symptom: 200GB+ Disk Usage from Debug Logs

**What you see:**
- Disk space filling rapidly
- `.claude/debug` directory massive
- Individual files 20GB+
- System slowdown

**Root cause:** Performance monitoring infinite recursive logging loop.

**Source:** GitHub Issue #16093 - "42GB from just 481 conversations over 7 days"

**Diagnosis:**
```bash
# Check debug directory size
du -sh ~/.claude/debug/

# Find large files
find ~/.claude/debug -size +1G
```

**Recovery:**
1. Delete debug logs: `rm -rf ~/.claude/debug/*`
2. Update Claude Code
3. Monitor disk usage

**Prevention:**
- Periodic cleanup of debug directory
- Monitor disk space
- Keep Claude Code updated

**If you skip recovery:** Disk fills completely, system becomes unusable.

---

### Symptom: Infinite Loop on Invalid Image File

**What you see:**
- Claude stuck on 400 errors
- Retry loop with no limit
- All command processing blocked
- File with .png extension but not actual image

**Root cause:** Claude Code attempting to read file with image extension containing non-image data, entering unrecoverable retry loop.

**Source:** GitHub Issue #7122

**Diagnosis:**
```bash
# Check file type
file path/to/file.png

# Should show image type, not text or data
```

**Recovery:**
1. Force kill Claude
2. Rename or fix the malformed file
3. Restart session

**Prevention:**
- Validate file contents match extensions
- Don't rename non-images to .png/.jpg
- Add problematic files to .claudeignore

**If you skip recovery:** Session remains blocked until killed.

---

## 10. Recovery Playbooks

Step-by-step recovery procedures for common failure scenarios.

---

### Playbook: Context Overflow Recovery

**Situation:** Quality has degraded, Claude is forgetting things, errors compounding.

**Steps:**
```bash
# 1. Save current work state
git add -A && git stash

# 2. Document what you were working on (for yourself)
echo "Working on: [describe task]" > /tmp/recovery-notes.txt

# 3. Try compaction first
/compact

# 4. If quality doesn't improve, reset
/reset

# 5. If still bad, exit completely
exit

# 6. Start fresh session
claude

# 7. Restore context from files
cat CLAUDE.md  # Claude will see this automatically
cat progress.txt  # Explicit read if needed

# 8. Resume work
git stash pop
```

---

### Playbook: Infinite Loop Recovery

**Situation:** Ralph or other loop running indefinitely without progress.

**Steps:**
```bash
# 1. Graceful interrupt
Ctrl+C

# 2. If that doesn't work, harder interrupt
Ctrl+\

# 3. If still running, force kill
pkill -9 -f claude

# 4. Check what was accomplished
git log --oneline -5
cat prd.json | jq '.userStories[] | select(.passes == true)'

# 5. Check for stuck task
cat prd.json | jq '.userStories[] | select(.passes == false)'

# 6. Break the loop manually
echo "PROMISE COMPLETE HERE" >> progress.txt

# 7. Or fix the stuck task
# Edit prd.json to simplify the task
```

---

### Playbook: Cost Runaway Recovery

**Situation:** API costs spiking unexpectedly.

**Steps:**
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

---

### Playbook: File Corruption Recovery

**Situation:** Claude has damaged files or made unwanted changes.

**Steps:**
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

---

### Playbook: Authentication Issues Recovery

**Situation:** API authentication failing.

**Steps:**
```bash
# 1. Re-authenticate
claude auth logout
claude auth login

# 2. If that fails, clear credentials
rm -rf ~/.claude/credentials

# 3. Try API key instead
export ANTHROPIC_API_KEY="sk-ant-..."

# 4. Verify authentication
claude "Say hello"

# 5. Check for account issues
# - Rate limits
# - Billing problems
# - API key expiration
```

---

### Playbook: Multi-Agent Chaos Recovery

**Situation:** Parallel agents have created conflicts.

**Steps:**
```bash
# 1. Kill all agent processes
pkill -f claude

# 2. Check status of each worktree/branch
git worktree list
for wt in $(git worktree list | awk '{print $1}'); do
  echo "=== $wt ==="
  cd $wt && git status
done

# 3. Identify conflicts
git merge --no-commit branch1
git merge --no-commit branch2

# 4. Resolve conflicts manually
# - Choose which version to keep
# - Merge carefully

# 5. Clean up worktrees
git worktree remove ../wt-feature1

# 6. Restart with better isolation
```

---

## 11. Failure Detection Checklist

Use this checklist during and after sessions to catch failures early.

---

### Pre-Session Checklist

- [ ] Git working directory clean or stashed?
- [ ] On dedicated branch (not main/master)?
- [ ] .claudeignore excludes sensitive files?
- [ ] .claudeignore excludes build outputs?
- [ ] CLAUDE.md updated with current context?
- [ ] Dangerous commands blocked in permissions?
- [ ] Correct model selected for task complexity?
- [ ] Context monitoring active (Claude HUD)?
- [ ] Max iterations set for loops?
- [ ] Budget limits configured?

---

### During Session Red Flags

| Red Flag | Severity | Action |
|----------|----------|--------|
| Same file edited 5+ times | High | Stop, review, simplify task |
| Multiple grep/glob with no results | Medium | Change search strategy |
| Context >70% without task completion | High | Compact or prepare fresh session |
| Context >90% | Critical | Stop immediately, save state |
| Token consumption 3x normal | High | Check for runaway loops |
| Circular edit patterns | Medium | Task may be impossible as specified |
| Claude referencing non-existent files | Critical | Reset session immediately |
| Claude forgetting recent instructions | High | Context rot, compact or reset |
| Subagent depth > 2 | High | Check worker preambles |
| No commits for 3+ iterations | Medium | Check for stuck task |

---

### Post-Session Verification

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

### Recovery Readiness

- [ ] Backups exist for critical files?
- [ ] Git history is clean and recoverable?
- [ ] Know how to restore from stash?
- [ ] Know how to force kill processes?
- [ ] Know where to check API costs?
- [ ] Have credentials rotation plan?

---

## Summary: Failure Mode Categories

| Category | Primary Cause | Key Prevention |
|----------|---------------|----------------|
| **Context Window** | Token accumulation | Fresh context per iteration (Ralph) |
| **Orchestration** | Role confusion | Strict orchestrator/worker separation |
| **Memory/State** | In-context only | External file-based state |
| **Verification** | Blind trust | Layered testing requirements |
| **Security** | Weak permissions | Blocklists, .claudeignore, read-only configs |
| **Cost** | No limits | Iteration caps, model matching, budgets |
| **Ralph Loop** | Wrong sizing | 2-3 sentence tasks, max iterations |
| **Multi-Agent** | No isolation | Git worktrees, directory ownership |
| **File System** | Software bugs | Keep updated, monitor disk |

---

## The Golden Rules of Failure Prevention

1. **Fresh context beats extended sessions.** When in doubt, start over.

2. **External state beats internal memory.** If it's not in a file, it doesn't exist.

3. **Verification is non-negotiable.** If you can't test it, don't mark it done.

4. **Iteration limits are insurance.** Always set max iterations.

5. **Model matching saves money.** Haiku for lookups, Sonnet for code, Opus for architecture.

6. **Isolation prevents chaos.** Worktrees for parallel agents.

7. **Permissions prevent disasters.** Blocklist destructive commands.

8. **Backups save careers.** Git commit often. Stash before experiments.

---

## Resources

### Key Issue Trackers
- github.com/anthropics/claude-code/issues - Official bug reports
- GitHub Issues #6004, #6559, #7122, #16093, #17164 - Referenced in this doc

### Monitoring Tools
- Claude HUD: Context monitoring plugin
- rpai: tmux agent manager
- Anthropic Dashboard: API usage and costs

### Recovery References
- synthesis/principles-anti-patterns.md - Full anti-pattern analysis
- extractions/cross-cutting/research-production-war-stories.md - Production incidents

---

## Tags

`#failure-modes` `#recovery` `#troubleshooting` `#context-management` `#security` `#cost-optimization` `#orchestration` `#ralph-loop` `#multi-agent` `#production` `#diagnostics`

---

*Failure modes catalog synthesized from production war stories, anti-pattern analysis, and community experiences. Compiled 2026-01-10.*

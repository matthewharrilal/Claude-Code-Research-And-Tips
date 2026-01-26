---
**DEPRECATED** (2026-01-18)

This content has been superseded by D-FINAL synthesis.

**Replacement:** See D-FINAL-mental-models Part 5 for current content.
**Reason:** Content fully covered in D-FINAL with production validation.
**Original preserved below for reference.**

---

# Anti-Pattern Analysis for Claude Code Workflows

> **You Are Here:** This is the "what NOT to do" guide - a comprehensive catalog of failure modes organized by category. Read this when something goes wrong to diagnose the issue, or before starting a complex project to avoid known pitfalls. Companion to `principles-core.md` (the WHY) - this doc shows the consequences of violating those principles.

**Synthesis Date:** 2026-01-09
**Source:** Comprehensive extraction analysis from 30+ community sources, GitHub issues, and production experiences
**Purpose:** Identify what does not work and why, enabling practitioners to avoid common pitfalls

---

## Table of Contents

1. [Context Anti-Patterns](#context-anti-patterns)
2. [Orchestration Anti-Patterns](#orchestration-anti-patterns)
3. [Task Design Anti-Patterns](#task-design-anti-patterns)
4. [Prompting Anti-Patterns](#prompting-anti-patterns)
5. [Configuration Anti-Patterns](#configuration-anti-patterns)
6. [Multi-Agent Anti-Patterns](#multi-agent-anti-patterns)
7. [Verification Anti-Patterns](#verification-anti-patterns)
8. [Memory & State Anti-Patterns](#memory--state-anti-patterns)
9. [Tool Usage Anti-Patterns](#tool-usage-anti-patterns)
10. [Cost Anti-Patterns](#cost-anti-patterns)
11. [Security Anti-Patterns](#security-anti-patterns)
12. [Ralph Loop Anti-Patterns](#ralph-loop-anti-patterns)
13. [Misconceptions & Debunked Claims](#misconceptions--debunked-claims)
14. [When NOT to Use Claude Code](#when-not-to-use-claude-code)
15. [Anti-Pattern Detection Checklist](#anti-pattern-detection-checklist)
16. [Recovery Strategies](#recovery-strategies)

---

## Context Anti-Patterns

### Long Single-Thread Conversations

**What happens:** Context fills, response quality progressively degrades, instructions get ignored, Claude "forgets" recent work or hallucinates file contents.

**Why it fails:** Context rot accumulates. As conversations grow, earlier instructions and context get compressed or lost. The model struggles to maintain coherence across hundreds of turns.

**Warning signs:**
- Repetitive or contradictory responses
- CLAUDE.md directives being ignored
- Claude referencing files that don't exist
- Truncated code outputs (functions cut off mid-definition)
- Claude "forgets" work done 30 minutes ago in same session

**The fix:**
- Use Ralph pattern: fresh context per iteration
- Persist state externally (files, git history, progress.txt)
- Start new sessions for unrelated tasks
- Use `/compact` proactively at 60-70% context usage

**Source:** @ryancarson, @mattpocockuk (Ralph loop rationale)

---

### Trusting Compaction Blindly

**What happens:** Important nuance lost during summarization. Critical instructions or edge cases get dropped.

**Why it fails:** Compaction is lossy. The model must decide what's "important" without knowing your actual priorities. Subtle but critical details often get compressed away.

**Warning signs:**
- Post-compaction behavior changes
- Specific instructions no longer followed
- Context from early conversation lost

**The fix:**
- Maintain external state manually (reflection files, progress logs)
- Use explicit instruction files (CLAUDE.md) that survive compaction
- Compact proactively at 60-70% rather than waiting for auto-compact at 95%
- Review behavior after compaction

**Source:** Edge cases research, community reports

---

### Reading Entire Codebase

**What happens:** Context fills immediately with thousands of tokens, leaving no room for actual work.

**Why it fails:** Context window (~200K tokens) cannot hold a full codebase. Filling it with code leaves no room for reasoning or output.

**Bad prompt:**
```
"Read all the files in src/ to understand the architecture"
```

**Good prompt:**
```
"Read src/index.ts and src/config.ts to understand the entry point"
```

**The fix:**
- Use .claudeignore aggressively
- Request targeted reads (specific files for specific tasks)
- Use subagents for exploration (isolated context)
- Let Claude search with Glob/Grep rather than loading everything upfront

**Source:** Edge cases research

---

### Including Build Outputs in Context

**What happens:** node_modules/, dist/, .next/, coverage/ consume massive context budget uselessly.

**Why it fails:** Generated files provide no value for reasoning but consume precious tokens.

**The fix:**
```gitignore
# .claudeignore
node_modules/
dist/
build/
.next/
.cache/
*.log
coverage/
```

**Source:** Configuration best practices

### Checkpoint: Context Anti-Patterns
**You should now understand:**
- [ ] The 4 major context anti-patterns and their symptoms
- [ ] Why compaction should be proactive (60-70%) not reactive (95%)
- [ ] The importance of .claudeignore for build outputs
- [ ] When to use subagents vs. targeted file reads

**If unclear:** See `principles-core.md` Principle 1 (Context Is Primary Constraint) for the theory.

---

## Orchestration Anti-Patterns

### Workers Spawning Workers (Recursive Explosion)

**What happens:** A worker agent spawns subagents, which spawn more subagents, creating exponential context explosion and potential infinite loops.

**Why it fails:** No coordination between nested subagents. Context explodes geometrically. Workers lose sight of the original task.

**Warning signs:**
- Subagent depth >2 levels
- Context usage spiking unexpectedly
- Tasks taking 10x longer than expected
- Runaway API costs

**The fix:** Worker preamble pattern:
```markdown
CONTEXT: You are a WORKER agent, not an orchestrator.

RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report your results with absolute file paths
```

**Source:** @nummanali (CC Mirror skill), orchestration patterns

---

### Orchestrator Using Tools Directly

**What happens:** Orchestrator gets distracted by implementation details. Role confusion between planning and execution.

**Why it fails:** Mixing concerns leads to scope creep. Orchestrator should think at the coordination level, not get lost in file edits.

**The CC Mirror principle:**
```
YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS.
YOU DO NOT EXPLORE CODEBASES.
You are the CONDUCTOR. Your agents play the instruments.
```

**Orchestrator uses:**
- TaskCreate, TaskList, TaskGet, TaskUpdate
- AskUserQuestion
- Task (to spawn workers)
- Read (reference files only, 1-2 max)

**Workers use:**
- Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch, LSP

**Source:** @nummanali (CC Mirror)

---

### No Completion Detection

**What happens:** Agents run indefinitely without knowing when to stop. Infinite loops consuming API budget.

**Why it fails:** Without explicit completion criteria, agents have no way to know the task is done.

**The fix:** Completion promise pattern:
```bash
if grep -q "PROMISE COMPLETE HERE" output.txt; then
  break
fi
```

Or use testable completion criteria:
- All PRD items have `passes: true`
- Tests pass: `npm test` exits 0
- Build succeeds: `npm run build` exits 0

**Source:** Ralph pattern, @geoffreyhuntley

---

### Sequential When Parallel Is Possible

**What happens:** Tasks that could run in parallel are executed sequentially, wasting time.

**Why it fails:** Underutilizing available parallelism.

**The fix:**
- Spawn multiple background subagents for independent tasks
- Use git worktrees for parallel feature branches
- Identify task dependencies; parallelize where no dependencies exist

**Source:** @mollycantillon (Panopticon), @0xSero (Orchestra)

### Checkpoint: Orchestration Anti-Patterns
**You should now understand:**
- [ ] Why workers must NEVER spawn subagents (prevents recursion)
- [ ] Why orchestrators must NOT use implementation tools
- [ ] The completion promise pattern for loop termination
- [ ] When to parallelize vs. serialize tasks

**If unclear:** See `architecture-composition-rules.md` for valid orchestration patterns.

---

## Task Design Anti-Patterns

### Tasks Too Large (Context Collapse)

**What happens:** Scope creep, context exhaustion, incomplete work, degraded quality mid-task.

**Why it fails:** Tasks exceeding single context window capacity cannot be completed coherently.

**Bad task:**
```
"Build the entire authentication system"
```

**Good task:**
```
"Implement the login endpoint with:
1. Email/password validation
2. JWT token generation
3. Rate limiting (5 attempts/minute)"
```

**Sizing heuristics:**
- ~100-500 lines of code change
- ~1-3 files modified
- ~30-60 minutes equivalent human time
- Clear, testable success criteria

**Source:** @arvidkahl, Ralph pattern, @mattpocockuk

---

### Vague Acceptance Criteria

**What happens:** Claude produces wrong outputs because it doesn't know what "done" looks like.

**Why it fails:** Ambiguity invites interpretation. Claude's interpretation may not match yours.

**Bad criteria:**
```
"Make it work"
"Fix the bug"
"Clean up the code"
```

**Good criteria:**
```json
{
  "delete_video_shows_confirmation": {
    "description": "Delete video shows confirmation dialog before deleting",
    "acceptance": "User clicks delete, modal appears with 'Confirm' and 'Cancel', clicking 'Cancel' preserves video"
  }
}
```

**The fix:**
- Explicit, testable acceptance criteria
- Include expected behavior, not just the change
- Use PRD format with `passes: false/true`

**Source:** @ryancarson, Ralph pattern

---

### Tasks Too Small (Overhead Exceeds Value)

**What happens:** More time spent spawning agents than doing useful work.

**Why it fails:** Agent startup, context loading, and coordination overhead outweighs trivial task value.

**Too small:**
```
"Add a comment to line 42"
"Rename variable x to count"
```

**Just right:**
```
"Implement the User model with email, password hash, and created_at fields"
```

**Source:** Task decomposition research

---

### Dependent Tasks Without Explicit Ordering

**What happens:** Agent B starts before Agent A finishes, causing conflicts or failures.

**Why it fails:** No dependency graph means race conditions.

**The fix:**
- Use `addBlocks` / `addBlockedBy` in task management
- Or enforce serial execution for dependent tasks
- Or use handoff files between sequential tasks

**Source:** @nummanali (CC Mirror task management)

### Checkpoint: Task Design Anti-Patterns
**You should now understand:**
- [ ] The ~100-500 LOC / 1-3 files / 30-60 min sizing heuristics
- [ ] Why acceptance criteria must be testable, not vague
- [ ] When task overhead exceeds value (tasks too small)
- [ ] How to use blockedBy for dependent tasks

**If unclear:** See `mastery-ralph-complete.md` for PRD and task design best practices.

---

## Prompting Anti-Patterns

### Vague Instructions

**What happens:** Claude makes assumptions that don't match your intent.

**Why it fails:** Ambiguity invites interpretation. Models fill gaps with training data patterns, which may not match your codebase.

**Bad:**
```
"Fix the bug"
"Make it better"
```

**Good:**
```
"Fix the null pointer exception on line 42 of src/auth/login.ts where user.email is accessed before validation"
```

**Source:** Edge cases research

---

### Implicit Context Assumptions

**What happens:** Claude uses wrong patterns because it doesn't know your conventions.

**Why it fails:** Without explicit context, Claude defaults to common patterns which may conflict with your codebase.

**Bad:**
```
"Use the same pattern as before"
```

**Good:**
```
"Use the repository pattern from src/data/UserRepository.ts"
```

**The fix:**
- Explicit references to existing code
- Comprehensive CLAUDE.md with patterns and conventions
- Include example files in prompts

**Source:** Edge cases research

---

### Fighting Claude's Patterns

**What happens:** Endless iterations trying to force Claude into unfamiliar patterns.

**Why it fails:** Some patterns are deeply ingrained. Fighting them wastes tokens and produces suboptimal code.

**The fix:**
- Accept Claude's idiomatic suggestions
- Focus on outcomes, not style
- If a pattern is critical, provide explicit examples
- Add patterns to CLAUDE.md for consistency

**Source:** Edge cases research

---

### Monolithic Prompts

**What happens:** Claude gets overwhelmed, forgets parts of the request, produces inconsistent output.

**Why it fails:** Attention dilution across too many requirements.

**Bad:**
```
"Build user auth with login, signup, password reset, OAuth, 2FA, session management, and admin roles"
```

**Good:** Break into sequential, focused requests with clear handoffs between each.

**Source:** Task decomposition patterns

---

## Configuration Anti-Patterns

### --dangerously-skip-permissions Everywhere

**What happens:** Claude can execute ANY command, including destructive ones.

**Why it fails:** No safety net. One wrong rm -rf and your work is gone.

**Dangerous:**
```bash
alias claude='claude --dangerously-skip-permissions'
```

**The fix:**
- Use granular permission whitelisting
- Whitelist only known-safe commands
- Keep dangerous commands (rm -rf, git push --force) blocked

```json
{
  "permissions": {
    "commands": {
      "git status": "allow-always",
      "npm test": "allow-always",
      "npm run build": "allow-always"
    },
    "blockedPatterns": [
      "rm -rf",
      "sudo",
      "git push --force",
      "git reset --hard"
    ]
  }
}
```

**Source:** Security incidents research

---

### No .claudeignore

**What happens:** Secrets exposed, build outputs waste context, security risk.

**Why it fails:** All files become readable, including .env, credentials, and massive generated directories.

**Minimum .claudeignore:**
```gitignore
.env*
*.pem
*.key
credentials.json
secrets/
node_modules/
dist/
build/
.next/
coverage/
*.log
```

**Source:** Security best practices

---

### CLAUDE.md Too Long

**What happens:** Instructions consume context budget, leaving less for actual work.

**Why it fails:** Every token in CLAUDE.md is loaded every conversation turn.

**Bad:** 2000+ token CLAUDE.md with verbose explanations.

**The fix:**
- Keep under 500 tokens
- Essential information only
- Use file imports (@docs/architecture.md) for detailed references

**Source:** Configuration optimization

---

### CLAUDE.md Too Generic

**What happens:** Claude makes wrong assumptions every session. Same mistakes repeated.

**Why it fails:** Generic boilerplate provides no project-specific guidance.

**Include in CLAUDE.md:**
- Actual development commands
- Your specific patterns and conventions
- Known issues and workarounds
- Architecture decisions

**Source:** Philosophy extractions

---

### Overly Restrictive Permissions

**What happens:** Permission prompts every 10 seconds. Workflow constantly interrupted.

**Why it fails:** Undermines autonomous operation. Human becomes bottleneck.

**The fix:**
- Whitelist common safe commands
- Use `/permissions` to review and adjust
- Test permission config before long autonomous runs

**Source:** Workflow optimization

---

## Multi-Agent Anti-Patterns

### Parallel Agents Without Isolation

**What happens:** Merge conflicts, file corruption, race conditions.

**Why it fails:** Multiple agents editing same files simultaneously creates chaos.

**The fix:**
- Branch isolation: each agent works on its own git branch
- Directory ownership: each agent owns specific directories
- Git worktrees for full isolation
- File locking for shared resources

**Quote from @mattpocockuk:**
> "Parallel agents cause merge conflicts—use serial"

**Source:** Multi-agent patterns research

---

### No Conflict Resolution Strategy

**What happens:** Conflicting edits discovered only at merge time, requiring manual intervention.

**Why it fails:** Without a strategy, conflicts accumulate and become harder to resolve.

**The fix:**
- Detect conflicts early (optimistic locking)
- Use three-way merge with agent context
- Escalate unresolvable conflicts to human
- Prefer directory ownership over shared files

**Source:** Multi-agent patterns research

---

### Agent Communication Via Context Pollution

**What happens:** Agents try to pass information through shared conversation, polluting context.

**Why it fails:** Subagent contexts are isolated. Information must be explicitly passed through files or return values.

**The fix:**
- File-based handoffs: write to handoff-agent1-to-agent2.json
- Git-based handoffs: commit history visible to future agents
- Explicit return values from subagents

**Source:** @mollycantillon (Panopticon)

---

### Missing Worker Preamble

**What happens:** Workers attempt orchestration, spawn subagents, derail from their task.

**Why it fails:** Without explicit constraints, workers adopt orchestrator behavior.

**Required preamble:**
```markdown
CONTEXT: You are a WORKER agent, not an orchestrator.

RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash)
- Do NOT spawn sub-agents
- Do NOT manage tasks
- Report results with absolute file paths
```

**Source:** @nummanali (CC Mirror)

---

### No Agent Health Monitoring

**What happens:** Stuck agents, infinite loops, runaway costs go unnoticed.

**Why it fails:** No visibility into agent state or progress.

**The fix:**
- Use Claude HUD plugin for context monitoring
- Use rpai for tmux multi-agent management
- Implement heartbeat logging
- Set maximum iteration limits

**Source:** @jarrodwatts (Claude HUD), @radoslav11 (rpai)

---

## Verification Anti-Patterns

### No Verification At All

**What happens:** Subtle bugs ship to production. Claude's output accepted without testing.

**Why it fails:** LLMs make plausible-looking mistakes. Without verification, these become production bugs.

**The fix:**
- Type checking: `npm run typecheck`
- Unit tests: `npm test`
- Lint: `npm run lint`
- Manual review of diffs before commit

**Source:** @mattpocockuk (11 tips), edge cases research

---

### Tests Pass But Shouldn't

**What happens:** Claude reports tests pass, but tests are broken, not running, or trivially passing.

**Why it fails:** Exit codes ignored, test framework not installed, tests in wrong directory.

**Detection:**
```bash
npm test 2>&1 | tail -20
echo "Exit code: $?"
```

**The fix:**
- Always verify test output manually after Claude reports success
- Include exit code verification in scripts
- Review test coverage, not just pass/fail

**Source:** Edge cases research

---

### Marking Complete Without Testing

**What happens:** Features marked "done" without end-to-end verification.

**Why it fails:** Claude's tendency to optimistically mark features complete.

**Anthropic observation:**
> "Claude's tendency to mark features complete without proper testing... did much better at verifying end-to-end once explicitly prompted to use browser automation tools"

**The fix:**
- Require explicit test results in completion report
- Use Playwright MCP for UI verification
- Include verification steps in every task definition

**Source:** @weswinder (Opus + Playwright)

---

### Single-Point Verification

**What happens:** Only unit tests run. Integration and E2E issues missed.

**Why it fails:** Unit tests pass in isolation but integrations fail.

**The fix:**
Layered verification:
1. Type check (catches interface mismatches)
2. Unit tests (catches logic errors)
3. Integration tests (catches component interaction bugs)
4. E2E tests (catches user journey issues)

**Source:** Verification loop standards

---

## Memory & State Anti-Patterns

### State In Conversation Only

**What happens:** Session ends, all context lost. Next session starts from scratch.

**Why it fails:** No external persistence. Work must be rediscovered.

**The fix:**
- Git commits as memory (each iteration commits)
- progress.txt as append-only learning log
- PRD with `passes: true/false` status
- Handoff files for inter-agent communication

**Source:** Ralph pattern, @geoffreyhuntley

---

### Trusting In-Context Memory

**What happens:** Claude "forgets" or misremembers earlier conversation content.

**Why it fails:** Long contexts degrade recall. Compression artifacts introduce errors.

**The fix:**
- External files as source of truth
- Re-read files rather than relying on memory
- Use explicit file references, not "as we discussed"

**Source:** Context management patterns

---

### No Checkpointing

**What happens:** Crash or failure loses all progress. Must restart from beginning.

**Why it fails:** No recovery points.

**The fix:**
```bash
# Save checkpoint every N iterations
git stash create > checkpoint-ref
git diff --cached > staged.diff
cp progress.txt checkpoint/
```

**Source:** Failure recovery patterns

---

## Tool Usage Anti-Patterns

### Bash for File Reading

**What happens:** `cat`, `head`, `tail`, `grep` used instead of Read/Grep tools.

**Why it fails:** Specialized tools are optimized, sandboxed, and provide better error handling.

**Bad:**
```bash
cat src/app.ts
grep "function" src/*.ts
```

**Good:**
- Use Read tool for file contents
- Use Grep tool for searches
- Use Glob tool for file finding

**Source:** Tool usage best practices

---

### Spawning Subagents for Simple Lookups

**What happens:** Overhead of subagent exceeds task value.

**Why it fails:** Subagent spawn has context loading cost. For simple lookups, use tools directly.

**Use tools directly for:**
- File reads
- Simple grep searches
- File existence checks

**Use subagents for:**
- Multi-step investigations
- Tasks requiring isolated context
- Parallel exploration

**Source:** Anthropic subagent guidance

---

### Wrong Model for Task

**What happens:** Using Opus for simple file lookups (expensive), or Haiku for architecture decisions (insufficient).

**Why it fails:** Model mismatch wastes money or produces poor results.

**Model selection guide:**
| Model | Use Case | Cost |
|-------|----------|------|
| Haiku | Simple lookups, file fetching, transforms | Cheapest |
| Sonnet | Implementation, test generation, patterns | Medium |
| Opus | Architecture, complex reasoning, ambiguous tasks | Expensive |

**Opus costs 60x more than Haiku. Match model to task.**

**Source:** Cost optimization research

---

## Cost Anti-Patterns

### No Iteration Limits

**What happens:** Runaway loops consume unlimited API budget. Bills hit hundreds of dollars.

**Why it fails:** Without limits, loops run until external intervention.

**The fix:**
```bash
MAX_ITERATIONS=25
timeout 3600 ./ralph.sh 50  # 1 hour max
```

**Source:** Ralph pattern, cost management

---

### Opus for Everything

**What happens:** Massive API bills. $500+ for tasks that could cost $20.

**Why it fails:** Using premium model for routine tasks.

**The fix:**
- Use Haiku for exploration and simple tasks
- Use Sonnet for implementation
- Reserve Opus for complex reasoning only

**Source:** Cost optimization, @steve_yegge (model selection)

---

### No Cost Tracking

**What happens:** Budget overruns discovered only when bill arrives.

**Why it fails:** No real-time visibility into spend.

**The fix:**
- Monitor Anthropic dashboard
- Implement token logging
- Set hard budget limits
- Track cost per agent/task

**Source:** Cost tracking research

---

### Redundant Context Loading

**What happens:** Same files read repeatedly across iterations. Tokens wasted.

**Why it fails:** No caching strategy.

**The fix:**
- Cache expensive analysis results
- Re-use summarizations across sessions
- Store context in external files for re-loading

**Source:** Cost optimization

---

## Security Anti-Patterns

### .env Files in Context

**What happens:** API keys, passwords, tokens leak into conversation history.

**Why it fails:** Credentials become part of context, potentially logged or exposed.

**The fix:**
- Never `cat .env` in Claude Code
- Add to .claudeignore
- Use environment variables, not file reads

**Source:** Security incidents research

---

### Whitelisting Dangerous Commands

**Commands to NEVER whitelist:**
```bash
# Destructive file operations
rm -rf
find . -delete

# Git destruction
git push --force
git reset --hard
git clean -fd

# System modification
sudo *
chmod -R 777

# Remote code execution
curl | bash
wget -O- | sh
```

**Source:** Security best practices

---

### Path Traversal Not Blocked

**What happens:** Claude accesses files outside project directory.

**Why it fails:** Permission rules have bypass mechanisms (GitHub issue #17192).

**The fix:**
```json
{
  "permissions": {
    "paths": {
      "deny": ["../**", "/etc/**", "~/.ssh/**", "~/.aws/**"]
    }
  }
}
```

**Source:** GitHub issues, security research

---

### Claude Modifying Its Own Instructions

**What happens:** Prompt injection or accidental CLAUDE.md modification changes behavior.

**Why it fails:** Self-referential attacks can alter agent behavior.

**The fix:**
- Make CLAUDE.md read-only: `chmod 444 CLAUDE.md`
- Version control all configuration files
- Review diffs before committing

**Source:** Security research

---

## Ralph Loop Anti-Patterns

### Completion Promise Never Found

**What happens:** Loop runs indefinitely. Consumes massive tokens. Never terminates.

**Why it fails:** Task designed without achievable completion condition.

**The fix:**
- Ensure completion promise is actually achievable
- Include timeout: `timeout 3600 ./ralph.sh 50`
- Set maximum iterations: `MAX_ITERATIONS=25`

**Source:** Ralph pattern edge cases

---

### PRD Items Too Complex

**What happens:** Single PRD item cannot be completed in one context window.

**Why it fails:** Violates single-context-window completion principle.

**The fix:**
- Each PRD item completable in 30-60 minutes equivalent human time
- ~100-500 lines of code change per item
- Clear, testable acceptance criteria

**Source:** @ryancarson (Ralph implementation)

---

### No External Memory

**What happens:** Each iteration loses learnings from previous iterations.

**Why it fails:** Fresh context per iteration is feature AND bug.

**Required external memory:**
- progress.txt: Append-only learnings log
- prd.json: Task status tracking
- Git commits: Full history visible to each iteration

**Source:** Ralph pattern

---

### Stale Context Injection

**What happens:** Injected progress.txt becomes out of sync with actual code state.

**Why it fails:** External memory diverges from reality.

**The fix:**
- Re-validate state at iteration start
- Run tests to verify PRD item status
- Compare progress.txt claims to actual git history

**Source:** Context management

---

## Misconceptions & Debunked Claims

### "Just Let It Run Overnight"

**Reality:** Without proper Ralph loop setup, Claude will:
- Stop at first uncertainty
- Consume massive tokens on infinite loops
- Produce inconsistent results without context management

**Correct approach:** Use file-based state (Ralph pattern) with explicit completion promises.

---

### "Claude Understands Your Whole Codebase"

**Reality:** Claude only sees what's in context window (~200K tokens, ~100-150K of code).

**Impact:** Large codebases need selective context loading.

**The fix:** Use .claudeignore, targeted reads, summarization.

---

### "Opus Is Always Better"

**Reality:**
- Opus costs 60x more than Haiku
- For simple tasks, Haiku/Sonnet are faster AND sufficient
- Opus shines only for complex reasoning

**Correct approach:** Match model to task complexity.

---

### "MCP Servers Are Plug and Play"

**Reality:**
- Many have version compatibility issues
- Configuration often requires debugging
- Some don't work with latest Claude Code versions

**Correct approach:** Test MCP servers in isolation before integration.

---

### "Premium Subscription Has No Limits"

**Reality:** All tiers have usage limits that reset periodically. Heavy use ($500+/month) often better on API directly.

---

### "/init Auto-Generates Good CLAUDE.md"

**Reality:** Often produces generic content. Better to write manually with specific project knowledge.

---

## When NOT to Use Claude Code

### Real-Time Systems
- Latency-critical code
- Low-level performance optimization
- Embedded systems with tight constraints

### Security-Critical Code
- Cryptographic implementations
- Authentication core logic
- Payment processing
- Healthcare/HIPAA systems

**Reason:** AI can introduce subtle vulnerabilities. These systems need human expert review.

### Highly Novel Domains
- Cutting-edge research implementations
- Domain-specific algorithms with limited training data
- Languages/frameworks with minimal online presence

### Complex Stateful Debugging
- Race conditions in distributed systems
- Memory corruption bugs
- Hardware-dependent issues

### Red Flags That Indicate Wrong Tool
1. Repeated failures on same task (5+ attempts)
2. Escalating costs without progress
3. Quality degradation mid-session
4. Context constantly full despite compaction
5. Human review finding many bugs in Claude output

---

## Anti-Pattern Detection Checklist

### Pre-Session Checklist
- [ ] Git working directory clean or stashed?
- [ ] On dedicated branch (not main/master)?
- [ ] .claudeignore excludes sensitive files and build outputs?
- [ ] CLAUDE.md updated with current project context?
- [ ] Safe commands whitelisted?
- [ ] Correct model selected for task complexity?
- [ ] Context monitoring active (Claude HUD)?

### During Session
- [ ] Context usage under 70%?
- [ ] Claude following CLAUDE.md conventions?
- [ ] Outputs verified with tests/typechecks?
- [ ] No infinite loop patterns detected?
- [ ] Changes reviewable via `git diff`?
- [ ] Subagent depth < 3 levels?
- [ ] Task completion achievable in current context?

### Post-Session Checklist
- [ ] All changes reviewed before commit?
- [ ] Tests passing?
- [ ] Type checking passing?
- [ ] No security issues introduced?
- [ ] No credentials in code/context?
- [ ] Session costs within budget?
- [ ] Learnings captured for future sessions?

### Red Flag Detection
- [ ] Same file edited 5+ times without progress? (Verification loop)
- [ ] Multiple grep/glob calls with no results? (Exploration loop)
- [ ] Context >90% without task completion? (Context collapse imminent)
- [ ] Token consumption rate 3x normal? (Runaway agent)
- [ ] Circular edit patterns? (Logic error)

---

## Recovery Strategies

### From Context Overflow
```bash
# Compact immediately
/compact

# If severely degraded
/reset

# Start focused session
claude "Focus only on src/auth/ - implement OAuth flow"
```

### From File Corruption
```bash
# Discard changes to specific file
git checkout -- path/to/file.ts

# Recovery from stash
git stash pop

# Hard reset (CAREFUL)
git reset --hard HEAD
```

### From Infinite Loops
```bash
# Graceful interrupt
Ctrl+C

# Harder interrupt
Ctrl+\

# Force kill
pkill -9 -f claude

# Break Ralph loop
echo "PROMISE COMPLETE HERE" >> progress.txt
```

### From Cost Runaway
1. Kill all Claude processes: `pkill -f claude`
2. Check Anthropic dashboard for usage
3. Set hard budget limits in console
4. Review what caused high usage

### From Authentication Issues
```bash
# Re-authenticate
claude auth logout
claude auth login

# Clear credentials
rm -rf ~/.claude/credentials

# Use API key instead
export ANTHROPIC_API_KEY="sk-ant-..."
```

---

## Summary: Core Anti-Pattern Categories

| Category | Root Cause | Prevention |
|----------|------------|------------|
| **Context** | Growing conversations | Fresh context per iteration (Ralph) |
| **Orchestration** | Role confusion | Strict orchestrator/worker separation |
| **Task Design** | Wrong sizing | 30-60 min atomic tasks |
| **Prompting** | Ambiguity | Explicit, testable criteria |
| **Configuration** | Missing safeguards | Proper .claudeignore, permissions |
| **Multi-Agent** | No isolation | Branch/directory ownership |
| **Verification** | Blind trust | Layered testing requirements |
| **Memory** | In-context only | External file-based state |
| **Tools** | Wrong tool for job | Match tool to task |
| **Cost** | No limits | Iteration caps, model matching |
| **Security** | Weak permissions | Blocklists, read-only configs |

---

## Tags

`#anti-patterns` `#failures` `#gotchas` `#warnings` `#context-rot` `#orchestration` `#task-design` `#prompting` `#configuration` `#multi-agent` `#verification` `#memory` `#cost` `#security` `#ralph-loop` `#recovery`

---

**Synthesis Agent:** Claude Opus 4.5
**Sources:** 30+ extraction files from community research, GitHub issues, production experiences
**Purpose:** Enable practitioners to avoid common pitfalls through comprehensive failure mode documentation

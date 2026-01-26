# Boris Cherny's Complete 13-Point Workflow

> **You Are Here:** This is the canonical workflow from Boris Cherny, the creator of Claude Code. If you want to understand how the tool was designed to be used, start here. This document forms the foundation that other patterns (Ralph, CC Mirror, Gas Town) build upon. For multi-agent orchestration, see the D-FINAL documents. For context management details, see `synthesis/technical-context-management-advanced.md`.

---
## D-FINAL Integration
**Validates invariants:** Model 1 (Context-First), Model 2 (External State), Model 3 (Fresh Context), Model 4 (Verification), Model 5 (Parallelization), Model 7 (Atomic Tasks), Model 8 (Model Tiering), Model 9 (Learning Compound), Model 10 (Simplicity)
**Cross-references:** Part 3 Universal Truths (Boris as primary evidence), Part 4 Practitioner Evolution (Level 1 baseline), Anti-Pattern 4 (Framework Enchantment correction)
**Journey link:** journey-mental-models.md, journey-implementation.md
**Last updated:** 2026-01-18 (Phase 2B)
---

> **Creator of Claude Code, Staff Engineer at Anthropic**
>
> "I'm Boris and I created Claude Code. My setup might be surprisingly vanilla!"

---

## Overview: The Creator's Mental Model

Boris Cherny treats Claude Code not as a tool you use, but as **capacity you schedule**. His workflow is built on distributed cognition: 10-15 concurrent Claude sessions across terminal, browser, and mobile, each handling separate workflows like independent workers.

**Key insight:** "A wrong fast answer is slower than a right slow answer."

This inverts typical cost-per-token thinking toward **cost-per-reliable-outcome**.

---

## The Complete 13-Point System

### 1. Fresh Context Start

**Why It Matters:**
Fresh context windows eliminate accumulated errors, hallucinations, and "context rot" that builds up in extended sessions. Boris prefers many short sessions over one long session because each fresh context operates at peak capability.

**How to Implement:**

```bash
# Starting fresh
claude

# Or from web
# Navigate to claude.ai/code and start new conversation

# Check context health mid-session
# Green = OK, Yellow = caution, Red = danger
```

**Common Mistakes:**
- Running one session for hours/days hoping to maintain continuity
- Not recognizing quality degradation signals (repetition, contradictions)
- Trying to "teach" within a single session rather than encoding in CLAUDE.md

**Integration with Other Steps:**
- Fresh contexts read CLAUDE.md (Step 2) on startup
- Each parallel session (Step 6) is its own fresh context
- Session Closure (Step 13) leads to fresh context for next task

**Quality Thresholds:**
- 0-50% context usage: Full quality
- 50-70%: Monitor closely
- 70-85%: Significant degradation likely
- 85%+: Finish task and restart

---

### 2. CLAUDE.md Foundation

**Why It Matters:**
CLAUDE.md is **institutional memory** that compounds over time. Every mistake corrected in CLAUDE.md prevents the same mistake across all future sessions for all team members. This is the "simple thing" Anthropic shipped instead of vector databases or semantic memory.

**How to Implement:**

```bash
# Location: git root (case-sensitive!)
/project/CLAUDE.md

# Check file exists and is tracked
ls -la $(git rev-parse --show-toplevel)/CLAUDE.md
git ls-files | grep -i claude

# Keep it short: < 2500 tokens (~10KB)
wc -c CLAUDE.md
```

**Contents (Boris's Structure):**
```markdown
# CLAUDE.md

## Build Commands
- `npm run build` - Production build
- `npm run test` - Run all tests
- `npm run typecheck` - TypeScript verification

## Code Style
- Prefer `function` keyword over arrow functions
- Explicit return type annotations for top-level functions
- Avoid nested ternary operators

## Common Gotchas
- [Mistake observed] → [Correct approach]
- [Another mistake] → [Fix]

## PR Template
- Include test coverage
- Update docs if API changes
```

**Common Mistakes:**
- Bloating CLAUDE.md with implementation details (keep it focused)
- Individual CLAUDE.md files instead of shared team file
- Not updating after mistakes (breaks the compounding loop)
- Wrong filename case (`claude.md` won't work, must be `CLAUDE.md`)

**Integration with Other Steps:**
- Read on every Fresh Context Start (Step 1)
- Updated during Error Recovery (Step 11)
- Verified during Session Closure (Step 13)

**Team Enforcement:**
```yaml
# .github/workflows/claude-md-check.yml
name: CLAUDE.md Check
on: pull_request
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Check CLAUDE.md updated
        run: |
          if git diff --name-only origin/main | grep -q "src/"; then
            if ! git diff --name-only origin/main | grep -q "CLAUDE.md"; then
              echo "::warning::Consider updating CLAUDE.md with learnings"
            fi
          fi
```

---

### 3. Task Scoping

**Why It Matters:**
Well-scoped tasks prevent Claude from making "40 changes you didn't want." Boris's workflow: define the exact deliverable before any code execution. Task scoping is the foundation for Plan Mode (Step 8).

**How to Implement:**

```
Good scope: "Add dark mode toggle to settings page"
Bad scope: "Make the app better"

Good scope: "Fix authentication timeout bug in login flow"
Bad scope: "Fix bugs"

Good scope: "Refactor UserService to use dependency injection"
Bad scope: "Clean up the code"
```

**Task Scoping Template:**
```
TASK: [One sentence describing deliverable]
SUCCESS CRITERIA: [How to verify completion]
CONSTRAINTS: [Files to touch, patterns to follow]
OUT OF SCOPE: [What NOT to change]
```

**Common Mistakes:**
- Scopes too large (PR should be <500 lines ideally)
- Missing success criteria (no way to verify completion)
- Not specifying constraints (Claude may "improve" unrelated code)
- Scope creep mid-session

**Integration with Other Steps:**
- Scoped task feeds into Plan Mode (Step 4)
- Verification (Step 8) checks against scope
- Commit Discipline (Step 12) packages scoped work

---

### 4. Incremental Verification

**Why It Matters:**
Boris's highest-impact recommendation: verification loops **2-3x output quality**. Without feedback loops, Claude operates blind. With them, Claude iterates until success.

> "Probably the most important thing to get great results out of Claude Code: give Claude a way to verify its work."

**How to Implement:**

```bash
# Add verification commands to CLAUDE.md
## Verification Requirements
- Always run: npm run typecheck
- Always run: npm run test
- For UI changes: verify with Chrome extension

# Hook-based verification (automatic)
# .claude/settings.json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "hooks": [{
        "type": "command",
        "command": "npm run typecheck && npm run test"
      }]
    }]
  }
}
```

**Verification Methods by Domain:**

| Domain | Verification Tool | When to Use |
|--------|------------------|-------------|
| TypeScript/JS | `npm run typecheck` | Every code change |
| Tests | `npm run test` | After feature implementation |
| UI/Web | Chrome extension | Visual changes |
| Mobile | iOS/Android simulators | Mobile features |
| API | curl/httpie scripts | Backend endpoints |
| Build | `npm run build` | Before commit |

**Common Mistakes:**
- Skipping verification "to save time" (costs more in correction)
- Generic bash tests for UI (domain-specific verification required)
- No verification in hooks (relies on Claude remembering)
- Only verifying at the end (should verify incrementally)

**Integration with Other Steps:**
- Hooks (Step 7) automate verification
- Subagent `verify-app` (Step 6) handles complex verification
- Commit Discipline (Step 12) requires passing verification

---

### 5. External State

**Why It Matters:**
Claude cannot remember across sessions. All persistent state must be **externalized**—to files, git, or databases. Boris's principle: external state > internal memory.

**How to Implement:**

```
Externalized State Locations:

1. CLAUDE.md - Project knowledge, conventions, gotchas
2. TODO.md - Session handoff, work in progress
3. Git commits - Implementation decisions
4. .claude/commands/ - Reusable workflows
5. .claude/agents/ - Specialized behaviors
6. .claude/settings.json - Configuration
```

**Session Handoff Pattern:**
```markdown
# TODO.md (checked into git)

## Current State
- [x] Auth service refactored
- [ ] Tests for auth service (IN PROGRESS)
- [ ] Update API documentation

## Context for Next Session
- Using dependency injection pattern from CLAUDE.md
- Tests failing on line 45 - timeout issue
- See commit abc123 for implementation decisions
```

**Common Mistakes:**
- Expecting Claude to "remember" from previous sessions
- Not documenting decisions that inform future work
- Keeping state only in chat history (lost on context switch)
- Over-relying on `/compact` to preserve knowledge

**Integration with Other Steps:**
- CLAUDE.md (Step 2) is primary external state
- Session Closure (Step 13) updates external state
- Fresh Context (Step 1) reads external state on startup

---

### 6. Subagent Spawning

**Why It Matters:**
Boris uses **specialized subagents** rather than one generalist. Each subagent has optimized context for its task: code-simplifier knows cleanup, verify-app knows testing, build-validator knows compilation. This is "modular roles over one big agent."

**How to Implement:**

**Directory Structure:**
```
.claude/
├── agents/
│   ├── code-simplifier.md    # Post-PR cleanup
│   ├── verify-app.md         # End-to-end testing
│   ├── build-validator.md    # Build verification
│   ├── code-architect.md     # Design reviews
│   └── oncall-guide.md       # Production troubleshooting
```

**Installing code-simplifier:**
```bash
claude plugin install code-simplifier
```

**code-simplifier System Prompt:**
```markdown
You are an expert code simplification specialist focused on enhancing
code clarity, consistency, and maintainability while preserving exact
functionality.

**Preserve Functionality:** Never change what the code does - only how
it does it.

**Apply Project Standards:**
- Use ES modules with proper import sorting and extensions
- Prefer function keyword over arrow functions
- Use explicit return type annotations for top-level functions
- Follow proper React component patterns with explicit Props types
- Use proper error handling patterns (avoid try/catch when possible)

**Enhance Clarity:**
- Reducing unnecessary complexity and nesting
- Eliminating redundant code and abstractions
- Improving readability through clear variable and function names
- IMPORTANT: Avoid nested ternary operators
- Choose clarity over brevity

**Focus Scope:** Only refine code that has been recently modified.
```

**verify-app Subagent Pattern:**
```markdown
# verify-app.md

You verify application functionality using the project's standard
verification commands.

## Process
1. Run the app using standard commands
2. Check key user flows
3. Report any failures with exact error output
4. Provide reproduction steps for any issues found

## Tools Available
- Bash (for running commands)
- Read (for checking logs/output)

## Output Format
- PASS: [Feature] - works as expected
- FAIL: [Feature] - [Error message] - [Reproduction steps]
```

**Common Mistakes:**
- One monolithic agent trying to do everything
- Subagent prompts that are too vague
- Not giving subagents access to necessary tools
- Spawning subagents for simple tasks (overhead)

**Integration with Other Steps:**
- Subagents complement Slash Commands (Step 7)—commands for mechanical ops, agents for cognitive work
- verify-app integrates with Verification (Step 4)
- code-simplifier runs before Commit Discipline (Step 12)

---

### Checkpoint: Core Workflow
**You should now understand:**
- [ ] Fresh Context principle (why many short sessions beat one long session)
- [ ] CLAUDE.md as institutional memory (< 2500 tokens)
- [ ] Task scoping template (TASK, SUCCESS CRITERIA, CONSTRAINTS, OUT OF SCOPE)
- [ ] Verification loops (2-3x output quality improvement)
- [ ] External state locations (CLAUDE.md, TODO.md, .claude/commands/)
- [ ] Subagent spawning for specialized tasks

**If unclear:** Start with CLAUDE.md setup and verification loops - these are the highest-impact practices.

---

### 7. Context Budget Awareness

**Why It Matters:**
Context windows are finite. Boris keeps CLAUDE.md under 2500 tokens because every token of context costs reasoning capacity. Bloated context = degraded performance.

**How to Implement:**

**Token Budget Guidelines:**
```
CLAUDE.md: < 2500 tokens (~10KB)
Task description: < 500 tokens
Code snippets in prompt: Only what's needed
Total context aim: < 50% for optimal quality
```

**Monitoring Context:**
```bash
# Check CLAUDE.md size
wc -w CLAUDE.md  # Aim for < 500 words
wc -c CLAUDE.md  # Aim for < 10KB

# In-session: Watch for context indicators
# Green = OK, Yellow = caution, Red = critical
```

**Context Optimization Tactics:**
```
1. Keep CLAUDE.md focused on rules, not explanations
2. Use file paths instead of pasting entire files
3. Let Claude read files it needs rather than front-loading
4. Use /compact when context grows too large
5. Prefer fresh sessions over extended ones
```

**Common Mistakes:**
- Massive CLAUDE.md files (diminishing returns > 3000 tokens)
- Pasting entire codebases into prompts
- Not monitoring context growth during sessions
- Ignoring yellow/red context warnings

**Integration with Other Steps:**
- CLAUDE.md (Step 2) must respect context budget
- Fresh Context (Step 1) resets context budget
- Session Closure (Step 13) triggered by context budget limits

---

### 8. Verification Loops

**Why It Matters:**
This is Boris's most important recommendation. Verification loops transform Claude from a one-shot generator into an iterative improver. The loop continues until success criteria are met.

> "Claude tests every single change I land to claude.ai/code using the Claude Chrome extension. It opens a browser, tests the UI, and iterates until the code works and the UX feels good."

**How to Implement:**

**Basic Verification Loop:**
```
┌─────────────────────────────────┐
│  1. Generate/Modify Code        │
└───────────────┬─────────────────┘
                │
                ▼
┌─────────────────────────────────┐
│  2. Run Verification            │
│     - typecheck                 │
│     - tests                     │
│     - visual (Chrome/sim)       │
└───────────────┬─────────────────┘
                │
                ▼
        ┌───────┴───────┐
        │  Passes?      │
        └───────┬───────┘
           NO   │   YES
           │    │    │
           ▼    │    ▼
     ┌─────────┐│ ┌─────────┐
     │ Iterate ││ │ Complete│
     │ & Fix   ││ │ (→ PR)  │
     └────┬────┘│ └─────────┘
          │     │
          └─────┘
```

**PostToolUse Hook Configuration:**
```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write|Edit",
      "hooks": [{
        "type": "command",
        "command": "bun run format || true"
      }]
    }]
  }
}
```

**UI Verification with Chrome Extension:**
```bash
# Boris's pattern for UI work
1. Make change
2. Chrome extension opens browser
3. Claude observes UI
4. Claude iterates until "looks right"
5. Commit when visual + functional pass
```

**Common Mistakes:**
- No verification infrastructure (operating blind)
- Only running verification once at the end
- Skipping visual verification for UI changes
- Ignoring verification failures ("it's probably fine")

**Integration with Other Steps:**
- Hooks (Step 7) automate verification triggers
- Subagents (Step 6) handle complex verification
- Error Recovery (Step 11) when verification fails repeatedly

---

### 9. Think Keywords

**Why It Matters:**
Extended thinking gives Claude more reasoning tokens for complex problems. Boris uses extended thinking as default for Opus 4.5, especially for architectural decisions and debugging.

**How to Implement:**

**Keyword Tiers:**

| Keyword | Tokens | Use Case |
|---------|--------|----------|
| `think` | ~4,000 | Standard planning |
| `think hard` / `think more` | ~10,000 | New features, multi-step |
| `think harder` / `ultrathink` | ~31,999 | Architecture, stuck in loops |

**Examples:**
```
# Standard planning
"Think about how to implement this auth flow, then proceed."

# Complex feature
"Think hard about the tradeoffs between these caching strategies."

# Architectural decision
"Ultrathink about the best way to structure this microservice migration."
```

**Alternative Triggers:**
- "think about it" → megathink level
- "think deeply" → megathink level
- "think really hard" → ultrathink level
- "think very hard" → ultrathink level

**Common Mistakes:**
- Using ultrathink for simple tasks (overkill, slows down)
- Not using any thinking keywords for complex tasks
- Using thinking keywords in web chat (only works in CLI)
- Overriding default with always-ultrathink (wastes tokens)

**Rule of Thumb:**
- Quick fixes, simple edits, prototyping: **No keyword**
- New features with planning: **"think hard"**
- Architecture, stuck in loops: **"ultrathink"**

**Integration with Other Steps:**
- Use in Plan Mode (Step 4) for complex planning
- Use when Error Recovery (Step 11) isn't working
- Not needed for Slash Commands (Step 7)—mechanical operations

---

### 10. Progressive Disclosure

**Why It Matters:**
Don't front-load all information. Give Claude what it needs when it needs it. This respects context budget and keeps Claude focused on the current step.

**How to Implement:**

**Phased Information Pattern:**
```
Phase 1: Task Overview
"We need to add user authentication to the app."

Phase 2: Context on Demand
[Claude reads relevant files as needed]

Phase 3: Constraints When Relevant
"For the password hashing, use bcrypt with 12 rounds per our security policy."

Phase 4: Edge Cases as They Arise
"Handle the case where user email is already registered."
```

**CLAUDE.md as Progressive Disclosure:**
```markdown
# CLAUDE.md

## Core Rules (always applies)
- Run typecheck before commits
- Follow naming conventions

## On-Demand (Claude will ask if needed)
See /docs/auth-patterns.md for authentication details
See /docs/api-spec.md for API conventions
```

**Common Mistakes:**
- Dumping entire spec in first message
- Not providing constraints that will be needed
- Making Claude guess at information you have
- Over-fragmenting simple tasks

**Integration with Other Steps:**
- Respects Context Budget (Step 7)
- Supports Task Scoping (Step 3)—clear phases
- Enables Plan Mode (Step 4)—iterative refinement

---

### 11. Error Recovery

**Why It Matters:**
10-20% of Boris's sessions are abandoned due to unexpected scenarios. Error recovery patterns help salvage sessions and—critically—**feed learnings back into CLAUDE.md** for future prevention.

**How to Implement:**

**Recovery Decision Tree:**
```
Error Occurred
     │
     ▼
Is it fixable in current session?
     │
   YES ──────────────────────────► Fix and continue
     │
    NO
     │
     ▼
Is context > 70%?
     │
   YES ──────────────────────────► Fresh session with learnings
     │
    NO
     │
     ▼
/compact and retry with new approach
```

**Recovery Commands:**
```bash
# Soft reset (preserve some context)
/compact

# Hard reset (start fresh)
exit
claude

# Emergency file recovery
git checkout HEAD -- path/to/file
git reset --soft HEAD~1  # Undo last commit, keep changes
git reset --hard origin/main  # Nuclear option
```

**Post-Error CLAUDE.md Update:**
```markdown
## Error Prevention

### [Date] - [Error Type]
- **What happened:** Claude tried to modify generated files
- **Prevention:** "Never modify files in /generated/ directory"
```

**Common Mistakes:**
- Pushing through errors hoping they'll resolve
- Not updating CLAUDE.md after resolution
- Abandoning session without capturing learnings
- Same error repeating because not documented

**Integration with Other Steps:**
- Updates CLAUDE.md (Step 2) after resolution
- May trigger Session Closure (Step 13)
- Feeds into Verification Loops (Step 8) for prevention

---

### 12. Commit Discipline

**Why It Matters:**
Boris ships 50-100 PRs per week (259 PRs in 30 days). This velocity requires systematic commit workflows. The `/commit-push-pr` command runs "dozens of times daily."

**How to Implement:**

**Slash Command: /commit-push-pr**
```markdown
# .claude/commands/commit-push-pr.md

First, run these bash commands to gather context:
- git status
- git diff --staged
- git log --oneline -5

Then create a commit following these rules:
1. Message format: type(scope): description
2. Types: feat, fix, refactor, docs, test, chore
3. Keep subject line < 50 characters
4. Body explains WHY, not WHAT

After commit, push and create PR:
- git push -u origin HEAD
- gh pr create --title "[commit subject]" --body "[generated description]"
```

**Pre-Commit Checklist (automated via hooks):**
```
[ ] typecheck passes
[ ] tests pass
[ ] linting passes
[ ] no console.logs
[ ] CLAUDE.md updated if needed
```

**Boris's 30-Day Stats:**
```
259 PRs landed
497 commits
40k lines added
38k lines removed
10-20% sessions abandoned (learning opportunities)
```

**Common Mistakes:**
- Committing without verification passing
- Giant commits (hard to review, harder to revert)
- Not running through slash command (inconsistent quality)
- Skipping code-simplifier before final commit

**Integration with Other Steps:**
- Verification (Step 4) must pass first
- code-simplifier (Step 6) runs before commit
- Captures learnings for CLAUDE.md (Step 2)

---

### 13. Session Closure

**Why It Matters:**
Clean session closure captures learnings, updates external state, and prepares for the next fresh context. This is where compounding happens.

**How to Implement:**

**Session Closure Checklist:**
```
1. VERIFY: All tests/typechecks pass
2. COMMIT: Changes are committed and pushed
3. DOCUMENT: Update CLAUDE.md with any learnings
4. HANDOFF: Update TODO.md if work continues
5. CLOSE: Exit session cleanly
```

**End-of-Session Questions:**
```
- What mistakes did Claude make that should go in CLAUDE.md?
- What context would help the next session?
- Are there loose ends that need TODO.md entries?
- Did any verification gaps appear?
```

**Clean Exit:**
```bash
# Verify nothing uncommitted
git status

# If clean:
exit

# If changes remain:
git stash  # or commit
```

**Common Mistakes:**
- Letting sessions die without capturing learnings
- Not updating CLAUDE.md with discovered gotchas
- Leaving work in uncommitted state
- No handoff notes for continuing work

**Integration with Other Steps:**
- Updates CLAUDE.md (Step 2) for compounding
- External State (Step 5) captured for next session
- Enables clean Fresh Context Start (Step 1)

---

### Checkpoint: Full Workflow Mastery
**You should now understand:**
- [ ] All 13 points and how they integrate
- [ ] Context budget guidelines (< 50% for optimal quality)
- [ ] Think keywords and when to use each tier
- [ ] Error recovery decision tree
- [ ] Commit discipline with /commit-push-pr
- [ ] Session closure checklist

**If unclear:** Practice the complete loop: Plan -> Code -> Simplify -> Verify -> Commit

---

## Boris's Actual Practices

### Parallel Sessions: 10-15 Concurrent

```
Terminal:  5 Claude instances (tabs numbered 1-5)
           System notifications when input needed

Web:       5-10 claude.ai/code sessions
           Different tasks in different tabs

Mobile:    Sessions started in morning
           Checked periodically throughout day
           Async verification results
```

**Why This Works:**
- Each session = independent worker with fresh context
- Context switch only when value is ready
- Distributed cognition like compute allocation

### Model Selection: Always Opus 4.5

> "I use Opus 4.5 with thinking for everything. Even though it's bigger and slower than Sonnet, since you have to steer it less and it's better at tool use, it is almost always faster than using a smaller model in the end."

**The Math:**
```
Total Time = Generation Time + Correction Time + Re-prompting Time

Opus:   Higher generation, MUCH lower correction/re-prompting
Sonnet: Lower generation, significantly higher correction loops

Net result: Opus wins on total time despite slower generation
```

### Plan Mode First

```
1. Press Shift+Tab TWICE (not once)
2. See [PLAN] indicator
3. Iterate back-and-forth until plan is solid
4. THEN switch to auto-accept mode
5. Claude executes entire implementation without interruption
```

> "A good plan is really important! Plan Mode can 2-3x success rates for complex tasks."

### /commit-push-pr Automation

Boris runs this "dozens of times every day":
```markdown
# .claude/commands/commit-push-pr.md

Uses inline bash to pre-compute:
- git status
- git diff --cached
- Recent commit messages (for style matching)

Then:
- Generates appropriate commit message
- Creates commit
- Pushes to remote
- Opens PR with generated description
```

### Subagent Code Review Pattern

After main work is done:
```
1. Run code-simplifier subagent
2. Review simplification suggestions
3. Run verify-app subagent
4. Address any failures
5. THEN commit
```

This separation means: **creation and quality are different phases with different "minds."**

---

## The Agentic Dev Loop Visualized

```
┌─────────────────────────────────────────────────────────────────┐
│                    BORIS'S COMPLETE WORKFLOW                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌─────────┐    ┌─────────┐    ┌──────────┐    ┌──────────┐   │
│   │  PLAN   │ ──►│  CODE   │ ──►│ SIMPLIFY │ ──►│  VERIFY  │   │
│   │         │    │         │    │          │    │          │   │
│   │ Opus+   │    │ Auto-   │    │ code-    │    │ Chrome/  │   │
│   │ thinking│    │ accept  │    │ simplifier│   │ tests/   │   │
│   │ mode    │    │ mode    │    │ agent    │    │ sims     │   │
│   └────┬────┘    └────┬────┘    └────┬─────┘    └────┬─────┘   │
│        │              │              │               │          │
│        │              │              │               │          │
│        │              │              │               ▼          │
│        │              │              │         ┌──────────┐     │
│        │              │              │         │  COMMIT  │     │
│        │              │              │         │          │     │
│        │              │              │         │ /commit- │     │
│        │              │              │         │ push-pr  │     │
│        │              │              │         └────┬─────┘     │
│        │              │              │              │           │
│        └──────────────┴──────────────┴──────────────┘           │
│                           LOOP                                   │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│                    SUPPORTING INFRASTRUCTURE                     │
│                                                                  │
│   CLAUDE.md          .claude/commands/       .claude/agents/    │
│   Team memory        Inner loop automation   Outer workflows    │
│   ~2500 tokens       /commit-push-pr         code-simplifier    │
│   Git-checked        /quick-commit           verify-app         │
│                                                                  │
│   Hooks              Permissions             MCP Integrations   │
│   PostToolUse        Whitelist pattern       Slack              │
│   Format on save     Safe bash commands      BigQuery           │
│   Typecheck          /permissions add        Sentry             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## The Compounding Formula

> "Think of Claude Code as a compounding system—not a one-shot tool, but an evolving teammate."

**Linear usage:**
```
Output = Capability × Time
```

**Compounding usage (Boris's way):**
```
Output = Capability × Time × (1 + Learning Rate)^Sessions
```

Each session that updates CLAUDE.md increases effective capability for **all future sessions**.

**What Enables Compounding:**
1. Shared, git-checked CLAUDE.md
2. Mistake → Rule conversion (every failure improves future)
3. Team contribution to CLAUDE.md
4. Verification loops confirm improvements work

**What Breaks Compounding:**
1. Individual CLAUDE.md files (knowledge doesn't compound across team)
2. Ignoring failures (same mistakes repeat)
3. CLAUDE.md bloat (context window waste)
4. Skipping verification (bad patterns persist)

---

## Quick Reference: Implementation Checklist

### Today (< 30 minutes)
- [ ] Create CLAUDE.md at git root with build/test commands
- [ ] Switch to Opus 4.5 as default model
- [ ] Learn Shift+Tab x2 for Plan Mode
- [ ] Add one formatting hook to settings.json

### This Week (hours)
- [ ] Set up 2-3 parallel sessions workflow
- [ ] Configure terminal notifications
- [ ] Create /commit-push-pr slash command
- [ ] Install code-simplifier plugin

### This Month (deep investment)
- [ ] Full verification infrastructure (Chrome extension, simulators)
- [ ] Team CLAUDE.md discipline with GitHub Action
- [ ] Subagent library for common workflows
- [ ] Complete hook configuration

---

## Troubleshooting

### Problem: "CLAUDE.md not being read on session start"

**Symptom:** Claude doesn't know about project conventions. Keeps making mistakes documented in CLAUDE.md.

**Cause:** File in wrong location, wrong case, or not in git root.

**Fix:**
```bash
# Check location (must be at git root)
ls -la $(git rev-parse --show-toplevel)/CLAUDE.md

# Check case sensitivity (must be uppercase)
# WRONG: claude.md, Claude.md
# RIGHT: CLAUDE.md

# Verify it's being read
# At session start, ask:
"What does CLAUDE.md say about our build commands?"
```

---

### Problem: "Verification loops not running automatically"

**Symptom:** Code changes committed without typecheck/test pass. Errors discovered in PR.

**Cause:** Hooks not configured or not triggering.

**Fix:**
```bash
# Verify hooks are configured
cat ~/.claude/settings.json | grep -A10 PostToolUse

# Correct hook configuration:
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write|Edit",
      "hooks": [{
        "type": "command",
        "command": "npm run typecheck && npm run test"
      }]
    }]
  }
}

# Test hook manually
npm run typecheck && npm run test
```

---

### Problem: "Context degrading too quickly"

**Symptom:** Quality drops after 15-20 minutes. Repetition, contradictions.

**Cause:** Large files being read, verbose tool output, bloated CLAUDE.md.

**Fix:**
```bash
# Check CLAUDE.md size
wc -c CLAUDE.md
# Should be < 10KB (< 2500 tokens)

# Start fresh session more often
# When context reaches 60%, consider /clear

# Use targeted file reads, not directories
# BAD: "Read the entire src/ directory"
# GOOD: "Read src/auth/login.ts"
```

---

### Problem: "Parallel sessions stepping on each other"

**Symptom:** Git conflicts. Sessions editing same files. Work lost.

**Cause:** Multiple sessions working same area without branch isolation.

**Fix:**
```bash
# Use branches per session/task
git checkout -b feature/auth-session-1
# In another terminal:
git checkout -b feature/auth-session-2

# Or use explicit file ownership
# Session 1: "Only modify src/api/*"
# Session 2: "Only modify src/components/*"

# Merge carefully
git checkout main
git merge feature/auth-session-1
git merge feature/auth-session-2  # May need conflict resolution
```

---

## Sources

### Primary
- [Boris Cherny Twitter Thread](https://twitter-thread.com/t/2007179832300581177) - Original workflow reveal
- [InfoQ: Inside the Development Workflow](https://www.infoq.com/news/2026/01/claude-code-creator-workflow/) - Technical deep dive
- [DEV.to Analysis](https://dev.to/with_attitude/how-boris-cherny-builder-of-claude-code-uses-it-and-why-that-should-change-how-you-think-about-173g) - Mental model breakdown

### Secondary
- [VentureBeat Coverage](https://venturebeat.com/technology/the-creator-of-claude-code-just-revealed-his-workflow-and-developers-are) - Workflow overview
- [Cyrus AI: code-simplifier Guide](https://www.atcyrus.com/stories/claude-code-code-simplifier-agent-guide) - Official plugin details
- [GitHub: bcherny-claude](https://github.com/0xquinto/bcherny-claude) - Configuration files
- [FindSkill.ai: Ultrathink Guide](https://findskill.ai/blog/claude-ultrathink-extended-thinking/) - Extended thinking details

---

## Tags

`#boris-cherny` `#canonical-workflow` `#13-point-system` `#verification-loops` `#plan-mode` `#parallel-sessions` `#opus-4.5` `#claude-md` `#compounding` `#subagents` `#code-simplifier` `#extended-thinking` `#ultrathink`

---

*Document Version: 2026-01-13*
*Agent: Claude Opus 4.5*
*Depth: Complete workflow guide (900+ lines)*

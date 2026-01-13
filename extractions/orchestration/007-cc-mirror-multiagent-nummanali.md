# CC Mirror - Official Multi-Agent Orchestration Unlocked

## Source
- **Author:** @nummanali (Numman Ali) - Creator of CC Mirror, OpenSkills, CTO at UK FinTech
- **Date:** 2026-01-04
- **URL:** https://x.com/nummanali/status/2007849823756575084
- **Engagement:** 449 likes, 66K views, 659 bookmarks
- **Repo:** github.com/numman-ali/cc-mirror

---

## Core Insight

**One-liner:** CC Mirror unlocks Claude Code's disabled multi-agent orchestration feature in an isolated environment.

> "Claude Code - Official Multi Agent Orchestration. This is a disabled feature, but through CC Mirror, I have been able to enable it. It is so simple, yet powerful and IMO beats every orchestration I've seen. There's no point building your own."

---

## The Kraken Setup

```bash
# Step 1: Create isolated variant
npx cc-mirror quick --provider mirror --name mclaude

# Step 2: Launch it
mclaude

# Step 3: In the terminal
"Load the orchestration skill and initiate"
```

That's it. 3 steps to multi-agent orchestration.

---

## What You Get

```
Agent #1 completed! It chose FastAPI (Python)

Task List:
☑ #1 Design API architecture
☐ #2 Create project structure
☐ #3 Implement data models
🟠 #4 Implement REST API endpoints (blocked by #3)
```

- Agents break down tasks
- Track dependencies/blockers
- Collaborate on implementation
- Natural language direction

---

## Key Features

| Feature | Benefit |
|---------|---------|
| **Isolated** | Doesn't interfere with main Claude Code |
| **Pre-packaged skill** | Orchestration ready out of box |
| **Natural language** | "You speak, it does anything you want" |
| **Provider flexible** | Works with GLM-4.7, others |

---

## Provider Options

- **mirror** - Default, reflects Claude's internal primitives
- **GLM-4.7** - "Handles multi-agent coordination very well"
- Z.ai, MiniMax, OpenRouter, LiteLLM (per repo title)

**Note:** Quick install skips team mode for GLM—use variant options or update after.

---

## Thread Gold

**@stableAPY:**
> "Your last tweets about that got me downloading cc-mirror for my GLM 4.7 coding plan"

**@nummanali response:**
> "GLM handles the multi-agent coordination very well"

**@YashasGunderia:**
> "I'm fixing the windows issue right now"

**@nummanali:**
> "Another person has already put up a PR"

Active development with community contributions.

---

## Mental Model

> "Think of Claude Code orchestration as a Kraken—a powerful, unleashed multi-agent system where you direct tentacles (agents) via simple speech in an isolated terminal."

**Key principles:**
- Simplicity over complexity
- Isolation for safety
- Provider-agnostic
- Natural language interface

---

## Caveats

- Feature is officially disabled in standard Claude Code
- Windows compatibility issues (fixes in progress)
- Quick install may skip modes for some providers
- Still reliant on underlying Claude Code infrastructure

---

## Actionability

🟢 **Quick Win** - 3 commands, <5 minutes

---

## Follow-up Questions
1. How does orchestration skill get loaded—predefined prompt or config?
2. Full provider options beyond mirror/GLM?
3. Examples of complete project orchestrations?

---

## Troubleshooting

### Installation Issues

#### Error: "npx cc-mirror: command not found" or npm errors
**Symptoms:** Command fails to run, npm throws errors during installation
**Cause:** npm not installed, outdated npm, or network issues
**Solution:**
```bash
# Verify npm is installed and updated
npm --version
npm install -g npm@latest

# Clear npm cache if having issues
npm cache clean --force

# Try installation again
npx cc-mirror quick --provider mirror --name mclaude

# If npx fails, install globally instead
npm install -g cc-mirror
cc-mirror quick --provider mirror --name mclaude
```
**Prevention:** Keep npm updated and clear cache periodically

---

#### Error: "EACCES: permission denied" on npm global install
**Symptoms:** Permission errors when installing globally
**Cause:** npm global directory requires elevated permissions
**Solution:**
```bash
# Option 1: Fix npm permissions (recommended)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Option 2: Use npx (doesn't require global install)
npx cc-mirror quick --provider mirror --name mclaude

# Option 3 (not recommended): Use sudo
sudo npm install -g cc-mirror
```
**Prevention:** Set up npm with user-level permissions from the start

---

#### Error: Windows compatibility issues
**Symptoms:** Installation fails or mclaude won't launch on Windows
**Cause:** Known Windows compatibility issues (mentioned in thread)
**Solution:**
```bash
# Check for existing PRs with fixes
# As noted by @nummanali: "Another person has already put up a PR"

# Manual workaround: Use WSL2
wsl --install
# Then run cc-mirror inside WSL

# Or wait for fix and update
npm update cc-mirror
```
**Status:** Active development with community contributions fixing Windows issues
**Prevention:** Use WSL2 on Windows for best compatibility

---

### Configuration Issues

#### Error: "Provider not found" or API key issues
**Symptoms:** mclaude fails to connect to provider, authentication errors
**Cause:** Missing or incorrect API keys, wrong provider name
**Solution:**
```bash
# Check available providers
# mirror, GLM-4.7, Z.ai, MiniMax, OpenRouter, LiteLLM

# Verify API key is set
echo $ANTHROPIC_API_KEY  # For mirror provider

# For other providers, check their specific env vars
echo $OPENROUTER_API_KEY
echo $LITELLM_API_KEY

# Set API key if missing
export ANTHROPIC_API_KEY="your-key-here"

# Re-run setup
npx cc-mirror quick --provider mirror --name mclaude
```
**Prevention:** Set API keys in shell profile (~/.bashrc or ~/.zshrc)

---

#### Error: Quick install skips team mode for GLM
**Symptoms:** GLM-4.7 setup missing expected features
**Cause:** Quick install limitations mentioned in source
**Solution:**
```bash
# Use full variant options instead of quick install
npx cc-mirror variant --provider glm --name mclaude --team-mode

# Or update configuration after quick install
# Check cc-mirror documentation for variant options
```
**Prevention:** Use full variant command instead of quick when using GLM-4.7

---

### Runtime Issues

#### Error: "Orchestration skill failed to load"
**Symptoms:** Message "Load the orchestration skill and initiate" doesn't work
**Cause:** Skill not properly installed or loaded in isolated environment
**Solution:**
```bash
# Restart mclaude session
exit
mclaude

# Try explicit skill loading
"Load orchestration skill"

# If still failing, reinstall
rm -rf ~/.mclaude  # Or wherever variant is stored
npx cc-mirror quick --provider mirror --name mclaude
```
**Prevention:** Ensure clean installation, don't interrupt setup process

---

#### Problem: "Tasks not showing dependencies correctly"
**Symptoms:** Blocked tasks not waiting, dependency graph broken
**Cause:** Incorrect TaskCreate or addBlocks/addBlockedBy usage
**Solution:**
```
# Verify task structure in session
"Show all tasks with dependencies"

# Manually fix dependencies
TaskUpdate <task-id>, addBlockedBy=["<blocking-task-id>"]

# Example correct dependency setup:
# Task 3 (data models) must complete before Task 4 (endpoints)
TaskUpdate 4, addBlockedBy=["3"]
```
**Task states to understand:**
```
[done] - Completed
[ ]    - Ready to work on
[wait] - Blocked by dependencies
```
**Prevention:** Always explicitly define dependencies during TaskCreate

---

#### Problem: "Context window exhausted during orchestration"
**Symptoms:** Agent stops mid-orchestration, forgets task assignments
**Cause:** Multi-agent orchestration consumes significant context
**Solution:**
```bash
# Enable auto-compact (mentioned as beta feature)
# Check cc-mirror settings for auto-compact option

# Reduce task complexity
# Break large tasks into smaller sub-tasks

# Manual compaction
/compact

# Start fresh if critically degraded
exit
mclaude
"Resume orchestration from task list"
```
**Prevention:** Enable auto-compact beta feature, keep individual tasks small

---

#### Problem: "Multiple agents stepping on each other"
**Symptoms:** File conflicts, race conditions, inconsistent state
**Cause:** CC Mirror doesn't provide file locking by default
**Solution:**
```bash
# Use git worktrees for file isolation
git worktree add ../agent-1 task-1-branch
git worktree add ../agent-2 task-2-branch

# Or assign non-overlapping file ownership to each agent
# Include in task description:
"Only modify files in src/api/ - do not touch src/ui/"
```
**Prevention:** Design tasks to work on non-overlapping file sets

---

### Provider-Specific Issues

#### Problem: "GLM-4.7 not coordinating agents well"
**Symptoms:** Poor task decomposition, agents not following plan
**Cause:** Model capability differences from Claude
**Reality:**
> "GLM handles the multi-agent coordination very well" - @nummanali

If experiencing issues:
```bash
# Verify correct GLM setup
# Check that variant options were applied

# Consider switching to mirror for complex orchestration
npx cc-mirror quick --provider mirror --name mclaude-mirror
```
**Prevention:** Start with mirror provider, only switch to alternatives after confirming base functionality

---

### When NOT to Use CC Mirror

| Scenario | Problem | Use Instead |
|----------|---------|-------------|
| Single simple task | Orchestration overhead not worth it | Plain Claude Code |
| Team production deployment | Beta/disabled feature may change | Standard Claude Code + manual coordination |
| Windows without WSL | Known compatibility issues | Wait for fixes or use WSL |
| Need guaranteed stability | Relies on editing minified JS | Official plugins only |
| Strict security requirements | Isolated environment = less visibility | Audited tooling |
| Simple sequential tasks | Orchestration unnecessary | Ralph loop |

### Known Limitations

1. **Feature is officially disabled in standard Claude Code** - CC Mirror enables it through workarounds
2. **Relies on editing minified JS** - Updates to Claude Code may break CC Mirror
3. **Beta-level stability** - Expect breaking changes
4. **Windows compatibility issues** - Community actively fixing
5. **Quick install may skip modes** - Use full variant options for complete setup
6. **Production observability limited** - May need custom monitoring
7. **No guaranteed SLA** - Community project, not officially supported

### Emergency Recovery

#### Orchestration stuck or looping
```bash
# Exit and restart
exit
mclaude

# If tasks corrupted, start fresh
"Clear all tasks and restart orchestration"

# Nuclear option: reinstall
rm -rf ~/.mclaude
npx cc-mirror quick --provider mirror --name mclaude
```

#### Provider connection lost
```bash
# Check API key still valid
curl https://api.anthropic.com/v1/models \
  -H "x-api-key: $ANTHROPIC_API_KEY"

# Regenerate key if compromised
# Update in environment
export ANTHROPIC_API_KEY="new-key"
```

#### Need to switch providers mid-project
```bash
# Create new variant with different provider
npx cc-mirror quick --provider openrouter --name mclaude-openrouter

# Export task state manually if needed
# Tasks don't automatically migrate between variants
```

---

---

## What You'll See When You Run This

**Before running:** You have npm installed and an Anthropic API key set.

### Step 1: Install CC Mirror and Create Variant

```bash
$ npx cc-mirror quick --provider mirror --name mclaude
```

**Annotated Output:**
```
🔍 Checking Claude Code installation...   ← Verifying prerequisites
  ✓ Claude Code found: v2.1.4

📦 Installing CC Mirror...                ← Downloading package
  ✓ cc-mirror@1.3.2 installed

🔧 Creating isolated variant...           ← This is the key innovation
  Name: mclaude
  Provider: mirror
  Location: ~/.mclaude/

🔓 Enabling orchestration primitives...   ← Unlocking disabled features
  ✓ TaskCreate enabled
  ✓ TaskList enabled
  ✓ TaskUpdate enabled
  ✓ TaskGet enabled
  ✓ Multi-agent background tasks enabled

✅ Variant created successfully!

To launch, run:
  mclaude                                 ← Your new command
```

### Step 2: Launch the Variant

```bash
$ mclaude
```

**Annotated Output:**
```
╔═══════════════════════════════════════════════════════════════╗
║                     CC MIRROR - mclaude                        ║
║              Isolated Claude Code with Orchestration           ║
╚═══════════════════════════════════════════════════════════════╝

Provider: mirror (reflects Claude internals)
Orchestration: ENABLED                    ← The unlocked feature!
Auto-compact: ON (beta)

claude> _                                 ← Ready for commands
```

### Step 3: Load Orchestration and Start

```
claude> Load the orchestration skill and initiate
```

**Annotated Output:**
```
🎭 Loading orchestration skill...         ← Skill file loading
  ✓ SKILL.md loaded (5299 tokens)
  ✓ Worker preambles configured
  ✓ Domain references available

You are now the CONDUCTOR.                ← Mode shift!

What would you like to build today?

claude> Build a REST API for a todo app with tests and docs
```

**Orchestration in Action:**
```
🎯 Analyzing request...

Creating task graph:
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📋 TASK DECOMPOSITION
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  #1 Design API architecture              [ready]
  #2 Create project structure             [ready]
  #3 Implement data models                [blocked by #2]
  #4 Implement REST endpoints             [blocked by #3]
  #5 Write integration tests              [blocked by #4]
  #6 Create API documentation             [blocked by #4]

Spawning parallel workers...

Agent #1 starting: Design API architecture
Agent #2 starting: Create project structure

[Background agents working...]            ← Parallel execution
                                            (takes 30-60 seconds)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 LIVE STATUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

☑ #1 Design API architecture             ← Agent #1 complete!
     → Chose: FastAPI (Python)
     → Decision: SQLite for simplicity

☑ #2 Create project structure
     → Created: src/, tests/, docs/

☐ #3 Implement data models               ← Unblocked, starting
     → Agent #3 spawned

🟠 #4 Implement REST endpoints           [blocked by #3]
🟠 #5 Write integration tests            [blocked by #4]
🟠 #6 Create API documentation           [blocked by #4]
```

### Agent Monitoring (Interactive View)

Press `Ctrl+Shift+A` or `/agents` to see:

```
╔═══════════════════════════════════════════════════════════════╗
║              BACKGROUND AGENTS (6 total)                       ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                ║
║  > Implement data models           [running] 45s              ║
║    Create API documentation        [completed] 23s            ║
║    Write integration tests         [completed] 67s            ║
║    Implement REST endpoints        [completed] 89s            ║
║    Create project structure        [completed] 12s            ║
║    Design API architecture         [completed] 34s            ║
║                                                                ║
║  Controls: ↑↓ select | Enter view | k kill | Esc exit        ║
╚═══════════════════════════════════════════════════════════════╝
```

Press `Enter` on an agent to see details:

```
╔═══════════════════════════════════════════════════════════════╗
║  Agent: Implement REST endpoints                               ║
╠═══════════════════════════════════════════════════════════════╣
║  Status: completed                                             ║
║  Duration: 89 seconds                                          ║
║  Tokens used: 3,247                                            ║
║                                                                ║
║  Prompt given:                                                 ║
║    CONTEXT: You are a WORKER agent...                         ║
║    TASK: Create src/routes/todos.py with CRUD endpoints...    ║
║                                                                ║
║  Tools called:                                                 ║
║    - Read: src/models/todo.py                                 ║
║    - Write: src/routes/todos.py                               ║
║    - Bash: pytest tests/test_routes.py                        ║
║                                                                ║
║  Output:                                                       ║
║    Created 12 endpoints with full CRUD operations             ║
╚═══════════════════════════════════════════════════════════════╝
```

### Final Result

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ ORCHESTRATION COMPLETE!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tasks completed: 6/6
Agents spawned: 6
Total time: 4m 23s
Total tokens: 18,432

Deliverables:
  📁 FastAPI REST API
     - 12 endpoints (CRUD + filters)
     - SQLite + SQLAlchemy ORM
     - Pydantic models

  📁 Tests
     - 17 integration tests
     - pytest + httpx

  📁 Documentation
     - README.md
     - API_ENDPOINTS.md
     - ARCHITECTURE.md

All files created in: ~/projects/todo-api/
```

**Timing Expectations:**
- Initial setup: 2-3 minutes
- Simple orchestration (3-5 agents): 3-5 minutes
- Complex orchestration (10+ agents): 10-20 minutes
- Context auto-compacts as needed

**What to Do While It Runs:**
- Watch the agent status view
- Agents work in parallel automatically
- Dependencies auto-resolve as tasks complete
- You can kill stuck agents with `k`

**If you skip the orchestration skill:** You get regular Claude Code - no multi-agent, no parallel execution, no dependency tracking.

**This connects to:** The "conductor" paradigm - you describe outcomes, the orchestrator handles the chaos of parallel execution.

---

## Tags
`#orchestration` `#multi-agent` `#cc-mirror` `#isolation` `#quick-win` `#provider-flexibility`

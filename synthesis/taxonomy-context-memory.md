---
**DEPRECATED** (2026-01-18)

This content has been superseded by D-FINAL synthesis.

**Replacement:** See D-FINAL-implementation Sections 1-2 for current content.
**Reason:** Content fully covered in D-FINAL with production validation.
**Original preserved below for reference.**

---

# Context and Memory Pattern Taxonomy

> **You Are Here:** This is the **memory and persistence reference** for Claude Code. If you're trying to solve the "no persistent memory" problem, understand context window management, or implement multi-agent memory sharing, this document covers every pattern from simple CLAUDE.md to sophisticated Claude-Mem and Gas Town Beads. **Note:** This file is DEPRECATED - for current content, see `D-FINAL-implementation.md` Sections 1-2.

**Synthesis Date:** 2026-01-09
**Agent:** Claude Opus 4.5
**Method:** Exhaustive cross-reference of all extractions in orchestration/, philosophy/, tooling/, techniques/, cross-cutting/

---

## Table of Contents

1. [Overview: The Memory Problem](#overview-the-memory-problem)
2. [Memory Persistence Patterns](#memory-persistence-patterns)
   - 2.1 File-Based State
   - 2.2 Git-Based Memory
   - 2.3 External Memory Systems
   - 2.4 Hybrid Memory Architectures
3. [Context Management Patterns](#context-management-patterns)
   - 3.1 Fresh Context Per Iteration
   - 3.2 Context Compaction Strategies
   - 3.3 Token Optimization
   - 3.4 Context Windowing
4. [Multi-Agent Memory Patterns](#multi-agent-memory-patterns)
   - 4.1 Isolated Domain Memory
   - 4.2 Shared Memory Coordination
   - 4.3 Handoff Protocols
5. [Memory Hierarchy Patterns](#memory-hierarchy-patterns)
6. [Pattern Progression: Simple to Complex](#pattern-progression-simple-to-complex)
7. [Tradeoff Matrix](#tradeoff-matrix)
8. [Pattern Relationships Map](#pattern-relationships-map)
9. [Implementation Decision Tree](#implementation-decision-tree)

---

## Overview: The Memory Problem

LLMs face a fundamental limitation: **no persistent memory across sessions**. Every new conversation starts from zero. This creates several challenges:

| Challenge | Impact |
|-----------|--------|
| **Context window limits** | Can't process entire codebases at once |
| **Session boundaries** | Must re-explain project context each time |
| **Context rot** | Performance degrades as context fills up |
| **Token waste** | Repetitive information consumes expensive tokens |
| **Lossy compaction** | Auto-summary loses important details |

The patterns in this taxonomy represent the community's solutions to these challenges, ranging from simple file-based approaches to sophisticated multi-agent memory architectures.

---

## Memory Persistence Patterns

### 2.1 File-Based State

The simplest and most widely-used persistence pattern. Information survives sessions through filesystem reads.

#### Pattern 2.1.1: CLAUDE.md Knowledge Base

**Source:** Boris Cherny (Creator), Greg Isenberg, official docs
**Mechanism:** Markdown files automatically loaded into context at session start

```
project/
├── CLAUDE.md              # Project-level knowledge (git-checked)
├── CLAUDE.local.md        # Personal/secret config (gitignored)
└── .claude/
    └── rules/*.md         # Path-specific rules with frontmatter
```

**How it works:**
1. Claude Code scans for CLAUDE.md files at startup
2. Content injected into system prompt
3. Path-targeted rules activate based on file context
4. Updates persist via git (CLAUDE.md) or locally (CLAUDE.local.md)

**When to use:**
- Project standards, coding conventions
- Architecture decisions that shouldn't be repeated
- Tool-specific instructions
- Team knowledge that compounds

**Tradeoffs:**
| Pro | Con |
|-----|-----|
| Zero setup | Can bloat over time |
| Git-versioned | Consumes context window |
| Team-shareable | Must manually prune |
| Automatic loading | No semantic search |

---

#### Pattern 2.1.2: progress.txt Append-Only Log

**Source:** Ralph Wiggum pattern (Ryan Carson, Matt Pocock, Geoffrey Huntley)
**Mechanism:** Append-only file for cross-iteration learning

```
# progress.txt - APPEND ONLY - NEVER EDIT

---
Iteration 1 (2026-01-09 10:00):
- Completed: US-001 - Tool skeleton created
- Learned: Use orange (#FF6B35) for visibility on dark backgrounds
- Next: Consider beat playback timing

---
Iteration 2 (2026-01-09 10:15):
- Completed: US-002 - Category mapping
- Issue encountered: Zod schema needed adjustment
- Pattern discovered: Always use .optional() explicitly
```

**Critical rule:** NEVER UPDATE - only append new entries.

**How it works:**
1. Each iteration reads progress.txt for prior learnings
2. Completes work, documents findings
3. Appends new entry (never modifies old)
4. Next iteration sees accumulated wisdom

**What to log:**
- What was completed (reference user story ID)
- What was learned (patterns, gotchas, decisions)
- What blocked or failed
- What to do next

**Tradeoffs:**
| Pro | Con |
|-----|-----|
| Simple append semantics | Can grow unbounded |
| Full history preserved | No structured query |
| Human-readable | Requires periodic pruning |
| Low token overhead | No automatic retrieval |

---

#### Pattern 2.1.3: prd.json Structured Task State

**Source:** Ralph pattern, Anthropic best practices
**Mechanism:** JSON file tracking task completion state

```json
{
  "project": "Untangle",
  "branchName": "ralph/feature-name",
  "userStories": [
    {
      "id": "US-001",
      "title": "Create upsertIncome tool skeleton",
      "acceptanceCriteria": [
        "Zod schema matches PRD",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    }
  ]
}
```

**How it works:**
1. Agent reads prd.json at start
2. Finds highest-priority task with `passes: false`
3. Implements and verifies
4. Sets `passes: true` on success
5. Loop continues until all pass

**Why JSON over Markdown:**
- Machine-parseable (jq, scripts)
- Unambiguous state (`passes: true/false`)
- Smaller context footprint
- Follows Anthropic's internal patterns

**Tradeoffs:**
| Pro | Con |
|-----|-----|
| Structured state | Requires JSON comfort |
| Script-friendly | Less human-readable |
| Clear completion signal | Rigid format |
| Low token cost | No free-form notes |

---

#### Pattern 2.1.4: Filesystem as Memory (Panopticon)

**Source:** Molly Cantillon
**Mechanism:** Each domain instance owns a directory as persistent state

```
~/nox        # Company/product - agent reads/writes here
~/metrics    # Analytics data - separate agent
~/email      # Communications - separate agent
~/trades     # Finance - overnight briefs written here
~/health     # Wellness - WHOOP integration logs
```

**How it works:**
1. Each agent is sandboxed to its directory
2. Writes data, briefs, analysis to files
3. Other agents read via explicit handoffs
4. Cron jobs trigger overnight processing
5. Morning: human reads synthesized briefs

**Tradeoffs:**
| Pro | Con |
|-----|-----|
| Complete isolation | Manual coordination |
| Arbitrary data formats | No cross-domain search |
| Unlimited storage | File organization debt |
| Works with any tool | Requires discipline |

---

### Checkpoint: File-Based State
**You should now understand:**
- [ ] The 4 file-based patterns: CLAUDE.md, progress.txt, prd.json, Filesystem as Memory
- [ ] Why progress.txt is APPEND-ONLY (never update)
- [ ] What to log in each iteration
- [ ] The tradeoffs of each pattern (see table above)

**If unclear:** Re-read Section 2.1 or see `mastery-context-management.md` for practical guidance

**Terminal verification:**
```bash
# Test your memory files exist
ls -la CLAUDE.md plans/prd.json plans/progress.txt 2>/dev/null
# You should see: files with recent modification times
```

---

### 2.2 Git-Based Memory

Git provides distributed, versioned memory that Claude can read through its standard tooling.

#### Pattern 2.2.1: Commit History as Context

**Source:** Ralph pattern, Boris Cherny
**Mechanism:** Git log provides narrative of what changed and why

```bash
# Agent can reconstruct project evolution
git log --oneline -20
git diff HEAD~5
git show <commit-hash>
```

**How it works:**
1. Each iteration commits completed work
2. Commit messages encode intent/decisions
3. Future agents read log for context
4. Can bisect to find when bugs were introduced

**Best practices:**
- Meaningful commit messages (not "WIP")
- One feature per commit
- Reference PRD/story IDs
- Include "why" not just "what"

**Tradeoffs:**
| Pro | Con |
|-----|-----|
| Built into every project | Limited search capability |
| Time-ordered narrative | Commit message quality varies |
| Diff-based understanding | Large repos = slow |
| Branching isolates work | Merge conflicts possible |

---

#### Pattern 2.2.2: Git Worktrees for Parallel Isolation

**Source:** 0xSero (Infinite Orchestra), multi-agent patterns
**Mechanism:** Multiple working directories sharing same git history

```bash
# Main repo
~/project/
  ├── .git/           # Shared git database
  └── src/            # Main working directory

# Worktrees (parallel agent checkouts)
~/project-worktrees/
  ├── feature-a/      # Agent 1's isolated directory
  ├── feature-b/      # Agent 2's isolated directory
  └── bugfix-c/       # Agent 3's isolated directory
```

**How it works:**
1. `git worktree add ../wt-feature feature-branch`
2. Each agent works in separate worktree
3. No file conflicts between agents
4. Shared git history for coordination
5. Human merges when complete

**Use case:** Parallel Ralph loops
```bash
for feature in auth payments notifications; do
  git worktree add ../wt-$feature $feature-branch
  (cd ../wt-$feature && ./ralph.sh 20) &
done
wait
```

**Tradeoffs:**
| Pro | Con |
|-----|-----|
| True file isolation | Worktree management overhead |
| Parallel safe | Merge still required |
| Shared history | Disk space per worktree |
| Can run on separate machines | Requires git expertise |

---

#### Pattern 2.2.3: Branch-Based State Isolation

**Source:** Boris Cherny, Ralph pattern
**Mechanism:** Each feature/task gets its own branch

```bash
BRANCH_NAME=$(jq -r '.branchName' prd.json)
git checkout -b $BRANCH_NAME
# ... work happens ...
git commit -m "Completed US-001"
```

**How it works:**
1. PRD specifies branch name
2. Ralph creates/checks out branch
3. All work committed to branch
4. PR for review when complete
5. Main stays clean

**Tradeoffs:**
| Pro | Con |
|-----|-----|
| Standard git workflow | Branch proliferation |
| Reviewable changes | Merge conflicts |
| Easy rollback | Requires cleanup |
| CI integration | Stale branches accumulate |

---

### 2.3 External Memory Systems

Beyond files and git, specialized tools provide more sophisticated memory capabilities.

#### Pattern 2.3.1: Claude-Mem Plugin

**Source:** @thedotmack, shared by Lior Alexander
**Mechanism:** Automatic session capture, semantic compression, retrieval injection

```
┌─────────────────────────────────────────────┐
│  Claude Code Session                        │
│  └─ Lifecycle Hooks                         │
│       └─ Capture events                     │
└─────────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────┐
│  Worker Service (port 37777)                │
│  ├─ SQLite DB (raw data)                    │
│  ├─ Chroma Vector DB (embeddings)           │
│  └─ Claude Agent SDK (compression)          │
└─────────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────┐
│  Future Session                             │
│  └─ Auto-inject relevant context            │
└─────────────────────────────────────────────┘
```

**How it works:**
1. **Capture:** Lifecycle hooks monitor SessionStart, PostToolUse, prompts
2. **Compress:** Claude generates semantic summaries (~50-100 tokens)
3. **Store:** SQLite + Chroma vector DB
4. **Retrieve:** 3-layer system (search → timeline → get_observations)
5. **Inject:** Relevant context auto-loaded on new sessions

**Key stats:**
- Up to 95% fewer tokens per session
- ~20x more tool calls before limit
- Local-only storage (SQLite)

**Usage:**
```javascript
// Search for relevant context
search(query = "authentication bug", type = "bugfix", limit = 10)

// Fetch full details (always batch!)
get_observations(ids = [123, 456])
```

**Privacy:**
```
<private>
API_KEY=sk-xxx
DATABASE_PASSWORD=secret
</private>
```

**Tradeoffs:**
| Pro | Con |
|-----|-----|
| Automatic capture | Plugin dependency |
| Semantic retrieval | Local storage only |
| 95% token savings | Beta stability |
| Privacy controls | Port 37777 conflicts |

---

#### Pattern 2.3.2: Database-Backed Memory

**Source:** Infinite Orchestra (Neo4j), claude-mem (SQLite/Chroma)
**Mechanism:** Structured database for queryable persistent state

**Options mentioned in research:**
- SQLite (claude-mem, ralph marketer)
- Chroma (vector embeddings)
- Neo4j (graph relationships)
- PostgreSQL (structured data)

**How it works:**
1. Agent writes observations to database
2. Semantic embeddings enable similarity search
3. Query by time, type, or content
4. Results injected into future sessions

**When to use:**
- Multi-project memory
- Cross-session learning
- Large-scale context retrieval
- Team-shared memory

**Tradeoffs:**
| Pro | Con |
|-----|-----|
| Queryable | Setup complexity |
| Scalable | Maintenance burden |
| Semantic search | External dependency |
| Persistent | Potential privacy issues |

---

#### Pattern 2.3.3: MCP Server State

**Source:** Boris Cherny, Gas Town
**Mechanism:** External tools accessed via Model Context Protocol

```
Claude Code ←→ MCP Server ←→ External System
                              (Slack, BigQuery, Sentry, etc.)
```

**How it works:**
1. MCP servers expose tools to Claude
2. Tools have persistent backend state
3. Claude reads/writes via MCP calls
4. State lives in external system

**Boris's MCP tools:**
- Slack MCP
- BigQuery
- Sentry

**Tradeoffs:**
| Pro | Con |
|-----|-----|
| Leverage existing systems | MCP setup required |
| Unified interface | Network dependency |
| Enterprise-grade storage | API rate limits |
| Team-shareable | Cost |

---

### 2.4 Hybrid Memory Architectures

Most production systems combine multiple persistence patterns.

#### Pattern 2.4.1: Ralph Complete Stack

**Components:**
```
progress.txt     # Append-only learnings
prd.json         # Task state
git history      # Code changes
CLAUDE.md        # Project knowledge
```

**How they interact:**
1. CLAUDE.md provides baseline project knowledge
2. prd.json tracks what's done/pending
3. progress.txt captures iteration-specific learnings
4. Git preserves all code changes
5. Each iteration reads all, writes to each

---

#### Pattern 2.4.2: Gas Town Memory Layer (Beads)

**Source:** Steve Yegge
**Mechanism:** Git-backed universal data plane

```
Gas Town (~/.gt)
├── HQ (town-level management)
├── Rigs (project repos)
│   └── Witness (per-rig observer)
└── Beads (git-backed data plane)
```

**How it works:**
1. Beads provides universal context management
2. Git-backed for versioning
3. ~225K lines of Go
4. Agents read/write through Beads API
5. MCP Agent Mail for inter-agent communication

**Tradeoffs:**
| Pro | Con |
|-----|-----|
| Unified data layer | Massive complexity |
| Git versioning | Steep learning curve |
| Multi-agent ready | Requires Go |
| Production-scale | Stage 7+ only |

---

### Checkpoint: Memory Persistence Patterns
**You should now understand:**
- [ ] All 3 persistence categories: File-Based, Git-Based, External
- [ ] Claude-Mem's 3-layer retrieval: search() -> timeline() -> get_observations()
- [ ] MCP Server state vs plugin state
- [ ] The Ralph Complete Stack (progress.txt + prd.json + git + CLAUDE.md)

**If unclear:** Re-read Sections 2.1-2.4 or explore the specific extraction files referenced

---

## Context Management Patterns

### 3.1 Fresh Context Per Iteration

**The Core Insight:**
> "Context rot: LLMs get stupider with more tokens" - @mattpocockuk

#### Pattern 3.1.1: Ralph's Clean Slate

**Mechanism:** Each iteration spawns NEW Claude instance with NO memory

```bash
while [ $CURRENT_ITERATION -le $MAX_ITERATIONS ]; do
  echo "Starting Ralph iteration $CURRENT_ITERATION"

  # Fresh instance each time
  claude "Review prd.json and progress.txt..."

  CURRENT_ITERATION=$((CURRENT_ITERATION + 1))
done
```

**Why this works:**
- Full context capacity each iteration
- No accumulated confusion
- External files provide continuity
- Quality doesn't degrade over time

**Continuity comes from:**
- Git history
- prd.json
- progress.txt
- The codebase itself

**Tradeoffs:**
| Pro | Con |
|-----|-----|
| No context rot | Re-loading overhead |
| Full capacity | No in-session learning |
| Predictable quality | File coordination required |
| Simple recovery | More iterations needed |

---

#### Pattern 3.1.2: Amp Auto-Handoff

**Source:** Ryan Carson, Amp docs
**Mechanism:** Automatic context handoff at threshold

```json
// ~/.config/amp/settings.json
{
  "amp.experimental.autoHandoff": {
    "context": 90
  }
}
```

**How it works:**
1. Amp monitors context usage
2. At 90% capacity, triggers handoff
3. State serialized to files
4. New context started
5. Continuity through external memory

**Tradeoffs:**
| Pro | Con |
|-----|-----|
| Automatic | Amp-specific |
| Prevents overflow | 90% threshold tuning |
| Seamless | Handoff overhead |
| Preserves quality | Experimental feature |

---

### 3.2 Context Compaction Strategies

#### Pattern 3.2.1: Semantic Compression (Claude-Mem)

**Mechanism:** Claude summarizes sessions into compact representations

```
Raw transcript: ~5000 tokens
Semantic summary: ~50-100 tokens
Compression ratio: 50-100x
```

**How it works:**
1. Capture full session transcript
2. Claude Agent SDK generates summary
3. Key decisions, learnings, patterns extracted
4. Summary stored, raw discarded (or archived)
5. Future sessions get compact context

**What gets preserved:**
- Decisions made and why
- Patterns discovered
- Blockers encountered
- Code locations touched

**Tradeoffs:**
| Pro | Con |
|-----|-----|
| Massive token savings | Lossy by design |
| Semantic relevance | Nuance may be lost |
| Automatic | Compression quality varies |
| Scalable | Requires Claude API |

---

#### Pattern 3.2.2: Auto-Compact (Claude Code Native)

**Source:** @nummanali, CC Mirror
**Mechanism:** Built-in context compaction

> "This is using a new beta feature for Claude Code. Just make sure auto compact is on."

**Critical for:** Long-running orchestration preventing context collapse.

---

#### Pattern 3.2.3: Periodic Progress Pruning

**Mechanism:** Manually archive old progress entries

```markdown
# progress.txt

## Active Context (last 5 iterations)
[Recent learnings here]

## Archived
See progress-archive-2026-01.txt for older entries
```

**When to prune:**
- progress.txt > 50 entries
- Older learnings no longer relevant
- Pattern: Keep recent, archive old
- Never delete - just move

---

### 3.3 Token Optimization

#### Pattern 3.3.1: Subagent Isolation

**Source:** @TendiesOfWisdom, Boris Cherny
**Mechanism:** Expensive operations in subagents protect main context

> "The feedback loop is everything, but put costly tools like browser control in subagents to protect your main context window tokens"

```
Main Agent Context
├── Task coordination
├── High-level decisions
└── Small token footprint

Subagent 1 (Playwright)
├── Browser automation
├── Screenshot analysis
└── Isolated context (not in main)

Subagent 2 (Research)
├── WebSearch results
├── Document parsing
└── Isolated context (not in main)
```

**How it works:**
1. Main agent coordinates
2. Spawns subagent for expensive task
3. Subagent uses its own context
4. Returns only summary to main
5. Main context stays clean

**Token savings:**
- Playwright output: 1000s of tokens → 50-token summary
- WebSearch results: 5000 tokens → 100-token extraction
- File reading: entire file → relevant snippet

---

#### Pattern 3.3.2: Model Stepping

**Mechanism:** Use cheaper models for simple tasks, expensive for complex

```bash
MODELS=("claude-haiku" "claude-sonnet" "claude-opus")
MODEL_INDEX=0

# Start cheap
claude --model ${MODELS[$MODEL_INDEX]} "$task"

# Escalate if needed
if grep -q "NEED_STRONGER_MODEL" output.txt; then
  MODEL_INDEX=$((MODEL_INDEX + 1))
fi
```

**Cost per 1M tokens (approximate):**
| Model | Input | Output |
|-------|-------|--------|
| Haiku | $0.25 | $1.25 |
| Sonnet | $3.00 | $15.00 |
| Opus | $15.00 | $75.00 |

**Use cases:**
| Model | Task |
|-------|------|
| Haiku | File lookup, simple grep |
| Sonnet | Implementation, testing |
| Opus | Architecture, complex reasoning |

---

#### Pattern 3.3.3: PRD Minimalism

**Mechanism:** Keep task definitions compact

**Bad (verbose):**
```json
{
  "id": "US-001",
  "title": "Create the authentication system with all features",
  "description": "As a user, I want to be able to log in securely using my email and password, with proper validation, error handling, session management, remember me functionality, password reset capabilities, and account lockout after failed attempts...",
  "acceptanceCriteria": [
    "User can log in with valid credentials",
    "User sees error with invalid credentials",
    "Session persists across page refreshes",
    "..." // 20 more criteria
  ]
}
```

**Good (minimal):**
```json
{
  "id": "US-001",
  "title": "Add login form",
  "acceptanceCriteria": [
    "Form accepts email/password",
    "npm run typecheck passes"
  ],
  "passes": false
}
```

**Principle:** Split large stories, don't bloat small ones.

---

### 3.4 Context Windowing

#### Pattern 3.4.1: Progressive Detail Loading

**Source:** Claude-Mem 3-layer system
**Mechanism:** Load context from coarse to fine

```
Layer 1: search()        → Compact index, returns IDs only
Layer 2: timeline()      → Chronological snippets
Layer 3: get_observations() → Full details for specific IDs
```

**How it works:**
1. Search returns minimal results (IDs, titles)
2. Agent reviews, picks relevant items
3. Full details loaded only for selected
4. Prevents context flooding

**Key rule:** Always batch IDs in get_observations - never single fetches.

---

#### Pattern 3.4.2: Path-Targeted Rules

**Source:** Claude Code modular rules
**Mechanism:** Rules only load for relevant file paths

```yaml
# .claude/rules/api-routes.md
---
paths:
  - src/api/**
  - src/routes/**
---

# API Development Rules
- Use FastAPI patterns
- Always add OpenAPI docs
- Include rate limiting
```

**How it works:**
1. Claude reads file in `src/api/users.ts`
2. Path matches `src/api/**`
3. `api-routes.md` content injected
4. Other rules NOT loaded
5. Context stays focused

---

## Multi-Agent Memory Patterns

### 4.1 Isolated Domain Memory

**Source:** Panopticon (Molly Cantillon)
**Mechanism:** Each agent owns its directory exclusively

```
~/nox/        → Only NOX agent touches
~/trades/     → Only Finance agent touches
~/health/     → Only Health agent touches
```

**Properties:**
- Zero cross-contamination
- Complete autonomy
- Filesystem as single source of truth
- No coordination protocol needed

---

### 4.2 Shared Memory Coordination

#### Pattern 4.2.1: Shared State Directory

**Mechanism:** Common directory for inter-agent data

```
project/
├── .shared/
│   ├── config.json       # Shared configuration
│   ├── schemas/          # Type definitions
│   └── interfaces/       # Contracts between agents
├── agent-frontend/       # Agent 1's workspace
└── agent-backend/        # Agent 2's workspace
```

**Access rules:**
- Read from .shared/: Any agent
- Write to .shared/: Via handoff protocol only

---

#### Pattern 4.2.2: Task Graph State (CC Mirror)

**Source:** @nummanali
**Mechanism:** Built-in task management with dependencies

```
TaskCreate  → Create with subject, description, criteria
TaskList    → Filter: status='open', no owner, not blocked
TaskGet     → Full context: description, comments, dependencies
TaskUpdate  → Claim, comment, resolve, link references
```

**Dependency management:**
```
addBlocks     → This task blocks another
addBlockedBy  → This task is blocked by another
```

**Output:**
```
☑ #1 Design API architecture
☐ #2 Create project structure
☐ #3 Implement data models
🟠 #4 Implement REST API endpoints (blocked by #3)
🟠 #5 Write integration tests (blocked by #4)
```

---

### 4.3 Handoff Protocols

#### Pattern 4.3.1: File-Based Handoffs

**Mechanism:** Explicit JSON files for agent-to-agent context transfer

```json
// ~/shared/handoff-agent1-to-agent2.json
{
  "from": "agent1",
  "to": "agent2",
  "timestamp": "2026-01-09T10:30:00Z",
  "context": {
    "completed": ["API schema", "Database models"],
    "next_steps": ["Implement REST endpoints"],
    "blockers": [],
    "notes": "Using FastAPI, see docs in /api/README.md"
  }
}
```

**Protocol:**
1. Agent 1 writes handoff file on completion
2. Agent 2 polls or watches for file
3. Agent 2 reads context, deletes/archives file
4. Continues work

---

#### Pattern 4.3.2: Git-Based Handoffs

**Mechanism:** Progress persists in files, git provides context

```
Agent 1 commits → Agent 2 pulls → Sees changes in history
```

**Components:**
- progress.txt entries
- prd.json status
- Git commit messages
- File diffs

---

#### Pattern 4.3.3: MCP Agent Mail

**Source:** Gas Town, github.com/Dicklesworthstone/mcp_agent_mail
**Mechanism:** Email-like interface for agent communication

**Properties:**
- No training needed
- Natural "agent village" behavior
- Async by default
- Human-readable

---

## Memory Hierarchy Patterns

### Four-Tier Claude Code Memory

```
┌─────────────────────────────────────────────────────────────────┐
│ Layer 1: Enterprise Policy                                      │
│ /Library/Application Support/ClaudeCode/CLAUDE.md               │
│ Organization-wide security policies, compliance requirements     │
├─────────────────────────────────────────────────────────────────┤
│ Layer 2: Project Memory                                          │
│ ./CLAUDE.md or ./.claude/CLAUDE.md                               │
│ Architecture decisions, coding standards, team workflows         │
├─────────────────────────────────────────────────────────────────┤
│ Layer 3: Modular Rules                                           │
│ ./.claude/rules/*.md                                             │
│ Path-specific rules with frontmatter targeting                   │
├─────────────────────────────────────────────────────────────────┤
│ Layer 4: Personal + Local                                        │
│ ~/.claude/CLAUDE.md (user global)                                │
│ ./CLAUDE.local.md (project local, gitignored)                    │
│ Agent-specific context, sandbox URLs, test credentials           │
└─────────────────────────────────────────────────────────────────┘
```

**Loading order:** Enterprise → Project → Modular Rules → Personal → Local

**Use cases per layer:**
| Layer | What Goes Here |
|-------|----------------|
| Enterprise | Security policies, compliance, banned patterns |
| Project | Architecture, stack decisions, team conventions |
| Modular Rules | Path-specific patterns (API rules, test patterns) |
| Personal | Global preferences, aliases, style |
| Local | Secrets, sandbox URLs, personal experiments |

---

## Pattern Progression: Simple to Complex

### Stage 1: No Persistence (Default)
```
Session A         Session B
    ↓                 ↓
[Work done]      [Start from scratch]
    ↓                 ↓
[Lost]           [Re-explain everything]
```

**Effort:** Zero
**Best for:** One-off questions, simple tasks

---

### Stage 2: CLAUDE.md Only
```
CLAUDE.md → Session A → Lost
         ↘
           Session B → Uses CLAUDE.md knowledge
```

**Effort:** 5 minutes
**Best for:** Project standards, recurring patterns

---

### Stage 3: Ralph Pattern (Files + Git)
```
prd.json + progress.txt + git
         ↓
    Session 1 → commits + updates files
         ↓
    Session 2 → reads state, continues
         ↓
    Session N → all tasks complete
```

**Effort:** 1 hour setup
**Best for:** Feature development, overnight work

---

### Stage 4: Claude-Mem (Semantic Memory)
```
All sessions → capture → compress → store
                              ↓
Future sessions ← auto-inject relevant context
```

**Effort:** Plugin install + configuration
**Best for:** Long-term projects, multi-session work

---

### Stage 5: Multi-Agent Isolation (Panopticon)
```
~/nox     ~/trades    ~/health    ~/writing
   ↓          ↓           ↓           ↓
Agent 1   Agent 2     Agent 3     Agent 4
   ↓          ↓           ↓           ↓
Own memory  Own memory  Own memory  Own memory
                ↘       ↙
              Handoff files
```

**Effort:** Architecture design + cron setup
**Best for:** Life automation, domain specialists

---

### Stage 6: Orchestrated Multi-Agent (CC Mirror, Gas Town)
```
                Orchestrator
                     │
    ┌────────────────┼────────────────┐
    ↓                ↓                ↓
Worker 1        Worker 2         Worker 3
    ↓                ↓                ↓
Task tool      Task tool        Task tool
    ↓                ↓                ↓
Shared task graph + file-based state
```

**Effort:** Significant architecture
**Best for:** Complex projects, team collaboration

---

### Stage 7+: Agent Factory (Gas Town)
```
Gas Town Factory
├── Mayor (coordination)
├── Deacon (monitoring)
├── Dogs (quality gates)
├── Refinery (task decomposition)
├── Polecats (persistent workers)
├── Crew (ephemeral workers)
└── Beads (git-backed data plane)
```

**Effort:** Stage 7+ dev evolution required
**Best for:** "Superintelligent chimpanzee wrangling"

---

## Tradeoff Matrix

### Memory Pattern Selection

| Pattern | Setup | Token Cost | Persistence | Queryability | Multi-Agent | Best For |
|---------|-------|------------|-------------|--------------|-------------|----------|
| **None** | Zero | Low | None | N/A | No | One-off tasks |
| **CLAUDE.md** | 5 min | Medium | Session | No | Via git | Standards |
| **progress.txt** | 10 min | Low | Permanent | Text search | Manual | Learnings |
| **prd.json** | 30 min | Very Low | Permanent | jq queries | Via git | Task state |
| **Git history** | Built-in | Very Low | Permanent | git log/diff | Natural | Code changes |
| **Worktrees** | 15 min | Very Low | Permanent | Per-worktree | Yes | Parallel work |
| **Claude-Mem** | 30 min | Very Low | Permanent | Semantic | Shared DB | Long projects |
| **Panopticon** | Hours | Low | Permanent | Per-domain | Isolated | Life OS |
| **Gas Town** | Days | High | Permanent | Beads | Full support | Scale |

---

### Context Strategy Selection

| Strategy | When Context Degrades | Token Efficiency | Quality | Complexity |
|----------|----------------------|------------------|---------|------------|
| **Fresh each iteration** | Never (by design) | Medium | Consistent | Low |
| **Auto-handoff (90%)** | At threshold | Medium | Good | Low |
| **Semantic compression** | Gradual | Very High | Variable | Medium |
| **Subagent isolation** | Never (isolated) | Very High | High | Medium |
| **Manual pruning** | When pruned | Medium | Depends | Low |

---

### Multi-Agent Memory Coordination

| Approach | Isolation | Coordination | Conflict Risk | Complexity |
|----------|-----------|--------------|---------------|------------|
| **Separate directories** | Complete | Manual handoffs | None | Low |
| **Git worktrees** | File-level | Git merge | At merge | Medium |
| **Shared state dir** | Partial | Protocol needed | Medium | Medium |
| **Task graph (CC Mirror)** | Logical | Built-in | Low | Medium |
| **Beads (Gas Town)** | Complete | Universal | Low | High |

---

## Pattern Relationships Map

```
                         ┌─────────────────────────┐
                         │     MEMORY PROBLEM      │
                         │  (No persistence)       │
                         └───────────┬─────────────┘
                                     │
              ┌──────────────────────┼──────────────────────┐
              │                      │                      │
              ▼                      ▼                      ▼
     ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
     │  FILE-BASED     │   │   GIT-BASED     │   │   EXTERNAL      │
     │                 │   │                 │   │                 │
     │ • CLAUDE.md     │   │ • Commit history│   │ • Claude-Mem    │
     │ • progress.txt  │   │ • Branches      │   │ • Database      │
     │ • prd.json      │   │ • Worktrees     │   │ • MCP Servers   │
     │ • Filesystem    │   │                 │   │                 │
     └────────┬────────┘   └────────┬────────┘   └────────┬────────┘
              │                      │                      │
              └──────────────────────┼──────────────────────┘
                                     │
                         ┌───────────┴───────────┐
                         │    HYBRID SYSTEMS     │
                         │                       │
                         │ • Ralph (all three)   │
                         │ • Gas Town (Beads)    │
                         │ • Panopticon          │
                         └───────────────────────┘
                                     │
              ┌──────────────────────┼──────────────────────┐
              │                      │                      │
              ▼                      ▼                      ▼
     ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
     │  SINGLE AGENT   │   │  MULTI-AGENT    │   │  ORCHESTRATED   │
     │                 │   │  ISOLATED       │   │  MULTI-AGENT    │
     │ • Fresh context │   │ • Panopticon    │   │ • CC Mirror     │
     │ • File state    │   │ • Worktrees     │   │ • Gas Town      │
     │                 │   │ • Domains       │   │ • Orchestra     │
     └─────────────────┘   └─────────────────┘   └─────────────────┘
```

---

## Implementation Decision Tree

```
START: Do I need persistent memory?
│
├─ NO → Use default Claude Code
│
└─ YES → What kind of persistence?
         │
         ├─ Project knowledge → CLAUDE.md
         │   └─ Team shared? → Git check it
         │   └─ Personal? → CLAUDE.local.md
         │
         ├─ Task state → prd.json
         │   └─ Simple tasks? → Flat JSON
         │   └─ Complex dependencies? → CC Mirror TaskCreate
         │
         ├─ Learnings across iterations → progress.txt
         │   └─ Growing too large? → Periodic archiving
         │
         ├─ Code history → Git (built-in)
         │   └─ Parallel work? → Worktrees
         │
         ├─ Semantic memory → Claude-Mem plugin
         │
         └─ Multi-agent?
             │
             ├─ Isolated domains → Panopticon (directories)
             │
             ├─ Coordinated tasks → CC Mirror
             │
             └─ Factory scale → Gas Town (Stage 7+)
```

---

## Quick Reference: Pattern Commands

### File-Based Memory
```bash
# Create CLAUDE.md
echo "# Project Standards" > CLAUDE.md

# Initialize progress.txt
echo "# Progress - APPEND ONLY" > progress.txt

# Create prd.json
echo '{"userStories": []}' > prd.json
```

### Git-Based Memory
```bash
# Create worktree for parallel agent
git worktree add ../wt-feature feature-branch

# Check worktree list
git worktree list

# Clean up worktree
git worktree remove ../wt-feature
```

### External Memory
```bash
# Install Claude-Mem
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem

# Check web UI
open http://localhost:37777
```

### Ralph Pattern
```bash
# Run Ralph loop
./ralph.sh 25

# Check PRD status
jq '.userStories[] | select(.passes == false)' prd.json

# View recent progress
tail -50 progress.txt
```

---

---

## Troubleshooting

### Common Issue: Context Window Fills Up Too Quickly
**Symptom:** Quality degrades mid-task, agent forgets earlier context
**Cause:** Too much context loaded, or expensive operations in main context
**Fix:**
1. Check your token budget allocation (Section 3 has the framework)
2. Move expensive tools to subagents (Playwright, MCP, large file reads)
3. Use fresh context per iteration (Ralph pattern)
4. Enable auto-compact in CC Mirror
5. Verify CLAUDE.md isn't bloated: `wc -l CLAUDE.md` (should be <500 lines)

### Common Issue: progress.txt Getting Too Large
**Symptom:** Progress file consuming too much context, slowing iterations
**Cause:** Not pruning old learnings
**Fix:**
```bash
# 1. Check current size
wc -l plans/progress.txt
# If > 100 entries, consider archiving

# 2. Archive old entries
head -50 plans/progress.txt > plans/progress-archive-$(date +%Y-%m).txt
tail -50 plans/progress.txt > plans/progress-new.txt
mv plans/progress-new.txt plans/progress.txt

# 3. Keep archive reference in progress.txt
echo "# Older entries archived to progress-archive-*.txt" | cat - plans/progress.txt > temp && mv temp plans/progress.txt
```

### Common Issue: Claude-Mem Not Finding Relevant Context
**Symptom:** Semantic search returns irrelevant results
**Cause:** Query too broad, or observations not properly tagged
**Fix:**
1. Use specific type filters: `search(query="auth bug", type="bugfix")`
2. Always batch IDs in get_observations (never single fetches)
3. Check Chroma DB health: `ls -la ~/.claude-mem/chroma/`
4. Rebuild embeddings if corrupted: reinstall claude-mem plugin

### Common Issue: Git History Not Providing Enough Context
**Symptom:** Future iterations don't understand what was done before
**Cause:** Poor commit messages or missing context in commits
**Fix:**
1. Use meaningful commit messages:
   ```
   feat(US-001): Add user authentication schema

   - Created users table with email, password_hash
   - Added migration for existing data
   - Typecheck passes
   ```
2. Reference story IDs in commits
3. Include "why" not just "what"
4. Commit after each story completion, not in bulk

### Common Issue: Multi-Agent Memory Conflicts
**Symptom:** Agents overwrite each other's state, or miss handoffs
**Cause:** Unclear ownership or timing issues
**Fix:**
1. Use explicit file ownership (each agent owns its directory)
2. Use handoff protocol with timestamps and acknowledgment
3. For shared state, use TaskCreate/TaskUpdate dependencies
4. Consider using file locks for critical sections:
   ```bash
   flock -x /tmp/shared.lock -c "write_to_shared_file"
   ```

---

## Tags

`#taxonomy` `#context-management` `#memory` `#persistence` `#file-based` `#git-based` `#claude-mem` `#fresh-context` `#compaction` `#token-optimization` `#multi-agent` `#orchestration` `#ralph` `#panopticon` `#gas-town` `#claude-md` `#prd-json` `#progress-txt` `#worktrees` `#handoffs`

---

*Taxonomy compiled from exhaustive cross-reference of all extractions in the Claude-Research-And-Tips repository. Patterns represent community best practices as of 2026-01-09.*
*Wave-3 Enhanced: 2026-01-19*

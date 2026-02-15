# Orchestration Approaches — Component Assembly Testing Content

> **Source:** compare-orchestration.md (synthesis/)
> **Track:** Track 1 (Assembly)
> **Purpose:** Test compositional-core component coverage via explicit component mapping
> **Target:** ~2,000 words, 8+ component types, ASSEMBLY-focused structure

---

<!-- COMPONENT: page-header -->
## The Same Goal

**Ship a complete feature autonomously** — from specification to working, tested code — with minimal human intervention.

Each approach below represents a different philosophy for achieving this goal, with distinct tradeoffs in setup complexity, parallelism, and appropriate scale.

---

<!-- COMPONENT: callout (essence) -->
**Essence:** This document compares four orchestration strategies (Basic Ralph, PRD-Ralph, CC Mirror, Gas Town) for running autonomous Claude Code workflows. Use this when deciding HOW to structure your agent automation, not WHAT architecture to use.

---

## Approach Comparison Matrix

<!-- COMPONENT: decision-matrix -->
The following matrix compares four orchestration approaches across key decision factors:

| Factor | Basic Ralph | PRD-Ralph | CC Mirror | Gas Town |
|--------|:-----------:|:---------:|:---------:|:--------:|
| **Setup Complexity** | Easy | Medium | Medium | Hard |
| **Parallelism** | None | None | High | Maximum |
| **Agent Count** | 1 | 1 | 3-8 | 10-50+ |
| **Infrastructure** | Low | Low | Medium | High |
| **Upfront Planning** | Low | High | Medium | Medium |
| **Cost per Day** | $5-20 | $5-20 | $20-80 | $50-200 |
| **Learning Curve** | Low | Low | Medium | High |
| **Debugging Ease** | Easy | Easy | Medium | Hard |
| **Best Project Scale** | Small | Medium | Medium | Large |
| **Human Oversight** | Low | Low | Medium | Low |
| **Flexibility** | High | Low | Medium | High |
| **Quality Gates** | Manual | Criteria | Workers | Dogs |

---

<!-- COMPONENT: section-indicator -->
APPROACH 1: BASIC RALPH

### How it works

<!-- COMPONENT: callout (info) -->
A simple bash loop that runs Claude Code repeatedly with fresh context until a completion condition is met. Each iteration:
1. Reads the current state (prd.json, progress.txt)
2. Works on the next task in the list
3. Commits changes
4. Checks for completion signal
5. Loops or exits

<!-- COMPONENT: code-block -->
```bash
for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  claude "Review prd.json... If complete, output PROMISE COMPLETE HERE"
  if grep -q "PROMISE COMPLETE HERE" output.txt; then break; fi
done
```

<!-- COMPONENT: file-tree -->
**Key Files:**
```
ralph-project/
├── ralph.sh          # The loop script
├── prompt.md         # Instructions for each iteration
├── prd.json          # Task list with user stories
└── progress.txt      # Accumulated learnings
```

<!-- COMPONENT: stats-bar -->
**Pros Summary:**
- Simple to set up — Just a bash script and a few files
- Low overhead — No complex infrastructure or dependencies
- Easy to understand — Anyone can read the code and know what it does
- Fresh context per iteration — Avoids "context rot" from accumulated confusion
- Git history as memory — Each iteration commits, creating implicit documentation
- Verifiable — Tests must pass each iteration, catching regressions early

<!-- COMPONENT: callout (warning) -->
**Cons Summary:**
- Sequential only — One task at a time, no parallelism
- Single agent — No specialization or role separation
- Context amnesia — Each iteration starts fresh (mitigated by progress.txt)
- No dependency management — Tasks must be linearly ordered
- Human-designed task breakdown — Quality depends on PRD quality

<!-- COMPONENT: callout (tip) -->
**Best for:**
- Solo developers working on single features
- Overnight "ship it while I sleep" workflows
- Well-scoped features with clear completion criteria
- Getting started with autonomous development (Stage 1-3)

**Setup Time:** 15-30 minutes

---

<!-- COMPONENT: section-indicator -->
APPROACH 2: PRD-DRIVEN RALPH

### How it works

Extension of basic Ralph that adds structured task management via a JSON-based Product Requirements Document:

<!-- COMPONENT: code-block -->
```json
{
  "name": "Authentication System",
  "stories": [
    {
      "id": "story-1",
      "title": "User can register",
      "acceptanceCriteria": [
        "Email validation works",
        "Password hashed with bcrypt",
        "Confirmation email sent"
      ],
      "passes": false,
      "priority": 1
    }
  ]
}
```

Each iteration:
1. Parse prd.json for next incomplete story (by priority)
2. Implement to meet acceptance criteria
3. Mark story as passed when criteria verified
4. Continue until all stories pass

**Enhanced with quality gates** (Dr. Ralph variant):
- 80%+ confidence threshold before advancing
- Multi-phase verification between stages

<!-- COMPONENT: callout (essence) -->
**Pros Summary:**
- Structured tasks — Clear boundaries between work items
- Acceptance criteria — Explicit success conditions, not just "it works"
- Priority ordering — Most important work happens first
- Measurable progress — Track story completion percentage
- Self-documenting — PRD becomes project history
- Quality gates — Optional confidence thresholds prevent low-quality work
- Compounding learning — progress.txt captures patterns for future iterations

<!-- COMPONENT: callout (gotcha) -->
**Cons Summary:**
- Upfront planning required — Someone must write the PRD first
- PRD quality is critical — Garbage in, garbage out
- Still sequential — Parallelism not improved over Basic Ralph
- Single agent — Still no role specialization
- Rigid structure — Hard to adapt to emergent requirements
- Manual task sizing — Must ensure each story fits in one context window

<!-- COMPONENT: callout (tip) -->
**Best for:**
- Well-defined features with clear requirements
- Teams that already write good specs
- Regulated environments needing documentation
- Features with natural linear dependencies
- Medium-scale projects (Stage 3-5)

**Setup Time:** 1-2 hours (including PRD creation)

---

<!-- COMPONENT: section-indicator -->
APPROACH 3: CC MIRROR HUB-AND-SPOKE

### How it works

Central orchestrator that delegates to specialized worker agents through Claude Code's native Task API. The orchestrator **never writes code** — it coordinates.

<!-- COMPONENT: code-block -->
**Architecture:**
```
                ┌─────────────────┐
                │  Orchestrator   │
                │  (Conductor)    │
                └────────┬────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
         ▼               ▼               ▼
   ┌───────────┐   ┌───────────┐   ┌───────────┐
   │  Coder    │   │  Tester   │   │  Reviewer │
   │  (Opus)   │   │  (Sonnet) │   │  (Haiku)  │
   └───────────┘   └───────────┘   └───────────┘
```

<!-- COMPONENT: callout (challenge) -->
**Orchestrator Philosophy:**
```
╔═══════════════════════════════════════════════════════════════╗
║  YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS.              ║
║  YOU DO NOT EXPLORE CODEBASES.                                ║
║  You are the CONDUCTOR. Your agents play the instruments.     ║
╚═══════════════════════════════════════════════════════════════╝
```

<!-- COMPONENT: table -->
**Tool Ownership:**

| Role | Allowed Tools |
|------|---------------|
| Orchestrator | Read (1-2 files), Task*, AskUserQuestion |
| Workers | Read, Write, Edit, Bash, Glob, Grep, WebFetch, LSP |

**Task Management:**
- `TaskCreate` — Create with subject, description, acceptance criteria
- `addBlocks` / `addBlockedBy` — Dependency management
- Model-appropriate routing (Opus for architecture, Sonnet for code, Haiku for lookups)

<!-- COMPONENT: callout (tip) -->
**Pros Summary:**
- True parallelism — Multiple workers execute simultaneously
- Specialization — Right model for each task type
- Cost optimization — Expensive models only where needed
- Dependency tracking — Built-in blocked/blocking relationships
- Native integration — Uses Claude Code's Task API directly
- Domain reference loading — Specialized context per task type
- Clear separation — Orchestrator thinks, workers do

<!-- COMPONENT: callout (warning) -->
**Cons Summary:**
- More complex setup — Requires understanding task decomposition
- Coordination overhead — Orchestrator context grows with task graph
- Needs good decomposition — Poorly split tasks cause confusion
- Learning curve — Different mental model from solo coding
- Worker isolation — Workers don't see each other's work directly
- Merge complexity — Parallel work may need conflict resolution

<!-- COMPONENT: callout (tip) -->
**Best for:**
- Multi-domain features (frontend + backend + tests)
- Teams wanting cost-optimized model usage
- Interactive development with human oversight
- Medium to large projects (Stage 4-6)
- Features requiring different specializations

**Setup Time:** 1-2 hours

---

<!-- COMPONENT: section-indicator -->
APPROACH 4: GAS TOWN FACTORY

### How it works

Not just agents, but an **agent factory** — a self-managing town of specialized workers that coordinate through inboxes and handoffs.

<!-- COMPONENT: file-tree -->
**Architecture:**
```
Gas Town (~/.gt)
├── HQ (town-level management)
├── Rigs (project repos)
│   └── Witness (per-rig observer)
├── Workers
│   ├── Mayor (town coordination)
│   ├── Deacon (monitoring/handshakes)
│   ├── Dogs (quality gates)
│   ├── Refinery (task decomposition)
│   ├── Polecat (named persistent workers)
│   └── Crew (ephemeral workers)
└── Overseer (YOU - human with inbox)
```

<!-- COMPONENT: table -->
**Role Definitions:**

| Role | Purpose |
|------|---------|
| Mayor | Town-wide coordination, resource allocation |
| Deacon | Monitoring agent health, handshakes between agents |
| Dogs | Quality gates, watchdogs for bad behavior |
| Refinery | Task decomposition into worker-sized chunks |
| Polecat | Named persistent workers with specialization |
| Crew | Ephemeral workers for one-off tasks |
| Witness | Per-project observer, watches for problems |
| Overseer | Human with inbox (you) |

**Communication:** Email-like inboxes via MCP Agent Mail

<!-- COMPONENT: callout (essence) -->
**Philosophy:** "You just make up features, design them, file the implementation plans, and sling work around to your polecats and crew."

<!-- COMPONENT: callout (tip) -->
**Pros Summary:**
- Maximum parallelism — 10+ agents working simultaneously
- Deep specialization — Each role optimized for its function
- Self-improving — Factory learns and adapts over time
- Full team simulation — Approximates human dev team dynamics
- Automatic decomposition — Refinery breaks down work
- Quality built-in — Dogs enforce standards at every step
- Resilient — System continues if individual agents fail
- Persistent workers — Polecats maintain context across sessions

<!-- COMPONENT: callout (gotcha) -->
**Cons Summary:**
- Complex setup — Significant infrastructure to configure
- High overhead — Many agents = many tokens = high cost ($50-200/day)
- Needs scale to justify — Overkill for small features
- Requires experience — Must be comfortable with agent chaos
- Tmux proficiency required — Primary UI is terminal multiplexing
- Debugging difficulty — Hard to trace problems across many agents
- Budget implications — Not for hobby projects

<!-- COMPONENT: callout (tip) -->
**Best for:**
- Large projects with many parallel workstreams
- Teams shipping multiple features simultaneously
- Production environments with high throughput requirements
- Stage 7+ developers (10+ agent experience)
- Organizations with significant AI budget
- Projects where speed-to-market justifies cost

<!-- COMPONENT: callout (caution) -->
**Prerequisites:**
- Extensive multi-agent experience
- Comfort with chaos and emergent behavior
- $50-200/day budget tolerance
- tmux as primary development interface
- Willingness to debug complex agent interactions

**Setup Time:** 4-8 hours (plus learning curve)

---

<!-- COMPONENT: callout (challenge) -->
### Checkpoint: Orchestration Approaches

**You should now understand:**
- [ ] How Basic Ralph uses fresh context per iteration
- [ ] How PRD-Ralph adds structured task management
- [ ] How CC Mirror enables parallel workers with hub-and-spoke
- [ ] How Gas Town creates a full agent factory with specialized roles

**If unclear:** Re-read the "How it works" section for the approach you are considering.

---

<!-- COMPONENT: section-indicator -->
FEATURE COMPARISON

<!-- COMPONENT: table -->
### Context Management

| Approach | Strategy |
|----------|----------|
| Basic Ralph | Fresh context each iteration, git history as memory |
| PRD-Ralph | Fresh context + structured prd.json + progress.txt |
| CC Mirror | Orchestrator accumulates context, workers get task-specific |
| Gas Town | Persistent workers (Polecats) maintain context, Crew ephemeral |

### Error Handling

| Approach | Strategy |
|----------|----------|
| Basic Ralph | Tests must pass, loop continues until success or max iterations |
| PRD-Ralph | Same + acceptance criteria validation |
| CC Mirror | Task dependencies, requeue on failure |
| Gas Town | Dogs catch quality issues, Witness monitors, Deacon coordinates recovery |

### Task Decomposition

| Approach | Responsibility |
|----------|---------------|
| Basic Ralph | Human creates small tasks |
| PRD-Ralph | Human writes detailed PRD with stories |
| CC Mirror | Orchestrator decomposes, routes to workers |
| Gas Town | Refinery automatically decomposes |

### Communication

| Approach | Mechanism |
|----------|-----------|
| Basic Ralph | File-based (progress.txt, git commits) |
| PRD-Ralph | Same + structured prd.json |
| CC Mirror | Task API (TaskCreate, TaskUpdate, dependencies) |
| Gas Town | MCP Agent Mail (inbox-based), file handoffs |

---

<!-- COMPONENT: section-indicator -->
SCALING PATH

<!-- COMPONENT: code-block -->
```
┌─────────────────────────────────────────────────────────────────┐
│                     SCALING PROGRESSION                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   SIMPLE ─────────────────────────────────────────────► COMPLEX  │
│                                                                   │
│   Stage 1-3          Stage 4-5          Stage 6          Stage 7+│
│   ┌─────────┐       ┌─────────┐       ┌─────────┐       ┌───────┐│
│   │ Ralph   │──────►│  PRD    │──────►│CC Mirror│──────►│  Gas  ││
│   │ (Basic) │       │ Ralph   │       │Hub-Spoke│       │ Town  ││
│   └─────────┘       └─────────┘       └─────────┘       └───────┘│
│                                                                   │
│   1 agent           1 agent           3-8 agents        10+ agents│
│   $5/day            $10/day           $50/day           $150/day  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

<!-- COMPONENT: section-indicator -->
SELECTION GUIDE

<!-- COMPONENT: callout (tip) -->
### Start with Basic Ralph when:
- You're new to autonomous development
- The feature is well-scoped and fits in a day
- You want "set it and forget it" overnight shipping
- Budget is a concern
- You value simplicity over parallelism

### Upgrade to PRD-Ralph when:
- You have clear, detailed requirements
- Quality gates matter (regulated environment)
- You want measurable progress tracking
- Tasks have natural linear dependencies
- You're comfortable writing structured specs

### Move to CC Mirror when:
- You need parallelism across domains
- Cost optimization matters (right model for each task)
- Features span frontend + backend + tests
- You want native Claude Code orchestration
- Interactive development with oversight

### Go Gas Town when:
- You're at Stage 7+ (10+ agent experience)
- Project scale justifies the overhead
- Speed-to-market is critical
- Budget is not a constraint
- You're comfortable with emergence and chaos
- You need a self-improving agent factory

---

<!-- COMPONENT: section-indicator -->
HYBRID STRATEGIES

These approaches aren't mutually exclusive. Common combinations:

<!-- COMPONENT: callout (info) -->
### 1. Ralph + Git Worktrees
Run multiple Ralph loops in parallel via worktrees:

<!-- COMPONENT: code-block -->
```bash
for feature in auth payments notifications; do
  git worktree add ../wt-$feature $feature-branch
  (cd ../wt-$feature && ./ralph.sh 20) &
done
wait
```

**Result:** Parallel Ralph without CC Mirror complexity

### 2. CC Mirror by Day, Ralph by Night
- Daytime: Interactive CC Mirror with human oversight
- Overnight: Ralph loops for verified, autonomous work

**Result:** Best of both interaction models

### 3. Gas Town with PRD Discipline
Use Gas Town's Refinery but feed it well-structured PRDs:
- Human writes PRD
- Refinery decomposes into worker tasks
- Polecats execute with acceptance criteria

**Result:** Factory-scale with structured requirements

---

<!-- COMPONENT: section-indicator -->
COST-BENEFIT SUMMARY

<!-- COMPONENT: table -->
| Investment | Basic Ralph | PRD-Ralph | CC Mirror | Gas Town |
|------------|:-----------:|:---------:|:---------:|:--------:|
| Setup Time | 30 min | 2 hrs | 2 hrs | 8 hrs |
| Learning | 1 day | 1 day | 3 days | 1-2 weeks |
| Daily Cost | $5-20 | $10-30 | $30-80 | $50-200 |
| ROI Scale | Small | Medium | Medium | Large |
| Break-even | Immediate | Week 1 | Week 2 | Month 1 |

---

<!-- COMPONENT: callout (essence) -->
## Final Recommendations

1. **Start simple (Basic Ralph)** — Prove autonomous development works for your workflow
2. **Add structure when needed (PRD-Ralph)** — When you want quality gates and tracking
3. **Scale with parallelism (CC Mirror)** — When single-agent becomes a bottleneck
4. **Go full factory (Gas Town)** — Only when scale demands it and budget permits

The best orchestration approach is the simplest one that meets your needs. Complexity has costs — in setup, debugging, and cognitive overhead. Scale up only when the simpler approach demonstrably fails.

---

<!-- COMPONENT: page-footer -->
**COMPONENT COVERAGE ANNOTATIONS:**

Total components mapped: 10 types
- callout (6 instances): essence, info, tip, warning, gotcha, challenge, caution
- code-block (7 instances)
- decision-matrix (1 instance)
- table (6 instances)
- file-tree (2 instances)
- stats-bar (implicit in pros/cons sections)
- section-indicator (10 instances)
- page-header (implicit)
- page-footer (this section)

**ASSEMBLY TESTING NOTES:**
- All components map DIRECTLY to reader needs (explicit vocabulary)
- Zero metaphor derivation required
- Content provides clear semantic signals for component selection
- Tables, code blocks, file trees all have obvious implementations
- Callout semantic variants tested (essence, tip, warning, info, gotcha, challenge, caution)
- Decision matrix tests grid layout component
- Section indicators test metadata typography

**SOURCE PROVENANCE:**
- Original: /Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/synthesis/compare-orchestration.md
- Adaptation: Formalized comparison structure, added explicit component annotations
- Word count: ~2,150 words

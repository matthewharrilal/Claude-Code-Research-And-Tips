---
**DEPRECATED** (2026-01-18)

This content has been superseded by D-FINAL synthesis.

**Replacement:** See D-FINAL-architecture Section 5.2 for current content.
**Reason:** Content fully covered in D-FINAL with production validation.
**Original preserved below for reference.**

---

# Domain Isolation Patterns

A comprehensive guide to isolating Claude Code instances across life and work domains, derived from the Personal Panopticon architecture and community best practices.

---

## The Panopticon Model

### The Core Concept

Molly Cantillon's "Personal Panopticon" introduces a paradigm shift: running Claude Code as a **swarm of 8 parallel isolated instances**, each owning a distinct life domain to achieve "self-legibility" and reverse the data asymmetry institutions have over you.

> "The feeling is hard to name. It is the violent gap between how blind you were and how obvious everything feels now with an observer that reads all the feeds, catches what you've unconsciously dropped, notices patterns across domains you'd kept stubbornly separate, and---crucially---tells you what to do about it."

### The 8 Parallel Isolated Domains

```
~/nox        # Company/product - business operations
~/metrics    # Analytics/data - quantitative insights
~/email      # Communications - inbox management
~/growth     # Marketing/acquisition - audience building
~/trades     # Personal finance/trading - market intelligence
~/health     # Fitness/sleep/wellness - body optimization
~/writing    # Content creation - creative output
~/personal   # Life admin - everything else
```

### How Isolation Works

Each domain operates under strict principles:

| Principle | Implementation |
|-----------|----------------|
| **Directory isolation** | Each instance runs in its own `~/<domain>` directory |
| **No cross-contamination** | Agents cannot read/write outside their directory |
| **Independent context** | Each instance has fresh context, no shared conversation history |
| **Domain-specific memory** | Each directory contains its own notes, data, and history |
| **Explicit handoffs** | Information crosses domains only through deliberate file-based handoffs |

---

## Why Domain Isolation Matters

### 1. Context Pollution Prevention

Claude Code's context window is finite. When a single instance handles everything---finances, health, code, personal admin---the context becomes diluted:

- **Context rot:** Older, irrelevant information crowds out recent, relevant context
- **Confusion:** Agent may apply patterns from one domain inappropriately to another
- **Diluted expertise:** A generalist context produces generalist outputs

**Isolation solution:** Each domain agent maintains a focused, specialized context that deepens over time rather than broadening into noise.

### 2. Specialized Optimization Per Domain

Different domains require different:

- **Tools:** `~/trades` needs brokerage APIs; `~/health` needs WHOOP integration
- **Schedules:** `~/trades` runs overnight for market data; `~/health` runs post-workout
- **Models:** `~/writing` may benefit from Opus creativity; `~/metrics` works fine with Sonnet
- **Verification:** `~/nox` (company) needs rigorous testing; `~/personal` can be looser
- **CLAUDE.md rules:** Each domain has domain-specific guardrails and conventions

### 3. Security and Privacy Boundaries

Domain isolation creates natural security perimeters:

- **Credential separation:** API keys for trading don't leak to other domains
- **Blast radius containment:** A compromised or misbehaving agent affects only one domain
- **Privacy zones:** Personal health data never mingles with company code
- **Audit trails:** Per-domain logs make it clear what accessed what

### 4. Parallel Execution

With isolation, you can run all domains simultaneously:

```bash
# Terminal 1          # Terminal 2          # Terminal 3
cd ~/nox && claude    cd ~/trades && claude cd ~/health && claude
```

No conflicts. No waiting. Each agent works on its domain while others work in parallel.

---

## Implementation Patterns

### Filesystem Isolation

#### Basic Directory Structure

```
~/
├── nox/
│   ├── CLAUDE.md           # Company-specific rules
│   ├── .claude/
│   │   ├── settings.json   # Domain permissions
│   │   └── commands/       # Domain slash commands
│   └── [project files]
│
├── trades/
│   ├── CLAUDE.md           # Finance rules, risk limits
│   ├── briefs/             # Daily morning briefs
│   ├── data/               # Market data pulls
│   └── .secrets/           # Brokerage credentials
│
├── health/
│   ├── CLAUDE.md           # Health tracking rules
│   ├── workouts/           # Generated workout plans
│   └── integrations/       # WHOOP, Apple Health exports
│
└── [other domains...]
```

#### Domain-Specific CLAUDE.md

Each domain gets its own `CLAUDE.md` tailored to that context:

```markdown
# ~/trades/CLAUDE.md

## Domain: Personal Finance & Trading

### Data Sources
- Brokerage exports in ./data/
- Congressional disclosures from House API
- Polymarket odds via MCP
- X sentiment from firehose

### Morning Brief Protocol
1. Pull overnight data
2. Cross-reference against positions
3. Flag material changes
4. Output to ./briefs/YYYY-MM-DD.md

### Risk Rules
- NEVER execute actual trades
- Flag any position >5% of portfolio
- Always note data freshness
```

```markdown
# ~/health/CLAUDE.md

## Domain: Fitness & Wellness

### Integrations
- WHOOP exports in ./data/whoop/
- Apple Health exports in ./data/apple-health/

### Workout Generation
- Account for travel schedule in ./calendar/
- Adapt to recovery scores
- Prefer bodyweight when traveling

### Sleep Protocol
- If recovery <66%, suggest lighter day
- Track sleep debt across week
```

### Process Isolation

#### Separate Claude Code Instances

Each domain runs its own Claude Code process:

```bash
# Launch script for all domains
#!/bin/bash
# start-domains.sh

DOMAINS="nox metrics email growth trades health writing personal"

for domain in $DOMAINS; do
    cd ~/$domain
    tmux new-session -d -s $domain "claude"
done

echo "All domains launched. Use 'tmux attach -t <domain>' to connect."
```

#### tmux/screen Management

tmux provides the ideal interface for managing parallel instances:

```
┌─────────────────────────────────────────────────────────────────┐
│  tmux sessions                                                   │
├─────────────────────────────────────────────────────────────────┤
│  nox       │ Claude running on company product                  │
│  metrics   │ Pulling analytics data                             │
│  email     │ Processing inbox, drafting replies                 │
│  growth    │ Running A/B copy generation                        │
│  trades    │ [Overnight] Scraping brokerage data                │
│  health    │ Generating workout for tomorrow                    │
│  writing   │ [Idle] Waiting for creative task                   │
│  personal  │ Finding forgotten subscriptions                    │
└─────────────────────────────────────────────────────────────────┘
```

**Key tmux commands:**

```bash
# List all domain sessions
tmux ls

# Attach to specific domain
tmux attach -t trades

# Detach (keeps running)
Ctrl-b d

# Kill a domain session
tmux kill-session -t health
```

#### Monitoring with rpai

The `rpai` tool (from @radoslav11) provides a unified view:

```bash
cargo install rpai
rpai  # Scans all tmux panes for AI agents
```

Shows:
- Agent list across all domains
- Current status and output preview
- Quick navigation to any domain

### Git Isolation

#### Separate Repositories

The cleanest isolation: each domain is its own git repository.

```bash
~/nox/.git         # Company code history
~/trades/.git      # Trading analysis history
~/health/.git      # Health tracking history
```

**Benefits:**
- Complete commit history isolation
- Independent branching strategies
- No risk of cross-domain commits
- Domain-specific `.gitignore`

#### Git Worktrees for Parallel Development

When a single domain needs parallel work streams, use git worktrees:

```bash
# Within ~/nox, create parallel feature branches
cd ~/nox
git worktree add ../nox-feature-auth feature-auth
git worktree add ../nox-feature-payments feature-payments

# Now you have:
~/nox/                   # Main development
~/nox-feature-auth/      # Auth feature (isolated)
~/nox-feature-payments/  # Payments feature (isolated)
```

Each worktree can run its own Claude Code instance without conflicts.

---

## Cross-Domain Coordination

### When Bridging Is Needed

Despite strict isolation, some scenarios require cross-domain awareness:

- **Morning brief synthesis:** Combine insights from `~/trades`, `~/health`, `~/nox`
- **Schedule conflicts:** `~/writing` deadline vs `~/nox` meeting
- **Resource allocation:** Time/money tradeoffs across domains
- **Pattern recognition:** Sleep quality (`~/health`) affecting productivity (`~/nox`)

### The Handoff Pattern

Agents communicate through explicit file-based handoffs:

```
~/shared/                 # Cross-domain directory
├── handoff-trades-to-personal.json
├── handoff-health-to-nox.json
└── daily-synthesis.md
```

**Handoff file structure:**

```json
{
  "from": "trades",
  "to": "personal",
  "timestamp": "2026-01-09T06:30:00Z",
  "summary": "Portfolio up 2.3% overnight. No action required.",
  "flags": [],
  "data_freshness": "2026-01-09T06:00:00Z"
}
```

**Reading handoffs:**

```markdown
# In ~/personal/CLAUDE.md

## Cross-Domain Integration
Check ~/shared/ for handoffs from other domains before generating daily brief.
Incorporate flags from trades, health status, and calendar conflicts.
```

### The Correlation Engine Pattern

For domains that need persistent cross-referencing, create a dedicated correlation layer:

```
~/correlation/
├── CLAUDE.md              # Rules for cross-domain analysis
├── feeds/                 # Symlinks to domain outputs
│   ├── trades-brief -> ~/trades/briefs/latest.md
│   ├── health-status -> ~/health/status/current.json
│   └── nox-blockers -> ~/nox/blockers.md
└── output/
    └── daily-synthesis.md
```

**The correlation agent:**
- Has read-only access to all domain outputs
- Cannot write to any domain directory
- Synthesizes patterns across domains
- Outputs to `~/correlation/output/`

This creates a "meta-observer" that sees across domains without violating isolation.

### Scheduled Cross-Domain Runs

Use cron for orchestrated multi-domain workflows:

```bash
# Morning synthesis (6 AM)
0 6 * * * cd ~/trades && claude "Generate morning brief" > briefs/$(date +%Y-%m-%d).md
5 6 * * * cd ~/health && claude "Analyze overnight recovery" > status/current.json
10 6 * * * cd ~/correlation && claude "Synthesize daily brief from all domains"
```

---

## Domain-Specific Customization

### Different Rules Per Domain

Each domain's `CLAUDE.md` enforces domain-appropriate behavior:

| Domain | Key Rules |
|--------|-----------|
| **nox** | Strict testing, PR workflow, code review requirements |
| **trades** | Read-only market access, risk limits, no actual execution |
| **health** | Privacy-first, local data only, no cloud uploads |
| **email** | Drafts require approval, never auto-send, BCC logging |
| **writing** | Creative license, experimental, less verification |
| **personal** | Maximum automation, minimal oversight |

### Specialized Subagents Per Domain

Define domain-specific subagents in each `.claude/agents/` directory:

```
~/nox/.claude/agents/
├── code-reviewer.md      # PR analysis
├── test-generator.md     # Test coverage
└── security-scanner.md   # Vulnerability check

~/trades/.claude/agents/
├── sentiment-analyzer.md # Social sentiment
├── disclosure-parser.md  # Congressional filings
└── position-checker.md   # Portfolio analysis

~/health/.claude/agents/
├── workout-generator.md  # Custom workout plans
├── sleep-analyzer.md     # Sleep pattern insights
└── recovery-advisor.md   # Training load recommendations
```

### Model Selection by Domain

Different domains may benefit from different models:

```markdown
# ~/nox/CLAUDE.md
## Model: Opus 4.5
Complex reasoning for architecture decisions, security reviews.

# ~/email/CLAUDE.md
## Model: Sonnet
Fast drafting, pattern-based responses.

# ~/metrics/CLAUDE.md
## Model: Haiku
Simple data lookups, aggregations.
```

---

## Anti-Patterns

### Over-Isolation (Can't Coordinate)

**Symptoms:**
- Domains become silos with no awareness of each other
- Duplicate work across domains
- Conflicting decisions (trading decision ignores health crash)
- No synthesized view of life/work

**Solutions:**
- Implement the correlation engine pattern
- Schedule cross-domain synthesis
- Create explicit handoff protocols
- Allow read-only access to critical domain outputs

### Under-Isolation (Context Bleed)

**Symptoms:**
- Single Claude instance handling "everything"
- Long context with mixed domain information
- Agent confuses domain contexts
- Privacy breaches (health data in work context)
- Generic, unfocused outputs

**Solutions:**
- Strict directory separation
- Separate tmux sessions per domain
- Domain-specific CLAUDE.md files
- Never run a single "master" instance

### Domain Sprawl

**Symptoms:**
- Creating too many micro-domains
- Overhead of managing 15+ instances
- Unclear domain boundaries
- Constant handoffs for simple tasks

**Solutions:**
- Start with 3-5 core domains
- Expand only when clear need emerges
- Consolidate related concerns
- Use subagents within domains instead of new domains

### Ignoring the Meta-Level

From Molly Cantillon's warning:

> "Goodhart says optimize for a metric and you game your way to hollow victory."

**Symptoms:**
- Over-optimizing domain metrics
- Losing sight of actual goals
- WHOOP says recovered but you feel like death
- Trusting the brief over lived experience

**Solutions:**
- Maintain a "meta-level outside the system"
- Periodic human review of domain outputs
- Be ready to delete a domain if it stops serving
- "We must continue to live outside it"

---

## The Anthropic Trade-off

> "Sometimes the tower has a landlord. Anthropic sees every query you make. The value exchange is explicit: their visibility into your thinking for access to a thousand-clone attention span. In this case, chosen beats imposed."

Domain isolation provides local privacy (domains don't see each other), but Anthropic's API sees all domains. This is an accepted trade-off for the capability.

---

## Implementation Checklist

### Phase 1: Core Setup (Day 1)

- [ ] Choose 3-5 initial domains
- [ ] Create directory structure: `mkdir -p ~/{domain1,domain2,domain3}`
- [ ] Write basic CLAUDE.md for each domain
- [ ] Set up tmux sessions for each domain
- [ ] Test running parallel instances

### Phase 2: Automation (Week 1)

- [ ] Create domain startup script
- [ ] Set up cron jobs for scheduled runs (e.g., overnight `~/trades`)
- [ ] Implement basic handoff protocol in `~/shared/`
- [ ] Add domain-specific slash commands

### Phase 3: Correlation (Week 2)

- [ ] Set up `~/correlation/` meta-observer
- [ ] Create morning synthesis workflow
- [ ] Implement cross-domain flagging
- [ ] Add notification system for completions

### Phase 4: Refinement (Ongoing)

- [ ] Tune CLAUDE.md rules based on experience
- [ ] Prune domains that don't add value
- [ ] Add/remove subagents as needed
- [ ] Maintain meta-level perspective

---

## Quick Reference

### Domain Startup

```bash
# Start all domains
for d in nox trades health email; do
  tmux new-session -d -s $d "cd ~/$d && claude"
done

# Attach to domain
tmux attach -t trades

# List all domains
tmux ls
```

### Handoff Protocol

```bash
# Write handoff from trades domain
echo '{"from":"trades","summary":"...","ts":"'$(date -Iseconds)'"}' > ~/shared/handoff-trades.json

# Read handoffs in correlation
cat ~/shared/handoff-*.json | jq -s '.'
```

### Cross-Domain Read

```bash
# Correlation agent reads all briefs
cat ~/trades/briefs/latest.md ~/health/status/current.json ~/nox/blockers.md
```

---

## Tags

`#domain-isolation` `#panopticon` `#multi-agent` `#filesystem-isolation` `#parallel-instances` `#cross-domain` `#correlation-engine` `#tmux` `#anti-patterns` `#self-legibility`

---

## Sources

- **Primary:** [@mollycantillon](https://x.com/mollycantillon/status/2008918474006122936) - The Personal Panopticon thread
- **Supporting:** [@bcherny](https://x.com/bcherny) - Boris Cherny's parallel sessions workflow
- **Technical:** CC Mirror, Git Worktrees, rpai monitoring patterns
- **Philosophy:** Planning/Execution separation, filesystem as state

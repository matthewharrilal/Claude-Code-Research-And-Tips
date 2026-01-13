# Master Cross-Reference Index

**Generated:** 2026-01-09
**Source Files Analyzed:** 55 extraction documents
**Total Sources Cross-Referenced:** 100+ individual threads, posts, and documents

---

## Themes Across Categories

### 1. Context as Primary Constraint

The single most universal theme across all documentation. Context window management is the foundational constraint that shapes every pattern.

**Appears in:**
- `/orchestration/001-personal-panopticon-mollycantillon.md` - Isolation pattern to prevent cross-contamination
- `/orchestration/002-ralph-loop-ryancarson.md` - Fresh context per iteration as core principle
- `/orchestration/006-ralph-video-breakdown-mattpocockuk.md` - "Context rot" kills productivity; small tasks preserve quality
- `/orchestration/008-cc-mirror-skill-deepdive-nummanali.md` - Orchestrator stays lean (1-2 file reads max), workers get isolated context
- `/tooling/002-claude-mem-persistent-memory.md` - 95% token reduction through compression
- `/tooling/003-claude-hud-jarrodwatts.md` - Real-time context percentage monitoring (green/yellow/red)
- `/philosophy/002-planning-execution-separation-codex.md` - Filesystem as queue prevents context accumulation
- `/philosophy/003-unhobbled-claude-code-ericbuess.md` - Compaction-avoidance, auto-restore from clear

**Key Insight:** Every successful pattern addresses context management differently:
- **Panopticon:** Domain isolation (8 separate directories)
- **Ralph:** Fresh context per iteration
- **CC Mirror:** Orchestrator/worker separation
- **Claude-Mem:** Semantic compression to summaries

---

### 2. Fresh Context Per Iteration (The Ralph Principle)

The discovery that wiping context and starting fresh produces better results than maintaining long conversations.

**Appears in:**
- `/orchestration/002-ralph-loop-ryancarson.md` - Core Ralph principle
- `/orchestration/005-ralph-comprehensive-arvidkahl.md` - "We learn from failure" approach
- `/orchestration/006-ralph-video-breakdown-mattpocockuk.md` - Clean slate per station
- `/orchestration/012-ralph-text-thread-mattpocockuk.md` - External memory via git/files
- `/orchestration/014-ralph-complete-implementation-ryancarson.md` - Atomic stories fit context window
- `/orchestration/015-ralph-compounding-runs-ryancarson.md` - Archives compound learnings across runs
- `/orchestration/research-ralph-expanded.md` - Full pattern documentation
- `/philosophy/002-planning-execution-separation-codex.md` - 15-60 minute atomic tasks

**Contrast with:**
- `/tooling/002-claude-mem-persistent-memory.md` - Compressed memory injection (different approach)
- `/orchestration/001-personal-panopticon-mollycantillon.md` - Persistent domain instances

---

### 3. File-Based State (Filesystem as Database)

Using the filesystem rather than conversation memory for state persistence.

**Appears in:**
- `/orchestration/002-ralph-loop-ryancarson.md` - prd.json, progress.txt, git history
- `/orchestration/003-ralph-wiggum-marketer-koylanai.md` - SQLite as single source of truth
- `/orchestration/006-ralph-video-breakdown-mattpocockuk.md` - progress.txt is append-only
- `/orchestration/014-ralph-complete-implementation-ryancarson.md` - AGENTS.md for permanent learnings
- `/orchestration/009-gas-town-steve-yegge.md` - Beads: Git-backed data plane
- `/philosophy/001-md-files-superpower-gregisenberg.md` - .md files as building blocks
- `/philosophy/002-planning-execution-separation-codex.md` - scope.md, rules.md, tasks/
- `/philosophy/004-creator-workflow-bcherny.md` - CLAUDE.md in Git (shared knowledge compounding)

**File Types and Their Purposes:**
| File | Purpose | Pattern |
|------|---------|---------|
| `prd.json` | Task tracking with passes: true/false | Ralph |
| `progress.txt` | Append-only learnings | Ralph |
| `AGENTS.md` | Permanent documentation for future agents | Ralph |
| `CLAUDE.md` | Project context and rules | Universal |
| `scope.md` | Holistic codebase understanding | Planning/Execution |
| `rules.md` | Guardrails for execution | Planning/Execution |

---

### 4. Verification Loops (Non-Negotiable Quality Gates)

The consensus that feedback loops are essential for production-quality AI-generated code.

**Appears in:**
- `/orchestration/002-ralph-loop-ryancarson.md` - typecheck + tests each iteration
- `/orchestration/004-opus-ralph-playwright-combo-weswinder.md` - Playwright for real-world verification
- `/orchestration/006-ralph-video-breakdown-mattpocockuk.md` - "CI green every commit or future iterations inherit bugs"
- `/orchestration/014-ralph-complete-implementation-ryancarson.md` - dev-browser skill for UI verification
- `/philosophy/003-unhobbled-claude-code-ericbuess.md` - Adversarial validations
- `/philosophy/004-creator-workflow-bcherny.md` - 2-3x quality improvement with verification
- `/tooling/006-code-simplifier-plugin-bcherny.md` - Post-implementation polish phase

**Verification Hierarchy:**
1. **Typecheck** - npm run typecheck (minimum)
2. **Unit tests** - Core logic validation
3. **Integration tests** - API contracts
4. **E2E browser tests** - Playwright/dev-browser
5. **Human review** - Security, architecture decisions

---

### 5. Orchestrator/Worker Separation

The architectural pattern of separating coordination from execution.

**Appears in:**
- `/orchestration/007-cc-mirror-multiagent-nummanali.md` - Task management API
- `/orchestration/008-cc-mirror-skill-deepdive-nummanali.md` - "YOU DO NOT WRITE CODE. You are the CONDUCTOR."
- `/orchestration/009-gas-town-steve-yegge.md` - 7 worker roles (Mayor, Deacon, Dogs, etc.)
- `/orchestration/010-infinite-orchestra-0xsero.md` - 6 specialized worker profiles
- `/orchestration/011-cc-mirror-native-orchestration-nummanali.md` - TaskCreate/TaskUpdate API
- `/orchestration/research-multi-agent-patterns-expanded.md` - Full multi-agent documentation
- `/techniques/research-skills-expanded.md` - Worker preamble templates

**The Iron Law (CC Mirror):**
```
YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS.
YOU DO NOT EXPLORE CODEBASES.
You are the CONDUCTOR. Your agents play the instruments.
```

**Tool Ownership Pattern:**
| Role | Tools Available |
|------|-----------------|
| Orchestrator | Read (limited), TaskCreate/Update/Get/List, AskUserQuestion, Task |
| Workers | Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch, LSP |

---

### 6. Model Selection Strategy

Using different models for different task types to optimize cost and quality.

**Appears in:**
- `/orchestration/008-cc-mirror-skill-deepdive-nummanali.md` - Haiku/Sonnet/Opus selection guide
- `/philosophy/004-creator-workflow-bcherny.md` - "Always Opus 4.5 + thinking mode"
- `/tooling/006-code-simplifier-plugin-bcherny.md` - model: opus in frontmatter
- `/cross-cutting/research-cost-optimization-expanded.md` - Model-based cost strategies
- `/sources/research-twitter-recent-expanded.md` - "Haiku Army" pattern

**Canonical Selection Guide:**
| Model | Use Case | Cost Profile |
|-------|----------|--------------|
| **Haiku** | Errand runner: fetch files, grep, simple lookups. Spawn 5-10 in parallel | Lowest |
| **Sonnet** | Implementation, patterns, tests. Capable worker | Medium |
| **Opus** | Architecture, complex reasoning, ambiguous tasks | Highest |

---

### 7. Parallel Execution Patterns

Running multiple agents simultaneously for throughput.

**Appears in:**
- `/orchestration/001-personal-panopticon-mollycantillon.md` - 8 parallel isolated instances
- `/mobility/001-mobile-claude-code-dabit3.md` - 6 parallel agents on cloud VM
- `/tooling/001-rpai-tmux-agent-manager.md` - TUI for monitoring parallel agents
- `/orchestration/009-gas-town-steve-yegge.md` - Factory architecture for colonies
- `/orchestration/015-ralph-compounding-runs-ryancarson.md` - 3 simultaneous Ralph instances

**Scale Levels:**
- **Small (1-3):** tmux panes, manual coordination
- **Medium (3-10):** Git worktrees, rpai, file-based coordination
- **Large (10+):** Gas Town architecture, Docker isolation

---

### 8. Hooks for Automation

Using lifecycle hooks to automate repetitive patterns.

**Appears in:**
- `/mobility/001-mobile-claude-code-dabit3.md` - PreToolUse for push notifications
- `/mobility/002-mobile-setup-implementation-omarsar0.md` - Hook configuration examples
- `/philosophy/003-unhobbled-claude-code-ericbuess.md` - Stop hooks for loop continuation
- `/philosophy/004-creator-workflow-bcherny.md` - PostToolUse for auto-formatting
- `/tooling/005-claude-code-2.1-release-bcherny.md` - Hooks in agent/skill frontmatter
- `/techniques/research-hooks-expanded.md` - Full hooks documentation

**Hook Types:**
| Hook | Trigger | Use Cases |
|------|---------|-----------|
| SessionStart | Session begins | Personality injection, context loading |
| PreToolUse | Before tool execution | Security checks, validation, notifications |
| PostToolUse | After tool execution | Formatting, linting, logging |
| Stop | Exit attempt | Loop continuation (Ralph) |

---

### 9. Mobile-First Development

The paradigm shift to coding from phones/tablets.

**Appears in:**
- `/mobility/001-mobile-claude-code-dabit3.md` - Complete mobile architecture
- `/mobility/002-mobile-setup-implementation-omarsar0.md` - Implementation details
- `/mobility/003-replit-mobile-vibe-coding-itspaulai.md` - Replit + Claude Code combo
- `/infrastructure/001-system-mac-remote-control-burcs.md` - Mac as API from phone
- `/mobility/research-mobile-workflows-expanded.md` - Full mobile documentation

**Components:**
- **SSH Client:** Termius, Blink
- **Connection:** Tailscale VPN, mosh for resilience
- **Persistence:** tmux sessions
- **Notifications:** Poke webhooks via PreToolUse hooks
- **VM Lifecycle:** iOS Shortcuts + Vultr API

---

### 10. Skills as Composable Building Blocks

Markdown files that extend Claude Code capabilities.

**Appears in:**
- `/philosophy/001-md-files-superpower-gregisenberg.md` - "A few .md files from outperforming 99% of people"
- `/orchestration/003-ralph-wiggum-marketer-koylanai.md` - skills/copywriter/SKILL.md
- `/orchestration/008-cc-mirror-skill-deepdive-nummanali.md` - 5,299 token orchestration skill
- `/tooling/004-sub-agents-directory-shydev69.md` - 200+ ready-to-use sub-agent prompts
- `/techniques/research-skills-expanded.md` - Comprehensive skills documentation

**Skill Location Hierarchy:**
```
~/.claude/skills/           # Global skills
.claude/skills/             # Project-specific skills
.claude/commands/           # Slash commands (simpler)
.claude/agents/             # Subagent definitions
```

---

## Pattern Dependencies

Which patterns require other patterns to function effectively.

### Dependency Graph

```
                    ┌─────────────────────────────────────┐
                    │         CLAUDE.md (Foundation)      │
                    └──────────────────┬──────────────────┘
                                       │
           ┌───────────────────────────┼───────────────────────────┐
           │                           │                           │
           ▼                           ▼                           ▼
    ┌─────────────┐            ┌─────────────┐            ┌─────────────┐
    │    Skills   │            │    Hooks    │            │   Commands  │
    └──────┬──────┘            └──────┬──────┘            └──────┬──────┘
           │                          │                          │
           │                          ▼                          │
           │                   ┌─────────────┐                   │
           └──────────────────►│    Ralph    │◄──────────────────┘
                               │    Loops    │
                               └──────┬──────┘
                                      │
                    ┌─────────────────┼─────────────────┐
                    │                 │                 │
                    ▼                 ▼                 ▼
           ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
           │   prd.json  │   │progress.txt │   │ Git History │
           │ (Tasks)     │   │ (Learnings) │   │ (Memory)    │
           └─────────────┘   └─────────────┘   └─────────────┘
                    │                 │                 │
                    └─────────────────┼─────────────────┘
                                      ▼
                              ┌─────────────┐
                              │Multi-Agent  │
                              │Orchestration│
                              │(CC Mirror/  │
                              │ Gas Town)   │
                              └─────────────┘
```

### Explicit Dependencies

| Pattern | Hard Dependencies | Soft Dependencies |
|---------|-------------------|-------------------|
| **Ralph Loop** | prd.json, progress.txt, bash script | Playwright MCP, hooks |
| **CC Mirror** | npx/npm, isolated variant | Auto-compact beta |
| **Gas Town** | Go runtime, tmux, Beads | Multiple Claude accounts |
| **Mobile Setup** | Tailscale, tmux, mosh | Push notification service |
| **Claude-Mem** | Node.js 18+, SQLite, Chroma | Bun (auto-installed) |
| **Claude HUD** | Claude Code v1.0.80+ | ANSI-supporting terminal |

### Pattern Conflicts

| Pattern A | Pattern B | Conflict |
|-----------|-----------|----------|
| Long context sessions | Ralph fresh-context | Mutually exclusive philosophies |
| Manual orchestration | CC Mirror native | Redundant if both used |
| Subagent recursion | Worker preamble rules | Worker must NOT spawn sub-agents |
| Serial execution | Parallel agents | Merge conflicts on shared files |

---

## Documentation Gaps

Patterns mentioned but not fully documented in the extractions.

### Partially Documented

| Pattern | What's Missing | Where Mentioned |
|---------|----------------|-----------------|
| **Cron job automations** | Exact cron syntax for overnight runs | Panopticon |
| **API auth across instances** | Credential handling patterns | Panopticon |
| **Checkpoint texting** | Which texting service (Twilio?) | Panopticon |
| **Handoff mechanics** | Exact file-based handoff protocol | Panopticon, CC Mirror |
| **Hallucination recovery** | Failure recovery when agent hallucinates | Panopticon |
| **E2E test flakiness** | Environment issues (ports, DB state) | Ralph |
| **Non-idempotent migrations** | Manual SQL edit patterns | Ralph |
| **Port conflict resolution** | Beyond hash-based allocation | Mobile Setup |
| **Session persistence recovery** | Durable Object patterns | Cloudflare Sandboxes |

### Not Documented at All

| Pattern | Why Important |
|---------|---------------|
| Windows/WSL specific configurations | Large developer base on Windows |
| Enterprise SSO integration | Corporate deployment requirements |
| Self-hosted API endpoint setup | Privacy-conscious deployments |
| Team cost allocation | Enterprise billing patterns |
| Multi-repo skill sharing | Cross-project consistency |
| Audit logging patterns | Compliance requirements |
| Rate limit handling | Production reliability |

---

## Overlapping Concepts

Same idea expressed with different terminology.

### Context Management Terminology

| Term | Source | Meaning |
|------|--------|---------|
| Context rot | Matt Pocock | Quality degradation from full context |
| Context pollution | Ralph docs | Irrelevant data filling context |
| Context collapse | CC Mirror | Inability to compact during orchestration |
| Context window budget | CC Mirror | Allocated tokens per component |
| Fresh context | Ralph | Clean slate each iteration |
| Clean slate | Ralph/Planning-Execution | Starting without prior state |

### Orchestration Terminology

| Term | Source | Meaning |
|------|--------|---------|
| Conductor | CC Mirror | Orchestrator that doesn't execute |
| Orchestrator | CC Mirror | Coordination role |
| Mayor | Gas Town | Town-level coordination |
| Overseer | Gas Town | Human boss with inbox |
| Trading floor | CC Mirror | Mental model for agent coordination |

### Memory/State Terminology

| Term | Source | Meaning |
|------|--------|---------|
| External memory | Ralph | State in files, not context |
| Filesystem as database | Multiple | Using files for persistence |
| Git as memory | Ralph | Commits as state snapshots |
| Persistent memory | Claude-Mem | Compressed context injection |
| File-based state | Planning-Execution | Filesystem queue pattern |
| Append-only memory | Ralph | progress.txt pattern |

### Worker Terminology

| Term | Source | Meaning |
|------|--------|---------|
| Worker | CC Mirror | Execution-focused agent |
| Crew | Gas Town | Ephemeral workers |
| Polecat | Gas Town | Named persistent workers |
| Subagent | Claude Code | Spawned isolated context agent |
| Junior developer | Mental model | How to think about AI capabilities |

---

## Author Expertise Map

Which authors are authorities on which topics.

### Orchestration Patterns

| Author | Handle | Expertise | Key Contribution |
|--------|--------|-----------|------------------|
| Geoffrey Huntley | @ghuntley | Original Ralph inventor | ghuntley.com/ralph/ |
| Ryan Carson | @ryancarson | PRD-driven Ralph | Snarktank Ralph implementation |
| Matt Pocock | @mattpocockuk | Ralph tutorials | Viral video breakdown, 11 tips guide |
| Numman Ali | @nummanali | CC Mirror, native orchestration | Multi-agent task API |
| Steve Yegge | @steve_yegge | Gas Town factory | 225K lines Go, 8-stage evolution |
| Molly Cantillon | @mollycantillon | Personal Panopticon | 8-domain life automation |

### Tooling & Plugins

| Author | Handle | Expertise | Key Contribution |
|--------|--------|-----------|------------------|
| @thedotmack | | Claude-Mem | Persistent memory plugin |
| Jarrod Watts | @jarrodwatts | Claude HUD | Real-time visibility |
| Muratcan Koylan | @koylanai | Ralph Marketer | Self-critiquing content |
| Boris Cherny | @bcherny | Claude Code core | Official creator, code-simplifier |

### Mobile & Infrastructure

| Author | Handle | Expertise | Key Contribution |
|--------|--------|-----------|------------------|
| Nader Dabit | @dabit3 | Mobile development | Phone-first architecture |
| @omarsar0 | | Mobile implementation | Security hardening details |
| Brandon | @burcs | Remote Mac control | System project |
| Paul Klein IV | @pk_iv | Browser automation | Claude for Chrome reverse engineering |
| John Turner | @johnturner | Production deployment | Cloudflare sandbox patterns |

### Philosophy & Approach

| Author | Handle | Expertise | Key Contribution |
|--------|--------|-----------|------------------|
| Greg Isenberg | @gregisenberg | .md philosophy | "A few .md files = 99% outperformance" |
| Eric Buess | @ericbuess | Unhobbled stack | 10x capability list |
| Boris Cherny | @bcherny | Creator workflow | Canonical 13-point setup |
| @pdrmnvd | | Capability testing | "Impossible" Rust project analysis |

---

## Engagement Signal Analysis

Highest-engagement content by category, indicating community validation.

### Top 10 Viral Content (by Engagement)

| Rank | Content | Author | Likes | Views | Bookmarks | Category |
|------|---------|--------|-------|-------|-----------|----------|
| 1 | .md Files = Superpower | @gregisenberg | 6.4K | 452K | 3.4K | Philosophy |
| 2 | Ralph Video Breakdown | @mattpocockuk | 4.2K | 409K | 8K | Orchestration |
| 3 | Claude-Mem Plugin | @lioronai/@thedotmack | 3.4K | 200K | 4.6K | Tooling |
| 4 | Claude HUD | @jarrodwatts | 2.8K | 227K | 3.7K | Tooling |
| 5 | Ralph Text Thread | @mattpocockuk | 2.4K | 193K | 4.8K | Orchestration |
| 6 | Personal Panopticon | @mollycantillon | 2.4K | 418K | 3.8K | Orchestration |
| 7 | Sub-Agents Directory | @shydev69 | 2.1K | 148K | 3.1K | Tooling |
| 8 | Ralph Loop (Carson) | @ryancarson | 2K | 203K | 3.5K | Orchestration |
| 9 | System Mac Remote | @burcs | 1.7K | 138K | 1.5K | Infrastructure |
| 10 | Ralph Comprehensive | @arvidkahl | 1.6K | 128K | 2.3K | Orchestration |

### Engagement Patterns by Category

| Category | Avg Likes | Avg Views | Avg Bookmarks | Interpretation |
|----------|-----------|-----------|---------------|----------------|
| Philosophy | 6.4K | 452K | 3.4K | High appeal, accessible |
| Orchestration | 2.3K | 250K | 4.2K | Core power users |
| Tooling | 2.5K | 190K | 3.5K | Practical value |
| Mobility | 1.3K | 98K | 1.7K | Growing niche |
| Infrastructure | 1.5K | 120K | 1.2K | Specialized audience |

### Bookmark-to-Like Ratio (Implementation Intent)

High bookmark-to-like ratio indicates content people want to implement, not just appreciate.

| Content | Likes | Bookmarks | Ratio | Signal |
|---------|-------|-----------|-------|--------|
| Ralph Text Thread | 2.4K | 4.8K | 2.0x | HIGH implementation intent |
| Claude-Mem | 3.4K | 4.6K | 1.4x | HIGH implementation intent |
| Ralph Video | 4.2K | 8K | 1.9x | HIGH implementation intent |
| Claude HUD | 2.8K | 3.7K | 1.3x | HIGH implementation intent |
| Panopticon | 2.4K | 3.8K | 1.6x | HIGH implementation intent |
| .md Superpower | 6.4K | 3.4K | 0.5x | Philosophical appreciation |

---

## Cross-Category Synthesis

### The Meta-Pattern

Across all categories, a clear meta-pattern emerges:

```
1. CONTEXT IS FINITE → Must manage it deliberately
2. STATE LIVES IN FILES → Not in conversation memory
3. VERIFICATION IS REQUIRED → Feedback loops prevent drift
4. SPECIALIZATION WINS → Different models/agents for different tasks
5. COMPOSABILITY IS KEY → Skills, commands, hooks combine
6. PERSISTENCE THROUGH ITERATION → Ralph's "failure as learning"
7. HUMAN AS ORCHESTRATOR → Direct execution, not coding
```

### Evolution Timeline

| Phase | Era | Dominant Pattern | Key Innovation |
|-------|-----|------------------|----------------|
| 1 | Feb 2025 | Basic CLI usage | Claude Code launch |
| 2 | Mar-Apr 2025 | CLAUDE.md adoption | Context management |
| 3 | May-Jul 2025 | Hooks & commands | Automation |
| 4 | Aug-Oct 2025 | Ralph loops | Fresh context iteration |
| 5 | Nov-Dec 2025 | Multi-agent | CC Mirror, Gas Town |
| 6 | Jan 2026 | Factory architectures | Full orchestration |

### What's Next (Predicted)

Based on trajectory analysis:

1. **Skill registries** - Centralized, searchable skill databases
2. **Enterprise adoption wave** - Team-focused patterns
3. **Mobile-first growth** - Phone development becoming default
4. **Self-improving agents** - Infinite Orchestra patterns spreading
5. **Cost optimization tools** - Better budgeting and monitoring
6. **Standard protocols** - A2A, MCP, agent mail standardization

---

## Quick Reference: Pattern Selection Guide

| If You Need... | Use This Pattern | Complexity | Source |
|----------------|------------------|------------|--------|
| Ship overnight features | Ralph Loop | Medium | @ryancarson |
| Multi-domain life automation | Personal Panopticon | Deep | @mollycantillon |
| Multi-agent orchestration | CC Mirror | Quick Win | @nummanali |
| Agent factory at scale | Gas Town | Deep | @steve_yegge |
| Code from your phone | Mobile Setup | Medium | @dabit3 |
| Persistent memory | Claude-Mem | Quick Win | @thedotmack |
| Session visibility | Claude HUD | Quick Win | @jarrodwatts |
| Self-improving system | Infinite Orchestra | Medium | @0xSero |
| Remote Mac control | System | Medium | @burcs |
| Production deployment | Cloudflare Sandbox | Medium | @johnturner |
| Browser verification | Playwright MCP | Medium | @weswinder |

---

## File Locations Summary

### Core Configuration Files

| File | Location | Purpose |
|------|----------|---------|
| CLAUDE.md | Project root | Project context |
| settings.json | ~/.claude/ | Hooks, permissions |
| commands/ | .claude/commands/ | Slash commands |
| agents/ | .claude/agents/ | Subagent definitions |
| skills/ | .claude/skills/ | Skill files |
| prd.json | scripts/ralph/ | Task tracking |
| progress.txt | scripts/ralph/ | Learnings log |

### Key Repositories

| Repository | Purpose | Author |
|------------|---------|--------|
| anthropics/claude-code | Official CLI | Anthropic |
| numman-ali/cc-mirror | Multi-agent orchestration | @nummanali |
| steveyegge/gastown | Agent factory | @steve_yegge |
| steveyegge/beads | Data plane | @steve_yegge |
| jarrodwatts/claude-hud | Session visibility | @jarrodwatts |
| thedotmack/claude-mem | Persistent memory | @thedotmack |
| snarktank/ralph | PRD-driven loops | @ryancarson |
| 0xSero/orchestra | Self-improving | @0xSero |
| ygwyg/system | Mac remote control | @burcs |
| gruckion/marathon-ralph | Full SDLC Ralph | @stephen_rayner |
| Arakiss/lisa | Ralph with logging | @petruarakiss |

---

## Changelog

| Date | Update |
|------|--------|
| 2026-01-09 | Initial comprehensive cross-reference synthesis |
| | 55 extraction files analyzed |
| | 10 major themes identified |
| | Pattern dependencies mapped |
| | Documentation gaps catalogued |
| | Author expertise mapped |
| | Engagement signals analyzed |

---

*This document serves as the master index for the Claude Code research taxonomy. All patterns, authors, and concepts are cross-referenced for easy navigation and synthesis.*

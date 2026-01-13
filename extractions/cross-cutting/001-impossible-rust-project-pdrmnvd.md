# "Impossible" Rust Project - Claude 4.5 Opus Capability Showcase

## Source
- **Author:** @pdrmnvd (pedram.md) - Anthropic engineer (antislop engineering & education tools)
- **Date:** 2026-01-03
- **URL:** https://x.com/pdrmnvd/status/2007527103546470700
- **Article:** https://x.com/i/article/2007523264143482880
- **Repo:** https://github.com/PedramNavid/petit

---

## Core Insight

> "I still think the best way to understand these models is to keep throwing harder and harder problems at it"

> "have not experienced a model being able to be this hands off on a non-trivial project that isn't just a crud app before"

An Anthropic engineer threw what he considered an "impossible" coding problem at Claude 4.5 Opus via Claude Code - and it succeeded with surprisingly little hand-holding.

---

## The Project: petit

A lightweight, embedded-friendly task orchestrator in Rust:

### Features
- **Jobs** = sets of tasks with intra- & inter-job dependencies
- **SQLite** for storing task outputs
- **Retries** with configurable policies
- **Lifecycle event subscriptions**
- **Concurrency controls**
- **REST API** for external triggering
- Designed for **low-resource/embedded environments** (e.g., Raspberry Pi cluster)

### Why Rust?
- Much harder than typical web languages
- Previous model generations "would be pretty bad" at Rust
- Better difficulty discriminator than web/CRUD apps

---

## Evidence Provided

- **Public GitHub repo** with commits/PRs/issues created mostly by the model
- First time author saw a model stay "hands-off" on something beyond basic CRUD
- Real, working software - not a toy demo

---

## Mental Model

> Think of frontier coding models (especially Opus 4.5) as **capable junior-to-mid-level engineers** who can own meaningful chunks of real software projects when given good tools (Claude Code), a quiet environment, and the freedom to iterate — rather than as prompt-responsive code completers.

### Key Principles

1. **Scale difficulty aggressively** to discover true capability ceiling
2. **Minimize intervention** → let the model fail, self-correct, use tools naturally
3. **Non-CRUD + systems languages (Rust)** = much better difficulty discriminator

---

## Setup & Tools Used

| Component | Role |
|-----------|------|
| Claude 4.5 Opus | Model |
| Claude Code | Agentic coding environment |
| GitHub | Model created PRs, issues, commits |
| Worktree/subagent patterns | Autonomous work |
| GH tool integration | Direct repo interaction |

---

## What This Demonstrates

### Capability Jump
```
Previous Models          →    Claude 4.5 Opus
──────────────────────────────────────────────
Struggled with Rust           Handles complex Rust
CRUD apps only                Systems programming
Heavy hand-holding            Minimal intervention
Code completion               Project ownership
```

### The "Quiet Capability Explosion"
> 2025-2026 saw the jump from "good at leetcode" → "can own real multi-day projects" happen faster than most expected

---

## Related Examples

- **IronDuck:** DuckDB → Rust port attempt - https://github.com/djayatillake/ironduck
- **METR evaluations:** 50% success @ ~5 hour horizon
- **5-hour autonomous feature implementations** (other viral Claude 4.5 feats)

---

## Caveats & Gotchas

| Caveat | Notes |
|--------|-------|
| Single anecdote | Not a benchmark, one (strong) data point |
| Environment dependent | Success relies on Claude Code + recent model jump |
| Rate limits | Painful for heavy users (mentioned in discourse) |
| Edge case fragility | Model can be "fast but fragile" on hardest cases |

---

## How to Replicate

### Requirements
1. Claude Code access
2. Comfort letting models run autonomously for hours
3. Genuinely difficult, well-scoped project
4. Willingness to watch/debug model-created PRs

### Approach
1. Define a hard, non-CRUD problem
2. Set up Claude Code environment
3. Let the model iterate with minimal intervention
4. Review PRs/commits as they come
5. Only intervene when truly stuck

---

## Follow-Up Questions

1. Exact initial prompt/spec - how much architecture human vs model?
2. Hours / model turns / token usage for the whole project?
3. What broke most often when previous models tried Rust?
4. Reproducibility on other hard Rust/systems projects?
5. Comparison to other labs' top models on same challenge?

---

## Synthesis Hooks

**Combines well with:**
- Subagents + worktrees
- Long-running autonomous coding loops
- METR-style long-horizon evals

**Part of larger pattern:**
This represents the 2025-2026 capability jump where agentic coding models went from "can do leetcode" to "can own multi-day real projects" - a phase transition in usefulness.

---

## Why This Matters

This is an Anthropic engineer's personal "oh shit" moment watching the model exceed his own expectations. When insiders are surprised, that's a credible signal of real progress.

The repo exists. The commits are public. The code works.

---

## Actionability

🟡 **Medium Lift** - Requires Claude Code access, comfort with autonomous runs, and a genuinely difficult project to test

---

## Tags
`#cross-cutting` `#capability-showcase` `#rust` `#opus-45` `#agentic-coding` `#systems-programming` `#anthropic-insider` `#autonomous`

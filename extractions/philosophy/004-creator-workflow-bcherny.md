---
## D-FINAL Connection

**This foundational content contributed to:**
- D-FINAL-mental-models.md: Model 4 (Verification as Trust Boundary), Model 10 (Simplicity Compensates), Model 9 (Learning Must Compound)
- D-FINAL-architecture.md: Complexity Ladder Level 1 (Vanilla baseline), Verification Infrastructure

**Core principles derived:**
- "My setup might be surprisingly vanilla" - simplicity as design philosophy
- Verification feedback loop = 2-3x quality improvement
- CLAUDE.md as institutional memory, git-checked, compounds over time
- "Plan deeply -> execute shallowly"
- PostToolUse hooks for verification (npm run typecheck && npm test)

**Universal Truth contribution:**
- Verification Non-Negotiable (Invariant #4) directly sourced from Boris

**Journey references:**
- journey-mental-models.md#verification-trust
- journey-architecture.md#vanilla-baseline

**Last enhanced:** 2026-01-18 (Phase 2B)

---

# The Creator's Workflow - Boris Cherny's Claude Code Setup

## Source
- **Author:** @bcherny (Boris Cherny) - **Creator & Head of Claude Code at Anthropic**
- **Date:** 2026-01-02
- **URL:** Post ID 2007179832300581177
- **Engagement:** 50K+ likes, 700K+ views
- **Significance:** Canonical reference from Claude Code's creator

---

## Core Insight

> "I'm Boris and I created Claude Code. [...] My setup might be surprisingly vanilla!"

> "Each person on the Claude Code team uses it very differently."

---

## The 13-Point Workflow

### 1. Parallel Sessions
- **5 parallel terminal Claudes** + notifications
- **5-10 web sessions** + handoff via `--teleport`
- Mobile starts for on-the-go ideation

### 2. Model Choice
- **Always Opus 4.5 + thinking mode**
- Best tool use
- Less steering required
- Slower but wins long-term

### 3. Shared Knowledge (CLAUDE.md)
- **Single shared CLAUDE.md in git**
- Updated frequently
- Enforced via PR tags / GitHub action
- Compounds knowledge across team/time

### 4. Plan Mode Workflow
- **Start PRs in Plan mode** → refine
- **Switch to auto-accept** for 1-shot execution
- Plan deeply → execute shallowly

### 5. Slash Commands
- For **inner loops** (repeated workflows)
- Example: `/commit-push-pr` with inline bash pre-compute
- Git-checked in `.claude/commands/`

### 6. Subagents
- For **outer workflows**
- Examples: `code-simplifier`, `verify-app`
- Markdown files in `.claude/agents/`

### 7. Hooks
- **PostToolUse hook** for final formatting
- Example: Run `black $CLAUDE_FILE_PATHS` after Edit|Write

### 8. Permissions
- `/permissions whitelist` instead of dangerous skip
- Avoid reckless permission grants

### 9. Tool Integrations (MCP)
- Claude uses Boris's tools:
  - Slack MCP
  - BigQuery
  - Sentry

### 10. Long Tasks
- Background verification agent
- Stop hook
- **ralph-wiggum plugin** + sandbox skip

### 11. Verification (Most Important)
> "Verification feedback loop → 2-3× quality"

- Chrome extension UI tests
- Bash scripts
- Mobile simulators
- **Non-negotiable for production quality**

---

## The Mental Model

> Think of Claude Code as a **compounding system** — not a one-shot tool, but an evolving teammate. Invest in memory (CLAUDE.md), automation (slash/subagents/hooks), verification loops, and parallelism to create exponential returns over time.

### Key Principles

1. **Vanilla first** - customize only where it hurts
2. **Feedback loops > perfect first drafts**
3. **Shared, git-checked knowledge compounds** across team/time
4. **Plan deeply → execute shallowly**
5. **Verification is non-negotiable** (2-3× quality)

---

## File Locations

```
.claude/
├── settings.json      # Hooks & permissions
├── commands/          # Slash commands (git-checked)
│   └── commit-push-pr.md
└── agents/            # Subagents (Markdown files)
    ├── code-simplifier.md
    └── verify-app.md

CLAUDE.md              # Shared knowledge (git root)
```

---

## Configuration Patterns

### PostToolUse Hook Example
```json
{
  "hooks": {
    "PostToolUse": {
      "matcher": "Edit|Write",
      "command": "black $CLAUDE_FILE_PATHS"
    }
  }
}
```

### Permissions Approach
- Use whitelist, not skip
- Example: `/permissions add Bash:npm*`

---

## Verification Infrastructure

The **most important** part of Boris's workflow:

| Tool | Purpose |
|------|---------|
| Chrome extension | UI tests for web apps |
| Bash scripts | Automated checks |
| Mobile simulators | iOS/Android verification |
| Background agent | Continuous verification |

> "Generic bash tests insufficient for UI/mobile" - domain-specific verification required

---

## Key Links

- **Terminal notifications:** https://code.claude.com/docs/en/terminal-config#iterm-2-system-notifications
- **CLAUDE.md docs:** https://code.claude.com/docs/
- **GitHub action:** `/install-github-action` (in-tool)
- **ralph-wiggum plugin:** Available via plugin system

---

## Follow-Up: code-simplifier Plugin

Boris later open-sourced the team's code-simplifier agent (Jan 9, 2026):

```bash
claude plugin install code-simplifier
```

Purpose: Post-PR cleanup and simplification

---

## Caveats & Gotchas

| Issue | Mitigation |
|-------|------------|
| CLAUDE.md bloat | Keep minimal, periodically prune |
| Large contexts | Compaction can lose nuance; manual reflection |
| Heavy parallelism | Requires notifications + discipline |
| Verification specificity | Domain-specific tests needed |
| Permission temptation | Whitelist > skip |

---

## Actionability Ladder

### Quick Wins (< 5 min)
- Add CLAUDE.md
- One slash command
- Verification bash script

### Medium Lift (hours)
- Subagents setup
- Hooks configuration
- Parallel session workflow

### Deep Investment (weeks)
- Full verification infra (Chrome/simulator)
- Team enforcement via GitHub action
- Compounding knowledge system

---

## The Agentic Dev Loop

```
Plan (Opus thinking mode)
     ↓
Code (auto-accept execution)
     ↓
Simplify (code-simplifier agent)
     ↓
Verify (Chrome/bash/simulator)
     ↓
Commit (slash command)
     ↓
[Loop or Ship]
```

---

## Related Concepts

**Builds on:**
- Git hygiene
- Prompt engineering
- Agentic patterns (Plan → Act → Verify)

**Enables:**
- 100% AI-contributed code (Boris claimed this)
- Team knowledge compounding
- Overnight autonomous work

**Similar to:**
- Dan Shipper's Compounding Engineering
- Aider/Cursor multi-agent flows
- Ralph Wiggum autonomous looping

---

## Follow-Up Questions

1. Exact Markdown prompt for code-simplifier agent?
2. Multi-repo sharing pattern for commands/skills/CLAUDE.md?
3. Connecting Claude Code to mobile emulators/Appium?

---

## The Bottom Line

> "Start with verification loops + a simple CLAUDE.md — that's where most of the magic happens."

This thread is the **canonical Claude Code workflow bible** as of early 2026, direct from the creator.

---

## Actionability

🟡 **Medium Lift** - Core ideas quick, deep compounding takes weeks

---

## Tags
`#philosophy` `#canonical` `#creator-workflow` `#verification` `#claude-md` `#hooks` `#subagents` `#parallel-sessions` `#compounding` `#bcherny`

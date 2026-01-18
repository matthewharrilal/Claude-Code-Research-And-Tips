# Gas Town - Factory for Coding Agents

---
## D-FINAL Connection

**This source contributed to:**
- D-FINAL-architecture.md: Section 2.4 (Gas Town core concepts, 8 stages, philosophy)

**Coverage in D-FINAL:** 95%
**High-value unique content:** Core concepts fully incorporated; this is the canonical Gas Town source

**Journey references:**
- synthesis/mastery-ralph-complete.md#scaling-to-gas-town
- html-site/patterns/orchestration/gas-town.html

**Last enhanced:** 2026-01-18 (Phase 2B)

---

## Source
- **Author:** @steve_yegge (Steve Yegge) - 40-year veteran, ex-Google/Amazon/Sourcegraph
- **Date:** 2026-01-05
- **URL:** https://x.com/steve_yegge/status/2008002562650505233
- **Articles:**
  - medium.com/@steve-yegge/the-future-of-coding-agents
  - medium.com/@steve-yegge/welcome-to-gas-town
- **Repo:** github.com/steveyegge/gastown
- **Engagement:** 252 likes, 32K views

---

## Core Insight

> "Claude Code is the world's biggest fuckin' ant. Everyone is focused on making their ant run longer... when nature prefers colonies."

Gas Town is a **factory for agents**, not a better single agent.

---

## The 8 Stages of Dev Evolution

| Stage | Description |
|-------|-------------|
| 1 | Zero/near-zero AI |
| 2 | Agent in IDE, permissions on |
| 3 | Agent in IDE, YOLO mode |
| 4 | Agent fills screen, code is just diffs |
| 5 | CLI single agent, YOLO |
| 6 | CLI multi-agent (3-5 parallel) |
| 7 | 10+ agents, hand-managed |
| **8** | **Building your own orchestrator** |

**Gas Town is for Stage 7+.** If you're not there, you'll get your face ripped off by superintelligent chimpanzees.

---

## Architecture

### The Town (~/.gt)
- HQ repo managing all rigs
- `gt` binary orchestrates everything

### Rigs
- Each project repo under management
- `gt rig add <repo>`

### 7 Worker Roles

| Role | Function |
|------|----------|
| **Mayor** | Town-level coordination |
| **Deacon** | Monitoring/handshakes |
| **Dogs** | Quality gates/watchdogs |
| **Refinery** | Task decomposition |
| **Polecat** | Named persistent workers |
| **Witness** | Per-rig observer |
| **Crew** | Ephemeral workers |
| **Overseer (YOU)** | Human boss with inbox |

---

## Key Concepts

### Vibe Coding Philosophy
> "Work becomes fluid, an uncountable that you sling around freely, like slopping shiny fish into wooden barrels at the docks."

- Some bugs fixed 2-3 times
- Some fixes get lost
- **Focus: THROUGHPUT** not perfection
- You're a **Product Manager**, Gas Town is an **Idea Compiler**

### Beads Integration
Gas Town runs on Beads (github.com/steveyegge/beads):
- Git-backed data plane
- Universal context management
- ~225K lines of Go, vibe-coded

### MCP Agent Mail
Agents collaborate via email-like interfaces:
- No training needed
- Natural "agent village" behavior
- github.com/Dicklesworthstone/mcp_agent_mail

---

## Why Go?

Steve's findings from ~1M lines vibe-coded in 2025:

| Language | Issue |
|----------|-------|
| **TypeScript** | 1/3 to 1/2 of diffs are type wrestling |
| **Python** | "Fine" but feels like scripts |
| **Go** | "Boring" = evolutionary advantage. Diffs are understandable. |

> "Go is just… good. It's boring. You can always understand it!"

---

## Warnings (From the Author)

1. **Code is 3 weeks old** - "smuggled 400 miles upriver in my ass"
2. **100% vibe-coded** - Steve has never looked at the code
3. **Expensive as hell** - Multiple Claude accounts needed
4. **Requires tmux** - Primary UI
5. **Can wreck your shit** - Chimps rip faces off

> "If you have any doubt whatsoever, then you can't use it."

---

## Thread Gold: Community Extensions

**@TRIBE-INC - GUI (Age of Empires style)**
github.com/TRIBE-INC/gtgui

**@mjtechguy - Roughneck (run multiple Gas Towns)**
github.com/mjtechguy/roughneck

**@Esteban_Puerta9 - Station (Nats-based alternative)**
github.com/cloudshipai/station

**@nummanali - Tutorial skill**
```bash
/plugin marketplace add numman-ali/n-skills
/plugin install gastown@numman-ali/n-skills
```

---

## Free Upgrades Coming

1. **Models get smarter** - Opus 4.5 already handles roles well
2. **Gas Town in training corpus** - Agents will know it by summer
3. **Agents compete on factory support** - Automation hooks coming
4. **Community going nuts** - 50+ PRs in first weekend

---

## Commands

```bash
# Install
go install github.com/steveyegge/gastown/cmd/gt@latest

# Initialize town
gt init

# Add rig
gt rig add <repo-path>

# Launch roles
gt mayor up
gt refinery up beads
gt polecat up beads alice
```

---

## Mental Model

> "Gas Town is an Idea Compiler. You just make up features, design them, file the implementation plans, and sling work around to your polecats and crew."

**Key shift:** Human as Product Manager, not coder.

---

## Actionability

🔴 **Deep Dive** - Stage 7+ only, expensive, chaotic

### Don't Use If:
- You're not comfortable with chaos
- You care about costs
- You're below Stage 6 in dev evolution
- You want polish

---

## Related

- **Beads:** github.com/steveyegge/beads (data plane)
- **MAKER problem:** Gas Town solves million-step tasks trivially
- **Desire Paths:** UX approach—watch what agents try, make it real

---

## Tags
`#orchestration` `#gas-town` `#agent-factory` `#vibe-coding` `#deep-dive` `#multi-agent` `#beads` `#tmux`

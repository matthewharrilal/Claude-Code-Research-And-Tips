# New Voices in Advanced AI Agent Engineering

## Source
- **Research Date:** 2026-01-10
- **Type:** Discovery research for frontier practitioners
- **Focus:** Finding advanced practitioners beyond known names

---

## D-FINAL Connection

**Sources contributed to:** All D-FINAL files
**Last enhanced:** 2026-01-18 (Phase 2B)

---

## Executive Summary

This report identifies 10 practitioners doing cutting-edge multi-agent work with Claude Code who are thinking at the architecture level, not just basic usage.

**Known voices (already captured):** Steve Yegge, Boris Cherny, Ryan Carson, Matt Pocock, Nader Dabit, Molly Cantillon, Geoffrey Huntley

---

## Tier 1: Architecture-Level Thinkers

### 1. Reuven Cohen (@ruvnet)
**Handle:** [GitHub: ruvnet](https://github.com/ruvnet) | [claude-flow](https://github.com/ruvnet/claude-flow)

**Background:** Independent AI consultant working with Fortune 500 companies. Self-described "Agentic Engineer / aiCTO / Vibe Coach." Claims to have produced close to 10 million lines of AI-assisted code in a year.

**Unique Contribution:** Created **Claude-Flow** (11.3k stars), the leading agent orchestration platform for Claude. Features:
- Hive-Mind Swarm Intelligence with queen-led AI coordination
- AgentDB + ReasoningBank hybrid memory system with 96x-164x faster vector search
- 25 Claude Skills and 100+ MCP Tools for swarm orchestration
- Native Claude Code support via MCP protocol

**What Makes It Frontier:** Building **infrastructure for agent swarms**, not just agents. The "hive mind" architecture with queen/worker paradigm is novel.

**Key Content:**
- [Claude-Flow Repository](https://github.com/ruvnet/claude-flow)
- [Agentic-Flow](https://github.com/ruvnet/agentic-flow) - Deploy Claude Code agents to production

---

### 2. Numman Ali (@nummanali)
**Handle:** [Twitter/X: @nummanali](https://x.com/nummanali) | [GitHub: numman-ali](https://github.com/numman-ali)

**Background:** Developer specializing in unlocking hidden Claude Code capabilities.

**Unique Contribution:** Created **CC Mirror** - discovered and enabled Claude Code's **hidden multi-agent orchestration system** that was built but disabled in the official codebase.

**What Makes It Frontier:** Reverse-engineering Anthropic's own internal tooling. The official Claude Code codebase contains a complete multi-agent system with Fan-Out, Pipeline, and Map-Reduce patterns.

**Key Content:**
- [CC Mirror Repository](https://github.com/numman-ali/cc-mirror)
- [Viral Twitter thread](https://x.com/nummanali/status/2007768692659015877) (53.5K views)
- [openskills](https://github.com/numman-ali/n-skills) - Universal skills loader (4.4k stars)

---

### 3. Kieran Klaassen (@kieranklaassen)
**Handle:** [Twitter/X: @kieranklaassen](https://x.com/kieranklaassen) | [Creator Economy](https://creatoreconomy.so)

**Background:** Founder of Cora (AI email assistant). Featured on "Every" podcast.

**Unique Contribution:** Coined **"Compound Engineering"** - the methodology for managing teams of AI agents. "Two engineers producing the output of fifteen."

**What Makes It Frontier:** Thinking about AI agents from an **engineering management perspective**. "You have to unlearn how you code and think more like an engineering manager or tech lead."

**Key Content:**
- [Full Tutorial: Build an App with Multiple AI Agents](https://creatoreconomy.so/p/full-tutorial-build-an-app-with-multiple)
- [Compound Engineering article on Every](https://every.to/chain-of-thought/compound-engineering-how-every-codes-with-agents)

---

## Tier 2: Production Infrastructure Builders

### 4. Seth Hobson (wshobson)
**Handle:** [GitHub: wshobson](https://github.com/wshobson)

**Background:** Developer with expertise in financial analysis and AI systems.

**Unique Contribution:** Created the **most comprehensive agent ecosystem**: 99 specialized AI agents, 15 multi-agent workflow orchestrators, 107 agent skills, and 71 development tools organized into 67 focused plugins.

**What Makes It Frontier:** A **complete organizational structure** for AI development teams. Coordinates workflows like: backend-architect -> database-architect -> frontend-developer -> test-automator -> security-auditor.

**Key Content:**
- [wshobson/agents Repository](https://github.com/wshobson/agents)
- [wshobson/commands](https://github.com/wshobson/commands) - Production-ready slash commands

---

### 5. nwiizo
**Handle:** [GitHub: nwiizo](https://github.com/nwiizo) | [crates.io: ccswarm](https://crates.io/crates/ccswarm)

**Background:** Rust developer focused on high-performance systems.

**Unique Contribution:** Created **ccswarm** - multi-agent orchestration built with **Rust-native patterns**. Uses zero-cost abstractions, type-state patterns, and channel-based communication. ~70% memory reduction vs alternatives.

**What Makes It Frontier:** **Systems programming rigor** applied to agent orchestration. Type-state pattern for agent lifecycle management is architecturally novel.

**Key Content:**
- [ccswarm Repository](https://github.com/nwiizo/ccswarm)
- Multi-Agent Message Bus with native coordination

---

### 6. Brandon J. Redmond (@bredmond1019)
**Handle:** [DEV.to: bredmond1019](https://dev.to/bredmond1019) | [learn-agentic-ai.com](https://learn-agentic-ai.com)

**Background:** AI Engineer & Agentic Systems Architect. Has "built and deployed multi-agent systems processing millions of requests."

**Unique Contribution:** Comprehensive **educational series** on multi-agent orchestration, including Rust SDK for Claude Code with event sourcing.

**What Makes It Frontier:** Bridging education and production. His series covers architecture patterns, real-time monitoring, and conflict resolution.

**Key Content:**
- [Multi-Agent Orchestration Series](https://dev.to/bredmond1019/multi-agent-orchestration-running-10-claude-instances-in-parallel-part-3-29da)
- [Claude Code SDK for Rust](https://dev.to/bredmond1019/a-claude-code-sdk-for-crustaceans-3h7p)

---

## Tier 3: Deep Technical Analysts & Tool Builders

### 7. Robert Matsuoka
**Handle:** [Hyperdev Newsletter](https://hyperdev.matsuoka.com)

**Background:** Technology writer/developer covering agentic coding tools.

**Unique Contribution:** Building a **development HUD** that intercepts all Claude Code events for real-time situational awareness. Created **Claude-MPM** (Multi-Agent PM) for solo practitioners.

**What Makes It Frontier:** Event-driven architecture approach - thinking about **observability for agent systems**.

**Key Content:**
- [The Age of the CLI, Part 1](https://hyperdev.matsuoka.com/p/the-age-of-the-cli-part-1)
- [Claude Multi Agent PM](https://hyperdev.matsuoka.com/p/claude-multi-agent-pm)

---

### 8. Shrivu Shankar (sshh12)
**Handle:** [Blog: sshh.io](https://blog.sshh.io) | [GitHub: sshh12](https://github.com/sshh12)

**Background:** Part of a team consuming **several billion tokens per month** for codegen.

**Unique Contribution:** Wrote the definitive **"How I Use Every Claude Code Feature"** guide. Maintains a 13KB CLAUDE.md for professional monorepos.

**What Makes It Frontier:** Production-scale experience (billion+ tokens/month).

**Key Content:**
- [How I Use Every Claude Code Feature](https://blog.sshh.io/p/how-i-use-every-claude-code-feature)
- [Building Multi-Agent Systems (Part 2)](https://blog.sshh.io/p/building-multi-agent-systems-part)

---

### 9. Han Lee (leehanchung)
**Handle:** [Blog: leehanchung.github.io](https://leehanchung.github.io)

**Background:** Technical architect focused on AI agent systems.

**Unique Contribution:** Wrote the **most comprehensive technical deep dive** on Claude Agent Skills architecture - covering context injection design, two-message patterns, LLM-based routing.

**What Makes It Frontier:** First-principles analysis of how Skills differ from function calling. Protocol-level understanding.

**Key Content:**
- [Claude Agent Skills: A First Principles Deep Dive](https://leehanchung.github.io/blogs/2025/10/26/claude-skills-deep-dive/)

---

### 10. YK (ykdojo / CS Dojo)
**Handle:** [Twitter/X: @ykdojo](https://x.com/ykdojo) | [GitHub: ykdojo](https://github.com/ykdojo) | YouTube: CS Dojo (1.9M+ subscribers)

**Background:** Developer Experience Manager at Eventual.ai. Creator of CS Dojo YouTube channel.

**Unique Contribution:** Created **claude-code-tips** repository with 40+ tips covering advanced techniques. Also created a **security scanner** for Claude Code settings files.

**What Makes It Frontier:** Focus on **optimization and security** - areas most practitioners ignore.

**Key Content:**
- [claude-code-tips Repository](https://github.com/ykdojo/claude-code-tips)
- Security scanner for dangerous patterns

---

## Honorable Mentions

### Bary Huang (baryhuang)
[claude-code-by-agents](https://github.com/baryhuang/claude-code-by-agents) - Desktop app for multi-agent coordination via @mentions.

### Kye Gomez (kyegomez)
[Swarms](https://github.com/kyegomez/swarms) - Enterprise multi-agent framework (not Claude-specific but influential). Claims 45 million AI agents spawned.

### BMAD Method Team (bmad-code-org)
[BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD) - 19 specialized agents covering full development lifecycle. Key insight: "document sharding."

### Aviv Laufer (avivl)
[claude-007-agents](https://github.com/avivl/claude-007-agents) - 112 agents across 14 categories.

### Elie Schoppik
Head of Technical Education at Anthropic. Created the [DeepLearning.AI course on Claude Code](https://www.deeplearning.ai/short-courses/claude-code-a-highly-agentic-coding-assistant/) with Andrew Ng.

---

## Summary: Ranking by Novelty/Impact

| Rank | Name | Key Contribution |
|------|------|------------------|
| 1 | Reuven Cohen | Enterprise swarm infrastructure (11.3k stars) |
| 2 | Numman Ali | Unlocking hidden Anthropic capabilities |
| 3 | Kieran Klaassen | Compound Engineering management paradigm |
| 4 | Seth Hobson | Most comprehensive agent ecosystem (99 agents) |
| 5 | nwiizo | Systems programming rigor (Rust) |
| 6 | Brandon Redmond | Education + production bridge |
| 7 | Robert Matsuoka | Agent observability/monitoring |
| 8 | Shrivu Shankar | Billion-token-scale production experience |
| 9 | Han Lee | Protocol-level architecture analysis |
| 10 | YK | Optimization and security focus |

---

## Key Themes Across These Voices

1. **Swarm/Hive Architecture** - Moving from single agents to coordinated swarms
2. **Infrastructure over Wrappers** - Building orchestration platforms, not just prompt templates
3. **Production at Scale** - Focus on reliability, observability, and enterprise deployment
4. **Hidden Features** - Reverse-engineering and enabling disabled capabilities
5. **Systems Thinking** - Applying distributed systems concepts to agents
6. **Management Paradigm Shift** - Thinking like a tech lead managing AI teams

---

## Actionability

🟡 **Medium Lift** - Following these practitioners and studying their repos provides immediate value. Implementing their patterns requires investment.

---

## Tags
`#new-voices` `#frontier` `#discovery` `#claude-flow` `#cc-mirror` `#compound-engineering` `#swarm` `#orchestration` `#staff-engineer`

# Complete Source Index
## Claude Code Research & Tips Knowledge Base

**Generated:** January 10, 2026
**Purpose:** Comprehensive bibliography of all sources referenced in this repository

---

## Table of Contents

1. [Primary Sources (Anthropic Official)](#1-primary-sources-anthropic-official)
2. [Creator & Core Team](#2-creator--core-team)
3. [Community Thought Leaders](#3-community-thought-leaders)
4. [GitHub Repositories](#4-github-repositories)
5. [Twitter/X Practitioners](#5-twitterx-practitioners)
6. [YouTube Creators](#6-youtube-creators)
7. [Blog Authors & Publications](#7-blog-authors--publications)
8. [Reddit & Hacker News Communities](#8-reddit--hacker-news-communities)
9. [Podcasts & Conference Talks](#9-podcasts--conference-talks)
10. [Tools & Plugins Ecosystem](#10-tools--plugins-ecosystem)
11. [Reliability Guide](#11-reliability-guide)

---

## 1. Primary Sources (Anthropic Official)

### Official Documentation

| Source | URL | Key Contribution | Reliability |
|--------|-----|------------------|-------------|
| Claude Code Docs | https://docs.anthropic.com/en/docs/claude-code | Complete reference documentation | Official |
| MCP Specification | https://modelcontextprotocol.io | Model Context Protocol standard | Official |
| Anthropic API | https://docs.anthropic.com/en/api | API reference | Official |
| Anthropic Blog | https://www.anthropic.com/blog | Official announcements | Official |
| Anthropic Research | https://www.anthropic.com/research | Research papers | Official |

### Official GitHub Repositories

| Repository | URL | Stars | Purpose |
|------------|-----|-------|---------|
| claude-code | github.com/anthropics/claude-code | 54.1k | Main Claude Code repository |
| skills | github.com/anthropics/skills | 36.5k | Agent Skills repository |
| anthropic-cookbook | github.com/anthropics/anthropic-cookbook | 30.8k | Jupyter notebooks with examples |
| prompt-eng-interactive-tutorial | github.com/anthropics/prompt-eng-interactive-tutorial | 28.6k | Interactive prompt engineering course |
| courses | github.com/anthropics/courses | 18k | Anthropic's educational courses |
| claude-quickstarts | github.com/anthropics/claude-quickstarts | 13.4k | Quick-deploy application templates |
| claude-plugins-official | github.com/anthropics/claude-plugins-official | 2.3k | Official plugins directory |
| life-sciences | github.com/anthropics/life-sciences | 120 | Life sciences integrations |
| healthcare | github.com/anthropics/healthcare | 6 | Healthcare integrations |

### Official SDKs

| Language | Repository | Reliability |
|----------|------------|-------------|
| Python | github.com/anthropics/anthropic-sdk-python | Official |
| TypeScript | github.com/anthropics/anthropic-sdk-typescript | Official |
| Go | github.com/anthropics/anthropic-sdk-go | Official |
| Ruby | github.com/anthropics/anthropic-sdk-ruby | Official |
| C# | github.com/anthropics/anthropic-sdk-csharp | Official (Beta) |
| PHP | github.com/anthropics/anthropic-sdk-php | Official (Beta) |
| Java/Kotlin | github.com/anthropics/anthropic-sdk-java | Official |

---

## 2. Creator & Core Team

### Boris Cherny (Claude Code Creator)

| Platform | Handle | Content Type | Reliability |
|----------|--------|--------------|-------------|
| Twitter/X | @bcherny | Workflow tips, philosophy | Authoritative |
| Posts | Post ID 2007179832300581177 | Creator's workflow (13-point system) | Canonical |

**Key Contributions:**
- Creator of Claude Code at Anthropic
- "Vanilla but effective" workflow philosophy
- Verification loops (2-3x quality boost)
- code-simplifier plugin
- Parallel sessions methodology (5-10 sessions)
- CLAUDE.md best practices

**The 13-Point Creator Workflow:**
1. 5 parallel terminal sessions + 5-10 web sessions
2. Always Opus 4.5 + thinking mode
3. Shared CLAUDE.md in git
4. Plan mode -> auto-accept execution
5. Slash commands for inner loops
6. Subagents for outer workflows
7. PostToolUse hooks for formatting
8. Permissions whitelist (not skip)
9. MCP integrations (Slack, BigQuery, Sentry)
10. ralph-wiggum plugin for long tasks
11. Verification loops (MOST IMPORTANT)
12. Background verification agents
13. Domain-specific testing

---

## 3. Community Thought Leaders

### Steve Yegge (@steve_yegge)

| Platform | Content | Key Contribution |
|----------|---------|------------------|
| Twitter/X | @steve_yegge | Gas Town, philosophy |
| Medium | medium.com/@steve-yegge | Long-form essays |
| GitHub | github.com/steveyegge/gastown | Gas Town orchestrator |
| GitHub | github.com/steveyegge/beads | Beads data plane |

**Profile:**
- 40-year software veteran
- Ex-Google, Ex-Amazon, Ex-Sourcegraph
- Gas Town creator

**Key Contributions:**
- "8 Stages of Developer Evolution" framework
- "Claude Code is the world's biggest ant - nature prefers colonies"
- Gas Town - factory for coding agents (Mayor, Deacon, Dogs, Refinery, Polecat, Witness, Crew)
- Beads - git-backed data plane (~225K lines Go)
- "Vibe coding" philosophy refinement
- Go as optimal language for AI coding

**Articles:**
- "Welcome to Gas Town" (medium.com/@steve-yegge/welcome-to-gas-town)
- "The Future of Coding Agents" (medium.com/@steve-yegge/the-future-of-coding-agents)

---

### Geoffrey Huntley (@GeoffreyHuntley)

| Platform | Content | Reliability |
|----------|---------|-------------|
| Website | ghuntley.com/ralph/ | Foundational |
| GitHub | github.com/ghuntley/ralph-claude-code | Reference |

**Key Contributions:**
- **Original Ralph Wiggum pattern creator**
- Foundational loop: `while :; do cat PROMPT.md | claude-code ; done`
- "We learn from failure" philosophy
- External memory via git/files
- Named after The Simpsons character who keeps trying despite failures

---

### Matt Pocock (@mattpocockuk)

| Platform | Content | Key Contribution |
|----------|---------|------------------|
| Twitter/X | @mattpocockuk | Ralph explanations |
| YouTube | youtube.com/@mattpocockuk | Video tutorials |
| Website | totaltypescript.com | TypeScript content |
| Course | aihero.dev | AI Hero course |

**Profile:**
- Total TypeScript author
- AI Hero creator
- Ex-Vercel

**Key Contributions:**
- Ralph Wiggum definitive text thread (4.2K likes, 409K views)
- Kanban vs Multi-Phase Plans mental model
- Two modes: AFK Ralph (overnight) vs HOTL Ralph (interactive)
- progress.txt as append-only memory pattern
- Context rot concept
- "Ships code while you sleep" demonstration

---

### Arvid Kahl (@arvidkahl)

| Platform | Content | Reliability |
|----------|---------|-------------|
| Twitter/X | @arvidkahl | Ralph guides |
| Substack | thebootstrappedfounder.com | Long-form content |
| YouTube | youtube.com/@arvidkahl | Video content |

**Profile:**
- Bootstrapped founder
- Sold FeedbackPanda
- Indie hacking advocate

**Key Contributions:**
- Ralph Wiggum comprehensive guide (1.6K likes, 128K views)
- Bridged Ralph from technical pattern to mainstream adoption
- Community extensions catalog
- "Time becomes the main variable, not human attention"

---

### Ryan Carson (@ryancarson)

| Platform | Content | Reliability |
|----------|---------|-------------|
| Twitter/X | @ryancarson | PRD-driven development |
| GitHub | github.com/snarktank/ralph | Production Ralph |
| GitHub | github.com/snarktank/ai-dev-tasks | PRD templates |
| GitHub | github.com/snarktank/amp-skills | Amp skills |

**Profile:**
- 3x founder
- Builder in Residence at Amp Code

**Key Contributions:**
- First widely-shared production Ralph implementation
- PRD.json standard format
- Story sizing rules (THE critical success factor)
- "Each story must be completable in ONE iteration"
- 14-iteration feature shipping example

---

### Molly Cantillon (@mollycantillon)

| Platform | Content | Reliability |
|----------|---------|-------------|
| Twitter/X | @mollycantillon | Personal Panopticon |
| Company | NOX | Founder |

**Profile:**
- Founder at NOX
- Ex-Stanford

**Key Contributions:**
- "Personal Panopticon" - 8 parallel Claude Code instances
- Life OS architecture (company, metrics, email, growth, trades, health, writing, personal)
- "Self-legibility" philosophy
- Jmail case study (18M users)
- Found $2000 in forgotten subscriptions
- Human-in-the-loop via SMS checkpoints

---

### Nader Dabit (@dabit3)

| Platform | Content | Reliability |
|----------|---------|-------------|
| Twitter/X | @dabit3 | Mobile Claude Code |
| YouTube | youtube.com/@naderdabit | Tutorials |

**Profile:**
- DevRel at EigenCloud
- Ex-AWS, Ex-Aave

**Key Contributions:**
- Mobile-first Claude Code workflow
- 6 parallel agents on $7/day cloud VM
- Termius + Tailscale + Poke stack
- PreToolUse hook -> push notifications
- "Software development can fit into gaps of your day"
- Git worktrees for parallel feature work

---

### Numman Ali (@nummanali)

| Platform | Content | Reliability |
|----------|---------|-------------|
| Twitter/X | @nummanali | CC Mirror, orchestration |
| GitHub | github.com/numman-ali/cc-mirror | CC Mirror |
| GitHub | github.com/numman-ali/n-skills | Skills collection |

**Profile:**
- CTO at UK FinTech
- CC Mirror creator

**Key Contributions:**
- **Discovered Claude Code's hidden multi-agent orchestration**
- CC Mirror - enables disabled features in 3 commands
- Native TaskCreate/TaskList/TaskGet/TaskUpdate API documentation
- "Trading Floor" mental model for orchestration
- "The Iron Law" - Orchestrator as Conductor
- Tool ownership separation (orchestrator vs workers)
- "Covers 80% of use cases with zero effort"

---

### Jarrod Watts (@jarrodwatts)

| Platform | Content | Reliability |
|----------|---------|-------------|
| Twitter/X | @jarrodwatts | Claude HUD |
| GitHub | github.com/jarrodwatts/claude-hud | HUD plugin (1.8K stars) |

**Profile:**
- Building @abstractchain

**Key Contributions:**
- Claude HUD plugin (2796 likes, 227K views)
- Real-time session visibility
- Context percentage with color-coded bar
- Tool execution status
- Subagent activity monitoring

---

## 4. GitHub Repositories

### Orchestration Tools

| Repository | Author | Stars | Purpose | Reliability |
|------------|--------|-------|---------|-------------|
| gastown | @steveyegge | - | Agent factory | Expert Community |
| beads | @steveyegge | - | Git-backed data plane | Expert Community |
| cc-mirror | @nummanali | - | Multi-agent orchestration | Community Validated |
| orchestra | @0xSero | - | Self-improving orchestrator | Community |
| snarktank/ralph | @ryancarson | - | PRD-driven loops | Production Tested |

### Plugins & Tools

| Repository | Author | Stars | Purpose | Reliability |
|------------|--------|-------|---------|-------------|
| claude-hud | @jarrodwatts | 1.8K | Session visibility | Community Validated |
| claude-mem | @thedotmack | - | Persistent memory | Community Validated |
| rpai | @radoslav11 | - | tmux agent manager | Community |
| system | @burcs (ygwyg) | - | Remote Mac control | Community |
| kimaki | @__morse | - | Discord bot Mac control | Community |

### Ralph Variants

| Repository | Author | Purpose | Reliability |
|------------|--------|---------|-------------|
| ralph-claude-code | @ghuntley | Original Ralph | Foundational |
| marathon-ralph | @stephen_rayner | Full SDLC Ralph | Community |
| lisa | @petruarakiss | Ralph with logging | Community |
| zeroshot | @Eivind1384955 | Next-gen Ralph | Experimental |

### Gas Town Extensions

| Repository | Author | Purpose | Reliability |
|------------|--------|---------|-------------|
| gtgui | @TRIBE-INC | Age of Empires GUI | Community |
| roughneck | @mjtechguy | Multiple Gas Towns | Community |
| station | @Esteban_Puerta9 | Nats-based alternative | Community |

### Alternative Tools

| Repository | Author | Purpose | Reliability |
|------------|--------|---------|-------------|
| opencode | SST | Open-source alternative | Community |
| ai-maestro | 23blocks-OS | Alternative orchestration | Community |

### MCP Servers

| Repository | Author | Purpose |
|------------|--------|---------|
| mcp_agent_mail | Dicklesworthstone | Agent-to-agent email |
| Official MCP servers | Anthropic/modelcontextprotocol | Various integrations |

---

## 5. Twitter/X Practitioners

### Power Users to Follow

| Handle | Focus | Key Contributions |
|--------|-------|-------------------|
| @AnthropicAI | Official | Product announcements |
| @bcherny | Creator | Canonical workflow |
| @steve_yegge | Orchestration | Gas Town, philosophy |
| @mattpocockuk | TypeScript, Ralph | Tutorials, explanations |
| @nummanali | CC Mirror | Multi-agent discovery |
| @arvidkahl | Bootstrapped workflows | Ralph accessibility |
| @ryancarson | PRD patterns | Production implementation |
| @mollycantillon | Life automation | Personal Panopticon |
| @dabit3 | Mobile workflows | Phone-first development |
| @jarrodwatts | Plugins | Claude HUD |
| @thedotmack | Memory | Claude-Mem |
| @0xSero | Self-improvement | Infinite Orchestra |
| @weswinder | Vibe coding | Opus + Ralph + Playwright stack |
| @koylanai | Content automation | Ralph Wiggum Marketer |
| @burcs | Remote control | System for Mac |
| @gregisenberg | Philosophy | .md files superpower |
| @radoslav11 | Multi-agent UX | rpai |
| @GeoffreyHuntley | Foundations | Original Ralph |
| @karpathy | Philosophy | "Vibe coding" term origin |

### Emerging Voices

| Handle | Focus | Reliability |
|--------|-------|-------------|
| @sergeykarayev | Mobile GUI | Superconductor app |
| @__morse | Discord integration | Kimaki |
| @omarsar0 | Implementation details | Technical gap-filling |
| @MikeEndale | Ralph evolution | Dr. Ralph |
| @stephen_rayner | Full SDLC | Marathon Ralph |
| @petruarakiss | Logging | Lisa |
| @maurice_kleine | Loop optimization | jq-based conditions |
| @TendiesOfWisdom | Context optimization | Subagent for expensive tools |

### Critical Voices (Important Balance)

| Handle | Focus | Value |
|--------|-------|-------|
| @flutterwhat | Skeptical takes | Reality check |
| @seltzergenius | Cost awareness | Practical cautions |
| @f_butz | Security concerns | Verification requirements |
| @nelsonpadil_ | Production caveats | Enterprise requirements |

---

## 6. YouTube Creators

### Confirmed Claude Code Content

| Creator | Channel | Focus | Reliability |
|---------|---------|-------|-------------|
| Anthropic | @anthropic-ai | Official | Official |
| Matt Pocock | @mattpocockuk | TypeScript, Ralph | Expert |
| Arvid Kahl | @arvidkahl | Indie hacking | Expert |
| Nader Dabit | @naderdabit | Mobile, full-stack | Expert |
| Greg Isenberg | @gregisenberg | Business, AI tools | Community |

### Expected Coverage (Search Required)

| Creator | Channel | Expected Focus |
|---------|---------|----------------|
| Fireship | @Fireship | Fast overviews |
| Theo | @t3dotgg | Honest reviews |
| ThePrimeagen | @ThePrimeagen | Terminal workflows |
| AI Jason | @AIJason | Tutorials |
| Wes Bos | @WesBos | Web development |
| Jack Herrington | @jherr | TypeScript, React |
| Web Dev Simplified | @WebDevSimplified | Beginner tutorials |
| Traversy Media | @TraversyMedia | Full project builds |

### Conference Channels

| Channel | Expected Content |
|---------|------------------|
| AI Engineer | Technical talks |
| Strange Loop | Programming systems |
| QCon (InfoQ) | Enterprise patterns |
| Latent Space | AI engineering |

---

## 7. Blog Authors & Publications

### Individual Technical Bloggers

| Author | Platform | Focus | Reliability |
|--------|----------|-------|-------------|
| Simon Willison | simonwillison.net | Technical depth | Expert |
| Swyx | swyx.io, latent.space | AI Engineering | Expert |
| Hamel Husain | hamel.dev | Practical ML | Expert |
| Lilian Weng | lilianweng.github.io | Research synthesis | Expert |
| Ethan Mollick | oneusefulthing.org | Research-backed | Academic |
| Chip Huyen | huyenchip.com | ML Systems | Expert |
| Eugene Yan | eugeneyan.com | Applied AI | Expert |
| Julia Evans | jvns.ca | Accessible explanations | Expert |

### Industry Voices

| Author | Platform | Focus | Reliability |
|--------|----------|-------|-------------|
| Kent Beck | Various | TDD + AI | Expert |
| DHH | world.hey.com/dhh | Skeptical pragmatism | Expert |
| Mitchell Hashimoto | mitchellh.com | Developer tools | Expert |
| Gergely Orosz | pragmaticengineer.com | Team adoption | Expert |
| Kevin Powell | kevinpowell.co | CSS + AI | Expert |
| Cassidy Williams | cassidoo.co | Web dev | Community |
| Addy Osmani | addyosmani.com | Performance | Expert |
| Kelsey Hightower | Various | Cloud native | Expert |
| Charity Majors | charity.wtf | Observability | Expert |

### Critical Analysis

| Publication | Focus | Reliability |
|-------------|-------|-------------|
| AI Snake Oil | Skeptical analysis | Academic |
| Cursor Blog | Competitor insights | Industry |

### Tech Publications

| Publication | URL | Focus |
|-------------|-----|-------|
| Medium (Claude tag) | medium.com/tag/claude-code | Community articles |
| Dev.to | dev.to/t/claudecode | Tutorials |
| Hacker Noon | hackernoon.com/tagged/claude | Case studies |
| InfoQ | infoq.com/ai-ml-data-eng/ | Enterprise |
| Towards Data Science | towardsdatascience.com | Technical |

---

## 8. Reddit & Hacker News Communities

### Reddit Communities

| Subreddit | Focus | Reliability |
|-----------|-------|-------------|
| r/ClaudeAI | Primary Claude community | Community Validated |
| r/LocalLLaMA | Alternatives, privacy | Community |
| r/programming | General dev discussion | Mixed |
| r/MachineLearning | Technical analysis | Expert Community |
| r/terraform | IaC workflows | Specialist |
| r/devops | DevOps patterns | Specialist |
| r/reactnative | Mobile development | Specialist |

### Key Reddit Threads (Historical)

| Thread | Date | Significance |
|--------|------|--------------|
| Launch Megathread | Feb 2025 | First impressions |
| CLAUDE.md Best Practices | Mar 2025 | Configuration patterns |
| Claude Code vs Cursor vs Copilot | Mar 2025 | Tool comparison |
| $200/Week Cost Thread | Mar 2025 | Cost management strategies |
| tmux + Infinite Agents | Apr 2025 | Parallel discovery |
| RALPH Pattern Explained | Apr 2025 | Orchestration methodology |
| Junior Devs Debate | Apr 2025 | Educational concerns |
| Max Subscription Worth It? | Late 2025 | Pricing analysis |
| Extended Thinking Game Changer | Late 2025 | Feature evaluation |

### Hacker News Discussions

| Thread | Points | Significance |
|--------|--------|--------------|
| Claude Code Launch | ~1,500 | Official launch reception |
| AI Coding Workflow 2025 | ~800 | Workflow patterns |
| Future of Software Engineering | ~2,200 | Industry impact |
| One Month Review | ~600 | Daily usage insights |
| MCP Protocol Power | ~450 | Extensibility discovery |
| Claude Code vs Aider | ~800 | Tool comparison |
| When Claude Gets It Wrong | ~1,200 | Failure recovery |
| Security Auditing | ~500 | Security patterns |

---

## 9. Podcasts & Conference Talks

### Podcasts

| Podcast | Host | Focus |
|---------|------|-------|
| Latent Space | Swyx | AI Engineering |
| Lex Fridman Podcast | Lex Fridman | Long-form AI interviews |
| AI Breakdown | Various | AI news analysis |
| Syntax | Wes Bos, Scott Tolinski | Web dev |
| Pragmatic Engineer | Gergely Orosz | Engineering management |

### Conferences to Watch

| Conference | Focus | Value |
|------------|-------|-------|
| AI Engineer Summit | AI development | Technical depth |
| GitHub Universe | Developer tools | Ecosystem context |
| Google I/O | AI integrations | Industry trends |
| AWS re:Invent | Cloud AI | Enterprise patterns |
| Microsoft Build | Copilot comparisons | Competition analysis |

---

## 10. Tools & Plugins Ecosystem

### Official Plugins (claude-plugins-official)

| Plugin | Purpose | Commands |
|--------|---------|----------|
| ralph-wiggum | Interactive loops | /ralph-loop, /cancel-ralph |
| code-review | Automated PR review | /code-review |
| commit-commands | Git workflow | /commit, /commit-push-pr |
| feature-dev | 7-phase development | /feature-dev |
| plugin-dev | Plugin development | /plugin-dev:create-plugin |
| pr-review-toolkit | PR review agents | /pr-review-toolkit:review-pr |
| security-guidance | Security reminders | PreToolUse hook |
| hookify | Custom hooks | /hookify |

### Community Plugins

| Plugin | Author | Purpose |
|--------|--------|---------|
| claude-hud | @jarrodwatts | Session visibility |
| claude-mem | @thedotmack | Persistent memory |
| ralph-wiggum-marketer | @koylanai | Content automation |

### MCP Servers (Official)

| Server | Purpose |
|--------|---------|
| mcp-server-github | GitHub API |
| mcp-server-slack | Slack integration |
| mcp-server-postgres | PostgreSQL queries |
| mcp-server-filesystem | File system access |
| mcp-server-google-drive | Google Drive |
| mcp-server-google-calendar | Calendar |
| mcp-server-gmail | Email |
| mcp-server-sentry | Error tracking |
| mcp-server-linear | Issue tracking |
| mcp-server-jira | Issue tracking |
| mcp-server-browser | Web automation |
| mcp-server-puppeteer | Browser automation |

---

## 11. Reliability Guide

### Source Tier Definitions

| Tier | Definition | Trust Level |
|------|------------|-------------|
| **Official** | Anthropic employees, official repos, docs | Highest |
| **Authoritative** | Boris Cherny, core team | Very High |
| **Expert Community** | Steve Yegge, Geoffrey Huntley, Matt Pocock | High |
| **Community Validated** | Popular tools, high engagement threads | Medium-High |
| **Community** | General community contributions | Medium |
| **Experimental** | New/unproven approaches | Low |

### How to Evaluate Sources

**High Reliability Indicators:**
- Official Anthropic documentation
- Creator/core team statements
- High engagement + positive outcomes
- Production usage evidence
- Multiple independent validations

**Caution Indicators:**
- No production evidence
- Single source claims
- Requires expensive setup
- Security concerns raised
- "Works for me" without reproducibility

### Information Freshness

| Age | Action |
|-----|--------|
| < 1 month | Current |
| 1-3 months | Likely current, verify features |
| 3-6 months | Check for updates |
| > 6 months | May be outdated |

---

## Quick Reference: Top Sources by Category

### For Beginners
1. Official Claude Code docs
2. Anthropic courses repository
3. Boris Cherny's workflow thread
4. r/ClaudeAI launch megathread
5. Greg Isenberg's .md files thread

### For Orchestration
1. Steve Yegge's Gas Town
2. Geoffrey Huntley's Ralph pattern
3. Numman Ali's CC Mirror
4. Matt Pocock's Ralph video
5. Ryan Carson's PRD-driven approach

### For Mobile/Remote
1. Nader Dabit's mobile setup
2. Brandon's System project
3. Omar's implementation details
4. Superconductor app

### For Plugin Development
1. Official plugins repository
2. Claude HUD source code
3. Claude-Mem architecture
4. Plugin development guide

### For Cost Optimization
1. Reddit cost threads
2. Boris's verification loops (saves money via quality)
3. Model selection guides (Sonnet vs Opus)
4. Context management patterns

---

## Appendix: URL Directory

### Official URLs

```
Documentation:
- https://docs.anthropic.com/en/docs/claude-code
- https://modelcontextprotocol.io
- https://code.claude.com/docs/en/overview

GitHub (Anthropic):
- https://github.com/anthropics/claude-code
- https://github.com/anthropics/skills
- https://github.com/anthropics/anthropic-cookbook
- https://github.com/anthropics/courses
- https://github.com/anthropics/claude-quickstarts
- https://github.com/anthropics/claude-plugins-official

Company:
- https://www.anthropic.com/blog
- https://www.anthropic.com/research
- https://www.anthropic.com/pricing
```

### Community URLs

```
Major Repositories:
- https://github.com/steveyegge/gastown
- https://github.com/steveyegge/beads
- https://github.com/numman-ali/cc-mirror
- https://github.com/snarktank/ralph
- https://github.com/jarrodwatts/claude-hud
- https://github.com/thedotmack/claude-mem
- https://github.com/0xSero/orchestra
- https://github.com/ygwyg/system

Reference Sites:
- https://ghuntley.com/ralph/
- https://awesomeclaude.ai/ralph-wiggum
- https://mdflow.dev
- https://system.surf
```

---

*This index is a living document. For the most current information, always verify against primary sources.*

**Last Updated:** January 10, 2026
**Total Sources Cataloged:** 150+
**Primary Authors Tracked:** 40+
**Repositories Indexed:** 50+

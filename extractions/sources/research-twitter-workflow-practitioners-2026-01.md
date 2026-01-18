# X/Twitter Research: Claude Code Workflow Practitioners (January 2026)

## Research Date
2026-01-12

## Research Methodology
Web search for Claude Code workflow patterns, techniques, and practitioner shares on X/Twitter. Focused on step-by-step workflows, before/after transformations, and detailed explanations.

---

## D-FINAL Connection

**Sources contributed to:** All D-FINAL files
**Last enhanced:** 2026-01-18 (Phase 2B)

---

# SECTION 1: KEY PRACTITIONERS AND THEIR WORKFLOWS

## 1.1 Boris Cherny (@bcherny) - Claude Code Creator

### Profile
- **Handle:** @bcherny
- **Role:** Creator of Claude Code at Anthropic
- **Reliability:** PRIMARY SOURCE (Official)

### Workflow Pattern: Parallel Session Management

**The Setup:**
- Runs 5 Claude instances in parallel in terminal (numbered tabs 1-5)
- Uses system notifications (iTerm2) to know when Claude needs input
- Additionally runs 5-10 Claude sessions on claude.ai web
- Uses `--teleport` to move sessions between local and web

**Key Technique - Git Checkout Isolation:**
```bash
# Each local session uses its own git checkout
# NOT branches or worktrees - full separate checkouts
# Prevents merge conflicts between parallel agents
```

**Model Selection:**
- Uses Opus 4.5 with thinking enabled for everything
- "Slower per response but faster overall because it requires less back-and-forth"

**The Boris Loop:**
1. Start in Plan Mode (Shift+Tab twice)
2. Iterate on plan until satisfied
3. Switch to auto-accept mode
4. Claude usually one-shots the execution

**Team Knowledge Pattern - CLAUDE.md:**
> "Anytime we see Claude do something incorrectly we add it to the CLAUDE.md, so Claude knows not to do it next time."

- Single CLAUDE.md per repo, checked into git
- Team contributes via PR review (tag @.claude)
- Every mistake becomes a rule

**Slash Command Example:**
```bash
# /commit-push-pr - Boris invokes dozens of times daily
# Custom command in .claude/commands/
```

### Links
- [Kol Tregaskes sharing Boris's workflow](https://x.com/koltregaskes/status/2007498194960441387)
- [Aakash Gupta TL;DR](https://x.com/aakashgupta/status/2007347705945944153)
- [InfoQ Article](https://www.infoq.com/news/2026/01/claude-code-creator-workflow/)

### Reliability Rating
**[PRIMARY]** - Direct from tool creator, verified across multiple sources

---

## 1.2 Matt Pocock (@mattpocockuk) - TypeScript Expert

### Profile
- **Handle:** @mattpocockuk
- **Role:** Total TypeScript creator, AI Hero, ex-Vercel
- **Reliability:** HIGH (Prolific practitioner with large following)

### Workflow Pattern: Plan Mode Critical Path

**Before/After Transformation:**
```
WITHOUT Plan Mode:
"Code is so bad it's basically a liability to keep it"

WITH Plan Mode:
"Basically as good as I could write it, with occasional bugs
which I catch on review"
```

**The Process:**
1. Start Claude Code with `--permission-mode plan` OR type `/plan`
2. Enter restricted mode - agent explores, asks questions, outputs plan
3. Iterate on requirements and validate assumptions
4. By coding time, agent knows exactly what to do

### Workflow Pattern: Ralph Wiggum Loop

**Core Concept:**
> "Run a coding agent with a clean slate, again and again until a stop condition is met"

**Implementation:**
```bash
# while :; do cat PROMPT.md | claude ; done
# Or official plugin:
/plugin install ralph-wiggum@anthropics
```

**Mental Model - Kanban vs Multi-Phase:**
```
Old Way (Multi-Phase):  Phase 1 -> Phase 2 -> Phase 3 -> Phase 4

Ralph Way (Kanban Loop):
  Pick task from board -> Complete task -> Back to board
                                               |
                              All done? -> Exit
                              Not done? -> Loop
```

### Workflow Pattern: MCP GitHub Integration

**Demo Description:**
> "Watch me hook Claude Code up to GitHub (via MCP) to fix a OSS issue without leaving my terminal or touching a line of code."

**28-Line MCP Server:**
> "Here's how to write a MCP server in 28 lines of code. Works with Cursor, Windsurf, Claude Code, Zed... Any MCP client."

### Additional Tips
- Perfect statusline shows: repo, branch, Git staged/unstaged/added, context used
- Role-based prompts: "Take 4-5 of your articles and send them to Claude. Tell it to write a role-based prompt for an AI to write like this person."

### Links
- [Plan Mode Tweet](https://x.com/mattpocockuk/status/1977369846162534555)
- [Ralph Wiggum Approach](https://x.com/mattpocockuk/status/2007924876548637089)
- [MCP GitHub Demo](https://x.com/mattpocockuk/status/1900213538569797996)
- [Getting Started With Ralph](https://x.com/mattpocockuk/status/2009276031622918474)

### Reliability Rating
**[HIGH]** - Consistent practitioner, detailed explanations, video tutorials

---

## 1.3 Steve Yegge (@Steve_Yegge) - Veteran Engineer

### Profile
- **Handle:** @Steve_Yegge
- **Role:** 40-year veteran, ex-Google/Amazon/Sourcegraph
- **Reliability:** HIGH (Deep technical expertise, builds tools)

### Workflow Pattern: Multi-Agent Parallel Management

**Current Setup (2025-2026):**
- Runs 4 coding agents simultaneously
- "All getting exceptionally good at their jobs"
- "Four is about the max I can handle right now"

**Evolution Observation:**
> "I've been using Claude Code for a couple of days, and it has been absolutely ruthless in chewing through legacy bugs in my gnarly old code base. It's like a wood chipper fueled by dollars."

**Permission Philosophy:**
> "One of my favorite things to do is give my coding agents more and more permissions and freedom, just to see how far I can push their productivity without going too far off the rails."

### Tools Built

**Beads - Agent Task Management:**
> "A magical 4-dimensional graph-based git-backed fairy-dusted issue-tracker database, designed to let coding agents track all your work and never get lost again."

**Efrit - Emacs-based Agent:**
- Coding agent that lives inside Emacs
- `M-x efrit-do whatever` -> negotiates with Claude -> executes Emacs Lisp
- Entire thing "vibe coded with an Amp agent"

### Key Insight
> "Claude Code is the world's biggest fuckin' ant. Everyone is focused on making their ant run longer... when nature prefers colonies."

### Links
- [Initial Claude Code Impressions](https://x.com/Steve_Yegge/status/1898674257808515242)
- [Multi-Agent Dream](https://x.com/Steve_Yegge/status/1900430641927512111)
- [Beads Release](https://x.com/Steve_Yegge/status/1977645937225822664)
- [Agent Permissions Post](https://x.com/Steve_Yegge/status/1946360175339974807)

### Reliability Rating
**[HIGH]** - Builds production tools, shares detailed reasoning

---

## 1.4 Cathryn Lavery (@cathrynlavery) - Context Management Pioneer

### Profile
- **Handle:** @cathrynlavery
- **Role:** Entrepreneur, productivity specialist
- **Reliability:** MEDIUM-HIGH (Practical workflow, widely bookmarked)

### Workflow Pattern: 6-Document Context System

**The Technique:**
Before start AND end of any session, have Claude create/update these 6 docs:

| File | Purpose |
|------|---------|
| `CONTEXT.md` | Current project state |
| `PROGRESS.md` | What was just completed |
| `TODO.md` | Next priorities |
| `DECISIONS.md` | Technical choices made |
| `ISSUES.md` | Blockers encountered |
| `SETUP.md` | How to run everything |

**Before/After Transformation:**
```
WITHOUT 6-doc system:
- New sessions start cold
- Context lost between sessions
- Re-explaining same things

WITH 6-doc system:
- New session instantly knows where you left off
- Decisions preserved
- Blockers tracked
```

### Links
- [Context Hack Tweet](https://x.com/cathrynlavery/status/1950010270530585042)

### Reliability Rating
**[MEDIUM-HIGH]** - Practical technique, high engagement

---

## 1.5 Eugene Yan (@eugeneyan) - ML Practitioner

### Profile
- **Handle:** @eugeneyan
- **Role:** ML engineer, data science practitioner
- **Reliability:** HIGH (Detailed technical workflows)

### Workflow Pattern: Jupyter Notebooks with Claude

**The Process:**
1. Use Plan Mode
2. Point Claude at `todo.md` and indicate todo to work on
3. Refine plan until satisfied
4. Switch to Act Mode
5. Let Claude create notebook and one-shot execute
6. Run notebook cell by cell
7. Add extra analysis + visuals + logs to verify

**What Didn't Work:**
- Initializing notebooks with imports, configs, data loader code first
- Giving instructions to add cells incrementally
- Claude got confused, started adding cells from top (reverse order) or out of order

### Links
- [Jupyter Workflow Tweet](https://x.com/eugeneyan/status/1944602251856695345)

### Reliability Rating
**[HIGH]** - Specific technical workflow with failure modes documented

---

## 1.6 John O'Nolan (@JohnONolan) - Ghost Founder

### Profile
- **Handle:** @JohnONolan
- **Role:** Founder of Ghost CMS
- **Reliability:** HIGH (Production experience)

### Workflow Pattern: Kill-and-Review Planning

**The Technique:**
> "Claude Code planning mode is only useful for really small tasks"

**For Larger Tasks:**
1. Ask Claude to make a plan in a markdown file
2. Kill that Claude instance (Ctrl+C)
3. Spin up a new Claude
4. Tell it: "A previous agent made plan.md - please review this plan in detail and call out anything that appears to be overengineering needlessly"

**Why It Works:**
- Fresh context reviews the plan objectively
- Catches overengineering that planning Claude didn't see
- Separates planning from critique

### Links
- [Planning Workflow Tweet](https://x.com/JohnONolan/status/1942889686646521900)

### Reliability Rating
**[HIGH]** - Novel approach, production-tested

---

## 1.7 Jeffrey Emanuel (@doodlestein) - Fresh Eyes Technique

### Profile
- **Handle:** @doodlestein
- **Role:** Developer
- **Reliability:** MEDIUM-HIGH (Practical tip, high engagement)

### Workflow Pattern: Fresh Eyes Loop

**The Technique:**
> "After asking CC to implement a feature or fix a bug or whatever, and after it says it completed everything, you just repeatedly say the following to it over and over until..."

**The Prompt:**
```
Carefully read over all of the new code you just wrote...
with 'fresh eyes,' looking super carefully for any obvious
bugs, errors, problems.
```

**Why It Works:**
- Forces re-examination of completed work
- Catches bugs that initial pass missed
- Works well with multiple parallel sessions

### Links
- [Fresh Eyes Tweet](https://x.com/doodlestein/status/1956228999945806049)

### Reliability Rating
**[MEDIUM-HIGH]** - Simple technique, easy to verify

---

## 1.8 Daniel San (@dani_avila7) - Hooks Expert

### Profile
- **Handle:** @dani_avila7
- **Role:** Developer, Claude Code Templates creator
- **Reliability:** HIGH (Tool builder, detailed explanations)

### Workflow Pattern: Hooks Automation

**Hook Basics (3-Stage Process):**
1. Event Trigger activates one of six hook types
2. Hook executes command/script
3. Result affects Claude's behavior

**Hook Types:**
- `PreToolUse` - Before Claude uses tools
- `PostToolUse` - After Claude uses tools
- `UserPromptSubmit` - When you submit prompts
- `Stop` - When session ends

**Skills with Hooks (Claude Code 2.1.1):**
> "Skills now support Hooks directly in the YAML frontmatter. You can add hooks to run commands or scripts on PreToolUse, PostToolUse, or Stop events."

**Claude Code Templates Tool:**
```bash
npx claude-code-templates
# Configures Commands, Hooks, MCPs, settings.json
# For JavaScript/TypeScript and Python projects
```

### Links
- [Hooks Explanation](https://x.com/dani_avila7/status/1972352021987508680)
- [Claude Code Templates](https://x.com/dani_avila7/status/1942248060400075092)
- [Skills with Hooks](https://x.com/dani_avila7/status/2009397544565305705)

### Reliability Rating
**[HIGH]** - Tool builder, detailed documentation

---

## 1.9 Josh Lehman (@jlehman_) - Parallel Workflow Expert

### Profile
- **Handle:** @jlehman_
- **Role:** Developer
- **Reliability:** HIGH (Detailed implementation guide)

### Workflow Pattern: Parallel Stream Management

**The Approach:**
> "I've been working with Claude Code since it was released and have developed a workflow that lets me safely manage multiple streams of work in parallel."

**Key Components:**
1. Parallelize work streams through extensive use of git worktrees
2. Two-step development process to mitigate LLM "doom loops"
3. Automation through Claude Code's custom slash commands

**Git Worktrees:**
- Separate workspace per agent
- Prevents file conflicts
- Each has own branch

### Links
- [Parallel Workflow Tweet](https://x.com/jlehman_/status/1910466216520819015)

### Reliability Rating
**[HIGH]** - Production workflow, detailed breakdown

---

## 1.10 Igor Tarasenko (@sa1k0s) - Subagent Expert

### Profile
- **Handle:** @sa1k0s
- **Role:** Developer
- **Reliability:** MEDIUM-HIGH (Technical details)

### Workflow Pattern: Subagent Configuration

**Key Knowledge:**
> "If you're wondering about claude code's sub-agents, here's the key stuff"

**Subagent Characteristics:**
- Disposable clones that inherit your setup
- Cannot make more clones themselves
- Each `Task()` line = new clone

**Parallel Configuration:**
```bash
claude config set --global parallelTasksCount 3
```

### Links
- [Subagent Tweet](https://x.com/sa1k0s/status/1937886423627284714)

### Reliability Rating
**[MEDIUM-HIGH]** - Technical specifics, easy to verify

---

## 1.11 Shrivu Shankar (@ShrivuShankar) - Feature Guide

### Profile
- **Handle:** @ShrivuShankar
- **Role:** Developer, content creator
- **Reliability:** HIGH (Comprehensive guide)

### Workflow Pattern: Complete Feature Usage

**Thread:** "How I Use Every Claude Code Feature"

Covers comprehensive feature utilization across all Claude Code capabilities.

### Links
- [Feature Guide](https://x.com/ShrivuShankar/status/2005656501898137731)

### Reliability Rating
**[HIGH]** - Comprehensive coverage

---

## 1.12 Kieran Klaassen (@kieranklaassen) - Context Optimization

### Profile
- **Handle:** @kieranklaassen
- **Role:** Developer
- **Reliability:** MEDIUM-HIGH (Practical tip)

### Workflow Pattern: System Prompt Enhancement

**The Tip:**
> "Add this line to your system prompt"

```
"Your context window will be automatically compacted as it
approaches its limit. Never stop tasks early due to token
budget concerns. Always complete tasks fully, even if the
end of your budget is approaching."
```

**Why It Works:**
- Prevents premature task abandonment
- Claude completes work before context limit
- More predictable behavior

### Links
- [System Prompt Tip](https://x.com/kieranklaassen/status/1992478858025820469)

### Reliability Rating
**[MEDIUM-HIGH]** - Easy to test, practical

---

## 1.13 0xDesigner (@0xDesigner) - Beginner Tips

### Profile
- **Handle:** @0xDesigner
- **Role:** Designer/Developer
- **Reliability:** MEDIUM (Curated tips)

### Workflow Pattern: 10 Beginner Tips

1. Use plan mode (shift + tab)
2. Write "ultrathink" in prompts to make Claude smarter
3. Be selective with ultrathink - fills context window
4. Use "/" and explore all slash commands
5. Use /compact to save context
6. Use /clear after distinct tasks
7. Create custom commands in .claude/commands/
8. Use MCP servers for external tools
9. Track usage with ccusage
10. Start sessions fresh for new problems

**Extended Thinking Levels:**
| Command | Tokens |
|---------|--------|
| "think" | ~4K |
| "think hard" | ~10K |
| "ultrathink" | ~32K |

### Links
- [Beginner Tips](https://x.com/0xDesigner/status/2008018043205460106)

### Reliability Rating
**[MEDIUM]** - Curated, good starting point

---

## 1.14 Saoud Rizwan (@sdrzn) - MCP Optimization

### Profile
- **Handle:** @sdrzn
- **Role:** Developer
- **Reliability:** HIGH (Feature discovery)

### Workflow Pattern: On-Demand MCP Loading

**Discovery:**
> "Huge: Claude Code added an experimental feature that loads MCP tools on-demand, personally giving me 33% more context window each session!"

**Before:**
- All MCP server tool definitions added to system prompt
- With Slack, Linear, Notion, Context7, Chrome = massive overhead

**After:**
- Tools loaded only when needed
- 33% more context available

### Links
- [MCP Optimization](https://x.com/sdrzn/status/2005660540576928074)

### Reliability Rating
**[HIGH]** - Measurable improvement, specific

---

## 1.15 Ado (@adocomplete) - Context Visibility

### Profile
- **Handle:** @adocomplete
- **Role:** Developer, "Advent of Claude" creator
- **Reliability:** MEDIUM-HIGH (Feature documentation)

### Workflow Pattern: /context Command

**The Command:**
> "/context - See exactly what's consuming your token window"

**Shows:**
- System prompt size
- MCP servers overhead
- Memory files (CLAUDE.md)
- Current conversation
- And more

> "It's like having X-ray vision for your tokens"

### Links
- [Context Command](https://x.com/adocomplete/status/1998055055099076977)

### Reliability Rating
**[MEDIUM-HIGH]** - Built-in feature documentation

---

## 1.16 Gaurav Chande (@gauravmc) - Playwright Loop

### Profile
- **Handle:** @gauravmc
- **Role:** Developer
- **Reliability:** HIGH (Specific workflow)

### Workflow Pattern: Playwright Verification Loop

**The Claim:**
> "If you haven't set up Playwright MCP, if you're not running Task -> Claude <-> Playwright loop, you're missing 50% of what this coding agent can actually do."

**The Loop:**
```
Task -> Claude -> Implement -> Playwright -> Verify -> Back to Task
```

**Why It Matters:**
- Visual verification of UI changes
- Catches bugs humans might miss
- Automated acceptance testing

### Links
- [Playwright Loop](https://x.com/gauravmc/status/1957850259549487393)

### Reliability Rating
**[HIGH]** - Specific workflow with clear value

---

## 1.17 Charlie Holtz (@charliebholtz) - Team Integration

### Profile
- **Handle:** @charliebholtz
- **Role:** Chorus app developer
- **Reliability:** HIGH (Production team usage)

### Workflow Pattern: Claude as Team Member

**The Approach:**
> "Claude Code has completely changed the way we develop our app, Chorus, so much so that we now consider it one of our employees."

**The System:**
- Put asterisk on whiteboard next to any task Claude will mostly handle
- "The asterisks are multiplying"

**Implications:**
- Task allocation includes Claude
- Visual tracking of AI-assisted work
- Team workflow integration

### Links
- [Team Integration](https://x.com/charliebholtz/status/1935029747815432505)

### Reliability Rating
**[HIGH]** - Production team experience

---

## 1.18 Rohan Paul (@rohanpaul_ai) - Hooks Deep Dive

### Profile
- **Handle:** @rohanpaul_ai
- **Role:** AI researcher
- **Reliability:** HIGH (Technical explanation)

### Workflow Pattern: Hooks Architecture

**Core Concept:**
> "Shell-based hooks that run automatically at key moments, letting you script exactly what must happen during every coding session."

**Value:**
> "The feature removes uncertainty by turning informal chat instructions into commands that always execute."

**Hook Examples:**
- "After each edit, run prettier" (PostToolUse hook)
- "Log every Bash command to a file" (PreToolUse hook)
- "Never touch anything in infra/prod/" (PreToolUse validation)

### Links
- [Hooks Announcement](https://x.com/rohanpaul_ai/status/1939910693106639061)

### Reliability Rating
**[HIGH]** - Technical depth, practical examples

---

## 1.19 Claude Code Community (@claude_code) - Official Tips

### Profile
- **Handle:** @claude_code
- **Role:** Official Claude Code community account
- **Reliability:** PRIMARY SOURCE (Official)

### Workflow Pattern: Subagent Best Practices

**Tip 1 - Parallel Tasks:**
> "Use subagents on Claude Code. Supports ~10 parallel tasks, coordinating via a task queue. Avoid specifying parallelism; let Claude Code determine task distribution."

**Tip 2 - Custom Subagents:**
> "Begin with Claude-generated agents (/agents) and iterate ('e' to edit). Dynamic subagent selection: Claude Code chooses subagents intelligently. Be precise in description fields to guide it."

**Model Selection Tips:**
- Plan with Opus, execute with Sonnet (Shift + Tab to toggle)
- Use CLAUDE.md to clarify project terminology
- Use ccusage to track usage

### Links
- [Subagent Tip](https://x.com/claude_code/status/1939921991336649093)
- [Custom Subagents](https://x.com/claude_code/status/1948622899604050063)

### Reliability Rating
**[PRIMARY]** - Official account

---

## 1.20 Jason Zhou (@jasonzhou1993) - UI Workflow

### Profile
- **Handle:** @jasonzhou1993
- **Role:** Developer
- **Reliability:** MEDIUM-HIGH (Practical workflow)

### Workflow Pattern: Parallel UI Design

**The Discovery:**
> "Cursor for Design? This Claude Code UI workflow is insane. And many vibe coders not aware of it."

**The Technique:**
1. Claude Code can assign parallel tasks to sub agents
2. Integrate with git worktree to create sandbox env
3. Get Claude Code to generate 10 designs at the same time

**Thread:** "I was using Claude Code wrong... Here's what I learnt"
- 730K+ views
- Detailed tips for maximizing performance

### Links
- [UI Workflow](https://x.com/jasonzhou1993/status/1938195729824330201)
- [Tips Thread](https://x.com/jasonzhou1993/status/1948334295120314793)

### Reliability Rating
**[MEDIUM-HIGH]** - High engagement, practical

---

# SECTION 2: WORKFLOW PATTERNS SUMMARY

## Pattern Categories

### 2.1 Session Management Patterns

| Pattern | Source | Complexity | Key Benefit |
|---------|--------|------------|-------------|
| 5 Parallel Terminals | Boris Cherny | Medium | Throughput |
| Git Checkout Isolation | Boris Cherny | Medium | Conflict avoidance |
| Kill-and-Review | John O'Nolan | Low | Objective critique |
| Fresh Eyes Loop | Jeffrey Emanuel | Low | Bug catching |

### 2.2 Context Management Patterns

| Pattern | Source | Complexity | Key Benefit |
|---------|--------|------------|-------------|
| 6-Document System | Cathryn Lavery | Low | Session continuity |
| CLAUDE.md as Memory | Boris Cherny | Low | Team knowledge |
| /context Monitoring | Ado | Low | Visibility |
| On-Demand MCP | Saoud Rizwan | Low | 33% more context |

### 2.3 Execution Patterns

| Pattern | Source | Complexity | Key Benefit |
|---------|--------|------------|-------------|
| Plan Mode First | Matt Pocock | Low | Quality improvement |
| Ralph Wiggum Loop | Matt Pocock | Medium | Autonomous execution |
| Playwright Verification | Gaurav Chande | Medium | UI verification |
| Subagent Delegation | Claude Code Official | Medium | Parallel execution |

### 2.4 Automation Patterns

| Pattern | Source | Complexity | Key Benefit |
|---------|--------|------------|-------------|
| Hooks System | Daniel San | Medium | Deterministic behavior |
| Custom Slash Commands | Boris Cherny | Low | Repeated workflows |
| Skills in Frontmatter | Daniel San | Medium | Structured workflows |

---

# SECTION 3: RELIABILITY FRAMEWORK

## Rating Definitions

| Rating | Definition | Criteria |
|--------|------------|----------|
| **PRIMARY** | Official source | From Anthropic or tool creator |
| **HIGH** | Verified practitioner | Production usage, detailed explanation, builds tools |
| **MEDIUM-HIGH** | Strong signal | High engagement, specific techniques, reproducible |
| **MEDIUM** | Useful but unverified | Curated tips, general advice |
| **LOW** | Anecdotal | Single data point, unverified claims |

## Practitioners by Reliability

### PRIMARY Sources
- Boris Cherny (@bcherny)
- Claude Code Community (@claude_code)

### HIGH Reliability
- Matt Pocock (@mattpocockuk)
- Steve Yegge (@Steve_Yegge)
- Eugene Yan (@eugeneyan)
- John O'Nolan (@JohnONolan)
- Daniel San (@dani_avila7)
- Josh Lehman (@jlehman_)
- Shrivu Shankar (@ShrivuShankar)
- Gaurav Chande (@gauravmc)
- Charlie Holtz (@charliebholtz)
- Rohan Paul (@rohanpaul_ai)
- Saoud Rizwan (@sdrzn)

### MEDIUM-HIGH Reliability
- Cathryn Lavery (@cathrynlavery)
- Jeffrey Emanuel (@doodlestein)
- Igor Tarasenko (@sa1k0s)
- Kieran Klaassen (@kieranklaassen)
- Ado (@adocomplete)
- Jason Zhou (@jasonzhou1993)

### MEDIUM Reliability
- 0xDesigner (@0xDesigner)

---

# SECTION 4: IMPLEMENTATION QUICK REFERENCE

## Immediate Actions (Green - <5 minutes)

1. **Enable Plan Mode**
   ```
   Shift+Tab twice OR /plan
   ```

2. **Add System Prompt Enhancement**
   ```
   "Your context window will be automatically compacted..."
   ```

3. **Use Extended Thinking**
   ```
   "think" | "think hard" | "ultrathink"
   ```

4. **Check Context Usage**
   ```
   /context
   ```

## Medium Lift (Yellow - Hours)

1. **Set Up 6-Document System**
   - Create CONTEXT.md, PROGRESS.md, TODO.md, DECISIONS.md, ISSUES.md, SETUP.md
   - Instruct Claude to update at session start/end

2. **Configure Hooks**
   ```json
   // ~/.claude/settings.json
   {
     "hooks": {
       "PostToolUse": [{
         "matcher": "Edit",
         "hooks": [{
           "type": "command",
           "command": "prettier --write $FILE"
         }]
       }]
     }
   }
   ```

3. **Enable Parallel Subagents**
   ```bash
   claude config set --global parallelTasksCount 3
   ```

## Deep Dive (Red - Days)

1. **Full Parallel Session Setup** (Boris style)
   - 5 terminal tabs
   - Separate git checkouts
   - iTerm2 notifications

2. **Ralph Wiggum Loop**
   - PRD structure
   - Bash loop script
   - Progress tracking

---

# SECTION 5: SOURCE LINKS COMPILATION

## Official
- [Common Workflows - Claude Code Docs](https://code.claude.com/docs/en/common-workflows)
- [Best Practices - Anthropic](https://www.anthropic.com/engineering/claude-code-best-practices)

## Key Threads
- [Boris Cherny Workflow (Kol Tregaskes)](https://x.com/koltregaskes/status/2007498194960441387)
- [Matt Pocock Plan Mode](https://x.com/mattpocockuk/status/1977369846162534555)
- [Matt Pocock Ralph Wiggum](https://x.com/mattpocockuk/status/2007924876548637089)
- [Cathryn Lavery Context Hack](https://x.com/cathrynlavery/status/1950010270530585042)
- [Eugene Yan Jupyter Workflow](https://x.com/eugeneyan/status/1944602251856695345)
- [Steve Yegge Claude Code](https://x.com/Steve_Yegge/status/1898674257808515242)

## Articles
- [InfoQ - Claude Code Creator Workflow](https://www.infoq.com/news/2026/01/claude-code-creator-workflow/)
- [VentureBeat - Creator Reveals Workflow](https://venturebeat.com/technology/the-creator-of-claude-code-just-revealed-his-workflow-and-developers-are)
- [How Boris Uses Claude Code](https://paddo.dev/blog/how-boris-uses-claude-code/)

---

*Document compiled: 2026-01-12*
*Research method: Web search for X/Twitter Claude Code workflow patterns*
*Practitioners documented: 20*
*Workflow patterns captured: 15+*

---

# SECTION 6: NEW PRACTITIONERS - DEEP RESEARCH (2026-01-13)

## Research Update Summary

**Agent:** D1 - Twitter Workflow Practitioners
**Date:** 2026-01-13
**Objective:** Find NEW practitioners beyond existing knowledge base (Boris Cherny, Steve Yegge, Matt Pocock, Ryan Carson, Molly Cantillon, Shrivu Shankar)
**Result:** 10 NEW verified practitioners with concrete projects

---

## P0 - MUST DOCUMENT (Highest Priority)

### 6.1 Jaana Dogan (@rakyll) - Google Principal Engineer

**Identity**
- **Handle:** @rakyll
- **Role:** Principal Engineer
- **Company:** Google
- **Reliability:** PRIMARY (Staff+ at major tech company)

**Concrete Projects**
1. **Distributed Agent Orchestrator**: Replicated 1 year of Google team work in 60 minutes
   - Problem: Building distributed agent orchestration systems
   - Method: 3-paragraph prompt describing the problem
   - Result: Functional initial version matching team's conceptual groundwork

**Key Quotes**
> "I'm not joking and this isn't funny. We have been trying to build distributed agent orchestrators at Google since last year. There are various options, not everyone is aligned... I gave Claude Code a description of the problem, it generated what we built last year in an hour."

> "This industry has never been a zero-sum game, so it's easy to give credit where it's due even when it's a competitor. Claude Code is impressive work."

**Key Techniques**
- Domain expertise + simple prompt = 10x leverage
- Testing AI tools in areas of deep expertise
- 3-paragraph problem description approach

**Verification**
- Primary: https://x.com/rakyll/status/2007239758158975130
- Secondary: https://the-decoder.com/google-engineer-says-claude-code-built-in-one-hour-what-her-team-spent-a-year-on/
- Tertiary: https://simonwillison.net/2026/Jan/4/jaana-dogan/

**Priority Rating: P0**
*Rationale: Staff+ engineer at major tech company with viral, verified claim. Demonstrates enterprise-scale validation.*

---

### 6.2 Dan Shipper (@danshipper) - Every AI CEO

**Identity**
- **Handle:** @danshipper
- **Role:** CEO & Co-founder
- **Company:** Every (AI newsletter, 7-figure revenue)
- **Reliability:** HIGH (Running production business)

**Concrete Projects**
1. **Every's Product Suite**: 5 AI products, 100% AI-written code
   - Tech stack: Claude Code + compound engineering workflow
   - Outcome: 15-person output from 2 engineers
   - Source: https://every.to/chain-of-thought/compound-engineering-how-every-codes-with-agents

2. **Compound Engineering Plugin**: Official Claude Code plugin
   - GitHub: EveryInc/compound-engineering-plugin

3. **Claude Code for Beginners Workshop**: Live training program
   - Source: https://claude101.every.to/

**Key Quotes**
> "Every piece of code shipped in the last two months was written by AI. Not assisted by AI. Written by AI. Claude Code opens 100 percent of pull requests, and team members haven't typed a function in weeks."

> "Two engineers at Every shipped six features, five bug fixes, and three infrastructure updates in one week."

**Key Techniques**
- **Compound Engineering Loop**: Plan → Work → Review → Compound
- **Prompt that writes prompts**: Meta-prompt for creating GitHub issues
- **Multiple parallel terminals**: 4+ Claude instances (Frontend, Backend, Test, Docs)
- Voice-to-feature workflow

**Verification**
- Primary: https://every.to/chain-of-thought/compound-engineering-how-every-codes-with-agents
- Secondary: https://www.lennysnewsletter.com/p/inside-every-dan-shipper
- Tertiary: https://x.com/danshipper/status/2010798228548247795

**Priority Rating: P0**
*Rationale: Running production business with 100% AI-written code. Coined "compound engineering" methodology.*

---

### 6.3 Dexter Horthy - HumanLayer/CodeLayer (YC F24)

**Identity**
- **Handle:** LinkedIn only
- **Role:** Founder
- **Company:** HumanLayer / CodeLayer (YC F24)
- **Reliability:** HIGH (YC-backed, building infrastructure)

**Concrete Projects**
1. **CodeLayer**: OSS IDE for managing coding agents
   - Features: Parallel Claude sessions, worktrees, remote cloud workers
   - Tagline: "Close your editor forever"
   - Source: https://www.humanlayer.dev/

2. **12-Factor Agents Guide**: Viral patterns document for reliable LLM applications
   - Published: April 2025
   - Source: https://github.com/humanlayer/advanced-context-engineering-for-coding-agents

3. **HumanLayer SDK**: API for AI agents to contact humans for approvals
   - Channels: Slack, email, SMS

**Key Quotes**
> "When Anthropic launched Claude Code, we were already strong proponents of Claude models for coding and immediately began using it to build our experiments. We just wrote everything with Claude Code."

> "Once an engineer masters Claude Code, productivity gains are so substantial that the real challenge becomes organizational—scaling these workflows across entire teams."

**Key Techniques**
- Git worktrees for parallel Claude sessions
- Remote cloud workers for scaling
- "Advanced Context Engineering" methodology
- Human-in-the-loop for sensitive operations

**Verification**
- Primary: https://claude.com/blog/building-companies-with-claude-code
- Secondary: https://www.ycombinator.com/companies/humanlayer
- Tertiary: https://github.com/humanlayer/humanlayer

**Priority Rating: P0**
*Rationale: YC-backed, building infrastructure for Claude Code at scale. Author of influential 12-Factor Agents guide.*

---

### 6.4 Anand Chowdhary (@AnandChowdhary) - FirstQuadrant Founder

**Identity**
- **Handle:** @AnandChowdhary
- **Role:** Founder & CEO
- **Company:** FirstQuadrant (YC-backed AI sales platform)
- **Reliability:** HIGH (GitHub Star, YC founder)

**Concrete Projects**
1. **Continuous Claude**: CLI tool to run Claude Code in a loop with persistent context
   - Source: https://anandchowdhary.com/open-source/2025/continuous-claude

2. **Swift Claude Code SDK**: iOS/macOS integration
   - Source: https://anandchowdhary.com/notes/2025/swift-claude-code-sdk

3. **Design Review Workflow**: Automated PR feedback using Playwright MCP

**Key Quotes**
> "Been deep in Claude Code for months now, so this from @PatOakEllis hit home: Practical workflows from an AI-native startup."

**Key Techniques**
- Loop-based Claude Code execution
- Playwright MCP for browser automation
- Cross-platform Claude Code (Swift SDK)

**Verification**
- Primary: https://anandchowdhary.com/blog/2025/running-claude-code-in-a-loop
- Secondary: https://stars.github.com/profiles/anandchowdhary/ (GitHub Star)
- Tertiary: https://x.com/AnandChowdhary/status/1958306807899934738

**Priority Rating: P0**
*Rationale: GitHub Star, YC founder, shipping open-source Claude Code tools.*

---

### 6.5 Patrick Ellis (@PatOakEllis) - OneRedOak Founder

**Identity**
- **Handle:** @PatOakEllis
- **Role:** Founder
- **Company:** OneRedOak (AI-native startup)
- **Reliability:** HIGH (Open-source tools, tutorials)

**Concrete Projects**
1. **claude-code-workflows**: Production workflow configurations
   - Features: Automated Code Review, Security Review, Design Review
   - GitHub: https://github.com/OneRedOak/claude-code-workflows

2. **Automated Design Review System**:
   - Uses Playwright MCP for browser automation
   - Checks UI/UX consistency and accessibility
   - Dual-loop architecture with slash commands + GitHub Actions

3. **YouTube Tutorial Series**: Comprehensive Claude Code workflow demos

**Key Techniques**
- Dual-loop architecture (slash commands + GitHub Actions)
- Playwright MCP for visual testing
- Automated PR review system
- Style guide adherence checking

**Verification**
- Primary: https://github.com/OneRedOak/claude-code-workflows
- Secondary: https://x.com/AnandChowdhary/status/1958306807899934738 (cited by Anand)

**Priority Rating: P0**
*Rationale: Open-source production workflows, cited by other practitioners.*

---

## P1 - HIGH VALUE

### 6.6 Eyad Khrais (@eyad_khrais) - Varikai CTO

**Identity**
- **Handle:** @eyad_khrais
- **Role:** CTO
- **Company:** Varikai (enterprise AI agents)
- **Background:** 7 years at Amazon, Disney, Capital One
- **Location:** NYC

**Concrete Projects**
1. **Enterprise Agent Systems**: AI agents for automatic PR reviews, support tickets, logging

2. **Claude Code Tutorial Series**: Beginner playbook + Level 2 advanced guide

**Key Quotes**
> "Enterprises are using Claude Code for automatic PR reviews, automatic support ticket responses, automatic logging and documentation updates—all of it logged, auditable, and improving over time."

> "If you're only using Claude interactively, you're leaving value on the table."

**Key Techniques**
- CLAUDE.md flywheel: mistake → review logs → improve config → compound improvement
- Enterprise audit logging
- 200K context advantage over Cursor (70-120K in practice)
- Custom subagents in ~/.claude/agents/

**Verification**
- Primary: https://x.com/eyad_khrais/status/2010076957938188661
- Secondary: https://x.com/Med7atDawoud/status/2010443348356821396 (endorsement)

**Priority Rating: P1**
*Rationale: Enterprise focus, practical tutorials, FAANG background.*

---

### 6.7 Kieran Klaassen - Every Senior Engineer (ENHANCED)

**Identity**
- **Handle:** @kieranklaassen
- **Role:** Senior Engineer
- **Company:** Every (working on Cora product)
- **Note:** Already in document 1.12, but major new information discovered

**NEW Concrete Projects**
1. **Compound Engineering Methodology**: Self-improving development systems
   - Coined the term "compound engineering"
   - Source: https://every.to/chain-of-thought/compound-engineering-how-every-codes-with-agents

2. **Every's AI Products**: 5 products built with Claude Code
   - Tech: Claude Code subagents, slash commands

**Key Quotes**
> "Slash commands are really good for starting work—things like planning a big feature or doing a first pass review. Subagents are more like colleagues you call in mid-stream."

**Key Techniques**
- Compound engineering loop (Plan → Work → Review → Compound)
- Subagents as "colleagues you call in mid-stream"
- Two engineers producing output of fifteen

**Verification**
- Primary: https://every.to/chain-of-thought/compound-engineering-how-every-codes-with-agents
- Secondary: https://every.to/podcast/how-two-engineers-ship-like-a-team-of-15-with-ai-agents

**Priority Rating: P1**
*Rationale: Coined compound engineering term, working in production at Every.*

---

### 6.8 Simon Willison (@simonw) - Django Co-creator

**Identity**
- **Handle:** @simonw
- **Role:** Independent Developer & Blogger
- **Background:** Django co-creator, AI tools researcher
- **Reliability:** HIGH (Industry veteran)

**Concrete Projects**
1. **"Claude Skills are awesome, maybe a bigger deal than MCP"**: Influential analysis
   - Source: https://simonwillison.net/2025/Oct/16/claude-skills/

2. **Playwright MCP Integration Guide**: TIL documentation
   - Source: https://til.simonwillison.net/claude-code/playwright-mcp-claude-code

**Key Quotes**
> "Almost everything achievable with an MCP can be handled by a CLI tool instead. LLMs know how to call `cli-tool --help`, meaning you don't need to spend many tokens describing how to use them."

> "Skills are Markdown with a tiny bit of YAML metadata and some optional scripts. They feel a lot closer to the spirit of LLMs—throw in some text and let the model figure it out."

**Key Techniques**
- Skills vs MCP analysis
- CLI tool integration philosophy
- Playwright MCP setup: `claude mcp add playwright npx '@playwright/mcp@latest'`

**Verification**
- Primary: https://simonwillison.net/2025/Oct/16/claude-skills/
- Secondary: https://x.com/simonw/status/1940197916267986946

**Priority Rating: P1**
*Rationale: Influential voice in developer tools, provides architectural analysis.*

---

### 6.9 Treasure Data Engineering (Saito)

**Identity**
- **Role:** Engineer
- **Company:** Treasure Data
- **Reliability:** HIGH (Enterprise case study with metrics)

**Concrete Projects**
1. **Treasure Data MCP Server**: Built in 1 day (normally 2-3 weeks)

2. **TD Skills for Claude Code**: Open-source skills package
   - GitHub: https://github.com/treasure-data/td-skills

**Key Quotes**
> "I could build the Treasure Data MCP server in one day because I know Treasure Data's internals and APIs, and I have the expertise needed for understanding the generated code."

**Key Techniques**
- Domain expertise + Claude Code = 10x productivity
- Task completion time tracking via GitHub
- Code authorship measurement via commit history
- Skills for teaching Claude company-specific tools

**Metrics**
- Team adoption: 20% → 80%
- MCP Server build time: 2-3 weeks → 1 day

**Verification**
- Primary: https://www.treasuredata.com/blog/engineering-team-agentic-ai
- Secondary: https://github.com/treasure-data/td-skills

**Priority Rating: P1**
*Rationale: Enterprise case study with metrics. Open-source skills.*

---

### 6.10 ruvnet (GitHub)

**Identity**
- **Handle:** ruvnet
- **Role:** Open Source Developer
- **Reliability:** HIGH (Most sophisticated OSS orchestration)

**Concrete Projects**
1. **claude-flow**: Leading agent orchestration platform
   - Features: 64 specialized agents, 87 MCP tools, hive-mind swarm intelligence
   - GitHub: https://github.com/ruvnet/claude-flow
   - Website: https://claude-flow.ruv.io/

2. **agentic-flow**: Production agent deployment platform
   - Features: 66 self-learning agents, 213 MCP tools
   - GitHub: https://github.com/ruvnet/agentic-flow

**Key Techniques**
- Multi-agent swarm orchestration
- 25 Claude Skills with natural language activation
- AgentDB integration (96x-164x faster vector search)
- Agent types: coordinator, researcher, coder, analyst, architect, tester, reviewer

**Verification**
- Primary: https://github.com/ruvnet/claude-flow
- Secondary: https://github.com/ruvnet/claude-flow/releases (active development)

**Priority Rating: P1**
*Rationale: Most sophisticated open-source orchestration platform.*

---

## P2 - WORTH TRACKING

### 6.11 Robert Matsuoka (@bobmatnyc) - Hyperdev

**Identity**
- **Handle:** @bobmatnyc
- **Role:** Engineering Executive
- **Blog:** Hyperdev (https://hyperdev.matsuoka.com/)

**Concrete Projects**
1. **AI Travel Assistant**: Full-stack prototype in 6 days
   - Output: 40,000+ lines of production-ready code
   - Source: https://hyperdev.matsuoka.com/p/50-first-dates-with-claude-code

**Key Quotes**
> "Hyperdev is real, transformative, and rapidly evolving—but no magical replacement for good engineering."

**Key Techniques**
- Executive-to-coder transition via AI tools
- Hybrid approach: Claude Code + GPT-4 + Augment Code
- "50 First Dates" analogy about context loss

**Verification**
- Primary: https://hyperdev.matsuoka.com/p/50-first-dates-with-claude-code
- Secondary: https://medium.com/@bobmatnyc/50-first-dates-with-claude-code-181607044282

**Priority Rating: P2**
*Rationale: Executive perspective, interesting context loss analogy.*

---

## BONUS: Organizations & Trends

### Thoughtbot - Design Sprint Transformation

**Project**: TellaDraft Design Sprint
- **Method**: Claude Code for working prototypes in hours
- **Quote**: "I was handed a cutting-edge, technologically functional prototype. Not just pictures, but actual screens, real interactions, and a product we could already start testing." - Heather Hays, TellaDraft Founder
- **Source**: https://thoughtbot.com/blog/rapid-prototyping-with-claude-code-how-we-transformed-our-design-sprint-process

### YC Startup Ecosystem Shift

**Trend**: Claude models now preferred by 52%+ of W26 batch (up from 25% in early 2025)
- **Key insight**: "Anthropic has developed a reputation for providing top-line coding models"
- **Featured startups**: HumanLayer, Ambral, Asterisk (Claudia GUI)
- **Source**: https://www.inc.com/ben-sherry/the-ai-models-that-top-startups-are-suddenly-choosing-over-chatgpt/91281830

---

## Cross-Reference: Key Techniques by Practitioner

| Technique | Practitioners Using It |
|-----------|----------------------|
| Parallel Claude instances | Jaana Dogan, Dan Shipper, Kieran Klaassen, Jason Zhou |
| Git worktrees | Dexter Horthy, Jason Zhou, Josh Lehman |
| Compound engineering loop | Dan Shipper, Kieran Klaassen |
| CLAUDE.md flywheel | Eyad Khrais, Boris Cherny |
| Playwright MCP | Patrick Ellis, Anand Chowdhary, Simon Willison, Gaurav Chande |
| Custom skills/agents | ruvnet, Eyad Khrais, Treasure Data |
| Domain expertise + AI | Jaana Dogan, Treasure Data (Saito) |
| Loop-based execution | Anand Chowdhary, Matt Pocock (Ralph) |

---

## Recommendations for Knowledge Base

### Immediate Actions
1. Create extraction files for P0 practitioners (5 files)
2. Add to practitioners/index.html with proper categorization
3. Update SOURCE-INDEX.md with new Twitter sources

### Synthesis Opportunities
1. **New synthesis file**: `synthesis/techniques-parallel-claude.md` (git worktrees, subagents, terminals)
2. **New synthesis file**: `synthesis/methodology-compound-engineering.md` (Every's approach)
3. **Update**: `synthesis/mastery-context-management.md` with CLAUDE.md flywheel pattern

### Pattern Documentation
1. **Jaana Dogan pattern**: "Domain expertise + simple prompt = 10x leverage"
2. **Every pattern**: "Compound engineering self-improving loop"
3. **HumanLayer pattern**: "Human-in-the-loop for sensitive operations"

---

*Section 6 added: 2026-01-13*
*New practitioners documented: 10*
*Total practitioners in document: 30*

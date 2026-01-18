# Anthropic Internal Developer Workflows - Twitter/X Research

**Research Date:** 2026-01-12
**Focus:** Developers at Anthropic or working closely with Anthropic sharing internal techniques, best practices, and official insights
**Reliability:** HIGH (direct from Anthropic employees and official sources)

---

## D-FINAL Connection

**Sources contributed to:** All D-FINAL files
**Last enhanced:** 2026-01-18 (Phase 2B)

---

## Key Anthropic Handles & Contributors

### Confirmed Anthropic Staff with Active Twitter/X Presence

| Handle | Name | Role | Reliability |
|--------|------|------|-------------|
| **@bcherny** | Boris Cherny | Creator & Head of Claude Code | HIGHEST - Primary source |
| **@trq212** | Thariq Shihipar | Member of Technical Staff, Claude Code team | HIGH - Direct team member |
| **@alexalbert__** | Alex Albert | Head of Claude Relations | HIGH - Product announcements |
| **@AmandaAskell** | Amanda Askell | Character/Alignment team | HIGH - Model behavior insights |
| **@AnthropicAI** | Anthropic (Official) | Company account | OFFICIAL |

### Named Contributors (Best Practices Doc)
Engineers acknowledged in official Claude Code best practices documentation:
- Daisy Hollman
- Ashwin Bhat
- Cat Wu (PM for Claude Code)
- Sid Bidasaria
- Cal Rueb
- Nodir Turakulov
- Barry Zhang
- Drew Hodun

*Note: Individual Twitter handles for these engineers not publicly indexed.*

---

## Boris Cherny (@bcherny) - Complete Workflow Revelation

**Source:** Viral X thread (December 2025/January 2026)
**Context:** "I'm Boris and I created Claude Code. Lots of people have asked how I use Claude Code, so I wanted to show off my setup a bit."

### Core Philosophy
> "My setup might be surprisingly vanilla! Claude Code works great out of the box, so I personally don't customize it much. There is no one correct way to use Claude Code."

### Parallel Session Architecture
- **5 terminal sessions** running simultaneously (iTerm2, tabs numbered 1-5)
- **5-10 additional sessions** on claude.ai/code in browser
- **Mobile sessions** started from Claude iOS app each morning
- Uses **system notifications** to know when a session needs input
- Each local session uses **its own git checkout** (not branches or worktrees)
- **10-20% of sessions abandoned** due to unexpected scenarios

### Model Selection
> "I use Opus 4.5 with thinking for everything. It's the best coding model I've ever used, and even though it's bigger & slower than Sonnet, since you have to steer it less and it's better at tool use, it is almost always faster than using a smaller model in the end."

### Plan Mode Workflow
1. Start most sessions in **Plan mode** (Shift+Tab twice)
2. Go back and forth with Claude until plan is satisfactory
3. Switch to **auto-accept edits mode**
4. Claude usually "1-shots" the implementation
> "A good plan is really important!"

### CLAUDE.md Team Practice
- Single CLAUDE.md file in git repository
- **2.5k tokens** current size
- Team adds learnings whenever Claude does something incorrectly
- Uses **@.claude tag** on coworkers' PRs to suggest CLAUDE.md additions
> "Anytime we see Claude do something incorrectly we add it to the CLAUDE.md, so Claude knows not to do it next time."

### Slash Commands
- Uses slash commands for "every inner loop workflow"
- Commands checked into git at `.claude/commands/`
- Example: `/commit-push-pr` used "dozens of times every day"
> "This saves from repeated prompting and makes it so Claude can use these workflows too."

### PostToolUse Hooks
- Hook configured to auto-format Claude's code
- Claude generates well-formatted code ~90% of the time
- Hook handles remaining 10% to avoid CI formatting errors

### Permissions Strategy
- Does NOT use `--dangerously-skip-permissions`
- Uses `/permissions` to pre-allow safe bash commands
- Most permissions checked into `.claude/settings.json`
- Shared with team

### Tool Integrations
- **Slack MCP server** - searches and posts messages
- **BigQuery CLI** - analytics queries
- **Sentry** - error log retrieval
- **Chrome extension** - UI testing
- MCP configuration in `.mcp.json`, shared with team

### Verification Philosophy (Most Important)
> "Probably the most important thing to get great results out of Claude Code: give Claude a way to verify its work. If Claude has that feedback loop, it will 2-3x the quality of the final result."

- Tests every claude.ai/code change using Chrome extension
- Opens browser, tests UI, iterates until UX feels good

### Productivity Metrics
In 30 days:
- **259 PRs landed**
- **497 commits**
- **40k lines added**
- **38k lines removed**
- "Every single line was written by Claude Code + Opus 4.5"

---

## Thariq Shihipar (@trq212) - Claude Code as General Agent

**Source:** X post (December 2025)
**Role:** Member of Technical Staff, Claude Code team

### Key Insight
> "When I first joined Anthropic I was surprised to learn that lots of the team used Claude Code as a general agent, not just for code. I've since become a convert! I use Claude Code to help me with almost all the work I do now."

### Technical Security Work
- Announced safeguards against "spoofing the Claude Code harness"
- Addressed third-party harness issues affecting tools like OpenCode
- Acknowledged "unintended collateral damage" in rollout
- Cited "technical instability" from unauthorized harnesses

---

## Alex Albert (@alexalbert__) - MCP & Product Announcements

**Role:** Head of Claude Relations at Anthropic
**Followers:** 112.7K

### Key Contributions
- Announced Claude Desktop app (October 2024)
- Demonstrated MCP integration capabilities
- Example workflow: Claude connecting to GitHub, creating repos, making PRs via MCP
> "Once MCP was set up in Claude desktop, building this integration took less than an hour."

---

## Amanda Askell (@AmandaAskell) - Character & Alignment

**Role:** Works on Claude's character and alignment

### Key Confirmation
> "I just want to confirm that this is based on a real document and we did train Claude on it, including in SL. It's something I've been working on for a while, but it's still being iterated on." (December 1, 2025)

---

## Anthropic Internal Team Workflows (Official Sources)

### Teams Using Claude Code

| Team | Use Case | Productivity Gain |
|------|----------|-------------------|
| **Inference** | Documentation lookup | 80% reduction in research time |
| **Security Engineering** | Incident response | 3x faster problem resolution |
| **Data Infrastructure** | Kubernetes outage analysis | 20 minutes saved per incident |
| **Product Engineering** | Auto-accept mode coding | 70% of Vim mode code written by Claude |
| **Growth Marketing** | Ad generation | "Hundreds in minutes" |
| **Legal** | Phone tree systems | Prototype built without coding experience |
| **Product Design** | Autonomous iteration loops | Write code → run tests → iterate |

### Security Team Transformation
**Before:** design doc → janky code → refactor → give up on tests
**After:** Ask Claude for pseudocode → TDD guidance → periodic check-ins

### Non-Technical Success Stories
- Lawyers built phone tree systems
- Marketers generated hundreds of ad variations in seconds
- Data scientists created JavaScript visualizations without knowing JavaScript
- Figma plugin reduced ad variation creation from hours to "half a second per batch"

---

## Official Best Practices (Anthropic Engineering)

### CLAUDE.md Configuration
```
Locations (checked in order):
- Repository root
- Parent directories (for monorepos)
- Child directories
- ~/.claude/CLAUDE.md (global, all sessions)
```

### Slash Commands System
```
Location: .claude/commands/
Format: Markdown files with prompt templates
Feature: $ARGUMENTS keyword for parameterization
Sharing: Check into git for team access
Personal: ~/.claude/commands/
```

### Extended Thinking Keywords
- "think" - Standard extended thinking
- "think hard" - More extended thinking
- "ultrathink" - Maximum extended thinking

### Permission Management
```bash
# Session-specific
--allowedTools flag

# Persistent
/permissions command
.claude/settings.json
~/.claude.json
```

### Safe YOLO Mode
```bash
claude --dangerously-skip-permissions
# ONLY in containers without internet access
# Use for: lint fixes, boilerplate generation
```

### Multi-Claude Patterns
1. One Claude writes code, another reviews
2. `/clear` between tasks to reset context
3. Separate git checkouts for parallel work
4. `git worktree add ../project-feature-a feature-a`

### Headless Mode
```bash
# Non-interactive use
-p "prompt here"
--output-format stream-json
--verbose (for debugging)
```

---

## Key Techniques Summary

### The Verification Imperative
The single most important technique emphasized by Boris Cherny:
1. Give Claude a way to verify its own work
2. This creates a feedback loop
3. Results in 2-3x quality improvement

### Plan-First Workflow
1. Start in Plan mode (Shift+Tab twice)
2. Iterate on plan until satisfied
3. Switch to auto-accept mode
4. Let Claude execute

### Test-Driven Development (Anthropic Favorite)
1. Have Claude write tests from expected I/O pairs
2. Run tests, confirm they fail
3. Commit tests
4. Implement iteratively
5. Request independent verification against overfitting

### Context Management
- Use `/clear` frequently during long sessions
- Create checklists/scratchpads for multi-step tasks
- Use subagents for complex problems
- Preserve context availability

---

## Source Links

### Primary Sources
- [Boris Cherny X Thread](https://x.com/bcherny/status/2007179832300581177)
- [Thariq Shihipar X Post](https://x.com/trq212/status/1944877527044120655)
- [Alex Albert X Profile](https://x.com/alexalbert__)
- [Amanda Askell X Profile](https://x.com/AmandaAskell)
- [Anthropic Official X](https://x.com/AnthropicAI)

### Official Documentation
- [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)
- [How Anthropic Teams Use Claude Code](https://claude.com/blog/how-anthropic-teams-use-claude-code)
- [Introducing Agent Skills](https://www.anthropic.com/news/skills)
- [Claude Agent SDK](https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk)

### Coverage
- [VentureBeat - Boris Cherny Workflow](https://venturebeat.com/technology/the-creator-of-claude-code-just-revealed-his-workflow-and-developers-are)
- [InfoQ - Claude Code Creator Workflow](https://www.infoq.com/news/2026/01/claude-code-creator-workflow/)
- [Slashdot - Creator Reveals Workflow](https://developers.slashdot.org/story/26/01/06/2239243/creator-of-claude-code-reveals-his-workflow)

---

## Cross-References

Related files in this repository:
- `extractions/deep/boris-cherny-extraction.md` - Deep dive on Boris Cherny's philosophy
- `synthesis/mastery-context-management.md` - Context management patterns
- `synthesis/MASTER-PLAYBOOK.md` - Complete capability progression
- `claude-code-mastery.md` - Core techniques documentation

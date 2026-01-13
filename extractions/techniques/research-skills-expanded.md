# Claude Code Skills & Custom Slash Commands - Exhaustive Research

A comprehensive corpus on Claude Code's skill system: creation, structure, triggers, community skills, plugins, and best practices. Compiled from official documentation, community implementations, and power user discoveries.

---

## Part 1: Foundational Concepts

### What Are Skills?

Skills are **Markdown files (.md)** that extend Claude Code's capabilities. They act as recipes, templates, or instruction sets that Claude references on demand.

**Key Properties:**
- Plain text Markdown format
- Stored in `.claude/` directories or uploaded to Claude projects
- Load on demand based on query relevance or explicit invocation
- Can be project-specific or global

**Mental Model:**
> "View .md files as building blocks for an AI-enhanced personal OS - like hiring specialists that reference your curated context on demand." - @elliot_garreffa

---

### Skills vs Slash Commands vs Subagents vs Hooks

| Feature | Slash Commands | Skills | Subagents | Hooks |
|---------|---------------|--------|-----------|-------|
| **What** | Quick, atomic actions | Instruction sets/recipes | Mini-Claudes with isolated context | Event-driven shell commands |
| **Where** | `.claude/commands/` | `.claude/skills/` or uploaded | `.claude/agents/` | `.claude/settings.json` |
| **Trigger** | Manual (`/command`) | Query relevance or manual load | Task tool or `/agent` | Lifecycle events |
| **Context** | Main conversation | Main conversation | Isolated context window | N/A (shell only) |
| **Best For** | Repetitive inner-loop tasks | Complex workflows, personas | Multi-step reasoning, parallel work | Auto-formatting, linting, notifications |
| **Complexity** | Low | Medium | High | Low |

---

### Skills vs Plugins

**Skills:**
- Pure Markdown instructions
- No code execution capabilities beyond Claude's tools
- Lightweight, portable
- Focus on prompting and guidance

**Plugins:**
- Full packages with code, hooks, commands, skills
- Can include shell scripts, databases, APIs
- Heavier, more powerful
- Focus on extending capabilities

**Example:** Claude-Mem is a **plugin** (hooks, SQLite, worker process). A "brand-voice" skill is just a **Markdown file** with tone guidelines.

---

## Part 2: Creating Custom Skills

### Basic Skill Structure

**Location:** `.claude/skills/` or `~/.claude/skills/` (global)

**Minimal Example:**
```markdown
# Brand Voice Skill

## Purpose
Ensure all written content matches our brand voice.

## Voice Characteristics
- Tone: Confident but approachable
- Vocabulary: Technical but accessible
- Avoid: Jargon without explanation, passive voice
- Prefer: Active voice, concrete examples

## Application Rules
1. Always start with the user's problem, not our solution
2. Use "you" more than "we"
3. Include at least one specific example per concept
4. End with a clear call-to-action
```

### Advanced Skill Structure

**Full-Featured Example (from CC Mirror Orchestration):**

```markdown
# Orchestration Skill

## Mental Model
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   You are the Conductor on the trading floor of agents        ║
║                                                               ║
║   Fast. Decisive. Commanding a symphony of parallel work.    ║
║   Users bring dreams. You make them real.                    ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝

## The Iron Law
YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS.
YOU DO NOT EXPLORE CODEBASES.
You are the CONDUCTOR. Your agents play the instruments.

## Tool Ownership

### Orchestrator Uses Directly
- `Read` (references, guides, agent outputs—1-2 files max)
- `TaskCreate`, `TaskUpdate`, `TaskGet`, `TaskList`
- `AskUserQuestion`
- `Task` (to spawn workers)

### Workers Use Directly
- `Read`, `Write`, `Edit`, `Bash`
- `Glob`, `Grep`, `WebFetch`, `WebSearch`, `LSP`
- **CAN'T:** Spawn sub-agents or manage task graph

## Worker Preamble Template
CONTEXT: You are a WORKER agent, not an orchestrator.

RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report your results with absolute file paths

TASK:
[Your specific task here]

## Model Selection

| Model | Use Case |
|-------|----------|
| **Haiku** | Errand runner: fetch files, grep, simple lookups. Spawn 5-10 in parallel |
| **Sonnet** | Capable worker: structured implementation, following patterns, test gen |
| **Opus** | Complex reasoning, architecture decisions, ambiguous tasks |

## Core Philosophy
1. ABSORB COMPLEXITY, RADIATE SIMPLICITY
2. PARALLEL EVERYTHING
3. NEVER EXPOSE THE MACHINERY
4. CELEBRATE WINS
5. BE GENUINELY HELPFUL
```

**Source:** github.com/numman-ali/cc-mirror/blob/main/src/skills/orchestration/SKILL.md
**Author:** @nummanali
**Token Cost:** ~5,299 tokens

---

### Skill File Naming Conventions

**Recommended Structure:**
```
.claude/
├── skills/
│   ├── brand-voice.md           # Simple skills
│   ├── copywriter/
│   │   └── SKILL.md             # Complex skills with subfolder
│   ├── orchestration/
│   │   └── SKILL.md
│   └── research/
│       └── SKILL.md
├── commands/
│   ├── today.md                 # Slash commands
│   └── wrapup.md
└── agents/
    └── adversarial-critic.md    # Subagent definitions
```

**Key Rules:**
1. Use kebab-case for filenames
2. Use `SKILL.md` (uppercase) for primary skill file in subfolders
3. Keep skills focused - one purpose per file
4. Include clear purpose section at top

---

## Part 3: Skill Triggers & Invocation

### Manual Invocation

**Method 1: Direct Load Request**
```
"Load the orchestration skill and initiate"
```

**Method 2: Slash Command Style**
```
/skill brand-voice
```

**Method 3: Via Plugin System**
```bash
/plugin install myskill@marketplace
```

### Automatic Activation

Skills can auto-trigger based on query relevance:

**Example from CLAUDE.md:**
```markdown
# Skills

## Available Skills
- crypto-sovereignty-analyst: Use when analyzing financial history, authoritarianism, institutional failures
- essence: Use when user wants to "extract essence", "understand the soul of", "capture the philosophy"
- youtube-research: Use when user provides YouTube URL or video ID
```

**Trigger Phrases:**
- Explicit: "Load the X skill", "/skill X"
- Semantic: Query matches skill's stated purpose
- Pattern: User language matches trigger phrases in skill description

### Caveat: Ambiguous Queries

> "Skills may not auto-trigger on ambiguous queries" - @gregisenberg

For reliable triggering, use explicit invocation or add clear trigger phrases to skill descriptions.

---

## Part 4: Passing Arguments to Skills

### Basic Arguments

**In Skill Invocation:**
```
/skill research --topic "quantum computing" --depth deep
```

**In Skill Definition (MDFlow style):**
```markdown
---
model: sonnet
---
Write a short poem about {argument}.
```

**Run:** `mdflow poem.claude` or `./poem.claude.md`

### Advanced: Piping & Chaining

**MDFlow Pattern (mdflow.dev):**
```bash
./tree.gemini.md | ./md-to-html.gemini.md
```

Treat .md files as CLI-executable scripts that pipe outputs.

---

## Part 5: Community Skills & Resources

### CC Mirror (@nummanali)
- **Source:** github.com/numman-ali/cc-mirror
- **What:** Enables disabled multi-agent orchestration in Claude Code
- **Key Skill:** orchestration/SKILL.md
- **Install:**
```bash
npx cc-mirror quick --provider mirror --name mclaude
mclaude
"Load the orchestration skill and initiate"
```
- **Actionability:** Medium (needs CC Mirror setup)

---

### Ralph Wiggum Marketer (@koylanai / Muratcan Koylan)
- **Source:** github.com/muratcankoylan/ralph-wiggum-marketer
- **What:** Self-critiquing content loop for marketing copy
- **Install:**
```bash
/plugin marketplace add muratcankoylan/ralph-wiggum-marketer
/plugin install ralph-wiggum-marketer@muratcankoylan-ralph-wiggum-marketer
```
- **Commands:**
  - `/ralph-init` - Initialize project
  - `/ralph-marketer` - Start the loop
  - `/ralph-status` - Check progress
  - `/ralph-cancel` - Stop
- **Skills Included:** `skills/copywriter/SKILL.md`
- **File Structure:**
```
.claude-plugin/plugin.json     # Plugin manifest
commands/ralph-marketer.md     # Main loop prompt
commands/ralph-init.md         # Initialization
commands/ralph-status.md       # Status check
commands/ralph-cancel.md       # Cancel
skills/copywriter/SKILL.md     # Copywriter skill
hooks/hooks.json               # Hook config
hooks/stop-hook.sh             # Loop continuation
scripts/src/seed.js            # DB seeding
templates/prd.json             # Task template
```
- **Actionability:** Medium

---

### Amp Skills (@ryancarson / Ryan Carson)
- **Source:** github.com/snarktank/amp-skills
- **What:** Skills for PRD generation and Ralph JSON conversion
- **Location:** `~/.config/amp/skills/`
- **Skills:**
  - `prd/` - PRD generation skill
  - `ralph/` - JSON conversion skill
- **Usage:**
```
"Load the prd skill and create a PRD for [feature]"
"Load the ralph skill and convert tasks/prd-feature.md to prd.json"
```
- **Actionability:** Medium

---

### Vibe Skills (thevibemarketer.com/skills)
- **Source:** thevibemarketer.com/skills
- **What:** 10 .md-based Claude skills for marketing
- **Skills Included:**
  - Brand Voice
  - Keyword Research
  - Positioning
  - Content Strategy
  - + Creative Pack for asset generation
- **Usage:** Upload to Claude as skill, auto-references in chats
- **Actionability:** Quick Win

---

### N-Skills (@nummanali)
- **Source:** numman-ali/n-skills (marketplace)
- **What:** Collection of skills including Gas Town tutorial
- **Install:**
```bash
/plugin marketplace add numman-ali/n-skills
/plugin install gastown@numman-ali/n-skills
```
- **Actionability:** Quick Win

---

### Claude-Mem (@thedotmack)
- **Source:** github.com/thedotmack/claude-mem
- **What:** Persistent memory plugin with `mem-search` skill
- **Install:**
```bash
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
```
- **Relevant Skills:** `mem-search` for manual memory queries
- **Actionability:** Medium

---

### Claude HUD (@jarrodwatts)
- **Source:** github.com/jarrodwatts/claude-hud
- **What:** Real-time session visibility plugin
- **Install:**
```bash
/plugin marketplace add jarrodwatts/claude-hud
/plugin install claude-hud
/claude-hud:setup
```
- **Shows:** Context remaining, tools executing, subagents running, todo progress
- **Actionability:** Quick Win

---

## Part 6: Skill Composition & Chaining

### Sequential Skill Chaining

**Pattern: Output of one skill feeds next**
```
1. Load research skill → gather sources
2. Load synthesis skill → create summary
3. Load writing skill → produce final content
```

### Parallel Skill Execution

**Via Subagents:**
```markdown
# Orchestration Pattern
1. Spawn research-agent with research skill
2. Spawn writer-agent with writing skill
3. Orchestrator coordinates outputs
```

### Nested Skills

**Reference other skills within skills:**
```markdown
# Master Skill

## Dependencies
Load these skills first:
- brand-voice.md (for tone)
- research.md (for fact-checking)

## Workflow
1. Apply brand-voice for all outputs
2. Use research patterns for claims
3. Combine into final deliverable
```

---

## Part 7: Plugin Architecture (for Skill Packaging)

### Plugin Manifest Structure

**`.claude-plugin/plugin.json`:**
```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "What this plugin does",
  "author": "yourhandle",
  "commands": [
    {
      "name": "my-command",
      "description": "Command description",
      "file": "commands/my-command.md"
    }
  ],
  "skills": [
    {
      "name": "my-skill",
      "file": "skills/my-skill.md",
      "triggers": ["keyword1", "keyword2"]
    }
  ],
  "hooks": {
    "file": "hooks/hooks.json"
  }
}
```

### Hooks Configuration

**`hooks/hooks.json`:**
```json
{
  "PostToolUse": [
    {
      "matcher": "Edit",
      "command": "prettier --write $FILE"
    },
    {
      "matcher": "Write",
      "command": "black $FILE"
    }
  ],
  "SessionStart": [
    {
      "command": "echo 'Session started' >> ~/.claude-logs/sessions.log"
    }
  ]
}
```

### Directory Structure

```
my-plugin/
├── .claude-plugin/
│   └── plugin.json              # Manifest
├── commands/
│   ├── init.md                  # Slash commands
│   ├── run.md
│   └── status.md
├── skills/
│   ├── main/
│   │   └── SKILL.md             # Primary skill
│   └── helper/
│       └── SKILL.md             # Supporting skill
├── hooks/
│   ├── hooks.json               # Hook configuration
│   └── post-edit.sh             # Hook scripts
├── scripts/
│   └── setup.js                 # Setup scripts
└── templates/
    └── config.json              # Templates
```

---

## Part 8: Best Practices & Patterns

### Skill Design Principles

1. **Single Responsibility**
   - One skill, one purpose
   - Don't cram multiple workflows into one file

2. **Clear Mental Models**
   - Use ASCII art, metaphors
   - Make the role/purpose viscerally clear

3. **Explicit Tool Ownership**
   - State which tools the skill uses
   - Prevent tool conflicts in multi-agent scenarios

4. **Progressive Disclosure**
   - Start with high-level purpose
   - Detail rules/constraints later
   - Examples at the end

5. **Verifiable Outputs**
   - Include acceptance criteria
   - Define "done" explicitly

### Anti-Patterns

1. **Context Pollution**
   > "Don't cram complex logic into slash commands - it pollutes main context." - Claude Code Mastery

2. **Skill Bloat**
   - ~5,000+ tokens becomes expensive
   - Split large skills into composable pieces

3. **Vague Triggers**
   - Ambiguous trigger phrases cause misfires
   - Be specific about when skill should activate

4. **Missing Tool Boundaries**
   - Workers spawning sub-agents creates recursion
   - Always define what agents CAN'T do

### Token Cost Considerations

**@wishful_data:** "That skill is 5299 tokens"

**@nummanali response:**
> "The additional instructions guide the orchestrator to manage sub agents, saving its own tokens significantly."

**Trade-off:** High initial skill cost, but saves tokens via delegation and focused work.

---

## Part 9: Debugging Skills

### Common Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| Skill doesn't trigger | Ambiguous query | Use explicit invocation |
| Wrong behavior | Conflicting instructions | Simplify, use clear priorities |
| Context overflow | Skill too large | Split into smaller skills |
| Tool conflicts | Multiple skills using same tools | Define tool ownership explicitly |
| Recursion | Workers spawning sub-agents | Add explicit "CAN'T" rules |

### Debugging Workflow

1. **Check Loading:**
   ```
   "What skills are currently loaded?"
   ```

2. **Test Isolation:**
   - Load skill alone in fresh session
   - Verify expected behavior

3. **Review Triggers:**
   - Are trigger phrases specific enough?
   - Any conflicts with other skills?

4. **Token Audit:**
   - How many tokens is the skill?
   - Is context hitting limits?

5. **Use Claude HUD:**
   - Monitor context usage in real-time
   - See which tools are executing

---

## Part 10: Enterprise & Team Skill Management

### Shared Skills via CLAUDE.md

**In repository root:**
```markdown
# CLAUDE.md

## Team Skills

### Available Skills
All team members have access to:
- code-review.md - Standard review checklist
- pr-template.md - PR description generator
- test-writer.md - Unit test generation

### Skill Location
Skills are stored in `.claude/skills/team/`

### Adding New Skills
1. Create skill file in `.claude/skills/team/`
2. Add entry to this CLAUDE.md
3. Commit and push
4. Team members pull to access
```

### Version Control for Skills

**Pattern: Git-backed skills**
```
.claude/
├── skills/
│   ├── v1/
│   │   └── deprecated-skill.md
│   └── v2/
│       └── current-skill.md
└── CHANGELOG.md
```

### Skill Templates for Teams

**Standardized Format:**
```markdown
# [Skill Name]

## Metadata
- Version: X.Y.Z
- Author: @handle
- Last Updated: YYYY-MM-DD
- Token Cost: ~XXXX

## Purpose
[One-liner description]

## When to Use
[Explicit trigger conditions]

## Instructions
[Core content]

## Examples
[Usage examples]

## Changelog
- vX.Y.Z: [Changes]
```

---

## Part 11: Skill Marketplace & Discovery

### Official Plugin Marketplace

**Adding a Marketplace:**
```bash
/plugin marketplace add author/repo
```

**Installing from Marketplace:**
```bash
/plugin install plugin-name@author-repo
```

### Known Marketplaces

| Author | Marketplace | Notable Skills/Plugins |
|--------|------------|------------------------|
| @nummanali | numman-ali/cc-mirror | Orchestration skill |
| @nummanali | numman-ali/n-skills | Gas Town tutorial |
| @jarrodwatts | jarrodwatts/claude-hud | Session HUD |
| @thedotmack | thedotmack/claude-mem | Persistent memory |
| @koylanai | muratcankoylan/ralph-wiggum-marketer | Content loops |
| browserbase | browserbase/claude-code-plugin | Cloud browsing |

### Discovering Community Skills

**Sources:**
1. **X/Twitter:** Search "Claude Code skill" or follow power users
2. **GitHub:** Search "claude-code skill" or ".claude/skills"
3. **Claude Code Slack/Discord:** Community shares
4. **Plugin Marketplaces:** Browse installed marketplaces

---

## Part 12: Converting Workflows into Skills

### Extraction Process

1. **Identify Repeating Pattern**
   - What do you explain repeatedly?
   - What workflows do you run often?

2. **Document the Steps**
   - Write out the full workflow
   - Include decision points

3. **Abstract into Template**
   - Replace specifics with placeholders
   - Add conditionals for variations

4. **Test in Isolation**
   - Run skill alone
   - Verify expected behavior

5. **Refine Based on Usage**
   - Track what works/doesn't
   - Update skill based on failures

### Example: Workflow to Skill

**Before (repeated prompting):**
```
"Look at this PR and check for security issues.
Make sure there's no hardcoded secrets, SQL injection,
or XSS vulnerabilities. Also check that error handling
is proper and no sensitive data is logged."
```

**After (skill):**
```markdown
# Security Review Skill

## Purpose
Systematic security review of code changes.

## Checklist
1. **Secrets:** No hardcoded API keys, passwords, tokens
2. **Injection:** No SQL/XSS vulnerabilities
3. **Auth:** Proper authentication/authorization checks
4. **Errors:** No sensitive data in error messages
5. **Logging:** No PII or secrets in logs
6. **Dependencies:** No known vulnerable packages

## Output Format
For each issue found:
- Location: [file:line]
- Severity: [critical/high/medium/low]
- Issue: [description]
- Fix: [suggested remediation]

## Summary
Provide overall security posture rating: PASS/WARN/FAIL
```

**Usage:**
```
"Load security-review skill and review this PR"
```

---

## Part 13: Advanced Skill Patterns

### Self-Critiquing Skills (Ralph Pattern)

```markdown
# Self-Critiquing Writer

## Workflow
DISCOVER → LEARN → RESEARCH → IDEATE → WRITE → CRITIQUE
                                                  ↓
                                         "Would founder publish?"
                                                  ↓
                                           No → ITERATE
                                           Yes → PUBLISH

## Critique Output
- Voice match score: X/10
- Passes founder test: YES/NO
- Weaknesses identified: [count]
  - [weakness 1]
  - [weakness 2]
- Recommendations: [list]

## Iteration Rules
Continue until founder test = YES.
Maximum 10 iterations before human review.
```

### Orchestrator Skills

```markdown
# Orchestrator Pattern

## You Are
The conductor. You don't play instruments.

## You Do
- Decompose tasks
- Spawn workers via Task tool
- Monitor progress via TaskList
- Synthesize outputs

## You Don't
- Write code directly
- Run bash commands
- Explore files yourself

## Worker Preamble (copy to each spawn)
CONTEXT: You are a WORKER agent, not an orchestrator.
RULES:
- Complete ONLY the task described below
- Use tools directly
- Do NOT spawn sub-agents
- Do NOT call TaskCreate/TaskUpdate
- Report results with absolute file paths
TASK: [specific task]
```

### Memory-Aware Skills

```markdown
# Memory-Aware Research Skill

## Before Starting
1. Query `mem-search` for relevant past research
2. Check if topic was previously covered
3. Note any conflicting previous findings

## Research Process
1. WebSearch for current sources
2. Compare with past research (if any)
3. Note what's new vs already known

## After Completing
1. Store key findings via memory tools
2. Update any outdated previous research
3. Link to related past work
```

---

## Part 14: Skill Examples Library

### Minimal Skills

**Daily Planning:**
```markdown
# Daily Planning Skill

Pull yesterday's saved/read/written notes, GitHub PRs needing review.
Generate prioritized todos aligned with weekly goals.
Start every day with this.
```

**Code Review:**
```markdown
# Code Review Skill

## Focus Areas
1. Logic errors
2. Edge cases
3. Performance
4. Readability
5. Test coverage

## Output
For each issue: [file:line] - [severity] - [issue] - [suggestion]
```

### Medium Skills

**Technical Docs (Microsoft Style):**
```markdown
# Technical Documentation Skill

## Template Types
- Investigation: Problem → Analysis → Findings → Recommendations
- Proposal: Context → Approach → Alternatives → Decision
- Design: Requirements → Architecture → Components → Interfaces

## Style Rules
- Active voice
- Present tense
- Concrete examples
- Clear headers
- Numbered lists for sequences
- Bullet lists for options
```

**Research Agent:**
```markdown
# Research Agent Skill

## Process
1. Find 10-20 sources with WebSearch/WebFetch
2. Summarize into note with:
   - Frontmatter (source count, date range)
   - Key concepts
   - Learning path
   - Suggested redlinks
   - Citations

## Output Format
Obsidian-compatible markdown with wikilinks.
```

### Complex Skills

**Full Orchestration (see CC Mirror section above)**

**Ralph Loop Controller:**
```markdown
# Ralph Loop Skill

## Purpose
Implement features through iterative, clean-context sessions.

## Core Principle
Each iteration spawns NEW instance with NO memory.
Continuity comes from:
- Git history (code changes)
- prd.json (task status)
- progress.txt (learnings)

## Story Rules
- Each story completable in ONE iteration
- 2-3 sentences max
- Explicit acceptance criteria
- Always include "npm run typecheck passes"

## Iteration Flow
1. Pick next story (priority order)
2. Implement
3. Test (typecheck/npm)
4. Commit if passing
5. Update prd.json
6. Log to progress.txt
7. Output COMPLETE or continue
```

---

## Part 15: Future Directions

### Emerging Patterns

1. **Skill Versioning:** Git-backed skills with changelogs
2. **Skill Composition:** Importing skills into other skills
3. **Skill Analytics:** Tracking which skills are most effective
4. **Skill Sharing:** Standardized format for community exchange
5. **Skill Testing:** Automated verification of skill behavior

### Predictions

- **Models in training corpus:** By mid-2026, models will recognize common skill patterns natively
- **Skill marketplaces:** More curated collections emerging
- **Enterprise adoption:** Teams standardizing on shared skill libraries
- **Skill IDEs:** Tooling for creating/testing/debugging skills

---

## Resources & Links

### GitHub Repositories
- [numman-ali/cc-mirror](https://github.com/numman-ali/cc-mirror) - Multi-agent orchestration
- [muratcankoylan/ralph-wiggum-marketer](https://github.com/muratcankoylan/ralph-wiggum-marketer) - Content loops
- [snarktank/amp-skills](https://github.com/snarktank/amp-skills) - PRD/Ralph skills
- [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) - Session visibility
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) - Persistent memory
- [steveyegge/gastown](https://github.com/steveyegge/gastown) - Agent factory

### External Resources
- [thevibemarketer.com/skills](https://thevibemarketer.com/skills) - Marketing skills collection
- [mdflow.dev](https://mdflow.dev) - .md files as CLI scripts
- [ghuntley.com/ralph/](https://ghuntley.com/ralph/) - Original Ralph pattern

### Power Users to Follow
- @nummanali - CC Mirror, orchestration skills
- @jarrodwatts - Claude HUD, daily usage
- @ryancarson - Ralph implementations
- @koylanai - Content automation
- @steve_yegge - Gas Town, vibe coding
- @gregisenberg - .md files philosophy

---

## Changelog

| Date | Entry |
|------|-------|
| 2026-01-09 | Initial comprehensive research compilation |
| | Covered: skill structure, triggers, community skills, plugins, best practices |
| | Included: CC Mirror, Ralph, Vibe Skills, Claude HUD, Claude-Mem |
| | Added: skill design patterns, debugging, team management |

---

## Tags
`#skills` `#slash-commands` `#plugins` `#orchestration` `#cc-mirror` `#ralph` `#community` `#best-practices` `#comprehensive`

---

## Deep Dive Expansion

### Official Anthropic Plugins (from anthropics/claude-code)

Anthropic maintains official plugins in the claude-code repository. These represent canonical patterns and best practices.

---

#### 1. agent-sdk-dev

**Purpose:** Development kit for Claude Agent SDK projects.

**Command:** `/new-sdk-app` - Interactive setup for new Agent SDK projects

**Agents:**
- `agent-sdk-verifier-py` - Validate Python SDK applications
- `agent-sdk-verifier-ts` - Validate TypeScript SDK applications

**Use Case:** When building production agent applications with the official SDK.

---

#### 2. claude-opus-4-5-migration

**Purpose:** Automated migration from older Claude models to Opus 4.5.

**Skill:** `claude-opus-4-5-migration` - Handles:
- Model string updates
- Beta header adjustments
- Prompt modifications for new model capabilities

**Pattern:** Migration skills as standardized tooling for model upgrades.

---

#### 3. code-review (Multi-Agent Parallel Review)

**Purpose:** Automated PR code review with 5 specialized parallel agents.

**Command:** `/code-review`

**Architecture (5 Parallel Sonnet Agents):**
| Agent | Focus |
|-------|-------|
| CLAUDE.md Compliance | Checks adherence to project instructions |
| Bug Detection | Identifies potential bugs and logic errors |
| Historical Context | Analyzes changes against project history |
| PR History | Reviews PR patterns and consistency |
| Code Comments | Evaluates comment quality and coverage |

**Key Feature:** Confidence-based scoring to filter false positives.

**Pattern:** Multi-agent parallel review with aggregated confidence scoring.

---

#### 4. commit-commands

**Purpose:** Git workflow automation bundle.

**Commands:**
- `/commit` - Create commits with proper formatting
- `/commit-push-pr` - Full workflow: commit, push, create PR
- `/clean_gone` - Clean up deleted/merged branches

**Pattern:** Bundling related commands into cohesive workflow plugins.

---

#### 5. explanatory-output-style

**Purpose:** Educational insights about implementation choices.

**Hook Type:** `SessionStart`

**Behavior:** Injects educational context at session start, explaining "why" behind code patterns.

**Note:** Mimics the deprecated Explanatory output style.

**Pattern:** Session-level personality injection via hooks.

---

#### 6. feature-dev (7-Phase Development)

**Purpose:** Comprehensive feature development with structured phases.

**Command:** `/feature-dev`

**Agents:**
- `code-explorer` - Initial codebase analysis
- `code-architect` - Architecture and design planning
- `code-reviewer` - Quality review post-implementation

**Pattern:** Multi-phase workflows with specialized agents per phase.

---

#### 7. frontend-design

**Purpose:** Production-grade frontend avoiding "AI aesthetic".

**Skill:** `frontend-design` - Auto-invoked for frontend work.

**Guidance Covers:**
- Bold design choices
- Typography systems
- Animation patterns
- Visual detail refinement
- Avoiding generic/bland AI output

**Pattern:** Domain-specific skills that auto-invoke based on work type.

---

#### 8. hookify (Meta-Hooks)

**Purpose:** Create custom hooks to prevent unwanted behaviors.

**Commands:**
- `/hookify` - Create new custom hooks
- `/hookify:list` - View existing hooks
- `/hookify:configure` - Modify hook settings
- `/hookify:help` - Hook syntax reference

**Agent:** `conversation-analyzer` - Analyzes conversations for problematic patterns

**Skill:** `writing-rules` - Guidance on hookify rule syntax

**Pattern:** Meta-tooling that creates other tooling. Self-modifying system.

---

#### 9. learning-output-style

**Purpose:** Interactive learning mode for user growth.

**Hook Type:** `SessionStart`

**Behavior:** Requests users write 5-10 lines of code at decision points rather than fully automating.

**Note:** Mimics unshipped Learning output style.

**Pattern:** Pedagogical hooks that intentionally create friction for learning.

---

#### 10. plugin-dev (Comprehensive Toolkit)

**Purpose:** Full toolkit for developing Claude Code plugins.

**Command:** `/plugin-dev:create-plugin` - 8-phase guided workflow

**Agents:**
- `agent-creator` - Create custom agents
- `plugin-validator` - Validate plugin structure
- `skill-reviewer` - Review skill implementations

**Skills (7 Total):**
| Skill | Purpose |
|-------|---------|
| Hook Development | Creating event handlers |
| MCP Integration | External tool connections |
| Plugin Structure | Architecture guidance |
| Settings Configuration | Config management |
| Commands Development | Slash command creation |
| Agents Creation | Agent definition patterns |
| Skill Development | Skill authoring best practices |

**Pattern:** Meta-plugins for plugin development with comprehensive skill library.

---

#### 11. pr-review-toolkit

**Purpose:** Comprehensive PR review with modular review aspects.

**Command:** `/pr-review-toolkit:review-pr [aspects]`

**Review Aspects (optional flags):**
- `comments` - Code comment quality
- `tests` - Test coverage analysis
- `errors` - Error handling detection
- `types` - Type system design
- `code` - General code quality
- `simplify` - Simplification opportunities
- `all` - Run all aspects

**Agents (6 Specialized):**
| Agent | Focus |
|-------|-------|
| `comment-analyzer` | Comment quality and coverage |
| `pr-test-analyzer` | Test coverage and patterns |
| `silent-failure-hunter` | Error handling gaps |
| `type-design-analyzer` | Type system design |
| `code-reviewer` | Code quality review |
| `code-simplifier` | Simplification suggestions |

**Pattern:** Modular review with optional aspect selection.

---

#### 12. ralph-wiggum

**Purpose:** Interactive self-referential AI loops.

**Commands:**
- `/ralph-loop` - Start autonomous iteration
- `/cancel-ralph` - Stop iteration

**Hook Type:** `Stop` - Intercepts exit attempts to continue iteration.

**Pattern:** Self-perpetuating loops via Stop hook interception.

---

#### 13. security-guidance

**Purpose:** Security reminder and vulnerability detection.

**Hook Type:** `PreToolUse`

**Monitors 9 Security Patterns:**
1. Command injection
2. XSS vulnerabilities
3. Eval usage
4. Dangerous HTML
5. Pickle deserialization
6. os.system calls
7. (3 additional patterns)

**Pattern:** PreToolUse hooks as security gatekeepers.

---

### Advanced Hook Lifecycle

**Official Hook Types (Expanded):**

| Hook | Trigger Point | Use Cases |
|------|--------------|-----------|
| `SessionStart` | Beginning of any session | Personality injection, context loading, welcome messages |
| `PreToolUse` | Before tool/file operations | Security checks, validation, logging, rate limiting |
| `PostToolUse` | After tool/file operations | Formatting, linting, notifications, metrics |
| `Stop` | Exit/completion attempts | Loop continuation, cleanup, persistence |

**Hook Chaining:** Multiple hooks of same type execute in definition order.

**Hook Failures:** Hook failures can be configured to:
- Block the operation (security)
- Log and continue (monitoring)
- Retry with modification (self-healing)

---

### Skill Auto-Invocation Patterns

**Based on Official Plugins:**

1. **Domain Detection:**
   - `frontend-design` skill auto-invokes when detecting frontend work
   - Pattern: Parse request for domain keywords

2. **File Type Detection:**
   - Skills can trigger based on files being modified
   - Pattern: Match file extensions in PreToolUse

3. **Intent Analysis:**
   - Agent analyzes conversation for matching intents
   - Pattern: NLP-style intent classification

4. **Workflow Phase:**
   - Different skills for different development phases
   - Pattern: State machine with phase-appropriate skills

---

### Plugin Component Matrix

| Component | Purpose | Trigger | Example |
|-----------|---------|---------|---------|
| **Commands** | User-initiated actions | `/command` | `/code-review` |
| **Agents** | Specialized workers | Task tool, command invocation | `code-reviewer` |
| **Skills** | Knowledge/instruction sets | Auto or manual load | `frontend-design` |
| **Hooks** | Lifecycle event handlers | Event occurrence | `SessionStart` |
| **MCP** | External tool connections | Tool availability | `.mcp.json` |

---

### Multi-Agent Review Architecture

**Pattern: Parallel Agent Review (code-review plugin)**

```
┌─────────────────────────────────────────────────────────────────┐
│                        ORCHESTRATOR                              │
│                    (Coordinates review)                          │
└──────────────────────────┬──────────────────────────────────────┘
                           │
           ┌───────────────┼───────────────┐
           │               │               │
           ▼               ▼               ▼
    ┌──────────┐    ┌──────────┐    ┌──────────┐
    │ Agent 1  │    │ Agent 2  │    │ Agent 3  │
    │ CLAUDE.md│    │   Bug    │    │ History  │
    │Compliance│    │Detection │    │ Context  │
    └────┬─────┘    └────┬─────┘    └────┬─────┘
         │               │               │
         └───────────────┼───────────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │  Confidence-Based   │
              │    Aggregation      │
              │ (Filter false pos)  │
              └─────────────────────┘
```

**Key Innovation:** Confidence scoring prevents false positive pollution.

---

### Modular Review Selection

**Pattern: Aspect-Based Review (pr-review-toolkit)**

```bash
# Run only test coverage review
/pr-review-toolkit:review-pr tests

# Run type and error handling review
/pr-review-toolkit:review-pr types errors

# Run everything
/pr-review-toolkit:review-pr all
```

**Design Principle:** User controls scope via aspect flags. Faster reviews when full coverage not needed.

---

### Self-Modifying Systems

**Pattern: Hookify (Meta-Hooks)**

```markdown
# User Flow
1. Identify unwanted behavior in conversation
2. Run /hookify
3. conversation-analyzer agent identifies pattern
4. User confirms hook creation
5. New hook deployed for future sessions

# Example
Problem: "Claude keeps adding emojis when I don't want them"
Solution: Hookify creates PreToolUse hook that strips emojis from Write operations
```

**Power:** System learns user preferences and encodes them as hooks.

---

### Loop Architecture (Ralph Pattern - Official)

**Stop Hook Interception:**

```
┌─────────────────────────────────────────┐
│              Claude Session              │
│                                          │
│   Task → Execute → Complete → [Exit?]   │
│                                    │     │
│                              ┌─────▼────┐│
│                              │Stop Hook ││
│                              │ Intercept││
│                              └─────┬────┘│
│                                    │     │
│                    ┌───────────────┼──────────────┐
│                    │               │              │
│                    ▼               ▼              │
│            [Continue Loop]   [Actually Exit]     │
│              (More work)       (Explicit)        │
└─────────────────────────────────────────┘
```

**Key:** Stop hook can override completion, forcing continuation.

---

### Enterprise Skill Patterns

**From Official Plugin Architecture:**

1. **Standardized Plugin Manifest:**
   ```json
   {
     "name": "plugin-name",
     "version": "1.0.0",
     "description": "What it does",
     "author": "team/org",
     "commands": [...],
     "skills": [...],
     "hooks": {...}
   }
   ```

2. **Versioning Strategy:**
   - Semantic versioning for plugins
   - Migration skills for major version changes (like `claude-opus-4-5-migration`)

3. **Validation Agents:**
   - `plugin-validator` for structure validation
   - `skill-reviewer` for skill quality

4. **Composable Components:**
   - Skills can be reused across plugins
   - Agents can be shared via imports

---

### Skill Debugging Techniques (Expanded)

**1. Hook-Based Debugging:**
```json
{
  "PreToolUse": [
    {
      "matcher": ".*",
      "command": "echo 'Tool: $TOOL File: $FILE' >> ~/.claude-debug.log"
    }
  ]
}
```

**2. Skill Load Verification:**
```
"List all currently loaded skills and their token costs"
```

**3. Agent Visibility (Claude HUD Pattern):**
- Monitor context usage
- Track active subagents
- See tool execution in real-time

**4. Isolation Testing:**
```bash
# Start fresh session
claude --no-plugins

# Load single skill
"Load only the X skill, ignore all others"
```

**5. Conflict Detection:**
- Multiple skills with same trigger phrases
- Multiple hooks on same event
- Tool ownership overlaps

**6. Token Auditing:**
```
"Calculate total token cost of:
1. CLAUDE.md
2. Loaded skills
3. Current context"
```

---

### Converting Repetitive Prompts to Skills

**Expansion on Workflow-to-Skill Process:**

**Step 1: Prompt Archaeology**
```
Review your chat history for:
- Repeated instructions (3+ times)
- Detailed explanations you copy-paste
- Consistent patterns in how you guide Claude
```

**Step 2: Extract the Core Pattern**
```markdown
# Before (scattered prompts over time)
"Make sure to use TypeScript strict mode"
"Always add error handling for async functions"
"Include JSDoc comments for public APIs"

# After (unified skill)
## TypeScript Quality Skill

### Compiler Settings
- strict: true
- noImplicitAny: true

### Error Handling
- All async functions must have try/catch
- Never swallow errors silently
- Log errors with context

### Documentation
- JSDoc for all public APIs
- Include @param and @returns
- Example usage for complex functions
```

**Step 3: Add Activation Context**
```markdown
## When to Use
Activate this skill for:
- Any TypeScript file creation
- Any .ts or .tsx modifications
- Code review of TypeScript PRs
```

**Step 4: Test in Multiple Contexts**
- Fresh session
- Mid-conversation load
- Multi-agent scenario
- After other skills

---

### Skill Composition Patterns (Advanced)

**1. Hierarchical Skills:**
```markdown
# Master Orchestrator Skill
Load these sub-skills in order:
1. research-skill.md (for gathering context)
2. planning-skill.md (for structuring approach)
3. execution-skill.md (for implementation)
4. review-skill.md (for quality check)
```

**2. Conditional Skills:**
```markdown
# Adaptive Review Skill

## For Python Files
Apply: python-style.md

## For TypeScript Files
Apply: typescript-style.md

## For Infrastructure
Apply: security-review.md + infrastructure-patterns.md
```

**3. Skill Inheritance:**
```markdown
# Specific Skill
Extends: base-review-skill.md

## Additional Rules
[Only the deltas from base]
```

**4. Skill Exclusion:**
```markdown
# This Skill Overrides
Do NOT apply these skills when this one is active:
- generic-coding.md (conflicts with specifics here)
- verbose-output.md (we want concise)
```

---

### Community Skill Discovery Sources

**Beyond the basics:**

1. **GitHub Topics:**
   - `claude-code-plugin`
   - `claude-code-skill`
   - `.claude` directory

2. **GitHub Code Search:**
   ```
   path:.claude/skills filename:*.md
   path:.claude-plugin filename:plugin.json
   ```

3. **Anthropic Discord:**
   - #claude-code channel
   - #plugins-and-extensions

4. **X/Twitter Searches:**
   - "claude code skill"
   - "claude code plugin"
   - "CLAUDE.md"

5. **Power User Repos:**
   - Check starred repos of known power users
   - Look for `.claude` directories in their projects

---

### Skill Marketplace Ecosystem

**Current State (2026):**

| Marketplace | Type | Notable Offerings |
|-------------|------|-------------------|
| anthropics/claude-code | Official | 13 core plugins |
| numman-ali/* | Community | CC Mirror, N-Skills |
| jarrodwatts/* | Community | Claude HUD |
| thedotmack/* | Community | Claude-Mem |
| browserbase/* | Enterprise | Cloud browsing |

**Emerging Patterns:**
- Domain-specific marketplaces (marketing, devops, data)
- Enterprise-curated collections
- Skill certification/verification

---

### Security Considerations for Skills

**From security-guidance plugin:**

1. **PreToolUse Gatekeeping:**
   - Scan all operations before execution
   - Pattern matching for dangerous operations
   - Block or warn on matches

2. **Skill Sandboxing:**
   - Skills should declare required permissions
   - Unknown skills run with reduced access
   - User approval for sensitive operations

3. **Audit Logging:**
   - Log all skill activations
   - Track hook executions
   - Monitor tool usage patterns

4. **Supply Chain:**
   - Verify skill sources
   - Check for malicious patterns
   - Review before installation

---

### Future Skill Directions

**Predictions Based on Current Trajectory:**

1. **Skill Registries:**
   - Centralized, searchable skill databases
   - Ratings and reviews
   - Automated compatibility testing

2. **Skill IDEs:**
   - Visual skill builders
   - Test harnesses
   - Debug consoles

3. **Skill Analytics:**
   - Usage tracking
   - Effectiveness metrics
   - A/B testing for skill variants

4. **Skill Composition Tools:**
   - Visual workflow builders
   - Drag-and-drop skill chaining
   - Automatic conflict detection

5. **Enterprise Skill Management:**
   - Role-based skill access
   - Compliance-approved skill libraries
   - Centralized skill deployment

---

## Changelog (Updated)

| Date | Entry |
|------|-------|
| 2026-01-09 | Initial comprehensive research compilation |
| | Covered: skill structure, triggers, community skills, plugins, best practices |
| | Included: CC Mirror, Ralph, Vibe Skills, Claude HUD, Claude-Mem |
| | Added: skill design patterns, debugging, team management |
| 2026-01-09 | **Deep Dive Expansion** |
| | Added: 13 official Anthropic plugins with full documentation |
| | Added: Advanced hook lifecycle (SessionStart, PreToolUse, PostToolUse, Stop) |
| | Added: Multi-agent parallel review architecture |
| | Added: Modular review selection patterns |
| | Added: Self-modifying systems (hookify meta-hooks) |
| | Added: Loop architecture via Stop hook interception |
| | Added: Enterprise skill patterns and validation |
| | Added: Expanded debugging techniques |
| | Added: Advanced skill composition patterns |
| | Added: Community skill discovery sources |
| | Added: Security considerations for skills |
| | Added: Future skill directions |

---

## Tags (Updated)
`#skills` `#slash-commands` `#plugins` `#orchestration` `#cc-mirror` `#ralph` `#community` `#best-practices` `#comprehensive` `#official-plugins` `#hooks` `#multi-agent` `#security` `#enterprise` `#debugging`

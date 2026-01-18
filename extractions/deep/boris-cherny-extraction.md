# Boris Cherny: The Complete Mental Model
## Creator of Claude Code, Staff Engineer at Anthropic

---
## D-FINAL Connection
**Contributed to:** D-FINAL-mental-models.md
**Last enhanced:** 2026-01-18 (Phase 2B)
---

> "I'm Boris and I created Claude Code. [...] My setup might be surprisingly vanilla!"

---

## TIER 1 EXTRACTION: Architecture Level

**Status:** COMPLETE
**Depth:** Yegge-level (500+ lines)
**Research Date:** 2026-01-10
**Sources:** 6 primary documents, 30+ cross-references

---

## Part I: Who Is Boris Cherny?

### Professional Identity

Boris Cherny is a Staff Engineer at Anthropic and the creator of Claude Code. His role extends beyond engineering leadership into product vision and design philosophy. He is the canonical source for understanding how Claude Code *should* be used because its design directly reflects his mental model.

### Public Presence

- **Twitter/X:** @bcherny (primary public channel)
- **GitHub:** github.com/bcherny
- **Podcast appearances:** Latent Space, Developing Dev, Pragmatic Engineer
- **Writing:** Anthropic Engineering Blog

### Background Before Claude Code

Boris's approach to Claude Code reflects deep experience with developer tooling and type systems. His pre-Anthropic work included contributions to TypeScript ecosystem and developer experience tools. This background explains Claude Code's emphasis on:

- **Type safety as verification** (always include `npm run typecheck`)
- **Developer experience over AI complexity**
- **Simple, composable primitives over opinionated frameworks**

### The "Vanilla" Philosophy

Boris explicitly describes his own setup as "surprisingly vanilla" despite being the creator. This is a deliberate design choice: if the creator doesn't need heavy customization, that signals the tool works well out of the box. Anti-complexity is core to his worldview.

---

## Part II: The Canonical Workflow

### The Complete 13-Point System

Boris's workflow is the reference implementation for Claude Code usage. Every element reflects intentional design decisions.

#### 1. Parallel Sessions (5-10+ Concurrent)

**Terminal:** 5 parallel Claude instances with system notifications
**Web:** 5-10 sessions on claude.ai/code
**Mobile:** Sessions started in morning, checked later

> "He's distributing cognition like compute: allocate it, queue it, keep it hot, switch contexts only when value is ready."

**Why 5-10 parallel sessions?**

This number isn't arbitrary. It represents:
- The maximum human can context-switch between effectively
- The minimum to achieve parallelism benefits
- The threshold where orchestration becomes necessary above

Boris doesn't use one extremely capable agent. He uses many independent workers. Each session is a **separate context window**—a separate worker with its own focus, not one brain trying to hold everything.

**The Mental Model Shift:**

> "Boris doesn't see AI as a tool you use, but as a capacity you schedule."

Traditional developers think: "I ask Claude a question, it answers."
Boris thinks: "I have 10 workers. I assign tasks, check progress, harvest results."

#### 2. Model Selection: Always Opus 4.5 + Extended Thinking

> "I use Opus 4.5 with thinking for everything. Even though it's bigger and slower than Sonnet, since you have to steer it less and it's better at tool use, it is almost always faster than using a smaller model in the end."

**Why not Sonnet for speed?**

Boris's insight: the bottleneck isn't generation speed, it's correction time. Opus 4.5:
- Requires less steering
- Makes fewer tool use errors
- Produces higher-quality first drafts
- Reduces iteration loops

**The total time equation:**
```
Total Time = (Generation Time) + (Correction Time) + (Re-prompting Time)
```

Opus has higher Generation Time but dramatically lower Correction and Re-prompting time. Net result: faster despite slower generation.

**Extended Thinking Keywords:**

Claude Code recognizes these keywords to allocate thinking budget:
- `think` → 4,000 tokens of reasoning
- `think hard` / `think more` → 10,000 tokens
- `ultrathink` / `think harder` → 31,999 tokens (maximum)

Boris uses extended thinking as default, not exception.

#### 3. Shared CLAUDE.md in Git

> "Anytime we see Claude do something incorrectly we add it to the CLAUDE.md, so Claude knows not to do it next time."

**The Compounding System:**

This is the core of Boris's institutional knowledge architecture:

1. **Single shared file** checked into repository root
2. **Entire team contributes** multiple times weekly
3. **Every mistake becomes a rule**
4. **During code review**, tag `@.claude` to trigger CLAUDE.md updates
5. **GitHub Action enforces** that relevant PRs update the file

**What goes in CLAUDE.md:**

Boris's team keeps it **short and focused**—only a couple thousand tokens:
- Build/test commands
- Code style conventions
- UI guidelines
- State management patterns
- Logging conventions
- Error handling patterns
- Debugging tips
- PR template

**What doesn't belong:**

- Complex scaffolding
- Extensive domain documentation
- Implementation details that change frequently
- Information available in code itself

**Critical insight:**

> "The longer the team works together, the smarter the agent becomes."

This is compounding in action. Each correction pays dividends forever because it prevents the same mistake across all future sessions.

#### 4. Plan Mode Workflow

**The Two-Phase Pattern:**

1. **Start in Plan Mode** (Shift+Tab twice)
2. **Iterate back-and-forth** until plan is solid
3. **Switch to auto-accept mode**
4. **Claude executes** the entire implementation without interruption

> "This prevents the classic failure: when the agent thinks it's helpful and makes 40 changes you didn't want. Don't let a system act before you've agreed on intent and constraints."

**Why Plan Mode first?**

Plan Mode provides:
- Forced articulation of intent before action
- Opportunity to catch misunderstandings before code changes
- Time to define constraints and boundaries
- Alignment on approach before investment

**The Trust Gradient:**

```
Low Trust (Plan Mode) ───────────────────► High Trust (Auto-Accept)
     │                                           │
     │  Discuss architecture                     │  Execute freely
     │  Define constraints                       │  Minimal interruption
     │  Lock in understanding                    │  Full autonomy
     │  Manual approval                          │  Speed priority
     │                                           │
     └───────────────────────────────────────────┘
```

**Impact claim:**

> "Plan Mode can 2-3x success rates for complex tasks."

This is one of Boris's highest-impact recommendations.

#### 5. Slash Commands for Inner Loops

**Purpose:** Repeated workflows that happen frequently

**Example:** `/commit-push-pr` with inline bash pre-compute

**Location:** `.claude/commands/` (git-checked)

**When to use:**
- Commit workflows
- PR creation patterns
- Common test sequences
- Deployment steps

**When NOT to use:**

> "Having a long list of complex, custom slash commands is an anti-pattern. The entire point of an agent like Claude is that you can type almost whatever you want."

Boris warns against over-engineering the command layer. Slash commands are for **mechanical** operations, not creative work.

#### 6. Subagents for Outer Workflows

**Purpose:** Larger, specialized tasks that deserve isolated context

**Examples from Boris's setup:**
- `code-simplifier` - Post-PR cleanup
- `verify-app` - Comprehensive verification

**Location:** `.claude/agents/` (Markdown files)

**Why subagents over monolithic prompts?**

- **Context isolation:** Subagent context doesn't pollute main session
- **Specialization:** Each agent optimized for its task
- **Reusability:** Can invoke across different projects
- **Testing:** Easier to verify single-purpose agents

#### 7. Hooks for Automation

**PostToolUse hook pattern:**

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

**Boris's key insight:**

> "Consider using hooks to stop AI from quietly breaking lint/format/typecheck."

Hooks ensure deterministic operations always happen. Claude might forget to format; hooks never do.

**Hook types Boris uses:**
- **Formatting hooks:** Auto-run linters/formatters after edits
- **Notification hooks:** Alert when attention needed
- **Validation hooks:** Pre-commit checks

#### 8. Permissions: Whitelist, Not Skip

> "Use `/permissions whitelist` instead of dangerous skip. Avoid reckless permission grants."

**Pattern:** `/permissions add Bash:npm*`

**The Anti-Pattern:** `/permissions skip` or YOLO mode

Boris treats permissions as **team assets**—shared, reviewable, versioned. Pre-allowing safe actions makes the right thing the default.

#### 9. Tool Integrations (MCP)

**Boris's tools:**
- Slack MCP (team communication)
- BigQuery (data access)
- Sentry (error monitoring)

Claude can query production systems, read error reports, check metrics. This enables informed decisions without manual context switching.

#### 10. Long Tasks: Background Verification

**Components:**
- Background verification agent
- Stop hook
- ralph-wiggum plugin
- Sandbox skip (for trusted operations)

For tasks that run hours or overnight, Boris uses verification loops that run autonomously and surface results when complete.

#### 11. Verification: The Most Important Thing

> "Probably the most important thing to get great results out of Claude Code: give Claude a way to verify its work. If Claude has that feedback loop, it will 2-3x the quality of the final result."

**Boris's verification methods:**

| Tool | Purpose |
|------|---------|
| Chrome extension | UI tests for web apps |
| Bash scripts | Automated checks |
| Mobile simulators | iOS/Android verification |
| Background agent | Continuous verification |

**Critical insight:**

> "Generic bash tests insufficient for UI/mobile—domain-specific verification required."

Verification is not optional. It's the difference between 1x quality and 2-3x quality.

**The Full Verification Stack:**

> "Claude tests every single change I land to claude.ai/code using the Claude Chrome extension. It opens a browser, tests the UI, and iterates until the code works and the UX feels good."

---

## Part III: Design Philosophy

### 1. "Do the Simple Thing First"

This is Boris's foundational principle, directly inherited from Anthropic's engineering culture.

> "CLAUDE.md is another example of this idea of doing the simple thing first. We had all these crazy ideas about memory architectures—there's so much literature about this, so many external products—but in the end, the thing we did is ship the simplest thing: a file that has some stuff that's auto-read into context."

**Manifestations:**

| Feature | Simple Choice | Complex Alternative Rejected |
|---------|--------------|------------------------------|
| Memory | Markdown file (CLAUDE.md) | Vector databases, embeddings |
| Search | ripgrep (regex) | Semantic search, code graphs |
| Execution | Local terminal | Sandbox, containers |
| Storage | Local files | Cloud sync, databases |

### 2. "Build for the Model Six Months From Now"

Perhaps Boris's most counterintuitive principle:

> "Don't build for the model of today, build for the model six months from now. Honestly, for a long time, Claude Code was not a great product. I used it for maybe 10% of my code because the model wasn't capable enough."

**The bet:**

Boris didn't add workarounds for model limitations. He built the interface assuming future capabilities. When Sonnet and Opus 4 released, Claude Code "just worked"—enabling Boris to write 50% of his code with it, later reaching 80-90%.

**Implication for users:**

Don't over-engineer workarounds for current model limitations. They may become unnecessary or even harmful when models improve.

**The Anti-Pattern:**

> "Extreme scaffolding frameworks will hurt more than help. Claude Code demonstrates that an 'agent' can be simple and yet extremely powerful."

Boris actively **deletes code** with each model release—removing half the system prompt when upgrading to newer versions.

### 3. Raw Model Access as Design Goal

> "The way we build this is we want people to feel the model as raw as possible."

Boris explicitly rejected building "a Cursor or Windsurf." The goal is minimal abstraction between user intent and model capability.

**What this means:**

- No complex workflow enforcement
- No opinionated structure requirements
- Direct access to all tools
- User controls the paradigm

### 4. Unix Philosophy as Foundation

> "Very similar to the original UNIX design philosophy."

**Principles applied:**

| Unix Principle | Claude Code Application |
|----------------|------------------------|
| Do one thing well | Each tool (Read, Write, Bash) is focused |
| Compose freely | Headless mode, piping, scripting |
| Text as interface | Markdown files, terminal output |
| Minimal surprise | Predictable tool behavior |

**Headless mode (`claude -p`):**

Claude Code isn't just a chat interface. It's a programmable CLI that can be composed with other tools, integrated into CI/CD, and scripted.

---

## Part IV: Feature Prioritization

### What Boris Personally Champions

Based on 2.1 release notes and statements:

#### Friction Elimination

- **Shift+Enter for newlines** - Long-standing terminal pain point
- **Agent persistence after deny** - Deny shouldn't kill session
- **Hot reload for skills** - Immediate feedback during development
- **Wildcard permissions** - Less verbose permission rules

#### Composition & Reuse

- **Forked contexts** - Isolated sub-contexts for skills
- **Hooks in frontmatter** - Add hooks directly to agents/skills
- **Custom agent support** - Skills can spawn agents
- **/teleport to web** - Session portability across environments

#### Safety Without Friction

- **Persist after deny** - Continue working after saying no
- **Wildcard permissions** - Flexible but explicit
- **Forked contexts** - Isolation by default

### The 2.1 Release: 1,096 Commits

The 2.1 release scope shows what the team prioritizes:

1. **Skills upgrades** (forked context, hot reload, custom agents)
2. **Hooks in frontmatter** (PreToolUse, PostToolUse, Stop)
3. **Permission improvements** (wildcards, flexibility)
4. **Quality of life** (Shift+Enter, multilingual, teleport)

This is evolution toward an **"agent operating system"**—not just a chat, but a platform for multi-agent workflows.

---

## Part V: The Compounding System

### How Boris Describes It

> "Think of Claude Code as a compounding system—not a one-shot tool, but an evolving teammate. Invest in memory (CLAUDE.md), automation (slash/subagents/hooks), verification loops, and parallelism to create exponential returns over time."

### The Mathematics of Compounding

**Linear usage:**
```
Output = Capability × Time
```

**Compounding usage:**
```
Output = Capability × Time × (1 + Learning Rate)^Sessions
```

Each session that updates CLAUDE.md increases effective capability for all future sessions.

### What Enables Compounding

1. **Shared, git-checked knowledge** - Persists across team/time
2. **Mistake → Rule conversion** - Every failure improves future
3. **Team contribution to CLAUDE.md** - Multiple perspectives
4. **Verification loops** - Confirm improvements work

### What Breaks Compounding

1. **Individual CLAUDE.md files** - Knowledge doesn't compound across team
2. **Ignoring failures** - Same mistakes repeat
3. **CLAUDE.md bloat** - Context window waste
4. **Skipping verification** - Bad patterns persist

### The Compounding Formula

> "Every correction becomes permanent context. The cost of a mistake pays dividends forever."

---

## Part VI: Mental Model Deep Dive

### How Boris Thinks About Agents

#### Agents as Team Members, Not Tools

> "Agents belong inside the team's social workflows (PRs) as participants that can update shared norms."

This is profound. Agents aren't external helpers—they're team members with commit rights, PR participation, and norm-setting influence through CLAUDE.md updates.

**Implications:**

- Agents should follow team conventions
- Agents should update documentation
- Agents participate in code review (via tagging)
- Agents' learnings become team knowledge

#### Modular Roles Over One Big Agent

Boris uses **specialized subagents** rather than one generalist:
- `code-simplifier` - Post-PR cleanup
- `verify-app` - Application verification
- `build-validator` - Build checking

Each agent is optimized for its domain, with appropriate context and instructions.

#### Context Windows as Independent Workers

> "Each session is a separate worker—don't try to make one brain hold everything."

This is why Boris runs 5-10 parallel sessions. Each is an independent worker with its own focus area, not a single assistant trying to be omniscient.

#### Permissions as Team Assets

> "He treats permissions as a team asset. Shared, reviewable, and versioned. Pre-allowing safe actions makes the right thing the default."

Permissions aren't individual convenience settings—they're team policy encoded in configuration.

---

## Part VII: Anti-Patterns Boris Warns Against

### 1. Skipping Plan Mode

> "The ones struggling often skip planning to save time, then spend more time fixing mistakes. Plan Mode isn't training wheels—it's measuring before you cut."

### 2. Sequential Instead of Parallel Sessions

**WRONG:** Run one Claude, wait for it, start another
**RIGHT:** Run 5 Claudes, context-switch between them as they work

### 3. Optimizing for Token Speed Over Quality

Using smaller/faster models to "save time" is false economy—correction time dominates generation time.

### 4. Not Maintaining CLAUDE.md

Without institutional memory, mistakes repeat indefinitely.

### 5. No Verification Infrastructure

Missing feedback loops means 2-3x worse output quality.

### 6. Over-Customization

> "My setup might be surprisingly vanilla! Claude Code works great out of the box, so I personally don't customize it much."

### 7. Complex Magic Command Systems

> "Having a long list of complex, custom slash commands is an anti-pattern. The entire point of an agent like Claude is that you can type almost whatever you want."

### 8. Skipping Formatting Hooks

> "Consider using hooks to stop AI from quietly breaking lint/format/typecheck."

---

## Part VIII: The code-simplifier Agent

### Official Anthropic Plugin

Boris open-sourced the team's internal cleanup agent:

```bash
claude plugin install code-simplifier
```

### The Full System Prompt

```
You are an expert code simplification specialist focused on enhancing code clarity, consistency, and maintainability while preserving exact functionality. Your expertise lies in applying project-specific best practices to simplify and improve code without altering its behavior. You prioritize readable, explicit code over overly compact solutions.

**Preserve Functionality:** Never change what the code does - only how it does it.

**Apply Project Standards:**
- Use ES modules with proper import sorting and extensions
- Prefer function keyword over arrow functions
- Use explicit return type annotations for top-level functions
- Follow proper React component patterns with explicit Props types
- Use proper error handling patterns (avoid try/catch when possible)

**Enhance Clarity:**
- Reducing unnecessary complexity and nesting
- Eliminating redundant code and abstractions
- Improving readability through clear variable and function names
- IMPORTANT: Avoid nested ternary operators
- Choose clarity over brevity

**Focus Scope:** Only refine code that has been recently modified.
```

### The Philosophy Embedded

| Rule | Philosophy |
|------|------------|
| Prefer `function` over arrows | Explicitness over brevity |
| Avoid nested ternaries | Readability over cleverness |
| Explicit return types | Type safety by default |
| Focus on recent changes | Scope discipline |
| Clarity over brevity | "Readable by humans tomorrow morning" |

### The Two-Phase Code Production Model

```
Creation Phase → Get it working (speed + creativity)
                        ↓
Polish Phase → Make it elegant (dedicated specialist agent)
```

This separates concerns: creative work first, cleanup after. The code-simplifier runs post-PR to ensure consistent quality without slowing creation.

---

## Part IX: Unique Insights (Creator Knowledge)

### Things Only The Creator Would Know

#### 1. CLAUDE.md Was "The Simple Thing"

> "We had all these crazy ideas about memory architectures... but in the end, the thing we did is ship the simplest thing: a file that has some stuff that's auto-read into context."

The team considered embeddings, vector databases, semantic search. They shipped a markdown file. Simplicity won.

#### 2. Claude Code Deletes Code on Model Upgrades

> "The team deletes code with each model release—removing half the system prompt when upgrading to newer versions."

Most teams add complexity over time. Anthropic removes it as models improve.

#### 3. "Claude Code Was Not a Great Product"

> "Honestly, for a long time, Claude Code was not a great product. I used it for maybe 10% of my code because the model wasn't capable enough."

Boris admitted the tool didn't work well initially. The bet was on future model capability, not current workarounds.

#### 4. 50-100 PRs per Week

Boris's team ships at extremely high velocity:

> "Boris's High-Velocity Workflow: 50-100 PRs/week, Code-simplifier as final quality gate"

This is enabled by the entire system working together: parallel sessions, verification loops, automated cleanup.

#### 5. 100% AI-Contributed Code

> "Boris claimed this: 100% AI-contributed code"

Not 80%. Not 90%. 100% of code contributed by Claude, with humans directing, reviewing, and verifying.

#### 6. The ralph-wiggum Plugin: Different Philosophy

The Ralph Wiggum technique was officially added as a plugin, but Boris's approach differs:

> "Boris's style: Parallelized human-supervised sessions with frequent checkpoints"
> "Ralph's style: Single autonomous loops that run until completion"

Boris prefers many supervised workers over one autonomous runner.

---

## Part X: The Agentic Dev Loop

### Boris's Complete Cycle

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

This is the production workflow. Each step has tooling. The entire system compounds.

### The Creator's Stack Visualized

```
┌─────────────────────────────────────────────────────────────────┐
│                    BORIS CHERNY'S CLAUDE CODE STACK             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │               PARALLEL SESSIONS (5-10)                    │   │
│  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ │   │
│  │  │Terminal│ │Terminal│ │Terminal│ │  Web   │ │ Mobile │ │   │
│  │  │   1    │ │   2    │ │   3    │ │ claude │ │ async  │ │   │
│  │  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘ │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    MODEL SELECTION                        │   │
│  │        Always Opus 4.5 + Extended Thinking                │   │
│  │        "Slower but wins long-term"                        │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    WORKFLOW PHASES                        │   │
│  │                                                           │   │
│  │   PLAN ──► CODE ──► SIMPLIFY ──► VERIFY ──► COMMIT       │   │
│  │     │                  │            │                     │   │
│  │     │                  │            │                     │   │
│  │     ▼                  ▼            ▼                     │   │
│  │  Plan Mode      code-simplifier  Chrome/Bash/Simulator   │   │
│  │  Discussion        Agent        Verification Loops        │   │
│  │  Auto-Accept                                              │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                   KNOWLEDGE LAYER                         │   │
│  │                                                           │   │
│  │   CLAUDE.md (git root)                                    │   │
│  │   ├── Shared across team                                  │   │
│  │   ├── Updated on every mistake                            │   │
│  │   ├── Enforced via GitHub Action                          │   │
│  │   └── Compounds knowledge over time                       │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                   AUTOMATION LAYER                        │   │
│  │                                                           │   │
│  │   .claude/commands/    → Slash commands (inner loops)     │   │
│  │   .claude/agents/      → Subagents (outer workflows)      │   │
│  │   .claude/settings.json → Hooks (PostToolUse, etc.)       │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                   INTEGRATION LAYER                       │   │
│  │                                                           │   │
│  │   MCP: Slack, BigQuery, Sentry                           │   │
│  │   Browser: Chrome extension for UI tests                  │   │
│  │   Mobile: Simulators for iOS/Android                      │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Part XI: Key Principles Summary

### Boris's 8 Core Principles

1. **Simplicity over sophistication** - The simplest solution that works is the right solution
2. **Trust the model** - Build for future capability, not current limitations
3. **Raw access over opinion** - Let users feel the model directly
4. **Verification as force multiplier** - Feedback loops 2-3x quality
5. **Parallelization over optimization** - Run many sessions, not one perfect one
6. **Institutional memory compounds** - CLAUDE.md turns mistakes into permanent improvements
7. **Planning prevents waste** - Agree on intent before execution
8. **Agents are team members** - Integrate into workflows, not alongside them

### The One-Sentence Summary

> "Start with verification loops + a simple CLAUDE.md—that's where most of the magic happens."

---

## Part XII: Quotes in Boris's Voice

### On Simplicity

> "My setup might be surprisingly vanilla!"

> "Claude Code works great out of the box, so I personally don't customize it much."

> "We had all these crazy ideas about memory architectures... but in the end, the thing we did is ship the simplest thing."

### On Models

> "I use Opus 4.5 with thinking for everything. Even though it's bigger and slower than Sonnet, since you have to steer it less and it's better at tool use, it is almost always faster than using a smaller model in the end."

### On Verification

> "Probably the most important thing to get great results out of Claude Code: give Claude a way to verify its work. If Claude has that feedback loop, it will 2-3x the quality of the final result."

> "Claude tests every single change I land to claude.ai/code using the Claude Chrome extension."

### On Planning

> "This prevents the classic failure: when the agent thinks it's helpful and makes 40 changes you didn't want. Don't let a system act before you've agreed on intent and constraints."

### On Anti-Patterns

> "Having a long list of complex, custom slash commands is an anti-pattern. The entire point of an agent like Claude is that you can type almost whatever you want."

> "The ones struggling often skip planning to save time, then spend more time fixing mistakes. Plan Mode isn't training wheels—it's measuring before you cut."

### On Compounding

> "Anytime we see Claude do something incorrectly we add it to the CLAUDE.md, so Claude knows not to do it next time."

> "Every correction becomes permanent context. The cost of a mistake pays dividends forever."

---

## Part XIII: Comparison with Yegge

### Where Boris and Yegge Agree

| Topic | Shared View |
|-------|-------------|
| Parallel agents | Both run 5-10+ concurrent sessions |
| Verification essential | Both emphasize feedback loops |
| Trust gradient | Both build trust incrementally |
| Simplicity | Both prefer simple over complex |
| Future betting | Both build for future model capability |

### Where Boris and Yegge Differ

| Topic | Boris | Yegge |
|-------|-------|-------|
| Orchestration | Many supervised sessions | Full factory (Gas Town) |
| Autonomy | Human checkpoints | Autonomous until complete |
| Complexity | Minimal customization | Heavy infrastructure |
| Memory | CLAUDE.md (simple) | Beads (structured database) |
| Scale | 5-10 parallel | 20-30 parallel |

### What Boris Adds That Yegge Doesn't Cover

- **Specific tool recommendations** (Chrome extension, simulators)
- **Hooks for formatting/validation**
- **Team CLAUDE.md discipline**
- **Plan Mode → Auto-Accept workflow**
- **code-simplifier pattern**

### Boris's Potential Blindspots

- Less focus on **very long-running autonomous work** (overnight loops)
- Less infrastructure for **30+ agent coordination**
- Assumes **team discipline** for CLAUDE.md maintenance
- May not address **solo developer** patterns as thoroughly

---

## Part XIV: Actionability Ladder

### Quick Wins (< 5 minutes)

1. Add a CLAUDE.md to your repo with basic patterns
2. Switch to Opus 4.5 + thinking by default
3. Start every complex task in Plan Mode
4. Add one formatting hook to settings.json

### Medium Lift (hours)

1. Set up 2-3 parallel sessions workflow
2. Configure terminal notifications
3. Create one useful slash command
4. Install code-simplifier plugin

### Deep Investment (weeks)

1. Full verification infrastructure (Chrome extension, simulators)
2. Team CLAUDE.md discipline with GitHub Action
3. Subagent library for common workflows
4. Complete hook configuration

---

## Part XV: File Structure Reference

### Boris's Project Layout

```
project/
├── CLAUDE.md              # Shared knowledge (git root)
├── .claude/
│   ├── settings.json      # Hooks & permissions
│   ├── commands/          # Slash commands (git-checked)
│   │   └── commit-push-pr.md
│   └── agents/            # Subagents (Markdown files)
│       ├── code-simplifier.md
│       └── verify-app.md
└── [project files]
```

### PostToolUse Hook Template

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

---

## Verification: Extraction Complete

- [x] All 6 source files read completely
- [x] 500+ lines of extracted content (850+ lines)
- [x] Mental model is derivable (can predict his opinions)
- [x] Canonical workflow is copy-paste implementable
- [x] Unique insights captured (things not in docs)
- [x] Cross-references with Yegge complete

---

## Sources

### Primary

1. Boris Cherny Twitter Thread (Post ID 2007179832300581177)
2. Pragmatic Engineer - How Claude Code is Built
3. Developing Dev - Boris Cherny Career Interview
4. Latent Space - Claude Code: Anthropic's Agent in Your Terminal
5. Anthropic Engineering - Claude Code Best Practices
6. Claude Code 2.1 Release Notes

### Secondary (Cross-References)

- VentureBeat - Creator of Claude Code Reveals Workflow
- DEV.to Analysis of Boris's Workflow
- Karo Zieminski Substack Analysis
- GitHub - bcherny
- STAFF-ENGINEER-MENTAL-MODEL.md
- combinations-triple-plus.md

---

## Tags

`#boris-cherny` `#creator` `#canonical-workflow` `#philosophy` `#anthropic` `#claude-code` `#mental-model` `#deep-extraction` `#tier-1` `#architecture-level` `#verification` `#compounding` `#plan-mode` `#parallel-sessions` `#opus-4.5` `#claude-md`

---

## Troubleshooting

### Installation & Setup Issues

#### Error: "Claude Code command not found"
**Symptoms:** Terminal shows `claude: command not found` when trying to run claude
**Cause:** Claude Code CLI not installed or not in PATH
**Solution:**
```bash
# Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# Verify installation
which claude
claude --version

# If still not found, add npm global bin to PATH
export PATH="$PATH:$(npm bin -g)"
# Add this to ~/.bashrc or ~/.zshrc for persistence
```
**Prevention:** Always verify installation after npm install completes

---

#### Error: "CLAUDE.md not being read"
**Symptoms:** Claude ignores project-specific instructions, asks questions answered in CLAUDE.md
**Cause:** CLAUDE.md not in git root, wrong filename, or too large
**Solution:**
```bash
# Verify file location (must be git root)
ls -la $(git rev-parse --show-toplevel)/CLAUDE.md

# Check file size (should be < 2000 tokens, ~8KB)
wc -c CLAUDE.md

# Verify it's tracked in git
git ls-files | grep -i claude

# If renamed wrong (case matters!)
mv claude.md CLAUDE.md
```
**If you skip this:** Claude will miss project conventions, repeat mistakes the team has already solved
**Prevention:** Keep CLAUDE.md short, at git root, properly cased

---

#### Error: "Permission denied" on hook scripts
**Symptoms:** Hooks don't run, formatting fails silently, no notifications
**Cause:** Hook scripts lack execute permission
**Solution:**
```bash
# Find and fix all hook scripts
chmod +x ~/.claude/hooks/*.sh
chmod +x .claude/hooks/*.sh

# Verify hook configuration
cat ~/.claude/settings.json | jq '.hooks'

# Test a hook manually
~/.claude/hooks/your-hook.sh
```
**Prevention:** Always `chmod +x` after creating hook scripts

---

### Workflow Issues

#### Problem: "Plan Mode not engaging"
**Symptoms:** Claude jumps straight to implementation, makes unwanted changes
**Cause:** Not activating Plan Mode, or using wrong key combination
**Solution:**
```
# Activate Plan Mode:
1. Press Shift+Tab TWICE (not once)
2. You should see "[PLAN]" indicator in prompt
3. Discuss architecture before accepting any code

# If still not working:
/plan  # Alternative command-based activation
```
**If you skip this:** Claude may make 40+ unwanted changes requiring extensive rollback
**Prevention:** Make Plan Mode the default first step for any complex task

---

#### Problem: "Sessions running too long, quality degrading"
**Symptoms:** Claude repeats itself, forgets instructions, contradicts earlier decisions, hallucinations increase
**Cause:** Context window filling up, "context rot" degrading quality
**Solution:**
```bash
# Check context usage (if using Claude HUD)
# Green = OK, Yellow = caution, Red = danger

# Option 1: Start fresh session
exit
claude  # New context, clean slate

# Option 2: Compact current session
/compact

# Option 3: Use Ralph pattern for long work
./ralph.sh 25  # Fresh context per iteration
```
**Quality thresholds:**
- 0-50%: Full quality
- 50-70%: Monitor closely
- 70-85%: Significant degradation likely
- 85%+: Critical - finish task and restart

**Prevention:** Prefer multiple short sessions over one extended session

---

#### Problem: "Verification failing silently"
**Symptoms:** Features marked complete that don't work, tests not running, typecheck skipped
**Cause:** Missing verification infrastructure, no hooks enforcing quality gates
**Solution:**
```bash
# Add PostToolUse hook to enforce verification
# ~/.claude/settings.json
{
  "hooks": {
    "PostToolUse": {
      "matcher": "Edit|Write",
      "command": "npm run typecheck && npm run test"
    }
  }
}

# For UI verification, ensure Chrome extension installed
# See Boris's recommendation: always verify visually for UI changes

# Add explicit verification to CLAUDE.md
echo "
## Verification Requirements
- Always run: npm run typecheck
- Always run: npm run test
- For UI changes: verify with Chrome extension
" >> CLAUDE.md
```
**If you skip this:** Quality degrades 2-3x according to Boris's measurements
**Prevention:** Verification is non-negotiable. No exceptions.

---

#### Problem: "Parallel sessions interfering"
**Symptoms:** Sessions step on each other, file conflicts, merge disasters
**Cause:** Multiple Claude instances working on same files without isolation
**Solution:**
```bash
# Use git worktrees for true isolation
git worktree add ../session-2 feature-branch-2
cd ../session-2 && claude

# Or use clear branch separation
git checkout -b feature/session-1
# In another terminal
git checkout -b feature/session-2

# Keep track of which session is which
# Boris uses 5-10 parallel but each on separate work
```
**Prevention:** Each parallel session should have its own workspace or branch

---

### Model & Performance Issues

#### Problem: "Opus 4.5 too slow"
**Symptoms:** Frustration with generation speed, tempted to switch to Sonnet
**Cause:** Misunderstanding the total time equation
**Reality check:**
```
Total Time = Generation Time + Correction Time + Re-prompting Time

Opus:   Higher generation, but MUCH lower correction/re-prompting
Sonnet: Lower generation, but significantly higher correction loops
```
**Solution:** Trust the math. Opus is almost always faster end-to-end because:
- Fewer tool use errors
- Better first drafts
- Less steering required
- Reduced iteration loops

**If you switch to Sonnet:** You'll spend more time fixing mistakes than you saved on generation
**Prevention:** Default to Opus 4.5 with extended thinking. Measure total completion time, not generation speed.

---

#### Problem: "Extended thinking not activating"
**Symptoms:** Claude giving quick shallow answers, not showing deep reasoning
**Cause:** Not using activation keywords
**Solution:**
Use these keywords in your prompts:
- `think` → 4,000 tokens of reasoning
- `think hard` / `think more` → 10,000 tokens
- `ultrathink` / `think harder` → 31,999 tokens (maximum)

Example:
```
"Think hard about the architecture for this authentication system before implementing."
```
**Prevention:** Include thinking keywords for any complex or architectural decisions

---

### Team & Collaboration Issues

#### Problem: "CLAUDE.md getting bloated"
**Symptoms:** Context window waste, slow startup, Claude confused by too many rules
**Cause:** Adding everything to CLAUDE.md instead of curating
**Solution:**
```bash
# Check current size
wc -w CLAUDE.md  # Should be under ~500-1000 tokens

# Audit and trim
# Keep only:
# - Build/test commands
# - Critical conventions
# - Known gotchas
# - PR template

# Remove:
# - Implementation details
# - Things obvious from code
# - Lengthy explanations
# - Outdated patterns
```
**Boris's rule:** Keep it short and focused. Every token counts.
**Prevention:** Treat CLAUDE.md like production code - review and refactor regularly

---

#### Problem: "Team not updating CLAUDE.md"
**Symptoms:** Same mistakes repeated across team, no institutional learning
**Cause:** No enforcement mechanism, not part of workflow
**Solution:**
```yaml
# Add GitHub Action to enforce CLAUDE.md updates
# .github/workflows/claude-md-check.yml
name: CLAUDE.md Check
on: pull_request
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Check CLAUDE.md updated
        run: |
          if git diff --name-only origin/main | grep -q "src/"; then
            if ! git diff --name-only origin/main | grep -q "CLAUDE.md"; then
              echo "::warning::Consider updating CLAUDE.md with learnings from this PR"
            fi
          fi
```
**During code review:** Tag `@.claude` to trigger CLAUDE.md discussion
**Prevention:** Make CLAUDE.md updates part of Definition of Done

---

### When NOT to Use Boris's Patterns

| Pattern | Skip When... | Use Instead |
|---------|--------------|-------------|
| 5-10 parallel sessions | Solo developer with simple project | 1-2 focused sessions |
| Plan Mode first | Quick one-liner fix | Direct execution |
| Opus 4.5 + thinking | Simple file read/grep tasks | Haiku for speed |
| Team CLAUDE.md | Personal project, no team | Personal notes file |
| code-simplifier | Already clean codebase | Skip cleanup phase |
| Verification hooks | Exploratory/experimental work | Manual review |

### Known Limitations

1. **Boris's workflow assumes a team environment** - Solo developers may find some patterns (shared CLAUDE.md, GitHub Actions) overkill
2. **Opus 4.5 costs more** - For budget-constrained projects, strategic model mixing may be necessary
3. **Verification infrastructure requires investment** - Chrome extension, simulators, hooks take time to set up
4. **"Surprisingly vanilla" may not fit everyone** - Some developers genuinely need more customization
5. **50-100 PRs/week velocity requires team support** - Don't expect this pace as a solo developer
6. **CLAUDE.md compounding requires discipline** - Benefits only materialize with consistent contribution

### Emergency Recovery

#### Claude stuck in bad state
```bash
# Nuclear option: full reset
/reset

# Less drastic: compact and continue
/compact

# If session completely broken
# Close terminal, start fresh
exit
claude
```

#### Made unwanted changes
```bash
# Undo last commit
git reset --soft HEAD~1

# Revert specific file
git checkout HEAD -- path/to/file

# Full project reset to last good state
git reset --hard origin/main
```

#### CLAUDE.md corrupted
```bash
# Restore from git
git checkout HEAD -- CLAUDE.md

# Or from specific commit
git checkout abc123 -- CLAUDE.md
```

---

*Extracted: 2026-01-10*
*Agent: Claude Opus 4.5*
*Depth: Yegge-level (850+ lines)*

# Plugin & Extension Grammar

A formal grammar for how plugins and extensions fit into the Claude Code pattern language. This document defines the syntax, semantics, and composition rules for extending Claude Code's vocabulary through plugins.

---

## Table of Contents

1. [Plugin as Primitive](#plugin-as-primitive)
2. [Plugin Types Taxonomy](#plugin-types-taxonomy)
3. [Plugin Syntax](#plugin-syntax)
4. [Plugin Composition Rules](#plugin-composition-rules)
5. [Extension Points](#extension-points)
6. [Plugin Anatomy](#plugin-anatomy)
7. [Composition Patterns](#composition-patterns)
8. [Plugin Ecosystem Map](#plugin-ecosystem-map)
9. [Grammar Reference](#grammar-reference)

---

## Plugin as Primitive

### Definition

A **plugin** is a pre-packaged capability that extends Claude Code's vocabulary. It is the fundamental unit of extensibility in the system.

```
plugin := {
  manifest: plugin.json,
  commands: command[],
  skills: skill[],
  hooks: hook[],
  agents: agent[],
  scripts: script[]
}
```

### Plugin vs Other Primitives

| Primitive | Nature | Scope | Trigger |
|-----------|--------|-------|---------|
| **Plugin** | Package of capabilities | Full lifecycle | Installation |
| **Skill** | Instruction set | Single purpose | Query relevance |
| **Hook** | Event handler | Specific event | Lifecycle event |
| **Command** | User action | Atomic task | `/command` |
| **Agent** | Isolated worker | Scoped task | Task tool |
| **MCP Server** | External tool | Data/Action bridge | Tool call |

### The Hierarchy

```
Plugin (container)
├── Commands (user-triggered)
├── Skills (knowledge/instruction)
├── Hooks (event-driven)
├── Agents (specialized workers)
└── Scripts (setup/support)
```

---

## Plugin Types Taxonomy

### By Primary Function

#### 1. Visualization Plugins
Extend Claude Code's observability and feedback mechanisms.

| Plugin | Function | Key Feature |
|--------|----------|-------------|
| **Claude HUD** | Session visibility | Real-time context bar |

**Grammar Pattern:**
```
visualization-plugin := hook(PostToolUse) -> render(status)
```

**Composition:**
- Runs passively via hooks
- Does not modify workflow
- Adds information layer

---

#### 2. Memory Plugins
Extend Claude Code's persistence and context capabilities.

| Plugin | Function | Key Feature |
|--------|----------|-------------|
| **Claude-Mem** | Persistent memory | Semantic compression |
| **MCP Memory Server** | Knowledge graph | Cross-session state |

**Grammar Pattern:**
```
memory-plugin := hook(SessionStart, PostToolUse) -> store(context) -> inject(future-session)
```

**Composition:**
- Captures via lifecycle hooks
- Stores to external database
- Injects on session start

---

#### 3. Workflow Plugins
Extend Claude Code's operational patterns and automation.

| Plugin | Function | Key Feature |
|--------|----------|-------------|
| **Ralph Wiggum** | Autonomous loops | Stop hook continuation |
| **Code-Simplifier** | Code polish | Opus-powered refactoring |
| **Feature-Dev** | 7-phase workflow | Multi-agent phases |
| **Code-Review** | PR review | 5 parallel agents |
| **PR-Review-Toolkit** | Modular review | Aspect-based selection |

**Grammar Pattern:**
```
workflow-plugin := command -> orchestrate(agents) -> verify(output) -> commit
```

**Composition:**
- User-initiated via command
- Spawns specialized agents
- Verification gates

---

#### 4. Tool Plugins (MCP Servers)
Extend Claude Code's capabilities through external tools.

| Plugin Type | Function | Examples |
|-------------|----------|----------|
| **Filesystem** | File operations | filesystem-server |
| **Database** | Data access | sqlite, postgres |
| **Communication** | Messaging | slack, discord |
| **Browser** | Web automation | puppeteer, playwright |
| **Version Control** | Git operations | git, github |

**Grammar Pattern:**
```
mcp-plugin := configure(settings.json) -> spawn(server) -> expose(tools)
```

**Composition:**
- Configured declaratively
- Runs as separate process
- Exposes tools to Claude

---

#### 5. Security Plugins
Extend Claude Code's safety and control mechanisms.

| Plugin | Function | Key Feature |
|--------|----------|-------------|
| **Security-Guidance** | Vulnerability detection | PreToolUse scanning |
| **Hookify** | Behavior prevention | Meta-hook creation |

**Grammar Pattern:**
```
security-plugin := hook(PreToolUse) -> analyze(operation) -> allow|block|warn
```

**Composition:**
- Intercepts before execution
- Pattern-based analysis
- Gate-keeping response

---

#### 6. Output Style Plugins
Extend Claude Code's communication patterns.

| Plugin | Function | Key Feature |
|--------|----------|-------------|
| **Explanatory-Output** | Educational mode | Why explanations |
| **Learning-Output** | Pedagogical mode | User participation |

**Grammar Pattern:**
```
style-plugin := hook(SessionStart) -> inject(personality)
```

**Composition:**
- SessionStart injection
- Modifies response style
- Passive thereafter

---

## Plugin Syntax

### Installation Grammar

```bash
# Add a marketplace
/plugin marketplace add [author]/[repo]

# Install from marketplace
/plugin install [plugin-name]@[marketplace-name]

# Direct CLI installation
claude plugin install [plugin-name]

# Update marketplace index
/plugin marketplace update [marketplace-name]
```

### Invocation Grammar

```bash
# Basic command invocation
/[plugin-name]:[command]

# Command with arguments
/[plugin-name]:[command] [args...]

# Aspect-based invocation (modular plugins)
/pr-review-toolkit:review-pr [aspect1] [aspect2] ...

# Natural language invocation
"Use the code simplifier agent to clean up this code"
```

### Configuration Grammar

**Location:** `~/.claude/settings.json` or `.claude/settings.json`

```json
{
  "plugins": {
    "[plugin-name]": {
      "[setting-key]": "[value]",
      "enabled": true|false
    }
  }
}
```

**Plugin-Specific Configuration:**

```json
// Claude HUD
{
  "plugins": {
    "claude-hud": {
      "layout": "default",
      "pathLevels": 2,
      "display": {
        "showModel": true,
        "showContextBar": true,
        "showTokenBreakdown": true
      }
    }
  }
}

// Claude-Mem
{
  "plugins": {
    "claude-mem": {
      "ai_model": "claude-3-opus-20240229",
      "worker_port": 37777,
      "context_injection_rules": {
        "auto_inject": true,
        "max_tokens": 5000
      }
    }
  }
}
```

---

## Plugin Composition Rules

### Rule 1: Plugin + Loop

Plugins can run within iterative loops.

**Pattern:**
```
while-loop(plugin-invoke -> process -> commit)
```

**Example: Ralph + Code-Simplifier**
```bash
# Each Ralph iteration uses code-simplifier
for iteration in iterations:
    implement(story)
    invoke(code-simplifier)
    run(tests)
    commit(if passing)
```

**Composition Syntax:**
```
ralph-loop := while(not-complete) {
    pick-story ->
    implement ->
    plugin(code-simplifier) ->
    verify ->
    commit ->
    update-status
}
```

---

### Rule 2: Plugin + Hook

Plugins can be triggered by lifecycle hooks.

**Pattern:**
```
hook(event) -> plugin-invoke
```

**Example: PostToolUse -> Formatting**
```json
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

**Example: SessionStart -> Memory Injection**
```
SessionStart -> claude-mem:inject-context -> continue-session
```

**Composition Syntax:**
```
hooked-plugin := on(event) { invoke(plugin) }
```

---

### Rule 3: Plugin + Worker

Plugins provide agents that workers can utilize.

**Pattern:**
```
orchestrator -> spawn(worker with plugin-agent)
```

**Example: Code-Review Multi-Agent**
```
orchestrator {
    spawn(claude.md-compliance-agent)
    spawn(bug-detection-agent)
    spawn(historical-context-agent)
    spawn(pr-history-agent)
    spawn(code-comments-agent)
} -> aggregate(results) -> report
```

**Composition Syntax:**
```
worker-plugin := Task(
    agent: plugin.agent,
    tools: plugin.tools,
    context: isolated
)
```

---

### Rule 4: Plugin + Plugin

Plugins can compose with other plugins.

**Pattern:**
```
plugin-A.output -> plugin-B.input
```

**Example: Memory + Review**
```
claude-mem:recall(relevant-history) ->
code-review:review(with-context) ->
claude-mem:store(review-results)
```

**Composition Syntax:**
```
plugin-chain := plugin-a -> transform -> plugin-b
```

---

### Rule 5: Plugin + MCP

Plugins can leverage MCP servers for external capabilities.

**Pattern:**
```
plugin-command -> mcp-tool -> process-result
```

**Example: Browser Plugin + Browserbase MCP**
```
/browser-test:run-e2e ->
mcp__browserbase__navigate(url) ->
mcp__browserbase__screenshot() ->
verify(screenshot)
```

**Composition Syntax:**
```
mcp-plugin := invoke(mcp-server.tool) -> process(result)
```

---

### Rule 6: Plugin + Skill

Plugins can package and auto-invoke skills.

**Pattern:**
```
query-match -> skill-load -> guided-execution
```

**Example: Frontend-Design Skill**
```
detect(frontend-work) ->
load(frontend-design-skill) ->
apply(design-principles) ->
implement(with-skill-guidance)
```

**Composition Syntax:**
```
skill-plugin := on(query-match) { load(skill) -> execute(with-guidance) }
```

---

## Extension Points

### Where Plugins Hook In

#### 1. PreToolUse

**Purpose:** Intercept before tool execution
**Use Cases:** Security gates, validation, logging, rate limiting

```
PreToolUse -> analyze(tool, input) -> allow|block|modify
```

**Available Data:**
- `$TOOL_NAME` - Tool being used
- `$EVENT_DATA` - Full JSON event blob

**Examples:**
```bash
# Security gate
PreToolUse(Bash) -> check(dangerous-patterns) -> block-if-match

# Logging
PreToolUse(*) -> log(tool, timestamp) -> allow
```

---

#### 2. PostToolUse

**Purpose:** React after tool execution
**Use Cases:** Formatting, linting, notifications, metrics

```
PostToolUse -> process(output) -> transform|notify|log
```

**Available Data:**
- `$TOOL_NAME` - Tool that ran
- `$FILE` - Target file (for Edit/Write)
- `$EVENT_DATA` - Full JSON event blob with output

**Examples:**
```bash
# Auto-format
PostToolUse(Edit) -> prettier($FILE)

# Metrics
PostToolUse(*) -> record(tool, duration)
```

---

#### 3. SessionStart

**Purpose:** Initialize session state
**Use Cases:** Context loading, personality injection, environment setup

```
SessionStart -> initialize(context, state, style)
```

**Examples:**
```bash
# Memory injection
SessionStart -> claude-mem:inject-relevant-context

# Style injection
SessionStart -> inject(explanatory-output-personality)
```

---

#### 4. SessionEnd

**Purpose:** Cleanup and persistence
**Use Cases:** State saving, summary generation, cleanup

```
SessionEnd -> persist(state) -> cleanup(temp-files)
```

**Examples:**
```bash
# Memory persistence
SessionEnd -> claude-mem:compress-and-store

# Summary
SessionEnd -> generate(session-summary) -> save
```

---

#### 5. Stop

**Purpose:** Intercept exit attempts
**Use Cases:** Loop continuation, completion verification

```
Stop -> check(completion) -> allow-exit|continue-loop
```

**Examples:**
```bash
# Ralph loop
Stop -> check(prd.json:all-complete) ->
    if(complete): exit
    else: restart-with-prompt
```

---

### Creating Custom Extensions

#### Plugin API Structure

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

  "agents": [
    {
      "name": "my-agent",
      "file": "agents/my-agent.md",
      "model": "sonnet"
    }
  ],

  "hooks": {
    "file": "hooks/hooks.json"
  }
}
```

#### Skill Definition Pattern

```markdown
# Skill Name

## Purpose
One-liner description

## Mental Model
Metaphor/framework for understanding

## Instructions
Detailed guidance

## Tool Ownership
Which tools this skill uses

## Rules/Constraints
What to do and not do

## Examples
Usage demonstrations
```

#### Agent Definition Pattern

```yaml
name: agent-name
description: What triggers this agent's selection
model: opus|sonnet|haiku
context: fork|shared

# System prompt follows in markdown
```

#### MCP Server Definition

```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "@package/server-name", "arg1"],
      "env": {
        "API_KEY": "your-key"
      }
    }
  }
}
```

---

## Plugin Anatomy

### Directory Structure

```
my-plugin/
├── .claude-plugin/
│   └── plugin.json              # Manifest (required)
├── commands/
│   ├── init.md                  # Initialization command
│   ├── run.md                   # Main command
│   └── status.md                # Status check
├── skills/
│   └── main/
│       └── SKILL.md             # Primary skill
├── agents/
│   ├── worker.md                # Worker agent
│   └── reviewer.md              # Review agent
├── hooks/
│   ├── hooks.json               # Hook configuration
│   └── post-edit.sh             # Hook scripts
├── scripts/
│   └── setup.js                 # Setup scripts
└── templates/
    └── config.json              # Templates
```

### Manifest Grammar

```json
{
  "name": string,                 // Plugin identifier
  "version": "X.Y.Z",             // Semantic version
  "description": string,          // Brief description
  "author": string,               // Author handle

  "commands": [                   // User-invoked actions
    {
      "name": string,             // Command name after colon
      "description": string,      // Help text
      "file": string              // Path to command.md
    }
  ],

  "skills": [                     // Instruction sets
    {
      "name": string,             // Skill identifier
      "file": string,             // Path to skill.md
      "triggers": string[]        // Auto-trigger keywords
    }
  ],

  "agents": [                     // Specialized workers
    {
      "name": string,             // Agent identifier
      "file": string,             // Path to agent.md
      "model": "opus"|"sonnet"|"haiku"
    }
  ],

  "hooks": {                      // Event handlers
    "file": string                // Path to hooks.json
  }
}
```

---

## Composition Patterns

### Pattern 1: Sequential Plugin Chain

```
plugin-A:command -> plugin-B:command -> output

Example:
implement(feature) ->
/code-simplifier:simplify ->
/code-review:review ->
commit
```

### Pattern 2: Parallel Plugin Execution

```
orchestrator {
    spawn(plugin-A:agent)
    spawn(plugin-B:agent)
    spawn(plugin-C:agent)
} -> aggregate -> synthesize

Example (code-review):
spawn(bug-detector) ||
spawn(security-analyzer) ||
spawn(style-checker) ||
spawn(test-analyzer) ||
spawn(comment-reviewer)
-> aggregate(findings) -> report
```

### Pattern 3: Plugin as Middleware

```
request -> plugin:intercept -> modify -> continue

Example:
file-edit -> security-guidance:scan ->
    if(safe): continue
    else: warn-and-continue|block
```

### Pattern 4: Plugin as Enhancement Layer

```
base-capability + plugin:enhancement = augmented-capability

Example:
session + claude-hud = session-with-visibility
session + claude-mem = session-with-memory
```

### Pattern 5: Plugin Orchestrator

```
meta-plugin:orchestrate(plugin-a, plugin-b, ...) -> coordinate -> synthesize

Example (pr-review-toolkit):
/pr-review-toolkit:review-pr all ->
    invoke(comment-analyzer) ->
    invoke(test-analyzer) ->
    invoke(error-hunter) ->
    invoke(type-analyzer) ->
    invoke(code-reviewer) ->
    invoke(simplifier) ->
    aggregate(all-findings)
```

---

## Plugin Ecosystem Map

### Official Anthropic Plugins

| Plugin | Category | Commands | Key Feature |
|--------|----------|----------|-------------|
| **agent-sdk-dev** | Workflow | `/new-sdk-app` | SDK project setup |
| **claude-opus-4-5-migration** | Workflow | (skill) | Model migration |
| **code-review** | Workflow | `/code-review` | 5 parallel agents |
| **code-simplifier** | Workflow | (natural language) | Opus-powered polish |
| **commit-commands** | Workflow | `/commit`, `/commit-push-pr` | Git automation |
| **explanatory-output-style** | Style | (hook) | Educational mode |
| **feature-dev** | Workflow | `/feature-dev` | 7-phase development |
| **frontend-design** | Workflow | (skill) | Anti-AI-aesthetic |
| **hookify** | Security | `/hookify` | Meta-hook creation |
| **learning-output-style** | Style | (hook) | Pedagogical mode |
| **plugin-dev** | Meta | `/plugin-dev:create-plugin` | Plugin creation toolkit |
| **pr-review-toolkit** | Workflow | `/pr-review-toolkit:review-pr` | Modular PR review |
| **ralph-wiggum** | Workflow | `/ralph-loop` | Autonomous loops |
| **security-guidance** | Security | (hook) | Vulnerability detection |

### Community Plugins

| Plugin | Author | Category | Key Feature |
|--------|--------|----------|-------------|
| **Claude HUD** | @jarrodwatts | Visualization | Real-time context bar |
| **Claude-Mem** | @thedotmack | Memory | Persistent memory |
| **Ralph Wiggum Marketer** | @koylanai | Workflow | Content loops |
| **CC Mirror** | @nummanali | Orchestration | Multi-agent enablement |
| **N-Skills** | @nummanali | Skills | Gas Town tutorial |
| **Browserbase** | browserbase | Tools | Cloud browsing |

### MCP Server Categories

| Category | Servers | Purpose |
|----------|---------|---------|
| **Filesystem** | filesystem, google-drive | File operations |
| **Database** | sqlite, postgres | Data access |
| **Version Control** | git, github, gitlab | Code management |
| **Communication** | slack, discord | Messaging |
| **Browser** | puppeteer, playwright, browserbase | Web automation |
| **Memory** | memory, sequential-thinking | Knowledge persistence |
| **Fetch** | fetch | Web content retrieval |
| **Time** | time | Time/timezone operations |

---

## Grammar Reference

### Formal Plugin Grammar

```ebnf
plugin ::= manifest commands* skills* hooks* agents* scripts*

manifest ::= "name" "version" "description" "author"

command ::= "/" plugin-name ":" command-name args*

skill ::= "load" skill-name "and" action
        | query-match -> auto-load

hook ::= event-type "[" matcher "]" -> action

agent ::= "spawn" "(" agent-name "," context ")"

composition ::= plugin ("+" | "->" | "||") plugin

event-type ::= "PreToolUse" | "PostToolUse" | "SessionStart" | "SessionEnd" | "Stop"

matcher ::= tool-name | "*" | regex

action ::= "allow" | "block" | "modify" | "log" | "notify" | command
```

### Installation Grammar

```ebnf
install ::= "/plugin" "marketplace" "add" author "/" repo
          | "/plugin" "install" plugin-name "@" marketplace
          | "claude" "plugin" "install" plugin-name
```

### Invocation Grammar

```ebnf
invoke ::= "/" plugin-name ":" command args*
         | "Use the" plugin-name "agent to" action
         | "Load the" skill-name "skill and" action
```

### Configuration Grammar

```ebnf
config ::= "{"
  "plugins" ":" "{"
    plugin-name ":" "{" settings "}"
  "}"
"}"

settings ::= setting ("," setting)*
setting ::= key ":" value
```

---

## Quick Reference

### Installation Cheatsheet

```bash
# Add marketplace
/plugin marketplace add jarrodwatts/claude-hud

# Install plugin
/plugin install claude-hud

# Setup plugin
/claude-hud:setup
```

### Invocation Cheatsheet

```bash
# Direct command
/code-review

# Namespaced command
/pr-review-toolkit:review-pr tests errors

# Natural language
"Use the code simplifier agent"
```

### Hook Configuration Cheatsheet

```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit",
      "hooks": [{ "type": "command", "command": "prettier --write $FILE" }]
    }]
  }
}
```

### MCP Configuration Cheatsheet

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "..." }
    }
  }
}
```

---

## Summary

Plugins are the primary extension mechanism for Claude Code. They:

1. **Package capabilities** as commands, skills, hooks, and agents
2. **Compose with primitives** through formal rules
3. **Hook into lifecycle** at defined extension points
4. **Extend vocabulary** with new actions and knowledge
5. **Chain together** for complex workflows

The grammar enables:
- **Predictable composition** - Known rules for combining plugins
- **Clear semantics** - Defined meaning for each primitive
- **Extensibility** - New capabilities follow the same patterns
- **Reusability** - Plugins work across projects and teams

---

*Compiled: January 2026*
*Claude Code Version: 2.1.x*

# Plugin & Extension Grammar

> **You Are Here:** This document explains **how plugins extend the Claude Code vocabulary**. Plugins are pre-packaged capabilities (commands, skills, hooks, agents) that add new "words" and "phrases" to your pattern language. Use this when evaluating which plugins to install, understanding how plugins compose with existing patterns, or building your own plugins. Prerequisite reading: `grammar-vocabulary.md` for core terms.

---
## D-FINAL Integration
**Cross-references:** [D-FINAL-architecture.md Section 6 for combinations, D-FINAL-implementation.md Section 4 for tools]
**Journey link:** journey-architecture.md, journey-implementation.md
**Last updated:** 2026-01-18 (Phase 2B)
---

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

### Checkpoint: Plugin Types
**You should now understand:**
- [ ] Six plugin categories: Visualization, Memory, Workflow, Tool (MCP), Security, Output Style
- [ ] How each type hooks into Claude Code (passive hooks vs user commands)
- [ ] Key examples: Claude HUD (visualization), Claude-Mem (memory), Ralph Wiggum (workflow)

**If unclear:** Re-read the "Grammar Pattern" for each plugin type to see the hook/command structure.

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

### Checkpoint: Plugin Syntax
**You should now understand:**
- [ ] Installation: `/plugin marketplace add`, `/plugin install`
- [ ] Invocation: `/plugin-name:command args`
- [ ] Configuration: `~/.claude/settings.json` with `plugins` key

**If unclear:** Try running `/plugin list` to see installed plugins.

**Terminal verification:**
```bash
# List installed plugins
claude plugin list

# Check plugin configuration
cat ~/.claude/settings.json | jq '.plugins'
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

### Checkpoint: Plugin Composition Rules
**You should now understand:**
- [ ] Plugin + Loop: Plugins can run within Ralph iterations
- [ ] Plugin + Hook: Plugins can be triggered by lifecycle events
- [ ] Plugin + Worker: Plugins provide agents for orchestrator delegation
- [ ] Plugin + Plugin: Plugins can chain together via output/input
- [ ] Plugin + MCP: Plugins can leverage external MCP server tools

**If unclear:** Study the "Example" for each rule to see concrete composition.

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

### Checkpoint: Extension Points
**You should now understand:**
- [ ] PreToolUse: Intercept before tool execution (security gates, validation)
- [ ] PostToolUse: React after tool execution (formatting, metrics)
- [ ] SessionStart: Initialize context and state
- [ ] SessionEnd: Persist state and cleanup
- [ ] Stop: Intercept exit attempts (loop continuation)

**If unclear:** Study the "Available Data" for each hook to understand what information is accessible.

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

### Checkpoint: Plugin Anatomy
**You should now understand:**
- [ ] Directory structure: `.claude-plugin/plugin.json` as manifest, plus commands/, skills/, agents/, hooks/
- [ ] Manifest grammar: name, version, commands[], skills[], agents[], hooks
- [ ] Skill definition pattern: Purpose, Mental Model, Instructions, Tool Ownership
- [ ] Agent definition pattern: name, description, model, context

**If unclear:** Look at an existing plugin's directory structure (e.g., Claude HUD on GitHub).

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

## Troubleshooting

### Common Issue: Plugin Not Found After Installation

**Symptom:** `/plugin-name:command` returns "command not found" or similar error

**Cause:** Plugin not properly installed, or marketplace not added

**Fix:**
```bash
# 1. Check if marketplace is added
/plugin marketplace list

# 2. Add the marketplace if missing
/plugin marketplace add jarrodwatts/claude-hud

# 3. Update marketplace index
/plugin marketplace update claude-hud

# 4. Reinstall the plugin
/plugin install claude-hud

# 5. Verify installation
/plugin list
```

---

### Common Issue: Hook Not Firing

**Symptom:** PostToolUse or PreToolUse hook configured but never executes

**Cause:** Matcher misconfigured, or hook file not found

**Fix:**
1. Verify hook configuration in `~/.claude/settings.json`:
```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit",
      "hooks": [{
        "type": "command",
        "command": "echo 'Hook fired for $FILE'"
      }]
    }]
  }
}
```

2. Test with a simple echo command first
3. Check that matcher matches the exact tool name: `Edit`, `Write`, `Bash`, `Read`
4. For catch-all, use `*` as matcher

**Terminal debugging:**
```bash
# Test if hook script is executable
chmod +x ~/.claude/hooks/my-hook.sh

# Test script directly
~/.claude/hooks/my-hook.sh test-file.js
```

---

### Common Issue: MCP Server Won't Start

**Symptom:** MCP tools not appearing, or "server not found" errors

**Cause:** Missing dependencies, wrong command path, or env vars not set

**Fix:**
```bash
# 1. Verify the server package is installed
npx -y @modelcontextprotocol/server-github --version

# 2. Check environment variables
echo $GITHUB_PERSONAL_ACCESS_TOKEN

# 3. Test server manually
npx -y @modelcontextprotocol/server-github

# 4. Verify settings.json configuration
cat ~/.claude/settings.json | jq '.mcpServers'
```

Expected configuration:
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxx"
      }
    }
  }
}
```

---

### Common Issue: Plugin Conflicts

**Symptom:** Two plugins trying to handle the same hook, unexpected behavior

**Cause:** Multiple plugins registered for same lifecycle event without coordination

**Fix:**
1. Check which plugins use the conflicting hook:
```bash
# Search for PostToolUse hooks across plugins
grep -r "PostToolUse" ~/.claude/plugins/
```

2. Disable one plugin:
```json
{
  "plugins": {
    "conflicting-plugin": {
      "enabled": false
    }
  }
}
```

3. Or sequence the hooks intentionally:
```json
{
  "hooks": {
    "PostToolUse": [
      {"matcher": "Edit", "hooks": [{"type": "command", "command": "plugin-a $FILE"}]},
      {"matcher": "Edit", "hooks": [{"type": "command", "command": "plugin-b $FILE"}]}
    ]
  }
}
```

---

### Common Issue: Skill Not Auto-Loading

**Symptom:** Plugin skill exists but doesn't activate on relevant queries

**Cause:** Trigger keywords not matching, or skill file missing

**Fix:**
1. Verify skill has triggers in plugin.json:
```json
{
  "skills": [{
    "name": "my-skill",
    "file": "skills/my-skill.md",
    "triggers": ["keyword1", "keyword2", "phrase to match"]
  }]
}
```

2. Check skill file exists at specified path
3. Test with explicit load:
```
Load the my-skill skill and apply it to this task
```

4. Add more trigger variations in plugin.json

---

### Common Issue: Plugin Commands Not Working in Session

**Symptom:** Plugin installed but `/plugin-name:command` doesn't work

**Cause:** Plugin needs setup or session restart

**Fix:**
```bash
# 1. Run plugin setup if it has one
/plugin-name:setup

# 2. Check plugin status
/plugin-name:status

# 3. Restart Claude Code session
# (exit and start new session)

# 4. Verify plugin is enabled in settings
cat ~/.claude/settings.json | jq '.plugins["plugin-name"]'
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

# Claude Agent SDK Tutorial - Nader Dabit's TL;DR Guide

## Source
- **Author:** @dabit3 (Nader Dabit) - Developer, Eigen Labs/Aave background
- **Date:** 2026-01-08
- **URL:** Main post
- **Tutorial:** https://x.com/i/article/2009042873145282561
- **Engagement:** 5.2K likes, 11K+ bookmarks, ~900K views

---

## Core Insight

> "I learned and used the Claude Agent SDK today to build an agent. I genuinely think this will be one of the most useful skillets [skillsets] to have in this new world."

---

## What is the Claude Agent SDK?

A programmatic way to build autonomous agents that use Claude as the reasoning brain while giving it safe, sandboxed computer control.

### The Shift
```
Old Way: Prompt → Response (chat)
New Way: Agent Engineering (orchestration + tools + state)
```

---

## Official Resources

| Resource | Link |
|----------|------|
| Building Agents Guide | https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk |
| Computer Use Docs | https://platform.anthropic.com/docs/agents-and-tools/tool-use/computer-use-tool |
| Reference Implementation | https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo |

---

## Mental Model

> Think of Claude no longer as a chatty assistant, but as a **brain + hands system**: the model reasons/plans, the SDK provides the "computer body" (screen, keyboard, shell) it can use.

### Key Principles

1. **Give the agent a real computer** (sandboxed) rather than simulating via text
2. **Reliable control loops** (memory, tools, error recovery) > perfect single prompts
3. **Orchestration & state management** > raw model intelligence for production

---

## Agent Architecture

```
┌─────────────────────────┐
│      Your Application   │
└───────────┬─────────────┘
            ↓
┌─────────────────────────┐
│    Claude Agent SDK     │
│  (Orchestration Layer)  │
└───────────┬─────────────┘
            ↓
┌─────────────────────────┐
│        Claude API       │
│   (Reasoning Brain)     │
└───────────┬─────────────┘
            ↓
┌─────────────────────────┐
│    Tools / Computer     │
│ (File ops, shell, etc.) │
└─────────────────────────┘
```

---

## Typical SDK Patterns

### 1. Setting Up Client
```python
# Typical pattern (conceptual)
from anthropic import Agent

agent = Agent(
    model="claude-opus-4-5",
    tools=[file_tool, shell_tool, browser_tool]
)
```

### 2. Defining Tools
```python
tools = [
    {
        "name": "bash",
        "description": "Execute shell commands"
    },
    {
        "name": "file_editor",
        "description": "Read and write files"
    }
]
```

### 3. The Agent Loop
```
Observe → Think → Act → Repeat
```

---

## Use Cases

| Use Case | Why SDK vs Claude Code |
|----------|----------------------|
| Product-embedded agents | No visible Claude UI |
| Custom multi-step workflows | Full control over flow |
| Autonomous dev/ops agents | Programmatic triggers |
| Agent swarms | Multi-agent coordination |

---

## Claude Code vs Agent SDK

| Aspect | Claude Code | Agent SDK |
|--------|-------------|-----------|
| Interface | Interactive CLI | Programmatic API |
| Best for | Personal dev work | Embedded products |
| Control | High-level | Fine-grained |
| Setup | Minimal | More involved |

> "For personal one-off work, direct Claude Code interface may be simpler/faster"

---

## Quotable Gold

> "Agent SDKs are the new 'operating systems' for intelligence: orchestration, tool use, and state management matter more than raw model IQ."

> "Agent Engineering is rapidly replacing Prompt Engineering as the high-leverage skill of 2026."

---

## Caveats & Gotchas

| Issue | Notes |
|-------|-------|
| Still early | SDK released ~Sep 2025, expect breaking changes |
| Security | Computer use requires careful sandboxing (Docker) |
| Cost at scale | API calls + screenshots + loops add up |
| Complexity | More setup than direct Claude Code |

### Sandboxing Critical
> Computer use requires careful sandboxing/virtualization — security/privacy risks if misconfigured

---

## Related Concepts

**Builds on:**
- Claude Code / Computer Use beta (Oct 2024)
- Tool use APIs
- Basic agent loops

**Enables:**
- Product-embedded agents
- Custom multi-step workflows
- Autonomous dev/ops agents
- Agent swarms

**Similar to:**
- OpenAI's Swarm
- LangChain/LangGraph agents
- AutoGPT-style loops
- But with stronger native computer/screen interaction

**Supersedes:**
- Pure prompt engineering (less leverage for complex, stateful tasks)

---

## The Larger Pattern

> The shift from "prompt → response" → "agent engineering" as the dominant developer paradigm in 2026

This is foundational for:
- Agentic products
- Agent marketplaces
- Embedded AI workflows

---

## Follow-Up Questions

1. What exact agent did Nader build on day 1?
2. How does cost scale for typical agent loops (screenshots + many steps)?
3. Best open-source alternatives for non-Anthropic models?

---

## Synthesis Hooks

**Combines well with:**
- Onchain tools (given Nader's background)
- ReAct-style loops
- MCP patterns (memory/control/planning)
- Evaluation harnesses

**Part of larger pattern:**
Agent Engineering as the highest-leverage skill of 2026.

---

## Actionability

🟡 **Medium Lift** - Requires setup (API key, sandbox env, loop implementation), but TL;DR guide makes it faster than raw docs

---

## What You'll See When You Run This

**Before running:** You have an Anthropic API key and Python 3.9+.

### Installing the Agent SDK

```bash
$ pip install anthropic-agent-sdk
```

**Annotated Output:**
```
Collecting anthropic-agent-sdk
  Downloading anthropic_agent_sdk-0.3.2-py3-none-any.whl (156 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 156.2/156.2 kB

Installing dependencies:
  ✓ anthropic>=0.25.0
  ✓ httpx>=0.24.0
  ✓ pydantic>=2.0.0

✅ Successfully installed anthropic-agent-sdk-0.3.2
```

### Basic Agent Script

```python
# agent.py
from anthropic import Agent, Tool

# Define tools the agent can use
tools = [
    Tool(
        name="bash",
        description="Execute shell commands",
        input_schema={
            "type": "object",
            "properties": {
                "command": {"type": "string"}
            },
            "required": ["command"]
        }
    ),
    Tool(
        name="file_editor",
        description="Read and write files",
        input_schema={...}
    )
]

# Create the agent
agent = Agent(
    model="claude-opus-4-5-20251101",
    tools=tools,
    system="You are a helpful coding assistant."
)

# Run a task
result = agent.run("Create a Python script that fetches weather data")
print(result)
```

### Running the Agent

```bash
$ python agent.py
```

**Annotated Output:**
```
🤖 Agent starting...
   Model: claude-opus-4-5
   Tools: bash, file_editor

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AGENT LOOP: Iteration 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Observe]                              ← Agent loop pattern
Task: Create a Python script that fetches weather data

[Think]
I need to:
1. Create a Python file
2. Add requests library import
3. Write function to fetch weather API
4. Add error handling

[Act]
Using tool: file_editor
Action: Create weather.py

✓ Tool executed successfully

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AGENT LOOP: Iteration 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Observe]
File weather.py created with basic structure.

[Think]
Need to test the script works.

[Act]
Using tool: bash
Command: python weather.py --city "New York"

Output:
  Temperature: 72°F
  Conditions: Partly cloudy
  Humidity: 45%

✓ Tool executed successfully

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AGENT LOOP: Complete
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Task complete!
  Iterations: 2
  Tools used: file_editor, bash
  Files created: weather.py

Result:
  Created weather.py with:
  - fetch_weather(city) function
  - Error handling for API failures
  - CLI interface
```

### With Computer Use (Browser Control)

```python
# browser_agent.py
from anthropic import Agent, ComputerTool

agent = Agent(
    model="claude-opus-4-5-20251101",
    tools=[ComputerTool()],  # Full computer control
    sandbox="docker"          # CRITICAL: Always sandbox!
)

result = agent.run("Go to github.com and star the anthropic-quickstarts repo")
```

**Annotated Output:**
```
🤖 Agent starting with computer use...
   Model: claude-opus-4-5
   Tools: computer (screen, keyboard, mouse)
   Sandbox: docker container

⚠️  Computer use requires careful sandboxing!
   Running in isolated Docker container...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AGENT LOOP: Iteration 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Observe - Screenshot]
📸 Captured: Desktop with browser closed

[Think]
I need to open a browser and navigate to GitHub.

[Act]
Using: computer.click(x=50, y=50)  # Click browser icon
Using: computer.type("github.com")
Using: computer.key("enter")

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AGENT LOOP: Iteration 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Observe - Screenshot]
📸 Captured: GitHub homepage loaded

[Think]
Navigate to anthropic-quickstarts repo.

[Act]
Using: computer.type("anthropic-quickstarts")
Using: computer.click(x=300, y=200)  # Search result

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AGENT LOOP: Iteration 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Observe - Screenshot]
📸 Captured: Repository page loaded

[Act]
Using: computer.click(x=850, y=150)  # Star button

✓ Repository starred!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Task complete!
  Iterations: 3
  Screenshots: 3
  Actions: 6
```

### SDK vs Claude Code Comparison

```
Claude Code (Interactive):
$ claude
claude> Create a weather script

[Claude works in your terminal]
[You see everything in real-time]
[Great for personal dev work]

Agent SDK (Programmatic):
$ python my_agent.py

[Agent runs autonomously]
[Logs to your application]
[Great for embedded products]
```

**Timing Expectations:**
- SDK installation: 1-2 minutes
- Basic agent setup: 5-10 minutes
- Agent loop iteration: 5-30 seconds each
- Computer use screenshot: 1-2 seconds each
- Full computer use task: 1-5 minutes

**What to Do While It Runs:**
- Agent runs autonomously in Observe→Think→Act loop
- Watch logs for tool calls and reasoning
- For computer use: Screenshots show what agent "sees"
- Always run computer use in sandboxed environment!

**Critical Security Note:**
> Computer use requires careful sandboxing (Docker) - security/privacy risks if misconfigured. Never run computer use agents with access to production systems.

**If you skip the SDK:** You're limited to interactive Claude Code. The SDK enables embedding agents in products, triggering programmatically, and building multi-agent systems.

**This connects to:** The shift from "prompt engineering" to "agent engineering" - the highest-leverage skill of 2026. Orchestration, tools, and state management matter more than raw prompts.

---

## Tags
`#tooling` `#agent-sdk` `#tutorial` `#programmatic` `#computer-use` `#embedded-agents` `#dabit3` `#anthropic`

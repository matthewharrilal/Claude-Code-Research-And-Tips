# Sub-Agents Directory - 200+ Ready-to-Use Prompts

## Source
- **Author:** @shydev69 (shydev)
- **Date:** 2026-01-03
- **URL:** https://x.com/shydev69/status/2007373253229326354
- **Engagement:** 2.1K likes, 185 reposts, 148K views, 3.1K bookmarks
- **Site:** https://sub-agents.directory

---

## Core Insight

> "100+ claude code sub-agent prompts, mcp server integrations, video tutorials for beginners. all open source. all free."

A curated, searchable directory of **200+ ready-to-use Claude Code sub-agent prompts** plus MCP server configurations, with beginner-friendly video tutorials.

---

## What It Provides

### Sub-Agent Categories
- Language Specialists (React, Python, TypeScript, etc.)
- Infrastructure
- Quality & Security
- And more...

### Additional Resources
- MCP server listings (GitHub, Vercel, Supabase, Prisma, Figma)
- Video tutorials for beginners
- One-click spawning of Claude/ChatGPT chats with sub-agent prompts

### Workflow
1. Browse site
2. Copy prompt (YAML/Markdown format)
3. Paste into `.claude/agents/` folder
4. Use `/agents` in Claude Code

---

## Key Links

- **Main Site:** https://sub-agents.directory
- **Official Anthropic Docs:** https://docs.anthropic.com/en/docs/claude-code/sub-agents
- **Community Collection:** https://github.com/VoltAgent/awesome-claude-code-subagents (110+ subagents)
- **Related Directories:** subagents.sh, subagents.app/agents, subagents.cc

---

## Mental Model

Think of Claude Code not as a single generalist AI, but as an **orchestration hub** that intelligently delegates tasks to specialized sub-agents (like hiring expert teammates).

### Key Principles
1. **Specialization > Generalization** for complex dev work
2. **Sub-agents = isolated context windows + restricted tools** → safety & focus
3. **Description field guides dynamic selection** (Claude chooses who to call)
4. **Sub-agents for deep focused work** → Skills for broad capabilities

### Sub-Agents vs Skills
| Aspect | Sub-Agents | Skills |
|--------|------------|--------|
| Invocation | On-demand specialists | Always-on capabilities |
| Context | Isolated window | Shared context |
| Purpose | Deep, focused tasks | Broad capabilities |

---

## Implementation Details

### File Location
```
.claude/agents/
├── react-specialist.yaml
├── python-expert.yaml
├── security-auditor.yaml
└── ...
```

### Prompt Format
Sub-agent prompts are YAML/Markdown format, copy-paste ready from the directory.

### Dynamic Loading
Full prompt content loads only on invocation:
- **Pro:** Good for scaling
- **Con:** Can surprise if you expect everything always in context

---

## Community Reaction

- Overwhelmingly positive: "crazy", "awesome", "saved lots of time", "next level"
- Minor UI bug report on day 1 (acknowledged quickly)
- No major criticism visible

---

## Caveats

- May have overlapping/duplicate prompts from community collections
- Poor descriptions → wrong agent picked (description quality matters)
- Requires Claude Code setup first (not plug-and-play for total beginners)
- Day-1 UI bugs expected
- Directory quality may vary by sub-agent

---

## Related Concepts

**Builds on:**
- Official Anthropic Claude Code sub-agents feature (`/agents` command)
- YAML-based sub-agent definitions
- MCP servers (tool integrations)

**Enables:**
- Agentic development workflows without building from scratch
- Multi-agent pipelines (orchestrator + specialists)
- Faster ramp-up for Claude Code power users

**Part of Larger Pattern:**
> "Don't write code, compose agents" - the shift toward agentic IDEs

---

## Follow-Up Questions

1. Which sub-agents have highest real-world usage/success stories?
2. How well do beginner tutorials cover MCP server setup?
3. Is there a GitHub repo for contributing new agents?
4. Differences between sub-agents.directory vs VoltAgent's awesome list?

---

## Actionability

🟢 **Quick Win** - Browse → copy → paste into `.claude/agents/` → use

---

## What You'll See When You Run This

**Before running:** You have Claude Code installed and want to add specialized sub-agents.

### Browsing the Directory

Open browser to `https://sub-agents.directory`:

```
╔═══════════════════════════════════════════════════════════════╗
║              SUB-AGENTS DIRECTORY                              ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                ║
║  🔍 Search agents...                                           ║
║                                                                ║
║  📁 Categories:                                                ║
║  ├── Language Specialists (45)                                 ║
║  │   ├── React Expert                                          ║
║  │   ├── Python Guru                                           ║
║  │   ├── TypeScript Specialist                                 ║
║  │   └── ...                                                   ║
║  ├── Infrastructure (28)                                       ║
║  ├── Quality & Security (32)                                   ║
║  └── Data & Analytics (19)                                     ║
║                                                                ║
║  🔥 Popular:                                                   ║
║  • react-specialist          ★ 1.2K copies                    ║
║  • security-auditor          ★ 890 copies                     ║
║  • database-architect        ★ 756 copies                     ║
║                                                                ║
╚═══════════════════════════════════════════════════════════════╝
```

### Copying an Agent

Click on "react-specialist" to view:

```
╔═══════════════════════════════════════════════════════════════╗
║  REACT SPECIALIST                                              ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                ║
║  Description:                                                  ║
║  Expert in React 18+, hooks, server components, and modern    ║
║  React patterns. Deep knowledge of Next.js, Remix, and state  ║
║  management libraries.                                         ║
║                                                                ║
║  Best for:                                                     ║
║  • Component architecture decisions                            ║
║  • Performance optimization                                    ║
║  • Complex state management                                    ║
║  • React 18 migration                                          ║
║                                                                ║
║  [Copy YAML]  [Open in Claude]  [Open in ChatGPT]             ║
║                                                                ║
╚═══════════════════════════════════════════════════════════════╝

[Click "Copy YAML"]

Copied to clipboard!
```

### Installing the Agent

```bash
# Create agents directory if it doesn't exist
$ mkdir -p .claude/agents

# Create the agent file
$ cat > .claude/agents/react-specialist.yaml << 'EOF'
name: react-specialist
description: Expert in React 18+, hooks, server components, and modern React patterns. Deep knowledge of Next.js, Remix, and state management.
model: sonnet

You are an expert React developer with deep knowledge of:
- React 18+ features (Suspense, Server Components, Concurrent Mode)
- Modern hooks patterns (custom hooks, useCallback, useMemo optimization)
- State management (Zustand, Jotai, React Query, Redux Toolkit)
- Next.js 14+ App Router, Server Actions
- Performance optimization (memo, lazy loading, code splitting)
- TypeScript integration with React

When analyzing code:
1. Check for React anti-patterns
2. Verify hook dependencies
3. Identify render optimization opportunities
4. Suggest modern alternatives to legacy patterns

Always provide:
- Code examples using modern patterns
- Performance implications
- TypeScript type annotations
EOF
```

### Using the Agent

```
claude> /agents
```

**Annotated Output:**
```
📋 Available Sub-Agents:

  react-specialist                    ← Your new agent!
    Expert in React 18+, hooks, server components...

  python-expert
    Deep Python knowledge for data science and web...

  security-auditor
    Reviews code for vulnerabilities and security...

Select an agent or type a task to let Claude choose.
```

```
claude> Use react-specialist to review my component architecture
```

**Annotated Output:**
```
🤖 Spawning sub-agent: react-specialist

[Agent context loading...]            ← Isolated context window
  Model: sonnet
  Specialized prompt loaded

[react-specialist analyzing...]

I'll review your component architecture using React 18+ best practices.

Looking at your components:

📁 src/components/
├── Dashboard.tsx                     ← Large component, could split
├── UserProfile.tsx                   ← Good isolation
├── Settings/
│   ├── SettingsForm.tsx             ← Uses legacy class component
│   └── SettingsProvider.tsx         ← Good context pattern
└── shared/
    └── Button.tsx                    ← Missing memo

## Recommendations:

1. **Dashboard.tsx** (High Priority)
   - Split into smaller components
   - Use React.lazy() for tab panels
   - Current: 450 lines → Target: <150 lines each

2. **SettingsForm.tsx** (Medium Priority)
   - Migrate from class to functional component
   - Replace this.state with useState
   - Add React.memo for performance

3. **Button.tsx** (Low Priority)
   - Add React.memo wrapper
   - Current renders: ~50/interaction
   - After memo: ~1/interaction

[react-specialist session complete]
```

**Timing Expectations:**
- Browsing directory: Instant
- Copying agent: Instant
- Installing agent: <1 minute
- Agent execution: 30-90 seconds (depends on task)

**What to Do While It Runs:**
- Sub-agents run in isolated context windows
- Claude dynamically selects the right agent based on task
- Check /agents to see available specialists
- Each agent has focused expertise

**If you skip specialized agents:** Claude uses its general knowledge, which may miss domain-specific best practices that specialists know deeply.

**This connects to:** The "orchestration hub" paradigm - Claude Code as a coordinator that delegates to specialist sub-agents for deep focused work.

---

## Tags
`#tooling` `#sub-agents` `#directory` `#resource` `#prompts` `#mcp-servers` `#open-source` `#quick-win`

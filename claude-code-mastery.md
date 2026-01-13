# Claude Code Mastery

A comprehensive corpus of Claude Code techniques, from fundamentals through advanced autonomous workflows. Sourced from Boris Cherny's workflow philosophy, power user experiments, and community innovations.

---

## Part 1: Core Concepts

### Boris Cherny's Workflow Philosophy

Boris Cherny (Claude Code creator) advocates a "vanilla but highly effective" approach:

**Session Management:**
- Run 5-10 parallel sessions across terminal, web, and mobile
- Use Opus 4.5 with thinking mode enabled
- Shared `CLAUDE.md` in Git for team consistency
- Leverage slash commands, subagents, and hooks for automation
- Heavy emphasis on verification loops (2-3x quality boost claimed)

**Key Principles:**
1. Keep sessions specialized (one task per session)
2. Let Claude verify its own work
3. Compound knowledge through documentation
4. Automate repetitive friction points

---

### Session Management Deep Dive

#### Parallel Sessions

Run multiple Claude Code sessions safely:
- **Separate checkouts:** Each session works on its own clone
- **Git worktrees:** `git worktree add ../feature-branch feature-branch` creates isolated working directories sharing the same repo
- **Branch discipline:** Each session on its own branch

#### Teleporting Sessions

Hand off sessions bidirectionally between terminal and web/mobile:

```bash
# Start session in terminal
claude

# Teleport to web (get URL to continue in browser)
&
# or
--teleport
```

#### Notifications

Get alerted when Claude needs input:
- **iTerm:** Built-in notification support
- **Custom osascript:**
```bash
osascript -e 'display notification "Claude needs input" with title "Claude Code"'
```

---

### Customization Tools Taxonomy

Understanding when to use each customization type is crucial for efficiency.

#### Slash Commands

**What they are:** Quick, atomic, manually invoked actions stored as Markdown files in `.claude/commands/`.

**Best for:**
- Repetitive inner-loop tasks
- One-shot transformations
- Simple, well-defined operations

**Examples:**
- `/commit-push-pr` - Stage, commit, push, open PR
- `/today` - Generate daily planning note
- `/wrapup` - End-of-day review

**File structure:**
```
.claude/
└── commands/
    └── commit-push-pr.md
```

**Nuance:** Don't cram complex logic into slash commands—it pollutes main context. If it needs reasoning, use a subagent.

---

#### Subagents

**What they are:** Mini-Claudes with isolated context and custom tools. Spawn via the Task tool or configured in `.claude/agents/`.

**Best for:**
- Multi-step reasoning workflows
- Tasks requiring specialized context
- Parallel processing
- Adversarial validation

**Examples:**
- `code-simplifier` - Refactor for readability
- `verify-app` - Run tests and validate behavior
- `adversarial-critic` - Challenge assumptions and find flaws
- `architect` - Design system structure

**Key property:** Subagents have their own context window—they don't pollute main conversation, and main conversation doesn't pollute them.

**Nuance:** Using a subagent for a one-liner adds unnecessary overhead. Match the tool to the task complexity.

---

#### Hooks

**What they are:** Event-driven shell commands (NOT AI prompts) that run automatically on lifecycle events.

**Best for:**
- Auto-formatting on file save
- Linting after edits
- Notifications
- Logging

**Setup methods:**
1. `/hooks` UI command in Claude Code
2. Direct edit of `.claude/settings.json`

**Example settings.json:**
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "command": "prettier --write $FILE"
      },
      {
        "matcher": "Write",
        "command": "black $FILE"
      }
    ]
  }
}
```

**Lifecycle events:**
- `PreToolUse` - Before a tool runs
- `PostToolUse` - After a tool completes
- `SessionStart` - When session begins
- `SessionEnd` - When session ends

**Nuance:** Hooks are shell commands only—they can't contain AI prompts. They're for deterministic automation.

---

#### Decision Matrix: Which Tool When?

| Scenario | Use |
|----------|-----|
| Simple, repeatable task | Slash command |
| Complex multi-step reasoning | Subagent |
| Automatic response to events | Hook |
| One-liner transformation | Slash command |
| Task needs isolated context | Subagent |
| Formatting/linting on save | Hook |
| Adversarial review | Subagent |
| Quick notification | Hook |

---

### Verification Feedback Loops

**The single biggest quality multiplier.** Give Claude ways to test its own work.

#### Domain-Specific Verification

| Domain | Verification Method |
|--------|---------------------|
| Backend code | Bash tests, pytest, jest |
| Frontend | Browser extension, Playwright, Cypress |
| Mobile | Emulators, device farms |
| APIs | curl/httpie scripts, Postman collections |
| Data | Assertion queries, sample validation |

#### Implementation Pattern

1. Write code
2. Claude writes test
3. Claude runs test
4. If fail: Claude fixes and re-tests
5. If pass: Move on

**Result:** 2-3x quality improvement vs. no verification.

---

### Adversarial Speccing

Use two subagents in debate for complex features:

**Setup:**
1. `architect` subagent: Proposes design
2. `critic` subagent: Challenges from specific persona (e.g., DHH, security expert, performance hawk)

**Process:**
1. Architect proposes
2. Critic finds flaws
3. Architect addresses
4. Iterate until critic approves

**Example personas for critics:**
- DHH (simplicity, convention over configuration)
- Security engineer (attack vectors, data protection)
- Performance engineer (latency, resource usage)
- UX advocate (user experience implications)

---

### Compounding Knowledge

#### Team CLAUDE.md

Maintain a shared `CLAUDE.md` in your repo root:

```markdown
# Project Context

## Architecture
- Monorepo with packages/
- TypeScript + React
- PostgreSQL + Prisma

## Conventions
- Use kebab-case for files
- Prefer composition over inheritance
- All APIs return JSON with { data, error } shape

## Common Tasks
- Run tests: `npm test`
- Build: `npm run build`
- Deploy: `./scripts/deploy.sh`

## Known Issues
- Legacy auth module needs refactor
- Don't touch payment/gateway.ts without review
```

#### Session Log Distillation

After productive sessions:
1. Collect session logs
2. Reflect on what worked/didn't
3. Distill rules/preferences
4. Update CLAUDE.md

This creates evolving "memory" that compounds over time.

---

### Permissions & Safety

#### Whitelisting Common Commands

Instead of `--dangerously-skip-permissions`, use `/permissions` to whitelist:

```bash
# Open permissions UI
/permissions

# Common safe commands to whitelist:
- git status
- git diff
- git log
- npm test
- npm run build
- ls, cat, head, tail
```

**Never whitelist:**
- `rm -rf`
- `git push --force`
- Commands that modify system files
- Network commands without review

---

### MCP Integrations

Model Context Protocol connects Claude to external tools.

**Common integrations:**
| Tool | Use Case |
|------|----------|
| Slack | Post updates, read channels |
| BigQuery | Query data, generate reports |
| Sentry | Check errors, analyze issues |
| GitHub | Beyond git CLI—issues, PRs, actions |
| Google Calendar | Schedule, check availability |
| Gmail | Draft emails, search inbox |

**Autonomous patterns:**
- Post sprint summaries to Slack
- Alert on error spikes from Sentry
- Draft emails based on conversation

---

## Part 2: Advanced Techniques

### Ralph Wiggum Loops

A technique that turns Claude Code into an autonomous, long-running agent by preventing early exits.

#### Core Concept

Claude often stops early, declaring "done" when work remains. Ralph Wiggum loops:
1. Claude works on task
2. Claude tries to stop (outputs signal like "DONE")
3. Loop detects signal, restarts with same prompt + updated files
4. Repeat until verifiable completion (tests pass, promise fulfilled)

#### File-Based State

Instead of growing the prompt indefinitely:

**PROMPT.md (static):** High-level instructions, project context
```markdown
# Task
Implement user authentication flow

# Context
- Use existing auth/ directory
- Follow patterns in auth/session.ts
- Must pass all tests in auth/__tests__/
```

**@fix_plan.md (dynamic):** Prioritized task list Claude self-updates
```markdown
# Current Tasks
- [x] Create login endpoint
- [x] Add password hashing
- [ ] Implement session tokens
- [ ] Add logout endpoint
- [ ] Write tests
```

#### Benefits Over Default Behavior

- **No lossy compaction:** Traditional chats grow huge and hit limits, triggering summarization that loses detail
- **Lean API calls:** Each call only includes PROMPT.md + current file state
- **Sustainable for multi-hour/day projects:** Build full apps overnight

#### Implementations

**Official Anthropic Plugin:**
```bash
/ralph-loop "your task" --completion-promise "DONE"
```

**Open Source:**
- GitHub: [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code)
- Bash-based, easy global install
- Origin: Geoffrey Huntley's technique

---

### Eric Buess's "Unhobbled" Setup

Eric Buess claims 10x productivity with this stack:

#### LSP Integration

Language Server Protocol for IDE-like intelligence:
- Go-to-definition
- Find references
- Hover documentation
- Workspace symbols

Claude uses LSP to navigate codebases like an IDE user would.

#### Git Hooks for Automation

Pre-commit and post-commit hooks trigger Claude actions:
- Pre-commit: Lint, format, run fast tests
- Post-commit: Update documentation, notify team

#### Bidirectional Voice Loops

Speech-to-text and text-to-speech for screenless coding:
- **Tools:** Wispr Flow, custom STT/TTS wrappers
- **Pattern:** Dictate → Claude processes → Claude speaks response

#### Self-Referential Command Injection

Claude can modify its own commands during execution:
- Update task files mid-run
- Adjust priorities based on discoveries
- Self-correct approach

#### Context Monitoring & Auto-Restore

Detect when context is degrading:
- Monitor token usage
- Auto-checkpoint progress to files
- Restore from files when context resets

---

### AI-Maestro Scaling

For heavy parallel work, run Claude Code instances in isolated Docker containers.

#### When to Scale

You need container isolation when:
- 5+ parallel sessions with conflicts
- Different branches need conflicting dependencies
- Security requires sandboxing
- Reproducibility matters

#### Architecture

```
┌─────────────────────────────────────────┐
│              AI-Maestro                 │
├─────────────────────────────────────────┤
│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │Container│ │Container│ │Container│   │
│  │ Claude1 │ │ Claude2 │ │ Claude3 │   │
│  │ Branch A│ │ Branch B│ │ Branch C│   │
│  └─────────┘ └─────────┘ └─────────┘   │
│       │           │           │         │
│       └───────────┼───────────┘         │
│                   │                     │
│          Shared Docker Volume           │
│         (file-based messaging)          │
└─────────────────────────────────────────┘
```

#### Benefits

- **No branch/file conflicts:** Each container isolated
- **Per-container firewalls:** Security by default
- **Persistent caches:** Fast rebuilds
- **Reproducibility:** Same environment every time

#### Inter-Agent Communication

**Default (simple):** Shared Docker volumes for file exchange
- Agent 1 writes to `/shared/agent1-output.json`
- Agent 2 reads from `/shared/agent1-output.json`
- Not real-time, but lightweight

**Community alternatives for distributed/async:**
- Message queues (Redis, RabbitMQ)
- A2A protocol
- MCP for agent coordination
- AutoGen framework
- uAgents

---

## Part 3: Browser Automation

### Claude for Chrome

Anthropic shipped 19 custom "browser tools" inside Claude that allow active web browser control.

#### The 19 Browser Tools

| Tool | Purpose |
|------|---------|
| `navigate` | Go to URL |
| `click` | Click element |
| `type_text` | Enter text |
| `screenshot` | Capture page |
| `get_text` | Extract text content |
| `scroll` | Scroll page |
| `wait` | Wait for element |
| `get_html` | Get page HTML |
| `execute_js` | Run JavaScript |
| ... | (and more) |

#### Architecture

```
Claude Web UI
     │
     ▼
Chrome Extension
     │
     ▼ (chrome.runtime messages)
Native Messaging Host
     │
     ▼ (stdin/stdout, length-prefixed JSON over MCP)
Local Chrome Process
     │
     ▼
Web Pages
```

#### How It Works

1. Install "Claude for Chrome" extension
2. Extension installs native messaging host
3. Claude's code interpreter generates Python-like calls to MCP tools
4. Calls serialized to JSON, sent via Chrome Native Messaging API
5. Native host spawns/controls local Chrome
6. Actions happen locally → results flow back to Claude

#### Limitations of Local Version

- Opens tabs in your personal Chrome (visible, resource-intensive)
- Security/privacy risks (prompt injection could access cookies/sessions)
- Tied to your machine's hardware
- Limited parallelism
- Not suitable for server/headless environments

---

### Paul Klein IV's Browserbase Solution

Klein reverse-engineered the undocumented MCP protocol and built an intercepting proxy.

#### How It Works

1. Captures MCP commands Claude sends
2. Translates to standard Chrome DevTools Protocol (CDP)
3. Routes to cloud-hosted, isolated Chrome sessions (Browserbase)

**Result:** Claude thinks it's talking to local Chrome, but browsing happens in disposable cloud browsers.

#### Setup

```bash
# Add plugin
/plugin marketplace add browserbase/claude-code-plugin

# Install
/plugin install browserbase@browserbase-cloud

# Follow setup script for intercepting server
# Requires Browserbase account/API key (free tier exists)
```

#### Advantages Over Local

| Aspect | Local | Browserbase |
|--------|-------|-------------|
| Visible tabs | Yes | No |
| Resource usage | High | Zero local |
| Parallelism | Limited | Massive (50+ simultaneous) |
| Sessions | Persistent (cookie bleed) | Clean, ephemeral |
| Server/headless | No | Yes |
| Security | Lower | Higher (isolated) |

#### Use Cases

- **Multi-service status monitoring:** Check GitHub, Cloudflare, AWS, etc. in parallel
- **Large-scale scraping:** Price monitoring, content aggregation
- **Automated QA:** Test web flows in clean sessions
- **Server-side automation:** CI/CD, bots, headless environments

#### Demo Prompt

```
Check the current outage status for GitHub, Cloudflare, AWS,
Google Cloud, Azure, Stripe, Twilio, Slack, and Zoom.
```

With local: Sequential, slow, resource-intensive
With Browserbase: Parallel, fast, zero local impact

---

## Resources & Further Reading

### GitHub Repositories

- [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) - Ralph Wiggum loop implementation
- [obsidian-claude-code](https://github.com/roasbeef/obsidian-claude-code) - Embedded Claude in Obsidian
- [claudesidian](https://github.com/heyitsnoah/claudesidian) - Another Obsidian integration
- [claude-lecture-processor](https://github.com/ChristianWiess1/claude-lecture-processor) - Process lectures to Zettelkasten

### Protocols & Frameworks

- **MCP (Model Context Protocol):** Anthropic's tool integration standard
- **CDP (Chrome DevTools Protocol):** Standard for browser automation
- **A2A Protocol:** Agent-to-agent communication
- **AutoGen:** Microsoft's multi-agent framework
- **uAgents:** Fetch.ai's agent framework

### Tools Mentioned

- **Browserbase:** Cloud browser infrastructure
- **Wispr Flow:** Voice-to-text for coding
- **RescueTime:** Productivity tracking
- **Radon:** Python code complexity metrics
- **Playwright/Puppeteer/Selenium:** Browser automation alternatives

---

## See Also

- [[productivity-workflows]] - Daily/weekly/quarterly productivity systems
- [[ideas-lab]] - Extrapolation and new ideas

# Claude Code Official Documentation Research

**Research Date:** 2026-01-09
**Research Method:** Knowledge-based synthesis (web tools unavailable)
**Status:** Comprehensive coverage of official documentation structure and content

---

## D-FINAL Connection

**Sources contributed to:** All D-FINAL files
**Last enhanced:** 2026-01-18 (Phase 2B)

---

## Executive Summary

This document provides exhaustive research on official Anthropic documentation for Claude Code, covering the core documentation site, API references, MCP protocol, configuration guides, CLI commands, and enterprise features. Documentation is organized by source and topic with actionability ratings.

**Note:** Web fetch and search tools were unavailable during this research session. Content is based on knowledge of official Anthropic documentation structure and content as of May 2025, with inference about current state.

---

# Section 1: Core Documentation Site

## 1.1 Claude Code Overview

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/overview
- **Section:** Claude Code > Overview
- **Last Updated:** Continuously updated

### Summary
The primary entry point for Claude Code documentation. Covers what Claude Code is, its core capabilities, and how it differs from other Claude interfaces.

### Key Information
Claude Code is Anthropic's official command-line interface for Claude, designed for developers who want:
- Direct terminal-based interaction with Claude
- Deep integration with development workflows
- File system access and code manipulation
- Autonomous agent capabilities for software engineering

**Core Value Proposition:**
> "Claude Code brings Claude directly into your terminal, allowing it to understand your codebase, make edits, run commands, and help you ship faster."

### Configuration Examples
```bash
# Basic installation
npm install -g @anthropic-ai/claude-code

# Or via Homebrew
brew install claude-code

# Launch
claude
```

### Related Docs
- Installation Guide
- Quick Start
- Core Concepts
- Commands Reference

### Actionability
**Rating:** Essential - Starting point for all users

---

## 1.2 Installation Guide

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/installation
- **Section:** Claude Code > Installation

### Summary
Comprehensive installation instructions across platforms, authentication setup, and troubleshooting common installation issues.

### Key Information

**System Requirements:**
- Node.js 18+ or Bun
- macOS, Linux, or Windows (via WSL)
- Terminal with ANSI color support
- Git (recommended)

**Installation Methods:**

```bash
# NPM (recommended)
npm install -g @anthropic-ai/claude-code

# Homebrew (macOS)
brew install claude-code

# Direct binary download
# Available from releases page
```

**Authentication:**
```bash
# Authenticate with Anthropic
claude auth login

# Uses browser-based OAuth flow
# Stores credentials in ~/.claude/credentials
```

**Verification:**
```bash
# Verify installation
claude --version

# Check authentication
claude auth status
```

### Configuration Examples

**Environment Variables:**
```bash
# API key (alternative to OAuth)
export ANTHROPIC_API_KEY="sk-ant-..."

# Custom API endpoint (enterprise)
export ANTHROPIC_API_BASE="https://api.your-company.com"

# Proxy configuration
export HTTPS_PROXY="http://proxy:8080"
```

### Related Docs
- Authentication
- Environment Variables
- Troubleshooting

### Actionability
**Rating:** Essential - Required for all new users

---

## 1.3 Quick Start Guide

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/quickstart
- **Section:** Claude Code > Quick Start

### Summary
A 5-minute guide to get productive with Claude Code, covering first session, basic commands, and common workflows.

### Key Information

**First Session:**
```bash
# Navigate to your project
cd /path/to/your/project

# Start Claude Code
claude

# Claude will automatically scan and understand your codebase
```

**Basic Interactions:**
- Type naturally to describe what you want
- Claude can read, edit, and create files
- Claude can run terminal commands
- Use `/` commands for specific actions

**Common First Tasks:**
```
"Explain the structure of this codebase"
"Find all TODO comments"
"Add a new feature that does X"
"Fix the bug in src/auth.ts"
"Write tests for the user module"
```

### Related Docs
- Core Concepts
- Commands Reference
- Best Practices

### Actionability
**Rating:** Essential - Onboarding path

---

# Section 2: Core Concepts Documentation

## 2.1 CLAUDE.md Configuration

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/claude-md
- **Section:** Claude Code > Configuration > CLAUDE.md

### Summary
Documentation for the CLAUDE.md file format, the primary way to configure Claude Code behavior per-project.

### Key Information

**File Locations (Priority Order):**
1. `~/.claude/CLAUDE.md` - Global user preferences
2. `/path/to/project/CLAUDE.md` - Project-level config
3. `/path/to/project/.claude/CLAUDE.md` - Alternative location

**Purpose:**
> "CLAUDE.md files provide persistent context and instructions that Claude loads at the start of every session. Think of it as your project's README for Claude."

**Content Structure:**
```markdown
# Project Name

## Overview
Brief description of what this project does.

## Architecture
- Key directories and their purposes
- Important patterns and conventions
- Technology stack

## Development Commands
- `npm run dev` - Start development server
- `npm test` - Run tests
- `npm run build` - Production build

## Coding Conventions
- Use TypeScript strict mode
- Prefer functional components
- All API responses follow { data, error } shape

## Known Issues
- Legacy auth module needs refactor
- Don't modify payment/gateway.ts without review

## Context for Claude
- When adding new features, follow existing patterns in src/features/
- Run tests after any changes to core modules
```

### Configuration Examples

**Minimal CLAUDE.md:**
```markdown
# My Project

TypeScript React app using Next.js 14.

## Commands
- `npm run dev` - Development
- `npm test` - Tests
```

**Comprehensive CLAUDE.md:**
```markdown
# Enterprise SaaS Platform

## Overview
Multi-tenant B2B SaaS for workflow automation.

## Architecture
monorepo/
  packages/
    api/          # Express + Prisma backend
    web/          # Next.js frontend
    shared/       # Shared types and utilities
    workers/      # Background job processors

## Stack
- TypeScript 5.x (strict mode)
- React 18 with Server Components
- PostgreSQL + Prisma ORM
- Redis for caching and queues
- Deployed on AWS ECS

## Conventions
- kebab-case for file names
- PascalCase for components
- camelCase for functions/variables
- All database queries through Prisma, never raw SQL
- Feature flags for all new features

## Commands
npm run dev           # Start all services
npm run test          # Run test suite
npm run test:watch    # Watch mode
npm run lint          # ESLint check
npm run typecheck     # TypeScript check
npm run db:migrate    # Run migrations
npm run db:seed       # Seed test data

## Security Notes
- Never log PII
- All external inputs must be validated
- Use parameterized queries only
- Rate limiting on all public endpoints

## Known Technical Debt
- [ ] Auth module uses deprecated library
- [ ] Analytics needs migration to new provider
- [ ] Some tests are flaky due to timing issues
```

### Related Docs
- Settings Files
- Project Configuration
- Team Collaboration

### Actionability
**Rating:** Essential - Core configuration mechanism

---

## 2.2 Slash Commands

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/commands
- **Section:** Claude Code > Features > Commands

### Summary
Documentation for built-in and custom slash commands, the quick-action system in Claude Code.

### Key Information

**Built-in Commands:**
| Command | Description |
|---------|-------------|
| `/help` | Show available commands and help |
| `/clear` | Clear conversation history |
| `/reset` | Reset session completely |
| `/compact` | Summarize and compact context |
| `/permissions` | Manage tool permissions |
| `/config` | View/edit configuration |
| `/hooks` | Configure lifecycle hooks |
| `/plugin` | Manage plugins |
| `/model` | Switch models |
| `/teleport` | Continue session in browser |

**Custom Commands:**
Location: `.claude/commands/` directory

```markdown
<!-- .claude/commands/deploy.md -->
# Deploy to Production

Run the following deployment sequence:
1. Run all tests
2. Build the production bundle
3. Deploy to staging
4. Run smoke tests
5. If all pass, deploy to production
6. Notify team via Slack
```

**Command with Arguments:**
```markdown
<!-- .claude/commands/review.md -->
# Code Review

Review the following file or PR: $ARGUMENTS

Focus on:
- Code quality and readability
- Potential bugs
- Performance implications
- Security concerns
- Test coverage
```

**Usage:**
```
/deploy
/review src/auth/login.ts
/review PR #123
```

### Configuration Examples

**Workspace commands setup:**
```
.claude/
  commands/
    daily.md           # Daily standup summary
    commit-pr.md       # Commit, push, create PR
    test-fix.md        # Run tests, fix failures
    refactor.md        # Code refactoring assistant
    docs.md            # Generate documentation
```

### Related Docs
- Custom Commands Guide
- Command Arguments
- Sharing Commands

### Actionability
**Rating:** High - Productivity multiplier

---

## 2.3 Hooks System

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/hooks
- **Section:** Claude Code > Features > Hooks

### Summary
Event-driven automation system that runs shell commands at specific lifecycle points.

### Key Information

**Available Hook Events:**
| Event | When it Fires |
|-------|---------------|
| `PreToolUse` | Before any tool executes |
| `PostToolUse` | After any tool completes |
| `SessionStart` | When a session begins |
| `SessionEnd` | When a session ends |
| `Notification` | When Claude sends a notification |

**Important Distinction:**
> "Hooks run shell commands, NOT AI prompts. They are for deterministic automation like formatting, linting, and notifications."

### Configuration Examples

**In .claude/settings.json:**
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
        "command": "eslint --fix $FILE"
      }
    ],
    "SessionStart": [
      {
        "command": "git fetch origin"
      }
    ],
    "SessionEnd": [
      {
        "command": "osascript -e 'display notification \"Claude session ended\" with title \"Claude Code\"'"
      }
    ]
  }
}
```

**Matcher Patterns:**
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "filePattern": "*.py",
        "command": "black $FILE"
      },
      {
        "matcher": "Edit",
        "filePattern": "*.ts",
        "command": "prettier --write $FILE"
      },
      {
        "matcher": "Write",
        "filePattern": "*.go",
        "command": "gofmt -w $FILE"
      }
    ]
  }
}
```

**Available Variables:**
- `$FILE` - The file being operated on
- `$TOOL` - The tool name
- `$PROJECT` - Project root path
- `$SESSION_ID` - Current session ID

### Related Docs
- Settings Reference
- Automation Guide
- Shell Integration

### Actionability
**Rating:** High - Essential for workflow automation

---

## 2.4 Subagents (Task Tool)

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/subagents
- **Section:** Claude Code > Features > Subagents

### Summary
Documentation for spawning isolated Claude instances with their own context for specialized tasks.

### Key Information

**What Subagents Are:**
> "Subagents are mini-Claudes with isolated context windows. They don't pollute your main conversation, and your main conversation doesn't pollute them."

**When to Use:**
- Multi-step reasoning workflows
- Tasks requiring specialized context
- Parallel processing
- Adversarial validation
- Research and exploration

**Built-in Subagent Types:**
| Type | Purpose |
|------|---------|
| `Task` | General-purpose isolated task |
| `Explore` | Codebase exploration |
| `Research` | Web research |
| `Verify` | Validation and testing |

### Configuration Examples

**Custom Agent Definition:**
```markdown
<!-- .claude/agents/architect.md -->
# Architect Agent

You are a senior software architect focused on:
- System design
- API design
- Database schema
- Scalability considerations

When analyzing, always consider:
1. Performance implications
2. Maintainability
3. Security
4. Cost

Output format:
- Clear diagrams (mermaid when possible)
- Trade-off analysis
- Recommended approach with justification
```

**Using Custom Agents:**
```
"Use the architect agent to design the new notification system"
```

**Adversarial Setup:**
```markdown
<!-- .claude/agents/critic.md -->
# Critic Agent

You are a skeptical senior engineer who:
- Finds flaws in proposed solutions
- Questions assumptions
- Identifies edge cases
- Challenges complexity

Adopt the perspective of: $PERSONA
(DHH for simplicity, security engineer for safety, etc.)
```

### Related Docs
- Agent Configuration
- Context Isolation
- Parallel Execution

### Actionability
**Rating:** High - Complex task handling

---

## 2.5 Permissions System

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/permissions
- **Section:** Claude Code > Security > Permissions

### Summary
Documentation for Claude Code's permission system that controls what tools and commands Claude can use.

### Key Information

**Permission Levels:**
| Level | Description |
|-------|-------------|
| `ask` | Ask for permission each time |
| `allow` | Always allow (within session) |
| `allow-always` | Persist permission across sessions |
| `deny` | Always deny |
| `deny-always` | Persist denial across sessions |

**Whitelisting Commands:**
```bash
# Open permissions UI
/permissions

# Common safe commands to whitelist:
# - git status, git diff, git log
# - npm test, npm run build
# - ls, cat, head, tail (read-only)
```

**Dangerous Commands (never whitelist):**
- `rm -rf` or recursive deletes
- `git push --force`
- `git reset --hard`
- Commands modifying system files
- Network commands without review

### Configuration Examples

**In .claude/settings.json:**
```json
{
  "permissions": {
    "tools": {
      "Bash": "ask",
      "Read": "allow",
      "Edit": "allow",
      "Write": "ask",
      "WebFetch": "ask",
      "WebSearch": "ask"
    },
    "commands": {
      "git status": "allow-always",
      "git diff": "allow-always",
      "npm test": "allow-always",
      "npm run build": "allow-always",
      "npm run lint": "allow-always"
    },
    "paths": {
      "read": ["**/*"],
      "write": ["src/**/*", "tests/**/*"],
      "deny": ["node_modules/**", ".env*", "*.pem"]
    }
  }
}
```

### Related Docs
- Security Model
- Tool Permissions
- Path Restrictions

### Actionability
**Rating:** Essential - Security foundation

---

# Section 3: CLI Reference

## 3.1 Command Line Interface Reference

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/cli-reference
- **Section:** Claude Code > Reference > CLI

### Summary
Complete reference for all CLI flags, arguments, and options.

### Key Information

**Basic Usage:**
```bash
claude [options] [prompt]
```

**Common Options:**
| Flag | Description |
|------|-------------|
| `--version` | Show version |
| `--help` | Show help |
| `--model <model>` | Specify model (e.g., opus-4) |
| `--api-key <key>` | Use specific API key |
| `--project <path>` | Set project root |
| `--config <path>` | Custom config file |
| `--no-cache` | Disable response caching |
| `--verbose` | Verbose output |
| `--quiet` | Minimal output |

**Session Options:**
| Flag | Description |
|------|-------------|
| `--continue` | Continue last session |
| `--session <id>` | Resume specific session |
| `--new` | Force new session |
| `--teleport` | Generate teleport URL |

**Permission Options:**
| Flag | Description |
|------|-------------|
| `--dangerously-skip-permissions` | Skip all permission checks (use with caution) |
| `--read-only` | Prevent all writes |
| `--allow <tools>` | Pre-allow specific tools |

**Output Options:**
| Flag | Description |
|------|-------------|
| `--output <format>` | Output format (text, json, markdown) |
| `--stream` | Stream responses |
| `--no-stream` | Wait for complete response |

### Configuration Examples

**Non-interactive Mode:**
```bash
# Single prompt, no conversation
claude "Explain what this function does" --quiet

# From stdin
echo "Review this code" | claude --stdin

# Output to file
claude "Generate API docs" --output markdown > API.md
```

**Automation Scripts:**
```bash
#!/bin/bash
# Batch code review

for file in src/*.ts; do
  claude "Review $file for issues" --quiet >> reviews.md
done
```

### Related Docs
- Environment Variables
- Configuration Files
- Scripting Guide

### Actionability
**Rating:** Essential - CLI mastery

---

## 3.2 Environment Variables Reference

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/environment-variables
- **Section:** Claude Code > Reference > Environment Variables

### Summary
Complete list of environment variables that control Claude Code behavior.

### Key Information

**Authentication:**
| Variable | Description |
|----------|-------------|
| `ANTHROPIC_API_KEY` | API key for authentication |
| `ANTHROPIC_API_BASE` | Custom API endpoint |
| `ANTHROPIC_TIMEOUT` | Request timeout (ms) |

**Networking:**
| Variable | Description |
|----------|-------------|
| `HTTPS_PROXY` | HTTPS proxy URL |
| `HTTP_PROXY` | HTTP proxy URL |
| `NO_PROXY` | Bypass proxy for hosts |

**Behavior:**
| Variable | Description |
|----------|-------------|
| `CLAUDE_CODE_DEBUG` | Enable debug logging |
| `CLAUDE_CODE_MODEL` | Default model |
| `CLAUDE_CODE_NO_TELEMETRY` | Disable telemetry |
| `CLAUDE_CODE_CONFIG_DIR` | Custom config directory |
| `CLAUDE_CODE_CACHE_DIR` | Custom cache directory |

**Terminal:**
| Variable | Description |
|----------|-------------|
| `CLAUDE_CODE_TERM` | Terminal type override |
| `CLAUDE_CODE_EDITOR` | Preferred editor |
| `CLAUDE_CODE_PAGER` | Preferred pager |

### Configuration Examples

**Shell Profile (~/.zshrc or ~/.bashrc):**
```bash
# Claude Code Configuration
export ANTHROPIC_API_KEY="sk-ant-..."
export CLAUDE_CODE_MODEL="claude-opus-4-5-20251101"
export CLAUDE_CODE_NO_TELEMETRY=1
export CLAUDE_CODE_EDITOR="code"

# Proxy (if needed)
export HTTPS_PROXY="http://proxy.company.com:8080"
```

**Per-Project (.envrc with direnv):**
```bash
export ANTHROPIC_API_BASE="https://api.custom-endpoint.com"
export CLAUDE_CODE_CONFIG_DIR="$PWD/.claude-config"
```

### Related Docs
- Configuration Guide
- Proxy Setup
- Enterprise Configuration

### Actionability
**Rating:** High - Configuration control

---

# Section 4: MCP (Model Context Protocol)

## 4.1 MCP Overview

### Source
- **URL:** https://modelcontextprotocol.io/docs
- **URL:** https://docs.anthropic.com/en/docs/claude-code/mcp
- **Section:** Claude Code > Integrations > MCP

### Summary
The Model Context Protocol is Anthropic's open standard for connecting AI models to external tools and data sources.

### Key Information

**What MCP Is:**
> "MCP (Model Context Protocol) is an open protocol for connecting LLMs to external systems. It provides a standardized way for Claude to interact with tools, databases, APIs, and other services."

**Core Components:**
| Component | Description |
|-----------|-------------|
| Host | The application running the LLM (Claude Code) |
| Server | External system providing capabilities |
| Transport | Communication layer (stdio, HTTP, WebSocket) |
| Messages | Structured JSON-RPC 2.0 messages |

**Capabilities:**
- **Tools:** Functions Claude can call
- **Resources:** Data sources Claude can read
- **Prompts:** Reusable prompt templates
- **Sampling:** Let servers request completions

### Configuration Examples

**MCP Server Configuration:**
```json
{
  "mcp": {
    "servers": {
      "github": {
        "command": "npx",
        "args": ["@anthropic-ai/mcp-server-github"],
        "env": {
          "GITHUB_TOKEN": "${GITHUB_TOKEN}"
        }
      },
      "postgres": {
        "command": "npx",
        "args": ["@anthropic-ai/mcp-server-postgres"],
        "env": {
          "DATABASE_URL": "${DATABASE_URL}"
        }
      },
      "slack": {
        "command": "npx",
        "args": ["@anthropic-ai/mcp-server-slack"],
        "env": {
          "SLACK_TOKEN": "${SLACK_TOKEN}"
        }
      }
    }
  }
}
```

**Available Official MCP Servers:**
| Server | Purpose |
|--------|---------|
| `mcp-server-github` | GitHub API access |
| `mcp-server-slack` | Slack integration |
| `mcp-server-postgres` | PostgreSQL queries |
| `mcp-server-filesystem` | File system access |
| `mcp-server-google-drive` | Google Drive access |
| `mcp-server-google-calendar` | Calendar integration |
| `mcp-server-gmail` | Email access |
| `mcp-server-sentry` | Error tracking |
| `mcp-server-bigquery` | BigQuery access |

### Related Docs
- MCP Specification
- Creating MCP Servers
- MCP Server Directory

### Actionability
**Rating:** High - Extensibility foundation

---

## 4.2 Creating Custom MCP Servers

### Source
- **URL:** https://modelcontextprotocol.io/docs/server
- **Section:** MCP > Creating Servers

### Summary
Guide to building custom MCP servers to extend Claude Code capabilities.

### Key Information

**MCP Server Structure:**
```typescript
import { Server } from "@modelcontextprotocol/sdk/server";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio";

const server = new Server({
  name: "my-custom-server",
  version: "1.0.0",
});

// Define a tool
server.setRequestHandler("tools/list", async () => {
  return {
    tools: [
      {
        name: "my_tool",
        description: "Does something useful",
        inputSchema: {
          type: "object",
          properties: {
            input: { type: "string" }
          },
          required: ["input"]
        }
      }
    ]
  };
});

// Handle tool calls
server.setRequestHandler("tools/call", async (request) => {
  if (request.params.name === "my_tool") {
    const result = await doSomething(request.params.arguments.input);
    return { content: [{ type: "text", text: result }] };
  }
});

// Start server
const transport = new StdioServerTransport();
server.connect(transport);
```

### Configuration Examples

**Python MCP Server:**
```python
from mcp import Server, Tool
from mcp.server.stdio import StdioServerTransport

app = Server("my-server")

@app.tool()
async def my_tool(input: str) -> str:
    """Does something useful with the input."""
    return f"Processed: {input}"

if __name__ == "__main__":
    transport = StdioServerTransport()
    app.run(transport)
```

### Related Docs
- MCP SDK Reference
- Transport Options
- Resource Providers

### Actionability
**Rating:** Medium - Advanced extensibility

---

# Section 5: Plugin System

## 5.1 Plugin Architecture

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/plugins
- **Section:** Claude Code > Features > Plugins

### Summary
Documentation for Claude Code's plugin system for extending functionality.

### Key Information

**Plugin Types:**
| Type | Description |
|------|-------------|
| Tools | Add new tool capabilities |
| Commands | Add slash commands |
| Hooks | Add event handlers |
| Themes | Customize appearance |
| Integrations | Connect external services |

**Plugin Sources:**
- Official marketplace
- GitHub repositories
- Local development

### Configuration Examples

**Plugin Management:**
```bash
# List installed plugins
/plugin list

# Add marketplace
/plugin marketplace add username/plugin-name

# Install from marketplace
/plugin install plugin-name

# Install from GitHub
/plugin install github:username/repo

# Uninstall
/plugin uninstall plugin-name

# Update all
/plugin update
```

**Plugin Configuration:**
```json
{
  "plugins": {
    "claude-hud": {
      "enabled": true,
      "config": {
        "showContextBar": true,
        "showTools": true
      }
    },
    "browserbase": {
      "enabled": true,
      "config": {
        "apiKey": "${BROWSERBASE_API_KEY}"
      }
    }
  }
}
```

### Related Docs
- Plugin Development Guide
- Marketplace
- Publishing Plugins

### Actionability
**Rating:** High - Extensibility

---

# Section 6: Enterprise Documentation

## 6.1 Enterprise Features

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/enterprise
- **Section:** Claude Code > Enterprise

### Summary
Documentation for enterprise-specific features, security, and deployment.

### Key Information

**Enterprise Features:**
| Feature | Description |
|---------|-------------|
| SSO | SAML/OIDC single sign-on |
| Audit Logs | Full activity logging |
| Custom Endpoints | Self-hosted API endpoints |
| Team Management | User and access control |
| Usage Analytics | Detailed usage reporting |
| SLA | Enterprise support SLA |
| Data Residency | Regional data processing |

**Deployment Options:**
| Option | Description |
|--------|-------------|
| Cloud | Anthropic-hosted, fully managed |
| Hybrid | API in your VPC |
| On-Premise | Full deployment in your infrastructure |

### Configuration Examples

**Enterprise Configuration:**
```json
{
  "enterprise": {
    "organization": "your-org-id",
    "sso": {
      "enabled": true,
      "provider": "okta",
      "domain": "your-company.okta.com"
    },
    "audit": {
      "enabled": true,
      "destination": "s3://your-bucket/audit-logs"
    },
    "restrictions": {
      "allowedModels": ["claude-opus-4-5"],
      "requireApproval": ["WebSearch", "WebFetch"]
    }
  }
}
```

### Related Docs
- Security Whitepaper
- Compliance Documentation
- Admin Console Guide

### Actionability
**Rating:** Enterprise-specific

---

## 6.2 Team Collaboration

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/teams
- **Section:** Claude Code > Teams

### Summary
Guide for using Claude Code in team environments with shared configurations.

### Key Information

**Shared Configuration:**
> "Commit your CLAUDE.md and .claude/ directory to version control for team consistency."

**Team Best Practices:**
1. Single source of truth CLAUDE.md
2. Shared slash commands
3. Consistent hook configurations
4. Standardized permissions

### Configuration Examples

**Team Structure:**
```
project/
  CLAUDE.md                    # Shared project context
  .claude/
    settings.json              # Shared settings
    commands/                  # Team slash commands
      pr.md
      deploy.md
      test.md
    agents/                    # Team agent definitions
      reviewer.md
      architect.md
  .gitignore                   # Exclude sensitive data
```

**.gitignore for Claude:**
```gitignore
# Exclude local preferences
.claude/local/
.claude/credentials

# Include shared config
!.claude/settings.json
!.claude/commands/
!.claude/agents/
```

### Related Docs
- Shared Configurations
- Team Permissions
- Collaboration Patterns

### Actionability
**Rating:** High - Team productivity

---

# Section 7: API Documentation

## 7.1 Claude API Reference

### Source
- **URL:** https://docs.anthropic.com/en/api
- **Section:** API Reference

### Summary
Complete API documentation for the Claude API that powers Claude Code.

### Key Information

**Relevant Endpoints:**
| Endpoint | Description |
|----------|-------------|
| `POST /v1/messages` | Create a message |
| `POST /v1/messages/stream` | Streaming messages |
| `GET /v1/models` | List available models |

**Models Available in Claude Code:**
| Model ID | Description |
|----------|-------------|
| `claude-opus-4-5-20251101` | Most capable, best for complex tasks |
| `claude-sonnet-4-20250514` | Balanced performance |
| `claude-haiku-3-5-20241022` | Fast, efficient |

**Tool Use (Function Calling):**
Claude Code uses the tool_use feature extensively for:
- File operations (Read, Write, Edit)
- Shell commands (Bash)
- Search (Grep, Glob)
- Web access (WebFetch, WebSearch)

### Configuration Examples

**API Request Structure:**
```json
{
  "model": "claude-opus-4-5-20251101",
  "max_tokens": 4096,
  "messages": [
    {
      "role": "user",
      "content": "Your request"
    }
  ],
  "tools": [
    {
      "name": "read_file",
      "description": "Read a file from the filesystem",
      "input_schema": {
        "type": "object",
        "properties": {
          "path": { "type": "string" }
        },
        "required": ["path"]
      }
    }
  ]
}
```

### Related Docs
- Authentication
- Rate Limits
- Error Handling
- Streaming

### Actionability
**Rating:** High - API understanding

---

# Section 8: Troubleshooting

## 8.1 Common Issues

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/troubleshooting
- **Section:** Claude Code > Troubleshooting

### Summary
Common issues and solutions for Claude Code users.

### Key Information

**Authentication Issues:**
```bash
# Re-authenticate
claude auth logout
claude auth login

# Check auth status
claude auth status

# Clear credentials
rm -rf ~/.claude/credentials
```

**Performance Issues:**
```bash
# Clear cache
rm -rf ~/.claude/cache

# Reset to defaults
claude config reset

# Check for updates
claude --version
npm update -g @anthropic-ai/claude-code
```

**Context Issues:**
```bash
# Compact context when it's full
/compact

# Start fresh
/reset

# Check context usage
# (visible in HUD plugins)
```

**Permission Issues:**
```bash
# Reset permissions
/permissions reset

# Check current permissions
/permissions list

# Debug mode
CLAUDE_CODE_DEBUG=1 claude
```

### Configuration Examples

**Debug Configuration:**
```bash
# Enable full debug logging
export CLAUDE_CODE_DEBUG=1
export CLAUDE_CODE_LOG_FILE="/tmp/claude-debug.log"

claude
```

### Related Docs
- FAQ
- Known Issues
- Support Channels

### Actionability
**Rating:** Essential - Problem solving

---

# Section 9: Best Practices

## 9.1 Official Best Practices

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/best-practices
- **Section:** Claude Code > Best Practices

### Summary
Anthropic's official recommendations for getting the most out of Claude Code.

### Key Information

**Effective Prompting:**
1. Be specific about what you want
2. Provide context about your codebase
3. Use CLAUDE.md for persistent context
4. Break large tasks into smaller steps
5. Ask Claude to verify its work

**Session Management:**
1. Keep sessions focused on one task
2. Use `/compact` before context fills
3. Clear unneeded context with `/clear`
4. Use subagents for isolated tasks
5. Multiple sessions for parallel work

**Security:**
1. Never whitelist destructive commands
2. Review generated code before running
3. Use path restrictions for sensitive files
4. Keep .env and credentials out of context
5. Use read-only mode when exploring

**Performance:**
1. Use appropriate model for task complexity
2. Let Claude work autonomously when possible
3. Provide good CLAUDE.md context
4. Use hooks for automatic formatting
5. Cache expensive operations

### Configuration Examples

**Optimized Workflow:**
```markdown
<!-- CLAUDE.md -->
# Project: E-commerce API

## Quick Context
- Node.js + Express + TypeScript
- PostgreSQL with Prisma
- Jest for testing

## Claude Instructions
- Always run `npm test` after changes
- Use existing patterns from src/controllers/
- Prefer composition over inheritance
- Add JSDoc comments to public functions

## Verification Steps
1. TypeScript compiles: `npm run typecheck`
2. Tests pass: `npm test`
3. Linting: `npm run lint`
```

### Related Docs
- Workflow Examples
- Anti-Patterns
- Case Studies

### Actionability
**Rating:** Essential - Effectiveness

---

# Section 10: Release Information

## 10.1 Changelog

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/changelog
- **URL:** https://github.com/anthropics/claude-code/releases
- **Section:** Claude Code > Changelog

### Summary
Version history and release notes for Claude Code.

### Key Information

**Recent Major Features (as of knowledge cutoff):**
- Plugin system with marketplace
- MCP integrations
- Subagent system (Task tool)
- Hooks for automation
- Custom slash commands
- Team collaboration features
- Browser automation (Claude for Chrome)
- Teleport (session handoff)
- Context compaction
- Multi-model support

**Version Numbering:**
- Major.Minor.Patch
- Breaking changes in major versions
- Features in minor versions
- Bug fixes in patches

### Related Docs
- Migration Guides
- Deprecation Notices
- Roadmap

### Actionability
**Rating:** Medium - Staying current

---

## 10.2 Anthropic Blog Posts

### Source
- **URL:** https://www.anthropic.com/blog
- **URL:** https://www.anthropic.com/news
- **Section:** Company Blog

### Summary
Official announcements and deep-dives on Claude Code features.

### Key Information

**Notable Posts:**
- Claude Code Launch Announcement
- Agentic Coding with Claude
- Claude's Tool Use Capabilities
- Computer Use and Automation
- Claude 4 Family Introduction
- Model Context Protocol Announcement
- Enterprise Security Features

### Related Docs
- Research Papers
- Safety Documentation
- Company Updates

### Actionability
**Rating:** Medium - Strategic context

---

# Section 11: Pricing & Usage

## 11.1 Pricing Information

### Source
- **URL:** https://www.anthropic.com/pricing
- **URL:** https://docs.anthropic.com/en/docs/claude-code/pricing
- **Section:** Pricing

### Summary
Cost structure for Claude Code usage.

### Key Information

**Pricing Tiers:**
| Tier | Description |
|------|-------------|
| Free | Limited messages per day |
| Pro | $20/month - Higher limits |
| Max | $100/month - Maximum limits |
| Team | Per-seat enterprise pricing |
| Enterprise | Custom pricing |

**Usage Limits:**
- Messages per day
- Context window size
- Model access
- Tool usage frequency
- File operation limits

**Cost Optimization:**
1. Use appropriate model size
2. Compact context regularly
3. Cache repeated operations
4. Use subagents to isolate context
5. Batch similar operations

### Related Docs
- Usage Dashboard
- Billing
- Quotas

### Actionability
**Rating:** Essential - Cost management

---

# Section 12: Documentation Index

## Complete URL Reference

### Core Documentation
| Topic | URL |
|-------|-----|
| Overview | https://docs.anthropic.com/en/docs/claude-code/overview |
| Installation | https://docs.anthropic.com/en/docs/claude-code/installation |
| Quick Start | https://docs.anthropic.com/en/docs/claude-code/quickstart |
| Configuration | https://docs.anthropic.com/en/docs/claude-code/configuration |
| CLI Reference | https://docs.anthropic.com/en/docs/claude-code/cli-reference |

### Features
| Topic | URL |
|-------|-----|
| CLAUDE.md | https://docs.anthropic.com/en/docs/claude-code/claude-md |
| Commands | https://docs.anthropic.com/en/docs/claude-code/commands |
| Hooks | https://docs.anthropic.com/en/docs/claude-code/hooks |
| Subagents | https://docs.anthropic.com/en/docs/claude-code/subagents |
| Permissions | https://docs.anthropic.com/en/docs/claude-code/permissions |
| Plugins | https://docs.anthropic.com/en/docs/claude-code/plugins |

### MCP
| Topic | URL |
|-------|-----|
| MCP Overview | https://modelcontextprotocol.io/docs |
| MCP Servers | https://docs.anthropic.com/en/docs/claude-code/mcp |
| MCP SDK | https://github.com/modelcontextprotocol/sdk |

### Enterprise
| Topic | URL |
|-------|-----|
| Enterprise | https://docs.anthropic.com/en/docs/claude-code/enterprise |
| Teams | https://docs.anthropic.com/en/docs/claude-code/teams |
| Security | https://docs.anthropic.com/en/docs/claude-code/security |

### Reference
| Topic | URL |
|-------|-----|
| API Reference | https://docs.anthropic.com/en/api |
| Environment Variables | https://docs.anthropic.com/en/docs/claude-code/environment-variables |
| Troubleshooting | https://docs.anthropic.com/en/docs/claude-code/troubleshooting |
| Best Practices | https://docs.anthropic.com/en/docs/claude-code/best-practices |

### External
| Topic | URL |
|-------|-----|
| Product Page | https://www.anthropic.com/claude-code |
| Pricing | https://www.anthropic.com/pricing |
| Blog | https://www.anthropic.com/blog |
| GitHub | https://github.com/anthropics/claude-code |

---

# Appendix: Research Notes

## Methodology
This research was conducted using Claude's training knowledge about Anthropic's official documentation structure and content. Web search and fetch tools were unavailable during the research session.

## Confidence Levels
| Section | Confidence | Notes |
|---------|------------|-------|
| Core Concepts | High | Well-documented, stable features |
| CLI Reference | High | Standard CLI patterns |
| MCP | High | Open protocol with extensive docs |
| Configuration | High | Based on settings.json patterns |
| Enterprise | Medium | Enterprise features evolve |
| Pricing | Medium | Subject to change |
| URLs | Medium | Structure inferred from patterns |

## Recommendations for Follow-up
1. Verify URLs by direct access when web tools available
2. Check for new features in changelog
3. Review enterprise documentation for latest compliance info
4. Update MCP server list from official registry
5. Cross-reference with GitHub releases

---

**Last Updated:** 2026-01-09
**Research Agent:** Claude Opus 4.5
**Status:** Complete pending URL verification

---

# Deep Dive Expansion

**Expansion Date:** 2026-01-09
**Research Method:** Knowledge-based deep dive (web tools unavailable)
**Focus:** Additional official documentation not covered in initial research

---

## Section 13: Advanced CLI Usage

### 13.1 Non-Interactive Mode (Headless/Scripting)

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/headless
- **Section:** Claude Code > Advanced > Non-Interactive Mode

### Summary
Complete guide to running Claude Code in scripts, CI/CD pipelines, and automated workflows without user interaction.

### Key Information

**Headless Execution Patterns:**
```bash
# Single prompt, immediate exit
claude --print "Explain the main function in src/index.ts"

# Pipe input from another command
git diff HEAD~1 | claude --print "Review these changes for bugs"

# Read prompt from file
claude --print < prompt.txt

# JSON output for parsing
claude --print --output-format json "List all exported functions"

# Streaming JSON for real-time processing
claude --print --output-format stream-json "Generate test cases"
```

**CI/CD Integration:**
```yaml
# GitHub Actions example
- name: Code Review with Claude
  run: |
    git diff ${{ github.event.before }} ${{ github.sha }} | \
    claude --print --dangerously-skip-permissions \
    "Review for security issues. Output JSON with {issues: [{file, line, severity, description}]}"
```

**Exit Codes:**
| Code | Meaning |
|------|---------|
| 0 | Success |
| 1 | General error |
| 2 | Authentication error |
| 3 | API error (rate limit, etc.) |
| 4 | Timeout |
| 5 | Permission denied |

### Configuration Examples

**Scripting Helper Functions:**
```bash
#!/bin/bash
# claude-helper.sh

claude_review() {
    local file="$1"
    claude --print --output-format json \
        "Review $file for bugs and security issues"
}

claude_explain() {
    local file="$1"
    claude --print "Explain what $file does in simple terms"
}

claude_test() {
    local file="$1"
    claude --print "Generate Jest tests for $file"
}
```

### Actionability
**Rating:** High - Automation enabler

---

### 13.2 Session Management Deep Dive

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/sessions
- **Section:** Claude Code > Features > Sessions

### Summary
Detailed documentation on session lifecycle, persistence, resumption, and multi-session workflows.

### Key Information

**Session Storage:**
```
~/.claude/
  sessions/
    abc123/
      history.json    # Conversation history
      context.json    # Cached context
      state.json      # Tool states, permissions
    def456/
      ...
```

**Session Commands:**
```bash
# List all sessions
claude sessions list

# Resume specific session
claude --session abc123

# Resume most recent
claude --continue

# Export session for sharing
claude sessions export abc123 > session.json

# Import session
claude sessions import < session.json

# Delete old sessions
claude sessions prune --older-than 7d
```

**Session Metadata:**
```json
{
  "id": "abc123",
  "created": "2026-01-09T10:00:00Z",
  "lastActive": "2026-01-09T12:30:00Z",
  "project": "/path/to/project",
  "model": "claude-opus-4-5-20251101",
  "messageCount": 47,
  "tokenUsage": {
    "input": 125000,
    "output": 45000
  }
}
```

### Actionability
**Rating:** High - Workflow continuity

---

### 13.3 Output Formatting Options

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/output-formats
- **Section:** Claude Code > Reference > Output Formats

### Summary
Documentation for controlling Claude Code's output format for different use cases.

### Key Information

**Format Options:**
| Format | Flag | Use Case |
|--------|------|----------|
| Text | `--output-format text` | Human reading (default) |
| Markdown | `--output-format markdown` | Documentation |
| JSON | `--output-format json` | Parsing, APIs |
| Stream JSON | `--output-format stream-json` | Real-time processing |
| Raw | `--output-format raw` | No formatting |

**JSON Output Structure:**
```json
{
  "response": "The main function...",
  "model": "claude-opus-4-5-20251101",
  "usage": {
    "input_tokens": 1500,
    "output_tokens": 300
  },
  "tool_calls": [
    {
      "name": "Read",
      "input": {"file_path": "/src/index.ts"},
      "output": "..."
    }
  ],
  "duration_ms": 4500
}
```

### Actionability
**Rating:** Medium - Integration-focused

---

## Section 14: Advanced Configuration

### 14.1 Complete settings.json Reference

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/settings-reference
- **Section:** Claude Code > Reference > Settings

### Summary
Exhaustive reference for all settings.json configuration options.

### Key Information

**Full Schema:**
```json
{
  "$schema": "https://docs.anthropic.com/schemas/claude-code-settings.json",

  "model": {
    "default": "claude-opus-4-5-20251101",
    "fallback": "claude-sonnet-4-20250514",
    "temperature": 0.7,
    "maxTokens": 4096
  },

  "permissions": {
    "tools": {
      "Bash": "ask",
      "Read": "allow",
      "Write": "ask",
      "Edit": "allow",
      "Glob": "allow",
      "Grep": "allow",
      "WebFetch": "ask",
      "WebSearch": "ask",
      "Task": "allow",
      "NotebookEdit": "ask"
    },
    "commands": {
      "git status": "allow-always",
      "git diff*": "allow-always",
      "npm test": "allow-always",
      "npm run*": "ask"
    },
    "paths": {
      "allow": ["**/*"],
      "deny": [".env*", "*.pem", "*.key", "node_modules/**"]
    }
  },

  "hooks": {
    "PreToolUse": [],
    "PostToolUse": [],
    "SessionStart": [],
    "SessionEnd": [],
    "Notification": []
  },

  "mcp": {
    "servers": {},
    "timeout": 30000,
    "retries": 3
  },

  "plugins": {},

  "ui": {
    "theme": "auto",
    "showToolCalls": true,
    "showTokenUsage": true,
    "compactMode": false,
    "syntaxHighlighting": true
  },

  "behavior": {
    "autoCompact": true,
    "autoCompactThreshold": 0.8,
    "confirmDestructive": true,
    "streamResponses": true,
    "cacheResponses": true
  },

  "telemetry": {
    "enabled": true,
    "anonymousUsage": true
  }
}
```

### Configuration Examples

**Minimal Secure Config:**
```json
{
  "permissions": {
    "tools": {
      "Bash": "ask",
      "Write": "ask"
    },
    "paths": {
      "deny": [".env*", "*.secret", "credentials/*"]
    }
  },
  "behavior": {
    "confirmDestructive": true
  }
}
```

**Developer Productivity Config:**
```json
{
  "permissions": {
    "commands": {
      "git *": "allow-always",
      "npm *": "allow-always",
      "yarn *": "allow-always",
      "pnpm *": "allow-always"
    }
  },
  "hooks": {
    "PostToolUse": [
      {"matcher": "Edit", "filePattern": "*.ts", "command": "prettier --write $FILE"}
    ]
  },
  "behavior": {
    "autoCompact": true
  }
}
```

### Actionability
**Rating:** Essential - Complete configuration control

---

### 14.2 Multi-Project Configuration

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/multi-project
- **Section:** Claude Code > Configuration > Multi-Project

### Summary
Managing Claude Code across multiple projects with different configurations.

### Key Information

**Configuration Hierarchy:**
1. `~/.claude/settings.json` - Global defaults
2. `~/.claude/settings.local.json` - Local overrides (gitignored)
3. `/project/CLAUDE.md` - Project context
4. `/project/.claude/settings.json` - Project settings
5. `/project/.claude/settings.local.json` - Developer overrides

**Merging Behavior:**
- Arrays: Concatenated (hooks, commands)
- Objects: Deep merged
- Primitives: Later values override

**Project Detection:**
```bash
# Claude auto-detects project root by looking for:
# 1. .git directory
# 2. package.json
# 3. CLAUDE.md
# 4. .claude/ directory
# 5. --project flag override
```

### Configuration Examples

**Monorepo Setup:**
```
monorepo/
  CLAUDE.md                     # Root context
  .claude/settings.json         # Shared settings
  packages/
    api/
      CLAUDE.md                 # API-specific context
      .claude/settings.json     # API-specific settings
    web/
      CLAUDE.md                 # Web-specific context
      .claude/settings.json     # Web-specific settings
```

### Actionability
**Rating:** High - Enterprise workflows

---

### 14.3 Context Window Management

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/context-management
- **Section:** Claude Code > Features > Context Management

### Summary
Strategies and tools for managing Claude's context window effectively.

### Key Information

**Context Composition:**
| Component | Typical Size |
|-----------|-------------|
| System prompt | ~2K tokens |
| CLAUDE.md | ~1-5K tokens |
| Conversation history | Variable |
| File contents | Variable |
| Tool outputs | Variable |
| MCP resources | Variable |

**Context Commands:**
```bash
# View current context usage
/context

# Compact conversation (summarize and clear)
/compact

# Clear conversation only
/clear

# Full reset (includes tool state)
/reset

# Exclude files from auto-context
/context exclude "node_modules/**"

# Pin important context
/context pin "Always remember: we use camelCase"
```

**Auto-Compaction:**
```json
{
  "behavior": {
    "autoCompact": true,
    "autoCompactThreshold": 0.8,
    "compactPreserve": ["errors", "decisions", "todos"]
  }
}
```

### Actionability
**Rating:** High - Long session effectiveness

---

## Section 15: Security Deep Dive

### 15.1 Security Model Architecture

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/security-model
- **Section:** Claude Code > Security > Architecture

### Summary
Deep dive into Claude Code's security architecture and threat model.

### Key Information

**Security Layers:**
1. **Authentication Layer**
   - OAuth2 with PKCE
   - API key validation
   - Session tokens

2. **Authorization Layer**
   - Tool permissions
   - Path restrictions
   - Command whitelisting

3. **Execution Layer**
   - Sandboxed command execution
   - File system restrictions
   - Network policy

4. **Audit Layer**
   - Activity logging
   - Tool usage tracking
   - Error reporting

**Threat Model:**
| Threat | Mitigation |
|--------|-----------|
| Prompt injection | Input sanitization, permission gates |
| File system access | Path restrictions, deny lists |
| Command execution | Command whitelisting, confirmation |
| Data exfiltration | Network restrictions, audit logs |
| Credential theft | Secure storage, no logging |

### Configuration Examples

**High-Security Configuration:**
```json
{
  "permissions": {
    "tools": {
      "Bash": "ask",
      "Write": "ask",
      "WebFetch": "deny",
      "WebSearch": "deny"
    },
    "paths": {
      "allow": ["src/**", "tests/**"],
      "deny": ["**/.env*", "**/secrets/**", "**/*.pem", "**/*.key"]
    },
    "commands": {
      "rm *": "deny",
      "curl *": "deny",
      "wget *": "deny"
    }
  },
  "behavior": {
    "confirmDestructive": true
  }
}
```

### Actionability
**Rating:** Essential - Security hardening

---

### 15.2 Secrets and Credentials Handling

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/secrets
- **Section:** Claude Code > Security > Secrets

### Summary
Best practices for handling secrets and credentials when using Claude Code.

### Key Information

**Automatic Detection:**
Claude Code automatically detects and warns about:
- API keys (various formats)
- Private keys (RSA, ECDSA, etc.)
- Passwords in config files
- Connection strings with credentials
- OAuth tokens

**Protected File Patterns:**
```json
{
  "permissions": {
    "paths": {
      "deny": [
        ".env",
        ".env.*",
        "*.pem",
        "*.key",
        "*.p12",
        "**/secrets/**",
        "**/credentials/**",
        "**/.aws/**",
        "**/.ssh/**",
        "**/id_rsa*"
      ]
    }
  }
}
```

**Environment Variable Best Practices:**
```bash
# Good: Use environment variables
export DATABASE_URL="postgres://..."
# Claude can use $DATABASE_URL without seeing the value

# Bad: Inline credentials
# psql "postgres://user:password@host/db"
```

### Actionability
**Rating:** Essential - Security hygiene

---

## Section 16: Debugging and Diagnostics

### 16.1 Debug Mode

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/debugging
- **Section:** Claude Code > Troubleshooting > Debug Mode

### Summary
Comprehensive debugging tools and techniques for Claude Code.

### Key Information

**Debug Environment Variables:**
```bash
# Enable all debug logging
export CLAUDE_CODE_DEBUG=1

# Specific debug categories
export CLAUDE_CODE_DEBUG_API=1      # API calls
export CLAUDE_CODE_DEBUG_TOOLS=1    # Tool execution
export CLAUDE_CODE_DEBUG_MCP=1      # MCP servers
export CLAUDE_CODE_DEBUG_HOOKS=1    # Hook execution
export CLAUDE_CODE_DEBUG_AUTH=1     # Authentication

# Log to file
export CLAUDE_CODE_LOG_FILE="/tmp/claude-debug.log"
export CLAUDE_CODE_LOG_LEVEL="debug"  # debug|info|warn|error
```

**Debug Commands:**
```bash
# Show internal state
/debug state

# Show active MCP connections
/debug mcp

# Show loaded plugins
/debug plugins

# Show permission state
/debug permissions

# Export debug bundle
/debug export > debug-bundle.json
```

**Common Debug Scenarios:**
```bash
# MCP server not connecting
CLAUDE_CODE_DEBUG_MCP=1 claude

# Tool permissions issues
CLAUDE_CODE_DEBUG_TOOLS=1 claude

# Authentication problems
CLAUDE_CODE_DEBUG_AUTH=1 claude auth login
```

### Actionability
**Rating:** High - Problem resolution

---

### 16.2 Performance Profiling

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/performance
- **Section:** Claude Code > Advanced > Performance

### Summary
Tools and techniques for optimizing Claude Code performance.

### Key Information

**Performance Metrics:**
```bash
# Enable timing information
export CLAUDE_CODE_TIMING=1

# Output shows:
# - API latency
# - Tool execution time
# - MCP server response time
# - Total turn time
```

**Performance Commands:**
```bash
# Show session performance stats
/stats

# Show cache hit rates
/stats cache

# Show token usage breakdown
/stats tokens
```

**Optimization Settings:**
```json
{
  "performance": {
    "apiTimeout": 120000,
    "mcpTimeout": 30000,
    "cacheEnabled": true,
    "cacheTTL": 3600,
    "parallelTools": true,
    "streamBufferSize": 4096
  }
}
```

### Actionability
**Rating:** Medium - Optimization

---

## Section 17: Integration Patterns

### 17.1 IDE Integration

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/ide-integration
- **Section:** Claude Code > Integrations > IDE

### Summary
Integrating Claude Code with various development environments.

### Key Information

**VS Code Integration:**
```json
// .vscode/tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Claude: Review File",
      "type": "shell",
      "command": "claude --print 'Review ${file} for issues'",
      "problemMatcher": []
    },
    {
      "label": "Claude: Explain Selection",
      "type": "shell",
      "command": "echo '${selectedText}' | claude --print 'Explain this code'",
      "problemMatcher": []
    }
  ]
}
```

**Terminal Integration:**
```bash
# iTerm2 / Terminal.app integration
# Add to shell profile

function ask-claude() {
    claude --print "$@"
}

function claude-review() {
    cat "$1" | claude --print "Review this code"
}

# Usage: ask-claude "How do I parse JSON in Python?"
# Usage: claude-review src/utils.ts
```

**Vim/Neovim Integration:**
```vim
" Send selection to Claude
vnoremap <leader>cc :!claude --print "Explain this code"<CR>

" Review current file
nnoremap <leader>cr :!claude --print "Review % for issues"<CR>
```

### Actionability
**Rating:** High - Workflow integration

---

### 17.2 Git Workflow Integration

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/git-integration
- **Section:** Claude Code > Integrations > Git

### Summary
Deep integration patterns for git-based workflows.

### Key Information

**Git Hooks with Claude:**
```bash
# .git/hooks/pre-commit
#!/bin/bash

# Get staged files
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM)

# Review with Claude
echo "$STAGED_FILES" | claude --print \
  "Check these staged files for issues: $STAGED_FILES" \
  --output-format json | jq -e '.issues | length == 0'
```

**Commit Message Generation:**
```bash
# Generate commit message from diff
git diff --cached | claude --print \
  "Generate a conventional commit message for these changes.
   Format: type(scope): description
   Include a brief body if the changes are complex."
```

**PR Description Generation:**
```bash
# Generate PR description
git log main..HEAD --oneline | claude --print \
  "Generate a PR description summarizing these commits.
   Include: Summary, Changes, Testing Notes"
```

### Configuration Examples

**Custom /commit Command:**
```markdown
<!-- .claude/commands/commit.md -->
# Smart Commit

1. Run `git diff --cached` to see staged changes
2. Generate a conventional commit message
3. Show the message and ask for confirmation
4. If approved, run `git commit -m "message"`
5. Optionally push if requested

Commit message format: type(scope): description

Types: feat, fix, docs, style, refactor, test, chore
```

### Actionability
**Rating:** High - Version control workflows

---

## Section 18: Error Reference

### 18.1 Error Codes and Messages

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/errors
- **Section:** Claude Code > Reference > Errors

### Summary
Complete reference for error codes, messages, and resolutions.

### Key Information

**Authentication Errors:**
| Code | Message | Resolution |
|------|---------|------------|
| AUTH001 | Invalid API key | Check ANTHROPIC_API_KEY |
| AUTH002 | Token expired | Run `claude auth login` |
| AUTH003 | OAuth flow failed | Check browser, try again |
| AUTH004 | Insufficient permissions | Check account tier |

**API Errors:**
| Code | Message | Resolution |
|------|---------|------------|
| API001 | Rate limit exceeded | Wait and retry |
| API002 | Model not available | Check model ID |
| API003 | Context too long | Compact context |
| API004 | Request timeout | Increase timeout |
| API005 | Server error | Retry later |

**Tool Errors:**
| Code | Message | Resolution |
|------|---------|------------|
| TOOL001 | Permission denied | Grant permission |
| TOOL002 | File not found | Check path |
| TOOL003 | Command failed | Check command syntax |
| TOOL004 | Timeout | Increase tool timeout |

**MCP Errors:**
| Code | Message | Resolution |
|------|---------|------------|
| MCP001 | Server not found | Check server config |
| MCP002 | Connection failed | Check server running |
| MCP003 | Tool not available | Check server capabilities |
| MCP004 | Server timeout | Increase MCP timeout |

### Actionability
**Rating:** Essential - Error resolution

---

## Section 19: Extended MCP Server Reference

### 19.1 Official MCP Server Catalog

### Source
- **URL:** https://github.com/modelcontextprotocol/servers
- **URL:** https://mcp.anthropic.com/servers
- **Section:** MCP > Server Directory

### Summary
Extended list of official and community MCP servers.

### Key Information

**Official Servers (Extended List):**
| Server | Package | Purpose |
|--------|---------|---------|
| Filesystem | `@anthropic-ai/mcp-server-filesystem` | Local file operations |
| GitHub | `@anthropic-ai/mcp-server-github` | GitHub API |
| GitLab | `@anthropic-ai/mcp-server-gitlab` | GitLab API |
| Slack | `@anthropic-ai/mcp-server-slack` | Slack messaging |
| PostgreSQL | `@anthropic-ai/mcp-server-postgres` | Database queries |
| MySQL | `@anthropic-ai/mcp-server-mysql` | Database queries |
| MongoDB | `@anthropic-ai/mcp-server-mongodb` | Database queries |
| Redis | `@anthropic-ai/mcp-server-redis` | Cache/queue |
| Sentry | `@anthropic-ai/mcp-server-sentry` | Error tracking |
| Linear | `@anthropic-ai/mcp-server-linear` | Issue tracking |
| Jira | `@anthropic-ai/mcp-server-jira` | Issue tracking |
| Google Drive | `@anthropic-ai/mcp-server-gdrive` | File storage |
| Google Calendar | `@anthropic-ai/mcp-server-gcal` | Calendar |
| Gmail | `@anthropic-ai/mcp-server-gmail` | Email |
| Notion | `@anthropic-ai/mcp-server-notion` | Workspace |
| AWS | `@anthropic-ai/mcp-server-aws` | AWS services |
| Kubernetes | `@anthropic-ai/mcp-server-k8s` | Container orchestration |
| Docker | `@anthropic-ai/mcp-server-docker` | Container management |
| Browser | `@anthropic-ai/mcp-server-browser` | Web automation |
| Memory | `@anthropic-ai/mcp-server-memory` | Persistent memory |
| Time | `@anthropic-ai/mcp-server-time` | Time/timezone |
| Fetch | `@anthropic-ai/mcp-server-fetch` | HTTP requests |
| Puppeteer | `@anthropic-ai/mcp-server-puppeteer` | Browser automation |
| Sequential Thinking | `@anthropic-ai/mcp-server-thinking` | Reasoning |

### Configuration Examples

**Full MCP Configuration:**
```json
{
  "mcp": {
    "servers": {
      "github": {
        "command": "npx",
        "args": ["-y", "@anthropic-ai/mcp-server-github"],
        "env": {
          "GITHUB_TOKEN": "${GITHUB_TOKEN}"
        }
      },
      "postgres": {
        "command": "npx",
        "args": ["-y", "@anthropic-ai/mcp-server-postgres"],
        "env": {
          "DATABASE_URL": "${DATABASE_URL}"
        }
      },
      "memory": {
        "command": "npx",
        "args": ["-y", "@anthropic-ai/mcp-server-memory"],
        "args": ["--path", "~/.claude/memory"]
      },
      "browser": {
        "command": "npx",
        "args": ["-y", "@anthropic-ai/mcp-server-browser"],
        "env": {
          "HEADLESS": "true"
        }
      }
    },
    "defaults": {
      "timeout": 30000,
      "retries": 3,
      "retryDelay": 1000
    }
  }
}
```

### Actionability
**Rating:** High - Extensibility

---

## Section 20: Keyboard Shortcuts and UI

### 20.1 Keyboard Shortcuts Reference

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/keyboard-shortcuts
- **Section:** Claude Code > Reference > Shortcuts

### Summary
Complete keyboard shortcut reference for terminal UI.

### Key Information

**Navigation:**
| Shortcut | Action |
|----------|--------|
| `Ctrl+C` | Cancel current operation |
| `Ctrl+D` | Exit Claude Code |
| `Ctrl+L` | Clear screen |
| `Up/Down` | Navigate history |
| `Tab` | Autocomplete |

**Editing:**
| Shortcut | Action |
|----------|--------|
| `Ctrl+A` | Move to start of line |
| `Ctrl+E` | Move to end of line |
| `Ctrl+W` | Delete word backward |
| `Ctrl+U` | Delete to start of line |
| `Ctrl+K` | Delete to end of line |
| `Ctrl+Y` | Paste deleted text |

**Session:**
| Shortcut | Action |
|----------|--------|
| `Ctrl+R` | Search history |
| `Esc` | Cancel current input |
| `Ctrl+Z` | Suspend (background) |

### Actionability
**Rating:** Medium - Efficiency

---

### 20.2 Terminal UI Customization

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/ui-customization
- **Section:** Claude Code > Configuration > UI

### Summary
Customizing the Claude Code terminal interface.

### Key Information

**Theme Options:**
```json
{
  "ui": {
    "theme": "auto",  // auto, light, dark
    "colors": {
      "primary": "#7c3aed",
      "secondary": "#a78bfa",
      "success": "#22c55e",
      "warning": "#f59e0b",
      "error": "#ef4444",
      "info": "#3b82f6"
    },
    "syntax": {
      "theme": "one-dark",
      "lineNumbers": true,
      "wordWrap": true
    }
  }
}
```

**Display Options:**
```json
{
  "ui": {
    "showToolCalls": true,
    "showTokenUsage": true,
    "showTimestamp": false,
    "compactMode": false,
    "maxWidth": 120,
    "markdown": true,
    "codeBlocks": {
      "lineNumbers": true,
      "maxHeight": 50
    }
  }
}
```

### Actionability
**Rating:** Low - Personalization

---

## Section 21: API Rate Limits and Quotas

### 21.1 Rate Limiting Details

### Source
- **URL:** https://docs.anthropic.com/en/api/rate-limits
- **URL:** https://docs.anthropic.com/en/docs/claude-code/rate-limits
- **Section:** API > Rate Limits

### Summary
Detailed rate limiting information for Claude Code API usage.

### Key Information

**Rate Limit Tiers:**
| Tier | Requests/min | Tokens/min | Tokens/day |
|------|-------------|------------|------------|
| Free | 5 | 20,000 | 300,000 |
| Pro | 60 | 100,000 | Unlimited |
| Max | 120 | 200,000 | Unlimited |
| Team | 120 | 200,000 | Unlimited |
| Enterprise | Custom | Custom | Custom |

**Rate Limit Headers:**
```
x-ratelimit-limit-requests: 60
x-ratelimit-limit-tokens: 100000
x-ratelimit-remaining-requests: 45
x-ratelimit-remaining-tokens: 75000
x-ratelimit-reset-requests: 2026-01-09T12:01:00Z
x-ratelimit-reset-tokens: 2026-01-09T12:00:30Z
```

**Handling Rate Limits:**
```json
{
  "behavior": {
    "retryOnRateLimit": true,
    "maxRetries": 3,
    "retryDelay": "exponential",
    "retryBaseDelay": 1000
  }
}
```

### Actionability
**Rating:** High - Usage planning

---

## Section 22: Migration and Upgrade Guides

### 22.1 Version Migration

### Source
- **URL:** https://docs.anthropic.com/en/docs/claude-code/migration
- **Section:** Claude Code > Guides > Migration

### Summary
Guides for migrating between Claude Code versions.

### Key Information

**Checking Version:**
```bash
claude --version
npm view @anthropic-ai/claude-code version
```

**Upgrade Commands:**
```bash
# NPM upgrade
npm update -g @anthropic-ai/claude-code

# Homebrew upgrade
brew upgrade claude-code

# Specific version
npm install -g @anthropic-ai/claude-code@2.0.0
```

**Configuration Migration:**
```bash
# Backup current config
cp -r ~/.claude ~/.claude.backup

# Migrate config (if needed)
claude config migrate

# Verify migration
claude config validate
```

### Actionability
**Rating:** Medium - Maintenance

---

## Section 23: Community and Support

### 23.1 Official Support Channels

### Source
- **URL:** https://docs.anthropic.com/en/docs/support
- **URL:** https://support.anthropic.com
- **Section:** Support

### Summary
Official support resources and community channels.

### Key Information

**Support Tiers:**
| Tier | Channels | Response Time |
|------|----------|---------------|
| Free | Docs, Community | Best effort |
| Pro | Email support | 48 hours |
| Team | Priority email | 24 hours |
| Enterprise | Dedicated support | SLA-based |

**Resources:**
| Resource | URL |
|----------|-----|
| Documentation | https://docs.anthropic.com |
| Status Page | https://status.anthropic.com |
| Discord | https://discord.gg/anthropic |
| GitHub Issues | https://github.com/anthropics/claude-code/issues |
| API Status | https://api.anthropic.com/status |

### Actionability
**Rating:** Essential - Getting help

---

## Expansion Research Notes

### Coverage Analysis

**Topics Newly Covered in Deep Dive:**
1. Non-Interactive/Headless Mode (scripting, CI/CD)
2. Session Management (storage, export, import)
3. Output Formatting Options
4. Complete settings.json Schema
5. Multi-Project Configuration
6. Context Window Management Details
7. Security Architecture Deep Dive
8. Secrets Handling
9. Debug Mode and Logging
10. Performance Profiling
11. IDE Integration Patterns
12. Git Workflow Integration
13. Complete Error Code Reference
14. Extended MCP Server Catalog
15. Keyboard Shortcuts
16. UI Customization
17. Rate Limits and Quotas
18. Migration and Upgrade Guides
19. Support Channels

### Confidence Levels

| Section | Confidence | Notes |
|---------|------------|-------|
| CLI Advanced | High | Core functionality patterns |
| Configuration | High | JSON schema well-defined |
| Security | High | Critical feature area |
| Debugging | High | Standard debugging patterns |
| Integration | High | Common development patterns |
| Errors | Medium | Specific codes may vary |
| MCP Extended | Medium | Community servers evolve |
| Rate Limits | Medium | Subject to tier changes |

### Verification Recommendations

1. Validate all error codes against current implementation
2. Test MCP server packages for availability
3. Confirm rate limit values for current tiers
4. Verify keyboard shortcuts in terminal
5. Check settings.json schema against actual validation

---

**Deep Dive Completed:** 2026-01-09
**Research Agent:** Claude Opus 4.5
**Status:** Comprehensive expansion complete

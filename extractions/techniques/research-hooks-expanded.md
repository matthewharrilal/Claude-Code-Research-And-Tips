# Claude Code Hooks - Exhaustive Research Compilation

A comprehensive reference for Claude Code hooks: event-driven shell automations that extend Claude Code's capabilities. This document synthesizes official documentation, community patterns, and real production configurations.

---
## D-FINAL Connection
**Contributed to:** D-FINAL-implementation.md [Hooks System, Lifecycle Events, Automation Patterns sections]
**Journey references:** journey-implementation.md [Hooks as Level 2-4 automation enabler]
**Last enhanced:** 2026-01-18 (Phase 2B)
---

## Table of Contents

1. [Hook Fundamentals](#hook-fundamentals)
2. [Hook Types and Lifecycle Events](#hook-types-and-lifecycle-events)
3. [Configuration Reference](#configuration-reference)
4. [Notification Hooks](#notification-hooks)
5. [Auto-Formatting Hooks](#auto-formatting-hooks)
6. [Logging and Monitoring Hooks](#logging-and-monitoring-hooks)
7. [Approval and Rejection Hooks](#approval-and-rejection-hooks)
8. [Ralph Loop Stop Hooks](#ralph-loop-stop-hooks)
9. [Memory and Persistence Hooks](#memory-and-persistence-hooks)
10. [Security Considerations](#security-considerations)
11. [Debugging Hooks](#debugging-hooks)
12. [Environment Variables](#environment-variables)
13. [Chaining Multiple Hooks](#chaining-multiple-hooks)
14. [Performance Considerations](#performance-considerations)
15. [Production Configurations](#production-configurations)
16. [Hook Recipes and Templates](#hook-recipes-and-templates)

---

## Hook Fundamentals

### What Hooks Are

**Definition:** Event-driven shell commands (NOT AI prompts) that run automatically on Claude Code lifecycle events.

**Key Properties:**
- Hooks are shell commands only - they cannot contain AI prompts
- They are for deterministic automation
- They execute synchronously before/after specific tool operations
- They have access to event data via environment variables

### When to Use Hooks vs Other Tools

| Scenario | Recommended Tool |
|----------|------------------|
| Simple, repeatable task | Slash command |
| Complex multi-step reasoning | Subagent |
| Automatic response to events | **Hook** |
| One-liner transformation | Slash command |
| Task needs isolated context | Subagent |
| Formatting/linting on save | **Hook** |
| Adversarial review | Subagent |
| Quick notification | **Hook** |

---

## Hook Types and Lifecycle Events

### Available Hook Events

| Event | Trigger | Common Use Cases |
|-------|---------|------------------|
| `PreToolUse` | Before a tool runs | Validation, notifications, approval gates |
| `PostToolUse` | After a tool completes | Formatting, linting, logging |
| `SessionStart` | When session begins | Context loading, environment setup |
| `SessionEnd` | When session ends | Cleanup, summary generation |

### Tool Matchers

Hooks can target specific tools using the `matcher` field:

- `Edit` - File editing operations
- `Write` - New file creation
- `Bash` - Shell command execution
- `Read` - File reading
- `Glob` - File pattern matching
- `Grep` - Content searching
- `AskUserQuestion` - When Claude needs user input
- `Task` - Subagent operations
- `WebFetch` - URL fetching
- `WebSearch` - Web searches
- `*` or omit matcher - Match all tools

---

## Configuration Reference

### Source
- **Location:** `~/.claude/settings.json` or project-level `.claude/settings.json`
- **Setup Method 1:** `/hooks` UI command in Claude Code
- **Setup Method 2:** Direct JSON editing

### Basic Structure

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "ToolName",
        "hooks": [
          {
            "type": "command",
            "command": "/path/to/script.sh"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit",
        "command": "prettier --write $FILE"
      }
    ],
    "SessionStart": [
      {
        "type": "command",
        "command": "echo 'Session started'"
      }
    ],
    "SessionEnd": [
      {
        "type": "command",
        "command": "/path/to/cleanup.sh"
      }
    ]
  }
}
```

### Configuration Variants

**Simple format (legacy):**
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "command": "prettier --write $FILE"
      }
    ]
  }
}
```

**Nested format (preferred):**
```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "AskUserQuestion",
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/poke-notify.sh question"
      }]
    }]
  }
}
```

---

## Notification Hooks

### Source
- **Author:** @dabit3 (Nader Dabit), @omarsar0 (Elvis)
- **URL:** https://x.com/dabit3/status/2008218122994520253
- **Type:** Twitter/Implementation Guide

### Core Pattern: Push Notifications on User Input Required

**Use Case:** Get notified on your phone when Claude Code needs your input, enabling async/mobile workflows.

### Configuration

```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "AskUserQuestion",
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/poke-notify.sh question"
      }]
    }]
  }
}
```

### Notification Script (Poke)

**File:** `~/.claude/hooks/poke-notify.sh`

```bash
#!/bin/bash
QUESTION=$(echo "$EVENT_DATA" | jq -r '.tool_input.questions[0].question')
MESSAGE="$PROJECT_NAME: Claude needs input - $QUESTION"
curl -X POST "$POKE_API_URL" -d "{\"message\": \"$MESSAGE\"}"
```

**Actionability:** Medium Lift - Requires Poke account and webhook setup

### Alternative Notification Services

| Service | Type | Pros | Script Modification |
|---------|------|------|---------------------|
| **Poke** | Commercial | iOS-native, simple | Default example |
| **Pushover** | Commercial | Cross-platform, reliable | Change endpoint/payload |
| **ntfy** | Open Source | Self-hostable, free | `curl -d "$MESSAGE" ntfy.sh/topic` |
| **Telegram Bot** | Free | Reliable, global | Telegram Bot API call |
| **Discord Webhook** | Free | If you live in Discord | Discord webhook format |
| **Slack Webhook** | Commercial | Enterprise use | Slack incoming webhook |

### ntfy Example

```bash
#!/bin/bash
QUESTION=$(echo "$EVENT_DATA" | jq -r '.tool_input.questions[0].question')
curl -d "Claude needs input: $QUESTION" ntfy.sh/your-topic
```

### Telegram Bot Example

```bash
#!/bin/bash
QUESTION=$(echo "$EVENT_DATA" | jq -r '.tool_input.questions[0].question')
BOT_TOKEN="your_bot_token"
CHAT_ID="your_chat_id"
curl -s -X POST "https://api.telegram.org/bot${BOT_TOKEN}/sendMessage" \
  -d "chat_id=${CHAT_ID}" \
  -d "text=Claude needs input: ${QUESTION}"
```

### Discord Webhook Example

```bash
#!/bin/bash
QUESTION=$(echo "$EVENT_DATA" | jq -r '.tool_input.questions[0].question')
WEBHOOK_URL="your_discord_webhook_url"
curl -H "Content-Type: application/json" \
  -d "{\"content\": \"Claude needs input: $QUESTION\"}" \
  "$WEBHOOK_URL"
```

### macOS Native Notification

```bash
osascript -e 'display notification "Claude needs input" with title "Claude Code"'
```

---

## Auto-Formatting Hooks

### Source
- **Author:** Boris Cherny (Claude Code creator)
- **Type:** Official Pattern

### Core Pattern: Format Files After Edit/Write

**Use Case:** Automatically format code after Claude edits or creates files.

### Configuration

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

### Language-Specific Examples

**JavaScript/TypeScript:**
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "command": "prettier --write $FILE"
      },
      {
        "matcher": "Edit",
        "command": "eslint --fix $FILE"
      }
    ]
  }
}
```

**Python:**
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "command": "black $FILE"
      },
      {
        "matcher": "Edit",
        "command": "isort $FILE"
      },
      {
        "matcher": "Edit",
        "command": "ruff check --fix $FILE"
      }
    ]
  }
}
```

**Go:**
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "command": "gofmt -w $FILE"
      },
      {
        "matcher": "Edit",
        "command": "goimports -w $FILE"
      }
    ]
  }
}
```

**Rust:**
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "command": "rustfmt $FILE"
      }
    ]
  }
}
```

**Actionability:** Quick Win - Just configure formatters you already have

---

## Logging and Monitoring Hooks

### Source
- **Author:** @thedotmack (claude-mem author)
- **URL:** https://github.com/thedotmack/claude-mem
- **Type:** GitHub/Plugin

### Core Pattern: Capture Session Events for Memory/Debugging

**Use Case:** Build persistent memory, debugging logs, or audit trails.

### How claude-mem Uses Hooks

```
Lifecycle hooks monitor events:
- SessionStart
- PostToolUse
- User prompts
- Observations

All logged to local SQLite.
```

### Basic Logging Configuration

```json
{
  "hooks": {
    "SessionStart": [{
      "type": "command",
      "command": "echo \"[$(date)] Session started: $SESSION_ID\" >> ~/.claude/session.log"
    }],
    "PostToolUse": [{
      "type": "command",
      "command": "echo \"[$(date)] Tool: $TOOL_NAME, File: $FILE\" >> ~/.claude/tools.log"
    }],
    "SessionEnd": [{
      "type": "command",
      "command": "echo \"[$(date)] Session ended: $SESSION_ID\" >> ~/.claude/session.log"
    }]
  }
}
```

### Advanced Logging Script

**File:** `~/.claude/hooks/log-event.sh`

```bash
#!/bin/bash
LOG_DIR="$HOME/.claude/logs"
mkdir -p "$LOG_DIR"

TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
EVENT_TYPE="$1"
LOG_FILE="$LOG_DIR/$(date +%Y-%m-%d).jsonl"

# Log as JSON lines for easy parsing
echo "{\"timestamp\": \"$TIMESTAMP\", \"event\": \"$EVENT_TYPE\", \"tool\": \"$TOOL_NAME\", \"file\": \"$FILE\", \"session\": \"$SESSION_ID\"}" >> "$LOG_FILE"
```

---

## Approval and Rejection Hooks

### Source
- **Pattern:** Community-derived from tool gating needs
- **Type:** Security Pattern

### Core Pattern: Gate Dangerous Operations

**Use Case:** Require explicit approval before destructive operations.

### PreToolUse Approval Gate

```bash
#!/bin/bash
# ~/.claude/hooks/approve-bash.sh

# Check if the command is potentially dangerous
COMMAND=$(echo "$EVENT_DATA" | jq -r '.tool_input.command')

# List of patterns that require approval
DANGEROUS_PATTERNS=(
    "rm -rf"
    "git push --force"
    "DROP TABLE"
    "DELETE FROM"
    "sudo"
)

for pattern in "${DANGEROUS_PATTERNS[@]}"; do
    if [[ "$COMMAND" == *"$pattern"* ]]; then
        # Send notification and wait for approval
        osascript -e "display dialog \"Approve dangerous command: $COMMAND\" buttons {\"Reject\", \"Approve\"} default button \"Reject\""
        exit $?  # Non-zero exit code blocks the operation
    fi
done

exit 0  # Allow the operation
```

### Configuration

```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Bash",
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/approve-bash.sh"
      }]
    }]
  }
}
```

### Blocking Based on Exit Code

- **Exit code 0:** Allow the tool to proceed
- **Non-zero exit code:** Block the tool operation

---

## Ralph Loop Stop Hooks

### Source
- **Author:** Geoffrey Huntley (original), @ryancarson, @koylanai
- **URL:** https://github.com/frankbria/ralph-claude-code
- **Type:** GitHub/Pattern

### Core Pattern: Prevent Early Session Exit

**Use Case:** Keep Claude Code running in a loop until a completion promise is found.

### The Core Loop

```bash
while :; do cat PROMPT.md | claude-code ; done
```

### Stop Hook Pattern

**File:** `.claude/hooks/stop-hook.sh`

```bash
#!/bin/bash
# Intercepts session exit and restarts with same prompt

# Check if completion promise found
if grep -q "COMPLETE" ./progress.txt; then
    exit 0  # Allow exit
else
    # Restart with prompt
    cat PROMPT.md | claude-code
fi
```

### File Structure for Ralph

```
.claude/
  hooks/
    hooks.json               # Hook config
    stop-hook.sh             # Loop continuation
commands/
  ralph-loop.md              # Loop command
templates/
  prompt.md                  # Static instructions
  progress.txt               # Dynamic state
```

### hooks.json for Ralph

```json
{
  "SessionEnd": [{
    "type": "command",
    "command": "./.claude/hooks/stop-hook.sh"
  }]
}
```

**Actionability:** Medium Lift - Requires understanding Ralph pattern

---

## Memory and Persistence Hooks

### Source
- **Author:** @thedotmack (claude-mem)
- **URL:** https://github.com/thedotmack/claude-mem
- **Type:** GitHub/Plugin

### Core Pattern: Capture and Inject Context Across Sessions

**Architecture:**

```
Claude Code Session
  └─ Lifecycle Hooks
       └─ Capture events
              │
              ▼
Worker Service (port 37777)
  ├─ SQLite DB (raw data)
  ├─ Chroma Vector DB (embeddings)
  └─ Claude Agent SDK (compression)
              │
              ▼
Future Session
  └─ Auto-inject relevant context
```

### Key Stats from claude-mem

| Metric | Improvement |
|--------|-------------|
| Token usage | Up to 95% fewer per session |
| Tool calls before limit | ~20x more |
| Storage | Local SQLite only |

### Integration Points

- SessionStart: Load relevant memories
- PostToolUse: Capture observations
- User prompts: Store interactions

**Actionability:** Medium Lift - Install plugin, restart, works automatically

---

## Security Considerations

### Source
- **Author:** @dabit3, community patterns
- **Type:** Best Practice

### Key Security Principles

1. **Never expose API keys in hooks** - Use environment variables
2. **Validate input before execution** - Sanitize `$EVENT_DATA`
3. **Limit hook permissions** - Use least-privilege scripts
4. **Audit hook execution** - Log all hook runs
5. **Isolate dangerous hooks** - Run on VMs, not local machines

### Secure Hook Template

```bash
#!/bin/bash
set -euo pipefail  # Exit on error, undefined vars, pipe failures

# Validate environment
if [[ -z "${EVENT_DATA:-}" ]]; then
    echo "ERROR: EVENT_DATA not set" >&2
    exit 1
fi

# Sanitize input
SAFE_INPUT=$(echo "$EVENT_DATA" | jq -r '.field // empty')

# Never eval or exec user input directly
# Use parameterized commands only
```

### VM Isolation for Permissive Mode

From @dabit3's mobile setup:

> "Permissive mode safe ONLY on isolated VM"

**Security Stack:**
- No public SSH (Tailscale only)
- Cloud firewall + nftables + fail2ban
- Separate VM per sensitive project

---

## Debugging Hooks

### Common Issues and Solutions

**1. Hook Not Executing**
- Check file permissions: `chmod +x ~/.claude/hooks/script.sh`
- Verify path is absolute or uses `~`
- Check settings.json syntax with `jq`

**2. Hook Runs But No Effect**
- Add logging: `echo "Hook ran" >> /tmp/hook-debug.log`
- Check environment variables: `env >> /tmp/hook-env.log`
- Verify jq is installed for JSON parsing

**3. Hook Blocking Unexpectedly**
- Check exit codes: `echo $?` after manual run
- Non-zero exit blocks PreToolUse hooks

### Debug Logging Hook

```bash
#!/bin/bash
# ~/.claude/hooks/debug-all.sh

DEBUG_LOG="/tmp/claude-hook-debug.log"
echo "===== $(date) =====" >> "$DEBUG_LOG"
echo "Event: $1" >> "$DEBUG_LOG"
echo "Tool: ${TOOL_NAME:-unknown}" >> "$DEBUG_LOG"
echo "File: ${FILE:-none}" >> "$DEBUG_LOG"
echo "EVENT_DATA: ${EVENT_DATA:-none}" >> "$DEBUG_LOG"
env | grep -E "^(CLAUDE|PROJECT|SESSION)" >> "$DEBUG_LOG"
echo "" >> "$DEBUG_LOG"
```

### Configuration for Debug

```json
{
  "hooks": {
    "PreToolUse": [{
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/debug-all.sh PreToolUse"
      }]
    }],
    "PostToolUse": [{
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/debug-all.sh PostToolUse"
      }]
    }]
  }
}
```

---

## Environment Variables

### Available in Hooks

| Variable | Description | Available In |
|----------|-------------|--------------|
| `$EVENT_DATA` | JSON blob with tool input/output | All events |
| `$TOOL_NAME` | Name of tool being used | PreToolUse, PostToolUse |
| `$FILE` | Target file path | PostToolUse (Edit, Write) |
| `$PROJECT_NAME` | Current project name | All events |
| `$SESSION_ID` | Current session identifier | All events |
| `$WORKING_DIR` | Current working directory | All events |

### Parsing EVENT_DATA

```bash
# Extract specific fields with jq
QUESTION=$(echo "$EVENT_DATA" | jq -r '.tool_input.questions[0].question')
COMMAND=$(echo "$EVENT_DATA" | jq -r '.tool_input.command')
FILE_PATH=$(echo "$EVENT_DATA" | jq -r '.tool_input.file_path')
```

---

## Chaining Multiple Hooks

### Sequential Execution

Multiple hooks on the same event execute sequentially:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "command": "prettier --write $FILE"
      },
      {
        "matcher": "Edit",
        "command": "eslint --fix $FILE"
      },
      {
        "matcher": "Edit",
        "command": "~/.claude/hooks/log-edit.sh"
      }
    ]
  }
}
```

### Conditional Chaining

```bash
#!/bin/bash
# ~/.claude/hooks/format-chain.sh

# Detect file type and format accordingly
case "$FILE" in
    *.js|*.ts|*.jsx|*.tsx)
        prettier --write "$FILE"
        eslint --fix "$FILE"
        ;;
    *.py)
        black "$FILE"
        isort "$FILE"
        ruff check --fix "$FILE"
        ;;
    *.go)
        gofmt -w "$FILE"
        goimports -w "$FILE"
        ;;
    *.rs)
        rustfmt "$FILE"
        ;;
esac
```

---

## Performance Considerations

### Best Practices

1. **Keep hooks lightweight** - Heavy operations delay Claude's response
2. **Use async where possible** - Background long operations
3. **Batch operations** - Combine multiple formatters into one script
4. **Cache results** - Don't re-run expensive checks unnecessarily

### Background Execution

```bash
#!/bin/bash
# Run slow operation in background
nohup ~/.claude/hooks/slow-operation.sh "$FILE" &>/dev/null &
```

### Timing Hooks

```bash
#!/bin/bash
# ~/.claude/hooks/timed-format.sh

START=$(date +%s.%N)
prettier --write "$FILE"
END=$(date +%s.%N)

DURATION=$(echo "$END - $START" | bc)
echo "$(date) - Format took ${DURATION}s for $FILE" >> ~/.claude/hook-timing.log
```

---

## Production Configurations

### Mobile Development Setup

From @dabit3's production config:

**File Locations:**
```
~/.claude/settings.json       # Hook configuration
~/.claude/hooks/poke-notify.sh  # Notification script
~/.zshrc                      # tmux auto-attach
```

**Full settings.json:**
```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "AskUserQuestion",
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/poke-notify.sh question"
      }]
    }]
  }
}
```

### Full-Stack Development Setup

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [{
          "type": "command",
          "command": "~/.claude/hooks/format-chain.sh"
        }]
      },
      {
        "matcher": "Write",
        "hooks": [{
          "type": "command",
          "command": "~/.claude/hooks/format-chain.sh"
        }]
      }
    ],
    "PreToolUse": [{
      "matcher": "Bash",
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/validate-command.sh"
      }]
    }],
    "SessionStart": [{
      "type": "command",
      "command": "~/.claude/hooks/load-context.sh"
    }],
    "SessionEnd": [{
      "type": "command",
      "command": "~/.claude/hooks/save-summary.sh"
    }]
  }
}
```

### Ralph Marketer Setup

From @koylanai:

```
.claude-plugin/plugin.json     # Plugin manifest
commands/ralph-marketer.md     # Main loop prompt
hooks/hooks.json               # Hook config
hooks/stop-hook.sh             # Loop continuation
```

---

## Hook Recipes and Templates

### Recipe 1: Git Auto-Commit on Edit

```bash
#!/bin/bash
# ~/.claude/hooks/auto-commit.sh

cd "$(dirname "$FILE")"
git add "$FILE"
git commit -m "Auto-commit: Claude edited $FILE" --no-verify 2>/dev/null || true
```

### Recipe 2: Slack Notification on Session End

```bash
#!/bin/bash
# ~/.claude/hooks/slack-summary.sh

WEBHOOK_URL="${SLACK_WEBHOOK_URL}"
SUMMARY="Claude session ended after $(uptime | grep -oP 'up \K[^,]+')"

curl -X POST -H 'Content-type: application/json' \
  --data "{\"text\":\"$SUMMARY\"}" \
  "$WEBHOOK_URL"
```

### Recipe 3: Test Runner After Edit

```bash
#!/bin/bash
# ~/.claude/hooks/run-related-tests.sh

# Find and run tests related to edited file
TEST_FILE="${FILE//.ts/.test.ts}"
TEST_FILE="${TEST_FILE//.py/_test.py}"

if [[ -f "$TEST_FILE" ]]; then
    npm test -- --findRelatedTests "$FILE" 2>&1 | head -20
fi
```

### Recipe 4: Documentation Validator

```bash
#!/bin/bash
# ~/.claude/hooks/validate-docs.sh

if [[ "$FILE" == *.md ]]; then
    # Check markdown links
    markdown-link-check "$FILE" 2>/dev/null || true

    # Spellcheck
    aspell check "$FILE" 2>/dev/null || true
fi
```

### Recipe 5: Security Scanner

```bash
#!/bin/bash
# ~/.claude/hooks/security-scan.sh

# Quick security check on edited files
if command -v semgrep &>/dev/null; then
    semgrep --config auto "$FILE" 2>/dev/null | head -10
fi
```

---

## Summary

### Quick Reference Table

| Use Case | Hook Event | Matcher | Script Type |
|----------|------------|---------|-------------|
| Push notification | PreToolUse | AskUserQuestion | curl webhook |
| Auto-format | PostToolUse | Edit/Write | prettier/black |
| Logging | All | * | echo to file |
| Security gate | PreToolUse | Bash | validation script |
| Loop continuation | SessionEnd | - | stop-hook |
| Memory capture | PostToolUse | * | SQLite insert |

### File Locations

```
~/.claude/settings.json           # Global hook config
.claude/settings.json             # Project hook config
~/.claude/hooks/                  # Global hook scripts
.claude/hooks/                    # Project hook scripts
```

### Actionability Summary

| Pattern | Effort | Impact |
|---------|--------|--------|
| Auto-formatting | Quick Win | High - Clean code always |
| Push notifications | Medium | High - Enables mobile/async |
| Logging | Quick Win | Medium - Debug capability |
| Ralph loops | Medium | Very High - Autonomous agents |
| Security gates | Medium | High - Safety critical |
| Memory hooks | Medium | Very High - Persistent context |

---

## Sources

1. Boris Cherny (Claude Code creator) - Workflow philosophy
2. @dabit3 (Nader Dabit) - Mobile Claude Code setup
3. @omarsar0 (Elvis) - Implementation details
4. @koylanai (Muratcan Koylan) - Ralph Wiggum Marketer
5. @thedotmack - claude-mem plugin
6. @ryancarson - Ralph loop patterns
7. Geoffrey Huntley - Original Ralph concept
8. Community patterns from claude-code-mastery.md

---

## Tags

`#hooks` `#automation` `#notifications` `#formatting` `#logging` `#security` `#ralph` `#memory` `#configuration` `#production`

---

## Deep Dive Expansion

This section extends the existing research with advanced patterns, edge cases, and specialized hook configurations not covered above.

---

### Advanced Hook Event Data Structures

#### Complete EVENT_DATA Schema

The `$EVENT_DATA` environment variable contains a JSON blob whose structure varies by event and tool. Here are the complete schemas:

**PreToolUse EVENT_DATA:**
```json
{
  "event_type": "pre_tool_use",
  "tool_name": "Bash",
  "tool_input": {
    "command": "npm test",
    "description": "Run test suite",
    "timeout": 120000
  },
  "session": {
    "id": "abc123-def456",
    "start_time": "2026-01-09T10:30:00Z"
  },
  "project": {
    "name": "my-project",
    "path": "/Users/me/projects/my-project"
  }
}
```

**PostToolUse EVENT_DATA:**
```json
{
  "event_type": "post_tool_use",
  "tool_name": "Edit",
  "tool_input": {
    "file_path": "/path/to/file.ts",
    "old_string": "...",
    "new_string": "..."
  },
  "tool_output": {
    "success": true,
    "lines_changed": 15,
    "file_path": "/path/to/file.ts"
  },
  "duration_ms": 234
}
```

**Tool-Specific Input Schemas:**

| Tool | Key Input Fields |
|------|------------------|
| `Bash` | `command`, `description`, `timeout`, `run_in_background` |
| `Edit` | `file_path`, `old_string`, `new_string`, `replace_all` |
| `Write` | `file_path`, `content` |
| `Read` | `file_path`, `offset`, `limit` |
| `Glob` | `pattern`, `path` |
| `Grep` | `pattern`, `path`, `output_mode`, `glob` |
| `AskUserQuestion` | `questions[].question`, `questions[].options` |
| `Task` | `description`, `agent_type`, `context` |
| `WebFetch` | `url`, `prompt` |
| `WebSearch` | `query`, `allowed_domains`, `blocked_domains` |

---

### Exit Code Behavior Deep Dive

#### PreToolUse Exit Code Matrix

| Exit Code | Behavior | Use Case |
|-----------|----------|----------|
| `0` | Tool proceeds normally | Allow operation |
| `1-125` | Tool blocked, hook's stderr shown | Reject with message |
| `126` | Command not executable | Script error (debugging) |
| `127` | Command not found | Script path error |
| `128+n` | Signal termination (n = signal) | Timeout or kill |

**Blocking with Message:**
```bash
#!/bin/bash
# ~/.claude/hooks/block-with-reason.sh

COMMAND=$(echo "$EVENT_DATA" | jq -r '.tool_input.command // empty')

if [[ "$COMMAND" == *"rm -rf /"* ]]; then
    echo "BLOCKED: Attempted to delete root filesystem" >&2
    exit 1
fi

exit 0
```

The stderr message ("BLOCKED: ...") is shown to the user in Claude Code's interface.

#### PostToolUse Exit Codes

PostToolUse exit codes do NOT block the operation (it already completed), but can signal:

| Exit Code | Behavior |
|-----------|----------|
| `0` | Hook succeeded silently |
| Non-zero | Warning shown, but operation complete |

---

### Advanced Hook Chaining Patterns

#### Pipeline Pattern: Conditional Execution

Run subsequent hooks only if previous succeed:

```bash
#!/bin/bash
# ~/.claude/hooks/format-pipeline.sh

set -e  # Exit on first failure

# Stage 1: Format
if [[ "$FILE" == *.ts ]]; then
    prettier --write "$FILE" || exit 1
fi

# Stage 2: Lint (only if format passed)
eslint --fix "$FILE" || exit 1

# Stage 3: Type check (only if lint passed)
tsc --noEmit --skipLibCheck "$FILE" 2>/dev/null || true

exit 0
```

#### Parallel Hook Execution

Hooks on the SAME event run sequentially. For parallel execution, use background processes:

```bash
#!/bin/bash
# ~/.claude/hooks/parallel-checks.sh

# Run checks in parallel
(eslint "$FILE" > /tmp/eslint-$$.log 2>&1) &
PID_ESLINT=$!

(tsc --noEmit "$FILE" > /tmp/tsc-$$.log 2>&1) &
PID_TSC=$!

# Wait for all
wait $PID_ESLINT
ESLINT_STATUS=$?

wait $PID_TSC
TSC_STATUS=$?

# Report any failures
if [ $ESLINT_STATUS -ne 0 ]; then
    cat /tmp/eslint-$$.log >&2
fi

if [ $TSC_STATUS -ne 0 ]; then
    cat /tmp/tsc-$$.log >&2
fi

# Cleanup
rm -f /tmp/eslint-$$.log /tmp/tsc-$$.log

# Exit with combined status
[ $ESLINT_STATUS -eq 0 ] && [ $TSC_STATUS -eq 0 ]
```

#### Stateful Chaining Across Events

Share state between SessionStart and SessionEnd:

```bash
#!/bin/bash
# ~/.claude/hooks/session-state.sh

STATE_DIR="/tmp/claude-session-$$"

case "$1" in
    start)
        mkdir -p "$STATE_DIR"
        echo "$(date +%s)" > "$STATE_DIR/start_time"
        echo "0" > "$STATE_DIR/edit_count"
        ;;
    edit)
        COUNT=$(cat "$STATE_DIR/edit_count" 2>/dev/null || echo 0)
        echo $((COUNT + 1)) > "$STATE_DIR/edit_count"
        ;;
    end)
        START=$(cat "$STATE_DIR/start_time" 2>/dev/null || echo 0)
        EDITS=$(cat "$STATE_DIR/edit_count" 2>/dev/null || echo 0)
        DURATION=$(($(date +%s) - START))

        echo "Session summary: $EDITS edits in ${DURATION}s" >> ~/.claude/session-summaries.log
        rm -rf "$STATE_DIR"
        ;;
esac
```

---

### Timeout and Performance Patterns

#### Hook Timeout Handling

Hooks have an implicit timeout (typically 30 seconds). For long operations:

```bash
#!/bin/bash
# ~/.claude/hooks/fast-with-async.sh

# Fast synchronous check
if [ ! -f "$FILE" ]; then
    exit 0
fi

# Slow operation in background (non-blocking)
nohup ~/.claude/hooks/slow-analysis.sh "$FILE" >> /tmp/hook-async.log 2>&1 &

# Return immediately
exit 0
```

#### Caching Pattern for Expensive Hooks

```bash
#!/bin/bash
# ~/.claude/hooks/cached-lint.sh

CACHE_DIR="$HOME/.claude/hook-cache"
mkdir -p "$CACHE_DIR"

# Generate cache key from file content hash
FILE_HASH=$(md5sum "$FILE" | cut -d' ' -f1)
CACHE_FILE="$CACHE_DIR/$FILE_HASH"

# Check cache (valid for 5 minutes)
if [ -f "$CACHE_FILE" ]; then
    CACHE_AGE=$(($(date +%s) - $(stat -f %m "$CACHE_FILE" 2>/dev/null || stat -c %Y "$CACHE_FILE")))
    if [ $CACHE_AGE -lt 300 ]; then
        cat "$CACHE_FILE"
        exit $(cat "$CACHE_FILE.exitcode" 2>/dev/null || echo 0)
    fi
fi

# Run expensive operation
eslint --format compact "$FILE" > "$CACHE_FILE" 2>&1
EXIT_CODE=$?
echo $EXIT_CODE > "$CACHE_FILE.exitcode"

cat "$CACHE_FILE"
exit $EXIT_CODE
```

---

### Security Hooks Deep Dive

#### Comprehensive Command Blocklist

```bash
#!/bin/bash
# ~/.claude/hooks/security-gate.sh

COMMAND=$(echo "$EVENT_DATA" | jq -r '.tool_input.command // empty')

# Patterns that are ALWAYS blocked
ALWAYS_BLOCK=(
    "rm -rf /"
    "rm -rf ~"
    "rm -rf \$HOME"
    "> /dev/sd"
    "mkfs"
    "dd if="
    ":(){:|:&};:"  # Fork bomb
    "chmod -R 777"
    "curl | sh"
    "curl | bash"
    "wget -O - | sh"
    "base64 -d | sh"
)

# Patterns that require confirmation
CONFIRM_REQUIRED=(
    "git push --force"
    "git reset --hard"
    "DROP TABLE"
    "DELETE FROM"
    "TRUNCATE"
    "sudo"
    "npm publish"
    "docker rm -f"
    "kubectl delete"
)

for pattern in "${ALWAYS_BLOCK[@]}"; do
    if [[ "$COMMAND" == *"$pattern"* ]]; then
        echo "BLOCKED: Dangerous command pattern detected: $pattern" >&2
        exit 1
    fi
done

for pattern in "${CONFIRM_REQUIRED[@]}"; do
    if [[ "$COMMAND" == *"$pattern"* ]]; then
        # macOS confirmation dialog
        osascript -e "display dialog \"Confirm dangerous command: $COMMAND\" buttons {\"Cancel\", \"Allow\"} default button \"Cancel\"" 2>/dev/null
        if [ $? -ne 0 ]; then
            echo "BLOCKED: User rejected command" >&2
            exit 1
        fi
    fi
done

exit 0
```

#### File Access Auditing Hook

```bash
#!/bin/bash
# ~/.claude/hooks/audit-file-access.sh

AUDIT_LOG="$HOME/.claude/audit.log"

# Extract file info
FILE_PATH=$(echo "$EVENT_DATA" | jq -r '.tool_input.file_path // empty')
TOOL=$(echo "$EVENT_DATA" | jq -r '.tool_name // empty')

# Skip if no file involved
[ -z "$FILE_PATH" ] && exit 0

# Log access
echo "$(date -Iseconds) | $TOOL | $FILE_PATH | $(whoami)" >> "$AUDIT_LOG"

# Check for sensitive paths
SENSITIVE_PATTERNS=(
    ".env"
    "credentials"
    ".pem"
    ".key"
    "secrets"
    ".ssh/"
    "password"
    "token"
)

for pattern in "${SENSITIVE_PATTERNS[@]}"; do
    if [[ "$FILE_PATH" == *"$pattern"* ]]; then
        echo "$(date -Iseconds) | ALERT | Sensitive file access: $FILE_PATH" >> "$AUDIT_LOG"
        # Optional: Send notification
        # curl -X POST "$ALERT_WEBHOOK" -d "{\"text\":\"Sensitive file accessed: $FILE_PATH\"}"
    fi
done

exit 0
```

#### Sandboxed Command Execution Hook

```bash
#!/bin/bash
# ~/.claude/hooks/sandbox-check.sh

COMMAND=$(echo "$EVENT_DATA" | jq -r '.tool_input.command // empty')
WORKING_DIR="$PWD"

# Only allow commands within project directory
PROJECT_ROOT=$(git rev-parse --show-toplevel 2>/dev/null)

if [ -z "$PROJECT_ROOT" ]; then
    echo "WARNING: Not in a git repository" >&2
fi

# Block commands that escape project directory
if [[ "$COMMAND" == *".."* ]] || [[ "$COMMAND" == *"/"* && "$COMMAND" != *"$PROJECT_ROOT"* ]]; then
    # Check if it's a system command or file access
    if [[ "$COMMAND" =~ (cat|vim|nano|less|more|code|open)\ +/ ]]; then
        echo "BLOCKED: File access outside project directory" >&2
        exit 1
    fi
fi

exit 0
```

---

### Notification Hook Advanced Patterns

#### Rich Notification with Context

```bash
#!/bin/bash
# ~/.claude/hooks/rich-notify.sh

QUESTION=$(echo "$EVENT_DATA" | jq -r '.tool_input.questions[0].question // empty')
OPTIONS=$(echo "$EVENT_DATA" | jq -r '.tool_input.questions[0].options // [] | join(", ")')
PROJECT=$(basename "$PWD")
BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")

# Build rich message
MESSAGE="[$PROJECT:$BRANCH] Claude needs input:

$QUESTION

Options: $OPTIONS"

# Send to multiple channels

# 1. macOS native
osascript -e "display notification \"$MESSAGE\" with title \"Claude Code\" sound name \"Ping\""

# 2. Pushover (if configured)
if [ -n "$PUSHOVER_TOKEN" ] && [ -n "$PUSHOVER_USER" ]; then
    curl -s \
        --form-string "token=$PUSHOVER_TOKEN" \
        --form-string "user=$PUSHOVER_USER" \
        --form-string "title=Claude Code - $PROJECT" \
        --form-string "message=$MESSAGE" \
        --form-string "priority=1" \
        https://api.pushover.net/1/messages.json > /dev/null
fi

# 3. Telegram (if configured)
if [ -n "$TELEGRAM_BOT_TOKEN" ] && [ -n "$TELEGRAM_CHAT_ID" ]; then
    curl -s -X POST \
        "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/sendMessage" \
        -d "chat_id=$TELEGRAM_CHAT_ID" \
        -d "text=$MESSAGE" \
        -d "parse_mode=Markdown" > /dev/null
fi

exit 0
```

#### Session Status Webhooks

```bash
#!/bin/bash
# ~/.claude/hooks/session-webhook.sh

EVENT_TYPE="$1"  # start or end
WEBHOOK_URL="${CLAUDE_SESSION_WEBHOOK}"

[ -z "$WEBHOOK_URL" ] && exit 0

PROJECT=$(basename "$PWD")
BRANCH=$(git branch --show-current 2>/dev/null || echo "main")
TIMESTAMP=$(date -Iseconds)
HOSTNAME=$(hostname)

if [ "$EVENT_TYPE" = "start" ]; then
    PAYLOAD=$(cat <<EOF
{
    "event": "session_start",
    "project": "$PROJECT",
    "branch": "$BRANCH",
    "hostname": "$HOSTNAME",
    "timestamp": "$TIMESTAMP"
}
EOF
)
else
    # Calculate session duration if start time was saved
    START_TIME=$(cat /tmp/claude-session-start 2>/dev/null || echo "0")
    DURATION=$(($(date +%s) - START_TIME))

    PAYLOAD=$(cat <<EOF
{
    "event": "session_end",
    "project": "$PROJECT",
    "branch": "$BRANCH",
    "hostname": "$HOSTNAME",
    "timestamp": "$TIMESTAMP",
    "duration_seconds": $DURATION
}
EOF
)
fi

curl -s -X POST "$WEBHOOK_URL" \
    -H "Content-Type: application/json" \
    -d "$PAYLOAD" > /dev/null

# Save start time for duration calculation
if [ "$EVENT_TYPE" = "start" ]; then
    date +%s > /tmp/claude-session-start
fi

exit 0
```

---

### Monitoring and Observability Hooks

#### Metrics Collection Hook

```bash
#!/bin/bash
# ~/.claude/hooks/metrics.sh

METRICS_FILE="$HOME/.claude/metrics.jsonl"

TOOL_NAME=$(echo "$EVENT_DATA" | jq -r '.tool_name // "unknown"')
DURATION=$(echo "$EVENT_DATA" | jq -r '.duration_ms // 0')
SUCCESS=$(echo "$EVENT_DATA" | jq -r '.tool_output.success // true')
TIMESTAMP=$(date +%s)

# Append metric as JSON line
echo "{\"ts\":$TIMESTAMP,\"tool\":\"$TOOL_NAME\",\"duration_ms\":$DURATION,\"success\":$SUCCESS}" >> "$METRICS_FILE"

# Rotate log if too large (>10MB)
if [ $(stat -f%z "$METRICS_FILE" 2>/dev/null || stat -c%s "$METRICS_FILE") -gt 10485760 ]; then
    mv "$METRICS_FILE" "$METRICS_FILE.$(date +%Y%m%d%H%M%S)"
    gzip "$METRICS_FILE".* 2>/dev/null &
fi

exit 0
```

#### Tool Usage Analytics

```bash
#!/bin/bash
# ~/.claude/hooks/analytics.sh

ANALYTICS_DB="$HOME/.claude/analytics.db"

# Initialize SQLite database if needed
if [ ! -f "$ANALYTICS_DB" ]; then
    sqlite3 "$ANALYTICS_DB" <<EOF
CREATE TABLE tool_usage (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp TEXT DEFAULT CURRENT_TIMESTAMP,
    session_id TEXT,
    tool_name TEXT,
    file_path TEXT,
    duration_ms INTEGER,
    success INTEGER,
    project TEXT
);
CREATE INDEX idx_timestamp ON tool_usage(timestamp);
CREATE INDEX idx_tool ON tool_usage(tool_name);
EOF
fi

# Extract data
SESSION_ID=$(echo "$EVENT_DATA" | jq -r '.session.id // "unknown"')
TOOL_NAME=$(echo "$EVENT_DATA" | jq -r '.tool_name // "unknown"')
FILE_PATH=$(echo "$EVENT_DATA" | jq -r '.tool_input.file_path // ""')
DURATION=$(echo "$EVENT_DATA" | jq -r '.duration_ms // 0')
SUCCESS=$(echo "$EVENT_DATA" | jq -r '.tool_output.success // true')
PROJECT=$(basename "$PWD")

# Handle boolean to integer
[ "$SUCCESS" = "true" ] && SUCCESS=1 || SUCCESS=0

# Insert record
sqlite3 "$ANALYTICS_DB" "INSERT INTO tool_usage (session_id, tool_name, file_path, duration_ms, success, project) VALUES ('$SESSION_ID', '$TOOL_NAME', '$FILE_PATH', $DURATION, $SUCCESS, '$PROJECT');"

exit 0
```

#### Health Check Endpoint Hook

```bash
#!/bin/bash
# ~/.claude/hooks/health-check.sh
# Creates a simple health check endpoint for monitoring

HEALTH_FILE="/tmp/claude-health.json"

# Update health status on each tool use
cat > "$HEALTH_FILE" <<EOF
{
    "status": "healthy",
    "last_activity": "$(date -Iseconds)",
    "project": "$(basename $PWD)",
    "session_id": "$(echo "$EVENT_DATA" | jq -r '.session.id // "unknown"')",
    "tool_count": $(($(jq '.tool_count // 0' "$HEALTH_FILE" 2>/dev/null || echo 0) + 1))
}
EOF

exit 0
```

---

### File Type-Specific Hook Configurations

#### Complete Language-Aware Format Chain

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/hooks/smart-format.sh"
          }
        ]
      }
    ]
  }
}
```

```bash
#!/bin/bash
# ~/.claude/hooks/smart-format.sh

[ -z "$FILE" ] && exit 0
[ ! -f "$FILE" ] && exit 0

# Get file extension
EXT="${FILE##*.}"

case "$EXT" in
    # JavaScript/TypeScript
    js|jsx|ts|tsx|mjs|cjs)
        command -v prettier &>/dev/null && prettier --write "$FILE"
        command -v eslint &>/dev/null && eslint --fix "$FILE"
        ;;

    # Python
    py|pyi)
        command -v black &>/dev/null && black --quiet "$FILE"
        command -v isort &>/dev/null && isort --quiet "$FILE"
        command -v ruff &>/dev/null && ruff check --fix --quiet "$FILE"
        ;;

    # Go
    go)
        command -v gofmt &>/dev/null && gofmt -w "$FILE"
        command -v goimports &>/dev/null && goimports -w "$FILE"
        ;;

    # Rust
    rs)
        command -v rustfmt &>/dev/null && rustfmt --quiet "$FILE"
        ;;

    # Ruby
    rb)
        command -v rubocop &>/dev/null && rubocop -a --fail-level E "$FILE" 2>/dev/null
        ;;

    # PHP
    php)
        command -v php-cs-fixer &>/dev/null && php-cs-fixer fix "$FILE" --quiet
        ;;

    # Swift
    swift)
        command -v swiftformat &>/dev/null && swiftformat "$FILE"
        ;;

    # Kotlin
    kt|kts)
        command -v ktlint &>/dev/null && ktlint -F "$FILE" 2>/dev/null
        ;;

    # Markdown
    md)
        command -v prettier &>/dev/null && prettier --write --prose-wrap always "$FILE"
        ;;

    # JSON
    json)
        command -v jq &>/dev/null && jq '.' "$FILE" > "$FILE.tmp" && mv "$FILE.tmp" "$FILE"
        ;;

    # YAML
    yaml|yml)
        command -v yq &>/dev/null && yq eval '.' "$FILE" -i
        ;;

    # Shell scripts
    sh|bash|zsh)
        command -v shfmt &>/dev/null && shfmt -w "$FILE"
        ;;

    # CSS/SCSS/LESS
    css|scss|less)
        command -v prettier &>/dev/null && prettier --write "$FILE"
        ;;

    # HTML
    html|htm)
        command -v prettier &>/dev/null && prettier --write "$FILE"
        ;;

    # SQL
    sql)
        command -v sql-formatter &>/dev/null && sql-formatter "$FILE" > "$FILE.tmp" && mv "$FILE.tmp" "$FILE"
        ;;
esac

exit 0
```

---

### Integration Patterns

#### Git Integration Hooks

```bash
#!/bin/bash
# ~/.claude/hooks/git-auto-stage.sh
# Auto-stage edited files for easier commits

[ -z "$FILE" ] && exit 0

# Check if in git repo
git rev-parse --is-inside-work-tree &>/dev/null || exit 0

# Auto-stage the edited file
git add "$FILE" 2>/dev/null

# Optional: Create checkpoint commits
CHECKPOINT_INTERVAL=${CHECKPOINT_INTERVAL:-10}  # Every 10 edits
EDIT_COUNT_FILE="/tmp/claude-edit-count"

COUNT=$(cat "$EDIT_COUNT_FILE" 2>/dev/null || echo 0)
COUNT=$((COUNT + 1))
echo $COUNT > "$EDIT_COUNT_FILE"

if [ $((COUNT % CHECKPOINT_INTERVAL)) -eq 0 ]; then
    git commit -m "checkpoint: auto-save after $COUNT edits" --no-verify 2>/dev/null || true
fi

exit 0
```

#### Docker Environment Hook

```bash
#!/bin/bash
# ~/.claude/hooks/docker-env.sh
# Ensure Docker environment is ready

case "$1" in
    session_start)
        # Start required containers
        if ! docker ps | grep -q "postgres-dev"; then
            docker compose -f docker-compose.dev.yml up -d postgres redis 2>/dev/null
        fi

        # Wait for services
        echo "Waiting for database..." >&2
        timeout 30 bash -c 'until docker exec postgres-dev pg_isready; do sleep 1; done' 2>/dev/null
        ;;

    session_end)
        # Optional: stop containers
        # docker compose -f docker-compose.dev.yml down
        ;;
esac

exit 0
```

#### CI/CD Integration Hook

```bash
#!/bin/bash
# ~/.claude/hooks/ci-notify.sh
# Trigger CI pipeline when significant changes made

SIGNIFICANT_PATTERNS="src/|lib/|tests/"
FILES_CHANGED=$(git diff --name-only HEAD~1 2>/dev/null | grep -E "$SIGNIFICANT_PATTERNS" | wc -l)

if [ "$FILES_CHANGED" -gt 5 ]; then
    # Trigger CI
    if [ -n "$GITHUB_TOKEN" ]; then
        curl -s -X POST \
            -H "Authorization: token $GITHUB_TOKEN" \
            -H "Accept: application/vnd.github+json" \
            "https://api.github.com/repos/$REPO/actions/workflows/test.yml/dispatches" \
            -d '{"ref":"'$(git branch --show-current)'"}' > /dev/null

        echo "CI pipeline triggered" >&2
    fi
fi

exit 0
```

---

### Debugging Hooks Deep Dive

#### Verbose Debug Hook

```bash
#!/bin/bash
# ~/.claude/hooks/debug-verbose.sh

DEBUG_LOG="$HOME/.claude/debug/$(date +%Y%m%d).log"
mkdir -p "$(dirname $DEBUG_LOG)"

{
    echo "=========================================="
    echo "Timestamp: $(date -Iseconds)"
    echo "Event: $1"
    echo "PWD: $PWD"
    echo "Tool: ${TOOL_NAME:-N/A}"
    echo "File: ${FILE:-N/A}"
    echo "Exit Status: ${PIPESTATUS[@]}"
    echo ""
    echo "Environment Variables:"
    env | grep -E "^(CLAUDE|PROJECT|SESSION|TOOL|FILE)" | sort
    echo ""
    echo "EVENT_DATA:"
    echo "$EVENT_DATA" | jq '.' 2>/dev/null || echo "$EVENT_DATA"
    echo ""
    echo "Process Info:"
    echo "PID: $$"
    echo "PPID: $PPID"
    echo "User: $(whoami)"
    echo ""
} >> "$DEBUG_LOG"

exit 0
```

#### Hook Execution Time Profiler

```bash
#!/bin/bash
# ~/.claude/hooks/profiler.sh
# Measure and log hook execution times

PROFILE_LOG="$HOME/.claude/profile.csv"

# Initialize CSV if needed
if [ ! -f "$PROFILE_LOG" ]; then
    echo "timestamp,hook_name,duration_ms,tool,file" > "$PROFILE_LOG"
fi

HOOK_NAME="$1"
START_NS=$(date +%s%N)

# Source the actual hook
. "$2"
EXIT_CODE=$?

END_NS=$(date +%s%N)
DURATION_MS=$(( (END_NS - START_NS) / 1000000 ))

echo "$(date -Iseconds),$HOOK_NAME,$DURATION_MS,$TOOL_NAME,$FILE" >> "$PROFILE_LOG"

exit $EXIT_CODE
```

#### Interactive Hook Testing Script

```bash
#!/bin/bash
# ~/.claude/hooks/test-hook.sh
# Test hooks with mock EVENT_DATA

HOOK_SCRIPT="$1"

if [ -z "$HOOK_SCRIPT" ] || [ ! -f "$HOOK_SCRIPT" ]; then
    echo "Usage: $0 <hook-script.sh>" >&2
    exit 1
fi

# Mock EVENT_DATA
export EVENT_DATA='{
  "event_type": "post_tool_use",
  "tool_name": "Edit",
  "tool_input": {
    "file_path": "/tmp/test-file.ts",
    "old_string": "const x = 1;",
    "new_string": "const x = 2;"
  },
  "tool_output": {
    "success": true
  },
  "duration_ms": 50
}'

export TOOL_NAME="Edit"
export FILE="/tmp/test-file.ts"
export SESSION_ID="test-session-123"
export PROJECT_NAME="test-project"
export WORKING_DIR="$PWD"

# Create test file
echo "const x = 1;" > /tmp/test-file.ts

echo "Testing hook: $HOOK_SCRIPT"
echo "Mock data: $EVENT_DATA"
echo "---"

bash "$HOOK_SCRIPT"
EXIT_CODE=$?

echo "---"
echo "Exit code: $EXIT_CODE"
echo "Test file contents:"
cat /tmp/test-file.ts

rm -f /tmp/test-file.ts
```

---

### Compound Pattern Configurations

#### Full Production Configuration Template

```json
{
  "hooks": {
    "SessionStart": [
      {
        "type": "command",
        "command": "~/.claude/hooks/session-start.sh"
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/hooks/security-gate.sh"
          }
        ]
      },
      {
        "matcher": "AskUserQuestion",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/hooks/rich-notify.sh"
          }
        ]
      },
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/hooks/audit-file-access.sh"
          }
        ]
      },
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/hooks/audit-file-access.sh"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/hooks/smart-format.sh"
          },
          {
            "type": "command",
            "command": "~/.claude/hooks/metrics.sh"
          }
        ]
      },
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/hooks/smart-format.sh"
          },
          {
            "type": "command",
            "command": "~/.claude/hooks/metrics.sh"
          }
        ]
      },
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/hooks/metrics.sh"
          }
        ]
      }
    ],
    "SessionEnd": [
      {
        "type": "command",
        "command": "~/.claude/hooks/session-end.sh"
      },
      {
        "type": "command",
        "command": "~/.claude/hooks/session-webhook.sh end"
      }
    ]
  }
}
```

#### Session Start/End Scripts

```bash
#!/bin/bash
# ~/.claude/hooks/session-start.sh

LOG_DIR="$HOME/.claude/session-logs"
mkdir -p "$LOG_DIR"

SESSION_LOG="$LOG_DIR/$(date +%Y%m%d_%H%M%S).log"
echo "SESSION_LOG=$SESSION_LOG" > /tmp/claude-session-vars

{
    echo "=== SESSION START ==="
    echo "Timestamp: $(date -Iseconds)"
    echo "Directory: $PWD"
    echo "Git Branch: $(git branch --show-current 2>/dev/null || echo 'N/A')"
    echo "Git Status:"
    git status --short 2>/dev/null || echo "Not a git repository"
    echo ""
} >> "$SESSION_LOG"

# Start background services if needed
if [ -f "docker-compose.yml" ]; then
    docker compose ps --format json 2>/dev/null | head -1 > /dev/null || \
        echo "Docker services may need starting" >&2
fi

# Notify
osascript -e 'display notification "Claude session started" with title "Claude Code"' 2>/dev/null

exit 0
```

```bash
#!/bin/bash
# ~/.claude/hooks/session-end.sh

# Load session vars
source /tmp/claude-session-vars 2>/dev/null

if [ -n "$SESSION_LOG" ] && [ -f "$SESSION_LOG" ]; then
    {
        echo ""
        echo "=== SESSION END ==="
        echo "Timestamp: $(date -Iseconds)"
        echo "Final Git Status:"
        git status --short 2>/dev/null || echo "N/A"
        echo ""
    } >> "$SESSION_LOG"
fi

# Cleanup temp files
rm -f /tmp/claude-session-vars
rm -f /tmp/claude-session-start
rm -f /tmp/claude-edit-count

# Final notification
osascript -e 'display notification "Claude session ended" with title "Claude Code"' 2>/dev/null

exit 0
```

---

### Edge Cases and Troubleshooting

#### Common Issues and Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| Hook not firing | Wrong matcher name | Check exact tool name (`Edit` not `edit`) |
| Hook blocks unexpectedly | Unintended exit code | Add `exit 0` at end of script |
| Permission denied | Script not executable | `chmod +x ~/.claude/hooks/script.sh` |
| jq not found | jq not installed | `brew install jq` or `apt install jq` |
| Slow response | Hook timeout | Move slow ops to background |
| $FILE empty | Wrong event type | $FILE only in PostToolUse for Edit/Write |
| Hook runs twice | Multiple matchers match | Use more specific matcher patterns |
| Unicode issues | Bad encoding in script | Add `export LANG=en_US.UTF-8` |

#### Hook Health Check Script

```bash
#!/bin/bash
# ~/.claude/hooks/validate-setup.sh
# Run this to validate your hook configuration

echo "=== Claude Code Hook Validation ==="
echo ""

# Check settings.json
SETTINGS_FILE="$HOME/.claude/settings.json"
if [ -f "$SETTINGS_FILE" ]; then
    echo "[OK] settings.json found"

    # Validate JSON
    if jq empty "$SETTINGS_FILE" 2>/dev/null; then
        echo "[OK] settings.json is valid JSON"

        # Check hooks section
        HOOKS=$(jq '.hooks' "$SETTINGS_FILE")
        if [ "$HOOKS" != "null" ]; then
            echo "[OK] hooks section found"

            # List configured hooks
            echo ""
            echo "Configured hooks:"
            jq -r '.hooks | keys[]' "$SETTINGS_FILE" | while read event; do
                echo "  - $event"
            done
        else
            echo "[WARN] No hooks section in settings.json"
        fi
    else
        echo "[ERROR] settings.json is not valid JSON"
    fi
else
    echo "[WARN] settings.json not found at $SETTINGS_FILE"
fi

echo ""

# Check hooks directory
HOOKS_DIR="$HOME/.claude/hooks"
if [ -d "$HOOKS_DIR" ]; then
    echo "[OK] hooks directory found"

    # Check each script
    echo ""
    echo "Hook scripts:"
    for script in "$HOOKS_DIR"/*.sh; do
        [ -f "$script" ] || continue
        NAME=$(basename "$script")

        if [ -x "$script" ]; then
            echo "  [OK] $NAME (executable)"
        else
            echo "  [ERROR] $NAME (not executable - run: chmod +x $script)"
        fi
    done
else
    echo "[INFO] hooks directory not found (optional)"
fi

echo ""

# Check required tools
echo "Required tools:"
for tool in jq curl; do
    if command -v $tool &>/dev/null; then
        echo "  [OK] $tool"
    else
        echo "  [WARN] $tool not found"
    fi
done

echo ""
echo "=== Validation Complete ==="
```

---

### Version Compatibility Notes

#### Hook Feature Availability by Version

| Feature | Claude Code Version | Notes |
|---------|---------------------|-------|
| Basic hooks | 1.0+ | Core functionality |
| Nested hooks format | 1.2+ | `hooks: [{ matcher, hooks: [] }]` |
| Multiple matchers | 1.2+ | Array of matchers |
| $EVENT_DATA | 1.3+ | Full JSON event data |
| SessionStart/End | 1.3+ | Session lifecycle |
| Notification event | 1.4+ | (if available) |
| filePattern matcher | 1.5+ | File extension filtering |

#### Legacy Configuration Migration

If upgrading from older format:

**Old format (pre-1.2):**
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "command": "prettier --write $FILE"
      }
    ]
  }
}
```

**New format (1.2+):**
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "prettier --write $FILE"
          }
        ]
      }
    ]
  }
}
```

Both formats may work, but the nested format is preferred for future compatibility.

---

### Additional Resources

#### Script Templates Directory Structure

```
~/.claude/
├── settings.json              # Main configuration
├── hooks/
│   ├── security-gate.sh       # PreToolUse security
│   ├── smart-format.sh        # PostToolUse formatting
│   ├── rich-notify.sh         # Notifications
│   ├── metrics.sh             # Observability
│   ├── session-start.sh       # SessionStart
│   ├── session-end.sh         # SessionEnd
│   ├── audit-file-access.sh   # File access logging
│   ├── validate-setup.sh      # Setup validation
│   └── test-hook.sh           # Hook testing utility
├── logs/
│   ├── session.log
│   ├── audit.log
│   ├── metrics.jsonl
│   └── debug/
└── hook-cache/                 # Cached lint results
```

#### Environment Variable Reference (Extended)

| Variable | Description | Available In | Example |
|----------|-------------|--------------|---------|
| `$EVENT_DATA` | Full JSON event blob | All events | See schemas above |
| `$TOOL_NAME` | Tool being used | Pre/PostToolUse | `Edit`, `Bash` |
| `$FILE` | Target file path | PostToolUse (Edit/Write) | `/path/to/file.ts` |
| `$PROJECT_NAME` | Current project name | All events | `my-project` |
| `$SESSION_ID` | Current session ID | All events | `abc123-def456` |
| `$WORKING_DIR` | Working directory | All events | `/Users/me/project` |
| `$PWD` | Current directory | Shell default | `/Users/me/project` |
| `$HOME` | User home directory | Shell default | `/Users/me` |
| `$USER` | Current username | Shell default | `me` |

---

### Deep Dive Summary

This expansion covered:

1. **Complete EVENT_DATA schemas** for each tool type
2. **Exit code behavior** and blocking patterns
3. **Advanced chaining patterns** including parallel execution and state sharing
4. **Timeout and caching** strategies for performance
5. **Comprehensive security hooks** with command blocking and auditing
6. **Rich notification patterns** with multi-channel support
7. **Monitoring and observability** with metrics and analytics
8. **Language-specific formatting** for 15+ file types
9. **Integration patterns** for Git, Docker, and CI/CD
10. **Debugging deep dive** with profiling and testing utilities
11. **Production-ready configurations** with full templates
12. **Edge cases and troubleshooting** guide
13. **Version compatibility** notes

These patterns extend beyond basic hook usage into production-grade automation systems.

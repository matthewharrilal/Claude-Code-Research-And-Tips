# Claude Code CLI (`claude -p`) Capability Map

**Version tested:** 2.1.63 (Claude Code)
**Binary location:** `/opt/homebrew/bin/claude`
**Date:** 2026-02-28

---

## 1. Print Mode (`-p` / `--print`) — Core Behavior

Print mode is the non-interactive execution mode. It:
- Accepts a prompt (inline argument or stdin pipe)
- Executes the full agentic loop (tool calls, file reads, edits, bash commands)
- Prints the result to stdout
- Exits with a return code

```bash
# Inline prompt
claude -p "What does auth.py do?"

# Piped input
cat error.log | claude -p "Explain these errors"

# Combined: piped content + prompt
cat file.txt | claude -p "Summarize this"
```

**Critical:** The workspace trust dialog is SKIPPED in `-p` mode. Only use in trusted directories.

**Note:** User-invocable skills (`/commit`, `/review-pr`) are NOT available in `-p` mode. Describe the task instead.

---

## 2. Complete Flag Reference (Print-Mode Relevant)

### 2.1 Output Format (`--output-format`)

| Format | Description | Use Case |
|--------|-------------|----------|
| `text` (default) | Plain text response | Simple scripting, human reading |
| `json` | Single JSON object with metadata | Programmatic parsing, session capture |
| `stream-json` | NDJSON (newline-delimited JSON) | Real-time streaming, agent chaining |

**JSON output structure:**
```json
{
  "type": "result",
  "subtype": "success",
  "is_error": false,
  "result": "The response text...",
  "session_id": "uuid-here",
  "duration_ms": 5432,
  "duration_api_ms": 4100,
  "num_turns": 3,
  "usage": { /* token counts, cost */ }
}
```

**Structured output with JSON Schema:**
```bash
claude -p "Extract function names from auth.py" \
  --output-format json \
  --json-schema '{"type":"object","properties":{"functions":{"type":"array","items":{"type":"string"}}},"required":["functions"]}'
```
- Schema-validated output appears in `structured_output` field
- The agent completes its full workflow FIRST, then the structured output is generated
- When combined with `stream-json`, the JSON only appears in the final `result.structured_output` (partial messages are natural language)

**Stream-JSON event types:**
```
{"type":"init","session_id":"abc123","timestamp":"..."}
{"type":"message","role":"assistant","content":[{"type":"text","text":"..."}]}
{"type":"tool_use","name":"Bash","input":{"command":"ls -la"}}
{"type":"tool_result","output":"total 64..."}
{"type":"result","status":"success","duration_ms":1234}
```

**Filtering streaming text with jq:**
```bash
claude -p "Write a poem" --output-format stream-json --verbose --include-partial-messages | \
  jq -rj 'select(.type == "stream_event" and .event.delta.type? == "text_delta") | .event.delta.text'
```

### 2.2 Input Format (`--input-format`)

| Format | Description |
|--------|-------------|
| `text` (default) | Standard text input |
| `stream-json` | NDJSON streaming input — process stays alive, multi-turn via stdin |

**Multi-turn persistent stream-json:**
When using `--input-format stream-json --output-format stream-json`, the process:
- Stays alive and holds conversation in memory
- System prompt loads ONCE
- Subsequent messages traverse stdin only
- Much more efficient than one-shot + resume (avoids re-sending full context)

**Stream chaining (pipeline pattern):**
```bash
claude -p --output-format stream-json "First task" | \
  claude -p --input-format stream-json --output-format stream-json "Process results" | \
  claude -p --input-format stream-json "Final report"
```

### 2.3 Model Selection (`--model`)

```bash
claude -p --model opus "complex task"
claude -p --model sonnet "simpler task"
claude -p --model haiku "classification task"
claude -p --model claude-sonnet-4-6 "specific version"
```

Aliases: `opus`, `sonnet`, `haiku` (resolve to latest versions).

### 2.4 Effort Level (`--effort`)

```bash
claude -p --effort low "Quick classification"
claude -p --effort medium "Standard task"   # Recommended for most automation
claude -p --effort high "Complex reasoning"  # Default
```

- `high`: Full reasoning, extended thinking when useful. Best quality.
- `medium`: Balanced speed/cost/quality. Recommended for agentic coding.
- `low`: Minimal reasoning, fastest. Good for classification, lookups.
- Currently supported on Opus 4.6. Controls thinking depth via adaptive thinking.

### 2.5 System Prompt Flags

| Flag | Behavior | Modes | Use Case |
|------|----------|-------|----------|
| `--system-prompt <text>` | **REPLACES** entire default prompt | Interactive + Print | Complete control |
| `--system-prompt-file <path>` | **REPLACES** with file contents | Print only | Version-controlled prompts |
| `--append-system-prompt <text>` | **APPENDS** to default prompt | Interactive + Print | Add rules, keep defaults |
| `--append-system-prompt-file <path>` | **APPENDS** file contents | Print only | Version-controlled additions |

**Critical for orchestration:**
- `--system-prompt` removes ALL default Claude Code instructions (tools, safety, etc.)
- `--append-system-prompt` is SAFER — preserves built-in capabilities
- `--system-prompt` and `--system-prompt-file` are mutually exclusive
- Append flags can combine with either replacement flag
- Default system prompt is ~3.2k tokens (1.6% of context window)

### 2.6 Tool Restriction Flags

**`--tools` — Restrict AVAILABLE tools:**
```bash
claude -p --tools "Bash,Edit,Read" "task"    # Only these 3 tools
claude -p --tools "" "task"                    # NO tools (pure reasoning)
claude -p --tools "default" "task"             # All tools (default)
```

**`--allowedTools` — Auto-approve specific tools (no permission prompt):**
```bash
claude -p --allowedTools "Bash(git diff *),Read,Edit" "Review staged changes"
```
- Uses permission rule syntax with glob patterns
- Space before `*` matters: `Bash(git diff *)` matches `git diff --stat` but NOT `git diff-index`
- Claude Code is aware of shell operators — `Bash(safe-cmd *)` won't allow `safe-cmd && rm -rf /`

**`--disallowedTools` — Explicitly deny tools:**
```bash
claude -p --disallowedTools "WebFetch,Agent(Explore)" "task"
```
- More reliable than `--allowedTools` for restriction
- Tools in deny list are removed from model context entirely

**Known limitation (GitHub issue #115, #12232):** `--allowedTools` does NOT reliably restrict built-in tools (Edit, Write, Bash). Claude can still use them even when not in the allowedTools list. Use `--disallowedTools` for reliable restriction, or `--tools` to control the available tool set.

### 2.7 Turn and Budget Limits

**`--max-turns <number>` — Limit agentic turns (print mode only):**
```bash
claude -p --max-turns 5 "Fix the bug"
```
- Each tool call = 1 turn
- Exits with error when limit reached
- No limit by default
- Budgets: simple tasks 2-4, multi-file 6-10, complex debugging 10-20, sub-agent workflows 40-200+

**`--max-budget-usd <amount>` — Cost ceiling (print mode only):**
```bash
claude -p --max-budget-usd 2.00 "Large refactoring task"
```
- Stops when API cost exceeds threshold

### 2.8 Session Management

**`--continue` / `-c` — Continue most recent conversation:**
```bash
claude -p "Review codebase for issues"
claude -p --continue "Now focus on the database queries"
claude -p --continue "Generate a summary"
```

**`--resume <session-id>` — Resume specific session:**
```bash
session_id=$(claude -p "Start review" --output-format json | jq -r '.session_id')
claude -p --resume "$session_id" "Continue that review"
```

**`--session-id <uuid>` — Use specific session ID:**
```bash
claude -p --session-id "550e8400-e29b-41d4-a716-446655440000" "task"
```

**`--fork-session` — Fork on resume (preserve original):**
```bash
claude -p --resume abc123 --fork-session "Try alternative approach"
```

**`--no-session-persistence` — Don't save session (print mode only):**
```bash
claude -p --no-session-persistence "Ephemeral task"
```
- Sessions not saved to disk, cannot be resumed
- Useful for stateless pipeline passes

### 2.9 Permission Modes (`--permission-mode`)

| Mode | Description |
|------|-------------|
| `default` | Prompts for permission on first tool use |
| `acceptEdits` | Auto-accepts file edits |
| `plan` | Analysis only — no file modifications or commands |
| `dontAsk` | Auto-denies unless pre-approved via rules |
| `bypassPermissions` | Skips ALL permission checks |

**For automation:**
```bash
claude -p --dangerously-skip-permissions "task"  # Bypass all checks
# OR
claude -p --permission-mode bypassPermissions "task"  # Same effect
```

### 2.10 Fallback Model (`--fallback-model`)

```bash
claude -p --fallback-model sonnet "task"
```
- Auto-fallback when primary model is overloaded (print mode only)
- Useful for reliability in automated pipelines

### 2.11 Custom Agents (`--agents`)

```bash
claude -p --agents '{
  "reviewer": {
    "description": "Expert code reviewer",
    "prompt": "You are a senior code reviewer...",
    "tools": ["Read", "Grep", "Glob", "Bash"],
    "model": "sonnet",
    "maxTurns": 10
  }
}' "Review the auth module"
```

Agent definition fields:
| Field | Required | Description |
|-------|----------|-------------|
| `description` | Yes | When to invoke the subagent |
| `prompt` | Yes | System prompt for subagent |
| `tools` | No | Array of allowed tools (inherits all if omitted) |
| `disallowedTools` | No | Array of denied tools |
| `model` | No | `sonnet`, `opus`, `haiku`, `inherit` (default: `inherit`) |
| `skills` | No | Array of skill names to preload |
| `mcpServers` | No | Array of MCP servers |
| `maxTurns` | No | Turn limit for subagent |

### 2.12 MCP Configuration (`--mcp-config`)

```bash
claude -p --mcp-config ./mcp.json "task"
claude -p --strict-mcp-config --mcp-config ./mcp.json "task"  # ONLY these MCP servers
```

### 2.13 Additional Working Directories (`--add-dir`)

```bash
claude -p --add-dir ../lib ../config "Analyze the full project"
```

### 2.14 Debug and Verbose (`--debug`, `--verbose`)

```bash
claude -p --verbose "task"                    # Full turn-by-turn output
claude -p --debug "api,hooks" "task"          # Debug specific categories
claude -p --debug-file /tmp/debug.log "task"  # Write debug to file
```

### 2.15 Miscellaneous

```bash
claude -p --disable-slash-commands "task"     # Disable all skills
claude -p --include-partial-messages "task"   # Stream partial chunks (requires stream-json)
claude -p --replay-user-messages "task"       # Echo user messages back (requires stream-json I/O)
claude -p --settings ./settings.json "task"   # Load additional settings
claude -p --setting-sources "user,project" "task"  # Control which settings load
```

---

## 3. Input Methods

### 3.1 Inline Prompt (Argument)
```bash
claude -p "Your prompt here"
```

### 3.2 Piped Input (stdin)
```bash
cat file.txt | claude -p "Analyze this"
echo "content" | claude -p "Process"
```

### 3.3 Combined (stdin + prompt argument)
```bash
cat code.py | claude -p "Review this code for security issues"
```
The piped content becomes part of the context, and the argument becomes the task instruction.

### 3.4 Heredoc Pattern
```bash
claude -p "$(cat <<'EOF'
Multi-line prompt here.
Can include special characters.
No variable expansion with single-quoted EOF.
EOF
)"
```

### 3.5 File-Based Prompt
```bash
claude -p --system-prompt-file ./my-prompt.txt "Execute the task"
claude -p --append-system-prompt-file ./rules.txt "Do the thing"
```

---

## 4. Output Extraction

### 4.1 Plain Text
```bash
result=$(claude -p "What is 2+2?")
```

### 4.2 JSON with jq
```bash
# Extract text result
claude -p "Summarize" --output-format json | jq -r '.result'

# Extract session ID
claude -p "Start" --output-format json | jq -r '.session_id'

# Extract structured output
claude -p "Extract functions" \
  --output-format json \
  --json-schema '{"type":"object","properties":{"fns":{"type":"array","items":{"type":"string"}}}}' \
  | jq '.structured_output'

# Extract cost
claude -p "task" --output-format json | jq '.usage'
```

### 4.3 Stream Processing
```bash
claude -p "Long task" --output-format stream-json --verbose --include-partial-messages | \
  while IFS= read -r line; do
    type=$(echo "$line" | jq -r '.type')
    case "$type" in
      "result") echo "DONE: $(echo "$line" | jq -r '.result')" ;;
      "tool_use") echo "TOOL: $(echo "$line" | jq -r '.name')" ;;
    esac
  done
```

---

## 5. Session Persistence and Chaining

### 5.1 Session ID Capture and Resume
```bash
# Start and capture session
sid=$(claude -p "Initialize project review" --output-format json | jq -r '.session_id')

# Continue with context
claude -p --resume "$sid" "Now check the tests"
claude -p --resume "$sid" "Generate final report"
```

### 5.2 Ephemeral (No Persistence)
```bash
claude -p --no-session-persistence "One-shot task"
```
- Fastest startup, no disk I/O for session files
- Cannot be resumed
- Ideal for stateless pipeline passes

### 5.3 Forking for Parallel Exploration
```bash
sid=$(claude -p "Analyze codebase" --output-format json | jq -r '.session_id')

# Fork into two parallel approaches
claude -p --resume "$sid" --fork-session "Try approach A" &
claude -p --resume "$sid" --fork-session "Try approach B" &
wait
```

### 5.4 Multi-Turn via Stream-JSON (Persistent Process)
```bash
# Process stays alive, multi-turn via stdin
claude -p --input-format stream-json --output-format stream-json
# Then send NDJSON messages to stdin
```
- System prompt loads ONCE
- Most token-efficient for multi-turn
- Avoids re-sending full context each turn

---

## 6. Token and Context Limits

### 6.1 Context Window
- Model context: 200k tokens (standard), 1M tokens (extended context variants)
- System prompt overhead: ~3.2k tokens (default) + ~11.6k tokens (system tools)
- CLAUDE.md files, memory files, and custom agents consume additional context

### 6.2 Client-Side Prompt Length Limit
- **Known issue (GitHub #12312):** CLI has a HARDCODED client-side validation limit
- Rejects prompts BEFORE sending to API (`duration_api_ms: 0`)
- Limit is significantly LOWER than model capabilities (~120k tokens rejected on 200k model)
- NOT configurable via settings or environment variables
- Workaround: None reliably works. Split large inputs across multiple passes.

### 6.3 Output Token Limit
- Configurable via `CLAUDE_CODE_MAX_OUTPUT_TOKENS` environment variable
- Validated against per-model upper limit

### 6.4 Thinking Token Budget
- `MAX_THINKING_TOKENS` environment variable
- If > 0, enables thinking with fixed budget

---

## 7. Exit Codes and Error Handling

### 7.1 Exit Codes
| Code | Meaning |
|------|---------|
| `0` | Success |
| `1` | General failure (auth issues, config errors, dependency problems) |
| `2` | Blocking error (used by hooks to halt actions) |

### 7.2 Error Response Format (JSON)
```json
{
  "type": "result",
  "subtype": "success",
  "is_error": true,
  "duration_ms": 1024,
  "duration_api_ms": 0,
  "num_turns": 1,
  "result": "Prompt is too long"
}
```
Note: `is_error: true` can appear even with `subtype: "success"` — always check `is_error`.

### 7.3 Max-Turns Exceeded
- Exits with error when turn limit reached
- Error message indicates the limit was hit

### 7.4 Max-Budget Exceeded
- Stops execution when API cost exceeds threshold
- Returns partial results if any work was completed

### 7.5 Permission Denied (Print Mode)
- Claude continues consuming tokens even when lacking required permissions
- Does NOT fail gracefully — attempts operations and returns copy/paste instructions instead
- **Mitigation:** Use `--dangerously-skip-permissions` or pre-configure `--allowedTools`

---

## 8. Concurrency and Parallel Execution

### 8.1 Parallel `claude -p` Instances
Multiple `claude -p` processes can run simultaneously. Each is an independent process with its own:
- Session
- Context window
- Working directory
- Tool permissions

### 8.2 Rate Limiting
API rate limits apply across ALL concurrent instances sharing the same account:

| Tier | Requests/min | Tokens/min | Daily Tokens |
|------|-------------|-----------|--------------|
| Free | 5 | 40,000 | 300,000 |
| Build | 50 | 100,000 | 5,000,000 |
| Scale | 1,000 | 2,000,000 | 100,000,000 |

**5 concurrent agents can exhaust Free tier in 60 seconds.**

### 8.3 Concurrency Strategies
1. **Sequential with delay:** 1.2s between requests. 100% success, slowest.
2. **Token bucket:** Capacity-based throttling. 100% success, ~42% faster than sequential.
3. **Adaptive concurrency:** Start at 5 concurrent, increase on success, halve on 429. Self-optimizing.

### 8.4 Rate Limit Recovery
- **Exponential backoff:** 1s, 2s, 4s, 8s, 16s with ±30% jitter
- **Circuit breaker:** Open after 5 failures, retry after 60s
- **Response headers:** `anthropic-ratelimit-requests-remaining`, `anthropic-ratelimit-tokens-remaining`, `anthropic-ratelimit-requests-reset`

### 8.5 Git Worktrees for Isolation
```bash
claude -p -w feature-auth "Fix auth bug"    # Creates isolated worktree
claude -p -w feature-db "Fix DB queries"     # Separate worktree
```
Each worktree provides filesystem isolation for parallel agents editing files.

---

## 9. Token Optimization for Subprocess Wrappers

### 9.1 The Problem
Each `claude -p` invocation re-reads global settings, plugins, MCP schemas, CLAUDE.md files. A single subprocess turn can consume ~50k tokens BEFORE any actual work.

### 9.2 4-Layer Isolation Strategy
1. **Scoped working directory:** Set subprocess `cwd` to dedicated workspace (prevents loading `~/CLAUDE.md`)
2. **Git boundary:** Create `.git/HEAD` in workspace (blocks upward CLAUDE.md traversal)
3. **Empty plugin directory:** `--plugin-dir /empty/dir` (eliminates plugin skill injection)
4. **Setting sources:** `--setting-sources project,local` (excludes user-level settings)

### 9.3 Token Savings
Before isolation: ~50k tokens per subprocess turn (250k across 5 turns)
After isolation: ~5k tokens per subprocess turn (25k across 5 turns) — **10x reduction**

### 9.4 Additional Optimization
- Use `--tools` to inject only task-relevant tool descriptions
- Use `--system-prompt` (not `--append-system-prompt`) for minimal prompts
- Use `--no-session-persistence` for stateless passes
- Disable telemetry: `DISABLE_TELEMETRY=1 DISABLE_ERROR_REPORTING=1`

---

## 10. Environment Variables for Automation

### 10.1 Context and Token Control
| Variable | Description | Default |
|----------|-------------|---------|
| `CLAUDE_CODE_MAX_OUTPUT_TOKENS` | Max output tokens per response | Model-dependent |
| `MAX_THINKING_TOKENS` | Max tokens for extended thinking | Adaptive |
| `CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS` | Max tokens for Read tool | Model-dependent |
| `MAX_MCP_OUTPUT_TOKENS` | Max MCP tool output tokens | 25,000 |
| `CLAUDE_CODE_BLOCKING_LIMIT_OVERRIDE` | Override blocking token limit | Model-dependent |

### 10.2 Timeouts
| Variable | Description | Default |
|----------|-------------|---------|
| `API_TIMEOUT_MS` | API request timeout | 600,000 (10 min) |
| `CLAUDE_CODE_GLOB_TIMEOUT_SECONDS` | Glob operation timeout | 20s (60s on WSL) |
| `MCP_TIMEOUT` | MCP server connection timeout | 30,000 (30s) |
| `MCP_TOOL_TIMEOUT` | MCP tool execution timeout | Varies |

### 10.3 Session and Compaction
| Variable | Description |
|----------|-------------|
| `DISABLE_COMPACT` | Disable all context compaction |
| `DISABLE_AUTO_COMPACT` | Disable only auto-compaction |
| `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` | Override auto-compaction trigger % (0-100) |
| `CLAUDE_CODE_SKIP_PRECOMPACT_LOAD` | Optimize large session file loading |

### 10.4 Automation-Friendly
| Variable | Description |
|----------|-------------|
| `DISABLE_TELEMETRY=1` | Disable analytics |
| `DISABLE_ERROR_REPORTING=1` | Disable Sentry |
| `DISABLE_AUTOUPDATER=1` | Prevent auto-updates |
| `CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY=1` | Disable quality surveys |
| `CLAUDE_CODE_DISABLE_TERMINAL_TITLE=1` | Disable terminal title updates |
| `CLAUDE_CODE_SIMPLE=1` | Minimal mode: only Bash/file tools, no MCP/hooks |
| `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1` | Bundle: disables updater, bugs, errors, telemetry |

### 10.5 Streaming and Output
| Variable | Description |
|----------|-------------|
| `CLAUDE_CODE_STREAMING_TEXT` | Enable streaming text display |
| `CLAUDE_CODE_EXIT_AFTER_STOP_DELAY` | Delay in ms before exiting after stop |
| `CLAUDE_CODE_EAGER_FLUSH` | Eagerly flush session data (useful for SDK mode) |

### 10.6 Advanced/Internal
| Variable | Description |
|----------|-------------|
| `CLAUDE_CODE_EXTRA_BODY` | Additional JSON merged into API request bodies |
| `CLAUDE_CODE_ENTRYPOINT` | Application entrypoint identifier |
| `CLAUDE_CODE_ENVIRONMENT_KIND` | Environment: `byoc`, `anthropic_cloud`, `bridge` |
| `CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR=1` | Reset to project dir after each bash command |
| `CLAUDE_ENV_FILE` | Path to shell script for persistent env setup |

---

## 11. Quirks, Limitations, and Gotchas

### 11.1 Prompt Size Limit
- Client-side validation rejects prompts below model context limit
- ~120k tokens triggers "Prompt is too long" even on 200k context models
- No environment variable or setting to override
- Once triggered in a session, ALL follow-up prompts fail (session becomes unrecoverable)

### 11.2 Permission Handling in Print Mode
- Claude does NOT fail gracefully when lacking permissions
- Continues consuming tokens attempting impossible operations
- Returns copy/paste code instead of failing
- **Always use `--dangerously-skip-permissions` for unattended automation**

### 11.3 Tool Restriction Fragility
- `--allowedTools` does NOT reliably restrict built-in tools
- Use `--tools` to control the available tool SET
- Use `--disallowedTools` for reliable DENIAL
- Three different mechanisms, each with different semantics

### 11.4 CLAUDE.md Traversal
- Claude Code walks UP directory trees to find CLAUDE.md files
- In subprocess wrappers, this can load unintended instructions
- Mitigation: create `.git/HEAD` in subprocess working directory to block traversal

### 11.5 Session Files
- Sessions are stored as `.jsonl` files
- Known bug: duplicate entries in session files when using `stream-json` input format (GitHub #5034)
- Session files can grow very large for long conversations

### 11.6 Costs Not Visible Per-Turn
- Usage reported as dollar amounts in Claude Code
- Anthropic console reports in tokens
- No unified token-in/token-out visibility per turn

### 11.7 `--max-turns` Exit Behavior
- Exits with error, not with partial results gracefully
- Cannot distinguish "completed in N turns" from "ran out of turns"
- Check `num_turns` in JSON output vs your `--max-turns` value

### 11.8 Auto-Compaction
- At ~80% context fill, Claude Code auto-compacts conversation history
- Can lose nuance from earlier messages
- Disable with `DISABLE_AUTO_COMPACT=1` for deterministic behavior
- In `-p` mode with `--no-session-persistence`, compaction is less relevant (short sessions)

### 11.9 Working Directory
- CWD is captured at process start
- `--add-dir` extends accessible directories but does NOT change CWD
- Subprocesses spawned by Bash tool inherit the CWD

---

## 12. Optimal Configuration for Deterministic Orchestration

### 12.1 Minimal Stateless Pass (Recommended for Pipeline)
```bash
claude -p \
  --no-session-persistence \
  --dangerously-skip-permissions \
  --model opus \
  --effort medium \
  --max-turns 30 \
  --max-budget-usd 5.00 \
  --output-format json \
  --tools "Read,Write,Edit,Bash,Glob,Grep" \
  --disable-slash-commands \
  --append-system-prompt "$(cat pass-specific-prompt.txt)" \
  "$(cat task-prompt.txt)"
```

### 12.2 Isolation for Subprocess Wrapper
```bash
# Create isolated workspace
mkdir -p /tmp/pipeline-workspace/.git
echo "ref: refs/heads/main" > /tmp/pipeline-workspace/.git/HEAD
mkdir -p /tmp/pipeline-workspace/.claude

# Empty settings to prevent inheritance
echo '{}' > /tmp/pipeline-workspace/.claude/settings.json

# Run with full isolation
DISABLE_TELEMETRY=1 \
DISABLE_AUTO_COMPACT=1 \
DISABLE_AUTOUPDATER=1 \
CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1 \
claude -p \
  --no-session-persistence \
  --dangerously-skip-permissions \
  --setting-sources "project,local" \
  --disable-slash-commands \
  --tools "Read,Write,Edit,Bash" \
  --model sonnet \
  --max-turns 20 \
  --output-format json \
  --system-prompt "$(cat minimal-system-prompt.txt)" \
  "$(cat task.txt)"
```

### 12.3 Multi-Turn via Session Resume (When Context Accumulation Matters)
```bash
# Pass 1: Content analysis
sid=$(claude -p \
  --dangerously-skip-permissions \
  --output-format json \
  --model opus \
  "Analyze the content in content-map.md" \
  | jq -r '.session_id')

# Pass 2: Build (continues with full context from Pass 1)
claude -p \
  --resume "$sid" \
  --dangerously-skip-permissions \
  --output-format json \
  "Now build the HTML page based on your analysis"
```

### 12.4 Parallel Agents with Rate Limiting
```bash
# Run 3 PA auditors in parallel with staggered starts
for i in 1 2 3; do
  sleep $((i * 2))  # 2s stagger
  claude -p \
    --no-session-persistence \
    --dangerously-skip-permissions \
    --model sonnet \
    --max-turns 15 \
    --output-format json \
    --tools "Read,Glob,Grep" \
    --append-system-prompt "$(cat pa-auditor-${i}-prompt.txt)" \
    "$(cat pa-task.txt)" \
    > pa-auditor-${i}-result.json &
done
wait
```

---

## 13. Key Decisions for Pipeline Architecture

### 13.1 One-Shot vs Session Resume vs Stream-JSON

| Pattern | Token Efficiency | Complexity | Best For |
|---------|-----------------|------------|----------|
| One-shot (`--no-session-persistence`) | Low (full context each time) | Lowest | Independent passes |
| Session resume (`--resume`) | Medium (saves replaying context) | Medium | Sequential dependent passes |
| Stream-JSON persistent | Highest (system prompt once) | Highest | Many rapid turns |

**Recommendation for 68-80 pass pipeline:** Use ONE-SHOT with `--no-session-persistence` for most passes. Each pass is independent with its own system prompt and file context. Session resume only when a pass MUST see the prior pass's reasoning (not just its file output).

### 13.2 `--system-prompt` vs `--append-system-prompt`

For maximum control and token efficiency in a pipeline:
- Use `--system-prompt` to replace the entire default prompt
- This saves ~3.2k tokens (default system prompt) + removes default instructions that may conflict with pipeline-specific behavior
- Trade-off: lose built-in safety rails and tool usage instructions
- If using `--tools` to restrict tools, the missing tool instructions matter less

### 13.3 Tool Restriction Strategy

For pipeline passes:
1. **Builder pass:** `--tools "Read,Write,Edit,Bash,Glob,Grep"` (needs file creation)
2. **Verifier pass:** `--tools "Read,Glob,Grep,Bash"` (read-only + gate runner)
3. **PA auditor pass:** `--tools "Read,Glob,Grep"` (read-only analysis)
4. **Planner pass:** `--tools "Read,Write,Glob,Grep"` (needs to write plans)

### 13.4 Model Selection per Pass Type

| Pass Type | Recommended Model | Rationale |
|-----------|------------------|-----------|
| Content analysis | Opus | Requires deep understanding |
| Planning/TC brief | Opus | Creative composition |
| HTML building | Opus | Quality-critical (Sonnet produces "flat" pages) |
| Gate verification | Sonnet | Mechanical, binary checks |
| PA auditing | Opus | Perceptual judgment required |
| Weaver synthesis | Opus | Integration across 9 auditor reports |
| Fix application | Sonnet | Mechanical edits |

---

## 14. Sources

- [CLI Reference - Official Docs](https://code.claude.com/docs/en/cli-reference)
- [Run Claude Code Programmatically (Headless)](https://code.claude.com/docs/en/headless)
- [Configure Permissions](https://code.claude.com/docs/en/permissions)
- [Session Management - Agent SDK](https://platform.claude.com/docs/en/agent-sdk/sessions)
- [Stream-JSON Chaining - Claude Flow Wiki](https://github.com/ruvnet/claude-flow/wiki/Stream-Chaining)
- [Print Mode Use Cases - GitHub Issue #762](https://github.com/anthropics/claude-code/issues/762)
- [Prompt Too Long Bug - GitHub Issue #12312](https://github.com/anthropics/claude-code/issues/12312)
- [Subprocess Token Waste](https://dev.to/jungjaehoon/why-claude-code-subagents-waste-50k-tokens-per-turn-and-how-to-fix-it-41ma)
- [Multi-Agent Rate Limits Playbook](https://claudecodeplugins.io/playbooks/01-multi-agent-rate-limits/)
- [Claude Code Environment Variables Gist](https://gist.github.com/unkn0wncode/f87295d055dd0f0e8082358a0b5cc467)
- [Claude Code Settings](https://code.claude.com/docs/en/settings)
- [Effort Parameter](https://platform.claude.com/docs/en/build-with-claude/effort)

---

## 15. Appendix: Complete Built-In Tool Names

The following tool names can be used with `--tools`, `--allowedTools`, and `--disallowedTools`:

| Tool | Function |
|------|----------|
| `Bash` | Execute shell commands |
| `Read` | Read file contents |
| `Write` | Create/overwrite files |
| `Edit` | Modify existing files (find-and-replace) |
| `Glob` | Find files by pattern |
| `Grep` | Search file contents |
| `WebFetch` | Fetch web content |
| `WebSearch` | Search the web |
| `NotebookEdit` | Edit Jupyter notebooks |
| `Agent(...)` | Invoke subagents (e.g., `Agent(Explore)`, `Agent(Plan)`) |
| `mcp__*` | MCP-provided tools (e.g., `mcp__playwright__browser_click`) |
| `TaskCreate` | Create tasks |
| `TaskUpdate` | Update task status |
| `TaskGet` | Get task details |
| `TaskList` | List all tasks |
| `SendMessage` | Send messages to agent teammates |
| `Skill` | Execute skills |
| `EnterWorktree` | Create git worktree |

**Note:** The `@dhasandev` article referenced in the task brief could not be found through extensive web searching. The closest match is the subprocess token optimization article by @jungjaehoon on dev.to, which covers wrapping Claude CLI for agentic apps. The specific `@dhasandev` reference may be to a private, deleted, or differently-named resource.

---

## 16. Agent SDK as Alternative to CLI (Supplementary Research)

The Python/TypeScript Agent SDK offers lower-level control compared to `claude -p`:

### 16.1 SDK vs CLI Comparison

| Feature | CLI (`claude -p`) | Agent SDK (Python/TS) |
|---------|-------------------|----------------------|
| CLAUDE.md loading | Automatic (always) | Opt-in via `settingSources` |
| System prompt | String replacement/append | Object with preset + append |
| Streaming | NDJSON stdout | Native async iterators |
| Tool approval | Flags or bypass | Programmatic callbacks |
| Image input | Not supported in `-p` | Supported in streaming mode |
| Session forking | `--fork-session` flag | `forkSession` option |
| Structured output | `--json-schema` | Same, via options |

### 16.2 SDK CLAUDE.md Loading is Opt-In

Critical difference: the `claude_code` system prompt preset does NOT automatically load CLAUDE.md. You must explicitly set `settingSources: ['project']`. This means the SDK avoids the ~50K token overhead by default.

```typescript
// CLAUDE.md NOT loaded (minimal overhead)
query({ prompt: "task", options: { systemPrompt: "minimal" } })

// CLAUDE.md loaded (opt-in)
query({ prompt: "task", options: {
  systemPrompt: { type: "preset", preset: "claude_code" },
  settingSources: ["project"]
}})
```

### 16.3 Streaming Input Mode (SDK)

The SDK's streaming input is the recommended approach for multi-turn conversations:
- Process stays alive as a long-lived session
- Supports image attachments in messages
- Supports message queueing and interruption
- Supports lifecycle hooks
- Context persists naturally across turns

### 16.4 SDK Streaming Limitations

- **Extended thinking**: When `maxThinkingTokens` is explicitly set, `StreamEvent` messages are NOT emitted. Only complete messages are received.
- **Structured output**: JSON result appears only in the final `ResultMessage.structured_output`, not as streaming deltas.

---

## 17. Permission System Deep Dive (Supplementary)

### 17.1 Rule Evaluation Order

Rules are evaluated: **deny -> ask -> allow**. The first matching rule wins. Deny rules ALWAYS take precedence.

### 17.2 Read/Edit Rule Syntax (gitignore-based)

| Pattern | Meaning | Example |
|---------|---------|---------|
| `//path` | Absolute path from filesystem root | `Read(//Users/alice/secrets/**)` |
| `~/path` | Path from home directory | `Read(~/Documents/*.pdf)` |
| `/path` | Relative to PROJECT ROOT | `Edit(/src/**/*.ts)` |
| `path` or `./path` | Relative to CURRENT DIRECTORY | `Read(*.env)` |

Warning: `/Users/alice/file` is NOT absolute -- it's relative to project root. Use `//Users/alice/file` for true absolute paths.

`*` matches within a single directory; `**` matches recursively across directories.

### 17.3 Task/Subagent Control

```bash
# Deny specific subagent types
claude -p --disallowedTools "Task(Explore)" "Task(Plan)" "Only use basic tools"
```

### 17.4 `--permission-prompt-tool`

Undocumented in help but present in official docs: delegates permission prompts to an MCP tool in non-interactive mode.

```bash
claude -p --permission-prompt-tool mcp_auth_tool "task"
```

---

## 18. Stream-JSON Input Protocol Detail (Supplementary)

### 18.1 Input Message Format

When using `--input-format stream-json`, messages sent to stdin must be NDJSON:

```json
{"type":"user","message":{"role":"user","content":"Your message text"},"session_id":"abc123","parent_tool_use_id":null}
```

### 18.2 Known Bugs

1. **Duplicate entries** (GitHub #5034): When using `stream-json` input for multi-turn conversations, each subsequent message causes previous conversation history to be duplicated in the session `.jsonl` file.

2. **Input hang** (GitHub #3187): `stream-json` input mode can hang under certain conditions.

3. **Clean JSON required**: Malformed JSON input breaks the entire stream chain. No graceful error recovery.

### 18.3 Stream Event Reference (Output)

| Event Type | Description |
|------------|-------------|
| `message_start` | Start of a new message |
| `content_block_start` | Start of text or tool_use block |
| `content_block_delta` | Incremental text or tool input |
| `content_block_stop` | End of content block |
| `message_delta` | Message-level updates (stop reason, usage) |
| `message_stop` | End of message |

### 18.4 `--replay-user-messages`

Only works with both `--input-format stream-json` AND `--output-format stream-json`. Re-emits user messages from stdin back on stdout for acknowledgment -- useful for bidirectional protocol synchronization.

---

## 19. Output Style System (Supplementary)

Output styles are persistent markdown files that modify Claude's system prompt. Relevant for orchestration because they provide another mechanism for per-pass behavior control:

- **Location:** `~/.claude/output-styles/` (user-level) or `.claude/output-styles/` (project-level)
- **Format:** Markdown with YAML frontmatter (`name`, `description`)
- **Loaded when:** `settingSources` includes `user` or `project`
- **Activation:** `/output-style [name]` in interactive mode, or via settings

For deterministic orchestration, `--append-system-prompt` is more explicit and controllable than output styles.

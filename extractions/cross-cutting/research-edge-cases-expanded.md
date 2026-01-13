# Claude Code Edge Cases, Failure Modes, and Anti-Patterns

**Research Date:** 2026-01-09
**Research Status:** Comprehensive compilation from GitHub issues, community reports, official documentation, and power user experiences
**Purpose:** Exhaustive reference for avoiding pitfalls, debugging issues, and recovering from failures

---

## Table of Contents

1. [Critical Failure Modes](#critical-failure-modes)
2. [Security Incidents and Vulnerabilities](#security-incidents)
3. [Context Window Overflow](#context-window-overflow)
4. [Agent Infinite Loops](#infinite-loops)
5. [File Corruption Incidents](#file-corruption)
6. [Platform-Specific Issues](#platform-specific)
7. [Version-Specific Bugs](#version-specific)
8. [Anti-Patterns That Hurt Productivity](#anti-patterns)
9. [Misleading Advice That Doesn't Work](#misleading-advice)
10. [When NOT to Use Claude Code](#when-not-to-use)
11. [Recovery Strategies](#recovery-strategies)
12. [Debugging Techniques](#debugging-techniques)
13. [Performance Degradation Causes](#performance-degradation)
14. [Common Configuration Mistakes](#configuration-mistakes)
15. [Integration Failures](#integration-failures)

---

<a name="critical-failure-modes"></a>
# Section 1: Critical Failure Modes

## 1.1 GitHub Issue Tracker Analysis (Live Issues as of January 2026)

### Source
- **URL:** https://github.com/anthropics/claude-code/issues
- **Total Open Issues:** 4,677
- **Active Pull Requests:** 103

### Critical Security Issues

#### Path-based Permission Rules Bypass (#17192)
**Severity:** Critical
**Description:** Permission rules fail due to undocumented bypass mechanism.
**Impact:** Claude can access files outside of designated safe paths.
**Status:** Open
**Workaround:** Use explicit deny lists and audit all file operations.

#### Destructive Git Operations (#17190)
**Severity:** Critical
**Description:** Uses `git reset --hard` instead of safe `git checkout` for rollbacks.
**Impact:** Can permanently destroy uncommitted work.
**Status:** Open
**Workaround:**
```bash
# Before any Claude Code session:
git stash push -m "pre-claude-backup"
# Or work on a dedicated branch
git checkout -b claude-work
```

### Authentication/Session Issues

#### Excessive Re-authentication (#17189)
**Severity:** High
**Description:** Token/session expiration too frequent, requiring constant re-login.
**Impact:** Workflow interruption, especially during long autonomous runs.
**Workaround:** Use API key authentication instead of OAuth for automation.

#### Inconsistent Token Limit Status (#17193)
**Severity:** Medium
**Description:** Token limit status and reset time display inconsistencies.
**Impact:** Unexpected usage limit blocks.

### Core Functionality Bugs

#### Memory Leak/Performance Issue (#17194)
**Platform:** Linux
**Severity:** High
**Description:** Memory-related performance degradation during long sessions.
**Impact:** Sessions become unusable after extended use.
**Workaround:**
- Reset sessions every 2-3 hours
- Monitor memory with `htop` or `top`
- Use `/compact` before memory becomes critical

#### Plugin Installation Conflict (#17186)
**Platform:** macOS
**Severity:** Medium
**Description:** Same plugin installed locally blocks installation in other projects.
**Workaround:** Uninstall plugin globally before per-project install.

#### Environment Variable Expansion Failure (#17182)
**Platform:** Linux
**Severity:** Medium
**Description:** Environment variables expand to empty strings in piped commands.
**Workaround:** Export variables explicitly before Claude Code session.

---

## 1.2 Silent Failure Patterns

### File Writes That Don't Persist
**Symptom:** Claude reports writing a file, but changes aren't saved.
**Causes:**
1. Disk full
2. Permission denied (but error swallowed)
3. Path doesn't exist
4. File system mounted read-only

**Detection:**
```bash
# Verify file after Claude edit
cat -n file.ts | head -20
git diff file.ts
```

### Partial Code Generation
**Symptom:** Claude generates incomplete code (truncated functions, missing imports).
**Causes:**
1. Context window pressure
2. Max tokens limit hit
3. Response streaming interrupted

**Prevention:**
- Use Claude HUD to monitor context
- Request smaller chunks of code
- Verify completeness before proceeding

### Test Passes That Shouldn't
**Symptom:** Claude reports tests pass, but tests are actually broken or not running.
**Causes:**
1. Test framework not installed
2. Wrong test command
3. Tests running in wrong directory
4. Exit code ignored

**Prevention:**
```bash
# Always verify manually after Claude reports success
npm test 2>&1 | tail -20
echo "Exit code: $?"
```

---

<a name="security-incidents"></a>
# Section 2: Security Incidents and Vulnerabilities

## 2.1 Known Security Issues

### OAuth redirect_uri with Spaces (#17176)
**Issue:** Authorization fails when redirect_uri contains spaces.
**Risk:** Authentication bypass potential in edge cases.
**Status:** Open

### Path Traversal Risks
**Issue:** Claude can be prompted to access files outside project directory.
**Mitigation:**
```json
{
  "permissions": {
    "paths": {
      "deny": ["../**", "/etc/**", "~/.ssh/**", "~/.aws/**"]
    }
  }
}
```

### Credential Exposure in Context
**Issue:** API keys, passwords, and tokens can leak into conversation context.
**Prevention:**
- Never cat .env files in Claude Code
- Use .claudeignore for sensitive files
- Wrap sensitive operations in subagents that don't return full output

```gitignore
# .claudeignore
.env
.env.*
*.pem
*.key
credentials.json
secrets/
```

## 2.2 Prompt Injection Risks

### From External Content
**Risk:** Malicious content in files, URLs, or database queries can inject prompts.
**Example Scenarios:**
1. Claude reads a README with hidden instructions
2. Web fetch retrieves page with prompt injection
3. Database query returns malicious content

**Mitigation:**
- Review external content before Claude processes it
- Use read-only mode for untrusted sources
- Validate output before execution

### Self-Referential Attacks
**Risk:** Claude modifying its own instructions (CLAUDE.md, commands).
**Prevention:**
- Make CLAUDE.md read-only: `chmod 444 CLAUDE.md`
- Version control all configuration files
- Review diffs before committing

## 2.3 Dangerous Command Patterns

### Commands to NEVER Whitelist
```bash
# Destructive file operations
rm -rf
rm -r
find . -delete

# Git destruction
git push --force
git reset --hard
git clean -fd

# System modification
sudo *
chmod -R 777
chown -R

# Network attacks
curl | bash
wget -O- | sh
```

### Safe Permission Configuration
```json
{
  "permissions": {
    "commands": {
      "git status": "allow-always",
      "git diff": "allow-always",
      "git log": "allow-always",
      "npm test": "allow-always",
      "npm run build": "allow-always",
      "npm run lint": "allow-always"
    },
    "blockedPatterns": [
      "rm -rf",
      "sudo",
      "chmod 777",
      "git push --force",
      "git reset --hard"
    ]
  }
}
```

---

<a name="context-window-overflow"></a>
# Section 3: Context Window Overflow

## 3.1 Symptoms of Context Exhaustion

### Warning Signs
1. **Quality Degradation:** Responses become repetitive or contradictory
2. **Lost Instructions:** CLAUDE.md directives ignored
3. **Amnesia:** Claude forgets recent work within same session
4. **Truncated Outputs:** Code gets cut off mid-function
5. **Hallucinated Files:** Claude references files that don't exist

### Detection Methods
```bash
# Use Claude HUD plugin
/plugin install claude-hud

# Sample output when context is critical:
# [Opus 4.5] 87% | WARNING: Context nearly full
```

## 3.2 Context Overflow Causes

### Anti-Pattern: Reading Entire Codebase
**Problem:** Asking Claude to "read all the files" or "understand the whole project."
**Impact:** Fills context with thousands of tokens immediately.
**Solution:**
```markdown
# Instead of:
"Read all the files in src/ to understand the architecture"

# Do:
"Read src/index.ts and src/config.ts to understand the entry point"
```

### Anti-Pattern: Growing Conversation
**Problem:** Long conversations with iterative debugging accumulate tokens.
**Solution:**
1. Use `/compact` before 70% context
2. Start new sessions for unrelated tasks
3. Use subagents to isolate expensive operations

### Anti-Pattern: Including Build Outputs
**Problem:** node_modules, dist/, .next/ in context.
**Solution:**
```gitignore
# .claudeignore
node_modules/
dist/
build/
.next/
.cache/
*.log
coverage/
```

## 3.3 Recovery From Context Overflow

### Immediate Recovery
```bash
# Compact context
/compact

# If too far gone, reset
/reset

# Start fresh session with specific focus
claude "Focus only on src/auth/ - implement OAuth flow"
```

### Prevention Strategy
1. Monitor with Claude HUD
2. Compact at 60-70% usage
3. Use subagents for exploration
4. Keep CLAUDE.md concise (under 500 tokens)
5. Use .claudeignore aggressively

---

<a name="infinite-loops"></a>
# Section 4: Agent Infinite Loops

## 4.1 Loop Patterns

### The Verification Loop
**Pattern:** Claude runs tests, finds failure, makes change, tests fail differently, repeat.
**Cause:** Fundamental approach wrong, not just implementation details.
**Detection:** Same file edited 5+ times without progress.
**Break:** `Ctrl+C` and rethink approach at higher level.

### The Exploration Loop
**Pattern:** Claude searches for file, doesn't find it, searches again with different pattern.
**Cause:** File doesn't exist or is in unexpected location.
**Detection:** Multiple grep/glob calls with no results.
**Break:** Explicitly tell Claude the file doesn't exist.

### The Permission Loop
**Pattern:** Claude attempts action, denied, attempts slightly different action.
**Cause:** Permission configuration too restrictive for task.
**Fix:** Review and adjust permissions, or use `/permissions` UI.

## 4.2 Ralph Loop Runaway

### Problem
Ralph Wiggum loops designed for persistence can run indefinitely if completion promise never found.

### Prevention
```bash
# Always set maximum iterations
./ralph.sh 25  # Max 25 iterations

# Include timeout
timeout 3600 ./ralph.sh 50  # 1 hour max
```

### Detection
```bash
# Monitor iteration count
tail -f progress.txt | grep "Iteration"

# Watch for token spend
# Cost can hit $100+ if unchecked
```

## 4.3 Breaking Out of Loops

### Manual Intervention
```bash
# Interrupt current operation
Ctrl+C

# Harder interrupt
Ctrl+\

# Kill from another terminal
pkill -f claude
```

### Graceful Exit
```bash
# Add to progress.txt
echo "PROMISE COMPLETE HERE" >> progress.txt

# Or touch completion file
touch .claude-complete
```

---

<a name="file-corruption"></a>
# Section 5: File Corruption Incidents

## 5.1 Known Corruption Patterns

### Partial Write Corruption
**Scenario:** Claude starts writing file, session interrupted.
**Result:** File contains partial content, syntax invalid.
**Prevention:** Always commit before long Claude operations.
**Recovery:** `git checkout -- file.ts`

### Encoding Corruption
**Scenario:** Claude writes file with wrong encoding.
**Result:** UTF-8 BOM issues, mojibake in strings.
**Detection:** `file -I filename.ts`
**Recovery:** `iconv -f UTF-16 -t UTF-8 file.ts > file_fixed.ts`

### Merge Conflict Injection
**Scenario:** Claude writes conflict markers into code.
**Result:** `<<<<<<<`, `=======`, `>>>>>>>` in source files.
**Detection:** `grep -r "<<<<<<" src/`
**Recovery:** Manually remove markers or revert.

## 5.2 Prevention Strategies

### Git-Based Protection
```bash
# Before any Claude session
git stash push -m "pre-claude"

# Or work on branch
git checkout -b claude-session-$(date +%Y%m%d-%H%M%S)

# After successful work
git add -p  # Review each hunk
git commit -m "Claude work - verified"
```

### File Backup Hook
```bash
#!/bin/bash
# ~/.claude/hooks/backup-before-write.sh
cp "$FILE" "$FILE.bak-$(date +%s)" 2>/dev/null || true
```

### Verification After Edit
Always verify Claude's edits:
```bash
# Check syntax
npx tsc --noEmit

# Check file structure
head -20 file.ts
tail -20 file.ts

# Compare to original
git diff file.ts
```

---

<a name="platform-specific"></a>
# Section 6: Platform-Specific Issues

## 6.1 macOS Issues

### Plugin Installation Conflict (#17186)
**Issue:** Plugin installed locally blocks global installation.
**Workaround:** Uninstall, clear cache, reinstall.

### Numpad Enter Key (#17174)
**Issue:** Produces invalid character instead of sending message.
**Workaround:** Use main keyboard Enter key.

### Terminal Setup with tmux (#17168)
**Issue:** Shift+Enter fix broken on ghostty + tmux.
**Workaround:** Use `Ctrl+J` for newline in prompts.

### False PATH Warning (#17166)
**Issue:** Reports ~/.local/bin not in PATH when it actually is.
**Impact:** Cosmetic warning, no functional issue.

## 6.2 Linux Issues

### Memory Leak (#17194)
**Issue:** Memory-related performance degradation.
**Detection:**
```bash
watch -n 5 "ps aux | grep claude | awk '{print \$6}'"
```
**Workaround:** Restart Claude Code every 2-3 hours of heavy use.

### Environment Variable Expansion (#17182)
**Issue:** Variables expand to empty in piped commands.
**Workaround:**
```bash
# Export explicitly before Claude session
export MY_VAR="value"
source ~/.bashrc
claude
```

## 6.3 Windows Issues

### Terminal Display in VS Code (#17181)
**Issue:** Terminal rendering issues since v2.1.2.
**Workaround:** Use Windows Terminal or PowerShell directly instead of VS Code terminal.

### Statusline Context Gauge Freeze (#17183)
**Issue:** After auto-compact, context gauge freezes.
**Workaround:** Manual `/compact` instead of auto-compact.

## 6.4 WSL Issues

### Path Differences
**Issue:** Windows paths vs Linux paths confusion.
**Prevention:** Always use Linux-style paths in WSL context.

### File Watching
**Issue:** File system events may not propagate correctly.
**Impact:** Hooks may not trigger on file changes.

---

<a name="version-specific"></a>
# Section 7: Version-Specific Bugs

## 7.1 v2.1.2 Known Issues

### Custom Slash Commands Not Discovered (#17187)
**Platform:** macOS
**Description:** v2.1.2 fails to discover custom commands.
**Workaround:** Downgrade to v2.1.1 or wait for fix.

### Terminal Display Issues (#17181)
**Platform:** Windows
**Description:** Terminal rendering broken in VS Code.

## 7.2 Model Quality Degradation (#17171)

### Report (January 8, 2026)
**Description:** Since Jan 8, decreased understanding, verbose output, faster but lower quality.
**User Report:** "The model seems dumber but faster."
**Status:** Under investigation

### Mitigation
- Use explicit, detailed prompts
- Include more context in CLAUDE.md
- Prefer Opus for complex reasoning tasks
- Add verification steps to workflows

## 7.3 MCP Protocol Compatibility (#17169)

### Issue
Doesn't support MCP protocol version 2025-06-18 needed by Lens Studio.
**Impact:** Some MCP servers won't work.
**Workaround:** Check MCP server compatibility before integration.

---

<a name="anti-patterns"></a>
# Section 8: Anti-Patterns That Hurt Productivity

## 8.1 Prompting Anti-Patterns

### Anti-Pattern: Vague Instructions
```markdown
# BAD
"Fix the bug"
"Make it better"
"Clean up the code"

# GOOD
"Fix the null pointer exception on line 42 of src/auth/login.ts where user.email is accessed before validation"
```

### Anti-Pattern: Monolithic Tasks
```markdown
# BAD
"Build the entire authentication system"

# GOOD
"Implement the login endpoint with:
1. Email/password validation
2. JWT token generation
3. Rate limiting (5 attempts/minute)"
```

### Anti-Pattern: Implicit Context
```markdown
# BAD
"Use the same pattern as before"

# GOOD
"Use the repository pattern from src/data/UserRepository.ts"
```

## 8.2 Workflow Anti-Patterns

### Anti-Pattern: No Verification
**Problem:** Accepting Claude's output without testing.
**Result:** Subtle bugs ship to production.
**Fix:** Always verify with tests, type checking, manual review.

### Anti-Pattern: Single-Agent Everything
**Problem:** Using one Claude session for hours of complex work.
**Result:** Context pollution, degraded quality.
**Fix:** Use subagents, start fresh sessions, use Ralph loops.

### Anti-Pattern: Fighting Claude's Patterns
**Problem:** Forcing Claude to use patterns it doesn't understand well.
**Result:** Suboptimal code, more iterations needed.
**Fix:** Accept Claude's idiomatic suggestions, focus on outcomes not style.

### Anti-Pattern: Skipping CLAUDE.md
**Problem:** No project context file.
**Result:** Claude makes wrong assumptions every session.
**Fix:** Invest 30 minutes in comprehensive CLAUDE.md.

## 8.3 Configuration Anti-Patterns

### Anti-Pattern: --dangerously-skip-permissions Everywhere
```bash
# DANGEROUS
alias claude='claude --dangerously-skip-permissions'
```
**Risk:** Claude can execute any command including destructive ones.
**Fix:** Use granular permission whitelisting.

### Anti-Pattern: No .claudeignore
**Problem:** All files readable including secrets, build outputs.
**Result:** Security risk, wasted context tokens.
**Fix:**
```gitignore
# .claudeignore
.env*
node_modules/
dist/
*.key
*.pem
```

### Anti-Pattern: Overly Restrictive Permissions
**Problem:** Permission prompts every 10 seconds.
**Result:** Workflow constantly interrupted.
**Fix:** Whitelist common safe commands with `/permissions`.

---

<a name="misleading-advice"></a>
# Section 9: Misleading Advice That Doesn't Work

## 9.1 Debunked Claims

### "Just Let It Run Overnight"
**Reality:** Without proper Ralph loop setup, Claude will:
- Stop at first uncertainty
- Consume massive tokens on infinite loops
- Produce inconsistent results without context management

**Correct Approach:** Use file-based state (Ralph pattern) with explicit completion promises.

### "Claude Understands Your Whole Codebase"
**Reality:** Claude only sees what's in context window (~200K tokens, ~100-150K of code).
**Impact:** Large codebases need selective context loading.
**Fix:** Use .claudeignore, targeted reads, summarization.

### "Opus Is Always Better"
**Reality:**
- Opus costs 60x more than Haiku
- For simple tasks, Haiku/Sonnet are faster and sufficient
- Opus shines only for complex reasoning

**Correct Approach:** Match model to task complexity.

### "MCP Servers Are Plug and Play"
**Reality:**
- Many MCP servers have version compatibility issues
- Configuration often requires debugging
- Some don't work with latest Claude Code versions

**Correct Approach:** Test MCP servers in isolation before integration.

## 9.2 Outdated Advice

### "Use /init to Auto-Generate CLAUDE.md"
**Status:** May work but often produces generic content.
**Better Approach:** Write CLAUDE.md manually with specific project knowledge.

### "Claude Code Works Offline"
**Reality:** Requires API connection for all operations.
**Alternative:** Consider Aider with local models for offline work.

### "Premium Subscription Has No Limits"
**Reality:** All tiers have usage limits that reset periodically.
**Reality:** Heavy use ($500+/month) often better on API directly.

---

<a name="when-not-to-use"></a>
# Section 10: When NOT to Use Claude Code

## 10.1 Task Types to Avoid

### Real-Time Systems
- Latency-critical code
- Low-level performance optimization
- Embedded systems with tight constraints

### Security-Critical Code
- Cryptographic implementations
- Authentication core logic
- Payment processing
- Healthcare/HIPAA systems

**Reason:** AI can introduce subtle vulnerabilities, and these systems need human expert review.

### Highly Novel Domains
- Cutting-edge research implementations
- Domain-specific algorithms with limited training data
- Languages/frameworks with minimal online presence

### Complex Stateful Debugging
- Race conditions in distributed systems
- Memory corruption bugs
- Hardware-dependent issues

## 10.2 Organizational Constraints

### When Human Review Is Required
- Regulated industries (finance, healthcare, aerospace)
- When every line must be human-authored
- Audit trail requirements

### When Costs Exceed Value
- Simple one-line changes ($2-5 API cost vs 30 seconds human time)
- Highly exploratory work with uncertain outcomes
- When human domain expertise is faster

### When Privacy Is Paramount
- Code with trade secrets
- Pre-patent filing work
- Customer data handling code

**Alternative:** Use local LLMs with Aider for sensitive codebases.

## 10.3 Red Flags That Indicate Wrong Tool

1. **Repeated failures** on same task (5+ attempts)
2. **Escalating costs** without progress
3. **Quality degradation** mid-session
4. **Context constantly full** despite compaction
5. **Human review finding many bugs** in Claude output

---

<a name="recovery-strategies"></a>
# Section 11: Recovery Strategies

## 11.1 From Context Overflow

### Immediate Recovery
```bash
# Compact context
/compact

# If severely degraded
/reset

# Start focused session
claude "Only work on src/auth/login.ts - implement JWT validation"
```

### Prevention
- Monitor with Claude HUD
- Compact at 60-70%
- Use subagents for exploration
- Start new sessions for new tasks

## 11.2 From File Corruption

### Git-Based Recovery
```bash
# Discard changes to specific file
git checkout -- path/to/file.ts

# See what was changed
git diff HEAD

# Recover from stash
git stash pop

# Hard reset to last commit (CAREFUL)
git reset --hard HEAD
```

### Backup Recovery
```bash
# If using backup hooks
ls -la file.ts.bak-*
cp file.ts.bak-1704825600 file.ts
```

## 11.3 From Infinite Loops

### Kill the Process
```bash
# Graceful interrupt
Ctrl+C

# Harder interrupt
Ctrl+\

# Force kill
pkill -9 -f claude
```

### Clean Up State
```bash
# Mark task complete to break Ralph loop
echo "PROMISE COMPLETE HERE" >> progress.txt

# Remove lock files
rm .claude-lock .claude-running

# Kill background processes
pkill -f ralph.sh
```

## 11.4 From Cost Runaway

### Immediate Actions
1. Kill all Claude processes: `pkill -f claude`
2. Check Anthropic dashboard for usage
3. Set hard budget limits in console
4. Review what caused high usage

### Prevention
```bash
# Set iteration limits in scripts
MAX_ITERATIONS=25

# Use cheaper models for exploration
claude --model sonnet "explore the codebase"

# Monitor in real-time
# Use Claude HUD or watch API dashboard
```

## 11.5 From Authentication Issues

```bash
# Re-authenticate
claude auth logout
claude auth login

# Clear credentials
rm -rf ~/.claude/credentials

# Use API key instead
export ANTHROPIC_API_KEY="sk-ant-..."
```

---

<a name="debugging-techniques"></a>
# Section 12: Debugging Techniques

## 12.1 Enable Debug Logging

```bash
# Enable debug mode
export CLAUDE_CODE_DEBUG=1
export CLAUDE_CODE_LOG_FILE="/tmp/claude-debug.log"

# Run Claude Code
claude

# In another terminal
tail -f /tmp/claude-debug.log
```

## 12.2 Hook Debugging

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
```

## 12.3 Context Inspection

```bash
# Use Claude HUD for real-time monitoring
/plugin install claude-hud
/claude-hud:setup

# Sample output at critical levels:
# [Opus 4.5] 87% | 2 MCPs | 45m
# WARNING: Context nearly full, consider /compact
```

## 12.4 Network Debugging

```bash
# Check API connectivity
curl -I https://api.anthropic.com/health

# Verify proxy settings
echo $HTTP_PROXY $HTTPS_PROXY

# Test with verbose output
claude --verbose "test connection"
```

## 12.5 Permission Debugging

```bash
# List current permissions
/permissions list

# Reset all permissions
/permissions reset

# Test specific command
/permissions test "npm test"
```

## 12.6 Plugin Debugging

```bash
# List installed plugins
/plugin list

# Reinstall problematic plugin
/plugin uninstall plugin-name
/plugin install plugin-name

# Check plugin config
cat ~/.claude/plugins/plugin-name/config.json
```

---

<a name="performance-degradation"></a>
# Section 13: Performance Degradation Causes

## 13.1 Memory Issues

### Symptoms
- Increasing response latency
- Terminal becoming unresponsive
- System swap usage increasing

### Causes
1. Long-running sessions (hours)
2. Many MCP servers connected
3. Large files in context
4. Multiple subagents running

### Mitigation
```bash
# Monitor memory
watch -n 5 "ps aux | grep -E 'claude|node' | awk '{sum+=\$6} END {print sum/1024 \" MB\"}'"

# Restart Claude Code every 2-3 hours
# Or after particularly heavy tasks
```

## 13.2 Network Latency

### Symptoms
- Slow response start
- Timeouts during operations
- Incomplete responses

### Causes
1. Corporate proxy issues
2. API rate limiting
3. Geographic distance to API servers

### Mitigation
```bash
# Test latency
time curl -s https://api.anthropic.com/health > /dev/null

# Configure timeout
export ANTHROPIC_TIMEOUT=120000

# Use regional endpoints if available
```

## 13.3 Context Pressure

### Symptoms
- Quality degradation over session
- Instructions ignored
- Contradictory responses

### Monitoring
```bash
# Claude HUD shows percentage
# At 80%+, expect degradation
# At 90%+, critical issues likely
```

### Prevention
- Compact at 60-70%
- Use subagents to offload
- Start fresh sessions for new tasks

---

<a name="configuration-mistakes"></a>
# Section 14: Common Configuration Mistakes

## 14.1 CLAUDE.md Mistakes

### Too Long
**Problem:** CLAUDE.md over 1000 tokens consumes context budget.
**Fix:** Keep to essential information only.

### Too Generic
**Problem:** Boilerplate without project-specific guidance.
**Result:** Claude makes same wrong assumptions every session.
**Fix:** Include specific patterns, conventions, known issues.

### Missing Commands
**Problem:** No development commands documented.
**Result:** Claude guesses wrong commands.
**Fix:**
```markdown
## Commands
- `npm run dev` - Start dev server (port 3000)
- `npm test` - Run Jest tests
- `npm run build` - Production build
```

## 14.2 settings.json Mistakes

### Invalid JSON
**Problem:** Syntax errors in settings.json.
**Detection:** `jq . ~/.claude/settings.json`
**Common Errors:**
- Trailing commas
- Unquoted keys
- Missing brackets

### Conflicting Permissions
**Problem:** Both allow and deny for same path/command.
**Result:** Unpredictable behavior.
**Fix:** Use explicit, non-overlapping rules.

## 14.3 .claudeignore Mistakes

### Too Restrictive
**Problem:** Ignoring files Claude needs.
**Result:** Claude can't understand architecture.
**Fix:** Only ignore truly unnecessary files.

### Missing
**Problem:** No .claudeignore at all.
**Result:** node_modules, build outputs, secrets in context.
**Fix:** Start with standard template:
```gitignore
node_modules/
dist/
build/
.next/
.env*
*.log
coverage/
```

---

<a name="integration-failures"></a>
# Section 15: Integration Failures

## 15.1 MCP Server Failures

### Version Incompatibility (#17169)
**Issue:** MCP protocol version mismatch.
**Detection:** Error on server connection.
**Fix:** Check server compatibility, update if available.

### Configuration Errors
```json
// WRONG - missing env variable
{
  "mcp": {
    "servers": {
      "postgres": {
        "command": "npx",
        "args": ["@anthropic-ai/mcp-server-postgres"]
        // Missing: env: { DATABASE_URL: "..." }
      }
    }
  }
}
```

### Connection Timeouts
**Cause:** Server takes too long to initialize.
**Fix:** Increase timeout, check server logs.

## 15.2 Plugin Failures

### Custom Slash Commands Not Discovered (#17187)
**Version:** v2.1.2
**Platform:** macOS
**Workaround:** Downgrade or wait for fix.

### Plugin Conflicts
**Symptom:** Multiple plugins trying to handle same event.
**Detection:** Unexpected behavior, logs show multiple handlers.
**Fix:** Disable conflicting plugins.

## 15.3 IDE Integration Failures

### VS Code Extension Issues (#17181)
**Issue:** Terminal rendering broken in VS Code.
**Platform:** Windows
**Fix:** Use external terminal.

### Notification Hook Failures (#17170)
**Issue:** `permission_prompt` doesn't work in VSCode extension.
**Platform:** macOS
**Workaround:** Use terminal Claude Code for hooks.

## 15.4 Git Integration Issues

### Swift LSP Blocks Refactoring (#17167)
**Platform:** macOS
**Issue:** Per-edit compilation validation prevents multi-file refactors.
**Workaround:** Disable LSP during large refactors.

### Git Reset --hard (#17190)
**Issue:** Uses destructive reset for rollbacks.
**Risk:** Loses uncommitted work.
**Prevention:** Always commit or stash before Claude sessions.

---

# Section 16: Quick Reference Checklists

## Pre-Session Checklist

- [ ] Git: Working directory clean or work stashed
- [ ] Git: On dedicated branch (not main/master)
- [ ] .claudeignore: Sensitive files excluded
- [ ] CLAUDE.md: Project context up to date
- [ ] Permissions: Safe commands whitelisted
- [ ] Model: Correct model selected for task complexity
- [ ] Monitoring: Claude HUD or context awareness active

## During Session Checklist

- [ ] Context usage under 70%?
- [ ] Claude following CLAUDE.md conventions?
- [ ] Outputs being verified with tests/typechecks?
- [ ] No infinite loop patterns detected?
- [ ] Changes reviewable via git diff?

## Post-Session Checklist

- [ ] All changes reviewed before commit
- [ ] Tests passing
- [ ] Type checking passing
- [ ] No security issues introduced
- [ ] No credentials in code/context
- [ ] Session costs within budget

## Emergency Recovery Checklist

1. [ ] Stop Claude: `Ctrl+C` or `pkill -f claude`
2. [ ] Check git status: `git status`
3. [ ] Review changes: `git diff`
4. [ ] Revert if needed: `git checkout -- .`
5. [ ] Check API usage in Anthropic console
6. [ ] Clear any lock files: `rm .claude-*`
7. [ ] Restart fresh: `claude`

---

# Section 17: Resources and Further Reading

## Official Documentation
- https://docs.anthropic.com/en/docs/claude-code/troubleshooting
- https://docs.anthropic.com/en/docs/claude-code/security
- https://docs.anthropic.com/en/docs/claude-code/permissions

## GitHub
- Issues: https://github.com/anthropics/claude-code/issues
- Discussions: https://github.com/anthropics/claude-code/discussions

## Community Resources
- r/ClaudeAI - Reddit community
- Hacker News discussions
- Twitter/X: @anthropic, power users

## Related Research Files
- research-cost-optimization-expanded.md - Cost management
- research-hooks-expanded.md - Hook debugging
- research-github-community-expanded.md - Community tools

---

# Appendix: Issue Severity Reference

| Severity | Impact | Examples |
|----------|--------|----------|
| **Critical** | Data loss, security breach | Path bypass, git reset --hard |
| **High** | Major functionality broken | Memory leaks, auth failures |
| **Medium** | Feature impaired | Display issues, key problems |
| **Low** | Minor inconvenience | Cosmetic warnings |

# Appendix: Error Code Reference

| Error | Meaning | Resolution |
|-------|---------|------------|
| `ECONNREFUSED` | API unreachable | Check network, proxy settings |
| `ENOENT` | File not found | Verify path exists |
| `EACCES` | Permission denied | Check file permissions |
| `ETIMEOUT` | Request timed out | Increase timeout, retry |
| `429` | Rate limited | Wait for reset, reduce usage |
| `401` | Unauthorized | Re-authenticate |
| `500` | Server error | Retry later |

---

**Last Updated:** 2026-01-09
**Research Agent:** Claude Opus 4.5
**Total Issues Analyzed:** 4,677+ GitHub issues
**Sources:** GitHub Issues, Community Reports, Official Documentation, Power User Experiences

---

# Tags

`#edge-cases` `#failures` `#anti-patterns` `#debugging` `#recovery` `#security` `#platform-issues` `#version-bugs` `#performance` `#configuration`

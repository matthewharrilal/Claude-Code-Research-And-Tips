# Claude Code Bash Tool Mechanics -- Complete Investigation

**Date:** 2026-03-01
**Purpose:** Foundational reference for all approaches that depend on Bash tool capabilities

---

## 1. run_in_background

### Behavior
- Returns IMMEDIATELY with a task ID (7-char hex, e.g., `b83bdcc`) and output file path
- Output file path: `/private/tmp/claude-501/{project-path}/tasks/{id}.output`
- The calling agent can issue further tool calls without waiting
- Background process continues independently until completion or failure

### Output File
- Both stdout and stderr are captured in the same output file
- File is live-appendable: can be read mid-execution with partial results
- No truncation observed up to 10,000 lines (~1.1MB)
- File persists after process completion

### Exit Codes
- Background processes do NOT report exit codes via the output file
- Non-zero exit codes are silently swallowed
- Only stdout/stderr content before exit is captured
- No way to programmatically detect background process failure from exit code alone
- **Workaround:** Write a sentinel value (e.g., "SUCCESS") as the last line; absence = failure

### Working Directory
- Background processes start in the project working directory (same as foreground)
- Each Bash call gets a fresh shell (no state persistence between calls)

---

## 2. Concurrent Processes

### Parallel Launch
- Multiple `run_in_background` calls in a single response all launch concurrently
- Tested: 5 concurrent processes, all started within ~3 seconds of each other
- No observable serialization or queuing
- Each gets its own task ID and output file

### Sub-processes
- Shell sub-processes (`&`, subshells) work within a single background command
- `wait` correctly blocks until all children complete
- Named pipes (FIFOs) work between foreground and background processes

### IPC
- File-based IPC works: background can poll for signal files, foreground can write them
- Named pipes (mkfifo) work: background blocks on read, foreground writes to unblock
- Both patterns confirmed working for inter-process coordination

---

## 3. Timeout Mechanics

### Behavior
- Default timeout: 120,000ms (2 minutes)
- Maximum timeout: 600,000ms (10 minutes)
- When a foreground command exceeds its timeout, it is AUTOMATICALLY CONVERTED to a background process
- The process is NOT killed -- it continues running in background
- The agent receives the same task ID / output file response as `run_in_background`
- This means timeout is NOT a hard limit -- it's a "foreground patience" limit

### Implications
- Setting a short timeout (e.g., 3000ms) on a long command effectively makes it background
- There is NO way to force-kill a process via the Bash tool timeout
- For actual time-limiting, use shell-level mechanisms: `timeout 30 some-command`

---

## 4. TaskOutput

### Mechanism
- Background task output can be read by directly reading the output file via `cat`, `tail`, `head`, etc.
- The Read tool can also read the output file (it's a regular file)
- Partial reads work: file can be read while the process is still running
- `tail -f` style monitoring works but ties up a foreground Bash call

### Notification
- When a background task completes, the system sends a notification to the agent
- No explicit polling needed -- the agent is interrupted with completion info
- However, the notification only says the task completed, not what the output was
- Agent must read the output file to get results

---

## 5. Key Constraints & Gotchas

### Shell State
- Each Bash call starts a FRESH shell (bash or zsh based on user config)
- No environment variables, aliases, or cd persist between calls
- Must use absolute paths or re-cd in every command

### No Interactive Mode
- stdin is not available (cannot send input to running processes)
- git rebase -i, vim, less, etc. will fail or hang
- Workaround: use non-interactive equivalents (git rebase --onto, etc.)

### Error Detection in Background
- No exit code propagation from background processes
- Must use sentinel patterns or file-based signaling for error detection
- Example pattern:
  ```bash
  some-command && echo "SENTINEL_SUCCESS" || echo "SENTINEL_FAIL: $?"
  ```

### Parallel Tool Calls
- Multiple Bash calls (foreground or background) in a single response execute in parallel
- Independent calls should be parallelized for efficiency
- Dependent calls must be sequential (use `&&` chaining or separate responses)

---

## 6. Practical Patterns

### Pattern A: Fire-and-Forget Background
```
Bash(run_in_background=true): long-running-command
```
- Good for: builds, tests, data processing
- Check output later via file read

### Pattern B: Polling Background
```
Bash(run_in_background=true): long-command > /tmp/result.txt && echo "DONE" > /tmp/signal
Bash: while [ ! -f /tmp/signal ]; do sleep 1; done && cat /tmp/result.txt
```
- Good for: coordinating sequential phases

### Pattern C: Parallel Fan-Out
```
# All in one response:
Bash(bg): task-1 > /tmp/r1.txt && echo "1" > /tmp/done1
Bash(bg): task-2 > /tmp/r2.txt && echo "2" > /tmp/done2
Bash(bg): task-3 > /tmp/r3.txt && echo "3" > /tmp/done3
```
Then later:
```
Bash: while [ ! -f /tmp/done1 ] || [ ! -f /tmp/done2 ] || [ ! -f /tmp/done3 ]; do sleep 1; done && echo "ALL DONE"
```
- Good for: parallel agent spawning, parallel builds

### Pattern D: Timeout-as-Background
```
Bash(timeout=1000): very-long-command
```
- Command auto-promotes to background after 1 second
- Useful when you want to start something and check on it later
- But: no control over when it completes

---

## 7. Summary Table

| Feature | Supported | Notes |
|---------|-----------|-------|
| run_in_background | YES | Returns immediately, output to file |
| Concurrent BG processes | YES | 5+ tested, true parallelism |
| Read output mid-execution | YES | File is live-appendable |
| Exit code from BG | NO | Must use sentinel patterns |
| Timeout kills process | NO | Auto-converts to background |
| Max timeout | 600,000ms | 10 minutes |
| Default timeout | 120,000ms | 2 minutes |
| Stderr capture in BG | YES | Same output file as stdout |
| Sub-processes in BG | YES | &, wait, subshells all work |
| FIFO / named pipes | YES | Cross-process IPC works |
| File-based IPC | YES | Signal files, polling work |
| Shell state persistence | NO | Fresh shell each call |
| Interactive input | NO | No stdin |
| Large output | YES | 10K+ lines, 1MB+ confirmed |

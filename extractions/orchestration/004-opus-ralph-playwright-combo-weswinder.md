# Opus 4.5 + Ralph + Playwright: Complete Implementation Guide

**Source:** @weswinder (Wes Winder) - 12+ year developer, founder of #1 vibe coding community
**Date:** 2026-01-05
**URL:** https://x.com/weswinder/status/2008051871743918410
**Engagement:** 1.5K likes, 153K views, 1.3K bookmarks
**Reliability:** HIGH - Practitioner with community validation

---

## You Are Here

**Your current state:** You have Claude Code working and understand basic Ralph loops, but when you build UI features, Claude claims "done" while your browser shows broken layouts, missing elements, or features that don't actually work.

**After this guide:** You'll have a self-correcting autonomous loop that builds UI features AND verifies them in a real browser, iterating until the visual output actually matches your requirements.

**Prerequisites:**
- Claude Code installed and working
- Basic Ralph loop understanding (see `synthesis/mastery-ralph-complete.md`)
- Playwright MCP or browser automation capability
- A project with a running dev server (`npm run dev` or similar)

**Complexity Level:** Level 4-5 on the complexity ladder (PRD-driven loops with browser verification)

**Time to implement:** 2-3 hours for first working setup

---

## The Problem This Solves

### The Broken Promise of "Done"

Every time you build UI features with Claude, you probably experience this:

```
You: "Add a login form with email and password fields"
Claude: "Done! I've added the login form component."
You: *opens browser*
You: *sees blank page, console errors, or completely wrong layout*
You: *sighs*
```

**The core issue:** Claude has no feedback loop for visual correctness. It can:
- Read code (yes)
- Write code (yes)
- Run tests (yes)
- **Actually see what renders in a browser** (NO - without Playwright)

This creates a fundamental gap. Claude marks features "complete" based on:
- Successful file writes
- No TypeScript errors
- Tests passing (if they exist)

But none of these verify **visual correctness**.

### What This Stack Fixes

| Before (Code-Only Loop) | After (Browser-Verified Loop) |
|------------------------|-------------------------------|
| Claude writes CSS | Claude writes CSS |
| Claude says "done" | **Playwright takes screenshot** |
| You check browser manually | **Claude analyzes screenshot** |
| You find it's broken | Claude sees it's broken |
| You describe what's wrong | Claude iterates automatically |
| Repeat 5-10 times | **Loop continues until correct** |

The transformation:
- **You:** Go to sleep
- **Morning:** UI actually works

---

## The Stack Explained

### Why These Three Components?

```
┌─────────────────────────────────────────────────────────────────┐
│                    THE SELF-CORRECTING UI LOOP                   │
└─────────────────────────────────────────────────────────────────┘

┌────────────┐    ┌────────────┐    ┌────────────┐
│  Opus 4.5  │───→│   Ralph    │───→│ Playwright │
│            │    │            │    │            │
│ Reasoning  │    │ Persistence│    │ Verification│
│   Power    │    │  + Memory  │    │  Feedback  │
└────────────┘    └────────────┘    └────────────┘
      │                  │                 │
      │                  │                 │
      ▼                  ▼                 ▼
 Fewer tries        Keeps going        Real browser
 needed per         until done         feedback loop
   task
```

| Component | Role | Why It Matters |
|-----------|------|----------------|
| **Opus 4.5** | Reasoning power | Handles complex visual understanding, makes fewer mistakes, needs fewer iterations |
| **Ralph Loop** | Persistence + External Memory | Keeps trying until success, remembers learnings across iterations |
| **Playwright** | Browser automation for verification | Provides ACTUAL visual feedback, not just code analysis |

### The Emergent Behavior

> "opus 4.5 with ralph wiggum and playwright is agi"
> — @weswinder

What he's pointing at: When you combine these three, you get something that **feels** like AGI for UI development:

1. **Persistence** (Ralph) - Doesn't give up
2. **Reasoning** (Opus 4.5) - Understands what went wrong
3. **Perception** (Playwright) - Can actually see the result

The combination creates what @Goosewin called "a cartoon child clicking buttons without giving up" - simple in concept, powerful in practice.

---

## Step-by-Step Implementation

### Step 1: Create the Ralph Directory Structure

First, set up your project with the Ralph infrastructure.

```bash
# Navigate to your project root
cd ~/your-project

# Create the Ralph directory
mkdir -p scripts/ralph

# Create empty files
touch scripts/ralph/ralph.sh
touch scripts/ralph/prompt.md
touch scripts/ralph/prd.json
touch scripts/ralph/progress.txt
```

---

### Checkpoint: After Step 1

**Verify your state:**
```bash
ls -la scripts/ralph/
```

**You should see:**
```
total 0
drwxr-xr-x  6 user  staff  192 Jan 10 10:00 .
drwxr-xr-x  3 user  staff   96 Jan 10 10:00 ..
-rw-r--r--  1 user  staff    0 Jan 10 10:00 prd.json
-rw-r--r--  1 user  staff    0 Jan 10 10:00 progress.txt
-rw-r--r--  1 user  staff    0 Jan 10 10:00 prompt.md
-rw-r--r--  1 user  staff    0 Jan 10 10:00 ralph.sh
```

**If you don't see this:**
- Make sure you're in your project root, not a subdirectory
- Check that `mkdir -p` worked (no permission errors)

---

### Step 2: Write the Ralph Loop Script

This script runs the core loop with Playwright verification built in.

```bash
#!/bin/bash
# scripts/ralph/ralph.sh
# Opus 4.5 + Ralph + Playwright Loop
set -e

MAX_ITERATIONS=${1:-10}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCREENSHOTS_DIR="$SCRIPT_DIR/screenshots"

# Create screenshots directory
mkdir -p "$SCREENSHOTS_DIR"

echo "=========================================="
echo " OPUS 4.5 + RALPH + PLAYWRIGHT"
echo " Max iterations: $MAX_ITERATIONS"
echo "=========================================="

for i in $(seq 1 $MAX_ITERATIONS); do
  echo ""
  echo "=== Iteration $i of $MAX_ITERATIONS ==="
  echo "Time: $(date +%H:%M:%S)"

  # Clear previous screenshot
  rm -f "$SCREENSHOTS_DIR/current.png"

  # Run Claude with the prompt
  OUTPUT=$(cat "$SCRIPT_DIR/prompt.md" \
    | claude --dangerously-skip-permissions 2>&1 \
    | tee /dev/stderr) || true

  # Check for completion signal
  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo ""
    echo "=========================================="
    echo " ALL STORIES COMPLETE!"
    echo " Total iterations: $i"
    echo "=========================================="
    exit 0
  fi

  # Check for blocked signal (needs human help)
  if echo "$OUTPUT" | grep -q "<promise>BLOCKED</promise>"; then
    echo ""
    echo "=========================================="
    echo " BLOCKED - Human input needed"
    echo " Check progress.txt for details"
    echo "=========================================="
    exit 2
  fi

  # Brief pause between iterations
  sleep 2
done

echo ""
echo "=========================================="
echo " MAX ITERATIONS REACHED"
echo " Check prd.json for incomplete stories"
echo "=========================================="
exit 1
```

Make it executable:
```bash
chmod +x scripts/ralph/ralph.sh
```

---

### Checkpoint: After Step 2

**Verify your script is executable:**
```bash
ls -la scripts/ralph/ralph.sh
```

**You should see:**
```
-rwxr-xr-x  1 user  staff  1234 Jan 10 10:05 scripts/ralph/ralph.sh
```

The `x` in `-rwxr-xr-x` confirms it's executable.

**Test run (will fail but proves script works):**
```bash
./scripts/ralph/ralph.sh 1
```

**You should see:**
```
==========================================
 OPUS 4.5 + RALPH + PLAYWRIGHT
 Max iterations: 1
==========================================

=== Iteration 1 of 1 ===
Time: 10:06:32
[Claude output or error - expected since prompt.md is empty]

==========================================
 MAX ITERATIONS REACHED
 Check prd.json for incomplete stories
==========================================
```

**If you see "permission denied":**
Run `chmod +x scripts/ralph/ralph.sh` again.

---

### Step 3: Write the Agent Prompt with Browser Verification

This is the critical piece that adds Playwright verification to the loop.

```markdown
# scripts/ralph/prompt.md

# Opus 4.5 + Ralph + Playwright Agent

You are a UI development agent with browser verification capabilities.

## Your Core Loop

1. **Read current state:**
   - Read `scripts/ralph/prd.json` for story list
   - Read `scripts/ralph/progress.txt` for learnings and patterns
   - Check which stories have `passes: false`

2. **Pick ONE story:**
   - Choose the highest priority story where `passes: false`
   - If all stories pass, output `<promise>COMPLETE</promise>` and stop

3. **Implement the story:**
   - Make the code changes
   - Keep changes minimal and focused

4. **Verify with Playwright:**
   - Use browser automation to take a screenshot
   - Analyze the screenshot against acceptance criteria
   - Save screenshot to `scripts/ralph/screenshots/[story-id].png`

5. **Evaluate results:**
   - If visual verification passes: mark `passes: true`, commit
   - If visual verification fails: note what's wrong, iterate

6. **Update progress:**
   - APPEND to progress.txt (never overwrite)
   - Include learnings for future iterations

## Browser Verification Protocol

For EVERY UI story, you MUST:

```javascript
// Example verification using Playwright MCP
// 1. Navigate to the relevant page
await page.goto('http://localhost:3000/login');

// 2. Wait for stability
await page.waitForLoadState('networkidle');

// 3. Take screenshot
await page.screenshot({
  path: 'scripts/ralph/screenshots/current.png',
  fullPage: true
});

// 4. Analyze what you see
// Compare against acceptance criteria
```

## Screenshot Analysis Checklist

When analyzing screenshots, verify:
- [ ] Expected elements are visible
- [ ] Layout matches requirements
- [ ] Text content is correct
- [ ] Colors/styling are correct
- [ ] No console errors visible
- [ ] No broken images or missing assets

## Commit Format

After each successful story:
```bash
git add .
git commit -m "feat: [STORY-ID] - [Brief description]

- Visual verification: PASSED
- Screenshot: scripts/ralph/screenshots/[story-id].png"
```

## Progress Format

APPEND to progress.txt (never update existing entries):

```markdown
---
## [Timestamp] - [Story ID]
- **Implemented:** [What was built]
- **Files changed:** [List of files]
- **Browser verification:** PASSED/FAILED
- **Visual issues found:** [If any]
- **Learnings:**
  - [Pattern or gotcha discovered]
```

## Stop Conditions

- **All done:** All stories have `passes: true` → Output `<promise>COMPLETE</promise>`
- **Blocked:** External dependency or human decision needed → Output `<promise>BLOCKED</promise>` with reason
- **Otherwise:** End normally, loop will restart you

## Critical Rules

1. **ONE story per iteration** - Don't try to do multiple
2. **Browser verification is MANDATORY** for UI stories
3. **Never mark UI stories complete without screenshot proof**
4. **APPEND to progress.txt, never overwrite**
5. **If browser verification fails, iterate - don't mark complete**

## Token Budget Awareness

Browser output is expensive. To protect context window:
- Keep screenshot analysis brief
- Focus on pass/fail criteria
- Don't dump entire page HTML
- If detailed analysis needed, spawn a subagent
```

---

### Checkpoint: After Step 3

**Verify prompt.md has content:**
```bash
wc -l scripts/ralph/prompt.md
```

**You should see:**
```
90+ scripts/ralph/prompt.md
```

If it shows `0`, the file is still empty - paste the content again.

---

### Step 4: Configure Playwright MCP (If Not Already Set Up)

The browser verification requires Playwright access. There are two main approaches:

#### Option A: Using Playwright MCP Server (Recommended)

If you have `@anthropic/mcp-server-playwright` set up:

```json
// ~/.claude/settings.json (add to existing)
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-playwright"]
    }
  }
}
```

Restart Claude Code after adding.

#### Option B: Using Amp's dev-browser Skill

If you use Amp (amplified Claude):

```bash
# Install dev-browser skill
cd ~/.config/amp/skills
git clone https://github.com/snarktank/amp-skills.git
cd amp-skills/dev-browser
npm install
npx playwright install chromium
```

Then in your prompt.md, reference the skill:
```markdown
## Browser Verification Protocol

Use the dev-browser skill for screenshots:
/dev-browser screenshot http://localhost:3000/login tmp/screenshot.png
```

---

### Checkpoint: After Step 4

**Verify Playwright is accessible:**

Start Claude Code and try:
```
> Take a screenshot of https://example.com
```

**You should see:**
- Claude acknowledges the Playwright/browser tool
- A screenshot is taken (or Claude explains how it would)

**If you see "no browser tool available":**
- Check your MCP server configuration
- Restart Claude Code after config changes
- Verify npx can run the playwright server

---

### Step 5: Create Your First PRD with UI Stories

Now create a real task list for your project.

```json
{
  "project": "My App",
  "branchName": "ralph/ui-features",
  "description": "UI feature development with browser verification",
  "devServerUrl": "http://localhost:3000",
  "userStories": [
    {
      "id": "UI-001",
      "title": "Add login form component",
      "description": "Create a login form with email and password fields",
      "page": "/login",
      "acceptanceCriteria": [
        "Email input field is visible",
        "Password input field is visible",
        "Submit button is visible and labeled 'Sign In'",
        "Form is centered on page",
        "npm run typecheck passes"
      ],
      "visualCriteria": [
        "Form width is reasonable (300-500px)",
        "Inputs have visible borders",
        "Button has distinct styling from inputs"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    },
    {
      "id": "UI-002",
      "title": "Add form validation feedback",
      "description": "Show validation errors for invalid input",
      "page": "/login",
      "acceptanceCriteria": [
        "Invalid email shows error message",
        "Empty password shows error message",
        "Error messages are red",
        "npm run typecheck passes"
      ],
      "visualCriteria": [
        "Error text is visible below relevant field",
        "Error styling is clearly different from normal state"
      ],
      "priority": 2,
      "passes": false,
      "notes": "Depends on UI-001"
    }
  ]
}
```

Save to `scripts/ralph/prd.json`.

---

### Checkpoint: After Step 5

**Verify valid JSON:**
```bash
cat scripts/ralph/prd.json | jq '.'
```

**You should see:** Formatted JSON output without errors.

**If you see "parse error":**
- Check for missing commas
- Check for trailing commas (not allowed in JSON)
- Use a JSON validator

---

### Step 6: Initialize Progress File

```markdown
# scripts/ralph/progress.txt

# Ralph Progress Log
Started: 2026-01-10
Project: My App
Branch: ralph/ui-features

## Codebase Patterns
- [Will be populated as patterns are discovered]

## Key Files
- [Will be populated as files are identified]

---

## Session Start
Initialized for Opus 4.5 + Ralph + Playwright run.

---
```

---

### Step 7: Start Your Dev Server and Run

```bash
# Terminal 1: Start your dev server
npm run dev

# Terminal 2: Run Ralph
./scripts/ralph/ralph.sh 10
```

---

## What You'll See When Running

```
==========================================
 OPUS 4.5 + RALPH + PLAYWRIGHT
 Max iterations: 10
==========================================

=== Iteration 1 of 10 ===
Time: 22:15:03

Reading prd.json... Found 2 stories, 0 passing
Reading progress.txt... No prior learnings
Selected story: UI-001 - Add login form component

Creating LoginForm.tsx...
Adding route handler...
Running typecheck... PASSED

Taking browser screenshot...
→ Navigating to http://localhost:3000/login
→ Screenshot saved: scripts/ralph/screenshots/UI-001.png

Analyzing screenshot against criteria:
✓ Email input field is visible
✓ Password input field is visible
✓ Submit button visible with "Sign In" label
✗ Form is NOT centered - appears left-aligned

Visual verification: FAILED
Iterating...

Updating CSS for centering...
Taking new screenshot...

Analyzing screenshot:
✓ Email input field is visible
✓ Password input field is visible
✓ Submit button visible with "Sign In" label
✓ Form is centered on page

Visual verification: PASSED

Updating prd.json: UI-001 passes: true
Committing: feat: UI-001 - Add login form component

APPEND to progress.txt:
---
## 2026-01-10 22:16:45 - UI-001
- Implemented: LoginForm component with email/password fields
- Files: src/components/LoginForm.tsx, src/app/login/page.tsx
- Browser verification: PASSED (after 1 iteration)
- Learnings:
  - Use Tailwind "mx-auto" for horizontal centering
  - Form needs explicit width constraint for centering to work
---

=== Iteration 2 of 10 ===
Time: 22:17:02

Reading prd.json... Found 2 stories, 1 passing
Reading progress.txt... 1 prior session
Selected story: UI-002 - Add form validation feedback
...

==========================================
 ALL STORIES COMPLETE!
 Total iterations: 4
==========================================
```

---

## The Critical Optimization: Subagents for Browser Work

This insight from @TendiesOfWisdom is essential:

> "The feedback loop is everything, but put costly tools like browser control in subagents to protect your main context window tokens"

### The Problem

Browser automation generates LOTS of tokens:
- Page HTML (can be 50K+ tokens for complex pages)
- Screenshot descriptions (1K-5K tokens)
- Navigation logs
- Network requests

If these bloat your main agent's context, you'll hit context overflow mid-feature.

### The Solution: Subagent Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                     MAIN RALPH AGENT                          │
│                                                               │
│  • Reads PRD, picks story                                     │
│  • Makes code changes                                         │
│  • Spawns verification subagent                               │
│  • Receives pass/fail + brief summary                         │
│  • Context stays clean                                        │
└──────────────────────────────────────────────────────────────┘
          │
          │ Spawns
          ▼
┌──────────────────────────────────────────────────────────────┐
│                 BROWSER VERIFICATION SUBAGENT                 │
│                                                               │
│  • Receives: URL, acceptance criteria                         │
│  • Opens browser, navigates                                   │
│  • Takes screenshot                                           │
│  • Analyzes against criteria                                  │
│  • Returns: PASS/FAIL + 2-3 sentence summary                  │
│  • Context is isolated (doesn't pollute main agent)           │
└──────────────────────────────────────────────────────────────┘
```

### Updated prompt.md with Subagent Pattern

Add this to your prompt.md:

```markdown
## Browser Verification via Subagent

When you need browser verification, spawn a subagent:

```
Use Task tool to spawn a verification subagent:

Task: Verify UI at [URL] against these criteria:
- [Criterion 1]
- [Criterion 2]
- [Criterion 3]

Return only:
1. PASS or FAIL
2. 2-3 sentence summary of what you observed
3. If FAIL, the specific criterion that failed

Save screenshot to: scripts/ralph/screenshots/[story-id].png
```

This keeps browser HTML/network logs OUT of your main context.
```

---

## Troubleshooting

### Error: "Playwright browser not found"

**Symptoms:**
```
Error: browserType.launch: Executable doesn't exist at /path/to/chromium
```

**Cause:** Playwright browsers not installed.

**Solution:**
```bash
# Install Playwright browsers
npx playwright install chromium

# Or install all browsers
npx playwright install
```

---

### Error: "Context window exceeded with browser output"

**Symptoms:**
- Claude's responses get cut off
- Quality degrades mid-task
- "Maximum context length exceeded" error

**Cause:** Browser HTML/output bloating context.

**Solutions:**
1. **Use subagents** (see Critical Optimization above)
2. **Limit what you capture:**
```javascript
// Instead of full page HTML
await page.content()  // BAD - can be 50K+ tokens

// Use targeted selectors
await page.$eval('.login-form', el => el.outerHTML)  // BETTER - just what you need
```

3. **Increase max iterations, decrease scope per iteration**

---

### Error: "Dev server not running"

**Symptoms:**
```
Error: net::ERR_CONNECTION_REFUSED at http://localhost:3000
```

**Cause:** Your dev server isn't running or wrong port.

**Solution:**
1. Start dev server in separate terminal: `npm run dev`
2. Verify port in prd.json `devServerUrl` matches your actual port
3. Wait for server to fully start before running Ralph

---

### Error: "Screenshot shows blank page"

**Symptoms:**
- Screenshot taken successfully
- Image shows empty white page
- But page works when you check manually

**Cause:** Screenshot taken before page fully loads.

**Solution:**
Update verification to wait for content:
```javascript
// Wait for network to be idle
await page.waitForLoadState('networkidle');

// Or wait for specific element
await page.waitForSelector('.login-form', { state: 'visible' });

// Then screenshot
await page.screenshot({ path: 'screenshot.png' });
```

---

### Error: "Ralph stuck on same story"

**Symptoms:**
- Same story attempted 5+ iterations
- No progress in prd.json
- progress.txt shows repeated attempts

**Cause:** Story criteria too vague or technically blocked.

**Solutions:**
1. **Manual intervention:** Set story to `passes: true` with notes
2. **Split the story:** Break into smaller pieces
3. **Add notes field:** Give Claude more context
```json
{
  "id": "UI-001",
  "notes": "HINT: The login form needs Tailwind classes for centering. Check existing components for patterns."
}
```

---

### Error: "Tests pass but visual is wrong"

**Symptoms:**
- `npm run test` passes
- `npm run typecheck` passes
- But browser shows broken UI

**Cause:** Tests don't cover visual rendering.

**Solution:** This is exactly why you need Playwright verification. Add visual criteria:
```json
{
  "acceptanceCriteria": [
    "npm run typecheck passes",
    "npm run test passes"
  ],
  "visualCriteria": [
    "Form renders centered on page",
    "All inputs have visible borders",
    "Submit button is styled distinctly"
  ]
}
```

The visual criteria are checked via screenshot analysis, not tests.

---

## Micro-to-Macro Connections

### This Pattern in the Complexity Ladder

| Level | What This Guide Covers |
|-------|----------------------|
| Level 3 | Basic Ralph loop structure |
| **Level 4** | **PRD with stories and acceptance criteria** |
| **Level 4.5** | **+ Playwright browser verification** |
| Level 5 | Would add orchestrator + worker separation |

This guide sits at **Level 4-5**: structured PRD-driven development with browser verification feedback loops.

### Connects To

| Pattern | How It Relates |
|---------|---------------|
| **Ralph Wiggum Core** | This adds browser verification to the base pattern |
| **Subagent Architecture** | Token optimization via isolated browser workers |
| **Fresh Context Principle** | Each iteration gets clean context + external memory |
| **Feedback Loops** | Playwright closes the visual feedback gap |

### Extends Into

| Next Level | What It Adds |
|------------|-------------|
| **Parallel Ralph** | Multiple worktrees, each with browser verification |
| **CC Mirror Orchestration** | Orchestrator delegates to browser-enabled workers |
| **Gas Town** | Polecats with browser capabilities, Deacon monitors screenshots |

---

## Cost and Performance Expectations

### Token Usage

| Component | Tokens per Iteration |
|-----------|---------------------|
| Prompt.md reading | ~500 |
| PRD analysis | ~200-500 |
| Code implementation | ~2000-8000 |
| Browser screenshot + analysis | ~1000-3000 (with subagent) |
| Progress update | ~200-500 |
| **Total per iteration** | **~4000-12000** |

### Cost Estimates (Opus 4.5 pricing)

| Iterations | Estimated Cost |
|------------|---------------|
| 5 | $2-5 |
| 10 | $4-10 |
| 25 | $10-25 |
| 50 (overnight run) | $20-50 |

### Time per Iteration

| Phase | Time |
|-------|------|
| Context loading | ~5 sec |
| Code implementation | ~30-90 sec |
| Browser verification | ~10-20 sec |
| Commit/progress update | ~10 sec |
| **Total per iteration** | **~1-2 minutes** |

For a 10-story feature: expect 15-30 iterations (some retry), 30-60 minutes total.

---

## Real Results: What People Are Shipping

### Case Study: Login Flow (Referenced in Thread)

**Feature:** Complete authentication UI
**Stories:** 5 (form, validation, error states, success redirect, loading states)
**Iterations:** 12
**Time:** ~20 minutes autonomous
**Result:** Fully working login flow with visual polish

### The "AGI Feeling"

What makes this feel like AGI (@weswinder's claim):

1. **Persistence** - Keeps trying until it works
2. **Perception** - Actually sees what renders
3. **Reasoning** - Understands why something looks wrong
4. **Learning** - Patterns compound in progress.txt
5. **Autonomy** - Runs without babysitting

It's not true AGI, but for UI development, it's a massive capability leap.

---

## Quick Reference Card

### Files You'll Create

```
your-project/
├── scripts/ralph/
│   ├── ralph.sh          # The loop script (chmod +x)
│   ├── prompt.md         # Agent instructions
│   ├── prd.json          # User stories with visual criteria
│   ├── progress.txt      # External memory (append-only)
│   └── screenshots/      # Browser verification evidence
│       ├── UI-001.png
│       ├── UI-002.png
│       └── current.png
```

### Commands

```bash
# Run with default 10 iterations
./scripts/ralph/ralph.sh

# Run with specific iteration limit
./scripts/ralph/ralph.sh 25

# Check remaining stories
jq '.userStories[] | select(.passes == false) | .title' scripts/ralph/prd.json
```

### Stop Signals

| Signal | Meaning |
|--------|---------|
| `<promise>COMPLETE</promise>` | All stories pass, exit successfully |
| `<promise>BLOCKED</promise>` | Needs human input, exit with code 2 |
| Max iterations reached | Timeout, exit with code 1 |

---

## Summary

The **Opus 4.5 + Ralph + Playwright** stack solves the fundamental problem of UI development with AI: **visual verification**.

Without browser feedback, Claude operates blind - it can write code but can't see results. With Playwright in the loop, every UI change gets verified against actual rendered output.

**Key takeaways:**
1. **Browser verification is mandatory for UI stories** - Don't trust "done" without screenshots
2. **Use subagents for browser work** - Protects main context from token bloat
3. **Visual criteria are separate from functional criteria** - Tests pass != looks right
4. **Persistence + perception + reasoning = autonomous UI development**

The pattern is simple. The results are powerful. Ship UI while you sleep.

---

## Related Documents

- `synthesis/mastery-ralph-complete.md` - Complete Ralph pattern reference
- `synthesis/architecture-complexity-ladder.md` - Where this fits in the progression
- `extractions/orchestration/005-ralph-wiggum-loop-pocock.md` - Core Ralph implementation
- `extractions/techniques/mcp-servers-guide.md` - Playwright MCP setup details

---

## Tags

`#orchestration` `#ralph-loop` `#playwright` `#opus-4.5` `#feedback-loops` `#browser-automation` `#visual-verification` `#ui-development` `#autonomous-agent` `#subagent-architecture`

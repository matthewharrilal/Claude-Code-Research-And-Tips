# Ralph Wiggum - Comprehensive Guide (Arvid Kahl)

## Source
- **Author:** @arvidkahl (Arvid Kahl) - Bootstrapped founder, sold FeedbackPanda, "The Bootstrapped Founder"
- **Date:** 2026-01-05
- **URL:** https://x.com/arvidkahl/status/2008202699372626091
- **Engagement:** 1.6K likes, 128K views, 2.3K bookmarks

---

## Core Insight

> "It's a 'we learn from failure'-centric approach. You define your goal condition and let the agent loop over and over until it has verifiably reached that promised goal."

**Key quote:**
> "It might take 2 minutes or a day. But the loop continues to experiment and look at prior work to ultimately get you there."

---

## Quick Install

```bash
# In Claude Code
/plugin
# Type: ralph
```

Or full command:
```bash
/plugin install ralph-wiggum@claude-plugins-official
```

---

## How It Works

1. **Stop hook** intercepts session exits
2. **Re-injects** original prompt with updated context
3. **Agent sees** file changes + git history from prior iterations
4. **Loop continues** until completion promise found or max iterations

---

## Results from Real Use

> "I've been seeing solid results with that. Takes some massaging and setting things up right (mostly for there not to be any interruptions), but when it works, it WORKS."

---

## Thread Gold: Extensions & Alternatives

### Marathon Ralph (@stephen_rayner)
> "Build entire apps with unit and E2E tests following SDLC"

Repo: github.com/gruckion/marathon-ralph

### Dr. Ralph (@MikeEndale)
Multi-phase version with confidence thresholds (80%+ before advancing)

### Lisa (@petruarakiss)
Fork with logging + progress tracking
Repo: github.com/Arakiss/lisa

### Zeroshot (@Eivind1384955)
"Next gen version"
Repo: github.com/covibes/zeroshot/

---

## Critical Warnings

**@seltzergenius:**
> "A word of warning that it doesn't take the place of good planning and context engineering phases... why burn tokens on brute force"

**@f_butz:**
> "My concern: loops without review. Works until it builds something broken in ways you don't notice. What's your verification layer?"

**@Killian_Kirk:**
> "Curious what type of task that would be useful for... those without well defined completion criteria aren't good candidates"

---

## Best Use Cases

✅ Well-defined goals with verifiable completion
✅ Mechanical, repetitive tasks
✅ Migrations (e.g., Jest to Vitest)
✅ Architecture implementation

❌ Ambiguous/subjective tasks ("make this pretty")
❌ Security-sensitive code
❌ Tasks without clear success criteria

---

## Caveats

- Plugin was broken, fix pushed ~10 hours ago
- Windows may need jq/WSL
- High API costs for long loops ($50-100+ for 50 iterations)
- Not a replacement for upfront planning

---

## Mental Model

> "Goal-conditioned loops with memory, evaluation & retry baked in. Once agents can persist, reflect, and verify outcomes autonomously, time becomes the main variable—not human attention."

---

## Deep Dive Resources

- **Video:** youtube.com/watch?v=O2bBWDoxO4s (by @dexhorthy and @GeoffreyHuntley)
- **Official repo:** github.com/delikat/claude-code/tree/main/plugins/ralph-wiggum
- **Rate limiting:** github.com/ghuntley/ralph-claude-code

---

## Actionability

🟡 **Medium Lift** - Need plugin + proper PRD setup

---

## What You'll See When You Run This

**Before running:** Claude Code installed, ready to add the Ralph plugin.

### Installing via Plugin Command

```bash
$ /plugin
```

**Annotated Output:**
```
Plugin Manager                         ← Interactive menu opens
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Search: ralph                          ← Type "ralph"

Results:
  1. ralph-wiggum (official)           ← The one you want
     "Autonomous iteration loops"
     Author: claude-plugins-official
     ★ 1.2k installs

  2. ralph-wiggum-marketer
     "Content generation loops"

Select: 1                              ← Choose official plugin

Installing ralph-wiggum...
  ✓ Downloaded commands/
  ✓ Downloaded hooks/stop-hook.sh
  ✓ Downloaded README.md

✅ ralph-wiggum installed!

Available commands:
  /ralph-loop "<prompt>" --max-iterations N --completion-promise "TEXT"
  /cancel-ralph
```

### Running a Ralph Loop

```bash
$ /ralph-loop "Migrate all Jest tests to Vitest" --completion-promise "MIGRATION COMPLETE" --max-iterations 50
```

**Annotated Output:**
```
🚀 Starting Ralph Wiggum Loop          ← Loop initializing
   Task: Migrate all Jest tests to Vitest
   Max iterations: 50                  ← Safety limit
   Completion promise: "MIGRATION COMPLETE"

=== Iteration 1 of 50 ===

[Claude analyzing codebase...]         ← First iteration explores
                                        (takes 30-60 seconds)

Found 47 test files using Jest
Planning migration strategy:
  1. Install Vitest dependencies
  2. Create vitest.config.ts
  3. Migrate test files one by one
  4. Update package.json scripts

Installing dependencies...
  ✓ vitest
  ✓ @vitest/ui
  ✓ vitest-dom

Creating vitest.config.ts...

[Iteration 1 complete]
  Files touched: 2
  Tests migrated: 0/47                 ← Just setup so far

=== Iteration 2 of 50 ===

Migrating: tests/auth.test.ts
  - jest.fn() → vi.fn()               ← Changing Jest APIs
  - jest.mock() → vi.mock()
  - expect().toMatchSnapshot() → expect().toMatchInlineSnapshot()

Running: npx vitest run tests/auth.test.ts
  ✓ 12 tests passed                   ← Verifying migration worked

[Iteration 2 complete]
  Tests migrated: 1/47

=== Iteration 3 of 50 ===
[...]                                  ← Continues file by file

=== Iteration 23 of 50 ===

Migrating: tests/utils/helpers.test.ts
  (Last remaining file)

Running: npx vitest run
  ✓ 312 tests passed                  ← All tests now passing

Removing Jest dependencies...
  - jest
  - @types/jest
  - ts-jest

Updating package.json...
  "test": "vitest"

MIGRATION COMPLETE                     ← Promise found!

✅ Ralph finished!
   Iterations used: 23 of 50
   Duration: 18 minutes
   Files migrated: 47
   Tests passing: 312/312
```

**Timing Expectations:**
- Migration/refactor tasks: 15-50 iterations
- Each iteration: 30-90 seconds
- Full codebase migration: 15-45 minutes
- Complex multi-file refactors: 30-60 minutes

**What to Do While It Runs:**
- Walk away - it's designed for this
- Check git log to see incremental commits
- The stop hook keeps it running between iterations
- `git log --oneline` shows progress

**Real User Experience (Arvid Kahl):**
> "I've been seeing solid results with that. Takes some massaging and setting things up right (mostly for there not to be any interruptions), but when it works, it WORKS."

**If you skip this pattern:** Migrations like Jest→Vitest require touching every test file - doing this manually takes days, Ralph does it in minutes.

**This connects to:** The "goal-conditioned loop" concept - define the end state ("MIGRATION COMPLETE"), Ralph figures out the path.

---

## Tags
`#orchestration` `#ralph-loop` `#plugin` `#feedback-loops` `#verification` `#extensions`

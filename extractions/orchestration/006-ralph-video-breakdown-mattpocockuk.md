# Ralph Wiggum - Full Video Breakdown (Matt Pocock)

## Source
- **Author:** @mattpocockuk (Matt Pocock) - Total TypeScript author, AI Hero, ex-Vercel
- **Date:** 2026-01-05
- **URL:** https://x.com/mattpocockuk/status/2008200878633931247
- **Engagement:** 4.2K likes, 409K views, 8K bookmarks (VIRAL)

---

## Core Message

> "KISS approach to AI coding that lets you ship while you sleep"

The dream: Wake up to working code that your agent completed overnight.

**Why now:** Opus 4.5 and GPT-5.2 are good enough that simple approaches work.

---

## The Mental Model: Kanban vs Multi-Phase Plans

### Old Way (Multi-Phase Plans)
```
Phase 1 → Phase 2 → Phase 3 → Phase 4
```
Problems:
- Hard to add tasks mid-plan
- Human must figure out exact placement
- Feels onerous

### Ralph Way (Kanban Loop)
```
┌─────────────────────────────────┐
│  Pick task from board           │
│         ↓                       │
│  Complete task                  │
│         ↓                       │
│  Back to board                  │
│         ↓                       │
│  All done? → Exit               │
│  Not done? → Loop               │
└─────────────────────────────────┘
```

**Key shift:** Focus on WHAT it should do at the end, not HOW to get there.

---

## File Structure

```
plans/
├── ralph.sh        # The loop script
├── prd.json        # Task list with passes: true/false
└── progress.txt    # Append-only memory log
```

---

## prd.json Structure

```json
{
  "delete_video_shows_confirmation": {
    "description": "Delete video shows confirmation dialog before deleting",
    "passes": true
  },
  "beats_display": {
    "description": "Beats display as three orange ellipses dots below clip",
    "details": "Add beat to clip, verify 3 orange dots appear",
    "passes": false
  }
}
```

Each task has:
- Description (what to build)
- Verification (how to check)
- `passes: false` → needs work
- `passes: true` → complete

---

## ralph.sh Script

```bash
#!/bin/bash
set -e

MAX_ITERATIONS=$1

for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  echo "Iteration $i / $MAX_ITERATIONS"

  claude "Review plans/prd.json and plans/progress.txt.
    Mark the right PRD items as passes: true.
    Append your progress to progress.txt.
    Make a git commit of that feature.
    Only work on a single feature.
    If PRD is complete, output PROMISE COMPLETE HERE." | tee output.txt

  if grep -q "PROMISE COMPLETE HERE" output.txt; then
    break
  fi
done
```

**Key details:**
- `set -e` → errors throw
- Max iterations as safety backstop
- One feature per iteration
- Git commit each loop
- `PROMISE COMPLETE HERE` stops the loop

---

## progress.txt Purpose

Append-only log for LLM memory across iterations:
```
Use this to leave a note for the next person working on your codebase.

Learned: For beats, use orange (#FF6B35) for visibility.
Next: Consider beat playback item.
```

**Critical:** APPEND only, never UPDATE (would overwrite history)

---

## Feedback Loops Are Essential

Without verification, Ralph produces garbage. Must have:

1. **Type checking:** `pnpm typecheck`
2. **Unit tests:** `pnpm test`
3. **CI green:** Every commit must pass
4. **Browser automation:** Playwright MCP for UI verification

> "Claude's tendency to mark features complete without proper testing... did much better at verifying end-to-end once explicitly prompted to use browser automation tools"
— Anthropic best practices

---

## Task Sizing: THE Critical Factor

**Context rot:** LLMs get stupider with more tokens

If tasks are too big:
- Fill context window before done
- Quality drops dramatically
- Agent loses track

**Rule:** Tasks must be small enough to:
1. Complete in one context window
2. Leave room for verification/testing
3. Allow MCP tool usage (expensive)

---

## Two Modes

### AFK Ralph (Away From Keyboard)
- Full loop, runs overnight
- Wake up to completed work
- Requires bulletproof feedback loops

### HOTL Ralph (Human On The Loop)
- Interactive, one iteration at a time
- Human reviews between loops
- Great for learning and steering
- Use `ralph-once.sh` variant

---

## Demo Result

Matt ran Ralph on his video editing app. In one iteration:
1. Agent picked "beats display" task
2. Created BeatIndicator component
3. Wrote tests
4. Tests passed
5. Marked PRD passes: true
6. Appended learnings to progress.txt
7. Git committed

Result: Three orange dots appeared below clips. Feature complete.

---

## Why JSON for PRD, not Markdown?

**Per Matt:** "Just copied Anthropic's approach"

JSON is:
- Structured (easier for LLM to parse/update)
- Append-only progress.txt avoids overwrite issues
- Follows Anthropic best practices

---

## Handling Errors

**@RalphEcom:** "What if AI doesn't take the right decision?"

**Matt's answer:**
> "Adjust the PRD, set passes to 'false', run Ralph again"

The loop is self-correcting. Bad decisions just need another iteration.

---

## Key Quotes

> "Ralph puts you in the seat of the requirements gatherer... instead of focusing on how it's going to be done, just focus on what it needs to do and how it should behave once complete."

> "The dev branch is always wackier than the main branch. We are experimenting. Some works, some doesn't."

---

## What Ralph DOESN'T Replace

- Good planning
- Context engineering
- Verification layers
- Human oversight for complex decisions

---

## Caveats

- Audio quality poor in this video (OBS settings)
- LLMs have quirks (e.g., prefer w-/h- over size- in Tailwind)
- Expensive MCP usage if tasks aren't small
- Parallel agents cause merge conflicts—use serial

---

## Resources

- **AI Hero:** aihero.dev (Matt's courses)
- **Jeffrey Huntley's original:** ghuntley.com/ralph/
- **Anthropic best practices:** Referenced for PRD format

---

## Actionability

🟡 **Medium Lift** - Need script + PRD setup + feedback loops

### Quick Start
1. Create `plans/` directory
2. Add ralph.sh script
3. Create prd.json with small tasks
4. Create empty progress.txt
5. Run `./plans/ralph.sh 10`
6. Watch magic happen

---

## What You'll See When You Run This

**Before running:** You have plans/ directory with ralph.sh, prd.json, and progress.txt set up.

### Running the Ralph Script

```bash
$ ./plans/ralph.sh 10
```

**Annotated Output:**
```
Iteration 1 / 10                       ← First iteration starting

[Claude initializing...]              ← Claude Code is loading
                                        (takes 5-10 seconds to start)

Reading plans/prd.json...             ← Claude found your task file
  delete_video_shows_confirmation: passes = true    ← Already done
  beats_display: passes = false       ← This needs work

Reading plans/progress.txt...         ← Checking for prior learnings
  Found learnings from previous run   ← Knowledge compounds!

Selecting: beats_display              ← Picked the incomplete task
  "Beats display as three orange ellipses dots below clip"

[Claude working on beats_display...]  ← Claude is now coding
                                        (takes 30-60 seconds)

Creating component: BeatIndicator.tsx
  - Added three ellipsis dots
  - Color: #FF6B35 (orange)          ← Learned this from progress.txt
  - Position: below clip thumbnail

Writing tests...
  - Test: renders three dots
  - Test: dots are orange

Running: pnpm typecheck
  ✓ No type errors                    ← Typecheck passed

Running: pnpm test
  ✓ BeatIndicator.test.tsx passed     ← Tests passed

Updating plans/prd.json...
  beats_display: passes = true        ← Marked complete

Committing: git commit -m "feat: Add beat indicator with orange dots"
  [main 8f3a2c1] feat: Add beat indicator with orange dots

APPEND to plans/progress.txt:
  ---
  Iteration 1 - beats_display
  - Implemented BeatIndicator component
  - Learned: Use #FF6B35 for visibility on dark backgrounds
  - Next: Consider beat playback item

Iteration 2 / 10                       ← Loop continues

Reading plans/prd.json...
  delete_video_shows_confirmation: passes = true
  beats_display: passes = true        ← Now both are done!

All tasks complete!
PROMISE COMPLETE HERE                  ← Stop signal detected

✓ Ralph finished in 2 iterations
```

### AFK Ralph (Overnight Mode)

```bash
$ ./plans/ralph.sh 50 > ralph-log.txt 2>&1 &
$ echo "Ralph running in background with PID $!"
```

**What happens:**
```
Ralph running in background with PID 12345

# You can now:
# - Go to bed
# - Close your laptop
# - Check in the morning

# Morning check:
$ tail -20 ralph-log.txt
```

**Morning output:**
```
Iteration 47 / 50

Reading plans/prd.json...
  All 23 stories: passes = true

All tasks complete!
PROMISE COMPLETE HERE

✓ Ralph finished in 47 iterations
Total time: 1h 23m
Commits made: 23
```

### HOTL Ralph (Human On The Loop Mode)

```bash
$ ./plans/ralph-once.sh
```

**Annotated Output:**
```
=== Single Ralph Iteration ===

Reading plans/prd.json...
Selecting: add_timeline_scrubber

[Claude working...]

Timeline scrubber implemented.
Running tests... PASSED

=== Changes made ===
 src/components/Timeline.tsx | 45 ++++++++++++++++++
 src/hooks/useTimeline.ts    | 23 +++++++++
 2 files changed, 68 insertions(+)

=== PRD Status ===
Remaining tasks:
  - add_export_button
  - fix_audio_sync

Continue to next iteration? (y/n) y  ← You control the pace

=== Single Ralph Iteration ===

[...]
```

**Timing Expectations:**
- Each iteration: 30-90 seconds
- Small feature (5 stories): 10-20 minutes
- Medium feature (15 stories): 30-60 minutes
- Large feature (30+ stories): 1-3 hours overnight

**What to Do While It Runs:**
- AFK mode: Walk away completely
- HOTL mode: Review between iterations
- Either way: Check `git log` for progress
- Check `progress.txt` for learnings

**If you skip the progress.txt:** Future iterations lose the learnings from previous runs - patterns won't compound.

**This connects to:** The Kanban mental model - focus on WHAT needs to be done, not HOW Claude will get there.

---

## Tags
`#orchestration` `#ralph-loop` `#video-guide` `#prd-format` `#feedback-loops` `#kanban-model` `#typescript`

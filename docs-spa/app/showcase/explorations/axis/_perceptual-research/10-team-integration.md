# TeamCreate Integration: How Perceptual Auditing Spawns and Orchestrates Agent Teams

**Designer:** integration-designer
**Date:** 2026-02-10
**Sources:** 06-skill-synthesis.md (712 lines), 03-audit-failure-analysis.md (488 lines), 01-existing-skill-analysis.md (675 lines), MEMORY.md team lessons (6 teams, 100+ agents)

---

## 1. TEAM CREATION PER MODE

### Mode 1: Embedded (90 Seconds) -- NO TEAM

**No TeamCreate call.** The invoking agent performs Embedded mode inline.

The skill injects the 5-question block directly into the calling agent's prompt. The agent takes a screenshot, answers PA-01 through PA-05, and continues its primary task. There is no orchestration, no spawning, no inter-agent communication.

**Why:** 90 seconds is too short for agent spawn overhead (~15-30 sec per agent). The calling agent already has Playwright access. Spawning would waste 30% of the time budget on coordination.

```
Implementation: The CLAUDE.md routing logic detects Embedded mode and
returns the prompt injection text. No Task tool invocation.
```

### Mode 2: Quick (3 Minutes) -- NO TEAM

**No TeamCreate call.** A single agent executes Quick mode.

If invoked by a lead, the lead spawns ONE agent via the Task tool (not TeamCreate) with the Quick mode prompt. If invoked by a builder checking its own work, the builder executes inline (same as Embedded but with Cold Look Protocol added).

**Why:** 3 minutes does not justify team overhead. One agent with Playwright access can take two screenshots (1440px, 768px), perform Cold Look, answer PA-01 through PA-05 for both viewports, and write the verdict.

```
Implementation: Single Task tool call with Quick mode prompt template.
Agent writes output to a designated file and completes.
```

### Mode 3: Standard (30 Minutes) -- TEAM OF 4 AGENTS

**TeamCreate call.** The skill spawns a coordinated team.

```
Team size: 4 agents
  - 1 Research Contextualizer (Wave 1, sequential, must finish first)
  - 2 Visual Auditors (Wave 2, parallel)
  - 1 Synthesizer-Validator (Wave 3, sequential, runs after auditors)
```

**Why 4, not 3 or 5:**
- 1 Contextualizer is mandatory (produces the Lock Sheet that prevents source-code escape)
- 2 Auditors covers the 20-question set across 2 viewports with dimension-based assignment
- 1 Synthesizer merges findings, cross-references against Lock Sheet, produces verdict
- A 5th agent adds coordination cost without proportional value at 30 minutes

### Mode 4: Standalone (60 Minutes) -- FULL TEAM OF 7 AGENTS

**TeamCreate call.** The skill spawns the full audit team.

```
Team size: 7 agents
  - 1 Research Contextualizer (Wave 1)
  - 4 Visual Auditors (Wave 2, parallel, dimension-assigned)
  - 1 Adversarial Agent (Wave 2b, parallel with auditors)
  - 1 Weaver-Synthesizer (Wave 3)
```

**Why 7, not 5 or 9:**
- 4 Auditors cover the full 28-question battery across 3 viewports without context exhaustion
- The Adversarial Agent (PA-28) needs isolation from the main auditors to avoid groupthink
- 1 Weaver synthesizes 5 agent outputs into a unified report
- 9 agents would require a captain layer (hierarchical overhead) for diminishing returns

---

## 2. TEAM NAMING CONVENTION

```
pa-{target-id}-{mode}-{date}
```

**Examples:**
```
pa-ad-001-standard-20260210
pa-od-003-standalone-20260210
pa-homepage-quick-20260210
pa-full-site-standalone-20260210
```

**Rules:**
- `pa` prefix identifies all Perceptual Auditing teams (distinguishes from build, fix, and audit teams)
- `target-id` is the page or exploration being audited (e.g., `ad-001`, `od-003`, `homepage`)
- `mode` is `standard` or `standalone` (Embedded and Quick do not create teams)
- `date` is YYYYMMDD
- All lowercase, hyphen-separated
- If auditing multiple pages, use `multi` or `full-site` as target-id

---

## 3. AGENT SPAWNING SEQUENCE

### Standard Mode (4 agents, 30 minutes)

```
WAVE 1 (Sequential, 0:00-0:05)
  [Research Contextualizer]
  Reads: Lock Sheet sources, convention spec, identity docs
  Writes: Lock Sheet file
  Duration: ~5 min
  MUST COMPLETE before Wave 2 starts

        |
        v (Lock Sheet written)

WAVE 2 (Parallel, 0:05-0:22)
  [Visual Auditor Alpha]          [Visual Auditor Beta]
  PA-01-05, PA-06-11              PA-12-20
  Viewport: 1440px + 768px        Viewport: 1440px + 768px
  Reads: Lock Sheet               Reads: Lock Sheet
  Writes: Findings file           Writes: Findings file
  Duration: ~15 min               Duration: ~15 min

        |                              |
        v                              v

WAVE 3 (Sequential, 0:22-0:30)
  [Synthesizer-Validator]
  Reads: Lock Sheet + both findings files
  Writes: Final audit report
  Duration: ~8 min
```

### Standalone Mode (7 agents, 60 minutes)

```
WAVE 1 (Sequential, 0:00-0:08)
  [Research Contextualizer]
  Reads: Lock Sheet sources (extended list)
  Writes: Lock Sheet file (with cross-page context)
  Duration: ~8 min

        |
        v (Lock Sheet written)

WAVE 2 (Parallel, 0:08-0:40)
  [Auditor A]        [Auditor B]        [Auditor C]        [Auditor D]
  Impression+Emotion Readability+Resp.   Spatial+Grid       Hierarchy+Coherence
  PA-01,04,05,       PA-02,06,07,08,    PA-09,10,11,       PA-03,12,13,
  18,19,20           21,22,23           14,15,17           16,24,25
  3 viewports        3 viewports        3 viewports         3 viewports
  ~25 min            ~25 min            ~25 min             ~25 min

                        [Adversarial Agent]
                        PA-26, PA-27, PA-28
                        Architecture + Red Team
                        ~20 min

        |       |       |       |       |
        v       v       v       v       v

WAVE 3 (Sequential, 0:40-0:60)
  [Weaver-Synthesizer]
  Reads: Lock Sheet + 5 findings files
  Writes: Final comprehensive audit report
  Duration: ~20 min
```

---

## 4. TASK CREATION WITHIN TEAMS

### Standard Mode Task Graph

```
Task #1: "Produce Lock Sheet for {target-id}"
  Status: pending -> in_progress -> completed
  Owner: contextualizer
  blockedBy: []
  blocks: [#2, #3, #4]

Task #2: "Audit PA-01-11 for {target-id}"
  Status: pending (until #1 completes)
  Owner: auditor-alpha
  blockedBy: [#1]
  blocks: [#4]

Task #3: "Audit PA-12-20 for {target-id}"
  Status: pending (until #1 completes)
  Owner: auditor-beta
  blockedBy: [#1]
  blocks: [#4]

Task #4: "Synthesize findings and produce verdict for {target-id}"
  Status: pending (until #2 and #3 complete)
  Owner: synthesizer
  blockedBy: [#2, #3]
  blocks: []
```

### Standalone Mode Task Graph

```
Task #1: "Produce Lock Sheet for {target-id}"
  blockedBy: []
  blocks: [#2, #3, #4, #5, #6]

Task #2: "Audit Impression+Emotion (PA-01,04,05,18,19,20)"
  blockedBy: [#1]
  blocks: [#7]

Task #3: "Audit Readability+Responsiveness (PA-02,06,07,08,21,22,23)"
  blockedBy: [#1]
  blocks: [#7]

Task #4: "Audit Spatial+Grid (PA-09,10,11,14,15,17)"
  blockedBy: [#1]
  blocks: [#7]

Task #5: "Audit Hierarchy+Coherence (PA-03,12,13,16,24,25)"
  blockedBy: [#1]
  blocks: [#7]

Task #6: "Adversarial assessment (PA-26,27,28)"
  blockedBy: [#1]
  blocks: [#7]

Task #7: "Weave all findings into final audit report"
  blockedBy: [#2, #3, #4, #5, #6]
  blocks: []
```

---

## 5. COMMUNICATION PROTOCOL

### Primary: FILE-BASED (Not SendMessage)

All inter-agent data flows through files, not SendMessage. This is a deliberate architectural decision based on 6 teams of lessons learned:

**Why files over messages:**
1. Files survive agent crashes. Messages do not.
2. Files can be read by any subsequent agent. Messages are point-to-point.
3. File existence is verifiable by the lead (the single most reliable completion signal).
4. Files become audit artifacts for provenance.
5. Messages are noise-prone (idle notifications, shutdown requests, acknowledgments).

**When SendMessage IS used:**
- Lock Sheet completion notification (Contextualizer -> Lead): "Lock Sheet written to {path}"
- Critical error that blocks all downstream work (any agent -> Lead)
- Nothing else. All findings, all verdicts, all data flow through files.

### File Locations

All files are written to a scratchpad directory within the target's exploration directory:

```
{target-dir}/_perceptual-audit/
  lock-sheet.md                    # Wave 1 output
  findings-alpha.md                # Auditor Alpha output (Standard)
  findings-beta.md                 # Auditor Beta output (Standard)
  findings-impression-emotion.md   # Auditor A output (Standalone)
  findings-readability-resp.md     # Auditor B output (Standalone)
  findings-spatial-grid.md         # Auditor C output (Standalone)
  findings-hierarchy-coherence.md  # Auditor D output (Standalone)
  findings-adversarial.md          # Adversarial agent output (Standalone)
  AUDIT-REPORT.md                  # Synthesizer/Weaver final output
```

### Data Flow Diagram

```
Convention Spec ──┐
Identity Docs ────┤
Soul Discoveries ─┤──> [Contextualizer] ──> lock-sheet.md
Research Findings ┘                             |
                                                v
                              ┌─────────────────┼─────────────────┐
                              |                 |                 |
                        [Auditor Alpha]   [Auditor Beta]   [Adversarial]
                              |                 |                 |
                              v                 v                 v
                     findings-alpha.md  findings-beta.md  findings-adv.md
                              |                 |                 |
                              └────────┬────────┘                 |
                                       |                          |
                                       v                          |
                              [Synthesizer/Weaver] <──────────────┘
                                       |
                                       v
                              AUDIT-REPORT.md
```

---

## 6. TEAM LIFECYCLE

### Phase A: Initialization (Lead)

1. Lead receives `/perceptual-audit {target} --mode standard` invocation
2. Lead reads SKILL.md to determine team composition for the mode
3. Lead creates the scratchpad directory: `{target-dir}/_perceptual-audit/`
4. Lead verifies HTTP server is running (Playwright requires HTTP, not file://)
5. Lead creates Task #1 (Lock Sheet) and spawns the Contextualizer agent

### Phase B: Lock Sheet Production (Wave 1)

1. Contextualizer reads research files, convention spec, identity docs
2. Contextualizer writes `lock-sheet.md`
3. Contextualizer marks Task #1 as completed
4. Lead detects completion (via TaskList polling or file existence check)
5. Lead spawns Wave 2 agents

### Phase C: Parallel Visual Auditing (Wave 2)

1. Each auditor reads `lock-sheet.md` (ONLY this file -- no source code)
2. Each auditor navigates to the target URL via Playwright
3. Each auditor performs Cold Look Protocol
4. Each auditor answers assigned PA questions using ONLY screenshots
5. Each auditor writes findings file
6. Each auditor marks their task as completed

### Phase D: Synthesis (Wave 3)

1. Synthesizer/Weaver reads Lock Sheet + all findings files
2. Synthesizer cross-references findings against Lock Sheet conventions
3. Synthesizer deduplicates, ranks by visual impact
4. Synthesizer writes AUDIT-REPORT.md with final verdict
5. Synthesizer marks final task as completed

### Phase E: Completion and Cleanup (Lead)

1. Lead reads AUDIT-REPORT.md
2. Lead extracts verdict: SHIP / SHIP WITH CONCERNS / DO NOT SHIP
3. If DO NOT SHIP and fix mode is enabled: Lead spawns fix team (separate TeamCreate)
4. Lead sends shutdown requests to any agents still running
5. Lead reports verdict to the invoking agent or user

### Error Handling

**Agent fails to write file within expected time:**
- Lead checks TaskList every 5 minutes
- If an agent's task is still in_progress after 2x expected duration, lead sends a message asking for status
- If no response after 2 minutes, lead spawns a replacement agent with the same prompt
- The replacement agent checks if a partial findings file exists and continues from there

**Playwright contention (multiple agents competing for browser):**
- Wave 2 agents are spawned with 10-second stagger (not all at once)
- Each agent's prompt includes: "If you cannot access Playwright, wait 30 seconds and retry. If still unavailable after 3 retries, write your findings based on any screenshots you were able to capture and note 'LIMITED PLAYWRIGHT ACCESS' in your report."
- Standard mode (2 auditors) rarely hits contention. Standalone mode (5 Wave 2 agents) will hit it -- the stagger mitigates.

**Lock Sheet agent fails:**
- Lock Sheet is the critical path -- all Wave 2 agents are blocked without it
- If Contextualizer fails (no file after 10 minutes in Standard, 15 in Standalone), lead produces an emergency Lock Sheet directly by reading the minimum required files (convention spec + identity doc) and writing a simplified lock-sheet.md
- Wave 2 then proceeds with the simplified Lock Sheet

**No source code escape detection:**
- Synthesizer checks each auditor's findings for anti-pattern violations (AP-01 through AP-08)
- If an auditor's findings contain CSS property names, hex values, pixel measurements, or selectors, the Synthesizer flags those specific findings as CONTAMINATED and excludes them from the final report
- The Synthesizer documents which agent was contaminated and what percentage of their findings were affected

---

## 7. EXACT PROMPT TEMPLATES

### 7.1 Research Contextualizer Prompt

```
You are the Research Contextualizer for a Perceptual Audit of {target-id}.

YOUR JOB: Read the project's design conventions, identity, and research,
then produce a LOCK SHEET that tells the visual auditors what is LOCKED
(cannot be changed, must not be questioned) versus what is CHALLENGEABLE
(can be questioned if it causes visual problems).

YOU MUST READ THESE FILES:
1. {path-to-convention-spec}     -- The design convention specification
2. {path-to-identity-doc}        -- The accumulated identity document
3. {path-to-soul-discoveries}    -- Soul rules (border-radius: 0, etc.)
4. {path-to-outbound-findings}   -- Findings from previous phases

YOU MAY READ:
- Research files (R1-R5) for deeper context
- Previous audit reports for historical patterns

YOU MAY NOT:
- Use Playwright or take screenshots (you are not a visual agent)
- Read the HTML/CSS source files of the target page
- Make visual judgments (that is the auditors' job)

WHAT YOU PRODUCE:
Write a file called lock-sheet.md to:
{output-path}/_perceptual-audit/lock-sheet.md

The Lock Sheet has exactly this structure:

---
# LOCK SHEET: {target-id}
## Date: {date}

## LOCKED (Do Not Question)
These are identity-defining. If a visual auditor sees something that
violates these, it IS a problem.

| Rule | Value | Why Locked |
|------|-------|------------|
| border-radius | 0 on all elements | Soul rule (anti-physical identity) |
| box-shadow | none | Soul rule |
| filter: drop-shadow | none | Soul rule |
| [etc.] | [etc.] | [etc.] |

## CONVENTION (Question If Visually Problematic)
These are conventions, not identity. If a visual auditor sees a perceptual
problem that traces to a convention value, the convention is challengeable.

| Convention | Current Value | Can Be Questioned If... |
|------------|--------------|------------------------|
| max-width | 860px | Content is cramped |
| code block bg | #1A1A1A | Creates jarring contrast |
| [etc.] | [etc.] | [etc.] |

## PREVIOUS FINDINGS (What's Already Known)
These problems have been identified in prior audits. Auditors should
check if they are FIXED or STILL PRESENT, but should not spend time
re-discovering them.

| Finding ID | Description | Status |
|------------|-------------|--------|
| [etc.] | [etc.] | FIXED / STILL PRESENT / UNKNOWN |

## CROSS-PAGE CONTEXT
If auditing one page in a collection, these are the sibling pages for
cross-page comparison (PA-24, PA-25).

| Sibling Page | URL | Key Visual Characteristics |
|-------------|-----|---------------------------|
| [etc.] | [etc.] | [etc.] |
---

CRITICAL RULES:
1. You MUST write the file using the Write tool before completing
2. Mark your task as completed using TaskUpdate after writing
3. Do NOT include your own visual opinions -- you have not seen the page
4. Keep the Lock Sheet under 200 lines -- auditors need to read it quickly
```

### 7.2 Visual Auditor Prompt (Standard Mode -- Alpha)

```
You are Visual Auditor Alpha for a Perceptual Audit of {target-id}.

YOUR JOB: LOOK at the rendered page and describe what you SEE. You are
a designer evaluating visual quality, NOT a rule-checker scanning CSS.

THE ONE RULE: React to what you see before you check what you know.

YOU MUST READ FIRST:
1. {output-path}/_perceptual-audit/lock-sheet.md
   This tells you what is LOCKED vs CHALLENGEABLE.

YOU MUST USE:
- Playwright (browser_snapshot, browser_take_screenshot, browser_navigate)
- Write tool (to write your findings file)
- TaskUpdate (to mark your task complete)

YOU MUST NOT USE:
- Read tool on ANY .html, .css, .tsx, .ts, or .js file
  (Reading source code is FORBIDDEN -- you assess visual output only)
- Grep or Glob to search source code
- browser_evaluate to run DOM scans or computed-style checks
  (You LOOK at screenshots, you do not run JavaScript diagnostics)

YOUR ASSIGNED QUESTIONS (answer all for 1440px AND 768px viewports):

PA-01: What's the first thing that bothers you?
PA-02: Is any text uncomfortable to read? Point to the worst spot.
PA-03: Does this feel like one designer made it, or three?
PA-04: Where does your eye go first? Is that where it SHOULD go?
PA-05: Would you put your name on this? What would you fix first?
PA-06: Are any words stacking vertically, one per line, in any column?
PA-07: Can you read the longest paragraph without your eye losing its place?
PA-08: Is there any text you have to lean in or squint to read?
PA-09: Is there dead space that serves no purpose?
PA-10: If you squint until you can't read any text, does the layout look balanced?
PA-11: Are the margins generous (confident) or anxious (clutching)?

EXACT PROCEDURE:

Step 1: Navigate to {target-url} at 1440px viewport width.

Step 2: COLD LOOK PROTOCOL.
  - Take a screenshot.
  - Look at it for 5 seconds. Do NOT read text. Absorb shape, color, weight.
  - Write IMMEDIATELY (these are LOCKED, you cannot change them later):
    Gut reaction: [one sentence -- what did you FEEL?]
    Worst thing: [one element or area]
    Best thing: [one element or area]
    Ship verdict: YES / YES WITH RESERVATIONS / NO

Step 3: Scroll through the ENTIRE page, taking screenshots every ~1500px.

Step 4: Answer PA-01 through PA-11 for the 1440px viewport.
  For each answer:
  - Use PLAIN LANGUAGE ONLY (no CSS properties, no hex values, no px)
  - Describe what you SEE and FEEL, not what the code says
  - If something bothers you, say WHERE on the page and WHY it bothers you
  - Assign severity: WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER

Step 5: Resize to 768px. Take a new screenshot. Perform abbreviated Cold Look.

Step 6: Answer PA-01 through PA-11 again for 768px.

Step 7: Write your findings file.

ANTI-PATTERN SELF-CHECK (before writing findings):
  If ANY of your answers contain:
  - A CSS property name (border-radius, padding, margin, font-size, etc.)
  - A hex color value (#FEF9F5, #1A1A1A, etc.)
  - A pixel measurement (64px, 860px, 16px, etc.)
  - A CSS selector (.callout, .hero, section:nth-child, etc.)
  THEN that answer is INVALID. Rewrite it using human words:
  heavy, cramped, jarring, floating, anxious, confident, broken, polished,
  warm, cold, balanced, lopsided, rhythmic, monotonous, inviting, hostile.

OUTPUT FILE: Write to {output-path}/_perceptual-audit/findings-alpha.md

OUTPUT FORMAT:
---
# Findings: Visual Auditor Alpha
## Target: {target-id}
## Date: {date}

## Cold Look (1440px) -- LOCKED
Gut reaction: [sentence]
Worst thing: [element/area]
Best thing: [element/area]
Ship verdict: [verdict]

## Cold Look (768px) -- LOCKED
Gut reaction: [sentence]
Worst thing: [element/area]
Best thing: [element/area]
Ship verdict: [verdict]

## Findings (1440px)

### PA-01: First Impression
[plain language answer]
Severity: [WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER / CLEAN]
Location: [where on the page]

### PA-02: Text Comfort
[plain language answer]
Severity: [severity]
Location: [where]

[...continue for PA-03 through PA-11...]

## Findings (768px)
[...same structure...]

## Top 3 Concerns (ranked by visual impact)
1. [concern, location, severity]
2. [concern, location, severity]
3. [concern, location, severity]

## Anti-Pattern Self-Check
- Contains CSS property names? [YES/NO]
- Contains hex values? [YES/NO]
- Contains pixel measurements? [YES/NO]
- Contains selectors? [YES/NO]
If any YES: [which answers were rewritten]
---

CRITICAL:
1. You MUST write your findings file using the Write tool
2. You MUST mark your task as completed using TaskUpdate
3. If you cannot access Playwright, wait 30 seconds and retry (3 attempts max)
4. If Playwright remains unavailable, note "LIMITED ACCESS" and complete
   what you can from any screenshots you captured
```

### 7.3 Visual Auditor Prompt (Standard Mode -- Beta)

```
You are Visual Auditor Beta for a Perceptual Audit of {target-id}.

[Same preamble as Alpha: THE ONE RULE, MUST READ, MUST USE, MUST NOT USE]

YOUR ASSIGNED QUESTIONS (answer all for 1440px AND 768px viewports):

PA-12: Do your eyes flow smoothly from section to section, or get stuck?
PA-13: Is there a clear visual ending, or does the page just stop?
PA-14: Does every column have enough room for its content to breathe?
PA-15: Trace the left edge of every content block top to bottom -- how
       many different starting positions?
PA-16: Pick two elements that should look identical. Do they actually?
PA-17: Is there a visual rhythm to the page, or does it feel random?
PA-18: Do all the grays/neutrals feel like the same family?
PA-19: Is there any element that feels like it's from a different website?
PA-20: Describe this page's personality in three words. Does that match
       the intended personality?

[Same EXACT PROCEDURE as Alpha: Cold Look, scroll, answer, resize, answer]

[Same ANTI-PATTERN SELF-CHECK]

OUTPUT FILE: Write to {output-path}/_perceptual-audit/findings-beta.md

[Same OUTPUT FORMAT structure, substituting PA-12-20 for PA-01-11]

[Same CRITICAL rules]
```

### 7.4 Visual Auditor Prompts (Standalone Mode -- A through D)

Each Standalone auditor receives the same structure as Standard auditors with these differences:

**Auditor A (Impression + Emotion):**
- Questions: PA-01, PA-04, PA-05, PA-18, PA-19, PA-20
- Viewports: 1440px, 1024px, 768px (three, not two)
- Output: `findings-impression-emotion.md`

**Auditor B (Readability + Responsiveness):**
- Questions: PA-02, PA-06, PA-07, PA-08, PA-21, PA-22, PA-23
- Viewports: 1440px, 1024px, 768px
- Output: `findings-readability-resp.md`

**Auditor C (Spatial + Grid):**
- Questions: PA-09, PA-10, PA-11, PA-14, PA-15, PA-17
- Viewports: 1440px, 1024px, 768px
- Output: `findings-spatial-grid.md`

**Auditor D (Hierarchy + Coherence + Cross-Page):**
- Questions: PA-03, PA-12, PA-13, PA-16, PA-24, PA-25
- Viewports: 1440px, 1024px, 768px
- Additional: For PA-24 and PA-25, navigate to 1-2 sibling pages listed in
  the Lock Sheet for cross-page comparison screenshots
- Output: `findings-hierarchy-coherence.md`

All four receive the identical MUST NOT USE restrictions (no source code reading, no DOM scanning) and the identical anti-pattern self-check.

### 7.5 Adversarial Agent Prompt (Standalone Only)

```
You are the Adversarial Agent for a Perceptual Audit of {target-id}.

YOUR JOB: Challenge the design. Find how it could fail. Question whether
conventions are CAUSING visual problems.

Unlike the visual auditors (who assess quality), you assess FRAGILITY.
You are the red team.

YOU MUST READ:
1. {output-path}/_perceptual-audit/lock-sheet.md
   Pay special attention to the CONVENTION (Challengeable) section.

YOU MUST USE:
- Playwright (screenshots, navigation, resize)
- Write tool
- TaskUpdate

YOU MUST NOT USE:
- Read tool on .html, .css, .tsx, .ts, .js files
- browser_evaluate for DOM scans
  (You are a visual adversary, not a code auditor)

YOUR QUESTIONS:

PA-26: Is there any convention (max-width, column count, spacing value)
       that seems to be CAUSING a visual problem? Look at the Lock Sheet's
       CONVENTION section. For each challengeable convention, check: does
       this convention produce good visual results, or is it creating
       problems that everyone has been tolerating?

PA-27: If you were designing this from scratch with no existing code,
       would you design it this way? What would you do differently?
       This is not about the code -- it is about the DESIGN INTENT.
       Would a designer starting fresh make these choices?

PA-28: How could someone make this page look terrible while still passing
       every rule check? What content would break it? What viewport would
       expose it? What edge case would embarrass it?
       Test this by:
       a) Resizing the viewport in 50px increments from 1440 down to 320.
          Screenshot any width where the design looks broken.
       b) Looking at areas where content length varies. Does the design
          handle both short and long content gracefully?
       c) Checking what happens at viewport widths that are NOT the
          standard breakpoints (e.g., 900px, 1100px, 500px).

EXACT PROCEDURE:

Step 1: Read Lock Sheet.

Step 2: Navigate to {target-url} at 1440px.

Step 3: For PA-26, systematically check each convention listed as
CHALLENGEABLE in the Lock Sheet. For each:
  - Look at the page. Does this convention produce good visual results?
  - If not, describe the visual problem in plain language.
  - Propose what the convention SHOULD be (based on visual evidence).

Step 4: For PA-27, imagine you are designing this page from scratch.
  - What would you keep?
  - What would you change?
  - What is clearly constraint-shaped vs intention-shaped?

Step 5: For PA-28, perform the fragility tests:
  - Resize from 1440 to 320 in 50px increments (screenshot breakage points)
  - Identify content edge cases
  - Identify "almost broken" states

Step 6: Write findings file.

OUTPUT FILE: Write to {output-path}/_perceptual-audit/findings-adversarial.md

OUTPUT FORMAT:
---
# Findings: Adversarial Agent
## Target: {target-id}
## Date: {date}

## PA-26: Convention Challenges

### Convention: [name from Lock Sheet]
Visual problem: [what it looks like]
Root cause: [which convention value]
Classification: RESEARCH-BACKED / INHERITED / FOSSILIZED
Proposed resolution: [what would fix the visual problem]
Evidence: [screenshot reference or description]

[...repeat for each convention challenged...]

## PA-27: From-Scratch Assessment
What I would keep: [list]
What I would change: [list with visual reasoning]
Constraint-shaped decisions: [what was forced by code, not design intent]

## PA-28: Fragility Map

### Breakage Points
| Viewport Width | What Breaks | Screenshot |
|---------------|-------------|------------|
| [width] | [description] | [ref] |

### Content Edge Cases
[description of what content would break the design]

### "Almost Broken" States
[description of states that are one change away from failure]

## Risk Assessment
Fragility rating: ROBUST / ADEQUATE / FRAGILE / BRITTLE
Highest-risk area: [location and why]
---

CRITICAL:
1. You MUST write your findings file using the Write tool
2. You MUST mark your task as completed
3. Convention challenges are PROPOSALS, not unilateral changes
4. Use plain language in all descriptions (no CSS properties)
```

### 7.6 Synthesizer-Validator Prompt (Standard Mode)

```
You are the Synthesizer-Validator for a Perceptual Audit of {target-id}.

YOUR JOB: Read all findings files, cross-reference against the Lock Sheet,
deduplicate, rank by visual impact, and produce the final audit report
with a verdict.

YOU MUST READ:
1. {output-path}/_perceptual-audit/lock-sheet.md
2. {output-path}/_perceptual-audit/findings-alpha.md
3. {output-path}/_perceptual-audit/findings-beta.md

YOU MUST USE:
- Read tool (to read findings files and Lock Sheet)
- Write tool (to write the final report)
- TaskUpdate (to mark completion)

YOU MUST NOT USE:
- Playwright (you are not a visual agent -- you synthesize written findings)
- Read on any .html, .css, .tsx, .ts, .js source file
- Grep or Glob on source code

YOUR TASKS:

1. CONTAMINATION CHECK
   For each auditor's findings, check for anti-pattern violations:
   - Does any finding contain CSS property names? FLAG as CONTAMINATED.
   - Does any finding contain hex values? FLAG.
   - Does any finding contain pixel measurements? FLAG.
   - Does any finding reference CSS selectors? FLAG.
   Contaminated findings are EXCLUDED from the final report.
   Document what was excluded and why.

2. CROSS-REFERENCE AGAINST LOCK SHEET
   For each finding:
   - Does it flag a LOCKED rule? If yes, classify as RULE TRACK finding.
   - Does it flag a CONVENTION? If yes, classify as PERCEPTION TRACK finding.
   - Does it flag something not in the Lock Sheet? Classify as NOVEL PERCEPTION.

3. DEDUPLICATION
   If Alpha and Beta flagged the same visual problem:
   - Merge into one finding.
   - Note: "Confirmed by 2 independent auditors" (raises confidence).
   - Use the more descriptive version.

4. RANKING
   Rank all surviving findings by visual impact:
   - WOULD-NOT-SHIP findings are always ranked highest
   - LOOKS-WRONG next
   - COULD-BE-BETTER last
   - Within each tier, rank by how many auditors flagged it

5. COLD LOOK CONCORDANCE
   Compare the Cold Look verdicts from both auditors:
   - Do they agree? (HIGH CONCORDANCE = high confidence)
   - Do they disagree? (FLAG -- investigate why)
   - Did any Cold Look say NO but structured findings say SHIP? (FLAG -- contamination likely)

6. FINAL VERDICT
   Based on all findings:
   - SHIP: No WOULD-NOT-SHIP findings. Few or no LOOKS-WRONG findings.
   - SHIP WITH CONCERNS: No WOULD-NOT-SHIP, but multiple LOOKS-WRONG.
   - DO NOT SHIP: Any WOULD-NOT-SHIP finding survives dedup and validation.

OUTPUT FILE: Write to {output-path}/_perceptual-audit/AUDIT-REPORT.md

OUTPUT FORMAT:
---
# PERCEPTUAL AUDIT REPORT: {target-id}
## Date: {date}
## Mode: Standard (20 questions, 2 viewports, 2 auditors)

## VERDICT: [SHIP / SHIP WITH CONCERNS / DO NOT SHIP]

## Cold Look Summary
| Auditor | 1440px Gut | 768px Gut | Ship? |
|---------|-----------|----------|-------|
| Alpha | [sentence] | [sentence] | [verdict] |
| Beta | [sentence] | [sentence] | [verdict] |
Concordance: [HIGH / MODERATE / LOW]

## Top 5 Findings (ranked by visual impact)

### 1. [Finding Title]
Track: [RULE / PERCEPTION / NOVEL]
Severity: [WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER]
Confirmed by: [Alpha / Beta / Both]
Description: [merged plain-language description]
Location: [where on the page]

[...continue for findings 2-5...]

## All Findings by Track

### Perception Track
[table of all perception findings with severity and location]

### Rule Track
[table of all rule findings]

### Novel Perceptions
[table of findings not covered by Lock Sheet]

## Contamination Report
| Auditor | Contaminated Findings | % of Total | Excluded |
|---------|----------------------|-----------|----------|
| Alpha | [count] | [%] | [list] |
| Beta | [count] | [%] | [list] |

## Audit Metadata
- Questions answered: [count]
- Viewports tested: 1440px, 768px
- Lock Sheet conventions checked: [count]
- Total findings (pre-dedup): [count]
- Total findings (post-dedup): [count]
- Contaminated findings excluded: [count]
---

CRITICAL:
1. You MUST write AUDIT-REPORT.md using the Write tool
2. You MUST mark your task as completed
3. You are the LAST agent -- your output IS the deliverable
4. Do NOT add your own visual opinions -- you synthesize, not perceive
5. If an auditor failed to write their findings file, note this in the
   report as "MISSING INPUT" and produce the best report possible from
   available data
```

### 7.7 Weaver-Synthesizer Prompt (Standalone Mode)

Same structure as the Standard Synthesizer with these additions:

- Reads 5 findings files instead of 2 (Auditors A-D plus Adversarial)
- Includes a CONVENTION CHALLENGE section synthesizing PA-26/27 findings
- Includes a FRAGILITY ASSESSMENT section from PA-28
- Cross-references all 28 questions (not just 20)
- Produces a more detailed report (~300-500 lines vs ~150-200)
- Includes a FIX RECOMMENDATIONS section ranked by visual impact
- Includes CROSS-PAGE FINDINGS section from Auditor D's PA-24/25 work

---

## 8. PARALLEL VS SEQUENTIAL -- COMPLETE MAP

### What Runs in Parallel

| Agents | Why Parallel |
|--------|-------------|
| Wave 2 Visual Auditors (all) | Each has assigned questions with no overlap. Each reads the same Lock Sheet independently. No shared mutable state. |
| Adversarial + Visual Auditors | Adversarial has different questions (PA-26-28) and a different cognitive mode (challenge vs assess). No data dependency. |

### What MUST Be Sequential

| Dependency | Why Sequential |
|-----------|---------------|
| Lock Sheet -> Auditors | Auditors need the Lock Sheet to know what is LOCKED vs CHALLENGEABLE. Without it, they either skip convention assessment or (worse) question identity rules. |
| Auditors -> Synthesizer | Synthesizer needs all findings files to deduplicate and rank. Partial synthesis produces incomplete reports. |
| Lock Sheet -> Adversarial | Adversarial agent needs the CONVENTION section to know what to challenge. Without it, they challenge identity rules (waste of time). |

### Timing Budget (Standard Mode, 30 min)

```
0:00-0:05  Wave 1: Contextualizer produces Lock Sheet (5 min)
0:05-0:06  Lead spawns Wave 2 agents (1 min)
0:06-0:22  Wave 2: Two auditors work in parallel (16 min)
0:22-0:23  Lead detects completion, spawns Wave 3 (1 min)
0:23-0:30  Wave 3: Synthesizer produces report (7 min)
```

### Timing Budget (Standalone Mode, 60 min)

```
0:00-0:08  Wave 1: Contextualizer produces Lock Sheet (8 min)
0:08-0:10  Lead spawns Wave 2 agents with stagger (2 min)
0:10-0:38  Wave 2: Five agents work in parallel (28 min)
0:38-0:40  Lead detects completion, spawns Wave 3 (2 min)
0:40-0:60  Wave 3: Weaver produces comprehensive report (20 min)
```

### Stagger Schedule (Standalone, Wave 2)

To reduce Playwright contention, agents are spawned 10 seconds apart:

```
0:10:00  Spawn Auditor A (Impression + Emotion)
0:10:10  Spawn Auditor B (Readability + Responsiveness)
0:10:20  Spawn Auditor C (Spatial + Grid)
0:10:30  Spawn Auditor D (Hierarchy + Coherence)
0:10:40  Spawn Adversarial Agent
```

This gives each agent time to initialize and take its first screenshot before the next agent starts competing for the browser. Based on prior team experience (OD Comprehensive Audit: 13 visual workers, only 2 got reliable Playwright access), this stagger is the minimum viable mitigation.

---

## 9. INTEGRATION WITH FIX TEAMS

If the audit verdict is DO NOT SHIP or SHIP WITH CONCERNS (with the invoker requesting fixes), the skill can spawn a secondary fix team. This is a SEPARATE TeamCreate call, not an extension of the audit team.

### Fix Team Structure

```
Team name: pa-fix-{target-id}-{date}
Team size: 2-4 agents depending on findings

Agent types:
  - Fixer agents (1 per file with findings, parallel, file-ownership model)
  - Re-verification agent (1, sequential after all fixers complete)
```

**Key rule from prior experience:** Per-file ownership eliminates all contention. If 3 files need fixes, spawn 3 fixers, each owning one file. Never assign two fixers to the same file.

**Fix team prompts include the Embedded Mode injection:** After applying any CSS fix, the fixer MUST take a screenshot and answer PA-01 and PA-02 for the fixed area. This prevents the "changed a number but didn't improve the visual" failure mode.

**Re-verification agent runs a Quick mode audit** on each fixed file to confirm the fixes actually improved the visual quality, not just changed CSS values.

---

## 10. SKILL ROUTING (CLAUDE.md Integration)

The skill's CLAUDE.md file routes invocations to the correct mode:

```
/perceptual-audit {target}                    -> Quick mode (default)
/perceptual-audit {target} --mode embedded    -> Embedded mode (inline)
/perceptual-audit {target} --mode quick       -> Quick mode
/perceptual-audit {target} --mode standard    -> Standard mode (team of 4)
/perceptual-audit {target} --mode standalone  -> Standalone mode (team of 7)
/perceptual-audit {target} --mode standalone --fix  -> Standalone + fix team
```

The CLAUDE.md file contains the routing logic but NOT the full prompt templates. The prompt templates live in SKILL.md. This separation keeps CLAUDE.md under 50 lines (agent-readable) while SKILL.md holds the complete operational protocol.

---

*TeamCreate integration design complete. 2026-02-10.*

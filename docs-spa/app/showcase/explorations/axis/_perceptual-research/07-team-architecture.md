# Perceptual Auditing: Internal Team Architecture

**Author:** team-architect agent
**Date:** 2026-02-10
**Source:** 06-skill-synthesis.md (712 lines), MEMORY.md agent team lessons (6 prior teams)
**Purpose:** Define the internal team that the Perceptual Auditing skill spawns when invoked in Standard or Standalone mode.

---

## 1. TEAM SCALING BY MODE

Not every mode needs a team. The skill scales from zero agents (Embedded) to seven agents (Standalone).

| Mode | Team Size | Who | Spawning Mechanism |
|------|-----------|-----|-------------------|
| **Embedded** | 0 agents | The builder/fixer agent itself answers PA-01 through PA-05 inline. No team. No spawn. | None -- prompt injection only |
| **Quick** | 0 agents | The invoking agent answers PA-01 through PA-05 with Cold Look. No team. | None -- prompt injection only |
| **Standard** | 3-4 agents | Lead + 2 Visual Auditors + 1 Research Validator (doubles as Weaver) | TeamCreate with 3-4 members |
| **Standalone** | 5-7 agents | Lead + Research Contextualizer + 2-3 Visual Auditors + Research Validator + 1-2 Fixers + Weaver | TeamCreate with 5-7 members |

### Why Embedded and Quick Have No Team

Embedded Mode is a prompt injection into an existing agent. It adds 90 seconds of self-assessment. Spawning a team for 5 questions would take longer than answering them. Quick Mode is similar -- 3 minutes of work by the invoking agent. The overhead of team creation (agent boot, context loading, message routing) exceeds the work itself.

### When Standard Escalates to Standalone

The Lead makes this call based on:
- **Page count:** 1 page = Standard, 2+ pages = Standalone (cross-page questions PA-24/PA-25 require it)
- **Viewport count:** 2 viewports = Standard, 3 viewports = Standalone
- **Fix authority:** If the invoker wants fixes applied (not just findings), Standalone is required (needs Fixer agents)
- **Prior audit results:** If a previous Standard audit returned WOULD-NOT-SHIP findings, escalate to Standalone for the re-audit

---

## 2. ROLE DEFINITIONS

### 2.1 Lead (The Skill Invoker)

The agent that invokes `/perceptual-audit` becomes the Lead. The Lead does NOT do visual work, does NOT read source code, does NOT make fixes. The Lead orchestrates.

**CAN do:**
- Create the team (TeamCreate)
- Assign questions to Visual Auditors via SendMessage
- Receive findings from all agents via SendMessage
- Make mode-escalation decisions (Standard -> Standalone)
- Reject anti-pattern-contaminated answers (answers containing CSS property names, pixel values, or spec references)
- Update TaskUpdate for tracking
- Read team output files to verify completeness
- Make the final SHIP / SHIP WITH CONCERNS / DO NOT SHIP verdict if Weaver is not present (Standard mode)

**CANNOT do:**
- Take screenshots (NO Playwright)
- Read CSS/HTML source files
- Make fixes to any file
- Answer PA questions themselves (that would be Embedded mode, not team mode)
- Override the Research Lock Sheet classifications

**Produces:**
- Team creation messages with role assignments
- Anti-pattern rejection messages ("Your answer to PA-01 contains 'border-radius'. Rewrite using visual language only.")
- Final status updates

**Communication:** SendMessage to all team members. Receives from all. Central hub.

**Spawned in:** Standard, Standalone (always present as the invoker)

---

### 2.2 Research Contextualizer

This agent operates in a RESEARCH-ONLY world. It never sees the page. It never takes screenshots. It reads documents to understand WHY the page looks the way it does and produces a Research Lock Sheet that governs all downstream classification.

**CAN do:**
- Read research files (R1-R5, RESEARCH-SYNTHESIS.md)
- Read provenance chain files (ACCUMULATED-IDENTITY, SOUL-DISCOVERIES, stage provenance)
- Read convention specs (AD-CONVENTION-SPEC.md, DD/OD outbound findings)
- Read DESIGN-SYSTEM/tokens/* for locked values
- Read anti-patterns registry
- Read previous audit results and DISCOVERIES-LOG
- Write the Research Lock Sheet output file

**CANNOT do:**
- Take screenshots (NO Playwright access)
- Navigate to any URL
- Read CSS source files of the page being audited (distinction: convention SPECS yes, page SOURCE no)
- Read HTML source files of the page being audited
- Make any file modifications beyond writing the Lock Sheet
- Communicate directly with Visual Auditors (all routing through Lead or Weaver)

**Produces:** Research Lock Sheet (written to file)

```
RESEARCH LOCK SHEET
Generated: [timestamp]
Page(s) under audit: [page names]

═══════════════════════════════════════════════════
LOCKED DECISIONS (Research-Backed — Do Not Challenge)
═══════════════════════════════════════════════════

| Decision | Value/Behavior | Research Basis | Lock Strength |
|----------|---------------|----------------|---------------|
| border-radius | 0 on all elements | Soul Rule, ANTI-PHYSICAL identity | ABSOLUTE |
| box-shadow | none | Soul Rule | ABSOLUTE |
| Typography stack | Inter/JetBrains Mono | R1-028, identity lock | STRONG |
| Max-width | 860px (content container) | Convention spec, DD/OD validated | MODERATE |
| ... | ... | ... | ... |

Lock Strength Key:
  ABSOLUTE = Soul rule, identity-defining, NEVER challenge
  STRONG   = Research-validated across multiple explorations
  MODERATE = Convention-established, single validation pass
  WEAK     = Inherited from prior phase, not independently validated

═══════════════════════════════════════════════════
CHALLENGEABLE VALUES (Inherited/Fossilized — May Be Questioned)
═══════════════════════════════════════════════════

| Value | Current Setting | Origin | Why Challengeable |
|-------|----------------|--------|-------------------|
| Column count (bento) | 4 columns | DD-003 convention | Never tested at AD scale |
| Section gap | 64px | OD convention | May be too rigid for axis flow |
| ... | ... | ... | ... |

═══════════════════════════════════════════════════
UNKNOWN PROVENANCE (No Research Found)
═══════════════════════════════════════════════════

| Value | Current Setting | Note |
|-------|----------------|------|
| ... | ... | Treat as CHALLENGEABLE |
```

**Communication:** Sends Lock Sheet to Lead (who distributes to Research Validator). Does NOT send to Visual Auditors -- they must not be primed with research knowledge.

**Spawned in:** Standalone only. In Standard mode, the Research Validator performs a lightweight version of this role.

---

### 2.3 Visual Auditor (2-3 agents in parallel)

These are the core perceptual agents. Their ENTIRE input is visual -- screenshots only. They are the skill's reason for existing: agents that LOOK before they KNOW.

**CAN do:**
- Take screenshots via Playwright (browser_take_screenshot, browser_snapshot)
- Navigate to pages via Playwright (browser_navigate)
- Resize viewport via Playwright (browser_resize)
- Look at screenshots (Read tool on screenshot files)
- Write their findings to an output file (Write tool)
- Communicate findings to Lead/Weaver via SendMessage

**CANNOT do:**
- Read ANY source file (.css, .html, .tsx, .ts, .md, .json) -- ABSOLUTE prohibition
- Use Grep or Glob to search the codebase
- Use browser_evaluate to inspect DOM properties
- Use browser_console_messages to check for errors
- Use browser_network_requests to check network activity
- Open DevTools or any inspection tool
- Reference pixel values, hex codes, CSS property names, or technical measurements in their answers
- Read the Research Lock Sheet (they must not know what is LOCKED vs CHALLENGEABLE)
- Communicate with Research Contextualizer (information isolation)

**The Source-Reading Prohibition -- Enforcement Mechanism:**

The prompt for Visual Auditors contains this exact block:

```
YOU ARE A VISUAL-ONLY AUDITOR.

TOOL RESTRICTIONS (HARD BLOCK):
- You may ONLY use: browser_navigate, browser_resize, browser_take_screenshot,
  browser_snapshot, Read (ONLY for screenshot image files), Write, SendMessage, TaskUpdate
- You may NOT use: Grep, Glob, Bash, Edit, Read (for any non-image file)
- If you find yourself wanting to "check the CSS" or "look at the source" --
  STOP. That impulse is the analytical escape (AP-01). Describe what you SEE instead.

LANGUAGE RESTRICTIONS (HARD BLOCK):
- Your answers may NOT contain: px, rem, em, %, hex (#), rgb, rgba, hsl,
  border-radius, box-shadow, padding, margin, font-size, font-family,
  line-height, max-width, min-width, flex, grid, gap, opacity, z-index,
  overflow, display, position, or ANY CSS property name.
- Use instead: heavy, light, cramped, spacious, jarring, smooth, floating,
  grounded, anxious, confident, broken, polished, loud, quiet, warm, cold,
  sharp, soft, cluttered, breathing, stacking, flowing, stuck, drifting.

If any answer contains a CSS property name, that answer is INVALID and will
be rejected by the Lead. You will be asked to rewrite it.
```

**Produces:** Perceptual Findings Report (written to file)

```
PERCEPTUAL FINDINGS — Visual Auditor [A/B/C]
Assigned Dimensions: [list]
Viewport(s) Assessed: [1440px / 1024px / 768px]

═══════════════════════════════════════════════════
COLD LOOK PROTOCOL
═══════════════════════════════════════════════════

Viewport: 1440px
Gut reaction: [one sentence -- LOCKED]
Worst thing: [one element/area -- LOCKED]
Best thing: [one element/area -- LOCKED]
Ship verdict: [YES / YES WITH RESERVATIONS / NO -- LOCKED]

Viewport: 768px
[same structure]

═══════════════════════════════════════════════════
PA QUESTION RESPONSES
═══════════════════════════════════════════════════

PA-[XX]: [Question text]
Response: [plain language, no technical terms]
Concern: [YES/NO]
If YES:
  What I see: [description]
  Where on page: [location in visual terms -- "top third", "left column", "below the hero"]
  Severity: [WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER]

[repeat for each assigned question]

═══════════════════════════════════════════════════
TOP 3 CONCERNS (ranked by visual impact)
═══════════════════════════════════════════════════

1. [concern, location, severity]
2. [concern, location, severity]
3. [concern, location, severity]
```

**Communication:** Sends findings to Lead and Weaver via SendMessage. Receives question assignments from Lead. Does NOT communicate with Research Contextualizer or Research Validator.

**Spawned in:** Standard (2 auditors), Standalone (2-3 auditors)

**Parallel Assignment (Standalone -- 3 auditors):**

| Agent | Dimensions | Questions | Estimated Time |
|-------|-----------|-----------|----------------|
| Auditor-A | First Impression + Emotion + Color | PA-01, PA-04, PA-05, PA-18, PA-19, PA-20 | 12 min |
| Auditor-B | Readability + Spatial + Grid | PA-02, PA-06, PA-07, PA-08, PA-09, PA-10, PA-11, PA-14, PA-15 | 15 min |
| Auditor-C | Hierarchy + Coherence + Flow + Cross-Page | PA-03, PA-12, PA-13, PA-16, PA-17, PA-24, PA-25 | 15 min |

Architecture and Adversarial questions (PA-26, PA-27, PA-28) are handled by the Research Validator, who has access to both visual findings AND research context.

**Parallel Assignment (Standard -- 2 auditors):**

| Agent | Dimensions | Questions |
|-------|-----------|-----------|
| Auditor-A | First Impression + Readability + Emotion | PA-01, PA-02, PA-04, PA-05, PA-06, PA-07, PA-08, PA-18, PA-19, PA-20 |
| Auditor-B | Spatial + Grid + Coherence + Flow | PA-03, PA-09, PA-10, PA-11, PA-12, PA-13, PA-14, PA-15, PA-16, PA-17 |

**Playwright Contention Mitigation:**

Prior teams (MEMORY.md) documented severe Playwright contention: only 2/13 visual workers got actual Playwright access. To prevent this:

1. Visual Auditors are spawned in a STAGGERED wave -- Auditor-A starts immediately, Auditor-B starts 30 seconds later, Auditor-C starts 60 seconds later.
2. Each auditor takes ALL their screenshots at the start (all viewports), saves them to files, then works from the saved screenshots for the rest of their assessment.
3. The screenshot-taking phase is sequential per auditor (navigate, resize, screenshot, resize, screenshot), but the analysis phase is fully parallel across auditors.
4. Screenshot naming convention: `_perceptual-audit/screenshots/[page]-[viewport]-[auditor].png`

---

### 2.4 Research Validator

This is the BRIDGE between visual perception and research context. It is the only agent that sees BOTH the visual findings AND the Research Lock Sheet. Its job is classification: does a visual concern target a LOCKED decision or a CHALLENGEABLE value?

**CAN do:**
- Read the Research Lock Sheet (from Research Contextualizer)
- Read Visual Auditor findings reports (from file or SendMessage)
- Read research files for deeper context when a classification is ambiguous
- Read convention specs for classification context
- Answer PA-26, PA-27, PA-28 (architectural/adversarial questions) -- these REQUIRE research context
- Write the Validated Findings Report
- Reclassify findings as needed
- Communicate with Lead, Weaver, and Fixers

**CANNOT do:**
- Take screenshots (NO Playwright)
- Read CSS/HTML source files of the page being audited
- Make fixes to any file
- Communicate with Visual Auditors (information isolation -- validator must not influence auditors)
- Override ABSOLUTE-lock-strength decisions (soul rules are not challengeable, period)
- Dismiss WOULD-NOT-SHIP findings (these always require human review regardless of lock status)

**Produces:** Validated Findings Report (written to file)

```
VALIDATED FINDINGS REPORT
Generated: [timestamp]

═══════════════════════════════════════════════════
CLASSIFICATION SUMMARY
═══════════════════════════════════════════════════

Total visual concerns received: [N]
  Validated (proceed to fix): [N]
  Reclassified as execution feedback: [N]
  Targeting ABSOLUTE locks (soul rules): [N] -- not actionable
  Targeting STRONG locks: [N] -- not actionable without human approval
  Targeting CHALLENGEABLE values: [N] -- actionable

═══════════════════════════════════════════════════
VALIDATED FINDINGS (Proceed to Fixer)
═══════════════════════════════════════════════════

| Finding ID | Visual Concern | Source Auditor | Lock Status | Severity | Action |
|------------|---------------|----------------|-------------|----------|--------|
| VF-001 | [concern] | Auditor-A | CHALLENGEABLE | WOULD-NOT-SHIP | Fix |
| VF-002 | [concern] | Auditor-B | UNLOCKED | LOOKS-WRONG | Fix |

═══════════════════════════════════════════════════
RECLASSIFIED FINDINGS (Execution Feedback)
═══════════════════════════════════════════════════

| Finding ID | Visual Concern | Source Auditor | Lock Status | Reclassification Reason |
|------------|---------------|----------------|-------------|------------------------|
| RF-001 | "The sharp corners feel harsh" | Auditor-A | ABSOLUTE (soul rule) | border-radius: 0 is identity-defining |
| RF-002 | [concern] | [auditor] | STRONG | [reason] |

Note: Reclassified findings are NOT dismissed. They are documented as
"execution feedback" -- the visual concern is real, but the design decision
is research-backed. If the same concern appears across 3+ auditors, escalate
to human even if LOCKED.

═══════════════════════════════════════════════════
ARCHITECTURAL ASSESSMENT (PA-26, PA-27, PA-28)
═══════════════════════════════════════════════════

PA-26 (Convention causing problem): [assessment with research context]
PA-27 (Design from scratch): [assessment with research context]
PA-28 (Adversarial): [assessment with research context]

═══════════════════════════════════════════════════
ESCALATION ITEMS (Require Human Decision)
═══════════════════════════════════════════════════

| Item | Why Escalated |
|------|---------------|
| [item] | WOULD-NOT-SHIP finding targeting MODERATE lock |
| [item] | Same concern from 3+ auditors targeting STRONG lock |
```

**Communication:** Receives Lock Sheet from Lead (originally from Research Contextualizer). Receives visual findings from Lead/Weaver. Sends Validated Findings to Lead and Fixers. Sends Escalation Items to Lead.

**Spawned in:** Standard (doubles as Weaver in Standard mode), Standalone (dedicated role)

**The Dual-Role in Standard Mode:**

In Standard mode (3-4 agents), the Research Validator also performs Weaver duties. This works because:
- Standard mode has no Research Contextualizer, so the Validator reads research directly
- Standard mode has no Fixers, so the Validator only classifies -- it does not need to hand off
- The Weaver synthesis is simpler with only 2 auditors' worth of findings
- Combining roles saves one agent slot while preserving the critical classification function

---

### 2.5 Fixer (1-2 agents)

Fixers are the only agents that modify CSS/HTML source files. They receive validated findings and apply targeted fixes, then verify each fix visually.

**CAN do:**
- Read CSS/HTML/TSX source files of the page being audited (they NEED source to fix)
- Edit source files (Edit tool)
- Take screenshots via Playwright (browser_take_screenshot) -- for post-fix verification ONLY
- Navigate and resize via Playwright
- Read the Validated Findings Report
- Read convention specs (to ensure fixes don't violate conventions)
- Read DESIGN-SYSTEM/tokens/* (to ensure fixes use correct token values)
- Write fix reports
- Answer PA-01 and PA-02 after each fix (mandatory post-fix perceptual check)

**CANNOT do:**
- Make fixes that violate soul rules (border-radius: 0, box-shadow: none, no drop-shadow)
- Make fixes to LOCKED decisions (unless explicitly instructed by Lead with human approval)
- Take screenshots before reading findings (they must not form independent visual opinions before seeing validated concerns)
- Introduce new CSS properties not already in the design system tokens
- Restructure HTML beyond what the fix requires (minimal change principle)
- Read research files (they fix, they don't research)

**The Post-Fix Verification Loop:**

After EVERY fix (not after all fixes -- after EACH individual fix):

```
1. Save the CSS/HTML change.
2. Navigate to the page in Playwright.
3. Take a screenshot at the same viewport where the concern was flagged.
4. Answer:
   PA-01: What's the first thing that bothers me NOW?
   PA-02: Is any text uncomfortable to read NOW?
   Did the fix make it LOOK better, or just change a number?
   Did the fix create any NEW visual problems?
5. If "just changed a number" or "created new problems": REVERT and try again.
6. If "looks better" and "no new problems": proceed to next fix.
```

**Produces:** Fix Report (written to file)

```
FIX REPORT — Fixer [A/B]
Fixes Attempted: [N]
Fixes Applied: [N]
Fixes Reverted: [N]

═══════════════════════════════════════════════════
FIX LOG
═══════════════════════════════════════════════════

Fix #1:
  Finding: VF-001 — [description]
  File Changed: [path]
  Change: [what was modified, in CSS terms -- fixers ARE allowed technical language]
  Pre-Fix Screenshot: [path]
  Post-Fix Screenshot: [path]
  PA-01 (post-fix): [answer]
  PA-02 (post-fix): [answer]
  Looks better? YES/NO
  New problems? YES/NO
  Status: APPLIED / REVERTED

[repeat for each fix]

═══════════════════════════════════════════════════
SOUL COMPLIANCE CHECK
═══════════════════════════════════════════════════

- border-radius: 0 preserved? [YES/NO]
- box-shadow: none preserved? [YES/NO]
- No filter: drop-shadow() introduced? [YES/NO]
- No 2px borders introduced? [YES/NO]
- opacity: 1 on all backgrounds? [YES/NO]
```

**Communication:** Receives Validated Findings from Research Validator or Lead. Sends Fix Reports to Lead and Weaver. Does NOT communicate with Visual Auditors or Research Contextualizer.

**Spawned in:** Standalone only. Standard mode produces findings but does NOT fix -- fixes are handed to the invoking workflow.

**Per-File Ownership:**

When 2 Fixers are spawned, each is assigned a non-overlapping set of files:
- Fixer-A: Files 1-3 (e.g., the main HTML and its primary CSS)
- Fixer-B: Files 4-6 (e.g., secondary HTML files or shared CSS)

This eliminates contention entirely -- lesson learned from Fix Execution team (MEMORY.md: "Per-file ownership eliminates all contention").

---

### 2.6 Weaver/Synthesizer

The Weaver collects ALL outputs from ALL agents, deduplicates, cross-references, and produces the single authoritative verdict document.

**CAN do:**
- Read ALL output files from all agents (Lock Sheet, Visual Findings, Validated Findings, Fix Reports)
- Read research files for context when synthesizing
- Write the final Perceptual Audit Verdict
- Cross-reference findings across auditors (same concern from 2+ auditors = higher confidence)
- Deduplicate findings (same concern described differently by different auditors)
- Rank all concerns by visual impact
- Identify patterns across findings (e.g., "3 of 5 concerns relate to spacing")
- Update TaskUpdate for progress tracking

**CANNOT do:**
- Take screenshots (NO Playwright)
- Read CSS/HTML source files of the page being audited
- Make fixes to any file
- Override the Research Validator's classifications
- Dismiss findings from any agent
- Change Lock Sheet classifications

**Produces:** Perceptual Audit Verdict (written to file -- THE final output)

```
PERCEPTUAL AUDIT VERDICT
════════════════════════════════════════════════════════════════

Page(s): [names]
Mode: [Standard / Standalone]
Date: [timestamp]
Agents: [count and roles]
Questions Answered: [count] / 28

════════════════════════════════════════════════════════════════
COLD LOOK CONSENSUS
════════════════════════════════════════════════════════════════

1440px:
  Auditor-A gut: [locked sentence]
  Auditor-B gut: [locked sentence]
  Auditor-C gut: [locked sentence]
  CONSENSUS: [synthesized impression]

768px:
  [same structure]

════════════════════════════════════════════════════════════════
VERDICT
════════════════════════════════════════════════════════════════

  ┌───────────────────────────────────────────────────────┐
  │  SHIP  /  SHIP WITH CONCERNS  /  DO NOT SHIP         │
  └───────────────────────────────────────────────────────┘

Rationale: [2-3 sentences explaining the verdict]

════════════════════════════════════════════════════════════════
TOP 5 CONCERNS (Ranked by Visual Impact)
════════════════════════════════════════════════════════════════

1. [concern] — [severity] — [location] — [auditor agreement: N/N auditors flagged]
2. [concern] — [severity] — [location] — [auditor agreement]
3. [concern] — [severity] — [location] — [auditor agreement]
4. [concern] — [severity] — [location] — [auditor agreement]
5. [concern] — [severity] — [location] — [auditor agreement]

════════════════════════════════════════════════════════════════
PERCEPTION TRACK FINDINGS (Full List)
════════════════════════════════════════════════════════════════

WOULD-NOT-SHIP: [count]
| ID | Concern | Location | Auditor(s) | Validated? | Fixed? |
|----|---------|----------|------------|------------|--------|

LOOKS-WRONG: [count]
| ID | Concern | Location | Auditor(s) | Validated? | Fixed? |
|----|---------|----------|------------|------------|--------|

COULD-BE-BETTER: [count]
| ID | Concern | Location | Auditor(s) | Validated? | Fixed? |
|----|---------|----------|------------|------------|--------|

════════════════════════════════════════════════════════════════
RECLASSIFIED FINDINGS (Execution Feedback)
════════════════════════════════════════════════════════════════

[findings that targeted LOCKED decisions -- documented, not dismissed]

════════════════════════════════════════════════════════════════
CROSS-REFERENCES
════════════════════════════════════════════════════════════════

| Finding | Confirmed By | Contradiction? |
|---------|-------------|----------------|
| [finding] | Auditor A + B | None |
| [finding] | Auditor B only | Auditor A said opposite |

════════════════════════════════════════════════════════════════
PATTERNS
════════════════════════════════════════════════════════════════

[Emergent patterns across findings, e.g., "4 of 7 concerns relate to
narrow containers -- this may be a systemic issue, not isolated findings"]

════════════════════════════════════════════════════════════════
ESCALATION ITEMS (Require Human Decision)
════════════════════════════════════════════════════════════════

[items from Research Validator that need human input]

════════════════════════════════════════════════════════════════
FIX SUMMARY (Standalone only)
════════════════════════════════════════════════════════════════

Fixes attempted: [N]
Fixes applied: [N]
Fixes reverted: [N]
Post-fix re-assessment: [brief]

════════════════════════════════════════════════════════════════
ANTI-PATTERN AUDIT
════════════════════════════════════════════════════════════════

[Did any Visual Auditor answers contain CSS property names?]
[Did any Cold Look reactions get retroactively revised?]
[Were any findings copy-pasted across pages?]
Answers contaminated: [N] / [total answers]
Anti-pattern violations detected: [list]

════════════════════════════════════════════════════════════════
METRICS
════════════════════════════════════════════════════════════════

Perception-to-Rule ratio: [X%] (target >= 40%)
Cold Look accuracy: [did gut match final?]
Anti-pattern detection rate: [X%] (target < 10%)
```

**Communication:** Receives all findings from all agents. Sends final verdict to Lead. In Standard mode, the Research Validator doubles as Weaver.

**Spawned in:** Standalone (dedicated role). In Standard mode, this role is absorbed by the Research Validator.

---

## 3. TEAM TOPOLOGIES BY MODE

### 3.1 Embedded Mode (0 agents)

```
[Builder/Fixer Agent]
  └── (answers PA-01 through PA-05 inline, 90 seconds)
```

No team. No spawn. The skill is a prompt injection -- 5 questions added to the agent's existing prompt before it declares work done.

### 3.2 Quick Mode (0 agents)

```
[Invoking Agent]
  └── (Cold Look + PA-01 through PA-05, two viewports, 3 minutes)
```

No team. The invoking agent performs the Cold Look Protocol and answers the Mandatory Five at two viewports. Output is inline in the agent's response.

### 3.3 Standard Mode (3-4 agents)

```
[Lead / Skill Invoker]
  ├── Auditor-A (First Impression + Readability + Emotion)
  │     └── PA-01-08, PA-18-20 at 1440px + 768px
  ├── Auditor-B (Spatial + Grid + Coherence + Flow)
  │     └── PA-03, PA-09-17 at 1440px + 768px
  └── Research-Validator-Weaver (classification + synthesis)
        └── Reads research, classifies findings, produces verdict
```

**Wave Execution:**
1. **Wave 0 (immediate):** Research-Validator-Weaver starts reading research files and building a lightweight Lock Sheet
2. **Wave 1 (after 15 seconds):** Auditor-A starts (takes screenshots, begins Cold Look)
3. **Wave 1b (after 45 seconds):** Auditor-B starts (staggered to reduce Playwright contention)
4. **Wave 2 (after auditors complete):** Research-Validator-Weaver receives findings, classifies, synthesizes verdict

Total wall time: ~30 minutes

### 3.4 Standalone Mode (5-7 agents)

```
[Lead / Skill Invoker]
  ├── Research Contextualizer
  │     └── Reads all research, produces Lock Sheet
  ├── Auditor-A (First Impression + Emotion + Color)
  │     └── PA-01, PA-04, PA-05, PA-18-20 at 3 viewports
  ├── Auditor-B (Readability + Spatial + Grid)
  │     └── PA-02, PA-06-11, PA-14, PA-15 at 3 viewports
  ├── Auditor-C (Hierarchy + Coherence + Flow + Cross-Page)
  │     └── PA-03, PA-12, PA-13, PA-16, PA-17, PA-24, PA-25 at 3 viewports
  ├── Research Validator
  │     └── PA-26-28 + classification of all visual findings
  ├── Fixer-A (files 1-3)
  │     └── Apply validated fixes, post-fix verification
  └── Weaver
        └── Synthesize all findings, produce final verdict
```

**Wave Execution:**
1. **Wave 0 (immediate):** Research Contextualizer starts reading research
2. **Wave 1 (after 15 seconds):** Auditor-A starts
3. **Wave 1b (after 45 seconds):** Auditor-B starts
4. **Wave 1c (after 75 seconds):** Auditor-C starts
5. **Wave 2 (after Research Contextualizer completes, ~8 min):** Research Validator receives Lock Sheet, waits for auditor findings
6. **Wave 3 (after auditors + validator complete):** Fixers receive validated findings, apply fixes
7. **Wave 4 (after fixers complete):** Weaver synthesizes everything, produces final verdict

Total wall time: ~60 minutes

**Fixer Scaling:**
- 1-3 validated findings: 1 Fixer
- 4+ validated findings: 2 Fixers (per-file ownership)
- 0 validated findings: No Fixers spawned (Lead skips Wave 3)

---

## 4. COMMUNICATION PROTOCOL

### 4.1 Information Isolation Rules

The team has deliberate information barriers. These are not efficiency choices -- they are methodological requirements.

```
Information Flow Map:

Research Contextualizer ──(Lock Sheet)──> Lead ──(Lock Sheet)──> Research Validator
                                           │
Visual Auditors ──(Findings)──> Lead ──(Findings)──> Research Validator
                                  │                         │
                                  │                    (Validated Findings)
                                  │                         │
                                  │                         ├──> Fixers
                                  │                         │
                                  └──(All outputs)──> Weaver
                                                         │
                                                    (Final Verdict)
                                                         │
                                                         └──> Lead
```

**Barriers that MUST NOT be crossed:**

| From | To | Blocked Content | Why |
|------|----|----------------|-----|
| Research Contextualizer | Visual Auditors | ALL content | Auditors must not know what is LOCKED -- it would prime them to ignore locked-value concerns |
| Visual Auditors | Research Contextualizer | ALL content | Contextualizer must not be influenced by visual findings |
| Research Validator | Visual Auditors | ALL content | Validator classifications must not influence auditor perception |
| Visual Auditors | Fixers | Direct findings | Findings must go through validation before reaching fixers |
| Fixers | Visual Auditors | Fix details | Auditors should not know what was fixed if re-audit occurs |

### 4.2 Message Format

All inter-agent messages use SendMessage with structured content:

```
FROM: [role-name]
TO: [role-name]
TYPE: [FINDINGS / LOCK-SHEET / CLASSIFICATION / FIX-REPORT / STATUS]
CONTENT: [structured per role's output format]
```

### 4.3 Handoff Protocol

Each handoff between waves is a GATE. The Lead verifies the output file exists and is non-empty before spawning the next wave.

| Gate | Condition | What Lead Checks |
|------|-----------|-----------------|
| Gate 1 | Research Contextualizer done | Lock Sheet file exists, has LOCKED and CHALLENGEABLE sections |
| Gate 2 | All Visual Auditors done | All finding files exist, all PA questions answered, no CSS property names in answers |
| Gate 3 | Research Validator done | Validated Findings file exists, all concerns classified |
| Gate 4 | All Fixers done | Fix Reports exist, all fixes have post-fix screenshots |
| Gate 5 | Weaver done | Final Verdict file exists, has verdict and ranked concerns |

**Anti-Pattern Gate (Gate 2 supplement):**

Before passing auditor findings to the Research Validator, the Lead scans each answer for CSS property names. If found:
1. The Lead sends a rejection message to the offending auditor
2. The auditor rewrites the contaminated answer in visual language
3. Only clean answers pass through to the Research Validator

This is the primary enforcement mechanism against AP-01 through AP-08.

---

## 5. LEAD ORCHESTRATION PLAYBOOK

The Lead follows this exact sequence. Deviations require explicit justification.

### 5.1 Standard Mode Playbook

```
STEP 1: Determine page(s) and viewport(s)
STEP 2: Start HTTP server if not running (Bash: python3 -m http.server)
STEP 3: Spawn Research-Validator-Weaver with research file list
STEP 4: Wait 15 seconds, then spawn Auditor-A with question assignments
STEP 5: Wait 30 seconds, then spawn Auditor-B with question assignments
STEP 6: Monitor for auditor completion (check for output files)
STEP 7: When auditor files exist, scan for CSS property name contamination
STEP 8: If contamination found, send rejection and await rewrite
STEP 9: When clean findings ready, message Research-Validator-Weaver
STEP 10: Wait for Validated Findings and Verdict
STEP 11: Collect Verdict file, report to invoking workflow
```

### 5.2 Standalone Mode Playbook

```
STEP 1: Determine page(s), viewport(s), and fix authority
STEP 2: Start HTTP server if not running
STEP 3: Spawn Research Contextualizer with research file list
STEP 4: Wait 15s, spawn Auditor-A
STEP 5: Wait 45s, spawn Auditor-B
STEP 6: Wait 75s, spawn Auditor-C
STEP 7: When Lock Sheet file exists (Gate 1), hold for Research Validator
STEP 8: When all auditor files exist (Gate 2), scan for contamination
STEP 9: If contamination, reject and await rewrites
STEP 10: Spawn Research Validator with Lock Sheet + clean findings
STEP 11: When Validated Findings exist (Gate 3):
         - If 0 findings: skip Fixers, go to STEP 13
         - If 1-3 findings: spawn 1 Fixer
         - If 4+ findings: spawn 2 Fixers with file assignments
STEP 12: When Fix Reports exist (Gate 4), proceed
STEP 13: Spawn Weaver with all output files listed
STEP 14: When Verdict exists (Gate 5), collect and report
STEP 15: Send shutdown requests to all remaining agents
```

### 5.3 Lead Self-Discipline Rules

From MEMORY.md lessons (6 prior teams):

1. **THIN rule:** Lead does ZERO building, ZERO Playwright, ZERO source-code reading. Orchestrate ONLY.
2. **File-existence verification:** Do not trust TaskUpdate alone -- verify output files exist (lesson from Hierarchical Audit).
3. **One committer:** Lead commits, never agents.
4. **Staggered spawning:** Never spawn all agents simultaneously (Playwright contention).
5. **Shutdown protocol:** Send shutdown requests after final verdict. Do not leave agents running.

---

## 6. OUTPUT FILE LOCATIONS

All team output goes into a `_perceptual-audit/` scratchpad directory adjacent to the pages being audited:

```
_perceptual-audit/
  screenshots/
    [page]-1440px-auditor-a.png
    [page]-768px-auditor-a.png
    [page]-1440px-auditor-b.png
    ...
    [page]-post-fix-1-fixer-a.png
    ...
  lock-sheet.md                    (Research Contextualizer output)
  findings-auditor-a.md            (Visual Auditor A output)
  findings-auditor-b.md            (Visual Auditor B output)
  findings-auditor-c.md            (Visual Auditor C output, Standalone only)
  validated-findings.md            (Research Validator output)
  fix-report-fixer-a.md            (Fixer A output, Standalone only)
  fix-report-fixer-b.md            (Fixer B output, Standalone only)
  PERCEPTUAL-AUDIT-VERDICT.md      (Weaver output -- THE final deliverable)
```

---

## 7. FAILURE MODES AND RECOVERY

### 7.1 Visual Auditor Produces No File

**Detection:** Lead checks for file existence at Gate 2 timeout (15 minutes for Standard, 20 for Standalone).
**Recovery:** Lead sends a "CRITICAL: You MUST write your output file using the Write tool" message. If no response in 5 minutes, Lead spawns a replacement auditor with the same question assignments and an explicit file-writing instruction in the first sentence of the prompt.

Lesson from MEMORY.md: "Workers spawned by captains via Task tool frequently complete without writing files -- THE critical failure mode."

### 7.2 Playwright Contention

**Detection:** Auditor reports inability to take screenshots.
**Recovery:** The staggered spawning (Section 3.3/3.4) prevents most contention. If it still occurs, the blocked auditor waits 60 seconds and retries. If still blocked, the Lead instructs the auditor to work from screenshots already taken by other auditors (shared screenshot directory).

### 7.3 Anti-Pattern Contamination Rate > 30%

**Detection:** Lead finds CSS property names in more than 30% of auditor answers.
**Recovery:** This indicates the auditor prompt is insufficient. Lead sends a reinforcement message:

```
STOP. Re-read your LANGUAGE RESTRICTIONS. Your last 3 answers contained CSS
terms. Rewrite ALL answers using only visual/emotional language. Example:
  BAD: "The padding is too small at 8px"
  GOOD: "The text feels crushed against the edges, like it can't breathe"
```

If contamination persists after reinforcement, the Lead replaces the auditor with a fresh agent.

### 7.4 Research Contextualizer Takes > 15 Minutes

**Detection:** Lock Sheet file does not exist after 15 minutes.
**Recovery:** Lead checks if the agent is still working (SendMessage ping). If responsive, extend to 20 minutes. If non-responsive, Lead spawns a replacement with a smaller file list (top 5 most relevant research files only, not the full set).

### 7.5 All Visual Auditors Return "SHIP" With No Concerns

**Detection:** All Cold Look verdicts are YES, all PA answers flag zero concerns.
**Recovery:** This is Red Flag #2 from Section 11 of the blueprint: "Every Cold Look verdict is YES (agents are being compliant, not honest)." Lead spawns one additional "adversarial auditor" whose prompt includes:

```
Your job is to find problems. A page with ZERO concerns does not exist.
Your predecessor auditors found nothing wrong. Find what they missed.
You are not being helpful by agreeing -- you are being helpful by looking harder.
Answer PA-01, PA-05, PA-09, PA-14, and PA-28 specifically looking for problems.
```

---

## 8. METRICS AND VALIDATION

### 8.1 Per-Audit Metrics (Tracked in Verdict)

| Metric | Target | Red Flag |
|--------|--------|----------|
| Perception-to-Rule finding ratio | >= 40% perception | < 15% |
| Anti-pattern contamination rate | < 10% of answers | > 30% |
| Cold Look accuracy | Gut matches final verdict | Gut says NO but final says SHIP |
| WOULD-NOT-SHIP fix rate | >= 30% | 0% |
| Auditor agreement rate | >= 60% overlap on top 3 | < 30% |
| Post-fix PA-01/PA-02 improvement | Improvement reported | "Just changed a number" |

### 8.2 The Bento Grid Litmus Test

Any deployment of this team architecture must be validated against the canonical failure case: a 4-column bento grid in a narrow container where one column forces single-word stacking. The team passes if:

- At least 1 Visual Auditor flags it via PA-02 or PA-06
- The Research Validator classifies the container width as CHALLENGEABLE (not LOCKED)
- If Fixers are present, the fix increases column room (not just font-size reduction)
- The Weaver includes it in the top 3 concerns

### 8.3 Team Performance Tracking

After each audit, the Lead records:

```
TEAM PERFORMANCE:
  Wall time: [minutes]
  Agent count: [N]
  Files written: [N] / [expected N]
  File-writing failures: [N]
  Playwright contention incidents: [N]
  Anti-pattern rejections: [N]
  Replacement agents spawned: [N]
  Shutdown responses received: [N] / [N requested]
```

---

## 9. PROMPT TEMPLATES (SUMMARY)

Each role receives a prompt with these mandatory sections. Full prompts are defined in the SKILL.md file; here are the structural requirements.

### Every Agent Prompt Must Include:

1. **Role identity** -- "You are a [ROLE]. Your job is to [VERB]."
2. **Tool whitelist** -- Explicit list of allowed tools.
3. **Tool blacklist** -- Explicit list of forbidden tools with "If you find yourself wanting to [forbidden action], STOP."
4. **Output file path** -- "You MUST write your output to [exact path] using the Write tool."
5. **Output format** -- The exact template for their output.
6. **Communication rules** -- Who they can message, who they cannot.
7. **Anti-pattern awareness** -- The specific anti-patterns relevant to their role.
8. **Completion criteria** -- "You are DONE when [specific condition]."

### Role-Specific Prompt Additions:

| Role | Additional Prompt Content |
|------|--------------------------|
| Research Contextualizer | List of research files to read (paths), Lock Sheet template |
| Visual Auditor | LANGUAGE RESTRICTIONS block, Cold Look Protocol steps, question assignments |
| Research Validator | Lock Sheet location, classification criteria, PA-26/27/28 assignments |
| Fixer | Validated Findings location, post-fix verification loop, soul compliance checklist |
| Weaver | All output file locations, deduplication criteria, verdict template |

---

*Team architecture design complete. 2026-02-10.*

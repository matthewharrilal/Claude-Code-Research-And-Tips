# Pipeline Dry-Run Walkthrough: /compose content/yegge-gas-town.md

**Date:** 2026-03-01
**Purpose:** Meta-cognitive audit of every failure point when a fresh Claude Code instance runs the compose skill end-to-end.
**Method:** Read the compose skill, TC skill, PA skill, and all referenced files. Walk through each step as a fresh instance would experience it. Identify every point where the pipeline could break.

---

## Executive Summary

**Total failure points identified: 27**

| Severity | Count | Description |
|----------|-------|-------------|
| BLOCKING | 8 | Will definitely cause pipeline halt or incorrect output |
| SIGNIFICANT | 11 | Will likely cause degraded quality or require human intervention |
| MINOR | 8 | Will cause confusion but instance can recover |

**The three highest-risk failure points:**
1. Content file path does not exist at `content/yegge-gas-town.md` -- the pipeline cannot start
2. No mechanism to spawn separate Opus agents -- Claude Code's Skill tool invokes within the same context window, not as isolated sub-agents
3. Screenshot capture protocol is underspecified -- no explicit HTTP server setup or Playwright commands

---

## Step-by-Step Walkthrough

### 0. PRE-INVOCATION: What Happens Before /compose

When a fresh Claude Code instance opens in `design-system/compositional-core/`, it automatically loads:
- `design-system/CLAUDE.md` (the root CLAUDE.md -- 400+ lines)
- `design-system/compositional-core/CLAUDE.md` (the subdirectory CLAUDE.md -- 500+ lines)

These auto-loaded files contain:
- References to `/build-page` as "the ONLY way to build pages" (root CLAUDE.md line: "Run: /build-page <content-file-path> (the ONLY way to build pages)")
- Explicit anti-pattern: "Trying to build without /build-page" (root CLAUDE.md anti-pattern #7)
- References to the old pipeline manifest at `ephemeral/va-extraction/MANIFEST.md`
- NO mention of `/compose` anywhere

**Failure Point F-01: CLAUDE.md routing conflict**
- **Severity:** SIGNIFICANT
- **What happens:** The fresh instance reads CLAUDE.md which says "the ONLY way to build pages" is `/build-page`. It also says "Trying to build without /build-page" is an anti-pattern. When the user types `/compose`, the instance must reconcile this with a skill it has never seen before. The Skill tool will correctly find and invoke `compose/SKILL.md`, but the instance's context is now contaminated with 900+ lines of CLAUDE.md text that:
  - References a completely different pipeline (`/build-page` -> MANIFEST.md -> 9 artifact files)
  - Contains guardrail thresholds (SC-01 through SC-15) that the compose skill deliberately withholds from agents
  - Contains extensive phase-gated protocol instructions that partially overlap with but contradict the compose skill's simpler 4-phase model
- **Fix:** Add `/compose` to the CLAUDE.md routing table as the successor to `/build-page`. Add a line: "If /compose skill is available, use it instead of /build-page." Alternatively, update the compose skill to explicitly say "IGNORE all CLAUDE.md build protocol -- this skill supersedes it."

---

### 1. SKILL INVOCATION: User types `/compose content/yegge-gas-town.md`

Claude Code's skill matching will find `~/.claude/skills/compose/SKILL.md` based on the trigger phrases: "compose", "compose a page", "design this content", "turn this into a designed page". The `/compose` prefix matches exactly.

**Failure Point F-02: Content file path does not exist**
- **Severity:** BLOCKING
- **What happens:** The user types `content/yegge-gas-town.md` but there is no `content/` directory in the project. The actual content file is at `extractions/deep/yegge-gas-town-extraction.md`. The pipeline fails at the first step because the orchestrator cannot read the input content.
- **Fix:** The user must provide the correct path. This is a user error, not a pipeline error. However, the compose skill could helpfully suggest: "If the file is not found, search for it using Glob." Alternatively, the user documentation should list the actual content locations.

**Failure Point F-03: Relative vs absolute path resolution**
- **Severity:** MINOR
- **What happens:** The compose skill says "The user provides a path to a markdown file." If the user types a relative path like `content/yegge-gas-town.md`, it resolves relative to the current working directory. If the CWD is `design-system/compositional-core/`, the path would be `design-system/compositional-core/content/yegge-gas-town.md` -- wrong. If CWD is the project root, it would be `content/yegge-gas-town.md` -- also wrong (directory doesn't exist).
- **Fix:** The compose skill should instruct the orchestrator to resolve the content path to an absolute path immediately and verify the file exists before proceeding.

---

### 2. PHASE 0: Load Vocabulary

The compose skill (line 22-36) instructs the orchestrator to read 4 files:

1. `design-system/compositional-core/identity/identity.md` (87 lines)
2. `design-system/compositional-core/identity/vocabulary.md` (55 lines)
3. `design-system/compositional-core/vocabulary/tokens.css` (124 lines)
4. `design-system/compositional-core/components/components.css` (779 lines)

**Failure Point F-04: CLAUDE.md already loaded these files**
- **Severity:** MINOR
- **What happens:** The CLAUDE.md auto-load protocol says "MANDATORY: Read these 4 files FIRST" and lists the same 4 files. A diligent fresh instance will have already read them during auto-load. The compose skill then says to read them again. The instance will either:
  (a) Skip the reads (thinking they are already loaded) -- OK if context persists
  (b) Re-read them -- wastes ~1,045 tokens of context window but is harmless
  (c) Get confused by the duplication and try to figure out which protocol to follow
- **Fix:** No fix needed -- this is redundant but not harmful. The compose skill could say "If already loaded from CLAUDE.md ingestion, verify they are in context."

**Failure Point F-05: File paths are relative, not absolute**
- **Severity:** MINOR
- **What happens:** The compose skill uses relative paths like `design-system/compositional-core/identity/identity.md`. These resolve correctly only if CWD is the project root. Since the bash tool resets CWD between calls, this is fine for Read tool (which uses absolute paths internally). But the TC agent spawned later will need absolute paths.
- **Fix:** The compose skill should use absolute paths or specify path resolution strategy.

**Failure Point F-06: Soul verification is subjective**
- **Severity:** MINOR
- **What happens:** The compose skill says "Verify soul principles are clear" and lists 3 checks (border-radius: 0, box-shadow: none, no gradients). This is a mental check, not an actionable gate. A fresh instance will read the check and proceed -- it cannot fail here. But it may not internalize the principles deeply enough to enforce them on spawned agents.
- **Fix:** No fix needed -- this is orientation, not a gate.

---

### 3. PHASE 1: DERIVE (TC Spawn)

The compose skill (lines 38-58) says to "Spawn: One Opus agent for TC derivation."

**Failure Point F-07: No mechanism to spawn isolated Opus agents**
- **Severity:** BLOCKING
- **What happens:** The compose skill says "Spawn: One Opus agent" but does not specify HOW. Claude Code does not have a native "spawn Opus agent" capability. The available mechanisms are:
  - **Skill tool:** Invokes a skill within the SAME conversation. Does not create a new agent.
  - **Bash tool:** Could theoretically invoke `claude` CLI as a subprocess, but the compose skill does not describe this.
  - **Task/subagent tool:** Not available in the current tool set.
  - The old `/build-page` pipeline used `TeamCreate` from the deep-build orchestrator, but that infrastructure is in `tools/deep-build/` which is being deleted (per git status).

  A fresh instance reading "Spawn: One Opus agent" will likely:
  (a) Try to use the Skill tool to invoke the TC skill -- this runs it in the SAME context window, not isolated
  (b) Try to do the TC work itself in the current context -- violating agent isolation
  (c) Try to use a Task/subagent tool that doesn't exist -- fail with an error

  If the instance does the TC work itself (option b), context isolation is violated: the orchestrator sees the TC derivation process, which means it carries TC context into later phases (builder spawning, PA spawning). The compose skill's entire isolation architecture breaks down.
- **Fix:** Either:
  (1) Specify the exact spawning mechanism: `claude -p "You are a TC agent..." --model opus` via Bash tool, or
  (2) Accept that the orchestrator does TC work itself and remove the isolation language, or
  (3) Use the Task tool (subagent) if available in the environment.

**Failure Point F-08: TC agent doesn't know where files are**
- **Severity:** BLOCKING (if agents are actually spawned)
- **What happens:** The compose skill says the TC agent receives:
  - "The content markdown (full text)"
  - "The TC skill: `~/.claude/skills/tension-composition/SKILL.md`"
  - "Identity files: identity.md + vocabulary.md"

  But it does NOT specify:
  - How the content is delivered (via file path? pasted into prompt?)
  - Whether the TC skill is loaded by path reference or pasted into the agent's prompt
  - The ABSOLUTE paths to identity.md and vocabulary.md

  The TC skill itself (Phase 2, Side B) says: "Read these 2 files NOW to derive Side B" and gives relative paths: `design-system/compositional-core/identity/identity.md`. If the TC agent is a subprocess, it may not have the correct CWD. If it is a subagent in the same conversation, the paths resolve fine.

  Critically, the TC skill's Phase 4 references: `design-system/compositional-core/grammar/mechanisms.md` and `design-system/compositional-core/grammar/grammar.md` and `design-system/compositional-core/components/components.css`. These paths work only from the project root.
- **Fix:** The compose skill should specify absolute paths for all files the TC agent needs. Provide a complete file list with absolute paths:
  ```
  Content: /Users/.../extractions/deep/yegge-gas-town-extraction.md
  TC Skill: ~/.claude/skills/tension-composition/SKILL.md
  Identity: /Users/.../design-system/compositional-core/identity/identity.md
  Vocabulary: /Users/.../design-system/compositional-core/identity/vocabulary.md
  Mechanisms (Phase 4): /Users/.../design-system/compositional-core/grammar/mechanisms.md
  Grammar (Phase 4): /Users/.../design-system/compositional-core/grammar/grammar.md
  Components (Phase 4): /Users/.../design-system/compositional-core/components/components.css
  ```

**Failure Point F-09: TC agent doesn't know the output path**
- **Severity:** SIGNIFICANT
- **What happens:** The compose skill says "Agent outputs to: `[output-dir]/_tc-brief.md`" (line 53). But `[output-dir]` is defined in the Prerequisites section as `ephemeral/builds/<content-name>-<date>/`. The TC agent needs to know this path, but the compose skill doesn't say to TELL the agent the output path. The TC skill's Phase 4.5 says "Write to `[output-dir]/_tc-brief.md`" -- the agent needs this resolved.

  If the orchestrator spawns the TC agent with a prompt, it must include the resolved output directory. If the orchestrator does TC work itself, it knows the path. Either way, the compose skill should explicitly say: "Include the resolved output path in the agent's instructions."
- **Fix:** Add to Phase 1: "Tell the TC agent the output path: `[resolved-output-dir]/_tc-brief.md`"

---

### 4. TC PHASES 0-3: Side B Derivation

The TC skill (Phase 2, Side B, line ~186-206) says:

> "CRITICAL: Read these 2 files NOW to derive Side B. Do not use memorized values. Read fresh."
> 1. `design-system/compositional-core/identity/identity.md`
> 2. `design-system/compositional-core/identity/vocabulary.md`

Then it says to extract: Character statement, Soul principles, Identity signatures, Internal tensions, Refusals, Design rationale.

**Failure Point F-10: The TC agent must construct Side B dynamically**
- **Severity:** SIGNIFICANT
- **What happens:** The TC skill says "The world this page lives in is constructed from the character statement and soul principles. Do NOT use static prose -- DERIVE the world-description from what you read." And: "Personality spectrum is constructed from the character statement. The identity.md file describes internal tensions -- these ARE the personality spectrum."

  This is a sophisticated instruction. The TC agent must:
  1. Read identity.md
  2. Extract the character statement: "editorial purist with the temperament of a print architect..."
  3. Extract soul principles: angular geometry, no shadows
  4. Extract internal tensions: warmth vs severity, solid offset vs anti-shadow, vocabulary ceiling
  5. Synthesize these into a "world description" and "personality spectrum"
  6. Use these as Side B to derive tension against Side A (content needs)

  A capable Opus instance will handle this well. The files are clear and well-structured. The instruction to "construct from the character statement" is explicit. This is a CREATIVE task that Opus excels at.

  However, if the TC agent is running in the SAME context window as the orchestrator (F-07), the orchestrator's prior loading of the identity files (Phase 0) and the CLAUDE.md auto-loads create context pollution. The TC agent's "fresh read" instruction is defeated.
- **Fix:** If running in-context, explicitly say "For TC work, re-read identity.md and vocabulary.md fresh, ignoring any prior context."

**Failure Point F-11: _INDEX.md does not exist**
- **Severity:** SIGNIFICANT
- **What happens:** The TC skill's Phase 3.5C (Commitment Verification, question 3) says: "Does this metaphor appear in `/case-studies/_INDEX.md`? (DO NOT READ full case studies, only titles)." But there is no `_INDEX.md` file in the case-studies directory. The directory contains a `README.md` instead.

  When the TC agent tries to check for divergence, it will either:
  (a) Try to read `_INDEX.md`, get a file-not-found error, and be confused
  (b) Read the `README.md` instead (which may or may not have the index of case study titles)
  (c) Skip the check entirely

  The compose skill (line 48) says "Case studies, prior explorations, mechanism files" are NOT provided to the TC agent. So the TC agent may not have access to even check. But the TC skill itself says to read `_INDEX.md` at Phase 3.5.
- **Fix:** Either create `_INDEX.md` in case-studies/ with the list of case study titles, or update the TC skill to reference `README.md`, or clarify that in sub-skill mode the divergence check against the library is skipped (since the TC agent doesn't have library access).

---

### 5. TC PHASE 4: Mechanism Access

The TC skill's Phase 4 (Step 4.0, line ~533) says:

> "You may NOW consult:
> - `design-system/compositional-core/grammar/mechanisms.md`
> - `design-system/compositional-core/grammar/grammar.md`
> - `design-system/compositional-core/components/components.css`
> - `design-system/compositional-core/components/components.md`"

**Failure Point F-12: File path consistency between compose and TC skill**
- **Severity:** MINOR
- **What happens:** The compose skill (line 48) says the TC agent "does NOT receive: Case studies, prior explorations, mechanism files (library prohibition until TC Phase 4)." But the TC skill itself (Phase 4) instructs the agent to read mechanism files. There is a protocol question: does the compose orchestrator provide these files to the TC agent upfront (prohibited until Phase 4), or does the TC agent have filesystem access and reads them itself at Phase 4?

  If the TC agent is a subprocess invoked via CLI, it has full filesystem access and can read files at any phase. The phase-gating is behavioral (the TC skill says "don't read until Phase 4") not structural (the files are not withheld). This is by design -- the TC skill relies on behavioral compliance.

  If the TC agent is running in-context (F-07), the orchestrator has already loaded components.css in Phase 0. The TC agent's context is contaminated with component CSS from the start, violating the "library prohibition until TC Phase 4" rule.
- **Fix:** If running in-context, the orchestrator should clearly delineate: "The following TC work begins. Do NOT use the components.css already in context until Phase 4 of TC."

---

### 6. TC PHASE 4.5: Conviction Brief

The TC skill (line ~643-750) specifies the Conviction Brief format:
- 6 sections: World-Description, Calibration, Opposition Map, Compositional Arc, Creative Conditions, Content Map
- Target length: 80-120 lines
- Output to: `[output-dir]/_tc-brief.md`

**Failure Point F-13: Output directory may not exist yet**
- **Severity:** SIGNIFICANT
- **What happens:** The compose skill says to create `ephemeral/builds/<content-name>-<date>/` in the Prerequisites section. But it doesn't say WHO creates it or WHEN. If the TC agent tries to write `_tc-brief.md` to a directory that doesn't exist, the write fails.

  The compose skill should explicitly say: "Create the output directory before spawning the TC agent." Or: "The TC agent should create the directory if it doesn't exist."
- **Fix:** Add to Phase 0 or Phase 1: "Create the output directory: `mkdir -p ephemeral/builds/<content-name>-<date>/`"

**Failure Point F-14: Brief verification is manual and subjective**
- **Severity:** MINOR
- **What happens:** The compose skill (lines 55-58) says "You verify (before proceeding):
  - Brief has all 6 sections
  - Metaphor is committed (not tentative)
  - Brief is conviction-driven (creative invitations, not compliance checklists)"

  The first check (6 sections) is binary and verifiable. The second (committed metaphor) and third (conviction-driven) are subjective. A fresh orchestrator instance may accept a weak brief that says "perhaps a geological metaphor could work" because it technically has 6 sections.
- **Fix:** Add concrete checks: "Section 1 must contain a definitive metaphor statement (no 'could', 'might', 'perhaps'). Section 4 must contain at least 3 creative waypoints."

---

### 7. PHASE 2: BUILD (Opus Builder)

The compose skill (lines 62-98) specifies the builder spawn.

**Failure Point F-15: Same agent-spawning problem as F-07**
- **Severity:** BLOCKING (same root cause as F-07)
- **What happens:** "Spawn: One Opus agent as the builder." Same problem -- no mechanism specified. If the orchestrator does the building itself, it now has TC context in memory (from Phase 1), violating the isolation principle that "Builder doesn't see PA questions" and "TC agent doesn't see components" -- wait, the builder DOES see components.css. But the builder inherits the orchestrator's knowledge of the TC derivation process, which isn't intended.

  More critically, if the orchestrator is doing everything in-context, by Phase 2 the context window contains:
  - 900+ lines of CLAUDE.md (auto-loaded)
  - 1,045 lines of vocabulary files (Phase 0)
  - ~840 lines of TC skill (loaded for Phase 1)
  - TC derivation output (Phase 1 work)
  - The conviction brief
  - Now it needs to load builder files: tokens.css, mechanisms.md, grammar.md, components.css, components.md
  Total context consumed before building starts: ~4,000+ lines minimum, likely more with TC derivation prose.
- **Fix:** Same as F-07. Define the spawning mechanism.

**Failure Point F-16: Builder file list has redundancy**
- **Severity:** MINOR
- **What happens:** The compose skill says the builder receives:
  - The content markdown
  - The conviction brief
  - tokens.css (already loaded in Phase 0 by orchestrator)
  - mechanisms.md (new -- loaded by TC in Phase 4, not by orchestrator)
  - grammar.md (new)
  - components.css (already loaded in Phase 0 by orchestrator)
  - components.md (new)

  If the builder is a separate agent, it needs ALL of these. If the builder is the orchestrator continuing, some are already in context. Either way, the list is clear.
- **Fix:** No fix needed for correctness. For efficiency, note which files are already in context vs need loading.

**Failure Point F-17: Builder instructions don't specify HTML structure**
- **Severity:** SIGNIFICANT
- **What happens:** The compose skill's builder instructions (lines 80-92) say "Output: A single self-contained .html file with all CSS inline in a `<style>` block. Include Google Fonts imports for Instrument Serif, Inter, and JetBrains Mono."

  But the instructions do NOT specify:
  - HTML5 doctype (`<!DOCTYPE html>`)
  - Meta viewport tag (`<meta name="viewport" content="width=device-width, initial-scale=1.0">`)
  - Character encoding (`<meta charset="UTF-8">`)
  - The Google Fonts import URLs (the builder must know the exact URLs)
  - Skip link for accessibility (ARIA landmarks are in CLAUDE.md guardrails but not in compose skill)
  - Container max-width (identity/vocabulary.md says 860-1100px range)

  The Google Fonts URLs are particularly tricky. The builder needs:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  ```
  If the builder generates wrong URLs, fonts fail silently and fall back to system fonts, making the entire typography trinity invisible.
- **Fix:** Add to builder instructions: a complete HTML boilerplate including doctype, meta tags, and exact Google Fonts `<link>` tags. Or reference tokens.css which should contain font import URLs (it contains `--font-display: 'Instrument Serif', serif` but NOT the import URLs).

**Failure Point F-18: Builder doesn't know WHERE to save HTML**
- **Severity:** SIGNIFICANT
- **What happens:** The compose skill says "Agent outputs to: `[output-dir]/page.html`" (line 94). Same as F-09 -- the builder needs the resolved output path. If the builder is a separate agent, this must be in its prompt. If it's the orchestrator, the orchestrator knows the path.
- **Fix:** Include resolved output path in builder's instructions.

**Failure Point F-19: Builder reflection timing**
- **Severity:** MINOR
- **What happens:** The compose skill (lines 96-97) says "After build completes: Write builder reflection (6 dimensions) to `[output-dir]/_reflection.md`." The TC skill (lines 780-810) defines the 6 reflection dimensions in detail. But the compose skill doesn't load the TC skill for the builder -- only for the TC agent. So the builder doesn't have the reflection prompt template unless the compose skill includes it in the builder's instructions.

  The compose skill lists the 6 dimensions briefly: "conviction, alternatives, surprises, impulses, experience, unresolved." This is sufficient for a capable Opus agent to write meaningful reflections, but the detailed prompts in the TC skill (lines 786-810) are much richer.
- **Fix:** Either include the reflection prompt templates in the builder's instructions (lines 786-810 of TC skill), or trust that the summary labels are sufficient.

---

### 8. PHASE 3: EVALUATE (Screenshots)

The compose skill (lines 101-113) says:

> "Serve the HTML file and take screenshots at these viewports:
> - 1440px width (desktop)
> - 768px width (tablet)
> For each viewport, capture:
> 1. Above-the-fold (no scroll)
> 2. Full-page scrolling screenshots at ~900px intervals"

**Failure Point F-20: Screenshot capture mechanism is completely unspecified**
- **Severity:** BLOCKING
- **What happens:** The compose skill says "Serve the HTML file and take screenshots" but does NOT specify:
  - How to serve the HTML file (Playwright blocks `file://` protocol -- the PA skill notes this explicitly)
  - What HTTP server to use (Python `http.server`? Node? `npx serve`?)
  - What port to use
  - How to take screenshots (Playwright MCP tools are available -- browser_navigate, browser_take_screenshot -- but the compose skill doesn't mention them)
  - How to handle DPR (device pixel ratio) on Retina displays, which causes black screenshots
  - Whether to wait for font loading (`document.fonts.ready`)
  - Whether to disable animations

  The PA skill (lines 276-285) has a detailed "Screenshot Pre-Capture Protocol" that addresses all of these:
  1. Serve via HTTP
  2. Wait for `document.fonts.ready`
  3. Disable animations
  4. Take cold-look + scroll-through screenshots
  5. Use DPR-safe settings
  6. Validate no blank/black screenshots

  But the compose skill does NOT reference this protocol. The compose skill says the PA auditors receive "The PA skill: `~/.claude/skills/perceptual-auditing/SKILL.md`" but the SCREENSHOT CAPTURE is done by the orchestrator, not the auditors. So the orchestrator needs the PA skill's capture protocol but is not told to read it.
- **Fix:** Either:
  (1) Add explicit screenshot capture instructions to the compose skill (copy the PA skill's capture protocol), or
  (2) Tell the orchestrator: "For screenshot capture protocol, read Section: Screenshot Pre-Capture Protocol in the PA skill at `~/.claude/skills/perceptual-auditing/SKILL.md`", or
  (3) Inline a minimal capture recipe:
  ```
  1. Start HTTP server: `python3 -m http.server 8080 -d [output-dir]`
  2. Use Playwright MCP: browser_navigate to http://localhost:8080/page.html
  3. browser_resize to {width: 1440, height: 900}
  4. browser_evaluate: `() => document.fonts.ready`
  5. browser_evaluate: `() => { document.querySelectorAll('*').forEach(el => { el.style.animation = 'none'; el.style.transition = 'none'; }); }`
  6. browser_take_screenshot: {type: "png", fullPage: true}
  7. Repeat for 768px width
  ```

**Failure Point F-21: Screenshot viewport count mismatch with PA skill**
- **Severity:** SIGNIFICANT
- **What happens:** The compose skill specifies screenshots at 2 viewports: 1440px and 768px. But the PA skill (line 263) specifies 3 viewports: "1440px, 1024px, 768px". The PA auditor deployment table (line 246) says: "pre-captured at 1440px, 1024px, 768px."

  If the orchestrator follows the compose skill (2 viewports), the PA auditors will expect 3 viewports worth of screenshots and find 1024px missing. The responsive supplement questions (E-R1, E-R2, E-R3) expect multi-viewport comparisons.
- **Fix:** Update the compose skill to include 1024px viewport, matching the PA skill's expectations.

**Failure Point F-22: Screenshot file naming convention undefined**
- **Severity:** SIGNIFICANT
- **What happens:** The compose skill says "Save to `[output-dir]/_screenshots/`" with naming pattern `desktop-*.png` and `tablet-*.png` (from the output manifest). The PA skill (line 285) says a different naming convention: `1440/cold-look.png`, `1440/scroll-01.png`, etc.

  If the orchestrator names files one way and the PA auditors expect another convention, the auditors won't find their screenshots.
- **Fix:** Standardize the naming convention between compose skill and PA skill. Recommend the PA skill's convention since it includes viewport-width subdirectories.

---

### 9. PHASE 3B: PA Spawn

The compose skill (lines 115-130) says:

> "Spawn: 3 Opus agents as independent auditors (minimum viable for signal -- scale to 5-9 if budget allows).
> Each agent receives ONLY:
> - The screenshots (via Read tool on saved images)
> - The PA skill: `~/.claude/skills/perceptual-auditing/SKILL.md`"

**Failure Point F-23: Auditor count mismatch with PA skill**
- **Severity:** SIGNIFICANT
- **What happens:** The compose skill says "3 auditors." The PA skill (lines 226-237) specifies a 5-auditor deployment table:
  - Auditor A: E-01, E-05, E-11, E-17
  - Auditor B: E-02, E-08, E-14, E-18
  - Auditor C: E-03, E-07, E-12, E-19
  - Auditor D: E-04, E-06, E-13, E-20
  - Auditor E: E-09, E-10, E-15, E-16

  With only 3 auditors, which auditors run? Which questions get covered? The compose skill says "3 minimum" but doesn't provide a 3-auditor question assignment. The PA skill only provides the 5-auditor table. A fresh instance must improvise a 3-auditor distribution, potentially missing critical questions.

  The Weaver section (lines 311-422) references "all 5 auditor reports" -- with 3 auditors, the weaver protocol is mismatched.
- **Fix:** Either:
  (1) Update compose skill to say "5 auditors" matching the PA skill, or
  (2) Add a 3-auditor question assignment table to the PA skill, or
  (3) Say "If using 3 auditors, each answers 6-7 questions from the 20, ensuring all tiers are covered."

**Failure Point F-24: Same agent-spawning problem as F-07**
- **Severity:** BLOCKING (same root cause as F-07)
- **What happens:** "Spawn: 3 Opus agents as independent auditors." Same problem as F-07 and F-15 -- no spawning mechanism. If the orchestrator does all 3 audits itself, context isolation is completely defeated (the orchestrator knows the metaphor, the conviction brief, and the builder's creative process). The PA skill's FRESH-EYES PRINCIPLE (line 13) says: "Zero context = genuine first impressions." Running PA in the same context window as TC+Build violates this absolutely.
- **Fix:** Same as F-07. The spawning mechanism must be defined. For PA specifically, the fresh-eyes principle makes isolation CRITICAL. If no spawning mechanism exists, the compose skill should at minimum say: "Clear all TC and builder context from your working memory. You are now seeing this page for the first time."

---

### 10. PHASE 3C: Weave PA Results

The compose skill (lines 132-139) says the orchestrator reads all auditor reports and synthesizes them.

**Failure Point F-25: Weaver protocol is in PA skill but compose skill doesn't reference it**
- **Severity:** SIGNIFICANT
- **What happens:** The compose skill says "Read all auditor reports. Synthesize into: Convergent findings, Divergent findings, Overall verdict." This is a compressed version of what the PA skill (lines 311-422) specifies as "THE WEAVER: CREATIVE SYNTHESIS" -- a detailed 3-output protocol (Experience Portrait, Creative Direction with AMPLIFY/RELEASE/DEEPEN structure, Verdict).

  The compose skill's synthesis instruction is much simpler than the PA skill's Weaver protocol. A fresh instance will follow the compose skill (since that's the active instruction) and produce a simpler synthesis. The rich Weaver protocol (experience portrait, AMPLIFY/RELEASE/DEEPEN creative direction, fix type classification) is lost.

  Particularly important: the PA skill's Weaver classifies each issue as MECHANICAL, STRUCTURAL, or COMPOSITIONAL (line 369-373), which directly maps to the compose skill's fix types (TYPE A/B/C). Without this classification, the orchestrator must guess the fix type.
- **Fix:** The compose skill should say: "For synthesis, follow the Weaver protocol in the PA skill (Section: THE WEAVER: CREATIVE SYNTHESIS). Output the Experience Portrait, Creative Direction (AMPLIFY/RELEASE/DEEPEN), and Verdict."

---

### 11. PHASE 4: FIX CYCLES

The compose skill (lines 143-158) describes fix cycles.

**Failure Point F-26: "Route fixes to the SAME builder agent" requires agent persistence**
- **Severity:** BLOCKING
- **What happens:** The compose skill (line 147) says: "Verdict: REFINE -- Route fixes to the SAME builder agent (compositional memory is irreplaceable)." And later (line 194): "Same builder for fix cycles. Never spawn a new builder for fixes."

  This requires the builder agent to persist across the PA evaluation cycle. If the builder was:
  (a) A subprocess (CLI invocation) -- it's gone. The process ended. Cannot route back.
  (b) A subagent -- may or may not persist depending on implementation.
  (c) The orchestrator itself -- it's still here but with contaminated context.

  For option (a), the compose skill would need to say: "Re-invoke the builder with its original prompt PLUS the conviction brief PLUS the builder's reflection PLUS the PA creative direction." This reconstructs compositional memory from artifacts, which the compose skill acknowledges is inferior ("compositional memory is irreplaceable").

  The compose skill mentions "TeamCreate" in the task description but doesn't actually reference it anywhere in the protocol. The old `/build-page` pipeline used TeamCreate for persistent agents, but the compose skill doesn't.
- **Fix:** Specify the fix cycle mechanism:
  - If builder is a subprocess: re-invoke with expanded context (original prompt + original artifacts + reflection + PA feedback)
  - If builder is the orchestrator: continue in-context (the simplest option, but with all the isolation caveats)
  - If builder is a persistent subagent: send the PA feedback to the existing agent

**Failure Point F-27: Maximum 3 fix cycles but no tracking**
- **Severity:** MINOR
- **What happens:** The compose skill says "Maximum 3 fix cycles. After 3, verdict is final." But there is no execution tracker template. The old pipeline had an elaborate EXECUTION-TRACKER-TEMPLATE.md. The compose skill relies on the orchestrator to mentally track which cycle it's on.

  With context compaction possible during a long pipeline run, the orchestrator may lose track of the cycle count.
- **Fix:** The compose skill should say: "Track fix cycles explicitly. Write `[output-dir]/_fixes/fix-N-feedback.md` for each cycle. If `fix-3-feedback.md` already exists, stop."

---

## CROSS-CUTTING FAILURE MODES

### CC-01: Context Window Exhaustion
- **Severity:** SIGNIFICANT
- **What happens:** If all work happens in a single context window (the most likely scenario given F-07), the cumulative context by Phase 3 is enormous:
  - CLAUDE.md auto-loads: ~900 lines
  - Phase 0 files: ~1,045 lines
  - TC skill: ~840 lines
  - TC derivation work: ~200-500 lines
  - Conviction brief: ~100 lines
  - Builder files: ~1,200 lines
  - Builder HTML output: ~500-2,000 lines
  - Builder reflection: ~50 lines
  - PA skill: ~524 lines
  - Screenshots: (images, varying size)
  - Total text: ~5,000-7,000+ lines before PA even starts

  Context compaction may trigger during the PA phase, potentially losing the conviction brief or builder reflection that are needed for fix cycles.
- **Fix:** The compose skill should include a context management strategy. At minimum: "Before Phase 3, save all critical artifacts to disk. If context compaction occurs, re-read from disk."

### CC-02: CLAUDE.md Routing Confusion
- **Severity:** SIGNIFICANT
- **What happens:** The design-system/CLAUDE.md contains extensive routing instructions for `/build-page` including references to `ephemeral/va-extraction/MANIFEST.md` (a 1,300-line manifest), 9 artifact files, a gate runner, execution trackers, etc. A fresh instance may try to follow the CLAUDE.md protocol instead of or in addition to the compose skill, creating a franken-pipeline that mixes old and new instructions.

  The compositional-core/CLAUDE.md contains detailed phase-gated protocol, Flagship Build Workflow, and guardrail thresholds. Some of this is compatible with the compose skill; some conflicts.
- **Fix:** Update both CLAUDE.md files to acknowledge the compose skill as the current build protocol. Add: "If the /compose skill is being used, follow the compose skill's protocol. This CLAUDE.md's build protocol is superseded."

### CC-03: Two Pipelines, One Codebase
- **Severity:** SIGNIFICANT
- **What happens:** The codebase currently has TWO page-building pipelines:
  1. `/build-page` -> MANIFEST.md -> deep-build orchestrator (old, being deleted per git status)
  2. `/compose` -> SKILL.md -> agent-based phases (new)

  Both are referenced in different places. CLAUDE.md says `/build-page`. The skills directory has both `build-page/` and `compose/`. MEMORY.md references `/build-page` extensively. A fresh instance encountering both will be confused.
- **Fix:** Clearly mark which pipeline is current. Either remove the old `build-page` skill or rename it to `build-page-v1-archived` (which already exists, suggesting the transition is in progress -- but `build-page/` still exists alongside it).

---

## PRE-FLIGHT CHECKLIST

Before running `/compose` on a fresh instance, verify all of the following:

### Must-Fix (BLOCKING)

| # | Item | Status | Fix |
|---|------|--------|-----|
| 1 | Content file path is correct and file exists | F-02 | User provides correct path (e.g., `extractions/deep/yegge-gas-town-extraction.md`) |
| 2 | Agent spawning mechanism is defined | F-07, F-15, F-24 | Add explicit instructions: use `claude` CLI subprocess, Task tool, or accept single-context execution |
| 3 | Screenshot capture protocol is specified | F-20 | Add HTTP server + Playwright MCP instructions to compose skill |
| 4 | TC agent receives absolute file paths | F-08 | Resolve all file paths to absolute before spawning |
| 5 | Fix cycle builder persistence is defined | F-26 | Specify re-invocation mechanism with artifact reconstruction |
| 6 | Output directory is created before agents write | F-13 | Add `mkdir -p` to Phase 0 or Phase 1 |

### Should-Fix (SIGNIFICANT)

| # | Item | Status | Fix |
|---|------|--------|-----|
| 7 | CLAUDE.md routing acknowledges /compose | F-01 | Add /compose to routing table |
| 8 | TC agent output path is communicated | F-09 | Include resolved path in agent prompt |
| 9 | Screenshot viewports match PA skill (add 1024px) | F-21 | Update compose skill to 3 viewports |
| 10 | Screenshot naming matches PA skill conventions | F-22 | Standardize to PA skill's `{width}/cold-look.png` pattern |
| 11 | Auditor count matches PA skill (3 vs 5) | F-23 | Either update compose to 5 or add 3-auditor table to PA |
| 12 | Weaver protocol is referenced for synthesis | F-25 | Point orchestrator to PA skill's Weaver section |
| 13 | Builder HTML boilerplate specified | F-17 | Add doctype, meta tags, Google Fonts URLs |
| 14 | Context window management strategy | CC-01 | Add artifact-to-disk protocol |
| 15 | Two-pipeline confusion resolved | CC-02, CC-03 | Update CLAUDE.md files |
| 16 | TC skill references non-existent _INDEX.md | F-11 | Create _INDEX.md or update TC skill to use README.md |
| 17 | Side B derivation with context pollution | F-10 | Add explicit context isolation instruction |

### Nice-to-Fix (MINOR)

| # | Item | Status | Fix |
|---|------|--------|-----|
| 18 | Redundant file loading (Phase 0 vs CLAUDE.md) | F-04 | Harmless, no fix needed |
| 19 | Relative vs absolute path resolution | F-03, F-05 | Use absolute paths throughout |
| 20 | Soul verification is subjective | F-06 | No fix needed |
| 21 | Builder file redundancy | F-16 | No fix needed |
| 22 | Reflection prompt detail level | F-19 | Include detailed prompts from TC skill |
| 23 | Brief verification criteria | F-14 | Add concrete checks |
| 24 | Fix cycle tracking | F-27 | Add simple file-based counter |
| 25 | TC mechanism file path consistency | F-12 | Clarify access model |

---

## RECOMMENDED EXECUTION ORDER FOR FIXES

**Phase 1: Enable Execution (30 min)**
1. Define agent spawning mechanism in compose skill preamble (F-07)
2. Add screenshot capture recipe (F-20)
3. Add output directory creation (F-13)

**Phase 2: Fix Mismatches (20 min)**
4. Update viewport count to 3 (F-21)
5. Standardize screenshot naming (F-22)
6. Align auditor count or add 3-auditor table (F-23)
7. Reference Weaver protocol for synthesis (F-25)
8. Create case-studies/_INDEX.md (F-11)

**Phase 3: Reduce Confusion (20 min)**
9. Update CLAUDE.md files to reference /compose (F-01, CC-02, CC-03)
10. Add HTML boilerplate to builder instructions (F-17)
11. Specify fix cycle re-invocation mechanism (F-26)
12. Add context management strategy (CC-01)

**Phase 4: Polish (10 min)**
13. Use absolute paths throughout (F-03, F-05, F-08, F-09, F-18)
14. Add concrete brief verification checks (F-14)
15. Include reflection prompt templates (F-19)

---

## EXPECTED OUTCOME WITHOUT FIXES

If a fresh instance runs `/compose extractions/deep/yegge-gas-town-extraction.md` TODAY with no fixes:

1. The Skill tool correctly finds and loads compose/SKILL.md
2. The instance reads identity.md, vocabulary.md, tokens.css, components.css (succeeds -- files exist)
3. The instance tries to "spawn an Opus TC agent" -- cannot, so does TC work in-context (F-07)
4. TC derivation works adequately in-context (identity files are clear, TC skill is detailed)
5. Conviction brief is written to disk (assuming instance creates the output dir)
6. The instance tries to "spawn an Opus builder" -- cannot, so does builder work in-context (F-15)
7. Builder creates HTML (quality depends on context pollution and remaining context budget)
8. The instance tries to take screenshots -- STUMBLES on serving + capture (F-20)
9. If screenshots succeed, the instance tries to "spawn 3 PA auditors" -- cannot, so does PA in-context (F-24)
10. PA is severely compromised because the instance knows the metaphor, the brief, and the builder's process
11. Fix cycles route back to the same context (accidental success -- same builder is trivially available)
12. Final output quality: DEGRADED by context pollution and single-context execution, but may produce a functional HTML page

**Bottom line:** The compose skill is well-designed as an ARCHITECTURE DOCUMENT but is missing the PLUMBING needed for a fresh instance to execute it mechanically. The three critical gaps are: (1) agent spawning, (2) screenshot capture, and (3) CLAUDE.md routing. Fix those three and the pipeline becomes executable.

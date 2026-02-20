# 16 -- Agent Team Architecture for /build-page

**Author:** pa-researcher (Opus 4.6)
**Task:** #46
**Inputs:** memory/agent-team-lessons.md, 04-orchestrator-research.md, 07-metacog-analysis.md, 08-nav-validation-research.md, 03-pa-research.md, all meta-audit reports (09-15)
**Date:** 2026-02-19

---

## CRITICAL FRAMING: CD-006 IS NOT FLAGSHIP

CD-006 (39/40) is CEILING TIER, not Flagship. It is a floor reference for what Ceiling looks like. Flagship 4/4 has NEVER been achieved. The target is the 14-dimension definition in `ephemeral/flagship-44-recipe/01-DEFINITION.md`, which requires capabilities CD-006 does NOT demonstrate:
- **Unified pervading metaphor** (CD-006 has multiple local metaphors, not a single structural one)
- **Dynamic multi-coherence profile** (CD-006 has local multi-coherence concentrated at bookends, not global)
- **Compositional surprise** (CD-006 is predictable vocabulary fluency)
- **Fractal at ALL 5 scales with strong expression** (CD-006 is 4 strong + 1 moderate)

Throughout this document, CD-006 is referenced ONLY as evidence that individual CSS techniques are achievable -- NOT as the quality target.

---

## 1. Team Name and Description

**Team name:** `build-page`
**Description:** Executes the /build-page command. A single Opus agent plans and builds one HTML page using the design system's compositional core, then a 9-auditor perceptual audit evaluates composition quality. Fix cycles repeat until PA-05 >= 3.5 AND Tier 5 >= 6/8, or max 3 cycles exhausted.

**Architecture:** Fat Core (single builder plans + builds). No separate TC planner. No tier routing -- ALWAYS FLAGSHIP intensity.

**Why this architecture:**
- Both prior successes (CD-006 at Ceiling tier, Middle experiment at Middle 4/4) used single-agent builds with direct reference access. These are FLOOR REFERENCES, not the target -- Flagship 4/4 has never been achieved.
- Multi-agent builder pipelines (Flagship experiment) scored 1.5/4 due to inverted quality routing and compression loss
- Fat Core eliminates the planner-builder handoff where 91.2% of compositional intelligence was lost
- The actual target is the 14-dimension Flagship 4/4 definition (see ephemeral/flagship-44-recipe/01-DEFINITION.md) which EXCEEDS CD-006 in unified metaphor, global multi-coherence, compositional surprise, and 5-scale fractal expression

---

## 2. Agent Roles

### Wave 1: File Writers (parallel, no dependencies)

| # | Role | Model | Purpose | Output File |
|---|------|-------|---------|-------------|
| 1 | **conventions-brief-writer** | Sonnet | Write `conventions-brief.md` (~225 lines, 10 sections). Recipe format with imperative verbs, sequenced steps, exact CSS values. NOT a checklist. | `design-system/compositional-core/conventions-brief.md` |
| 2 | **gate-runner-writer** | Sonnet | Write `gate-runner.js` (~400 lines). 21 gates with Flagship thresholds. Programmatic verification of container width, spacing, typography, accessibility, etc. | `design-system/compositional-core/gate-runner.js` |
| 3 | **pa-questions-writer** | Sonnet | Add 8 Tier 5 PA questions (PA-60 through PA-67) to the PA skill. Update Mode 4 auditor assignments. Add scoring aggregation for Tier 5. | `~/.claude/skills/perceptual-auditing/SKILL.md` |
| 4 | **build-page-skill-writer** | Opus | Write the `/build-page` skill file (~350-400 lines). This IS the master execution prompt. Contains: orchestration sequence, builder instructions (recipe format), gate invocation, PA deployment, fix cycle protocol. | `~/.claude/skills/build-page/SKILL.md` |
| 5 | **tc-skill-editor** | Sonnet | Remove all tier-conditional logic from tension-composition SKILL.md. Replace with ALWAYS FLAGSHIP. Remove ~542 lines of tier routing. Apply Flagship enrichments from 05-tc-skill-audit.md. | `~/.claude/skills/tension-composition/SKILL.md` |
| 6 | **pa-skill-editor** | Sonnet | Remove tier-conditional logic from PA skill. Apply Flagship enrichments from 06-pa-skill-audit.md. Separate from pa-questions-writer to avoid edit contention. | `~/.claude/skills/perceptual-auditing/SKILL.md` |
| 7 | **claude-md-editor** | Sonnet | Apply 8 edits to `design-system/CLAUDE.md` and 6 edits to `design-system/compositional-core/CLAUDE.md` per 08-nav-validation-research.md. Add /build-page routing, remove tier references, update navigation. | `design-system/CLAUDE.md` + `design-system/compositional-core/CLAUDE.md` |

### CONTENTION WARNING: pa-questions-writer (#3) and pa-skill-editor (#6)

Both edit `~/.claude/skills/perceptual-auditing/SKILL.md`. **They MUST NOT run simultaneously.**

**Resolution:** pa-skill-editor (#6) runs in Wave 1. pa-questions-writer (#3) runs in Wave 2 (after #6 completes). pa-questions-writer reads the already-edited file and appends Tier 5 questions.

**Revised wave assignment:**
- Wave 1: agents #1, #2, #4, #5, #6, #7 (6 agents, parallel)
- Wave 1.5: agent #3 (after #6 completes, before Wave 2)

### Wave 2: Cross-Reference Verification (parallel, depends on Wave 1 + 1.5)

| # | Role | Model | Purpose | Output File |
|---|------|-------|---------|-------------|
| 8 | **cross-reference-verifier** | Opus | Read ALL 7 output files from Wave 1/1.5. Verify: every file path matches across files, every threshold value is consistent, every gate ID referenced in build-page skill exists in gate-runner, every PA question ID in build-page skill exists in PA skill. Produce mismatch report. | `ephemeral/build-page-prompt/_verification/cross-ref-report.md` |
| 9 | **quality-auditor** | Opus | Read the build-page skill file. Evaluate against metacognitive failure modes (FM-01 through FM-10 from 07-metacog-analysis.md). Check: is it a recipe or checklist? Does compositional intelligence reach the builder? Is it 400-600 lines? Are there self-checks? Produce quality report. | `ephemeral/build-page-prompt/_verification/quality-report.md` |

### Wave 3: Fix Cycle (sequential, depends on Wave 2)

| # | Role | Model | Purpose | Output File |
|---|------|-------|---------|-------------|
| 10 | **fix-executor** | Sonnet | Takes cross-reference mismatches and quality findings. Applies fixes to the 7 output files. One agent per fix cycle to avoid contention. | Updates to Wave 1/1.5 output files |

### Wave 4: Validation (depends on Wave 3 or Wave 2 if no fixes needed)

| # | Role | Model | Purpose | Output File |
|---|------|-------|---------|-------------|
| 11 | **validation-runner** | Opus | Runs the actual /build-page skill against RESEARCH-SYNTHESIS.md content. Serves the page via HTTP, takes screenshots, does a lightweight PA (team lead + 2 quick auditors). Reports whether the pipeline produces a buildable, auditable page. | `ephemeral/build-page-prompt/_verification/validation-report.md` |

---

## 3. Wave Structure

```
Wave 1 (parallel, ~20-30 min)
  ├── #1 conventions-brief-writer    → conventions-brief.md
  ├── #2 gate-runner-writer          → gate-runner.js
  ├── #4 build-page-skill-writer     → SKILL.md (build-page)
  ├── #5 tc-skill-editor             → SKILL.md (tension-composition)
  ├── #6 pa-skill-editor             → SKILL.md (perceptual-auditing)
  └── #7 claude-md-editor            → CLAUDE.md (x2)

Wave 1.5 (sequential after #6, ~10-15 min)
  └── #3 pa-questions-writer         → SKILL.md (perceptual-auditing, append)

Wave 2 (parallel, depends on ALL Wave 1 + 1.5, ~15-20 min)
  ├── #8 cross-reference-verifier    → cross-ref-report.md
  └── #9 quality-auditor             → quality-report.md

Wave 3 (sequential, depends on Wave 2, ~10-20 min, CONDITIONAL)
  └── #10 fix-executor               → fixes to Wave 1/1.5 files
       (only runs if Wave 2 reports have BLOCKING findings)
       (max 2 fix cycles)

Wave 4 (sequential, depends on Wave 3 or Wave 2, ~30-45 min)
  └── #11 validation-runner          → validation-report.md
       (runs /build-page against real content)
```

**Total estimated time:** 75-130 min (without validation) or 105-175 min (with validation).
**Total agents:** 11 roles, 11 agent spawns (no respawns unless fix cycle).

---

## 4. TaskCreate Commands

### Wave 1 Tasks

```
TaskCreate: "Write conventions-brief.md"
  Description: "Write design-system/compositional-core/conventions-brief.md (~225 lines, 10 sections).

  READ FIRST: ephemeral/build-page-prompt/01-brief-research.md (extraction of all content for this file).
  ALSO READ: design-system/compositional-core/vocabulary/tokens.css, design-system/compositional-core/identity/prohibitions.md, design-system/compositional-core/grammar/mechanism-catalog.md.

  FORMAT: Recipe, NOT checklist. Use imperative verbs (Read, Select, Deploy, Assess). Sequenced steps with exact CSS values. Every guardrail gets a paired playbook with concrete CSS.

  SECTIONS (10): Identity summary, Token quick-reference, Mechanism selection protocol (per-category minimums: Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+), Transition grammar (3 types), Perception thresholds (backgrounds >=15 RGB, letter-spacing >=0.5px, padding >=24px), Content density floors, Restraint protocol, Spacing maxima (S-09 stacking: total gap <=96px), Scale-channel routing (5 scales, 6 channels), Self-check protocol (4 checkpoints).

  CRITICAL: This file is what the Opus builder reads. It must transfer compositional intelligence, not just constraints. Every section must answer 'what do I DO?' not just 'what must I avoid?'

  OUTPUT: Write to design-system/compositional-core/conventions-brief.md. MUST write the file."
  ActiveForm: "Writing conventions-brief.md"
```

```
TaskCreate: "Write gate-runner.js"
  Description: "Write design-system/compositional-core/gate-runner.js (~400 lines). Programmatic verification of 21 gates.

  READ FIRST: ephemeral/build-page-prompt/02-gate-research.md (full gate extraction with thresholds and implementations).

  GATE REGISTRY (21 gates, Flagship thresholds):
  - 12 composition-critical: container width (940-960px), spacing (S-09 stacking <=96px total), typography (>=3 distinct sizes, >=2 weights), backgrounds (>=15 RGB delta between zones), border usage, mechanism count (>=8, per-category minimums), transition count (>=3), scale presence (>=3 perceptible), channel diversity, content density, accessibility (WCAG 2.1 AA), responsive (768px + 1440px).
  - 7 identity enforcement: token compliance, prohibition compliance, soul violations, font family, color palette, max-width, no-framework.
  - 2 behavioral: build time tracking, file naming.

  IMPLEMENTATION: Each gate is a function that takes an HTML file path, parses with cheerio/jsdom pattern (inline, no dependencies -- use regex + DOM string parsing), returns {pass: boolean, details: string, value: any}.

  FLAGSHIP THRESHOLDS (non-negotiable): container 940-960px, backgrounds >=15 RGB, spacing total <=96px, typography >=3 sizes, mechanisms >=8.

  OUTPUT FORMAT: module.exports or ES module with runAllGates(htmlPath) that returns {passed: number, failed: number, results: [{gate, pass, details}]}.

  OUTPUT: Write to design-system/compositional-core/gate-runner.js. MUST write the file."
  ActiveForm: "Writing gate-runner.js"
```

```
TaskCreate: "Write /build-page skill (master execution prompt)"
  Description: "Write ~/.claude/skills/build-page/SKILL.md (~350-400 lines). This is the master execution prompt -- THE most important file.

  READ FIRST (in order):
  1. ephemeral/build-page-prompt/04-orchestrator-research.md (orchestration sequence)
  2. ephemeral/build-page-prompt/07-metacog-analysis.md (failure modes and anti-failure techniques)
  3. ephemeral/build-page-prompt/11-format-analysis.md (recipe vs checklist)
  4. ephemeral/build-page-prompt/12-builder-simulation.md (builder perspective)
  5. ephemeral/build-page-prompt/15-stack-transfer-test.md (compositional intelligence transfer)
  6. ephemeral/build-page-prompt/09-cd006-ground-truth.md (Ceiling floor reference -- NOT the Flagship target)
  7. ephemeral/flagship-44-recipe/01-DEFINITION.md (THE actual Flagship 4/4 target: 14 dimensions)

  ARCHITECTURE: Fat Core. Single Opus agent plans AND builds. No separate planner. ALWAYS FLAGSHIP (no tier routing).

  STRUCTURE (8 sections, progressive zoom):
  1. Trigger and intake (~20 lines): /build-page <content-source>. Parse content, identify sections and themes.
  2. Builder deployment (~60 lines): Spawn single Opus builder. RECIPE format instructions. Builder reads: conventions-brief.md, tokens.css, prohibitions.md, mechanism-catalog.md, semantic-rules.md, merged-components.css (~2,120 lines total). Creative authority clause.
  3. Builder self-checks (~30 lines): 4 checkpoints during build (after HTML structure, after base CSS, after mechanisms, after refinement). Each checkpoint: stop, verify against brief, adjust.
  4. Gate invocation (~40 lines): Run gate-runner.js against output. If any BLOCKING gate fails, builder gets structured CSS recipe (not just 'fix this'). Max 2 gate-fix cycles.
  5. Screenshot capture (~30 lines): Team lead captures screenshots at 1440px and 768px. Disable animations. document.fonts.ready before capture. Save to ephemeral directory.
  6. PA deployment (~60 lines): Spawn 9 auditors (A-I) with question assignments. 48 standard + 8 Tier 5 = 56 questions. Auditors read screenshots via Read tool (no Playwright contention). Each writes findings file.
  7. Weaver synthesis (~30 lines): Spawn weaver to read all 9 auditor reports. Produce unified verdict: PA-05 score, Tier 5 score, BLOCKING/SIGNIFICANT/MINOR findings, fix priority list.
  8. Fix cycle (~40 lines): If PA-05 < 3.5 OR Tier 5 < 6/8: same builder applies fixes from weaver report. Structured feedback: gate failures get CSS recipes, PA issues get directional guidance. Max 3 total PA cycles.

  ANTI-FAILURE TECHNIQUES (bake these in):
  - AT-01: Progressive zoom (high-level -> detail, never start with rules)
  - AT-02: Concrete examples (CD-006 as Ceiling FLOOR REFERENCE, not as the Flagship target)
  - AT-03: Self-check protocol (4 checkpoints)
  - AT-04: Perception thresholds (>=15 RGB, >=0.5px letter-spacing, >=24px padding)
  - AT-05: Recipe format (imperative verbs, sequenced, CSS values)
  - AT-06: Creative authority ('you may deviate from examples if compositionally justified')

  SUCCESS BAR: PA-05 >= 3.5 (Flagship register) AND Tier 5 >= 6/8. The target is the 14-dimension Flagship 4/4 definition (01-DEFINITION.md), NOT reproduction of CD-006 (which is Ceiling tier). If achieved, page ships. If not after 3 cycles, ship with PA report noting deficiencies.

  CRITICAL CONSTRAINTS:
  - Must be 350-400 lines (not 530+ like the failed Flagship prompt, not 75 like the builder-starved version)
  - Must be a RECIPE not a CHECKLIST (imperative verbs, sequenced steps)
  - Must route mechanism-catalog.md to the BUILDER (not to a planner that doesn't exist)
  - Must include perception thresholds as hard numbers, not judgment calls
  - Zero judgment language ('appropriate', 'sufficient', 'harmonious' are BANNED)

  OUTPUT: Write to ~/.claude/skills/build-page/SKILL.md. MUST write the file. This file determines whether the entire pipeline succeeds or fails."
  ActiveForm: "Writing /build-page master execution prompt"
```

```
TaskCreate: "Edit tension-composition skill for ALWAYS FLAGSHIP"
  Description: "Edit ~/.claude/skills/tension-composition/SKILL.md to remove ALL tier-conditional logic and replace with ALWAYS FLAGSHIP.

  READ FIRST: ephemeral/build-page-prompt/05-tc-skill-audit.md (complete audit with exact removals and enrichments).
  THEN READ: ~/.claude/skills/tension-composition/SKILL.md (current file, 1,878 lines).

  CHANGES:
  1. REMOVE all tier routing (Floor/Middle/Ceiling/Flagship conditionals). Estimated ~542 lines of tier-conditional logic.
  2. REMOVE tier selection phase entirely.
  3. REPLACE with single ALWAYS FLAGSHIP path.
  4. APPLY Flagship enrichments from the audit: perception thresholds, transition grammar, density floors, restraint protocol.
  5. KEEP all mechanism definitions, scale/channel definitions, compositional principles.
  6. Target: reduce from ~1,878 lines to ~1,300-1,400 lines (remove conditionals, add enrichments).

  CRITICAL: Do NOT remove mechanism definitions or compositional intelligence. Only remove the routing/conditional logic that selects between tiers.

  OUTPUT: Edit ~/.claude/skills/tension-composition/SKILL.md in place. MUST complete all edits."
  ActiveForm: "Editing TC skill for ALWAYS FLAGSHIP"
```

```
TaskCreate: "Edit PA skill for tier removal and Flagship enrichments"
  Description: "Edit ~/.claude/skills/perceptual-auditing/SKILL.md to remove tier-conditional logic and apply Flagship enrichments.

  READ FIRST: ephemeral/build-page-prompt/06-pa-skill-audit.md (complete audit with exact changes).
  THEN READ: ~/.claude/skills/perceptual-auditing/SKILL.md (current file, 774 lines).

  CHANGES:
  1. REMOVE tier-conditional Mode selection (if Floor -> Mode 1, if Middle -> Mode 2, etc.).
  2. SET Mode 4 as the ONLY mode (9 auditors + weaver). Remove Modes 1-3 definitions.
  3. REMOVE tier-specific scoring thresholds. Replace with single Flagship threshold set.
  4. APPLY Flagship enrichments from the audit.
  5. KEEP all 48 existing questions (Tiers 1-4) intact. Do NOT modify question text.
  6. KEEP visual auditing protocol, screenshot capture protocol, team role definitions.

  NOTE: Do NOT add Tier 5 questions in this task. Agent #3 (pa-questions-writer) handles that separately in Wave 1.5 after this task completes.

  OUTPUT: Edit ~/.claude/skills/perceptual-auditing/SKILL.md in place. MUST complete all edits."
  ActiveForm: "Editing PA skill for tier removal"
```

```
TaskCreate: "Edit CLAUDE.md files for /build-page integration"
  Description: "Apply edits to design-system/CLAUDE.md and design-system/compositional-core/CLAUDE.md per the nav-validation research.

  READ FIRST: ephemeral/build-page-prompt/08-nav-validation-research.md (exact edits specified).
  THEN READ both CLAUDE.md files.

  EDITS TO design-system/CLAUDE.md (8 edits):
  - Add /build-page as primary entry point
  - Update phase status to reflect Pipeline v2
  - Remove tier routing references
  - Add conventions-brief.md to navigation
  - Add gate-runner.js to navigation
  - Update skill references
  - Add ALWAYS FLAGSHIP declaration
  - Update validation protocol reference

  EDITS TO design-system/compositional-core/CLAUDE.md (6 edits):
  - Remove phase-gated building protocol (replaced by /build-page)
  - Add conventions-brief.md to file listing
  - Add gate-runner.js to file listing
  - Update building instructions to reference /build-page
  - Remove tier-conditional building steps
  - Add ALWAYS FLAGSHIP declaration

  OUTPUT: Edit both files in place. MUST complete all edits to both files."
  ActiveForm: "Editing CLAUDE.md files"
```

### Wave 1.5 Task

```
TaskCreate: "Add Tier 5 PA questions to PA skill"
  Description: "Add 8 Tier 5 PA questions (PA-60 through PA-67) to the perceptual-auditing skill. This runs AFTER pa-skill-editor completes tier removal.

  READ FIRST: ephemeral/build-page-prompt/03-pa-research.md (complete Tier 5 extraction with all 8 questions, scoring rubrics, auditor assignments).
  THEN READ: ~/.claude/skills/perceptual-auditing/SKILL.md (will already have tier removals applied by pa-skill-editor).

  ADD:
  1. Tier 5 section header after Tier 4 questions.
  2. All 8 questions (PA-60 through PA-67) with exact text from 03-pa-research.md.
  3. Per-question scoring rubric (0 = absent, 0.5 = attempted but imperceptible, 1 = perceptible and compositionally justified).
  4. Tier 5 aggregate scoring: 7-8/8 COMPOSED, 5-6 APPROACHING, 3-4 STRUCTURED, 0-2 VOCABULARY ONLY.
  5. Combined verdict matrix (PA-05 x Tier 5).
  6. Updated Mode 4 auditor assignments: distribute PA-60-67 across auditors C, D, E, F, G, H (2 Tier 5 questions each, based on perceptual alignment).

  DEPENDENCY: This task is BLOCKED by the pa-skill-editor task. Do not start until pa-skill-editor marks complete.

  OUTPUT: Edit ~/.claude/skills/perceptual-auditing/SKILL.md in place. MUST complete all additions."
  ActiveForm: "Adding Tier 5 PA questions"
```

### Wave 2 Tasks

```
TaskCreate: "Cross-reference verification of all output files"
  Description: "Read ALL 7 output files from Wave 1/1.5. Verify cross-file consistency.

  READ ALL OF THESE:
  1. design-system/compositional-core/conventions-brief.md
  2. design-system/compositional-core/gate-runner.js
  3. ~/.claude/skills/build-page/SKILL.md
  4. ~/.claude/skills/tension-composition/SKILL.md
  5. ~/.claude/skills/perceptual-auditing/SKILL.md
  6. design-system/CLAUDE.md
  7. design-system/compositional-core/CLAUDE.md

  VERIFY:
  - Every file path referenced in build-page SKILL.md exists in the actual file system
  - Every gate ID in build-page SKILL.md exists in gate-runner.js
  - Every PA question ID in build-page SKILL.md exists in PA SKILL.md
  - Every threshold value (container width, RGB delta, spacing max, etc.) is consistent across ALL files that reference it
  - Every mechanism-catalog reference in conventions-brief matches mechanism-catalog.md
  - CLAUDE.md navigation entries point to files that exist
  - Build-page SKILL.md references conventions-brief.md correctly
  - PA auditor assignments in build-page SKILL.md match PA SKILL.md
  - No dead links, no orphaned references, no contradictory thresholds

  OUTPUT FORMAT: For each mismatch: file A says X at line N, file B says Y at line M. Severity: BLOCKING (will cause runtime failure) or SIGNIFICANT (will cause confusion) or MINOR (cosmetic).

  OUTPUT: Write to ephemeral/build-page-prompt/_verification/cross-ref-report.md. MUST write the file even if zero mismatches found."
  ActiveForm: "Cross-referencing all output files"
```

```
TaskCreate: "Quality audit of master execution prompt"
  Description: "Evaluate the build-page SKILL.md against all known failure modes.

  READ FIRST: ephemeral/build-page-prompt/07-metacog-analysis.md (10 failure modes FM-01 through FM-10).
  ALSO READ: ephemeral/build-page-prompt/11-format-analysis.md (recipe vs checklist analysis).
  ALSO READ: ephemeral/build-page-prompt/12-builder-simulation.md (builder perspective).
  THEN READ: ~/.claude/skills/build-page/SKILL.md (the file under audit).

  EVALUATE:
  1. Is it a recipe or checklist? Count imperative verbs vs constraint verbs. Target: >70% imperative.
  2. Line count: is it 350-400 lines? (Not 530+, not 75.)
  3. Does compositional intelligence reach the builder? Check: does the builder read mechanism-catalog.md directly?
  4. FM-01 Skimming Collapse: are anti-skimming techniques present? (Headers, bullets, progressive zoom)
  5. FM-02 Checklist Drift: any judgment language? ('appropriate', 'sufficient', 'harmonious')
  6. FM-03 Compression Cascade: is information from research preserved or compressed away?
  7. FM-04 Gate Overreliance: does the prompt treat gates as sufficient (they cover ~26%)?
  8. FM-05 Creative Suppression: is there a creative authority clause?
  9. FM-06 Threshold Ambiguity: are all thresholds hard numbers?
  10. FM-07 through FM-10: check remaining failure modes from the analysis.
  11. Self-check protocol: are there 4 builder self-checks during the build?
  12. Perception thresholds: are >=15 RGB, >=0.5px, >=24px present as hard numbers?

  OUTPUT FORMAT: For each check: PASS/FAIL with evidence (line numbers, quotes). Overall verdict: SHIP / NEEDS FIXES (list) / REWRITE.

  OUTPUT: Write to ephemeral/build-page-prompt/_verification/quality-report.md. MUST write the file."
  ActiveForm: "Auditing master execution prompt quality"
```

### Wave 3 Task (conditional)

```
TaskCreate: "Apply fixes from verification reports"
  Description: "Read both verification reports. Apply all BLOCKING and SIGNIFICANT fixes to the Wave 1/1.5 output files.

  READ: ephemeral/build-page-prompt/_verification/cross-ref-report.md
  READ: ephemeral/build-page-prompt/_verification/quality-report.md

  IF both reports say SHIP with zero BLOCKING findings: mark this task complete with no changes needed.

  IF BLOCKING or SIGNIFICANT findings exist:
  1. For each finding, identify which file(s) need editing.
  2. Apply the fix using Edit tool.
  3. Document each fix applied.

  CRITICAL: Only one agent edits files in Wave 3 to avoid contention. Apply fixes in file order (conventions-brief first, then gate-runner, then build-page skill, then TC skill, then PA skill, then CLAUDE.md files).

  OUTPUT: Write fix log to ephemeral/build-page-prompt/_verification/fix-log.md listing all changes made. MUST write the file."
  ActiveForm: "Applying verification fixes"
```

### Wave 4 Task

```
TaskCreate: "Validation build using /build-page"
  Description: "Run the /build-page pipeline against real content to verify it produces a buildable, auditable page.

  INPUT: design-system/research/RESEARCH-SYNTHESIS.md

  PROCESS:
  1. Read ~/.claude/skills/build-page/SKILL.md to understand the pipeline.
  2. Execute the pipeline as specified (spawn Opus builder, run gates, capture screenshots, run PA).
  3. Note: for this validation, run a LIGHTWEIGHT PA (3 auditors, not 9) to save time/cost.
  4. Document: Did the builder complete? Did gates run? Did PA auditors get screenshots? Did the weaver produce a verdict?

  SUCCESS CRITERIA (for the PIPELINE, not the page):
  - Builder produced an HTML file: YES/NO
  - Gate runner executed without errors: YES/NO
  - Screenshots captured at both viewports: YES/NO
  - PA auditors produced findings: YES/NO
  - Weaver produced verdict with PA-05 score: YES/NO
  - Fix cycle triggered correctly (if PA < 3.5): YES/NO

  PAGE QUALITY is secondary -- we're testing the pipeline, not the output. But report PA-05 score for reference.

  OUTPUT: Write to ephemeral/build-page-prompt/_verification/validation-report.md. MUST write the file."
  ActiveForm: "Running validation build"
```

---

## 5. Communication Protocol

### Primary: File-Bus (default for all non-blocking communication)

All agents write their output to designated files. Downstream agents read those files. No SendMessage needed for normal workflow.

**File locations:**
- Wave 1/1.5 outputs: permanent file locations (design-system/, skills/)
- Wave 2+ outputs: `ephemeral/build-page-prompt/_verification/`

### Secondary: SendMessage (ONLY for blocking issues)

Use SendMessage to team-lead ONLY when:

1. **File contention detected:** "I need to edit [file] but it's being edited by [agent]. Requesting sequencing."
2. **Blocking dependency missing:** "I need [file] from Wave 1 but it doesn't exist yet."
3. **Ambiguity in source material:** "Source report X says [value] but source report Y says [different value]. Which is canonical?"
4. **Task impossible:** "The research file I was told to read doesn't exist / is empty / contradicts the task description."

**DO NOT use SendMessage for:**
- Progress updates (task system handles this)
- Non-blocking questions (make a decision and document it)
- Requesting review (the verification wave handles this)

### Team Lead Monitoring

Team lead monitors via TaskList. When all Wave 1 tasks complete, team lead:
1. Verifies all output files exist (glob check)
2. Spawns Wave 1.5 (pa-questions-writer)
3. When Wave 1.5 completes, spawns Wave 2 (both verifiers in parallel)
4. When Wave 2 completes, reads reports and decides: spawn Wave 3 (fixes needed) or skip to Wave 4
5. When Wave 3/4 completes, reads validation report and reports final status

---

## 6. Fix Cycle Management

### Cross-Reference Mismatches (Wave 3)

**Process:**
1. Team lead reads cross-ref-report.md
2. If BLOCKING findings > 0: spawn fix-executor with the report
3. Fix-executor applies fixes to ONE file at a time (no parallel edits)
4. After fixes: team lead re-runs cross-reference verification (re-spawn verifier)
5. Max 2 fix cycles. If still failing after 2, escalate to user.

**Fix priority order:**
1. File path mismatches (will cause runtime FileNotFoundError)
2. Threshold inconsistencies (will cause silent quality failures)
3. ID mismatches (gate IDs, PA question IDs)
4. Navigation/link errors

### Quality Failures (Wave 3)

**Process:**
1. Team lead reads quality-report.md
2. If verdict is REWRITE: team lead re-spawns build-page-skill-writer with quality report as additional input
3. If verdict is NEEDS FIXES: fix-executor applies targeted edits
4. If verdict is SHIP: proceed to Wave 4

**Non-negotiable quality gates:**
- Must be recipe format (>70% imperative verbs) -- if not, REWRITE
- Must be 300-450 lines -- if not, REWRITE
- Must route mechanism-catalog to builder -- if not, fix
- Must have zero judgment language -- if not, fix (search and replace)
- Must have 4 self-checks -- if not, fix (add them)
- Must have hard perception thresholds -- if not, fix (add the 3 values)

### Validation Failures (Wave 4)

**If pipeline fails (builder doesn't complete, gates error, PA doesn't run):**
1. Team lead reads validation-report.md error details
2. Identifies which component failed
3. Spawns targeted fix agent for that component
4. Re-runs validation
5. Max 2 validation cycles

**If pipeline succeeds but PA-05 < 3.0:**
- This is NOT a pipeline failure. The pipeline worked correctly. The page quality is a content/builder issue.
- Document the PA score. The pipeline is shippable.
- Quality improvements come from iterating on the conventions-brief and builder instructions, not the pipeline infrastructure.

---

## 7. Dependency Graph (Summary)

```
#1 conventions-brief-writer ──────────────────┐
#2 gate-runner-writer ────────────────────────┤
#4 build-page-skill-writer ───────────────────┤
#5 tc-skill-editor ──────────────────────────┤
#6 pa-skill-editor ──┬───────────────────────┤
                     │                        │
                     v                        │
#3 pa-questions-writer (Wave 1.5) ────────────┤
                                              │
                                              v
                              #8 cross-ref-verifier ──┐
                              #9 quality-auditor ─────┤
                                                      │
                                                      v
                                        #10 fix-executor (conditional) ──┐
                                                                         │
                                                                         v
                                                          #11 validation-runner
```

---

## 8. Risk Mitigation

| Risk | Mitigation | Fallback |
|------|-----------|----------|
| pa-skill-editor and pa-questions-writer contend on same file | Wave 1.5 sequencing (questions writer waits for editor) | If contention detected, team lead manually sequences |
| build-page-skill-writer produces checklist instead of recipe | Quality auditor catches this in Wave 2; REWRITE if needed | Team lead re-spawns with Middle experiment recipe as example + 01-DEFINITION.md as Flagship target |
| Gate runner has runtime errors | Validation runner catches in Wave 4 | Fix-executor patches; if unfixable, ship without programmatic gates (PA is the real quality gate) |
| Cross-reference finds >10 mismatches | Fix-executor handles systematically | If pattern is systemic (e.g., all threshold values wrong), re-spawn the source agent with corrected instructions |
| Validation build takes >60 min | Acceptable for first run; note timing for optimization | If >90 min, investigate which component is slow |

---

## 9. Agent Model Selection Rationale

| Agent | Model | Rationale |
|-------|-------|-----------|
| conventions-brief-writer | **Sonnet** | Transcription + formatting from existing research. No creative composition needed. |
| gate-runner-writer | **Sonnet** | Code generation from specifications. Sonnet excellent at structured code. |
| pa-questions-writer | **Sonnet** | Transcription of pre-written questions into existing file format. |
| build-page-skill-writer | **Opus** | THE critical creative task. Must synthesize 6+ research reports into a coherent recipe. Recipe format requires compositional intelligence. This is the one file where Opus creative capability matters most. |
| tc-skill-editor | **Sonnet** | Deletion + targeted edits. Following explicit audit instructions. |
| pa-skill-editor | **Sonnet** | Deletion + targeted edits. Following explicit audit instructions. |
| claude-md-editor | **Sonnet** | Applying pre-specified edits. No creative decisions. |
| cross-reference-verifier | **Opus** | Must reason across 7 files simultaneously. Needs deep reading comprehension to catch subtle mismatches. |
| quality-auditor | **Opus** | Must evaluate against abstract quality criteria (recipe vs checklist, compositional intelligence transfer). Requires judgment that Sonnet may lack. |
| fix-executor | **Sonnet** | Applying targeted edits from explicit fix lists. No creative decisions. |
| validation-runner | **Opus** | Must orchestrate a multi-step pipeline, make real-time decisions about fix cycles, and evaluate holistic quality. |

**Cost estimate:** 4 Opus agents + 7 Sonnet agents. Opus: ~$20-30 total. Sonnet: ~$3-5 total. Total: ~$23-35.

---

## 10. What This Architecture Does NOT Include (and why)

1. **No separate TC planner agent.** Fat Core eliminates the planner-builder split. The builder plans AND builds. This is the single highest-leverage architectural change from the Flagship failure analysis.

2. **No tier routing.** ALWAYS FLAGSHIP. Every page gets maximum intensity. Eliminates ~542 lines of conditional logic and the associated failure modes.

3. **No inter-agent communication during build.** The builder works alone with reference files. This matches the pattern from CD-006 (Ceiling) and Middle (Middle 4/4) where single-agent builds outperformed multi-agent pipelines. Adding communication during the build introduces the compression/handoff failures seen in the Flagship experiment.

4. **No Playwright contention.** Screenshots are taken by the team lead AFTER the build completes. PA auditors read saved images. Zero concurrent Playwright sessions.

5. **No exploratory/divergent phase.** The /build-page pipeline assumes content is already selected. Exploration happens before /build-page is invoked.

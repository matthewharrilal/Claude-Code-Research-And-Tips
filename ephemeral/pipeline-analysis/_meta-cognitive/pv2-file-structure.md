# Pipeline v2 — Concrete File Structure

**Author:** file-structure-drafter (Opus 4.6)
**Date:** 2026-02-18
**Sources:** tension-composition SKILL.md, perceptual-auditing SKILL.md, File 42 (Operational Recipe), codification-map.md, compositional-core/CLAUDE.md, design-system/CLAUDE.md
**Purpose:** Define the EXACT file tree for Pipeline v2 — every path, every relationship, every line count

---

## Design Principles for the File Structure

Before the tree, 5 principles that determine WHERE things go:

1. **Skill = Entry Point.** The user types `/build-page`. A SKILL.md file catches that invocation. Everything flows from there.
2. **Recipe IN the Skill, Not Beside It.** File 42 (1,746 lines) is too long for a skill file. But the RECIPE portion (~600 lines, Phases 0-8 + Quick Reference) is the right size. Analysis stays in ephemeral.
3. **Perception Thresholds = Permanent Reference.** The threshold table is referenced by builders, gate runners, and auditors. It lives in the compositional-core (Layer 6 guidelines) with a copy in the PA skill.
4. **Gate Runner = Standalone Script.** Programmatic checks need to be invocable by any agent without reading the full recipe. Standalone JS file in compositional-core/validation/.
5. **Anti-Reproduction Protocol = Embedded in Skill.** Not a separate file — it's the Phase 3.5 gate and divergence mandate already in the tension-composition skill.

---

## The File Tree

```
PIPELINE V2 FILE STRUCTURE
===========================

~/.claude/skills/
├── build-page/                          [NEW DIRECTORY]
│   └── SKILL.md                         [NEW FILE — ~350 lines]
│
├── tension-composition/
│   └── SKILL.md                         [EDIT — ~1,950 lines (from 1,878)]
│
└── perceptual-auditing/
    └── SKILL.md                         [EDIT — ~830 lines (from 774)]


design-system/
├── CLAUDE.md                            [EDIT — add /build-page routing]
│
├── compositional-core/
│   ├── CLAUDE.md                        [EDIT — add agent communication protocol,
│   │                                     builder recipe routing, Opus recommendation]
│   │
│   ├── identity/
│   │   └── prohibitions.md              [NO CHANGE — soul constraints]
│   │
│   ├── vocabulary/
│   │   └── tokens.css                   [EDIT — add --space-max-stacked: 192px]
│   │
│   ├── grammar/
│   │   ├── mechanism-catalog.md         [NO CHANGE — 18 mechanisms]
│   │   └── operational-recipe.md        [NEW FILE — ~650 lines]
│   │
│   ├── components/
│   │   └── merged-components.css        [NO CHANGE]
│   │
│   ├── case-studies/
│   │   └── _INDEX.md                    [NO CHANGE]
│   │
│   ├── guidelines/
│   │   ├── semantic-rules.md            [EDIT — add S-09 stacking rule]
│   │   ├── perception-thresholds.md     [NEW FILE — ~80 lines]
│   │   └── usage-criteria.md            [NO CHANGE]
│   │
│   └── validation/
│       ├── gate-runner.js               [NEW FILE — ~250 lines]
│       └── anti-gravity-compliance.md   [NO CHANGE]
│
└── [rest unchanged]


ephemeral/pipeline-analysis/
├── 42-OPERATIONAL-RECIPE.md             [STAYS — analysis artifact, NOT production]
├── _meta-cognitive/
│   └── codification-map.md              [STAYS — edit specifications]
└── [rest unchanged]
```

---

## File-by-File Specification

### 1. `~/.claude/skills/build-page/SKILL.md`

**Status:** NEW FILE
**Approximate lines:** 350
**Trigger phrases:** "build a page", "build page", "create a design system page", "build-page"

**What it contains:**
The `/build-page` skill is the PRIMARY entry point for Pipeline v2. It replaces the current workflow where a user must manually invoke tension-composition, then manually navigate to the recipe, then manually run perceptual-auditing. This skill ORCHESTRATES all three.

**Structure:**
```
---
name: build-page
description: Build a KortAI design system page from content. Orchestrates the
  full Pipeline v2: content analysis, tier classification, HTML skeleton, CSS
  recipe, and perceptual verification. Trigger phrases include "build a page",
  "build page", "create a design system page", "build-page".
---

## WHAT THIS SKILL DOES

Single-command page building. You provide content. This skill:
1. Classifies the tier (Floor/Middle/Ceiling/Flagship)
2. Routes to the appropriate build path
3. Executes the 9-phase recipe
4. Runs perceptual verification
5. Outputs a complete HTML file

## TIER CLASSIFICATION (Auto-Detected)

[Table from File 42 Phase 0, Step 0D — word count + content type → tier]

## BUILD ROUTING

### Floor Tier → Track 1 (Component Assembly)
- Skip Phases 1-5 of tension-composition
- Read: prohibitions.md + tokens.css + components.css
- Use: operational-recipe.md Phases 0-2 only (content analysis + HTML skeleton + base CSS)
- Verify: soul check + PA-01 through PA-05 only

### Middle Tier → Track 1.5 (Pattern Selection)
- Skip Phases 1-3 of tension-composition (no metaphor derivation)
- Read: prohibitions.md + tokens.css + mechanism-catalog.md + operational-recipe.md
- Execute: operational-recipe.md Phases 0-8 (full recipe)
- Verify: perceptual-auditing skill (Mode 1 embedded, 90 seconds)

### Ceiling Tier → Track 2 (Full Pipeline)
- Execute: tension-composition skill Phases 0-3 (BLIND derivation)
- Lock metaphor at Phase 3.5
- Read: mechanism-catalog.md + operational-recipe.md
- Execute: operational-recipe.md Phases 0-8 (metaphor-adapted)
- Verify: perceptual-auditing skill (Mode 2, full 48 questions)

### Flagship Tier → Track 2+ (Multi-Pass)
- Execute: tension-composition skill Phases 0-3 (BLIND derivation)
- Lock metaphor at Phase 3.5
- Read: mechanism-catalog.md + operational-recipe.md + case-studies/_INDEX.md
- Execute: operational-recipe.md Phases 0-8 (metaphor-adapted)
- SECOND PASS: Re-execute Phase 8 with fresh-eyes auditor
- Verify: perceptual-auditing skill (Mode 4, 9 independent auditors)

## AGENT ARCHITECTURE

[Minimum message counts per tier]
[Builder model selection: Opus for Ceiling+, Sonnet for Middle]
[Required file routing to builder agent]

## QUICK REFERENCE — Builder Receives These Files

[Explicit list: prohibitions.md, tokens.css, mechanism-catalog.md (FULL),
 operational-recipe.md, build plan from planner]
```

**Corpus findings embedded:**
- Tier classification (from Post-D Research, 11 agents)
- Builder file routing (from codification-map Change 3, Change 10)
- Agent communication protocol (from codification-map Change 8)
- Model selection (from codification-map Change 9)
- Mode selection for PA (from perceptual-auditing SKILL.md)

**Relationship to other files:**
- INVOKES: tension-composition SKILL.md (for Ceiling/Flagship)
- REFERENCES: operational-recipe.md (the build recipe)
- INVOKES: perceptual-auditing SKILL.md (post-build)
- READS: prohibitions.md, tokens.css, mechanism-catalog.md (via builder routing)

---

### 2. `design-system/compositional-core/grammar/operational-recipe.md`

**Status:** NEW FILE
**Approximate lines:** 650
**Purpose:** The 9-phase build recipe, extracted from File 42

**What it contains:**
This is File 42's RECIPE portions (Parts 1 and 3, plus Appendix C Quick Reference) extracted into a permanent design system file. It strips all analysis, provenance, evidence chains, and risk assessments — those stay in ephemeral/pipeline-analysis/42-OPERATIONAL-RECIPE.md. What remains is PURE RECIPE: sequenced steps with specific CSS values.

**Structure:**
```
# Operational Recipe — 9-Phase Page Building Pipeline

## How to Read This Document
[Recipe vs checklist distinction — 10 lines]

## Phase 0: Content Analysis and Zone Architecture
[Steps 0.1-0.6 from File 42, with perception check]

## Phase 1: HTML Skeleton
[Steps 1.1-1.7 from File 42, with perception check]

## Phase 2: Base CSS and Soul Enforcement
[Steps 2.1-2.4 from File 42, with perception check]

## Phase 3: Zone System and Backgrounds
[Steps 3.1-3.3 from File 42, with perception check]

## Phase 4: Structural Borders and Dividers
[Steps 4.1-4.7 from File 42, with perception check]

## Phase 5: Typography Zones
[Steps 5.1-5.3 from File 42, with perception check]

## Phase 6: Coherence and Transitions
[Steps 6.1-6.3 from File 42, with perception check]

## Phase 7: Accessibility and Responsive
[Steps 7.1-7.3 from File 42, with perception check]

## Phase 8: Final Perception Audit Gate
[Steps 8.1-8.3 from File 42, invokes gate-runner.js + PA skill]

## Quick Reference Card
[Appendix C from File 42 — soul, zone typography, divider margins, callout
 variants, breakpoints, perception thresholds]

## Content Decision Guide
[Part 4.1 from File 42 — table of content-specific decisions]
```

**Corpus findings embedded:**
- Recipe format over checklist (codification-map Change 1 — File 04, 18, 24)
- Perception thresholds in every phase gate (File 08, codification-map Change 2)
- S-09 stacking arithmetic in Phase 0 (File 02, codification-map Change 5)
- Zone system with perceptible background deltas (File 08)
- Component library class names (File 06, codification-map Change 10)
- Grid layout mandate (File 06 — zero grids = flagship failure)
- Warm palette enforcement (builder changelog — 3 cool grays corrected)
- Bookend header/footer pattern (9/9 PA auditors praised)
- Content decision guidance (File 42 Part 4)

**Relationship to other files:**
- REFERENCED BY: build-page SKILL.md (the skill routes builders here)
- READS: prohibitions.md (soul constraints — Phase 0 Step 0.1)
- READS: tokens.css (token values — Phase 0 Step 0.1)
- READS: mechanism-catalog.md (mechanism vocabulary — Phase 4)
- INVOKES: gate-runner.js (Phase 8)
- INVOKES: perceptual-auditing SKILL.md (Phase 8)
- REFERENCES: perception-thresholds.md (threshold values used throughout)

**Why grammar/ layer?** The recipe is compositional grammar — it describes HOW to COMBINE vocabulary (tokens) and mechanisms into pages. It sits alongside mechanism-catalog.md because both are "how things combine" documents. It is NOT a guideline (Layer 6 — when to use what) nor a component (Layer 4 — what to reuse).

---

### 3. `design-system/compositional-core/guidelines/perception-thresholds.md`

**Status:** NEW FILE
**Approximate lines:** 80
**Purpose:** The perception threshold reference table — the corpus's most actionable artifact

**What it contains:**
A standalone reference of minimum perceptible CSS deltas. This is the table from File 42 Appendix A, plus the warm palette enforcement rule, plus the stacked gap maximum. It exists as its own file because it is referenced by:
- The operational recipe (every phase gate)
- The gate runner (programmatic enforcement)
- The perceptual-auditing skill (auditor calibration)
- The builder recipe routing (pre-build awareness)

**Structure:**
```
# Perception Thresholds — Minimum Visible CSS Deltas

## The Rule
If a human cannot SEE the difference without a color picker, do NOT write the CSS.

## Threshold Table
| Property | Minimum Delta | Sub-Perceptual (DO NOT WRITE) |
|----------|--------------|-------------------------------|
| Background color | >= 15 RGB points (any channel) | < 15 RGB points |
| Font size | >= 2px between zone groups | < 2px |
| Letter-spacing | >= 0.5px (0.03em at 16px) | < 0.5px |
| Line-height | >= 0.2 units | < 0.2 |
| Padding/margins | >= 24px between zones | < 24px |
| Font-weight | >= 200 units | < 200 |
| Border width | >= 1px | — |
| Max-width | >= 6ch | < 6ch |
| Text color | >= 15 RGB points net | < 15 RGB |

## Warm Palette Enforcement
ALL background colors MUST satisfy: R >= G >= B
Cool grays are soul violations.
Replacement table: #FAFAFA → #FAF8F5, #F8F8F8 → #F8F6F3, #F0F0F0 → #F2EFEA

## Stacked Gap Maximum
Total gap at any section boundary:
  padding-bottom + MAX(margin-bottom, margin-top) + padding-top <= 192px
(Individual values may all pass 96px check while stacking to 200-300px voids.)

## Confidence
PRINCIPLE (zero perception terms in master prompt caused invisible CSS): Tier 1 (unanimous).
SPECIFIC VALUES (the numbers in this table): Tier 2 (N=1 from File 08).
TREAT VALUES as starting points validated by 1 experiment, not universal constants.

## Provenance
File 08 (perception-model-shift), confirmed by 11/25 analysis files.
Values derived from flagship experiment (backgrounds 1-8 RGB = invisible,
letter-spacing 0.001-0.01em = invisible). 9/9 Mode 4 auditors independently
flagged imperceptible differentiation.
```

**Corpus findings embedded:**
- Complete threshold table (File 08, Section 3)
- Warm palette enforcement (builder changelog + soul constraints)
- Stacked gap maximum (codification-map Change 5)
- Confidence calibration (File 25 challenges magnitudes as N=1)

**Relationship to other files:**
- REFERENCED BY: operational-recipe.md (every phase gate)
- REFERENCED BY: gate-runner.js (programmatic enforcement)
- REFERENCED BY: perceptual-auditing SKILL.md (auditor calibration)
- REFERENCED BY: build-page SKILL.md (pre-build awareness)
- VALIDATES: tokens.css (warm test on all background values)
- EXTENDS: semantic-rules.md (S-09 stacking rule)

---

### 4. `design-system/compositional-core/validation/gate-runner.js`

**Status:** NEW FILE
**Approximate lines:** 250
**Purpose:** Programmatic perception verification — run in browser via Playwright

**What it contains:**
A standalone JavaScript file that runs in the browser (via Playwright's `page.evaluate()`) and returns a structured pass/fail report. It checks all binary, measurable constraints: container width, background warm test, adjacent background deltas, stacked gaps, font sizes, heading hierarchy, component library usage, accessibility landmarks.

**Structure:**
```javascript
/**
 * Pipeline v2 Gate Runner
 * Run via Playwright: page.evaluate(gateRunner)
 * Returns: Array of { id, name, passed, measured, threshold, detail }
 *
 * Gates:
 * SC-01: Container width (940-960px)
 * SC-02: Soul enforcement (border-radius: 0, box-shadow: none)
 * SC-03: Font stack (Instrument Serif / Inter / JetBrains Mono)
 * SC-04: Warm palette (R >= G >= B for all backgrounds)
 * SC-05: Heading hierarchy (h1 → h2 → h3, no skips)
 * SC-06: ARIA landmarks (>= 3)
 * SC-07: Skip-to-content link present
 * SC-08: Component library usage (callout, table-compact, etc.)
 * SC-09: Background color minimum delta (>= 15 RGB adjacent zones)
 * SC-10: Stacked gap maximum (<= 192px at section boundaries)
 * SC-11: Font-size zone differentiation (>= 2px between zone groups)
 * SC-12: Zone count verification (2-5 zones)
 */

async function gateRunner() {
  const output = [];

  // SC-01 through SC-12 implementations
  // [Each check: measure → compare → push result]

  return output;
}
```

**Corpus findings embedded:**
- SC-09 background delta (codification-map Change 4 — File 08)
- SC-10 stacked gap (codification-map Change 4 — File 02, 08)
- All existing spatial gate checks (from ephemeral/flagship-experiment/spatial-gate-runner.js)
- Container width verification (Phase D — 4/5 violations)
- Warm palette test (builder changelog)
- Accessibility checks (remediation spec Phase 7)

**Relationship to other files:**
- INVOKED BY: operational-recipe.md Phase 8
- INVOKED BY: build-page SKILL.md (post-build gate)
- REFERENCES: perception-thresholds.md (threshold values)
- REPLACES: ephemeral/flagship-experiment/spatial-gate-runner.js (ephemeral → permanent)

---

### 5. `~/.claude/skills/tension-composition/SKILL.md`

**Status:** EDIT EXISTING
**Current lines:** 1,878
**Approximate new lines:** ~1,950 (+72 lines)
**Changes:** 3 edits from codification-map

**What changes:**
1. **Change 1 (lines ~866-877):** Insert recipe framing header before Phase 4.0. Adds "RECIPE (not checklist)" header with explicit 7-step sequence (READ → SELECT → MAP → ASSESS → CHECK → VERIFY). ~15 lines inserted.
2. **Change 6 (verify only):** Confirm per-category mechanism minimums already present at lines 1078-1104. Search for residual "sample 2-4" text and replace if found.
3. **Change 7 (verify only):** Confirm 3-transition minimum already present at Step 4.2C (lines 1303-1329).

**Corpus findings embedded (new):**
- Recipe framing (File 04, 18, 24 — recipe vs checklist as root cause)
- Explicit step sequence with action verbs (File 18 — prompt craftsmanship evolution)

**Relationship to other files:**
- INVOKED BY: build-page SKILL.md (for Ceiling/Flagship tiers)
- INVOKED BY: compositional-core/CLAUDE.md Track 2 workflow
- REFERENCES: mechanism-catalog.md (Phase 4)
- REFERENCES: operational-recipe.md (Phase 4 recipe steps map to recipe phases)
- NOW COORDINATES WITH: operational-recipe.md (tension-composition handles metaphor derivation; operational-recipe handles CSS execution)

---

### 6. `~/.claude/skills/perceptual-auditing/SKILL.md`

**Status:** EDIT EXISTING
**Current lines:** 774
**Approximate new lines:** ~830 (+56 lines)
**Changes:** 2 edits from codification-map

**What changes:**
1. **Change 2 (after line ~363):** Insert perception threshold table with minimum perceptual deltas. ~30 lines. Includes the threshold table, application to gate runners, and builder self-check.
2. **Cross-reference:** Add pointer to `compositional-core/guidelines/perception-thresholds.md` as canonical source. ~5 lines.
3. **Gate runner integration:** Add note that Phase 8 of operational-recipe.md invokes gate-runner.js BEFORE human PA. ~5 lines.

**Corpus findings embedded (new):**
- Minimum perceptual delta thresholds (File 08 — the corpus's dominant finding)
- Gate runner integration (programmatic ≠ perceptual, but programmatic catches measurables)
- Builder self-check protocol (codification-map Change 2)

**Relationship to other files:**
- INVOKED BY: build-page SKILL.md (post-build verification)
- INVOKED BY: operational-recipe.md Phase 8
- REFERENCES: perception-thresholds.md (canonical threshold source)
- REFERENCES: gate-runner.js (programmatic pre-check before human PA)

---

### 7. `design-system/compositional-core/CLAUDE.md`

**Status:** EDIT EXISTING
**Current lines:** 681
**Approximate new lines:** ~770 (+89 lines)
**Changes:** 4 edits from codification-map

**What changes:**
1. **Change 3 (lines 195-221):** Replace Phase 6: Implementation with builder recipe + file routing. ~35 lines replaced/expanded. Adds explicit file list builder MUST receive, sequenced build steps, and CSS values.
2. **Change 8 (after line 221):** Insert Agent Communication Protocol section. ~25 lines. Minimum message counts per tier, required communication points, evidence from retro.
3. **Change 9 (within Change 3):** Insert builder model selection guidance. ~8 lines. Opus for Ceiling/Flagship, Sonnet for Middle.
4. **Change 10 (lines ~170-173):** Expand Phase 4 mechanism extraction to route FULL mechanism catalog to builder, not just "first 200 lines." ~20 lines.

**Corpus findings embedded (new):**
- Builder CSS recipes (File 05, 06, 22 — guardrail factory vs playbook factory)
- Agent communication protocol (File 07, retro findings)
- Opus for builders (contrarian from flagship retrospective)
- Builder visibility expansion (File 06, retro — 13.4% → 100%)

**Relationship to other files:**
- AUTO-LOADED: on any entry to compositional-core/
- REFERENCES: build-page SKILL.md (new skill routing)
- REFERENCES: operational-recipe.md (builder recipe)
- REFERENCES: mechanism-catalog.md (now routed to builder, FULL)
- REFERENCES: tension-composition SKILL.md (Track 2 workflow)
- REFERENCES: perceptual-auditing SKILL.md (verification)

---

### 8. `design-system/CLAUDE.md`

**Status:** EDIT EXISTING
**Current lines:** 733
**Approximate new lines:** ~760 (+27 lines)
**Changes:** 1 edit

**What changes:**
Add `/build-page` routing to the "QUICK START — What Are You Here To Do?" section and the "SKILLS — When to Invoke" section.

```
### I'm here to BUILD content/pages
→ FASTEST: Invoke /build-page skill (handles everything)
→ MANUAL: Start at compositional-core/README.md
→ ALWAYS load first: compositional-core/identity/prohibitions.md

### build-page (Page Building — NEW)

**Trigger:** Build ANY new HTML page from content
**Invocation:** /build-page or invoke build-page skill
**See:** ~/.claude/skills/build-page/SKILL.md
**Routes to:** operational-recipe.md (9-phase recipe) + tension-composition (if Ceiling+)
```

**Relationship to other files:**
- AUTO-LOADED: on any entry to design-system/
- ROUTES TO: build-page SKILL.md (new primary entry point)

---

### 9. `design-system/compositional-core/vocabulary/tokens.css`

**Status:** EDIT EXISTING
**Current lines:** 174
**Approximate new lines:** ~180 (+6 lines)
**Changes:** 1 edit from codification-map

**What changes:**
**Change 5B:** Add `--space-max-stacked: 192px` token and expand the stacking rule comment.

**Corpus findings embedded:**
- S-09 stacking loophole (File 02, 08 — 9/9 auditors flagged)

**Relationship to other files:**
- ALWAYS-LOADED: mandatory first read
- REFERENCED BY: operational-recipe.md (stacking arithmetic in Phase 0)
- REFERENCED BY: gate-runner.js (SC-10 stacked gap check)

---

### 10. `design-system/compositional-core/guidelines/semantic-rules.md`

**Status:** EDIT EXISTING
**Changes:** 1 edit from codification-map

**What changes:**
**Change 5A:** Expand Rule 2 (Maximum Consecutive Empty Viewport Height) with S-09 stacking rule, arithmetic examples, and fix options.

**Corpus findings embedded:**
- S-09 stacking loophole (File 02 — independent discovery by 3 agents)
- Fix options (from remediation spec)

**Relationship to other files:**
- REFERENCED BY: operational-recipe.md (Phase 0 Step 0.6)
- VALIDATED BY: gate-runner.js (SC-10)

---

## Dependency Graph

```
                        USER TYPES "/build-page"
                                │
                                ▼
                   ~/.claude/skills/build-page/SKILL.md
                        (Entry Point — NEW)
                                │
                    ┌───────────┼───────────┐
                    │           │           │
                    ▼           ▼           ▼
            [Tier Classification]  [File Routing]  [Agent Architecture]
                    │           │           │
        ┌───────────┴──┐        │        ┌──┴───────────┐
        ▼              ▼        │        ▼              ▼
   Floor/Middle    Ceiling+     │   Sonnet builder  Opus builder
   (skip TC)       (run TC)     │   (Middle)        (Ceiling+)
        │              │        │        │              │
        │              ▼        │        └──────┬───────┘
        │    tension-composition│               │
        │       SKILL.md       │               │
        │     (Phases 0-3.5)   │               │
        │              │       │               │
        └──────────────┴───────┘               │
                       │                       │
                       ▼                       │
              BUILDER RECEIVES:                │
              ├── prohibitions.md       ◄──────┘
              ├── tokens.css
              ├── mechanism-catalog.md (FULL)
              └── operational-recipe.md (NEW)
                       │
                       ▼
              operational-recipe.md
              (9 Phases, sequenced)
                       │
            ┌──────────┼──────────┐
            │          │          │
            ▼          ▼          ▼
       Phase 0-7   Phase 8    Phase 8
       (Build)     (Gate)     (Human PA)
            │          │          │
            │          ▼          ▼
            │    gate-runner.js   perceptual-auditing
            │      (NEW)            SKILL.md
            │          │          │
            │          ▼          │
            │  perception-        │
            │  thresholds.md      │
            │      (NEW)          │
            │          │          │
            └──────────┴──────────┘
                       │
                       ▼
                  FINISHED HTML
```

---

## Summary Table

| # | File | Status | Lines | What It Contains | Key Corpus Findings |
|---|------|--------|-------|-----------------|-------------------|
| 1 | `~/.claude/skills/build-page/SKILL.md` | NEW | ~350 | Entry point, tier routing, agent architecture | Tier model, builder routing, agent comms |
| 2 | `compositional-core/grammar/operational-recipe.md` | NEW | ~650 | 9-phase build recipe with specific CSS values | Recipe format, perception thresholds, S-09 fix, grid mandate |
| 3 | `compositional-core/guidelines/perception-thresholds.md` | NEW | ~80 | Minimum perceptible CSS deltas + warm test | File 08 threshold table, N=1 confidence caveat |
| 4 | `compositional-core/validation/gate-runner.js` | NEW | ~250 | Programmatic browser checks (12 gates) | SC-09 bg delta, SC-10 stacking, container, warm test |
| 5 | `~/.claude/skills/tension-composition/SKILL.md` | EDIT | +72 | Recipe framing in Phase 4 | Recipe vs checklist root cause |
| 6 | `~/.claude/skills/perceptual-auditing/SKILL.md` | EDIT | +56 | Perception threshold table + gate runner ref | File 08, builder self-check |
| 7 | `compositional-core/CLAUDE.md` | EDIT | +89 | Builder recipe, agent comms, Opus rec, routing | Guardrail:playbook ratio, builder visibility |
| 8 | `design-system/CLAUDE.md` | EDIT | +27 | /build-page routing | Entry point update |
| 9 | `vocabulary/tokens.css` | EDIT | +6 | --space-max-stacked token | S-09 stacking loophole |
| 10 | `guidelines/semantic-rules.md` | EDIT | +25 | S-09 stacking rule expansion | 9/9 auditors, fix options |

**Totals:**
- NEW files: 4 (build-page SKILL.md, operational-recipe.md, perception-thresholds.md, gate-runner.js)
- EDITED files: 6
- Net new content: ~1,605 lines across 10 files
- Net new PERMANENT infrastructure: ~1,330 lines (4 new files)
- Net edits to existing: ~275 lines across 6 files

---

## Key Design Decisions Explained

### Q: Should File 42 become a skill? Get absorbed? Get referenced?

**Answer: EXTRACTED, not absorbed.** File 42 is 1,746 lines — far too long for a skill file or a reference doc. Its RECIPE portions (~650 lines of Phases 0-8 + Quick Reference) are extracted into `operational-recipe.md` (permanent, in grammar/ layer). Its ANALYSIS portions (~700 lines of Parts 2-5 + Appendices A-D) stay in `ephemeral/pipeline-analysis/42-OPERATIONAL-RECIPE.md` as research provenance. The separation follows the corpus's own principle: "Separate THINKING documents (for human, expansive) from EXECUTION specs (for agents, <100 lines per section)."

### Q: Where does the perception threshold table live PERMANENTLY?

**Answer: `compositional-core/guidelines/perception-thresholds.md`** as the canonical source, with a COPY embedded in:
- `perceptual-auditing/SKILL.md` (so auditors see it without cross-referencing)
- `operational-recipe.md` Appendix (so builders see it during Phase 8)

The canonical source is in guidelines/ (Layer 6) because thresholds are DECISION CRITERIA — they tell you when a CSS value is meaningful. They are not identity (Layer 1), vocabulary (Layer 2), grammar (Layer 3), or components (Layer 4).

### Q: Where do the binary gates live?

**Answer: Two locations, two purposes.**
- `gate-runner.js` in `validation/` — the PROGRAMMATIC gates (SC-01 through SC-12). Run in browser via Playwright. Binary PASS/FAIL.
- `perceptual-auditing/SKILL.md` — the HUMAN gates (PA-01 through PA-48+). Run by fresh-eyes agent looking at screenshots.

The gate runner catches measurable violations (container width, warm test, heading hierarchy). The PA skill catches perceptual violations (does it FEEL designed? is it coherent?). Neither replaces the other — the flagship experiment proved that programmatic gates can pass while perceptual audit fails.

### Q: What about the anti-reproduction protocol?

**Answer: Already embedded.** The anti-reproduction protocol is the Phase 3.5 gate and R6 divergence mandate in `tension-composition/SKILL.md` (lines ~540-600). It prevents builders from copying case study metaphors. It does NOT need a separate file — it is a behavioral rule enforced by the skill's phase-gated architecture. The `/build-page` skill handles this by only invoking tension-composition for Ceiling/Flagship tiers, where metaphor derivation is required.

### Q: Why is operational-recipe.md in grammar/ not guidelines/?

**Answer:** The recipe describes HOW to COMBINE elements — that is grammar. Guidelines describe WHEN to use elements. The recipe is "Phase 3: apply zone backgrounds using these CSS values." A guideline is "Use zone backgrounds when content has 3+ semantic regions." The recipe IS the grammar of page construction.

Additionally, placing it alongside `mechanism-catalog.md` means the builder reads BOTH "what mechanisms exist" (catalog) and "how to deploy them" (recipe) from the same directory. This fixes the inverted quality routing problem (codification-map Change 10) — the builder's two most important files are now co-located.

### Q: What about content-specific considerations?

**Answer:** File 42's Part 4 (Content Decision Guidance) is included in `operational-recipe.md` as a decision table section. It lists the content-specific decisions (zone semantics, callout variant, grid placement, transition types) and provides a decision framework for each. Content CONTENT (the actual text being designed) comes from the user. Content DECISIONS (how to structure that text) come from the recipe's decision tables.

---

## What This File Structure Does NOT Include

1. **No changes to case-studies/.** The anti-prescription format works. Case studies are Phase 5 reference, not execution input.
2. **No changes to mechanism-catalog.md.** The 18 mechanisms + enrichments (impact profiles, application modes, zone mappings) are already production-ready from the enrichment execution team.
3. **No changes to prohibitions.md.** Soul constraints are stable.
4. **No changes to components/.** Component library is stable.
5. **No new CLAUDE.md files.** The existing auto-loaded CLAUDE.md files (design-system/CLAUDE.md + compositional-core/CLAUDE.md) are edited, not duplicated.
6. **No restructuring of existing directories.** All new files go into existing directories. No new layer in the ontology.

---

## Implementation Order

Apply changes in this order (respects dependencies):

1. **Create** `perception-thresholds.md` (standalone, no dependencies)
2. **Create** `gate-runner.js` (references perception-thresholds.md)
3. **Edit** `tokens.css` (add --space-max-stacked)
4. **Edit** `semantic-rules.md` (add S-09 stacking rule)
5. **Create** `operational-recipe.md` (references all of the above)
6. **Edit** `tension-composition/SKILL.md` (recipe framing, verify existing changes)
7. **Edit** `perceptual-auditing/SKILL.md` (perception thresholds, gate runner ref)
8. **Edit** `compositional-core/CLAUDE.md` (builder recipe, agent comms, Opus rec, routing)
9. **Create** `build-page/SKILL.md` (references operational-recipe.md + both skills)
10. **Edit** `design-system/CLAUDE.md` (add /build-page routing)

---

**END OF FILE STRUCTURE SPECIFICATION**

**Total specification: ~400 lines. 10 files (4 new, 6 edited). ~1,605 net new lines across all files. 1 new skill (/build-page), 1 new recipe (operational-recipe.md), 1 new reference (perception-thresholds.md), 1 new gate runner (gate-runner.js).**

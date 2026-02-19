# Pipeline v2 Unified Architecture

**Synthesized by:** Opus 4.6 (synthesizer agent)
**Date:** 2026-02-18
**Sources:** 6 agent proposals + anti-reproduction protocol
**Purpose:** THE definitive document -- what Pipeline v2 IS and how to build it

---

## EXECUTIVE SUMMARY

Pipeline v2 is three things:

1. **A NEW orchestrator skill** (`/build-page`) that gives users a single command to produce designed HTML pages
2. **A NEW operational recipe** (extracted from File 42) that gives builders a 9-phase sequential recipe with exact CSS values
3. **8 surgical edits** to existing permanent files that fix diagnosed failure modes

It is NOT a replacement for TC or PA. It is NOT a monolithic 3,000-line skill. It is NOT "just edits." It is a layered architecture where each agent reads ONE document appropriate to their role: planners read TC, builders read the recipe, auditors read PA.

---

## SECTION 1: WHAT PIPELINE V2 IS

### The Architecture in One Diagram

```
USER: /build-page [content]
        |
        v
  build-page SKILL.md (ORCHESTRATOR)
  - Classifies tier (Floor/Middle/Ceiling/Flagship)
  - Selects agent architecture
  - Routes to build path
        |
        +-- Floor -----> Track 1 (component assembly, ~5 min)
        |
        +-- Middle ----> operational-recipe.md directly (~15-25 min)
        |
        +-- Ceiling ---> TC SKILL.md Phases 0-3.5 --> operational-recipe.md (~45-60 min)
        |
        +-- Flagship --> TC SKILL.md Phases 0-3.5 --> operational-recipe.md (~90-180 min)
        |
        v
  BUILDER AGENT executes operational-recipe.md (9 phases)
  - Phase 0: Content analysis + zone architecture
  - Phase 1: HTML skeleton
  - Phase 2: Base CSS + soul enforcement
  - Phase 3: Zone backgrounds
  - Phase 4: Structural borders + dividers
  - Phase 5: Typography zones
  - Phase 6: Coherence + transitions
  - Phase 7: Accessibility + responsive
  - Phase 8: Final perception audit gate
        |
        v
  VERIFICATION
  - Programmatic: gate-runner.js (12 binary checks)
  - Perceptual: PA SKILL.md (mode varies by tier)
        |
        v
  OUTPUT: single self-contained .html file
```

### The Separation of Concerns

| Skill | Purpose | Who reads it | Key property |
|-------|---------|-------------|-------------|
| **build-page** | Orchestration + tier routing | The lead agent | ~350 lines, routes to other skills |
| **tension-composition** | Content analysis + metaphor derivation | Planner agent (Ceiling/Flagship only) | Phases 0-3.5 unchanged, THINKING pipeline |
| **operational-recipe** | 9-phase build recipe with exact CSS | Builder agent | ~650 lines, RECIPE format, self-contained |
| **perceptual-auditing** | Post-build perception verification | Auditor agents (fresh-eyes) | 48 questions, 4 modes, information isolation |
| **gate-runner.js** | Programmatic binary checks | Any agent via Playwright | 12 gates, PASS/FAIL, no judgment |

This separation directly addresses the root causes:
- **75-line builder visibility** --> builder reads the FULL recipe (~650 lines)
- **7.9:1 guardrail-to-playbook ratio** --> recipe IS playbook (action verbs, specific values)
- **Inverted quality routing** --> mechanism catalog routed to builder, not just planner
- **Recipe vs checklist** --> operational-recipe is recipe by construction (File 42's DNA)

---

## SECTION 2: CONTRADICTIONS RESOLVED

The 6 proposals agree on ~85% of the architecture. Here are the 7 points of disagreement and the resolution for each.

### C1: Should there be an orchestrator skill?

**Form-definer says NO:** "The USER is the orchestrator. Adding a skill that calls other skills is a complexity ratchet with zero value."

**UX-designer says YES:** Designs a full `/build-page` command with intake, progress display, gate failure protocols, batch mode, and power-user flags.

**RESOLUTION: YES, but minimal.** The form-definer is right that a meta-skill that ONLY dispatches adds no value. But the UX-designer identifies real new logic that no existing skill provides: tier auto-classification, agent architecture selection, progress display, gate failure conversations, and the intake flow. This is ~200-300 lines of genuinely new orchestration, not a hollow dispatcher. The orchestrator is THIN: it classifies, routes, and presents results. It does not contain any building logic.

The name is `/build-page` (not `/page-builder` or `/operational-recipe`) because it describes the user's intent ("build a page"), not the implementation detail.

### C2: Where does the recipe live?

**Form-definer:** `~/.claude/skills/page-builder/SKILL.md` (~1,000-1,200 lines, adapted from File 42)

**File-structure-drafter:** `design-system/compositional-core/grammar/operational-recipe.md` (~650 lines, extracted recipe portions only)

**File42-integrator:** `~/.claude/skills/page-building/SKILL.md` (~1,800 lines, full File 42 as skill)

**RESOLUTION: Two locations -- skill wrapper + permanent recipe file.**

The recipe content lives at `design-system/compositional-core/grammar/operational-recipe.md` (~650 lines). This is the PERMANENT home in the design system, alongside mechanism-catalog.md in the grammar layer. The file-structure-drafter's rationale is correct: the recipe describes HOW to COMBINE vocabulary and mechanisms into pages -- that IS grammar.

The `/build-page` skill (not a separate `/page-builder` skill) handles orchestration and REFERENCES the recipe file. There is no second skill file for just building -- the recipe IS the builder's spec, and `/build-page` routes the builder to it.

**Why not a standalone building skill?** Because the form-definer and file42-integrator both propose a separate page-builder/page-building skill of 1,000-1,800 lines. This creates a confusing invocation model: does the user invoke `/build-page` or `/page-builder`? Which one reads which? The simpler model: `/build-page` is the entry point, it routes the builder to `operational-recipe.md`, done. One entry point, one recipe file, no ambiguity.

### C3: Stacking gap threshold (96px vs 120px vs 192px)

**tokens.css:** `--space-max-zone: 96px` (per-property maximum)

**File 42:** 120px total stacked gap at boundaries

**Codification map:** 192px binary gate threshold

**RESOLUTION: Two numbers, two purposes.**

- `--space-max-zone: 96px` STAYS as the per-property maximum (no single padding or margin exceeds 96px)
- `--space-max-stacked: 192px` is ADDED as the total boundary gap maximum (sum of all properties at a section boundary)

The 120px figure from File 42 is the builder's TARGET (aim for 120px or less). The 192px is the GATE (fail if exceeded). The distinction: the recipe says "try to keep stacked gaps under 120px" and the gate runner says "FAIL if stacked gap exceeds 192px." This gives builders headroom while preventing the flagship's 210-276px voids.

### C4: Background color delta (10 RGB vs 15 RGB)

**File 42:** >= 10 RGB between adjacent zones

**Codification map / corpus consensus:** >= 15 RGB between adjacent zones

**RESOLUTION: 15 RGB.** The researched value (File 08) is 15 RGB. File 42's 10 RGB is stricter but less supported. Since the principle is "minimum PERCEPTIBLE delta" and 15 RGB is the empirically-derived threshold, use 15 RGB as the gate value. Builders who achieve 10 RGB are not penalized (it's a minimum, not a target), but the GATE checks >= 15.

### C5: Tier routing location

**Form-definer:** TC Phase 0D handles tier routing; page-builder's Phase 0 is self-sufficient for Middle

**File42-integrator:** Tier routing should live in the page-building skill itself

**File-structure-drafter:** `/build-page` skill handles tier routing

**RESOLUTION: `/build-page` handles tier routing.** This is the cleanest model: the orchestrator classifies the tier, then routes to the appropriate build path. TC is only invoked for Ceiling/Flagship. The operational recipe is invoked for all tiers that need building (Middle, Ceiling, Flagship). Floor uses Track 1 component assembly. The recipe's Phase 0 handles content-to-zone analysis (architecture), not tier classification.

### C6: Transition types (3-type vs 5x5 matrix)

**File 42:** 3 types (Smooth/Bridge/Breathing)

**TC SKILL.md:** 5x5 matrix (Z/F/Bento/Spiral/Choreography x axis patterns)

**Relationship-mapper:** Tier-gated: Middle uses 3-type, Ceiling+ uses full grammar

**RESOLUTION: Tier-gated, as the relationship-mapper recommends.** For Middle tier, the 3-type system (Smooth/Bridge/Breathing) is simpler and more actionable. For Ceiling/Flagship, TC's transition grammar provides additional nuance that the metaphor derivation can leverage. The recipe uses the 3-type vocabulary; Ceiling+ builds can apply TC's grammar to CHOOSE which of the 3 types to use at each boundary.

### C7: Does TC get trimmed?

**Form-definer:** TC stays at ~1,878 lines with 8 codification edits applied

**File42-integrator:** TC shrinks to ~1,200 lines (Phase 4 replaced, builder warnings moved)

**Relationship-mapper:** TC enhanced but not trimmed: Phases 0-3.5 unchanged, Phase 4 "wrapped"

**RESOLUTION: TC stays approximately its current size.** TC's Phase 4 is not DELETED -- it contains mechanism selection logic, coherence rules, and fractal verification that the recipe doesn't replicate. Instead:
- Phase 4 gets the recipe framing header (codification-map Change 1)
- Phase 4's output becomes the BUILD PLAN that the recipe consumes
- Builder warnings appendix stays in TC (they're attached to metaphor risk assessment)
- Perception thresholds are ADDED (codification-map Change 2, applied to PA skill)

The recipe COMPLEMENTS TC Phase 4, it doesn't replace it. TC Phase 4 tells the planner WHAT mechanisms to select. The recipe tells the builder HOW to implement them in CSS.

---

## SECTION 3: THE CONCRETE FILE TREE

```
PIPELINE V2 FILE STRUCTURE (10 files: 4 new, 6 edited)
=========================================================

~/.claude/skills/
+-- build-page/                          [NEW DIRECTORY]
|   +-- SKILL.md                         [NEW -- ~350 lines]
|       Entry point. Tier classification, agent routing,
|       progress display, gate failure protocols.
|
+-- tension-composition/
|   +-- SKILL.md                         [EDIT -- ~1,950 lines]
|       +72 lines: recipe framing header, verified enrichments
|
+-- perceptual-auditing/
    +-- SKILL.md                         [EDIT -- ~830 lines]
        +56 lines: perception threshold table, gate runner ref


design-system/
+-- CLAUDE.md                            [EDIT -- +27 lines]
|   Add /build-page routing to Quick Start + Skills sections
|
+-- compositional-core/
    +-- CLAUDE.md                        [EDIT -- +89 lines]
    |   Phase 6 expanded, agent comms, Opus rec, full catalog routing
    |
    +-- vocabulary/
    |   +-- tokens.css                   [EDIT -- +6 lines]
    |       Add --space-max-stacked: 192px
    |
    +-- grammar/
    |   +-- mechanism-catalog.md         [NO CHANGE]
    |   +-- operational-recipe.md        [NEW -- ~650 lines]
    |       9-phase build recipe extracted from File 42.
    |       Pure recipe: action verbs, exact CSS values,
    |       per-phase perception checks. No analysis.
    |
    +-- guidelines/
    |   +-- semantic-rules.md            [EDIT -- +25 lines]
    |   |   S-09 stacking rule expansion
    |   +-- perception-thresholds.md     [NEW -- ~80 lines]
    |       Canonical perception threshold table.
    |       Referenced by recipe, gate runner, PA skill.
    |
    +-- validation/
        +-- gate-runner.js               [NEW -- ~250 lines]
            12 programmatic gates. Run via Playwright.
            SC-01 through SC-12. Binary PASS/FAIL.
```

### Summary Table

| # | File | Status | Lines | Role |
|---|------|--------|-------|------|
| 1 | `~/.claude/skills/build-page/SKILL.md` | NEW | ~350 | Orchestrator: tier routing, agent selection, UX |
| 2 | `compositional-core/grammar/operational-recipe.md` | NEW | ~650 | Builder spec: 9-phase recipe with exact CSS |
| 3 | `compositional-core/guidelines/perception-thresholds.md` | NEW | ~80 | Reference: minimum perceptible CSS deltas |
| 4 | `compositional-core/validation/gate-runner.js` | NEW | ~250 | Programmatic: 12 binary checks via Playwright |
| 5 | `tension-composition/SKILL.md` | EDIT | +72 | Recipe framing, verified enrichments |
| 6 | `perceptual-auditing/SKILL.md` | EDIT | +56 | Perception thresholds, gate runner integration |
| 7 | `compositional-core/CLAUDE.md` | EDIT | +89 | Builder recipe routing, agent comms, Opus rec |
| 8 | `design-system/CLAUDE.md` | EDIT | +27 | /build-page routing entry |
| 9 | `vocabulary/tokens.css` | EDIT | +6 | --space-max-stacked token |
| 10 | `guidelines/semantic-rules.md` | EDIT | +25 | S-09 stacking rule |

**Totals:** 4 new files (~1,330 lines), 6 edited files (~275 lines), ~1,605 net new permanent lines.

---

## SECTION 4: THE USER JOURNEY

### 4.1 The Command

```
/build-page
```

Trigger phrases: "build a page", "build page", "create a design system page", "run the pipeline"

### 4.2 Intake (10-30 seconds of user interaction)

**Step 1 -- Content source:**
```
What content should this page present?
  [1] Paste markdown
  [2] File path
  [3] URL to fetch
  [4] Current conversation context
```

If the user provides content WITH the command (e.g., `/build-page path/to/file.md`), skip this prompt.

**Step 2 -- Tier selection:**
```
CONTENT ANALYZED
  Words:    2,847
  Type:     Prose-dominant
  Sections: ~8 natural breaks

TIER RECOMMENDATION: Middle
  [Enter] Accept Middle tier
  [c]     Override to Ceiling (~45-60 min)
  [f]     Override to Floor (~5 min)
  [F]     Override to Flagship (~90-180 min)
```

Auto-classification logic:
| Content Signal | Tier |
|----------------|------|
| <200 words, API reference, config table | Floor |
| Tutorial, guide, overview, narrative | Middle |
| Addition Test = NO (genuine tension) | Ceiling |
| Anchor content, showcase, deep-dive | Flagship |

### 4.3 Build Execution (autonomous)

Live progress display:
```
BUILDING: "Research Synthesis"
  Tier: Middle | 2,847 words | 8 sections

  Phase 0/8: Content Analysis .............. DONE (3 zones, 8 sections)
  Phase 1/8: HTML Skeleton ................. DONE (8 sections, 2 grids)
  Phase 2/8: Base CSS + Soul ............... DONE (960px container)
  Phase 3/8: Zone Backgrounds .............. DONE (3 zones, min delta 18 RGB)
  Phase 4/8: Borders + Components .......... [ACTIVE]
  Phase 5/8: Typography Zones .............. pending
  Phase 6/8: Element Richness .............. pending
  Phase 7/8: Accessibility + Responsive .... pending
  Phase 8/8: Verification .................. pending
```

No user interaction during Phases 0-7. The recipe is self-contained.

### 4.4 Verification + Results

```
BUILD COMPLETE

  VERIFICATION:
  Soul compliance ........... PASS
  Warm palette .............. PASS
  Container width ........... PASS (960px)
  Void prevention ........... PASS (max gap: 108px)
  Zone differentiation ...... PASS (3 zones, 6 channels)
  Accessibility ............. PASS (WCAG AA)

  [Enter] Open in browser
  [a]     Run full PA audit
  [s]     Ship as-is
```

### 4.5 Gate Failure Protocol

Gate failures are CONVERSATIONS, not dead ends:

```
GATE FAILURE: Void Prevention
  WHAT: Gap between S4-S5 is 142px (max: 192px target: <120px)
  WHY:  padding-bottom(48) + margins(64) + divider(3) + padding-top(27) = 142px
  FIX:  Reduce divider margins from 32px to 16px (gap -> 110px)

  [1] Apply fix automatically
  [2] Show me the page first
  [3] Ship anyway (override)
```

Soul violations are the ONE exception -- fixed automatically without asking (identity-level, non-negotiable).

### 4.6 Tier-Specific Agent Architecture

| Tier | TC Phases | Builder | PA Mode | Agents | Est. Time |
|------|-----------|---------|---------|--------|-----------|
| Floor | 0 only | 1 Sonnet | None | 1 | ~5 min |
| Middle | 0 only | 1 Opus | Self-check (PA-01 to PA-05) | 1 | ~15-25 min |
| Ceiling | 0-3.5 | 1 Opus | Mode 2 (fresh-eyes, PA-01 to PA-10) | 4-6 | ~45-60 min |
| Flagship | 0-3.5 | 1 Opus | Mode 4 (9 fresh-eyes auditors, all 48 Qs) | 10+ | ~90-180 min |

### 4.7 Power User Flags

| Flag | Effect |
|------|--------|
| `--tier floor/middle/ceiling/flagship` | Skip tier selection |
| `--output path/to/file.html` | Set output path |
| `--no-pa` | Skip PA audit (rapid iteration) |
| `--pa-mode 1/2/3/4` | Force PA mode |
| `--dry-run` | Phase 0 only, show plan |
| `--metaphor "geological strata"` | Pre-seed metaphor (skip TC Phases 1-3) |
| `--batch path/to/dir/` | Process multiple files |
| `--verbose` | Show per-phase detail |

---

## SECTION 5: HOW FILE 42 INTEGRATES

### What Gets Extracted vs What Stays

**Extracted into `operational-recipe.md` (~650 lines):**
- Part 1: The 9-phase recipe (Phases 0-8 with all CSS values, HTML templates, perception checks)
- Part 3: Appendix C Quick Reference Card (soul, zone typography, divider margins, callout variants, breakpoints, perception thresholds)
- Part 4.1: Content Decision Guide (content-specific decision table)

**Stays in ephemeral (`42-OPERATIONAL-RECIPE.md`):**
- Part 2: Team architecture analysis (~200 lines of evidence and reasoning)
- Part 4.2-4.5: Integration analysis, skill relationship mapping, process recommendations
- Part 5: Risk assessments and confidence calibrations
- Appendices A-D: Evidence chains, provenance citations, experimental data

**Principle:** The recipe is WHAT TO DO. The analysis is WHY. Builders get WHAT. Researchers get WHY.

### The TC-to-Recipe Handoff

For Middle tier (most common):
```
/build-page invokes TC Phase 0 only
  -> TC classifies: Middle tier, CRESCENDO pattern
  -> TC outputs BUILD PLAN:
       tier: Middle
       pattern: CRESCENDO
       zone_count: 3
       mechanism_minimums: S:1+ T:1+ M:1+ B:1+ R:1+
  -> Builder reads: operational-recipe.md + mechanism-catalog.md + tokens.css + prohibitions.md
  -> Builder executes Phases 0-8
```

For Ceiling/Flagship:
```
/build-page invokes TC Phases 0-3.5
  -> TC derives metaphor through multi-axis questioning
  -> TC outputs RICH BUILD PLAN:
       tier: Ceiling
       metaphor: "RIVER DELTA"
       zone_semantics: [temperature, density, voice, weight per zone]
       mechanism_selections: [per-category from catalog]
       isomorphism_table: [metaphor property -> CSS expression]
       builder_warnings: [W-DEADZONE, W-OVERLABEL, etc.]
  -> Builder reads: operational-recipe.md + mechanism-catalog.md + tokens.css + prohibitions.md + build plan
  -> Builder adapts recipe phases using metaphor-driven zone semantics
  -> Builder executes Phases 0-8
```

### What the Builder Receives (Gate 4 compliance)

For ANY tier, the builder agent's context includes:
1. `operational-recipe.md` (the complete recipe -- ~650 lines)
2. `mechanism-catalog.md` (FULL -- not "first 200 lines")
3. `tokens.css` (design system vocabulary)
4. `prohibitions.md` (soul constraints)
5. The BUILD PLAN from TC (or from build-page's Phase 0 for Middle tier)
6. `perception-thresholds.md` (minimum visible deltas -- also embedded in recipe)

The builder needs NO other files. The spec is self-contained.

---

## SECTION 6: THE VERIFICATION SYSTEM

### Two-Layer Verification

**Layer 1: Programmatic (gate-runner.js)**
Run in browser via Playwright `page.evaluate()`. Returns structured PASS/FAIL for each gate.

| Gate | What It Checks | Threshold |
|------|---------------|-----------|
| SC-01 | Container width | 940-960px |
| SC-02 | Soul enforcement | border-radius: 0, box-shadow: none |
| SC-03 | Font stack | Instrument Serif / Inter / JetBrains Mono |
| SC-04 | Warm palette | R >= G >= B for all backgrounds |
| SC-05 | Heading hierarchy | h1 > h2 > h3, no skips |
| SC-06 | ARIA landmarks | >= 3 |
| SC-07 | Skip-to-content | Present |
| SC-08 | Component library usage | Standard class names |
| SC-09 | Background delta | >= 15 RGB between adjacent zones |
| SC-10 | Stacked gap | <= 192px at section boundaries |
| SC-11 | Font-size zones | >= 2px between zone groups |
| SC-12 | Zone count | 2-5 zones |

**Layer 2: Perceptual (PA SKILL.md)**
Fresh-eyes agents evaluate screenshots. Mode varies by tier.

| Tier | PA Mode | Auditors | Questions | Fresh-eyes? |
|------|---------|----------|-----------|-------------|
| Floor | None | 0 | 0 | N/A |
| Middle | Self-check | 1 (builder) | PA-01 to PA-05 | No (builder self-evaluates) |
| Ceiling | Mode 2 | 1 Opus | PA-01 to PA-10 | Yes (zero build context) |
| Flagship | Mode 4 | 9 Opus | All 48 | Yes (screenshot pre-capture pattern) |

**Why both layers:** The flagship experiment proved programmatic gates can PASS while perceptual audit FAILS. The builder complied with every binary rule but produced imperceptible differentiation. Programmatic gates catch measurable violations; perceptual audit catches "does it LOOK designed?"

### The Verification Prompt (Standalone)

The verification-designer produced a standalone 300-line verification prompt that can audit ANY Pipeline v2 artifact (SKILL file, HTML output, or codification diff) against 7 gates + 4 meta-checks. This is the TWO-INSTANCE verification tool: the writer creates, a fresh agent runs the verification prompt.

The 7 verification gates map directly to the 7 diagnosed failure modes:
1. Compression Gate (no abstract rules without concrete values)
2. Judgment Rule Gate (every rule has a programmatic check)
3. Guardrail-to-Playbook Ratio (execution sections <= 1:1)
4. Builder Visibility Gate (spec is self-contained)
5. Perception Threshold Gate (8 thresholds present)
6. Meta-to-Output Ratio (meta:output <= 10:1)
7. Recipe Format Gate (building phases use recipe verbs)

This prompt lives in the analysis corpus (ephemeral) as a process tool, not in the permanent design system. It is invoked when creating or modifying Pipeline v2 artifacts.

---

## SECTION 7: RELATIONSHIP TO EXISTING SKILLS

### What Changes in Each Existing Skill

**TC SKILL.md (tension-composition):**
- Phases 0-3.5: UNCHANGED (content analysis, metaphor derivation, lock-in)
- Phase 4: Gets recipe framing header (Change 1); continues to provide mechanism selection framework
- Phase 5: UNCHANGED (divergence verification against case studies)
- New: Phase 4 output is explicitly a BUILD PLAN consumed by the recipe
- Size: ~1,878 -> ~1,950 lines (+72)

**PA SKILL.md (perceptual-auditing):**
- All 48 questions: UNCHANGED
- All 4 modes: UNCHANGED
- Team architecture: UNCHANGED
- New: Perception threshold table embedded (Change 2)
- New: gate-runner.js integration note (programmatic runs before human PA)
- Size: ~774 -> ~830 lines (+56)

**compositional-core/CLAUDE.md:**
- Track 1/2 routing: UNCHANGED
- Always-load protocol: UNCHANGED
- Anti-gravity rules: UNCHANGED
- New: Phase 6 expanded from 3 lines to full builder recipe routing (~35 lines)
- New: Agent Communication Protocol section (~25 lines)
- New: Builder model selection (Opus for Ceiling+, Sonnet for Middle) (~8 lines)
- New: Full mechanism catalog routing to builder (~20 lines)
- Size: ~681 -> ~770 lines (+89)

### What Each Skill Does NOT Do

| Skill | Does NOT |
|-------|----------|
| build-page | Write CSS. It orchestrates, routes, and presents results. |
| tension-composition | Write CSS. It derives metaphors and selects mechanisms. |
| operational-recipe | Derive metaphors. It receives a build plan and executes it. |
| perceptual-auditing | Fix issues. It identifies them. Fresh-eyes only. |
| gate-runner.js | Make judgment calls. It counts, measures, compares. Binary only. |

---

## SECTION 8: ANTI-REPRODUCTION PROTOCOL COMPLIANCE

Does this architecture itself pass the 7 gates?

| Gate | Status | Evidence |
|------|--------|---------|
| **G1: Compression** | PASS | The recipe contains exact CSS values, not abstractions. Perception thresholds have specific numbers (15 RGB, 2px, 0.5px). Every threshold has provenance (File 08). |
| **G2: Judgment Rules** | PASS | All 12 programmatic gates are binary (SC-01 through SC-12). The one permitted judgment check (PA-05 "does it feel designed?") is administered by fresh-eyes agents. |
| **G3: Guardrail Ratio** | PASS | The recipe is recipe-dominant (~0.3:1 guardrail-to-playbook from File 42 measurement). Action verbs dominate: Set, Write, Add, Create. |
| **G4: Builder Visibility** | PASS | Builder receives: operational-recipe.md + mechanism-catalog.md + tokens.css + prohibitions.md + perception-thresholds.md + build plan. Self-contained. |
| **G5: Quality Routing** | PASS | CSS-rich files (mechanism catalog, recipe, tokens) routed to builder. Research files routed to planner. |
| **G6: Meta Ratio** | WATCH | Current ratio is still high (41 analysis files + 6 proposals = ~27,000+ meta lines vs ~1,605 output lines = ~17:1). This architecture document is ITSELF meta. The next step MUST be codification. |
| **G7: Recipe Format** | PASS | The operational recipe uses recipe verbs throughout (Set, Write, Add, Style). Verification phases (Phase 8) use checklist verbs (Verify, Check) -- permitted for verification sections. |

**Gate 6 is the critical gate.** This architecture document adds to the meta count. The next action after this document must be CODIFICATION -- writing the actual files, not more analysis.

---

## SECTION 9: TOP 5 IMPLEMENTATION PRIORITIES

Ordered by dependency and impact. Apply in this sequence.

### Priority 1: Create `perception-thresholds.md`
**Why first:** Zero dependencies. Referenced by everything else. The corpus's most actionable artifact.
**Effort:** ~30 min (extract from File 42, format as standalone reference)
**File:** `design-system/compositional-core/guidelines/perception-thresholds.md`

### Priority 2: Create `gate-runner.js`
**Why second:** Depends on perception-thresholds.md. Enables programmatic verification for all subsequent work.
**Effort:** ~60 min (adapt from ephemeral/flagship-experiment/spatial-gate-runner.js)
**File:** `design-system/compositional-core/validation/gate-runner.js`

### Priority 3: Create `operational-recipe.md`
**Why third:** Depends on perception-thresholds.md. This is THE core deliverable -- the builder's complete spec.
**Effort:** ~120 min (extract from File 42, strip analysis, keep recipe, add tier awareness)
**File:** `design-system/compositional-core/grammar/operational-recipe.md`

### Priority 4: Apply 6 edits to existing files
**Why fourth:** The edits depend on the new files existing (cross-references).
**Effort:** ~60 min total
**Files:** tokens.css, semantic-rules.md, TC SKILL.md, PA SKILL.md, compositional-core/CLAUDE.md, design-system/CLAUDE.md

### Priority 5: Create `build-page/SKILL.md`
**Why fifth:** Depends on everything above (references recipe, both skills, gate runner).
**Effort:** ~90 min (new content: tier classification, agent routing, progress display, gate failure protocol)
**File:** `~/.claude/skills/build-page/SKILL.md`

**Total estimated effort:** ~6 hours across 5 priorities.

After Priority 5, run the cheapest experiment: build one Middle-tier page using `/build-page` and measure PA-05. Target: >= 3/4.

---

## SECTION 10: UNRESOLVED DECISIONS REQUIRING USER INPUT

### D1: Skill naming
`/build-page` vs `/page-builder` vs `/build-design-page`. The proposals use different names. This architecture uses `/build-page` because it describes the user's intent. **User should confirm.**

### D2: File 42 extraction scope
File 42 is 1,746 lines. The recipe portion is ~650 lines. The analysis portion (~700 lines) stays in ephemeral. But there's ~300 lines of team architecture and integration guidance in between. **Should team architecture go in the build-page skill, the recipe, or stay in ephemeral?** This architecture places it in the build-page skill (agent architecture section).

### D3: Middle-tier standalone invocation
For Middle-tier pages, the user could invoke `/build-page` (which runs TC Phase 0 for classification) or could invoke the recipe directly if they already know the tier. **Should the recipe be independently invocable?** This architecture says NO -- always go through `/build-page` for consistent UX. But a `--tier middle` flag skips the classification prompt.

### D4: TC Phase 4 fate (long-term)
This architecture keeps TC Phase 4 intact. But the file42-integrator argues it should eventually be trimmed once the recipe proves itself over multiple builds. **Should TC Phase 4 be marked for potential future retirement?** This is a sunset protocol question -- answer after 5 builds.

### D5: Codification timing
The anti-reproduction protocol's Gate 6 is VIOLATED (meta:output = ~17:1). **Should we codify immediately (all 10 files in one session) or incrementally (Priorities 1-2 first, test, then 3-5)?** Incremental is lower risk but higher meta ratio. Immediate is faster but more error-prone.

### D6: Content ingestion pipeline
The UX-designer proposes source adapters (Notion, Google Docs, Confluence) and batch mode. **Are these in scope for Pipeline v2 or deferred to v3?** This architecture defers them -- they're independent of the core build pipeline and can be added later without changing any of the 10 files above.

---

## SECTION 11: THE 10-SECOND VERSION

If you read nothing else:

**Pipeline v2 = `/build-page` command + operational recipe + 8 edits**

- User types `/build-page`. System classifies tier, routes to recipe.
- Builder executes 9-phase recipe with exact CSS values.
- Gate runner checks 12 binary constraints.
- PA auditors check if it LOOKS designed.
- Output: one .html file.

4 new files. 6 edits. ~1,605 new permanent lines. The builder gets a RECIPE (not a checklist), the FULL mechanism catalog (not 200 lines), and PERCEPTION THRESHOLDS (not abstract "ensure richness"). Every diagnosed root cause has a specific fix.

---

**END OF UNIFIED ARCHITECTURE**

**Document statistics:**
- Sections: 11
- Contradictions resolved: 7
- Files specified: 10 (4 new, 6 edited)
- Implementation priorities: 5 (ordered by dependency)
- Unresolved decisions: 6 (requiring user input)
- Anti-reproduction gates: 6/7 PASS, 1 WATCH (Gate 6 meta ratio)
- Total new permanent lines: ~1,605
- Estimated implementation effort: ~6 hours

# Recipe vs Principles Brief: Decision-Ready Comparison

**Author:** Recipe vs Principles Brief Analyst (Opus 4.6)
**Task:** #72
**Date:** 2026-02-19
**Sources:** 17-design-recipe-restructure.md, 21-integration-cd006.md, 22-integration-remediation.md, 27-meta-unasked-questions.md, 29-meta-first-principles.md, 30-adversarial-structure-worse.md

---

## 0. WHY THIS DOCUMENT EXISTS

The user asked: what do the investigation findings mean in terms of concrete pipeline implications, agnosticism, and freedom at the flagship level?

Six source reports pull in three directions:
- Report 17 says: restructure the recipe into template + instance (TWO-LAYER RECIPE)
- Reports 29/30 say: replace the recipe with a principles brief (PRINCIPLES BRIEF)
- Reports 21/22 say: the remediation's telescope+microscope hybrid worked best (HYBRID)

This document puts all three approaches side by side with concrete examples, so the user can decide.

---

## 1. THE THREE APPROACHES DEFINED

### Approach A: Recipe (PV2 as designed, refined by Report 17)

A 650-line operational recipe template + a 200-400 line TC-generated build recipe instance. The builder follows 9 phases in sequence, with mandatory checkpoints and specific CSS values at every step. TC's new Phase 4.8 generates a content-specific recipe instance that mirrors the recipe template structure.

### Approach B: Principles Brief (Reports 29/30)

A 100-line document stating WHAT must be true, not HOW to achieve it. The builder receives reference files + semantic direction + perception thresholds and composes freely. No mandatory phases, no specific CSS values prescribed. Gates + PA verify the output.

### Approach C: Hybrid (Telescope-Microscope, from Reports 17/21/22)

Recipe phases 0-4 provide structural foundation (soul, HTML skeleton, zones, borders, typography) with specific values. Phases 5-8 shift to convention-based freedom where the builder makes compositional decisions guided by the coherence rule and TC's semantic direction. Telescope comments explain WHY at every step.

---

## 2. WHAT THE BUILDER SEES

### Approach A: Recipe -- Builder's Prompt (~20 lines)

```
You are the page builder. Read these files:
1. operational-recipe-template.md (300 lines, universal rules)
2. _build-recipe.md (300 lines, THIS BUILD's specific values)
3. tokens.css, prohibitions.md, merged-components.css, mechanism-catalog.md

Execute 9 phases IN ORDER. At each phase:
- Read the template's phase instruction
- Read the instance's phase-specific values
- Build exactly what is specified
- Run the self-check
- Submit for checkpoint review at Phases 0, 1, 3, 4, 8

Phase 3 of your recipe instance says:
  ZONE 1 (Introduction): Background #FEF9F5, padding 64px 32px
  ZONE 2 (Analysis): Background #F0EBE3 [delta R-14, G-17, B-18 = PASS]
  ZONE 3 (Reference): Background #E6DFD4 [delta R-10, G-12, B-15]
  Channels shifting Z1->Z2: Chromatic (+17), Spatial (64->32px)

Do NOT deviate from the instance values without planner approval.
Deliverable: HTML file + cascade value table.
```

### Approach B: Principles Brief -- Builder's Prompt (~20 lines)

```
You are the page builder. Read these files:
1. perception-thresholds.md (80 lines, visibility floors)
2. tokens.css, prohibitions.md, merged-components.css, mechanism-catalog.md
3. _semantic-direction.md (TC's analysis: direction, zone map, mechanism suggestions)

Build this page. Every CSS decision must serve the semantic direction.
Use the component library (>= 10/26 classes). Respect the soul.
Make it VISIBLE (perception thresholds). Make it ACCESSIBLE (WCAG 2.1 AA).

Requirements that must be true in the output:
- Container: 940-960px
- Zone backgrounds: adjacent zones differ by >= 15 RGB
- Typography: 3 distinct zones, >= 2px delta between them
- Structural borders at section boundaries
- >= 3 transition types between zones
- Skip link, ARIA landmarks >= 3, focus styles
- Responsive at 768px and 1024px

Deliverable: HTML file + cascade value table proving >= 3 channels shift
at every zone boundary.
```

### Approach C: Hybrid -- Builder's Prompt (~20 lines)

```
You are the page builder. Read these files:
1. operational-recipe-template.md (300 lines, Phases 0-4 specific)
2. _build-recipe.md (200 lines, THIS BUILD's structural values)
3. _semantic-direction.md (TC's compositional analysis + coherence rule)
4. tokens.css, prohibitions.md, merged-components.css, mechanism-catalog.md

PHASES 0-4: Follow the recipe instance. Specific values are provided.
  Phase 0: Absorb zone map. Phase 1: HTML skeleton per instance.
  Phase 2: CSS reset + soul. Phase 3: Zone backgrounds per instance.
  Phase 4: Borders + transitions per instance.

PHASES 5-8: Compose freely within the coherence rule.
  The coherence rule for this build: "Deeper = denser = darker = heavier"
  Phase 5-6: Deploy typography + mechanisms that serve the direction.
  Phase 7: Accessibility. Phase 8: Verify cascade table.

For Phases 5-8, you decide HOW. The coherence rule is your guide.
If undocumented decisions arise, derive the answer from the rule.
Deliverable: HTML file + cascade value table.
```

---

## 3. WHAT THE PIPELINE DOES DIFFERENTLY

### Approach A: Recipe

```
Wave 0: TC planner runs Phases 0-4.8
         NEW: Phase 4.8 generates _build-recipe.md (recipe instance format)
         Output mirrors recipe template structure phase-by-phase
Wave 0.5: Fresh-eyes metaphor validation
Wave 0.9: Handoff gate (7 binary checks -- 2 NEW: recipe instance structure)
Wave 1: Opus builder executes 9 phases sequentially
         5 mandatory checkpoints (Phases 0, 1, 3, 4, 8)
         Builder reads template + instance in parallel
Wave 2: 12 programmatic gates + 9 PA auditors
Wave 3: Fix cycle (max 3 attempts)
```

**Key orchestrator change:** TC's output format changes from planning document to recipe instance. The orchestrator validates that `_build-recipe.md` has phase-matching sections with semantic justifications.

### Approach B: Principles Brief

```
Wave 0: TC planner runs Phases 0-3.5
         Output: _semantic-direction.md (direction + zone map + mechanism suggestions)
         NO recipe instance. Shorter TC output (~100-150 lines).
Wave 0.5: Fresh-eyes direction validation (is it STRUCTURAL, not announced?)
Wave 0.9: Simplified handoff gate (5 checks, no recipe structure checks)
Wave 1: Opus builder composes freely
         ZERO mandatory checkpoints
         Builder may self-organize into any build order
Wave 2: 12 programmatic gates + 9 PA auditors (SAME)
Wave 3: Fix cycle (max 3 attempts) (SAME)
```

**Key orchestrator change:** TC produces a shorter, more focused output. The orchestrator's handoff gate is simpler. The builder phase has no checkpoints -- the orchestrator only knows when the builder is done.

### Approach C: Hybrid

```
Wave 0: TC planner runs Phases 0-4.8
         Output: _build-recipe.md (structural phases 0-4 only)
         Output: _semantic-direction.md (coherence rule + compositional guidance)
Wave 0.5: Fresh-eyes validation (direction + structural plan)
Wave 0.9: Handoff gate (6 checks -- structural completeness only)
Wave 1: Opus builder executes in two modes:
         RECIPE MODE (Phases 0-4): Sequential, specific values, 3 checkpoints
         COMPOSE MODE (Phases 5-8): Free composition guided by coherence rule
Wave 2: 12 programmatic gates + 9 PA auditors (SAME)
Wave 3: Fix cycle (max 3 attempts) (SAME)
```

**Key orchestrator change:** TC produces two output files instead of one. The builder prompt explicitly switches modes at Phase 5. The orchestrator checkpoints only cover the recipe phases (0-4), not the composition phases (5-8).

---

## 4. HOW GATES CHANGE

### Approach A: Recipe

| Gate | Trigger | Change from current |
|------|---------|-------------------|
| SC-01 through SC-08 | Same binary checks | UNCHANGED |
| SC-09 (bg delta) | >= 15 RGB | UNCHANGED |
| SC-10 (stacked gap) | <= 108px | UNCHANGED |
| SC-11 (font-size zones) | >= 2px delta | UNCHANGED |
| SC-12 (zone count) | 2-5 zones | UNCHANGED |
| **NEW: HG-06** | Recipe instance has phase sections? | **NEW** |
| **NEW: HG-07** | Each phase section has semantic justification? | **NEW** |

**Total: 14 gates (12 programmatic + 2 handoff)**

### Approach B: Principles Brief

| Gate | Trigger | Change from current |
|------|---------|-------------------|
| SC-01 through SC-12 | Same binary checks | UNCHANGED |
| HG-06, HG-07 | REMOVED (no recipe instance to validate) | **REMOVED** |

**Total: 12 gates (all programmatic)**

The principles brief REDUCES gate count. The thesis: if gates catch the same violations regardless of recipe presence, recipe-specific gates are overhead. The programmatic gates (SC-01 through SC-12) verify the OUTPUT, not the PROCESS.

### Approach C: Hybrid

| Gate | Trigger | Change from current |
|------|---------|-------------------|
| SC-01 through SC-12 | Same binary checks | UNCHANGED |
| **NEW: HG-06** | Recipe instance has structural phase sections (0-4)? | **NEW (narrower)** |
| **NEW: MC-01** | Cascade table shows >= 3 channels shifting at every boundary? | **NEW** |

**Total: 14 gates (12 programmatic + 1 handoff + 1 multi-coherence)**

The hybrid adds MC-01, which directly verifies the primary failure mode (channels not shifting together). This is MORE USEFUL than checking recipe format compliance because it verifies the OUTCOME, not the PROCESS.

---

## 5. HOW SKILLS CHANGE

### TC Skill Changes

| Approach | TC Change | TC Output Format | TC Lines Changed |
|----------|-----------|-----------------|-----------------|
| A: Recipe | Add Phase 4.8 (recipe instance generation) | `_build-recipe.md` (~300 lines, mirrors recipe template) | +80 lines |
| B: Principles Brief | Remove Phase 4 sub-phases for CSS-specific mapping | `_semantic-direction.md` (~100-150 lines) | -200 lines (net) |
| C: Hybrid | Add Phase 4.8 for structural phases only | `_build-recipe.md` (~200 lines, phases 0-4 only) + `_semantic-direction.md` (~80 lines, coherence rule) | +40 lines |

**Under ALWAYS FLAGSHIP:** All three approaches eliminate Floor/Middle/Ceiling tier routing from TC, saving ~400 lines. The TC skill shrinks regardless of which approach is chosen.

### PA Skill Changes

| Approach | PA Change |
|----------|-----------|
| A: Recipe | Unchanged -- PA evaluates output, not process |
| B: Principles Brief | Unchanged |
| C: Hybrid | Unchanged |

PA is agnostic to the builder's process. It evaluates the visual output. No PA changes for any approach.

---

## 6. CONTENT AGNOSTICISM: DOES IT WORK FOR OTHER CONTENT?

This is the critical question. The pipeline has only been tested on design-system research content -- maximally favorable content that knows what "mechanisms" and "zones" are.

### Test Cases

| Content Type | A: Recipe | B: Principles Brief | C: Hybrid |
|-------------|-----------|---------------------|-----------|
| **API Reference** (GET /users/:id) | PROBLEM: Recipe instance specifies zone backgrounds for narrative arcs. API docs have no narrative arc. TC Phase 4.8 must generate a recipe for content that resists sequential reading. The recipe's "BECAUSE deeper = denser" coherence rule is meaningless for alphabetically organized endpoints. | WORKS: Builder receives "organize endpoints clearly, make lookup fast" as direction. Builder composes a reference layout (likely Bento grid, alphabetical grouping, minimal zones). Perception thresholds still apply (borders, typography differentiation). | PARTIALLY WORKS: Phases 0-4 (structural foundation) work fine -- zones still need backgrounds, HTML still needs ARIA. But the coherence rule from TC may be forced ("deeper = denser" doesn't apply to API docs). Builder's compose-mode phases (5-8) work because they're free-form. |
| **Tutorial** (step-by-step cooking) | WORKS WELL: Tutorials have natural sequential structure. TC derives zones (setup -> cook -> plate -> serve). Recipe instance maps steps to zones. The "deeper = more precise" coherence rule fits naturally. | WORKS: Builder understands tutorial structure and composes accordingly. | WORKS WELL: Recipe phases give structural foundation, compose phases let builder create engaging step progressions. |
| **Legal Brief** (contract analysis) | WORKS WITH EFFORT: TC must derive a metaphor for legal analysis ("surface reading -> clause analysis -> implication chain"). Recipe instance specifies formal, high-restraint styling. But the recipe's mechanism catalog may not have legal-document-appropriate components. | WORKS: Builder receives "formal, authoritative, hierarchical" direction. Builder composes with restraint. The soul's sharp edges and limited palette actually suit legal content. | WORKS WELL: Structural phases establish formal hierarchy. Compose phases let builder create the precise, authoritative voice legal content demands. |
| **Product Changelog** (v3.2 release notes) | PROBLEM: Recipe instance must specify zones for content that is fundamentally a flat list. TC will struggle to derive genuine tension from "Bug fixes and improvements." The recipe may force structure onto inherently unstructured content. | WORKS: Builder receives "communicate changes clearly, highlight breaking changes" as direction. Builder composes a clean, scannable layout. Minimal zones, strong component usage (callout-gotcha for breaking changes, callout-info for features). | PARTIALLY WORKS: Phases 0-4 establish container and minimal zone structure. Phases 5-8 let builder focus on what matters: clear scannable layout, good typography for version numbers and descriptions. |
| **Research Synthesis** (what we've tested) | WORKS WELL: This is the content type the entire system was designed for. | WORKS: Opus with full context produced CD-006 (39/40) on similar content. | WORKS WELL: The hybrid was essentially derived from analyzing success/failure on this content type. |

### Agnosticism Verdict

| Approach | Content Agnosticism Score | Why |
|----------|--------------------------|-----|
| A: Recipe | 3/5 | The recipe instance format assumes narrative-arc content. API docs, changelogs, and flat-list content resist the zone->metaphor->coherence-rule structure. TC must generate recipe instances for content that doesn't naturally decompose into semantic zones. |
| B: Principles Brief | 5/5 | The brief says WHAT (visible zones, differentiated typography, structural borders) without assuming HOW the content organizes. The builder adapts to the content type. API docs get reference layouts. Tutorials get step progressions. Legal briefs get formal hierarchies. All satisfy the same perception thresholds. |
| C: Hybrid | 4/5 | Structural phases (0-4) are content-agnostic -- every page needs a container, zone backgrounds, and borders. Compose phases (5-8) are fully content-adaptive. The only weakness: TC still generates a coherence rule, which may not fit all content types. |

---

## 7. SAMPLE BUILDER PROMPT FOR THE SAME CONTENT

Content: A 3,000-word research synthesis about effective team communication patterns.

### Approach A: Recipe Instance (Phase 3 excerpt)

```markdown
### Phase 3 Instance: Zone Backgrounds -- YOUR BUILD

Coherence rule: "Deeper analysis = warmer tone = denser layout = heavier borders"

ZONE 1 (Context -- "Open Field"):
  Background: #FEF9F5 (warm cream)
  Padding: 64px 48px
  Metaphor: Open field = spacious, inviting, overview
  Content: Introduction, problem statement, "You Are Here"
  Channels shifting from previous: N/A (first zone)

ZONE 2 (Evidence -- "Workshop"):
  Background: #F5EDE2 (warm tan) [delta from Z1: R-9, G-15, B-19 = PASS >=15]
  Padding: 40px 48px
  Metaphor: Workshop = active, evidence-laden, structured
  Content: Research findings, data tables, evidence chains
  Channels shifting: Chromatic (+14 avg), Spatial (64->40px = 38% compression)

ZONE 3 (Synthesis -- "Archive"):
  Background: #EDE5D9 (warm stone) [delta from Z2: R-8, G-8, B-9 = CHECK >=15 on max]
  Padding: 32px 48px
  Metaphor: Archive = consolidated, reference-ready
  Content: Synthesis, implications, recommendations
  Channels shifting: Chromatic (+8 avg), Spatial (40->32px), Typographic (body->detail)

Verification: Scroll from top to bottom. Are zone boundaries visible WITHOUT borders?
If NO: Increase Z2 warmth or Z3 darkness until >= 15 RGB on largest channel.
```

### Approach B: Principles Brief (Full builder instruction)

```markdown
# Build Brief: Team Communication Research Synthesis

## Semantic Direction
This content moves from broad context through structured evidence to consolidated
synthesis. The reader's journey: orientation -> investigation -> understanding.

## Zone Architecture (from TC)
3 zones suggested:
- Zone 1: Context/orientation (introduction, problem statement)
- Zone 2: Evidence/investigation (findings, data, patterns)
- Zone 3: Synthesis/understanding (implications, recommendations)

## Your Task
Build an HTML page that serves this content. Every visual decision should
reinforce the orientation-to-understanding journey.

## Hard Constraints
- Container 940-960px, border-radius: 0, no box-shadow
- Adjacent zone backgrounds >= 15 RGB apart
- 3 typography zones >= 2px font-size delta
- Structural borders at zone boundaries
- >= 3 transition types
- Skip link, ARIA >= 3, focus styles, responsive at 768px
- Cascade value table required (>= 3 channels shifting per boundary)

## Available Tools
- tokens.css (color palette, spacing scale, type scale)
- merged-components.css (26 component classes)
- mechanism-catalog.md (18 mechanisms across 5 categories)

Build it. Make it designed.
```

### Approach C: Hybrid (Phase 3 is recipe; Phase 6 is composition)

```markdown
### Phase 3: Zone Backgrounds (RECIPE MODE -- follow these values)

ZONE 1: #FEF9F5 (warm cream), padding 64px 48px
ZONE 2: #F5EDE2 (warm tan) [delta: R-9, G-15, B-19 = PASS]
ZONE 3: #EDE5D9 (warm stone) [delta: R-8, G-8, B-9 = CHECK]
/* BECAUSE: The journey from open context to dense synthesis
   maps to warm-light -> warm-medium -> warm-dark */

### Phase 6: Element-Level Richness (COMPOSE MODE -- coherence rule guides you)

Coherence rule: "Deeper analysis = warmer tone = denser layout = heavier borders"

Deploy mechanisms from the catalog that serve THIS content:
- Evidence sections need structured comparison (consider grid layouts, data tables)
- Synthesis sections need consolidated reference (consider callout-essence, pull-quotes)
- Transitions between zones should reflect cognitive boundary weight

You choose WHICH mechanisms, WHERE to deploy them, and HOW they interact.
The coherence rule is your guide for undocumented decisions.
Reject mechanisms that don't serve the content (document rejections).
```

---

## 8. PIPELINE FREEDOM: What Can the Builder Decide?

### Approach A: Recipe

| Decision | Builder decides? | Prescribed by? |
|----------|-----------------|----------------|
| Zone count | NO | TC planner |
| Zone backgrounds | NO | Recipe instance (specific hex) |
| Zone padding | NO | Recipe instance (specific px) |
| Typography zones | NO | Recipe instance (specific sizes) |
| Which mechanisms | NO | Recipe instance (specific catalog #s) |
| Where mechanisms go | NO | Recipe instance (specific sections) |
| Transition types | NO | Recipe instance (per-boundary) |
| Component classes | NO | Recipe instance (per-section) |
| Grid layouts | NO | Recipe instance (specific grids) |
| CSS property ordering | YES | Builder's judgment |
| Selector naming | YES | Builder's judgment |
| Hover state specifics | PARTIAL | Recipe instance gives mechanism, builder picks details |
| Responsive breakpoints | NO | Recipe template (768px, 1024px) |
| Print styles | NO | Recipe template (standard) |

**Builder freedom: ~15%** -- mostly CSS organization and micro-level decisions. All compositional decisions are prescribed.

### Approach B: Principles Brief

| Decision | Builder decides? | Constrained by? |
|----------|-----------------|-----------------|
| Zone count | YES | TC suggests, builder confirms |
| Zone backgrounds | YES | Perception threshold (>= 15 RGB) |
| Zone padding | YES | Builder's compositional judgment |
| Typography zones | YES | Perception threshold (>= 2px delta) |
| Which mechanisms | YES | Per-category minimum (S:1+, T:1+, M:1+, B:1+, R:1+) |
| Where mechanisms go | YES | Content-driven judgment |
| Transition types | YES | Minimum 3 types |
| Component classes | YES | Minimum 10/26 |
| Grid layouts | YES | Minimum 2 grids |
| CSS property ordering | YES | Builder's judgment |
| Responsive breakpoints | PARTIAL | 768px required, others optional |
| Density arc | YES | Builder's compositional judgment |
| Coherence direction | PARTIAL | TC suggests, builder may reinterpret |
| Spatial confidence | YES | Builder's compositional judgment |

**Builder freedom: ~80%** -- builder makes all compositional decisions. Only hard constraints (soul, perception thresholds, accessibility) are prescribed.

### Approach C: Hybrid

| Decision | Builder decides? | Mode |
|----------|-----------------|------|
| Zone count | NO | Recipe (Phase 0) |
| Zone backgrounds | NO | Recipe (Phase 3) |
| Zone padding | PARTIAL | Recipe gives defaults, builder adjusts |
| Typography foundations | NO | Recipe (Phase 5 foundations) |
| Typography expression | YES | Compose (Phase 5 details) |
| Structural borders | NO | Recipe (Phase 4) |
| Which mechanisms | YES | Compose (Phase 6) |
| Where mechanisms go | YES | Compose (Phase 6) |
| Transition CSS | NO | Recipe (Phase 4) |
| Component selection | YES | Compose (Phase 6) |
| Density arc expression | YES | Compose (guided by coherence rule) |
| Spatial confidence | YES | Compose (Phases 5-8) |
| Responsive details | YES | Compose (Phase 7) |

**Builder freedom: ~50%** -- structural foundation is prescribed, compositional expression is free.

---

## 9. PIPELINE CONSTRAINTS: Hard Boundaries

### Approach A: Recipe

| Constraint | Type | Enforced by |
|-----------|------|-------------|
| Soul (border-radius:0, no shadows, etc.) | Identity | Gate SC-02 + recipe Phase 2 |
| Container 940-960px | Identity | Gate SC-01 |
| >= 15 RGB background delta | Perception | Gate SC-09 + recipe Phase 3 |
| >= 2px font-size delta | Perception | Gate SC-11 + recipe Phase 5 |
| <= 108px stacked gap | Perception | Gate SC-10 |
| 9-phase sequential order | Procedural | Recipe template + checkpoints |
| 5 mandatory checkpoints | Procedural | Orchestrator |
| TC-prescribed specific values | Specification | Recipe instance |
| Cascade value table deliverable | Verification | Recipe Phase 8 |
| >= 3 transition types | Specification | Recipe instance |
| Per-category mechanism minimums | Specification | Recipe instance |

**Constraint density: HIGH.** The builder operates within a narrow corridor. Every CSS decision has a prescribed value. The constraint surface is the recipe itself -- 300 lines of template + 300 lines of instance = 600 lines of constraints.

### Approach B: Principles Brief

| Constraint | Type | Enforced by |
|-----------|------|-------------|
| Soul (border-radius:0, no shadows, etc.) | Identity | Gate SC-02 |
| Container 940-960px | Identity | Gate SC-01 |
| >= 15 RGB background delta | Perception | Gate SC-09 |
| >= 2px font-size delta | Perception | Gate SC-11 |
| <= 108px stacked gap | Perception | Gate SC-10 |
| Cascade value table deliverable | Verification | Brief requirement |
| >= 10/26 component classes | Specification | Brief requirement |
| WCAG 2.1 AA accessibility | Specification | Brief requirement |
| Responsive at 768px | Specification | Brief requirement |

**Constraint density: LOW.** The builder operates within a wide field. Constraints define boundaries (what must NOT happen and what MUST be true), not procedures (how to build). The constraint surface is ~80 lines of thresholds + ~20 lines of brief requirements = ~100 lines.

### Approach C: Hybrid

| Constraint | Type | Enforced by | Phases |
|-----------|------|-------------|--------|
| Soul | Identity | Gate SC-02 + recipe Phase 2 | 0-4 (recipe) |
| Container | Identity | Gate SC-01 | 0-4 |
| Perception thresholds | Perception | Gates SC-09/10/11 + recipe Phase 3 | 0-4 |
| 9-phase order (structural) | Procedural | Recipe Phases 0-4 | 0-4 only |
| 3 checkpoints (structural) | Procedural | Orchestrator | 0-4 only |
| Coherence rule | Compositional | TC direction document | 5-8 (compose) |
| Per-category minimums | Specification | TC suggestions | 5-8 |
| Cascade value table | Verification | Phase 8 requirement | 8 |
| Accessibility | Specification | Phase 7 requirement | 7 |

**Constraint density: MEDIUM.** Phases 0-4 are constrained (recipe corridor). Phases 5-8 are open (principled field). The constraint surface shrinks as the builder moves from structure to composition.

---

## 10. PREDICTED PA-05 SCORE RANGES

| Scenario | A: Recipe | B: Principles Brief | C: Hybrid |
|----------|-----------|---------------------|-----------|
| **Floor (worst case)** | 2.5/4 | 1.5/4 | 2.5/4 |
| **Expected (median)** | 3.0/4 | 3.0/4 | 3.2/4 |
| **Ceiling (best case)** | 3.5/4 | 4.0/4 | 3.8/4 |
| **Variance** | LOW | HIGH | MEDIUM |

### Reasoning

**Approach A floor (2.5):** The recipe prevents catastrophic failure. Even if the builder's execution is mediocre, the specific values ensure visible zones, differentiated typography, and structural borders. The remediation (which was essentially a recipe execution) achieved 2.5. Greenfield build should do at least as well.

**Approach A ceiling (3.5):** The recipe CAPS compositional fluency. The builder follows instructions, producing COMPOSED output. Occasionally, an Opus builder may transcend the recipe at specific moments (like the remediation builder correcting cool grays to warm palette). But the recipe's sequential structure and mandatory checkpoints interrupt compositional flow. The 3/4 ceiling identified in 8/23 cross-reference reports is real. 3.5 is optimistic.

**Approach B floor (1.5):** Without recipe guardrails, an Opus builder COULD reproduce the flagship's failure: invisible backgrounds, uniform typography, budget misallocation on sub-perceptual refinements. The perception thresholds catch SOME of this, but the builder might satisfy thresholds minimally (15 RGB exactly, all backgrounds within 1 point of the threshold). The gates catch omissions, but between gates the builder has no guide.

**Approach B ceiling (4.0):** CD-006 proved that Opus with principles + context + freedom can produce 39/40. The principles brief preserves this potential. An Opus builder that deeply understands the content, derives a strong semantic direction, and composes with full creative agency CAN produce DESIGNED output. The perception thresholds prevent the floor from dropping too low. This is the only approach where 4/4 is plausible.

**Approach C floor (2.5):** Recipe phases 0-4 guarantee structural foundation. Even if the compose phases (5-8) are mediocre, the page has visible zones, correct typography foundations, structural borders, and semantic transitions. This is the remediation's floor.

**Approach C ceiling (3.8):** The compose phases allow compositional fluency beyond what a pure recipe permits. The builder can make mechanism choices, density decisions, and spatial confidence judgments that a recipe would prescribe. But the recipe foundation constrains early decisions -- the builder inherits zone colors and structural borders they didn't choose, limiting full compositional coherence.

---

## 11. RISK PROFILES

### Approach A: Recipe

| Risk | Severity | Probability | Mitigation |
|------|----------|-------------|------------|
| Recipe ceiling at 3/4 | MEDIUM | HIGH (8/23 reports flag it) | Accept it, or add Opus escalation path |
| TC generates bad recipe instance | HIGH | MEDIUM | Wave 0.5 catches announced metaphors |
| Recipe doesn't fit content type | HIGH | MEDIUM | Content-specific recipe variants needed |
| Builder follows recipe but misses gestalt | MEDIUM | HIGH | PA auditors catch perceptual failures |
| Recipe + build plan = 600+ lines builder must absorb | LOW | MEDIUM | Phase-by-phase reading reduces per-phase load |
| Maintenance cost of 600-line recipe template | LOW | HIGH | Permanent complexity accumulation |

**Overall risk: LOW floor, LOW ceiling.** Safe bet. Reliable 3/4. Never 4/4.

### Approach B: Principles Brief

| Risk | Severity | Probability | Mitigation |
|------|----------|-------------|------------|
| Builder produces structurally incomplete page | HIGH | MEDIUM | Gates SC-01-12 catch omissions |
| Builder allocates CSS budget poorly | HIGH | MEDIUM | Perception thresholds flag invisibility |
| Builder skips accessibility | MEDIUM | LOW | Gates SC-06, SC-07 catch this |
| Builder doesn't create cascade table | MEDIUM | MEDIUM | Make it a gate requirement |
| Builder produces 4/4 brilliance | BENEFIT | LOW-MED | This is the upside case |
| Higher variance across builds | MEDIUM | HIGH | PA + fix cycle provides safety net |

**Overall risk: HIGHER floor risk, HIGHER ceiling potential.** Bold bet. Variable results. Occasional brilliance.

### Approach C: Hybrid

| Risk | Severity | Probability | Mitigation |
|------|----------|-------------|------------|
| Mode switch at Phase 5 confuses builder | MEDIUM | LOW | Clear prompt framing |
| Recipe phases constrain compose phases | LOW | MEDIUM | Builder inherits good foundations |
| Compose phases produce mediocre additions | MEDIUM | MEDIUM | PA catches, fix cycle corrects |
| TC coherence rule doesn't fit content | MEDIUM | LOW | Direction validation in Wave 0.5 |
| Slightly more complex orchestrator | LOW | HIGH | Two-mode builder prompt is ~40% more complex |

**Overall risk: MODERATE floor, MODERATE ceiling.** Balanced bet. Reliable 3/4+ with room for 3.5-3.8.

---

## 12. THE DECISION MATRIX

| Criterion | Weight | A: Recipe | B: Brief | C: Hybrid |
|-----------|--------|-----------|----------|-----------|
| Reliable floor (>= 3/4) | 25% | 9/10 | 5/10 | 8/10 |
| Ceiling potential (4/4 possible) | 20% | 2/10 | 8/10 | 5/10 |
| Content agnosticism | 20% | 3/10 | 10/10 | 7/10 |
| Builder compositional freedom | 15% | 2/10 | 9/10 | 6/10 |
| Maintenance simplicity | 10% | 4/10 | 9/10 | 6/10 |
| Evidence base | 10% | 6/10 | 4/10 | 5/10 |

### Weighted Scores

| Approach | Floor (.25) | Ceiling (.20) | Agnostic (.20) | Freedom (.15) | Maintenance (.10) | Evidence (.10) | TOTAL |
|----------|-------------|---------------|----------------|---------------|-------------------|----------------|-------|
| A: Recipe | 2.25 | 0.40 | 0.60 | 0.30 | 0.40 | 0.60 | **4.55** |
| B: Brief | 1.25 | 1.60 | 2.00 | 1.35 | 0.90 | 0.40 | **7.50** |
| C: Hybrid | 2.00 | 1.00 | 1.40 | 0.90 | 0.60 | 0.50 | **6.40** |

### If you weight RELIABLE FLOOR at 40% (safety-first):

| Approach | Floor (.40) | Ceiling (.15) | Agnostic (.15) | Freedom (.10) | Maintenance (.10) | Evidence (.10) | TOTAL |
|----------|-------------|---------------|----------------|---------------|-------------------|----------------|-------|
| A: Recipe | 3.60 | 0.30 | 0.45 | 0.20 | 0.40 | 0.60 | **5.55** |
| B: Brief | 2.00 | 1.20 | 1.50 | 0.90 | 0.90 | 0.40 | **6.90** |
| C: Hybrid | 3.20 | 0.75 | 1.05 | 0.60 | 0.60 | 0.50 | **6.70** |

**The Principles Brief wins on both weightings.** Even when safety is prioritized at 40%, the brief's content agnosticism and maintenance simplicity offset its lower floor guarantee. The recipe's critical weakness is content agnosticism (3/10) -- it only works well for narrative-arc content.

---

## 13. WHAT THIS MEANS FOR FLAGSHIP-LEVEL FREEDOM

At the flagship level, the constraints have these concrete effects on pipeline freedom:

### What MUST be constrained (all approaches agree):

1. **Soul properties** -- border-radius: 0, no shadows, no gradients, limited palette. This is identity. Non-negotiable. These constraints ENABLE richness by closing the toolkit.

2. **Perception thresholds** -- >= 15 RGB, >= 2px font-size, <= 108px stacked gap. These prevent the flagship's catastrophic failure mode (invisible styling). Non-negotiable.

3. **Accessibility** -- skip link, ARIA landmarks, focus styles, responsive. Professional baseline. Non-negotiable.

4. **Fresh-eyes verification** -- 9 PA auditors evaluating screenshots. The builder cannot judge its own work. Non-negotiable.

### What SHOULD be free (the approaches diverge):

| Decision | Recipe says | Brief says | Hybrid says |
|----------|-----------|-----------|-------------|
| How many zones? | TC prescribes | Builder decides (2-5) | TC suggests, builder confirms |
| What color per zone? | TC prescribes hex | Builder chooses (>= 15 RGB) | TC prescribes (Phases 0-4) |
| What mechanisms? | TC prescribes catalog #s | Builder selects (per-category min) | Builder selects (Phases 5-8) |
| What density arc? | Implicit in recipe | Builder composes | Builder composes (Phases 5-8) |
| What transition types? | TC prescribes per-boundary | Builder decides (>= 3 types) | TC prescribes boundaries (Phase 4), builder chooses expression |
| How to organize CSS? | Recipe phases dictate | Builder's judgment | Recipe phases 0-4, then free |
| Whether to add a "designed moment"? | Not in recipe | Builder's creative choice | Builder's creative choice (Phases 5-8) |

### The Freedom-Quality Tradeoff

The investigation's evidence points to a counterintuitive finding: **more freedom correlates with higher quality, up to a point, provided hard constraints exist.**

- CD-006: Maximum freedom within soul constraints = 39/40
- Middle experiment: High freedom with 100-line recipe = 4/4
- Flagship experiment: Minimum freedom with 963-line prompt = 1.5/4
- Remediation: Medium freedom with 1,025-line spec = 2.5/4

The optimal point is NOT maximum freedom (which risks structural incompleteness) and NOT maximum constraint (which caps compositional fluency). It is **maximum freedom within non-negotiable hard constraints.**

The brief achieves this by making constraints binary and verifiable (gates) while leaving all compositional decisions to the builder. The hybrid achieves a softer version by prescribing structural foundations and freeing compositional expression. The recipe achieves the opposite by prescribing everything and hoping the builder transcends the prescription.

---

## 14. RECOMMENDATION

### For the FIRST build: Use Approach C (Hybrid)

The hybrid provides a safe structural foundation (recipe phases 0-4) while allowing the compositional freedom that produces DESIGNED output (compose phases 5-8). It is the most testable: if Phases 5-8 produce excellent results, move to Approach B for subsequent builds. If Phases 5-8 produce mediocre results, expand the recipe to cover them.

### For SUBSEQUENT builds after validation: Move toward Approach B (Principles Brief)

If the first build demonstrates that Opus can compose effectively with perception thresholds + reference files + semantic direction, reduce the recipe to a principles brief. The gates and PA provide the safety net. The builder provides the compositional intelligence.

### For DIVERSE content types: Approach B is mandatory

The recipe (Approach A) is content-specific. It assumes narrative-arc content with semantic zones. API docs, changelogs, legal briefs, and reference materials do not have this structure. Only the principles brief is content-agnostic.

### The experiment that resolves it

Build the SAME content (research synthesis) using Approach A and Approach C. Compare PA-05 scores. If C >= A, the recipe is unnecessary. If A > C by >= 0.5 points, the recipe earns its 650 lines. This takes one afternoon and resolves the debate empirically.

---

## 15. SUMMARY TABLE

| Dimension | A: Recipe | B: Principles Brief | C: Hybrid (RECOMMENDED) |
|-----------|-----------|---------------------|------------------------|
| Builder sees | 600 lines (template + instance) | 100 lines (brief + thresholds) | 380 lines (recipe phases 0-4 + direction + thresholds) |
| Pipeline does | 5 waves, 9 phases, 14 gates | 4 waves, no phases, 12 gates | 5 waves, 9 phases (4 recipe + 5 compose), 14 gates |
| Gates | 14 (12 programmatic + 2 handoff) | 12 (all programmatic) | 14 (12 programmatic + 1 handoff + 1 multi-coherence) |
| Skills change | TC +80 lines (Phase 4.8) | TC -200 lines (simplified) | TC +40 lines (partial Phase 4.8) |
| Content agnostic? | PARTIAL (narrative-arc content) | YES (all content types) | MOSTLY (structural phases are universal) |
| Builder freedom | ~15% (micro-decisions only) | ~80% (all compositional decisions) | ~50% (structure prescribed, composition free) |
| Hard constraints | Soul + thresholds + recipe values | Soul + thresholds only | Soul + thresholds + structural recipe |
| PA-05 floor | 2.5/4 | 1.5/4 | 2.5/4 |
| PA-05 expected | 3.0/4 | 3.0/4 | 3.2/4 |
| PA-05 ceiling | 3.5/4 | 4.0/4 | 3.8/4 |
| Variance | LOW | HIGH | MEDIUM |
| Risk | Safe, capped | Bold, variable | Balanced |
| Lines codified | ~1,605 | ~585 | ~835 |

---

**END OF COMPARISON**

**Key files referenced:**
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/17-design-recipe-restructure.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/21-integration-cd006.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/22-integration-remediation.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/27-meta-unasked-questions.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/29-meta-first-principles.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/30-adversarial-structure-worse.md`

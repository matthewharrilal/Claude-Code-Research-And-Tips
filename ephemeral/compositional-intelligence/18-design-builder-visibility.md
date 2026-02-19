# DESIGN: Builder Compositional Visibility

**Author:** Builder Compositional Visibility Designer (Opus 4.6)
**Task:** #18
**Date:** 2026-02-19
**Sources:** PV2-PIPELINE-DIAGRAM.md, tension-composition SKILL.md (Phases 0-3.5), 14-MASTER-SYNTHESIS.md (23-agent cross-reference), 12-ENHANCED-REMEDIATION-SPEC.md (9-phase execution)

---

## 1. THE PROBLEM IN ONE SENTENCE

The flagship builder saw ~1,150 lines but NONE contained compositional intelligence; the remediation builder saw 1,025 lines of SPECIFIC CSS per phase and scored +1.0 PA-05 improvement; the question is what format makes compositional intelligence ACTIONABLE for the agent that writes CSS.

---

## 2. WHAT MUST REACH THE BUILDER

### 2.1 The Distinction: Intelligence vs Information

Compositional intelligence has two layers:

| Layer | Example | Who Needs It | Format |
|-------|---------|-------------|--------|
| **DECLARATIVE** (why) | "Multi-coherence requires >= 3 channels shifting at every zone boundary because single-channel shifts are imperceptible" | TC PLANNER | Prose, conviction language, telescope |
| **OPERATIONAL** (what to do) | "At S2->S3 boundary: darken bg by 20 RGB, increase font-weight by 100, reduce letter-spacing by 0.01em" | BUILDER | Recipe, action verbs, microscope |

The flagship builder got NEITHER. The master prompt gave it 75 lines of CONSTRAINTS (what not to do). The remediation builder got the OPERATIONAL layer directly: specific hex values, specific CSS properties, specific selectors per phase.

**Design Principle: The builder receives OPERATIONAL CONSEQUENCES, never declarative reasoning.**

The builder does not need to know WHY multi-coherence matters. The builder needs to know: "At every section boundary, change AT LEAST 3 of these 6 CSS properties: background-color, font-size, font-weight, letter-spacing, border-left, paragraph margin."

### 2.2 The Five Things That MUST Reach the Builder

Based on the remediation's success and the flagship's failure, exactly five categories of compositional intelligence must reach the builder in operational form:

**B-1: Zone-Boundary Transition Table (from _build-plan.md)**

NOT: "The metaphor requires increasing geological pressure across zones."
YES:
```
TRANSITION TABLE (from TC planner):
| Boundary | bg delta | font-size | font-weight | letter-spacing | border-left | margin |
|----------|----------|-----------|-------------|---------------|-------------|--------|
| S1->S2   | +20 RGB  | same      | same        | same          | ADD 3px     | same   |
| S2->S3   | -15 RGB  | -1px      | +200        | -0.01em       | REMOVE      | -4px   |
| S3->S4   | +25 RGB  | same      | -200        | same          | same        | +8px   |
```

This is the CASCADE VALUE TABLE as INPUT (from TC planner) rather than as OUTPUT (builder self-assessment). The planner computes the transition plan; the builder executes it.

**B-2: Per-Phase CSS Values (from operational-recipe.md)**

NOT: "Apply warm zone backgrounds with sufficient perceptual delta."
YES:
```
PHASE 3: Zone Backgrounds
  S1: #FEF5EB  (warm peach cream)
  S2: #F5EDE2  (warm tan, -20 RGB from S1)
  S3: #FBF3E8  (warm honey, +10 RGB from S2)
  S4: #F8F6F3  (cooling cream, -8 RGB from S3)

  SELF-CHECK: Open at 1440px. Scroll S1->S4.
  Can you distinguish 3+ zone transitions WITHOUT a color picker?
  NO -> increase RGB deltas until visible.
```

This is exactly what the remediation spec provided (see Phase 2 in 12-ENHANCED-REMEDIATION-SPEC.md, lines 287-313) and exactly what worked.

**B-3: Mechanism Deployment Instructions (from mechanism-catalog.md, filtered)**

NOT: The full 18-mechanism catalog (too much for execution context).
YES: The 5-8 mechanisms the TC planner SELECTED, with their APPLICATION MODES:

```
MECHANISM DEPLOYMENT (from TC planner, 7 selected):
1. Border-weight modulation (#1) -> Apply: 4px on callouts, 3px on section borders, 1px on table rows
2. Progressive density (#3) -> Apply: Increase content-per-viewport from S1 (sparse) to S8 (dense)
3. Scroll-reveal (#7) -> Apply: Intersection observer on S5 and S9 component blocks
4. Background layering (#9) -> Apply: 3-zone warm->cool->warm arc across 12 sections
5. Table striping (#12) -> Apply: Alternating row backgrounds on all tables
6. Pull-quote distinction (#14) -> Apply: Instrument Serif + border-left on master insight
7. Grid layout variety (#16) -> Apply: 2-col grid in S7 (tension pairs), S8 (sequence blocks)

For each mechanism, read its APPLICATION MODE in mechanism-catalog.md
before implementing. The catalog contains specific CSS patterns.
```

**B-4: Component Library Adoption List (from merged-components.css)**

NOT: "Adopt >= 10/26 component families."
YES: A specific list of which families to adopt for THIS content:

```
COMPONENT ADOPTION (from TC planner):
Adopt these library classes:
  .callout .callout--info        -> S3 density rhythm, S5 combination rule
  .callout .callout--gotcha      -> S7 tension blocks (6 instances)
  .callout .callout--tip         -> S7 resolution blocks (3 instances)
  .callout .callout--essence     -> S12 discovery
  .section-indicator             -> All 12 section headers (replaces .section-meta)
  .data-table                    -> S4, S6, S8 data tables
  .table-featured                -> S2 master insight table
  table thead background tint    -> All tables

Total: 8 families (target: >= 10)
Additional candidates: .pull-quote (S2), .sequence-block (S8)
```

**B-5: Perception Thresholds as Inline Self-Checks (from perception-thresholds.md)**

NOT: A separate reference file the builder must cross-reference.
YES: Embedded at the POINT OF USE in the recipe:

```
PHASE 3: Zone Backgrounds
  ...apply hex values...

  >>> PERCEPTION GATE:
  Open browser. Can you SEE zone boundaries WITHOUT dev tools?
  Adjacent bg delta MUST be >= 15 RGB. Measure: |R1-R2| + |G1-G2| + |B1-B2|.
  FAIL -> increase delta. DO NOT PROCEED to Phase 4 until this passes.
```

This is the "inline perception validation" pattern from the remediation (see "PERCEPTION CHECK" after each phase in 12-ENHANCED-REMEDIATION-SPEC.md).

---

## 3. FORMAT ANALYSIS: Recipe vs Checklist vs YAML vs Structured HTML Comments

### 3.1 Evidence-Based Format Comparison

| Format | Success Evidence | Failure Evidence | Builder Compliance |
|--------|-----------------|------------------|-------------------|
| **Recipe** (sequential phases, action verbs, specific values) | Middle builder: PA-05 4/4. Remediation builder: PA-05 2.5/4 (+1.0). | None observed. | ~100% (follows steps in order) |
| **Checklist** (constraint list, judgment verbs, abstract rules) | None observed. | Flagship builder: PA-05 1.5/4. Master prompt: 7.9:1 guardrail ratio. | ~0% for judgment items, ~100% for binary items |
| **YAML** (structured key-value, machine-parseable) | Not tested. | Not tested. | Unknown -- high for values, unclear for compositional reasoning |
| **Structured HTML comments** (inline in template HTML) | Not tested. | Not tested. | Unknown -- potentially high as builder writes CSS alongside comments |

### 3.2 Recommendation: RECIPE with YAML DATA BLOCKS

The remediation spec's format is the proven winner. But it can be improved with one addition: YAML data blocks for the transition table and mechanism list. This gives the recipe TWO formats within one document:

1. **Prose recipe** for SEQUENTIAL instructions ("Phase 3: Set zone backgrounds...")
2. **YAML data blocks** for STRUCTURED data that the builder looks up repeatedly

Example hybrid format:

```markdown
## Phase 3: Zone Backgrounds

Apply these background colors per zone. Each adjacent pair MUST differ by >= 15 RGB points.

```yaml
zones:
  S1: { bg: "#FEF5EB", role: "warm intake", delta_from_prev: null }
  S2: { bg: "#F5EDE2", role: "warm consolidation", delta_from_S1: 27 }
  S3: { bg: "#FBF3E8", role: "warm honey breath", delta_from_S2: 18 }
  S4: { bg: "#F8F6F3", role: "cooling transition", delta_from_S3: 15 }
`` `

ACTION: Set each zone's background-color to its `bg` value.
SELF-CHECK: Open at 1440px. Scroll S1->S4. Can you distinguish zones visually?
FAIL -> Increase delta_from_prev until >= 15.
```

**Why YAML data blocks within recipe:**
- The builder can SCAN structured data (zone colors, transition deltas, mechanism lists) quickly
- YAML is unambiguous for CSS values (no "approximately" or "around 15px")
- The recipe wrapping provides SEQUENCING and CONTEXT
- LLM builders parse YAML reliably (it's a format they encounter frequently in training data)

### 3.3 What Format the Builder Actually USES vs Merely READS

Key insight from the remediation analysis: The builder USES format features differently at different phases:

| Phase | Builder Action | Format That Works |
|-------|---------------|-------------------|
| Phase 0: Absorb plan | Reading comprehension | Prose summary (like _build-plan.md) |
| Phase 1: HTML skeleton | Class name lookup | YAML list of component classes to use |
| Phase 2: CSS reset | Copy exact values | Code block with literal CSS |
| Phase 3: Zone backgrounds | Color lookup + delta calculation | YAML color table with pre-computed deltas |
| Phase 4: Borders + dividers | Pattern selection | Code block with literal CSS per selector |
| Phase 5: Typography zones | Multi-property lookup | YAML table with font-size, weight, spacing per zone |
| Phase 6: Element richness | Mechanism deployment | Prose instructions referencing catalog entries |
| Phase 7: Accessibility | Boilerplate | Code block with literal CSS (mostly copy-paste) |
| Phase 8: Self-verification | Checklist | Binary checklist (ONLY place checklist format is appropriate) |

**Conclusion:** The recipe should use DIFFERENT micro-formats per phase:
- **Code blocks** for Phases 2, 4, 7 (literal CSS to adapt)
- **YAML tables** for Phases 1, 3, 5 (structured lookup data)
- **Prose** for Phase 0 (absorption) and Phase 6 (creative deployment)
- **Binary checklist** for Phase 8 ONLY (verification is the one place checklists work)

---

## 4. THE ROUTING PROBLEM: How Compositional Intelligence Reaches the CSS-Writing Agent

### 4.1 Current Routing (Broken)

```
TC PLANNER reads:
  - mechanism-catalog.md (FULL -- all 18 mechanisms with CSS examples)
  - tokens.css (all token values)
  - case-studies/ (compositional patterns)
  - research/ (337 findings)

  TC PLANNER outputs:
  - _build-plan.md (zone count, mechanism names, transitions)
  - LOSES: specific CSS values, application modes, pattern interactions

BUILDER reads:
  - _build-plan.md (FROM planner -- but stripped of CSS specifics)
  - tokens.css (raw values, no compositional context)
  - prohibitions.md (what NOT to do)
  - [MISSING: mechanism-catalog.md application modes]
  - [MISSING: component library CSS patterns]
  - [MISSING: transition table with computed deltas]
```

**The compression gap:** TC planner has 100% compositional intelligence. _build-plan.md compresses this to ~10% (zone names, mechanism labels, approximate colors). Builder gets 10% of the intelligence but must produce 100% of the CSS.

### 4.2 PV2 Routing (Fixed per Architecture Diagram)

PV2 already addresses this in the diagram (lines 311-351). The builder reads 6 files:

1. `operational-recipe.md` (~650 lines) -- THE recipe with per-phase CSS values
2. `_build-plan.md` (from TC) -- zone architecture, mechanism selection, transition plan
3. `tokens.css` -- design system tokens
4. `prohibitions.md` -- soul constraints
5. `merged-components.css` -- component library
6. `mechanism-catalog.md` (FULL) -- all 18 mechanisms with application modes

**This is correct.** The PV2 architecture already routes the mechanism catalog to the builder. The remaining design question is: HOW do these 6 files interact? Which file does the builder consult at which phase?

### 4.3 File Routing Per Phase (NEW DESIGN)

```
Phase 0: Absorb plan
  PRIMARY: _build-plan.md
  REFERENCE: operational-recipe.md (Phase 0 section only)
  IGNORE: all others

Phase 1: HTML skeleton
  PRIMARY: operational-recipe.md (Phase 1)
  REFERENCE: merged-components.css (class names to apply)
  REFERENCE: _build-plan.md (which components go in which zones)

Phase 2: CSS reset + soul
  PRIMARY: operational-recipe.md (Phase 2)
  REFERENCE: prohibitions.md (soul constraints)
  REFERENCE: tokens.css (exact token values)

Phase 3: Zone backgrounds
  PRIMARY: operational-recipe.md (Phase 3)
  REFERENCE: _build-plan.md (zone-to-color assignments from planner)
  SELF-CHECK: perception threshold (>= 15 RGB delta)

Phase 4: Structural borders + dividers
  PRIMARY: operational-recipe.md (Phase 4)
  REFERENCE: mechanism-catalog.md (border-weight modulation application mode)
  REFERENCE: _build-plan.md (transition plan: SMOOTH/BRIDGE/BREATHING per boundary)

Phase 5: Typography zones
  PRIMARY: operational-recipe.md (Phase 5)
  REFERENCE: _build-plan.md (zone-to-typography assignments from planner)
  SELF-CHECK: perception threshold (>= 2px font-size delta)

Phase 6: Element-level richness
  PRIMARY: mechanism-catalog.md (application modes for selected mechanisms)
  REFERENCE: operational-recipe.md (Phase 6)
  REFERENCE: _build-plan.md (which mechanisms were selected by planner)

Phase 7: Accessibility
  PRIMARY: operational-recipe.md (Phase 7) -- mostly boilerplate CSS

Phase 8: Verification
  PRIMARY: operational-recipe.md (Phase 8 checklist)
  REFERENCE: ALL files (cross-check)
  OUTPUT: cascade value table (computed CSS at every boundary)
```

**Key design decision:** The recipe is the PRIMARY document for 7 of 9 phases. The mechanism catalog becomes PRIMARY only in Phase 6 (element-level richness), where the builder needs creative deployment guidance beyond what a recipe can specify.

---

## 5. PER-AGENT MEMORY: Should Each Role Get a Different Brief?

### 5.1 Answer: YES, Absolutely

The evidence is overwhelming. The flagship failure's root cause chain:
1. TC planner had full compositional intelligence (mechanism catalog, scale-channel model, research)
2. Planner compressed it to _build-plan.md (10% survival)
3. Builder received _build-plan.md + 75 lines of constraints
4. Builder wrote CSS without knowing what "multi-coherence" means operationally
5. Output: technically compliant, perceptually flat

The fix is NOT to give everyone the same 650-line recipe. The fix is ROLE-SPECIFIC briefs:

### 5.2 Per-Agent Memory Design

**TC PLANNER brief (~40 lines):**
```markdown
# TC Planner Memory

You are the TELESCOPE. Your job: analyze content, derive tensions, select mechanisms,
produce a build plan that the BUILDER can execute.

YOUR OUTPUT FORMAT -- _build-plan.md MUST contain:
1. Zone count (2-5) with section-to-zone mapping
2. Zone background colors (pre-computed, >= 15 RGB delta between adjacent)
3. Mechanism deployment table (which mechanism -> which zone -> which CSS property)
4. Transition table with SPECIFIC DELTAS at every boundary:
   | Boundary | bg delta | font-size | font-weight | letter-spacing | border | margin |
5. Component adoption list (which library classes -> which sections)
6. Builder warnings (content-specific gotchas: long tables, deeply nested lists, etc.)

CRITICAL: Your transition table IS the builder's primary navigation tool.
If you write "increase density" instead of "+2px padding reduction, +100 font-weight,"
the builder will produce flat output. Be SPECIFIC. Use CSS property names and values.

YOUR PERCEPTION THRESHOLDS (check plan values against these):
- Background delta: >= 15 RGB between adjacent zones
- Font-size delta: >= 2px between typographic zones
- Letter-spacing delta: >= 0.03em between typographic zones
- Stacked gap max: <= 108px at any section boundary
- Multi-coherence: >= 3 CSS properties must change at every zone boundary
```

**BUILDER brief (~40 lines):**
```markdown
# Builder Memory

You are the MICROSCOPE. Your job: execute the recipe, produce HTML + CSS.
You do NOT derive metaphors. You do NOT question the plan. You BUILD.

YOUR INPUT FILES (read in this order):
1. operational-recipe.md -- YOUR PRIMARY DOCUMENT. Follow it phase by phase.
2. _build-plan.md -- Zone architecture, colors, mechanisms from planner
3. tokens.css -- Exact token values (use these, not approximations)
4. prohibitions.md -- Soul constraints (border-radius: 0, no shadows, etc.)
5. merged-components.css -- Component classes to adopt (>= 10 families)
6. mechanism-catalog.md -- Application modes for selected mechanisms

YOUR PRIMARY FAILURE MODE: Writing CSS that is technically correct but perceptually
invisible. Flagship spent 22% of CSS budget on 0.001-0.01em letter-spacing.
NOBODY CAN SEE THAT. Every CSS value you write must pass the squint test.

YOUR PERCEPTION THRESHOLDS (check every value you write against these):
- If a background delta is < 15 RGB: TOO SUBTLE, increase it
- If a font-size delta is < 2px: TOO SUBTLE, increase it
- If a letter-spacing value is < 0.03em: TOO SUBTLE, increase it
- If stacked gaps at a boundary exceed 108px: TOO MUCH whitespace, reduce it

YOUR REQUIRED DELIVERABLE: CASCADE VALUE TABLE
At Phase 8, measure computed CSS at EVERY section boundary and record:
background, font-size, font-weight, letter-spacing, border-left, margin, color.
Verify >= 3 properties change at each transition.
```

**PA AUDITOR brief (~25 lines):**
```markdown
# PA Auditor Memory

You are the PERISCOPE. Your job: evaluate what you SEE, not what you know.
You have ZERO build context. You read ONLY screenshots.

YOUR QUESTIONS (assigned subset of 48 from PA skill):
Answer each question based ONLY on what you observe in the screenshots.
DO NOT speculate about CSS properties, mechanism names, or build intent.

YOUR PRIMARY EVALUATION (PA-05):
"Does this feel DESIGNED or merely formatted?"
- 1/4 FLAT: Uniform, no visual hierarchy, everything same size/color
- 2/4 STYLED: Some variation exists but feels arbitrary, not purposeful
- 3/4 COMPOSED: Clear hierarchy, cohesive feel, transitions between zones
- 4/4 DESIGNED: Everything serves the content's purpose, nothing arbitrary

Report what you SEE. Use spatial language: "The top third is...", "Scrolling from
section 3 to section 4, I notice...", "At the bottom of the page..."
```

**PLANNER APPROVAL CHECKPOINT brief (~20 lines):**
```markdown
# Planner Checkpoint Memory

At Phases 0, 1, 3, 4, 8, the builder outputs work-in-progress for your review.
You compare against _build-plan.md and the transition table.

CHECK THESE AT EACH CHECKPOINT:
- Phase 0: Does the builder's zone mapping match your plan?
- Phase 1: Did the builder use the correct component library classes?
- Phase 3: Are zone backgrounds within 5 RGB of your specified values?
- Phase 4: Are borders present where your transition table says they should be?
- Phase 8: Does the cascade value table show >= 3 channel shifts per boundary?

If ANY check fails: send specific revision instructions with EXACT CSS values.
NOT: "The backgrounds need more contrast."
YES: "S4 background should be #F0EDE5 (currently #F5F3F0, only 8 RGB delta from S3)."
```

### 5.3 Brief Architecture

```
/build-page content.md
    |
    v
[TC PLANNER] reads: TC planner brief + TC SKILL.md + content.md
    |                + mechanism-catalog.md + tokens.css
    | outputs: _build-plan.md (with transition table, component list)
    v
[METAPHOR VALIDATOR] reads: metaphor description only (no brief needed, zero context)
    v
[HANDOFF GATE] reads: _build-plan.md (binary checks, no agent needed)
    v
[BUILDER] reads: Builder brief + operational-recipe.md + _build-plan.md
    |             + tokens.css + prohibitions.md + merged-components.css
    |             + mechanism-catalog.md
    | outputs: output.html + cascade-value-table.md
    v
[PLANNER CHECKPOINT] reads: Planner checkpoint brief + _build-plan.md
    |                        + builder's current output
    v
[PA AUDITORS x9] reads: PA auditor brief + screenshots only
```

---

## 6. THE REMEDIATION SUCCESS: Is "Long but Specific" Better Than "Short but Abstract"?

### 6.1 Evidence

| Experiment | Spec Length | Spec Type | PA-05 |
|-----------|------------|-----------|-------|
| Flagship (master prompt) | 963 lines total, ~75 to builder | Abstract constraints | 1.5/4 |
| Flagship remediation | 1,025 lines, all to builder | Specific CSS per phase | 2.5/4 |
| Middle experiment | ~100 lines recipe to builder | Specific CSS per phase | 4/4 |

### 6.2 Analysis

The question "long but specific vs short but abstract" is a FALSE DICHOTOMY. The real distinction is:

**SPECIFIC always beats ABSTRACT regardless of length.**

The middle experiment was SHORT AND SPECIFIC (100 lines, specific values) and scored 4/4.
The remediation was LONG AND SPECIFIC (1,025 lines, specific values) and scored 2.5/4.
The master prompt was LONG AND ABSTRACT (963 lines, judgment rules) and scored 1.5/4.

Length is not the variable. SPECIFICITY is the variable.

### 6.3 Why the Remediation's 1,025 Lines Worked Despite Being Long

The remediation spec was long because it had to:
1. DEALLOCATE 216 lines of sub-perceptual CSS (Phase 0 -- cleanup-specific)
2. Restructure HTML (Phase 1 -- 47 specific changes)
3. Apply CSS per phase with EXACT values (Phases 2-6)
4. Add accessibility boilerplate (Phase 7)
5. Define verification (Phase 8)

For a GREENFIELD build (PV2's normal case), phases 0 and 1 shrink dramatically:
- No deallocation needed (no existing CSS to clean up)
- HTML skeleton built from scratch (no existing structure to modify)

**Projected greenfield recipe length: ~650 lines** (PV2's architecture estimate is correct).

### 6.4 The Sweet Spot: 650 Lines with Phase-Appropriate Micro-Formats

The optimal builder input is:
- ~650 lines of operational recipe (9 phases, sequenced, specific CSS values)
- ~200-400 lines of _build-plan.md from TC planner (zone architecture + transition table)
- ~170 lines of tokens.css (exact token values)
- ~350 lines of prohibitions.md (soul constraints)
- FULL mechanism-catalog.md (reference, not cover-to-cover reading)
- FULL merged-components.css (reference, not cover-to-cover reading)

**Total builder visibility: ~1,150-1,350 lines of PRIMARY material + reference files.**

This matches PV2's architecture (lines 346-348: "TOTAL: ~650 recipe + ~500 reference = ~1,150 lines").

---

## 7. THE TRANSITION TABLE: The Missing Artifact That Changes Everything

### 7.1 What It Is

The transition table is the SINGLE MOST IMPORTANT artifact that the TC planner must produce for the builder. It is the operational translation of all compositional intelligence into a format the builder can execute cell-by-cell.

### 7.2 Why It Matters

Compositional intelligence at the scale/channel level says:
> "At each zone boundary, multiple CSS channels must shift simultaneously to create perceptible coherence."

This is DECLARATIVE. The builder cannot execute it without knowing WHICH channels, HOW MUCH, and in WHICH DIRECTION.

The transition table translates this to:

```
| Boundary | bg (hex)          | font-sz | font-wt | letter-sp | border-left      | p-margin |
|----------|-------------------|---------|---------|-----------|------------------|----------|
| ->S1     | #FEF5EB           | 17px    | 400     | 0.02em    | none             | 20px     |
| S1->S2   | #F5EDE2 (-27 RGB) | 17px    | 400     | 0.02em    | 3px solid tan    | 20px     |
|          | channels: 2 (bg, border) -- FAIL, need 3+                                       |
| S2->S3   | #FBF3E8 (+18 RGB) | 17px    | 400     | 0.02em    | none (removed)   | 20px     |
|          | channels: 2 (bg, border) -- FAIL, need 3+                                       |
```

When the planner sees "FAIL, need 3+" in their own transition table, they ADD channels before the builder ever starts. This prevents the "technically compliant, perceptually flat" failure at the SOURCE.

### 7.3 Who Produces It, When

```
TC PLANNER produces: Transition table (as PLAN -- intended values)
BUILDER executes: CSS that matches the transition table
BUILDER produces: Cascade value table (as PROOF -- measured computed values)
GATE RUNNER verifies: Computed values match plan within tolerance
PA AUDITORS verify: Visual result looks DESIGNED
```

The transition table flows through the pipeline in THREE forms:
1. **PLAN** (from planner, in _build-plan.md) -- "I intend these values"
2. **EXECUTION** (from builder, in the CSS) -- "I implemented these values"
3. **PROOF** (from builder, in cascade-value-table.md) -- "Here are the measured values"
4. **VERIFICATION** (from gate runner + PA) -- "The measured values are perceptible"

---

## 8. CONCRETE DELIVERABLE FORMAT

### 8.1 _build-plan.md Template (What TC Planner Outputs)

```markdown
# Build Plan: [Content Title]

## Metadata
- Zone count: [2-5]
- Metaphor: [name] (or FLAT MODE if no tension)
- Density pattern: [CRESCENDO/F-PATTERN/BENTO/PULSE]
- Mechanisms selected: [count] across [S/T/M/B/R] categories

## Zone Architecture
| Zone | Sections | Semantic Role | Background |
|------|----------|--------------|------------|
| 1    | S1-S3    | Warm intake  | #FEF5EB    |
| 2    | S4-S8    | Cool analysis | #F8F6F3   |
| 3    | S9-S12   | Warm output  | #FEF7F0    |

## Transition Table
| Boundary | bg delta | font-size | font-weight | letter-spacing | border-left | p-margin | channels |
|----------|----------|-----------|-------------|---------------|-------------|----------|----------|
| ->S1     | n/a      | 17px      | 400         | 0.02em        | none        | 20px     | n/a      |
| S1->S2   | -27 RGB  | same      | same        | same          | ADD 3px tan | same     | 2 FAIL   |

(Planner iterates until ALL boundaries show >= 3 channels.)

## Mechanism Deployment
```yaml
mechanisms:
  spatial:
    - name: "progressive-density"
      zones: [S1-S3: sparse, S4-S8: dense, S9-S12: moderate]
      css: "Increase content-per-viewport from ~40% to ~70% to ~55%"
  hierarchy:
    - name: "border-weight-modulation"
      zones: [S2: 3px tan, S5: 4px red, S7: 3px dark]
      css: "border-left on .page-container within zone"
  ...
```

## Component Adoption
```yaml
components:
  - class: ".callout .callout--info"
    sections: [S3, S5]
    count: 2
  - class: ".callout .callout--gotcha"
    sections: [S7]
    count: 6
  ...
total_families: 8
target: ">= 10"
additional_candidates: [".pull-quote for S2", ".sequence-block for S8"]
```

## Builder Warnings
- S7 has 6 tension/resolution pairs -- use grid layout to prevent 6 full-width blocks
- S8 sequence blocks need visual differentiation from S7 callouts (different bg tint)
- S11 tables are wide -- ensure responsive overflow handling
```

### 8.2 operational-recipe.md Phase Example (What Builder Executes)

```markdown
## PHASE 3: Zone Backgrounds

**INPUT:** Zone-to-color assignments from _build-plan.md
**ACTION:** Set each zone's background-color.
**OUTPUT:** Zones visually distinguishable without dev tools.

Apply these CSS rules (adapt hex values from build plan):

```css
.zone-s1 { background-color: var(--color-zone-s1); }
.zone-s2 { background-color: var(--color-zone-s2); }
/* ... for each zone ... */
```

In `:root`, set zone variables from build plan's Zone Architecture table:
```css
--color-zone-s1: #FEF5EB;
--color-zone-s2: #F5EDE2;
/* ... matching build plan exactly ... */
```

>>> PERCEPTION GATE (BLOCKING):
Open at 1440px. Scroll from first zone to last zone.
Can you distinguish AT LEAST 3 zone transitions without a color picker?
- YES -> Proceed to Phase 4.
- NO -> Increase RGB deltas until >= 15 between adjacent zones.
  Measure: |R1-R2| + |G1-G2| + |B1-B2| for each adjacent pair.
  If build plan colors are too close, OVERRIDE with wider deltas
  and note the override in your build log.
```

---

## 9. DESIGN DECISIONS SUMMARY

| # | Decision | Rationale |
|---|----------|-----------|
| D-1 | Recipe format with YAML data blocks | Proven (2 experiments), combines sequential instructions with structured lookup |
| D-2 | Builder receives OPERATIONAL CONSEQUENCES, not declarative reasoning | Declarative reasoning is planner's domain; builder needs CSS property names and values |
| D-3 | Transition table is the PRIMARY compositional artifact | Translates multi-coherence from abstract principle to cell-by-cell execution |
| D-4 | TC planner produces transition table, builder PROVES it via cascade value table | Separates PLAN from PROOF, enables gate runner verification |
| D-5 | Per-agent memory briefs (~25-40 lines each) | Role-specific context prevents the 75-line visibility cap and the "everyone gets everything" bloat |
| D-6 | Phase-appropriate micro-formats (code blocks, YAML tables, prose, binary checklists) | Different phases need different format affordances; one format doesn't fit all |
| D-7 | Mechanism catalog routed to builder (FULL file) but PRIMARY only at Phase 6 | Builder needs application modes for creative deployment, but not for mechanical phases |
| D-8 | Perception thresholds embedded INLINE at point of use, not as separate reference | Reduces cross-referencing, catches violations at the moment they would occur |
| D-9 | SPECIFICITY > LENGTH as the governing principle | 100 specific lines (Middle: 4/4) beat 963 abstract lines (Flagship: 1.5/4) |
| D-10 | _build-plan.md is a STRUCTURED document with YAML blocks, not free-form prose | Prevents the 50:1 compression loss that destroyed compositional intelligence in the master prompt |

---

## 10. INTERACTION WITH OTHER DESIGN REPORTS

### Dependencies
- **Task #15 (YAML/Structured Gates):** This report's YAML data blocks should align with whatever gate format Task #15 recommends. If gates become YAML-defined, the transition table can feed directly into gate verification.
- **Task #17 (Recipe Phase Restructuring):** This report assumes 9 phases (matching the remediation). If Task #17 restructures phases, the per-phase file routing (Section 4.3) must update.
- **Task #19 (Programmatic Phase Enforcement):** The transition table (Section 7) is the artifact that enables programmatic enforcement. The gate runner can compare the planner's PLAN values against the builder's PROOF values.

### What This Report Does NOT Address
- The specific content of operational-recipe.md (that's the recipe extraction task)
- The gate runner's implementation (Task #19)
- Whether TC's Phase 4 should merge with the recipe's Phase 6 (Task #17)
- How skills invoke each other (Tasks #25, #26)

---

## 11. RISK ASSESSMENT

**RISK-1: Builder context window overflow.**
6 files at ~1,150+ lines. If the builder's context fills with reference material, creative capacity for CSS composition diminishes. MITIGATION: Recipe is PRIMARY (always in context). Reference files (mechanism catalog, component library) are consulted per-phase, not loaded fully.

**RISK-2: Transition table rigidity.**
If the planner specifies exact hex values and the builder discovers they don't work (e.g., a certain background clashes with component tints), the builder must feel empowered to OVERRIDE with wider deltas. MITIGATION: Recipe explicitly grants override authority with logging requirement.

**RISK-3: YAML parsing errors.**
LLM builders parsing YAML data blocks may occasionally misread indentation or quoting. MITIGATION: Keep YAML blocks FLAT (no nesting deeper than 2 levels), use explicit quotes around hex values.

**RISK-4: Over-specification kills compositional fluency.**
The remediation builder got PA-05 2.5/4, not 4/4. The gap between COMPOSED and DESIGNED may require creative latitude that a 650-line recipe doesn't provide. MITIGATION: Phase 6 (element-level richness) is deliberately LESS specified than other phases, giving the builder space for creative deployment within the mechanism catalog's options.

---

## 12. VERDICT

The builder visibility design is:

1. **Recipe format** with YAML data blocks (proven by 2 experiments)
2. **Transition table** as the primary compositional artifact (from planner to builder)
3. **Per-agent memory briefs** (~25-40 lines per role)
4. **Phase-appropriate micro-formats** (code/YAML/prose/checklist matched to phase needs)
5. **FULL mechanism catalog** routed to builder (not just planner)
6. **Inline perception thresholds** at point of use (not separate reference file)
7. **6-file input set** (~1,150 lines primary + reference files)
8. **Override authority** with logging for when plan values don't work in practice

The builder should NEVER see declarative reasoning ("multi-coherence is important because..."). The builder should ALWAYS see operational consequences ("at S2->S3 boundary, change bg by -20 RGB, add 3px border-left, increase font-weight by 200").

**The transition table is the bridge between the telescope and the microscope.** The planner fills it with compositional intelligence in operational form. The builder executes it cell by cell. The gate runner verifies the measured values match. The PA auditors verify the visual result looks designed.

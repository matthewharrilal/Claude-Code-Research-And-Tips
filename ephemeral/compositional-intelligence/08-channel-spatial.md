# Channel 3: Spatial — How Spacing/Whitespace Coherence Operates in PV2

**Agent:** Spatial Channel Tracer (Opus)
**Task:** #8 / #40
**Date:** 2026-02-19
**Files Read:** PV2-PIPELINE-DIAGRAM.md, tension-composition/SKILL.md (Phases 0-4, guardrails), mechanism-catalog.md (full), semantic-rules.md (full), tokens.css (spacing tokens)

---

## Executive Summary

PV2 treats spatial behavior as a **ceiling to prevent failure** (<=108px stacked gap) rather than as a **compositional channel to reinforce meaning**. The pipeline specifies WHERE gaps must not exceed thresholds but never specifies WHY different sections should receive different spacing. The spatial channel is the widest gap between PV2's stated ambition ("ALWAYS FLAGSHIP") and its operational specification. Spacing is the only channel where the pipeline's guidance is purely prohibitive (no big gaps) with zero generative instruction (what spatial rhythm should express).

**Core finding:** PV2 has a CEILING (108px stacked, 96px per-property) but no FLOOR OF MEANING. A builder can satisfy every spatial gate by using 32px uniformly everywhere. That passes SC-10. It also produces a page with zero spatial intelligence. The gap is not threshold absence — it is semantic direction absence.

---

## 1. What PV2 Specifies for Spatial Behavior

### 1.1 Explicit Spatial Specifications (What Exists)

PV2 addresses spatial behavior in these locations:

**Tokens (vocabulary/tokens.css lines 96-120):**
- 12-value spacing scale from 4px to 96px
- 3 semantic aliases: `--space-within` (8px), `--space-between` (32px), `--space-chapter` (64px)
- 2 maxima: `--space-max-section` (64px), `--space-max-zone` (96px)
- Explicit stacking warning: "Stacking two 96px margins creates 192px of void"

**Programmatic Gate SC-10:**
- Stacked gap <= 108px total at any section boundary
- Measured via Playwright getComputedStyle
- BLOCKING — any violation fails the build

**Perception Thresholds (planned perception-thresholds.md):**
- Stacked gap <= 108px (spatial channel ceiling)
- Part of 6-channel definition: Chromatic, Typographic, Spatial, Structural, Behavioral, Material

**Builder Recipe Phase 3 (Zone Backgrounds):**
- "Can you SEE the zone boundaries without borders?" — spatial perception self-check
- No spatial-specific CSS values prescribed beyond "apply background colors per zone"

**Builder Recipe Phase 4 (Borders + Transitions):**
- 3+ transition types: SMOOTH/BRIDGE/BREATHING
- Mandates variety but not spatial rationale for which type goes where

**TC Skill Guardrails (Phase 4.0):**
- Container width 940-960px (NON-NEGOTIABLE)
- Min horizontal padding 32px per side
- Compression ratio ceiling: deepest padding >= 40% of shallowest padding
- Min section breathing zone: 48px
- CPL 45-80 characters

**Mechanism Catalog Spatial Mechanisms (#5, #6, #15):**
- #5 Dense/Sparse Alternation (INHALE/EXHALE rhythm)
- #6 Width Variation (channel/pool horizontal rhythm)
- #15 Bento Grid (variable span layout)

**Transition Grammar (mechanism-catalog.md lines 944-1026):**
- 3 transition types: HARD CUT (3px border), SPACING SHIFT (padding gradient), CHECKPOINT (labeled boundary)
- Selection rule: different domain = HARD CUT, different intensity = SPACING SHIFT, different phase = CHECKPOINT
- Maximum transition spacing: 96px total vertical space

**Semantic Rules (Gap 4: Breathing-Room Zone Triggers):**
- Breathing-room zone: between major sections, <=3 sentences, >=48px padding
- Sparse zone: <=2 paragraphs per viewport, 40-80px padding
- Dense zone: 4+ paragraphs/code/tables, 16-32px padding
- Trigger: section change + content <3 sentences = breathing-room

**Semantic Rules (Gap 6: Content Density Floors):**
- Minimum content per zone (3+ paragraphs or 2+ components for dedicated zone)
- Maximum consecutive empty viewport height: <30% content coverage = FAIL
- Zone count ceiling by content volume

### 1.2 What PV2 Does NOT Specify (The Gaps)

Despite this apparent comprehensiveness, PV2 is **silent on the following spatial questions:**

**GAP S-1: Spatial Semantic Direction**
There is no instruction connecting spacing VALUES to content MEANING. The tokens provide a scale (4px to 96px). The guardrails provide floors and ceilings. But nothing says: "Introductory content gets generous spacing BECAUSE the reader is orienting" or "Dense technical content gets tight spacing BECAUSE familiarity enables compression."

The mechanism catalog's spacing compression (#4) describes the TECHNIQUE (inverse density-confidence) but the recipe does not invoke it with semantic direction. A builder who reads the recipe alone gets "apply background colors" and "use 3+ transition types" — but never "spacing should REINFORCE the content's semantic direction."

**GAP S-2: Spatial Rhythm Selection Logic**
PV2 specifies density patterns (CRESCENDO/F-PATTERN/BENTO/PULSE) in the TC Skill but these are planning-layer concepts. The operational recipe (what the builder reads) does not contain spatial rhythm selection logic. The builder sees the build plan's zone count and background colors but may not see the density pattern that motivated them.

Specifically, the build plan outputs:
- Zone count (e.g., 4)
- Section inventory (which sections map to which zones)
- Background colors per zone
- Mechanism deployment per category

But nowhere in the build plan template is there a line for SPATIAL RHYTHM: "This page uses CRESCENDO — spacing should compress from 64px→32px→16px as the reader gains familiarity." The planner may derive this during TC Phases 1-3, but the artifact passed to the builder may not contain it.

**GAP S-3: Spacing Ratio Justification**
The semantic rules provide an excellent 3-question test (Q1: WHAT varies? Q2: WHY does it vary? Q3: WHY THESE SPECIFIC VALUES?) and even a SEMANTIC vs ARBITRARY example for section padding. But this test exists in `semantic-rules.md` which is loaded by auditors and guideline-phase agents, NOT by the builder during build execution.

The builder reads the operational recipe. The recipe has Phase 3 (Zone Backgrounds) and Phase 4 (Borders + Transitions). Neither phase says: "For each zone, justify your spacing values using the 3-question test." The test exists in the ecosystem but not in the builder's line of sight.

**GAP S-4: Stacked Gap Composition**
SC-10 checks that total stacked gap at any boundary is <=108px. But it measures the AGGREGATE without decomposing WHY the gap is composed the way it is. A 108px gap made of:
- 48px margin-bottom (section A closing)
- 12px border-area (transition element)
- 48px margin-top (section B opening)
is structurally rich (three components with distinct roles). A 108px gap made of:
- 108px margin-bottom (section A closing)
is structurally empty (one property doing no compositional work). SC-10 treats both identically.

**GAP S-5: Spatial Channel Reinforcement of Semantic Direction**
The core question from the task brief: does PV2 specify that "denser content gets tighter spacing"? That "breathing room should MEAN something"? The answer is: PARTIALLY. The mechanism catalog describes spacing compression (#4) and dense/sparse alternation (#5) as techniques. The semantic rules describe the inverse density-confidence pattern from OD-004. But these exist in reference files, not in the builder's sequential recipe.

The recipe's 9 phases are:
- Phase 0: Content Analysis + Zone Architecture
- Phase 1: HTML Skeleton
- Phase 2: CSS Reset + Soul + Base Typography
- Phase 3: Zone Backgrounds
- Phase 4: Structural Borders + Dividers + Transitions
- Phase 5: Typography Zones
- Phase 6: Element-Level Richness
- Phase 7: Accessibility
- Phase 8: Verification + Cascade Value Table

Phase 3 handles backgrounds. Phase 4 handles borders and transitions. But where is the SPACING phase? Spacing is distributed across multiple phases:
- Phase 2 sets base spacing (soul enforcement)
- Phase 3 implies zone padding (but focuses on background color)
- Phase 4 implies transition spacing (but focuses on borders)

There is no dedicated phase where the builder DESIGNS the spatial rhythm — where they set section-by-section padding values with semantic justification. Spacing is treated as a side-effect of other phases rather than a compositional decision in its own right.

---

## 2. How Spatial Intelligence Flows Through the Pipeline

### 2.1 Wave 0 (TC Planner): Spatial Decisions That Get Made

The TC planner, during Phases 0-3.5, makes spatial decisions implicitly:
- **Phase 0D:** Selects a density pattern (CRESCENDO/F-PATTERN/BENTO/PULSE) which implies spatial rhythm
- **Phase 1:** Multi-axis questioning may identify NAVIGATE needs ("How does the reader move THROUGH this content?") which have spatial implications
- **Phase 2:** Tension derivation may identify spatial tensions ("content wants horizontal comparison but system is vertical-dominant")
- **Phase 3:** Metaphor collapse produces structural isomorphisms that include spatial properties ("geological strata have depth = spacing compression")

These spatial decisions get encoded in the build plan's zone architecture and mechanism deployment. But the encoding is INDIRECT. The planner says "Zone 1 = introduction (sparse), Zone 2 = deep-dive (dense)" — and the builder must infer the spatial implications.

### 2.2 Wave 0.9 (Handoff Gate): What Gets Checked

The handoff gate checks 5 things:
1. Zone count 2-5
2. BG colors >= 15 RGB delta
3. >= 2 grid layouts
4. Per-category mechanism minimums (S/T/M/B/R: 1+)
5. >= 3 transition types planned

Check #1 validates zone COUNT (spatial structure exists). Check #5 validates transition VARIETY (spatial boundaries are varied). But no check validates:
- Are spacing values differentiated between zones?
- Does the spacing gradient match the content density gradient?
- Are the planned spatial values semantically justified?

A build plan could pass the handoff gate with: "4 zones, backgrounds 15+ RGB apart, 3 transition types" while specifying uniform 32px padding for all zones. The gate checks spatial STRUCTURE but not spatial MEANING.

### 2.3 Wave 1 (Builder): Where Spatial Decisions Get Made (or Lost)

The builder reads 6 files totaling ~1,150 lines. Of these:
- **operational-recipe.md** (~650 lines) — contains the 9-phase sequence
- **_build-plan.md** — contains zone architecture from TC
- **tokens.css** — contains the spacing scale
- **mechanism-catalog.md** — contains spatial mechanisms #5, #6, #15

The builder has ACCESS to spatial intelligence (mechanisms #4, #5, #6, #15 in the catalog) but no DIRECTIVE to deploy it as a coherent channel. The recipe says:
- Phase 3: "Apply background colors per zone" — focuses on chromatic, not spatial
- Phase 4: "3+ transition types" — focuses on structural variety, not spatial semantics

The builder must independently decide: "Zone 1 gets 64px padding because it's introductory. Zone 3 gets 24px because it's dense technical content." This decision is not prompted by the recipe. A compliant builder who follows all 9 phases in order may produce a page with uniform padding because no phase specifically asks them to VARY padding semantically.

### 2.4 Wave 2 (Verification): What Gets Caught

**Programmatic layer:**
- SC-10 catches stacked gaps > 108px
- SC-01 catches container width violations
- No gate checks spatial DIFFERENTIATION (are zones differently spaced?)
- No gate checks spatial DIRECTION (do spacing values correlate with content density?)

**Perceptual audit layer:**
- PA auditors may flag "uniform spacing" as a lack of visual rhythm
- But PA is post-build — a fix cycle, not a prevention mechanism
- The flagship experiment's 6 whitespace voids (210-276px each) were caught by PA but only after 90-150 minutes of build time

### 2.5 The Compression Chain

Here is the full trace of spatial intelligence from research to builder output:

```
RESEARCH (337 findings)
  ↓  OD-004: "confident=sparse 40px, uncertain=dense 16px" (inverse density-confidence)
  ↓  DD-001: "EXHALE sections 92px, INHALE sections 24px" (breathing rhythm)
  ↓  CD-006: "section padding variation by importance" (semantic spacing)
  ↓
TC SKILL (1,878 lines)
  ↓  Phase 0D: Density patterns (CRESCENDO/F-PATTERN/BENTO/PULSE)
  ↓  Phase 4.0: Compression ratio ceiling (40%), min section breathing (48px)
  ↓  Phase 4.1: Mechanism deployment includes Spatial category (S:1+)
  ↓  Guardrails: Container 940-960px, CPL 45-80
  ↓
BUILD PLAN (planner output)
  ↓  Zone count, section inventory, mechanism deployment
  ↓  Background colors per zone (chromatic channel)
  ↓  Transition plan (structural channel)
  ↓  ??? Spatial rhythm/padding plan ??? ← NOT in standard build plan template
  ↓
OPERATIONAL RECIPE (builder reads)
  ↓  Phase 3: Zone Backgrounds (chromatic, not spatial)
  ↓  Phase 4: Borders + Transitions (structural, not spatial)
  ↓  ??? Spatial phase ??? ← DOES NOT EXIST
  ↓
BUILDER OUTPUT
  ↓  Padding values = builder's independent judgment
  ↓  May or may not correlate with content density
  ↓  May be uniform (technically compliant, semantically empty)
  ↓
SC-10 GATE
  ↓  Checks: stacked gap <= 108px (ceiling)
  ↓  Does NOT check: spatial differentiation, rhythm, semantic direction
  ↓
PA AUDIT
  ↓  May flag: "uniform spacing," "no visual rhythm," "metronomic"
  ↓  Fix cycle: post-build remediation (expensive, ~30-60 min per cycle)
```

**The spatial channel loses semantic direction at the BUILD PLAN → OPERATIONAL RECIPE boundary.** The TC planner may derive spatial intent (CRESCENDO → sparse→dense→sparse). But the build plan template does not have a field for "spatial rhythm specification," and the recipe does not have a phase for "spatial design." Spacing becomes a builder judgment call rather than a planned, verified, and enforced compositional decision.

---

## 3. The Flagship Failure Through the Spatial Lens

The flagship's 6 whitespace voids (210-276px each) were the DOMINANT perceptual failure (9/9 auditors flagged). Analyzing this through the spatial channel:

### 3.1 What Happened

The flagship builder implemented:
- 4 trust zones with graduated density plan
- Each zone had checkpoint transitions (48-80px margins)
- 4 zones x graduated density = multiplicative whitespace accumulation
- Total transition whitespace: ~1,500-2,000px in transitions alone
- Zones 3-4 had structural containers but minimal content

### 3.2 Why SC-10 Would Not Have Caught It

SC-10 (<=108px stacked) measures gap at INDIVIDUAL boundaries. The flagship's gaps were often composed of:
- Zone N closing padding: ~64px
- Transition element: ~32px
- Zone N+1 opening padding: ~64px
- Total: 160px BUT distributed across 3 CSS properties

If the gate measures at the gap between the LAST element of Zone N and FIRST element of Zone N+1, it would catch 160px. But if it measures per-property (margin-bottom: 64px — PASS, margin-top: 64px — PASS), individual properties pass while the aggregate fails.

More critically: the 70-80% VOID was not a gap problem. It was an ALLOCATION problem. Zones 3-4 had elaborate spatial treatment (backgrounds, borders, padding) but insufficient content. The spatial architecture was ambitious; the content volume was insufficient. SC-10 checks gap SIZE at boundaries but not content DENSITY within zones.

### 3.3 What Was Missing

The flagship builder needed:
1. A spatial rhythm specification in the build plan: "CRESCENDO — 64px intro, compress to 24px at deep-dive, breathe at 48px for conclusion"
2. A content-density gate: "Before assigning zone padding, verify content fills the zone at minimum density" (this exists in semantic-rules.md Gap 6, but was not in the recipe)
3. A spatial verification phase: "Phase 3.5: For each zone, state WHY this padding value. Reference content density."

---

## 4. Evidence from Successful Pages

### 4.1 CD-006 (39/40)

CD-006 used spatial rhythm intentionally:
- Section padding varied by importance (not uniform)
- Breathing zones between major sections used >=48px
- Dense technical sections used compressed padding
- Width variation: paragraph max-width 70ch vs full-width containers

CD-006 was built by Opus WITHOUT a formal recipe. The builder had compositional fluency — understanding that spacing MEANS something. PV2's challenge is encoding this fluency in a recipe that a builder without innate spatial intelligence can follow.

### 4.2 Middle Experiment (PA-05 4/4 DESIGNED)

The middle experiment used F-PATTERN with sparse→dense→breathing→dense zone progression:
- Zone backgrounds encoded section type (sparse=#FEF9F5, dense=#FFFFFF, breathing=#FAF5ED)
- Spacing varied across zones (not documented precisely)
- Achieved "spatial balance" as 1/4 PA-05 sub-criteria

The middle experiment's recipe was ~100 lines with action verbs. It succeeded partly because the recipe was specific: "Read/Select/Deploy/Assess" — not "Verify/Fail if/Must be." But even the middle recipe did not contain explicit spatial rhythm directives.

### 4.3 OD-004 (Geological Confidence)

OD-004 demonstrated the IDEAL spatial channel behavior:
- `--stratum-established-padding: 40px` (sparse — high certainty)
- `--stratum-probable-padding: 32px` (moderate)
- `--stratum-speculative-padding: 24px` (moderate-dense)
- `--stratum-open-padding: 16px` (dense — low certainty)

This is SEMANTIC spacing: the padding values ENCODE the content's semantic dimension (confidence). This is precisely what PV2 fails to specify for builders. OD-004's creator understood that spacing is not just "how much room" but "what this room MEANS."

---

## 5. Specific Deficiencies and Recommendations

### DEFICIENCY S-1: No Spatial Phase in the 9-Phase Recipe

**Problem:** The 9-phase builder recipe handles backgrounds (Phase 3), borders (Phase 4), and typography (Phase 5) as dedicated phases. Spacing has no dedicated phase — it's distributed as a side-effect.

**Evidence:** Phases 3, 4, and 5 each have dedicated CSS focus. Spacing is expected to emerge from zone assignment and transition selection. But backgrounds, borders, and typography all have explicit "Can you SEE?" perception checks. Spacing has no equivalent "Can you FEEL the rhythm?" check.

**Recommendation:** Add a Phase 3.5 (Spatial Rhythm) between Zone Backgrounds and Structural Borders:

```
Phase 3.5: Spatial Rhythm
  - For each zone, SET section padding from the spacing scale.
  - JUSTIFY each value: "Zone 1 gets 64px because [content is introductory, reader is orienting]."
  - VERIFY compression ratio: densest zone padding >= 40% of sparsest.
  - VERIFY semantic direction: spacing should correlate with content density.
  - "Can you FEEL the density change between zones?"
  - Required deliverable: Spatial map (zone → padding → justification)
```

### DEFICIENCY S-2: Build Plan Missing Spatial Rhythm Specification

**Problem:** The TC planner derives a density pattern (CRESCENDO/F-PATTERN/BENTO/PULSE) but the build plan template does not have a dedicated field for spatial rhythm.

**Evidence:** Build plan outputs (from PV2 diagram lines 152-160): zone count, section inventory, mechanism deployment, background colors, isomorphism table, transition plan, builder warnings. No "spatial rhythm specification" field.

**Recommendation:** Add to the build plan template:

```
SPATIAL RHYTHM:
  Pattern: [CRESCENDO/F-PATTERN/BENTO/PULSE]
  Zone padding values: Zone 1 = Xpx, Zone 2 = Ypx, ...
  Compression direction: [sparse→dense | pulse | uniform-moderate]
  Semantic rationale: "Spacing encodes [content density / reader familiarity / structural depth]"
```

This ensures the planner's spatial intelligence SURVIVES the handoff to the builder.

### DEFICIENCY S-3: SC-10 Checks Ceiling but Not Differentiation

**Problem:** SC-10 verifies that no stacked gap exceeds 108px. It does NOT verify that spacing is DIFFERENTIATED across zones. A page with uniform 32px padding everywhere passes SC-10 but has zero spatial intelligence.

**Evidence:** SC-10 gate definition: "Stacked gap <= 108px total." No complementary gate for spatial variation.

**Recommendation:** Add SC-13 (Spatial Differentiation):

```
SC-13: Spatial Differentiation
  Measure: padding-top + padding-bottom for each zone
  Threshold: At least 2 distinct padding values across zones
  Threshold: Maximum padding >= 1.5x minimum padding
  Rationale: Ensures spatial rhythm exists, not just spatial ceiling
```

This is a LOW bar — it only requires that spacing is NOT uniform. Any semantic direction (compression, alternation, progression) would pass. But it catches the case where a builder uses identical padding everywhere.

### DEFICIENCY S-4: Semantic Value Framework Not in Builder's Reading Path

**Problem:** The 3-question test in semantic-rules.md (Q1: WHAT varies? Q2: WHY? Q3: WHY THESE VALUES?) is excellent for spatial reasoning. But it exists in a guideline file read by auditors, not in the operational recipe read by builders.

**Evidence:** Builder reads: operational-recipe.md + _build-plan.md + tokens.css + prohibitions.md + merged-components.css + mechanism-catalog.md. semantic-rules.md is in the auditor/guideline pathway, not the builder pathway.

**Recommendation:** Embed the spatial instance of the 3-question test DIRECTLY in the recipe's spatial phase:

```
Phase 3.5 self-check:
  For each zone's padding value:
    Q1: WHAT varies? (padding: Xpx → Ypx)
    Q2: WHY? (content density decreases / reader familiarity increases / metaphor depth shifts)
    Q3: WHY THESE VALUES? (64px intro = sparse ocean / 24px technical = compressed reference /
        ratio 64:24 = 2.67:1 which is within 40% compression ceiling)
```

### DEFICIENCY S-5: Transition Types Lack Spatial Specification

**Problem:** The transition grammar defines 3 types (HARD CUT, SPACING SHIFT, CHECKPOINT) with qualitative descriptions. But it does not specify the SPATIAL BUDGET for each type.

**Evidence:** Transition grammar says "SPACING SHIFT: intermediate spacing between sparse and dense." But what IS intermediate? The builder must guess. For CHECKPOINT: "16px 24px padding" — this is more specific but applied only to the checkpoint element, not to the total transition gap.

**Recommendation:** Specify spatial budgets per transition type:

```
HARD CUT: total spatial budget = 32-48px (compact break: section A closing margin + 3px border + section B opening margin)
SPACING SHIFT: total spatial budget = 48-64px (gradual: padding change IS the transition)
CHECKPOINT: total spatial budget = 64-96px (labeled: 16px checkpoint padding + section margins)
```

With budgets, the builder can compose transitions within known spatial constraints rather than guessing.

### DEFICIENCY S-6: No Spatial Direction Connector Between Metaphor and Values

**Problem:** When a metaphor is "geological strata," the spatial direction is implied: deeper = denser = less padding. But the pipeline does not explicitly connect metaphor → spatial direction → specific token values.

**Evidence:** The isomorphism table maps metaphor properties to CSS mechanisms but not to specific SPATIAL VALUES. A mapping like "consolidation pressure → spacing compression" identifies the mechanism (#4) but not the values (surface=64px, bedrock=24px).

**Recommendation:** In the build plan's isomorphism table, add a SPATIAL COLUMN:

```
| Metaphor Property | Content Property | CSS Mechanism | Spatial Value |
|---|---|---|---|
| Surface layer | Introduction | Zone background | padding: 64px |
| Sediment | Core content | Spacing compression | padding: 32px |
| Bedrock | Deep reference | Zone background + compression | padding: 24px |
```

This makes the planner's spatial reasoning EXPLICIT and transferable to the builder.

---

## 6. The Deeper Problem: Spacing as Meaning

The flagship's whitespace voids were treated as a SPACING PROBLEM: "gaps too big, make them smaller." The remediation reduced padding. But the real problem was a MEANING PROBLEM: "gaps don't mean anything."

In OD-004, spacing MEANS confidence level. In DD-001, spacing MEANS breathing rhythm (INHALE/EXHALE). In CD-006, spacing MEANS section importance. In the flagship, spacing meant nothing — it was architectural allocation without semantic content.

PV2's 108px ceiling prevents CATASTROPHIC voids (the 210-276px flagship failures). This is necessary. But it is not sufficient. A page with all gaps at 96px (ceiling-compliant) would still feel like a parking garage — geometrically correct, experientially dead.

The pipeline needs spatial DIRECTION, not just spatial LIMITS. The builder needs to know not just "no gap bigger than 108px" but "your spacing should tell the reader WHERE they are in the content's journey."

This is the gap between spatial COMPLIANCE (passes SC-10) and spatial INTELLIGENCE (spacing reinforces meaning). PV2 specifies the former comprehensively. The latter is present in the reference materials (semantic-rules.md, mechanism-catalog.md) but absent from the builder's operational pathway (recipe phases, build plan, programmatic gates).

---

## 7. Relationship to Other Channels

**Chromatic + Spatial:** Background colors shift at zone boundaries (chromatic). Spacing should shift at the SAME boundaries to reinforce the zone change. If Zone 1 is warm cream (#FEF9F5) with 64px padding and Zone 2 is cool white (#FFFFFF) with 24px padding, the reader perceives TWO simultaneous shifts (color + density). PV2 specifies the chromatic shift (>=15 RGB delta) but not the correlated spatial shift.

**Typographic + Spatial:** Typography zones (display/body/detail) imply spatial zones. Display typography (28-36px) with generous spacing creates openness; detail typography (13-14px) with tight spacing creates density. PV2 specifies typography zones (Phase 5) separately from spatial zones (no dedicated phase), missing the reinforcement opportunity.

**Structural + Spatial:** The transition grammar (HARD CUT/SPACING SHIFT/CHECKPOINT) is fundamentally a structural+spatial fusion — borders AND spacing define boundaries. This is PV2's BEST spatial specification because it is embedded in structural decisions that the builder already must make. The weakness is that it only applies at BOUNDARIES, not within zones.

**Key multi-coherence insight:** The >=3 channel simultaneous shift rule (from the multi-coherence specification) means that at every major zone boundary, chromatic + typographic + spatial should all shift together. PV2 specifies chromatic shift (SC-09: >=15 RGB), typographic shift (SC-11: >=2px font-size delta), but has no spatial shift threshold at boundaries. Adding a spatial delta threshold (e.g., >=16px padding difference between adjacent zones) would complete the 3-channel coherence at boundaries.

---

## 8. Summary: What the Spatial Channel Needs

| Priority | What | Why | Effort |
|----------|------|-----|--------|
| **BLOCKING** | Spatial phase in recipe (Phase 3.5) | Builder has no phase to DESIGN spacing | Recipe edit (~20 lines) |
| **BLOCKING** | Spatial rhythm field in build plan | Planner's spatial intent doesn't survive handoff | Template edit (~10 lines) |
| **HIGH** | SC-13 spatial differentiation gate | Uniform spacing passes all current gates | Gate addition (~30 lines JS) |
| **HIGH** | 3-question test embedded in recipe | Semantic framework exists but not in builder path | Recipe edit (~15 lines) |
| **MEDIUM** | Spatial budgets per transition type | Transition grammar lacks spatial specification | Catalog edit (~15 lines) |
| **MEDIUM** | Spatial column in isomorphism table | Metaphor → spatial values connection missing | Template edit (~5 lines) |
| **LOW** | Spatial delta at zone boundaries | Multi-coherence with chromatic+typographic | Gate addition or recipe note |

The spatial channel is PV2's weakest compositional channel — not because it lacks thresholds, but because it lacks direction. The fix is not more rules but more MEANING: making spacing a deliberate compositional decision rather than an emergent side-effect of zone architecture.

---

*Report complete. 08-channel-spatial.md written to ephemeral/compositional-intelligence/.*

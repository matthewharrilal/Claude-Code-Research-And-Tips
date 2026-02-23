# 05 -- Content-Form Routing: What Replaces the TC Brief

**Agent:** content-router (Opus 4.6)
**Date:** 2026-02-22
**Task:** #5 -- Design the content-form routing mechanism
**Sources:** 44-lost-knowledge.md, 45-beyond-eight-integration.md, 47-mechanism-provenance.md, 48-chromatic-arc-provenance.md, TC SKILL.md (Phases 0-4.5), conventions-brief.md, Gas Town _tc-brief.md

---

## EXECUTIVE SUMMARY

The current TC brief is a 99-line document produced by a 5-phase pipeline (~1,800 lines of skill specification) that creates an 83:1 compression ratio from the full knowledge base. It performs THREE distinct functions conflated into one artifact:

1. **Content analysis** -- what the content IS (structure, sections, tensions)
2. **Compositional routing** -- which mechanisms to deploy WHERE
3. **Implementation recipe** -- specific CSS values, hex codes, padding sizes

The Gas Town provenance chain (Reports 47, 48) reveals that the TC brief SUCCEEDED at function 1 (4 zones, correct content mapping, genuine tensions) and function 2 (15/18 mechanisms selected, content-to-mechanism mapping correct) but FAILED at function 3 (zone background hex values all sub-perceptual, builder had to override using conventions brief physics). The builder self-corrected because the conventions brief provided world-law knowledge that the TC brief lacked.

**The design principle:** Split the three functions. Content analysis and compositional routing stay in the TC process. Implementation values move to the builder, who has both the TC routing AND the conventions brief physics to generate correct values.

---

## PART 1: WHAT THE TC BRIEF ACTUALLY DOES (Functional Decomposition)

### 1.1 The Three Functions in the Current 99-Line Brief

Analyzing the Gas Town TC brief (`_tc-brief.md`) line by line:

| Section | Lines | Function | What It Contains | Builder Dependency |
|---------|-------|----------|------------------|--------------------|
| 1. Structural Metaphor | 1-14 | ROUTING | Metaphor name, quality score, CSS direction mapping, BECAUSE justification, risk notes | Builder needs the metaphor and CSS direction mapping |
| 2. Zone Architecture | 15-24 | ANALYSIS + ROUTING | Zone table (name, density, content, pacing, layout, direction), boundary transition types | Builder needs zone count, content mapping, density, directions |
| 3. Content Tensions | 25-33 | ANALYSIS | Tension table (axis, poles, dominance) | Builder does NOT need this -- tensions are CONSUMED by metaphor selection, not by building |
| 4. Selected Mechanisms | 34-59 | ROUTING | 15 mechanisms with category, zone, metaphor role, visibility. Pairs. Rejected mechanisms | Builder needs mechanism list and zone assignments |
| 5. Metaphor-Implied CSS | 60-67 | IMPLEMENTATION | Page/section/component/character CSS directions with specific values | Builder partially needs -- directions YES, specific values QUESTIONABLE |
| 6. Build Recipe | 68-87 | IMPLEMENTATION | Per-zone hex codes, padding values, mechanism deployments, boundary CSS channel counts | Builder needs deployment sequence; specific hex/padding values are where FAILURES occur |
| 7. Detection Expectations | 88-92 | VALIDATION (weaver only) | Squint test description per zone | Builder does NOT need -- this is for the post-build PA weaver |
| 8. Builder Anchors | 93-99 | IMPLEMENTATION | 3 critical execution anchors | Builder needs these as high-salience warnings |

### 1.2 What Succeeded vs. Failed

**SUCCEEDED (builder used as-is):**
- Metaphor: "Command Post / Field Dispatch" -- builder internalized this and used it to drive every CSS decision (Report 41: 60-70% of output from Opus native, calibrated by metaphor)
- Zone architecture: 4 zones, content mapping, density arc -- builder reproduced exactly
- Mechanism selection: 15 mechanisms selected, builder deployed all 15 plus invented 5 more
- Mechanism-to-zone assignment: all mechanisms appeared in their assigned zones
- Boundary transition types: HARD CUT / SPACING SHIFT / CHECKPOINT -- builder translated these into CSS

**FAILED (builder had to override):**
- Zone background hex values: TC brief specified #FEF9F5/#F5F0E8/#FAF5ED/#FEF9F5 (max deltas: 13, 5, 8 -- all sub-perceptual). Builder overrode to #FEF9F5/#F0EBE3/#E8E0D4/#F5F0E8 (deltas: 18, 15, 20)
- Footer border weight: TC brief implied 1px (conventions brief said quieter footer). Builder used 3px (metaphor bookend symmetry)
- Padding specifics: TC brief said 64/40/32/48px. Builder used these but adapted internal component padding per-zone (parametric echo) which TC brief did not specify

### 1.3 The Root Cause of Implementation Failures

The TC pipeline (Phases 0-4) does NOT have access to the conventions brief's perception physics. The TC skill runs with:
- Content file (input)
- Identity constraints (prohibitions.md, tokens.css) -- loaded by /build-page before TC invocation
- The TC SKILL.md itself (1,800+ lines of pipeline specification)

It does NOT have:
- Conventions brief Section 2 (perception thresholds: >= 15 RGB, >= 0.025em, <= 120px stacked)
- Conventions brief Section 4 (multi-coherence recipe with concrete CSS)
- Conventions brief Section 5 (fractal echo recipe with per-scale CSS values)
- Conventions brief Section 8 (CSS vocabulary with copy-paste-ready recipes)

The TC pipeline has its OWN perception thresholds (Phase 4.0 guardrails), but these are CHECK-AT-BUILD-TIME rules, not GENERATE-AT-BRIEF-TIME rules. The TC brief author generates hex values from aesthetic intuition + metaphor logic, not from perceptual physics.

**This is the fundamental architectural flaw:** the TC brief generates implementation values WITHOUT the knowledge needed to generate CORRECT implementation values.

---

## PART 2: THE DUAL-CHANNEL ARCHITECTURE

### 2.1 Two Information Flows

The Gas Town provenance chain reveals that successful building requires TWO kinds of information flowing to the builder simultaneously:

**Channel A: Content-Specific Composition (through TC process)**
- What metaphor organizes this page
- How many zones, what content maps where
- Which mechanisms serve this specific content
- What semantic directions apply at each boundary
- What layout topologies serve each zone's content type

**Channel B: Universal Constraints (bypass TC, go direct to builder)**
- Perception thresholds (>= 15 RGB, >= 0.025em, <= 120px)
- CSS recipes (boundary-by-boundary multi-coherence recipe)
- Component DNA (2-zone label/body pattern)
- Closed vocabularies (border weights, spacing scale, color palette)
- Soul constraints (border-radius: 0, box-shadow: none, etc.)

Channel B is already the conventions brief. It bypasses the TC process entirely and goes straight to the builder. The conventions brief was DESIGNED as Channel B -- Report 45 confirms: "51% world-description, 31% constraints, 16% recipes, 5% creative authority."

Channel A is what the TC process provides. The question is: what FORMAT should Channel A take, and what should it contain?

### 2.2 The Current Bleed Between Channels

The current TC brief bleeds Channel B information into Channel A. Specifically:
- Hex values for zone backgrounds (Channel B: conventions brief provides the recipe and thresholds)
- Specific padding values (Channel B: spacing scale is in tokens.css)
- Border weight assignments (Channel B: 3-tier system is in conventions brief)

This bleed causes TWO problems:
1. **Compression loss:** The TC brief compresses Channel B knowledge (perception thresholds, recipes) into specific values, losing the physics behind them
2. **Contradiction risk:** When TC brief values violate Channel B rules (as happened with zone backgrounds), the builder must detect and resolve the contradiction

### 2.3 The Clean Split

**Channel A (TC brief) should contain ONLY:**
- Metaphor + BECAUSE justification
- Zone architecture (count, names, content mapping, density, directions)
- Mechanism selection (which mechanisms, which zones, metaphor role)
- Semantic directions at boundaries (DEEPENING, OPENING, etc.)
- Content-specific builder anchors (what makes THIS page unique)

**Channel A should NOT contain:**
- Hex values for backgrounds
- Specific padding/spacing values
- Specific font sizes or letter-spacing values
- Boundary CSS channel counts (the builder calculates these from the conventions brief recipe)

**Channel B (conventions brief) already contains:**
- How to translate "DEEPENING" into CSS (Section 4: typographic progression per semantic direction)
- What hex values to use for zone backgrounds (Section 4: concrete 4-zone example with RGB deltas)
- How to build boundary-by-boundary (Process section: boundary CSS recipe)
- Perception thresholds that all values must pass (Section 2)

---

## PART 3: WHAT MUST FLOW FROM CONTENT ANALYSIS TO BUILDER

### 3.1 The Minimum Viable Routing (7 Elements)

These are the IRREDUCIBLE elements that ONLY the content analysis can provide -- the builder cannot derive them from the content alone or from the conventions brief alone:

| # | Element | Why Only TC Can Provide | Format | Size |
|---|---------|------------------------|--------|------|
| 1 | **Metaphor** | Requires the 5-phase derivation process (tension analysis, structural overlap, candidate search, scoring) | Name + 1-sentence BECAUSE + CSS direction mapping | 3-5 lines |
| 2 | **Zone Architecture** | Requires content structure analysis + metaphor mapping | Table: zone name, density, content sections, semantic direction | 5-8 lines |
| 3 | **Boundary Transitions** | Requires understanding of cognitive distance between zones | Type per boundary: SMOOTH / BRIDGE / BREATHING | 1-3 lines |
| 4 | **Mechanism Selection** | Requires matching content features to mechanism capabilities | Table: mechanism #, zone, metaphor role | 8-12 lines |
| 5 | **Mechanism Pairs** | Requires understanding which semantic dimensions need dual encoding | 2-3 pairs with shared semantic dimension | 2-3 lines |
| 6 | **Content-Specific Anchors** | Requires deep content reading to identify singular moments | 2-3 critical anchors (e.g., "core quote = ONLY solid-offset element") | 3-5 lines |
| 7 | **Rejected Mechanisms** | Requires knowing what the catalog offers and why it doesn't fit | 3+ rejections with reasoning | 2-3 lines |

**Total: ~25-40 lines.** Less than half the current 99-line TC brief.

### 3.2 What Should NOT Flow Through TC

These currently appear in the TC brief but should be REMOVED:

| Element | Why Remove | Where It Lives Instead |
|---------|-----------|----------------------|
| **Hex values for zones** | TC pipeline lacks perception physics; values often sub-perceptual | Builder derives from conventions brief Section 4 recipe + perception thresholds |
| **Specific padding values** | Duplicates spacing scale in tokens.css; TC values are approximations | Builder selects from token scale using conventions brief's density recipes |
| **Boundary channel counts** | Builder calculates from transition type + conventions brief Section 7 mapping | Conventions brief Table: SMOOTH=1-2, BRIDGE=3-4, BREATHING=4-5 |
| **Top 5 CSS snippets** | Mixes routing (which mechanism) with implementation (specific CSS) | Builder writes CSS using mechanism catalog recipes + conventions brief values |
| **Detection expectations** | Weaver-only; builder never reads this | Move to PA/weaver prompt directly |
| **Tension table** | Consumed by metaphor selection, not by building | Archive in TC agent's reasoning log; does not enter brief |

### 3.3 What the Builder GAINS from This Split

By removing implementation values from the TC brief, the builder:
1. **Never encounters contradictory values** (TC hex vs. conventions brief threshold)
2. **Applies perception physics at generation time** (not retroactively correcting)
3. **Uses the conventions brief's CSS recipes directly** (copy-paste-ready, tested values)
4. **Has a simpler TC brief to read** (~35 lines vs. 99 lines -- under the 50-line attention horizon)
5. **Exercises creative authority** within physics constraints (not overriding TC-provided values)

---

## PART 4: SHOULD CONTENT-FORM COUPLING BE SINGLE-STEP OR MULTI-STEP?

### 4.1 The Current Architecture (Single TC Agent, Multi-Phase)

Currently: one TC agent runs Phases 0-4.5 sequentially, producing one brief. The /build-page orchestrator spawns a separate Opus agent for TC, receives the brief, and passes it to the builder.

**Advantage:** Single agent maintains coherence across all phases. The metaphor selected in Phase 3 naturally flows into mechanism selection in Phase 4.

**Disadvantage:** The TC agent has a ~1,800-line skill file to process. By Phase 4.5 (brief output), the agent is deep in context and may have lost Phase 1 precision. The brief output is a COMPRESSION of the agent's full reasoning, not the reasoning itself.

### 4.2 The Proposed Architecture (Two Steps)

**Step 1: Content Analysis + Metaphor Selection (Phases 0-3.5)**
Output: Metaphor commitment document (~15 lines)
- Metaphor name + BECAUSE
- Zone architecture table
- Boundary transition types
- Primary tension (for builder orientation, not compliance)

**Step 2: Mechanism Routing (Phase 4, informed by Step 1)**
Output: Mechanism routing document (~20 lines)
- Selected mechanisms with zone assignments and metaphor roles
- Mechanism pairs
- Content-specific anchors
- Rejected mechanisms with reasoning

**Combined output: ~35 lines = the new TC brief.**

### 4.3 Why Two Steps (Not Three or More)

Three or more steps introduce LATENCY and COORDINATION overhead that the current pipeline already suffers from. The TC process is already the bottleneck (the builder cannot start until TC completes). Adding more steps increases wall-clock time.

Two steps work because the natural break point is the METAPHOR LOCK (Phase 3.5). Before the lock, the process is EXPLORATORY (generating candidates, testing tensions). After the lock, the process is SELECTIVE (choosing mechanisms that serve the locked metaphor). These are cognitively distinct modes.

However: the two steps can be performed by THE SAME AGENT in sequence. There is no architectural need for separate agents. The separation is conceptual (for clarity of output), not operational (requiring separate invocations).

### 4.4 Recommendation

**Keep single TC agent. Split the OUTPUT into two clearly labeled sections:**

```
SECTION A: COMPOSITION (metaphor + zones + boundaries)
SECTION B: DEPLOYMENT (mechanisms + pairs + anchors + rejections)
```

The builder reads both. The conventions brief provides the implementation physics. No implementation values appear in the TC brief.

---

## PART 5: HOW CONTENT TYPE INFLUENCES PIPELINE BEHAVIOR

### 5.1 The Current Type Classification (Phase 0A)

The TC skill already classifies content into 4 types:
- **Prose-dominant** (<30% code/tables) -- STANDARD path
- **Mixed** (30-60% code/tables) -- HYBRID path
- **Visual-dominant** (>60% code/tables) -- PRESENTATION-INTRINSIC path
- **Self-referential** -- ABORT (content IS the design system)

### 5.2 What Content Type Should Actually Change

Content type should influence TWO things and leave everything else unchanged:

**1. Metaphor search space.** Prose-dominant content has richer tension potential (FEEL, RECONCILE, BECOME axes yield genuine tension). Code/data-dominant content has shallower tension (UNDERSTAND, DO, NAVIGATE dominate -- lower opposition to KortAI's personality). The TC skill's axis interaction effects and tension landscape already account for this.

**2. Zone density arc.** Prose content naturally supports a density arc (sparse opening -> dense analysis -> moderate resolution). Data-heavy content resists density variation (tables and code blocks have inherent density regardless of zone). This affects zone architecture but NOT mechanism selection -- the builder adapts component padding parametrically per zone regardless of content type.

### 5.3 What Content Type Should NOT Change

- **Whether the full pipeline runs.** Every page runs the full pipeline (Step 0D). No tier routing.
- **Perception thresholds.** >= 15 RGB is a physics law, not a content preference.
- **Mechanism minimums.** Per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+) are structural requirements.
- **Conventions brief.** The same conventions brief applies to all content types.

### 5.4 The Four Content Archetypes (Influence on TC Process)

| Archetype | Tension Richness | Metaphor Space | Zone Architecture | Density Range |
|-----------|-----------------|----------------|-------------------|---------------|
| **Narrative** (essays, stories, opinions) | HIGH -- FEEL/RECONCILE/BECOME all rich | WIDE -- geological, architectural, editorial, cartographic all viable | 4-5 zones, strong arc | sparse to dense (full range) |
| **Analytical** (research, comparisons, evaluations) | MODERATE -- UNDERSTAND/EVALUATE rich, FEEL lower | MEDIUM -- architectural, scientific, legal, archival viable | 3-4 zones, moderate arc | moderate throughout (less variation) |
| **Tutorial** (guides, how-tos, walkthroughs) | LOW-MODERATE -- DO/NAVIGATE dominate | NARROWER -- industrial, architectural, cartographic | 3-5 zones, progressive arc | sparse to moderate (less dense peak) |
| **Reference** (APIs, specs, catalogs) | LOW -- mostly cosmetic tension | NARROW -- archival, catalogic | 2-3 zones, flat arc | moderate to dense (little variation) |

The TC pipeline already handles this through the axis yield mechanism (Phase 1: core four always run, extended five evaluated, structural triggers conditional). High-yield axes drive toward richer metaphors; low-yield axes drive toward simpler compositions. No special routing needed.

---

## PART 6: THE "ACTIVATION NOT TRANSMISSION" PRINCIPLE

### 6.1 What It Means

Report 45's master insight: "The more precisely you specify contextual quality, the less likely it is to appear." The TC brief's job is not to TRANSMIT compositional intelligence to the builder. It is to ACTIVATE the builder's own compositional intelligence by providing:

1. **A world to compose within** (metaphor as cognitive frame)
2. **A vocabulary to compose from** (mechanism catalog as instrument set)
3. **A direction to compose toward** (semantic directions as compositional intent)

The builder does not need to be TOLD how to compose. The builder needs to be ORIENTED toward a specific composition and then FREED to execute with full capability.

### 6.2 Evidence from Gas Town

Report 41 (Opus native intelligence) found:
- 60-70% of output CSS came from Opus native competence (Category C)
- 10-20% came from pipeline-Opus INTERACTION (Category D)
- 10-20% came from pipeline specification alone (Category A/B)

The pipeline's highest-value contribution is NOT the 10-20% of Category A/B specification. It is the ACTIVATION of the 60-70% Category C competence in a specific direction. Without the "Command Post / Field Dispatch" metaphor, Opus would still produce a competent editorial page -- but it would not produce a page where border weight encodes military rank, where spacing compression encodes dispatch urgency, where color encoding maps to threat classification.

The metaphor is an ACTIVATION KEY, not a BLUEPRINT.

### 6.3 What This Means for TC Brief Format

The TC brief should read like a **mission briefing**, not like a **technical specification**.

**Current format (specification):**
```
Zone Z2: bg #F5F0E8 (delta ~20 RGB), padding 40px 80px. Deploy #18 data tables.
Deploy #15 bento grid (minmax 280px, Mayor span-2). #1 borders at 3px.
```

**Proposed format (activation):**
```
Zone Z2 (Operational Readiness): DEEPENING. Content: 8 Stages + Architecture + 7 Roles.
This is the densest information zone -- military intel compressed for field use.
Mechanisms: data tables (#18), bento grid (#15, Mayor=emphasized), border hierarchy (#1).
```

The difference: the proposed format tells the builder WHAT the zone IS and WHAT MECHANISMS serve it, but not HOW to implement them. The builder has the conventions brief for HOW (Section 8: CSS vocabulary, specific recipes). The builder has tokens.css for VALUES (spacing scale, color palette). The builder has the mechanism catalog for TECHNIQUE (CSS patterns per mechanism).

The TC brief activates the builder's compositional intent. The conventions brief provides the physics. The builder generates the CSS.

### 6.4 The Activation Stack

```
ACTIVATION LAYER           WHAT IT PROVIDES           FORMAT
TC Brief (~35 lines)       Metaphor + zones +         Mission briefing
                           mechanisms + anchors        (compositional intent)

Conventions Brief          Physics + recipes +         World description
(~440 lines)               creative authority          (implementation knowledge)

Mechanism Catalog          CSS techniques per          Reference catalog
(~300 lines)               mechanism                  (copy-paste recipes)

Tokens + Prohibitions      Closed vocabulary +         Code
(~527 lines)               soul constraints           (hard boundaries)
```

The builder reads all four. The TC brief is FIRST (sets cognitive frame). The conventions brief is SECOND (provides the world). Mechanism catalog and tokens are REFERENCE (consulted during building).

This ordering matters. Report 45 Finding 1.1 shows that brief FORMAT determines builder cognitive mode. The TC brief as mission briefing → COMPOSING mode. If the TC brief were a checklist → COMPLYING mode. First-read framing persists.

---

## PART 7: PRESERVING COMPOSITIONAL INTELLIGENCE WHILE REDUCING COMPRESSION LOSS

### 7.1 The Current Compression Problem

The TC pipeline (5 phases, ~1,800 lines of skill specification) processes content through:
- Phase 1: 4-14 axis questions generating needs and structural properties
- Phase 2: Tension derivation with formal criteria (Addition Test, BECAUSE test, Substitution test)
- Phase 3: Metaphor candidate generation, composite scoring (6 criteria, 18 points), lock-in gate
- Phase 4: Mechanism selection, perceptual guardrails, fractal gate, multi-coherence rules

All of this reasoning is COMPRESSED into 99 lines. The TC agent's full reasoning (easily 2,000+ lines of internal thought) becomes a brief. This is necessary -- the builder cannot read 2,000 lines of TC reasoning.

But the compression destroys valuable information:
- WHY this metaphor won over alternatives
- WHAT tensions were cosmetic vs. genuine (the tension table survives but the reasoning doesn't)
- HOW mechanisms INTERACT (the pairs are listed but the multi-coherence implications aren't)

### 7.2 Three Strategies to Preserve Intelligence

**Strategy 1: Let the TC brief be SMALL but the TC log be AVAILABLE.**

The TC brief is ~35 lines (the activation document). The TC agent ALSO writes a reasoning log (~200 lines) that documents:
- Tension derivation with scoring
- Metaphor candidates with composite scores
- Why the winner won
- Mechanism interaction analysis

The reasoning log is NOT given to the builder. It is available to the ORCHESTRATOR for fix-cycle diagnosis. If PA-05 comes back 2.5/4, the orchestrator can consult the TC reasoning log to understand whether the metaphor was weak, the mechanism selection was wrong, or the builder drifted.

**Strategy 2: Embed compositional DIRECTION, not compositional VALUES.**

Instead of: "bg #F5F0E8 (delta ~20 RGB)"
Write: "DEEPENING: cooler and denser than Z1"

The word "DEEPENING" is the compressed form of the full conventions brief Section 4 entry:
```
DEEPENING = darker bg + tighter spacing + heavier borders + denser typography
```

The builder knows how to translate "DEEPENING" into CSS because the conventions brief provides the recipe. The TC brief provides the DIRECTION; the conventions brief provides the TRANSLATION TABLE.

This preserves the compositional intelligence (the TC agent's understanding of HOW zones relate semantically) while eliminating the implementation values (which the TC agent gets wrong).

**Strategy 3: Use mechanism NAMES as compressed intelligence.**

The mechanism catalog gives each mechanism a name, category, and CSS recipe. When the TC brief says "#15: Bento Grid, Z2, Mayor=emphasized," this is a POINTER into the mechanism catalog. The builder looks up mechanism #15 and gets the CSS recipe.

This is already how the TC brief works -- but the current brief ALSO provides "Top 5 CSS" snippets that duplicate (and sometimes contradict) the mechanism catalog recipes. Removing the CSS snippets and relying on mechanism NAMES preserves the routing intelligence (WHICH mechanism, WHERE) while eliminating the implementation risk.

### 7.3 What Is Genuinely Lost

Even with these strategies, some compositional intelligence is lost:

1. **The TC agent's felt sense of the metaphor.** The agent who derived "Command Post / Field Dispatch" through the tension-metaphor pipeline has a RICHER understanding of the metaphor than a builder reading those 4 words. This is the experiential gap (Report 44, Part 3). It cannot be bridged by format changes.

2. **Cross-mechanism interaction reasoning.** The TC agent understands that mechanisms #1 and #7 encode DEPTH at Z1->Z2 boundary. The brief lists this as a pair. But the builder may not understand HOW border-weight gradient and zone background differentiation COMBINE to create depth perception. This requires the builder to understand multi-coherence at the compositional level, not just the CSS level.

3. **Tension-metaphor fit subtleties.** The TC agent knows that T1 (TRUST: authority + fragility) is the DOMINANT tension and shapes the entire composition. The builder reads "T1 shapes metaphor" but may not prioritize it during building.

**Mitigation:** The conventions brief's Section 6 (Unified Metaphor) and Section 10 (Compositional Memory) provide metacognitive tools that help the builder maintain metaphor coherence. The conviction statement forces pre-build articulation. The midpoint reflection forces mid-build recalibration. These are PROCESS compensators for INFORMATION loss.

---

## PART 8: CAN THE BUILDER READ CONTENT DIRECTLY?

### 8.1 The Question

Could the builder SKIP the TC process entirely, read the content directly, and derive its own compositional approach (with minimal guidance from the conventions brief)?

### 8.2 Evidence For (Builder CAN)

Report 41 shows 60-70% of Gas Town's output came from Opus native competence. The builder's design intelligence is substantial. Given content and the conventions brief:

- Opus would produce a well-structured editorial page with zones
- Opus would use the vocabulary (3-tier borders, dark header, warm palette)
- Opus would create appropriate components for the content type
- Opus would maintain reasonable spatial confidence

The conventions brief already tells the builder to "Read the content markdown. Where does it shift topic, mode, or intensity? Those shifts are your zone boundaries." (Process section). This IS content analysis, done by the builder.

### 8.3 Evidence Against (Builder SHOULD NOT)

1. **Metaphor derivation requires dedicated cognitive space.** The tension-composition pipeline is a 5-phase CREATIVE process. Running it WHILE ALSO building HTML/CSS splits the builder's attention. The TC agent can spend its ENTIRE context on metaphor derivation. The builder spends its context on HTML structure, CSS implementation, perception thresholds, accessibility, responsiveness, etc.

2. **N=2 data point: Middle vs. Flagship.** The Middle experiment's builder received a 100-line recipe (TC-derived). PA-05: DESIGNED (4/4). The Flagship experiment's builder received a 71-line checklist (not TC-derived in the same way). PA-05: 1.5/4. While there are confounding variables (recipe vs. checklist format, Opus vs. Sonnet model), the TC-derived composition consistently outperformed.

3. **Metaphor consistency requires pre-commitment.** If the builder derives the metaphor DURING building, the metaphor may drift as the builder encounters implementation challenges. The TC process forces LOCK-IN before building begins. Report 44 (Part 5) identifies "fix cycle degradation" as a failure mode where builders operating at symptom level lose compositional context.

4. **Content-mechanism routing is non-trivial.** The TC agent selects 15 of 18 mechanisms with specific zone assignments and rejection reasoning. This selection requires understanding both the content (what features need visual treatment) and the mechanism catalog (what CSS techniques are available). Doing this DURING building is possible but suboptimal -- it introduces an ANALYSIS phase inside a CREATION phase.

### 8.4 Recommendation: Hybrid Approach

**The builder should NOT skip TC entirely. But the builder SHOULD have direct content access.**

Currently, the builder receives:
- TC brief (content analysis compressed into 99 lines)
- Conventions brief (440 lines)
- Reference files (mechanism catalog, tokens, prohibitions)

The builder does NOT read the original content file. It builds from the TC brief's DESCRIPTION of the content.

**Proposed change:** The builder reads BOTH the TC brief AND the original content file.

This means:
- The TC brief provides the metaphor, zones, mechanisms (ROUTING)
- The conventions brief provides the physics and recipes (IMPLEMENTATION)
- The content file provides the RAW MATERIAL (what the builder is actually composing)

The builder can then:
- Verify that the TC brief's zone architecture matches the content's actual structure
- Discover content features the TC agent missed (the 5 builder-invented components in Gas Town)
- Make content-informed CSS decisions (the checkpoint-bar was invented because the builder READ the content, not because the TC brief specified it)

**Risk:** The builder may second-guess the TC brief's metaphor after reading the content. Mitigation: the conventions brief's conviction statement process requires the builder to COMMIT to the TC brief's metaphor before writing CSS. The builder can adapt mechanism deployment but should not override the metaphor without triggering a formal TC re-invocation.

---

## PART 9: THE PROPOSED TC BRIEF FORMAT

### 9.1 Template (~35 lines)

```markdown
# TC Brief: [Content Title] ([ID])

## METAPHOR: [Name] -- [Score]/18

[1-2 sentences: what the metaphor IS and BECAUSE justification]

CSS directions: [channel -> mechanism mapping, e.g., "hierarchy -> border-weight"]

RISK: [1 sentence warning + W-codes]

## ZONES

| Zone | Name | Density | Content | Direction |
|------|------|---------|---------|-----------|
| Z1   | [name] | sparse  | [sections] | OPENING |
| Z2   | [name] | moderate | [sections] | DEEPENING |
| ...  | ...    | ...     | ...        | ...       |

Boundaries: Z1->Z2 [SMOOTH/BRIDGE/BREATHING] | Z2->Z3 [type] | ...

## MECHANISMS

[Count] total. S:[n], H:[n], C:[n], D:[n], N:[n].

| # | Mechanism | Zone | Metaphor Role |
|---|-----------|------|---------------|
| [n] | [name] | Z[n] | [how it serves the metaphor] |
...

Pairs: #X+#Y encode [DIMENSION] | #A+#B encode [DIMENSION]
Rejected: #[n] [name] ([reason]) | ...

## ANCHORS

1. [Critical execution anchor specific to this content]
2. [Second anchor]
3. [Third anchor]
```

### 9.2 What Is Removed Compared to Current Brief

| Removed | Rationale |
|---------|-----------|
| Content Tensions table | Consumed by metaphor selection; builder doesn't need Phase 2 output |
| Hex values for zone backgrounds | Builder derives from conventions brief + metaphor direction |
| Specific padding values | Builder selects from token scale per density level |
| Boundary channel counts | Builder calculates from transition type (conventions brief Section 7) |
| Top 5 CSS snippets | Builder writes CSS from mechanism catalog recipes |
| Detection Expectations | Moved to weaver/PA prompt |
| Metaphor-Implied CSS section | Replaced by CSS direction mapping in metaphor section |

### 9.3 What Is Added Compared to Current Brief

| Added | Rationale |
|-------|-----------|
| Metaphor quality score | Builder knows whether metaphor is STRONG (15+) or VIABLE (12-14) |
| Density per zone | Builder uses conventions brief density recipes keyed to this |
| Clearer boundary types | Builder maps to conventions brief transition-to-coherence table directly |

### 9.4 Example: Gas Town Rewritten

```markdown
# TC Brief: Gas Town -- Steve Yegge (009)

## METAPHOR: COMMAND POST / FIELD DISPATCH -- 14/18 (VIABLE)

The page is a field dispatch from a forward command post. Yegge is a veteran
field commander reporting volatile intel with explicit readiness gates and role
hierarchies. BECAUSE: the content IS a dispatch -- 40-year authority, 8-stage
readiness model, 7 named roles, explicit threat warnings.

CSS directions: hierarchy -> border-weight | clearance zones -> background
shifts | dispatch compression -> spacing descent | rank -> typography scale |
threat classification -> accent colors

RISK: W-IMPLICIT (always). Resist label-heavy transitions; let structure carry
zone shifts.

## ZONES

| Zone | Name | Density | Content | Direction |
|------|------|---------|---------|-----------|
| Z1 | Situation Brief | sparse | Source, core insight ("ant colony" thesis) | OPENING |
| Z2 | Operational Readiness | dense | 8 Stages, Architecture, 7 Worker Roles | DEEPENING |
| Z3 | Field Intelligence | dense | Vibe Coding, Beads, MCP, Why Go, Warnings | DEEPENING |
| Z4 | Allied Ops & Deployment | moderate | Community, upgrades, commands, mental model | RESOLVING |

Boundaries: Z1->Z2 BREATHING | Z2->Z3 SMOOTH | Z3->Z4 BRIDGE

## MECHANISMS

15 total. S:2, H:3, C:4, D:3, N:3.

| # | Mechanism | Zone | Metaphor Role |
|---|-----------|------|---------------|
| 1 | Border-Weight Gradient | all | Authority level encoding |
| 2 | 2-Zone Component DNA | Z2-3 | Intel briefs: mono label + body |
| 3 | Solid Offset Depth | Z1 | Singular emphasis on "ant colony" quote |
| 4 | Spacing Compression | Z1-3 | Dispatch compression arc |
| 5 | Dense/Sparse Alternation | page | Z1 sparse, Z2-3 dense, Z4 moderate |
| 7 | Zone Background Diff | all | Clearance zone progression |
| 9 | Confidence Color | Z2-3 | coral=THREAT, amber=CAUTION, purple=DOCTRINE |
| 10 | Border-Left Signal | Z2-3 | 4px accent on all callouts |
| 11 | Typographic Scale | all | serif display -> sans body -> mono commands |
| 13 | Dark Header | nav | Command post designation |
| 14 | Footer Mirror | nav | Deployment bookend |
| 15 | Bento Grid | Z2 | 7 Roles as variable-span grid (Mayor emphasized) |
| 16 | Drop Cap | Z1 | Editorial dispatch opening |
| 17 | Code Block | Z4 | Install commands as deployment orders |
| 18 | Data Table | Z2-3 | 8 Stages + Why Go |

Pairs: #1+#7 encode DEPTH at Z1->Z2 | #4+#11 encode COMPRESSION Z1->Z3 |
#2+#9 encode CLASSIFICATION in Z3
Rejected: #8 Scroll Witness (too short) | #12 Progressive Disclosure (linear
not phased) | #6 Width Variation (no Q&A)

## ANCHORS

1. Spacing descent arc MUST be visible: Z1(sparse) -> Z2/Z3(dense) -> Z4(moderate).
   Densest zone is Z3, not Z1.
2. Bento grid in Z2 is the ONLY non-single-column layout. Mayor=emphasized.
   Without this = single-column monotony.
3. Core insight quote is the SINGULAR solid-offset element. Scarcity = emphasis.
```

**Line count: 42 lines** (vs. 99 in original). All implementation values removed. All routing intelligence preserved.

---

## PART 10: THE BUILDER'S DERIVATION WORKFLOW

### 10.1 How the Builder Uses the New TC Brief

With the slimmer TC brief, the builder's workflow becomes:

**Step 1: Read TC brief (42 lines).** Internalize metaphor, zone architecture, mechanism assignments.

**Step 2: Write conviction statement** (conventions brief CONVICTION CARD template). This forces the builder to commit to the TC brief's metaphor and directions.

**Step 3: Read content file directly.** Understand the raw material. Verify TC zones map to actual content structure. Note content features that suggest additional components.

**Step 4: Derive implementation values.** Using conventions brief recipes:
- Zone backgrounds: Apply Section 4 chromatic arc recipe. Choose hex values from token palette that satisfy >= 15 RGB delta (Section 2 physics) and match the semantic directions.
- Padding: Apply Section 5 parametric echo recipe. Select from spacing scale per density level.
- Typography: Apply Section 4 typographic progression per direction.
- Borders: Apply 3-tier system from Section 8.

**Step 5: Build boundary-by-boundary** (conventions brief Process section). At each zone boundary, set all shifting channels simultaneously. Verify against perception thresholds.

**Step 6: Deploy mechanisms per TC brief assignments.** For each mechanism, consult mechanism catalog for CSS recipe. Adapt recipe to zone's density and direction.

### 10.2 What Changes for the Orchestrator

The /build-page orchestrator currently:
1. Spawns TC agent -> receives TC brief -> passes brief to builder
2. Builder builds -> orchestrator runs gates -> PA audit

With the new architecture:
1. Spawns TC agent -> receives TC brief (~35 lines) + TC reasoning log (~200 lines)
2. Passes TC brief + original content file + conventions brief to builder
3. Builder builds -> orchestrator runs gates -> PA audit
4. If fix cycle needed: orchestrator consults TC reasoning log for diagnosis

The orchestrator gains the TC reasoning log as a DIAGNOSTIC tool. Currently, when PA-05 comes back 2.5, the orchestrator has no insight into whether the metaphor was wrong, the mechanism selection was weak, or the builder drifted. The reasoning log provides this insight.

---

## PART 11: ADVERSARIAL ANALYSIS -- WHAT COULD GO WRONG

### 11.1 Risk: Builder Ignores TC Brief and Builds Generic

**Scenario:** Builder reads TC brief, reads content, then builds a generic editorial page without metaphor influence.

**Mitigation:** The conviction statement (conventions brief) forces pre-build metaphor commitment. The fractal echo table forces per-scale metaphor expression planning. These process artifacts create ACCOUNTABILITY -- the builder must articulate how the metaphor manifests before writing CSS.

**Detection:** PA Tier 5 questions (PA-60 through PA-68) specifically detect metaphor embodiment. PA-63 (fractal zoom coherence) and PA-65 (musical analogy) catch pages where the metaphor exists in text labels but not in visual structure.

### 11.2 Risk: Builder Generates Wrong Implementation Values

**Scenario:** Builder attempts to derive zone background hex values from conventions brief recipe but calculates incorrectly (deltas below 15 RGB).

**Mitigation:** Gate runner (programmatic verification) checks RGB deltas at every zone boundary. SC-14 checks letter-spacing floors. SC-09 checks stacked gaps. These are BINARY gates that catch implementation errors before PA audit.

**This risk already exists** in the current pipeline -- the TC brief's hex values failed the 15 RGB threshold, and the builder had to self-correct. The new architecture shifts the generation to the builder (who has the physics knowledge) rather than the TC agent (who doesn't). The gate runner catches errors regardless of who generates the values.

### 11.3 Risk: Slimmer TC Brief Loses Critical Information

**Scenario:** Removing implementation values from the TC brief eliminates information the builder needed.

**Counter-evidence:** In Gas Town, every implementation value the TC brief provided was either:
- Used as-is by the builder (padding values: 64/40/32/48px)
- OVERRIDDEN by the builder (zone backgrounds, footer border weight)

Values used as-is could have been derived from conventions brief density recipes (sparse zone = 64px, moderate = 40-48px, dense = 32px). Values overridden were actively harmful (sub-perceptual hex codes).

The strongest counter-argument: the TC brief's "Top 5 CSS" snippets (#3 solid-offset, #15 bento-grid, #13 dark-header, #2 intel-brief-label, #16 drop-cap) gave the builder READY-TO-PASTE CSS. Removing these means the builder must look up each mechanism's CSS in the mechanism catalog. This adds ~5 minutes of reference reading but eliminates the risk of the TC agent providing outdated or incorrect CSS.

### 11.4 Risk: Two-Document Read Creates Cognitive Overload

**Scenario:** Builder must now read TC brief (35 lines) + conventions brief (440 lines) + content file (variable) + reference files. Total reading exceeds attention budget.

**Counter-evidence:** The builder already reads TC brief (99 lines) + conventions brief (440 lines) + reference files. The new TC brief is SHORTER (35 vs. 99 lines). Adding the content file adds reading, but the builder was already building FROM the content (the TC brief described it). Direct reading replaces indirect description.

**Net attention budget:** -64 lines (shorter TC brief) + content file (~variable, but builder needs it anyway for HTML structure). The builder currently reads the content file to write HTML; making this explicit rather than implicit is not additional load.

---

## PART 12: SUMMARY AND RECOMMENDATIONS

### 12.1 The New Content-Form Router in One Paragraph

The TC process runs unchanged (Phases 0-4.5) but produces a SLIMMER output (~35 lines) containing ONLY routing intelligence: metaphor, zones, mechanisms, anchors. ALL implementation values (hex codes, padding, CSS snippets) are REMOVED. The builder receives the TC brief (routing), the conventions brief (physics and recipes), the original content file (raw material), and reference files (mechanism catalog, tokens, prohibitions). The builder derives implementation values using the conventions brief's recipes, perception thresholds, and density-keyed templates. A TC reasoning log (~200 lines) is retained by the orchestrator for fix-cycle diagnosis but never shown to the builder.

### 12.2 Seven Design Decisions

| # | Decision | Rationale |
|---|----------|-----------|
| 1 | **TC brief = routing only, ~35 lines** | Removes implementation values that TC agent generates incorrectly; keeps compositional intelligence that TC agent generates correctly |
| 2 | **Builder reads original content directly** | Enables content-driven invention (Gas Town: 5 builder-invented components came from content understanding, not TC specification) |
| 3 | **Conventions brief = implementation knowledge** | Already designed for this role (51% world-description, 16% recipe); no changes needed |
| 4 | **Single TC agent, two-section output** | Section A (composition) + Section B (deployment) -- conceptual split without operational overhead |
| 5 | **TC reasoning log retained by orchestrator** | Enables fix-cycle diagnosis without adding to builder's attention budget |
| 6 | **Content type influences TC process, not builder process** | Phase 0A classification already handles content type routing; builder process is universal |
| 7 | **Activation, not transmission** | TC brief is a mission briefing (cognitive frame), not a technical specification (implementation values) |

### 12.3 What Changes vs. Current Pipeline

| Aspect | Current | Proposed | Why |
|--------|---------|----------|-----|
| TC brief size | 99 lines | ~35 lines | Remove implementation values |
| TC brief content | Routing + implementation | Routing only | TC agent lacks perception physics for implementation |
| Builder input | TC brief + conventions brief | TC brief + conventions brief + content file | Builder needs raw material for content-driven invention |
| Implementation values | TC brief provides hex/padding/CSS | Builder derives from conventions brief recipes | Builder has the physics; TC agent doesn't |
| Tension table | In TC brief | In TC reasoning log (orchestrator only) | Builder doesn't consume tension data |
| Detection expectations | In TC brief | In PA/weaver prompt | Builder doesn't consume validation criteria |
| Fix-cycle diagnosis | Orchestrator has no TC reasoning | Orchestrator has TC reasoning log | Enables targeted fix cycles |

### 12.4 What Does NOT Change

- The TC pipeline (Phases 0-4.5) runs identically
- The conventions brief is unchanged
- The gate runner is unchanged
- The PA audit is unchanged
- The mechanism catalog is unchanged
- Creative authority (80% creative / 20% constraint) is unchanged
- The /build-page orchestrator architecture is unchanged

The change is NARROW: the TC brief's OUTPUT FORMAT shrinks and the builder's INPUT SET grows by one file (the original content). Everything else stays the same.

### 12.5 Expected Impact

If the TC brief had been this format for Gas Town:
- The zone background failure would NOT have occurred (builder derives from conventions brief physics, not TC approximation)
- The footer border weight override would still have occurred (this was a creative decision, not a physics error)
- The 5 builder-invented components would still have occurred (they came from content reading + Opus native competence)
- The overall build quality would be EQUAL OR HIGHER (removing incorrect implementation values cannot reduce quality; adding direct content access enables more content-driven invention)

---

*Content-form routing design complete. The TC brief becomes a ~35-line activation document (routing intelligence only), the conventions brief provides implementation physics (unchanged), and the builder gains direct content access. The split eliminates the architectural flaw where the TC agent generates implementation values without perception physics knowledge. Implementation values move to the builder, who has both the TC routing AND the conventions brief physics to generate correct values.*

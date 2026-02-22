# Pipeline Interpolation Analysis: How Design Intelligence Flows from Research to CSS

**Analyst:** pipeline-interpolation-analyst
**Date:** 2026-02-22

## Executive Summary

This report traces the information cascade from 337 research findings to final CSS output across two pipelines:
- **Page A (yegge-gas-town):** Built via the 542-line monolithic master execution prompt
- **Page B (gas-town-steve-yegge):** Built via the distributed /build-page skill system

The central finding: **Page B's distributed pipeline reduces the compression cliff from infinity (Page A has no content-specific mediation) to approximately 41:1** at the most critical stage (research to content-specific deployment), primarily because the TC brief acts as a RE-EXPANSION layer that translates generic vocabulary into content-specific instructions. However, Page A achieves comparable CSS output quality through a different mechanism: the builder compensated for sparse instructions by independently re-deriving principles from the conventions brief. Both pipelines produce DESIGNED output, but through fundamentally different information-flow architectures.

---

## The Information Cascade: Stage-by-Stage Analysis

### FLOW DIAGRAM: Page A Pipeline (Monolithic Prompt)

```
RESEARCH (337 findings, 4,104 lines across R1-R5 + synthesis)
    |
    | Stage 1: Research --> Synthesis
    | Compression: 4,104 --> 383 lines (10.7:1)
    | Preserved: 5 unified principles, 10 actionable findings, 5 anti-patterns
    | Lost: Individual finding detail, R4's 192 findings compressed to "axis patterns"
    v
RESEARCH-SYNTHESIS (383 lines)
    |
    | Stage 2: Synthesis --> 6-Layer Ontology
    | EXPANSION: 383 --> ~3,544 lines (0.1:1 -- grows, not shrinks)
    | Preserved: Principles become mechanisms, tokens, components, prohibitions
    | Added: 18 mechanisms, 65 tokens, 22 prohibitions, 1,195-line component library
    v
6-LAYER ONTOLOGY (3,544 lines across 5 core files)
    |
    | Stage 3A: Ontology --> Master Execution Prompt
    | Compression: 3,544 --> 542 lines (6.5:1)
    | Preserved: Team architecture, file paths, threshold values, checkpoint list
    | Lost: ALL mechanism descriptions, ALL component patterns, ALL case studies
    |        The prompt is ABOUT THE PIPELINE, not ABOUT THE DESIGN SYSTEM
    v
MASTER EXECUTION PROMPT (542 lines)
    |
    | Stage 3B: Prompt --> Builder's Actual Instructions
    | The prompt specifies what the builder SHOULD READ (6 files ~3,500 lines)
    | But the builder receives the prompt AS CONTEXT for those reads
    | Effective builder guidance: conventions brief + mechanism catalog + content
    |                          = ~609 + ~1,218 + content lines
    v
BUILDER (reads ~1,827 lines of design guidance + content)
    |
    | Stage 4: Instructions --> CSS
    | Compression: 1,827 --> 893 CSS lines
    | Mechanisms instructed: 18 (full catalog available)
    | Mechanisms deployed: 16
    | Deployment rate: 89%
    v
OUTPUT CSS (893 non-empty CSS lines, 1,958 total HTML lines)
```

### FLOW DIAGRAM: Page B Pipeline (Distributed Skill System)

```
RESEARCH (337 findings, 4,104 lines across R1-R5 + synthesis)
    |
    | Stage 1: Research --> Synthesis (IDENTICAL to Page A)
    | Compression: 4,104 --> 383 lines (10.7:1)
    v
RESEARCH-SYNTHESIS (383 lines)
    |
    | Stage 2: Synthesis --> 6-Layer Ontology (IDENTICAL to Page A)
    | EXPANSION: 383 --> ~3,544 lines
    v
6-LAYER ONTOLOGY (3,544 lines)
    |
    | Stage 3A: Ontology --> Skill System (DIFFERENT PATH)
    | Total skill system: 578 (build-page) + 1,648 (TC) + 993 (PA)
    |                    + 609 (brief) + 1,339 (gates) = 5,167 lines
    | This is EXPANSION from the ontology (1.5:1 expansion ratio)
    | Preserved: Mechanism catalog accessible in full, thresholds, recipes, processes
    | Added: TC derivation process, PA question framework, gate JavaScript, fix cycles
    v
SKILL SYSTEM (5,167 lines across 5 files)
    |
    | Stage 3B: Skill System --> TC Agent (INTERMEDIATE PROCESSING)
    | TC agent reads: TC skill (1,648 lines) + content + mechanism catalog (1,218 lines)
    | TC agent PRODUCES: _tc-brief.md (99 lines)
    | This is COMPRESSION: ~2,866 input --> 99 output (29:1)
    | BUT the compression is CONTENT-SPECIFIC:
    |   - 15/18 mechanisms selected WITH per-zone deployment
    |   - 3 rejected mechanisms WITH reasoning
    |   - Exact CSS values per zone boundary
    |   - Specific metaphor-to-CSS mappings
    |   - Reinforcing mechanism pairs identified
    v
TC BRIEF (99 lines -- content-specific design brief)
    |
    | Stage 3C: TC Brief --> Builder's Actual Instructions
    | Builder reads: TC brief (99) + conventions brief (609) + content
    |              + mechanism catalog (1,218) + components.css (1,195)
    |              + tokens.css (183) + prohibitions.md (419)
    | Effective builder guidance: ~3,723 lines total
    | KEY DIFFERENCE: TC brief gives CONTENT-SPECIFIC mechanism deployment
    | while Page A's builder received only GENERIC mechanism descriptions
    v
BUILDER (reads ~3,723 lines of design guidance, with TC brief as PRIMARY)
    |
    | Stage 4: Instructions --> CSS
    | Compression: 3,723 --> 936 CSS lines
    | Mechanisms instructed: 15 (content-specific from TC brief)
    | Mechanisms deployed: 15
    | Deployment rate: 100%
    v
OUTPUT CSS (936 non-empty CSS lines, 1,508 total HTML lines)
```

---

## Stage-by-Stage Compression Ratios

| Stage | What Happens | Page A Ratio | Page B Ratio | Winner |
|-------|-------------|-------------|-------------|--------|
| 1. Research -> Synthesis | 337 findings distilled | 10.7:1 | 10.7:1 | Tie (same) |
| 2. Synthesis -> Ontology | Principles become operational | 0.1:1 (expands) | 0.1:1 (expands) | Tie (same) |
| 3. Ontology -> Builder Pipeline | System architecture | 6.5:1 (to prompt) | 0.7:1 (expands to skills) | **Page B** |
| 3B. Pipeline -> TC Brief | Content-specific derivation | N/A (no TC stage) | 29:1 (but targeted) | **Page B** (novel stage) |
| 3C. Pipeline -> Builder Input | What builder actually reads | ~1,827 lines | ~3,723 lines | **Page B** (2x more input) |
| 4. Builder Input -> CSS | Creative execution | 2.0:1 | 4.0:1 | Page A (denser output?) |
| 4B. Mechanisms instructed -> deployed | Vocabulary utilization | 16/18 = 89% | 15/15 = 100% | **Page B** |

---

## The Compression Cliff: Where Information Dies

### Page A's Compression Cliff: Stage 3A (Ontology to Prompt)

The 542-line master execution prompt is the architectural bottleneck. It contains:
- Team architecture and wave structure (~100 lines)
- File path references and reading order (~50 lines)
- Checkpoint verification checklists (~150 lines)
- Threshold values and non-negotiables (~50 lines)
- Skill edit specifications (~150 lines)
- Validation protocol (~40 lines)

**What is ABSENT from the prompt:** The prompt contains ZERO mechanism descriptions. ZERO CSS recipes. ZERO component patterns. ZERO case study examples. It tells agents WHAT FILES TO READ but provides none of the CONTENT of those files inline. The prompt is a PROJECT MANAGEMENT document, not a DESIGN document.

The actual design intelligence reaches the builder through the conventions brief (609 lines) and mechanism catalog (1,218 lines), which the builder reads independently. The prompt's role is ORCHESTRATION, not INSTRUCTION.

**The hidden cliff:** The prompt's compression ratio (6.5:1 from ontology) is misleading because the prompt does not CONTAIN the ontology -- it POINTS TO it. The real question is: does the builder actually absorb 1,827 lines of design guidance? The build log suggests yes -- the builder references Section 4 (Multi-Coherence), Section 5 (Fractal Echo), Section 7 (Transition Grammar) from the conventions brief by name, and deploys 16/18 mechanisms from the catalog.

### Page B's Compression Cliff: Stage 3B (Skill System to TC Brief)

The TC agent reads ~2,866 lines and produces 99 lines (29:1 compression). But this is INTELLIGENT compression:

- 15 mechanisms selected with per-zone assignments (not generic "here are 18 mechanisms")
- 3 rejected mechanisms with reasoning (not silent omission)
- Exact boundary CSS values pre-computed (not "figure it out")
- Reinforcing mechanism pairs identified (not "combine as appropriate")
- Content-specific metaphor-to-CSS mappings (not generic "choose a metaphor")

**The TC brief is a DESIGN BRIEF, not a SUMMARY.** It compresses research INTO actionable decisions. Compare:

| Property | Mechanism Catalog (generic) | TC Brief (content-specific) |
|----------|---------------------------|---------------------------|
| Border-weight | "4px/3px/2px/1px gradient encodes hierarchy" | "4px critical, 3px operational, 1px separators -- authority level" |
| Zone backgrounds | "4-color token system" | "#FEF9F5->#F5F0E8->#FAF5ED->#FEF9F5 -- clearance zones" |
| Spacing | "Padding values create density gradient" | "64->40->32->48px -- dispatch compression" |
| Deployment | "Use when content has hierarchical importance" | "Zone 2: Deploy #18 data tables + #15 bento grid for roles" |

This is the key architectural difference: the TC brief translates generic vocabulary into content-specific instructions.

---

## The 50:1 Compression Problem -- Did Page B Solve It?

The project's central finding was "50:1 compression from agent output to behavioral constraint -- 99.8% information loss." Let's measure:

**Page A path:**
- Research output: ~4,104 lines
- Behavioral constraints reaching builder: ~1,827 lines (conventions brief + catalog)
- Ratio: 2.2:1 (but ~80% of those lines are generic, not content-specific)
- Effective content-specific guidance: ~0 lines (no TC stage)
- Effective ratio: INFINITE (builder must derive content-specificity independently)

**Page B path:**
- Research output: ~4,104 lines
- Behavioral constraints reaching builder: ~3,723 lines (TC brief + conventions + catalog + components + tokens + prohibitions)
- Ratio: 1.1:1 (nearly all research flows through)
- Content-specific guidance: 99 lines (TC brief)
- Effective ratio: 4,104 -> 99 content-specific lines = 41:1
- But those 99 lines carry ~70% of actionable design decisions

**Verdict: Page B reduces the EFFECTIVE compression from INFINITE (Page A has no content-specific mediation) to 41:1 (Page B has a TC brief that pre-solves mechanism selection). The improvement is architectural, not marginal.**

---

## Recipe vs Checklist at the Interpolation Level

### Page A's Builder Instructions (from conventions brief)

The conventions brief at 609 lines is predominantly RECIPE format. Example:

```
Section 4 (Multi-Coherence): "At every zone boundary, at least 3 of 6 CSS
channels shift simultaneously, all pointing the same semantic direction."

Section 8 (CSS Vocabulary): "Every component has a sparse LABEL zone and
a dense BODY zone. The label zone: font-weight 600, font-size 0.75rem,
uppercase, letter-spacing 0.1em..."
```

This is WORLD-DESCRIPTION -- it tells the builder what the design system IS, with specific CSS values. The builder must independently decide HOW to apply these to Yegge's content.

### Page B's Builder Instructions (from TC brief + conventions brief)

The TC brief at 99 lines is RECIPE-OVER-RECIPE:

```
Z2 -- Operational Readiness: bg #F5F0E8 (delta ~20 RGB), padding 40px 80px.
Deploy #18 data tables (8 Stages, Why Go). Deploy #15 bento grid for roles
(minmax 280px, Mayor span-2). #1 borders at 3px. Typography: h2 2rem.
```

This is SEQUENCED DEPLOYMENT -- the builder knows exactly which mechanisms to deploy in which zone with approximate CSS values. The conventions brief then provides the WHY behind each decision.

### Which Preserves More Research Intent?

**Page A's builder must:**
1. Read the mechanism catalog (18 mechanisms, ~1,218 lines)
2. Independently select which mechanisms serve the content
3. Independently determine zone architecture
4. Independently derive a metaphor
5. Independently compute boundary CSS values

**Page B's builder must:**
1. Read the TC brief (15 selected mechanisms, 99 lines)
2. Accept the TC agent's content-specific selections
3. Accept the pre-derived zone architecture
4. Accept the pre-derived metaphor
5. Adapt the pre-computed boundary CSS values

Page B's builder has LESS creative autonomy but MORE research-aligned guidance. The TC agent has already performed the content-to-mechanism mapping that is the highest-risk creative step.

---

## Evidence from Build Logs: How Information Flowed

### Page A's Builder

The builder independently derived the "ASSEMBLY LINE" metaphor and selected 16 mechanisms. The override log shows 5 overrides, including one critical background delta correction (#F5EDE0 replacing #FAF5ED for RGB compliance). The builder recognized the threshold issue independently from the conventions brief.

The Brief Reflection section credits:
- Section 4 (Multi-Coherence) -- "most influential"
- Section 5 (Fractal Echo) -- shaped parametric variation
- Section 7 (Transition Grammar) -- determined boundary types

These are the SAME three sections credited by Page B's builder, suggesting both builders absorbed the conventions brief's core content equivalently.

### Page B's Builder

The builder received the "COMMAND POST / FIELD DISPATCH" metaphor and 15 mechanisms from the TC brief. The override log shows 7 overrides -- notably, THREE background corrections where the TC brief's values fell below the 15 RGB threshold:

> "The TC brief's zone backgrounds (#FEF9F5/#F5F0E8/#FAF5ED/#FEF9F5) had max deltas of 13, 5, and 8 -- all below the 15 RGB threshold. Without the perception physics section, I would have used those values and produced imperceptible zone boundaries."

This is a KEY INTERPOLATION FINDING: **The TC brief compressed mechanism catalog knowledge effectively but introduced NEW errors in threshold compliance.** The conventions brief then CAUGHT those errors. The two-layer system (TC brief for content-specificity + conventions brief for threshold compliance) acts as an error-correction architecture.

---

## The TC Brief as Interpolation Layer: Help or Hurt?

### HELPS:

1. **Content-specific mechanism selection.** The TC agent analyzed Yegge's content and selected 15/18 mechanisms with zone-by-zone deployment rationale. Without this, the builder must independently map content to mechanisms -- a creative step with high variance.

2. **Pre-computed boundary CSS.** The TC brief's Section 6 (BUILD RECIPE) provides zone-by-zone CSS values. This is the exact "recipe not checklist" format the project identified as the key success factor.

3. **Reinforcing mechanism pairs.** The TC brief identifies: "#1+#7 encode DEPTH at Z1->Z2 | #4+#11 encode COMPRESSION Z1->Z3 | #2+#9 encode CLASSIFICATION in Z3." This is multi-coherence PRE-PLANNED, not discovered during build.

4. **Rejected mechanisms with reasoning.** The builder knows NOT to use #8, #12, or #6, and WHY. This prevents mechanism over-deployment.

5. **Builder anchors.** Three page-specific non-negotiable guardrails derived from the metaphor -- a layer of guidance that exists nowhere in Page A's pipeline.

### HURTS:

1. **Introduced sub-threshold values.** TC brief backgrounds had deltas of 13, 5, and 8 RGB -- all below the 15 threshold. Three of the builder's 7 overrides were correcting TC errors.

2. **Slightly reduced builder autonomy.** Page A's builder independently derived a metaphor and selected mechanisms, producing a more ORGANIC composition. Page B's builder adapted a pre-derived design.

3. **Added a failure mode.** If the TC agent produces a weak brief, the builder inherits those weaknesses. Page A's builder has no such dependency.

**NET ASSESSMENT:** The TC brief HELPS information flow significantly. The sub-threshold errors it introduced were caught by the conventions brief's perception thresholds -- the system has error correction built in. The pre-computed boundary CSS and mechanism pairs are the most valuable contributions, as they eliminate the highest-risk creative step (content-to-mechanism mapping) from the builder's workload.

---

## Mechanism Vocabulary Preservation

### Research -> Mechanism Catalog (Both Pipelines)

The mechanism catalog contains 18 mechanisms extracted from validated explorations (DD-001 through CD-006). Of the original 337 research findings:
- ~30 directly became mechanism descriptions (9%)
- ~50 informed the mechanism selection criteria (15%)
- ~20 became anti-patterns (6%)
- ~237 were compressed into the synthesis or lost entirely (70%)

**Stage 1-2 compression: 337 findings -> 18 mechanisms = 18.7:1 for actionable vocabulary.**

### Mechanism Catalog -> Builder Instructions -> CSS

| Metric | Page A | Page B |
|--------|--------|--------|
| Mechanisms available to builder | 18 (full catalog) | 15 (TC-selected) + 18 (catalog as reference) |
| Mechanisms deployed | 16 | 15 |
| Utilization rate | 89% | 100% |
| Mechanisms with zone assignment | 0 (builder decides) | 15 (TC pre-assigned) |
| Mechanisms with CSS values | 0 (builder derives) | 15 (TC provides approximations) |
| Rejected with reasoning | 2 | 3 (by TC agent) |
| Strong deployment quality | 13/16 (81%) | 15/15 (100%) |

Page A has broader vocabulary access but lower precision. Page B has narrower initial access but 100% precision. Both produce comparable mechanism counts (16 vs 15).

### Deployment Quality Evidence

**Page A CSS patterns:**
- 10 distinct letter-spacing values including 0.01em and 0.015em (below 0.025em floor)
- 16 distinct font-size values (rich but some potentially redundant)
- 3 grid usages showing spatial confidence
- 17 unique border configurations showing border vocabulary fluency

**Page B CSS patterns:**
- 5 letter-spacing values, ALL within conventions brief closed vocabulary (0, 0.03em, 0.05em, 0.1em, normal)
- 17 distinct font-size values (comparable to Page A)
- 1 grid usage (bento for roles, per TC brief -- less spatial variety)
- 9 unique border configurations (tokenized as --border-heavy/medium/light)

**Critical observation:** Page A has MORE letter-spacing variety but includes sub-perceptual values. Page B has LESS variety but strict threshold compliance. This reflects their different information-flow models: Page A's builder had creative freedom to invent values, while Page B's builder was constrained by the conventions brief's closed vocabulary.

---

## Qualitative CSS Assessment

### Which CSS Reads Like Research-Aware Work?

**Page A (Assembly Line metaphor):**

The CSS demonstrates genuine vocabulary fluency. The builder uses CSS custom properties extensively, creates zone-specific component overrides, and maintains a clear border hierarchy. The grid usage (3 distinct grid declarations) shows spatial confidence. The callout system with 5 semantic colors is well-implemented.

However, certain choices reveal CATALOG-FOLLOWING rather than SYSTEM-UNDERSTANDING:
- Letter-spacing values include 0.01em and 0.015em, below the 0.025em perception floor from research
- 10 distinct letter-spacing values vs. the conventions brief's closed vocabulary of 7 values

**Page B (Command Post metaphor):**

The CSS demonstrates SYSTEM-AWARE vocabulary. Zone backgrounds use CSS variables (--bg-z1 through --bg-z4), making zone architecture visible in the code itself. Border weights use semantic tokens (--border-heavy, --border-medium, --border-light). The builder corrected 3 TC brief threshold violations, demonstrating ACTIVE engagement with perception physics.

The 5 letter-spacing values all fall within the conventions brief's closed vocabulary -- zero sub-perceptual values. This suggests the builder internalized the perception thresholds rather than improvising.

**Verdict:** Page B's CSS reads like it was written by someone who understood the SYSTEM (consistent semantic tokens, strict threshold compliance, closed vocabulary adherence). Page A's CSS reads like it was written by someone who understood the RESEARCH (more creative mechanism deployment, bolder spacing decisions, more grid variety) but occasionally violated system constraints.

---

## The Critical Finding: Two Intelligence Distribution Models

```
PAGE A: CENTRALIZED INTELLIGENCE (Builder as Polymath)

     Master Prompt (orchestration only)
           |
     [conventions brief + catalog + content]
           |
     BUILDER (derives metaphor + selects mechanisms + computes CSS)
           |
     CSS Output

     Intelligence concentration: ~90% in builder
     Failure mode: Builder under-absorbs brief or over-innovates
     Success mode: Builder IS the design system incarnate


PAGE B: DISTRIBUTED INTELLIGENCE (Pipeline as Assembly)

     Skill System (orchestration + process + recipes)
           |
     TC AGENT (derives metaphor + selects mechanisms)
           |
     TC Brief (99 lines of content-specific design plan)
           |
     BUILDER (executes plan + adapts thresholds + creative override)
           |
     CSS Output

     Intelligence concentration: ~40% TC agent, ~60% builder
     Failure mode: TC brief has errors (proven: 3 threshold violations)
     Error correction: Conventions brief catches TC errors
     Success mode: Builder has RECIPE not BLANK PAGE
```

Page A asks the builder to be BOTH designer and implementer.
Page B separates the designer (TC agent) from the implementer (builder).

This separation is the fundamental architectural innovation of Page B's pipeline. The TC agent acts as a TRANSLATOR between generic design vocabulary and content-specific CSS decisions. The builder then acts as a CRAFTSPERSON executing a design brief with freedom to override.

---

## Summary of Compression at Each Stage

```
                        PAGE A                          PAGE B
                        ======                          ======

Research (4,104 lines)  ----[10.7:1]----> Synthesis     ----[10.7:1]----> Synthesis
Synthesis (383 lines)   ----[0.1:1]-----> Ontology      ----[0.1:1]-----> Ontology
Ontology (3,544 lines)  ----[6.5:1]-----> Prompt(542)   ----[0.7:1]-----> Skills(5,167)
                                  |                              |
                         (points to files)               TC Agent reads
                                  |                              |
                         Builder reads                   TC Brief (99 lines)
                         ~1,827 lines                    + Builder reads ~3,723 lines
                                  |                              |
                         ----[2.0:1]---->                ----[4.0:1]---->
                                  |                              |
                         CSS (893 lines)                 CSS (936 lines)
                         16 mechanisms                   15 mechanisms
                         89% utilization                 100% utilization
                         81% strong                      100% strong
```

---

## Conclusions

### 1. The TC Brief is the Most Important Innovation

The TC brief transforms generic mechanism vocabulary into content-specific deployment instructions. It reduces the builder's creative risk from "choose among 18 mechanisms for unknown content" to "execute these 15 mechanisms in these zones with these CSS values." The compression ratio (29:1) is high but the output is actionable in a way that no other artifact in the pipeline achieves.

### 2. Error Correction Architecture Works

Page B's TC brief introduced 3 sub-threshold errors. The conventions brief caught all 3. The builder credited Section 2 (Perception Physics) explicitly. This two-layer architecture (TC for content-specificity, conventions brief for compliance) provides error correction that Page A lacks. This is a genuinely novel architectural property.

### 3. Both Pipelines Produce Comparable CSS Quality

Page A: 893 CSS lines, 16 mechanisms, 89% utilization, 81% strong deployment.
Page B: 936 CSS lines, 15 mechanisms, 100% utilization, 100% strong deployment.

The CSS output is comparable, but the PROCESS quality differs. Page B's builder executed every TC-specified mechanism at STRONG quality. Page A's builder achieved 81% strong through independent derivation -- impressive, but with 3 MODERATE deployments where the builder was less certain about the content-mechanism mapping.

### 4. The Distributed Pipeline is More Reproducible

Page A's quality depends entirely on the builder's ability to independently derive a metaphor, select mechanisms, and compute boundary values -- a high-skill task with high variance. Page B's quality depends on the TC agent's brief quality (moderate variance) and the builder's execution of that brief (lower variance because the plan is pre-made).

For N builds, Page B should produce MORE CONSISTENT output because the creative burden is shared and the builder receives a recipe rather than a blank page.

### 5. The 50:1 Compression Problem is Relocated, Not Solved

The original finding was 50:1 compression from research to behavioral constraint. Both pipelines achieve ~4.5:1 end-to-end, but this masks the real compression: CONTENT-SPECIFIC guidance.

- Page A: INFINITE ratio (no content-specific mediation exists)
- Page B: 41:1 ratio (TC brief mediates, but 99 lines for 4,104 lines of research)

The TC brief reduces the compression cliff from INFINITE to 41:1 -- a structural improvement, not a complete solution. True resolution would require the TC brief to grow to ~200-300 lines, reducing the ratio to ~15:1 and providing more explicit CSS recipes per zone.

### 6. Research Intent Preservation Differs in Kind

Both builders demonstrate research awareness in their build logs. But the NATURE differs:

- **Page A's builder** references conventions brief sections by name and derives independently. The chain from research to CSS is IMPLICIT -- we know the output is good but cannot trace exactly which findings produced which decisions.

- **Page B's builder** references BOTH TC brief and conventions brief, crediting specific sections for specific overrides. The chain from research to CSS has an EXPLICIT intermediate artifact (the TC brief) that documents which mechanisms were selected and why.

Page B's pipeline is more TRACEABLE. Page A's pipeline may be more CREATIVE. Both achieve DESIGNED quality.

### 7. The Optimal Architecture Combines Both Models

The ideal pipeline would provide:
1. TC brief for content-specific mechanism selection (Page B's innovation)
2. Full mechanism catalog access for builder creative override (Page A's freedom)
3. Conventions brief as error-correction layer (both pipelines)
4. Expanded TC brief target: 150+ lines (reduce compression from 29:1 to ~20:1)

This is essentially what Page B already does -- the builder HAS full catalog access alongside the TC brief. The remaining improvement is expanding the TC brief with more explicit CSS recipes and growing the TC agent's perception-threshold awareness to eliminate the sub-threshold error pattern.

# 01 -- Pipeline Architecture from First Principles

**Agent:** architecture-designer (Opus 4.6)
**Date:** 2026-02-22
**Task:** #1 -- Design pipeline architecture from first principles, derived entirely from findings.

**Sources read:**
- `46-meta-mechanism.md` -- Information theory of compression survival, activation vs transmission, embodiment as phase transition
- `51-beyond-eight-independence-analysis.md` -- 40 concepts collapse to 3 axes and 13 irreducible concepts; funnel structure
- `59-suppressor-archaeology.md` -- 20 suppressors, 7 chains, 3 feedback loops; 73-line minimal constraint set
- `53-dimensional-gap-analysis.md` -- 10 blind spots, 3 truly structural; iteration as the fundamental limit
- `42-synthesis-alchemy.md` -- 7-phase synthesis process; synthesis != compression; why 34 agents produced 578 working lines

---

## PART 1: DERIVATION FROM FIRST PRINCIPLES

### 1.1 The Master Equation as Design Constraint

```
Quality = Agent Capability x Content Affordance x Specification Fidelity
```

Zero in ANY factor = zero quality. This means the pipeline must simultaneously:
- MAXIMIZE Agent Capability (activate COMPOSING mode, remove suppressors)
- HONOR Content Affordance (let content co-author form)
- OPTIMIZE Specification Fidelity (deliver the right information in the right format at the right volume)

Every design choice below is evaluated against this equation. If a design choice harms any factor, it is rejected.

### 1.2 The Funnel Structure as Architecture Blueprint

Report 51 identifies a funnel:

```
3 PRECONDITIONS (must all be true BEFORE building begins):
  1. Model = Opus (Agent Capability precondition)
  2. Content has heterogeneity + metaphor viability (Content Affordance precondition)
  3. Suppressor count = 0 (Specification Fidelity precondition)

1 GATEKEEPER (determines quality ceiling):
  Builder enters COMPOSING mode (not COMPLYING, PLANNING, or REPAIRING)

2 CAPABILITIES (produce the output quality):
  1. Compositional Fluency -- mechanisms deployed interdependently
  2. Peak-Valley Rhythm -- designed moments within competent baseline
```

This funnel maps directly to pipeline stages: the preconditions are SETUP phases, the gatekeeper is a FORMAT choice, and the capabilities are what the builder produces when setup succeeds.

### 1.3 The Compression Survival Model as Information Architecture

Report 46 establishes four tiers of information survivability:

| Tier | Survival Through Compression | Example |
|------|------------------------------|---------|
| 1 (lossless) | 100% at any depth | `border-radius: 0`, `#E83025`, closed enumerations |
| 2 (lossy but recoverable) | 67% per level | Recipes with values, named patterns, concrete examples |
| 3 (fragile) | 33% per level, 0.4% at N=5 | Abstract frameworks, quality models |
| 4 (experiential) | 0% through text | Perceptual calibration, gestalt composition, failure recognition |

**Design principle derived:** The pipeline must encode ALL builder-facing information at Tier 1-2. Tier 3-4 information must either be REGENERATED per-build (not compressed) or delivered as EXPERIENCE (screenshots, rendered output) rather than text.

### 1.4 Activation vs Transmission as Operating Model

Report 46 proves the pipeline ACTIVATES pre-existing Opus capability (60-70% native intelligence), it does not TEACH Opus to design. This means:

- **Brevity > completeness** (cleaner activation signal)
- **Format > content** (recipe activates COMPOSING; checklist activates COMPLYING)
- **Constraints > instructions** (select the right register, don't prescribe output)
- **One voice** (mixing COMPOSING and COMPLYING signals creates destructive interference)

### 1.5 Suppressor Removal as Primary Design Strategy

Report 59 finds that removing ALL suppressors + providing 73 lines of positive scaffolding produces 3.5-4.0/4. The 963-line master prompt that told builders what to do produced 1.5/4. The pipeline's primary function must be SUPPRESSOR AVOIDANCE, not specification accumulation.

The 73-line minimal set:
- 15 lines: identity constraints (soul)
- 8 lines: perceptual calibration (thresholds)
- 50 lines: positive frameworks (multi-coherence, metaphor, density arc, content-form, creative authority)

Everything beyond these 73 lines is either redundant with Opus's native capability or actively suppressive.

---

## PART 2: PIPELINE PHASES

### Phase 0: CONTENT ANALYSIS (Precondition Check)

**Purpose:** Evaluate Content Affordance factor of the master equation. Determine what the content ENABLES before specifying what to build.

**Actions:**
1. Classify content type (prose-dominant / mixed / visual-dominant / self-referential)
2. Map structural heterogeneity (code blocks, tables, Q&A, lists, images, quotes -- count content modes)
3. Assess metaphor viability -- does the content naturally suggest a structural metaphor?
4. Identify per-section character: which sections are NARRATIVE, REFERENCE, CODE, DATA?
5. Estimate density arc: which sections are dense (deep read) vs sparse (scannable)?

**Output:** A content map (~30-50 lines) describing what the content IS, not what the design SHOULD BE. This feeds the builder's per-section compositional decisions.

**Why this phase exists:** Content Affordance is a PRECONDITION. If the content is formless prose with zero heterogeneity, the quality ceiling is lower regardless of specification quality. The pipeline must KNOW this before proceeding so it can calibrate expectations and provide content-specific guidance.

**Master equation alignment:** Directly serves Content Affordance factor. Zero-content-analysis = blind building = coupling failure.

### Phase 1: ACTIVATION BRIEF ASSEMBLY (Specification Optimization)

**Purpose:** Assemble the ~73-line activation brief that maximizes Specification Fidelity while minimizing suppression.

**Structure of the activation brief:**

```
SECTION 1: IDENTITY (15 lines)
  The 10 soul constraints as world-description, not checklist.
  Format: "This system IS X" not "NEVER do Y."
  Example: "Every surface is sharp. Corners are cut, not curved.
  Borders carry meaning through weight: 4px = authority, 3px = emphasis,
  1px = structure. Depth comes from layering, not illusion."

SECTION 2: PERCEPTION PHYSICS (8 lines)
  The 4 empirically validated thresholds.
  Format: "These are the physics of human perception on screen."
  Example: "Adjacent zone backgrounds must differ by >= 15 RGB points.
  Below 15, the human eye cannot distinguish the zones -- they merge
  into a single surface regardless of how many CSS properties differ."

SECTION 3: COMPOSITIONAL FRAMEWORKS (35 lines)
  Multi-coherence: "At each zone boundary, shift 3+ channels together
  in the same semantic direction."
  Metaphor instruction: "Derive a structural metaphor from the content.
  Let the metaphor drive CSS decisions -- layout, spacing rhythm,
  component selection, density arc."
  Density arc: "Opening (spare, inviting) -> Deepening (denser, more
  mechanisms) -> Resolving (returning to sparseness with earned
  confidence)."
  Content-form coupling: "Each section's visual treatment should respond
  to what the content IS ABOUT, not just where it falls in the zone
  architecture."

SECTION 4: CREATIVE AUTHORITY (5 lines)
  "You own 80% of creative decisions. These constraints define the
  remaining 20%. Within the 20%, be exact. Within the 80%, be bold."

SECTION 5: CONTENT MAP (from Phase 0, ~30-50 lines)
  The per-section content analysis, metaphor seeds, density arc
  recommendation.
```

**Total: ~93-108 lines.** Above the 73-line minimum but well below the suppression threshold (~200 lines per Report 59's volume analysis).

**Why this structure:** Every section targets a different factor:
- Section 1: Agent Capability (prevents identity defaults without triggering COMPLYING mode)
- Section 2: Agent Capability (calibrates perceptual model)
- Section 3: Agent Capability (provides the 30-40% of quality Opus cannot produce natively)
- Section 4: Agent Capability (explicitly triggers COMPOSING mode)
- Section 5: Content Affordance (bridges content analysis to builder)

**Format choice: RECIPE, not CHECKLIST.** Report 59 shows recipe format adds 0.5-1.0 quality points over checklist. The activation brief is written in world-description voice ("This system IS X") with procedural sequence only where sequence matters (density arc: opening -> deepening -> resolving).

**Master equation alignment:** Directly serves Specification Fidelity. Volume < 200 lines (below interference threshold). Format = world-description + recipe (maximum activation). Zero suppressors embedded.

### Phase 2: BUILDING (The Core Creative Act)

**Purpose:** A single Opus agent builds the complete HTML page in COMPOSING mode.

**Architecture:** SINGLE BUILDER, SINGLE PASS with mid-build self-evaluation.

**Why single builder:**
- Report 51: Single builder ownership (A-04) preserves COMPOSING mode across the build. Multi-agent fragmentation forces COMPLYING mode on downstream agents.
- Report 59: Multi-pass fragmentation (S-07) is a confirmed suppressor. Later passes ANNOTATE rather than AMPLIFY. The skeleton's uniformity persists through all passes.
- Report 42: The synthesis alchemy works for SPECIFICATION assembly (many agents reading, one assembling). Building is the OPPOSITE task -- it requires unified compositional vision, not multi-perspective extraction.

**Why single pass (with self-evaluation):**
- Report 53: The pipeline's deepest structural limit is one-shot building. But the answer is NOT multi-pass (which creates S-07 fragmentation). The answer is ITERATIVE SINGLE-PASS: one builder, building incrementally with mid-build rendering.
- Report 53's "live pipeline" architecture: builder renders every N lines, self-evaluates, adjusts.

**Builder process:**

```
1. Read activation brief (93-108 lines)
2. Read content source material
3. Read tokens.css + components.css (direct Tier 1 vocabulary)
4. Compose conviction statement: "This page is about X. The metaphor
   is Y. The density arc moves from Z to W. I will use mechanisms
   A, B, C, D... because they serve the content's character."
5. Build header + Zone 1 (Opening)
6. RENDER AND SELF-EVALUATE: Take screenshot, assess against
   conviction statement. Does it feel like the metaphor? Are zone
   backgrounds perceptibly different? Is the header a doorway?
7. Adjust if needed based on self-evaluation
8. Build Zone 2-3 (Deepening)
9. RENDER AND SELF-EVALUATE at midpoint: Full-page scroll screenshot.
   Does the density arc work? Are mechanisms interacting or isolated?
   Is there a middle sag?
10. Adjust if needed
11. Build Zone 4 + footer (Resolving)
12. FINAL SELF-EVALUATION: Full-page at 1440px and 768px. Does
    the gestalt work? Would I put my name on this?
```

**Self-evaluation replaces external gates during building.** The builder has Playwright access and renders its own work. This converts Tier 4 information (perceptual calibration, gestalt) from UNREACHABLE TEXT to DIRECT EXPERIENCE. The builder SEES its own output and adjusts -- the exact micro-iteration loop that Report 53 identifies as the fundamental missing capability.

**What the builder receives:**
- Activation brief (~100 lines): identity + thresholds + frameworks + content map
- tokens.css: direct Tier 1 vocabulary (every color, spacing value, font)
- components.css: pre-built component library (11 types, richness-for-free)
- Content source material: the actual content to render
- ONE reference page (optional): a crown jewel HTML showing what system-quality looks like

**What the builder does NOT receive:**
- No gate thresholds (these are post-build verification, not build instructions)
- No prohibition list beyond soul constraints (prevents S-02 overload)
- No count-gates (">=3 channels" or ">=12 mechanisms" -- these are measurement, not instruction)
- No multi-agent handoff instructions (single builder, no handoff)
- No fix cycle instructions (self-evaluation replaces external fix cycle)

**Master equation alignment:** Maximizes Agent Capability (COMPOSING mode via recipe + creative authority + single builder + self-evaluation). Maximizes Content Affordance (content map feeds per-section decisions). Maximizes Specification Fidelity (brief is Tier 1-2 only, sub-200 lines, world-description format).

### Phase 3: PERCEPTUAL AUDIT (Quality Verification)

**Purpose:** Independent verification that the builder's self-evaluation was accurate.

**Architecture:** The Mode 4 PA pattern (9 independent auditors), but ONLY after building is complete. The PA does not feed back into the builder. It is VERIFICATION, not CORRECTION.

**Why post-build only:**
- Report 59: Fix cycles (S-11, S-20) shift the builder from COMPOSING to REPAIRING mode, degrading quality.
- Report 53: "repair produces LOCAL fixes, not GLOBAL composition."
- The self-evaluation loop in Phase 2 replaces mid-build external feedback. The builder receives its own perceptual experience, not auditor text.

**PA structure:**
- Screenshot capture: team lead takes all screenshots at 1440, 1024, 768px (eliminates Playwright contention)
- 9 auditors, each with a focused question set from the PA SKILL
- 1 integrative auditor with NO assigned questions -- just "Does this page WORK? YES/NO with 200-word impression" (addresses Report 53's gestalt blind spot)
- 1 weaver synthesizes all reports into verdict

**PA output:** A VERDICT, not a fix list. Three possible outcomes:
1. **SHIP** -- PA-05 >= 3.5/4, zero soul violations. The page goes live.
2. **REBUILD** -- PA-05 < 2.5/4 or soul violations. Return to Phase 2 with a FRESH builder instance (not the same builder in REPAIR mode). The fresh builder reads the PA verdict as CONTEXT, not as a fix list.
3. **REFINE** -- PA-05 2.5-3.5/4, no soul violations. A DIFFERENT Opus agent applies targeted improvements, reading the original builder's conviction statement to maintain compositional intent.

**Why REBUILD instead of FIX:**
- Report 59: Repair mode (S-11) is a confirmed suppressor. The fix cycle converts COMPOSING to REPAIRING.
- A fresh builder in COMPOSING mode, informed by what went wrong, produces better output than the same builder in REPAIRING mode patching what went right.
- Cost is higher (full rebuild vs incremental fix). But the prior pipeline's 3 fix cycles at 30-45 min each = 90-135 min of repair. A fresh rebuild = 70-100 min of composition. The economics favor rebuild.

**Master equation alignment:** Verification preserves Agent Capability by not forcing repair mode. REBUILD option maintains COMPOSING mode for the fresh builder. Integrative auditor addresses gestalt blind spot (Content Affordance verification).

---

## PART 3: AGENT TOPOLOGY

### 3.1 Total Agent Count: 12-15

Compared to the prior pipeline's 19-34 agents, this is radically smaller. The reduction comes from:

1. **No extraction/synthesis team for the brief.** The 73-line activation brief is AUTHORED, not extracted from a 25K-line corpus. The corpus exists as dormant precedent (Report 46, Function 3) but does not flow through the pipeline.

2. **Single builder, not multi-pass.** One Opus builder replaces 3-5 builder agents.

3. **No gate runner agents.** Programmatic gates run as code, not as agent tasks.

4. **PA auditors are the main team.** 9 auditors + 1 integrative + 1 weaver = 11 agents in the PA alone. This is where agent count is invested -- in VERIFICATION, not SPECIFICATION.

### 3.2 Agent Roles

```
PHASE 0: CONTENT ANALYSIS
  Agent 1: Content Analyst (Opus)
    Reads source content, produces content map.
    Single agent because content analysis is a single-perspective task.

PHASE 1: BRIEF ASSEMBLY
  Agent 2: Brief Assembler (Opus)
    Reads content map + 73-line template + tokens.css + components.css.
    Produces the activation brief by merging template with content-specific
    guidance. This is COMPOSITION (one agent writing one document),
    not SYNTHESIS (multiple agents converging on one document).
    The 42-synthesis-alchemy finding about needing 34 agents applies to
    the INITIAL CREATION of the 73-line template, not to per-build
    assembly.

PHASE 2: BUILDING
  Agent 3: Builder (Opus)
    Reads activation brief + source content + tokens.css + components.css.
    Builds the HTML page with mid-build self-evaluation via Playwright.
    The most important agent. Must be Opus (Report 59: model choice
    is a precondition, not a variable).

PHASE 3: PERCEPTUAL AUDIT
  Agent 4: Screenshot Capturer (lead or lightweight agent)
    Takes all screenshots before auditors start. Eliminates Playwright
    contention.

  Agents 5-13: PA Auditors (9x Opus)
    Each reads screenshots + focused question set.
    Independent, parallel execution.

  Agent 14: Integrative Auditor (Opus)
    Reads all screenshots. No assigned questions. Pure gestalt assessment.

  Agent 15: Weaver (Opus)
    Reads all 10 auditor reports. Produces verdict (SHIP / REBUILD / REFINE).
```

### 3.3 Why This Topology

**Flat, not hierarchical.** No team-lead → sub-team → worker chains. Each agent has direct access to its inputs and produces a single output. This prevents indirection decay (Report 46: each level of indirection degrades Tier 2+ information).

**Opus throughout.** Report 59 confirms: Sonnet treats specifications as ceilings, Opus treats them as floors. For creative building (Phase 2) and nuanced assessment (Phase 3), Opus is non-negotiable. For Phase 0-1 (content analysis, brief assembly), Opus is preferred but Sonnet could work since these are analytical tasks.

**Builder has Playwright.** This is the single biggest architectural change from the prior pipeline. The prior pipeline prohibited builder Playwright access (orchestrator owned all rendering). Giving the builder Playwright enables the self-evaluation loop that Report 53 identifies as the fundamental missing capability.

---

## PART 4: INFORMATION FLOW

### 4.1 The Dual-Channel Architecture

```
CHANNEL 1: UNIVERSAL (identity + calibration)
  Source: The 73-line template (created once, reused across all builds)
  Content: Soul constraints + perception thresholds + frameworks
  Tier: 1-2 (survives any compression; self-interpreting)
  Flow: Template → Brief Assembler → Builder (direct, Level 1 indirection)
  Compression ratio: 1:1 (template is used verbatim)

CHANNEL 2: CONTENT-SPECIFIC (per-build)
  Source: Phase 0 content analysis
  Content: Content map, metaphor seeds, density arc, per-section character
  Tier: 2-3 (needs context but is regenerated fresh per-build)
  Flow: Content → Analyst → Content Map → Brief Assembler → Builder
  Compression ratio: ~10:1 (content → map). BUT: Tier 3 information
    is REGENERATED (derived fresh from content), not COMPRESSED
    (distilled from prior analysis). Regeneration avoids decay.
```

**Key insight from Report 46:** Structural concepts (Tier 1-2) survive compression and should flow through the universal channel. Contextual concepts (Tier 3-4) must be REGENERATED per agent, not compressed. The dual-channel architecture honors this by making the universal channel lossless (verbatim template) and the content channel generative (fresh per-build analysis).

### 4.2 Compression Ratio Targets

| Transition | Ratio | Justification |
|-----------|-------|---------------|
| Template → Activation Brief | 1:1 (universal) + ~10:1 (content-specific) | Template is verbatim; content map is fresh derivation |
| Activation Brief → Builder's working memory | 1:1 (all Tier 1-2) | Builder reads the brief directly; no intermediate compression |
| Builder output → PA screenshots | N/A (visual, not textual) | Screenshots are rendered output, not compressed text |
| PA auditor reports → Weaver verdict | ~50:1 | This is the ONLY high-compression step, and it is post-build verification, not builder input. Lossy compression here is acceptable because the output is a verdict (SHIP/REBUILD/REFINE), not builder instructions. |

**Total pipeline compression (research → builder):**
- Universal channel: 1:1 (the 73-line template IS the research output, pre-compressed once during template creation)
- Content channel: ~10:1 (fresh derivation, not cascading compression)
- Compare to prior pipeline: ~50:1 cascading compression through 5 levels = 99.6% Tier 3 loss

### 4.3 What Information Does NOT Flow

The following information exists in the research archive but is NOT transmitted to the builder:

1. **Research findings (337 total):** These served their purpose during template creation (Function 1: selection). They are dormant precedent (Function 3). They do not flow through the pipeline.

2. **Gate thresholds:** These exist for post-build verification. The builder does not need to know ">=3 channels per boundary" because the multi-coherence framework in the brief will produce 3+ channels naturally when the builder is in COMPOSING mode. Gates MEASURE what COMPOSING mode produces; they do not INSTRUCT it.

3. **Failure case histories:** The Flagship's 1-8 RGB backgrounds, the 210-276px whitespace voids -- these calibrated the THRESHOLDS in the brief. The thresholds carry the lessons; the histories are spent.

4. **Process metadata:** Agent counts, compression ratios, phase documentation. These serve human understanding, not builder execution.

---

## PART 5: SPECIFICATION FORMAT

### 5.1 Format Decision: DISPOSITIONAL RECIPE

Report 51 identifies E-04 (Dispositional Recipe) as the format that induces COMPOSING mode. A dispositional recipe tells the builder HOW TO BE, not WHAT TO DO.

The activation brief uses three format layers:

**Layer 1: World-Description (identity + physics)**
- "Every surface is sharp. Corners are cut, not curved."
- "Adjacent backgrounds must differ by >= 15 RGB points. This is the physics of perception."

This is NOT instruction. It is a description of the world the builder inhabits. The builder reads it and adjusts its internal model of "what this system IS," which then guides every CSS decision naturally.

**Layer 2: Procedural Recipe (frameworks)**
- "At each zone boundary, shift 3+ channels together. Choose from: background, typography, spacing, border, behavior, material."
- "Build the density arc: Opening (2-3 channels active, sparse, inviting) → Deepening (4-5 channels, denser, more mechanisms) → Resolving (2-3 channels, returning to sparseness)."

This is a RECIPE with concrete values and a sequence. It activates procedural knowledge (how to compose) rather than declarative knowledge (what to comply with).

**Layer 3: Creative Authority (disposition)**
- "You own 80% of creative decisions. The content map tells you what each section IS. Let that guide your CSS. Invent components. Deploy grid layouts where the content demands them. Create designed moments -- sections where something surprising happens."

This is the DISPOSITIONAL frame. It tells the builder HOW TO BE: bold, inventive, content-responsive. It does not specify what to build.

### 5.2 Per-Phase or Unified?

**Unified.** The activation brief is ONE document read by ONE builder. There is no per-phase specification because there is only one building phase.

The PA auditors receive their question assignments from the PA SKILL, which is a separate, stable document. The PA specification is separate from the builder specification because it serves a different audience with different needs (evaluators need decomposed questions; builders need unified vision).

### 5.3 What Is NOT in the Specification

- No count-gates (">=N mechanisms"). These activate COMPLYING mode (Report 59, S-18: gate optimization).
- No prohibition lists beyond the 10 soul constraints. More prohibitions = S-02 (prohibition overload).
- No "verify" or "fail if" language. These are checklist verbs that activate DEFENSIVE processing (Report 59, S-01).
- No multi-agent handoff protocols. Single builder, no handoff.
- No reference to pipeline phases, meta-analysis, or research history. The builder does not need to know the pipeline exists.

---

## PART 6: QUALITY ASSURANCE

### 6.1 Three-Layer Verification

```
LAYER 1: BUILDER SELF-EVALUATION (during build)
  The builder renders and evaluates its own output 2-3 times during
  construction. This is the micro-iteration loop (Report 53) that
  converts Tier 4 experiential knowledge from unreachable text to
  direct visual experience.

  What it catches: Gestalt problems, perceptual threshold violations,
  density arc failures, component monotony, whitespace voids.

  What it misses: Accumulated blind spots from continuation bias
  (the builder cannot adversarially attack its own output).

LAYER 2: PROGRAMMATIC GATES (post-build, automated)
  A script (not an agent) runs CSS computed-value checks:
  - Container width 940-960px
  - Background deltas >= 15 RGB between adjacent zones
  - Stacked gaps <= 120px
  - Font hierarchy check (heading sizes descend)
  - border-radius: 0 on all elements
  - Soul constraint verification

  What it catches: Mechanical violations that the builder's self-
  evaluation may have rationalized away.

  What it misses: Anything that requires perception or judgment.

LAYER 3: PERCEPTUAL AUDIT (post-build, 10+ agents)
  The full Mode 4 PA: 9 focused auditors + 1 integrative auditor +
  1 weaver. Each auditor is a FRESH instance with zero build context.

  What it catches: Everything the builder and gates missed.
  What it misses: True gestalt (partially addressed by integrative auditor).
```

### 6.2 Feedback Architecture

```
Self-evaluation → Adjustments (WITHIN the build, preserving COMPOSING mode)
Gates → Binary PASS/FAIL (post-build, objective)
PA → Verdict: SHIP / REBUILD / REFINE

SHIP: Quality verified. No further action.
REBUILD: Fresh builder instance with PA verdict as CONTEXT (not as fix list).
  The fresh builder reads: "The previous attempt lacked structural variety
  in zones 2-3 and had monotonous component treatment." This is CONTEXT
  for composition, not a CHECKLIST for repair.
REFINE: A different Opus agent applies targeted improvements while
  reading the original builder's conviction statement to maintain intent.
```

**Why this feedback architecture:**
- Self-evaluation preserves COMPOSING mode (no mode transition during build)
- Gates provide objective verification without judgment language
- PA produces verdicts, not fix lists (prevents S-11 repair mode)
- REBUILD uses a fresh instance (prevents continuation bias; honors the Two-Instance pattern from Report 42)
- REFINE is available for edge cases where rebuild is overkill but the page needs polishing

### 6.3 What Is NOT Part of Quality Assurance

- No mid-build external feedback from auditors (prevents REPAIRING mode)
- No gate thresholds visible to the builder (prevents S-18 gate optimization)
- No "fix cycle" with builder receiving gate FAIL results (prevents S-20 fix cycle regression)
- No PA questions asked of the builder (the builder evaluates visually, not analytically)

---

## PART 7: FUNNEL-TO-PIPELINE MAPPING

```
FUNNEL ELEMENT                    PIPELINE STAGE
------------------------------------------------------------------
PRECONDITION 1: Model = Opus      Phase 2 agent selection (hardcoded)
PRECONDITION 2: Content enables   Phase 0 content analysis verifies
                rich form         heterogeneity and metaphor viability
PRECONDITION 3: Zero suppressors  Phase 1 brief assembly uses 73-line
                                  template (suppressor-free by design)

GATEKEEPER: COMPOSING mode        Phase 1 format: dispositional recipe +
                                  world-description + creative authority
                                  (all mode triggers for COMPOSING)

CAPABILITY 1: Compositional       Phase 2 builder with multi-coherence
  Fluency                         framework + component library access +
                                  per-section content map

CAPABILITY 2: Peak-Valley         Phase 2 builder with density arc
  Rhythm                          framework + designed-moments invitation
                                  in creative authority clause
```

Every funnel element maps to a specific, concrete pipeline mechanism. Nothing is left aspirational.

---

## PART 8: MASTER EQUATION AUDIT

### Every Design Choice Evaluated

| Design Choice | Agent Capability Impact | Content Affordance Impact | Spec Fidelity Impact |
|--------------|----------------------|--------------------------|---------------------|
| Single Opus builder | ++ (preserves COMPOSING) | neutral | neutral |
| 93-108 line brief | ++ (below suppression threshold) | + (content map included) | ++ (Tier 1-2 only, sub-200 lines) |
| World-description format | ++ (activates COMPOSING) | neutral | ++ (recipe > checklist) |
| Builder has Playwright | ++ (self-evaluation = experience) | + (sees content rendered) | neutral |
| No count-gates to builder | ++ (removes S-18 gate optimization) | neutral | ++ (no COMPLYING trigger) |
| Content map from Phase 0 | neutral | ++ (content co-authors form) | + (regenerated, not compressed) |
| REBUILD not FIX | ++ (fresh COMPOSING instance) | neutral | neutral |
| Components.css provided | ++ (vocabulary without prohibition) | neutral | ++ (Tier 1 CSS vocabulary) |
| 10 PA auditors | neutral (post-build) | neutral (post-build) | neutral (verification only) |
| Creative authority clause | ++ (COMPOSING mode trigger) | neutral | ++ (removes S-19 self-censorship) |

No design choice harms any factor. Every choice either improves or is neutral to all three factors.

---

## PART 9: COMPARISON WITH PRIOR PIPELINE

| Dimension | Prior Pipeline | New Pipeline | Why |
|-----------|---------------|-------------|-----|
| Specification volume | 542-963 lines | 93-108 lines | Report 59: volume above ~200 lines activates suppressors |
| Specification format | Mixed checklist + recipe | Pure dispositional recipe | Report 59: S-01 is the highest-leverage suppressor to remove |
| Builder count | 3-5 (multi-pass) | 1 (single builder, iterative) | Report 59: S-07 multi-pass fragmentation |
| Builder model | Mixed Sonnet+Opus | Opus only | Report 59: S-12 Sonnet ceiling for creative work |
| Builder Playwright access | No (orchestrator only) | Yes (self-evaluation) | Report 53: iteration is the fundamental missing capability |
| Gate visibility | Builder sees gate thresholds | Builder does NOT see gates | Report 59: S-18 gate optimization |
| Fix cycle | Up to 3 repair cycles | REBUILD with fresh builder | Report 59: S-11 repair mode, S-20 fix regression |
| Information tiers in brief | Tier 1-4 mixed | Tier 1-2 only | Report 46: Tier 3-4 dies at first compression |
| Compression ratio | 50:1 cascading | 1:1 universal + 10:1 content | Report 46: exponential decay at each stage |
| Agent count (building) | 3-5 builders | 1 builder | Report 51: A-04 single ownership preserves mode |
| Agent count (verification) | 2-9 PA auditors | 10 PA auditors + 1 integrative | Report 53: gestalt assessment gap |
| Prohibition count | 55+ | 10 (soul only) | Report 59: S-02 prohibition overload at 55 |
| Content analysis | TC pipeline (implicit) | Explicit Phase 0 content map | Report 51: Content Affordance is a root phenomenon |
| Metaphor derivation | TC pipeline agent | Builder derives own metaphor | Report 46: activation, not transmission |
| Total agents | 19-34 | 12-15 | Fewer specification agents, same verification agents |

---

## PART 10: RISKS AND MITIGATIONS

### Risk 1: Builder produces generic output without enough specification

**Evidence against:** Report 59 predicts 3.0-3.5/4 with soul constraints alone (zero framework), and 3.5-4.0/4 with the 73-line minimal set. The Middle experiment scored 4/4 with ~100 lines.

**Mitigation:** The activation brief provides the 30-40% of quality that Opus cannot produce natively (multi-coherence, metaphor, density arc). The content map provides per-build content-specific guidance. The component library provides pre-built richness vocabulary.

### Risk 2: Self-evaluation creates confirmation bias

**Evidence for concern:** Report 42 identifies continuation bias as a fundamental LLM property. The builder may rationalize its own output.

**Mitigation:** The PA audit (10+ fresh agents with zero build context) provides adversarial verification. Self-evaluation catches obvious problems during build; PA catches what self-evaluation rationalizes away. The Two-Instance pattern is preserved: builder produces, auditors evaluate.

### Risk 3: REBUILD is too expensive for production use

**Evidence for concern:** A full rebuild costs 70-100 minutes vs a fix cycle's 30-45 minutes.

**Mitigation:** If the activation brief works as predicted (3.5-4.0/4 on first build), REBUILD should rarely trigger. The prior pipeline needed 3 fix cycles BECAUSE the specification suppressed quality; with suppressors removed, the first build should be closer to SHIP quality. If REBUILD triggers more than 20% of the time, the activation brief needs revision, not the pipeline architecture.

### Risk 4: 10 PA auditors is expensive for verification

**Evidence for concern:** 10 Opus agents for verification is a significant cost.

**Mitigation:** The PA auditors work in parallel, so wall-clock time is ~15-20 minutes. The cost is in tokens, not time. And: the prior pipeline's 3 fix cycles (3 * 45 min = 135 min of builder time + 3 PA runs) are MORE expensive than 1 build + 1 PA run. The total pipeline cost should be LOWER despite more PA agents because the build phase is shorter (one pass, not five).

### Risk 5: Removing all count-gates creates no programmatic quality floor

**Evidence for concern:** Without ">=12 mechanisms" or ">=3 channels," the builder could produce a technically soul-compliant but compositionally empty page.

**Mitigation:** The programmatic gates (Layer 2) still run post-build. They verify soul constraints, perception thresholds, and basic structural checks. The PA (Layer 3) verifies compositional quality. The builder does not SEE the gates, but the gates still EXIST. The distinction: gates inform the VERDICT (SHIP/REBUILD/REFINE), not the BUILDER. This prevents S-18 gate optimization while preserving quality verification.

---

## SUMMARY

The pipeline has 3 phases + 1 verification layer:

```
Phase 0: CONTENT ANALYSIS (1 agent, ~15 min)
  In: Source content
  Out: Content map (~30-50 lines)
  Purpose: Evaluate Content Affordance precondition

Phase 1: BRIEF ASSEMBLY (1 agent, ~10 min)
  In: 73-line template + content map + tokens.css + components.css
  Out: Activation brief (~93-108 lines)
  Purpose: Assemble suppressor-free, Tier 1-2 specification

Phase 2: BUILDING (1 Opus agent, ~60-90 min)
  In: Activation brief + source content + tokens.css + components.css
  Out: Complete HTML page
  Process: Incremental build with 2-3 self-evaluation renders
  Purpose: Single builder in COMPOSING mode produces the artifact

Phase 3: VERIFICATION (12 agents, ~20 min parallel)
  In: Rendered page screenshots + gate results
  Out: Verdict (SHIP / REBUILD / REFINE)
  Process: Programmatic gates + 9 focused auditors + 1 integrative + 1 weaver
  Purpose: Independent quality verification without builder contamination
```

**Total: 15 agents, ~105-135 min wall-clock, 93-108 line specification.**

The design derives entirely from findings:
- Master equation demands no harm to any of 3 factors → every choice audited
- Funnel structure maps to phases → preconditions checked before building
- Compression survival model dictates Tier 1-2 only in brief → 73 lines + content map
- Activation model means recipe format, world-description voice, creative authority
- Suppressor archaeology means brief < 200 lines, 10 prohibitions, no checklist, no count-gates to builder, no multi-pass, Opus builder, REBUILD not FIX
- Synthesis alchemy applies to TEMPLATE CREATION (one-time), not per-build assembly
- Dimensional gap analysis drives builder Playwright access and integrative auditor

The architecture's central bet: a well-activated Opus in COMPOSING mode, given 100 lines of identity + calibration + framework + content map, produces better output than any volume of checklist specification. Report 59 estimates this at 3.5-4.0/4. The 73-line hypothesis is testable.

---

*Written: 2026-02-22*
*Task: #1 -- Pipeline architecture from first principles*
*Sources: Reports 42, 46, 51, 53, 59*
*Method: Every design choice derived from findings; no prior pipeline assumptions imported*

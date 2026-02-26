# Skill & Protocol Extraction: Complete Pipeline + PA + Slicing + Isolation

**Purpose:** Extract EVERY LINE of pipeline, PA protocol, prompt slicing, and isolation matrix
**Date:** 2026-02-16
**Agent:** skill-protocol-extractor (ceiling-prompt-team Task #6)
**Sources:** tension-composition SKILL.md (1,878 lines), perceptual-auditing SKILL.md (774 lines), PROMPT-SLICING-STRATEGY.md (505 lines), INFORMATION-ISOLATION-MATRIX.md (515 lines)

---

## 1. COMPLETE PIPELINE PHASES (0 through 7+)

### Phase 0: Content Assessment

**Phase 0A: Content Type Classification**
- **Prose-dominant** (<30% code/tables/diagrams) → STANDARD path
- **Mixed** (30-60% code/tables/diagrams) → HYBRID path (run pipeline on narrative sections)
- **Visual-dominant** (>60% code/tables/diagrams) → PRESENTATION-INTRINSIC path (skip metaphor for visual portions)
- **Self-referential** (content describes design system itself) → ABORT (pipeline cannot derive tension when content IS the system)

**Phase 0B: Scope Assessment**
- **MICRO** (<100 words): Skip pipeline. Apply design system defaults.
- **SHORT** (100-500 words): Reduced pipeline. Run with 2 needs max per axis. Single metaphor.
- **STANDARD** (500-3000 words): Full pipeline as specified.
- **LONG** (3000-10000 words): Segment content first. Run pipeline per section, then unifying pass.
- **MASSIVE** (10000+ words): Pipeline runs on individual pages, not the whole. Multi-page architecture.

**Phase 0C: Section Identification**
For STANDARD and LONG content:
1. Identify natural sections by heading, topic shift, or mode change
2. Classify each: NARRATIVE / REFERENCE / CODE / DATA / MIXED
3. Flag sections with incompatible structural needs (may need section-level metaphor variation in Phase 4)

---

### Phase 0D: Tier Classification and Pipeline Routing

**BEFORE entering Phase 1, classify target tier:**

| Content Signal | Tier | Route |
|---------------|------|-------|
| <200 words, API reference, config table, changelog | **Floor** | Skip Phases 1-5. Use Track 1 (component assembly). |
| Tutorial, guide, overview, comparison, narrative (prose-dominant) | **Middle** | Skip Phases 1-3. Go to Phase 4.0 with PATTERN selection. |
| Genuine structural tension (Addition Test = NO), prose-dominant | **Ceiling** | Full pipeline (Phases 1-7). |
| Anchor content, design system showcase, philosophical deep-dive | **Flagship** | Full pipeline + multi-pass audit. |

**CRITICAL CAVEAT — Mechanism Count as Proxy, Not Target:**
Mechanism counts (5, 8-10, 12-15, 16-18) describe what each tier NATURALLY produces when content-mechanism fit is optimized. They are NOT targets to hit. Peak richness occurs at maximum content-mechanism fit, not maximum technique count.

**Provenance (backward-engineered from existing pages):**
- Variant B (Phase D best, built under "sample 2-4"): deployed 5 mechanisms across 2 categories
- OD-004 (geological confidence, showcase): deployed ~12-15 across all 5 categories
- CD-006 (combination pilot, 39/40 score): deployed ~16-18 across all 5 categories
- DD-006 (fractal, crown jewel): deployed ~16+ mechanisms

**Natural landing zones:**
- 30-45 min component assembly → ~5 mechanisms
- 70-100 min individual mechanism selection across all categories → ~8-10
- 150-220 min metaphor-driven combination → ~12-15
- 240-400 min multi-pass audit full pipeline → ~16-18

**Middle-tier validation evidence:** Middle experiment (SYSTEM content, F-PATTERN, single-pass) deployed 12 mechanisms with per-category distribution S:1, H:3, C:4, D:2, N:3. This achieved PA-05 DESIGNED (4/4 sub-criteria), demonstrating per-category deployment at Middle tier crosses "designed vs formatted" threshold without requiring metaphor derivation.

**For Middle-tier pages (SKIP Phases 1-3):**
You do NOT derive a metaphor. Instead, select a DENSITY PATTERN.

**Patterns vs Mechanisms (important distinction):** Density patterns (CRESCENDO/F-PATTERN/BENTO/PULSE) are page-scale spatial organization strategies. Mechanisms (18 individual CSS techniques) are deployed WITHIN that skeleton.

| Content Type | Pattern | Why |
|--------------|---------|-----|
| Tutorial, step-by-step guide | **CRESCENDO** | Density builds progressively (sparse intro → dense peak → sparse resolution) |
| Reference, lookup, API docs | **F-PATTERN** | Dense left column (navigation), sparse right (content) |
| Overview, dashboard, card gallery | **BENTO** | Grid-based modular sections at varying densities |
| Narrative, story arc, case study | **PULSE** | Rhythmic dense-sparse-dense alternation |

**Middle-tier output:**
```
TIER: Middle
PATTERN: [selected pattern]
JUSTIFICATION: [why this pattern fits this content]
SKIP: Phases 1-3 (no metaphor derivation)
NEXT: Phase 4.0 (mechanism extraction with selected pattern)
```

**WHY Middle skips Phases 1-3:** Middle uses content-structure mapping (content feature → mechanism capability, direct mapping) instead of Ceiling's metaphor-driven selection (metaphor → shared semantic dimension → multiple mechanisms). Both tiers use the same 18-mechanism catalog. The difference is selection logic, not available tools.

**Graceful degradation protocol:** If degrading from higher tier, MANDATORY DOCUMENTATION (3 items):
(a) What metaphor/pattern was attempted?
(b) Why was it abandoned?
(c) What would make the higher tier viable for this content?

**Tier distinction is NOT just count — it's deployment level:**
- **Floor:** Component assembly only (0 custom mechanisms, Track 1 templates)
- **Middle:** Individual mechanism deployment (each serves content independently)
- **Ceiling:** Mechanism COMBINATION deployment (2-3 mechanisms encode SAME semantic)
- **Flagship:** Multi-pattern COMPOSITION (3+ density patterns with typed transitions)

---

### Phase 0D-CEILING: Ceiling Tier Context Box

**If routed to Ceiling tier (Addition Test = NO), read this context before proceeding:**

You are building for content with GENUINE structural tension — components cannot fulfill reader needs without transformation. This means:

1. **Metaphor is mandatory:** You MUST derive a metaphor through Phases 1-3. No pattern shortcuts.
2. **Per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+):** Deploy at least 1 mechanism from EACH of the 5 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation).
3. **Reinforcing pairs required:** At least 2 mechanism pairs must encode the SAME semantic dimension through different CSS channels (e.g., border-weight + zone backgrounds both encode depth).
4. **Multi-channel coherence:** Multiple mechanisms work TOGETHER through metaphor, expressing shared meaning through different CSS properties.
5. **4-scale fractal coherence:** Pattern visible at Navigation + Page + Section + Component scales (not just Page + Component like Middle).
6. **Build time: 150-220 minutes (single-pass) or 240-400 minutes (multi-pass):** Ceiling takes 2-3x Middle build time. This is expected and appropriate.
7. **Container width 940-960px is NON-NEGOTIABLE:** Metaphor NEVER overrides this. Express any metaphor-driven narrowing through INTERNAL padding, never by reducing container width below 940px.

**CRITICAL:** Ceiling is NOT "more mechanisms than Middle." Ceiling is "mechanisms work TOGETHER through metaphor, not independently." The combination creates coherence, not just coverage. Natural mechanism count lands at 12-15, but count is a BYPRODUCT of multi-channel encoding, not a target.

**Metaphor shapes internal experience; guardrails preserve external readability.** The 940-960px container, 45-80 CPL, 1.5 line-height, and breathing zone minimums are NEVER compromised for metaphor fidelity.

---

### Phase 0E: Library Access Prohibition (CRITICAL)

**YOU MUST NOT read the following during Phases 0-3:**
- `/active/design-system/case-studies/` (pattern library)
- `/active/design-system/library/` (if exists)
- Prior compositional explorations (DD-001 through AD-006)
- Tension-test layouts (boris/, gastown/, playbook/)

**Why this prohibition exists:** Library patterns are VALIDATION tools, not GENERATION tools. Reading them before metaphor commitment = pattern-matching, not tension-deriving.

**When library access is permitted:**
- Phase 4: Read `/techniques/mechanisms.md` ONLY (reusable techniques)
- Phase 5: Read `/case-studies/` (2-3 MOST similar, for divergence verification)

**Violation of this rule invalidates the entire derivation.**

---

## 2. PHASE 1: MULTI-AXIS QUESTIONING

Read the input content deeply. For THIS SPECIFIC CONTENT, ask questions across multiple axes to derive what the reader needs.

### The Core Four (Always Run)

| Axis | Question | What It Produces | Richest When |
|------|----------|-----------------|-------------|
| **FEEL** | "What does the reader need to FEEL while navigating this content?" | Emotional/sensory needs: warmth, safety, tension, curiosity, momentum | Narrative content, emotional topics, onboarding, first-contact pages |
| **UNDERSTAND** | "What does the reader need to UNDERSTAND about the relationships in this content?" | Cognitive/structural needs: causality, hierarchy, comparison, progression | Technical docs, architectures, system descriptions, causal explanations |
| **DO** | "What does the reader need to DO with this content after reading?" | Action/decision needs: choose, evaluate, implement, prioritize | Tutorials, guides, decision frameworks, reference material |
| **BECOME** | "What does the reader need to BECOME after absorbing this content?" | Transformation needs: a practitioner, an evaluator, a designer, a critic | Learning paths, philosophy, methodology, identity-forming content |

### Extended Core (Always Consider)

After the core four, always ask these five. Mark LOW YIELD when they don't produce genuine needs -- but always ask.

| Axis | Question | Richest When | Low Yield When |
|------|----------|-------------|----------------|
| **NAVIGATE** | "How does the reader need to move THROUGH this content?" | Long-form, multi-section, non-linear reference, content with complex topology | Short content, single-concept pages, linear narratives |
| **TRUST** | "What does the reader need to believe about this content's AUTHORITY?" | Extraordinary claims, unfamiliar sources, behavior-change content, mixed confidence levels | Purely factual reference, internal team docs, established-authority context |
| **EVALUATE** | "What does the reader need to JUDGE about the quality, validity, or fit of what's presented?" | Comparisons, competing approaches, varying confidence, "which should I choose" content | Single-path tutorials, factual reference, narrative content |
| **ORIENT** | "What does the reader need to know about WHERE THIS FITS before engaging?" | Series content, prerequisite-dependent, context-sensitive, content that changes meaning by entry point | Standalone content, self-contained explanations |
| **RECONCILE** | "What does the reader need to RECONCILE between this content and what they already believe?" | Paradigm-shifting, myth-busting, counterintuitive content, content that contradicts common practice | Content confirming existing knowledge, introductory material, beginners with no prior beliefs |

**Note:** The CONNECT axis ("What relationships between parts does the reader need to perceive?") is REDUNDANT with UNDERSTAND. Both ask about relationships. Use UNDERSTAND instead.

### Structural Trigger Axes (Deploy Conditionally)

Scan the content for these signals. Deploy the axis only when content signals relevance.

| Axis | Deploy When Content Contains... | Structural Pattern Triggered |
|------|--------------------------------|------------------------------|
| **COMPARE** | 2+ alternatives, trade-offs, A-vs-B decisions | Side-by-side layout, comparison tables, parallel columns |
| **IDENTIFY** | Personas, case studies, reader-as-protagonist, narrative voices | Voice selection, example mirroring, perspective anchoring |
| **DISCOVER** | Aha-moments, progressive revelation potential, investigation/mystery structure | Delayed payoff, collapsible reveals, question-before-answer ordering |
| **SEE** | System architectures, state machines, spatial relationships, data with shape | Diagrams, spatial layout, visual metaphors, dimensional representation |
| **REMEMBER** | Reference patterns, checklists, content to internalize, reuse-oriented content | Summary anchors, mnemonic structures, visual chunking, regular rhythm |

### Axis Selection Protocol

1. Run core four (always)
2. Run extended five (always, but mark LOW YIELD when appropriate)
3. Scan content for structural trigger signals -- deploy 0-5 conditional axes as relevant
4. The Phase 1 output table will have 4-14 entries depending on content richness

### Key Principle: Opposition Predicts Richness

The axes that produce the RICHEST tension against KortAI are those whose demands OPPOSE the system's personality:

- **RECONCILE** (challenge vs assert) -- richest, highest potential
- **NAVIGATE** (choice vs hierarchy) -- complex topology vs decisive ranking
- **EVALUATE** (equanimity vs opinion) -- judgment requires holding equal, system is opinionated
- **DISCOVER** (withholding vs directness) -- genuinely oppositional structural demands
- **FEEL** (warmth vs edges) -- classic, always available

Axes whose demands ALIGN with the system produce cosmetic tension: TRUST (both want authority), DO (both want action), ORIENT (both want positioning). Avoid building primary tension from aligned axes.

### Axis Interaction Effects

Some axis PAIRS produce richer tension than either alone:
- **RECONCILE + IDENTIFY**: "Change what you believe AND who you are" -- double transformation
- **NAVIGATE + COMPARE**: "Move freely AND hold things in parallel" -- maximum structural complexity
- **DISCOVER + UNDERSTAND**: Oppositional structural demands (withhold vs reveal) create intra-content tension
- **FEEL + EVALUATE**: Emotional engagement vs critical distance

Note these pairs when both are high-yield -- they create COMPOUND tension that opens wider metaphor spaces.

### Phase 1 Output

A table for each axis that produced yield:

```
AXIS: FEEL
Needs: [warmth, graduated trust, invitation to explore, progressive density]
Structural Properties: [layering, ordering by depth, compression gradient]
Richness: HIGH / MEDIUM / LOW

AXIS: UNDERSTAND
Needs: [causal chains, evidence quality, upgrade/downgrade paths]
Structural Properties: [branching, state transitions, bidirectional flow]
Richness: HIGH / MEDIUM / LOW
```

---

## 3. PHASE 2: TENSION DERIVATION

Each axis's needs (Side A) creates tension against the design system constraints (Side B). The tension is where composition lives.

### Side A: Reader Needs (from Phase 1)

Take each axis's needs and their structural properties. These are the content's demands.

### Side B: KortAI Design System Constraints (LOCKED)

**Geometry:**
- `border-radius: 0` -- ALWAYS. Sharp edges communicate decisiveness.
- `box-shadow: none` -- ALWAYS. Flat is honest about the medium.
- `filter: drop-shadow()` -- NEVER.

**Palette:**
- `--color-primary: #E83025` (Sanrok red -- the ONLY accent)
- `--color-background: #FEF9F5` (warm cream)
- `--color-text: #1A1A1A` (near-black)
- `--color-text-secondary: #666666`
- `--color-border: #E0D5C5` (soft tan)
- `--color-border-subtle: #F0EBE3`

**Typography:**
- Display: `'Instrument Serif', Georgia, serif` (headlines -- authority)
- Body: `'Inter', system-ui, sans-serif` (reading -- clarity)
- Mono: `'JetBrains Mono', 'SF Mono', monospace` (code/labels -- precision)

**Borders (3 categories only):**
- Category 1: Structural (3px, 4px) -- section boundaries, contained components
- Category 2: Data separators (1px) -- table rows, detail key-value pairs
- Category 3: Micro-elements (1px) -- inline code, badges
- NEVER 2px (the "2px border epidemic" -- systemic audit finding)

**Spacing:** Mathematical scale: 4/8/12/16/20/24/32/40/48/64/80px

**KortAI's Personality Profile:**
```
WARM <-------------> AUSTERE      [75% austere]
SOFT <-------------> ANGULAR      [95% angular]
PLAYFUL <----------> SERIOUS      [85% serious]
ORGANIC <----------> GEOMETRIC    [100% geometric]
BUSY <-------------> SPARSE       [70% sparse]
FLEXIBLE <---------> RIGID        [80% rigid]
CASUAL <-----------> FORMAL       [80% formal]
COLORFUL <---------> RESTRAINED   [90% restrained]
```

**The Soul Test:**
1. "Does this look like it could appear in a magazine?" → PASS
2. "Does this look like Bootstrap?" → FAIL
3. "Could I swap the accent color to Bootstrap blue and it would fit?" → FAIL
4. "Does every design choice serve hierarchy or readability?" → PASS
5. "Is there any decoration that doesn't earn its place?" → FAIL

### The Addition Test (Genuine vs. Cosmetic Tension)

The single most important diagnostic:

> **Can you fulfill the reader's need by selecting and placing existing design system components without transforming their meaning?**
> - YES = COSMETIC (no tension, assembly is sufficient)
> - NO = GENUINE (tension exists, metaphor required)

### Three Formal Criteria for Genuine Tension

A tension is genuine when ALL THREE hold:

1. **Semantic opposition**: Side A's emotional/experiential need is semantically opposed to Side B's personality. "Warmth" opposes "austerity." The opposition must be at the level of MEANING, not implementation detail.

2. **Vocabulary gap**: Side B has no direct tool for Side A's need. No component you can instantiate directly produces the needed feeling.

3. **Structural overlap despite emotional opposition**: Even though the sides are emotionally opposed, they share structural properties (layering, ordering, containment). This overlap is what makes a bridge (metaphor) POSSIBLE. Without it, the tension is impossible, not productive.

### Three Criteria for Cosmetic Tension

A tension is cosmetic when ANY of these hold:

1. **False opposition**: "The reader needs clarity" vs "the system provides clarity" -- no actual opposition.
2. **Direct tool available**: The system already has a mechanism that serves the need. No transformation required.
3. **Decoration substitution**: The "tension" resolves by adding a label, header, or color accent rather than transforming meaning.

### The Tension Spectrum

```
NO TENSION ---- COSMETIC ---- WEAK GENUINE ---- STRONG GENUINE ---- IMPOSSIBLE
    |               |              |                   |                  |
  direct         surface        requires           requires          no bridge
  match          styling        moderate            deep               exists
                 suffices       reframing           metaphor
```

The pipeline's sweet spot is STRONG GENUINE. That is where metaphor lives.

### Deriving Tension

For EACH high-yield axis from Phase 1:

1. **List Side A's emotional/structural demands** (what the content wants)
2. **List Side B's personality/constraints** (what the system gives)
3. **Identify the GENUINE opposition** -- where Side A wants something Side B resists
4. **Apply the Addition Test** -- genuine or cosmetic?
5. **Apply the BECAUSE test** -- "The reader needs X BECAUSE [specific content property]." If you cannot complete this sentence with a specific content property, the need is manufactured.

### The Richness Formula

When multiple axes produce genuine tension, evaluate richness on three dimensions:

**Dimension 1: Opposition Depth** -- How many LAYERS of opposition?
- 1 layer = LOW (score: 1)
- 2-3 layers = MEDIUM (score: 2)
- 4+ layers = HIGH (score: 3)

**Dimension 2: Structural Overlap Density** -- How many structural properties shared despite emotional opposition?
- 0-1 shared = LOW (score: 1) -- metaphor will be forced
- 2-3 shared = MEDIUM (score: 2) -- metaphor has options
- 4+ shared = HIGH (score: 3) -- metaphor is almost inevitable

**Dimension 3: Metaphor Space Width** -- How many DISTINCT metaphor candidates does the tension suggest?
- 1 candidate = LOW (score: 1) -- fragile, no alternatives
- 2-4 candidates = MEDIUM (score: 2) -- healthy selection
- 5+ candidates = HIGH (score: 3) -- rich creative space

**Formula: RICHNESS = Opposition Depth x Structural Overlap x Metaphor Space Width**

This is MULTIPLICATIVE. A tension with deep opposition but zero overlap = ZERO richness (impossible to bridge). A tension with high overlap but shallow opposition = low richness (obvious, uninteresting).

### Practical Selection Protocol

1. Score each tension on all three dimensions (LOW/MEDIUM/HIGH = 1/2/3)
2. Multiply: Opposition x Overlap x Width
3. Select highest product
4. Tiebreaker: prefer the tension whose opposition creates the most SURPRISING bridge
5. Second tiebreaker: prefer UNDERSTAND > FEEL > BECOME > DO
6. Always check whether multiple axis tensions COMPOUND into richer territory than any single axis

**[R5 IMPROVEMENT] Richness Formula Cap:**

The richness formula (Opposition x Overlap x Width) is used to select which TENSIONS to resolve — this is correct and should continue. However, at the METAPHOR SELECTION stage (Phase 3.5), richness score must NOT override perceptual risk assessment. Specifically:

- **Use richness to select tensions** (Phase 2): Higher richness = prioritize this tension. This works.
- **Do NOT use richness to select metaphors** (Phase 3): A metaphor that resolves a 27-richness tension with HIGH perceptual risk should rank below a metaphor that resolves a 12-richness tension with LOW perceptual risk.

The test data showed: Playbook BECOME+RECONCILE scored richness 27, guiding toward Apprenticeship Workshop (7/7 resolution, monotonous grid). Playbook UNDERSTAND scored richness 12, guiding toward Elevation Map (3.5/7 resolution, best visual outcome). Richness correctly identified the deeper tension but incorrectly predicted the better metaphor.

### Exit Ramp: The Tension Threshold Gate

After completing Phase 2, evaluate total tension:

- **GENUINE tension count = 0** -- Zero-tension path. Skip Phases 3-4. Apply design system defaults directly. Output A documents why no metaphor was needed.
- **All tensions COSMETIC** -- Cosmetic path. Skip Phase 3. Phase 4 proceeds with direct component mapping using standard design system patterns.
- **At least 1 GENUINE tension** -- Proceed to Phase 3.

---

## 4. PHASE 3: METAPHOR COLLAPSE

The metaphor is the BRIDGE between the two sides of tension. It resolves the emotional opposition by finding a real-world domain where the shared structural properties exist naturally.

> **The tension is emotional; the bridge is structural.** The opposition between sides is at the level of feeling. The bridge (metaphor) works at the level of form, structure, and pattern. A structural bridge does not average between warm and austere -- it creates a form where the SAME structure is simultaneously warm in one reading and austere in another.

### Step 3.1 -- Extract Structural Properties from Side A (Reader Needs)

Transform emotional needs into geometric/topological abstractions. "Warmth" is not a structural property. "Containment with visible boundaries" is.

Examples:
- Graduated trust --> ORDERING (sequence with rank)
- Visible progress --> TRAVERSAL (movement through stages)
- Calibrated investment --> STRATIFICATION (parallel layers of different value)
- Safety in uncertainty --> CONTAINMENT (bounded zones)

### Step 3.2 -- Extract Structural Properties from Side B (System Constraints)

Transform design constraints into geometric/perceptual abstractions:
- `border-radius: 0` --> ANGULARITY (all boundaries are straight lines)
- `box-shadow: none` --> FLATNESS (no depth illusion)
- Border categories (1px, 3px, 4px) --> DISCRETE WEIGHT (finite emphasis levels)
- Spacing scale --> PRECISE INTERVALS (quantized positions)
- Limited palette --> NARROW TEMPERATURE RANGE (small perceptual variation)

### Step 3.3 -- Find the Structural Overlap

Compare Side A's list with Side B's list. What properties appear on BOTH?

**Calculate the overlap percentage:**

```
Overlap = shared properties / total unique properties across both sides

> 80%: WARNING -- low tension. Consider whether assembly is appropriate.
40-70%: IDEAL ZONE -- strong metaphor potential. Proceed with search.
< 30%: WARNING -- extreme tension. Expect unconventional resolution.
        Consider literalism, meta-commentary, or structural inversion.
```

### Step 3.4 -- Generate the Search Query

Combine overlap and gap properties into a constrained search:

> "What real-world domain naturally exhibits [OVERLAP PROPERTIES] while being [SIDE B GAP PROPERTIES] yet conveying [SIDE A GAP PROPERTIES]?"

Example from OD-004:
> "What is naturally LAYERED and ORDERED and CONTAINED, while being ANGULAR and FLAT, yet conveying SAFETY and WARMTH?"

This query IS the content of the creative step. It is a constrained database query against the designer's domain knowledge.

### Three Search Heuristics

1. **Constraint scan**: Start with the HARDEST constraint (eliminates most candidates). For KortAI, ANGULARITY is hardest -- immediately eliminates organic/biological, liquid/fluid, atmospheric, textile, botanical.

2. **Content resonance**: Ask what the content is LITERALLY about. OD-004 is about "stability" and "layers of certainty" -- words with direct geological analogues. The content often contains the metaphor's seed.

3. **Emotional valence**: Side A's emotion eliminates domains with wrong valence. Warmth/safety eliminates military (aggressive), medical (clinical), judicial (adversarial). Positive/neutral valence survives.

The domain that survives ALL THREE filters is the metaphor.

### Domain Search Menu (for angular/flat/sharp systems like KortAI)

| Domain Category | Compatible Properties | Best When Content Is About |
|---|---|---|
| **Geological/Sedimentary** | Angular, layered, ordered, compressed | Stability, maturity, confidence, progression |
| **Architectural/Structural** | Angular, precise, load-bearing, zoned | Systems, frameworks, dependencies, structure |
| **Typographic/Editorial** | Angular (grid), precise, hierarchical | Information hierarchy, editorial judgment, style |
| **Cartographic/Territorial** | Angular (grid), flat (2D), bounded | Navigation, exploration, territory, scope |
| **Industrial/Mechanical** | Angular, precise, toleranced, assembled | Tools, processes, APIs, build systems |
| **Scientific/Laboratory** | Precise, institutional, measured, observed | Testing, validation, data, research |
| **Legal/Contractual** | Formal, precise, structured, authoritative | Policies, requirements, specifications |
| **Archival/Catalogic** | Ordered, classified, preserved, indexed | Collections, taxonomies, inventories |
| **Military/Strategic** | Precise, hierarchical, territorial, decisive | Decision trees, priorities, risk, triage |
| **Astronomical/Surveying** | Precise, mapped, measured, vast | Scale, overview, positioning, orientation |

This is a SEARCH MENU, not a lookup table. Scan it when running the search query. Selection is still creative; the menu ensures viable domains aren't overlooked.

### Responsive Degradation Check [R4 IMPROVEMENT — MEDIUM]

Before finalizing candidates, assess responsive degradation potential. Add this question to the Phase 3 scoring:

> "Does this metaphor have a natural responsive story at 768px?"

| Metaphor Type | Responsive Story | 768px Risk | 1440px Utilization Risk |
|---|---|---|---|
| Geological layers | Narrower core sample | LOW | **MODERATE — cylindrical shape biases toward narrow containers** |
| Floor plan / rooms | Narrow building, rooms stack | LOW | LOW |
| Elevation map | Narrower contour map | LOW | LOW |
| Codex / manuscript | Narrower page margins | LOW | **MODERATE — page margins may waste desktop space** |
| Archival vault | Narrower filing drawers | LOW | **MODERATE — vault density may over-compress** |
| Circuit board | Narrower board revision | LOW | LOW |
| Military command | Dossier narrows naturally | LOW | LOW |
| Workbench | Tools need horizontal space | MODERATE | LOW |
| Bento grid | Columns collapse or crush | MODERATE-HIGH | LOW |
| City zoning map | Districts compete for space | MODERATE | LOW |
| Side-by-side comparison | Loses juxtaposition at narrow | MODERATE | MODERATE |

**Scoring**: Add to the composite as a flag, not a score. Metaphors with MODERATE-HIGH responsive risk at either end should include builder warnings specifying the breakpoint mitigation strategy. Desktop utilization risk flags metaphors that conceptually encourage narrow containers (cylindrical shapes, page margins, vault compression) — these risk violating the 65% minimum content-to-viewport ratio.

### Incompatible Metaphor Families (for KortAI)

These CONFLICT with angular/flat/sharp constraints:
- **Organic/Biological**: Requires curves, growth patterns. Violates `border-radius: 0`.
- **Liquid/Fluid**: Requires flowing shapes, gradients. Violates flat/angular.
- **Atmospheric/Weather**: Requires opacity, blur, softness. Violates `box-shadow: none`.
- **Textile/Fabric**: Requires texture, draping. Incompatible with flat/sharp.
- **Musical**: Requires curves (sound waves, notation). Angular rhythm possible through spacing but not form.

### Step 3.5 -- Test Candidates (Composite Scoring)

For each candidate, score on SIX dimensions (A through F):

**A. Tension Resolution**: Test against EVERY tension from Phase 2.
```
CANDIDATE: [metaphor name]
Tension 1: Resolves? YES (1) / PARTIAL (0.5) / NO (0) -- [why]
Tension 2: Resolves? YES / PARTIAL / NO -- [why]
...
SCORE: X/N
```

**B. Structural Isomorphism Count**: How many INDEPENDENT property mappings?

```
CANDIDATE: [metaphor name]
| Metaphor Property | Content Property | System Mechanism |
|---|---|---|
| [physical trait] | [content parallel] | [CSS expression] |
...
ISOMORPHISM COUNT: X
```

Ratings:
- 6+ = Structurally isomorphic. The metaphor IS the content's structure. Proceed confidently.
- 4-5 = Structurally strong. Genuine depth, may have uncovered dimensions.
- 2-3 = Structurally thin. Analogy rather than architecture.
- 0-1 = Decorative only. REJECT.

**C. Content Resonance (Split: Nominal + Structural)**: [R2 IMPROVEMENT]

Resonance is scored on TWO independent dimensions:

**C1. Nominal Resonance** -- Does the content use the metaphor's vocabulary?
- HIGH = content literally uses the metaphor's words (e.g., "refinery" in Gas Town content)
- MEDIUM = conceptual parallels
- LOW = forced connection

**C2. Structural Resonance** -- Does the metaphor's internal structure mirror the content's structure?
- HIGH = the metaphor's relationships (hierarchy, flow, nesting) isomorphically map to the content's relationships
- MEDIUM = partial structural alignment
- LOW = structural mismatch despite vocabulary overlap

**Weight structural resonance 2x higher than nominal resonance in composite scoring.** Structural resonance predicts visual quality; nominal resonance predicts only vocabulary convenience.

**D. Mechanism Feasibility**: Can EVERY metaphor property be expressed using ONLY the system's CSS tools?
- Check each property against the 6 legal channels (background, border, typography, spacing, layout, accent)
- If any property requires soul-violating CSS, the metaphor FAILS at mechanism level

**E. Perceptual Risk Assessment**: [R1 IMPROVEMENT — CRITICAL]

After scoring A-D, assess the PERCEPTUAL RISK of each candidate. This predicts whether the metaphor will execute well visually, independent of its structural properties. The pipeline cannot predict perceptual quality from structural richness alone.

Score each question LOW (0) / MEDIUM (0.5) / HIGH (1):

| Risk Question | LOW Risk | HIGH Risk |
|---|---|---|
| **Transition model**: Does this metaphor conceptualize section transitions as CHANGING STATE or EMPTY SPACE? | Changing state (deeper stratum, higher elevation, next room) | Empty space (breathing zones, page turns, walking between buildings) |
| **Expression mode**: Does this metaphor rely on STRUCTURAL GRADIENTS or TEXTUAL LABELS to communicate? | Structural (graduated backgrounds, spatial hierarchy, compression) | Textual ("MAIN STREET — CONNECTING DISTRICTS", labeled connectors) |
| **Element variety**: Does this metaphor produce VARIED element sizes or UNIFORM grids? | Varied (different sections have different visual weight/shape) | Uniform (repeating same-shaped cards, grid monotony) |
| **Responsive story**: Does this metaphor have a natural responsive degradation path? | Natural (narrower core sample = deeper bore, stacked rooms) | Forced (workbench tools need horizontal space, side-by-side breaks) |

**Perceptual Risk Score = sum of risk values (0-4)**

| Score | Rating | Action |
|---|---|---|
| 0-1 | LOW RISK | Proceed confidently |
| 1.5-2 | MODERATE RISK | Proceed with builder warnings |
| 2.5-3 | HIGH RISK | Rank below lower-risk candidates even if Resolution/Isomorphism are higher |
| 3.5-4 | EXTREME RISK | Consider rejection unless no alternatives exist |

**CRITICAL RULE**: A metaphor with Resolution 7/7 and Perceptual Risk HIGH should be ranked BELOW a metaphor with Resolution 5/7 and Perceptual Risk LOW. Structural richness does not compensate for perceptual risk.

**F. Perceptual Cost Assessment (Guardrail Violation Prediction)**

For each structural isomorphism in the candidate's mapping table, assess whether the mapping encourages violations of the perceptual guardrails (Phase 4.0). A metaphor can be structurally rich while encouraging perceptual discomfort.

Ask these questions about the isomorphism mapping:

| Cost Question | +1 Cost If YES |
|---|---|
| **Compression below floors**: Does this mapping encourage padding below 32px or compression ratio worse than 2.5:1? | YES = +1 |
| **Container width below minimum**: Does this mapping encourage container width below 940px (65% at 1440px)? | YES = +1 |
| **Uniform element grids**: Does this mapping encourage 4+ identical items in a grid with no hierarchy? | YES = +1 |
| **Transitions as empty space**: Does this mapping conceptualize transitions as vertical gaps rather than state changes? | YES = +1 |
| **Explicit labels over structure**: Does this mapping encourage metaphor vocabulary in visible text labels? | YES = +1 |

**Perceptual Cost Score = sum (0-5+)**

| Score | Rating | Action |
|---|---|---|
| 0 | LOW COST | Proceed as designed |
| 1-2 | MODERATE COST | Add specific builder warnings for flagged risks |
| 3+ | HIGH COST | Consider alternative metaphor OR modify isomorphism mapping to avoid worst costs |

**Integration into Composite Verdict:**

Perceptual Cost works alongside Perceptual Risk but measures different properties:
- **Perceptual Risk** measures execution-layer problems (dead zones, over-labeling, monotony, responsive breakage)
- **Perceptual Cost** measures guardrail violations the metaphor's CONCEPT encourages

**Composite Verdict (Updated):**
- **PROCEED**: Resolution >= N-1, Isomorphism >= 4, Structural Resonance >= MEDIUM, Feasibility = 100%, Perceptual Risk <= 2
- **CONSIDER**: Resolution >= N-2, Isomorphism >= 3, Structural Resonance >= LOW, Feasibility >= 80%, Perceptual Risk <= 3
- **REJECT**: Any other combination, OR Perceptual Risk = 4

**CRITICAL PRINCIPLE: The pipeline predicts RICHNESS, not QUALITY.** High richness scores (9/9 tension resolution, 27/27 RECONCILE) identify promising tension-metaphor pairings but do NOT guarantee perceptual success. The Perceptual Risk (3.5E) and Perceptual Cost (3.5F) assessments are MANDATORY gates preventing high-richness-low-quality outputs.

### Step 3.6 -- Select the Metaphor

The winner is the candidate with the best composite score. Document:
- The winning metaphor
- Why it won (which tensions it resolves that others don't)
- What it DOESN'T resolve (honest gaps)
- The full isomorphism table

---

## 5. PHASE 3.5: METAPHOR COMMITMENT (LOCK-IN GATE)

**BEFORE proceeding to Phase 4, you MUST complete this gate.**

### Step 3.5A: State Your Committed Metaphor

**Your metaphor:** _______________________________________________

**Write it down. This is your LOCKED-IN metaphor. You DO NOT change it after consulting the library.**

### Step 3.5B: Document WHY This Metaphor

**How it resolves the tension (specific):**

[Explain: What property of THIS metaphor resolves THIS tension? Be concrete.]

**Why this metaphor vs alternatives (specific):**

[What alternatives did you consider? Why did you reject them? What makes this metaphor BETTER for THIS content?]

### Step 3.5C: Commitment Verification

**Answer these questions:**

1. **Did I derive this metaphor independently?** YES / NO
   - If NO: You read library patterns before commitment. RESTART Phase 1.

2. **Can I justify this metaphor without referencing library examples?** YES / NO
   - If NO: You are pattern-matching. Regenerate metaphor with explicit constraint (ban all library metaphors).

3. **Does this metaphor appear in `/case-studies/_INDEX.md`?** (DO NOT READ full case studies, only titles)
   - If YES: Proceed to divergence justification (Step 3.5D)
   - If NO: Proceed to Phase 4

### Step 3.5D: Divergence Justification (If Convergence Detected)

**If your metaphor matches a library pattern title:**

You MUST provide STRONG evidence of independent convergence.

**Convergence justification table:**

| Question | Your Answer |
|----------|-------------|
| Did I complete Phase 1-2 WITHOUT reading library? | YES / NO |
| Did content analysis INDEPENDENTLY lead to this domain? | YES / NO |
| Can I trace derivation path (tension → search query → domain)? | YES / NO |
| Is the content tension IDENTICAL to the case study's tension? | YES / NO |
| Do I have different structural isomorphisms than the case study? | YES / NO |

**Passing criteria:** ALL answers must favor independent convergence.

**If justification fails:** Regenerate metaphor with explicit constraint: "My metaphor MUST NOT be [library pattern name]. What OTHER domain resolves [tension] while satisfying [constraints]?"

**Phase 3.5 is complete when:**
- ✅ Metaphor committed in writing
- ✅ Justification documented
- ✅ Divergence verified (or convergence justified)

**You are now LOCKED IN. Proceed to Phase 4.**

---

## 6. PHASE 4: COMPOSITIONAL LAYOUT GENERATION

**Tier-specific deployment levels:**
- **Floor (assembly):** 0 custom mechanisms, Track 1 component templates only
- **Middle (individual):** 8-10 mechanisms, each independent, serving different content aspects
- **Ceiling (combination):** 12-15 mechanisms, 2+ combinations encoding shared semantics
- **Flagship (multi-pattern):** 16-18 mechanisms, 3+ patterns with BREATHING/SMOOTH/BRIDGE transitions

Translate the metaphor into concrete CSS/HTML mechanisms using the design system's vocabulary.

### Phase 4.0: Perceptual Guardrails (Non-Negotiable Minimums)

Before generating any CSS/HTML, ALL metaphors must pass these perceptual floors. These are not suggestions — they are the line below which reading comfort breaks regardless of metaphor intent.

**CONTENT PROPORTION GUARDRAILS (at 1440px):**

| Guardrail | Value | Rationale |
|---|---|---|
| Min content-to-viewport ratio | **65%** (940px) | Below this, content feels like a narrow strip lost in margins |
| Max content-to-viewport ratio | **80%** (1150px) | Above this, layout feels edge-to-edge with no breathing room |
| Min horizontal padding (outer) | **32px per side** | Absolute floor even at maximum compression |
| Min text column width | **220px** | Below this, line length becomes unreadable (under 35 characters) |
| Optimal line length | **45-80 characters** | Bringhurst canonical; WCAG maximum = 80 |

**TYPOGRAPHIC SPACING GUARDRAILS:**

| Guardrail | Value | Rationale |
|---|---|---|
| **Heading spacing ratio** | **space-above / space-below >= 1.5** | Headings must visually belong to content below, not float between sections |
| Min label-to-heading gap | **16px** | Different font family + size + case = triple shift needs buffer |
| Min heading-to-body gap | **16px** | Editorial standard for H1/H2 levels |
| Min body line-height | **1.5** | WCAG 2.1 SC 1.4.12 accessibility floor |
| Min section breathing zone | **48px** | Between major sections — magazine quality floor |

**COMPRESSION AND DENSITY GUARDRAILS:**

| Guardrail | Value | Rationale |
|---|---|---|
| Compression ratio ceiling | **Deepest padding >= 40% of shallowest padding** | If topsoil = 80px, bedrock cannot go below 32px |
| Characters per line | **45-80** | Below 45 = excessive ragging; above 80 = WCAG fail |

**CPL (Characters Per Line) CALCULATION FORMULA:**

To verify CPL before shipping, use this formula:

```
CPL ≈ (content-width-px) / (font-size-px) / 0.6
```

**Concrete example:**

```css
/* Example 1: FAIL — CPL too high */
.container {
  max-width: 960px;
  padding: 0 32px;  /* 960 - 64 = 896px content width */
}
body {
  font-size: 16px;
}
/* CPL = 896 / 16 / 0.6 = 93.3 chars (FAIL — above 80 max) */
```

**How to fix:**
- **Option A:** Increase padding: `960px - 120px total = 840px content. 840/16/0.6 = 87.5 CPL` (still high but closer)
- **Option B:** Increase font size: `840px at 18px font = 840/18/0.6 = 77.8 CPL` (PASS — within 45-80 range)
- **Option C:** Both: `960px - 140px = 820px at 18px = 820/18/0.6 = 75.9 CPL` (ideal)

**Builder self-check protocol:**

BEFORE writing final HTML, verify CPL:
1. Measure content width: `container max-width - horizontal padding`
2. Note body font-size (usually 16px or 18px)
3. Calculate: `content-width / font-size / 0.6`
4. Verify: result is 45-80 characters

**Middle-tier baseline:** Middle experiment achieved 82 CPL (+2 over spec, ACCEPT AS SHIPPED). The builder did not have this formula available for self-verification before file write.

**CONTAINER WIDTH GUARDRAILS (NON-NEGOTIABLE -- HIGHEST PRIORITY):**

| Guardrail | Value | Rationale | Override |
|-----------|-------|-----------|---------|
| **Container width at 1440px** | **940-960px** | 65-67% content-to-viewport ratio | **NEVER** |
| Minimum container width | 940px | Below this = narrow strip syndrome | NEVER |
| Maximum container width | 960px | Above this = edge-to-edge, no breathing | Rarely (full-bleed hero sections only) |

**CRITICAL -- Container Width Priority:**

No metaphor may override the 940-960px container width. If your metaphor demands narrowing (e.g., "cylindrical core sample," "narrow alley," "manuscript page"):

**CORRECT:** Express narrowing through INTERNAL spacing (padding variation, asymmetric margins), NOT external width reduction.

**WRONG:** Narrow the container to 650px to "match the metaphor."

**Example:**
```css
/* WRONG -- metaphor forces narrow width */
.container { max-width: 700px; }

/* CORRECT -- internal padding creates narrow effect */
.container {
  max-width: 960px; /* Non-negotiable */
  padding: 0 120px; /* Internal padding creates "narrow" visual */
}
```

**ESCAPE HATCH -- When Metaphor Demands Narrowness:**
Container at 960px + padding at 120px each side = 720px content width. Manuscript aesthetic achieved WITHOUT violating 940-960px container.

**Priority order when metaphor conflicts with container width:**
1. Container width 940-960px (NEVER compromise)
2. Metaphor fidelity (ADJUST expression to meet width floor)
3. Aesthetic preference (LAST priority)

**This is the #1 Phase D failure mode. 4/5 validation pages violated this. If you violate this, the entire composition FAILS regardless of other quality.**

---

**HEADING SPACING ENFORCEMENT (BINARY CHECK):**

For EVERY heading (h2, h3, h4), verify the ratio:

```
space-above-heading / space-below-heading >= 1.5
```

**Concrete examples:**

**PASS:**
```css
h2 {
  margin-top: 48px;
  margin-bottom: 24px;
  /* Ratio: 48 / 24 = 2.0 >= 1.5 ✓ */
}

h3 {
  margin-top: 32px;
  margin-bottom: 16px;
  /* Ratio: 32 / 16 = 2.0 >= 1.5 ✓ */
}
```

**FAIL:**
```css
h2 {
  margin-top: 32px;
  margin-bottom: 32px;
  /* Ratio: 32 / 32 = 1.0 < 1.5 ✗ */
}
```

**WHY THIS MATTERS:**

Headings must visually "belong" to the content below them, not float ambiguously between sections. When space-above equals space-below, headings appear disconnected from both preceding and following content. The 1.5:1 minimum creates clear visual association through proximity.

**Enforcement guidance:**
- Check COMPUTED styles (margin collapse may create different effective spacing than declared CSS)
- Measure in browser devtools, not by reading CSS declarations alone

---

**CRITICAL PRINCIPLE:**

These floors define the safe zone within which metaphors may operate. What the metaphor determines is WHERE in this range to operate. What the metaphor may NOT do is push any value below these absolute minimums.

**Priority Order When Metaphor Conflicts with Guardrails:**

1. **Readability floors** (line-height 1.5, CPL max 80, container min 940px) — NEVER compromise
2. **Breathing zones** (section spacing min 48px) — NEVER compromise
3. **Content width** (min 65% of viewport) — NEVER compromise
4. **Metaphor fidelity** — Adjust to meet floors
5. **Aesthetic preference** — Last priority

---

### Step 4.0 -- Mechanism Library Access (NOW PERMITTED)

**You may NOW consult:**

- `/active/design-system/techniques/mechanisms.md` (reusable techniques catalog)
- `/active/design-system/foundations/components.md` (base components)

**What to extract from mechanisms catalog:**

✅ **REUSABLE TECHNIQUES** (apply to ANY content):
- Border-weight gradient encoding
- 2-zone component DNA
- Spacing compression patterns
- Solid-offset depth technique
- Dense/sparse alternation

❌ **DO NOT extract from case studies:**
- Full layout architectures (metaphor-specific)
- Section structures (metaphor-driven)
- Metaphor vocabulary (geological, manuscript, etc.)

**Extraction protocol:**

1. **Read the FULL mechanism catalog** (18 mechanisms) -- DO NOT sample randomly
2. **Extract technique, NOT implementation** -- e.g., "border-weight encodes hierarchy" (technique) vs "4px/3px/1px for confidence levels" (implementation)
3. **Adapt to YOUR context** -- Your metaphor/pattern + mechanism technique = new implementation

**Per-category mechanism deployment (MANDATORY for Middle-tier+):**

Deploy at least 1 mechanism from EACH of the 5 categories. This ensures vocabulary BREADTH across all expressive dimensions.

| Category | Mechanisms Available | Minimum |
|----------|---------------------|---------|
| **Spatial** | #5 Dense/Sparse, #6 Width Variation, #15 Bento Grid | 1+ |
| **Hierarchy** | #1 Border-Weight, #4 Spacing Compression, #11 Typography Scale | 1+ |
| **Component** | #2 2-Zone DNA, #9 Confidence Color, #10 Border-Left Signal, #17 Code Block | 1+ |
| **Depth/Emphasis** | #3 Solid Offset, #7 Zone Backgrounds, #16 Drop Cap | 1+ |
| **Structure/Nav** | #8 Scroll Witness, #12 Progressive Disclosure, #13 Dark Header, #14 Footer Mirror, #18 Data Table | 1+ |

**Exception clause:** If content genuinely cannot support a category (e.g., single-section content has no spatial alternation needs), document the exception with rationale. Per-category deployment is the DEFAULT; justified exceptions are permitted.

**Middle experiment validation:** The Middle-tier experiment deployed 12 mechanisms across all 5 categories (S:1, H:3, C:4, D:2, N:3) achieving PA-05 DESIGNED (4/4 sub-criteria).

**Justification requirement (MANDATORY):**
- For EACH mechanism you deploy: one sentence on WHY it serves THIS content at THIS location
- For AT LEAST 3 mechanisms you considered but REJECTED: one sentence on WHY they don't fit

**Natural landing by tier:**
- Floor: 5 mechanisms (component assembly, no per-category requirement)
- Middle: 8-12 mechanisms across all 5 categories
- Ceiling: 12-15 mechanisms across all 5 categories + 2+ reinforcing pairs
- Flagship: 16-18 mechanisms across all 5 categories + 3+ reinforcing clusters

**CRITICAL:** You are deploying VOCABULARY (mechanisms), not counting techniques. The goal is breadth across categories, not hitting a number.

**You still MUST NOT read `/case-studies/` directory. Case study access = Phase 5 ONLY.**

---

### Step 4.2C: Rhythm Variation Requirement (MANDATORY for Middle-tier+)

**BINARY RULE:** Your page MUST include at least 3 DIFFERENT transition types between major sections.

**Transition Type Taxonomy:**
- **SMOOTH** (48px + 1px border): Same-axis continuation
- **BRIDGE** (64px + breathing zone + text): Cross-axis shift with context
- **BREATHING** (80px + 3px border): Major axis shift

**Minimum requirement:** Deploy AT LEAST 3 transition types across your full-page sequence.

**Concrete FAILING example:**
- ALL sections separated by 48px + 1px border (monotonous)
- Result: Mechanically consistent but perceptually MONOTONOUS

**Concrete PASSING examples:**
- Section A→B: SMOOTH (48px, same density continuation)
- Section B→C: BRIDGE (64px + breathing zone, density shift with transition text)
- Section C→D: BREATHING (80px + 3px, major content shift)
- Result: 3 different transition types = PASS (rhythmically varied)

**Why this matters:** Middle-tier experiment deployed 12 mechanisms but failed PA-17 ("Is there visual rhythm or random?") and PA-41 ("Repetition monotony"). The issue was NOT mechanism count but transition VARIETY. Even with high mechanism deployment, uniform spacing creates mechanical rhythm.

**How to verify:** After implementing all section transitions, count unique transition types. If count < 3, you have NOT met the rhythm variation minimum.

---

### Phase 4.7: Fractal Consistency GATE (MANDATORY)

**BEFORE proceeding to Phase 5, you MUST complete this gate.**

**Fractal self-similarity requirement:** The SAME design pattern must appear at multiple scales. This is NOT optional.

**Scale coverage table (MANDATORY deliverable):**

| Scale | Pattern Expression | CSS Evidence |
|-------|-------------------|--------------|
| Navigation | [How TOC/header reflects pattern] | [Specific CSS] |
| Page | [How section sequence reflects pattern] | [Specific CSS] |
| Section | [How components within section reflect pattern] | [Specific CSS] |
| Component | [How content within component reflects pattern] | [Specific CSS] |

**Tier-calibrated requirements:**
- **Floor:** EXEMPT (component assembly, no custom pattern)
- **Middle:** 2 scales minimum (Page + Component)
- **Ceiling:** 4 scales minimum (Navigation/Page/Section/Component)
- **Flagship:** 5 scales required (all scales)

**Passing criteria:**
- Table complete with ALL required scales for tier
- SAME pattern direction at each scale
- CSS evidence provided for each scale
- Pattern is STRUCTURAL (rhythm, hierarchy, density), not decorative

---

### Phase 4.7B: Landmark Completeness GATE (MANDATORY)

**BEFORE proceeding to Phase 4.8, verify structural landmarks.**

**BINARY RULE:** Every page MUST have designed beginning, middle, and end.

**Landmark verification table (MANDATORY deliverable):**

| Landmark | Present? | CSS Evidence | Visual Treatment |
|----------|----------|--------------|-----------------|
| **HEADER** | YES / NO | [selector + key properties] | [dark/light, bordered, etc.] |
| **MAIN CONTENT SECTIONS** | YES / NO | [number of sections] | [zone backgrounds, transitions] |
| **FOOTER** | YES / NO | [selector + key properties] | [mirrors header? minimal? etc.] |

**Tier-calibrated requirements:**
- **Floor (Track 1 assembly):** Header + main content required. Footer optional.
- **Middle-tier+:** Header + main content + footer ALL required.
- **Ceiling/Flagship:** Header + main + footer + transition grammar between ALL landmarks.

**WHY THIS MATTERS (provenance from Middle-tier retrospective):**

Middle-tier experiment specified Footer Mirror (#14) in the build plan but the builder omitted it in implementation. Perceptual auditors flagged "page just stops" (PA-13) as a MAJOR flow issue. This was a WOULD-NOT-SHIP finding.

Readers need narrative closure. A page without footer feels abrupt, unfinished, or accidentally truncated.

**Verification protocol:**
1. Check HTML structure: `<header>`, `<main>` with N `<section>` children, `<footer>`
2. Verify CSS exists for each landmark
3. Verify footer is NOT empty
4. For Middle+ tier: footer MUST mirror header OR provide equivalent visual weight

**Phase 4.7B is complete when:**
- ✅ Landmark table filled with YES/NO for each element
- ✅ CSS evidence provided for each present landmark
- ✅ Tier requirements met (Middle+ = header + main + footer all YES)

---

### Phase 4.9: Tokenization Self-Check (Recommended for Middle-tier+)

**PURPOSE:** Verify CSS uses design tokens, not raw values, before proceeding to audit.

**Token compliance target: >= 80%**

**How to measure:**

1. **Count var() references:** Search your CSS for `var(--` — count all instances
2. **Count raw values:** Count hex colors (#HEXCODE) + px values (Npx) that COULD have used tokens
3. **Calculate ratio:** `token_compliance = var_count / (var_count + raw_count)`

**Formula:**
```
var() references / (var() references + raw hex/px values) >= 0.80
```

**Builder protocol:**

BEFORE writing the final HTML file, scan your CSS:

1. **Read tokens.css FIRST** — Know what tokens exist before writing any CSS values
2. **For EVERY color value:** Check if a token matches. Only use raw hex if NO token exists.
3. **For EVERY spacing value:** Check spacing scale (4/8/12/16/20/24/32/40/48/64/80px). Use tokens for scale values.
4. **For EVERY typography value:** Use font/size/weight tokens, not raw declarations.

**Middle-tier baseline:** Middle experiment achieved 66.5% token compliance (73 raw values, ~146 var() references). This was 13.5 points below the 80% target. Root cause: builder DISCIPLINE — not looking up tokens before writing CSS.

---

## 7. PA PROTOCOL (48 QUESTIONS + SCORING)

### The One Rule

> **"React to what you see before you check what you know."**

### Fresh-Eyes Principle (NON-NEGOTIABLE)

Perceptual auditors MUST be context-starved. Do NOT provide: mechanism counts, pattern names, tier model, build plan details, or prior experiment results. Zero context = genuine first impressions.

### Tier 1: The Mandatory Five (Every Audit, Every Mode)

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-01** | What's the first thing that bothers you? | Misplaced focal points, gestalt discomfort |
| **PA-02** | Is any text uncomfortable to read? Point to the worst spot. | Narrow columns, cramped containers |
| **PA-03** | Does this feel like one designer made it, or three? | Design dialect shifts, visual fragmentation |
| **PA-04** | Where does your eye go first? Is that where it SHOULD go? | Competing focal points, hierarchy failure |
| **PA-05** | Would you put your name on this? What would you fix first? | The gap between "passes rules" and "is good" |

**PA-05 Sub-Criteria (evaluate ALL four):**

1. **DESIGNED:** Does this feel like intentional composition, or assembled components?
   - PASS: "A designer made choices for THIS content"
   - FAIL: "Someone competent followed a template"

2. **COHERENT:** Does this feel like one designer made it, or vocabulary from multiple systems?
   - PASS: "Same design intent visible across entire page"
   - FAIL: "Header looks different from body which looks different from footer"

3. **PROPORTIONATE:** Does the spatial balance feel considered?
   - PASS: "Nothing feels crowded or lost"
   - FAIL: "Some areas are too tight, others too empty"

4. **POLISHED:** Is execution quality high?
   - PASS: "Ready to ship as-is"
   - FAIL: "Needs cleanup before showing anyone"

**Scoring:**
- 4/4 sub-criteria PASS → PA-05: YES (ship-ready)
- 3/4 sub-criteria PASS → PA-05: YES WITH RESERVATIONS (note which criterion failed)
- 2/4 or fewer PASS → PA-05: NO (would not ship)

**Validation:** Middle-tier experiment passed 4/4 sub-criteria, achieving DESIGNED despite lacking metaphor.

### Tier 2: Standard Fifteen

**Readability and Comfort:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-06** | Are any words stacking vertically, one per line, in any column? | The canonical bento-grid failure mode |
| **PA-07** | Can you read the longest paragraph without losing your place? | Line length >80 CPL, insufficient leading |
| **PA-08** | Is there any text you have to lean in or squint to read? | Sub-minimum font sizes, low contrast |
| **PA-29** | In the header area, count how many different text styles you see. Are more than three fighting for attention? | Typographic voice collision |

**Spatial Balance and Proportion:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-09** | Is there dead space that serves no purpose? | Viewport-scale dead zones |
| **PA-10** | If you squint until you can't read text, does the layout look balanced? | Macro composition failure, lopsided grids |
| **PA-11** | Are the margins generous (confident) or anxious (clutching)? | Spacing psychology, mechanical rigidity |
| **PA-30** | At 1440px, does the layout feel DESIGNED for this width, or like a narrower design centered in extra space? | Desktop utilization vs mere survival |
| **PA-31** | If you covered the content and only looked at the surrounding space, would that space feel designed or leftover? | Content-to-viewport proportion, negative space quality |
| **PA-32** | Squint at the full page. Is the visual weight distributed purposefully across the scroll, or concentrated in one zone? | Color weight distribution |
| **PA-33** | Pick the largest area of empty space. Does it feel like silence in music or a dropped signal? | Negative space quality |

**Visual Flow and Pacing:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-12** | Do your eyes flow smoothly from section to section? | Visual walls, flow-breaking dividers |
| **PA-13** | Is there a clear visual ending, or does the page just stop? | Abrupt endings, no narrative closure |
| **PA-34** | Pick the transition between any two major sections. Is it a DESIGNED moment or just empty space? | Transition quality vs accidental gaps |
| **PA-35** | Scroll through the entire page at reading speed. Does your interest stay level, peak and valley, or fade? | Scroll momentum and engagement decay |
| **PA-36** | Is there a dramatic visual moment? Where is it positioned? | Dramatic moment placement, pacing peaks |

**Grid and Layout:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-14** | Does every column have enough room for its content to breathe? | Content-container misfit across all grid cells |
| **PA-15** | Trace the left edge of every content block. How many starting positions? | Alignment scatter, jittery edges |
| **PA-37** | Is there any container where you can count five or more distinct pieces of information competing for attention? | Element density within containers |
| **PA-38** | Pick any card, callout, or info-box. Within it, is there a clear reading order? | Internal container hierarchy |
| **PA-39** | In the first screenful, how much is header/metadata/navigation versus actual content? | Header-to-content proportion |

**Consistency and Rhythm:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-16** | Pick two elements that should look identical. Do they? | Contextual inconsistency |
| **PA-17** | Is there a visual rhythm (like a beat in music), or random? | Arrhythmic section sequencing |
| **PA-40** | Does the spacing between sections feel consistent, or is there a sudden jump? | Vertical rhythm disruption |
| **PA-41** | Are any visual patterns repeated more than four times in a row without variation? | Repetition monotony |

**⚠ CEILING-TIER ELEVATION:** For Ceiling-tier and above audits, PA-17 and PA-41 are de facto CRITICAL questions. Middle-tier's highest-leverage perceptual finding was "metronomic rather than musical" rhythm. When auditing Ceiling-tier pages, treat FAIL on PA-17 or PA-41 as equivalent to FAIL on a Tier 1 Mandatory question.

**Color and Emotion:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-18** | Do all the grays/neutrals feel like the same family? | Color temperature inconsistency |
| **PA-19** | Is there any element that feels like it's from a different website? | Visual intruders |
| **PA-20** | Describe this page's personality in three words. Does it match intent? | Emotional misalignment |

**Metaphor and Ideology:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-42** | Is there any section where you understand WHY it looks this way but it still looks WRONG? | Metaphor-driven visual compromise |
| **PA-43** | Could the same metaphor idea be communicated with less visual cost? | Metaphor perceptual cost |
| **PA-44** | If you removed all labels, could you still sense the metaphor from the visual structure alone? | Implicit vs explicit metaphor |

**Quality and Excellence:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-45** | Is there a single moment on this page that you would show someone as an example of good design? | Design highlight presence, mediocrity detection |

### Tier 3: Deep Dive (Standalone Only)

**Responsiveness:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-21** | Does everything look designed for this width, or squeezed? | Afterthought responsive layouts |
| **PA-22** | Would a user with ONLY this screen size feel served or punished? | Mobile-as-degradation |
| **PA-23** | What breaks if you resize 200px narrower? | Fragile breakpoints |
| **PA-46** | At 768px, does the way elements reorganize make SENSE for this content? | Responsive degradation story |
| **PA-47** | At what scroll position do you start to feel like you've "seen this before"? | Visual novelty decay |

**Adversarial:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-28** | How could someone make this look terrible while passing every rule? | Layout vulnerabilities |
| **PA-48** | If this layout were one of five options for the same content, would this be your first choice, last choice, or somewhere in the middle? | Comparative quality assessment |

### QUANTITATIVE GUARDRAILS

**Hard floors — layouts cannot compress below these values without perceptual failure.**

**Content Width and Proportion (at 1440px viewport):**

| Metric | Minimum | Optimal | Maximum | What It Prevents |
|--------|---------|---------|---------|------------------|
| **Content container width** | 640px (44%) | 700-960px (49-67%) | 1280px (89%) | Over-compression, wasted horizontal space |
| **Characters per line (CPL)** | 45 | 60-66 | 80 | Reading fatigue, line tracking loss |
| **Content-to-viewport ratio** | 44% | 65-80% | 89% | Narrow-column-in-wide-viewport syndrome |

**Typographic Spacing:**

| Metric | Minimum | Optimal | Maximum | What It Prevents |
|--------|---------|---------|---------|------------------|
| **Body line-height** | 1.5 (WCAG) | 1.5-1.6 | 1.8 | Reading discomfort |
| **Heading line-height** | 1.2 | 1.25-1.3 | 1.4 | Display type too loose |
| **Space after heading** | 12px (0.75rem) | 16-24px | 32px | Heading-body disconnect |
| **Space before heading** | 24px (1.5rem) | 32-48px | 64px | Loss of visual hierarchy |
| **Label-to-heading gap** | 8px (0.5rem) | 12-16px | 24px | Label-heading collision |

**Layout and Grid Spacing:**

| Metric | Minimum | Optimal | Maximum | What It Prevents |
|--------|---------|---------|---------|------------------|
| **Horizontal padding (desktop)** | 32px | 40-64px | 80px | Edge collision at 1440px |
| **Horizontal padding (mobile)** | 16px | 20-24px | 32px | Edge collision at 375-768px |
| **Section vertical spacing** | 48px | 60-80px | 160px | Sections running together, dead zones |

**Compression Limits:**

| Metric | Minimum | What It Prevents |
|--------|---------|------------------|
| **Padding compression ratio** | 40% | Deepest section feels crushed |
| **Line-height floor (body)** | 1.4 | Never go below 1.4 for any body text |
| **Heading spacing ratio** | 1.5× above/below | Heading visually attached to wrong section |

**Application Priority:**

When metaphor conflicts with guardrails:

1. **NEVER compromise:** Readability floors (line-height 1.5, CPL max 80), breathing zones (section spacing min 48px), content width (min 640px)
2. **NEVER compromise:** Accessibility minimums (WCAG)
3. **ADJUST metaphor:** If metaphor forces violations, modify the metaphor's spatial expression
4. **REJECT metaphor:** If modification impossible, the metaphor is unsuitable

---

## 8. BLOCKING GATES (Complete List)

**Gates that can STOP the pipeline (not just advisories):**

1. **Phase 0D: Tier Classification** — Floor tier = skip to Track 1, no pipeline
2. **Phase 2: Tension Threshold Gate** — Zero genuine tension = skip Phase 3, apply defaults
3. **Phase 3.5: Metaphor Commitment** — Must document locked metaphor before Phase 4
4. **Phase 3.5C: Commitment Verification** — Must pass independent derivation check
5. **Phase 4.7: Fractal Consistency GATE** — Must show pattern at required number of scales
6. **Phase 4.7B: Landmark Completeness GATE** — Must include header + main + footer (Middle+)

**Non-blocking checks (audit, don't stop):**
- Phase 4.9: Tokenization Self-Check (80% target, not blocking)
- Phase 4.2C: Rhythm Variation (3+ transitions, critical for Middle+ but detected in audit)

---

## 9. BINARY ENFORCEMENT RULES (Exact Formulas)

**Rules that are PASS/FAIL checks with exact formula:**

1. **Container width:** `940px <= width <= 960px` at 1440px viewport
2. **CPL:** `45 <= (content-width / font-size / 0.6) <= 80`
3. **Heading spacing ratio:** `(margin-top / margin-bottom) >= 1.5` for ALL headings
4. **Rhythm variation:** `COUNT(unique section gap values) >= 3`
5. **Per-category mechanism minimum:** `COUNT(S) >= 1 AND COUNT(H) >= 1 AND COUNT(C) >= 1 AND COUNT(D) >= 1 AND COUNT(N) >= 1` (with exception clause)
6. **Token compliance:** `COUNT(var()) / (COUNT(var()) + COUNT(raw values)) >= 0.80` (recommended, not blocking)
7. **Landmark completeness (Middle+):** `header=YES AND main=YES AND footer=YES`
8. **Fractal scales (Middle):** `COUNT(scales with pattern) >= 2`
9. **Fractal scales (Ceiling):** `COUNT(scales with pattern) >= 4`
10. **Reinforcing pairs (Ceiling):** `COUNT(mechanism pairs encoding same dimension) >= 2`

---

## 10. PROMPT SLICING STRATEGY

### Core Principles

1. **Need-to-Know Basis:** Each agent sees ONLY what it needs to do its job.
2. **Continuation Bias Prevention:** Agents that PLAN should not BUILD. Agents that BUILD should not AUDIT their own work.
3. **Fresh-Eyes for Evaluation:** Auditors must NOT know mechanism counts, tier targets, or experiment hypothesis.
4. **Information Isolation Prevents Cross-Contamination:** Some information must be completely isolated between phases.
5. **Structural Completeness Lists Go to Implementers:** Builder must see "what landmarks to implement" or structural elements get missed.

### Agent Slicing Table

| Agent | Model | Approximate Lines | % of Master | What They MUST See | What They MUST NOT See |
|-------|-------|-------------------|-------------|-------------------|----------------------|
| **team-lead** | Opus 4.6 | ~1,600 | 100% | All phases, all gates, communication protocol, success criteria | Nothing excluded |
| **metaphor-agent** | Opus 4.6 | ~480 | 30% | Content, multi-axis protocol, tension derivation, metaphor collapse, soul constraints | Build plan, PA results, mechanism catalog full entries, tier targets, evaluation criteria |
| **planner** | Opus 4.6 | ~800 | 50% | Metaphor output, full mechanism catalog, pattern table, per-category minimums, reinforcing pairs, 4-scale requirement, soul, guardrails | PA results, prior experiment scores, evaluation criteria |
| **builder** | Sonnet 4.5 | ~400 | 25% | Build plan, pre-baked CSS, soul constraints, guardrails table, self-check checklist, landmark completeness list, token reference, metaphor SUMMARY (1 paragraph) | Master prompt, full metaphor derivation, PA questions, evaluation criteria, mechanism catalog full entries, prior results, tier targets |
| **programmatic-auditor** | Sonnet 4.5 | ~320 | 20% | Build plan (for plan-derived checklist), soul constraints, Critical-10, guardrails, container width rule, CPL formula, heading ratio formula, rhythm variation check | Metaphor derivation, PA questions, evaluation criteria, case studies, tier targets, mechanism catalog |
| **PA-1** | Sonnet 4.5 | ~130 | 8% | PA questions ONLY (48 questions), rendered page | EVERYTHING ELSE: mechanism counts, build plan, metaphor, tier model, soul, container width rules, prior experiments |
| **PA-2** | Sonnet 4.5 | ~130 | 8% | Same as PA-1 | Same as PA-1 |
| **comparative-auditor** | Sonnet 4.5 | ~240 | 15% | Both pages (Ceiling + Middle), comparison criteria, soul constraints, structural comparison framework | Metaphor derivation, build plans, PA results, evaluation hypothesis, which page is "better," tier targets |
| **novelty-evaluator** | Sonnet 4.5 | ~80 | 5% | 3 unlabeled pages in random order, novelty assessment questions, blind evaluation protocol | Page labels, experiment hypothesis, prior results, mechanism counts, build plans, metaphor derivation, PA results, which is "new" |
| **verdict-synthesizer** | Sonnet 4.5 | ~640 | 40% | ALL audit outputs, success criteria table, margin reporting requirements, adversarial self-check protocol | Nothing excluded (synthesis sees everything) |

### Middle-Tier Violations and Fixes

**Violation 1: Builder Didn't See Structural Completeness List**
- **Consequence:** Builder implemented Sections A-E, stopped, never added footer.
- **Fix for Ceiling:** Add 3-line structural completeness list: "Your output MUST include: (1) Header, (2) Footer, (3) All named sections from plan: [list]"

**Violation 2: PA Was Appropriately Context-Starved (CORRECT)**
- **Consequence:** PA identified missing footer, heading spacing violations, top-heavy weight distribution.
- **Verdict:** This isolation worked CORRECTLY. Maintain for Ceiling.

**Violation 3: Programmatic Audit Used Generic Checklist (INEFFICIENCY)**
- **Fix for Ceiling:** Programmatic auditor MUST see build plan. Generate checklist: PLANNED vs DEPLOYED vs MISSING.

---

## 11. INFORMATION ISOLATION MATRIX

### 15 Information Categories

**A. Soul Constraints** (7 rules): border-radius:0, box-shadow:none, no pure black/white, no gradients, no decorative animations, no stock photos, system fonts only

**B. Mechanism Catalog** (18 mechanisms, ~300 lines): Full catalog with CSS patterns, application modes, transfer rules, combination rules

**C. Mechanism Names Only** (18 items, ~18 lines): Just names + 1-line descriptions, no implementation

**D. Build Plan** (200-400 lines): Which mechanisms selected, section map, CSS specifications, reinforcing pairs, 4-scale table

**E. Metaphor Derivation** (Phases 1-3, ~400 lines): Full multi-axis questioning, tension derivation, metaphor collapse

**F. Metaphor Summary** (1 paragraph, ~50 words): Condensed metaphor description without derivation process

**G. Tier Model** (Floor/Middle/Ceiling/Flagship): Definitions of tier boundaries

**H. Pattern Table** (CRESCENDO/F-PATTERN/BENTO/PULSE): Pattern selection guide for content types

**I. PA Results** (perceptual audit findings): PA-05 sub-criteria, 48 PA questions responses, first impressions

**J. Novelty Assessment** (D3 evaluation): D3.1 layout uniqueness, D3.2 CSS uniqueness, D3.3 combination uniqueness

**K. Prior Experiment Results** (Middle-tier outcomes, Phase D scores): Historical benchmarks

**L. Success Criteria** (11 criteria with thresholds): All success criteria for Ceiling experiment

**M. Token Reference** (tokens.css, 65 tokens): CSS custom properties with usage hints

**N. Guardrails Table** (5 constraints): Container width, CPL, heading ratios, rhythm variation, token compliance

**O. Pre-Baked CSS Blocks** (~200 lines): Ready-to-paste :root, typography, accessibility, responsive

### The Matrix (MUST/MAY/NOT for Each Agent)

| Agent | Soul | Catalog | Names | Plan | Meta Full | Meta Sum | Tier | Pattern | PA | Nov | Prior | Success | Tokens | Guards | CSS |
|-------|------|---------|-------|------|-----------|----------|------|---------|----|----|-------|---------|--------|--------|-----|
| **team-lead** | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST |
| **metaphor-agent** | MUST | NOT | MAY | NOT | N/A | N/A | NOT | NOT | NOT | NOT | NOT | NOT | NOT | MAY | NOT |
| **planner** | MUST | MUST | MUST | NOT | MUST | N/A | NOT | MUST | NOT | NOT | NOT | NOT | MAY | MUST | NOT |
| **builder** | MUST | NOT | MAY | MUST | NOT | MAY | NOT | MAY | NOT | NOT | NOT | NOT | MUST | MUST | MUST |
| **prog-auditor** | MUST | NOT | NOT | MUST | NOT | NOT | NOT | NOT | NOT | NOT | NOT | NOT | MAY | MUST | NOT |
| **PA-1** | NOT | NOT | NOT | NOT | NOT | NOT | NOT | NOT | N/A | NOT | NOT | NOT | NOT | NOT | NOT |
| **PA-2** | NOT | NOT | NOT | NOT | NOT | NOT | NOT | NOT | N/A | NOT | NOT | NOT | NOT | NOT | NOT |
| **comp-auditor** | MUST | MAY | MAY | NOT | NOT | NOT | NOT | MAY | NOT | NOT | NOT | NOT | NOT | NOT | NOT |
| **nov-evaluator** | NOT | NOT | NOT | NOT | NOT | NOT | NOT | NOT | NOT | N/A | NOT | NOT | NOT | NOT | NOT |
| **verdict-synth** | MAY | MAY | MAY | MAY | MAY | MAY | MUST | MAY | MUST | MUST | MAY | MUST | MAY | MUST | MAY |

### 7 Isolation Rationales

1. **Builder MUST NOT See Full Mechanism Catalog** — Prevents mechanism shopping. Builder should implement plan, not browse catalog and substitute.

2. **PA MUST NOT See Mechanism Counts** — Prevents confirmation bias. PA should react to perceptual properties, not verify checklist.

3. **Novelty Evaluator MUST NOT See Experiment Hypothesis** — Prevents framing effect. Evaluator's expectations shape perception.

4. **Metaphor-Agent MUST NOT See Mechanism Details** — Prevents mechanism-first thinking. Metaphor should drive selection, not vice versa.

5. **Builder MUST NOT See Metaphor Derivation (Phases 1-3)** — Prevents continuation bias from planning. Builder should implement plan specs, not re-derive planner's framing.

6. **Planner MUST NOT See PA Results** — Prevents goal-driven selection. Planner should select for metaphor fit, not to pass PA questions.

7. **Programmatic Auditor MUST NOT See Metaphor** — Auditor checks IMPLEMENTATION compliance, not conceptual coherence. Metaphor assessment is PA's role.

### Contamination Failure Modes

1. **Builder Sees Evaluation Criteria** → Teaching to the test (sets padding to 2.0x ratio even if content needs different)

2. **PA Sees Mechanism Counts** → Checklist compliance replaces perceptual judgment ("yes, I see 12 mechanisms")

3. **Planner Sees Prior Results** → Derivative selection ("border-weight worked before, use it again")

4. **Novelty Evaluator Knows Hypothesis** → Confirmation bias inflates novelty scores

5. **Builder Sees Full Metaphor Derivation** → Continuation bias (implements LITERALLY instead of abstractly)

6. **Comparative Auditor Knows Which Page Is "New"** → False positives ("different" conflated with "better")

---

**END SKILL & PROTOCOL EXTRACTION**

*This document extracts EVERY phase, gate, formula, question, principle, and isolation rule from all four source files (3,672 total lines). Use this as the complete reference for Ceiling master execution prompt assembly.*

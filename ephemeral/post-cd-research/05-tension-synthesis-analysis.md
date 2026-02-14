# Tension Synthesis and Its Role in the Pipeline

**Agent:** tension-researcher (Task #5)
**Date:** 2026-02-13
**Source Material:** tension-composition skill, tension-deep-dive.md, pipeline docs, MEMORY.md

---

## Executive Summary

The tension synthesis is THE creative engine of the design system's compositional track (Track 2). It is not a feature of the pipeline — it IS the pipeline for ~50-60% of pages. Tension is the formalized gap between what content demands emotionally and what the design system provides aesthetically, resolved through metaphor-driven composition. This is the irreducible creative step that separates mechanical assembly (Track 1) from compositional design (Track 2).

**Key Findings:**

1. **Tension IS composition.** Creative compositional design emerges from tension between reader needs and system constraints. No tension = mechanical assembly.

2. **The pipeline predicts RICHNESS, not QUALITY.** Tension resolution scores identify promising structural pairings but do NOT guarantee perceptual success. Perceptual risk gates are MANDATORY.

3. **IMPLICIT > EXPLICIT metaphors.** The best layouts make readers FEEL the metaphor through structure without NAMING it through labels. Graduated backgrounds > announced transitions.

4. **Track 2 is the timeline bottleneck.** 35-45 pages × 3-5 hours = 105-225 hours of sequential creative work. Not parallelizable. THE cost and timeline driver.

5. **The tension-composition skill formalizes what was previously tacit knowledge.** 839 lines, 7-phase pipeline, 48 PA questions — load-bearing infrastructure that transforms agents into compositional builders.

---

## 1. What Tension Is: The Formal Definition

### The Core Formula

> **TENSION = Reader's emotional/experiential need ⊥ Design system's aesthetic personality**

Where `⊥` means "semantically opposed to."

Tension exists when:
1. The content creates a specific emotional demand (warmth, safety, graduated trust)
2. The design system's constraints resist that demand (sharp edges, institutional precision, austerity)
3. The opposition is GENUINE, not cosmetic
4. A structural bridge between them is POSSIBLE

### The Three Formal Criteria for Genuine Tension

A tension is genuine when ALL THREE hold:

1. **Semantic opposition**: Side A's emotional need semantically opposes Side B's personality. "Warmth" opposes "austerity." Opposition at the level of MEANING, not implementation.

2. **Vocabulary gap**: Side B has no direct tool for Side A's need. No component you can instantiate directly produces the needed feeling.

3. **Structural overlap despite emotional opposition**: Even though sides are emotionally opposed, they share structural properties (layering, ordering, containment). This overlap makes a bridge POSSIBLE.

### The Addition Test (Cosmetic vs. Genuine)

> **Can you fulfill the reader's need by selecting and placing existing design system components without transforming their meaning?**
> - YES = COSMETIC (no tension, assembly is sufficient)
> - NO = GENUINE (tension exists, metaphor required)

This is the single most important diagnostic.

---

## 2. The Tension-Composition Skill: The 7-Phase Pipeline

The tension-composition skill (839 lines, `~/.claude/skills/tension-composition/SKILL.md`) formalizes the Track 2 compositional process into a deterministic pipeline with one irreducible creative step.

### The Complete Pipeline

```
CONTENT → ASSESSMENT → MULTI-AXIS QUESTIONING → TENSION DERIVATION → [GATE] → METAPHOR COLLAPSE → COMPOSITIONAL LAYOUT → OUTPUT
  (input)  (Phase 0)       (Phase 1)               (Phase 2)                      (Phase 3)            (Phase 4)         (Phase 5)
```

### Phase 0: Content Assessment

Before entering the pipeline, assess content type and scope:

- **Content Type**: Prose-dominant / Mixed / Visual-dominant / Self-referential
- **Scope**: MICRO (<100 words) / SHORT (100-500) / STANDARD (500-3000) / LONG / MASSIVE
- **Section Classification**: NARRATIVE / REFERENCE / CODE / DATA / MIXED

**Critical routing:** Visual-dominant and self-referential content skip metaphor derivation → apply design system defaults only.

### Phase 1: Multi-Axis Questioning

Read content deeply and ask questions across multiple axes to derive what the reader needs.

**The Core Four (always run):**

| Axis | Question | What It Produces |
|------|----------|-----------------|
| **FEEL** | What does the reader need to FEEL while navigating this? | Emotional/sensory needs: warmth, safety, tension, curiosity |
| **UNDERSTAND** | What relationships must the reader UNDERSTAND? | Cognitive/structural needs: causality, hierarchy, progression |
| **DO** | What must the reader DO with this content? | Action/decision needs: choose, evaluate, implement |
| **BECOME** | What must the reader BECOME after absorbing this? | Transformation needs: practitioner, evaluator, designer |

**Extended Five (always consider):**

| Axis | Richest When | Low Yield When |
|------|-------------|----------------|
| **NAVIGATE** | Long-form, multi-section, non-linear reference | Short content, single-concept, linear narratives |
| **TRUST** | Extraordinary claims, unfamiliar sources, behavior-change | Purely factual, internal docs, established authority |
| **EVALUATE** | Comparisons, competing approaches, varying confidence | Single-path tutorials, factual reference |
| **ORIENT** | Series content, prerequisite-dependent, context-sensitive | Standalone, self-contained explanations |
| **RECONCILE** | Paradigm-shifting, myth-busting, counterintuitive | Content confirming existing knowledge, introductory |

**Structural Trigger Axes (deploy conditionally):**

| Axis | Deploy When Content Contains... |
|------|--------------------------------|
| **COMPARE** | 2+ alternatives, trade-offs, A-vs-B decisions |
| **IDENTIFY** | Personas, case studies, reader-as-protagonist |
| **DISCOVER** | Aha-moments, progressive revelation potential |
| **SEE** | System architectures, spatial relationships, data with shape |
| **REMEMBER** | Reference patterns, checklists, reuse-oriented content |

**Key Principle: Opposition Predicts Richness**

Axes that produce RICHEST tension are those whose demands OPPOSE the system's personality:

- **RECONCILE** (challenge vs assert) — richest, highest potential
- **NAVIGATE** (choice vs hierarchy) — complex topology vs decisive ranking
- **EVALUATE** (equanimity vs opinion) — judgment requires holding equal, system is opinionated
- **DISCOVER** (withholding vs directness) — genuinely oppositional structural demands
- **FEEL** (warmth vs edges) — classic, always available

Aligned axes produce cosmetic tension: TRUST (both want authority), DO (both want action), ORIENT (both want positioning).

### Phase 2: Tension Derivation

Each axis's needs (Side A) creates tension against design system constraints (Side B).

**Side B: KortAI Design System Constraints (LOCKED)**

**Geometry:**
- `border-radius: 0` — ALWAYS. Sharp edges communicate decisiveness.
- `box-shadow: none` — ALWAYS. Flat is honest about the medium.
- `filter: drop-shadow()` — NEVER.

**Palette:**
- `--color-primary: #E83025` (Sanrok red — the ONLY accent)
- `--color-background: #FEF9F5` (warm cream)
- `--color-text: #1A1A1A` (near-black)
- `--color-border: #E0D5C5` (soft tan)

**Typography:**
- Display: `'Instrument Serif', Georgia, serif` (headlines — authority)
- Body: `'Inter', system-ui, sans-serif` (reading — clarity)
- Mono: `'JetBrains Mono', 'SF Mono', monospace` (code/labels — precision)

**Borders (3 categories only):**
- Category 1: Structural (3px, 4px) — section boundaries
- Category 2: Data separators (1px) — table rows, detail pairs
- Category 3: Micro-elements (1px) — inline code, badges
- NEVER 2px ("2px border epidemic" — systemic audit finding)

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

**The Richness Formula**

When multiple axes produce genuine tension, evaluate richness on three dimensions:

**Dimension 1: Opposition Depth** — How many LAYERS of opposition?
- 1 layer = LOW (score: 1)
- 2-3 layers = MEDIUM (score: 2)
- 4+ layers = HIGH (score: 3)

**Dimension 2: Structural Overlap Density** — How many structural properties shared despite emotional opposition?
- 0-1 shared = LOW (score: 1) — metaphor will be forced
- 2-3 shared = MEDIUM (score: 2) — metaphor has options
- 4+ shared = HIGH (score: 3) — metaphor is almost inevitable

**Dimension 3: Metaphor Space Width** — How many DISTINCT metaphor candidates does the tension suggest?
- 1 candidate = LOW (score: 1) — fragile, no alternatives
- 2-4 candidates = MEDIUM (score: 2) — healthy selection
- 5+ candidates = HIGH (score: 3) — rich creative space

**Formula: RICHNESS = Opposition Depth × Structural Overlap × Metaphor Space Width**

This is MULTIPLICATIVE. Deep opposition with zero overlap = ZERO richness (impossible to bridge).

**[CRITICAL] Richness Formula Cap:**

The richness formula selects which TENSIONS to resolve — this is correct. However, at METAPHOR SELECTION (Phase 3.5), richness score must NOT override perceptual risk assessment.

- **Use richness to select tensions** (Phase 2): Higher richness = prioritize this tension.
- **Do NOT use richness to select metaphors** (Phase 3): A metaphor resolving 27-richness tension with HIGH perceptual risk ranks below one resolving 12-richness tension with LOW perceptual risk.

**Test data showed:** Playbook BECOME+RECONCILE scored richness 27, guided toward Apprenticeship Workshop (7/7 resolution, monotonous grid). Playbook UNDERSTAND scored richness 12, guided toward Elevation Map (3.5/7 resolution, best visual outcome). Richness correctly identified the deeper tension but incorrectly predicted the better metaphor.

### The Tension Threshold Gate

After Phase 2, evaluate total tension:

- **GENUINE tension count = 0** → Zero-tension path. Skip Phases 3-4. Apply design system defaults directly.
- **All tensions COSMETIC** → Cosmetic path. Skip Phase 3. Phase 4 uses direct component mapping.
- **At least 1 GENUINE tension** → Proceed to Phase 3.

This gate prevents forcing metaphors onto content that doesn't need them.

### Phase 3: Metaphor Collapse

The metaphor is the BRIDGE between tension's two sides. It resolves emotional opposition by finding a real-world domain where shared structural properties exist naturally.

> **The tension is emotional; the bridge is structural.**

**Step 3.1-3.3: Extract Structural Properties**

Transform emotional needs into geometric/topological abstractions. "Warmth" is not structural. "Containment with visible boundaries" is.

Examples:
- Graduated trust → ORDERING (sequence with rank)
- Visible progress → TRAVERSAL (movement through stages)
- Calibrated investment → STRATIFICATION (parallel layers of different value)
- Safety in uncertainty → CONTAINMENT (bounded zones)

**Step 3.4: Generate the Search Query**

Combine overlap and gap properties into constrained search:

> "What real-world domain naturally exhibits [OVERLAP PROPERTIES] while being [SIDE B GAP PROPERTIES] yet conveying [SIDE A GAP PROPERTIES]?"

**Example (OD-004):**
> "What is naturally LAYERED and ORDERED and CONTAINED, while being ANGULAR and FLAT, yet conveying SAFETY and WARMTH?"

**Answer:** Geological strata.

**Three Search Heuristics:**

1. **Constraint scan**: Start with HARDEST constraint. For KortAI, ANGULARITY eliminates organic/biological, liquid/fluid, atmospheric, textile, botanical.

2. **Content resonance**: Ask what content is LITERALLY about. OD-004 is about "stability" and "layers of certainty" — words with direct geological analogues.

3. **Emotional valence**: Side A's emotion eliminates domains with wrong valence. Warmth/safety eliminates military (aggressive), medical (clinical), judicial (adversarial).

The domain surviving ALL THREE filters is the metaphor.

**Step 3.5: Test Candidates (Composite Scoring)**

For each candidate, score on FIVE dimensions:

**A. Tension Resolution**: Test against EVERY tension from Phase 2.
```
CANDIDATE: [metaphor name]
Tension 1: Resolves? YES (1) / PARTIAL (0.5) / NO (0) -- [why]
Tension 2: Resolves? YES / PARTIAL / NO -- [why]
SCORE: X/N
```

**B. Structural Isomorphism Count**: How many INDEPENDENT property mappings?

Ratings:
- 6+ = Structurally isomorphic. The metaphor IS the content's structure.
- 4-5 = Structurally strong. Genuine depth.
- 2-3 = Structurally thin. Analogy rather than architecture.
- 0-1 = Decorative only. REJECT.

**C. Content Resonance (Split: Nominal + Structural)**: [R2 IMPROVEMENT]

**C1. Nominal Resonance** — Does content use metaphor's vocabulary?
- HIGH = content literally uses metaphor's words
- MEDIUM = conceptual parallels
- LOW = forced connection

**C2. Structural Resonance** — Does metaphor's internal structure mirror content's structure?
- HIGH = relationships (hierarchy, flow, nesting) isomorphically map
- MEDIUM = partial structural alignment
- LOW = structural mismatch despite vocabulary overlap

**Weight structural resonance 2x higher than nominal.** Structural resonance predicts visual quality; nominal predicts only vocabulary convenience.

**D. Mechanism Feasibility**: Can EVERY metaphor property be expressed using ONLY the system's CSS tools?

Check each property against 6 legal channels (background, border, typography, spacing, layout, accent). If any requires soul-violating CSS, metaphor FAILS.

**E. Perceptual Risk Assessment**: [R1 IMPROVEMENT — CRITICAL]

After scoring A-D, assess PERCEPTUAL RISK. This predicts whether metaphor will execute well visually, independent of structural properties.

Score each question LOW (0) / MEDIUM (0.5) / HIGH (1):

| Risk Question | LOW Risk | HIGH Risk |
|---|---|---|
| **Transition model**: CHANGING STATE or EMPTY SPACE? | Changing state (deeper stratum, higher elevation, next room) | Empty space (breathing zones, page turns, walking between buildings) |
| **Expression mode**: STRUCTURAL GRADIENTS or TEXTUAL LABELS? | Structural (graduated backgrounds, spatial hierarchy, compression) | Textual ("MAIN STREET — CONNECTING DISTRICTS", labeled connectors) |
| **Element variety**: VARIED element sizes or UNIFORM grids? | Varied (different sections have different visual weight/shape) | Uniform (repeating same-shaped cards, grid monotony) |
| **Responsive story**: Natural responsive degradation path? | Natural (narrower core sample = deeper bore, stacked rooms) | Forced (workbench tools need horizontal space, side-by-side breaks) |

**Perceptual Risk Score = sum (0-4)**

| Score | Rating | Action |
|---|---|---|
| 0-1 | LOW RISK | Proceed confidently |
| 1.5-2 | MODERATE RISK | Proceed with builder warnings |
| 2.5-3 | HIGH RISK | Rank below lower-risk candidates even if Resolution/Isomorphism higher |
| 3.5-4 | EXTREME RISK | Consider rejection unless no alternatives exist |

**CRITICAL RULE**: A metaphor with Resolution 7/7 and Perceptual Risk HIGH should rank BELOW one with Resolution 5/7 and Perceptual Risk LOW. Structural richness does not compensate for perceptual risk.

**F. Perceptual Cost Assessment (Guardrail Violation Prediction)**

For each structural isomorphism, assess whether mapping encourages violations of perceptual guardrails (Phase 4.0).

| Cost Question | +1 Cost If YES |
|---|---|
| **Compression below floors**: Encourages padding below 32px or compression ratio worse than 2.5:1? | YES = +1 |
| **Container width below minimum**: Encourages container width below 940px (65% at 1440px)? | YES = +1 |
| **Uniform element grids**: Encourages 4+ identical items with no hierarchy? | YES = +1 |
| **Transitions as empty space**: Conceptualizes transitions as vertical gaps rather than state changes? | YES = +1 |
| **Explicit labels over structure**: Encourages metaphor vocabulary in visible text labels? | YES = +1 |

**Perceptual Cost Score = sum (0-5+)**

| Score | Rating | Action |
|---|---|---|
| 0 | LOW COST | Proceed as designed |
| 1-2 | MODERATE COST | Add specific builder warnings |
| 3+ | HIGH COST | Consider alternative metaphor OR modify isomorphism mapping |

**Composite Verdict (Updated):**
- **PROCEED**: Resolution >= N-1, Isomorphism >= 4, Structural Resonance >= MEDIUM, Feasibility = 100%, Perceptual Risk <= 2
- **CONSIDER**: Resolution >= N-2, Isomorphism >= 3, Structural Resonance >= LOW, Feasibility >= 80%, Perceptual Risk <= 3
- **REJECT**: Any other combination, OR Perceptual Risk = 4

**CRITICAL PRINCIPLE: The pipeline predicts RICHNESS, not QUALITY.** High richness scores (9/9 tension resolution, 27/27 RECONCILE) identify promising tension-metaphor pairings but do NOT guarantee perceptual success. Perceptual Risk (3.5E) and Perceptual Cost (3.5F) assessments are MANDATORY gates preventing high-richness-low-quality outputs.

### Phase 4: Compositional Layout Generation

Translate metaphor into concrete CSS/HTML mechanisms using design system's vocabulary.

**Phase 4.0: Perceptual Guardrails (Non-Negotiable Minimums)**

ALL metaphors must pass these perceptual floors:

**CONTENT PROPORTION GUARDRAILS (at 1440px):**

| Guardrail | Value | Rationale |
|---|---|---|
| Min content-to-viewport ratio | **65%** (940px) | Below this, content feels like narrow strip lost in margins |
| Max content-to-viewport ratio | **80%** (1150px) | Above this, layout feels edge-to-edge with no breathing room |
| Min horizontal padding (outer) | **32px per side** | Absolute floor even at maximum compression |
| Min text column width | **220px** | Below this, line length becomes unreadable (<35 characters) |
| Optimal line length | **45-80 characters** | Bringhurst canonical; WCAG maximum = 80 |

**TYPOGRAPHIC SPACING GUARDRAILS:**

| Guardrail | Value | Rationale |
|---|---|---|
| Min label-to-heading gap | **16px** | Different font family + size + case = triple shift needs buffer |
| Min heading-to-body gap | **16px** | Editorial standard for H1/H2 levels |
| Min body line-height | **1.5** | WCAG 2.1 SC 1.4.12 accessibility floor |
| Min section breathing zone | **48px** | Between major sections — magazine quality floor |

**COMPRESSION AND DENSITY GUARDRAILS:**

| Guardrail | Value | Rationale |
|---|---|---|
| Compression ratio ceiling | **Deepest padding >= 40% of shallowest padding** | If topsoil = 80px, bedrock cannot go below 32px |
| Characters per line | **45-80** | Below 45 = excessive ragging; above 80 = WCAG fail |

**CRITICAL PRINCIPLE:**

These floors define the safe zone within which metaphors may operate. What metaphor determines is WHERE in this range to operate. What metaphor may NOT do is push any value below these absolute minimums.

**Priority Order When Metaphor Conflicts with Guardrails:**

1. **Readability floors** (line-height 1.5, CPL max 80, container min 940px) — NEVER compromise
2. **Breathing zones** (section spacing min 48px) — NEVER compromise
3. **Content width** (min 65% of viewport) — NEVER compromise
4. **Metaphor fidelity** — Adjust to meet floors
5. **Aesthetic preference** — Last priority

### Phase 5: Output

Generate TWO outputs:

**Output A: The Thought Process Document**

Show every step explicitly:
1. Content assessment (Phase 0 classification)
2. Multi-axis questioning results (all axes, with yield ratings)
3. Tension derivation (all axis tensions, with richness scores)
4. Selected tension and why (with Addition Test, BECAUSE test, richness formula)
5. Metaphor candidates, composite scores, and winner (with isomorphism table)
6. Property-to-mechanism translation table (5-category extraction)
7. Coherence check results
8. Invented components and justification
9. Fractal consistency verification

**Output B: The HTML Compositional Layout**

Complete, self-contained HTML file that:
- Uses ONLY KortAI design system CSS (no soul violations)
- Implements metaphor through concrete mechanisms
- Contains actual content
- Passes Soul Test
- Includes `<style>` block with all CSS inline

---

## 3. The Key Insight: IMPLICIT > EXPLICIT Metaphors

**The single most important execution-quality lesson from testing 15 HTML layouts:**

> **Structural embodiment beats textual announcement. The best metaphors are FELT, not LABELED.**

**IMPLICIT metaphor example:**
- Section backgrounds graduate from dark to light
- Border weights decrease with depth
- Typography compresses progressively
- Reader FEELS progression without being told

**EXPLICIT metaphor example:**
- Section headers say "BEGINNER ZONE", "INTERMEDIATE ZONE", "EXPERT ZONE"
- Labeled connectors announce transitions
- Metaphor vocabulary appears in visible text
- Reader is TOLD the metaphor

**Test:** Remove all metaphor-specific labels. Does layout still communicate metaphor through structure alone?
- If yes = implicit (good)
- If no = explicit (needs rework)

**Why this matters:** Excessive labeling signals lack of confidence in metaphor's structural strength. If spatial/visual/typographic execution is strong, labels become redundant.

---

## 4. The OD-004 Case Study: Tension Protocol Proof

OD-004 (Confidence/Certainty Guide) is THE anchoring proof that tension-driven composition works.

### Side A: Reader Need

Reader navigating documentation of mixed certainty faces invisible crisis. Technical docs tacitly promise "what follows is true," but developers need knowledge across spectrum from established fact to open hypothesis. Without explicit certainty signals, reader performs constant metacognitive work.

**Three failure modes:**
1. **Premature commitment**: Treats speculative advice as truth, implements in production, surprised when fails
2. **Blanket distrust**: Treats ALL documentation as provisional, loses ability to lean on established practices
3. **Avoidance**: Skips entire categories because cognitive cost exceeds patience

**What reader needs:**
- **Epistemic transparency**: Calibrate trust before investing attention
- **Safety in navigating uncertainty**: "You will always know where you stand"
- **Warmth**: Uncomfortable territory needs knowledgeable companion, not cold database
- **Graduated investment**: Quick access to facts, invitation to explore frontiers
- **Visible structure as reassurance**: SEE organization, SEE position, SEE progress

### Side B: System Constraint (KortAI's Austerity)

The KortAI design system is fundamentally a system of refusal:

- **Soul Piece #1**: `border-radius: 0` — Every element is rectangle with sharp edges
- **Soul Piece #2**: `box-shadow: none` — Flat surfaces only, no depth illusion
- **Soul Piece #3**: Serif = Wisdom — Instrument Serif italic reserved for authority
- **Soul Piece #5**: Squares Signal System — No circles, rounded progress bars, pill badges

**Visual personality:**
- **Institutional**: Monospace meta labels read like government forms, scientific field notes
- **Angular**: Every element is box. Visible mortar lines between panels. No relief from rectangularity.
- **Sparse warmth vocabulary**: Narrow palette, warmth almost exclusively through background color
- **Precise**: Mathematical spacing scale, categorized borders, controlled typography

### The Tension (Core Contradiction)

> **"The reader needs to feel safe navigating uncertainty, but the design system only provides sharp edges, flat surfaces, and institutional precision."**

**Tension 1: Warmth vs. Austerity**
Reader needs reassurance, but system has no soft edges, no shadows, no gradients, no conventional "come closer" signals.

**Tension 2: Graduated trust vs. Binary vocabulary**
Reader needs four distinct certainty levels as FELT QUALITIES, but system's vocabulary is essentially binary: element or no element, border or no border.

**Tension 3: Invitation vs. Formality**
Open Questions stratum should feel inviting to explore, but institutional precision reads as formality, formality reads as warning when applied to uncertainty.

**Tension 4: Progressive density vs. Visual sameness**
R1-001 requires density correlate inversely with confidence, but system's visual components are fundamentally similar across densities.

### The Metaphor Resolution: Geological Strata

**Resolution of Tension 1 (Warmth vs. Austerity):**
Rock strata ARE sharp-edged, naturally angular. They communicate depth, time, foundation — warm concepts through austere form. Warmth comes from conceptual familiarity (everyone understands deeper = older = more established), not visual softness.

**Resolution of Tension 2 (Graduated trust vs. Binary vocabulary):**
Border-weight gradient is KEY INVENTION: 4px = Established, 3px = Probable, 2px = Speculative, 1px = Open. System's binary "border or no border" becomes four-point scale. Border weight IS confidence level.

**Resolution of Tension 3 (Invitation vs. Formality):**
Geological metaphor reframes formality as expertise. Geological survey is formal AND exploratory — geologists discover what is there, not confirm what they know. Formal monospace labels read as field notes from ongoing expedition, not quarantine signs.

**Resolution of Tension 4 (Progressive density vs. Visual sameness):**
CRESCENDO density progression encoded through FIVE simultaneous channels:
1. Typography shrinks (Established h3 = 1.25rem → Open h3 = 1.0625rem)
2. Line-height compresses (1.8 → 1.6)
3. Padding decreases (40px → 16px)
4. Content width modulation
5. Font size drops (15px → 14px)

Five channels create progressive tightening within same visual vocabulary. Reader doesn't notice any single change but EXPERIENCES cumulative effect as increasing density.

### Why Geological Strata and Not Something Else

**Structural isomorphism between geological property and confidence property:**

| Geological Property | Confidence Property | Design System Implementation |
|---|---|---|
| Deeper layers are older | Higher confidence = more established | Border weight gradient (4px to 1px) |
| Deeper layers are more compressed | Higher confidence = sparser presentation | Padding/line-height decrease |
| Rock layers have sharp boundaries | Confidence levels need clear transitions | Stratum boundary markers with 3px rules |
| Geological surveys map before excavating | Readers need overview before depth | Geological survey at page top |
| Strata are independently informative | Each confidence level has standalone value | Every stratum independently valuable |
| You dig down by choice | You read deeper by choice | Confidence switcher: Facts Only / Full / Everything |

Metaphor doesn't just RESOLVE tension — makes tension's existence a strength. Austerity of sharp edges, flat surfaces, institutional precision IS the geological reading experience. Rock layers are sharp, flat, precisely stratified. System's personality and metaphor's personality are THE SAME personality.

---

## 5. Contrast: Where Tension Is Absent (CD-002)

CD-002 asks: "Can a Decision Matrix embed within task-based workflow as natural PULSE sparse phase?"

This is **system-facing question**, not reader-facing. It asks about component placement: can component A live inside pattern B? Answer is procedural: stack, don't nest. Place decision matrix AFTER task context. Use BREATHING transition.

**What question did CD-002 ask?** "Can these two components coexist?" Engineering question. Answer: yes, they can be stacked. Composition is correct. Grammar is valid. But no creative leap required because no tension existed.

The reader needs decision guide; system provides decision matrix component. Direct match. No gap. No invention.

**Where CD-002 shows mechanical assembly:**
- Z-Pattern sections flow into Decision Matrix through "running-header" label — navigational signal, not experiential
- BREATHING transition is 48px gap with 3px borders and label. It is a gap. Does not transform reader's relationship to content.
- Spiral confidence strata (bedrock/subsoil/atmosphere) carry geological vocabulary but serve as generic containers. Strata labels are borrowed form, not emergent invention.

---

## 6. Tension's Role in the Post-CD Pipeline

### The Two-Track Reality

Pipeline evolution research discovered migration is NOT single pipeline but **two distinct execution paths**:

**Track 1 (Assembly): ~40-50% of pages**
- Mechanical combination of stable components using R5 grammar rules
- 45-90 minutes per page
- Highly parallelizable (6 agents simultaneously)
- Deterministic assembly process
- NO tension synthesis required

**Track 2 (Composition): ~50-60% of pages**
- Creative tension resolution through metaphor-driven composition
- Full tension-composition skill pipeline (7 phases)
- 3-5 hours per page
- Sequential bottleneck (2-3 agents max)
- Judgment-heavy creative process
- TENSION SYNTHESIS IS THE PIPELINE

**Critical implication:** Track 2 is THE timeline bottleneck. 35-45 pages × 3-5 hours = 105-225 hours of sequential work. Fundamentally not parallelizable. THE cost and timeline driver.

### When to Use Track 2

**Track 2 Classification Triggers:**

1. **Content is prose-dominant** (>60% narrative, <30% code/tables/diagrams)
2. **Content creates emotional demand** (warmth, graduated trust, safety in uncertainty, transformation)
3. **Content has implicit structure** (not explicitly tabular/diagrammatic but needs spatial organization to communicate meaning)
4. **Reader experience varies by section** (different emotional needs at different depths)
5. **Content resists direct component mapping** (no existing Tier 2 component directly serves the need)

**Track 1 Classification Triggers:**

1. **Content is visual-dominant** (>60% code/tables/diagrams)
2. **Content is reference material** (API docs, checklists, decision matrices, comparison tables)
3. **Existing Tier 2 components directly match content structure**
4. **Reader need is clarity/precision** (system already IS this)
5. **Addition Test passes** (can fulfill need by selecting/placing components without transforming meaning)

### Phase B: Track Classification (Post-CD)

Phase B (Content Analysis + Track Classification) inventories all 75 pages and classifies into Track 1 vs Track 2:

**Classification methodology:**
1. Read first 2-3 paragraphs and scan structure
2. Apply Track 1/Track 2 triggers
3. Run Addition Test
4. For borderline cases: err toward Track 2 (worst case is discovering Track 1 suffices during execution)

**Output:** Content inventory spreadsheet with Track column + confidence rating.

### The Skill AS Infrastructure

The tension-composition skill is not "nice to have" — it is **load-bearing infrastructure** for Track 2 migration.

**What loading the skill provides:**

1. **Deterministic process for creative work**: 7 phases with clear gates and exit ramps
2. **Formalized tension derivation**: Addition Test, BECAUSE test, richness formula
3. **Perceptual risk gates**: Prevents high-richness-low-quality outputs
4. **Guardrail library**: 48 PA questions + quantitative thresholds
5. **Builder warnings**: W-DEADZONE, W-OVERLABEL, W-MONOTONY, W-RESPONSIVE, W-STATS, W-IMPLICIT
6. **Metaphor search menu**: Domain categories compatible with angular/flat/sharp systems
7. **Structural property taxonomy**: 5-category extraction (spatial, temporal, material, behavioral, relational)

**Core insight:** The pipeline is not software to be built. It is an agent with the right context. Load the skill, the component library, the perceptual guardrails — agent BECOMES the Track 2 pipeline.

---

## 7. Test Results: What Tension Testing Revealed

### Pipeline Test Data (15 layouts, 3 content pieces)

Pipeline was tested against 3 content pieces with 5 metaphor candidates each.

**Key findings:**

1. **Pipeline predicts metaphor RICHNESS, not perceptual QUALITY.** Tension resolution score has ~0 correlation with visual quality.

2. **Pipeline disagreed with auditors on ALL THREE top picks.** Pipeline's structural scoring consistently overweighted deep opposition and underweighted execution quality.

3. **Best layouts had IMPLICIT metaphors** (graduated backgrounds, spatial hierarchy), worst had EXPLICIT (labeled connectors, announced transitions).

4. **Dead zone epidemic**: 5/15 layouts suffered from excessive empty space. All were metaphors conceptualizing transitions as EMPTY SPACE.

5. **Stats bars universally weak**: Every layout with horizontal metadata strip had problems at 768px.

6. **Zero soul violations** across 15 layouts — KortAI constraints are invisible infrastructure.

These findings drove improvements R1-R6:

- **R1**: Perceptual Risk Assessment (Step 3.5E) — CRITICAL
- **R2**: Content Resonance split into Nominal + Structural
- **R3**: Pacing Prediction Heuristic (Step 4.2B) — HIGH
- **R4**: Responsive Degradation Check — MEDIUM
- **R5**: Richness Formula Cap — prevents richness from overriding perceptual risk
- **R6**: Builder Instruction Warnings — W-DEADZONE through W-IMPLICIT

### Skill Enrichment Results (13th agent team)

**Perceptual-auditing skill enrichment:**
- 28→48 PA questions (+79%)
- New guardrails + metaphor-awareness
- Root cause identified: Metaphor-driven visual compromise

**Tension-composition skill enrichment:**
- +86 lines
- Phase 4.0 guardrails
- Phase 3.5F perceptual cost scoring

**6 HTML layouts rebuilt:**
- 48 CSS changes
- All guardrails met
- All metaphors preserved
- 0 regressions

**Post-enrichment audit:**
- 5 YES + 1 YES WITH RESERVATIONS
- Top 3 unchanged: Playbook Elevation Map, Gas Town Floor Plan, Boris Geological Core
- 0 soul violations

**Core principle emerged:** "The metaphor shapes experience; the guardrails prevent it from breaking experience."

---

## 8. Open Questions and Uncertainties

**From OPEN-QUESTIONS.md (relevant to tension synthesis):**

### Category 1: Track Classification Validation

**Q1.1**: What is actual Track 1 vs Track 2 split in real content inventory?
- **Hypothesis**: 40-50% Track 1, 50-60% Track 2
- **Impact**: HIGH — affects timeline, cost, parallelization strategy
- **Resolution**: Phase B Content Analysis

**Q1.2**: Can borderline pages successfully downgrade from Track 2 to Track 1 during execution?
- **Hypothesis**: Some pages classified Track 2 discover Track 1 suffices (Addition Test passes during Phase 1)
- **Impact**: MEDIUM — could reduce Track 2 bottleneck
- **Resolution**: Phase F Pilot + Phase H/I execution data

### Category 2: Per-Page Timing Validation

**Q2.1**: What is actual Track 2 per-page time with skill-equipped agent?
- **Hypothesis**: 3-5 hours
- **Current data**: No empirical data yet
- **Impact**: CRITICAL — Track 2 is timeline bottleneck
- **Resolution**: Phase F Pilot (MUST track per-page timing)

**Q2.2**: Does tension derivation time vary significantly by axis richness?
- **Hypothesis**: RECONCILE-heavy pages take longer than UNDERSTAND-heavy
- **Impact**: MEDIUM — affects Track 2 scheduling
- **Resolution**: Phase H/I execution data with axis tracking

### Category 3: Metaphor Selection Reliability

**Q3.1**: Does same content with same agent produce same metaphor consistently?
- **Hypothesis**: Phase 3.4 creative leap introduces non-determinism
- **Impact**: MEDIUM — affects quality consistency
- **Resolution**: Repeat runs on same content during Phase F

**Q3.2**: Does Perceptual Risk gate successfully prevent dead zones / over-labeling?
- **Hypothesis**: YES — R1 improvement addresses root cause
- **Impact**: HIGH — quality assurance
- **Resolution**: Phase F Pilot + Phase H/I defect tracking

---

## 9. Synthesis: Tension's Central Role

### The Three-Sentence Summary

1. **Tension is THE creative engine of compositional design.** Creative layouts emerge from genuine opposition between reader needs and system constraints. No tension = mechanical assembly.

2. **The tension-composition skill formalizes the irreducible creative step.** 839 lines, 7-phase pipeline, 48 PA questions — transforms tacit creative knowledge into load-bearing infrastructure.

3. **Track 2 is the timeline bottleneck and the soul driver.** 105-225 hours of sequential creative work. Not parallelizable. Where the design system's personality becomes lived experience.

### What Makes Tension Different from Assembly

**Assembly (Track 1):**
- Reader need matches existing component
- Direct mapping: "I need a table" → stat-grid-4col
- No gap between need and vocabulary
- Deterministic: same content + same rules = same output
- 45-90 minutes per page
- Highly parallelizable

**Composition (Track 2):**
- Reader need opposes system constraints
- Bridging gap through metaphor
- Genuine tension requiring creative resolution
- Non-deterministic at Phase 3.4 (creative leap)
- 3-5 hours per page
- Sequential bottleneck

### The Tension Landscape for KortAI

**STRONGEST tensions against KortAI:**
- Warmth/comfort vs. austerity (proven: richness 18)
- Reconciliation vs. verdict-drive (richness 27 — highest possible)
- Playfulness vs. formality (unexplored, high potential)
- Mystery/intrigue vs. explicit labeling (unexplored)
- Spatial understanding vs. linear scroll (unexplored)
- Building confidence vs. institutional intimidation (unexplored)
- Community/dialogue vs. editorial monologue (unexplored)

**ZERO tension (assembly territory):**
- Hierarchy/structure — system already IS this
- Clarity/precision — system already IS this
- Step-by-step guidance — Task Progression component exists
- Choosing between options — Decision Matrix component exists

### The Pipeline Evolution Story

```
DD (alphabet)    → OD (vocabulary)   → AD (geometry)     → CD (prose)        → Post-CD Phases
Density patterns   Content types       3-way equivalence   Combination test   Track classification
Visual breathing   Structural words    ATTENTION TOPOLOGY  Grammar stress     Component extraction
                                                           Track 1+2 proof    Validation testing
                                                                              ↓
                                                                      ══ FREEZE LINE ══
                                                                              ↓
                                                                         Migration
                                                                      Track 1: Assembly
                                                                      (45-90 min, parallel)
                                                                      Track 2: Composition
                                                                      (3-5 hrs, sequential)
                                                                      TENSION SYNTHESIS
```

Tension synthesis was always there — OD-004 proved it works. But it was tacit knowledge until pipeline evolution research formalized it as Track 2. The tension-composition skill makes the irreducible creative step portable, teachable, repeatable.

### The Freeze Guarantee and Tension

The freeze guarantee ("once we start migrating, I don't want to update the design system") works BECAUSE of tension synthesis formalization:

1. **Perceptual guardrails are quantified** (940px container, 16px spacing, 32px padding, 40% compression)
2. **Metaphor search is constrained** (domain menu, search heuristics, compatibility filters)
3. **Risk gates prevent bad outputs** (Perceptual Risk, Perceptual Cost, composite verdict)
4. **Builder warnings encode lessons** (W-DEADZONE, W-OVERLABEL, W-MONOTONY, etc.)
5. **The skill teaches HOW TO THINK** (not just WHAT TO DO)

Agents loading this context can handle novel situations without system updates. The accumulated identity is complete enough to generate infinite variations within fixed constraints.

---

## 10. Recommendations for CD Execution

### CD-006 as Track 2 Validation

CD-006 (crown jewel exploration) MUST validate Track 2 execution:

1. **Use real content** (not synthetic)
2. **Invoke full tension-composition skill**
3. **Document every phase** (thought process + HTML output)
4. **Measure time** (per-phase breakdown)
5. **Track perceptual risk gates** (how many metaphor candidates rejected?)
6. **Verify guardrails** (all 48 PA questions pass?)

This is insurance policy that proves skill works at migration scale.

### CD Completeness Gate Update

Add Track 2 requirements:

**Existing requirements:**
- Every component used in at least one exploration
- Every R-5 finding evaluated
- Density tolerance table complete
- Transition grammar validated at combination scale

**NEW requirements:**
- **Track 1 validated** (CD-001 through CD-005 prove assembly works)
- **Track 2 validated** (CD-006 proves tension-composition skill works)
- **Per-page timing data collected** (Track 1 and Track 2)
- **Perceptual risk gates tested** (at least 2 metaphor candidates rejected for HIGH risk)
- **Builder warnings catalog complete** (W-DEADZONE through W-IMPLICIT documented with examples)

### Phase B Track Classification Protocol

**Mandatory steps:**

1. Read first 2-3 paragraphs
2. Scan for code/table/diagram density
3. Apply Track 1/Track 2 triggers
4. Run Addition Test mentally
5. Record classification + confidence (HIGH/MEDIUM/LOW)
6. Flag borderline cases for pilot testing

**Output format:**

| Page | Track | Confidence | Notes |
|------|-------|------------|-------|
| Authentication Guide | Track 2 | HIGH | Prose-dominant, emotional demand (safety), no direct component match |
| API Reference | Track 1 | HIGH | Visual-dominant (code blocks), reference material, stat-grid-4col + code-block |
| State Management | Track 2 | MEDIUM | Borderline — test in pilot |

### Phase F Pilot Requirements

Phase F (Pilot Migration) MUST test BOTH tracks:

**Track 1 pilot:**
- 1 page, straightforward assembly
- Measure time (should be 45-90 min)
- Document component selection process
- Verify R5 grammar suffices

**Track 2 pilot:**
- 1-2 pages, genuine tension
- Invoke full tension-composition skill
- Measure time per phase (Phase 0 through Phase 5)
- Document metaphor selection process
- Collect perceptual audit data
- Verify guardrails prevent violations

**CRITICAL:** Track 2 per-page timing data is THE most important output. This validates or refutes 3-5 hour estimate, which drives entire migration timeline.

---

## Conclusion

Tension synthesis is not a feature. It is the architectural foundation of the design system's compositional track.

**What tension provides:**

- **Creative engine**: Transforms constraint into opportunity
- **Formalized process**: 7-phase pipeline with gates and exit ramps
- **Quality assurance**: Perceptual risk gates prevent structural richness from producing bad layouts
- **Portable knowledge**: Skill makes tacit creative knowledge explicit and teachable
- **Freeze guarantee infrastructure**: Quantified guardrails + constrained search = infinite variations within fixed constraints

**What tension demands:**

- **Time**: 3-5 hours per page, 105-225 hours total for Track 2
- **Sequential execution**: Not parallelizable, fundamentally bottlenecked
- **Judgment**: Irreducible creative step at Phase 3.4 (metaphor selection)
- **Validation**: CD-006 MUST prove Track 2 works before freeze line

The design system's soul lives in the tension between mechanical assembly (Track 1) and creative composition (Track 2). Both are necessary. Neither is optional. Tension synthesis makes the creative half repeatable without making it mechanical.

**The metaphor shapes experience; the guardrails prevent it from breaking experience.**

---

**Files referenced:**
- `~/.claude/skills/tension-composition/SKILL.md` (839 lines)
- `design-system/pipeline/tension-deep-dive.md` (351 lines)
- `design-system/pipeline/README.md` (448 lines)
- `design-system/pipeline/07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md`
- `design-system/pipeline/OPEN-QUESTIONS.md`
- MEMORY.md (tension-composition skill summary, skill enrichment results)

**Total source material:** ~3,000+ lines

**Analysis date:** 2026-02-13

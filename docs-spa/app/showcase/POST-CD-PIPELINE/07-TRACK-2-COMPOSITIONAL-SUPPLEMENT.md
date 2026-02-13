<!-- INLINE THREADING HEADER
Phase: POST-CD-PIPELINE
Root: POST-CD-PIPELINE/
Tier: A
Synthesis: 06-synthesis.md
Research: _pipeline-evolution-research/01-skill-integration-map.md, 03-execution-flow.md
Updated: 2026-02-13
-->

# Track 2 Compositional Supplement
## When and How to Invoke the Tension-Composition Skill

**Purpose:** This document is THE reference for Track 2 migration — when to invoke the tension-composition skill, how the full pipeline executes during per-page migration, and what builders need to know about metaphor-driven composition.

**Relationship to Other Docs:**
- **03-MIGRATION-PIPELINE.md** — Describes the 6-phase per-page pipeline for BOTH tracks
- **08-COMPOSITIONAL-STRATEGY-LIBRARY.md** — Documents proven metaphor strategies from high-richness content
- **09-EXTRACTION-VALIDATION-PROTOCOL.md** — Validates the component library + pattern base

---

## Table of Contents

1. [When Track 2 Applies](#when-track-2-applies)
2. [The Full Phase 3 Pipeline for Track 2](#the-full-phase-3-pipeline-for-track-2)
3. [Skill Integration with Component Library](#skill-integration-with-component-library)
4. [Builder Warnings and Guardrails](#builder-warnings-and-guardrails)
5. [Track 2 Quality Lessons](#track-2-quality-lessons)
6. [The Track Classification Decision](#the-track-classification-decision)
7. [Open Questions](#open-questions)

---

## When Track 2 Applies

Track 2 (Composition) applies when the reader's needs CANNOT be fulfilled by selecting and placing existing components without transforming their meaning. The content demands a compositional strategy that shapes HOW components combine, not just WHICH components appear.

### The Addition Test

> **Can you fulfill the reader's need by selecting and placing existing design system components without transforming their meaning?**
> - **YES** → Track 1 (assembly is sufficient)
> - **NO** → Track 2 (transformation required, metaphor needed)

**Track 1 Example:**
- Content: "Setting Up Authentication" (tutorial, 8 steps, code-heavy)
- Reader needs: Understand the sequence, execute each step, troubleshoot errors
- System provides: Task components, code snippets, Q&A pairs
- Addition Test: **YES** — assemble Task + Code + Q&A components in sequence
- Track: **TRACK 1**

**Track 2 Example:**
- Content: "Boris Cherny Extraction" (philosophy, concentric layers, mentorship + authority)
- Reader needs: FEEL warmth and safety while learning austere type techniques
- System provides: Sharp edges (`border-radius: 0`), flat surfaces (`box-shadow: none`), narrow palette, sparse layouts
- Opposition: Warmth/safety (reader need) vs. Austerity/decisiveness (system personality)
- Addition Test: **NO** — existing components provide STRUCTURE but not the FEELING of warmth/safety
- Track: **TRACK 2**

### The BECAUSE Test

A secondary validation to ensure the need is content-driven, not manufactured:

> "The reader needs X BECAUSE [specific content property]."

If you cannot complete this sentence with a specific content property, the need is manufactured.

**Valid:**
- "The reader needs warmth BECAUSE the content is philosophical and mentorship-oriented."
- "The reader needs spatial understanding BECAUSE the content describes a system with complex topology."
- "The reader needs graduated trust BECAUSE the content moves from fundamentals to advanced details with varying confidence levels."

**Invalid:**
- "The reader needs clarity BECAUSE clarity is always good." (tautological)
- "The reader needs visual interest BECAUSE pages should be interesting." (generic)
- "The reader needs hierarchy BECAUSE content should be organized." (system already provides this)

### Richness Scoring

After passing the Addition Test and BECAUSE Test, score the tension's richness to confirm it warrants the Track 2 pipeline:

**Formula:** `Richness = Opposition Depth × Structural Overlap × Metaphor Space Width`

| Dimension | LOW (1) | MEDIUM (2) | HIGH (3) |
|-----------|---------|------------|----------|
| **Opposition Depth** | 1 layer | 2-3 layers | 4+ layers |
| **Structural Overlap** | 0-1 shared properties | 2-3 shared properties | 4+ shared properties |
| **Metaphor Space Width** | 1 candidate | 2-4 candidates | 5+ candidates |

**Richness Threshold:** ≥ 8 to warrant Track 2 pipeline

**Example:**
- Content: Boris Cherny (warmth vs. austerity)
- Opposition Depth: 3 (emotional, tactile, visual) → **HIGH (3)**
- Structural Overlap: 3 (containment, ordering, stratification) → **MEDIUM (2)**
- Metaphor Space Width: 5+ (geological, archival, craftsman, manuscript, editorial) → **HIGH (3)**
- **Richness = 3 × 2 × 3 = 18** ✓ (well above threshold)

### Content Type Examples

**Track 1 Content (Assembly):**
- Tutorials with clear step sequences
- API reference documentation
- Changelog entries
- Configuration guides
- Pure task sequences
- Q&A pairs with straightforward answers
- Installation instructions
- Command-line reference

**Track 2 Content (Composition):**
- Conceptual pages (philosophy, methodology, evaluation frameworks)
- Onboarding narratives (building trust, graduated complexity)
- Paradigm-shifting content (reconciling old beliefs with new approaches)
- System architectures (spatial relationships, topology, layered abstractions)
- Content with pedagogical intent (not just informing but TRANSFORMING the reader)
- Multi-confidence content (fundamentals are solid, details are flexible)
- Emotional journeys (building confidence, creating safety, managing anxiety)

**The Gray Zone (Track 1.5):**
- Some content falls between pure assembly and full composition
- Examples: Deep technical explanations with light narrative framing, comparison guides with embedded philosophy
- These may receive LIGHT tension treatment (Phases 0-2 classify as Track 1, but Phase 3 applies pattern composition with deliberate spatial choreography rather than mechanical assembly)

---

## The Full Phase 3 Pipeline for Track 2

When Phase 2 (Pattern Selection) marks a page as Track 2, Phase 3 becomes a 6-sub-phase tension-composition pipeline. This is THE creative bottleneck — approximately 150 minutes (2.5 hours) of the total 4-5 hour Track 2 migration time.

### Phase 0: Content Assessment (5 minutes)

**Purpose:** Classify content type and scope to route the pipeline correctly.

**Agent Actions:**

1. **Content Type Classification:**
   - **Prose-dominant** (<30% code/tables/diagrams) → STANDARD path
   - **Mixed** (30-60% code/tables/diagrams) → HYBRID path (narrative sections get metaphor, code/data sections get design system styling)
   - **Visual-dominant** (>60% code/tables/diagrams) → PRESENTATION-INTRINSIC path (skip metaphor for visual portions, apply design system styling only)
   - **Self-referential** (content describes the design system itself) → ABORT (cannot derive tension when content IS the system)

2. **Scope Assessment:**
   - **MICRO** (<100 words): Skip pipeline, apply design system defaults
   - **SHORT** (100-500 words): Reduced pipeline (2 needs max per axis, single metaphor)
   - **STANDARD** (500-3000 words): Full pipeline as specified
   - **LONG** (3000-10000 words): Segment into sections, run pipeline per section with unifying pass
   - **MASSIVE** (10000+ words): Multi-page architecture required

3. **Section Identification:**
   - Identify natural sections by heading, topic shift, or mode change
   - Classify each: NARRATIVE / REFERENCE / CODE / DATA / MIXED
   - Flag sections with incompatible structural needs (may need section-level metaphor variation)

**Output:** Content classification + scope + section inventory

**Example:**
```
CONTENT ASSESSMENT: Boris Cherny Extraction
Type: PROSE-DOMINANT (~70% prose, 30% code examples)
Scope: STANDARD (~2,000 words)
Sections: 3 NARRATIVE (Fundamentals, Techniques, Philosophy)
Route: STANDARD path, full pipeline
```

---

### Phase 1: Multi-Axis Questioning (25 minutes)

**Purpose:** Derive what the reader needs across multiple dimensions. Each axis produces needs + structural properties + richness rating.

**Agent Actions:**

1. **Run the Core Four (always):**

   | Axis | Question | Richest When |
   |------|----------|-------------|
   | **FEEL** | "What does the reader need to FEEL?" | Narrative, emotional topics, onboarding, first-contact pages |
   | **UNDERSTAND** | "What relationships does the reader need to understand?" | Technical docs, architectures, systems, causal explanations |
   | **DO** | "What does the reader need to DO after reading?" | Tutorials, guides, decision frameworks, reference |
   | **BECOME** | "What does the reader need to BECOME?" | Learning paths, philosophy, methodology, identity-forming content |

2. **Run the Extended Core (always, mark LOW YIELD when appropriate):**

   | Axis | Question | Low Yield When |
   |------|----------|----------------|
   | **NAVIGATE** | "How does the reader need to move THROUGH this?" | Short content, single-concept pages, linear narratives |
   | **TRUST** | "What does the reader need to believe about authority?" | Factual reference, internal docs, established-authority context |
   | **EVALUATE** | "What does the reader need to JUDGE?" | Single-path tutorials, factual reference, narrative |
   | **ORIENT** | "What does the reader need to know about WHERE THIS FITS?" | Standalone content, self-contained explanations |
   | **RECONCILE** | "What does the reader need to reconcile with prior beliefs?" | Content confirming existing knowledge, introductory material |

3. **Deploy Structural Trigger Axes (conditionally):**

   | Axis | Deploy When Content Contains... |
   |------|-------------------------------|
   | **COMPARE** | 2+ alternatives, trade-offs, A-vs-B decisions |
   | **IDENTIFY** | Personas, case studies, reader-as-protagonist, narrative voices |
   | **DISCOVER** | Aha-moments, progressive revelation, investigation/mystery structure |
   | **SEE** | System architectures, state machines, spatial relationships, data with shape |
   | **REMEMBER** | Reference patterns, checklists, content to internalize, reuse-oriented |

4. **For each axis that produces yield, record:**
   - Needs: What the reader requires from this axis
   - Structural properties: Geometric/topological abstractions of needs
   - Richness: HIGH / MEDIUM / LOW

**Output:** Axis table (4-14 entries depending on content)

**Example:**
```
AXIS: FEEL
Needs: Warmth, safety, graduated trust, containment, invitation to explore
Structural Properties: Layering, ordering by depth, compression gradient, visible boundaries
Richness: HIGH (deep emotional opposition to system's austerity)

AXIS: UNDERSTAND
Needs: Layered certainty (fundamentals are bedrock, details are flexible)
Structural Properties: Stratification (parallel layers of different confidence)
Richness: HIGH (structural depth)

AXIS: DO
Needs: Apply techniques, avoid anti-patterns
Structural Properties: Discrete actions, binary choices
Richness: LOW (system already provides Task components)

AXIS: BECOME
Needs: Practitioner with taste, not just rote technique
Structural Properties: Identity transformation, progressive maturity
Richness: MEDIUM (philosophical depth)
```

**Key Principle:** The axes that produce the RICHEST tension are those whose demands OPPOSE the system's personality:

- **RECONCILE** (challenge vs assert) — richest, highest potential
- **NAVIGATE** (choice vs hierarchy) — complex topology vs decisive ranking
- **EVALUATE** (equanimity vs opinion) — judgment requires holding equal, system is opinionated
- **DISCOVER** (withholding vs directness) — genuinely oppositional structural demands
- **FEEL** (warmth vs edges) — classic, always available

---

### Phase 2: Tension Derivation (30 minutes)

**Purpose:** Identify genuine tensions between reader needs (Side A) and system constraints (Side B). Select the richest tension to resolve.

**Agent Actions:**

1. **For each high-yield axis from Phase 1:**

   **A. List Side A's demands** (what the content wants):
   - Emotional/experiential needs
   - Structural properties

   **B. List Side B's constraints** (what the system gives):
   - **Geometry:** `border-radius: 0`, `box-shadow: none`, `filter: drop-shadow()` NEVER
   - **Palette:** Warm cream background, near-black text, Sanrok red accent, narrow palette
   - **Typography:** Instrument Serif (authority) / Inter (clarity) / JetBrains Mono (precision)
   - **Borders:** 3 categories only (3-4px structural, 1px separator, NEVER 2px)
   - **Spacing:** Mathematical scale 4-80px
   - **Personality:** 75% austere, 95% angular, 85% serious, 100% geometric, 70% sparse

   **C. Identify genuine opposition:**
   - Semantic opposition: Sides are emotionally opposed at the level of MEANING
   - Vocabulary gap: System has no direct tool for the need
   - Structural overlap: Despite opposition, sides share structural properties (this makes a bridge POSSIBLE)

   **D. Apply the Addition Test:**
   - Can assembly fulfill the need? → COSMETIC
   - Does transformation require metaphor? → GENUINE

   **E. Apply the BECAUSE Test:**
   - "The reader needs X BECAUSE [specific content property]"
   - Cannot complete with content property? → Manufactured need, COSMETIC

2. **Score each genuine tension on richness formula:**
   - Opposition Depth (1-3)
   - Structural Overlap (1-3)
   - Metaphor Space Width (1-3)
   - Richness = product (1-27)

3. **Select the highest-richness tension** to resolve in Phase 3

**Output:** Tension table + selected tension

**Example:**
```
AXIS: FEEL
Side A (Reader Needs): Warmth, safety, containment, graduated trust
Side B (System Constraints): Angularity (border-radius: 0), Flatness (box-shadow: none), Austerity (restrained palette), Decisiveness (sharp edges)
Opposition: Warmth vs. Austerity — SEMANTIC OPPOSITION
Vocabulary Gap: System has no "warm" component
Structural Overlap: BOTH share containment (borders), ordering (sequence), stratification (layers)
Addition Test: NO (warmth cannot be achieved by placing existing components)
BECAUSE Test: "Reader needs warmth BECAUSE content is philosophical and mentorship-oriented" ✓
Richness: Opposition 3 × Overlap 2 × Width 3 = 18

SELECTED TENSION: FEEL (warmth vs. austerity, richness 18)
```

**[GATE] Tension Threshold:**
- Genuine tension count = 0 → Zero-tension path (skip Phases 3-4, apply design system defaults)
- All tensions COSMETIC → Cosmetic path (skip Phase 3, Phase 4 uses direct component mapping)
- At least 1 GENUINE tension → **Proceed to Phase 3**

---

### Phase 3: Metaphor Collapse (45 minutes)

**Purpose:** Find a real-world domain where the shared structural properties exist naturally, resolving the emotional opposition through structural isomorphism.

**Agent Actions:**

1. **Extract structural properties from Side A (reader needs):**
   - Transform emotional needs into geometric/topological abstractions
   - Examples: "Graduated trust" → ORDERING (sequence with rank); "Safety in uncertainty" → CONTAINMENT (bounded zones)

2. **Extract structural properties from Side B (system constraints):**
   - Transform design constraints into geometric/perceptual abstractions
   - Examples: `border-radius: 0` → ANGULARITY; `box-shadow: none` → FLATNESS; Border categories → DISCRETE WEIGHT

3. **Find the structural overlap:**
   - Compare Side A's list with Side B's list
   - Calculate overlap percentage: `shared properties / total unique properties`
   - **40-70% = IDEAL ZONE** (strong metaphor potential)

4. **Generate the search query:**
   - Combine overlap and gap properties into a constrained search:
   - > "What real-world domain naturally exhibits [OVERLAP PROPERTIES] while being [SIDE B GAP PROPERTIES] yet conveying [SIDE A GAP PROPERTIES]?"

5. **Apply search heuristics:**
   - **Constraint scan**: Start with HARDEST constraint (for KortAI, ANGULARITY eliminates organic/biological, liquid/fluid, atmospheric, textile, botanical)
   - **Content resonance**: What is the content LITERALLY about? (content often contains the metaphor's seed)
   - **Emotional valence**: Side A's emotion eliminates domains with wrong valence (warmth/safety eliminates military, medical, judicial)

6. **Scan the Domain Search Menu:**
   - Geological/Sedimentary: Angular, layered, ordered, compressed
   - Architectural/Structural: Angular, precise, load-bearing, zoned
   - Typographic/Editorial: Angular (grid), precise, hierarchical
   - Cartographic/Territorial: Angular (grid), flat (2D), bounded
   - Industrial/Mechanical: Angular, precise, toleranced, assembled
   - Scientific/Laboratory: Precise, institutional, measured, observed
   - Legal/Contractual: Formal, precise, structured, authoritative
   - Archival/Catalogic: Ordered, classified, preserved, indexed
   - (See skill for full menu with compatibility properties)

7. **Generate 3-5 metaphor candidates** (the domain that survives ALL THREE filters)

8. **Test each candidate on composite scoring:**

   **A. Tension Resolution:**
   - Does it resolve EVERY tension from Phase 2? YES (1) / PARTIAL (0.5) / NO (0)

   **B. Structural Isomorphism Count:**
   - Create isomorphism table: `| Metaphor Property | Content Property | System Mechanism |`
   - Count independent mappings
   - **Threshold: ≥ 4 required** (6+ = structurally isomorphic, 2-3 = thin, 0-1 = decorative REJECT)

   **C. Content Resonance (Nominal + Structural):**
   - C1 Nominal: Does content use metaphor's vocabulary? HIGH / MEDIUM / LOW
   - C2 Structural: Does metaphor's internal structure mirror content's structure? HIGH / MEDIUM / LOW
   - **Weight structural 2x higher than nominal**

   **D. Mechanism Feasibility:**
   - Can EVERY property be expressed via 6 legal channels? (background, border, typography, spacing, layout, accent)
   - Any soul violations required? → FAIL

   **E. Perceptual Risk Assessment:**

   Score each question LOW (0) / MEDIUM (0.5) / HIGH (1):

   | Risk Question | LOW Risk | HIGH Risk |
   |---|---|---|
   | **Transition model** | Changing state (deeper stratum, next room) | Empty space (breathing zones, page turns) |
   | **Expression mode** | Structural gradients (backgrounds, compression) | Textual labels ("MAIN STREET", labeled connectors) |
   | **Element variety** | Varied element sizes/shapes | Uniform grids (repeating cards) |
   | **Responsive story** | Natural degradation (narrower core = deeper bore) | Forced (tools need horizontal space) |

   **Perceptual Risk Score = sum (0-4)**
   - 0-1 = LOW RISK (proceed confidently)
   - 1.5-2 = MODERATE RISK (proceed with builder warnings)
   - 2.5-3 = HIGH RISK (rank below lower-risk candidates)
   - 3.5-4 = EXTREME RISK (consider rejection)

   **CRITICAL RULE:** Metaphor with Resolution 7/7 + Perceptual Risk HIGH ranks BELOW metaphor with Resolution 5/7 + Perceptual Risk LOW. Structural richness does NOT compensate for perceptual risk.

   **F. Perceptual Cost Assessment (Guardrail Violation Prediction):**

   For each isomorphism mapping, assess whether it encourages guardrail violations:

   | Cost Question | +1 Cost If YES |
   |---|---|
   | Compression below floors (padding <32px or compression ratio >2.5:1)? | +1 |
   | Container width below 940px (65% at 1440px)? | +1 |
   | Uniform element grids (4+ identical items, no hierarchy)? | +1 |
   | Transitions as empty space (vertical gaps vs state changes)? | +1 |
   | Explicit labels over structure (metaphor vocabulary in visible text)? | +1 |

   **Perceptual Cost Score = sum (0-5+)**
   - 0 = LOW COST (proceed as designed)
   - 1-2 = MODERATE COST (add specific builder warnings)
   - 3+ = HIGH COST (consider alternative OR modify isomorphism mapping)

9. **Composite Verdict:**
   - **PROCEED**: Resolution ≥ N-1, Isomorphism ≥ 4, Structural Resonance ≥ MEDIUM, Feasibility = 100%, Perceptual Risk ≤ 2
   - **CONSIDER**: Resolution ≥ N-2, Isomorphism ≥ 3, Structural Resonance ≥ LOW, Feasibility ≥ 80%, Perceptual Risk ≤ 3
   - **REJECT**: Any other combination OR Perceptual Risk = 4

10. **Select the winning metaphor** (best composite score)

**Output:** Metaphor selection + isomorphism table + perceptual risk score + perceptual cost score + builder warnings

**Example:**
```
CANDIDATE: Geological Strata (sedimentary layers)

A. Tension Resolution: 1/1 (warmth vs. austerity resolves — "bedrock" communicates safety despite angular rock faces)

B. Structural Isomorphism Count: 6
| Metaphor Property | Content Property | System Mechanism |
| Sedimentary layers | Confidence levels | Border-weight gradient (4px topsoil → 1px bedrock) |
| Depth compression | Progressive density | Padding compression (80px surface → 32px bedrock) |
| Stratigraphic order | Fundamental→Detail | Vertical DOM order + background darkening |
| Angular rock faces | Decisive language | border-radius: 0 + sharp borders |
| Geological containment | Safe exploration | Bordered container with visible edges |
| Earth tone palette | Warmth | Sandstone (#F0EBE3), clay (#E8E4DF) backgrounds |

C. Content Resonance:
- C1 Nominal: HIGH (content uses "foundations," "layers," "depth")
- C2 Structural: HIGH (layered certainty mirrors geological stratification)

D. Mechanism Feasibility: 100% (all expressible via background, border, spacing, typography)

E. Perceptual Risk Assessment:
- Transition model: Changing state (deeper stratum) → LOW (0)
- Expression mode: Structural (graduated backgrounds) → LOW (0)
- Element variety: Varied (different sections, different depths) → LOW (0)
- Responsive story: Natural (narrower core sample) → LOW (0)
Perceptual Risk: 0 (LOW) ✓

F. Perceptual Cost Assessment:
- Compression below floors? If bedrock goes to 16px → +1
- Container width below 940px? Cylindrical shape → +1
- Uniform grids? 2-column acceptable → 0
- Transitions as empty space? Layers are state changes → 0
- Explicit labels? Depth shown structurally → 0
Perceptual Cost: 2 (MODERATE)

Builder Warnings:
- Cap minimum container width at 940px (use internal padding rather than narrow width for cylindrical metaphor)
- Cap minimum padding at 32px even at bedrock (use background darkening to signal depth)

VERDICT: PROCEED
```

---

### Phase 3.5F: Perceptual Cost Scoring (NEW — added during skill enrichment)

This sub-phase was added during the 13th agent team's skill enrichment research. It prevents metaphors from encoding spatial biases (e.g., cylindrical shapes → narrow containers) as CSS values that violate perceptual guardrails.

**Key Insight:** "The metaphor shapes experience; the guardrails prevent it from breaking experience."

Perceptual Cost Assessment (described in Phase 3 Step 8F above) is now MANDATORY before final metaphor selection. It complements Perceptual Risk Assessment:

- **Perceptual Risk** measures execution-layer problems (dead zones, over-labeling, monotony)
- **Perceptual Cost** measures guardrail violations the metaphor's CONCEPT encourages

Both inform the final ranking. A metaphor with LOW Risk + HIGH Cost means "conceptually problematic but could execute well if warnings are followed." A metaphor with HIGH Risk + LOW Cost means "conceptually sound but execution-fragile."

---

### Phase 4: Compositional Layout Generation (35 minutes)

**Purpose:** Translate the metaphor into concrete CSS/HTML mechanisms using the design system's vocabulary.

**Agent Actions:**

1. **Phase 4.0: Perceptual Guardrails (Non-Negotiable Minimums):**

   Before generating ANY CSS/HTML, verify ALL metaphors pass these perceptual floors:

   | Guardrail | Value | Rationale |
   |-----------|-------|-----------|
   | Min content-to-viewport ratio (1440px) | **65%** (940px) | Below = narrow strip lost in margins |
   | Min horizontal padding (outer) | **32px per side** | Absolute floor even at maximum compression |
   | Min label-to-heading gap | **16px** | Different font family + size + case = triple shift needs buffer |
   | Min section breathing zone | **48px** | Between major sections |
   | Min body line-height | **1.5** | WCAG 2.1 SC 1.4.12 accessibility floor |
   | Compression ratio ceiling | **Deepest ≥ 40% of shallowest** | If topsoil = 80px, bedrock cannot go below 32px |
   | Characters per line | **45-80** | Below 45 = excessive ragging; above 80 = WCAG fail |

   **CRITICAL PRINCIPLE:** These floors define the safe zone within which metaphors may operate. What the metaphor determines is WHERE in this range to operate (tight geological metaphors aim for minimums; spacious gallery metaphors aim for maximums). What the metaphor may NOT do is push any value below these absolute minimums.

   **Priority Order When Metaphor Conflicts with Guardrails:**
   1. Readability floors (line-height 1.5, CPL max 80, container min 940px) — NEVER compromise
   2. Breathing zones (section spacing min 48px) — NEVER compromise
   3. Content width (min 65% of viewport) — NEVER compromise
   4. Metaphor fidelity — Adjust to meet floors
   5. Aesthetic preference — Last priority

2. **Extract metaphor physical properties (5-category taxonomy):**

   **A. Spatial:** Where things are, how they relate in space
   **B. Temporal:** Sequence, rhythm, progression
   **C. Material:** Texture, weight, substance
   **D. Behavioral:** Movement, transformation
   **E. Relational:** How parts connect

   For each category, identify properties and map to CSS mechanisms.

3. **Translation grammar (property → CSS):**

   Map each metaphor property to specific CSS through 6 legal channels:
   - **Background color** (from locked zone palette)
   - **Border** (3 categories: 3-4px structural, 1px separator, NEVER 2px)
   - **Typography** (3 fonts: Instrument Serif / Inter / JetBrains Mono, 6 sizes)
   - **Spacing** (mathematical scale 4-80px)
   - **Layout** (flexbox sequential, grid parallel)
   - **Color accent** (primary red for structural, 5 accent colors for callout borders)

4. **Coherence checking (5 rules):**

   **C-1:** Density direction must be consistent across ALL channels
   **C-2:** Transition strength must match axis distance
   **C-3:** Typography role must match content authority
   **C-4:** Border category must match containment intent
   **C-5:** Accent color must match semantic role

5. **Component inventory (Tier 2 vs Tier 3):**

   **Tier 2 (from library, frozen):**
   - Quote Callout, Info/Tip/Gotcha/Essence Callouts, Code Snippet, Key Principle, Anti-Pattern

   **Tier 3 (compositional, metaphor-specific):**
   - `.stratum` wrapper (each layer: topsoil, subsoil, sediment, bedrock)
   - `.stratum-heading` (depth indicator)
   - Zone wrappers and spatial metaphor CSS

6. **Adapt vs. invent decision:**
   - Can existing Tier 2 component be ADAPTED? (modifier class, accent color, spacing adjustment) → DO NOT invent
   - Can property be expressed through LAYOUT alone? (grid, gap, background zones) → DO NOT invent component
   - Is property actually NECESSARY? → If not, let metaphor be implicit
   - Only if ALL THREE are "no" → invent new Tier 3 component

7. **Transition grammar:**
   - Apply axis transition types from 5×5 matrix (SMOOTH / BRIDGE / BREATHING)

8. **Fractal consistency check:**
   - Verify metaphor pattern appears at 5 scales: Navigation / Page / Section / Component / Character

9. **Pacing prediction:**
   - Section count: 3-6 = GOOD, 7-10 = RISK, 11+ = HIGH RISK
   - Breathing zone model: CHANGING STATE (good) vs EMPTY SPACE (bad)
   - Element uniformity: VARIED (good) vs UNIFORM (bad)
   - Dramatic moment: Place at 60-80% of page height
   - Transition model: Background shifts (good) vs Labeled connectors (bad)

**Output:** Compositional layout specification (CSS + HTML structure + Tier 3 component CSS)

**Example:**
```css
/* TIER 3 (pipeline-generated — fresh per metaphor) */
.stratum--topsoil {
  background: #FEF9F5; /* warmest, lightest */
  padding: 80px 48px; /* generous */
  border-left: 4px solid var(--color-border); /* established confidence */
}

.stratum--subsoil {
  background: #F0EBE3; /* sandstone */
  padding: 64px 48px;
  border-left: 3px solid var(--color-border); /* solid confidence */
}

.stratum--bedrock {
  background: #1A1A1A; /* dark, highest density */
  color: #FEF9F5; /* inverted */
  padding: 32px 48px; /* minimum (40% of topsoil) */
  border-left: 1px solid rgba(255, 255, 255, 0.2); /* detail level */
}

/* TIER 2 components consumed within Tier 3 context */
.stratum--bedrock .quote-callout {
  --quote-padding: 16px 24px;
  --quote-bg: transparent;
  color: #FEF9F5; /* inverted for dark background */
}
```

---

### Phase 5: Output (10 minutes)

**Agent Actions:**

1. **Generate Output A: Thought Process Document**
   - Content assessment (Phase 0 classification)
   - Multi-axis questioning results (all axes with yield ratings)
   - Tension derivation (all axis tensions with richness scores)
   - Selected tension and why (Addition Test, BECAUSE Test, richness formula)
   - Metaphor candidates + composite scores + winner (isomorphism table)
   - Property-to-mechanism translation table (5-category extraction)
   - Coherence check results
   - Invented components and justification
   - Fractal consistency verification

2. **Generate Output B: HTML Compositional Layout**
   - Complete, self-contained HTML file
   - Uses ONLY KortAI design system CSS (no soul violations)
   - Implements metaphor through concrete mechanisms
   - Contains actual or representative content
   - Includes `<style>` block with all CSS inline (single-file)
   - References Tier 2 library components
   - Defines Tier 3 zone wrappers and spatial metaphor CSS

**Output:** Thought process document + HTML compositional layout

---

## Skill Integration with Component Library

The tension-composition pipeline does NOT work in isolation — it CONSUMES the component library extracted in Phase C and GENERATES compositional strategies that sit atop it.

### The Two-Layer Model

```
┌──────────────────────────────────────────────────────────┐
│ TIER 3: Compositional (Pipeline-Generated, Fresh per Page)│
│ - Zone wrappers (.stratum, .hub, .elevation-zone)        │
│ - Spatial metaphor CSS (background progression, etc.)     │
│ - CSS custom property overrides for Tier 2 adaptation    │
└──────────────────────────────────────────────────────────┘
                        ↓ sets custom properties
┌──────────────────────────────────────────────────────────┐
│ TIER 2: Component Library (Extracted, Frozen)            │
│ - Callouts (Quote, Info, Tip, Gotcha, Essence)           │
│ - Code Snippet, File Tree, Decision Matrix               │
│ - Task Component, Header, Footer, Table                  │
│ - Exposes CSS custom properties for adaptation           │
└──────────────────────────────────────────────────────────┘
                        ↓ uses
┌──────────────────────────────────────────────────────────┐
│ TIER 1: Tokens (Extracted, Frozen)                       │
│ - Colors, typography, spacing, borders                   │
│ - Soul compliance baked in (border-radius: 0, etc.)      │
└──────────────────────────────────────────────────────────┘
```

### CSS Custom Properties Bridge the Layers

**Tier 2 components expose custom properties for context adaptation:**

```css
/* FROM LIBRARY (Tier 2, frozen) */
.quote-callout {
  border-left: 4px solid var(--accent-purple);
  padding: var(--quote-padding, 20px 24px); /* default with fallback */
  background: var(--quote-bg, transparent); /* default with fallback */
  font-family: var(--font-display);
  font-style: italic;
}
```

**Pipeline generates Tier 3 zone wrappers that SET custom properties:**

```css
/* FROM PIPELINE (Tier 3, generated) */
.stratum--compressed .quote-callout {
  --quote-padding: 16px 24px; /* override for deeper strata */
  --quote-bg: var(--strata-sediment-1); /* earth tone background */
}
```

This layering allows:
- **Tier 2 components** to maintain structural integrity (border, font, layout)
- **Tier 3 compositions** to adapt components to metaphor context (padding, background, color)
- **Soul compliance** to remain locked at Tier 1 (border-radius: 0 never changes)

### The Pipeline's Relationship to the Library

**What the library provides:**
- ~400 lines of frozen CSS (Tier 1 + Tier 2)
- Component structure (HTML patterns, semantic class names)
- Soul compliance (border-radius: 0, box-shadow: none, correct fonts)
- CSS custom properties for adaptation

**What the pipeline generates:**
- ~200-300 lines of fresh CSS per page (Tier 3)
- Zone wrappers (`.stratum`, `.hub`, `.elevation-zone`)
- Background progression (earth tones, gradients)
- Padding compression (spatial choreography)
- Custom property overrides (adapting Tier 2 to Tier 3 context)

**What the pipeline does NOT generate:**
- Tier 2 components (these are CONSUMED from library)
- Tier 1 tokens (these are LOCKED)
- Soul compliance (this is INHERITED)

### Concrete Example: Geological Metaphor

**TIER 2 (from library):**
```css
.quote-callout {
  border-left: 4px solid var(--accent-purple);
  padding: var(--quote-padding, 20px 24px);
  background: var(--quote-bg, transparent);
  font-family: 'Instrument Serif', serif;
  font-style: italic;
}
```

**TIER 3 (pipeline-generated):**
```css
.stratum {
  /* Zone wrapper with earth tone progression */
}

.stratum--topsoil {
  background: #FEF9F5; /* warmest, lightest */
  padding: 80px 48px; /* generous */
}

.stratum--subsoil {
  background: #F0EBE3; /* sandstone */
  padding: 64px 48px;
}

.stratum--bedrock {
  background: #1A1A1A; /* dark, highest density */
  color: #FEF9F5; /* inverted */
  padding: 32px 48px; /* minimum (40% of topsoil) */
}

/* Adapt Tier 2 callouts within Tier 3 context */
.stratum--topsoil .quote-callout {
  --quote-padding: 24px;
  --quote-bg: transparent; /* let topsoil background show */
}

.stratum--bedrock .quote-callout {
  --quote-padding: 16px 24px;
  --quote-bg: transparent;
  color: #FEF9F5; /* inverted for dark background */
  border-left-color: rgba(255, 255, 255, 0.3); /* lighter border */
}
```

**HTML:**
```html
<div class="core-sample" style="max-width: 940px;">
  <div class="stratum stratum--topsoil">
    <h2 class="stratum-heading">Fundamentals</h2>
    <!-- Tier 2 component consumed here -->
    <blockquote class="quote-callout">Boris quote</blockquote>
    <div class="key-principle">Principle 1</div>
  </div>

  <div class="stratum stratum--subsoil">
    <h2 class="stratum-heading">Techniques</h2>
    <!-- More Tier 2 components -->
  </div>

  <div class="stratum stratum--bedrock">
    <h2 class="stratum-heading">Philosophy</h2>
    <!-- Densest content, darkest background -->
  </div>
</div>
```

---

## Builder Warnings and Guardrails

During skill enrichment (13th agent team), the perceptual-auditing and tension-composition skills gained 8 shared guardrails and a system of builder warnings. These prevent metaphor-driven visual compromise.

### The 8 Quantitative Guardrails

| Guardrail | Minimum | Optimal | Maximum | Prevents |
|-----------|---------|---------|---------|----------|
| **Content-to-viewport ratio** (1440px) | 44% (640px) | 65-80% (940-1150px) | 89% (1280px) | Narrow strip, edge-to-edge |
| **Characters per line** | 45 | 60-66 | 80 (WCAG) | Reading fatigue, line loss |
| **Content container width** (1440px) | 640px | 700-960px | 1280px | Over-compression, wasted space |
| **Label-to-heading gap** | 8px | 12-16px | 24px | Label-heading collision |
| **Section vertical spacing** | 48px | 60-80px | 160px | Sections running together, dead zones |
| **Horizontal padding (desktop)** | 32px | 40-64px | 80px | Edge collision at 1440px |
| **Padding compression ratio** | 40% | 50-60% | 100% | Deepest section crushed (deepest ≥ 40% of shallowest) |
| **Body line-height** | 1.4 (floor) | 1.5-1.6 | 1.8 | Reading discomfort, collision |

### Two-Layer Enforcement Strategy

**Phase 4.0 (Build Time):**
- Guardrails enforced DURING CSS generation (not after)
- If metaphor logic demands values below floors, modify metaphor expression, NOT the floors
- Example: Geological "cylindrical core" uses internal padding rather than narrow width to avoid violating 940px minimum

**Phase 5 (Audit Time):**
- Perceptual-auditing skill VERIFIES guardrails with programmatic checks + visual inspection
- Any violations = FAIL verdict, return to Phase 4 (NOT Phase 3 unless metaphor fundamentally incompatible)

### Builder Warnings (W-*)

The tension-composition skill appends relevant builder warnings to Phase 3 output based on perceptual risk + cost assessment:

| Warning ID | Condition | Mitigation |
|-----------|-----------|------------|
| **W-DEADZONE** | Transition model = empty space | Use CHANGING STATE (background shift, density change) not vertical gaps |
| **W-OVERLABEL** | Expression mode = textual labels | Make metaphor IMPLICIT (structural gradients) not EXPLICIT (labeled connectors) |
| **W-MONOTONY** | Element variety = uniform | Introduce deliberate variation (alternate full-width/inset, group with breaks, scale by importance) |
| **W-COMPRESSION** | Compression ratio > 2.5:1 | Cap deepest padding at 40% of shalloest (80px topsoil → 32px bedrock minimum) |
| **W-RESPONSIVE** | Responsive story = moderate+ risk | Specify breakpoint mitigation strategy (narrower core at 768px, columns collapse, etc.) |
| **W-STATS** | Metaphor includes metadata strip | Stats bar weakness at 768px — test early |
| **W-IMPLICIT** | Always appended | Best layouts FEEL the metaphor structurally, don't READ about it in labels |

### Guardrail Priority Order

When metaphor conflicts with guardrails:

1. **Readability floors** (line-height 1.5, CPL max 80, container min 940px) — **NEVER compromise**
2. **Breathing zones** (section spacing min 48px) — **NEVER compromise**
3. **Content width** (min 65% of viewport) — **NEVER compromise**
4. **Metaphor fidelity** — Adjust to meet floors
5. **Aesthetic preference** — Last priority

**Core Principle:** "The metaphor shapes experience; the guardrails prevent it from breaking experience."

---

## Track 2 Quality Lessons

The 11th agent team's tension-test (15 HTML layouts across 3 content sets) and 12th agent team's post-fix synthesis produced critical learnings about Track 2 quality.

### Pipeline Predicts RICHNESS Not QUALITY

**The Problem:**
- Richness formula (Opposition × Overlap × Width) correctly identifies which TENSIONS are worth resolving
- But richness score has ~0 correlation with visual quality
- A 27-richness tension can produce monotonous grids; a 12-richness tension can produce the best layout

**The Solution (R5 Improvement):**
- Use richness to select TENSIONS (Phase 2) ✓
- Do NOT use richness to select METAPHORS (Phase 3) ✗
- Perceptual Risk Assessment (Phase 3.5E) overrides richness when selecting metaphors

**Test Data Evidence:**
- Playbook BECOME+RECONCILE: richness 27 → Apprenticeship Workshop → 7/7 resolution, monotonous grid, would-not-ship
- Playbook UNDERSTAND: richness 12 → Elevation Map → 3.5/7 resolution, best visual outcome, top 3
- Pipeline disagreed with auditors on ALL 3 top picks — all 3 had IMPLICIT metaphors + LOW perceptual risk

### IMPLICIT > EXPLICIT Metaphors

**Key Insight:** The best layouts FEEL the metaphor structurally, don't READ about it in labels.

**Top 3 Layouts (all Track 2 with implicit metaphors):**
1. Playbook Elevation Map: Color gradient + spatial hierarchy = feel the climb, no "BASE CAMP" labels
2. Gas Town Floor Plan: Bordered rooms + nested containment = feel the architecture, no "ROOM A" labels
3. Boris Geological Core: Earth tone progression + compression = feel the depth, no "STRATUM 1" labels

**Would-Not-Ship Layouts (explicit metaphors):**
- Workshop Apprenticeship: Labeled tool stations ("NOVICE BENCH", "JOURNEYMAN AREA")
- Gas Town Refinery: Process flow arrows + stage labels ("INTAKE", "PROCESSING", "OUTPUT")
- Both had HIGH perceptual risk (expression mode = textual labels)

**Perceptual Risk Question:**
> "Does this metaphor rely on STRUCTURAL GRADIENTS or TEXTUAL LABELS to communicate?"

**Guideline:** If removing all metaphor labels breaks the composition, the metaphor is too explicit.

### Perceptual Risk Assessment is MANDATORY

**Pre-enrichment (no perceptual risk assessment):**
- 15 layouts tested: 2 would-not-ship, 3 looks-wrong, 5 could-be-better, 5 YES
- Common failures: Dead zones (empty space transitions), over-labeling (announced metaphors), monotony (uniform grids)

**Post-enrichment (with perceptual risk + guardrails):**
- 6 layouts rebuilt: 5 YES, 1 YES WITH RESERVATIONS, 0 regressions, 0 soul violations
- All guardrails met, all metaphors preserved
- Top 3 unchanged (all had LOW perceptual risk from the start)

**The 4 Perceptual Risk Questions:**
1. Transition model: CHANGING STATE (low risk) vs EMPTY SPACE (high risk)
2. Expression mode: STRUCTURAL (low risk) vs TEXTUAL (high risk)
3. Element variety: VARIED (low risk) vs UNIFORM (high risk)
4. Responsive story: NATURAL (low risk) vs FORCED (high risk)

**Critical Rule:** A metaphor with Resolution 7/7 + Perceptual Risk HIGH ranks BELOW a metaphor with Resolution 5/7 + Perceptual Risk LOW.

### Guardrails Caught All "Would-Not-Ship" Issues

**Systemic findings from pre-enrichment test:**
- Playbook dead zone epidemic: Empty space transitions (violates 48px breathing maximum)
- Stats bar weakness at 768px: Horizontal overflow (violates 45 CPL minimum)
- Cylindrical shapes → narrow containers (violates 940px minimum)
- Compression extremes (80px → 16px = 20% ratio, violates 40% minimum)

**Post-enrichment guardrails:**
- 940px min container (65% viewport)
- 32px padding floor
- 16px label-to-heading gap
- 40% compression ratio
- 48px section breathing (MAXIMUM for transitions)

All post-enrichment layouts passed guardrails → all were shippable.

---

## The Track Classification Decision

### Should Phases 0-2 Run for ALL Pages?

**Current debate:** Should the pipeline's tension-derivation phases (0-2) run for EVERY page to let the Addition Test classify Track 1 vs Track 2? Or should human judgment pre-classify?

**Arguments FOR running Phases 0-2 universally:**

1. **The pipeline's gate is more rigorous than human judgment**
   - Addition Test ("Can you fulfill the need by assembly?") is precise
   - BECAUSE Test ("needs X BECAUSE [content property]") catches manufactured needs
   - Richness formula (≥8 threshold) prevents borderline cases from wasting Track 2 time

2. **False negatives are expensive**
   - A page NEEDS metaphor but gets mechanical assembly → perceptual audit catches it, forces re-migration
   - Cost: ~90 min Track 1 build + ~18 min audit + ~150 min Track 2 rebuild = 258 min total
   - Versus: ~35 min Phases 0-2 classification upfront

3. **Human classification is unreliable for borderline cases**
   - "Tutorial with light narrative framing" — Track 1 or Track 2?
   - "Configuration guide with philosophical motivation" — Track 1 or Track 2?
   - Addition Test gives binary answer

**Arguments AGAINST running Phases 0-2 universally:**

1. **Cost implications**
   - 75 pages × 35 min Phases 0-2 = 2,625 min (43.75 hours) just for classification
   - If 50% are obvious Track 1 (tutorial, reference, Q&A), that's ~22 hours wasted

2. **Fast-path heuristic can catch obvious Track 1**
   - Content type = tutorial/reference/Q&A with clean step sequences → Track 1
   - Addition Test obviously passes ("can Task components fulfill need?") → Track 1
   - Run full Phases 0-2 only for ambiguous pages

**Proposed Solution (from 01-skill-integration-map.md):**

Fast-path classification for obvious Track 1 pages:
- If content type maps cleanly to pattern (tutorial → CRESCENDO, reference → ISLANDS, Q&A → PULSE)
- AND Addition Test obviously passes
- → Skip full tension analysis, classify as Track 1

Full Phases 0-2 for ambiguous pages:
- If content type is hybrid/conceptual/philosophical
- OR Addition Test is uncertain
- → Run full multi-axis questioning + tension derivation

**Expected Distribution:**
- ~30-40 pages: Fast-path Track 1 (15 min analysis, skip Phases 0-2)
- ~35-45 pages: Full Phases 0-2 analysis → Track 2 classification
- Total Phase B time: ~4-6 hours (reduced from potential 43 hours)

### The "Track 1.5" Question

**Problem:** Some content falls between pure assembly and full composition.

**Examples:**
- Deep technical explanations with light narrative framing
- Comparison guides with embedded philosophy
- API reference with pedagogical intent

**These may need:**
- Track 1 component assembly (deterministic pattern selection)
- PLUS Track 2 spatial choreography (deliberate pacing, dramatic placement, breathing zones)
- WITHOUT full metaphor derivation

**Proposed Treatment:**
- Phases 0-2 classify as Track 1 (genuine tension count = 0 OR all tensions cosmetic)
- But Phase 3 applies PATTERN COMPOSITION (not mechanical assembly):
  - Apply R5 combination rules deliberately
  - Use transition grammar intentionally (SMOOTH/BRIDGE/BREATHING)
  - Introduce deliberate pacing variation
  - Place dramatic moments at 60-80% scroll
- Phase 4 builds using Tier 2 library ONLY (no Tier 3 generation)
- Duration: ~2 hours (between Track 1's 90 min and Track 2's 4-5 hours)

**This creates three execution tracks:**
- **Track 1 (Assembly):** Mechanical component selection, deterministic composition, ~90 min
- **Track 1.5 (Choreographed Assembly):** Deliberate pattern composition, no metaphor derivation, ~2 hours
- **Track 2 (Composition):** Full tension-composition pipeline, metaphor-driven, ~4-5 hours

---

## Open Questions

### Q1: Can agents invoke `/tension-composition` mid-pipeline?

**Current assumption:** Migration agent in Phase 3 calls `/tension-composition [content]` and receives output.

**Unknown:**
- Does skill invocation block until complete?
- Can agent provide partial input (e.g., Tension Table from Phase 2)?
- Does skill maintain session state across phases?

**If YES (agents can invoke):**
- Phase 3 becomes a skill invocation gate (simple orchestration)
- Agent: `Skill({ skill: "tension-composition", args: "content-path" })`
- Skill returns: Thought Process Document + HTML Layout

**If NO (only user can invoke):**
- Phase 3 must INLINE the entire tension-composition protocol (~800 lines)
- Agent: `Read("~/.claude/skills/tension-composition/SKILL.md")`
- Agent executes Phases 0-5 following skill protocol

**Impact:** Mitigation B (inline) increases Phase 3 spec size significantly but is feasible.

### Q2: Should Phases 0-2 run for EVERY page or only ambiguous ones?

**Proposal:** Fast-path classification for obvious Track 1, full Phases 0-2 for ambiguous.

**Needs validation during Phase B Content Analysis.**

**The ACTUAL split determines timeline:**
- 40% Track 2 = ~105 hours
- 50% Track 2 = ~140 hours
- 60% Track 2 = ~175 hours

### Q3: How do we handle the Track 2 bottleneck?

**Options:**

**A. Accept 2-3x timeline expansion**
- Migration is a ONE-TIME project
- Quality > speed
- 80-160 hours over 2-3 weeks is acceptable

**B. Weaver reuses metaphor strategies**
- First Track 2 page with geological metaphor: 5 hours (cold start)
- Second Track 2 page with SAME tension: 3 hours (reuse metaphor, adapt to content)
- By page 10: ~2.5 hours (metaphor library is rich)

**C. Identify "Track 1.5" pages**
- Borderline pages get LIGHT tension treatment
- Deliberate spatial choreography WITHOUT full metaphor derivation
- ~2 hours per page (middle ground)

**D. Parallel Track 2 with 2-3 concurrent creative agents**
- Risk: Creative capacity may not parallelize well
- Test during Phase F (Pilot Migration) with 2 Track 2 pages simultaneously

### Q4: What model tier required for Track 2?

**Impact assessor suggests:**
- **Opus 4.6** for Track 2 creative work (metaphor collapse requires associative search + composite scoring)
- **Sonnet 4.5** for Track 1 assembly (mechanical rule application)

**Cost implications significant:**
- 35-45 Track 2 pages at Opus tier = substantial API cost
- Weaver reuse could reduce this (metaphor strategies as cached prompts)

**Test during Phase F:** Can Sonnet handle Track 2 or is quality degradation unacceptable?

### Q5: Does Track 2 percentage change with richer library?

**Current assumption:** ~50-60% of pages are Track 2.

**Alternative:** More Tier 2.5 patterns (beyond current 5) could push borderline pages from Track 2 to Track 1.

**Examples of Tier 2.5 patterns to explore:**
- Comparison Juxtaposition (side-by-side with graduated emphasis)
- Progressive Disclosure (collapsible depth layers)
- Spatial Navigation (hub-spoke with breathing zones)
- Confidence Stratification (visual weight by certainty)
- Narrative Crescendo (spatial compression by dramatic pacing)

**Worth investigating:** If extraction discovers 8-10 Tier 2.5 patterns, does Track 2 percentage drop to ~35-40%?

### Q6: Can metaphor quality improve through library compounding?

**Weaver hypothesis:** As the compositional strategy library grows (08-COMPOSITIONAL-STRATEGY-LIBRARY.md), metaphor selection becomes faster and higher quality.

**Mechanism:**
- Page 1: Pure tension analysis, constrained search, 45 min metaphor collapse
- Page 15: Tension analysis + library lookup ("warmth/austerity already resolved by geological strata on page 3"), 25 min metaphor collapse
- Page 50: Rich library, most tensions have proven resolutions, 15 min metaphor collapse

**Expected effect:**
- First 10 Track 2 pages: ~5 hours each (cold start)
- Pages 11-30: ~3.5 hours each (library warming)
- Pages 31+: ~2.5 hours each (library mature)

**Validation:** Track compounding during Phase H+I. If TRUE, timeline improves significantly.

### Q7: What happens when perceptual-auditing finds a metaphor-driven compromise?

**Scenario:**
- Track 2 page built using geological metaphor
- Perceptual-auditing PA-42: "You understand WHY it looks this way (cylindrical core sample) but it still looks WRONG (narrow container violates 940px minimum)"

**Current flow:**
- FAIL verdict → back to Phase 4 (Build)
- Builder modifies CSS to meet 940px minimum
- But now the cylindrical metaphor is broken (no longer narrow)

**Question:**
- Does this trigger return to Phase 3 (select different metaphor)?
- Or does builder modify metaphor expression (internal padding instead of narrow width)?

**Proposal:**
1. Builder FIRST attempts to modify metaphor expression within guardrails
2. If impossible, flag for human review (metaphor fundamentally incompatible with guardrails)
3. Extremely rare if Perceptual Cost Assessment (Phase 3.5F) works correctly

**Example resolution:**
- Geological core uses background darkening + internal padding compression to signal depth
- Container stays at 940px (65% viewport)
- Metaphor preserved through graduated backgrounds (topsoil #FEF9F5 → bedrock #1A1A1A)
- Cylindrical concept communicated implicitly, not through narrow width

### Q8: How do skill outputs feed the Composition Blueprint?

**Tension-composition Phase 5 outputs:**
- Thought process document (showing all 6 phases)
- HTML compositional layout (complete single-file page)

**Pipeline Phase 3 outputs:**
- Composition Blueprint (spatial sketch with spacing values)

**Unknown:**
- Does agent extract Blueprint FROM the HTML layout?
- Or does tension-composition need to output Blueprint format directly?
- Or is the HTML layout the Blueprint (agent uses it as reference during Phase 4 build)?

**Proposal:**
- Tension-composition Phase 4 already produces property extraction + translation grammar
- These ARE the Blueprint components
- Skill output includes: metaphor mechanisms table + translation grammar + guardrail compliance proof
- Agent doesn't need to parse HTML; extracts from structured skill output

---

**END TRACK 2 SUPPLEMENT**

This document provides the complete reference for Track 2 migration. Next steps:
1. Validate skill invocation mechanism (Q1)
2. Test fast-path classification during Phase B
3. Pilot 1+ Track 2 page during Phase F to validate timeline
4. Build compositional strategy library (08-COMPOSITIONAL-STRATEGY-LIBRARY.md) from proven metaphors

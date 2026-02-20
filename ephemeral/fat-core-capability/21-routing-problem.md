# 21 -- The Compositional Intelligence Routing Problem

**Task:** How does the full compositional stack (5 scales, 6 channels, multi-coherence, anti-scale model, fractal self-similarity) reach the CSS-writing agent WITHOUT triggering the inverse-quality-with-input-volume problem?

**Core Tension:** TC has 1,878 lines of compositional intelligence. The builder sees ~230 lines. Adding more TEXT instructions doesn't work -- text instructions all look the same to an LLM. What STRUCTURED approaches can carry compositional intelligence in non-text form?

---

## 1. THE INTELLIGENCE STACK (What Needs Routing)

From the TC skill, mechanism catalog, and CD-006 reverse engineering, the full compositional intelligence stack has 5 layers:

### L1: Perception Thresholds (FLOOR -- prevents 1.5/4)
- Background delta >= 15 RGB between adjacent zones
- Font-size delta >= 2px between adjacent sections
- Letter-spacing delta >= 0.03em
- Stacked gap <= 108-192px
- Zone count 2-5

**Status in PV2:** ALREADY ROUTED. These are in the operational recipe and gate-runner.js. Binary, programmatic, verified automatically. This layer is solved.

### L2: Mechanism Vocabulary (FLOOR+ -- enables 2.5/4)
- 18 mechanisms across 5 categories (Spatial, Hierarchy, Component, Depth, Structure/Nav)
- Per-category minimum deployment (S:1+, H:1+, C:1+, D:1+, N:1+)
- Mechanism application modes (progressive vs discrete for border-weight, etc.)
- Translation grammar (metaphor property -> CSS expression lookup table)

**Status in PV2:** PARTIALLY ROUTED. The recipe references the mechanism catalog and routes it to the builder. But the builder gets the catalog as a reference file -- another 869 lines of text. The catalog has impact profiles, application modes, and zone mappings enriched during ceiling preparation, but these are TEXT DESCRIPTIONS. The builder must READ and INTERPRET them, which is exactly the compression problem.

### L3: Multi-Channel Coherence (CEILING -- enables 3/4)
- 3+ channels must shift simultaneously at zone boundaries
- Channels must reinforce SAME semantic direction (density direction consistent across bg, border, typography, spacing, layout, accent)
- 5 coherence rules (C-1 through C-5)
- Transition grammar (3 types: smooth/bridge/breathing) with axis-distance matching

**Status in PV2:** MINIMALLY ROUTED. The recipe mentions "coherence" in Phase 6 but provides no structured enforcement. The TC skill has the 5 coherence rules but these are in Phases 4.3-4.6 which are PLANNER-facing. The builder sees "ensure coherence" as a vague instruction. This is THE critical routing gap.

### L4: Fractal Self-Similarity (CEILING+ -- enables 3.5/4)
- Same pattern must express at multiple scales (Nav, Page, Section, Component, Character)
- Middle: 2 scales. Ceiling: 4 scales. Flagship: 5 scales.
- Pattern DIRECTION must be consistent across scales (sparse-to-dense at page scale = sparse-to-dense at component scale)

**Status in PV2:** GATE EXISTS but NOT OPERATIONALIZED. TC Phase 4.7 has the fractal consistency gate with a scale coverage table. But this is a VERIFICATION gate (check after building), not a GENERATIVE instruction (build WITH fractal awareness). The builder doesn't know HOW to express pattern at multiple scales until after it has already written CSS.

### L5: Compositional Intentionality (DESIGNED -- enables 4/4)
- Content-form resonance: layout matches content structure (Z-pattern for scanning, spiral for deepening)
- Semantic density: every CSS rule carries meaning (borders encode confidence, spacing encodes hierarchy)
- Anti-scale model: Richness = semantic density x restraint x spatial confidence
- The "Layer F gap" -- corpus's biggest blind spot

**Status in PV2:** NOT ROUTED AT ALL. This is the intentionality layer that separates COMPOSED (3/4) from DESIGNED (4/4). No part of PV2 captures it. The operational recipe cannot specify intentionality -- it's emergent from the builder's understanding of WHY each CSS choice exists. CD-006 achieved this because a single Opus agent understood the content deeply and made CSS choices that reflected that understanding.

---

## 2. THE ROUTING PROBLEM DISSECTED

The user's insight is critical: **"If it's text-based, they're just as good as any other words."**

The current pipeline compresses compositional intelligence into text instructions:
- TC: 1,878 lines of text -> planner reads -> outputs build plan (text) -> builder receives build plan (text)
- Recipe: 650 lines of text -> builder reads sequentially
- Mechanism catalog: 869 lines of text -> builder reads as reference

All of these are TEXT. To an LLM, text instructions of any kind -- whether guardrails, recipes, or compositional theory -- are processed identically. More text = more noise, not more intelligence. The inverse-quality-with-input-volume problem is real.

**The problem is not WHAT to route but HOW to route it in non-text form.**

### What "Non-Text" Means for an LLM

An LLM processes everything as text/tokens. There is no literal "non-text" channel. But there ARE structural patterns that an LLM processes DIFFERENTLY from prose:

1. **Structured data** (YAML, JSON, tables) -- parsed as schema, not read as narrative
2. **Templates with blanks** -- completion bias drives filling them, unlike prose which drives continuation
3. **Programmatic checks** -- binary pass/fail gates that the agent must satisfy
4. **Concrete examples** -- specific CSS from successful pages, processed as pattern, not instruction
5. **Self-interrogation** -- questions the agent must ANSWER about its own output
6. **Phase-locked revelation** -- giving information ONLY when the agent needs it, not upfront

---

## 3. SIX STRUCTURED APPROACHES ANALYZED

### Approach A: YAML Constraint Matrix (Programmatic Enforcement)

**The Idea:** Replace prose coherence rules with a machine-readable constraint matrix that the builder must FILL OUT and a gate-runner VALIDATES.

**Concrete Artifact:**

```yaml
# coherence-matrix.yaml -- builder fills this, gate validates it
# Every zone boundary must have >= 3 channels shifting
# All channels must shift in SAME semantic direction

boundaries:
  header_to_s1:
    chromatic:
      before: "#1A1A1A"      # REQUIRED: hex color
      after: "#FEF9F5"       # REQUIRED: hex color
      delta_rgb: null         # COMPUTED by gate runner
      direction: "lighten"    # REQUIRED: lighten|darken|neutral
    typographic:
      before: "Inter 500 0.75rem uppercase"  # REQUIRED
      after: "Inter 400 1rem normal"         # REQUIRED
      direction: "loosen"     # REQUIRED: tighten|loosen|neutral
    spatial:
      before: "padding: 24px"
      after: "padding: 32px"
      direction: "expand"     # REQUIRED: compress|expand|neutral
    structural:
      before: "border-bottom: 3px solid"
      after: "none"
      direction: "lighten"    # REQUIRED: heavier|lighten|neutral
    channel_count: null       # COMPUTED: count of non-neutral channels
    coherence: null           # COMPUTED: all directions consistent? true/false

  s1_to_s2:
    # ... same structure for every boundary
```

**Gate Runner Validation (programmatic):**
```javascript
// For each boundary:
// 1. Count channels with non-neutral direction => must be >= 3
// 2. Check all non-neutral directions align with zone semantic
//    (if zone transition is "deepen", lighten+compress+tighten all = "deepen")
// 3. Check RGB delta >= 15 on chromatic channel
// 4. Flag contradictions (one channel says "expand" while others say "compress")
```

**Strengths:**
- FORCES the builder to think about every boundary explicitly
- Programmatic validation catches incoherent boundaries
- Structured format parsed differently than prose -- completion bias fills fields
- The matrix IS the deliverable, not a description of what the deliverable should be

**Weaknesses:**
- Adds cognitive overhead -- builder must fill out a data structure IN ADDITION to writing CSS
- Doesn't solve L4/L5 (fractal, intentionality)
- May produce "fill the form correctly" compliance without compositional understanding
- A builder could fill in coherent-looking values that don't match actual CSS

**Verdict:** STRONG for L3 (multi-coherence). Addresses the biggest routing gap. The key innovation is making coherence a STRUCTURED DELIVERABLE rather than a prose instruction.

### Approach B: Self-Check Questions (Builder Interrogation)

**The Idea:** After each recipe phase, the builder must ANSWER specific compositional questions about its own output. Not "did you ensure coherence" but "what are the 3 channels that shift at the S3-S4 boundary, and what semantic direction do they share?"

**Concrete Artifact:**

```
=== PHASE 3 SELF-CHECK (after writing zone backgrounds) ===

Q1: List the hex value of EVERY zone background you wrote.
    Zone 1: ___
    Zone 2: ___
    Zone 3: ___

Q2: For each ADJACENT pair, compute the max RGB channel delta:
    Zone 1->2: R=___ G=___ B=___ Max=___
    Zone 2->3: R=___ G=___ B=___ Max=___

Q3: Is every delta >= 15? YES/NO
    If NO: Which pair fails? ___
    Fix: Change ___ to ___

=== PHASE 4 SELF-CHECK (after writing borders and dividers) ===

Q1: At the boundary between S3 and S4, list what changes:
    Background: ___ -> ___
    Border: ___ -> ___
    Typography: ___ -> ___
    Spacing: ___ -> ___
    Layout: ___ -> ___

Q2: How many channels change? ___
    If < 3: Which channel could you ADD a shift to? ___

Q3: Do all shifts point the same direction?
    (e.g., if going from "opening" to "core": darken + compress + tighten = consistent)
    Direction check: ___

=== PHASE 5 SELF-CHECK (after writing typography) ===

Q1: What is your largest heading font-size? ___px
Q2: What is your smallest meta font-size? ___px
Q3: Ratio (largest/smallest): ___
    If < 3:1: Your type scale is TOO NARROW. Widen it.

Q4: Is your COMPONENT pattern (label sparse, body dense) consistent across
    ALL components? List 3 components and their label/body sizes:
    Component 1: label=___px, body=___px
    Component 2: label=___px, body=___px
    Component 3: label=___px, body=___px

    Sparse-to-dense direction consistent? YES/NO
```

**Strengths:**
- ACTIVE engagement, not passive reading -- the builder must DO something
- Questions force attention to specific compositional properties
- Catches errors at the phase where they're introduced (not at final audit)
- Questions can escalate: Phase 3 asks about deltas, Phase 6 asks about multi-coherence
- Doesn't add text to read upfront -- questions appear ONLY when needed

**Weaknesses:**
- Risk of "answer the question correctly then ignore it" -- self-checks can become checkboxes
- Questions about the builder's OWN output require honest self-assessment
- Doesn't address L5 (intentionality) -- you can't ask "is this intentional?"
- Adding 10-15 questions per phase is 70-100 more prompts, increasing total volume

**Verdict:** STRONG for L2 and L3. The innovation is phase-locked interrogation -- questions appear at the point of decision, not upfront. Combined with Approach A, creates a powerful verification loop. But alone it's still text-based.

### Approach C: 5x6 Constraint Grid (Structured Matrix the Builder Fills)

**The Idea:** The builder fills out a 5-scale x 6-channel grid BEFORE writing CSS. This forces compositional thinking into a structured format.

**Concrete Artifact:**

```
COMPOSITIONAL GRID (fill before writing CSS)
═══════════════════════════════════════════

               | Background | Border | Typography | Spacing | Layout | Accent
═══════════════|════════════|════════|════════════|═════════|════════|═══════
NAVIGATION     |            |        |            |         |        |
(header/TOC)   |            |        |            |         |        |
───────────────|────────────|────────|────────────|─────────|────────|───────
PAGE           |            |        |            |         |        |
(zone arc)     |            |        |            |         |        |
───────────────|────────────|────────|────────────|─────────|────────|───────
SECTION        |            |        |            |         |        |
(within-zone)  |            |        |            |         |        |
───────────────|────────────|────────|────────────|─────────|────────|───────
COMPONENT      |            |        |            |         |        |
(callout etc)  |            |        |            |         |        |
───────────────|────────────|────────|────────────|─────────|────────|───────
CHARACTER      |            |        |            |         |        |
(inline/text)  |            |        |            |         |        |
═══════════════════════════════════════════

COHERENCE CHECK:
- Read each COLUMN top-to-bottom: does each channel tell a consistent story?
- Read each ROW left-to-right: does each scale use multiple channels?
- Every ROW must have >= 3 non-empty cells
- Every COLUMN must have >= 2 non-empty cells
```

**Strengths:**
- Captures L3 (coherence) AND L4 (fractal) in a SINGLE artifact
- Visual/spatial format -- the grid's SHAPE communicates what prose cannot
- Blank cells are VISIBLE gaps -- completion bias drives filling them
- Column reading = coherence check. Row reading = fractal check. Both in one matrix.
- Lightweight: ~30 cells to fill, not 869 lines to read

**Weaknesses:**
- Grid cells are small -- "tinted callout bg" is less informative than the mechanism catalog's full description
- Doesn't specify HOW to fill cells (what CSS values?)
- Risk of superficial filling -- putting "yes" in cells without actual compositional thought
- Doesn't address L5 (intentionality)

**Verdict:** ELEGANT for L3+L4 combined. The grid is the single best structural artifact for ensuring multi-scale, multi-channel composition. Its weakness is specificity -- it plans but doesn't prescribe values. Must be paired with the recipe's exact CSS values.

### Approach D: Phased Revelation (Sequential Intelligence Delivery)

**The Idea:** Instead of giving the builder 650+ lines upfront, deliver compositional requirements ONE PHASE AT A TIME. The builder never sees the full spec. Each phase arrives as a short, focused instruction set (~30-50 lines).

**Concrete Architecture:**

```
PHASE 0: Builder receives ONLY:
  - Content to build
  - Zone architecture spec (15 lines)
  - "Build the HTML skeleton. DO NOT write any CSS yet."

PHASE 2: Builder receives:
  - Zone background values (5 lines of hex codes)
  - "Apply these backgrounds. Check: can you SEE the zone shifts?"

PHASE 3: Builder receives:
  - Border system spec (10 lines)
  - "Apply borders. At each boundary, what changes?"

PHASE 4: Builder receives:
  - Typography cascade (10 lines of sizes/weights)
  - "Apply typography. Check: component label sparse, body dense?"

PHASE 5: Builder receives:
  - Coherence self-check questions (15 lines)
  - "At each boundary, list what channels shift. Fix any < 3."

PHASE 6: Builder receives:
  - Fractal grid to fill (grid from Approach C)
  - "Fill this grid. Empty cells = missing compositional dimension."
```

**Implementation:** An ORCHESTRATOR agent (the lead/build-page skill) acts as the intelligence router. It reads the full spec and delivers phase-appropriate slices to the builder. The builder never sees more than ~50 lines per phase.

**Strengths:**
- Completely eliminates the volume problem -- 30-50 lines per phase, not 650 upfront
- Builder context is FOCUSED on the current phase's decisions
- Eliminates "skip past irrelevant sections" behavior
- The orchestrator can ADAPT delivery based on builder output (if Phase 2 backgrounds are too similar, send a correction before Phase 3)
- Natural fit for the Fat Core pattern where one agent builds

**Weaknesses:**
- Requires a sophisticated orchestrator that can read builder output and route intelligence
- Multiple agent turns = more total tokens (but per-turn is lower)
- Builder loses global context -- can't see how Phase 4 typography relates to Phase 2 backgrounds
- If the orchestrator compresses poorly, same problem at one remove

**Verdict:** BEST for preventing volume overload. The key insight: the problem isn't that the builder CAN'T process compositional intelligence -- it's that 650 lines delivered simultaneously causes skimming. Sequential delivery with phase-appropriate doses solves this. But requires orchestrator sophistication.

### Approach E: Exemplar Injection (CSS Pattern Templates from CD-006)

**The Idea:** Instead of describing compositional properties in prose, show the builder CONCRETE CSS from a successful page. Not as a template to copy, but as a PATTERN to recognize.

**Concrete Artifact:**

```css
/* === EXEMPLAR: Multi-channel boundary shift (CD-006 S3->S4) === */
/* THIS IS NOT A TEMPLATE. Do NOT copy these values.
   STUDY the PATTERN: 4 channels shift simultaneously at this boundary.
   YOUR boundary must shift 3+ channels, but with YOUR values. */

/* BEFORE (Section 3 - Bento grid, breathing zone): */
.section-3 {
  background: #FAF5ED;         /* Channel 1: CHROMATIC (warm breathing) */
  padding: 48px 32px;          /* Channel 2: SPATIAL (generous) */
  /* Contains: bento-grid with 4-col repeat */  /* Channel 3: LAYOUT (grid) */
}
.section-3 h3 {
  font-size: 1.375rem;         /* Channel 4: TYPOGRAPHIC (subsection) */
  font-weight: 600;
}

/* AFTER (Section 4 - F-pattern, crescendo peak): */
.section-4 {
  background: #FFFFFF;         /* Channel 1: CHROMATIC shifts to neutral */
  padding: 32px 32px;         /* Channel 2: SPATIAL compresses */
  /* Contains: single column decision matrix */ /* Channel 3: LAYOUT shifts to column */
}
.section-4 h3 {
  font-size: 1.625rem;        /* Channel 4: TYPOGRAPHIC escalates (crescendo) */
  font-weight: 700;
}

/* PATTERN: 4 channels shift. All say "intensify" (cooler bg, tighter space,
   larger type, simpler layout). THIS is multi-coherence. */
```

**Strengths:**
- CSS is processed as CODE, not prose -- different cognitive mode
- Shows the PATTERN in its native medium (CSS), not a description of it
- The "THIS IS NOT A TEMPLATE" framing + "YOUR values" emphasis resists copying
- Concrete example worth 1000 words of coherence theory
- Builder sees what multi-coherence LOOKS LIKE in CSS, not what it's called

**Weaknesses:**
- Risk of copying despite warnings (the anti-gravity problem all over again)
- CD-006 patterns may not transfer to different content
- Limited to what CD-006 demonstrates (CD-006 doesn't have every possible pattern)
- Adding exemplars per phase increases volume (back to the original problem)

**Verdict:** POWERFUL for L3 and L5. CSS exemplars communicate compositional intelligence in code form, which LLMs process differently from prose. The key risk is template copying. Must be VERY selective -- 2-3 exemplars max, focused on BOUNDARIES not whole sections.

### Approach F: Compositional Contract (The Builder PROPOSES, Orchestrator VALIDATES)

**The Idea:** Invert the flow. Instead of the orchestrator telling the builder what to do, the builder PROPOSES its compositional plan and the orchestrator validates it against compositional criteria.

**Concrete Architecture:**

```
Step 1: Builder reads content + minimal spec (~50 lines: zones, backgrounds, font scale)

Step 2: Builder writes a COMPOSITIONAL PROPOSAL (structured):
  "I propose:
   - 3 zones with backgrounds #FEF9F5, #F5F0E8, #FAF5ED
   - Transitions: S2->S3 BRIDGE (zone shift), S5->S6 BREATHING (major pivot)
   - Typography: 48px/26px/22px/16px/14px/12px (6-level cascade)
   - Components: 2 grids (S3 bento, S5 two-column), 4 callout types
   - Fractal: page-level crescendo (sparse->dense->sparse) echoed at
     component level (sparse label -> dense body)"

Step 3: Orchestrator EVALUATES the proposal against compositional criteria:
  - Background deltas: #FEF9F5 to #F5F0E8 = R:9, G:9, B:13. Max=13. FAIL (< 15 RGB).
  - Channel count at S2->S3: chromatic+spatial+structural = 3. PASS.
  - Fractal: 2 scales (page+component). For Middle: PASS.
  - Missing: no structural channel shift at S5->S6. ADD border weight change.

  Returns: "PROPOSAL ACCEPTED WITH 2 FIXES:
    1. Increase bg delta: change Zone 2 to #F0EBE3 (delta = 18 RGB)
    2. Add border-weight shift at S5->S6 (structural channel)"

Step 4: Builder IMPLEMENTS the validated proposal.
```

**Strengths:**
- Builder generates its OWN compositional plan from content understanding (L5 intentionality)
- Orchestrator has full compositional intelligence and validates structurally
- "Propose then validate" leverages TWO INSTANCES: builder thinks freely, validator checks compositionally
- Builder isn't overloaded with spec -- it proposes from minimal context
- Validation feedback is SPECIFIC and ACTIONABLE ("change hex X to Y")

**Weaknesses:**
- Requires a very capable orchestrator (must understand compositional criteria deeply)
- Extra round-trip (proposal -> validation -> implementation) adds time
- Builder's minimal context may produce weak proposals that need heavy correction
- If orchestrator does too much correction, builder becomes a passive typist

**Verdict:** STRONGEST for L5 (intentionality). The only approach that lets the builder exercise genuine compositional judgment while still being validated. The two-instance pattern (builder proposes, orchestrator validates) is proven. The risk is that minimal-context proposals are too weak, requiring extensive orchestrator intervention.

---

## 4. THE SYNTHESIS: Layered Routing Architecture

No single approach handles all 5 layers. The solution is to COMBINE approaches, each targeted at its strongest layer:

### Layer-to-Approach Mapping

| Layer | Intelligence | Approach | Why |
|-------|-------------|----------|-----|
| L1: Perception Thresholds | Floor prevention | **Gate-runner.js** (already solved) | Programmatic, binary, automated |
| L2: Mechanism Vocabulary | Breadth deployment | **Self-check questions (B)** after each phase | Forces per-category accounting |
| L3: Multi-Coherence | Channel coordination | **YAML matrix (A) + Grid (C)** | Structured deliverable, not prose |
| L4: Fractal Self-Similarity | Scale coverage | **5x6 Grid (C)** as pre-build planning artifact | Visual format captures scale x channel |
| L5: Intentionality | Content-form resonance | **Propose-validate (F) + Exemplars (E)** | Builder exercises judgment, orchestrator validates |

### The Recommended Configuration: PHASED REVELATION WITH STRUCTURED ARTIFACTS

Combining Approaches D (phased revelation) and C (grid) and B (self-checks) and F (propose-validate):

```
ORCHESTRATOR reads full compositional spec (~1,878 TC + ~650 recipe + ~869 catalog)

PHASE 0: Orchestrator sends builder:
  - Content file
  - "Analyze this content. Propose: zone count, zone semantics, section layout shapes."
  → Builder PROPOSES (Approach F)
  → Orchestrator VALIDATES proposal against L1 thresholds

PHASE 1: Orchestrator sends builder:
  - Validated zone architecture
  - HTML skeleton spec (20 lines)
  → Builder writes HTML structure

PHASE 2-3: Orchestrator sends builder:
  - Exact zone background hex values (from validated proposal)
  - Border system spec (10 lines)
  - 1 CSS exemplar showing multi-channel boundary (Approach E)
  → Builder writes zone CSS
  → Self-check Q: "List what changes at each boundary" (Approach B)

PHASE 4-5: Orchestrator sends builder:
  - Typography cascade values
  - Component inventory
  - Self-check questions about label/body consistency
  → Builder writes typography + components

PHASE 6: Orchestrator sends builder:
  - 5x6 COMPOSITIONAL GRID to fill (Approach C)
  - "Fill this grid based on what you've written. Empty cells = gaps."
  → Builder fills grid
  → Orchestrator validates: rows >= 3 non-empty, columns >= 2 non-empty
  → If gaps: "Add [specific channel] at [specific scale]"

PHASE 7-8: Standard recipe phases (accessibility, final gate)
  → Gate-runner.js validates L1 automatically
  → PA validates perceptually
```

### Key Design Decisions

**Why phased revelation as the backbone:** It solves the volume problem. The builder never sees more than ~50 lines per phase. Total information delivered is still ~200-300 lines (less than the 650-line recipe), but SEQUENCED so each piece arrives at the point of decision.

**Why the 5x6 grid at Phase 6 (not Phase 0):** If given at Phase 0, the grid is abstract planning with no grounding. At Phase 6, the builder has ALREADY WRITTEN CSS and can fill the grid by examining its own work. Gaps become visible. This is REFLECTION, not planning -- more honest and more useful.

**Why propose-validate only at Phase 0:** The builder's most consequential decisions are zone architecture and section layout. These determine everything downstream. Letting the builder propose (from content understanding) and validating (against compositional criteria) gets the best of both worlds: builder exercises L5 intentionality, orchestrator enforces L3 coherence.

**Why CSS exemplars limited to 1-2:** More exemplars = more text = more skimming. One multi-coherence exemplar (showing 4 channels shifting at a boundary) communicates the PATTERN. The builder's job is to create its OWN version, not to copy.

**Why self-checks after (not before) writing:** Questions about your own output require honest self-assessment. Questions about hypothetical output can be answered without doing the work. Phase-locked self-checks create accountability.

---

## 5. WHAT THIS ARCHITECTURE CANNOT SOLVE

### L5 Intentionality Remains Partially Unrouted

The propose-validate loop at Phase 0 captures some intentionality (builder chooses zone semantics, layout shapes). But deep content-form resonance -- where the Z-PATTERN layout is chosen because the content has a "scan then deep-read" structure, not because the recipe says "use 2+ grid layouts" -- requires the builder to UNDERSTAND the content. No amount of structured routing replaces genuine content understanding.

**The honest answer:** L5 may require a capable model (Opus, not Sonnet) that can hold content + compositional vocabulary simultaneously. The routing architecture CLEARS THE PATH for L5 by reducing noise (phased revelation), providing vocabulary (mechanism catalog at point of need), and creating space for judgment (propose-validate). But it cannot inject intentionality mechanically.

### The CD-006 Factor

CD-006 scored 39/40 with ONE Opus agent and MINIMAL instruction. This suggests that for capable models, the compositional intelligence is LATENT -- the model already knows how to compose, it just needs the right constraints and vocabulary. The routing architecture's real job may be:

1. **Prevent bad habits** (L1 thresholds, L3 coherence gates)
2. **Provide vocabulary** (mechanism catalog, token values)
3. **Create space for judgment** (propose-validate, not prescribe-comply)
4. **Verify outcomes** (gate-runner, PA, self-checks)

Rather than INJECTING compositional intelligence into the builder, the architecture CLEARS OBSTACLES that prevent the builder's latent intelligence from expressing.

### The Sonnet vs Opus Question

If the builder is Sonnet: structured routing is ESSENTIAL because Sonnet follows instructions precisely but doesn't create beyond them. The grid, self-checks, and exemplars compensate for lower compositional capacity.

If the builder is Opus: structured routing might CONSTRAIN rather than enable. Opus with minimal instruction (CD-006 pattern) may outperform Opus with extensive structured routing.

**Implication:** The routing architecture should be TIER-GATED:
- Middle (Sonnet builder): Full structured routing (grid + self-checks + phase-locked delivery)
- Ceiling (Opus builder): Propose-validate + minimal constraint (grid as verification, not planning)
- Flagship (Opus builder): Propose-validate only + multiple revision passes + PA feedback loop

---

## 6. CONCRETE DELIVERABLES FOR PV2

### New File: `compositional-grid-template.md` (~40 lines)
The blank 5x6 grid with instructions. Referenced by the recipe at Phase 6.

### New Recipe Section: Phase Self-Checks (~60 lines total across phases)
5-6 self-check questions per phase, embedded in the recipe at phase boundaries.

### Orchestrator Enhancement: Validation Logic (~80 lines in build-page SKILL.md)
Proposal validation against coherence criteria at Phase 0. Grid validation at Phase 6. RGB delta computation.

### New File: `boundary-exemplar.css` (~30 lines)
One annotated CSS exemplar showing a 4-channel boundary shift from CD-006. Referenced by the recipe at Phase 2-3.

### Total New Content: ~210 lines across 4 locations
This is LESS than the current 650-line recipe. The reduction comes from eliminating redundant prose and replacing it with structured artifacts.

---

## 7. THE META-QUESTION: DOES MORE ROUTING PRODUCE BETTER OUTPUT?

This analysis proposes a layered routing architecture. But the user's original challenge stands: **text instructions all look the same to an LLM.**

YAML matrices, self-check questions, and 5x6 grids are all still TEXT. They're structured text, which LLMs parse differently, but they're text. The honest answer:

1. **Structured text IS different from prose text for LLMs.** YAML fields trigger completion bias. Questions trigger answering behavior. Grids trigger filling behavior. These are measurably different processing modes from "read and follow these instructions."

2. **But structured text is not magic.** A builder that doesn't understand multi-coherence won't develop understanding by filling a YAML matrix. It will fill in plausible-looking values.

3. **The real intervention may be simpler: use Opus, give it the content, give it vocabulary (mechanism catalog), give it constraints (thresholds), and get out of the way.** CD-006 proves this works. The routing problem may be an artifact of trying to make Sonnet do Opus's job, or of trying to over-specify what should be a creative act.

4. **The cheapest experiment:** Build one page with Approach D (phased revelation + grid) using a Sonnet builder, and one with minimal instruction using an Opus builder. Compare PA-05 scores. If Opus-minimal beats Sonnet-structured, the routing problem dissolves -- the answer is "use Opus."

---

## 8. RECOMMENDATION HIERARCHY

**If you must use Sonnet builders (cost constraint):**
1. Phased revelation (D) -- most impactful single change
2. 5x6 compositional grid (C) -- captures L3+L4 in one artifact
3. Self-check questions (B) -- phase-locked accountability
4. Boundary exemplar (E) -- one CSS pattern, not prose
5. YAML coherence matrix (A) -- if budget allows orchestrator complexity

**If you can use Opus builders (quality target):**
1. Propose-validate at Phase 0 (F) -- let Opus exercise judgment
2. Minimal recipe (~100 lines, not 650)
3. Full mechanism catalog available (not routed, just accessible)
4. PA feedback loop (build -> PA -> fix -> re-PA)
5. Gate-runner.js for L1 floor only

**If Flagship at 4/4 is the goal:**
1. Opus builder is non-negotiable (Sonnet ceiling is ~2.5/4)
2. Propose-validate for zone architecture
3. MULTIPLE PASSES: build -> PA audit -> builder reads PA feedback -> revise -> re-audit
4. The multi-pass pattern is the only proven path past 3/4 (CD-006 was iterative)
5. Structured routing serves as VERIFICATION, not GENERATION

The routing problem has no silver bullet. The best answer is: route LESS intelligence to MORE capable models, and verify AFTER building rather than prescribing BEFORE building.

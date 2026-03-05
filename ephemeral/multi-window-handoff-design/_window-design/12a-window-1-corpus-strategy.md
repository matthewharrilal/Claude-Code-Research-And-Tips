# Window 1 Corpus Strategy: Why Deep Thinking Thrives on Sparse Input

## The Question

The previous session's philosophy says: load creative knowledge (explorations, research, case studies) instead of rules. What happens when Window 1 -- the TC derivation window -- has access to the creative corpus?

This document explores three questions:
1. Which parts of the ~52,000-line corpus serve TC derivation?
2. How does the TC agent USE research to derive tensions with more conviction?
3. How does the creative corpus flow through ALL windows via the handoff protocol?

---

## The Corpus: What Actually Exists

### Verified File Sizes

| Corpus Segment | Files | Total Lines | Est. Tokens | Content Type |
|----------------|-------|-------------|-------------|--------------|
| R1-R5 + Synthesis | 7 | 4,487 | ~11,200 | Research philosophy -- WHY density/layout/axis/combination work |
| DD Explorations (HTML) | 6 | 6,259 | ~20,900 | Density patterns -- PULSE, CRESCENDO, ARCHIPELAGO, GEOLOGICAL, TIDAL, FRACTAL |
| OD Explorations (HTML) | 6 | 12,012 | ~40,000 | Organization patterns -- conversational, narrative, task-based, confidence, spatial, creative |
| AD Explorations (HTML) | 6 | 10,920 | ~36,400 | Axis patterns -- Z, F, bento, spiral, choreography, compound |
| CD Explorations (HTML) | 6 | 10,704 | ~35,700 | Combination patterns -- reasoning-in-code, task-containing-decision, etc. |
| Case Study markdown | 14 | 5,120 | ~12,800 | Anti-prescription compositional process documentation |
| Grammar/mechanisms | 5 | 2,670 | ~6,700 | Mechanism catalog, combinations, border system, compositional rules |
| **TOTAL CREATIVE CORPUS** | **50** | **~52,172** | **~163,700** |

Note: The previous session estimated ~172,800 lines. The actual verified count is ~52,172 lines across the design system's creative corpus. The discrepancy comes from earlier estimates including audit reports and inflated file counts in the exploration directories.

### What Has Already Been Digested

Three corpus ingestors have completed their work:

| Digest | Source Lines | Digest Lines | Status |
|--------|-------------|--------------|--------|
| research-digest.md | ~4,487 | ~500 | COMPLETE |
| dd-digest.md | ~6,259 | ~600 | COMPLETE |
| od-digest.md | ~12,012 | ~500 | COMPLETE |
| ad-digest.md | ~10,920 | TBD | IN PROGRESS |
| cd-digest.md | ~10,704 | TBD | IN PROGRESS |
| casestudy-digest.md | ~5,120 | TBD | IN PROGRESS |

These digests compress at ~8:1 into conviction format -- they carry creative philosophy, not extracted rules.

---

## Why Window 1 Thrives Without the Creative Corpus

This is counterintuitive. The philosophy says "load creative knowledge." But Window 1 is the WRONG window for the creative corpus, and the reasons are about how creative thought works, not about token budgets.

### The TC Agent's Task Is Questioning, Not Answering

The TC pipeline runs 14 questioning axes against CONTENT, not against explorations. The input to Phase 1 (Multi-Axis Questioning) is the content markdown + world-description. The axes ask: what does this content FEEL like? What does the reader need to UNDERSTAND? What does the reader want to DO after reading? These are content-specific questions. Loading DD-006's fractal density pattern or OD-001's conversational Q&A structure gives the TC agent answers to questions it hasn't asked yet.

The TC skill's anti-gravity mechanism (Phase 0E: library access withheld during Phases 0-3) exists precisely to prevent this contamination. When the agent reads DD-006 BEFORE deriving tensions, the fractal pattern becomes a gravitational attractor. The agent's metaphor search (Phase 3) collapses toward patterns it has already seen instead of patterns that emerge from the content-world tension.

Loading explorations into Window 1 would be importing ANSWERS into the QUESTIONING window.

### The Opposition Principle Requires Not-Knowing

The TC skill's most powerful mechanism is the Opposition Principle (lines 138-148): the richest tensions come from axes that OPPOSE the design system's personality. Opposition is generative precisely because the agent doesn't know the resolution in advance. When the agent has already read 18 explorations, every tension it discovers has an immediately available answer. The fight is over before it starts.

The conviction brief's quality depends on the TC agent sitting with UNRESOLVED tension long enough for the metaphor to emerge. Pre-loading resolutions short-circuits this generative pressure. The agent that reads DD-005 (Rivers/TIDAL) before deriving a metaphor for content about information flow will inevitably "discover" a river metaphor. The agent that derives blind may find something more surprising -- and surprise correlates with compositional richness.

### Working Memory Is the Scarce Resource

The context budget analysis shows Window 1 uses only 19% of its budget (~29k of ~150k tokens). The temptation to fill this headroom with creative corpus is natural -- "we have space, why waste it?"

But the TC agent needs that headroom as WORKING MEMORY, not as additional input. The 5-phase pipeline generates substantial intermediate output:
- Phase 1: 9-14 axis assessments with structural property tables
- Phase 2: Tension derivation with Addition/BECAUSE/Substitution test results for each axis
- Phase 3: 2-4 metaphor candidates with 6-criterion evaluations each
- Phase 4: Mechanism selection/rejection logs, transition tables, zone architecture

This processing fills ~30-50k tokens of generation space. More critically, additional input material creates attention competition: every line of exploration CSS competes for attention weight with the agent's own reasoning about content tensions. The thinking room IS the value.

### Window 2 Already Has the Creative Corpus Covered

The Window 2 design explicitly loads creative material into the builder's context. If both the TC window AND the builder window load explorations, the explorations get processed TWICE without additional benefit. The TC agent processes them to derive tensions; the builder processes them to derive CSS. But the TC agent's output (the conviction brief) already carries the tensions into the builder's window. Double processing is waste with a different name.

---

## The One Exception: What Window 1 DOES Benefit From

The current design (12-window-1-design.md) is correct: Window 1 loads 3 files (TC skill, content, world-description) plus a prompt template. Total: ~15-28k tokens, 19% budget.

### RESEARCH-SYNTHESIS.md: Philosophy That Deepens Questions

There is ONE creative corpus file that belongs in Window 1: `RESEARCH-SYNTHESIS.md` (383 lines, ~5,244 tokens).

The Research Synthesis is not a pattern catalog or exploration CSS. It is a PHILOSOPHICAL FRAMEWORK -- 5 unified design principles (Density as Rhythm, Layout as Choreography, Components as Characters, Whitespace as Design Element, Editorial Confidence Through Typography). These principles are abstract enough to INFORM the TC agent's questioning without pre-answering specific design decisions.

When the TC agent runs the FEEL axis ("What emotional register does this content need?"), having "Components as Characters" in context doesn't tell the agent WHICH characters or WHICH components. It invites the agent to ASK whether the content's components have character relationships -- narrative arcs, protagonist/antagonist dynamics, supporting cast hierarchies.

The Research Synthesis operates at the SAME abstraction level as the TC skill's questioning axes. It enriches the questions, not the answers.

**Revised Window 1 Load:**

| # | File | Lines | Tokens | Why |
|---|------|-------|--------|-----|
| 1 | TC SKILL.md | 841 | 12,603 | The pipeline machinery |
| 2 | Content markdown | 500-5000 | 1,250-12,500 | The raw material |
| 3 | World description | 17 | 461 | Side B of tension |
| 4 | RESEARCH-SYNTHESIS.md | 383 | 5,244 | Philosophical enrichment for deeper questioning |
| 5 | Prompt template | 60 | 1,500 | Instructions |
| | **TOTAL** | **~1,800-6,300** | **~21,058-31,308** | **14-21% budget** |

Still extremely light. Still 79-86% headroom for working memory.

---

## How Research Enriches the Derivation Process

Loading the Research Synthesis doesn't automatically improve derivation. The mechanism matters.

### Phase 1: Deeper Questions

Without the Research Synthesis, the TC agent asks the FEEL axis: "What emotional register does this content need?"

With it, the agent discovers a richer version: "What emotional register does this content need, and which of the five unified principles (density-as-rhythm, layout-as-choreography, components-as-characters, whitespace-as-design, editorial-typography) creates the most interesting tension with that register?"

This deepens each axis from a single question to a content-principle intersection. The agent now generates 5x more tension candidates per axis -- not by running more axes, but by running each axis against a richer substrate.

### Phase 2: Triangulated Tensions

The Research Synthesis contains specific cross-research insights like: "R3-023 (fractal self-similarity) + R4-012 (attention topology hierarchy) + R2-015 (editorial asymmetry) = the same insight from three perspectives." This gives the TC agent TRIANGULATION -- when a tension appears from multiple research angles, it is structurally deep, not cosmetically interesting.

Without the synthesis, the agent applies the Addition Test, BECAUSE Test, and Substitution Test abstractly. With it, the agent can ask: "Does this tension connect to multiple research streams?" A tension validated by density research AND layout research AND combination theory is almost certainly genuine.

### Phase 3: Wider Metaphor Search Space

The synthesis's "Density as Rhythm" principle gives the TC agent vocabulary for metaphor search that extends beyond obvious mappings. Instead of searching for a metaphor that resolves "the content needs warmth but the world is angular," the agent can search for a metaphor that resolves "the content's RHYTHM (from density research) fights the world's CHOREOGRAPHY (from layout research) -- what domain exhibits both?"

This doesn't pre-answer the metaphor. It gives the agent a richer space to search. The 5 principles are 5 additional dimensions in the metaphor search, producing candidates that would not emerge from content + world-description alone.

### What Research Does NOT Do

Loading the Research Synthesis does NOT:
- Give the TC agent specific CSS values (it contains none)
- Pre-select mechanisms (it references none by name)
- Narrow the metaphor search (it widens it)
- Replace the content-world tension (it enriches the substrate)
- Create compliance pressure (it is philosophy, not specification)

---

## How the Creative Corpus Flows Through ALL Windows

The key insight: DIFFERENT parts of the corpus serve DIFFERENT windows. The corpus is not a monolith to be compressed and forwarded -- it is a differentiated resource, sliced by the cognitive function of each window.

### Corpus Routing Map

```
CREATIVE CORPUS (~52,172 lines)
│
├── RESEARCH SYNTHESIS (383 lines)
│   └── → WINDOW 1 (TC Derivation)
│       Deepens questioning without pre-answering decisions
│       Used during Phase 1 (axis questioning) and Phase 2 (tension derivation)
│       Its value is consumed in the derivation -- it does not travel forward
│
├── RESEARCH FILES R1-R5 (4,104 lines)
│   └── → NOWHERE DIRECTLY
│       Already distilled into Research Synthesis and into the corpus digests
│       Available via Read tool if the TC agent needs deep research on a specific axis
│       The raw research is REFERENCE, not OPERATIONAL
│
├── EXPLORATION HTML (39,895 lines across 24 files)
│   ├── TC Agent's Exploration Recommendation (_exploration-rec.md)
│   │   └── → WINDOW 2 (Building) via orchestrator
│   │       TC agent selects 2-4 explorations by GENERATIVE OPPOSITION after metaphor commitment
│   │       Orchestrator loads the recommended HTML files into the builder's context
│   │       Budget: 2-4 files = ~3,000-8,000 lines = ~10,000-27,000 tokens
│   │
│   └── Remaining explorations
│       └── → WINDOW 3 (Refinement) via REFINE builder's Read tool
│           The REFINE builder can request specific explorations mid-build
│           Not pre-loaded (budget consumed by artifact + handoff tissue)
│           Available as on-demand reference
│
├── CASE STUDY MARKDOWN (5,120 lines across 14 files)
│   └── → WINDOW 2 (Building) -- selective
│       CD-006 case study (387 lines) pre-loaded as CALIBRATION
│       Shows compositional PROCESS, not specific CSS
│       Additional case studies available via Read tool
│
├── CORPUS DIGESTS (~1,600-2,400 lines when complete)
│   ├── research-digest.md (~500 lines)
│   │   └── → WINDOW 2 (Building) or WINDOW 3 (Refinement)
│   │       Creative philosophy compressed into conviction format
│   │       Alternative to loading raw research -- same insights, 8x fewer tokens
│   │
│   ├── dd-digest.md + od-digest.md + ad-digest.md + cd-digest.md (~2,000 lines total)
│   │   └── → WINDOW 3 (Refinement) via REFINE builder's context
│   │       The REFINE builder benefits from creative vocabulary for deepening
│   │       Digests provide this without consuming the token budget the artifact demands
│   │       Adding 1-2 digests (~500-1,000 lines) fits within remaining budget
│   │
│   └── casestudy-digest.md (~400 lines)
│       └── → WINDOW 2 (Building) as supplement to CD-006 case study
│           Broader calibration across multiple compositional approaches
│
└── GRAMMAR/MECHANISMS (2,670 lines)
    ├── mechanism-catalog.md (751 lines)
    │   ├── → WINDOW 1: Read tool call AFTER metaphor commitment (Phase 4)
    │   ├── → WINDOW 2: Pre-loaded for builder CSS vocabulary
    │   └── → WINDOW 3: Pre-loaded for REFINE builder reference
    │
    └── mechanism-combinations.md, border-system.md, compositional-rules.md (1,919 lines)
        └── → WINDOW 2: Pre-loaded for builder vocabulary depth
```

### The Narrative of How Creative Intelligence Flows

**Window 1 (TC Derivation)** receives the thinnest slice of creative corpus: only the Research Synthesis (383 lines). This is deliberate. The TC agent needs enrichment for its QUESTIONING, not pre-built answers. The Research Synthesis's 5 unified principles deepen the agent's questioning without steering its conclusions. After metaphor commitment, the TC agent reads the mechanism catalog via Read tool (Phase 4) and selects explorations for Window 2 by generative opposition.

**Window 2 (Building)** receives the heaviest creative load: the conviction brief from Window 1, 2-4 recommended explorations (~3,000-8,000 lines of HTML), CD-006 case study (387 lines), mechanism combinations (447 lines), and optionally 1-2 corpus digests (~500-1,000 lines). This is where the "raw material in context" principle from the philosophy session actually operates. The builder has the metaphor (from the brief), the creative tension (from the opposition map), and the raw creative vocabulary (from explorations and case studies) to CREATE from a rich processing state.

**Window 3 (Refinement)** receives the artifact, handoff tissue, and optionally 1-2 corpus digests. The REFINE builder's primary raw material is the previous builder's creation -- the artifact IS the creative knowledge for this window. The digests supplement with broader creative vocabulary for deepening, not redirecting.

### What Crosses Window Boundaries

```
Window 1 → Window 2:
  _tc-brief.md       (~80-165 lines)    Vision
  _reflection.md     (~50-70 lines)     Creative state
  _exploration-rec.md (~20-30 lines)    Corpus selection directive
  _mechanism-log.md  (~30-50 lines)     Build plan
  _content.md        (variable)         Raw content (re-loaded)

Window 2 → Window 3:
  output.html        (~2,000-3,000 lines)  The artifact
  _reflection-v2.md  (~50-100 lines)       Builder's creative state (6 dimensions)
  Weaver synthesis   (~200-300 lines)       PA evaluation creative direction
  _tc-brief.md       (~80-165 lines)       Original conviction (re-loaded)
  _content.md        (variable)            Raw content (re-loaded)
```

The creative corpus does NOT cross window boundaries. Instead, each window receives its OWN appropriate slice:
- Window 1: philosophical framework (Research Synthesis)
- Window 2: raw creative material (explorations, case studies, digests)
- Window 3: the artifact itself + optional digests for deepening vocabulary

The design insight: **the corpus is SLICED, not COMPRESSED.** Each window sees DIFFERENT corpus material suited to its cognitive task, rather than all windows seeing the same compressed digest.

---

## The Selection Protocol: How the Orchestrator Decides What to Load

### For Window 1: Static Load (No Selection Needed)

Window 1 always loads the same files:
1. TC SKILL.md (always)
2. Content markdown (user-provided)
3. World description (always)
4. RESEARCH-SYNTHESIS.md (always)

No dynamic selection. The TC agent's value comes from deep questioning, not broad reading.

### For Window 2: TC-Directed Selection (Dynamic)

The orchestrator reads the TC agent's `_exploration-rec.md` and loads the recommended files:

```
1. Parse _exploration-rec.md for LOAD directives
2. For each LOAD directive:
   a. Resolve the file path (exploration ID → validated-explorations/[dimension]/[file].html)
   b. Count tokens
   c. Verify total fits within Window 2's budget (~40-50k tokens for explorations)
3. If total exceeds budget:
   a. Keep OPPOSITION-selected explorations (highest priority)
   b. Drop COMPLEMENT-selected explorations (lowest priority)
4. Always load:
   - CD-006 case study (387 lines, ~970 tokens) -- calibration
   - mechanism-catalog.md (751 lines, ~7,171 tokens) -- vocabulary
   - mechanism-combinations.md (447 lines, ~1,120 tokens) -- grammar
5. Optionally load (if budget permits):
   - research-digest.md (~500 lines, ~1,250 tokens) -- philosophy
   - casestudy-digest.md (~400 lines, ~1,000 tokens) -- broader calibration
```

### For Window 3: Artifact-Driven Selection (Minimal)

The REFINE builder's primary creative material is the artifact. Additional corpus loading is minimal:

```
1. Always load: artifact + Weaver + reflection + brief + content + reference files
2. If Weaver identifies DENSITY concerns → load dd-digest.md
3. If Weaver identifies ORGANIZATIONAL concerns → load od-digest.md
4. If Weaver identifies COMPOSITIONAL concerns → load cd-digest.md
5. Maximum additional corpus: 2 digests (~1,000 lines, ~2,500 tokens)
```

The Weaver's findings drive corpus selection for Window 3. This is RESPONSIVE loading -- the REFINE builder receives creative vocabulary targeted at the specific qualities identified in the evaluation.

---

## Adversarial Counter-Arguments (From 08-adversarial.md)

### "The best result came from focused direction, not diffuse material"

True. PA-05 3.5/4 came from the REFINE builder who received a ~200-line Weaver report with specific creative direction, not 15,000 lines of explorations. This supports, rather than contradicts, the design: Window 1 gets FOCUSED material (Research Synthesis philosophy), Window 2 gets TARGETED material (TC-selected explorations by opposition), Window 3 gets DIRECTED material (Weaver-selected digests by identified needs).

None of the windows receive "diffuse material." Every corpus piece has a routing rationale.

### "N=2 is insufficient evidence for creative knowledge over rules"

True. We have exactly 2 data points. Multiple confounded variables. The creative corpus strategy is a HYPOTHESIS to test, not a proven methodology.

The design accommodates this by keeping corpus loading OPTIONAL and BOUNDED. Window 1's Research Synthesis is the only new load (~5,244 tokens). Window 2's explorations are TC-selected and could be 0 files if the TC agent judges none appropriate. Window 3's digests are Weaver-conditional. The system can run with ZERO creative corpus loading and produce the same results as the current pipeline.

### "The Weaver IS extraction -- the philosophy condemns its own mechanism"

Partially true. The Weaver synthesizes 5 auditors' reactions into creative direction. This is extraction in form. But the Weaver's output is CREATIVE DIRECTION, not extracted rules -- "AMPLIFY where the page has momentum" vs "border-radius must be 0." The distinction matters because creative direction activates generation mode while extracted rules activate compliance mode.

The corpus digests face the same challenge. They are compressions of creative knowledge. The philosophy's strongest form ("understanding exists in processing, not artifacts") would condemn the digests as category errors. The pragmatic position: digests are BETTER than nothing and LESS than raw explorations. Where budget permits, load raw explorations (Window 2). Where it doesn't, load digests (Window 3).

---

## Changes to the Original Window 1 Design (12-window-1-design.md)

### ADDED: RESEARCH-SYNTHESIS.md to Window 1 file manifest

**Was:** 3 files (TC skill, content, world-description), ~15-28k tokens
**Now:** 4 files (TC skill, content, world-description, RESEARCH-SYNTHESIS), ~21-33k tokens

The Research Synthesis adds 5,244 tokens of philosophical enrichment. Budget changes from 19% to 14-22% used, still leaving 78-86% headroom.

### CLARIFIED: How the exploration recommendation routes to Window 2

The original design introduced `_exploration-rec.md` as a new output. This strategy specifies the orchestrator protocol for consuming that recommendation: parse LOAD directives, resolve file paths, verify budget, fallback priorities.

### CLARIFIED: Why creative corpus does not belong in Window 1

The original design excluded research and explorations with a brief rationale. This strategy provides the full argument: the anti-gravity mechanism, the Opposition Principle's productive not-knowing, working memory needs, and the Window 2 designer's attention analysis.

### NEW: Corpus routing map showing per-window allocation

Maps every corpus segment to its destination window with rationale. Shows how different windows see different corpus slices rather than all windows seeing compressed versions of everything.

### NEW: Selection protocol for orchestrator

Concrete instructions for how the orchestrator determines which files to load in each window. Static for Window 1, TC-directed for Window 2, Weaver-conditional for Window 3.

---

## Summary: The Creative Corpus Architecture

| Window | Corpus Loaded | Lines | Tokens | Selection Method |
|--------|--------------|-------|--------|------------------|
| W1 (TC) | Research Synthesis only | 383 | 5,244 | Static (always) |
| W2 (Build) | 2-4 explorations + case study + grammar | 3,500-9,500 | 10,000-30,000 | TC-directed (generative opposition) |
| W3 (Refine) | 0-2 digests | 0-1,000 | 0-2,500 | Weaver-conditional (responsive to identified needs) |
| **TOTAL per build** | | **3,883-10,883** | **15,244-37,744** | |

Out of ~52,172 lines of creative corpus, each build uses 7-21% of it. The selection is CONTENT-ADAPTIVE -- different content produces different TC recommendations, which produces different exploration selections, which produces different builder vocabulary, which produces different Weaver findings, which produces different REFINE supplements.

No two builds see the same corpus slice. This is the answer to the philosophy session's question: "Can multiple context windows each digest a SLICE of the creative corpus and CONVERGE via handoff protocol to simulate unified ingestion?"

The answer: they don't need to simulate unified ingestion. They achieve DIFFERENTIATED ingestion -- each window sees the corpus through the lens of its specific task, selected by the output of the previous window. The corpus flows forward not as compressed information but as DIRECTED attention: "given what Window 1 derived, THESE parts of the corpus matter most for Window 2."

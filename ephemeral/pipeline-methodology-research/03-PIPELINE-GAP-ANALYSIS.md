# Pipeline Gap Analysis: What /compose Lacks and Why

**Date:** 2026-03-01
**Scope:** Structural comparison between the exploration-era build methodology and the current /compose pipeline, identifying 6 missing mechanisms, the question category gap, compression loss, context framing error, and anti-orphaning violation.
**Method:** Cross-referenced /compose skill (SKILL.md, 309 lines), 7 vocabulary files, master findings (01-MASTER-FINDINGS.md), and exploration-era build documentation.
**Companion to:** `01-MASTER-FINDINGS.md` (core insight), `02-EXPLORATION-ARCHITECTURE.md` (how explorations worked)

---

## 1. Side-by-Side Comparison

The two systems solve the same problem — turn content into a designed HTML page — through fundamentally different architectures. The difference is not incremental. It is structural.

### Exploration-Era Architecture

```
Accumulated Knowledge
  337 research findings (R1-R5)
  88 stage findings (DD-F, OD-F, AD-F, CD-F)
  24 validated explorations (DD-001 through CD-006)
  Enrichment waves (43-agent OD re-enrichment, etc.)
  Handoff protocols (HANDOFF-DD-TO-OD.md, etc.)
  Bespoke EXT research per exploration
        |
        v
Researcher Agent (Agent-0C type)
  Traverses the full knowledge graph
  Reads provenance chains, stage findings, prior explorations
  Curates for THIS specific build's metaphor and content
  Compiles implementation-mapped findings with expected evidence
        |
        v
Research Package (per-builder, self-contained, 100-200 lines)
  Soul checklist (MANDATORY)
  Applicable R-5 findings EMBEDDED (not referenced)
  AD-F, DD-F, OD-F findings relevant to THIS exploration
  CSS examples matching the pattern being explored
  Anti-pattern checklist
  Implementation plans with expected evidence
        |
        v
Builder Agent
  Consumes curated package
  Builds HTML + CSS
  DISCOVERS new findings during construction
        |
        v
New Findings (feed back into accumulated knowledge)
  DD-F, OD-F, AD-F, CD-F findings produced per build
  Feed forward to next builder in next stage
  Knowledge GROWS, never shrinks
```

### Current /compose Pipeline

```
7 Static Vocabulary Files (compressed from 337+ findings)
  identity.md (87 lines — character + soul + refusals)
  vocabulary.md (55 lines — design decisions & rationale)
  tokens.css (124 lines — 65 CSS tokens in :root block)
  mechanisms.md (88 lines — 20 mechanisms with categories)
  grammar.md (149 lines — compositional rules + sequencing)
  components.css (779 lines — CSS implementations)
  components.md (37 lines — component inventory)
  Total: ~1,319 lines
        |
        v
TC Agent (Opus, context-isolated)
  Receives: content markdown + TC skill + identity.md + vocabulary.md
  Does NOT receive: mechanisms.md, grammar.md, components.css, case studies
  Runs Phases 0-4.5 of tension-composition
  Blind to accumulated knowledge, stage findings, prior explorations
  Produces conviction brief (NO LINE LIMIT)
        |
        v
Conviction Brief (single handoff document — _tc-brief.md)
  World-Description, Calibration, Opposition Map
  Compositional Arc, Creative Conditions, Content Map
  Metaphor-driven, experiential, conviction-oriented
  No implementation maps, no expected evidence, no constraint linkage
        |
        v
Builder Agent (Opus, receives brief + 6 vocabulary files)
  Reads conviction brief BEFORE vocabulary files (mandatory ordering)
  Same files every time: tokens.css, mechanisms.md, grammar.md,
  components.css, components.md + conviction brief
  80% creative authority within identity constraints
  No per-build customization of vocabulary delivery
  No findings production
        |
        v
PA Evaluation (5 Opus auditors + 1 Opus weaver)
  Fresh-eyes: auditors receive ONLY sanitized screenshots + stripped PA skill
  Zero context: no brief, no metaphor name, no CSS source
  Weaver synthesizes: Experience Portrait + Creative Direction + Verdict
  Fix cycles (max 3, same builder, generative language)
  No findings feed back into anything
  Knowledge is CONSUMED and DISCARDED
```

### The Architecture Gap Visualized

```
EXPLORATION:  Knowledge → Researcher → Package → Build → Findings → Knowledge
                                                              ^           |
                                                              |___________|
                                                             (feedback loop)

PIPELINE:     Static Files → TC → Brief → Build → PA → Fix → Done
                                                          |
                                                          x (no feedback)
```

The exploration architecture is a LEARNING SYSTEM. The pipeline is a ONE-SHOT ASSEMBLY LINE.

### The Structural Delta

| Dimension | Exploration Era | /compose Pipeline |
|-----------|----------------|-------------------|
| Knowledge traversal | Researcher agent traverses full graph | No traversal — static file dump |
| Builder input | Bespoke package per build (100-200 lines, curated) | Same 7 files every time (~1,319 lines, generic) |
| Knowledge format | Implementation-mapped plans with expected evidence | Mechanism names + one-line descriptions |
| Findings production | Every build discovers new things (DD-F, OD-F, etc.) | No discoveries, no feed-forward |
| Knowledge growth | Accumulative (grows per build: 337+ findings) | Static (same files forever) |
| Content-to-vocabulary bridge | Research package (curated by researcher) | Conviction brief (derived from content only by TC) |
| Enrichment cycles | Multi-wave (43-agent OD re-enrichment, 149 agents total) | Single-pass (1 TC + 1 builder + 5 auditors + 1 weaver) |
| Anti-orphaning | Every finding consumed by downstream document | Research exists in files builder never reads |
| Builder cognitive load | Execute within curated framework | Derive framework AND execute within it |
| Creative framing | Hypothesis test ("does THIS structural mapping work?") | Assembly ("apply mechanisms to content") |

---

## 2. The 6 Missing Mechanisms (Detailed Analysis)

### 2a. No Researcher/Curation Layer

**What the exploration era had:** Agent-0C (Research Packager) in the CD stage traversed the entire accumulated knowledge graph — all 337 research findings, all stage findings from DD through AD, all prior exploration artifacts — and compiled a curated package for each specific builder. This agent's sole purpose was knowledge navigation and curation.

The researcher agent operated as a NAVIGATOR. It understood:
- Which of the 337 findings were relevant to THIS content type
- Which stage findings (DD-F through AD-F) applied to THIS structural hypothesis
- Which prior explorations had successfully tested similar patterns
- Which anti-patterns had been discovered for this content shape

**What /compose has:** Nothing between accumulated knowledge and the builder. The /compose orchestrator mechanically loads 7 files in a fixed order. Phase 0 of the compose skill reads: "Read these 4 files. They are the design system's operational vocabulary." Phase 2 includes 3 more files for the builder. No agent traverses the design system's accumulated knowledge. No agent curates what the builder receives.

The TC agent is the closest analog — it reads the content and derives a creative direction. But TC is explicitly ISOLATED from accumulated knowledge. The compose skill states: "Agent does NOT receive: Case studies, prior explorations, mechanism files (library prohibition until TC Phase 4)." This isolation is intentional (preventing creative contamination) but it means TC cannot serve as a curation layer.

**Why this matters:** The curation layer was not administrative overhead. It was where knowledge became APPLICABLE. A research finding like "R1-001: Q&A alternation follows PULSE rhythm" is inert data in a research file. Agent-0C transformed it into an actionable plan: "Use alternating padding (sparse 48px, dense 24px) to honor PULSE rhythm. Expected evidence: visible PULSE rhythm in layout. Must honor DD-F-001." The transformation from finding to plan is where quality enters the system.

**The gap:** Without a curation layer, the builder receives vocabulary (what mechanisms exist) but not strategy (which mechanisms serve THIS content, with what values, to achieve what perceptual effect). The builder must independently re-derive the content-to-mechanism mapping that a researcher agent would have provided.

### 2b. No Per-Build Package

**What the exploration era had:** Agent-0C created 6 different packages for the 6 CD builders. CD-001 (reasoning-code content) received a package emphasizing decision matrices, code block rhythm, and reasoning container patterns. CD-006 (pilot-migration content with ALL component types) received a package emphasizing multi-axis integration, compound transitions, and fractal self-similarity. Each package was 100-200 lines, self-contained, and specific to the builder's content and exploration.

Key principle from the exploration era: "Builder never needs to leave the package." The package was self-contained — soul checklist, applicable findings EMBEDDED (not referenced), CSS examples, anti-patterns, implementation plans. The builder consumed one document and built.

**What /compose has:** Every builder receives the same files regardless of content. The compose skill's Phase 2 specifies a fixed list:
- The content markdown
- The conviction brief from Phase 1
- tokens.css (124 lines — all 65 CSS tokens)
- mechanisms.md (88 lines — all 20 mechanisms)
- grammar.md (149 lines — all compositional rules)
- components.css (779 lines — all CSS implementations)
- components.md (37 lines — full component inventory)

A builder composing a FAQ page receives the same mechanisms.md as a builder composing a deep technical tutorial. A builder whose TC-derived metaphor is geological stratification receives the same components.css as a builder whose metaphor is architectural scaffolding. The vocabulary delivery is content-agnostic.

**Why this matters:** The conviction brief partially addresses this gap — it provides metaphor-specific creative direction. The compose skill correctly identifies the brief as the bridge: "The conviction brief is the handoff document. It carries creative direction from TC to builder." But the brief operates at the experiential level ("the reader should feel grounded in bedrock certainty"), not at the implementation level ("use 4px border-left on .stratum--bedrock elements, with padding compression from 64px to 24px as confidence increases"). The vocabulary files provide implementation tools, but the selection and application of those tools to THIS content remains the builder's burden.

**The gap:** The builder must do two jobs simultaneously: (1) internalize the metaphor from the conviction brief, and (2) independently map that metaphor onto the vocabulary from the 7 files. In the exploration era, job (2) was done by the researcher agent, and the builder received the mapping as a finished plan.

### 2c. No Findings Production

**What the exploration era had:** Every build produced findings. DD-001 through DD-006 produced 18 DD-F findings. OD-001 through OD-006 produced 17 OD-F findings. AD produced 28 AD-F findings. CD produced 25 CD-F findings. These weren't post-hoc observations — they were BUILT INTO the process.

Key examples of findings that required accumulation:
- DD-F-006 (fractal self-similarity) could NOT have been discovered without DD-001 through DD-005 existing first. It was a META-DISCOVERY about the pattern that emerges when you compare 5 different density explorations.
- OD-F-005 ("Organization IS Density") discovered that choosing an organizational pattern simultaneously determines density distribution. This finding changed how every subsequent builder thought about composition.
- AD-F-023 ("ATTENTION TOPOLOGY") was a meta-equivalence discovery showing that all axis patterns are topological transformations of the same underlying attention structure.

**What /compose has:** The PA produces auditor reports and a weaver synthesis, but these are EVALUATIVE, not GENERATIVE. The compose skill describes the weaver's output as three items: Experience Portrait (what the page IS), Creative Direction (AMPLIFY/RELEASE/DEEPEN), and Verdict (SHIP/REFINE/REBUILD). The Creative Direction items use "generative language" but they are about THIS page, not about the system's knowledge. They say "the opening zone wants more warmth" — they don't produce findings like "warmth in opening zones of confidence-stratified content requires minimum 15 RGB warm-shift from the neutral baseline."

The compose skill explicitly structures fix cycles as CORRECTIVE, not GENERATIVE: "TYPE A: CSS value wrong. TYPE B: Layout doesn't match conviction brief. TYPE C: Metaphor doesn't work." All three types fix problems. None produce discoveries.

**Why this matters:** Findings production is what made the exploration era accumulative. Each build added to the system's knowledge. The CSS progression shows this: DD avg 517 CSS lines, OD avg 980, AD avg 897, CD avg 886 — knowledge grew, capability expanded, richness increased. Without findings production, the system is static — it knows exactly as much after building its 100th page as it knew after building its first.

**The gap:** /compose is a closed loop. Knowledge enters (7 files + content), a page exits, and nothing feeds back. The exploration era was an open loop where every output enriched future inputs. Over N builds, the exploration architecture has N * average_findings discoveries feeding into future builds. The pipeline has exactly the same 7 static files regardless of N.

### 2d. TC Operates Blind to Accumulated Knowledge

**What the exploration era had:** Questions that explicitly referenced prior findings:
- DD: "Can CRESCENDO density work for code-heavy content?" (references density patterns from research)
- OD: "What if documentation was organized as a conversation?" (references OD organizational hypothesis built on DD findings)
- AD: "Does Z-pattern serve or contradict PULSE density?" (references DD-F PULSE finding)
- CD: "Can 3 heavy component types honor the velocity rule while CRESCENDO density builds through an F-Pattern to Bento Grid transition?" (references DD-F velocity, DD density patterns, AD axis patterns)

Each stage asked a more structurally complex question than the last because each had more accumulated knowledge to work with. The questions EVOLVED.

**What /compose has:** The TC agent derives from content alone. The compose skill explicitly isolates TC from knowledge: "Agent does NOT receive: Case studies, prior explorations, mechanism files (library prohibition until TC Phase 4)." TC reads the content markdown and runs the tension-composition pipeline: FEEL/UNDERSTAND/DO/BECOME questioning, tension derivation, metaphor collapse. It cannot consult:
- The 337 research findings (R1-R5)
- The 88 stage findings (DD-F through CD-F)
- Any prior build artifacts or PA results
- Any accumulated knowledge about what structural approaches work for which content types

**Why this matters:** The isolation is intentional — TC's compose skill says the library prohibition prevents "creative contamination" and "pattern-matching." This is a valid design choice for metaphor DERIVATION. But the cost is that TC cannot produce structural hypotheses informed by prior knowledge. TC can derive "this content wants geological stratification" from the content's internal tensions. It CANNOT derive "geological stratification with inverse density-confidence correlation at 4 strata with PULSE+TIDAL rhythm" because that requires knowing what DD-F and OD-F findings say about those specific patterns.

**The gap:** TC produces the conviction side of the equation. Nothing in the pipeline produces the structural hypothesis side informed by accumulated knowledge. The builder receives rich metaphorical direction but no empirically grounded structural propositions connecting content properties to visual properties.

### 2e. No Enrichment Waves

**What the exploration era had:** OD went through 6 waves totaling ~149 agents:

| Wave | Purpose | Agents | Output |
|------|---------|--------|--------|
| 1. Build | Create explorations | 6-18 | 6 HTML files |
| 2. Audit | Find problems | 17 | 89 findings |
| 3. Fix | Resolve problems | 7 | 6 fix reports |
| 4. Re-Enrichment | Unify + apply research | 43 | 42 new EXT-* findings |
| 5. Comprehensive Audit | Second-look | 58 | 78 audit files |
| 6. Provenance Remediation | Formalize chain | 18 | 27 chain files |

The re-enrichment wave (Wave 4) was critical. After the initial build-audit-fix cycle, 43 agents re-examined the explorations against ALL accumulated research, producing 42 NEW findings that didn't exist before. These findings (EXT-CREATIVE-*, EXT-CONFIDENCE-*, etc.) were bespoke — commissioned specifically for the content types being explored.

**AD had NO equivalent re-enrichment cycle.** The result: 28 findings, but each was 3.6x less densely threaded than OD's. 47 "dark matter" items — knowledge that existed in scratchpad files but was never formally threaded into the accumulation graph. The AD gap is direct evidence that the presence or absence of enrichment waves produces measurably different knowledge quality.

**What /compose has:** A single pass: TC derives → Builder builds → PA evaluates → Fix cycles (max 3). The compose skill caps fix cycles at 3: "Maximum 3 fix cycles. If fix-3-feedback.md exists, stop." The fix cycles are corrective (fixing problems the PA found), not enriching (discovering new things about the content-form relationship). After fix cycle 3, the pipeline stops regardless of whether deeper enrichment would produce better output.

**Why this matters:** The exploration era discovered that knowledge quality improves with each enrichment wave. The first pass produces the artifact. The second pass (audit) finds what's wrong. The third pass (fix) corrects problems. But the FOURTH pass (re-enrichment) is where genuine discoveries happen — 42 new EXT-* findings that no one anticipated, produced by agents examining the artifact through fresh lenses against the full accumulated knowledge.

**The gap:** /compose stops at wave 3 (fix). It never reaches wave 4 (enrichment). The system can correct defects but cannot discover principles. The 3-fix-cycle cap is a reasonable engineering constraint, but the conceptual framework doesn't even INCLUDE enrichment as a concept — the pipeline has no vocabulary for "discover new things about what we just built."

### 2f. No Implementation-Mapped Findings

**What the exploration era had:** Findings with complete implementation plans:

```
R1-001 → "Q&A alternation follows PULSE: Questions=sparse, Answers=dense"
  → Expected evidence: "Visible PULSE rhythm in layout"
  → Must honor: DD-F-001 PULSE
  → Implementation: Use alternating padding (sparse 48px, dense 24px)
```

Each finding included:
1. The observation (what was discovered)
2. Expected evidence (what it should look like when implemented)
3. Constraint linkage (what prior findings it must honor)
4. Implementation plan (specific CSS approach with values)

**What /compose has:** Mechanism names with brief descriptions. From mechanisms.md:

```
| 5 | Dense/Sparse Alternation | 18/18 | DD |
|   | INHALE/EXHALE rhythm through padding changes between sections |
```

The builder knows the technique EXISTS (dense/sparse alternation). The builder knows the technique's ORIGIN (DD). The builder knows its USAGE frequency (18/18 explorations). But the builder does not know:
- How this technique applies to THIS content's specific structure
- What expected evidence to look for (what does "correctly deployed PULSE" look like for a FAQ vs a tutorial?)
- Which prior findings or constraints this technique must honor
- What specific padding values to use for THIS metaphor's interpretation of breathing rhythm

Grammar.md provides some implementation guidance — canonical density padding values like "PULSE: Inhale 24px / Exhale 64-80px" and "CRESCENDO: Progressive 80px -> 64px -> 48px -> 24px -> 16px." But these are generic defaults, not content-specific implementation maps.

**The gap:** The distance between "Dense/Sparse Alternation: INHALE/EXHALE rhythm through padding changes between sections" (a vocabulary item in mechanisms.md) and "use 4px border-left on primary Q&A pairs, 3px on secondary clarifications, 1px on tangential notes, with PULSE rhythm alternation at 48px/24px padding to honor DD-F-001, expected evidence: visible PULSE rhythm when scrolling, anti-pattern: uniform padding on Q&A" (an implementation-mapped finding from a research package) is the distance the builder must traverse alone. In the exploration era, the researcher agent traversed it.

---

## 3. The Question Category Gap

This is the deepest conceptual gap — not a missing feature but a missing CATEGORY OF THOUGHT.

### TC Questions: Experiential (Bottom-Up from Content)

The tension-composition skill asks bottom-up questions that derive from content:

| Axis | Question Form | Domain |
|------|---------------|--------|
| FEEL | "What does the reader need to FEEL?" | Emotional |
| UNDERSTAND | "What must the reader UNDERSTAND?" | Cognitive |
| DO | "What should the reader be able to DO?" | Behavioral |
| BECOME | "Who does the reader BECOME?" | Transformational |
| NAVIGATE | "How does the reader MOVE THROUGH?" | Spatial |
| TRUST | "What does the reader need to BELIEVE?" | Epistemic |
| EVALUATE | "What does the reader need to JUDGE?" | Analytical |
| ORIENT | "Where does the reader need to KNOW they are?" | Contextual |
| RECONCILE | "What contradictions must the reader RECONCILE?" | Dialectical |
| COMPARE | "What does the reader need to COMPARE?" | Relational |
| IDENTIFY | "What does the reader need to IDENTIFY?" | Recognitional |
| DISCOVER | "What does the reader need to DISCOVER?" | Exploratory |
| SEE | "What does the reader need to SEE?" | Perceptual |
| REMEMBER | "What does the reader need to REMEMBER?" | Retentional |

The TC pipeline follows a derivation chain: Content -> Tension -> Metaphor -> Structure. The metaphor emerges from the content's internal tensions. This is genuine creative derivation. The compose skill describes it as "the full power of Opus to explore metacognitively, holistically, from every angle."

The output is a conviction brief: a rich, experiential document describing the WORLD the page should create. The compose skill specifies 6 sections: World-Description, Calibration, Opposition Map, Compositional Arc, Creative Conditions, Content Map. The brief is metaphor-driven, inviting the builder into a creative space.

### Exploration Questions: Structural (Top-Down from Hypothesis)

The exploration-era questions were fundamentally different:

| Stage | Question Form | Domain | Example |
|-------|---------------|--------|---------|
| DD | "Can X work?" | Pattern validation | "Can CRESCENDO density work for code-heavy content?" |
| OD | "What if X organized?" | Architectural hypothesis | "What if documentation was organized as a conversation?" |
| AD | "Does X serve Y?" | Compatibility testing | "Does Z-pattern serve or contradict PULSE density?" |
| CD | "Can N coexist with M?" | Integration testing | "Can 3 heavy component types honor the velocity rule while CRESCENDO density builds through an F-Pattern to Bento Grid transition?" |

Each stage asked MORE STRUCTURALLY COMPLEX questions because each stage had MORE ACCUMULATED KNOWLEDGE to build on. The questions explicitly referenced prior findings (DD-F PULSE, velocity rules, specific density patterns). They EVOLVED.

### The Missing Category: Structural Propositions

TC generates metaphors that IMPLY structure:
> "The reader should feel grounded" -> implies geological stratification -> implies heavy borders at the base, lighter at the surface

Explorations generated structural propositions that SPECIFY architecture:
> "Density correlates inversely with confidence" — a RULE connecting content properties (confidence level) to visual properties (information density)

Structural propositions are rules of the form: **"When content has property X, visual property Y should have value Z, because relationship R."**

Examples from the exploration era:
- "Q&A alternation follows PULSE rhythm" (content property: Q&A structure -> visual property: padding alternation)
- "Hierarchical depth maps to border weight" (content property: nesting level -> visual property: border thickness 4px/3px/1px)
- "Certain content gets MORE space, uncertain content gets LESS" (content property: confidence -> visual property: spacing compression)
- "Compound patterns must be sequential, not simultaneous" (content property: multi-pattern -> visual property: section isolation with transitions)
- "One Z-Pattern sweep = one PULSE beat" (perceptual equivalence connecting axis patterns to density patterns)

TC generates NONE of these. TC generates experiential direction: "The page should breathe." The builder must independently derive: "Breathing means PULSE rhythm means alternating 48px/24px padding means the Q&A sections alternate sparse/dense." The builder must independently connect: "geological means border-weight gradient means 4px for bedrock, 3px for sediment, 1px for surface."

### The Synthesis Needed

Both question types are needed:
- **TC questions** provide emotional conviction — the SOUL of the page (why it exists, what it should feel like, what the reader experiences)
- **Structural propositions** provide architectural framework — the SKELETON of the page (what connects to what, with what values, according to what rules)

The conviction brief is the soul without a skeleton. The builder must grow the skeleton independently. The compose skill tries to address this with builder instructions like "Build boundary-by-boundary, not channel-by-channel" and "Write a transition table first" — but these are PROCESS instructions (HOW to build), not STRUCTURAL instructions (WHAT to build). The builder still must derive the structural mapping from metaphor to CSS alone.

---

## 4. The Compression Loss

The pipeline compresses accumulated knowledge at catastrophic ratios.

### The Numbers

| What was compressed | From | To | Ratio | What was lost |
|--------------------|----|--|----|--------------|
| Research findings | 337 findings (R1-R5) | 7 vocabulary files | 48:1 | Implementation context, expected evidence, constraint linkage |
| Stage findings | 88 findings (DD-F through CD-F) | 20 mechanism names in mechanisms.md | 4.4:1 | Discovery narrative, failure lessons, applicability conditions |
| Implementation plans | Per-finding CSS plans with values | Brief descriptions + grammar defaults | Effectively infinite | Specific values, metaphor mappings, evidence criteria |
| Navigation architecture | 3-layer provenance system (490 files + 244 files + 50 files) | Flat file list (7 files) | N/A | Relational context, dependency tracking, searchability |
| Enrichment history | 6-wave OD (149 agents), multi-wave AD/CD | Single pass (~8 agents) | N/A | Progressive refinement, bespoke research, feed-forward |
| Content-type knowledge | 24 explorations across 4 content categories | Generic vocabulary | N/A | Per-content-type implementation knowledge |

### What Compression Looks Like in Practice

**Before compression (exploration-era research package for a builder):**

```
Finding R1-001: "Q&A alternation follows PULSE rhythm"
  Source: DD-F-001 (validated in DD-001 through DD-006)
  Content trigger: Any content with question/answer pairs
  Visual mapping: Questions = sparse zones (48px padding, warm cream bg)
                  Answers = dense zones (24px padding, near-white bg)
  Expected evidence: Visible PULSE rhythm when scrolling
  Must honor: DD-F-001 PULSE, grammar.md INHALE/EXHALE rule
  Anti-pattern: Uniform padding on Q&A (destroys rhythm)
  Implementation: Apply dense/sparse alternation mechanism (#5)
                  with content-type-specific padding values
  Confidence: HIGH (validated 6/6 DD explorations)
  CSS example:
    .question { padding: 48px var(--space-8); background: var(--bg-sparse); }
    .answer { padding: 24px var(--space-8); background: var(--bg-dense); }
```

**After compression (pipeline mechanisms.md, line for the same concept):**

```
| 5 | Dense/Sparse Alternation | 18/18 | DD |
|   | INHALE/EXHALE rhythm through padding changes between sections |
```

The compression ratio is not 48:1 in line count. It is closer to INFINITY:1 in implementation specificity. The exploration-era package told the builder WHAT to do, WHY, with WHAT VALUES, for WHAT CONTENT TYPE, with WHAT EXPECTED RESULT. The pipeline gives the builder a NAME and a one-line description.

Grammar.md partially recovers some implementation knowledge — it specifies canonical density padding values (PULSE: Inhale 24px / Exhale 64-80px) and transition types (SMOOTH/BRIDGE/BREATHING). This is genuinely useful. But it is generic — the same values for all content, all metaphors, all builds. The per-build customization that Agent-0C provided is absent.

### What the Builder Must Independently Re-Derive

For each of the 20 mechanisms in mechanisms.md, the builder must:

1. **Decide applicability:** Does THIS content need dense/sparse alternation? (The research package would have pre-decided this.)
2. **Determine values:** What padding values? What background colors? (The package would have specified these, contextualized to the metaphor.)
3. **Map to metaphor:** How does the geological stratification metaphor interpret PULSE rhythm? (The package would have provided the metaphor-to-mechanism mapping.)
4. **Check constraints:** Does this conflict with other mechanisms being deployed? (The package would have listed constraint linkages.)
5. **Predict evidence:** What should the result look like? (The package would have described expected evidence.)

For 20 mechanisms, this is 100 independent decisions the builder makes that the researcher agent would have pre-resolved. The builder is doing the researcher's job AND the builder's job simultaneously, in a single context window, in a single pass.

### The Information Loss Chain

```
337 research findings (full context, implementation plans, CSS examples)
  -> 88 stage findings (validated discoveries, with provenance + evidence)
    -> 20 mechanism names (bare names + one-line descriptions)
      -> Builder's context window (7 static files, same every time)
        -> Builder's output (single HTML page)
```

At each compression stage, implementation specificity is lost:
- 337 -> 88: Individual finding detail -> stage-level synthesis (4:1)
- 88 -> 20: Stage findings with implementation plans -> mechanism names (4.4:1)
- 20 -> builder: Mechanism names -> builder's interpretation (1:1, but with NO per-build implementation map)

The real loss is not in COUNT — it is in KIND. A mechanism name is categorically different from an implementation-mapped finding. The name tells you WHAT exists. The finding tells you WHEN to use it, HOW, WHY, for WHAT CONTENT, and WHAT IT SHOULD LOOK LIKE.

---

## 5. The Context Framing Error

The pipeline's deepest problem is not what it contains but how it THINKS about what it contains.

### The Two Orientations

**Exploration-era orientation (knowledge quality):**
- "How do we make this knowledge RICHER before it reaches the next builder?"
- "Is this research deep enough? Commission more bespoke findings."
- "Have all prior stage findings been threaded into the handoff?"
- "Does the research package contain implementation-mapped plans?"
- "Is the builder receiving everything they need to build WITH CONVICTION?"

**Pipeline orientation (context management):**
- "What fits in the context window?"
- "How do we compress 337 findings into manageable files?"
- "What should the builder receive in its prompt?"
- "How do we manage context between TC and builder?"
- "Is the builder receiving too much? Can we trim?"

### How the Framing Manifests

The compose skill's Phase 0 says: "Read these 4 files. They are the design system's operational vocabulary." This is context management — loading files into a window.

The exploration era's equivalent said: "Agent-0C: traverse the accumulated knowledge, compile a curated package for Builder-N. The package must contain everything Builder-N needs — soul checklist, applicable findings, CSS examples, implementation plans, anti-patterns." This is knowledge curation — building a bespoke knowledge artifact.

The difference is not what is loaded but WHY it is loaded:
- **Context management asks:** "What fits?" -> Optimizes for COMPRESSION
- **Knowledge curation asks:** "What serves?" -> Optimizes for RICHNESS

When you optimize for compression, you get 20 mechanism names in 88 lines. When you optimize for richness, you get 6 bespoke packages of 100-200 lines each, with implementation plans, expected evidence, and constraint linkages — totaling 600-1200 lines of CURATED, SPECIFIC, ACTIONABLE knowledge.

### The Inversion

The exploration era's context windows were LARGER than the pipeline's (research packages + full HTML artifacts + stage findings = thousands of lines). But nobody was worried about context windows because the knowledge was CURATED. The researcher agent had already done the traversal, the selection, the mapping. The builder received exactly what they needed — no more, no less.

The pipeline's context windows are SMALLER (7 files, ~1,319 lines total + conviction brief). But the knowledge is UNCURATED. The builder receives everything — all 20 mechanisms, all components, all grammar rules, all density patterns — regardless of which ones serve THIS content. The builder must do the curation work that the researcher agent would have done.

**Smaller context window + uncurated knowledge = MORE cognitive work for the builder, not less.**

This is the inversion: the pipeline tried to HELP the builder by compressing knowledge into manageable files, but it BURDENED the builder by removing the curation layer that made knowledge navigable. The 7 static files are easier to LOAD but harder to USE than a curated research package.

### What "Fitting" Actually Costs

Every line removed during compression was a line of IMPLEMENTATION SPECIFICITY. The pipeline didn't compress redundancy — it compressed applicability:

- "R1-001 maps to PULSE rhythm with 48px/24px padding" -> compressed to "Dense/Sparse Alternation"
- "DD-F-001 validated across 6 explorations at HIGH confidence" -> compressed to "18/18 usage count"
- "Expected evidence: visible PULSE rhythm when scrolling" -> compressed to nothing
- "Anti-pattern: uniform padding on Q&A" -> compressed to nothing
- "CSS example: .question { padding: 48px }" -> compressed to nothing (generic value in grammar.md only)
- "Content trigger: any content with Q/A pairs" -> compressed to nothing

The builder receives the NAME. Everything that makes the name ACTIONABLE for THIS specific build was compressed away.

---

## 6. The Anti-Orphaning Principle

### The Rule

From the AD Master Execution Spec:

> "No research evaluation document may exist as a standalone output. Every evaluation must be CONSUMED by a downstream document that builders actually read."

This is an architectural principle, not a style guide recommendation. It means: if knowledge exists but no builder reads it, it is orphaned knowledge — functionally equivalent to nonexistent knowledge.

### How the Exploration Era Honored It

Three mechanisms enforced anti-orphaning:

**1. Research packages consumed findings.** Agent-0C compiled applicable findings INTO the builder's package. The finding didn't live in a research file that the builder might or might not read — it lived in the package that the builder DEFINITELY read because it was their primary input. Every finding had a clear consumption path: research -> researcher agent -> package -> builder.

**2. Provenance headers tracked consumption.** Every file's inline threading header included a CONSUMED BY field predicting which downstream documents would use it. If a finding's CONSUMED BY field was empty, that was a signal: this knowledge is at risk of orphaning. The 490 files with inline threading headers created a consumption accountability system.

**3. Formal chain documents mapped the graph.** ~50 formal chain files provided navigation, ensuring that researcher agents could FIND knowledge when compiling packages. Without navigation, knowledge is discoverable only by accident.

### How /compose Violates It

The pipeline violates anti-orphaning at every level:

**Research findings (R1-R5) are orphaned.** 337 findings live in `research/R1-DOCUMENTATION-PATTERNS.md` through `research/R5-COMBINATION-THEORY.md`. The builder never reads these files. The compose skill explicitly does NOT include them in any agent's prompt. They are consumed only by the 7 vocabulary files during the Phase C extraction — a ONE-TIME compression event, not a per-build consumption. After that compression, the 337 findings sit unread forever.

**Stage findings (DD-F through CD-F) are orphaned.** 88 stage findings live in exploration-era artifacts. No agent in the /compose pipeline reads them. They were compressed into the 20 mechanism names in mechanisms.md during extraction, but the findings themselves — with their implementation plans, expected evidence, and constraint linkages — sit unread. DD-F-006 (fractal self-similarity) became a 4-line entry in grammar.md's "Fractal Self-Similarity" section. The finding's full discovery narrative, its implementation details, its failure lessons — orphaned.

**Case studies are quasi-orphaned.** The 9 case studies in `compositional-core/case-studies/` are Phase 5-gated in the compositional-core CLAUDE.md — accessible only AFTER metaphor lock-in, only for divergence verification, not for implementation guidance. But /compose doesn't even include Phase 5 in its flow. The compose skill's builder instructions say nothing about case studies. The builder may never read them. They exist as anti-gravity safety valves in the compositional-core protocol, not as knowledge delivery mechanisms in /compose.

**PA findings are orphaned per-build.** Each PA cycle produces 5 auditor reports and a weaver synthesis. These are consumed by the fix cycle builder but NOT by any future build. When the next content is composed, the PA findings from the previous build are gone. The weaver's synthesis document (`_pa/synthesis.md`) lives in the build output directory, never read again. No accumulation. No findings production. The compose skill's output manifest shows this clearly — the `_pa/` directory is a terminal artifact, not a knowledge source.

### The Consequence

Knowledge that exists but is never consumed is dead knowledge. The pipeline sits on top of a rich accumulated knowledge base:
- 337 research findings (R1-R5)
- 88 stage findings (DD-F through CD-F)
- 24 validated explorations (DD-001 through CD-006)
- 9 case studies
- 42 EXT-* findings from OD re-enrichment

But the builder sees 7 files totaling ~1,319 lines. Everything else is orphaned. The anti-orphaning principle says: if you want the builder to benefit from DD-F-006 (fractal self-similarity), DD-F-006 must appear in a document the builder ACTUALLY READS. In the exploration era, Agent-0C embedded it in the research package. In /compose, it is compressed into a brief section in grammar.md and the builder may or may not notice it, understand it, or know how to apply it to their specific content.

---

## 7. What "Tap Into That Power" Means (Conceptual)

The investigation earned a question: What would it mean for the pipeline to have a researcher agent that does what Agent-0C did? This section describes the conceptual shape of the answer — not an implementation proposal, but a map of what the missing piece looks like.

### A Researcher Agent

An agent whose sole job is knowledge traversal and curation. It does not build. It does not evaluate. It reads the accumulated knowledge base — research findings, stage findings, case studies, grammar, mechanisms, prior build artifacts — and compiles a BESPOKE package for THIS build.

This agent would need:
- Access to the full accumulated knowledge (not just the 7 vocabulary files)
- Knowledge of the TC-derived metaphor (from the conviction brief)
- Understanding of the content's structural properties (from content analysis)
- The ability to select, filter, and map findings to THIS specific build
- Understanding of which findings are RELEVANT to this content type and metaphor

What it would produce: a research package — self-contained, per-build, with implementation-mapped findings specific to the content and metaphor. Not 337 findings dumped into context, but 15-25 findings CURATED for THIS build, with explicit rationale for why each one applies.

### Curated Packages

Not "load everything and hope the builder finds what's relevant." A curated package for FAQ-style content with a geological metaphor would be different from a package for tutorial-style content with an architectural metaphor.

Package contents (following the Agent-0C pattern):
- Soul checklist (always — same for every build, non-negotiable)
- Applicable findings from R1-R5 (selected for THIS content type, EMBEDDED not referenced)
- Applicable stage findings (selected for THIS metaphor and structural approach)
- Implementation plans with specific CSS values (derived from metaphor + content properties)
- Expected evidence (what the result should look like — perceptual criteria)
- Anti-patterns specific to THIS content type (what NOT to do)
- Constraint linkages between mechanisms being deployed (what must honor what)

The key principle: "Builder never needs to leave the package." Self-contained, complete, specific.

### Structural Propositions

Rules connecting content properties to visual properties — the category of thought that TC does not produce and the vocabulary files do not contain.

The researcher agent would generate structural propositions like:
- "This content has a confidence gradient (established -> speculative). Map to spacing compression: established sections get 64px padding, speculative sections get 24px."
- "This content has 3 hierarchy levels. Map to border-weight gradient: primary = 4px, secondary = 3px, tertiary = 1px."
- "This content transitions from narrative to technical at the midpoint. Use BRIDGE transition (3px border + background shift from var(--bg-sparse) to var(--bg-dense)) at the boundary."
- "This content has 6 Q&A pairs. Deploy PULSE rhythm with minimum 3 visible cycles. Expected evidence: visible alternating density when scrolling."

These propositions fill the gap between TC's experiential direction ("the page should feel like geological stratification") and the builder's implementation needs ("what CSS values do I use where?"). They are the RULES that GENERATE different CSS for different sections based on content properties.

### Findings Production

Every build should discover things. Not as an overhead requirement, but as a natural byproduct of thoughtful construction. The builder composes a page and notices: "For Q&A content with a conversational metaphor, the PULSE rhythm works best when answer sections use 2x the padding of question sections, not the standard 48px/24px from grammar.md." That is a finding. It should be captured, formalized, and made available to future builds.

This closes the loop:
```
Builds produce findings
  -> Findings enrich accumulated knowledge
    -> Researcher agent curates enriched knowledge
      -> Future builds benefit from prior discoveries
        -> Those builds produce new findings
          -> ...
```

The system GROWS. Each build makes the next build richer. This is what the exploration architecture did — DD built on research, OD built on DD, AD built on OD, CD built on everything. The pipeline can do the same if it produces and consumes findings.

### Quality-Oriented Assembly

The entire assembly process should be oriented toward knowledge QUALITY, not context window FIT. This means:
- The TC brief can be as long as it needs to be (the compose skill already says "NO LINE LIMIT" — this is correct)
- The research package can be as long as it needs to be (100-200 lines per the exploration era pattern)
- The combined builder input (brief + package + vocabulary) is curated for RICHNESS, not compressed for COMPACTNESS
- The constraint is QUALITY OF KNOWLEDGE, not SIZE OF WINDOW

If the builder needs 2,000 lines of context to produce a rich page, the system provides 2,000 lines. If the builder only needs 800 lines, the system provides 800 lines. The question is never "what fits?" but always "what serves?"

### The Combined Conceptual Architecture

```
Input Content
     |
     v
TC Agent -> Conviction Brief (experiential: metaphor, emotional arc, reader needs)
     |
     v
Researcher Agent -> Research Package (structural: content-to-visual rules, curated findings)
  [reads: R1-R5, DD-F through CD-F, case studies, prior build findings]
  [curates: 15-25 relevant findings with implementation maps]
  [generates: structural propositions for THIS content + metaphor]
     |
     v
Builder Input = Conviction Brief + Research Package + Vocabulary Files
     |
     v
Builder Agent -> Build (structured as hypothesis test, not assembly)
     |
     v
PA Evaluation -> Both quality assessment AND findings extraction
     |
     v
Labeled Findings -> Feed back into accumulated knowledge
     |
     v
Future Researcher Agents benefit from prior discoveries
```

This architecture preserves TC's creative power (experiential questioning, metaphor derivation, emotional conviction) and the compose skill's context isolation (PA auditors don't see the brief, builders don't see PA questions). It adds the exploration architecture's structural power: researcher curation, structural hypotheses, implementation-mapped findings, and cumulative knowledge growth.

The result is a pipeline that LEARNS — each build makes the next build richer. The exploration era proved this architecture produces 39/40 output. The question is whether it can be operationalized within a pipeline framework.

---

## Summary: The Gap Is Architectural

The gap between exploration-era output (CD-006 at 39/40, 1,019 CSS lines, 337+ findings consumed) and pipeline output is not a tuning problem. It is not "add more mechanisms" or "write a better prompt" or "use different model." It is an architectural gap: the pipeline is missing an entire layer of the build process.

| What Exploration Had | What /compose Has | Gap Type |
|---------------------|-------------------|----------|
| Researcher agent (Agent-0C) | Nothing — orchestrator loads static files | Missing layer |
| Per-build packages (100-200 lines, curated) | Same 7 files every time (~1,319 lines, generic) | Missing customization |
| Implementation-mapped findings | 20 mechanism names + brief descriptions | Missing specificity |
| Structural propositions ("density inversely correlates with confidence") | Experiential questions only ("what should the reader feel?") | Missing question category |
| Enrichment waves (43-agent re-enrichment, 6 waves) | Single pass with max 3 fix cycles | Missing iteration |
| Findings production (88 stage findings accumulated) | No feed-forward, PA results terminal | Missing accumulation |
| Anti-orphaning enforcement (every finding consumed downstream) | 337 findings orphaned, builder reads 7 files | Missing architectural principle |
| Knowledge quality orientation ("how do we make this richer?") | Context management orientation ("what fits in the window?") | Wrong framing |

The 7 vocabulary files are not WRONG. They are a valid compression of the accumulated knowledge — identity, tokens, mechanisms, grammar, components. The compose skill is not WRONG. TC derivation, context isolation, fresh-eyes PA, and fix cycles are sound engineering. But compression is not curation. Loading files is not traversal. Names are not plans. And fitting into a context window is not the same as enriching a builder's creative capacity.

The million dollar question remains: What would it mean to add that missing layer back?

---

*This document is part of the Pipeline Methodology Investigation. See also:*
- `01-MASTER-FINDINGS.md` — Core insight and evidence summary
- `02-EXPLORATION-ARCHITECTURE.md` — How explorations were built
- `04-GENERATIVE-QUESTIONS.md` — All 24 questions + TC comparison
- `05-PROVENANCE-MECHANISM.md` — Provenance and navigation system

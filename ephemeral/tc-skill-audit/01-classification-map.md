# TC Skill Line-by-Line Classification Map

Classifies every section/subsection of `SKILL.md` (842 lines) and `STANDALONE-APPENDIX.md` (232 lines) into:

- **PROCESS**: Pure compositional thinking that produces understanding -- the structured questioning, testing, and derivation that forces deep engagement with content. This IS the value of TC.
- **CHANNELING**: Content that steers creativity toward specific solutions, domains, patterns, or approaches. Biases the creative output rather than supporting the thinking.
- **COMPRESSION**: Output artifacts that exist to transmit understanding across agent boundaries (conviction brief, conventions brief, tables meant for other agents to read).
- **PIPELINE-ASSUMPTION**: Content that only exists because TC and builder were previously separate agents in a multi-agent pipeline.

---

## SKILL.md (842 lines)

### Frontmatter + Critical Principle (Lines 1-25)

| Phase/Step | Lines | Classification | Reasoning |
|-----------|-------|----------------|-----------|
| Frontmatter (name, description) | 1-4 | PIPELINE-ASSUMPTION | The description frames TC as a "skill" invoked by trigger phrases, a pipeline sub-step. In a merged model, this metadata is unnecessary. |
| Critical Principle: "You are CONSTRUCTING, not DISCOVERING" | 6-24 | **PROCESS** | This is the most important metacognitive framing in the entire skill. It forces the agent to treat metaphor selection as a creative act, not pattern-matching. Pure thinking discipline. |

---

### Pipeline Overview (Lines 27-38)

| Phase/Step | Lines | Classification | Reasoning |
|-----------|-------|----------------|-----------|
| Pipeline title + one-liner | 27-29 | PROCESS | Framing the transformation (content -> tension -> metaphor -> layout) is a conceptual model for how to think, not a pipeline routing instruction. |
| Pipeline phase diagram (ASCII) | 31-36 | MIXED: PROCESS + PIPELINE-ASSUMPTION | The conceptual phases (questioning -> tension -> metaphor -> architecture) are PROCESS. The explicit "Phase 0...Phase 4.5" numbering and "sub-skill mode" branching is PIPELINE-ASSUMPTION -- it exists because an orchestrator needs to know where to hand off. |
| Standalone appendix reference | 37-38 | PIPELINE-ASSUMPTION | Only exists because standalone mode vs sub-skill mode distinction exists, which is a pipeline routing concern. |

---

### Phase 0: Content Assessment (Lines 42-91)

| Phase/Step | Lines | Classification | Reasoning |
|-----------|-------|----------------|-----------|
| Phase 0 header + framing | 42-44 | PROCESS | "Before entering the pipeline, assess whether the content is appropriate" is genuine pre-work. You'd do this even as a single agent. |
| Step 0A: Content Type | 46-53 | **PROCESS** | Classifying content as prose-dominant/mixed/visual-dominant/self-referential determines how deeply to engage. A single-agent builder would benefit from this assessment. The routing paths (STANDARD, HYBRID, PRESENTATION-INTRINSIC, ABORT) are compositional thinking about content-form fit. |
| Step 0B: Scope | 55-60 | **PROCESS** | Adjusting pipeline depth to content length is a genuine creative judgment. Short content gets lighter treatment; long content gets segmented. Universal compositional wisdom. |
| Step 0C: Section Identification | 62-67 | **PROCESS** | Identifying sections by heading/topic/mode and classifying them (NARRATIVE/REFERENCE/CODE/DATA/MIXED) is pre-compositional analysis any builder needs. |
| Step 0D: Pipeline Entry | 69-75 | MIXED: PROCESS + PIPELINE-ASSUMPTION | "Every page runs the FULL pipeline" and "Peak richness occurs at maximum content-mechanism fit, not maximum technique count" is PROCESS wisdom. "Sub-skill mode" and "outputs via Phase 4.5" are PIPELINE-ASSUMPTION (multi-agent handoff). The "16-18 mechanisms" target is mild CHANNELING (numeric target shapes behavior). |
| Step 0E: Library Access Prohibition | 77-91 | MIXED: PROCESS + PIPELINE-ASSUMPTION | The PRINCIPLE (don't read examples before derivation = pattern-matching avoidance) is PROCESS. The specific file paths prohibited (`design-system/compositional-core/case-studies/`, etc.) are PIPELINE-ASSUMPTION -- they assume a specific file system layout used by the multi-agent pipeline. "Phase 4: Read mechanism-catalog.md ONLY" is PIPELINE-ASSUMPTION routing. |

---

### Phase 1: Multi-Axis Questioning (Lines 94-173)

| Phase/Step | Lines | Classification | Reasoning |
|-----------|-------|----------------|-----------|
| Phase 1 header + framing | 94-96 | **PROCESS** | "Read the input content deeply. For THIS SPECIFIC CONTENT, ask questions across multiple axes" is the core creative method. |
| Core Four axes table (FEEL/UNDERSTAND/DO/BECOME) | 98-106 | **PROCESS** | The 4 axes are structured questioning tools. They force the agent to examine content from emotional, cognitive, action, and transformation perspectives. This is the ENGINE of TC -- it produces understanding that a simple "design this page" prompt would never generate. |
| Extended Core (5 additional axes) | 107-117 | **PROCESS** | NAVIGATE, TRUST, EVALUATE, ORIENT, RECONCILE extend the questioning. "Always ask, mark LOW YIELD when they don't produce genuine needs" is disciplined inquiry. |
| Structural Trigger Axes (5 conditional axes) | 119-130 | MIXED: PROCESS + CHANNELING | The PROCESS part: scanning content for structural signals and deploying additional questions conditionally. The CHANNELING part: each axis prescribes specific structural patterns ("Side-by-side layout, comparison tables, parallel columns" for COMPARE). These channel creativity toward predetermined solutions rather than letting the questioning produce its own structural implications. |
| Axis Selection Protocol | 131-137 | **PROCESS** | Procedural instruction for how many axes to deploy. Genuine sequencing of the questioning method. |
| Opposition Principle | 138-148 | MIXED: PROCESS + CHANNELING | The PRINCIPLE (axes whose demands OPPOSE the system produce richer tension) is PROCESS -- a genuine insight about where creative energy lives. The SPECIFIC RANKINGS (RECONCILE = richest, FEEL = "always available", TRUST/DO/ORIENT = "cosmetic") are CHANNELING -- they pre-rank axes before the agent has even read the content, biasing which tensions get selected. |
| Axis Interaction Effects | 150-158 | CHANNELING | Pre-specified pairs (RECONCILE+IDENTIFY, NAVIGATE+COMPARE, etc.) with pre-described interaction effects. This channels the agent toward specific axis combinations rather than discovering interactions from the content itself. A truly process-oriented version would say "note pairs that produce compound tension" without specifying which pairs those are. |
| Phase 1 Output | 160-173 | COMPRESSION | The output format (table per axis with Needs and Structural Properties) is an artifact format designed to transmit information to the next phase or agent. |

---

### Phase 2: Tension Derivation (Lines 176-315)

| Phase/Step | Lines | Classification | Reasoning |
|-----------|-------|----------------|-----------|
| Phase 2 header + framing | 176-178 | **PROCESS** | "Each axis's needs creates tension against the design system constraints. The tension is where composition lives." Pure conceptual framing. |
| Side A: Reader Needs | 180-182 | **PROCESS** | Instruction to use Phase 1 output as one side of the tension. |
| Side B: KortAI Design System Personality | 184-218 | CHANNELING | This entire block encodes ONE SPECIFIC design system's personality (sharp corners, warm palette, 3 typefaces, 940-960px spine, border hierarchy). In a merged single-agent model, Side B would be derived from whatever design system the builder is working with, not hardcoded here. The personality spectrum (75% austere, 95% angular, etc.) channels every tension derivation toward KortAI-specific oppositions. |
| The Soul Test (5 questions) | 213-218 | CHANNELING | These 5 questions channel evaluation toward a specific aesthetic identity ("magazine" = pass, "Bootstrap" = fail). They encode taste, not process. |
| The Addition Test | 220-227 | **PROCESS** | "Can you fulfill the reader's need by selecting and placing existing components without transforming their meaning?" This is a BRILLIANT diagnostic that works for ANY design system. It separates genuine creative tension from assembly work. Pure process. |
| Three Criteria for Genuine Tension | 228-237 | **PROCESS** | Semantic opposition + vocabulary gap + structural overlap despite emotional opposition. These three criteria are universal -- they work for any content-system pairing. This is compositional theory. |
| Three Criteria for Cosmetic Tension | 239-244 | **PROCESS** | False opposition + direct tool available + decoration substitution. Universal diagnostic criteria. |
| The Tension Spectrum | 246-256 | **PROCESS** | NO TENSION -> COSMETIC -> WEAK GENUINE -> STRONG GENUINE -> IMPOSSIBLE. A conceptual map of tension space that helps the agent locate where their content sits. Universal. |
| Deriving Tension (6-step procedure) | 258-268 | **PROCESS** | List demands, list constraints, identify opposition, Addition Test, BECAUSE test, SUBSTITUTION test. Every step is a thinking tool. The SUBSTITUTION test ("Replace content with different topic -- does same metaphor still work?") is especially powerful process. |
| Evaluating Tension Richness | 269-279 | **PROCESS** | Opposition Depth, Structural Overlap, Metaphor Space Width as three dimensions. "These dimensions are MULTIPLICATIVE" is genuine compositional insight. "Prefer the one whose opposition creates the most SURPRISING bridge" is creative direction without channeling toward specific outcomes. |
| Tension Landscape: KortAI Quick Reference | 281-297 | **CHANNELING** | Pre-computed tension rankings specific to KortAI: "STRONGEST tensions against KortAI: warmth/comfort vs austerity (proven)." This pre-digests the creative search, channeling the agent toward known-good tensions rather than deriving fresh ones. The "ZERO tension (assembly territory)" list also channels by pre-classifying certain content types as tension-free. |
| Tension Validity Check | 298-306 | **PROCESS** | Four honest questions to validate tension. "If any check fails, accept assembly" is healthy creative humility. |
| Exit Ramp: Tension Threshold Gate | 308-315 | MIXED: PROCESS + PIPELINE-ASSUMPTION | The concept (routing based on tension quality) is PROCESS. The specific routing ("Skip Phases 3-4", "Skip Phase 3") is PIPELINE-ASSUMPTION -- it assumes a specific phase sequence managed by an orchestrator. |

---

### Phase 3: Metaphor Collapse (Lines 318-450)

| Phase/Step | Lines | Classification | Reasoning |
|-----------|-------|----------------|-----------|
| Phase 3 header + framing | 318-322 | **PROCESS** | "The metaphor is the BRIDGE between the two sides of tension" and "The tension is emotional; the bridge is structural" are foundational compositional principles. |
| Step 3.1: Extract Structural Properties from Side A | 324-333 | **PROCESS** | Transforming emotional needs into geometric/topological abstractions. "Warmth is not a structural property. Containment with visible boundaries is." This is the core translation step -- turning feelings into forms. Works for any content-system pairing. |
| Step 3.2: Extract Structural Properties from Side B | 335-342 | MIXED: PROCESS + CHANNELING | The METHOD (transform design constraints into geometric/perceptual abstractions) is PROCESS. The SPECIFIC EXAMPLES (`border-radius: 0` -> ANGULARITY, `box-shadow: none` -> FLATNESS) are CHANNELING because they pre-extract KortAI's structural properties, biasing the overlap search. |
| Step 3.3: Find the Structural Overlap | 343-348 | **PROCESS** | Comparing Side A and Side B property lists to find where emotional opposition coexists with structural agreement. Universal method. |
| Step 3.4: Generate the Search Query | 349-358 | **PROCESS** | "What real-world domain naturally exhibits [OVERLAP] while being [SIDE B GAP] yet conveying [SIDE A GAP]?" This is the creative search query format. It converts structural analysis into a generative prompt. Powerful and universal. |
| Three Search Heuristics | 360-368 | **PROCESS** | Constraint scan, content resonance, emotional valence. Three filters for narrowing metaphor space. Work for any design system. |
| Domain Search Territory | 370-372 | **CHANNELING** | Pre-enumerated list of "compatible domains to scan" (Geological, Architectural, Typographic, etc.) for "angular/flat/sharp systems." This channels metaphor search toward a pre-approved menu. The parenthetical "This is a search menu, not a lookup table" acknowledges the risk but doesn't eliminate it. |
| Incompatible Domain Families | 374-382 | CHANNELING | Pre-excludes Organic/Biological, Liquid/Fluid, Atmospheric/Weather, Textile/Fabric, Musical. These exclusions are KortAI-specific (based on angular/flat constraints) but presented as absolute rules. Channels the metaphor search by eliminating entire creative territories before the agent even considers them. |
| Step 3.5: Evaluate Candidates | 383-399 | MIXED: PROCESS + CHANNELING | The evaluation dimensions (tension resolution, structural mappings, content resonance, CSS expressibility) are PROCESS. The "6 legal channels" constraint (background, border, typography, spacing, layout, accent) is CHANNELING -- it's KortAI-specific vocabulary. The execution risk questions (dead zones, labels, uniform grids, responsive story) are PROCESS -- they're universal composition checks. |
| 6 Binary Rejection Checks (R1-R6) | 401-410 | MIXED: PROCESS + CHANNELING | R1 (zero interpretive distance), R2 (announced not structural), R4 (all transitions as empty space), R5 (6+ identical repeated elements) are PROCESS -- universal quality checks for any metaphor. R3 (container width below 940px) and R6 (soul violations) are CHANNELING -- KortAI-specific constraints. |
| Interpretive Distance gate | 412-416 | **PROCESS** | "A metaphor must travel CONCEPTUAL DISTANCE from the content to be a bridge, not a label." Universal creative principle. |
| Step 3.6: Select the Metaphor | 418-424 | **PROCESS** | Documenting the winner, why it won, what it doesn't resolve, and the isomorphism table. Disciplined creative decision-making. |
| Metaphor Failure Modes | 426-432 | **PROCESS** | Monopoly, Inflation, Forcing, Redundancy, Decay -- named failure modes with recovery strategies. Universal diagnostic toolkit. |
| The Irreducible Creative Step | 434-442 | **PROCESS** | Acknowledgment that the pipeline can't provide the metaphor, only constrain the search space. Honest about where process ends and creativity begins. |
| Cultural Consideration | 444-449 | MIXED: PROCESS + CHANNELING | "Prefer physics-grounded over culture-grounded" is mild CHANNELING (why not culture-grounded for a culturally specific audience?). "For specific audiences, leverage culturally resonant metaphors" partially corrects. |

---

### Phase 3.5: Metaphor Commitment (Lines 453-514)

| Phase/Step | Lines | Classification | Reasoning |
|-----------|-------|----------------|-----------|
| Phase 3.5 header (LOCK-IN GATE) | 453-455 | **PROCESS** | Forcing commitment before library access prevents pattern-matching. Genuine creative discipline. |
| Step 3.5A: State Your Committed Metaphor | 457-461 | **PROCESS** | Write it down, lock it in. Creative commitment as process. |
| Step 3.5B: Document WHY This Metaphor | 463-469 | **PROCESS** | Forcing articulation of reasoning. Prevents post-hoc rationalization. |
| Step 3.5C: Commitment Verification | 471-481 | MIXED: PROCESS + PIPELINE-ASSUMPTION | The self-interrogation (Did I derive independently? Can I justify without library?) is PROCESS. The specific reference to `/case-studies/_INDEX.md` and routing to "Step 3.5D" is PIPELINE-ASSUMPTION -- assumes a specific file system and orchestration flow. |
| Step 3.5D: Divergence Justification | 483-495 | MIXED: PROCESS + PIPELINE-ASSUMPTION | The questioning rigor (trace derivation path, different structural isomorphisms) is PROCESS. The specific table format and file references are PIPELINE-ASSUMPTION. |
| Metaphor Lock Escalation | 497 | **PIPELINE-ASSUMPTION** | "Trigger TYPE C fix cycle (full TC re-invocation)" assumes multi-agent pipeline where TC is a separable skill that gets re-invoked by an orchestrator. |
| Step 3.5E: Creative Check | 499-503 | **PROCESS** | "Are you EXCITED about this metaphor? Can you see the finished page in your mind?" This is metacognitive quality control. If the metaphor feels like compliance, revisit. Captures the difference between mechanical execution and creative engagement. |
| Phase 3.5Z: Zone Architecture (Sub-Skill Mode Only) | 505-514 | MIXED: COMPRESSION + PIPELINE-ASSUMPTION | Zone architecture derivation (zone count, naming, semantic direction, density, content mapping) is compositional thinking (PROCESS). But the "Sub-Skill Mode Only" qualifier and the output format (structured for downstream agent consumption) make this primarily COMPRESSION with PIPELINE-ASSUMPTION framing. |

---

### Phase 4: Compositional Architecture (Lines 517-651)

| Phase/Step | Lines | Classification | Reasoning |
|-----------|-------|----------------|-----------|
| The Governing Evaluation (RICHNESS formula) | 519-529 | **PROCESS** | RICHNESS = SEMANTIC DENSITY x RESTRAINT x SPATIAL CONFIDENCE. This is compositional theory. "Zero in any factor = zero richness" is a powerful design principle. "Build boundary-by-boundary, not channel-by-channel" is a genuine method insight. |
| "Build boundary-by-boundary" instruction | 531 | **PROCESS** | A compositional METHOD instruction: write all channels simultaneously at each boundary, rather than all backgrounds first. This produces coherent transitions. |
| The 6 CSS Channels | 533-544 | CHANNELING | The 6 specific channels (background color, border, typography, spacing, layout, color accent) with their specific constraints (3 weights only, 3 fonts, primary red, 5 accent colors) encode KortAI's vocabulary. Universal TC would list "identify the available channels in your design system." |
| Step 4.0: Mechanism Library Access | 546-559 | MIXED: PIPELINE-ASSUMPTION + CHANNELING | "You may NOW consult mechanism-catalog.md" is PIPELINE-ASSUMPTION (assumes phased library access in a pipeline). "Deploy mechanisms across all 5 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation)" is CHANNELING -- the 5-category taxonomy channels deployment toward a specific organizational scheme. The principle "document why each mechanism serves THIS content" is PROCESS. |
| Step 4.1: Extract Metaphor Physical Properties (5-Category Taxonomy) | 562-583 | MIXED: PROCESS + CHANNELING | The 5-category extraction (Spatial, Temporal, Material, Behavioral, Relational) is PROCESS -- it's a thorough way to mine a metaphor for compositional properties. The DENSITY PATTERNS table (CRESCENDO, F-PATTERN, BENTO, PULSE) is CHANNELING -- it pre-enumerates 4 spatial organizations rather than letting them emerge from the metaphor. |
| Step 4.2: Pacing Assessment | 585-599 | **PROCESS** | Questions about section count, empty transitions, repeated elements, dramatic peak placement, transition types. These are compositional rhythm questions that work for any page. The 3 transition types (SMOOTH, BRIDGE, BREATHING) are a useful vocabulary, not channeling -- they describe categories of experience, not specific implementations. |
| Step 4.3: Coherence | 601-616 | **PROCESS** | Multi-coherence principle: at every zone boundary, >=3 of 6 channels must shift simultaneously, all encoding the SAME semantic direction. This is the core compositional insight that separates "composed" from "formatted." The transition table format is a thinking tool. Universal. |
| Step 4.4: Components: Adapt Before Inventing | 617-625 | **PROCESS** | Three-question gate before inventing new components: can existing be adapted? can layout alone express it? is it necessary? Universal restraint principle. |
| Step 4.5: Fractal Consistency | 627-641 | **PROCESS** | Same design pattern visible at 5 zoom levels (Navigation, Page, Section, Component, Character). "3 strong beats 5 weak" is practical wisdom. Universal compositional principle. |
| Step 4.6: Concept-Based CSS Naming | 643-651 | MIXED: PROCESS + CHANNELING | The PRINCIPLE (name by concept not position, `--stratum-bedrock` not `--bg-z2`) is PROCESS -- it forces metaphor commitment into the code itself. The specific examples (`--dispatch-open`, `--stratum-surface`) are mild CHANNELING toward geological/military vocabulary. |

---

### Phase 4.5: Conviction Brief (Lines 654-788)

| Phase/Step | Lines | Classification | Reasoning |
|-----------|-------|----------------|-----------|
| Phase 4.5 header + framing | 654-658 | **PIPELINE-ASSUMPTION** | "When invoked by /build-page (sub-skill mode): Stop here." This entire phase exists because TC and builder are separate agents. The conviction brief IS the handoff document. |
| Conviction Brief Format intro | 660 | COMPRESSION | "~80-120 lines" sizing for another agent's context window. |
| Section 1: WORLD-DESCRIPTION | 666-676 | MIXED: COMPRESSION + PROCESS | The FORMAT (world-description for the builder) is COMPRESSION. But the CONTENT FRAMEWORK (world as physics not prohibition, metaphor as natural law, content's specific gravity, BECAUSE statement, risk profile) is PROCESS -- it forces the TC agent to synthesize their understanding into a coherent worldview. Even a single agent would benefit from articulating this. |
| Section 2: CALIBRATION | 679-691 | MIXED: COMPRESSION + CHANNELING | The FORMAT (calibration ranges transmitted to builder) is COMPRESSION. The specific calibration dimensions (background arc as hex progression, spatial arc as padding, type arc as voice changes) are CHANNELING toward KortAI-specific parameters. The principle "ranges inherently satisfy perception thresholds without stating them" is sophisticated PROCESS. |
| "Creative authority: 80%" | 691 | PIPELINE-ASSUMPTION | Allocating creative authority as a percentage only makes sense when dividing responsibility between agents. A single agent has 100% creative authority within system constraints by definition. |
| Section 3: OPPOSITION MAP | 695-706 | MIXED: COMPRESSION + PROCESS | The FORMAT (opposition points transmitted to builder) is COMPRESSION. The CONTENT FRAMEWORK (state opposition as creative invitation, name what EMERGES from the fight, identify dominant and unresolved oppositions) is PROCESS -- forces sophisticated synthesis of tension analysis. |
| Section 4: COMPOSITIONAL ARC | 709-722 | MIXED: COMPRESSION + PROCESS | The FORMAT (arc as journey for builder) is COMPRESSION. The FRAMEWORK (experience narrative, transition feelings, climax, resolution, creative waypoints) is PROCESS -- forces the TC agent to think about the page as temporal experience, not spatial layout. |
| Section 5: CREATIVE CONDITIONS | 725-737 | MIXED: COMPRESSION + CHANNELING | The FORMAT (experimental invitations for builder) is COMPRESSION. The specific reference to "D-02 (Room Perception), D-03 (Signing Frame), D-04 (Second-Half Moment), D-06 (Negative Space as Shape), D-09 (Quiet Zone)" is CHANNELING -- it channels the builder toward specific disposition system entries. The CONCEPT (experimental invitations) is PROCESS. |
| Section 6: CONTENT MAP | 740-750 | COMPRESSION | A compressed map of content structure, register shifts, emotional beats, word counts, structural features. Pure transmission artifact for downstream builder. |
| How Guardrails Survive Without Explicit Statement | 753-763 | **PIPELINE-ASSUMPTION** | Explains how the conviction brief works within the multi-agent pipeline (gate runner verifies, conventions brief carries mechanical constraints, conviction establishes direction before compliance). Only relevant in a multi-agent context. |
| Exploration Recommendation | 767-788 | MIXED: PIPELINE-ASSUMPTION + PROCESS | The CONCEPT (select explorations by GENERATIVE OPPOSITION, not similarity; exclude matching exploration) is PROCESS -- it's a sophisticated loading strategy. The FORMAT (exploration IDs, line counts, "for builder context window") is PIPELINE-ASSUMPTION -- it assumes a builder agent with a separate context window that needs to be loaded with reference material. |

---

### Phase 4.7: Builder Reflection Protocol (Lines 791-821)

| Phase/Step | Lines | Classification | Reasoning |
|-----------|-------|----------------|-----------|
| Phase 4.7 header + framing | 791-793 | MIXED: PROCESS + PIPELINE-ASSUMPTION | "The builder writes this AFTER completing the artifact, BEFORE any audit" is PIPELINE-ASSUMPTION (assumes separate builder and auditor agents). The concept of post-build reflection is PROCESS. |
| 6 Dimensions of Reflection | 795-821 | MIXED: PROCESS + COMPRESSION | The 6 dimensions (CONVICTION, ALTERNATIVES, SURPRISES, IMPULSES, EXPERIENCE, UNRESOLVED) are **PROCESS** -- they force genuine metacognitive engagement with the creative work. "What I was AIMING AT" (conviction), "Creative paths not taken" (alternatives), "Moments where the content revealed something unexpected" (surprises), "Creative energy that was suppressed" (impulses), "Describe what you experience scrolling" (experience), "Roads not taken that remain valid" (unresolved). These are universally valuable creative reflection tools. |
| Reflection Rules | 815-821 | MIXED: PROCESS + PIPELINE-ASSUMPTION | "Written BEFORE audit" and "Written BY the builder" are PIPELINE-ASSUMPTION (assume separate builder and auditor). "Written as DIRECTION, not FINDINGS" is PROCESS. "The reflection travels WITH the artifact to the next context window" is PIPELINE-ASSUMPTION. |

---

### Fix Cycle + Closing (Lines 825-842)

| Phase/Step | Lines | Classification | Reasoning |
|-----------|-------|----------------|-----------|
| Fix Cycle Re-Invocation Protocol | 825-838 | **PIPELINE-ASSUMPTION** | TYPE A/B/C fix cycles, escalation paths, "Full TC re-invocation," "IMPROVE builder isolation," "the IMPROVE builder receives the conviction brief, the reflection, and the artistic impression" -- all assume a multi-agent pipeline with distinct TC, builder, auditor, and improve-builder roles. |
| Standalone appendix reference | 840-842 | PIPELINE-ASSUMPTION | Routing instruction for standalone vs sub-skill mode. |

---

## STANDALONE-APPENDIX.md (232 lines)

### Header + Phase 5 Output (Lines 1-59)

| Phase/Step | Lines | Classification | Reasoning |
|-----------|-------|----------------|-----------|
| Header + mode routing | 1-7 | PIPELINE-ASSUMPTION | "When invoked as a sub-skill by /build-page, the TC agent stops at Phase 4.5 and does NOT use this appendix." Multi-agent routing logic. |
| Output A: Conventions Brief | 13-35 | **COMPRESSION** | The conventions brief (telescope distillate, ~60-80 lines) exists to transmit understanding to a downstream builder. 4 sections (Content Direction, Zone Semantic Map, Core Principle, CSS Domain Extrapolation) are all structured for inter-agent communication. |
| Output A-Full: Thought Process Document | 37-49 | MIXED: PROCESS + COMPRESSION | The 10-step explicit process documentation is PROCESS (forces showing every step). The FORMAT (as a "reference/audit" document) is COMPRESSION. |
| Output B: HTML Compositional Layout | 51-59 | PROCESS | The actual creative output -- building the HTML page. This is what the entire pipeline has been working toward. In standalone mode, TC does the building itself, which is the merged model. |

---

### Edge Cases & Failure Modes (Lines 62-90)

| Phase/Step | Lines | Classification | Reasoning |
|-----------|-------|----------------|-----------|
| Structureless Content | 64-65 | **PROCESS** | Recognizing when content doesn't need metaphor. Routes to cosmetic tension exit. Universal diagnostic. |
| Already-Visual Content | 67-68 | **PROCESS** | Recognizing content that already has visual structure. Routes to PRESENTATION-INTRINSIC path. |
| Emotionally Flat Content | 70-71 | **PROCESS** | Recognizing low emotional yield. Double-weight DO and UNDERSTAND. "Accept 'no metaphor' as optimal outcome" is creative maturity. |
| Zero-Tension Content | 73-74 | **PROCESS** | Recognizing perfect alignment. Route to zero-tension path. |
| Maximum-Tension Content | 76-77 | **PROCESS** | Recognizing maximum opposition. "Pipeline's sweet spot. No fix needed." |
| Scale Problems | 79-80 | **PROCESS** | Scope adjustment for short/long content. |
| Multi-Metaphor Content | 82-83 | **PROCESS** | "One metaphor with movement-level variations, not a collage." Universal compositional principle. |
| Equal-Richness Axes (tiebreaker) | 85-86 | MIXED: PROCESS + CHANNELING | Tiebreaker hierarchy "most shared structural DNA > UNDERSTAND > FEEL > BECOME > DO" channels axis selection toward a predetermined priority. Why UNDERSTAND over FEEL? This is a design choice presented as procedure. |
| Determinism | 88-89 | **PROCESS** | Acknowledging that multiple valid metaphors exist for the same content. "Creative scaffold, not a compiler." |

---

### Phase 5: Divergence Verification (Lines 93-170)

| Phase/Step | Lines | Classification | Reasoning |
|-----------|-------|----------------|-----------|
| Phase 5 header + framing | 93-104 | MIXED: PROCESS + PIPELINE-ASSUMPTION | The CONCEPT (verify your metaphor diverges from existing library) is PROCESS. The specific file path references (`design-system/compositional-core/case-studies/`) are PIPELINE-ASSUMPTION. |
| Step 5.1: Select Similar Case Studies | 106-114 | PIPELINE-ASSUMPTION | Assumes existence of a case study library at a specific path, with an `_INDEX.md` file. Only relevant in the current pipeline's file system. |
| Step 5.2: Divergence Comparison Table | 116-126 | **PROCESS** | The 5 comparison dimensions (metaphor domain, structural isomorphisms, section architecture, vocabulary, mechanisms) are genuine divergence evaluation. Would work for any reference comparison. |
| Step 5.3: Divergence Verdict | 128-136 | **PROCESS** | Threshold-based divergence evaluation (3+ DIFFERENT = novel, 3+ SAME = convergence detected). Clean binary gate. |
| Step 5.4: Convergence Justification | 138-158 | **PROCESS** | 4 questions with strong evidence requirements. "If justification FAILS: Regenerate with explicit constraint." Rigorous creative integrity check. |
| Step 5.5: Extraction of Mechanisms | 160-170 | MIXED: PROCESS + PIPELINE-ASSUMPTION | The CONCEPT (identifying what's new vs what's in library) is PROCESS. "Document them for future library addition" is PIPELINE-ASSUMPTION (assumes a maintained library). |

---

### Additional Edge Cases (Lines 174-180)

| Phase/Step | Lines | Classification | Reasoning |
|-----------|-------|----------------|-----------|
| Stale Tension | 174-175 | **PROCESS** | "Force a DIFFERENT metaphor by adding constraints." Creative constraint technique. |
| Artificial Tension | 177-178 | **PROCESS** | BECAUSE test for detecting manufactured needs. Universal diagnostic. |

---

### Test Content Recommendations (Lines 182-200)

| Phase/Step | Lines | Classification | Reasoning |
|-----------|-------|----------------|-----------|
| Test content descriptions | 182-200 | **CHANNELING** | Pre-specifies which pipeline phases each content piece stresses, predicts metaphor spaces ("Geological strata, Architectural, Cartographic" for Gas Town). Channels future testing toward specific content-metaphor pairings. |

---

### Invocation (Lines 203-215)

| Phase/Step | Lines | Classification | Reasoning |
|-----------|-------|----------------|-----------|
| Invocation instructions | 203-215 | PIPELINE-ASSUMPTION | `/tension-composition [content-path]` invocation format assumes a skill system with trigger phrases. |

---

### Appendix: Test Results Summary (Lines 218-232)

| Phase/Step | Lines | Classification | Reasoning |
|-----------|-------|----------------|-----------|
| Test results (6 findings) | 218-232 | MIXED: PROCESS + CHANNELING | Finding 1 ("Pipeline predicts richness, not quality") is PROCESS. Finding 3 ("Best layouts had IMPLICIT metaphors, worst had EXPLICIT") is PROCESS. Finding 4 ("Dead zone epidemic") is PROCESS. Finding 2 ("Pipeline disagreed with auditors on ALL THREE top picks") is meta-PROCESS. Finding 5 ("Stats bars universally weak") is CHANNELING (biases against specific component type). Finding 6 ("Zero soul violations") is KortAI-specific. |

---

## Summary Statistics

### SKILL.md (842 lines)

| Classification | Estimated Lines | Percentage |
|---------------|----------------|------------|
| **PROCESS** (pure) | ~310 | 37% |
| **PROCESS** (in mixed sections) | ~140 | 17% |
| **CHANNELING** (pure) | ~85 | 10% |
| **CHANNELING** (in mixed sections) | ~75 | 9% |
| **COMPRESSION** (pure) | ~25 | 3% |
| **COMPRESSION** (in mixed sections) | ~55 | 6% |
| **PIPELINE-ASSUMPTION** (pure) | ~65 | 8% |
| **PIPELINE-ASSUMPTION** (in mixed sections) | ~87 | 10% |

### STANDALONE-APPENDIX.md (232 lines)

| Classification | Estimated Lines | Percentage |
|---------------|----------------|------------|
| **PROCESS** (pure + mixed) | ~95 | 41% |
| **CHANNELING** (pure + mixed) | ~30 | 13% |
| **COMPRESSION** (pure + mixed) | ~50 | 22% |
| **PIPELINE-ASSUMPTION** (pure + mixed) | ~57 | 24% |

### Combined Totals (1,074 lines)

| Classification | Estimated Lines | Percentage |
|---------------|----------------|------------|
| **PROCESS** (pure + in mixed) | ~545 | 51% |
| **CHANNELING** (pure + in mixed) | ~190 | 18% |
| **COMPRESSION** (pure + in mixed) | ~130 | 12% |
| **PIPELINE-ASSUMPTION** (pure + in mixed) | ~209 | 19% |

---

## Key Findings

### 1. The PROCESS core is genuinely valuable (~51%)
Phases 1-3 (multi-axis questioning, tension derivation, metaphor collapse) contain the real compositional thinking method. The Addition Test, BECAUSE test, SUBSTITUTION test, and 3 criteria for genuine tension are universally applicable tools. These survive any refactoring.

### 2. CHANNELING is concentrated in two areas (~18%)
- **Side B / KortAI personality encoding** (Phase 2, lines 184-218, 281-297): Hardcodes one specific design system's personality, channeling all tension derivation toward KortAI-specific oppositions.
- **Domain search constraints** (Phase 3, lines 370-382): Pre-enumerates compatible/incompatible domains, narrowing metaphor search before it begins.

### 3. COMPRESSION exists almost entirely in Phase 4.5 (~12%)
The conviction brief format (Sections 1-6) is the primary compression artifact. It exists to transmit TC's understanding to a downstream builder. In a merged model, this compression is unnecessary -- the understanding stays in the same context window.

### 4. PIPELINE-ASSUMPTION is distributed throughout (~19%)
Every "sub-skill mode" reference, every "Phase 4.5: Stop here," every fix-cycle escalation path, every exploration loading instruction assumes the multi-agent pipeline. These are structural load-bearing elements that would need removal or rethinking in a merged model.

### 5. The highest-value content is in Phases 1-2
Multi-axis questioning (Phase 1) and tension derivation (Phase 2, excluding Side B hardcoding) are where TC's unique contribution lives. These phases force the agent to engage deeply with content in a way that "design this page" never would. They produce UNDERSTANDING, not just instructions.

### 6. Phase 4 (Compositional Architecture) is the most mixed
It contains genuine compositional principles (richness formula, boundary-by-boundary building, coherence, fractal consistency) alongside significant channeling (6 CSS channels, mechanism library access, density patterns, concept naming examples). Separating process from channeling in Phase 4 would be the hardest refactoring task.

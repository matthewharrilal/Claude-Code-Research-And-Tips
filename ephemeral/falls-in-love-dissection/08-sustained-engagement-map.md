# Sustained Engagement Map: The Depth Accumulation Curve

**Date:** 2026-03-03
**Task:** Map what cognitive capabilities emerge at different time horizons during sustained building
**Sources:** AD-006 archaeology (9 layouts, 1,132 CSS lines, 96 classes), OD-005 archaeology (5 layouts, 908 CSS lines, 76 classes), OD-006 CSS (fractal annotations, scroll witness, 6 organizational patterns), exploration process reconstruction (149 OD agents, 23+ CD agents), cognitive mechanism definition (content-topology formation), attention dilution analysis (0.14 engagement ratio), maximum effort architecture (11-phase $150-200 spec)

---

## 1. The Depth Accumulation Curve

### The Core Claim

Time does not produce more output. It produces qualitatively different output. The relationship between sustained engagement and quality is not linear (more time = more CSS lines) but phase-transitional (certain capabilities become possible ONLY after threshold durations of engagement). Each phase transition unlocks a cognitive capability that was literally impossible at the prior level.

The evidence for this comes from three converging sources:
1. The exploration build process, where DD builders (simple, fast) produced categorically different output than CD builders (complex, multi-stage)
2. The CSS forensics of AD-006 vs OD-005, where structural invention density differs by 3x despite similar CSS budgets
3. The content-topology formation mechanism, where multi-hop content-to-spatial associations require processing time that cannot be compressed

---

### Phase 0: Content Scanning (0-5 minutes)

**What the builder KNOWS:**
- Topic identification: "This article is about X"
- Section count and rough structure: "It has 7 sections"
- Length estimate: "It is ~3,000 words"
- Content type: "It is analytical / narrative / instructional"
- Nothing about the article's argument, internal tensions, or structural implications

**What DECISIONS become possible:**
- Zone count (how many sections in the HTML)
- Basic vertical stacking order
- Component selection (callouts, code blocks, tables -- based on surface features like "this section has code")
- Font assignment (serif headings, sans body -- the locked system decisions, not creative ones)

**Example invention possible at this depth:** None. Layout is `display: block` vertical stacking with centered max-width container. Every decision is generic -- swapping in a different article would change nothing about the CSS.

**Output quality if stopped here:** Pipeline-level (0/10 on content-topology criteria). This is what the current pipeline produces because the builder's 0.6% content engagement and mandated reading order (package first, then brief, then content) means the builder never advances beyond this phase for the ARTICLE ITSELF. The builder may reach deeper phases for the PACKAGE (understanding deployment instructions) but those are procedural phases, not content phases.

**Evidence:** The attention dilution analysis found 8 lines out of 1,410 engage with article content. Line 21 of Builder Pass 1 -- "Map its sections to zones based on the brief's compositional arc" -- is the only instruction that asks for content-spatial mapping, and it immediately constrains the mapping to the TC brief's pre-existing arc. This is scanning, not understanding.

---

### Phase 1: Structural Recognition (5-15 minutes)

**What the builder KNOWS:**
- Argument structure: "This article builds from X to Y" or "This article compares A and B"
- Key sections: "Section 3 is the densest argument; section 6 is the synthesis"
- Emotional arc: "It starts with a provocative claim, builds evidence, then resolves"
- Content types per section: "Section 2 is comparison, section 4 is progressive deepening"
- Beginning awareness of internal tensions: "The author claims X but the evidence actually suggests Y"

**What DECISIONS become possible:**
- Intentional zone variation: "Dense sections should FEEL denser than breathing sections" (not just different backgrounds -- different spatial structures)
- Content-type-to-layout mapping: "The comparison section warrants side-by-side columns" (generic mapping, not yet content-specific)
- Density arc planning: "The page should build from sparse to dense" (CRESCENDO) or "should alternate" (PULSE)
- Rough asymmetric grid decisions: "Main content deserves more space than sidebar" (3fr/1fr split)

**Example invention possible at this depth:** OD-005's hub-spoke architecture. The decision "this article about navigational concepts should ITSELF be navigable" is a Phase 1 insight -- it maps content TYPE to layout TYPE. The builder recognized that the content was about spatial navigation and chose a spatial navigation layout. This is a one-hop content-to-spatial association: content about navigation → navigable layout.

**Output quality if stopped here:** Competent single-concept layout (3-4/10). One clear structural idea. Multiple sections but all using the same spatial logic. The hub-spoke is implemented but without the wave visualization, the fractal compliance, or the density oscillation detail. This is roughly where a 15-minute Sonnet builder would land -- a clear concept, competently executed, with limited structural vocabulary.

**Evidence:** OD-005 has 5 spatial organizations but they are all variations of the same vocabulary (grid + flex). The hub-spoke is the ONE structural idea. Everything else (content-sidebar split, wave diagram, fixed indicator, footer grid) serves the hub-spoke. The page is organized around a single Phase 1 insight. Its 908 CSS lines are spent on execution depth (meticulous callouts, code blocks, responsive breakpoints) rather than structural breadth. This is what "high craft, low invention" looks like.

---

### Phase 2: Content-Form Hypotheses (15-30 minutes)

**What the builder KNOWS:**
- Multi-hop associations: "Section 3's comparison of paradigms implies not just side-by-side columns but ASYMMETRIC columns because the new paradigm is presented as more important"
- Spatial implications of argument structure: "The article converges five threads into one synthesis, suggesting the page should physically narrow"
- Metaphor-spatial connections: "The geological layering metaphor implies strata that compress with depth"
- Content rhythm: "This section breathes, this section compresses, this transition needs to be felt as a shift"
- Beginning awareness of self-reference opportunities: "This article about design patterns could itself demonstrate those patterns"

**What DECISIONS become possible:**
- Content-semantic grid names: `grid-template-areas: "doctrine references"` instead of `grid-template-columns: 1fr 1fr`. The builder names layout regions after what they CONTAIN because they have understood what each region means.
- Asymmetric proportions driven by meaning: `1.618fr` for the hub column because synthesis content deserves golden-ratio emphasis, not because golden ratio is a "nice technique"
- Multiple distinct layouts per page: "Each section's argument structure is different, so each section's spatial structure should be different" -- the insight that a compound page is possible
- Zone background semantics: Using `zone-sparse`, `zone-dense`, `zone-breathing` not as alternating decoration but as content-density encoding

**Example invention possible at this depth:** AD-006's section-by-section compound architecture. The decision "each section gets its OWN axis pattern because each section makes a different KIND of argument" requires understanding all 7 sections deeply enough to identify their individual argument types. Z-pattern for overview (diagonal sweep matches establishing-shot reading behavior). F-pattern for analytical content (horizontal scanlines match close-reading behavior). Bento for catalog content (asymmetric grid matches hierarchical browsing). Spiral for progressive depth (golden ratio narrowing matches conceptual deepening). Hub-spoke for synthesis (center-emphasis matches convergence logic).

This is a multi-hop chain: section content → argument type → reading behavior → spatial form → CSS implementation. Each hop requires understanding from the previous hop. The chain cannot be compressed into a shortcut.

**Output quality if stopped here:** Structurally ambitious but texturally unfinished (5-6/10). The compound architecture exists but without self-referential components, confidence-mapped color semantics, or the fractal annotation layer. The spatial SKELETON is correct but the spatial TEXTURE is generic. This is approximately what Phase 5 (BUILD-1) in the maximum effort architecture would produce before evaluation feedback.

**Evidence:** The exploration process reconstruction shows that Wave 1 CD builders (who had less accumulated context) produced structurally competent pages (1,500-1,700 CSS lines) but the crown jewel quality emerged only in Wave 2 builders who inherited Wave 1's identity delta. The first structural pass is necessary but insufficient. The compound skeleton (multiple layouts) is a Phase 2 achievement. The compound SOUL (each layout serving its section's specific meaning) requires Phase 3.

---

### Phase 3: Content-Topology Formation (30-60 minutes)

**What the builder KNOWS:**
- Persistent spatial hypothesis: "This page's foundational logic is sequential compound -- one attention topology per section, temporal not spatial" (AD-F-024)
- Content-driven CSS vocabulary: Border colors as confidence encoding (blue = validated, green = established, amber = exploratory, purple = speculative). This is not "choosing nice colors" -- it is translating the article's EPISTEMOLOGICAL STRUCTURE into CSS.
- Self-referential awareness: "This page about compound patterns should CONTAIN a miniature of its own compound structure" (pattern echo grid insight)
- Transition grammar: "The shift from Z-pattern to F-pattern should feel like X" -- understanding that the TRANSITIONS between sections are themselves content-carrying structural decisions
- Deep vocabulary fluency: knowing not just that `writing-mode: vertical-lr` exists but that THIS section's fractal annotation concept DEMANDS vertical text in the margin because the content is about self-similar scales and the annotation IS the self-similarity

**What DECISIONS become possible:**
- Self-referential components: The pattern echo grid (6 CSS-only miniatures of axis patterns, including a 6th cell that depicts the compound page itself -- a Hofstadterian strange loop)
- Confidence-mapped color semantics: Border-left colors that ENCODE the content's epistemological structure, not just decorate it
- Fractal annotation layers: Vertical text in margins that LABELS the page's own fractal scales
- CSS-only visualizations: Pure pseudo-element art that draws abstract pattern signatures using border properties alone
- Content-form coupling that would survive the "swap test": removing the layout from any section would lose an argument the content is making

**Example invention possible at this depth:** AD-006's pattern echo grid. This is NOT a technique from any catalog. No research finding prescribed it. No mechanism name references it. It emerged from the builder's sustained engagement with content ABOUT patterns, producing the insight that a page about axis patterns should SHOW those patterns as a self-aware visual index. The implementation (pure CSS pseudo-elements: `::before` with `border-top/bottom` for Z, `skewX(-30deg)` for the diagonal, nested `border-*` for spiral) requires both spatial reasoning about how borders create shapes AND content understanding about what each pattern looks like abstractly. Neither capability alone produces this component.

**Output quality if stopped here:** Structurally inventive with content-form coupling (7-8/10). Multiple distinct layouts, self-referential components, semantic color mapping. The page is recognizably a different category of work from pipeline output. However, it may still have: inconsistent visual grammar across sections, responsive breakpoints that don't fully account for all layout complexities, spacing irregularities, and missing polish. This is the first draft of a masterwork -- architecturally correct, texturally rough.

**Evidence:** AD-006's archaeology reveals 7 FIX references (FIX-012, FIX-013, FIX-020, FIX-022, MF-001, MF-002, MF-004) applied post-initial-build. The 960px bento breakpoint (MF-002) was added because "Bento 4-column grid text becomes unreadable below ~960px" -- a perceptual issue discovered only AFTER the structural foundation was built. The drop-cap disable in grid cells (FIX-013) was discovered post-build. This means the Phase 3 output, while structurally brilliant, required subsequent evaluation and correction.

**This is the "falls in love" threshold.** The content-topology formation described in `02-cognitive-mechanism-definition.md` occurs at this phase. The 10 falsifiable criteria (named grid areas, asymmetric proportions, layout-loss = content-loss, self-referential components, relative/absolute composition, color semantics, spatial diversity, animation density, content-reasoning comments, non-default reading directions) begin to score PASS here. Before Phase 3, output scores 0-2/10. After Phase 3, output scores 7+/10. The transition is not gradual -- it is a phase change.

---

### Phase 4: Compositional Deepening (60-120 minutes)

**What the builder KNOWS:**
- Everything from Phase 3 PLUS the ability to evaluate its own structural decisions against the content topology
- Perceptual calibration: "The 32px gap between these sections feels too tight given the conceptual shift" or "This zone boundary needs a breathing zone because the reader needs recovery after the dense spiral section"
- Visual grammar consistency: The solid offset `::after` technique is applied to the MOST IMPORTANT element in each layout (bento-featured, choreo-hub, offset-container) creating a consistent "featured item" visual grammar
- Responsive degradation intelligence: Not just "collapse to single column at 768px" but "the bento grid's 4-column layout should collapse to 2-column at 960px BEFORE going to single-column at 768px because the featured item needs to maintain its 2x span as long as possible"
- Cross-section coherence: The three-tier border system (Cat 1 structural/3px, Cat 2 separator/1px subtle, Cat 3 micro/1px) is applied consistently across ALL 7 section layouts. This consistency could not have been designed upfront -- it emerges from building multiple layouts and discovering which border weights feel right at each structural level.

**What DECISIONS become possible:**
- Multi-breakpoint responsive strategies specific to each layout (not a single breakpoint policy but per-layout responsive plans)
- Consistent visual grammar across structurally diverse sections (same border category system, same zone background semantics, same spacing tokens -- applied to 9 different layouts)
- Transition design between sections: "The Cat 1 3px solid border between sections is not just a separator -- it is the page's heartbeat, the structural rhythm that UNIFIES the compound architecture"
- Polish decisions: "The axis indicator should be sticky at top: 3px (just below the scroll witness) so the reader always knows which compound section they are in"
- Discovery log: documenting findings (AD-F-021 through AD-F-028) as a self-aware component within the page itself

**Example invention possible at this depth:** The three-tier border category system applied as a page-wide visual grammar. Cat 1 (3px solid) marks structural boundaries. Cat 2 (1px solid subtle) marks separators within sections. Cat 3 (1px solid) marks micro-borders on code and small elements. Every border in the file is annotated with its category. This system could not have been designed in isolation -- it emerges from the builder having written 7 different section layouts and discovering that border weight MEANS something consistent across all of them. It is a pattern recognized THROUGH building, not specified BEFORE building.

**Output quality if stopped here:** Polished structural masterwork (8-9/10). This is approximately where AD-006 landed after its initial build plus fix cycle. The compound architecture is fully realized, self-referential components are present, visual grammar is consistent, responsive degradation is intelligent. Remaining issues are micro-perceptual: specific spacing values, specific border-color choices, specific responsive breakpoint fine-tuning.

**Evidence:** AD-006's axis-layer CSS is 716 lines. The locked-layer (shared DNA) is 416 lines. The 716 creative lines contain 72 major section dividers (`===`), 14 minor section dividers (`---`), and approximately 25 border category annotations. This comment architecture is ITSELF evidence of Phase 4 engagement -- the builder is organizing and annotating its own CSS with a consistent system that references content meaning ("Section 1: Z-PATTERN -- Overview Establishing Shot (R4-050, R4-083) / Density: PULSE"). A builder at Phase 2 writes CSS. A builder at Phase 4 writes CSS that DOCUMENTS its own structural reasoning.

---

### Phase 5: Iterative Refinement (120-180 minutes)

**What the builder KNOWS:**
- Everything from Phase 4 PLUS external feedback (from evaluation agents or self-evaluation)
- Perceptual delta awareness: "The background difference between zone-sparse (#FEF9F5) and zone-dense (#FFFFFF) is 6 RGB points in the red channel, 6 in green, 5 in blue -- this is barely perceptible at normal viewing distance. The zone-breathing background (#FAF5ED) has a 10-point delta. These are the MINIMUM viable deltas."
- Interaction layer awareness: "Hover states on the choreo-hub should have a subtle border-color transition because the hub is the gravitational center -- it should RESPOND to the reader's attention"
- Accessibility integration: "The skip-link placement, ARIA landmarks, print stylesheet, reduced-motion media query -- these are not afterthoughts but structural decisions that must be consistent with the compound architecture"

**What DECISIONS become possible:**
- Micro-typographic refinements informed by content rhythm: adjusting letter-spacing from 0.1em to 0.05em on specific labels because the section's content is more intimate
- Perceptual minimum enforcement: verifying that background deltas are >= 15 RGB points, that spacing creates discernible grouping, that border weight categories are visually distinguishable
- Cross-breakpoint responsive polish: adding the 960px bento early-collapse breakpoint (MF-002) because the builder (or evaluator) noticed text unreadability
- FIX-level corrections: disabling drop-caps in grid cells (FIX-013), standardizing grid gaps to 32px (FIX-020), correcting border-left widths (FIX-022)

**Example invention possible at this depth:** The 960px intermediate breakpoint for the bento grid. This is not a structural invention -- it is a PERCEPTUAL invention. The builder discovered (through building, testing, or evaluation feedback) that the jump from 4-column bento at 1024px to single-column at 768px was too violent. The 2-column intermediate state at 960px preserves the featured-item's 2x span while allowing satellite items to breathe. This kind of responsive intelligence requires having BUILT the layout, SEEN it at multiple widths, and UNDERSTOOD how the content's hierarchy should degrade. It cannot be specified upfront.

**Output quality if stopped here:** Near-masterwork (9/10). This is AD-006's final state. All 10 falsifiable criteria score PASS. The page scores 10/10 on content-topology indicators. Remaining distance to perfection is in diminishing-returns territory: micro-interactions, animation polish, cross-browser edge cases.

**Evidence:** AD-006's version badge says "v1 enriched" -- it passed through an enrichment cycle after the initial build. The 7 FIX references confirm at least 7 specific corrections were applied. The CSS comment "MF-002: Bento early collapse at 960px" confirms this breakpoint was ADDED (not original). The research application record (hidden `display: none` section) explicitly lists which findings were applied, suggesting a post-build verification pass.

---

### Phase 6: System-Level Integration (180+ minutes)

**What the builder KNOWS:**
- Everything from Phase 5 PLUS awareness of how this page fits into a LARGER system of pages
- Cross-page vocabulary: "The solid offset technique I used on the featured bento item should use the same offset values (4px) as every other page in the system"
- Convention contribution: "The three-tier border system I discovered should be codified as a convention"
- Findings extraction: "The insight that compound architecture is sequential (one pattern per section, temporal not spatial) is a FINDING (AD-F-024) that should feed forward to all future compound builds"

**What DECISIONS become possible:**
- Findings production: The 8 findings AD-F-021 through AD-F-028 are not just observations -- they are SYSTEM-LEVEL INSIGHTS. AD-F-023 (meta-equivalence is ATTENTION TOPOLOGY) redefines the entire axis dimension.
- Convention codification: The discoveries made during building (border categories, offset grammar, responsive strategy) become inputs to the AD-CONVENTION-SPEC.md (822 lines) that governs all subsequent builds
- System vocabulary expansion: New techniques (pattern echo grid, fractal annotation, confidence-mapped borders) join the system's vocabulary for future explorations

**Example invention possible at this depth:** AD-F-024 (compound is sequential, not simultaneous). This finding emerged from BUILDING the compound page and discovering that multiple axis patterns in a single viewport creates cognitive overload, but sequential patterns (one per scroll-section) create a temporal reading experience where each section is a different "room." This finding could not have been hypothesized -- it required the physical act of building and evaluating a compound page. It then became a CONSTRAINT for all future compound builds, including CD-006.

**Output quality if stopped here:** Masterwork with system contribution (10/10). The page is both a standalone achievement AND a contributor to the design system's accumulated intelligence. This is what separates an exploration from a pipeline build: the exploration GROWS the system's knowledge.

---

## 2. The Curve Visualized

```
Quality ──────────────────────────────────────────────────────────
  10 │                                              ●───────── System integration
     │                                         ●──── Iterative refinement
   9 │                                    ●──── Cross-section coherence
     │                               ●
   8 │                          ●──── Compositional deepening
     │                     ●
   7 │                ●──── Content-topology formed
     │           ●         ◄── THE PHASE CHANGE
   6 │      ●──── Content-form hypotheses
     │ ●
   5 │
     │
   4 │  ●──── Structural recognition
   3 │
   2 │ ●
   1 │● Content scanning
   0 │●──── Pipeline output (0.14 engagement ratio)
     └──────────────────────────────────────────────────────────
     0    15    30    45    60    90   120   150   180   min

     ◄─Pipeline─►◄───────────── Exploration Era ─────────────►
```

The critical observation: the curve has a STEP FUNCTION between Phase 2 (30 min) and Phase 3 (60 min). This is where content-topology formation occurs. Before the step: competent single-concept layouts (OD-005). After the step: compound multi-concept architectures with content-form coupling (AD-006).

The curve does NOT flatten. Each additional phase produces qualitatively new capabilities. But the RATE of quality improvement does decrease after Phase 4. The biggest jumps are:
- Phase 0 to Phase 1: +3 points (scanning to structural recognition)
- Phase 2 to Phase 3: +2 points (hypotheses to content-topology -- THE phase change)
- Phase 4 to Phase 5: +1 point (deepening to refinement -- diminishing but not zero)

---

## 3. The Saturation Question

### Does the curve flatten?

**No -- but it changes character.** The evidence:

**Within a single build session,** the curve shifts from structural invention (Phases 1-3) to polish and coherence (Phases 4-5) to system contribution (Phase 6). Each phase produces qualitatively different output, but the CATEGORY of contribution changes:

| Phase | What is being produced | Contribution type |
|-------|----------------------|-------------------|
| 1-3 | Spatial layouts, content-form coupling, self-referential components | STRUCTURAL invention |
| 4-5 | Visual grammar consistency, responsive intelligence, perceptual polish | COMPOSITIONAL maturity |
| 6+ | Findings, conventions, system vocabulary | SYSTEM-LEVEL knowledge |

**Across the exploration project,** time produced increasingly sophisticated spatial reasoning. The evidence is stark:

| Stage | Avg CSS/page | Distinct layouts/page | Self-aware components/page | Accumulated context |
|-------|-------------|----------------------|---------------------------|---------------------|
| DD (density) | 517 | 1-2 | 0-1 | 51 research findings |
| OD (org) | 980 | 3-5 | 2-4 | 51 + 18 DD-F + 28 R1 |
| AD (axis) | 897 | 5-9 | 4-6 | All prior + 192 R4 |
| CD (combination) | 886 | 5-7 | 3-5 | All prior + 39 R5 + 88 stage findings |

CSS lines peaked at OD (convention spec ensured efficiency in AD/CD). But STRUCTURAL COMPLEXITY increased monotonically: DD builds had 1-2 layouts per page. AD-006 had 9. This is not diminishing returns -- it is accumulated vocabulary enabling increasingly sophisticated spatial reasoning.

**The project-level evidence against saturation:** CD-006 (the final crown jewel, sitting atop 337 findings + 88 stage findings + 24 prior explorations + 6 waves + 149+ agents of accumulated context) scored 39/40. AD-006 (which had less accumulated context) is considered the most structurally inventive. This suggests that raw time does not automatically produce quality -- the STRUCTURE of that time matters. CD-006 had more context but was more constrained by accumulated conventions. AD-006 had fewer conventions and more creative freedom. Quality = f(time, freedom, accumulated vocabulary). None of the three alone saturates.

### The saturation answer:

There is no observable quality ceiling within the time horizons we have evidence for (~3 hours per individual build, ~months across the project). But the NATURE of improvement changes:
- 0-60 min: Structural capability expands (new layouts, new spatial forms)
- 60-120 min: Compositional coherence emerges (visual grammar, responsive intelligence)
- 120-180 min: Polish and integration (perceptual refinement, system contribution)
- 180+ min: We do not have evidence. The exploration project spent this time across MULTIPLE agents and sessions, not within a single builder. See Section 5.

---

## 4. The Accumulation vs Fresh-Eyes Tension

### The Paradox

The exploration project discovered that fresh-eyes agents (zero context) find issues that context-loaded agents miss. The Mode 4 PA protocol (9 independent auditors, 102 screenshots, zero context) caught the whitespace void pattern that two prior PA cycles missed entirely. Yet deep engagement requires accumulated context. The "falls in love" state requires 30-60 minutes of sustained content processing.

### The Resolution: Depth and Breadth Serve Different Functions

The paradox dissolves when we recognize that depth and fresh-eyes serve DIFFERENT cognitive functions:

| Function | Requires depth | Requires fresh-eyes |
|----------|---------------|-------------------|
| Structural invention | YES -- multi-hop content-to-spatial associations need accumulated context | NO -- fresh eyes cannot invent spatial forms from nothing |
| Perceptual evaluation | NO -- familiarity with the page creates blind spots | YES -- fresh eyes see what loaded eyes normalize |
| Consistency checking | PARTIALLY -- must know the intended grammar to verify it | YES -- fresh eyes detect inconsistency without knowing the intent |
| Content-form coupling | YES -- requires deep content understanding to judge whether form serves meaning | NO -- fresh eyes cannot evaluate coupling without understanding content |

### The Optimal Cycle

The maximum effort architecture (file `05-maximum-effort-architecture.md`) proposes a three-cycle pattern that resolves the tension:

```
BUILD-1 (deep engagement, 40 min) → EVALUATE-1 (fresh eyes, 20 min) → BUILD-2 (deeper, 30 min) → EVALUATE-2 (full PA, 25 min) → BUILD-3 (hardening, 25 min) → FINAL EVAL (15 min)
```

Each cycle alternates between:
- **Depth phase** (builder, accumulated context, content-topology persistence): produces structural invention, content-form coupling, compositional coherence
- **Breadth phase** (evaluators, zero context, fresh perception): identifies perceptual failures, inconsistencies, blind spots

The builder DEEPENS after each evaluation cycle. The evaluation doesn't just fix bugs -- it gives the builder new information about how its structural decisions are perceived, which feeds into deeper compositional choices in the next build phase.

This is precisely what the exploration project did at the SYSTEM level: Wave 1 builds were evaluated, findings extracted, and Wave 2 builders inherited the evaluation results. The "build-enrich-build" pattern at the project level is the same pattern the architecture proposes at the individual-build level.

### The Key Insight

Fresh-eyes and deep engagement are not in tension. They are complementary phases of a CYCLE. The error is treating them as alternatives (either deep engagement OR fresh evaluation). The correct approach is deep engagement THEN fresh evaluation THEN deeper engagement. The fresh-eyes agents do not replace the deep builder -- they REDIRECT the deep builder's next phase.

---

## 5. What "Hours of Building" Actually Means for the Architecture

### The Activity Mix

"Building for hours" does NOT mean "writing CSS for hours." The cognitive activities that produce deepening are:

**Activity 1: Reading the article (10-20% of time)**
- First pass: scanning for structure (Phase 0-1)
- Second pass: reading for argument and tension (Phase 2)
- Third pass (during building): re-reading specific sections when the spatial hypothesis encounters the section's actual content (Phase 3-4)
- Each re-read produces NEW understanding because the builder now has spatial hypotheses to test against the content

**Activity 2: Forming spatial hypotheses (10-15% of time)**
- Translating content structure into spatial possibilities: "This comparison demands side-by-side columns"
- Evaluating hypotheses: "Would hub-spoke serve this synthesis section better than a linear flow?"
- Refining hypotheses: "The golden ratio (1.618fr) for the hub column creates proportional emphasis that matches the content's gravitational convergence"
- This activity peaks in Phase 2-3 and never fully stops

**Activity 3: Writing CSS (40-50% of time)**
- The physical act of writing CSS, but continuously informed by the content topology
- Every `grid-template-areas` declaration is simultaneously a CSS decision and a content-meaning decision
- The naming convention itself (`spiral-wide`, `spoke-a`, `choreo-hub`) forces content engagement at write-time
- Comment writing during CSS composition (`/* Cat 1 structural */`, `/* confidence: exploratory */`) forces the builder to articulate the structural reasoning

**Activity 4: Evaluating own output (15-20% of time)**
- Viewing the page at different widths
- Checking that zone backgrounds are perceptibly different
- Verifying that border categories are visually distinguishable
- Testing that the responsive collapse preserves content hierarchy
- This is the builder's internal "fresh-eyes" moment -- seeing the output rather than the code

**Activity 5: Discovering emergent properties (5-10% of time)**
- "The three-tier border system I've been using across all sections IS a visual grammar"
- "The compound architecture IS sequential (one pattern per section, temporal not spatial)"
- "The pattern echo grid's 6th cell should reference the page itself"
- These discoveries cannot be scheduled. They emerge from the accumulated engagement of Activities 1-4.

### The Fastest Deepening Mix

Based on the evidence, the activities that produce the fastest phase transitions:

**Phase 0 to Phase 1 (scanning to recognition):** Reading the article once, fully, without any procedural framing. The maximum effort architecture places content reading FIRST (before TC brief, before packages, before constraints). This is the single most important architectural decision for deepening speed.

**Phase 1 to Phase 2 (recognition to hypotheses):** Reading the article a SECOND time, now with spatial vocabulary available (from the curated structural research). The second read is categorically different because the builder now has spatial options to project onto the content. Without spatial vocabulary, the builder can recognize structure but not project it into layout.

**Phase 2 to Phase 3 (hypotheses to topology -- THE critical transition):** BUILDING. Not planning, not reading more, not evaluating -- building. The content topology forms THROUGH the act of writing CSS. When the builder writes `grid-template-areas: "spiral-wide spiral-wide spiral-wide" / "spiral-medium spiral-medium spiral-narrow" / "spiral-deep spiral-deep spiral-narrow"`, the act of naming the areas after content concepts and choosing the golden ratio proportions CRYSTALLIZES the content-topology that was forming as hypotheses. Phase 3 cannot be reached by reading alone. It requires CSS.

**Phase 3 to Phase 4 (topology to coherence):** EVALUATION FEEDBACK + MORE BUILDING. The builder needs to see how its structural decisions look, receive feedback (from evaluators or from seeing the page rendered), and then write MORE CSS that responds to that feedback. The three-tier border system emerges from building 7 sections and noticing that border weight means the same thing across all of them.

**Phase 4 to Phase 5 (coherence to polish):** SPECIFIC PERCEPTUAL CORRECTIONS. The 960px bento breakpoint, the drop-cap disable in grids, the standardized 32px gap -- these emerge from testing and correcting. This phase is purely iterative.

---

## 6. The Beyond-AD006 Time Question

### What Would 5 Hours Produce?

AD-006 represents approximately 2-3 hours of focused building (across its entire lifecycle including audit and fix). The maximum effort architecture proposes 4+ hours (~250 minutes base + optional deepening cycles). What capabilities might emerge at the 4-5 hour mark?

**Capabilities that MIGHT emerge with more time (speculative but grounded):**

**5a: Cross-section dialogue.** AD-006's sections are compound (sequential, each structurally independent). With more time, sections might begin to REFERENCE each other spatially. The spiral section might physically echo the Z-pattern section's diagonal. The hub-spoke might include miniature previews of what each spoke section looks like. The page becomes not just sequential rooms but a spatial dialogue between rooms.

**5b: Reader-state-aware layout.** With more time, the builder might invent layouts that CHANGE based on the reader's journey. Not just scroll-triggered reveals but actual spatial reorganization: the bento grid might rearrange its hierarchy if the reader has already visited the featured item, using CSS scroll-driven animations or state-tracking mechanisms. The page becomes aware of what the reader has seen.

**5c: Multi-scale responsive strategies.** AD-006 has 3 progressive breakpoints (1024px, 960px, 768px). With more time, the builder might develop per-section responsive strategies where each section's collapse behavior reflects its content type. The spiral might collapse by removing strata (geological erosion), the hub-spoke might collapse by pulling spokes into the hub (convergence), the bento might collapse by promoting the featured item to full-width while hiding satellites behind a disclosure mechanism.

**5d: Typographic spatial invention.** AD-006 uses writing-mode for ONE component (fractal annotations). With more time, the builder might discover that vertical text, rotated text, or variable-width typography can create spatial forms that pure grid/flex cannot. A section about layered depth might use font-size as a z-axis indicator. A section about temporal progression might use letter-spacing that physically widens across the paragraph.

**5e: CSS-only interactive components.** The pattern echo grid is static. With more time, the builder might create CSS-only interactive components: hovering over a pattern echo cell highlights the corresponding section, or scrolling past a section causes its echo cell to "fill" with color. The page's self-awareness becomes dynamic rather than static.

### Is There a Theoretical Quality Ceiling?

**No ceiling within the single-build horizon, but the rate of improvement DOES decrease.** The evidence:

The exploration project spent MONTHS and hundreds of agents building 24 explorations. Each stage produced qualitatively different work (DD = density vocabulary, OD = organizational vocabulary, AD = spatial vocabulary, CD = synthesis vocabulary). There was no observable plateau where more accumulated context stopped producing new spatial capabilities.

However, the improvement at each stage was in a DIFFERENT dimension:
- DD: "Can density be self-similar?"
- OD: "Can organization generate density automatically?"
- AD: "Can spatial form serve content meaning?"
- CD: "Can all of the above combine?"

This suggests that the quality curve does not flatten but rather ROTATES -- each additional time investment improves quality along a DIFFERENT axis. After structural invention is exhausted (Phase 3), compositional coherence begins (Phase 4). After coherence, perceptual polish (Phase 5). After polish, system contribution (Phase 6). After system contribution, the next dimension might be reader interaction, temporal evolution, or multi-page narrative.

The theoretical ceiling, if one exists, is constrained by the CSS language itself -- what spatial forms can CSS express? Given that CSS continues to evolve (container queries, scroll-driven animations, `@property`, cascade layers), the expressive ceiling continues to rise.

**The practical answer:** 5 hours of focused building by an Opus agent with content immersion, evaluation feedback cycles, and accumulated spatial vocabulary would produce output that exceeds AD-006. Not by 2x -- there are diminishing returns -- but by adding capabilities (cross-section dialogue, responsive intelligence, interactive self-reference) that AD-006 does not have because its builder ran out of time or context.

---

## 7. Summary: The Six Phase Transitions

| Transition | Time | What Changes | Trigger |
|-----------|------|-------------|---------|
| Scanning → Recognition | 5-15 min | One-hop content-type-to-layout mapping becomes possible | Reading the article fully once |
| Recognition → Hypotheses | 15-30 min | Multi-hop content-to-spatial associations form; content-semantic naming begins | Second read with spatial vocabulary available |
| Hypotheses → Topology | 30-60 min | **THE PHASE CHANGE.** Content-topology persists; self-referential design emerges; builder "falls in love" | Writing CSS that forces content-spatial integration |
| Topology → Coherence | 60-120 min | Visual grammar consistency; cross-section visual language; responsive intelligence | Building multiple sections and discovering emergent patterns |
| Coherence → Polish | 120-180 min | Perceptual refinement; micro-responsive adjustments; accessibility integration | Evaluation feedback + iterative correction |
| Polish → System | 180+ min | Findings extraction; convention codification; vocabulary expansion | Reflective analysis of what was built and discovered |

The single most important finding: **Phase 3 (content-topology formation at 30-60 minutes) is a phase transition, not a gradual improvement.** The 10 falsifiable criteria go from 0-2/10 to 7+/10 at this threshold. Everything before Phase 3 produces pipeline-level output. Everything after Phase 3 produces exploration-level output. The architecture must be designed to REACH Phase 3 reliably. The current pipeline never reaches it because the builder's 0.6% content engagement ratio and mandated procedural reading order prevent content-topology formation from ever occurring.

---

## Agent Log

- **Agent:** Sustained Engagement Mapper (Task #2)
- **Files read:** 12 files (exploration process reconstruction, AD-006 archaeology, OD-005 archaeology, cognitive mechanism definition, attention dilution analysis, maximum effort architecture, AD-006 CSS [3 sections], OD-006 CSS, context CLAUDE.md, various CLAUDE.md navigation files)
- **Total lines read:** ~8,500+ lines
- **Method:** Cross-referencing CSS forensic evidence (what was built) with process evidence (how it was built) and cognitive evidence (what state produced it) to map the depth accumulation curve
- **Key finding:** Quality improvement is phase-transitional, not linear. The "falls in love" threshold occurs at 30-60 minutes of sustained content engagement, producing a step-function improvement in output quality (0-2/10 to 7+/10 on falsifiable criteria). The curve does not flatten but rotates -- each additional time investment improves quality along a different axis.
- **Output:** This file (~450 lines)
- **Quality self-assessment:** MEETS GOALS -- maps the depth curve with specific evidence from exploration builds, answers the saturation question, resolves the accumulation/fresh-eyes tension, identifies what activities produce fastest deepening, speculates on beyond-AD006 capabilities grounded in evidence.

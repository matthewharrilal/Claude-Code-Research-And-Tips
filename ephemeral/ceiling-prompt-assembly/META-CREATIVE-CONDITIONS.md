# META-CREATIVE-CONDITIONS: What Produces INSPIRED Pages, Not Just COMPLIANT Ones

**Date:** 2026-02-16
**Analyst:** creative-analyst (Opus)
**Task:** #22 -- Metacognitive analysis of creative conditions for Ceiling execution
**Files analyzed:** CD-006 (39/40), DD-006 (36/40), Middle build plan, Middle content selection, Middle retro output quality, Middle retro skill improvements, prohibitions.md

---

## EXECUTIVE SUMMARY

The central finding of this analysis is that **compliance and creativity are not a spectrum -- they are orthogonal axes.** A page can be fully compliant and creatively dead. A page can be creatively alive with compliance defects. The Middle-tier experiment proved this: PA-05 DESIGNED (4/4) and 3/3 STRONGLY NOVEL, yet CPL +2 and missing footer. The Ceiling execution prompt must optimize for BOTH axes independently, using different strategies for each.

The "designed" feeling emerges not from mechanism count or compliance score but from three specific conditions: (1) multi-channel coherence where multiple CSS properties encode the same semantic dimension, (2) content-mechanism precision where the mapping between content structure and visual treatment feels inevitable rather than arbitrary, and (3) local impact points where specific moments create visual confidence rather than uniform application. CD-006 and DD-006 both achieve this. The Middle experiment achieved condition (2) but fell short on (1) and (3).

**The single most actionable finding:** The prompt should mandate **designed moments** -- specific visual events where mechanisms intersect to create impact -- rather than mandating mechanism counts. A page with 8 mechanisms and 4 designed moments will feel more composed than a page with 15 mechanisms and 0 designed moments.

---

## 1. COMPLIANCE vs CREATIVITY TENSION

### The Evidence

The Middle-tier experiment provides the cleanest experimental data:

| Dimension | Score | Category |
|-----------|-------|----------|
| PA-05 DESIGNED | 4/4 | COMPLIANCE (creative threshold) |
| Novelty | 3/3 STRONGLY NOVEL | CREATIVITY |
| Soul compliance | 7/7 | COMPLIANCE |
| Container width | 960px (pass) | COMPLIANCE |
| CPL | +2 over limit | COMPLIANCE FAILURE |
| Footer | Missing/invisible | COMPLIANCE FAILURE |
| Token compliance | 66.5% vs 80% target | COMPLIANCE FAILURE |
| "Specifications applied correctly rather than composition felt through" | -- | CREATIVITY DEFICIT |

The compliance failures (CPL, footer, token) are trivially fixable. The creativity deficit is structural.

### Why Compliance Does Not Produce Creativity

The output quality retro (line 703) captures this precisely: "One designer, but a designer following rules rather than feeling the page. Everything is consistent but there's no spark."

This happens because **compliance rules operate on individual properties** (border-radius: 0, container width: 940-960px) while **creativity operates on relationships between properties** (how border weight AND color AND spacing work together to encode security criticality). Binary rules achieve 100% compliance on individual properties but cannot specify relationships -- relationships are emergent from design decisions.

The Middle experiment's build plan (Section 5, "Reinforcing Pairs") explicitly documents 3 multi-channel pairs:
- #1 Border-Weight + #9 Color Encoding = security criticality
- #5 Dense/Sparse + #7 Zone Background = information density
- #11 Typography Scale + #4 Spacing Compression = hierarchy level

These pairs were PLANNED but only the first one (#1 + #9) achieved perceptual impact. The other two (#5 + #7 and #11 + #4) were "functionally correct but perceptually subtle." Why?

### The Local Impact Hypothesis

The output quality retro (line 982-1006) provides the answer. Mechanisms create design highlights when they achieve:

1. **LOCAL IMPACT** -- visible in one specific element (the 4px red auth border)
2. **GLOBAL COHERENCE** -- reinforced across the page (4-level gradient)
3. **CONTENT PRECISION** -- maps exactly to content structure (4 security layers)

Border-weight gradient achieves all three. Spacing compression achieves (2) and (3) but NOT (1) -- "no single gap stands out." Zone backgrounds achieve (2) and (3) but NOT (1) -- "subtle color shift barely noticeable."

**Implication for Ceiling prompt:** The prompt should not just mandate "reinforcing pairs" (the Middle build plan already did that). It should mandate that each reinforcing pair has a CONCRETE MOMENT where the reinforcement is locally visible. "Where on the page will the reader SEE these two mechanisms working together?"

### What the Prompt Should Optimize For

**Compliance axis:** Binary rules, checklists, gates. These work perfectly. Continue using them for:
- Soul constraints (border-radius: 0, box-shadow: none)
- Container width (940-960px)
- Landmark completeness (header/content/footer)
- Token compliance (>= 80%)
- Heading spacing ratio (>= 1.5:1)

**Creativity axis:** The prompt cannot mandate creativity directly (that is a judgment rule and would achieve ~0% compliance). Instead, it should create CONDITIONS that make creativity the natural output:

1. **Mandate designed moments** (not mechanism counts): "Identify 3-5 specific locations on the page where two or more mechanisms create visible impact together"
2. **Mandate rhythm variation** (not just transition types): "No two section transitions may use identical gap + separator treatment"
3. **Mandate focal hierarchy** (not just layout): "The page must have a PRIMARY visual event (most striking element), a SECONDARY visual event, and ambient texture. Identify all three before building"
4. **Protect metaphor derivation time** (not compress it): Allow the planner agent genuine exploration time for metaphor rather than rushing to mechanism selection

---

## 2. WHAT CREATES THE "DESIGNED" FEELING

### Studying CD-006 (39/40)

CD-006's CSS reveals what makes it feel designed rather than formatted:

**Component variety as compositional instrument.** CD-006 uses ALL 11 component types. But more importantly, it uses COMPOSITE components that combine multiple component types:

- `.core-abstraction` = Essence callout (Instrument Serif italic principle) + Code block (dark proof) in a single bordered unit (lines 606-641)
- `.reasoning` = 2-column comparison grid + recommendation zone with green accent (lines 691-767)
- `.decision-matrix` = labeled table with recommended-row highlighting (lines 551-601)

These composites are NOT in the component library. They were INVENTED for this specific content. The "designed" feeling comes from components that feel purpose-built rather than assembled from a kit.

**Transition grammar as narrative punctuation.** CD-006 has explicit transition types in CSS (lines 772-791):
- `.transition--smooth` = 48px gap + 1px separator (continuation)
- `.transition--bridge` = 64px gap + breathing zone background (topic shift)
- `.transition--breathing` = 80px gap + 3px structural border (major shift)

These are not just spacing values -- they are NAMED CSS classes used deliberately between sections. The designer chose WHICH transition type goes between WHICH sections. This is narrative punctuation: "this shift is smooth (same topic continuing)" vs "this shift is a bridge (new territory ahead)" vs "this shift is breathing (major conceptual leap)."

The Middle experiment deployed 3 transition types but they were SPECIFIED IN THE BUILD PLAN, not FELT during building. CD-006's transitions were FELT because they were part of the compositional process, not a checklist item.

**Axis pattern integration.** CD-006 integrates ALL 5 axis patterns (Z, F, Bento, Spiral, Choreography) into a single page. This is not mechanical deployment -- it is compositional synthesis. The Z-pattern hero grid uses golden ratio columns (`grid-template-columns: 1.618fr 1fr`). The bento grid uses span-2 items for emphasis. The spiral strata use border-weight gradient for geological depth. Each axis pattern serves a DIFFERENT content function, and the TRANSITIONS between patterns create the page's narrative arc.

### Studying DD-006 (36/40)

DD-006's achievement is making an abstract concept (fractal self-similarity) visually tangible through 4-scale demonstration:

1. **Page scale:** Dense/sparse section alternation visible in the 3-column grid (line 363-400)
2. **Section scale:** Dense paragraph (13px, 1.5 line-height, background) vs sparse paragraph (15px, 1.8 line-height, no background) within one section (lines 405-444)
3. **Component scale:** Dense zone (12px, background, compressed) vs sparse zone (14px, no background) within one callout (lines 449-483)
4. **Character scale:** Dense code (syntax-highlighted logic) vs sparse comments (gray, minimal) within one code block (lines 488-500)

The "designed" feeling comes from **the same principle operating at every scale**. When you see dense/sparse at the page level, then see it again at the section level, then again at the component level, then again inside a code block -- the pattern becomes FELT rather than OBSERVED. This is fractal coherence: the design has a single operating principle that manifests at every zoom level.

### The Gestalt of "Designed" -- 4 Necessary Conditions

From studying both exemplars, the "designed" gestalt requires:

**Condition 1: Compositional coherence.** A single organizing principle (CD-006: "can this system design itself?"; DD-006: "same rhythm at every scale") that shapes ALL decisions. Not a theme applied on top, but a structural logic that determines layout, transitions, components, and rhythm.

**Condition 2: Purpose-built components.** At least 2-3 components that don't exist in any library -- invented for THIS content. CD-006's `.core-abstraction` and `.reasoning` components. DD-006's nested fractal visualization (`.fractal-nested .fractal-nested .fractal-nested`, line 296-308). These signal "this page was designed for this content" rather than "this content was poured into a template."

**Condition 3: Multi-channel reinforcement with local visibility.** Not just "two mechanisms encode the same thing" but "there is a specific place on the page where you can SEE them encoding the same thing." The border-weight gradient in the Middle experiment's security section is the best example: at Layer 1, you see 4px + red + "AUTHENTICATION" all saying "most critical." That is a DESIGNED MOMENT.

**Condition 4: Designed endings and beginnings.** CD-006 has explicit transition classes. DD-006 has explicit scale-level headers (`.scale-demo__header`, `.scale-demo__level`). Both have designed closures. The Middle experiment's missing footer is not just a compliance failure -- it is an aesthetic failure. A page that "just stops" cannot feel designed because designed things have endings.

### How Metaphor Creates the Gestalt

The metaphor-to-layout derivation path creates the "designed" gestalt through a specific mechanism: **metaphor constrains the solution space to a COHERENT SUBSET of all possible designs.** Without metaphor, the designer faces 18 mechanisms x 5 categories x N sections = enormous combinatorial space. Most combinations are random. Metaphor eliminates most combinations by asking: "does this combination express the metaphor?"

Example from CD-006: The content is "building your first KortAI documentation page" -- content about the system itself. The metaphor IS the system. Every component type used in the page is a component the page TEACHES about. This creates a self-referential coherence: the `.core-abstraction` component used to teach about core abstractions IS a core abstraction. This level of coherence cannot emerge from mechanism-by-mechanism selection. It requires a single organizing idea that makes some combinations inevitable and others impossible.

The Middle experiment skipped metaphor derivation (Middle tier uses pattern-based approach, not metaphor-derived). This is WHY it achieved "designed" (individual mechanisms deployed well) but not "composed" (no single idea unifying all decisions). The F-PATTERN is a layout strategy, not a compositional metaphor. It constrains the spatial distribution (front-loaded density) but does not constrain component invention, transition grammar, or visual drama.

**Implication for Ceiling:** Ceiling MUST use full metaphor derivation (Phases 1-3 of the tension-composition skill). The prompt should allocate at least 25% of total agent time to metaphor exploration and commitment BEFORE any mechanism selection occurs.

---

## 3. METAPHOR QUALITY

### What Makes a Good Compositional Metaphor

A good compositional metaphor is one that produces STRUCTURAL ISOMORPHISMS between the content domain and the visual domain. Not decoration ("make it look geological") but structural mapping ("content hierarchy maps to geological stratification").

**Strong metaphor criteria:**

1. **Structural depth:** The metaphor has internal structure that maps to content structure at multiple levels. "Building" has floors/rooms/corridors that map to sections/components/transitions. "Geology" has strata/formations/erosion that maps to hierarchy/grouping/transitions. Metaphors without internal structure ("watercolor," "minimalist") are decorative, not compositional.

2. **Tension resonance:** The metaphor captures a tension ALREADY PRESENT in the content. CD-006's self-referential metaphor (system designing itself) captures the meta-tension in documentation about a design system. The Middle experiment's content (SYSTEM: remote Mac control) had a natural tension (distributed vs. local, brain vs. body) that could have driven a metaphor (nervous system? puppet/marionette? telescope/microscope?) but the F-PATTERN approach bypassed this.

3. **Mechanism affinity:** The metaphor naturally suggests specific mechanisms. Geological metaphor suggests border-weight gradient (strata thickness), spacing compression (sedimentary pressure), zone backgrounds (rock layers). If a metaphor doesn't suggest mechanisms, it is a theme, not a compositional metaphor.

4. **Semantic surplus:** The metaphor generates MORE structural implications than you need, requiring PRUNING rather than STRETCHING. This is the mark of a good metaphor -- you have too many ideas, not too few. Stretching produces forced application ("the footer is like... bedrock?"). Pruning produces intentional selection ("I am using strata for hierarchy but NOT using erosion for transitions because the content doesn't have degradation").

### How the Prompt Should Guide Metaphor Selection

The prompt should NOT prescribe metaphor domains ("use geological metaphor"). It should prescribe EVALUATION CRITERIA:

```
METAPHOR EVALUATION (score each 0-3):

1. STRUCTURAL DEPTH: Does the metaphor have internal parts
   that map to content parts at 2+ levels?
   0 = decorative label, 3 = multi-level structural mapping

2. TENSION RESONANCE: Does the metaphor capture a tension
   already present in the content?
   0 = arbitrary association, 3 = inevitable connection

3. MECHANISM AFFINITY: Does the metaphor suggest 3+ specific
   mechanisms without forcing?
   0 = no mechanism suggestions, 3 = mechanisms feel obvious

4. SEMANTIC SURPLUS: Does the metaphor generate more ideas
   than you need?
   0 = stretching to fill, 3 = pruning from abundance

THRESHOLD: Total >= 8/12 to commit. Below 8: regenerate.
```

### Should There Be Metaphor Iteration?

YES. The Ceiling prompt should allow for metaphor ITERATION before commitment. The current skill has Phase 3.5 (Metaphor Lock-In GATE) as a one-shot decision. For Ceiling, the prompt should mandate:

1. Generate 3 metaphor candidates (Phase 3 already does this)
2. Score all 3 against the 4 criteria above
3. Develop the top scorer's structural mapping in detail (Section architecture, mechanism suggestions, component implications)
4. If the detailed mapping reveals weakness (score drops below 8 during development), return to candidate #2
5. Lock in only after detailed mapping survives scrutiny

This adds ~15 minutes to the metaphor phase but prevents the much larger cost of building 150+ minutes on a weak metaphor.

---

## 4. CONTENT SELECTION FOR CEILING

### Does Content Choice Matter?

Unambiguously YES. The Middle experiment's content (SYSTEM: Remote Mac Control) was selected purely on structural merit (mixed content types, 1184 words, 9 code blocks, 3 tables). This produced a technically successful page. But the content had MODERATE compositional potential:

From the content selection (01-content-selection.md), the "Why It Matters" section introduces the Brain/Tunnel/Body architecture -- a 3-layer distributed model. This is rich compositional material: layered architecture naturally maps to spatial stacking, the separation of concerns maps to zone differentiation, the security model maps to border-weight encoding. The Middle experiment's F-PATTERN partially exploited this (architecture diagram with solid offset was the "design highlight"). But the metaphor bypass left most of the compositional potential untapped.

Compare with CD-006's content: "Building Your First KortAI Documentation Page." This is MAXIMALLY rich compositional material because it is self-referential. Every component used in the page is a component the page teaches. The metaphor (system designing itself) is not just strong -- it is INEVITABLE for this content.

### Content Characteristics That Maximize Compositional Potential

1. **Internal tension:** Content with at least one genuine tension (competing concerns, tradeoffs, paradoxes) gives the metaphor something to RESOLVE. The Middle content had security vs. accessibility, local vs. remote. CD-006 had meta-circularity (system describing itself). Content without tension (changelogs, API references, pure data tables) produces Floor-tier pages regardless of mechanisms deployed.

2. **Structural variety:** The Middle experiment's content selection criteria (A2.1-A2.10, A3.1-A3.3) are correct for structural variety: >= 3 paragraphs, >= 2 code blocks, >= 1 data table, >= 4 element types, no single type > 60%. These should be preserved.

3. **Narrative arc potential:** Content that has natural beginning/middle/end (problem/solution/validation, concept/implementation/results) enables designed transitions. Content that is purely sequential (step 1, step 2, step 3) limits transition variety.

4. **Domain richness:** Content from domains with strong physical or conceptual metaphors (architecture, biology, geology, music) provides more metaphor candidates than abstract domains (mathematics, formal logic).

### Should Content Be Pre-Selected or Agent-Selected?

**PRE-SELECTED with criteria.** The Ceiling prompt should:

1. Pre-select 2-3 content candidates that meet structural criteria
2. Provide the tension-composition planner with ALL candidates
3. Let the planner score each for compositional potential (using the Addition Test + tension richness scoring from Phase 0-1)
4. Lock in content BEFORE metaphor derivation begins

This prevents the failure mode where content is selected for structural convenience rather than compositional richness.

---

## 5. REFERENCE EXEMPLAR PARADOX

### The Core Paradox

The builder SHOULD see CD-006 and DD-006 to understand quality targets. The builder SHOULD NOT see them to avoid pattern-matching. The novelty evaluator MUST NOT see them. These constraints conflict.

### Proposed Isolation Strategy

**PLANNER agent:** SEES CD-006 and DD-006 as quality references. Uses them to set ambition level, understand what "designed" means, calibrate mechanism expectations. Does NOT copy specific implementations.

**BUILDER agent:** Does NOT see CD-006 or DD-006. Receives the PLANNER's build plan (which was informed by exemplars but does not reference them). Works from metaphor + mechanisms + plan, not from visual references. This is the critical isolation boundary.

**Why this works:** The planner absorbs the QUALITY SIGNAL from exemplars and translates it into a build plan that carries the quality expectation without carrying the specific patterns. The builder executes from the plan, not from exemplars. Novelty is protected because the builder never saw the reference patterns.

**Why the builder should NOT see exemplars:**

The output quality retro (line 743) identifies the Middle experiment's approach as "lookup mode" -- "content has X, I need mechanism Y." If the builder sees CD-006's `.core-abstraction` composite component, the builder will produce composite components that RESEMBLE `.core-abstraction` rather than inventing new composites from the metaphor. This is the continuation bias that the anti-gravity mechanisms are designed to prevent.

DD-006's fractal visualization (nested `.fractal-nested` boxes with progressive rgba opacity) is a specific, memorable visual treatment. If the builder sees it, any fractal element in the Ceiling page will gravitationally drift toward nested boxes with opacity gradation -- even if the Ceiling metaphor suggests a completely different fractal expression.

**NOVELTY EVALUATOR:** Sees NEITHER the exemplars NOR the build plan. Receives only the final HTML and the evaluation criteria. This is the "blind" in blind novelty evaluation. The evaluator assesses whether the page looks like something they have seen before, without knowing what the references are.

**PERCEPTUAL AUDITOR:** CAN see exemplars (for quality calibration) but conducts the audit from screenshots/snapshots, not from CSS inspection. The auditor's job is to assess perceptual quality, not to compare implementations.

### The Information Flow

```
CD-006, DD-006 ──────> PLANNER ──────> BUILD PLAN ──────> BUILDER ──────> HTML
                         |                                                  |
                         v                                                  v
                    Quality target                                    NOVELTY EVAL (blind)
                    Ambition level                                    PA AUDIT (screenshots)
```

Key boundary: the BUILD PLAN is the bridge. It carries quality expectations without carrying pattern specifics. The planner must be instructed: "Reference exemplars for AMBITION LEVEL and QUALITY SIGNAL. Do NOT reference specific CSS classes, component names, or layout structures from exemplars in the build plan."

---

## 6. ITERATIVE REFINEMENT

### The Gap: Single-Pass vs Multi-Pass

The real gap identified in the richness research is "iterative discovery, not freedom." The pipeline compresses 337 findings into "sample 2-4" -- a 50:1 information loss. But the more fundamental issue is that the Middle experiment was SINGLE-PASS: plan once, build once, audit once.

CD-006 was built within a multi-agent pipeline where earlier CD explorations (CD-001 through CD-005) provided learning that shaped CD-006. DD-006 was the SIXTH density exploration, benefiting from DD-001 through DD-005's lessons. These are not single-pass artifacts -- they are iterative refinements across an exploration sequence.

### How to Build Iteration Into Team Execution

The challenge is context explosion. If the builder revises the HTML 3 times, each revision adds ~500 lines of context (old HTML + diff + audit feedback + new HTML). Three revisions = 1,500 lines of iteration context on top of the base context (metaphor + plan + mechanisms + content). This pushes the agent toward context limits.

**Proposed iteration architecture:**

**Phase 1: Plan + Build (single pass)**
- Planner creates build plan with designed moments, mechanisms, transitions
- Builder creates v1 HTML from plan (NO revisions during first pass)
- PA Auditor evaluates v1 with full 48 PA questions

**Phase 2: Targeted Revision (TWO-INSTANCE pattern)**
- A FRESH builder agent (not the v1 builder) receives:
  - The original build plan (NOT v1 HTML)
  - PA audit findings (specific, actionable)
  - A revision brief: "Build the page from the plan, addressing these specific audit findings"
- The fresh agent builds v2 from the PLAN + audit findings, not from editing v1
- This exploits the Two-Instance pattern: continuation bias prevents the v1 builder from truly revising, but a fresh agent can build with the plan AS INTENDED plus lessons from v1's audit

**Phase 3: Final Audit (single pass)**
- PA Auditor evaluates v2
- Novelty evaluator evaluates v2 (blind)
- If PASS: done. If FAIL on critical items: one more targeted revision (v3)

**Why this works:**
1. **Context control:** The fresh builder in Phase 2 starts with plan + audit findings (~300 lines), not with v1's full HTML (~800+ lines). Smaller context = better execution.
2. **Two-Instance exploitation:** The v1 builder CANNOT revise its own work effectively (continuation bias). A fresh agent CAN implement the intended plan while addressing known issues.
3. **Bounded iteration:** Maximum 3 passes (v1, v2, v3). Each pass is a fresh agent with small, targeted context. No unbounded revision loops.
4. **Quality target is KNOWN:** The PA audit criteria are fixed. Each revision addresses specific, measurable defects. Not "make it better" but "fix heading spacing ratio from 1.0 to >= 1.5."

### Iteration Budget for Ceiling

| Phase | Agent | Time Estimate | Context Load |
|-------|-------|---------------|-------------|
| Metaphor exploration (Phases 0-3) | Planner | 25-35 min | Content + skill |
| Build plan (Phase 4) | Planner | 15-20 min | + mechanisms + catalog |
| v1 Build (Phase 6) | Builder-1 | 30-45 min | Plan + tokens + prohibitions |
| v1 Audit | PA Auditor | 15-20 min | v1 HTML + PA criteria |
| v2 Build (targeted revision) | Builder-2 (fresh) | 20-30 min | Plan + audit findings |
| v2 Audit + Novelty | PA + Novelty (blind) | 20-30 min | v2 HTML + criteria |
| **Total** | | **125-180 min** | Fits Ceiling tier (150-220 min) |

If v2 passes: done at ~125-150 min. If v2 needs one more revision: ~180 min with v3 builder.

---

## SYNTHESIS: CONDITIONS FOR INSPIRED CEILING OUTPUT

The Ceiling execution prompt should create these 6 conditions:

### Condition 1: Metaphor First, Mechanisms Second
Allocate 30% of pipeline time to metaphor exploration. Evaluate metaphors against structural depth, tension resonance, mechanism affinity, and semantic surplus criteria. Lock in metaphor BEFORE reading mechanism catalog. This prevents "lookup mode" and produces compositional coherence.

### Condition 2: Designed Moments Over Mechanism Counts
Mandate 3-5 specific designed moments where 2+ mechanisms create visible local impact. "Where on the page will the reader pause?" Each designed moment must be identified in the build plan with specific CSS evidence of multi-channel reinforcement.

### Condition 3: Purpose-Built Components
Mandate 2-3 composite components invented for THIS content that do not exist in the component library. These should emerge from the metaphor ("what component does this metaphor need that doesn't exist yet?"). This signals "designed for this content" rather than "assembled from a kit."

### Condition 4: Planner-Builder Isolation
The planner sees exemplars (quality calibration). The builder sees only the plan. The novelty evaluator sees only the final HTML. The build plan carries quality expectations without pattern specifics. This maximizes both quality (planner is calibrated) and novelty (builder is uncontaminated).

### Condition 5: Two-Instance Iteration
Budget for v1 + targeted v2 (fresh builder with plan + audit findings). Maximum v3 if critical failures in v2. Each revision is a fresh agent building from plan, not editing prior HTML. This produces quality improvement without context explosion.

### Condition 6: Compliance as Infrastructure, Creativity as Architecture
Binary rules (soul, container, landmarks, tokens, heading ratios) operate as infrastructure -- always enforced, never negotiated. Creative specifications (designed moments, rhythm variation, focal hierarchy, component invention) operate as architecture -- the prompt creates conditions for creativity but does not prescribe specific creative choices.

**The prompt should never say "be creative." It should say "identify 3 designed moments, invent 2 components, produce variation in all 5 transitions." These are STRUCTURAL CONDITIONS that make creativity the natural output.**

---

## APPENDIX: KEY EVIDENCE TABLE

| Finding | Source | Line/Section | Implication for Ceiling |
|---------|--------|--------------|------------------------|
| "Specifications applied correctly rather than composition felt through" | 08-retro-output-quality.md | Line 377 | Compliance != creativity; need designed moments |
| "One designer following rules rather than feeling the page" | 08-retro-output-quality.md | Line 703 | Lookup mode produces compliance, not composition |
| Border-weight gradient = "design highlight" | 08-retro-output-quality.md | Line 912 | Multi-channel reinforcement with local impact creates highlights |
| "Metronomic rather than musical" rhythm | 08-retro-output-quality.md | Line 1126 | Need rhythm variation mandate (3+ transition types, no identical transitions) |
| Missing footer = WOULD-NOT-SHIP | 08-retro-output-quality.md | Line 760 | Binary landmark verification gate required |
| PA-05 DESIGNED (4/4) but feels "professionally stiff" | 08-retro-output-quality.md | Line 14 | PA-05 threshold is necessary but not sufficient for "composed" |
| 3 transition types in CD-006 CSS | CD-006-pilot-migration.html | Lines 772-791 | Transitions should be NAMED and DELIBERATE, not just measured |
| Composite components (.core-abstraction, .reasoning) | CD-006-pilot-migration.html | Lines 606-767 | Purpose-built composites signal "designed for this content" |
| 4-scale fractal demonstration | DD-006-fractal.html | Lines 363-500 | Same principle at every scale creates "felt" coherence |
| Per-category minimums validated | 08-retro-skill-improvements.md | Line 14 | M1 modification is confirmed; use per-category, not aggregate |
| "Sample 2-4" = THE limiting specification | 08-retro-skill-improvements.md | Line 136 | Already addressed in enrichment; verify in Ceiling prompt |
| Binary rules achieve 100%, judgment rules ~0% | prohibitions.md | Line 13 | Creative conditions must be structural (binary), not judgmental |
| Content selection was structural, not compositional | 01-content-selection.md | Line 310-311 | Ceiling content should be pre-selected for compositional richness |

---

**END META-CREATIVE-CONDITIONS**

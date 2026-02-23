# 07 -- Blind Spot Coverage Mechanisms for Pipeline v3

**Author:** blind-spot-analyst (Opus 4.6)
**Date:** 2026-02-22
**Task:** #7 -- For each identified blind spot, design whether and how the new pipeline could address it.

**Source material:** Reports 51 (independence analysis), 52 (adversarial quality gaps), 53 (dimensional gap analysis), 54 (CD-006 deficit analysis), 55 (flagship crystallization)

---

## FRAMING

Pipeline v3 has 6 named blind spots from the quality gap analysis and 3 structural blind spots from the dimensional gap analysis. This document evaluates each one against a single question: **Can the pipeline DO something about this, or must it accept the limit?**

The distinction matters. A blind spot that is ADDRESSABLE but unaddressed is a design failure. A blind spot that is STRUCTURALLY IMPOSSIBLE to address is a boundary condition of the medium. Treating the second as the first wastes effort. Treating the first as the second leaves quality on the table.

---

## BLIND SPOT 1: TEMPORAL COMPOSITION

**Definition:** Animation, interaction, motion, scroll-triggered reveals, loading sequences, transition timing. The dimension of time in web design.

### 1.1 Is It Addressable Within Static HTML/CSS?

**Partially.** Two sub-dimensions:

**A. True animation/motion (scroll reveals, parallax, loading sequences):** NO. These require JavaScript and are explicitly prohibited by KortAI's identity constraints. The conventions brief bans scroll-triggered animations and parallax effects. The gate runner injects `animation: none !important` before all measurements. This is a DESIGN CHOICE, not an architectural limit. The pipeline COULD support motion if the design system changed its identity. Within KortAI, this sub-dimension is deliberately excluded.

**B. CSS transitions and micro-interactions (hover states, focus transitions, keyboard feedback):** YES. CSS `transition` is permitted for hover states (behavioral channel, channel 5). The pipeline currently generates minimal transition CSS. Report 52 identifies this gap: Gas Town has only `transition: color 0.3s ease` on links. Flagship-quality pages would vary transition timing by context -- faster for interactive elements (0.15s), slower for atmospheric ones (0.4s), with different easing curves.

### 1.2 Pipeline Mechanism

**For sub-dimension B (CSS transitions):**

Add to the conventions brief a TRANSITION VOCABULARY:

```
TRANSITION VOCABULARY (closed set):
  Interactive elements (links, buttons): transition: 0.15s ease-out
  Atmospheric elements (hover on table rows, card hover): transition: 0.3s ease
  State indicators (focus-visible): transition: 0.1s linear

  NEVER: transition durations > 0.5s
  NEVER: transition on layout properties (width, height, margin, padding)
```

Add to the gate runner: a check that `transition` declarations exist on at least links, table rows, and focus-visible states, and that no transition duration exceeds 0.5s.

**For sub-dimension A (motion/animation):** No pipeline mechanism. This is a design system identity boundary. Document it as an accepted limit.

### 1.3 Closest Approximation for What's Lost

True temporal composition -- scroll rhythm, anticipation, memory across scroll distance -- cannot be achieved through CSS transitions. But the pipeline already addresses the STRUCTURAL equivalent through the coherence arc (Opening -> Building -> Climax -> Resolution) and the density arc. These create a spatial analog of temporal experience: the reader EXPERIENCES temporal composition through the act of scrolling past spatially varying zones. The approximation is the coherence arc itself. What's lost is the ability to CONTROL scroll pacing (the reader scrolls at their own speed) and to create SURPRISE through motion (elements cannot appear or transform).

### 1.4 Priority

**LOW for motion (design choice).** **MODERATE for CSS transitions** -- adding transition vocabulary would improve terminal craft (Report 52's dimension 10) and behavioral channel richness. Estimated quality improvement: +0.1-0.2 on PA-05 through accumulated detail craft. Not a Flagship differentiator on its own.

### 1.5 Interactions / Suppressors

None. CSS transitions are independent of all other quality dimensions. No conflicts.

### 1.6 Verification

Gate: count `transition` declarations in output CSS. Minimum 3 (links, focus, hover). Check no duration > 0.5s. PA: auditor H (Responsive) already evaluates hover states -- extend to include transition QUALITY (smooth vs abrupt).

---

## BLIND SPOT 2: READER MODEL

**Definition:** How users actually experience and navigate the page. Who the reader is, what they already know, how they arrive, what device they use, what their scroll speed is.

### 2.1 Is It Addressable Within Static HTML/CSS?

**Partially.** Three sub-dimensions:

**A. Reader entry context (search vs direct link vs navigation):** NOT ADDRESSABLE. Static HTML cannot detect referral source. The page renders identically regardless of how the reader arrived. This is a fundamental limit of static delivery.

**B. Reader expertise level (beginner vs expert):** PARTIALLY ADDRESSABLE. The pipeline cannot dynamically adapt content. But it CAN make a CHOICE about target expertise during the TC brief phase, and that choice can inform visual density, progressive disclosure, and navigation complexity. Report 53 identifies this gap: "No reader expertise model. The pipeline does not consider whether the audience is beginners, experts, or mixed."

**C. Device-specific experience (desktop vs mobile vs tablet):** ADDRESSABLE. Responsive design already handles this. The pipeline specifies 3 breakpoints. The gap is in the DEPTH of responsive treatment, not its existence.

### 2.2 Pipeline Mechanism

**For sub-dimension B (expertise modeling):**

Add to the TC SKILL.md Phase 0 a READER CLASSIFICATION step:

```
Phase 0D: Reader Classification
  PRIMARY AUDIENCE: [beginner / intermediate / expert / mixed]
  READING MODE: [tutorial-sequential / reference-lookup / scan-then-deep-read]
  CONSEQUENCE FOR DESIGN:
    - beginner: more progressive disclosure, wider spacing, more orientation cues
    - expert: denser default, collapsible basics, faster entry to depth
    - reference-lookup: strong heading hierarchy, scannable structure, anchor links
    - mixed: progressive disclosure (surface for beginners, depth on demand for experts)
```

This classification feeds into the conventions brief as a CONSTRAINT on spacing density, component complexity, and navigation features. It does NOT require dynamic rendering -- it is a static design choice made during planning.

**For sub-dimension C (responsive depth):**

The current responsive treatment is adequate for Ceiling. For Flagship, add to the conventions brief:

```
RESPONSIVE REQUIREMENTS:
  At 768px: layout grids collapse to single-column
  At 480px: bento grids stack, horizontal rhythm elements linearize
  At each breakpoint: verify reading line-length (45-80 characters)
  Fluid typography: clamp() for headings, static for body
```

Add to the gate runner: CPL (characters per line) verification at each breakpoint.

### 2.3 Closest Approximation for What's Lost

Reader entry context is genuinely lost. The page cannot know where the reader came from. The closest approximation is the "You Are Here" orientation box (mandatory per CLAUDE.md) -- it provides context regardless of entry path. This is a good mitigation but cannot replace true entry-context awareness.

Reader scroll speed is lost. The page cannot know whether the reader scrolls fast or slow. The approximation is designing for a MODERATE scroll speed (the conventions brief's recommended 3-4 viewports per major visual event), which serves the middle of the distribution.

### 2.4 Priority

**MODERATE.** Reader expertise classification during TC brief would improve content-form coupling (Report 51, Phenomenon 2) by adding a reader dimension to the content analysis. Estimated quality improvement: +0.1-0.3 on PA-05, primarily through better progressive disclosure and density calibration. Higher leverage for tutorial/guide content than for research synthesis content.

### 2.5 Interactions / Suppressors

Reader expertise classification COULD conflict with the specification paradox (structural blind spot 3). Adding "target audience: beginner" to the brief adds a constraint that might push the builder toward COMPLYING mode (designing "for beginners" rather than "composing a page"). Mitigation: frame the reader classification as world-description ("the reader arrives knowing X"), not as instruction ("make it simple for beginners").

### 2.6 Verification

Gate: verify "You Are Here" orientation box is present. Verify CPL at all 3 breakpoints. PA: add question -- "Could a reader with no prior context orient themselves within the first viewport?" (currently implicit in PA-39 but not explicit).

---

## BLIND SPOT 3: EMOTIONAL ARC

**Definition:** Narrative pacing, tension-release in the reading experience. How the reader FEELS as they scroll -- not just what they see (density arc) but what they experience (curiosity, trust, surprise, resolution).

### 3.1 Is It Addressable Within Static HTML/CSS?

**YES.** Emotional arc is the most addressable blind spot. It does not require dynamic media. It requires INTENTIONAL VARIATION in visual treatment across the scroll. Report 55 (Flagship crystallization) describes this in detail: the viewport-by-viewport walkthrough shows how CSS properties (background temperature, border weight, spacing compression, layout complexity) can create emotional states (authority, trust, delight, focus, completion).

The key insight from Report 53: the TC pipeline's FEEL axis explicitly asks "What does the reader need to FEEL while navigating this content?" but this emotional analysis is CONSUMED during metaphor derivation and never verified at delivery. The emotion is an input, not an output.

### 3.2 Pipeline Mechanism

**Two-phase approach: specification + verification.**

**Phase A -- Emotional Trajectory in TC Brief:**

Add to TC SKILL.md Phase 2 output a mandatory EMOTIONAL TRAJECTORY section:

```
EMOTIONAL TRAJECTORY:
  Zone 1 (Opening):     CURIOSITY -- "What is this about?"
  Zone 2 (Engagement):  TRUST -- "This page knows what it's doing."
  Zone 3 (Deepening):   FOCUS -- "This requires my attention."
  Zone 4 (Resolution):  COMPLETION -- "I have been somewhere and returned."

EMOTIONAL PEAKS:
  1 surprise moment: [location + mechanism]
  1 climax moment: [location + mechanism]
  These MUST be in different halves of the page.
```

The emotional trajectory maps to CSS through the existing channel vocabulary:
- CURIOSITY = generous spacing + warm backgrounds + display typography
- TRUST = moderate density + consistent patterns + structural borders
- FOCUS = compressed spacing + cooler backgrounds + heavier font-weight
- COMPLETION = return to opening sparsity + bookending elements

**Phase B -- Emotional Verification in PA:**

Add two PA questions:

```
PA-NEW-1: "Without reading the text, scroll through the page at medium speed.
           Describe your emotional journey in 3-4 words per zone."

PA-NEW-2: "Identify one moment of surprise and one moment of climax.
           Are they in different halves of the page?"
```

The weaver cross-references PA-NEW-1 responses against the TC brief's intended emotional trajectory. Alignment = emotional arc achieved. Divergence = emotional arc failed.

### 3.3 What's Lost

The pipeline cannot create GENUINE surprise in the way a film or interactive experience can. Surprise in static HTML comes from the reader scrolling past an unexpected visual element -- but the element was always there. The "surprise" is really "encountering something unexpected given the established pattern." This is the SPATIAL analog of temporal surprise, and it is effective but not equivalent.

The pipeline also cannot create TENSION that builds through withholding information. Static HTML displays all content at once (the reader can scroll ahead). Tension in static design comes from visual density compression that creates a feeling of urgency, not from actual information withholding.

### 3.4 Priority

**HIGH.** Emotional arc is the single highest-leverage blind spot to address. Report 52 rates Gas Town's emotional arc at 3.5/5 -- present but "labeled, not felt." Report 55 identifies emotional arc as one of 5 qualities distinguishing Flagship from Ceiling. The gap between "the page has 4 zones with different CSS" (current) and "the page creates a feeling journey" (target) is the gap between CEILING and FLAGSHIP.

Estimated quality improvement: +0.3-0.5 on PA-05. This is the largest single-blind-spot improvement because emotional arc AMPLIFIES all other quality dimensions -- multi-coherence becomes more powerful when it serves an emotional trajectory, designed moments become more impactful when they arrive at emotional peaks.

### 3.5 Interactions / Suppressors

Emotional arc specification RISKS triggering the specification paradox. If the brief says "Zone 3 should feel FOCUSED" the builder might interpret this as "make Zone 3 look serious" and produce a checklist-compliant but lifeless zone. Mitigation: specify the emotional trajectory as CSS PARAMETERS, not as emotional labels:

```
Zone 3 FOCUS = background >= 20 RGB cooler than Zone 2,
               padding <= 32px,
               font-weight 500-600,
               letter-spacing 0.01-0.03em
```

This gives the builder CSS guidance, not emotional instructions.

Emotional arc also interacts with CONTENT AFFORDANCE (Report 51, Phenomenon 2). Not all content supports a dramatic emotional arc. A reference page with 20 equally-weighted entries has no natural climax. The TC Phase 0 content classification should flag when emotional arc is content-supported vs content-neutral.

### 3.6 Verification

Gate: verify that background temperature forms a non-monotonic arc across zones (not uniformly warming or cooling). Verify that spacing varies by >= 16px between the most generous and most compressed zones. Verify that at least one zone has font-weight >= 500 (indicating density/focus).

PA: the two new questions above (PA-NEW-1, PA-NEW-2). The weaver's synthesis should include an explicit emotional-alignment subsection.

---

## BLIND SPOT 4: COMPOSITIONAL ANTI-PATTERNS

**Definition:** What NOT to compose -- known-bad combinations of mechanisms, layouts, and treatments that produce visually failed pages.

### 4.1 Is It Addressable Within Static HTML/CSS?

**YES.** Anti-patterns are KNOWLEDGE, not technology. They exist in the design decisions that produce bad outcomes. The pipeline can encode anti-patterns as prohibitions (negative rules that prevent known-bad combinations).

### 4.2 Pipeline Mechanism

Report 51 (M-04) identifies 5 compositional anti-patterns already observed across pipeline experiments:

```
COMPOSITIONAL ANTI-PATTERNS (PROHIBITED):

AP-01 "Beautiful cover, blank pages"
  Detection: First 30% of scroll has 3+ designed moments, remaining 70% has <= 1.
  Gate: Count designed moments per scroll quartile. No quartile < 1.

AP-02 "Wall of cards"
  Detection: Same component type repeated 10+ consecutive times.
  Gate: No component type appears > 6 consecutive instances without a different component intervening.

AP-03 "Footnote cemetery"
  Detection: Bottom 25% of page has average font-size < 13px and no designed moments.
  Gate: Last 25% of page must contain >= 1 designed moment and average font-size >= 14px.

AP-04 "Header hero, body zero"
  Detection: Header > 300px height AND first content zone has <= 2 mechanisms active.
  Gate: If header > 250px, first content zone must have >= 3 active mechanisms.

AP-05 "Grid desert"
  Detection: Zero grid/flex layouts in a page with > 5 content sections.
  Gate: Pages with > 4 sections must use >= 2 distinct layout patterns.
```

Add these to the gate runner as negative gates (FAIL if detected). These are binary, not judgment-based, which follows the established principle that binary rules achieve 100% compliance.

Additionally, add a MECHANISM INTERACTION anti-pattern from the pipeline's own failure history:

```
AP-06 "Sub-perceptual cascading"
  Detection: 3+ CSS properties with perceptually identical values (letter-spacing
  0.001em vs 0.003em, background #fefcf3 vs #fdfbf2).
  Gate: All adjacent-zone CSS differences must meet perception thresholds
  (already in gate runner, but verify AT EVERY boundary, not just spot-checked).
```

### 4.3 What's Lost

The anti-pattern list is necessarily incomplete. New anti-patterns emerge from novel mechanism combinations that have never been tried. The pipeline cannot prevent UNKNOWN anti-patterns -- only known ones. This is an inherent limitation of enumerated rules.

More fundamentally, some compositional anti-patterns are CONTEXT-DEPENDENT. "Wall of cards" is an anti-pattern for a research synthesis but is the CORRECT pattern for a card-based reference index. The pipeline needs to distinguish between "this pattern is always bad" (AP-02 at 10+ instances) and "this pattern is bad for THIS content type." The TC brief's content classification (Phase 0C) should inform which anti-patterns are active.

### 4.4 Priority

**MODERATE-HIGH.** Anti-patterns have high ROI because they are PREVENTIVE -- they catch failures before they occur, avoiding expensive fix cycles. Report 51 identifies that "removing barriers to quality has higher ROI than adding specifications for quality" (Phenomenon 4). Anti-patterns are barrier removal.

Estimated quality improvement: +0.1-0.2 on PA-05 directly (preventing specific failures), but potentially +0.3+ indirectly by preventing fix cycles that degrade quality through mode shift (COMPOSING -> REPAIRING, Report 51 K-07).

### 4.5 Interactions / Suppressors

Anti-patterns interact with the SPECIFICATION PARADOX (structural blind spot 3). Every anti-pattern is a RULE. More rules = more cognitive load on the builder = higher risk of COMPLYING mode. Mitigation: limit the anti-pattern list to 6-8 (the current set). Do NOT expand to 20+. The anti-patterns should be in the GATE RUNNER, not in the conventions brief -- the builder should not need to memorize them. The gates catch them programmatically after the build.

### 4.6 Verification

All 6 anti-patterns above have binary gate definitions. They can be checked programmatically in the gate runner by analyzing the output HTML/CSS. No PA involvement needed -- this is structural detection.

---

## BLIND SPOT 5: CROSS-PAGE COHERENCE

**Definition:** Consistency across a multi-page system. Family resemblance between pages. Whether a reader who has seen 3 KortAI pages detects a consistent personality.

### 5.1 Is It Addressable Within Static HTML/CSS?

**YES, but at the SYSTEM level, not the PAGE level.** Cross-page coherence is achieved through shared vocabulary (tokens, components, soul constraints), not through per-page pipeline execution. The pipeline builds ONE page at a time. Cross-page coherence is achieved through the INPUTS to the pipeline being consistent across pages.

### 5.2 Pipeline Mechanism

Cross-page coherence is ALREADY addressed at three levels:

**Level 1: Identity constraints (soul).** All pages share border-radius: 0, warm palette, typography trinity, no box-shadow, no gradients. These create visual family resemblance at the most fundamental level. This is SUFFICIENT for basic cross-page coherence.

**Level 2: Token vocabulary.** All pages draw from the same CSS custom properties (tokens.css). Same spacing scale, same color palette, same font stack. This creates consistency at the vocabulary level.

**Level 3: Component library (components.css).** All pages have access to the same component patterns (callouts, bento grids, Z-hero layouts). Component reuse creates familiarity across pages.

**What's NOT addressed:**

**Level 4: Compositional coherence.** If Page A uses a 4-zone density arc (sparse -> moderate -> dense -> sparse) and Page B uses a 3-zone density arc (moderate -> dense -> moderate), is that consistent or inconsistent? The pipeline has no opinion. Each page's density arc is derived independently from its content.

**Level 5: Metaphor coherence.** Page A's metaphor is "geological survey," Page B's is "military dispatch." Should multi-page KortAI sites have a SHARED metaphor vocabulary? Or should each page's metaphor be independently derived?

### 5.3 What Would a Pipeline Mechanism Look Like?

For Level 4 (compositional coherence):

Add to the TC SKILL.md a SITE CONTEXT step that reads a manifest of existing pages:

```
Phase 0E: Site Context (if building for an existing site)
  EXISTING PAGES: [list of page names + their density arc summaries]
  SITE-LEVEL COHERENCE RULES:
    - All pages use 3-5 zone arcs (no 2-zone or 8-zone outliers)
    - All pages include header bookend + footer bookend
    - All pages open sparse and close sparse (common arc shape)
    - Per-page metaphor is independent BUT must use the same transition grammar
```

For Level 5 (metaphor coherence): Do NOT address this. Per-page metaphor derivation is the pipeline's strength (Report 55: "the metaphor must come from the content"). Forcing shared metaphors across pages would suppress content-form coupling. Accept independent metaphors as a feature, not a bug.

### 5.4 Priority

**LOW for the current pipeline scope.** The project has produced exactly 2 pages through the pipeline (Gas Town, the Flagship experiment). Cross-page coherence becomes important at 5+ pages. Until then, the soul constraints + token vocabulary + component library provide sufficient family resemblance.

When the project reaches 5+ pages, revisit with a site manifest mechanism.

### 5.5 Interactions / Suppressors

A site manifest adds INPUT to the TC brief, increasing specification volume. This risks the compression paradox (Report 51, Phenomenon 3). Mitigation: the site manifest should be <= 10 lines (page name + arc summary per page), appended to TC Phase 0 context, not woven into the conventions brief.

### 5.6 Verification

Cross-page verification requires viewing MULTIPLE pages side by side. This is outside the current PA's scope (single-page evaluation). Future extension: a SITE AUDIT protocol that screenshots 2-3 pages at matching viewports and asks auditors to evaluate family resemblance. Not needed now.

---

## BLIND SPOT 6: REVISION QUALITY

**Definition:** Whether iteration actually improves things or causes regression. Maintaining composition across edits by different builders over a page's lifetime.

### 6.1 Is It Addressable Within Static HTML/CSS?

**The question is misframed.** Revision quality is not a property of the OUTPUT (HTML/CSS) but of the PROCESS (how edits are made). The pipeline can influence revision quality through two mechanisms: (a) making the output RESILIENT to edits, and (b) providing a REVISION PROTOCOL that prevents regression.

### 6.2 Pipeline Mechanism

**A. Output resilience:**

The conventions brief already promotes practices that make output resilient:
- CSS custom properties for all values (changing `--bg-zone-2` updates everywhere)
- Component classes that encapsulate patterns (editing a `.callout` doesn't affect `.bento-cell`)
- Section-meta annotations that document design intent (a future editor can read WHY a section uses a Z-pattern)

Enhance with:

```
REVISION RESILIENCE REQUIREMENTS:
  1. All zone-level styles use zone-specific classes (.zone-established, .zone-2)
     NOT element selectors or nth-child selectors
  2. Each zone has a CSS comment block documenting:
     - Metaphor stratum / density tier
     - Active mechanisms
     - Multi-coherence direction at boundaries
  3. All custom properties are semantic (--bg-established, not --bg-1)
     so that a future editor understands what they mean
```

**B. Revision protocol:**

This is a process document, not a pipeline mechanism. Create a REVISION GUIDE that accompanies each built page:

```
REVISION GUIDE FOR [PAGE NAME]:
  - Metaphor: [name]. All CSS values trace to metaphor logic.
  - Adding a section: classify its metaphor stratum, apply the corresponding
    zone class, verify multi-coherence at both new boundaries.
  - Changing content within a section: no CSS changes needed if content structure
    is similar. If content mode changes (e.g., prose -> table), reassess the
    axis pattern for that zone.
  - DANGER ZONES: the governing cluster (border-weight + background + spacing)
    must co-vary. Changing one without the others breaks multi-coherence.
```

The pipeline could auto-generate this guide as a post-build deliverable.

### 6.3 What's Lost

The deepest revision quality problem -- K-07 (fix cycle degradation) from Report 51 -- is a COGNITIVE MODE problem. Revision shifts the builder from COMPOSING to REPAIRING. Repairing mode produces locally correct but globally incoherent changes. No pipeline mechanism can prevent this cognitive mode shift. It is a structural limit of sequential work on creative artifacts.

Mitigation: the external critique cycle (Report 55, condition #3). A fresh Opus agent evaluates the revised page, catching compositional regression that the revising builder's continuation bias cannot see. This is not in the current pipeline but is identified as a high-leverage intervention for Flagship quality.

### 6.4 Priority

**LOW for initial pipeline.** Revision quality matters AFTER the pipeline reliably produces pages worth revising. Currently, each page is a one-shot experiment. When pages enter a maintenance lifecycle, revision quality becomes important.

For the FIX CYCLE specifically (within-session revision), the priority is MODERATE. The fix cycle is already in the pipeline (Step 7, up to 3 cycles). The risk of fix-cycle degradation is documented. Adding a "compositional regression check" to the fix cycle's re-evaluation gate would catch the most common degradation pattern.

### 6.5 Interactions / Suppressors

Revision documentation adds OUTPUT volume. A 50-line revision guide appended to each page is not a suppressor (it's for human editors, not AI builders). No conflicts.

The fix-cycle regression check adds gate complexity. Mitigation: make it a single binary gate -- "Does the fix-cycle output have FEWER multi-coherence instances than the pre-fix output?" If yes, regression detected.

### 6.6 Verification

For output resilience: gate that verifies zone-specific classes exist, CSS comments document metaphor strata, and custom properties use semantic names. Binary checks.

For revision protocol: not verifiable by the pipeline itself. This is a deliverable that human editors use.

For fix-cycle regression: gate that compares multi-coherence instance count before and after each fix cycle.

---

## STRUCTURAL BLIND SPOT 7: TRUE ITERATION

**Definition:** 15-30 micro-cycles of build-evaluate-revise, as human designers do. The pipeline's one-shot architecture (TC brief -> builder -> gates -> PA -> fix cycle) provides at most 3 coarse revision cycles, not 15-30 fine-grained ones.

### 7.1 Is It Addressable?

**PARTIALLY, through architectural change.** Report 53 describes the "live pipeline" architecture where the builder has Playwright access during build and renders every ~100 lines of CSS, self-evaluating and adjusting. This transforms the builder from a one-pass writer to an incremental renderer-reviser.

### 7.2 Pipeline Mechanism

**Option A: Midpoint rendering (moderate change).**

The current pipeline has a midpoint micro-gate (SKILL.md Step 3.1) that checks 3 gates at the midpoint. Enhance this to a FULL MIDPOINT EVALUATION:

```
MIDPOINT EVALUATION PROTOCOL:
  At 50% build completion (after Zone 2 CSS is written):
  1. Render the page in Playwright
  2. Capture screenshot at 1440px
  3. Builder evaluates its own output:
     - Does the density arc FEEL right so far?
     - Is the metaphor PERCEPTIBLE in the CSS (not just labeled)?
     - Are boundaries multi-coherent?
  4. Builder writes a 3-sentence self-assessment
  5. Builder adjusts Zones 1-2 CSS if needed BEFORE writing Zones 3-4
```

This adds 1 micro-cycle at the midpoint. It does not achieve 15-30 cycles but provides the highest-leverage single iteration point (catching first-half problems before they propagate to the second half).

**Option B: Per-zone rendering (significant change).**

The builder renders and evaluates after EACH zone. This provides 4-6 micro-cycles for a 4-6 zone page:

```
PER-ZONE BUILD CYCLE:
  For each zone N:
    1. Write Zone N HTML + CSS
    2. Render full page (all zones 1-N)
    3. Evaluate: does Zone N harmonize with Zones 1 through N-1?
    4. If not: adjust Zone N or earlier zones
    5. Write conviction note: "Zone N achieves [X] in the arc"
    6. Proceed to Zone N+1
```

This requires the builder to have Playwright access (currently the orchestrator owns Playwright exclusively). It also requires the ability to re-render mid-build, which is a MODERATE architectural change.

**Option C: Full live pipeline (major change).**

Report 53's full architecture: thin spec + examples -> builder with Playwright loop -> render every ~100 lines -> self-evaluate -> adjust / ask reviewer -> continue. This is the theoretical ideal. It requires:
- Builder Playwright access
- Real-time rendering capability
- A reviewer agent available for consultation during build
- The ability to re-read and revise earlier CSS

This is a MAJOR architectural change that transforms the pipeline from specification-driven to feedback-driven.

### 7.3 What's Lost Without True Iteration

The one-shot builder makes GLOBAL decisions (metaphor, density arc, zone structure) at the start and LOCAL decisions (per-zone CSS) during execution. If a local decision reveals that a global decision was wrong, the builder cannot revise the global decision without starting over.

Example: the builder chooses a 4-zone arc (sparse -> moderate -> dense -> sparse). After writing Zone 3 (dense), the builder realizes that the content in Zone 3 is actually quite short and doesn't support high density. A human designer would restructure: merge Zones 2-3 into a longer moderate zone. The pipeline builder cannot do this -- Zone 2's CSS is already written and the conventions brief specifies 4 zones.

What's lost: the ability to discover the right structure THROUGH building, rather than specifying it BEFORE building. This is Report 53's central finding: "the pipeline suppresses what it claims to enable" because front-loaded specification prevents emergent discovery.

### 7.4 Priority

**HIGH.** True iteration is the single deepest structural limit of the current pipeline. Report 53 ranks it #1. Report 55 identifies the "creative revision cycle" as the highest-leverage intervention for Flagship quality. The paradigm exploration's 5 agents converge on this.

However, the FULL live pipeline (Option C) is a major architectural overhaul. For Pipeline v3:
- **Option A (midpoint evaluation) is RECOMMENDED.** Low cost, moderate benefit. Catches the most damaging mid-build errors.
- **Option B (per-zone rendering) is ASPIRATIONAL.** Moderate cost, high benefit. Worth prototyping in a single experiment.
- **Option C (live pipeline) is FUTURE.** High cost, highest benefit. Requires proving Options A/B first.

### 7.5 Interactions / Suppressors

Iteration creates a TENSION with holistic composition. Report 53 (Agent 2) flags: "Phased building contradicts the conventions brief's own philosophy about holistic composition. Building zone-by-zone may prevent the cross-zone coherence the system demands."

This is a real tension. Mitigation: the builder writes the FULL page CSS in one pass (holistic), THEN renders and evaluates at the midpoint (iterative). This preserves holistic composition during the creative phase while adding evaluation during the refinement phase. The key is that iteration occurs at EVALUATION and ADJUSTMENT, not at INITIAL COMPOSITION.

### 7.6 Verification

For Option A: the midpoint evaluation produces a 3-sentence self-assessment. The gate runner verifies that the self-assessment exists and that the 3 midpoint gates pass. If they don't, and the builder chose not to fix them, the builder must document WHY (creating accountability without forcing compliance).

For Option B: each per-zone conviction note is a deliverable. The PA weaver evaluates whether the conviction notes show genuine compositional evolution (notes get more specific and integrated as zones accumulate) or mechanical compliance (identical template responses for each zone).

---

## STRUCTURAL BLIND SPOT 8: HOLISTIC GESTALT PERCEPTION

**Definition:** Verifying properties individually vs perceiving the whole. The pipeline decomposes quality into 65 PA questions + 17 gates + a synthesis. No matter how good the decomposition, the recomposition loses emergent properties. "Does this page WORK as a unified experience?" cannot be answered by summing individual assessments.

### 8.1 Is It Addressable?

**PARTIALLY, through approximation.** Genuine gestalt perception -- the experience of a page as a unified whole -- is an emergent property that no analytical framework fully captures. But the pipeline can APPROXIMATE gestalt better than it currently does.

### 8.2 Pipeline Mechanism

**Two complementary approaches:**

**A. Integrative Auditor (1 additional agent).**

Add one PA auditor (Auditor J: Gestalt) who receives NO assigned questions and NO framework. Their entire prompt:

```
AUDITOR J -- GESTALT EVALUATION

You are looking at screenshots of a web page. You have NO checklist,
NO questions, NO criteria.

Look at every screenshot. Scroll through them as if you were reading
the page. Take your time.

Then answer:
1. Does this page WORK? (YES / NO / ALMOST)
2. In exactly 50 words: what is your impression?
3. Name the single BEST thing about this page.
4. Name the single WORST thing about this page.
5. If you had to describe this page's personality in 3 words, what are they?
```

This auditor's response is a gestalt proxy. It captures the FIRST IMPRESSION -- the pre-analytical, holistic reaction that individual-question auditors cannot provide because they are immediately directed to specific dimensions.

**B. Comparative Assessment (within existing auditors).**

Add one question to Auditor A's (First Impression) assignment:

```
PA-NEW-3: "Here are screenshots of 3 reference pages: [CD-006], [Middle experiment],
           [known failure]. Which does the current page feel most like? Why?"
```

Comparative judgment is easier and more reliable than absolute judgment for holistic properties. The auditor does not need to articulate WHAT makes the page good or bad -- they need to judge WHERE it falls on a known quality spectrum.

### 8.3 What's Lost

True gestalt includes the TEMPORAL experience of scrolling. Screenshots are frozen moments. A page that reveals itself beautifully over scroll -- where each new viewport builds on the previous one -- has a temporal gestalt that screenshots cannot capture. The pipeline's audit protocol (screenshot capture at fixed scroll positions) loses scroll-between-screenshots experience.

Mitigation: the Auditor J prompt says "scroll through them as if you were reading the page." This invokes the auditor's IMAGINATION of scrolling, which is an approximation. An LLM looking at 10 sequential screenshots can INFER the scroll experience, but it does not HAVE the scroll experience.

This is a hard limit. It cannot be fully addressed without a fundamentally different audit technology (video recording of actual scrolling, or interactive Playwright sessions where auditors control scroll position).

### 8.4 Priority

**MODERATE-HIGH.** Gestalt assessment has surprisingly high ROI for low cost (1 additional agent with a 5-line prompt). Report 53's paradigm exploration identified that fresh-eyes zero-context agents find issues that research-loaded agents miss entirely. Auditor J is the PA's version of this principle.

The Mode 4 PA already uses 9 auditors. Adding 1 more (10 total) is a marginal cost increase. The gestalt auditor's output is SHORT (50-word impression + 3 personality words), so it does not burden the weaver's synthesis.

Estimated quality improvement: not directly measurable as PA-05 delta. But the gestalt auditor provides a CALIBRATION signal that prevents the weaver from producing numerically-high syntheses for pages that "don't work" holistically. This is a CORRECTION mechanism, not an IMPROVEMENT mechanism.

### 8.5 Interactions / Suppressors

The gestalt auditor's opinion may CONFLICT with the structured auditors' assessments. Example: 8 auditors rate individual dimensions 3-4/5, but the gestalt auditor says "NO, this page doesn't work." The weaver must decide how to weight this.

Policy: the gestalt auditor has VETO power. If Auditor J says NO, the page cannot ship regardless of individual dimension scores. This is a strong constraint, but gestalt failure is the most damaging quality failure -- a page that passes every gate but "feels wrong" is worse than a page that fails some gates but "feels right" (the latter can be fixed; the former indicates a deeper compositional problem).

### 8.6 Verification

The gestalt auditor IS the verification mechanism. Its output is the check. The weaver reports Auditor J's verdict alongside the structured synthesis.

---

## STRUCTURAL BLIND SPOT 9: SPECIFICATION PARADOX

**Definition:** Specifying contextual, judgment-based concepts DECREASES quality because specification triggers COMPLYING mode in the builder instead of COMPOSING mode. More instruction reduces quality past a threshold. This is Report 51's Phenomenon 3 (Compression Physics) and Report 53's central finding.

### 9.1 Is It Addressable?

**NOT DIRECTLY.** The specification paradox is a FUNDAMENTAL TENSION of the pipeline approach. The pipeline exists to specify; specification suppresses quality. This is not a bug to fix but a design constraint to navigate.

### 9.2 Pipeline Mechanism -- Not a Mechanism, But a DESIGN PRINCIPLE

The specification paradox cannot be "solved" by adding a mechanism. Every mechanism is specification. Instead, it must be NAVIGATED through disciplined design choices:

**Principle 1: Specification for WHAT, not HOW.**

The conventions brief specifies CONSTRAINTS (what the output must satisfy) and VOCABULARY (what tools are available). It does NOT specify PROCESS (how to compose). Report 55 identifies the dispositional recipe as the key: "Build as if every section is a room you want to spend time in" is a disposition, not a procedure.

For Pipeline v3, the conventions brief should have a STRICT constraint:
- Constraints + vocabulary: unlimited specification (binary rules, threshold values, closed vocabularies)
- Process + composition: <= 10 lines total ("compose, don't comply" framing)
- Judgment instructions: ZERO lines (no "make it feel warm" or "ensure variety")

**Principle 2: CSS > Prose > Rules.**

Report 51 (Phenomenon 3, E-02): "CSS-as-intelligence survives at 2x the rate of prose. Code has 1:1 compression; prose has high-loss compression."

For Pipeline v3: wherever possible, encode intelligence as CSS (component library, example code blocks, reference implementations) rather than as prose rules. A CSS example showing a multi-coherent boundary is more effective than 20 lines of prose DESCRIBING multi-coherence.

**Principle 3: Volume Inversion.**

The specification paradox has a known sweet spot: ~100-200 lines of specification for Middle-tier, ~30-50 lines for Flagship-tier. Report 53's evidence:

| Experiment | Spec volume | PA-05 |
|-----------|------------|-------|
| Middle | ~100 lines recipe | 4/4 |
| Flagship | ~963 lines checklist | 1.5/4 |
| Gas Town | ~542 lines prompt | CEILING |

For Pipeline v3: hard cap the conventions brief at 200 lines. If the brief exceeds 200 lines, COMPRESS (remove judgment rules, merge overlapping constraints, convert prose to CSS examples).

**Principle 4: Exemplar-anchored specification.**

Report 55 (condition 5): "The builder sees exemplars. Opus abstracts patterns from examples better than from rules." Instead of specifying multi-coherence through rules, show the builder 2-3 screenshots of multi-coherent boundaries and say "achieve this quality of boundary coordination." The pipeline's role shifts from SPECIFICATION (describing what to do) to CURATION (selecting the right examples).

### 9.3 What's Genuinely Lost

The specification paradox means the pipeline CANNOT fully specify Flagship quality. Some quality dimensions (atmospheric conviction, compositional fluency, emotional arc) are contextual, judgment-based concepts that degrade under specification. The pipeline can ENABLE them (through disposition-setting, exemplars, and constraint removal) but cannot ENSURE them.

This is the honest answer: **Flagship 4/4 quality is probabilistic, not deterministic.** The pipeline raises the probability from ~10% (no pipeline) to ~30-50% (well-designed pipeline) but cannot reach 100%. The remaining gap requires builder talent (COMPOSING mode in Opus) and content affordance (heterogeneous, metaphor-supporting content).

### 9.4 Priority

**HIGHEST -- this is not a feature to implement but a design philosophy to embody.**

Every Pipeline v3 design decision should be evaluated against the specification paradox: "Does adding this rule/gate/constraint improve the output, or does it add cognitive load that pushes the builder toward COMPLYING?" If the answer is the latter, delete the rule.

The specification paradox is not a blind spot to "cover" -- it is a LENS through which all other blind spot coverage decisions should be evaluated. Every mechanism proposed in this document risks triggering the specification paradox. The mitigation (binary rules, CSS-as-intelligence, volume caps, exemplars) is not a one-time fix but a continuous discipline.

### 9.5 Interactions / Suppressors

The specification paradox interacts with EVERY other blind spot:
- Emotional arc specification risks triggering compliance (mitigated by CSS parameters, not labels)
- Anti-pattern rules add cognitive load (mitigated by placing in gate runner, not brief)
- Reader model adds specification (mitigated by world-description framing)
- Iteration adds process steps (mitigated by EVALUATION iteration, not SPECIFICATION iteration)

The paradox is the meta-suppressor. It is the reason that Pipeline v2's 542-line prompt produced CEILING (3.5/4) rather than Flagship -- the prompt was excellent but too long. Pipeline v3 must be shorter AND smarter, not just smarter.

### 9.6 Verification

**The specification paradox cannot be verified by gates.** It is verified by OUTCOME: does the pipeline reliably produce pages where the builder was in COMPOSING mode? The proxy measurement is PA-05 >= 3.5/4 AND the gestalt auditor (Auditor J) saying YES.

A structural check: count the number of judgment-based rules in the conventions brief. Target: ZERO. Every rule should be binary (pass/fail with a threshold) or vocabulary-based (closed set of permitted values). If a rule contains the words "should feel," "ensure variety," "appropriate," or "balanced," it is a judgment rule and should be removed or converted to a binary threshold.

---

## SYNTHESIS: COVERAGE PRIORITY MATRIX

| Blind Spot | Addressable? | Priority | Effort | Mechanism |
|-----------|-------------|---------|--------|-----------|
| 1. Temporal Composition | Motion: NO (design choice). Transitions: YES | LOW | Low | Add transition vocabulary to brief + gate |
| 2. Reader Model | Entry context: NO. Expertise: PARTIALLY. Device: YES | MODERATE | Low | Add reader classification to TC Phase 0D |
| 3. Emotional Arc | YES | **HIGH** | Moderate | Emotional trajectory in TC brief + 2 new PA questions |
| 4. Anti-Patterns | YES | MODERATE-HIGH | Low | 6 binary anti-pattern gates in gate runner |
| 5. Cross-Page Coherence | YES (system level) | LOW (< 5 pages) | Low | Soul + tokens + components already sufficient |
| 6. Revision Quality | Process, not output | LOW (initial) | Low | Revision guide as post-build deliverable |
| 7. True Iteration | PARTIALLY | **HIGH** | Moderate-High | Midpoint evaluation (v3), per-zone rendering (aspirational) |
| 8. Gestalt Perception | PARTIALLY | MODERATE-HIGH | Low | Add Auditor J (gestalt, no framework) with veto power |
| 9. Specification Paradox | NOT DIRECTLY | **HIGHEST** | N/A (design philosophy) | Volume cap, CSS > prose, disposition > procedure, zero judgment rules |

### Pipeline v3 RECOMMENDED Implementation Order

**Phase 1 (must-have for v3):**
1. Specification paradox lens (200-line brief cap, zero judgment rules)
2. Emotional arc (trajectory in TC brief + PA questions)
3. Anti-pattern gates (6 binary gates in gate runner)
4. Gestalt auditor (Auditor J with veto)

**Phase 2 (should-have for v3):**
5. Midpoint evaluation (Option A from blind spot 7)
6. Reader classification (TC Phase 0D)
7. Transition vocabulary (brief + gate)

**Phase 3 (future, post-v3):**
8. Per-zone rendering (requires Playwright access for builder)
9. Cross-page coherence (requires 5+ pages)
10. Revision protocol (requires maintenance lifecycle)

### What's Genuinely Impossible

Three dimensions are HARD LIMITS that no pipeline redesign can fully address:

1. **True scroll experience.** The audit sees screenshots, not scroll. Gestalt approximation is the best we can do.
2. **Reader entry context.** Static HTML cannot detect referral source. "You Are Here" box is the universal mitigation.
3. **Specification paradox resolution.** The tension between specification and creative freedom cannot be eliminated. It can only be navigated through disciplined brevity and exemplar-anchored design.

These are not failures of the pipeline. They are boundary conditions of the medium (static HTML), the delivery mechanism (static serving), and the approach (AI-generated design from specifications). Naming them clearly prevents wasted effort on impossible goals.

---

**END OF REPORT 07**

*9 blind spots analyzed (6 named + 3 structural). 4 are fully addressable within Pipeline v3 (emotional arc, anti-patterns, gestalt auditor, transition vocabulary). 3 are partially addressable (reader model, true iteration, revision quality). 2 are fundamental limits (specification paradox navigable but not solvable; scroll experience approximable but not capturable). The highest-priority interventions: specification paradox discipline (200-line cap, zero judgment rules), emotional arc specification + verification, anti-pattern gates, gestalt auditor with veto power. These 4 changes collectively address the largest quality gaps identified in Reports 52-55 while respecting the specification paradox that constrains all pipeline improvements.*

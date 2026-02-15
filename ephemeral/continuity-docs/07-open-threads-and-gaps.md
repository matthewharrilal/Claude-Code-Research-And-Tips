# Open Threads, Research Gaps, and Unexplored Dimensions

**Author:** threads-recovery
**Date:** 2026-02-15
**Sources:** All 11 research reports (richness-research/01-05, rigidity-research/01-06) + continuity-docs/02-worldview-and-goals.md + HANDOFF.md

---

## PART 1: OPEN THREADS (Raised But Unresolved)

These are questions explicitly raised across the research that received investigation but NO definitive answer. They remain open because they require EMPIRICAL testing, not more analysis.

### OT-01: The Diminishing Returns Peak

**Raised by:** metacognitive-analyst (04-metacognitive-analysis.md, Dimension 7), unified richness synthesis (Q1), unified rigidity synthesis (Q1)

**The question:** At what mechanism count does additional technique deployment transition from "adding richness" to "adding noise"? Is the peak at 6 techniques (Variant B range), 10, 15, or 18?

**What we know:** The archaeologist showed correlation between technique count and quality scores across showcase pages (DD 10/44, OD 23/44, AD 33/44, CD 44/44). But all showcase pages were in the 10-44 range. Nobody tested what happens below 10 with perfect execution vs. above 15 with average execution. The metacognitive-analyst drew a theoretical diminishing returns curve and noted that OD-004 has SIX orientation systems serving the same purpose (confidence switcher, evidence DNA, geological minimap, stratum boundary markers, progress squares, "You Are Reading" markers) -- at some point, six orientation systems is five too many.

**What would resolve it:** Build the same content at 5, 8, 12, and 18 mechanism counts. Blind user evaluation of which feels richest.

**Priority:** HIGH -- this determines whether the pipeline should target 8 mechanisms or 12 or "as many as coherently fit."

---

### OT-02: What Does Exceptional Middle Tier Feel Like?

**Raised by:** implications-explorer (Territory A), unified richness synthesis (Q3), unified rigidity synthesis (Q4), HANDOFF.md (actionable #5)

**The question:** Can a page with full CRESCENDO density, zone backgrounds, grid/flex layouts, dark header, accessibility, typography trinity, and NO metaphor achieve the "place" feeling? Or does the "place" quality require metaphor penetration?

**What we know:** The implications-explorer identified a threshold effect: below threshold = generic, at threshold = designed, above threshold = place. Track 1 assembly may cross the "designed" threshold. Nobody has built a page that maximizes everything EXCEPT metaphor to test whether "designed" is sufficient for the user's stated goal ("places you want to spend time in").

**What would resolve it:** Build one. ALL research agents (11/11) agree this is the most important untested hypothesis. The tier architect's data shows the Floor-to-Middle transition has the highest ROI (3-4x richness for +45 minutes).

**Priority:** HIGHEST -- this single experiment reframes the entire Ceiling/Flagship ambition.

---

### OT-03: The Vocabulary-vs-Library Tension (Resolved in Principle, Untested in Practice)

**Raised by:** HANDOFF.md Section 7, identity-theorist (Section 5), rigidity archaeologist (Section 5)

**The question:** The mechanism catalog (grammar/) contains 18 transferable techniques. The case studies (case-studies/) contain 9 metaphor-specific implementations. The anti-gravity system (R2) enforces separation. But in PRACTICE, does a builder who reads a mechanism description deploy it DIFFERENTLY than a builder who has seen it deployed in a case study? Is the Name Test + Transfer Test sufficient to prevent convergence, or does mere awareness of the case study contaminate?

**What we know:** Phase D Variant C converged to geological metaphor despite anti-gravity R6. Variant B (skill-only, no library exposure) produced the most novel output (4/5). This suggests that library exposure may contaminate even when the builder "knows" they should diverge. But Variant B also had LOWER technique density than showcase pages, suggesting the library provides vocabulary breadth that pure skill-following misses.

**What would resolve it:** A controlled comparison: Builder A reads only mechanism-catalog.md (abstractions). Builder B reads mechanism-catalog.md + 2 case studies (concrete examples). Same content. Compare novelty AND technique density. If Builder B is more novel AND more technique-dense, library exposure is net positive. If Builder B converges but with more techniques, the trade-off is real.

**The deeper untested dimension (mechanism density itself):** Even without library exposure, there is a separate question: does HIGH mechanism density from grammar/ alone produce derivative-feeling output? A page using 8-10 mechanisms (dark header, zone backgrounds, density rhythm, border-weight gradient, 2-zone DNA, solid offset depth...) may LOOK like the showcase pages because the CSS structural patterns create a recognizable visual signature -- regardless of whether the metaphor is novel. The Name Test proves mechanisms are transferable in principle. But transferable tools used at high density may produce a recognizable "house style" that FEELS like convergence when viewing pages side by side.

This is precisely what the Middle-tier experiment tests. If a page with 8-10 mechanisms and NO metaphor feels derivative (too similar to showcase pages), then anti-gravity needs to address mechanism COMBINATION divergence, not just metaphor divergence. If it feels novel, grammar/ is confirmed as safe vocabulary. This question shapes how builders approach every tier experiment -- it determines whether grammar/ = vocabulary (use freely) is practical truth or theoretical aspiration.

**Priority:** MEDIUM for the library-exposure dimension. But the mechanism-density-novelty dimension is effectively tested by the HIGHEST-priority experiment (OT-02: exceptional Middle tier), making it a passive beneficiary of the most important build.

---

### OT-04: Content-Type Specific Richness

**Raised by:** implications-explorer (Section 2), metacognitive-analyst (Challenge 6), tier architect (Open Question 3)

**The question:** Does richness look FUNDAMENTALLY different for tutorials vs. reference docs vs. philosophical essays vs. personal narratives? Or does the mechanism catalog apply uniformly and only the METAPHOR differs?

**What we know:** The implications-explorer mapped content types: tutorial content benefits from spatial isolation (bento grid), clear F-pattern progression, discrete step markers. Narrative/philosophical content benefits from graduated atmospheres, descending density. Map/spatial content benefits from hub-spoke topology. But ALL of these use the same mechanism catalog -- the mechanisms are metaphor-agnostic by design (the Name Test). What changes is which mechanisms are SELECTED and how they are COMBINED.

**What remains unresolved:** Whether some content types have a LOWER natural ceiling for richness. A 300-word API reference may not support 8 mechanisms regardless of execution quality. The tier architect proposed content-type-to-tier mapping (API refs -> Floor, tutorials -> Middle, essays -> Ceiling) but this mapping is speculative. Some tutorials might warrant Ceiling treatment (metaphor-driven tutorials about abstract concepts).

**What would resolve it:** Classify the actual content corpus. Map each page's structural properties to potential richness levels. Produce a distribution: how many pages naturally map to each tier?

**Priority:** MEDIUM -- this is needed for production pipeline planning but not for the immediate next experiment.

---

### OT-05: Builder Fluency Curve

**Raised by:** metacognitive-theorist (Part 7), unified rigidity synthesis (Q2)

**The question:** Does pipeline output improve with repeated execution by the same agent? Is the richness gap SELF-HEALING as builders develop fluency with the constraint system?

**What we know:** The metacognitive-theorist predicted three phases: early pages (1-10) follow rules carefully but produce unsurprising output; middle pages (11-40) show emerging familiarity; late pages (41-75) potentially approach showcase quality because builders have internalized the constraints. The analogy: "A child learning language operates under extreme rigidity (grammar rules). An adult who has internalized grammar can produce infinite novel sentences."

**What remains unresolved:** Whether this actually happens with Claude agents operating under the skill. Agents do not have persistent memory between sessions in the standard setup. Each pipeline run is a fresh context. The "fluency" would have to come from the growing metaphor record library and accumulated case studies, not from agent memory.

**What would resolve it:** Track quality metrics across 20+ sequential pipeline runs. Measure whether page 15 is measurably better than page 1 for the same agent configuration. If quality is flat, fluency doesn't develop through the pipeline alone. If quality improves, the compounding library is working.

**Priority:** MEDIUM -- only answerable after 10+ pages exist. Not blocking for the next experiment.

---

### OT-06: Collection-Level Experience

**Raised by:** metacognitive-analyst (Dimension 6), unified richness synthesis (Blind Spot 2), metacognitive-theorist (Blind Spot 2, Framing 3)

**The question:** What does it feel like to BROWSE 75+ pages, each with a unique metaphor, bound by shared soul constraints? Is the collection coherent (soul constraints create unity) or chaotic (75 unique spatial languages overwhelm)?

**What we know:** The metacognitive-theorist offered the ecosystem analogy: "A rainforest has rigid constraints (soil, rainfall, temperature) but the ecosystem is rich because constraints create NICHES." This suggests 75 unique pages could create an extraordinary browsing experience where navigating between pages IS the richness. But the counterargument is also strong: "I am reading an article structured as geological strata. Now I click and it is a botanical garden. Now a nautical chart. Now an orchestral score." This could create cognitive chaos.

**What remains unresolved:** Whether the soul constraints (border-radius: 0, warm palette, typography trinity) are STRONG ENOUGH to create coherence across 75 unique metaphor vocabularies. And whether readers develop "design system literacy" -- an ability to recognize the shared identity despite metaphor variation.

**What would resolve it:** Build 10 pages across all 4 tiers. Navigate between them. Assess whether soul constraints create collection cohesion despite metaphor diversity.

**Priority:** MEDIUM -- only answerable at scale. Not blocking for the next experiment.

---

### OT-07: Reader Validation

**Raised by:** unified richness synthesis (Blind Spot 1), metacognitive-analyst (Challenge 6), unified rigidity synthesis (Gap 5)

**The question:** Nobody has asked a READER. All richness analysis is from the BUILDER'S perspective. Do readers notice border-weight encoding? Do they perceive multi-channel coherence? Do they feel the difference between 8 and 15 mechanisms? Does metaphor-driven CSS improve COMPREHENSION or just ENGAGEMENT?

**What we know:** Absolutely nothing from the consumer side. The entire richness framework is built on producer-side metrics (technique counts, mechanism deployments, programmatic checks). The metacognitive-analyst asked the pointed question: "After reading OD-004, does the reader remember the API best practices? Or do they remember 'the one with the geological strata'?" If richness improves engagement but not comprehension, and the user's goal is BOTH engagement and comprehension, we need to know.

**What would resolve it:** Show the same content to readers in 3 presentations: (1) pre-design-system (generic), (2) Middle tier (designed, no metaphor), (3) Ceiling tier (metaphor-driven). Measure engagement time, comprehension recall, and subjective preference. This would definitively answer whether metaphor-rich presentation serves readers or serves the design system.

**Priority:** HIGH but DEFERRED -- requires actual readers, which is outside the current agent-based workflow. Flag for when the content goes to real users.

---

### OT-08: "Sample 2-4 Mechanisms" Bottleneck

**Raised by:** All 11 research agents independently

**The question:** The instruction exists in two inconsistent forms ("3-5" at one location, "2-4" at another). It caps technique density, prevents engagement with the full catalog, and creates a 50:1 compression from accumulated showcase knowledge. How should it be replaced?

**What we know:** The modification analyst proposed per-category minimum (1+ per property category) + justification. The metacognitive-theorist proposed toolkit framing ("you HAVE 18 mechanisms" rather than "you MUST deploy X"). The tier architect proposed specific counts per tier (5/8-10/12-15/16-18). All agree the current instruction is the SINGLE MOST LIMITING specification, but they disagree on the replacement.

**What remains unresolved:** Whether the replacement should be a count-based floor, a category-based requirement, a justification-based approach, or a framing shift. The modification analyst warned that any raw number mandate encourages padding and Goodhart's Law distortion.

**What would resolve it:** IMPLEMENTING one approach and testing it. The user has not committed to any of the proposed replacements.

**Priority:** BLOCKING -- this must be resolved before the next pipeline build.

---

### OT-09: Ambient Rigidity Management Over Time

**Raised by:** metacognitive-theorist (Part 2, Type 4), modification analyst (Interaction Effects), unified rigidity synthesis (T3)

**The question:** With ~168 constraints, 493 lines of CLAUDE.md protocol, and 1,402 lines of skill procedure all simultaneously active, does the VOLUME of rules create cognitive overload that narrows creative space even though no single rule is limiting?

**What we know:** The metacognitive-theorist's musical analogy: "Imagine telling a musician: 'You must use these 12 notes, in these harmonic relationships, with this form, using at least 8 of 18 technique families, while maintaining self-similarity at 4 scales...' At some point, the VOLUME of enabling constraints creates ambient rigidity that no single constraint caused." The modification analyst showed that adopting all 4 modifications AS ORIGINALLY STATED would create a "checklist factory" through compound ambient rigidity.

**What remains unresolved:** Whether ambient rigidity is ACTUALLY degrading output (Variant B achieved 18/19 compliance and 4/5 novelty despite operating under all current constraints) or merely theoretically concerning. The metacognitive-theorist proposed tiered constraint presentation (Level 1 soul, Level 2 grammar, Level 3 guidelines) and progressive fluency, but neither has been designed or tested.

**What would resolve it:** Compare output from builders given ALL constraints simultaneously vs. builders given constraints in tiered progression. If quality differs, ambient rigidity is real. If not, it is theoretical.

**Priority:** LOW-MEDIUM -- the current constraint level does not appear to be degrading output (Variant B evidence), but the concern becomes more acute as more constraints are added.

---

### OT-10: The "Exceptional Middle" Question

**Raised by:** unified richness synthesis (Q3), tier architect (Recommendation 1), implications-explorer (Territory A)

**The question:** Can a Middle-tier page feel DESIGNED enough to prevent the "eyes drift off" feeling that motivated the entire design system -- without requiring metaphor derivation?

**What we know:** The tier architect showed that Middle tier adds grid/flex layouts, zone backgrounds, density rhythm, dark header, and accessibility for 3-4x richness gain over Floor. The implications-explorer identified this as the engagement threshold. The unified synthesis proposed it as the universal floor. But nobody knows if it achieves the EXPERIENTIAL quality the user described.

**What remains unresolved:** This is fundamentally the same question as OT-02 (exceptional Middle tier), but framed from the user's subjective experience perspective rather than the technical perspective. The answer is the same: build one and test it.

**Priority:** HIGHEST (same as OT-02).

---

## PART 2: AREAS NEEDING MORE RESEARCH

### R-01: Low-Confidence Claims That Need Verification

| Claim | Source | Confidence | Why Low |
|-------|--------|------------|---------|
| "80% of perceptual richness from component-level decisions, not CSS-level penetration" | metacognitive-analyst (Challenge 4) | LOW | Unsubstantiated intuition, no measurement |
| "~60-65% of the gap is addressable through pipeline modifications" | identity-theorist (Section 9) | MODERATE | Based on proportional attribution, not empirical testing |
| "The richness gap may be self-healing over time" | metacognitive-theorist (Part 7) | LOW | No evidence of agent fluency development exists |
| "Middle tier achieves 3-4x Floor richness" | tier architect (Cost-Benefit Summary) | MODERATE | Derived from CSS technique count ratios, not perceptual measurement |
| "Metaphor quality follows a power law at scale" | implications-explorer (Section 4.2) | LOW | Speculative extrapolation from 30 current metaphors |
| "The enabling-to-limiting ratio is overwhelmingly positive (164/168 enabling)" | metacognitive-theorist (Part 5) | MODERATE | Defensible categorization but the 80/20 between "enabling" and "protective" is debatable |

### R-02: Assumptions Never Tested

| Assumption | Where Used | Risk if Wrong |
|-----------|-----------|---------------|
| Content-type determines richness level | All tier specifications | Some tutorials might benefit enormously from metaphor; some essays might not |
| The Addition Test accurately classifies Track 1 vs Track 2 | Pipeline routing, CLAUDE.md | A content piece might pass the Addition Test (components suffice) but still feel flat without metaphor |
| Readers benefit from spatial richness | Entire project motivation | If readers primarily want scannable content, richness is a tax on comprehension |
| Soul constraints are sufficient for collection coherence | Collection-level vision | 75 unique metaphors might overwhelm 3 shared identity constraints |
| Mechanism independence (Name Test) truly produces different output per metaphor | Anti-gravity system, mechanism catalog | If "border-weight gradient" always looks roughly the same regardless of metaphor, mechanisms converge despite being "transferable" |
| The 4-tier model maps cleanly to the real content corpus | Production planning | The actual distribution might be 30% Floor / 50% Middle / 15% Ceiling / 5% Flagship, or completely different |
| Anti-gravity R6 (divergence mandate) remains appropriate at production scale | 75+ page production | After 40-50 pages, forcing novel metaphor domains may produce strained metaphors worse than reusing proven ones |

### R-03: What Would Change If Investigated

| Investigation | If Positive | If Negative |
|--------------|-------------|-------------|
| Reader comprehension testing | Metaphor-driven pages = higher recall -> invest heavily in Ceiling/Flagship | Same comprehension -> Middle tier is sufficient for most content |
| Diminishing returns experiment | Peak at 8-10 mechanisms -> Middle is optimal ceiling | Peak at 14+ mechanisms -> Ceiling is the right default |
| Exceptional Middle build | Achieves "place" feeling -> 80% of pages are Middle, 15% Ceiling, 5% Flagship | Feels "designed" but not "place-like" -> 40% Middle, 40% Ceiling, 20% Flagship |
| Builder fluency tracking | Fluency develops -> early pages are investment, quality compounds | Fluency doesn't develop -> every page is equally expensive |
| Collection navigation test | Soul creates coherence -> 75 unique metaphors work as collection | Soul insufficient -> need content-type-based metaphor families, not individual novelty |
| Maintenance cost measurement | <30 min to update content on rich page -> maintainability is manageable | >2 hours to update -> rich pages become technical debt |

---

## PART 3: UNEXPLORED DIMENSIONS

These are perspectives not taken, intersections not explored, and second-order effects not modeled.

### U-01: Text-Level Rhythm as Richness Dimension

**Raised by:** metacognitive-analyst (Dimension 1, Part 2)

All richness discussion focuses on CSS and component architecture. But a significant portion of perceptual richness comes from THE TEXT ITSELF: sentence length variation, paragraph density variation, rhetorical structure, tone modulation. Well-written content with simple CSS may feel richer than poorly-written content with complex CSS. No agent explored the interaction between content quality and CSS richness. If content quality varies across the corpus, some pages will feel rich at any technique count and others will feel flat regardless.

**Why unexplored:** The research scope was CSS richness. Text quality was treated as a fixed input.

**What exploring it would reveal:** Whether the design system should include text-level guidelines (sentence length variation, paragraph density patterns) alongside CSS guidelines.

### U-02: Reader Agency as Richness Dimension

**Raised by:** metacognitive-analyst (Dimension 2)

Rich pages with linear scroll (most showcase pages) give the reader one degree of freedom: scroll speed. A page with 3 techniques but excellent non-linear navigation (jump-to-section, collapsible sections, tab interfaces) might be perceptually richer than a 15-technique linear scroll. Production readers have TASKS -- they want specific information. Agency (search, filter, jump) serves tasks. Linear scroll through metaphor-rich pages does not.

**Why unexplored:** Showcase pages were designed as complete scrollable narratives. Agency-oriented design requires a different design philosophy.

**What exploring it would reveal:** Whether a hybrid approach (rich spatial design + non-linear navigation) produces better reader outcomes than either alone.

### U-03: Accessibility Debt at Scale

**Raised by:** metacognitive-analyst (Dimension 3)

OD-004 uses scroll-driven animations (Chromium-only), color-encoded confidence levels, 13px text in epistemic markers, and complex DOM structures from metaphor-penetrating CSS. If 75+ unique layouts each need individual accessibility auditing, the WCAG compliance cost is enormous. The perceptual-auditing skill checks guardrails but does NOT run WCAG compliance checks.

**Why unexplored:** Accessibility was treated as a binary (skip-link/focus-visible/reduced-motion present or absent), not a spectrum.

**What exploring it would reveal:** Whether rich pages can be made accessible AT BUILD TIME through additional skill modifications, or whether retroactive accessibility remediation is required.

### U-04: Performance Cost Per Page

**Raised by:** metacognitive-analyst (Dimension 4)

Each showcase page is 2000+ lines of unique, non-reusable HTML+CSS. With scroll-driven animations, multiple background zones, and web font loading, each page is a performance investment. Across 75+ pages, no shared stylesheet benefit exists because each page's metaphor-derived CSS is unique. Mobile users on slow connections download 2000+ lines per page vs. 500 lines for a component-library approach.

**Why unexplored:** The project builds single-file HTML pages where performance is localized. But if these pages become part of a site, the cumulative performance cost matters.

**What exploring it would reveal:** Whether a shared base stylesheet (soul + tokens + components) with per-page metaphor overlays would reduce page weight while preserving richness.

### U-05: Maintainability at Scale (The Coupling Problem)

**Raised by:** metacognitive-analyst (Dimension 5, Effects 2-5), implications-explorer (Section 5.3)

When content changes on a showcase page, the CSS may need to change because CSS ENCODES content structure. OD-004's four confidence strata are HARDCODED into CSS classes. Adding a 5th confidence level or removing "Open Questions" requires rewriting CSS at all four fractal scales. At 75+ pages, each with unique CSS vocabulary: no two pages share component names, content updates require CSS expertise, no one can maintain pages they did not build without first learning the metaphor. The richer the page, the more tightly coupled content and presentation become. The more coupled, the harder to maintain. The harder to maintain, the faster it becomes stale.

**Why unexplored:** No agent estimated actual maintenance hours. The concern is theoretical.

**What exploring it would reveal:** The concrete cost of maintaining rich pages vs. component-assembled pages. Take 3 existing showcase pages, attempt content modifications, measure time and error rate. Compare to the same modifications on Variant B.

### U-06: Cross-Page Cognitive Load

**Raised by:** metacognitive-analyst (Dimension 6), unified richness synthesis (Blind Spot 2)

Each showcase page teaches the reader a new spatial metaphor. At 75+ pages, the reader encounters 75+ unique spatial languages. The question: is there value in cross-page CONSISTENCY? Should all technical references use the same structural pattern (F-pattern) so readers develop muscle memory? RESEARCH-SYNTHESIS.md Principle 2 says "Match axis pattern to section purpose" -- implying content TYPE should determine pattern, not that every page should have a UNIQUE pattern. A consistent mapping (reference -> F-pattern, tutorial -> PULSE, overview -> bento grid) would give readers predictability BETWEEN pages while maintaining richness WITHIN pages.

**Why unexplored:** The showcase pages were designed as individual explorations, not as members of a navigable collection.

**What exploring it would reveal:** Whether content-type-based pattern consistency reduces cognitive load without reducing richness.

### U-07: The "Rules vs. Tools" Framing Shift

**Raised by:** metacognitive-theorist (Part 10, Blind Spot 1), unified rigidity synthesis (Blind Spot 3)

Two builders given identical constraints produce different output depending on whether they experience constraints as RULES TO FOLLOW or TOOLS TO USE. "You MUST deploy 8 mechanisms" vs. "you HAVE access to 18 mechanisms -- your goal is to use the ones that AMPLIFY this content's inherent structure." This framing shift was proposed by multiple agents but NEVER TESTED.

**Why unexplored:** It requires implementing both framings and comparing output, which requires actually running pipeline builds.

**What exploring it would reveal:** Whether framing actually changes agent behavior, or whether agents respond identically to "must X" and "have access to X."

### U-08: Constraint Interaction Effects

**Raised by:** metacognitive-theorist (Blind Spot 4), modification analyst (Interaction Effects), unified rigidity synthesis (Gap 1)

Constraints interact non-additively. Some pairs are synergistic (border-radius: 0 + box-shadow: none TOGETHER force structural depth techniques). Some are conflicting ("sample 2-4 mechanisms" + "fractal at 4 scales" often requires 5+ mechanisms). No comprehensive interaction matrix exists. The modification analyst showed that Mod 1 + Mod 4 together create a dangerous compound, while Mod 2 + Mod 3 together are safely complementary. But the full constraint system has ~168 items with unknown interaction effects.

**Why unexplored:** Mapping all pairwise interactions of 168 constraints is combinatorially impractical. But mapping interactions between the ~20 most impactful constraints is feasible and has not been done.

**What exploring it would reveal:** Which constraint pairs should be co-applied (synergistic) and which should never both be active simultaneously (conflicting).

### U-09: The Temporal Dimension of Richness

**Raised by:** unified richness synthesis (Blind Spot 4)

All analysis is static -- a snapshot of richness at the moment of page load. But the EXPERIENCE of richness unfolds over time as the reader scrolls. Scroll-driven animations, progressive revelation, and rhythm variation are temporal phenomena. Pages that feel rich may feel so because of temporal pacing (the reveal sequence), not structural complexity (where things are). If temporal design matters more than spatial design, the technique count metric misses the most important dimension entirely.

**Why unexplored:** Static CSS analysis is easier to measure than temporal experience.

**What exploring it would reveal:** Whether a page with simple structure but excellent temporal pacing (well-timed reveals, scroll-responsive elements) outperforms a structurally complex but temporally flat page.

### U-10: The Ecosystem Reframe

**Raised by:** metacognitive-theorist (Framing 3), unified rigidity synthesis (Surprise 5)

The most novel reframe: "Stop trying to reproduce ecosystem-level richness in individual pages. Instead, design the pipeline so that each page CONTRIBUTES to an ecosystem of richness." A single tree cannot be a rainforest. 75 pages forming a collection where each page's discoveries feed the next may achieve collection-level richness exceeding any individual showcase page.

**Why unexplored:** Requires the collection to exist first. Cannot be tested with individual pages.

**What exploring it would reveal:** Whether the design system's ultimate value is in individual page quality or in the emergent quality of the navigable whole.

---

## PART 4: PRIORITY MAP

### MUST Resolve Before Building (Blocking)

| ID | Thread | Why Blocking | Estimated Resolution Effort |
|----|--------|-------------|---------------------------|
| OT-08 | "Sample 2-4 mechanisms" replacement | Cannot run pipeline without fixing the single most limiting instruction. All 11 agents agree. | 1-2 hours: edit SKILL.md |
| OT-02 / OT-10 | Exceptional Middle tier page | All 11 agents agree this is the most important untested hypothesis. Determines whether Ceiling tier is needed for most content or only for select content. | 2-3 hours: build one page + evaluate |
| -- | Container width enforcement | 4/5 Phase D pages violated 940px. Must add NON-NEGOTIABLE rule to Phase 4.0 guardrails. | 30 minutes: edit SKILL.md |
| -- | Fractal gate promotion | All reports agree fractal should be a GATE. Highest richness gain, lowest rigidity cost. | 1 hour: edit SKILL.md with scale coverage table |

### CAN Resolve Through Building (Experimentation)

| ID | Thread | How Building Resolves It | When |
|----|--------|------------------------|------|
| OT-01 | Diminishing returns peak | Build same content at 5/8/12/18 mechanisms. Compare. | After first 3 builds |
| OT-04 | Content-type specific richness | Build different content types at Middle and Ceiling. Observe. | During production pipeline (first 10 pages) |
| OT-05 | Builder fluency curve | Track quality across sequential builds. | After 10+ builds |
| OT-06 | Collection-level experience | Build 10+ pages. Navigate between them. | After 10+ pages exist |
| OT-03 | Vocabulary-vs-library tension | Compare skill-only vs. skill+case-study builder output. | Anytime 2 parallel builds can be run |
| U-07 | "Rules vs. Tools" framing | A/B test: one builder gets mandate framing, another gets toolkit framing. | During early production builds |
| OT-09 | Ambient rigidity | Compare all-at-once vs. tiered constraint presentation. | When tier system is formalized |
| U-05 | Maintainability cost | Update content on 3 rich pages. Measure time and complexity. | After 3+ Ceiling pages exist |

### Interesting But Not Blocking (Future Research)

| ID | Thread | Why Not Blocking | When Relevant |
|----|--------|-----------------|--------------|
| OT-07 | Reader validation | Requires actual readers, outside agent workflow | When content goes to real users |
| U-01 | Text-level rhythm | Content quality is a fixed input for the design system | If content quality varies significantly across corpus |
| U-02 | Reader agency | Requires interactive components beyond current scope | If the design system moves to interactive pages |
| U-03 | Accessibility debt | Individual pages pass basic a11y; comprehensive WCAG at scale is future work | After 20+ pages, before public release |
| U-04 | Performance cost | Single-file pages have acceptable performance; only matters for a multi-page site | When/if pages become part of a deployed site |
| U-06 | Cross-page cognitive load | Cannot test without a navigable collection | After 20+ pages with navigation |
| U-08 | Constraint interaction mapping | Current constraint set works (Variant B evidence); only urgent if new constraints are added | Before adding any new specification constraints |
| U-09 | Temporal dimension | Current pages use scroll-driven animation; deeper temporal analysis is refinement | After the tier system is validated |
| U-10 | Ecosystem reframe | Requires the collection to exist | After 30+ pages |

---

## SUMMARY: The Research Landscape

### What Is Settled (High Confidence)
- Richness comes FROM constraint, not despite it
- The 4-type constraint taxonomy (identity/procedural/specification/ambient)
- Vocabulary rigidity outpaces constraint rigidity 4:1
- "Sample 2-4 mechanisms" is the single most limiting instruction
- Content type should determine richness level (4-tier model)
- The paradox dissolves when rigidity types are distinguished
- The fractal gate is the highest-ROI modification (lowest cost, highest gain)

### What Is Proposed But Untested (Moderate Confidence)
- The 4-tier model (Floor/Middle/Ceiling/Flagship) with specific mechanism counts
- Per-category minimum as the mechanism mandate replacement
- Middle tier as the universal floor
- Toolkit framing vs. compliance framing
- Tiered constraint presentation to manage ambient rigidity
- Sunset protocol for constraint retirement

### What Is Unknown (Low Confidence)
- Where the diminishing returns peak falls
- Whether exceptional Middle tier achieves the "place" feeling
- Whether builder fluency develops through the pipeline
- Whether collection-level richness emerges at scale
- Whether readers perceive the difference between tiers
- Whether ambient rigidity is actually degrading current output
- How maintainability cost scales with richness
- How the "rules vs. tools" framing affects agent behavior

### The Single Most Important Finding Across All Research

**"One experiment resolves more questions than another four research reports."** (Unified richness synthesis, Blind Spot 5). The amount of ANALYSIS about richness now substantially exceeds the amount of EXPERIMENTATION with richness. The next step with the highest information-to-cost ratio is a BUILD, not more research.

---

**END OPEN THREADS AND GAPS MAP**

# Meta-Level Enrichment Extraction

**Extractor:** meta-enrichment agent (Opus 4.6)
**Date:** 2026-02-23
**Sources:** 06-unmeasured-dimensions.md, 12-pa-question-deep-analysis.md, 13-adversarial-review.md, 14-perceptual-science-foundations.md, 16-macroscopic-quality.md, 17-meta-meta-analysis.md

This document captures THINKING-LEVEL changes -- things that change HOW the pipeline thinks about quality, not just WHAT it checks.

---

## TABLE OF CONTENTS

1. [Proposed NEW PA Questions](#1-proposed-new-pa-questions-40-total)
2. [Proposed NEW Gates](#2-proposed-new-gates)
3. [Proposed NEW Measurement Instruments](#3-proposed-new-measurement-instruments)
4. [Proposed CHANGES to Existing PA Questions](#4-proposed-changes-to-existing-pa-questions)
5. [Proposed CHANGES to Auditor Deployment](#5-proposed-changes-to-auditor-deployment)
6. [Proposed CHANGES to Quality Frameworks](#6-proposed-changes-to-quality-frameworks)
7. [Proposed EXPERIMENTS](#7-proposed-experiments)

---

## 1. PROPOSED NEW PA QUESTIONS (40 Total)

### Source: 06-unmeasured-dimensions.md (20 questions)

#### Emotional Arc & Pacing (4 questions)

**PA-80: Emotional Sequencing**
- Question: "Scroll through the entire page at reading speed. Does your *feeling* change at least 3 times -- and do those changes happen in an order that makes sense (like a story with a beginning, middle, and end)?"
- Dimension: Emotional arc (temporal experience)
- Discrimination: Separates steady-state pages from those with designed emotional trajectories. 3/4 pages may have registers but in chaotic order; 4/4 pages sequence them.
- Pass: >= 3 distinct emotional shifts in a logical sequence
- Fail: Steady state throughout, OR emotional shifts feel random

**PA-81: Engagement Sag Detection**
- Question: "Is there a stretch of 3 or more screenfuls where your attention drifts and nothing pulls it back? Point to where it starts."
- Dimension: Cognitive load management / pacing
- Discrimination: Directly catches the Zone 4-5 monotony problem. 4/4 pages have recovery mechanisms; 3/4 pages let you skim to the end.
- Pass (inverted): No sag detected, OR sag is < 2 screenfuls
- Fail (inverted): >= 3 screenfuls of declining engagement

**PA-82: Tempo Variation**
- Question: "Do visual events (headings, components, diagrams, color shifts) arrive at different *speeds* in different parts of the page -- sometimes rapid-fire, sometimes spacious -- or do they feel evenly spaced throughout?"
- Dimension: Pacing sophistication (tempo)
- Discrimination: Catches the "flat-line" event distribution of competent but mechanical pages.
- Pass: At least 2 noticeably different tempos in different sections
- Fail: Events arrive at roughly uniform intervals throughout

**PA-83: Dynamic Range**
- Question: "Compare the visually 'loudest' moment (most dramatic visual treatment) to the visually 'quietest' moment (most restrained). Is the gap between them *wide* -- do they feel like they are operating at different volume levels?"
- Dimension: Pacing sophistication (dynamics)
- Discrimination: 3/4 pages operate at one volume; 4/4 pages have wide dynamic range.
- Pass: Clear volume differential; extremes are far apart
- Fail: Loudest and quietest are within a narrow band

#### Delight & Surprise (2 questions)

**PA-84: Micro-Delight Discovery**
- Question: "Look closely at 3 different interactive or typographic details (hover states, selection colors, number formatting, edge treatments). Do any of them reveal a refinement that was not immediately obvious -- something that makes you think 'someone cared about this detail'?"
- Dimension: Delight moments
- Discrimination: 4/4 pages reward close inspection; 3/4 pages give up all information at first glance.
- Pass: >= 1 discovered refinement that feels intentional and rewarding
- Fail: All details feel standard/expected, OR no interactive states present

**PA-85: Second-Half Surprise**
- Question: "In the bottom half of the page, is there a visual moment that genuinely surprised you -- something you did not predict from the patterns established in the top half?"
- Dimension: Surprise (emotional register, temporal placement)
- Discrimination: Catches pages that front-load their best moments then coast.
- Pass: Specific surprise named AND it works within the design language
- Fail: Bottom half continues top-half patterns without variation

#### Editorial Voice (2 questions)

**PA-86: Voice-Design Alignment**
- Question: "Read 2-3 paragraphs of content. Then look at the visual treatment around them. Does the CSS feel like it is *amplifying* the way the text speaks -- making an informal voice feel informal, a precise voice feel precise -- or does the visual treatment feel generic regardless of content?"
- Dimension: Editorial voice amplification
- Discrimination: THE separator between "good layout" and "layout that serves THIS content."
- Pass: Visual treatment noticeably shifts to match content tone
- Fail: All content receives the same visual treatment regardless of voice

**PA-87: Content-Form Specificity**
- Question: "Could this exact visual design -- same layout, same components, same visual rhythm -- work equally well for completely different subject matter? Or does it feel custom-built for THIS content?"
- Dimension: Content-form resonance / editorial specificity
- Discrimination: Catches generic template applications vs. bespoke design.
- Pass: Design feels specific to this content; transplanting it would feel wrong
- Fail: Design is generic enough to hold any content of similar length

#### Memorability & Trust (3 questions)

**PA-88: Visual Memory Test**
- Question: "Close your eyes for 5 seconds, then reopen them. What single visual image from this page persists in your memory? Is it a *designed* element (not a content heading or text block)?"
- Dimension: Visual memory / memorability
- Discrimination: 4/4 pages deposit a visual memory of a DESIGNED element; 3/4 pages are remembered only through content.
- Pass: A designed visual element is the recalled image
- Fail: Only text content is recalled, OR nothing specific persists

**PA-89: Return-Visit Landmark Test**
- Question: "Imagine you read this page yesterday and need to find one specific section. Scrolling quickly, could you navigate by visual landmarks alone (without reading text), or would you need to read headings to find your place?"
- Dimension: Information findability
- Discrimination: Catches pages where sections are visually interchangeable.
- Pass: >= 3 visually distinct landmarks that serve as navigation anchors
- Fail: Sections are visually similar enough that heading text is required

**PA-90: Trust Accumulation**
- Question: "After scrolling through the entire page, do you feel MORE trusting of the content's authority than you did at the start? Does the visual quality build credibility as you scroll, or does it erode?"
- Dimension: Reader trust signals
- Discrimination: Catches quality drop-off in later zones that destroys trust.
- Pass: Trust is same or higher at end than start
- Fail: Trust decreases at some point; a visual flaw breaks the credibility chain

#### Compositional Confidence (2 questions)

**PA-91: Design Commitment Test**
- Question: "Can you find a place where the design seems to *hedge* -- half-committing to a visual idea without fully executing it? (Example: zone backgrounds that technically differ but look the same; borders that exist but are invisible; spacing variations too small to feel.)"
- Dimension: Compositional confidence
- Discrimination: Catches sub-perceptual hedging that reads as uncertainty.
- Pass (inverted): No hedging detected; all visual decisions are either fully committed or absent
- Fail (inverted): >= 1 instance of visual hedging

**PA-92: Restraint Legibility**
- Question: "Can you point to something the design deliberately does NOT do -- a decorative move it clearly chose to avoid -- and does that absence make the surrounding design feel *stronger*?"
- Dimension: Restraint as strength (extends PA-64)
- Discrimination: Better framing than PA-64 because it asks the auditor to IDENTIFY the absence and EVALUATE its effect.
- Pass: Identifiable restraint that serves the composition
- Fail: Cannot identify deliberate absence

#### Cross-Viewport Intent (1 question)

**PA-93: Viewport Design Intent**
- Question: "At this viewport width, can you identify a specific layout decision that was made FOR this width -- something that would not exist at a different width? Or does the layout feel like a fluid scaling of a single design?"
- Dimension: Cross-viewport design intent
- Discrimination: Catches fluid-only responsive design vs. viewport-specific decisions.
- Pass: >= 1 layout decision specific to this viewport
- Fail: Layout is a scaled version of a wider/narrower design

#### Material & Sensory (2 questions)

**PA-94: Material Contrast**
- Question: "Do different types of content (prose, code, tables, quotes, diagrams) feel like they have different *physical weight* or *material quality* -- as if they are made of different substances -- or do they all feel like text-on-a-flat-surface?"
- Dimension: Sensory richness / materiality
- Discrimination: 4/4 pages create felt differences between content types; 3/4 pages format them uniformly.
- Pass: >= 3 content types with perceptibly different material presence
- Fail: All content feels like the same material with different formatting

**PA-95: Surface Tension**
- Question: "Does the space between major elements feel *taut* (deliberate, precise) or *slack* (roughly correct but not particular)? Pick 3 gaps and compare."
- Dimension: Compositional precision / confidence
- Discrimination: The "taut vs. slack" metaphor produces richer responses than "is spacing consistent?"
- Pass: Gaps feel precisely chosen; varying them would damage the composition
- Fail: Gaps feel approximately right; +/- 20% would not be noticed

#### Narrative & Logic (2 questions)

**PA-96: Argument-Design Alignment**
- Question: "If you can identify the content's logical structure (thesis-evidence-conclusion, problem-solution, simple-to-complex), does the visual design *mirror* that structure -- getting visually denser where the argument gets denser, visually resolving where the argument resolves?"
- Dimension: Narrative flow support
- Discrimination: Catches pages where visual treatment is independent of argumentative structure.
- Pass: Visual progression tracks logical progression
- Fail: Visual treatment is independent of argumentative structure

**PA-97: Zone Necessity Test**
- Question: "For each major visual zone/section, ask: does this zone NEED to look different from its neighbors to serve the content? Or could adjacent zones be merged without losing meaning?"
- Dimension: Content-form justification
- Discrimination: Catches zone-for-zone's-sake (zones exist for visual variety rather than content logic).
- Pass: Every zone transition serves a content-driven purpose
- Fail: >= 1 zone boundary exists for visual variety rather than content logic

#### Holistic (2 questions)

**PA-98: Gestalt Completion**
- Question: "Does the page feel *finished* -- like a complete thought -- or does it feel like it could continue indefinitely with more sections in the same pattern?"
- Dimension: Compositional completeness
- Discrimination: Catches pages without designed endings.
- Pass: The page has a clear arc with a designed ending
- Fail: The page could add or remove sections without changing its character

**PA-99: Would-You-Return Test**
- Question: "If this page contained information you needed regularly, would you *want* to return to it -- does the experience of reading it add value beyond the content? Or would you prefer the same information in a different format?"
- Dimension: Experience value / design justifies itself
- Discrimination: THE ultimate question -- does the design ADD something?
- Pass: The reading experience itself adds value
- Fail: The content could be equally well served by a plain document

### Source: 12-pa-question-deep-analysis.md (20 questions)

#### Engagement Sustainability (2 questions)

**NEW-01: Scroll-Stop Mechanism Detection**
- Question: "As you scroll at normal speed, does anything make you INVOLUNTARILY STOP and look more closely? What caused the stop -- a size change, a color change, a density shift, or something else?"
- Dimension: Engagement Sustainability
- Discrimination: Catches pages that flow nicely but never ARREST attention.
- Pass: "Yes, [specific element] made me stop because [visual mechanism]"
- Fail: "I scrolled smoothly through everything without stopping"

**NEW-13: Skimming Recovery**
- Question: "After you start skimming (you identified this in PA-35), does the page PULL YOU BACK into engaged reading at any point? What visual element re-engages you?"
- Dimension: Engagement Sustainability
- Discrimination: 4/4 pages have recovery mechanisms. Intentionally coupled with PA-35.
- Pass: "Yes, [element] pulled me back after skimming through [section]"
- Fail: "Once I started skimming, I never fully re-engaged"

#### Memorability (1 question)

**NEW-02: One-Week Memory Test**
- Question: "If you closed this page right now and someone asked you to describe it a week later, what visual element would you describe FIRST? What shape/color/layout would you draw from memory?"
- Dimension: Memorability
- Discrimination: Catches pages pleasant during viewing but leaving no visual imprint.
- Pass: Auditor names a specific visual element and can describe its shape/position
- Fail: Auditor describes content ("it was about Gas Town") but no visual memory

#### Emotional Arc (2 questions)

**NEW-03: Emotional Peak Location**
- Question: "Point to the moment on this page where you felt the STRONGEST emotional response. Is that moment in the top third, middle third, or bottom third?"
- Dimension: Emotional Arc
- Discrimination: 4/4 pages place peaks deliberately (golden ratio ~62%); 3/4 pages front-load.
- Pass: Peak is in middle or bottom third (earned peak)
- Fail: Peak is in the header or first viewport

**NEW-04: Resolution Satisfaction**
- Question: "After scrolling through the entire page, do you feel the visual journey CONCLUDED, or did it just STOP? Does the ending feel earned by what came before it?"
- Dimension: Emotional Arc (Closure)
- Discrimination: Catches pages that run out of compositional energy.
- Pass: "The footer feels like a conclusion that was prepared for"
- Fail: "The page just stopped" or "The last sections feel tacked on"

#### Type as Expression (2 questions)

**NEW-05: Typography Personality**
- Question: "Cover all images, diagrams, and colored elements. Looking ONLY at the text -- its size, weight, spacing, and arrangement -- does the typography express a personality? Describe it in one word."
- Dimension: Type as Expression
- Discrimination: 4/4 pages have typography that IS the personality; 3/4 pages have functional type.
- Pass: Auditor names a character word ("confident", "scholarly") and points to specific type choices
- Fail: Auditor says "clean" or "readable" (function, not character)

**NEW-06: Type Texture Variation**
- Question: "Squint at three different paragraphs in different zones. Do they create the same gray TEXTURE, or do different zones have different typographic density/color?"
- Dimension: Type as Expression
- Discrimination: More precise than PA-56 at catching sub-perceptual typography.
- Pass: "Zone 2 body text feels denser than Zone 6 body text"
- Fail: "All body text looks the same when squinted"

#### Compositional Depth (3 questions)

**NEW-07: Custom vs Template Detection**
- Question: "Name one visual element on this page that you believe was created SPECIFICALLY for this content -- something that would not work on a different page about a different topic."
- Dimension: Intentional Confidence (Custom)
- Discrimination: THE separator between "good system application" (3/4) and "system adapted to THIS content" (4/4).
- Pass: Auditor names a specific element (e.g., "the role cards with Mad Max tier labels")
- Fail: Cannot name one, or names generic components

**NEW-08: Confidence Signal Detection**
- Question: "Point to one design decision that feels BOLD -- where the designer chose something that a less confident designer would have avoided."
- Dimension: Intentional Confidence
- Discrimination: Catches the gap between "correctly composed" and "compositionally audacious."
- Pass: "The full-width dark interstitial with a single sentence is bold"
- Fail: "Everything feels safe and correct"

**NEW-09: Inverse Twin Test**
- Question: "Pick two elements that look similar. Do they NEED to look similar, or could one be visually different to communicate something?"
- Dimension: Compositional Depth
- Discrimination: Inverted version of PA-16 -- catches "template lock" where everything matches but shouldn't.
- Pass: Identifies an element that SHOULD be differentiated
- Fail: "All similar elements appropriately match"

#### Restraint (1 question)

**NEW-10: Restraint Evidence**
- Question: "Find a section that uses FEWER visual techniques than sections around it. Does the simplicity feel like: (a) the designer CHOSE restraint, (b) the content is just simpler, or (c) the designer ran out of ideas?"
- Dimension: Restraint vs Laziness
- Discrimination: Better framing than PA-64 by offering three options instead of binary.
- Pass: Auditor selects (a) and can explain WHY
- Fail: Auditor selects (b) or (c)

#### Color (2 questions)

**NEW-11: Color Economy**
- Question: "Count the number of distinct colors used (excluding text black/gray and white/cream). Is each color doing a JOB, or are any decorative? Name the job of each color."
- Dimension: Color (curated vs applied)
- Discrimination: Catches colors added without semantic purpose.
- Pass: Every color has a nameable role
- Fail: One or more colors have no job

**NEW-12: Color Narrative**
- Question: "Does the page's use of color CHANGE as you scroll? Does color tell a story, or is it the same throughout?"
- Dimension: Color (progression)
- Discrimination: Catches uniform color application vs. narrative color use.
- Pass: Color use evolves across the scroll
- Fail: Same colors everywhere from top to bottom

#### Attention Reward (1 question)

**NEW-14: Attention Reward**
- Question: "Look at any element more closely than your first glance. Does closer inspection reveal additional detail, nuance, or craftsmanship that you missed at first?"
- Dimension: Delight (depth reward)
- Discrimination: Catches surface-level competence vs. layered craft.
- Pass: "Looking closer at [element], I notice [hidden refinement]"
- Fail: "Everything looks the same at close range as from a distance"

#### Spatial (2 questions)

**NEW-15: Compression-Expansion Cycle**
- Question: "As you scroll, does the visual density BREATHE -- alternating between compressed and expanded sections? Or is the density constant?"
- Dimension: Spacing (intentional variation)
- Discrimination: Catches pages with uniform density ("flat-line" problem).
- Pass: Identifiable breathing pattern in density
- Fail: "Everything is about the same density throughout"

**NEW-16: Proximity Semantics**
- Question: "Find two elements placed CLOSER together than other pairs. Does their closeness communicate a relationship?"
- Dimension: Spacing (meaning through proximity)
- Discrimination: Catches spacing that is uniform rather than semantically loaded.
- Pass: Proximity communicates relationship
- Fail: "Everything seems equally spaced"

#### Meta-Quality (3 questions)

**NEW-17: One Rule Broken**
- Question: "Can you find one place where the page intentionally breaks its own visual rules? Is the rule-breaking effective or confusing?"
- Dimension: Intentional Confidence (sprezzatura)
- Discrimination: 4/4 pages have at least one deliberate rule-break; 3/4 pages follow all rules perfectly.
- Pass: Identifies effective, intentional rule-breaking
- Fail: "I can't find any rule-breaking"

**NEW-18: Designer Absence Test**
- Question: "Is there any section where you sense the designer STOPPED PAYING ATTENTION -- where the same level of care visible in the best section is NOT visible here?"
- Dimension: Intentional Confidence (consistency of craft)
- Discrimination: Catches quality drop-off, the most common failure of long pages.
- Pass: "Every section receives equal attention"
- Fail: "Zone 5 feels like the designer just dumped content"

**NEW-20: Negative Space Composition**
- Question: "Pick the largest area of blank space IN THE CONTENT AREA. Does that space feel COMPOSED (given a shape, a relationship to surrounding elements), or does it feel like a GAP?"
- Dimension: Spatial Proportion (negative space quality)
- Discrimination: Catches "adequate spacing" vs. "space as a design element."
- Pass: Space feels composed, related to surrounding elements
- Fail: "All gaps feel like standard spacing"

### Source: 13-adversarial-review.md (5 questions, from "missing questions" section)

**ADV-01: Would-You-Return**
- Question: "Would you come back to this page?"
- Dimension: Utility beyond aesthetics
- Discrimination: Measures whether design adds repeat-visit value.

**ADV-02: Delayed Memory**
- Question: "Can you remember what the page looked like 5 minutes after seeing it?"
- Dimension: Memorability (overlaps NEW-02 / PA-88, reinforcing signal)

**ADV-03: Brand Affinity**
- Question: "Does this page make you want to read similar pages?"
- Dimension: Design system pull / brand magnetism

**ADV-04: Over-Engineering Detection**
- Question: "Is this page trying too hard?"
- Dimension: Directly addresses Goodhart gaming of mechanism counts.
- Discrimination: Catches mechanism-stuffing and complexity-for-its-own-sake.

**ADV-05: Removal Test**
- Question: "What would you REMOVE from this page?"
- Dimension: Bloat detection -- inverts the pipeline's additive bias.
- Discrimination: Every other question asks "does this have enough X?" This asks "does this have too much?"

---

## 2. PROPOSED NEW GATES

### From 13-adversarial-review.md

**GATE: Multi-Channel Boundary Perception (ES-22)**
- What: At each zone boundary, count total perceptible shifts across ALL channels (background, typography, spacing, borders, components, layout).
- Threshold: A boundary with >= 2 channel shifts should PASS even if one individual channel (e.g., background RGB delta) is below its isolated threshold.
- Implementation: Extend gate runner to compute channel-shift count per boundary. Current gates check channels in isolation; this checks their interaction.
- Rationale: Gas Town Z2-Z3 has a background delta of 11 RGB (below 15 threshold) BUT also has a zone label, border, and typography shift. The boundary IS perceptible. Current gates create a false negative.

**GATE: Content Appropriateness (H4)**
- What: Given content type and reader profile, is the visual complexity appropriate?
- Threshold: Content complexity score (from Phase 0) drives threshold scaling. Simple content (200-word poem) should NOT get 14 mechanisms, 800+ CSS lines. Complex content (8,000-word technical article) gets current thresholds.
- Implementation: Phase 0 Content Analyst outputs a "complexity budget" that scales ALL downstream thresholds. Brief Assembler applies scaled thresholds. Gates check against scaled values.
- Rationale: Current universal thresholds produce over-engineered simple content and potentially under-resourced complex content.

**GATE: Content-Scaled Mechanism Floor (ES-23)**
- What: Replace universal ">=14 mechanisms" with content-scaled floors.
- Threshold: Simple content -> 6-8 mechanisms. Moderate content -> 10-12. Complex content -> 14+.
- Implementation: Phase 0 outputs complexity tier. Gate runner reads tier and applies corresponding floor.
- Rationale: Adversarial review A11 identifies mechanism count floor as incentivizing mechanism-stuffing.

**GATE: Brief Validation (ES-15)**
- What: Does the execution brief actually contain actionable creative guidance, or just constraints?
- Threshold: Tier 3 (compositional section) must contain >= 3 specific CSS value suggestions, >= 2 component recommendations, >= 1 per-zone character description.
- Implementation: Automated text analysis of the brief before it reaches the builder.
- Rationale: The brief is the highest-leverage enrichment surface (ES-11). Validating it prevents "constraint-only" briefs that produce competent but soulless pages.

### From 14-perceptual-science-foundations.md

**GATE: Proximity Ratio (Grouping Strength)**
- What: At each section boundary, the ratio between inter-section gap and average intra-section element spacing.
- Threshold: Ratio >= 2.5:1 for PASS. >= 4.0:1 = STRONG. < 1.5:1 = FAIL.
- Implementation: Gate runner measures boundary gaps and intra-section element spacing, computes ratio.
- Rationale: Current S-09 checks absolute gap (<=120px) but NOT grouping strength. A 60px boundary gap over 50px intra-section spacing (ratio 1.2:1) is ambiguous grouping -- sections blur together even though 60px < 120px passes S-09.

**GATE: Depth Layer Count**
- What: Number of perceptible visual layers from background to foreground.
- Threshold: >= 2 layers for Floor, >= 3 for Middle, >= 4 for Ceiling/Flagship.
- Implementation: Count distinct visual planes: page background, zone backgrounds, content surfaces, component containers, elevated elements (dark blocks, cards with high contrast).
- Rationale: Flat pages (1 layer) feel "basic" regardless of other quality dimensions. Depth/layering is currently at 5% PA coverage.

---

## 3. PROPOSED NEW MEASUREMENT INSTRUMENTS

### Quality Journal (from 17-meta-meta-analysis.md)

A separate instrument from binary PA, administered by 2-3 DIFFERENT auditors (not PA auditors). 10 questions on a 1-7 Likert scale. Captures degree, trajectory, and experience that binary format structurally cannot.

| # | Question | Scale Anchors (1 / 7) |
|---|----------|----------------------|
| QJ-01 | How much does this page make you WANT to keep scrolling? | actively want to stop / compelled to continue |
| QJ-02 | How CONFIDENT does the design feel? | tentative/hedging / decisive/committed |
| QJ-03 | How well does the visual treatment AMPLIFY the content's voice? | flattens/generic / the design IS the content |
| QJ-04 | How VARIED is the visual experience across the full scroll? | uniform throughout / richly varied while coherent |
| QJ-05 | How MEMORABLE will this page be in a week? | forgettable / I will remember specific images |
| QJ-06 | How much does the design REWARD close attention? | everything visible at a glance / details reveal themselves |
| QJ-07 | How well does the page PACE its demands on you? | overwhelming or boring / perfectly metered |
| QJ-08 | How much does the page feel like an EXPERIENCE vs. a document? | reading a document / taking a journey |
| QJ-09 | How TRUSTWORTHY does this page feel? | amateur/unfinished / authoritative/polished |
| QJ-10 | Overall, where does this page sit? | competent / professional (4) / exceptional |

**Key design decisions:**
- Separate auditor pool prevents cross-contamination with binary PA
- 10 questions keeps auditor fatigue manageable
- 1-7 scale (not 1-5) provides wider discrimination
- QJ-01, QJ-05, QJ-08 expected to show widest variance between pages that binary PA rates identically

### 10 New Measurement Instruments from Perceptual Science (14-perceptual-science-foundations.md)

**NM-01: Saliency Consistency Test**
- Grounding: Treisman's Feature Integration Theory + Guided Search
- Protocol: For each viewport-height, identify the most visually salient element AND the most informationally important. Are they the same?
- Scoring: Viewports where saliency matches importance / total viewports. >= 80% = PASS, 60-79% = PARTIAL, <60% = FAIL.
- Tier discrimination: Floor = random saliency; Flagship = designed saliency maps.

**NM-02: Grouping Strength Index**
- Grounding: Gestalt proximity + Common region
- Protocol: At 5 section boundaries, measure (a) gap between sections, (b) average gap within sections. Compute ratio.
- Scoring: >= 4.0 STRONG, 2.5-3.9 CLEAR, 1.5-2.4 WEAK, <1.5 AMBIGUOUS.
- Tier discrimination: Floor ~2.0, Middle ~3.0, Ceiling ~4.0, Flagship = designed variation.

**NM-03: Feature Differentiation Count**
- Grounding: Pre-attentive feature discrimination (Treisman)
- Protocol: At each zone boundary, count simultaneous visual property changes.
- Scoring: 1 = FLAT, 2 = FUNCTIONAL, 3 = DESIGNED, 4-5 = COMPOSED, 6+ = FLAGSHIP.
- Note: This IS multi-coherence measurement but derived from neuroscience rather than design convention.

**NM-04: Layout Complexity Score (Birkhoff Ratio)**
- Grounding: Birkhoff's Aesthetic Measure (M = O/C)
- Protocol: ORDER = alignment consistency + spacing regularity + pattern adherence. COMPLEXITY = unique components + colors + font variants + layout modes. Compute ratio.
- Scoring: M > 1.5 = too simple, 0.8-1.5 = sweet spot, 0.4-0.8 = visually rich, <0.4 = chaotic.
- Tier discrimination: Floor M > 2.0, Middle ~1.2, Ceiling ~0.7, Flagship ~0.6-0.8.

**NM-05: Processing Fluency Proxy**
- Grounding: Reber et al. (2004)
- Protocol: 10-second description accuracy test + 30-second findability test.
- Scoring: Combined 0-6 scale. This is a FLOOR measure -- all tiers should score well; low scores indicate problems.

**NM-06: Depth Layer Count**
- Grounding: Figure-ground segregation (Gestalt) + Arnheim
- Protocol: Count distinct visual planes from deepest to shallowest.
- Scoring: 1 = FLAT, 2 = BASIC, 3 = MODERATE, 4 = RICH, 5+ = DEEP.

**NM-07: Scan Path Alignment Score**
- Grounding: Eye-tracking research (Buscher et al.)
- Protocol: 3 fresh readers list first 5 things noticed; content author ranks 5 most important. Compute Spearman's rho.
- Scoring: >= 0.8 DESIGNED, 0.6-0.79 GUIDED, 0.4-0.59 PARTIAL, <0.4 UNGUIDED.

**NM-08: Rhythm Regularity and Variation Score**
- Grounding: Dynamic Attending Theory (Large & Jones)
- Protocol: Measure vertical distances between "rhythm anchors" (headings, component tops, visual breaks). Compute coefficient of variation.
- Scoring: CV < 0.15 MONOTONOUS, 0.15-0.35 RHYTHMIC, 0.35-0.60 VARIED, > 0.60 ERRATIC.

**NM-09: Novelty-Without-Confusion Index**
- Grounding: Berlyne's collative properties + Martindale
- Protocol: Identify every pattern deviation. Rate each: +1 (novel and helpful), 0 (neutral), -1 (confusing).
- Scoring: Sum / deviations. > 0.5 ENRICHING, 0-0.5 NEUTRAL, < 0 CONFUSING.

**NM-10: Micro-Reward Distribution**
- Grounding: Variable ratio reinforcement + Norman's "reflective" level
- Protocol: Examine at 2x zoom. Count "hidden" refinements per zone.
- Scoring: 0 NONE, 1-2 SPARSE, 3-5 MODERATE, 6+ GENEROUS.
- Tier discrimination: Floor = 0; Flagship = 10+ distributed across ALL zones.

### Visual Quality Radar (from 12-pa-question-deep-analysis.md)

A 14-dimension radar chart that replaces or supplements the single PA-05 scalar:

| Dimension | Max Score | Gas Town Score |
|-----------|-----------|---------------|
| Spatial Proportion | 10 | 8 |
| Grid Discipline | 10 | 9 |
| Flow & Pacing | 10 | 7 |
| Responsive Adaptation | 10 | 5 |
| Readability | 10 | 8 |
| Type as Expression | 10 | 4 |
| Design Coherence | 10 | 9 |
| Rhythmic Variation | 10 | 7 |
| Compositional Depth | 10 | 6 |
| Metaphor Embodiment | 10 | 5 |
| Emotional Arc | 10 | 6 |
| Memorability | 10 | 7 |
| Engagement Sustainability | 10 | 5 |
| Intentional Confidence | 10 | 7 |

### PA-05 Vector Expansion (from 13-adversarial-review.md, Attack A6)

Replace PA-05 scalar (3/4) with a 4-dimensional vector:
- [DESIGNED: 0.85, COHERENT: 0.90, PROPORTIONATE: 0.75, POLISHED: 0.60]
- Enables: differentiating "compositionally excellent but needs polish" from "polished but compositionally mediocre"
- These require DIFFERENT remediation strategies but currently receive the same score

---

## 4. PROPOSED CHANGES TO EXISTING PA QUESTIONS

### Questions to RETIRE (4)

| PA ID | Current Text | Retirement Rationale |
|-------|-------------|---------------------|
| PA-06 | "Words stacking vertically, one per line?" | Near-zero failure rate for system-built pages. Never failed in 2 full PA runs. PA-14 covers the dimension better. |
| PA-07 | "Can you read the longest paragraph?" | Near-zero failure rate. PA-02 covers readability. Rarely fails independently. |
| PA-09 | "Dead space, no purpose?" | PA-33 ("silence vs dropped signal") captures the same information with superior framing. PA-50 catches it quantitatively. |
| PA-40 | "Spacing jump?" | Low discrimination. PA-69 (transition property counting) subsumes spacing jumps more precisely. |

### Questions to MERGE (4 -> 2)

| Source | Target | Merged Formulation |
|--------|--------|-------------------|
| PA-08 "Squint to read?" | PA-02 "Uncomfortable text?" | **Revised PA-02:** "Is any text uncomfortable to read? Point to the worst spot. Would you need to lean closer or squint to read any text?" |
| PA-18 "Grays same family?" | PA-03 "One designer or three?" | **Revised PA-03:** "Does this feel like one designer or three? Specifically, do all neutrals/grays feel like the same temperature?" |

### Questions to REVISE (2)

| PA ID | Current Text | Revised Text | Rationale |
|-------|-------------|-------------|-----------|
| PA-12 | "Eyes flow smoothly?" | "Where does visual flow BREAK? Name the exact scroll position and describe what interrupts the flow. If it never breaks, say so." | Too vague. "Mostly yes" is universal answer. Inversion forces specificity. |
| PA-16 | "Twin elements identical?" | **Replace with NEW-09:** "Pick two similar elements. SHOULD one be visually different? Is similarity serving content or template?" | Inversion is more discriminating -- catches template lock. |

### Net Effect

- Retire 4 questions (PA-06, PA-07, PA-09, PA-40)
- Merge 2 pairs (PA-08->PA-02, PA-18->PA-03) = -2 slots
- Revise 2 (PA-12, PA-16) = 0 net change
- Total freed: 6 slots for new questions

### Proposed Question Set Restructuring (from 12-pa-question-deep-analysis.md)

**Target: 58 core questions** (reduced from 65 via merges/retirements, rebalanced)

| Change | Before | After |
|--------|--------|-------|
| Readability questions | 6 | 3 (-50% redundancy) |
| Spatial questions | 11 | 5 (-55% redundancy) |
| Experiential questions | 3 | 9 (+200% coverage) |
| Memorability questions | 0 | 1 (from zero) |
| Color questions | 3 | 4 (+33%) |
| Redundant question pairs | 11 | 3 |
| HIGH discrimination questions | 25 | 35 |
| Questions separating 3/4 from 4/4 | ~10 | ~18 |

### Question Ordering Change (from 17-meta-meta-analysis.md)

**Current:** Questions ordered by PA number (assignment-based).
**Proposed:** Scale-based cognitive progression (macro -> micro -> synthesis).

| Scale Level | Questions |
|-------------|-----------|
| First Impression | PA-01, PA-04, PA-05, PA-20 |
| Full-Page Shape | PA-10, PA-32, PA-52, PA-35 |
| Zone-Level | PA-34, PA-55, PA-69, PA-62 |
| Component-Level | PA-15, PA-37, PA-38, PA-63 |
| Micro-Level | PA-56, PA-16 (revised), PA-41 |
| Synthesis | PA-03, PA-17, PA-65, PA-45, PA-27 |

**Rationale:** Sequential priming deepens insight. An auditor who has examined the full-page shape is better prepared to evaluate zone transitions than one jumping between dimensions.

### Lead with Experiential Questions (from 06-unmeasured-dimensions.md)

**Add 5-8 experiential questions BEFORE the structural battery.** PA-80, PA-84, PA-88, PA-91, PA-98 should be answered FIRST, before the auditor enters structural-checking mode. First impressions should be captured before "checking" mode engages.

### Tier 5 Partial Scoring (from 06-unmeasured-dimensions.md)

**Introduce 3-point scale for Tier 5 ONLY:** NO = 0, PARTIAL = 0.5, YES = 1.
- Rationale: PA-67 (novelty) forced from PARTIAL into NO, losing information. A 3-point scale captures gradients without undermining binary reliability of the core battery.

---

## 5. PROPOSED CHANGES TO AUDITOR DEPLOYMENT

### From 06-unmeasured-dimensions.md

**Create "Reader Auditor" as 10th PA agent type.**
- Current 9 auditors are visual designers checking structure.
- Reader Auditor scrolls at natural reading speed, reports where attention drifts, what they remember, whether they would share.
- Assigned questions: PA-80, PA-81, PA-88, PA-89, PA-90, PA-98, PA-99.
- Frame: "You are a reader, not a designer. Report your experience."

### From 13-adversarial-review.md

**Replace 9 homogeneous Opus auditors with diverse evaluators (H3):**
- 1 Opus gestalt auditor (Tier 1 + Tier 5 -- requires nuance)
- 1 Sonnet precision auditor (spatial/technical -- Sonnet is meticulous)
- 1 adversarial auditor ("find everything that is BAD" framing)
- 1 audience-aware auditor (receives one-line audience description, no design intent)
- 1 human designer for PA-05 (the only evaluator whose opinion correlates with user experience)
- Rationale: 9 Opus instances share training data, aesthetic biases, perceptual blind spots. 9/9 flagging trailing void is ONE model's judgment repeated 9 times, not 9 independent perspectives.

**Give auditors ONE-LINE audience description (ES-26/A10):**
- Example: "This page is for experienced developers evaluating a multi-agent coding framework."
- No design intent, no build context -- just who the reader is.
- Addresses audience-blindness bias without introducing confirmation bias.

### From 17-meta-meta-analysis.md

**Model B: Frame Diversity (cheapest to implement)**

| Frame | Perspective | What It Catches |
|-------|------------|-----------------|
| Designer | "Is this well-designed?" | Current approach |
| Reader | "Can I learn what I came for?" | Findability, cognitive load |
| Editor | "Does the form serve the content?" | Content-form coupling, voice amplification |
| Developer | "Is this maintainable?" | Code quality, responsive strategy |
| First-time visitor | "Do I trust this?" | Credibility, first impression, orientation |

**Model D: Mixed-Method Diversity (highest information gain)**
Instead of 9 auditors all using binary questions + screenshots:
- 3 auditors: binary PA questions on screenshots (current)
- 2 auditors: open-ended response on screenshots ("describe what you see")
- 2 auditors: emotional journaling while scrolling a live page
- 1 auditor: task-based (find 3 specific pieces of information)
- 1 auditor: comparison-based (given 3 pages, rank this one)

**Model E: Adversarial Diversity**
- 5 auditors: standard PA protocol
- 2 auditors: "find everything that PASSES but shouldn't" (Goodhart detection)
- 2 auditors: "find everything that FAILS but is actually good" (false-negative detection)

### From 14-perceptual-science-foundations.md

**Deploy temporal auditor (ES-29):**
- One auditor scrolls through the page in Playwright at reading speed.
- Reports where they paused, accelerated, lost interest.
- Not from screenshots -- from simulated reading experience.
- Rationale: Every PA question currently asks about the page as a STATIC OBJECT. The page is experienced TEMPORALLY.

---

## 6. PROPOSED CHANGES TO QUALITY FRAMEWORKS

### New Vocabulary / Conceptual Models

**From 06-unmeasured-dimensions.md:**

12 newly identified quality dimensions:

| # | Dimension | Definition | Current Coverage |
|---|-----------|-----------|-----------------|
| 1 | Emotional Arc (Sequencing) | Does the CSS choreograph a temporal experience? | 0% (registers inventoried but not sequenced) |
| 2 | Cognitive Load Management | Relationship between info density and reader capacity at each scroll position | 0% (visual density measured, not cognitive density) |
| 3 | Delight Moments | Small unexpected refinements that reward close attention | ~5% (PA-45 asks for one showable moment) |
| 4 | Editorial Voice Amplification | Does the CSS amplify or flatten the author's voice? | ~10% (PA-20 captures personality, not amplification) |
| 5 | Narrative Flow Support | Does visual design reinforce argumentative structure? | 0% (zone differentiation != argument mirroring) |
| 6 | Cross-Viewport Design Intent | Does the design INTEND something specific at each viewport? | ~25% (responsive questions exist but miss intent) |
| 7 | Visual Memory (Memorability) | Will the reader remember this page a week later? | 0% (completely absent from all 74 questions) |
| 8 | Information Findability (Return Visit) | Can a returning reader locate info by visual landmarks? | 0% (all questions assume first encounter) |
| 9 | Pacing Sophistication | Rhythm vs. Tempo vs. Dynamics as 3 independent dimensions | ~33% (rhythm measured, tempo and dynamics collapsed) |
| 10 | Sensory Richness (Materiality) | Felt quality of surfaces -- weight and substance | ~10% (border hierarchy checked, material difference not) |
| 11 | Compositional Confidence | Does the design commit to its choices or hedge? | ~25% (PA-05 DESIGNED implicit, hedging not explicit) |
| 12 | Reader Trust Signals | Does the page build credibility cumulatively? | ~15% (PA-05 POLISHED partial) |

**From 14-perceptual-science-foundations.md:**

5 completely unmeasured perceptual dimensions:

| # | Dimension | Coverage | Why It Matters |
|---|-----------|----------|---------------|
| 1 | Encoding Efficiency | 0% | How many meaningful distinctions per visual feature? Determines info throughput per pixel. |
| 2 | Depth/Layering | 5% | Number of perceptible visual layers. Flat pages feel "basic." |
| 3 | Gestalt Closure Exploitation | 5% | Implied shapes/boundaries created with minimal elements. "Free" quality mechanism. |
| 4 | Scan Path Optimization | 15% | Does the visual design guide eye movements along efficient priority-matching paths? |
| 5 | Proximity Ratio (Grouping Strength) | 0% explicit | Inter/intra spacing ratio determines grouping clarity. Currently only absolute gaps checked. |

**From 16-macroscopic-quality.md:**

5 world-class qualities that define the Flagship gap:

| Quality | Definition | Pipeline Coverage |
|---------|-----------|------------------|
| Content-Form Isomorphism | Form and content are the same thing in different modalities | Near-zero (THE single biggest pipeline blind spot) |
| Unprecedented Visual Invention | Something never seen before | Zero (cannot be specified by constraint system) |
| Emotional Modulation Over Time | Peaks and valleys in the scroll experience | Partial (PA-35) |
| Signature Visual Element | One image that IS the page's identity | Zero (not measured) |
| Medium Participates in Message | Design doesn't just present content; it amplifies/demonstrates/extends it | Near-zero |

### New Evaluation Approaches

**Emotional Arc: From Inventory to Sequence (06-unmeasured-dimensions.md)**
- Current: 4-register model asks "does this page contain Surprise/Delight/Authority/Closure?"
- Proposed: Also ask "does X happen at the right time relative to the others?"
- The sequence IS the arc. Current framework has no concept of emotional timing.

**Restructured Emotional Arc from Music Composition (06-unmeasured-dimensions.md)**
- Distinguish RHYTHM (regularity of visual events) from TEMPO (speed events arrive) from DYNAMICS (loudness/softness independent of frequency)
- Current framework collapses all three into "rhythm"
- A 4/4 page has rhythm + tempo variation + dynamic range = breathing

**Object-Audit vs. Experience-Measurement Paradigm (17-meta-meta-analysis.md)**
- Current: We measure the page as an OBJECT (binary properties present/absent)
- Proposed: ALSO measure it as an EXPERIENCE (temporal, cognitive, affective)
- The screenshot medium constrains to object-audit. A different medium (live page, video walkthrough) would detect different quality dimensions.

**Descriptive Quality Vocabulary (13-adversarial-review.md, Attack 5)**
- Pipeline vocabulary: mechanisms, channels, zones, multi-coherence, compositional intelligence
- These create machine-legible quality but may prevent human-legible quality
- Alternative vocabulary from outside the pipeline:
  - Communication theory: signal-to-noise ratio
  - Cognitive load theory: extraneous vs. germane load
  - Gestalt psychology: proximity, similarity, continuation, closure
  - Rhetoric: ethos, pathos, logos
- Human designers think: "this section needs breathing room," "the reader needs a reward for scrolling this far" -- NOT "deploy mechanism M-14 at 3+ channel shifts"

**One Builder Question Before CSS (16-macroscopic-quality.md)**
- Require the builder to answer: "What is the ONE thing this page's design should make the reader FEEL that the text alone cannot?"
- If the answer is generic ("clarity"), the page will be B+
- If specific and content-rooted ("the crushing density of a factory floor in Z2, the layered transparency of memory in Z3"), the builder has a creative north star
- Cannot be verified programmatically. Changes what the builder ATTEMPTS.

### Pipeline Architecture Changes

**From 13-adversarial-review.md (36 Enrichment Surfaces identified):**

Top 8 highest-leverage enrichment surfaces:

| Rank | ES | Phase | Description | Expected Impact |
|------|-----|-------|------------|----------------|
| 1 | ES-11 | Brief Assembly | Tier 3 compositional guidance depth | HIGH -- the single document the builder reads most carefully |
| 2 | ES-14 | Brief Assembly | Content-driven mechanism pre-selection | HIGH -- prevents "pick 14 from catalog" gaming |
| 3 | ES-18 | Building | Threshold awareness via calibration bands | HIGH -- directly prevents perception gate failures |
| 4 | ES-20 | Building | Mid-build checkpoint screenshot | MED-HIGH -- catches drift while correction is cheap |
| 5 | ES-22 | Gates | Multi-channel boundary gate | MEDIUM -- prevents false negatives |
| 6 | ES-07 | Content Analysis | Anti-monotony flag | MEDIUM -- would have flagged Zone 4's 6 identical blockquotes |
| 7 | ES-26 | PA | Audience-aware auditing | MEDIUM -- prevents judging technical content by general standards |
| 8 | ES-35 | Post-Verdict | Post-verdict learning/logging | MEDIUM -- enables threshold tuning over time |

**Threshold Delivery Reform (13-adversarial-review.md, H2/ES-18):**
- Current: Thresholds hidden from builder entirely
- Proposed: Deliver thresholds as RANGES WITH TARGETS
- Example: "Zone backgrounds should differ meaningfully. Subtle = 20-30 RGB. Dramatic = 50+ RGB. Below 15 is invisible."
- Or: worked examples rather than numbers: "your subtle backgrounds should be at least the difference between #FEF9F5 and #EDE6DA"
- Rationale: Hiding thresholds causes failures (Gas Town had 2 perception gate failures that would not have occurred if the builder had calibration). Current theory prioritizes preventing gaming over preventing failure.

**Metaphor Affordance Per-Section (13-adversarial-review.md, P4)**
- Current: Metaphor treated as all-or-nothing across entire page
- Proposed: Content Analyst maps "metaphor affordance" per section. High-affordance sections get full metaphor. Low-affordance sections (practical/utility content) get functional treatment with only structural echoes.
- Rationale: Bottom third of Gas Town has practical content (implementation, comparisons) with nothing to do with a refinery. Forcing the metaphor onto utility content sacrifices clarity for consistency.

**Palette Families Instead of Warm/Cool Binary (13-adversarial-review.md, A2)**
- Current: Warm palette as identity constraint, "cold color violations" flagged
- Proposed: Warm PRIMARY palette with sanctioned accent FAMILIES (including cool accents for functional color-coding like technical categorization)
- Rationale: Role card level labels in blue were flagged as violations, but readers EXPECT color-coding for technical categorization.

**Verdict Category Expansion (13-adversarial-review.md, ES-31)**
- Current: SHIP / REFINE / REBUILD (3 categories)
- Proposed: Add SHIP WITH NOTES (ships but logs issues for future learning)
- Rationale: Gas Town verdict invented "SHIP WITH FIXES" ad-hoc because the formal system lacked this category.

**Post-Verdict Learning (13-adversarial-review.md, ES-35)**
- Current: Pipeline has ZERO institutional memory. Each run starts fresh.
- Proposed: Log per run: content type, mode, builder model, PA-05 score, gate pass rate, fix categories.
- Over multiple runs: enables threshold tuning, content-type-specific mode selection, builder model selection.

---

## 7. PROPOSED EXPERIMENTS

### Experiment 1: Architecture Effect Test (from 17-meta-meta-analysis.md)

**Hypothesis:** Reorganizing questions from PA-number order to scale-based order produces richer responses that identify issues the current order misses.

**Method:**
1. Use Gas Town (existing results available for comparison)
2. Deploy 4 auditors with identical question SETS but different ORDERS:
   - Auditor X: Current PA-number order (control)
   - Auditor Y: Scale-based order (macro -> micro -> synthesis)
   - Auditor Z: Temporal order (first viewport -> mid-scroll -> end)
   - Auditor W: Bloom taxonomy order (remember -> analyze -> evaluate)
3. Compare: distinct issues identified, depth per question, cross-dimensional insights, novel findings

**Expected outcome:** Scale-based and Bloom orders produce MORE cross-dimensional insights. Temporal order detects engagement sag more precisely.

**Cost:** 4 Opus agents, existing screenshots. ~20-30 min + synthesis. LOW COST, HIGH LEARNING.

### Experiment 2: Binary vs. Dual-Instrument Comparison (from 17-meta-meta-analysis.md)

**Hypothesis:** Adding the Quality Journal alongside binary PA produces measurably different classification -- specifically, it distinguishes pages that binary PA rates identically.

**Method:**
1. Select 3 pages with similar PA-05 scores (all ~3/4): Gas Town, Steve Yegge, one showcase
2. Deploy standard Mode 4 binary PA on all three
3. Deploy 3 Quality Journal auditors per page (fresh pool)
4. Compare: Do QJ scores discriminate between pages that binary PA rates the same?

**Expected outcome:** QJ-01 (want to keep scrolling), QJ-05 (memorability), QJ-08 (experience vs. document) show widest variance between identically-rated binary PA pages.

**Cost:** 9 QJ auditors + possibly 2 additional Mode 4 runs. MEDIUM COST, VERY HIGH LEARNING.

### Experiment 3: Adversarial Goodhart Probe (from 17-meta-meta-analysis.md)

**Hypothesis:** A page can pass all 65 PA questions and all 9 Tier 5 questions while being perceptually mediocre -- proving questions are Goodhartable.

**Method:**
1. Give Opus builder the FULL PA protocol
2. Instruct: "Build a page that passes EVERY question while investing MINIMUM design effort"
3. Deploy Mode 4 PA. Predict: all binary questions PASS.
4. Deploy 3 QJ auditors. Predict: QJ scores 2-3/7 (mediocre).
5. If Goodhart page passes PA but fails QJ: proves binary PA is gameable and QJ captures ungameable dimensions

**Expected outcome:** Exposes which PA questions are most gameable (structural/spatial) and which resist gaming (PA-45, PA-67, PA-65). The gap between PA pass rate and QJ score IS the Goodhart vulnerability measure.

**Cost:** 1 Opus builder + Mode 4 PA + 3 QJ auditors. MEDIUM COST, VERY HIGH STRATEGIC VALUE.

### Experiment 4: Human Validation (from 13-adversarial-review.md, Q1)

**Hypothesis:** Human designer judgment correlates imperfectly with pipeline PA-05 scores.

**Method:**
1. Show Gas Town page to 5 professional web designers
2. Ask: "Would you ship this? What would you change? Rate 1-10."
3. Compare answers to pipeline verdict
4. If they disagree: the pipeline is wrong, not the designers

**Expected outcome:** Humans will rate higher on content-form coupling and lower on structural precision. Disagreements will cluster in experiential dimensions.

**Cost:** 5 human designers (recruiting + compensation). HIGH COST, HIGHEST POSSIBLE VALIDATION VALUE.

### Experiment 5: Q20 Thresholds-Only Test (from project memory)

**Hypothesis:** Adding ONLY perception thresholds to the original master prompt (without other pipeline changes) would prevent the specific failures seen in earlier builds.

**Method:**
1. Take the original master execution prompt
2. Add ONLY the perception threshold table (15 RGB, 0.5px letter-spacing, 24px padding)
3. Re-run on the same content
4. Compare gate pass rates and PA-05 scores

**Expected outcome:** Would resolve the 3-variable confound (model, format, thresholds) from earlier experiments. 4-10 hours estimated.

**Cost:** 1 builder run + Mode 4 PA. MEDIUM COST, RESOLVES HISTORICAL CONFOUND.

### Experiment 6: Single Agent vs. Pipeline (from 13-adversarial-review.md, A28/H5)

**Hypothesis:** A single skilled Opus agent with CD-006 as reference + soul constraints + long context would produce output comparable to the full 15-agent pipeline.

**Method:**
1. Give same content to a single Opus instance with ONLY: soul constraints, CD-006 reference, tokens.css, components.css
2. Run the full pipeline on the same content
3. Evaluate BOTH with identical Mode 4 PA
4. If single agent scores within 0.5 PA-05 points: the 885-item infrastructure is overhead

**Expected outcome:** Unknown. The pipeline might be solving a problem that no longer exists with current model capabilities. Or it might provide genuine value above what a single agent can achieve.

**Cost:** 1 Opus builder + 2 Mode 4 PAs. MEDIUM COST, EXISTENTIAL STRATEGIC VALUE.

### Experiment 7: Rotating Question Pool Anti-Goodhart (from 17-meta-meta-analysis.md)

**Hypothesis:** A rotating pool of 120+ questions (randomly sampling 40 per audit) produces equal or better detection while being resistant to builder gaming.

**Method:**
1. Create expanded pool: current 65 + 40 new questions from this analysis + 15 variations
2. Run 3 audits on the same page, each drawing different random 40-question sets
3. Compare: Do all 3 audits reach the same verdict? Are there questions that ONLY appear in some samples but catch critical issues?

**Expected outcome:** Most structural issues caught by any sample. Experiential issues caught variably. This reveals which questions are ESSENTIAL (must always be included) vs. INTERCHANGEABLE (any from the category works).

**Cost:** 3 Mode 4 PA runs. HIGH COST, MEDIUM-HIGH LEARNING about question set robustness.

---

## SUMMARY STATISTICS

| Category | Count |
|----------|-------|
| New PA questions proposed | 40 (20 from #06 + 20 from #12 + 5 from #13, with some overlap) |
| New gates proposed | 6 |
| New measurement instruments | 12 (1 Quality Journal + 10 perceptual science + 1 radar) |
| PA questions to retire | 4 (PA-06, PA-07, PA-09, PA-40) |
| PA questions to merge | 4 -> 2 (PA-08->PA-02, PA-18->PA-03) |
| PA questions to revise | 2 (PA-12, PA-16) |
| Auditor deployment changes | 5 models proposed (Reader Auditor, Frame Diversity, Mixed-Method, Adversarial, Temporal) |
| Quality framework changes | 12 new dimensions, 5 world-class qualities, 3 paradigm shifts, 8 pipeline architecture changes |
| Experiments proposed | 7 (architecture effect, dual-instrument, Goodhart probe, human validation, thresholds-only, single-agent vs pipeline, rotating pool) |
| Enrichment surfaces mapped | 36 (across all pipeline phases) |

### Priority Ranking of ALL Proposed Changes

**Tier 1: Run First (highest strategic value)**
1. Experiment 3 (Goodhart probe) -- if our instrument is gameable, everything built on it is suspect
2. Experiment 6 (single agent vs pipeline) -- existential question about whether infrastructure adds value
3. Implement Quality Journal -- captures degree that binary format cannot

**Tier 2: Implement Next (highest quality impact)**
4. Add Reader Auditor (10th agent type)
5. Lead PA battery with experiential questions
6. Implement multi-channel boundary gate (ES-22)
7. Deliver thresholds as calibration bands (ES-18)
8. Add Tier 5 partial scoring (3-point scale)

**Tier 3: Implement After Validation**
9. Retire/merge 6 questions, add 12-15 from new pools
10. Implement audience-aware auditing (ES-26)
11. Add content-scaled mechanism floors
12. Run remaining experiments (1, 2, 4, 5, 7)

**Tier 4: Long-Term Architecture**
13. Mixed-method auditor diversity (Model D)
14. Rotating question pool
15. Post-verdict learning system
16. Visual quality radar as standard output
17. Content-form isomorphism measurement (requires creative breakthrough, not just process)

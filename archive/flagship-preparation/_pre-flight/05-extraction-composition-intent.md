# Pre-Flight Extraction: Files 13, 14, 15
# (Compositional Fluency, Intentionality Layer Design, Perceptual Hierarchy)

**Extractor:** extraction-worker-5
**Date:** 2026-02-16
**Files Analyzed:**
1. `ephemeral/flagship-preparation/13-compositional-fluency.md` (670 lines)
2. `ephemeral/flagship-preparation/14-intentionality-layer-design.md` (800 lines)
3. `ephemeral/flagship-preparation/15-perceptual-hierarchy.md` (609 lines)

---

## FILE 13: COMPOSITIONAL FLUENCY (13-compositional-fluency.md)

### ACTION ITEMS

#### A13-01: Add Reinforcing Pair Requirement to Planner Prompt
- **Source:** Lines 300-318
- **Action:** Add prompt language requiring planner to document at least 3 reinforcing pairs with shared semantic dimension, CSS channel, and co-variation direction
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (planner section)
- **Dependencies:** None
- **Exact spec:** For at least 3 pairs of mechanisms, document: (1) shared semantic dimension, (2) CSS channel each uses, (3) how values co-vary. Format: PAIR N: [Mechanism A] + [Mechanism B] / SHARED SEMANTIC / CO-VARIATION.

#### A13-02: Implement Multi-Pass Build Model (3 Passes)
- **Source:** Lines 322-332
- **Action:** Structure flagship build into 3 passes: Pass 1 (Spatial Skeleton, 8-10 mechanisms), Pass 2 (Compositional Elaboration, 4-6 mechanisms responding to Pass 1), Pass 3 (Intentionality layer)
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (build architecture section)
- **Dependencies:** None
- **Cross-reference:** 14-intentionality-layer-design.md (Pass 3 specification), 05-flagship-architecture.md

#### A13-03: Add Compositional Examples to Build Plan
- **Source:** Lines 334-358
- **Action:** Require planner to include side-by-side CSS examples showing COMPOSITIONAL vs NON-COMPOSITIONAL mechanism deployment. Show co-varying values vs independent values.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Master execution prompt (planner instructions)
- **Dependencies:** A13-01 (reinforcing pairs must be defined first)

#### A13-04: Add Composition Check Step After Mechanism Placement
- **Source:** Lines 360-378
- **Action:** Add mandatory post-placement verification step where builder checks each major section for visual weight relationship with neighbors. Fix isolated sections by adjusting mechanism values.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Master execution prompt (builder instructions)
- **Dependencies:** A13-01

#### A13-05: Add Metaphor Context Block to Builder Prompt
- **Source:** Lines 381-403
- **Action:** Include METAPHOR CONTEXT block in builder's prompt specifying: guiding metaphor name, what scrolling direction means, how mechanisms co-vary with the metaphor, and that exceptions must be documented.
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (builder section)
- **Dependencies:** Metaphor derivation must be complete

#### A13-06: Implement Compositional Messaging Protocol
- **Source:** Lines 405-428
- **Action:** Add messaging protocol requiring builder-planner communication about mechanism RELATIONSHIPS (not just deployment). Specify example message types: clarification about weight transitions, guidance on echoing accents, discovery about value misalignment.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Master execution prompt (communication protocol section)
- **Dependencies:** Inter-agent messaging system (CP-02 from ceiling prompt assembly)
- **Cross-reference:** CP-02 inter-agent communication protocol

#### A13-07: Add Composition Self-Check to Builder Workflow
- **Source:** Lines 474-488
- **Action:** Add 2-minute self-check before builder submits: pick any 3 mechanisms, ask "if removed, would any other mechanism look wrong?" If NO for all 3, REVISE.
- **Category:** GATE
- **Priority:** HIGH
- **Target file:** Master execution prompt (builder pre-submission checklist)
- **Dependencies:** None

#### A13-08: Organize Build Plan by Compositional Clusters, Not Mechanism Numbers
- **Source:** Lines 494-527
- **Action:** Change planner output format from mechanism-by-mechanism list to CLUSTER-oriented format. Each cluster groups mechanisms by shared semantic dimension with co-variation tables. Separate "INDEPENDENT DEPLOYMENTS" section for non-compositional mechanisms.
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (planner output format specification)
- **Dependencies:** None

#### A13-09: Add Compositional Thinking Phrases to Builder Prompts
- **Source:** Lines 529-543
- **Action:** Include specific phrases that prompt compositional thinking ("feel like ONE atmospheric change," "mechanisms in CONVERSATION") and explicitly exclude vocabulary-prompting phrases ("deploy 12-15 mechanisms," "cover all 5 categories").
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Master execution prompt (builder section)
- **Dependencies:** None

#### A13-10: Add Reinforcing Pairs Documentation Format
- **Source:** Lines 545-558
- **Action:** Require specific documentation format for each compositional cluster in the build plan: REINFORCING PAIR, SHARED SEMANTIC, CO-VARIATION DIRECTION, PERCEPTUAL EFFECT, REMOVAL TEST.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Master execution prompt (planner output format)
- **Dependencies:** A13-01, A13-08

#### A13-11: Add Composition Audit Checklist (CC-01 through CC-07)
- **Source:** Lines 560-575
- **Action:** Add 7-item composition audit checklist to post-build verification: (CC-01) 2+ reinforcing pairs, (CC-02) values co-vary, (CC-03) removal test passes for 3+ mechanisms, (CC-04) at least 1 response mechanism, (CC-05) at least 1 silence zone, (CC-06) perceptual auditor would say "atmospheric," (CC-07) composition describable in 1 non-list sentence.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (post-build gate)
- **Dependencies:** Page must be built

#### A13-12: Define Compositional Coupling Score (CCS) Metric
- **Source:** Lines 448-470
- **Action:** Define CCS metric: for each mechanism, count how many others change meaning when it's removed, divide by (total-1). Target CCS >= 0.30 for flagship (coupled/compositional threshold).
- **Category:** TOOL
- **Priority:** MEDIUM
- **Target file:** Perceptual auditing SKILL.md or master execution prompt
- **Dependencies:** None
- **Cross-reference:** PA-05 (designed vs formatted)

#### A13-13: Reframe Tier Model as Two Independent Axes
- **Source:** Lines 578-625
- **Action:** Update tier model documentation to show vocabulary and composition as two INDEPENDENT AXES, not a spectrum. Middle = high vocab + low composition. Flagship = high vocab + high composition.
- **Category:** ENRICHMENT
- **Priority:** MEDIUM
- **Target file:** Tier methodology doc (`ephemeral/doc-enrichment/02-tier-methodology.md`)
- **Dependencies:** None

### PREREQUISITES

#### P13-01: Metaphor Derivation Must Be Complete Before Build
- **Source:** Lines 381-403, 634-648
- **Action:** The metaphor that unifies mechanism deployment must be derived and documented before any builder receives their prompt. Without metaphor, composition is impossible.
- **Category:** PREREQUISITE
- **Priority:** BLOCKING

#### P13-02: Builder Must Understand Compositional vs Vocabulary Distinction
- **Source:** Lines 18-47, 80-112
- **Action:** Builder prompt must include the concrete distinction between compositional and vocabulary fluency, with CSS examples showing both patterns.
- **Category:** PREREQUISITE
- **Priority:** BLOCKING

### BINARY CHECKS

#### BC13-01: At Least 3 Reinforcing Pairs Documented in Build Plan
- **Source:** Line 302
- **Pass/Fail:** Plan lists 3+ pairs with shared semantic and co-variation

#### BC13-02: Build Plan Organized by Compositional Clusters
- **Source:** Lines 496-527
- **Pass/Fail:** Plan uses CLUSTER format, not mechanism-by-mechanism list

#### BC13-03: Composition Self-Check Passes (2+ of 3 mechanisms are load-bearing)
- **Source:** Lines 476-488
- **Pass/Fail:** Removing 2+ of 3 randomly selected mechanisms changes page feel

#### BC13-04: CC-07 Acid Test Passes
- **Source:** Lines 572-574
- **Pass/Fail:** Page composition describable in 1 sentence that is NOT a mechanism list

#### BC13-05: CCS >= 0.30 (Coupled/Compositional Threshold)
- **Source:** Lines 458-464
- **Pass/Fail:** Average Compositional Coupling Score across all mechanisms >= 0.30

### FILE MODIFICATIONS

#### FM13-01: Master Execution Prompt — Planner Section
- **Target:** Master execution prompt (to be created)
- **Add:** Reinforcing pair requirement (lines 306-318), cluster-oriented plan format (lines 498-527), compositional examples requirement (lines 340-357)

#### FM13-02: Master Execution Prompt — Builder Section
- **Target:** Master execution prompt (to be created)
- **Add:** Metaphor context block (lines 388-403), compositional thinking phrases (lines 531-543), composition self-check (lines 477-488), composition check step (lines 365-378)

#### FM13-03: Master Execution Prompt — Communication Protocol
- **Target:** Master execution prompt (to be created)
- **Add:** Compositional messaging protocol (lines 409-427)

#### FM13-04: Master Execution Prompt — Post-Build Gate
- **Target:** Master execution prompt (to be created)
- **Add:** Composition audit checklist CC-01 through CC-07 (lines 562-574)

### CROSS-REFERENCES

- **To 14-intentionality-layer-design.md:** Pass 3 is the intentionality layer (line 330-331)
- **To 05-flagship-architecture.md:** Multi-pass model derives from flagship architecture (line 323)
- **To 02-alternative-mental-models.md:** 7-dimensional richness space, semantic resonance (line 10)
- **To 04-showcase-archaeology.md:** 6 unmodeled dimensions, crown jewel analysis (line 11)
- **To mechanism-catalog.md:** 18 mechanisms, 5 categories (line 12)
- **To semantic-rules.md:** 3-question test, semantic value framework (line 13)
- **To tension-composition SKILL.md:** Full pipeline, tier routing (line 14)
- **To CP-02:** Inter-agent communication protocol (referenced by A13-06)
- **To 09-MASTER-RETROSPECTIVE.md:** Finding 4 — "Designed has two dimensions" (line 8)
- **To DD-006-fractal.html:** CCS ~0.40-0.55 (line 468)
- **To CD-006-pilot-migration.html:** CCS ~0.50-0.65 (line 469)

---

## FILE 14: INTENTIONALITY LAYER DESIGN (14-intentionality-layer-design.md)

### ACTION ITEMS

#### A14-01: Implement Dimension 1 — Self-Reference (1+ Instance)
- **Source:** Lines 24-119
- **Action:** Page must contain at least 1 self-referential element where content describes/demonstrates its own form. Options: code block showing CSS of its own container, callout body describing its 2-zone structure, section about patterns demonstrating the patterns.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Flagship page HTML (Pass 3)
- **Dependencies:** Content topic must support self-reference organically

#### A14-02: Implement Dimension 2 — Pedagogical Sequencing (Cumulative Knowledge)
- **Source:** Lines 123-207
- **Action:** Order sections as learning progression where section N+1 depends on section N. Include at least 2 bridge transitions naming cognitive shifts. Follow Orient -> Learn -> Apply -> Reflect arc.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Flagship page HTML (Pass 3), content plan
- **Dependencies:** Section planning (Pass 1)

#### A14-03: Implement Dimension 3 — Cognitive Mode Transitions (2+ Bridges with Prose)
- **Source:** Lines 210-308
- **Action:** Add at least 2 transition--bridge elements with prose content naming cognitive shift. Prose must describe both preceding and following content. Template: "Now that you understand [X], let us [Y]."
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Flagship page HTML (Pass 3)
- **Dependencies:** Transition infrastructure from Pass 2
- **HTML volume:** ~15-24 lines total

#### A14-04: Implement Dimension 4 — Structural Bookending (First/Last Echo)
- **Source:** Lines 311-402
- **Action:** First and last content sections must use same axis pattern. At least 1 structural element echoes across both. Content must differ (opening introduces, closing resolves).
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Flagship page HTML, Pass 1 skeleton + Pass 3 verification
- **Dependencies:** Pass 1 section planning must designate bookend pairs

#### A14-05: Implement Dimension 5 — Meta-Annotation (Section Labels)
- **Source:** Lines 405-529
- **Action:** Every content section must include .section-meta element showing section number, axis pattern name, and density pattern name. Footer should include provenance stamp. Meta-annotation must use mono/small/secondary styling.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Flagship page HTML (Pass 3), CSS
- **Dependencies:** Pass 2 elaboration plan must include per-section pattern assignments
- **CSS cost:** ~6 lines if .section-meta not already present

#### A14-06: Implement Dimension 6 — Provenance Threading (3-Level Traces)
- **Source:** Lines 533-676
- **Action:** Add provenance at 3 levels: (1) Inline threading header >=20 lines (why page exists, dependencies, constraints), (2) Section boundary HTML comments with axis/density citations, (3) CSS :root comments tracing token sources.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Flagship page HTML (Pass 3)
- **Dependencies:** Metaphor derivation document + build plan must be available
- **HTML volume:** ~30-60 lines of comments

#### A14-07: Add Pass 1 Preparations for Intentionality
- **Source:** Lines 694-702
- **Action:** Pass 1 (Spatial Skeleton) must: (1) Designate bookend sections, (2) Include .section-meta placeholder divs, (3) Place transition--bridge/smooth/breathing divs (empty), (4) Add stub threading header comment (5 lines), (5) Consider self-reference potential in content topic.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (Pass 1 builder instructions)
- **Dependencies:** None

#### A14-08: Add Pass 2 Preparations for Intentionality
- **Source:** Lines 704-710
- **Action:** Pass 2 (Compositional Elaboration) must: (1) Assign axis/density patterns per section (for meta-annotation), (2) Deploy same mechanisms in bookend sections (structural echo), (3) Set transition types based on cognitive shift weight, (4) Add CSS token source comments in :root, (5) Add section-boundary HTML comments with pattern citations.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (Pass 2 builder instructions)
- **Dependencies:** A14-07 (Pass 1 preparations)

#### A14-09: Add Pass 3 Execution Sequence
- **Source:** Lines 712-721
- **Action:** Pass 3 executes in order: (1) self-referential content, (2) verify/refine pedagogical ordering, (3) add bridge transition prose, (4) verify bookend echo, (5) populate .section-meta, (6) complete threading header, (7) verify section-boundary comments, (8) add footer provenance stamp.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Master execution prompt (Pass 3 builder instructions)
- **Dependencies:** Passes 1 and 2 complete

#### A14-10: Add Intentionality Checklist (I-01 through I-12)
- **Source:** Lines 741-757
- **Action:** Add 12-item binary intentionality checklist. Must pass 10/12 for intentionality compliance. Covers all 6 dimensions.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (post-build gate) or PA checklist
- **Dependencies:** Page must be built

#### A14-11: Add Intentionality Quality Checks (IQ-01 through IQ-06)
- **Source:** Lines 760-767
- **Action:** Add 6 quality checks (judgment-based, PA-evaluable): organic self-reference, section reordering test, bridge helpfulness, closure experience, architecture reconstruction, provenance traceability.
- **Category:** GATE
- **Priority:** HIGH
- **Target file:** Perceptual auditing protocol or PA checklist
- **Dependencies:** Intentionality binary checks must pass first

#### A14-12: Consider Self-Reference Potential During Content Topic Selection
- **Source:** Lines 108-113
- **Action:** When selecting content topic, evaluate self-reference potential. Topics whose domain relates to the page's own structure (architecture for architecture page, maps for navigation page) enable natural self-reference.
- **Category:** PROCESS
- **Priority:** MEDIUM
- **Target file:** Master execution prompt (topic selection phase)
- **Dependencies:** None

#### A14-13: Add CSS for .section-meta If Not Present
- **Source:** Lines 464-473
- **Action:** Ensure .section-meta CSS exists: mono font, --type-meta (0.75rem), --color-text-secondary, letter-spacing 0.1em, text-transform uppercase, margin-bottom var(--space-2).
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Flagship page CSS
- **Dependencies:** None
- **CSS cost:** ~6 lines

### PREREQUISITES

#### P14-01: Pass 2 Elaboration Plan Must Include Per-Section Pattern Assignments
- **Source:** Lines 515-517
- **Action:** Elaboration plan must list axis pattern and density pattern for each section before Pass 3 can populate meta-annotations.
- **Category:** PREREQUISITE
- **Priority:** BLOCKING

#### P14-02: Transition Infrastructure Must Exist from Pass 2
- **Source:** Lines 293-299
- **Action:** transition--bridge, transition--smooth, transition--breathing divs must be placed in Passes 1-2 before Pass 3 can add prose content.
- **Category:** PREREQUISITE
- **Priority:** BLOCKING

#### P14-03: Metaphor Derivation Document Must Be Available to Pass 3 Builder
- **Source:** Lines 663-665
- **Action:** Metaphor derivation + build plan provide provenance sources. These must be accessible to the intentionality builder.
- **Category:** PREREQUISITE
- **Priority:** BLOCKING

#### P14-04: Content Topic Must Support Self-Reference Organically
- **Source:** Lines 96-98, 103-105
- **Action:** If content topic does not naturally support self-reference, use structural self-reference. Do NOT force it.
- **Category:** PREREQUISITE
- **Priority:** MEDIUM

#### P14-05: Pass 1 Must Designate Bookend Sections
- **Source:** Lines 385-386
- **Action:** Planner must designate first and last sections as bookend candidates in Pass 1 so skeleton builder includes matching axis pattern markup.
- **Category:** PREREQUISITE
- **Priority:** BLOCKING

### BINARY CHECKS

#### BC14-01: Self-Reference — At Least 1 Element Where Content Describes Own Form
- **Source:** Line 117
- **Pass/Fail:** YES/NO

#### BC14-02: Self-Reference — Organic, Not Bolted On
- **Source:** Lines 118-119
- **Pass/Fail:** Organic / Bolted-on (quality check)

#### BC14-03: Pedagogical Sequencing — Section N+1 Depends on Section N for 3+ Consecutive Pairs
- **Source:** Line 202
- **Pass/Fail:** YES/NO

#### BC14-04: Pedagogical Sequencing — At Least 2 Bridge Transitions with Cognitive-Shift Prose
- **Source:** Line 204
- **Pass/Fail:** YES/NO

#### BC14-05: Cognitive Transitions — At Least 2 transition--bridge Elements with Prose Content
- **Source:** Line 303
- **Pass/Fail:** YES/NO

#### BC14-06: Cognitive Transitions — Bridge Prose Names Both Preceding and Following Content
- **Source:** Line 305
- **Pass/Fail:** YES/NO

#### BC14-07: Bookending — First and Last Content Sections Use Same Axis Pattern
- **Source:** Line 395
- **Pass/Fail:** YES/NO

#### BC14-08: Bookending — At Least 1 Structural Element Echoes Across Both Sections
- **Source:** Line 397
- **Pass/Fail:** YES/NO

#### BC14-09: Bookending — Closing Content Differs Substantively from Opening
- **Source:** Line 399
- **Pass/Fail:** YES/NO

#### BC14-10: Meta-Annotation — Every Content Section Has .section-meta with Pattern Names
- **Source:** Line 523
- **Pass/Fail:** YES/NO

#### BC14-11: Meta-Annotation — Visually Quiet (Mono/Small/Secondary)
- **Source:** Line 525
- **Pass/Fail:** YES/NO

#### BC14-12: Provenance — Footer Contains Provenance Stamp
- **Source:** Line 527
- **Pass/Fail:** YES/NO

#### BC14-13: Provenance — Inline Threading Header >= 20 Lines
- **Source:** Line 669
- **Pass/Fail:** YES/NO

#### BC14-14: Provenance — At Least 50% of Sections Have Boundary Comments with Citations
- **Source:** Line 671
- **Pass/Fail:** YES/NO

#### BC14-15: Provenance — :root CSS Block Has Source-Document Comments
- **Source:** Line 673
- **Pass/Fail:** YES/NO

#### BC14-16: Composite — Must Pass 10/12 Binary Checks (I-01 through I-12) for Intentionality Compliance
- **Source:** Line 741
- **Pass/Fail:** Score >= 10/12

### FILE MODIFICATIONS

#### FM14-01: Master Execution Prompt — Pass 1 Builder Instructions
- **Target:** Master execution prompt
- **Add:** 5 intentionality preparations (lines 694-702): bookend designation, .section-meta placeholders, transition divs, threading header stub, self-reference consideration

#### FM14-02: Master Execution Prompt — Pass 2 Builder Instructions
- **Target:** Master execution prompt
- **Add:** 5 intentionality preparations (lines 704-710): pattern assignments, bookend mechanism echo, transition types, CSS token comments, section-boundary comments

#### FM14-03: Master Execution Prompt — Pass 3 Builder Instructions
- **Target:** Master execution prompt
- **Add:** Full 8-step Pass 3 execution sequence (lines 712-721), builder instructions for all 6 dimensions (lines 82-99, 166-184, 264-283, 356-375, 483-503, 625-649)

#### FM14-04: Master Execution Prompt or PA Checklist — Intentionality Gate
- **Target:** Master execution prompt (post-build gate)
- **Add:** 12 binary checks I-01 through I-12 (lines 743-757), 6 quality checks IQ-01 through IQ-06 (lines 760-767)

#### FM14-05: Flagship Page CSS — .section-meta Styles
- **Target:** Flagship page CSS
- **Add:** .section-meta CSS if not already present (~6 lines, lines 465-473)

### CROSS-REFERENCES

- **To 04-showcase-archaeology.md:** 6 unmodeled dimensions identified (line 6)
- **To 05-flagship-architecture.md:** Pass 3 architecture (line 7)
- **To DD-006-fractal.html:** Self-reference examples (lines 34-48), meta-annotation examples (lines 437-448), provenance examples (lines 541-561), scores 4/6 intentionality (line 772)
- **To CD-006-pilot-migration.html:** Self-reference (lines 50-65), pedagogical sequencing (lines 141-147), cognitive transitions (lines 220-231), bookending (lines 319-336), meta-annotation (lines 413-429), provenance (lines 564-585), scores 6/6 intentionality (line 773)
- **To ceiling-page.html:** Counter-example scoring 0/6 (line 10, 774)
- **To 13-compositional-fluency.md:** Pass 2 compositional elaboration (referenced throughout Pass integration sections)

### DANGER ZONES (EXPLICITLY STATED)

#### DZ14-01: Self-Reference — Meta-Pretension
- **Source:** Line 103
- **Rule:** NEVER narrate your own quality. Self-reference describes STRUCTURE, not AESTHETICS.

#### DZ14-02: Self-Reference — Forced Loop
- **Source:** Lines 104-105
- **Rule:** Must arise from content-form alignment. Use structural self-reference for non-aligned topics.

#### DZ14-03: Self-Reference — Over-Labeling
- **Source:** Lines 105-106
- **Rule:** Only label scales when the page TOPIC is scales. Don't add structural labels for irrelevant content.

#### DZ14-04: Pedagogical Sequencing — Patronizing
- **Source:** Lines 188-189
- **Rule:** Learning arc must match audience knowledge level.

#### DZ14-05: Pedagogical Sequencing — Confusing Density Arc with Argument Arc
- **Source:** Lines 189-190
- **Rule:** Density rhythm is NOT pedagogical sequencing. Same density can serve different pedagogical functions.

#### DZ14-06: Pedagogical Sequencing — Artificial Dependency
- **Source:** Lines 190-191
- **Rule:** Don't force reference-style content into sequential dependency.

#### DZ14-07: Cognitive Transitions — Narrating the Obvious
- **Source:** Lines 287-288
- **Rule:** Bridge prose must add VALUE, not just announce. Reframe, don't preview.

#### DZ14-08: Cognitive Transitions — All Bridges, No Silence
- **Source:** Lines 288-289
- **Rule:** Not every transition needs prose. Reserve Bridge for significant shifts.

#### DZ14-09: Cognitive Transitions — Mismatch Type vs Weight
- **Source:** Lines 289-290
- **Rule:** Match transition TYPE to cognitive WEIGHT.

#### DZ14-10: Bookending — Mere Repetition
- **Source:** Lines 379-380
- **Rule:** Content must genuinely TRANSFORM while form stays constant.

#### DZ14-11: Bookending — Forced Echo
- **Source:** Lines 380-381
- **Rule:** If page naturally ends differently, use lighter echo.

#### DZ14-12: Bookending — Header/Footer ≠ Bookending
- **Source:** Lines 381-382
- **Rule:** Bookending operates on CONTENT SECTIONS, not chrome.

#### DZ14-13: Meta-Annotation — Over-Annotation
- **Source:** Lines 507-508
- **Rule:** Section level and page level only. Not paragraph or component level.

#### DZ14-14: Meta-Annotation — Annotation as Content
- **Source:** Lines 508-509
- **Rule:** Labels must be visually quiet background layer, not primary reading channel.

#### DZ14-15: Meta-Annotation — Wrong Vocabulary
- **Source:** Lines 509-510
- **Rule:** Use design system terminology, not metaphor vocabulary.

#### DZ14-16: Provenance — Performative Citation
- **Source:** Lines 652-653
- **Rule:** Every citation must trace to a visible design decision. No 50-citation headers with only 3 used.

#### DZ14-17: Provenance — Stale Provenance
- **Source:** Lines 653-654
- **Rule:** Threading header should be last thing written/verified in Pass 3.

#### DZ14-18: Provenance — Visible Provenance
- **Source:** Lines 655-656
- **Rule:** Provenance traces belong in HTML/CSS comments, NOT rendered content. Only footer stamp is visible.

---

## FILE 15: PERCEPTUAL HIERARCHY (15-perceptual-hierarchy.md)

### ACTION ITEMS

#### A15-01: Implement First-5-Seconds Design Protocol
- **Source:** Lines 10-77
- **Action:** Design opening sequence with 4-phase eye path: (0-1s) dark header slab orientation, (1-2s) blue accent content anchor, (2-3s) visual texture variety below fold, (3-5s) pattern detection/hierarchy/rhythm. Specific CSS values provided.
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (builder instructions, Act 1)
- **Dependencies:** None

#### A15-02: Implement 5-Act Scroll Narrative Structure
- **Source:** Lines 80-194
- **Action:** Structure page as 5-act narrative: Act 1 (0-15%, Confidence/Orientation), Act 2 (15-40%, Engagement/Variety), Act 3 (40-60%, Climax), Act 4 (60-85%, Depth/Substance), Act 5 (85-100%, Resolution/Completeness). Each act has specific emotional targets, visual characteristics, scroll speeds, and mechanism deployments.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (builder instructions)
- **Dependencies:** Content inventory

#### A15-03: Implement 3-Peak Visual Weight Distribution Curve
- **Source:** Lines 197-288
- **Action:** Design visual weight with 3 peaks: Peak 1 (0-15%, weight 7/10 opening), Valley 1 (15-35%, weight 4/10 reading), Peak 2 (40-55%, weight 9/10 MAXIMUM climax), Valley 2 (55-80%, weight 5-6/10 substance), Peak 3 (85-100%, weight 6/10 closing).
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (builder instructions)
- **Dependencies:** None

#### A15-04: Implement Contrast Calendar
- **Source:** Lines 291-360
- **Action:** Plan specific background, border weight, typography weight, density, and content signal for each 10% scroll increment. Table provided at lines 301-314.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Master execution prompt (builder instructions or planner output)
- **Dependencies:** Act structure defined

#### A15-05: Implement 5 Pause Points
- **Source:** Lines 362-424
- **Action:** Design 5 specific pause points: PP1 (5-8%, orientation box), PP2 (12-18%, first table/list), PP3 (42-52%, midpoint climax), PP4 (65-75%, warning callout), PP5 (82-88%, essence callout). Each has specific visual mechanism and content alignment.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Master execution prompt (builder instructions)
- **Dependencies:** Act structure and weight distribution

#### A15-06: Prevent Anti-Pattern 1 — "Narrow River in a Wide Desert"
- **Source:** Lines 431-445
- **Action:** Add 5-point prevention protocol: (1) 960px container NON-NEGOTIABLE, (2) content fills container (not further constrained), (3) at least 1 full-width element per Act, (4) at 1440px margins feel like designed frame, (5) negative space has shape, not formlessness.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (builder constraints)
- **Dependencies:** None
- **Cross-reference:** Container width 940-960px identity constraint

#### A15-07: Prevent Anti-Pattern 2 — "Every Zone Looks the Same"
- **Source:** Lines 447-462
- **Action:** Each major section must differ in at least 2 of 5 dimensions: background tint, border treatment, density, typography emphasis, content type. Adjacent sections sharing 4+ dimensions must be MERGED. Zone transitions must be VISIBLE.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (builder constraints)
- **Dependencies:** None

#### A15-08: Prevent Anti-Pattern 3 — "Big Header, Nothing Else" (Front-Loading)
- **Source:** Lines 464-476
- **Action:** Header weight capped at 7/10 (NOT 10/10). Reserve 9/10 for midpoint. Create scroll-position-to-weight-target table. Only ONE zone gets maximum. Closing weight >= 6/10.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (builder constraints)
- **Dependencies:** None

#### A15-09: Prevent Anti-Pattern 4 — "Abandoned Scroll" (No Ending)
- **Source:** Lines 478-491
- **Action:** Footer is MANDATORY. Requirements: (1) dark background OR heavy top border (3px primary), (2) contains attribution + date + navigation links, (3) minimum 60px tall at 1440px, (4) preceded by essence callout or summary section, (5) assertive ending (not fade to cream).
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (builder constraints)
- **Dependencies:** None

#### A15-10: Prevent Anti-Pattern 5 — "Compositional Blindness" (Viewport Amnesia)
- **Source:** Lines 493-504
- **Action:** Design at 1440px FIRST, adapt to 768px. At 1440px at least 1 section uses desktop-width feature (multi-column, side-by-side). At 768px features gracefully stack. Squint test at both viewports.
- **Category:** GATE
- **Priority:** HIGH
- **Target file:** Master execution prompt (builder constraints)
- **Dependencies:** None

#### A15-11: Prevent Anti-Pattern 6 — "Promised Architecture, Delivered Fragment"
- **Source:** Lines 506-516
- **Action:** Do NOT create structural labels without content. Match scope to content. Every heading needs at least 2 paragraphs beneath it. Content inventory BEFORE structure design.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (builder constraints)
- **Dependencies:** Content inventory complete

#### A15-12: Implement Pre-Build Checklist
- **Source:** Lines 523-529
- **Action:** Before building, verify: (1) content inventory complete, (2) weight distribution curve planned, (3) climax element identified, (4) footer design planned, (5) contrast calendar drafted.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (pre-build gate)
- **Dependencies:** None

#### A15-13: Implement During-Build Checklist
- **Source:** Lines 531-538
- **Action:** During building, verify: (1) header weight <= 7/10, (2) max 2 consecutive same-texture viewports, (3) 3+ textures in first 1.5 viewports, (4) each section differs in 2+ dimensions, (5) climax at 40-55%, (6) warning callouts reserved for Act 4, (7) essence callout near end, (8) footer weight 6/10.
- **Category:** GATE
- **Priority:** HIGH
- **Target file:** Master execution prompt (during-build checklist)
- **Dependencies:** Pre-build checklist passes

#### A15-14: Implement After-Build Checklist
- **Source:** Lines 540-548
- **Action:** After building, verify: (1) squint test 1440px shows 3 peaks, (2) squint test 768px shows full-width content, (3) scroll-through maintains interest, (4) 2-second identification, (5) clear arrival signal at bottom, (6) no adjacent identical sections, (7) no heading without 2+ paragraphs beneath.
- **Category:** GATE
- **Priority:** HIGH
- **Target file:** Master execution prompt (post-build gate)
- **Dependencies:** Build complete

#### A15-15: Add Quantified Targets Table
- **Source:** Lines 553-566
- **Action:** Add 10 specific measurable targets to builder instructions: (1) exactly 3 dark sections, (2) 4-5 pause points, (3) 7-9 background changes, (4) 3+ textures in first 1.5 viewports, (5) 3+ callout colors, (6) midpoint weight 9/10, (7) footer weight 6/10, (8) max 2 consecutive same-texture viewports, (9) 90%+ content-to-void ratio, (10) minimum 2 paragraphs below any heading.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (quantified targets)
- **Dependencies:** None

### PREREQUISITES

#### P15-01: Content Inventory Must Be Complete Before Structure Design
- **Source:** Lines 514-516, 523
- **Action:** Know ALL content before designing sections. Never design empty sections hoping content materializes.
- **Category:** PREREQUISITE
- **Priority:** BLOCKING

#### P15-02: Climax Element Must Be Identified Before Building
- **Source:** Lines 525, 128-131
- **Action:** The single most visually striking element must be identified and positioned at 40-55% scroll.
- **Category:** PREREQUISITE
- **Priority:** BLOCKING

#### P15-03: Weight Distribution Curve Must Be Planned Before Building
- **Source:** Lines 524
- **Action:** Assign each 10% scroll increment a weight target (1-10).
- **Category:** PREREQUISITE
- **Priority:** BLOCKING

#### P15-04: Footer Design Must Be Planned Before Building
- **Source:** Lines 526
- **Action:** Footer is mandatory; its design must be planned, not afterthought.
- **Category:** PREREQUISITE
- **Priority:** BLOCKING

#### P15-05: Contrast Calendar Must Be Drafted Before Building
- **Source:** Lines 527
- **Action:** Background, border, typography, density per section planned upfront.
- **Category:** PREREQUISITE
- **Priority:** HIGH

### BINARY CHECKS

#### BC15-01: Exactly 3 Dark Sections (Header, Climax, Footer)
- **Source:** Line 318, 557
- **Pass/Fail:** Count of dark background sections = 3

#### BC15-02: 4-5 Pause Points Distributed Across Scroll
- **Source:** Line 558
- **Pass/Fail:** Count of designed pause points = 4-5

#### BC15-03: 7-9 Background Changes Across Full Scroll
- **Source:** Line 559
- **Pass/Fail:** Count of background changes = 7-9

#### BC15-04: 3+ Content Textures in First 1.5 Viewports
- **Source:** Lines 51, 560
- **Pass/Fail:** Count of distinct visual textures visible within first 1.5 viewports >= 3

#### BC15-05: 3+ Callout Colors Used Across Page
- **Source:** Line 561
- **Pass/Fail:** Count of distinct callout accent colors >= 3

#### BC15-06: Midpoint Climax at 40-55% Scroll Depth
- **Source:** Lines 124, 535
- **Pass/Fail:** Most visually striking element positioned at 40-55% scroll

#### BC15-07: Footer Weight >= 6/10
- **Source:** Lines 176, 563
- **Pass/Fail:** Footer has dark background or heavy border with attribution/navigation

#### BC15-08: Max 2 Consecutive Same-Texture Viewports
- **Source:** Lines 122, 564
- **Pass/Fail:** No more than 2 viewports in a row with same visual texture

#### BC15-09: Content-to-Void Ratio >= 90%
- **Source:** Line 565
- **Pass/Fail:** Content occupies 90%+ of total scroll height

#### BC15-10: No Heading Without 2+ Paragraphs Beneath
- **Source:** Lines 513, 566
- **Pass/Fail:** Every heading has at least 2 paragraphs of content

#### BC15-11: Header Weight Capped at 7/10
- **Source:** Lines 224, 471, 531
- **Pass/Fail:** Header is confident but NOT the maximum visual weight

#### BC15-12: Each Major Section Differs in 2+ of 5 Dimensions from Adjacent
- **Source:** Lines 453-459, 534
- **Pass/Fail:** Adjacent sections differ in >= 2 of: background, border, density, typography, content type

#### BC15-13: Footer Is Present with Attribution + Navigation
- **Source:** Lines 484-489
- **Pass/Fail:** Footer exists with minimum content

#### BC15-14: Squint Test at 1440px Shows 3 Weight Peaks
- **Source:** Line 541
- **Pass/Fail:** 3 distinct visual weight peaks visible at squint distance

#### BC15-15: Squint Test at 768px Shows Full-Width Content
- **Source:** Line 542
- **Pass/Fail:** Content fills width with no horizontal void at 768px

#### BC15-16: Warning/Gotcha Callouts Reserved for Act 4 (60-80%)
- **Source:** Lines 393-401, 536
- **Pass/Fail:** First red/coral callout appears after 60% scroll depth

### FILE MODIFICATIONS

#### FM15-01: Master Execution Prompt — Act Structure
- **Target:** Master execution prompt
- **Add:** 5-act scroll narrative (lines 83-194) with emotional targets, visual characteristics, scroll speeds, mechanism deployments per act

#### FM15-02: Master Execution Prompt — Visual Weight Distribution
- **Target:** Master execution prompt
- **Add:** 3-peak weight distribution curve with specific weight targets per scroll increment (lines 197-288)

#### FM15-03: Master Execution Prompt — Contrast Calendar
- **Target:** Master execution prompt
- **Add:** Background/border/typography/density specification table per scroll increment (lines 299-314)

#### FM15-04: Master Execution Prompt — Pause Points
- **Target:** Master execution prompt
- **Add:** 5 pause point specifications with positions, visual mechanisms, and content alignment (lines 362-424)

#### FM15-05: Master Execution Prompt — Anti-Pattern Protocols
- **Target:** Master execution prompt
- **Add:** 6 anti-pattern prevention protocols (lines 431-516)

#### FM15-06: Master Execution Prompt — Quantified Targets
- **Target:** Master execution prompt
- **Add:** 10 measurable targets table (lines 553-566)

#### FM15-07: Master Execution Prompt — 3-Phase Checklist
- **Target:** Master execution prompt
- **Add:** Pre-build (lines 523-529), during-build (lines 531-538), and after-build (lines 540-548) checklists

### CROSS-REFERENCES

- **To ceiling-page.html:** Anti-patterns derived from ceiling experiment failures (throughout)
- **To DD-006-fractal.html:** Perceptual hierarchy successes, fractal self-similarity (lines 572-579)
- **To CD-006-pilot-migration.html:** Perceptual hierarchy gold standard, 39/40 (lines 581-592)
- **To 14-intentionality-layer-design.md:** Structural bookending (Act 5 references Dimension 4), essence callout (Act 5), section-meta (referenced as meta-annotation)
- **To 13-compositional-fluency.md:** Mechanism interaction patterns for compositional clusters within acts
- **To semantic-rules.md:** Callout color variety (3+ colors)
- **To anti-pattern prevention:** Container width 940-960px (identity constraint, also in prohibitions.md)

### SPECIFIC DESIGN SPECIFICATIONS

#### DS15-01: Header Design (Second 0-1)
- **Source:** Lines 19-23
- Full-bleed dark background (#1A1A1A)
- Title in Instrument Serif at 3rem
- Red primary accent (#E83025) appears ONCE — 3px bottom border
- Must answer "WHAT" in under 1 second

#### DS15-02: Orientation Box (Second 1-2)
- **Source:** Lines 36-41
- Blue accent (#4A90D9) left border at 4px
- Immediately below header with 32px separation
- Answers "WHY should I read this?" in 2-3 sentences
- 2-zone DNA: sparse label + dense body

#### DS15-03: First 1.5 Viewports (Second 2-3)
- **Source:** Lines 50-55
- Must show 3+ different visual textures
- Orientation callout + content block + visual break

#### DS15-04: Background Color Mapping
- **Source:** Lines 321-324
- Cream (#FEF9F5) = breathing, transition, orientation
- White (#FFFFFF) = substantive content, reading zones
- Breathing zone (#FAF5ED) = explicit pauses
- Dark (#1A1A1A) = structural framing (header, footer, climax)

#### DS15-05: Border Weight Hierarchy
- **Source:** Lines 326-330
- 4px = PRIMARY importance
- 3px = SECONDARY importance
- 1px = TERTIARY (subtle dividers)

#### DS15-06: Typography Weight Hierarchy
- **Source:** Lines 332-337
- Display serif (Instrument Serif) = structural headings, wisdom callouts — RARE
- Body sans (Inter, 600) = labels, navigation, emphasis
- Body sans (Inter, 400) = default reading
- Monospace (JetBrains Mono) = technical, meta labels
- Serif italic (Instrument Serif italic) = essence/wisdom, transitions

#### DS15-07: Footer Minimum Requirements
- **Source:** Lines 484-489
- Dark background OR heavy top border (3px primary)
- Contains: attribution, date, navigation links
- Minimum 60px tall at 1440px

#### DS15-08: Anti-Metronome Background Rhythm
- **Source:** Lines 346-359
- Vary INTERVAL of background zones (not regular alternation)
- Irregular rhythm more engaging than regular rhythm

---

## SUMMARY STATISTICS

### Total Extractions by Category

| Category | File 13 | File 14 | File 15 | TOTAL |
|----------|---------|---------|---------|-------|
| ENRICHMENT | 8 | 7 | 2 | **17** |
| PROCESS | 3 | 4 | 2 | **9** |
| GATE | 2 | 2 | 10 | **14** |
| PREREQUISITE | 2 | 5 | 5 | **12** |
| TOOL | 1 | 0 | 0 | **1** |
| OTHER (danger zones) | 0 | 18 | 0 | **18** |

### Total Extractions by Priority

| Priority | File 13 | File 14 | File 15 | TOTAL |
|----------|---------|---------|---------|-------|
| BLOCKING | 5 | 5 | 9 | **19** |
| HIGH | 6 | 7 | 4 | **17** |
| MEDIUM | 2 | 2 | 0 | **4** |
| LOW | 0 | 0 | 0 | **0** |

### Binary Checks Total: 5 + 16 + 16 = **37**

### File Modifications Total: 4 + 5 + 7 = **16**

### Cross-References Total: 11 + 6 + 7 = **24**

### Danger Zones Total: 0 + 18 + 0 = **18**

### Key Overlaps Between Files

1. **Multi-Pass Model:** File 13 (Strategy 2, lines 322-332) defines the 3-pass model; File 14 defines Pass 3 specifics; File 15 defines Act-level structure within passes
2. **Structural Bookending:** File 14 (Dimension 4) gives detailed spec; File 15 (Act 5) references bookending as resolution requirement
3. **Footer Mandate:** File 14 (provenance stamp) and File 15 (Act 5, Anti-Pattern 4) both require footer — different aspects
4. **Metaphor Dependency:** File 13 (P13-01) and File 14 (P14-03) both require metaphor derivation as prerequisite
5. **Section Meta-Annotation:** File 14 (Dimension 5) provides full spec; File 15 references as part of perceptual hierarchy
6. **Transition Infrastructure:** File 14 (Dimension 3) requires transition--bridge elements from Pass 2; File 15 defines visual weight of transitions per Act
7. **Container Width:** File 15 (Anti-Pattern 1) reaffirms 960px NON-NEGOTIABLE from identity constraints

---

**END OF EXTRACTION**

# Adversarial Review: Fresh-Eyes Assessment of Continuity Documentation

**Reviewer:** fresh-eyes (zero prior context)
**Date:** 2026-02-15
**Method:** Read all 5 continuity docs + 2 source syntheses + design-system/CLAUDE.md cold. Identified everything that would confuse, mislead, or be insufficient for a new instance.

---

## EXECUTIVE VERDICT

The documentation suite is **impressively thorough but structurally self-defeating.** A new instance reading these 5 documents would gain deep understanding of the project's intellectual history but would still struggle to answer the most basic operational question: "What should I do RIGHT NOW?" The documents are excellent research summaries that happen to be packaged as continuity docs. They tell you everything about what was DISCOVERED but not enough about what to DO with those discoveries.

The strongest document is 04-instance-continuity-guide.md (the metacognitive-architect's work). The weakest is 04b-ingestion-architecture.md, which describes an ideal documentation topology that DOES NOT YET EXIST and refers to files (HANDOFF.md, MODIFICATIONS.md, PHASE-D-RESULTS.md) that have not been created.

---

## CATEGORY 1: GAPS (What's Missing)

### GAP-1: No actual HANDOFF.md exists [CRITICAL]

Document 04b proposes a 3-layer architecture centered on a ~100-line HANDOFF.md file. This file does not exist. The ingestion architecture describes an ideal state but delivers zero implementation. A new instance reading 04b would expect to find HANDOFF.md and be confused when it is missing. The proposed Layer 2 files (MODIFICATIONS.md, PHASE-D-RESULTS.md) also do not exist.

**Impact:** The entire ingestion architecture is aspirational, not operational. The gap between "what the documentation recommends" and "what actually exists" is the single biggest confusion risk.

### GAP-2: No concrete file of skill modifications with exact locations [HIGH]

Both syntheses and the worldview doc recommend specific skill changes (replace "sample 2-4 mechanisms," add fractal gate, etc.). The rigidity synthesis even provides exact wording. But NO document consolidates:
- The EXACT line numbers in SKILL.md where changes should be made
- The EXACT old text to replace
- The EXACT new text to insert
- Whether ANY changes have been made yet (answer: none, but you have to read deep into 04-instance-continuity-guide.md line 247 to discover this)

A builder agent reading the worldview would know WHAT to change but not WHERE or HOW. This matters because the skill file is 1,402 lines long.

### GAP-3: No visual example of what each tier looks like [HIGH]

The tier model (Floor/Middle/Ceiling/Flagship) is described extensively across 3 documents with mechanism counts, CSS line counts, build times, and reproducibility percentages. But NO document shows or references a concrete visual example of each tier. What does a Middle-tier page actually LOOK like? The documents say "like Variant B but with grid layouts and zone backgrounds" -- but a new instance has never seen Variant B. There is no screenshot, no rendered example, no "look at lines 50-120 of this HTML file for a Middle-tier section."

The closest reference is "Variant B was 694 lines" and "OD-004 was 1,978 lines" -- but these are line counts, not visual demonstrations. The entire tier model is abstract.

### GAP-4: What is "KortAI" and who is the audience? [MEDIUM]

The continuity guide (04) mentions "KortAI design system" in passing. The worldview (02) mentions it once. But no document explains:
- What KortAI IS (a product? a company? a project name?)
- Who the AUDIENCE for these HTML pages is
- What the CONTENT actually consists of (all references are to "content" generically -- is it documentation? marketing? education? internal?)
- Where the finished pages will be deployed
- What the business/personal motivation is beyond "making content engaging"

The emotional context in 04 ("eyes would naturally drift off") gestures at a personal project motivation but never states it plainly. The phrase "KortAI" appears to be both the project name and the design system name, but this is never clarified.

### GAP-5: The relationship between `ephemeral/` and permanent storage is unstated [MEDIUM]

All research outputs live in `ephemeral/`. The doc-auditor (03) flags that "if ephemeral/ is cleaned up, the only record would be MEMORY.md." But no document states:
- What happens to ephemeral files over time
- Whether they get committed
- Whether the research findings need to be persisted elsewhere before cleanup
- The policy for when ephemeral content graduates to permanent storage

For a new instance: if `ephemeral/richness-research/` and `ephemeral/rigidity-research/` are deleted, the entire intellectual foundation of the tier model and modification recommendations vanishes. This is a real risk that no document addresses with a concrete mitigation plan.

### GAP-6: No "decision log" for the user's actual decisions [MEDIUM]

Multiple documents note that the user "has NOT yet committed to next actions" (04, line 88), "has NOT yet approved any modifications" (04, line 156), and "the user has NOT committed to [the tier model] yet" (04, line 129). But there is no mechanism for recording WHEN the user makes these decisions. A new instance would not know if the user approved modifications between the creation of these docs and the new instance's session.

This is a structural gap: the docs capture the STATE as of creation time but have no update protocol.

---

## CATEGORY 2: CONFUSIONS (What's Unclear or Contradictory)

### CONFUSION-1: The narrative arc and worldview substantially overlap [HIGH]

Documents 01 (narrative arc, 438 lines) and 02 (worldview, 377 lines) cover the same material with different organizational schemes. The narrative arc is chronological ("Act I, Act II"). The worldview is topical ("Part 1: Worldview, Part 2: Tier Model"). Both describe the same findings, the same tier model, the same modification recommendations, and the same open questions.

A new instance reading both would encounter the same information twice (the 5 convergence points, the tier model specifications, the modification recommendations, the open questions) and spend significant context budget on redundancy. The narrative arc spends 400+ lines telling a story that the worldview summarizes in 100 lines.

**Recommendation:** One of these should be designated as the PRIMARY source. The other should explicitly say "this is a deeper narrative version of the summary in [other doc]; skip if you've read that."

### CONFUSION-2: Tier model numbers are inconsistent across documents [HIGH]

The tier model appears in 4 documents with slightly different numbers:

| Source | Floor Mechanisms | Middle Mechanisms | Ceiling | Flagship |
|--------|-----------------|-------------------|---------|----------|
| 01-narrative-arc (line 248) | 5 | 8-10 | 12-15 | 16-18 |
| 02-worldview (Part 2) | 5 | 8-10 | 12-15 | 16-18 |
| Richness synthesis (Section 7) | Floor mentions "5-scale fractal" | "3-5 mechanisms" (DIFFERENT) | "8-15 mechanisms" (DIFFERENT) | "15+ mechanisms" |
| Rigidity synthesis (Section 7) | 5 | 8-10 | 12-15 | 16-18 |

The RICHNESS synthesis (05-unified-synthesis.md, which predates the rigidity synthesis) uses DIFFERENT tier boundaries (3-5 for Middle, 8-15 for Ceiling, 15+ for Flagship). The rigidity synthesis and continuity docs use 8-10/12-15/16-18. These are different tier systems that were never reconciled.

A new instance reading the richness synthesis first (as recommended in some reading orders) would form one mental model of the tiers, then have to revise it when reading the rigidity synthesis.

### CONFUSION-3: "Middle tier" vs "exceptional Track 1" vs "Track 1 Enhanced" -- same thing? [HIGH]

Three overlapping concepts appear across documents:
1. **"Middle tier"** (rigidity synthesis, worldview, narrative arc) -- 8-10 mechanisms, no metaphor, 70-100 min
2. **"Exceptional Track 1"** (richness synthesis, implications-explorer) -- full CRESCENDO, soul constraints, no metaphor
3. **"Track 1 Enhanced"** (richness synthesis Section 7) -- one of the original 4 proposed tiers

Are these the same thing? The richness synthesis calls for "Track 1 done EXCEPTIONALLY WELL" as the engagement floor. The rigidity synthesis calls for "Middle tier" as the universal floor. The worldview says Middle tier skips Phases 1-3 of the tension pipeline. These SEEM to describe the same concept but use different names, different mechanism counts (the richness synthesis says "3-5" for Middle, the rigidity synthesis says "8-10"), and different framing.

A new instance would not know these are (probably) the same concept evolving across two investigations.

### CONFUSION-4: Which reading order to follow? [MEDIUM]

Three different reading orders are recommended:

**01-narrative-arc (lines 412-434):** Start with 01, then richness evidence (01, 02, 05), then rigidity evidence (01, 02, 05, 06), then operational details, then contrarian.

**04-instance-continuity-guide (lines 163-189):** Start with 04, then rigidity synthesis, then compositional-core CLAUDE.md, then richness synthesis, then modification analysis, then tier specifications.

**04b-ingestion-architecture (lines 115-165):** Start with the nonexistent HANDOFF.md, then task-specific Layer 2 files.

These three orders disagree on: (a) what to read first, (b) whether the richness or rigidity synthesis is more important, and (c) whether the narrative arc should be read at all (04b doesn't mention it).

### CONFUSION-5: Is the "sample 2-4" problem about a ceiling or about inconsistency? [MEDIUM]

Different documents frame the "sample 2-4 mechanisms" problem differently:
- 01-narrative-arc: "This one line caps the pipeline's potential" (framed as a ceiling problem)
- 02-worldview: "The instruction exists in two inconsistent forms" (framed as a calibration problem)
- 04-instance-continuity-guide: "exists in TWO INCONSISTENT forms ('sample 2-4' in one location and '3-5' in another)" (framed as inconsistency)
- Rigidity synthesis: "sets a ceiling, not a floor" (framed as a ceiling problem)

A new instance would wonder: is the primary problem that the number is TOO LOW, or that two DIFFERENT numbers exist? The answer appears to be both, but the recommended fix (per-category minimum) addresses only the ceiling problem, not the inconsistency.

---

## CATEGORY 3: JARGON (Terms Used Without Definition)

### Defined somewhere but not consistently:

| Term | Defined In | NOT Defined In (where used) |
|------|-----------|--------------------------|
| Soul constraints | 04 (line 313) | 01 (used without definition until much later) |
| Anti-gravity | 04 (line 316), 02 (Section 9) | 01 (line 100: "anti-gravity" appears but R1-R6 codes unexplained until 02) |
| Phase 3.5 gate | 02 (Section 9, implied) | 01 (line 101: used without explanation of what it IS) |
| CRESCENDO | 02 (Part 2, Middle tier) | Never defined as a concept -- what IS CRESCENDO density? |
| Track 1 / Track 2 | 02 (Section 9), 04 (line 315) | 01 (used from line 34 without definition) |
| Addition Test | 04 (line 315) | 02 (line 114, used as if reader already knows) |
| Tension-composition pipeline | 04 (line 314) | 01 (used from paragraph 1 without explanation) |
| 2-zone DNA | Never fully defined | 02 (line 43), rigidity synthesis (Section 9) |
| Border-weight gradient encoding | Partially in rigidity synthesis | Used in multiple docs as if self-evident |
| F-PATTERN, BENTO, PULSE | Never defined | Rigidity synthesis Section 8 |

### Never defined anywhere:

| Term | Used In | What a new instance would need to know |
|------|---------|---------------------------------------|
| CRESCENDO (as a density pattern) | 02, rigidity synthesis | What IS this pattern? How does it differ from PULSE? |
| 5-scale fractal | 02, richness synthesis | What are the 5 scales? How do you check compliance? |
| Convention spec | 01 (lines 207-210) | What is a convention spec? Where are they? |
| R1-R6 (anti-gravity mechanisms) | 02 (Section 9) | These are numbered R1 through R6 but the numbers map to different things than the research streams R1-R5. Extremely confusing. |
| DD-006, OD-004, CD-006 | All documents | Referenced dozens of times but never shown. A new instance cannot look at these. |
| Solid offset depth | Multiple docs | What IS this technique? How does it work? |
| Mode 2 perceptual audit | Rigidity synthesis | What distinguishes Mode 2 from Mode 1? |
| Isomorphism score | Rigidity synthesis (line 309) | What is this? Where is it calculated? What does "< 4" mean? |
| Phase 4.0 guardrails | Multiple docs | Where are these exactly? Line numbers? |

### The R-code collision problem [CRITICAL for understanding]:

"R" is used for THREE different things:
1. **R1-R5** = Research streams (28+27+51+192+39 findings)
2. **R1, R2, R3, R5, R6** = Anti-gravity mechanisms (phase-gated library, mechanism/metaphor separation, anti-prescription, binary sequential, divergence mandate)
3. **R-01 through R-18** = Rigidity patterns documented by the rigidity archaeologist

A new instance encountering "R5" would not know if this means Research Stream 5 (combination theory), Anti-gravity mechanism 5 (binary sequential phases), or Rigidity pattern 5. The documents never acknowledge this collision.

---

## CATEGORY 4: MISSING LINKS (Connections Between Documents That Are Unstated)

### LINK-1: The richness synthesis PREDATES the rigidity synthesis

The richness synthesis (05-unified-synthesis.md) was written BEFORE the rigidity research started. Its tier model (Floor/Middle/Ceiling/Flagship with DIFFERENT numbers than the rigidity version) was the INITIAL proposal. The rigidity synthesis REFINED these numbers. But no document says "the rigidity synthesis supersedes the richness synthesis's tier model." A new instance reading them in any order would not know which numbers are current.

### LINK-2: The narrative arc DEPENDS on reading the worldview for definitions

The narrative arc (01) uses terms like "Track 1," "Track 2," "soul constraints," "anti-gravity," "Phase 3.5 gate," "Addition Test" without definition. The worldview (02) defines most of these in Part 9. But the recommended reading order in 01 says "read this document FIRST." If a new instance follows this instruction, they hit undefined terms immediately.

### LINK-3: The documentation audit (03) drives the ingestion architecture (04b) but doesn't reference it

Document 03 catalogues staleness and recommends restructuring MEMORY.md. Document 04b proposes a 3-layer architecture. Neither references the other, even though 04b's recommendations address exactly the problems 03 identifies. A new instance would not know these are part of the same solution.

### LINK-4: The instance continuity guide (04) and the worldview (02) have different "next actions" lists

02 Part 5 lists 10 actionables. 04 lines 192-208 lists 9 actions grouped by scenario. These lists overlap but are not identical. 02's list is more concrete (specific SKILL.md edits with wording). 04's list is more situational (what to do if user wants to build vs research vs continue). A new instance would not know which list takes precedence.

---

## CATEGORY 5: ORDERING PROBLEMS

### PROBLEM-1: The recommended reading order front-loads narrative over operations [HIGH]

01-narrative-arc is recommended as the FIRST read in its own header. But at 438 lines, it is a 15-20 minute read that provides historical context before operational orientation. A new instance that reads this first would understand the INTELLECTUAL JOURNEY but not know basic operational facts like "what are the soul constraints?" or "where are the key files?"

04-instance-continuity-guide is a much better first read (it opens with "START HERE" and provides the 5 most important things). But it recommends reading the rigidity synthesis SECOND, which is 550 lines -- another 20+ minutes before any operational work begins.

The optimal first read would be something that does not yet exist: a ~100-line orientation document (the HANDOFF.md proposed by 04b).

### PROBLEM-2: The documentation audit (03) should be read LAST but has critical context [MEDIUM]

03 is a meta-document about document staleness. It is most useful for someone updating the documentation, not for someone picking up the project. But it contains the ONLY clear statement of which documents are stale and how: "design-system/CLAUDE.md line 9 currently says Phase D not yet started -- this is wrong."

The instance continuity guide (04) includes a staleness warning (lines 23-29) but is less comprehensive than 03's full inventory. A new instance following any of the recommended reading orders would encounter the staleness warning early (good) but miss 03's detailed inventory until later.

---

## CATEGORY 6: ACTIONABILITY ASSESSMENT

### "Could a new Opus instance read these docs and immediately know what to build next?"

**Answer: NO, for 4 reasons.**

**Reason 1: The docs say "the user has not committed to next actions."** Every actionable recommendation is hedged with "the user has NOT yet approved." This is appropriate for historical accuracy but creates paralysis for a new instance. It means the new instance must ASK the user before doing anything -- which is correct behavior, but the docs should explicitly say "your first action is to ask the user what they want to do" rather than leaving the instance to infer this from the absence of committed decisions.

**Reason 2: The skill modifications are described but not implemented.** The recommended changes to SKILL.md are described in natural language across multiple documents (02 Part 5, rigidity synthesis Section 6) but have not been applied. A new instance that wants to build with the improved pipeline would need to first implement the changes -- but it would not know this unless it reads deep into 04 (line 247) or checks the skill file directly.

**Reason 3: No "minimum viable first action" is defined.** The docs describe a rich landscape of possible next steps but do not identify the single smallest thing a new instance could do to verify it understands the system. Something like "build a single Middle-tier section (not a full page) to verify you can apply tokens, grid layouts, and zone backgrounds correctly" would give the instance a concrete, small-scope starting point.

**Reason 4: The tier model has no worked example.** The tier model describes what each tier CONTAINS (mechanism counts, CSS line ranges, build times) but does not show what each tier PRODUCES. A new instance cannot visualize the difference between Floor and Middle without seeing actual output. Even a pseudocode CSS skeleton would help.

---

## CATEGORY 7: CONTRADICTIONS

### CONTRADICTION-1: Is the user in a "THINKING phase" or ready to build?

04-instance-continuity-guide (line 21): "Do NOT start by... Building anything (the user is in a THINKING phase, not a building phase)"

02-worldview (Part 3, Goal 1): "The most important thing we can do next is BUILD, not analyze. One experiment resolves more open questions than another four research reports."

Rigidity synthesis (Section 12): "These are specific actions, not more analysis."

The instance continuity guide explicitly warns against building. The worldview and rigidity synthesis explicitly call for building. A new instance following 04's advice would not build; following 02 or the rigidity synthesis, it would propose building. These are contradictory instructions.

**Root cause:** 04 was written to capture the conversation state AT THE MOMENT OF WRITING (the user was still thinking). 02 was written to capture the RESEARCH RECOMMENDATION (which is to build). Both are accurate for their scope, but a new instance doesn't know which takes precedence.

### CONTRADICTION-2: Middle tier mechanism count

Richness synthesis Section 7 says Middle = "3-5 mechanisms." Rigidity synthesis Section 7 says Middle = "8-10 mechanisms." These are different ranges. The continuity docs use 8-10. No document explicitly says "the rigidity synthesis updated the richness synthesis's tier boundaries."

### CONTRADICTION-3: Total addressable gap percentage

01-narrative-arc (line 112): "Total addressable gap: ~60-65%"
02-worldview (Part 4, line 183): "The addressable portion (~85%) can be closed through pipeline modifications"

These are different numbers. 01 says 60-65% addressable. 02 says ~85% addressable. The difference appears to be that 01 excludes compression loss (25%) from addressable while 02 includes it. But the discrepancy is not explained.

---

## CATEGORY 8: THE VOCABULARY-VS-LIBRARY QUESTION

### Is the resolution clearly documented?

**Partially.** 04b-ingestion-architecture.md Section 7 (lines 279-318) provides the clearest treatment. It explains:
- grammar/ files contain transferable MECHANISMS (vocabulary)
- case-studies/ files contain non-transferable IMPLEMENTATIONS (library)
- The Name Test and Transfer Test distinguish them
- Anti-gravity mechanism R2 (Mechanism/Metaphor Separation) operationalizes the distinction
- Phase 3.5 gate (R6) enforces it

**What's missing:**
1. No other continuity doc references this section. 01, 02, and 04 use the vocabulary/library distinction without pointing to 04b's resolution.
2. The resolution is buried in the LAST document in the suite. A new instance following the recommended reading order would encounter "vocabulary rigidity" dozens of times before reaching the section that explains how vocabulary differs from library.
3. The resolution is stated abstractly. A concrete example showing the SAME mechanism expressed differently in two different metaphors would make it viscerally clear. E.g., "Border-weight gradient in OD-004 means 4px=bedrock, 1px=surface. In a hypothetical 'ocean depth' page, it would mean 4px=deep trench, 1px=surface waves. Same mechanism, different expression."

---

## CATEGORY 9: THE HARD TEST

### "Could a new Opus instance read these docs and immediately know what to build next?"

**Score: 6/10.**

**What works (earns the 6):**
- The intellectual foundation is rock-solid. Any instance reading these docs would deeply understand WHY the project is where it is.
- The tier model, even with its inconsistencies, provides a clear framework for thinking about richness levels.
- The modification recommendations are specific and well-argued.
- The instance continuity guide's "Common Misconceptions" section is excellent and would prevent the most likely wrong turns.
- The emotional/motivational context in 04 is genuinely useful -- knowing the user values deep investigation and rejects false dichotomies would improve any instance's interaction quality.

**What fails (costs the remaining 4):**
- No single document under 200 lines provides complete operational orientation.
- The proposed HANDOFF.md does not exist.
- Skill modifications are described but not implemented.
- The tier model has no visual examples.
- Contradictory advice about whether to think or build.
- Jargon collision (R-codes meaning 3 different things).
- Three different recommended reading orders.
- The vocabulary-vs-library resolution is buried in the last document.
- No mechanism for tracking user decisions made after doc creation.

---

## TOP 10 RECOMMENDATIONS (Priority Order)

### 1. CREATE the HANDOFF.md proposed by 04b [CRITICAL]
Actually build the ~100-line orientation document. This is the single highest-impact action. Without it, every new instance wastes 30+ minutes reading 2000+ lines of context when 100 lines would suffice for orientation.

### 2. Reconcile the tier model numbers [CRITICAL]
Add an explicit note: "The rigidity synthesis (06) SUPERSEDES the richness synthesis (05) for tier boundaries. Middle = 8-10 mechanisms, not 3-5." Add this note to BOTH syntheses and to the continuity docs.

### 3. Resolve the "think vs build" contradiction [HIGH]
Add a clear statement: "The research unanimously recommends building an exceptional Middle-tier page as the next step. The user has not yet approved this. A new instance should summarize the research position and ask the user what they'd like to do."

### 4. Define all R-code variants explicitly [HIGH]
Add a disambiguation section: "R1-R5 (research streams) vs R1/R2/R3/R5/R6 (anti-gravity mechanisms) vs R-01 through R-18 (rigidity patterns). These are three different numbering systems." Place this in HANDOFF.md and/or 01.

### 5. Add a glossary with CRESCENDO, F-PATTERN, BENTO, PULSE, 2-zone DNA, solid offset depth, Mode 2, Isomorphism score [HIGH]
These terms are used repeatedly and never defined. Even a 20-line glossary would eliminate most of the jargon confusion.

### 6. Add explicit "this document supersedes" markers [MEDIUM]
The rigidity synthesis refines the richness synthesis's tier model. The continuity guide refines the narrative arc's reading order. State these relationships explicitly: "For tier model numbers, see rigidity synthesis Section 7 (supersedes richness synthesis Section 7)."

### 7. Reduce overlap between 01 and 02 [MEDIUM]
Either: (a) make 01 the "full story" and 02 the "current state + actions" with zero overlap, or (b) merge them into a single document with a story section and an operational section. Currently they cover ~60% of the same material.

### 8. Add a "Decision Tracker" section to 04 [MEDIUM]
A simple table: "Decision | Recommended | Status | Date Decided." This gives new instances a way to check if the user has approved modifications since the docs were written.

### 9. Add concrete CSS skeletons for each tier [LOW]
Even 20 lines of representative CSS per tier would make the tier model tangible. "Floor tier looks like: body with tokens, simple div stacking. Middle tier adds: CSS Grid layout, zone backgrounds via semantic classes, dark header."

### 10. Consolidate reading orders into ONE canonical order [LOW]
Pick one order and put it in HANDOFF.md. Remove the other two or explicitly mark them as "alternative deep-dive orders."

---

## DOCUMENT-BY-DOCUMENT GRADES

| Document | Grade | Strengths | Weaknesses |
|----------|-------|-----------|------------|
| 01-narrative-arc | B+ | Compelling story, clear chronology, excellent timeline table | Too long for orientation, undefined jargon, overlaps with 02 |
| 02-worldview | A- | Comprehensive, well-structured, actionable Part 5 | Overlaps with 01, tier model inconsistency with source |
| 03-documentation-audit | A | Precise, actionable, correct priorities | Meta-document (about docs, not about project) |
| 04-instance-continuity-guide | A | Best first-read, misconceptions section excellent, emotional context valuable | "Don't build" contradicts other docs, still 326 lines |
| 04b-ingestion-architecture | B | Best vocabulary-vs-library resolution, sound architecture | References nonexistent files, aspirational not operational |
| Richness synthesis (source) | B+ | Strong empirical foundation, good blind spots section | Tier numbers superseded, not reconciled |
| Rigidity synthesis (source) | A | Authoritative, well-organized, modification recs are excellent | Long (550 lines), assumes familiarity with richness findings |

---

## FINAL ASSESSMENT

The documentation suite represents an extraordinary amount of intellectual work. The research findings are genuine, well-argued, and well-synthesized. The tier model is a sound framework. The modification recommendations are specific and well-justified.

The failure is not in CONTENT but in PACKAGING. The suite assumes a reader willing to spend 60+ minutes absorbing context before acting. It provides excellent answers to "what did we learn?" but inadequate answers to "what do I do?" The proposed HANDOFF.md would fix this, but it has not been built.

The most dangerous aspect for a new instance is not missing information -- it is CONTRADICTORY information (tier numbers, think-vs-build, reading orders) that would force the instance to make judgment calls about which source to trust, without knowing which is more recent or authoritative.

**Bottom line:** Build HANDOFF.md, reconcile the tier numbers, and resolve the think-vs-build contradiction. These three actions would raise the suite from 6/10 to 8/10 for a new instance's ability to pick up the work.

---

**END ADVERSARIAL REVIEW**

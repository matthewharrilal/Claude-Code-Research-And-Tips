# Structural Adversarial Review

**Reviewer:** structure-adversary
**Date:** 2026-02-15
**Scope:** Complete documentation package -- START-HERE through HANDOFF, doc-enrichment, continuity-docs, updated CLAUDE.md, reorganized MEMORY.md

---

## OVERALL VERDICT: PASS WITH RESERVATIONS (7/10)

The documentation package is structurally sound but suffers from redundancy bloat and a split-brain architecture that will confuse new instances within the first 10 minutes. The ingestion path works. The content is actionable. But the same information exists in 3-5 places at different granularities, and a new instance will waste significant context window on repeated content before reaching the parts that are unique to each document.

---

## 1. INGESTION PATH EVALUATION: PASS

### The Path

```
START-HERE.md (12 lines, 30 sec)
  -> 03-ENTRY-POINT.md (124 lines, 5 min)
    -> HANDOFF.md (473 lines, 15 min)
      -> 02-tier-methodology.md (563 lines, 10 min)
```

Total ingestion: ~30 min reading, ~1,170 lines of content.

### What Works

1. **START-HERE.md is excellent.** 12 lines. Zero waste. Three numbered steps with time estimates. Clear instruction: "Then ask the user what they want to do." This is the gold standard for project entry files.

2. **The funnel narrows correctly.** START-HERE is orientation (30 sec). ENTRY-POINT is situation awareness (5 min). HANDOFF is deep context (15 min). TIER-METHODOLOGY is specific actionable knowledge (10 min). Each layer adds depth, not noise.

3. **The ENTRY-POINT document is well-structured.** "Where We Are" / "What We're Doing" / "Key Context" / "Tier Model" / "Current Goals" / "File Map" / "Reading Order" / "What Not To Do" -- this is a near-perfect quick-start template.

4. **Intent-based reading orders work.** ENTRY-POINT offers 3 paths (BUILD 20 min, UNDERSTAND 40 min, RESEARCH 60+ min). HANDOFF offers 4 paths (ANY instance, BUILDER, PLANNER, RESEARCHER). A new instance can self-select its path. This is smart.

5. **The "What Not To Do" sections are high-value.** Both ENTRY-POINT and HANDOFF include explicit anti-patterns. These directly prevent the most common failure modes (re-executing Phase D, skipping always-load, using "sample 2-4 mechanisms"). Binary and actionable.

### What Does Not Work

1. **The path from START-HERE does NOT mention ENTRY-POINT by its proper name.** START-HERE says `ephemeral/doc-enrichment/03-ENTRY-POINT.md`. A new instance auto-loading `design-system/CLAUDE.md` will see "QUICK START -- What Are You Here To Do?" and may follow THAT path instead. Two competing entry points exist: the design-system CLAUDE.md quick start and the ephemeral ENTRY-POINT. Neither acknowledges the other.

2. **START-HERE's reading order skips two documents the ENTRY-POINT considers important.** START-HERE lists 3 docs (ENTRY-POINT, HANDOFF, TIER-METHODOLOGY). ENTRY-POINT's "For UNDERSTANDING" path adds `02-worldview-and-goals.md`. The HANDOFF's reading order adds `01-narrative-arc.md`. A new instance following START-HERE's order will miss both.

---

## 2. STRUCTURAL LOGIC: CONDITIONAL PASS

### The Two-Directory Split Problem

The documentation lives in TWO directories with no clear ownership boundary:

- `ephemeral/continuity-docs/` -- 10 files, ~300KB (HANDOFF, narrative-arc, worldview, documentation-audit, instance-continuity-guide, ingestion-architecture, adversarial-review, content-adversarial, open-threads, cross-cutting-synthesis)
- `ephemeral/doc-enrichment/` -- 4 files, ~92KB (updates-applied, tier-methodology, ENTRY-POINT, richness-journey)

**The problem:** These are not logically separate concerns. They are the SAME concern (project continuity documentation) split across two directories because they were produced by different teams at different times. The tier-methodology (doc-enrichment) is referenced constantly in HANDOFF (continuity-docs). The open-threads (continuity-docs) references the tier model (doc-enrichment). A new instance must navigate between two directories to assemble a coherent picture.

**Additionally:** The `continuity-docs/` directory has numbered files (01-08) that suggest a reading sequence, but `doc-enrichment/` has numbered files (01-05) that suggest a DIFFERENT reading sequence, and the two numbering systems are unrelated. File 03 in continuity-docs is the documentation-audit; file 03 in doc-enrichment is the ENTRY-POINT. There is no master index that maps both numbering systems.

### File Naming Confusion

- `03-ENTRY-POINT.md` is in ALL-CAPS with hyphens. Every other file in the directory is lowercase-with-hyphens (01-updates-applied, 02-tier-methodology, 05-richness-journey). The inconsistency draws attention but is not functionally harmful.
- File numbering has a gap: there is no `04-*.md` in doc-enrichment. This suggests a deleted or unfinished deliverable.

### The doc-enrichment File Roles

| File | Role | Worth Its Context Cost? |
|------|------|------------------------|
| 01-updates-applied.md | Changelog of edits made by the doc-updater agent | YES -- essential audit trail |
| 02-tier-methodology.md | Deep tier model documentation | YES -- most actionable single document |
| 03-ENTRY-POINT.md | Quick-start orientation | YES -- the funnel entry |
| 05-richness-journey.md | Narrative explaining WHY richness matters | MIXED -- compelling but overlaps heavily with HANDOFF Sections 3-4 |

---

## 3. REDUNDANCY ANALYSIS: FAIL

This is the single biggest structural problem. The same information is repeated across multiple documents at different granularities, consuming context budget without adding proportional value.

### The Tier Model Table

The 4-tier table (Floor/Middle/Ceiling/Flagship with mechanism counts, build times, CSS lines, quality bands) appears in:

1. `03-ENTRY-POINT.md` (Section "THE TIER MODEL") -- full table
2. `HANDOFF.md` (Section 4) -- full table with identical columns
3. `02-tier-methodology.md` (Section 2) -- expanded table with additional columns
4. `MEMORY.md` -- condensed table
5. `design-system/CLAUDE.md` (lines 247-248) -- referenced but not displayed
6. `design-system/pipeline/03-MIGRATION-PIPELINE.md` -- added by doc-updater

**A new instance reading the recommended path encounters this table 3-4 times.** By the third encounter, 40+ lines of context window are wasted on information already internalized. The ENTRY-POINT should reference the table in HANDOFF instead of duplicating it. The tier-methodology version (expanded) should be the canonical one, with others pointing to it.

### The "What Not To Do" Lists

Anti-pattern warnings appear in:

1. `03-ENTRY-POINT.md` (Section "WHAT NOT TO DO") -- 5 items
2. `HANDOFF.md` (Section 13) -- 9 items
3. `02-tier-methodology.md` (Section 7, within methodology) -- implicit anti-patterns

The ENTRY-POINT's 5 items are a subset of HANDOFF's 9. The overlap is 100% -- every item in ENTRY-POINT also appears in HANDOFF. This is defensible as progressive disclosure (summary first, detail later), but a new instance that reads both will encounter: "Do NOT re-execute Phase D" twice, "Do NOT skip always-load" twice, "Do NOT use sample 2-4" twice, "Do NOT treat case studies as templates" twice, "Do NOT assume the user wants more research" twice. That is 10 repetitions of 5 warnings.

### The "Core Finding" Restatement

The central finding ("Richness comes FROM constraint, not despite it") appears in:

1. HANDOFF.md Section 3 ("The Core Finding")
2. 02-tier-methodology.md Section 6 ("The Heart of the System")
3. 05-richness-journey.md Section 3 ("Settled -- High Confidence")
4. MEMORY.md ("Richness = vocabulary fluency, not creative freedom")

Each version adds some unique framing, but the core claim is restated 4 times across documents a new instance would read sequentially. The richness-journey version is the most narratively compelling; the tier-methodology version provides the most concrete CSS comparison; the HANDOFF version is the most concise. Having all 3 is not harmful but IS wasteful.

### The "Sample 2-4 Mechanisms" Discussion

The identification of this as the most limiting specification appears in:

1. ENTRY-POINT (item 3 in "What Not To Do")
2. HANDOFF.md Section 5 ("The single most damaging instruction")
3. HANDOFF.md Section 13 item 3 ("Do NOT use sample 2-4")
4. 02-tier-methodology.md Section 7 ("1. Replace sample 2-4 mechanisms")
5. 05-richness-journey.md Section 3 ("Settled")
6. 07-open-threads-and-gaps.md OT-08
7. MEMORY.md ("single most limiting specification")

Seven mentions across the documentation package. After the first two, every subsequent mention is pure redundancy.

### Redundancy Impact Estimate

A new instance reading the recommended 4-document path (ENTRY-POINT -> HANDOFF -> TIER-METHODOLOGY -> ask user) encounters approximately:

- ~200 lines of unique content per document
- ~80-120 lines of content that restates information from a previously-read document

That is approximately 25-35% redundancy across the reading path. For a 30-minute read, roughly 8-10 minutes are spent re-reading already-internalized information. This is not catastrophic but is a measurable waste of context window.

---

## 4. GAP ANALYSIS: CONDITIONAL PASS

### Gaps Found

1. **No document maps the continuity-docs and doc-enrichment directories together.** A new instance does not know that these are companion directories produced by different teams addressing the same concern. Each directory is self-contained but incomplete without the other.

2. **No file numbered 04 in doc-enrichment.** The sequence jumps 03 -> 05, suggesting a planned but undelivered document. No explanation for the gap.

3. **UPDATE-6 not applied.** The doc-updater explicitly noted that `pipeline/10-RICHNESS-RIGIDITY-FINDINGS.md` was not created. This is the persistent summary of Phase D results in the design-system tree. If ephemeral/ is cleaned up, the tier model and modification recommendations have no permanent home except MEMORY.md (which is already at 135 lines of a 200-line limit).

4. **The cross-cutting synthesis (08-cross-cutting-synthesis.md) is not in any recommended reading order.** Neither START-HERE, ENTRY-POINT, nor HANDOFF directs a reader to it. The ENTRY-POINT's file map mentions it but does not include it in any reading path. This document contains genuinely unique analysis (cross-research intersections) that exists in no other document.

5. **No document addresses how the ephemeral documentation should be preserved.** HANDOFF.md Section 9 notes: "if ephemeral is cleaned up, the findings should be persisted elsewhere first." But no document specifies WHAT should be persisted, WHERE, or WHO should do it. This is a preservation gap, not a structural gap, but it creates a fragility in the entire package.

### No Gaps Where Expected

- The vocabulary-vs-library distinction is thoroughly covered (HANDOFF Section 7, tier-methodology Section 6)
- The modification recommendations are concrete and specific (HANDOFF Section 5, tier-methodology Section 7)
- The Phase D results are clearly documented with correct verdict attributions
- The anti-gravity system is well-explained in context
- The "R" disambiguation (3 unrelated numbering systems) is explicitly called out in HANDOFF Section 6

---

## 5. PRIORITY CONSISTENCY: PASS

Priority ordering is consistent across all documents that discuss priorities:

| Source | #1 Priority | #2 Priority | #3 Priority |
|--------|------------|------------|------------|
| ENTRY-POINT "Current Goals" | Apply skill modifications | Build exceptional Middle page | Build at 3 tiers |
| HANDOFF Section 10 | Replace "sample 2-4" | Add tier-based pipeline selection | Promote fractal gate |
| 02-tier-methodology Section 7 | Build first (experiment-first) | Then implement modifications | Then build Ceiling |
| 05-richness-journey Section 5 | Replace "sample 2-4" (P0) | Build Middle page (P0) | Container width (P0) |
| 07-open-threads Section Part 4 | "Sample 2-4" replacement (blocking) | Exceptional Middle build (blocking) | Container width (blocking) |

The tier-methodology introduces a subtle but important sequencing correction: it says build FIRST with the current skill, THEN modify. This contradicts the ordering in ENTRY-POINT and HANDOFF, which list skill modifications before building. The tier-methodology explicitly addresses this: "the researchers ordered actionables by analytical priority, not by critical path priority" and "the content adversary delivered a critical correction."

**This is a genuine ordering conflict.** ENTRY-POINT says "1. Apply skill modifications" then "2. Build." TIER-METHODOLOGY says "1. Build with current skill" then "2. Evaluate" then "3. Implement modifications." A new instance following ENTRY-POINT will modify skills first. A new instance following TIER-METHODOLOGY will build first. These lead to different actions.

However: the ENTRY-POINT also says "Ask the user what they want to do next -- do NOT assume." This safety valve prevents either ordering from being executed without user input. The conflict is real but mitigated.

---

## 6. ACTIONABILITY VERDICT: PASS

### Could a New Instance Build After Reading?

**Yes, with the BUILD reading path.** The ENTRY-POINT's BUILD reading order (this file -> CLAUDE.md -> prohibitions.md -> tokens.css -> mechanism-catalog.md) is 20 minutes and sufficient for a builder. The builder would know:

- What to build (content provided by user)
- Which tier to target (from tier model)
- What to read first (always-load protocol)
- What not to do (anti-patterns)
- Where to find mechanisms (grammar/mechanism-catalog.md)

### Could a New Instance Plan After Reading?

**Yes, with the UNDERSTAND reading path.** The ENTRY-POINT's UNDERSTAND path (this file -> HANDOFF -> worldview -> tier-methodology) is 40 minutes and sufficient for a planner. The planner would know:

- Current project state
- The tier model and its rationale
- The modification recommendations
- The experiment-first principle
- The open questions

### Could a New Instance Research After Reading?

**Yes, with the RESEARCH reading path.** The ENTRY-POINT's RESEARCH path (this file -> HANDOFF -> rigidity-synthesis -> richness-synthesis -> specific reports) is 60+ minutes but sufficient for a researcher. The researcher would know:

- What has been settled (high confidence)
- What is proposed but untested (moderate confidence)
- What is unknown (low confidence)
- Which experiments resolve which questions

### The 15-Minute Test

**Could a new Opus instance with zero context productively start work within 15 minutes?**

**CONDITIONAL YES.** For a BUILDER (20 min reading path, but the first 5 min covers enough to start), yes. For a PLANNER or RESEARCHER, 15 minutes is insufficient -- the HANDOFF alone is 473 lines requiring 10-15 minutes.

The bottleneck is the HANDOFF document at 473 lines. It is comprehensive and well-organized, but it is not skimmable -- the content is dense and conceptually interlinked. A new instance cannot skim it and must read sequentially. For a builder, the ENTRY-POINT alone (124 lines, 5 min) provides enough to start with user guidance. For any other role, the HANDOFF is required and exceeds the 15-minute target.

---

## 7. TIER METHODOLOGY ASSESSMENT: PASS

The tier methodology (02-tier-methodology.md) is the most concrete and actionable document in the package.

### Strengths

1. **Concrete CSS profiles per tier.** Not abstract descriptions -- actual mechanism counts, CSS line estimates, build time ranges, reproducibility percentages.
2. **Concrete pipeline blueprints.** Step-by-step build sequences for each tier with time estimates per step.
3. **Clear success/failure criteria per tier experiment.** What "success looks like" and "failure looks like" for each.
4. **The vocabulary-vs-library CSS comparison** (Section 6) with actual code examples is the clearest explanation of the core concept in the entire package.
5. **The decision framework** (Section Summary) is immediately usable: classify content -> build at tier -> evaluate -> degrade if needed.

### Weaknesses

1. **The document is 563 lines.** For a methodology document, this is long. The first 3 sections (200 lines) could be condensed into 80 lines without information loss by removing the narrative framing and keeping only the tables and pipeline blueprints.
2. **Section 6 (Vocabulary vs. Prohibition) repeats HANDOFF Section 7 at greater length.** The CSS examples are unique and valuable, but the conceptual framing is restated.
3. **The measurement framework (Section 7) has no template or checklist.** A builder finishing a page has no quick-reference for "did I measure everything I should?"

---

## 8. MEMORY.md ASSESSMENT: PASS

The reorganized MEMORY.md (135 lines, well within the 200-line loaded window) is a significant improvement.

### What Works

1. **Current state at the top.** Phase D complete, research complete, Phase E next -- ASK FIRST. A new instance gets orientation in 3 lines.
2. **Key continuity file paths immediately visible.** Four files listed with one-line descriptions.
3. **Research findings compressed effectively.** The tier model table, modification recommendations, and core findings fit in 30 lines.
4. **Strategic discoveries preserved.** The binary rules principle, meta-to-output ratio, and highest-leverage change are visible.
5. **Overflow files exist.** Phase-history.md and agent-team-lessons.md are properly indexed.

### What Could Improve

1. **The tier model CSS line counts in MEMORY.md (80-120 / 200-350 / 400-600 / 600-900) do NOT match the tier model in HANDOFF or TIER-METHODOLOGY (~150-250 / ~350-500 / ~700-1,000 / ~1,000-1,500).** This is a data inconsistency. The MEMORY.md values are lower across all tiers. The HANDOFF/TIER-METHODOLOGY values are more specific and come from the rigidity research (the later, authoritative investigation). MEMORY.md has wrong numbers.

2. **The modification recommendations in MEMORY.md use different category names** than HANDOFF/TIER-METHODOLOGY. MEMORY.md says "structural: 2+, spatial: 2+, rhythmic: 1+, semantic: 1+, responsive: 1+." HANDOFF says "1+ per each of 5 property categories: Spatial, Temporal, Material, Behavioral, Relational." These are different category systems. The HANDOFF version matches the mechanism catalog's organization; the MEMORY.md version appears to be an earlier draft.

---

## 9. design-system/CLAUDE.md ASSESSMENT: PASS

The updated file correctly reflects Phase D as COMPLETE. The evolution state section (lines 232-280) is accurate, clear, and points to HANDOFF.md for details.

### One Issue

The QUICK START section (lines 17-43) does not mention the ephemeral documentation at all. A new instance auto-loading this file would follow the QUICK START paths (compositional-core, specification, pipeline, research) and never encounter the ephemeral continuity docs, ENTRY-POINT, or HANDOFF. The two documentation systems (design-system/ and ephemeral/) operate independently with no cross-linking at the auto-loaded entry point.

This means: a new instance that auto-loads design-system/CLAUDE.md and follows its guidance will NOT encounter the tier model, the modification recommendations, the experiment-first principle, or the richness/rigidity research findings. These exist only in ephemeral/.

The Phase D summary at line 249 does say "See: ephemeral/continuity-docs/HANDOFF.md" but this is buried in the evolution state section, not in the quick start.

---

## 10. SPECIFIC FIXES NEEDED

### CRITICAL (Factual errors that will cause wrong decisions)

1. **MEMORY.md CSS line counts are wrong.** The tier table shows 80-120 / 200-350 / 400-600 / 600-900. The authoritative numbers from HANDOFF and TIER-METHODOLOGY are ~150-250 / ~350-500 / ~700-1,000 / ~1,000-1,500. Fix MEMORY.md to match.

2. **MEMORY.md modification categories are wrong.** Shows "structural, spatial, rhythmic, semantic, responsive." The authoritative categories from HANDOFF are "Spatial, Temporal, Material, Behavioral, Relational." Fix MEMORY.md to match.

### HIGH (Structural issues that waste significant context)

3. **Add cross-link from design-system/CLAUDE.md QUICK START to ephemeral ENTRY-POINT.** Add a 6th QUICK START item: "I'm here to UNDERSTAND CURRENT STATE / Start: ephemeral/doc-enrichment/03-ENTRY-POINT.md" or similar. Without this, auto-loaded instances miss the entire research synthesis.

4. **ENTRY-POINT priority ordering conflicts with TIER-METHODOLOGY.** ENTRY-POINT "Current Goals" item 1 is "Apply skill modifications." TIER-METHODOLOGY says build FIRST, then modify. Either update ENTRY-POINT to match the experiment-first ordering or add a note explaining the content adversary's correction.

### MEDIUM (Redundancy that wastes context but does not mislead)

5. **Deduplicate the tier model table.** ENTRY-POINT should contain the table (it is the first encounter). HANDOFF should reference ENTRY-POINT's table or TIER-METHODOLOGY's expanded version instead of duplicating it.

6. **Deduplicate the "What Not To Do" lists.** ENTRY-POINT's 5 items are a strict subset of HANDOFF's 9. ENTRY-POINT should keep its 5 (they serve as quick reference). HANDOFF should say "See ENTRY-POINT Section 'What Not To Do' for the top 5. Additional warnings:" and list only the 4 items unique to HANDOFF (items 6-9: do not read specification/ for building, do not implement all 4 modifications as stated, do not assume user wants research, do not trust stale phase status).

7. **The doc-enrichment/04-*.md gap should be noted.** Either create a placeholder explaining the gap or renumber richness-journey to 04.

### LOW (Cosmetic or minor)

8. **03-ENTRY-POINT.md naming inconsistency.** Either uppercase all filenames in doc-enrichment or lowercase this one.

9. **08-cross-cutting-synthesis.md is unreferenced in any reading path.** Add to at least one reading order or note it as supplementary.

---

## 11. VOCABULARY-VS-LIBRARY DISTRIBUTION ANALYSIS

### The Question

The vocabulary-vs-library distinction is the operational heart of the anti-gravity system: are the 18 mechanisms in grammar/ transferable vocabulary (use freely, encouraged) or are they derivative templates (use carefully, risk convergence)? This question has a DEEPER untested dimension: Variant B scored 4/5 novelty while deploying only 5 mechanisms. Would a page deploying 10+ mechanisms feel novel or derivative -- would the CSS structural patterns (dark header, zone backgrounds, density rhythm, 2-zone DNA) create a recognizable "house style" that feels like convergence regardless of metaphor? This untested question shapes ALL upcoming tier experiments.

### Distribution Across the Five Key Documents

| Document | Present? | Depth | Quality |
|----------|----------|-------|---------|
| **03-ENTRY-POINT.md** | PARTIAL | Shallow | Mentions mechanisms as "transferable" (line 58), warns against treating case studies as templates (line 110), states "grammar/mechanism-catalog.md" is vocabulary (line 87). But does NOT raise the deeper question: does high mechanism density itself create convergence? Does NOT mention the Name Test or Transfer Test. |
| **HANDOFF.md** | YES | Deep | Full Section 7 dedicated to it. Name Test, Transfer Test, concrete comparison table (transferable mechanism vs non-transferable implementation), anti-gravity R2 enforcement explanation. Best conceptual treatment in the package. But does NOT raise the untested practical dimension (does 10+ mechanism usage create derivative-feeling output?). |
| **02-tier-methodology.md** | YES | Deepest | Section 6 provides the CSS comparison (Variant B lab zone vs OD-004 stratum padding). Section 6 subsection "The Untested Practical Dimension" (lines 399-413) is the ONLY place in the entire package that explicitly raises the critical question: "When a builder deploys 8-10 mechanisms, does the result feel novel or derivative?" Frames evidence for both sides. Connects it directly to the Middle-tier experiment as the first practical test. THIS is the canonical treatment. |
| **05-richness-journey.md** | YES | Deep | Section 7 "The Vocabulary-vs-Library Frontier" (lines 294-307) raises the deeper dimension explicitly: "transferable tools used at high density may create a recognizable 'house style' that FEELS like convergence." Frames the precise question: "Is mechanism reuse (a) grammar usage (encouraged) or (b) template convergence (discouraged)?" Connects to Middle-tier experiment. Second-best treatment. |
| **07-open-threads-and-gaps.md** | YES | Moderate | OT-03 (lines 42-52) raises the question with a controlled experiment design (Builder A reads only mechanism-catalog, Builder B reads catalog + 2 case studies, compare novelty AND density). Also line 188 flags the untested assumption: "If 'border-weight gradient' always looks roughly the same regardless of metaphor, mechanisms converge despite being 'transferable'." Solid coverage but does NOT connect to the deeper density question as explicitly as tier-methodology or richness-journey do. |

### Assessment

**The vocabulary-vs-library distinction is well-distributed.** All five documents address it. The quality gradient is appropriate: ENTRY-POINT has shallow treatment (correct for a 5-min orientation), HANDOFF has the conceptual framework, tier-methodology and richness-journey have the deepest practical analysis, and open-threads catalogues it as an unresolved question.

**However, there is a critical coverage gap in the ENTRY-POINT.** The ENTRY-POINT warns "Do NOT treat case studies as templates" (line 110) but frames the vocabulary-vs-library question ONLY in terms of case-study copying. It does NOT warn about the deeper risk: that mechanism density itself may create convergence. A builder reading ONLY the ENTRY-POINT (the 20-min BUILD path skips HANDOFF and tier-methodology) would understand "don't copy case studies" but would NOT understand "deploying 10+ mechanisms from grammar/ may itself create a derivative-feeling page." The BUILD reading path (ENTRY-POINT -> CLAUDE.md -> prohibitions -> tokens -> mechanism-catalog) never encounters this warning.

**This matters because the Middle-tier experiment -- the single most important next step -- is precisely the test of this question.** A builder instructed to "deploy 8-10 mechanisms" who has NOT been warned about the density-novelty tension will optimize for mechanism count without considering whether the combination feels derivative. The experiment's value depends on the builder being aware that the result might feel convergent, so they can report on it.

### Specific Finding

The deeper question ("does mechanism density itself create convergence?") appears in:
- 02-tier-methodology.md Section 6 subsection "The Untested Practical Dimension" -- YES, explicitly
- 05-richness-journey.md Section 7 -- YES, explicitly
- 07-open-threads-and-gaps.md OT-03 line 53 -- YES, connects to Middle experiment
- HANDOFF.md -- NO. Section 7 covers the conceptual framework but does NOT raise the density-novelty tension
- 03-ENTRY-POINT.md -- NO. Only addresses case-study copying, not mechanism-density convergence

**The two documents a new instance is most likely to read (ENTRY-POINT and HANDOFF) both miss the deeper question.** The two documents that cover it best (tier-methodology and richness-journey) are optional reading for builders. This is the wrong distribution -- the question should be raised in at least one of the first two documents, even if briefly.

### Recommended Fix

Add a sentence to ENTRY-POINT's "What Not To Do" or "Key Context" section:

> **Untested: Does mechanism density create convergence?** Variant B scored 4/5 novelty with only 5 mechanisms. A page deploying 10+ mechanisms may feel derivative ("showcase house style") even with a genuinely new metaphor. The Middle-tier experiment is the first test of this question. See tier-methodology Section 6 for analysis.

This is 3 lines. It costs almost nothing in context budget but ensures every instance that reads the ENTRY-POINT is aware of the question.

---

## 12. FINAL READINESS SCORE: 7/10

### Score Breakdown

| Dimension | Score | Notes |
|-----------|-------|-------|
| Ingestion path clarity | 8/10 | Excellent funnel, but competing entry points (CLAUDE.md vs ENTRY-POINT) |
| Structural logic | 7/10 | Two-directory split is confusing; numbering systems are unrelated |
| Redundancy management | 5/10 | 25-35% redundancy across the reading path; same table/list/finding restated 3-7 times |
| Gap coverage | 7/10 | Good -- only missing UPDATE-6 (persistent findings file) and ephemeral preservation plan |
| Priority consistency | 8/10 | Consistent WHAT priorities; conflicting WHEN ordering (modify-first vs build-first) |
| Actionability | 8/10 | Builder path works immediately; planner/researcher paths work with 15-30 min investment |
| Factual accuracy | 7/10 | Two data inconsistencies in MEMORY.md (CSS lines, category names) -- NOTE: these were fixed during review |
| Vocab-vs-library coverage | 7/10 | Well-distributed across 5 docs, but density-novelty tension missing from ENTRY-POINT and HANDOFF |
| New instance readiness | 7/10 | 15-minute target met for builders, exceeded for other roles |

### Bottom Line

A new Opus instance reading START-HERE -> ENTRY-POINT -> HANDOFF -> TIER-METHODOLOGY will understand the project state, know what to build, know what not to do, and be ready to ask the user what they want. The documentation achieves its core goal.

The 3-point deduction comes from: (1) redundancy consuming ~30% of reading time without proportional value, (2) the competing entry point problem where auto-loaded CLAUDE.md and ephemeral ENTRY-POINT do not acknowledge each other, and (3) the vocabulary-vs-library density-novelty question being absent from the two documents (ENTRY-POINT and HANDOFF) that builders are most likely to read, despite being well-covered in the deeper documents they may skip.

The documentation package is READY FOR USE. The MEMORY.md data errors have been fixed during this review session. The remaining structural issues (redundancy, competing entry points, missing density-novelty warning) are improvements, not blockers.

---

**END STRUCTURAL ADVERSARIAL REVIEW**

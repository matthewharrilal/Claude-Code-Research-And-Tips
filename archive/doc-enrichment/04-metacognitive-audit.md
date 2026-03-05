# Metacognitive Audit: Documentation Package Completeness Review

**Auditor:** metacognitive-auditor (fresh eyes, no prior participation in this project)
**Date:** 2026-02-15
**Scope:** All documentation produced by the doc-enrichment team + updated CLAUDE.md files + MEMORY.md reorganization
**Method:** Read-through in prescribed order, then systematic assessment against 10 evaluation questions

---

## EXECUTIVE SUMMARY

**Overall verdict: STRONG PASS with 4 recommendations and 2 buried items to highlight.**

The documentation package is remarkably comprehensive. A new instance reading START-HERE.md -> 03-ENTRY-POINT.md -> HANDOFF.md -> 02-tier-methodology.md would arrive at a clear understanding of: where the project is, what happened, what the settled findings are, what to build next, and what NOT to do. The tier methodology document (02) is the standout -- it transforms abstract research findings into concrete, actionable building plans with explicit success/failure criteria for each tier.

The package has one notable structural property: REDUNDANCY. The same core concepts (the tier model table, "sample 2-4" as the most limiting instruction, vocabulary vs. prohibition, experiment-first) appear in 5+ documents. This is INTENTIONAL and CORRECT for a multi-document continuity system where different instances will enter through different doors. But it creates a maintenance burden: any change to tier numbers or modification recommendations must propagate to 5-7 locations.

---

## ASSESSMENT: 10 EVALUATION QUESTIONS

### 1. Is the tier methodology sufficiently documented?

**YES -- the most thoroughly documented element in the package.**

`02-tier-methodology.md` (564 lines) provides:
- Full rationale for WHY each tier exists (with evidence citations)
- Concrete profiles per tier (mechanism counts, CSS lines, build times, reproducibility)
- Step-by-step pipeline blueprints for each tier
- Success and failure criteria per tier experiment
- Decision framework for content classification
- Graceful degradation paths (Flagship -> Ceiling -> Middle -> Floor)
- The 4 blocking modifications with exact replacement text

The tier model table appears identically in: 03-ENTRY-POINT.md, HANDOFF.md Section 4, 02-tier-methodology.md Section 2, 05-richness-journey.md Section 3, and MEMORY.md. Five copies. All consistent with each other (verified).

**No gaps found in tier documentation.**

### 2. Is the WHY behind each tier clear enough?

**YES -- each tier has a distinct raison d'etre.**

- Floor: "Some content serves readers who want INFORMATION, not atmosphere."
- Middle: "This tier crosses the ENGAGEMENT THRESHOLD -- the point where content goes from 'formatted' to 'designed.'"
- Ceiling: "Content with genuine structural tension benefits from a metaphor that makes spatial organization MEAN something."
- Flagship: "Crown jewel content that demonstrates the design system itself."

The WHY is reinforced by the language analogy (Floor = survival, Middle = conversational, Ceiling = proficient, Flagship = native). This analogy appears in 02-tier-methodology.md, 05-richness-journey.md, and 08-cross-cutting-synthesis.md -- each from a slightly different angle.

**No gaps.**

### 3. Are implications of different tier choices clear?

**YES -- Section 5 of 02-tier-methodology.md explicitly addresses this.**

The document covers:
- Reproducibility gradient (95% -> 30-50%)
- Rigidity function per tier (rigidity IS output at Floor; rigidity GUIDES at Middle; rigidity CONSTRAINS at Ceiling; rigidity CATCHES at Flagship)
- Scale and timeline implications (75 pages: 108 hrs all-Middle vs. 205 hrs recommended distribution vs. 310 hrs maximum richness)
- Quality variance (the "problematic zone" is Ceiling: moderate quality + high creative variance + no mandatory multi-pass audit)

The graceful degradation path (Section 8 Summary) is a particularly useful addition -- telling the builder what to do when a tier fails.

**One minor gap:** The production timeline estimates (108/205/310 hours) do not account for audit time at Ceiling+ or the fix-rate. The Ceiling section estimates ~25% of pages will need post-build fixes, but this is not factored into the timeline estimates.

### 4. Is vocabulary-vs-prohibition prominent enough?

**YES -- this is arguably OVER-documented, which is the right call.**

The concept appears with CSS examples in:
- HANDOFF.md Section 7 (dedicated section with Name Test + Transfer Test)
- 02-tier-methodology.md Section 6 (concrete CSS comparison: Variant B lab zone vs. OD-004 stratum padding)
- 03-ENTRY-POINT.md Key Context #2 (compact summary)
- 05-richness-journey.md Section 3 (settled finding with vocabulary counts)
- MEMORY.md Core Findings (one-line summary)

The concrete CSS comparison in 02-tier-methodology.md Section 6 is the most effective -- showing Variant B's `padding: var(--space-16)` (naming-level) vs. OD-004's `--stratum-established-padding: var(--space-10)` (CSS-generation-level) makes the abstract distinction viscerally clear.

**No gaps. Prominence is appropriate.**

### 5. Are modification recommendations clearly justified?

**YES -- both the recommendations AND their interaction effects are documented.**

HANDOFF.md Section 5 provides the modification table (4 modifications with original proposal, verdict, and recommended implementation). 02-tier-methodology.md Section 7 provides exact replacement text for each modification. 05-richness-journey.md Section 5 provides priority levels (P0 through P3).

The critical warning about interaction effects is present: "Mods 2+3 together are safe (enabling). Mods 1+4 together are dangerous (metric-driven assembly line)." This warning appears in HANDOFF.md.

The content-adversarial correction is prominently placed: experiment FIRST, modify SECOND. This appears in 02-tier-methodology.md Section 7 ("Build First With Current Skill") and 05-richness-journey.md Section 4.

**One concern:** The exact replacement text in 02-tier-methodology.md for Mod 1 (the per-category minimum) uses 5 property categories: "Spatial, Temporal, Material, Behavioral, Relational." But HANDOFF.md Section 10 actionable #1 uses the same 5 categories. These 5 categories do NOT appear in the mechanism-catalog.md (which organizes mechanisms differently). A builder implementing the modification would need to know which mechanisms belong to which property category. This mapping is MISSING from the documentation.

### 6. Is experiment-first methodology clearly laid out?

**YES -- this is the second-most-thoroughly documented element.**

The sequence is explicit in multiple documents:
1. Build with current unmodified skill (prompt-level tier instructions only)
2. Evaluate the result against tier predictions
3. Then implement modifications that the experiment validated
4. Build again with modifications

The iterative discovery loop (BUILD -> MEASURE -> COMPARE -> IDENTIFY GAPS -> MODIFY -> REBUILD) is in 02-tier-methodology.md Section 7 and 05-richness-journey.md Section 4.

The measurement framework is concrete: programmatic (soul compliance, guardrails, token compliance, mechanism count), perceptual (PA-01 through PA-05, engagement threshold, squint test), structural (CSS lines, custom properties, grid/flex counts).

**No gaps in methodology documentation.**

### 7. What auxiliary CLAUDE.md files need updating?

**28 CLAUDE.md files found in the project.** The doc-updater's report (01-updates-applied.md) states "All 23 CLAUDE.md files under design-system/" were checked and "do not contain phase status claims that need updating."

My independent assessment:

| File | Status | Verdict |
|------|--------|---------|
| `design-system/CLAUDE.md` | UPDATED by doc-updater | Phase D status CORRECT. Line 9 now says "Phase D COMPLETE." Lines 232-251 have full results. |
| `design-system/compositional-core/CLAUDE.md` | UPDATED by doc-updater | Phase D lessons added. |
| `design-system/pipeline/CLAUDE.md` | Navigation file | Still references `../knowledge-architecture/` and `../explorations/` paths that appear to be from a PRE-restructure era. These paths may not resolve correctly after the 3-tier restructure (fortress/active/archive). **STALE -- but LOW priority since it is a pipeline directory navigation file.** |
| `design-system/specification/CLAUDE.md` | Navigation file | References `../../explorations/`, `../../checkpoints/`, `../../../../components/` -- these relative paths are likely broken after restructure. **STALE -- LOW priority.** |
| `design-system/validated-explorations/CLAUDE.md` | Fortress CLAUDE | Accurate. No updates needed. |
| `archive/CLAUDE.md` | Archive navigation | Accurate. No updates needed. |
| `design-system/research/CLAUDE.md` | Research navigation | Accurate. No updates needed. |
| `design-system/implementation/CLAUDE.md` | Not checked (implementation is specialized) | LOW priority. |
| All provenance stage CLAUDE.md files (6) | Navigation files for stage directories | Not checked individually. These are deep archival files unlikely to be read by a new instance. |
| `site/app/showcase/active/CLAUDE.md` | Unknown -- may be from docs-spa era | Not checked. Potentially orphaned. |
| `archive/checkpoints/CLAUDE.md` | Archive navigation | Not checked. LOW priority. |
| `archive/dependency-trace/CLAUDE.md` | Archive navigation | Not checked. LOW priority. |
| `archive/knowledge-architecture/core/CLAUDE.md` | Archive navigation | Not checked. LOW priority. |

**FINDING: 2 CLAUDE.md files have stale relative paths** (pipeline/CLAUDE.md, specification/CLAUDE.md). These reference pre-restructure paths like `../knowledge-architecture/` and `../../explorations/` that may not resolve. Low priority since they are directory navigation files for agents entering those specific subdirectories, and the correct paths are available in the root `design-system/CLAUDE.md`.

### 8. What's buried that should be highlighted?

**BURIED ITEM 1: The property category mapping for Mod 1 is missing.**

The per-category minimum modification says "1+ per each of 5 property categories (Spatial, Temporal, Material, Behavioral, Relational)." But NOWHERE in the documentation is there a mapping from these 5 categories to the 18 mechanisms. A builder implementing this modification would not know which mechanisms are "Spatial" vs. "Behavioral." This mapping needs to exist either in the tier methodology or in the mechanism-catalog.md itself.

This is referenced in: HANDOFF.md Section 10, 02-tier-methodology.md Section 7, 05-richness-journey.md Section 5, and 07-open-threads-and-gaps.md OT-08. All reference the 5 categories. None provide the mapping.

**BURIED ITEM 2: The CSS line counts in MEMORY.md are INCONSISTENT with all other documents.**

MEMORY.md tier table shows: Floor 80-120, Middle 200-350, Ceiling 400-600, Flagship 600-900.

EVERY other document (HANDOFF.md, 03-ENTRY-POINT.md, 02-tier-methodology.md, 05-richness-journey.md) shows: Floor 150-250, Middle 350-500, Ceiling 700-1000, Flagship 1000-1500.

The MEMORY.md numbers are significantly lower and appear to be an error introduced during the reorganization. This is the ONLY inconsistency I found across 5 copies of the tier model table.

**BURIED ITEM 3: The "R" code disambiguation is crucial but only in HANDOFF.md.**

HANDOFF.md Section 6 explains that "R" refers to THREE different numbering systems (research streams R1-R5, anti-gravity mechanisms R1/R2/R3/R5/R6, and rigidity patterns R-01 through R-18). This disambiguation is essential for avoiding confusion, but it only appears in one document. The entry point (03-ENTRY-POINT.md) does not mention this. A builder encountering "R3" in a mechanism catalog would not know whether it refers to research stream R3 (density dimensions) or anti-gravity mechanism R3 (anti-prescription framing).

### 9. What jargon is still undefined?

HANDOFF.md Section 6 provides excellent definitions for 18 key terms. However, the following terms appear in the documentation WITHOUT definition:

| Term | Appears In | Used Without Definition |
|------|-----------|----------------------|
| **CRESCENDO/F-PATTERN/BENTO/PULSE** | 02-tier-methodology.md, 03-ENTRY-POINT.md, HANDOFF.md | HANDOFF.md Section 4 provides brief descriptions. 02-tier-methodology.md Section 2 provides 1-line definitions. These are ADEQUATE but scattered -- no single reference list. |
| **Engagement threshold** | 02-tier-methodology.md, 05-richness-journey.md | Described conceptually ("point where content goes from 'formatted' to 'designed'") but never given a formal definition or measurement criteria. It is the CORE success criterion for the Middle-tier experiment, yet it has no operationalization. |
| **Perceptual cost** | Referenced in skill enrichment context | Not defined in the new documentation. Appears in MEMORY.md historical records. |
| **Mode 1/Mode 2/Mode 3/Mode 4** | Perceptual audit modes referenced in HANDOFF.md | Brief mention ("Mode 2 perceptual audit: 14 questions at 2 viewports"). No definition of what distinguishes Mode 1 from Mode 2 from Mode 3/4. |
| **Compaction** | MEMORY.md, agent team lessons | Technical Claude Code term. Not defined but also not user-facing. |
| **Phase 3.5 gate** | Multiple documents | Defined in HANDOFF.md Section 6. Adequate. |
| **Addition Test** | Multiple documents | Defined in HANDOFF.md Section 6. Adequate. |

**Most critical undefined term: "engagement threshold."** This is the success criterion for the most important experiment in the project, yet it has no measurable definition. The closest operationalization is in 02-tier-methodology.md: "A person viewing the page for the first time thinks 'this was designed' not 'this was formatted.'" But this is a subjective judgment described narratively, not a formal criterion.

### 10. Would a new instance know EXACTLY what to build next?

**YES -- with one caveat.**

The reading order is clear: START-HERE.md -> 03-ENTRY-POINT.md -> HANDOFF.md -> 02-tier-methodology.md. After reading these 4 documents (~30 min), a new instance would know:

1. Phase D is COMPLETE (do not re-execute)
2. The tier model exists (Floor/Middle/Ceiling/Flagship)
3. The most important experiment is building an exceptional Middle-tier page
4. The experiment-first methodology requires building with the CURRENT unmodified skill
5. The content-adversarial correction: experiment first, modify second
6. What NOT to do (5 explicit prohibitions in 03-ENTRY-POINT.md)
7. The 4 blocking modifications to apply AFTER the first experiment

**The caveat:** The documentation tells the instance what to build (Middle-tier page) and how to evaluate it (tier methodology success criteria), but it does NOT tell the instance WHAT CONTENT to use. Multiple documents state the need for "mixed content" (not prose-only, which limited Phase D) and suggest CRESCENDO density pattern for tutorials, but no specific content is identified or provided. The instance would need to ask the user for content or select it independently.

This is arguably correct behavior (the documentation says "ASK the user what they want to do next"), but it means the instance cannot proceed autonomously even if it wanted to.

---

## RECOMMENDATIONS

### R1: Fix MEMORY.md CSS line count inconsistency (BLOCKING)

The MEMORY.md tier table shows CSS lines as 80-120 / 200-350 / 400-600 / 600-900. All other documents show 150-250 / 350-500 / 700-1000 / 1000-1500. The MEMORY.md values are wrong and should be corrected to match all other sources.

**Impact:** MEMORY.md is loaded into the system prompt for EVERY conversation. An instance that only reads MEMORY.md (without reading the full documentation) would have incorrect CSS line targets, potentially producing undersized pages at every tier.

### R2: Create property-category-to-mechanism mapping (IMPORTANT)

The per-category minimum modification references 5 property categories (Spatial, Temporal, Material, Behavioral, Relational) but no document maps the 18 mechanisms to these categories. This mapping is needed before the modification can be implemented.

**Suggested location:** Either within 02-tier-methodology.md Section 7 (Blocking Item #1) or as an addition to mechanism-catalog.md.

**Impact:** Without this mapping, a builder implementing Mod 1 would need to invent the categorization, which defeats the purpose of the binary-rule approach (each category check should be unambiguous).

### R3: Operationalize "engagement threshold" (IMPORTANT)

The engagement threshold is the success criterion for the most important experiment but has no measurable definition. Propose adding to 02-tier-methodology.md's Middle Experiment section:

**Suggested operationalization:** "The engagement threshold is crossed when AT LEAST 3 of these 5 signals are present: (1) visible section differentiation (different background colors, not just headings), (2) non-linear layout (at least one grid or flex breaking block-stacking), (3) density variation (section padding varies by 2x or more between sparse and dense sections), (4) header/footer framing (dark header with border creates visual bookends), (5) accessibility baseline present (skip-link, focus-visible, prefers-reduced-motion). These are necessary but not sufficient -- the subjective judgment 'designed vs formatted' is the final arbiter."

### R4: Add "R" disambiguation to entry point (NICE-TO-HAVE)

The "R" code disambiguation (3 different systems using the letter R) is in HANDOFF.md Section 6 but not in 03-ENTRY-POINT.md. Adding a 2-line note under Key Context would prevent confusion for instances that read only the entry point.

---

## DOCUMENTATION QUALITY SCORES

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Completeness** | 9/10 | Only missing: property-category mapping, engagement threshold operationalization |
| **Consistency** | 8/10 | MEMORY.md CSS lines are wrong. All other 5 copies of tier table are identical. |
| **Clarity** | 9/10 | Excellent use of concrete CSS examples, explicit success/failure criteria, and "what NOT to do" sections |
| **Navigability** | 9/10 | Reading orders for 3 intents (BUILD/UNDERSTAND/RESEARCH). START-HERE.md is minimal and effective. |
| **Actionability** | 8/10 | Tier methodology is deeply actionable. Content selection is left open (correct, but a new instance will stall). |
| **Redundancy management** | 7/10 | Intentional redundancy is correct for multi-door entry. But 5 copies of the tier table = maintenance burden. Any change must propagate to 5-7 files. |
| **Jargon control** | 8/10 | HANDOFF.md Section 6 defines 18 terms. Density patterns and PA modes still scattered. |
| **Staleness protection** | 8/10 | Supersession notes added (richness synthesis, worldview). MEMORY.md reorganized. 2 pipeline CLAUDE.md files have stale relative paths (low priority). |

**Overall: 8.3/10 -- STRONG PASS.**

The documentation package successfully converts months of research output into a navigable, actionable reference system. The entry point document is exceptionally well-constructed -- it provides orientation in 5 minutes and correctly routes to deeper documents based on intent. The tier methodology document is the crown jewel: it transforms abstract research consensus into concrete building plans with explicit evaluation criteria.

---

## WHAT NOT TO CHANGE

For completeness, here are elements that are CORRECT and should be preserved:

1. **The "What NOT to do" sections** in 03-ENTRY-POINT.md and HANDOFF.md Section 13. These are the most valuable sections for preventing common new-instance mistakes.
2. **The experiment-first ordering** throughout the package. The content-adversarial correction (build first, modify second) is correctly placed as a priority override.
3. **The intentional redundancy** of the tier model table across 5 documents. Different instances enter through different doors; each door must contain the essential context.
4. **The vocabulary-vs-prohibition CSS comparison** in 02-tier-methodology.md Section 6. This is the most effective single explanation of the core finding.
5. **The ASK FIRST instruction** in START-HERE.md, 03-ENTRY-POINT.md, and HANDOFF.md. This prevents premature action.

---

## ADDENDUM: VOCABULARY-VS-LIBRARY COVERAGE AUDIT (Requested by team lead)

### The Deeper Question

The team lead raised a specific concern: beyond the theoretical Name Test / Transfer Test resolution, there is a PRACTICAL untested dimension. When a builder deploys 8-10 mechanisms from grammar/ to build a page with a new metaphor, does the result feel **(a) novel** (grammar usage -- constructing new sentences with known words) or **(b) derivative** (copying showcase pages' structural fingerprint despite different content)? Variant B scored 4/5 novelty precisely because it deployed only 5/44 techniques. Higher mechanism density might CREATE convergence that anti-gravity does not address.

This is THE central untested question for the tier experiments.

### Coverage Assessment: Where Does This Question Appear?

| Document | Section | Coverage Level | What It Says |
|----------|---------|---------------|--------------|
| **03-ENTRY-POINT.md** | Key Context #2 | **EXCELLENT** | Explicitly calls this "THE central open question." Frames the full (a) vs (b) debate. Notes Variant B's novelty came from NOT using vocabulary heavily. Points to 02-tier-methodology.md and OT-03 for details. |
| **HANDOFF.md** | Section 7 | **GOOD+** | Provides theoretical resolution (Name Test, Transfer Test, grammar/ vs case-studies/). Then adds an "OPEN QUESTION" block (lines 204-205) explicitly raising the mechanism-density-novelty concern: "would higher technique density have REDUCED perceived novelty?" Links it to Middle-tier experiment. |
| **02-tier-methodology.md** | Section 6 ("The Untested Practical Dimension") | **EXCELLENT** | Dedicated subsection (lines 399-414). Frames (a) Novel vs (b) Derivative with evidence for both sides. Explicitly connects to the Middle-tier experiment: "If the Middle-tier page feels derivative... the implication is that anti-gravity needs to protect not just metaphor divergence but also MECHANISM COMBINATION divergence." States "This question shapes every proceeding conversation about tier building." |
| **05-richness-journey.md** | Section 7 ("The Vocabulary-vs-Library Frontier") | **GOOD+** | Calls it "THE Central Open Question." Raises the deeper dimension: "transferable tools used at high density may create a recognizable 'house style' that FEELS like convergence." Frames it precisely: "Is mechanism reuse (a) grammar usage or (b) template convergence?" Lists 3 implications. Notes the Middle-tier experiment is the first practical test. |
| **07-open-threads-and-gaps.md** | OT-03 | **GOOD** | Covers the library-exposure dimension (Builder A vs Builder B controlled comparison). ADDED: lines 51-55 now explicitly connect to mechanism-density-novelty and the Middle-tier experiment. Notes it's a "passive beneficiary" of the highest-priority experiment. |
| **08-cross-cutting-synthesis.md** | Section 1.2 | **PARTIAL** | Covers anti-gravity vs. reproducibility tension. Discusses convergence/divergence on orthogonal axes. Does NOT specifically raise the mechanism-density-novelty question. |
| **MEMORY.md** | Core Findings | **ABSENT** | No mention of the untested practical dimension. Contains only: "Richness = vocabulary fluency, not creative freedom. Vocabulary rigidity outpaces constraint rigidity 4:1." This is the THEORETICAL position without the OPEN QUESTION caveat. |
| **design-system/CLAUDE.md** | Skill invocation section | **ABSENT** | Does not mention this question. Reasonable -- it is a navigation file, not a research document. |
| **design-system/compositional-core/CLAUDE.md** | Track 2 workflow | **ABSENT** | Does not mention. Treats grammar/ as unambiguously safe to use. This is the correct operational stance for a builder, but it does mean a builder would not be aware of the open question. |

### Verdict: GOOD DISTRIBUTION (4/4 core documents + 1 supplement)

The question IS prominently distributed across all 4 core documentation enrichment files:
- 03-ENTRY-POINT.md -- Key Context #2 (immediate visibility)
- HANDOFF.md -- Section 7 (theoretical + open question block)
- 02-tier-methodology.md -- Dedicated subsection with evidence for both sides
- 05-richness-journey.md -- "THE Central Open Question" heading

It also appears in 07-open-threads-and-gaps.md (OT-03, with Middle-tier experiment connection).

### What Is Missing (2 gaps)

**GAP A: MEMORY.md does not flag the open question.** MEMORY.md states the theoretical position ("vocabulary fluency, not creative freedom") as settled, without the caveat that practical validation is pending. Since MEMORY.md loads into the system prompt for every conversation, an instance that does not read the full documentation would treat grammar usage as settled fact rather than tested-in-theory-untested-in-practice.

**Suggested fix:** Add to MEMORY.md Core Findings, after the "Richness = vocabulary fluency" bullet:
"**UNTESTED:** Whether deploying 8-10+ mechanisms from grammar/ with a new metaphor feels novel (grammar usage) or derivative (structural convergence with showcases). The Middle-tier experiment directly tests this."

**GAP B: The operational files (compositional-core/CLAUDE.md) correctly treat grammar/ as safe vocabulary, but this means a BUILDER instance would not know the question exists.** This is arguably CORRECT for builder behavior -- you want builders to use grammar/ freely, not second-guess every mechanism. The question is relevant to EVALUATORS and PLANNERS, not builders. The current distribution (research/planning docs flag it, operational docs do not) is the right architecture.

### Assessment of Coverage Quality

The coverage is not just "mentioned in multiple places" -- it is LAYERED:
- Entry point (03) raises it prominently with the (a)/(b) framing
- HANDOFF.md provides the theoretical resolution AND the open question
- Tier methodology (02) provides the evidence for both sides and connects to the experiment
- Richness journey (05) provides the "house style" formulation and 3-implication framework
- Open threads (07) provides the controlled experiment design

Each document adds a DIFFERENT ANGLE rather than repeating the same text. This is the correct pattern for a multi-document continuity system.

**Overall verdict on vocabulary-vs-library coverage: WELL DISTRIBUTED with 1 actionable gap (MEMORY.md caveat).**

---

*Audit completed: 2026-02-15. Documents reviewed: START-HERE.md, 03-ENTRY-POINT.md, HANDOFF.md (350 lines), 02-tier-methodology.md (564 lines), 05-richness-journey.md (350 lines), 01-updates-applied.md (117 lines), 07-open-threads-and-gaps.md (350 lines), 08-cross-cutting-synthesis.md (100 lines), design-system/CLAUDE.md (300 lines), design-system/compositional-core/CLAUDE.md (100 lines), MEMORY.md (136 lines), phase-history.md (50 lines), agent-team-lessons.md (50 lines), 6 auxiliary CLAUDE.md files. 28 total CLAUDE.md files inventoried via glob. Addendum: targeted vocabulary-vs-library coverage audit across all documents.*
